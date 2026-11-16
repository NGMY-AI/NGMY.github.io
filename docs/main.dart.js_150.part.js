((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,Aj,A8,Ak,Al,V,A9,Am,An,C={
uk(d,e){for(;;){if(!(d>0&&e[d-1]===0))break;--d}return d},
hbN(d,e,f,g){var w,v=new Uint16Array(g),u=f-e
for(w=0;w<u;++w)v[w]=d[e+w]
return v},
KI(d){var w
if(d===0)return $.DN()
if(d===1)return $.a44()
if(d===2)return $.hIF()
if(Math.abs(d)<4294967296)return C.bch(A.o.M(d))
w=C.i3_(d)
return w},
bch(d){var w,v,u,t,s=d<0
if(s){if(d===-9223372036854776e3){w=new Uint16Array(4)
w[3]=32768
v=C.uk(4,w)
return new C.oj(v!==0,w,v)}d=-d}if(d<65536){w=new Uint16Array(1)
w[0]=d
v=C.uk(1,w)
return new C.oj(v===0?!1:s,w,v)}if(d<=4294967295){w=new Uint16Array(2)
w[0]=d&65535
w[1]=A.o.aI(d,16)
v=C.uk(2,w)
return new C.oj(v===0?!1:s,w,v)}v=A.o.aq(A.o.galD(d)-1,16)+1
w=new Uint16Array(v)
for(u=0;d!==0;u=t){t=u+1
w[u]=d&65535
d=A.o.aq(d,65536)}v=C.uk(v,w)
return new C.oj(v===0?!1:s,w,v)},
i3_(d){var w,v,u,t,s,r,q,p
if(isNaN(d)||d==1/0||d==-1/0)throw B.W(B.dM("Value must be finite: "+d,null))
d=Math.floor(d)
if(d===0)return $.DN()
w=$.hIE()
for(v=w.$flags|0,u=0;u<8;++u){v&2&&B.aj(w)
w[u]=0}v=J.lo(A.aI.gaU(w))
v.$flags&2&&B.aj(v,13)
v.setFloat64(0,d,!0)
v=w[7]
t=w[6]
s=(v<<4>>>0)+(t>>>4)-1075
r=new Uint16Array(4)
r[0]=(w[1]<<8>>>0)+w[0]
r[1]=(w[3]<<8>>>0)+w[2]
r[2]=(w[5]<<8>>>0)+w[4]
r[3]=t&15|16
q=new C.oj(!1,r,4)
if(s<0)p=q.mF(0,-s)
else p=s>0?q.dX(0,s):q
return p},
hbO(d,e,f,g){var w,v,u
if(e===0)return 0
if(f===0&&g===d)return e
for(w=e-1,v=g.$flags|0;w>=0;--w){u=d[w]
v&2&&B.aj(g)
g[w+f]=u}for(w=f-1;w>=0;--w){v&2&&B.aj(g)
g[w]=0}return e+f},
huF(d,e,f,g){var w,v,u,t,s,r=A.o.aq(f,16),q=A.o.F(f,16),p=16-q,o=A.o.dX(1,p)-1
for(w=e-1,v=g.$flags|0,u=0;w>=0;--w){t=d[w]
s=A.o.fQ(t,p)
v&2&&B.aj(g)
g[w+r+1]=(s|u)>>>0
u=A.o.dX(t&o,q)}v&2&&B.aj(g)
g[r]=u},
huA(d,e,f,g){var w,v,u,t,s=A.o.aq(f,16)
if(A.o.F(f,16)===0)return C.hbO(d,e,s,g)
w=e+s+1
C.huF(d,e,f,g)
for(v=g.$flags|0,u=s;--u,u>=0;){v&2&&B.aj(g)
g[u]=0}t=w-1
return g[t]===0?t:w},
i32(d,e,f,g){var w,v,u,t,s=A.o.aq(f,16),r=A.o.F(f,16),q=16-r,p=A.o.dX(1,r)-1,o=A.o.fQ(d[s],r),n=e-s-1
for(w=g.$flags|0,v=0;v<n;++v){u=d[v+s+1]
t=A.o.dX(u&p,q)
w&2&&B.aj(g)
g[v]=(t|o)>>>0
o=A.o.fQ(u,r)}w&2&&B.aj(g)
g[n]=o},
cOL(d,e,f,g){var w,v=e-g
if(v===0)for(w=e-1;w>=0;--w){v=d[w]-f[w]
if(v!==0)return v}return v},
i30(d,e,f,g,h){var w,v,u
for(w=h.$flags|0,v=0,u=0;u<g;++u){v+=d[u]+f[u]
w&2&&B.aj(h)
h[u]=v&65535
v=v>>>16}for(u=g;u<e;++u){v+=d[u]
w&2&&B.aj(h)
h[u]=v&65535
v=v>>>16}w&2&&B.aj(h)
h[e]=v},
bci(d,e,f,g,h){var w,v,u
for(w=h.$flags|0,v=0,u=0;u<g;++u){v+=d[u]-f[u]
w&2&&B.aj(h)
h[u]=v&65535
v=0-(A.o.aI(v,16)&1)}for(u=g;u<e;++u){v+=d[u]
w&2&&B.aj(h)
h[u]=v&65535
v=0-(A.o.aI(v,16)&1)}},
huG(d,e,f,g,h,i){var w,v,u,t,s,r
if(d===0)return
for(w=g.$flags|0,v=0;--i,i>=0;h=s,f=u){u=f+1
t=d*e[f]+g[h]+v
s=h+1
w&2&&B.aj(g)
g[h]=t&65535
v=A.o.aq(t,65536)}for(;v!==0;h=s){r=g[h]+v
s=h+1
w&2&&B.aj(g)
g[h]=r&65535
v=A.o.aq(r,65536)}},
i31(d,e,f){var w,v=e[f]
if(v===d)return 65535
w=A.o.ed((v<<16|e[f-1])>>>0,d)
if(w>65535)return 65535
return w},
oj:function oj(d,e,f){this.a=d
this.b=e
this.c=f},
cOM:function cOM(){},
cON:function cON(){},
cOO:function cOO(d,e){this.a=d
this.b=e},
cOP:function cOP(d){this.a=d},
aTz:function aTz(d,e){this.a=d
this.b=e},
hkh(d,e,f){var w=new C.SZ(d,A.o.aq(Date.now(),1000),e)
w.Q=f
return w},
SZ:function SZ(d,e,f){var _=this
_.a=d
_.b=420
_.e=e
_.as=_.Q=null
_.at=f},
a51:function a51(d,e){this.a=d
this.b=e},
bKF:function bKF(d){this.a=d
this.c=this.b=0},
hM0(){return new C.bIX()},
bIX:function bIX(){var _=this
_.ax=_.at=_.as=_.Q=_.z=_.y=_.x=_.w=_.r=_.f=_.e=_.d=_.c=_.b=_.a=$
_.ay=0
_.ch=-1
_.cx=_.CW=0
_.fr=_.dy=_.dx=_.db=_.cy=$
_.fx=0},
cGK:function cGK(d){var _=this
_.a=-1
_.r=_.f=0
_.x=d},
i2G(d,e,f){var w,v,u,t,s
if(d.gau(d))return new Uint8Array(0)
w=new Uint8Array(B.cd(d.gd2X(d)))
v=f*2+2
u=C.hsl(C.hsn(),64)
t=new C.cpr(u)
u=u.b
u===$&&B.c()
t.c=new Uint8Array(u)
t.a=new C.cps(e,1000,v)
s=new Uint8Array(v)
return A.aI.dt(s,0,t.cQL(w,0,s,0))},
cGI:function cGI(d,e){this.c=d
this.d=e},
az4:function az4(d,e){this.a=d
this.b=e},
cGL:function cGL(d,e,f,g){var _=this
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
baX:function baX(){var _=this
_.as=_.Q=_.y=_.x=_.w=_.a=0
_.at=""
_.ch=_.ax=null},
cGJ:function cGJ(){this.a=$},
hu9(d,e){var w,v,u=d.length
if(u!==e.length)return!1
for(w=0,v=0;v<u;++v)w|=d[v]^e[v]
return w===0},
hLK(d,e){var w
d.$flags&2&&B.aj(d)
d[0]=e&255
d[1]=e>>>8&255
d[2]=e>>>16&255
d[3]=e>>>24&255
for(w=4;w<=15;++w)d[w]=0},
bHx:function bHx(d,e,f){var _=this
_.a=1
_.b=d
_.c=e
_.d=f
_.r=null
_.x=_.w=$},
hhU(d,e){e&=31
return(d&$.qx[e])<<e>>>0},
nQ(d,e){e&=31
return(d>>>e|C.hhU(d,32-e))>>>0},
hsm(d){var w,v=new C.auD()
if(B.iU(d))v.aMO(d,null)
else{x.dw.a(d)
w=d.a
w===$&&B.c()
v.a=w
w=d.b
w===$&&B.c()
v.b=w}return v},
hsn(){var w=C.hsm(0),v=new Uint8Array(4),u=x.S
u=new C.cpt(w,v,A.Fo,5,B.c0(5,0,!1,u),B.c0(80,0,!1,u))
u.ir(0)
return u},
hsl(d,e){var w=new C.cpp(d,e)
w.b=20
w.d=new Uint8Array(e)
w.e=new Uint8Array(e+20)
return w},
cpo:function cpo(){},
cps:function cps(d,e,f){this.a=d
this.b=e
this.c=f},
cpm:function cpm(){},
auC:function auC(d){this.a=d},
cpr:function cpr(d){this.a=$
this.b=d
this.c=$},
cpn:function cpn(){},
cpl:function cpl(){},
auD:function auD(){this.b=this.a=$},
cpq:function cpq(){},
cpt:function cpt(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=$
_.d=f
_.e=g
_.f=h
_.r=i
_.w=$},
cpp:function cpp(d,e){var _=this
_.a=d
_.b=$
_.c=e
_.e=_.d=$},
cpk:function cpk(){},
cpj:function cpj(d){var _=this
_.a=0
_.b=$
_.c=!1
_.d=d},
bSV:function bSV(){},
bSW:function bSW(d){this.a=d},
czR:function czR(){},
bTX:function bTX(d,e){this.a=d
this.b=!1
this.c=e},
bTY:function bTY(){},
ifv(d){var w,v,u=B.a([],x.s)
for(w=d.length,v=0;v<w;++v)u.push(d[v].u(0))
return u},
axG(d){var w=0,v=B.j(x.H),u
var $async$axG=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:u=x.H
w=d!==D.fmR?2:4
break
case 2:w=5
return B.b(A.kF.h8("SystemChrome.setEnabledSystemUIMode",d.a7(),u),$async$axG)
case 5:w=3
break
case 4:null.toString
w=6
return B.b(A.kF.h8("SystemChrome.setEnabledSystemUIOverlays",C.ifv(null),u),$async$axG)
case 6:case 3:return B.h(null,v)}})
return B.i($async$axG,v)},
axJ:function axJ(d,e){this.a=d
this.b=e},
a9L:function a9L(d){this.a=d},
iig(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p=new C.fH7(15,d,f,e,g,h),o=i*i,n=A.i.V(i/1.4142135623730951)
for(w=0;w<=n;++w){v=Math.sqrt(o-w*w)
u=v-Math.floor(v)
t=u*(w===n?0.25:1)
s=A.i.bh(v)
r=1-u
p.$5(j,k,w,s,r)
q=s+1
p.$5(j,k,w,q,t)
p.$5(j,k,s,w,r)
p.$5(j,k,q,w,t)}return d},
fH7:function fH7(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ap8(){var w=0,v=B.j(x.gw),u,t,s,r,q
var $async$ap8=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(T.aif("ngmy_menu_lib_v1_zzslides_index",A.bO),$async$ap8)
case 3:q=e
if(!q.a){u=null
w=1
break}t=q.b
s=t==null?null:J.t(t,"items")
if(x.j.b(s)){t=J.dd(s,x.f)
t=B.cF(t,new C.c3T(),t.$ti.k("M.E"),x.P)
r=B.C(t,B.a4(t).k("M.E"))}else r=B.a([],x.d)
A.d.aZ(r,new C.c3U())
u=r
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ap8,v)},
apa(d){var w=0,v=B.j(x.S),u,t,s,r,q,p,o,n,m,l,k,j
var $async$apa=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.ap8(),$async$apa)
case 3:j=f
if(j==null){u=0
w=1
break}t=x.N
s=B.T(t,x.P)
for(r=J.aT(j);r.C();){q=r.gR(r)
p=J.t(q,"id")
s.n(0,J.k(p==null?"":p),q)}r=d.length,q=x.z,o=0,n=0
case 4:if(!(n<d.length)){w=6
break}m=d[n]
l=new B.V(Date.now(),0,!1).aa().ag()
p=m.a
k=B.ag("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(B.n0("ngmy_menu_lib_v1_zzslide_"+B.aL(p,k,""),B.I(["deck",m.aj(),"savedAt",l],t,q),null),$async$apa)
case 7:if(!f){w=5
break}s.n(0,p,B.I(["id",p,"name",m.b,"slides",m.r.length,"savedAt",l],t,q));++o
case 5:d.length===r||(0,B.J)(d),++n
w=4
break
case 6:w=o>0?8:9
break
case 8:r=s.$ti.k("b7<2>")
s=B.C(new B.b7(s,r),r.k("M.E"))
w=10
return B.b(B.n0("ngmy_menu_lib_v1_zzslides_index",B.I(["items",s,"savedAt",new B.V(Date.now(),0,!1).aa().ag()],t,q),null),$async$apa)
case 10:if(!f){u=0
w=1
break}case 9:u=o
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$apa,v)},
c3V(d){return C.hRP(d)},
hRP(d){var w=0,v=B.j(x.af),u,t=2,s=[],r,q,p,o,n,m
var $async$c3V=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
o=B.ag("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(T.aif("ngmy_menu_lib_v1_zzslide_"+B.aL(d,o,""),A.ih),$async$c3V)
case 7:r=f
o=r.b
q=o==null?null:J.t(o,"deck")
if(!x.f.b(q)){u=null
w=1
break}o=C.Xh(B.a2(q,x.N,x.z))
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.ac(m)
$.am.$1("[admin slides vault] load "+d+": "+B.w(p))
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$c3V,v)},
ap9(d){var w=0,v=B.j(x.y),u,t,s,r
var $async$ap9=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.ap8(),$async$ap9)
case 3:r=f
if(r==null){u=!1
w=1
break}J.nT(r,new C.c3W(d))
w=4
return B.b(B.n0("ngmy_menu_lib_v1_zzslides_index",B.I(["items",r,"savedAt",new B.V(Date.now(),0,!1).aa().ag()],x.N,x.z),null),$async$ap9)
case 4:t=f
w=t?5:6
break
case 5:s=B.ag("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(T.aRC("ngmy_menu_lib_v1_zzslide_"+B.aL(d,s,"")),$async$ap9)
case 7:case 6:u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ap9,v)},
c3T:function c3T(){},
c3U:function c3U(){},
c3W:function c3W(d){this.a=d},
it6(d,e,f){return B.bU(A.L,null,new C.fY4(e,f,null),d,!0,!0,!0,null,!1,!1,x.H)},
fY4:function fY4(d,e,f){this.a=d
this.b=e
this.c=f},
a2g:function a2g(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aL8:function aL8(d){var _=this
_.d=d
_.e=null
_.f=!0
_.r=!1
_.w=0
_.x=null
_.y=!1
_.c=_.a=null},
fio:function fio(d,e){this.a=d
this.b=e},
fis:function fis(d){this.a=d},
fit:function fit(d){this.a=d},
fiu:function fiu(d,e,f){this.a=d
this.b=e
this.c=f},
fip:function fip(d){this.a=d},
fiq:function fiq(d){this.a=d},
fir:function fir(d,e){this.a=d
this.b=e},
fij:function fij(d){this.a=d},
fih:function fih(d){this.a=d},
fii:function fii(d){this.a=d},
fik:function fik(d){this.a=d},
fil:function fil(d){this.a=d},
fiy:function fiy(d,e){this.a=d
this.b=e},
fix:function fix(d,e){this.a=d
this.b=e},
fin:function fin(d,e,f){this.a=d
this.b=e
this.c=f},
fim:function fim(d,e,f){this.a=d
this.b=e
this.c=f},
fiv:function fiv(d,e){this.a=d
this.b=e},
fiw:function fiw(d,e){this.a=d
this.b=e},
fiB:function fiB(d){this.a=d},
fiC:function fiC(d,e){this.a=d
this.b=e},
fiA:function fiA(d,e){this.a=d
this.b=e},
fiz:function fiz(){},
hx9(d){var w,v,u,t
if(d==null||d.length===0)return B.a([],x.k)
try{w=A.X.aQ(0,d,null)
if(!x.j.b(w)){v=B.a([],x.k)
return v}v=J.dd(w,x.f)
v=B.cF(v,new C.fq1(),v.$ti.k("M.E"),x.ea)
u=B.a4(v).k("Y<M.E>")
v=B.C(new B.Y(v,new C.fq2(),u),u.k("M.E"))
return v}catch(t){v=B.a([],x.k)
return v}},
a3f(d){return C.ijC(d)},
ijC(d){var w=0,v=B.j(x.gL),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$a3f=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:n=B.T(x.N,x.ea)
m=new C.fKj(n)
t=4
j=m
i=C
w=7
return B.b(B.a3R("ngmy_books_v1_"+A.a.i(d.toLowerCase())),$async$a3f)
case 7:j.$1(i.hx9(f))
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
return B.b(B.aA(),$async$a3f)
case 12:r=f
p=A.a.i(d.toLowerCase())
m.$1(C.hx9(B.aV(J.t(r.a,"ngmy_books_v1_"+p))))
t=2
w=11
break
case 9:t=8
k=s.pop()
w=11
break
case 8:w=2
break
case 11:p=n.$ti.k("b7<2>")
o=p.k("Y<M.E>")
j=B
i=B
h=new B.b7(n,p)
g=C
w=13
return B.b(C.fqa(d),$async$a3f)
case 13:p=j.C(new i.Y(h,new g.fKh(f),o),o.k("M.E"))
A.d.aZ(p,new C.fKi())
u=p
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a3f,v)},
aiQ(d,e){return C.isL(d,e)},
isL(d,e){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l
var $async$aiQ=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:n=J.b8(e,new C.fXx(),x.P)
n=B.C(n,n.$ti.k("ak.E"))
r=A.X.aw(n,null)
q=!1
t=4
w=7
return B.b(B.aiI("ngmy_books_v1_"+A.a.i(d.toLowerCase()),r),$async$aiQ)
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
return B.b(B.aA(),$async$aiQ)
case 12:p=g
w=13
return B.b(p.aC("String","ngmy_books_v1_"+A.a.i(d.toLowerCase()),r),$async$aiQ)
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
return B.i($async$aiQ,v)},
fqa(d){return C.i7E(d)},
i7E(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o
var $async$fqa=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.aA(),$async$fqa)
case 7:r=f
q=r.tU("ngmy_books_deleted_v1_"+A.a.i(d.toLowerCase()))
if(q==null)q=A.Z
q=B.jB(q,B.U(q).c)
u=q
w=1
break
t=2
w=6
break
case 4:t=3
o=s.pop()
u=B.aR(x.N)
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$fqa,v)},
ahK(d,e){return C.ii8(d,e)},
ii8(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m
var $async$ahK=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.aA(),$async$ahK)
case 6:s=g
r=B.aR(x.N)
q=s.tU("ngmy_books_deleted_v1_"+A.a.i(d.toLowerCase()))
if(q!=null)J.fW(r,q)
J.c7(r,e)
p=r
r=A.a.i(d.toLowerCase())
q=p
q=B.C(q,B.a4(q).k("ch.E"))
w=7
return B.b(s.aC("StringList","ngmy_books_deleted_v1_"+r,q),$async$ahK)
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
return B.b(C.a3f(d),$async$ahK)
case 8:n=g
J.nT(n,new C.fGM(e))
w=9
return B.b(C.aiQ(d,n),$async$ahK)
case 9:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$ahK,v)},
itb(d,e){return B.a6(d,!1).ce(B.ec(new C.fYq(e),!0,null,x.H))},
i34(d){var w=d.b
return A.a.i(w.a)==="My Book"&&A.d.cE(w.d,new C.cQ8())},
oN:function oN(d,e,f){this.a=d
this.b=e
this.c=f},
fq1:function fq1(){},
fq2:function fq2(){},
fKj:function fKj(d){this.a=d},
fKh:function fKh(d){this.a=d},
fKi:function fKi(){},
fXx:function fXx(){},
fGM:function fGM(d){this.a=d},
fYq:function fYq(d){this.a=d},
ZZ:function ZZ(d,e){this.c=d
this.a=e},
azE:function azE(d,e){var _=this
_.d=d
_.e=!0
_.f=e
_.c=_.a=null},
cQ8:function cQ8(){},
cQa:function cQa(d,e){this.a=d
this.b=e},
cQd:function cQd(d){this.a=d},
cQe:function cQe(d){this.a=d},
cQc:function cQc(){},
cQf:function cQf(d,e){this.a=d
this.b=e},
cQb:function cQb(d){this.a=d},
cQg:function cQg(){},
cQ9:function cQ9(d,e){this.a=d
this.b=e},
cQh:function cQh(){},
cQ4:function cQ4(d){this.a=d},
cQ2:function cQ2(d){this.a=d},
cQ3:function cQ3(d){this.a=d},
cQ5:function cQ5(d,e){this.a=d
this.b=e},
cQ1:function cQ1(d){this.a=d},
cQ0:function cQ0(d){this.a=d},
cPZ:function cPZ(d,e){this.a=d
this.b=e},
cQ_:function cQ_(d){this.a=d},
cQ7:function cQ7(){},
cQ6:function cQ6(d){this.a=d},
cPY:function cPY(d,e){this.a=d
this.b=e},
cPX:function cPX(d,e){this.a=d
this.b=e},
cPW:function cPW(d,e){this.a=d
this.b=e},
cQi:function cQi(d){this.a=d},
ZX:function ZX(d,e,f){this.c=d
this.d=e
this.a=f},
aGX:function aGX(d,e,f){this.a=d
this.b=e
this.c=f},
azA:function azA(d){var _=this
_.r=_.f=_.e=_.d=$
_.w=d
_.x=null
_.y=!1
_.c=_.a=null},
cPp:function cPp(d){this.a=d},
cPo:function cPo(d){this.a=d},
cPr:function cPr(d,e,f){this.a=d
this.b=e
this.c=f},
cPz:function cPz(){},
cPA:function cPA(d){this.a=d},
cPs:function cPs(d,e,f){this.a=d
this.b=e
this.c=f},
cPq:function cPq(d,e){this.a=d
this.b=e},
cPu:function cPu(d,e){this.a=d
this.b=e},
cPv:function cPv(d,e){this.a=d
this.b=e},
cPw:function cPw(d,e){this.a=d
this.b=e},
cPt:function cPt(d){this.a=d},
cPy:function cPy(d){this.a=d},
cPx:function cPx(d,e){this.a=d
this.b=e},
cPF:function cPF(d){this.a=d},
cPB:function cPB(d,e){this.a=d
this.b=e},
cPC:function cPC(d,e){this.a=d
this.b=e},
cPD:function cPD(d,e){this.a=d
this.b=e},
cPE:function cPE(d,e){this.a=d
this.b=e},
azC:function azC(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
im0(){var w,v,u,t,s=!1
try{u=document
if(u.fullscreenElement==null){w=u.documentElement
if(w!=null){v=w.requestFullscreen()
if(s&&v!=null)B.ef(v,x.cK).bG(new C.fOS(),x.H).eB(new C.fOT())}}else if(s)C.hyJ()}catch(t){}},
hyJ(){var w,v,u
try{w=window.screen.orientation
if(w==null)return
v=w.lock("landscape")
if(v!=null)B.ef(v,x.cK).eB(new C.fum())}catch(u){}},
im3(){var w,v,u
try{w=window.screen.orientation
if(w!=null)w.unlock()}catch(v){}try{u=document
if(u.fullscreenElement!=null)u.webkitExitFullscreen()}catch(v){}},
fOS:function fOS(){},
fOT:function fOT(){},
fum:function fum(){},
hDD(d){var w="marriage_field_",v=d.db
if(!A.a.a_(v,w))return null
return A.d.gH(A.a.en(v,w,"").split(":"))},
hDA(d){var w=d.db
if(!A.a.a_(w,"marriage_sign_"))return null
if(A.a.a_(w,"marriage_sign_placed_"))return null
if(d.b===D.ls)return null
return A.a.b2(w,14)},
hgy(d){var w
if(d.b!==D.ls)return null
w=d.db
if(!A.a.a_(w,"marriage_sign_placed_"))return null
return A.a.b2(w,21)},
imt(d){if(d==="hati_kuhowa")return"hati_kuhoweya"
if(d==="hati_kuhoweya")return"hati_kuhowa"
return""},
hDE(d){if(d==="hati_kuhowa")return"Hati ya Kuhoweya"
if(d==="hati_kuhoweya")return"Hati ya Kuhowa"
return"partner document"},
imo(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=B.ag("\\s+",!0,!1,!1,!1),f=A.a.i(B.aL(d,g," "))
g=B.ag("\\s+",!0,!1,!1,!1)
w=A.a.i(B.aL(e,g," "))
g=f.length
if(g===0||w.length===0){g=x.N
return B.T(g,g)}v=B.ag("\\[[^\\]]+\\]",!0,!1,!1,!1)
u=v.kZ(0,f)
t=x.N
u=B.cF(u,new C.fPR(),B.a4(u).k("M.E"),t)
s=B.C(u,B.a4(u).k("M.E"))
if(s.length===0)return B.T(t,t)
for(u=v.kZ(0,f),u=new B.Gs(u.a,u.b,u.c),r=x.cz,q=0,p="^";u.C();){o=u.d
n=(o==null?r.a(o):o).b
m=n.index
p=(m>q?p+B.SG(A.a.aB(f,q,m)):p)+"(.*?)"
q=m+n[0].length}u=(q<g?p+B.SG(A.a.b2(f,q)):p)+"\\.?$"
l=B.ag(u.charCodeAt(0)==0?u:u,!1,!1,!1,!1).cF(w)
if(l==null)return B.T(t,t)
k=B.T(t,t)
for(g=l.b,j=0;j<s.length;j=i){i=j+1
u=g[i]
h=A.a.i(u==null?"":u)
if(h.length===0)continue
k.n(0,s[j],h)}return k},
imm(d,e){var w,v,u,t,s,r=B.a4(e).k("cx<1>"),q=B.C(new B.cx(e,r),r.k("M.E"))
A.d.aZ(q,new C.fPQ())
for(r=q.length,w=d,v=0;v<q.length;q.length===r||(0,B.J)(q),++v){u=q[v]
t=e.h(0,u)
s=t==null?null:A.a.i(t)
if(s==null)s=""
if(s.length===0)continue
if(A.a.a_(s,"[")&&A.a.c7(s,"]"))continue
w=B.aSC(w,u,s,0)}return w},
imq(d,e){var w,v,u,t=d==="hati_kuhowa"?D.a72:$.hKP(),s=x.N,r=B.T(s,s)
for(s=t.gdO(t),s=s.gae(s);s.C();){w=s.gR(s)
v=e.h(0,w.a)
u=v==null?null:A.a.i(v)
if(u==null)u=""
if(u.length===0)continue
if(A.a.a_(u,"[")&&A.a.c7(u,"]"))continue
r.n(0,w.b,u)}return r},
hDB(d){if(d==="hati_kuhowa")return y.O
if(d==="hati_kuhoweya")return y.f
return""},
fr6(d,e){var w,v,u,t,s,r,q
for(w=d.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u)for(t=w[u].z,s=t.length,r=0;r<t.length;t.length===s||(0,B.J)(t),++r){q=t[r]
if(C.hDD(q)===e)return q}return null},
imr(d){var w,v=A.a.i(d.c),u=d.w
if(u==="hati_kuhowa")w="hati_kuhowa_"
else w=u==="hati_kuhoweya"?"hati_kuhoweya_":""
u=w.length
if(u!==0&&A.a.a_(v,w))return A.a.b2(v,u)
return A.d.gH(D.I6).a},
ims(b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0="utangulizi",b1=b6.w,b2=b1==null?"":b1,b3=b5.w,b4=b3==null?"":b3
if(b1==="hati_kuhowa"||b1==="hati_kuhoweya")w=!(b3==="hati_kuhowa"||b3==="hati_kuhoweya")
else w=!0
if(w)return new B.afy(0,0,0)
if(b2.length===0||b4.length===0||b2===b4)return new B.afy(0,0,0)
v=C.fr6(b6,b0)
u=C.fr6(b5,b0)
t=0
if(v!=null&&u!=null){s=C.imq(b2,C.imo(C.hDB(b2),v.r))
if(s.a!==0){u.r=C.imm(C.hDB(b4),s)
t=s.a}}r=B.aR(x.N)
for(w=b6.r,q=w.length,p=0;p<w.length;w.length===q||(0,B.J)(w),++p)for(o=w[p].z,n=o.length,m=0;m<o.length;o.length===n||(0,B.J)(o),++m){l=C.hDD(o[m])
if(l==null||l==="utangulizi")continue
r.J(0,l)}for(q=B.dZ(r,r.r,r.$ti.c),o=q.$ti.c,k=0;q.C();){n=q.d
if(n==null)n=o.a(n)
j=C.fr6(b6,n)
i=C.fr6(b5,n)
if(j==null||i==null)continue
h=j.r
if(A.a.a_(n,"witness_")){g=A.a.i(h)
n=g.length===0||g==="[Jina la Shahidi]"}else n=!1
if(n)continue
if(A.a.i(h).length===0)continue
i.r=h;++k}q=b5.r
f=q.length===0?null:A.d.gH(q)
e=0
if(f!=null)for(q=w.length,p=0;p<w.length;w.length===q||(0,B.J)(w),++p)for(o=w[p].z,n=o.length,m=0;m<o.length;o.length===n||(0,B.J)(o),++m){d=o[m]
a0=C.hgy(d)
if(a0==null)continue
a1=d.at
if(A.a.i(a1==null?"":a1).length===0)continue
a2=d.c
a3=d.d
a4=d.e
a5=d.f
for(a1=f.z,a6=a1.length,a7=0;a7<a1.length;a1.length===a6||(0,B.J)(a1),++a7){a8=a1[a7]
if(C.hDA(a8)===a0||C.hgy(a8)===a0){a2=a8.c
a3=a8.d
a4=a8.e
a5=a8.f
break}}a1=f.z
a1.$flags&1&&B.aj(a1,16)
A.d.RS(a1,new C.fPX(a0),!0)
a1=f.z
a6=Date.now()
a9=$.jc
$.jc=a9+1
A.d.J(a1,new C.eQ(""+1000*a6+"_"+a9,D.ls,a2,a3,a4,a5,"",24,A.a8,A.bt,A.aH,4279310375,A.bp,d.at,D.bm,4280640491,4280172719,2,0,!1,"marriage_sign_placed_"+a0,0,D.ct,0,"","","","","",!1,0));++e}b5.f=new B.V(Date.now(),0,!1)
return new B.afy(k,t,e)},
imn(d){var w=C.imr(d)
if(d.w==="hati_kuhowa")return C.hCY("",w)
return C.hCX("",w)},
fPR:function fPR(){},
fPQ:function fPQ(){},
fPX:function fPX(d){this.a=d},
hyq(){var w=new B.V(Date.now(),0,!1),v=new C.fto()
return B.w(v.$1(B.bV(w)))+"/"+B.w(v.$1(B.bM(w)))+"/"+B.bD(w)},
hgH(d){var w=d.at,v=A.a.i(w==null?"":w)
w=d.db
return(w==="__kiapo_video__"||A.a.a_(w,"__kiapo_video___"))&&v.length!==0},
fQP(d){var w,v,u,t,s,r,q=d.ax
if(A.a.i(q==null?"":q).length!==0)return!0
for(q=d.r,w=q.length,v=0;v<w;++v)for(u=q[v].z,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===D.ls&&A.a.a_(r.db,"marriage_sign_placed_rais"))return!0}return!1},
hDS(d){var w,v=d.ax,u=A.a.i(v==null?"":v)
if(u.length===0)return!C.fQP(d)
w=B.bh(u)
if(w==null)return!C.fQP(d)
return new B.V(Date.now(),0,!1).aa().d3(w.aa().bR(18e9))},
in9(d){var w=d.ax
if(A.a.i(w==null?"":w).length!==0)return
d.ax=new B.V(Date.now(),0,!1).aa().ag()},
hVS(d){return A.a.i(d).toLowerCase()},
b1E(d){return C.hVT(d)},
hVT(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o,n,m
var $async$b1E=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.aA(),$async$b1E)
case 7:r=f
p=r.tU("ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase())
q=p==null?A.Z:p
o=q
o=new B.N(o,C.irl(),B.U(o).k("N<1,n>")).bY(0,new C.cfI())
o=B.d2(o,o.$ti.k("M.E"))
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
u=B.aR(x.N)
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$b1E,v)},
a8w(d,e){return C.hVU(d,e)},
hVU(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n
var $async$a8w=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:o=A.a.i(e).toLowerCase()
if(o.length===0||A.a.i(d).length===0){w=1
break}w=3
return B.b(C.b1E(d),$async$a8w)
case 3:r=g
if(!J.h9(r,o)){w=1
break}t=5
w=8
return B.b(B.aA(),$async$a8w)
case 8:q=g
w=9
return B.b(q.aC("StringList","ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase(),J.qF(r)),$async$a8w)
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
return B.i($async$a8w,v)},
a8x(){var w=0,v=B.j(x.y),u,t
var $async$a8x=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.c9(),$async$a8x)
case 3:t=e
u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a8x,v)},
hVV(d){var w=$.Cn.h(0,d)
w=w==null?null:J.t(w,"at")
return B.bh(w==null?"":w)},
hVW(d,e){var w,v,u,t=$.Cn.h(0,d)
if(t==null)return!1
w=J.a7(t)
v=w.h(t,"id")
if((v==null?"":v).length!==0)return w.h(t,"id")===e.a
u=C.hVV(d)
return u!=null&&!e.f.ca(u)},
hqh(d){var w,v,u,t,s,r,q,p,o,n,m
for(w=J.i1(d),w=w.gae(w),v=x.f,u=x.N,t=x.z;w.C();){s=w.gR(w)
r=s.b
if(!v.b(r))continue
q=B.a2(r,u,t)
r=q.h(0,"at")
p=B.bh(J.k(r==null?"":r))
if(p==null)continue
o=J.k(s.a)
s=$.Cn.h(0,o)
s=s==null?null:J.t(s,"at")
n=B.bh(s==null?"":s)
s=!0
if(n!=null){r=p.a
if(r<=n.gbq())s=r===n.gbq()&&p.b>n.gcA()}if(s){s=$.Cn
r=p.aa().ag()
m=q.h(0,"id")
s.n(0,o,B.I(["at",r,"id",J.k(m==null?"":m)],u,u))}}},
h99(){var w=$.Cm
return w.br(w,new C.cfJ())},
WE(){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3
var $async$WE=B.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:w=3
return B.b(B.uB("civic_hati_kiapo_uongozi",null,A.em),$async$WE)
case 3:a2=a5
if(a2==null){w=1
break}o=J.a7(a2)
n=x.f
m=x.N
l=x.z
k=n.b(o.h(a2,"deletedByState"))?B.a2(n.a(o.h(a2,"deletedByState")),m,l):B.T(m,l)
j=$.Cn
i=new B.cb(j,B.a4(j).k("cb<1,2>")).aV(0,new C.cfL(k))
if(n.b(o.h(a2,"deletedByState")))C.hqh(n.a(o.h(a2,"deletedByState")))
if(n.b(o.h(a2,"byState")))for(o=J.i1(n.a(o.h(a2,"byState"))),o=o.gae(o);o.C();){j=o.gR(o)
h=j.b
if(!n.b(h))continue
g=C.Xh(B.a2(h,m,l))
h=$.Cm
j=j.a
f=J.kP(j)
e=h.h(0,f.u(j))
if(e!=null){h=g.f
d=e.f
a0=h.a
if(a0>=d.gbq())h=a0===d.gbq()&&h.b<d.gcA()
else h=!0
h=!h}else h=!0
if(h)$.Cm.n(0,f.u(j),g)}C.h99()
$.hqg=new B.V(Date.now(),0,!1)
w=4
return B.b(C.WF(),$async$WE)
case 4:w=i?5:6
break
case 5:t=8
r=B.T(m,x.P)
for(o=$.Cm,o=new B.cb(o,B.a4(o).k("cb<1,2>")).gae(0);o.C();){n=o.d
n.toString
q=n
J.aK(r,q.a,q.b.aj())}w=11
return B.b(B.n0("civic_hati_kiapo_uongozi",B.I(["byState",r,"deletedByState",$.Cn,"updatedAt",new B.V(Date.now(),0,!1).aa().ag()],m,l),null),$async$WE)
case 11:t=2
w=10
break
case 8:t=7
a3=s.pop()
p=B.ac(a3)
$.am.$1("[kiapo] push delete: "+B.w(p))
w=10
break
case 7:w=2
break
case 10:case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$WE,v)},
Ov(a2){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$Ov=B.e(function(a3,a4){if(a3===1){s.push(a4)
w=t}for(;;)switch(w){case 0:if($.cfK&&!a2){w=1
break}t=4
w=7
return B.b(B.aA(),$async$Ov)
case 7:r=a4
q=B.aV(J.t(r.a,"ngmy_civic_hati_kiapo_uongozi_v1"))
if(q!=null&&A.a.i(q).length!==0){p=A.X.aQ(0,q,null)
i=x.f
if(i.b(p)){h=x.N
o=B.T(h,x.I)
for(g=J.i1(p),g=g.gae(g),f=x.z;g.C();){n=g.gR(g)
if(i.b(n.b))J.aK(o,J.k(n.a),C.Xh(B.a2(i.a(n.b),h,f)))}$.Cm=o}}m=B.aV(J.t(r.a,"ngmy_civic_hati_kiapo_uongozi_v1_deleted"))
if(m!=null&&A.a.i(m).length!==0){l=A.X.aQ(0,m,null)
if(x.f.b(l))C.hqh(l)}C.h99()
t=2
w=6
break
case 4:t=3
d=s.pop()
k=B.ac(d)
$.am.$1("[kiapo] local load: "+B.w(k))
w=6
break
case 3:w=2
break
case 6:a1=a2
if(a1)a4=a1
else{w=8
break}w=9
break
case 8:w=10
return B.b(B.c9(),$async$Ov)
case 10:case 9:o=a4
w=o?11:12
break
case 11:t=14
w=17
return B.b(C.WE(),$async$Ov)
case 17:t=2
w=16
break
case 14:t=13
a0=s.pop()
j=B.ac(a0)
$.am.$1("[kiapo] cloud load: "+B.w(j))
w=16
break
case 13:w=2
break
case 16:case 12:$.cfK=!0
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Ov,v)},
WF(){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m,l
var $async$WF=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.aA(),$async$WF)
case 6:s=e
r=B.T(x.N,x.P)
for(o=$.Cm,o=new B.cb(o,B.a4(o).k("cb<1,2>")).gae(0);o.C();){n=o.d
n.toString
q=n
J.aK(r,q.a,q.b.aj())}w=7
return B.b(s.aC("String","ngmy_civic_hati_kiapo_uongozi_v1",A.X.aw(r,null)),$async$WF)
case 7:w=8
return B.b(s.aC("String","ngmy_civic_hati_kiapo_uongozi_v1_deleted",A.X.aw($.Cn,null)),$async$WF)
case 8:u=1
w=5
break
case 3:u=2
l=t.pop()
p=B.ac(l)
$.am.$1("[kiapo] local save: "+B.w(p))
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$WF,v)},
a8z(d){var w=0,v=B.j(x.af),u,t=2,s=[],r,q,p,o,n,m
var $async$a8z=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return B.b(C.Ov(!1),$async$a8z)
case 3:r=$.hqg
w=r==null||new B.V(Date.now(),0,!1).bD(r).a>6e7?4:5
break
case 4:t=7
w=12
return B.b(C.a8x(),$async$a8z)
case 12:w=f?10:11
break
case 10:w=13
return B.b(C.WE(),$async$a8z)
case 13:case 11:t=2
w=9
break
case 7:t=6
m=s.pop()
w=9
break
case 6:w=2
break
case 9:case 5:p=A.a.i(d).toLowerCase()
if(p.length===0){u=null
w=1
break}o=$.Cm.h(0,p)
n=o==null?null:o.hQ()
if(n==null){u=null
w=1
break}u=C.bF3(n)
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a8z,v)},
cfM(d){var w=0,v=B.j(x.y),u,t
var $async$cfM=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.Ov(!1),$async$cfM)
case 3:t=A.a.i(d).toLowerCase()
u=$.Cn.al(0,t)&&$.Cm.h(0,t)==null
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$cfM,v)},
a8y(d){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h
var $async$a8y=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:i=A.a.i(d).toLowerCase()
if(i.length===0){u=!1
w=1
break}w=3
return B.b(C.Ov(!1),$async$a8y)
case 3:o=$.Cm.W(0,i)
n=$.Cn
m=new B.V(Date.now(),0,!1).aa().ag()
l=o==null?null:o.a
if(l==null)l=""
k=x.N
n.n(0,i,B.I(["at",m,"id",l],k,k))
$.cfK=!0
w=4
return B.b(C.WF(),$async$a8y)
case 4:w=5
return B.b(C.a8x(),$async$a8y)
case 5:if(!f){u=!1
w=1
break}t=7
r=B.T(k,x.P)
for(n=$.Cm,n=new B.cb(n,B.a4(n).k("cb<1,2>")).gae(0);n.C();){m=n.d
m.toString
q=m
J.aK(r,q.a,q.b.aj())}w=10
return B.b(B.n0("civic_hati_kiapo_uongozi",B.I(["byState",r,"deletedByState",$.Cn,"updatedAt",new B.V(Date.now(),0,!1).aa().ag()],k,x.z),null),$async$a8y)
case 10:r=f
u=r
w=1
break
t=2
w=9
break
case 7:t=6
h=s.pop()
p=B.ac(h)
$.am.$1("[kiapo] cloud delete: "+B.w(p))
u=!1
w=1
break
w=9
break
case 6:w=2
break
case 9:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a8y,v)},
Ow(a3){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$Ow=B.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:d=a3.x
a0=A.a.i(A.a.i(d==null?"":d)).toLowerCase()
if(a0.length===0){u=!1
w=1
break}t=4
w=9
return B.b(C.a8x(),$async$Ow)
case 9:w=a5?7:8
break
case 7:w=10
return B.b(C.WE(),$async$Ow)
case 10:case 8:t=2
w=6
break
case 4:t=3
a1=s.pop()
w=6
break
case 3:w=2
break
case 6:n=$.Cn.h(0,a0)
if(n!=null){d=J.a7(n)
m=d.h(n,"id")
d=(m==null?"":m).length!==0&&d.h(n,"id")===a3.a}else d=!1
if(d){$.am.$1("[kiapo] not saved: this paper was deleted by the admin")
u=!1
w=1
break}a3.w="hati_kiapo_uongozi"
a3.f=new B.V(Date.now(),0,!1)
l=a3.hQ()
for(d=l.r,m=d.length,k=0;k<d.length;d.length===m||(0,B.J)(d),++k)for(j=d[k].z,i=j.length,h=0;h<i;++h){g=j[h]
f=g.at
e=A.a.i(f==null?"":f)
f=g.db
if((f==="__kiapo_video__"||A.a.a_(f,"__kiapo_video___"))&&A.a.a_(e,"data:"))g.at=null}$.Cm.n(0,a0,l)
C.h99()
$.cfK=!0
w=11
return B.b(C.WF(),$async$Ow)
case 11:w=12
return B.b(C.a8x(),$async$Ow)
case 12:if(!a5){u=!1
w=1
break}t=14
d=x.N
r=B.T(d,x.P)
for(m=$.Cm,m=new B.cb(m,B.a4(m).k("cb<1,2>")).gae(0);m.C();){j=m.d
j.toString
q=j
J.aK(r,q.a,q.b.aj())}w=17
return B.b(B.n0("civic_hati_kiapo_uongozi",B.I(["byState",r,"deletedByState",$.Cn,"updatedAt",new B.V(Date.now(),0,!1).aa().ag()],d,x.z),null),$async$Ow)
case 17:r=a5
u=r
w=1
break
t=2
w=16
break
case 14:t=13
a2=s.pop()
p=B.ac(a2)
$.am.$1("[kiapo] cloud save: "+B.w(p))
u=!1
w=1
break
w=16
break
case 13:w=2
break
case 16:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Ow,v)},
arz(d){var w=0,v=B.j(x.T),u,t,s
var $async$arz=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(new B.hX().a6P(A.eP),$async$arz)
case 3:s=f
if(s==null){u=null
w=1
break}w=4
return B.b(s.fq(),$async$arz)
case 4:t=f
if(t.length===0){u=null
w=1
break}w=5
return B.b(C.b1F(t,d),$async$arz)
case 5:u=f
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$arz,v)},
b1F(d,e){return C.hVX(d,e)},
hVX(d,e){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$b1F=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.c9(),$async$b1F)
case 7:if(!g){u=null
w=1
break}n=A.a.i(e)
m=B.ag("[^a-z0-9]+",!0,!1,!1,!1)
r=B.aL(n.toLowerCase(),m,"_")
q="civic_kiapo/"+B.w(r)+"/"+1000*Date.now()+".mp4"
n=$.f0().b
n===$&&B.c()
n=n.at
n===$&&B.c()
p=n.iB("media")
w=8
return B.b(p.xL(q,new Uint8Array(B.cd(d)),D.bLF),$async$b1F)
case 8:n=p.Df(q)
u=n
w=1
break
t=2
w=6
break
case 4:t=3
k=s.pop()
o=B.ac(k)
$.am.$1("[kiapo] video upload: "+B.w(o))
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$b1F,v)},
Lv(d,e,f,g,h,i,j,k,l,m,n){var w=C.cE()
return C.er(e,!1,f,A.aH,k.length===0?"marriage_locked":"marriage_locked_"+k,4280640491,g,h,i,"",j,w,null,"","",0,!1,"",0,D.bm,4280172719,2,d,0,0,"",D.ct,D.d_,l,m,n)},
fsQ(d,e,f,g,h,i,j,k,l){var w=C.cE()
return C.er(A.bp,!1,4279310375,A.aH,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bt,A.a8,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.ct,D.fi,j,k,l)},
hdr(d,e,f,g,h,i,j,k){var w=C.cE(),v=A.i.D(i*0.0017,0.02,0.06)
return C.er(h,!1,j,A.aH,"marriage_field_"+d+":"+A.i.ad(g,3),4280640491,i,A.cK,A.U,"",v,w,null,"","",0,!1,"",0,D.bm,4280172719,2,k,0,0,"",D.ct,D.d_,g,e,f)},
fso(d,e,f,g){return C.fsQ(0,0.002,D.fO,g,0.8,"ul_"+B.w(d)+"_"+B.w(e),f,d,e+0.002)},
hds(d,e,f,g,h,i,j,k){var w=C.cE()
return C.er(A.rb,!1,j,A.aH,"marriage_field_"+d+":"+A.i.ad(g,3),4280640491,i,A.bt,A.a8,"",h,w,null,"","",0,!1,"",0,D.bm,4280172719,2,k,0,0,"",D.ct,D.d_,g,e,f)},
hyp(d){var w="marriage_field_",v=d.db
if(!A.a.a_(v,w))return null
return A.d.gH(A.a.en(v,w,"").split(":"))},
bF3(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4="hati_kiapo_uongozi",a5="__kiapo_video___"
if(a6.w!==a4)return a6
w=a6.x
v=w==null
u=A.a.i(v?"":w)
t=a6.r
s=t.length===0?a3:A.d.gH(t)
t=x.N
r=B.T(t,t)
q=a3
p=a3
if(s!=null)for(t=s.z,o=t.length,n=0;n<t.length;t.length===o||(0,B.J)(t),++n){m=t[n]
l=C.hyp(m)
if(l!=null&&A.a.i(m.r).length!==0)r.n(0,l,m.r)
k=m.at
j=A.a.i(k==null?"":k)
i=m.db
if((i==="__kiapo_video__"||A.a.a_(i,a5))&&j.length!==0)q=k
if(m.b===D.ls&&A.a.a_(i,"marriage_sign_placed_rais"))p=m.hQ()}h=C.hgc(u)
t=a6.b
o=h.c
i=h.d
if(v)w=u
v=a6.y
g=a6.z
f=a6.Q
e=a6.as
d=a6.at
a0=C.Cr(f,a3,a3,a3,i,5,!1,a4,a3,a3,a3,a3,a6.a,a6.ax,!1,w,t,d,e,h.r,o,v,g,a6.f)
a1=A.d.gH(a0.r)
for(w=a1.z,v=w.length,t=q!=null,n=0;n<w.length;w.length===v||(0,B.J)(w),++n){m=w[n]
l=C.hyp(m)
if(l!=null&&r.al(0,l)){o=r.h(0,l)
o.toString
m.r=o}o=m.db
if((o==="__kiapo_video__"||A.a.a_(o,a5))&&t)m.at=q}if(p!=null){a2={}
a2.a=null
for(w=a1.z,v=w.length,n=0;n<v;++n){m=w[n]
t=m.db
if(A.a.a_(t,"marriage_sign_")&&!A.a.a_(t,"marriage_sign_placed_")&&m.b!==D.ls&&A.a.c7(t,"rais")){a2.a=m
break}}w=a2.a
if(w!=null){p.c=w.c
p.d=w.d
p.e=w.e
p.f=w.f
A.d.br(a1.z,new C.fOQ(a2))}else A.d.br(a1.z,new C.fOR())
A.d.J(a1.z,p)}w=a0.ax
if(A.a.i(w==null?"":w).length===0&&C.fQP(a0))a0.ax=a6.f.aa().ag()
return a0},
hgc(d){var w,v,u="Hati ya Kiapo cha Uongozi",t=null,s=4279310375,r=4280640491,q=4280172719,p=4279378237,o=4290283019,n=4293056712,m=C.fRC(D.a82),l=C.cE(),k=x.u,j=B.a([C.er(A.bp,!1,s,A.aH,"marriage_locked_bg",r,24,A.bt,A.a8,"",1,C.cE(),m,"","",0,!1,"",0,D.bm,q,2,"",0,0,"",D.ct,D.lS,1,0,0)],k),i=B.a([],k)
i.push(C.Lv("NGMY",A.K,236069181,52,A.bt,A.u,0.08,"watermark",0.45,-0.08,0.02))
i.push(C.Lv("TAREHE:",A.bp,o,16,A.bt,A.I,A.i.D(0.0272,0.02,0.06),"tarehe_lbl",0.1,0.7,0.026))
i.push(C.hdr("tarehe",0.8059999999999999,0.026,0.18,A.bp,16,p,C.hyq()))
i.push(C.fso(0.8099999999999999,0.026+A.i.D(0.0272,0.02,0.06)*0.8,0.12,o))
i.push(C.Lv("HATI YA KIAPO CHA UONGOZI",A.K,p,26,A.bt,A.u,0.048,"title",0.83,0.085,0.055))
i.push(C.Lv("Kiapo cha Rais \xb7 Presidential Oath of Leadership",A.K,o,11,A.cK,A.a8,0.024,"subtitle",0.83,0.085,0.1))
i.push(C.fsQ(0,0.002,D.fO,o,1.6,"title_rule",0.5312,0.2344,0.128))
i.push(C.hds("body_p1",0.085,0.145,0.83,0.105,12,p,"Mimi [Jina Kamili la Rais], nikiwa Rais wa jamii yetu ya Kikongo, ninasimama mbele ya wanajamii wote kuapa kwamba nitawaongoza kwa haki, amani, na heshima kubwa, huku nikihakikisha tunashirikiana kwa pamoja kujenga jamii yetu na kuchangia maendeleo kwa njia bora na ya kistaarabu."))
i.push(C.hds("body_p2",0.085,0.255,0.83,0.092,12,p,"Ninajwika jukumu kamili la kusimamia rasilimali na fedha za wananchi kwa uaminifu mkubwa. Endapo itatokea kiasi chochote cha fedha cha mwanachama yeyote hakikurekodiwa vizuri, au fedha ya jumuiya ikipotea bila maelezo, nitawajibika kulipa mara tatu (triple) ya kiasi kilichopotea."))
i.push(C.hds("body_p3",0.085,0.352,0.83,0.095,12,p,"Kama nikishindwa kulipa au nikakataa kufanya hivyo, wanajamii wote wanaruhusiwa na wako huru kuchukua hatua za kisheria kwenda kuripoti kwa maofisa wa serikali (state officers) au polisi, au kumfungulia mashitaka mahakamani, na niko tayari kukabiliwa na sheria hizo bila pingamizi."))
i.push(C.fsQ(268435456,0.175,D.bm,o,1.6,"video_frame",0.83,0.085,0.46))
i.push(C.Lv("VIDEO YA KIAPO",A.bp,o,10,A.bt,A.I,0.02,"video_lbl",0.7899999999999999,0.10500000000000001,0.468))
i.push(C.er(A.bp,!1,s,A.aH,"__kiapo_video__",r,24,A.bt,A.a8,"",0.131,C.cE(),t,"","",0,!1,"",0,D.bm,q,2,"",0,0,"",D.ct,D.lS,0.77,0.115,0.492))
i.push(C.Lv("Rais Anayeapa:",A.bp,p,15,A.bt,A.u,0.028,"rais_hdr",0.83,0.085,0.655))
i.push(C.Lv("Jina:",A.bp,p,13,A.bt,A.U,0.026,"jina_lbl",0.1,0.085,0.6930000000000001))
i.push(C.hdr("rais_jina",0.195,0.6930000000000001,0.62,A.bp,13,p,""))
i.push(C.fso(0.195,0.7130000000000001,0.62,n))
i.push(C.Lv("Sahihi:",A.bp,p,13,A.bt,A.U,0.026,"sahihi_lbl",0.12,0.085,0.74))
i.push(C.er(A.bp,!1,s,A.aH,"marriage_sign_rais",0,24,A.bt,A.a8,"",0.07,C.cE(),t,"","",0,!1,"",0,D.bm,0,2,"",0,0,"",D.ct,D.fi,0.38,0.21500000000000002,0.73))
i.push(C.fso(0.21500000000000002,0.795,0.38,n))
i.push(C.Lv("Tarehe:",A.bp,p,13,A.bt,A.U,0.026,"tarehe2_lbl",0.12,0.625,0.74))
i.push(C.hdr("rais_tarehe",0.745,0.74,0.2,A.bp,12,p,C.hyq()))
i.push(C.fso(0.745,0.76,0.2,n))
w=A.a.i(d)
if(w.length!==0)A.d.v(i,B.a([C.fsQ(0,0.032,D.bm,o,1,"state_box",0.72,0.14,0.875),C.Lv("EMO 'YA M'MBONDO "+w,A.K,p,14,A.bt,A.U,0.026000000000000002,"state_text",0.72,0.14,0.878)],k))
A.d.v(j,i)
v=C.t_(4294967035,t,0,0,j,l,D.r0,"","",u,D.ds)
return C.Cr(t,t,t,t,D.oQ,5,!1,"hati_kiapo_uongozi",t,t,t,t,C.cE(),t,!1,w,u,t,t,B.a([v],x.g),"hati_kiapo_elegant_navy",t,!1,t)},
a3e(d,e,f,g,h,i,j){var w=0,v=B.j(x.H),u,t,s,r,q,p,o
var $async$a3e=B.e(function(k,l){if(k===1)return B.f(l,v)
for(;;)switch(w){case 0:p=A.a.i(j)
if(p.length===0){if(f.e!=null)f.L(x.q).f.T(D.fhy)
w=1
break}w=3
return B.b(C.Ov(!0),$async$a3e)
case 3:w=4
return B.b(C.a8z(p),$async$a3e)
case 4:t=l
if(f.e==null){w=1
break}if(e)s=d||t==null||C.hDS(t)
else s=!1
w=t!=null?5:6
break
case 5:w=s?7:8
break
case 7:w=9
return B.b(B.bU(D.bmQ,null,new C.fJG(p),f,!0,!0,!1,A.lT,!1,!1,x.N),$async$a3e)
case 9:r=l
if(r==="continue"){i.$1(t)
w=1
break}if(r!=="new"){w=1
break}if(f.e==null){w=1
break}w=10
return B.b(B.cg(null,null,!0,null,new C.fJH(),f,null,!0,!0,x.y),$async$a3e)
case 10:if(l!==!0||f.e==null){w=1
break}h.$1(C.hgc(p))
w=1
break
case 8:i.$1(t)
w=1
break
case 6:o=!g
if(o){w=11
break}else l=o
w=12
break
case 11:w=13
return B.b(C.cfM(p),$async$a3e)
case 13:case 12:if(l){if(f.e!=null)f.L(x.q).f.T(B.b3(null,null,null,null,null,A.t,null,B.d("Hati ya Kiapo cha Uongozi ya "+p+" imefutwa na Admin. Admin pekee anaweza kuunda mpya.",null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
w=1
break}if(!s){if(f.e!=null){q=f.L(x.q).f
q.T(B.b3(null,null,null,null,null,A.t,null,B.d("Registrar wa "+p+" bado hajachapisha Hati ya Kiapo cha Uongozi.",null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))}w=1
break}if(f.e==null){w=1
break}h.$1(C.hgc(p))
case 1:return B.h(u,v)}})
return B.i($async$a3e,v)},
fto:function fto(){},
cfI:function cfI(){},
cfJ:function cfJ(){},
cfL:function cfL(d){this.a=d},
fOQ:function fOQ(d){this.a=d},
fOR:function fOR(){},
fJG:function fJG(d){this.a=d},
fJE:function fJE(d){this.a=d},
fJF:function fJF(d){this.a=d},
fJH:function fJH(){},
fJC:function fJC(d){this.a=d},
fJD:function fJD(d){this.a=d},
as3:function as3(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aFL:function aFL(){var _=this
_.d=null
_.r=_.f=_.e=!1
_.c=_.a=null},
em3:function em3(d){this.a=d},
em1:function em1(d){this.a=d},
em2:function em2(d){this.a=d},
em4:function em4(d){this.a=d},
em5:function em5(d){this.a=d},
xa(d,e,f,g,h,i,j,k,l,m,n){var w=C.cE()
return C.er(e,!1,f,A.aH,k.length===0?"marriage_locked":"marriage_locked_"+k,4280640491,g,A.bt,h,"",i,w,null,"","",0,!1,"",j,D.bm,4280172719,2,d,0,0,"",D.ct,D.d_,l,m,n)},
hy0(d,e,f){var w=4291404327
return B.a([C.qw(0,f,D.f1,w,2,"ring_l",f,d-f*0.42,e),C.qw(0,f,D.f1,w,2,"ring_r",f,d+f*0.06,e)],x.u)},
frO(d,e,f,g,h){var w,v,u="ps_"+g,t=C.qw(4294967288,f,D.f1,4291404327,1.3,u+"_ring",f,d,e),s=f*0.36
s=C.qw(h,s,D.f1,h,0,u+"_head",s,d+f*0.32,e+f*0.16)
w=g?0.12:0.18
v=g?0.76:0.64
return B.a([t,s,C.qw(h,f*0.46,D.f1,h,0,u+"_body",f*v,d+f*w,e+f*0.5)],x.u)},
qw(d,e,f,g,h,i,j,k,l){var w=C.cE()
return C.er(A.bp,!1,4279310375,A.aH,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bt,A.a8,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.ct,D.fi,j,k,l)},
frN(d,e,f,g,h,i,j,k,l){var w=C.cE(),v=A.i.D(j*0.0017,0.02,0.06),u="marriage_field_"+d+":"
return C.er(h,!1,k,A.aH,i?u+A.i.ad(g,3)+":"+A.o.ad(j,1):u+A.i.ad(g,3),4280640491,j,A.cK,A.U,"",v,w,null,"","",0,!1,"",0,D.bm,4280172719,2,l,0,0,"",D.ct,D.d_,g,e,f)},
bCr(d,e,f,g){return C.qw(0,0.002,D.fO,g,0.8,"ul_"+B.w(d)+"_"+B.w(e),f,d,e+0.002)},
hy_(d,e,f,g,h){var w=A.i.D(d.length*30*0.00058+0.08,0.2,0.5),v=f+(g-w)/2
return B.a([C.qw(0,0.036,D.bm,h,1.4,"banner_box_"+d,w,v,e),C.xa(d,A.K,h,30,A.u,0.025199999999999997,0,"banner_t_"+d,w,v,e+0.00612)],x.u)},
hDC(){var w=new B.V(Date.now(),0,!1),v=new C.fPW()
return B.w(v.$1(B.bV(w)))+"/"+B.w(v.$1(B.bM(w)))+"/"+B.bD(w)},
hy1(d,e,f,g,h,i,j){var w=4293056712,v=h*0.56,u=f+v+0.01,t=u+0.08,s=f+h-t,r=""+e,q=f+0.026,p=v-0.026
return B.a([C.xa(r+".",A.bp,i,13,A.I,0.024,0,"wln_"+d+"_"+r,0.026,f,g),C.frN("witness_"+d+"_"+r+"_name",q,g,p,A.bp,!0,16,j,"[Jina la Shahidi]"),C.bCr(q,g+A.i.D(0.0272,0.02,0.06),p,w),C.xa("Sahihi:",A.bp,j,15,A.a8,0.028,0,"wls_"+d+"_"+r,0.077,u,g),C.er(A.bp,!1,4279310375,A.aH,"marriage_sign_"+d+"_witness_"+r,0,24,A.bt,A.a8,"",0.05,C.cE(),null,"","",0,!1,"",0,D.bm,0,2,"",0,0,"",D.ct,D.fi,s,t,g-0.004),C.bCr(t,g+0.044,s,w)],x.u)},
aih(d,e){var w,v,u,t=x.cd,s=e!=null?B.a([e],t):B.a([D.dtv,D.cvo,D.dll,D.dnn],t)
for(t=s.length,w=0;w<s.length;s.length===t||(0,B.J)(s),++w)for(v=A.d.gae(s[w]);v.C();){u=v.gR(0)
if(u.a===d)return u}return null},
hcD(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var w=C.fRC(d.d),v=B.a([C.er(A.bp,!1,4279310375,A.aH,"marriage_locked_bg",4280640491,24,A.bt,A.a8,"",1,C.cE(),w,"","",0,!1,"",0,D.bm,4280172719,2,"",0,0,"",D.ct,D.lS,1,0,0)],x.u)
A.d.v(v,C.iai(d,e,f,g,h,i,j,k,l,m,n,o,p,q))
return v},
iai(c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=null,b0=4286200650,b1=4291404327,b2=4280640491,b3=4280172719,b4="marriage_locked",b5=4293056712,b6=4279310375,b7=4279673674,b8="marriage_locked_",b9=c3.f,c0=c3.r,c1=x.u,c2=B.a([],c1)
c2.push(C.xa("NGMY",A.K,b9&16777215|251658240,60,A.u,0.09,-0.52,"watermark",0.5,-0.11,0.025))
w=c3.z
switch(w.a){case 1:case 3:A.d.v(c2,C.hy0(0.42,0.016,0.048))
v=0.066
break
case 7:A.d.v(c2,C.hy0(0.38,0.012,0.072))
v=0.082
break
case 2:case 6:case 10:A.d.v(c2,C.frO(0.16,0.018,0.052,!1,b9))
A.d.v(c2,C.frO(0.79,0.018,0.052,!0,b0))
v=0.072
break
case 5:c2.push(C.xa("\ud83c\udf33",A.K,4279898632,22,A.a8,0.04,0,"tree",0.16,0.42,0.014))
v=0.056
break
case 8:A.d.v(c2,B.a([C.qw(0,0.062,D.f1,b1,1.6,"crest_o",0.11,0.445,0.012),C.qw(0,0.046,D.f1,b1,1,"crest_i",0.084,0.458,0.02),C.xa("MUHURI",A.K,b9,9,A.u,0.028,0,"crest_t",0.11,0.445,0.028)],c1))
v=0.078
break
case 4:case 9:A.d.v(c2,B.a([C.qw(0,0.002,D.fO,b1,1,"orn_l_0.018",0.24,0.2,0.024),C.qw(b9,0.016,D.lt,b1,0.9,"orn_c_0.018",0.024,0.488,0.018),C.qw(0,0.002,D.fO,b1,1,"orn_r_0.018",0.24,0.518,0.024)],c1))
v=0.04
break
case 0:v=d5
break
default:v=d5}A.d.v(c2,B.a([C.xa("TAREHE:",A.bp,c0,20,A.I,A.i.D(0.033999999999999996,0.02,0.06),0,"tarehe_lbl",0.1,0.7,0.026),C.frN("tarehe",0.8059999999999999,0.026,0.14400000000000002,A.bp,!1,21,b9,C.hDC()),C.bCr(0.814,0.026+A.i.D(0.035699999999999996,0.02,0.06)*0.8,0.12,c0)],c1))
c2.push(C.xa(d2,A.K,b9,d3,A.u,0.06,0,"title",0.82,0.09,v))
u=v+0.054
c2.push(C.qw(c0,0.0026,D.bm,c0,0,"title_rule_1",0.82*d4,0.09+0.82*(1-d4)/2,u))
t=u+0.028
c2.push(C.qw(c3.e,0.138,D.bm,c0,1.15,"intro_frame",0.832,0.08399999999999999,t-0.004))
s=C.cE()
c2.push(C.er(A.bp,!1,b9,A.aH,"marriage_field_utangulizi:"+A.i.ad(0.82,3),b2,19,A.bt,A.cE,"",0.128,s,a9,"","",0,!1,"",0,D.bm,b3,2,c5,0,0,"",D.ct,D.d_,0.82,0.09,t))
t+=c4
if(c8){r=A.i.D(c7.length*30*0.00058+0.08,0.2,0.5)
q=0.09+(0.82-r)/2
s=C.qw(0,0.036,D.bm,c0,1.4,"banner_box_nimetowe_label",r,q,t)
p=C.cE()
A.d.v(c2,B.a([s,C.er(A.K,!1,c0,A.aH,"marriage_field_nimetowe_label:"+A.i.ad(r,3),b2,30,A.bt,A.u,"",0.025199999999999997,p,a9,"","",0,!1,"",0,D.bm,b3,2,c7,0,0,"",D.ct,D.d_,r,q,t+0.00612)],c1))}else A.d.v(c2,C.hy_(c7,t,0.09,0.82,c0))
t+=0.048
c2.push(C.xa(c9,A.bp,b9,d0,A.U,0.03,0,"nimetowe_sub",0.82,0.09,t))
t+=0.03
for(o=1;o<=4;++o){s=c6[o-1]
n=o===1
m=A.i.D(0.7779999999999999-(n?0.328:0),0.22,1)
l=n?A.i.D(0.037399999999999996,0.02,0.06):A.i.D(0.0272,0.02,0.06)
p=""+o
k=t+0.002
j=C.frN("mahari_"+p,0.132,k,m,A.bp,!1,16,b9,s)
if(n)j.f=l
s="nim_n_"+p
i=Date.now()
h=$.jc
$.jc=h+1
s=s.length===0?b4:b8+s
g="nim_ul_"+p
f=Date.now()
e=$.jc
$.jc=e+1
g=g.length===0?b4:b8+g
d=B.a([new C.eQ(""+1000*i+"_"+h,D.d_,0.09,t+0.004,0.032,0.022,p+".",13,A.I,A.bt,A.aH,c0,A.bp,a9,D.bm,b2,b3,2,0,!1,s,0,D.ct,0,"","","","","",!1,0),j,new C.eQ(""+1000*f+"_"+e,D.fi,0.132,k+l+0.002,0.7779999999999999,0.002,"",24,A.a8,A.bt,A.aH,b6,A.bp,a9,D.fO,0,b5,0.8,0,!1,g,0,D.ct,0,"","","","","",!1,0)],c1)
if(n){a0=0.132+m+0.008
a1=a0+0.268+0.004
a2=k+(l-0.025875)/2
s=Date.now()
p=$.jc
$.jc=p+1
i=Date.now()
h=$.jc
$.jc=h+1
g=Date.now()
f=$.jc
$.jc=f+1
e=Date.now()
a3=$.jc
$.jc=a3+1
A.d.v(d,B.a([new C.eQ(""+1000*s+"_"+p,D.d_,a0,k,0.268,l,"AKUNA DENI",22,A.u,A.bt,A.aH,b7,A.e4,a9,D.bm,b2,b3,2,0,!1,"marriage_locked_nim_akuna_deni",0,D.ct,0,"","","","","",!1,0),new C.eQ(""+1000*i+"_"+h,D.fi,a1,a2,0.046,0.025875,"",24,A.a8,A.bt,A.aH,b6,A.bp,a9,D.bm,0,b7,2,0,!1,"marriage_locked_nim_akuna_box",0,D.ct,0,"","","","","",!1,0),new C.eQ(""+1000*g+"_"+f,D.d_,a1,a2-0.002,0.046,0.029875,"\u2713",18,A.u,A.bt,A.aH,b7,A.K,a9,D.bm,b2,b3,2,0,!1,"marriage_locked_nim_akuna_tick",0,D.ct,0,"","","","","",!1,0),new C.eQ(""+1000*e+"_"+a3,D.fi,a0,k,a1+0.046-a0,l,"",24,A.a8,A.bt,A.aH,b6,A.bp,a9,D.bm,0,0,0,0,!1,"marriage_locked_nim_akuna_hit",0,D.ct,0,"","","","","",!1,0)],c1))}A.d.v(c2,d)
t+=0.04}t+=0.006
A.d.v(c2,C.hy_("MASHAHIDI",t,0.09,0.82,c0))
t+=0.046
if(w===D.a7U||w===D.a7W||w===D.a7T||w===D.a7V){w=t-0.008
A.d.v(c2,C.frO(0.21,w,0.044,!0,b0))
A.d.v(c2,C.frO(0.7459999999999999,w,0.044,!1,b9))
t+=0.012}a4=0.05+d6*0.056+0.011
w=t+0.05
s=t+0.012
A.d.v(c2,B.a([C.qw(0,a4,D.bm,c0,1.3,"wit_table_border",0.82,0.09,t),C.qw(c0,a4,D.bm,c0,0,"wit_table_divider",0.0024,0.4988,t),C.qw(0,0.0022,D.fO,c0,1.1,"wit_table_hdrline",0.82,0.09,w),C.xa("UPANDE WA MKE",A.K,c0,20,A.u,0.03,0,"wit_h_mke_t",0.41,0.09,s),C.xa("UPANDE WA MUME",A.K,c0,20,A.u,0.03,0,"wit_h_mume_t",0.41,0.5,s)],c1))
a5=w+0.01
for(a6=1;a6<=d6;++a6){A.d.v(c2,C.hy1("mke",a6,0.106,a5,0.378,c0,b9))
A.d.v(c2,C.hy1("mume",a6,0.516,a5,0.378,c0,b9))
a5+=0.056}t=t+a4+0.012
w=t+0.056
s=t+0.09
p=s-0.002
A.d.v(c2,B.a([C.qw(0,0.11,D.bm,c0,1.2,"mw_box",0.82,0.09,t),C.xa("MWANDISHI",A.bp,c0,15,A.I,0.026,0,"mw_hdr",0.7759999999999999,0.11199999999999999,t+0.016),C.xa("Jina:",A.bp,b9,15,A.a8,0.028,0,"mw_jl",0.09,0.11199999999999999,w),C.frN("mwandishi_jina",0.215,w,0.3116,A.bp,!0,15,b9,""),C.bCr(0.215,p,0.3116,b5),C.xa("Sahihi:",A.bp,b9,15,A.a8,0.028,0,"mw_sl",0.09,0.5,w),C.er(A.bp,!1,b6,A.aH,"marriage_sign_mwandishi",0,24,A.bt,A.a8,"",0.044,C.cE(),a9,"","",0,!1,"",0,D.bm,0,2,"",0,0,"",D.ct,D.fi,0.3161999999999999,0.5738,s-0.044),C.bCr(0.5738,p,0.3161999999999999,b5)],c1))
a7=A.a.i(d1)
if(a7.length!==0){a8=t+0.11+0.006
A.d.v(c2,B.a([C.qw(0,0.032,D.bm,c0,1,"state_box",0.7,0.15,a8),C.xa("EMO 'YA M'MBONDO "+a7,A.K,b9,26,A.U,0.026000000000000002,0,"state_text",0.7,0.15,a8+0.003)],c1))}return c2},
imp(d){var w,v,u,t=null,s=B.b0(d.f),r=B.b0(d.r),q=C.hgR(d.d),p=new C.fPS(s),o=new C.fPT(s),n=d.z,m=n===D.a7U||n===D.a7W||n===D.a7T||n===D.a7V,l=n===D.aKg||n===D.a7X||n===D.aKh,k=B.bS(0,B.fR(q,A.A,t,t,A.ck,A.c_,!0,t,!1,t,t),0,0,0),j=x.p,i=B.a([],j)
if(l){w=n===D.a7X?26:16
i.push(new C.fPV().$1$size(w))}if(n===D.aKi)i.push(D.fZO)
if(m)i.push(B.A(B.a([o.$1$female(!1),o.$1$female(!0)],j),A.l,t,A.iW,A.j,0,t,t))
i.push(B.d("HATI YA KUHOWA",t,t,t,t,t,t,B.l(t,t,s,t,t,t,t,t,t,t,t,9,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),A.K,t,t))
i.push(A.am)
n=B.L(r,A.r,1.1)
w=B.m(4)
i.push(B.q(t,B.x(B.a([p.$0(),D.aTT,p.$1$w(0.9),D.aTT,p.$1$w(0.75)],j),A.l,t,A.e,A.j,0,A.p),A.f,t,t,new B.p(D.bhg,t,n,w,t,t,A.n),t,t,t,t,A.an7,t,t,t))
i.push(A.am)
i.push(new C.fPU(r).$1("NIMETOWE"))
i.push(A.fD)
v=J.e4(3,x.l)
for(u=0;u<3;++u)v[u]=new B.D(A.NU,new B.c8(A.aL,A.e,A.j,A.l,t,A.p,t,0,B.a([B.q(t,t,A.f,t,t,new B.p(r,t,t,t,t,t,A.a6),t,7,t,t,t,t,t,7),A.dh,new B.by(1,A.bb,p.$1$h(4),t)],j),t),t)
A.d.v(i,v)
i.push(A.b3)
i.push(B.d(d.b,t,t,t,t,t,t,B.l(t,t,s.j(0.85),t,t,t,t,t,t,t,t,8,t,t,A.I,t,t,!0,t,t,t,t,t,t,t,t),A.K,t,t))
return new B.an(A.a0,t,A.b0,A.t,B.a([k,new B.D(D.bCJ,B.x(i,A.al,t,A.e,A.j,0,A.p),t)],j),t)},
hCX(d,e){var w,v,u,t=null,s="Hati ya Kuhowa",r=C.aih(e,t)
if(r==null)r=A.d.gH(D.I6)
w=C.cE()
v=C.t_(r.e,t,0,0,C.hcD(r,0.165,y.O,D.do_,"NIMETOWA",!1,"Vitu vifuatavyo vimetolewa:",20,d,"HATI YA KUHOWA",40,0.55,0.036,3),w,D.r0,"","",s,D.ds)
w=C.cE()
u=A.a.i(d)
if(u.length===0)u=t
return C.Cr(t,t,t,t,D.oQ,5,!1,"hati_kuhowa",t,t,t,t,w,t,!1,u,s,t,t,B.a([v],x.g),"hati_kuhowa_"+r.a,t,!1,t)},
hCY(d,e){var w,v,u,t=null,s="Hati ya Kuhoweya",r=C.aih(e,t)
if(r==null)r=A.d.gH(D.I6)
w=C.cE()
v=C.t_(r.e,t,0,0,C.hcD(r,0.165,y.f,D.dji,"NIMEPOKEYA CASH",!0,"Vitu vifuatavyo vimetolewa:",20,d,"HATI YA KUHOWESHA",40,0.55,0.036,3),w,D.r0,"","",s,D.ds)
w=C.cE()
u=A.a.i(d)
if(u.length===0)u=t
return C.Cr(t,t,t,t,D.oQ,5,!1,"hati_kuhoweya",t,t,t,t,w,t,!1,u,s,t,t,B.a([v],x.g),"hati_kuhoweya_"+r.a,t,!1,t)},
bGo(d,e,f){var w=0,v=B.j(x.T),u
var $async$bGo=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:u=B.bU(A.L,null,new C.h1_(e,f),d,!0,!0,!0,null,!1,!1,x.N)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bGo,v)},
ahS(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$ahS=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:q=B.U(i).k("Y<1>")
p=B.C(new B.Y(i,new C.fJK(),q),q.k("M.E"))
w=!g&&p.length!==0?3:4
break
case 3:w=5
return B.b(B.bU(D.N1,null,new C.fJL(p),d,!0,!0,!1,A.lT,!1,!1,x.N),$async$ahS)
case 5:t=k
if(t==="continue"){f.$1(A.d.gH(p).hQ())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bGo(d,"Hati ya Kuhowa",D.I6),$async$ahS)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.HF(d,"Tafuta jimbo\u2026","",A.ka,"Chagua jimbo"),$async$ahS)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}e.$1(C.hCX(r,s))
case 1:return B.h(u,v)}})
return B.i($async$ahS,v)},
ahT(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$ahT=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:q=B.U(i).k("Y<1>")
p=B.C(new B.Y(i,new C.fJO(),q),q.k("M.E"))
w=!g&&p.length!==0?3:4
break
case 3:w=5
return B.b(B.bU(D.N1,null,new C.fJP(p),d,!0,!0,!1,A.lT,!1,!1,x.N),$async$ahT)
case 5:t=k
if(t==="continue"){f.$1(A.d.gH(p).hQ())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bGo(d,"Hati ya Kuhoweya",D.I6),$async$ahT)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.HF(d,"Tafuta jimbo\u2026","",A.ka,"Chagua jimbo"),$async$ahT)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}e.$1(C.hCY(r,s))
case 1:return B.h(u,v)}})
return B.i($async$ahT,v)},
ahU(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p,o,n,m
var $async$ahU=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:n=B.U(i).k("Y<1>")
m=B.C(new B.Y(i,new C.fJS(),n),n.k("M.E"))
w=!g&&m.length!==0?3:4
break
case 3:w=5
return B.b(B.bU(D.N1,null,new C.fJT(m),d,!0,!0,!1,A.lT,!1,!1,x.N),$async$ahU)
case 5:t=k
if(t==="continue"){f.$1(A.d.gH(m).hQ())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bGo(d,"Malipo ya Awamu ya Mahari",D.Sr),$async$ahU)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.HF(d,"Tafuta jimbo\u2026","",A.ka,"Chagua jimbo"),$async$ahU)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}q=C.aih(s,D.Sr)
if(q==null)q=A.d.gH(D.Sr)
n=C.cE()
p=C.t_(q.e,null,0,0,C.hcD(q,0.21,"Mimi [Jina la Baba wa Mume], nikiwa kama baba na mkuu wa familia ya upande wa mume kutoka jamii ya [Jina la Jamii ya Mume], nyumba ya [Jina la Nyumba ya Mume], ninafanya makubaliano haya rasmi na familia ya [Jina la Baba wa Binti], wa jamii ya [Jina la Jamii ya Binti], nyumba ya [Jina la Nyumba ya Binti]. Kwa kuwa malipo kamili ya mahari ya mke wa mwanangu hayajakamilika kwa sasa, tumefikia makubaliano ya kulipa kwa awamu. Kiasi kilichosalia cha mahari kitakamilishwa kikamilifu na familia yetu ifikapo tarehe [Tarehe ya Kurudi Kulipa Mahari]. Siku hiyo, pande zote mbili zitakutana tena kwa ajili ya kukamilisha taratibu zote zilizosalia, kupokea baraka kamili za ndoa, na kukabidhiwa Cheti cha Ndoa ya Kimila. Makubaliano haya yanafanyika kwa hiari, kwa ridhaa ya familia zote mbili, na kwa kufuata misingi ya heshima, mila, desturi na maelewano mema kati ya familia zetu.",D.ddJ,"MALIPO YALIYOSALIA",!1,"Mambo ya Cash na Mali (Yaliyosalia / Yatakayokamilishwa):",18,r,"HATI YA MAKUBALIANO YA MALIPO YA AWAMU YA MAHARI",24,0.85,0.048,2),n,D.r0,"","","Hati ya Makubaliano ya Malipo ya Awamu",D.ds)
n=C.cE()
o=A.a.i(r)
if(o.length===0)o=null
e.$1(C.Cr(null,null,null,null,D.oQ,5,!1,"hati_malipo_awamu",null,null,null,null,n,null,!1,o,"Hati ya Makubaliano ya Malipo ya Awamu",null,null,B.a([p],x.g),"hati_malipo_awamu_"+q.a,null,!1,null))
case 1:return B.h(u,v)}})
return B.i($async$ahU,v)},
ye:function ye(d,e){this.a=d
this.b=e},
jE:function jE(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.z=k},
fPW:function fPW(){},
fPS:function fPS(d){this.a=d},
fPU:function fPU(d){this.a=d},
fPV:function fPV(){},
fPT:function fPT(d){this.a=d},
h1_:function h1_(d,e){this.a=d
this.b=e},
aeG:function aeG(d,e,f){this.c=d
this.d=e
this.a=f},
e8s:function e8s(d,e,f){this.a=d
this.b=e
this.c=f},
e8r:function e8r(d,e){this.a=d
this.b=e},
e8q:function e8q(d,e){this.a=d
this.b=e},
ae4:function ae4(d,e,f){this.c=d
this.d=e
this.a=f},
fJK:function fJK(){},
fJL:function fJL(d){this.a=d},
fJI:function fJI(d){this.a=d},
fJJ:function fJJ(d){this.a=d},
fJO:function fJO(){},
fJP:function fJP(d){this.a=d},
fJM:function fJM(d){this.a=d},
fJN:function fJN(d){this.a=d},
fJS:function fJS(){},
fJT:function fJT(d){this.a=d},
fJQ:function fJQ(d){this.a=d},
fJR:function fJR(d){this.a=d},
Ly(d,e,f,g,h,i,j,k,l,m){var w=C.cE()
return C.er(e,!1,f,A.aH,j.length===0?"marriage_locked":"marriage_locked_"+j,4280640491,g,A.bt,h,"",i,w,null,"","",0,!1,"",0,D.bm,4280172719,2,d,0,0,"",D.ct,D.d_,k,l,m)},
Dt(d,e,f,g,h,i,j,k,l){var w=C.cE()
return C.er(A.bp,!1,4279310375,A.aH,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bt,A.a8,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.ct,D.fi,j,k,l)},
hyM(d,e,f){return C.Dt(0,0.002,D.fO,4293056712,0.8,"ul_"+B.w(d)+"_"+B.w(e),f,d,e+0.022)},
bCC(d,e,f,g,h){return B.a([C.Dt(4294967288,0.032,D.bm,4291404327,1.15,"pill_"+d,g,f,e),C.Ly(d,A.K,h,11,A.u,0.024,"pill_t_"+d,g,f,e+0.005)],x.u)},
hdw(d,e,f,g,h){var w=d+f/2,v=e+0.006,u=f*0.4,t=B.w(e)
return B.a([C.Dt(0,0.002,D.fO,g,1,"orn_l_"+t,u,d,v),C.Dt(h,0.016,D.lt,g,0.9,"orn_c_"+t,0.024,w-0.012,e),C.Dt(0,0.002,D.fO,g,1,"orn_r_"+t,u,w+0.018,v)],x.u)},
a2E(d,e,f,g,h,i,j,k){var w=d.length*i*0.0027+0.006,v=C.Ly(d,A.bp,j,i,A.U,0.022,"ll_"+e,w,f,g),u=f+w,t=h-w,s=C.cE()
return B.a([v,C.er(A.K,!1,j,A.aH,"marriage_field_"+e+":"+A.i.ad(t,3),4280640491,i,A.cK,A.U,"",0.02,s,null,"","",0,!1,"",0,D.bm,4280172719,2,k,0,0,"",D.ct,D.d_,t,u,g-0.002),C.hyM(u,g+0.018,t)],x.u)},
hyN(d,e,f,g,h,i){var w=4291404327,v=f+0.002
return B.a([C.Dt(h,0.028,D.bm,h,0,"chv_"+d,g,e,f),C.Dt(w,0.024,D.lt,w,0,"chv_l_"+d,0.024,e-0.008,v),C.Dt(w,0.024,D.lt,w,0,"chv_r_"+d,0.024,e+g-0.016,v),C.Ly(d,A.K,i,9.5,A.u,0.02,"chv_t_"+d,g,e,f+0.004)],x.u)},
bCB(d,e,f,g,h){var w=e+0.12,v=g-0.12
return B.a([C.Ly("Sahihi:",A.bp,h,10,A.U,0.02,"is_"+d,0.12,e,f),C.er(A.bp,!1,4279310375,A.aH,"marriage_sign_"+d,0,24,A.bt,A.a8,"",0.032,C.cE(),null,"","",0,!1,"",0,D.bm,0,2,"",0,0,"",D.ct,D.fi,v,w,f-0.006),C.hyM(w,f+0.016,v)],x.u)},
hgS(d){var w,v
for(w=0;w<19;++w){v=D.SH[w]
if(v.a===d)return v}return null},
ioN(d){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=d.c
if(A.a.a_(k,"hati_kuhowa_")){w=C.aih(A.a.b2(k,12),l)
v=w==null?l:w.d}else if(A.a.a_(k,"hati_kuhoweya_")){w=C.aih(A.a.b2(k,14),l)
v=w==null?l:w.d}else if(A.a.a_(k,"hati_malipo_awamu_")){u=A.a.b2(k,18)
w=C.aih(u,D.Sr)
v=w==null?l:w.d
if(v==null){w=C.aih(u,l)
v=w==null?l:w.d}}else if(A.a.a_(k,"marriage_")){w=C.hgS(A.a.b2(k,9))
v=w==null?l:w.d}else v=l
if(v==null)return!1
$.hzD.a8(0)
$.hzP.a8(0)
t=C.fRC(v)
for(w=d.r,s=w.length,r=!1,q=0;q<w.length;w.length===s||(0,B.J)(w),++q)for(p=w[q].z,o=p.length,n=0;n<o;++n){m=p[n]
if(m.db==="marriage_locked_bg"&&m.at!==t){m.at=t
r=!0}}return r},
hi1(d){var w=0,v=B.j(x.T),u
var $async$hi1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:u=B.bU(A.L,null,new C.h2s(),d,!0,!0,!0,null,!1,!1,x.N)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$hi1,v)},
yh:function yh(d,e){this.a=d
this.b=e},
o7:function o7(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
blN:function blN(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
h2s:function h2s(){},
aeJ:function aeJ(d){this.a=d},
eqQ:function eqQ(d,e){this.a=d
this.b=e},
eqP:function eqP(d){this.a=d},
eqO:function eqO(d,e){this.a=d
this.b=e},
agp:function agp(d,e,f){this.c=d
this.d=e
this.a=f},
hgR(d){return $.hzP.c3(0,d,new C.fRE(d))},
fRC(d){return $.hzD.c3(0,d,new C.fRD(d))},
fG(d){return B.h6K(d>>>16&255,d>>>8&255,d&255,255)},
idw(d){var w,v,u=4292128567,t=4285213214,s=4294967035,r=4290283019,q=null,p=4279378237,o=4291404327,n=4294966774,m=4294702831,l=4285218602,k=4291394365,j=4294967295,i=4294964964,h=4294965484,g=4280241466,f=4287326484,e=4294966518
switch(d.a){case 0:return C.hAV(4294570461,4293910718,4284234270,u)
case 1:return C.hAV(4294635750,4293975240,t,4292912216)
case 2:w=C.fql(s,4294505966,r)
C.bCl(w,14,16,p)
C.kL(w,8,9,464,836,u,1.2)
C.Dp(w,2,2,1,1,u,10)
C.Dp(w,478,2,-1,1,u,10)
C.Dp(w,2,852,1,-1,u,10)
C.Dp(w,478,852,-1,-1,u,10)
return w
case 3:return C.fql(4294966515,4294373082,4289102906)
case 4:return C.i8_(C.fql(4294376440,4293653998,4290287194))
case 5:w=C.fql(4294965238,4294437098,4288444980)
C.bCl(w,14,16,4283043359)
C.kL(w,6,7,468,840,u,1)
C.kL(w,9,10,462,834,o,0.7)
return w
case 6:v=B.ho(q,q,A.cc,0,A.eb,854,q,0,3,q,A.cc,480,!1)
C.z9(v,n,4294175448)
C.tj(v,n)
C.kL(v,24,24,432,806,4286209070,1)
C.a2r(v,12,12,468,12,o,3,20)
C.a2r(v,12,842,468,842,o,3,20)
C.a2r(v,12,12,12,842,o,3,20)
C.a2r(v,468,12,468,842,o,3,20)
return v
case 7:return C.i5K(4294440434,4293518297,4280228630,r)
case 8:v=B.ho(q,q,A.cc,0,A.eb,854,q,0,3,q,A.cc,480,!1)
C.z9(v,m,4293911504)
C.tj(v,m)
C.kL(v,28,28,424,798,l,1)
C.fA3(v,28,28,l,k)
C.fA3(v,452,28,l,k)
C.fA3(v,28,826,l,k)
C.fA3(v,452,826,l,k)
return v
case 9:v=B.ho(q,q,A.cc,0,A.eb,854,q,0,3,q,A.cc,480,!1)
C.z9(v,j,4294111986)
C.tj(v,j)
C.kL(v,18,18,444,818,4292401368,0.7)
B.iW(v,!0,C.fG(p),0,13,0,853)
return v
case 10:return C.ia4(i,4294173372)
case 11:return C.ibf(4294439140,4293449662)
case 12:return C.i5w(h,4294239432)
case 13:return C.iaF(4294244340,4293193448)
case 14:return C.if1(4294505710,4293780694)
case 15:return C.fpc(4294966259,4294439138,o,p,q)
case 16:return C.fpc(4294966776,4294178544,o,g,g)
case 17:return C.fpc(4294965493,4294504170,o,4286200650,q)
case 18:return C.fpc(4294966519,4294373862,o,p,p)
case 19:return C.i9a()
case 20:return C.i9b()
case 21:v=B.ho(q,q,A.cc,0,A.eb,854,q,0,3,q,A.cc,480,!1)
C.z9(v,h,4293976768)
C.tj(v,h)
C.bCl(v,14,16,p)
B.iW(v,!0,C.fG(u),4,475,4,9)
B.iW(v,!0,C.fG(u),4,475,844,849)
B.iW(v,!0,C.fG(u),4,9,4,849)
B.iW(v,!0,C.fG(u),470,475,4,849)
C.a2r(v,10,12,470,12,u,2,16)
C.a2r(v,10,842,470,842,u,2,16)
C.a2r(v,10,12,10,842,u,2,18)
C.a2r(v,470,12,470,842,u,2,18)
C.Dp(v,2,2,1,1,t,10)
C.Dp(v,478,2,-1,1,t,10)
C.Dp(v,2,852,1,-1,t,10)
C.Dp(v,478,852,-1,-1,t,10)
C.kL(v,14,16,452,822,u,1.8)
return v
case 22:v=B.ho(q,q,A.cc,0,A.eb,854,q,0,3,q,A.cc,480,!1)
C.z9(v,s,4294438872)
C.tj(v,s)
C.kL(v,14,16,452,822,o,2.2)
C.kL(v,22,24,436,806,o,1)
C.heY(v,!1,!1,o,p,p,36,14,16)
C.l0(v,240,20,7,o,!0)
C.l0(v,240,834,7,o,!0)
C.l0(v,18,427,7,o,!0)
C.l0(v,462,427,7,o,!0)
return v
case 23:v=B.ho(q,q,A.cc,0,A.eb,854,q,0,3,q,A.cc,480,!1)
C.z9(v,i,4293910712)
C.tj(v,i)
B.iW(v,!0,C.fG(u),0,479,0,20)
B.iW(v,!0,C.fG(u),0,479,834,853)
B.iW(v,!0,C.fG(u),0,20,0,853)
B.iW(v,!0,C.fG(u),460,479,0,853)
B.iW(v,!0,C.fG(f),5,474,5,9)
B.iW(v,!0,C.fG(f),5,474,844,848)
B.iW(v,!0,C.fG(f),5,9,5,848)
B.iW(v,!0,C.fG(f),470,474,5,848)
C.kL(v,28,28,424,798,f,1.4)
return v
case 24:v=B.ho(q,q,A.cc,0,A.eb,854,q,0,3,q,A.cc,480,!1)
C.z9(v,e,4294174404)
C.tj(v,e)
C.bCl(v,14,16,p)
B.iW(v,!0,C.fG(u),3,476,3,8)
B.iW(v,!0,C.fG(u),3,476,845,850)
B.iW(v,!0,C.fG(u),3,8,3,850)
B.iW(v,!0,C.fG(u),471,476,3,850)
C.kL(v,9,10,462,834,t,1)
C.kL(v,14,16,452,822,u,1.8)
C.l0(v,240,8,4,u,!0)
C.l0(v,240,846,4,u,!0)
C.l0(v,8,427,4,u,!0)
C.l0(v,472,427,4,u,!0)
C.l0(v,8,8,3,t,!0)
C.l0(v,472,8,3,t,!0)
C.l0(v,8,846,3,t,!0)
C.l0(v,472,846,3,t,!0)
return v}},
z9(d,e,f){var w,v,u,t,s,r=null,q=e>>>16&255,p=f>>>16&255,o=e>>>8&255,n=f>>>8&255,m=e&255,l=f&255,k=0
for(;;){w=d.a
v=w==null
u=v?r:w.b
if(!(k<(u==null?0:u)))break
w=v?r:w.b
t=k/((w==null?0:w)-1)
w=1-t
v=A.o.D(A.i.V(q*w+p*t),0,255)
u=A.o.D(A.i.V(o*w+n*t),0,255)
w=A.o.D(A.i.V(m*w+l*t),0,255)
s=new Uint8Array(3)
s[0]=v
s[1]=u
s[2]=w
w=d.a
w=w==null?r:w.a
if(w==null)w=0
B.l2(d,!1,A.dl,new B.MM(s),r,A.d6,1,0,w-1,k,k);++k}},
tj(d,e){var w,v,u,t,s,r,q,p,o=null,n=new B.e2()
n.cY(e)
for(w=0;w<900;++w){v=d.a
v=v==null?o:v.a
u=n.az(v==null?0:v)
v=d.a
v=v==null?o:v.b
t=n.az(v==null?0:v)
v=d.a
s=v==null?o:v.dT(u,t,o)
if(s==null)s=new B.it()
v=A.o.D(A.i.M(s.gb9(s))-3,0,255)
r=A.o.D(A.i.M(s.gbe())-3,0,255)
q=A.o.D(A.i.M(s.gbc(s))-2,0,255)
p=d.a
if(p!=null)p.k7(u,t,v,r,q,255)}},
kL(d,e,f,g,h,i,j){var w,v=null,u=C.fG(i),t=e+g
B.l2(d,!0,A.dl,u,v,A.d6,j,e,t,f,f)
w=f+h
B.l2(d,!0,A.dl,u,v,A.d6,j,e,t,w,w)
B.l2(d,!0,A.dl,u,v,A.d6,j,e,e,f,w)
B.l2(d,!0,A.dl,u,v,A.d6,j,t,t,f,w)},
Dp(d,e,f,g,h,i,j){var w,v,u=null,t=A.o.D(A.i.V(j*0.72),8,j-2)
B.l2(d,!0,A.dl,C.fG(i),u,A.d6,2,e,e+g*j,f,f)
B.l2(d,!0,A.dl,C.fG(i),u,A.d6,2,e,e,f,f+h*j)
w=e+g*3
v=f+h*3
B.l2(d,!0,A.dl,C.fG(i),u,A.d6,1,w,e+g*t,v,v)
B.l2(d,!0,A.dl,C.fG(i),u,A.d6,1,w,w,v,f+h*t)},
hAV(d,e,f,g){var w=null,v=B.ho(w,w,A.cc,0,A.eb,854,w,0,3,w,A.cc,480,!1)
C.z9(v,d,e)
C.tj(v,d)
B.iW(v,!0,C.fG(f),0,479,0,28)
B.iW(v,!0,C.fG(f),0,479,826,853)
B.iW(v,!0,C.fG(f),0,28,0,853)
B.iW(v,!0,C.fG(f),452,479,0,853)
C.kL(v,5,5,470,844,g,1.1)
C.kL(v,28,28,424,798,g,1.6)
C.Dp(v,2,2,1,1,g,11)
C.Dp(v,478,2,-1,1,g,11)
C.Dp(v,2,852,1,-1,g,11)
C.Dp(v,478,852,-1,-1,g,11)
return v},
fql(d,e,f){var w=null,v=B.ho(w,w,A.cc,0,A.eb,854,w,0,3,w,A.cc,480,!1)
C.z9(v,d,e)
C.tj(v,d)
C.kL(v,14,16,452,822,f,1.6)
C.kL(v,20,22,440,810,f,0.8)
return v},
bCl(d,e,f,g){var w,v=C.fG(g)
B.iW(d,!0,v,0,479,0,f-1)
w=854-f
B.iW(d,!0,v,0,479,w,853);--w
B.iW(d,!0,v,0,e-1,f,w)
B.iW(d,!0,v,480-e,479,f,w)},
i8_(d){var w,v,u=4291404327
C.bCl(d,14,16,4279122734)
for(w=10;w<470;w+=14){C.l0(d,w,8,3,u,!0)
C.l0(d,w,846,3,u,!0)}for(v=18;v<836;v+=16){C.l0(d,7,v,3,u,!0)
C.l0(d,473,v,3,u,!0)}return d},
fDm(d,e,f,g,h,i,j,k,l,m,n){var w,v,u,t=x.J,s=B.a([new B.jt(e,f),new B.jt(e+g*n,f),new B.jt(e,f+h*n)],t)
B.a3a(d,C.fG(m),s)
w=A.o.D(A.i.V(n*0.17),5,8)
v=A.i.V(n*0.78)
s=e+g*w
u=f+h*w
t=B.a([new B.jt(s,u),new B.jt(e+g*v,u),new B.jt(s,f+h*v)],t)
B.a3a(d,C.fG(k),t)
t=A.i.V(n*0.39)
C.l0(d,e+g*t,f+h*t,6,l,!0)
if(i){t=n-7
C.l0(d,e+g*t,f+h*3,4,k,!0)
C.l0(d,e+g*3,f+h*t,4,k,!0)}if(j){t=n-4
C.l0(d,e+g*t,f,5,k,!0)
C.l0(d,e,f+h*t,5,k,!0)}},
heY(d,e,f,g,h,i,j,k,l){var w,v
C.fDm(d,k,l,1,1,e,f,g,h,i,j)
w=480-k
C.fDm(d,w,l,-1,1,e,f,g,h,i,j)
v=854-l
C.fDm(d,k,v,1,-1,e,f,g,h,i,j)
C.fDm(d,w,v,-1,-1,e,f,g,h,i,j)},
a2r(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p,o=g-e,n=h-f,m=Math.max(1,A.i.V(Math.sqrt(o*o+n*n)/k))
for(w=i>>>16&255,v=i>>>8&255,u=i&255,t=0;t<=m;++t){s=t/m
r=A.i.V(e+o*s)
q=A.i.V(f+n*s)
p=new Uint8Array(4)
p[0]=w
p[1]=v
p[2]=u
p[3]=255
B.lm(d,!0,A.dl,new B.rt(p),null,A.d6,j,r,q)}},
fCd(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o
for(w=i>>>16&255,v=i>>>8&255,u=i&255,t=0;t<3;++t){s=34+t*12
r=26-t*6
q=e+g*s
p=f+h*s
o=new Uint8Array(4)
o[0]=w
o[1]=v
o[2]=u
o[3]=255
B.l2(d,!0,A.dl,new B.rt(o),null,A.d6,1.4,q,q+g*r,p,p)
o=new Uint8Array(4)
o[0]=w
o[1]=v
o[2]=u
o[3]=255
B.l2(d,!0,A.dl,new B.rt(o),null,A.d6,1.4,q,q,p,p+h*r)}},
i5K(d,e,f,g){var w,v,u,t,s,r,q,p,o=null,n=B.ho(o,o,A.cc,0,A.eb,854,o,0,3,o,A.cc,480,!1)
C.z9(n,d,e)
C.tj(n,d)
C.kL(n,20,20,440,814,f,1.2)
C.fCd(n,0,0,1,1,g)
C.fCd(n,480,0,-1,1,g)
C.fCd(n,0,854,1,-1,g)
C.fCd(n,480,854,-1,-1,g)
for(w=g>>>16&255,v=g>>>8&255,u=g&255,t=-3;t<=3;++t){s=-1.5707963267948966+t*0.2
r=Math.cos(s)
q=Math.sin(s)
r=A.i.V(240+24*r)
q=A.i.V(60+24*q)
p=new Uint8Array(4)
p[0]=w
p[1]=v
p[2]=u
p[3]=255
B.l2(n,!0,A.dl,new B.rt(p),o,A.d6,1.2,240,r,60,q)}return n},
fA3(d,e,f,g,h){var w
C.fH8(d,!0,C.fG(g),13,e,f)
C.fH8(d,!0,C.fG(g),9,e,f)
w=B.a([new B.jt(e,f-4),new B.jt(e+4,f),new B.jt(e,f+4),new B.jt(e-4,f)],x.J)
B.a3a(d,C.fG(h),w)},
l0(d,e,f,g,h,i){var w=null,v=f-g,u=e+g,t=f+g,s=e-g,r=B.a([new B.jt(e,v),new B.jt(u,f),new B.jt(e,t),new B.jt(s,f)],x.J)
if(i){B.a3a(d,C.fG(h),r)
return}B.l2(d,!0,A.dl,C.fG(h),w,A.d6,1,e,u,v,f)
B.l2(d,!0,A.dl,C.fG(h),w,A.d6,1,u,e,f,t)
B.l2(d,!0,A.dl,C.fG(h),w,A.d6,1,e,s,t,f)
B.l2(d,!0,A.dl,C.fG(h),w,A.d6,1,s,e,f,v)},
fpb(d,e,f,g,h,i,j){var w,v=B.a([new B.jt(e,f),new B.jt(e+g*28,f),new B.jt(e,f+h*28)],x.J)
B.a3a(d,C.fG(i),v)
v=e+g*14
w=f+h*14
C.l0(d,v,w,6,j,!0)
C.l0(d,v,w,3,i,!0)},
fpc(d,e,f,g,h){var w=null,v=B.ho(w,w,A.cc,0,A.eb,854,w,0,3,w,A.cc,480,!1)
C.z9(v,d,e)
C.tj(v,d)
C.kL(v,18,18,444,818,f,2)
C.kL(v,26,26,428,802,f,0.9)
if(h!=null)B.iW(v,!0,C.fG(h),28,451,28,34)
C.fpb(v,18,18,1,1,g,f)
C.fpb(v,462,18,-1,1,g,f)
C.fpb(v,18,836,1,-1,g,f)
C.fpb(v,462,836,-1,-1,g,f)
return v},
i9a(){var w,v=null,u=4294966259,t=4292128567,s=4287326484,r=B.ho(v,v,A.cc,0,A.eb,854,v,0,3,v,A.cc,480,!1)
C.z9(r,u,4294240980)
C.tj(r,u)
C.kL(r,10,12,460,830,t,3.2)
C.kL(r,18,20,444,814,s,1.2)
C.kL(r,24,26,432,802,t,1.8)
C.heY(r,!0,!1,t,s,4279378237,38,10,12)
for(w=56;w<424;w+=18){C.l0(r,w,16,3,t,!0)
C.l0(r,w,838,3,t,!0)}for(w=56;w<798;w+=22){C.l0(r,16,w,3,t,!0)
C.l0(r,464,w,3,t,!0)}return r},
i9b(){var w,v,u,t=null,s=4294966776,r=4291404327,q=4282000405,p=B.ho(t,t,A.cc,0,A.eb,854,t,0,3,t,A.cc,480,!1)
C.z9(p,s,4294373080)
C.tj(p,s)
C.kL(p,16,18,448,818,r,2.4)
C.kL(p,24,26,432,802,4286209044,1)
w=new C.frF(p)
for(v=40;v<440;v+=16){w.$4(v,22,1,1)
w.$4(v,832,1,1)}for(u=44;u<810;u+=18){w.$4(22,u,1,1)
w.$4(458,u,-1,1)}C.heY(p,!1,!0,r,q,q,34,16,18)
return p},
bD2(d,e,f,g,h,i){B.iW(d,!0,C.fG(i),e,e+g,f,f+h)},
bDU(d,e,f,g,h,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
for(w=e+g,v=a0>>>16&255,u=a1>>>16&255,t=a0>>>8&255,s=a1>>>8&255,r=a0&255,q=a1&255,p=h-1,o=h<=1,n=0;n<h;++n){m=o?0:n/p
l=1-m
k=A.o.D(A.i.V(v*l+u*m),0,255)
j=A.o.D(A.i.V(t*l+s*m),0,255)
l=A.o.D(A.i.V(r*l+q*m),0,255)
i=new Uint8Array(3)
i[0]=k
i[1]=j
i[2]=l
l=f+n
B.l2(d,!1,A.dl,new B.MM(i),null,A.d6,1,e,w,l,l)}},
ia3(d,e,f,g,h,i){var w,v,u,t,s,r,q
if(i){w=e+g-1
v=0
for(;;){if(!(v<g&&f+v<854))break
u=h[A.o.F(A.o.aq(v,5),6)]
t=f+v
s=Math.min(w,479)
r=new Uint8Array(4)
r[0]=u>>>16&255
r[1]=u>>>8&255
r[2]=u&255
r[3]=255
B.l2(d,!1,A.dl,new B.rt(r),null,A.d6,1,e,s,t,t);++v}return}w=f+g-1
q=0
for(;;){if(!(q<g&&e+q<480))break
u=h[A.o.F(A.o.aq(q,5),6)]
t=e+q
s=Math.min(w,853)
r=new Uint8Array(4)
r[0]=u>>>16&255
r[1]=u>>>8&255
r[2]=u&255
r[3]=255
B.l2(d,!1,A.dl,new B.rt(r),null,A.d6,1,t,t,f,s);++q}},
ia4(d,e){var w,v,u=null,t=B.ho(u,u,A.cc,0,A.eb,854,u,0,3,u,A.cc,480,!1)
for(w=0;w<854;w+=30)for(v=0;v<480;v+=30)C.ia3(t,v,w,30,D.d5R,(A.o.aq(v,30)+A.o.aq(w,30)&1)===0)
C.bD2(t,44,44,392,766,d)
C.bDU(t,44,44,392,766,d,e)
C.tj(t,d)
C.kL(t,44,44,392,766,4292128567,2.2)
C.kL(t,50,50,380,754,4279898632,0.8)
return t},
ibe(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=null
switch(A.o.F(g,4)){case 0:C.l0(d,e,f,7,h,!0)
C.l0(d,e,f,3,h,!1)
break
case 1:w=e-7
v=f-7
u=e+7
t=f+7
B.l2(d,!0,A.dl,C.fG(h),o,A.d6,1.6,w,u,v,t)
B.l2(d,!0,A.dl,C.fG(h),o,A.d6,1.6,u,w,v,t)
break
case 2:for(w=e-8,v=e+8,u=h>>>16&255,t=h>>>8&255,s=h&255,r=-2;r<=2;++r){q=f+r*3
p=new Uint8Array(4)
p[0]=u
p[1]=t
p[2]=s
p[3]=255
B.l2(d,!0,A.dl,new B.rt(p),o,A.d6,1.2,w,v,q,q)}break
default:B.l2(d,!0,A.dl,C.fG(h),o,A.d6,1.5,e-8,e+8,f,f)
B.l2(d,!0,A.dl,C.fG(h),o,A.d6,1.5,e,e,f-8,f+8)
B.lm(d,!0,A.dl,C.fG(h),o,A.d6,2,e,f)}},
ibf(d,e){var w,v,u,t,s=null,r=B.ho(s,s,A.cc,0,A.eb,854,s,0,3,s,A.cc,480,!1)
B.iW(r,!0,C.fG(4284103196),0,479,0,853)
for(w=0,v=18;v<854;v+=32)for(u=18;u<480;u+=32,w=t){t=w+1
C.ibe(r,u,v,w,4292391514)}C.bD2(r,46,46,388,762,d)
C.bDU(r,46,46,388,762,d,e)
C.tj(r,d)
C.kL(r,46,46,388,762,4291404327,1.8)
return r},
hw9(d,e,f,g){C.fH8(d,!0,C.fG(g),16,e,f)
C.fH8(d,!0,C.fG(g),11,e,f)
C.l0(d,e,f,6,g,!0)
B.l2(d,!0,A.dl,C.fG(g),null,A.d6,1.3,e-14,e+14,f,f)
B.l2(d,!0,A.dl,C.fG(g),null,A.d6,1.3,e,e,f-14,f+14)},
i5w(d,e){var w,v=null,u=4283051028,t=4292128567,s=B.ho(v,v,A.cc,0,A.eb,854,v,0,3,v,A.cc,480,!1)
B.iW(s,!0,C.fG(4280948752),0,479,0,853)
B.iW(s,!0,C.fG(u),0,479,0,78)
B.iW(s,!0,C.fG(u),0,479,776,853)
for(w=28;w<460;w+=44){C.hw9(s,w,39,t)
C.hw9(s,w,815,t)}C.bD2(s,38,92,404,670,d)
C.bDU(s,38,92,404,670,d,e)
C.tj(s,d)
C.kL(s,38,92,404,670,t,1.8)
C.kL(s,45,99,390,656,4287322667,0.8)
return s},
iaE(d,e,f,g){var w,v,u,t,s,r,q,p,o
for(w=f-4,v=x.J,u=g>>>16&255,t=g>>>8&255,s=g&255,r=-2;r<=2;++r){q=e+r*9
p=B.a([new B.jt(e,f),new B.jt(q-5,w),new B.jt(q,f-(18-Math.abs(r)*3)),new B.jt(q+5,w)],v)
o=new Uint8Array(4)
o[0]=u
o[1]=t
o[2]=s
o[3]=255
B.a3a(d,new B.rt(o),p)}B.lm(d,!0,A.dl,C.fG(4292128567),null,A.d6,3,e,f)},
iaF(d,e){var w,v,u,t,s=null,r=4279196764,q=B.ho(s,s,A.cc,0,A.eb,854,s,0,3,s,A.cc,480,!1)
C.z9(q,4278931279,4292330394)
for(w=8;w<=34;w+=4){v=new Uint8Array(4)
v[0]=8
v[1]=56
v[2]=56
v[3]=255
B.l2(q,!0,A.dl,new B.rt(v),s,A.d6,1.1,w,w,0,853)
v=479-w
u=new Uint8Array(4)
u[0]=8
u[1]=56
u[2]=56
u[3]=255
B.l2(q,!0,A.dl,new B.rt(u),s,A.d6,1.1,v,v,0,853)}B.iW(q,!0,C.fG(r),0,479,0,70)
B.iW(q,!0,C.fG(r),0,479,798,853)
for(t=0;t<5;++t)C.iaE(q,70+t*85,48,4292128567)
C.bD2(q,48,78,384,712,d)
C.bDU(q,48,78,384,712,d,e)
C.tj(q,d)
C.kL(q,48,78,384,712,4291404327,1.6)
return q},
if1(d,e){var w,v,u,t=null,s=4279970378,r=B.ho(t,t,A.cc,0,A.eb,854,t,0,3,t,A.cc,480,!1)
B.iW(r,!0,C.fG(s),0,479,0,853)
for(w=10;w<854;w+=18)for(v=10;v<480;v+=18){C.l0(r,v,w,6,4293449648,!1)
u=new Uint8Array(4)
u[0]=232
u[1]=215
u[2]=176
u[3]=255
B.lm(r,!0,A.dl,new B.rt(u),t,A.d6,1,v,w)}C.bD2(r,40,40,400,774,d)
C.bDU(r,40,40,400,774,d,e)
C.tj(r,d)
C.kL(r,40,40,400,774,4291058750,2)
C.kL(r,48,48,384,758,s,0.8)
return r},
lb:function lb(d,e){this.a=d
this.b=e},
fRE:function fRE(d){this.a=d},
fRD:function fRD(d){this.a=d},
frF:function frF(d){this.a=d},
fSk(d){var w
switch(d.a){case"gazette":w="The NGMY Gazette"
break
case"chronicle":w="The NGMY Chronicle"
break
case"times":w="The NGMY Times"
break
case"daily":w="The NGMY Daily"
break
case"tabloid":w="The Big NGMY"
break
case"modern":w="NGMY Digest"
break
case"midnight":w="The Midnight NGMY"
break
default:w="The NGMY Herald"
break}return w},
ib7(d){var w=d.length
if(w>3&&d[0]===137&&d[1]===80)return"image/png"
if(w>11&&d[8]===87&&d[9]===69)return"image/webp"
return"image/jpeg"},
hdp(d){var w,v,u,t=null,s=A.a.co(d,"{"),r=A.a.p7(d,"}")
if(s<0||r<=s)return t
try{w=A.X.aQ(0,Ak.aie(A.a.aB(d,s,r+1)),t)
v=x.f.b(w)?B.a2(w,x.N,x.z):t
return v}catch(u){return t}},
agM(d,e){var w=0,v=B.j(x.N),u,t,s,r,q,p,o,n
var $async$agM=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(B.vW(null,""),$async$agM)
case 3:n=g
if(A.a.i(n).length===0)throw B.W("AI is not available right now. Please try again later.")
t=B.nm(n)
if(e==null)s=A.i4
else{r=C.ib7(e)
s=B.a([new B.a1o(A.cT.gcu().aN(e),r)],x.aD)}q=null,p=0
case 4:if(!(p<2)){w=6
break}w=7
return B.b(B.rh(t,d,s,"news",E.GD),$async$agM)
case 7:o=g
r=o.b
if(r!=null&&A.a.i(r).length!==0){u=r
w=1
break}q=o.a
case 5:++p
w=4
break
case 6:throw B.W(q!=null&&B.LZ(q)?"No internet connection. Try again when you are online.":"The AI could not do that just now. Try again.")
case 1:return B.h(u,v)}})
return B.i($async$agM,v)},
bFx(d){return C.iot(d)},
iot(d){var w=0,v=B.j(x.b6),u,t=2,s=[],r,q,p,o,n,m
var $async$bFx=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
r='You are a professional Swahili newspaper editor and journalist: a native speaker from Tanzania or Kenya whose writing every Swahili reader finds natural, warm and correct.\nThe newspaper page below was written or translated by a machine, so it may sound stiff, foreign or word-for-word. Rewrite EVERY field so it reads as if a skilled native Swahili journalist wrote it first: natural, clear, correct and professional. Fix wrong grammar (noun classes, verb agreement, tenses), odd or invented words and any English sentence structure. Keep every fact, name and number and do not add facts. Keep the same fields and the same number of paragraphs. Write people\'s names with normal capitals, except KB PABLO QR.\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n\nPage: '+A.X.aw(d.aj(),null)+'\nReply with JSON only, with exactly the same fields: {"paper":"newspaper name","category":"ONE of COMMUNITY, TECHNOLOGY, BUSINESS, EDUCATION, WORLD NEWS, FEATURE","headline":"...","subhead":"...","byline":"By ...","caption":"one sentence about the picture","body":["paragraph 1","paragraph 2","paragraph 3","paragraph 4"],"pullQuote":"a short line from the story","sidebarTitle":"Did you know?","sidebarText":"two short sentences"}\n'
w=7
return B.b(C.agM(r,null),$async$bFx)
case 7:q=f
p=C.hdp(q)
if(p==null){u=d
w=1
break}o=d.aES(p)
if(o.r.length===0||A.d.aO(o.r," ").length<A.d.aO(d.r," ").length*0.5){u=d
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
return B.i($async$bFx,v)},
hA8(d){var w,v=F.hg8(d)
v=B.aL(v,"book","newspaper")
if(F.a3v(d)!=="sw"){w=B.ag("swahili|kiswahili",!1,!1,!1,!1)
w=w.b.test(d)}else w=!0
w=w?'SWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n':""
return"- Write like a real newspaper: a strong headline (max 12 words), a subhead (max 25 words), a byline, then 4 or 5 paragraphs, about 330 to 400 words in all. Plain text only: no markdown, no emojis, no lists.\n- Use ONLY the facts in the knowledge above. Never invent numbers, prices, dates, awards, places or quotes. Do not put made-up words in anyone's mouth.\n- KB PABLO QR is the Founder, President and CEO of NGMY. Always write his name in capital letters.\n- Never mention secret or admin details, passwords or the price list.\n- STYLE: write like an experienced human newspaper journalist in the style of a quality wire service (Associated Press, Reuters): polished, precise, natural and professional. Open with the most important fact. Use the active voice, concrete nouns and strong verbs. Mix short and longer sentences. Plain, grown-up words.\n- NEVER sound like an AI. Do not use: delve, tapestry, testament, beacon, realm, landscape, journey, game-changer, groundbreaking, revolutionize, unlock, empower, seamless, vibrant, bustling, in today's fast-paced world, it is worth noting, not just X but Y, whether you are X or Y. No exclamation marks, no rhetorical questions, no lists of three adjectives, no filler, no hype, no dashes for drama. Every sentence must say something real.\n- Check spelling, grammar and punctuation. Names are written with normal capitals, except KB PABLO QR.\n"+v+w},
fWj(d,e,f,g){return C.iqm(d,e,f,g)},
iqm(d,e,f,g){var w=0,v=B.j(x.b6),u,t,s,r,q,p,o,n,m
var $async$fWj=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:o=C.fSk(g)
n=A.a.i(f)
if(n.length===0)n="Choose the most interesting true story about NGMY from what you know, and write it. Vary it: it can be about the app, the Civic Registry, the Advisors, the studios, or the CEO."
t=C.hE0()
s=e==null?"There is no picture yet: write the caption as a short line about the story.":"A PICTURE IS ATTACHED. Look at it. Mention what is really visible in the caption and weave it into the story. Do not say who the people in it are unless the owner told you."
m=C
w=3
return B.b(C.agM('You are the editor-in-chief of a newspaper called "'+o+'". Write its front-page story in the voice of '+g.at+".\n"+t+'\n\nWHAT THE OWNER ASKED FOR: """'+n+'"""\n'+s+"\nRules:\n"+C.hA8(n)+'\nReply with JSON only, in exactly this shape: {"paper":"newspaper name","category":"ONE of COMMUNITY, TECHNOLOGY, BUSINESS, EDUCATION, WORLD NEWS, FEATURE","headline":"...","subhead":"...","byline":"By ...","caption":"one sentence about the picture","body":["paragraph 1","paragraph 2","paragraph 3","paragraph 4"],"pullQuote":"a short line from the story","sidebarTitle":"Did you know?","sidebarText":"two short sentences"}\n',e),$async$fWj)
case 3:r=m.hdp(i)
if(r==null)throw B.W(y.S)
q=new C.Ae(o,"NGMY NEWS","","","By the NGMY Newsroom","",A.Z,"","","").aES(r)
t=q.r
if(t.length===0)throw B.W("The AI did not write a story. Try again.")
s=n+" "+A.d.aO(t," ")
if(F.a3v(s)!=="sw"){p=B.ag("swahili|kiswahili",!1,!1,!1,!1)
s=p.b.test(s)}else s=!0
u=s&&F.a3v(A.d.aO(t," "))==="sw"?C.bFx(q):q
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fWj,v)},
bF1(d,e,f,g,h){return C.ilZ(d,e,f,g,h)},
ilZ(d,e,f,g,h){var w=0,v=B.j(x.gX),u,t,s,r,q,p,o,n,m,l,k,j
var $async$bF1=B.e(function(i,a0){if(i===1)return B.f(a0,v)
for(;;)switch(w){case 0:l=B.a([],x.s)
k=e.length
k=k>6?A.d.fO(e,k-6):e
t=k.length
s=0
for(;s<k.length;k.length===t||(0,B.J)(k),++s){r=k[s]
l.push(r.a+": "+r.b)}q=A.d.aO(l,"\n")
l=C.hE0()
k=A.X.aw(d.aj(),null)
t=q.length===0?"":"EARLIER IN THIS CONVERSATION:\n"+q+"\n"
j=C
w=3
return B.b(C.agM('You are the editor-in-chief of the newspaper "'+d.a+'", written in the voice of '+h.at+". The owner is talking to you about the page below. They may ask a question about NGMY or the page (just answer it), or ask you to change, add, shorten, rewrite or fix something (change ONLY that).\n"+l+"\n\nTHE PAGE NOW: "+k+"\n"+t+'\nTHE OWNER SAYS: """'+f+'"""\nRules:\n'+C.hA8(f)+'\n- Keep every part they did not mention exactly as it is. Keep the story about 330 to 400 words unless they ask for another length.\nReply with JSON only: {"message":"one or two friendly sentences: your answer, or what you changed","changes":{ ...only the fields you change, using the same names as the page... }}. For a pure question leave "changes" empty.\n',g),$async$bF1)
case 3:p=j.hdp(a0)
if(p==null)throw B.W(y.S)
o=p.h(0,"changes")
if(x.f.b(o)&&J.cJ(o)){n=d.aES(B.a2(o,x.N,x.z))
m=A.X.aw(n.aj(),null)!==A.X.aw(d.aj(),null)}else{n=d
m=!1}w=m&&F.a3v(A.d.aO(n.r," "))==="sw"?4:5
break
case 4:w=6
return B.b(C.bFx(n),$async$bF1)
case 6:n=a0
case 5:l=p.h(0,"message")
if(l==null)l=m?"Done.":"Okay."
u=new C.a9d(A.a.i(B.w(l)),n,m)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bF1,v)},
a9d:function a9d(d,e,f){this.a=d
this.b=e
this.c=f},
itM(d,e){return B.a6(d,!1).ce(B.ec(new C.h2D(e),!0,null,x.H))},
h2D:function h2D(d){this.a=d},
X7:function X7(d,e){this.c=d
this.a=e},
aG1:function aG1(d,e,f,g,h,i,j,k){var _=this
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
etN:function etN(d){this.a=d},
etM:function etM(){},
etO:function etO(d){this.a=d},
etL:function etL(d,e){this.a=d
this.b=e},
etP:function etP(){},
etp:function etp(d,e){this.a=d
this.b=e},
etl:function etl(d,e){this.a=d
this.b=e},
etw:function etw(d){this.a=d},
etx:function etx(d,e){this.a=d
this.b=e},
ety:function ety(d){this.a=d},
etr:function etr(d,e){this.a=d
this.b=e},
ets:function ets(d,e){this.a=d
this.b=e},
ett:function ett(d,e){this.a=d
this.b=e},
etu:function etu(d){this.a=d},
etv:function etv(d){this.a=d},
etq:function etq(d,e){this.a=d
this.b=e},
etn:function etn(d){this.a=d},
eto:function eto(d){this.a=d},
etE:function etE(d){this.a=d},
etF:function etF(d){this.a=d},
etD:function etD(d){this.a=d},
etG:function etG(d,e){this.a=d
this.b=e},
etC:function etC(d,e){this.a=d
this.b=e},
etH:function etH(d){this.a=d},
etB:function etB(d){this.a=d},
etI:function etI(d){this.a=d},
etA:function etA(d){this.a=d},
etJ:function etJ(d,e){this.a=d
this.b=e},
etz:function etz(d,e){this.a=d
this.b=e},
etK:function etK(d){this.a=d},
etm:function etm(d,e){this.a=d
this.b=e},
fRd(){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o
var $async$fRd=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if($.hxJ){w=1
break}r=new C.fRe()
t=4
q=x.s
w=7
return B.b(B.iB(B.a([r.$2("NgmyBlackletter",B.a(["UnifrakturCook-Bold.ttf"],q)),r.$2("NgmyOldStandard",B.a(["OldStandard-Regular.ttf","OldStandard-Bold.ttf","OldStandard-Italic.ttf"],q)),r.$2("NgmyAbril",B.a(["AbrilFatface-Regular.ttf"],q))],x.fG),x.H),$async$fRd)
case 7:$.hxJ=!0
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
return B.i($async$fRd,v)},
bFo(d){return A.Dt[B.mw(d)-1]+", "+A.oL[B.bM(d)-1]+" "+B.bV(d)+", "+B.bD(d)},
ie9(d){var w,v,u,t,s
for(w="",v=0;v<13;++v){u=D.dya[v]
t=u.a
s=u.b
while(d>=t){w+=s
d-=t}}return w},
hgx(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j={},i=x.s,h=B.a([],i)
for(w=0;w<d.length;++w){v=A.a.fw(d[w],B.ag("[ \\t]+",!0,!1,!1,!1))
A.d.v(h,new B.Y(v,new C.fPw(),B.U(v).k("Y<1>")))
if(w<d.length-1)h.push("\n\n")}u=B.a([],i)
j.a=0
for(i=f.length,t=0;t<f.length;f.length===i||(0,B.J)(f),++t){s={}
v=f[t]
s.a=s.b=null
r=v.a
s.b=r
q=v.b
s.a=q
v=j.a
p=h.length
if(v>=p||r<20||q<20){u.push("")
continue}o=new C.fPy(j,h)
n=new C.fPx(s,o,e)
m=p-v
for(l=0;l<m;){k=A.o.aq(l+m+1,2)
if(n.$1(k))l=k
else m=k-1}u.push(l===0?"":J.iZ(o.$1(l)))
j.a+=l}return u},
hd8(d,e){var w=new C.fre()
return A.d.cG(e,0,new C.frc(w))>=A.d.cG(d,0,new C.frd(w))},
huP(d){var w,v,u=new B.aG($.S().r,A.ai,null,null,B.a([],x.v))
u.E(new B.aZ(46,0))
w=d.a
u.E(new B.aq(w,0))
v=d.b
u.E(new B.aq(w,v-46))
u.E(new B.aq(w-46,v))
u.E(new B.aq(0,v))
u.E(new B.aq(0,46))
u.E(new B.bt())
return u},
Ae:function Ae(d,e,f,g,h,i,j,k,l,m){var _=this
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
cjs:function cjs(d){this.a=d},
cjq:function cjq(){},
cjr:function cjr(){},
tP:function tP(d,e){this.a=d
this.b=e},
Cb:function Cb(d,e){this.a=d
this.b=e},
lx:function lx(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var _=this
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
fRe:function fRe(){},
fPw:function fPw(){},
fPy:function fPy(d,e){this.a=d
this.b=e},
fPx:function fPx(d,e,f){this.a=d
this.b=e
this.c=f},
fre:function fre(){},
frf:function frf(){},
frc:function frc(d){this.a=d},
frd:function frd(d){this.a=d},
b39:function b39(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cjt:function cjt(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cju:function cju(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
cjv:function cjv(d){this.a=d},
beO:function beO(d){this.a=d},
beN:function beN(d,e){this.b=d
this.a=e},
bwR:function bwR(d){this.a=d},
bbf:function bbf(d,e){this.b=d
this.a=e},
buk:function buk(d,e){this.b=d
this.a=e},
hG5(d,e){return B.a6(d,!1).ce(B.ec(new C.h2G(e,null),!0,null,x.E))},
h2G:function h2G(d,e){this.a=d
this.b=e},
X8:function X8(d,e,f){this.c=d
this.d=e
this.a=f},
aG4:function aG4(){var _=this
_.d=null
_.e=0
_.f=1
_.w=_.r=0.5
_.x=1
_.y=!1
_.c=_.a=null},
euz:function euz(){},
euA:function euA(d){this.a=d},
euy:function euy(d,e){this.a=d
this.b=e},
eum:function eum(d){this.a=d},
eun:function eun(d){this.a=d},
eut:function eut(d){this.a=d},
euu:function euu(d,e){this.a=d
this.b=e},
eur:function eur(d){this.a=d},
eus:function eus(d,e,f){this.a=d
this.b=e
this.c=f},
euo:function euo(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
euv:function euv(d,e){this.a=d
this.b=e},
euq:function euq(d,e){this.a=d
this.b=e},
euw:function euw(d){this.a=d},
eup:function eup(d,e){this.a=d
this.b=e},
eux:function eux(d,e){this.a=d
this.b=e},
bel:function bel(d,e,f){this.b=d
this.c=e
this.a=f},
itS(d){return B.a6(d,!1).ce(B.ec(new C.h2W(),!0,null,x.I))},
bCO(d,e){var w,v,u,t,s,r,q=B.c0(20,0,!1,x.gR)
for(w=0;w<4;++w)for(v=w*5,u=v+4,t=0;t<5;++t){for(s=0,r=0;r<4;++r)s+=d[v+r]*e[r*5+t]
if(t===4)s+=d[u]
q[v+t]=s}return q},
heD(d,e,f,g){return B.a([d,0,0,0,e,0,d,0,0,f,0,0,d,0,g,0,0,0,1,0],x.x)},
h2W:function h2W(){},
a1f:function a1f(d){this.a=d},
oX:function oX(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
aHt:function aHt(d,e,f,g,h,i,j,k,l){var _=this
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
_.aH=_.aR=_.aL=_.aG=_.a0=_.bb=_.bn=_.y2=0
_.b8=null
_.b6=0.25
_.bf=null
_.bK=0.5
_.aP=1
_.c8=_.bH=_.bm=0
_.cP=_.c5=!1
_.c=_.a=null},
f3z:function f3z(d){this.a=d},
f2r:function f2r(d,e){this.a=d
this.b=e},
f2P:function f2P(d,e){this.a=d
this.b=e},
f2Z:function f2Z(d){this.a=d},
f2a:function f2a(d){this.a=d},
f2b:function f2b(d){this.a=d},
f28:function f28(d){this.a=d},
f29:function f29(d){this.a=d},
f2I:function f2I(d,e){this.a=d
this.b=e},
f2J:function f2J(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f2V:function f2V(d,e,f){this.a=d
this.b=e
this.c=f},
f2U:function f2U(d,e){this.a=d
this.b=e},
f2W:function f2W(d,e){this.a=d
this.b=e},
f2T:function f2T(d,e){this.a=d
this.b=e},
f2Y:function f2Y(d,e,f){this.a=d
this.b=e
this.c=f},
f2X:function f2X(d,e){this.a=d
this.b=e},
f20:function f20(d){this.a=d},
f21:function f21(d){this.a=d},
f22:function f22(d){this.a=d},
f2_:function f2_(){},
f23:function f23(d,e){this.a=d
this.b=e},
f1Z:function f1Z(d,e){this.a=d
this.b=e},
f25:function f25(){},
f24:function f24(d,e){this.a=d
this.b=e},
f1Y:function f1Y(d,e){this.a=d
this.b=e},
f1V:function f1V(d,e){this.a=d
this.b=e},
f26:function f26(d){this.a=d},
f1X:function f1X(d,e){this.a=d
this.b=e},
f27:function f27(d){this.a=d},
f1W:function f1W(d,e){this.a=d
this.b=e},
f3o:function f3o(d,e){this.a=d
this.b=e},
f3v:function f3v(d){this.a=d},
f3w:function f3w(d,e){this.a=d
this.b=e},
f3x:function f3x(){},
f3p:function f3p(d,e){this.a=d
this.b=e},
f3n:function f3n(d,e){this.a=d
this.b=e},
f3q:function f3q(d,e){this.a=d
this.b=e},
f3m:function f3m(d,e){this.a=d
this.b=e},
f3r:function f3r(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f3l:function f3l(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f3s:function f3s(d){this.a=d},
f3t:function f3t(d,e){this.a=d
this.b=e},
f3u:function f3u(d){this.a=d},
f3k:function f3k(d){this.a=d},
f37:function f37(d){this.a=d},
f38:function f38(d){this.a=d},
f36:function f36(d,e){this.a=d
this.b=e},
f31:function f31(d,e){this.a=d
this.b=e},
f39:function f39(d){this.a=d},
f3c:function f3c(d){this.a=d},
f35:function f35(d){this.a=d},
f3d:function f3d(d){this.a=d},
f3e:function f3e(d){this.a=d},
f3f:function f3f(d){this.a=d},
f3g:function f3g(d){this.a=d},
f34:function f34(d){this.a=d},
f3h:function f3h(d){this.a=d},
f33:function f33(d){this.a=d},
f3i:function f3i(d,e){this.a=d
this.b=e},
f32:function f32(d,e){this.a=d
this.b=e},
f3j:function f3j(d){this.a=d},
f3a:function f3a(d){this.a=d},
f3b:function f3b(d){this.a=d},
f2M:function f2M(d){this.a=d},
f2L:function f2L(d){this.a=d},
f2N:function f2N(d,e){this.a=d
this.b=e},
f2K:function f2K(d,e){this.a=d
this.b=e},
f2O:function f2O(d){this.a=d},
f2E:function f2E(d){this.a=d},
f2D:function f2D(d){this.a=d},
f2F:function f2F(d){this.a=d},
f2C:function f2C(d){this.a=d},
f2G:function f2G(d,e){this.a=d
this.b=e},
f2B:function f2B(d,e){this.a=d
this.b=e},
f2A:function f2A(d,e){this.a=d
this.b=e},
f2i:function f2i(d){this.a=d},
f2j:function f2j(d){this.a=d},
f2k:function f2k(d){this.a=d},
f2l:function f2l(d){this.a=d},
f2m:function f2m(d){this.a=d},
f2n:function f2n(d){this.a=d},
f2o:function f2o(d){this.a=d},
f2p:function f2p(d){this.a=d},
f2q:function f2q(d){this.a=d},
f1E:function f1E(d){this.a=d},
f1F:function f1F(d){this.a=d},
f1G:function f1G(d){this.a=d},
f1H:function f1H(d){this.a=d},
f1I:function f1I(d){this.a=d},
f1D:function f1D(d){this.a=d},
f1J:function f1J(d){this.a=d},
f1K:function f1K(d){this.a=d},
f2c:function f2c(d){this.a=d},
f2d:function f2d(d){this.a=d},
f2e:function f2e(d){this.a=d},
f2f:function f2f(d){this.a=d},
f2g:function f2g(d){this.a=d},
f1O:function f1O(d){this.a=d},
f1P:function f1P(d){this.a=d},
f1Q:function f1Q(d){this.a=d},
f1R:function f1R(d){this.a=d},
f1S:function f1S(d){this.a=d},
f1N:function f1N(d){this.a=d},
f1T:function f1T(d){this.a=d},
f1M:function f1M(d){this.a=d},
f1U:function f1U(d){this.a=d},
f1L:function f1L(d){this.a=d},
f2H:function f2H(d){this.a=d},
f2z:function f2z(d){this.a=d},
f2v:function f2v(d){this.a=d},
f2u:function f2u(d){this.a=d},
f2w:function f2w(d,e){this.a=d
this.b=e},
f2t:function f2t(d,e){this.a=d
this.b=e},
f2x:function f2x(d,e){this.a=d
this.b=e},
f2s:function f2s(d,e){this.a=d
this.b=e},
f2y:function f2y(d){this.a=d},
f2S:function f2S(d){this.a=d},
f2R:function f2R(d,e,f){this.a=d
this.b=e
this.c=f},
f2Q:function f2Q(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f30:function f30(d,e){this.a=d
this.b=e},
f3_:function f3_(d,e){this.a=d
this.b=e},
f2h:function f2h(d){this.a=d},
f3y:function f3y(d){this.a=d},
bhX:function bhX(d,e){this.b=d
this.a=e},
ioE(d){var w=A.a.i(d).length
if(w<=40)return 66
if(w<=80)return 54
if(w<=140)return 44
if(w<=220)return 36
return 30},
ioF(d,e){var w,v,u,t,s,r,q,p,o,n=B.ag("\\S+",!0,!1,!1,!1).kZ(0,d),m=B.C(n,B.a4(n).k("M.E"))
if(m.length===0)return d
w=new B.fd("")
for(v=0,u=0,n="";t=m.length,u<t;u=q){n=e.length
s=u<n?e[u]:0
r=u
for(;;){q=r+1
if(q<t)p=(q<n?e[q]:0)===s
else p=!1
if(!p)break
r=q}n=m[u].b.index
t=w.a+=A.a.aB(d,v,n)
p=m[r].b
p=A.a.aB(d,n,p.index+p[0].length)
n=B.ag("[*~^]",!0,!1,!1,!1)
o=B.aL(p,n,"")
switch(s){case 1:n="*"
break
case 2:n="^"
break
case-1:n="~"
break
default:n=""
break}t+=n
w.a=t
t+=o
w.a=t
n=t+n
w.a=n
t=m[r].b
v=t.index+t[0].length}n=w.a=n+A.a.b2(d,v)
return n.charCodeAt(0)==0?n:n},
bDo(){var w=$.bCv,v=$.Rz
$.Rz=v+1
return w+"_"+v},
ik(d,e,f,g,h,i,j){return C.er(A.bp,!1,4279310375,A.aH,"",i,24,A.bt,A.a8,"",h,C.bDo(),null,"","",0,!1,"",j,d,i,0,"",0,0,"",D.ct,D.fi,g,e,f)},
om(d,e,f,g){var w=f*9
return C.ik(D.f1,d-f/2,e-w/32,f,w/16,g,0)},
i7t(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=4279310375
switch(d.a){case 0:w=B.a([],x.u)
for(v=[0.12,0.26,0.4,0.54,0.68,0.82,0.94],u=v.length,t=e&16777215,s=t|855638016,r=0;r<u;++r){q=v[r]
p=$.bCv
o=$.Rz
$.Rz=o+1
w.push(new C.eQ(p+"_"+o,D.fi,0,q,1,0.0016,"",24,A.a8,A.bt,A.aH,k,A.bp,null,D.bm,s,s,0,0,!1,"",0,D.ct,0,"","","","","",!1,0))}for(v=[0.18,0.5,0.82],u=v.length,s=t|570425344,r=0;r<u;++r){n=v[r]
p=$.bCv
o=$.Rz
$.Rz=o+1
w.push(new C.eQ(p+"_"+o,D.fi,n,0,0.004,1,"",24,A.a8,A.bt,A.aH,k,A.bp,null,D.bm,s,s,0,0,!1,"",0,D.ct,0,"","","","","",!1,0))}w.push(C.om(0.88,0.1,0.5,f&16777215|855638016))
w.push(C.om(0.1,0.92,0.6,t|704643072))
return w
case 1:w=e&16777215
v=(w|2852126720)>>>0
u=f&16777215
t=(u|2852126720)>>>0
return B.a([C.ik(D.bm,0.08,0.08,0.5,0.003,v,0),C.ik(D.bm,0.58,0.08,0.004,0.06,v,0),C.ik(D.bm,0.58,0.14,0.34,0.003,v,0),C.ik(D.bm,0.92,0.14,0.004,0.08,(w|2281701376)>>>0,0),C.ik(D.bm,0.08,0.8,0.004,0.14,t,0),C.ik(D.bm,0.08,0.94,0.6,0.003,t,0),C.om(0.58,0.08,0.05,e),C.om(0.92,0.22,0.05,e),C.om(0.08,0.8,0.05,f),C.om(0.68,0.94,0.05,f),C.om(0.9,0.9,0.55,u|570425344)],x.u)
case 2:w=e&16777215
v=f&16777215
return B.a([C.ik(D.lt,0.62,0.04,0.34,0.2,w|855638016,0.2),C.ik(D.lt,0.02,0.74,0.42,0.24,v|771751936,-0.15),C.ik(D.lt,0.7,0.8,0.22,0.12,w|1140850688,0),C.ik(D.lt,0.05,0.05,0.16,0.09,v|1426063360,0)],x.u)
case 3:w=e&16777215
v=f&16777215
return B.a([C.om(0.5,0.5,1.5,w|335544320),C.om(0.5,0.5,1.15,w|402653184),C.om(0.5,0.5,0.8,v|436207616),C.om(0.95,0.05,0.4,v|855638016),C.om(0.05,0.97,0.5,w|704643072)],x.u)
case 4:w=e&16777215
v=f&16777215
return B.a([C.om(0.85,0.08,0.7,w|1140850688),C.om(0.1,0.35,0.5,v|855638016),C.om(0.9,0.62,0.55,v|771751936),C.om(0.15,0.95,0.8,w|939524096)],x.u)
case 5:w=e&16777215
v=f&16777215
return B.a([C.ik(D.bm,-0.1,0.7,1.2,0.06,w|671088640,-0.04),C.ik(D.bm,-0.1,0.78,1.2,0.07,v|872415232,0.035),C.ik(D.bm,-0.1,0.86,1.2,0.08,w|1073741824,-0.03),C.ik(D.bm,-0.1,0.94,1.2,0.1,v|1426063360,0.02),C.om(0.85,0.12,0.3,v|855638016)],x.u)
case 6:w=e&16777215
return B.a([C.om(0.5,0.2,0.65,(w|3422552064)>>>0),C.om(0.5,0.2,0.95,w|855638016),C.ik(D.bm,-0.05,0.84,1.1,0.2,2570782564,-0.02),C.ik(D.bm,-0.05,0.9,1.1,0.14,3139312459,0.02)],x.u)
case 7:w=e&16777215
return B.a([C.ik(D.kd,-0.1,0.78,0.7,0.2,w|1426063360,0),C.ik(D.kd,0.35,0.74,0.8,0.24,f&16777215|1711276032,0),C.ik(D.kd,0.15,0.86,0.6,0.14,1712265002,0),C.om(0.82,0.1,0.22,(w|2852126720)>>>0)],x.u)
case 8:w=B.a([],x.u)
for(m=0;m<16;++m){v=D.d7s[m]
u=A.o.F(m,3)===0
t=u?0.035:0.02
s=(m&1)===0?e:f
s=((u?255:170)<<24|s&16777215)>>>0
p=t*9
o=$.bCv
l=$.Rz
$.Rz=l+1
w.push(new C.eQ(o+"_"+l,D.fi,v.a-t/2,v.b-p/32,t,p/16,"",24,A.a8,A.bt,A.aH,k,A.bp,null,D.f1,s,s,0,0,!1,"",0,D.ct,0,"","","","","",!1,0))}w.push(C.om(0.85,0.12,0.35,f&16777215|570425344))
return w
case 9:w=e&16777215
v=f&16777215|570425344
return B.a([C.ik(D.kd,0.35,-0.1,0.3,0.62,w|855638016,0),C.ik(D.kd,0.05,-0.1,0.3,0.55,v,-0.5),C.ik(D.kd,0.65,-0.1,0.3,0.55,v,0.5),C.om(0.5,0.04,0.45,w|1711276032)],x.u)
case 10:w=(f&16777215|2281701376)>>>0
return B.a([C.ik(D.bm,0.06,0.04,0.88,0.002,e,0),C.ik(D.bm,0.06,0.96,0.88,0.002,e,0),C.ik(D.bm,0.06,0.04,0.004,0.92,e,0),C.ik(D.bm,0.936,0.04,0.004,0.92,e,0),C.ik(D.bm,0.09,0.07,0.82,0.001,w,0),C.ik(D.bm,0.09,0.93,0.82,0.001,w,0)],x.u)
case 11:w=e&16777215
return B.a([C.ik(D.ke,-0.1,0.05,0.7,0.12,w|855638016,-0.1),C.ik(D.ke,0.45,0.78,0.7,0.1,f&16777215|1073741824,-0.1),C.ik(D.ke,-0.1,0.9,0.6,0.06,w|1426063360,-0.1)],x.u)
case 12:w=f&16777215
v=e&16777215
return B.a([C.ik(D.bm,0,0,0.3,0.09,w|1140850688,0),C.ik(D.bm,0.7,0.9,0.3,0.1,v|1426063360,0),C.ik(D.bm,0.82,0.04,0.12,0.07,w|771751936,0),C.ik(D.bm,0.04,0.82,0.18,0.08,v|855638016,0)],x.u)
case 13:w=e&16777215
v=w|1140850688
u=f&16777215|1140850688
return B.a([C.ik(D.f1,0.62,0.02,0.5,0.16,v,0.6),C.ik(D.f1,0.78,0.12,0.4,0.12,u,0.9),C.ik(D.f1,-0.12,0.8,0.5,0.16,u,-0.6),C.ik(D.f1,-0.05,0.9,0.4,0.12,v,-0.9),C.om(0.9,0.9,0.3,w|855638016)],x.u)
case 14:w=f&16777215|1711276032
return B.a([C.ik(D.bm,0.09,0.12,0.16,0.006,e,0),C.ik(D.bm,0.05,0.03,0.9,0.001,w,0),C.ik(D.bm,0.05,0.97,0.9,0.001,w,0)],x.u)}},
il1(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3){var w,v,u,t,s,r,q,p,o,n=4279310375,m=4280640491,l=4280172719
$.bCv=j
$.Rz=0
w=A.a.i(a6)
if(w.length===0)w=d.y
v=A.a.i(f)
u=b1==null?d.x:b1
t=new C.fMV()
s=b3?0:d.e
r=b3?0:d.f
q=B.a([],x.u)
if(g!=null&&g.length!==0)q.push(C.er(A.bp,!1,n,A.aH,"ngmy_quote_background",m,24,A.bt,A.a8,"",1,C.bDo(),g,"","",0,!1,"",0,D.bm,l,2,"",0,0,"",D.ct,D.lS,1,0,0))
if(a9)A.d.v(q,C.i7t(d.d,d.r,d.w))
if(a7)q.push(t.$9$align$weight("\u201c",0.08,A.i.D(a8-0.13,0,1),0.84,0.1,200,d.r,e,A.u))
p=B.ag("[*~^]",!0,!1,!1,!1)
p=C.ioE(B.aL(w,p,""))
o=A.a.q(w,B.ag("[*^]",!0,!1,!1,!1))?0.85:1
q.push(new C.fMU(a8,h,k,e,b2,i).$3(w,p*b0*o,u))
if(v.length!==0)q.push(t.$10$align$style$weight("\u2014 "+v,0.09,A.i.D(a8+0.39,0,0.9),0.82,0.05,30,(u&16777215|3707764736)>>>0,e,A.cK,A.a8))
p=u&16777215
q.push(t.$8$weight("NGMY",0.3,0.925,0.4,0.028,22,(p|3003121664)>>>0,A.u))
q.push(t.$8$weight("New Global Movement for Youth",0.1,0.96,0.8,0.025,14,(p|2566914048)>>>0,A.a8))
if(a0!=null&&a0.length!==0)q.push(C.er(A.bp,!1,n,A.aH,"ngmy_quote_logo",m,24,A.bt,A.a8,a1,a3*9/16,C.bDo(),a0,"","",0,!1,a2,0,D.bm,l,2,"",0,0,"",D.ct,D.lS,a3,a4,a5))
return C.t_(s,r,0,0,q,j+"_slide",D.r0,"","","",D.ds)},
rZ:function rZ(d,e){this.a=d
this.b=e},
mu:function mu(d,e,f,g,h,i,j,k,l,m){var _=this
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
fMV:function fMV(){},
fMU:function fMU(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
hY5(d){var w,v,u,t,s
if(!x.f.b(d))return null
w=J.a7(d)
v=B.bh(B.w(w.h(d,"at")))
u=w.h(d,"outline")
t=B.w(u==null?"":u)
if(v==null||t.length===0)return null
u=x.j
if(u.b(w.h(d,"extras"))){u=J.b8(u.a(w.h(d,"extras")),new C.ckY(),x.N)
s=B.C(u,u.$ti.k("ak.E"))}else s=B.a([],x.s)
u=v.bT()
w=w.h(d,"request")
return new C.Af(u,t,s,B.w(w==null?"":w))},
fUG(){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$fUG=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if($.hy5){w=1
break}$.hy5=!0
t=4
w=7
return B.b(B.aA(),$async$fUG)
case 7:r=e
q=B.aV(J.t(r.a,"ngmy_slides_ai_history_v1"))
if(q==null||q.length===0){w=1
break}p=A.X.aQ(0,q,null)
if(!x.f.b(p)){w=1
break}for(k=J.i1(p),k=k.gae(k),j=x.j,i=x.o;k.C();){o=k.gR(k)
n=B.a([],i)
if(j.b(o.b))for(h=J.aT(j.a(o.b));h.C();){m=h.gR(h)
l=C.hY5(m)
if(l!=null)J.c7(n,l)}$.Dq.c3(0,B.w(o.a),new C.fUH(n))}C.heh()
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
return B.i($async$fUG,v)},
heh(){var w,v=new B.V(Date.now(),0,!1).bR(-12e8)
for(w=new B.dq($.Dq,$.Dq.r,$.Dq.e);w.C();)J.nT(w.d,new C.fzk(v))
$.Dq.br($.Dq,new C.fzl())},
aQb(){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$aQb=B.e(function(d,a0){if(d===1){t.push(a0)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.aA(),$async$aQb)
case 6:s=a0
m=x.N
l=x.z
r=B.T(m,l)
for(k=new B.cb($.Dq,B.a4($.Dq).k("cb<1,2>")).gae(0),j=x.d;k.C();){i=k.d
i.toString
q=i
i=q.a
p=B.a([],j)
for(h=J.aT(q.b);h.C();){o=h.gR(h)
g=o
J.c7(p,B.I(["at",g.a.aa().ag(),"outline",g.b,"extras",g.c,"request",g.d],m,l))}J.aK(r,i,p)}n=r
w=7
return B.b(s.aC("String","ngmy_slides_ai_history_v1",A.X.aw(n,null)),$async$aQb)
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
return B.i($async$aQb,v)},
iph(d,e,f,g){var w,v,u
if(d.length===0||A.a.i(f).length===0)return
C.heh()
w=$.Dq.c3(0,d,new C.fUJ())
v=Date.now()
u=B.C(e,B.a4(e).k("ch.E"))
J.n2(w,0,new C.Af(new B.V(v,0,!1),f,u,g))
C.aQb()},
ipe(d){var w,v=$.Dq.h(0,d)
if(v==null||J.cs(v))return
w=J.cC(v)
w.cH(v,0)
if(w.gau(v))$.Dq.W(0,d)
C.aQb()},
Af:function Af(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ckY:function ckY(){},
fUH:function fUH(d){this.a=d},
fzk:function fzk(d){this.a=d},
fzl:function fzl(){},
fUJ:function fUJ(){},
ipj(d){return A.d.dP(D.x_,new C.fUM(d),new C.fUN())},
hY3(d){var w
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
hY2(d){var w
switch(d.a){case 0:w=D.apI
break
case 1:w=A.zn
break
case 2:w=A.PO
break
case 3:w=I.apn
break
case 4:w=A.aqc
break
case 5:w=A.ml
break
default:w=null}return w},
iaK(d){var w,v,u,t=A.a.i(d).toLowerCase()
if(t.length===0)return null
for(w=0;w<109;++w){v=D.RS[w]
if(v.toLowerCase()===t)return v}for(w=0;w<109;++w){v=D.RS[w]
if(!B.cS(v.toLowerCase(),t,0))u=B.cS(t,v.toLowerCase(),0)
else u=!0
if(u)return v}return null},
hY4(d){var w,v,u,t,s,r,q,p,o=B.a([],x.ez)
for(w=d.c,v=w.length,u=x.N,t=x.C,s=0;s<w.length;w.length===v||(0,B.J)(w),++s){r=w[s]
q=B.T(u,t)
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
o.push(q)}return A.X.aw(B.I(["title",d.a,"style",d.b,"logo_frame",d.d,"logo_ring",d.e,"photo_frame",d.f,"photo_ring",d.r,"slides",o],u,t),null)},
ipf(d,e,f,g,h){var w=new B.N(D.x_,new C.fUF(),x.eC).aO(0,", "),v=""+d,u=C.hDT(h),t=F.fOj(h),s=C.hzN(g),r=e.q(0,D.Jo)?'- New slides get an "emoji".\n':"",q=e.q(0,D.Jp)?'- New slides get an "icon3d" from: '+A.d.aO(D.RS,", ")+".\n":"",p=e.q(0,D.E2)?'- New content slides get an "image_query" (2-3 English words).\n':""
return"You edit an existing presentation. Here it is as JSON:\n"+f+"\n\nThe presenter is looking at slide "+v+'.\n\nWHAT THEY WANT CHANGED (may be informal):\n"""'+h+'"""\n\nRules:\n- Do exactly what they ask: add, remove, move, shorten, lengthen or rewrite slides, change the tone, the language or the style ('+w+'). "This slide" / "here" means slide '+v+". New slides go where they say (or right after slide "+v+').\n- Keep every slide they did not ask about exactly as it is.\n- Same limits as before: titles max 7 words, 3 to 5 bullets of max 12 words, never invent prices, dates or statistics.\n- LANGUAGE: keep the presentation\'s current language unless they ask for another one; if they do, translate EVERY slide. JSON keys and the "kind", "style", "icon3d" and "image_query" values stay in English.\n- TRANSLATING OR REWORDING: change only the words. Keep "style", "kind", "emoji", "icon3d", "image_query", "picture" and the frame/ring values exactly as they are, with the same number of slides and bullets.\n- VOICE: write the way a real, friendly person talks and writes to someone they respect. Short plain sentences. Everyday words that people really use today. No corporate or robotic phrasing ("leverage", "synergy", "empower the ecosystem", "in today\'s dynamic landscape"), no made-up or rare words, no stacked jargon, no lecture tone. Explain the Civic registry, the AI, and any other topic the way you would explain it to a neighbour. If the language is Swahili, use the Swahili people speak and write every day in Kenya and Tanzania: real common words, natural word order, and never an English word forced into Swahili grammar or an invented Swahili word. Check that each word is one an ordinary speaker would understand.\n'+u+"\n"+t+'\n- Keep "logo_frame", "logo_ring", "photo_frame" and "photo_ring" unless they ask to change how the logo or pictures look.\n- PICTURE LOOK: "logo_frame" and "photo_frame" are one of: circle, rounded, triangle, hexagon, diamond, arch, or "" (as is). "logo_ring" and "photo_ring" are one of: gold, platinum, glow, rainbow, double, neon, framed, rosegold, jewels, aurora, or "" (none). Follow what the request says (e.g. "my picture in a circle with a gold ring"); if it says nothing, choose what suits the look (luxury \u2192 gold, neon/night \u2192 neon, clean \u2192 rounded with no ring).\n- BIO LINK: if they ask to put their bio link / link page / socials / "my links" in the presentation, add ONE slide with kind "bio" (title like "Connect with me", a one-line inviting subtitle) \u2014 usually just before the closing slide, or where they say. Their real Bio page (with clickable links) is shown on a phone on that slide.\n'+s+"\n"+r+q+p+'- Reply with the WHOLE presentation as JSON only, no markdown, same shape:\n{"title":"...","style":"...","logo_frame":"","logo_ring":"","photo_frame":"","photo_ring":"","slides":[{"kind":"...","title":"...","subtitle":"...","bullets":[],"notes":"...","emoji":"","icon3d":"","image_query":""}]}\n'},
ipg(d,e,f,g,h,i){var w,v,u,t,s='- "emoji": ONE emoji that fits the slide (e.g. \ud83c\udf89 \ud83d\ude80 \ud83c\udf3f \ud83d\udca1).\n',r=f?"- A document is attached (read it all). Rewrite its content as the slides in the same language: keep its facts, names, numbers, dates and the order of its sections, and never invent facts it does not contain.\n":"",q=new B.N(D.x_,new C.fUI(),x.eC).aO(0,", "),p=new B.fd("")
if(e.q(0,D.Jo)){p.a=s
w=s}else w=""
if(e.q(0,D.Jp))w=p.a=w+('- "icon3d": ONE name copied exactly from this list that fits the slide: '+A.d.aO(D.RS,", ")+".\n")
if(e.q(0,D.E2))p.a=w+'- "image_query": 2-3 simple English words for a real photo that fits the slide (e.g. "city skyline", "students classroom").\n'
w=C.hDT(d)
v=F.fOj(d)
u=C.hzN(g)
t=i==="auto"?"pick the best of: "+q+" (match the mood they describe: nature, vibe, celebration, colorful, professional...)":'use "'+i+'"'
return'You design presentation slides. Write a presentation from the user\'s request.\n\nUSER REQUEST (spoken, may be informal):\n"""'+d+'"""\n\nRules:\n'+r+"- Exactly "+h+' slides.\n- Slide 1 has kind "title". The last slide has kind "closing" (thank-you / call to action).\n- Middle slides mostly kind "bullets" (3 to 5 short bullets, max 12 words each). You may use one "section" divider and one "quote" slide when it fits.\n- Titles are short and punchy (max 7 words). Use the user\'s own names, facts and details; never invent prices, dates or statistics they did not give.\n- "notes": 1-2 sentences the presenter can say.\n- LANGUAGE: if the request names a language (e.g. "in Swahili", "en fran\xe7ais", "en espa\xf1ol", "in Arabic"), write EVERY title, subtitle, bullet and note in that language, with correct spelling and accents. If no language is named, write in the language the request itself is written in. Keep the JSON keys and the "kind", "style", "icon3d" and "image_query" values in English.\n- VOICE: write the way a real, friendly person talks and writes to someone they respect. Short plain sentences. Everyday words that people really use today. No corporate or robotic phrasing ("leverage", "synergy", "empower the ecosystem", "in today\'s dynamic landscape"), no made-up or rare words, no stacked jargon, no lecture tone. Explain the Civic registry, the AI, and any other topic the way you would explain it to a neighbour. If the language is Swahili, use the Swahili people speak and write every day in Kenya and Tanzania: real common words, natural word order, and never an English word forced into Swahili grammar or an invented Swahili word. Check that each word is one an ordinary speaker would understand.\n'+w+"\n"+v+'\n- PICTURE LOOK: "logo_frame" and "photo_frame" are one of: circle, rounded, triangle, hexagon, diamond, arch, or "" (as is). "logo_ring" and "photo_ring" are one of: gold, platinum, glow, rainbow, double, neon, framed, rosegold, jewels, aurora, or "" (none). Follow what the request says (e.g. "my picture in a circle with a gold ring"); if it says nothing, choose what suits the look (luxury \u2192 gold, neon/night \u2192 neon, clean \u2192 rounded with no ring).\n- BIO LINK: if they ask to put their bio link / link page / socials / "my links" in the presentation, add ONE slide with kind "bio" (title like "Connect with me", a one-line inviting subtitle) \u2014 usually just before the closing slide, or where they say. Their real Bio page (with clickable links) is shown on a phone on that slide.\n'+u+'\n- "style": '+t+".\n"+p.u(0)+'- Reply with JSON only, no markdown, in this shape:\n{"title":"...","style":"...","logo_frame":"","logo_ring":"","photo_frame":"","photo_ring":"","slides":[{"kind":"title","title":"...","subtitle":"...","bullets":[],"notes":"...","emoji":"","icon3d":"","image_query":""}]}\n'},
ait(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=null,a2="bullets",a3=A.a.i(a6),a4=J.DP(a3,"{"),a5=J.h6h(a3,"}")
if(a4<0||a5<=a4)return a1
a3=J.Mi(a3,a4,a5+1)
try{w=A.X.aQ(0,a3,a1)
q=x.f
if(!q.b(w))return a1
v=J.t(w,"slides")
p=x.j
if(!p.b(v)||J.cs(v))return a1
u=B.a([],x.aC)
for(o=J.aT(v),n=x.s,m=x.N;o.C();){t=o.gR(o)
if(!q.b(t))continue
if(p.b(J.t(t,a2))){l=J.b8(p.a(J.t(t,a2)),new C.fSD(),m).bY(0,new C.fSE())
k=B.C(l,l.$ti.k("M.E"))}else k=B.a([],n)
s=k
l=J.t(t,"kind")
l=A.a.i(B.w(l==null?a2:l))
j=J.t(t,"title")
j=A.a.i(B.w(j==null?"":j))
i=J.t(t,"subtitle")
i=A.a.i(B.w(i==null?"":i))
h=J.t(t,"notes")
h=A.a.i(B.w(h==null?"":h))
g=J.t(t,"emoji")
g=A.a.i(B.w(g==null?"":g))
f=J.t(t,"icon3d")
f=C.iaK(B.w(f==null?"":f))
if(f==null)f=""
e=J.t(t,"image_query")
if(e==null)e=J.t(t,"imageQuery")
e=A.a.i(B.w(e==null?"":e))
d=J.t(t,"picture")
d=B.ca(B.w(d==null?0:d),a1)
if(d==null)d=0
J.c7(u,new C.a9l(l.toLowerCase(),j,i,s,h,g,f,e,d))}if(J.ad(u)===0)return a1
q=J.t(w,"style")
r=A.a.i(B.w(q==null?a7:q)).toLowerCase()
q=J.t(w,"title")
q=A.a.i(B.w(q==null?J.fs(u).b:q))
p=A.d.aV(D.x_,new C.fSF(r))?r:a7
o=C.fyA(J.t(w,"logo_frame"),D.Dp)
n=C.fyA(J.t(w,"logo_ring"),D.Dj)
m=C.fyA(J.t(w,"photo_frame"),D.Dp)
l=C.fyA(J.t(w,"photo_ring"),D.Dj)
return new C.asY(q,p,u,o,n,m,l)}catch(a0){return a1}},
a30(d,e){return(A.o.D(e,0,255)<<24|d&16777215)>>>0},
hD_(f9,g0,g1,g2,g3,g4,g5,g6,g7,g8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4=null,e5="title",e6="orb1",e7="drift",e8="orb2",e9="logo",f0="hero",f1="photo",f2="float3d",f3="bar",f4="pulse",f5="sub",f6=g2.q(0,D.E3),f7=f6?C.i3R():e4,f8=f7==null
if(f8)w=e4
else{v=new B.e2()
v.cY(f7.w+1)
u=f7.a
t=B.bq(u.b,!0,x.dL)
A.d.e0(t,v)
s=u.c
s=new C.oa("luxe",u.a,A.ml,t,u.e,u.f,B.a([s,u.d,s],x.t),D.ds)
w=s}if(w==null)w=C.ipj(f9.b)
r=g2.q(0,D.a8e)||f6
q=g2.q(0,D.Jo)
p=g2.q(0,D.TP)
o=new C.fMZ()
n=B.a([],x.g)
m=new C.fN1(o,w,r)
l=new C.fN0(o,r)
k=new C.fN_(o,r)
j=(g3==null?"":g3).length!==0
u=f9.c
for(s=w.w,f8=!f8,i=g7==null,h=g6==null,g=f9.f,f=f9.r,e=g5==null,d=g4==null,a0=f9.d,a1=f9.e,a2=w.f,a3=w.d,a4=w.r,a5=x.u,a6=J.a7(g0),a7=!A.d.aV(u,new C.fMY(g8)),a8=g1==null,a9=x.s,b0=0,b1=0;b1<u.length;b1=b6){b2=u[b1]
b3=a3[A.o.F(b1,a3.length)]
b4=A.o.F(b1,3)
b5=a4[b4]
b6=b1+1
b7=a4[b6%3]
b8=A.o.F(b1,5)
b9=D.d97[b8]
c0=D.d7Z[b8]
c1=B.a([],a5)
c2=a6.h(g0,b1)
c3=c2==null
c4=c3?e4:c2.a
c5=c3?e4:c2.b
c3=b2.x
c6=c3>0&&c3<=g8.length
if(c6)c5=g8[c3-1]
else if(g8.length!==0&&a7&&!D.fbX.q(0,b2.a)){c7=b0+1
c5=g8[A.o.F(b0,g8.length)]
b0=c7}c8=q?b2.f:""
c3=c5==null
c9=c3?c4:c5
if(c6)d0=c5
else d0=c4==null?c5:c4
d1=!c6&&c4!=null
if(p)c1.push(l.$7$key(D.f1,0.62-b8*0.36,-0.55+b4*0.18,1.15,2,(A.o.D(31,0,255)<<24|b5&16777215)>>>0,"pano"))
A:{d2=b2.a
if("title"===d2){c1.push(l.$8$fx$key(D.f1,0.7,-0.25,0.46,0.82,(A.o.D(51,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.f1,-0.08,0.68,0.24,0.43,(A.o.D(46,0,255)<<24|b7&16777215)>>>0,e7,e8))
if(j){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.41,0.04,0.18,0.27,D.n9,450,e9))}else if(d0!=null){b4=d1?f0:f1
c1.push(k.$9$anim$delay$fx$key(d0,0.42,0.04,0.16,0.28,c0,500,d1?f2:"",b4))}else if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,0.4,0.04,0.2,0.24,64,A.K,D.r1,500,f2,f0))
c1.push(l.$8$fx$key(D.bm,0.4,0.66,0.2,0.012,b5,f4,f3))
c1.push(m.$10$align$anim$key$weight(b2.b,0.08,0.33,0.84,0.3,54,A.K,b9,e5,A.u))
c1.push(m.$10$align$color$delay$key(b2.c,0.12,0.7,0.76,0.14,24,A.K,a2,300,f5))
d3=D.TM
break A}if("section"===d2){c1.push(l.$8$fx$key(D.f1,0.64,0.46,0.42,0.75,(A.o.D(42,0,255)<<24|b5&16777215)>>>0,e7,e6))
if(d0!=null){b4=!c3&&!d1?f1:f0
c1.push(k.$8$anim$fx$key(d0,0.7,0.2,0.24,0.44,c0,d1?f2:"",b4))}else c1.push(l.$9$fx$key$rotation(D.lt,0.78,0.1,0.18,0.32,(A.o.D(64,0,255)<<24|b7&16777215)>>>0,e7,e8,0.3))
c1.push(l.$8$fx$key(D.bm,0.08,0.6,0.14,0.014,b5,f4,f3))
b4=b2.b
c1.push(m.$9$anim$key$weight(c8.length===0?b4:c8+"  "+b4,0.08,0.34,0.62,0.24,46,b9,e5,A.u))
c1.push(m.$9$color$delay$key(b2.c,0.08,0.64,0.6,0.14,22,a2,250,f5))
d3=D.E0
break A}if("quote"===d2){b4=b5&16777215
c1.push(l.$8$fx$key(D.f1,-0.12,-0.2,0.36,0.64,(A.o.D(36,0,255)<<24|b4)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.f1,0.82,0.66,0.26,0.46,(A.o.D(38,0,255)<<24|b7&16777215)>>>0,e7,e8))
c1.push(m.$11$anim$color$fx$key$weight("\u201c",0.06,0.02,0.2,0.36,140,D.n9,(A.o.D(204,0,255)<<24|b4)>>>0,f4,"quote",A.u))
c1.push(m.$11$align$anim$key$style$weight(b2.b,0.12,0.3,0.76,0.34,36,A.K,b9,e5,A.cK,A.U))
b4=b2.c
c1.push(m.$10$align$color$delay$key(b4.length===0?"":"\u2014 "+b4,0.12,0.68,0.76,0.12,22,A.K,a2,300,f5))
if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,j?0.72:0.82,0.06,0.12,0.2,52,A.K,D.r1,500,f2,f0))
d3=D.n8
break A}if("bio"===d2)b4=(a8?"":g1).length!==0
else b4=!1
if(b4){c1.push(l.$8$fx$key(D.f1,0.58,0.04,0.44,0.8,(A.o.D(42,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.bm,0.08,0.62,0.14,0.014,b5,f4,f3))
b4=b2.b
c1.push(m.$9$anim$key$weight(c8.length===0?b4:c8+"  "+b4,0.07,0.3,0.52,0.28,46,b9,e5,A.u))
c1.push(m.$9$color$delay$key(b2.c,0.07,0.66,0.5,0.16,22,a2,250,f5))
b4=o.$0()
g1.toString
b8=r?D.vm:D.ct
c1.push(new C.eQ(b4,D.a8c,0.64,0.05,0.27,0.9,g1,24,A.a8,A.bt,A.aH,4279310375,A.bp,e4,D.bm,4280640491,4280172719,2,0,!1,"",0,b8,r?350:0,"bio","","","","",!1,0))
d3=D.n8
break A}if("closing"===d2){c1.push(l.$8$fx$key(D.f1,-0.15,-0.3,0.5,0.9,(A.o.D(46,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.f1,0.78,0.62,0.3,0.54,(A.o.D(51,0,255)<<24|b7&16777215)>>>0,e7,e8))
if(j){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.41,0.05,0.18,0.27,D.n9,400,e9))}else if(d0!=null){b4=d1?f0:f1
c1.push(k.$9$anim$delay$fx$key(d0,0.42,0.05,0.16,0.28,c0,450,d1?f2:"",b4))}else if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,0.4,0.05,0.2,0.24,64,A.K,D.r1,450,f2,f0))
c1.push(l.$8$fx$key(D.bm,0.42,0.61,0.16,0.012,b5,f4,f3))
c1.push(m.$10$align$anim$key$weight(b2.b,0.1,0.34,0.8,0.26,52,A.K,b9,e5,A.u))
c1.push(m.$10$align$color$delay$key(b2.c,0.14,0.65,0.72,0.16,24,A.K,a2,300,f5))
d3=D.TM
break A}d4=b2.d
if(d4.length===0&&b2.c.length!==0)d4=B.a([b2.c],a9)
d5=c9!=null
d6=(b1&1)===1&&d5
d7=d6?0.4:0.07
b4=d6?-0.1:0.8
c1.push(l.$8$fx$key(D.f1,b4,0.52,0.3,0.54,(A.o.D(36,0,255)<<24|b7&16777215)>>>0,e7,e8))
b4=d6?0.86:-0.12
c1.push(l.$8$fx$key(D.f1,b4,-0.18,0.26,0.46,(A.o.D(30,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$7$key(D.bm,d6?0.988:0,0,0.012,1,b5,"rail"))
b4=b2.b
b4=c8.length===0?b4:c8+"  "+b4
c1.push(m.$9$anim$key$weight(b4,d7,0.08,d5?0.53:0.86,0.16,38,b9,e5,A.u))
c1.push(l.$8$fx$key(D.bm,d7,0.25,0.12,0.012,b5,f4,f3))
b4=A.d.aO(d4,"\n")
b8=d5?0.53:0.7
c1.push(m.$11$anim$bullets$color$delay$key(b4,d7,0.31,b8,0.6,d4.length>4?21:24,D.Jm,!0,a2,250,f5))
if(d5){d8=!c3
d9=d8?0.29:0.24
if(d6)e0=0.06
else e0=d8?0.67:0.7
b4=d8?0.22:0.26
b8=d8?0.56:0.44
c3=d8?f1:f0
c1.push(k.$9$anim$delay$fx$key(c9,e0,b4,d9,b8,c0,400,d8?"":f2,c3))}d3=D.n8}if(j&&d2!=="title"&&d2!=="closing"){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.885,0.035,0.085,0.13,D.ds,200,e9))}for(b4=c1.length,e1=0;e1<b4;++e1){e2=c1[e1]
b8=e2.fx
if(b8==="logo"){e2.go=d?a0:g4
e2.id=e?a1:g5}else if(b8==="photo"){e2.go=h?g:g6
e2.id=i?f:g7}}if(f8)C.i5v(c1,b1,o,f7)
b4=o.$0()
if(f8){b8=f7.r
b8=b8[A.o.F(b1,b8.length)]}else b8=r?D.dAE[A.o.F(b1,6)]:s
n.push(new C.m1(b4,b2.b,b2.e,d3,b3.a,b3.b,b8,0,"",0,c1))}e3=A.a.i(f9.a)
if(e3.length===0)e3="AI Presentation"
f8=o.$0()
return C.Cr(e4,e4,e4,e4,D.E_,5,!1,e4,e4,e4,e4,e4,f8,e4,!1,e4,e3.length>60?A.a.aB(e3,0,60):e3,e4,e4,n,"office_blue",e4,!1,e4)},
fPm(d,e){var w=0,v=B.j(x.gI),u,t,s,r,q,p,o,n,m
var $async$fPm=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:o=e.q(0,D.E2)
n=e.q(0,D.Jp)
if(!o&&!n){u=D.a79
w=1
break}t=B.a([],x.d5)
for(s=d.c,r=0;r<s.length;++r)t.push(new C.fPp(o,s[r],n,$.i9r,r).$0())
s=B.T(x.S,x.aH)
m=J
w=3
return B.b(B.iB(t,x.e),$async$fPm)
case 3:q=m.aT(g)
case 4:if(!q.C()){w=5
break}p=q.gR(q)
s.n(0,p.a,p.b)
w=4
break
case 5:u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fPm,v)},
fOm(d,e,f,g,h,i,j,k,l){var w=0,v=B.j(x.I),u,t,s
var $async$fOm=B.e(function(m,n){if(m===1)return B.f(n,v)
for(;;)switch(w){case 0:h.$1("Writing your "+j+" slides\u2026")
t=i.length
t=C.ipg(d,e,k.length!==0,t,j,l)
s=C
w=3
return B.b(C.aPu(t,"The AI could not write the slides. Try describing it again.",l==="auto"?"colorful":l,k),$async$fOm)
case 3:u=s.aPQ(n,e,h,f,g,i)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fOm,v)},
bF2(d,e,f,g,h,i,j,k){var w=0,v=B.j(x.I),u,t,s,r,q,p,o
var $async$bF2=B.e(function(l,m){if(l===1)return B.f(m,v)
for(;;)switch(w){case 0:if(e.length!==0){t=B.aR(x.N)
for(s=B.dZ(f,f.r,B.a4(f).c),r=s.$ti.c;s.C();){q=s.d
t.J(0,(q==null?r.a(q):q).b)}C.iph(e,t,i,k)}if(h!=null)h.$1("Making your changes\u2026")
p=C.ait(i,"colorful")
t=C.ipf(d,f,i,j.length,k)
s=p==null?null:p.b
o=C
w=3
return B.b(C.aPu(t,"The AI could not make that change. Try saying it another way.",s==null?"colorful":s,A.i4),$async$bF2)
case 3:u=o.aPQ(m,f,h,g,D.eez,j)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bF2,v)},
aPu(d,e,f,g){var w=0,v=B.j(x.dO),u,t,s,r,q,p,o,n
var $async$aPu=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:w=3
return B.b(B.vW(null,""),$async$aPu)
case 3:n=i
if(A.a.i(n).length===0)throw B.W("AI is not set up yet. AI is not available right now. Please try again later.")
t=B.nm(n)
s=null,r=0
case 4:if(!(r<2)){w=6
break}w=7
return B.b(B.rh(t,d,g,"slides",null),$async$aPu)
case 7:q=i
p=q.b
if(p!=null){o=C.ait(p,f)
if(o!=null){u=o
w=1
break}}else s=q.a
case 5:++r
w=4
break
case 6:throw B.W(s!=null&&B.LZ(s)?"No internet connection \u2014 try again when you are online.":e)
case 1:return B.h(u,v)}})
return B.i($async$aPu,v)},
aPQ(d,e,f,g,h,i){var w=0,v=B.j(x.I),u,t,s,r,q,p,o,n,m,l
var $async$aPQ=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:w=e.q(0,D.E2)||e.q(0,D.Jp)?3:5
break
case 3:if(f!=null)f.$1("Adding pictures and 3D art\u2026")
if(i.length===0)t=e
else{t=B.d2(e,x.Q)
t.W(0,D.E2)}w=6
return B.b(C.fPm(d,t),$async$aPQ)
case 6:s=k
w=4
break
case 5:s=D.a79
case 4:t=d.c
w=A.d.aV(t,new C.fr8())?7:9
break
case 7:r=$.hEM
r=r==null?null:r.$0()
w=10
return B.b(x.gc.b(r)?r:B.dL(r,x.aP),$async$aPQ)
case 10:q=k
p=q!=null?A.X.aw(q.aj(),null):null
w=8
break
case 9:p=null
case 8:r=h.a
o=h.b
n=h.c
m=h.d
l=C.hD_(d,s,p,e,g,r,o,n,m,i)
if(r==null)r=d.d
if(o==null)o=d.e
if(n==null)n=d.f
if(m==null)m=d.r
l.CW=C.hY4(new C.asY(d.a,d.b,t,r,o,n,m))
m=l.r
n=B.U(m).k("N<1,n>")
t=B.C(new B.N(m,new C.fr9(),n),n.k("ak.E"))
l.cx=t
t=B.a4(e).k("k9<ch.E,n>")
t=B.C(new B.k9(e,new C.fra(),t),t.k("M.E"))
l.cy=t
l.ay=e.q(0,D.TP)
u=l
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aPQ,v)},
hhg(d){var w,v,u,t=d.cy
if(t==null)t=A.Z
w=B.aR(x.Q)
for(v=0;v<6;++v){u=D.a5U[v]
if(A.d.q(t,u.b))w.J(0,u)}return w},
itX(d){return B.bU(A.L,null,new C.h37(),d,!0,!0,!0,null,!1,!1,x.I)},
i4u(d,e){var w,v=e.toLowerCase()
if(A.a.c7(v,".png"))w="image/png"
else w=A.a.c7(v,".webp")?"image/webp":"image/jpeg"
return"data:"+w+";base64,"+A.cT.gcu().aN(d)},
itW(d,e,f){return B.bU(A.L,null,new C.h36(f,e),d,!0,!0,!0,null,!1,!1,x.I)},
hhh(d){var w,v,u,t,s,r,q,p
for(w=d.r,v=w.length,u=0;u<v;++u)for(t=w[u].z,s=t.length,r=0;r<s;++r){q=t[r]
if(q.fx==="logo"){p=q.at
p=(p==null?"":p).length!==0}else p=!1
if(p)return q.at}return null},
hhi(d){var w,v,u,t,s,r,q,p,o=B.a([],x.s)
for(w=d.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u)for(t=w[u].z,s=t.length,r=0;r<t.length;t.length===s||(0,B.J)(t),++r){q=t[r]
p=q.at
if(p==null)p=""
if(q.fx==="photo"&&p.length!==0&&!A.d.q(o,p))o.push(p)}return o},
fyA(d,e){var w=A.a.i(B.w(d==null?"":d)).toLowerCase()
return A.d.aV(e,new C.fyB(w))?w:""},
hzN(d){var w,v
if(d<=0)return""
w=""+d
v=d===1?"":"s"
return"- THEIR PICTURES: they uploaded "+w+" picture"+v+" of their own, numbered 1 to "+w+' in the order they picked them. Put "picture": <number> on each slide where one belongs, following exactly what they say (e.g. "picture 2 on the team slide", "first picture on the title"). If they don\'t say, spread them over the content slides in order. Use 0 where no picture is wanted.'},
hEK(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0="colorful",a1=a4.CW,a2=C.ait(a1==null?"":a1,a0),a3=C.ait(a5,a0)
if(a2==null||a3==null)return!1
w=a2.c
v=w.length
u=a3.c
if(v!==u.length||a2.b!==a3.b)return!1
if(a2.d!==a3.d||a2.e!==a3.e||a2.f!==a3.f||a2.r!==a3.r)return!1
t=a4.cx
if(t==null)t=A.Z
if(t.length!==v)return!1
s=B.a([],x.g)
for(v=t.length,r=a4.r,q=B.U(r).k("Y<1>"),p=0;p<t.length;t.length===v||(0,B.J)(t),++p){o=B.nA(new B.Y(r,new C.fUO(t[p]),q))
if(o==null)return!1
s.push(o)}for(v=w.length,n=0;n<v;++n){m=w[n]
l=u[n]
if(m.a!==l.a||m.f!==l.f||m.r!==l.r||m.w!==l.w||m.x!==l.x)return!1
if(m.d.length!==l.d.length)return!1}if(!a6)return!0
for(v=x.fR,r=v.k("M.E"),q=x.L,n=0;n<w.length;++n){m=w[n]
l=u[n]
k=B.a([new B.y(m.b,l.b),new B.y(m.c,l.c)],q)
for(j=m.d,i=l.d,h=0;h<j.length;++h)k.push(new B.y(j[h],i[h]))
k.push(new B.y(m.e,l.e))
g=B.C(new B.Y(k,new C.fUP(),v),r)
A.d.aZ(g,new C.fUQ())
if(g.length===0)continue
f=new C.fUR(g)
e=s[n]
for(k=e.z,j=k.length,p=0;p<k.length;k.length===j||(0,B.J)(k),++p){d=k[p]
i=d.r
if(i.length!==0)d.r=f.$1(i)}e.c=f.$1(e.c)}if(A.a.i(a4.b)===A.a.i(a2.a)&&A.a.i(a3.a).length!==0)a4.b=A.a.i(a3.a)
a4.CW=a5
return!0},
ipA(d){var w=d.toLowerCase(),v=B.ag("\\b(fit|fits|fitting|overflow|overflowing|reframe|inside|too big|out of the|going under|under the slide|below the slide)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.aLi
v=B.ag("\\b(smaller|shrink|reduce|decrease|make .{0,20}small|less big)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.egs
v=B.ag("\\b(bigger|larger|increase|enlarge|grow|make .{0,20}big)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.egt
return null},
hzo(d,e,f,g){var w,v,u,t=d.e,s=d.f,r=Math.max(1,A.i.bh(t*f/(e*0.55)))
for(t=d.r.split("\n"),w=t.length,v=0,u=0;u<w;++u)v+=Math.max(1,A.i.cD(t[u].length/r))
return v*e*1.3<=s*g+0.5&&d.d+d.f<=1.001},
ipk(a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a0.r,d=e.length
if(d===0)return!1
e=a3?e:B.a([e[A.o.D(a1,0,d-1)]],x.g)
w=a0.d===D.oQ
v=w?540:960
u=w?960:540
for(d=e.length,t=a2.a,s=!1,r=0;r<e.length;e.length===d||(0,B.J)(e),++r)for(q=e[r].z,p=q.length,o=0;o<q.length;q.length===p||(0,B.J)(q),++o){n=q[o]
if(n.b!==D.d_)continue
m=n.w
l=n.c
k=n.d
switch(t){case 0:n.w=A.i.D(m*0.85,10,120)
break
case 1:j=A.i.D(m*1.15,10,120)
if(C.hzo(n,j,v,u))n.w=j
break
case 2:i=m
h=0
for(;;){g=!1
if(!C.hzo(n,i,v,u))if(n.w>10){f=h+1
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
ipi(d,e){var w,v,u,t,s,r,q,p,o=d.b,n=C.ait(o,"colorful")
if(n==null)throw B.W("That earlier version could not be read.")
w=B.aR(x.Q)
for(v=d.c,u=v.length,t=0;t<v.length;v.length===u||(0,B.J)(v),++t){s=v[t]
for(r=0;r<6;++r){q=D.a5U[r]
if(q.b===s)w.J(0,q)}}v=C.hhh(e)
u=C.hhi(e)
p=C.hD_(n,D.a79,null,w,v,n.d,n.e,n.f,n.r,u)
p.CW=o
o=p.r
u=B.U(o).k("N<1,n>")
o=B.C(new B.N(o,new C.fUK(),u),u.k("ak.E"))
p.cx=o
o=w.$ti.k("k9<ch.E,n>")
o=B.C(new B.k9(w,new C.fUL(),o),o.k("M.E"))
p.cy=o
p.ay=w.q(0,D.TP)
return p},
itJ(d,e,f){return B.bU(A.L,null,new C.h2k(f,e),d,!0,!0,!0,null,!1,!1,x.I)},
i3R(){var w,v,u,t=1000*Date.now()&2147483647,s=new B.e2()
s.cY(t)
w=D.cN0[s.az(10)]
v=new C.eqd(s)
u=x.N
return new C.eqc(w,s.az(4),J.fs(v.$1$2(D.de_,1,x.ff)),w.r[s.az(3)],v.$1$2(D.dvL,2+s.az(2),u),v.$1$2(D.doa,2,u),v.$1$2(D.dz4,4,x.fP),t)},
i5v(a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g="lux_frame",f="goldframe",e="lux_emblem",d=a5.a,a0=d.c,a1=new B.e2()
a1.cY(a5.w+a3*13)
w=new C.fng(a4)
v=new C.fni(a4,d)
u=new C.fnh(w,a5,a0,d)
for(t=a2.length,s=d.f,r=d.d,q=0;q<a2.length;a2.length===t||(0,B.J)(a2),++q){p=a2[q]
if(p.b===D.d_){o=p.fx
if(o==="title"){p.Q=r
p.fy="shimmer@"+A.a.b_(A.o.ft(r,16),8,"0").toUpperCase()}else if(o==="sub"||o==="body")p.Q=s}if(p.fx==="bar")p.fy="shimmer@"+A.a.b_(A.o.ft(r,16),8,"0").toUpperCase()}t=a5.e
n=t[A.o.F(a3,t.length)]
if(n==="spotlight")A.d.c9(a2,0,w.$8(D.f1,0.1+a1.ai()*0.45,0.05+a1.ai()*0.3,0.45,0.75,C.a30(a0,52),"lux_spot",a5.xg(0,"spotlight")))
else A.d.c9(a2,0,w.$8(D.bm,0,0,1,1,0,"lux_back",a5.xg(0,n)))
m=t[(a3+1)%t.length]
t=a3&1
if(t===1&&m!==n&&m!=="spotlight")A.d.c9(a2,1,w.$8(D.bm,0,0,1,1,0,"lux_back2",a5.aHq(0,m,r)))
switch(a5.b){case 0:a2.push(w.$12$anim$delay$stroke$strokeWidth(D.bm,0.022,0.038,0.956,0.924,0,g,a5.xg(0,f),D.ds,150,C.a30(a0,176),1.6))
a2.push(u.$4(0.022,0.038,"lux_c1",300))
a2.push(u.$4(0.978,0.038,"lux_c2",380))
a2.push(u.$4(0.022,0.962,"lux_c3",460))
a2.push(u.$4(0.978,0.962,"lux_c4",540))
break
case 1:a2.push(w.$12$anim$delay$stroke$strokeWidth(D.bm,0.018,0.032,0.964,0.936,0,g,a5.xg(0,f),D.ds,120,C.a30(a0,200),2))
a2.push(w.$12$anim$delay$stroke$strokeWidth(D.bm,0.034,0.06,0.932,0.88,0,"lux_frame2","",D.ds,260,C.a30(a0,112),0.8))
a2.push(u.$5$size(0.5,0.032,"lux_c1",420,0.026))
a2.push(u.$5$size(0.5,0.968,"lux_c2",480,0.026))
break
case 2:a2.push(w.$10$anim$delay(D.bm,0,0,1,1,0,"lux_filigree",a5.xg(0,"filigree"),D.ds,200))
break
default:a2.push(w.$10$anim$delay(D.bm,0.08,0.06,0.84,0.004,C.a30(a0,208),"lux_rule",a5.aHq(0,"shimmer",r),D.vl,150))
a2.push(w.$10$anim$delay(D.bm,0.08,0.936,0.84,0.004,C.a30(a0,144),"lux_rule2","",D.Jm,220))}l=!A.d.aV(a2,new C.fnf())||a3===0
s=a5.d
if(l)a2.push(v.$9(s,0.44,0.06,0.12,0.14,40,e,a5.xg(0,"crest"),350))
else{o=a1.h2()?0.035:0.905
a2.push(v.$9(s,o,0.055,0.06,0.09,22,e,a5.xg(0,"crest"),350))}s=a5.c
t=t===0
o=t?0.3:0.62
k=C.a30(r,242)
j=a5.xg(0,"orbit")
i=s===D.bm?0.785:0
a2.push(w.$13$anim$delay$rotation$stroke$strokeWidth(s,o-0.008,0.024,0.016,0.028,k,"lux_g1",j,D.r1,600,i,4294967295,1))
t=t?0.66:0.34
a2.push(w.$10$anim$delay(D.f1,t-0.007,0.9495,0.014,0.025,C.a30(r,242),"lux_g2",a5.xg(0,"orbit"),D.r1,700))
for(t=a5.f,s=t.length,q=0;q<t.length;t.length===s||(0,B.J)(t),++q){h=t[q]
a2.push(w.$8(D.bm,0,0,1,1,0,"lux_"+h,h+"@"+A.a.b_(A.o.ft(a0,16),8,"0").toUpperCase()))}if((A.d.gH(d.b).a&16777215)<8421504)a2.push(w.$8(D.bm,0,0,1,1,0,"lux_velvet",a5.xg(0,"velvet")))},
oa:function oa(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fUM:function fUM(d){this.a=d},
fUN:function fUN(){},
wA:function wA(d,e){this.a=d
this.b=e},
a9l:function a9l(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
asY:function asY(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
fUF:function fUF(){},
fUI:function fUI(){},
fSD:function fSD(){},
fSE:function fSE(){},
fSF:function fSF(d){this.a=d},
fMZ:function fMZ(){},
fN1:function fN1(d,e,f){this.a=d
this.b=e
this.c=f},
fN0:function fN0(d,e){this.a=d
this.b=e},
fN_:function fN_(d,e){this.a=d
this.b=e},
fMY:function fMY(d){this.a=d},
fPp:function fPp(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fPn:function fPn(d){this.a=d},
fPo:function fPo(d){this.a=d},
fr8:function fr8(){},
fr9:function fr9(){},
fra:function fra(){},
h37:function h37(){},
a1M:function a1M(d){this.a=d},
aJp:function aJp(d,e,f,g,h){var _=this
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
f9W:function f9W(d,e,f){this.a=d
this.b=e
this.c=f},
f9X:function f9X(d,e){this.a=d
this.b=e},
f9U:function f9U(d,e){this.a=d
this.b=e},
f9V:function f9V(d,e){this.a=d
this.b=e},
f9T:function f9T(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
f9O:function f9O(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
f9S:function f9S(d,e){this.a=d
this.b=e},
f9N:function f9N(d,e){this.a=d
this.b=e},
f9R:function f9R(d,e){this.a=d
this.b=e},
f9M:function f9M(d,e){this.a=d
this.b=e},
f9P:function f9P(d){this.a=d},
f9Q:function f9Q(d,e){this.a=d
this.b=e},
f9C:function f9C(d,e){this.a=d
this.b=e},
f9D:function f9D(d,e){this.a=d
this.b=e},
f9F:function f9F(d){this.a=d},
f9G:function f9G(d){this.a=d},
f9H:function f9H(d){this.a=d},
f9I:function f9I(d){this.a=d},
f9E:function f9E(d,e){this.a=d
this.b=e},
f9J:function f9J(d,e){this.a=d
this.b=e},
fa9:function fa9(d){this.a=d},
faa:function faa(d){this.a=d},
fa8:function fa8(d){this.a=d},
fab:function fab(d){this.a=d},
fa7:function fa7(d){this.a=d},
fad:function fad(d){this.a=d},
fa6:function fa6(d,e){this.a=d
this.b=e},
fae:function fae(d){this.a=d},
fa5:function fa5(d,e){this.a=d
this.b=e},
faf:function faf(d){this.a=d},
fa4:function fa4(d){this.a=d},
fag:function fag(d){this.a=d},
fa3:function fa3(d,e){this.a=d
this.b=e},
fah:function fah(d){this.a=d},
fa2:function fa2(d,e){this.a=d
this.b=e},
fai:function fai(d){this.a=d},
fa1:function fa1(d){this.a=d},
faj:function faj(d,e){this.a=d
this.b=e},
fa0:function fa0(d,e){this.a=d
this.b=e},
fak:function fak(d){this.a=d},
fac:function fac(d){this.a=d},
fa_:function fa_(d,e){this.a=d
this.b=e},
f9K:function f9K(d,e,f){this.a=d
this.b=e
this.c=f},
f9L:function f9L(d,e,f){this.a=d
this.b=e
this.c=f},
f9Z:function f9Z(d,e){this.a=d
this.b=e},
f9Y:function f9Y(d,e){this.a=d
this.b=e},
h36:function h36(d,e){this.a=d
this.b=e},
a1L:function a1L(d,e,f){this.c=d
this.d=e
this.a=f},
aJo:function aJo(d){var _=this
_.d=d
_.e=!1
_.f=""
_.c=_.a=_.r=null},
f9v:function f9v(d){this.a=d},
f9w:function f9w(d){this.a=d},
f9x:function f9x(d,e){this.a=d
this.b=e},
f9y:function f9y(d){this.a=d},
f9z:function f9z(d){this.a=d},
f9u:function f9u(d,e){this.a=d
this.b=e},
f9A:function f9A(d,e){this.a=d
this.b=e},
f9B:function f9B(d,e){this.a=d
this.b=e},
fyB:function fyB(d){this.a=d},
b3y:function b3y(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aFW:function aFW(d,e,f){this.c=d
this.d=e
this.a=f},
bmL:function bmL(d,e){var _=this
_.d=$
_.bw$=d
_.a9$=e
_.c=_.a=null},
eqf:function eqf(d){this.a=d},
eqe:function eqe(){},
bkd:function bkd(d,e){this.b=d
this.a=e},
fUO:function fUO(d){this.a=d},
fUP:function fUP(){},
fUQ:function fUQ(){},
fUR:function fUR(d){this.a=d},
atv:function atv(d,e){this.a=d
this.b=e},
fUK:function fUK(){},
fUL:function fUL(){},
h2k:function h2k(d,e){this.a=d
this.b=e},
a09:function a09(d,e,f){this.c=d
this.d=e
this.a=f},
aDr:function aDr(){var _=this
_.e=_.d=$
_.f=!1
_.c=_.a=_.r=null},
dt2:function dt2(d){this.a=d},
dt3:function dt3(d){this.a=d},
dt4:function dt4(d,e){this.a=d
this.b=e},
dt7:function dt7(d){this.a=d},
dt8:function dt8(d,e){this.a=d
this.b=e},
dt6:function dt6(d,e){this.a=d
this.b=e},
dt9:function dt9(d){this.a=d},
dt5:function dt5(d,e){this.a=d
this.b=e},
bvs:function bvs(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eqc:function eqc(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
eqd:function eqd(d){this.a=d},
fng:function fng(d){this.a=d},
fni:function fni(d,e){this.a=d
this.b=e},
fnh:function fnh(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fnf:function fnf(){},
aO3:function aO3(){},
hg5(d){var w,v,u
try{w=A.X.aQ(0,d,null)
if(x.f.b(w)){v=B.wt(B.a2(w,x.N,x.z))
return v}}catch(u){}return null},
b3u:function b3u(d,e,f){this.c=d
this.d=e
this.a=f},
bol:function bol(d,e){this.c=d
this.a=e},
ilv(d){return A.d.dP(D.Ip,new C.fO5(d),new C.fO6())},
ilw(d){var w,v,u,t=A.a.i(d)
if(!A.a.a_(t,"class_"))return null
w=A.a.b2(t,6)
if(w.length===0)return null
v=new B.Y(D.Ip,new C.fO7(w),x.b4)
if(!v.gae(0).C())return null
u=v.gH(0)
return new C.k0("class_"+u.a,u.b,u.d,u.r,u.w,u.e,u.f)},
lu:function lu(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fO5:function fO5(d){this.a=d},
fO6:function fO6(){},
fO7:function fO7(d){this.a=d},
nc(d,e,f,g,h){return new C.Fx(f,g,d)},
i6V(d){var w=d.z,v=B.U(w).k("Y<1>")
w=B.C(new B.Y(w,new C.fpv(),v),v.k("M.E"))
d.z=w
d.x=""},
dz(d,e){var w=$.Ln
e.db="__design__:"+(w.length===0?"layer":w)
A.d.c9(d.z,0,e)},
dA(d,e,f,g,h,i,j,k,l){return C.er(A.bp,!1,4279310375,A.aH,"",d,24,A.bt,A.a8,"",e,"design_"+C.cE(),null,"","",0,!1,"",f,g,h,i,"",0,0,"",D.ct,D.fi,j,k,l)},
hCN(d,e){var w
C.i6V(d)
w=A.d.dP($.bH2(),new C.fLW(e),new C.fLX())
$.Ln=w.a
d.x=w.a;++d.y
try{w.ak(d)}finally{$.Ln=""}d.z=B.bq(d.z,!0,x.F)},
Fx:function Fx(d,e,f){this.a=d
this.b=e
this.e=f},
fpv:function fpv(){},
fUg:function fUg(){},
fUh:function fUh(){},
fUi:function fUi(){},
fUt:function fUt(){},
fUy:function fUy(){},
fUz:function fUz(){},
fUA:function fUA(){},
fUB:function fUB(){},
fUC:function fUC(){},
fUD:function fUD(){},
fUE:function fUE(){},
fUj:function fUj(){},
fUk:function fUk(){},
fUl:function fUl(){},
fUm:function fUm(){},
fUn:function fUn(){},
fUo:function fUo(){},
fUp:function fUp(){},
fUq:function fUq(){},
fUr:function fUr(){},
fUs:function fUs(){},
fUu:function fUu(){},
fUv:function fUv(){},
fUw:function fUw(){},
fUx:function fUx(){},
fLW:function fLW(d){this.a=d},
fLX:function fLX(){},
j6(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){return C.er(d,e,f,g,"",4280640491,h,i,j,"",k,l,null,"","",0,!1,"",0,D.bm,4280172719,2,m,n,0,"",o,D.d_,p,q,r)},
DH(d,e,f,g,h,i,j,k,l){return C.er(A.bp,!1,4279310375,A.aH,"",d,24,A.bt,A.a8,"",e,f,null,"","",0,!1,"",0,g,h,i,"",0,0,"",D.ct,D.fi,j,k,l)},
bFM(){var w=new B.V(Date.now(),0,!1)
return A.iT[B.bM(w)-1]+" "+B.bV(w)+", "+B.bD(w)},
ew:function ew(d,e,f){this.a=d
this.b=e
this.c=f},
bD8(d){return new B.j2((A.o.aI(d,24)&255)/255,(A.o.aI(d,16)&255)/255,(A.o.aI(d,8)&255)/255,(d&255)/255)},
ict(d){var w,v
if(d==null||!A.a.a_(d,"data:image"))return null
try{w=B.aos(A.cM.aN(A.d.gan(d.split(","))))
return w}catch(v){return null}},
icx(d){var w=d.r
if(!d.cy)return w
return new B.N(B.a(w.split("\n"),x.s),new C.fxU(),x.dv).aO(0,"\n")},
icw(d){switch(d.a){case 2:return A.nV
case 1:case 5:return A.fnl
default:return A.Vc}},
icq(d){switch(d.a){case 2:return A.vU
case 1:case 5:return A.Xg
default:return A.adv}},
icu(d,e){var w,v=null,u=d.ay,t=A.o.aI(u,24),s=A.o.aI(d.ch,24),r=(t&255)===0?v:C.bD8(u),q=(s&255)===0?v:C.bD8(d.ch),p=A.i.D(d.CW*(e/960),0.35,6)
u=q==null
if(u)w=v
else{t=new B.nV(q,p,A.la)
w=new B.q_(t,t,t,t)}switch(d.ax.a){case 1:return B.lR(v,v,v,new B.kT(r,w,v,A.aeP,v),v,v,v,v)
case 4:return u?new B.fV(v,v,v):B.xF(B.lR(v,v,q,v,p+0.4,v,v,v))
default:return B.lR(v,v,v,new B.kT(r,w,B.w3(4),A.i8,v),v,v,v,v)}},
ics(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=d.c*e,j=d.d*a0,i=d.b,h=i===D.fi?0.4:12,g=A.i.D(d.e*e,h,e),f=A.i.D(d.f*a0,h,a0)
switch(i.a){case 0:w=C.icq(d.as)
v=A.i.D(d.w*(e/960),3,96)
u=C.icx(d)
t=C.bD8(d.Q)
s=d.x.a>=700?A.eB:A.ww
r=d.y===A.cK?A.z0:A.ao8
q=d.z
p=new B.DT(w,l,l,B.fc(u,l,l,l,B.hc(l,t,1===q.a?A.aUR:A.aUQ,l,l,l,l,l,l,A.dH,l,l,v,r,s,l,!0,l,l,l,l),C.icw(d.as)))
break
case 1:case 4:o=C.ict(d.at)
n=i===D.lS&&d.c===0&&d.d===0&&d.e===1&&d.f===1
if(o==null){w=d.db
if(w.length===0)w="Image"
p=B.xF(B.fc(w,l,l,l,B.hc(l,A.tv,l,l,l,l,l,l,l,A.dH,l,l,10,l,l,l,!0,l,l,l,l),l))}else p=new B.IR(o,n?A.aeL:A.XI,l,l)
break
case 3:w=new B.nV(A.JJ,1,A.la)
u=B.w3(6)
t=d.db
if(t.length===0)t="PDF document"
p=B.lR(A.vU,B.fc(t,l,l,l,B.hc(l,D.euV,l,l,l,l,l,l,l,A.dH,l,l,11,l,A.eB,l,!0,l,l,l,l),A.nV),l,new B.kT(E.aMK,new B.q_(w,w,w,w),u,A.i8,l),l,l,l,l)
break
case 2:p=C.icu(d,e)
break
case 5:p=C.icr(d)
break
default:p=l}w=d.cx
if(w!==0)p=B.hu3(-w,p)
w=i===D.d_
if(w){m=A.o.aI(d.Q,24)&255
if(m<255)p=new B.auk(m/255,p)}if(w)return new F.wF(k,l,j,l,new B.TD(new B.kS(g,g,f,1/0),p))
if(i===D.ls){i=new B.nV(A.JJ,1,A.la)
i=B.lR(A.vU,p,l,new B.kT(A.pN,new B.q_(i,i,i,i),B.w3(4),A.i8,l),l,l,D.bHf,l)}else i=p
return new F.wF(k,l,j,l,new B.fV(g,f,i))},
icv(d,e,f,g){var w,v=null,u=C.bD8(d.e),t=d.f
t=B.a([F.hsF(t!=null?B.lR(v,v,v,new B.kT(v,v,v,A.i8,new B.aZ_(E.Xj,A.adr,B.a([u,C.bD8(t)],x.cR),v)),v,v,v,v):B.lR(v,v,u,v,v,v,v,v))],x.eR)
w=d.z
A.d.v(t,new B.N(w,new C.fxT(f,g),B.U(w).k("N<1,fi>")))
return F.cAi(t)},
hhk(d){var w=0,v=B.j(x.E),u,t,s,r,q,p,o,n
var $async$hhk=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:n=B.a5v(null,"NGMY Slides",d.b)
for(t=d.r,s=t.length,r=n.c,q=0;q<t.length;t.length===s||(0,B.J)(t),++q){p=t[q]
o=new B.XU(A.x8,A.JG,D.bIr,null,null,null,!1,null)
o=new B.Cw(o,new C.fUX(607,787,p,d))
o.Nj(n,null)
r.push(o)}u=n.jI(0)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$hhk,v)},
icr(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=C.hg5(d.r),k=l==null,j=k?m:l.b,i=A.a.i(j==null?"":j),h=k?m:l.galb()
if(h==null)h=A.aBX
j=B.u1(4279308564)
w=B.w3(18)
v=new B.nV(B.u1(4287531653),3,A.la)
u=i.length===0?"My links":i
u=B.a([B.xF(B.fc(u,m,m,m,B.hc(m,A.pN,m,m,m,m,m,m,m,A.dH,m,m,12,m,A.eB,m,!0,m,m,m,m),m))],x.eR)
t=k?m:l.c
if(A.a.i(t==null?"":t).length!==0)u.push(B.xF(B.fc(A.a.i(l.c),m,m,m,D.fv6,m)))
u.push(new B.fV(m,8,m))
for(t=B.cW(h,0,B.dB(8,"count",x.S),B.U(h).c),s=t.$ti,t=new B.bR(t,t.gI(0),s.k("bR<ak.E>")),s=s.k("ak.E");t.C();){r=t.d
if(r==null)r=s.a(r)
q=A.a.i(r.c)
p=B.u1(4280690220)
o=new B.aaG(8,8)
n=A.a.i(r.b)
u.push(new B.ob(D.bBg,new C.ayF(new C.ajD(q),B.lR(m,B.fc(n.length===0?A.a.i(r.c):n,m,m,m,D.fxy,A.nV),m,new B.kT(p,m,new B.ak6(o,o,o,o),A.i8,m),m,m,D.bHI,m))))}k=k?m:l.as
if(A.a.i(k==null?"":k).length!==0){k=A.a.i(l.as)
t=B.xF(B.fc(k,m,m,m,D.fwM,m))
u.push(new C.ayF(C.hLQ(k),t))}return B.lR(m,B.zy(u,A.NB,A.lR),m,new B.kT(j,new B.q_(v,v,v,v),w,A.i8,m),m,m,D.bC6,m)},
fxU:function fxU(){},
fxT:function fxT(d,e){this.a=d
this.b=e},
fUX:function fUX(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aig(d){var w,v
for(w=0;w<32;++w){v=D.If[w]
if(v.a===d)return v}return null},
hwH(d){var w,v,u=A.a.co(d,",")
if(!A.a.a_(d,"data:")||u<0)return null
try{w=A.cM.aN(A.a.b2(d,u+1))
return w}catch(v){return null}},
cZ(d,e){var w=d*374761393+e*668265263+1013904223&2147483647
w=(w^w>>>13)*1274126177&2147483647
return((w^w>>>16)&65535)/65535},
hG1(d,e){return B.a6(d,!1).ce(B.ec(new C.h0K(e),!0,null,x.fB))},
hG0(d,e){return B.bU(A.L,null,new C.h0J(e),d,!0,!0,!0,null,!1,!1,x.fB)},
jb:function jb(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Fo:function Fo(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Op:function Op(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bm6:function bm6(d,e,f){var _=this
_.d=d
_.e=$
_.bw$=e
_.a9$=f
_.c=_.a=null},
e3H:function e3H(d){this.a=d},
e3G:function e3G(d,e,f){this.a=d
this.b=e
this.c=f},
e3F:function e3F(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
btZ:function btZ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
f8I:function f8I(d,e){this.a=d
this.b=e},
bh1:function bh1(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
b1o:function b1o(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cfj:function cfj(){},
cfk:function cfk(d){this.a=d},
cfl:function cfl(d,e,f){this.a=d
this.b=e
this.c=f},
cfm:function cfm(d,e,f){this.a=d
this.b=e
this.c=f},
h0K:function h0K(d){this.a=d},
a_H:function a_H(d,e){this.c=d
this.a=e},
aBO:function aBO(){var _=this
_.f=_.e=_.d=$
_.r=0
_.c=_.a=null},
dig:function dig(d,e,f){this.a=d
this.b=e
this.c=f},
dil:function dil(d){this.a=d},
dim:function dim(d){this.a=d},
dik:function dik(d){this.a=d},
din:function din(d){this.a=d},
dij:function dij(d,e){this.a=d
this.b=e},
dio:function dio(d){this.a=d},
dii:function dii(d){this.a=d},
dip:function dip(d){this.a=d},
dih:function dih(d,e){this.a=d
this.b=e},
diq:function diq(d,e){this.a=d
this.b=e},
h0J:function h0J(d){this.a=d},
h0I:function h0I(d){this.a=d},
h0H:function h0H(d,e,f){this.a=d
this.b=e
this.c=f},
h0G:function h0G(d,e){this.a=d
this.b=e},
aNy:function aNy(){},
itV(d){return B.bU(A.L,null,new C.h35(),d,!0,!0,!0,null,!1,!1,x.N)},
h35:function h35(){},
a01:function a01(d){this.a=d},
biy:function biy(d){this.d=d
this.c=this.a=null},
dp4:function dp4(d){this.a=d},
dp5:function dp5(d,e){this.a=d
this.b=e},
dp6:function dp6(d){this.a=d},
i8D(d){var w,v=d.split("@")
if(v.length>1){w=B.ca(v[1],16)
if(w!=null)return B.b0(w)}return D.yq},
int(d){var w=7000
switch(A.d.gH(d.split("@"))){case"shimmer":w=3400
break
case"golddust":w=16e3
break
case"spotlight":w=14e3
break
case"goldframe":w=5200
break
case"twinkle":w=2600
break
case"orbit":break
case"rays":w=3e4
break
case"bokeh":w=22e3
break
case"aurora":w=18e3
break
case"sparkle":w=4200
break
case"sheen":break
case"velvet":w=9000
break
case"crest":w=6000
break
case"filigree":w=8000
break
default:w=null
break}return w},
ins(d,e,f,g){var w,v,u,t,s,r=null,q=A.d.gH(d.split("@")),p=C.i8D(d)
switch(q){case"shimmer":return B.of(A.LP,g,new C.fRx(p,A.i.F(e,6.283185307179586)/6.283185307179586*1.8-0.4))
case"golddust":return new B.an(A.a0,r,A.b0,A.t,B.a([g,new B.du(!0,B.b2(r,r,r,new C.bhT(e,f,p,r),A.az),r)],x.p),r)
case"spotlight":w=Math.sin(e)
v=Math.cos(e*0.7)
u=Math.sin(e*2)
t=Math.sin(e*3)
return B.dN(B.e1(A.A,B.d3(F.bXn(g,new B.Eu(40,40,r)),0.75+t*0.25),1+u*0.08,r,r),new B.o(w*60,v*26))
case"goldframe":return new B.an(A.a0,r,A.b0,A.t,B.a([g,new B.du(!0,B.b2(r,r,r,new C.bhA(e,p,r),A.az),r)],x.p),r)
case"twinkle":s=Math.sin(e)
w=A.i.D(0.55+s*0.45,0,1)
return B.d3(B.eG(A.A,e*0.5,B.e1(A.A,g,0.8+(s+1)*0.18,r,r),r),w)
case"orbit":w=Math.cos(e)
v=Math.sin(e)
u=B.dr()
t=u.a
t.$flags&2&&B.aj(t)
t[11]=0.002
u.fL(e)
u.n2(Math.sin(e)*0.3)
return B.dN(B.fz(A.A,g,r,u,!0),new B.o(w*22,v*12))
case"rays":return new B.an(A.a0,r,A.b0,A.t,B.a([new B.du(!0,B.b2(r,r,r,new C.bqI(e,f,p,r),A.az),r),g],x.p),r)
case"bokeh":return new B.an(A.a0,r,A.b0,A.t,B.a([new B.du(!0,B.b2(r,r,r,new C.bcp(e,f,p,r),A.az),r),g],x.p),r)
case"aurora":return new B.an(A.a0,r,A.b0,A.t,B.a([new B.du(!0,B.b2(r,r,r,new C.bc2(e,f,p,r),A.az),r),g],x.p),r)
case"velvet":return new B.an(A.a0,r,A.b0,A.t,B.a([g,new B.du(!0,B.b2(r,r,r,new C.bxP(e,p,r),A.az),r)],x.p),r)
case"sparkle":return new B.an(A.a0,r,A.b0,A.t,B.a([g,new B.du(!0,B.b2(r,r,r,new C.buN(e,f,p,r),A.az),r)],x.p),r)
case"sheen":return new B.an(A.a0,r,A.b0,A.t,B.a([g,new B.du(!0,B.b2(r,r,r,new C.btV(e,p,r),A.az),r)],x.p),r)
case"filigree":return new B.an(A.a0,r,A.b0,A.t,B.a([g,new B.du(!0,B.b2(r,r,r,new C.bgV(e,p,r),A.az),r)],x.p),r)
case"crest":s=Math.sin(e)
return new B.an(A.A,r,A.ac,A.f,B.a([B.bS(0,new B.du(!0,B.e1(A.A,new B.bN(new B.p(r,r,r,r,r,new B.bY(A.A,0.5,A.x,r,0,B.a([p.j(0.35+s*0.12),p.j(0)],x.O),r,r),A.a6),A.bj,r,r),1.6+s*0.15,r,r),r),0,0,0),B.eG(A.A,s*0.06,B.e1(A.A,g,1+s*0.05,r,r),r)],x.p),r)}return g},
fRx:function fRx(d,e){this.a=d
this.b=e},
bhT:function bhT(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bhA:function bhA(d,e,f){this.b=d
this.c=e
this.a=f},
bqI:function bqI(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bcp:function bcp(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bc2:function bc2(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bxP:function bxP(d,e,f){this.b=d
this.c=e
this.a=f},
buN:function buN(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
btV:function btV(d,e,f){this.b=d
this.c=e
this.a=f},
bgV:function bgV(d,e,f){this.b=d
this.d=e
this.a=f},
dhY:function dhY(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
yg:function yg(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
fRA(d){var w=d.db
return A.a.a_(w,"marriage_sign_")&&!A.a.a_(w,"marriage_sign_placed_")&&d.b!==D.ls},
iny(d,e){var w,v,u,t,s,r,q,p,o,n,m,l="marriage_locked_box_",k="marriage_field_",j=B.a([],x.u)
for(w=d.z,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u){t=w[u]
if(A.a.a_(t.db,l))continue
if(Math.abs(t.d+t.f*0.5-e)<0.03)j.push(t)}if(j.length<2)return
A.d.aZ(j,new C.fRB())
s=A.d.gH(j).c
for(w=j.length,u=0;u<j.length;j.length===w||(0,B.J)(j),++u){t=j[u]
r=s-t.c
if(Math.abs(r)>0.0001){t.c=s
v=t.db
if(A.a.a_(v,k)){q=A.d.gH(B.aSC(v,k,"",0).split(":"))
for(v=d.z,p=v.length,o=l+q,n=0;n<p;++n){m=v[n]
if(m.db===o)m.c+=r}}}s+=t.e+0.006}},
inx(d,e){var w,v,u,t,s,r=d.db
if(!A.a.a_(r,"marriage_field_"))return
w=r.split(":")
r=w.length
if(r>1){v=B.cX(w[1])
u=v==null?d.e:v}else u=d.e
t=r>2?B.cX(w[2]):null
r=A.a.i(e).length
if(r===0){d.e=u
if(t!=null)d.w=t
return}if(t!=null){s=r*(t*0.001)+0.028
if(s<=u){d.w=t
d.e=A.i.D(s,0.06,u)}else{d.w=A.i.D((u-0.028)/(r*0.001),12,t)
d.e=u}return}d.e=A.i.D(r*(d.w*0.001)+0.028,0.06,u)},
ahV(d,a0,a1,a2,a3,a4){var w=0,v=B.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$ahV=B.e(function(a5,a6){if(a5===1)return B.f(a6,v)
for(;;)switch(w){case 0:f=B.U(a4).k("Y<1>")
e=B.C(new B.Y(a4,new C.fJW(),f),f.k("M.E"))
w=!a2&&e.length!==0?3:4
break
case 3:w=5
return B.b(B.bU(A.dW,null,new C.fJX(e),d,!0,!0,!1,A.lT,!1,!1,x.N),$async$ahV)
case 5:t=a6
if(t==="continue"){a1.$1(A.d.gH(e).hQ())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.hi1(d),$async$ahV)
case 6:s=a6
if(s==null||d.e==null){w=1
break}r=A.a.i(a3==null?"":a3)
w=r.length!==0?7:9
break
case 7:a6=r
w=8
break
case 9:w=10
return B.b(B.HF(d,"Search states\u2026","",A.ka,"Choose state"),$async$ahV)
case 10:case 8:q=a6
if(q==null||d.e==null){w=1
break}p=C.hgS(s)
if(p==null)p=A.d.gH(D.SH)
f=C.cE()
o=A.a.i(q)
if(o.length===0)o=null
n=C.cE()
m=p.e
l=C.fRC(p.d)
k=x.u
j=B.a([C.er(A.bp,!1,4279310375,A.aH,"marriage_locked_bg",4280640491,24,A.bt,A.a8,"",1,C.cE(),l,"","",0,!1,"",0,D.bm,4280172719,2,"",0,0,"",D.ct,D.lS,1,0,0)],k)
i=p.f
h=x.F
k=B.C(B.a([C.Dt(i,0.016,D.lt,4291404327,0.8,"ring_jewel",0.028,0.42544,0.008),C.Dt(0,0.058,D.f1,4291404327,2.4,"ring_l",0.058,0.39064,0.026),C.Dt(0,0.058,D.f1,4291404327,2.4,"ring_r",0.058,0.41963999999999996,0.026)],k),h)
k.push(C.Ly("HATI YA NDOA",A.K,i,32,A.u,0.048,"title",0.78,0.11,0.086))
k.push(C.Ly("Hati ya Makubaliano ya Ndoa",A.K,i,12,A.a8,0.018,"subtitle",0.78,0.11,0.134))
A.d.v(k,C.hdw(0.2,0.154,0.6,4291404327,i))
A.d.v(k,C.bCC("TAARIFA ZA WANANDOA",0.176,0.2,0.6,i))
A.d.v(k,C.a2E("Jina la Mume:","groom_name",0.11,0.218,0.78,11,i,""))
A.d.v(k,C.a2E("Jina la Mke:","bride_name",0.11,0.25,0.78,11,i,""))
A.d.v(k,C.a2E("Tarehe ya Ndoa:","tarehe",0.11,0.282,0.78,11,i,""))
A.d.v(k,C.a2E("Mahali:","bride_house",0.11,0.314,0.78,11,i,""))
A.d.v(k,C.bCC("TAMKO LA MAKUBALIANO",0.35,0.2,0.6,i))
k.push(C.Dt(m,0.082,D.bm,4291404327,1.15,"intro_frame",0.792,0.104,0.384))
g=C.cE()
k.push(C.er(A.bp,!1,i,A.aH,"marriage_field_utangulizi:"+A.i.ad(0.78,3),4280640491,9.5,A.bt,A.cE,"",0.074,g,null,"","",0,!1,"",0,D.bm,4280172719,2,y.O,0,0,"",D.ct,D.d_,0.78,0.11,0.388))
A.d.v(k,C.hdw(0.22,0.47,0.56,4291404327,i))
A.d.v(k,C.bCC("MASHAHIDI",0.49,0.26,0.48,i))
A.d.v(k,C.hyN("Shahidi wa Mume",0.11,0.528,0.37,i,4294967295))
A.d.v(k,C.hyN("Shahidi wa Mke",0.52,0.528,0.37,i,4294967295))
A.d.v(k,C.a2E("Jina:","witness_mume_1_name",0.11,0.564,0.37,10,i,""))
A.d.v(k,C.a2E("Jina:","witness_mke_1_name",0.52,0.564,0.37,10,i,""))
A.d.v(k,C.bCB("witness_mume_1",0.11,0.596,0.37,i))
A.d.v(k,C.bCB("witness_mke_1",0.52,0.596,0.37,i))
A.d.v(k,C.bCC("SAHIHI ZA WANANDOA",0.64,0.2,0.6,i))
k.push(C.Ly("Mume",A.K,i,11,A.u,0.016,"mume_h",0.37,0.11,0.678))
k.push(C.Ly("Mke",A.K,i,11,A.u,0.016,"mke_h",0.37,0.52,0.678))
A.d.v(k,C.bCB("mchumba_mume",0.11,0.7,0.37,i))
A.d.v(k,C.bCB("mchumba_mke",0.52,0.7,0.37,i))
A.d.v(k,C.bCC("MWANDISHI / MSIMAMIZI",0.744,0.18,0.64,i))
A.d.v(k,C.a2E("Jina:","mwandishi",0.11,0.784,0.26,10,i,""))
A.d.v(k,C.bCB("witness_mume_2",0.38,0.784,0.26,i))
A.d.v(k,C.a2E("Tarehe:","mchumba_mume_tarehe",0.65,0.784,0.24,10,i,""))
h=B.C(C.hdw(0.22,0.83,0.56,4291404327,i),h)
h.push(C.Ly("NGMY",A.K,i,13,A.u,0.022,"ngmy_mark",0.6,0.2,0.846))
h.push(C.Ly("Nakala ya Hati",A.K,4291404327,9,A.a8,0.016,"ngmy_sub",0.6,0.2,0.866))
A.d.v(k,h)
A.d.v(j,k)
a0.$1(C.Cr(null,null,null,null,D.oQ,5,!1,"marriage_agreement",null,null,null,null,f,null,!1,o,p.b,null,null,B.a([C.t_(m,null,0,0,j,n,D.r0,"","","Hati ya Ndoa",D.ds)],x.g),"marriage_"+p.a,null,!1,null))
case 1:return B.h(u,v)}})
return B.i($async$ahV,v)},
fRB:function fRB(){},
fJW:function fJW(){},
fJX:function fJX(d){this.a=d},
fJU:function fJU(d){this.a=d},
fJV:function fJV(d){this.a=d},
ibS(d){var w=d.a
if(1===w)return"underline"
if(4===w)return"lineThrough"
return"none"},
ibR(d){var w=d==null?null:J.k(d)
switch(w==null?"none":w){case"underline":return A.nd
case"lineThrough":return A.xh
default:return A.aH}},
er(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){return new C.eQ(o,a7,a9,b0,a8,n,a2,j,l,k,g,f,d,p,w,i,a0,a1,v,e,h,s,a6,a3,r,q,m,u,a5,t,a4)},
hAT(d){var w,v,u=J.k(d==null?"fade":d)
for(w=0;w<22;++w){v=D.Sq[w]
if(v.b===u)return v}return D.ds},
i80(d){var w,v,u=J.k(d==null?"text":d)
for(w=0;w<6;++w){v=D.d4u[w]
if(v.b===u)return v}return D.d_},
ieF(d){var w,v,u=J.k(d==null?"rectangle":d)
for(w=0;w<7;++w){v=D.dwy[w]
if(v.b===u)return v}return D.bm},
t_(d,e,f,g,h,i,j,k,l,m,n){return new C.m1(i,m,k,j,d,e,n,g,l,f,h==null?B.a([],x.u):h)},
hrq(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=d.h(0,"id")
l=J.k(l==null?"":l)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"notes")
v=J.k(v==null?"":v)
u=C.ia8(d.h(0,"layout"))
t=B.aJ(d.h(0,"background"))
t=t==null?m:A.i.M(t)
if(t==null)t=4294967295
s=B.aJ(d.h(0,"backgroundEnd"))
s=s==null?m:A.i.M(s)
r=C.hAT(d.h(0,"transition"))
q=B.aJ(d.h(0,"durationSeconds"))
q=q==null?m:A.i.M(q)
if(q==null)q=0
p=d.h(0,"slideDesignId")
p=J.k(p==null?"":p)
o=B.aJ(d.h(0,"designRevision"))
o=o==null?m:A.i.M(o)
if(o==null)o=0
n=x.c.a(d.h(0,"elements"))
if(n==null)n=m
else{n=J.dd(n,x.f)
n=B.cF(n,new C.ckV(),n.$ti.k("M.E"),x.F)
n=B.C(n,B.a4(n).k("M.E"))}return C.t_(t,s,o,q,n==null?B.a([],x.u):n,l,u,v,p,w,r)},
ia8(d){var w,v,u=J.k(d==null?"titleContent":d)
for(w=0;w<9;++w){v=D.atw[w]
if(v.b===u)return v}return D.n8},
Cr(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,a0,a1,a2,a3,a4){var w=a4==null?new B.V(Date.now(),0,!1):a4
return new C.hQ(p,t,a1,h,i,w,a0==null?B.a([C.t_(4294967295,null,0,0,null,C.cE(),D.r0,"","","",D.ds)],x.g):a0,k,s,a2,a3,d,v,u,q,j,r,f,g,e,m,o,n,l)},
Xh(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4="deckKind",a5=a6.h(0,"id")
a5=J.k(a5==null?"":a5)
w=a6.h(0,"name")
w=J.k(w==null?"Untitled Presentation":w)
v=a6.h(0,"themeId")
v=J.k(v==null?"office_blue":v)
u=C.i5R(a6.h(0,"aspectRatio"))
t=B.aJ(a6.h(0,"autoAdvanceSeconds"))
t=t==null?a3:A.o.D(A.i.M(t),1,120)
if(t==null)t=5
s=a6.h(0,"updatedAt")
s=B.bh(J.k(s==null?"":s))
if(s==null)s=new B.V(Date.now(),0,!1)
r=a6.h(0,a4)
r=r==null?a3:J.k(r)
q=a6.h(0,"marriageState")
q=q==null?a3:J.k(q)
p=a6.h(0,"transferClaimCode")
p=p==null?a3:J.k(p)
if(J.z(a6.h(0,"transferReceived"),!0)){o=a6.h(0,a4)
o=C.kN(o==null?a3:J.k(o))}else o=!1
n=a6.h(0,a4)
if(C.kN(n==null?a3:J.k(n))){n=a6.h(0,"adminShareEditUntil")
n=n==null?a3:J.k(n)}else n=a3
m=B.aJ(a6.h(0,"signatureStrokeWidth"))
if(m==null)m=a3
l=B.aJ(a6.h(0,"signatureInkColor"))
l=l==null?a3:A.i.M(l)
k=a6.h(0,"kiapoSignedAt")
k=k==null?a3:J.k(k)
j=J.z(a6.h(0,"cinematic"),!0)
i=J.z(a6.h(0,"loop"),!0)
h=a6.h(0,"aiOutlineJson")
h=h==null?a3:J.k(h)
g=x.c
f=g.a(a6.h(0,"aiSlideIds"))
if(f==null)f=a3
else{f=J.b8(f,new C.ckI(),x.N)
f=B.C(f,f.$ti.k("ak.E"))}e=g.a(a6.h(0,"aiExtras"))
if(e==null)e=a3
else{e=J.b8(e,new C.ckJ(),x.N)
e=B.C(e,e.$ti.k("ak.E"))}d=a6.h(0,"finaleStyle")
d=d==null?a3:J.k(d)
a0=a6.h(0,"finaleTitle")
a0=a0==null?a3:J.k(a0)
a1=a6.h(0,"finaleSubtitle")
a1=a1==null?a3:J.k(a1)
a2=a6.h(0,"finaleLogo")
a2=a2==null?a3:J.k(a2)
g=g.a(a6.h(0,"slides"))
if(g==null)g=a3
else{g=J.dd(g,x.f)
g=B.cF(g,new C.ckK(),g.$ti.k("M.E"),x.bt)
g=B.C(g,B.a4(g).k("M.E"))}return C.Cr(n,e,h,f,u,t,j,r,a2,d,a1,a0,a5,k,i,q,w,l,m,g==null?B.a([C.t_(4294967295,a3,0,0,a3,C.cE(),D.r0,"","","",D.ds)],x.g):g,v,p,o,s)},
kN(d){return d==="marriage_agreement"||d==="hati_kuhowa"||d==="hati_kuhoweya"||d==="hati_malipo_awamu"||d==="hati_kiapo_uongozi"},
i5R(d){var w,v,u=J.k(d==null?"landscape169":d)
for(w=0;w<2;++w){v=D.dxp[w]
if(v.b===u)return v}return D.E_},
cE(){var w=Date.now(),v=$.jc
$.jc=v+1
return""+1000*w+"_"+v},
clb(d,e,f){var w,v,u,t,s,r,q,p=null,o="Click to add title",n=4280640491,m=4280172719,l=4279310375
d.d=e
A.d.a8(d.z)
if(e!==D.E0){d.e=f.f.l()
w=f.r
d.f=w==null?p:w.l()}switch(e.a){case 0:break
case 1:w=d.z
v=C.cE()
v=C.er(A.K,!1,f.d.l(),A.aH,"",n,40,A.bt,A.u,"",0.2,v,p,"","",0,!1,"",0,D.bm,m,2,o,0,0,"",D.ct,D.d_,0.84,0.08,0.3)
u=C.cE()
A.d.v(w,B.a([v,C.er(A.K,!1,f.e.l(),A.aH,"",n,20,A.bt,A.cE,"",0.12,u,p,"","",0,!1,"",0,D.bm,m,2,"Click to add subtitle",0,0,"",D.ct,D.d_,0.76,0.12,0.58)],x.u))
break
case 2:w=d.z
v=C.cE()
v=C.er(A.bp,!1,f.d.l(),A.aH,"",n,32,A.bt,A.u,"",0.14,v,p,"","",0,!1,"",0,D.bm,m,2,o,0,0,"",D.ct,D.d_,0.88,0.06,0.06)
u=C.cE()
A.d.v(w,B.a([v,C.er(A.bp,!0,f.e.l(),A.aH,"",n,20,A.bt,A.cE,"",0.68,u,p,"","",0,!1,"",0,D.bm,m,2,"\u2022 Tap text to select, then Edit to type\n\u2022 Use Format for size & color\n\u2022 Add images and shapes from Insert",0,0,"",D.ct,D.d_,0.88,0.06,0.24)],x.u))
break
case 3:w=d.z
v=C.cE()
v=C.er(A.bp,!1,f.d.l(),A.aH,"",n,30,A.bt,A.u,"",0.12,v,p,"","",0,!1,"",0,D.bm,m,2,"Two Column Slide",0,0,"",D.ct,D.d_,0.88,0.06,0.06)
u=C.cE()
t=f.e
u=C.er(A.bp,!0,t.l(),A.aH,"",n,18,A.bt,A.a8,"",0.7,u,p,"","",0,!1,"",0,D.bm,m,2,"Left column\n\n\u2022 Point A\n\u2022 Point B",0,0,"",D.ct,D.d_,0.42,0.06,0.22)
s=C.cE()
A.d.v(w,B.a([v,u,C.er(A.bp,!0,t.l(),A.aH,"",n,18,A.bt,A.a8,"",0.7,s,p,"","",0,!1,"",0,D.bm,m,2,"Right column\n\n\u2022 Point C\n\u2022 Point D",0,0,"",D.ct,D.d_,0.42,0.52,0.22)],x.u))
break
case 4:w=f.c
d.e=w.l()
d.f=w.j(0.85).l()
A.d.J(d.z,C.er(A.K,!1,4294967295,A.aH,"",n,42,A.bt,A.u,"",0.2,C.cE(),p,"","",0,!1,"",0,D.bm,m,2,"Section Header",0,0,"",D.ct,D.d_,0.84,0.08,0.38))
break
case 5:w=d.z
v=C.cE()
v=C.er(A.bp,!1,f.d.l(),A.aH,"",n,30,A.bt,A.u,"",0.12,v,p,"","",0,!1,"",0,D.bm,m,2,"Compare",0,0,"",D.ct,D.d_,0.88,0.06,0.06)
u=C.cE()
t=f.c
u=C.er(A.bp,!1,l,A.aH,"",t.j(0.12).l(),24,A.bt,A.a8,"",0.68,u,p,"","",0,!1,"",0,D.bm,t.l(),2,"",0,0,"",D.ct,D.fi,0.42,0.06,0.22)
s=C.cE()
r=f.e
s=C.er(A.bp,!1,r.l(),A.aH,"",n,20,A.bt,A.U,"",0.6,s,p,"","",0,!1,"",0,D.bm,m,2,"Option A",0,0,"",D.ct,D.d_,0.38,0.08,0.26)
q=C.cE()
t=C.er(A.bp,!1,l,A.aH,"",t.j(0.06).l(),24,A.bt,A.a8,"",0.68,q,p,"","",0,!1,"",0,D.bm,t.j(0.5).l(),2,"",0,0,"",D.ct,D.fi,0.42,0.52,0.22)
q=C.cE()
A.d.v(w,B.a([v,u,s,t,C.er(A.bp,!1,r.l(),A.aH,"",n,20,A.bt,A.U,"",0.6,q,p,"","",0,!1,"",0,D.bm,m,2,"Option B",0,0,"",D.ct,D.d_,0.38,0.54,0.26)],x.u))
break
case 6:w=d.z
v=C.cE()
v=C.er(A.K,!1,f.d.l(),A.aH,"",n,36,A.bt,A.u,"",0.35,v,p,"","",0,!1,"",0,D.bm,m,2,"TERM / QUESTION",0,0,"",D.ct,D.d_,0.8,0.1,0.12)
u=C.cE()
A.d.v(w,B.a([v,C.er(A.K,!1,f.e.l(),A.aH,"",n,22,A.bt,A.cE,"",0.35,u,p,"","",0,!1,"",0,D.bm,m,2,"Definition or answer \u2014 flip mentally when presenting",0,0,"",D.ct,D.d_,0.8,0.1,0.52)],x.u))
break
case 7:w=d.z
v=C.cE()
v=C.er(A.bp,!1,f.d.l(),A.aH,"",n,28,A.bt,A.u,"",0.18,v,p,"","",0,!1,"",0,D.bm,m,2,"Quiz Question",0,0,"",D.ct,D.d_,0.88,0.06,0.06)
u=C.cE()
A.d.v(w,B.a([v,C.er(A.bp,!1,f.e.l(),A.aH,"",n,20,A.bt,A.a8,"",0.62,u,p,"","",0,!1,"",0,D.bm,m,2,"A) Answer choice\nB) Answer choice\nC) Answer choice\nD) Answer choice",0,0,"",D.ct,D.d_,0.84,0.08,0.28)],x.u))
break
case 8:w=d.z
v=C.cE()
v=C.er(A.bp,!1,f.d.l(),A.aH,"",n,26,A.bt,A.u,"",0.1,v,p,"","",0,!1,"",0,D.bm,m,2,"Worksheet / Assignment",0,0,"",D.ct,D.d_,0.88,0.06,0.04)
u=C.cE()
A.d.v(w,B.a([v,C.er(A.bp,!1,f.e.l(),A.aH,"",n,18,A.bt,A.a8,"",0.78,u,p,"","",0,!1,"",0,D.bm,m,2,"Name: _______________\nDate: _______________\n\n1. _________________________________\n\n2. _________________________________\n\n3. _________________________________",0,0,"",D.ct,D.d_,0.88,0.06,0.16)],x.u))
break}},
hYe(d){return A.d.dP(D.a5w,new C.clc(d),new C.cld())},
hYb(d){var w,v,u,t,s,r,q,p
if(A.a.i(d).length===0)return B.a([],x.D)
try{w=A.X.aQ(0,d,null)
if(!x.j.b(w)){t=B.a([],x.D)
return t}v=B.a([],x.D)
for(t=J.aT(w),s=x.N,r=x.z,q=x.f;t.C();){u=t.gR(t)
if(!q.b(u))continue
try{J.c7(v,C.Xh(B.a2(u,s,r)))}catch(p){}}return v}catch(p){t=B.a([],x.D)
return t}},
h9L(d,e){var w,v,u,t=B.T(x.N,x.I),s=new C.cl7(t)
for(w=J.aT(d);w.C();)s.$1(w.gR(w))
for(w=e.length,v=0;v<e.length;e.length===w||(0,B.J)(e),++v)s.$1(e[v])
w=t.$ti.k("b7<2>")
u=B.C(new B.b7(t,w),w.k("M.E"))
A.d.aZ(u,new C.cl6())
return u},
hrt(d,e){var w,v,u=d.length
if(u===0)return e
w=e.length
if(w===0)return d
v=new C.cl2()
if(u!==w)return u>=w?d:e
return v.$1(d).ca(v.$1(e))?d:e},
asZ(d){return C.hY9(d)},
hY9(d){var w=0,v=B.j(x.R),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$asZ=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=A.a.i(d.toLowerCase())
l=new C.cl5()
k=x.D
j=B.a([],k)
t=4
g=l
w=7
return B.b(B.a3R(m),$async$asZ)
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
return B.b(B.aA(),$async$asZ)
case 12:q=f
k=A.a.i(d.toLowerCase())
r=l.$1(B.aV(J.t(q.a,"ngmy_slides_decks_"+k)))
t=2
w=11
break
case 9:t=8
h=s.pop()
w=11
break
case 8:w=2
break
case 11:o=l.$1($.hrs.h(0,m))
n=C.h9L(C.h9L(j,r),o)
if(n.length===0){u=C.hrt(C.hrt(j,r),o)
w=1
break}u=n
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$asZ,v)},
cl1(d){return C.hY8(d)},
hY8(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o
var $async$cl1=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.aA(),$async$cl1)
case 7:r=f
q=r.tU("ngmy_slides_deleted_"+A.a.i(d.toLowerCase()))
if(q==null)q=A.Z
q=B.jB(q,B.U(q).c)
u=q
w=1
break
t=2
w=6
break
case 4:t=3
o=s.pop()
u=B.aR(x.N)
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$cl1,v)},
b3A(d,e){return C.hYa(d,e)},
hYa(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m
var $async$b3A=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.aA(),$async$b3A)
case 6:s=g
q=s.tU("ngmy_slides_deleted_"+A.a.i(d.toLowerCase()))
if(q==null)q=B.a([],x.s)
A.d.J(q,e)
r=q
p=A.a.i(d.toLowerCase())
o=J.ad(r)>500?J.Mh(r,J.ad(r)-500):r
w=7
return B.b(s.aC("StringList","ngmy_slides_deleted_"+p,o),$async$b3A)
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
return B.i($async$b3A,v)},
Xi(d,e){return C.hYc(d,e)},
hYc(a3,a4){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$Xi=B.e(function(a5,a6){if(a5===1){s.push(a6)
w=t}for(;;)switch(w){case 0:a0=A.a.i(a3.toLowerCase())
if(J.ad(a0)===0){w=1
break}p=$.hrr.h(0,a0)
w=p==null?3:4
break
case 3:w=5
return B.b(C.asZ(a3),$async$Xi)
case 5:p=a6
case 4:w=6
return B.b(C.cl1(a3),$async$Xi)
case 6:o=a6
n=B.T(x.N,x.I)
for(m=J.aT(p);m.C();){l=m.gR(m)
k=l.a
if(A.a.i(k).length!==0)n.n(0,k,l)}for(m=a4.length,j=0;j<a4.length;a4.length===m||(0,B.J)(a4),++j){i=a4[j]
l=i.a
if(A.a.i(l).length===0)continue
h=n.h(0,l)
if(h!=null){k=h.f
g=i.f
f=k.a
if(f<=g.gbq())k=f===g.gbq()&&k.b>g.gcA()
else k=!0
k=!k}else k=!0
if(k)n.n(0,l,i)}m=n.$ti.k("b7<2>")
l=m.k("Y<M.E>")
e=B.C(new B.Y(new B.b7(n,m),new C.cl8(o),l),l.k("M.E"))
A.d.aZ(e,new C.cl9())
$.hrr.n(0,a0,e)
n=B.U(e).k("N<1,a9<n,@>>")
n=B.C(new B.N(e,new C.cla(),n),n.k("ak.E"))
r=A.X.aw(n,null)
$.hrs.n(0,a0,r)
t=8
w=11
return B.b(B.aiI(a0,r),$async$Xi)
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
return B.b(B.aA(),$async$Xi)
case 16:q=a6
w=17
return B.b(q.aC("String","ngmy_slides_decks_"+A.a.i(a3.toLowerCase()),r),$async$Xi)
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
return B.i($async$Xi,v)},
JL:function JL(d,e){this.a=d
this.b=e},
asX:function asX(d,e){this.a=d
this.b=e},
vj:function vj(d,e){this.a=d
this.b=e},
mV:function mV(d,e){this.a=d
this.b=e},
hF:function hF(d,e){this.a=d
this.b=e},
eQ:function eQ(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){var _=this
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
m1:function m1(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
ckW:function ckW(){},
ckX:function ckX(){},
ckV:function ckV(){},
hQ:function hQ(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3){var _=this
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
ckL:function ckL(){},
ckM:function ckM(){},
ckI:function ckI(){},
ckJ:function ckJ(){},
ckK:function ckK(){},
k0:function k0(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
clc:function clc(d){this.a=d},
cld:function cld(){},
cl7:function cl7(d){this.a=d},
cl6:function cl6(){},
cl2:function cl2(){},
cl3:function cl3(){},
cl4:function cl4(){},
cl5:function cl5(){},
cl8:function cl8(d){this.a=d},
cl9:function cl9(){},
cla:function cla(){},
inL(d,e){var w=x.N,v=B.T(w,x.F)
w=new C.fSc(e,v,d,B.aR(w))
w.$1(new C.fS8())
w.$1(new C.fS9())
w.$1(new C.fSa())
w.$1(new C.fSb())
return v},
fSc:function fSc(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fS8:function fS8(){},
fS9:function fS9(){},
fSa:function fSa(){},
fSb:function fSb(){},
b3x:function b3x(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ckR:function ckR(d){this.a=d},
ckQ:function ckQ(){},
ckS:function ckS(){},
ckT:function ckT(d,e){this.a=d
this.b=e},
ckU:function ckU(d){this.a=d},
aq0:function aq0(d,e){this.c=d
this.a=e},
blP:function blP(d,e){var _=this
_.d=$
_.bw$=d
_.a9$=e
_.c=_.a=null},
dQB:function dQB(){},
aNh:function aNh(){},
ckZ(d,e,f){var w=0,v=B.j(x.y),u,t
var $async$ckZ=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:if(f){u=!0
w=1
break}t=A.a.i(e)
if(t.length===0){if(d.e!=null)d.L(x.q).f.T(D.fkv)
u=!1
w=1
break}u=B.ld(!1,d,t,!1,null,A.a8g,null)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ckZ,v)},
hY6(d){var w=A.d.bj(D.Ip,new C.cl_(d))
if(w<0)return!0
return w>=4},
hY7(d){var w=A.d.bj($.bH2(),new C.cl0(d))
if(w<0)return!0
return w>=5},
cl_:function cl_(d){this.a=d},
cl0:function cl0(d){this.a=d},
ipu(d,e,f){var w,v=null,u=""+f,t="ngmy-pdf-"+A.a.gX(d)+"-"+u,s=f>0?d+"#page="+u:d
$.xu()
$.pY().pe(t,new C.fV3(s),!0)
u=B.a([B.BZ(v,A.pO,t)],x.p)
if(e.length!==0){w=B.m(4)
u.push(B.ap(v,B.q(v,B.d(e,v,v,v,v,v,v,D.fvA,v,v,v),A.f,v,v,new B.p(A.b6,v,v,w,v,v,A.n),v,v,v,v,A.n_,v,v,v),v,v,4,v,4,v))}return new B.an(A.a0,v,A.b0,A.t,u,v)},
fV3:function fV3(d){this.a=d},
ip5(){return C.hhd()},
ilU(){return C.bF_()},
io3(){return C.hh4()},
aRF(d,e,f){var w=0,v=B.j(x.H),u
var $async$aRF=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:w=e==="__ngmy_slides_pdf_staged__"?3:4
break
case 3:w=5
return B.b(C.fU9(d,f),$async$aRF)
case 5:w=1
break
case 4:if(d.e!=null)d.L(x.q).f.T(B.b3(null,null,null,null,null,A.t,null,B.d(e,null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$aRF,v)},
fU9(d,e){var w=0,v=B.j(x.H),u
var $async$fU9=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:u=$.bD9
if(u==null)u=e+".pdf"
w=2
return B.b(B.bU(A.L,null,new C.fUa(u,e==="Invoice"),d,!0,!1,!0,null,!1,!1,x.H),$async$fU9)
case 2:return B.h(null,v)}})
return B.i($async$fU9,v)},
fUa:function fUa(d,e){this.a=d
this.b=e},
aeM:function aeM(d,e,f){this.c=d
this.d=e
this.a=f},
eCz:function eCz(d,e){this.a=d
this.b=e},
eCA:function eCA(d,e){this.a=d
this.b=e},
eCB:function eCB(d,e){this.a=d
this.b=e},
eCC:function eCC(d){this.a=d},
af2:function af2(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
b3w(d,e,f,g,h,i,j,k,l,m,n,o){return new C.b3v(g,m,f,d,e,h,l,k,j,o,i,null)},
hE8(d){return B.cq(new C.fS7(d))},
hhf(d){switch(d.a){case 0:return"\u23ed\ufe0f"
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
ipd(d){if(d===D.ct)return"None"
return C.hhf(d)},
bDF(d,e,f,g){return C.ieM(d,e,f,g)},
ieM(d,e,f,g){var w=0,v=B.j(x.H),u,t,s
var $async$bDF=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:s={}
if(d.e==null){w=1
break}t=B.a6(d,!0)
if($.hdQ&&t.pZ())t.eA()
$.hdQ=!0
s.a=null
w=3
return B.b(B.hK(A.bq,!0,"Animation preview",d,new C.fAE(s,e,g,f),null,A.eG,!0,x.H),$async$bDF)
case 3:s=s.a
if(s!=null)s.a1(0)
$.hdQ=!1
case 1:return B.h(u,v)}})
return B.i($async$bDF,v)},
h3U(d,e,f){var w=0,v=B.j(x.H),u,t,s,r
var $async$h3U=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:e.$0()
if(d.e==null){w=1
break}t=A.i.D(B.aF(d,A.c1,x.w).w.a.a*0.88,280,440)
s=f===D.ct
r=s?"\u23ed\ufe0f None \u2014 no slide transition":C.hhf(f)+" Slide transition preview"
s=s?Ah.GH:A.qw
w=3
return B.b(C.bDF(d,s,new B.a5(t,t*0.56,B.bw(B.m(14),new C.aKO(f,null),A.aq),null),r),$async$h3U)
case 3:case 1:return B.h(u,v)}})
return B.i($async$h3U,v)},
hDp(d,e,f){var w,v,u=null,t=A.cw.aA(0,A.i.D(e,0,1))
switch(d.a){case 0:return f
case 1:case 13:case 18:return B.d3(f,t)
case 2:case 17:return B.dN(B.d3(f,t),new B.o((1-t)*48,0))
case 3:return B.dN(B.d3(f,t),new B.o(-(1-t)*48,0))
case 4:case 21:return B.dN(B.d3(f,t),new B.o(0,(1-t)*36))
case 5:return B.dN(B.d3(f,t),new B.o(0,-(1-t)*36))
case 6:case 16:return B.e1(A.A,B.d3(f,t),0.5+t*0.5,u,u)
case 7:return B.e1(A.A,B.d3(f,t),1.4-t*0.4,u,u)
case 8:w=B.dr()
v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
w.fL((1-t)*1.2)
return B.fz(A.A,B.d3(f,t),u,w,!0)
case 9:w=B.dr()
v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
w.kn((1-t)*1.2)
return B.fz(A.A,B.d3(f,t),u,w,!0)
case 10:case 19:w=B.dr()
v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.002
w.n2((1-t)*0.8)
v=0.6+t*0.4
w.k5(v,v,v,1)
return B.fz(A.A,B.d3(f,t),u,w,!0)
case 11:case 12:case 14:case 15:case 20:return B.dN(B.d3(f,t),new B.o((1-t)*24,0))}},
bGx(d,e,f){var w=0,v=B.j(x.H),u,t,s,r
var $async$bGx=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:e.$0()
if(d.e==null){w=1
break}t=A.i.D(B.aF(d,A.c1,x.w).w.a.a*0.88,300,440)
s=f===D.ct
r=s?"\u23ed\ufe0f None \u2014 no element animation":C.hhf(f)+" Element animation preview"
s=s?Ah.GH:A.qw
w=3
return B.b(C.bDF(d,s,new B.a5(t,t*0.62,B.bw(B.m(14),new C.aBt(f,null),A.aq),null),r),$async$bGx)
case 3:case 1:return B.h(u,v)}})
return B.i($async$bGx,v)},
ipc(d){var w,v,u,t,s=$.ahn.W(0,d)
if(s!=null){$.ahn.n(0,d,s)
return s}w=A.cM.aN(A.a.b2(d,A.a.co(d,",")+1))
$.ahn.n(0,d,w)
v=$.heI=$.heI+w.length
u=B.a4($.ahn).k("cx<1>")
for(;;){if(!(v>41943040&&$.ahn.a>1))break
t=new B.cx($.ahn,u).gae(0)
if(!t.C())B.bj(B.fp())
v-=$.ahn.W(0,t.gR(0)).length
$.heI=v}return w},
ioS(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=B.ag("\\*([^*]+)\\*|\\^([^^]+)\\^|~([^~]+)~",!0,!1,!1,!1).kZ(0,d),j=B.C(k,B.a4(k).k("M.E"))
if(j.length===0)return l
w=e.r
if(w==null)w=24
v=B.a([],x.aF)
for(k=j.length,u=w*0.62,t=w*2.4,s=w*1.6,r=0,q=0;q<j.length;j.length===k||(0,B.J)(j),++q){p=j[q].b
o=p.index
if(o>r){n=A.a.aB(d,r,o)
m=f.$1(e)
v.push(new B.eo(n,l,l,A.cN,l,l,l,l,l,l,m))}n=p[1]
if(n!=null){m=f.$1(e.TC(s,A.u))
v.push(new B.eo(n,l,l,A.cN,l,l,l,l,l,l,m))}else{n=p[2]
if(n!=null){m=f.$1(e.TC(t,A.u))
v.push(new B.eo(n,l,l,A.cN,l,l,l,l,l,l,m))}else{n=p[3]
m=f.$1(e.TC(u,A.cE))
v.push(new B.eo(n,l,l,A.cN,l,l,l,l,l,l,m))}}r=o+p[0].length}if(r<d.length){k=A.a.b2(d,r)
v.push(B.cQ(l,l,l,l,l,l,l,l,l,f.$1(e),k))}return v},
a3Q(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=x.v
switch(d){case"circle":m=new B.aG($.S().r,A.ai,n,n,B.a([],m))
m.E(new B.jS(e))
return m
case"rounded":m=new B.aG($.S().r,A.ai,n,n,B.a([],m))
w=e.gdA()*0.18
m.E(new B.j8(B.bn(e,new B.aN(w,w))))
return m
case"triangle":m=new B.aG($.S().r,A.ai,n,n,B.a([],m))
m.E(new B.aZ(e.gbx().a,e.b))
w=e.d
m.E(new B.aq(e.c,w))
m.E(new B.aq(e.a,w))
m.E(new B.bt())
return m
case"hexagon":w=$.S()
m=B.a([],m)
v=new B.aG(w.r,A.ai,n,n,m)
for(w=e.a,u=e.c-w,w+=u/2,t=e.b,s=e.d-t,t+=s/2,r=0;r<6;++r){q=0.5235987755982988+r*3.141592653589793/3
p=w+Math.cos(q)*u/2
o=t+Math.sin(q)*s/2
if(r===0){p=new B.aZ(p,o)
m.push(p)
o=v.f
if(o!=null)p.ak(o)
v.ab()}else{p=new B.aq(p,o)
m.push(p)
o=v.f
if(o!=null)p.ak(o)
v.ab()}}v.E(new B.bt())
return v
case"diamond":m=new B.aG($.S().r,A.ai,n,n,B.a([],m))
m.E(new B.aZ(e.gbx().a,e.b))
m.E(new B.aq(e.c,e.gbx().b))
m.E(new B.aq(e.gbx().a,e.d))
m.E(new B.aq(e.a,e.gbx().b))
m.E(new B.bt())
return m
case"arch":m=new B.aG($.S().r,A.ai,n,n,B.a([],m))
w=e.a
u=e.d
m.E(new B.aZ(w,u))
t=e.c
s=(t-w)/2
p=e.b+s
m.E(new B.aq(w,p))
m.bdA(new B.o(t,p),new B.aN(s,s))
m.E(new B.aq(t,u))
m.E(new B.bt())
return m
default:m=new B.aG($.S().r,A.ai,n,n,B.a([],m))
m.E(new B.ox(e))
return m}},
fPE(d,e,f){return B.cq(new C.fPF(D.fcE.q(0,d),d,f,e))},
b3v:function b3v(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
ckP:function ckP(d){this.a=d},
ckO:function ckO(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ckN:function ckN(){},
b3s:function b3s(d,e){this.b=d
this.a=e},
fS7:function fS7(d){this.a=d},
fS6:function fS6(d,e){this.a=d
this.b=e},
fAE:function fAE(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fAC:function fAC(d){this.a=d},
fAD:function fAD(d,e){this.a=d
this.b=e},
aKO:function aKO(d,e){this.c=d
this.a=e},
bxj:function bxj(d,e){var _=this
_.d=$
_.bw$=d
_.a9$=e
_.c=_.a=null},
fhi:function fhi(d,e,f){this.a=d
this.b=e
this.c=f},
aLv:function aLv(d,e){this.b=d
this.a=e},
Wo:function Wo(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bm2:function bm2(d,e){var _=this
_.d=$
_.bw$=d
_.a9$=e
_.c=_.a=null},
e1q:function e1q(d){this.a=d},
e1p:function e1p(d){this.a=d},
e1o:function e1o(d){this.a=d},
JK:function JK(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ckH:function ckH(d){this.a=d},
ckG:function ckG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aBt:function aBt(d,e){this.c=d
this.a=e},
bgl:function bgl(){this.d=0
this.c=this.a=null},
dfa:function dfa(d){this.a=d},
df9:function df9(d){this.a=d},
a93:function a93(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bmJ:function bmJ(d,e){var _=this
_.d=null
_.bw$=d
_.a9$=e
_.c=_.a=null},
epW:function epW(d,e,f){this.a=d
this.b=e
this.c=f},
b1r:function b1r(d,e,f,g){var _=this
_.c=d
_.e=e
_.f=f
_.a=g},
bhy:function bhy(d,e,f){this.b=d
this.c=e
this.a=f},
bsO:function bsO(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
f6c:function f6c(){},
fPF:function fPF(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
btS:function btS(d,e,f){this.b=d
this.c=e
this.a=f},
aNx:function aNx(){},
aO1:function aO1(){},
aPl:function aPl(){},
fT8(){var w=0,v=B.j(x.a6),u,t,s,r
var $async$fT8=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.xQ.cq().MI(D.dum,A.uG,!0),$async$fT8)
case 3:r=e
if(r==null||J.cs(r.a)){u=null
w=1
break}t=J.fs(r.a)
s=t.c
if(s==null)throw B.W("That file could not be opened. Try another file.")
if(s.length>8388608)throw B.W("That file is too big. Use a file under 8 MB.")
u=C.ioM(t.b,s)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fT8,v)},
ioM(d,e){var w,v=d.toLowerCase()
if(A.a.c7(v,".pdf"))return new C.a9m(d,new B.a1o(A.cT.gcu().aN(e),"application/pdf"),"")
if(A.a.c7(v,".docx")){w=C.igD(e)
if(A.a.i(w).length===0)throw B.W("No readable words were found in that Word file.")
return new C.a9m(d,null,w.length>6e4?A.a.aB(w,0,6e4):w)}w=A.ca.Lu(0,e,!0)
if(A.a.i(w).length===0)throw B.W("That file is empty.")
return new C.a9m(d,null,w.length>6e4?A.a.aB(w,0,6e4):w)},
igD(d){var w,v,u,t,s,r,q,p,o=null,n=new C.cGJ().cQw(B.rK(d,A.iu,o,o),o,o,!1).cSr(0,"word/document.xml")
if(n==null)return""
w=n.d_B()
v=A.ca.Lu(0,w==null?$.hGy():w,!0).split("</w:p>")
u=new B.fd("")
for(w=v.length,t=x.N,s=0;s<w;++s){r=v[s]
q=B.ag("<w:t[^>]*>([^<]*)</w:t>",!0,!1,!1,!1).kZ(0,r)
p=A.a.i(B.cF(q,new C.fDL(),B.a4(q).k("M.E"),t).he(0))
if(p.length!==0){q=B.aL(p,"&lt;","<")
q=B.aL(q,"&gt;",">")
q=B.aL(q,"&quot;",'"')
q=B.aL(q,"&apos;","'")
q=B.aL(q,"&amp;","&")+"\n"
u.a+=q}}w=u.a
return w.charCodeAt(0)==0?w:w},
a9m:function a9m(d,e,f){this.a=d
this.b=e
this.c=f},
fDL:function fDL(){},
hYd(d,e,f,g,h,i,j,k,l){return new C.OV(l,e,d,g,f,i,h,j,k,null)},
OV:function OV(d,e,f,g,h,i,j,k,l,m){var _=this
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
aGl:function aGl(d,e,f,g,h,i,j,k,l){var _=this
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
_.bw$=k
_.a9$=l
_.c=_.a=null},
eIO:function eIO(d){this.a=d},
eIM:function eIM(){},
eIN:function eIN(d){this.a=d},
eFb:function eFb(){},
eFc:function eFc(){},
eFd:function eFd(d,e){this.a=d
this.b=e},
eGM:function eGM(d){this.a=d},
eGA:function eGA(){},
eGB:function eGB(){},
eEz:function eEz(){},
eHU:function eHU(d){this.a=d},
eIK:function eIK(d,e){this.a=d
this.b=e},
eGK:function eGK(d,e){this.a=d
this.b=e},
eIx:function eIx(d){this.a=d},
eIy:function eIy(){},
eIz:function eIz(){},
eIA:function eIA(d){this.a=d},
eIB:function eIB(){},
eDY:function eDY(d){this.a=d},
eIL:function eIL(){},
eFT:function eFT(d,e){this.a=d
this.b=e},
eDW:function eDW(d){this.a=d},
eDX:function eDX(d){this.a=d},
eGf:function eGf(d){this.a=d},
eGg:function eGg(d,e,f){this.a=d
this.b=e
this.c=f},
eGh:function eGh(d){this.a=d},
eFS:function eFS(){},
eFR:function eFR(d){this.a=d},
eFP:function eFP(){},
eFO:function eFO(d){this.a=d},
eFQ:function eFQ(){},
eF7:function eF7(d){this.a=d},
eF8:function eF8(d){this.a=d},
eFZ:function eFZ(d){this.a=d},
eFU:function eFU(d){this.a=d},
eFV:function eFV(d){this.a=d},
eFW:function eFW(d){this.a=d},
eFX:function eFX(d){this.a=d},
eFY:function eFY(d){this.a=d},
eG_:function eG_(d,e){this.a=d
this.b=e},
eE_:function eE_(){},
eE0:function eE0(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eGa:function eGa(){},
eGb:function eGb(d,e){this.a=d
this.b=e},
eG8:function eG8(d,e,f){this.a=d
this.b=e
this.c=f},
eG9:function eG9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eG2:function eG2(d,e,f){this.a=d
this.b=e
this.c=f},
eG3:function eG3(d,e,f){this.a=d
this.b=e
this.c=f},
eG4:function eG4(d){this.a=d},
eG5:function eG5(d,e){this.a=d
this.b=e},
eG6:function eG6(d,e){this.a=d
this.b=e},
eG7:function eG7(d,e){this.a=d
this.b=e},
eG1:function eG1(d,e){this.a=d
this.b=e},
eGd:function eGd(d){this.a=d},
eGe:function eGe(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eGc:function eGc(d){this.a=d},
eGv:function eGv(){},
eGw:function eGw(){},
eGx:function eGx(){},
eGy:function eGy(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eGs:function eGs(d){this.a=d},
eGu:function eGu(){},
eGt:function eGt(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
eGq:function eGq(d,e,f){this.a=d
this.b=e
this.c=f},
eGr:function eGr(d,e){this.a=d
this.b=e},
eGz:function eGz(){},
eG0:function eG0(d,e){this.a=d
this.b=e},
eEg:function eEg(){},
eEh:function eEh(d,e,f){this.a=d
this.b=e
this.c=f},
eEi:function eEi(d){this.a=d},
eEj:function eEj(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eEf:function eEf(d){this.a=d},
eGF:function eGF(d){this.a=d},
eGE:function eGE(d,e){this.a=d
this.b=e},
eGD:function eGD(d,e){this.a=d
this.b=e},
eGC:function eGC(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eGG:function eGG(d,e){this.a=d
this.b=e},
eCU:function eCU(d,e){this.a=d
this.b=e},
eEe:function eEe(d,e){this.a=d
this.b=e},
eEc:function eEc(d){this.a=d},
eGO:function eGO(d,e,f){this.a=d
this.b=e
this.c=f},
eE8:function eE8(d,e){this.a=d
this.b=e},
eE7:function eE7(d){this.a=d},
eGN:function eGN(d,e,f){this.a=d
this.b=e
this.c=f},
eDZ:function eDZ(d){this.a=d},
eEA:function eEA(){},
eIv:function eIv(d,e){this.a=d
this.b=e},
eIw:function eIw(d,e,f){this.a=d
this.b=e
this.c=f},
eHV:function eHV(d,e,f){this.a=d
this.b=e
this.c=f},
eCV:function eCV(d){this.a=d},
eCS:function eCS(d,e){this.a=d
this.b=e},
eCI:function eCI(d,e){this.a=d
this.b=e},
eCF:function eCF(d){this.a=d},
eCE:function eCE(d,e){this.a=d
this.b=e},
eCG:function eCG(d,e){this.a=d
this.b=e},
eEa:function eEa(d){this.a=d},
eEb:function eEb(d,e){this.a=d
this.b=e},
eE9:function eE9(d){this.a=d},
eDm:function eDm(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
eDn:function eDn(d,e){this.a=d
this.b=e},
eDr:function eDr(d,e){this.a=d
this.b=e},
eDs:function eDs(d){this.a=d},
eDp:function eDp(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eDq:function eDq(d){this.a=d},
eDo:function eDo(){},
eDl:function eDl(d,e,f){this.a=d
this.b=e
this.c=f},
eGp:function eGp(d,e){this.a=d
this.b=e},
eIE:function eIE(d){this.a=d},
eIF:function eIF(d,e){this.a=d
this.b=e},
eIG:function eIG(d){this.a=d},
eIH:function eIH(d,e,f){this.a=d
this.b=e
this.c=f},
eID:function eID(d){this.a=d},
eIa:function eIa(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eI9:function eI9(d,e,f){this.a=d
this.b=e
this.c=f},
eI8:function eI8(){},
eI7:function eI7(d,e,f){this.a=d
this.b=e
this.c=f},
eI6:function eI6(d,e){this.a=d
this.b=e},
eI3:function eI3(d,e,f){this.a=d
this.b=e
this.c=f},
eI1:function eI1(d){this.a=d},
eI2:function eI2(d){this.a=d},
eI5:function eI5(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eI4:function eI4(d){this.a=d},
eF3:function eF3(d,e){this.a=d
this.b=e},
eF2:function eF2(d,e){this.a=d
this.b=e},
eHW:function eHW(){},
eIu:function eIu(d,e){this.a=d
this.b=e},
eIs:function eIs(d){this.a=d},
eIt:function eIt(d){this.a=d},
eCN:function eCN(d,e){this.a=d
this.b=e},
eCL:function eCL(d){this.a=d},
eCM:function eCM(d){this.a=d},
eCO:function eCO(d,e){this.a=d
this.b=e},
eCP:function eCP(d,e,f){this.a=d
this.b=e
this.c=f},
eCT:function eCT(d,e){this.a=d
this.b=e},
eCK:function eCK(d,e,f){this.a=d
this.b=e
this.c=f},
eCJ:function eCJ(d){this.a=d},
eGL:function eGL(d,e,f){this.a=d
this.b=e
this.c=f},
eIC:function eIC(d,e,f){this.a=d
this.b=e
this.c=f},
eF6:function eF6(d,e,f){this.a=d
this.b=e
this.c=f},
eF5:function eF5(){},
eDv:function eDv(d,e,f){this.a=d
this.b=e
this.c=f},
eDw:function eDw(d){this.a=d},
eCH:function eCH(d,e){this.a=d
this.b=e},
eEy:function eEy(d,e){this.a=d
this.b=e},
eCQ:function eCQ(d,e){this.a=d
this.b=e},
eCZ:function eCZ(d){this.a=d},
eD_:function eD_(d,e){this.a=d
this.b=e},
eD0:function eD0(d,e){this.a=d
this.b=e},
eCY:function eCY(d){this.a=d},
eDb:function eDb(d,e){this.a=d
this.b=e},
eCX:function eCX(d){this.a=d},
eDe:function eDe(d){this.a=d},
eDf:function eDf(d){this.a=d},
eDg:function eDg(d){this.a=d},
eDh:function eDh(d){this.a=d},
eDi:function eDi(d){this.a=d},
eDj:function eDj(){},
eDk:function eDk(){},
eD1:function eD1(d){this.a=d},
eD2:function eD2(d){this.a=d},
eD3:function eD3(d){this.a=d},
eD4:function eD4(d){this.a=d},
eD5:function eD5(d){this.a=d},
eD6:function eD6(d){this.a=d},
eD7:function eD7(d){this.a=d},
eD8:function eD8(d){this.a=d},
eD9:function eD9(d){this.a=d},
eDa:function eDa(d){this.a=d},
eDc:function eDc(d){this.a=d},
eDd:function eDd(d,e){this.a=d
this.b=e},
eEx:function eEx(d,e,f){this.a=d
this.b=e
this.c=f},
eEw:function eEw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eEv:function eEv(d,e,f){this.a=d
this.b=e
this.c=f},
eEu:function eEu(d,e){this.a=d
this.b=e},
eCR:function eCR(d,e){this.a=d
this.b=e},
eDz:function eDz(d){this.a=d},
eDy:function eDy(d){this.a=d},
eDx:function eDx(d,e){this.a=d
this.b=e},
eDA:function eDA(d){this.a=d},
eDB:function eDB(d){this.a=d},
eDC:function eDC(){},
eDD:function eDD(d,e){this.a=d
this.b=e},
eEd:function eEd(d){this.a=d},
eGo:function eGo(d,e){this.a=d
this.b=e},
eGn:function eGn(d,e){this.a=d
this.b=e},
eGm:function eGm(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eGk:function eGk(d){this.a=d},
eGl:function eGl(d,e){this.a=d
this.b=e},
eGi:function eGi(){},
eGj:function eGj(){},
eHX:function eHX(){},
eHY:function eHY(d,e,f){this.a=d
this.b=e
this.c=f},
eHZ:function eHZ(){},
eI_:function eI_(d){this.a=d},
eI0:function eI0(d,e){this.a=d
this.b=e},
eCW:function eCW(d,e){this.a=d
this.b=e},
eE1:function eE1(){},
eE2:function eE2(){},
eE3:function eE3(){},
eE6:function eE6(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eE5:function eE5(d,e){this.a=d
this.b=e},
eE4:function eE4(d,e,f){this.a=d
this.b=e
this.c=f},
eFx:function eFx(d){this.a=d},
eFw:function eFw(){},
eFy:function eFy(d,e){this.a=d
this.b=e},
eFz:function eFz(d,e){this.a=d
this.b=e},
eFv:function eFv(d){this.a=d},
eFA:function eFA(d,e){this.a=d
this.b=e},
eFu:function eFu(d){this.a=d},
eFB:function eFB(d,e){this.a=d
this.b=e},
eFt:function eFt(d){this.a=d},
eFC:function eFC(d,e){this.a=d
this.b=e},
eFs:function eFs(d){this.a=d},
eFD:function eFD(d,e){this.a=d
this.b=e},
eFr:function eFr(d,e){this.a=d
this.b=e},
eFE:function eFE(d,e){this.a=d
this.b=e},
eFq:function eFq(d){this.a=d},
eFF:function eFF(d,e){this.a=d
this.b=e},
eFp:function eFp(d){this.a=d},
eFi:function eFi(d,e){this.a=d
this.b=e},
eFj:function eFj(d){this.a=d},
eFk:function eFk(d){this.a=d},
eFh:function eFh(d){this.a=d},
eFl:function eFl(d,e){this.a=d
this.b=e},
eFg:function eFg(d){this.a=d},
eFm:function eFm(d,e){this.a=d
this.b=e},
eFf:function eFf(d){this.a=d},
eFn:function eFn(d,e){this.a=d
this.b=e},
eFe:function eFe(d){this.a=d},
eFo:function eFo(d){this.a=d},
eEq:function eEq(d){this.a=d},
eEr:function eEr(d){this.a=d},
eEt:function eEt(d){this.a=d},
eEl:function eEl(d){this.a=d},
eEk:function eEk(d,e){this.a=d
this.b=e},
eEm:function eEm(d,e){this.a=d
this.b=e},
eEn:function eEn(d){this.a=d},
eEo:function eEo(d){this.a=d},
eEp:function eEp(d,e){this.a=d
this.b=e},
eEs:function eEs(d){this.a=d},
eII:function eII(d){this.a=d},
eIJ:function eIJ(d){this.a=d},
eFI:function eFI(d,e){this.a=d
this.b=e},
eFH:function eFH(d,e){this.a=d
this.b=e},
eFG:function eFG(d,e){this.a=d
this.b=e},
eFJ:function eFJ(d){this.a=d},
eFK:function eFK(d){this.a=d},
eH6:function eH6(d,e){this.a=d
this.b=e},
eH7:function eH7(d){this.a=d},
eH8:function eH8(d){this.a=d},
eHj:function eHj(d){this.a=d},
eHu:function eHu(d){this.a=d},
eHF:function eHF(d){this.a=d},
eHM:function eHM(d){this.a=d},
eHN:function eHN(d){this.a=d},
eHO:function eHO(d){this.a=d},
eHP:function eHP(d){this.a=d},
eHQ:function eHQ(d,e){this.a=d
this.b=e},
eH9:function eH9(d){this.a=d},
eHa:function eHa(d){this.a=d},
eHb:function eHb(d){this.a=d},
eHc:function eHc(d){this.a=d},
eHd:function eHd(d){this.a=d},
eHe:function eHe(d){this.a=d},
eHf:function eHf(d){this.a=d},
eHg:function eHg(d){this.a=d},
eHh:function eHh(d){this.a=d},
eHi:function eHi(d){this.a=d},
eHk:function eHk(d){this.a=d},
eHl:function eHl(d){this.a=d},
eHm:function eHm(d){this.a=d},
eHn:function eHn(d){this.a=d},
eHo:function eHo(d){this.a=d},
eHp:function eHp(d){this.a=d},
eHq:function eHq(d){this.a=d},
eHr:function eHr(d){this.a=d},
eHs:function eHs(d){this.a=d},
eGX:function eGX(d){this.a=d},
eHt:function eHt(d){this.a=d},
eH4:function eH4(d){this.a=d},
eHv:function eHv(d){this.a=d},
eH3:function eH3(d,e){this.a=d
this.b=e},
eHw:function eHw(d,e){this.a=d
this.b=e},
eHx:function eHx(d,e){this.a=d
this.b=e},
eH2:function eH2(d,e,f){this.a=d
this.b=e
this.c=f},
eGT:function eGT(d,e){this.a=d
this.b=e},
eH5:function eH5(d){this.a=d},
eHR:function eHR(d,e){this.a=d
this.b=e},
eHT:function eHT(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eHS:function eHS(d,e){this.a=d
this.b=e},
eHy:function eHy(d,e,f){this.a=d
this.b=e
this.c=f},
eH1:function eH1(d,e,f){this.a=d
this.b=e
this.c=f},
eGS:function eGS(d,e,f){this.a=d
this.b=e
this.c=f},
eGQ:function eGQ(d,e){this.a=d
this.b=e},
eHz:function eHz(d,e){this.a=d
this.b=e},
eH0:function eH0(d,e){this.a=d
this.b=e},
eGR:function eGR(d,e){this.a=d
this.b=e},
eGP:function eGP(d,e){this.a=d
this.b=e},
eHA:function eHA(d){this.a=d},
eH_:function eH_(d){this.a=d},
eHB:function eHB(d){this.a=d},
eHC:function eHC(d){this.a=d},
eHD:function eHD(d){this.a=d},
eHE:function eHE(d){this.a=d},
eGZ:function eGZ(d){this.a=d},
eHG:function eHG(d){this.a=d},
eHH:function eHH(d){this.a=d},
eHI:function eHI(d,e){this.a=d
this.b=e},
eGY:function eGY(d){this.a=d},
eHJ:function eHJ(d,e){this.a=d
this.b=e},
eGW:function eGW(d){this.a=d},
eHK:function eHK(d,e){this.a=d
this.b=e},
eGV:function eGV(d){this.a=d},
eHL:function eHL(d,e){this.a=d
this.b=e},
eGU:function eGU(d){this.a=d},
eDu:function eDu(d,e,f){this.a=d
this.b=e
this.c=f},
eDt:function eDt(d,e){this.a=d
this.b=e},
eId:function eId(d,e){this.a=d
this.b=e},
eIc:function eIc(d,e){this.a=d
this.b=e},
eIe:function eIe(d,e){this.a=d
this.b=e},
eIb:function eIb(d,e){this.a=d
this.b=e},
eED:function eED(d,e){this.a=d
this.b=e},
eEC:function eEC(d){this.a=d},
eEE:function eEE(d,e){this.a=d
this.b=e},
eEB:function eEB(d){this.a=d},
eFa:function eFa(){},
eF9:function eF9(){},
eIq:function eIq(d){this.a=d},
eIp:function eIp(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eIo:function eIo(d,e){this.a=d
this.b=e},
eIj:function eIj(d,e){this.a=d
this.b=e},
eIn:function eIn(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eIk:function eIk(d,e){this.a=d
this.b=e},
eIf:function eIf(d){this.a=d},
eIg:function eIg(d){this.a=d},
eIh:function eIh(d){this.a=d},
eIi:function eIi(d){this.a=d},
eIl:function eIl(d,e){this.a=d
this.b=e},
eIm:function eIm(d,e){this.a=d
this.b=e},
eIr:function eIr(d){this.a=d},
eDV:function eDV(d){this.a=d},
eDU:function eDU(d,e,f){this.a=d
this.b=e
this.c=f},
eDT:function eDT(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eDI:function eDI(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
eDJ:function eDJ(d,e){this.a=d
this.b=e},
eDK:function eDK(d,e){this.a=d
this.b=e},
eDL:function eDL(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eDH:function eDH(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eDM:function eDM(d,e){this.a=d
this.b=e},
eDO:function eDO(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eDN:function eDN(d,e){this.a=d
this.b=e},
eDP:function eDP(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eDG:function eDG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eDQ:function eDQ(d,e){this.a=d
this.b=e},
eDF:function eDF(d,e){this.a=d
this.b=e},
eDR:function eDR(d,e){this.a=d
this.b=e},
eDE:function eDE(d){this.a=d},
eDS:function eDS(d,e){this.a=d
this.b=e},
eFM:function eFM(d){this.a=d},
eFL:function eFL(d){this.a=d},
eFN:function eFN(d,e){this.a=d
this.b=e},
eER:function eER(d,e){this.a=d
this.b=e},
eES:function eES(d,e){this.a=d
this.b=e},
eEQ:function eEQ(d,e){this.a=d
this.b=e},
eET:function eET(d,e){this.a=d
this.b=e},
eEP:function eEP(d,e){this.a=d
this.b=e},
eEU:function eEU(d,e){this.a=d
this.b=e},
eEO:function eEO(d,e){this.a=d
this.b=e},
eEV:function eEV(d,e){this.a=d
this.b=e},
eEN:function eEN(d,e){this.a=d
this.b=e},
eEW:function eEW(d,e){this.a=d
this.b=e},
eEM:function eEM(d,e){this.a=d
this.b=e},
eEX:function eEX(d,e,f){this.a=d
this.b=e
this.c=f},
eEL:function eEL(d,e){this.a=d
this.b=e},
eEY:function eEY(d,e,f){this.a=d
this.b=e
this.c=f},
eEK:function eEK(d,e){this.a=d
this.b=e},
eEZ:function eEZ(d,e){this.a=d
this.b=e},
eEJ:function eEJ(d,e,f){this.a=d
this.b=e
this.c=f},
eEG:function eEG(d,e){this.a=d
this.b=e},
eF_:function eF_(d,e){this.a=d
this.b=e},
eEI:function eEI(d,e){this.a=d
this.b=e},
eF0:function eF0(d,e){this.a=d
this.b=e},
eEH:function eEH(d,e,f){this.a=d
this.b=e
this.c=f},
eEF:function eEF(d,e){this.a=d
this.b=e},
eF1:function eF1(d,e){this.a=d
this.b=e},
eF4:function eF4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eCD:function eCD(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eGJ:function eGJ(d,e){this.a=d
this.b=e},
eGH:function eGH(d){this.a=d},
eGI:function eGI(d,e){this.a=d
this.b=e},
agz:function agz(d,e,f){this.a=d
this.b=e
this.c=f},
aAQ:function aAQ(d,e,f){this.c=d
this.e=e
this.a=f},
bf7:function bf7(d,e){var _=this
_.e=_.d=$
_.cQ$=d
_.b7$=e
_.c=_.a=null},
daC:function daC(d){this.a=d},
daB:function daB(d){this.a=d},
bfm:function bfm(d,e){this.c=d
this.a=e},
db_:function db_(d){this.a=d},
db0:function db0(d){this.a=d},
KM:function KM(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bf6:function bf6(){this.d=!1
this.c=this.a=null},
daz:function daz(d){this.a=d},
dav:function dav(d){this.a=d},
daA:function daA(d){this.a=d},
dau:function dau(d){this.a=d},
day:function day(d){this.a=d},
daw:function daw(d){this.a=d},
dax:function dax(d,e){this.a=d
this.b=e},
QF:function QF(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
a0T:function a0T(d,e,f){this.c=d
this.d=e
this.a=f},
aGo:function aGo(d,e,f){var _=this
_.d=$
_.e=d
_.f=null
_.r=!0
_.w=$
_.x=null
_.y=!1
_.z=null
_.bw$=e
_.a9$=f
_.c=_.a=null},
eJo:function eJo(){},
eJe:function eJe(d){this.a=d},
eJn:function eJn(d){this.a=d},
eJf:function eJf(d){this.a=d},
eJg:function eJg(d){this.a=d},
eJa:function eJa(d){this.a=d},
eJb:function eJb(d,e){this.a=d
this.b=e},
eJc:function eJc(d){this.a=d},
eJd:function eJd(d,e,f){this.a=d
this.b=e
this.c=f},
eJl:function eJl(){},
eJm:function eJm(d){this.a=d},
eJh:function eJh(d){this.a=d},
eJi:function eJi(d){this.a=d},
eJj:function eJj(d){this.a=d},
eJk:function eJk(d){this.a=d},
eJp:function eJp(d,e,f){this.a=d
this.b=e
this.c=f},
eJr:function eJr(d,e){this.a=d
this.b=e},
eJq:function eJq(d){this.a=d},
KS:function KS(d,e){this.c=d
this.a=e},
bun:function bun(d,e){this.b=d
this.a=e},
bk6:function bk6(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bk5:function bk5(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aMc:function aMc(){},
aOe:function aOe(){},
bAb:function bAb(){},
aOf:function aOf(){},
fV4(){var w=0,v=B.j(x.bZ),u,t,s,r,q
var $async$fV4=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.xQ.cq().MI(B.a(["pdf"],x.s),A.uG,!0),$async$fV4)
case 3:q=e
if(q==null||J.cs(q.a)){u=null
w=1
break}t=J.fs(q.a)
s=t.c
if(s==null||s.length===0){u=null
w=1
break}r=A.a.i(t.b)
if(r.length===0)r="document.pdf"
u=new B.bru(s,"data:application/pdf;base64,"+A.cT.gcu().aN(s),r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fV4,v)},
ipo(d){var w,v,u,t,s,r
try{w=B.jK(d,0,null)
v=B.ag("/Type\\s*/Pages[^>]*?/Count\\s+(\\d+)",!0,!0,!1,!1).cF(w)
if(v!=null){s=v.b[1]
s.toString
u=B.ca(s,null)
if(u!=null&&u>0){s=A.o.D(u,1,200)
return s}}t=B.ag("/Type\\s*/Page\\b",!0,!1,!1,!1).kZ(0,w).gI(0)
if(t>0){s=J.ajf(t,1,200)
return s}}catch(r){}return 1},
fUW(d){return C.ipn(d)},
ipn(d){var w=0,v=B.j(x.T),u
var $async$fUW=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(!A.a.a_(d,"data:image")){u=d
w=1
break}u=d
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fUW,v)},
bFL(d,e,f,g){return C.ipx(d,e,f,g)},
ipx(b4,b5,b6,b7){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
var $async$bFL=B.e(function(b8,b9){if(b8===1){s.push(b9)
w=t}for(;;)switch(w){case 0:if(!new B.ea(b4,x.co).gae(0).C()){u=null
w=1
break}t=4
r=A.i.D(b5.a,80,2400)
q=A.i.D(b5.b,80,2400)
p=B.hEJ(b7,new B.av(r,q))
o=1
n=1
m=0
l=0
for(a7=b4.length,a8=0;a8<a7;++a8){k=b4[a8]
if(k==null)continue
a9=o
b0=k.a
o=Math.min(B.ji(a9),b0)
b0=n
a9=k.b
n=Math.min(B.ji(b0),a9)
a9=m
b0=k.a
m=Math.max(B.ji(a9),b0)
b0=l
a9=k.b
l=Math.max(B.ji(b0),a9)}o=A.i.D(o-0.04,0,1)
n=A.i.D(n-0.04,0,1)
m=A.i.D(m+0.04,0,1)
l=A.i.D(l+0.04,0,1)
j=A.i.D(m-o,0.12,1)
i=A.i.D(l-n,0.12,1)
h=A.o.D(A.i.V(800*(i/j)),180,420)
$.S()
g=new B.q0(new B.pC())
f=B.zx(g,null)
a7=B.K()
a7.r=A.rz.gp(0)
f.ar(new B.a1(0,0,800,0+h),a7)
e=800/(j*r)
b1=B.K()
b1.r=b6.gp(b6)
b1.c=p*e
b1.d=A.bu
b1.e=A.dT
b1.b=A.a9
b1.f=!0
d=b1
a0=null
for(a7=b4.length,a8=0;a8<b4.length;b4.length===a7||(0,B.J)(b4),++a8){a1=b4[a8]
if(a1==null){a0=null
continue}a2=new B.o((a1.a-o)/j*800,(a1.b-n)/i*h)
if(a0!=null)f.ah(a0,a2,d)
a0=a2}a3=g.o3()
w=7
return B.b(a3.xH(800,h),$async$bFL)
case 7:a4=b9
a3.t()
w=8
return B.b(a4.hr(A.hl),$async$bFL)
case 8:a5=b9
a4.t()
if(a5==null){u=null
w=1
break}a7=J.eT(A.dR.gaU(a5))
a7=A.cT.gcu().aN(a7)
u="data:image/png;base64,"+a7
w=1
break
t=2
w=6
break
case 4:t=3
b3=s.pop()
a6=B.ac(b3)
$.am.$1("[slides signature] "+B.w(a6))
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$bFL,v)},
aSc(d,e,f){return C.ipl(d,e,f)},
ipl(d,e,f){var w=0,v=B.j(x.go),u,t,s,r,q
var $async$aSc=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:r={}
q=B.a([],x.bA)
r.a=null
r.b=e==null?A.as:e
r.c=f==null?5.2:f
w=3
return B.b(B.aiW(d,e,f,new C.fUU(r,q),q,"Sign document"),$async$aSc)
case 3:if(!new B.ea(q,x.co).gae(0).C()||r.a==null){u=null
w=1
break}t=r.a
t.toString
w=4
return B.b(C.bFL(q,t,r.b,r.c),$async$aSc)
case 4:s=h
if(s==null){u=null
w=1
break}u=new C.b3z(s,r.c,r.b)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aSc,v)},
ipv(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h="&amp;",g="&lt;",f="&gt;",e="&quot;",d='<!DOCTYPE html><html><head><meta charset="utf-8"><title>'+C.hxu(a0.b)+'</title>\n<style>\n  @page { size: 210mm 297mm; margin: 1.7mm; }\n  * { box-sizing: border-box; }\n  body { font-family: system-ui, sans-serif; background: #fff; color: #111; margin: 0; }\n  h1 { font-size: 14px; margin: 6px 10mm; }\n  .slide { page-break-after: always; width: 100%; height: 293.6mm; border: 1px solid #ddd; position: relative; overflow: hidden; margin: 0 auto 24px; }\n  /* Requested after the margin was already trimmed to near zero: a real\n     zoom-in on the whole slide (frame included), not just less border.\n     `.slide` keeps overflow:hidden so whatever spills past the edge at\n     this scale gets cropped instead of pushing the page layout around.\n     Width and height scale independently \u2014 a separate "wider on the\n     left and right only" request on top of the overall zoom. */\n  .zoom { position: absolute; inset: 0; transform: scaleX(1.0375) scaleY(1.01875); transform-origin: center center; }\n  .el { position: absolute; overflow: hidden; }\n  .txt { white-space: pre-wrap; word-break: break-word; }\n  img { max-width: 100%; max-height: 100%; object-fit: contain; }\n  .pdf { display:flex; flex-direction:column; align-items:center; justify-content:center; height:100%; background:#f8fafc; }\n</style></head><body>\n<h1>'+C.hxu(a0.b)+"</h1>\n"
for(w=a0.r,v=0;v<w.length;++v){u=w[v]
d=d+('<div class="slide" style="background:#'+A.a.b2(A.a.b_(A.o.ft(u.e,16),8,"0"),2)+'">\n')+'<div class="zoom">\n'
for(t=u.z,s=t.length,r=0;r<t.length;t.length===s||(0,B.J)(t),++r){q=t[r]
d+='<div class="el" style="left:'+A.i.ad(q.c*100,2)+"%;top:"+A.i.ad(q.d*100,2)+"%;width:"+A.i.ad(q.e*100,2)+"%;height:"+A.i.ad(q.f*100,2)+'%">'
p=q.b
switch(p.a){case 0:o=A.a.b2(A.a.b_(A.o.ft(q.Q,16),8,"0"),2)
p=q.w
n=q.r
n=B.aL(n,"&",h)
n=B.aL(n,"<",g)
n=B.aL(n,">",f)
d+='<div class="txt" style="font-size:'+B.w(p)+"px;color:#"+o+'">'+B.aL(n,'"',e)+"</div>"
break
case 1:case 4:n=q.at
if(n!=null&&A.a.a_(n,"data:image")){m=p===D.lS&&q.c===0&&q.d===0&&q.e===1&&q.f===1?' style="object-fit:fill"':""
d+='<img src="'+n+'" alt=""'+m+" />"}break
case 3:p=q.db
if(p.length===0)p="PDF document"
p=B.aL(p,"&",h)
p=B.aL(p,"<",g)
p=B.aL(p,">",f)
d+='<div class="pdf"><div>\ud83d\udcc4 '+B.aL(p,'"',e)+"</div></div>"
break
case 2:d+='<div style="width:100%;height:100%;background:'+C.hx5(q.ay)+";border:2px solid "+C.hx5(q.ch)+'"></div>'
break
case 5:l=C.hg5(q.r)
p=l==null
n=p?null:l.b
n=A.a.i(n==null?"":n).length===0?"My links":A.a.i(l.b)
n=B.aL(n,"&",h)
n=B.aL(n,"<",g)
n=B.aL(n,">",f)
d=d+'<div style="width:100%;height:100%;box-sizing:border-box;background:#111114;border:4px solid #8E8A85;border-radius:18px;padding:18px 8px 8px;color:#fff;font-family:sans-serif;text-align:center;overflow:hidden">'+('<div style="font-weight:700;font-size:13px">'+B.aL(n,'"',e)+"</div>")
p=p?null:l.galb()
if(p==null)p=A.aBX
n=B.U(p)
k=n.k("iu<1>")
j=new B.iu(p,0,8,k)
j.n8(p,0,8,n.c)
j=new B.bR(j,j.gI(0),k.k("bR<ak.E>"))
k=k.k("ak.E")
while(j.C()){p=j.d
if(p==null)p=k.a(p)
i=A.a.i(p.b)
if(i.length===0)i=A.a.i(p.c)
p=A.a.i(p.c)
p=B.aL(p,"&",h)
p=B.aL(p,"<",g)
p=B.aL(p,">",f)
p=B.aL(p,'"',e)
n=B.aL(i,"&",h)
n=B.aL(n,"<",g)
n=B.aL(n,">",f)
d+='<a href="'+p+'" target="_blank" rel="noopener" style="display:block;margin-top:6px;padding:6px;border-radius:8px;background:#26262C;color:#fff;text-decoration:none;font-size:11px">'+B.aL(n,'"',e)+"</a>"}d+="</div>"
break}d+="</div>\n"}d+="</div>\n</div>\n"}d+="</body></html>\n"
return d.charCodeAt(0)==0?d:d},
hx5(d){var w=A.o.aI(d,24)
return"rgba("+(A.o.aI(d,16)&255)+","+(A.o.aI(d,8)&255)+","+(d&255)+","+A.i.ad((w&255)/255,3)+")"},
hxu(d){var w=B.aL(d,"&","&amp;")
w=B.aL(w,"<","&lt;")
w=B.aL(w,">","&gt;")
return B.aL(w,'"',"&quot;")},
bFJ(d,e){var w=0,v=B.j(x.H)
var $async$bFJ=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b(B.cg(null,null,!0,null,new C.fV2(e,C.ipv(e),d),d,null,!0,!0,x.H),$async$bFJ)
case 2:return B.h(null,v)}})
return B.i($async$bFJ,v)},
bFK(){var w=0,v=B.j(x.T),u,t,s
var $async$bFK=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A7.Hy(92,2400),$async$bFK)
case 3:s=e
if(s==null){u=null
w=1
break}w=4
return B.b(C.fUW(s),$async$bFK)
case 4:t=e
u=t==null?s:t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bFK,v)},
aSd(d){var w=0,v=B.j(x.N),u,t,s,r,q
var $async$aSd=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.hhk(d),$async$aSd)
case 3:t=f
s=A.a.i(d.b)
r=B.ag("[^\\w\\-. ]+",!0,!1,!1,!1)
q=A.a.i(B.aL(s,r,"_"))
u=A2.fXF(t,q.length===0?"presentation":q)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aSd,v)},
hrp(d,e){var w
if(e<0||e>=d.r.length)return A.o.D(d.e,1,120)
w=d.r[e].w
return A.o.D(w>0?w:d.e,1,120)},
b3z:function b3z(d,e,f){this.a=d
this.b=e
this.c=f},
fUU:function fUU(d,e){this.a=d
this.b=e},
fV2:function fV2(d,e,f){this.a=d
this.b=e
this.c=f},
fV_:function fV_(d){this.a=d},
fV0:function fV0(d,e,f){this.a=d
this.b=e
this.c=f},
fV1:function fV1(d,e,f){this.a=d
this.b=e
this.c=f},
ipm(d){return C.kN(d.w)},
ipt(d){var w,v,u,t
if(d.length===0||!A.d.cE(d,C.irK()))return null
for(w=d.length,v=0;v<w;++v){u=d[v].x
t=A.a.i(u==null?"":u)
if(t.length!==0)return t}return""},
zh(d){var w=A.a.i(d),v=B.ag("[^A-Z0-9]",!0,!1,!1,!1),u=B.aL(w.toUpperCase(),v,"")
w=$.hKR()
if(w.b.test(u))return u
return null},
hEL(d,e,f){var w,v,u=C.hTQ(d),t=$.os()
for(w=0;w<80;++w){v=u+A.a.b_(A.o.u(t.az(1000)),3,"0")
if(!f.q(0,v))return v}return u+A.a.b_(A.o.u(Date.now()%1000),3,"0")},
ipz(d){var w,v,u,t,s=B.aR(x.N)
for(w=J.aT(d.a),v=new B.eH(w,d.b);v.C();){u=w.gR(w).y
t=C.zh(u==null?"":u)
if(t!=null)s.J(0,t)}return s},
fUS(d,e){var w,v=d.y,u=C.zh(v==null?"":v)
if(u!=null)return d.y=u
w=C.ipz(new B.Y(e,new C.fUT(d),B.U(e).k("Y<1>")))
v=d.x
return d.y=C.hEL(v==null?"":v,null,w)},
ipy(d){var w,v
if(d.length!==1)return null
w=A.d.gH(d)
if(!C.kN(w.w))return null
v=w.y
return C.zh(v==null?"":v)},
hYf(){var w,v=$.os(),u=J.e4(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.az(32)]
return"SL"+A.d.he(u)},
Xl(){var w=0,v=B.j(x.P),u,t=2,s=[],r,q,p,o,n,m
var $async$Xl=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return B.b(B.c9(),$async$Xl)
case 3:if(!e){u=B.T(x.N,x.z)
w=1
break}t=5
w=8
return B.b(B.f4("ngmy_slides_transfer_qr_stashes_v1",null,!1,A.bO),$async$Xl)
case 8:r=e
if(r==null){u=B.T(x.N,x.z)
w=1
break}q=J.t(r,"stashes")
if(x.f.b(q)){o=B.a2(q,x.N,x.z)
u=o
w=1
break}t=2
w=7
break
case 5:t=4
m=s.pop()
p=B.ac(m)
$.am.$1("[slides qr stash] load: "+B.w(p))
w=7
break
case 4:w=2
break
case 7:u=B.T(x.N,x.z)
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Xl,v)},
Xm(d){return C.hYg(d)},
hYg(d){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p
var $async$Xm=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return B.b(B.c9(),$async$Xm)
case 3:if(!f){w=1
break}t=5
w=8
return B.b(B.hJ("ngmy_slides_transfer_qr_stashes_v1",B.I(["stashes",d,"savedAt",new B.V(Date.now(),0,!1).aa().ag()],x.N,x.z),!1,!1,A.cP,null),$async$Xm)
case 8:t=2
w=7
break
case 5:t=4
p=s.pop()
r=B.ac(p)
$.am.$1("[slides qr stash] save: "+B.w(r))
w=7
break
case 4:w=2
break
case 7:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Xm,v)},
a9o(a0,a1,a2,a3,a4){var w=0,v=B.j(x.gl),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$a9o=B.e(function(a5,a6){if(a5===1)return B.f(a6,v)
for(;;)switch(w){case 0:w=3
return B.b(B.c9(),$async$a9o)
case 3:if(!a6){u=null
w=1
break}t=A.a.i(a0)
if(t.length===0){u=null
w=1
break}w=4
return B.b(C.Xl(),$async$a9o)
case 4:s=a6
r=C.zh(a2==null?"":a2)
if(r==null)r=a3!=null?C.hEL(a3,null,A.N):null
q=x.N
p=B.aR(q)
for(o=J.dp(s),n=J.aT(o.ghJ(s)),m=x.f;n.C();){l=n.gR(n)
if(!m.b(l))continue
k=J.t(l,"claimCode")
j=C.zh(J.k(k==null?"":k))
if(j!=null)p.J(0,j)}n=o.gdO(s),n=n.gae(n),k=x.z
case 5:if(!n.C()){w=6
break}i=n.gR(n)
h=i.b
if(!m.b(h)){w=5
break}g=B.a2(h,q,k)
h=g.h(0,"bundleId")
if(J.k(h==null?"":h)!==a1){w=5
break}q=A.dV.aN(t)
g.n(0,"payload",A.cT.gcu().aN(q))
g.n(0,"ownerEmail",A.a.i(a4))
g.n(0,"updatedAt",new B.V(Date.now(),0,!1).aa().ag())
if(D.UO.q(0,A.a.i(a4.toLowerCase())))g.n(0,"sharedByAdmin",!0)
if(r!=null){g.n(0,"kind","marriage")
g.n(0,"usesRemaining",2)
f=r}else{q=g.h(0,"claimCode")
f=C.zh(J.k(q==null?"":q))
if(f==null)f=C.hru(p)
g.n(0,"usesRemaining",25)}g.n(0,"claimCode",f)
q=i.a
o.n(s,q,g)
w=7
return B.b(C.Xm(s),$async$a9o)
case 7:u=new B.aHQ(f,"NGMYSLIDESYNC2|"+q,q)
w=1
break
w=5
break
case 6:e=C.hYf()
n=r==null
d=n?C.hru(p):r
q=B.T(q,x.C)
q.n(0,"ownerEmail",A.a.i(a4))
q.n(0,"bundleId",a1)
m=A.dV.aN(t)
q.n(0,"payload",A.cT.gcu().aN(m))
n=!n
q.n(0,"usesRemaining",n?2:25)
q.n(0,"createdAt",new B.V(Date.now(),0,!1).aa().ag())
if(D.UO.q(0,A.a.i(a4.toLowerCase())))q.n(0,"sharedByAdmin",!0)
q.n(0,"claimCode",d)
if(n)q.n(0,"kind","marriage")
o.n(s,e,q)
w=8
return B.b(C.Xm(s),$async$a9o)
case 8:u=new B.aHQ(d,"NGMYSLIDESYNC2|"+e,e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a9o,v)},
hru(d){var w,v,u=$.os()
for(w=0;w<200;++w){v="SL"+A.a.b_(A.o.u(u.az(1000)),3,"0")
if(d.J(0,v))return v}return"SL"+A.a.b_(A.o.u(Date.now()%1000),3,"0")},
at0(d){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$at0=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=A.a.i(d)
p=q.length===0
if(p)f=p
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.c9(),$async$at0)
case 5:f=!f
case 4:if(f){w=1
break}w=6
return B.b(C.Xl(),$async$at0)
case 6:t=f
s=J.a7(t)
r=s.gI(t)
s.br(t,new C.cle(q))
w=s.gI(t)!==r?7:8
break
case 7:w=9
return B.b(C.Xm(t),$async$at0)
case 9:case 8:case 1:return B.h(u,v)}})
return B.i($async$at0,v)},
at_(d){var w=0,v=B.j(x.T),u,t,s,r,q,p,o
var $async$at_=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:p=C.zh(d)
o=p==null
if(o)f=o
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.c9(),$async$at_)
case 5:f=!f
case 4:if(f){u=null
w=1
break}o=J
w=6
return B.b(C.Xl(),$async$at_)
case 6:t=o.i1(f),t=t.gae(t),s=x.f
case 7:if(!t.C()){w=8
break}r=t.gR(t)
q=r.b
if(!s.b(q)){w=7
break}q=J.t(q,"claimCode")
if(C.zh(J.k(q==null?"":q))===p){u=C.a9n(r.a)
w=1
break}w=7
break
case 8:u=null
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$at_,v)},
a9n(d){var w=0,v=B.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$a9n=B.e(function(a0,a1){if(a0===1)return B.f(a1,v)
for(;;)switch(w){case 0:g=A.a.i(d)
f=g.length===0
if(f)a1=f
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.c9(),$async$a9n)
case 5:a1=!a1
case 4:if(a1){u=null
w=1
break}w=6
return B.b(C.Xl(),$async$a9n)
case 6:p=a1
o=J.a7(p)
n=o.h(p,g)
m=x.f
if(!m.b(n)){u=null
w=1
break}l=J.a7(n)
k=B.aJ(l.h(n,"usesRemaining"))
j=k==null?null:A.i.M(k)
if(j==null)j=0
if(j<=0){u=null
w=1
break}k=l.h(n,"payload")
t=J.k(k==null?"":k)
if(J.ad(t)===0){u=null
w=1
break}s=null
try{s=A.ca.cJ(0,A.cM.aN(t))}catch(e){u=null
w=1
break}if(A.a.i(s).length===0){u=null
w=1
break}k=l.h(n,"ownerEmail")
if(D.UO.q(0,A.a.i(J.k(k==null?"":k).toLowerCase()))||J.z(l.h(n,"sharedByAdmin"),!0))try{r=A.X.aQ(0,s,null)
if(m.b(r)){q=B.a2(r,x.N,x.z)
J.aK(q,"sharedByAdmin",!0)
s=A.X.aw(q,null)}}catch(e){}h=j-1
m=l.h(n,"kind")
m=J.k(m==null?"":m)
if(h<=0&&m!=="marriage")o.W(p,g)
else{m=x.N
l=x.z
l=B.dO(B.a2(n,m,l),m,l)
l.n(0,"usesRemaining",h)
l.n(0,"lastUsedAt",new B.V(Date.now(),0,!1).aa().ag())
o.n(p,g,l)}w=7
return B.b(C.Xm(p),$async$a9n)
case 7:u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a9n,v)},
ips(d,e,f){var w,v=B.T(x.N,x.z)
v.n(0,"type","ngmy_slides_library_v1")
v.n(0,"ownerEmail",A.a.i(e))
v.n(0,"exportedAt",new B.V(Date.now(),0,!1).aa().ag())
if(f)v.n(0,"sharedByAdmin",!0)
w=B.U(d).k("N<1,a9<n,@>>")
w=B.C(new B.N(d,new C.fUZ(),w),w.k("ak.E"))
v.n(0,"decks",w)
return v},
fV6(d,e,f,g){var w
if(e!=null){w=B.T(x.N,x.z)
w.n(0,"type","ngmy_slides_deck_v1")
w.n(0,"ownerEmail",A.a.i(f))
w.n(0,"exportedAt",new B.V(Date.now(),0,!1).aa().ag())
if(g)w.n(0,"sharedByAdmin",!0)
w.n(0,"deck",e.aj())
return A.X.aw(w,null)}return A.X.aw(C.ips(d==null?B.a([],x.D):d,f,g),null)},
fV5(d,e,f,g,h){var w=0,v=B.j(x.eb),u,t,s,r
var $async$fV5=B.e(function(i,j){if(i===1)return B.f(j,v)
for(;;)switch(w){case 0:w=3
return B.b(C.a9o(h,d,e,f,g),$async$fV5)
case 3:r=j
if(r!=null){t=r.b
s=r.a
if(s==null)s=C.zh(e==null?"":e)
u=new B.aHC(s,t)
w=1
break}t=A.dV.aN(h)
t=A.kK.gcu().aN(t)
u=new B.aHC(C.zh(e==null?"":e),"NGMY_SL:"+t)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fV5,v)},
hhm(d){var w,v,u,t,s="ngmy_slides_deck_v1",r="ngmy_slides_library_v1",q=A.a.i(d)
if(J.ad(q)===0)return!1
if(J.d5(q,"NGMYSLIDESYNC2|"))return!0
if(J.d5(q,"NGMYSLIDECODE|"))return!0
if(J.d5(q,"NGMY_SL:"))return!0
if(J.eI(q,s)||J.eI(q,r))return!0
if(J.d5(q,"{"))try{w=A.X.aQ(0,q,null)
if(x.f.b(w)){u=J.t(w,"type")
v=J.k(u==null?"":u)
u=J.z(v,s)||J.z(v,r)
return u}}catch(t){}return!1},
ipw(d){var w,v,u,t,s,r,q=d.z,p=q==null?null:A.a.i(q)
q=d.d
for(q=[p,q==null?null:A.a.i(q)],w=q.length,v=0;v<w;++v){u=q[v]
if(u==null||u.length===0)continue
if(C.hhm(u))return u
t=A.a.co(u,"NGMYSLIDESYNC2|")
if(t>=0){s=A.a.i(A.a.b2(u,t))
if(C.hhm(s))return s}r=A.a.co(u,"NGMY_SL:")
if(r>=0){s=A.a.i(A.a.b2(u,r))
if(C.hhm(s))return s}}return null},
fUV(d){var w,v,u,t=A.a.i(d)
if(J.ad(t)===0||J.d5(t,"NGMYSLIDESYNC2|"))return B.a([],x.D)
try{w=null
v=x.P
if(J.d5(t,"NGMY_SL:"))w=v.a(A.X.aQ(0,A.ca.cJ(0,A.cM.aN(J.nq(t,8))),null))
else w=v.a(A.X.aQ(0,t,null))
v=C.i7p(w)
return v}catch(u){v=B.a([],x.D)
return v}},
aiH(d){var w=0,v=B.j(x.R),u,t,s,r,q
var $async$aiH=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=A.a.i(d)
w=A.a.a_(q,"NGMYSLIDECODE|")?3:4
break
case 3:t=q.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return B.b(C.at_(t[1]),$async$aiH)
case 7:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fUV(s)
w=1
break}case 6:u=B.a([],x.D)
w=1
break
case 4:r=C.zh(q)
w=r!=null&&!A.a.q(q,"|")&&!A.a.a_(q,"{")?8:9
break
case 8:w=10
return B.b(C.at_(r),$async$aiH)
case 10:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fUV(s)
w=1
break}u=B.a([],x.D)
w=1
break
case 9:w=A.a.a_(q,"NGMYSLIDESYNC2|")?11:12
break
case 11:t=q.split("|")
w=t.length>=2?13:14
break
case 13:w=15
return B.b(C.a9n(t[1]),$async$aiH)
case 15:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fUV(s)
w=1
break}case 14:u=B.a([],x.D)
w=1
break
case 12:u=C.fUV(q)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aiH,v)},
i7p(d){var w,v,u,t=J.a7(d),s=t.h(d,"type"),r=J.k(s==null?"":s)
if(!J.z(t.h(d,"sharedByAdmin"),!0)){s=t.h(d,"ownerEmail")
w=D.UO.q(0,A.a.i(J.k(s==null?"":s).toLowerCase()))}else w=!0
if(r==="ngmy_slides_deck_v1"){v=t.h(d,"deck")
if(!x.f.b(v))return B.a([],x.D)
return B.a([C.hhj(C.Xh(B.a2(v,x.N,x.z)),w)],x.D)}if(r==="ngmy_slides_library_v1"){u=t.h(d,"decks")
if(!x.j.b(u))return B.a([],x.D)
t=J.dd(u,x.f)
t=B.cF(t,new C.fq0(w),t.$ti.k("M.E"),x.I)
t=B.C(t,B.a4(t).k("M.E"))
return t}return B.a([],x.D)},
hhj(d,e){var w,v,u,t,s,r,q,p,o=d.aj()
o.n(0,"id",C.cE())
w=A.a.i(d.b)
o.n(0,"name",w.length===0?"Shared presentation":w)
o.n(0,"transferReceived",!0)
o.W(0,"transferClaimCode")
o.W(0,"adminShareEditUntil")
v=o.h(0,"slides")
if(x.j.b(v))for(u=J.aT(v),t=x.f;u.C();){s=u.gR(u)
if(t.b(s)){r=Date.now()
q=$.jc
$.jc=q+1
J.aK(s,"id",""+1000*r+"_"+q)}}p=C.Xh(B.a2(o,x.N,x.z))
if(e&&C.kN(p.w))p.Q=new B.V(Date.now(),0,!1).aa().bR(144e8).ag()
return p},
bFu(){var w=0,v=B.j(x.aT),u,t,s
var $async$bFu=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.Hx(),$async$bFu)
case 3:s=e
if(s==null||A.a.i(s).length===0){u=null
w=1
break}w=4
return B.b(C.aiH(s),$async$bFu)
case 4:t=e
u=J.cs(t)?null:t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bFu,v)},
h38(d){var w=0,v=B.j(x.T),u,t
var $async$h38=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.hK(D.Z_,!0,"Dismiss",d,new C.h39(),new C.h3a(),A.GF,!0,x.N),$async$h38)
case 3:t=f
if(t==null){u=null
w=1
break}if(t.length===0){if(d.e!=null)d.L(x.q).f.T(D.fiD)
u=null
w=1
break}u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$h38,v)},
itY(d,e,f,g,h){return B.a6(d,!1).ce(B.ec(new C.h3b(h,e,g,f),!0,null,x.H))},
fUT:function fUT(d){this.a=d},
cle:function cle(d){this.a=d},
fUZ:function fUZ(){},
fq0:function fq0(d){this.a=d},
h39:function h39(){},
h3a:function h3a(){},
h3b:function h3b(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Xj:function Xj(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aGm:function aGm(){var _=this
_.d="one"
_.e=null
_.r=_.f=!1
_.c=_.a=null},
eIV:function eIV(){},
eIR:function eIR(d,e){this.a=d
this.b=e},
eIU:function eIU(d,e){this.a=d
this.b=e},
eIS:function eIS(d){this.a=d},
eIT:function eIT(d){this.a=d},
eIW:function eIW(d){this.a=d},
eIX:function eIX(d){this.a=d},
eJ_:function eJ_(d){this.a=d},
eJ0:function eJ0(d){this.a=d},
eIZ:function eIZ(d){this.a=d},
eJ1:function eJ1(d){this.a=d},
eIY:function eIY(d){this.a=d},
eJ2:function eJ2(d,e){this.a=d
this.b=e},
eIQ:function eIQ(d,e){this.a=d
this.b=e},
eIP:function eIP(d,e){this.a=d
this.b=e},
Xk:function Xk(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bn4:function bn4(){var _=this
_.c=_.a=_.f=_.e=_.d=null},
eJ3:function eJ3(d,e){this.a=d
this.b=e},
eJ4:function eJ4(d){this.a=d},
eJ5:function eJ5(){},
eJ6:function eJ6(d){this.a=d},
eJ7:function eJ7(d,e){this.a=d
this.b=e},
aGj:function aGj(d){this.a=d},
aGk:function aGk(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
eCx:function eCx(d){this.a=d},
eCw:function eCw(){},
eCy:function eCy(d){this.a=d},
eCt:function eCt(d){this.a=d},
eCs:function eCs(){},
eCu:function eCu(d){this.a=d},
eCv:function eCv(d){this.a=d},
bxF:function bxF(){},
at1:function at1(d){this.a=d},
aGn:function aGn(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
eJ9:function eJ9(d){this.a=d},
eJ8:function eJ8(d){this.a=d},
id_(){var w,v,u,t
for(v=0;v<4;++v){w=D.di3[v]
try{if(Ae.c1m(w)){u=w
return u}}catch(t){}}return null},
Sk(d,e){return C.im4(d,e)},
im4(c6,c7){var w=0,v=B.j(x.T),u,t=2,s=[],r=[],q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5
var $async$Sk=B.e(function(c9,d0){if(c9===1){s.push(d0)
w=t}for(;;)switch(w){case 0:c2={}
c3=c7.r
if(c3.length===0){u="This presentation has no slides."
w=1
break}q=C.id_()
if(q==null){u="This browser cannot record video. Try Chrome, Edge, or a recent Safari."
w=1
break}b2=c7.d===D.oQ?0.5625:1.7777777777777777
b3=b2>=1
b4=c2.a=A.i.V(b3?1280:1280*b2)
b5=c2.b=A.i.V(b3?1280/b2:1280)
c2.a=b4-A.o.F(b4,2)
c2.b=b5-A.o.F(b5,2)
b6=B.qU(c6,!0)
b6.toString
p=B.a6(c6,!0)
b7=new B.cw(null,x.A)
b8=A.d.gH(c3)
b9=$.ax()
o=new B.eB(b8,b9)
n=new B.eB("Getting ready\u2026",b9)
m=new B.eB(0,b9)
l=B.pz(new C.fP7(c2,b7,o),!1,!1)
b6.m9(0,l)
b9=x.H
B.cg(null,A.bB,!1,null,new C.fP8(n,m),c6,null,!0,!0,b9)
k=new C.fPc(b7)
j=new C.fPd()
i=null
t=4
b3=c2.a
h=Al.aUu(c2.b,b3)
b3=h.getContext("2d")
b3.toString
g=b3
f=J.h69(h,30)
e=B.a([],x.aK)
b3=x.z
i=Ae.aZy(f,B.I(["mimeType",q,"videoBitsPerSecond",8e6],b3,b3))
A.J4.za(i,"dataavailable",new C.fP9(e))
d=new B.c3(new B.bk($.bF,x.dT),x.b2)
A.J4.za(i,"stop",new C.fPa(d))
J.ajk(n,"Drawing slide 1 of "+c3.length+"\u2026")
c5=j
w=8
return B.b(k.$0(),$async$Sk)
case 8:w=7
return B.b(c5.$1(d0),$async$Sk)
case 7:a0=d0
J.h6a(g,a0,0,0,c2.a,c2.b)
i.start(200)
a1=0
case 9:if(!(b3=a1,b8=c3.length,b3<b8)){w=11
break}a2=c3[a1]
w=a1>0?12:13
break
case 12:J.ajk(n,"Drawing slide "+B.w(a1+1)+" of "+b8+"\u2026")
J.ajk(o,a2)
c5=j
w=15
return B.b(k.$0(),$async$Sk)
case 15:w=14
return B.b(c5.$1(d0),$async$Sk)
case 14:a0=d0
case 13:J.h6a(g,a0,0,0,c2.a,c2.b)
a3=A.o.D(a2.w>0?a2.w:c7.e,1,120)
J.ajk(n,"Recording slide "+B.w(a1+1)+" of "+c3.length+" \xb7 "+B.w(a3)+" s")
a4=new B.V(Date.now(),0,!1).bR(1e6*a3)
case 16:b3=Date.now()
b8=a4
if(b3>=b8.gbq())b3=b3===b8.gbq()&&0<b8.gcA()
else b3=!0
if(!b3){w=17
break}J.h6a(g,a0,0,0,c2.a,c2.b)
w=18
return B.b(B.bQ(A.fg,null,b9),$async$Sk)
case 18:w=16
break
case 17:J.ajk(m,(a1+1)/c3.length)
case 10:++a1
w=9
break
case 11:J.ajk(n,"Saving your video\u2026")
i.stop()
w=19
return B.b(d.a.dh(0,A.on),$async$Sk)
case 19:a5=A.d.gH(q.split(";"))
a6=B.hL(e,a5)
c3=(self.URL||self.webkitURL).createObjectURL(a6)
c3.toString
a7=c3
a8=J.z(a5,"video/mp4")?"mp4":"webm"
c3=A.a.i(c7.b)
b3=B.ag("[^\\w\\-. ]+",!0,!1,!1,!1)
a9=A.a.i(B.aL(c3,b3,"_"))
c0=B.n4(a7)
c0.download=B.w(J.ad(a9)===0?"presentation":a9)+"."+B.w(a8)
c3=c0.style
c3.display="none"
b0=c0
c3=document.body
if(c3!=null)c3.appendChild(b0).toString
J.HM(b0)
J.lL(b0)
B.bQ(A.qv,new C.fPb(a7),b9)
u=null
r=[1]
w=5
break
r.push(6)
w=5
break
case 4:t=3
c4=s.pop()
b1=B.ac(c4)
try{if(i!=null&&i.state!=="inactive")i.stop()}catch(c8){}c3=B.w(b1)
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
if(p.pZ())p.eA()
c3=o
b3=$.ax()
c3.sic(b3)
J.aT7(c3,0)
c3=n
c3.sic(b3)
J.aT7(c3,0)
c3=m
c3.sic(b3)
J.aT7(c3,0)
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Sk,v)},
fP7:function fP7(d,e,f){this.a=d
this.b=e
this.c=f},
fP6:function fP6(){},
fP8:function fP8(d,e){this.a=d
this.b=e},
fPc:function fPc(d){this.a=d},
fPd:function fPd(){},
fP9:function fP9(d){this.a=d},
fPa:function fPa(d){this.a=d},
fPb:function fPb(d){this.a=d},
bxT:function bxT(d,e,f){this.c=d
this.d=e
this.a=f},
fjW:function fjW(){},
fjX:function fjX(){},
clA(d){var w=0,v=B.j(x.at),u,t,s
var $async$clA=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.at9(d,A.An),$async$clA)
case 3:s=f
if(s==null){u=null
w=1
break}t=s.bD(new B.V(Date.now(),0,!1))
if(t.a<0){u=A.bF
w=1
break}u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$clA,v)},
clz(d){if(d==null)return!1
return d==="marriage_agreement"||d==="hati_kuhowa"||d==="hati_kuhoweya"||d==="hati_malipo_awamu"},
a94:function a94(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bmO:function bmO(d){var _=this
_.d=null
_.e=d
_.f=!1
_.c=_.a=null},
eqN:function eqN(d){this.a=d},
eqL:function eqL(d){this.a=d},
eqM:function eqM(d,e){this.a=d
this.b=e},
a9Y:function a9Y(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.cx=d
_.cy=e
_.x=f
_.y=!0
_.a=g
_.b=h
_.c=i
_.d=j
_.oV$=k
_.oW$=l
_.oX$=m
_.o6$=n},
a9Z:function a9Z(d,e){this.a=d
this.b=e},
b5e:function b5e(){},
cpu:function cpu(){},
cpv:function cpv(){},
cpw:function cpw(d,e,f,g,h,i,j,k,l){var _=this
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
hLQ(d){return new C.ajD(d)},
a4i:function a4i(){},
ajD:function ajD(d){this.a=d},
aTr:function aTr(){},
ayF:function ayF(d,e){this.d=d
this.b=e
this.a=null},
aUT:function aUT(d){this.b=d
this.a=null},
bEo(d,e){var w=0,v=B.j(x.H),u
var $async$bEo=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b($.S().gug().Mr(d,e),$async$bEo)
case 2:u=B.fXO()
w=3
return B.b(u,$async$bEo)
case 3:return B.h(null,v)}})
return B.i($async$bEo,v)},
hBW(d,e){return(A.tg[(d^e)&255]^A.o.aI(d,8))>>>0},
fH8(d,e,f,g,h,i){var w=C.iig(d,A.dl,f,null,A.d6,g,h,i)
return w},
hDT(d){var w=F.hEC(d)
if(w==null)return""
return"- WRITE EVERYTHING THE READER SEES IN "+w+" \u2014 every title, subtitle, sentence and note, with natural, correct grammar. Do not mix in English (JSON keys stay as given)."},
hTQ(d){var w,v,u,t,s,r=A.a.i(d)
if(r.length===0)return"XX"
w=r.toLowerCase()
v=A.pJ.h(0,w)
if(v!=null)return v
for(u=A.pJ.gdO(A.pJ),u=u.gae(u);u.C();){t=u.gR(u).b
if(t.toLowerCase()===w)return t}u=B.ag("[^A-Z]",!0,!1,!1,!1)
s=B.aL(r.toUpperCase(),u,"")
if(s.length>=2)return A.a.aB(s,0,2)
return A.a.aB(s+"XX",0,2)},
hE0(){var w,v
for(w=0,v='=== EVERYTHING YOU KNOW ABOUT NGMY (use only this; never invent features, numbers, prices, names or dates) ===\nTHE FOUNDER: NGMY stands for New Global Movement for Youth. It was created by KB PABLO QR (always written in capital letters), the Founder, President and CEO of NGMY. The "QR" in his name comes from QR codes, which NGMY and his business use a lot, and it is part of his brand. He built NGMY as one app (ngmy.org) that gives young people and families tools for work, money, learning, community and creativity. When a story is about the CEO, call him KB PABLO QR, Founder, President and CEO of NGMY. Do not give him a different name, age, birthplace, degrees, awards or family details, and do not make up quotes from him.\n\nFEATURES:\n';w<75;++w)v+="- "+D.d2t[w]+"\n"
v=v+"\nABOUT THE COMMUNITY AND THE SYSTEM (facts you can use; do not invent numbers, names or dates):\n- The community is M'MBONDO (also written MBONDO). Its motto is \"EMO 'YA M'MBONDO\". Members live in different US states.\n- The Civic Registry \u2014 people also just call it \"the system\" \u2014 was built inside the NGMY app for the M'MBONDO community.\n- Why it was built: a big problem in the community was not seeing where contribution money went. People gave but were unsure what happened to their money, so trust and giving went down. The system brings light: every contribution gets a receipt, members can see where the money is going and how much has been contributed, and that transparency builds trust and the confidence to keep contributing \u2014 when you know where your money goes, you give.\n- What it does:\n  \u2022 Registers community members with their details and a member ID card (Registry ID), kept safely as the community's records.\n  \u2022 Lets each state know how many members it has (state totals, nationwide totals).\n  \u2022 Records contributions with receipts and contribution reports, so everyone sees the money trail.\n  \u2022 Authorized Registrars enroll members and help them; there is a help mode for assisted sign-up.\n  \u2022 Civic Voting for community decisions, and a Civic State Wallet that shows each state's funds.\n- How NGMY helps members beyond the registry: help finding jobs and applying for them, fixing their houses, helping them get houses, sending money, and NGMY Advisors (AI advisors) who help people apply for jobs, food stamps and other benefits and fill out applications for them.\n- Tone for this community: warm, proud, hopeful and trustworthy; it is about unity, transparency and helping each other.\n\n\nHOW MEMBERS USE THE APP:\n"+"WHAT NGMY IS: NGMY stands for New Global Movement for Youth \u2014 multi-hub app by KB PABLO QR (Founder/CEO). Live site ngmy.org. Wallet balance in USD. Gmail login (@gmail.com), password 6+ chars, also Google/GitHub sign-in.\n\nBOTTOM NAV (7 tabs):\n1) Home \u2014 brand, Helper AI entry, loans, tech frames (Neural/Signal/Core/Vault Channel games).\n2) Tool Hub \u2014 Business Card Creator, Menu Studio (+ Bio Studio), Business Essentials.\n3) Slides \u2014 presentations + Marriage/Hati documents.\n4) NGMY Hub (center) \u2014 Civic Registry, NGMY Store, Help Center, Document Scanner; center star may open App Builder when enabled.\n5) Advisors \u2014 AI advisor chat (this hub).\n6) Creator Hub \u2014 Doc Share, Quote Calc, QR Generator, Play Zone, Kiswahili School, Recorder, Video Studio, Phone Unlock.\n7) Profile \u2014 theme, logout, legal, Worksheets (Projects / Cashier IOUs / Family Tree).\n\nMENU STUDIO (Tool Hub \u2192 Menu Studio):\n- Menus tab: design restaurant/business menus, publish public link https://ngmy.org/?m={slug}\n- First menu free; more menus need Menu Studio subscription (paywall shows price).\n- Bios tab (same studio): link-in-bio pages, publish https://ngmy.org/?b={slug}\n- First Bio free with starter template; more Bios/templates need Bio Studio subscription.\n- Extra Bio photo/header changes may need a photo pack after free changes.\n- Local Menu / Local Bio: Home Essentials hub \u2192 device-local publish at /local-menu/ and /local-bio/\n\nBUSINESS CARD: Tool Hub \u2192 create/edit/download. Paid unlock for edit+download window (paywall).\n\nSLIDES: Slides tab. Free blank + some class templates/designs. Slides Pro unlocks more. Marriage documents are a separate short session unlock.\n\nADVISORS: 10 free minutes, then Advisors subscription for unlimited chat (admins unlimited). ADVISOR BROWSER: the live browser is free for 10 minutes, then $5.99 buys 2 hours (Stripe or Cash App with a screenshot approved by an admin) to use within a week; it only counts while the browser is open.\n\nCIVIC REGISTRY (NGMY Hub): community ID, PIN gate, enrollment, registrars (AR), civic registrar roles. Guest enroll can use ?civic=enroll. Georgia stays free. Every other state gets a 2-month free Civic Registry trial for Authorized Registrars, then $50/mo State Registrar sponsorship starting month 3.\n\nVAULT GAMES (Home \u2192 Vault Channel): arcade games. Need an active Growth Income investment for full access; otherwise one free play total. Free trial does not unlock games.\n\nGROWTH INCOME / INVEST: purchase a plan, daily clock-in for ROI over work days; min withdraw typically $10. Plans are $5, $20, $30, $50 and $100 (the most expensive is $100). Plan availability is admin-controlled.\n\nCREATOR TOOLS:\n- Doc Share \u2014 share docs; free individual creations then paid / org license.\n- QR Generator \u2014 free saves then paid access window.\n- Transfer \u2014 receive free; limited free sends then monthly unlock.\n- Kiswahili School \u2014 Basics free; other levels one-time unlock.\n- Document Scanner \u2014 trial then monthly.\n- Message Translator \u2014 paid unlimited.\n- Phone Unlock \u2014 short access window.\n- Video Studio / Recorder / Play Zone \u2014 Creator Hub tools.\n- Worksheets \u2192 Cashier (IOUs/receipts), Family Tree (create/photos may be paid).\n- Invoices \u2014 free standard tier with limited free premium saves; paid templates via paywall.\n- App Builder \u2014 Hub center (if enabled); cloud + Bolt AI may be paid.\n- Music Studio \u2014 AI songs may cost wallet credits when enabled.\n\nSTORE / JOBS / LOANS / HELP: Store in NGMY Hub; loans from Home; jobs/helpers need approval; Help Center + NGMY Helper AI for support.\n\nGUEST LINKS (no full login): /bio/, /local-bio/, /menu/, /local-menu/, /invoice/, /app/{slug}.\n\nHOW TO HELP MEMBERS: Give clear tap-by-tap steps. Stay in character. If unsure of a live price, send them to the feature paywall rather than guessing.\n"
return A.a.i(v.charCodeAt(0)==0?v:v)},
bDC(d,e){return C.ieH(d,e)},
ieH(d,e){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l
var $async$bDC=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
if(d.length===0){u=!1
w=1
break}r=B.hL([d],"application/pdf")
n=x.z
q=B.aWE(B.a([r],x.e3),e,B.I(["type","application/pdf"],n,n))
p=B.cv(B.I(["files",B.a([q],x.fA),"title",e],x.N,x.C))
n=window.navigator
n.toString
o=n
w=7
return B.b(B.ef(B.jP(o,"share",[p]),x.H),$async$bDC)
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
return B.i($async$bDC,v)},
hhd(){var w=0,v=B.j(x.y),u,t,s
var $async$hhd=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=$.fxV
s=$.bD9
if(s==null)s="presentation.pdf"
if(t==null||t.length===0){u=!1
w=1
break}u=C.bDC(t,s)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$hhd,v)},
bF_(){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$bF_=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=$.fxV
l=$.bD9
k=l==null?"presentation.pdf":l
if(m==null||m.length===0){u=!1
w=1
break}w=A2.hyd()?3:4
break
case 3:w=5
return B.b(C.bDC(m,k),$async$bF_)
case 5:if(e){u=!0
w=1
break}case 4:r=$.bDa
if(r==null||r.length===0){u=!1
w=1
break}t=7
p=B.n4(null)
p.href=r
p.download=k
o=p.style
o.display="none"
q=p
o=document.body
if(o!=null)o.appendChild(q).toString
J.HM(q)
w=10
return B.b(B.bQ(A.a3,null,x.H),$async$bF_)
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
return B.i($async$bF_,v)},
hh4(){var w=0,v=B.j(x.y),u,t,s,r
var $async$hh4=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=$.bDa
if(r==null||r.length===0){u=!1
w=1
break}try{t=window
t.toString
A.lY.rm(t,r,"_blank")
u=!0
w=1
break}catch(q){u=!1
w=1
break}case 1:return B.h(u,v)}})
return B.i($async$hh4,v)},
hhl(d,e){var w=0,v=B.j(x.H),u,t
var $async$hhl=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:t=(self.URL||self.webkitURL).createObjectURL(B.hL([d],"text/html"))
t.toString
u=window
u.toString
A.lY.rm(u,t,"_blank")
return B.h(null,v)}})
return B.i($async$hhl,v)},
b4a(d,e){var w=0,v=B.j(x.y),u
var $async$b4a=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(B.b4c(d,e),$async$b4a)
case 3:if(g){u=!0
w=1
break}w=4
return B.b(B.b4b(d),$async$b4a)
case 4:u=g<2
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$b4a,v)}},D,Q,Ao,Aa,A0,A1,W,Ap,G,F,E,H,X,R,A2,A3,Aq,M,Ar,A4,As,Ab,K,At,Au,Y,N,Z,O,A_,Av,Ac,Aw,P,Ad,Ax,Ae,Af,Ay,Ag,Az,Ah,Ai,AA,AB,S,AC,I,T,U,AD,L,A5,A6,A7
J=c[1]
B=c[0]
A=c[2]
Aj=c[210]
A8=c[75]
Ak=c[54]
Al=c[65]
V=c[227]
A9=c[58]
Am=c[153]
An=c[237]
C=a.updateHolder(c[5],C)
D=c[225]
Q=c[144]
Ao=c[42]
Aa=c[229]
A0=c[226]
A1=c[238]
W=c[215]
Ap=c[137]
G=c[196]
F=c[35]
E=c[228]
H=c[97]
X=c[124]
R=c[155]
A2=c[32]
A3=c[184]
Aq=c[240]
M=c[164]
Ar=c[191]
A4=c[107]
As=c[139]
Ab=c[119]
K=c[230]
At=c[241]
Au=c[136]
Y=c[68]
N=c[204]
Z=c[84]
O=c[166]
A_=c[116]
Av=c[126]
Ac=c[121]
Aw=c[232]
P=c[128]
Ad=c[146]
Ax=c[95]
Ae=c[59]
Af=c[200]
Ay=c[40]
Ag=c[82]
Az=c[162]
Ah=c[154]
Ai=c[236]
AA=c[239]
AB=c[235]
S=c[76]
AC=c[233]
I=c[181]
T=c[52]
U=c[231]
AD=c[242]
L=c[212]
A5=c[234]
A6=c[113]
A7=c[64]
C.oj.prototype={
vK(d){var w,v,u=this,t=u.c
if(t===0)return u
w=!u.a
v=u.b
t=C.uk(t,v)
return new C.oj(t===0?!1:w,v,t)},
bQ0(d){var w,v,u,t,s,r,q=this.c
if(q===0)return $.DN()
w=q+d
v=this.b
u=new Uint16Array(w)
for(t=q-1;t>=0;--t)u[t+d]=v[t]
s=this.a
r=C.uk(w,u)
return new C.oj(r===0?!1:s,u,r)},
bQx(d){var w,v,u,t,s,r,q,p=this,o=p.c
if(o===0)return $.DN()
w=o-d
if(w<=0)return p.a?$.hiR():$.DN()
v=p.b
u=new Uint16Array(w)
for(t=d;t<o;++t)u[t-d]=v[t]
s=p.a
r=C.uk(w,u)
q=new C.oj(r===0?!1:s,u,r)
if(s)for(t=0;t<d;++t)if(v[t]!==0)return q.aJ(0,$.a44())
return q},
dX(d,e){var w,v,u,t,s,r=this
if(e<0)throw B.W(B.dM("shift-amount must be posititve "+e,null))
w=r.c
if(w===0)return r
v=A.o.aq(e,16)
if(A.o.F(e,16)===0)return r.bQ0(v)
u=w+v+1
t=new Uint16Array(u)
C.huF(r.b,w,e,t)
w=r.a
s=C.uk(u,t)
return new C.oj(s===0?!1:w,t,s)},
mF(d,e){var w,v,u,t,s,r,q,p,o,n=this
if(e<0)throw B.W(B.dM("shift-amount must be posititve "+e,null))
w=n.c
if(w===0)return n
v=A.o.aq(e,16)
u=A.o.F(e,16)
if(u===0)return n.bQx(v)
t=w-v
if(t<=0)return n.a?$.hiR():$.DN()
s=n.b
r=new Uint16Array(t)
C.i32(s,w,e,r)
w=n.a
q=C.uk(t,r)
p=new C.oj(q===0?!1:w,r,q)
if(w){if((s[v]&A.o.dX(1,u)-1)!==0)return p.aJ(0,$.a44())
for(o=0;o<v;++o)if(s[o]!==0)return p.aJ(0,$.a44())}return p},
aS(d,e){var w,v=this.a
if(v===e.a){w=C.cOL(this.b,this.c,e.b,e.c)
return v?0-w:w}return v?-1:1},
a9m(d,e){var w,v,u,t=this,s=t.c,r=d.c
if(s<r)return d.a9m(t,e)
if(s===0)return $.DN()
if(r===0)return t.a===e?t:t.vK(0)
w=s+1
v=new Uint16Array(w)
C.i30(t.b,s,d.b,r,v)
u=C.uk(w,v)
return new C.oj(u===0?!1:e,v,u)},
HS(d,e){var w,v,u,t=this,s=t.c
if(s===0)return $.DN()
w=d.c
if(w===0)return t.a===e?t:t.vK(0)
v=new Uint16Array(s)
C.bci(t.b,s,d.b,w,v)
u=C.uk(s,v)
return new C.oj(u===0?!1:e,v,u)},
bCT(d,e){var w,v,u,t,s,r=this.c,q=d.c
r=r<q?r:q
w=this.b
v=d.b
u=new Uint16Array(r)
for(t=0;t<r;++t)u[t]=w[t]&v[t]
s=C.uk(r,u)
return new C.oj(!1,u,s)},
bCS(d,e){var w,v,u=this.c,t=this.b,s=d.b,r=new Uint16Array(u),q=d.c
if(u<q)q=u
for(w=0;w<q;++w)r[w]=t[w]&~s[w]
for(w=q;w<u;++w)r[w]=t[w]
v=C.uk(u,r)
return new C.oj(!1,r,v)},
bCU(d,e){var w,v,u,t,s,r=this.c,q=d.c,p=r>q?r:q,o=this.b,n=d.b,m=new Uint16Array(p)
if(r<q){w=r
v=d}else{w=q
v=this}for(u=0;u<w;++u)m[u]=o[u]|n[u]
t=v.b
for(u=w;u<p;++u)m[u]=t[u]
s=C.uk(p,m)
return new C.oj(s!==0,m,s)},
VE(d,e){var w,v,u,t=this
if(t.c===0||e.c===0)return $.DN()
w=t.a
if(w===e.a){if(w){w=$.a44()
return t.HS(w,!0).bCU(e.HS(w,!0),!0).a9m(w,!0)}return t.bCT(e,!1)}if(w){v=t
u=e}else{v=e
u=t}return u.bCS(v.HS($.a44(),!1),!1)},
a2(d,e){var w,v,u=this,t=u.c
if(t===0)return e
w=e.c
if(w===0)return u
v=u.a
if(v===e.a)return u.a9m(e,v)
if(C.cOL(u.b,t,e.b,w)>=0)return u.HS(e,v)
return e.HS(u,!v)},
aJ(d,e){var w,v,u=this,t=u.c
if(t===0)return e.vK(0)
w=e.c
if(w===0)return u
v=u.a
if(v!==e.a)return u.a9m(e,v)
if(C.cOL(u.b,t,e.b,w)>=0)return u.HS(e,v)
return e.HS(u,!v)},
aM(d,e){var w,v,u,t,s,r,q,p=this.c,o=e.c
if(p===0||o===0)return $.DN()
w=p+o
v=this.b
u=e.b
t=new Uint16Array(w)
for(s=0;s<o;){C.huG(u[s],v,0,t,s,p);++s}r=this.a!==e.a
q=C.uk(w,t)
return new C.oj(q===0?!1:r,t,q)},
bQ_(d){var w,v,u,t
if(this.c<d.c)return $.DN()
this.aU4(d)
w=$.hbL.cq()-$.azs.cq()
v=C.hbN($.hbK.cq(),$.azs.cq(),$.hbL.cq(),w)
u=C.uk(w,v)
t=new C.oj(!1,v,u)
return this.a!==d.a&&u>0?t.vK(0):t},
ctt(d){var w,v,u,t=this
if(t.c<d.c)return t
t.aU4(d)
w=C.hbN($.hbK.cq(),0,$.azs.cq(),$.azs.cq())
v=C.uk($.azs.cq(),w)
u=new C.oj(!1,w,v)
if($.hbM.cq()>0)u=u.mF(0,$.hbM.cq())
return t.a&&u.c>0?u.vK(0):u},
aU4(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.c
if(f===$.huC&&d.c===$.huE&&g.b===$.huB&&d.b===$.huD)return
w=d.b
v=d.c
u=16-A.o.galD(w[v-1])
if(u>0){t=new Uint16Array(v+5)
s=C.huA(w,v,u,t)
r=new Uint16Array(f+5)
q=C.huA(g.b,f,u,r)}else{r=C.hbN(g.b,0,f,f+2)
s=v
t=w
q=f}p=t[s-1]
o=q-s
n=new Uint16Array(q)
m=C.hbO(t,s,o,n)
l=q+1
k=r.$flags|0
if(C.cOL(r,q,n,m)>=0){k&2&&B.aj(r)
r[q]=1
C.bci(r,l,n,m,r)}else{k&2&&B.aj(r)
r[q]=0}j=new Uint16Array(s+2)
j[s]=1
C.bci(j,s+1,t,s,j)
i=q-1
while(o>0){h=C.i31(p,r,i);--o
C.huG(h,j,0,r,o,s)
if(r[i]<h){m=C.hbO(j,s,o,n)
C.bci(r,l,n,m,r)
while(--h,r[i]<h)C.bci(r,l,n,m,r)}--i}$.huB=g.b
$.huC=f
$.huD=w
$.huE=v
$.hbK.b=r
$.hbL.b=l
$.azs.b=s
$.hbM.b=u},
gX(d){var w,v,u,t=new C.cOM(),s=this.c
if(s===0)return 6707
w=this.a?83585:429689
for(v=this.b,u=0;u<s;++u)w=t.$2(w,v[u])
return new C.cON().$1(w)},
A(d,e){if(e==null)return!1
return e instanceof C.oj&&this.aS(0,e)===0},
tV(d,e){return this.aS(0,e)>0},
M(d){var w,v,u
for(w=this.c-1,v=this.b,u=0;w>=0;--w)u=u*65536+v[w]
return this.a?-u:u},
vD(d){var w,v,u,t,s,r,q,p=this,o={},n=p.c
if(n===0)return 0
w=new Uint8Array(8);--n
v=p.b
u=16*n+A.o.galD(v[n])
if(u>1024)return p.a?-1/0:1/0
if(p.a)w[7]=128
t=u-53+1075
w[6]=(t&15)<<4
w[7]=(w[7]|A.o.aI(t,4))>>>0
o.a=o.b=0
o.c=n
s=new C.cOO(o,p)
n=s.$1(5)
w[6]=w[6]|n&15
for(r=5;r>=0;--r)w[r]=s.$1(8)
q=new C.cOP(w)
if(J.z(s.$1(1),1))if((w[0]&1)===1)q.$0()
else if(o.b!==0)q.$0()
else for(r=o.c;r>=0;--r)if(v[r]!==0){q.$0()
break}return J.lo(A.aI.gaU(w)).getFloat64(0,!0)},
u(d){var w,v,u,t,s,r=this,q=r.c
if(q===0)return"0"
if(q===1){if(r.a)return A.o.u(-r.b[0])
return A.o.u(r.b[0])}w=B.a([],x.s)
q=r.a
v=q?r.vK(0):r
while(v.c>1){u=$.hID()
if(u.c===0)B.bj(D.bbc)
t=v.ctt(u).u(0)
w.push(t)
s=t.length
if(s===1)w.push("000")
if(s===2)w.push("00")
if(s===3)w.push("0")
v=v.bQ_(u)}w.push(A.o.u(v.b[0]))
if(q)w.push("-")
return new B.ds(w,x.bJ).he(0)},
$iaUa:1,
$ihN:1}
C.aTz.prototype={
J(d,e){var w,v=this.b,u=e.a,t=v.h(0,u)
if(t!=null){this.a[t]=e
return}w=this.a
w.push(e)
v.n(0,u,w.length-1)},
gI(d){return this.a.length},
h(d,e){return this.a[e]},
n(d,e,f){var w,v
if(e<0||e>=this.a.length)return
w=this.b
v=this.a
w.W(0,v[e].a)
v[e]=f
w.n(0,f.a,e)},
cSr(d,e){var w=this.b.h(0,e)
return w!=null?this.a[w]:null},
gH(d){return A.d.gH(this.a)},
gan(d){return A.d.gan(this.a)},
gau(d){return this.a.length===0},
gcm(d){return this.a.length!==0},
gae(d){var w=this.a
return new J.kk(w,w.length,B.U(w).k("kk<1>"))}}
C.SZ.prototype={
d_B(){var w,v
if(this.as==null)this.bg1()
w=this.as
v=w==null?null:w.aqQ()
return v==null?null:v.eV()},
bg1(){var w,v
if(this.as!=null)return
w=this.Q
if(w!=null){v=w.aqQ().eV()
this.as=new C.bSW(v)}},
gZ(d){return this.at}}
C.a51.prototype={
a7(){return"CompressionType."+this.b}}
C.bKF.prototype={
eJ(d){var w,v,u,t,s=this
if(d===0)return 0
if(s.c===0){s.c=8
s.b=s.a.cs()}for(w=s.a,v=0;u=s.c,d>u;){v=A.o.dX(v,u)+(s.b&A.zX[u])
d-=u
s.c=8
u=w.b
u.toString
s.b=u[w.c++]}if(d>0){if(u===0){s.c=8
s.b=w.cs()}w=A.o.dX(v,d)
u=s.b
t=s.c-d
v=w+(A.o.fQ(u,t)&A.zX[d])
s.c=t}return v}}
C.bIX.prototype={
cQv(d,e){var w,v,u,t,s,r=this,q=new C.bKF(d)
r.cx=r.CW=r.ch=r.ay=0
if(q.eJ(8)!==66||q.eJ(8)!==90||q.eJ(8)!==104)return!1
w=r.a=q.eJ(8)-48
if(w<0||w>9)return!1
r.b=new Uint32Array(w*1e5)
v=0
for(;;){w=d.c
u=d.d
u===$&&B.c()
if(!(w<u))break
t=r.crK(q)
if(t<0)return!1
if(t===0){q.eJ(8)
q.eJ(8)
q.eJ(8)
q.eJ(8)
s=r.crN(q,e)
if(s<0)return!1
v=(v<<1|v>>>31)^s^4294967295}else if(t===2){q.eJ(8)
q.eJ(8)
q.eJ(8)
q.eJ(8)
return!0}}return!0},
crK(d){var w,v,u,t
for(w=!0,v=!0,u=0;u<6;++u){t=d.eJ(8)
if(t!==D.dA4[u])v=!1
if(t!==D.db_[u])w=!1
if(!w&&!v)return-1}return v?0:2},
crN(d3,d4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9=this,d0=4294967295,d1=d3.eJ(1),d2=((d3.eJ(8)<<8|d3.eJ(8))<<8|d3.eJ(8))>>>0
c9.c=new Uint8Array(16)
for(w=0;w<16;++w){v=c9.c
u=d3.eJ(1)
v.$flags&2&&B.aj(v)
v[w]=u}c9.d=new Uint8Array(256)
for(w=0,t=0;w<16;++w,t+=16)if(c9.c[w]!==0)for(s=0;s<16;++s){v=c9.d
u=d3.eJ(1)
v.$flags&2&&B.aj(v)
v[t+s]=u}c9.c6c()
v=c9.fx
if(v===0)return-1
r=v+2
q=d3.eJ(3)
if(q<2||q>6)return-1
v=d3.eJ(15)
c9.ax=v
if(v<1)return-1
c9.w=new Uint8Array(18002)
c9.x=new Uint8Array(18002)
for(w=0;v=c9.ax,w<v;++w){for(s=0;;){if(d3.eJ(1)===0)break;++s
if(s>=q)return-1}v=c9.w
v.$flags&2&&B.aj(v)
v[w]=s}p=new Uint8Array(6)
for(w=0;w<q;++w)p[w]=w
for(u=c9.x,o=c9.w,n=u.$flags|0,w=0;w<v;++w){m=o[w]
l=p[m]
for(;m>0;m=k){k=m-1
p[m]=p[k]}p[0]=l
n&2&&B.aj(u)
u[w]=l}c9.fr=B.c0(6,$.hGC(),!1,x.E)
for(j=0;j<q;++j){v=c9.fr
v[j]=new Uint8Array(258)
i=d3.eJ(5)
for(w=0;w<r;++w){for(;;){if(i<1||i>20)return-1
if(d3.eJ(1)===0)break
i=d3.eJ(1)===0?i+1:i-1}v=c9.fr[j]
v.$flags&2&&B.aj(v)
v[w]=i}}v=$.hGB()
u=x.an
c9.y=B.c0(6,v,!1,u)
c9.z=B.c0(6,v,!1,u)
c9.Q=B.c0(6,v,!1,u)
c9.as=new Int32Array(6)
for(j=0;j<q;++j){v=c9.y
v[j]=new Int32Array(258)
u=c9.z
u[j]=new Int32Array(258)
o=c9.Q
o[j]=new Int32Array(258)
for(n=c9.fr,h=32,g=0,w=0;w<r;++w){f=n[j][w]
if(f>g)g=f
if(f<h)h=f}c9.c1r(v[j],u[j],o[j],n[j],h,g,r)
v=c9.as
v.$flags&2&&B.aj(v)
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
a3=c9.avW(d3)
if(a3<0)return-1
for(a4=0;;){if(a3===e)break
if(a3===0||a3===1){a5=-1
a6=1
do{if(a6>=2097152)return-1
if(a3===0)a5+=a6
else if(a3===1)a5+=2*a6
a6*=2
a3=c9.avW(d3)}while(a3===0||a3===1);++a5
v=c9.e
v===$&&B.c()
a7=v[c9.f[c9.r[0]]]
v=c9.at
u=v[a7]
v.$flags&2&&B.aj(v)
v[a7]=u+a5
for(v=c9.b;a5>0;){if(a4>=d)return-1
v===$&&B.c()
v.$flags&2&&B.aj(v)
v[a4]=a7;++a4;--a5}continue}else{if(a4>=d)return-1
a8=a3-1
v=c9.r
u=c9.f
if(a8<16){a9=v[0]
a7=u[a9+a8]
for(v=u.$flags|0;a8>3;){b0=a9+a8
o=b0-1
n=u[o]
v&2&&B.aj(u)
u[b0]=n
n=b0-2
u[o]=u[n]
o=b0-3
u[n]=u[o]
u[o]=u[b0-4]
a8-=4}while(a8>0){o=a9+a8
n=u[o-1]
v&2&&B.aj(u)
u[o]=n;--a8}v&2&&B.aj(u)
u[a9]=a7}else{b1=A.o.aq(a8,16)
b2=A.o.F(a8,16)
a9=v[b1]+b2
a7=u[a9]
for(o=u.$flags|0;n=v[b1],a9>n;a9=b3){b3=a9-1
n=u[b3]
o&2&&B.aj(u)
u[a9]=n}v.$flags&2&&B.aj(v)
v[b1]=n+1
while(b1>0){v[b1]=v[b1]-1
n=v[b1];--b1
b4=u[v[b1]+16-1]
o&2&&B.aj(u)
u[n]=b4}v[0]=v[0]-1
n=v[0]
o&2&&B.aj(u)
u[n]=a7
if(v[0]===0)for(a0=4095,a1=15;a1>=0;--a1){for(a2=15;a2>=0;--a2){u[a0]=u[v[a1]+a2];--a0}v[a1]=a0+1}}v=c9.at
u=c9.e
u===$&&B.c()
o=u[a7]
n=v[o]
v.$flags&2&&B.aj(v)
v[o]=n+1
n=c9.b
n===$&&B.c()
u=u[a7]
n.$flags&2&&B.aj(n)
n[a4]=u;++a4
a3=c9.avW(d3)
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
u.$flags&2&&B.aj(u)
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
d4.bu(c3)
c1=(c1<<8^D.Iy[c1>>>24&255^v])>>>0;--c2}if(c4===c0)return c1
if(c4>c0)return-1
v=c9.b
b5=v[b5]
b6=b5>>>8
if(b8===0){b8=D.ID[b9];++b9
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
if(b8===0){b8=D.ID[b9];++b9
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
if(b8===0){b8=D.ID[b9];++b9
if(b9===512)b9=0}u=b8===1?1:0
c5=b5&255^u;++c4
if(c4===c0){c6=b7
b5=b6
c2=3
continue}if(c5!==b7){c6=c5
b5=b6
c2=3
continue}b5=v[b6]
if(b8===0){b8=D.ID[b9];++b9
if(b9===512)b9=0}u=b8===1?1:0
c2=(b5&255^u)+4
b5=v[b5>>>8]
b6=b5>>>8
if(b8===0){b8=D.ID[b9];++b9
if(b9===512)b9=0}v=b8===1?1:0
c6=b5&255^v
c4=c4+1+1
b5=b6}else for(c7=b7,c2=0,c3=0,c4=1;;c3=c7,c7=c8){if(c2>0){for(v=c3&255;;){if(c2===1)break
d4.bu(c3)
c1=c1<<8^D.Iy[c1>>>24&255^v];--c2}d4.bu(c3)
c1=(c1<<8^D.Iy[c1>>>24&255^v])>>>0}if(c4>c0)return-1
if(c4===c0)return c1
v=1e5*c9.a
if(b5>=v)return-1
u=c9.b
b5=u[b5]
c5=b5&255
b5=b5>>>8;++c4
c2=0
if(c5!==c7){d4.bu(c7)
c1=(c1<<8^D.Iy[c1>>>24&255^c7&255])>>>0
c8=c5
continue}if(c4===c0){d4.bu(c7)
c1=(c1<<8^D.Iy[c1>>>24&255^c7&255])>>>0
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
avW(d){var w,v,u,t,s=this,r=s.ay
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
t=d.eJ(u)
for(;;){if(u>20)return-1
r=s.cy
r===$&&B.c()
if(t<=r[u])break;++u
t=(t<<1|d.eJ(1))>>>0}r=s.dx
r===$&&B.c()
r=t-r[u]
if(r<0||r>=258)return-1
w=s.db
w===$&&B.c()
return w[r]},
c1r(d,e,f,g,h,i,j){var w,v,u,t,s,r,q,p
for(w=f.$flags|0,v=h,u=0;v<=i;++v)for(t=0;t<j;++t)if(g[t]===v){w&2&&B.aj(f)
f[u]=t;++u}for(w=e.$flags|0,v=0;v<23;++v){w&2&&B.aj(e)
e[v]=0}for(v=0;v<j;++v){s=g[v]+1
r=e[s]
w&2&&B.aj(e)
e[s]=r+1}for(v=1;v<23;++v){s=e[v]
r=e[v-1]
w&2&&B.aj(e)
e[v]=s+r}for(s=d.$flags|0,v=0;v<23;++v){s&2&&B.aj(d)
d[v]=0}for(v=h,q=0;v<=i;v=p){p=v+1
q+=e[p]-e[v]
s&2&&B.aj(d)
d[v]=q-1
q=q<<1>>>0}for(v=h+1;v<=i;++v){s=d[v-1]
r=e[v]
w&2&&B.aj(e)
e[v]=(s+1<<1>>>0)-r}},
c6c(){var w,v,u,t=this
t.fx=0
t.e=new Uint8Array(256)
for(w=0;w<256;++w){v=t.d
v===$&&B.c()
if(v[w]!==0){v=t.e
u=t.fx++
v.$flags&2&&B.aj(v)
v[u]=w}}}}
C.cGK.prototype={
aKf(d,e,f){var w,v,u,t,s,r=this,q=r.a=r.bTE(e)
if(q<0)return
e.c=q
if(e.aT()!==101010256)return
e.b4()
e.b4()
e.b4()
e.b4()
r.f=e.aT()
r.r=e.aT()
w=e.b4()
if(w>0)e.aKi(w,!1)
r.cs7(e)
q=r.r
v=r.f
u=e.aNo(Math.min(v,1024),v,q)
q=r.x
for(;;){v=u.c
t=u.d
t===$&&B.c()
if(!(v<t))break
if(u.aT()!==33639248)break
s=new C.baX()
s.d_A(0,u,e,f)
q.push(s)}},
cs7(d){var w,v,u,t,s=d.c,r=this.a-20
if(r<0)return
w=d.a92(20,r)
if(w.aT()!==117853008){d.c=s
return}w.aT()
v=w.tG()
w.aT()
d.c=v
if(d.aT()!==101075792){d.c=s
return}d.tG()
d.b4()
d.b4()
d.aT()
d.aT()
d.tG()
d.tG()
u=d.tG()
t=d.tG()
this.f=u
this.r=t
d.c=s},
bTE(d){var w,v,u,t,s,r,q,p,o,n
if(d.gI(0)<=4)return-1
w=d.c
v=d.gI(0)-4
u=Math.min(v,1024)
t=v-u
for(s=u-4;t>=0;){d.c=t
r=d.a92(u,t)
q=d.c
p=r.b
d.c=q+(p==null?0:p.length-r.c)
o=new B.anr(A.iu)
o.aOD(r.eV(),A.iu,null,null)
for(n=s;n>=0;--n){o.c=n
if(o.aT()===101010256){d.c=w
return t+n}}t=t>0&&t<u?0:t-u}return-1}}
C.cGI.prototype={}
C.az4.prototype={
a7(){return"ZipEncryptionMode."+this.b}}
C.cGL.prototype={
aKf(d,e,f){var w,v,u,t,s,r,q,p,o=this
if(e.aT()!==67324752)return
e.b4()
o.b=e.b4()
w=D.aIG.h(0,e.b4())
o.c=w==null?D.Nv:w
o.d=e.b4()
o.e=e.b4()
o.f=e.aT()
o.r=e.aT()
o.w=e.aT()
v=e.b4()
u=e.b4()
o.x=e.apt(v)
o.y=e.hq(u).eV()
w=o.z
t=w.w
o.r=t
w=w.x
o.w=w
o.at=(o.b&1)!==0?D.b_V:D.EY
o.ay=f
o.Q=e.hq(t)
if(o.at!==D.EY&&u>2){w=o.y
w.toString
s=B.rK(w,A.iu,null,null)
for(;;){w=s.c
t=s.d
t===$&&B.c()
if(!(w<t))break
if(s.b4()===39169){s.b4()
s.b4()
s.apt(2)
w=s.b
w.toString
r=w[s.c++]
q=s.b4()
o.at=D.b_W
o.ax=new C.cGI(r,q)
w=D.aIG.h(0,q)
o.c=w==null?D.Nv:w}}}if((o.b&8)!==0){p=e.aT()
if(p===134695760)o.f=e.aT()
else o.f=p
o.r=e.aT()
o.w=e.aT()}},
gI(d){return this.bpL().length},
aqQ(){var w,v,u,t,s,r=this,q=null,p=r.Q
if(p==null)return B.rK(new Uint8Array(0),A.iu,q,q)
w=r.at
if(w!==D.EY)if(p.gI(0)<=0)r.at=D.EY
else{if(w===D.b_V){p=r.bOi(p)
r.Q=p}else if(w===D.b_W){p=r.bNW(p)
r.Q=p}r.at=D.EY}w=r.c
if(w===D.akz){v=p.c
u=B.dk()
p=r.Q
if(p.gI(0)<=524288e3)u.b=A.q6.Ca(p.eV(),!0,!1)
else{t=B.a9N(A.iu,r.w)
p=r.Q
p.toString
A.q6.a57(p,t,!0,!1)
u.b=t.Hs()}r.Q.c=v
return B.rK(u.bl(),A.iu,q,q)}else if(w===D.akA){s=B.a9N(A.iu,32768)
p=r.Q
v=p.c
C.hM0().cQv(p,s)
u=s.Hs()
r.Q.c=v
return B.rK(u,A.iu,q,q)}else return B.rK(p.eV(),A.iu,q,q)},
bpL(){var w=this.Q
if(w==null)return new Uint8Array(0)
return w.eV()},
u(d){return this.x},
bbQ(d){var w=this.ch,v=C.KI(C.hBW(w[0].M(0),d))
w[0]=v
v=w[1].a2(0,v.VE(0,C.KI(255)))
w[1]=v
w[1]=v.aM(0,C.KI(134775813)).a2(0,C.KI(1)).VE(0,C.KI(4294967295))
w[2]=C.KI(C.hBW(w[2].M(0),w[1].mF(0,24).M(0)))},
aTt(){var w=(this.ch[2].VE(0,C.KI(65535)).M(0)|2)>>>0
return w*((w^1)>>>0)>>>8&255},
bOi(d){var w,v,u,t,s,r=this,q=null
if(r.Q==null)return B.rK(new Uint8Array(0),A.iu,q,q)
for(w=0;w<12;++w){v=r.Q
u=v.b
u.toString
r.bbQ(u[v.c++]^r.aTt())}t=r.Q.eV()
for(v=t.length,u=t.$flags|0,w=0;w<v;++w){s=t[w]^r.aTt()
r.bbQ(s)
u&2&&B.aj(t)
t[w]=s}return B.rK(t,A.iu,q,q)},
bNW(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this.ax.c
if(k===1){w=d.hq(8).eV()
v=16}else if(k===2){w=d.hq(12).eV()
v=24}else{w=d.hq(16).eV()
v=32}u=d.hq(2).eV()
t=d.hq(d.gI(0)-10)
s=d.hq(10)
r=t.eV()
k=this.ay
k.toString
q=C.i2G(k,w,v)
p=new Uint8Array(B.cd(A.aI.dt(q,0,v)))
k=v*2
o=new Uint8Array(B.cd(A.aI.dt(q,v,k)))
if(!C.hu9(A.aI.dt(q,k,k+2),u))throw B.W(B.fl("password error"))
k=new Uint8Array(16)
n=new C.bHx(k,new Uint8Array(16),p)
k=x.S
m=J.a6x(0,k)
m=n.r=new C.cpj(m)
m.c=!0
m.b=m.bp1(!0,new C.auC(p))
if(m.c)m.d=B.bq(D.oO,!0,k)
else m.d=B.bq(D.zK,!0,k)
l=C.hsl(C.hsn(),64)
l.bis(new C.auC(o))
n.w=l
n.d_6(r,0,r.length)
k=s.eV()
m=n.x
m===$&&B.c()
if(!C.hu9(k,m))throw B.W(B.fl("macs don't match"))
return B.rK(r,A.iu,null,null)}}
C.baX.prototype={
d_A(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=this
n.a=e.b4()
e.b4()
e.b4()
e.b4()
e.b4()
e.b4()
e.aT()
n.w=e.aT()
n.x=e.aT()
w=e.b4()
v=e.b4()
u=e.b4()
n.y=e.b4()
e.b4()
n.Q=e.aT()
n.as=e.aT()
if(w>0)n.at=e.apt(w)
if(v>0){t=e.hq(v).eV()
n.ax=t
if(v>=4){s=B.rK(t,A.iu,null,null)
for(;;){t=s.c
r=s.d
r===$&&B.c()
if(!(t<r))break
q=s.b4()
p=s.b4()
o=s.a92(p,s.c)
t=s.c
r=o.b
s.c=t+(r==null?0:r.length-o.c)
if(q===1){if(p>=8&&n.x===4294967295){n.x=o.tG()
p-=8}if(p>=8&&n.w===4294967295){n.w=o.tG()
p-=8}if(p>=8&&n.as===4294967295){n.as=o.tG()
p-=8}if(p>=4&&n.y===65535)n.y=o.aT()}}}}if(u>0)e.apt(u)
f.c=n.as
t=new C.cGL(D.Nv,n,D.EY,B.a([C.KI(0),C.KI(0),C.KI(0)],x.f3))
n.ch=t
t.aKf(0,f,g)},
u(d){return this.at}}
C.cGJ.prototype={
cQw(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=new C.cGK(B.a([],x.fT))
this.a=g
g.aKf(0,d,f)
g=B.a([],x.bm)
w=B.T(x.N,x.S)
v=new C.aTz(g,w)
for(u=this.a.x,t=u.length,s=0;s<u.length;u.length===t||(0,B.J)(u),++s){r=u[s]
q=r.ch
p=r.Q>>>16
o=q.x
n=A.a.c7(o,"/")||A.a.c7(o,"\\")
m=w.h(0,o)
l=m!=null?g[m]:h
if(l==null){l=n?new C.SZ(o,A.o.aq(Date.now(),1000),0):C.hkh(o,q.w,q)
v.J(0,l)}l.b=p
if(r.a>>>8===3)if((p&61440)===40960){k=C.hkh(o,q.w,q)
if(k.as==null)k.bg1()
o=k.as
if(o==null)j=h
else{o=o.a
j=new B.anr(A.iu)
j.aOD(o,A.iu,h,h)}i=j==null?h:j.eV()
if(i!=null)new B.GW(!1).E4(i,0,h,!0)}}return v}}
C.bHx.prototype={
d_6(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.w
l===$&&B.c()
l.a.D2(0,d,0,f)
for(l=e+f,w=m.c,v=d.$flags|0,u=m.b,t=e;t<l;t=s){s=t+16
r=s<=l?16:l-t
C.hLK(u,m.a)
q=m.r
if(16>u.byteLength)B.bj(B.dM("Input buffer too short",null))
if(16>w.byteLength)B.bj(B.dM("Output buffer too short",null))
p=q.c
o=q.b
if(p){o===$&&B.c()
q.bRQ(u,0,w,0,o)}else{o===$&&B.c()
q.bOm(u,0,w,0,o)}for(n=0;n<r;++n){q=t+n
p=d[q]
o=w[n]
v&2&&B.aj(d)
d[q]=p^o}++m.a}l=m.w
w=l.b
w===$&&B.c()
w=new Uint8Array(w)
m.x=w
l.LM(w,0)
m.x=A.aI.dt(m.x,0,10)
w=m.w
l=w.a
l.ir(0)
w=w.d
w===$&&B.c()
l.D2(0,w,0,w.length)
return f}}
C.cpo.prototype={}
C.cps.prototype={}
C.cpm.prototype={}
C.auC.prototype={}
C.cpr.prototype={
cQL(d,e,f,g){var w,v,u,t,s,r,q,p,o=this,n=o.a
n===$&&B.c()
w=n.c
n=o.b
v=n.b
v===$&&B.c()
u=A.o.ed(w+v-1,v)
t=new Uint8Array(4)
s=new Uint8Array(u*v)
n.bis(new C.auC(A.aI.fO(d,e)))
for(r=0,q=1;q<=u;++q){for(p=3;;--p){t[p]=t[p]+1
if(t[p]!==0)break}n=o.a
o.bSY(n.a,n.b,t,s,r)
r+=v}A.aI.h9(f,g,g+w,s)
return o.a.c},
bSY(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m=this
if(e<=0)throw B.W(B.dM("Iteration count must be at least 1.",null))
w=m.b
v=w.a
v.D2(0,d,0,d.length)
v.D2(0,f,0,4)
u=m.c
u===$&&B.c()
w.LM(u,0)
u=m.c
A.aI.h9(g,h,h+u.length,u)
for(u=g.$flags|0,t=1;t<e;++t){s=m.c
v.D2(0,s,0,s.length)
w.LM(m.c,0)
for(s=m.c,r=s.length,q=0;q!==r;++q){p=h+q
o=g[p]
n=s[q]
u&2&&B.aj(g)
g[p]=o^n}}}}
C.cpn.prototype={}
C.cpl.prototype={}
C.auD.prototype={
A(d,e){var w,v,u
if(e==null)return!1
w=!1
if(e instanceof C.auD){v=this.a
v===$&&B.c()
u=e.a
u===$&&B.c()
if(v===u){w=this.b
w===$&&B.c()
v=e.b
v===$&&B.c()
v=w===v
w=v}}return w},
tV(d,e){var w=this.a
w===$&&B.c()
w=A.o.tV(w,e.gc1I())
if(!w)e.gc1I()
return w},
aMO(d,e){this.a=0
this.b=d},
tY(d){return this.aMO(d,null)},
aNr(d){var w,v=this,u=v.b
u===$&&B.c()
w=u+d
u=w>>>0
v.b=u
if(w!==u){u=v.a
u===$&&B.c();++u
v.a=u
v.a=u>>>0}},
u(d){var w=this,v=new B.fd(""),u=w.a
u===$&&B.c()
w.b3t(v,u)
u=w.b
u===$&&B.c()
w.b3t(v,u)
u=v.a
return u.charCodeAt(0)==0?u:u},
b3t(d,e){var w,v=A.o.ft(e,16)
for(w=8-v.length;w>0;--w)d.a+="0"
d.a+=v},
gX(d){var w,v=this.a
v===$&&B.c()
w=this.b
w===$&&B.c()
return B.bx(v,w,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h)}}
C.cpq.prototype={
ir(d){var w,v=this
v.a.tY(0)
v.c=0
A.aI.hx(v.b,0,4,0)
v.w=0
w=v.r
A.d.hx(w,0,w.length,0)
w=v.f
w[0]=1732584193
w[1]=4023233417
w[2]=2562383102
w[3]=271733878
w[4]=3285377520},
aqj(d){var w,v=this,u=v.b,t=v.c
t===$&&B.c()
w=t+1
v.c=w
u.$flags&2&&B.aj(u)
u[t]=d&255
if(w===4){v.b4W(u,0)
v.c=0}v.a.aNr(1)},
D2(d,e,f,g){var w=this.cqt(e,f,g)
f+=w
g-=w
w=this.cqu(e,f,g)
this.cqk(e,f+w,g-w)},
LM(d,e){var w,v=this,u=C.hsm(v.a),t=u.a
t===$&&B.c()
t=C.hhU(t,3)
u.a=t
w=u.b
w===$&&B.c()
u.a=(t|w>>>29)>>>0
u.b=C.hhU(w,3)
v.cqo()
v.cql(u)
v.auK()
v.cku(d,e)
v.ir(0)
return 20},
b4W(d,e){var w=this,v=w.w
v===$&&B.c()
w.w=v+1
w.r[v]=J.ou(A.aI.gaU(d),d.byteOffset,d.length).getUint32(e,A.iG===w.d)
if(w.w===16)w.auK()},
auK(){this.d_5()
this.w=0
A.d.hx(this.r,0,16,0)},
cqk(d,e,f){while(f>0){this.aqj(d[e]);++e;--f}},
cqu(d,e,f){var w,v
for(w=this.a,v=0;f>4;){this.b4W(d,e)
e+=4
f-=4
w.aNr(4)
v+=4}return v},
cqt(d,e,f){var w,v=0
for(;;){w=this.c
w===$&&B.c()
if(!(w!==0&&f>0))break
this.aqj(d[e]);++e;--f;++v}return v},
cqo(){this.aqj(128)
for(;;){var w=this.c
w===$&&B.c()
if(!(w!==0))break
this.aqj(0)}},
cql(d){var w,v=this,u=v.w
u===$&&B.c()
if(u>14)v.auK()
u=v.d
switch(u){case A.iG:u=v.r
w=d.b
w===$&&B.c()
u[14]=w
w=d.a
w===$&&B.c()
u[15]=w
break
case A.Fo:u=v.r
w=d.a
w===$&&B.c()
u[14]=w
w=d.b
w===$&&B.c()
u[15]=w
break
default:throw B.W(B.bc("Invalid endianness: "+u.u(0)))}},
cku(d,e){var w,v,u,t,s,r,q
for(w=this.e,v=this.f,u=d.length,t=A.iG===this.d,s=0;s<w;++s){r=v[s]
q=J.ou(A.aI.gaU(d),d.byteOffset,u)
q.$flags&2&&B.aj(q,11)
q.setUint32(e+s*4,r,t)}},
gd6(d){return this.f}}
C.cpt.prototype={
d_5(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
for(w=this.r,v=16;v<80;++v){u=w[v-3]^w[v-8]^w[v-14]^w[v-16]
w[v]=((u&$.qx[1])<<1|u>>>31)>>>0}t=this.f
s=t[0]
r=t[1]
q=t[2]
p=t[3]
o=t[4]
for(n=s,m=0,l=0;l<4;++l,m=j){k=$.qx[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r&q|~r&p)>>>0)+w[m]+1518500249>>>0
i=$.qx[30]
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
q=((q&i)<<30|q>>>2)>>>0}for(l=0;l<4;++l,m=j){k=$.qx[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r^q^p)>>>0)+w[m]+1859775393>>>0
i=$.qx[30]
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
q=((q&i)<<30|q>>>2)>>>0}for(l=0;l<4;++l,m=j){k=$.qx[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r&q|r&p|q&p)>>>0)+w[m]+2400959708>>>0
i=$.qx[30]
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
q=((q&i)<<30|q>>>2)>>>0}for(l=0;l<4;++l,m=j){k=$.qx[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r^q^p)>>>0)+w[m]+3395469782>>>0
i=$.qx[30]
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
C.cpp.prototype={
bis(d){var w,v,u,t,s=this,r=s.a
r.ir(0)
w=d.a
w===$&&B.c()
v=w.length
u=s.c
u===$&&B.c()
if(v>u){r.D2(0,w,0,v)
w=s.d
w===$&&B.c()
r.LM(w,0)
w=s.b
w===$&&B.c()
v=w}else{t=s.d
t===$&&B.c()
A.aI.h9(t,0,v,w)}w=s.d
w===$&&B.c()
A.aI.hx(w,v,w.length,0)
w=s.e
w===$&&B.c()
A.aI.h9(w,0,u,s.d)
s.bd3(s.d,u,54)
s.bd3(s.e,u,92)
u=s.d
r.D2(0,u,0,u.length)},
LM(d,e){var w,v,u=this,t=u.a,s=u.e
s===$&&B.c()
w=u.c
w===$&&B.c()
t.LM(s,w)
s=u.e
t.D2(0,s,0,s.length)
v=t.LM(d,e)
s=u.e
A.aI.hx(s,w,s.length,0)
s=u.d
s===$&&B.c()
t.D2(0,s,0,s.length)
return v},
bd3(d,e,f){var w,v,u
for(w=d.$flags|0,v=0;v<e;++v){u=d[v]
w&2&&B.aj(d)
d[v]=u^f}}}
C.cpk.prototype={}
C.cpj.prototype={
a3m(d){return(D.oO[d&255]&255|(D.oO[d>>>8&255]&255)<<8|(D.oO[d>>>16&255]&255)<<16|D.oO[d>>>24&255]<<24)>>>0},
bp1(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=a0.a
e===$&&B.c()
w=e.length
if(w<16||w>32||(w&7)!==0)throw B.W(B.dM("Key length not 128/192/256 bits.",null))
v=w>>>2
u=v+6
f.a=u
t=u+1
s=J.e4(t,x.bW)
for(u=x.S,r=0;r<t;++r)s[r]=B.c0(4,0,!1,u)
switch(v){case 4:q=J.ou(A.aI.gaU(e),e.byteOffset,w)
p=q.getUint32(0,!0)
e=s[0]
e[0]=p
o=q.getUint32(4,!0)
e[1]=o
n=q.getUint32(8,!0)
e[2]=n
m=q.getUint32(12,!0)
e[3]=m
for(r=1;r<=10;++r){p=(p^f.a3m((m>>>8|(m&$.qx[24])<<24)>>>0)^D.cMT[r-1])>>>0
e=s[r]
e[0]=p
o=(o^p)>>>0
e[1]=o
n=(n^o)>>>0
e[2]=n
m=(m^n)>>>0
e[3]=m}break
case 6:q=J.ou(A.aI.gaU(e),e.byteOffset,w)
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
p=(p^f.a3m((k>>>8|(k&$.qx[24])<<24)>>>0)^j)>>>0
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
p=(p^f.a3m((k>>>8|(k&$.qx[24])<<24)>>>0)^i)>>>0
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
case 8:q=J.ou(A.aI.gaU(e),e.byteOffset,w)
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
p=(p^f.a3m((g>>>8|(g&$.qx[24])<<24)>>>0)^j)>>>0
e=s[r]
e[0]=p
o=(o^p)>>>0
e[1]=o
n=(n^o)>>>0
e[2]=n
m=(m^n)>>>0
e[3]=m;++r
if(r>=15)break
l=(l^f.a3m(m))>>>0
e=s[r]
e[0]=l
k=(k^l)>>>0
e[1]=k
h=(h^k)>>>0
e[2]=h
g=(g^h)>>>0
e[3]=g;++r}break
default:throw B.W(B.bc("Should never get here"))}return s},
bRQ(b2,b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=J.ou(A.aI.gaU(b2),b2.byteOffset,16),a3=a2.getUint32(b3,!0),a4=a2.getUint32(b3+4,!0),a5=a2.getUint32(b3+8,!0),a6=a2.getUint32(b3+12,!0),a7=b6[0],a8=a3^a7[0],a9=a4^a7[1],b0=a5^a7[2],b1=a6^a7[3]
for(a7=this.a-1,w=1;w<a7;){v=D.ep[a8&255]
u=D.ep[a9>>>8&255]
t=$.qx[8]
s=D.ep[b0>>>16&255]
r=$.qx[16]
q=D.ep[b1>>>24&255]
p=$.qx[24]
o=b6[w]
n=v^(u>>>24|(u&t)<<8)^(s>>>16|(s&r)<<16)^(q>>>8|(q&p)<<24)^o[0]
q=D.ep[a9&255]
s=D.ep[b0>>>8&255]
u=D.ep[b1>>>16&255]
v=D.ep[a8>>>24&255]
m=q^(s>>>24|(s&t)<<8)^(u>>>16|(u&r)<<16)^(v>>>8|(v&p)<<24)^o[1]
v=D.ep[b0&255]
u=D.ep[b1>>>8&255]
s=D.ep[a8>>>16&255]
q=D.ep[a9>>>24&255]
l=v^(u>>>24|(u&t)<<8)^(s>>>16|(s&r)<<16)^(q>>>8|(q&p)<<24)^o[2]
q=D.ep[b1&255]
a8=D.ep[a8>>>8&255]
a9=D.ep[a9>>>16&255]
b0=D.ep[b0>>>24&255];++w
b1=q^(a8>>>24|(a8&t)<<8)^(a9>>>16|(a9&r)<<16)^(b0>>>8|(b0&p)<<24)^o[3]
o=D.ep[n&255]
b0=D.ep[m>>>8&255]
a9=D.ep[l>>>16&255]
a8=D.ep[b1>>>24&255]
q=b6[w]
a8=o^(b0>>>24|(b0&t)<<8)^(a9>>>16|(a9&r)<<16)^(a8>>>8|(a8&p)<<24)^q[0]
a9=D.ep[m&255]
b0=D.ep[l>>>8&255]
o=D.ep[b1>>>16&255]
s=D.ep[n>>>24&255]
a9=a9^(b0>>>24|(b0&t)<<8)^(o>>>16|(o&r)<<16)^(s>>>8|(s&p)<<24)^q[1]
s=D.ep[l&255]
o=D.ep[b1>>>8&255]
b0=D.ep[n>>>16&255]
u=D.ep[m>>>24&255]
b0=s^(o>>>24|(o&t)<<8)^(b0>>>16|(b0&r)<<16)^(u>>>8|(u&p)<<24)^q[2]
u=D.ep[b1&255]
o=D.ep[n>>>8&255]
s=D.ep[m>>>16&255]
v=D.ep[l>>>24&255];++w
b1=u^(o>>>24|(o&t)<<8)^(s>>>16|(s&r)<<16)^(v>>>8|(v&p)<<24)^q[3]}n=D.ep[a8&255]^C.nQ(D.ep[a9>>>8&255],24)^C.nQ(D.ep[b0>>>16&255],16)^C.nQ(D.ep[b1>>>24&255],8)^b6[w][0]
m=D.ep[a9&255]^C.nQ(D.ep[b0>>>8&255],24)^C.nQ(D.ep[b1>>>16&255],16)^C.nQ(D.ep[a8>>>24&255],8)^b6[w][1]
l=D.ep[b0&255]^C.nQ(D.ep[b1>>>8&255],24)^C.nQ(D.ep[a8>>>16&255],16)^C.nQ(D.ep[a9>>>24&255],8)^b6[w][2]
b1=D.ep[b1&255]^C.nQ(D.ep[a8>>>8&255],24)^C.nQ(D.ep[a9>>>16&255],16)^C.nQ(D.ep[b0>>>24&255],8)^b6[w][3]
a7=D.oO[n&255]
b0=D.oO[m>>>8&255]
v=this.d
u=v[l>>>16&255]
t=v[b1>>>24&255]
s=b6[w+1]
r=s[0]
q=v[m&255]
p=D.oO[l>>>8&255]
a9=D.oO[b1>>>16&255]
o=v[n>>>24&255]
k=s[1]
j=v[l&255]
i=D.oO[b1>>>8&255]
h=D.oO[n>>>16&255]
g=D.oO[m>>>24&255]
f=s[2]
e=v[b1&255]
d=v[n>>>8&255]
v=v[m>>>16&255]
a0=D.oO[l>>>24&255]
s=s[3]
a1=J.ou(A.aI.gaU(b4),b4.byteOffset,16)
a1.$flags&2&&B.aj(a1,11)
a1.setUint32(b5,(a7&255^(b0&255)<<8^(u&255)<<16^t<<24^r)>>>0,!0)
r=J.ou(A.aI.gaU(b4),b4.byteOffset,16)
r.$flags&2&&B.aj(r,11)
r.setUint32(b5+4,(q&255^(p&255)<<8^(a9&255)<<16^o<<24^k)>>>0,!0)
k=J.ou(A.aI.gaU(b4),b4.byteOffset,16)
k.$flags&2&&B.aj(k,11)
k.setUint32(b5+8,(j&255^(i&255)<<8^(h&255)<<16^g<<24^f)>>>0,!0)
f=J.ou(A.aI.gaU(b4),b4.byteOffset,16)
f.$flags&2&&B.aj(f,11)
f.setUint32(b5+12,(e&255^(d&255)<<8^(v&255)<<16^a0<<24^s)>>>0,!0)},
bOm(b1,b2,b3,b4,b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=J.ou(A.aI.gaU(b1),b1.byteOffset,16).getUint32(b2,!0),a1=J.ou(A.aI.gaU(b1),b1.byteOffset,16).getUint32(b2+4,!0),a2=J.ou(A.aI.gaU(b1),b1.byteOffset,16).getUint32(b2+8,!0),a3=J.ou(A.aI.gaU(b1),b1.byteOffset,16).getUint32(b2+12,!0),a4=this.a,a5=b5[a4],a6=a0^a5[0],a7=a1^a5[1],a8=a2^a5[2],a9=a4-1,b0=a3^a5[3]
for(a5=a8,a4=a7;a9>1;){w=D.eo[a6&255]
v=D.eo[b0>>>8&255]
u=$.qx[8]
t=D.eo[a5>>>16&255]
s=$.qx[16]
r=D.eo[a4>>>24&255]
q=$.qx[24]
a7=b5[a9]
p=w^(v>>>24|(v&u)<<8)^(t>>>16|(t&s)<<16)^(r>>>8|(r&q)<<24)^a7[0]
r=D.eo[a4&255]
t=D.eo[a6>>>8&255]
v=D.eo[b0>>>16&255]
w=D.eo[a5>>>24&255]
o=r^(t>>>24|(t&u)<<8)^(v>>>16|(v&s)<<16)^(w>>>8|(w&q)<<24)^a7[1]
w=D.eo[a5&255]
v=D.eo[a4>>>8&255]
t=D.eo[a6>>>16&255]
r=D.eo[b0>>>24&255]
n=w^(v>>>24|(v&u)<<8)^(t>>>16|(t&s)<<16)^(r>>>8|(r&q)<<24)^a7[2]
r=D.eo[b0&255]
a5=D.eo[a5>>>8&255]
a4=D.eo[a4>>>16&255]
a6=D.eo[a6>>>24&255];--a9
b0=r^(a5>>>24|(a5&u)<<8)^(a4>>>16|(a4&s)<<16)^(a6>>>8|(a6&q)<<24)^a7[3]
a7=D.eo[p&255]
a6=D.eo[b0>>>8&255]
a4=D.eo[n>>>16&255]
a5=D.eo[o>>>24&255]
r=b5[a9]
a6=a7^(a6>>>24|(a6&u)<<8)^(a4>>>16|(a4&s)<<16)^(a5>>>8|(a5&q)<<24)^r[0]
a5=D.eo[o&255]
a4=D.eo[p>>>8&255]
a7=D.eo[b0>>>16&255]
t=D.eo[n>>>24&255]
a4=a5^(a4>>>24|(a4&u)<<8)^(a7>>>16|(a7&s)<<16)^(t>>>8|(t&q)<<24)^r[1]
t=D.eo[n&255]
a7=D.eo[o>>>8&255]
a5=D.eo[p>>>16&255]
v=D.eo[b0>>>24&255]
a5=t^(a7>>>24|(a7&u)<<8)^(a5>>>16|(a5&s)<<16)^(v>>>8|(v&q)<<24)^r[2]
v=D.eo[b0&255]
a7=D.eo[n>>>8&255]
t=D.eo[o>>>16&255]
w=D.eo[p>>>24&255];--a9
b0=v^(a7>>>24|(a7&u)<<8)^(t>>>16|(t&s)<<16)^(w>>>8|(w&q)<<24)^r[3]}p=D.eo[a6&255]^C.nQ(D.eo[b0>>>8&255],24)^C.nQ(D.eo[a5>>>16&255],16)^C.nQ(D.eo[a4>>>24&255],8)^b5[a9][0]
o=D.eo[a4&255]^C.nQ(D.eo[a6>>>8&255],24)^C.nQ(D.eo[b0>>>16&255],16)^C.nQ(D.eo[a5>>>24&255],8)^b5[a9][1]
n=D.eo[a5&255]^C.nQ(D.eo[a4>>>8&255],24)^C.nQ(D.eo[a6>>>16&255],16)^C.nQ(D.eo[b0>>>24&255],8)^b5[a9][2]
b0=D.eo[b0&255]^C.nQ(D.eo[a5>>>8&255],24)^C.nQ(D.eo[a4>>>16&255],16)^C.nQ(D.eo[a6>>>24&255],8)^b5[a9][3]
a4=D.zK[p&255]
a5=this.d
w=a5[b0>>>8&255]
v=a5[n>>>16&255]
u=D.zK[o>>>24&255]
t=b5[0]
s=t[0]
r=a5[o&255]
q=a5[p>>>8&255]
a7=D.zK[b0>>>16&255]
m=a5[n>>>24&255]
l=t[1]
k=a5[n&255]
j=D.zK[o>>>8&255]
i=D.zK[p>>>16&255]
h=a5[b0>>>24&255]
g=t[2]
f=D.zK[b0&255]
e=a5[n>>>8&255]
a8=a5[o>>>16&255]
a5=a5[p>>>24&255]
t=t[3]
d=J.ou(A.aI.gaU(b3),b3.byteOffset,16)
d.$flags&2&&B.aj(d,11)
d.setUint32(b4,(a4&255^(w&255)<<8^(v&255)<<16^u<<24^s)>>>0,!0)
d.setUint32(b4+4,(r&255^(q&255)<<8^(a7&255)<<16^m<<24^l)>>>0,!0)
d.setUint32(b4+8,(k&255^(j&255)<<8^(i&255)<<16^h<<24^g)>>>0,!0)
d.setUint32(b4+12,(f&255^(e&255)<<8^(a8&255)<<16^a5<<24^t)>>>0,!0)}}
C.bSV.prototype={}
C.bSW.prototype={
gI(d){var w=this.a.length
return w},
aqQ(){return B.rK(this.a,A.iu,null,null)}}
C.czR.prototype={
No(d){var w=d.w,v=Math.max(1,A.i.cD(w/186)),u=Math.max(0,w-16*(v-1))/v,t=u/0.52
return new B.abr(v,t+20,u+16,t,u,B.uv(d.x))},
nF(d){return!1}}
C.bTX.prototype={
cKy(d){if(this.b)throw B.W(B.bc("FontLoader is already loaded"))
this.c.push(d.bG(new C.bTY(),x.E))},
mZ(d){var w=0,v=B.j(x.H),u=this,t,s,r,q,p
var $async$mZ=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(u.b)throw B.W(B.bc("FontLoader is already loaded"))
u.b=!0
t=u.c,s=t.length,r=u.a,q=0
case 2:if(!(q<t.length)){w=4
break}p=C
w=6
return B.b(t[q],$async$mZ)
case 6:w=5
return B.b(p.bEo(f,r),$async$mZ)
case 5:case 3:t.length===s||(0,B.J)(t),++q
w=2
break
case 4:return B.h(null,v)}})
return B.i($async$mZ,v)}}
C.axJ.prototype={
a7(){return"SystemUiMode."+this.b}}
C.a9L.prototype={
A(d,e){if(e==null)return!1
if(J.bX(e)!==B.b4(this))return!1
return e instanceof C.a9L&&e.a===this.a},
gX(d){return B.bx(B.b4(this),B.xr(this.a),A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h)},
u(d){var w="<optimized out>#"
if(B.b4(this)===D.h4G)return"["+(w+B.eb(this.a))+"]"
return"[ObjectKey "+(w+B.eb(this.a))+"]"}}
C.a2g.prototype={
S(){return new C.aL8(B.aR(x.N))},
cYd(d){return this.d.$1(d)},
cVU(){return this.e.$0()}}
C.aL8.prototype={
Y(){this.a4()
this.PO()},
PO(){var w=0,v=B.j(x.H),u,t=this,s
var $async$PO=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.a.cVU(),$async$PO)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.fio(t,s))
case 1:return B.h(u,v)}})
return B.i($async$PO,v)},
a__(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a__=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.a.c
q=B.U(r).k("Y<1>")
p=B.C(new B.Y(r,new C.fis(t),q),q.k("M.E"))
if(p.length===0||t.r){w=1
break}t.m(new C.fit(t))
w=3
return B.b(C.apa(p),$async$a__)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.fiu(t,s,p))
w=4
return B.b(t.PO(),$async$a__)
case 4:case 1:return B.h(u,v)}})
return B.i($async$a__,v)},
a2h(d){return this.cuF(d)},
cuF(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a2h=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}t.m(new C.fip(t))
s=J.t(d,"id")
w=3
return B.b(C.c3V(J.k(s==null?"":s)),$async$a2h)
case 3:r=f
if(r==null){if(t.c==null){w=1
break}t.m(new C.fiq(t))
w=1
break}q=C.hhj(r,!1)
q.z=!1
s=t.a
s.toString
w=4
return B.b(s.cYd(B.a([q],x.D)),$async$a2h)
case 4:if(t.c==null){w=1
break}t.m(new C.fir(t,r))
case 1:return B.h(u,v)}})
return B.i($async$a2h,v)},
PN(d,e){return this.bOO(0,e)},
bOO(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$PN=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}s=J.a7(e)
r=s.h(e,"name")
q=J.k(r==null?"this presentation":r)
r=t.c
r.toString
w=3
return B.b(B.cg(null,null,!0,null,new C.fij(q),r,null,!0,!0,x.y),$async$PN)
case 3:if(g!==!0||t.c==null){w=1
break}t.m(new C.fik(t))
s=s.h(e,"id")
w=4
return B.b(C.ap9(J.k(s==null?"":s)),$async$PN)
case 4:if(t.c==null){w=1
break}t.m(new C.fil(t))
w=5
return B.b(t.PO(),$async$PN)
case 5:case 1:return B.h(u,v)}})
return B.i($async$PN,v)},
cJx(d){var w=B.bh(d),v=w==null?null:w.bT()
if(v==null)return""
return A.iT[B.bM(v)-1]+" "+B.bV(v)},
aTk(d,e){var w=null,v=B.m(e*0.3)
return B.q(w,B.X(d,A.c,w,w,w,e*0.5),A.f,w,w,new B.p(w,w,w,v,w,D.Q9,A.n),w,e,w,w,w,w,w,e)},
aTj(d){return this.aTk(d,44)},
ba8(d,e,f,g){var w,v,u=null,t=this.w===d,s=t?D.Q9:u,r=B.m(14),q=B.X(e,t?A.c:A.aD,u,u,u,17),p=x.p
q=B.a([q,A_.AH,B.d(f,u,u,u,u,u,u,B.l(u,u,t?A.c:A.aD,u,u,u,u,u,u,u,u,13.5,u,u,A.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],p)
if(g>0){w=A.c.j(t?0.25:0.1)
v=B.m(10)
A.d.v(q,B.a([A_.AH,B.q(u,B.d(""+g,u,u,u,u,u,u,B.l(u,u,t?A.c:A.aR,u,u,u,u,u,u,u,u,11,u,u,A.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.f,u,u,new B.p(w,u,u,v,u,u,A.n),u,u,u,u,D.bIt,u,u,u)],p))}return B.E(B.az(A.c2,B.cT(u,B.A(q,A.l,u,A.ba,A.j,0,u,u),u,u,A.b_,new B.p(u,u,u,r,u,s,A.n),A.h3,u,u,u,u,A.qC,u,u,u),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.fiy(this,d),u,u,u,u,u,u,!1,A.a4),1)},
cor(d){var w,v,u,t,s,r,q=null,p=this.d.q(0,d.a),o=p?A.d7.j(0.14):D.a_8,n=B.m(18),m=p?A.d7:A.dr
m=B.L(m,A.r,p?1.8:1)
w=this.aTj(A.qP)
v=B.d(d.b,q,1,A.a2,q,q,q,D.aWE,q,q,q)
u=d.r.length
t=u===1?"":"s"
s=x.p
t=B.E(B.x(B.a([v,A.cS,B.d(""+u+" slide"+t,q,q,q,q,q,q,D.aWG,q,q,q)],s),A.E,q,A.e,A.j,0,A.p),1)
v=p?D.Q9:q
u=p?q:B.L(A.aT,A.r,1.6)
r=p?D.bZX:q
return B.az(q,B.cT(q,B.A(B.a([w,A.bc,t,B.cT(q,r,q,q,A.b_,new B.p(q,q,u,q,q,v,A.a6),A.h_,q,26,q,q,q,q,q,26)],s),A.l,q,A.e,A.j,0,q,q),q,q,A.b_,new B.p(o,q,m,n,q,q,A.n),A.h_,q,q,q,A.d9,A.bh,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.fin(this,p,d),q,q,q,q,q,q,!1,A.a4)},
cwg(d){var w,v,u,t,s,r=this,q=null,p=J.a7(d),o=p.h(d,"savedAt"),n=r.cJx(J.k(o==null?"":o))
o=B.m(18)
w=B.L(A.dr,A.r,1)
v=r.aTj(A.Ph)
u=p.h(d,"name")
u=B.d(J.k(u==null?"Presentation":u),q,1,A.a2,q,q,q,D.aWE,q,q,q)
p=p.h(d,"slides")
p=B.w(p==null?"?":p)
t=n.length===0?"":" \xb7 saved "+n
s=x.p
t=B.E(B.x(B.a([u,A.cS,B.d(p+" slides"+t,q,q,q,q,q,q,D.aWG,q,q,q)],s),A.E,q,A.e,A.j,0,A.p),1)
p=r.b6C(A.i3,A.bx,"Bring it back",r.r?q:new C.fiv(r,d))
return B.q(q,B.A(B.a([v,A.bc,t,p,A.bo,r.b6C(A.ej,A.c0,"Delete",r.r?q:new C.fiw(r,d))],s),A.l,q,A.e,A.j,0,q,q),A.f,q,q,new B.p(D.a_8,q,w,o,q,q,A.n),q,q,q,A.d9,D.bCI,q,q,q)},
b6C(d,e,f,g){var w=null,v=g==null,u=e.j(v?0.06:0.14)
return B.h6(B.az(w,B.q(w,B.X(d,v?A.aT:e,w,w,w,19),A.f,w,w,new B.p(u,w,w,w,w,w,A.a6),w,38,w,w,w,w,w,38),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a4),w,f,w,w)},
av_(d,e,f){var w=null
return new B.D(D.bBG,B.x(B.a([B.X(d,A.aT,w,w,w,46),A.ae,B.d(e,w,w,w,w,w,w,D.fB0,w,w,w),A.aw,B.d(f,w,w,w,w,w,w,D.fsS,A.K,w,w)],x.p),A.l,w,A.e,A.j,0,A.p),w)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.e
if(h==null)h=A.ce
w=j.a.c.length
v=w!==0&&j.d.a===w
w=B.aF(d,A.c1,x.w).w
u=B.q(i,i,A.f,i,i,new B.p(A.aT,i,i,B.m(3),i,i,A.n),i,4,i,i,i,i,i,42)
t=x.p
s=B.a([j.aTk(A.zx,46),A.bc,D.bJs],t)
if(j.r)s.push(D.etn)
s.push(B.aI(i,i,i,i,A.tc,i,i,i,new C.fiB(d),i,i,i,i,i,i))
s=B.A(s,A.l,i,A.e,A.j,0,i,i)
r=A.c.j(0.05)
q=B.m(18)
p=B.L(A.dr,A.r,1)
o=J.a7(h)
q=B.a([A.W,u,new B.D(D.bFs,s,i),B.q(i,B.A(B.a([j.ba8(0,A.ze,"Save",j.a.c.length),j.ba8(1,A.Pz,"Saved",o.gI(h))],t),A.l,i,A.e,A.j,0,i,i),A.f,i,i,new B.p(r,i,p,q,i,i,A.n),i,i,i,D.bEt,A.eA,i,i,i)],t)
if(j.x!=null){u=(j.y?A.c0:A.bx).j(0.12)
s=B.m(14)
r=B.L((j.y?A.c0:A.bx).j(0.4),A.r,1)
p=j.y
n=p?A.Pl:A.ee
n=B.X(n,p?A.c0:A.bx,i,i,i,18)
m=j.x
m.toString
q.push(B.q(i,B.A(B.a([n,A.af,B.E(B.d(m,i,i,i,i,i,i,A.Vs,i,i,i),1)],t),A.l,i,A.e,A.j,0,i,i),A.f,i,i,new B.p(u,i,r,s,i,i,A.n),i,i,i,D.bEp,A.hK,i,i,1/0))}u=B.a([],t)
if(j.w===0){s=j.d.a
s=B.a([B.E(B.d(s===0?"Tap the ones to save":""+s+" picked",i,i,i,i,i,i,D.fwI,i,i,i),1)],t)
if(j.a.c.length!==0)s.push(B.az(i,B.d(v?"Clear":"Pick all",i,i,i,i,i,i,D.fzY,i,i,i),A.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new C.fiC(j,v),i,i,i,i,i,i,!1,A.a4))
s=B.a([B.A(s,A.l,i,A.e,A.j,0,i,i),A.W],t)
if(j.a.c.length===0)s.push(j.av_(A.qP,"No presentations yet","Make one first, then save it here."))
for(r=j.a.c,p=r.length,l=0;l<r.length;r.length===p||(0,B.J)(r),++l)s.push(j.cor(r[l]))
A.d.v(u,s)}else{s=B.a([],t)
if(j.f)s.push(D.esU)
else if(j.e==null)s.push(j.av_(A.a2G,"Could not reach the database","Check the connection, then open this again."))
else if(o.gau(h))s.push(j.av_(A.ov,"Nothing saved yet","Save some presentations and they will show up here."))
for(r=o.gae(h);r.C();)s.push(j.cwg(r.gR(r)))
A.d.v(u,s)}q.push(new B.dm(1,A.co,B.cl(u,i,i,A0.amn,i,i,A.ah,!0),i))
if(j.w===0){u=j.d
s=u.a===0
r=s||j.r?i:j.gc8O()
p=s?i:D.Q9
s=s?A.c.j(0.07):i
o=B.m(18)
n=u.a===0?i:B.a([new B.ab(0,A.G,A.b8.j(0.4),A.cC,18)],x.V)
u=u.a
m=u===0
k=B.X(A.ze,m?A.jZ:A.c,i,i,i,21)
u=m?"Pick presentations to save":"Save "+u+" to the database"
q.push(new B.D(D.bF4,B.az(i,B.cT(i,B.A(B.a([k,A.V1,new B.dm(1,A.co,B.ev(A.A,B.d(u,i,i,i,i,i,i,B.l(i,i,m?A.jZ:A.c,i,i,i,i,i,i,i,i,15,i,i,A.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),A.f,A.e7),i)],t),A.l,i,A.ba,A.j,0,i,i),i,i,A.b_,new B.p(s,i,i,o,n,p,A.n),A.h3,i,54,i,i,i,i,i,i),A.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,r,i,i,i,i,i,i,!1,A.a4),i))}else q.push(A.W)
return B.q(i,B.bm(!0,B.x(q,A.l,i,A.e,A.P,0,A.p),!0,!1,A.ag,!0,!1),A.f,i,new B.aY(0,1/0,0,w.a.b*0.9),D.b7U,i,i,i,i,i,i,i,i)}}
C.oN.prototype={
aj(){return B.I(["id",this.a,"doc",this.b.aj(),"updatedAt",this.c.aa().ag()],x.N,x.z)}}
C.ZZ.prototype={
S(){return new C.azE(B.a([],x.k),B.f3(null,x.H))},
ge3(){return this.c}}
C.azE.prototype={
Y(){this.a4()
this.PY()},
PY(){var w=0,v=B.j(x.H),u,t=this,s
var $async$PY=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(C.a3f(t.a.c),$async$PY)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.cQa(t,s))
case 1:return B.h(u,v)}})
return B.i($async$PY,v)},
cCA(d){var w,v,u,t=this
d.c=new B.V(Date.now(),0,!1)
w=J.ow(t.d,new C.cQd(d))
v=w<0
if(v&&C.i34(d))return t.f
u=t.d
if(v)J.n2(u,0,d)
else J.aK(u,w,d)
v=x.a
B.h7u(new C.cQe(t),v)
return t.f=t.f.bG(new C.cQf(t,d),v).eB(new C.cQg())},
Ji(d,e,f){return this.chY(0,e,f)},
b0l(d,e){return this.Ji(0,e,!1)},
chY(d,e,f){var w=0,v=B.j(x.H),u,t=this,s
var $async$Ji=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.a6(s,!1).ce(B.ec(new C.cQ9(t,e),!1,null,x.H)),$async$Ji)
case 3:w=4
return B.b(t.f,$async$Ji)
case 4:w=5
return B.b(t.PY(),$async$Ji)
case 5:case 1:return B.h(u,v)}})
return B.i($async$Ji,v)},
b_B(d){var w=A.o.u(1000*Date.now()),v=d==null?D.dN8:d
this.Ji(0,new C.oN(w,v,new B.V(Date.now(),0,!1)),!0)},
c8f(){return this.b_B(null)},
aeH(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$aeH=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.bU(A.L,null,new C.cQh(),r,!1,!1,!0,null,!1,!1,x.g2),$async$aeH)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.b_B(s)
case 1:return B.h(u,v)}})
return B.i($async$aeH,v)},
Jh(d,e){return this.bOF(0,e)},
bOF(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$Jh=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return B.b(B.cg(null,null,!0,null,new C.cQ4(e),s,null,!0,!0,x.y),$async$Jh)
case 3:if(g!==!0){w=1
break}t.m(new C.cQ5(t,e))
w=4
return B.b(t.f,$async$Jh)
case 4:w=5
return B.b(C.ahK(t.a.c,e.a),$async$Jh)
case 5:w=6
return B.b(t.PY(),$async$Jh)
case 6:case 1:return B.h(u,v)}})
return B.i($async$Jh,v)},
DQ(d){return this.bGK(d)},
bGK(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$DQ=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.bU(A.L,null,new C.cQ0(d),r,!0,!0,!1,null,!1,!1,x.N),$async$DQ)
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
return B.b(t.b0l(0,d),$async$DQ)
case 9:w=5
break
case 7:w=10
return B.b(F.hhW(r,d.b,null),$async$DQ)
case 10:w=5
break
case 8:w=11
return B.b(t.Jh(0,d),$async$DQ)
case 11:w=5
break
case 5:case 1:return B.h(u,v)}})
return B.i($async$DQ,v)},
c1E(){var w,v,u,t,s=null,r=[D.dNb,D.dN9,D.dNa],q=new C.cQ7(),p=B.m(26),o=x.V,n=B.a([new B.ab(0,A.G,A.d3.j(0.4),A.eQ,24)],o),m=x.p,l=B.a([],m)
for(w=0;w<3;++w){v=D.dwv[w]
u=A.c.j(0.18)
t=new B.aN(999,999)
l.push(B.q(s,B.d(v,s,s,s,s,s,s,A.p0,s,s,s),A.f,s,s,new B.p(u,s,s,new B.be(t,t,t,t),s,s,A.n),s,s,s,s,A.po,s,s,s))}return B.q(s,B.A(B.a([B.E(B.x(B.a([D.h_Y,A.T,B.bW(A.bH,l,A.bs,s,6,6),A.aO,B.az(s,B.q(s,D.fa5,A.f,s,s,new B.p(A.c,s,s,B.m(999),B.a([new B.ab(0,A.G,A.w.j(0.2),A.cL,10)],o),s,A.n),s,s,s,s,V.amN,s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.cQ6(this),s,s,s,s,s,s,!1,A.a4)],m),A.E,s,A.e,A.j,0,A.p),1),new B.a5(130,110,new B.an(A.A,s,A.ac,A.t,B.a([q.$3(r[0],-0.22,-30),q.$3(r[2],0.22,30),q.$3(r[1],0,0)],m),s),s)],m),A.l,s,A.e,A.j,0,s,s),A.f,s,s,new B.p(s,s,s,p,n,D.c7z,A.n),s,s,s,s,D.bFC,s,s,s)},
bGI(d){var w,v=null,u=d.b.d.length,t=B.m(6),s=B.a([new B.ab(0,A.G,A.w.j(0.5),A.cC,14)],x.V),r=x.p
s=B.q(v,B.bw(B.m(6),new B.an(A.a0,v,A.b0,A.t,B.a([B.ev(A.A,F.apM(d.b),A.f,A.c_),D.ezp,B.ap(v,B.az(v,B.q(v,D.c_P,A.f,v,v,D.b8S,v,26,v,v,v,v,v,26),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.cPW(this,d),v,v,v,v,v,v,!1,A.a4),v,v,v,4,4,v)],r),v),A.aq),A.f,v,v,new B.p(v,v,v,t,s,v,A.n),v,v,v,v,v,v,v,v)
t=A.a.i(d.b.a)
t=B.d(t.length===0?"Untitled Book":t,v,1,A.a2,v,v,v,D.fpW,v,v,v)
w=u===1?"":"s"
return B.az(v,B.x(B.a([new B.fH(0.6470588235294118,s,v),A.T,t,B.d(""+u+" page"+w,v,v,v,v,v,v,D.fwU,v,v,v)],r),A.E,v,A.e,A.j,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,new C.cPX(this,d),v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.cPY(this,d),v,v,v,v,v,v,!1,A.a4)},
B(d){var w,v,u,t=this,s=null,r=x.p,q=B.eJ(B.a([new B.D(Q.ali,B.h6(B.az(s,B.q(s,A.asf,A.f,s,s,new B.p(s,s,s,s,B.a([new B.ab(0,A.G,A.b8.j(0.5),A.J,12)],x.V),E.wW,A.a6),s,36,s,s,s,s,s,36),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.gc9D(),s,s,s,s,s,s,!1,A.a4),s,"Write with AI",s,s),s)],r),s,s,!0,!0,A.L,s,1,!0,s,0,!1,s,!1,E.nz,s,s,s,!0,s,s,s,s,s,D.h01,s,s,s,1,s,!0)
if(t.e)r=D.bcw
else{w=t.c1E()
v=B.a([D.fM5,A.af],r)
if(J.cJ(t.d)){u=B.m(999)
v.push(B.q(s,B.d(""+J.ad(t.d),s,s,s,s,s,s,D.fpo,s,s,s),A.f,s,s,new B.p(D.bhJ,s,s,u,s,s,A.n),s,s,s,s,A.yT,s,s,s))}r=B.a([new B.nI(A8.a0x,new B.m3(w,s),s),new B.nI(D.bEZ,new B.m3(B.A(v,A.l,s,A.e,A.j,0,s,s),s),s)],r)
if(J.cs(t.d))r.push(D.fhg)
else r.push(new B.nI(D.bEr,B.PV(new B.oR(new C.cQi(t),J.ad(t.d),!0,!0,!0,0,B.tr(),s),D.bbL),s))
r=B.w7(0,s,A.t,s,A.y,s,s,s,s,s,!1,s,A.ah,!1,r)}return B.c4(q,D.bgl,r,s,!1,!1,s,s)}}
C.ZX.prototype={
S(){return new C.azA(B.a([],x.bx))},
UU(d){return this.d.$1(d)}}
C.aGX.prototype={}
C.azA.prototype={
b3v(d,e,f){var w=$.ax(),v=new B.au(new B.ba(d,A.b5,A.aP),w),u=this.gb0k()
v.aW(0,u)
w=new B.au(new B.ba(e,A.b5,A.aP),w)
w.aW(0,u)
return new C.aGX(v,w,f)},
EE(){var w,v=this
v.y=!0
w=v.x
if(w!=null)w.a1(0)
v.x=B.cy(A.qA,new C.cPp(v))},
Y(){var w,v,u,t,s,r,q,p,o,n,m=this
m.a4()
w=m.a.c.b
v=$.ax()
u=new B.au(new B.ba(w.a,A.b5,A.aP),v)
t=m.gb0k()
u.aW(0,t)
m.d!==$&&B.aQ()
m.d=u
u=new B.au(new B.ba(w.b,A.b5,A.aP),v)
u.aW(0,t)
m.e!==$&&B.aQ()
m.e=u
u=new B.au(new B.ba(w.c,A.b5,A.aP),v)
u.aW(0,t)
m.f!==$&&B.aQ()
m.f=u
m.r=w.e
for(u=w.d,s=u.length,r=m.w,q=0;q<u.length;u.length===s||(0,B.J)(u),++q){p=u[q]
o=new B.au(new B.ba(p.a,A.b5,A.aP),v)
o.aW(0,t)
n=new B.au(new B.ba(p.b,A.b5,A.aP),v)
n.aW(0,t)
r.push(new C.aGX(o,n,p.c))}if(r.length===0)r.push(m.b3v("Page 1","",""))},
t(){var w,v,u,t,s,r=this,q=r.x
if(q!=null)q.a1(0)
if(r.y){r.a.c.b=r.gpz()
q=r.a
q.UU(q.c)}q=r.d
q===$&&B.c()
w=q.U$=$.ax()
q.P$=0
q=r.e
q===$&&B.c()
q.U$=w
q.P$=0
q=r.f
q===$&&B.c()
q.U$=w
q.P$=0
for(q=r.w,v=q.length,u=0;u<v;++u){t=q[u]
s=t.a
s.U$=w
s.P$=0
s=t.b
s.U$=w
s.P$=0}r.a3()},
gpz(){var w,v,u,t,s,r,q,p,o=this,n=o.d
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
for(s=o.w,r=s.length,q=0;q<s.length;s.length===r||(0,B.J)(s),++q){p=s[q]
t.push(new F.mS(A.a.i(p.a.a.a),p.b.a.a,p.c,""))}return new F.rP(n,w,v,t,u)},
Bp(){var w=0,v=B.j(x.H),u=this,t
var $async$Bp=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.x
if(t!=null)t.a1(0)
u.y=!1
u.a.c.b=u.gpz()
t=u.a
w=2
return B.b(t.UU(t.c),$async$Bp)
case 2:return B.h(null,v)}})
return B.i($async$Bp,v)},
c9B(){this.m(new C.cPo(this))
this.EE()},
b_g(d,e){var w=this,v=d+e
if(v<0||v>=w.w.length)return
w.m(new C.cPr(w,d,v))
w.EE()},
c9C(d,e){var w=A.d.cH(this.w,e)
this.m(new C.cPz())
this.EE()
$.aW.x1$.push(new C.cPA(w))},
Rh(d){return this.coh(d)},
coh(d){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Rh=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hX().l9(80,1400,A.eP),$async$Rh)
case 7:q=f
if(q==null){w=1
break}w=8
return B.b(q.fq(),$async$Rh)
case 8:p=f
o=q.b.toLowerCase()
n=J.ajg(o,".png")?"image/png":"image/jpeg"
r.m(new C.cPs(d,n,p))
r.EE()
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
return B.i($async$Rh,v)},
yt(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$yt=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(F.hFP(r,t.gpz()),$async$yt)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.cPq(t,s))
t.EE()
case 1:return B.h(u,v)}})
return B.i($async$yt,v)},
coz(d){var w,v=this,u=null,t=F.fOo(d.c)
if(t==null)return new B.bL(A.a7,u,u,B.hp(D.bTT,D.fOG,new C.cPu(v,d),u),u)
w=x.p
return new B.D(A.cy,new B.an(A.a0,u,A.ac,A.t,B.a([B.bw(B.m(12),B.fR(t,A.A,u,u,A.ck,A.c_,!0,140,!1,u,1/0),A.aq),B.ap(u,B.A(B.a([v.b6D(A.jL,new C.cPv(v,d)),A.bo,v.b6D(A.cB,new C.cPw(v,d))],w),A.l,u,A.e,A.j,0,u,u),u,u,u,6,6,u)],w),u),u)},
b6D(d,e){var w=null
return B.aH(!1,A.a3,!0,w,B.aP(!1,w,!0,new B.D(A.hL,B.X(d,A.c,w,w,w,18),w),A.cV,!0,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,w),A.f,A.b6,0,w,w,A.cV,w,w,A.aj)},
JW(){var w=0,v=B.j(x.H),u,t=this,s
var $async$JW=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.Bp(),$async$JW)
case 3:s=t.c
if(s==null){w=1
break}w=4
return B.b(F.hhW(s,t.gpz(),new C.cPy(t)),$async$JW)
case 4:case 1:return B.h(u,v)}})
return B.i($async$JW,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=x.p,j=B.eJ(B.a([new B.D(A.pm,B.hp(D.bYF,D.fUU,m.gaAO(),B.fv(l,l,l,l,l,l,l,l,l,l,l,A.bL,l,l,l,l,l,l,l,l,l,l,l,l,l,l)),l),B.aI(l,l,l,l,A.ase,l,l,l,new C.cPB(m,d),l,l,l,l,"Save",l)],k),l,l,!0,!0,E.Z6,l,1,l,l,l,!1,l,!1,E.nz,l,l,l,!0,l,l,l,l,l,D.fPy,l,l,l,1,l,!0),i=Ay.aWQ(N.lF,A.c,Ag.XR,A.oH,D.fQi,m.gc9A()),h=B.m(18),g=m.gayK(),f=B.a([new B.ab(0,A.G,A.w.j(0.4),A.ip,12)],x.V)
f=B.az(l,B.q(l,new B.a5(92,142.1818181818182,B.ev(A.A,F.apM(m.gpz()),A.f,A.dE),l),A.f,l,l,new B.p(l,l,l,l,f,l,A.n),l,l,l,l,l,l,l,l),A.y,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,g,l,l,l,l,l,l,!1,A.a4)
w=m.r
w===$&&B.c()
h=B.q(l,B.A(B.a([f,A.ew,B.E(B.x(B.a([D.h1C,A.aw,B.d(F.hgm(w.a).b+" template \xb7 pick from 10, change colours, add your picture.",l,l,l,l,l,l,D.fCU,l,l,l),A.W,B.dh(E.arx,E.aXs,g,B.bp(A.d3,l,l,l,l,l,l,l,l,l,l,l))],k),A.E,l,A.e,A.j,0,A.p),1)],k),A.l,l,A.e,A.j,0,l,l),A.f,l,l,new B.p(E.Z6,l,l,h,l,l,A.n),l,l,l,l,A.bh,l,l,l)
g=m.d
g===$&&B.c()
g=B.aM(l,A.Z,!1,l,!0,A.t,l,B.aO(),g,l,l,l,l,l,2,B.bz(l,new B.b6(4,B.m(12),A.dv),l,l,l,l,l,l,!0,l,l,l,l,l,l,A.c,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,"Book title",!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ak,l,l,l,l,l,l,l,l,l,1,l,l,!1,"\u2022",l,l,l,l,l,!1,l,l,!1,l,!0,l,A.ad,l,l,l,l,l,l,l,l,l,l,l,A.oZ,!0,A.a5,l,A.ao,l,l,l,l)
w=m.e
w===$&&B.c()
w=B.aM(l,A.Z,!1,l,!0,A.t,l,B.aO(),w,l,l,l,l,l,2,B.bz(l,new B.b6(4,B.m(12),A.dv),l,l,l,l,l,l,!0,l,l,l,l,l,l,A.c,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,"Subtitle (optional)",!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ak,l,l,l,l,l,l,l,l,l,1,l,l,!1,"\u2022",l,l,l,l,l,!1,l,l,!1,l,!0,l,A.ad,l,l,l,l,l,l,l,l,l,l,l,l,!0,A.a5,l,A.ao,l,l,l,l)
f=m.f
f===$&&B.c()
f=B.a([h,A.aB,g,A.T,w,A.T,B.aM(l,A.Z,!1,l,!0,A.t,l,B.aO(),f,l,l,l,l,l,2,B.bz(l,new B.b6(4,B.m(12),A.dv),l,l,l,l,l,l,!0,l,l,l,l,l,l,A.c,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,"Author (optional)",!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ak,l,l,l,l,l,l,l,l,l,1,l,l,!1,"\u2022",l,l,l,l,l,!1,l,l,!1,l,!0,l,A.ad,l,l,l,l,l,l,l,l,l,l,l,l,!0,A.a5,l,A.ao,l,l,l,l),A.aO],k)
for(h=m.w,v=0;v<h.length;v=t){g=h[v]
w=new B.aN(16,16)
u=new B.ay(N.lF.j(0.18),1,A.r,-1)
t=v+1
s=B.d("Page "+t,l,l,l,l,l,l,D.fDr,l,l,l)
r=B.aI(l,l,l,l,D.bXh,l,l,l,v===0?l:new C.cPC(m,v),l,l,l,l,"Move up",A.cg)
q=h.length
p=B.aI(l,l,l,l,D.c2V,l,l,l,v===q-1?l:new C.cPD(m,v),l,l,l,l,"Move down",A.cg)
q=q===1?l:new C.cPE(m,v)
o=new B.aN(12,12)
n=new B.aN(12,12)
f.push(B.q(l,B.x(B.a([new B.c8(A.aL,A.e,A.j,A.l,l,A.p,l,0,B.a([s,A.b3,r,p,B.aI(l,l,l,l,B.X(A.ej,A.pi,l,l,l,18),l,l,l,q,l,l,l,l,"Remove page",A.cg)],k),l),B.aM(l,A.Z,!1,l,!0,A.t,l,B.aO(),h[v].a,l,l,l,l,l,2,new B.e6(l,l,l,"Title",l,l,l,l,l,l,l,l,l,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,A.c,l,l,l,l,l,l,l,new B.b6(4,new B.be(o,o,o,o),A.dv),!0,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ak,l,l,l,l,l,l,l,l,l,1,l,l,!1,"\u2022",l,l,l,l,l,!1,l,l,!1,l,!0,l,A.ad,l,l,l,l,l,l,l,l,l,l,l,A.ci,!0,A.a5,l,A.ao,l,l,l,l),A.am,m.coz(h[v]),B.aM(l,A.Z,!1,l,!0,A.t,l,B.aO(),h[v].b,l,l,l,l,l,2,new B.e6(l,l,l,"Write here\u2026 long pages flow onto the next paper page",l,l,l,l,l,l,l,l,l,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,A.c,l,l,l,l,l,l,l,new B.b6(4,new B.be(n,n,n,n),A.dv),!0,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ak,l,l,l,l,l,l,l,l,l,l,5,l,!1,"\u2022",l,l,l,l,l,!1,l,l,!1,l,!0,l,A.ad,l,l,l,l,l,l,l,l,l,l,l,l,!0,A.a5,l,A.ao,l,l,l,l)],k),A.l,l,A.e,A.j,0,A.p),A.f,l,l,new B.p(E.nz,l,new B.bH(u,u,u,u),new B.be(w,w,w,w),l,l,A.n),l,l,new C.a9L(g),A.en,D.bCZ,l,l,l))}return B.oO(!0,B.c4(j,E.ajh,B.cl(f,l,l,D.bDt,l,l,A.ah,!1),l,!1,!1,i,l),new C.cPF(m),x.C)}}
C.azC.prototype={
B(d){var w,v,u=this,t=null,s=u.r,r=s?A.c0:E.nz,q=B.m(16),p=B.m(16),o=s?A.ay.j(0.08):A.c.j(0.04)
s=s?A.ay.j(0.16):A.d3.j(0.22)
w=B.m(12)
v=x.p
return new B.D(A.eO,B.aH(!1,A.a3,!0,t,B.aP(!1,q,!0,B.q(t,B.A(B.a([B.q(t,B.X(u.c,r,t,t,t,20),A.f,t,t,new B.p(s,t,t,w,t,t,A.n),t,40,t,t,t,t,t,40),A.bc,B.E(B.x(B.a([B.d(u.d,t,t,t,t,t,t,B.l(t,t,r,t,t,t,t,t,t,t,t,15,t,t,A.I,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),A.bG,B.d(u.e,t,t,t,t,t,t,D.aVY,t,t,t)],v),A.E,t,A.e,A.j,0,A.p),1),B.X(A.eI,r.j(0.6),t,t,t,t)],v),A.l,t,A.e,A.j,0,t,t),A.f,t,t,new B.p(o,t,t,p,t,t,A.n),t,t,t,t,A.bh,t,t,t),t,!0,t,t,t,t,t,t,t,t,t,t,t,u.f,t,t,t,t,t,t,t),A.f,A.L,0,t,t,t,t,t,A.aj),t)}}
C.as3.prototype={
S(){return new C.aFL()}}
C.aFL.prototype={
Y(){this.a4()
this.a_I()},
bz(d){this.bJ(d)
if(d.c!=this.a.c)this.a26()},
a26(){var w=0,v=B.j(x.H),u=this,t
var $async$a26=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.d
t=t==null?null:t.t()
w=2
return B.b(x.bq.b(t)?t:B.dL(t,x.H),$async$a26)
case 2:u.d=null
if(u.c!=null)u.m(new C.em3(u))
w=3
return B.b(u.a_I(),$async$a26)
case 3:return B.h(null,v)}})
return B.i($async$a26,v)},
a_I(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$a_I=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:o=r.a.c
n=A.a.i(o==null?"":o)
if(J.ad(n)===0){w=1
break}t=4
if(J.d5(n,"http://")||J.d5(n,"https://")||J.d5(n,"data:")){o=B.ZC(B.cD(n,0,null),new B.Qh(!0))
r.d=o}else{o=B.fl("unsupported video ref")
throw B.W(o)}w=7
return B.b(o.iX(0).dh(0,A.qx),$async$a_I)
case 7:if(r.c==null){w=1
break}r.d.u_(!1)
r.m(new C.em1(r))
t=2
w=6
break
case 4:t=3
m=s.pop()
q=B.ac(m)
$.am.$1("[kiapo video] "+B.w(q))
if(r.c!=null)r.m(new C.em2(r))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a_I,v)},
t(){var w=this.d
if(w!=null)w.t()
this.a3()},
ccG(){var w=this,v=w.d
if(v==null||!w.e)return
if(v.a.f){v.hg(0)
w.m(new C.em4(w))}else{v.qr(0)
w.m(new C.em5(w))}},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.a,m=n.c
if(A.a.i(m==null?"":m).length===0){if(!n.e)return A.bM
n=B.m(8*n.d)
m=B.a([D.jB.j(0.92),D.Mn.j(0.95)],x.O)
w=B.L(A.c4.j(0.55),A.r,1)
v=p.a
u=v.d
t=B.X(A.qS,A.c4,o,o,o,28*u)
v=v.f?"Tap to add president video":"Video ya kiapo"
return new B.bN(new B.p(o,o,w,n,o,new B.a8(A.aA,A.aF,A.x,m,o,o),A.n),A.bj,B.as(B.x(B.a([t,new B.a5(o,6*u,o,o),B.d(v,o,o,o,o,o,o,B.l(o,o,A.c.j(0.85),o,o,o,o,o,o,o,o,11*p.a.d,o,o,A.U,o,o,!0,o,o,o,o,o,o,o,o),A.K,o,o)],x.p),A.l,o,A.e,A.P,0,A.p),o,o,o),o)}if(p.f)return B.as(B.X(A.aqJ,A.aD,o,o,o,28*n.d),o,o,o)
if(!p.e||p.d==null)return D.bdo
s=p.d
m=s.a.as
r=m.a
r=r>0?r:16
q=m.b
q=q>0?q:9
n=B.m(6*n.d)
m=B.a([B.ev(A.A,new B.a5(r,q,new B.AO(s,o),o),A.t,A.c_)],x.p)
if(!p.r){w=8*p.a.d
v=A.w.j(0.45)
m.push(B.as(B.q(o,B.X(A.hi,A.c,o,o,o,28*p.a.d),A.f,o,o,new B.p(v,o,o,o,o,o,A.a6),o,o,o,o,new B.R(w,w,w,w),o,o,o),o,o,o))}return B.az(o,B.bw(n,new B.an(A.a0,o,A.b0,A.t,m,o),A.aq),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gccF(),o,o,o,o,o,o,!1,A.a4)}}
C.ye.prototype={
a7(){return"NgmyHatiLayoutKind."+this.b}}
C.jE.prototype={}
C.aeG.prototype={
B(d){return B.ph(new C.e8s(this,B.P(d).ax.a===A.H,d),!0,0.72,0.9,0.5,!1,null)}}
C.ae4.prototype={
B(d){var w,v,u=null,t=B.P(d).ax.a===A.H,s=B.m(18),r=B.m(18),q=B.L(D.jB.j(t?0.35:0.4),A.r,1),p=t?D.N1:A.c,o=x.V,n=B.a([new B.ab(0,A.G,A.w.j(t?0.3:0.08),A.cC,14)],o),m=B.m(10),l=B.L(A.c4.j(0.5),A.r,1)
o=B.a([new B.ab(0,A.G,A.w.j(0.14),A.dM,6)],o)
w=this.c
o=B.E(B.q(u,new B.fH(0.5625,C.imp(w),u),A.aq,u,u,new B.p(u,u,l,m,o,u,A.n),u,u,u,D.anj,u,u,u,u),1)
m=D.jB.j(t?0.18:0.16)
l=B.d(w.b,u,u,u,u,u,u,B.l(u,u,t?A.c:D.jB,u,u,u,u,u,u,u,u,12.5,u,u,A.u,u,u,!0,u,0.1,u,u,u,u,u,u),u,u,u)
v=x.p
return B.aH(!1,A.a3,!0,u,B.aP(!1,s,!0,B.q(u,B.x(B.a([o,B.q(u,B.x(B.a([l,A.cS,B.d(w.c,u,2,A.a2,u,u,u,B.l(u,u,t?A.aD:D.bp9,u,u,u,u,u,u,u,u,9.5,u,u,u,u,1.32,!0,u,u,u,u,u,u,u,u),u,u,u)],v),A.E,u,A.e,A.j,0,A.p),A.f,u,u,new B.p(u,u,new B.bH(new B.ay(m,1,A.r,-1),A.a1,A.a1,A.a1),u,u,u,A.n),u,u,u,u,D.alz,u,u,u)],v),A.al,u,A.e,A.j,0,A.p),A.f,u,u,new B.p(p,u,q,r,n,u,A.n),u,u,u,u,u,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,this.d,u,u,u,u,u,u,u),A.f,A.L,0,u,u,u,u,u,A.aj)}}
C.yh.prototype={
a7(){return"NgmyMarriageLayoutKind."+this.b}}
C.o7.prototype={}
C.blN.prototype={
a_R(d){var w=null
return new B.bL(A.a7,w,w,B.BX(A.A,B.q(w,w,A.f,w,w,new B.p(this.d.j(0.14),w,w,B.m(3),w,w,A.n),w,5,w,w,w,w,w,w),w,d),w)},
cd9(){return this.a_R(1)},
azr(d){var w=null,v=B.m(8),u=B.L(A.iw,A.r,0.9)
return B.q(A.A,B.d(d,w,w,w,w,w,w,B.l(w,w,this.d,w,w,w,w,w,w,w,w,6.5,w,w,A.u,w,w,!0,w,0.3,w,w,w,w,w,w),w,w,w),A.f,w,w,new B.p(D.agS,w,u,v,w,w,A.n),w,13,w,w,w,w,w,w)},
B(d){var w=this,v=null,u=x.p,t=w.d
return B.x(B.a([B.A(B.a([B.q(v,v,A.f,v,v,new B.p(v,v,B.L(A.iw,A.r,1.6),v,v,v,A.a6),v,22,v,v,v,v,v,22),B.dN(B.q(v,v,A.f,v,v,new B.p(v,v,B.L(A.iw,A.r,1.6),v,v,v,A.a6),v,22,v,v,v,v,v,22),new B.o(-8.36,0))],u),A.l,v,A.ba,A.j,0,v,v),A.aw,B.d("HATI YA NDOA",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,12,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),A.K,v,v),B.d("Hati ya Makubaliano ya Ndoa",v,v,v,v,v,v,B.l(v,v,t.j(0.7),v,v,v,v,v,v,v,v,7,v,v,A.a8,v,v,!0,v,v,v,v,v,v,v,v),A.K,v,v),A.am,w.azr("TAARIFA ZA WANANDOA"),A.am,w.cd9(),A.cS,w.a_R(0.9),A.cS,w.a_R(0.7),A.T,w.azr("TAMKO LA MAKUBALIANO"),A.fD,w.a_R(1),A.cS,w.a_R(0.95),A.T,w.azr("MASHAHIDI"),A.b3,B.d("NGMY",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,8,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.d(w.c.b,v,v,v,v,v,v,B.l(v,v,w.e,v,v,v,v,v,v,v,v,7,v,v,A.U,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],u),A.l,v,A.e,A.j,0,A.p)}}
C.aeJ.prototype={
B(d){return B.ph(new C.eqQ(B.P(d).ax.a===A.H,d),!0,0.92,0.96,0.5,!1,null)}}
C.agp.prototype={
B(d){var w,v,u,t,s,r=null,q=B.P(d).ax.a===A.H,p=B.m(18),o=B.m(18),n=B.L(A.aC.j(q?0.35:0.4),A.r,1),m=q?D.boG:A.c,l=x.V,k=B.a([new B.ab(0,A.G,A.w.j(q?0.3:0.08),A.cC,14)],l),j=B.m(10),i=B.L(A.aC.j(0.5),A.r,1)
l=B.a([new B.ab(0,A.G,A.w.j(0.14),A.dM,6)],l)
w=this.c
v=C.hgS(w.a)
if(v==null)v=A.d.gH(D.SH)
u=B.b0(v.f)
t=B.b0(v.r)
s=x.p
l=B.E(B.q(r,new B.fH(0.5625,new B.an(A.a0,r,A.b0,A.t,B.a([B.bS(0,B.fR(C.hgR(v.d),A.A,r,r,A.ck,A.c_,!0,r,!1,r,r),0,0,0),new B.D(A.amc,new C.blN(v,u,t,r),r)],s),r),r),A.aq,r,r,new B.p(r,r,i,j,l,r,A.n),r,r,r,D.anj,r,r,r,r),1)
j=A.aC.j(q?0.18:0.16)
i=B.d(w.b,r,r,r,r,r,r,B.l(r,r,q?A.c:A3.N2,r,r,r,r,r,r,r,r,12.5,r,r,A.u,r,r,!0,r,0.1,r,r,r,r,r,r),r,r,r)
return B.aH(!1,A.a3,!0,r,B.aP(!1,p,!0,B.q(r,B.x(B.a([l,B.q(r,B.x(B.a([i,A.cS,B.d(w.c,r,2,A.a2,r,r,r,B.l(r,r,q?A.aD:D.bgY,r,r,r,r,r,r,r,r,9.5,r,r,r,r,1.32,!0,r,r,r,r,r,r,r,r),r,r,r)],s),A.E,r,A.e,A.j,0,A.p),A.f,r,r,new B.p(r,r,new B.bH(new B.ay(j,1,A.r,-1),A.a1,A.a1,A.a1),r,r,r,A.n),r,r,r,r,D.alz,r,r,r)],s),A.al,r,A.e,A.j,0,A.p),A.f,r,r,new B.p(m,r,n,o,k,r,A.n),r,r,r,r,r,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,this.d,r,r,r,r,r,r,r),A.f,A.L,0,r,r,r,r,r,A.aj)}}
C.lb.prototype={
a7(){return"NgmyMarriagePaperStyle."+this.b}}
C.a9d.prototype={}
C.X7.prototype={
S(){var w=$.ax()
return new C.aG1(new B.cw(null,x.A),new B.au(A.ax,w),new B.au(A.ax,w),B.mZ(0,null,null),A.d.gH(D.a5N),D.dXD,B.a([],x.L),B.a([],x.gE))}}
C.aG1.prototype={
Y(){var w,v=this
v.a4()
v.w=v.a.c
v.z=new C.Ae(C.fSk(v.y),"NGMY NEWS","","","By the NGMY Newsroom","",A.Z,"","","")
w=x.a
C.fRd().bG(new C.etN(v),w)
$.rk().jp(0,"assets/images/ngmy_logo.png").bG(new C.etO(v),w).eB(new C.etP())},
t(){var w=this,v=w.e,u=$.ax()
v.U$=u
v.P$=0
v=w.f
v.U$=u
v.P$=0
w.r.t()
w.a3()},
afy(d){var w=null,v=this.c
if(v!=null)v.L(x.q).f.T(B.b3(w,w,w,w,w,A.t,w,B.d(d,w,w,w,w,w,w,w,w,w,w),w,A.Y,w,w,w,w,w,w,w,w,w,w))},
JB(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k
var $async$JB=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hX().l9(88,1600,A.eP),$async$JB)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fq(),$async$JB)
case 8:p=e
m=r.c
if(m==null){w=1
break}w=9
return B.b(C.hG5(m,p),$async$JB)
case 9:o=e
if(o==null||r.c==null){w=1
break}m=r.c
m.toString
w=10
return B.b(F.bG8(new B.qa(o,1),m),$async$JB)
case 10:if(r.c!=null)r.m(new C.etp(r,o))
t=2
w=6
break
case 4:t=3
k=s.pop()
n=B.ac(k)
r.afy("Could not open that picture. "+B.w(n))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$JB,v)},
XK(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$XK=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.w
if(q==null||t.as){w=1
break}s=t.c
s.toString
w=3
return B.b(C.hG5(s,q),$async$XK)
case 3:r=e
if(r==null||t.c==null){w=1
break}s=t.c
s.toString
w=4
return B.b(F.bG8(new B.qa(r,1),s),$async$XK)
case 4:if(t.c!=null)t.m(new C.etl(t,r))
case 1:return B.h(u,v)}})
return B.i($async$XK,v)},
afz(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$afz=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.as){w=1
break}q.m(new C.etw(q))
t=4
q.a.toString
p=C.irw()
l=q.Q
k=q.e.a
o=l==="sw"?A.a.i(A.a.i(k.a)+" Write the whole newspaper in Swahili (Kiswahili)."):k.a
k=q.y
w=7
return B.b(p.$4$paper$photo$request$template(null,q.w,o,k),$async$afz)
case 7:n=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.etx(q,n))
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
m=B.ac(i)
q.afy(B.w(m))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.ety(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$afz,v)},
a_W(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h,g
var $async$a_W=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i=A.a.i(q.f.a.a)
h=!0
if(J.ad(i)!==0)if(!q.as){h=q.z
h=A.a.i(h.c).length===0&&h.r.length===0}if(h){w=1
break}q.m(new C.etr(q,i))
t=4
q.a.toString
p=C.irv()
h=q.z
m=q.y
l=q.w
k=B.C(q.ax,x.fz)
w=7
return B.b(p.$5$doc$history$instruction$photo$template(h,k,i,l,m),$async$a_W)
case 7:o=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.ets(q,o))
r.push(6)
w=5
break
case 4:t=3
g=s.pop()
n=B.ac(g)
if(q.c!=null)q.m(new C.ett(q,n))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.etu(q))
$.aW.x1$.push(new C.etv(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a_W,v)},
cdp(d){this.m(new C.etq(this,d))},
EV(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$EV=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(!q.as){k=q.z
k=A.a.i(k.c).length===0&&k.r.length===0}else k=!0
if(k){w=1
break}q.m(new C.etn(q))
t=4
w=7
return B.b($.aW.gmV(),$async$EV)
case 7:w=8
return B.b(B.bQ(A.mU,null,x.H),$async$EV)
case 8:k=$.aW.ap$.x.h(0,q.d)
p=k==null?null:k.gbg()
if(!(p instanceof B.qk))throw B.W("The page is not ready yet.")
w=9
return B.b(p.mg(1800/p.gZ(0).a),$async$EV)
case 9:o=e
w=10
return B.b(o.hr(A.hl),$async$EV)
case 10:n=e
if(n==null)throw B.W("Could not make the picture.")
w=11
return B.b(A9.ahM(J.eT(A.dR.gaU(n)),"ngmy_news.png","image/png"),$async$EV)
case 11:m=e
q.afy(m?"Your newspaper picture is ready. Check your downloads.":"Downloading is not available here.")
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
l=B.ac(i)
q.afy(B.w(l))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.eto(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$EV,v)},
B(a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=a1.z,a4=!(A.a.i(a3.c).length===0&&a3.r.length===0)
a3=B.aI(a2,a2,a2,a2,A.lo,a2,a2,a2,new C.etE(a5),a2,a2,a2,a2,a2,a2)
w=x.p
v=B.a([],w)
if(a1.ay.length!==0)v.push(B.aI(a2,a2,a2,a2,D.bZb,a2,a2,a2,new C.etF(a1),a2,a2,a2,a2,"Undo the last change",a2))
v.push(B.aI(a2,a2,a2,a2,A.oG,a2,a2,a2,a4?a1.gb1D():a2,a2,a2,a2,a2,"Download",a2))
a3=B.eJ(v,a2,a2,!0,!0,A.C4,a2,1,!0,a2,0,!1,a2,!1,a2,a2,a3,a2,!0,a2,a2,a2,a2,a2,D.fag,a2,a2,a2,1,a2,!0)
v=x.V
u=B.a([new B.ab(0,A.G,A.w.j(0.6),A.eQ,24)],v)
t=a1.z
s=a1.y
r=a1.w
u=B.q(a2,new B.fH(0.7142857142857143,B.ev(A.A,new B.en(new C.b39(t,s,r,a1.x,a2),a1.d),A.f,A.dE),a2),A.f,a2,a2,new B.p(a2,a2,a2,a2,u,a2,A.n),a2,a2,a2,a2,a2,a2,a2,a2)
s=B.d("1  YOUR PICTURE",a2,a2,a2,a2,a2,a2,X.tL,a2,a2,a2)
t=a1.as?a2:a1.gcdo()
t=B.a([B.E(B.dh(D.bZY,B.d(r==null?"Add a picture":"Change the picture",a2,a2,a2,a2,a2,a2,A.ci,a2,a2,a2),t,B.bp(D.uh,a2,a2,a2,A.c,A.h8,a2,a2,new B.b9(B.m(14),P.vW),a2,a2,a2)),1)],w)
r=a1.w
if(r!=null){r=B.bw(B.m(10),B.fR(r,A.A,a2,a2,A.ck,A.c_,!1,48,!1,a2,48),A.aq)
A.d.v(t,B.a([A.au,r,B.aI(a2,a2,a2,a2,D.bWz,a2,a2,a2,a1.as?a2:a1.gbNg(),a2,a2,a2,a2,"Crop the picture",a2)],w))}t=B.A(t,A.l,a2,A.e,A.j,0,a2,a2)
r=B.d("2  WHAT SHOULD IT BE ABOUT?  (optional)",a2,a2,a2,a2,a2,a2,X.tL,a2,a2,a2)
q=B.aM(a2,A.Z,!1,a2,!0,A.t,a2,B.aO(),a1.e,a2,a2,a2,a2,a2,2,a1.aVb("Leave it empty and the AI picks a story about NGMY"),A.y,!0,a2,!0,a2,!1,a2,A.ak,a2,a2,a2,a2,a2,a2,a2,a2,a2,3,1,a2,!1,"\u2022",a2,a2,a2,a2,a2,!1,a2,a2,!1,a2,!0,a2,A.ad,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,A.dk,!0,A.a5,a2,A.ao,a2,a2,a2,a2)
p=B.a([],w)
for(o=0;o<7;++o){n=D.dql[o]
p.push(B.n3(a2,D.uh,B.d(n.a,a2,a2,a2,a2,a2,a2,A.pU,a2,a2,a2),A.ho,new C.etG(a1,n),a2,a2,P.vW,a2))}p=B.bW(A.bH,p,A.bs,a2,6,8)
m=a1.Q
m=B.bW(A.bH,B.a([D.h0a,A.bc,B.jx(a2,a2,a2,D.fKN,a2,new C.etH(a1),m==="en",a2,a2,a2,a2),A.af,B.jx(a2,a2,a2,D.fKI,a2,new C.etI(a1),m==="sw",a2,a2,a2,a2)],w),A.vQ,a2,0,8)
l=B.d("3  PICK A DESIGN",a2,a2,a2,a2,a2,a2,X.tL,a2,a2,a2)
k=B.a([],w)
for(j=x.dt,i=B.cW(D.a5N,0,B.dB(10,"count",x.S),j),h=i.$ti,i=new B.bR(i,i.gI(0),h.k("bR<ak.E>")),h=h.k("ak.E");i.C();){g=i.d
k.push(a1.aTD(g==null?h.a(g):g))}k=B.cl(k,a2,a2,a2,a2,a2,A.aL,!1)
i=B.a([],w)
for(j=B.cW(D.a5N,10,a2,j),h=j.$ti,j=new B.bR(j,j.gI(0),h.k("bR<ak.E>")),h=h.k("ak.E");j.C();){g=j.d
i.push(a1.aTD(g==null?h.a(g):g))}j=B.cl(i,a2,a2,a2,a2,a2,A.aL,!1)
i=a1.as?a2:a1.gcdr()
h=B.m(18)
v=B.a([new B.ab(0,A.G,A.bE.j(0.4),A.J,18)],v)
v=B.a([u,A.aB,new B.D(A.cy,s,a2),t,A.aB,new B.D(A.cy,r,a2),q,A.T,p,A.W,m,A.aB,new B.D(A.cy,l,a2),new B.a5(a2,78,k,a2),A.T,new B.a5(a2,78,j,a2),A.aO,B.az(a2,B.q(A.A,B.A(B.a([D.bZS,A.af,B.d(a4?"Write it again":"Write my newspaper",a2,a2,a2,a2,a2,a2,A.fE,a2,a2,a2)],w),A.l,a2,A.e,A.P,0,a2,a2),A.f,a2,a2,new B.p(a2,a2,a2,h,v,G.v5,A.n),a2,54,a2,a2,a2,a2,a2,a2),A.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,i,a2,a2,a2,a2,a2,a2,!1,A.a4)],w)
if(a4){u=B.a([A.e3,B.A(B.a([D.dHQ,A.au,D.bJQ],w),A.l,a2,A.e,A.j,0,a2,a2),A.T],w)
for(t=a1.ax,s=t.length,o=0;o<t.length;t.length===s||(0,B.J)(t),++o){f=t[o]
e=f.a==="you"
r=e?A.aa:A.a7
q=e?A.b8.j(0.35):D.uh
p=new B.aN(16,16)
d=new B.ay(A.bA,1,A.r,-1)
u.push(new B.bL(r,a2,a2,B.q(a2,B.d(f.b,a2,a2,a2,a2,a2,a2,D.fAK,a2,a2,a2),A.f,a2,Aa.XC,new B.p(q,a2,new B.bH(d,d,d,d),new B.be(p,p,p,p),a2,a2,A.n),a2,a2,a2,A.cy,A.hK,a2,a2,a2),a2))}u.push(A.am)
t=B.a([],w)
for(o=0;o<4;++o){a0=D.dbt[o]
t.push(B.n3(a2,D.uh,B.d(a0,a2,a2,a2,a2,a2,a2,A.KG,a2,a2,a2),A.ho,new C.etJ(a1,a0),a2,a2,P.vW,a2))}u.push(B.bW(A.bH,t,A.bs,a2,6,8))
u.push(A.W)
t=B.E(B.aM(a2,A.Z,!1,a2,!0,A.t,a2,B.aO(),a1.f,a2,a2,a2,a2,a2,2,a1.aVb("Ask for a change, or ask a question\u2026"),A.y,!0,a2,!0,a2,!1,a2,A.ak,a2,a2,a2,a2,a2,a2,a2,a2,a2,4,1,a2,!1,"\u2022",a2,a2,a2,new C.etK(a1),a2,!1,a2,a2,!1,a2,!0,a2,A.ad,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,A.dk,!0,A.a5,a2,A.ao,a2,a2,a2,a2),1)
s=a1.as?a2:a1.gcdq()
u.push(B.A(B.a([t,A.af,B.IK(A.zB,s,B.o1(a2,A.b8,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2)],w),A.l,a2,A.e,A.j,0,a2,a2))
u.push(A.aB)
t=a1.as?a2:a1.gb1D()
u.push(B.dh(A.oG,D.fWC,t,B.bp(A.d0,a2,a2,a2,a2,A.Ko,a2,a2,new B.b9(B.m(16),A.a1),a2,a2,a2)))
A.d.v(v,u)}v=B.a([B.cl(v,a1.r,a2,A.alX,a2,a2,A.ah,!1)],w)
if(a1.as){u=A.w.j(0.55)
t=B.m(20)
s=B.L(E.kr.j(0.5),A.r,1)
v.push(B.bS(0,B.e9(B.as(B.q(a2,B.A(B.a([E.aax,A.ew,B.d(a1.at,a2,a2,a2,a2,a2,a2,A.jx,a2,a2,a2)],w),A.l,a2,A.e,A.P,0,a2,a2),A.f,a2,a2,new B.p(E.BW,a2,s,t,a2,a2,A.n),a2,a2,a2,a2,D.bFT,a2,a2,a2),a2,a2,a2),u,!0),0,0,0))}return B.c4(a3,A.C4,new B.an(A.a0,a2,A.ac,A.t,v,a2),a2,!1,!1,a2,a2)},
aVb(d){var w=null
return B.bz(w,new B.b6(4,B.m(14),A.a1),w,A.f_,w,w,w,w,!0,w,w,w,w,w,w,D.uh,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,Z.EG,d,w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
aTD(d){var w,v,u,t=null,s=d.a===this.y.a,r=B.m(12),q=B.b0(d.f),p=s?A.bE:A.bA
p=B.L(p,A.r,s?2.4:1)
w=B.a([B.q(t,t,A.f,B.b0(d.x),t,t,t,5,t,A.ky,t,t,t,t),A.fD],x.p)
for(v=d.w,u=0;u<4;++u)w.push(B.q(t,t,A.f,B.b0(v).j(0.5),t,t,t,2,t,D.bBV,t,t,t,t))
w.push(A.cS)
w.push(new B.D(A.jq,B.d(d.b,t,1,A.a2,t,t,t,B.l(t,t,B.b0(v),t,t,t,t,t,t,t,t,9,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t))
return B.az(t,B.q(t,B.x(w,A.l,t,A.ba,A.j,0,A.p),A.f,t,t,new B.p(q,t,p,r,t,t,A.n),t,t,t,A.iP,t,t,t,72),A.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.etm(this,d),t,t,t,t,t,t,!1,A.a4)}}
C.Ae.prototype={
bfd(d,e,f,g,h,i,j,k,l,m){var w=this,v=g==null?w.b:g,u=i==null?w.a:i,t=h==null?w.c:h,s=m==null?w.d:m,r=e==null?w.e:e,q=f==null?w.f:f,p=d==null?w.r:d,o=j==null?w.w:j,n=l==null?w.x:l
return new C.Ae(u,v,t,s,r,q,p,o,n,k==null?w.y:k)},
cOh(d){var w=null
return this.bfd(w,w,w,w,w,d,w,w,w,w)},
aj(){var w=this
return B.I(["paper",w.a,"headline",w.c,"subhead",w.d,"byline",w.e,"caption",w.f,"body",w.r,"pullQuote",w.w,"sidebarTitle",w.x,"sidebarText",w.y,"category",w.b],x.N,x.z)},
aES(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j="headline",i="category",h=new C.cjs(d),g=d.h(0,"body")
if(x.j.b(g)){w=B.a([],x.s)
for(v=J.aT(g);v.C();){u=v.gR(v)
if(A.a.i(B.w(u)).length!==0)w.push(A.a.i(B.w(u)))}t=w}else if(typeof g=="string"&&A.a.i(g).length!==0){w=A.a.fw(g,B.ag("\\n\\s*\\n",!0,!1,!1,!1))
w=new B.N(w,new C.cjq(),B.U(w).k("N<1,n>")).bY(0,new C.cjr())
t=B.C(w,w.$ti.k("M.E"))}else t=k
w=h.$1("paper")
w=J.ad(w==null?"":w)===0?k:h.$1("paper")
v=h.$1(j)
v=J.ad(v==null?"":v)===0?k:h.$1(j)
s=h.$1("subhead")
r=h.$1("byline")
r=J.ad(r==null?"":r)===0?k:h.$1("byline")
q=h.$1("caption")
p=t!=null&&t.length!==0?t:k
o=h.$1("pullQuote")
n=h.$1("sidebarTitle")
m=h.$1("sidebarText")
l=h.$1(i)
return this.bfd(p,r,q,J.ad(l==null?"":l)===0?k:h.$1(i).toUpperCase(),v,w,o,m,n,s)},
gG7(d){return this.f}}
C.tP.prototype={
a7(){return"NewsLayout."+this.b}}
C.Cb.prototype={
a7(){return"NewsFrame."+this.b}}
C.lx.prototype={}
C.b39.prototype={
rX(d,e,f,g,h,i,j){var w=null
return B.l(w,w,f==null?B.b0(this.d.w):f,w,w,w,w,w,d,w,w,e,i,w,j,w,g,!0,w,h,w,w,w,w,w,w)},
b1F(d,e,f,g){return this.rX(d,e,null,1.25,f,A.bt,g)},
QA(d,e,f,g,h){return this.rX(d,e,f,1.25,g,A.bt,h)},
azx(d,e,f,g,h){return this.rX(d,e,null,f,g,A.bt,h)},
azw(d,e,f,g,h){return this.rX(d,e,f,g,0,A.bt,h)},
b1H(d,e,f,g,h){return this.rX(d,e,null,f,0,g,h)},
cdv(d,e,f,g,h,i){return this.rX(d,e,f,g,0,h,i)},
azv(d,e,f,g){return this.rX(d,e,null,f,0,A.bt,g)},
afC(d,e,f){return this.rX(d,e,null,f,0,A.bt,A.cY)},
b1G(d,e,f,g,h){return this.rX(d,e,f,g,0,h,A.cY)},
cdu(d,e,f,g){return this.rX(d,e,null,f,0,g,A.cY)},
cdt(d,e,f,g){return this.rX(d,e,f,g,0,A.bt,A.cY)},
afD(d,e,f,g,h,i){return this.rX(d,e,f,g,h,A.bt,i)},
b1E(d,e,f,g,h,i,j,k,l){var w,v,u=null
for(w=i;w>j;){v=new B.iH(new B.eo(d,u,u,A.cN,u,u,u,u,u,u,new B.G(!0,u,u,e,u,u,w,f,l,u,u,u,k,u,u,u,u,u,u,u,u,u,u,u,u,u)),A.a5,A.bX,new B.jh(1),u,u,h,u,A.bY,u,A.cs)
v.o8(g)
if(!v.b.a.c.gaGD())return w
w-=2}return j},
afA(d,e,f,g,h,i,j,k){return this.b1E(d,e,f,g,h,i,j,k,A.bt)},
aBJ(d,e,f){var w=null,v=d==null?B.b0(this.d.w):d,u=x.p,t=B.a([B.q(w,w,A.f,v,w,w,w,f,w,w,w,w,w,w)],u)
if(e)A.d.v(t,B.a([new B.a5(w,3,w,w),B.q(w,w,A.f,v,w,w,w,0.8,w,w,w,w,w,w)],u))
return B.x(t,A.l,w,A.e,A.j,0,A.p)},
aBI(d){return this.aBJ(null,!1,d)},
aiA(d,e){return this.aBJ(null,d,e)},
cvn(d,e){return this.aBJ(d,!1,e)},
gb3S(){var w=A.a.i(this.c.a)
return w.length===0?"The NGMY Times":w},
gaXT(){var w=A.a.i(this.c.c)
if(w.length===0)w="Your headline appears here"
return this.d.CW?w.toUpperCase():w},
Pj(d,e,f,g,h,i){var w=this,v=null,u=w.d.Q,t=w.afA(w.gaXT(),u,A.U,d,g,h,i,1.02)
return B.d(w.gaXT(),v,g,A.a2,v,v,v,w.azw(u,t,f,1.02,A.U),e,v,v)},
aXY(d){return this.Pj(d,A.K,null,2,78,30)},
acQ(d,e,f,g,h){return this.Pj(d,e,null,f,g,h)},
c1x(d,e,f,g,h){return this.Pj(d,A.K,e,f,g,h)},
c1w(d,e,f){return this.Pj(d,A.K,null,e,f,30)},
SA(d,e,f,g,h){var w,v=this,u=null,t=v.c.d,s=A.a.i(t)
if(s.length===0)return A.bM
w=v.d.as
return new B.D(A.jF,B.d(s,u,g,A.a2,u,u,u,v.b1G(w,v.b1E(t,w,A.cY,d,g,h,15,1.2,A.cK),f,1.2,A.cK),e,u,u),u)},
b9N(d){return this.SA(d,A.K,null,3,24)},
aDc(d,e,f,g){return this.SA(d,e,null,f,g)},
cD3(d,e,f){return this.SA(d,A.K,e,3,f)},
b9O(d,e){return this.SA(d,e,null,3,24)},
cD1(d,e){return this.SA(d,A.K,null,3,e)},
cD2(d,e,f){return this.SA(d,e,null,3,f)},
at1(d,e){var w=this,v=null,u=A.a.i(w.c.e),t=new B.D(A.f5,B.d(u.toUpperCase(),v,v,v,v,v,v,w.QA("Roboto",12,d==null?B.b0(w.d.x):d,1.4,A.I),v,v,v),v)
if(!e)return t
u=w.d.w
return B.A(B.a([B.E(B.q(v,v,A.f,B.b0(u),v,v,v,1.2,v,v,v,v,v,v),1),t,B.E(B.q(v,v,A.f,B.b0(u),v,v,v,1.2,v,v,v,v,v,v),1)],x.p),A.l,v,A.e,A.j,0,v,v)},
Oe(){return this.at1(null,!0)},
at0(d){return this.at1(null,d)},
bJb(d,e){var w=null,v=A.a.i(this.c.f)
if(v.length===0)return A.bM
return new B.D(A.i0,new B.a5(d,w,B.d(v,w,2,A.a2,w,w,w,this.cdu(this.d.as,13.5,1.2,A.cK),e,w,w),w),w)},
wb(d,a0){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Roboto",j=new B.V(Date.now(),0,!1),i=m.gb3S(),h=A.o.aq(j.bD(B.c2(B.bD(j),1,1,0,0,0,0,0)).a,864e8),g="VOL. "+C.ie9(Math.max(1,B.bD(j)-2021))+"  \xb7  NO. "+(h+1+3000),f=m.b1F(k,12,1.2,A.U),e=a0?0.62:1
h=m.d
w=h.y
v=h.z
if(w==="blackletter")u=m.afA(i,v,A.U,d,1,96*e,36,1)
else{t=w==="bar"?76:72
u=m.afA(i.toUpperCase(),v,A.U,d,1,t*e,30,1)}switch(w){case"bar":w=a0?6:10
t=B.b0(h.x)
h=h.ch?B.b0(h.f):A.c
s=x.p
return B.x(B.a([B.q(l,B.A(B.a([B.E(B.d(i.toUpperCase(),l,1,A.eR,l,l,l,m.afD(v,u*0.84,h,1,1,A.U),l,l,l),1)],s),A.l,l,A.e,A.j,0,l,l),A.f,t,l,l,l,l,l,l,new B.R(18,w,18,w),l,l,l),A.T,B.A(B.a([B.d(C.bFo(j).toUpperCase(),l,l,l,l,l,l,f,l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("FREE \xb7 NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],s),A.l,l,A.iW,A.j,0,l,l),A.am,m.aiA(!0,3)],s),A.l,l,A.e,A.j,0,A.p)
case"split":h=h.x
w=x.p
return B.x(B.a([B.A(B.a([B.q(l,l,A.f,B.b0(h),l,l,l,u*0.8,l,l,l,l,l,14),A.ew,B.E(B.d(i,l,1,A.eR,l,l,l,m.azv(v,u*0.9,1,A.U),l,l,l),1)],w),A.l,l,A.e,A.j,0,l,l),A.W,B.A(B.a([B.d(C.bFo(j),l,l,l,l,l,l,m.QA(k,13,B.b0(h),0.6,A.U),l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l)],w),A.l,l,A.iW,A.j,0,l,l),A.T,m.cvn(B.b0(h),3)],w),A.l,l,A.e,A.j,0,A.p)
case"logo":r=a0?52:64
w=m.gb3S()
v=B.d("NGMY",l,l,l,l,l,l,m.azx(k,r,1,-1.5,A.u),l,l,l)
t=r*0.2
s=r*0.04
q=B.b0(h.x)
p=B.m(r*0.16)
o=h.ch&&h.a==="midnight"||h.a==="gold"?A.w:A.c
h=h.w
n=x.p
return B.x(B.a([B.A(B.a([v,A.af,B.eG(A.A,-0.03,B.q(l,B.d("NEWS",l,l,l,l,l,l,m.rX(k,r*0.72,o,1.05,-0.5,A.cK,A.u),l,l,l),A.f,l,l,new B.p(q,l,l,p,l,l,A.n),l,l,l,l,new B.R(t,s,t,s),l,l,l),l),A.b3,new B.dm(1,A.co,B.d(w.toUpperCase(),l,2,A.a2,l,l,l,m.afD(k,12.5,B.b0(h).j(0.85),1.3,1.2,A.U),A.e4,l,l),l)],n),A.l,l,A.e,A.j,0,l,l),A.T,B.q(l,l,A.f,B.b0(h).j(0.25),l,l,l,1.4,l,l,l,l,l,l)],n),A.l,l,A.e,A.j,0,A.p)
case"blackletter":h=x.p
w=B.A(B.a([B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("PRICE: FREE \xb7 NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],h),A.l,l,A.iW,A.j,0,l,l)
t=m.aiA(!0,1.4)
s=a0?4:10
v=B.d(i,l,1,l,l,l,l,m.azv(v,u,1,A.U),A.K,l,l)
q=a0?4:8
return B.x(B.a([w,A.aw,t,new B.a5(l,s,l,l),v,new B.a5(l,q,l,l),m.aiA(!0,1.4),A.aw,B.d(C.bFo(j).toUpperCase(),l,l,l,l,l,l,f,A.K,l,l),A.aw,m.aBI(3)],h),A.l,l,A.e,A.j,0,A.p)
default:h=x.p
return B.x(B.a([B.d(i.toUpperCase(),l,1,l,l,l,l,m.azx(v,u,1,3,A.U),A.K,l,l),A.T,m.aiA(!0,1.2),A.aw,B.A(B.a([B.d(C.bFo(j).toUpperCase(),l,l,l,l,l,l,f,l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],h),A.l,l,A.iW,A.j,0,l,l),A.aw,m.aBI(3)],h),A.l,l,A.e,A.j,0,A.p)}},
ae1(d){return this.wb(d,!1)},
afB(d,e,f,g){var w=null,v=f*0.9,u=f*0.45,t=e==null?B.b0(this.d.x):e,s=B.m(f)
return B.q(w,B.d(d,w,w,w,w,w,w,this.afD("Roboto",f,g==null?A.c:g,1,0.4,A.u),w,w,w),A.f,w,w,new B.p(t,w,w,s,w,w,A.n),w,w,w,w,new B.R(v,u,v,u),w,w,w)},
cds(d,e){return this.afB(d,null,e,null)},
b_8(d){var w=null,v=new B.V(Date.now(),0,!1),u=A.o.F(B.dg(v),12)===0?12:A.o.F(B.dg(v),12),t=B.b0(this.d.w).j(0.75),s=this.azw("Roboto",15,t,1,A.cE),r=B.X(E.aoW,t,w,w,w,18),q=A.a.aB(A.oL[B.bM(v)-1],0,3),p=A.a.b_(A.o.u(B.fP(v)),2,"0"),o=B.dg(v)>=12?"PM":"AM"
return B.A(B.a([r,A.af,B.d(q+" "+B.bV(v)+", "+B.bD(v)+"  \xb7  "+u+":"+p+" "+o,w,w,w,w,w,w,s,w,w,w),B.q(w,w,A.f,t.j(0.4),w,w,w,20,w,A.h6,w,w,w,1),B.X(d,t,w,w,w,19),A.af,B.d("NGMY News",w,w,w,w,w,w,s,w,w,w)],x.p),A.l,w,A.e,A.j,0,w,w)},
ayb(){return this.b_8(A.n2)},
b6Q(d,e,f,g){var w=null,v=A.a.i(this.c.c)
if(v.length===0)v="Your headline appears here"
return B.d(v,w,e,A.a2,w,w,w,this.afD("Roboto",this.afA(v,"Roboto",A.I,d,e,f,g,1.08),w,1.08,-0.8,A.I),w,w,w)},
aBM(d,e,f){return this.b6Q(d,e,f,30)},
aDf(d,e,f){var w=null,v=A.a.i(this.c.d)
if(v.length===0)return A.bM
return new B.D(A.rW,B.d(v,w,e,A.a2,w,w,w,this.cdt("Roboto",f,B.b0(this.d.w).j(0.88),1.35),w,w,w),w)},
b9S(d){return this.aDf(d,3,22)},
cDe(d,e){return this.aDf(d,e,22)},
uj(d,e){var w,v,u,t,s=null,r=this.e
if(r!=null){w=B.fR(r,A.A,s,s,A.ck,A.c_,!0,e,!1,s,d)
r=this.d
v=r.ay
if(v==="bw")w=new B.BJ(D.bIK,w,s)
if(v==="sepia")w=new B.BJ(D.bIJ,w,s)}else{r=this.d
v=r.w
u=B.b0(v).j(0.1)
t=Math.min(d,e)
w=B.q(s,B.as(B.X(A.z7,B.b0(v).j(0.35),s,s,s,t*0.25),s,s,s),A.f,u,s,s,s,e,s,s,s,s,s,d)}v=B.a([w],x.p)
if(r.ax)v.push(new B.bN(new B.p(s,s,s,s,s,new B.bY(A.A,0.95,A.x,s,0,B.a([A.L,A.Z1.j(0.38)],x.O),s,s),A.n),A.bj,s,s))
return new B.a5(d,e,new B.an(A.a0,s,A.b0,A.t,v,s),s)},
qY(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d
switch(i.e.a){case 1:i=i.w
w=B.L(B.b0(i),A.r,3)
i=B.L(B.b0(i),A.r,1)
return B.q(j,B.q(j,k.uj(d-24,e-24),A.f,j,j,new B.p(j,j,i,j,j,j,A.n),j,j,j,j,A.eA,j,j,j),A.f,j,j,new B.p(j,j,w,j,j,j,A.n),j,e,j,j,A.me,j,j,d)
case 2:w=B.a([new B.ab(0,A.G,A.w.j(0.35),D.eoF,14)],x.V)
v=k.uj(d-28,e-28-58)
u=A.a.i(k.c.f)
if(u.length===0)u="NGMY"
return B.eG(A.A,-0.035,B.q(j,B.x(B.a([v,B.E(B.as(B.d(u,j,2,A.a2,j,j,j,k.b1G(i.as,13.5,D.biH,1.1,A.cK),A.K,j,j),j,j,j),1)],x.p),A.l,j,A.e,A.j,0,A.p),A.f,j,j,new B.p(D.bmF,j,j,j,w,j,A.n),j,e,j,j,D.bDo,j,j,d),j)
case 3:w=B.m(30)
i=B.L(B.b0(i.x),A.r,5)
return B.q(j,B.bw(B.m(25),k.uj(d-10,e-10),A.aq),A.f,j,j,new B.p(j,j,i,w,j,j,A.n),j,e,j,j,j,j,j,d)
case 4:t=Math.min(d,e)
w=B.L(B.b0(i.x),A.r,6)
i=B.b0(i.f)
v=t-10
return new B.a5(d,e,B.as(B.q(j,B.hV(k.uj(v,v),A.aq),A.f,j,j,new B.p(i,j,w,j,j,j,A.a6),j,t,j,j,A.me,j,j,t),j,j,j),j)
case 5:i=B.a([new B.ab(0,A.G,A.w.j(0.3),D.eol,10)],x.V)
return B.eG(A.A,0.025,new B.a5(d,e,new B.an(A.a0,j,A.ac,A.f,B.a([B.bS(0,B.q(j,k.uj(d-18,e-18),A.f,j,j,new B.p(A.c,j,j,j,i,j,A.n),j,j,j,j,A.t0,j,j,j),0,0,0),B.ap(j,B.eG(A.A,-0.6,B.q(j,j,A.f,A.bL.j(0.85),j,j,j,26,j,j,j,j,j,90),j),j,j,-18,j,-10,j),B.ap(-10,B.eG(A.A,-0.6,B.q(j,j,A.f,A.bL.j(0.85),j,j,j,26,j,j,j,j,j,90),j),j,j,j,-18,j,j)],x.p),j),j),j)
case 6:i=B.b0(i.x)
return new B.a5(d,e,B.b2(B.nW(k.uj(d,e),A.aq,D.huT),new C.beN(i,j),j,j,A.az),j)
case 7:i=x.p
w=B.a([k.uj(d-16,e-44)],i)
for(v=[!0,!1],u=v.length,s=d/34,r=0;r<u;++r){q=v[r]
p=q?-18:j
o=q?j:-18
n=B.a([],i)
for(m=0;m<Math.max(6,A.i.bh(s));++m){l=new B.aN(2,2)
n.push(B.q(j,j,A.f,j,j,new B.p(A.bP,j,j,new B.be(l,l,l,l),j,j,A.n),j,10,j,j,j,j,j,14))}w.push(new B.cK(0,p,0,o,j,j,new B.c8(A.aL,A.qW,A.j,A.l,j,A.p,j,0,n,j),j))}return B.q(j,new B.an(A.a0,j,A.b0,A.t,w,j),A.f,A.eq,j,j,j,e,j,j,D.bI_,j,j,d)
case 8:w=d/2
v=B.xC(A.fP,new B.aN(w,w))
i=B.L(B.b0(i.x),A.r,5)
w-=5
return B.q(j,B.bw(B.xC(A.hU,new B.aN(w,w)),k.uj(d-10,e-10),A.aq),A.f,j,j,new B.p(j,j,i,v,j,j,A.n),j,e,j,j,j,j,j,d)
case 9:i=B.a([new B.ab(0,A.G,A.w.j(0.35),A.h7,22)],x.V)
return B.q(j,k.uj(d-20,e-20),A.f,j,j,new B.p(A.c,j,j,j,i,j,A.n),j,e,j,j,A.bV,j,j,d)
case 10:return new B.a5(d,e,B.nW(k.uj(d,e),A.aq,D.hDa),j)
case 0:i=B.L(B.b0(i.w),A.r,2.4)
return B.q(j,k.uj(d-14,e-14),A.f,j,j,new B.p(j,j,i,j,j,j,A.n),j,e,j,j,A.eA,j,j,d)}},
aR7(d,e){return this.d.e===D.Ti?A.bM:this.bJb(d,e)},
Xg(d){return this.aR7(d,A.K)},
gaCw(){var w=this.c
return A.a.i(w.y).length!==0||A.a.i(w.w).length!==0},
aCv(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.c,l=A.a.i(m.x)
if(l.length===0)l=A.a.i(m.w).length!==0?"":"NGMY NOTES"
w=A.a.i(m.y)
v=o.d
u=B.L(B.b0(v.w),A.r,1.6)
t=v.x
s=B.b0(t)
s=s.j(v.ch?0.14:0.07)
r=x.p
q=B.a([],r)
m=A.a.i(m.w)
if(m.length!==0&&w.length===0)q.push(B.E(B.as(B.d("\u201c"+m+"\u201d",n,7,A.a2,n,n,n,o.b1H(v.Q,19,1.15,A.cK,A.U),A.K,n,n),n,n,n),1))
else{r=B.a([],r)
p=l.length!==0
if(p)r.push(B.d(l.toUpperCase(),n,1,A.a2,n,n,n,o.QA("Roboto",12.5,B.b0(t),1.2,A.u),n,n,n))
if(p)r.push(A.aw)
m=w.length===0?m:w
r.push(B.E(B.d(m,n,9,A.a2,n,n,n,o.afC(v.as,13,1.25),n,n,n),1))
A.d.v(q,r)}return B.q(n,B.jm(B.x(q,A.E,n,A.e,A.j,0,A.p),A.t,n),A.f,n,n,new B.p(s,n,u,n,n,n,A.n),n,e,n,n,A.bh,n,n,d)},
gclM(){var w=this.c.r
return w.length===0?B.a([y.g],x.s):w},
aaw(d,e,f,g){return B.cq(new C.cjt(this,e,d,f,g))},
aav(d){return this.aaw(d,22,!0,18)},
Xt(d,e){return this.aaw(d,22,!0,e)},
aSd(d,e,f){return this.aaw(d,22,e,f)},
bLb(d,e,f){return this.aaw(d,e,!0,f)},
bcR(d,e,f,g){return B.cq(new C.cju(this,e,d,g,!0,f))},
ckz(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i="Roboto",h=k.d
switch(h.d.a){case 0:return B.x(B.a([k.ae1(824),A.aB,k.aXY(824),k.b9N(824),A.T,k.Oe(),A.ae,B.as(k.qY(824,360),j,j,j),k.Xg(824),A.ae,B.E(k.aav(3),1)],x.p),A.al,j,A.e,A.j,0,A.p)
case 1:w=x.p
return B.x(B.a([k.ae1(824),A.aO,new B.a5(j,350,B.A(B.a([new B.a5(440,j,B.x(B.a([k.acQ(440,A.bp,3,62,26),k.aDc(440,A.bp,2,20),A.b3,k.at1(B.b0(h.x),!1)],w),A.E,j,A.e,A.j,0,A.p),j),A.Kp,B.x(B.a([k.qY(362,310),k.Xg(362)],w),A.l,j,A.e,A.j,0,A.p)],w),A.E,j,A.e,A.j,0,j,j),j),A.W,k.aBI(2),A.ae,B.E(k.aav(3),1)],w),A.al,j,A.e,A.j,0,A.p)
case 2:w=k.wb(824,!0)
v=B.b0(h.x)
u=h.ch
t=x.p
s=B.a([k.c1x(788,u?B.b0(h.f):A.c,3,92,34)],t)
r=k.c
if(A.a.i(r.d).length!==0)s.push(k.cD3(788,u?B.b0(h.f):A.c,22))
v=B.q(j,B.x(s,A.l,j,A.e,A.j,0,A.p),A.f,v,j,j,j,j,j,j,A.Cq,j,j,j)
u=B.a([B.as(k.qY(824,390),j,j,j)],t)
s=A.a.i(r.f)
if(s.length!==0&&h.e!==D.Ti){h=A.w.j(0.65)
u.push(B.ap(0,B.q(j,B.d(s,j,2,A.a2,j,j,j,k.azw(i,14,A.c,1.15,A.U),j,j,j),A.f,h,j,j,j,j,j,j,A.lK,j,j,j),j,j,0,0,j,j))}return B.x(B.a([w,A.ae,v,A.ae,new B.an(A.a0,j,A.ac,A.t,u,j),A.T,k.Oe(),A.W,B.E(k.Xt(2,21),1)],t),A.al,j,A.e,A.j,0,A.p)
case 3:h=k.wb(824,!0)
w=k.qY(824,560)
v=B.a([A.L,A.w.j(0.85)],x.O)
u=x.p
return B.x(B.a([h,A.ae,new B.an(A.b7,j,A.ac,A.t,B.a([w,B.ap(0,B.q(j,k.Pj(780,A.bp,A.c,3,74,30),A.f,j,j,new B.p(j,j,j,j,j,new B.a8(A.b1,A.b7,A.x,v,j,j),A.n),j,j,j,j,D.bGb,j,j,j),j,j,0,0,j,j)],u),j),k.b9O(824,A.bp),A.T,k.Oe(),A.W,B.E(k.aav(3),1)],u),A.al,j,A.e,A.j,0,A.p)
case 4:h=x.p
return B.x(B.a([k.ae1(824),A.aB,k.aXY(824),k.b9N(824),A.T,k.Oe(),A.ae,B.E(k.bcR(3,300,B.x(B.a([k.qY(300,300),k.Xg(300)],h),A.l,j,A.e,A.j,0,A.p),360),1)],h),A.al,j,A.e,A.j,0,A.p)
case 5:w=k.wb(824,!0)
v=x.p
u=B.x(B.a([k.acQ(440,A.bp,3,62,26),k.aDc(440,A.bp,2,20),A.b3,k.at0(!1)],v),A.E,j,A.e,A.j,0,A.p)
return B.x(B.a([w,A.bz,new B.a5(j,400,B.A(B.a([new B.a5(440,j,u,j),A.aTQ,new B.D(A.i0,k.qY(364,h.e===D.Ti?400:330),j)],v),A.E,j,A.e,A.j,0,j,j),j),A.aB,B.E(k.Xt(2,21),1)],v),A.al,j,A.e,A.j,0,A.p)
case 6:return B.x(B.a([k.ae1(824),A.ae,k.c1w(824,2,70),k.cD1(824,21),A.T,k.Oe(),A.ae,B.E(k.bcR(3,340,B.as(k.qY(340,340),j,j,j),350),1)],x.p),A.al,j,A.e,A.j,0,A.p)
case 7:w=k.wb(824,!0)
v=B.b0(h.x)
u=Date.now()
u=C.bFo(new B.V(u,0,!1))
t=x.p
v=B.a([B.q(j,B.d(u.toUpperCase(),j,j,j,j,j,j,k.QA(i,13,h.ch?B.b0(h.f):A.c,1.2,A.u),A.K,j,j),A.f,v,j,j,j,j,j,j,A.bh,j,j,j),A.aB],t)
u=A.a.i(k.c.w)
if(u.length!==0)v.push(B.d("\u201c"+u+"\u201d",j,j,j,j,j,j,k.b1H(h.Q,24,1.15,A.cK,A.U),j,j,j))
v.push(A.b3)
if(k.gaCw())v.push(k.aCv(230,250))
return B.x(B.a([w,A.aB,B.E(B.A(B.a([new B.a5(230,j,B.x(v,A.al,j,A.e,A.j,0,A.p),j),B.q(j,j,A.f,B.b0(h.w),j,j,j,j,j,A.alx,j,j,j,1.2),new B.a5(570,j,B.x(B.a([k.acQ(570,A.bp,3,62,28),k.cD2(570,A.bp,20),A.T,k.at0(!1),A.T,B.as(k.qY(570,330),j,j,j),k.Xg(570),A.W,B.E(k.aSd(2,!1,17),1)],t),A.al,j,A.e,A.j,0,A.p),j)],t),A.E,j,A.e,A.j,0,j,j),1)],t),A.al,j,A.e,A.j,0,A.p)
case 8:w=k.wb(824,!0)
v=h.ch
u=v?B.b0(h.x):B.b0(h.w)
t=B.d("\u2605  SPECIAL REPORT  \u2605",j,j,j,j,j,j,k.QA(i,13,v?A.w:B.b0(h.x),3,A.u),j,j,j)
s=x.p
return B.x(B.a([w,A.ae,B.q(j,B.x(B.a([t,A.am,k.Pj(788,A.bp,v?A.w:B.b0(h.f),2,72,30)],s),A.E,j,A.e,A.j,0,A.p),A.f,u,j,j,j,j,j,j,D.bEu,j,j,j),k.b9O(824,A.bp),A.W,B.as(k.qY(824,310),j,j,j),k.Xg(824),A.T,k.Oe(),A.W,B.E(k.aav(3),1)],s),A.al,j,A.e,A.j,0,A.p)
case 10:w=x.p
return B.x(B.a([k.wb(824,!0),A.aO,new B.an(A.a0,j,A.ac,A.t,B.a([k.qY(824,430),B.ap(18,k.cds(k.c.b,17),j,j,18,j,j,j)],w),j),A.bz,k.aBM(824,3,66),k.b9S(824),A.ae,B.q(j,j,A.f,B.b0(h.w).j(0.25),j,j,j,1,j,j,j,j,j,j),A.ae,k.ayb(),A.aB,B.E(k.Xt(2,18),1)],w),A.al,j,A.e,A.j,0,A.p)
case 11:h=h.x
w=x.p
return B.x(B.a([k.wb(824,!0),A.bz,new B.a5(j,500,B.A(B.a([new B.a5(410,j,B.x(B.a([k.afB(k.c.b,B.b0(h).j(0.14),15,B.b0(h)),A.aO,k.b6Q(410,4,58,28),k.aDf(410,6,20),A.b3],w),A.E,j,A.e,A.j,0,A.p),j),V.aTR,k.qY(390,500)],w),A.E,j,A.e,A.j,0,j,j),j),A.aB,k.ayb(),A.aO,B.E(k.Xt(2,18),1)],w),A.al,j,A.e,A.j,0,A.p)
case 12:w=k.wb(824,!0)
v=k.qY(824,420)
u=B.hR_(-0.25)
t=B.b0(h.x)
s=B.a([new B.ab(0,A.G,A.w.j(0.4),A.J,10)],x.V)
r=x.p
return B.x(B.a([w,A.aO,new B.an(A.a0,j,A.ac,A.t,B.a([v,B.ap(22,B.fz(j,B.q(j,B.d("BREAKING NEWS",j,j,j,j,j,j,k.cdv(i,30,A.c,1,A.cK,A.u),j,j,j),A.f,j,j,new B.p(t,j,j,j,s,j,A.n),j,j,j,j,D.bGr,j,j,j),j,u,!0),j,j,0,j,j,j)],r),j),A.bz,k.aBM(824,3,62),k.b9S(824),A.ae,B.q(j,j,A.f,B.b0(h.w).j(0.25),j,j,j,1,j,j,j,j,j,j),A.ae,k.b_8(A.lP),A.aB,B.E(k.Xt(2,18),1)],r),A.al,j,A.e,A.j,0,A.p)
case 13:w=k.c
q=A.a.i(w.x)
if(!(q.length!==0)){v=A.a.i(w.w)
q=v.length!==0?v:"More from NGMY News"}v=k.wb(824,!0)
u=h.w
t=x.p
w=B.a([k.qY(824,380),B.ap(j,k.afB(w.b,B.b0(u).j(0.85),15,B.b0(h.f)),j,j,16,j,16,j)],t)
s=k.aBM(824,2,60)
r=k.cDe(824,2)
p=k.ayb()
o=B.E(k.aSd(2,!1,18),1)
n=B.L(B.b0(u).j(0.18),A.r,1)
m=B.m(18)
h=h.x
l=B.b0(h).j(0.05)
return B.x(B.a([v,A.aO,new B.an(A.a0,j,A.ac,A.t,w,j),A.aO,s,r,A.W,p,A.aB,o,A.ae,B.q(j,B.A(B.a([B.bw(B.m(14),k.uj(150,104),A.aq),A.oX,B.E(B.x(B.a([k.afB("RELATED",B.b0(h).j(0.14),12,B.b0(h)),A.T,B.d(q,j,2,A.a2,j,j,j,k.azv(i,19,1.15,A.I),j,j,j)],t),A.E,j,A.e,A.P,0,A.p),1),B.X(A.eI,B.b0(u).j(0.6),j,j,j,30)],t),A.l,j,A.e,A.j,0,j,j),A.f,j,j,new B.p(l,j,n,m,j,j,A.n),j,j,j,j,A.bh,j,j,j)],t),A.al,j,A.e,A.j,0,A.p)
case 9:return B.x(B.a([k.wb(824,!0),A.bz,k.acQ(824,A.bp,3,62,30),k.aDc(824,A.bp,2,22),A.W,k.at0(!1),A.W,B.as(k.qY(824,330),j,j,j),k.aR7(824,A.bp),A.aO,B.E(k.bLb(2,40,21),1)],x.p),A.al,j,A.e,A.j,0,A.p)}},
B(d){var w,v,u,t=this,s=null,r="Roboto",q=t.d,p=q.f,o=x.p,n=B.a([B.bS(0,new B.bN(new B.p(s,s,s,s,s,new B.a8(A.aA,A.aF,A.x,B.a([B.b0(p),B.b0(q.r)],x.O),s,s),A.n),A.bj,s,s),0,0,0)],o)
if(q.ax)n.push(B.bS(0,B.b2(s,s,s,new C.bbf(B.b0(q.w),s),A.az),0,0,0))
w=q.w
n.push(new B.D(D.bGY,B.x(B.a([B.E(t.ckz(),1),A.T,B.q(s,s,A.f,B.b0(w),s,s,s,1.4,s,s,s,s,s,s),A.fD,B.A(B.a([B.d("PRINTED WITH NGMY NEWS",s,s,s,s,s,s,t.b1F(r,11,1.4,A.I),s,s,s),B.d("CREATED BY NGMY.ORG",s,s,s,s,s,s,t.QA(r,11,B.b0(q.x),1.4,A.u),s,s,s)],o),A.l,s,A.iW,A.j,0,s,s)],o),A.al,s,A.e,A.j,0,A.p),s))
v=B.b0(w)
n.push(B.bS(0,new B.du(!0,B.b2(s,s,s,new C.buk(v.j(q.ch?0.07:0.06),s),A.az),s),0,0,0))
p=B.b0(p).j(0.75)
v=B.L(B.b0(w).j(0.5),A.r,1.2)
u=B.m(40)
o=B.a([],o)
q=t.f
if(q!=null)o.push(B.hV(B.fR(q,A.A,s,s,A.ck,A.c_,!1,30,!1,s,30),A.aq))
else o.push(B.X(A.n2,B.b0(w),s,s,s,28))
o.push(A.af)
o.push(B.d("NGMY.ORG",s,s,s,s,s,s,t.azx(r,15,1,1.6,A.u),s,s,s))
n.push(B.ap(52,new B.du(!0,B.d3(B.q(s,B.A(o,A.l,s,A.e,A.P,0,s,s),A.f,s,s,new B.p(p,s,v,u,s,s,A.n),s,s,s,s,D.bI8,s,s,s),0.6),s),s,s,s,40,s,s))
return new B.a5(900,1260,B.jm(new B.an(A.a0,s,A.ac,A.t,n,s),A.t,s),s)}}
C.beO.prototype={
ju(d){return C.huP(d)},
k9(d){return!1}}
C.beN.prototype={
a5(d,e){var w,v=C.huP(e)
$.S()
w=B.K()
w.r=this.b.gp(0)
w.b=A.a9
w.c=6
return d.af(v,w)},
aD(d){return!d.b.A(0,this.b)}}
C.bwR.prototype={
ju(d){var w,v,u,t,s,r,q,p,o=new B.e2()
o.cY(3)
w=$.S()
v=B.a([],x.v)
u=new B.aG(w.r,A.ai,null,null,v)
u.E(new B.aZ(0,8))
for(t=d.a,s=0;s<t;s+=14){w=new B.aq(s,o.ai()*14)
v.push(w)
r=u.f
if(r!=null)w.ak(r)
u.ab()}u.E(new B.aq(t,8))
w=d.b
r=w-8
u.E(new B.aq(t,r))
for(;t>0;t-=14){q=new B.aq(t,w-o.ai()*14)
v.push(q)
p=u.f
if(p!=null)q.ak(p)
u.ab()}u.E(new B.aq(0,r))
u.E(new B.bt())
return u},
k9(d){return!1}}
C.bbf.prototype={
a5(d,e){var w,v,u,t,s,r,q,p=null,o=new B.e2()
o.cY(7)
$.S()
w=B.K()
for(v=this.b,u=e.a,t=e.b,s=0;s<700;++s){w.r=v.j(0.03+o.ai()*0.07).gp(0)
d.N(new B.o(o.ai()*u,o.ai()*t),0.4+o.ai()*1.4,w)}for(v=x.O,s=0;s<5;++s){r=new B.o(o.ai()*u,o.ai()*t)
q=50+o.ai()*90
w.sav(new B.bY(A.A,0.5,A.x,p,0,B.a([A.Yt.j(0.13),A.L],v),p,p).aK(0,B.bZ(r,q)))
d.N(r,q,w)}w.sav(p)},
aD(d){return!1}}
C.buk.prototype={
a5(d,e){var w,v,u=null,t=e.a,s=B.fq(u,A.cs,u,u,u,B.cQ(u,u,u,u,u,u,u,u,u,B.l(u,u,this.b,u,u,u,u,u,"Roboto",u,u,t*0.34,u,u,A.u,u,u,!0,u,10,u,u,u,u,u,u),"NGMY"),A.a5,A.bX,u,A.dD,A.bY)
s.e5()
w=d.c
J.bo(w.save())
w.translate(t/2,e.b*0.52)
d.hW(0,-0.5)
t=s.b
v=t.c
t=t.a.c
s.a5(d,new B.o(-v/2,-t.gba(t)/2))
w.restore()},
aD(d){return!d.b.A(0,this.b)}}
C.X8.prototype={
S(){return new C.aG4()}}
C.aG4.prototype={
Y(){var w=this
w.a4()
B.fIC(w.a.c,null).bG(new C.euz(),x.g7).bG(new C.euA(w),x.a)
w.a.toString},
gaPU(){var w=D.azC[this.e].b
if(w==null){w=this.d
w=w==null?1:w.c/w.d}return w},
gazy(){var w,v,u,t,s,r=this,q=r.d,p=q.c,o=q.d
q=r.gaPU()
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
q=A.i.D(v*p,q,p-q)-q
w=A.i.D(u*o,w,o-w)-w
return new B.a1(q,w,q+s,w+t)},
a_Y(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f
var $async$a_Y=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:g=r.d
if(g==null||r.y){w=1
break}r.m(new C.eum(r))
t=4
q=r.gazy()
j=q
p=Math.min(1600,j.c-j.a)
j=q
i=q
o=p*(j.d-j.b)/(i.c-i.a)
$.S()
n=new B.q0(new B.pC())
m=B.zx(n,null)
i=B.K()
i.z=A.hh
m.q4(g,q,new B.a1(0,0,0+p,0+o),i)
w=7
return B.b(n.o3().xH(J.hk_(p),J.hk_(o)),$async$a_Y)
case 7:l=e
w=8
return B.b(l.hr(A.hl),$async$a_Y)
case 8:k=e
j=r.c
if(j!=null){j=B.a6(j,!1)
i=k
i.toString
j.O(J.eT(J.w1(i)))}t=2
w=6
break
case 4:t=3
f=s.pop()
if(r.c!=null){r.m(new C.eun(r))
r.c.L(x.q).f.T(D.fjV)}w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a_Y,v)},
B(d){var w,v,u,t=this,s=null,r=t.d,q=B.aI(s,s,s,s,A.lo,s,s,s,new C.eut(d),s,s,s,s,s,s),p=x.p
q=B.eJ(B.a([B.bO(!1,D.fZe,s,s,!0,s,s,s,t.y||r==null?s:t.gcdw(),s,s)],p),s,s,!0,!0,A.C4,s,1,!0,s,0,!1,s,!1,s,s,q,s,!0,s,s,s,s,s,D.h2e,s,s,s,1,s,!0)
if(r==null)p=A.m2
else{w=B.E(new B.D(A.bS,B.as(new B.fH(t.gaPU(),B.cq(new C.euu(t,r)),s),s,s,s),s),1)
v=B.a([],p)
for(u=0;u<6;++u)v.push(new B.D(A.iP,B.jx(s,s,s,B.d(D.azC[u].a,s,s,s,s,s,s,A.ab9,s,s,s),s,new C.euv(t,u),t.e===u,s,s,s,s),s))
p=B.x(B.a([w,B.q(s,B.bm(!0,B.x(B.a([new B.a5(s,40,B.cl(v,s,s,s,s,s,A.aL,!1),s),B.A(B.a([D.c_G,B.E(B.kX(s,s,s,6,1,new C.euw(t),t.f),1),D.c_f],p),A.l,s,A.e,A.j,0,s,s),D.fWv,A.am,B.bO(!1,D.fWd,s,s,!0,s,s,s,new C.eux(t,d),s,s)],p),A.l,s,A.e,A.P,0,A.p),!0,!1,A.ag,!0,!1),A.f,D.Zi,s,s,s,s,s,s,D.bDQ,s,s,s)],p),A.l,s,A.e,A.j,0,A.p)}return B.c4(q,A.C4,p,s,!1,!1,s,s)}}
C.bel.prototype={
a5(d,e){var w
$.S()
w=B.K()
w.z=A.ck
return d.q4(this.b,this.c,new B.a1(0,0,0+e.a,0+e.b),w)},
aD(d){return!d.c.A(0,this.c)||d.b!==this.b}}
C.a1f.prototype={
S(){var w=$.ax(),v=x.A
return new C.aHt(new B.au(A.ax,w),new B.au(new B.ba("NGMY",A.b5,A.aP),w),new B.cw(null,v),new B.cw(null,v),A.d.gH(D.a6o),"quote"+1000*Date.now(),B.a([],x.t),B.aR(x.S),A.K)}}
C.oX.prototype={}
C.aHt.prototype={
gaY6(){var w,v,u=this
if(u.p1)w=new B.rC(1,u.p2,0.9,u.p3).jd().l()&16777215
else{v=u.k4
w=v==null?null:v&16777215}if(w==null)return 0
return(A.o.D(A.i.V(u.ok*255),0,255)<<24|w)>>>0},
Y(){var w=this
w.a4()
w.a.toString
w.p4=null
$.aW.x1$.push(new C.f3z(w))},
t(){var w=this.d,v=$.ax()
w.U$=v
w.P$=0
w=this.e
w.U$=v
w.P$=0
this.a3()},
Zw(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Zw=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b($.rk().jp(0,"assets/images/ngmy_logo.png"),$async$Zw)
case 7:q=e
p=J.eT(J.w1(q))
o=r.c
w=o!=null?8:9
break
case 8:w=10
return B.b(F.bG8(new B.qa(p,1),o),$async$Zw)
case 10:case 9:if(r.c==null){w=1
break}r.m(new C.f2r(r,p))
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
return B.i($async$Zw,v)},
QD(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$QD=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hX().l9(92,1800,A.eP),$async$QD)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fq(),$async$QD)
case 8:p=e
n=r.c
if(n==null){w=1
break}w=9
return B.b(F.bG8(new B.qa(p,1),n),$async$QD)
case 9:if(r.c==null){w=1
break}r.m(new C.f2P(r,p))
t=2
w=6
break
case 4:t=3
l=s.pop()
o=B.ac(l)
n=r.c
if(n!=null)n.L(x.q).f.T(B.b3(null,null,null,null,null,A.t,null,B.d("Could not open that picture. "+B.w(o),null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$QD,v)},
b6c(){var w=this
w.RG=w.R8=0
w.ry=w.rx=1
w.xr=w.x2=w.x1=w.to=0
w.y1=!1
w.aH=w.aR=w.aL=w.aG=w.a0=w.bb=w.bn=w.y2=0
w.b8=null
w.b6=0.25
w.bf=null
w.bK=0.5
w.aP=1
w.c8=w.bH=w.bm=0
w.cP=w.c5=!1},
aZT(d,e,f,g,h,i,j,a0,a1){var w,v,u,t,s,r,q,p,o,n=1-g,m=n*0.2126,l=n*0.7152,k=n*0.0722
n=x.x
w=C.bCO(B.a([m+g,l,k,0,0,m,l+g,k,0,0,m,l,k+g,0,0,0,0,0,1,0],n),D.dtq)
if(Math.abs(j)>0.5){v=j*3.141592653589793/180
u=Math.cos(v)
t=Math.sin(v)
s=0.715-u*0.715
r=t*0.715
q=0.072-u*0.072
p=0.213-u*0.213
w=C.bCO(B.a([0.213+u*0.787-t*0.213,s-r,q+t*0.928,0,0,p+t*0.143,0.715+u*0.285+t*0.14,q-t*0.283,0,0,p-t*0.787,s+r,0.072+u*0.928+t*0.072,0,0,0,0,0,1,0],n),w)}o=128*(1-f)+d*255
n=h*25
w=C.bCO(C.heD(Math.pow(2,e)*f,o+n,o-i*25,o-n+i*12),w)
if(a0>0){n=a0*255*0.25
w=C.bCO(C.heD(1-a0*0.5,n,n,n),w)}return a1?C.bCO(C.heD(-1,255,255,255),w):w},
aDl(){var w,v,u=B.ag("\\S+",!0,!1,!1,!1).kZ(0,this.d.a.a),t=B.C(u,B.a4(u).k("M.E"))
for(u=this.db;w=u.length,v=t.length,w<v;)u.push(0)
if(w>v)A.d.xF(u,v,w)
this.dx.pA(new C.f2Z(t),!0)
return t},
b8M(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.w
e.aDl()
w=C.ioF(e.d.a.a,e.db)
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
return C.il1(d,k,v,a0,j,e.gaY6(),e.ax,i,u,q,p,r,t,s,w,g,h,f,n,l,o,m)},
cAS(){return this.b8M(null)},
DP(){var w=0,v=B.j(x.dd),u,t=this,s,r,q
var $async$DP=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.p4==null){u=null
w=1
break}w=3
return B.b($.aW.gmV(),$async$DP)
case 3:w=4
return B.b(B.bQ(A.eT,null,x.H),$async$DP)
case 4:w=5
return B.b($.aW.gmV(),$async$DP)
case 5:s=$.aW.ap$.x.h(0,t.r)
r=s==null?null:s.gbg()
if(!(r instanceof B.qk)){u=null
w=1
break}w=7
return B.b(r.mg(1080/r.gZ(0).a),$async$DP)
case 7:w=6
return B.b(e.hr(A.hl),$async$DP)
case 6:q=e
u=q==null?null:J.eT(A.dR.gaU(q))
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$DP,v)},
abq(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$abq=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.Q){w=1
break}q.m(new C.f2a(q))
t=4
w=7
return B.b(q.DP(),$async$abq)
case 7:p=e
o=p==null?null:"data:image/png;base64,"+A.cT.gcu().aN(p)
n=C.Cr(null,null,null,null,D.oQ,6,!1,null,null,null,null,null,C.cE(),null,!1,null,"NGMY Quote",null,null,B.a([q.b8M(o)],x.g),"office_blue",null,!1,null)
l=q.c
if(l!=null)B.a6(l,!1).O(n)
r.push(6)
w=5
break
case 4:t=3
j=s.pop()
m=B.ac(j)
l=q.c
if(l!=null)l.L(x.q).f.T(B.b3(null,null,null,null,null,A.t,null,B.d(B.w(m),null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.f2b(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$abq,v)},
B7(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$B7=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.Q){w=1
break}q.m(new C.f28(q))
t=4
w=7
return B.b($.aW.gmV(),$async$B7)
case 7:w=8
return B.b(B.bQ(A.mV,null,x.H),$async$B7)
case 8:w=9
return B.b($.aW.gmV(),$async$B7)
case 9:k=$.aW.ap$.x.h(0,q.f)
p=k==null?null:k.gbg()
if(!(p instanceof B.qk))throw B.W("The picture is not ready yet.")
w=10
return B.b(p.mg(1080/p.gZ(0).a),$async$B7)
case 10:o=e
w=11
return B.b(o.hr(A.hl),$async$B7)
case 11:n=e
if(n==null)throw B.W("Could not make the picture.")
w=12
return B.b(A9.ahM(J.eT(A.dR.gaU(n)),"ngmy_quote.png","image/png"),$async$B7)
case 12:m=e
k=q.c
if(k==null){r=[1]
w=5
break}k=k.L(x.q).f
k.T(B.b3(null,null,null,null,null,A.t,null,B.d(m?"Your quote picture is ready. Check your downloads.":"Downloading is not available here. Use Edit in Slides, then PDF.",null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
l=B.ac(i)
k=q.c
if(k!=null)k.L(x.q).f.T(B.b3(null,null,null,null,null,A.t,null,B.d(B.w(l),null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.f29(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$B7,v)},
cnI(){var w=this.p4
w.toString
return B.cq(new C.f2I(this,w))},
b1O(d,e){var w=null
return B.bz(w,w,w,w,w,D.fuT,w,w,!0,new B.b6(4,B.m(16),P.vW),w,w,w,w,w,D.uh,!0,w,w,w,w,new B.b6(4,B.m(16),D.b5z),w,w,w,w,w,w,w,w,Ad.EO,e,w,w,w,w,w,w,w,D.fAz,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
yD(d,e){var w=null,v=x.p,u=B.a([],v)
A.d.v(u,B.a([B.X(e,A.b8,w,w,w,15),A.bo],v))
u.push(B.d(d,w,w,w,w,w,w,D.aWB,w,w,w))
return new B.D(H.aln,B.A(u,A.l,w,A.e,A.j,0,w,w),w)},
b1N(d,e){var w=null,v=B.m(18),u=B.L(A.bA,A.r,1)
return B.q(w,B.aH(!1,A.a3,!0,w,d,A.f,w,0,w,w,w,w,w,A.jt),A.f,w,w,new B.p(D.uh,w,u,v,w,w,A.n),w,w,w,w,e,w,w,1/0)},
wj(d){return this.b1N(d,A.bI)},
oz(d,e,f,g){var w,v,u,t,s,r=null,q=g!=null,p=f?G.v5:r
if(f)w=r
else w=A.c.j(q?0.07:0.03)
v=B.m(30)
u=B.L(f?A.L:A.bA,A.r,1)
t=x.p
s=B.a([],t)
if(e!=null)A.d.v(s,B.a([B.X(e,q?A.c:A.jZ,r,r,r,16),A.bo],t))
s.push(B.d(d,r,r,r,r,r,r,B.l(r,r,q?A.c:A.jZ,r,r,r,r,r,r,r,r,12.5,r,r,A.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r))
return B.az(r,B.cT(r,B.A(s,A.l,r,A.e,A.P,0,r,r),r,r,A.b_,new B.p(w,r,u,v,r,p,A.n),A.h3,r,r,r,r,A.GM,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,g,r,r,r,r,r,r,!1,A.a4)},
ahw(d,e,f){return this.oz(d,null,e,f)},
azC(d,e,f,g,h,i,j){var w=null,v=B.m(12),u=g?A.b8.j(0.28):A.c.j(0.05),t=g?A.eK:A.bA,s=x.p
v=B.a([B.cT(w,d,w,w,A.b_,new B.p(u,w,B.L(t,A.r,g?2:1),v,w,w,A.n),A.h3,w,e,w,w,new B.R(i,i,i,i),w,w,j)],s)
u=g?A.c:A.aD
A.d.v(v,B.a([A.aw,B.d(f,w,1,A.a2,w,w,w,B.l(w,w,u,w,w,w,w,w,w,w,w,j<54?8.5:10.5,w,w,A.U,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],s))
return B.az(w,new B.a5(j,w,B.x(v,A.l,w,A.e,A.P,0,A.p),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,h,w,w,w,w,w,w,!1,A.a4)},
b1R(d,e,f,g,h,i){return this.azC(d,e,f,g,h,5,i)},
kC(d,e,f,g,h,i,j){var w,v,u=null,t=x.p,s=B.a([B.E(B.d(d,u,u,u,u,u,u,E.aVn,u,u,u),1)],t)
if(i!=null&&Math.abs(e-i)>0.001)s.push(B.az(u,D.esY,A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.f2V(this,h,i),u,u,u,u,u,u,!1,A.a4))
w=A.c.j(0.08)
v=B.m(20)
s.push(B.q(u,B.d(j,u,u,u,u,u,u,A.Vx,u,u,u),A.f,u,u,new B.p(w,u,u,v,u,u,A.n),u,u,u,u,A.a1_,u,u,u))
s=B.A(s,A.l,u,A.e,A.j,0,u,u)
w=this.c
w.toString
w=B.abo(w).cPD(A.b8,A.bA,A.b8.j(0.2),A.c,D.f9v,4)
return new B.D(A.yA,B.x(B.a([s,B.Z_(B.kX(u,u,u,g,f,new C.f2W(this,h),A.i.D(e,f,g)),w)],t),A.l,u,A.e,A.j,0,A.p),u)},
ajz(d,e,f,g,h,i){return this.kC(d,e,f,g,h,null,i)},
ajY(d,e,f){var w,v,u,t,s,r,q,p,o=null,n=B.a([],x.p)
for(w=f.length,v=0;v<f.length;f.length===w||(0,B.J)(f),++v){u=f[v]
t=u==null
s=t?A.dr:B.b0(u)
r=d==u
q=r?A.c:A.aT
p=new B.ay(q,r?3:1,A.r,-1)
t=t?D.bTu:o
n.push(B.az(o,B.q(o,t,A.f,o,o,new B.p(s,o,new B.bH(p,p,p,p),o,o,o,A.a6),o,34,o,o,o,o,o,34),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new C.f2Y(this,e,u),o,o,o,o,o,o,!1,A.a4))}return B.bW(A.bH,n,A.bs,o,10,10)},
bPk(){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.x==="All")w=D.a6o
else{v=x.a8
w=B.C(new B.Y(D.a6o,new C.f20(o),v),v.k("M.E"))}v=B.aM(n,A.Z,!1,n,!0,A.t,n,B.aO(),o.d,n,n,n,n,n,2,o.b1O("Your quote",o.w.y),A.y,!0,n,!0,n,!1,n,A.ak,n,n,n,n,n,n,n,280,n,4,2,n,!1,"\u2022",n,new C.f21(o),n,n,n,!1,n,n,!1,n,!0,n,A.ad,n,n,n,n,n,n,n,n,n,n,n,A.abq,!0,A.a5,n,A.ao,n,n,n,n)
u=B.aM(n,A.Z,!1,n,!0,A.t,n,B.aO(),o.e,n,n,n,n,n,2,o.b1O("Who said it","NGMY"),A.y,!0,n,!0,n,!1,n,A.ak,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,new C.f22(o),n,n,n,!1,n,n,!1,n,!0,n,A.ad,n,n,n,n,n,n,n,n,n,n,n,A.dk,!0,A.a5,n,A.ao,n,n,n,n)
t=o.yD("DESIGNS",A.uO)
s=x.p
r=B.a([],s)
for(q=0;q<6;++q){p=D.d2c[q]
r.push(new B.D(A.iP,o.ahw(p,o.x===p,new C.f23(o,p)),n))}return B.x(B.a([v,A.W,u,t,B.ce(B.A(r,A.l,n,A.e,A.j,0,n,n),A.t,n,A.y,n,n,n,n,A.aL),A.ae,new B.a5(n,118,B.hP(n,new C.f24(o,w),w.length,n,n,A.aL,new C.f25(),!1),n),A.T,o.b1N(B.x(B.a([B.iQ(A.b8,n,n,A.ag,!0,new C.f26(o),n,D.fNd,n,D.fJp,o.k3),B.iQ(A.b8,n,n,A.ag,!0,new C.f27(o),n,n,n,D.fGA,o.k2)],s),A.l,n,A.e,A.j,0,A.p),A.alW)],s),A.E,n,A.e,A.j,0,A.p)},
cJP(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=null,a7=a5.aDl()
if(a7.length===0)return a5.wj(B.d("Type your quote on the Design tab. Every word will show up here so you can make it bigger, normal or smaller.",a6,a6,a6,a6,a6,a6,D.KO,a6,a6,a6))
w=a5.d.a.a
v=B.a([],x.t)
for(u=a7.length,t=0,s=0;s<a7.length;a7.length===u||(0,B.J)(a7),++s){r=a7[s]
v.push(t)
q=B.ag('[.!?]["\u201d\u2019)]*$',!0,!1,!1,!1)
p=r.b
o=p.index
p=A.a.aB(w,o,o+p[0].length)
if(q.b.test(p))++t}n=v.length===0?0:A.d.gan(v)+1
u=a5.dx
m=B.C(u,B.a4(u).k("ch.E"))
A.d.ff(m)
l=m.length!==0&&A.d.cE(m,new C.f3o(a5,m))?a5.db[A.d.gH(m)]:a6
k=new C.f3v(a5)
j=new C.f3x()
q=B.d("Tap the words you want to change, then choose a size. One sentence can have big, normal and small words.",a6,a6,a6,a6,a6,a6,D.KO,a6,a6,a6)
p=x.p
o=B.a([],p)
for(i=a5.db,h=0;h<a7.length;++h){g=new B.aN(11,11)
f=u.q(0,h)?A.b8.j(0.38):A.c.j(0.06)
e=u.q(0,h)?A.eK:A.bA
d=new B.ay(e,u.q(0,h)?2:1,A.r,-1)
e=a7[h].b
a0=e.index
e=A.a.aB(w,a0,a0+e[0].length)
a0=B.ag("[*~^]",!0,!1,!1,!1)
e=B.aL(e,a0,"")
a0=j.$1(i[h])
a1=i[h]>0?A.u:A.a8
o.push(B.az(a6,B.q(a6,B.d(e,a6,a6,a6,a6,a6,a6,new B.G(!0,A.c,a6,a6,a6,a6,a0,a1,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),a6,a6,a6),A.f,a6,a6,new B.p(f,a6,new B.bH(d,d,d,d),new B.be(g,g,g,g),a6,a6,A.n),a6,a6,a6,a6,A.Op,a6,a6,a6),A.y,!1,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,new C.f3p(a5,h),a6,a6,a6,a6,a6,a6,!1,A.a4))}o=a5.wj(B.bW(A.bH,o,A.vQ,a6,6,6))
i=B.a([a5.oz("All words",K.aqs,!1,new C.f3q(a5,a7))],p)
if(n>1){a2=0
for(;;){if(!(a2<n&&a2<8))break
a3=a2+1
i.push(a5.ahw("Sentence "+a3,!1,new C.f3r(a5,a7,v,a2)))
a2=a3}}i.push(a5.ahw("Clear picks",!1,new C.f3s(a5)))
i=B.bW(A.bH,i,A.bs,a6,8,8)
g=a5.yD("SIZE OF THE PICKED WORDS",D.apT)
f=B.a([],p)
for(s=0;s<4;++s){e={}
a0=D.dzE[s]
a1=e.a=null
a4=a0.a
e.a=a4
e=u.a===0?a1:new C.f3t(e,k)
f.push(a5.ahw(a0.b,l===a4,e))}return B.x(B.a([q,A.W,o,A.W,i,g,B.bW(A.bH,f,A.bs,a6,8,8),A.W,a5.oz("Make every word normal",A.k8,!1,new C.f3u(a5))],p),A.E,a6,A.e,A.j,0,A.p)},
cEL(){var w,v,u,t,s,r,q=this,p=null,o=x.p,n=B.A(B.a([D.bJp,B.d(A.d.fh(D.aBo,new C.f37(q)).b,p,p,p,p,p,p,D.ftd,p,p,p)],o),A.l,p,A.e,A.j,0,p,p),m=B.cq(new C.f38(q)),l=q.yD("HIGHLIGHT BEHIND THE WORDS",A.a2W),k=q.p1?-1:q.k4
k=q.ajY(k,new C.f39(q),D.ddE)
w=q.p1
v=w?A.c:A.aT
n=B.a([n,A.W,m,l,B.bW(A.bH,B.a([k,B.az(p,B.q(p,D.bWt,A.f,p,p,new B.p(p,p,B.L(v,A.r,w?3:1),p,p,D.fmA,A.a6),p,34,p,p,p,p,p,34),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.f3c(q),p,p,p,p,p,p,!1,A.a4)],o),A.vQ,p,10,10),A.am,B.d("Add a coloured band behind the words, with any word design. The first circle turns it off.",p,p,p,p,p,p,D.KO,p,p,p)],o)
if(q.gaY6()!==0){m=B.a([],o)
if(q.p1){l=q.p2
l=q.ajz("Colour",l,0,360,new C.f3d(q),""+A.i.V(l)+"\xb0")
k=q.p3
A.d.v(m,B.a([l,q.ajz("Shade",k,0.15,0.9,new C.f3e(q),""+A.i.V(k*100))],o))}l=q.ok
m.push(q.kC("Strength",l,0.15,1,new C.f3f(q),1,""+A.i.V(l*100)+"%"))
A.d.v(n,B.a([A.W,q.wj(B.x(m,A.l,p,A.e,A.j,0,A.p))],o))}n.push(q.yD("LOOK",A.wP))
m=B.a([q.oz("Bold",I.apR,q.fy,new C.f3g(q)),q.oz("Italic",I.apS,q.go,new C.f3h(q))],o)
for(u=0;u<3;++u){l={}
k=D.d3u[u]
l.a=null
t=k.a
l.a=t
w=q.id===t
v=w?G.v5:p
w=w?p:A.c.j(0.07)
s=new B.aN(14,14)
r=new B.ay(q.id===l.a?A.L:A.bA,1,A.r,-1)
m.push(B.az(p,B.q(p,B.X(k.b,A.c,p,p,p,20),A.f,p,p,new B.p(w,p,new B.bH(r,r,r,r),new B.be(s,s,s,s),p,v,A.n),p,38,p,p,p,p,p,42),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.f3i(l,q),p,p,p,p,p,p,!1,A.a4))}n.push(B.bW(A.bH,m,A.vQ,p,8,8))
n.push(q.yD("COLOUR",A.mj))
n.push(q.ajY(q.fx,new C.f3j(q),D.dpN))
n.push(A.am)
n.push(B.d("The first circle keeps the colour that comes with the design.",p,p,p,p,p,p,D.KO,p,p,p))
n.push(q.yD("SIZE AND PLACE",A.HJ))
m=q.fr
m=q.kC("Text size",m,0.5,1.6,new C.f3a(q),1,""+A.i.V(m*100)+"%")
l=q.k1
n.push(q.wj(B.x(B.a([m,q.kC("Up / down",l,0.12,0.5,new C.f3b(q),0.3,""+A.i.V(l*100))],o),A.l,p,A.e,A.j,0,A.p)))
return B.x(n,A.E,p,A.e,A.j,0,A.p)},
cnJ(){var w,v,u,t,s,r=this,q=null,p=r.p4
if(p==null){w=B.m(22)
v=B.L(A.b8.j(0.6),A.r,1.6)
u=B.a([A.b8.j(0.18),A.bE.j(0.12)],x.O)
return B.az(q,B.q(q,B.x(B.a([B.q(q,D.c1a,A.f,q,q,D.b8w,q,62,q,q,q,q,q,62),A.aB,D.fKG,A.am,D.fPw],x.p),A.l,q,A.e,A.j,0,A.p),A.f,q,q,new B.p(D.uh,q,v,w,q,new B.a8(A.a7,A.aa,A.x,u,q,q),A.n),q,q,q,q,D.bF3,q,q,1/0),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.gb1Q(),q,q,q,q,q,q,!1,A.a4)}w=x.p
v=B.A(B.a([B.bw(B.m(12),new B.a5(46,62,B.fR(p,A.A,120,q,A.ck,A.c_,!1,q,!1,q,q),q),A.aq),A.bc,B.E(B.x(B.a([D.fKb,A.T,B.bW(A.bH,B.a([r.oz("Change",A.jL,!1,r.gb1Q()),r.oz("Remove",A.ej,!1,new C.f2M(r))],w),A.bs,q,6,6)],w),A.E,q,A.e,A.j,0,A.p),1)],w),A.l,q,A.e,A.j,0,q,q)
u=B.a([],w)
for(t=0;t<5;++t){s=D.dlS[t]
u.push(r.oz(s.b,s.a,r.at===t,new C.f2N(r,t)))}u=B.bW(A.bH,u,A.bs,q,8,8)
switch(r.at){case 0:s=r.c5G(p)
break
case 1:s=r.c4A()
break
case 2:s=r.bLa()
break
case 3:s=r.bRD()
break
default:s=r.bNh()
break}return B.x(B.a([v,A.ae,u,A.aB,s,A.W,new B.bL(A.a7,q,q,r.oz("Reset the whole picture",A.k8,!1,new C.f2O(r)),q)],w),A.E,q,A.e,A.j,0,A.p)},
c5G(d){var w=this,v=x.p
return B.x(B.a([B.bW(A.bH,B.a([w.oz("Auto enhance",E.a2A,!1,new C.f2E(w)),w.oz("Make words easy to read",A.pA,!1,new C.f2F(w))],v),A.bs,null,8,8),A.aB,B.cq(new C.f2G(w,d))],v),A.E,null,A.e,A.j,0,A.p)},
c4A(){var w,v,u,t,s,r,q,p,o=this,n=o.R8
n=o.kC("Exposure",n,-1.5,1.5,new C.f2i(o),0,A.i.ad(n,1))
w=o.RG
w=o.kC("Brightness",w,-0.5,0.5,new C.f2j(o),0,""+A.i.V(w*100))
v=o.rx
v=o.kC("Contrast",v,0.4,2,new C.f2k(o),1,""+A.i.V(v*100))
u=o.xr
u=o.kC("Fade",u,0,1,new C.f2l(o),0,""+A.i.V(u*100))
t=o.aL
t=o.kC("Spotlight",t,0,1,new C.f2m(o),0,""+A.i.V(t*100))
s=o.a0
s=o.kC("Darken",s,0,0.85,new C.f2n(o),0,""+A.i.V(s*100))
r=o.bb
r=o.kC("Vignette",r,0,0.9,new C.f2o(o),0,""+A.i.V(r*100))
q=o.aH
q=o.kC("Shade behind words",q,0,0.85,new C.f2p(o),0,""+A.i.V(q*100))
p=o.aR
return o.wj(B.x(B.a([n,w,v,u,t,s,r,q,o.kC("Shade top & bottom",p,0,0.85,new C.f2q(o),0,""+A.i.V(p*100))],x.p),A.l,null,A.e,A.j,0,A.p))},
bLa(){var w,v,u,t,s=this,r=null,q=s.ry
q=s.kC("Colour strength",q,0,2.2,new C.f1E(s),1,""+A.i.V(q*100))
w=s.to
w=s.kC("Warmth",w,-1,1,new C.f1F(s),0,""+A.i.V(w*100))
v=s.x1
v=s.kC("Tint",v,-1,1,new C.f1G(s),0,""+A.i.V(v*100))
u=s.x2
t=x.p
u=s.wj(B.x(B.a([q,w,v,s.kC("Shift colours",u,-180,180,new C.f1H(s),0,""+A.i.V(u)+"\xb0"),new B.bL(A.a7,r,r,s.oz("Negative",D.bRv,s.y1,new C.f1I(s)),r)],t),A.l,r,A.e,A.j,0,A.p))
v=s.yD("COLOUR WASH",A.Ps)
w=s.b8
q=B.a([null],x.Z)
A.d.v(q,D.aA0)
t=B.a([u,v,s.ajY(w,new C.f1J(s),q),A.T],t)
if(s.b8!=null){q=s.b6
t.push(s.wj(s.ajz("Wash strength",q,0,0.9,new C.f1K(s),""+A.i.V(q*100))))}return B.x(t,A.E,r,A.e,A.j,0,A.p)},
bRD(){var w,v,u,t,s,r=this,q=r.y2
q=r.kC("Blur",q,0,24,new C.f2c(r),0,A.o.u(A.i.V(q)))
w=r.bn
w=r.kC("Soft focus",w,0,1,new C.f2d(r),0,""+A.i.V(w*100))
v=r.aG
u=x.p
v=r.wj(B.x(B.a([q,w,r.kC("Film grain",v,0,1,new C.f2e(r),0,""+A.i.V(v*100))],u),A.l,null,A.e,A.j,0,A.p))
w=r.yD("LIGHT LEAK",D.bRd)
q=r.bf
t=B.a([null],x.Z)
s=x.S
A.d.v(t,B.cW(D.aA0,0,B.dB(8,"count",s),s))
u=B.a([v,w,r.ajY(q,new C.f2f(r),t),A.T],u)
if(r.bf!=null){q=r.bK
u.push(r.wj(r.ajz("Leak strength",q,0,1,new C.f2g(r),""+A.i.V(q*100))))}return B.x(u,A.E,null,A.e,A.j,0,A.p)},
bNh(){var w,v,u,t,s=this,r=s.aP
r=s.kC("Zoom",r,1,3,new C.f1O(s),1,""+A.i.V(r*100)+"%")
w=s.bm
w=s.kC("Left / right",w,-1,1,new C.f1P(s),0,""+A.i.V(w*100))
v=s.bH
v=s.kC("Up / down",v,-1,1,new C.f1Q(s),0,""+A.i.V(v*100))
u=s.c8
t=x.p
return B.x(B.a([s.wj(B.x(B.a([r,w,v,s.kC("Turn",u,-180,180,new C.f1R(s),0,""+A.i.V(u)+"\xb0")],t),A.l,null,A.e,A.j,0,A.p)),A.W,B.bW(A.bH,B.a([s.oz("Turn 90\xb0",H.aqX,!1,new C.f1S(s)),s.oz("Flip sideways",A.CT,s.c5,new C.f1T(s)),s.oz("Flip upside down",A.CT,s.cP,new C.f1U(s))],t),A.bs,null,8,8)],t),A.E,null,A.e,A.j,0,A.p)},
c8o(){var w=null,v=B.m(22),u=B.L(A.bA,A.r,1)
return B.q(w,B.x(B.a([D.f9H,A.W,D.fMd,A.aB,B.az(w,B.q(A.A,D.f9V,A.f,w,w,new B.p(w,w,w,B.m(16),w,G.v5,A.n),w,52,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.f2H(this),w,w,w,w,w,w,!1,A.a4)],x.p),A.E,w,A.e,A.j,0,A.p),A.f,w,w,new B.p(D.uh,w,u,v,w,w,A.n),w,w,w,w,A.bS,w,w,w)},
c5t(){var w,v,u,t,s,r,q,p=this,o=null,n=new C.f2z(p),m=x.p,l=B.A(B.a([D.bJv,p.oz("Reset",A.k8,!1,new C.f2v(p))],m),A.l,o,A.e,A.j,0,o,o),k=B.d("Drag it on the quote to move it. It stays on every quote.",o,o,o,o,o,o,D.KO,o,o,o),j=p.yD("SHAPE",A.aqS),i=B.a([],m)
for(w=0;w<7;++w){v={}
u=D.Dp[w]
v.a=null
t=v.a=u.a
if(t.length!==0){s=p.cx
i.push(p.b1R(n.$2(t,p.cy),62,u.b,s===t,new C.f2w(v,p),62))}}i=B.bW(A.bH,i,A.bs,o,8,8)
v=p.yD("RING",A.ps)
u=B.a([],m)
for(w=0;w<11;++w){s={}
r=D.Dj[w]
s.a=null
t=s.a=r.a
q=p.cy
u.push(p.b1R(n.$2(p.cx,t),62,r.b,q===t,new C.f2x(s,p),62))}u=B.bW(A.bH,u,A.bs,o,8,8)
s=p.CW
return B.x(B.a([l,A.aw,k,j,i,v,u,A.ae,p.wj(p.kC("Size",s,0.12,0.4,new C.f2y(p),0.22,""+A.i.V(s*100)))],m),A.E,o,A.e,A.j,0,A.p)},
b4Q(d){return new B.a5(null,d,new B.fH(0.5625,B.cq(new C.f2S(this)),null),null)},
cDZ(){var w,v,u,t,s,r,q=null,p=A.c.j(0.05),o=B.m(18),n=B.L(A.bA,A.r,1),m=x.p,l=B.a([],m)
for(w=0;w<6;++w){v=this.as===w
u=v?G.v5:q
t=new B.aN(14,14)
s=D.do9[w]
r=v?A.c:A.aD
r=B.X(s.a,r,q,q,q,19)
v=v?A.c:A.aD
l.push(new B.by(1,A.bb,B.az(A.c2,B.cT(q,B.x(B.a([r,A.cS,new B.qK(A.e7,A.A,A.f,B.d(s.b,q,q,q,q,q,q,new B.G(!0,v,q,q,q,q,10.5,A.I,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q),q,q,q),q)],m),A.l,q,A.e,A.P,0,A.p),q,q,A.b_,new B.p(q,q,q,new B.be(t,t,t,t),q,u,A.n),D.bAv,q,q,q,q,A.hJ,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.f30(this,w),q,q,q,q,q,q,!1,A.a4),q))}return B.q(q,B.A(l,A.l,q,A.e,A.j,0,q,q),A.f,q,q,new B.p(p,q,n,o,q,q,A.n),q,q,q,D.bCF,A.me,q,q,q)},
aSM(){var w,v,u=this,t=null,s=u.cDZ()
switch(u.as){case 0:w=u.bPk()
break
case 1:w=u.cJP()
break
case 2:w=u.cEL()
break
case 3:w=u.cnJ()
break
case 4:w=u.c5t()
break
default:w=u.c8o()
break}v=x.p
return B.bw(A.tW,B.e9(B.x(B.a([s,B.E(B.cl(B.a([w],v),t,t,D.bDR,t,t,A.ah,!1),1)],v),A.l,t,A.e,A.j,0,A.p),D.Zi,!0),A.aq)},
aOO(){var w,v,u,t,s=this,r=null,q=s.Q?r:s.gcdX(),p=B.m(16)
q=B.E(B.az(r,B.q(r,D.fa6,A.f,r,r,new B.p(A.c.j(0.08),r,B.L(A.aT,A.r,1),p,r,r,A.n),r,50,r,r,r,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,!1,A.a4),1)
p=s.Q?r:s.gbRb()
w=B.m(16)
v=B.a([new B.ab(0,A.G,A.bE.j(0.35),A.cC,16)],x.V)
u=x.p
t=B.a([],u)
if(s.Q)t.push(D.fg7)
else t.push(D.bVz)
t.push(A.af)
t.push(D.bM_)
return B.q(r,B.A(B.a([q,A.au,B.E(B.az(r,B.q(r,B.A(t,A.l,r,A.ba,A.j,0,r,r),A.f,r,r,new B.p(r,r,r,w,v,G.v5,A.n),r,50,r,r,r,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,p,r,r,r,r,r,r,!1,A.a4),1)],u),A.l,r,A.e,A.j,0,r,r),A.f,r,r,D.b7D,r,r,r,r,Av.a0n,r,r,r)},
b1P(){var w=null
return new B.D(U.a0V,B.A(B.a([B.aI(w,w,w,w,A.n3,w,w,w,new C.f2h(this),w,w,w,w,w,w),D.h18,A.b3,D.c3x],x.p),A.l,w,A.e,A.j,0,w,w),w)},
B(d){var w=null
return B.c4(w,A.C4,B.bm(!0,B.cq(new C.f3y(this)),!0,!1,A.ag,!0,!0),w,!1,!1,w,w)}}
C.bhX.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n=new B.e2()
n.cY(7)
w=e.a
v=e.b
u=A.i.V(w*v/55)
$.S()
t=B.K()
s=this.b
t.r=A.c.j(0.16*s).gp(0)
r=B.K()
r.r=A.w.j(0.2*s).gp(0)
for(q=0;q<u;++q){s=n.ai()*w
p=n.ai()*v
o=(q&1)===0?t:r
d.ar(new B.a1(s,p,s+1.1,p+1.1),o)}},
aD(d){return d.b!==this.b}}
C.rZ.prototype={
a7(){return"NgmyQuoteDeco."+this.b}}
C.mu.prototype={}
C.Af.prototype={
aj(){var w=this
return B.I(["at",w.a.aa().ag(),"outline",w.b,"extras",w.c,"request",w.d],x.N,x.z)}}
C.oa.prototype={}
C.wA.prototype={
a7(){return"NgmySlidesAiExtra."+this.b}}
C.a9l.prototype={}
C.asY.prototype={}
C.a1M.prototype={
S(){return new C.aJp(new B.au(A.ax,$.ax()),B.ka(!0,null,!0,!0,null,null,!1),D.dQd,B.a([],x.s),B.eA([D.Jo],x.Q))}}
C.aJp.prototype={
t(){var w=this.d
w.U$=$.ax()
w.P$=0
this.f.t()
this.a3()},
a1j(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$a1j=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hX().CL(90,700,700,A.eP),$async$a1j)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fq(),$async$a1j)
case 8:p=e
if(r.c!=null)r.m(new C.f9W(r,p,q))
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
return B.i($async$a1j,v)},
a1m(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a1m=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i=20-r.y.length
if(i<=0){w=1
break}t=4
n=i>1?i:null
w=7
return B.b(new B.hX().aJV(78,n,1100,1100),$async$a1m)
case 7:q=e
if(J.cs(q)){w=1
break}p=B.bq(r.y,!0,x.N)
n=J.aT(q)
case 8:if(!n.C()){w=9
break}o=n.gR(n)
if(J.ad(p)>=20){w=9
break}w=10
return B.b(o.fq(),$async$a1m)
case 10:m=e
l=o.b.toLowerCase()
if(A.a.c7(l,".png"))k="image/png"
else k=A.a.c7(l,".webp")?"image/webp":"image/jpeg"
J.c7(p,"data:"+k+";base64,"+A.cT.gcu().aN(m))
w=8
break
case 9:if(r.c!=null)r.m(new C.f9X(r,p))
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
return B.i($async$a1m,v)},
b6P(d){var w,v,u=null
if(d!=null&&A.a.q(d,","))try{w=B.fR(A.cM.aN(A.d.gan(d.split(","))),A.A,u,u,A.ck,A.c_,!0,u,!1,u,u)
return w}catch(v){}return D.byE},
c5A(d,e,f,g){var w=e.length===0&&f.length===0?"rounded":e
return B.czF(C.fPE(w,this.b6P(d),f),g)},
adL(d,e,f,g,h){var w=null,v=new C.f9U(f,e),u=new C.f9V(f,e),t=A.c.j(0.05),s=B.m(12),r=B.m(12),q=B.m(12),p=h==null,o=B.L(p?A.bA:A.b8.j(0.6),A.r,1)
if(p)p=new B.a5(34,30,new B.an(A.a0,w,A.ac,A.f,B.a([B.as(B.X(f?A.zo:A.Pg,A.bW,w,w,w,26),w,w,w),D.ezc],x.p),w),w)
else p=this.c5A(g,v.$1(h),u.$1(h),34)
return B.aH(!1,A.a3,!0,s,B.aP(!1,r,!0,B.q(w,B.A(B.a([B.E(B.as(p,w,w,w),1),D.bVg],x.p),A.l,w,A.e,A.j,0,w,w),A.f,w,w,new B.p(w,w,o,q,w,w,A.n),w,44,w,w,A.mZ,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.f9T(this,f,h,g,v,u,d),w,w,w,w,w,w,w),A.f,t,0,w,w,w,w,w,A.aj)},
aZZ(d,e,f,g,h){var w,v,u,t,s,r,q,p=null,o=null,n=h==null
if(!n&&A.a.q(h,","))try{o=B.bw(B.m(8),B.fR(A.cM.aN(A.d.gan(h.split(","))),A.A,p,p,A.ck,A.c_,!1,30,!1,p,30),A.aq)}catch(w){}v=A.c.j(0.05)
u=B.m(14)
t=B.m(14)
s=B.m(14)
r=B.L(n?A.bA:A.bd.j(0.6),A.r,1)
q=o
n=q==null?B.X(d,A.es,p,p,p,20):q
n=B.a([n,A.af,B.E(B.d(e,p,1,A.a2,p,p,p,A.KU,p,p,p),1)],x.p)
if(f!=null)n.push(B.az(p,H.Q0,A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,!1,A.a4))
return B.aH(!1,A.a3,!0,u,B.aP(!1,t,!0,B.q(p,B.A(n,A.l,p,A.e,A.j,0,p,p),A.f,p,p,new B.p(p,p,r,s,p,p,A.n),p,50,p,p,A.ky,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,g,p,p,p,p,p,p,p),A.f,v,0,p,p,p,p,p,A.aj)},
a9P(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$a9P=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(C.fT8(),$async$a9P)
case 7:q=e
if(q==null||r.c==null){w=1
break}r.m(new C.f9C(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
p=B.ac(n)
if(r.c!=null)r.m(new C.f9D(r,p))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a9P,v)},
afL(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$afL=B.e(function(d,a0){if(d===1){s.push(a0)
w=t}for(;;)switch(w){case 0:f=A.a.i(r.d.a.a)
if(f.length<6&&r.e==null){r.m(new C.f9F(r))
w=1
break}if(r.x==null){m=B.ag("\\blogo\\b",!1,!1,!1,!1)
m=m.b.test(f)}else m=!1
if(m){r.m(new C.f9G(r))
w=1
break}m=r.e
l=m==null?null:m.c
if(l==null)l=""
q=l.length===0?f:f+"\n\nSOURCE DOCUMENT ("+m.a+"):\n"+l
r.m(new C.f9H(r))
t=4
m=r.ch
k=r.CW
j=r.x
i=r.y
p=B.a([],x.aD)
h=r.e
if((h==null?null:h.b)!=null){h=h.b
h.toString
J.c7(p,h)}w=7
return B.b(C.fOm(q,r.cx,j,new C.b3y(r.z,r.Q,r.as,r.at),new C.f9I(r),i,m,p,k),$async$afL)
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
if(p!=null)B.a6(p,!1).O(o)
t=2
w=6
break
case 4:t=3
e=s.pop()
n=B.ac(e)
if(r.c!=null)r.m(new C.f9J(r,n))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$afL,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=x.w,f=B.aF(d,A.eS,g).w
g=B.aF(d,A.c1,g).w
w=B.as(B.q(h,h,A.f,h,h,new B.p(A.aT,h,h,B.m(99),h,h,A.n),h,4,h,h,h,h,h,40),h,h,h)
v=x.V
u=B.as(B.az(h,B.q(h,D.bYA,A.f,h,h,new B.p(h,h,B.L(A.c.j(0.35),A.r,2),h,B.a([new B.ab(2,A.G,A.bd.j(0.5),A.J,24)],v),D.c7I,A.a6),h,84,h,h,h,h,h,84),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.fa9(i),h,h,h,h,h,h,!1,A.a4),h,h,h)
t=x.p
s=B.a([],t)
if(i.e!=null)s.push(B.aI(h,h,h,h,H.Q0,h,h,h,i.ax?h:new C.faa(i),h,h,h,h,"Remove document",h))
r=i.e
r=r==null?"Attach a PDF, Word or text file":r.a
q=i.ax?h:i.gbG3()
v=B.a([new B.ab(0,A.G,A.b8.j(0.45),A.J,10)],v)
s.push(B.h6(B.aH(!1,A.a3,!0,h,B.aP(!1,h,!0,B.q(h,B.X(i.e==null?A.wE:A.hN,A.c,h,h,h,20),A.f,h,h,new B.p(h,h,h,h,v,E.wW,A.a6),h,40,h,h,h,h,h,40),A.cV,!0,h,h,h,h,h,h,h,h,h,h,h,q,h,h,h,h,h,h,h),A.f,A.L,0,h,h,A.cV,h,h,A.aj),h,r,h,h))
v=B.A(s,A.l,h,A.e,A.P,0,h,h)
s=A.c.j(0.05)
v=B.aM(h,A.Z,!1,h,!0,A.t,h,B.aO(),i.d,h,h,h,h,h,2,B.bz(h,h,h,h,h,h,h,h,!0,new B.b6(4,B.m(16),new B.ay(A.c.j(0.1),1,A.r,-1)),h,h,h,h,h,s,!0,h,h,h,h,new B.b6(4,B.m(16),D.b56),h,h,h,h,h,h,h,h,Z.EG,"Type your idea here\u2026",h,h,h,h,h,h,h,h,h,!0,!0,!1,h,h,h,h,h,h,h,h,new B.D(A.iP,v,h),h,h,h,h,h),A.y,!0,h,!0,h,!1,i.f,A.ak,h,h,h,h,h,h,h,h,h,6,3,h,!1,"\u2022",h,h,h,h,h,!1,h,h,!1,h,!0,h,A.ad,h,h,h,h,h,h,h,h,h,h,h,D.aW_,!0,A.a5,h,A.ao,h,h,h,h)
s=i.x
r=s==null
q=r?"Add your logo":"Logo added"
r=r?h:new C.fab(i)
s=i.aZZ(A.lm,q,r,i.gcoa(),s)
r=i.z
r=B.E(i.adL(new C.fad(i),i.Q,!1,i.x,r),1)
q=i.Q
q=B.E(B.x(B.a([s,A.am,B.A(B.a([r,A.bo,B.E(i.adL(new C.fae(i),i.z,!0,i.x,q),1)],t),A.l,h,A.e,A.j,0,h,h)],t),A.l,h,A.e,A.j,0,A.p),1)
s=i.y
r=s.length
p=r===0
if(p)r="Add your pictures"
else{o=r===1?"":"s"
o=""+r+" picture"+o
r=o}s=p?h:A.d.gH(s)
p=i.y.length===0?h:new C.faf(i)
s=i.aZZ(A.uK,r,p,i.gcoi(),s)
p=i.as
r=i.at
o=i.y
o=o.length===0?h:A.d.gH(o)
p=B.E(i.adL(new C.fag(i),r,!1,o,p),1)
o=i.at
r=i.as
n=i.y
n=n.length===0?h:A.d.gH(n)
o=B.a([w,A.aB,D.fQP,A.aw,D.fTK,A.bz,u,A.T,D.fS7,A.aB,v,A.bz,B.A(B.a([q,A.au,B.E(B.x(B.a([s,A.am,B.A(B.a([p,A.bo,B.E(i.adL(new C.fah(i),r,!0,n,o),1)],t),A.l,h,A.e,A.j,0,h,h)],t),A.l,h,A.e,A.j,0,A.p),1)],t),A.E,h,A.e,A.j,0,h,h),A.am,D.fVE],t)
w=i.w.a
if(w.length!==0){v=B.m(999)
u=B.L(D.bq4,A.r,1)
w=C.aig(w)
w=w==null?h:w.b
A.d.v(o,B.a([A.W,new B.bL(A.a7,h,h,B.q(h,B.A(B.a([D.bZI,A.bo,B.d("Ending: "+(w==null?"":w),h,h,h,h,h,h,D.fzb,h,h,h),B.aP(!1,h,!0,D.etd,h,!0,h,h,h,h,h,h,h,h,h,h,h,new C.fai(i),h,h,h,h,h,h,h)],t),A.l,h,A.e,A.P,0,h,h),A.f,h,h,new B.p(D.bhR,h,u,v,h,h,A.n),h,h,h,h,D.bCi,h,h,h),h)],t))}o.push(A.bz)
o.push(D.fHi)
o.push(A.T)
w=B.a([],t)
for(m=0;m<6;++m){l=D.dfS[m]
v=i.ch===l?A.b8:A.c.j(0.06)
u=i.ch===l
k=new B.ay(u?A.aD:A.bA,1,A.r,-1)
u=u?A.u:A.U
w.push(new B.by(1,A.bb,new B.D(A.jq,B.az(h,B.cT(A.A,B.d(""+l,h,h,h,h,h,h,new B.G(!0,A.c,h,h,h,h,h,u,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h),h,h,h),h,h,A.b_,new B.p(v,h,new B.bH(k,k,k,k),h,h,h,A.a6),A.eG,h,42,h,h,h,h,h,h),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.faj(i,l),h,h,h,h,h,h,!1,A.a4),h),h))}o.push(B.A(w,A.l,h,A.e,A.j,0,h,h))
o.push(A.bz)
o.push(D.h_n)
o.push(A.T)
o.push(B.cq(new C.fak(i)))
o.push(A.bz)
o.push(D.fOS)
o.push(A.T)
w=B.a([i.b9L("auto","Let AI choose",A.ed,A.S5)],t)
for(v=x.O,m=0;m<11;++m){j=D.x_[m]
u=j.d
w.push(i.b9L(j.a,j.b,j.c,B.a([B.b0(A.d.gH(u).a),B.b0(A.d.gH(u).b)],v)))}o.push(B.bW(A.bH,w,A.bs,h,8,8))
o.push(A.aO)
w=A.c.j(0.04)
v=B.m(16)
u=B.L(i.r?A.bd.j(0.5):A.bA,A.r,1)
o.push(B.q(h,B.iQ(h,A.bd,h,h,h,new C.fac(i),D.bUJ,D.fZC,h,D.fJF,i.r),A.f,h,h,new B.p(w,h,u,v,h,h,A.n),h,h,h,h,h,h,h,h))
w=i.cy
if(w!=null)A.d.v(o,B.a([A.aB,B.d(w,h,h,h,h,h,h,D.aV9,h,h,h)],t))
o.push(A.bz)
w=i.ax?h:i.gce0()
v=B.ft(h,h,A.b8,A.b8.j(0.5),h,h,h,h,h,A.c,h,h,h,h,new B.b9(B.m(18),A.a1),h,h,h,h,h)
u=i.ax
t=u?D.ffY:A.HW
o.push(new B.a5(h,54,B.lS(t,B.d(u?i.ay:"Create my presentation",h,h,h,h,h,h,A.nf,h,h,h),w,v),h))
return new B.D(new B.R(0,0,0,f.f.d),B.q(h,B.bm(!0,B.ce(B.x(o,A.al,h,A.e,A.j,0,A.p),A.t,h,A.y,h,A.wr,h,h,A.ah),!0,!1,A.ag,!0,!1),A.f,h,new B.aY(0,680,0,g.a.b*0.92),D.aeE,h,h,h,h,h,h,h,h),h)},
bSV(d){var w,v,u,t,s,r,q=null,p=this.cx.q(0,d),o=new C.f9K(this,p,d)
if(d===D.E3)return new C.aFW(p,o,q)
w=B.m(16)
v=p?E.wW:q
u=p?q:A.c.j(0.05)
t=B.L(p?A.aD:A.bA,A.r,1)
s=B.X(p?A.ee:C.hY2(d),A.c,q,q,q,20)
r=C.hY3(d)
return B.az(q,B.cT(q,B.x(B.a([s,A.aw,B.ev(A.A,B.d(r,q,q,q,q,q,q,B.l(q,q,A.c,q,q,q,q,q,q,q,q,12,q,q,p?A.u:A.a8,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),A.f,A.e7)],x.p),A.l,q,A.ba,A.j,0,A.p),q,q,A.b_,new B.p(u,q,t,w,q,v,A.n),A.h3,q,64,q,q,A.hL,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,o,q,q,q,q,q,q,!1,A.a4)},
b9L(d,e,f,g){var w,v=null,u=this.CW===d,t=B.m(99),s=u?A.c.j(0.12):A.c.j(0.04),r=u?A.ab:A.bA
r=B.L(r,A.r,u?1.6:1)
w=B.q(v,B.X(f,A.c,v,v,v,14),A.f,v,v,new B.p(v,v,v,v,v,new B.a8(A.a7,A.aa,A.x,g,v,v),A.a6),v,26,v,v,v,v,v,26)
return B.az(v,B.cT(v,B.A(B.a([w,A_.AH,B.d(e,v,v,v,v,v,v,B.l(v,v,A.c,v,v,v,v,v,v,v,v,12.5,v,v,u?A.u:A.a8,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.l,v,A.e,A.P,0,v,v),v,v,A.b_,new B.p(s,v,r,t,v,v,A.n),A.eG,v,v,v,v,O.an8,v,v,v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.f9Z(this,d),v,v,v,v,v,v,!1,A.a4)}}
C.a1L.prototype={
S(){return new C.aJo(new B.au(A.ax,$.ax()))}}
C.aJo.prototype={
t(){var w=this.d
w.U$=$.ax()
w.P$=0
this.a3()},
afM(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$afM=B.e(function(a2,a3){if(a2===1){s.push(a3)
w=t}for(;;)switch(w){case 0:a0=A.a.i(r.d.a.a)
if(J.ad(a0)<3){r.m(new C.f9v(r))
w=1
break}B.eY()
r.m(new C.f9w(r))
t=4
q=C.ipA(a0)
if(q!=null){k=r.a
j=k.c
k=k.d
i=B.ag("\\b(all|every|whole|entire)\\b.{0,30}\\b(slides?|presentation|deck|pages?)\\b|\\b(slides?|presentation|deck)\\b.{0,20}\\b(all|every|whole|entire)\\b",!0,!1,!1,!1)
h=a0.toLowerCase()
p=C.ipk(j,k-1,q,i.b.test(h))
if(!p){r.m(new C.f9x(r,q))
w=1
break}k=r.c
if(k!=null)B.a6(k,!1).O(r.a.c)
w=1
break}g=a0.toLowerCase()
k=B.ag("\\b(undo|un-do|bring (it |them |the .{0,30}?)?back|brings? back|put (it |them |the .{0,30}?)?back|restore|revert|go back|change (it|that|them) back|back the way|what it was|the way it was|previous version|before (you|the ai) (changed|change))\\b",!0,!1,!1,!1)
if(k.b.test(g)){k=r.a.c
C.heh()
f=$.Dq.h(0,k.a)
o=f==null||J.cs(f)?null:J.fs(f)
if(o==null){r.m(new C.f9y(r))
w=1
break}n=C.ipi(o,r.a.c)
C.ipe(r.a.c.a)
$.hdu=!0
k=r.c
if(k!=null)B.a6(k,!1).O(n)
w=1
break}k=r.a
j=k.c
i=j.CW
if(i==null)i=""
k=k.d
j=C.hhg(j)
h=C.hhh(r.a.c)
e=C.hhi(r.a.c)
w=7
return B.b(C.bF2(k,r.a.c.a,j,h,new C.f9z(r),i,e,a0),$async$afM)
case 7:m=a3
k=r.c
if(k!=null)B.a6(k,!1).O(m)
t=2
w=6
break
case 4:t=3
a1=s.pop()
l=B.ac(a1)
if(r.c!=null)r.m(new C.f9A(r,l))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$afM,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=x.w,h=B.aF(d,A.eS,i).w
i=B.aF(d,A.c1,i).w
w=B.as(B.q(j,j,A.f,j,j,new B.p(A.aT,j,j,B.m(99),j,j,A.n),j,4,j,j,j,j,j,40),j,j,j)
v=x.p
u=B.A(B.a([B.q(j,D.ard,A.f,j,j,D.b7i,j,34,j,j,j,j,j,34),A.au,D.bK9],v),A.l,j,A.e,A.j,0,j,j)
t=B.d("You're on slide "+k.a.d+". Ask for new slides, changes to any slide, a different style or another language.",j,j,j,j,j,j,Z.ab6,j,j,j)
s=A.c.j(0.05)
s=B.aM(j,A.Z,!0,j,!0,A.t,j,B.aO(),k.d,j,j,j,j,j,2,B.bz(j,j,j,j,j,j,j,j,!0,new B.b6(4,B.m(16),new B.ay(A.c.j(0.1),1,A.r,-1)),j,j,j,j,j,s,!0,j,j,j,j,new B.b6(4,B.m(16),Aw.ae4),j,j,j,j,j,j,j,j,Z.EG,"e.g. Add a slide after this one about how to sign up, and make the title slide more exciting.",j,j,j,j,j,j,j,j,j,!0,!0,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j),A.y,!0,j,!0,j,!1,j,A.ak,j,j,j,j,j,j,j,j,j,5,2,j,!1,"\u2022",j,j,j,j,j,!1,j,j,!1,j,!0,j,A.ad,j,j,j,j,j,j,j,j,j,j,j,D.aW_,!0,A.a5,j,A.ao,j,j,j,j)
r=B.a([],v)
for(q=0;q<6;++q){p=D.dbV[q]
o=B.d(p,j,j,j,j,j,j,AC.Vr,j,j,j)
n=A.c.j(0.06)
r.push(B.n3(j,n,o,j,k.e?j:new C.f9B(k,p),j,j,P.vW,j))}w=B.a([w,A.aB,u,A.am,t,A.aB,s,A.W,B.bW(A.bH,r,A.bs,j,8,8)],v)
u=k.r
if(u!=null)A.d.v(w,B.a([A.ae,B.d(u,j,j,j,j,j,j,D.aV9,j,j,j)],v))
w.push(A.aO)
u=k.e
t=u?j:k.gce1()
s=B.m(18)
r=B.m(18)
u=u?B.a([A.bd.j(0.5),A.er.j(0.5)],x.O):D.cJx
o=B.a([new B.ab(0,A.G,A.bd.j(0.35),A.cC,16)],x.V)
n=A.c.j(0.22)
m=k.e
l=m?D.et9:D.bZh
n=B.q(j,l,A.f,j,j,new B.p(n,j,j,j,j,j,A.a6),j,30,j,j,j,j,j,30)
w.push(B.aH(!1,A.a3,!0,j,B.aP(!1,s,!0,B.ez(B.A(B.a([n,A.au,B.d(m?k.f:"Make the change",j,j,j,j,j,j,A.hq,j,j,j)],v),A.l,j,A.ba,A.j,0,j,j),j,new B.p(j,j,j,r,o,new B.a8(A.a7,A.aa,A.x,u,j,j),A.n),54,j,j),j,!0,j,j,j,j,j,j,j,j,j,j,j,t,j,j,j,j,j,j,j),A.f,A.L,0,j,j,j,j,j,A.aj))
return new B.D(new B.R(0,0,0,h.f.d),B.q(j,B.bm(!0,B.ce(B.x(w,A.al,j,A.e,A.j,0,A.p),A.t,j,A.y,j,A.wr,j,j,A.ah),!0,!1,A.ag,!0,!1),A.f,j,new B.aY(0,680,0,i.a.b*0.85),D.aeE,j,j,j,j,j,j,j,j),j)}}
C.b3y.prototype={}
C.aFW.prototype={
S(){return new C.bmL(null,null)}}
C.bmL.prototype={
gazD(){var w,v=this,u=v.d
if(u===$){w=B.bl(null,A.qy,null,1,null,v)
w.cL(0)
v.d!==$&&B.bE()
v.d=w
u=w}return u},
t(){this.gazD().t()
this.bzP()},
B(d){var w=null,v=this.a.d
return B.az(w,B.c5(this.gazD(),new C.eqf(this),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,!1,A.a4)}}
C.bkd.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o
for(w=this.b*2,v=e.a,u=e.b,t=0;t<7;++t){s=0.5+0.5*Math.sin(w+t*1.7)
r=D.dim[t]
q=r.a*v
r=r.b*u
$.S()
p=new B.ao(A.O,A.M,A.R,A.S,A.Q)
p.r=D.yq.j(0.25+s*0.6).gp(0)
d.N(new B.o(q,r),1+s*1.4,p)
if(s>0.85){o=4*(s-0.85)/0.15
p.c=1
d.ah(new B.o(q-o,r),new B.o(q+o,r+0),p)
d.ah(new B.o(q,r-o),new B.o(q+0,r+o),p)}}},
aD(d){return d.b!==this.b}}
C.atv.prototype={
a7(){return"NgmyTextCommand."+this.b}}
C.a09.prototype={
S(){return new C.aDr()}}
C.aDr.prototype={
gajV(){var w,v="colorful",u=this.d
if(u===$){w=this.a.c.CW
w=C.ait(w==null?"":w,v)
u=w==null?null:w.b
u=this.d=u==null?v:u}return u},
gAQ(){var w=this.e
return w===$?this.e=C.hhg(this.a.c).q(0,D.E3):w},
a9C(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$a9C=B.e(function(a0,a1){if(a0===1){t.push(a1)
w=u}for(;;)switch(w){case 0:s.m(new C.dt2(s))
u=3
r=A.d.fh(D.x_,new C.dt3(s))
q=B.d2(C.hhg(s.a.c),x.Q)
l=q
J.h9(l,D.E3)
p=l
if(s.gAQ())J.c7(p,D.E3)
q=s.a.c.CW
if(q==null)q=""
k=r.a
j=s.gAQ()?" with Luxury FX":""
i=s.a
h=i.d
i=C.hhh(i.c)
g=C.hhi(s.a.c)
w=6
return B.b(C.bF2(h,s.a.c.a,p,i,null,q,g,'Change the look: use the style "'+k+'"'+j+". Keep every word, slide, bullet, picture and the logo exactly as they are."),$async$a9C)
case 6:o=a1
j=o.CW
q=j==null?"":j
q=C.ait(q,s.gajV())
f=q==null?null:q.b
n=f==null?s.gajV():f
if(!J.z(n,r.a)&&!s.gAQ())throw B.W("The AI did not change the look. Try again.")
q=s.c
if(q!=null)B.a6(q,!1).O(o)
u=1
w=5
break
case 3:u=2
d=t.pop()
m=B.ac(d)
if(s.c!=null)s.m(new C.dt4(s,m))
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$a9C,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=B.P(d).ax.a===A.H,l=m?A.c:A.a_,k=m?A.aR:A.an,j=m?A.a_:A.c,i=B.m(28),h=B.L(m?A.bA:A.bl,A.r,1),g=x.p,f=B.E(B.x(B.a([B.d("Look and feel",n,n,n,n,n,n,B.l(n,n,l,n,n,n,n,n,n,n,n,20,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),A.bG,B.d("Your words, pictures and logo stay the same.",n,n,n,n,n,n,B.l(n,n,k,n,n,n,n,n,n,n,n,12.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],g),A.E,n,A.e,A.j,0,A.p),1),e=o.f?n:new C.dt7(d)
e=B.A(B.a([f,B.aI(n,n,n,n,B.X(A.cB,k,n,n,n,n),n,n,n,e,n,n,n,n,n,n)],g),A.l,n,A.e,A.j,0,n,n)
f=B.a([],g)
for(w=0;w<11;++w){v=D.x_[w]
u=o.gajV()
t=o.f?n:new C.dt8(o,v)
f.push(new C.bvs(v,u===v.a,t,n))}f=B.kW(1.25,f,3,10,10,n,A.dZ,!0)
u=B.m(18)
t=o.gAQ()?D.car:n
if(o.gAQ())s=n
else s=m?A.br:A.cd
r=B.X(A.ed,o.gAQ()?A.c:k,n,n,n,n)
q=B.d("Luxury FX",n,n,n,n,n,n,B.l(n,n,o.gAQ()?A.c:l,n,n,n,n,n,n,n,n,n,n,n,A.I,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
q=B.E(B.x(B.a([q,B.d("Moving light and ornaments, a new royal look each time",n,n,n,n,n,n,B.l(n,n,o.gAQ()?A.ab:k,n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],g),A.E,n,A.e,A.j,0,A.p),1)
p=o.gAQ()
f=B.a([f,A.aB,B.q(n,B.A(B.a([r,A.au,q,B.b9c(n,A.c,n,A.bL,!1,A.y,n,n,n,n,n,n,o.f?n:new C.dt9(o),n,n,n,n,n,n,n,n,p)],g),A.l,n,A.e,A.j,0,n,n),A.f,n,n,new B.p(s,n,n,u,n,t,A.n),n,n,n,n,Q.alO,n,n,n)],g)
u=o.r
if(u!=null)A.d.v(f,B.a([A.W,B.d(u,n,n,n,n,n,n,D.fzv,n,n,n)],g))
f=B.ce(B.x(f,A.E,n,A.e,A.j,0,A.p),A.t,n,A.y,n,A.GT,n,n,A.ah)
u=o.f?n:o.gbF2()
t=B.bp(A.L,n,n,n,n,n,A.ag,n,new B.b9(B.m(16),A.a1),n,n,n)
s=B.m(16)
return B.bm(!0,B.q(n,B.x(B.a([new B.D(D.bFx,e,n),new B.dm(1,A.co,f,n),new B.D(A.GS,new B.a5(1/0,50,B.bJ(B.ez(B.as(o.f?A.tG:D.fRk,n,n,n),n,new B.p(n,n,n,s,n,D.c90,A.n),n,n,n),n,u,t),n),n)],g),A.l,n,A.e,A.P,0,A.p),A.f,n,n,new B.p(j,n,h,i,n,n,A.n),n,n,n,A.ux,n,n,n,n),!0,!1,A.ag,!0,!0)}}
C.bvs.prototype={
B(d){var w=null,v=this.c,u=A.d.gH(v.d),t=B.m(16),s=u.a,r=B.a([B.b0(s),B.b0(u.b)],x.O),q=this.d,p=B.L(q?A.c:A.L,A.r,2.5)
s=q?B.a([new B.ab(0,A.G,B.b0(s).j(0.5),A.J,12)],x.V):w
v=B.a([new B.bL(A.ly,w,w,B.X(v.c,A.ab,w,w,w,18),w),new B.bL(A.lz,w,w,B.d(v.b,w,w,w,w,w,w,D.fzs,w,w,w),w)],x.p)
if(q)v.push(D.b2g)
return B.az(w,B.cT(w,new B.an(A.a0,w,A.ac,A.t,v,w),w,w,A.b_,new B.p(w,w,p,t,s,new B.a8(A.aA,A.aF,A.x,r,w,w),A.n),A.eG,w,w,w,w,A.cn,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,this.e,w,w,w,w,w,w,!1,A.a4)}}
C.eqc.prototype={
aHq(d,e,f){return e+"@"+A.a.b_(A.o.ft(f==null?this.a.c:f,16),8,"0").toUpperCase()},
xg(d,e){return this.aHq(0,e,null)}}
C.aO3.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.b3u.prototype={
B(d){var w,v,u=null,t=C.hg5(this.c)
if(t==null)w=D.bx6
else{w=B.aF(d,u,x.w).w.cP5(D.bBO,D.ff7)
v=this.d
w=B.q9(new B.du(!v,B.apF(!1,t,!1,v,!1,390),u),w)}return B.ev(A.A,new B.a5(416,870,new C.bol(w,u),u),A.f,A.dE)}}
C.bol.prototype={
B(d){var w,v,u,t=null,s=B.a([],x.p)
for(w=0;w<3;++w){v=D.dve[w]
u=new B.aN(3,3)
s.push(new B.cK(v.a,v.b,t,t,t,t,B.q(t,t,A.f,t,t,new B.p(t,t,t,new B.be(u,u,u,u),t,D.atc,A.n),t,v.c,t,t,t,t,t,5),t))}for(w=0;w<2;++w){v=D.dwE[w]
u=new B.aN(3,3)
s.push(new B.cK(t,v.a,-3,t,t,t,B.q(t,t,A.f,t,t,new B.p(t,t,t,new B.be(u,u,u,u),t,D.atc,A.n),t,v.b,t,t,t,t,t,5),t))}s.push(B.bS(0,new B.bN(new B.p(t,t,t,B.m(64),D.d0J,D.c7q,A.n),A.bj,t,t),0,0,0))
s.push(B.bS(3,new B.bN(new B.p(A.w,t,t,B.m(61),t,t,A.n),A.bj,t,t),3,3,3))
s.push(B.bS(13,B.bw(B.m(51),B.e9(this.c,A.w,!0),A.aq),13,13,13))
u=B.m(20)
s.push(B.ap(t,B.as(B.q(D.b2r,B.q(t,t,A.f,t,t,D.b7B,t,11,t,t,t,t,t,11),A.f,t,t,new B.p(A.w,t,t,u,t,t,A.n),t,36,t,t,t,t,t,122),t,t,t),t,t,0,0,25,t))
s.push(B.bS(13,new B.du(!0,B.bw(B.m(51),D.byL,A.aq),t),13,13,13))
s.push(B.ap(22,new B.du(!0,B.as(B.q(t,t,A.f,t,t,new B.p(A.ab,t,t,B.m(3),t,t,A.n),t,5,t,t,t,t,t,134),t,t,t),t),t,t,0,0,t,t))
return new B.an(A.a0,t,A.ac,A.f,s,t)}}
C.lu.prototype={
oL(){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=4280640491,j=4280172719,i=4294967295,h="Thank You",g=C.cE(),f=C.cE(),e=m.r
f=C.er(A.K,!1,e.l(),A.aH,"",k,42,A.bt,A.u,"",0.22,f,l,"","",0,!1,"",0,D.bm,j,2,"Your Presentation Title",0,0,"",D.n9,D.d_,0.84,0.08,0.26)
w=C.cE()
v=m.w
w=C.er(A.K,!1,v.l(),A.aH,"",k,20,A.bt,A.a8,"",0.12,w,l,"","",0,!1,"",0,D.bm,j,2,"Class \xb7 Subject \xb7 Date",0,0,"",D.ds,D.d_,0.76,0.12,0.56)
u=C.cE()
t=m.d
s=x.u
t=C.t_(i,l,0,0,B.a([f,w,C.er(A.bp,!1,4279310375,A.aH,"",t.j(0.8).l(),24,A.bt,A.a8,"",0.006,u,l,"","",0,!1,"",0,D.fO,t.l(),3,"",0,0,"",D.ct,D.fi,0.3,0.35,0.72)],s),C.cE(),D.n8,"","","Welcome",D.ds)
u=C.cE()
u=C.er(A.bp,!1,e.l(),A.aH,"",k,34,A.bt,A.u,"",0.14,u,l,"","",0,!1,"",0,D.bm,j,2,"Agenda",0,0,"",D.ct,D.d_,0.84,0.08,0.08)
w=C.cE()
w=C.t_(i,l,0,0,B.a([u,C.er(A.bp,!0,v.l(),A.aH,"",k,22,A.bt,A.a8,"",0.6,w,l,"","",0,!1,"",0,D.bm,j,2,"1. Introduction\n2. Core concepts\n3. Case study\n4. Discussion\n5. Summary & Q&A",0,0,"",D.vm,D.d_,0.8,0.1,0.26)],s),C.cE(),D.n8,"","","Agenda",D.ds)
u=C.cE()
u=C.er(A.bp,!1,e.l(),A.aH,"",k,32,A.bt,A.u,"",0.14,u,l,"","",0,!1,"",0,D.bm,j,2,"Main Idea",0,0,"",D.ct,D.d_,0.84,0.08,0.08)
f=C.cE()
f=C.t_(i,l,0,0,B.a([u,C.er(A.bp,!0,v.l(),A.aH,"",k,21,A.bt,A.a8,"",0.62,f,l,"","",0,!1,"",0,D.bm,j,2,"\u2022 Supporting detail\n\u2022 Evidence or example\n\u2022 Why it matters",0,0,"",D.ct,D.d_,0.8,0.1,0.26)],s),C.cE(),D.n8,"","","Key Point 1",D.ds)
u=C.cE()
u=C.er(A.bp,!1,e.l(),A.aH,"",k,30,A.bt,A.u,"",0.12,u,l,"","",0,!1,"",0,D.bm,j,2,"Compare & Contrast",0,0,"",D.ct,D.d_,0.84,0.08,0.08)
r=C.cE()
r=C.er(A.bp,!0,v.l(),A.aH,"",k,18,A.bt,A.a8,"",0.62,r,l,"","",0,!1,"",0,D.bm,j,2,"Option A\n\n\u2022 Strength\n\u2022 Example",0,0,"",D.ct,D.d_,0.4,0.08,0.24)
q=C.cE()
q=C.t_(i,l,0,0,B.a([u,r,C.er(A.bp,!0,v.l(),A.aH,"",k,18,A.bt,A.a8,"",0.62,q,l,"","",0,!1,"",0,D.bm,j,2,"Option B\n\n\u2022 Strength\n\u2022 Example",0,0,"",D.ct,D.d_,0.4,0.52,0.24)],s),C.cE(),D.n8,"","","Key Point 2",D.ds)
r=C.cE()
r=C.er(A.K,!1,e.l(),A.aH,"",k,48,A.bt,A.u,"",0.2,r,l,"","",0,!1,"",0,D.bm,j,2,h,0,0,"",D.ds,D.d_,0.8,0.1,0.32)
e=C.cE()
p=C.Cr(l,l,l,l,D.E_,5,!1,l,l,l,l,l,g,l,!1,l,m.b,l,l,B.a([t,w,f,q,C.t_(i,l,0,0,B.a([r,C.er(A.K,!1,v.l(),A.aH,"",k,22,A.bt,A.a8,"",0.1,e,l,"","",0,!1,"",0,D.bm,j,2,"Questions?",0,0,"",D.ct,D.d_,0.7,0.15,0.58)],s),C.cE(),D.n8,"","",h,D.ds)],x.g),"class_"+m.a,l,!1,l)
for(g=p.r,f=g.length,e=m.e,w=m.f,o=0;o<g.length;g.length===f||(0,B.J)(g),++o){n=g[o]
n.e=e.l()
n.f=w.l()}return p}}
C.Fx.prototype={
ak(d){return this.e.$1(d)}}
C.ew.prototype={}
C.jb.prototype={}
C.Fo.prototype={
gaNq(){var w=this.c
if(!(A.a.i(w).length!==0)){w=C.aig(this.a)
w=w==null?null:w.c
if(w==null)w=""}return w},
a4K(d,e,f,g){var w=this,v=e==null?w.a:e,u=g==null?w.b:g,t=f==null?w.c:f
return new C.Fo(v,u,t,d==null?w.d:d)},
Gf(d){return this.a4K(null,d,null,null)},
aG4(d){return this.a4K(null,null,null,d)},
cP3(d,e){return this.a4K(d,e,null,null)},
bf5(d){return this.a4K(d,null,null,null)},
bfb(d){return this.a4K(null,null,d,null)}}
C.Op.prototype={
S(){return new C.bm6(new B.eB(0,$.ax()),null,null)}}
C.bm6.prototype={
Y(){var w,v=this
v.a4()
w=v.q1(new C.e3H(v))
v.e!==$&&B.aQ()
v.e=w
if(v.a.e)w.fX(0)
else v.d.sp(0,3.2)},
t(){var w=this.e
w===$&&B.c()
w.t()
w=this.d
w.U$=$.ax()
w.P$=0
this.bzi()},
B(d){var w=C.aig(this.a.c.a)
if(w==null)w=A.d.gH(D.If)
return B.cq(new C.e3G(this,w,C.hwH(this.a.c.d)))}}
C.btZ.prototype={
B(d){return B.of(A.Xr,this.e,new C.f8I(this,A.i.F(this.d*0.35,1.6)-0.3))}}
C.bh1.prototype={
a5(d,e){var w=this,v=w.c.a
switch(w.b){case"fireworks":w.aVr(d,e,v)
break
case"confetti":w.bLE(d,e,v)
break
case"crown":w.bNi(d,e,v)
break
case"aurora":w.bG7(d,e,v)
break
case"champagne":w.bJw(d,e,v)
break
case"diamonds":w.bPt(d,e,v)
break
case"starburst":w.cBB(d,e,v)
break
case"balloons":w.bGl(d,e,v)
break
case"galaxy":w.bUP(d,e,v)
break
case"redcarpet":w.csv(d,e,v)
break
case"coins":w.bL2(d,e,v)
break
case"lanterns":w.c44(d,e,v)
break
case"hearts":w.c1A(d,e,v)
break
case"petals":w.cnA(d,e,v)
break
case"butterflies":w.bIt(d,e,v)
break
case"neon":w.c88(d,e,v)
break
case"disco":w.bPE(d,e,v)
break
case"sunrise":w.cDg(d,e,v)
break
case"pearls":w.cmE(d,e,v)
break
case"snow":w.cBi(d,e,v)
break
case"laurel":w.c4a(d,e,v)
break
case"ribbons":w.cv0(d,e,v)
break
case"kente":w.c3T(d,e,v)
break
case"trophy":w.cH_(d,e,v)
break
case"shooting":w.cz2(d,e,v)
break
case"bokeh":w.bGH(d,e,v)
break
case"orbits":w.ckf(d,e,v)
break
case"flowers":w.bU2(d,e,v)
break
case"music":w.c7R(d,e,v)
break
case"mandala":w.c6g(d,e,v)
break
case"sparklers":w.cBp(d,e,v)
break
case"city":w.bKj(d,e,v)
break}},
ta(d,e,f,g,h){var w,v,u,t,s
if(h<=0.01)return
w=$.S()
v=B.K()
v.r=g.j(A.i.D(h,0,1)).gp(0)
v.a=A.p7
u=new B.aG(w.r,A.ai,null,null,B.a([],x.v))
w=e.a
t=e.b
s=t-f
u.E(new B.aZ(w,s))
u.E(new B.c6(w,t,w+f,t))
u.E(new B.c6(w,t,w,t+f))
u.E(new B.c6(w,t,w-f,t))
u.E(new B.c6(w,t,w,s))
u.E(new B.bt())
d.af(u,v)
d.N(e,f*0.18,v)},
m2(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o=e.a,n=e.b,m=Math.min(o,n)
for(w=Math.max(4,A.i.V(g*this.d)),v=i+3,u=i+4,t=i+1,s=i+2,r=i+5,q=0;q<w;++q){p=(Math.sin(f*(1.2+C.cZ(q,v)*2.5)+C.cZ(q,u)*6.28)+1)/2
this.ta(d,new B.o(C.cZ(q,t)*o,C.cZ(q,s)*n),m*(0.006+0.014*C.cZ(q,r))*(0.5+p),h,p*p)}},
aVr(c0,c1,c2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7=c1.a,b8=c1.b,b9=Math.min(b7,b8)
this.m2(c0,c1,c2,40,A.c,10)
w=x.O
v=[B.a([A.bL,A.av],w),B.a([A.iv,A.bE],w),B.a([A.eF,A.aG],w),B.a([A.c,A.aC],w)]
for(u=b9*0.005,t=b9*0.012,s=c2*30,r=46*this.d,q=b9*0.08,p=b9*0.04,o=b9*0.006,n=b9*0.008,m=0;m<7;++m){l=c2+m*2.8/7
k=A.i.bh(l/2.8)
j=A.i.F(l,2.8)/2.8
i=m*97+k*13
h=b7*(0.15+0.7*C.cZ(i,1))
g=h+b7*(C.cZ(i,2)-0.5)*0.15
f=b8*(0.12+0.35*C.cZ(i,3))
e=v[Math.abs(A.o.F(i,4))]
if(j<0.22){d=B.ku(new B.o(h,b8),new B.o(g,f),A.cw.aA(0,j/0.22))
d.toString
$.S()
a0=new B.ao(A.O,A.M,A.R,A.S,A.Q)
a0.sav(new B.a8(A.a7,A.aa,A.x,B.a([e[0].j(0),e[0]],w),null,null).aK(0,B.t1(new B.o(h,b8),d)))
a0.c=o
a0.d=A.bu
a1=B.ku(new B.o(h,b8),d,0.75)
a1.toString
c0.ah(a1,d,a0)
a1=new B.ao(A.O,A.M,A.R,A.S,A.Q)
a1.r=A.c.gp(0)
c0.N(d,n,a1)}else{a2=(j-0.22)/0.78
a3=A.cw.aA(0,a2)
d=1-a2
a4=d*d
d=Math.max(4,A.i.V(r))
a1=C.cZ(i,4)
if(a2<0.15){a5=1-a2/0.15
$.S()
a6=new B.ao(A.O,A.M,A.R,A.S,A.Q)
a6.r=e[0].j(0.5*a5).gp(0)
a6.y=new B.hm(A.G,p)
c0.N(new B.o(g,f),q*a5,a6)}for(a5=a2>0.45,a6=a4*0.8,a1=b9*(0.16+0.1*a1)*a3,a7=a2*a2*b9*0.12,a8=a7*0.8,a9=0;a9<d;++a9){b0=a9/d*3.141592653589793*2+C.cZ(i,a9+10)*0.2
b1=a1*(0.75+0.25*C.cZ(i,a9+60))
b2=new B.o(g+Math.cos(b0)*b1,f+Math.sin(b0)*b1+a7)
b3=Math.cos(b0)
b4=Math.sin(b0)
b5=(a9&1)===0?e[0]:e[1]
$.S()
b6=new B.ao(A.O,A.M,A.R,A.S,A.Q)
b6.r=b5.j(a6).gp(0)
b6.c=u
b6.d=A.bu
b6.a=A.p7
c0.ah(new B.o(g+b3*b1*0.82,f+b4*b1*0.82+a8),b2,b6)
if(a5&&C.cZ(i,a9+120)>0.5)this.ta(c0,b2,t,A.c,a4*(0.5+0.5*Math.sin(s+a9)))}}}},
bLE(a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k=a1.a,j=a1.b,i=Math.min(k,j),h=A.i.F(a2*0.25,1.6)-0.3,g=0+k,f=0+j,e=$.S(),d=B.K()
d.sav(new B.a8(A.aA,A.aF,A.x,D.dpr,B.a([A.i.D(h-0.15,0,1),A.i.D(h,0,1),A.i.D(h+0.15,0,1)],x.x),null).aK(0,new B.a1(0,0,g,f)))
a0.ar(new B.a1(0,0,g,f),d)
d=Math.max(4,A.i.V(150*this.d))
for(g=a0.c,w=j+i*0.1,j=i*0.05,f=a2*4,v=x.v,u=0;u<d;++u){t=A.i.F(a2*(i*(0.08+0.12*C.cZ(u,1)))+C.cZ(u,2)*w,w)
s=C.cZ(u,3)
r=Math.sin(a2*(0.8+C.cZ(u,4))+u)
q=i*(0.012+0.012*C.cZ(u,5))
p=Math.cos(a2*(2+3*C.cZ(u,6))+u)
o=D.Rz[A.o.D(A.i.bh(C.cZ(u,7)*5),0,4)]
J.bo(g.save())
g.translate(s*k+r*i*0.04,t-j)
g.rotate((a2*(0.6+C.cZ(u,8)*2)+u)*180/3.141592653589793,0,0)
n=new B.ao(A.O,A.M,A.R,A.S,A.Q)
t=Math.abs(p)
n.r=B.ar(o,A.c,t*0.4).j(0.95).gp(0)
if(A.o.F(u,5)===0){t=B.a([],v)
m=new B.aG(e.r,A.ai,null,null,t)
e=-q*2
t.push(new B.aZ(e,0))
m.ab()
for(l=1;l<=8;++l){s=new B.aq(e+l*q*0.5,Math.sin(l*1.2+f)*q*0.5)
t.push(s)
r=m.f
if(r!=null)s.ak(r)
m.ab()}e=$.S()
t=new B.ao(A.O,A.M,A.R,A.S,A.Q)
t.r=B.b0(n.r).gp(0)
t.b=A.a9
t.c=q*0.35
a0.af(m,t)}else a0.ar(B.bs(A.J,q*1.8*A.i.D(t,0.15,1),q),n)
g.restore()}this.m2(a0,a1,a2,25,A.bL,30)},
bNi(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=a9.a,a6=a9.b,a7=Math.min(a5,a6)
a5/=2
a6*=0.5
w=new B.o(a5,a6)
for(v=x.O,u=a7*1.2,t=b0*0.12,s=x.v,r=0;r<16;++r){q=r/16*3.141592653589793*2+t
p=$.S()
o=B.a([],s)
n=new B.aG(p.r,A.ai,a4,a4,o)
o.push(new B.aZ(a5,a6))
n.ab()
p=q-0.07
p=new B.aq(a5+Math.cos(p)*a7*1.2,a6+Math.sin(p)*a7*1.2)
o.push(p)
m=n.f
if(m!=null)p.ak(m)
n.ab()
p=q+0.07
p=new B.aq(a5+Math.cos(p)*a7*1.2,a6+Math.sin(p)*a7*1.2)
o.push(p)
m=n.f
if(m!=null)p.ak(m)
n.ab()
p=new B.bt()
o.push(p)
o=n.f
if(o!=null)p.ak(o)
n.ab()
p=new B.ao(A.O,A.M,A.R,A.S,A.Q)
p.sav(new B.bY(A.A,0.5,A.x,a4,0,B.a([A.bL.j(0.22),D.bjZ],v),a4,a4).aK(0,B.bZ(w,u)))
a8.af(n,p)}l=a7*0.28
k=a7*0.16
a5-=l/2
a6=a6-a7*0.15-k
j=new B.aG($.S().r,A.ai,a4,a4,B.a([],s))
v=a6+k
j.E(new B.aZ(a5,v))
u=k*0.3
t=a6+u
j.E(new B.aq(a5,t))
p=a6+k*0.6
j.E(new B.aq(a5+l*0.22,p))
j.E(new B.aq(a5+l*0.5,a6))
j.E(new B.aq(a5+l*0.78,p))
p=a5+l
j.E(new B.aq(p,t))
j.E(new B.aq(p,v))
j.E(new B.bt())
i=A.i.D(b0/1.8,0,1)
t=i>=1
if(t){o=B.K()
o.sav(new B.a8(A.b1,A.b7,A.x,D.do3,a4,a4).aK(0,new B.a1(a5,a6,p,v)))
a8.af(j,o)
for(v=[D.eJv,D.eCE,D.eTb],p=v.length,o=a6+k*0.78,m=a7*0.016,h=a7*0.005,g=o-h,f=0;f<p;++f){e=v[f]
d=e.b
e=a5+l*e.a
a0=new B.ao(A.O,A.M,A.R,A.S,A.Q)
a0.r=d.gp(d)
a8.N(new B.o(e,o),m,a0)
a0=new B.ao(A.O,A.M,A.R,A.S,A.Q)
a0.r=A.ab.gp(0)
a8.N(new B.o(e-h,g),h,a0)}for(v=[0,0.5,1],p=v.length,o=a7*0.014,f=0;f<p;++f){a1=v[f]
m=a1===0.5?0:u
h=new B.ao(A.O,A.M,A.R,A.S,A.Q)
h.r=A.hG.gp(0)
a8.N(new B.o(a5+l*a1,a6+m),o,h)}}for(v=B.xN(j),u=B.a([],x.X),p=new B.ry(v,!1,u),o=v.a,m=a7*0.008;p.C();){h=p.c
if(h===0||p.f)B.bj(B.jI(y.M));--h
p.iy()
g=u[h].b
g===$&&B.c()
g=g.a.length()
e=v.b
a0=B.a([],s)
a2=new B.ao(A.O,A.M,A.R,A.S,A.Q)
a2.b=A.a9
a2.c=m
a2.e=A.dT
a2.r=A.bL.gp(0)
a8.af(new B.aG(o,e,a4,new B.cu([new B.BS(p,h),0,g*i,!0]),a0),a2)}if(t){a3=A.i.F(b0*0.5,1)
this.ta(a8,new B.o(a5+l*a3,a6+k*0.5),a7*0.04,A.c,Math.sin(a3*3.141592653589793))}this.m2(a8,a9,b0,45,A.bL,40)},
bG7(a6,a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=a7.a,a4=a7.b,a5=Math.min(a3,a4)
this.m2(a6,a7,a8,60,A.c,50)
w=[D.f4W,D.f4E,D.f4x,D.f5V]
for(v=a5*0.14,u=a5*0.06,t=a5*0.01,s=a3+10,r=a3/40,q=x.v,p=0;p<4;++p){o=w[p].a
n=o[0]
m=o[1]
l=o[2]
k=o[3]
o=$.S()
j=B.a([],q)
i=new B.aG(o.r,A.ai,null,null,j)
for(o=a4*m,h=a8*l,g=h*1.4,f=0;f<=s;f+=r){e=f/a3
d=o+Math.sin(e*4+h+k)*a5*0.07+Math.sin(e*9-g+k)*a5*0.025
if(f===0){e=new B.aZ(f,d)
j.push(e)
a0=i.f
if(a0!=null)e.ak(a0)
i.ab()}else{e=new B.aq(f,d)
j.push(e)
a0=i.f
if(a0!=null)e.ak(a0)
i.ab()}}$.S()
o=new B.ao(A.O,A.M,A.R,A.S,A.Q)
o.b=A.a9
o.c=v
o.r=n.j(0.28).gp(0)
o.a=A.p7
o.y=new B.hm(A.G,u)
a6.af(i,o)
o=new B.ao(A.O,A.M,A.R,A.S,A.Q)
o.b=A.a9
o.c=t
o.r=n.j(0.55).gp(0)
o.a=A.p7
o.y=new B.hm(A.G,t)
a6.af(i,o)}for(v=Math.max(4,A.i.V(40*this.d)),a1=a4+20,u=a8*a5,a2=0;a2<v;++a2){t=A.i.F(u*(0.05+0.06*C.cZ(a2,1))+C.cZ(a2,2)*a1,a1)
s=C.cZ(a2,3)
r=Math.sin(a8+a2)
q=C.cZ(a2,4)
$.S()
o=new B.ao(A.O,A.M,A.R,A.S,A.Q)
o.r=A.wf.j(0.4+0.5*C.cZ(a2,5)).gp(0)
o.a=A.p7
a6.N(new B.o(s*a3+r*a5*0.02,a4-t),a5*(0.003+0.004*q),o)}},
bJw(d,a0,a1){var w,v,u,t,s,r,q,p,o,n=null,m=a0.a,l=a0.b,k=Math.min(m,l),j=Math.sin(a1*1.5),i=m/2,h=l*0.5,g=k*0.55,f=$.S(),e=B.K()
e.sav(new B.bY(A.A,0.5,A.x,n,0,B.a([A.ia.j(0.25+0.1*j),D.Zw],x.O),n,n).aK(0,B.bZ(new B.o(i,h),g)))
d.N(new B.o(i,h),g,e)
for(j=k*0.008,i=a1*3,h=x.v,g=f,w=0;w<6;++w){v=(w&1)===0
f=B.a([],h)
u=new B.aG(g.r,A.ai,n,n,f)
g=v?0:m
e=l*(0.05+w*0.07)
f.push(new B.aZ(g,e))
u.ab()
for(t=1;t<=20;++t){g=t/20*m
s=v?g*0.45:m-g*0.45
g=new B.aq(s,e+t*k*0.012+Math.sin(t*0.8+i+w)*k*0.02)
f.push(g)
r=u.f
if(r!=null)g.ak(r)
u.ab()}g=$.S()
f=new B.ao(A.O,A.M,A.R,A.S,A.Q)
f.b=A.a9
f.c=j
f.r=D.Rz[A.o.F(w,4)].j(0.7).gp(0)
d.af(u,f)}for(j=Math.max(4,A.i.V(110*this.d)),i=l*0.08,q=l*1.1,h=a1*2,w=0;w<j;++w){p=l-A.i.F(a1*(k*(0.07+0.12*C.cZ(w,1)))+C.cZ(w,2)*q,q)
s=m*(0.1+0.8*C.cZ(w,3))+Math.sin(h+w)*k*0.015
o=k*(0.004+0.012*C.cZ(w,4))
if(p<i){this.ta(d,new B.o(s,p),o*2.4,A.bL,A.i.D(p/i,0,1))
continue}$.S()
g=new B.ao(A.O,A.M,A.R,A.S,A.Q)
g.b=A.a9
f=o*0.25
g.c=Math.max(0.8,f)
g.r=A.ud.j(0.75).gp(0)
d.N(new B.o(s,p),o,g)
g=o*0.35
e=new B.ao(A.O,A.M,A.R,A.S,A.Q)
e.r=A.c.j(0.8).gp(0)
d.N(new B.o(s-g,p-g),f,e)}},
bPt(b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=null,a7=b1.a,a8=b1.b,a9=Math.min(a7,a8)
this.m2(b0,b1,b2,30,A.lf,60)
for(w=Math.max(4,A.i.V(42*this.d)),v=b0.c,u=b2*2.2,t=b2*a9,s=b2*0.7,r=b2*0.8,q=x.v,p=0;p<w;++p){o=a9*(0.025+0.035*C.cZ(p,1))
n=a8+o*4
m=A.i.F(t*(0.04+0.06*C.cZ(p,2))+C.cZ(p,3)*n,n)-o*2
l=C.cZ(p,4)*a7+Math.sin(s+p)*a9*0.02
J.bo(v.save())
v.translate(l,m)
v.rotate(Math.sin(r+p)*0.5*180/3.141592653589793,0,0)
k=o*1.2
j=-k
i=j*0.35
h=$.S()
g=B.a([],q)
f=new B.aG(h.r,A.ai,a6,a6,g)
h=-o
e=h*0.5
g.push(new B.aZ(e,i))
f.ab()
h*=0.28
j*=0.6
d=new B.aq(h,j)
g.push(d)
a0=f.f
if(a0!=null)d.ak(a0)
f.ab()
d=o*0.28
a0=new B.aq(d,j)
g.push(a0)
a1=f.f
if(a1!=null)a0.ak(a1)
f.ab()
a0=o*0.5
a1=new B.aq(a0,i)
g.push(a1)
a2=f.f
if(a2!=null)a1.ak(a2)
f.ab()
a1=k*0.6
a2=new B.aq(0,a1)
g.push(a2)
a3=f.f
if(a3!=null)a2.ak(a3)
f.ab()
a2=new B.bt()
g.push(a2)
g=f.f
if(g!=null)a2.ak(g)
f.ab()
g=new B.ao(A.O,A.M,A.R,A.S,A.Q)
g.sav(new B.a8(A.aA,A.aF,A.x,D.djv,a6,a6).aK(0,B.bs(A.J,k*1.2,o)))
b0.af(f,g)
a4=new B.ao(A.O,A.M,A.R,A.S,A.Q)
a4.b=A.a9
a4.c=Math.max(0.6,o*0.03)
a4.r=A.c.j(0.7).gp(0)
b0.ah(new B.o(e,i),new B.o(a0,i),a4)
b0.ah(new B.o(h,j),new B.o(0,a1),a4)
b0.ah(new B.o(d,j),new B.o(0,a1),a4)
v.restore()
a5=Math.sin(u+p*1.7)
if(a5>0.85)this.ta(b0,new B.o(l+o*0.2,m-o*0.3),o*0.9,A.c,(a5-0.85)/0.15)}},
cBB(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=e.a,g=e.b,f=Math.min(h,g)
h/=2
g/=2
w=new B.o(h,g)
for(v=x.v,u=a0*0.15,t=0;t<28;++t){s=t/28*3.141592653589793*2-u
r=(t&1)===0
q=r?0.05:0.025
p=$.S()
o=B.a([],v)
n=new B.aG(p.r,A.ai,null,null,o)
o.push(new B.aZ(h,g))
n.ab()
p=s-q
p=new B.aq(h+Math.cos(p)*f*1.3,g+Math.sin(p)*f*1.3)
o.push(p)
m=n.f
if(m!=null)p.ak(m)
n.ab()
p=s+q
p=new B.aq(h+Math.cos(p)*f*1.3,g+Math.sin(p)*f*1.3)
o.push(p)
m=n.f
if(m!=null)p.ak(m)
n.ab()
p=new B.bt()
o.push(p)
o=n.f
if(o!=null)p.ak(o)
n.ab()
p=new B.ao(A.O,A.M,A.R,A.S,A.Q)
p.r=A.bL.j(r?0.12:0.07).gp(0)
d.af(n,p)}for(v=f*0.008,l=0;l<3;++l){k=A.i.F(a0+l*0.6,1.8)/1.8
$.S()
u=new B.ao(A.O,A.M,A.R,A.S,A.Q)
u.b=A.a9
r=1-k
u.c=v*r
u.r=A.bL.j(r*0.6).gp(0)
d.N(w,f*(0.15+0.6*k),u)}j=A.i.bh(a0/2.4)
k=A.i.F(a0,2.4)/2.4
for(v=Math.max(4,A.i.V(70*this.d)),u=j+1,r=(1-k)*1.2,t=0;t<v;++t){s=C.cZ(t,j)*3.141592653589793*2
i=f*(0.1+0.55*D.by4.aA(0,k)*(0.5+0.5*C.cZ(t,u)))
this.ta(d,new B.o(h+Math.cos(s)*i,g+Math.sin(s)*i),f*(0.01+0.012*C.cZ(t,3)),D.Rz[A.o.D(A.i.bh(C.cZ(t,4)*5),0,4)],r)}},
bGl(a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=null,a2=a6.a,a3=a6.b,a4=Math.min(a2,a3)
for(w=this.d,v=Math.max(4,A.i.V(22*w)),u=x.O,t=x.v,s=a7*2,r=a7*a4,q=a7*0.9,p=0;p<v;++p){o=a4*(0.045+0.035*C.cZ(p,1))
n=a3+o*6
m=o*2
l=a3+m-A.i.F(r*(0.05+0.05*C.cZ(p,2))+C.cZ(p,3)*n,n)
k=C.cZ(p,4)*a2+Math.sin(q+p*1.3)*a4*0.03
j=D.aAs[A.o.F(p,6)]
i=$.S()
h=B.a([],t)
g=new B.aG(i.r,A.ai,a1,a1,h)
i=l+o*1.15
h.push(new B.aZ(k,i))
g.ab()
for(f=1;f<=6;++f){e=new B.aq(k+Math.sin(f*1.4+s+p)*o*0.15,i+f*o*0.35)
h.push(e)
d=g.f
if(d!=null)e.ak(d)
g.ab()}h=$.S()
e=new B.ao(A.O,A.M,A.R,A.S,A.Q)
e.b=A.a9
e.c=Math.max(0.7,o*0.03)
e.r=A.c.j(0.6).gp(0)
a5.af(g,e)
a0=B.bs(new B.o(k,l),o*2.3,m)
m=new B.ao(A.O,A.M,A.R,A.S,A.Q)
e=B.ar(j,A.w,0.35)
e.toString
m.sav(new B.bY(D.b2w,0.9,A.x,a1,0,B.a([A.c,j,e],u),W.aAh,a1).aK(0,a0))
a5.bZ(a0,m)
m=B.a([],t)
h=new B.aG(h.r,A.ai,a1,a1,m)
e=o*0.12
m.push(new B.aZ(k-e,i))
h.ab()
i=new B.aq(k+e,i)
m.push(i)
e=h.f
if(e!=null)i.ak(e)
h.ab()
i=new B.aq(k,l+o)
m.push(i)
e=h.f
if(e!=null)i.ak(e)
h.ab()
i=new B.bt()
m.push(i)
m=h.f
if(m!=null)i.ak(m)
h.ab()
m=new B.ao(A.O,A.M,A.R,A.S,A.Q)
m.r=B.ar(j,A.w,0.3).gp(0)
a5.af(h,m)}for(w=Math.max(4,A.i.V(60*w)),n=a3+20,a3=a5.c,v=a7*3,u=a4*0.012,t=a4*0.02,p=0;p<w;++p){s=A.i.F(r*(0.1+0.1*C.cZ(p,11))+C.cZ(p,12)*n,n)
q=C.cZ(p,13)
J.bo(a3.save())
a3.translate(q*a2,s-10)
a3.rotate((v+p)*180/3.141592653589793,0,0)
s=B.bs(A.J,t,u)
$.S()
q=new B.ao(A.O,A.M,A.R,A.S,A.Q)
q.r=D.aAs[A.o.F(p,6)].j(0.85).gp(0)
a5.ar(s,q)
a3.restore()}},
bUP(b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=b1.a,a5=b1.b,a6=Math.min(a4,a5),a7=a4/2,a8=a5/2,a9=new B.o(a7,a8)
this.m2(b0,b1,b2,50,A.c,70)
for(w=[D.f53,D.f4K,D.f4Q],v=w.length,u=b2*0.3,t=x.O,s=0;s<v;++s){r=w[s].a
q=r[0]
p=r[1]
o=r[2]
n=r[3]
m=new B.o(a7+(p*a4+Math.sin(u)*a6*0.03),a8+o*a5)
r=a6*n
$.S()
l=new B.ao(A.O,A.M,A.R,A.S,A.Q)
l.sav(new B.bY(A.A,0.5,A.x,a3,0,B.a([q.j(0.32+0.08*Math.sin(b2)),q.j(0)],t),a3,a3).aK(0,B.bZ(m,r)))
b0.N(m,r,l)}w=Math.max(4,A.i.V(420*this.d))
for(v=a6*0.6,u=b2*0.18,k=0;k<w;++k){j=A.o.F(k,3)
i=C.cZ(k,1)
h=v*Math.pow(i,0.8)
g=j*3.141592653589793*2/3+i*5.5+u+(C.cZ(k,2)-0.5)*0.5
r=Math.cos(g)
l=Math.sin(g)
f=B.ar(A.bL,A.eK,i)
f.toString
e=C.cZ(k,3)
$.S()
d=new B.ao(A.O,A.M,A.R,A.S,A.Q)
d.r=f.j(0.5+0.5*C.cZ(k,4)).gp(0)
d.a=A.p7
b0.N(new B.o(a7+r*h,a8+l*h*0.62),a6*(0.0025+0.004*e),d)}a7=a6*0.12
$.S()
a8=B.K()
a8.sav(new B.bY(A.A,0.5,A.x,a3,0,B.a([A.ud.j(0.55),D.ajk],t),a3,a3).aK(0,B.bZ(a9,a7)))
b0.N(a9,a7,a8)
a0=A.i.F(b2,3.5)/3.5
if(a0<0.25){a1=A.i.bh(b2/3.5)
a2=new B.o(a4*(0.1+0.5*C.cZ(a1,9)),a5*0.1*C.cZ(a1,8))
a4=B.ku(a2,a2.a2(0,new B.o(v,a6*0.3)),a0/0.25)
a4.toString
a5=B.ku(a2,a4,0.6)
a5.toString
a7=B.K()
a7.sav(new B.a8(A.a7,A.aa,A.x,B.a([A.c.j(0),A.c],t),a3,a3).aK(0,B.t1(a2,a4)))
a7.c=a6*0.005
a7.d=A.bu
b0.ah(a5,a4,a7)}},
csv(b8,b9,c0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=null,b5=b9.a,b6=b9.b,b7=Math.min(b5,b6)
for(w=x.O,v=-b7*0.05,u=b6*1.3,t=x.v,s=0;s<3;++s){r=b5*(0.2+s*0.3)
q=1.5707963267948966+Math.sin(c0*(0.5+s*0.15)+s*2)*0.45
p=$.S()
o=B.a([],t)
n=new B.aG(p.r,A.ai,b4,b4,o)
o.push(new B.aZ(r,v))
n.ab()
p=q-0.16
p=new B.aq(r+Math.cos(p)*u,v+Math.sin(p)*u)
o.push(p)
m=n.f
if(m!=null)p.ak(m)
n.ab()
p=q+0.16
p=new B.aq(r+Math.cos(p)*u,v+Math.sin(p)*u)
o.push(p)
m=n.f
if(m!=null)p.ak(m)
n.ab()
p=new B.bt()
o.push(p)
o=n.f
if(o!=null)p.ak(o)
n.ab()
p=new B.ao(A.O,A.M,A.R,A.S,A.Q)
p.sav(new B.bY(A.A,0.5,A.x,b4,0,B.a([A.ud.j(0.28),D.ajk],w),b4,b4).aK(0,B.bZ(new B.o(r,v),u)))
p.a=A.p7
b8.af(n,p)}for(v=[!0,!1],r=v.length,p=b6*0.52,o=b7*0.012,m=b6*0.5,l=b6*0.55,k=0+b6,j=b5*0.16,i=j*0.55,h=j*0.9,g=j*0.62,f=j*0.95,e=b5-f,d=b5-g,a0=b5-h,a1=b5-i,a2=b5-j,a3=0;a3<r;++a3){a4=v[a3]
a5=a4?0:a2
a6=B.a([],w)
for(a7=0;a7<7;++a7)a6.push((a7&1)===0?A.el:A.et)
a8=$.S()
a9=B.a([],t)
n=new B.aG(a8.r,A.ai,b4,b4,a9)
a9.push(new B.aZ(a4?0:b5,0))
n.ab()
a8=new B.aq(a4?j:a2,0)
a9.push(a8)
b0=n.f
if(b0!=null)a8.ak(b0)
n.ab()
a8=a4?i:a1
a8=new B.c6(a8,l,a4?h:a0,b6)
a9.push(a8)
b0=n.f
if(b0!=null)a8.ak(b0)
n.ab()
a8=new B.aq(a4?0:b5,b6)
a9.push(a8)
b0=n.f
if(b0!=null)a8.ak(b0)
n.ab()
a8=new B.bt()
a9.push(a8)
a9=n.f
if(a9!=null)a8.ak(a9)
n.ab()
a8=new B.ao(A.O,A.M,A.R,A.S,A.Q)
a8.sav(new B.a8(A.a7,A.aa,A.x,a6,b4,b4).aK(0,new B.a1(a5,0,a5+j,k)))
b8.af(n,a8)
a8=a4?g:d
a9=a4?f:e
b0=new B.ao(A.O,A.M,A.R,A.S,A.Q)
b0.r=A.ia.gp(0)
b0.c=o
b0.d=A.bu
b8.ah(new B.o(a8,m),new B.o(a9,p),b0)}b1=new B.aG($.S().r,A.ai,b4,b4,B.a([],t))
w=b6*0.78
b1.E(new B.aZ(b5*0.42,w))
b1.E(new B.aq(b5*0.58,w))
b1.E(new B.aq(b5*0.8,b6))
b1.E(new B.aq(b5*0.2,b6))
b1.E(new B.bt())
v=B.K()
v.sav(D.c8W.aK(0,new B.a1(0,w,0+b5,w+b6*0.22)))
b8.af(b1,v)
for(w=Math.max(4,A.i.V(80*this.d)),b2=b6+10,b6=c0*b7,v=c0*5,s=0;s<w;++s){b3=A.i.F(b6*(0.05+0.07*C.cZ(s,1))+C.cZ(s,2)*b2,b2)
t=C.cZ(s,3)
r=Math.sin(c0+s)
p=Math.sin(v+s)
this.ta(b8,new B.o(b5*(0.15+0.7*t)+r*b7*0.01,b3),b7*(0.006+0.008*C.cZ(s,4)),A.bL,0.3+0.7*((p+1)/2))}},
bL2(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=e.a,j=e.b,i=Math.min(k,j)
for(w=Math.max(4,A.i.V(55*this.d)),v=f*i,u=0;u<w;++u){t=i*(0.02+0.02*C.cZ(u,1))
s=j+t*4
r=t*2
q=A.i.F(v*(0.12+0.12*C.cZ(u,2))+C.cZ(u,3)*s,s)-r
p=C.cZ(u,4)*k
o=Math.cos(f*(2+3*C.cZ(u,5))+u)
n=Math.abs(o)
m=B.bs(new B.o(p,q),r,r*A.i.D(n,0.12,1))
$.S()
r=new B.ao(A.O,A.M,A.R,A.S,A.Q)
r.sav(new B.a8(A.aA,A.aF,A.x,o>0?D.dAa:D.cPp,null,null).aK(0,m))
d.bZ(m,r)
r=-(t*0.22)
l=new B.ao(A.O,A.M,A.R,A.S,A.Q)
l.b=A.a9
l.c=Math.max(0.6,t*0.08)
l.r=D.buK.gp(0)
d.bZ(new B.a1(m.a-r,m.b-r,m.c+r,m.d+r),l)
if(n>0.97)this.ta(d,new B.o(p+t*0.3,q-t*0.4),t*0.9,A.c,0.9)}this.m2(d,e,f,30,A.bL,110)},
c44(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a3.a,a0=a3.b,a1=Math.min(d,a0)
this.m2(a2,a3,a4,50,A.c,120)
for(w=Math.max(4,A.i.V(26*this.d)),v=x.O,u=a4*a1,t=a4*0.6,s=a4*9,r=x.v,q=0;q<w;++q){p=a1*(0.035+0.035*C.cZ(q,1))
o=a0+p*4
n=a0+p*2-A.i.F(u*(0.03+0.04*C.cZ(q,2))+C.cZ(q,3)*o,o)
m=C.cZ(q,4)*d+Math.sin(t+q)*a1*0.03
l=0.8+0.2*Math.sin(s+q*3)
k=p*2.2
j=$.S()
i=new B.ao(A.O,A.M,A.R,A.S,A.Q)
i.sav(new B.bY(A.A,0.5,A.x,e,0,B.a([As.yn.j(0.45*l),D.ahU],v),e,e).aK(0,B.bZ(new B.o(m,n),k)))
a2.N(new B.o(m,n),k,i)
i=B.a([],r)
h=new B.aG(j.r,A.ai,e,e,i)
j=p*0.5
k=p*0.7
g=n-k
i.push(new B.aZ(m-j,g))
h.ab()
j=new B.aq(m+j,g)
i.push(j)
g=h.f
if(g!=null)j.ak(g)
h.ab()
j=p*0.38
k=n+k
g=new B.aq(m+j,k)
i.push(g)
f=h.f
if(f!=null)g.ak(f)
h.ab()
k=new B.aq(m-j,k)
i.push(k)
j=h.f
if(j!=null)k.ak(j)
h.ab()
k=new B.bt()
i.push(k)
j=h.f
if(j!=null)k.ak(j)
h.ab()
k=new B.ao(A.O,A.M,A.R,A.S,A.Q)
j=B.ar(D.bke,A.c,0.2*l)
j.toString
k.sav(new B.a8(A.b1,A.b7,A.x,B.a([D.bpE,j],v),e,e).aK(0,B.bs(new B.o(m,n),p*1.4,p)))
a2.af(h,k)
k=new B.ao(A.O,A.M,A.R,A.S,A.Q)
k.r=A.c.j(l).gp(0)
a2.N(new B.o(m,n+p*0.55),p*0.12,k)}},
c1A(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
for(w=Math.max(4,A.i.V(40*this.d)),v=x.O,u=a3.c,t=x.v,s=a5*a2,r=a5*1.3,q=a5*6,p=0;p<w;++p){o=a2*(0.02+0.03*C.cZ(p,1))
n=a1+o*4
m=A.i.F(s*(0.05+0.06*C.cZ(p,2))+C.cZ(p,3)*n,n)
l=C.cZ(p,4)
k=Math.sin(r+p)
j=1+0.12*Math.max(0,Math.sin(q+p))
J.bo(u.save())
u.translate(l*a0+k*a2*0.03,a1+o*2-m)
u.rotate(Math.sin(a5+p)*0.3*180/3.141592653589793,0,0)
u.scale(j,j)
m=$.S()
l=B.a([],t)
i=new B.aG(m.r,A.ai,d,d,l)
m=o*0.9
l.push(new B.aZ(0,m))
i.ab()
k=-o
h=k*0.2
g=k*1.6
k=new B.km(k*1.8,h,k*0.9,g,0,k*0.55)
l.push(k)
f=i.f
if(f!=null)k.ak(f)
i.ab()
m=new B.km(m,g,o*1.8,h,0,m)
l.push(m)
k=i.f
if(k!=null)m.ak(k)
i.ab()
m=new B.bt()
l.push(m)
l=i.f
if(l!=null)m.ak(l)
i.ab()
e=D.d9D[A.o.F(p,5)]
m=new B.ao(A.O,A.M,A.R,A.S,A.Q)
l=B.ar(e,A.w,0.25)
l.toString
m.sav(new B.bY(A.p5,0.5,A.x,d,0,B.a([A.c,e,l],v),M.a5e,d).aK(0,B.bZ(A.J,o*1.4)))
a3.af(i,m)
u.restore()}this.m2(a3,a4,a5,30,A.iv,130)},
cnA(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=a0.a,f=a0.b,e=Math.min(g,f)
for(w=Math.max(4,A.i.V(70*this.d)),v=d.c,u=x.v,t=a1*e,s=a1*0.9,r=a1*2,q=0;q<w;++q){p=e*(0.015+0.02*C.cZ(q,1))
o=f+p*4
n=A.i.F(t*(0.05+0.06*C.cZ(q,2))+C.cZ(q,3)*o,o)
m=C.cZ(q,4)
l=Math.sin(s+q*0.7)
J.bo(v.save())
v.translate(m*g+l*e*0.06,n-p*2)
v.rotate((a1*(0.5+C.cZ(q,5))+q)*180/3.141592653589793,0,0)
n=Math.cos(r+q)
v.scale(1,0.4+0.6*Math.abs(n))
n=$.S()
m=B.a([],u)
k=new B.aG(n.r,A.ai,h,h,m)
n=-p
m.push(new B.aZ(0,n))
k.ab()
l=n*0.2
j=new B.c6(p,l,0,p)
m.push(j)
i=k.f
if(i!=null)j.ak(i)
k.ab()
n=new B.c6(n,l,0,n)
m.push(n)
l=k.f
if(l!=null)n.ak(l)
k.ab()
n=new B.bt()
m.push(n)
m=k.f
if(m!=null)n.ak(m)
k.ab()
n=new B.ao(A.O,A.M,A.R,A.S,A.Q)
m=(q&1)===0?D.cJw:D.dkU
n.sav(new B.a8(A.a7,A.aa,A.x,m,h,h).aK(0,B.bZ(A.J,p)))
d.af(k,n)
v.restore()}this.m2(d,a0,a1,25,A.bL,140)},
bIt(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=null,a8=b2.a,a9=b2.b,b0=Math.min(a8,a9)
this.m2(b1,b2,b3,40,A.bL,150)
for(w=Math.max(4,A.i.V(16*this.d)),v=b1.c,u=x.v,t=b3*9,s=b3*0.5,r=0;r<w;++r){q=b0*(0.035+0.025*C.cZ(r,1))
p=Math.sin(b3*(0.15+0.1*C.cZ(r,2))+r*2.1)
o=Math.sin(b3*(0.21+0.1*C.cZ(r,3))+r*1.3)
n=0.25+0.75*Math.abs(Math.cos(t+r))
J.bo(v.save())
v.translate(a8*(0.5+0.45*p),a9*(0.5+0.42*o))
v.rotate(Math.sin(s+r)*0.4*180/3.141592653589793,0,0)
for(p=[-1,1],o=p.length,m=-q,l=q*1.4,k=0+l,j=m+q*2,i=q*0.04,h=(r&1)===0,g=q*0.2,f=q*0.8,e=q*1.2,d=m*1.3,a0=m*0.1,a1=0;a1<o;++a1){a2=p[a1]
J.bo(v.save())
v.scale(a2*n,1)
a3=$.S()
a4=B.a([],u)
a5=new B.aG(a3.r,A.ai,a7,a7,a4)
a4.push(new B.aZ(0,0))
a5.ab()
a3=new B.km(e,d,l,a0,g,0)
a4.push(a3)
a6=a5.f
if(a6!=null)a3.ak(a6)
a5.ab()
a3=new B.km(q,g,f,q,0,g)
a4.push(a3)
a6=a5.f
if(a6!=null)a3.ak(a6)
a5.ab()
a3=new B.bt()
a4.push(a3)
a4=a5.f
if(a4!=null)a3.ak(a4)
a5.ab()
a3=new B.ao(A.O,A.M,A.R,A.S,A.Q)
a3.sav(new B.a8(A.a7,A.aa,A.x,h?D.dkB:D.dnx,a7,a7).aK(0,new B.a1(0,m,k,j)))
b1.af(a5,a3)
a3=new B.ao(A.O,A.M,A.R,A.S,A.Q)
a3.b=A.a9
a3.c=Math.max(0.6,i)
a3.r=D.BY.gp(0)
b1.af(a5,a3)
v.restore()}$.S()
p=new B.ao(A.O,A.M,A.R,A.S,A.Q)
p.r=D.btY.gp(0)
p.c=q*0.1
p.d=A.bu
b1.ah(new B.o(0,m*0.3),new B.o(0,q*0.4),p)
v.restore()}},
c88(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=e.a,i=e.b,h=Math.min(j,i),g=new B.o(j/2,i/2)
for(w=f*0.45,v=h*0.012,u=0;u<4;++u){t=A.i.F(w+u/4,1)
s=h*(0.2+0.7*t)
$.S()
r=new B.ao(A.O,A.M,A.R,A.S,A.Q)
r.b=A.a9
r.c=v
r.r=D.aBB[u].j((1-t)*0.9).gp(0)
r.y=new B.hm(A.G,v)
q=s*0.3
d.am(B.bn(B.bs(g,s,s*1.6),new B.aN(q,q)),r)}p=j/28
for(j=p*0.15,w=p*0.7,v=p*0.3,q=h*0.01,o=0;o<28;++o){n=i*(0.05+0.18*(0.5+0.5*Math.sin(f*(3+C.cZ(o,1)*4)+o)))
m=D.aBB[A.o.F(o,4)]
l=o*p+j
k=i-n
k=B.bn(new B.a1(l,k,l+w,k+n),new B.aN(v,v))
$.S()
l=new B.ao(A.O,A.M,A.R,A.S,A.Q)
l.r=m.j(0.85).gp(0)
l.y=new B.hm(A.adT,q)
d.am(k,l)}},
bPE(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a3.a,a0=a3.b,a1=Math.min(d,a0)
d/=2
w=a1*0.12
v=new B.o(d,w)
u=a1*0.09
for(t=Math.max(4,A.i.V(60*this.d)),s=a4*0.6,a0*=0.55,r=a1*0.004,q=0;q<t;++q){p=C.cZ(q,1)*3.141592653589793*2+s
o=a1*(0.2+0.8*C.cZ(q,2))
n=Math.cos(p)
m=Math.sin(p)
l=[A.c,A.bL,A.o8,A.dn][A.o.F(q,4)]
k=C.cZ(q,3)
$.S()
j=new B.ao(A.O,A.M,A.R,A.S,A.Q)
j.r=l.j(0.75).gp(0)
j.a=A.p7
j.y=new B.hm(A.G,r)
a2.N(new B.o(d+n*o*1.4,a0+m*o*0.5),a1*(0.008+0.01*k),j)}a0=$.S()
t=B.K()
t.r=A.aD.gp(0)
t.c=1.2
a2.ah(new B.o(d,0),new B.o(d,w-u),t)
t=B.K()
t.r=A.d2.gp(0)
a2.N(v,u,t)
t=a2.c
J.bo(t.save())
a0=new B.aG(a0.r,A.ai,null,null,B.a([],x.v))
a0.E(new B.jS(B.bZ(v,u)))
a2.mT(0,a0)
i=u/4
for(a0=a4*i*2,s=i*0.9,r=a4*4,h=-4;h<4;++h)for(n=w+h*i,m=n+s,k=h*2.3,g=-6;g<6;++g){j=d+g*i+A.i.F(a0,i)
f=Math.sin(g*1.7+k+r)
$.S()
e=new B.ao(A.O,A.M,A.R,A.S,A.Q)
e.r=B.ar(A.bi,A.c,0.4+0.6*((f+1)/2)).gp(0)
a2.ar(new B.a1(j,n,j+s,m),e)}t.restore()
d=-u*0.4
this.ta(a2,v.a2(0,new B.o(d,d)),u*0.6,A.c,0.6+0.4*Math.sin(a4*5))},
cDg(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=a0.a,i=a0.b,h=Math.min(j,i),g=j/2,f=i*(1.05-0.25*A.cw.aA(0,A.i.D(a1/3,0,1))),e=new B.o(g,f)
for(w=a1*0.3,v=x.v,u=0;u<20;++u){t=3.141592653589793+u/19*3.141592653589793+Math.sin(w)*0.03
s=$.S()
r=B.a([],v)
q=new B.aG(s.r,A.ai,k,k,r)
r.push(new B.aZ(g,f))
q.ab()
s=t-0.04
s=new B.aq(g+Math.cos(s)*h*1.5,f+Math.sin(s)*h*1.5)
r.push(s)
p=q.f
if(p!=null)s.ak(p)
q.ab()
s=t+0.04
s=new B.aq(g+Math.cos(s)*h*1.5,f+Math.sin(s)*h*1.5)
r.push(s)
p=q.f
if(p!=null)s.ak(p)
q.ab()
s=new B.bt()
r.push(s)
r=q.f
if(r!=null)s.ak(r)
q.ab()
s=new B.ao(A.O,A.M,A.R,A.S,A.Q)
s.r=A.bL.j(0.1).gp(0)
d.af(q,s)}g=h*0.5
$.S()
f=B.K()
f.sav(new B.bY(A.A,0.5,A.x,k,0,B.a([D.bft.j(0.6),D.ahU],x.O),k,k).aK(0,B.bZ(e,g)))
d.N(e,g,f)
f=h*0.2
g=B.K()
g.sav(D.eA4.aK(0,B.bZ(e,f)))
d.N(e,f,g)
for(g=a1*h*0.03,f=j*1.4,w=j*0.2,v=h*0.35,s=h*0.07,r=h*0.06,p=h*0.03,o=h*0.18,u=0;u<5;++u){n=A.i.F(g*(1+u*0.3)+C.cZ(u,1)*j*1.4,f)-w
m=i*(0.15+0.12*u)
l=new B.ao(A.O,A.M,A.R,A.S,A.Q)
l.r=A.c.j(0.18).gp(0)
d.bZ(B.bs(new B.o(n,m),s,v),l)
d.bZ(B.bs(new B.o(n+r,m-p),s,o),l)}this.m2(d,a0,a1,20,A.hG,180)},
cmE(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=a0.a,f=a0.b,e=Math.min(g,f)
for(w=g+10,v=g/30,u=x.v,t=0;t<4;++t){s=$.S()
r=B.a([],u)
q=new B.aG(s.r,A.ai,h,h,r)
r.push(new B.aZ(0,f))
q.ab()
for(s=f*(0.72+t*0.07),p=a1*(1+t*0.3),o=0;o<=w;o+=v){n=new B.aq(o,s+Math.sin(o/g*6+p+t)*e*0.03)
r.push(n)
m=q.f
if(m!=null)n.ak(m)
q.ab()}s=new B.aq(g,f)
r.push(s)
p=q.f
if(p!=null)s.ak(p)
q.ab()
s=new B.bt()
r.push(s)
r=q.f
if(r!=null)s.ak(r)
q.ab()
$.S()
s=new B.ao(A.O,A.M,A.R,A.S,A.Q)
s.r=B.ar(A.cD,A.ji,t/3).j(0.55).gp(0)
d.af(q,s)}for(w=Math.max(4,A.i.V(45*this.d)),l=f*0.95,f*=0.9,v=a1*e,k=0;k<w;++k){j=e*(0.012+0.02*C.cZ(k,1))
i=f-A.i.F(v*(0.04+0.05*C.cZ(k,2))+C.cZ(k,3)*l,l)
o=C.cZ(k,4)*g+Math.sin(a1+k)*e*0.02
$.S()
u=new B.ao(A.O,A.M,A.R,A.S,A.Q)
u.sav(new B.bY(Ap.Be,0.5,A.x,h,0,D.dr8,h,h).aK(0,B.bZ(new B.o(o,i),j)))
d.N(new B.o(o,i),j,u)}this.m2(d,a0,a1,25,A.c,190)},
cBi(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=e.a,g=e.b,f=Math.min(h,g)
for(w=Math.max(4,A.i.V(70*this.d)),v=d.c,u=a0*f,t=a0*0.7,s=a0*0.4,r=0;r<w;++r){q=f*(0.01+0.025*C.cZ(r,1))
p=g+q*4
o=A.i.F(u*(0.03+0.05*C.cZ(r,2))+C.cZ(r,3)*p,p)
n=C.cZ(r,4)
m=Math.sin(t+r)
$.S()
l=new B.ao(A.O,A.M,A.R,A.S,A.Q)
l.r=A.c.j(0.6+0.4*C.cZ(r,5)).gp(0)
l.c=Math.max(0.8,q*0.12)
l.d=A.bu
J.bo(v.save())
v.translate(n*h+m*f*0.03,o-q*2)
v.rotate((s+r)*180/3.141592653589793,0,0)
for(o=-q,n=o*0.55,m=q*0.25,k=o*0.8,j=o*0.25,i=0;i<6;++i){v.rotate(59.99999999999999,0,0)
d.ah(A.J,new B.o(0,o),l)
d.ah(new B.o(0,n),new B.o(m,k),l)
d.ah(new B.o(0,n),new B.o(j,k),l)}v.restore()}this.m2(d,e,a0,40,A.eF,200)},
c4a(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
a0/=2
a1/=2
w=new B.o(a0,a1)
v=a2*0.4
for(u=[-1,1],t=u.length,s=13*A.i.D(a5/2,0,1),r=a3.c,q=a2*0.05,p=a2*0.02,o=q/2,n=-p,m=0+q,l=n+p*2,k=0;k<t;++k){j=u[k]
for(i=j>0,h=0;h<A.i.cD(s);++h){g=1.5707963267948966+j*(0.35+h/13*2.2)
f=Math.cos(g)
e=Math.sin(g)
J.bo(r.save())
r.translate(a0+f*v,a1+e*v)
r.rotate((g+(i?0.6:2.541592653589793))*180/3.141592653589793,0,0)
f=B.bs(new B.o(o,0),p,q)
$.S()
e=new B.ao(A.O,A.M,A.R,A.S,A.Q)
e.sav(D.c8J.aK(0,new B.a1(0,n,m,l)))
a3.bZ(f,e)
r.restore()}}$.S()
a0=B.K()
a0.b=A.a9
a0.c=a2*0.003
a0.r=D.bky.gp(0)
a3.N(w,v*1.08,a0)
d=a5*0.8
this.ta(a3,w.a2(0,new B.o(Math.cos(d)*v*1.08,Math.sin(d)*v*1.08)),a2*0.03,A.c,0.9)
this.m2(a3,a4,a5,40,A.bL,210)},
cv0(a6,a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=a7.a,a2=a7.b,a3=Math.min(a1,a2),a4=x.O,a5=[B.a([A.ia,A.hG],a4),B.a([A.pg,A.iv],a4),B.a([A.aE,A.eK],a4)]
for(w=a8*0.3,v=0+a1,u=0+a2,t=x.dB,s=t.k("bR<ak.E>"),r=t.k("ak.E"),q=a8*1.5,p=x.v,o=x.dN,n=0;n<3;++n){m=$.S()
l=B.a([],p)
k=new B.aG(m.r,A.ai,null,null,l)
j=B.a([],o)
for(m=n*0.2,i=a2*(0.3+m),m=a8*(0.8+m),h=0;h<=40;++h){g=h/40
f=g*a1
e=i+Math.sin(g*5+m+n)*a3*0.1
d=a3*(0.03+0.03*(0.5+0.5*Math.sin(g*7+q+n)))
g=e-d
if(h===0){g=new B.aZ(f,g)
l.push(g)
a0=k.f
if(a0!=null)g.ak(a0)
k.ab()}else{g=new B.aq(f,g)
l.push(g)
a0=k.f
if(a0!=null)g.ak(a0)
k.ab()}j.push(new B.o(f,e+d))}for(m=new B.ds(j,t),m=new B.bR(m,m.gI(0),s);m.C();){i=m.d
if(i==null)i=r.a(i)
i=new B.aq(i.a,i.b)
l.push(i)
g=k.f
if(g!=null)i.ak(g)
k.ab()}m=new B.bt()
l.push(m)
l=k.f
if(l!=null)m.ak(l)
k.ab()
$.S()
m=new B.ao(A.O,A.M,A.R,A.S,A.Q)
l=a5[n]
i=l[0]
m.sav(new B.a8(A.a7,A.aa,A.x,B.a([i,l[1],i],a4),A.n5,new B.mN(w)).aK(0,new B.a1(0,0,v,u)))
m.r=A.c.j(0.85).gp(0)
a6.af(k,m)}this.m2(a6,a7,a8,40,A.c,220)},
c3T(b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=b1.a,a7=b1.b,a8=Math.min(a6,a7),a9=a8*0.09
for(w=[!0,!1],v=w.length,u=a9*2,t=a6+u,s=a9*0.5,r=a9*0.1,q=a9*0.35,p=a9*0.3,o=-a9*2,n=b2*a8,m=n*0.08,l=a7-a9,k=0;k<v;++k){j=w[k]
i=j?0:l
h=A.i.F(m,u)
g=o+(j?h:-h)
f=i+a9
e=i+q
d=e+p
for(;g<t;g=a1){a0=A.o.F(A.i.bh(g/s),5)
a1=g+s
$.S()
a2=new B.ao(A.O,A.M,A.R,A.S,A.Q)
a3=Math.abs(a0)
a2.r=D.a5h[a3].gp(0)
b0.ar(new B.a1(g,i,a1,f),a2)
a2=g+r
a4=new B.ao(A.O,A.M,A.R,A.S,A.Q)
a4.r=D.a5h[A.o.F(a3+2,5)].gp(0)
b0.ar(new B.a1(a2,e,a2+p,d),a4)}}for(w=Math.max(4,A.i.V(36*this.d)),v=b2*3,a5=a7-u,a0=0;a0<w;++a0){a7=A.i.F(n*(0.04+0.05*C.cZ(a0,1))+C.cZ(a0,2)*a5,a5)
u=C.cZ(a0,3)
t=C.cZ(a0,4)
this.ta(b0,new B.o(u*a6,l-a7),a8*(0.01+0.012*t),D.a5h[A.o.F(a0,3)===0?0:4],0.5+0.5*Math.sin(v+a0))}},
cH_(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=a5.a,a2=a5.b,a3=Math.min(a1,a2)
a1/=2
a2/=2
w=new B.o(a1,a2)
for(v=a6*0.2,u=a3*0.03,t=0;t<18;++t){s=t/18*3.141592653589793*2+v
r=Math.cos(s)
q=Math.sin(s)
$.S()
p=new B.ao(A.O,A.M,A.R,A.S,A.Q)
p.c=u
p.r=A.bL.j(0.06).gp(0)
a4.ah(w,new B.o(a1+r*a3*1.2,a2+q*a3*1.2),p)}o=a3*0.16
n=a3*0.17
a2=a2-n-n
m=new B.aG($.S().r,A.ai,null,null,B.a([],x.v))
v=o/2
u=a1-v
m.E(new B.aZ(u,a2))
v=a1+v
m.E(new B.aq(v,a2))
r=a2+n*0.75
q=o*0.1
p=a1+q
l=a2+n*0.8
m.E(new B.c6(v,r,p,l))
v=a2+n*0.95
m.E(new B.aq(p,v))
p=o*0.3
k=a2+n
m.E(new B.aq(a1+p,k))
m.E(new B.aq(a1-p,k))
q=a1-q
m.E(new B.aq(q,v))
m.E(new B.aq(q,l))
m.E(new B.c6(u,r,u,a2))
m.E(new B.bt())
r=u+o
for(v=[-1,1],q=v.length,p=a3*0.012,l=a2+n*0.25,j=o*0.4,i=n*0.35,h=0;h<q;++h){g=v[h]
f=B.bs(new B.o(a1+g*o*0.5,l),i,j)
e=g<0?1.5707963267948966:-1.5707963267948966
d=new B.ao(A.O,A.M,A.R,A.S,A.Q)
d.b=A.a9
d.c=p
d.r=A.aC.gp(0)
a4.cC(f,e,3.141592653589793,!1,d)}a1=B.K()
a1.sav(new B.a8(A.a7,A.aa,A.x,D.dtU,A.aAA,null).aK(0,new B.a1(u,a2,r,k)))
a4.af(m,a1)
a0=A.i.F(a6*0.6,1.4)
if(a0<1)this.ta(a4,new B.o(u+(r-u)*a0,a2+(k-a2)*0.3),a3*0.035,A.c,Math.sin(a0*3.141592653589793))
this.bLF(a4,a5,a6,60)},
bLF(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m=e.a,l=e.b,k=Math.min(m,l)
for(w=Math.max(4,A.i.V(g*this.d)),v=l+20,l=f*k,u=d.c,t=f*3,s=k*0.012,r=k*0.02,q=f*4,p=0;p<w;++p){o=A.i.F(l*(0.1+0.1*C.cZ(p,31))+C.cZ(p,32)*v,v)
n=C.cZ(p,33)
J.bo(u.save())
u.translate(n*m,o-10)
u.rotate((t+p)*180/3.141592653589793,0,0)
o=B.bs(A.J,r*A.i.D(Math.abs(Math.cos(q+p)),0.2,1),s)
$.S()
n=new B.ao(A.O,A.M,A.R,A.S,A.Q)
n.r=D.Rz[A.o.F(p,5)].gp(0)
d.ar(o,n)
u.restore()}},
cz2(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=e.a,h=Math.min(i,e.b)
this.m2(d,e,f,70,A.c,250)
for(w=Math.max(4,A.i.V(12*this.d)),v=-h*0.1,u=h*1.4,t=-0.6*u,s=x.O,r=h*0.006,q=h*0.018,p=0;p<w;++p){o=1.6+C.cZ(p,1)*1.6
n=A.i.F(f+C.cZ(p,2)*o,o)/o
m=i*(C.cZ(p*7+A.i.bh((f+C.cZ(p,2)*o)/o),3)*1.2-0.1)
l=new B.o(m+t*n,v+u*n)
k=Math.max(0,n-0.18)
j=new B.o(m+t*k,v+u*k)
$.S()
k=new B.ao(A.O,A.M,A.R,A.S,A.Q)
k.sav(new B.a8(A.a7,A.aa,A.x,B.a([A.c.j(0),A.bL],s),null,null).aK(0,B.t1(j,l)))
k.c=r
k.d=A.bu
d.ah(j,l,k)
this.ta(d,l,q,A.c,1-n)}},
bGH(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=e.a,k=e.b,j=Math.min(l,k)
for(w=Math.max(4,A.i.V(36*this.d)),v=f*0.2,u=f*0.17,t=f*0.8,s=0;s<w;++s){r=j*(0.03+0.09*C.cZ(s,1))
q=A.i.F(C.cZ(s,2)*l+Math.sin(v+s)*j*0.12,l)
p=A.i.F(C.cZ(s,3)*k+Math.cos(u+s*1.3)*j*0.1,k)
o=0.12+0.18*(0.5+0.5*Math.sin(t+s))
$.S()
n=new B.ao(A.O,A.M,A.R,A.S,A.Q)
m=A.o.F(s,5)
n.r=D.aDn[m].j(o).gp(0)
n.a=A.p7
n.y=new B.hm(A.G,r*0.12)
d.N(new B.o(q,p),r,n)
n=new B.ao(A.O,A.M,A.R,A.S,A.Q)
n.b=A.a9
n.c=Math.max(0.6,r*0.05)
n.r=D.aDn[m].j(o*1.4).gp(0)
d.N(new B.o(q,p),r,n)}},
ckf(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=e.a,k=e.b,j=Math.min(l,k)
l/=2
k/=2
for(w=d.c,v=f*0.05,u=j*0.003,t=j*0.012,s=j*0.03,r=j*0.02,q=0;q<4;++q){J.bo(w.save())
w.translate(l,k)
w.rotate((q*3.141592653589793/4+v)*180/3.141592653589793,0,0)
p=B.bs(A.J,j*(0.28+q*0.05),j*(0.8+q*0.12))
$.S()
o=new B.ao(A.O,A.M,A.R,A.S,A.Q)
o.b=A.a9
o.c=u
o.r=A.bL.j(0.45).gp(0)
d.bZ(p,o)
n=f*(0.9+q*0.25)+q
m=new B.o(Math.cos(n)*(p.c-p.a)/2,Math.sin(n)*(p.d-p.b)/2)
o=new B.ao(A.O,A.M,A.R,A.S,A.Q)
o.r=A.hG.gp(0)
d.N(m,t,o)
o=new B.ao(A.O,A.M,A.R,A.S,A.Q)
o.r=A.ia.j(0.4).gp(0)
o.y=new B.hm(A.G,r)
d.N(m,s,o)
w.restore()}this.m2(d,e,f,45,A.bL,270)},
bU2(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=a5.a,a2=a5.b,a3=Math.min(a1,a2)
for(w=Math.max(4,A.i.V(22*this.d)),v=a4.c,u=x.O,t=a6*0.3,s=a1*0.94,r=a1*0.06,q=a2*0.92,p=a2*0.08,o=0;o<w;++o){n=A.o.F(o,4)
m=C.cZ(o,1)
switch(n){case 0:l=new B.o(m*a1,p)
break
case 1:l=new B.o(m*a1,q)
break
case 2:l=new B.o(r,m*a2)
break
default:l=new B.o(s,m*a2)
break}k=A.i.F(a6+C.cZ(o,2)*4,4)/4
j=A.e2.aA(0,A.i.D(k/0.4,0,1))
i=k>0.85?1-(k-0.85)/0.15:1
h=a3*(0.03+0.03*C.cZ(o,3))*(j*i)
if(h<=0.5)continue
g=D.dhs[A.o.F(o,5)]
J.bo(v.save())
v.translate(l.a,l.b)
v.rotate((t+o)*180/3.141592653589793,0,0)
for(l=-h*0.7,j=h*0.7,i=h*1.3,f=h*1.4,e=0;e<6;++e){v.rotate(59.99999999999999,0,0)
d=B.bs(new B.o(0,l),i,j)
$.S()
a0=new B.ao(A.O,A.M,A.R,A.S,A.Q)
a0.sav(new B.a8(A.b1,A.b7,A.x,B.a([A.c,g],u),null,null).aK(0,B.bs(new B.o(0,l),f,h)))
a4.bZ(d,a0)}$.S()
l=new B.ao(A.O,A.M,A.R,A.S,A.Q)
l.r=A.ia.gp(0)
a4.N(A.J,h*0.3,l)
v.restore()}this.m2(a4,a5,a6,30,A.hG,280)},
c7R(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=a5.a,a2=a5.b,a3=Math.min(a1,a2)
for(w=[0,1],v=w.length,u=a3*0.008,t=a6*0.6,s=a2/2,r=0;r<v;++r){q=w[r]
for(p=q===0,o=a1*q,n=0;n<4;++n){m=A.i.F(t+n/4,1)
l=B.bZ(new B.o(o,s),a3*(0.1+0.6*m))
k=p?-1.0471975511965976:2.0943951023931953
$.S()
j=new B.ao(A.O,A.M,A.R,A.S,A.Q)
j.b=A.a9
j.c=u
j.r=D.azD[n].j((1-m)*0.8).gp(0)
a4.cC(l,k,2.0943951023931953,!1,j)}}for(w=Math.max(4,A.i.V(26*this.d)),i=a2+30,v=a6*a3,u=a6*1.5,t=a4.c,h=0;h<w;++h){g=a2-A.i.F(v*(0.06+0.06*C.cZ(h,1))+C.cZ(h,2)*i,i)
f=C.cZ(h,3)*a1+Math.sin(u+h)*a3*0.04
e=a3*(0.015+0.012*C.cZ(h,4))
d=D.azD[A.o.F(h,4)]
$.S()
a0=new B.ao(A.O,A.M,A.R,A.S,A.Q)
a0.r=d.gp(0)
J.bo(t.save())
t.translate(f,g)
t.rotate(-17.188733853924695,0,0)
a4.bZ(B.bs(A.J,e,e*1.5),a0)
t.restore()
s=f+e*0.65
p=g-e*2.6
o=new B.ao(A.O,A.M,A.R,A.S,A.Q)
o.r=d.gp(0)
o.c=Math.max(1,e*0.18)
a4.ah(new B.o(s,g),new B.o(s,p),o)
if((h&1)===0){o=new B.ao(A.O,A.M,A.R,A.S,A.Q)
o.r=d.gp(0)
o.c=Math.max(1,e*0.3)
a4.ah(new B.o(s,p),new B.o(f+e*1.6,g-e*2),o)}}},
c6g(a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=a8.a,a5=a8.b,a6=Math.min(a4,a5)
a4/=2
a5/=2
w=new B.o(a4,a5)
for(v=a7.c,u=a6*0.003,t=a6*0.004,s=x.v,r=a9*0.08,q=0;q<4;++q){p=8+q*4
o=a6*(0.2+q*0.11)
n=(q&1)===0?1:-1
J.bo(v.save())
v.translate(a4,a5)
v.rotate(r*n*(1+q*0.3)*180/3.141592653589793,0,0)
for(m=q/3,l=-o,k=l*1.16,j=l*0.12,i=l*0.82,h=o*0.12,g=l*1.12,f=6.283185307179586/p*180/3.141592653589793,e=0;e<p;++e){v.rotate(f,0,0)
d=$.S()
a0=B.a([],s)
a1=new B.aG(d.r,A.ai,a3,a3,a0)
a0.push(new B.aZ(0,i))
a1.ab()
d=new B.c6(h,l,0,g)
a0.push(d)
a2=a1.f
if(a2!=null)d.ak(a2)
a1.ab()
d=new B.c6(j,l,0,i)
a0.push(d)
a0=a1.f
if(a0!=null)d.ak(a0)
a1.ab()
d=new B.ao(A.O,A.M,A.R,A.S,A.Q)
d.b=A.a9
d.c=u
d.r=B.ar(A.bL,A.o8,m).j(0.7).gp(0)
a7.af(a1,d)
d=new B.ao(A.O,A.M,A.R,A.S,A.Q)
d.r=A.hG.j(0.8).gp(0)
a7.N(new B.o(0,k),t,d)}v.restore()}a4=a6*0.17
$.S()
a5=B.K()
a5.sav(new B.bY(A.A,0.5,A.x,a3,0,B.a([A.ia.j(0.25),D.Zw],x.O),a3,a3).aK(0,B.bZ(w,a4)))
a7.N(w,a4,a5)
this.m2(a7,a8,a9,30,A.bL,300)},
cBp(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=b2.a,a9=b2.b,b0=Math.min(a8,a9)
for(w=[-1,1],v=w.length,u=70*this.d,t=b0*0.003,s=a8/2,a9*=0.95,r=b3*1.3,q=b0*0.008,p=b0*0.06,o=x.O,n=0;n<v;++n){m=w[n]
l=s+m*a8*0.34
k=Math.sin(r+m)*0.12
j=l+(Math.sin(k)*b0*0.45-m*b0*0.08)
i=a9+-Math.cos(k)*b0*0.45
h=new B.o(j,i)
$.S()
g=new B.ao(A.O,A.M,A.R,A.S,A.Q)
g.r=A.bi.gp(0)
g.c=q
g.d=A.bu
b1.ah(new B.o(l,a9),h,g)
g=new B.ao(A.O,A.M,A.R,A.S,A.Q)
g.sav(new B.bY(A.A,0.5,A.x,null,0,B.a([A.hG,A.ia.j(0.6),D.Zw],o),null,null).aK(0,B.bZ(h,p)))
b1.N(h,p,g)
for(l=Math.max(4,A.i.V(u)),f=0;f<l;++f){e=0.5+0.4*C.cZ(f,1)
d=A.i.F(b3+C.cZ(f,2)*e,e)/e
a0=A.i.bh((b3+C.cZ(f,2)*e)/e)
a1=C.cZ(f*31+a0,3)*3.141592653589793*2
a2=b0*(0.06+0.16*C.cZ(f*17+a0,4))
g=Math.cos(a1)
a3=Math.sin(a1)
a4=j+Math.cos(a1)*a2*d
a5=i+Math.sin(a1)*a2*d
a6=new B.o(a4,a5)
a7=new B.ao(A.O,A.M,A.R,A.S,A.Q)
a7.r=B.ar(A.hG,A.av,d).j(1-d).gp(0)
a7.c=Math.max(0.8,t)
a7.d=A.bu
a7.a=A.p7
b1.ah(new B.o(j+g*a2*d*0.6,i+a3*a2*d*0.6),a6,a7)
if(d>0.6){g=a1+0.7
b1.ah(a6,new B.o(a4+Math.cos(g)*a2*0.15,a5+Math.sin(g)*a2*0.15),a7)
g=a1-0.7
b1.ah(a6,new B.o(a4+Math.cos(g)*a2*0.15,a5+Math.sin(g)*a2*0.15),a7)}}}this.m2(b1,b2,b3,35,A.bL,310)},
bKj(a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=a8.a,a6=a8.b
this.aVr(a7,new B.av(a5,a6*0.75),a9*0.9)
w=Math.min(a5,a6)
for(v=w*0.01,u=w*0.008,t=w*0.012,s=w*0.016,r=w*0.025,q=w*0.035,p=0,o=0;p<a5;){n=w*(0.08+0.1*C.cZ(o,1))
m=a6*(0.14+0.24*C.cZ(o,2))
l=a6-m
k=new B.a1(p,l,p+n,l+m)
$.S()
j=new B.ao(A.O,A.M,A.R,A.S,A.Q)
j.sav(D.c9F.aK(0,k))
a7.ar(k,j)
i=A.i.bh(n/r)
h=A.i.bh(m/q)
for(j=p+u,l+=t,g=o*50,f=0;f<i;++f)for(e=j+f*w*0.025,d=e+t,a0=g+f,a1=f*1.7,a2=0;a2<h;++a2){if(!(Math.sin(a9*(0.3+C.cZ(a0,a2))+a1+a2*2.3+o)>0.2))continue
a3=l+a2*w*0.035
$.S()
a4=new B.ao(A.O,A.M,A.R,A.S,A.Q)
a4.r=A.bL.j(0.85).gp(0)
a7.ar(new B.a1(e,a3,d,a3+s),a4)}p+=n+v;++o}},
aD(d){return d.b!==this.b||d.d!==this.d}}
C.b1o.prototype={
B(d){var w,v=null,u=new C.cfj(),t=new C.cfl(this,u,d),s=B.a([u.$4$child$label$onTap$selected(B.q(v,D.ask,A.f,A.c.j(0.05),v,v,v,v,v,v,v,v,v,v),"None",new C.cfk(this),this.c.a.length===0)],x.p)
for(w=0;w<32;++w)s.push(t.$1(D.If[w]))
return B.bW(A.bH,s,A.bs,v,12,10)}}
C.a_H.prototype={
S(){return new C.aBO()}}
C.aBO.prototype={
gwk(){var w=this.d
return w===$?this.d=this.a.c:w},
gb1U(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new B.au(new B.ba(w.b,A.b5,A.aP),$.ax())}return v},
gazE(){var w,v,u=this,t=u.f
if(t===$){w=u.a.c.gaNq()
v=$.ax()
u.f!==$&&B.bE()
t=u.f=new B.au(new B.ba(w,A.b5,A.aP),v)}return t},
t(){var w=this.gb1U(0),v=$.ax()
w.U$=v
w.P$=0
w=this.gazE()
w.U$=v
w.P$=0
this.a3()},
a08(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$a08=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hX().CL(90,700,700,A.eP),$async$a08)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fq(),$async$a08)
case 8:p=e
o=q.b.toLowerCase()
n=J.ajg(o,".png")?"image/png":"image/jpeg"
r.m(new C.dig(r,n,p))
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
return B.i($async$a08,v)},
b1T(d){var w=null,v=A.c.j(0.07)
return B.bz(w,new B.b6(4,B.m(12),A.a1),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,A.VD,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=C.aig(p.gwk().a)
if(n==null)n=A.d.gH(D.If)
w=p.gwk()
v=p.r
u=x.p
v=B.E(new B.an(A.a0,o,A.ac,A.t,B.a([B.bS(0,new C.Op(p.gwk(),!1,!0,new B.bA(w.a+v,x.W)),0,0,0),B.ap(o,B.IK(A.n3,new C.dil(d),B.o1(o,A.b6,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o),o,o,8,o,8,o),B.ap(o,B.IK(A.arb,new C.dim(p),B.o1(o,A.b6,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),"Play again"),o,o,o,8,8,o)],u),o),1)
w=B.d(n.b,o,o,o,o,o,o,E.aVZ,o,o,o)
t=B.E(B.aM(o,A.Z,!1,o,!0,A.t,o,B.aO(),p.gb1U(0),o,o,o,o,o,2,p.b1T("Big words"),A.y,!0,o,!0,o,!1,o,A.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.din(p),o,o,o,!1,o,o,!1,o,!0,o,A.ad,o,o,o,o,o,o,o,o,o,o,o,A.h1,!0,A.a5,o,A.ao,o,o,o,o),1)
s=A.c.j(0.07)
r=B.L(A.ia.j(0.6),A.r,1)
if(p.gwk().d.length===0)q=D.bWX
else{q=C.hwH(p.gwk().d)
if(q==null)q=new Uint8Array(0)
q=B.hV(B.fR(q,A.A,o,o,A.ck,A.c_,!1,o,!1,o,o),A.aq)}r=B.a([t,A.af,B.az(o,B.q(o,q,A.f,o,o,new B.p(s,o,r,o,o,o,A.a6),o,48,o,o,o,o,o,48),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gce2(),o,o,o,o,o,o,!1,A.a4)],u)
if(p.gwk().d.length!==0)r.push(B.aI(o,o,o,o,H.Q0,o,o,o,new C.dio(p),o,o,o,o,"Remove logo",o))
return B.c4(o,A.w,B.bm(!0,B.x(B.a([v,B.q(o,B.x(B.a([w,A.W,B.A(r,A.l,o,A.e,A.j,0,o,o),A.T,B.aM(o,A.Z,!1,o,!0,A.t,o,B.aO(),p.gazE(),o,o,o,o,o,2,p.b1T("Line under it"),A.y,!0,o,!0,o,!1,o,A.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.dip(p),o,o,o,!1,o,o,!1,o,!0,o,A.ad,o,o,o,o,o,o,o,o,o,o,o,A.dk,!0,A.a5,o,A.ao,o,o,o,o),A.ae,B.dh(D.bVQ,D.h0g,new C.diq(p,d),B.bp(A.aC,o,o,o,A.w,o,A.cq,o,new B.b9(B.m(14),A.a1),o,o,o))],u),A.al,o,A.e,A.P,0,A.p),A.f,o,o,D.b7N,o,o,o,o,A.GP,o,o,o)],u),A.l,o,A.e,A.j,0,A.p),!0,!1,A.ag,!0,!0),o,!1,!1,o,o)}}
C.aNy.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.a01.prototype={
S(){return new C.biy(new B.au(A.ax,$.ax()))}}
C.biy.prototype={
t(){var w=this.d
w.U$=$.ax()
w.P$=0
this.a3()},
B(d){var w,v,u,t,s,r,q,p,o=null,n=B.P(d).ax.a===A.H,m=n?A.c:A.a_,l=n?A.aR:A.an,k=B.aF(d,A.c1,x.w).w,j=n?A.a_:A.c,i=B.m(28),h=B.L(n?A.bA:A.bl,A.r,1),g=x.p,f=B.A(B.a([B.E(B.d("Choose an icon",o,o,o,o,o,o,B.l(o,o,m,o,o,o,o,o,o,o,o,19,o,o,A.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),1),B.aI(o,o,o,o,B.X(A.cB,l,o,o,o,o),o,o,o,new C.dp4(d),o,o,o,o,o,o)],g),A.l,o,A.e,A.j,0,o,o),e=B.a([],g)
for(w=0;w<5;++w){v=D.d0a[w]
u=B.d(v.a.toUpperCase(),o,o,o,o,o,o,new B.G(!0,l,o,o,o,o,10.5,A.u,o,1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o)
t=B.a([],g)
for(v=J.aT(v.b);v.C();){s=v.gR(v)
r=new B.aN(12,12)
q=new B.aN(12,12)
p=n?A.c.j(0.06):A.cd
t.push(B.aP(!1,new B.be(r,r,r,r),!0,B.q(A.A,B.d(s,o,o,o,o,o,o,A.pX,o,o,o),A.f,o,o,new B.p(p,o,o,new B.be(q,q,q,q),o,o,A.n),o,44,o,o,o,o,o,44),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.dp5(this,s),o,o,o,o,o,o,o))}A.d.v(e,B.a([new B.D(A.hJ,u,o),new B.D1(A.bH,6,6,A.bs,t,o)],g))}e.push(A.aB)
e.push(B.d("YOUR OWN",o,o,o,o,o,o,B.l(o,o,l,o,o,o,o,o,o,o,o,10.5,o,o,A.u,o,o,!0,o,1,o,o,o,o,o,o),o,o,o))
e.push(A.T)
v=B.l(o,o,m,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
u=n?A.br:A.aS
e.push(B.A(B.a([B.E(B.aM(o,A.Z,!1,o,!0,A.t,o,B.aO(),this.d,o,o,o,o,o,2,B.bz(o,new B.b6(4,B.m(14),A.a1),o,o,o,o,o,o,!0,o,o,o,o,o,o,u,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,"Type or paste any icon",o,o,o,o,o,!0,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),A.y,!0,o,!0,o,!1,o,A.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,A.ad,o,o,o,o,o,o,o,o,o,o,o,v,!0,A.a5,o,A.ao,o,o,o,o),1),A.af,B.bJ(A.aX_,o,new C.dp6(this),o)],g),A.l,o,A.e,A.j,0,o,o))
e.push(A.T)
return B.bm(!0,B.q(o,B.x(B.a([f,new B.dm(1,A.co,B.cl(e,o,o,o,o,o,A.ah,!0),o)],g),A.E,o,A.e,A.P,0,A.p),A.f,o,new B.aY(0,1/0,0,k.a.b*0.8),new B.p(j,o,h,i,o,o,A.n),o,o,o,A.ux,A.a0A,o,o,o),!0,!1,A.ag,!0,!0)}}
C.bhT.prototype={
a5(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=new B.e2()
a1.cY(this.c)
w=this.b
v=w/6.283185307179586
$.S()
u=B.K()
u.y=A.Os
t=B.K()
for(s=this.d,r=w*2,q=a3.a,p=a3.b,o=0;o<46;++o){n=a1.ai()
m=a1.ai()
l=a1.ai()
k=0.8+a1.ai()*2.2
j=Math.sin(w*(3+a1.az(4))+o)
i=A.i.F(m-v*(0.4+l*0.9),1)
l=(n+Math.sin(r+o)*0.012)*q
h=i*p
g=new B.o(l,h)
if(a1.ai()<0.25){f=B.ar(s,A.c,0.85)
f.toString}else f=s
e=f.j(A.i.D(0.35+j*0.35,0.05,0.85))
u.r=e.j(e.a*0.5).gp(0)
a2.N(g,k*2.4,u)
t.r=e.gp(0)
a2.N(g,k,t)
if(j>0.85&&k>2){d=k*4*(j-0.85)/0.15
$.S()
a0=new B.ao(A.O,A.M,A.R,A.S,A.Q)
a0.r=e.gp(0)
a0.c=1
a2.ah(new B.o(l-d,h),new B.o(l+d,h+0),a0)
a2.ah(new B.o(l,h-d),new B.o(l+0,h+d),a0)}}},
aD(d){return d.b!==this.b}}
C.bhA.prototype={
a5(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=B.bn(new B.a1(0,0,0+a3.a,0+a3.b),A.jM),e=this.b,d=Math.sin(e*2),a0=$.S(),a1=B.K()
a1.b=A.a9
a1.c=6
w=this.c
a1.r=w.j(0.12+(0.5+d*0.5)*0.18).gp(0)
a1.y=A.mf
a2.am(f,a1)
a1=x.v
a0=new B.aG(a0.r,A.ai,g,g,B.a([],a1))
a0.E(new B.j8(f))
v=new B.TZ(new B.ry(B.xN(a0),!1,B.a([],x.X))).gH(0)
a0=v.a
d=v.b
a0.iy()
u=a0.e
t=u[d].b
t===$&&B.c()
t=t.a.length()
s=e/6.283185307179586*t
w=B.ar(w,A.c,0.8)
w.toString
for(e=a0.a,r=e.a,q=t*0.14,p=0;p<2;++p){o=A.i.F(s+p*t/2,t)
for(n=0;n<10;n=m){m=n+1
l=m/10
$.S()
k=new B.ao(A.O,A.M,A.R,A.S,A.Q)
k.b=A.a9
k.d=A.bu
k.c=1.5+2*n/10
k.r=w.j(l).gp(0)
j=A.i.F(o-q*(1-n/10),t)
i=A.i.F(o-q*(1-l),t)
l=e.b
if(j<=i)a2.af(new B.aG(r,l,g,new B.cu([v,j,i,!0]),B.a([],a1)),k)
else{a2.af(new B.aG(r,l,g,new B.cu([v,j,t,!0]),B.a([],a1)),k)
a2.af(new B.aG(r,e.b,g,new B.cu([v,0,i,!0]),B.a([],a1)),k)}}a0.iy()
h=u[d].Di(o).a
$.S()
l=new B.ao(A.O,A.M,A.R,A.S,A.Q)
l.r=w.gp(0)
l.y=Ad.os
a2.N(h,5,l)
l=new B.ao(A.O,A.M,A.R,A.S,A.Q)
l.r=A.c.gp(0)
a2.N(h,2,l)}},
aD(d){return d.b!==this.b}}
C.bqI.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new B.e2()
f.cY(this.c)
w=e.a*(0.2+f.ai()*0.6)
v=f.h2()?-0.1:1.1
v=e.b*v
u=new B.o(w,v)
t=e.gaoc()*1.4
for(s=this.d,r=x.O,q=this.b,p=q*0.25,q*=2,o=x.v,n=0;n<14;++n){m=p+n*3.141592653589793*2/14
l=0.06+0.04*Math.sin(q+n)
k=$.S()
j=B.a([],o)
i=new B.aG(k.r,A.ai,g,g,j)
j.push(new B.aZ(w,v))
i.ab()
k=m-l
k=new B.aq(w+Math.cos(k)*t,v+Math.sin(k)*t)
j.push(k)
h=i.f
if(h!=null)k.ak(h)
i.ab()
k=m+l
k=new B.aq(w+Math.cos(k)*t,v+Math.sin(k)*t)
j.push(k)
h=i.f
if(h!=null)k.ak(h)
i.ab()
k=new B.bt()
j.push(k)
j=i.f
if(j!=null)k.ak(j)
i.ab()
k=new B.ao(A.O,A.M,A.R,A.S,A.Q)
j=B.a([s.j(0.16),s.j(0)],r)
k.sav(new B.alQ(u,t,j,g,A.x,g,g,0))
k.y=A.kU
d.af(i,k)}},
aD(d){return d.b!==this.b}}
C.bcp.prototype={
a5(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=new B.e2()
e.cY(this.c*7+3)
for(w=this.d,v=a0.a,u=Math.abs(v),t=a0.b,s=Math.abs(t),r=this.b,q=r*0.8,p=r*2,o=0;o<16;++o){n=e.ai()
m=e.ai()
l=Math.min(u,s)*(0.03+e.ai()*0.09)
k=e.ai()*3.141592653589793*2
j=(n+Math.sin(r+k)*0.04)*v
i=(m+Math.cos(q+k)*0.05)*t
h=0.08+0.1*(0.5+0.5*Math.sin(p+k))
if((o&1)===0)g=w
else{f=B.ar(w,A.c,0.6)
f.toString
g=f}$.S()
f=new B.ao(A.O,A.M,A.R,A.S,A.Q)
f.r=g.j(h).gp(0)
f.y=new B.hm(A.G,l*0.35)
d.N(new B.o(j,i),l,f)
f=new B.ao(A.O,A.M,A.R,A.S,A.Q)
f.b=A.a9
f.c=1
f.r=B.ar(g,A.c,0.5).j(h*0.9).gp(0)
d.N(new B.o(j,i),l,f)}},
aD(d){return d.b!==this.b}}
C.bc2.prototype={
a5(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=new B.e2()
e.cY(this.c+11)
for(w=this.b,v=a0.b,u=v*0.04,t=this.d,s=v*0.08,r=a0.a,q=r/24,p=w*2,o=x.v,n=0;n<3;++n){m=v*(0.25+n*0.25+(e.ai()-0.5)*0.1)
l=v*(0.06+e.ai()*0.05)
k=e.ai()*3.141592653589793*2
j=$.S()
i=B.a([],o)
h=new B.aG(j.r,A.ai,null,null,i)
i.push(new B.aZ(0,m))
h.ab()
for(g=0;g<=r;g+=q){j=g/r
j=new B.aq(g,m+Math.sin(j*3.141592653589793*2+w+k)*l+Math.sin(j*7+p)*l*0.25)
i.push(j)
f=h.f
if(f!=null)j.ak(f)
h.ab()}$.S()
j=new B.ao(A.O,A.M,A.R,A.S,A.Q)
j.b=A.a9
j.c=s
j.d=A.bu
if(n===1){i=B.ar(t,A.c,0.5)
i.toString}else i=t
j.r=i.j(0.07+0.04*Math.sin(w+n)).gp(0)
j.y=new B.hm(A.G,u)
d.af(h,j)}},
aD(d){return d.b!==this.b}}
C.bxP.prototype={
a5(d,e){var w,v,u=new B.a1(0,0,0+e.a,0+e.b),t=Math.sin(this.b)
$.S()
w=B.K()
t=(0.5+0.5*t)*0.12
w.sav(new B.bY(A.A,0.95,A.x,null,0,B.a([A.L,A.w.j(0.28+t)],x.O),D.d8l,null).aK(0,u))
d.ar(u,w)
w=u.cn(-3)
v=B.K()
v.b=A.a9
v.c=2
v.r=this.c.j(0.1+t).gp(0)
v.y=A.kU
d.ar(w,v)},
aD(d){return d.b!==this.b}}
C.buN.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this.b/6.283185307179586*3
for(w=e.a,v=Math.abs(w),u=e.b,t=Math.abs(u),s=this.d,r=this.c*31+A.i.bh(f)*7,q=0;q<7;++q){p=new B.e2()
p.cY(r+q)
o=p.ai()*w
n=p.ai()*u
m=Math.sin(A.i.F(A.i.F(f,1)+q/7,1)*3.141592653589793)
if(m<0.05)continue
l=Math.min(v,t)*(0.02+p.ai()*0.025)*m
k=B.ar(s,A.c,0.7).j(m)
$.S()
j=new B.ao(A.O,A.M,A.R,A.S,A.Q)
j.r=k.gp(0)
j.c=1.4
j.d=A.bu
d.ah(new B.o(o-l,n),new B.o(o+l,n+0),j)
i=l*1.4
d.ah(new B.o(o,n-i),new B.o(o+0,n+i),j)
i=l*0.45
h=o-i
g=o+i
j.c=0.8
d.ah(new B.o(h,n-i),new B.o(g,n+i),j)
i=-l*0.45
d.ah(new B.o(h,n-i),new B.o(g,n+i),j)
i=new B.ao(A.O,A.M,A.R,A.S,A.Q)
i.r=A.c.j(m*0.9).gp(0)
i.y=new B.hm(A.G,l*0.3)
d.N(new B.o(o,n),l*0.35,i)}},
aD(d){return d.b!==this.b}}
C.btV.prototype={
a5(d,e){var w,v,u=this.b/6.283185307179586*2.2-0.6
if(u<-0.3||u>1.3)return
w=new B.a1(0,0,0+e.a,0+e.b)
$.S()
v=B.K()
v.a=A.p7
v.sav(new B.a8(A.aA,A.aF,A.x,B.a([A.L,B.ar(this.c,A.c,0.6).j(0.16),A.L],x.O),B.a([A.i.D(u-0.15,0,1),A.i.D(u,0,1),A.i.D(u+0.15,0,1)],x.x),null).aK(0,w))
d.ar(w,v)},
aD(d){return d.b!==this.b}}
C.bgV.prototype={
a5(d,e){var w,v,u,t,s,r=e.gdA(),q=0.55+0.45*Math.sin(this.b)
$.S()
w=B.K()
w.b=A.a9
w.c=1.4
w.d=A.bu
v=this.d
w.r=v.j(0.55+q*0.35).gp(0)
u=B.K()
u.b=A.a9
u.c=4
u.r=v.j(0.12*q).gp(0)
u.y=A.uE
r=new C.dhY(this,r*0.16,d,u,w)
t=e.gdA()*0.045
r.$3(new B.o(t,t),1,1)
v=e.a-t
r.$3(new B.o(v,t),-1,1)
s=e.b-t
r.$3(new B.o(t,s),1,-1)
r.$3(new B.o(v,s),-1,-1)},
aD(d){return d.b!==this.b}}
C.yg.prototype={}
C.JL.prototype={
a7(){return"NgmySlideElementType."+this.b}}
C.asX.prototype={
a7(){return"NgmySlideAspectRatio."+this.b}}
C.vj.prototype={
a7(){return"NgmySlideShapeKind."+this.b}}
C.mV.prototype={
a7(){return"NgmySlideLayout."+this.b}}
C.hF.prototype={
a7(){return"NgmySlideTransition."+this.b}}
C.eQ.prototype={
hQ(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=w.Q,l=w.as,k=w.at,j=w.ay,i=w.ch,h=w.cx,g=w.cy,f=w.db,e=w.dy,d=w.fy
return C.er(l,g,m,n,f,j,q,o,p,w.go,s,w.a,k,d,w.fx,w.dx,w.k2,w.id,h,w.ax,i,w.CW,r,w.fr,w.k3,w.k1,e,w.b,t,v,u)},
aj(){var w,v=this,u=B.T(x.N,x.z)
u.n(0,"id",v.a)
u.n(0,"type",v.b.b)
u.n(0,"x",v.c)
u.n(0,"y",v.d)
u.n(0,"w",v.e)
u.n(0,"h",v.f)
u.n(0,"text",v.r)
u.n(0,"fontSize",v.w)
u.n(0,"fontWeight",v.x.gdR(0))
u.n(0,"fontStyle",v.y.a)
u.n(0,"decoration",C.ibS(v.z))
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
C.m1.prototype={
hQ(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=B.U(n).k("N<1,eQ>")
n=B.C(new B.N(n,new C.ckW(),m),m.k("ak.E"))
return C.t_(t,s,o,q,n,w.a,u,v,p,w.b,r)},
aj(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=B.U(n).k("N<1,a9<n,@>>")
n=B.C(new B.N(n,new C.ckX(),m),m.k("ak.E"))
return B.I(["id",w.a,"title",w.b,"notes",v,"layout",u.b,"background",t,"backgroundEnd",s,"transition",r.b,"durationSeconds",q,"slideDesignId",p,"designRevision",o,"elements",n],x.N,x.z)}}
C.hQ.prototype={
gbdl(){var w=this.Q,v=w==null?null:A.a.i(w)
if(v==null)v=""
if(v.length===0)return null
return B.bh(v)},
gTb(){if(!C.kN(this.w))return!1
var w=this.gbdl()
if(w==null)return!1
return new B.V(Date.now(),0,!1).d3(w.bT())},
hQ(){var w,v,u,t,s,r,q,p=this,o=p.b,n=p.c,m=p.d,l=p.e,k=p.f,j=p.w,i=p.y,h=p.z,g=p.Q,f=p.as,e=p.at,d=p.ax,a0=p.ay,a1=p.ch,a2=p.CW,a3=p.cx
if(a3==null)a3=null
else a3=B.C(a3,x.N)
w=p.cy
if(w==null)w=null
else w=B.C(w,x.N)
v=p.db
u=p.dx
t=p.dy
s=p.fr
r=p.r
q=B.U(r).k("N<1,m1>")
r=B.C(new B.N(r,new C.ckL(),q),q.k("ak.E"))
return C.Cr(g,w,a2,a3,m,l,a0,j,s,v,t,u,p.a,d,a1,p.x,o,e,f,r,n,i,h,k)},
aj(){var w,v,u=this,t=B.T(x.N,x.z)
t.n(0,"id",u.a)
t.n(0,"name",u.b)
t.n(0,"themeId",u.c)
t.n(0,"aspectRatio",u.d.b)
t.n(0,"autoAdvanceSeconds",u.e)
t.n(0,"updatedAt",u.f.aa().ag())
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
v=B.U(w).k("N<1,a9<n,@>>")
w=B.C(new B.N(w,new C.ckM(),v),v.k("ak.E"))
t.n(0,"slides",w)
return t}}
C.k0.prototype={}
C.b3x.prototype={
B(d){return B.cq(new C.ckR(this))}}
C.aq0.prototype={
S(){return new C.blP(null,null)}}
C.blP.prototype={
gb1V(){var w,v=this,u=v.d
if(u===$){w=B.bl(null,A.fJ,null,1,null,v)
w.cL(0)
v.d!==$&&B.bE()
v.d=w
u=w}return u},
t(){this.gb1V().t()
this.bz0()},
B(d){return B.c5(this.gb1V(),new C.dQB(),this.a.c)}}
C.aNh.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.aeM.prototype={
QG(d,e,f,g){return this.bTG(d,e,f,g)},
bTG(d,e,f,g){var w=0,v=B.j(x.H),u,t,s
var $async$QG=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:w=3
return B.b(e.$0(),$async$QG)
case 3:s=i
if(d.e==null){w=1
break}B.a6(d,!1).O(null)
t=d.L(x.q).f
t.T(B.b3(null,null,null,null,null,A.t,null,B.d(s?f:g,null,null,null,null,null,null,null,null,null,null),null,A.em,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$QG,v)},
B(d){var w=this,v=null,u=B.m(22),t=B.L(A.c.j(0.08),A.r,1),s=B.a([new B.ab(0,A.G,A.w.j(0.35),A.dp,24)],x.V),r=B.as(B.q(v,v,A.f,v,v,new B.p(A.aT,v,v,B.m(99),v,v,A.n),v,4,v,v,v,v,v,40),v,v,v),q=w.d,p=B.d(q?"Print your invoice":"Save your PDF",v,v,v,v,v,v,A.dq,A.K,v,v),o=q?"One full letter page \u2014 tap Share then Print, or open in Safari.":w.c,n=q?3:2,m=x.p
n=B.a([r,A.aO,p,A.am,B.d(o,v,n,A.a2,v,v,v,B.l(v,v,A.c.j(0.55),v,v,v,v,v,v,v,v,12,v,v,A.a8,v,v,!0,v,v,v,v,v,v,v,v),A.K,v,v)],m)
if(!q)A.d.v(n,B.a([A.aw,B.d(w.c,v,2,A.a2,v,v,v,B.l(v,v,A.c.j(0.45),v,v,v,v,v,v,v,v,11,v,v,A.a8,v,v,!0,v,v,v,v,v,v,v,v),A.K,v,v)],m))
n.push(A.dc)
n.push(B.A(B.a([B.E(new C.af2(A.i3,"Download",A.c4,new C.eCz(w,d),!0,v),1),A.au,B.E(new C.af2(A.uT,"Share",A.bn,new C.eCA(w,d),!1,v),1),A.au,B.E(new C.af2(A.hP,"Safari",A.b2,new C.eCB(w,d),!1,v),1)],m),A.l,v,A.e,A.j,0,v,v))
n.push(A.aB)
n.push(B.bO(!1,B.d("Cancel",v,v,v,v,v,v,B.l(v,v,A.c.j(0.6),v,v,v,v,v,v,v,v,v,v,v,A.U,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,!0,v,v,v,new C.eCC(d),v,v))
return B.bm(!0,new B.D(A.qD,B.x(B.a([B.q(v,B.x(n,A.al,v,A.e,A.j,0,A.p),A.f,v,v,new B.p(A.jl,v,t,u,s,v,A.n),v,v,v,v,A.GW,v,v,1/0)],m),A.l,v,A.e,A.P,0,A.p),v),!0,!1,A.ag,!0,!0)}}
C.af2.prototype={
B(d){var w=this,v=null,u=B.m(16),t=w.r,s=t?w.e.j(0.22):A.c.j(0.06),r=B.m(16),q=B.L(t?w.e.j(0.55):A.c.j(0.1),A.r,1),p=t?w.e:A.c
p=B.X(w.c,p,v,v,v,26)
return B.aH(!1,A.a3,!0,v,B.aP(!1,u,!0,B.ez(B.x(B.a([p,A.T,B.d(w.d,v,v,v,v,v,v,B.l(v,v,A.c,v,v,v,v,v,v,v,v,12,v,v,t?A.u:A.U,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.l,v,A.e,A.P,0,A.p),v,new B.p(s,v,q,r,v,v,A.n),v,D.bHZ,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),A.f,A.L,0,v,v,v,v,v,A.aj)}}
C.b3v.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.c,f=g.db
if(f==="__kiapo_video__"||A.a.a_(f,"__kiapo_video___"))return new C.as3(g.at,i.d,i.as,i.at,h)
switch(g.b.a){case 0:f=i.r
w=i.d
if(f){v=2*w
u=new B.R(v,w,v,w)}else{v=6*w
u=new B.R(v,10*w,v,12*w)}t=i.ce3().ame(1.35)
s=B.axA(h,h,h,g.w*w,h,h,!0,1.35,h,h,h)
v=g.as
r=i.bED(v)
if(i.e&&i.w!=null)q=B.aM(h,A.Z,!1,h,!0,A.t,h,B.aO(),i.w,A.bn,h,h,h,h,2,D.c4m,A.y,!0,h,!0,h,!1,i.x,A.ak,h,h,h,new B.bA("slide_tf_"+g.a,x.W),h,A.xi,h,h,h,h,1,h,!1,"\u2022",h,i.y,h,h,h,!1,h,h,!1,h,!0,h,A.ad,h,h,h,h,h,h,h,h,h,h,s,t,!0,v,A.AI,A.ao,h,A.Vf,h,h)
else{v=g.r
p=A.a.i(v)
o=p.length===0||p.toLowerCase()==="click to edit text"||p.toLowerCase()==="tap to edit text"
n=o&&i.as
m=f&&A.a.q(g.db,"mahari_")
if(!n)f=g.k1.length===0&&!g.k2
else f=!0
if(f){if(n)f="Tap to select \xb7 Edit to type"
else f=o?"":v
v=A.a.gX(v)
w=n?t.cOR(B.b0(g.Q).j(0.45),A.cK):t
p=g.as
l=m?1:h
k=m?A.eR:A.EE
p=B.d(f,new B.bA("slide_txt_"+g.a+"_"+v,x.W),l,k,h,!m,s,w,p,h,h)
g=p}else{f=A.a.gX(v)
v=g.k1
p=g.r
if(v==="outline"){l=g.k2
k=l?A.V6:s
$.S()
j=B.K()
j.b=A.a9
j.c=3*w
j.e=A.dT
j.r=A.as.gp(0)
j=i.cv3(p,t,k,j)
k=g.r
w=new B.an(A.a0,h,A.ac,A.t,B.a([j,i.cv1(k,t,l?A.V6:s)],x.p),h)}else w=i.cv2(p,t,g.k2?A.V6:s,m)
v=new B.mq(w,new B.bA("slide_txt_"+g.a+"_"+f+"_"+v,x.W))
g=v}q=B.az(A.c2,g,A.y,!1,h,i.Q,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,i.z,h,h,h,h,h,h,!1,A.a4)}return new B.D(u,new B.bL(r,h,h,q,h),h)
case 1:case 4:return i.c2h()
case 3:return i.cmD()
case 2:return B.b2(h,h,h,new C.b3s(g,h),A.fQ)
case 5:g=g.r
return new C.b3u(g,!i.e&&i.z==null,h)}},
ce3(){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.c,l=B.b0(m.Q),k=m.x,j=m.y,i=m.z,h=n,g=n,f=n,e=n
switch(m.k1){case"caps":h=3*o.d
w=l
k=A.u
break
case"elegant":h=1.2*o.d
w=l
k=A.k4
j=A.cK
break
case"shadow":v=o.d
e=B.a([new B.cU(D.ahR,new B.o(0,4*v),8*v)],x.r)
w=l
break
case"neon":v=o.d
e=B.a([new B.cU(l,A.J,6*v),new B.cU(l,A.J,16*v),new B.cU(l.j(0.8),A.J,30*v)],x.r)
w=l
break
case"marker":k=A.u
g=A.bk
w=A.as
break
case"stamp":h=6*o.d
w=l
k=A.u
i=A.nd
break
case"retro":v=o.d
h=2*v
v=4*v
e=B.a([new B.cU(A.bE,new B.o(v,v),0)],x.r)
w=l
k=A.u
break
case"threed":v=B.ar(l,A.w,0.65)
v.toString
u=B.a([],x.r)
for(t=o.d,s=1;s<=6;++s){r=s*t
u.push(new B.cU(v,new B.o(r,r),0))}e=u
w=l
k=A.u
break
case"glitch":v=o.d
h=2*v
e=B.a([new B.cU(A.b9,new B.o(-3*v,0),0),new B.cU(A.ay,new B.o(3*v,0),0)],x.r)
w=l
k=A.u
break
case"fire":v=o.d
e=B.a([new B.cU(A.cI,A.J,8*v),new B.cU(A.ay,new B.o(0,-3*v),18*v)],x.r)
k=A.u
w=A4.y1
break
case"ice":v=o.d
e=B.a([new B.cU(A.aG,A.J,10*v),new B.cU(A.cD,A.J,22*v)],x.r)
k=A.U
w=A.eF
break
case"chalk":h=o.d
e=B.a([new B.cU(l.j(0.45),A.J,3*h)],x.r)
w=l
k=A.k4
break
case"comic":v=B.ar(l,A.w,0.85)
v.toString
u=B.a([],x.r)
for(t=o.d,q=0;q<8;++q){p=D.das[q]
u.push(new B.cU(v,new B.o(p.a*t,p.b*t),0))}u.push(new B.cU(v,new B.o(5*t,6*t),0))
e=u
w=l
k=A.u
break
case"gold":$.S()
f=B.K()
v=o.d
f.sav(D.c76.aK(0,new B.a1(0,0,0+900*v,0+m.w*v*1.6)))
e=B.a([new B.cU(A.Fy,new B.o(0,3*v),5*v)],x.r)
w=l
k=A.u
break
case"sunset":$.S()
f=B.K()
v=o.d
f.sav(D.c7s.aK(0,new B.a1(0,0,0+900*v,0+m.w*v*1.6)))
w=l
k=A.u
break
case"softglow":e=B.a([new B.cU(l,A.J,14*o.d)],x.r)
w=l
k=A.a8
break
case"lowercase":h=2*o.d
w=l
k=A.cE
break
case"double":v=o.d
u=5*v
v=10*v
e=B.a([new B.cU(l.j(0.45),new B.o(u,u),0),new B.cU(l.j(0.2),new B.o(v,v),0)],x.r)
w=l
break
case"whisper":h=6*o.d
w=l
k=A.k4
break
default:w=l}v=m.w
u=f==null?w:n
m=m.k3
m=m!==0?B.b0(m):g
return B.l(n,m,u,n,i,n,n,n,n,n,n,v*o.d,j,n,k,f,1.25,!0,n,h,n,n,n,e,n,n)},
aBF(d,e,f,g,h){var w,v,u,t,s=null,r=this.c,q=r.k1
if(D.fc_.q(0,q))w=d.toUpperCase()
else w=q==="lowercase"?d.toLowerCase():d
q=new C.ckP(h)
v=r.k2?C.ioS(w,e,q):s
if(v==null){q=q.$1(e)
r=r.as
u=g?1:s
t=g?A.eR:A.EE
return B.d(w,s,u,t,s,!g,f,q,r,s,s)}return B.Za(B.cQ(v,s,s,s,s,s,s,s,s,s,s),s,s,q.$1(e),r.as)},
cv3(d,e,f,g){return this.aBF(d,e,f,!1,g)},
cv1(d,e,f){return this.aBF(d,e,f,!1,null)},
cv2(d,e,f,g){return this.aBF(d,e,f,g,null)},
bED(d){switch(d.a){case 2:return A.A
case 1:case 5:return A.aa
default:return A.a7}},
c2h(){var w,v,u=this,t=null,s=u.c,r=s.at
if(r==null||!A.a.a_(r,"data:image")){if(!u.as)return A.bM
return B.as(B.X(s.b===D.ls?A.HR:A.CI,A.aD,t,t,t,32),t,t,t)}w=u.bHH(r)
if(s.b===D.ls){s=B.m(6)
v=2*u.d
return B.q(t,w,A.f,t,t,new B.p(A.c,t,B.L(A.cx,A.r,1),s,B.a([new B.ab(0,A.G,A.w.j(0.08),A.dM,6)],x.V),t,A.n),t,1/0,t,t,new B.R(v,v,v,v),t,t,1/0)}if(s.go.length!==0||s.id.length!==0){v=u.aQz(r,!0)
return C.fPE(s.go,v,s.id)}return w},
aQz(d,e){var w,v,u,t
try{w=C.ipc(d)
u=this.c.db
v=u==="marriage_locked_bg"||A.a.c7(u,"_bg")
u=B.cq(new C.ckO(this,w,v,e))
return u}catch(t){return D.afi}},
bHH(d){return this.aQz(d,!1)},
cmD(){var w=this.c,v=w.at
if(v==null||v.length===0)return D.bdp
return C.ipu(v,w.db,w.dx)}}
C.b3s.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=$.S(),g=B.K(),f=this.b
g.r=B.b0(f.ay).gp(0)
w=B.K()
w.r=B.b0(f.ch).gp(0)
w.b=A.a9
v=f.CW
w.c=v
u=e.a
t=e.b
s=new B.a1(0,0,0+u,0+t)
switch(f.ax.a){case 0:d.ar(s,g)
d.ar(s,w)
break
case 1:d.bZ(s,g)
d.bZ(s,w)
break
case 2:r=new B.aG(h.r,A.ai,i,i,B.a([],x.v))
r.E(new B.aZ(u/2,0))
r.E(new B.aq(u,t))
r.E(new B.aq(0,t))
r.E(new B.bt())
d.af(r,g)
d.af(r,w)
break
case 3:r=new B.aG(h.r,A.ai,i,i,B.a([],x.v))
h=t*0.45
r.E(new B.aZ(0,h))
f=u*0.65
r.E(new B.aq(f,h))
r.E(new B.aq(f,t*0.2))
r.E(new B.aq(u,t*0.5))
r.E(new B.aq(f,t*0.8))
t*=0.55
r.E(new B.aq(f,t))
r.E(new B.aq(0,t))
r.E(new B.bt())
d.af(r,g)
d.af(r,w)
break
case 4:h=t/2
w.c=v+2
d.ah(new B.o(0,h),new B.o(u,h),w)
break
case 5:q=u*0.22
r=new B.aG(h.r,A.ai,i,i,B.a([],x.v))
r.E(new B.aZ(q,0))
r.E(new B.aq(u,0))
r.E(new B.aq(u-q,t))
r.E(new B.aq(0,t))
r.E(new B.bt())
d.af(r,g)
d.af(r,w)
break
case 6:p=u/2
o=t/2
n=Math.min(u,t)/2
f=B.a([],x.v)
r=new B.aG(h.r,A.ai,i,i,f)
for(m=0;m<6;++m){l=1.0471975511965976*m-0.5235987755982988
k=p+n*Math.cos(l)
j=o+n*Math.sin(l)
if(m===0){h=new B.aZ(k,j)
f.push(h)
v=r.f
if(v!=null)h.ak(v)
r.ab()}else{h=new B.aq(k,j)
f.push(h)
v=r.f
if(v!=null)h.ak(v)
r.ab()}}r.E(new B.bt())
d.af(r,g)
d.af(r,w)
break}},
aD(d){return d.b!==this.b}}
C.aKO.prototype={
S(){return new C.bxj(null,null)}}
C.bxj.prototype={
Y(){var w,v=this
v.a4()
w=B.bl(null,A.hI,null,1,null,v)
w.cL(0)
v.d!==$&&B.aQ()
v.d=w},
t(){var w=this.d
w===$&&B.c()
w.t()
this.bBh()},
aQK(d,e){var w=null,v=B.a([e,e.j(0.7)],x.O)
return new B.bN(new B.p(w,w,w,B.m(8),w,new B.a8(A.a7,A.aa,A.x,v,w,w),A.n),A.bj,B.as(B.d(d,w,w,w,w,w,w,A.dq,w,w,w),w,w,w),w)},
bER(){var w,v=this,u=null,t=v.aQK("Slide A",A.bn),s=v.aQK("Slide B",A.b2)
if(v.a.c===D.ct)return new B.an(A.a0,u,A.b0,A.t,B.a([t,B.as(B.d("No transition",u,u,u,u,u,u,B.l(u,u,A.c.j(0.7),u,u,u,u,u,u,u,u,16,u,u,A.U,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,u)],x.p),u)
w=v.d
w===$&&B.c()
return B.c5(w,new C.fhi(v,s,t),u)},
B(d){return this.bER()}}
C.aLv.prototype={
ju(d){return new B.a1(0,0,0+d.a*A.i.D(this.b,0,1),0+d.b)},
k9(d){return d.b!==this.b}}
C.Wo.prototype={
S(){return new C.bm2(null,null)}}
C.bm2.prototype={
Y(){var w,v,u=this
u.a4()
w=B.bl(null,A.Cc,null,1,null,u)
u.d!==$&&B.aQ()
u.d=w
v=u.a
if(!v.e||v.c.dy===D.ct){w.sp(0,1)
return}B.bQ(B.dw(0,0,0,v.c.fr+v.f*120,0,0),new C.e1q(u),x.a)},
bz(d){var w,v,u,t=this
t.bJ(d)
w=d.c
v=t.a
u=v.c
if(w.a!==u.a||w.dy!==u.dy||d.f!==v.f){w=t.d
w===$&&B.c()
w.sp(0,w.a)
v=t.a
if(!v.e||v.c.dy===D.ct)w.sp(0,1)
else B.bQ(B.dw(0,0,0,v.c.fr+v.f*120,0,0),new C.e1p(t),x.a)}},
t(){var w=this.d
w===$&&B.c()
w.t()
this.bzh()},
B(d){var w,v=this.a
if(v.c.dy===D.ct||!v.e)return v.d
w=this.d
w===$&&B.c()
return B.c5(w,new C.e1o(this),v.d)}}
C.JK.prototype={
B(d){return B.cq(new C.ckH(this))}}
C.aBt.prototype={
S(){return new C.bgl()}}
C.bgl.prototype={
Y(){this.a4()
if(this.a.c!==D.ct)B.bQ(A.NM,new C.dfa(this),x.a)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=4280172719,n=q.a.c
if(n===D.ct)n=B.as(B.d("No animation on elements",p,p,p,p,p,p,B.l(p,p,A.c.j(0.75),p,p,p,p,p,p,p,p,16,p,p,A.U,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p)
else{n=n.u(0)
w=q.d
v=x.W
u=q.a.c
w=B.ap(p,new C.Wo(C.er(A.bp,!1,4279310375,A.aH,"",4294538006,24,A.bt,A.a8,"",0.2,"preview_shape",p,"","",0,!1,"",0,D.bm,o,2,"",0,0,"",u,D.fi,0.84,0.08,0.12),B.q(p,p,A.f,p,p,new B.p(A.c6,p,p,B.m(14),p,p,A.n),p,72,p,p,p,p,p,72),!0,0,new B.bA("shape_"+n+"_"+w,v)),p,p,24,p,28,p)
u=u.u(0)
n=q.d
t=C.er(A.bp,!1,4294967295,A.aH,"",4280640491,22,A.bt,A.a8,"",0.2,"preview_text",p,"","",0,!1,"",0,D.bm,o,2,"Element flies in",0,0,"",q.a.c,D.d_,0.84,0.08,0.12)
s=A.c.j(0.14)
r=B.m(14)
v=new B.an(A.a0,p,A.ac,A.t,B.a([w,B.ap(32,new C.Wo(t,B.q(p,D.fMo,A.f,p,p,new B.p(s,p,B.L(A.aT,A.r,1),r,p,p,A.n),p,p,p,p,A.jp,p,p,1/0),!0,1,new B.bA("text_"+u+"_"+n,v)),p,p,24,24,p,p)],x.p),p)
n=v}return new B.bN(D.b8m,A.bj,n,p)}}
C.a93.prototype={
S(){return new C.bmJ(null,null)}}
C.bmJ.prototype={
gb2w(){var w=this.a
if(w.e)w=D.fcc.q(0,w.c)||D.aT0.q(0,A.d.gH(this.a.c.split("@")))
else w=!1
return w},
Y(){var w,v=this
v.a4()
if(v.gb2w()){w=C.int(v.a.c)
if(w==null){w=v.a.c
if(w==="drift")w=9000
else w=w==="pulse"?2600:4200}w=B.bl(null,B.dw(0,0,0,w,0,0),null,1,null,v)
w.cL(0)
v.d=w}},
t(){var w=this.d
if(w!=null)w.t()
this.bzN()},
B(d){var w,v=this,u=v.d
if(!v.gb2w()||u==null)return v.a.d
w=v.a
return B.c5(u,new C.epW(v,u,A.o.F(w.f,7)/7*3.141592653589793*2),w.d)}}
C.b1r.prototype={
B(d){var w=null
return B.as(C.b3w(!0,w,!1,C.er(A.K,!1,this.e.l(),A.aH,"",4280640491,this.f,A.bt,A.a8,"",0.2,"fx",w,"","",0,!1,"",0,D.bm,4280172719,2,"Aa",0,0,this.c,D.ct,D.d_,0.84,0.08,0.12),w,!1,w,w,w,1,!1,!0),w,w,w)},
gZ(d){return this.f}}
C.bhy.prototype={
ju(d){return C.a3Q(this.b,new B.a1(0,0,0+d.a,0+d.b).cn(-this.c))},
k9(d){return d.b!==this.b||d.c!==this.c}}
C.bsO.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=new B.a1(0,0,0+e.a,0+e.b).cn(-this.d),k=this.b,j=C.a3Q(k,l),i=e.gdA(),h=new C.f6c()
switch(this.c){case"gold":w=h.$1(i*0.045)
w.sav(D.aUz.aK(0,l))
d.af(j,w)
k=C.a3Q(k,l.cn(-(i*0.03)))
w=h.$1(i*0.006)
w.r=D.buu.gp(0)
d.af(k,w)
break
case"platinum":k=h.$1(i*0.04)
k.sav(D.fmx.aK(0,l))
d.af(j,k)
break
case"glow":k=h.$1(i*0.05)
k.r=A.c.j(0.55).gp(0)
k.y=new B.hm(A.G,i*0.04)
d.af(j,k)
k=h.$1(i*0.012)
k.r=A.c.gp(0)
d.af(j,k)
break
case"rainbow":k=h.$1(i*0.04)
k.sav(D.fmv.aK(0,l))
d.af(j,k)
break
case"double":w=h.$1(i*0.012)
w.r=A.c.gp(0)
d.af(j,w)
k=C.a3Q(k,l.cn(i*0.03))
w=h.$1(i*0.008)
w.r=A.c.j(0.75).gp(0)
d.af(k,w)
break
case"neon":k=h.$1(i*0.06)
k.r=A.b9.j(0.7).gp(0)
k.y=new B.hm(A.G,i*0.035)
d.af(j,k)
k=h.$1(i*0.016)
k.r=A.ph.gp(0)
d.af(j,k)
break
case"rosegold":w=h.$1(i*0.05)
w.sav(D.fmq.aK(0,l))
d.af(j,w)
w=C.a3Q(k,l.cn(-(i*0.032)))
v=h.$1(i*0.006)
v.r=D.bhe.gp(0)
d.af(w,v)
k=C.a3Q(k,l.cn(i*0.03))
v=h.$1(i*0.004)
v.r=D.bkh.gp(0)
d.af(k,v)
break
case"jewels":k=h.$1(i*0.055)
k.sav(D.aUz.aK(0,l))
d.af(j,k)
for(k=B.xN(j),w=B.a([],x.X),k=new B.ry(k,!1,w),v=i*0.018,u=-i*0.006,t=i*0.006,s=i*0.09;k.C();){r=k.c
if(r===0||k.f)B.bj(B.jI(y.M));--r
k.iy()
q=w[r].b
q===$&&B.c()
p=A.o.D(A.i.bh(q.a.length()/s),8,40)
for(o=0;o<p;++o){k.iy()
q=w[r].b
q===$&&B.c()
q=q.a.length()
k.iy()
n=w[r].Di(q*o/p).a
m=D.d7B[A.o.F(o,4)]
$.S()
q=new B.ao(A.O,A.M,A.R,A.S,A.Q)
q.r=m.gp(0)
d.N(n,v,q)
q=new B.ao(A.O,A.M,A.R,A.S,A.Q)
q.r=A.c.j(0.9).gp(0)
d.N(new B.o(n.a+u,n.b+u),t,q)}}break
case"aurora":k=h.$1(i*0.08)
k.sav(D.fmz.aK(0,l))
k.y=new B.hm(A.G,i*0.03)
d.af(j,k)
k=h.$1(i*0.018)
k.sav(D.fmw.aK(0,l))
d.af(j,k)
break
case"framed":w=h.$1(i*0.07)
w.r=A.c.gp(0)
d.af(j,w)
k=C.a3Q(k,l.cn(-(i*0.035)))
w=h.$1(i*0.004)
w.r=A.pa.gp(0)
d.af(k,w)
break}},
aD(d){return d.b!==this.b||d.c!==this.c||d.d!==this.d}}
C.btS.prototype={
a5(d,e){d.Gu(C.a3Q(this.b,new B.a1(0,0,0+e.a,0+e.b).cn(-this.c)),A.w,e.gdA()*0.05,!1)},
aD(d){return d.b!==this.b||d.c!==this.c}}
C.aNx.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.aO1.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.aPl.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.a9m.prototype={}
C.OV.prototype={
S(){var w=x.gz,v=x.N,u=x.bO
return new C.aGl(B.a([],x.D),B.a([],w),B.a([],w),B.T(v,u),B.T(v,x.bo),B.T(v,u),B.aR(v),null,null)},
ge3(){return this.c},
gUy(){return this.r},
gUz(){return this.w},
gMh(){return this.x}}
C.aGl.prototype={
Y(){var w,v,u=this
u.a4()
$.aW.c1$.push(u)
C.fUG()
$.hEM=new C.eIO(u)
w=B.bl(null,A.C9,null,1,null,u)
w.f2(0,!0)
u.fy!==$&&B.aQ()
u.fy=w
v=$.hdU.h(0,u.a.c)
if(v!=null){w=B.C(v,x.I)
u.d=w
u.x=!1}u.J1()},
bz(d){var w,v,u=this
u.bJ(d)
w=A.a.i(d.y)
v=u.a
if(w.toLowerCase()!==A.a.i(v.y).toLowerCase()||A.a.i(d.z).toLowerCase()!==A.a.i(v.z).toLowerCase()||d.c!==v.c){w=d.c
u.Pa(w)
if(w!==u.a.c){u.e=null
u.db=!1
u.w=u.r=null}u.x=!0
u.J1()}},
jm(d){if(d===A.Bg||d===A.tV||d===A.tU||d===A.q3)this.uf()},
t(){var w,v,u,t=this
$.aW.hV(t)
if(!t.x){w=t.a.c
v=B.C(t.d,x.I)
$.hdU.n(0,w,v)}w=t.at
if(w!=null)w.a1(0)
t.uf()
w=t.fy
w===$&&B.c()
w.t()
for(w=t.ch,w=new B.dq(w,w.r,w.e);w.C();){v=w.d
v.U$=$.ax()
v.P$=0}for(w=t.CW,w=new B.dq(w,w.r,w.e);w.C();){v=w.d
u=v.ax
if(u!=null)u.bN(0)
v.hi()}for(w=t.cx,w=new B.dq(w,w.r,w.e);w.C();){v=w.d
v.U$=$.ax()
v.P$=0}t.bA_()},
gZ0(){var w=this.a
return w.f||w.r||w.w||w.x||w.d},
gPt(){var w,v=this.a
if(v.d||v.w||v.x){w=A.a.i(v.y)
if(w.length!==0)return w}if(v.r&&A.a.i(v.z).length!==0)return A.a.i(v.z)
return A.a.i(v.y)},
adg(d){var w=d==null?this.e:d
if((w==null?null:w.z)!==!0)return!1
if(w.gTb())return!1
return!0},
kz(){return this.adg(null)},
akc(){var w=this.c
if(w==null)return
w.L(x.q).f.T(D.fkM)},
qR(){if(!this.kz())return!1
this.akc()
return!0},
at6(d){var w,v,u,t,s,r=this
if(r.adg(d))return!1
w=d==null?r.e:d
v=w==null
if((v?null:w.w)!=="hati_kiapo_uongozi")return!0
if(r.a.d)return!0
if(!v&&!C.hDS(w))return!1
u=r.a
if(u.w||u.x)return!0
if(!u.r)return!1
v=v?null:w.x
t=A.a.i(v==null?"":v).toLowerCase()
s=A.a.i(u.z).toLowerCase()
return t.length!==0&&s.length!==0&&t===s},
At(){return this.at6(null)},
J1(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$J1=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=++t.dx
k=t.a.c
w=3
return B.b(C.asZ(k),$async$J1)
case 3:j=e
w=4
return B.b(C.b1E(k),$async$J1)
case 4:t.dy=e
if(t.c==null||l!==t.dx){w=1
break}s=C.h9L(j,t.c5j())
w=t.gZ0()?5:7
break
case 5:r=t.gPt()
w=r.length!==0?8:9
break
case 8:w=10
return B.b(C.a8z(r),$async$J1)
case 10:q=e
if(t.c==null||l!==t.dx){w=1
break}if(q!=null){A.d.br(s,new C.eFb())
if(!t.dy.q(0,A.a.i(r).toLowerCase()))A.d.c9(s,0,q)}case 9:w=6
break
case 7:A.d.br(s,new C.eFc())
case 6:for(l=s.length,p=!1,o=0;o<s.length;s.length===l||(0,B.J)(s),++o){n=s[o]
m=n.w
if(!(m==="marriage_agreement"||m==="hati_kuhowa"||m==="hati_kuhoweya"||m==="hati_malipo_awamu"||m==="hati_kiapo_uongozi"))continue
m=n.y
if(C.zh(m==null?"":m)!=null)continue
C.fUS(n,s)
p=!0}t.m(new C.eFd(t,s))
l=B.C(s,x.I)
$.hdU.n(0,k,l)
if(p||s.length>J.ad(j))t.uf()
case 1:return B.h(u,v)}})
return B.i($async$J1,v)},
c5j(){var w,v,u,t,s,r,q="hati_kiapo_uongozi",p=B.a([],x.D)
for(w=this.d,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u){t=w[u]
s=t.w
if((s==="marriage_agreement"||s==="hati_kuhowa"||s==="hati_kuhoweya"||s==="hati_malipo_awamu"||s===q)&&s!==q)p.push(t)}r=this.e
w=!1
if(!this.db)if(r!=null){w=r.w
w=C.kN(w)&&w!==q}if(w)p.push(r)
return p},
ctv(d){var w,v=this,u=d.w
if(!C.kN(u)||u==="hati_kiapo_uongozi")return
v.abA(d)
w=A.d.bj(v.d,new C.eGM(d))
u=v.d
if(w>=0){u[w]=d.hQ()
v.d[w].f=new B.V(Date.now(),0,!1)}else A.d.c9(u,0,d.hQ())
v.db=!1},
cnz(){var w,v,u=this,t=u.e,s=!1
if(!u.db)if(t!=null){s=t.w
s=C.kN(s)&&s!=="hati_kiapo_uongozi"}if(s)u.ctv(t)
s=u.d
w=B.U(s)
v=w.k("cM<1,hQ>")
s=B.C(new B.cM(new B.Y(s,new C.eGA(),w.k("Y<1>")),new C.eGB(),v),v.k("M.E"))
return s},
Pa(d){return this.bU6(d)},
uf(){return this.Pa(null)},
bU6(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$Pa=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.x&&d==null){w=1
break}s=t.cnz()
w=3
return B.b(C.Xi(d==null?t.a.c:d,s),$async$Pa)
case 3:r=t.e
w=r!=null&&r.w==="hati_kiapo_uongozi"&&t.at6(r)?4:5
break
case 4:w=6
return B.b(C.Ow(r),$async$Pa)
case 6:q=r.x
p=A.a.i(q==null?t.gPt():q)
if(t.dy.q(0,A.a.i(p).toLowerCase())){w=1
break}o=A.d.bj(t.d,new C.eEz())
q=t.d
if(o>=0)q[o]=r.hQ()
else A.d.c9(q,0,r.hQ())
case 5:case 1:return B.h(u,v)}})
return B.i($async$Pa,v)},
pM(){var w,v=this,u=v.at
if(u!=null)u.a1(0)
u=v.e
w=(u==null?null:C.kN(u.w))===!0?A.h3:A.lH
v.at=B.cy(w,new C.eHU(v))},
b1W(){var w,v=this,u=v.e
if(u==null)return
w=v.ax
w.push(new C.agz(u.hQ(),v.f,v.r))
if(w.length>40)A.d.cH(w,0)
A.d.a8(v.ay)},
cHh(){var w=this,v=w.ax
if(v.length===0||w.e==null)return
w.ay.push(new C.agz(w.e.hQ(),w.f,w.r))
w.m(new C.eIK(w,v.pop()))
w.pM()},
csA(){var w=this,v=w.ay
if(v.length===0||w.e==null)return
w.ax.push(new C.agz(w.e.hQ(),w.f,w.r))
w.m(new C.eGK(w,v.pop()))
w.pM()},
oF(){var w,v,u=this
if(u.e==null)return
w=A.d.bj(u.d,new C.eIx(u))
if(w>=0){u.d[w]=u.e.hQ()
u.d[w].f=new B.V(Date.now(),0,!1)}v=u.e
v.toString
v.f=new B.V(Date.now(),0,!1)},
Yy(d){var w,v,u,t,s=this.gdB()
if(s==null)return null
for(w=s.z,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t}return null},
yf(){var w,v,u,t
for(w=this.ch,v=new B.dq(w,w.r,w.e);v.C();){u=v.d
u.U$=$.ax()
u.P$=0}w.a8(0)
for(w=this.CW,v=new B.dq(w,w.r,w.e);v.C();){u=v.d
t=u.ax
if(t!=null)t.bN(0)
u.hi()}w.a8(0)},
KQ(){var w,v,u,t,s,r,q,p,o,n,m,l=this.gdB()
if(l==null)return
w=l.z
v=B.U(w)
u=v.k("cM<1,n>")
t=B.d2(new B.cM(new B.Y(w,new C.eIy(),v.k("Y<1>")),new C.eIz(),u),u.k("M.E"))
w=this.ch
v=B.a4(w).k("cx<1>")
v=B.C(new B.cx(w,v),v.k("M.E"))
u=v.length
s=this.CW
r=0
for(;r<v.length;v.length===u||(0,B.J)(v),++r){q=v[r]
if(!t.q(0,q)){p=w.W(0,q)
if(p!=null){p.U$=$.ax()
p.P$=0}p=s.W(0,q)
if(p!=null){o=p.ax
if(o!=null)o.bN(0)
p.hi()}}}for(v=l.z,u=v.length,r=0;r<v.length;v.length===u||(0,B.J)(v),++r){n=v[r]
if(n.b!==D.d_)continue
p=n.a
m=w.c3(0,p,new C.eIA(n))
s.c3(0,p,new C.eIB())
p=m.a.a
o=n.r
if(p!==o)m.sb1(0,o)}},
Ik(){var w,v,u=this
if(!u.db||u.e==null)return
w=u.db=!1
if(!A.d.aV(u.d,new C.eDY(u))){v=u.e
if(v.w==="hati_kiapo_uongozi"){v=v.x
if(v==null)v=u.gPt()
w=u.dy.q(0,A.a.i(v).toLowerCase())}if(!w)A.d.c9(u.d,0,u.e.hQ())}u.oF()
u.pM()},
aky(d,e){var w,v,u,t,s=this
if(s.kz())return
w=s.Yy(d)
if(w==null||w.r===e)return
w.r=e
v=s.e
u=(v==null?null:C.kN(v.w))===!0
if(u){C.inx(w,e)
v=s.e
if((v==null?null:v.w==="marriage_agreement")===!0){t=s.gdB()
if(t!=null)C.iny(t,w.d+w.f*0.5)}}s.Ik()
s.oF()
s.pM()
if(u&&s.c!=null)s.m(new C.eIL())},
cIp(d,e){var w=this,v=w.gdB()
if(v==null||v.a!==d||v.c===e)return
v.c=e
w.Ik()
w.oF()
w.pM()},
gdB(){var w,v=this.e
if(v==null||v.r.length===0)return null
w=v.r
return w[A.o.D(this.f,0,w.length-1)]},
gqV(){var w,v,u,t,s,r,q=this,p=q.e,o=p==null?null:p.c
if(o==null)o="office_blue"
w=C.ilw(o)
if(w!=null)return w
v=q.gdB()
if(v==null){p=q.e
v=p!=null&&p.r.length!==0?A.d.gH(p.r):null}if(v!=null&&A.a.a_(o,"class_")){p=v.f
p=B.b0(p==null?v.e:p)
u=q.c2w(v)
t=q.c2v(v)
s=B.b0(v.e)
r=v.f
return new C.k0(o,"Class template",p,u,t,s,r==null?null:B.b0(r))}return C.hYe(o)},
c2w(d){var w,v,u,t,s
for(w=d.z,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u){t=w[u]
if(t.b===D.d_)s=t.w>=28||A.o.D(A.o.aq(t.x.a,100)-1,0,8)>=A.o.D(7,0,8)
else s=!1
if(s)return B.b0(t.Q)}return A.a_},
c2v(d){var w,v,u,t
for(w=d.z,v=w.length,u=0;u<v;++u){t=w[u]
if(t.b===D.d_&&t.w<28)return B.b0(t.Q)}return A.aM},
agv(d){var w=this,v=d.w
if(v==="hati_kiapo_uongozi"){if(!w.gZ0()){w.c.L(x.q).f.T(D.fjm)
return}w.abA(d)
w.b3d(C.bF3(d))
return}if(C.clz(v)){w.abA(d)
w.b3d(d)
return}w.m(new C.eFT(w,d))},
atF(){var w,v,u,t,s,r,q=this
q.a3h(!0)
if(q.db){w=q.e
v=w==null
u=v?null:w.w
t=v?null:w.x
s=A.a.i(t==null?"":t)
r=!v&&C.kN(w.w)&&u!=="hati_kiapo_uongozi"&&s.length!==0
q.m(new C.eDW(q))
if(r&&q.c!=null){u.toString
q.Km(u,s)}return}q.uf()
q.m(new C.eDX(q))},
b3c(d){this.abA(d)
this.a0L(d,!0)},
abA(d){if(!C.kN(d.w))return
C.fUS(d,this.d)},
a0L(d,e){return this.cjr(d,e)},
b3d(d){return this.a0L(d,!1)},
cjr(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$a0L=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:l={}
l.a=d
if(d.w==="hati_kiapo_uongozi"){s=l.a=C.bF3(d)
if(e){r=s.x
q=A.a.i(r==null?t.gPt():r)
t.dy.W(0,q.toLowerCase())
C.a8w(t.a.c,q)}r=s}else r=d
w=C.clz(r.w)?3:4
break
case 3:w=5
return B.b(t.abB(r),$async$a0L)
case 5:if(!g||t.c==null){w=1
break}case 4:p=A.d.aV(t.d,new C.eGf(l))
o=l.a.hQ()
n=C.kN(o.w)&&C.ioN(o)
t.m(new C.eGg(t,o,p))
if(n){m=A.d.bj(t.d,new C.eGh(o))
if(m>=0){t.d[m]=o.hQ()
t.uf()}}if(!t.adg(l.a))t.ZM()
r=!1
if(t.c!=null)if(!t.adg(l.a)){r=l.a
l=r.w==="hati_kiapo_uongozi"&&!t.at6(r)&&C.fQP(l.a)}else l=r
else l=r
if(l)t.c.L(x.q).f.T(D.fjX)
case 1:return B.h(u,v)}})
return B.i($async$a0L,v)},
abB(d){return this.bS6(d)},
bS6(d){var w=0,v=B.j(x.y),u,t=this,s,r
var $async$abB=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.a
if(r.d){u=!0
w=1
break}s=d.z
if(s===!0){u=!0
w=1
break}w=3
return B.b(B.ly(r.c,A.An),$async$abB)
case 3:if(f){u=!0
w=1
break}r=t.c
r.toString
s=t.a
u=B.ld(!1,r,s.c,s.d,null,A.An,null)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$abB,v)},
ot(){var w=0,v=B.j(x.y),u,t=this,s,r
var $async$ot=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.e
r=s==null
if(C.clz(r?null:s.w)){u=!0
w=1
break}if((r?null:s.w)==="hati_kiapo_uongozi"){u=!0
w=1
break}s=t.c
s.toString
r=t.a
u=C.ckZ(s,r.c,r.d)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ot,v)},
agc(){var w=0,v=B.j(x.H),u,t=this,s
var $async$agc=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.cg(null,null,!1,null,new C.eFS(),s,null,!0,!0,x.H),$async$agc)
case 3:if(t.c==null){w=1
break}t.atF()
case 1:return B.h(u,v)}})
return B.i($async$agc,v)},
agb(){var w=0,v=B.j(x.H),u,t=this,s
var $async$agb=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.cg(null,null,!1,null,new C.eFP(),s,null,!0,!0,x.H),$async$agb)
case 3:if(t.c==null){w=1
break}t.m(new C.eFQ())
t.atF()
case 1:return B.h(u,v)}})
return B.i($async$agb,v)},
ZM(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$ZM=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.aA(),$async$ZM)
case 3:r=e
if(B.k5(J.t(r.a,"ngmy_marriage_hint_seen"))===!0){w=1
break}w=4
return B.b(r.aC("Bool","ngmy_marriage_hint_seen",!0),$async$ZM)
case 4:s=t.c
if(s==null){w=1
break}s.L(x.q).f.T(D.fhX)
case 1:return B.h(u,v)}})
return B.i($async$ZM,v)},
Km(d,e){return this.ctV(d,e)},
ctV(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$Km=B.e(function(f,g){if(f===1)return B.f(g,v)
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
return B.b(C.ahS(s,t.gF1(),t.gF0(),!0,e,t.d),$async$Km)
case 9:w=4
break
case 6:w=10
return B.b(C.ahT(s,t.gF1(),t.gF0(),!0,e,t.d),$async$Km)
case 10:w=4
break
case 7:w=11
return B.b(C.ahU(s,t.gF1(),t.gF0(),!0,e,t.d),$async$Km)
case 11:w=4
break
case 8:w=12
return B.b(C.ahV(s,t.gF1(),t.gF0(),!0,e,t.d),$async$Km)
case 12:w=4
break
case 4:case 1:return B.h(u,v)}})
return B.i($async$Km,v)},
Zm(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$Zm=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(!t.gZ0()){t.c.L(x.q).f.T(D.fi9)
w=1
break}s=t.gPt()
w=t.a.d?3:4
break
case 3:r=t.c
r.toString
w=5
return B.b(B.HF(r,"Search states\u2026",s,A.ka,"Hati ya Kiapo: which state?"),$async$Zm)
case 5:q=e
if(q==null||A.a.i(q).length===0||t.c==null){w=1
break}s=A.a.i(q)
case 4:r=t.a
p=r.d
o=!0
if(!p)if(!r.w){if(!r.x)if(r.r){r=A.a.i(r.z)
r=r.length!==0&&r.toLowerCase()===s.toLowerCase()}else r=!1
else r=o
o=r}r=t.c
r.toString
C.a3e(p,o,r,p,new C.eF7(t),new C.eF8(t),s)
case 1:return B.h(u,v)}})
return B.i($async$Zm,v)},
agw(){var w=0,v=B.j(x.H),u=this,t,s
var $async$agw=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return B.b(B.bU(A.dW,null,new C.eFZ(u),s,!0,!0,!1,A.lT,!1,!1,x.N),$async$agw)
case 2:t=e
if(t==="marriage_agreement"){s=u.c
s.toString
C.ahV(s,u.gF1(),u.gF0(),!1,null,u.d)}else if(t==="hati_kuhowa"){s=u.c
s.toString
C.ahS(s,u.gF1(),u.gF0(),!1,null,u.d)}else if(t==="hati_kuhoweya"){s=u.c
s.toString
C.ahT(s,u.gF1(),u.gF0(),!1,null,u.d)}else if(t==="hati_malipo_awamu"){s=u.c
s.toString
C.ahU(s,u.gF1(),u.gF0(),!1,null,u.d)}else if(t==="hati_kiapo_uongozi")u.Zm()
return B.h(null,v)}})
return B.i($async$agw,v)},
cix(d,e){var w,v,u=this,t=null
if(u.e!=null)u.b1W()
w=C.cE()
v=C.Cr(t,t,t,t,D.E_,5,!1,t,t,t,t,t,w,t,!1,t,d==null?"Untitled Presentation":d,t,t,t,"office_blue",t,!1,t)
u.m(new C.eG_(u,v))},
aaY(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$aaY=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e==null||t.qR()){w=1
break}s=t.c
s.toString
w=3
return B.b(C.itX(s),$async$aaY)
case 3:r=e
if(r==null||t.c==null||t.e==null){w=1
break}q=t.e
p=A.d.cE(q.r,new C.eE_())
t.dc(new C.eE0(t,p,q,r))
s=t.c.L(x.q).f
o=r.r.length
s.T(B.b3(null,null,null,null,null,A.t,null,B.d(p?"Your "+o+"-slide presentation is ready. The mic is green now \u2014 tap it to tell the AI what to change.":"Added "+o+" AI slides after this one. Tap the green mic to change them.",null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$aaY,v)},
aix(d,e,f,g){var w=null,v=g?A.dr:A.cd,u=B.L(g?A.aT:A.cx,A.r,1)
return B.h6(B.az(w,B.q(w,B.X(d,g?A.c:A.aM,w,w,w,18),A.f,w,w,new B.p(v,w,u,w,w,w,A.a6),w,34,w,w,w,w,w,34),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,A.a4),w,e,w,w)},
a0K(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a0K=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:n=t.e
if(n==null||t.qR()){w=1
break}s=t.kd()
r=n.r
q=r.length
if(q===0||t.f>=q)p=B.a([],x.u)
else{r=r[t.f].z
q=B.U(r).k("Y<1>")
p=B.C(new B.Y(r,new C.eGa(),q),q.k("M.E"))}o=s!=null&&s.b===D.lS?B.a([s],x.u):p
if(o.length===0){t.c.L(x.q).f.T(D.fk8)
w=1
break}r=t.c
r.toString
w=3
return B.b(B.bU(A.L,null,new C.eGb(t,o),r,!0,!0,!0,null,!1,!1,x.H),$async$a0K)
case 3:case 1:return B.h(u,v)}})
return B.i($async$a0K,v)},
agN(){return this.cjq()},
cjq(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$agN=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p={}
o=t.e
if(o!=null){s=o.CW
s=(s==null?"":s).length===0||t.qR()}else s=!0
if(s){w=1
break}s=t.c
s.toString
w=3
return B.b(C.itJ(s,t.f+1,o),$async$agN)
case 3:r=e
if(r==null||t.c==null||t.e!==o){w=1
break}s=o.cx
if(s==null)s=A.Z
q=B.jB(s,B.U(s).c)
p.a=A.d.bj(o.r,new C.eGd(q))
t.dc(new C.eGe(p,t,o,q,r))
t.c.L(x.q).f.T(D.fkx)
case 1:return B.h(u,v)}})
return B.i($async$agN,v)},
agU(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$agU=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e==null||t.qR()||!t.At()){w=1
break}s=t.gdB()
if(s==null){w=1
break}r=s.z
q=B.U(r).k("Y<1>")
p=B.C(new B.Y(r,new C.eGv(),q),q.k("M.E"))
if(p.length===0){t.c.L(x.q).f.T(D.fhI)
w=1
break}o=new B.N(p,new C.eGw(),B.U(p).k("N<1,F>")).f1(0,new C.eGx())
r=B.T(x.N,x.bO)
for(q=p.length,n=0;n<p.length;p.length===q||(0,B.J)(p),++n){m=p[n]
l=m.r
r.n(0,m.a,new B.au(new B.ba(l,A.b5,A.aP),$.ax()))}q=t.c
q.toString
w=3
return B.b(B.bU(A.L,null,new C.eGy(t,p,o,r),q,!0,!0,!0,null,!1,!1,x.H),$async$agU)
case 3:for(r=new B.dq(r,r.r,r.e);r.C();){q=r.d
q.U$=$.ax()
q.P$=0}if(t.c!=null)t.m(new C.eGz())
case 1:return B.h(u,v)}})
return B.i($async$agU,v)},
agz(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$agz=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:m=t.e
if(m==null||t.qR()){w=1
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
return B.b(C.hG0(s,new C.Fo(r,q,p,o==null?"":o)),$async$agz)
case 3:n=e
if(n==null||t.c==null){w=1
break}t.dc(new C.eG0(m,n))
s=t.c.L(x.q).f
r=n.a
if(r.length===0)r="No ending celebration."
else{r=C.aig(r)
r=B.w(r==null?null:r.b)+" will play after your last slide."}s.T(B.b3(null,null,null,null,null,A.t,null,B.d(r,null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$agz,v)},
abu(){return this.bRo()},
bRo(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$abu=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:m={}
l=t.e
if(l!=null){s=l.CW
s=(s==null?"":s).length===0||t.qR()}else s=!0
if(s){w=1
break}s=t.c
s.toString
w=3
return B.b(C.itW(s,t.f+1,l),$async$abu)
case 3:r=e
q=$.hdu
$.hdu=!1
if(r==null||t.c==null||t.e!==l){w=1
break}if(r===l){t.dc(new C.eEg())
t.c.L(x.q).f.T(D.fhz)
w=1
break}if(!q){s=r.CW
s=C.hEK(l,s==null?"":s,!1)}else s=!1
if(s){t.dc(new C.eEh(t,l,r))
t.c.L(x.q).f.T(D.fl1)
w=1
break}s=l.cx
if(s==null)s=A.Z
p=B.jB(s,B.U(s).c)
s=l.r
m.a=A.d.bj(s,new C.eEi(p))
o=s.length
t.dc(new C.eEj(m,t,l,p,r))
n=s.length-o
s=t.c.L(x.q).f
if(n>0){m=n===1?"":"s"
m="Done \u2014 added "+n+" slide"+m+". Undo brings back the old version."}else m="Done \u2014 your slides are updated. Undo brings back the old version."
s.T(B.b3(null,null,null,null,null,A.t,null,B.d(m,null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$abu,v)},
aSZ(d,e){if(e){this.ahm()
return}this.cix(d,!1)},
bMT(){return this.aSZ(null,!1)},
ahm(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$ahm=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.bU(A.c3,null,new C.eGF(t),r,!0,!0,!0,A.pQ,!1,!1,x.N),$async$ahm)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.eGG(t,C.ilv(s).oL()))
case 1:return B.h(u,v)}})
return B.i($async$ahm,v)},
dc(d){var w=this
if(w.qR())return
w.Ik()
w.b1W()
w.m(d)
w.KQ()
w.oF()
w.pM()},
a9t(){this.dc(new C.eCU(this,D.n8))},
aUt(){var w=this.gdB()
if(w==null)return
this.dc(new C.eEe(this,w))},
aTz(){var w=this.e
if(w==null||w.r.length<=1)return
this.dc(new C.eEc(this))},
b67(d,e){if(this.e==null||d===e)return
this.dc(new C.eGO(this,d,e))},
OH(d){return this.bOU(d)},
bOU(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$OH=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=d.w==="hati_kiapo_uongozi"?3:4
break
case 3:if(!t.a.d){s=t.c
if(s!=null)s.L(x.q).f.T(D.fk3)
w=1
break}s=d.x
r=A.a.i(s==null?t.gPt():s)
w=5
return B.b(C.a8y(r),$async$OH)
case 5:q=f
t.dy.W(0,r.toLowerCase())
C.a8w(t.a.c,r)
s=t.c
if(s!=null){s=s.L(x.q).f
s.T(B.b3(null,null,null,null,null,A.t,null,B.d(q?"Hati ya Kiapo cha Uongozi of "+r+' is deleted for everyone. Tap "Create Hati ya Kiapo" to make a new one.':"Deleted on this phone. It will be deleted for everyone as soon as the app is online.",null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))}case 4:s=d.a
C.at0(s)
w=6
return B.b(C.b3A(t.a.c,s),$async$OH)
case 6:if(t.c==null){w=1
break}t.m(new C.eE8(t,d))
w=7
return B.b(t.uf(),$async$OH)
case 7:case 1:return B.h(u,v)}})
return B.i($async$OH,v)},
ctS(d,e){var w=this
if(d.z){w.akc()
return}w.m(new C.eGN(w,d,e))
w.pM()},
kd(){var w,v,u,t,s,r=this.gdB()
if(r==null||this.r==null)return null
for(w=r.z,v=w.length,u=this.r,t=0;t<v;++t){s=w[t]
if(s.a===u)return s}return null},
Xy(d){return this.ch.c3(0,d.a,new C.eDZ(d))},
avy(d){return this.CW.c3(0,d.a,new C.eEA())},
a3h(d){var w,v,u,t=this,s=t.w
if(s!=null){w=t.Yy(s)
v=t.ch.h(0,s)
if(w!=null&&v!=null&&v.a.a!==w.r)w.r=v.a.a}t.w=null
u=$.aW.ap$.d.c
if(u!=null)u.js()},
b9F(){return this.a3h(!0)},
a3d(d){var w,v,u=this
if(u.qR())return
if(!u.At())return
w=u.Yy(d)
if(w==null||w.b!==D.d_)return
v=A.a.i(w.r).toLowerCase()
if(v==="click to edit text"||v==="tap to edit text"||v==="double-tap to edit"){w.r=""
u.Xy(w).sb1(0,"")}u.m(new C.eIv(u,d))
$.aW.x1$.push(new C.eIw(u,d,w))},
bad(d){var w=this
if(d.b===D.d_&&!w.kz()&&w.At()){w.a3d(d.a)
return}w.aC4(d.a)},
aC4(d){var w,v,u,t,s,r=this
if(r.kz())return
w=r.r
if(w!=null&&w!==d){v=r.Yy(w)
if(v!=null&&v.b===D.d_){u=r.ch.h(0,w)
if(u!=null&&u.a.a!==v.r)v.r=u.a.a}}t=r.w
s=t!=null&&t!==d
r.m(new C.eHV(r,s,d))
if(s||d==null){t=$.aW.ap$.d.c
if(t!=null)t.js()}},
aP3(){this.dc(new C.eCV(this))},
pt(d){return this.bDU(d)},
bDU(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$pt=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(t.ot(),$async$pt)
case 3:s=f
if(!s){w=1
break}if(t.c==null){w=1
break}t.dc(new C.eCS(t,d))
case 1:return B.h(u,v)}})
return B.i($async$pt,v)},
WB(){var w=0,v=B.j(x.H),u,t=this,s
var $async$WB=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A7.Hy(78,1920),$async$WB)
case 3:s=e
if(s==null||t.gdB()==null){w=1
break}t.dc(new C.eCI(t,s))
case 1:return B.h(u,v)}})
return B.i($async$WB,v)},
Wv(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$Wv=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.gdB()==null){w=1
break}w=3
return B.b(T.DC(t.a.c),$async$Wv)
case 3:s=e
if(t.c==null){w=1
break}r=J.a7(s)
if(r.gau(s)){t.c.L(x.q).f.T(D.flB)
w=1
break}w=r.gI(s)===1?4:6
break
case 4:q=r.gH(s)
w=5
break
case 6:r=t.c
r.toString
w=7
return B.b(B.bU(null,null,new C.eCF(s),r,!0,!0,!1,null,!1,!1,x.ei),$async$Wv)
case 7:q=e
case 5:if(q==null||t.c==null||t.gdB()==null){w=1
break}t.dc(new C.eCG(t,q))
case 1:return B.h(u,v)}})
return B.i($async$Wv,v)},
auw(){var w=this,v=w.r
if(v==null||w.gdB()==null)return
if(A.d.aV(w.gdB().z,new C.eEa(v))){w.c.L(x.q).f.T(D.fkB)
return}if(w.w===v)w.a3h(!0)
w.dc(new C.eEb(w,v))},
bL8(){var w=this.kd(),v=w==null
if((v?null:w.b)===D.fi)return"Tap a design shape, then pick a color to fill it."
if((v?null:w.b)===D.d_)return"Selected text \u2014 color applies to this text box."
return"No selection \u2014 color applies to the slide background."},
aPM(d,e){var w=this,v=w.kd(),u=w.gdB(),t=w.e
if(t==null)return
w.dc(new C.eDm(w,v,d,e,t,u))},
bFu(d){return this.aPM(d,null)},
a9J(d){return this.bFC(d)},
bFC(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a9J=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=D.aa7.q(0,A.a.i(d.a))||t.Q
if(q){w=3
break}else f=q
w=4
break
case 3:w=5
return B.b(t.ot(),$async$a9J)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}s=t.kd()
if(s!=null){r=s.b
if(r===D.d_)t.bFu(s.w>=28||s.x.gdR(0)>=A.I.gdR(0)?d.d:d.e)
else if(r===D.fi){r=d.c
t.aPM(r.j(0.88),r)}w=1
break}t.dc(new C.eDr(t,d))
case 1:return B.h(u,v)}})
return B.i($async$a9J,v)},
a9I(d){return this.bFA(d)},
bFA(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a9I=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=t.kd()
r=t.gdB()
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
return B.b(t.ot(),$async$a9I)
case 7:f=!f
case 6:case 4:if(f){w=1
break}if(t.c==null){w=1
break}t.dc(new C.eDp(t,s,d,q,r))
case 1:return B.h(u,v)}})
return B.i($async$a9I,v)},
bFk(d){var w=this.gdB()
if(w==null)return
this.dc(new C.eDl(this,w,d))},
a0Q(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a0Q=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(C.itS(r),$async$a0Q)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.oF()
t.m(new C.eGp(t,s))
w=4
return B.b(t.uf(),$async$a0Q)
case 4:if(t.c!=null)t.agv(s)
case 1:return B.h(u,v)}})
return B.i($async$a0Q,v)},
abl(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$abl=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.e
if(q==null){w=1
break}t.a3h(!0)
t.oF()
s=t.c
s.toString
w=3
return B.b(C.Sk(s,q),$async$abl)
case 3:r=e
s=t.c
if(s==null){w=1
break}s=s.L(x.q).f
s.T(B.b3(null,null,null,null,null,A.t,null,B.d(r==null?"Your video is ready. Check your downloads.":r,null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$abl,v)},
Ea(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Ea=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=r.e
if(m==null){w=1
break}r.oF()
t=4
w=7
return B.b(C.aSd(m),$async$Ea)
case 7:q=e
o=r.c
if(o==null){w=1
break}w=8
return B.b(C.aRF(o,q,m.b),$async$Ea)
case 8:t=2
w=6
break
case 4:t=3
l=s.pop()
p=B.ac(l)
o=r.c
if(o==null){w=1
break}o.L(x.q).f.T(B.b3(null,null,null,null,null,A.t,null,B.d("Could not create PDF: "+B.w(p),null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Ea,v)},
FR(d,e){return this.cGF(d,e)},
cGF(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$FR=B.e(function(f,a0){if(f===1)return B.f(a0,v)
for(;;)switch(w){case 0:h={}
if(t.qR()){w=1
break}s=d.w
if(!(s==="hati_kuhowa"||s==="hati_kuhoweya")){w=1
break}h.a=d
if(e){s=t.e
s=s!=null&&s.a===d.a}else s=!1
if(s){t.a3h(!0)
t.oF()
s=h.a=t.e.hQ()}else{r=A.d.bj(t.d,new C.eIE(d))
s=h.a=r>=0?t.d[r].hQ():d.hQ()}s=s.w
q=s==null
p=C.imt(q?"":s)
o=C.hDE(q?"":s)
if(p.length===0){w=1
break}s=t.d
q=B.U(s).k("Y<1>")
n=B.C(new B.Y(s,new C.eIF(h,p),q),q.k("M.E"))
s=h.a.b
w=3
return B.b(t.czK(n.length,o,s),$async$FR)
case 3:m=a0
if(m==null||t.c==null){w=1
break}h.b=null
h.c=!1
w=m==="new"?4:6
break
case 4:s=h.b=C.imn(h.a)
h.c=!0
w=5
break
case 6:s={}
l=n.length===1?A.d.gH(n).a:null
s.a=l
w=l==null?7:9
break
case 7:g=s
w=10
return B.b(t.czJ(n,o),$async$FR)
case 10:a0=g.a=a0
w=8
break
case 9:a0=l
case 8:if(a0==null||t.c==null){w=1
break}k=A.d.fh(t.d,new C.eIG(s))
s=h.a.b
w=11
return B.b(t.czH(k.b,s),$async$FR)
case 11:if(a0!==!0||t.c==null){w=1
break}s=h.b=k.hQ()
case 5:j=C.ims(s,h.a)
s=j.b
if(s===0&&j.a===0&&j.c===0){h=t.c
if(h==null){w=1
break}h.L(x.q).f.T(D.flN)
w=1
break}w=12
return B.b(t.czI(j.a,s,o,j.c),$async$FR)
case 12:i=a0
if(t.c==null){w=1
break}t.m(new C.eIH(h,t,i))
t.pM()
case 1:return B.h(u,v)}})
return B.i($async$FR,v)},
czK(d,e,f){var w=this.c
w.toString
return B.bU(A.L,null,new C.eIa(this,e,f,d),w,!0,!0,!0,null,!1,!1,x.N)},
czJ(d,e){var w=this.c
w.toString
return B.bU(A.L,null,new C.eI9(this,e,d),w,!0,!0,!0,null,!1,!1,x.N)},
czH(d,e){var w=this.c
w.toString
return B.bU(A.L,null,new C.eI3(this,e,d),w,!0,!0,!0,null,!1,!1,x.y)},
czI(d,e,f,g){var w=this.c
w.toString
return B.bU(A.L,null,new C.eI5(this,f,e,d,g),w,!0,!0,!0,null,!1,!1,x.y)},
acO(){var w=null
return B.as(B.q(w,w,A.f,w,w,new B.p(A.aT,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w)},
acP(d,e,f,g){var w,v,u=null,t=B.m(16),s=B.ar(d,A.c3,0.35)
s.toString
s=B.a([d,s],x.O)
w=B.a([new B.ab(0,A.G,d.j(0.28),A.dp,18)],x.V)
v=x.p
return B.A(B.a([B.q(u,B.X(e,A.c,u,u,u,28),A.f,u,u,new B.p(u,u,u,t,w,new B.a8(A.aA,A.aF,A.x,s,u,u),A.n),u,54,u,u,u,u,u,54),A.ew,B.E(B.x(B.a([B.d(g,u,u,u,u,u,u,D.fwV,u,u,u),A.am,B.d(f,u,u,u,u,u,u,B.l(u,u,A.c.j(0.58),u,u,u,u,u,u,u,u,13.5,u,u,A.a8,u,1.35,!0,u,u,u,u,u,u,u,u),u,u,u)],v),A.E,u,A.e,A.j,0,A.p),1)],v),A.E,u,A.e,A.j,0,u,u)},
aXP(d,e){var w=null,v=e.j(0.14),u=B.m(12),t=B.L(e.j(0.22),A.r,1)
return B.q(w,B.d(d,w,2,A.a2,w,w,w,A.VR,A.K,w,w),A.f,w,w,new B.p(v,w,t,u,w,w,A.n),w,w,w,w,A.bV,w,w,w)},
aXS(d,e,f,g,h,i,j){var w=null,v=B.m(16),u=B.m(16),t=g?new B.a8(A.aA,A.aF,A.x,B.a([d.j(0.22),d.j(0.08)],x.O),w,w):w,s=g?w:A.c.j(0.05),r=B.L(g?d.j(0.45):A.c.j(0.08),A.r,1),q=d.j(g?0.22:0.14),p=B.m(13),o=x.p
return B.aH(!1,A.a3,!0,w,B.aP(!1,v,!0,B.q(w,B.A(B.a([B.q(w,B.X(f,d,w,w,w,22),A.f,w,w,new B.p(q,w,w,p,w,w,A.n),w,44,w,w,w,w,w,44),A.bc,B.E(B.x(B.a([B.d(i,w,w,w,w,w,w,A.ng,w,w,w),A.cS,B.d(h,w,w,w,w,w,w,B.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,12.5,w,w,A.a8,w,1.25,!0,w,w,w,w,w,w,w,w),w,w,w)],o),A.E,w,A.e,A.j,0,A.p),1),B.X(A.zc,A.c.j(0.35),w,w,w,14)],o),A.l,w,A.e,A.j,0,w,w),A.f,w,w,new B.p(s,w,r,u,w,t,A.n),w,w,w,w,A.bI,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eF3(e,j),w,w,w,w,w,w,w),A.f,A.L,0,w,w,w,w,w,A.aj)},
c1q(d,e,f,g,h,i){return this.aXS(d,e,f,!1,g,h,i)},
awS(d,e){var w=null,v=A.c.j(0.05),u=B.m(14),t=B.L(A.c.j(0.08),A.r,1)
return B.q(w,B.x(B.a([B.d(e,w,w,w,w,w,w,A.dq,w,w,w),A.bG,B.d(d,w,w,w,w,w,w,B.l(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,11,w,w,A.U,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.l,w,A.e,A.j,0,A.p),A.f,w,w,new B.p(v,w,t,u,w,w,A.n),w,w,w,w,A.a0Y,w,w,w)},
aXR(d,e,f){var w=null,v=B.bp(A.c.j(0.08),w,w,w,A.c,w,A.cq,w,new B.b9(B.m(14),A.a1),w,w,w)
return B.bJ(B.d(e,w,w,w,w,w,w,A.nZ,w,w,w),w,new C.eF2(d,f),v)},
aXQ(d,e){return this.aXR(d,e,null)},
KH(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$KH=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
s=t.a
w=3
return B.b(B.py(l,s.c,s.d),$async$KH)
case 3:if(!e||t.c==null){w=1
break}r=t.e
if(r==null){w=1
break}l=r.b
l=l+"\n"+A.a.aM("=",l.length)+"\n\n"
q=new B.fd(l)
for(s=r.r,p=0;p<s.length;){o=s[p];++p
n=o.b
if(n.length===0)n="(untitled)"
q.a=l+("Slide "+p+": "+n+"\n")
for(l=A.d.gae(o.z),n=new B.eH(l,new C.eHW());n.C();){m=l.gR(0).r
if(A.a.i(m).length!==0){m="  \u2022 "+B.aL(m,"\n"," ")+"\n"
q.a+=m}}l=o.c
if(A.a.i(l).length!==0)q.a+="  Notes: "+l+"\n"
l=q.a+="\n"}w=4
return B.b(B.abg(l.charCodeAt(0)==0?l:l,r.b),$async$KH)
case 4:l=t.a
w=5
return B.b(B.px(l.c,l.d),$async$KH)
case 5:case 1:return B.h(u,v)}})
return B.i($async$KH,v)},
IG(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$IG=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.c
q.toString
s=t.a
w=3
return B.b(B.py(q,s.c,s.d),$async$IG)
case 3:if(!e||t.c==null){w=1
break}r=t.e
if(r==null){w=1
break}w=4
return B.b(B.abg(A.X.aw(r.aj(),null),r.b+".json"),$async$IG)
case 4:q=t.a
w=5
return B.b(B.px(q.c,q.d),$async$IG)
case 5:case 1:return B.h(u,v)}})
return B.i($async$IG,v)},
b9o(){var w,v,u=this,t=u.e
if(t==null||t.r.length===0)return
u.oF()
u.uf()
w=u.c
w.toString
v=B.ec(new C.eIu(u,t),!1,null,x.z)
B.a6(w,!1).ce(v)},
HU(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$HU=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.ot(),$async$HU)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}w=4
return B.b(C.fV4(),$async$HU)
case 4:s=e
if(s==null||t.e==null||t.c==null){w=1
break}r=C.ipo(s.a)
q=t.c
q.toString
w=5
return B.b(B.bU(A.as,null,new C.eCN(s,r),q,!0,!0,!1,null,!1,!1,x.N),$async$HU)
case 5:p=e
if(p==null){w=1
break}if(p==="scroll"){t.dc(new C.eCO(t,s))
w=1
break}if(p==="split")t.dc(new C.eCP(t,r,s))
case 1:return B.h(u,v)}})
return B.i($async$HU,v)},
O1(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$O1=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.qR()){w=1
break}w=3
return B.b(t.ot(),$async$O1)
case 3:if(!e){w=1
break}s=t.c
if(s==null){w=1
break}w=4
return B.b(C.aSc(s,null,null),$async$O1)
case 4:r=e
if(r==null||t.gdB()==null){w=1
break}t.dc(new C.eCT(t,r))
case 1:return B.h(u,v)}})
return B.i($async$O1,v)},
b5U(d){var w=this.e
if(w==null||!C.kN(w.w)||w.as!=null)return
w.as=d.b
w.at=d.c.l()},
aR8(){var w,v,u,t,s=this.c
s.toString
w=this.e
v=w==null
u=v?null:w.as
t=v?null:w.at
return C.aSc(s,t==null?null:B.b0(t),u)},
a9r(d){return this.bDL(d)},
bDL(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a9r=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.qR()){w=1
break}if(!t.At()){s=t.c
if(s==null){w=1
break}s.L(x.q).f.T(D.fm2)
w=1
break}w=3
return B.b(t.aR8(),$async$a9r)
case 3:r=f
if(r==null||t.gdB()==null){w=1
break}t.dc(new C.eCK(t,r,d))
case 1:return B.h(u,v)}})
return B.i($async$a9r,v)},
ai5(d){return this.csD(d)},
csD(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$ai5=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.qR()){w=1
break}if(!t.At()){s=t.c
if(s==null){w=1
break}s.L(x.q).f.T(D.fl9)
w=1
break}w=3
return B.b(t.aR8(),$async$ai5)
case 3:r=f
if(r==null||t.gdB()==null){w=1
break}t.dc(new C.eGL(t,r,d))
case 1:return B.h(u,v)}})
return B.i($async$ai5,v)},
cfc(){var w,v,u=this
if(u.kz())return
w=new B.V(Date.now(),0,!1)
v=u.fx
v=v!=null&&w.bD(v).a<=5e5?++u.fr:u.fr=1
u.fx=w
if(v>=3){u.fr=0
u.fx=null
u.cFF()}},
cFF(){var w,v,u,t,s,r=this.gdB()
if(r==null)return
v=r.z
u=v.length
t=0
for(;;){if(!(t<u)){w=null
break}s=v[t]
if(s.db==="marriage_locked_nim_akuna_deni"){w=s
break}++t}if(w==null)return
this.dc(new C.eIC(this,r,(A.o.aI(w.Q,24)&255)===0||A.a.i(w.r).length===0))},
c1L(){var w,v,u,t,s,r=this.gdB()
if(r==null)return
for(w=r.z,v=w.length,u=null,t=0;t<v;++t){s=w[t]
if(s.db==="marriage_locked_nim_n_4")u=s}if(u==null)return
this.dc(new C.eF6(this,r,u.d))},
c6C(d){var w
if(this.kz())return!1
w=this.e
if((w==null?null:C.kN(w.w))!==!0)return!0
w=d.db
if(w==="marriage_locked"||A.a.a_(w,"marriage_locked_"))return!1
if(A.a.a_(w,"marriage_field_"))return!1
if(C.fRA(d))return!1
w=d.db
if(w==="__kiapo_video__"||A.a.a_(w,"__kiapo_video___"))return!1
if(d.b===D.ls&&A.a.a_(w,"marriage_sign_"))return!1
return!1},
c6D(d){var w
if(this.kz())return!1
w=this.e
if((w==null?null:C.kN(w.w))!==!0)return!0
if(!this.At())return!1
w=d.db
if(w==="marriage_locked"||A.a.a_(w,"marriage_locked_"))return!1
if(C.fRA(d))return!1
w=d.db
if(w==="__kiapo_video__"||A.a.a_(w,"__kiapo_video___"))return!1
if(d.b===D.ls&&A.a.a_(w,"marriage_sign_"))return!1
return A.a.a_(w,"marriage_field_")},
O9(d){return this.bG1(d)},
bG1(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$O9=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.qR()){w=1
break}if(!t.At()){s=t.c
if(s==null){w=1
break}s.L(x.q).f.T(D.fjY)
w=1
break}r=t.e
s=r==null
q=s?null:r.x
p=A.a.i(q==null?"":q)
if(s||p.length===0){w=1
break}w=3
return B.b(C.arz(p),$async$O9)
case 3:o=f
s=t.c
if(s==null){w=1
break}if(o==null||A.a.i(o).length===0){s.L(x.q).f.T(D.fkD)
w=1
break}s=t.e
if(s!==r){s=s==null?null:s.a
s=s!==r.a}else s=!1
if(s){s=r.r
n=s.length===0?null:A.d.gH(s)
if(n!=null)for(s=n.z,q=s.length,m=0;m<q;++m){l=s[m]
k=l.db
if(k==="__kiapo_video__"||A.a.a_(k,"__kiapo_video___")){l.at=o
l.db="__kiapo_video__"}}C.Ow(r)
w=1
break}t.m(new C.eDv(t,d,o))
t.oF()
$.aW.x1$.push(new C.eDw(t))
case 1:return B.h(u,v)}})
return B.i($async$O9,v)},
Wz(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Wz=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.ot(),$async$Wz)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}w=4
return B.b(C.bFK(),$async$Wz)
case 4:s=e
if(s==null||t.gdB()==null){w=1
break}t.dc(new C.eCH(t,s))
case 1:return B.h(u,v)}})
return B.i($async$Wz,v)},
OW(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$OW=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.ot(),$async$OW)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}s=t.kd()
if(s==null||s.at==null){w=1
break}r=s.at
r.toString
w=4
return B.b(C.fUW(r),$async$OW)
case 4:q=e
if(q==null){w=1
break}t.dc(new C.eEy(s,q))
case 1:return B.h(u,v)}})
return B.i($async$OW,v)},
jk(d){this.dc(new C.eCQ(this,d))},
qG(d){return this.bFd(d)},
bFd(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$qG=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)A:switch(w){case 0:if(d!=="print"&&d!=="present"&&t.qR()){w=1
break}m=!D.aT3.q(0,A.a.i(d))
if(m){w=3
break}else f=m
w=4
break
case 3:w=5
return B.b(t.ot(),$async$qG)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}switch(d){case"upload_pdf":t.HU()
w=1
break A
case"sign_paper":t.O1()
w=1
break A
case"hd_photo":t.Wz()
w=1
break A
case"sharpen":t.OW()
w=1
break A
case"print":t.Ea()
w=1
break A
case"rotate":s=t.kd()
if(s!=null)t.dc(new C.eCZ(s))
w=1
break A
case"text_box":t.aP3()
w=1
break A
case"picture":t.WB()
w=1
break A
case"present":t.b9o()
w=1
break A
case"new_slide":t.a9t()
w=1
break A
case"export_json":t.IG()
w=1
break A
case"outline_share":t.KH()
w=1
break A
case"flashcard_tool":t.vT(D.Jj)
w=1
break A
case"quiz_tool":t.vT(D.Jk)
w=1
break A
case"worksheet_tool":t.vT(D.Jl)
w=1
break A
case"duplicate_el":s=t.kd()
if(s==null){w=1
break A}t.dc(new C.eD_(t,s))
w=1
break A
case"delete_el":t.auw()
w=1
break A
case"bring_fwd":s=t.kd()
if(s==null||t.gdB()==null){w=1
break A}t.dc(new C.eD0(t,s))
w=1
break A
case"send_back":s=t.kd()
if(s==null||t.gdB()==null){w=1
break A}t.dc(new C.eDb(t,s))
w=1
break A
case"align_left":s=t.kd()
if(s!=null)t.dc(new C.eDe(s))
w=1
break A
case"align_center":s=t.kd()
if(s!=null)t.dc(new C.eDf(s))
w=1
break A
case"align_right":s=t.kd()
if(s!=null)t.dc(new C.eDg(s))
w=1
break A
case"grayscale":case"brighten":t.OW()
w=1
break A
case"flip_h":s=t.kd()
if(s!=null)t.dc(new C.eDh(s))
w=1
break A
case"flip_v":s=t.kd()
if(s!=null)t.dc(new C.eDi(s))
w=1
break A
case"rectangle":t.pt(D.bm)
w=1
break A
case"circle":t.pt(D.f1)
w=1
break A
case"triangle":t.pt(D.kd)
w=1
break A
case"arrow":t.pt(D.E1)
w=1
break A
case"line":case"divider":t.pt(D.fO)
w=1
break A
case"word_count":r=t.gdB()
if(r==null){w=1
break A}for(q=A.d.gae(r.z),p=new B.eH(q,new C.eDj()),o=0;p.C();){n=A.a.fw(A.a.i(q.gR(0).r),B.ag("\\s+",!0,!1,!1,!1))
o+=new B.Y(n,new C.eDk(),B.U(n).k("Y<1>")).gI(0)}t.c.L(x.q).f.T(B.b3(null,null,null,null,null,A.t,null,B.d(""+o+" words on this slide",null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
w=1
break A
case"title":q=C.cE()
t.jk(C.j6(A.K,!1,t.gqV().d.l(),A.aH,40,A.bt,A.u,0.18,q,"Presentation Title",0,D.n9,0.8,0.1,0.28))
w=1
break A
case"subtitle":q=C.cE()
t.jk(C.j6(A.K,!1,t.gqV().e.l(),A.aH,22,A.bt,A.a8,0.12,q,"Subtitle goes here",0,D.ds,0.8,0.1,0.48))
w=1
break A
case"bullets":t.jk(C.j6(A.bp,!0,4279310375,A.aH,20,A.bt,A.a8,0.5,C.cE(),"\u2022 First point\n\u2022 Second point\n\u2022 Third point",0,D.vm,0.8,0.1,0.22))
w=1
break A
case"numbered":t.jk(C.j6(A.bp,!1,4279310375,A.aH,20,A.bt,A.a8,0.5,C.cE(),"1. First item\n2. Second item\n3. Third item",0,D.vl,0.8,0.1,0.22))
w=1
break A
case"quote":t.jk(C.j6(A.K,!1,4279310375,A.aH,24,A.cK,A.a8,0.25,C.cE(),'"Insert meaningful quote here."',0,D.ds,0.8,0.1,0.3))
w=1
break A
case"citation":t.jk(C.j6(A.bp,!1,4284773515,A.aH,14,A.bt,A.a8,0.1,C.cE(),"Author, Title (Year). Publisher.",0,D.vm,0.8,0.1,0.78))
w=1
break A
case"date_stamp":t.jk(C.j6(A.e4,!1,4279310375,A.aH,14,A.bt,A.a8,0.08,C.cE(),C.bFM(),0,D.ds,0.24,0.72,0.04))
w=1
break A
case"page_number":t.jk(C.j6(A.e4,!1,4279310375,A.aH,13,A.bt,A.a8,0.06,C.cE(),"Page "+(t.f+1),0,D.ds,0.18,0.78,0.9))
w=1
break A
case"header_bar":t.dc(new C.eD1(t))
w=1
break A
case"footer_bar":t.dc(new C.eD2(t))
w=1
break A
case"highlight":t.dc(new C.eD3(t))
w=1
break A
case"redact":t.dc(new C.eD4(t))
w=1
break A
case"callout":t.dc(new C.eD5(t))
w=1
break A
case"checkboxes":t.jk(C.j6(A.bp,!1,4279310375,A.aH,20,A.bt,A.a8,0.45,C.cE(),"\u2610 Task one\n\u2610 Task two\n\u2610 Task three",0,D.ds,0.8,0.1,0.2))
w=1
break A
case"table":t.jk(C.j6(A.bp,!1,4279310375,A.aH,16,A.bt,A.a8,0.55,C.cE(),"Column A\tColumn B\tColumn C\nRow 1\tData\tData\nRow 2\tData\tData",0,D.ds,0.8,0.1,0.18))
w=1
break A
case"memo":t.dc(new C.eD6(t))
w=1
break A
case"letter":t.jk(C.j6(A.bp,!1,4279179050,A.aH,17,A.bt,A.a8,0.82,C.cE(),C.bFM()+"\n\nDear [Name],\n\n[Letter body]\n\nSincerely,\n[Your name]",0,D.ds,0.8,0.1,0.08))
w=1
break A
case"agenda":t.jk(C.j6(A.bp,!1,4279310375,A.aH,22,A.bt,A.U,0.76,C.cE(),"AGENDA\n\n1. Welcome\n2. Updates\n3. Discussion\n4. Action items\n5. Next steps",0,D.vm,0.8,0.1,0.12))
w=1
break A
case"toc":t.jk(C.j6(A.bp,!1,4279310375,A.aH,18,A.bt,A.a8,0.76,C.cE(),"TABLE OF CONTENTS\n\n1. Introduction .......... 1\n2. Main topic .......... 3\n3. Conclusion .......... 8",0,D.ds,0.8,0.1,0.12))
w=1
break A
case"sig_line":t.jk(C.j6(A.bp,!1,4279310375,A.aH,16,A.bt,A.a8,0.08,C.cE(),"Signature: _________________________",0,D.ds,0.8,0.1,0.78))
w=1
break A
case"initial_line":t.jk(C.j6(A.bp,!1,4279310375,A.aH,16,A.bt,A.a8,0.08,C.cE(),"Initials: ______",0,D.ds,0.3,0.65,0.78))
w=1
break A
case"approved":t.jk(C.j6(A.K,!1,4278556265,A.aH,28,A.bt,A.u,0.12,C.cE(),"APPROVED",0,D.n9,0.32,0.62,0.08))
w=1
break A
case"draft":t.jk(C.j6(A.K,!1,4292617766,A.aH,28,A.bt,A.u,0.12,C.cE(),"DRAFT",0,D.ds,0.32,0.62,0.08))
w=1
break A
case"confidential":t.jk(C.j6(A.K,!1,871318596,A.aH,36,A.bt,A.u,0.12,C.cE(),"CONFIDENTIAL",0,D.ds,0.8,0.1,0.42))
w=1
break A
case"sticky":t.dc(new C.eD7(t))
w=1
break A
case"progress":t.dc(new C.eD8(t))
w=1
break A
case"stars":t.jk(C.j6(A.K,!1,4279310375,A.aH,36,A.bt,A.a8,0.12,C.cE(),"\u2605\u2605\u2605\u2605\u2606",0,D.r1,0.8,0.1,0.4))
w=1
break A
case"equation":t.jk(C.j6(A.K,!1,4279310375,A.aH,32,A.bt,A.U,0.14,C.cE(),"y = mx + b",0,D.ds,0.8,0.1,0.38))
w=1
break A
case"timeline":t.jk(C.j6(A.K,!1,4279310375,A.aH,18,A.bt,A.a8,0.2,C.cE(),"2024 \u2500\u2500\u25ba 2025 \u2500\u2500\u25ba 2026\nPhase 1    Phase 2    Phase 3",0,D.vl,0.8,0.1,0.35))
w=1
break A
case"two_col":t.dc(new C.eD9(t))
w=1
break A
case"compare":t.dc(new C.eDa(t))
w=1
break A
case"link_text":t.jk(C.j6(A.bp,!1,4280640491,A.nd,16,A.bt,A.a8,0.1,C.cE(),"https://example.com",0,D.ds,0.8,0.1,0.5))
w=1
break A
case"phone":t.jk(C.j6(A.bp,!1,4279310375,A.aH,18,A.bt,A.a8,0.1,C.cE(),"(555) 123-4567",0,D.ds,0.8,0.1,0.5))
w=1
break A
case"email":t.jk(C.j6(A.bp,!1,4280640491,A.aH,18,A.bt,A.a8,0.1,C.cE(),"name@email.com",0,D.ds,0.8,0.1,0.5))
w=1
break A
case"qr_placeholder":t.dc(new C.eDc(t))
w=1
break A
case"cover_page":r=t.gdB()
if(r==null){w=1
break A}t.dc(new C.eDd(t,r))
w=1
break A
case"invoice":t.jk(C.j6(A.bp,!1,4279179050,A.aH,16,A.bt,A.a8,0.84,C.cE(),"INVOICE #001\n\nBill To:\nItem\tQty\tPrice\nService A\t1\t$100\nTOTAL\t\t$100",0,D.ds,0.8,0.1,0.08))
w=1
break A
case"resume":t.jk(C.j6(A.bp,!1,4279179050,A.aH,17,A.bt,A.a8,0.84,C.cE(),"YOUR NAME\nJob Title\n\nExperience\n\u2022 Role at Company\n\nEducation\n\u2022 Degree",0,D.ds,0.8,0.1,0.08))
w=1
break A
case"minutes":t.jk(C.j6(A.bp,!1,4279310375,A.aH,16,A.bt,A.a8,0.88,C.cE(),"MEETING MINUTES\nDate: "+C.bFM()+"\nAttendees:\n\nDiscussion:\n\nDecisions:\n\nAction items:",0,D.ds,0.8,0.1,0.06))
w=1
break A
case"lab_report":t.jk(C.j6(A.bp,!1,4279310375,A.aH,17,A.bt,A.a8,0.88,C.cE(),"LAB REPORT\n\nHypothesis:\n\nProcedure:\n\nResults:\n\nConclusion:",0,D.ds,0.8,0.1,0.06))
w=1
break A
case"rubric":t.jk(C.j6(A.bp,!1,4279310375,A.aH,15,A.bt,A.a8,0.8,C.cE(),"RUBRIC\nCriteria\tExcellent\tGood\tNeeds work\nContent\t4\t3\t2\nOrganization\t4\t3\t2",0,D.ds,0.8,0.1,0.1))
w=1
break A}case 1:return B.h(u,v)}})
return B.i($async$qG,v)},
czb(d){if(!this.y)return!1
if(this.w!=null)return!1
if(!d)return!0
return!D.fc8.q(0,this.z)},
cza(d){if(this.kd()==null)return!1
if(this.w!=null)return!1
if(d)return!1
return this.as},
bb6(d,e,f,g,h,i){var w,v,u,t,s,r,q,p=null,o=d===D.ct,n=o?12:10
if(e)w=f.j(0.25)
else w=g?A.c.j(0.06):A.w.j(0.04)
v=B.m(12)
u=e?f:A.bA
u=B.L(u,A.r,o&&e?2:1)
t=C.ipd(d)
s=o?12:18
r=o?A.I:A.cY
if(o)if(e)q=f
else q=g?A.ab:A.an
else q=p
n=B.a([B.q(p,B.d(t,p,p,p,p,p,p,B.l(p,p,q,p,p,p,p,p,p,p,p,s,p,p,r,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),A.f,p,p,new B.p(w,p,u,v,p,p,A.n),p,p,p,p,new B.R(n,8,n,8),p,p,p)],x.p)
if(i)n.push(B.ap(p,B.q(p,D.PS,A.f,p,p,D.Fm,p,12,p,p,p,p,p,12),p,p,p,-2,-2,p))
return new B.D(A.fC,B.az(p,new B.an(A.a0,p,A.ac,A.f,n,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,h,p,p,p,p,p,p,!1,A.a4),p)},
bRF(d){var w,v=null,u=this.kd()
if(u==null)return A.bM
w=B.a([A.af,B.d("Anim:",v,v,v,v,v,v,B.l(v,v,d?A.aD:A.an,v,v,v,v,v,v,v,v,10,v,v,A.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.bo],x.p)
A.d.v(w,new B.N(D.Sq,new C.eEx(this,u,d),x.bR))
return B.A(w,A.l,v,A.e,A.j,0,v,v)},
vT(d){return this.bDT(d)},
bDT(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$vT=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=D.aSY.q(0,d)
if(s){w=3
break}else f=s
w=4
break
case 3:w=5
return B.b(t.ot(),$async$vT)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}t.dc(new C.eCR(t,d))
case 1:return B.h(u,v)}})
return B.i($async$vT,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
if(h.x)return D.fas
w=h.e
if(w==null)return h.bHN()
v=h.gdB()
v.toString
u=h.c
u.toString
t=B.P(u).ax.a===A.H
u=h.c
u.toString
s=x.w
r=B.aF(u,A.c1,s).w.a.a<900
q=!r
u=h.c
u.toString
p=B.aF(u,A.eS,s).w.f.d>40
s=h.w==null
o=!s
u=!p
n=!u||o
m=t?A.c3:D.bjC
l=x.p
k=B.a([],l)
if(s){j=h.e
j=j!=null&&j.gTb()}else j=!1
if(j)k.push(new C.a94(h.a.c,!1,h.e.gbdl(),h.gcf9(),g))
else if(s&&h.e!=null&&!h.kz()&&C.clz(h.e.w)){j=h.a
k.push(new C.a94(j.c,j.d,g,h.gcgi(),g))}if(s)k.push(h.bRA(w,t,r))
if(s&&h.kz()){w=t?A.fY:A.lh
j=B.m(14)
i=B.L(A.bn.j(0.35),A.r,1)
k.push(B.q(g,B.A(B.a([D.bYR,A.af,B.E(B.d("Received copy \u2014 view, print, or download only. Editing is turned off.",g,g,g,g,g,g,B.l(g,g,t?A.c:A.fY,g,g,g,g,g,g,g,g,12,g,g,A.U,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),1)],l),A.l,g,A.e,A.j,0,g,g),A.f,g,g,new B.p(w,g,i,j,g,g,A.n),g,g,g,A.yE,A.hK,g,g,g))}w=!n
if(w&&!h.kz())k.push(h.c7A(t,r))
if(w&&h.kz())k.push(h.cGG(t))
if(r&&h.kd()!=null&&w&&!h.kz())k.push(h.c7v(t))
j=B.a([],l)
if(q&&w)j.push(new B.a5(132,g,h.b8O(t,!0),g))
i=B.a([],l)
if(r&&w)i.push(new B.a5(g,72,h.b8O(t,!1),g))
i.push(B.E(new B.bL(A.b1,g,g,h.bJ8(v,t,!s||p),g),1))
if(h.czb(r)&&u&&s&&!h.kz())i.push(h.ceW(v,t,r))
j.push(B.E(B.x(i,A.l,g,A.e,A.j,0,A.p),1))
if(q&&!h.kz()&&h.cza(!1))j.push(new B.a5(240,g,h.bUv(t),g))
k.push(B.E(B.A(j,A.al,g,A.e,A.j,0,g,g),1))
if(u&&s)k.push(new B.a5(g,r?72:h.a.e,g,g))
w=B.a([B.x(k,A.l,g,A.e,A.j,0,A.p)],l)
if(o&&r)w.push(h.c7w(t))
return B.c4(g,m,B.bm(!1,new B.an(A.a0,g,A.ac,A.t,w,g),!0,!1,A.ag,!0,!0),g,!1,!1,g,!1)},
bHN(){var w,v,u,t,s,r=this,q=null,p=r.c
p.toString
w=B.P(p).ax.a===A.H
if(w){p=r.fy
p===$&&B.c()
v=p.r
if(!(v!=null&&v.a!=null))p.f2(0,!0)}else{p=r.fy
p===$&&B.c()
v=p.r
if(v!=null&&v.a!=null)p.u3(0,!1)}p=w?A.c3:A.c
v=r.c
v.toString
v=B.aF(v,A.dS,x.w).w
u=r.a.e
t=x.p
s=B.a([r.ce4(A.bn,A.qK,new C.eDz(r),r.gciu(),"School & document toolkit \u2014 edit PDFs, photos, sign papers, present, and build class decks","NGMY SLIDES"),A.bz,B.A(B.a([B.E(r.asb(A.bn,A.i2,"Blank Presentation",new C.eDA(r)),1),A.au,B.E(r.asb(A.b2,A.v_,"Class Template",new C.eDB(r)),1)],t),A.l,q,A.e,A.j,0,q,q)],t)
if(r.a.d&&r.gZ0()&&!A.d.aV(r.d,new C.eDC()))A.d.v(s,B.a([A.W,new B.mq(r.asb(A.c4,A.j8,"Create Hati ya Kiapo",r.gc48()),D.hrg)],t))
s.push(A.nc)
s.push(B.d("YOUR PRESENTATIONS",q,q,q,q,q,q,B.l(q,q,w?A.aD:A.an,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1.2,q,q,q,q,q,q),q,q,q))
s.push(A.ae)
t=r.d
if(t.length===0)s.push(r.bEG(w))
else{t=new B.i3(t,B.U(t).k("i3<1>"))
A.d.v(s,t.gdO(t).dM(0,new C.eDD(r,w),x.l))}return B.c4(q,p,B.bm(!1,B.cl(s,q,q,new B.R(18,v.r.b+12,18,u),q,q,A.ah,!1),!0,!1,A.ag,!0,!1),q,!1,!1,q,q)},
bPH(){this.m(new C.eEd(this))
var w=this.c
w.toString
if(B.aF(w,A.c1,x.w).w.a.a<900){w=$.aW.ap$.d.c
if(w!=null)w.js()}},
agO(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$agO=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.kd()==null){w=1
break}s=t.c
s.toString
s=B.P(s)
r=t.c
r.toString
w=3
return B.b(B.bU(A.L,null,new C.eGo(t,s.ax.a===A.H),r,!0,!0,!0,null,!1,!1,x.H),$async$agO)
case 3:case 1:return B.h(u,v)}})
return B.i($async$agO,v)},
Bu(d,e){return this.czx(d,e)},
czx(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$Bu=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:j=r.c
j.toString
w=3
return B.b(B.hK(D.Z_,!0,"Dismiss",j,new C.eHX(),new C.eHY(r,d,e),A.iN,!0,x.N),$async$Bu)
case 3:o=g
if(o==null||r.c==null){w=1
break}j=o==="rename"
if(j||o==="duplicate")if(d.z){r.akc()
w=1
break}n=o==="transfer_hati"
if(n&&d.z&&!d.gTb()){r.akc()
w=1
break}w=o==="pdf"?4:6
break
case 4:t=8
w=11
return B.b(C.aSd(d),$async$Bu)
case 11:q=g
j=r.c
if(j==null){w=1
break}w=12
return B.b(C.aRF(j,q,d.b),$async$Bu)
case 12:t=2
w=10
break
case 8:t=7
i=s.pop()
p=B.ac(i)
j=r.c
if(j==null){w=1
break}j.L(x.q).f.T(B.b3(null,null,null,null,null,A.t,null,B.d("Could not create PDF: "+B.w(p),null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
w=10
break
case 7:w=2
break
case 10:w=5
break
case 6:w=n?13:15
break
case 13:w=16
return B.b(r.FR(d,!1),$async$Bu)
case 16:w=14
break
case 15:w=o==="delete"?17:19
break
case 17:j=r.c
j.toString
w=20
return B.b(B.hK(D.Z_,!0,"Dismiss",j,new C.eHZ(),new C.eI_(d),A.a3,!0,x.y),$async$Bu)
case 20:if(g===!0)r.OH(d)
w=18
break
case 19:w=j?21:23
break
case 21:w=24
return B.b(r.ahQ("Rename presentation",d.b),$async$Bu)
case 24:l=g
if(l!=null)r.ctS(d,l)
w=22
break
case 23:if(o==="duplicate"){k=d.aj()
k.n(0,"id",C.cE())
k.n(0,"name",d.b+" (Copy)")
r.m(new C.eI0(r,k))
r.pM()}case 22:case 18:case 14:case 5:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Bu,v)},
b3R(d,e){var w=null
return B.bO(!1,D.fWW,w,w,!0,w,w,w,e,w,B.fv(w,w,w,w,w,w,w,w,w,w,w,A.bn,w,w,w,A.az,w,A.lK,w,w,w,w,w,A.kC,w,w))},
bEG(d){var w,v=null
if(!d)return B.q(v,D.bxl,A.f,v,v,B.a7t(A.aG,22),v,v,v,v,A.ey,v,v,1/0)
w=this.fy
w===$&&B.c()
return B.c5(w,new C.eCW(this,!0),v)},
bNN(d,e,f){var w=new B.N(B.a(d.split(" \u2022 "),x.s),new C.eE1(),x.dv).bY(0,new C.eE2()),v=B.C(w,w.$ti.k("M.E"))
return new B.D(G.als,this.aPm(v,e,new C.eE3(),f),null)},
aPm(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=x.p,l=B.a([],m)
for(w=f!=null,v=0;v<d.length;++v){u=B.a([],m)
if(v>0)u.push(A.e8)
t=e.j(g?0.14:0.1)
s=new B.aN(6,6)
r=new B.ay(e.j(g?0.55:0.45),1,A.r,-1)
q=B.a([],m)
if(w){p=f.$1(d[v])
A.d.v(q,B.a([B.X(p,g?A.ab:A.bw,n,n,n,10),A.r8],m))}p=d[v]
o=g?A.c.j(0.85):A.aM
q.push(B.d(p,n,1,n,n,n,n,new B.G(!0,o,n,n,n,n,9.5,A.I,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n))
u.push(B.q(n,new B.c8(A.aL,A.e,A.P,A.l,n,A.p,n,0,q,n),A.f,n,n,new B.p(t,n,new B.bH(r,r,r,r),new B.be(s,s,s,s),n,n,A.n),n,n,n,n,A.n_,n,n,n))
A.d.v(l,u)}return B.ev(A.a7,B.A(l,A.l,n,A.e,A.P,0,n,n),A.f,A.e7)},
bEE(d,e,f){return this.aPm(d,e,null,f)},
bNP(d,e,f){var w,v=d.w
if(v==="hati_kuhowa")w=D.duc
else if(v==="hati_kuhoweya")w=D.dey
else{if(v==="hati_kiapo_uongozi")v=D.d04
else v=C.kN(v)?D.d7Y:A.IA
w=v}v=this.fy
v===$&&B.c()
return B.c5(v,new C.eE6(this,f,e,d,w),null)},
c7w(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.kd()
if(i==null||i.b!==D.d_)return A.bM
w=k.Xy(i)
v=k.avy(i)
u=A.w.j(0.55)
t=x.p
s=B.bm(!1,new B.D(A.Cj,B.A(B.a([B.d("Edit text",j,j,j,j,j,j,B.l(j,j,A.c.j(0.9),j,j,j,j,j,j,j,j,15,j,j,A.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),A.b3,B.bO(!1,D.fSj,j,j,!0,j,j,j,new C.eFx(k),j,j)],t),A.l,j,A.e,A.j,0,j,j),j),!0,!1,A.ag,!0,!0)
r=d?A.as:A.c
q=B.m(18)
p=B.L(A.bn.j(0.45),A.r,1)
o=B.a([new B.ab(0,A.G,A.w.j(0.25),A.J,20)],x.V)
n=i.x
m=i.y
l=i.z
r=B.E(new B.D(A.h5,new B.bN(new B.p(r,j,p,q,o,j,A.n),A.bj,new B.D(A.f_,B.aM(j,A.Z,!0,j,!0,A.t,j,B.aO(),w,A.bn,j,j,j,j,2,D.c44,A.y,!0,j,!0,j,!0,v,A.ak,j,j,j,j,j,A.xi,j,j,j,j,j,j,!1,"\u2022",j,new C.eFy(k,i),j,j,j,!1,j,j,!1,j,!0,j,A.ad,j,j,j,j,j,j,j,j,j,j,j,B.l(j,j,d?A.c:A.a_,j,l,j,j,j,j,j,j,18,m,j,n,j,1.35,!0,j,j,j,j,j,j,j,j),!0,A.a5,A.AI,A.ao,j,A.Vf,j,j),j),j),j),1)
q=B.m(16)
p=d?A.br:A.c
o=B.L(d?A.aM:A.bl,A.r,1)
n=B.E(B.ce(B.A(B.a([k.uJ(G.OT,j,new C.eFz(k,i),d),k.uJ(G.a25,j,new C.eFA(k,i),d),k.uJ(I.apU,j,new C.eFB(k,i),d),k.uJ(I.a2T,j,new C.eFC(k,i),d),k.uJ(k.bEC(i.as),j,new C.eFD(k,i),d),k.uJ(D.ar1,j,new C.eFE(k,i),d),k.uJ(D.ar0,j,new C.eFF(k,i),d)],t),A.l,j,A.e,A.j,0,j,j),A.t,j,A.y,j,j,j,j,A.aL),1)
m=A.i.M(i.w)
return B.bS(0,B.aH(!1,A.a3,!0,j,B.x(B.a([s,r,new B.D(H.alB,B.q(j,B.A(B.a([n,A.af,B.d(""+m+" pt",j,j,j,j,j,j,B.l(j,j,d?A.aD:A.an,j,j,j,j,j,j,j,j,11,j,j,A.I,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),A.dh],t),A.l,j,A.e,A.j,0,j,j),A.f,j,j,new B.p(p,j,o,q,j,j,A.n),j,j,j,j,A.lL,j,j,j),j)],t),A.l,j,A.e,A.j,0,A.p),A.f,u,0,j,j,j,j,j,A.aj),0,0,0)},
c7v(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.kd()
if(m==null)return A.bM
w=m.b
v=w===D.d_
u=B.m(18)
t=x.O
t=d?B.a([A.br,A.a_],t):B.a([A.c,A.aS],t)
s=B.L(d?A.aM:A.bl,A.r,1)
r=B.a([new B.ab(0,A.G,A.w.j(0.12),A.cC,16)],x.V)
q=x.p
p=B.a([],q)
if(v)p.push(o.b7p(A.j7,"Edit",new C.eFi(o,m),d,!0))
if(w===D.lS)p.push(o.b7p(A.HM,"Shape & ring",new C.eFj(o),d,!0))
p.push(o.uJ(A.D9,"Format",new C.eFk(o),d))
if(v)A.d.v(p,B.a([o.uJ(G.OT,n,new C.eFl(o,m),d),o.uJ(D.ar1,n,new C.eFm(o,m),d),o.uJ(D.ar0,n,new C.eFn(o,m),d)],q))
p.push(A.b3)
p.push(o.cxo(A.ej,n,o.gaTx(),d,!0))
p.push(o.uJ(A.hN,"Done",new C.eFo(o),d))
return B.q(n,B.A(p,A.l,n,A.e,A.j,0,n,n),A.f,n,n,new B.p(n,n,s,u,r,new B.a8(A.a7,A.aa,A.x,t,n,n),A.n),n,n,n,A.Ch,A.lL,n,n,n)},
bEC(d){switch(d.a){case 2:return D.a2Q
case 1:case 5:return D.a2S
default:return D.a2R}},
c8q(d){switch(d.a){case 0:case 4:return A.K
case 2:return A.e4
default:return A.bp}},
aC2(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o,n=null
if(i)w=A.ay
else if(h)w=A.c
else{v=g?A.ab:A.aM
w=v}v=B.m(12)
u=B.m(12)
t=h?K.I4:n
if(h)s=n
else s=g?A.c.j(0.06):A.cd
r=e==null
q=r?10:12
p=x.p
o=B.a([B.X(d,w,n,n,n,16)],p)
if(!r)A.d.v(o,B.a([A.e8,B.d(e,n,n,n,n,n,n,B.l(n,n,w,n,n,n,n,n,n,n,n,12,n,n,A.I,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],p))
return new B.D(A.pm,B.aH(!1,A.a3,!0,n,B.aP(!1,v,!1,B.ez(new B.D(new B.R(q,8,q,8),B.A(o,A.l,n,A.e,A.P,0,n,n),n),n,new B.p(s,n,n,u,n,t,A.n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,f,n,n,n,n,n,n,n),A.f,A.L,0,n,n,n,n,n,A.aj),n)},
uJ(d,e,f,g){return this.aC2(d,e,f,g,!1,!1)},
b7p(d,e,f,g,h){return this.aC2(d,e,f,g,h,!1)},
cxo(d,e,f,g,h){return this.aC2(d,e,f,g,!1,h)},
bRA(d,e,f){var w,v,u,t,s,r,q,p=this,o=null,n=B.m(20),m=x.O
m=e?B.a([A.br,A.a_],m):B.a([A.c,A.oe],m)
w=B.L(e?A.aM:A.nn,A.r,1.2)
v=B.a([new B.ab(0,A.G,A.bn.j(e?0.18:0.1),A.cC,18)],x.V)
u=p.a3I(A.eM,"Back",p.gbKT(),e)
t=d.b
s=f?14:15
t=B.d(t,o,1,A.a2,o,o,o,B.l(o,o,e?A.c:A.a_,o,o,o,o,o,o,o,o,s,o,o,A.u,o,o,!0,o,-0.2,o,o,o,o,o,o),o,o,o)
s=p.f
r=d.r.length
q=x.p
r=B.a([u,A.dh,B.E(B.A(B.a([new B.dm(1,A.co,t,o),A.af,B.d(""+(s+1)+" of "+r,o,1,o,o,o,o,B.l(o,o,e?A.bW:A.an,o,o,o,o,o,o,o,o,11,o,o,A.U,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],q),A.uq,o,A.e,A.j,0,A.d5,o),1)],q)
if(!p.kz()){u=p.a3I(A.pz,"Undo",p.ax.length===0?o:p.gcHg(),e)
A.d.v(r,B.a([u,p.a3I(D.bSi,"Redo",p.ay.length===0?o:p.gcsz(),e)],q))}r.push(p.a3I(A.za,"PDF",new C.eEq(p),e))
r.push(p.a3I(A.i3,"Download as video",new C.eEr(p),e))
if(!p.kz())r.push(B.CE(o,o,B.X(A.oz,e?A.ab:A.bw,o,o,o,o),new C.eEs(p),A.J,new C.eEt(p),A.ag,"More",x.N))
r.push(A.dh)
r.push(B.aH(!1,A.a3,!0,o,B.aP(!1,B.m(14),!0,B.ez(D.etg,o,new B.p(o,o,o,B.m(14),o,K.I4,A.n),o,o,o),o,!0,o,o,o,o,o,o,o,o,o,o,o,p.gaCS(),o,o,o,o,o,o,o),A.f,A.L,0,o,o,o,o,o,A.aj))
return B.q(o,B.A(r,A.l,o,A.e,A.j,0,o,o),A.f,o,o,new B.p(o,o,w,n,v,new B.a8(A.aA,A.aF,A.x,m,o,o),A.n),o,o,o,D.bCl,D.bHN,o,o,o)},
cGG(d){var w=this,v=null,u=B.m(18),t=d?A.as.j(0.92):A.c.j(0.96),s=B.L(d?A.cl:A.bl,A.r,1)
return B.q(v,B.ce(B.A(B.a([w.j5(A.uX,"Print",new C.eII(w),d),w.j5(A.za,"Download PDF",new C.eIJ(w),d),w.j5(A.qP,"Present",w.gaCS(),d)],x.p),A.l,v,A.e,A.j,0,v,v),A.t,v,A.y,v,v,v,v,A.aL),A.f,v,v,new B.p(t,v,s,u,v,v,A.n),v,v,v,A.yE,G.anf,v,v,v)},
a3I(d,e,f,g){var w,v=null
if(f==null)w=g?A.aT:A.dx
else w=g?A.ab:A.aM
return B.aI(v,v,v,v,B.X(d,w,v,v,v,20),v,v,v,f,v,v,v,v,e,A.cg)},
c7A(d,e){var w,v,u,t,s,r=this,q=null,p=B.a(["Home","Insert","School","Tools","Design","Transitions","View"],x.s),o=r.e
if(o==null)o=q
else{o=o.CW
o=(o==null?"":o).length!==0}w=o===!0
o=B.m(18)
v=d?A.as.j(0.92):A.c.j(0.96)
u=B.L(d?A.cl:A.bl,A.r,1)
t=x.f0
t=B.C(new B.N(p,new C.eFI(r,d),t),t.k("ak.E"))
t.push(new B.D(A0.amV,new B.ff(new C.eFJ(r),q),q))
A.d.v(t,w?B.a([new B.D(S.wt,r.aix(A.k7,"Ending celebration",r.gciH(),d),q),new B.D(S.wt,r.aix(A.HM,"Logo ring & frame",r.gcjo(),d),q)],x.p):A.f7)
A.d.v(t,w?B.a([new B.D(S.wt,r.aix(A.mj,"Look and feel",r.gcjp(),d),q),new B.D(S.wt,r.aix(A.pC,"Edit this slide's text",r.gcjW(),d),q)],x.p):A.f7)
t.push(new B.D(S.wt,B.h6(B.az(q,B.q(q,D.f9Q,A.f,q,q,new B.p(q,q,q,B.m(999),B.a([new B.ab(0,A.G,N.lF.j(0.4),A.J,10)],x.V),D.at6,A.n),q,34,q,q,A.f5,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.eFK(r),q,q,q,q,q,q,!1,A.a4),q,"Books \u2014 write and print a fold & staple book",q,q),q))
t=B.ce(B.A(t,A.l,q,A.e,A.j,0,q,q),A.t,q,A.y,q,D.bIg,q,q,A.aL)
s=e?8:10
return B.q(q,B.x(B.a([t,B.ce(r.cv_(d),A.t,q,A.y,q,new B.R(8,2,8,s),q,q,A.aL)],x.p),A.al,q,A.e,A.j,0,A.p),A.f,q,q,new B.p(v,q,u,o,q,q,A.n),q,q,q,A.yE,q,q,q,q)},
cv_(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0="Text Box",a1="New Slide",a2="Delete Slide"
switch(e.z){case"School":w=B.a([],x.p)
for(v=0;v<5;++v){u={}
t=D.dnj[v]
u.a=null
s=u.a=t.b
w.push(e.m_(e.cwL(s),t.a,new C.eH6(u,e),a3,D.aSY.q(0,s)))}w.push(e.j5(A.kW,"Notes Slide",new C.eH7(e),a3))
w.push(e.m_(A.HL,"Quiz",new C.eH8(e),a3,!0))
w.push(e.m_(O.Hm,"Worksheet",new C.eHj(e),a3,!0))
w.push(e.m_(W.HO,"Flashcard",new C.eHu(e),a3,!0))
w.push(e.m_(A.PI,"Lab Report",new C.eHF(e),a3,!0))
w.push(e.m_(A.qN,"Rubric",new C.eHM(e),a3,!0))
w.push(e.m_(A.pu,"Minutes",new C.eHN(e),a3,!0))
w.push(e.m_(A.oy,"Syllabus",new C.eHO(e),a3,!0))
w.push(e.m_(A.a3q,"Timeline",new C.eHP(e),a3,!0))
return B.A(w,A.l,d,A.e,A.j,0,d,d)
case"Tools":w=B.a([],x.p)
for(v=0;v<74;++v){r=D.doH[v]
w.push(e.m_(r.b,r.c,new C.eHQ(e,r),a3,!D.aT3.q(0,A.a.i(r.a))))}return B.A(w,A.l,d,A.e,A.j,0,d,d)
case"Insert":return B.A(B.a([e.j5(A.wP,a0,e.gaP2(),a3),e.j5(A.uS,"Picture",new C.eH9(e),a3),e.j5(A.zm,"Bio link",new C.eHa(e),a3),e.j5(A.a3p,"Table",new C.eHb(e),a3),e.j5(A.PM,"Sticky",new C.eHc(e),a3),e.j5(A.t6,"Divider",new C.eHd(e),a3),e.j5(A.zu,"Header",new C.eHe(e),a3),e.m_(A6.t4,"Rectangle",new C.eHf(e),a3,!0),e.m_(A.ps,"Circle",new C.eHg(e),a3,!0),e.m_(A.a2F,"Triangle",new C.eHh(e),a3,!0),e.m_(A.jH,"Arrow",new C.eHi(e),a3,!0),e.m_(D.bQK,"Parallelogram",new C.eHk(e),a3,!0),e.m_(D.bTc,"Hexagon",new C.eHl(e),a3,!0),e.m_(A.t6,"Line",new C.eHm(e),a3,!0),e.m_(A.za,"PDF",new C.eHn(e),a3,!0),e.m_(N.a3z,"Signature",new C.eHo(e),a3,!0),e.j5(A5.CU,"Quote",new C.eHp(e),a3),e.j5(D.a2d,a1,new C.eHq(e),a3)],x.p),A.l,d,A.e,A.j,0,d,d)
case"Design":w=e.c
w.toString
w=B.aF(w,A.c1,x.w).w
u=x.p
t=B.A(B.a([e.aPV("Wide 16:9",D.E_,a3),e.aPV("Short 9:16",D.oQ,a3),new B.D(A.fC,B.n3(D.bVm,d,D.fOw,d,new C.eHr(e),d,d,d,d),d)],u),A.l,d,A.e,A.j,0,d,d)
q=B.A(B.a([e.bL7("This slide",!e.Q,a3,new C.eHs(e)),A.bo,e.aSc("All slides",e.Q,a3,new C.eHt(e),!0)],u),A.l,d,A.e,A.j,0,d,d)
p=e.bL8()
p=B.d(p,d,d,d,d,d,d,B.l(d,d,a3?A.bW:A.bN,d,d,d,d,d,d,d,d,10,d,d,A.a8,d,d,!0,d,d,d,d,d,d,d,d),d,d,d)
o=B.d("COLORS",d,d,d,d,d,d,B.l(d,d,a3?A.aD:A.an,d,d,d,d,d,d,d,d,10,d,d,A.I,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
n=x.cT
n=B.C(new B.N(D.a5w,new C.eHv(e),n),n.k("ak.E"))
n=B.ce(B.A(n,A.l,d,A.e,A.j,0,d,d),A.t,d,A.y,d,d,d,d,A.aL)
m=B.d("TEXT COLORS",d,d,d,d,d,d,B.l(d,d,a3?A.aD:A.an,d,d,d,d,d,d,d,d,10,d,d,A.I,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
l=B.a([],u)
for(v=0;v<10;++v){k=D.dpJ[v]
j=B.b0(k)
i=new B.ay(k===4294967295?A.dx:A.aT,1.5,A.r,-1)
l.push(new B.D(A.fC,B.az(d,B.q(d,d,A.f,d,d,new B.p(j,d,new B.bH(i,i,i,i),d,d,d,A.a6),d,24,d,d,d,d,d,24),A.y,!1,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,new C.eHw(e,k),d,d,d,d,d,d,!1,A.a4),d))}l=B.ce(B.A(l,A.l,d,A.e,A.j,0,d,d),A.t,d,A.y,d,d,d,d,A.aL)
j=B.d("SLIDE DESIGNS \xb7 first 5 free",d,d,d,d,d,d,B.l(d,d,a3?A.aD:A.an,d,d,d,d,d,d,d,d,10,d,d,A.I,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
h=$.bH2()
g=B.U(h).k("N<1,D>")
h=B.C(new B.N(h,new C.eHx(e,a3),g),g.k("ak.E"))
return new B.a5(w.a.a-20,d,B.x(B.a([t,A.T,q,A.am,p,A.T,o,A.aw,n,A.T,m,A.aw,l,A.T,j,A.aw,B.ce(B.A(h,A.l,d,A.e,A.j,0,d,d),A.t,d,A.y,d,d,d,d,A.aL),A.am,e.c4f(a3)],u),A.E,d,A.e,A.P,0,A.p),d)
case"Transitions":f=e.kd()
w=e.c
w.toString
w=B.aF(w,A.c1,x.w).w
u=new C.eH5(e)
t=new C.eHR(e,a3)
q=x.p
p=B.a([],q)
if(f!=null){o=B.d("ELEMENT ANIMATION",d,d,d,d,d,d,B.l(d,d,a3?A.aD:A.an,d,d,d,d,d,d,d,d,10,d,d,A.I,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
n=t.$4(D.Sq,f.dy,new C.eHy(e,u,f),A.b2)
A.d.v(p,B.a([o,A.aw,n,A.T,B.d("SLIDE TRANSITION",d,d,d,d,d,d,B.l(d,d,a3?A.aD:A.an,d,d,d,d,d,d,d,d,10,d,d,A.I,d,d,!0,d,1,d,d,d,d,d,d),d,d,d),A.aw],q))}q=e.gdB()
q=q==null?d:q.r
p.push(t.$4(D.Sq,q,new C.eHz(e,u),A.bn))
return new B.a5(w.a.a-20,d,B.x(p,A.E,d,A.e,A.P,0,A.p),d)
case"View":w=e.y?"Hide Notes":"Show Notes"
return B.A(B.a([e.j5(A.kW,w,new C.eHA(e),a3),e.j5(A.uX,"Print deck",new C.eHB(e),a3),e.m_(D.ap2,"Export JSON",new C.eHC(e),a3,!0),e.j5(A.fM,"Duplicate Slide",e.gaUs(),a3),e.j5(A.ej,a2,e.gaTy(),a3),e.cAT(a3)],x.p),A.l,d,A.e,A.j,0,d,d)
case"Home":default:f=e.kd()
w=x.p
u=B.a([e.j5(D.a2d,a1,new C.eHD(e),a3),e.j5(A.fM,"Duplicate",e.gaUs(),a3),e.j5(A.ej,a2,e.gaTy(),a3),e.j5(A.qP,"Present",e.gaCS(),a3),e.j5(A.D7,a0,e.gaP2(),a3),e.j5(A.D_,"Fit Text",new C.eHE(e),a3),e.j5(A.za,"Download PDF",new C.eHG(e),a3)],w)
t=e.e
if(t!=null){t=t.w
t=t==="hati_kuhowa"||t==="hati_kuhoweya"}else t=!1
if(t)u.push(e.j5(A.jL,"Transfer",new C.eHH(e),a3))
if(f!=null){w=B.a([A.af,e.j5(G.OT,"Bold",new C.eHI(e,f),a3),e.j5(G.a25,"Italic",new C.eHJ(e,f),a3),e.j5(G.aoE,"Underline",new C.eHK(e,f),a3),e.j5(Ag.OU,"Bullets",new C.eHL(e,f),a3),e.bUe(f,a3)],w)
if(!A.a.a_(f.db,"__design__"))w.push(e.bRF(a3))
w.push(e.j5(D.bPs,"Delete",e.gaTx(),a3))
A.d.v(u,w)}return B.A(u,A.l,d,A.e,A.j,0,d,d)}},
aPV(d,e,f){var w,v,u,t=null,s=this.e
s=s==null?t:s.d
w=e===D.oQ
v=x.p
u=B.a([B.d(d,t,t,t,t,t,t,G.abz,t,t,t)],v)
if(w)A.d.v(u,B.a([A.dh,D.bUy],v))
return new B.D(A.fC,B.jx(t,t,t,B.A(u,A.l,t,A.e,A.P,0,t,t),t,new C.eDu(this,w,e),s===e,A.bn.j(0.25),t,t,t),t)},
cAT(d){var w,v,u,t,s,r=this,q=null,p=r.gdB()
if(p==null)return A.bM
w=p.w
if(!(w>0)){v=r.e
v=v==null?q:v.e
w=v==null?5:v}v=B.L(d?A.aT:A.cx,A.r,1)
u=B.m(8)
t=B.X(A.Hk,d?A.aD:A.an,q,q,q,14)
s=B.aI(q,q,q,q,D.as4,q,q,q,new C.eId(r,p),q,q,q,q,q,A.cg)
return B.q(q,B.A(B.a([t,s,B.d(""+w+"s",q,q,q,q,q,q,B.l(q,q,d?A.c:A.bq,q,q,q,q,q,q,q,q,11,q,q,A.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.aI(q,q,q,q,D.arW,q,q,q,new C.eIe(r,p),q,q,q,q,q,A.cg)],x.p),A.l,q,A.e,A.P,0,q,q),A.f,q,q,new B.p(q,q,v,u,q,q,A.n),q,q,q,A.H0,A.mZ,q,q,q)},
cwL(d){switch(d.a){case 6:return W.HO
case 7:return A.HL
case 8:return O.Hm
case 4:return A.zu
default:return A.kW}},
bUe(d,e){var w=null,v=B.L(e?A.aT:A.cx,A.r,1),u=B.m(8),t=B.aI(w,w,w,w,D.as4,w,w,w,new C.eED(this,d),w,w,w,w,w,A.cg),s=A.i.M(d.w)
return B.q(w,B.A(B.a([t,B.d(""+s,w,w,w,w,w,w,B.l(w,w,e?A.c:A.bq,w,w,w,w,w,w,w,w,w,w,w,A.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aI(w,w,w,w,D.arW,w,w,w,new C.eEE(this,d),w,w,w,w,w,A.cg)],x.p),A.l,w,A.e,A.P,0,w,w),A.f,w,w,new B.p(w,w,v,u,w,w,A.n),w,w,w,A.uD,A.mZ,w,w,w)},
c4f(d){var w=null
return B.CE(B.E7(B.X(A8.a2g,d?A.ab:A.bw,w,w,w,16),w,w,D.fUd,w,w,w),w,w,new C.eFa(),A.J,this.gbFj(),A.cn,"Slide layout",x.fO)},
m_(d,e,f,g,h){var w=null,v=B.m(14),u=B.m(14),t=g?A.c.j(0.06):A.cd,s=B.L(g?A.dr:A.bl,A.r,1),r=x.p,q=B.a([B.X(d,g?A.dn:A.bn,w,w,w,18)],r)
if(h)q.push(B.ap(w,B.q(w,D.PS,A.f,w,w,D.Fm,w,12,w,w,w,w,w,12),w,w,w,-6,-4,w))
return new B.D(A.fC,B.aH(!1,A.a3,!0,w,B.aP(!1,v,!0,B.ez(new B.D(A.h5,B.x(B.a([new B.an(A.a0,w,A.ac,A.f,q,w),A.cS,B.d(e,w,w,w,w,w,w,B.l(w,w,g?A.aR:A.bw,w,w,w,w,w,w,w,w,9,w,w,A.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],r),A.l,w,A.e,A.P,0,A.p),w),w,new B.p(t,w,s,u,w,w,A.n),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),A.f,A.L,0,w,w,w,w,w,A.aj),w)},
j5(d,e,f,g){return this.m_(d,e,f,g,!1)},
b8O(d,e){var w,v,u=this,t=null,s=u.e
s.toString
w=e?A.ah:A.aL
v=B.hP(t,new C.eIp(u,s,e,d),s.r.length,A.cn,t,w,new C.eIq(e),!1)
s=d?A.as:A.cd
w=B.a([],x.p)
if(e&&!u.kz())w.push(new B.D(A.cn,B.IK(E.asi,new C.eIr(u),B.o1(t,A.bn,t,t,t,t,t,t,t,t,t,t,E.aTJ,t,t,t,t),"Add slide"),t))
w.push(B.E(v,1))
return B.q(t,B.x(w,A.l,t,A.e,A.j,0,A.p),A.f,s,t,t,t,t,t,t,t,t,t,t)},
bJ8(d,e,f){var w,v=null,u=this.e
if(u==null)w=v
else{u=u.d===D.oQ?0.5625:1.7777777777777777
w=u}if(w==null)w=1.7777777777777777
u=f?8:16
return new B.D(new B.R(u,u,u,u),new B.bL(A.b1,v,v,new B.fH(w,B.az(v,B.cq(new C.eDU(this,d,e)),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.eDV(this),v,v,v,v,v,v,!1,A.a4),v),v),v)},
bJa(b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=a7.e,b0=(a9==null?a8:C.kN(a9.w))===!0,b1=b0&&C.fRA(b3),b2=b0&&b3.b===D.ls&&A.a.a_(b3.db,"marriage_sign_placed_")
if(b0){a9=b3.db
w=a9==="__kiapo_video__"||A.a.a_(a9,"__kiapo_video___")}else w=!1
if(!a7.kz())v=!b0||a7.c6D(b3)
else v=!1
if(!a7.kz())u=!b0||a7.c6C(b3)
else u=!1
t=v&&a7.r===b3.a
s=b4/960
a9=b3.db
r=A.a.a_(a9,"__design__")||A.a.a_(b3.a,"design_")?A.c6:A.bn
q=b0&&A.a.a_(a9,"marriage_field_")
if(b0)p=a9==="marriage_locked_nim_akuna_deni"||a9==="marriage_locked_nim_akuna_box"||a9==="marriage_locked_nim_akuna_tick"||a9==="marriage_locked_nim_akuna_hit"
else p=!1
if(w&&C.hgH(b3))o=a8
else if(p&&!a7.kz())o=a7.gcfb()
else o=a7.kz()?a8:new C.eDI(a7,w,b3,b1,b2,v)
a9=b3.a
n=b3.c
m=b3.d
l=b3.e
k=b3.f
j=p?A.c2:A.iQ
i=w&&C.hgH(b3)&&a7.At()?new C.eDJ(a7,b3):a8
h=v&&b3.b===D.d_?new C.eDK(a7,b3):a8
g=u?new C.eDL(a7,b3,b4,b5):a8
f=b3.cx
if(t)if(a7.w===a9)e=A.bd
else e=q?A.c4:r
else e=A.L
e=B.L(e,A.r,t?2:0)
d=B.m(t?6:0)
if(b1)a0=A.c4.j(0.08)
else a0=b3.b===D.ls?A.L:a8
if(b1){a1=a7.kz()?"":"Tap to sign"
a1=B.as(B.d(a1,a8,a8,a8,a8,a8,a8,B.l(a8,a8,A.c4.j(0.7),a8,a8,a8,a8,a8,a8,a8,a8,10*s,a8,a8,A.U,a8,a8,!0,a8,a8,a8,a8,a8,a8,a8,a8),a8,a8,a8),a8,a8,a8)}else{if(a7.w===a9){a1=a7.c
a1.toString
a1=!(B.aF(a1,A.c1,x.w).w.a.a<900)}else a1=!1
a2=w&&a7.At()
a3=b3.b===D.d_
a4=a3?a7.Xy(b3):a8
a5=a3?a7.avy(b3):a8
if(a7.w===a9){a6=a7.c
a6.toString
a6=!(B.aF(a6,A.c1,x.w).w.a.a<900)}else a6=!1
a6=a6?new C.eDM(a7,b3):a8
a3=v&&a3?new C.eDN(a7,b3):a8
a6=C.b3w(q,a4,a1,b3,a5,a2,a3,new C.eDO(a7,w,b3,v),a6,s,t,!0)
a1=a6}d=B.a([B.q(a8,a1,A.f,a8,a8,new B.p(a0,a8,e,d,a8,a8,A.n),a8,a8,a8,a8,a8,a8,a8,a8)],x.p)
if(t&&u&&a7.w!==a9){e=B.m(6)
d.push(B.ap(-4,B.az(a8,B.q(a8,D.bXn,A.f,a8,a8,new B.p(r,a8,B.L(A.c,A.r,1.5),e,a8,a8,A.n),a8,22,a8,a8,a8,a8,a8,22),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.eDP(a7,b3,b4,b5),a8,a8,new C.eDQ(a7,b3),a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,!1,A.a4),a8,a8,a8,-4,a8,a8))}if(b0&&!a7.kz()&&b3.db==="marriage_locked_nim_n_4")d.push(B.ap(a8,B.az(a8,B.q(a8,D.bY4,A.f,a8,a8,new B.p(A.d2,a8,B.L(A.c,A.r,1.2),a8,B.a([new B.ab(0,A.G,A.w.j(0.25),A.J,4)],x.V),a8,A.a6),a8,20,a8,a8,a8,a8,a8,20),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a7.gc1K(),a8,a8,a8,a8,a8,a8,!1,A.a4),a8,a8,a8,-6,-6,a8))
if(b0&&!a7.kz()&&A.a.a_(b3.db,"marriage_field_tarehe:"))d.push(B.ap(a8,B.az(a8,B.q(a8,D.bZK,A.f,a8,a8,new B.p(A.c4,a8,B.L(A.c,A.r,1.2),a8,B.a([new B.ab(0,A.G,A.w.j(0.25),A.J,4)],x.V),a8,A.a6),a8,20,a8,a8,a8,a8,a8,20),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.eDR(a7,b3),a8,a8,a8,a8,a8,a8,!1,A.a4),a8,a8,a8,-6,-6,a8))
e=!1
if(t)if(b3.b===D.d_)if(a7.w!==a9){e=a7.c
e.toString
e=B.aF(e,A.c1,x.w).w.a.a<900}if(e)d.push(B.ap(-28,B.as(B.az(a8,B.q(a8,D.h2l,A.f,a8,a8,new B.p(A.bn,a8,a8,B.m(999),B.a([new B.ab(0,A.G,A.w.j(0.2),A.J,8)],x.V),a8,A.n),a8,a8,a8,a8,A.lj,a8,a8,a8),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.eDS(a7,b3),a8,a8,a8,a8,a8,a8,!1,A.a4),a8,a8,a8),a8,a8,0,0,a8,a8))
return B.ap(a8,B.az(j,B.eG(A.A,f,new B.an(A.a0,a8,A.ac,A.f,d,a8),a8),A.y,!1,a8,h,a8,a8,a8,a8,a8,a8,i,a8,a8,a8,a8,a8,a8,g,a8,a8,a8,a8,a8,a8,a8,o,a8,a8,a8,a8,a8,a8,!1,A.a4),k*b5,new B.bA("el_"+a9,x.W),n*b4,a8,m*b5,l*b4)},
aSc(d,e,f,g,h){var w,v,u,t,s,r=null
if(e)w=A.bn.j(0.25)
else w=f?A.c.j(0.06):A.w.j(0.04)
v=B.m(10)
u=B.L(e?A.bn:A.bA,A.r,1)
if(e)t=A.bn
else t=f?A.aD:A.an
s=x.p
t=B.a([B.d(d,r,r,r,r,r,r,B.l(r,r,t,r,r,r,r,r,r,r,r,10,r,r,A.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],s)
if(h)A.d.v(t,B.a([A.dh,B.q(r,D.PS,A.f,r,r,D.Fm,r,12,r,r,r,r,r,12)],s))
return B.az(r,B.q(r,B.A(t,A.l,r,A.e,A.P,0,r,r),A.f,r,r,new B.p(w,r,u,v,r,r,A.n),r,r,r,r,A.hf,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,g,r,r,r,r,r,r,!1,A.a4)},
bL7(d,e,f,g){return this.aSc(d,e,f,g,!1)},
ceW(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=d.a
if(m.cy!==k){m.cy=k
w=m.cx
v=w.h(0,k)
if(v!=null){v.U$=$.ax()
v.P$=0}v=d.c
w.n(0,k,new B.au(new B.ba(v,A.b5,A.aP),$.ax()))}k=m.cx.h(0,k)
k.toString
w=f?8:10
v=f?8:10
u=e?A.as:A.aS
t=f?A.xM:l
if(f)s=new B.bH(new B.ay(e?A.bA:A.bl,1,A.r,-1),A.a1,A.a1,A.a1)
else s=l
r=f?B.a([new B.ab(0,A.G,A.w.j(0.12),A.tt,16)],x.V):l
q=x.p
p=B.A(B.a([B.d("Speaker Notes",l,l,l,l,l,l,B.l(l,l,e?A.ab:A.bw,l,l,l,l,l,l,l,l,12,l,l,A.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),A.b3,m.b3R(e,new C.eFM(m))],q),A.l,l,A.e,A.j,0,l,l)
o=B.l(l,l,e?A.c:A.aM,l,l,l,l,l,l,l,l,12,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
n=B.l(l,l,e?A.bW:A.bN,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
return B.q(l,B.x(B.a([p,A.am,B.E(B.aM(l,A.Z,!1,l,!0,A.t,l,B.aO(),k,l,l,l,l,l,2,B.bz(l,new B.b6(4,B.m(10),A.dv),l,A.bV,l,l,l,l,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,n,"Speaker notes for this slide\u2026",l,l,l,l,l,!0,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ak,l,l,l,l,l,l,l,l,l,2,l,l,!1,"\u2022",l,new C.eFN(m,d),l,l,l,!1,l,l,!1,l,!0,l,A.ad,l,l,l,l,l,l,l,l,l,l,l,o,!0,A.a5,l,A.ao,l,l,l,l),1)],q),A.al,l,A.e,A.j,0,A.p),A.f,l,l,new B.p(u,l,s,t,r,l,A.n),l,96,l,l,new B.R(12,w,12,v),l,l,l)},
aVM(a3,a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=null,a2=a0.kd()
if(a2==null)return A.bM
w=new C.eER(a0,a6)
v=B.a([4279310375,4294967295,4280640491,4278556265,4292617766,4286331629,4293548044,4281549141],x.t)
u=A.i.D(1-a2.c,0.06,1)
t=A.i.D(1-a2.d,0.06,1)
s=A.i.D(1-a2.e,0.01,1)
r=A.i.D(1-a2.f,0.01,1)
q=a5?A.dZ:a1
p=x.p
o=B.a([],p)
n=!a5
if(n)o.push(B.A(B.a([B.d("Format",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.c:A.a_,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,A.u,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),A.b3,a0.b3R(a3,a0.gbPG())],p),A.l,a1,A.e,A.j,0,a1,a1))
if(n)o.push(A.W)
o.push(B.d("Size",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aD:A.an,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1))
o.push(B.A(B.a([D.fP2,B.E(B.kX(a1,a1,a1,u,0.05,new C.eES(w,a2),A.i.D(a2.e,0.05,u)),1)],p),A.l,a1,A.e,A.j,0,a1,a1))
o.push(B.A(B.a([D.h0J,B.E(B.kX(a1,a1,a1,t,0.05,new C.eET(w,a2),A.i.D(a2.f,0.05,t)),1)],p),A.l,a1,A.e,A.j,0,a1,a1))
n=a2.b
m=n===D.d_
if(m)o.push(B.A(B.a([D.fIy,B.E(B.kX(a1,a1,a1,96,10,new C.eEU(w,a2),A.i.D(a2.w,10,96)),1)],p),A.l,a1,A.e,A.j,0,a1,a1))
l=n===D.lS
if(l||n===D.ls||n===D.TL)A.d.v(o,B.a([B.d("Crop / position",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aD:A.an,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),B.A(B.a([D.fV2,B.E(B.kX(a1,a1,a1,s,0,new C.eEV(w,a2),A.i.D(a2.c,0,s)),1)],p),A.l,a1,A.e,A.j,0,a1,a1),B.A(B.a([D.h22,B.E(B.kX(a1,a1,a1,r,0,new C.eEW(w,a2),A.i.D(a2.d,0,r)),1)],p),A.l,a1,A.e,A.j,0,a1,a1)],p))
if(l){l=B.d("Shape (frame)",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aD:A.an,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
k=B.a([],p)
for(j=0;j<7;++j){i={}
h=D.Dp[j]
i.a=null
g=h.a
i.a=g
k.push(B.jx(a1,a1,a1,B.d(h.b,a1,a1,a1,a1,a1,a1,A.pW,a1,a1,a1),a1,new C.eEX(i,w,a2),a2.go===g,a1,a1,a1,a1))}k=B.bW(A.bH,k,A.bs,a1,6,6)
i=B.d("Ring",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aD:A.an,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
h=B.a([],p)
for(j=0;j<11;++j){f={}
e=D.Dj[j]
f.a=null
g=e.a
f.a=g
h.push(B.jx(a1,a1,a1,B.d(e.b,a1,a1,a1,a1,a1,a1,A.pW,a1,a1,a1),a1,new C.eEY(f,w,a2),a2.id===g,a1,a1,a1,a1))}A.d.v(o,B.a([A.T,l,A.am,k,A.T,i,A.am,B.bW(A.bH,h,A.bs,a1,6,6)],p))}o.push(A.T)
if(m){m=B.d("Text color",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aD:A.an,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
l=x.gN
l=B.C(new B.N(v,new C.eEZ(w,a2),l),l.k("ak.E"))
k=x.fw
A.d.v(o,B.a([m,A.am,B.bW(A.bH,l,A.bs,a1,6,6),A.ae,B.htc(new C.eF_(w,a2),D.cBH,B.eA([a2.as],k),!0,a1,k)],p))}if(n===D.fi){n=B.d("Fill",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aD:A.an,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
m=x.gN
m=B.C(new B.N(v,new C.eF0(w,a2),m),m.k("ak.E"))
A.d.v(o,B.a([n,B.bW(A.bH,m,A.bs,a1,0,6)],p))}o.push(A.ae)
o.push(B.dh(D.bZw,D.fX7,new C.eF1(a0,a5),B.bp(A.bD,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1)))
d=B.cl(o,a1,a1,a1,q,a1,A.ah,a5)
if(a5)return d
q=a3?A.cl:A.c
p=a4?A.xM:a1
if(a4)o=new B.bH(new B.ay(a3?A.bA:A.bl,1,A.r,-1),A.a1,A.a1,A.a1)
else o=a1
return B.q(a1,d,A.f,a1,a1,new B.p(q,a1,o,p,a4?B.a([new B.ab(0,A.G,A.w.j(0.12),A.tt,16)],x.V):a1,a1,A.n),a1,a1,a1,a1,A.GL,a1,a1,a1)},
bUv(d){return this.aVM(d,!1,!1,null)},
ce4(d,e,f,g,h,i){var w,v,u,t,s=this,r=null,q=s.fy
q===$&&B.c()
q=B.c5(q,new C.eF4(s,f,d,e),r)
w=B.d(i,r,r,r,r,r,r,D.fxQ,r,r,r)
v=s.c
v.toString
u=x.p
v=B.a([q,A.bc,B.E(B.x(B.a([w,A.bG,A.cS,s.bEE(D.d5a,d,B.P(v).ax.a===A.H)],u),A.E,r,A.e,A.j,0,A.p),1)],u)
q=x.V
A.d.v(v,B.a([A.af,B.dN(B.h6(B.aH(!1,A.a3,!0,r,B.aP(!1,r,!0,B.ez(D.fgj,r,new B.p(r,r,B.L(A.c.j(0.55),A.r,1.3),r,B.a([new B.ab(0,A.G,A.c4.j(0.4),A.ev,8)],q),D.atb,A.a6),r,r,r),A.cV,!0,r,r,r,r,r,r,r,r,r,r,r,g,r,r,r,r,r,r,r),A.f,A.L,0,r,r,r,r,r,A.aj),r,"Documents (Hati)",r,r),A.J)],u))
t=B.A(v,A.l,r,A.e,A.j,0,r,r)
w=s.c
w.toString
if(B.P(w).ax.a!==A.H)q=B.a7t(A.bg,20)
else{w=B.m(20)
v=B.a([D.bfH,D.bg9],x.O)
u=B.L(d.j(0.45),A.r,1.2)
q=new B.p(r,r,u,w,B.a([new B.ab(0,A.G,d.j(0.18),A.cC,14)],q),new B.a8(A.aA,A.aF,A.x,v,r,r),A.n)}return B.q(r,t,A.f,r,r,q,r,r,r,r,A.bV,r,r,r)},
asb(d,e,f,g){var w,v,u=null,t=this.c
t.toString
if(B.P(t).ax.a===A.dm){t=B.m(22)
w=A.a.q(f,"Kiapo")
v=B.a7t(w?A.bg:A.aG,22)
w=w?A.bg:A.aG
return B.aH(!1,A.a3,!0,u,B.aP(!1,t,!0,B.ez(B.x(B.a([new B.VK(w,48,e,u,u),A.ae,B.d(f,u,u,u,u,u,u,D.fpn,A.K,u,u)],x.p),A.l,u,A.ba,A.j,0,A.p),u,v,u,A.Cp,1/0),u,!0,u,u,u,u,u,u,u,u,u,u,u,g,u,u,u,u,u,u,u),A.f,A.L,0,u,u,u,u,u,A.aj)}t=this.fy
t===$&&B.c()
return B.c5(t,new C.eCD(this,g,d,e,f),u)},
ahQ(d,e){return this.cqN(d,e)},
cqN(d,e){var w=0,v=B.j(x.T),u,t=this,s,r,q,p
var $async$ahQ=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:r=$.ax()
q=new B.au(new B.ba(e,A.b5,A.aP),r)
p=t.c
p.toString
w=3
return B.b(B.cg(null,null,!0,null,new C.eGJ(d,q),p,null,!0,!0,x.N),$async$ahQ)
case 3:s=g
q.U$=r
q.P$=0
u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ahQ,v)},
QH(d){var w=d.bT()
return""+B.bM(w)+"/"+B.bV(w)+"/"+B.bD(w)}}
C.agz.prototype={}
C.aAQ.prototype={
S(){return new C.bf7(null,null)}}
C.bf7.prototype={
gcDd(){var w,v=this.a.c,u=v.f.bT(),t=""+B.bM(u)+"/"+B.bV(u)+"/"+B.bD(u),s=v.w
if(s==="marriage_agreement")return"Hati ya Kuhowesha \xb7 "+t
if(s==="hati_kuhowa")return"Hati ya Kuhowa \xb7 "+t
if(s==="hati_kuhoweya")return"Hati ya Kuhoweya \xb7 "+t
if(s==="hati_kiapo_uongozi"){v=v.x
w=A.a.i(v==null?"":v)
return w.length===0?"Hati ya Kiapo cha Uongozi \xb7 "+t:"Kiapo cha Uongozi \xb7 "+w+" \xb7 "+t}return""+v.r.length+" slides \xb7 "+t},
Y(){var w,v=this,u=null
v.a4()
w=B.bl(u,A.qy,u,1,u,v)
w.f2(0,!0)
v.d!==$&&B.aQ()
v.d=w
w=B.bl(u,D.bAQ,u,1,u,v)
w.cr(0)
v.e!==$&&B.aQ()
v.e=w},
t(){var w=this.d
w===$&&B.c()
w.t()
w=this.e
w===$&&B.c()
w.t()
this.bxT()},
JE(d){var w=0.12+d*0.09,v=A.i.D(w+0.55,0,1),u=this.e
u===$&&B.c()
u=u.x
u===$&&B.c()
return A.cw.aA(0,new B.hO(w,v,A.cw).aA(0,u))},
B(d){var w,v=null,u=this.d
u===$&&B.c()
w=this.e
w===$&&B.c()
return B.as(new B.D(D.bGz,B.c5(new B.h7(B.a([u,w],x.dS)),new C.daC(this),v),v),v,v,v)}}
C.bfm.prototype={
B(d){var w=null,v=B.m(22),u=B.L(A.aM,A.r,1),t=x.p
return B.as(new B.D(D.bGQ,B.aH(!1,A.a3,!0,w,B.q(w,B.bw(B.m(22),B.x(B.a([new B.D(D.bG0,B.x(B.a([B.q(w,D.bYa,A.f,w,w,new B.p(A.ay.j(0.12),w,w,B.m(16),w,w,A.n),w,52,w,w,w,w,w,52),A.aO,D.fZi,A.W,B.d('"'+this.c+'" will be permanently removed. This cannot be undone.',w,w,w,w,w,w,D.fz7,A.K,w,w)],t),A.l,w,A.e,A.j,0,A.p),w),A.e3,D.bzT,B.A(B.a([B.E(B.bO(!1,D.fNb,w,w,!0,w,w,w,new C.db_(d),w,B.fv(w,w,w,w,w,w,w,w,w,w,w,A.bN,w,w,w,w,w,A.nF,w,A.oV,w,w,w,w,w,w)),1),B.q(w,w,A.f,A.br,w,w,w,48,w,w,w,w,w,1),B.E(B.bO(!1,D.fSE,w,w,!0,w,w,w,new C.db0(d),w,B.fv(w,w,w,w,w,w,w,w,w,w,w,A.ay,w,w,w,w,w,A.nF,w,A.oV,w,w,w,w,w,w)),1)],t),A.l,w,A.e,A.j,0,w,w)],t),A.l,w,A.e,A.P,0,A.p),A.aq),A.f,w,Aa.XC,new B.p(A.as,w,u,v,D.d5y,w,A.n),w,w,w,w,w,w,w,w),A.f,A.L,0,w,w,w,w,w,A.aj),w),w,w,w)}}
C.KM.prototype={
S(){return new C.bf6()}}
C.bf6.prototype={
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.a,m=n.f,l=n.w,k=n.r
n=p.d
w=n?0.96:1
v=B.m(12)
if(l){u=0.1+(n?0.06:0)
n=u}else{u=0.08+(n?0.05:0)
n=u}n=m.j(n)
u=B.L(m.j(l?0.34:0.28),A.r,1)
t=x.V
t=p.d?B.a([],t):B.a([new B.ab(0,A.G,m.j(0.08),A.dM,8)],t)
s=m.j(l?0.16:0.14)
r=B.m(9)
q=p.a
r=B.q(o,B.X(q.c,m,o,o,o,18),A.f,o,o,new B.p(s,o,o,r,o,o,A.n),o,32,o,o,o,o,o,32)
q=q.d
return B.dN(B.d3(B.az(o,B.uJ(B.cT(o,B.A(B.a([r,A.au,new B.dm(1,A.co,B.d(q,o,2,A.a2,o,o,o,B.l(o,o,l?A.eW:A.c,o,o,o,o,o,o,o,o,13,o,o,A.U,o,1.2,!0,o,o,o,o,o,o,o,o),A.K,o,o),o)],x.p),A.l,o,A.ba,A.P,0,o,o),o,o,A.b_,new B.p(n,o,u,v,t,o,A.n),A.eG,o,o,o,o,A.nG,o,o,1/0),A.cw,A.jo,w),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new C.dax(p,d),new C.day(p),new C.daz(p),new C.daA(p),o,o,o,!1,A.a4),k),new B.o(0,(1-k)*16))}}
C.QF.prototype={
B(d){var w=this,v=null,u=A.c.j(0.04),t=B.m(16),s=B.m(16),r=B.m(14),q=B.L(A.c.j(0.5),A.r,1.2),p=x.p
return B.aH(!1,A.a3,!0,t,B.aP(!1,s,!0,new B.D(A.f_,B.A(B.a([B.q(v,B.X(w.c,A.c,v,v,v,22),A.f,v,v,new B.p(v,v,q,r,v,new B.a8(A.aA,A.aF,A.x,w.d,v,v),A.n),v,46,v,v,v,v,v,46),A.ew,B.E(B.x(B.a([B.d(w.e,v,v,v,v,v,v,A.ng,v,v,v),A.bG,B.d(w.f,v,v,v,v,v,v,B.l(v,v,A.c.j(0.55),v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],p),A.E,v,A.e,A.j,0,A.p),1),B.X(A.eI,A.c.j(0.4),v,v,v,v)],p),A.l,v,A.e,A.j,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.r,v,v,v,v,v,v,v),A.f,u,0,v,v,v,v,v,A.aj)}}
C.a0T.prototype={
S(){return new C.aGo(D.ds,null,null)}}
C.aGo.prototype={
gZT(){var w,v=this,u=v.w
if(u===$){w=B.bl(null,D.bAp,null,1,null,v)
v.w!==$&&B.bE()
v.w=w
u=w}return u},
b9h(d){if(!this.a.c.ay)return
this.x=d
this.gZT().iA(0,0)},
Y(){var w,v=this
v.a4()
w=v.a
v.d=A.o.D(w.d,0,w.c.r.length-1)
C.axG(D.fmP)
C.im0()
v.Sa()},
t(){var w=this,v=w.f
if(v!=null)v.a1(0)
w.gZT().t()
v=w.z
if(v!=null)v.a1(0)
C.axG(D.fmQ)
C.im3()
w.bA0()},
cG3(){B.jY()
this.m(new C.eJo())
var w=this.c.L(x.q).f
w.a5W()
if($.bn5)w.T(D.fjD)},
Sa(){var w,v=this,u=v.f
if(u!=null)u.a1(0)
if(!v.r||v.y)return
u=v.a.c
w=v.d
w===$&&B.c()
v.f=B.cy(B.dw(0,0,0,0,0,A.o.D(C.hrp(u,w),1,120)),new C.eJe(v))},
cFH(){var w,v=this
v.m(new C.eJn(v))
if(v.r)v.Sa()
else{w=v.f
if(w!=null)w.a1(0)}},
gaXI(){var w=this.a.c.db
return(w==null?"":w).length!==0},
czD(){var w=this,v=w.f
if(v!=null)v.a1(0)
w.m(new C.eJf(w))
v=w.z
if(v!=null)v.a1(0)
if(w.a.c.ch&&w.r)w.z=B.cy(A.lI,new C.eJg(w))},
azF(){var w,v,u=this,t=u.a.c,s=t.r.length
if(u.y){t=u.z
if(t!=null)t.a1(0)
if(u.a.c.ch){u.m(new C.eJa(u))
u.Sa()}return}w=u.d
w===$&&B.c()
v=s-1
if(w===v&&u.gaXI()){u.czD()
return}if(w>=v)t=t.ch&&s>1
else t=!0
if(t){u.m(new C.eJb(u,A.o.F(w+1,s)))
u.b9h(w)
u.Sa()}},
cpr(){var w,v=this,u=v.a.c,t=u.r.length
if(v.y){if(!u.ch)return
u=v.z
if(u!=null)u.a1(0)
v.m(new C.eJc(v))
v.Sa()
return}w=v.d
w===$&&B.c()
if(w<=0)u=u.ch&&t>1
else u=!0
if(u){v.m(new C.eJd(v,w,t))
v.b9h(w)
v.Sa()}},
cB8(d){var w,v=this,u=v.e
if(u===D.ct){u=v.d
u===$&&B.c()
return new B.mq(d,new B.bA(u,x.ac))}w=v.cB9(u)
u=v.d
u===$&&B.c()
return B.oy(new B.mq(d,new B.bA(u,x.ac)),w,new C.eJl(),A.b_,A.b_,new C.eJm(v))},
cB9(d){switch(d.a){case 8:case 9:case 10:case 11:case 19:return D.bAM
case 16:return A.iO
case 18:return A.mU
default:return A.mb}},
cB7(d,e,f){var w,v,u,t=null,s=B.cG(A.cw,f,t)
switch(d.a){case 0:return e
case 1:case 13:case 18:return new B.d1(s,!1,e,t)
case 2:case 17:w=x.K
return B.jJ(e,new B.bg(s,new B.br(A.tu,A.J,w),w.k("bg<bP.T>")),t,!0)
case 3:w=x.K
return B.jJ(e,new B.bg(s,new B.br(A.TZ,A.J,w),w.k("bg<bP.T>")),t,!0)
case 4:case 21:w=x.K
return B.jJ(e,new B.bg(s,new B.br(A.hn,A.J,w),w.k("bg<bP.T>")),t,!0)
case 5:w=x.K
return B.jJ(e,new B.bg(s,new B.br(A.ts,A.J,w),w.k("bg<bP.T>")),t,!0)
case 6:case 16:w=x.b
return B.ig(A.A,new B.d1(s,!1,e,t),t,new B.bg(s,new B.br(0.82,1,w),w.k("bg<bP.T>")))
case 7:w=x.b
return B.ig(A.A,new B.d1(s,!1,e,t),t,new B.bg(s,new B.br(1.18,1,w),w.k("bg<bP.T>")))
case 8:return B.c5(s,new C.eJh(s),e)
case 9:return B.c5(s,new C.eJi(s),e)
case 10:return B.c5(s,new C.eJj(s),e)
case 11:return B.c5(s,new C.eJk(s),e)
case 12:w=x.b
return new B.d1(s,!1,B.ig(A.A,e,t,new B.bg(s,new B.br(1.03,1,w),w.k("bg<bP.T>"))),t)
case 14:w=s.gp(0)
v=x.K
return B.jm(B.jJ(e,new B.bg(s,new B.br(A.tu,A.J,v),v.k("bg<bP.T>")),t,!0),A.t,new C.bun(w,t))
case 15:w=x.K
return B.jJ(e,new B.bg(s,new B.br(A.TZ,A.J,w),w.k("bg<bP.T>")),t,!0)
case 19:w=B.dr()
w.n2((1-s.gp(0))*2)
v=s.gp(0)
u=s.gp(0)
w.k5(v,u,v,1)
return B.fz(A.A,B.d3(e,s.gp(0)),t,w,!0)
case 20:return B.eG(A.A,(1-s.gp(0))*0.2,new B.d1(s,!1,e,t),t)}},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.a.c,k=n.d
k===$&&B.c()
w=l.r[k]
if(l.ay){v=n.x
u=B.jm(new C.aq0(B.c5(n.gZT(),new C.eJp(n,v,w),m),m),A.t,m)}else{t=B.r3(new C.JK(w,!0,!1,m))
l=B.b0(w.e)
u=n.cB8(B.e9(B.jm(t,A.t,m),l,!0))}l=B.m(20)
k=x.p
s=B.q(m,B.A(B.a([B.d(n.r?"Auto "+C.hrp(n.a.c,n.d)+"s":"Manual",m,m,m,m,m,m,A.p0,m,m,m),A.bo,D.c_D],k),A.l,m,A.e,A.P,0,m,m),A.f,m,m,new B.p(A.b6,m,m,l,m,m,A.n),m,m,m,m,A.hg,m,m,m)
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
l.push(B.bS(0,new C.Op(new C.Fo(q,p,o,r==null?"":r),!1,!0,m),0,0,0))}else{r=q.c.d===D.oQ?0.5625:1.7777777777777777
l.push(B.as(new B.fH(r,B.jm(B.v2(A.ag,u,!0,4,1,!0,!0,m),A.t,m),m),m,m,m))}if(!$.bn5){r=B.IK(A.lo,new C.eJq(d),B.o1(m,A.b6,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m)
k=B.a([B.ap(m,B.bm(!0,B.A(B.a([r,A.af,B.IK(B.X(n.r?Am.uW:A.hi,m,m,m,m,m),n.gcFG(),B.o1(m,A.b6,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m)],k),A.l,m,A.e,A.j,0,m,m),!0,!1,A.ag,!0,!0),m,m,12,m,12,m)],k)
if(!n.y){r=B.m(20)
k.push(B.ap(16,B.bm(!0,B.q(m,B.d(""+(n.d+1)+" / "+n.a.c.r.length,m,m,m,m,m,m,A.h1,m,m,m),A.f,m,m,new B.p(A.b6,m,m,r,m,m,A.n),m,m,m,m,A.hg,m,m,m),!0,!1,A.ag,!0,!0),m,m,m,16,m,m))}A.d.v(l,k)}l.push(B.ap(m,B.bm(!0,B.az(A.c2,B.q(A.ly,$.bn5?A.bM:s,A.f,m,m,m,m,64,m,m,D.bBv,m,m,150),A.y,!1,m,n.gcG2(),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!1,A.a4),!0,!1,A.ag,!0,!0),m,m,m,0,0,m))
return B.c4(m,A.w,B.az(m,new B.an(A.a0,m,A.b0,A.t,l,m),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.eJr(n,d),m,m,m,!1,A.a4),m,!1,!1,m,m)}}
C.KS.prototype={
B(d){var w=null
return B.q(w,B.bm(!0,new B.D(E.amF,this.c,w),!0,!1,A.ag,!0,!1),A.f,w,w,D.b84,w,w,w,w,w,w,w,w)}}
C.bun.prototype={
ju(d){return new B.a1(0,0,0+d.a*A.i.D(this.b,0,1),0+d.b)},
k9(d){return d.b!==this.b}}
C.bk6.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.c
switch(q){case"circle":w=B.m(999)
break
case"rounded":w=B.m(18)
break
case"arch":w=D.b4R
break
default:w=B.m(6)
break}v=s.e
u=B.L(v?A.aE:A.L,A.r,2.5)
if(q==="circle")q=B.m(999)
else{t=B.m(q==="rounded"?9:3)
q=t}w=B.cT(r,B.as(B.q(r,r,A.f,r,r,new B.p(r,r,r,q,r,E.wW,A.n),r,30,r,r,r,r,r,30),r,r,r),r,r,A.b_,new B.p(s.f,r,u,w,r,r,A.n),A.h3,r,64,r,r,r,r,r,64)
return B.az(r,new B.a5(78,r,B.x(B.a([w,A.am,B.d(s.d,r,1,A.a2,r,r,r,B.l(r,r,v?A.aE:s.r,r,r,r,r,r,r,r,r,11.5,r,r,A.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),A.l,r,A.e,A.j,0,A.p),r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,s.w,r,r,r,r,r,r,!1,A.a4)}}
C.bk5.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=r.c,o=D.dDk.h(0,p)
if(o==null)o=D.doR
p=p==="none"
w=p?q:new B.a8(A.a7,A.aa,A.x,o,q,q)
p=p?A.cz.j(0.25):q
v=r.e
u=v?B.L(A.aE,A.r,2.5):q
t=r.r.j(0.15)
s=v?I.arf:q
w=B.q(q,B.q(q,s,A.f,q,q,new B.p(t,q,q,q,q,q,A.a6),q,q,q,q,q,q,q,q),A.f,q,q,new B.p(p,q,u,q,q,w,A.a6),q,52,q,q,A.eA,q,q,52)
return B.az(q,new B.a5(66,q,B.x(B.a([w,A.am,B.d(r.d,q,1,A.a2,q,q,q,B.l(q,q,v?A.aE:r.f,q,q,q,q,q,q,q,q,10.5,q,q,A.I,q,q,!0,q,q,q,q,q,q,q,q),A.K,q,q)],x.p),A.l,q,A.e,A.j,0,A.p),q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.w,q,q,q,q,q,q,!1,A.a4)}}
C.aMc.prototype={
aY(){this.b5()
this.b3()
this.dI()},
t(){var w=this,v=w.b7$
if(v!=null)v.a6(0,w.gdC())
w.b7$=null
w.a3()}}
C.aOe.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.bAb.prototype={}
C.aOf.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.b3z.prototype={}
C.Xj.prototype={
S(){return new C.aGm()},
bk3(d){return this.e.$1(d)}}
C.aGm.prototype={
gb7v(){var w,v,u,t,s=this.e
if(s==null)return null
for(w=this.a.d,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===s)return t}return null},
gabJ(){var w,v
if(this.d==="all")return B.bq(this.a.d,!0,x.I)
w=this.gb7v()
v=x.D
return w==null?B.a([],v):B.a([w],v)},
gaQM(){if(this.d==="all")return"All presentations ("+this.a.d.length+")"
var w=this.gb7v()
w=w==null?null:w.b
return w==null?"Pick a presentation":w},
gb8N(){return A.d.cG(this.gabJ(),0,new C.eIV())},
Y(){var w,v=this
v.a4()
w=v.a.d
if(w.length!==0)v.e=A.d.gH(w).a
v.RL()},
RL(){var w=0,v=B.j(x.H),u,t=this,s
var $async$RL=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return B.b(C.b4a(s.c,s.f),$async$RL)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.eIR(t,!s))
case 1:return B.h(u,v)}})
return B.i($async$RL,v)},
JG(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$JG=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p=t.gabJ()
o=p.length
if(o===0){w=1
break}for(s=0;s<p.length;p.length===o||(0,B.J)(p),++s){r=p[s]
q=r.w
if(q==="marriage_agreement"||q==="hati_kuhowa"||q==="hati_kuhoweya"||q==="hati_malipo_awamu"||q==="hati_kiapo_uongozi")C.fUS(r,t.a.d)}o=t.c
o.toString
q=t.a
w=3
return B.b(B.py(o,q.c,q.f),$async$JG)
case 3:if(!e||t.c==null){w=1
break}o=t.c
o.toString
q=B.ec(new C.eIU(t,p),!1,null,x.H)
w=4
return B.b(B.a6(o,!1).ce(q),$async$JG)
case 4:q=t.a
w=5
return B.b(B.px(q.c,q.f),$async$JG)
case 5:w=6
return B.b(t.RL(),$async$JG)
case 6:case 1:return B.h(u,v)}})
return B.i($async$JG,v)},
S8(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$S8=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:o=t.c
o.toString
w=3
return B.b(B.hy(o,D.egh,!0,"NgmySlidesTransferScan",x.N),$async$S8)
case 3:s=e
if(s==null||A.a.i(s).length===0){w=1
break}t.m(new C.eIS(t))
w=4
return B.b(C.aiH(s),$async$S8)
case 4:r=e
t.m(new C.eIT(t))
o=J.a7(r)
if(o.gau(r)){o=t.c
if(o==null){w=1
break}o.L(x.q).f.T(D.fis)
w=1
break}w=5
return B.b(t.a.bk3(r),$async$S8)
case 5:q=t.c
if(q==null){w=1
break}B.a6(q,!1).O(null)
q=t.c.L(x.q).f
p=o.gI(r)
o=o.gI(r)===1?"":"s"
q.T(B.b3(null,null,null,null,null,A.t,null,B.d("Imported "+p+" presentation"+o,null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$S8,v)},
JF(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$JF=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:n=t.gabJ()
if(n.length===0){w=1
break}s=t.c
s.toString
r=t.a
w=3
return B.b(B.py(s,r.c,r.f),$async$JF)
case 3:if(!e||t.c==null){w=1
break}s=n.length
r=t.a
if(s===1){s=r.c
q=C.fV6(null,A.d.gH(n),s,t.a.f)}else q=C.fV6(n,null,r.c,r.f)
if(n.length===1){s=A.d.gH(n).b
r=B.ag("[^\\w\\-.]+",!0,!1,!1,!1)
p=B.aL(s,r,"_")}else p="ngmy_slides_library"
w=4
return B.b(B.Hk(q,"ngmy_slides_"+p,!1),$async$JF)
case 4:o=e
s=t.a
w=5
return B.b(B.px(s.c,s.f),$async$JF)
case 5:w=6
return B.b(t.RL(),$async$JF)
case 6:s=t.c
if(s==null){w=1
break}s.L(x.q).f.T(B.b3(null,null,null,null,null,A.t,null,B.d(o,null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$JF,v)},
a3T(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a3T=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t.m(new C.eIW(t))
w=3
return B.b(C.bFu(),$async$a3T)
case 3:s=e
t.m(new C.eIX(t))
if(s==null||J.cs(s)){w=1
break}w=4
return B.b(t.a.bk3(s),$async$a3T)
case 4:r=t.c
if(r==null){w=1
break}B.a6(r,!1).O(null)
r=t.c.L(x.q).f
q=J.a7(s)
p=q.gI(s)
q=q.gI(s)===1?"":"s"
r.T(B.b3(null,null,null,null,null,A.t,null,B.d("Imported "+p+" presentation"+q+" from file",null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a3T,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=B.P(d).ax.a===A.H,l=m?A.bB:A.cd,k=o.gabJ().length!==0,j=B.ap(n,B.q(n,n,A.f,n,n,new B.p(n,n,n,n,n,new B.bY(A.A,0.5,A.x,n,0,B.a([A.bn.j(0.22),A.L],x.O),n,n),A.a6),n,220,n,n,n,n,n,220),n,n,n,-60,-80,n),i=B.aI(n,n,n,n,B.X(A.cB,m?A.ab:A.an,n,n,n,n),n,n,n,new C.eJ_(d),n,n,n,n,n,n),h=x.p
i=B.A(B.a([i,B.E(B.d("Transfer presentations",n,n,n,n,n,n,B.l(n,n,m?A.c:A.a_,n,n,n,n,n,n,n,n,17,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),A.K,n,n),1),A.tE],h),A.l,n,A.e,A.j,0,n,n)
w=B.m(24)
v=B.a([new B.ab(0,A.G,A.bn.j(0.35),A.eQ,24)],x.V)
u=B.ap(n,B.X(A.qK,A.c.j(0.1),n,n,n,100),n,n,n,-12,-8,n)
t=A.c.j(0.18)
s=B.m(16)
s=B.a([u,B.A(B.a([B.q(n,D.c0b,A.f,n,n,new B.p(t,n,B.L(A.c.j(0.35),A.r,1),s,n,n,A.n),n,56,n,n,n,n,n,56),A.ew,B.E(B.x(B.a([B.d("NGMY Slides Transfer",n,n,n,n,n,n,B.l(n,n,A.c.j(0.85),n,n,n,n,n,n,n,n,11,n,n,A.I,n,n,!0,n,1.1,n,n,n,n,n,n),n,n,n),A.aw,D.bLJ],h),A.E,n,A.e,A.j,0,A.p),1)],h),A.l,n,A.e,A.j,0,n,n)],h)
if(o.a.f)s.push(B.ap(n,B.h6(B.az(A.c2,D.fgm,A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gck7(),n,n,n,n,n,n,!1,A.a4),n,"Save presentations to the database",n,n),n,n,n,-17,-19,n))
w=B.a([B.q(n,new B.an(A.a0,n,A.ac,A.f,s,n),A.aq,n,n,new B.p(n,n,n,w,v,D.a44,A.n),n,n,n,n,E.a0M,n,n,1/0),A.e3,o.azG(m,"What to transfer"),A.ae,B.A(B.a([B.E(o.b_9(A.qP,m,new C.eJ0(o),o.d==="one","Pick a single deck","One presentation"),1),A.au,B.E(o.b_9(D.bQD,m,new C.eJ1(o),o.d==="all",""+o.a.d.length+" saved","All presentations"),1)],h),A.l,n,A.e,A.j,0,n,n)],h)
if(o.d==="one"){v=B.a([A.dc,o.azG(m,"Choose presentation"),A.W],h)
u=o.a.d
if(u.length===0){u=m?A.as:A.c
t=B.m(16)
s=B.L(m?A.bA:A.bl,A.r,1)
v.push(B.q(n,B.d("Create a presentation first, then come back to transfer it.",n,n,n,n,n,n,B.l(n,n,m?A.aD:A.an,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),A.f,n,n,new B.p(u,n,s,t,n,n,A.n),n,n,n,n,A.bS,n,n,n))}else A.d.v(v,new B.N(u,new C.eJ2(o,m),B.U(u).k("N<1,v>")))
A.d.v(w,v)}w.push(A.nc)
w.push(o.azG(m,"Transfer options"))
w.push(A.ae)
w.push(B.A(B.a([B.E(o.asd(A.aG,k,!0,A.jK,m,o.r,o.gce8(),"Scan on another device","Show QR"),1),A.au,B.E(o.aON(A.jX,!0,A.jr,m,o.gcwk(),"Receive presentations","Scan QR"),1)],h),A.l,n,A.e,A.j,0,n,n))
w.push(A.W)
w.push(B.A(B.a([B.E(o.bD7(A.aV,k,A.i3,m,o.r,o.gce5(),"Download .json","Backup file"),1),A.au,B.E(o.aON(A.av,!0,AB.zt,m,o.gcIA(),"Import backup","Upload file"),1)],h),A.l,n,A.e,A.j,0,n,n))
if(k){v=A.bn.j(m?0.12:0.08)
u=B.m(16)
t=B.L(A.bn.j(0.28),A.r,1)
s=B.X(A.lO,A.bn.j(0.9),n,n,n,18)
r=o.gaQM()
q=o.gb8N()
p=o.gb8N()===1?"":"s"
A.d.v(w,B.a([A.bz,B.q(n,B.A(B.a([s,A.au,B.E(B.d("Ready to share "+r+" \xb7 "+q+" slide"+p,n,n,n,n,n,n,B.l(n,n,m?A.ab:A.bw,n,n,n,n,n,n,n,n,12,n,n,A.a8,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)],h),A.l,n,A.e,A.j,0,n,n),A.f,n,n,new B.p(v,n,t,u,n,n,A.n),n,n,n,n,A.bI,n,n,n)],h))}j=B.a([j,B.bm(!0,B.x(B.a([new B.D(Ai.Oo,i,n),B.E(B.cl(w,n,n,D.bF8,n,n,A.ah,!1),1)],h),A.l,n,A.e,A.j,0,A.p),!0,!1,A.ag,!0,!0)],h)
if(o.f)j.push(B.q(n,U.XX,A.f,A.e_,n,n,n,n,n,n,n,n,n,n))
return B.c4(n,l,new B.an(A.a0,n,A.ac,A.t,j,n),n,!1,!1,n,n)},
ah0(){var w=0,v=B.j(x.H),u=this,t,s
var $async$ah0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
t=u.a
w=2
return B.b(C.it6(s,t.d,t.e),$async$ah0)
case 2:return B.h(null,v)}})
return B.i($async$ah0,v)},
azG(d,e){var w=null,v=B.q(w,w,A.f,w,w,new B.p(A.bn,w,w,B.m(2),w,w,A.n),w,14,w,w,w,w,w,3)
return B.A(B.a([v,A.af,B.d(e.toUpperCase(),w,w,w,w,w,w,B.l(w,w,d?A.aD:A.an,w,w,w,w,w,w,w,w,11,w,w,A.u,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),A.l,w,A.e,A.j,0,w,w)},
b_9(d,e,f,g,h,i){var w,v,u,t,s=null,r=B.m(18),q=B.m(18),p=e?A.as:A.c
if(g)w=A.bn
else w=e?A.bA:A.bl
w=B.L(w,A.r,g?2:1)
v=g?B.a([new B.ab(0,A.G,A.bn.j(0.2),A.cC,14)],x.V):s
u=A.bn.j(g?0.2:0.1)
t=B.m(12)
t=B.q(s,B.X(d,A.bn,s,s,s,22),A.f,s,s,new B.p(u,s,s,t,s,s,A.n),s,s,s,s,A.cn,s,s,s)
u=B.d(i,s,s,s,s,s,s,B.l(s,s,e?A.c:A.a_,s,s,s,s,s,s,s,s,13,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
return B.aH(!1,A.a3,!0,s,B.aP(!1,r,!0,B.ez(new B.D(A.bI,B.x(B.a([t,A.W,u,A.bG,B.d(h,s,s,s,s,s,s,B.l(s,s,e?A.aD:A.an,s,s,s,s,s,s,s,s,11,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),A.E,s,A.e,A.j,0,A.p),s),s,new B.p(p,s,w,q,v,s,A.n),s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,f,s,s,s,s,s,s,s),A.f,A.L,0,s,s,s,s,s,A.aj)},
bNO(d,e){var w,v,u,t,s,r,q=null,p=d.a===this.e,o=B.m(16),n=e?A.as:A.c,m=B.m(16)
if(p)w=A.bn
else w=e?A.bA:A.bl
w=B.L(w,A.r,p?2:1)
v=B.q(q,D.c0o,A.f,q,q,new B.p(q,q,q,B.m(12),q,new B.a8(A.a7,A.aa,A.x,B.a([A.bn,A.bn.j(0.7)],x.O),q,q),A.n),q,44,q,q,q,q,q,44)
u=d.b
u=B.d(u,q,1,A.a2,q,q,q,B.l(q,q,e?A.c:A.a_,q,q,q,q,q,q,q,q,q,q,q,A.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=d.r.length
s=x.p
t=B.E(B.x(B.a([u,B.d(""+t+" slides",q,q,q,q,q,q,B.l(q,q,e?A.aD:A.an,q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),A.E,q,A.e,A.j,0,A.p),1)
u=p?A.ee:A.ps
if(p)r=A.bn
else r=e?A.aT:A.dx
return new B.D(A.cy,B.aH(!1,A.a3,!0,q,B.aP(!1,o,!0,B.q(q,B.A(B.a([v,A.bc,t,B.X(u,r,q,q,q,q)],s),A.l,q,A.e,A.j,0,q,q),A.f,q,q,new B.p(n,q,w,m,q,q,A.n),q,q,q,q,A.bI,q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,new C.eIQ(this,d),q,q,q,q,q,q,q),A.f,A.L,0,q,q,q,q,q,A.aj),q)},
asd(d,e,f,g,h,i,j,k,l){var w,v,u,t,s=null,r=e?1:0.45,q=e?j:s,p=B.m(18),o=B.m(18),n=h?A.as:A.c
if(f)w=d.j(0.45)
else w=h?A.bA:A.bl
w=B.L(w,A.r,f?1.5:1)
v=d.j(0.14)
u=B.m(12)
t=x.p
u=B.a([B.q(s,B.X(g,d,s,s,s,22),A.f,s,s,new B.p(v,s,s,u,s,s,A.n),s,s,s,s,A.t0,s,s,s)],t)
if(i)u.push(B.ap(s,B.q(s,D.arQ,A.f,s,s,D.b7R,s,14,s,s,s,s,s,14),s,s,s,-4,-4,s))
v=B.d(l,s,s,s,s,s,s,B.l(s,s,h?A.c:A.a_,s,s,s,s,s,s,s,s,14,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
return B.d3(B.aH(!1,A.a3,!0,s,B.aP(!1,p,!0,B.ez(new B.D(E.a0p,B.x(B.a([new B.an(A.a0,s,A.ac,A.f,u,s),A.ae,v,A.bG,B.d(k,s,s,s,s,s,s,B.l(s,s,h?A.aD:A.an,s,s,s,s,s,s,s,s,11,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),A.E,s,A.e,A.j,0,A.p),s),s,new B.p(n,s,w,o,s,s,A.n),s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,q,s,s,s,s,s,s,s),A.f,A.L,0,s,s,s,s,s,A.aj),r)},
aON(d,e,f,g,h,i,j){return this.asd(d,e,!1,f,g,!1,h,i,j)},
bD7(d,e,f,g,h,i,j,k){return this.asd(d,e,!1,f,g,h,i,j,k)}}
C.Xk.prototype={
S(){return new C.bn4()}}
C.bn4.prototype={
Y(){this.a4()
this.afN()},
afN(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$afN=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
n=r.a
m=n.d
l=m.length
k=n.c
q=l===1?C.fV6(null,A.d.gH(m),k,r.a.f):C.fV6(m,null,k,n.f)
n=r.a.d
m=n.length
p=m===1?A.d.gH(n).a:"library_"+m
n=r.a.d
if(n.length===1&&C.kN(A.d.gH(n).w))C.fUS(A.d.gH(r.a.d),D.dmA)
n=r.a
m=n.c
n=C.ipt(n.d)
w=7
return B.b(C.fV5(p,C.ipy(r.a.d),n,m,q),$async$afN)
case 7:o=e
if(r.c==null){w=1
break}r.m(new C.eJ3(r,o))
t=2
w=6
break
case 4:t=3
i=s.pop()
if(r.c==null){w=1
break}r.m(new C.eJ4(r))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$afN,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=B.P(d).ax.a===A.H,h=i?A.bB:A.cd,g=k.d
g=g==null?j:A.a.a_(g,"NGMYSLIDESYNC2|")
w=A.d.cG(k.a.d,0,new C.eJ5())
v=B.aI(j,j,j,j,B.X(A.eM,i?A.ab:A.an,j,j,j,18),j,j,j,new C.eJ6(d),j,j,j,j,j,j)
u=x.p
v=B.A(B.a([v,B.E(B.d("Presentation QR",j,j,j,j,j,j,B.l(j,j,i?A.c:A.a_,j,j,j,j,j,j,j,j,17,j,j,A.u,j,j,!0,j,j,j,j,j,j,j,j),A.K,j,j),1),A.tE],u),A.l,j,A.e,A.j,0,j,j)
t=B.m(24)
s=k.a
r=B.d(s.e,j,j,j,j,j,j,A.dq,A.K,j,j)
s=s.d.length
q=s===1?"":"s"
t=B.q(j,B.x(B.a([r,A.T,B.d(""+s+" presentation"+q+" \xb7 "+w+" slides",j,j,j,j,j,j,B.l(j,j,A.c.j(0.85),j,j,j,j,j,j,j,j,12,j,j,A.U,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],u),A.l,j,A.e,A.j,0,A.p),A.f,j,j,new B.p(j,j,j,t,j,D.a44,A.n),j,j,j,j,E.a0M,j,j,1/0)
q=B.m(24)
s=B.L(A.aG.j(0.35),A.r,1)
r=B.a([],u)
p=k.f
if(p!=null)r.push(B.d(p,j,j,j,j,j,j,A.Vn,A.K,j,j))
else if(k.d==null)r.push(D.esQ)
else{p=B.a([],u)
o=k.e
if((o==null?"":o).length!==0){o=B.m(16)
n=B.a([new B.ab(0,A.G,A.aE.j(0.35),A.cC,18)],x.V)
m=k.e
m.toString
A.d.v(p,B.a([D.fNH,A.am,B.az(j,B.q(j,B.A(B.a([D.c1Y,A.au,B.d(m,j,j,j,j,j,j,D.fzx,j,j,j)],u),A.l,j,A.e,A.P,0,j,j),A.f,j,j,new B.p(j,j,j,o,n,D.c6V,A.n),j,j,j,j,Y.amq,j,j,j),A.y,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new C.eJ7(k,d),j,j,j,j,j,j,!1,A.a4),A.T,D.fSa,A.aB],u))}o=A.c.j(0.04)
n=B.m(22)
m=B.L(A.bA,A.r,1)
l=k.d
l.toString
p.push(B.q(j,B.qc(j,j,!1,l,j,!0,!0,j,!1,D.bvX),A.f,j,j,new B.p(o,j,m,n,j,j,A.n),j,j,j,j,A.cn,j,j,j))
A.d.v(r,p)}r.push(A.aB)
r.push(B.d(g===!0?"Cloud QR \u2014 scan on another phone with NGMY Slides open.":"Offline QR \u2014 keep both devices on the same network if scan fails.",j,j,j,j,j,j,A.hp,A.K,j,j))
return B.c4(j,h,B.bm(!0,B.x(B.a([new B.D(Ai.Oo,v,j),B.E(B.ce(B.x(B.a([t,A.aO,B.q(j,B.x(r,A.l,j,A.e,A.j,0,A.p),A.f,j,j,new B.p(j,j,s,q,j,D.c8S,A.n),j,j,j,j,A.uC,j,j,1/0)],u),A.l,j,A.e,A.j,0,A.p),A.t,j,A.y,j,E.amK,j,j,A.ah),1)],u),A.l,j,A.e,A.j,0,A.p),!0,!1,A.ag,!0,!0),j,!1,!1,j,j)}}
C.aGj.prototype={
S(){return new C.aGk(new B.au(A.ax,$.ax()),B.ka(!0,null,!0,!0,null,null,!1))}}
C.aGk.prototype={
Y(){var w=this
w.a4()
w.e.aW(0,new C.eCx(w))
$.aW.x1$.push(new C.eCy(w))},
t(){var w=this.d
w.U$=$.ax()
w.P$=0
this.e.t()
this.a3()},
b1Y(){var w,v=this.c
v.toString
w=C.zh(this.d.a.a.toUpperCase())
if(w==null)w=""
B.a6(v,!1).O(w)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=B.aF(a2,A.eS,x.w).w,i=B.m(28),h=B.L(A.bn.j(0.4),A.r,1.2),g=x.V,f=B.a([new B.ab(0,A.G,A.bn.j(0.28),A.vs,36),D.aeO],g),e=B.m(28),d=A.c.j(0.16),a0=B.m(16),a1=x.p
a0=B.q(k,B.x(B.a([B.q(k,D.bYe,A.f,k,k,new B.p(d,k,B.L(A.c.j(0.28),A.r,1),a0,k,k,A.n),k,52,k,k,k,k,k,52),A.ae,D.fKH,A.am,B.d("Type the 5-character code shown with the QR.",k,k,k,k,k,k,B.l(k,k,A.c.j(0.82),k,k,k,k,k,k,k,k,13,k,k,A.a8,k,1.35,!0,k,k,k,k,k,k,k,k),A.K,k,k)],a1),A.l,k,A.e,A.j,0,A.p),A.f,k,k,D.b8h,k,k,k,k,A.yQ,k,k,1/0)
d=B.a([],a1)
for(w=l.d,v=l.e,u=0;u<5;++u){t=B.a([],a1)
if(u===2)t.push(A.au)
s=w.a.a
r=u<s.toUpperCase().length
q=u===s.toUpperCase().length&&v.geb()
p=r?w.a.a.toUpperCase()[u]:""
s=r||q?A.as:A.a_
o=new B.aN(14,14)
if(q)n=A.bn
else n=r?A.bn.j(0.55):A.aM
m=new B.ay(n,q?2:1.2,A.r,-1)
n=q?B.a([new B.ab(0,A.G,A.bn.j(0.28),A.J,12)],g):k
t.push(new B.by(1,A.bb,B.cT(A.A,B.d(p,k,k,k,k,k,k,D.fsI,k,k,k),k,k,A.b_,new B.p(s,k,new B.bH(m,m,m,m),new B.be(o,o,o,o),n,k,A.n),A.h3,k,56,k,k,k,k,k,k),k))
if(u!==4&&u!==1)t.push(A_.AH)
A.d.v(d,t)}g=B.a([B.A(d,A.l,k,A.e,A.j,0,k,k),B.bS(0,B.d3(B.aM(k,A.Z,!0,k,!0,A.t,k,B.aO(),w,k,k,k,k,k,2,D.c4N,A.y,!0,k,!0,k,!1,v,A.ak,k,k,B.a([new B.uX(B.ag("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.C7(5,k),new C.bxF()],x.aS),k,k,A.aUX,k,5,k,1,k,k,!1,"\u2022",k,new C.eCt(l),k,new C.eCu(l),k,!1,k,k,!1,k,!0,k,A.ad,k,k,k,k,k,k,k,k,k,k,k,k,!0,A.a5,k,A.my,k,k,k,k),0),0,0,0)],a1)
d=C.zh(w.a.a.toUpperCase())==null?k:l.gce9()
return B.as(new B.D(new B.R(24,24,24,24+j.f.d),B.aH(!1,A.a3,!0,k,new B.cP(Af.LU,B.q(k,B.bw(e,B.x(B.a([a0,new B.D(D.bFE,B.x(B.a([new B.an(A.a0,k,A.ac,A.t,g,k),A.W,D.fJ_,A.bz,new B.a5(1/0,50,B.bJ(D.h_c,k,d,B.bp(A.bn,A.br,A.an,k,A.c,k,k,k,new B.b9(B.m(16),A.a1),k,k,k)),k),A.am,B.bO(!1,A.o0,k,k,!0,k,k,k,new C.eCv(a2),k,B.fv(k,k,k,k,k,k,k,k,k,k,k,A.bN,k,k,k,k,k,k,k,k,k,k,k,k,k,k))],a1),A.l,k,A.e,A.j,0,A.p),k)],a1),A.l,k,A.e,A.P,0,A.p),A.aq),A.f,k,k,new B.p(A.bB,k,h,i,f,k,A.n),k,k,k,k,k,k,k,k),k),A.f,A.L,0,k,k,k,k,k,A.aj),k),k,k,k)}}
C.bxF.prototype={
p_(d,e){var w=e.a.toUpperCase()
return e.cP8(B.hh(A.bC,w.length),w)}}
C.at1.prototype={
S(){return new C.aGn(B.zY(A.NG,A.o6,A.v9))}}
C.aGn.prototype={
t(){this.d.t()
this.a3()},
b1X(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
B.j1(w,d)},
abE(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$abE=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e){w=1
break}s=t.c
s.toString
w=3
return B.b(C.h38(s),$async$abE)
case 3:r=e
if(r==null||t.c==null){w=1
break}t.b1X("NGMYSLIDECODE|"+r)
case 1:return B.h(u,v)}})
return B.i($async$abE,v)},
ce7(d){var w,v,u,t
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u){t=C.ipw(w[u])
if(t!=null){this.b1X(t)
return}}},
B(d){var w,v,u,t=this,s=null,r=B.aI(s,s,s,s,A.wR,s,s,s,t.gbSd(),s,s,s,s,"Enter document code",s),q=t.f,p=q?"Flash off":"Flash on",o=x.p
p=B.eJ(B.a([r,B.aI(s,s,s,s,B.X(q?A.uP:An.Pp,s,s,s,s,s),s,s,s,new C.eJ9(t),s,s,s,s,p,s)],o),s,s,!0,!0,A.bB,s,1,s,s,s,!1,s,!1,A.c,s,s,s,!0,s,s,s,s,s,D.h0o,s,s,s,1,s,!0)
r=B.zX(t.d,A.c_,t.gce6())
w=B.m(28)
w=B.as(B.q(s,s,A.f,s,s,new B.p(s,s,B.L(A.bn,A.r,3),w,B.a([new B.ab(2,A.G,A.bn.j(0.35),A.J,24)],x.V),s,A.n),s,260,s,s,s,s,s,260),s,s,s)
v=A.w.j(0.72)
u=B.m(16)
return B.c4(p,A.w,new B.an(A.a0,s,A.b0,A.t,B.a([r,w,B.ap(32,B.q(s,D.fOO,A.f,s,s,new B.p(v,s,B.L(A.bn.j(0.45),A.r,1),u,s,s,A.n),s,s,s,s,A.jp,s,s,s),s,s,20,20,s,s)],o),s),s,!1,!1,s,s)}}
C.bxT.prototype={
B(d){var w=null,v=B.m(24),u=B.L(A.aM,A.r,1)
return B.aH(!1,A.a3,!0,w,B.q(w,B.x(B.a([B.q(w,H.aru,A.f,w,w,D.b80,w,56,w,w,w,w,w,56),A.aO,D.h05,A.am,new B.k4(this.c,new C.fjW(),w,w,x.cI),A.aO,new B.k4(this.d,new C.fjX(),w,w,x.cl),A.ae,D.h03],x.p),A.l,w,A.e,A.P,0,A.p),A.f,w,Af.LU,new B.p(A.as,w,u,v,w,w,A.n),w,w,w,K.a0S,D.bGh,w,w,w),A.f,A.L,0,w,w,w,w,w,A.aj)}}
C.a94.prototype={
S(){return new C.bmO(A.bF)},
gd1(){return this.c}}
C.bmO.prototype={
Y(){var w=this
w.a4()
if(w.a.d)return
w.a09()
w.d=B.df(A.fJ,new C.eqN(w))},
t(){var w=this.d
if(w!=null)w.a1(0)
this.a3()},
a09(){return this.csG()},
csG(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a09=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q={}
p=t.a
if(p.d){if(t.c!=null)t.m(new C.eqL(t))
w=1
break}s=p.e
q.a=null
w=s!=null?3:5
break
case 3:q.a=s.bD(new B.V(Date.now(),0,!1))
w=4
break
case 5:w=6
return B.b(C.clA(p.c),$async$a09)
case 6:r=e
q.a=r==null?A.bF:r
case 4:if(t.c==null){w=1
break}t.m(new C.eqM(q,t))
if(q.a.a<=0&&!t.f){t.f=!0
t.a.f.$0()}case 1:return B.h(u,v)}})
return B.i($async$a09,v)},
bUm(d){var w,v,u=d.a,t=A.o.aq(u,36e8)
if(t>=999)return"Admin \u2014 unlimited"
w=A.o.aq(u,6e7)%60
v=A.o.aq(u,1e6)%60
if(t>0)return""+t+"h "+A.a.b_(A.o.u(w),2,"0")+"m "+A.a.b_(A.o.u(v),2,"0")+"s left"
return A.a.b_(A.o.u(w),2,"0")+":"+A.a.b_(A.o.u(v),2,"0")+" left"},
B(d){var w,v,u,t,s=this,r=null
if(s.a.d)return A.bM
w=s.e.a
v=A.o.aq(w,6e7)<30&&A.o.aq(w,36e8)<999?A.ay:A.c4
w=v.j(0.14)
u=B.m(14)
t=B.L(v.j(0.55),A.r,1)
return B.q(r,B.A(B.a([B.X(A.Hk,v,r,r,r,20),A.au,B.E(B.d("Marriage document session \xb7 "+s.bUm(s.e),r,r,r,r,r,r,B.l(r,r,v,r,r,r,r,r,r,r,r,13,r,r,A.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),1)],x.p),A.l,r,A.e,A.j,0,r,r),A.f,r,r,new B.p(w,r,t,u,r,r,A.n),r,r,r,A1.alw,A.hK,r,r,1/0)}}
C.a9Y.prototype={
nx(){var w,v,u,t=this
t.y_()
w=t.cx
v=t.c
w.bun(t.cy,t,v)
u=x.Y
v.a.n(0,"/A",B.qi(B.I(["/S",D.ewz,"/URI",new B.t0(B.XV(w.as),A.vv,!0)],x.N,u),u))}}
C.a9Z.prototype={
a7(){return"PdfAnnotFlags."+this.b}}
C.b5e.prototype={
bC6(d,e,f,g,h,i,j,k,l,m){var w=B.eA([D.euS],x.di)
this.w!==$&&B.aQ()
this.w=w},
gcSC(){var w=this.w
w===$&&B.c()
if(w.a===0)return 0
return new B.k9(w,new C.cpu(),B.a4(w).k("k9<ch.E,H>")).f1(0,new C.cpv())},
aFb(d,e,f){var w,v,u,t=this,s=f.a
s.n(0,"/Subtype",new B.hf(t.a))
w=t.b
v=w.a
u=w.b
s.n(0,"/Rect",B.u0(B.a([v,u,v+w.c,u+w.d],x.cA)))
s.n(0,"/P",new B.js(d.a,d.b))
s.n(0,"/Border",B.u0(H.aty))
w=t.w
w===$&&B.c()
if(w.a!==0)s.n(0,"/F",new B.h4(t.gcSC()))
w=t.z
if(w.a!==0)s.n(0,"/AP",B.qi(w,x.Y))}}
C.cpw.prototype={}
C.a4i.prototype={}
C.ajD.prototype={}
C.aTr.prototype={
fV(d){var w,v,u,t,s,r,q=this,p=null
q.lC(d)
q.ME(d)
w=q.a
v=d.a
v.toString
w.toString
w=d.bjo(w)
u=x.N
t=x.Y
s=new C.cpw(q.d.a,"/Link",w,p,p,p,p,p,B.T(u,t))
s.bC6(p,p,p,p,p,p,p,w,p,"/Link")
w=v.x
t=B.qi(B.I(["/Type",D.ewx],u,t),t)
u=w.b++
r=w.e
r===$&&B.c()
r=new C.a9Y(s,v,w,u,0,t,r,B.a([],x.s),p,p,0)
w.c.J(0,r)
v.dx.push(r)}}
C.ayF.prototype={}
C.aUT.prototype={
fV(d){var w,v,u,t,s=this
s.lC(d)
w=s.b
if(w!=null){v=B.dr()
u=s.a
v.ej(u.a,u.b,0,1)
u=d.b
u.is()
t=s.a
t.toString
u.LN(t)
u.Tq(0)
u.po(0,v)
w.fV(d)
u.nA(0)}}}
var z=a.updateTypes(["aB<~>()","~(m1)","Q(hQ)","~()","Q(eQ)","Q(oN)","Q(m1)","~(hQ)","Q(eQ,eQ)","KS(Z)","Q(oa)","Q(lu)","aB<Q>()","H(H,hQ)","ai<Af>()","n(oa)","Q(a9l)","n(m1)","n(wA)","Q(Fx)","H(hQ,hQ)","a9<n,@>(hQ)","n(eQ)","v(eQ)","cK(eQ)","v(hF)","~(hF)","eQ(n,F,F,F,F,F{align:qn,anim:hF,bullets:Q,color:H?,delay:H,fx:n,key:n,style:ID,weight:nZ})","eQ(n,F,F,F,F,F,H{align:qn,style:ID,weight:nZ})","eQ(n,F,H)","~(ai<oN>)","Q(Af)","Q(n,ai<Af>)","H(oN,oN)","oa()","a9<n,@>(oN)","a2g(Z)","eQ(vj,F,F,F,F,H{fx:n,key:n,rotation:F})","eQ(n,F,F,F,F{anim:hF,delay:H,fx:n,key:n})","ZZ(Z)","aB<~>(oN)","Q(mS)","a1M(Z)","a1L(Z)","ZX(Z)","a09(Z)","eQ(vj,F,F,F,F,H,n,n{anim:hF,delay:H,rotation:F,stroke:H,strokeWidth:F})","eQ(n,F,F,F,F,F,n,n,H)","eQ(F,F,n,H{size:F})","Qu(Z)","lu()","v(rP,F,F)","oN(a9<@,@>)","Fx()","fi(eQ)","v(jb)","a_H(Z)","~(Fo)","a01(Z)","H(eQ,eQ)","eQ(eQ)","a9<n,@>(eQ)","eQ(a9<@,@>)","m1(m1)","a9<n,@>(m1)","m1(a9<@,@>)","Q(k0)","k0()","~(v8)","n(hQ)","V(ai<hQ>)","V(hQ)","Q(n,hQ)","aeG(Z)","~(Q(eQ,eQ))","ae4(Z,H)","aeJ(Z)","u(m1,Q)","agp(Z,H)","aeM(Z)","X7(Z)","~(mV)","hQ(hQ)","F(eQ)","X8(Z)","a0T(Z)","hQ()","a1f(Z)","aB<~>(ai<hQ>)","v(bB<H,hQ>)","D(k0)","D(Fx)","aB<~>(hF,~())","v(ai<hF>,hF?,~(hF),u)","ai<FU>()","ai<jG<mV>>(Z)","jG<mV>(mV)","hQ(a9<@,@>)","Xj(Z)","Q(mu)","Xk(Z)","v(hQ)","~(ml)","JK(Z,m1,v?)","H(a9Z)","aB<ai<a9<n,@>>?>()","n(n)","aB<Ae>({paper:n?,photo:dK?,request:n,template!lx})","aB<a9d>({doc!Ae,history:ai<+(n,n)>,instruction!n,photo:dK?,template!lx})","ai<hQ>(n?)"])
C.cOM.prototype={
$2(d,e){d=d+e&536870911
d=d+((d&524287)<<10)&536870911
return d^d>>>6},
$S:62}
C.cON.prototype={
$1(d){d=d+((d&67108863)<<3)&536870911
d^=d>>>11
return d+((d&16383)<<15)&536870911},
$S:72}
C.cOO.prototype={
$1(d){var w,v,u,t,s,r,q
for(w=this.a,v=this.b,u=v.c-1,v=v.b;t=w.a,t<d;){t=w.c
if(t<0){w.c=t-1
s=0
r=16}else{s=v[t]
r=t===u?A.o.galD(s):16;--w.c}w.b=A.o.dX(w.b,r)+s
w.a+=r}v=w.b
t-=d
q=A.o.mF(v,t)
w.b=v-A.o.dX(q,t)
w.a=t
return q},
$S:72}
C.cOP.prototype={
$0(){var w,v,u,t,s
for(w=this.a,v=w.$flags|0,u=1,t=0;t<8;++t){if(u===0)break
s=w[t]+u
v&2&&B.aj(w)
w[t]=s&255
u=s>>>8}},
$S:0}
C.bTY.prototype={
$1(d){return J.eE(A.dR.gaU(d),d.byteOffset,d.byteLength)},
$S:1693}
C.fH7.prototype={
$5(d,e,f,g,h){var w=this,v=w.a
if((v&8)!==0)B.iV(w.b,d+f,e+g,w.c,h,w.d,!1,w.e,w.f)
if((v&4)!==0)B.iV(w.b,d-f,e+g,w.c,h,w.d,!1,w.e,w.f)
if((v&2)!==0)B.iV(w.b,d+f,e-g,w.c,h,w.d,!1,w.e,w.f)
if((v&1)!==0)B.iV(w.b,d-f,e-g,w.c,h,w.d,!1,w.e,w.f)},
$S:1694}
C.c3T.prototype={
$1(d){return B.a2(d,x.N,x.z)},
$S:31}
C.c3U.prototype={
$2(d,e){var w,v=J.t(e,"savedAt")
v=J.k(v==null?"":v)
w=J.t(d,"savedAt")
return A.a.aS(v,J.k(w==null?"":w))},
$S:43}
C.c3W.prototype={
$1(d){var w=J.t(d,"id")
return J.k(w==null?"":w)===this.a},
$S:4}
C.fY4.prototype={
$1(d){return new C.a2g(this.a,this.b,C.iqo(),null)},
$S:z+36}
C.fio.prototype={
$0(){var w=this.a
w.e=this.b
w.f=!1},
$S:0}
C.fis.prototype={
$1(d){return this.a.d.q(0,d.a)},
$S:z+2}
C.fit.prototype={
$0(){var w=this.a
w.r=!0
w.x=null},
$S:0}
C.fiu.prototype={
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
C.fip.prototype={
$0(){var w=this.a
w.r=!0
w.x=null},
$S:0}
C.fiq.prototype={
$0(){var w=this.a
w.r=!1
w.x="Could not open that saved presentation."
w.y=!0},
$S:0}
C.fir.prototype={
$0(){var w=this.a
w.r=!1
w.x='"'+this.b.b+'" is back in your presentations.'
w.y=!1},
$S:0}
C.fij.prototype={
$1(d){var w=null,v=B.d('"'+this.a+'" will be removed from the database. Your own copy stays in your presentations.',w,w,w,w,w,w,A.ho,w,w,w)
return B.eg(B.a([B.bO(!1,E.aX6,w,w,!0,w,w,w,new C.fih(d),w,w),B.bO(!1,D.fMa,w,w,!0,w,w,w,new C.fii(d),w,w)],x.p),w,w,D.a_8,v,w,w,w,w,D.h0H,w)},
$S:18}
C.fih.prototype={
$0(){B.a6(this.a,!1).O(!1)
return null},
$S:0}
C.fii.prototype={
$0(){B.a6(this.a,!1).O(!0)
return null},
$S:0}
C.fik.prototype={
$0(){return this.a.r=!0},
$S:0}
C.fil.prototype={
$0(){return this.a.r=!1},
$S:0}
C.fiy.prototype={
$0(){var w=this.a
return w.m(new C.fix(w,this.b))},
$S:0}
C.fix.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.fin.prototype={
$0(){var w=this.a
return w.m(new C.fim(w,this.b,this.c))},
$S:0}
C.fim.prototype={
$0(){var w=this.a.d,v=this.c.a
return this.b?w.W(0,v):w.J(0,v)},
$S:0}
C.fiv.prototype={
$0(){return this.a.a2h(this.b)},
$S:0}
C.fiw.prototype={
$0(){return this.a.PN(0,this.b)},
$S:0}
C.fiB.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.fiC.prototype={
$0(){var w=this.a
return w.m(new C.fiA(w,this.b))},
$S:0}
C.fiA.prototype={
$0(){var w=this.a,v=w.d
if(this.b)v.a8(0)
else{w=w.a.c
v.v(0,new B.N(w,new C.fiz(),B.U(w).k("N<1,n>")))}},
$S:0}
C.fiz.prototype={
$1(d){return d.a},
$S:z+69}
C.fq1.prototype={
$1(d){var w,v=x.N,u=x.z,t=B.a2(d,v,u),s=t.h(0,"id")
s=J.k(s==null?"":s)
w=x.f
v=F.how(w.b(t.h(0,"doc"))?B.a2(w.a(t.h(0,"doc")),v,u):A.cF)
t=t.h(0,"updatedAt")
u=B.bh(J.k(t==null?"":t))
return new C.oN(s,v,u==null?new B.V(Date.now(),0,!1):u)},
$S:z+52}
C.fq2.prototype={
$1(d){return d.a.length!==0},
$S:z+5}
C.fKj.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n
for(w=d.length,v=this.a,u=0;u<d.length;d.length===w||(0,B.J)(d),++u){t=d[u]
s=t.a
r=v.h(0,s)
q=!0
if(r!=null){p=t.c
o=r.c
n=p.a
if(n<=o.gbq())q=n===o.gbq()&&p.b>o.gcA()}if(q)v.n(0,s,t)}},
$S:z+30}
C.fKh.prototype={
$1(d){return!this.a.q(0,d.a)},
$S:z+5}
C.fKi.prototype={
$2(d,e){return e.c.aS(0,d.c)},
$S:z+33}
C.fXx.prototype={
$1(d){return d.aj()},
$S:z+35}
C.fGM.prototype={
$1(d){return d.a===this.a},
$S:z+5}
C.fYq.prototype={
$1(d){return new C.ZZ(this.a,null)},
$S:z+39}
C.cQ8.prototype={
$1(d){return A.a.i(d.b).length===0},
$S:z+41}
C.cQa.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.cQd.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cQe.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.cQc())},
$S:12}
C.cQc.prototype={
$0(){},
$S:0}
C.cQf.prototype={
$1(d){var w=0,v=B.j(x.a),u=this,t,s,r,q,p
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(C.a3f(t.a.c),$async$$1)
case 2:s=f
r=u.b
q=J.cC(s)
p=q.bj(s,new C.cQb(r))
if(p<0)q.c9(s,0,r)
else q.n(s,p,r)
w=3
return B.b(C.aiQ(t.a.c,s),$async$$1)
case 3:return B.h(null,v)}})
return B.i($async$$1,v)},
$S:278}
C.cQb.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cQg.prototype={
$1(d){},
$S:28}
C.cQ9.prototype={
$1(d){return new C.ZX(this.b,this.a.gcCz(),null)},
$S:z+44}
C.cQh.prototype={
$1(d){return D.htL},
$S:z+49}
C.cQ4.prototype={
$1(d){var w=null,v=B.m(24),u=B.L(D.ZG,A.r,1),t=x.p
return B.as(B.aH(!1,A.a3,!0,w,B.q(w,B.x(B.a([new B.D(D.bG3,B.x(B.a([B.q(w,D.bVn,A.f,w,w,new B.p(A.ay.j(0.14),w,w,w,w,w,A.a6),w,56,w,w,w,w,w,56),A.aO,D.fL7,A.W,B.d("\u201c"+this.a.b.a+"\u201d is removed from this device. This cannot be undone.",w,w,w,w,w,w,D.fyp,A.K,w,w)],t),A.l,w,A.e,A.j,0,A.p),w),A.e3,new B.D(A.qD,B.A(B.a([B.E(B.dU(D.fSc,new C.cQ2(d),B.di(w,w,w,w,w,w,w,w,w,E.nz,w,w,A.cq,w,new B.b9(B.m(14),A.a1),D.b5i,w,w,w,w)),1),A.au,B.E(B.bJ(D.fYr,w,new C.cQ3(d),B.bp(A.bD,w,w,w,w,w,A.cq,w,new B.b9(B.m(14),A.a1),w,w,w)),1)],t),A.l,w,A.e,A.j,0,w,w),w)],t),A.l,w,A.e,A.P,0,A.p),A.f,w,A.xP,new B.p(D.agC,w,u,v,D.dap,w,A.n),w,w,w,K.a0S,w,w,w,w),A.f,A.L,0,w,w,w,w,w,A.aj),w,w,w)},
$S:1695}
C.cQ2.prototype={
$0(){B.a6(this.a,!1).O(!1)
return null},
$S:0}
C.cQ3.prototype={
$0(){B.a6(this.a,!1).O(!0)
return null},
$S:0}
C.cQ5.prototype={
$0(){return J.nT(this.a.d,new C.cQ1(this.b))},
$S:0}
C.cQ1.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cQ0.prototype={
$1(d){var w,v,u,t=null,s=B.m(28),r=B.L(D.ZG,A.r,1),q=x.p
q=B.a([B.A(B.a([B.q(t,D.c_u,A.f,t,t,new B.p(t,t,t,B.m(14),t,D.at6,A.n),t,44,t,t,t,t,t,44),A.bc,B.E(B.x(B.a([B.d(this.a.b.a,t,1,A.a2,t,t,t,D.aWM,t,t,t),A.bG,D.fYm],q),A.E,t,A.e,A.j,0,A.p),1)],q),A.l,t,A.e,A.j,0,t,t),A.aB],q)
for(w=0;w<2;++w){v={}
u=D.dyl[w]
v.a=null
u=u.a
v.a=u[0]
q.push(new C.azC(u[1],u[2],u[3],new C.cPZ(v,d),!1,t))}q.push(A.am)
q.push(D.bzW)
q.push(A.am)
q.push(new C.azC(A.ej,"Delete book","Remove it from this device",new C.cQ_(d),!0,t))
return B.bm(!0,B.q(t,B.x(q,A.E,t,A.e,A.P,0,A.p),A.f,t,t,new B.p(D.agC,t,r,s,t,t,A.n),t,t,t,A.ux,A.GQ,t,t,t),!0,!1,A.ag,!0,!0)},
$S:25}
C.cPZ.prototype={
$0(){var w=this.a.a
B.a6(this.b,!1).O(w)
return null},
$S:0}
C.cQ_.prototype={
$0(){B.a6(this.a,!1).O("delete")
return null},
$S:0}
C.cQ7.prototype={
$3(d,e,f){var w=null,v=B.m(4),u=B.a([new B.ab(0,A.G,A.w.j(0.45),A.aLZ,12)],x.V)
return B.dN(B.eG(A.A,e,B.q(w,B.bw(B.m(4),new B.a5(62,95.81818181818181,B.ev(A.A,F.apM(d),A.f,A.dE),w),A.aq),A.f,w,w,new B.p(w,w,w,v,u,w,A.n),w,w,w,w,w,w,w,w),w),new B.o(f,0))},
$S:z+51}
C.cQ6.prototype={
$0(){return this.a.c8f()},
$S:0}
C.cPY.prototype={
$0(){return this.a.b0l(0,this.b)},
$S:0}
C.cPX.prototype={
$0(){return this.a.DQ(this.b)},
$S:0}
C.cPW.prototype={
$0(){return this.a.DQ(this.b)},
$S:0}
C.cQi.prototype={
$2(d,e){var w=this.a
return w.bGI(J.t(w.d,e))},
$S:41}
C.cPp.prototype={
$0(){var w=this.a
if(w.c!=null)w.Bp()},
$S:0}
C.cPo.prototype={
$0(){var w=this.a,v=w.w
return v.push(w.b3v("Page "+(v.length+1),"",""))},
$S:0}
C.cPr.prototype={
$0(){var w=this.a.w,v=this.b,u=w[v],t=this.c
w[v]=w[t]
w[t]=u},
$S:0}
C.cPz.prototype={
$0(){},
$S:0}
C.cPA.prototype={
$1(d){var w=this.a,v=w.a,u=$.ax()
v.U$=u
v.P$=0
w=w.b
w.U$=u
w.P$=0
return null},
$S:8}
C.cPs.prototype={
$0(){return this.a.c="data:"+this.b+";base64,"+A.cT.gcu().aN(this.c)},
$S:0}
C.cPq.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.cPu.prototype={
$0(){return this.a.Rh(this.b)},
$S:0}
C.cPv.prototype={
$0(){return this.a.Rh(this.b)},
$S:0}
C.cPw.prototype={
$0(){var w=this.a
w.m(new C.cPt(this.b))
w.EE()},
$S:0}
C.cPt.prototype={
$0(){return this.a.c=""},
$S:0}
C.cPy.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new C.cPx(w,d))
w.EE()},
$S:z+68}
C.cPx.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.cPF.prototype={
$2(d,e){if(d)this.a.Bp()},
$S:129}
C.cPB.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=2
return B.b(u.a.Bp(),$async$$0)
case 2:t=u.b
if(t.e!=null)t.L(x.q).f.T(D.fl3)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.cPC.prototype={
$0(){return this.a.b_g(this.b,-1)},
$S:0}
C.cPD.prototype={
$0(){return this.a.b_g(this.b,1)},
$S:0}
C.cPE.prototype={
$0(){return this.a.c9C(0,this.b)},
$S:0}
C.fOS.prototype={
$1(d){return C.hyJ()},
$S:44}
C.fOT.prototype={
$1(d){return null},
$S:28}
C.fum.prototype={
$1(d){return null},
$S:28}
C.fPR.prototype={
$1(d){var w=d.b[0]
w.toString
return w},
$S:288}
C.fPQ.prototype={
$2(d,e){return A.o.aS(e.length,d.length)},
$S:211}
C.fPX.prototype={
$1(d){var w=this.a
return C.hgy(d)===w||C.hDA(d)===w},
$S:z+4}
C.fto.prototype={
$1(d){return A.a.b_(A.o.u(d),2,"0")},
$S:76}
C.cfI.prototype={
$1(d){return d.length!==0},
$S:3}
C.cfJ.prototype={
$2(d,e){return C.hVW(d,e)},
$S:z+72}
C.cfL.prototype={
$1(d){var w,v,u,t=this.a.h(0,d.a)
if(x.f.b(t)){w=J.t(t,"at")
v=B.bh(J.k(w==null?"":w))}else v=null
w=J.t(d.b,"at")
u=B.bh(w==null?"":w)
if(u!=null)w=v==null||u.ca(v)
else w=!1
return w},
$S:1696}
C.fOQ.prototype={
$1(d){return d.a===this.a.a.a},
$S:z+4}
C.fOR.prototype={
$1(d){return C.fRA(d)&&A.a.q(d.db,"rais")},
$S:z+4}
C.fJG.prototype={
$1(d){var w=null
return B.bm(!0,new B.D(E.yP,B.x(B.a([B.as(B.q(w,w,A.f,w,w,new B.p(A.aT,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bz,D.fSP,A.T,B.d("Hati ya jimbo: "+this.a,w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aO,B.dh(D.HX,D.fMO,new C.fJE(d),B.bp(A.c4,w,w,w,A.w,w,A.cq,w,w,w,w,w)),A.W,B.es(A.v3,D.fU6,new C.fJF(d),B.di(w,w,w,w,w,w,w,w,w,A.ab,w,w,A.cq,w,w,R.xN,w,w,w,w))],x.p),A.al,w,A.e,A.P,0,A.p),w),!0,!1,A.ag,!0,!0)},
$S:25}
C.fJE.prototype={
$0(){B.a6(this.a,!1).O("continue")
return null},
$S:0}
C.fJF.prototype={
$0(){B.a6(this.a,!1).O("new")
return null},
$S:0}
C.fJH.prototype={
$1(d){var w=null
return B.eg(B.a([B.bO(!1,D.fIQ,w,w,!0,w,w,w,new C.fJC(d),w,w),B.bJ(D.h_K,w,new C.fJD(d),w)],x.p),w,w,w,D.h1G,w,w,w,w,D.fIJ,w)},
$S:18}
C.fJC.prototype={
$0(){B.a6(this.a,!1).O(!1)
return null},
$S:0}
C.fJD.prototype={
$0(){B.a6(this.a,!1).O(!0)
return null},
$S:0}
C.em3.prototype={
$0(){var w=this.a
w.r=w.f=w.e=!1},
$S:0}
C.em1.prototype={
$0(){return this.a.e=!0},
$S:0}
C.em2.prototype={
$0(){return this.a.f=!0},
$S:0}
C.em4.prototype={
$0(){return this.a.r=!1},
$S:0}
C.em5.prototype={
$0(){return this.a.r=!0},
$S:0}
C.fPW.prototype={
$1(d){return A.a.b_(A.o.u(d),2,"0")},
$S:76}
C.fPS.prototype={
$2$h$w(d,e){var w=null
return new B.bL(A.a7,w,w,B.BX(A.A,B.q(w,w,A.f,w,w,new B.p(this.a.j(0.14),w,w,B.m(3),w,w,A.n),w,d,w,w,w,w,w,w),w,e),w)},
$0(){return this.$2$h$w(5,1)},
$1$w(d){return this.$2$h$w(5,d)},
$1$h(d){return this.$2$h$w(d,1)},
$S:1697}
C.fPU.prototype={
$1(d){var w=null,v=B.m(3)
return B.q(A.A,B.d(d,w,w,w,w,w,w,D.fzM,w,w,w),A.f,w,w,new B.p(this.a,w,w,v,w,w,A.n),w,12,w,w,w,w,w,w)},
$S:137}
C.fPV.prototype={
$1$size(d){var w=null
return B.A(B.a([B.q(w,w,A.f,w,w,new B.p(w,w,B.L(A.iw,A.r,1.5),w,w,w,A.a6),w,d,w,w,w,w,w,d),B.dN(B.q(w,w,A.f,w,w,new B.p(w,w,B.L(A.iw,A.r,1.5),w,w,w,A.a6),w,d,w,w,w,w,w,d),new B.o(-d*0.38,0))],x.p),A.l,w,A.ba,A.j,0,w,w)},
$0(){return this.$1$size(18)},
$S:1698}
C.fPT.prototype={
$2$female$size(d,e){var w=null,v=d?D.aiQ:this.a,u=B.L(A.iw,A.r,1),t=e*0.32,s=B.ap(w,B.q(w,w,A.f,w,w,new B.p(v,w,w,w,w,w,A.a6),w,t,w,w,w,w,w,t),w,w,w,w,e*0.16,w),r=d?0.62:0.5
return B.q(w,new B.an(A.A,w,A.ac,A.t,B.a([s,B.ap(e*0.06,B.q(w,w,A.f,w,w,new B.p(v,w,w,B.m(7),w,w,A.n),w,t,w,w,w,w,w,e*r),w,w,w,w,w,w)],x.p),w),A.f,w,w,new B.p(D.agS,w,u,w,w,w,A.a6),w,e,w,w,w,w,w,e)},
$1$female(d){return this.$2$female$size(d,18)},
$S:1699}
C.h1_.prototype={
$1(d){return new C.aeG(this.a,this.b,null)},
$S:z+73}
C.e8s.prototype={
$2(d,e){var w,v,u,t=null,s=this.b,r=s?D.bwy:A.N6,q=B.L(D.jB.j(0.25),A.r,1),p=B.as(B.q(t,t,A.f,t,t,new B.p(A.c4.j(0.45),t,t,B.m(2),t,t,A.n),t,4,t,t,t,t,t,40),t,t,t),o=B.m(15)
o=B.q(t,D.arP,A.f,t,t,new B.p(t,t,B.L(A.c.j(0.5),A.r,1.2),o,B.a([new B.ab(0,A.G,D.jB.j(0.35),A.ev,10)],x.V),D.c9v,A.n),t,t,t,t,A.yF,t,t,t)
w=this.a
v=w.d.length
u=x.p
return B.q(t,B.x(B.a([new B.D(Q.a0I,B.x(B.a([p,A.aB,B.A(B.a([o,A.bc,B.E(B.x(B.a([B.d("Chagua muundo wa hati",t,t,t,t,t,t,B.l(t,t,s?A.c:D.jB,t,t,t,t,t,t,t,t,17,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),A.bG,B.d(w.c+" \xb7 "+v+" miundo",t,t,t,t,t,t,D.fyX,t,t,t)],u),A.E,t,A.e,A.j,0,A.p),1)],u),A.l,t,A.e,A.j,0,t,t)],u),A.l,t,A.e,A.j,0,A.p),t),B.E(B.ip(!0,t,e,A.y,D.aU0,new C.e8r(w,this.c),v,D.amk,t,A.ah,!1),1)],u),A.l,t,A.e,A.j,0,A.p),A.f,t,t,new B.p(r,t,q,A.mE,t,t,A.n),t,t,t,t,t,t,t,t)},
$S:121}
C.e8r.prototype={
$2(d,e){var w=this.a.d[e]
return new C.ae4(w,new C.e8q(this.b,w),null)},
$S:z+75}
C.e8q.prototype={
$0(){B.a6(this.a,!1).O(this.b.a)
return null},
$S:0}
C.fJK.prototype={
$1(d){return d.w==="hati_kuhowa"},
$S:z+2}
C.fJL.prototype={
$1(d){var w=null,v=this.a
return B.bm(!0,new B.D(E.yP,B.x(B.a([B.as(B.q(w,w,A.f,w,w,new B.p(A.aT,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bz,D.fWr,A.T,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aO,B.dh(D.HX,B.d('Endelea na "'+A.d.gH(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fJI(d),B.bp(D.jB,w,w,w,A.c,w,A.cq,w,w,w,w,w)),A.W,B.es(A.oH,D.VX,new C.fJJ(d),B.di(w,w,w,w,w,w,w,w,w,A.ab,w,w,A.cq,w,w,R.xN,w,w,w,w))],x.p),A.al,w,A.e,A.P,0,A.p),w),!0,!1,A.ag,!0,!0)},
$S:25}
C.fJI.prototype={
$0(){B.a6(this.a,!1).O("continue")
return null},
$S:0}
C.fJJ.prototype={
$0(){B.a6(this.a,!1).O("new")
return null},
$S:0}
C.fJO.prototype={
$1(d){return d.w==="hati_kuhoweya"},
$S:z+2}
C.fJP.prototype={
$1(d){var w=null,v=this.a
return B.bm(!0,new B.D(E.yP,B.x(B.a([B.as(B.q(w,w,A.f,w,w,new B.p(A.aT,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bz,D.fJT,A.T,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aO,B.dh(D.HX,B.d('Endelea na "'+A.d.gH(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fJM(d),B.bp(D.jB,w,w,w,A.c,w,A.cq,w,w,w,w,w)),A.W,B.es(A.oH,D.VX,new C.fJN(d),B.di(w,w,w,w,w,w,w,w,w,A.ab,w,w,A.cq,w,w,R.xN,w,w,w,w))],x.p),A.al,w,A.e,A.P,0,A.p),w),!0,!1,A.ag,!0,!0)},
$S:25}
C.fJM.prototype={
$0(){B.a6(this.a,!1).O("continue")
return null},
$S:0}
C.fJN.prototype={
$0(){B.a6(this.a,!1).O("new")
return null},
$S:0}
C.fJS.prototype={
$1(d){return d.w==="hati_malipo_awamu"},
$S:z+2}
C.fJT.prototype={
$1(d){var w=null,v=this.a
return B.bm(!0,new B.D(E.yP,B.x(B.a([B.as(B.q(w,w,A.f,w,w,new B.p(A.aT,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bz,D.fQA,A.T,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aO,B.dh(D.HX,B.d('Endelea na "'+A.d.gH(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fJQ(d),B.bp(D.jB,w,w,w,A.c,w,A.cq,w,w,w,w,w)),A.W,B.es(A.oH,D.VX,new C.fJR(d),B.di(w,w,w,w,w,w,w,w,w,A.ab,w,w,A.cq,w,w,R.xN,w,w,w,w))],x.p),A.al,w,A.e,A.P,0,A.p),w),!0,!1,A.ag,!0,!0)},
$S:25}
C.fJQ.prototype={
$0(){B.a6(this.a,!1).O("continue")
return null},
$S:0}
C.fJR.prototype={
$0(){B.a6(this.a,!1).O("new")
return null},
$S:0}
C.h2s.prototype={
$1(d){return D.hz_},
$S:z+76}
C.eqQ.prototype={
$2(d,e){var w,v=null,u=this.a,t=u?D.bmX:A.N6,s=B.L(A.aC.j(0.25),A.r,1),r=B.as(B.q(v,v,A.f,v,v,new B.p(A.aC.j(0.45),v,v,B.m(2),v,v,A.n),v,4,v,v,v,v,v,40),v,v,v),q=B.m(15)
q=B.q(v,D.c1V,A.f,v,v,new B.p(v,v,B.L(A.c.j(0.5),A.r,1.2),q,B.a([new B.ab(0,A.G,A.c4.j(0.35),A.ev,10)],x.V),D.atb,A.n),v,v,v,v,A.yF,v,v,v)
w=x.p
return B.q(v,B.x(B.a([new B.D(Q.a0I,B.x(B.a([r,A.aB,B.A(B.a([q,A.bc,B.E(B.x(B.a([B.d("Chagua muundo wa hati",v,v,v,v,v,v,B.l(v,v,u?A.c:A3.N2,v,v,v,v,v,v,v,v,17,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.bG,B.d("Hati ya Ndoa \xb7 19 miundo",v,v,v,v,v,v,D.fwk,v,v,v)],w),A.E,v,A.e,A.j,0,A.p),1)],w),A.l,v,A.e,A.j,0,v,v)],w),A.l,v,A.e,A.j,0,A.p),v),B.E(B.ip(!0,v,e,A.y,D.aU0,new C.eqP(this.b),19,D.amk,v,A.ah,!1),1)],w),A.l,v,A.e,A.j,0,A.p),A.f,v,v,new B.p(t,v,s,A.mE,v,v,A.n),v,v,v,v,v,v,v,v)},
$S:121}
C.eqP.prototype={
$2(d,e){var w=D.SH[e]
return new C.agp(w,new C.eqO(this.a,w),null)},
$S:z+78}
C.eqO.prototype={
$0(){B.a6(this.a,!1).O(this.b.a)
return null},
$S:0}
C.fRE.prototype={
$0(){return B.hft(C.idw(this.a))},
$S:345}
C.fRD.prototype={
$0(){var w=C.hgR(this.a)
return"data:image/png;base64,"+A.cT.gcu().aN(w)},
$S:23}
C.frF.prototype={
$4(d,e,f,g){var w=d+f*7,v=g*3
v=B.a([new B.jt(d,e),new B.jt(w,e+v),new B.jt(d+f*14,e),new B.jt(w,e-v)],x.J)
B.a3a(this.a,C.fG(4291404327),v)},
$S:677}
C.h2D.prototype={
$1(d){return new C.X7(this.a,null)},
$S:z+80}
C.etN.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.etM())},
$S:29}
C.etM.prototype={
$0(){},
$S:0}
C.etO.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.etL(w,d))},
$S:1701}
C.etL.prototype={
$0(){return this.a.x=J.eT(A.dR.gaU(this.b))},
$S:0}
C.etP.prototype={
$1(d){},
$S:28}
C.etp.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.etl.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.etw.prototype={
$0(){var w=this.a
w.as=!0
w.at="The editor is writing your newspaper\u2026"},
$S:0}
C.etx.prototype={
$0(){var w=this.a
A.d.a8(w.ay)
w.z=this.b
w=w.ax
A.d.a8(w)
w.push(D.eHh)},
$S:0}
C.ety.prototype={
$0(){return this.a.as=!1},
$S:0}
C.etr.prototype={
$0(){var w=this.a
w.as=!0
w.at="Working on it\u2026"
w.ax.push(new B.y("you",this.b))
w.f.bP(0,A.cf)},
$S:0}
C.ets.prototype={
$0(){var w,v=this.b
if(v.c){w=this.a
w.ay.push(w.z)
w.z=v.b}this.a.ax.push(new B.y("ai",v.a))},
$S:0}
C.ett.prototype={
$0(){return this.a.ax.push(new B.y("ai",B.w(this.b)))},
$S:0}
C.etu.prototype={
$0(){return this.a.as=!1},
$S:0}
C.etv.prototype={
$1(d){var w=this.a.r,v=w.f
if(v.length!==0){v=A.d.gd5(v).Q
v.toString
w.ms(v,A.dK,A.iy)}},
$S:8}
C.etq.prototype={
$0(){var w=this.a,v=w.z,u=C.fSk(w.y),t=this.b
w.y=t
if(v.a===u)w.z=v.cOh(C.fSk(t))},
$S:0}
C.etn.prototype={
$0(){var w=this.a
w.as=!0
w.at="Making your picture\u2026"},
$S:0}
C.eto.prototype={
$0(){return this.a.as=!1},
$S:0}
C.etE.prototype={
$0(){return B.a6(this.a,!1).hU()},
$S:0}
C.etF.prototype={
$0(){var w=this.a
return w.m(new C.etD(w))},
$S:0}
C.etD.prototype={
$0(){var w=this.a
return w.z=w.ay.pop()},
$S:0}
C.etG.prototype={
$0(){var w=this.a
return w.m(new C.etC(w,this.b))},
$S:0}
C.etC.prototype={
$0(){var w=this.b.b
this.a.e.sb1(0,w)
return w},
$S:0}
C.etH.prototype={
$1(d){var w=this.a
return w.m(new C.etB(w))},
$S:9}
C.etB.prototype={
$0(){return this.a.Q="en"},
$S:0}
C.etI.prototype={
$1(d){var w=this.a
return w.m(new C.etA(w))},
$S:9}
C.etA.prototype={
$0(){return this.a.Q="sw"},
$S:0}
C.etJ.prototype={
$0(){var w=this.a
return w.m(new C.etz(w,this.b))},
$S:0}
C.etz.prototype={
$0(){var w=this.b
this.a.f.sb1(0,w)
return w},
$S:0}
C.etK.prototype={
$1(d){return this.a.a_W()},
$S:2}
C.etm.prototype={
$0(){return this.a.cdp(this.b)},
$S:0}
C.cjs.prototype={
$1(d){var w=this.a
return typeof w.h(0,d)=="string"?A.a.i(B.cO(w.h(0,d))):null},
$S:346}
C.cjq.prototype={
$1(d){return A.a.i(d)},
$S:14}
C.cjr.prototype={
$1(d){return d.length!==0},
$S:3}
C.fRe.prototype={
boF(d,e){var w=0,v=B.j(x.H),u,t,s,r
var $async$$2=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:r=new C.bTX(d,B.a([],x.bH))
for(u=e.length,t=0;t<e.length;e.length===u||(0,B.J)(e),++t){s=e[t]
r.cKy($.rk().jp(0,"assets/news_fonts/"+s))}w=2
return B.b(r.mZ(0),$async$$2)
case 2:return B.h(null,v)}})
return B.i($async$$2,v)},
$2(d,e){return this.boF(d,e)},
$S:1702}
C.fPw.prototype={
$1(d){return d.length!==0},
$S:3}
C.fPy.prototype={
$1(d){var w=this.a.a
w=A.d.aO(A.d.dt(this.b,w,w+d)," ")
w=B.aL(w," \n\n ","\n\n")
w=B.aL(w," \n\n","\n\n")
return B.aL(w,"\n\n ","\n\n")},
$S:76}
C.fPx.prototype={
$1(d){var w,v,u,t=null
if(d===0)return!0
w=B.fq(t,A.cs,t,t,t,B.cQ(t,t,t,t,t,t,t,t,t,this.c,this.b.$1(d)),A.rb,A.bX,t,A.dD,A.bY)
v=this.a
w.o8(v.b)
u=w.b.a.c
return u.gba(u)<=v.a},
$S:33}
C.fre.prototype={
$1(d){var w=A.a.fw(d,B.ag("\\s+",!0,!1,!1,!1))
return new B.Y(w,new C.frf(),B.U(w).k("Y<1>")).gI(0)},
$S:261}
C.frf.prototype={
$1(d){return d.length!==0},
$S:3}
C.frc.prototype={
$2(d,e){return d+this.a.$1(e)},
$S:216}
C.frd.prototype={
$2(d,e){return d+this.a.$1(e)},
$S:216}
C.cjt.prototype={
$2(a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=null,a7=y.g,a8=b0.b
a8=isFinite(a8)?a8:824
w=b0.d
w=isFinite(w)?w:340
v=a5.b
u=a5.c
t=u-1
s=(a8-v*t)/u
r=a5.d&&a5.a.gaCw()?Math.min(150,w*0.42):0
q=a5.e
p=x.s
o=B.a([],p)
for(n=a5.a,m=x.G,l=n.d,k=l.as;q>=10.5;q-=0.5){j=n.c.r
i=j.length===0?B.a([a7],p):j
h=B.b0(l.w)
g=B.a([],m)
for(f=0;f<u;++f)g.push(new B.y(s,w-(f===t?r:0)))
o=C.hgx(i,new B.G(!0,h,a6,k,a6,a6,q,A.cY,A.bt,0,a6,a6,1.28,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),g)
if(C.hd8(j.length===0?B.a([a7],p):j,o))break}e=q*1.28
j=A.d.aO(n.gclM(),"\n\n")
d=B.fq(a6,A.cs,a6,a6,a6,B.cQ(a6,a6,a6,a6,a6,a6,a6,a6,a6,n.afC(k,q,1.28),j),A.rb,A.bX,a6,A.dD,A.bY)
d.o8(s)
for(a0=1;a0<40;++a0){j=d.b.a.c
a1=Math.min(w,j.gba(j)/u+e*a0)
j=n.c.r
i=j.length===0?B.a([a7],p):j
h=B.b0(l.w)
g=B.a([],m)
for(f=0;f<u;++f)g.push(new B.y(s,Math.min(a1,w-(f===t?r:0))))
a2=C.hgx(i,new B.G(!0,h,a6,k,a6,a6,q,A.cY,A.bt,0,a6,a6,1.28,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),g)
if(C.hd8(j.length===0?B.a([a7],p):j,a2)){o=a2
break}}a3=n.afC(k,q,1.28)
p=x.p
m=B.a([],p)
for(k=r>0,v=v/2-0.5,l=l.w,j=r-12,a4=0;a4<u;++a4){i=B.a([],p)
if(a4>0)i.push(new B.D(new B.R(v,0,v,0),B.q(a6,a6,A.f,B.b0(l).j(0.5),a6,a6,a6,a6,a6,a6,a6,a6,a6,1),a6))
h=B.a([new B.by(1,A.bb,B.d(o.length>a4?o[a4]:"",a6,a6,a6,a6,a6,a6,a3,A.rb,a6,a6),a6)],p)
if(k&&a4===t)h.push(n.aCv(s,j))
i.push(new B.a5(s,a6,B.x(h,A.E,a6,A.e,A.j,0,A.p),a6))
A.d.v(m,i)}return B.A(m,A.E,a6,A.e,A.j,0,a6,a6)},
$S:402}
C.cju.prototype={
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
n=o.gaCw()
m=n?Math.min(140,p*0.4):0
n=x.s
l=B.a([],n)
for(k=x.G,j=o.d,i=j.as,h=17;h>=10.5;h-=0.5){g=o.c.r
f=g.length===0?B.a([a6],n):g
e=B.b0(j.w)
d=B.a([new B.y(u,q),new B.y(u,q)],k)
for(a0=0;a0<t;++a0)d.push(new B.y(r,p-(a0===s?m:0)))
l=C.hgx(f,new B.G(!0,e,a5,i,a5,a5,h,A.cY,A.bt,0,a5,a5,1.28,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5),d)
if(C.hd8(g.length===0?B.a([a6],n):g,l))break}a1=o.afC(i,h,1.28)
a2=new C.cjv(a1)
n=x.p
v=B.A(B.a([a2.$2(l[0],u),A.Kp,new B.a5(v,a5,a4.f,a5),A.Kp,a2.$2(l[1],u)],n),A.E,a5,A.e,A.j,0,a5,a5)
k=B.a([],n)
for(i=m>0,j=j.w,g=m-12,a3=0;a3<t;++a3){f=B.a([],n)
if(a3>0)f.push(new B.D(D.bIs,B.q(a5,a5,A.f,B.b0(j).j(0.5),a5,a5,a5,a5,a5,a5,a5,a5,a5,1),a5))
e=B.a([new B.by(1,A.bb,B.d(l[2+a3],a5,a5,a5,a5,a5,a5,a1,A.rb,a5,a5),a5)],n)
if(i&&a3===s)e.push(o.aCv(r,g))
f.push(new B.a5(r,a5,B.x(e,A.E,a5,A.e,A.j,0,A.p),a5))
A.d.v(k,f)}return B.x(B.a([new B.a5(a5,q,v,a5),A.ae,B.E(B.A(k,A.E,a5,A.e,A.j,0,a5,a5),1)],n),A.l,a5,A.e,A.j,0,A.p)},
$S:155}
C.cjv.prototype={
$2(d,e){var w=null
return new B.a5(e,w,B.d(d,w,w,w,w,w,w,this.a,A.rb,w,w),w)},
$S:678}
C.h2G.prototype={
$1(d){return new C.X8(this.a,this.b,null)},
$S:z+84}
C.euz.prototype={
$1(d){return d.ld()},
$S:1704}
C.euA.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.euy(w,d))},
$S:1705}
C.euy.prototype={
$0(){return this.a.d=this.b.b},
$S:0}
C.eum.prototype={
$0(){return this.a.y=!0},
$S:0}
C.eun.prototype={
$0(){return this.a.y=!1},
$S:0}
C.eut.prototype={
$0(){return B.a6(this.a,!1).eA()},
$S:0}
C.euu.prototype={
$2(d,e){var w=null,v=this.a,u=this.b,t=B.L(A.bE,A.r,2.5)
return B.az(w,B.q(w,B.b2(w,w,w,new C.bel(u,v.gazy(),w),A.fQ),A.f,w,w,new B.p(w,w,t,w,w,w,A.n),w,w,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eur(v),new C.eus(v,e,u),w,w,w,w,w,w,w,w,w,w,w,!1,A.a4)},
$S:36}
C.eur.prototype={
$1(d){var w=this.a
return w.x=w.f},
$S:251}
C.eus.prototype={
$1(d){var w=this.a
w.m(new C.euo(w,d,this.b,this.c))},
$S:221}
C.euo.prototype={
$0(){var w,v,u,t=this,s=t.a,r=t.b
s.f=A.i.D(s.x*r.d,1,6)
w=s.gazy()
r=r.a
v=t.c
u=t.d
s.r=A.i.D(s.r-r.a/v.b*(w.c-w.a)/u.c,0,1)
s.w=A.i.D(s.w-r.b/v.d*(w.d-w.b)/u.d,0,1)},
$S:0}
C.euv.prototype={
$1(d){var w=this.a
return w.m(new C.euq(w,this.b))},
$S:9}
C.euq.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.euw.prototype={
$1(d){var w=this.a
return w.m(new C.eup(w,d))},
$S:6}
C.eup.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eux.prototype={
$0(){return B.a6(this.b,!1).O(this.a.a.c)},
$S:0}
C.h2W.prototype={
$1(d){return D.hBN},
$S:z+87}
C.f3z.prototype={
$1(d){return this.a.Zw()},
$S:8}
C.f2r.prototype={
$0(){var w=this.a,v=this.b
w.z=v
w.y="data:image/png;base64,"+A.cT.gcu().aN(v)},
$S:0}
C.f2P.prototype={
$0(){var w=this.a
w.p4=this.b
w.as=3},
$S:0}
C.f2Z.prototype={
$1(d){return d>=this.a.length},
$S:33}
C.f2a.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.f2b.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.f28.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.f29.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.f2I.prototype={
$2(d,e){var w,v=null,u=e.d,t=this.a,s=new C.f2J(t,this.b,u,e.b),r=s.$1(!0),q=t.y2
q=B.a([B.jm(B.r3(q>0.2?F.bXn(r,new B.Eu(q,q,A.x)):r),A.t,v)],x.p)
w=t.bn
if(w>0.02)q.push(B.jm(B.d3(B.r3(F.bXn(s.$1(!0),new B.Eu(12,12,A.x))),w*0.75),A.t,v))
s=t.b8
if(s!=null&&t.b6>0)q.push(B.e9(v,B.b0(s).j(t.b6),!0))
s=t.bf
if(s!=null&&t.bK>0){s=B.b0(s).j(t.bK)
w=t.bf
w.toString
q.push(new B.bN(new B.p(v,v,v,v,v,new B.bY(D.b2H,1.15,A.x,v,0,B.a([s,B.b0(w).j(0)],x.O),v,v),A.n),A.bj,v,v))}s=t.aL
if(s>0)q.push(new B.bN(new B.p(v,v,v,v,v,new B.bY(D.b2q,0.8,A.x,v,0,B.a([A.c.j(s*0.55),A.c.j(0)],x.O),v,v),A.n),A.bj,v,v))
s=t.aR
if(s>0)q.push(new B.bN(new B.p(v,v,v,v,v,new B.a8(A.b1,A.b7,A.x,B.a([A.w.j(s),A.L,A.L,A.w.j(t.aR)],x.O),D.d8Y,v),A.n),A.bj,v,v))
if(t.aH>0){s=t.k1
q.push(B.ap(v,new B.bN(new B.p(v,v,v,v,v,new B.a8(A.b1,A.b7,A.x,B.a([A.w.j(0),A.w.j(t.aH),A.w.j(t.aH),A.w.j(0)],x.O),D.dkS,v),A.n),A.bj,v,v),0.48*u,v,0,0,(s-0.06)*u,v))}s=t.a0
if(s>0)q.push(B.e9(v,A.w.j(s),!0))
s=t.bb
if(s>0)q.push(new B.bN(new B.p(v,v,v,v,v,new B.bY(A.A,0.95,A.x,v,0,B.a([A.L,A.w.j(s)],x.O),D.dhE,v),A.n),A.bj,v,v))
t=t.aG
if(t>0)q.push(B.b2(v,v,v,new C.bhX(t,v),A.az))
return new B.an(A.a0,v,A.b0,A.t,q,v)},
$S:67}
C.f2J.prototype={
$1(d){var w,v,u,t,s,r=this,q=null,p=B.fR(r.b,A.A,q,q,A.ck,A.c_,!0,q,!1,q,q),o=r.a,n=o.aZT(o.RG,o.R8,o.rx,o.ry,o.to,o.x1,o.x2,o.xr,o.y1),m=o.c8,l=m*3.141592653589793/180
if(m===0)w=1
else{m=Math.cos(l)
v=Math.sin(l)
u=r.c
t=r.d
s=u/t
u=s>1?s:t/u
w=Math.abs(m)+Math.abs(v)*u}m=o.bm
v=o.aP
u=v-1
t=o.bH
s=o.c5?-1:1
return B.dN(B.e1(A.A,B.eG(A.A,l,B.fz(A.A,new B.BJ(new B.uS(q,q,n,A.y0),p,q),q,B.wn(s,o.cP?-1:1,1),!0),q),v*w,q,q),new B.o(-m*r.d*u/2,-t*r.c*u/2))},
$S:483}
C.f2V.prototype={
$0(){return this.a.m(new C.f2U(this.b,this.c))},
$S:0}
C.f2U.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.f2W.prototype={
$1(d){return this.a.m(new C.f2T(this.b,d))},
$S:6}
C.f2T.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.f2Y.prototype={
$0(){return this.a.m(new C.f2X(this.b,this.c))},
$S:0}
C.f2X.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.f20.prototype={
$1(d){return d.c===this.a.x},
$S:z+99}
C.f21.prototype={
$1(d){var w=this.a
return w.m(w.gcDX())},
$S:2}
C.f22.prototype={
$1(d){return this.a.m(new C.f2_())},
$S:2}
C.f2_.prototype={
$0(){},
$S:0}
C.f23.prototype={
$0(){var w=this.a
return w.m(new C.f1Z(w,this.b))},
$S:0}
C.f1Z.prototype={
$0(){return this.a.x=this.b},
$S:0}
C.f25.prototype={
$2(d,e){return A.au},
$S:37}
C.f24.prototype={
$2(d,e){var w=null,v=this.b[e],u=this.a,t=v.a===u.w.a,s=B.m(14),r=B.a([B.b0(v.e),B.b0(v.f)],x.O),q=t?A.c:A.bA
q=B.L(q,A.r,t?2.5:1)
r=B.cT(w,B.as(B.d("\u201c",w,w,w,w,w,w,B.l(w,w,B.b0(v.r),w,w,w,w,w,w,w,w,40,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,w),w,w,A.b_,new B.p(w,w,q,s,w,new B.a8(A.b1,A.b7,A.x,r,w,w),A.n),A.h3,w,94,w,w,w,w,w,70)
return B.az(w,new B.a5(70,w,B.x(B.a([r,A.fD,B.d(v.b,w,1,A.a2,w,w,w,B.l(w,w,t?A.c:A.aD,w,w,w,w,w,w,w,w,10.5,w,w,A.U,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.l,w,A.e,A.j,0,A.p),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.f1Y(u,v),w,w,w,w,w,w,!1,A.a4)},
$S:82}
C.f1Y.prototype={
$0(){var w=this.a
return w.m(new C.f1V(w,this.b))},
$S:0}
C.f1V.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.f26.prototype={
$1(d){var w=this.a
return w.m(new C.f1X(w,d))},
$S:9}
C.f1X.prototype={
$0(){return this.a.k3=this.b},
$S:0}
C.f27.prototype={
$1(d){var w=this.a
return w.m(new C.f1W(w,d))},
$S:9}
C.f1W.prototype={
$0(){return this.a.k2=this.b},
$S:0}
C.f3o.prototype={
$1(d){var w=this.a.db
return w[d]===w[A.d.gH(this.b)]},
$S:33}
C.f3v.prototype={
$1(d){var w=this.a
return w.m(new C.f3w(w,d))},
$S:32}
C.f3w.prototype={
$0(){var w,v,u,t,s
for(w=this.a,v=w.dx,v=B.dZ(v,v.r,B.a4(v).c),w=w.db,u=this.b,t=v.$ti.c;v.C();){s=v.d
w[s==null?t.a(s):s]=u}},
$S:0}
C.f3x.prototype={
$1(d){var w
switch(d){case 1:w=20
break
case 2:w=28
break
case-1:w=11
break
default:w=15
break}return w},
$S:178}
C.f3p.prototype={
$0(){var w=this.a
return w.m(new C.f3n(w,this.b))},
$S:0}
C.f3n.prototype={
$0(){var w=this.a.dx,v=this.b
return w.q(0,v)?w.W(0,v):w.J(0,v)},
$S:0}
C.f3q.prototype={
$0(){var w=this.a
return w.m(new C.f3m(w,this.b))},
$S:0}
C.f3m.prototype={
$0(){var w,v=this.b.length,u=J.e4(v,x.S)
for(w=0;w<v;++w)u[w]=w
return this.a.dx.v(0,u)},
$S:0}
C.f3r.prototype={
$0(){var w=this,v=w.a
return v.m(new C.f3l(v,w.b,w.c,w.d))},
$S:0}
C.f3l.prototype={
$0(){var w,v,u,t,s,r=this,q=r.a.dx
q.a8(0)
w=B.a([],x.t)
for(v=r.b,u=r.c,t=r.d,s=0;s<v.length;++s)if(u[s]===t)w.push(s)
q.v(0,w)},
$S:0}
C.f3s.prototype={
$0(){var w=this.a,v=w.dx
return w.m(v.gtg(v))},
$S:0}
C.f3t.prototype={
$0(){return this.b.$1(this.a.a)},
$S:0}
C.f3u.prototype={
$0(){var w=this.a
return w.m(new C.f3k(w))},
$S:0}
C.f3k.prototype={
$0(){var w=this.a.db
return A.d.hx(w,0,w.length,0)},
$S:0}
C.f37.prototype={
$1(d){return d.a===this.a.dy},
$S:237}
C.f38.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=(e.b-42)/7,h=B.a([],x.p)
for(w=i*0.42,v=this.a,u=i*0.95,t=x.O,s=0;s<21;++s){r={}
q=D.aBo[s]
r.a=null
p=q.a
r.a=p
o=v.dy
n=new B.aN(9,9)
m=B.a([B.b0(v.w.e),B.b0(v.w.f)],t)
l=r.a
k=v.fx
h.push(v.azC(new B.ns(new B.be(n,n,n,n),A.aq,new B.bN(new B.p(j,j,j,j,j,new B.a8(A.a7,A.aa,A.x,m,j,j),A.n),A.bj,new C.b1r(l,B.b0(k==null?v.w.x:k),A.i.D(w,12,26),j),j),j),u,q.b,o===p,new C.f36(r,v),2,i))}return B.bW(A.bH,h,A.bs,j,7,7)},
$S:165}
C.f36.prototype={
$0(){var w=this.b
return w.m(new C.f31(this.a,w))},
$S:0}
C.f31.prototype={
$0(){return this.b.dy=this.a.a},
$S:0}
C.f39.prototype={
$1(d){var w=this.a
w.p1=!1
w.k4=d},
$S:154}
C.f3c.prototype={
$0(){var w=this.a
return w.m(new C.f35(w))},
$S:0}
C.f35.prototype={
$0(){return this.a.p1=!0},
$S:0}
C.f3d.prototype={
$1(d){return this.a.p2=d},
$S:6}
C.f3e.prototype={
$1(d){return this.a.p3=d},
$S:6}
C.f3f.prototype={
$1(d){return this.a.ok=d},
$S:6}
C.f3g.prototype={
$0(){var w=this.a
return w.m(new C.f34(w))},
$S:0}
C.f34.prototype={
$0(){var w=this.a
return w.fy=!w.fy},
$S:0}
C.f3h.prototype={
$0(){var w=this.a
return w.m(new C.f33(w))},
$S:0}
C.f33.prototype={
$0(){var w=this.a
return w.go=!w.go},
$S:0}
C.f3i.prototype={
$0(){var w=this.b
return w.m(new C.f32(this.a,w))},
$S:0}
C.f32.prototype={
$0(){return this.b.id=this.a.a},
$S:0}
C.f3j.prototype={
$1(d){return this.a.fx=d},
$S:154}
C.f3a.prototype={
$1(d){return this.a.fr=d},
$S:6}
C.f3b.prototype={
$1(d){return this.a.k1=d},
$S:6}
C.f2M.prototype={
$0(){var w=this.a
return w.m(new C.f2L(w))},
$S:0}
C.f2L.prototype={
$0(){var w=this.a
w.p4=null
w.b6c()},
$S:0}
C.f2N.prototype={
$0(){var w=this.a
return w.m(new C.f2K(w,this.b))},
$S:0}
C.f2K.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.f2O.prototype={
$0(){var w=this.a
return w.m(w.gcuj())},
$S:0}
C.f2E.prototype={
$0(){var w=this.a
return w.m(new C.f2D(w))},
$S:0}
C.f2D.prototype={
$0(){var w=this.a
w.RG=0.03
w.rx=1.12
w.ry=1.15
w.R8=w.xr=0},
$S:0}
C.f2F.prototype={
$0(){var w=this.a
return w.m(new C.f2C(w))},
$S:0}
C.f2C.prototype={
$0(){var w=this.a
w.aH=0.55
w.a0=Math.max(w.a0,0.12)},
$S:0}
C.f2G.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=null,n=(e.b-24)/4,m=B.a([],x.p)
for(w=n*1.25,v=this.a,u=this.b,t=0;t<18;++t){s=D.di4[t]
r=s.b
q=Math.abs(v.RG-r)<0.001&&Math.abs(v.rx-s.c)<0.001&&Math.abs(v.ry-s.d)<0.001&&Math.abs(v.to-s.e)<0.001&&Math.abs(v.x1-s.f)<0.001&&Math.abs(v.xr-s.r)<0.001&&Math.abs(v.x2)<0.5&&Math.abs(v.R8)<0.001&&!v.y1
p=new B.aN(9,9)
m.push(v.azC(new B.ns(new B.be(p,p,p,p),A.aq,new B.a5(1/0,1/0,new B.BJ(new B.uS(o,o,v.aZT(r,0,s.c,s.d,s.e,s.f,0,s.r,!1),A.y0),B.fR(u,A.A,140,o,A.ck,A.c_,!1,o,!1,o,o),o),o),o),w,s.a,q,new C.f2B(v,s),3,n))}return B.bW(A.bH,m,A.bs,o,10,8)},
$S:165}
C.f2B.prototype={
$0(){var w=this.a
return w.m(new C.f2A(w,this.b))},
$S:0}
C.f2A.prototype={
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
C.f2i.prototype={
$1(d){return this.a.R8=d},
$S:6}
C.f2j.prototype={
$1(d){return this.a.RG=d},
$S:6}
C.f2k.prototype={
$1(d){return this.a.rx=d},
$S:6}
C.f2l.prototype={
$1(d){return this.a.xr=d},
$S:6}
C.f2m.prototype={
$1(d){return this.a.aL=d},
$S:6}
C.f2n.prototype={
$1(d){return this.a.a0=d},
$S:6}
C.f2o.prototype={
$1(d){return this.a.bb=d},
$S:6}
C.f2p.prototype={
$1(d){return this.a.aH=d},
$S:6}
C.f2q.prototype={
$1(d){return this.a.aR=d},
$S:6}
C.f1E.prototype={
$1(d){return this.a.ry=d},
$S:6}
C.f1F.prototype={
$1(d){return this.a.to=d},
$S:6}
C.f1G.prototype={
$1(d){return this.a.x1=d},
$S:6}
C.f1H.prototype={
$1(d){return this.a.x2=d},
$S:6}
C.f1I.prototype={
$0(){var w=this.a
return w.m(new C.f1D(w))},
$S:0}
C.f1D.prototype={
$0(){var w=this.a
return w.y1=!w.y1},
$S:0}
C.f1J.prototype={
$1(d){return this.a.b8=d},
$S:154}
C.f1K.prototype={
$1(d){return this.a.b6=d},
$S:6}
C.f2c.prototype={
$1(d){return this.a.y2=d},
$S:6}
C.f2d.prototype={
$1(d){return this.a.bn=d},
$S:6}
C.f2e.prototype={
$1(d){return this.a.aG=d},
$S:6}
C.f2f.prototype={
$1(d){return this.a.bf=d},
$S:154}
C.f2g.prototype={
$1(d){return this.a.bK=d},
$S:6}
C.f1O.prototype={
$1(d){return this.a.aP=d},
$S:6}
C.f1P.prototype={
$1(d){return this.a.bm=d},
$S:6}
C.f1Q.prototype={
$1(d){return this.a.bH=d},
$S:6}
C.f1R.prototype={
$1(d){return this.a.c8=d},
$S:6}
C.f1S.prototype={
$0(){var w=this.a
return w.m(new C.f1N(w))},
$S:0}
C.f1N.prototype={
$0(){var w=this.a
return w.c8=A.i.F(w.c8+90+180,360)-180},
$S:0}
C.f1T.prototype={
$0(){var w=this.a
return w.m(new C.f1M(w))},
$S:0}
C.f1M.prototype={
$0(){var w=this.a
return w.c5=!w.c5},
$S:0}
C.f1U.prototype={
$0(){var w=this.a
return w.m(new C.f1L(w))},
$S:0}
C.f1L.prototype={
$0(){var w=this.a
return w.cP=!w.cP},
$S:0}
C.f2H.prototype={
$0(){var w=this.a,v=w.c
v.toString
return C.itM(v,w.p4)},
$S:0}
C.f2z.prototype={
$2(d,e){var w=null,v=this.a.z,u=v==null?D.bwS:B.fR(v,A.A,w,w,A.ck,A.c_,!1,w,!1,w,w)
return C.fPE(d.length===0?"rounded":d,u,e)},
$S:125}
C.f2v.prototype={
$0(){var w=this.a
return w.m(new C.f2u(w))},
$S:0}
C.f2u.prototype={
$0(){var w=this.a
w.ay=0.39
w.ch=0.8
w.CW=0.22
w.cx="circle"
w.cy="gold"},
$S:0}
C.f2w.prototype={
$0(){var w=this.b
return w.m(new C.f2t(this.a,w))},
$S:0}
C.f2t.prototype={
$0(){return this.b.cx=this.a.a},
$S:0}
C.f2x.prototype={
$0(){var w=this.b
return w.m(new C.f2s(this.a,w))},
$S:0}
C.f2s.prototype={
$0(){return this.b.cy=this.a.a},
$S:0}
C.f2y.prototype={
$1(d){var w=this.a
w.CW=d
w.ay=A.i.D(w.ay,0,1-d)
w.ch=A.i.D(w.ch,0,0.95)},
$S:6}
C.f2S.prototype={
$2(d,e){var w,v,u,t=null,s=e.b,r=e.d,q=B.m(20),p=B.a([new B.ab(-4,A.G,A.b8.j(0.35),A.J,30)],x.V),o=B.m(20),n=this.a,m=x.p,l=B.a([],m)
if(n.p4!=null)l.push(new B.en(n.cnI(),n.r))
l.push(new C.JK(n.cAS(),!1,!1,t))
o=B.bS(0,B.bw(o,new B.en(new B.an(A.a0,t,A.b0,A.t,l,t),n.f),A.aq),0,0,0)
l=n.ay
w=n.ch
v=n.CW*s
u=B.m(8)
return B.q(t,new B.an(A.a0,t,A.ac,A.t,B.a([o,B.ap(t,B.az(A.c2,new B.bN(new B.p(t,t,B.L(A.c.j(0.3),A.r,1),u,t,t,A.n),A.bj,t,t),A.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.f2R(n,s,r),t,t,t,t,t,t,t,t,t,t,t,t,t,t,!1,A.a4),v,t,l*s,t,w*r,v)],m),t),A.f,t,t,new B.p(t,t,t,q,p,t,A.n),t,t,t,t,t,t,t,t)},
$S:169}
C.f2R.prototype={
$1(d){var w=this.a
return w.m(new C.f2Q(w,d,this.b,this.c))},
$S:19}
C.f2Q.prototype={
$0(){var w,v=this,u=v.a,t=v.b.d,s=v.c
u.ay=A.i.D(u.ay+t.a/s,0,1-u.CW)
w=v.d
u.ch=A.i.D(u.ch+t.b/w,0,1-u.CW*s/w)},
$S:0}
C.f30.prototype={
$0(){var w=this.a
return w.m(new C.f3_(w,this.b))},
$S:0}
C.f3_.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.f2h.prototype={
$0(){var w=this.a.c
w.toString
return B.a6(w,!1).hU()},
$S:0}
C.f3y.prototype={
$2(d,e){var w,v,u,t=null,s=e.b
if(s>=860){w=this.a
v=x.p
return B.A(B.a([new B.a5(Math.min(s*0.4,460),t,B.x(B.a([w.b1P(),B.E(B.as(w.b4Q(Math.max(240,e.d-110)),t,t,t),1)],v),A.l,t,A.e,A.j,0,A.p),t),B.E(B.x(B.a([B.E(w.aSM(),1),w.aOO()],v),A.l,t,A.e,A.j,0,A.p),1)],v),A.l,t,A.e,A.j,0,t,t)}u=A.i.D(e.d*0.36,190,360)
s=this.a
return B.x(B.a([s.b1P(),new B.D(A.hJ,B.as(s.b4Q(u),t,t,t),t),B.E(s.aSM(),1),s.aOO()],x.p),A.l,t,A.e,A.j,0,A.p)},
$S:667}
C.fMV.prototype={
$10$align$style$weight(d,e,f,g,h,i,j,k,l,m){return C.er(k,!1,j,A.aH,"",4280640491,i,l,m,"",h,C.bDo(),null,"","",0,!1,"",0,D.bm,4280172719,2,d,0,0,"",D.ct,D.d_,g,e,f)},
$9$align$weight(d,e,f,g,h,i,j,k,l){return this.$10$align$style$weight(d,e,f,g,h,i,j,k,A.bt,l)},
$8$weight(d,e,f,g,h,i,j,k){return this.$10$align$style$weight(d,e,f,g,h,i,j,A.K,A.bt,k)},
$7(d,e,f,g,h,i,j){return this.$10$align$style$weight(d,e,f,g,h,i,j,A.K,A.bt,A.U)},
$S:z+28}
C.fMU.prototype={
$3(d,e,f){var w=this,v=C.bDo(),u=w.b?A.I:A.cE,t=w.c?A.cK:A.bt
return C.er(w.d,!1,f,A.aH,"",4280640491,e,t,u,"",0.36,v,null,"","",0,!0,"",0,D.bm,4280172719,2,d,0,w.f,w.e,D.ct,D.d_,0.82,0.09,w.a)},
$S:z+29}
C.ckY.prototype={
$1(d){return B.w(d)},
$S:17}
C.fUH.prototype={
$0(){return this.a},
$S:z+14}
C.fzk.prototype={
$1(d){return d.a.d3(this.a)},
$S:z+31}
C.fzl.prototype={
$2(d,e){return J.cs(e)},
$S:z+32}
C.fUJ.prototype={
$0(){return B.a([],x.o)},
$S:z+14}
C.fUM.prototype={
$1(d){return d.a===A.a.i(this.a).toLowerCase()},
$S:z+10}
C.fUN.prototype={
$0(){return A.d.gH(D.x_)},
$S:z+34}
C.fUF.prototype={
$1(d){return d.a},
$S:z+15}
C.fUI.prototype={
$1(d){return d.a},
$S:z+15}
C.fSD.prototype={
$1(d){return A.a.i(B.w(d))},
$S:17}
C.fSE.prototype={
$1(d){return d.length!==0},
$S:3}
C.fSF.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.fMZ.prototype={
$0(){return C.cE()},
$S:23}
C.fN1.prototype={
$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var w=this.a.$0(),v=m==null?this.b.e:m,u=this.c,t=u?k:D.ct,s=u?n:0
return C.er(j,l,v,A.aH,"",4280640491,i,q,r,"",h,w,null,u?o:"",p,0,!1,"",0,D.bm,4280172719,2,d,s,0,"",t,D.d_,g,e,f)},
$6(d,e,f,g,h,i){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bp,D.ds,!1,null,0,"","",A.bt,A.a8)},
$7$key(d,e,f,g,h,i,j){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bp,D.ds,!1,null,0,"",j,A.bt,A.a8)},
$8$fx$key(d,e,f,g,h,i,j,k){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bp,D.ds,!1,null,0,j,k,A.bt,A.a8)},
$11$align$anim$delay$fx$key(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,!1,null,l,m,n,A.bt,A.a8)},
$10$align$anim$key$weight(d,e,f,g,h,i,j,k,l,m){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,!1,null,0,"",l,A.bt,m)},
$10$align$color$delay$key(d,e,f,g,h,i,j,k,l,m){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,D.ds,!1,k,l,"",m,A.bt,A.a8)},
$9$anim$key$weight(d,e,f,g,h,i,j,k,l){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bp,j,!1,null,0,"",k,A.bt,l)},
$9$color$delay$key(d,e,f,g,h,i,j,k,l){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bp,D.ds,!1,j,k,"",l,A.bt,A.a8)},
$11$anim$color$fx$key$weight(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bp,j,!1,k,0,l,m,A.bt,n)},
$11$align$anim$key$style$weight(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,!1,null,0,"",l,m,n)},
$11$anim$bullets$color$delay$key(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bp,j,k,l,m,"",n,A.bt,A.a8)},
$S:z+27}
C.fN0.prototype={
$9$fx$key$rotation(d,e,f,g,h,i,j,k,l){var w=this.a.$0()
return C.er(A.bp,!1,4279310375,A.aH,"",i,24,A.bt,A.a8,"",h,w,null,this.b?j:"",k,0,!1,"",l,d,i,0,"",0,0,"",D.ct,D.fi,g,e,f)},
$6(d,e,f,g,h,i){return this.$9$fx$key$rotation(d,e,f,g,h,i,"","",0)},
$7$key(d,e,f,g,h,i,j){return this.$9$fx$key$rotation(d,e,f,g,h,i,"",j,0)},
$8$fx$key(d,e,f,g,h,i,j,k){return this.$9$fx$key$rotation(d,e,f,g,h,i,j,k,0)},
$S:z+37}
C.fN_.prototype={
$9$anim$delay$fx$key(d,e,f,g,h,i,j,k,l){var w=this.a.$0(),v=this.b,u=v?i:D.ct,t=v?j:0
return C.er(A.bp,!1,4279310375,A.aH,"",4280640491,24,A.bt,A.a8,"",h,w,d,v?k:"",l,0,!1,"",0,D.bm,4280172719,2,"",t,0,"",u,D.lS,g,e,f)},
$5(d,e,f,g,h){return this.$9$anim$delay$fx$key(d,e,f,g,h,D.r1,350,"","")},
$8$anim$delay$key(d,e,f,g,h,i,j,k){return this.$9$anim$delay$fx$key(d,e,f,g,h,i,j,"",k)},
$8$anim$fx$key(d,e,f,g,h,i,j,k){return this.$9$anim$delay$fx$key(d,e,f,g,h,i,350,j,k)},
$S:z+38}
C.fMY.prototype={
$1(d){var w=d.x
return w>0&&w<=this.a.length},
$S:z+16}
C.fPp.prototype={
$0(){var w=0,v=B.j(x.e),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.a){s=t.b
r=s.a
s=(r==="bullets"||r==="section")&&s.w.length!==0}else s=!1
w=s?3:5
break
case 3:s=t.b
w=6
return B.b($.hzM.c3(0,A.a.i(s.w).toLowerCase(),new C.fPn(s)),$async$$0)
case 6:q=e
w=4
break
case 5:q=null
case 4:w=t.c&&t.b.r.length!==0?7:9
break
case 7:s=t.b
w=10
return B.b(t.d.c3(0,s.r,new C.fPo(s)),$async$$0)
case 10:p=e
w=8
break
case 9:p=null
case 8:u=new B.bB(t.e,new B.br8(p,q),x.e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1708}
C.fPn.prototype={
$0(){return F.aPN(this.a.w)},
$S:200}
C.fPo.prototype={
$0(){var w=this.a.r,v=B.aL(w.toLowerCase()," ","_")
return F.bCh("https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji@main/assets/"+B.hA(2,w,A.ca,!1)+"/3D/"+v+"_3d.png","image/png")},
$S:200}
C.fr8.prototype={
$1(d){return d.a==="bio"},
$S:z+16}
C.fr9.prototype={
$1(d){return d.a},
$S:z+17}
C.fra.prototype={
$1(d){return d.b},
$S:z+18}
C.h37.prototype={
$1(d){return D.hCy},
$S:z+42}
C.f9W.prototype={
$0(){return this.a.x=C.i4u(this.b,this.c.b)},
$S:0}
C.f9X.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.f9U.prototype={
$1(d){var w
if(this.a){w=this.b
if(w==null)w="circle"}else w=d
return w},
$S:444}
C.f9V.prototype={
$1(d){var w
if(this.a)w=d
else{w=this.b
if(w==null)w=""}return w},
$S:444}
C.f9T.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:o=t.b
n=t.a
m=n.c
m.toString
w=3
return B.b(B.bU(A.as,null,new C.f9O(n,t.c,o,t.d,t.e,t.f),m,!0,!0,o,A.kg,!1,!1,x.N),$async$$0)
case 3:s=e
if(s==null){w=1
break}w=A.a.a_(s,"finale:")?4:5
break
case 4:r=A.a.b2(s,7)
if(r.length===0){n.m(new C.f9P(n))
w=1
break}o=n.c
if(o==null){w=1
break}m=n.w
q=m.d
if(q.length===0){q=n.x
if(q==null)q=""}w=6
return B.b(C.hG1(o,m.cP3(q,r)),$async$$0)
case 6:p=e
if(p!=null&&n.c!=null)n.m(new C.f9Q(n,p))
w=1
break
case 5:o=s==="__auto"?null:s
t.r.$1(o)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.f9O.prototype={
$1(d){var w,v,u,t,s,r,q=this,p=null,o=new C.f9S(q.b,d),n=x.p,m=B.a([o.$2("__auto",B.q(p,D.bd1,A.f,p,p,D.b7K,p,p,p,p,p,p,p,p))],n),l=q.c,k=l?D.Dj:D.Dp,j=k.length,i=q.a,h=q.d,g=q.e,f=q.f,e=0
for(;e<j;++e){w=k[e].a
v=g.$1(w)
u=f.$1(w)
if(v.length===0&&u.length===0)v="rounded"
m.push(o.$2(w,new B.a5(64,64,C.fPE(v,i.b6P(h),u),p)))}t=B.kW(1,m,4,10,10,p,A.dZ,!0)
if(!l)return B.bm(!0,new B.D(Ab.yM,t,p),!0,!1,A.ag,!0,!0)
s=new C.f9R(i,d)
m=B.aF(d,A.c1,x.w).w
l=B.a([s.$2("","None")],n)
for(e=0;e<32;++e){r=D.If[e]
l.push(s.$2(r.a,r.b))}return B.bm(!0,new B.cP(new B.aY(0,1/0,0,m.a.b*0.85),B.ce(B.x(B.a([D.fOX,A.W,t,A.e3,D.f9Y,A.aw,D.h_5,A.W,B.kW(1.15,l,3,10,10,p,A.dZ,!0)],n),A.E,p,A.e,A.j,0,A.p),A.t,p,A.y,p,Ab.yM,p,p,A.ah),p),!0,!1,A.ag,!0,!0)},
$S:25}
C.f9S.prototype={
$2(d,e){var w=null,v=d==="__auto"&&this.a==null||d===this.a,u=B.m(16),t=v?A.b8.j(0.22):A.c.j(0.04),s=v?A.bg:A.dr
return B.az(w,B.q(w,e,A.f,w,w,new B.p(t,w,B.L(s,A.r,v?2:1),u,w,w,A.n),w,w,w,w,A.hL,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.f9N(this.b,d),w,w,w,w,w,w,!1,A.a4)},
$S:1709}
C.f9N.prototype={
$0(){B.a6(this.a,!1).O(this.b)
return null},
$S:0}
C.f9R.prototype={
$2(d,e){var w,v=null,u=this.a.w,t=u.a===d,s=B.m(12),r=t?A.bL:A.bA
r=B.L(r,A.r,t?2.5:1)
w=B.m(10)
u=B.E(B.q(v,B.bw(w,d.length===0?B.q(v,D.ask,A.f,A.c.j(0.05),v,v,v,v,v,v,v,v,v,v):new B.du(!0,new C.Op(u.Gf(d),!0,!1,v),v),A.aq),A.f,v,v,new B.p(v,v,r,s,v,v,A.n),v,v,v,v,v,v,v,v),1)
return B.az(v,B.x(B.a([u,A.aw,B.d(e,v,1,A.a2,v,v,v,B.l(v,v,t?A.bL:A.ab,v,v,v,v,v,v,v,v,10.5,v,v,A.U,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.l,v,A.e,A.j,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.f9M(this.b,d),v,v,v,v,v,v,!1,A.a4)},
$S:125}
C.f9M.prototype={
$0(){B.a6(this.a,!1).O("finale:"+this.b)
return null},
$S:0}
C.f9P.prototype={
$0(){var w=this.a
return w.w=w.w.Gf("")},
$S:0}
C.f9Q.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.f9C.prototype={
$0(){var w=this.a
w.e=this.b
w.cy=null},
$S:0}
C.f9D.prototype={
$0(){return this.a.cy=J.k(this.b)},
$S:0}
C.f9F.prototype={
$0(){return this.a.cy="Type a little about the presentation first, or attach a document."},
$S:0}
C.f9G.prototype={
$0(){return this.a.cy='You mentioned your logo \u2014 tap "Add your logo" below to upload it, so the AI puts the real one in.'},
$S:0}
C.f9H.prototype={
$0(){var w=this.a
w.ax=!0
w.cy=null
w.ay="Writing your "+w.ch+" slides\u2026"},
$S:0}
C.f9I.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.f9E(w,d))},
$S:2}
C.f9E.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.f9J.prototype={
$0(){var w=this.a
w.ax=!1
w.cy=B.w(this.b)},
$S:0}
C.fa9.prototype={
$0(){return this.a.f.fW()},
$S:0}
C.faa.prototype={
$0(){var w=this.a
return w.m(new C.fa8(w))},
$S:0}
C.fa8.prototype={
$0(){return this.a.e=null},
$S:0}
C.fab.prototype={
$0(){var w=this.a
return w.m(new C.fa7(w))},
$S:0}
C.fa7.prototype={
$0(){return this.a.x=null},
$S:0}
C.fad.prototype={
$1(d){var w=this.a
return w.m(new C.fa6(w,d))},
$S:35}
C.fa6.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.fae.prototype={
$1(d){var w=this.a
return w.m(new C.fa5(w,d))},
$S:35}
C.fa5.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.faf.prototype={
$0(){var w=this.a
return w.m(new C.fa4(w))},
$S:0}
C.fa4.prototype={
$0(){return this.a.y=B.a([],x.s)},
$S:0}
C.fag.prototype={
$1(d){var w=this.a
return w.m(new C.fa3(w,d))},
$S:35}
C.fa3.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.fah.prototype={
$1(d){var w=this.a
return w.m(new C.fa2(w,d))},
$S:35}
C.fa2.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.fai.prototype={
$0(){var w=this.a
return w.m(new C.fa1(w))},
$S:0}
C.fa1.prototype={
$0(){var w=this.a
return w.w=w.w.Gf("")},
$S:0}
C.faj.prototype={
$0(){var w=this.a
return w.m(new C.fa0(w,this.b))},
$S:0}
C.fa0.prototype={
$0(){return this.a.ch=this.b},
$S:0}
C.fak.prototype={
$2(d,e){var w,v,u=(e.b-16)/3,t=B.a([],x.p)
for(w=this.a,v=0;v<6;++v)t.push(new B.a5(u,null,w.bSV(D.a5U[v]),null))
return B.bW(A.bH,t,A.bs,null,8,8)},
$S:165}
C.fac.prototype={
$1(d){var w=this.a
return w.m(new C.fa_(w,d))},
$S:9}
C.fa_.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.f9K.prototype={
$0(){var w=this.a
return w.m(new C.f9L(w,this.b,this.c))},
$S:0}
C.f9L.prototype={
$0(){var w=this.c,v=this.a.cx
return this.b?v.W(0,w):v.J(0,w)},
$S:0}
C.f9Z.prototype={
$0(){var w=this.a
return w.m(new C.f9Y(w,this.b))},
$S:0}
C.f9Y.prototype={
$0(){return this.a.CW=this.b},
$S:0}
C.h36.prototype={
$1(d){return new C.a1L(this.a,this.b,null)},
$S:z+43}
C.f9v.prototype={
$0(){return this.a.r="Type what you want changed or added."},
$S:0}
C.f9w.prototype={
$0(){var w=this.a
w.e=!0
w.r=null
w.f="Making your changes\u2026"},
$S:0}
C.f9x.prototype={
$0(){var w=this.a
w.e=!1
w.r=this.b===D.aLi?"The text already fits inside its frame.":"The text is already at its limit."},
$S:0}
C.f9y.prototype={
$0(){var w=this.a
w.e=!1
w.r="Nothing to bring back. Changes are kept for 20 minutes."},
$S:0}
C.f9z.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.f9u(w,d))},
$S:2}
C.f9u.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.f9A.prototype={
$0(){var w=this.a
w.e=!1
w.r=B.w(this.b)},
$S:0}
C.f9B.prototype={
$0(){var w=this.b
if(A.a.c7(w,"\u2026"))w=A.a.aB(w,0,w.length-1)
this.a.d.bP(0,new B.ba(w,B.hh(A.bC,w.length),A.aP))},
$S:0}
C.fyB.prototype={
$1(d){return d.a===this.a},
$S:237}
C.eqf.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=p.gazD(),n=o.x
n===$&&B.c()
w=B.m(16)
v=p.a.c
u=v?D.d2o:D.dkz
t=D.yq.j(v?1:0.55)
v=p.a.c
t=B.L(t,A.r,v?1.8:1.2)
s=D.yq.j(v?0.35+0.15*o.x:0.12)
v=B.a([new B.ab(0,A.G,s,A.J,p.a.c?16:8)],x.V)
s=B.m(15)
n=B.bS(0,B.b2(q,q,q,new C.bkd(n*6.283,q),A.az),0,0,0)
o=o.x
o=B.bS(0,B.bUd(B.eG(A.A,0.5,B.q(q,q,A.f,q,q,new B.p(q,q,q,q,q,new B.a8(A.a7,A.aa,A.x,B.a([A.L,D.bkY.j(0.28),A.L],x.O),q,q),A.n),q,q,q,q,q,q,q,q),q),!0,new B.o(o*2.4-1.2,0)),0,0,0)
r=x.p
return B.q(q,B.bw(s,new B.an(A.a0,q,A.ac,A.t,B.a([n,o,B.as(B.x(B.a([B.X(p.a.c?A.ee:A.ml,D.yq,q,q,q,20),A.aw,B.ev(A.A,B.of(A.jT,D.fId,new C.eqe()),A.f,A.e7)],r),A.l,q,A.e,A.P,0,A.p),q,q,q),B.ap(q,B.q(q,D.fEG,A.f,q,q,new B.p(D.yq,q,q,B.m(6),q,q,A.n),q,q,q,q,O.an3,q,q,q),q,q,q,4,4,q)],r),q),A.aq),A.f,q,q,new B.p(q,q,t,w,v,new B.a8(A.aA,A.aF,A.x,u,q,q),A.n),q,64,q,q,q,q,q,q)},
$S:90}
C.eqe.prototype={
$1(d){return D.c7H.aK(0,d)},
$S:71}
C.fUO.prototype={
$1(d){return d.a===this.a},
$S:z+6}
C.fUP.prototype={
$1(d){var w=d.a
return A.a.i(w).length!==0&&w!==d.b},
$S:237}
C.fUQ.prototype={
$2(d,e){return A.o.aS(e.a.length,d.a.length)},
$S:1710}
C.fUR.prototype={
$1(d){var w,v,u,t,s,r,q,p
for(w=this.a,v=w.length,u=d,t=0;t<w.length;w.length===v||(0,B.J)(w),++t){s=w[t]
r=s.a
q=s.b
u=B.aL(u,r,q)
p=r.toUpperCase()
if(p!==r)u=B.aL(u,p,q.toUpperCase())}return u},
$S:14}
C.fUK.prototype={
$1(d){return d.a},
$S:z+17}
C.fUL.prototype={
$1(d){return d.b},
$S:z+18}
C.h2k.prototype={
$1(d){return new C.a09(this.a,this.b,null)},
$S:z+45}
C.dt2.prototype={
$0(){var w=this.a
w.f=!0
w.r=null},
$S:0}
C.dt3.prototype={
$1(d){return d.a===this.a.gajV()},
$S:z+10}
C.dt4.prototype={
$0(){var w=this.a
w.f=!1
w.r=J.k(this.b)},
$S:0}
C.dt7.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.dt8.prototype={
$0(){var w=this.a
return w.m(new C.dt6(w,this.b))},
$S:0}
C.dt6.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.dt9.prototype={
$1(d){var w=this.a
return w.m(new C.dt5(w,d))},
$S:9}
C.dt5.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eqd.prototype={
$1$2(d,e,f){var w=B.bq(d,!0,f)
A.d.e0(w,this.a)
return B.cW(w,0,B.dB(e,"count",x.S),B.U(w).c).dn(0)},
$2(d,e){return this.$1$2(d,e,x.z)},
$S:1711}
C.fng.prototype={
$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,n,o,p){return C.er(A.bp,!1,4279310375,A.aH,"",i,24,A.bt,A.a8,"",h,this.a.$0(),null,k,j,0,!1,"",n,d,o,p,"",m,0,"",l,D.fi,g,e,f)},
$8(d,e,f,g,h,i,j,k){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,D.ct,0,0,0,0)},
$12$anim$delay$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,n,o){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,0,n,o)},
$10$anim$delay(d,e,f,g,h,i,j,k,l,m){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,0,0,0)},
$S:z+46}
C.fni.prototype={
$9(d,e,f,g,h,i,j,k,l){return C.er(A.K,!1,this.b.d,A.aH,"",4280640491,i,A.bt,A.cY,"",h,this.a.$0(),null,k,j,0,!1,"",0,D.bm,4280172719,2,d,l,0,"",D.n9,D.d_,g,e,f)},
$S:z+47}
C.fnh.prototype={
$5$size(d,e,f,g,h){var w,v=this,u=v.b,t=u.c
u=u.xg(0,"twinkle")
w=t===D.bm?0.785:0
return v.a.$13$anim$delay$rotation$stroke$strokeWidth(t,d-h/2,e-h*0.89,h,h*1.78,v.c,f,u,D.n9,g,w,v.d.d,1.2)},
$4(d,e,f,g){return this.$5$size(d,e,f,g,0.022)},
$S:z+48}
C.fnf.prototype={
$1(d){var w=d.fx
return w==="sub"||w==="body"},
$S:z+4}
C.fO5.prototype={
$1(d){return d.a===this.a},
$S:z+11}
C.fO6.prototype={
$0(){return A.d.gH(D.Ip)},
$S:z+50}
C.fO7.prototype={
$1(d){return d.a===this.a},
$S:z+11}
C.fpv.prototype={
$1(d){return!(A.a.a_(d.db,"__design__")||A.a.a_(d.a,"design_"))},
$S:z+4}
C.fUg.prototype={
$1(d){var w=2450411,v=4281908728
C.dz(d,C.dA(4280171146,1,0,D.bm,w,0,0.52,0,0))
C.dz(d,C.dA(v,1,0,D.bm,w,0,0.04,0.48,0))
C.dz(d,C.dA(4294047225,0.38,0,D.bm,w,0,0.48,0.52,0.62))
C.dz(d,C.dA(v,0.006,0,D.fO,v,3,0.32,0.08,0.14))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fUh.prototype={
$1(d){var w=2450411,v=4280640491,u=4291548641
C.dz(d,C.dA(4280172719,0.8,0,D.bm,w,0,0.36,0.58,0.1))
C.dz(d,C.dA(v,0.64,0,D.bm,w,0,0.28,0.64,0.18))
C.dz(d,C.dA(4282090230,0.44,0,D.bm,w,0,0.2,0.7,0.28))
C.dz(d,C.dA(v,0.006,0,D.fO,v,3,0.22,0.08,0.12))
C.dz(d,C.dA(u,0.004,0,D.fO,u,2,0.38,0.08,0.18))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fUi.prototype={
$1(d){var w=2450411,v=4279548070
C.dz(d,C.dA(4279080072,0.11,0,D.bm,w,0,1,0,0))
C.dz(d,C.dA(4279310375,0.11,0,D.bm,w,0,1,0,0.89))
C.dz(d,C.dA(856528008,0.72,0,D.ke,w,0,0.28,0.72,0.14))
C.dz(d,C.dA(1426953352,0.2,0,D.ke,w,0,0.2,0.78,0.22))
C.dz(d,C.dA(v,0.004,0,D.fO,v,2,1,0,0.105))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fUt.prototype={
$1(d){var w=2450411
C.dz(d,C.dA(4279203438,0.55,0,D.ke,w,0,0.5,0.55,-0.05))
C.dz(d,C.dA(4280171146,0.5,0,D.ke,w,0,0.45,0.62,0.35))
C.dz(d,C.dA(4280640491,0.4,0.3,D.kd,w,0,0.35,0.68,0.55))
C.dz(d,C.dA(571438702,0.12,0,D.bm,w,0,0.12,0.08,0.08))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fUy.prototype={
$1(d){var w=4280472558
C.dz(d,C.dA(4279310375,0.75,-0.4,D.kd,2450411,0,0.75,-0.15,0.35))
C.dz(d,C.dA(w,0.55,0,D.bm,2450411,0,0.06,0.42,0.38))
C.dz(d,C.dA(w,0.006,0,D.fO,w,3,0.35,0.08,0.08))
C.dz(d,C.dA(2282478,0.12,0,D.bm,w,2,0.2,0.75,0.82))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fUz.prototype={
$1(d){var w=2450411,v=4280640491
C.dz(d,C.dA(3423541034,0.48,0,D.bm,w,0,1,0,0))
C.dz(d,C.dA(v,0.12,-0.08,D.ke,w,0,1.1,-0.05,0.38))
C.dz(d,C.dA(858088427,0.35,0,D.bm,w,0,0.42,0.55,0.05))
C.dz(d,C.dA(v,0.006,0,D.fO,v,3,0.25,0.08,0.52))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fUA.prototype={
$1(d){var w,v,u,t,s=4280171146
for(w=0;w<4;++w){v=D.d1g[w]
u=Date.now()
t=$.jc
$.jc=t+1
v=new C.eQ("design_"+(""+1000*u+"_"+t),D.fi,0.04+w*0.235,0.72,0.21,0.22,"",24,A.a8,A.bt,A.aH,4279310375,A.bp,null,D.bm,v,4294967295,2,0,!1,"",0,D.ct,0,"","","","","",!1,0)
u=$.Ln
v.db="__design__:"+(u.length===0?"layer":u)
A.d.c9(d.z,0,v)}C.dz(d,C.dA(s,0.006,0,D.fO,s,3,0.3,0.04,0.08))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fUB.prototype={
$1(d){var w,v,u,t,s=4280172719
for(w=0;w<4;++w){v=B.ar(A.mR,A.dn,w/3).l()
u=Date.now()
t=$.jc
$.jc=t+1
v=new C.eQ("design_"+(""+1000*u+"_"+t),D.fi,0.58+w*0.08,0.15+w*0.05,0.32,0.7,"",24,A.a8,A.bt,A.aH,4279310375,A.bp,null,D.E1,v,2450411,0,0,!1,"",0,D.ct,0,"","","","","",!1,0)
u=$.Ln
v.db="__design__:"+(u.length===0?"layer":u)
A.d.c9(d.z,0,v)}C.dz(d,C.dA(s,0.006,0,D.fO,s,3,0.4,0.06,0.1))
d.e=4294967295
d.f=4292602622},
$S:z+1}
C.fUC.prototype={
$1(d){var w=4294967295
C.dz(d,C.dA(4280640491,1,0,D.bm,2450411,0,0.42,0,0))
C.dz(d,C.dA(4280110808,1.1,1.57,D.kd,2450411,0,0.18,0.35,-0.05))
C.dz(d,C.dA(w,0.006,0,D.fO,w,2,0.25,0.08,0.85))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fUD.prototype={
$1(d){var w=4278982953,v=2450411,u=4282090230
C.dz(d,C.dA(w,0.1,0,D.bm,v,0,1,0,0))
C.dz(d,C.dA(u,0.012,0,D.bm,v,0,1,0,0.1))
C.dz(d,C.dA(u,0.006,0,D.fO,u,3,0.42,0.06,0.14))
C.dz(d,C.dA(403446057,0.68,0,D.ke,v,0,0.22,0.72,0.18))
C.dz(d,C.dA(w,0.1,0,D.bm,v,0,1,0,0.9))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fUE.prototype={
$1(d){var w=4278630100
C.dz(d,C.dA(4279310375,1.2,0.15,D.ke,2450411,0,0.55,-0.2,-0.1))
C.dz(d,C.dA(w,1.1,0.15,D.bm,2450411,0,0.08,0.15,-0.05))
C.dz(d,C.dA(1120295,0.18,0,D.bm,w,3,0.38,0.55,0.75))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fUj.prototype={
$1(d){var w=4292617766
C.dz(d,C.dA(4282714634,0.65,-0.2,D.kd,2450411,0,0.65,-0.1,0.45))
C.dz(d,C.dA(w,0.5,-0.15,D.kd,2450411,0,0.5,0.05,0.55))
C.dz(d,C.dA(w,0.006,0,D.fO,w,3,0.38,0.55,0.08))
d.e=4294967295
d.f=4294898418},
$S:z+1}
C.fUk.prototype={
$1(d){var w=2450411
C.dz(d,C.dA(4278413729,0.35,3.14,D.kd,w,0,0.45,-0.05,0.7))
C.dz(d,C.dA(4278355143,0.3,3.14,D.kd,w,0,0.4,0.25,0.75))
C.dz(d,C.dA(4279150057,0.32,3.14,D.kd,w,0,0.5,0.55,0.72))
C.dz(d,C.dA(863884284,0.22,0,D.f1,w,0,0.22,0.08,0.12))
d.e=4293982719
d.f=4294967295},
$S:z+1}
C.fUl.prototype={
$1(d){var w=4279310375,v=2450411,u=4280472558
C.dz(d,C.dA(w,0.14,0,D.bm,v,0,0.14,0.02,0.02))
C.dz(d,C.dA(2282478,0.14,0,D.bm,u,3,0.14,0.84,0.02))
C.dz(d,C.dA(w,0.28,0,D.ke,v,0,0.35,-0.08,0.78))
C.dz(d,C.dA(u,0.22,0.5,D.kd,v,0,0.3,0.72,0.78))
C.dz(d,C.dA(w,0.006,0,D.fO,w,3,0.2,0.08,0.22))
d.e=4294967295
d.f=null},
$S:z+1}
C.fUm.prototype={
$1(d){var w=4293571336,v=1156231944
C.dz(d,C.dA(1841431,0.92,0,D.bm,w,3,0.92,0.04,0.04))
C.dz(d,C.dA(v,0.15,0,D.kd,2450411,0,0.15,0.02,0.02))
C.dz(d,C.dA(v,0.15,3.14,D.kd,2450411,0,0.15,0.83,0.83))
C.dz(d,C.dA(w,0.004,0,D.fO,w,2,0.7,0.15,0.88))
d.e=4280031511
d.f=4282523654},
$S:z+1}
C.fUn.prototype={
$1(d){var w=4279080072,v=2450411
C.dz(d,C.dA(w,0.14,0,D.lt,v,0,0.14,0.68,0.18))
C.dz(d,C.dA(4279548070,0.14,0,D.lt,v,0,0.14,0.78,0.28))
C.dz(d,C.dA(4281193663,0.14,0,D.lt,v,0,0.14,0.68,0.38))
C.dz(d,C.dA(4284410580,0.14,0,D.lt,v,0,0.14,0.78,0.48))
C.dz(d,C.dA(4279203438,0.14,0,D.lt,v,0,0.14,0.68,0.58))
C.dz(d,C.dA(w,0.006,0,D.fO,w,3,0.22,0.06,0.1))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fUo.prototype={
$1(d){var w=2450411,v=4280640491
C.dz(d,C.dA(3708753706,0.42,0,D.bm,w,0,1,0,0))
C.dz(d,C.dA(v,0.06,-0.05,D.ke,w,0,1,0,0.38))
C.dz(d,C.dA(859356664,0.25,0,D.f1,w,0,0.25,0.7,0.08))
C.dz(d,C.dA(v,0.006,0,D.fO,v,3,0.3,0.08,0.48))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fUp.prototype={
$1(d){var w,v,u,t,s=4280640491
for(w=0;w<4;++w){v=B.ar(A.mR,A.dn,w/3).l()
u=Date.now()
t=$.jc
$.jc=t+1
v=new C.eQ("design_"+(""+1000*u+"_"+t),D.fi,0.06+w*0.23,0.78,0.2,0.14,"",24,A.a8,A.bt,A.aH,4279310375,A.bp,null,D.E1,v,2450411,0,0,!1,"",0,D.ct,0,"","","","","",!1,0)
u=$.Ln
v.db="__design__:"+(u.length===0?"layer":u)
A.d.c9(d.z,0,v)}C.dz(d,C.dA(4280172719,0.08,0,D.bm,2450411,0,1,0,0))
C.dz(d,C.dA(s,0.006,0,D.fO,s,3,0.35,0.06,0.14))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fUq.prototype={
$1(d){var w,v,u,t=4291548641,s=4279310375
for(w=1;w<6;++w){v=Date.now()
u=$.jc
$.jc=u+1
u=new C.eQ("design_"+(""+1000*v+"_"+u),D.fi,0.08,0.15+w*0.12,0.55,0.002,"",24,A.a8,A.bt,A.aH,s,A.bp,null,D.fO,t,t,0,0,!1,"",0,D.ct,0,"","","","","",!1,0)
v=$.Ln
u.db="__design__:"+(v.length===0?"layer":v)
A.d.c9(d.z,0,u)}C.dz(d,C.dA(s,0.75,0,D.bm,2450411,0,0.22,0.72,0.1))
C.dz(d,C.dA(872415231,0.16,0,D.bm,2450411,0,0.16,0.75,0.15))
C.dz(d,C.dA(s,0.006,0,D.fO,s,3,0.2,0.08,0.1))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fUr.prototype={
$1(d){var w=4282865001,v=2450411,u=4284773515
C.dz(d,C.dA(4674921,0.9,0,D.bm,4287931320,2,0.9,0.05,0.05))
C.dz(d,C.dA(w,0.08,0,D.bm,v,0,0.08,0.03,0.03))
C.dz(d,C.dA(u,0.08,0,D.bm,v,0,0.08,0.89,0.03))
C.dz(d,C.dA(u,0.08,0,D.bm,v,0,0.08,0.03,0.89))
C.dz(d,C.dA(w,0.08,0,D.bm,v,0,0.08,0.89,0.89))
C.dz(d,C.dA(w,0.004,0,D.fO,w,2,0.25,0.12,0.12))
d.e=4294507260
d.f=4293060848},
$S:z+1}
C.fUs.prototype={
$1(d){var w,v,u,t,s,r=4279310375,q=2450411
for(w=0;w<3;++w){v=w*0.24
u=Date.now()
t=$.jc
$.jc=t+1
t=new C.eQ("design_"+(""+1000*u+"_"+t),D.fi,0.55,0.14+v,0.38,0.18,"",24,A.a8,A.bt,A.aH,r,A.bp,null,D.bm,4294967295,4280640491,2,0,!1,"",0,D.ct,0,"","","","","",!1,0)
u=$.Ln
t.db="__design__:"+(u.length===0?"layer":u)
A.d.c9(d.z,0,t)
u=B.ar(A.da,A.cv,w/2).l()
t=Date.now()
s=$.jc
$.jc=s+1
u=new C.eQ("design_"+(""+1000*t+"_"+s),D.fi,0.57,0.16+v,0.06,0.14,"",24,A.a8,A.bt,A.aH,r,A.bp,null,D.bm,u,q,0,0,!1,"",0,D.ct,0,"","","","","",!1,0)
v=$.Ln
u.db="__design__:"+(v.length===0?"layer":v)
A.d.c9(d.z,0,u)}C.dz(d,C.dA(4280171146,1,0,D.bm,q,0,0.48,0,0))
C.dz(d,C.dA(4280172719,1.1,1.57,D.kd,q,0,0.12,0.42,-0.05))
d.e=4294967295
d.f=4292602622},
$S:z+1}
C.fUu.prototype={
$1(d){var w=2450411
C.dz(d,C.dA(870995980,0.55,0.45,D.ke,w,0,0.55,-0.12,-0.08))
C.dz(d,C.dA(856996006,0.45,0.45,D.ke,w,0,0.45,0.62,-0.05))
C.dz(d,C.dA(16777215,0.38,0.45,D.ke,4293548044,5,0.38,0.52,0.12))
C.dz(d,C.dA(585783308,0.3,0.45,D.ke,w,0,0.3,0.56,0.16))
C.dz(d,C.dA(4279548070,0.06,0,D.bm,w,0,0.16,0.38,0.04))
C.dz(d,C.dA(1156208652,0.28,0,D.f1,w,0,0.28,0.66,0.52))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fUv.prototype={
$1(d){var w=4279080072,v=2450411,u=4294047225,t=4291548641,s=4293548044
C.dz(d,C.dA(w,1,0,D.bm,v,0,0.07,0,0))
C.dz(d,C.dA(u,0.1,0,D.bm,t,1,0.46,0.48,0.14))
C.dz(d,C.dA(u,0.1,0,D.bm,t,1,0.46,0.48,0.28))
C.dz(d,C.dA(u,0.1,0,D.bm,t,1,0.46,0.48,0.42))
C.dz(d,C.dA(s,0.08,0,D.f1,v,0,0.08,0.5,0.16))
C.dz(d,C.dA(w,0.08,0,D.f1,v,0,0.08,0.5,0.3))
C.dz(d,C.dA(4279548070,0.08,0,D.f1,v,0,0.08,0.5,0.44))
C.dz(d,C.dA(16777215,0.32,0.45,D.ke,s,4,0.32,0.1,0.18))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fUw.prototype={
$1(d){var w,v,u,t=4279548070,s=4293548044,r=4279179050
C.dz(d,C.dA(4294047225,0.08,0,D.bm,t,2,0.1,0.02,0.06))
C.dz(d,C.dA(s,0.42,0,D.bm,2450411,0,0.36,0.58,0.18))
C.dz(d,C.dA(872415231,0.12,0,D.bm,2450411,0,0.28,0.62,0.24))
C.dz(d,C.dA(16777215,0.28,0,D.f1,s,4,0.32,0,0.72))
C.dz(d,C.dA(r,0.006,0,D.fO,r,3,0.42,0.08,0.22))
for(w=0;w<3;++w){v=Date.now()
u=$.jc
$.jc=u+1
u=new C.eQ("design_"+(""+1000*v+"_"+u),D.fi,0.08,0.58+w*0.1,0.04,0.04,"",24,A.a8,A.bt,A.aH,4279310375,A.bp,null,D.f1,16777215,t,2,0,!1,"",0,D.ct,0,"","","","","",!1,0)
v=$.Ln
u.db="__design__:"+(v.length===0?"layer":v)
A.d.c9(d.z,0,u)}d.e=4294967295
d.f=4294965229},
$S:z+1}
C.fUx.prototype={
$1(d){var w=2450411,v=4279548070
C.dz(d,C.dA(3423541034,0.55,0,D.bm,w,0,1,0,0))
C.dz(d,C.dA(4009754623,0.56,0.45,D.ke,w,0,0.56,0.22,0.18))
C.dz(d,C.dA(3439329279,0.44,0.45,D.ke,w,0,0.44,0.28,0.24))
C.dz(d,C.dA(v,0.07,0,D.bm,w,0,0.22,0.34,0.62))
C.dz(d,C.dA(v,1,0,D.bm,w,0,0.07,0,0))
d.e=4280166715
d.f=4279179050},
$S:z+1}
C.fLW.prototype={
$1(d){return d.a===this.a},
$S:z+19}
C.fLX.prototype={
$0(){return A.d.gH($.bH2())},
$S:z+53}
C.fxU.prototype={
$1(d){var w=A.a.i(d)
if(w.length===0)return""
return A.a.a_(w,"\u2022")?w:"\u2022 "+w},
$S:14}
C.fxT.prototype={
$1(d){return C.ics(d,this.a,this.b)},
$S:z+54}
C.fUX.prototype={
$1(d){var w=this,v=w.a,u=w.b,t=B.wn(1.0375,1.01875,1)
return new B.fV(v,u,new C.aUT(B.i1r(A.vU,C.icv(w.c,w.d,v,u),t)))},
$S:447}
C.e3H.prototype={
$1(d){var w=d.a/1e6
this.a.d.sp(0,w)
return w},
$S:8}
C.e3G.prototype={
$2(d,e){var w=null,v=Math.min(e.b,e.d),u=this.b,t=this.a,s=t.d,r=t.a.d?0.45:1
return B.jm(new B.an(A.a0,w,A.b0,A.t,B.a([new B.bN(new B.p(w,w,w,w,w,new B.bY(A.Ff,1.2,A.x,w,0,u.d,w,w),A.n),A.bj,w,w),new B.en(B.b2(w,w,w,new C.bh1(u.a,s,r,s),A.az),w),B.as(new B.k4(s,new C.e3F(t,v,this.c,u),w,w,x.cl),w,w,w)],x.p),w),A.t,w)},
$S:326}
C.e3F.prototype={
$3(d,e,f){var w,v,u,t,s=this,r=null,q=A.e2.aA(0,A.i.D(e/1.4,0,1)),p=A.i.D(e/0.9,0,1),o=A.i.D((e-0.8)/0.9,0,1),n=Math.sin(e*1.6),m=s.b,l=m*0.08,k=x.p,j=B.a([],k),i=s.c
if(i!=null){w=m*0.22
v=m*0.008
u=s.d.e
t=B.C(u,x.bz)
t.push(A.d.gH(u))
u=B.a([new B.ab(0,A.G,u[1].j(0.55),A.J,l)],x.V)
A.d.v(j,B.a([B.q(r,B.hV(B.fR(i,A.A,r,r,A.ck,A.c_,!0,r,!1,r,r),A.aq),A.f,r,r,new B.p(r,r,r,r,u,new B.fZ(A.A,0,6.283185307179586,A.x,t,r,new B.mN(e*0.8)),A.a6),r,w,r,r,new B.R(v,v,v,v),r,r,w),new B.a5(r,m*0.04,r,r)],k))}i=s.d.e
w=s.a
v=A.a.i(w.a.c.b)
u=v.length
if(u===0)v="NGMY"
u=u>12?0.1:0.17
t=m*0.05
j.push(new C.btZ(i,e,B.d(v,r,r,r,r,r,r,B.l(r,r,A.c,r,r,r,r,r,r,r,r,m*u,r,r,A.u,r,1.05,!0,r,m*0.012,r,r,r,B.a([new B.cU(i[1].j(0.6),A.J,t)],x.r),r,r),A.K,r,r),r))
j.push(new B.a5(r,m*0.025,r,r))
u=Math.max(1.5,m*0.004)
j.push(B.d3(B.dN(B.x(B.a([B.q(r,r,A.f,r,r,new B.p(r,r,r,r,r,new B.a8(A.a7,A.aa,A.x,B.a([A.L,i[1],A.L],x.O),r,r),A.n),r,u,r,r,r,r,r,m*0.22),new B.a5(r,m*0.022,r,r),B.d(w.a.c.gaNq(),r,r,r,r,r,r,B.l(r,r,A.c.j(0.92),r,r,r,r,r,r,r,r,t,r,r,A.a8,r,r,!0,r,m*0.003,r,r,r,r,r,r),A.K,r,r)],k),A.l,r,A.e,A.P,0,A.p),new B.o(0,(1-o)*m*0.03)),o))
return B.d3(B.e1(A.A,new B.D(new B.R(l,0,l,0),B.x(j,A.l,r,A.e,A.P,0,A.p),r),(0.6+0.4*q)*(1+n*0.012),r,r),p)},
$S:100}
C.f8I.prototype={
$1(d){var w=this.b
return new B.a8(A.aA,A.aF,A.x,this.a.c,B.a([0,A.i.D(w-0.1,0,1),A.i.D(w,0,1),A.i.D(w+0.1,0,1),1],x.x),null).aK(0,d)},
$S:71}
C.cfj.prototype={
$4$child$label$onTap$selected(d,e,f,g){var w,v=null,u=B.m(14),t=g?A.bL:A.bA
t=B.L(t,A.r,g?2.5:1)
w=g?B.a([new B.ab(0,A.G,A.ia.j(0.4),A.J,14)],x.V):v
w=B.cT(v,B.bw(B.m(12),d,A.aq),v,v,A.b_,new B.p(v,v,t,u,w,v,A.n),A.eG,v,72,v,v,v,v,v,v)
return B.az(v,new B.a5(112,v,B.x(B.a([w,A.fD,B.d(e,v,1,A.a2,v,v,v,B.l(v,v,g?A.bL:A.ab,v,v,v,v,v,v,v,v,11,v,v,A.U,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.l,v,A.e,A.j,0,A.p),v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,f,v,v,v,v,v,v,!1,A.a4)},
$S:1712}
C.cfk.prototype={
$0(){var w=this.a
return w.d.$1(w.c.Gf(""))},
$S:0}
C.cfl.prototype={
$1(d){var w=this.a,v=w.c,u=d.a
return this.b.$4$child$label$onTap$selected(new B.du(!0,new C.Op(v.Gf(u),!0,!1,null),null),d.b,new C.cfm(w,this.c,d),v.a===u)},
$S:z+55}
C.cfm.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(C.hG1(u.b,t.c.Gf(u.c.a)),$async$$0)
case 2:s=e
if(s!=null)t.d.$1(s)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.h0K.prototype={
$1(d){return new C.a_H(this.a,null)},
$S:z+56}
C.dig.prototype={
$0(){var w=this.a
w.d=w.gwk().bf5("data:"+this.b+";base64,"+A.cT.gcu().aN(this.c));++w.r},
$S:0}
C.dil.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.dim.prototype={
$0(){var w=this.a
return w.m(new C.dik(w))},
$S:0}
C.dik.prototype={
$0(){return this.a.r++},
$S:0}
C.din.prototype={
$1(d){var w=this.a
return w.m(new C.dij(w,d))},
$S:2}
C.dij.prototype={
$0(){var w=this.a
return w.d=w.gwk().aG4(this.b)},
$S:0}
C.dio.prototype={
$0(){var w=this.a
return w.m(new C.dii(w))},
$S:0}
C.dii.prototype={
$0(){var w=this.a
return w.d=w.gwk().bf5("")},
$S:0}
C.dip.prototype={
$1(d){var w=this.a
return w.m(new C.dih(w,d))},
$S:2}
C.dih.prototype={
$0(){var w=this.a
return w.d=w.gwk().bfb(this.b)},
$S:0}
C.diq.prototype={
$0(){var w=this.a
w=w.gwk().bfb(w.gazE().a.a)
B.a6(this.b,!1).O(w)
return null},
$S:0}
C.h0J.prototype={
$1(d){var w={}
w.a=this.a
return new B.dY(new C.h0I(w),null)},
$S:20}
C.h0I.prototype={
$2(d,e){var w=null,v=this.a
return B.q(w,B.bm(!0,new B.cP(new B.aY(0,1/0,0,B.aF(d,A.c1,x.w).w.a.b*0.85),B.ce(B.x(B.a([B.as(B.q(w,w,A.f,w,w,new B.p(A.aT,w,w,B.m(9),w,w,A.n),w,4,w,w,w,w,w,40),w,w,w),A.aB,D.fX6,A.aw,D.fXm,A.aB,new C.b1o(v.a,new C.h0H(v,e,d),!0,w)],x.p),A.E,w,A.e,A.P,0,A.p),A.t,w,A.y,w,w,w,w,A.ah),w),!0,!1,A.ag,!0,!1),A.f,w,w,D.b8i,w,w,w,w,A.O9,w,w,w)},
$S:163}
C.h0H.prototype={
$1(d){this.b.$1(new C.h0G(this.a,d))
B.a6(this.c,!1).O(d)},
$S:z+57}
C.h0G.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.h35.prototype={
$1(d){return D.hw0},
$S:z+58}
C.dp4.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.dp5.prototype={
$0(){var w=this.a.c
w.toString
B.a6(w,!1).O(this.b)
return null},
$S:0}
C.dp6.prototype={
$0(){var w=this.a,v=A.a.i(w.d.a.a)
if(v.length!==0){w=w.c
w.toString
B.a6(w,!1).O(v)}},
$S:0}
C.fRx.prototype={
$1(d){var w=this.b
return new B.a8(A.aA,A.aF,A.x,B.a([A.L,B.ar(this.a,A.c,0.75).j(0.9),A.L],x.O),B.a([A.i.D(w-0.12,0,1),A.i.D(w,0,1),A.i.D(w+0.12,0,1)],x.x),null).aK(0,d)},
$S:71}
C.dhY.prototype={
$3(d,e,f){var w,v=this,u=new B.aG($.S().r,A.ai,null,null,B.a([],x.v)),t=d.a,s=v.b,r=e*s,q=d.b,p=f*s,o=q+p*0.12
u.E(new B.aZ(t+r*1.2,o))
u.E(new B.c6(t+r*0.25,o,t+r*0.18,q+p*0.5))
w=t+r*0.12
u.E(new B.c6(w,q+p,w,q+p*1.2))
u.E(new B.DS(B.bZ(new B.o(t+r*0.42,q+p*0.42),s*0.14),0,5.026548245743669))
s=v.c
s.af(u,v.d)
s.af(u,v.e)
p=B.K()
p.r=B.ar(v.a.d,A.c,0.6).gp(0)
s.N(new B.o(w,o),2.2,p)},
$S:455}
C.fRB.prototype={
$2(d,e){return A.i.aS(d.c,e.c)},
$S:z+59}
C.fJW.prototype={
$1(d){return d.w==="marriage_agreement"},
$S:z+2}
C.fJX.prototype={
$1(d){var w=null,v=this.a
return B.bm(!0,new B.D(E.yP,B.x(B.a([B.as(B.q(w,w,A.f,w,w,new B.p(A.aT,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bz,D.fEY,A.T,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aO,B.dh(D.HX,B.d('Endelea na "'+A.d.gH(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fJU(d),B.bp(A.c4,w,w,w,A.c,w,A.cq,w,w,w,w,w)),A.W,B.es(A.oH,D.VX,new C.fJV(d),B.di(w,w,w,w,w,w,w,w,w,A.ab,w,w,A.cq,w,w,R.xN,w,w,w,w))],x.p),A.al,w,A.e,A.P,0,A.p),w),!0,!1,A.ag,!0,!0)},
$S:25}
C.fJU.prototype={
$0(){B.a6(this.a,!1).O("continue")
return null},
$S:0}
C.fJV.prototype={
$0(){B.a6(this.a,!1).O("new")
return null},
$S:0}
C.ckW.prototype={
$1(d){return d.hQ()},
$S:z+60}
C.ckX.prototype={
$1(d){return d.aj()},
$S:z+61}
C.ckV.prototype={
$1(b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=null,b2=B.a2(b5,x.N,x.z),b3=B.aJ(b2.h(0,"fontWeight")),b4=b3==null?b1:A.i.M(b3)
if(b4==null)b4=A.a8.gdR(0)
b3=B.aJ(b2.h(0,"fontStyle"))
w=b3==null?b1:A.i.M(b3)
if(w==null)w=0
b3=B.aJ(b2.h(0,"align"))
v=b3==null?b1:A.i.M(b3)
if(v==null)v=0
b3=b2.h(0,"id")
b3=J.k(b3==null?"":b3)
u=C.i80(b2.h(0,"type"))
t=B.aJ(b2.h(0,"x"))
if(t==null)t=b1
if(t==null)t=0.08
s=B.aJ(b2.h(0,"y"))
if(s==null)s=b1
if(s==null)s=0.12
r=B.aJ(b2.h(0,"w"))
if(r==null)r=b1
if(r==null)r=0.84
q=B.aJ(b2.h(0,"h"))
if(q==null)q=b1
if(q==null)q=0.2
p=b2.h(0,"text")
p=J.k(p==null?"":p)
o=B.aJ(b2.h(0,"fontSize"))
if(o==null)o=b1
if(o==null)o=24
n=A.aDu[A.o.D(b4,0,8)]
m=D.d4v[A.o.D(w,0,1)]
l=C.ibR(b2.h(0,"decoration"))
k=B.aJ(b2.h(0,"color"))
k=k==null?b1:A.i.M(k)
if(k==null)k=4279310375
j=A.azQ[A.o.D(v,0,5)]
i=b2.h(0,"imageRef")
i=i==null?b1:J.k(i)
h=C.ieF(b2.h(0,"shape"))
g=B.aJ(b2.h(0,"fillColor"))
g=g==null?b1:A.i.M(g)
if(g==null)g=4280640491
f=B.aJ(b2.h(0,"strokeColor"))
f=f==null?b1:A.i.M(f)
if(f==null)f=4280172719
e=B.aJ(b2.h(0,"strokeWidth"))
if(e==null)e=b1
if(e==null)e=2
d=B.aJ(b2.h(0,"rotation"))
if(d==null)d=b1
if(d==null)d=0
a0=J.z(b2.h(0,"bulletList"),!0)
a1=b2.h(0,"fileName")
a1=J.k(a1==null?"":a1)
a2=B.aJ(b2.h(0,"pdfPage"))
a2=a2==null?b1:A.i.M(a2)
if(a2==null)a2=0
a3=C.hAT(b2.h(0,"textTransition"))
a4=B.aJ(b2.h(0,"textAnimDelayMs"))
a4=a4==null?b1:A.i.M(a4)
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
b0=J.z(b2.h(0,"rich"),!0)
b2=B.aJ(b2.h(0,"textBg"))
b2=b2==null?b1:A.i.M(b2)
return C.er(j,a0,k,l,a1,g,o,m,n,a7,q,b3,i,a6,a5,a2,b0,a8,d,h,f,e,p,a4,b2==null?0:b2,a9,a3,u,r,t,s)},
$S:z+62}
C.ckL.prototype={
$1(d){return d.hQ()},
$S:z+63}
C.ckM.prototype={
$1(d){return d.aj()},
$S:z+64}
C.ckI.prototype={
$1(d){return B.w(d)},
$S:17}
C.ckJ.prototype={
$1(d){return B.w(d)},
$S:17}
C.ckK.prototype={
$1(d){return C.hrq(B.a2(d,x.N,x.z))},
$S:z+65}
C.clc.prototype={
$1(d){return d.a===this.a},
$S:z+66}
C.cld.prototype={
$0(){return A.d.gH(D.a5w)},
$S:z+67}
C.cl7.prototype={
$1(d){var w,v,u=d.a
if(A.a.i(u).length===0)return
w=this.a
v=w.h(0,u)
if(v==null||!v.f.ca(d.f))w.n(0,u,d.hQ())},
$S:z+7}
C.cl6.prototype={
$2(d,e){return e.f.aS(0,d.f)},
$S:z+20}
C.cl2.prototype={
$1(d){return new B.N(d,new C.cl3(),B.U(d).k("N<1,V>")).f1(0,new C.cl4())},
$S:z+70}
C.cl3.prototype={
$1(d){return d.f},
$S:z+71}
C.cl4.prototype={
$2(d,e){return d.ca(e)?d:e},
$S:682}
C.cl5.prototype={
$1(d){if(d==null||A.a.i(d).length===0)return B.a([],x.D)
return C.hYb(d)},
$S:z+109}
C.cl8.prototype={
$1(d){return!this.a.q(0,d.a)},
$S:z+2}
C.cl9.prototype={
$2(d,e){return e.f.aS(0,d.f)},
$S:z+20}
C.cla.prototype={
$1(d){return d.aj()},
$S:z+21}
C.fSc.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this
for(w=i.a.z,v=w.length,u=i.c,t=i.d,s=i.b,r=0;r<w.length;w.length===v||(0,B.J)(w),++r){q=w[r]
p=q.a
if(s.al(0,p))continue
for(o=u.z,n=o.length,m=q.b,l=0;l<o.length;o.length===n||(0,B.J)(o),++l){k=o[l]
j=k.a
if(t.q(0,j)||k.b!==m)continue
if(d.$2(k,q)){s.n(0,p,k)
t.J(0,j)
break}}}},
$S:z+74}
C.fS8.prototype={
$2(d,e){var w=d.fx
return w.length!==0&&w===e.fx},
$S:z+8}
C.fS9.prototype={
$2(d,e){var w=d.at
return(w==null?"":w).length!==0&&w==e.at},
$S:z+8}
C.fSa.prototype={
$2(d,e){var w
if(d.b===D.d_){w=A.a.i(d.r)
w=w.length!==0&&w===A.a.i(e.r)}else w=!1
return w},
$S:z+8}
C.fSb.prototype={
$2(d,e){return d.b===D.fi&&d.ax===e.ax&&d.fx.length===0&&e.fx.length===0},
$S:z+8}
C.ckR.prototype={
$2(b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=null,a9=b7.b,b0=a9/960,b1=this.a,b2=b1.c,b3=b1.d,b4=C.inL(b2,b3),b5=B.a4(b4).k("b7<2>")
b5=B.cF(new B.b7(b4,b5),new C.ckQ(),b5.k("M.E"),x.N)
w=B.d2(b5,B.a4(b5).k("M.E"))
b1=b1.e
v=A.qu.aA(0,A.i.D(b1,0,1))
u=new C.ckS()
b5=B.ar(u.$2(b2,!1),u.$2(b3,!1),v)
b5.toString
t=B.ar(u.$2(b2,!0),u.$2(b3,!0),v)
t.toString
s=new C.ckT(a9,b7.d)
r=new C.ckU(b0)
q=x.p
p=B.a([],q)
for(b2=b2.z,o=b2.length,n=b1/0.55,m=0;m<b2.length;b2.length===o||(0,B.J)(b2),++m){l=b2[m]
if(w.q(0,l.a))continue
k=A.jD.aA(0,A.i.D(n,0,1))
p.push(s.$5(l.c,l.d,l.e,l.f,new B.kH(A.i.D(1-k,0,1),B.dN(B.e1(A.A,r.$1(l),1-k*0.06,a8,a8),new B.o(-k*30*b0,0)),a8)))}for(b2=b3.z,b3=b2.length,o=1-v,j=0,m=0;m<b2.length;b2.length===b3||(0,B.J)(b2),++m){i=b2[m]
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
if(a2===D.fi){a4=i.hQ()
a4.ay=B.ar(B.b0(l.ay),B.b0(i.ay),v).l()
a4.ch=B.ar(B.b0(l.ch),B.b0(i.ch),v).l()
a4.cx=0
a5=r.$1(a4)}else a5=a2===D.lS&&l.at==i.at?r.$1(i):new B.an(A.a0,a8,A.b0,A.t,B.a([new B.kH(A.i.D(o,0,1),r.$1(l),a8),new B.kH(A.i.D(v,0,1),r.$1(i),a8)],q),a8)
a2=a3===0?a5:new B.iR(B.wR(a3),a8,A.A,!0,a8,a5,a8)
p.push(s.$5(n+(h-n)*v,g+(f-g)*v,e+(d-e)*v,a0+(a1-a0)*v,a2))}else{a6=A.i.D((b1-(0.35+j*0.07))/0.5,0,1);++j
a7=i.dy
if(a7===D.ct)a7=D.n9
p.push(s.$5(i.c,i.d,i.e,i.f,C.hDp(a7,a6,r.$1(i))))}}return new B.bN(new B.p(a8,a8,a8,a8,a8,new B.a8(A.a7,A.aa,A.x,B.a([b5,t],x.O),a8,a8),A.n),A.bj,new B.an(A.a0,a8,A.ac,A.t,p,a8),a8)},
$S:456}
C.ckQ.prototype={
$1(d){return d.a},
$S:z+22}
C.ckS.prototype={
$2(d,e){var w
if(e){w=d.f
if(w==null)w=d.e}else w=d.e
return B.b0(w)},
$S:z+77}
C.ckT.prototype={
$5(d,e,f,g,h){var w=this.a,v=this.b
return B.ap(null,h,g*v,null,d*w,null,e*v,f*w)},
$S:1716}
C.ckU.prototype={
$1(d){var w=null,v=d.fy,u=A.a.gX(d.a)
return new C.a93(v,C.b3w(!1,w,!1,d,w,!1,w,w,w,this.a,!1,!1),!0,u,w)},
$S:z+23}
C.dQB.prototype={
$2(d,e){var w=Date.now()/1000*2*3.141592653589793,v=Math.sin(w/18)
return B.e1(new B.da(Math.sin(w/23)*0.6,Math.cos(w/29)*0.5),e,1.035+v*0.03,null,null)},
$S:45}
C.cl_.prototype={
$1(d){return d.a===this.a.a},
$S:z+11}
C.cl0.prototype={
$1(d){return d.a===this.a.a},
$S:z+19}
C.fV3.prototype={
$1(d){var w,v=document.createElement("iframe")
v.src=this.a
w=v.style
w.border="none"
w=v.style
w.width="100%"
w=v.style
w.height="100%"
return v},
$S:290}
C.fUa.prototype={
$1(d){return new C.aeM(this.a,this.b,null)},
$S:z+79}
C.eCz.prototype={
$0(){return this.a.QG(this.b,C.irH(),"Tap Save to Files on the next screen.","Download did not start \u2014 try Share.")},
$S:0}
C.eCA.prototype={
$0(){var w=this.a,v=w.d?"Choose Print from the share menu for one full page.":"Pick Save to Files or send from the share menu."
return w.QG(this.b,C.irJ(),v,"Share unavailable \u2014 try Safari.")},
$S:0}
C.eCB.prototype={
$0(){var w=this.a,v=w.d?"PDF opened \u2014 tap Share \u2197 then Print.":"PDF opened \u2014 use Share \u2197 at the bottom of Safari."
return w.QG(this.b,C.irI(),v,"Could not open Safari \u2014 try Share.")},
$S:0}
C.eCC.prototype={
$0(){A2.hD9()
B.a6(this.a,!1).O(null)},
$S:0}
C.ckP.prototype={
$1(d){var w=null,v=this.a
return v==null?d:B.l(w,w,w,w,w,w,w,w,w,w,w,d.r,d.x,w,d.w,v,d.as,!0,w,d.y,w,w,w,w,w,w)},
$S:1717}
C.ckO.prototype={
$2(d,e){var w,v=this,u=null,t=B.dP(d,A.o2),s=t==null?u:t.b,r=s==null?2:s,q=e.b,p=isFinite(q)?q:0,o=p<=0?u:A.i.V(A.i.D(p*Math.max(B.ji(r),5),96,1500))
t=v.b
w=v.c||v.d?A.c_:A.dE
return B.fR(t,A.A,o,new C.ckN(),A.ck,w,!0,u,!1,new B.bA("img_"+v.a.c.a+"_"+t.length,x.W),u)},
$S:1718}
C.ckN.prototype={
$3(d,e,f){return D.afi},
$S:241}
C.fS7.prototype={
$2(d,e){var w,v,u,t=null,s=B.m(6),r=this.a
if(r.f!=null){w=B.b0(r.e)
v=r.f
v.toString
v=new B.a8(A.aA,A.aF,A.x,B.a([w,B.b0(v)],x.O),t,t)
w=v}else w=t
v=r.f==null?B.b0(r.e):t
r=r.z
r=B.cW(r,0,B.dB(6,"count",x.S),B.U(r).c)
u=r.$ti.k("N<ak.E,cK>")
r=B.C(new B.N(r,new C.fS6(e.b,e.d),u),u.k("ak.E"))
return B.bw(s,new B.bN(new B.p(v,t,t,t,t,w,A.n),A.bj,new B.an(A.a0,t,A.ac,A.t,r,t),t),A.aq)},
$S:1719}
C.fS6.prototype={
$1(d){var w=null,v=d.c,u=this.a,t=d.d,s=this.b,r=d.e,q=d.f
return B.ap(w,C.b3w(!1,w,!1,d,w,!1,w,w,w,u/960,!1,!0),q*s,w,v*u,w,t*s,r*u)},
$S:z+24}
C.fAE.prototype={
$3(d,e,f){var w,v,u,t,s,r=this,q=null,p=r.a
p.a=B.cy(r.b,new C.fAC(d))
w=B.aF(d,A.c1,x.w).w
v=B.m(22)
u=B.L(A.bA,A.r,1)
t=B.a([new B.ab(0,A.G,A.w.j(0.45),A.h7,28)],x.V)
s=x.p
return new B.d1(e,!1,B.as(B.aH(!1,A.a3,!0,q,B.q(q,B.x(B.a([B.A(B.a([B.E(B.x(B.a([B.d(r.c,q,q,q,q,q,q,A.jP,q,q,q),A.aw,B.d("Applied \u2014 tap Done or wait 1.5 seconds",q,q,q,q,q,q,B.l(q,q,A.c.j(0.45),q,q,q,q,q,q,q,q,11,q,q,A.a8,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),A.E,q,A.e,A.j,0,A.p),1),B.bO(!1,A.AX,q,q,!0,q,q,q,new C.fAD(p,d),q,B.fv(q,q,A.bn,q,q,q,q,q,q,q,q,A.c,q,q,q,q,q,A.Cl,q,new B.b9(B.m(12),A.a1),q,q,q,q,q,q))],s),A.l,q,A.e,A.j,0,q,q),A.aB,r.d],s),A.l,q,A.e,A.P,0,A.p),A.f,q,new B.aY(0,w.a.a*0.94,0,1/0),new B.p(A.as,q,u,v,t,q,A.n),q,q,q,A.h6,A.GV,q,q,q),A.f,A.L,0,q,q,q,q,q,A.aj),q,q,q),q)},
$C:"$3",
$R:3,
$S:271}
C.fAC.prototype={
$0(){var w=this.a
if(w.e!=null&&B.a6(w,!0).pZ())B.a6(w,!0).eA()},
$S:0}
C.fAD.prototype={
$0(){var w=this.a.a
if(w!=null)w.a1(0)
B.a6(this.b,!0).eA()},
$S:0}
C.fhi.prototype={
$2(d,e){var w,v,u=this,t=null,s=u.a,r=s.d
r===$&&B.c()
r=r.x
r===$&&B.c()
switch(s.a.c.a){case 0:return u.b
case 1:case 13:return new B.an(A.a0,t,A.b0,A.t,B.a([u.c,B.d3(u.b,r)],x.p),t)
case 2:case 17:return new B.an(A.a0,t,A.b0,A.t,B.a([u.c,B.dN(u.b,new B.o((1-r)*220,0))],x.p),t)
case 3:return new B.an(A.a0,t,A.b0,A.t,B.a([u.c,B.dN(u.b,new B.o(-(1-r)*220,0))],x.p),t)
case 4:case 21:return new B.an(A.a0,t,A.b0,A.t,B.a([u.c,B.dN(u.b,new B.o(0,(1-r)*140))],x.p),t)
case 5:return new B.an(A.a0,t,A.b0,A.t,B.a([u.c,B.dN(u.b,new B.o(0,-(1-r)*140))],x.p),t)
case 6:return new B.an(A.a0,t,A.b0,A.t,B.a([u.c,B.e1(A.A,B.d3(u.b,r),0.6+r*0.4,t,t)],x.p),t)
case 7:return new B.an(A.a0,t,A.b0,A.t,B.a([u.c,B.e1(A.A,B.d3(u.b,r),1.3-r*0.3,t,t)],x.p),t)
case 8:s=B.dr()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.001
s.fL(r*3.14159)
return B.fz(A.A,r<0.5?u.c:u.b,t,s,!0)
case 9:s=B.dr()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.001
s.kn(r*3.14159)
return B.fz(A.A,r<0.5?u.c:u.b,t,s,!0)
case 10:s=B.dr()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.002
s.fL(r*1.2)
s.kn(r*0.5)
return B.fz(A.A,B.d3(u.b,0.4+r*0.6),t,s,!0)
case 11:s=B.dr()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.002
s.fL(-r*1.4)
return B.fz(A.aa,B.d3(u.b,r),t,s,!0)
case 12:return new B.an(A.a0,t,A.b0,A.t,B.a([u.c,B.d3(B.e1(A.A,u.b,1.02-r*0.02,t,t),r)],x.p),t)
case 14:return new B.an(A.a0,t,A.b0,A.t,B.a([u.c,B.jm(u.b,A.t,new C.aLv(r,t))],x.p),t)
case 15:return new B.an(A.a0,t,A.b0,A.t,B.a([u.c,B.jm(u.b,A.t,new C.aLv(1-r,t))],x.p),t)
case 16:v=A1.XQ.aA(0,r)
return new B.an(A.a0,t,A.b0,A.t,B.a([u.c,B.e1(A.A,B.d3(u.b,r),0.5+v*0.5,t,t)],x.p),t)
case 18:s=r<0.15
if(s)r=1
return new B.an(A.a0,t,A.b0,A.t,B.a([u.c,B.d3(B.e9(u.b,A.c.j(s?0.9:0),!0),r)],x.p),t)
case 19:s=B.dr()
s.n2(r*6.28)
s.k5(r,r,r,1)
return B.fz(A.A,u.b,t,s,!0)
case 20:return B.eG(A.A,(r-0.5)*0.35,new B.an(A.a0,t,A.b0,A.t,B.a([u.c,B.d3(u.b,r)],x.p),t),t)}},
$S:69}
C.e1q.prototype={
$0(){var w=this.a
if(w.c!=null){w=w.d
w===$&&B.c()
w.cr(0)}},
$S:12}
C.e1p.prototype={
$0(){var w=this.a
if(w.c!=null){w=w.d
w===$&&B.c()
w.cr(0)}},
$S:12}
C.e1o.prototype={
$2(d,e){var w,v=this.a
e.toString
w=v.d
w===$&&B.c()
v=v.a.c.dy
w=w.x
w===$&&B.c()
return C.hDp(v,w,e)},
$S:69}
C.ckH.prototype={
$2(d,e){var w,v,u,t,s,r=null,q={}
q.a=0
w=this.a
v=w.c
if(v.f!=null){u=B.b0(v.e)
t=v.f
t.toString
t=new B.a8(A.a7,A.aa,A.x,B.a([u,B.b0(t)],x.O),r,r)
u=t}else u=r
t=v.f==null?B.b0(v.e):r
v=v.z
s=B.U(v).k("N<1,cK>")
q=B.C(new B.N(v,new C.ckG(q,w,e.b,e.d),s),s.k("ak.E"))
return new B.bN(new B.p(t,r,r,r,r,u,A.n),A.bj,new B.an(A.a0,r,A.ac,A.f,q,r),r)},
$S:456}
C.ckG.prototype={
$1(d){var w,v=this,u=null,t=d.dy!==D.ct?v.a.a++:0,s=d.c,r=v.c,q=d.d,p=v.d,o=d.e,n=d.f,m=d.fy,l=v.b,k=l.d
l=k||l.e
w=A.a.gX(d.a)
return B.ap(u,new C.a93(m,new C.Wo(d,C.b3w(!1,u,!1,d,u,!1,u,u,u,r/960,!1,!1),k,t,u),l,w,u),n*p,u,s*r,u,q*p,o*r)},
$S:z+24}
C.dfa.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.df9(w))},
$S:12}
C.df9.prototype={
$0(){return this.a.d++},
$S:0}
C.epW.prototype={
$2(d,e){var w,v=null,u=A.o.aq(this.b.e.a,1000),t=A.o.F(Date.now(),u)/u*3.141592653589793*2+this.c,s=this.a
if(D.aT0.q(0,A.d.gH(s.a.c.split("@")))){s=s.a
w=s.c
s=s.f
e.toString
return C.ins(w,t,s,e)}switch(s.a.c){case"float3d":s=B.dr()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.0016
w=Math.sin(t)
s.ej(0,w*7,0,1)
s.fL(Math.sin(t)*0.32)
s.kn(Math.cos(t)*0.12)
w=1+Math.sin(t*2)*0.025
s.k5(w,w,w,1)
return B.fz(A.A,e,v,s,!0)
case"drift":s=Math.sin(t)
w=Math.cos(t*0.8)
return B.dN(B.e1(A.A,e,1+Math.sin(t*0.5)*0.05,v,v),new B.o(s*14,w*10))
default:s=Math.sin(t)
return B.d3(B.e1(A.A,e,1+Math.sin(t)*0.04,v,v),0.82+s*0.18)}},
$S:69}
C.f6c.prototype={
$1(d){var w
$.S()
w=B.K()
w.b=A.a9
w.c=d
w.e=A.dT
return w},
$S:1720}
C.fPF.prototype={
$2(d,e){var w,v,u,t,s=this,r=null,q=e.b,p=e.d,o=Math.min(q,p)
if(!s.a)w=s.b.length===0&&s.c.length!==0
else w=!0
v=w?new B.av(o,o):new B.av(q,p)
u=s.b
if(u.length===0)u="rounded"
q=s.c
p=q.length===0
if(p)t=0
else{w=v.gdA()
t=w*(q==="framed"?0.07:0.05)}w=B.a([],x.p)
if(q==="framed"||q==="gold")w.push(B.b2(r,r,r,new C.btS(u,t,r),A.az))
w.push(B.nW(s.d,A.aq,new C.bhy(u,t,r)))
if(!p)w.push(B.b2(r,r,r,new C.bsO(u,q,t,r),A.az))
return B.as(new B.a5(v.a,v.b,new B.an(A.a0,r,A.b0,A.t,w,r),r),r,r,r)},
$S:215}
C.fDL.prototype={
$1(d){var w=d.b[1]
return w==null?"":w},
$S:288}
C.eIO.prototype={
$0(){var w=0,v=B.j(x.aP),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(T.DC(t.a.a.c),$async$$0)
case 3:s=e
r=J.a7(s)
if(r.gau(s)){u=null
w=1
break}u=r.dP(s,new C.eIM(),new C.eIN(s))
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1721}
C.eIM.prototype={
$1(d){return d.at==="published"&&d.Q.length!==0},
$S:197}
C.eIN.prototype={
$0(){return J.fs(this.a)},
$S:1723}
C.eFb.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.eFc.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.eFd.prototype={
$0(){var w=this.a
w.d=this.b
w.x=!1},
$S:0}
C.eGM.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eGA.prototype={
$1(d){return d.w!=="hati_kiapo_uongozi"},
$S:z+2}
C.eGB.prototype={
$1(d){return d.hQ()},
$S:z+82}
C.eEz.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.eHU.prototype={
$0(){this.a.uf()},
$S:0}
C.eIK.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.e=u
w.f=A.o.D(v.b,0,u.r.length-1)
w.r=v.c
w.oF()
w.KQ()},
$S:0}
C.eGK.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.e=u
w.f=A.o.D(v.b,0,u.r.length-1)
w.r=v.c
w.oF()
w.KQ()},
$S:0}
C.eIx.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+2}
C.eIy.prototype={
$1(d){return d.b===D.d_},
$S:z+4}
C.eIz.prototype={
$1(d){return d.a},
$S:z+22}
C.eIA.prototype={
$0(){var w=this.a.r
return new B.au(new B.ba(w,A.b5,A.aP),$.ax())},
$S:248}
C.eIB.prototype={
$0(){return B.ka(!0,null,!0,!0,null,null,!1)},
$S:686}
C.eDY.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+2}
C.eIL.prototype={
$0(){},
$S:0}
C.eFT.prototype={
$0(){var w=this.a
w.e=this.b.hQ()
w.f=0
w.r=null
w.db=!1
A.d.a8(w.ax)
A.d.a8(w.ay)
w.yf()
w.KQ()},
$S:0}
C.eDW.prototype={
$0(){var w=this.a
w.e=null
w.db=!1
w.w=w.r=null
w.yf()},
$S:0}
C.eDX.prototype={
$0(){var w=this.a
w.w=w.r=w.e=null
w.yf()},
$S:0}
C.eGf.prototype={
$1(d){return d.a===this.a.a.a},
$S:z+2}
C.eGg.prototype={
$0(){var w=this.a
w.e=this.b
w.f=0
w.r=null
w.db=!this.c
A.d.a8(w.ax)
A.d.a8(w.ay)
w.yf()
w.KQ()
w.z="Home"},
$S:0}
C.eGh.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eFS.prototype={
$1(d){var w=null
return B.eg(B.a([B.bO(!1,A.VW,w,w,!0,w,w,w,new C.eFR(d),w,w)],x.p),w,w,w,D.fYY,w,w,w,w,D.fFp,w)},
$S:18}
C.eFR.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.eFP.prototype={
$1(d){var w=null
return B.eg(B.a([B.bO(!1,A.VW,w,w,!0,w,w,w,new C.eFO(d),w,w)],x.p),w,w,w,D.fJA,w,w,w,w,D.fHg,w)},
$S:18}
C.eFO.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.eFQ.prototype={
$0(){},
$S:0}
C.eF7.prototype={
$1(d){return this.a.b3c(C.bF3(d))},
$S:z+7}
C.eF8.prototype={
$1(d){return this.a.agv(C.bF3(d))},
$S:z+7}
C.eFZ.prototype={
$1(d){var w=null,v=x.p,u=B.a([B.as(B.q(w,w,A.f,w,w,new B.p(A.aT,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bz,D.fZ1,A.aw,B.d("Chagua aina ya hati",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.bz,new C.QF(A.wE,D.aBd,"HATI YA KUHOWA","Hati ya mahari",new C.eFU(d),w),A.W,new C.QF(A.hj,D.di6,"HATI YA KUHOWESHA","Hati ya kupokea",new C.eFV(d),w),A.W,new C.QF(A.hO,D.d2u,"HATI YA NDOA","Makubaliano \xb7 pete \xb7 picha za wanandoa",new C.eFW(d),w),A.W,new C.QF(A.ii,D.d0w,"MALIPO YA AWAMU YA MAHARI","Makubaliano ya mahari iliyosalia",new C.eFX(d),w)],v)
if(this.a.gZ0())A.d.v(u,B.a([A.W,new C.QF(A.j8,D.cMl,"HATI YA KIAPO CHA UONGOZI","Kiapo cha Rais \xb7 Civic Registry",new C.eFY(d),w)],v))
return B.bm(!0,B.ce(B.x(u,A.al,w,A.e,A.P,0,A.p),A.t,w,A.y,w,E.yP,w,w,A.ah),!0,!1,A.ag,!0,!0)},
$S:25}
C.eFU.prototype={
$0(){B.a6(this.a,!1).O("hati_kuhowa")
return null},
$S:0}
C.eFV.prototype={
$0(){B.a6(this.a,!1).O("hati_kuhoweya")
return null},
$S:0}
C.eFW.prototype={
$0(){B.a6(this.a,!1).O("marriage_agreement")
return null},
$S:0}
C.eFX.prototype={
$0(){B.a6(this.a,!1).O("hati_malipo_awamu")
return null},
$S:0}
C.eFY.prototype={
$0(){B.a6(this.a,!1).O("hati_kiapo_uongozi")
return null},
$S:0}
C.eG_.prototype={
$0(){var w=this.a
w.e=this.b.hQ()
w.f=0
w.r=null
w.db=!0
A.d.a8(w.ax)
A.d.a8(w.ay)
w.yf()},
$S:0}
C.eE_.prototype={
$1(d){return d.z.length===0},
$S:z+6}
C.eE0.prototype={
$0(){var w,v,u=this,t=u.c,s=u.d,r=t.r,q=s.r
if(u.b){A.d.a8(r)
A.d.v(r,q)
w=A.a.i(t.b).toLowerCase()
if(w.length===0||A.a.a_(w,"untitled"))t.b=s.b
r=u.a
r.f=0}else{v=u.a
A.d.nw(r,v.f+1,q);++v.f
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
C.eGa.prototype={
$1(d){return d.b===D.lS},
$S:z+4}
C.eGb.prototype={
$1(d){var w={},v=this.b
w.a=A.d.gH(v).go
w.b=A.d.gH(v).id
return new B.dY(new C.eG8(w,this.a,v),null)},
$S:20}
C.eG8.prototype={
$2(a2,a3){var w,v,u,t,s,r,q=null,p=this.a,o=this.b,n=this.c,m=new C.eG9(p,o,a3,n),l=B.P(a2).ax.a===A.H,k=l?A.c:A.a_,j=l?A.aR:A.an,i=l?A.br:A.cd,h=l?A.a_:A.c,g=B.m(28),f=B.L(l?A.bA:A.bl,A.r,1),e=x.p,d=B.A(B.a([B.E(B.x(B.a([B.d("Logo and pictures",q,q,q,q,q,q,B.l(q,q,k,q,q,q,q,q,q,q,q,20,q,q,A.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),A.bG,B.d("Tap a shape or a ring to change it.",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,12.5,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],e),A.E,q,A.e,A.j,0,A.p),1),B.aI(q,q,q,q,B.X(A.cB,j,q,q,q,q),q,q,q,new C.eG4(a2),q,q,q,q,q,q)],e),A.l,q,A.e,A.j,0,q,q),a0=B.d("SHAPE",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q),a1=B.a([],e)
for(w=0;w<7;++w){v={}
u=D.Dp[w]
v.a=null
t=v.a=u.a
a1.push(new C.bk6(t,u.b,p.a===t,i,k,new C.eG5(v,m),q))}a1=B.bW(A.bH,a1,A.bs,q,10,10)
v=B.d("RING",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q)
u=B.a([],e)
for(w=0;w<11;++w){s={}
r=D.Dj[w]
s.a=null
t=s.a=r.a
u.push(new C.bk5(t,r.b,p.b===t,k,j,new C.eG6(s,m),q))}return B.bm(!0,B.q(q,B.ce(B.x(B.a([d,A.aO,a0,A.W,a1,A.bz,v,A.W,B.bW(A.bH,u,A.bs,q,12,12),A.bz,new B.a5(1/0,48,B.es(D.c3E,D.h0q,new C.eG7(o,n),B.di(q,q,q,q,q,q,q,q,q,A.aE,q,q,q,q,new B.b9(B.m(16),A.a1),D.b5P,q,q,q,q)),q)],e),A.E,q,A.e,A.P,0,A.p),A.t,q,A.y,q,q,q,q,A.ah),A.f,q,q,new B.p(h,q,f,g,q,q,A.n),q,q,q,A.ux,D.bEO,q,q,q),!0,!1,A.ag,!0,!0)},
$S:88}
C.eG9.prototype={
$2$f$r(d,e){var w=this
w.c.$1(new C.eG2(w.a,d,e))
w.b.dc(new C.eG3(w.d,d,e))},
$0(){return this.$2$f$r(null,null)},
$1$r(d){return this.$2$f$r(null,d)},
$1$f(d){return this.$2$f$r(d,null)},
$S:1726}
C.eG2.prototype={
$0(){var w=this,v=w.b
if(v!=null)w.a.a=v
v=w.c
if(v!=null)w.a.b=v},
$S:0}
C.eG3.prototype={
$0(){var w,v,u,t,s,r,q,p
for(w=this.a,v=w.length,u=this.c,t=u!=null,s=this.b,r=s!=null,q=0;q<v;++q){p=w[q]
if(r)p.go=s
if(t)p.id=u}},
$S:0}
C.eG4.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.eG5.prototype={
$0(){return this.b.$1$f(this.a.a)},
$S:0}
C.eG6.prototype={
$0(){return this.b.$1$r(this.a.a)},
$S:0}
C.eG7.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A7.Hy(78,1920),$async$$0)
case 3:s=e
if(s==null){w=1
break}t.a.dc(new C.eG1(t.b,s))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eG1.prototype={
$0(){var w,v,u,t
for(w=this.a,v=w.length,u=this.b,t=0;t<v;++t)w[t].at=u},
$S:0}
C.eGd.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+6}
C.eGe.prototype={
$0(){var w,v,u,t=this,s=t.a
if(s.a<0)s.a=t.c.r.length
w=t.c
v=w.r
A.d.br(v,new C.eGc(t.d))
u=A.o.D(s.a,0,v.length)
s.a=u
s=t.e
A.d.nw(v,u,s.r)
w.CW=s.CW
w.cx=s.cx
w.cy=s.cy
w.ay=s.ay
s=t.b
s.f=A.o.D(s.f,0,v.length-1)
s.r=null
s.yf()},
$S:0}
C.eGc.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+6}
C.eGv.prototype={
$1(d){return d.b===D.d_},
$S:z+4}
C.eGw.prototype={
$1(d){return d.w},
$S:z+83}
C.eGx.prototype={
$2(d,e){return d>e?d:e},
$S:79}
C.eGy.prototype={
$1(d){var w=this,v=null,u=B.P(d).ax.a===A.H,t=u?A.c:A.a_,s=u?A.aR:A.an,r=u?A.br:A.aS,q=u?A.a_:A.c,p=B.m(28),o=B.L(u?A.bA:A.bl,A.r,1),n=B.aF(d,A.c1,x.w).w,m=w.a,l=x.p,k=w.b
return B.bm(!0,B.q(v,B.x(B.a([B.A(B.a([B.q(v,D.bY0,A.f,v,v,D.b7a,v,38,v,v,v,v,v,38),A.bc,B.E(B.x(B.a([B.d("Edit this slide",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,19,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.d("Slide "+(m.f+1)+" \xb7 changes save as you type",v,v,v,v,v,v,B.l(v,v,s,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],l),A.E,v,A.e,A.j,0,A.p),1),B.aI(v,v,v,v,B.X(A.cB,s,v,v,v,v),v,v,v,new C.eGs(d),v,v,v,v,v,v)],l),A.l,v,A.e,A.j,0,v,v),A.aB,new B.dm(1,A.co,B.hP(v,new C.eGt(m,k,w.c,s,w.d,t,r),k.length,A.fC,v,A.ah,new C.eGu(),!0),v)],l),A.E,v,A.e,A.P,0,A.p),A.f,v,new B.aY(0,1/0,0,n.a.b*0.8),new B.p(q,v,o,p,v,v,A.n),v,v,v,A.ux,A.a0A,v,v,v),!0,!1,A.ag,!0,!0)},
$S:25}
C.eGs.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.eGu.prototype={
$2(d,e){return A.ae},
$S:37}
C.eGt.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=null,p=r.b[e],o=p.w===r.c,n=o?"TITLE":"TEXT "+(e+1)
n=B.d(n,q,q,q,q,q,q,B.l(q,q,o?A.aE:r.d,q,q,q,q,q,q,q,q,10.5,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q)
w=r.e
v=w.h(0,p.a)
u=o?1:2
t=o?A.I:A.cE
t=B.l(q,q,r.f,q,q,q,q,q,q,q,q,15,q,q,t,q,q,!0,q,q,q,q,q,q,q,q)
s=r.a
w=B.aI(q,q,q,q,D.c0n,q,q,q,new C.eGq(s,w,p),q,q,q,q,"Add an icon",q)
return B.x(B.a([new B.D(D.bH3,n,q),B.aM(q,A.Z,!1,q,!0,A.t,q,B.aO(),v,q,q,q,q,q,2,B.bz(q,new B.b6(4,B.m(16),A.a1),q,A.f_,q,q,q,q,!0,q,q,q,q,q,q,r.r,!0,q,q,q,q,new B.b6(4,B.m(16),D.b5u),q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,!0,!0,!1,q,q,q,q,q,q,q,q,w,q,q,q,q,q),A.y,!0,q,!0,q,!1,q,A.ak,q,q,q,q,q,q,q,q,q,q,u,q,!1,"\u2022",q,new C.eGr(s,p),q,q,q,!1,q,q,!1,q,!0,q,A.ad,q,q,q,q,q,q,q,q,q,q,q,t,!0,A.a5,q,A.ao,q,q,q,q)],x.p),A.E,q,A.e,A.j,0,A.p)},
$S:687}
C.eGq.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=t.a
k=l.c
k.toString
w=3
return B.b(C.itV(k),$async$$0)
case 3:s=e
if(s==null||l.c==null){w=1
break}k=t.c.a
r=t.b.h(0,k)
q=r.a
p=q.b
o=p.geE()?p.a:q.a.length
n=p.geE()?p.b:q.a.length
m=A.a.oc(q.a,o,n,s)
r.bP(0,new B.ba(m,B.hh(A.bC,o+s.length),A.aP))
l.aky(k,m)
l.pM()
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eGr.prototype={
$1(d){var w=this.a
w.aky(this.b.a,d)
w.pM()},
$S:2}
C.eGz.prototype={
$0(){},
$S:0}
C.eG0.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.db=u.length===0?null:u
w.dx=v.b
w.dy=v.c
v=v.d
w.fr=v.length===0?null:v},
$S:0}
C.eEg.prototype={
$0(){},
$S:0}
C.eEh.prototype={
$0(){var w=this.c.CW
if(w==null)w=""
C.hEK(this.b,w,!0)
w=this.a
w.r=null
w.yf()},
$S:0}
C.eEi.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+6}
C.eEj.prototype={
$0(){var w,v,u,t=this,s=t.a
if(s.a<0)s.a=t.c.r.length
w=t.c
v=w.r
A.d.br(v,new C.eEf(t.d))
u=A.o.D(s.a,0,v.length)
s.a=u
s=t.e
A.d.nw(v,u,s.r)
w.CW=s.CW
w.cx=s.cx
s=t.b
s.f=A.o.D(s.f,0,v.length-1)
s.r=null
s.yf()},
$S:0}
C.eEf.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+6}
C.eGF.prototype={
$1(d){return B.ph(new C.eGE(this.a,d),!1,0.82,0.95,0.45,!1,null)},
$S:132}
C.eGE.prototype={
$2(d,e){var w=null,v=x.p
return B.x(B.a([new B.D(E.amH,B.x(B.a([D.fWt,A.am,B.d("Top 4 templates are free \xb7 lock icon means Slides Pro",w,w,w,w,w,w,B.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],v),A.E,w,A.e,A.j,0,A.p),w),B.E(B.ip(!0,w,e,A.y,D.fgV,new C.eGD(this.a,this.b),20,A.uB,w,A.ah,!1),1)],v),A.al,w,A.e,A.j,0,A.p)},
$S:459}
C.eGD.prototype={
$2(d,e){var w=null,v=D.Ip[e],u=C.hY6(v),t=B.m(16),s=B.m(16),r=B.a([v.e,v.f],x.O),q=v.d,p=B.L(q.j(0.45),A.r,1),o=q.j(0.2),n=B.m(8),m=x.p
n=B.a([B.q(w,B.d(v.c,w,w,w,w,w,w,B.l(w,w,q,w,w,w,w,w,w,w,w,9,w,w,A.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.f,w,w,new B.p(o,w,w,n,w,w,A.n),w,w,w,w,A.fL,w,w,w)],m)
if(u)A.d.v(n,B.a([A.bo,B.q(w,D.f9U,A.f,w,w,new B.p(A.dN.j(0.85),w,w,B.m(8),w,w,A.n),w,w,w,w,A.n_,w,w,w)],m))
return B.aH(!1,A.a3,!0,w,B.aP(!1,t,!0,B.q(w,B.x(B.a([B.A(n,A.l,w,A.e,A.j,0,w,w),A.b3,B.d(v.b,w,w,w,w,w,w,B.l(w,w,v.r,w,w,w,w,w,w,w,w,14,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.d("5 slides",w,w,w,w,w,w,B.l(w,w,v.w.j(0.8),w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],m),A.E,w,A.e,A.j,0,A.p),A.f,w,w,new B.p(w,w,p,s,w,new B.a8(A.a7,A.aa,A.x,r,w,w),A.n),w,w,w,w,A.bh,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eGC(this.a,u,this.b,v),w,w,w,w,w,w,w),A.f,A.L,0,w,w,w,w,w,A.aj)},
$S:80}
C.eGC.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=t.b?3:4
break
case 3:s=t.c
r=t.a.a
w=5
return B.b(C.ckZ(s,r.c,r.d),$async$$0)
case 5:if(!e||s.e==null){w=1
break}case 4:s=t.c
if(s.e!=null)B.a6(s,!1).O(t.d.a)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eGG.prototype={
$0(){var w=this.a
w.e=this.b.hQ()
w.f=0
w.r=null
w.db=!0
A.d.a8(w.ax)
A.d.a8(w.ay)
w.yf()},
$S:0}
C.eCU.prototype={
$0(){var w,v=this.a,u=v.gqV(),t=C.t_(4294967295,null,0,0,null,C.cE(),D.n8,"","","",D.ds),s=this.b
C.clb(t,s,u)
w=v.gdB()
if(w!=null&&s!==D.E0){t.e=w.e
t.f=w.f}A.d.c9(v.e.r,v.f+1,t);++v.f
v.r=null},
$S:0}
C.eEe.prototype={
$0(){var w,v,u,t,s,r,q=this.b.aj()
q.n(0,"id",C.cE())
w=x.c.a(q.h(0,"elements"))
if(w!=null)for(v=J.aT(w),u=x.f;v.C();){t=v.gR(v)
if(u.b(t)){s=Date.now()
r=$.jc
$.jc=r+1
J.aK(t,"id",""+1000*s+"_"+r)}}v=this.a
A.d.c9(v.e.r,v.f+1,C.hrq(q));++v.f},
$S:0}
C.eEc.prototype={
$0(){var w=this.a
A.d.cH(w.e.r,w.f)
w.f=A.o.D(w.f,0,w.e.r.length-1)
w.r=null},
$S:0}
C.eGO.prototype={
$0(){var w,v=this.a,u=this.b,t=A.d.cH(v.e.r,u),s=this.c
A.d.c9(v.e.r,s,t)
w=v.f
if(w===u)v.f=s
else if(u<w&&s>=w)v.f=w-1
else if(u>w&&s<=w)v.f=w+1},
$S:0}
C.eE8.prototype={
$0(){var w,v=this.a,u=this.b
A.d.br(v.d,new C.eE7(u))
w=v.e
w=w==null?null:w.a
if(w===u.a){v.e=null
v.db=!1}},
$S:0}
C.eE7.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eGN.prototype={
$0(){var w,v=this.b,u=A.a.i(this.c)
v.b=u.length===0?"Untitled Presentation":u
v.f=new B.V(Date.now(),0,!1)
u=this.a.e
w=u==null?null:u.a
if(w===v.a)u.b=v.b},
$S:0}
C.eDZ.prototype={
$0(){var w=this.a.r
return new B.au(new B.ba(w,A.b5,A.aP),$.ax())},
$S:248}
C.eEA.prototype={
$0(){return B.ka(!0,null,!0,!0,null,null,!1)},
$S:686}
C.eIv.prototype={
$0(){var w=this.a
w.w=w.r=this.b
w.y=!1},
$S:0}
C.eIw.prototype={
$1(d){var w,v,u=this.a
if(u.c==null||u.w!==this.b)return
w=this.c
u.avy(w).fW()
v=u.Xy(w)
v.stX(B.hh(A.bC,v.a.a.length))},
$S:8}
C.eHV.prototype={
$0(){var w,v,u,t=this
if(t.b)t.a.w=null
w=t.a
v=w.r=t.c
if(v!=null){w.as=!0
u=w.Yy(v)
if(u!=null&&u.b===D.d_)w.Xy(u).sb1(0,u.r)}else w.w=null},
$S:0}
C.eCV.prototype={
$0(){var w=C.cE(),v=this.a,u=C.er(A.bp,!1,v.gqV().e.l(),A.aH,"",4280640491,24,A.bt,A.a8,"",0.22,w,null,"","",0,!1,"",0,D.bm,4280172719,2,"Tap to edit text",0,0,"",D.ct,D.d_,0.7,0.15,0.2)
A.d.J(v.gdB().z,u)
v.r=u.a},
$S:0}
C.eCS.prototype={
$0(){var w=C.cE(),v=this.a,u=C.er(A.bp,!1,4279310375,A.aH,"",v.gqV().c.j(0.25).l(),24,A.bt,A.a8,"",0.25,w,null,"","",0,!1,"",0,this.b,v.gqV().c.l(),2,"",0,0,"",D.ct,D.fi,0.25,0.3,0.3)
A.d.J(v.gdB().z,u)
v.r=u.a},
$S:0}
C.eCI.prototype={
$0(){var w=C.er(A.bp,!1,4279310375,A.aH,"",4280640491,24,A.bt,A.a8,"",0.55,C.cE(),this.b,"","",0,!1,"",0,D.bm,4280172719,2,"",0,0,"",D.ct,D.lS,0.6,0.2,0.18),v=this.a
A.d.J(v.gdB().z,w)
v.r=w.a},
$S:0}
C.eCF.prototype={
$1(d){var w,v,u,t,s,r=null,q=B.a([D.caE],x.p)
for(w=J.aT(this.a);w.C();){v=w.gR(w)
u=A.a.i(v.b)
u=B.d(u.length===0?"My Bio":u,r,r,r,r,r,r,r,r,r,r)
t=v.galb().length
s=v.at==="published"&&v.Q.length!==0?" \xb7 "+v.as:""
q.push(B.dG(!1,r,r,r,!0,r,r,r,!0,r,r,D.bVG,r,r,r,r,new C.eCE(d,v),!1,r,r,r,r,r,B.d(""+t+" links"+s,r,1,A.a2,r,r,r,r,r,r,r),r,u,r,r,r))}return B.bm(!0,B.cl(q,r,r,r,r,r,A.ah,!0),!0,!1,A.ag,!0,!0)},
$S:25}
C.eCE.prototype={
$0(){B.a6(this.a,!1).O(this.b)
return null},
$S:0}
C.eCG.prototype={
$0(){var w=A.i.D(0.23131034482758622,0.12,0.5),v=C.cE(),u=this.b,t=A.X.aw(u.aj(),null),s=C.er(A.bp,!1,4279310375,A.aH,u.b,4280640491,24,A.bt,A.a8,"",0.86,v,null,"","",0,!1,"",0,D.bm,4280172719,2,t,0,0,"",D.ct,D.a8c,w,0.5-w/2,0.07)
t=this.a
A.d.J(t.gdB().z,s)
t.r=s.a},
$S:0}
C.eEa.prototype={
$1(d){return d.a===this.a&&d.db==="ngmy_quote_logo"},
$S:z+4}
C.eEb.prototype={
$0(){var w,v=this.a,u=this.b
A.d.br(v.gdB().z,new C.eE9(u))
v.w=v.r=null
w=v.ch.W(0,u)
if(w!=null){w.U$=$.ax()
w.P$=0}v=v.CW.W(0,u)
if(v!=null)v.t()},
$S:0}
C.eE9.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.eDm.prototype={
$0(){var w,v,u,t=this,s=t.b
if(s!=null){w=s.b
if(w===D.d_)s.Q=t.c.l()
else if(w===D.fi){s.ay=t.c.l()
w=t.d
if(w!=null)s.ch=w.l()}return}v=new C.eDn(t.c,t.d)
if(t.a.Q)for(s=t.e.r,w=s.length,u=0;u<s.length;s.length===w||(0,B.J)(s),++u)v.$1(s[u])
else{s=t.f
if(s!=null)v.$1(s)}},
$S:0}
C.eDn.prototype={
$1(d){var w
d.e=this.a.l()
w=this.b
d.f=w==null?null:w.l()},
$S:z+1}
C.eDr.prototype={
$0(){var w,v,u,t,s=this.a,r=s.e
r.toString
w=this.b
v=new C.eDs(w)
if(s.Q){r.c=w.a
for(s=r.r,r=s.length,u=0;u<s.length;s.length===r||(0,B.J)(s),++u)v.$1(s[u])}else{t=s.gdB()
if(t!=null)v.$1(t)}},
$S:0}
C.eDs.prototype={
$1(d){var w=this.a
d.e=w.f.l()
w=w.r
d.f=w==null?null:w.l()},
$S:z+1}
C.eDp.prototype={
$0(){var w,v,u,t=this,s=t.b
if(s!=null&&s.b===D.d_){s.Q=t.c
return}w=new C.eDq(t.c)
if(t.a.Q)for(s=t.d.r,v=s.length,u=0;u<s.length;s.length===v||(0,B.J)(s),++u)w.$1(s[u])
else{s=t.e
if(s!=null)w.$1(s)}},
$S:0}
C.eDq.prototype={
$1(d){var w,v,u
for(w=A.d.gae(d.z),v=new B.eH(w,new C.eDo()),u=this.a;v.C();)w.gR(0).Q=u},
$S:z+1}
C.eDo.prototype={
$1(d){return d.b===D.d_},
$S:z+4}
C.eDl.prototype={
$0(){return C.clb(this.b,this.c,this.a.gqV())},
$S:0}
C.eGp.prototype={
$0(){return A.d.c9(this.a.d,0,this.b)},
$S:0}
C.eIE.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eIF.prototype={
$1(d){return d.w===this.b&&d.a!==this.a.a.a},
$S:z+2}
C.eIG.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eIH.prototype={
$0(){var w,v=this.a,u=v.c,t=this.b,s=t.d
if(u)A.d.c9(s,0,v.b)
else{w=A.d.bj(s,new C.eID(v))
if(w>=0)t.d[w]=v.b}if(v.a.gTb()){u=v.b
u.Q=v.a.Q
u.z=!0}if(this.c===!0){t.e=v.b.hQ()
t.f=0
t.r=null
t.db=!1
A.d.a8(t.ax)
A.d.a8(t.ay)
t.yf()
t.KQ()}},
$S:0}
C.eID.prototype={
$1(d){return d.a===this.a.b.a},
$S:z+2}
C.eIa.prototype={
$1(d){var w=this,v=null,u=w.a,t=u.acO(),s=w.b,r=u.acP(A.fp,A.jL,"Copy filled names, date, mahari, witnesses, and signatures into "+s+".","Transfer details"),q=B.m(18),p=B.a([A.c.j(0.07),A.c.j(0.03)],x.O),o=B.L(A.c.j(0.08),A.r,1),n=x.p
p=B.a([t,A.T,r,A.bz,B.q(v,B.A(B.a([B.E(u.aXP(w.c,A.an),1),new B.D(A.fK,B.q(v,D.bVL,A.f,v,v,new B.p(A.fp.j(0.18),v,v,v,v,v,A.a6),v,34,v,v,v,v,v,34),v),B.E(u.aXP(s,A.fp),1)],n),A.l,v,A.e,A.j,0,v,v),A.f,v,v,new B.p(v,v,o,q,v,new B.a8(A.aA,A.aF,A.x,p,v,v),A.n),v,v,v,v,A.bI,v,v,v),A.bz,u.aXS(A.fp,d,D.bRU,!0,"Make a fresh "+s+" and fill it automatically","Create new & transfer","new")],n)
t=w.d
if(t>0)A.d.v(p,B.a([A.W,u.c1q(A.aG,d,A.uQ,t===1?"Update your saved "+s:"Choose among "+t+" saved documents","Use existing","existing")],n))
p.push(A.aB)
p.push(u.aXQ(d,"Not now"))
return new C.KS(B.x(p,A.al,v,A.e,A.P,0,A.p),v)},
$S:z+9}
C.eI9.prototype={
$1(d){var w=null,v=this.a,u=this.c
return new C.KS(B.x(B.a([v.acO(),A.T,v.acP(A.aG,D.bRz,"Pick which saved document should receive the details.","Choose "+this.b),A.aO,new B.cP(new B.aY(0,1/0,0,B.aF(d,A.c1,x.w).w.a.b*0.42),B.hP(w,new C.eI7(v,u,d),u.length,w,w,A.ah,new C.eI8(),!0),w),A.aB,v.aXQ(d,"Cancel")],x.p),A.al,w,A.e,A.P,0,A.p),w)},
$S:z+9}
C.eI8.prototype={
$2(d,e){return A.W},
$S:37}
C.eI7.prototype={
$2(d,e){var w=null,v=this.b[e],u=B.m(16),t=A.c.j(0.05),s=B.m(16),r=B.L(A.c.j(0.08),A.r,1),q=x.p
return B.aH(!1,A.a3,!0,w,B.aP(!1,u,!0,B.q(w,B.A(B.a([B.q(w,D.arP,A.f,w,w,new B.p(w,w,w,B.m(12),w,D.c7D,A.n),w,42,w,w,w,w,w,42),A.bc,B.E(B.x(B.a([B.d(v.b,w,1,A.a2,w,w,w,A.ng,w,w,w),A.cS,B.d("Updated "+this.a.QH(v.f),w,w,w,w,w,w,B.l(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,12,w,w,A.a8,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],q),A.E,w,A.e,A.j,0,A.p),1),B.X(A.eI,A.c.j(0.35),w,w,w,w)],q),A.l,w,A.e,A.j,0,w,w),A.f,w,w,new B.p(t,w,r,s,w,w,A.n),w,w,w,w,A.bI,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eI6(this.c,v),w,w,w,w,w,w,w),A.f,A.L,0,w,w,w,w,w,A.aj)},
$S:80}
C.eI6.prototype={
$0(){B.a6(this.a,!1).O(this.b.a)
return null},
$S:0}
C.eI3.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.acO()
t=t.acP(A.av,A.v1,"Names and shared details from \u201c"+this.b+"\u201d will fill matching spots on \u201c"+this.c+"\u201d.","Replace matching fields?")
w=A.c.j(0.14)
v=x.p
return new C.KS(B.x(B.a([s,A.T,t,A.bz,B.A(B.a([B.E(B.dU(A.abI,new C.eI1(d),B.di(u,u,u,u,u,u,u,u,u,A.c,u,u,A.cq,u,new B.b9(B.m(14),A.a1),new B.ay(w,1,A.r,-1),u,u,u,u)),1),A.au,B.E(B.bJ(D.fHR,u,new C.eI2(d),B.bp(A.fp,u,u,u,A.c,u,A.cq,u,new B.b9(B.m(14),A.a1),u,u,u)),1)],v),A.l,u,A.e,A.j,0,u,u)],v),A.al,u,A.e,A.P,0,A.p),u)},
$S:z+9}
C.eI1.prototype={
$0(){B.a6(this.a,!1).O(!1)
return null},
$S:0}
C.eI2.prototype={
$0(){B.a6(this.a,!1).O(!0)
return null},
$S:0}
C.eI5.prototype={
$1(d){var w=this,v=null,u=w.a,t=u.acO(),s=w.b,r=u.acP(A.aV,A.ee,"Everything that could be matched is now on "+s+".","Transfer complete"),q=x.p,p=B.A(B.a([B.E(u.awS("Names",""+w.c),1),A.af,B.E(u.awS("Fields",""+w.d),1),A.af,B.E(u.awS("Signatures",""+w.e),1)],q),A.l,v,A.e,A.j,0,v,v),o=B.bp(A.bn,v,v,v,A.c,v,A.yB,v,new B.b9(B.m(14),A.a1),v,v,v)
return new C.KS(B.x(B.a([t,A.T,r,A.aO,p,A.bz,B.bJ(B.d("Open "+s,v,v,v,v,v,v,A.nZ,v,v,v),v,new C.eI4(d),o),A.W,u.aXR(d,"Stay here",!1)],q),A.al,v,A.e,A.P,0,A.p),v)},
$S:z+9}
C.eI4.prototype={
$0(){B.a6(this.a,!1).O(!0)
return null},
$S:0}
C.eF3.prototype={
$0(){B.a6(this.a,!1).O(this.b)
return null},
$S:0}
C.eF2.prototype={
$0(){B.a6(this.a,!1).O(this.b)
return null},
$S:0}
C.eHW.prototype={
$1(d){return d.b===D.d_},
$S:z+4}
C.eIu.prototype={
$1(d){var w=this.a,v=this.b
return new C.a0T(A.d.dP(w.d,new C.eIs(v),new C.eIt(v)).hQ(),w.f,null)},
$S:z+85}
C.eIs.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eIt.prototype={
$0(){return this.a},
$S:z+86}
C.eCN.prototype={
$1(d){var w=null,v=this.b,u=""+v,t=v===1?"":"s"
t=B.a([new B.D(A.bI,B.d("Import "+this.a.c+" ("+u+" page"+t+")",w,w,w,w,w,w,A.h1,w,w,w),w),B.dG(!1,w,w,w,!0,w,w,w,!0,w,w,D.bXz,w,w,w,w,new C.eCL(d),!1,w,w,w,w,w,B.d("Scroll through all "+u+" pages inside the slide",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,D.fFP,w,w,w)],x.p)
if(v>1)t.push(B.dG(!1,w,w,w,!0,w,w,w,!0,w,w,D.bYQ,w,w,w,w,new C.eCM(d),!1,w,w,w,w,w,D.h1H,w,B.d("One slide per page ("+u+" slides)",w,w,w,w,w,w,A.dk,w,w,w),w,w,w))
return B.bm(!0,B.x(t,A.l,w,A.e,A.P,0,A.p),!0,!1,A.ag,!0,!0)},
$S:25}
C.eCL.prototype={
$0(){B.a6(this.a,!1).O("scroll")
return null},
$S:0}
C.eCM.prototype={
$0(){B.a6(this.a,!1).O("split")
return null},
$S:0}
C.eCO.prototype={
$0(){var w=this.b,v=w.c,u=C.er(A.bp,!1,4279310375,A.aH,v,4280640491,24,A.bt,A.a8,"",0.84,C.cE(),w.b,"","",0,!1,"",0,D.bm,4280172719,2,v,0,0,"",D.ct,D.TL,0.88,0.06,0.08)
v=this.a
A.d.J(v.gdB().z,u)
v.r=u.a},
$S:0}
C.eCP.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this.a,i=j.f+1
for(w=this.b,v=this.c,u=v.b,t=w,v=v.c,s=x.u,r=v+" \u2014 page ",q=1;q<=w;++q){p=Date.now()
o=$.jc
$.jc=o+1
n=""+q
m=B.a([],s)
l=Date.now()
k=$.jc
$.jc=k+1
m.push(new C.eQ(""+1000*l+"_"+k,D.TL,0.04,0.06,0.92,0.88,v,24,A.a8,A.bt,A.aH,4279310375,A.bp,u,D.bm,4280640491,4280172719,2,0,!1,n+" / "+t,q,D.ct,0,"","","","","",!1,0))
A.d.c9(j.e.r,i+q-1,new C.m1(""+1000*p+"_"+o,r+n,"",D.r0,4294967295,null,D.ds,0,"",0,m))}j.f=i
j.r=null},
$S:0}
C.eCT.prototype={
$0(){var w,v=C.cE(),u=this.a,t=u.e
t=(t==null?null:C.kN(t.w))===!0?"marriage_sign_placed":"Signature"
w=C.er(A.bp,!1,4279310375,A.aH,t,4280640491,24,A.bt,A.a8,"",0.22,v,this.b.a,"","",0,!1,"",0,D.bm,4280172719,2,"",0,0,"",D.ct,D.ls,0.35,0.55,0.62)
A.d.J(u.gdB().z,w)
u.r=w.a},
$S:0}
C.eCK.prototype={
$0(){var w,v,u,t,s,r,q,p=this.a,o=this.b
p.b5U(o)
w=C.cE()
v=this.c
u=v.c
t=v.d
s=v.e
r=v.f
q=C.er(A.bp,!1,4279310375,A.aH,"marriage_sign_placed_"+A.a.en(v.db,"marriage_sign_",""),4280640491,24,A.bt,A.a8,"",r,w,o.a,"","",0,!1,"",0,D.bm,4280172719,2,"",0,0,"",D.ct,D.ls,s,u,t)
A.d.J(p.gdB().z,q)
A.d.br(p.gdB().z,new C.eCJ(v))
p.r=null
p=p.e
if((p==null?null:p.w)==="hati_kiapo_uongozi"&&A.a.q(v.db,"rais")){p.toString
C.in9(p)}},
$S:0}
C.eCJ.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.eGL.prototype={
$0(){var w=this.a,v=this.b
w.b5U(v)
this.c.at=v.a
w.r=null},
$S:0}
C.eIC.prototype={
$0(){var w,v,u,t,s,r,q=4279673674,p=1483594
for(w=this.b.z,v=w.length,u=this.c,t=0;t<v;++t){s=w[t]
r=s.db
if(r==="marriage_locked_nim_akuna_deni"){s.r="AKUNA DENI"
s.Q=u?q:p}else if(r==="marriage_locked_nim_akuna_box")s.ch=u?q:p
else if(r==="marriage_locked_nim_akuna_tick"){s.r="\u2713"
s.Q=u?q:p}}this.a.r=null},
$S:0}
C.eF6.prototype={
$0(){var w,v,u,t,s,r=this.b
A.d.br(r.z,new C.eF5())
for(r=r.z,w=r.length,v=this.c+0.001,u=0;u<w;++u){t=r[u]
s=t.d
if(s>v)t.d=s-0.043}this.a.r=null},
$S:0}
C.eF5.prototype={
$1(d){var w=d.db
return w==="marriage_locked_nim_n_4"||w==="marriage_locked_nim_ul_4"||A.a.a_(w,"marriage_field_mahari_4:")},
$S:z+4}
C.eDv.prototype={
$0(){var w=this.b
w.at=this.c
w.db="__kiapo_video__"
w=this.a
w.r=null
w.db=!1},
$S:0}
C.eDw.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.uf()},
$S:8}
C.eCH.prototype={
$0(){var w=C.er(A.bp,!1,4279310375,A.aH,"HD Photo",4280640491,24,A.bt,A.a8,"",0.8,C.cE(),this.b,"","",0,!1,"",0,D.bm,4280172719,2,"",0,0,"",D.ct,D.lS,0.8,0.1,0.1),v=this.a
A.d.J(v.gdB().z,w)
v.r=w.a},
$S:0}
C.eEy.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.eCQ.prototype={
$0(){var w=this.a,v=this.b
A.d.J(w.gdB().z,v)
w.r=v.a},
$S:0}
C.eCZ.prototype={
$0(){return this.a.cx+=0.785398},
$S:0}
C.eD_.prototype={
$0(){var w=this.b.hQ(),v=C.cE(),u=A.i.D(w.c+0.04,0,0.92),t=A.i.D(w.d+0.04,0,0.92),s=w.e,r=w.f,q=w.r,p=w.w,o=w.x,n=w.y,m=w.z,l=w.Q,k=w.as,j=w.at,i=w.ay,h=w.ch,g=w.cx,f=C.er(k,w.cy,l,m,w.db,i,p,n,o,"",r,v,j,"","",w.dx,!1,"",g,w.ax,h,w.CW,q,w.fr,0,"",w.dy,w.b,s,u,t)
t=this.a
A.d.J(t.gdB().z,f)
t.r=f.a},
$S:0}
C.eD0.prototype={
$0(){var w=this.a.gdB().z,v=this.b,u=A.d.bj(w,new C.eCY(v))
if(u>=0&&u<w.length-1){A.d.cH(w,u)
A.d.c9(w,u+1,v)}},
$S:0}
C.eCY.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.eDb.prototype={
$0(){var w=this.a.gdB().z,v=this.b,u=A.d.bj(w,new C.eCX(v))
if(u>0){A.d.cH(w,u)
A.d.c9(w,u-1,v)}},
$S:0}
C.eCX.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.eDe.prototype={
$0(){return this.a.as=A.bp},
$S:0}
C.eDf.prototype={
$0(){return this.a.as=A.K},
$S:0}
C.eDg.prototype={
$0(){return this.a.as=A.e4},
$S:0}
C.eDh.prototype={
$0(){return this.a.cx+=3.14159},
$S:0}
C.eDi.prototype={
$0(){return this.a.cx-=3.14159},
$S:0}
C.eDj.prototype={
$1(d){return d.b===D.d_},
$S:z+4}
C.eDk.prototype={
$1(d){return d.length!==0},
$S:3}
C.eD1.prototype={
$0(){var w=this.a,v=w.gdB().z,u=C.cE()
A.d.J(v,C.DH(w.gqV().c.j(0.18).l(),0.1,u,D.bm,0,2,1,0,0))
u=w.gdB().z
v=C.cE()
A.d.J(u,C.j6(A.bp,!1,w.gqV().d.l(),A.aH,18,A.bt,A.I,0.07,v,"Document Header",0,D.ds,0.9,0.05,0.02))},
$S:0}
C.eD2.prototype={
$0(){var w,v=this.a,u=v.gdB().z,t=C.cE()
A.d.J(u,C.DH(v.gqV().c.j(0.12).l(),0.1,t,D.bm,0,2,1,0,0.9))
t=v.gdB().z
u=C.cE()
w=C.bFM()
A.d.J(t,C.j6(A.K,!1,v.gqV().e.l(),A.aH,12,A.bt,A.a8,0.06,u,"Footer \xb7 "+w,0,D.ds,0.9,0.05,0.92))},
$S:0}
C.eD3.prototype={
$0(){A.d.J(this.a.gdB().z,C.DH(1727914055,0.12,C.cE(),D.bm,4294626325,2,0.76,0.12,0.35))},
$S:0}
C.eD4.prototype={
$0(){var w=4279310375
A.d.J(this.a.gdB().z,C.DH(w,0.08,C.cE(),D.bm,w,2,0.5,0.2,0.4))},
$S:0}
C.eD5.prototype={
$0(){var w=this.a,v=w.gdB().z,u=C.cE()
A.d.J(v,C.DH(w.gqV().c.j(0.35).l(),0.12,u,D.E1,4280640491,2,0.2,0.15,0.55))
A.d.J(w.gdB().z,C.j6(A.bp,!1,4279310375,A.aH,18,A.bt,A.a8,0.15,C.cE(),"Important note",0,D.r1,0.5,0.38,0.52))},
$S:0}
C.eD6.prototype={
$0(){var w=this.a
A.d.J(w.gdB().z,C.DH(4294507260,0.78,C.cE(),D.bm,4291548641,1.5,0.84,0.08,0.1))
A.d.J(w.gdB().z,C.j6(A.bp,!1,4279179050,A.aH,16,A.bt,A.a8,0.7,C.cE(),"MEMO\n\nTo:\nFrom:\nDate: "+C.bFM()+"\n\nSubject:\n\nBody text\u2026",0,D.ds,0.76,0.12,0.14))},
$S:0}
C.eD7.prototype={
$0(){var w=this.a
A.d.J(w.gdB().z,C.DH(4294897802,0.28,C.cE(),D.bm,4294626325,2,0.3,0.62,0.12))
A.d.J(w.gdB().z,C.j6(A.bp,!1,4285611794,A.aH,15,A.bt,A.a8,0.24,C.cE(),"Sticky note",0,D.aL6,0.26,0.64,0.14))},
$S:0}
C.eD8.prototype={
$0(){var w=4280640491,v=this.a
A.d.J(v.gdB().z,C.DH(4293060848,0.04,C.cE(),D.bm,4291548641,2,0.8,0.1,0.48))
A.d.J(v.gdB().z,C.DH(w,0.04,C.cE(),D.bm,w,2,0.55,0.1,0.48))},
$S:0}
C.eD9.prototype={
$0(){var w=4279310375,v=this.a
A.d.J(v.gdB().z,C.j6(A.bp,!1,w,A.aH,18,A.bt,A.a8,0.62,C.cE(),"Left column\n\n\u2022 Point A\n\u2022 Point B",0,D.Jm,0.42,0.06,0.18))
A.d.J(v.gdB().z,C.j6(A.bp,!1,w,A.aH,18,A.bt,A.a8,0.62,C.cE(),"Right column\n\n\u2022 Point C\n\u2022 Point D",200,D.vl,0.42,0.52,0.18))},
$S:0}
C.eDa.prototype={
$0(){var w=4279310375,v=this.a
A.d.J(v.gdB().z,C.DH(858088427,0.62,C.cE(),D.bm,4280640491,2,0.42,0.05,0.18))
A.d.J(v.gdB().z,C.DH(856004201,0.62,C.cE(),D.bm,4278556265,2,0.42,0.53,0.18))
A.d.J(v.gdB().z,C.j6(A.bp,!1,w,A.aH,20,A.bt,A.I,0.1,C.cE(),"Option A",0,D.ds,0.36,0.08,0.2))
A.d.J(v.gdB().z,C.j6(A.bp,!1,w,A.aH,20,A.bt,A.I,0.1,C.cE(),"Option B",0,D.ds,0.36,0.56,0.2))},
$S:0}
C.eDc.prototype={
$0(){var w=4279310375,v=this.a
A.d.J(v.gdB().z,C.DH(4294967295,0.36,C.cE(),D.bm,w,2,0.24,0.38,0.28))
A.d.J(v.gdB().z,C.j6(A.K,!1,w,A.aH,14,A.bt,A.a8,0.12,C.cE(),"[ QR CODE ]",0,D.ds,0.24,0.38,0.4))},
$S:0}
C.eDd.prototype={
$0(){return C.clb(this.b,D.TM,this.a.gqV())},
$S:0}
C.eEx.prototype={
$1(d){var w=this.b,v=w.dy,u=!D.aa5.q(0,d),t=this.a
return t.bb6(d,v===d,A.b2,this.c,new C.eEw(t,u,d,w),u)},
$S:z+25}
C.eEw.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p=t.b
if(p){w=3
break}else e=p
w=4
break
case 3:w=5
return B.b(t.a.ot(),$async$$0)
case 5:e=!e
case 4:if(e){w=1
break}s=t.a
r=s.c
if(r==null){w=1
break}q=t.c
C.bGx(r,new C.eEv(s,t.d,q),q)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eEv.prototype={
$0(){return this.a.dc(new C.eEu(this.b,this.c))},
$S:0}
C.eEu.prototype={
$0(){return this.a.dy=this.b},
$S:0}
C.eCR.prototype={
$0(){var w,v=this.a,u=v.gqV(),t=C.t_(4294967295,null,0,0,null,C.cE(),D.n8,"","","",D.ds),s=this.b
C.clb(t,s,u)
w=v.gdB()
if(w!=null&&s!==D.E0){t.e=w.e
t.f=w.f}A.d.c9(v.e.r,v.f+1,t);++v.f
v.r=null},
$S:0}
C.eDz.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.a
p=q.c
if(p==null){w=1
break}s=q.a
r=s.c
s=s.d
w=3
return B.b(C.itY(p,q.d,s,new C.eDy(q),r),$async$$0)
case 3:w=q.c!=null?4:5
break
case 4:w=6
return B.b(q.uf(),$async$$0)
case 6:case 5:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eDy.prototype={
$1(d){return this.bo5(d)},
bo5(d){var w=0,v=B.j(x.H),u=this,t
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.a
t.m(new C.eDx(t,d))
w=2
return B.b(t.uf(),$async$$1)
case 2:return B.h(null,v)}})
return B.i($async$$1,v)},
$S:z+88}
C.eDx.prototype={
$0(){var w,v,u
for(w=J.aT(this.b),v=this.a;w.C();){u=w.gR(w)
A.d.c9(v.d,0,u)}},
$S:0}
C.eDA.prototype={
$0(){return this.a.bMT()},
$S:0}
C.eDB.prototype={
$0(){return this.a.aSZ("Class Presentation",!0)},
$S:0}
C.eDC.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.eDD.prototype={
$1(d){return this.a.bNP(d.b,this.b,d.a)},
$S:z+89}
C.eEd.prototype={
$0(){var w,v=this.a
v.as=!1
w=v.c
w.toString
if(B.aF(w,A.c1,x.w).w.a.a<900)v.w=v.r=null},
$S:0}
C.eGo.prototype={
$1(d){return new B.D(new B.R(0,0,0,B.aF(d,A.eS,x.w).w.f.d),new B.dY(new C.eGn(this.a,this.b),null),null)},
$S:59}
C.eGn.prototype={
$2(d,e){return B.ph(new C.eGm(this.a,this.b,d,e),!1,0.52,0.9,0.34,!1,null)},
$S:602}
C.eGm.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u?A.as:A.c,s=B.L(u?A.bA:A.bl,A.r,1),r=B.q(v,v,A.f,v,v,new B.p(A.aT,v,v,B.m(99),v,v,A.n),v,4,v,v,v,v,v,40),q=x.p,p=w.a
return B.q(v,B.x(B.a([A.W,r,new B.D(A.am5,B.A(B.a([B.d("Format",v,v,v,v,v,v,B.l(v,v,u?A.c:A.a_,v,v,v,v,v,v,v,v,17,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.b3,B.bO(!1,A.AX,v,v,!0,v,v,v,new C.eGk(w.c),v,v)],q),A.l,v,A.e,A.j,0,v,v),v),B.E(B.cl(B.a([p.aVM(u,!0,!0,new C.eGl(p,w.d))],q),e,v,D.bCr,v,v,A.ah,!1),1)],q),A.l,v,A.e,A.j,0,A.p),A.f,v,v,new B.p(t,v,s,A.l9,v,v,A.n),v,v,v,v,v,v,v,v)},
$S:121}
C.eGk.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.eGl.prototype={
$0(){this.b.$1(new C.eGi())
var w=this.a
if(w.c!=null)w.m(new C.eGj())},
$S:0}
C.eGi.prototype={
$0(){},
$S:0}
C.eGj.prototype={
$0(){},
$S:0}
C.eHX.prototype={
$3(d,e,f){return A.bM},
$C:"$3",
$R:3,
$S:86}
C.eHY.prototype={
$4(d,e,f,g){var w=A.cw.aA(0,e.gp(0))
return B.d3(B.e1(A.A,new C.aAQ(this.b,this.a.a.d,null),0.94+w*0.06,null,null),w)},
$S:246}
C.eHZ.prototype={
$3(d,e,f){return A.bM},
$C:"$3",
$R:3,
$S:86}
C.eI_.prototype={
$4(d,e,f,g){var w=A.cw.aA(0,e.gp(0))
return B.d3(B.e1(A.A,new C.bfm(this.a.b,null),0.94+w*0.06,null,null),w)},
$S:246}
C.eI0.prototype={
$0(){return A.d.c9(this.a.d,0,C.Xh(this.b))},
$S:0}
C.eCW.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a.fy
o===$&&B.c()
o=o.x
o===$&&B.c()
w=A.dG.aA(0,o)
o=B.m(22)
v=B.m(22)
u=this.b
t=x.O
s=u?B.a([A.c.j(0.1+w*0.04),A.as.j(0.72)],t):B.a([A.c.j(0.88),A.qd.j(0.75)],t)
r=B.L(A.aZ.j(0.28+w*0.22),A.r,1.3)
q=w*0.2
t=B.a([A.aZ.j(0.35+q),A.ch.j(0.18),A.L],t)
q=B.L(A.aZ.j(0.45+q),A.r,1)
t=B.q(p,B.X(Y.P7,u?A.ab:A.a_,p,p,p,28),A.f,p,p,new B.p(p,p,q,p,p,new B.bY(A.A,0.5,A.x,p,0,t,p,p),A.a6),p,58,p,p,p,p,p,58)
q=B.d("No presentations yet",p,p,p,p,p,p,B.l(p,p,u?A.c:A.a_,p,p,p,p,p,p,p,p,p,p,p,A.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
return B.bw(o,B.uA(A.fj,B.q(p,B.x(B.a([t,A.aB,q,A.am,B.d(y.K,p,p,p,p,p,p,B.l(p,p,u?A.aD:A.an,p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),A.K,p,p)],x.p),A.l,p,A.e,A.j,0,A.p),A.f,p,p,new B.p(p,p,r,v,p,new B.a8(A.aA,A.aF,A.x,s,p,p),A.n),p,p,p,p,A.ey,p,p,1/0),14,!1),A.aq)},
$S:302}
C.eE1.prototype={
$1(d){return A.a.i(d)},
$S:14}
C.eE2.prototype={
$1(d){return d.length!==0},
$S:3}
C.eE3.prototype={
$1(d){var w
if(A.a.a_(d,"Updated"))w=A.k9
else{w=B.ag("^\\d+ slides?$",!0,!1,!1,!1)
w=w.b.test(d)?A.a3_:A.CG}return w},
$S:689}
C.eE6.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.a,j=k.fy
j===$&&B.c()
j=j.x
j===$&&B.c()
w=m.b
v=A.dG.aA(0,A.i.F(j+w*0.12,1))
j=m.c
u=j?l:new B.p(l,l,l,B.m(20),A.Iw,l,A.n)
t=B.m(20)
s=m.d
r=B.m(20)
if(j)q=B.a([A.c.j(0.1+v*0.04),A.as.j(0.78)],x.O)
else{q=(A.o.aq(w,1)&1)===0
p=B.ar(A.c,q?A.aG:A.bg,0.1)
p.toString
o=B.ar(A.c,q?A.aG:A.bg,0.24)
o.toString
o=B.a([p,o],x.O)
q=o}p=!j
if(p)o=B.VL((A.o.aq(w,1)&1)===0?A.aG:A.bg,!0)[0].j(0.75)
else o=A.d.gH(m.e).j(0.34+v*0.22)
o=B.L(o,A.r,p?1.5:1.25)
n=B.m(10)
if(j)w=m.e
else{w=(A.o.aq(w,1)&1)===0
p=B.VL(w?A.aG:A.bg,!0)[0]
p=B.a([p,B.VL(w?A.aG:A.bg,!0)[1]],x.O)
w=p}w=B.q(l,B.X(C.kN(s.w)?A.wE:A.qP,A.c,l,l,l,22),A.f,l,l,new B.p(l,l,l,n,l,new B.a8(A.a7,A.aa,A.x,w,l,l),A.n),l,36,l,l,l,l,l,52)
p=s.b
p=B.d(p.toUpperCase(),l,l,l,l,l,l,B.l(l,l,j?A.c:A.a_,l,l,l,l,l,l,l,l,l,l,l,A.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
n=s.w
if(n==="marriage_agreement")n="Hati ya Kuhowesha \u2022 Updated "+k.QH(s.f)
else if(n==="hati_kuhowa")n="Hati ya Kuhowa \u2022 Updated "+k.QH(s.f)
else if(n==="hati_kuhoweya")n="Hati ya Kuhoweya \u2022 Updated "+k.QH(s.f)
else if(n==="hati_kiapo_uongozi"){n=s.x
if(A.a.i(n==null?"":n).length===0)n="Civic Registry"
n="Kiapo cha Uongozi \u2022 "+B.w(n)+" \u2022 Updated "+k.QH(s.f)}else n=""+s.r.length+" slides \u2022 Updated "+k.QH(s.f)
n=k.bNN(n,A.d.gH(m.e),j)
return B.q(l,B.bw(t,new B.a9e(B.aH(!1,A.a3,!0,l,B.aP(!1,l,!0,B.q(l,B.dG(!1,A.O6,l,l,!0,l,l,l,!0,l,l,w,l,l,l,l,l,!1,l,l,l,l,l,n,l,p,l,B.aI(l,l,l,l,B.X(A.oz,j?A.aD:A.bN,l,l,l,l),l,l,l,new C.eE4(k,s,j),l,l,l,l,"Project options",l),l),A.f,l,l,new B.p(l,l,o,r,l,new B.a8(A.aA,A.aF,A.x,q,l,l),A.n),l,l,l,l,l,l,l,l),l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.eE5(k,s),l,l,l,l,l,l,l),A.f,A.L,0,l,l,l,l,l,A.aj),l),A.aq),A.f,l,l,u,l,l,l,A.kw,l,l,l,l)},
$S:90}
C.eE5.prototype={
$0(){return this.a.agv(this.b)},
$S:0}
C.eE4.prototype={
$0(){return this.a.Bu(this.b,this.c)},
$S:0}
C.eFx.prototype={
$0(){var w=this.a
w.b9F()
w.m(new C.eFw())},
$S:0}
C.eFw.prototype={
$0(){},
$S:0}
C.eFy.prototype={
$1(d){return this.a.aky(this.b.a,d)},
$S:2}
C.eFz.prototype={
$0(){this.a.dc(new C.eFv(this.b))},
$S:0}
C.eFv.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.U)?A.cE:A.U},
$S:0}
C.eFA.prototype={
$0(){this.a.dc(new C.eFu(this.b))},
$S:0}
C.eFu.prototype={
$0(){var w=this.a
return w.y=w.y===A.cK?A.bt:A.cK},
$S:0}
C.eFB.prototype={
$0(){this.a.dc(new C.eFt(this.b))},
$S:0}
C.eFt.prototype={
$0(){var w=this.a,v=w.z
return w.z=1===v.a?A.aH:A.nd},
$S:0}
C.eFC.prototype={
$0(){this.a.dc(new C.eFs(this.b))},
$S:0}
C.eFs.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
C.eFD.prototype={
$0(){var w=this.a
w.dc(new C.eFr(w,this.b))},
$S:0}
C.eFr.prototype={
$0(){var w=this.b
return w.as=this.a.c8q(w.as)},
$S:0}
C.eFE.prototype={
$0(){return this.a.dc(new C.eFq(this.b))},
$S:0}
C.eFq.prototype={
$0(){var w=this.a
return w.w=A.i.D(w.w+2,10,96)},
$S:0}
C.eFF.prototype={
$0(){return this.a.dc(new C.eFp(this.b))},
$S:0}
C.eFp.prototype={
$0(){var w=this.a
return w.w=A.i.D(w.w-2,10,96)},
$S:0}
C.eFi.prototype={
$0(){return this.a.a3d(this.b.a)},
$S:0}
C.eFj.prototype={
$0(){this.a.a0K()
return null},
$S:0}
C.eFk.prototype={
$0(){var w=this.a,v=w.c
v.toString
if(B.aF(v,A.c1,x.w).w.a.a<900)w.agO()
else w.m(new C.eFh(w))},
$S:0}
C.eFh.prototype={
$0(){return this.a.as=!0},
$S:0}
C.eFl.prototype={
$0(){this.a.dc(new C.eFg(this.b))},
$S:0}
C.eFg.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.U)?A.cE:A.U},
$S:0}
C.eFm.prototype={
$0(){return this.a.dc(new C.eFf(this.b))},
$S:0}
C.eFf.prototype={
$0(){var w=this.a
return w.w=A.i.D(w.w+2,10,96)},
$S:0}
C.eFn.prototype={
$0(){return this.a.dc(new C.eFe(this.b))},
$S:0}
C.eFe.prototype={
$0(){var w=this.a
return w.w=A.i.D(w.w-2,10,96)},
$S:0}
C.eFo.prototype={
$0(){return this.a.aC4(null)},
$S:0}
C.eEq.prototype={
$0(){this.a.Ea()
return null},
$S:0}
C.eEr.prototype={
$0(){this.a.abl()
return null},
$S:0}
C.eEt.prototype={
$1(d){return this.bo6(d)},
bo6(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
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
return B.b(t.a.KH(),$async$$1)
case 10:w=4
break
case 6:s=t.a
r=s.e
if(r==null){w=1
break}q=s.c
q.toString
w=11
return B.b(B.bU(A.as,null,new C.eEl(r),q,!0,!0,!1,null,!1,!1,x.S),$async$$1)
case 11:p=f
if(p!=null)s.dc(new C.eEm(r,p))
w=4
break
case 7:s=t.a
r=s.e
if(r==null){w=1
break}s.dc(new C.eEn(r))
s=s.c.L(x.q).f
s.T(B.b3(null,null,null,null,null,A.t,null,B.d(r.ay?"Video motion on \u2014 press Play to watch it like a video.":"Video motion off.",null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
w=4
break
case 8:s=t.a
r=s.e
if(r==null){w=1
break}s.dc(new C.eEo(r))
s=s.c.L(x.q).f
s.T(B.b3(null,null,null,null,null,A.t,null,B.d(r.ch?"Non-stop on \u2014 the show starts over after the last slide.":"Non-stop off \u2014 the show stops on the last slide.",null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
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
return B.b(C.hG0(q,new C.Fo(o,n,m,l==null?"":l)),$async$$1)
case 12:p=f
if(p==null||s.c==null){w=1
break}s.dc(new C.eEp(r,p))
s=s.c.L(x.q).f
q=p.a
if(q.length===0)q="No ending celebration."
else{q=C.aig(q)
q=B.w(q==null?null:q.b)+" will play after your last slide."}s.T(B.b3(null,null,null,null,null,A.t,null,B.d(q,null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
w=4
break
case 4:case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:94}
C.eEl.prototype={
$1(d){var w,v,u,t,s,r,q,p=null,o=B.a([D.etx],x.p)
for(w=[3,5,8,10,15,20,30,60],v=w.length,u=this.a,t=0;t<v;++t){s=w[t]
r=B.d(""+s+" seconds",p,p,p,p,p,p,A.dk,p,p,p)
q=u.e===s?D.bXI:p
o.push(B.dG(!1,p,p,p,!0,p,p,p,!0,p,p,p,p,p,p,p,new C.eEk(d,s),!1,p,p,p,p,p,p,p,r,p,q,p))}return B.bm(!0,B.x(o,A.l,p,A.e,A.P,0,A.p),!0,!1,A.ag,!0,!0)},
$S:25}
C.eEk.prototype={
$0(){B.a6(this.a,!1).O(this.b)
return null},
$S:0}
C.eEm.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eEn.prototype={
$0(){var w=this.a
return w.ay=!w.ay},
$S:0}
C.eEo.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
C.eEp.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.db=u.length===0?null:u
w.dx=v.b
w.dy=v.c
v=v.d
w.fr=v.length===0?null:v},
$S:0}
C.eEs.prototype={
$1(d){var w,v,u,t=null,s=this.a.e,r=s==null,q=r?t:s.e,p=x.N
q=B.Aq(B.d("Timer: "+(q==null?5:q)+"s",t,t,t,t,t,t,t,t,t,t),48,"timer",p)
w=r?t:s.ay
v=B.Aq(B.d("Video motion: "+(w===!0?"On":"Off"),t,t,t,t,t,t,t,t,t,t),48,"motion",p)
w=r?t:s.ch
u=B.Aq(B.d("Non-stop loop: "+(w===!0?"On":"Off"),t,t,t,t,t,t,t,t,t,t),48,"loop",p)
s=C.aig(r?t:s.db)
s=s==null?t:s.b
return B.a([D.ez3,q,v,u,B.Aq(B.d("Ending celebration: "+(s==null?"None":s),t,t,t,t,t,t,t,t,t,t),48,"finale",p)],x.gx)},
$S:135}
C.eII.prototype={
$0(){var w=this.a,v=w.e
if(v!=null){w=w.c
w.toString
C.bFJ(w,v)}},
$S:0}
C.eIJ.prototype={
$0(){this.a.Ea()
return null},
$S:0}
C.eFI.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.z===d,r=B.m(999),q=s?D.c7x:u
if(s)w=u
else w=this.b?A.c.j(0.05):A.cd
if(s)v=A.c
else v=this.b?A.aR:A.bw
return new B.D(A.fC,B.az(u,B.cT(u,B.d(d,u,u,u,u,u,u,B.l(u,u,v,u,u,u,u,u,u,u,u,12,u,u,A.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,A.b_,new B.p(w,u,u,r,u,q,A.n),A.eG,u,u,u,u,A.lK,u,u,u),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.eFH(t,d),u,u,u,u,u,u,!1,A.a4),u)},
$S:145}
C.eFH.prototype={
$0(){var w=this.a
return w.m(new C.eFG(w,this.b))},
$S:0}
C.eFG.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.eFJ.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.e
if(s==null)s=u
else{s=s.CW
s=(s==null?"":s).length!==0}w=s===!0
v=w?G.a64:E.aBk
s=w?"Tell the AI what to change or add":"Type it \u2014 AI creates the slides"
t=w?t.gbRn():t.gbNd()
return B.h6(B.az(u,B.q(u,D.ard,A.f,u,u,new B.p(u,u,u,u,B.a([new B.ab(0,A.G,A.d.gH(v).j(0.45),A.J,10)],x.V),new B.a8(A.a7,A.aa,A.x,v,u,u),A.a6),u,34,u,u,u,u,u,34),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,t,u,u,u,u,u,u,!1,A.a4),u,s,u,u)},
$S:1730}
C.eFK.prototype={
$0(){var w=this.a,v=w.c
v.toString
return C.itb(v,w.a.c)},
$S:0}
C.eH6.prototype={
$0(){return this.b.vT(this.a.a)},
$S:0}
C.eH7.prototype={
$0(){return this.a.vT(D.n8)},
$S:0}
C.eH8.prototype={
$0(){return this.a.vT(D.Jk)},
$S:0}
C.eHj.prototype={
$0(){return this.a.vT(D.Jl)},
$S:0}
C.eHu.prototype={
$0(){return this.a.vT(D.Jj)},
$S:0}
C.eHF.prototype={
$0(){return this.a.qG("lab_report")},
$S:0}
C.eHM.prototype={
$0(){return this.a.qG("rubric")},
$S:0}
C.eHN.prototype={
$0(){return this.a.qG("minutes")},
$S:0}
C.eHO.prototype={
$0(){return this.a.qG("agenda")},
$S:0}
C.eHP.prototype={
$0(){return this.a.qG("timeline")},
$S:0}
C.eHQ.prototype={
$0(){return this.a.qG(this.b.a)},
$S:0}
C.eH9.prototype={
$0(){this.a.WB()
return null},
$S:0}
C.eHa.prototype={
$0(){this.a.Wv()
return null},
$S:0}
C.eHb.prototype={
$0(){return this.a.qG("table")},
$S:0}
C.eHc.prototype={
$0(){return this.a.qG("sticky")},
$S:0}
C.eHd.prototype={
$0(){return this.a.qG("divider")},
$S:0}
C.eHe.prototype={
$0(){return this.a.qG("header_bar")},
$S:0}
C.eHf.prototype={
$0(){return this.a.pt(D.bm)},
$S:0}
C.eHg.prototype={
$0(){return this.a.pt(D.f1)},
$S:0}
C.eHh.prototype={
$0(){return this.a.pt(D.kd)},
$S:0}
C.eHi.prototype={
$0(){return this.a.pt(D.E1)},
$S:0}
C.eHk.prototype={
$0(){return this.a.pt(D.ke)},
$S:0}
C.eHl.prototype={
$0(){return this.a.pt(D.lt)},
$S:0}
C.eHm.prototype={
$0(){return this.a.pt(D.fO)},
$S:0}
C.eHn.prototype={
$0(){this.a.HU()
return null},
$S:0}
C.eHo.prototype={
$0(){this.a.O1()
return null},
$S:0}
C.eHp.prototype={
$0(){return this.a.qG("quote")},
$S:0}
C.eHq.prototype={
$0(){return this.a.a9t()},
$S:0}
C.eHr.prototype={
$0(){this.a.a0Q()
return null},
$S:0}
C.eHs.prototype={
$0(){var w=this.a
return w.m(new C.eGX(w))},
$S:0}
C.eGX.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.eHt.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return B.b(s.ot(),$async$$0)
case 3:if(!e){w=1
break}if(s.c==null){w=1
break}s.m(new C.eH4(s))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eH4.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.eHv.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=r.e
q=q==null?s:q.c
w=d.a
v=q===w&&r.kd()==null&&!r.Q
q=A.a.i(w)
w=d.b
if(D.aa7.q(0,q))w+=" (Pro)"
u=d.r
if(u==null)u=d.c
u=B.a([d.f,u],x.O)
t=v?d.c:A.aT
u=B.a([B.q(s,s,A.f,s,s,new B.p(s,s,B.L(t,A.r,v?2.5:1),s,s,new B.a8(A.a7,A.aa,A.x,u,s,s),A.a6),s,26,s,s,s,s,s,26)],x.p)
if(D.aa7.q(0,q))u.push(B.ap(s,B.q(s,D.PS,A.f,s,s,D.Fm,s,12,s,s,s,s,s,12),s,s,s,-2,-2,s))
return new B.D(A.fC,B.az(s,B.h6(new B.an(A.a0,s,A.ac,A.f,u,s),s,w,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.eH3(r,d),s,s,s,s,s,s,!1,A.a4),s)},
$S:z+90}
C.eH3.prototype={
$0(){this.a.a9J(this.b)
return null},
$S:0}
C.eHw.prototype={
$0(){this.a.a9I(this.b)
return null},
$S:0}
C.eHx.prototype={
$1(d){var w,v,u,t,s,r=null,q=C.hY7(d),p=this.a,o=B.m(8),n=p.gdB()
n=n==null?r:n.x
w=d.a
n=n===w?A.bn:A.aT
v=p.gdB()
n=B.L(n,A.r,(v==null?r:v.x)===w?2.5:1)
u=B.m(8)
t=B.m(7)
s=C.t_(4294967295,r,0,0,r,"preview_"+w,D.r0,"","","",D.ds)
C.hCN(s,w)
w=x.p
u=B.a([B.bw(o,B.q(r,B.bw(t,C.hE8(s),A.aq),A.f,r,r,new B.p(r,r,n,u,r,r,A.n),r,44,r,r,r,r,r,72),A.aq)],w)
if(q)u.push(B.ap(r,B.q(r,D.arQ,A.f,r,r,D.Fm,r,14,r,r,r,r,r,14),r,r,r,2,2,r))
return new B.D(A.iP,B.az(r,B.x(B.a([new B.an(A.a0,r,A.ac,A.t,u,r),A.cS,B.d(d.b,r,r,r,r,r,r,B.l(r,r,this.b?A.aD:A.an,r,r,r,r,r,r,r,r,9,r,r,A.U,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],w),A.l,r,A.e,A.j,0,A.p),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.eH2(p,q,d),r,r,r,r,r,r,!1,A.a4),r)},
$S:z+91}
C.eH2.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.gdB()
if(r==null){w=1
break}q=t.b||s.Q
if(q){w=3
break}else e=q
w=4
break
case 3:w=5
return B.b(s.ot(),$async$$0)
case 5:e=!e
case 4:if(e){w=1
break}if(s.c==null){w=1
break}s.dc(new C.eGT(r,t.c))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eGT.prototype={
$0(){return C.hCN(this.a,this.b.a)},
$S:0}
C.eH5.prototype={
bo7(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$$2=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=!D.aa5.q(0,d)
if(s){w=3
break}else g=s
w=4
break
case 3:w=5
return B.b(t.a.ot(),$async$$2)
case 5:g=!g
case 4:if(g){w=1
break}if(t.a.c==null){w=1
break}e.$0()
case 1:return B.h(u,v)}})
return B.i($async$$2,v)},
$2(d,e){return this.bo7(d,e)},
$S:z+92}
C.eHR.prototype={
$4(d,e,f,g){var w=null,v=B.U(d).k("N<1,v>")
v=B.C(new B.N(d,new C.eHT(this.a,e,g,this.b,f),v),v.k("ak.E"))
return B.ce(B.A(v,A.l,w,A.e,A.j,0,w,w),A.t,w,A.y,w,w,w,w,A.aL)},
$S:z+93}
C.eHT.prototype={
$1(d){var w=this
return w.a.bb6(d,w.b===d,w.c,w.d,new C.eHS(w.e,d),!D.aa5.q(0,d))},
$S:z+25}
C.eHS.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eHy.prototype={
$1(d){this.b.$2(d,new C.eH1(this.a,d,this.c))
return null},
$S:z+26}
C.eH1.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.bGx(u,new C.eGS(v,this.c,w),w)},
$S:0}
C.eGS.prototype={
$0(){return this.a.dc(new C.eGQ(this.b,this.c))},
$S:0}
C.eGQ.prototype={
$0(){return this.a.dy=this.b},
$S:0}
C.eHz.prototype={
$1(d){this.b.$2(d,new C.eH0(this.a,d))
return null},
$S:z+26}
C.eH0.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.h3U(u,new C.eGR(v,w),w)},
$S:0}
C.eGR.prototype={
$0(){var w=this.a
return w.dc(new C.eGP(w,this.b))},
$S:0}
C.eGP.prototype={
$0(){return this.a.gdB().r=this.b},
$S:0}
C.eHA.prototype={
$0(){var w=this.a
return w.m(new C.eH_(w))},
$S:0}
C.eH_.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
C.eHB.prototype={
$0(){var w=this.a,v=w.e
if(v!=null){w=w.c
w.toString
C.bFJ(w,v)}},
$S:0}
C.eHC.prototype={
$0(){this.a.IG()
return null},
$S:0}
C.eHD.prototype={
$0(){return this.a.a9t()},
$S:0}
C.eHE.prototype={
$0(){var w=this.a,v=w.kd()
if(v!=null&&v.b===D.d_)w.dc(new C.eGZ(v))},
$S:0}
C.eGZ.prototype={
$0(){var w=this.a
w.f=A.i.D(w.f*1.25,0.08,1.8)
w.e=A.i.D(w.e*1.1,0.08,1.8)},
$S:0}
C.eHG.prototype={
$0(){this.a.Ea()
return null},
$S:0}
C.eHH.prototype={
$0(){var w=this.a,v=w.e
v.toString
w.FR(v,!0)
return null},
$S:0}
C.eHI.prototype={
$0(){this.a.dc(new C.eGY(this.b))},
$S:0}
C.eGY.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.U)?A.cE:A.U},
$S:0}
C.eHJ.prototype={
$0(){this.a.dc(new C.eGW(this.b))},
$S:0}
C.eGW.prototype={
$0(){var w=this.a
return w.y=w.y===A.cK?A.bt:A.cK},
$S:0}
C.eHK.prototype={
$0(){this.a.dc(new C.eGV(this.b))},
$S:0}
C.eGV.prototype={
$0(){var w=this.a,v=w.z
return w.z=1===v.a?A.aH:A.nd},
$S:0}
C.eHL.prototype={
$0(){this.a.dc(new C.eGU(this.b))},
$S:0}
C.eGU.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
C.eDu.prototype={
$1(d){return this.bo4(d)},
bo4(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.b
if(r){w=3
break}else f=r
w=4
break
case 3:w=5
return B.b(t.a.ot(),$async$$1)
case 5:f=!f
case 4:if(f){w=1
break}s=t.a
if(s.c==null){w=1
break}s.dc(new C.eDt(s,t.c))
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:206}
C.eDt.prototype={
$0(){return this.a.e.d=this.b},
$S:0}
C.eId.prototype={
$0(){var w=this.a
return w.dc(new C.eIc(w,this.b))},
$S:0}
C.eIc.prototype={
$0(){var w,v=this.b,u=v.w
if(!(u>0)){w=this.a.e
w=w==null?null:w.e
u=w==null?5:w}v.w=A.o.D(u-1,1,120)},
$S:0}
C.eIe.prototype={
$0(){var w=this.a
return w.dc(new C.eIb(w,this.b))},
$S:0}
C.eIb.prototype={
$0(){var w,v=this.b,u=v.w
if(!(u>0)){w=this.a.e
w=w==null?null:w.e
u=w==null?5:w}v.w=A.o.D(u+1,1,120)},
$S:0}
C.eED.prototype={
$0(){return this.a.dc(new C.eEC(this.b))},
$S:0}
C.eEC.prototype={
$0(){var w=this.a
return w.w=A.i.D(w.w-2,10,96)},
$S:0}
C.eEE.prototype={
$0(){return this.a.dc(new C.eEB(this.b))},
$S:0}
C.eEB.prototype={
$0(){var w=this.a
return w.w=A.i.D(w.w+2,10,96)},
$S:0}
C.eFa.prototype={
$1(d){var w=x.gh
w=B.C(new B.N(D.atw,new C.eF9(),w),w.k("ak.E"))
return w},
$S:z+95}
C.eF9.prototype={
$1(d){var w=null
return B.Aq(B.d(d.b,w,w,w,w,w,w,A.lW,w,w,w),48,d,x.fO)},
$S:z+96}
C.eIq.prototype={
$2(d,e){var w=this.a,v=w?0:8
return new B.a5(v,w?8:0,null,null)},
$S:37}
C.eIp.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=null,p=r.a,o=e===p.f,n=p.kz()?q:new C.eIn(p,r.b,d,e),m=r.c,l=m?1/0:112
m=m?72:64
w=B.m(8)
if(o)v=A.bn
else v=r.d?A.aT:A.cx
v=B.L(v,A.r,o?2:1)
u=r.d?A.cl:A.c
t=B.bS(0,C.hE8(r.b.r[e]),0,0,0)
s=B.m(4)
return B.az(q,B.q(q,new B.an(A.a0,q,A.ac,A.t,B.a([t,B.ap(4,B.q(q,B.d(""+(e+1),q,q,q,q,q,q,A.nW,q,q,q),A.f,q,q,new B.p(A.b6,q,q,s,q,q,A.n),q,q,q,q,A.an4,q,q,q),q,q,4,q,q,q)],x.p),q),A.f,q,q,new B.p(u,q,v,w,q,q,A.n),q,m,q,q,q,q,q,l),A.y,!1,q,q,q,q,q,q,q,q,n,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.eIo(p,e),q,q,q,q,q,q,!1,A.a4)},
$S:82}
C.eIo.prototype={
$0(){var w=this.a
return w.m(new C.eIj(w,this.b))},
$S:0}
C.eIj.prototype={
$0(){var w=this.a
w.f=this.b
w.r=null
w.KQ()},
$S:0}
C.eIn.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.b
if(q.r.length<=1){w=1
break}s=t.d
w=3
return B.b(B.bU(null,null,new C.eIk(s,q),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:r=e
if(r==="dup"){q=t.a
q.m(new C.eIl(q,s))
q.aUt()}else if(r==="del"){q=t.a
q.m(new C.eIm(q,s))
q.aTz()}else if(r==="up")t.a.b67(s,s-1)
else if(r==="down")t.a.b67(s,s+1)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eIk.prototype={
$1(d){var w=null,v=B.a([B.dG(!1,w,w,w,!0,w,w,w,!0,w,w,D.bZt,w,w,w,w,new C.eIf(d),!1,w,w,w,w,w,w,w,D.fGO,w,w,w),B.dG(!1,w,w,w,!0,w,w,w,!0,w,w,D.bZm,w,w,w,w,new C.eIg(d),!1,w,w,w,w,w,w,w,A.xp,w,w,w)],x.p),u=this.a
if(u>0)v.push(B.dG(!1,w,w,w,!0,w,w,w,!0,w,w,D.bYB,w,w,w,w,new C.eIh(d),!1,w,w,w,w,w,w,w,D.fPc,w,w,w))
if(u<this.b.r.length-1)v.push(B.dG(!1,w,w,w,!0,w,w,w,!0,w,w,D.c_L,w,w,w,w,new C.eIi(d),!1,w,w,w,w,w,w,w,D.fGC,w,w,w))
return B.bm(!0,B.x(v,A.l,w,A.e,A.P,0,A.p),!0,!1,A.ag,!0,!0)},
$S:25}
C.eIf.prototype={
$0(){B.a6(this.a,!1).O("dup")
return null},
$S:0}
C.eIg.prototype={
$0(){B.a6(this.a,!1).O("del")
return null},
$S:0}
C.eIh.prototype={
$0(){B.a6(this.a,!1).O("up")
return null},
$S:0}
C.eIi.prototype={
$0(){B.a6(this.a,!1).O("down")
return null},
$S:0}
C.eIl.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eIm.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eIr.prototype={
$0(){return this.a.a9t()},
$S:0}
C.eDV.prototype={
$0(){var w=this.a
w.b9F()
w.aC4(null)},
$S:0}
C.eDU.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=B.m(4),n=B.a([new B.ab(0,A.G,A.w.j(0.35),A.dp,24)],x.V),m=this.b
if(m.f!=null){w=B.b0(m.e)
v=m.f
v.toString
v=new B.a8(A.aA,A.aF,A.x,B.a([w,B.b0(v)],x.O),p,p)
w=v}else w=p
v=m.f==null?B.b0(m.e):p
u=m.x
t=m.y
s=B.m(4)
if(m.f!=null){r=B.b0(m.e)
q=m.f
q.toString
q=new B.a8(A.aA,A.aF,A.x,B.a([r,B.b0(q)],x.O),p,p)
r=q}else r=p
s=B.a([B.bw(s,new B.bN(new B.p(m.f==null?B.b0(m.e):p,p,p,p,p,r,A.n),A.bj,A.l3,p),A.aq)],x.p)
r=m.z
q=this.c
A.d.v(s,new B.N(r,new C.eDT(this.a,e.b,e.d,q),B.U(r).k("N<1,v>")))
if(m.z.length===0)s.push(B.as(B.d("Use Insert \u2192 Text Box, Picture, or Shapes",p,p,p,p,p,p,B.l(p,p,q?A.aD:A.bN,p,p,p,p,p,p,p,p,p,p,p,A.a8,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p))
return new B.bN(new B.p(v,p,p,o,n,w,A.n),A.bj,new B.an(A.a0,p,A.ac,A.f,s,new B.bA("canvas_"+m.a+"_"+u+"_"+t,x.W)),p)},
$S:456}
C.eDT.prototype={
$1(d){var w=this
return w.a.bJa(d,w.b,w.c,w.d)},
$S:z+23}
C.eDI.prototype={
$0(){var w=this
if(w.b){w.a.O9(w.c)
return}if(w.d){w.a.a9r(w.c)
return}if(w.e){w.a.ai5(w.c)
return}if(w.f)w.a.bad(w.c)},
$S:0}
C.eDJ.prototype={
$0(){this.a.O9(this.b)
return null},
$S:0}
C.eDK.prototype={
$0(){return this.a.a3d(this.b.a)},
$S:0}
C.eDL.prototype={
$1(d){var w=this,v=w.a,u=w.b
if(v.w===u.a)return
v.m(new C.eDH(u,d,w.c,w.d))
v.Ik()
v.oF()
v.pM()},
$S:19}
C.eDH.prototype={
$0(){var w=this,v=w.a,u=w.b.d
v.c=A.i.D(v.c+u.a/w.c,-0.3,1.2)
v.d=A.i.D(v.d+u.b/w.d,-0.3,1.2)},
$S:0}
C.eDM.prototype={
$1(d){return this.a.aky(this.b.a,d)},
$S:2}
C.eDO.prototype={
$0(){var w,v,u=this
if(u.b){w=u.c
if(!C.hgH(w))u.a.O9(w)
return}if(!u.d)return
w=u.a
v=u.c
if(w.w===v.a)return
w.bad(v)},
$S:0}
C.eDN.prototype={
$0(){return this.a.a3d(this.b.a)},
$S:0}
C.eDP.prototype={
$1(d){var w=this,v=w.a
v.m(new C.eDG(w.b,d,w.c,w.d))
v.Ik()
v.oF()
v.pM()},
$S:19}
C.eDG.prototype={
$0(){var w=this,v=w.a,u=w.b.d
v.e=A.i.D(v.e+u.a/w.c,0.04,1.8)
u=u.b
v.f=A.i.D(v.f+u/w.d,0.04,1.8)
if(v.b===D.d_)v.w=A.i.D(v.w+u*0.15,10,120)},
$S:0}
C.eDQ.prototype={
$1(d){var w=this.a
w.m(new C.eDF(this.b,d))
w.Ik()
w.oF()
w.pM()},
$S:221}
C.eDF.prototype={
$0(){var w=this.a,v=this.b.d
w.e=A.i.D(w.e*v,0.04,1.8)
w.f=A.i.D(w.f*v,0.04,1.8)
if(w.b===D.d_)w.w=A.i.D(w.w*v,10,120)},
$S:0}
C.eDR.prototype={
$0(){var w=this.a
w.m(new C.eDE(this.b))
w.Ik()
w.oF()
w.pM()},
$S:0}
C.eDE.prototype={
$0(){this.a.r=C.hDC()},
$S:0}
C.eDS.prototype={
$0(){return this.a.a3d(this.b.a)},
$S:0}
C.eFM.prototype={
$0(){var w=this.a
return w.m(new C.eFL(w))},
$S:0}
C.eFL.prototype={
$0(){return this.a.y=!1},
$S:0}
C.eFN.prototype={
$1(d){return this.a.cIp(this.b.a,d)},
$S:2}
C.eER.prototype={
$1(d){var w
this.a.dc(d)
w=this.b
if(w!=null)w.$0()},
$S:172}
C.eES.prototype={
$1(d){return this.a.$1(new C.eEQ(this.b,d))},
$S:6}
C.eEQ.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eET.prototype={
$1(d){return this.a.$1(new C.eEP(this.b,d))},
$S:6}
C.eEP.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eEU.prototype={
$1(d){return this.a.$1(new C.eEO(this.b,d))},
$S:6}
C.eEO.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.eEV.prototype={
$1(d){return this.a.$1(new C.eEN(this.b,d))},
$S:6}
C.eEN.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.eEW.prototype={
$1(d){return this.a.$1(new C.eEM(this.b,d))},
$S:6}
C.eEM.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eEX.prototype={
$1(d){return this.b.$1(new C.eEL(this.a,this.c))},
$S:9}
C.eEL.prototype={
$0(){return this.b.go=this.a.a},
$S:0}
C.eEY.prototype={
$1(d){return this.b.$1(new C.eEK(this.a,this.c))},
$S:9}
C.eEK.prototype={
$0(){return this.b.id=this.a.a},
$S:0}
C.eEZ.prototype={
$1(d){var w=null,v=this.b,u=B.b0(d),t=v.Q===d,s=t?A.bn:A.cz
return B.az(w,B.q(w,w,A.f,w,w,new B.p(u,w,B.L(s,A.r,t?2:1),w,w,w,A.a6),w,24,w,w,w,w,w,24),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eEJ(this.a,v,d),w,w,w,w,w,w,!1,A.a4)},
$S:453}
C.eEJ.prototype={
$0(){return this.a.$1(new C.eEG(this.b,this.c))},
$S:0}
C.eEG.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.eF_.prototype={
$1(d){return this.a.$1(new C.eEI(this.b,d))},
$S:1731}
C.eEI.prototype={
$0(){var w=this.b
return this.a.as=w.gH(w)},
$S:0}
C.eF0.prototype={
$1(d){var w=null
return B.az(w,B.q(w,w,A.f,w,w,new B.p(B.b0(d),w,w,w,w,w,A.a6),w,22,w,w,w,w,w,22),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eEH(this.a,this.b,d),w,w,w,w,w,w,!1,A.a4)},
$S:453}
C.eEH.prototype={
$0(){return this.a.$1(new C.eEF(this.b,this.c))},
$S:0}
C.eEF.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.eF1.prototype={
$0(){var w,v=this
if(v.b){w=v.a.c
w.toString
w=B.a6(w,!1).pZ()}else w=!1
if(w){w=v.a.c
w.toString
B.a6(w,!1).eA()}v.a.auw()},
$S:0}
C.eF4.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.a.fy
k===$&&B.c()
k=k.x
k===$&&B.c()
w=A.dG.aA(0,k)
k=B.m(16)
v=B.m(16)
u=B.P(d).ax.a===A.dm?A.b1:A.aA
t=B.P(d).ax.a===A.dm?A.b7:A.aF
if(B.P(d).ax.a===A.dm)s=D.d3x
else{s=m.c
r=B.ar(s,A.aZ,0.35+w*0.15)
r.toString
r=B.a([s,r],x.O)
s=r}r=B.L(A.c.j(0.3+w*0.2),A.r,1.2)
q=B.a([B.X(m.d,A.c,l,l,l,26)],x.p)
p=B.m(6)
o=m.c
n=B.L(o,A.r,1.2)
q.push(B.ap(2,B.q(l,B.X(A.v1,o,l,l,l,10),A.f,l,l,new B.p(A.c,l,n,p,l,l,A.n),l,l,l,l,A.nI,l,l,l),l,l,l,2,l,l))
return B.aH(!1,A.a3,!0,l,B.aP(!1,k,!0,B.ez(new B.a5(48,48,new B.an(A.A,l,A.ac,A.t,q,l),l),l,new B.p(l,l,r,v,l,new B.a8(u,t,A.x,s,l,l),A.n),l,l,l),l,!0,l,l,l,l,l,l,l,l,l,l,l,m.b,l,l,l,l,l,l,l),A.f,A.L,0,l,A.L,l,l,l,A.aj)},
$S:147}
C.eCD.prototype={
$2(d,e){var w,v,u,t,s,r,q=this,p=null,o=q.a.fy
o===$&&B.c()
o=o.x
o===$&&B.c()
w=A.dG.aA(0,o)
o=B.m(22)
v=B.m(22)
u=q.c
t=B.ar(u,A.aZ,0.22+w*0.12)
t.toString
u=B.a([u,t,u.j(0.9)],x.O)
t=B.L(A.c.j(0.28+w*0.22),A.r,1.35)
s=A.c.j(0.14+w*0.08)
r=B.L(A.c.j(0.4+w*0.15),A.r,1)
return B.aH(!1,A.a3,!0,p,B.aP(!1,o,!0,B.ez(B.x(B.a([B.e1(A.A,B.q(p,B.X(q.d,A.c,p,p,p,26),A.f,p,p,new B.p(s,p,r,p,p,p,A.a6),p,48,p,p,p,p,p,48),1+w*0.06,p,p),A.ae,B.d(q.e,p,p,p,p,p,p,A.jd,A.K,p,p)],x.p),A.l,p,A.ba,A.j,0,A.p),p,new B.p(p,p,t,v,p,new B.a8(A.aA,A.aF,A.x,u,p,p),A.n),p,A.Cp,1/0),p,!0,p,p,p,p,p,p,p,p,p,p,p,q.b,p,p,p,p,p,p,p),A.f,A.L,0,p,A.L,p,p,p,A.aj)},
$S:147}
C.eGJ.prototype={
$1(d){var w=null,v=B.d(this.a,w,w,w,w,w,w,w,w,w,w),u=this.b,t=B.aM(w,A.Z,!0,w,!0,A.t,w,B.aO(),u,w,w,w,w,w,2,A.asH,A.y,!0,w,!0,w,!1,w,A.ak,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,A.ad,w,w,w,w,w,w,w,w,w,w,w,w,!0,A.a5,w,A.ao,w,w,w,w)
return B.eg(B.a([B.bO(!1,A.dt,w,w,!0,w,w,w,new C.eGH(d),w,w),B.bJ(A.rd,w,new C.eGI(d,u),w)],x.p),w,w,w,t,w,w,w,w,v,w)},
$S:18}
C.eGH.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.eGI.prototype={
$0(){var w=this.b.a.a
B.a6(this.a,!1).O(w)
return null},
$S:0}
C.daC.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=this.a,h=i.d
h===$&&B.c()
h=h.x
h===$&&B.c()
w=A.dG.aA(0,h)
h=i.e
h===$&&B.c()
v=h.x
v===$&&B.c()
u=A.e2.aA(0,A.i.D(v,0,1))
h=h.x
h===$&&B.c()
h=A.dK.aA(0,h)
v=B.m(22)
t=B.ar(A.aM,A.d.gH(C.kN(i.a.c.w)?D.ve:L.nM),w*0.35)
t.toString
t=B.L(t,A.r,1.2)
s=x.V
r=B.a([new B.ab(w*2,A.G,A.d.gH(C.kN(i.a.c.w)?D.ve:L.nM).j(0.18+w*0.12),A.J,32+w*10),D.aeO],s)
q=B.m(22)
p=x.O
o=B.ap(j,B.q(j,j,A.f,j,j,new B.p(j,j,j,j,j,new B.bY(A.b1,0.9,A.x,j,0,B.a([A.d.gH(C.kN(i.a.c.w)?D.ve:L.nM).j(0.22+w*0.1),A.L],p),j,j),A.n),j,80,j,j,j,j,j,j),j,j,0,0,-28,j)
n=64+w*6
m=A.d.gH(C.kN(i.a.c.w)?D.ve:L.nM).j(0.28+w*0.14)
p=B.q(j,j,A.f,j,j,new B.p(j,j,j,j,j,new B.bY(A.A,0.5,A.x,j,0,B.a([m,A.d.gan(C.kN(i.a.c.w)?D.ve:L.nM).j(0.08),A.L],p),j,j),A.a6),j,n,j,j,j,j,j,n)
n=B.m(14)
m=i.a.c.w
l=C.kN(m)?D.ve:L.nM
s=B.a([new B.ab(0,A.G,A.d.gH(C.kN(m)?D.ve:L.nM).j(0.45+w*0.2),A.cC,18)],s)
m=x.p
l=B.a([p,B.e1(A.A,B.q(j,B.X(C.kN(i.a.c.w)?A.wE:A.qP,A.c,j,j,j,22),A.f,j,j,new B.p(j,j,j,n,s,new B.a8(A.aA,A.aF,A.x,l,j,j),A.n),j,46,j,j,j,j,j,46),1+w*0.04,j,j)],m)
s=B.a([new B.an(A.A,j,A.ac,A.t,l,j),A.W,B.d("PRESENTATION",j,j,j,j,j,j,B.l(j,j,A.d.gH(C.kN(i.a.c.w)?D.ve:L.nM).j(0.85+w*0.15),j,j,j,j,j,j,j,j,10,j,j,A.I,j,j,!0,j,1.4,j,j,j,j,j,j),A.K,j,j),A.fD,B.d(i.a.c.b,j,2,A.a2,j,j,j,D.fyn,A.K,j,j),A.aw,B.d(i.gcDd(),j,j,j,j,j,j,D.fDo,A.K,j,j),A.aB],m)
p=i.a.c
if(p.z){p=p.gTb()?"Shared by admin \xb7 editable for 4 hours":"Received copy \xb7 print or download only"
A.d.v(s,B.a([B.d(p,j,j,j,j,j,j,B.l(j,j,A.d.gH(C.kN(i.a.c.w)?D.ve:L.nM).j(0.9),j,j,j,j,j,j,j,j,11,j,j,A.U,j,j,!0,j,j,j,j,j,j,j,j),A.K,j,j),A.ae],m))}s.push(new C.KM(A.za,"Download PDF","pdf",A.d7,i.JE(0),!1,j))
p=i.a.c
if(!p.z||p.gTb()){p=i.a.c.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"}else p=!1
if(p){p=i.a.c.w
A.d.v(s,B.a([A.am,new C.KM(A.jL,"Transfer to "+C.hDE(p==null?"":p),"transfer_hati",A.aV,i.JE(1),!1,j)],m))}p=i.a.c
if(!p.z){p=p.w
n=i.JE(p==="hati_kuhowa"||p==="hati_kuhoweya"?2:1)
p=i.a.c.w
A.d.v(s,B.a([A.am,new C.KM(D.bQX,"Rename presentation","rename",A.ch,n,!1,j),A.am,new C.KM(A.aoZ,"Duplicate","duplicate",A.b8,i.JE(p==="hati_kuhowa"||p==="hati_kuhoweya"?3:2),!1,j)],m))}p=i.a
n=p.c
l=n.w
k=l==="hati_kiapo_uongozi"
if(!k||p.e){p=k?"Delete for everyone":"Delete presentation"
if(n.z)n=1
else n=l==="hati_kuhowa"||l==="hati_kuhoweya"?4:3
A.d.v(s,B.a([A.T,new C.KM(A.ej,p,"delete",A.ay,i.JE(n),!0,j)],m))}s.push(A.aw)
p=i.a.c
if(p.z)p=2
else{p=p.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"?5:4}p=i.JE(p)
n=i.a.c
if(n.z)n=2
else{n=n.w
n=n==="hati_kuhowa"||n==="hati_kuhoweya"?5:4}n=i.JE(n)
s.push(B.dN(B.d3(B.bO(!1,E.aWX,j,j,!0,j,j,j,new C.daB(d),j,B.fv(j,j,j,j,j,j,j,j,j,j,j,A.bN,j,j,j,A.az,j,D.bFJ,j,j,j,j,j,A.kC,j,j)),n),new B.o(0,(1-p)*8)))
return B.e1(A.A,B.d3(B.aH(!1,A.a3,!0,j,B.q(j,B.bw(q,new B.an(A.a0,j,A.ac,A.t,B.a([o,new B.D(D.bET,B.x(s,A.l,j,A.e,A.P,0,A.p),j)],m),j),A.aq),A.f,j,A.XA,new B.p(A.as,j,t,v,r,j,A.n),j,j,j,j,j,j,j,j),A.f,A.L,0,j,j,j,j,j,A.aj),h),0.88+u*0.12,j,j)},
$S:45}
C.daB.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.db_.prototype={
$0(){B.a6(this.a,!1).O(!1)
return null},
$S:0}
C.db0.prototype={
$0(){B.a6(this.a,!1).O(!0)
return null},
$S:0}
C.daz.prototype={
$1(d){var w=this.a
return w.m(new C.dav(w))},
$S:22}
C.dav.prototype={
$0(){return this.a.d=!0},
$S:0}
C.daA.prototype={
$1(d){var w=this.a
return w.m(new C.dau(w))},
$S:65}
C.dau.prototype={
$0(){return this.a.d=!1},
$S:0}
C.day.prototype={
$0(){var w=this.a
return w.m(new C.daw(w))},
$S:0}
C.daw.prototype={
$0(){return this.a.d=!1},
$S:0}
C.dax.prototype={
$0(){var w=this.a.a.e
B.a6(this.b,!1).O(w)
return null},
$S:0}
C.eJo.prototype={
$0(){return $.bn5=!$.bn5},
$S:0}
C.eJe.prototype={
$0(){var w,v,u=this.a
if(u.c==null||!u.r)return
w=u.d
w===$&&B.c()
v=u.a.c
if(w<v.r.length-1||v.ch||u.gaXI())u.azF()},
$S:0}
C.eJn.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.eJf.prototype={
$0(){return this.a.y=!0},
$S:0}
C.eJg.prototype={
$0(){var w=this.a
if(w.c!=null&&w.y)w.azF()},
$S:0}
C.eJa.prototype={
$0(){var w=this.a
w.y=!1
w.e=A.d.gH(w.a.c.r).r
w.d=0},
$S:0}
C.eJb.prototype={
$0(){var w=this.a,v=this.b
w.e=w.a.c.r[v].r
w.d=v},
$S:0}
C.eJc.prototype={
$0(){return this.a.y=!1},
$S:0}
C.eJd.prototype={
$0(){var w,v,u=this.a
u.e=u.a.c.r[this.b].r
w=u.d
w===$&&B.c()
v=this.c
u.d=A.o.F(w-1+v,v)},
$S:0}
C.eJl.prototype={
$2(d,e){var w=B.C(e,x.l)
if(d!=null)w.push(d)
return new B.an(A.A,null,A.b0,A.t,w,null)},
$S:1732}
C.eJm.prototype={
$2(d,e){var w
if(e.gc4(e)===A.it)return new B.d1(e,!1,d,null)
w=this.a
return w.cB7(w.e,d,e)},
$S:460}
C.eJh.prototype={
$2(d,e){var w=B.dr(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
v=this.a
w.fL((1-v.gp(0))*1.5708)
return B.fz(A.A,B.d3(e,v.gp(0)),null,w,!0)},
$S:45}
C.eJi.prototype={
$2(d,e){var w=B.dr(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
v=this.a
w.kn((1-v.gp(0))*1.5708)
return B.fz(A.A,B.d3(e,v.gp(0)),null,w,!0)},
$S:45}
C.eJj.prototype={
$2(d,e){var w=B.dr(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.002
v=this.a
w.fL(v.gp(0)*0.8)
w.kn(v.gp(0)*0.35)
return B.fz(A.A,B.d3(e,v.gp(0)),null,w,!0)},
$S:45}
C.eJk.prototype={
$2(d,e){var w=B.dr(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.0025
v=this.a
w.fL(-v.gp(0)*1.2)
return B.fz(A.aa,B.d3(e,v.gp(0)),null,w,!0)},
$S:45}
C.eJp.prototype={
$2(d,e){var w,v=this,u=v.b,t=u==null
if(!t){w=v.a.gZT().r
w=w!=null&&w.a!=null}else w=!1
if(w){t=v.a
u=t.a.c.r[u]
t=t.gZT().x
t===$&&B.c()
return new C.b3x(u,v.c,t,null)}u=v.a.d
u===$&&B.c()
return new C.JK(v.c,t,!0,new B.bA("cine"+u,x.W))},
$S:670}
C.eJr.prototype={
$1(d){var w=this.a
if(d.b.a>B.aF(this.b,A.c1,x.w).w.a.a*0.55)w.azF()
else w.cpr()},
$S:65}
C.eJq.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.fUU.prototype={
$4(d,e,f,g){var w=this.b
A.d.a8(w)
A.d.v(w,d)
w=this.a
w.a=e
w.b=f
w.c=g},
$S:461}
C.fV2.prototype={
$1(d){var w=null,v=this.a,u=v.r.length,t=u===1?"":"s"
t=B.d("Download a PDF that looks like your slides ("+u+" page"+t+"), or open the print view in your browser.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.75),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return B.eg(B.a([B.bO(!1,A.dt,w,w,!0,w,w,w,new C.fV_(d),w,w),B.bO(!1,D.fWP,w,w,!0,w,w,w,new C.fV0(d,this.b,v),w,w),B.bJ(A.aXf,w,new C.fV1(d,v,this.c),w)],x.p),w,w,O.uk,new B.a5(320,w,t,w),w,w,w,w,D.fYl,w)},
$S:18}
C.fV_.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.fV0.prototype={
$0(){var w=0,v=B.j(x.H),u=this
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:B.a6(u.a,!1).O(null)
C.hhl(u.b,u.c.b)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fV1.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:B.a6(u.a,!1).O(null)
t=u.b
w=2
return B.b(C.aSd(t),$async$$0)
case 2:s=e
r=u.c
w=r.e!=null?3:4
break
case 3:w=5
return B.b(C.aRF(r,s,t.b),$async$$0)
case 5:case 4:return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fUT.prototype={
$1(d){return d.a!==this.a.a},
$S:z+2}
C.cle.prototype={
$2(d,e){var w
if(x.f.b(e)){w=J.t(e,"bundleId")
w=J.k(w==null?"":w)===this.a}else w=!1
return w},
$S:544}
C.fUZ.prototype={
$1(d){return d.aj()},
$S:z+21}
C.fq0.prototype={
$1(d){return C.hhj(C.Xh(B.a2(d,x.N,x.z)),this.a)},
$S:z+97}
C.h39.prototype={
$3(d,e,f){return A.bM},
$C:"$3",
$R:3,
$S:86}
C.h3a.prototype={
$4(d,e,f,g){var w=A.cw.aA(0,e.gp(0))
return B.d3(B.e1(A.A,D.hz1,0.94+w*0.06,null,null),w)},
$S:246}
C.h3b.prototype={
$1(d){var w=this
return new C.Xj(w.a,w.b,w.c,w.d,null)},
$S:z+98}
C.eIV.prototype={
$2(d,e){return d+e.r.length},
$S:z+13}
C.eIR.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.eIU.prototype={
$1(d){var w=this.a,v=w.a,u=v.c
v=v.f
return new C.Xk(u,this.b,w.gaQM(),v,null)},
$S:z+100}
C.eIS.prototype={
$0(){return this.a.f=!0},
$S:0}
C.eIT.prototype={
$0(){return this.a.f=!1},
$S:0}
C.eIW.prototype={
$0(){return this.a.f=!0},
$S:0}
C.eIX.prototype={
$0(){return this.a.f=!1},
$S:0}
C.eJ_.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.eJ0.prototype={
$0(){var w=this.a
return w.m(new C.eIZ(w))},
$S:0}
C.eIZ.prototype={
$0(){return this.a.d="one"},
$S:0}
C.eJ1.prototype={
$0(){var w=this.a
return w.m(new C.eIY(w))},
$S:0}
C.eIY.prototype={
$0(){return this.a.d="all"},
$S:0}
C.eJ2.prototype={
$1(d){return this.a.bNO(d,this.b)},
$S:z+101}
C.eIQ.prototype={
$0(){var w=this.a
return w.m(new C.eIP(w,this.b))},
$S:0}
C.eIP.prototype={
$0(){return this.a.e=this.b.a},
$S:0}
C.eJ3.prototype={
$0(){var w=this.a,v=this.b
w.d=v.b
w.e=v.a},
$S:0}
C.eJ4.prototype={
$0(){return this.a.f="Could not create QR. Check your connection and try again."},
$S:0}
C.eJ5.prototype={
$2(d,e){return d+e.r.length},
$S:z+13}
C.eJ6.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.eJ7.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a.e
s.toString
w=3
return B.b(B.fF(new B.fx(s)),$async$$0)
case 3:s=t.b
if(s.e==null){w=1
break}s.L(x.q).f.T(D.fjZ)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eCx.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.eCw())},
$S:0}
C.eCw.prototype={
$0(){},
$S:0}
C.eCy.prototype={
$1(d){var w=this.a
if(w.c!=null)w.e.fW()},
$S:8}
C.eCt.prototype={
$1(d){return this.a.m(new C.eCs())},
$S:2}
C.eCs.prototype={
$0(){},
$S:0}
C.eCu.prototype={
$1(d){return this.a.b1Y()},
$S:2}
C.eCv.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.eJ9.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(t.d.qv(),$async$$0)
case 2:if(t.c!=null)t.m(new C.eJ8(t))
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.eJ8.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.fP7.prototype={
$1(d){var w=null,v=this.a,u=v.a
return B.ap(w,new B.en(new B.k4(this.c,new C.fP6(),w,w,x.ex),this.b),v.b,w,0,w,0,u)},
$S:214}
C.fP6.prototype={
$3(d,e,f){return new C.JK(e,!1,!1,new B.bA(e.a,x.W))},
$S:z+103}
C.fP8.prototype={
$1(d){var w=null
return B.oO(!1,B.as(new C.bxT(this.a,this.b,w),w,w,w),w,x.z)},
$S:323}
C.fPc.prototype={
$0(){var w=0,v=B.j(x.cc),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.aW.gmV(),$async$$0)
case 3:w=4
return B.b(B.bQ(A.mb,null,x.H),$async$$0)
case 4:w=5
return B.b($.aW.gmV(),$async$$0)
case 5:s=$.aW.ap$.x.h(0,t.a)
r=s==null?null:s.gbg()
if(!(r instanceof B.qk))throw B.W("Could not draw the slide.")
u=r.mg(1)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1735}
C.fPd.prototype={
boC(d){var w=0,v=B.j(x.fS),u,t,s,r
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(d.hr(A.hl),$async$$1)
case 3:r=f
if(r==null)throw B.W("Could not read the slide picture.")
t=(self.URL||self.webkitURL).createObjectURL(B.hL([J.eT(A.dR.gaU(r))],"image/png"))
t.toString
s=Ao.h7E(t)
w=4
return B.b(new B.qs(s,"load",!1,x.ev).gH(0).dh(0,A.k_),$async$$1)
case 4:(self.URL||self.webkitURL).revokeObjectURL(t)
u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$1(d){return this.boC(d)},
$S:1736}
C.fP9.prototype={
$1(d){var w,v=x.bu.a(d).data
if(v!=null){w=v.size
w.toString
w=w>0}else w=!1
if(w)this.a.push(v)},
$S:153}
C.fPa.prototype={
$1(d){var w=this.a
if((w.a.a&30)===0)w.h_(0)},
$S:153}
C.fPb.prototype={
$0(){return(self.URL||self.webkitURL).revokeObjectURL(this.a)},
$S:0}
C.fjW.prototype={
$3(d,e,f){var w=null
return B.d(e,w,w,w,w,w,w,D.fuI,A.K,w,w)},
$S:1737}
C.fjX.prototype={
$3(d,e,f){var w=null,v=B.m(99)
return B.bw(v,B.kq(A.br,w,A.dO,8,w,e===0?w:e,w),A.aq)},
$S:575}
C.eqN.prototype={
$1(d){this.a.a09()
return null},
$S:11}
C.eqL.prototype={
$0(){return this.a.e=D.bAF},
$S:0}
C.eqM.prototype={
$0(){var w=this.a.a
if(w.a<0)w=A.bF
return this.b.e=w},
$S:0}
C.cpu.prototype={
$1(d){return A.o.dw(1,d.a)},
$S:z+104}
C.cpv.prototype={
$2(d,e){return(d|e)>>>0},
$S:62};(function aliases(){var w=C.aO3.prototype
w.bzP=w.t
w=C.aNy.prototype
w.bzi=w.t
w=C.aNh.prototype
w.bz0=w.t
w=C.aNx.prototype
w.bzh=w.t
w=C.aO1.prototype
w.bzN=w.t
w=C.aPl.prototype
w.bBh=w.t
w=C.aMc.prototype
w.bxT=w.t
w=C.aOe.prototype
w.bA_=w.t
w=C.aOf.prototype
w.bA0=w.t
w=C.b5e.prototype
w.bun=w.aFb})();(function installTearOffs(){var w=a._static_0,v=a._instance_0u,u=a._instance_1u,t=a._static_1,s=a.installStaticTearOff
w(C,"iqo","ap8",105)
v(C.aL8.prototype,"gc8O","a__",0)
var r
u(r=C.azE.prototype,"gcCz","cCA",40)
v(r,"gc9D","aeH",0)
v(r=C.azA.prototype,"gb0k","EE",3)
v(r,"gc9A","c9B",3)
v(r,"gayK","yt",0)
v(r,"gaAO","JW",0)
t(C,"irl","hVS",106)
v(C.aFL.prototype,"gccF","ccG",3)
s(C,"irw",0,null,["$4$paper$photo$request$template"],["fWj"],107,0)
s(C,"irv",0,null,["$5$doc$history$instruction$photo$template"],["bF1"],108,0)
v(r=C.aG1.prototype,"gcdo","JB",0)
v(r,"gbNg","XK",0)
v(r,"gcdr","afz",0)
v(r,"gcdq","a_W",0)
v(r,"gb1D","EV",0)
v(C.aG4.prototype,"gcdw","a_Y",0)
v(r=C.aHt.prototype,"gb1Q","QD",0)
v(r,"gcuj","b6c",3)
v(r,"gcDX","aDl",94)
v(r,"gbRb","abq",0)
v(r,"gcdX","B7",0)
v(r=C.aJp.prototype,"gcoa","a1j",0)
v(r,"gcoi","a1m",0)
v(r,"gbG3","a9P",0)
v(r,"gce0","afL",0)
v(C.aJo.prototype,"gce1","afM",0)
v(C.aDr.prototype,"gbF2","a9C",0)
v(C.aBO.prototype,"gce2","a08",0)
w(C,"irJ","ip5",12)
w(C,"irH","ilU",12)
w(C,"irI","io3",12)
v(r=C.aGl.prototype,"gcHg","cHh",3)
v(r,"gcsz","csA",3)
u(r,"gF0","agv",7)
v(r,"gbKT","atF",3)
u(r,"gF1","b3c",7)
v(r,"gcgi","agc",0)
v(r,"gcf9","agb",0)
v(r,"gc48","Zm",0)
v(r,"gciu","agw",0)
v(r,"gbNd","aaY",0)
v(r,"gcjo","a0K",0)
v(r,"gcjp","agN",0)
v(r,"gcjW","agU",0)
v(r,"gciH","agz",0)
v(r,"gbRn","abu",0)
v(r,"gaUs","aUt",3)
v(r,"gaTy","aTz",3)
v(r,"gaP2","aP3",3)
v(r,"gaTx","auw",3)
u(r,"gbFj","bFk",81)
v(r,"gaCS","b9o",3)
v(r,"gcfb","cfc",3)
v(r,"gc1K","c1L",3)
v(r,"gbPG","bPH",3)
v(r=C.aGo.prototype,"gcG2","cG3",3)
v(r,"gcFG","cFH",3)
t(C,"irK","ipm",2)
v(r=C.aGm.prototype,"gce8","JG",0)
v(r,"gcwk","S8",0)
v(r,"gce5","JF",0)
v(r,"gcIA","a3T",0)
v(r,"gck7","ah0",0)
v(C.aGk.prototype,"gce9","b1Y",3)
v(r=C.aGn.prototype,"gbSd","abE",0)
u(r,"gce6","ce7",102)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(B.aE,[C.oj,C.SZ,C.bKF,C.bIX,C.cGK,C.cGI,C.bSV,C.baX,C.cGJ,C.bHx,C.cpo,C.cpm,C.cpn,C.cpl,C.auD,C.cpk,C.bTX,C.oN,C.aGX,C.jE,C.o7,C.a9d,C.Ae,C.lx,C.oX,C.mu,C.Af,C.oa,C.a9l,C.asY,C.b3y,C.eqc,C.lu,C.Fx,C.ew,C.jb,C.Fo,C.yg,C.eQ,C.m1,C.hQ,C.k0,C.a9m,C.agz,C.b3z,C.b5e,C.a4i])
u(B.jy,[C.cOM,C.c3U,C.fKi,C.cQi,C.cPF,C.fPQ,C.cfJ,C.e8s,C.e8r,C.eqQ,C.eqP,C.fRe,C.frc,C.frd,C.cjt,C.cju,C.cjv,C.euu,C.f2I,C.f25,C.f24,C.f38,C.f2G,C.f2z,C.f2S,C.f3y,C.fzl,C.f9S,C.f9R,C.fak,C.eqf,C.fUQ,C.e3G,C.h0I,C.fRB,C.cl6,C.cl4,C.cl9,C.fS8,C.fS9,C.fSa,C.fSb,C.ckR,C.ckS,C.dQB,C.ckO,C.fS7,C.fhi,C.e1o,C.ckH,C.epW,C.fPF,C.eG8,C.eGx,C.eGu,C.eGt,C.eGE,C.eGD,C.eI8,C.eI7,C.eGn,C.eGm,C.eCW,C.eE6,C.eH5,C.eIq,C.eIp,C.eDU,C.eF4,C.eCD,C.daC,C.eJl,C.eJm,C.eJh,C.eJi,C.eJj,C.eJk,C.eJp,C.cle,C.eIV,C.eJ5,C.cpv])
u(B.hu,[C.cON,C.cOO,C.bTY,C.fH7,C.c3T,C.c3W,C.fY4,C.fis,C.fij,C.fiz,C.fq1,C.fq2,C.fKj,C.fKh,C.fXx,C.fGM,C.fYq,C.cQ8,C.cQd,C.cQf,C.cQb,C.cQg,C.cQ9,C.cQh,C.cQ4,C.cQ1,C.cQ0,C.cQ7,C.cPA,C.cPy,C.fOS,C.fOT,C.fum,C.fPR,C.fPX,C.fto,C.cfI,C.cfL,C.fOQ,C.fOR,C.fJG,C.fJH,C.fPW,C.fPS,C.fPU,C.fPV,C.fPT,C.h1_,C.fJK,C.fJL,C.fJO,C.fJP,C.fJS,C.fJT,C.h2s,C.frF,C.h2D,C.etN,C.etO,C.etP,C.etv,C.etH,C.etI,C.etK,C.cjs,C.cjq,C.cjr,C.fPw,C.fPy,C.fPx,C.fre,C.frf,C.h2G,C.euz,C.euA,C.eur,C.eus,C.euv,C.euw,C.h2W,C.f3z,C.f2Z,C.f2J,C.f2W,C.f20,C.f21,C.f22,C.f26,C.f27,C.f3o,C.f3v,C.f3x,C.f37,C.f39,C.f3d,C.f3e,C.f3f,C.f3j,C.f3a,C.f3b,C.f2i,C.f2j,C.f2k,C.f2l,C.f2m,C.f2n,C.f2o,C.f2p,C.f2q,C.f1E,C.f1F,C.f1G,C.f1H,C.f1J,C.f1K,C.f2c,C.f2d,C.f2e,C.f2f,C.f2g,C.f1O,C.f1P,C.f1Q,C.f1R,C.f2y,C.f2R,C.fMV,C.fMU,C.ckY,C.fzk,C.fUM,C.fUF,C.fUI,C.fSD,C.fSE,C.fSF,C.fN1,C.fN0,C.fN_,C.fMY,C.fr8,C.fr9,C.fra,C.h37,C.f9U,C.f9V,C.f9O,C.f9I,C.fad,C.fae,C.fag,C.fah,C.fac,C.h36,C.f9z,C.fyB,C.eqe,C.fUO,C.fUP,C.fUR,C.fUK,C.fUL,C.h2k,C.dt3,C.dt9,C.eqd,C.fng,C.fni,C.fnh,C.fnf,C.fO5,C.fO7,C.fpv,C.fUg,C.fUh,C.fUi,C.fUt,C.fUy,C.fUz,C.fUA,C.fUB,C.fUC,C.fUD,C.fUE,C.fUj,C.fUk,C.fUl,C.fUm,C.fUn,C.fUo,C.fUp,C.fUq,C.fUr,C.fUs,C.fUu,C.fUv,C.fUw,C.fUx,C.fLW,C.fxU,C.fxT,C.fUX,C.e3H,C.e3F,C.f8I,C.cfj,C.cfl,C.h0K,C.din,C.dip,C.h0J,C.h0H,C.h35,C.fRx,C.dhY,C.fJW,C.fJX,C.ckW,C.ckX,C.ckV,C.ckL,C.ckM,C.ckI,C.ckJ,C.ckK,C.clc,C.cl7,C.cl2,C.cl3,C.cl5,C.cl8,C.cla,C.fSc,C.ckQ,C.ckT,C.ckU,C.cl_,C.cl0,C.fV3,C.fUa,C.ckP,C.ckN,C.fS6,C.fAE,C.ckG,C.f6c,C.fDL,C.eIM,C.eFb,C.eFc,C.eGM,C.eGA,C.eGB,C.eEz,C.eIx,C.eIy,C.eIz,C.eDY,C.eGf,C.eGh,C.eFS,C.eFP,C.eF7,C.eF8,C.eFZ,C.eE_,C.eGa,C.eGb,C.eG9,C.eGd,C.eGc,C.eGv,C.eGw,C.eGy,C.eGr,C.eEi,C.eEf,C.eGF,C.eE7,C.eIw,C.eCF,C.eEa,C.eE9,C.eDn,C.eDs,C.eDq,C.eDo,C.eIE,C.eIF,C.eIG,C.eID,C.eIa,C.eI9,C.eI3,C.eI5,C.eHW,C.eIu,C.eIs,C.eCN,C.eCJ,C.eF5,C.eDw,C.eCY,C.eCX,C.eDj,C.eDk,C.eEx,C.eDy,C.eDC,C.eDD,C.eGo,C.eHX,C.eHY,C.eHZ,C.eI_,C.eE1,C.eE2,C.eE3,C.eFy,C.eEt,C.eEl,C.eEs,C.eFI,C.eFJ,C.eHv,C.eHx,C.eHR,C.eHT,C.eHy,C.eHz,C.eDu,C.eFa,C.eF9,C.eIk,C.eDT,C.eDL,C.eDM,C.eDP,C.eDQ,C.eFN,C.eER,C.eES,C.eET,C.eEU,C.eEV,C.eEW,C.eEX,C.eEY,C.eEZ,C.eF_,C.eF0,C.eGJ,C.daz,C.daA,C.eJr,C.fUU,C.fV2,C.fUT,C.fUZ,C.fq0,C.h39,C.h3a,C.h3b,C.eIU,C.eJ2,C.eCy,C.eCt,C.eCu,C.fP7,C.fP6,C.fP8,C.fPd,C.fP9,C.fPa,C.fjW,C.fjX,C.eqN,C.cpu])
u(B.iJ,[C.cOP,C.fio,C.fit,C.fiu,C.fip,C.fiq,C.fir,C.fih,C.fii,C.fik,C.fil,C.fiy,C.fix,C.fin,C.fim,C.fiv,C.fiw,C.fiB,C.fiC,C.fiA,C.cQa,C.cQe,C.cQc,C.cQ2,C.cQ3,C.cQ5,C.cPZ,C.cQ_,C.cQ6,C.cPY,C.cPX,C.cPW,C.cPp,C.cPo,C.cPr,C.cPz,C.cPs,C.cPq,C.cPu,C.cPv,C.cPw,C.cPt,C.cPx,C.cPB,C.cPC,C.cPD,C.cPE,C.fJE,C.fJF,C.fJC,C.fJD,C.em3,C.em1,C.em2,C.em4,C.em5,C.e8q,C.fJI,C.fJJ,C.fJM,C.fJN,C.fJQ,C.fJR,C.eqO,C.fRE,C.fRD,C.etM,C.etL,C.etp,C.etl,C.etw,C.etx,C.ety,C.etr,C.ets,C.ett,C.etu,C.etq,C.etn,C.eto,C.etE,C.etF,C.etD,C.etG,C.etC,C.etB,C.etA,C.etJ,C.etz,C.etm,C.euy,C.eum,C.eun,C.eut,C.euo,C.euq,C.eup,C.eux,C.f2r,C.f2P,C.f2a,C.f2b,C.f28,C.f29,C.f2V,C.f2U,C.f2T,C.f2Y,C.f2X,C.f2_,C.f23,C.f1Z,C.f1Y,C.f1V,C.f1X,C.f1W,C.f3w,C.f3p,C.f3n,C.f3q,C.f3m,C.f3r,C.f3l,C.f3s,C.f3t,C.f3u,C.f3k,C.f36,C.f31,C.f3c,C.f35,C.f3g,C.f34,C.f3h,C.f33,C.f3i,C.f32,C.f2M,C.f2L,C.f2N,C.f2K,C.f2O,C.f2E,C.f2D,C.f2F,C.f2C,C.f2B,C.f2A,C.f1I,C.f1D,C.f1S,C.f1N,C.f1T,C.f1M,C.f1U,C.f1L,C.f2H,C.f2v,C.f2u,C.f2w,C.f2t,C.f2x,C.f2s,C.f2Q,C.f30,C.f3_,C.f2h,C.fUH,C.fUJ,C.fUN,C.fMZ,C.fPp,C.fPn,C.fPo,C.f9W,C.f9X,C.f9T,C.f9N,C.f9M,C.f9P,C.f9Q,C.f9C,C.f9D,C.f9F,C.f9G,C.f9H,C.f9E,C.f9J,C.fa9,C.faa,C.fa8,C.fab,C.fa7,C.fa6,C.fa5,C.faf,C.fa4,C.fa3,C.fa2,C.fai,C.fa1,C.faj,C.fa0,C.fa_,C.f9K,C.f9L,C.f9Z,C.f9Y,C.f9v,C.f9w,C.f9x,C.f9y,C.f9u,C.f9A,C.f9B,C.dt2,C.dt4,C.dt7,C.dt8,C.dt6,C.dt5,C.fO6,C.fLX,C.cfk,C.cfm,C.dig,C.dil,C.dim,C.dik,C.dij,C.dio,C.dii,C.dih,C.diq,C.h0G,C.dp4,C.dp5,C.dp6,C.fJU,C.fJV,C.cld,C.eCz,C.eCA,C.eCB,C.eCC,C.fAC,C.fAD,C.e1q,C.e1p,C.dfa,C.df9,C.eIO,C.eIN,C.eFd,C.eHU,C.eIK,C.eGK,C.eIA,C.eIB,C.eIL,C.eFT,C.eDW,C.eDX,C.eGg,C.eFR,C.eFO,C.eFQ,C.eFU,C.eFV,C.eFW,C.eFX,C.eFY,C.eG_,C.eE0,C.eG2,C.eG3,C.eG4,C.eG5,C.eG6,C.eG7,C.eG1,C.eGe,C.eGs,C.eGq,C.eGz,C.eG0,C.eEg,C.eEh,C.eEj,C.eGC,C.eGG,C.eCU,C.eEe,C.eEc,C.eGO,C.eE8,C.eGN,C.eDZ,C.eEA,C.eIv,C.eHV,C.eCV,C.eCS,C.eCI,C.eCE,C.eCG,C.eEb,C.eDm,C.eDr,C.eDp,C.eDl,C.eGp,C.eIH,C.eI6,C.eI1,C.eI2,C.eI4,C.eF3,C.eF2,C.eIt,C.eCL,C.eCM,C.eCO,C.eCP,C.eCT,C.eCK,C.eGL,C.eIC,C.eF6,C.eDv,C.eCH,C.eEy,C.eCQ,C.eCZ,C.eD_,C.eD0,C.eDb,C.eDe,C.eDf,C.eDg,C.eDh,C.eDi,C.eD1,C.eD2,C.eD3,C.eD4,C.eD5,C.eD6,C.eD7,C.eD8,C.eD9,C.eDa,C.eDc,C.eDd,C.eEw,C.eEv,C.eEu,C.eCR,C.eDz,C.eDx,C.eDA,C.eDB,C.eEd,C.eGk,C.eGl,C.eGi,C.eGj,C.eI0,C.eE5,C.eE4,C.eFx,C.eFw,C.eFz,C.eFv,C.eFA,C.eFu,C.eFB,C.eFt,C.eFC,C.eFs,C.eFD,C.eFr,C.eFE,C.eFq,C.eFF,C.eFp,C.eFi,C.eFj,C.eFk,C.eFh,C.eFl,C.eFg,C.eFm,C.eFf,C.eFn,C.eFe,C.eFo,C.eEq,C.eEr,C.eEk,C.eEm,C.eEn,C.eEo,C.eEp,C.eII,C.eIJ,C.eFH,C.eFG,C.eFK,C.eH6,C.eH7,C.eH8,C.eHj,C.eHu,C.eHF,C.eHM,C.eHN,C.eHO,C.eHP,C.eHQ,C.eH9,C.eHa,C.eHb,C.eHc,C.eHd,C.eHe,C.eHf,C.eHg,C.eHh,C.eHi,C.eHk,C.eHl,C.eHm,C.eHn,C.eHo,C.eHp,C.eHq,C.eHr,C.eHs,C.eGX,C.eHt,C.eH4,C.eH3,C.eHw,C.eH2,C.eGT,C.eHS,C.eH1,C.eGS,C.eGQ,C.eH0,C.eGR,C.eGP,C.eHA,C.eH_,C.eHB,C.eHC,C.eHD,C.eHE,C.eGZ,C.eHG,C.eHH,C.eHI,C.eGY,C.eHJ,C.eGW,C.eHK,C.eGV,C.eHL,C.eGU,C.eDt,C.eId,C.eIc,C.eIe,C.eIb,C.eED,C.eEC,C.eEE,C.eEB,C.eIo,C.eIj,C.eIn,C.eIf,C.eIg,C.eIh,C.eIi,C.eIl,C.eIm,C.eIr,C.eDV,C.eDI,C.eDJ,C.eDK,C.eDH,C.eDO,C.eDN,C.eDG,C.eDF,C.eDR,C.eDE,C.eDS,C.eFM,C.eFL,C.eEQ,C.eEP,C.eEO,C.eEN,C.eEM,C.eEL,C.eEK,C.eEJ,C.eEG,C.eEI,C.eEH,C.eEF,C.eF1,C.eGH,C.eGI,C.daB,C.db_,C.db0,C.dav,C.dau,C.day,C.daw,C.dax,C.eJo,C.eJe,C.eJn,C.eJf,C.eJg,C.eJa,C.eJb,C.eJc,C.eJd,C.eJq,C.fV_,C.fV0,C.fV1,C.eIR,C.eIS,C.eIT,C.eIW,C.eIX,C.eJ_,C.eJ0,C.eIZ,C.eJ1,C.eIY,C.eIQ,C.eIP,C.eJ3,C.eJ4,C.eJ6,C.eJ7,C.eCx,C.eCw,C.eCs,C.eCv,C.eJ9,C.eJ8,C.fPc,C.fPb,C.eqL,C.eqM])
t(C.aTz,B.M)
u(B.lD,[C.a51,C.az4,C.axJ,C.ye,C.yh,C.lb,C.tP,C.Cb,C.rZ,C.wA,C.atv,C.JL,C.asX,C.vj,C.mV,C.hF,C.a9Z])
u(C.bSV,[C.cGL,C.bSW])
u(C.cpo,[C.cps,C.auC])
t(C.cpr,C.cpm)
t(C.cpq,C.cpl)
t(C.cpt,C.cpq)
t(C.cpp,C.cpn)
t(C.cpj,C.cpk)
t(C.czR,B.axb)
t(C.a9L,B.y0)
u(B.af,[C.a2g,C.ZZ,C.ZX,C.as3,C.X7,C.X8,C.a1f,C.a1M,C.a1L,C.aFW,C.a09,C.Op,C.a_H,C.a01,C.aq0,C.aKO,C.Wo,C.aBt,C.a93,C.OV,C.aAQ,C.KM,C.a0T,C.Xj,C.Xk,C.aGj,C.at1,C.a94])
u(B.ah,[C.aL8,C.azE,C.azA,C.aFL,C.aG1,C.aG4,C.aHt,C.aJp,C.aJo,C.aO3,C.aDr,C.aNy,C.aBO,C.biy,C.aNh,C.aPl,C.aNx,C.bgl,C.aO1,C.aOe,C.aMc,C.bf6,C.aOf,C.aGm,C.bn4,C.aGk,C.aGn,C.bmO])
u(B.aw,[C.azC,C.aeG,C.ae4,C.blN,C.aeJ,C.agp,C.b39,C.bvs,C.b3u,C.bol,C.btZ,C.b1o,C.b3x,C.aeM,C.af2,C.b3v,C.JK,C.b1r,C.bfm,C.QF,C.KS,C.bk6,C.bk5,C.bxT])
u(B.Ib,[C.beO,C.bwR,C.aLv,C.bhy,C.bun])
u(B.mn,[C.beN,C.bbf,C.buk,C.bel,C.bhX,C.bkd,C.bh1,C.bhT,C.bhA,C.bqI,C.bcp,C.bc2,C.bxP,C.buN,C.btV,C.bgV,C.b3s,C.bsO,C.btS])
t(C.bmL,C.aO3)
t(C.bm6,C.aNy)
t(C.blP,C.aNh)
t(C.bxj,C.aPl)
t(C.bm2,C.aNx)
t(C.bmJ,C.aO1)
t(C.bAb,C.aOe)
t(C.aGl,C.bAb)
t(C.bf7,C.aMc)
t(C.aGo,C.aOf)
t(C.bxF,B.j4)
t(C.a9Y,B.kI)
t(C.cpw,C.b5e)
t(C.ajD,C.a4i)
u(B.YY,[C.aTr,C.aUT])
t(C.ayF,C.aTr)
w(C.aO3,B.cc)
w(C.aNy,B.cc)
w(C.aNh,B.cc)
w(C.aNx,B.cc)
w(C.aO1,B.cc)
w(C.aPl,B.cc)
w(C.aMc,B.eN)
w(C.aOe,B.cc)
v(C.bAb,B.eC)
w(C.aOf,B.cc)})()
B.iT(b.typeUniverse,JSON.parse('{"aUa":{"hN":["aUa"]},"oj":{"aUa":[],"hN":["aUa"]},"aTz":{"M":["SZ"],"M.E":"SZ"},"a9L":{"y0":[],"oG":[]},"a2g":{"af":[],"v":[]},"aL8":{"ah":["a2g"]},"ZZ":{"af":[],"v":[]},"ZX":{"af":[],"v":[]},"azE":{"ah":["ZZ"]},"azA":{"ah":["ZX"]},"azC":{"aw":[],"v":[]},"as3":{"af":[],"v":[]},"aFL":{"ah":["as3"]},"aeG":{"aw":[],"v":[]},"ae4":{"aw":[],"v":[]},"aeJ":{"aw":[],"v":[]},"agp":{"aw":[],"v":[]},"blN":{"aw":[],"v":[]},"X7":{"af":[],"v":[]},"aG1":{"ah":["X7"]},"b39":{"aw":[],"v":[]},"beO":{"aC":[]},"beN":{"aC":[]},"bwR":{"aC":[]},"bbf":{"aC":[]},"buk":{"aC":[]},"X8":{"af":[],"v":[]},"aG4":{"ah":["X8"]},"bel":{"aC":[]},"a1f":{"af":[],"v":[]},"aHt":{"ah":["a1f"]},"bhX":{"aC":[]},"a1M":{"af":[],"v":[]},"a1L":{"af":[],"v":[]},"aFW":{"af":[],"v":[]},"a09":{"af":[],"v":[]},"aJp":{"ah":["a1M"]},"aJo":{"ah":["a1L"]},"bmL":{"ah":["aFW"]},"bkd":{"aC":[]},"aDr":{"ah":["a09"]},"bvs":{"aw":[],"v":[]},"b3u":{"aw":[],"v":[]},"bol":{"aw":[],"v":[]},"Op":{"af":[],"v":[]},"a_H":{"af":[],"v":[]},"bm6":{"ah":["Op"]},"btZ":{"aw":[],"v":[]},"bh1":{"aC":[]},"b1o":{"aw":[],"v":[]},"aBO":{"ah":["a_H"]},"a01":{"af":[],"v":[]},"biy":{"ah":["a01"]},"bhT":{"aC":[]},"bhA":{"aC":[]},"bqI":{"aC":[]},"bcp":{"aC":[]},"bc2":{"aC":[]},"bxP":{"aC":[]},"buN":{"aC":[]},"btV":{"aC":[]},"bgV":{"aC":[]},"aq0":{"af":[],"v":[]},"b3x":{"aw":[],"v":[]},"blP":{"ah":["aq0"]},"aeM":{"aw":[],"v":[]},"af2":{"aw":[],"v":[]},"aKO":{"af":[],"v":[]},"Wo":{"af":[],"v":[]},"JK":{"aw":[],"v":[]},"aBt":{"af":[],"v":[]},"a93":{"af":[],"v":[]},"b3v":{"aw":[],"v":[]},"b3s":{"aC":[]},"bxj":{"ah":["aKO"]},"aLv":{"aC":[]},"bm2":{"ah":["Wo"]},"bgl":{"ah":["aBt"]},"bmJ":{"ah":["a93"]},"b1r":{"aw":[],"v":[]},"bhy":{"aC":[]},"bsO":{"aC":[]},"btS":{"aC":[]},"aAQ":{"af":[],"v":[]},"KM":{"af":[],"v":[]},"a0T":{"af":[],"v":[]},"KS":{"aw":[],"v":[]},"OV":{"af":[],"v":[]},"aGl":{"ah":["OV"],"eC":[]},"bf7":{"ah":["aAQ"]},"bfm":{"aw":[],"v":[]},"bf6":{"ah":["KM"]},"QF":{"aw":[],"v":[]},"aGo":{"ah":["a0T"]},"bun":{"aC":[]},"bk6":{"aw":[],"v":[]},"bk5":{"aw":[],"v":[]},"Xj":{"af":[],"v":[]},"Xk":{"af":[],"v":[]},"aGj":{"af":[],"v":[]},"at1":{"af":[],"v":[]},"aGm":{"ah":["Xj"]},"bn4":{"ah":["Xk"]},"aGk":{"ah":["aGj"]},"bxF":{"j4":[]},"aGn":{"ah":["at1"]},"bxT":{"aw":[],"v":[]},"a94":{"af":[],"v":[]},"bmO":{"ah":["a94"]},"a9Y":{"kI":["fy<eW>"],"kw":["fy<eW>"]},"ajD":{"a4i":[]},"aTr":{"jg":[],"fi":[]},"ayF":{"jg":[],"fi":[]},"aUT":{"jg":[],"fi":[]}}'))
var y={z:"Amri ya kifalme \xb7 bendi za muhuri juu na chini.",L:"Kichwa cha Mtu: Dollar elfu ishirini ($20,000)",f:"Mimi [Jina la Baba wa Binti], wa jamaa ya [Jina la Jamii ya Binti], Nyumba ya [Jina la Nyumba ya Binti]. Nimehowesha binti wangu aitwaye [Jina la Binti], na ndugu [Jina la Kijana], wa jamaa ya [Jina la Jamii ya Mume], Nyumba ya [Jina la Nyumba ya Mume], kijana wa [Jina la Baba wa Mume]. Makubaliano haya yanathibitishwa rasmi na pande zote mbili ili kuweka kumbukumbu na kuimarisha uhusiano mwema kati ya familia zote mbili.",O:"Mimi [Jina la Baba wa Mume], wa jamaa ya [Jina la Jamii ya Mume], Nyumba ya [Jina la Nyumba ya Mume]. Nimetowa mahali ya kuhoweya kijana wangu aitwaye [Jina la Kijana] na [Jina la Binti], binti wa [Jina la Baba wa Binti], wa jamaa ya [Jina la Jamii ya Binti], Nyumba ya [Jina la Nyumba ya Binti]. Makubaliano haya yanathibitishwa rasmi na pande zote mbili ili kuweka kumbukumbu na kuimarisha uhusiano mwema kati ya familia zote mbili.",s:"Mpaka mwembamba wa dhahabu \xb7 vichwa vya bluu ya kifalme.",Q:"Mpaka mwembamba wa dhahabu \xb7 vichwa vya dhahabu.",H:"Nguo ya kente yenye dirisha la karatasi katikati.",n:"Nguo ya udongo yenye alama \xb7 karatasi ndani.",K:"Open Blank or Class Template to start \u2014 nothing is saved until you edit.",M:'PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".',S:"The AI sent something I could not read. Try again.",g:"Your story appears here. Add a picture, then ask the AI to write it."}
var x=(function rtii(){var w=B.at
return{bu:w("MB"),U:w("w4<qn>"),bz:w("u"),M:w("de<n>"),bo:w("jV"),g7:w("Ul"),gc:w("aB<iF?>"),bq:w("aB<~>"),cc:w("C3"),fS:w("EK"),an:w("IV"),bm:w("O<SZ>"),X:w("O<T1>"),f3:w("O<aUa>"),aK:w("O<nr>"),V:w("O<ab>"),O:w("O<u>"),fA:w("O<lT>"),d5:w("O<aB<bB<H,+icon3d,picture(n?,n?)>>>"),bH:w("O<aB<dK>>"),fG:w("O<aB<~>>"),aF:w("O<nz>"),cd:w("O<ai<jE>>"),ez:w("O<a9<n,aE>>"),d:w("O<a9<n,@>>"),B:w("O<mS>"),h:w("O<jE>"),gE:w("O<Ae>"),k:w("O<oN>"),g:w("O<m1>"),D:w("O<hQ>"),u:w("O<eQ>"),m:w("O<vj>"),i:w("O<hF>"),aC:w("O<a9l>"),o:w("O<Af>"),e3:w("O<aE>"),dN:w("O<o>"),v:w("O<fT>"),cR:w("O<j2>"),J:w("O<jt>"),gx:w("O<pD<n>>"),f2:w("O<+(a0,n)>"),L:w("O<+(n,n)>"),aD:w("O<+data,mimeType(n,n)>"),G:w("O<+(F,F)>"),ek:w("O<+(H,n)>"),n:w("O<+(H,H)>"),r:w("O<cU>"),s:w("O<n>"),aS:w("O<j4>"),p:w("O<v>"),eR:w("O<fi>"),fT:w("O<baX>"),bx:w("O<aGX>"),gz:w("O<agz>"),x:w("O<F>"),t:w("O<H>"),dS:w("O<aC?>"),bA:w("O<o?>"),Z:w("O<H?>"),cA:w("O<cj>"),A:w("cw<ah<af>>"),gL:w("ai<oN>"),R:w("ai<hQ>"),j:w("ai<@>"),bW:w("ai<H>"),e:w("bB<H,+icon3d,picture(n?,n?)>"),P:w("a9<n,@>"),f:w("a9<@,@>"),gI:w("a9<H,+icon3d,picture(n?,n?)>"),bR:w("N<hF,v>"),eC:w("N<oa,n>"),cT:w("N<k0,D>"),dv:w("N<n,n>"),f0:w("N<n,v>"),gN:w("N<H,q5>"),gh:w("N<mV,jG<mV>>"),w:w("iC"),ei:w("iF"),g2:w("rP"),fB:w("Fo"),b6:w("Ae"),gX:w("a9d"),dt:w("lx"),ea:w("oN"),bt:w("m1"),I:w("hQ"),F:w("eQ"),fO:w("mV"),ff:w("vj"),fP:w("hF"),Q:w("wA"),dO:w("asY"),a:w("ct"),C:w("aE"),dw:w("auD"),di:w("a9Z"),Y:w("eW"),fz:w("+(n,n)"),dL:w("+(H,H)"),eb:w("+claimCode,qrPayload(n?,n)"),aH:w("+icon3d,picture(n?,n?)"),cz:w("FU"),dB:w("ds<o>"),bJ:w("ds<n>"),_:w("e0<n>"),N:w("n"),fw:w("qn"),bO:w("au"),K:w("br<o>"),b:w("br<F>"),E:w("dK"),W:w("bA<n>"),ac:w("bA<H>"),ex:w("k4<m1>"),cI:w("k4<n>"),cl:w("k4<F>"),b4:w("Y<lu>"),a8:w("Y<mu>"),fR:w("Y<+(n,n)>"),co:w("ea<o>"),l:w("v"),b2:w("c3<~>"),ev:w("qs<e_>"),dT:w("bk<~>"),q:w("mC"),y:w("Q"),gR:w("F"),z:w("@"),S:w("H"),at:w("bd?"),gw:w("ai<a9<n,@>>?"),aT:w("ai<hQ>?"),c:w("ai<@>?"),aP:w("iF?"),af:w("hQ?"),go:w("b3z?"),a6:w("a9m?"),cK:w("aE?"),bZ:w("+bytes,dataUrl,fileName(dK,n,n)?"),gl:w("+claimCode,qrPayload,token(n?,n,n)?"),T:w("n?"),dd:w("dK?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.b2g=new B.bL(A.aA,null,null,H.ass,null)
D.b2q=new B.da(0,-0.15)
D.b2r=new B.da(0.62,0)
D.b2w=new B.da(-0.35,-0.45)
D.b2H=new B.da(0.9,-0.85)
D.b4R=new B.be(H.Ur,H.Ur,A.fP,A.fP)
D.b56=new B.ay(A.b8,1,A.r,-1)
D.br4=new B.u(1,0.4196078431372549,0.2901960784313726,0.2,A.q)
D.b5i=new B.ay(D.br4,1,A.r,-1)
D.b5u=new B.ay(A.aE,1.5,A.r,-1)
D.b5z=new B.ay(A.b8,1.6,A.r,-1)
D.b5P=new B.ay(A.aE,1.4,A.r,-1)
D.b7a=new B.p(null,null,null,null,null,K.I4,A.a6)
D.c8H=new B.a8(A.a7,A.aa,A.x,G.a64,null,null)
D.b7i=new B.p(null,null,null,null,null,D.c8H,A.a6)
D.aeE=new B.p(A.as,null,null,A.tW,null,null,A.n)
D.bjQ=new B.u(1,0.16862745098039217,0.22745098039215686,0.3333333333333333,A.q)
D.br1=new B.u(1,0.0392156862745098,0.058823529411764705,0.10196078431372549,A.q)
D.d7w=w([D.bjQ,D.br1],x.O)
D.eAs=new B.bY(A.A,0.5,A.x,null,0,D.d7w,null,null)
D.b7B=new B.p(null,null,null,null,null,D.eAs,A.a6)
D.Zi=new B.u(1,0.054901960784313725,0.08235294117647059,0.14901960784313725,A.q)
D.b64=new B.bH(P.vW,A.a1,A.a1,A.a1)
D.b7D=new B.p(D.Zi,null,D.b64,null,null,null,A.n)
D.cap=new B.a8(A.a7,A.aa,A.x,A.S5,null,null)
D.b7K=new B.p(null,null,null,null,null,D.cap,A.a6)
D.agh=new B.u(1,0.058823529411764705,0.058823529411764705,0.0784313725490196,A.q)
D.b7N=new B.p(D.agh,null,null,A.ro,null,null,A.n)
D.b7R=new B.p(A.jY,null,null,null,null,null,A.a6)
D.b7U=new B.p(A3.ahx,null,H.aef,A.mE,null,null,A.n)
D.Fm=new B.p(A.dN,null,null,null,null,null,A.a6)
D.b80=new B.p(null,null,null,null,null,E.wW,A.a6)
D.dcS=w([E.aix,A.c3],x.O)
D.ca2=new B.a8(A.b1,A.b7,A.x,D.dcS,null,null)
D.b84=new B.p(null,null,null,A.mE,null,D.ca2,A.n)
D.dow=w([A.bn,A.dN,A.jX],x.O)
D.a44=new B.a8(A.aA,A.aF,A.x,D.dow,null,null)
D.b8h=new B.p(null,null,null,null,null,D.a44,A.n)
D.b8i=new B.p(D.agh,null,null,A.l9,null,null,A.n)
D.cBY=w([A.da,A.bn],x.O)
D.c9U=new B.a8(A.aA,A.aF,A.x,D.cBY,null,null)
D.b8m=new B.p(null,null,null,null,null,D.c9U,A.n)
D.b8w=new B.p(null,null,null,null,null,G.v5,A.a6)
D.b8S=new B.p(A.aiy,null,null,null,null,null,A.a6)
D.bkS=new B.u(0.5647058823529412,0,0,0,A.q)
D.aeO=new B.ab(0,A.G,D.bkS,A.Jz,28)
D.bbc=new B.aYn()
D.bbL=new C.czR()
D.afi=new B.ci(A.A,null,null,A.a3U,null)
D.beC=new B.fj(null,null,null,null,null,E.nz,null,null,null,null)
D.bcw=new B.ci(A.A,null,null,D.beC,null)
D.bTS=new B.ae(A.ed,28,A.c,null,null,null)
D.bd1=new B.ci(A.A,null,null,D.bTS,null)
D.bez=new B.fj(2,null,null,null,null,A.c4,null,null,null,null)
D.bdo=new B.ci(A.A,null,null,D.bez,null)
D.bUc=new B.ae(K.PG,40,A.bD,null,null,null)
D.bdp=new B.ci(A.A,null,null,D.bUc,null)
D.bft=new B.u(1,1,0.9019607843137255,0.6549019607843137,A.q)
D.bfH=new B.u(1,0.10588235294117647,0.13333333333333333,0.19607843137254902,A.q)
D.bg9=new B.u(1,0.08235294117647059,0.10196078431372549,0.14901960784313725,A.q)
D.bgl=new B.u(1,0.10980392156862745,0.07450980392156863,0.054901960784313725,A.q)
D.bgY=new B.u(1,0.47843137254901963,0.41568627450980394,0.27058823529411763,A.q)
D.bhe=new B.u(0.8,1,0.9450980392156862,0.9490196078431372,A.q)
D.bhg=new B.u(0.0784313725490196,0.788235294117647,0.6352941176470588,0.15294117647058825,A.q)
D.Mn=new B.u(1,0.0392156862745098,0.08235294117647059,0.14901960784313725,A.q)
D.bhJ=new B.u(0.2,0.9607843137254902,0.6196078431372549,0.043137254901960784,A.q)
D.bhR=new B.u(0.13333333333333333,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.q)
D.agC=new B.u(1,0.1411764705882353,0.09411764705882353,0.07058823529411765,A.q)
D.biH=new B.u(1,0.22745098039215686,0.16470588235294117,0.10196078431372549,A.q)
D.bjC=new B.u(1,0.9098039215686274,0.9333333333333333,0.9647058823529412,A.q)
D.agS=new B.u(1,1,1,0.9725490196078431,A.q)
D.bjZ=new B.u(0,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.q)
D.bke=new B.u(1,1,0.5490196078431373,0.10196078431372549,A.q)
D.bkh=new B.u(0.6,0.9098039215686274,0.7058823529411765,0.7215686274509804,A.q)
D.bky=new B.u(0.4,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.q)
D.bkY=new B.u(1,1,0.9568627450980393,0.8392156862745098,A.q)
D.bmF=new B.u(1,1,0.996078431372549,0.9725490196078431,A.q)
D.Z_=new B.u(0.8509803921568627,0,0,0,A.q)
D.bmQ=new B.u(1,0.0784313725490196,0.06666666666666667,0.047058823529411764,A.q)
D.bmX=new B.u(1,0.0784313725490196,0.06666666666666667,0.0392156862745098,A.q)
D.ahR=new B.u(0.6,0,0,0,A.q)
D.ahU=new B.u(0,1,0.7019607843137254,0.2784313725490196,A.q)
D.boG=new B.u(1,0.12156862745098039,0.10196078431372549,0.058823529411764705,A.q)
D.uh=new B.u(1,0.08235294117647059,0.12156862745098039,0.21176470588235294,A.q)
D.bp9=new B.u(1,0.35294117647058826,0.41568627450980394,0.5215686274509804,A.q)
D.bpE=new B.u(1,1,0.8784313725490196,0.6392156862745098,A.q)
D.bq4=new B.u(0.4,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.q)
D.aiQ=new B.u(1,0.47843137254901963,0.23137254901960785,0.2901960784313726,A.q)
D.Zw=new B.u(0,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.q)
D.BY=new B.u(1,0.5411764705882353,0.39215686274509803,0.09019607843137255,A.q)
D.N1=new B.u(1,0.0784313725490196,0.09803921568627451,0.16470588235294117,A.q)
D.jB=new B.u(1,0.07058823529411765,0.12941176470588237,0.23921568627450981,A.q)
D.ajk=new B.u(0,1,0.9686274509803922,0.8392156862745098,A.q)
D.ZG=new B.u(1,0.2901960784313726,0.17254901960784313,0.10588235294117647,A.q)
D.btY=new B.u(1,0.24705882352941178,0.16470588235294117,0.0392156862745098,A.q)
D.buu=new B.u(0.6,1,0.9686274509803922,0.9019607843137255,A.q)
D.buK=new B.u(0.6,1,0.984313725490196,0.9215686274509803,A.q)
D.a_8=new B.u(1,0.07450980392156863,0.10980392156862745,0.2,A.q)
D.bvX=new B.u(1,0.8627450980392157,0.9215686274509803,0.9803921568627451,A.q)
D.yq=new B.u(1,0.9137254901960784,0.7686274509803922,0.41568627450980394,A.q)
D.bwy=new B.u(1,0.058823529411764705,0.0784313725490196,0.12549019607843137,A.q)
D.bwS=new B.hM(A.aT,!0,null,null)
D.fBx=new B.G(!0,A.aD,null,null,null,null,22,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h1z=new B.B("Bio link",null,D.fBx,null,null,null,null,null,null,null,null,null)
D.bdj=new B.ci(A.A,null,null,D.h1z,null)
D.bx6=new B.hM(A.BC,!0,D.bdj,null)
D.dPh=new B.VK(A.aG,56,Y.P7,null,null)
D.fy4=new B.G(!0,A.bB,null,null,null,null,null,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKB=new B.B("No presentations yet",null,D.fy4,null,null,null,null,null,null,null,null,null)
D.fCz=new B.G(!0,A.cA,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHZ=new B.B(y.K,null,D.fCz,null,A.K,null,null,null,null,null,null,null)
D.d7m=w([D.dPh,A.aB,D.fKB,A.am,D.fHZ],x.p)
D.bxl=new B.fk(A.ah,A.e,A.j,A.l,null,A.p,null,0,D.d7m,null)
D.Nv=new C.a51(0,"none")
D.akz=new C.a51(1,"deflate")
D.akA=new C.a51(2,"bzip2")
D.by4=new B.kC(0.165,0.84,0.44,1)
D.ddb=w([A.c6,A.dO,A.aE],x.O)
D.c98=new B.a8(A.aA,A.aF,A.x,D.ddb,null,null)
D.b7f=new B.p(null,null,null,null,null,D.c98,A.n)
D.c2p=new B.ae(A.f0,null,A.ab,null,null,null)
D.bdX=new B.ci(A.A,null,null,D.c2p,null)
D.byE=new B.bN(D.b7f,A.bj,D.bdX,null)
D.bud=new B.u(0.058823529411764705,1,1,1,A.q)
D.dgF=w([A.bA,A.rz,A.rz,D.bud],x.O)
D.cTu=w([0,0.32,0.7,1],x.x)
D.c9K=new B.a8(A.aA,A.aF,A.x,D.dgF,D.cTu,null)
D.b74=new B.p(null,null,null,null,null,D.c9K,A.n)
D.byL=new B.bN(D.b74,A.bj,null,null)
D.bzT=new B.mK(1,1,null,null,null,A.br,null)
D.bzW=new B.mK(1,null,null,null,null,D.ZG,null)
D.bAp=new B.bd(125e4)
D.bAv=new B.bd(17e4)
D.bAF=new B.bd(35964e8)
D.bAM=new B.bd(55e4)
D.bAQ=new B.bd(68e4)
D.bBg=new B.im(0,0,0,5)
D.bBv=new B.R(0,16,16,0)
D.bBG=new B.R(0,36,0,36)
D.bBO=new B.R(0,54,0,0)
D.bBV=new B.R(10,0,10,3)
D.bC6=new B.im(10,16,10,10)
D.bCi=new B.R(10,6,4,6)
D.bCl=new B.R(10,8,10,6)
D.alz=new B.R(11,8,11,11)
D.bCr=new B.R(12,0,12,24)
D.bCF=new B.R(12,12,12,4)
D.bCI=new B.R(12,12,8,12)
D.bCJ=new B.R(12,14,12,10)
D.bCZ=new B.R(12,8,8,12)
D.bDo=new B.R(14,14,14,0)
D.bDt=new B.R(14,14,14,90)
D.bDQ=new B.R(16,10,16,16)
D.bDR=new B.R(16,10,16,20)
D.amk=new B.R(16,6,16,28)
D.bEp=new B.R(18,0,18,10)
D.bEr=new B.R(18,0,18,30)
D.bEt=new B.R(18,10,18,12)
D.bEu=new B.R(18,10,18,14)
D.bEO=new B.R(18,16,14,18)
D.bET=new B.R(18,18,18,12)
D.bEZ=new B.R(18,26,18,12)
D.bF3=new B.R(18,34,18,34)
D.bF4=new B.R(18,4,18,14)
D.bF8=new B.R(18,8,18,24)
D.bFs=new B.R(20,16,14,4)
D.bFx=new B.R(20,18,12,4)
D.bFC=new B.R(20,20,12,20)
D.bFE=new B.R(20,22,20,20)
D.bFJ=new B.R(20,6,20,6)
D.bFT=new B.R(22,18,22,18)
D.bG0=new B.R(22,24,22,0)
D.bG3=new B.R(22,24,22,4)
D.bGb=new B.R(22,60,22,22)
D.bGh=new B.R(24,24,24,22)
D.bGr=new B.R(26,10,60,10)
D.bGz=new B.R(28,44,28,44)
D.bGQ=new B.R(32,44,32,44)
D.bGY=new B.R(38,30,38,20)
D.bH3=new B.R(4,0,0,6)
D.bHf=new B.im(4,4,4,4)
D.bHI=new B.im(6,5,6,5)
D.bHN=new B.R(6,6,8,6)
D.bHZ=new B.R(8,14,8,14)
D.bI_=new B.R(8,22,8,22)
D.bI8=new B.R(8,6,12,6)
D.bIg=new B.R(8,8,8,4)
D.anj=new B.R(9,9,9,6)
D.bIr=new B.im(2.5,2.5,2.5,2.5)
D.bIs=new B.R(10.5,0,10.5,0)
D.bIt=new B.R(7,1.5,7,1.5)
D.d4i=w([0.393,0.769,0.189,0,0,0.349,0.686,0.168,0,0,0.272,0.534,0.131,0,0,0,0,0,1,0],x.x)
D.bIJ=new B.uS(null,null,D.d4i,A.y0)
D.d10=w([0.2126,0.7152,0.0722,0,0,0.2126,0.7152,0.0722,0,0,0.2126,0.7152,0.0722,0,0,0,0,0,1,0],x.x)
D.bIK=new B.uS(null,null,D.d10,A.y0)
D.aWB=new B.G(!0,A.aD,null,null,null,null,11,A.u,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h0R=new B.B("WORD DESIGN",null,D.aWB,null,null,null,null,null,null,null,null,null)
D.bJp=new B.by(1,A.bb,D.h0R,null)
D.h0u=new B.B("Slides database",null,Ac.vE,null,null,null,null,null,null,null,null,null)
D.fYJ=new B.B("Admin only \xb7 keep as many as you like",null,V.aW2,null,null,null,null,null,null,null,null,null)
D.dxo=w([D.h0u,A.bG,D.fYJ],x.p)
D.bxx=new B.fk(A.ah,A.e,A.j,A.E,null,A.p,null,0,D.dxo,null)
D.bJs=new B.by(1,A.bb,D.bxx,null)
D.fSU=new B.B("NGMY logo",null,A.fE,null,null,null,null,null,null,null,null,null)
D.bJv=new B.by(1,A.bb,D.fSU,null)
D.fza=new B.G(!0,A.ab,null,null,null,null,12,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h2U=new B.B("TALK TO THE EDITOR",null,D.fza,null,null,null,null,null,null,null,null,null)
D.bJQ=new B.by(1,A.bb,D.h2U,null)
D.fMv=new B.B("Tell the AI what to change",null,Ac.vE,null,null,null,null,null,null,null,null,null)
D.bK9=new B.by(1,A.bb,D.fMv,null)
D.bLF=new B.Ez(!0,"video/mp4")
D.fxi=new B.G(!0,A.c,null,null,null,null,16,A.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKr=new B.B("Move presentations between devices",null,D.fxi,null,null,null,!1,null,null,1,null,null)
D.bLJ=new B.qK(A.e7,A.a7,A.f,D.fKr,null)
D.fLG=new B.B("Edit in Slides",null,A.jd,null,null,null,null,null,null,null,null,null)
D.bLK=new B.qK(A.e7,A.A,A.f,D.fLG,null)
D.bM_=new B.dm(1,A.co,D.bLK,null)
D.a2d=new B.a0(60988,"MaterialIcons",!1)
D.bPs=new B.a0(61352,"MaterialIcons",!1)
D.ap2=new B.a0(61531,"MaterialIcons",!1)
D.bQD=new B.a0(63062,"MaterialIcons",!1)
D.bQK=new B.a0(63109,"MaterialIcons",!1)
D.bQX=new B.a0(63206,"MaterialIcons",!1)
D.apI=new B.a0(63238,"MaterialIcons",!1)
D.bRd=new B.a0(63338,"MaterialIcons",!1)
D.a2Q=new B.a0(63365,"MaterialIcons",!1)
D.a2R=new B.a0(63367,"MaterialIcons",!1)
D.a2S=new B.a0(63368,"MaterialIcons",!1)
D.apT=new B.a0(63384,"MaterialIcons",!1)
D.bRv=new B.a0(63525,"MaterialIcons",!1)
D.bRz=new B.a0(63568,"MaterialIcons",!1)
D.bRU=new B.a0(983072,"MaterialIcons",!1)
D.bSi=new B.a0(983271,"MaterialIcons",!0)
D.ar0=new B.a0(983965,"MaterialIcons",!1)
D.ar1=new B.a0(983966,"MaterialIcons",!1)
D.bTc=new B.a0(984592,"MaterialIcons",!1)
D.bTu=new B.ae(A.uL,16,A.aD,null,null,null)
D.ard=new B.ae(A.px,18,A.c,null,null,null)
D.bTT=new B.ae(A.CF,18,N.lF,null,null,null)
D.bUy=new B.ae(A.jI,11,null,null,null,null)
D.bUJ=new B.ae(A.a2x,null,A.es,null,null,null)
D.bVg=new B.ae(A.t5,18,A.aD,null,null,null)
D.bVm=new B.ae(A5.CU,14,null,null,null,null)
D.bVn=new B.ae(A.ej,28,A.c0,null,null,null)
D.bVz=new B.ae(A.qP,20,A.c,null,null,null)
D.bVG=new B.ae(A.zm,null,null,null,null,null)
D.bVL=new B.ae(A.jH,18,A.hv,null,null,null)
D.bVQ=new B.ae(A.k7,null,null,null,null,null)
D.bQF=new B.a0(63065,"MaterialIcons",!1)
D.bWt=new B.ae(D.bQF,15,A.c,null,null,null)
D.bQL=new B.a0(63113,"MaterialIcons",!1)
D.bWz=new B.ae(D.bQL,null,A.ab,null,null,null)
D.bWX=new B.ae(A.uK,22,A.bL,null,null,null)
D.bXh=new B.ae(A.t2,18,null,null,null,null)
D.bXn=new B.ae(A.D_,12,A.c,null,null,null)
D.bSR=new B.a0(983687,"MaterialIcons",!1)
D.bXz=new B.ae(D.bSR,null,A.bn,null,null,null)
D.bXI=new B.ae(A.hN,null,A.bn,null,null,null)
D.bY0=new B.ae(A.pC,22,A.c,null,null,null)
D.bY4=new B.ae(A.cB,13,A.c,null,null,null)
D.bYa=new B.ae(A.ej,26,A.ay,null,null,null)
D.bYe=new B.ae(A.t8,26,A.c,null,null,null)
D.PS=new B.ae(A.jI,8,A.c,null,null,null)
D.bYA=new B.ae(A.px,40,A.c,null,null,null)
D.bYB=new B.ae(A.bOp,null,null,null,null,null)
D.bYF=new B.ae(A.uX,20,null,null,null,null)
D.bSQ=new B.a0(983683,"MaterialIcons",!1)
D.bYQ=new B.ae(D.bSQ,null,A.b2,null,null,null)
D.bYR=new B.ae(A.jI,16,A.bn,null,null,null)
D.bZb=new B.ae(A.pz,null,null,null,null,null)
D.arP=new B.ae(A.wE,22,A.c,null,null,null)
D.bZh=new B.ae(A.ed,17,A.c,null,null,null)
D.arQ=new B.ae(A.jI,9,A.c,null,null,null)
D.bZm=new B.ae(A.wA,null,null,null,null,null)
D.bOG=new B.a0(57744,"MaterialIcons",!1)
D.bZt=new B.ae(D.bOG,null,null,null,null,null)
D.bZw=new B.ae(A.wA,16,null,null,null,null)
D.bTl=new B.a0(985181,"MaterialIcons",!1)
D.HX=new B.ae(D.bTl,null,null,null,null,null)
D.bZI=new B.ae(A.k7,16,A.bL,null,null,null)
D.bSJ=new B.a0(983615,"MaterialIcons",!1)
D.bZK=new B.ae(D.bSJ,12,A.c,null,null,null)
D.arW=new B.ae(A.z6,16,null,null,null,null)
D.bZS=new B.ae(A.ed,21,A.c,null,null,null)
D.bZX=new B.ae(A.hN,17,A.c,null,null,null)
D.bZY=new B.ae(A.uK,null,null,null,null,null)
D.c_f=new B.ae(A.a3w,20,A.aD,null,null,null)
D.c_u=new B.ae(A.oy,22,E.nz,null,null,null)
D.c_D=new B.ae(A.qO,13,A.ab,null,null,null)
D.c_G=new B.ae(A.aqM,20,A.aD,null,null,null)
D.bOn=new B.a0(57495,"MaterialIcons",!1)
D.c_L=new B.ae(D.bOn,null,null,null,null,null)
D.c_P=new B.ae(A.oz,18,A.c,null,null,null)
D.c0b=new B.ae(A.v1,28,A.c,null,null,null)
D.c0n=new B.ae(D.apI,null,A.aE,null,null,null)
D.c0o=new B.ae(A.qP,22,A.c,null,null,null)
D.as4=new B.ae(A.a29,16,null,null,null,null)
D.c1a=new B.ae(A.uK,32,A.c,null,null,null)
D.c1V=new B.ae(A.j8,22,A.c,null,null,null)
D.c1Y=new B.ae(A.t8,22,A.ab,null,null,null)
D.ask=new B.ae(A.uL,null,A.bW,null,null,null)
D.c2V=new B.ae(A.qJ,18,null,null,null,null)
D.c3x=new B.ae(A.ed,18,A.bk,null,null,null)
D.c3E=new B.ae(A.aqH,null,null,null,null,null)
D.c44=new B.e6(null,null,null,null,null,null,null,null,null,null,"Type here\u2026",null,A.aWp,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.eN,!0,null,null,null,null)
D.foR=new B.G(!0,A.bN,null,null,null,null,null,A.cE,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c4m=new B.e6(null,null,null,null,null,null,null,null,null,null,"Type here\u2026",null,D.foR,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,A.ag,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.eN,!0,null,null,null,null)
D.c4N=new B.e6(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"",null,null,null,null,null,null,null,null,null,null,null,A.eN,!0,null,null,null,null)
D.d8z=w([A.dN,A.aE],x.O)
D.c6V=new B.a8(A.a7,A.aa,A.x,D.d8z,null,null)
D.c76=new B.a8(A.b1,A.b7,A.W3,A.azt,null,null)
D.bfZ=new B.u(1,0.5568627450980392,0.5411764705882353,0.5215686274509804,A.q)
D.bl_=new B.u(1,0.23529411764705882,0.22745098039215686,0.21568627450980393,A.q)
D.boH=new B.u(1,0.7254901960784313,0.7058823529411765,0.6784313725490196,A.q)
D.biy=new B.u(1,0.1803921568627451,0.17254901960784313,0.16470588235294117,A.q)
D.cTw=w([D.bfZ,D.bl_,D.boH,D.biy],x.O)
D.c7q=new B.a8(A.aA,A.aF,A.x,D.cTw,A.Iu,null)
D.dxx=w([A.cI,A.bE,A.b8],x.O)
D.c7s=new B.a8(A.b1,A.b7,A.W3,D.dxx,null,null)
D.dz5=w([A.bn,A.ch],x.O)
D.c7x=new B.a8(A.a7,A.aa,A.x,D.dz5,null,null)
D.dtF=w([A.fH,A.d3,A.av],x.O)
D.c7z=new B.a8(A.aA,A.aF,A.x,D.dtF,null,null)
D.deX=w([A.cJ,A.fp],x.O)
D.c7D=new B.a8(A.a7,A.aa,A.x,D.deX,null,null)
D.dxq=w([N.lF,A.d3],x.O)
D.at6=new B.a8(A.a7,A.aa,A.x,D.dxq,null,null)
D.blJ=new B.u(1,0.9686274509803922,0.8901960784313725,0.6313725490196078,A.q)
D.dxn=w([D.blJ,D.yq,A.c4],x.O)
D.c7H=new B.a8(A.a7,A.aa,A.x,D.dxn,null,null)
D.daj=w([A.b4,A.d0,A.er],x.O)
D.c7I=new B.a8(A.aA,A.aF,A.x,D.daj,null,null)
D.Q9=new B.a8(A.a7,A.aa,A.x,A.IM,null,null)
D.bv7=new B.u(1,0.9019607843137255,0.7568627450980392,0.3607843137254902,A.q)
D.cMq=w([D.bv7,A.c4,A.jC],x.O)
D.atb=new B.a8(A.aA,A.aF,A.x,D.cMq,null,null)
D.dkL=w([A.ua,A.aC,D.BY],x.O)
D.c8J=new B.a8(A.a7,A.aa,A.x,D.dkL,null,null)
D.bwz=new B.u(1,0.43137254901960786,0.41568627450980394,0.396078431372549,A.q)
D.bjB=new B.u(1,0.6627450980392157,0.6431372549019608,0.615686274509804,A.q)
D.bpT=new B.u(1,0.3333333333333333,0.3215686274509804,0.3058823529411765,A.q)
D.d9p=w([D.bwz,D.bjB,D.bpT],x.O)
D.atc=new B.a8(A.a7,A.aa,A.x,D.d9p,null,null)
D.blL=new B.u(1,0.0392156862745098,0.06666666666666667,0.13333333333333333,A.q)
D.caI=w([AA.ake,D.blL],x.O)
D.c8S=new B.a8(A.b1,A.b7,A.x,D.caI,null,null)
D.d7j=w([A.mO,A.bD],x.O)
D.c8W=new B.a8(A.b1,A.b7,A.x,D.d7j,null,null)
D.dqe=w([A.aE,A.dO],x.O)
D.c90=new B.a8(A.a7,A.aa,A.x,D.dqe,null,null)
D.aj2=new B.u(1,0.1803921568627451,0.25882352941176473,0.4392156862745098,A.q)
D.aBd=w([D.aj2,D.jB,D.Mn],x.O)
D.c9v=new B.a8(A.aA,A.aF,A.x,D.aBd,null,null)
D.cMi=w([A.dB,A.dF],x.O)
D.c9F=new B.a8(A.b1,A.b7,A.x,D.cMi,null,null)
D.dn4=w([A.y3,A.yc],x.O)
D.car=new B.a8(A.a7,A.aa,A.x,D.dn4,null,null)
D.fUv=new B.B("Which Bio link?",null,A.cG,null,null,null,null,null,null,null,null,null)
D.caE=new B.q8(null,D.fUv,null,null,null,null,null,null,null,null,!0,null,null,!1,null,null,null,!1,null,null,null,null,null,null,null,null,!0,null,null)
D.zK=w([82,9,106,213,48,54,165,56,191,64,163,158,129,243,215,251,124,227,57,130,155,47,255,135,52,142,67,68,196,222,233,203,84,123,148,50,166,194,35,61,238,76,149,11,66,250,195,78,8,46,161,102,40,217,36,178,118,91,162,73,109,139,209,37,114,248,246,100,134,104,152,22,212,164,92,204,93,101,182,146,108,112,72,80,253,237,185,218,94,21,70,87,167,141,157,132,144,216,171,0,140,188,211,10,247,228,88,5,184,179,69,6,208,44,30,143,202,63,15,2,193,175,189,3,1,19,138,107,58,145,17,65,79,103,220,234,151,242,207,206,240,180,230,115,150,172,116,34,231,173,53,133,226,249,55,232,28,117,223,110,71,241,26,113,29,41,197,137,111,183,98,14,170,24,190,27,252,86,62,75,198,210,121,32,154,219,192,254,120,205,90,244,31,221,168,51,136,7,199,49,177,18,16,89,39,128,236,95,96,81,127,169,25,181,74,13,45,229,122,159,147,201,156,239,160,224,59,77,174,42,245,176,200,235,187,60,131,83,153,97,23,43,4,126,186,119,214,38,225,105,20,99,85,33,12,125],x.t)
D.a82=new C.lb(2,"elegantNavy")
D.hGq=w([A.Zt,D.jB,A.c4],x.O)
D.kc=new C.ye(0,"classic")
D.a7S=new C.jE("kuhowa_elegant_navy","Kuhowa \u2014 Bluu ya Kifalme",y.s,D.a82,4294967035,4279378237,4290283019,D.kc)
D.aKN=new C.lb(3,"elegantGold")
D.bfs=new B.u(1,1,0.9882352941176471,0.9529411764705882,A.q)
D.bgF=new B.u(1,0.6509803921568628,0.5176470588235295,0.22745098039215686,A.q)
D.ahl=new B.u(1,0.4196078431372549,0.2901960784313726,0.07058823529411765,A.q)
D.hFT=w([D.bfs,D.bgF,D.ahl],x.O)
D.a7Q=new C.jE("kuhowa_elegant_gold","Kuhowa \u2014 Dhahabu",y.Q,D.aKN,4294966515,4281016592,4289102906,D.kc)
D.dUP=new C.lb(22,"goldRibbon")
D.hFP=w([A.Zt,D.jB,A.iw],x.O)
D.a7J=new C.jE("kuhowa_gold_ribbon","Utepe wa Dhahabu","Pembe za bluu na dhahabu \xb7 almasi kati ya kila upande.",D.dUP,4294967035,4279378237,4291404327,D.kc)
D.dUQ=new C.lb(23,"goldBaroque")
D.ai6=new B.u(1,1,0.9647058823529412,0.8941176470588236,A.q)
D.hFV=w([D.ai6,A.aC,A.jC],x.O)
D.a7K=new C.jE("kuhowa_gold_baroque","Ukanda wa Dhahabu","Ukanda mzito wa dhahabu \xb7 rosette kwenye pembe.",D.dUQ,4294964964,4283053072,4292128567,D.kc)
D.dUS=new C.lb(4,"elegantEmerald")
D.bhZ=new B.u(1,0.9647058823529412,0.984313725490196,0.9725490196078431,A.q)
D.biZ=new B.u(1,0.054901960784313725,0.23137254901960785,0.1803921568627451,A.q)
D.hG0=w([D.bhZ,D.biZ,A.iw],x.O)
D.a7L=new C.jE("kuhowa_elegant_emerald","Kuhowa \u2014 Zumaridi","Mpaka mwembamba wa dhahabu \xb7 vichwa vya kijani ya zumaridi.",D.dUS,4294376440,4279122734,4291404327,D.kc)
D.dUT=new C.lb(5,"elegantBurgundy")
D.bnn=new B.u(1,1,0.9686274509803922,0.9647058823529412,A.q)
D.hG7=w([D.bnn,A.agt,A.iw],x.O)
D.a7O=new C.jE("kuhowa_elegant_burgundy","Kuhowa \u2014 Mvinyo","Mpaka mwembamba wa dhahabu \xb7 vichwa vya rangi ya mvinyo.",D.dUT,4294965238,4283043359,4291404327,D.kc)
D.dUM=new C.lb(19,"goldFiligree")
D.N9=new B.u(1,1,0.984313725490196,0.9529411764705882,A.q)
D.hFW=w([D.N9,A.aC,A.jC],x.O)
D.a7M=new C.jE("kuhowa_gold_filigree","Dhahabu ya Filigree","Mpaka wa dhahabu mara tatu \xb7 pembe za mapambo.",D.dUM,4294966259,4279378237,4292128567,D.kc)
D.dUN=new C.lb(20,"goldLaurel")
D.buY=new B.u(1,0.47843137254901963,0.3607843137254902,0.0784313725490196,A.q)
D.hG8=w([A.Mf,A.iw,D.buY],x.O)
D.a7N=new C.jE("kuhowa_gold_laurel","Taji ya Dhahabu","Majani ya dhahabu kando \xb7 almasi kwenye pembe.",D.dUN,4294966776,4282000405,4291404327,D.kc)
D.dUO=new C.lb(21,"goldCrest")
D.agk=new B.u(1,1,0.9725490196078431,0.9254901960784314,A.q)
D.bv4=new B.u(1,0.4196078431372549,0.30980392156862746,0.07058823529411765,A.q)
D.hFY=w([D.agk,A.aC,D.bv4],x.O)
D.a7R=new C.jE("kuhowa_gold_crest","Muhuri wa Dhahabu","Medali za dhahabu kwenye pembe \xb7 shanga za lulu.",D.dUO,4294965484,4283053072,4292128567,D.kc)
D.dUR=new C.lb(24,"goldStar")
D.bwq=new B.u(1,1,0.9882352941176471,0.9647058823529412,A.q)
D.hG1=w([D.bwq,A.aC,D.jB],x.O)
D.a7P=new C.jE("kuhowa_gold_star","Nyota ya Dhahabu","Nyota za dhahabu kwenye pembe \xb7 mstari wa bluu ndani.",D.dUR,4294966518,4279378237,4292128567,D.kc)
D.I6=w([D.a7S,D.a7Q,D.a7J,D.a7K,D.a7L,D.a7O,D.a7M,D.a7N,D.a7R,D.a7P],x.h)
D.r0=new C.mV(0,"blank")
D.TM=new C.mV(1,"title")
D.n8=new C.mV(2,"titleContent")
D.eer=new C.mV(3,"twoColumn")
D.E0=new C.mV(4,"section")
D.ees=new C.mV(5,"comparison")
D.Jj=new C.mV(6,"flashcard")
D.Jk=new C.mV(7,"quiz")
D.Jl=new C.mV(8,"worksheet")
D.atw=w([D.r0,D.TM,D.n8,D.eer,D.E0,D.ees,D.Jj,D.Jk,D.Jl],B.at("O<mV>"))
D.aCk=w([Aq.YK,A.dF],x.O)
D.kZ=w([A.c4,A.bL,A.hG,A.ia,D.BY],x.O)
D.dQy=new C.jb("fireworks","Royal Fireworks","Thank you for celebrating with us",D.aCk,D.kZ)
D.bvk=new B.u(1,0.2901960784313726,0.050980392156862744,0.11764705882352941,A.q)
D.bnl=new B.u(1,0.07058823529411765,0.011764705882352941,0.0392156862745098,A.q)
D.d7x=w([D.bvk,D.bnl],x.O)
D.dQp=new C.jb("confetti","Golden Confetti","Together we rise",D.d7x,D.kZ)
D.d4o=w([A.o7,A.Yk],x.O)
D.dQq=new C.jb("crown","Crown of Glory","Built for our community",D.d4o,D.kZ)
D.bjo=new B.u(1,0.011764705882352941,0.10588235294117647,0.1803921568627451,A.q)
D.bmZ=new B.u(1,0.00392156862745098,0.023529411764705882,0.058823529411764705,A.q)
D.dbM=w([D.bjo,D.bmZ],x.O)
D.v7=w([A.bN,A.aS,A.c,A.bl,A.an],x.O)
D.dQk=new C.jb("aurora","Aurora Gala","A brighter future, together",D.dbM,D.v7)
D.boJ=new B.u(1,0.027450980392156862,0.01568627450980392,0.00392156862745098,A.q)
D.dnd=w([G.afV,D.boJ],x.O)
D.dQB=new C.jb("champagne","Champagne Toast","Cheers to every member",D.dnd,D.kZ)
D.dQC=new C.jb("diamonds","Diamond Rain","Every member is a jewel",A0.aD5,D.v7)
D.bgt=new B.u(1,0.3568627450980392,0.16470588235294117,0.023529411764705882,A.q)
D.bmo=new B.u(1,0.10196078431372549,0.043137254901960784,0.00784313725490196,A.q)
D.dsS=w([D.bgt,D.bmo],x.O)
D.dQf=new C.jb("starburst","Golden Starburst","Thank you!",D.dsS,D.kZ)
D.caP=w([A.fo,A.yh],x.O)
D.ag4=new B.u(1,0.615686274509804,0.3058823529411765,0.3607843137254902,A.q)
D.RK=w([A.pg,A.iv,A.wg,A.o8,D.ag4],x.O)
D.dQJ=new C.jb("balloons","Luxury Balloons","Let's celebrate",D.caP,D.RK)
D.d3B=w([A.Yy,A.w],x.O)
D.dQx=new C.jb("galaxy","Galaxy Spiral","The sky is not the limit",D.d3B,D.v7)
D.bt4=new B.u(1,0.047058823529411764,0.00392156862745098,0.00392156862745098,A.q)
D.djs=w([A.kt,D.bt4],x.O)
D.dQs=new C.jb("redcarpet","Red Carpet","Tonight we shine",D.djs,D.kZ)
D.bqz=new B.u(1,0.10980392156862745,0.0784313725490196,0.0196078431372549,A.q)
D.bos=new B.u(1,0.0196078431372549,0.011764705882352941,0.00392156862745098,A.q)
D.dob=w([D.bqz,D.bos],x.O)
D.dQh=new C.jb("coins","Gold Coin Rain","Every contribution counts",D.dob,D.kZ)
D.dvJ=w([A.dB,A.i9],x.O)
D.dQn=new C.jb("lanterns","Sky Lanterns","Lighting the way together",D.dvJ,D.kZ)
D.bkE=new B.u(1,0.0784313725490196,0.00784313725490196,0.0392156862745098,A.q)
D.d1m=w([A.yj,D.bkE],x.O)
D.dQj=new C.jb("hearts","Floating Hearts","Made with love",D.d1m,D.RK)
D.bh6=new B.u(1,0.23137254901960785,0.0392156862745098,0.10980392156862745,A.q)
D.bi5=new B.u(1,0.058823529411764705,0.00784313725490196,0.027450980392156862,A.q)
D.dxl=w([D.bh6,D.bi5],x.O)
D.dQI=new C.jb("petals","Rose Petals","Thank you, from our hearts",D.dxl,D.RK)
D.bub=new B.u(1,0.00784313725490196,0.06274509803921569,0.0392156862745098,A.q)
D.dtd=w([A.lg,D.bub],x.O)
D.dQe=new C.jb("butterflies","Golden Butterflies","New beginnings",D.dtd,D.kZ)
D.bpO=new B.u(1,0.0392156862745098,0.0392156862745098,0.12156862745098039,A.q)
D.d2r=w([D.bpO,A.w],x.O)
D.dQA=new C.jb("neon","Neon Night","Let's go!",D.d2r,D.v7)
D.bm0=new B.u(1,0.0196078431372549,0.00392156862745098,0.050980392156862744,A.q)
D.dqq=w([A.MK,D.bm0],x.O)
D.dQD=new C.jb("disco","Disco Ball","Party time",D.dqq,D.v7)
D.bqo=new B.u(1,0.11764705882352941,0.0392156862745098,0.1803921568627451,A.q)
D.dpW=w([A.fH,D.bqo],x.O)
D.dQi=new C.jb("sunrise","Golden Sunrise","A new day for our community",D.dpW,D.kZ)
D.dpx=w([A.rE,A.dF],x.O)
D.dQE=new C.jb("pearls","Ocean Pearls","Deep roots, bright future",D.dpx,D.v7)
D.bjv=new B.u(1,0.047058823529411764,0.11764705882352941,0.22745098039215686,A.q)
D.dpL=w([D.bjv,A.dF],x.O)
D.dQH=new C.jb("snow","Winter Gala","Warm wishes to all",D.dpL,D.v7)
D.bfB=new B.u(1,0.0784313725490196,0.13725490196078433,0.10196078431372549,A.q)
D.bgT=new B.u(1,0.01568627450980392,0.03137254901960784,0.0196078431372549,A.q)
D.dwe=w([D.bfB,D.bgT],x.O)
D.dQw=new C.jb("laurel","Laurel Victory","We did it together",D.dwe,D.kZ)
D.bfr=new B.u(1,0.12156862745098039,0.06274509803921569,0.2,A.q)
D.bmV=new B.u(1,0.027450980392156862,0.011764705882352941,0.050980392156862744,A.q)
D.d0k=w([D.bfr,D.bmV],x.O)
D.dQG=new C.jb("ribbons","Silk Ribbons","Elegance in every step",D.d0k,D.kZ)
D.bo6=new B.u(1,0.023529411764705882,0.01568627450980392,0.00784313725490196,A.q)
D.cMf=w([G.BX,D.bo6],x.O)
D.dQt=new C.jb("kente","Kente Pride","Proud of our roots",D.cMf,D.kZ)
D.brf=new B.u(1,0.1411764705882353,0.10196078431372549,0.0196078431372549,A.q)
D.buz=new B.u(1,0.027450980392156862,0.0196078431372549,0.00392156862745098,A.q)
D.ddz=w([D.brf,D.buz],x.O)
D.dQo=new C.jb("trophy","Trophy Shine","Winners together",D.ddz,D.kZ)
D.dpS=w([Ar.Mu,A.w],x.O)
D.dQg=new C.jb("shooting","Shooting Stars","Make a wish",D.dpS,D.v7)
D.bfL=new B.u(1,0.10980392156862745,0.07058823529411765,0.023529411764705882,A.q)
D.ak_=new B.u(1,0.0196078431372549,0.011764705882352941,0.00784313725490196,A.q)
D.dwx=w([D.bfL,D.ak_],x.O)
D.dQu=new C.jb("bokeh","Golden Bokeh","Shine bright",D.dwx,D.kZ)
D.bgb=new B.u(1,0.0392156862745098,0.058823529411764705,0.1411764705882353,A.q)
D.dkj=w([D.bgb,A.w],x.O)
D.dQm=new C.jb("orbits","Golden Orbits","Always moving forward",D.dkj,D.kZ)
D.buc=new B.u(1,0.0392156862745098,0.011764705882352941,0.047058823529411764,A.q)
D.dgx=w([A.ahg,D.buc],x.O)
D.dQr=new C.jb("flowers","Blooming Garden","Growing together",D.dgx,D.RK)
D.bfX=new B.u(1,0.07450980392156863,0.027450980392156862,0.1803921568627451,A.q)
D.bgK=new B.u(1,0.00784313725490196,0.00392156862745098,0.03137254901960784,A.q)
D.dva=w([D.bfX,D.bgK],x.O)
D.dQl=new C.jb("music","Music Party","Celebrate with us",D.dva,D.v7)
D.bhK=new B.u(1,0.16470588235294117,0.0392156862745098,0.22745098039215686,A.q)
D.bv0=new B.u(1,0.027450980392156862,0.00784313725490196,0.047058823529411764,A.q)
D.d1A=w([D.bhK,D.bv0],x.O)
D.dQF=new C.jb("mandala","Royal Mandala","Harmony and unity",D.d1A,D.kZ)
D.dgD=w([G.BX,D.ak_],x.O)
D.dQz=new C.jb("sparklers","Golden Sparklers","Light up the night",D.dgD,D.kZ)
D.dQv=new C.jb("city","City Lights","The whole city celebrates",D.aCk,D.kZ)
D.If=w([D.dQy,D.dQp,D.dQq,D.dQk,D.dQB,D.dQC,D.dQf,D.dQJ,D.dQx,D.dQs,D.dQh,D.dQn,D.dQj,D.dQI,D.dQe,D.dQA,D.dQD,D.dQi,D.dQE,D.dQH,D.dQw,D.dQG,D.dQt,D.dQo,D.dQg,D.dQu,D.dQm,D.dQr,D.dQl,D.dQF,D.dQz,D.dQv],B.at("O<jb>"))
D.eGq=new B.y("","No ring")
D.eWV=new B.y("platinum","Platinum")
D.eSX=new B.y("glow","Glow")
D.eKa=new B.y("double","Double line")
D.eJ3=new B.y("framed","Gallery frame")
D.eFX=new B.y("rosegold","Rose gold")
D.eTM=new B.y("jewels","Jeweled")
D.eQn=new B.y("aurora","Aurora")
D.Dj=w([D.eGq,A.Ux,D.eWV,D.eSX,M.aRA,D.eKa,A.aRy,D.eJ3,D.eFX,D.eTM,D.eQn],x.L)
D.cvo=w([D.a7M,D.a7N,D.a7R,D.a7J,D.a7K,D.a7P],x.h)
D.c_5=new B.ae(G.aoD,16,null,null,null,null)
D.baA=new B.w4(A.bp,D.c_5,null,x.U)
D.bOP=new B.a0(58027,"MaterialIcons",!1)
D.bTA=new B.ae(D.bOP,16,null,null,null,null)
D.bay=new B.w4(A.K,D.bTA,null,x.U)
D.bOQ=new B.a0(58030,"MaterialIcons",!1)
D.bXG=new B.ae(D.bOQ,16,null,null,null,null)
D.baB=new B.w4(A.e4,D.bXG,null,x.U)
D.cBH=w([D.baA,D.bay,D.baB],B.at("O<w4<qn>>"))
D.cJw=w([A.C1,A.hF],x.O)
D.cJx=w([A.b4,A.bd,A.er],x.O)
D.Rz=w([A.bL,A.ia,A.hG,A.aC,A.o8],x.O)
D.cMl=w([A.c4,D.jB,D.Mn],x.O)
D.cMT=w([1,2,4,8,16,32,64,128,27,54,108,216,171,77,154,47,94,188,99,198,151,53,106,212,179,125,250,239,197,145],x.t)
D.eDK=new B.y(4278913286,4280030216)
D.eE1=new B.y(4279373061,4278518787)
D.eE8=new B.y(4279898630,4278847235)
D.dcW=w([D.eDK,D.eE1,D.eE8],x.n)
D.d8i=w(["\u265b","\u269c","\u2726"],x.s)
D.dUK=new C.yg("Royal Onyx & Gold",D.dcW,4292128567,4294370209,4294965479,3874020544,D.d8i)
D.eDx=new B.y(4278326799,4278598442)
D.eDz=new B.y(4278395929,4278258953)
D.eDG=new B.y(4278599728,4278327826)
D.dvA=w([D.eDx,D.eDz,D.eDG],x.n)
D.d2j=w(["\u269c","\u2756","\u2727"],x.s)
D.dUH=new C.yg("Imperial Emerald",D.dvA,4293050997,4294699968,4294180856,3872254170,D.d2j)
D.eDA=new B.y(4278455076,4278918747)
D.eDF=new B.y(4278587439,4278322714)
D.eDT=new B.y(4279051376,4278455076)
D.dtB=w([D.eDA,D.eDF,D.eDT],x.n)
D.dl4=w(["\u2654","\u2726","\u2748"],x.s)
D.dUB=new C.yg("Sapphire Crown",D.dtB,4291417834,4294967295,4294310143,3871986666,D.dl4)
D.eE6=new B.y(4279894534,4283041554)
D.eEi=new B.y(4281008906,4279042307)
D.eEq=new B.y(4284221976,4279894534)
D.dzL=w([D.eE6,D.eEi,D.eEq],x.n)
D.d3K=w(["\u265b","\u2766","\u2726"],x.s)
D.dUD=new C.yg("Ruby Throne",D.dzL,4293378685,4294963145,4294964466,3874213833,D.d3K)
D.eE0=new B.y(4279371039,4281995100)
D.eEa=new B.y(4280092723,4278714896)
D.eEn=new B.y(4283045242,4279371039)
D.dvY=w([D.eE0,D.eEa,D.eEn],x.n)
D.dtZ=w(["\u2655","\u2756","\u2727"],x.s)
D.dUI=new C.yg("Amethyst Palace",D.dvY,4293314984,4294963421,4294702591,3873229802,D.dtZ)
D.eDC=new B.y(4278519045,4280032287)
D.eDU=new B.y(4279111184,4278321666)
D.eEf=new B.y(4280492839,4278716426)
D.dsl=w([D.eDC,D.eDU,D.eEf],x.n)
D.dje=w(["\u2726","\u25c6","\u2742"],x.s)
D.dUF=new C.yg("Obsidian & Platinum",D.dsl,4293256418,4294967295,4294638330,3872378836,D.dje)
D.eE7=new B.y(4279896588,4282194463)
D.eEg=new B.y(4280553487,4279043334)
D.eEo=new B.y(4283048488,4279896588)
D.diD=w([D.eE7,D.eEg,D.eEo],x.n)
D.dxQ=w(["\u2766","\u273f","\u2727"],x.s)
D.dUC=new C.yg("Rose Gold Velvet",D.diD,4293440672,4294960345,4294964979,3874214602,D.dxQ)
D.eDD=new B.y(4278520340,4279180595)
D.eDI=new B.y(4278718495,4278322443)
D.eE4=new B.y(4279510591,4278520340)
D.cTc=w([D.eDD,D.eDI,D.eE4],x.n)
D.djY=w(["\u269c","\u2736","\u2756"],x.s)
D.dUG=new C.yg("Midnight Brass",D.cTc,4291405148,4293975208,4294439914,3872837564,D.djY)
D.eED=new B.y(4294703086,4293780428)
D.eEz=new B.y(4294307549,4293187253)
D.eEE=new B.y(4294966517,4293977807)
D.d65=w([D.eED,D.eEz,D.eEE],x.n)
D.dkn=w(["\u269c","\u265b","\u2726"],x.s)
D.dUJ=new C.yg("Ivory Marble & Gold",D.d65,4289760572,4286209048,4280951062,3863625518,D.dkn)
D.eDO=new B.y(4278978566,4280555024)
D.eE3=new B.y(4279504137,4278518530)
D.eEk=new B.y(4281211923,4278978566)
D.d3A=w([D.eDO,D.eE3,D.eEk],x.n)
D.duL=w(["\u2742","\u2726","\u265c"],x.s)
D.dUE=new C.yg("Onyx & Copper",D.d3A,4291856987,4294365880,4294964718,3873885630,D.duL)
D.cN0=w([D.dUK,D.dUH,D.dUB,D.dUD,D.dUI,D.dUF,D.dUC,D.dUG,D.dUJ,D.dUE],B.at("O<yg>"))
D.cPp=w([A.aC,D.BY,A.ia],x.O)
D.eMq=new B.y("Original",null)
D.eMA=new B.y("Wide 16:9",1.7777777777777777)
D.eOY=new B.y("Landscape 3:2",1.5)
D.eLR=new B.y("Photo 4:3",1.3333333333333333)
D.f_P=new B.y("Portrait 3:4",0.75)
D.azC=w([D.eMq,D.eMA,D.eOY,D.eLR,M.aRo,D.f_P],B.at("O<+(n,F?)>"))
D.azD=w([A.ia,A.bT,A.b9,A.bg],x.O)
D.eP9=new B.y("","Original")
D.eR6=new B.y("circle","Circle")
D.eXJ=new B.y("rounded","Rounded")
D.eYJ=new B.y("triangle","Triangle")
D.eTd=new B.y("hexagon","Hexagon")
D.eRx=new B.y("diamond","Diamond")
D.eQm=new B.y("arch","Arch")
D.Dp=w([D.eP9,D.eR6,D.eXJ,D.eYJ,D.eTd,D.eRx,D.eQm],x.L)
D.dPE=new C.lu("classic_blue","Classic Blue","Normal",A.bn,A.c,A.lh,A.da,A.aM)
D.dPU=new C.lu("campus_green","Campus Green","Normal",A.b2,A.nw,A.uc,A.he,A.cX)
D.dPL=new C.lu("warm_sand","Warm Sand","Normal",A.e0,A.hG,A.bL,A.ic,A.od)
D.dPS=new C.lu("slate_minimal","Slate Minimal","Normal",A.bw,A.aS,A.bl,A.a_,A.aM)
D.dPD=new C.lu("coral_fresh","Coral Fresh","Normal",A.c6,A.hY,A.q9,A.ku,A.u5)
D.dPT=new C.lu("lavender_calm","Lavender Calm","Normal",A.b8,A.qc,A.qe,A.nv,A.kp)
D.dPF=new C.lu("ocean_breeze","Ocean Breeze","Normal",A.fp,A.rM,A.u1,A.u7,A.of)
D.aja=new B.u(1,0.9803921568627451,0.9607843137254902,1,A.q)
D.dPQ=new C.lu("berry_pop","Berry Pop","Normal",A.fe,D.aja,A.kN,G.a_5,A.C2)
D.dPG=new C.lu("midnight_pro","Midnight Pro","Professional",A.aE,A.a_,A.dB,A.kN,A.cx)
D.dPP=new C.lu("executive_navy","Executive Navy","Professional",A.d7,A.ail,A.da,A.lf,A.bN)
D.dPN=new C.lu("boardroom_charcoal","Boardroom Charcoal","Professional",A.an,A.br,A.a_,A.aS,A.cx)
D.dPH=new C.lu("corporate_steel","Corporate Steel","Professional",A.oh,A.a_,A.mR,A.fI,A.bN)
D.dPK=new C.lu("gold_luxe","Gold Luxe","Luxury",A.mJ,A.dW,A.pe,A.m4,A.bL)
D.bqt=new B.u(1,0.10196078431372549,0.0392156862745098,0.058823529411764705,A.q)
D.dPO=new C.lu("rose_gold_elite","Rose Gold Elite","Luxury",A.hF,D.bqt,A.ZO,A.iv,A.o8)
D.dPR=new C.lu("platinum_night","Platinum Night","Luxury",A.cx,A.dF,A.br,A.aS,A.bl)
D.dPV=new C.lu("emerald_prestige","Emerald Prestige","Luxury",A.aV,A.qh,A.eX,A.qq,A.jV)
D.dPC=new C.lu("royal_purple","Royal Purple","Luxury",A.nu,A.YR,A.kp,A.kN,A.Me)
D.dPM=new C.lu("neon_pitch","Neon Pitch","Bold",A.b9,A.dF,A.a_,A.aZ,A.bl)
D.dPJ=new C.lu("crimson_impact","Crimson Impact","Bold",A.bD,A.kt,A.el,A.rN,A.eW)
D.dPI=new C.lu("sunset_gallery","Sunset Gallery","Bold",A.fq,A.u5,A.ku,A.q9,A.mP)
D.Ip=w([D.dPE,D.dPU,D.dPL,D.dPS,D.dPD,D.dPT,D.dPF,D.dPQ,D.dPG,D.dPP,D.dPN,D.dPH,D.dPK,D.dPO,D.dPR,D.dPV,D.dPC,D.dPM,D.dPJ,D.dPI],B.at("O<lu>"))
D.d04=w([A.c4,D.jB],x.O)
D.diX=w(["\ud83d\ude00","\ud83d\ude03","\ud83d\ude04","\ud83d\ude01","\ud83d\ude0a","\ud83d\ude0e","\ud83e\udd29","\ud83e\udd73","\ud83d\ude07","\ud83e\udd17","\ud83d\ude4c","\ud83d\udc4f","\ud83e\udd1d","\ud83d\udc4d","\ud83d\udc4b","\ud83d\udcaa","\ud83d\ude4f","\u2728"],x.s)
D.eQ6=new B.y("Faces & people",D.diX)
D.cPt=w(["\ud83d\udca1","\ud83c\udfaf","\ud83d\ude80","\ud83d\udcc8","\ud83d\udcca","\ud83d\udccc","\ud83d\udccd","\ud83d\udce3","\ud83d\udd14","\ud83e\udded","\ud83d\udee0\ufe0f","\ud83d\udd27","\u2699\ufe0f","\ud83e\udde0","\ud83d\udcda","\ud83d\udcdd","\u270f\ufe0f","\ud83d\udcd6","\ud83d\uddc2\ufe0f","\ud83d\udcc5","\u23f0","\u2705","\u274c","\u26a0\ufe0f","\u2753","\u2757"],x.s)
D.eCm=new B.y("Ideas & work",D.cPt)
D.d8O=w(["\ud83c\udf3f","\ud83c\udf31","\ud83c\udf33","\ud83c\udf38","\ud83c\udf3c","\ud83c\udf3b","\ud83c\udf1e","\ud83c\udf08","\ud83c\udf0a","\ud83d\udd25","\ud83d\udca7","\u2744\ufe0f","\ud83c\udf19","\u2b50","\ud83c\udf1f","\u2600\ufe0f","\ud83c\udf40"],x.s)
D.eTi=new B.y("Nature",D.d8O)
D.dj5=w(["\ud83c\udfe0","\ud83c\udfeb","\ud83c\udfe5","\ud83c\udfe6","\ud83c\udfea","\ud83d\ude97","\ud83d\ude8c","\u2708\ufe0f","\ud83c\udf81","\ud83d\udcb0","\ud83d\udcb5","\ud83d\udcb3","\ud83d\uded2","\ud83c\udfc6","\ud83e\udd47","\ud83c\udf89","\ud83c\udf88","\ud83c\udfb6","\ud83c\udfb5","\ud83c\udfa4","\ud83d\udcf7","\ud83c\udfac","\ud83d\uddbc\ufe0f","\ud83d\udcbb","\ud83d\udcf1"],x.s)
D.eMo=new B.y("Places & things",D.dj5)
D.dct=w(["\u2764\ufe0f","\ud83d\udc9a","\ud83d\udc99","\ud83d\udc9c","\ud83e\udde1","\ud83d\udc9b","\ud83d\udda4","\ud83e\udd0d","\u2b06\ufe0f","\u27a1\ufe0f","\ud83d\udd36","\ud83d\udd37","\ud83d\udd34","\ud83d\udfe2","\ud83d\udd35","\ud83d\udfe1"],x.s)
D.eQr=new B.y("Symbols",D.dct)
D.d0a=w([D.eQ6,D.eCm,D.eTi,D.eMo,D.eQr],B.at("O<+(n,ai<n>)>"))
D.bg1=new B.u(1,0.22745098039215686,0.15294117647058825,0.03137254901960784,A.q)
D.d0w=w([A.c4,D.ahl,D.bg1],x.O)
D.b9Q=new B.ab(0,A.G,A.Fy,A.aLD,40)
D.b9r=new B.ab(0,A.G,A.pa,A.ev,8)
D.d0J=w([D.b9Q,D.b9r],x.V)
D.d1g=w([4280171146,4280640491,4279080072,4278556265],x.t)
D.aA0=w([4294677052,4294626325,4293870660,4294210230,4287323382,4282090230,4280472558,4283096704,4294967295,4279310375],x.t)
D.a5h=w([A.ia,A.er,A.bD,A.as,A.c6],x.O)
D.d2c=w(["All","Robotic","Nature","Warm","Bold","Clean"],x.s)
D.ahB=new B.u(1,0.043137254901960784,0.0392156862745098,0.03137254901960784,A.q)
D.d2o=w([A.ZE,D.ahB,A.ZE],x.O)
D.d2t=w(["HOME: the first tab. It has the NGMY brand, the Helper AI, loans, and the tech frames: Neural Link, Signal Grid, Core Protocol and the Vault Channel arcade.","TOOL HUB: the second tab. It holds the Business Card Creator, Menu Studio (restaurant menus and Bio link pages) and Business Essentials (invoices, receipts, flyers and other business papers).","SLIDES: the third tab. Presentations with many designs, an AI that makes decks, and Marriage documents.","NGMY HUB: the centre tab. Civic Registry, NGMY Store, Help Center and Insurance, Document Scanner, and the App Builder when it is switched on.","ADVISORS: the fifth tab. AI advisors you can chat with like real people. They help with jobs, applications, benefits and everyday questions, and they can answer in Swahili when you write Swahili.","CREATOR HUB: the sixth tab. Doc Share, Quote Calc, QR Generator, Play Zone, Kiswahili School, Recorder Studio, Video Studio and Phone Unlock.","PROFILE: the seventh tab. Theme, logout, legal pages and Worksheets (Projects, Cashier IOUs and receipts, and the Family Tree).","GROWTH INCOME: For now the Growth Income button (the wifi icon, top right of Home) works only for the admin: everyone else sees the same icon but it does not open. members buy an investment plan and earn daily by clocking in, on work days only (Monday to Friday, there is no clock-in on Saturday and Sunday). The wallet shows the balance, deposits, withdrawals and a history of the last two months, with the balance before and after each move. Missing 3 work days in a month removes the investment plan (a new plan must be bought), and the count starts again each month; a warning shows after the 2nd missed day. Clocking in 30 minutes late or more takes 30 percent off the earnings for that day. The investment plans are $5, $20, $30, $50 and $100; $100 is the most expensive plan and nothing above it is offered.","KING AND QUEEN CROWN: a crown badge for special members. A King or Queen receives a daily crown reward of one dollar, and the receipt shows in the wallet history.","WALLET: one balance everywhere in the app. The server keeps the balance so every phone shows the same number.","LOANS: Loan Services is a community help service: it helps members when they need help, for example funerals, buying a car, car repairs or family emergencies. For now the Loan Service button (top left of Home) works only for the admin: everyone else sees the same icon but it cannot be opened. The loan calculator (amount, interest rate and repayment period to try, the whole cost and every payment, and a button to make the tried terms the real loan terms) is for the admin only. The How it works frame is a five-step timeline (Apply, Review, Funds, Repay, Released). A loan is applied for with collateral, repaid in weekly payments, and the collateral is released back to the member when the loan is fully repaid. The admin sets the interest rate, the biggest loan and the repayment period in Loan Center, Loan terms; nothing is written into the screens. Before applying, the member sees the full cost (amount, interest, total to repay, number of payments, each payment, repayment period) and must tap I agree; the agreement is saved with the application. The application asks what the member needs help with (Funeral or Burial, Buy a car, Car repair, Family emergency, Other need), the date needed, the collateral with its estimated value and photos, and an optional family or guarantor contact. A loan shows as Pending, Approved, Paid Out, In Repayment, Repaid, Overdue or Declined, and the member sees a gentle reminder about the next payment.","NGMY STORE: buy and sell items inside the app. Approved members can open a store.","CIVIC REGISTRY: the community system for the M'MBONDO community. It registers members with a Registry ID card, counts members by state, records contributions with receipts, and lets Authorized Registrars enroll families. Registrars can print the community roster as a PDF.","CIVIC BIRTHDAYS AND FAMILY: the registry records children and their ages, shows a birthday reminder two days before, and congratulates a child on turning 18. Members can have a nickname that others search for, while registrars see the real name.","CIVIC VOTING AND STATE WALLET: the community votes on decisions inside the app, and each state has a wallet showing its funds, spending and trust deposits so the money is visible to everyone.","LIGHTNING GROUPS: groups inside the Civic Registry where people give together. A person asks to join with a name, phone number, state and address, and the group owner approves. The group shows named contribution rounds, receipts, who gave, who missed and how many times.","JOBS AND HELP: help finding jobs, house repairs and house workers, a Help Center with insurance, and the Helper AI for support.","CORE PROTOCOL: a collection of studios for curious minds: Universe, Electronics Lab (the AI Inventor now lives inside it as the AI button at the top), Construction Lab (real 3D wiring, plumbing and a house), Discovery Lab (Body Explorer, a real 3D human you can turn and look inside), Toolbox, Reaction Lab, Spark Painter, Rocket Lander, Title Animator and Circuit Lab. (Molecule Maker, DNA Lab, Ecosystem Lab, Balance Lab, Gear Lab, Laser Maze, Light Mixer, Orbit Studio, Swarm Studio, Chain Burst, Marble Music and Orbit Sequencer and Cipher Lab were removed and no longer exist.)","CITY AVATARS: the people of My House are the real characters from the NGMY 3D viewer files (Xbot.glb the X Bot, Michelle.glb the Dancer, Soldier.glb the Soldier), kept in the app (assets/avatars) and drawn with their own skeletons and animations (the X Bot and Soldier stand and walk, the Dancer dances). Their skin pictures are painted onto the body faces, and the body is thinned to a few thousand faces so the game stays quick, so they look a little more faceted than in the viewer. The X Bot is the one who goes through the rooms on the house tour and that you steer outside; in the tour sheet (Play) a Who walks the house? choice switches the tour guide to the Dancer, the Soldier or a plain person. The residents are the three characters too: they stay in the house, some stroll out into the garden for a while and go back in, and a resident with an open call for help shows a phone icon in the name. In every view of My House you can turn the camera all the way round (360) by dragging, with no button needed; Look all round (360) only moves you to the middle of the room at a normal distance. Names no longer float over the people in the rooms: tap a person to see their card. Outside, in the garden and town, the sky behind is space with stars, a galaxy, the Earth and the Moon. The Dancer is played slowly and kept on her spot, and the Soldier now faces the way he walks.","MY HOUSE, THE HALL AND THE CITY: the hall is a wide lobby: three doors in the middle of the back wall (the living room, the kitchen, the first bedroom) with a big video-wall TV on each side showing NGMY ads, the other seven doors on the two short walls, a blue carpet with the NGMY logo, sofas, armchairs, plants, lamps and consoles. In the Tour sheet, Book a hallway tour plays a tour of just the hall. Tapping a door asks whether to open it, close it or go through it. Outlets, switches, doors with their handles, TV frames, wall trim and the wiring job room are drawn so they never disappear when the camera turns, and from outside the house its walls hide the room. The residents live in the city (the Garden is the whole city): they walk about the streets, those with a call for help stand with a phone and a Help sign, and tapping the hospital or the shop building (or the Calls, Hospital, Shop and People buttons, or Community) opens those services over the city. In the city a Walk the city button gives you the walking controls, and Build adds roads, buildings and other things. Nobody is placed in the rooms during the house tour.","WALKING THE CITY: in the Garden (the whole city) press Walk the city and a round stick appears: slide a finger on it to walk, further from the middle is faster, and the Run and Jump buttons make the person run and jump. Walk up to the front door of the house, the hospital or the shop and the person goes in; inside the hospital walk onto the blue mat to admit the sick and up to a bed to treat the patient, inside the shop walk onto the yellow mat for food and the purple mat for medicine, and walk onto the green mat to go out. Near an animal an Act button feeds it for a point, and near a car, ambulance or fire truck it lets you get in and drive it with the stick and park it. When somebody calls for help the phone rings with a call banner: Answer opens the calls. Phone, hospital, shop, animals and cars are all in the city, and the hall of the house shows only three doors: the other rooms are reached from the map or from their own door.","ELECTRICAL SAFETY SCHOOL: every wiring lesson and job is judged by one safety engine. A job is CORRECT only if the connections are on the right terminals, complete and safe; a device that works (a TV that plays, a fan that spins) is never proof of safe wiring. Swapped hot and neutral, a missing neutral or ground, neutral used as ground, hot touching ground, loose or bare wires and a fan on a plain box are all UNSAFE and can never pass. Results are CORRECT, INCORRECT, UNSAFE, INCOMPLETE or REQUIRES VERIFICATION. The lessons have Learn (a wrong wire is refused and explained), Practice (anything is allowed and power-on shows the consequence with arcs, sparks, smoke or flames) and Test (silent, graded on submit with score, explanations and violations). The wiring job has a Test mode switch and Submit for inspection in its settings. A Wire guide lists U.S. wire colors, exceptions and the rule to verify. Diagram lessons (three-way switch, fan with a light kit) are in the Construction Lab menu.","CITY LIFE AND THE HALL, UPDATE: seen from outside the house, the walls on your side are left out (like a doll house) so the TVs and the logo carpet are never hidden at any angle, and the TV pictures also show when seen from behind. The house outside has a big wide NGMY poster on the back wall and different framed posters on the sides. In the city every resident is busy with a real job (the nurse on duty at the hospital, feeding the animals, teaching at the school, washing the car, cooking, resting on the bench, watering the flowers), with props such as steam, grain and water, and a small name for the activity. The city has many more houses. Inside the hospital there are a nurse, a doctor and patients lying in their beds, and you treat them by walking to them. A Full screen button in the city turns the game on its side like a video and keeps only the stick, Run, Jump and Act buttons. When somebody calls, a phone-call screen with a green Answer and a red hang-up button appears; answering opens a text message with what the person needs, a button that shows where they are and a button that takes you to fix it.","WIRING CONTROLS, UPDATE: in a wiring lesson or job, tap a house wire to pick it up (it glows), then tap the screw, wire nut or fixture wire it joins and they connect; tap a joined wire, nut or screw again to take it off. Ceiling lights and fans are shown from the side so the house wires, fixture wires and nuts are all in view. Swiping up looks up and swiping right turns right in every 3D view. The wiring job has Look up (from the floor to the ceiling) and Behind the TV buttons, the Voltage tester sits at the end of the tray where Unplug was, and tapping something plugged in pulls the plug (a TV no longer opens full screen). The house has a Look up at the ceiling button. The Construction Lab menu has a new Safety inspection job (a test job marked on submit). The plumbing sink, basin, mirror and shut-off valves are bigger and look more like a real bathroom sink.","LESSON ROOMS, UPDATE: every lesson room is now big and bare (no furniture, no bathroom fixtures in the electrical lessons), so the outlets and the switch are in the open and nothing hides them or the TV. The wall TV is big by default (Cinema 150) and the TV button lets you choose the wall it hangs on: back, left or right.","CITY AND PLUMBING, UPDATE: the city is now a big town (1800 by 1400) with streets both ways and houses spread over nearly all the land; far-away houses are not drawn while you walk close by, to keep it quick. The Full screen button sits in the row with the door buttons next to Living room. The top buttons are smaller. The Construction Lab menu no longer has the Learn mode and Practice mode buttons or the Community card (the community lives in the city). Seen from outside the house, a whole wall is left out or kept, never half a wall. In the lessons and the wiring job the wall, studs, box and cable cannot be tapped, only the wires and screws. The plumbing job now shows a blue Next box that says exactly what to do, with a Show me button that picks the tool and turns the view to the spot; it shows only the parts the job needs; and a leak shows big drops, a puddle and a red LEAK label that names the joint, with the instruction to turn the water off and tighten it with the wrench.","CITY ADS AND TRAFFIC: the city has about a dozen billboards along the streets, each playing a different NGMY ad (new ads for NGMY Jobs, Loans, Kiswahili School, Civic Registry, Core Protocol, Build and Fix and Create, plus the NGMY app ads), big houses with two big TVs on the front that play ads too, and a huge billboard behind the main house with the NGMY logo and New Global Movement for Youth. Big buses and big police cars with flashing lights drive themselves up and down the streets, each with a billboard on both sides playing an ad, and two helicopters circle in the sky pulling banners that play ads. The sign that says how many rooms still need work is at the top of the house, above the roof. Every person in the city is a different colour.","BACK BUTTON AND KNOCKOUTS: the round back button in the corner of every construction page (jobs, lessons, the city) fades away three seconds after the page opens, so it never covers the work; two quick taps where it was bring it back for another three seconds. In Wiring a house, putting a box on a stud closes the view in on it and shows its two tabs; tapping a box does the same, tapping an orange tab breaks it out (green tabs are out already). With the Cable roll, tap the box and then tap the knockout the cable goes in through (a closed tab is broken out for you) and the cable rolls in from the panel through that knockout. Tap a box that has power to start the next cable from it (it leaves through a free knockout); tap a box that has its cable to pull it out.","WIRING A HOUSE, THE FULL VERSION: after a box is on a stud, the Knockout tool closes the view in on the box and you break out its little round tab (a box needs one open knockout for each cable that comes in or goes on). The Cable roll pulls the cable from the breaker panel through the drilled studs; to go on from one box to the next (an outlet to another outlet, then to the switch) tap a blue box that has power first, then the next box, and tap the panel to start from it again. Then pick a device (Outlets, Switches or Lights groups) and tap a box that has its cable: the close-up opens where you connect each wire to its screw, push the device in and put the plate on. The Breaker button turns the power on and tests every finished device; flip a finished switch with Look to light the ceiling; plug in TVs, phones, a lamp, a toaster, a hair dryer, a washer, a dryer or a range from the TVs, Phones and Appliances groups. The tools are in groups: tap a group button (TVs, Switches, Outlets and the others) to open more and Back to return. The Hint button in the Wiring a house and Hanging drywall lessons shows the next step and lights the place; a hint costs 2 stars and a job finished without a hint earns 1 star (the same stars as the city).","WIRING A HOUSE AND HANGING DRYWALL: two big lessons in the Construction Lab Lessons list, just before Learn the trades. Wiring a house is a bare room of four framed walls with a door, a window, ceiling joists and a breaker panel, no drywall. Pick Outlet box, Switch box or Ceiling box and tap a stud or a joist; pick Drill and tap a stud to drill the hole the cable goes through (20 inches up), or the top plate over the switch; pick Cable roll and tap a box and the cable unrolls from the panel through the holes. The cable cannot go through a stud with no hole and never crosses a doorway; the light is fed from the switch through a hole in the top plate. Tasks: an outlet on each wall, a switch beside the door, a light box in the ceiling, all with cable. Hanging drywall is the same room already wired: hang the ceiling first (cut the narrow pieces with the Cutter first), then the walls, screw every sheet, cut the holes for the boxes, the door and the window with the Saw, put corner bead on the door and window, then for each surface mud, paper tape, two more coats with drying between, sand, and prime with the Roller. The tools, the mud bucket, the tape rolls and the stack of sheets lie on the floor. The Whole room button shows the room from above with the near walls left out, and Inside brings you back. Every tool lies on the floor of the room (the cable roll and the drill; the stack of sheets, saw, mud, tape, knife, screw gun, T-square, sanding pole, corner bead and the roller): tap it in the picture to pick it up, as well as choosing it from the list, and the message says what to do first when it has nothing to work on yet. A double tap on the floor or a wall walks you over there, also from the whole room view. When you tap a wire in a device close-up the view turns to the side of the device where that wire goes (silver side, brass side, or the green screw from the front). In Wiring a house a tap on the plug or the cord of a TV, phone or machine pulls the plug out of the outlet. The marks that show where a tool works are bright balls that can be seen from every side, all the tools are on the screen at once, and Drill the lit drills every stud the cable still needs in one tap.","WIRING BY HAND AND TAP ANYWHERE: in Wiring a house the power does not go on to the next box until you have connected the wires in the first one yourself: put a device in the box (Outlets or Switches), open its close-up and join each wire to its screw. Only then can the Cable roll start the next cable from that box (a box whose wires are not connected only says so when tapped, and a second tap pulls its cable out), and the light only gets its cable once the switch is wired. The Hint button says so too. A double tap anywhere in the room, also when looking up at the ceiling or down at the floor, closes the view in on that spot (on a box when one is there), in the Wiring a house and Hanging drywall lessons. The knockouts are drawn like real ones: a flat strip on the edge of the box with a round punched tab (two pressed rings and a dimple), and a black hole with a torn edge and the bent tab hanging when it is broken out; a thin ring in orange, green or grey shows the state of the tab in the close-up. The tool buttons of Wiring a house are small square buttons in two rows; an open group (Outlets and the others) shows two buttons in every row. The back button of a device close-up inside a job stays on the screen; only the one that leads back to the lab fades.","LESSONS ARE SAVED: what you do in Wiring a house, Hanging drywall, the device close-ups (outlets, switches, lights, fans) and the P-trap and faucet lessons is kept on the phone, also when the app is closed; opening the lesson again shows it just as you left it. The Diagram lessons keep your picks too. It is cleared when you finish the lesson (the house wired, the drywall finished, the device done) or press Start over. In Wiring a house, putting a box on a stud no longer moves the view (tap the box to look closer), the cable roll and the drill hang on two shelves on the wall beside the window (the view starts facing that wall), and the tool buttons are small squares in two rows of seven: Boxes, Outlets, Switches, Lights, Look, Drill, Cable roll on the first line and Breaker, TVs, Phones, Appliances, Knockout, Hint, Start over on the second, and the small counts (cables, devices, feet) sit in a little frame between the title and Steps.","OUTLET LESSON ROOMS: the room of an outlet lesson is named after the thing being fixed in a few words (Dryer outlet 4-wire, Range outlet 3-wire, Washer outlet, no longer Faucet), the outlet in it is drawn exactly like the one on the wiring bench before it is wired (a round dark receptacle on a cream plate with the slots of its type: the L neutral, the two hot blades and the ground hole of the 14-30 and 14-50, no ground hole on the 10-30 and 10-50, the T slot of the washer; a GFCI with TEST and RESET; an isolated ground with its orange triangle; the 240 volt only outlet with its two flat blades and ground hole; the smart switch with its blue light; the switch and outlet in one with its small outlet under the rocker; the plate is cream before and after the wiring). The wiring bench, the framed house of Wiring a house, the rooms of the jobs (the outlet and switch a job asks for look like that kind) and the small house of the service calls all draw the same faces), a search icon sits by the title where you type dryer or range and pick it to plug it in, and under the buttons are all the equipment whose plug fits that outlet (the dryer fits a dryer outlet, the range a range outlet, the washer its own, lamps and TVs the normal ones). Equipment is plugged in only after the outlet is wired.","NOTHING DISAPPEARS ON THE BENCH: every face of the wiring bench is drawn from both sides, so from behind or from inside the open box nothing goes missing or can be seen through. THE STRIP AT THE BOTTOM: on iPhone the engine measures the page by documentElement.clientHeight, which can stay smaller than the visible screen after the keyboard has gone; index.html now reports the visible height (visualViewport) when it is taller, so the app is drawn to the very bottom.","BENCH: NO SCREWS SEEN THROUGH, NO HOLES IN THE WALL, A ROOM AROUND IT: screws, slots and plates on the outlet or switch are drawn on top only from the side they are mounted on, so from the other side the body hides them (no screws of the far side seen through the outlet). The wall is one front and one back surface with a real opening for the box, so no seams show as holes or stripes when the view turns. A floor, a ceiling and two side walls stand around the bench, so turning never looks out into black nothing.","BENCH SEEN FROM ANY ANGLE, ESSENTIALS TILES, OATH PAPER PER STATE: on the wiring bench everything behind the front of the wall (the box, the cable, the ends of the wires inside the box) is drawn before the wall, so from the side the wall hides it and it shows only through the opening, as in a real wall; before, the box and the cable showed through the wall when the view turned. In Business Essentials the top frame is its own row and the tiles sit under it, so they never scroll up into it. In NGMY Slides the app admin first chooses the state, then opens, edits or creates the Hati ya Kiapo cha Uongozi of that state (one paper per state).","CIVIC REGISTRY ID AND THE LEADERSHIP OATH PAPER: the ID icon and the member name at the top of the Civic Registry follow the same rule as the ID card on the home page and come from the account in the database, so they no longer disappear after the app is closed, reset or reinstalled (a member removed from the registry still gets no ID). Hati ya Kiapo cha Uongozi in NGMY Slides can be deleted only by the app admin (Delete for everyone): it is then gone for every user on every phone, an old copy can never be saved back, and only the admin can create a new one, with the Create Hati ya Kiapo button in NGMY Slides.","BUSINESS ESSENTIALS KEEPS WHAT YOU TYPE: notes, notebooks, contacts, quick tasks, medicines, site map, hotlines, Bible words, My Vault list and Where I Put It now save into the large storage of the device (IndexedDB) with a copy in the small storage when there is room. Before, everything went into the small browser storage, which the rest of the app also fills; when it was full new entries silently failed to save, and one damaged note could make the list look empty so the next save wiped every note. Now a damaged entry is skipped instead, and if a note cannot be saved a message says so. Every Business Essentials page shows its name in a frame in the middle at the top, like the Construction Lab and Core Protocol, including Create a note.","CORE PROTOCOL TITLE AND PROTECTED FIXES: Core Protocol now has its name in a frame in the middle at the top with the back button at the side, like the Construction Lab, and the page slides up under the clock. The fixes for the black bar and the approved page layouts are protected: the website is only published when a set of checks confirms they are all still in place, so they cannot be undone by accident.","NO BLACK BAR AT THE TOP OR BOTTOM ON iPHONE: in Safari and in the app saved to the Home Screen the app is no longer pinned to the screen (Safari cut a pinned layer off above its bottom bar and filled the rest with black); it now runs to the bottom edge of the screen, under the Safari bar, with the menu kept above the bar. Pages whose list used to stop below the clock (a dark band at the top when scrolling up) now let the list slide up under the clock, like the Advisors page: My Profile, NGMY Slides, Invest, Documents, Construction Lab and its lessons, Doc Share, Local Growth, Account, Market and Worksheets.","THE BLACK BAR AT THE BOTTOM AFTER TYPING: on iPhone, when the keyboard closes, iOS can leave the page pushed up a little without saying so; the app is the right size but sits too high, and the empty page shows as a dark bar along the bottom. The page now puts itself back in place as soon as typing ends, whenever the visible area moves, and with a light check twice a second while nobody is typing. PHONE UNLOCK: the Phone (paste a YouTube or any video link and it plays) is now a small round button right beside the X at the top, instead of a big card in the list.","CONTRIBUTION POP-UP AND THANK-YOU: the home pop-up that asks for a contribution never comes to someone who has contributed to the campaign going now. A contribution is recognised the same way the registrar report does it (the email of the record, the member email written inside it, or the registry number), the list is read from the cloud strictly (if it cannot be read nobody is asked), and the phone remembers that the person gave to this campaign. Instead, once a day when the app opens, that person gets a Swahili orange pop-up, Hongera, with the amount they contributed and what it was for; not again that day.","TURNING ROUND THE DEVICE: on the wiring bench (outlets, switches, lights, fans and the others) the view can be turned to the left or the right as far as the back of the device, but not all the way round; once the view is behind the wall the wall is left out so the back of the outlet, the box and the cable can be seen.","LOGIN AND BOTTOM OF THE PAGE: the login logo and title paint correctly again (two ring gradients with three colours had no colour stops, which newer Flutter refuses to paint, so the login looked broken; the same was fixed in the Vault games), and in a browser tab the page now follows the real visible height (100dvh) so no dark strip is left at the bottom.","CONTRIBUTION POP-UP: when the app opens (and when it comes back after eight minutes or more), a member of a state that has a contribution (help mode) going, inside its circle (all members, a city or a room), who has NOT contributed to that campaign yet, gets a big rounded pop-up in the middle of the screen with space at both sides. The pop-up is all in Swahili and orange like Help + Insurance, with fine lines at the back, a band of light, floating sparks, a ring turning round the badge, a shine on the button and things sliding in one by one. The two buttons at the top are Fungua Usajili wa Raia (goes straight to the Civic Registry) and a round Close button. Below: the name of the state, what the contribution is for (the heading asks Mchango huu ni wa nini?), and where to send it (Cash App opens, Zelle and the phone number with dashes, tap to copy or call). A member who has contributed to the campaign that is going now never gets it, and one who gave to an earlier campaign does; it cannot be told offline, so then it does not show. The Civic Registry itself is unchanged and still shows the campaign.","ZOOM IN A ROOM: in every room view (houses, jobs, lessons) the plus and minus buttons, the mouse wheel and the pinch go toward and away from what the middle of the screen looks at (an outlet, a switch, a wall), not toward the middle of the room.","WALLS, PEOPLE AND BILLBOARDS: in the device close-ups the wall is wide and tall and drawn in tiers (studs, then wall, then the device), and the view cannot go behind or far to the side of the wall, so nothing shows through it. The three city characters are kept for offline from the first visit and a character that could not be read is tried again every twenty seconds. Every billboard in the Billboard Studio now stands in a place: footings, braces, a catwalk with a rail and ladder, lamps on arms, beacons, a service hut, a fence, a pickup truck, cones, bushes and flowers, and each kind has its own extras (highway barriers, a road and cars; a tower ladder, bands and a big beacon; neon tubes and a glowing street with a diner; a stage with speakers, a lighting truss and a crowd barrier; two stone towers with flags and torches and a paved way for the gate).","PHONE VIDEO WALL ON A PHONE: when the Videos app opens the wall of four phones on a real phone (iPhone, Android), the phones of a set take turns so the browser is never asked to hold four video players at once (it used to close the page): a video file plays on two phones at a time and YouTube or Vimeo on one, the others say Waiting its turn, and the next ones start when these finish, set after set. On a computer all four play together.","TV PLAYS ALL CHANNELS AND SCREW POP-UPS: the lab TV now goes through its channels by itself, one after another, ten seconds each (one whole advert), and round again; CH plus and CH minus still jump, and the apps screen stops the round while it is open. In every device close-up (outlets, switches, GFCI, lights, fans and the others) two quick taps on a screw or nut that has no wire open a framed pop-up in the middle of the screen: the wire that goes there, why it has none (a spare screw, a LOAD screw under tape, the ground that must never stay empty, or a wire not put on yet) and a reminder.","TV ADVERTS AND BIGGER SCREENS: in the Electronics Lab a screen part (TV, phone, laptop) tapped four times opens the Resize sheet, and it can now be made up to five times its normal size (twice as big as before). On the lab TV channel 1 stays the NGMY Tree Story, and channels 3 to 5, 7, 9 and 10 are NGMY adverts drawn live: Construction Lab (a house goes up), Electronics Lab (current round a circuit to a bulb), Advisors (chat bubbles), Game Center (coins and a game pad), Vault (the vault door opens on gold) and Studios (coloured tiles pop in). The Construction Lab page header is a small framed card in the middle with the back arrow at the side. The Resize sheet is a card with a live preview of the screen, buttons 1x to 5x, a slider and a Done button. The adverts on the lab TV are little ten second movies of four scenes each (what it is, what you do, what you get, then an end banner with ngmy.org): Construction Lab, Electronics Lab, Advisors, Game Center, Vault, Studios, Business Cards and the Store (channel 2), on channels 2 to 5 and 7 to 10. TV channel 6 is Spark Adventure (Sparky the spark runs round a circuit board with a battery, a switch, a resistor, a capacitor and a bulb, with captions) and channel 8 is an NGMY Business Cards advert.","CITY DOORS, ARROW, ELEVATOR: walking through a door takes you in again (no button). The arrow above the player shows only when the view is zoomed far out, and there is no ring. The houses stand far apart (more than two house widths between them). When the elevator doors open you now see a lit lobby with TVs and a sign, not a black space. In the lobby the elevator doors shut completely, carry NGMY on the left door and ELEVATOR on the right door, and open onto a lit inside with nothing in front of the doors. During the ride the camera stays inside the car, which now has a back wall, so the person never disappears when you turn the view.","CITY WALKING RULES: you go into a house, hospital, shop, store, school or any building by walking through its door. The view never zooms or turns by itself: your zoom and angle stay as you set them when you go into a building and when you come out, and inside a building the camera only stops at the walls. A bright arrow shows where you are when the view is zoomed far out. The houses stand much further apart. The NGMY stores and the NGMY licence offices have a big sign on the roof, facing front and back. The city remembers where you were: the street spot, or the building you were inside, and puts you there when you come back; the Neighbourhood jobs button now opens the city itself instead of the first unfinished room of the house.","MACHINES AND WIDER ROOM VIEW: after the laundry or kitchen job the room items now include a washing machine, a dryer and a kitchen range to plug in; each only fits its own outlet (washer 5-20, dryer 14-30 or 10-30, range 14-50 or 10-50), and when it runs the washer and dryer show clothes tumbling and the range burners glow. In the house the Plug in list has them too. In any room, when the camera cannot go back any further because of the wall, zooming out widens the view so you see more of the room and still stand inside it.","LESSON HELPERS AND WATER: in the electrical lessons, picking a wire turns the device to the screws that wire belongs on: the white neutral wire shows the silver screws, a hot wire shows the brass screws, and the ground wire shows the green screw in front. Tap the name of a wire, a hose or a drain piece twice and the place it goes glows for a few seconds. In the faucet lesson tap the red or blue valve handle to turn it by hand; an open valve with no hose sprays, and a good line pours a clear stream into the basin with ripples. In the drain lesson tap the sink once the drain is built to run or stop the water. The Diagram lessons page is a picture: pick a wire on the left, tap its place on the diagram and a coloured wire is drawn between them.","SINKS IN THE PLUMBING LESSONS: the drain lesson and the faucet lesson now show a real sink: a counter with a hole, a white or steel basin sunk into it with a drain, a faucet with two handles on a flat plate behind it, and an open cabinet under it. The counter pieces leave out the faces that touch so no dark gaps flash at any angle.","CONSTRUCTION LAB ZOOM AND LESSON SEARCH: in any room of a job or lesson you can pinch or scroll back as far as the room allows while the camera always stays inside the house (it never goes out through a wall or the ceiling), and you can still turn all the way round. In the Construction Lab the LESSONS line has a small search icon on its right; tap it, type a word such as dryer or sink, and only the matching lessons stay. Tap the icon again to close the box. Only the lessons are searched, not the jobs.","NEIGHBOURHOOD WORK AND TRADE: every building in the city can be walked into (hospital, shop, school, fire station, every house and big house), and each has its own job done by walking onto a mat: teach the class at the school, check the equipment at the fire station, sell what you carry at the market stall in the shop. The buildings are about half as big again, and the houses stand well back from the streets so there is room to walk beside the road. Electric poles carry wires along the streets with street lights on them, and street lamps stand between the poles. From time to time a street light goes out (it is dark with a red sign) and a neighbour rings because a house has no power. A street light is fixed with the real ceiling-light wiring lesson (black to black, white to white, ground to ground, then the cover); a house is fixed by walking in and onto the red mat at its breaker panel, which opens the wiring job. Fixing earns points. Crates of goods lie about the farm: pick one up with the action button, carry it to the shop and sell it at the market stall, then come back for more. In Build mode a house, big house, shop, billboard, car, tree, bench or crate can be sold for points. Full screen: double tap the two buttons to hide them, double tap where they were to bring them back. The controls are raised from the edges of the phone. The small buttons beside the zoom buttons flip the up-down and left-right swipe, and the choice is remembered. The Construction Lab menu has the jobs first (with a new Neighbourhood jobs tile) and the lessons and reading last. Double tap anywhere in the house, a room or the city and the camera takes you to that spot, like a map. The city has fewer cars: two buses and two police cars drive round two loops of road and never turn back, and every junction on the loops is a roundabout. In the wiring job a plugged-in TV is not a button: go behind it and tap the plug on the wall to pull it out. Pulling a switch or outlet out of the wall keeps it there (only a burnt one is thrown away so a new one can go in). Every billboard has a picture on each side, so nothing is upside down or backwards from behind. The buses and police cars are bigger, with big billboards. In the city the phone rings at least once a minute: a house with no power, a street light out, or somebody sick who must be taken to the hospital desk. A room whose wiring is right has no red boxes left, even if the final test was not run. Swiping left and right turns the view the way your finger goes. The house tour sheet has a new design. Full screen inside a room puts you inside it, like a normal house. Getting out of a car puts you beside it, never inside it, and a person who ends up stuck is moved out. A dark house shows its breaker panel, outlet and switch with red frames, and tapping a red tag (No power, Light out) takes you to that house or street light. The city no longer redraws itself every two seconds, and nothing happens in the city while a job page is open. Work comes one job at a time from houses chosen by chance: while you work no new call rings, a job you put off with the Later button waits on a list and starts when you leave the house you fixed. Turning calls down or not answering counts as a miss; two misses in a row bring a call from the City office, three close the game for 5 hours. The Hide tags button (next to Full screen and Rotate) hides the red tags and the rooms-still-need-work sign. Every outlet, switch and ceiling light or fan in a room is marked fixed on its own as soon as it is wired right, so only the ones still to do keep a red frame, and the sign over the room names what is still to wire. A call opens as a card in the middle of the screen (it turns with the full screen game) with Show me the way (a yellow dashed line on the ground and a tall yellow beam lead to the place), Take me there and Later. A Drone button gives a film of the city from the air: choose the whole city, billboards and the NGMY logos, houses (and inside a big one), the hospital, shop and school inside, or the traffic. The hall has a camera in each corner: tap one to look from there. The Kiswahili School ad has a long conversation, three exchanges a play and new phrases each time. In a house with no power in the city, tap the breaker panel, the outlet or the switch (or their red frames) to start the wiring job straight away. The drone is one smooth flight with no cuts: it starts high, comes down and passes in front of each billboard and round its side, never going into it, and the houses and the buildings are flown past the same way before it goes inside. Indoor furniture is smaller, a TV never stands on a cabinet or the floor (TVs hang on the wall), and a wardrobe, shelf, lamp or console is moved aside so it never hides the TV on the wall. The city land is much bigger (2600 by 2100) with houses behind my house, down both sides and over every green stretch, each with room in front of its door so you can always walk up to it, and a longer street system. Downtown, at the south end, has NGMY office towers, the NGMY company building, NGMY stores, NGMY gas stations and a second NGMY hospital; the stores and gas stations can be walked into like a shop. The biggest billboard, NGMY Town, stands over the middle road, and a NGMY Town billboard stands at each corner of the land; every sign has a picture on both sides. The drone passes each billboard slowly in an arc of about three seconds, goes round all the signs and follows the helicopters to show their banners. Swiping now turns the view the way the finger goes: swipe right looks right, swipe up looks up (the choice is saved under a new name so old choices do not interfere). The message at the top is placed under the buttons in full screen. Nothing in the city is switched off because it is far away: the houses, the billboards and the signs stay on, seen from the drone or from the ground. Every tower and the NGMY company building has billboards on the south face and on the north face (the side the town looks at), and the big NGMY Town sign shows a picture on both of its faces. In the hall the camera is only the camera (no label), and the wall TVs read the right way round from outside the wall too. In a house with no power each fixture turns green on its own when it is fixed, the work you did is kept when you leave and come back, and the panel turns green when the whole house has power; in your own rooms a fixed outlet, switch or light has a green frame, an amber frame while it is started, and a red one while it is not. The work you do on a house, an office level or a street light is kept in the town. Take me there puts you a few steps in front of the door (or beside the street light). People walk fast in the big town and the drawing skips what is off the screen. Missing calls never closes the game; after a few the office only rings to remind you. Every office tower and the NGMY company building can be walked into: the lobby has an elevator (walk onto the blue mat or tap it) with buttons for every level, the level number is always shown, there is a balcony with a glass railing (step on the green mat to look over the town), and you can get a job from an office with no power on any level, take the elevator to that level and fix its breaker panel. The elevator ride is shown: the person walks to the doors, they slide open, the person steps in, the doors close, the camera is inside the car with a display above the doors and a big number that counts up or down level by level with a little shake, a chime and the doors open at the new level where the person walks out. The Orders button opens the delivery board: orders for food, groceries, medicine, packages and letters are picked up at a shop, a store, the hospital, a tower or the company building and carried to a house (follow the yellow line); they pay points. Five other couriers, Maya, Kofi, Amara, Tunde and Zawadi, walk the town doing the same: an order they take is gone, and the first to deliver 8 orders wins the round and a bonus. The race table shows everybody. There are many more big NGMY ad billboards round the edge of the land (north, south, east and west) and on the roofs and sides of the towers and the company building; every one plays the NGMY ads one after the other, a new one every 7 seconds. NEW IN THE CITY: the drone has a special request for the edge billboards only (the big boards round the edge of the land), the billboards request now includes the edge boards, the tower boards and every other billboard, and every drone film always starts at the big sign that welcomes everybody to NGMY Town. The rival couriers now walk round the buildings (never through walls) and go in and out of the doors, out of sight for a moment inside. When all the fixtures of a dark house or office are connected, a green Complete work button appears (in the chips row, and next to the drone button in full screen): press it to check the wiring, bring the power back and get paid. Energy: about five minutes of walking use it all up, then you must rest for three minutes (then you are back at half energy) or eat; a long battery bar next to the page title shows it, and under the Run and Jump buttons in full screen, with no numbers. Food from the shops (apple, juice, sandwich, burger meal) gives energy back and costs points. The shops are now real: shelves with tins, boxes, bottles and loaves, drinks fridges, fresh fruit, a till and a cashier, and walking up to a shelf or the counter (or the Buy things chip) opens the shopping list: food, food for the town and medicine, all paid with the points you earned. Cars only have about two minutes of gas; a gas bar shows beside the energy bar while you drive, and there are many gas stations round the town where you press Buy gas (or buy a gas can in the gas shop). The licence office sells the Uber licence for 40 points. Uber stations (a yellow and black shelter with a car beside it) have people waiting: drive up with the licence and they get in, take them to their house (follow the yellow line) and the fare is paid when you arrive. MORE SWITCHES, OUTLETS AND LIFE: the Construction Lab has ten more wiring lessons (double-pole, three-way, four-way, smart or motion or timer, and combination switches; split half-switched, 4-wire 240 V, 3-wire 240 V, 240 V only and isolated-ground outlets), and every house or office job now asks for a different outlet and a different switch, so people learn them all by fixing them. Calls and jobs only come in the NGMY City map (the garden with the billboards), never in the rooms of the house. Houses stand much further apart. The incoming call screen shows who is calling on top and the Decline, Later and Answer buttons in a row below. Energy lasts about two minutes of walking, then the person crawls on the ground for 20 seconds: if they have not bought food in a shop by then they lose 5 stars, rest for three minutes and come back at half energy. Thirst (buy water or juice) and feeling unwell (buy pain pills) make walking tire faster, so everything the shops sell is needed at some time. The stars balance is shown next to the zoom in button all the time. Thirst also lasts two minutes. Nothing counts against the person while they are working on a job or away from the city map. When all the wiring of a house is connected the work is handed in by itself. Wires and screws are easy to tap: a tap near one picks it. The shop screen is laid out in columns to fit a phone on its side with nothing to scroll, and every pop-up shrinks to fit the screen. Every elevator car and every level of a tower has big TVs playing the NGMY ads, a ride takes at least 3 seconds and longer for every level it climbs, and inside a building the view is close in so you feel you are inside. ADVISOR BROWSER: the live browser of the advisors (the computer an advisor uses to look things up and fill forms) is free for the first 10 minutes of use. After that a payment pop-up appears (never a text message) asking $5.99 for 2 more hours, by card with Stripe or with Cash App (a code, a screenshot of the payment, and an admin approves it). The hours must be used within a week; they are counted quietly in the background only while the browser is open, and what is left is still there when the person comes back. Hours not used within the week are lost, and the next time the person gets only 5 minutes before the pop-up asks again. One browser task may spend at most 2 dollars. In the elevator car the camera is inside the car with the person, the doors in front and a big TV on each side. A finished job pays a random number of stars from 10 to 35. The Uber stations and their signs are called NGMY Uber. During the drone flights nothing far away is left out, and small far pictures are drawn flat so the flight stays smooth. PHONE VIEW: in the garden (NGMY City) a phone icon between the Full screen and the living room chips opens the city across the whole phone standing up, like a phone video, not turned on its side; it opens the drone chooser straight away, with buttons to close, start or stop the drone and hide the tags. The drone sweeps past billboards sideways instead of climbing and dropping on one spot, and the helicopter and vehicle shots are short sweeps round them, so it never hangs in one place. Inside a building the camera never leaves the walls, so turning round never shows a wall from behind or a TV switching off, and the rooms are deeper and taller. In a tower the way out is only on the ground floor; the other levels use the elevator down. Walking, the drone and the elevator ride move in step with every frame and the camera sticks to the person, so it is smooth. Finishing the wiring or plumbing of a room, a lesson or an added outlet pays stars at once. ROADS, TRAFFIC LIGHTS AND ACCIDENTS: the city streets are big two-lane roads with a double yellow line, and the buses and police cars drive in their own lane, keep their distance, never drive through each other, and stop at red lights. Traffic lights stand at the crossings with zebra crossings; the little walking person is green only while the cars have red, so cross then. Anybody on foot who walks in front of a moving car is run over: an ambulance takes them to the hospital, they are weak, and medicine and food are ordered from the stores to the hospital. Those emergency orders go to the top of the Orders board and other users (and you) can deliver them for stars. HIDE ALL BUTTON: the eye icon next to the hide-tags button (and Hide all in the chip list) hides every button, map, banner and card so only the city shows, also while the drone flies; tap the top left corner where the buttons were to bring them back. ROOMS ARE VIEWED FROM INSIDE: in my house every room now opens with you standing inside it, with the four walls and the ceiling round you (like the big buildings), not looking at the room from outside; the See the whole room button still shows the cut-away view from above. A room is only finished (green) when its wiring AND its plumbing (bathroom, kitchen) are done. In a dark city house or office the breaker panel stays red until all four things are fixed (two outlets, the ceiling light, the switch): the ceiling light now has its own red frame and label in the middle of the ceiling, and the panel label says what is still to fix. CARS AT THE CORNERS: the two loops of buses and police cars meet at the two ends of the middle street. Only one vehicle at a time may be in each of those corner zones; the others wait at its edge and go on when it is out, so cars never touch or drive through each other and none gets stuck (tested over 50 minutes of traffic). DARK HOUSE WIRING: a device that runs (the TV works) can still be wired NOT safely, and then its frame stays red: the job counts a fixture as fixed only when it is in, finished and wired right. After you leave the wiring bench the message and the red labels now say why (not put in, not finished, or works but not wired safely, with the reason). Tapping a blue spot with nothing in your hand puts in the device that belongs there. FAR BILLBOARDS: every billboard keeps showing its real ad from any distance and any angle (the biggest few play smoothly, the rest show a picture of the ad that is made again about five times a second), never a plain colour. JOB COMPLETE: when a job from a phone call is finished the screen says JOB COMPLETE with the stars, and the next job only starts about 10 seconds later; the other red tags in the city are other houses still without power. BILLBOARD STUDIO: in the Construction Lab, a small Billboards button sits at the top right corner of the My House frame. It opens a page with ONE billboard on its own: six kinds to choose from (highway board, tall tower sign, neon board, rooftop board, big screen, town gate), a 30 second drone shot round it (wide shot, coming in, close slide, left side, behind the board, right side, pull back and up; Stop the drone ends it), and an Edit button where the person can change the big words, the smaller words and the web address, put their own logo and their own picture from their gallery, pick the colours, or go back to the NGMY default. By default the board plays the NGMY logo, the NGMY words and the NGMY ads one after another. What the person changes is kept on their device. Update: all the boards are much bigger. Joined boards: two signs on one board, or three signs on one long board. Separate boards: Three in a row (three boards in one straight line), Two lines of three (six boards, a line facing front and a line facing back), and Billboard park (four boards: front, back and both sides). Each sign has its own words, logo, picture and colours (Edit, then Which sign). The default NGMY poster words shrink to fit beside the logo so they never run over it. The rooftop board stands on a big house with big TVs and NGMY logos on its front and sides and the NGMY hall carpet on its back. Poles always stop below the board. While the drone flies there is no title or bar; Hide everything removes the buttons and a tap on the screen brings them back. The shot is a crane move, a push in, a slide along the face, then round both sides and the back, then up and away. The Family Tree ad in the Electronics lab (TV channel NGMY Tree Story and the Family Book and Tree cartoon ad) was redesigned: a real tree grows with the grandparents at the roots, the parents on the big branches and the children at the top, a round face and name tag on every branch, hearts joining the couples, and a card that says NGMY Family Tree: add every person, link mums, dads and kids, keep it for ever. Billboard park has its own planned 30 second drone shot: a high wide shot, a crane down and push in to the front board, a sweeping arc to the right board, a long curve behind to the back board, round to the left board, then up and away. On the home screen the Civic Registry ID card shows the plus button when it is the only card, so other cards can be added; once another card is added the plus leaves the Civic card. All the drone shots are now dramatic: a high bird-eye shot that dives to a low hero angle, a low slide across the face, whips round the sides, swoops up high, dives behind, and pulls away into the sky; each move starts slowly, whips and settles. In the Construction lab wiring job, an installed outlet or switch has a button Take it out and put in a different one, which leaves the empty box so a different kind of outlet or switch can be put in. Latest billboard update: no boards are joined any more. Billboard layouts are Two far apart, Three in a row, Three scattered far, Skyline, Two lines of three and Billboard park, with boards of different heights and sizes, the taller ones standing behind and some far from the others. The chooser shows two billboards in every row. Every kind of billboard has its own camera move, and each layout has its own tour where the drone flies from board to board. The rooftop board stands on a tall house with one big TV on each side of the door, and its board, TVs, logo and frame no longer vanish when the angle changes. Cipher Lab was removed from Core Protocol. In the city wiring job the person chooses what goes into an empty box from the tray (nothing is picked for them), and any outlet counts for an outlet and any switch for a switch as long as it is wired right, so the red frames in the house turn green when the job is really done. The zoom buttons answer at once with a big step and keep zooming while held, and pinching measures from the last step so the zoom is never thrown back. FAMILY GAMES: in the Family Tree there is a games button (a game controller icon) next to the Family Book button, and the redesigned Tree display settings sheet has a Family Games card. The system makes games by itself from the people in the tree: Family Kahoot (10 timed questions with coloured answer tiles, points for speed, a streak bonus and a podium against family members), Fireside Stories (a painted African village at night, with huts, a baobab, the moon and a living village: someone pounds grain, a girl carries water on her head, children roll a hoop, a goat grazes, a drummer plays. The oldest person in the tree sits by the fire and talks, with the words coming out while the mouth moves; the other elder and the children look at whoever speaks, blink, nod, ask things, gasp, laugh and clap, and the fire grows with every right answer), Safari Journey (a painted bus drives to a stop for each question, a villager asks, a wrong answer is a flat tyre), Line Up (tap two people to swap them until the family stands in the right order, then everybody cheers) and Village School (the teacher writes each question on a chalkboard, then a report card with the mistakes explained). Small trees get culture questions with Swahili family words and African proverbs. The person who created the tree can write up to two games of their own, in the Kahoot style, with up to 12 questions each, and everyone who opens the tree can play them. Players win Family Stars on this phone, with badges: Little Seed, Young Listener, Storyteller, Village Pride, Keeper of Roots and Elder of the Fire. The Family Games hub now shows eight games, two in every row: Family Kahoot, Fireside Stories, Calabash Catch (slide a basket under the gourd with the right answer as gourds fall), Plant the Tree (drag the children of a family onto the branches and watch the tree grow), Who Am I (a shadow turns into a face as clues come), Safari Journey, Line Up and Village School. Memory Drums, the old Family Test and the old Elder Order were removed. CITY PEOPLE: everybody in the city is one of the 3D characters you made (the X Bot and the Soldier for the residents, and whichever of the X Bot, the Dancer or the Soldier you choose for yourself on the tour sheet), read from their .glb files. They are dressed in their own colours (skin on the head and arms, a shirt, trousers), the X Bot residents get a face with eyes, brows, nose and mouth, and the head and hands keep more detail than the rest. The three character files are kept on the phone after the first visit so the same people appear with no internet; while a file is still being read nobody else is drawn in their place. The 3D view skips whole blocks of the town that are behind you, too far or off the side of the screen, and keeps billboard pictures on top of their boards. ROOM JOB SCREEN (the working screen of a room wiring job): you start inside the room, close to the wall that has the boxes, and can zoom out to see all of it. In the devices phase every box of the job has a little light on top of it (no frames): it blinks RED while that box is not fixed, and blinks GREEN only when its device is in, wired right and covered. Tap a box and the tray at the top shows only what can go in that box: an outlet box shows the outlets (outlet, GFCI, split, 240 volt, dryer, range, washer...), a switch box only the switches, and a ceiling box only the light and the fan, so nothing has to be scrolled through. The box you tapped has a bigger light, a cross at the start of the tray lets it go and shows everything again, and tapping an item puts it straight into the picked box. When the phone is turned on its side (or the job is shown sideways in full screen) the three phase tabs and the hint box are gone to leave room: only the tray is left, and its first button shows the phase (for example 3 Devices) and goes to the next phase when tapped. Standing up straight it is all there as before. When you work on a device with the phone on its side, the buttons are small, with their words in them (back to the room, fasten every wire or push into the box, pull it out, cover on, take it out and put in another), and they sit in ONE row of the same height together with the wire chips (for example black from the breaker, black to the light, bare copper ground). Once you pick a wire, the screws it can go on come in their own small low row UNDER the buttons, not along the side. The messages are small too: the note that says what just happened is a small box in the top corner (three lines at most, gone after six seconds) and the card about the thing you tapped is a small box in the bottom corner, so the work stays in view. The lights on the boxes are small, and round every empty box there is an invisible pad bigger than the box, so a box answers the first tap. Taps on every 3D view (the room, the bench, the city) are read the moment the finger lifts, they no longer wait for a possible double tap, so nothing needs two or three taps. Standing up straight they are the big buttons with words and the wide messages as before. REAL WORK IN THE CONSTRUCTION LAB AND THE CITY: the eight JOBS of the Construction Lab (Wire a room, Plumb a room, Fix a house, Build a room, Wiring bench, Safety inspection, Service calls, Neighbourhood jobs), My House and the whole city are real work, not a learning stage: wrong moves have real consequences (shocks that cost a life, burnt outlets, floods), there are no hints (the screen says Real work: no hints), and the practice and test switches are gone from the job screens. Only the LESSONS teach, with explanations and hints. The old Garden is now called NGMY City. Safety is enforced like on a real site: a device can not be put into a box while the breaker is on (a STOP message says to turn the breaker OFF first and test that the wires are dead), and touching live wires, pushing in, pulling out or covering with the power on is refused or shocks. Every finished job of the lab pays stars into the same stars the city shows: 12 plus 4 for each thing to fix, minus 2 for each mistake and 5 for each shock, never under 6 (the jobs started from the house in the city pay by their own rules, so nothing is paid twice; stars earned outside the city are kept and added when the city is next opened). The sinks of the bathroom and the kitchen are real sinks: a counter with a basin sunk into it (walls, floor, drain) over a hollow cabinet, and a faucet with two handles once the sink is plumbed. CONSTRUCTION CITY APPLIANCE JOBS (American NEMA style): the Construction Lab and the city jobs now have the outlets of the big appliances. Dryer outlet 4-wire (NEMA 14-30, 30 amp: an L-shaped neutral W, two hots X and Y, a round ground G), dryer outlet 3-wire (NEMA 10-30, the old kind: two hots and a neutral that also grounds, no ground hole), range outlet 4-wire (NEMA 14-50, 50 amp) and 3-wire (NEMA 10-50), and the washing machine outlet (NEMA 5-20, its own 20 amp circuit with a T-shaped slot, GFCI protected in a laundry area). Each has the real face of its type in 3D and is wired by putting the black, red, white and bare copper wires on the right screws: the two hots on the brass X and Y screws, the neutral on the silver W screw, the ground on the green screw. There are also two cord hookups at the back of the appliance: the 3-wire cord, where the metal ground strap stays on the middle terminal, and the 4-wire cord, where you take the strap off first (tap it), then put the green ground wire on the frame screw, white in the middle, black on the left and red on the right; the neutral and the ground are refused while the strap is on. In the house the kitchen wiring job is the range outlet (plus a GFCI outlet), and the hall is a laundry corner with a washer outlet and a dryer outlet (3-wire or 4-wire). The lab random room jobs can be a Laundry room or a Kitchen with a range. A house call in the city is now most often about the dryer, the stove or the washer, with its own message, and it sends you to the right room. The Add to room menu offers all of these outlets and both cords. When the city is in full screen (on its side) and a call is accepted and a fix starts, the job page stays on its side too, and a small button on its right edge turns it upright and back; without full screen it stays upright. PHONE (Phone Unlock page, under Open on your phone, the Phone button): a whole virtual phone of its own inside NGMY, separate from the device in use, with a lock screen (swipe up or tap), a home screen with a dock and a clock card, a home bar to go home, a status bar, and only a few apps of its own: Videos (paste the link of any video, YouTube, Vimeo or a video file such as mp4 or webm, and it plays on the virtual phone; save videos and see recent ones), Web (type an address; some sites refuse to be shown inside another page), the App Store and Settings (phone name, six wallpapers, brightness, the phone number, device ID and place, reset). There is no notes, calculator, clock or files app. The App Store holds NGMY apps that open inside the phone: Title Animator, Universe Explorer, Beat Maker, Piano Studio, Drum Pads, Palette Lab, Mandala Studio, Fireworks, Gravity Lab and Spark Painter; tap Get to install one (its icon appears on the home screen), Open to run it, Remove to take it away, and what is installed is remembered. To make the phone bigger, double-tap the top of the phone (the black bar with the camera): each double-tap makes it bigger, step by step, up to the full screen, and one more goes back to the first size. The phone has its own phone number and device ID (made when it is first opened, new again after a reset), its own place in the world that you choose in Settings (it never reads the place of the device running it), and its own memory that no other part of NGMY reads. Limits: the phone uses the internet connection of the device it runs on, so its internet address is the same as that device (a web page cannot change it), and apps from Google Play or the Apple App Store cannot run inside a web page. Everything on the virtual phone is kept on its own and a reset clears only it. PHONE WALL (inside the Phone, there is no separate button): the Phone shows one phone. When a YouTube, Vimeo or video file link is played in the Videos app, the four front phones of a wall of 100 open, two in a row, filling the room, each playing the video with the picture filling its screen, with the waiting phones stacked behind. Each of the 100 phones has its own phone number, device ID and place and a memory of the videos it watched (kept between visits). The four start one after the other so the first is never kept waiting. They play without sound, because a browser only starts several videos on its own when they are muted. When the video is over, the next four phones slide in and play it from the start, set after set (25 sets), and after the 100th phone it starts again from the first four (round 2, 3...). Buttons: next four, start again from phone 1, and One phone, which goes back to the single phone with the same video playing there. The single phone plays a video straight away with no extra settings. A web page link (not a video) stays on the single phone. EARTH GLOBE OFFLINE: the Universe Explorer Earth Globe map data is kept on the phone after the first visit and preloaded, so the globe opens with no internet; if it cannot load it says so and has a Try again button. TITLE ANIMATOR: more than 24 title movements, 8 letter looks and 20 different painted background scenes (not just colours); Download the animation saves the whole animation as a looping GIF, not a single picture. BUSINESS CARDS: the cards on the Home screen are saved safely: a background refresh can no longer write an old list over a card that was just added, there is a second copy of the cards kept beside the first that restores them if the first is damaged, and a business card put on Home is also kept on the account when one of the 5 cloud places is free, so it is still there after the app is reset. The studio card list uses a key made from the email so saved cards are not lost when the app is built again. Every business card has a Share my card button (the NFC icon on the card on Home and next to Download in the studio): it makes a contact file (vCard) with the name, job, company, phone, email, website, address and logo, shows a QR code any phone camera can read, opens the phone share sheet so the card can be sent by AirDrop to a phone held close, copies the contact text, and writes the card to an NFC tag on phones that allow it (Chrome on Android; iPhone Safari does not allow web pages to use NFC, and Apple Wallet passes need an Apple developer certificate, so they are not available yet).","AI FAIR USE: all NGMY AI runs on the server and needs a signed-in account. To keep the shared AI key safe, each person can use AI only so fast: if you go too fast you see You are using AI too fast, please wait a little and try again, and you can use it again after a short wait. Big jobs (job applications, documents, books, slides, news, translations, pictures, voice) have tighter limits than normal chat. If the AI company is busy you see that the AI is busy and to try again in a minute, and the app does not keep asking. There is also a daily cap for the whole app. Admins can see the limits, the heaviest users and the newest abuse, and change the limits without a new version of the app.",'CONSTRUCTION LAB: a trade school in real looking 3D, MY HOUSE (top card of the Construction Lab): a finished furnished house with 5 bedrooms, 3 bathrooms, a kitchen, a living room and a hall, each drawn as a cut-away 3D room. A little map in the corner shows where you are, tap a room to go there, or use the door buttons; red marks a room whose wiring needs work and blue one whose plumbing does. Signals in the room (a red No power sign, a blue Needs plumbing sign, bare pipe stubs) show what is wrong; the Wiring and Plumbing buttons, or a tap on the outlet, light, toilet or sink, open the same hands-on jobs and the room is finished when the job is. Furniture, walls, floor, ceiling and doors only react while their own edit button is on: Furniture (add, move with arrows, turn, change colour, remove), Walls (paint one wall or all), Floor (wood, carpet or tile), Ceiling, Doors (open and close). A Learn button opens short beginner cards on safety, wiring, plumbing, framing and tools. In My House you are inside the room by default (a low view, like standing in the doorway) and a button switches to a view of the whole room from above. A \ud83c\udfac Tour button plays a life-like person (an adult with a face, hair, arms, legs and a real stride) who comes in through the front door and walks through the whole house like a film, in the time you choose (30 seconds, 1, 2, 3 or 5 minutes), after every TV is switched on. The walk is planned round the furniture and fixtures, so the person never goes through a wall, a chair or a table; in the living room and the bedrooms the person picks up the remote and switches the ad on the TV, in the kitchen they take a drink from the fridge, in the bathrooms they wash their hands, and between rooms they open the door and walk through into the hall. The doors really swing open and show the next room behind them; when the person opens a door the camera moves in towards it, then the picture dissolves into the next room (the hall, a bedroom, a bathroom) where the camera starts on the door they come out of, and the door closes behind them as they walk on. TVs on the wall go from 100 inches to 150, 200 and a whole-wall TV: each is as big as the free stretch of wall allows, never over a door, with nothing in front of it, and the person on the tour stands beside the TV and not in front of it. The hall is wider and deeper, has all ten doors on its back wall and a big TV on each end wall. A \ud83d\udd04 Look all round (360) button puts you in the middle of a closed room (solid ceiling and four walls) to turn all the way round by dragging; a double tap on the floor walks you to that spot, and from above or in the garden a double tap takes the view closer to where you tapped. The view can never go under the floor. The garden is a big lawn you can walk all the way round, and the house outside has windows and doors on all four sides, a porch, a chimney and a roof; with the Furniture button you can add and move trees, pines, bushes, flowers, fences, street lamps, benches, cars, roads, ponds, swings, sheds and dog houses. The cards on the Construction Lab home screen are centred, with a glowing round icon and a soft colour. COMMUNITY (a card on the Construction Lab home screen and a Community button in My House): the seven people who live in the house (Ama, Joseph, Grace, Daniel, Fatima, Papa Moses and Mama Rose, each with their own look) get hungry over time, can fall sick, and become unhappy when their room has no power or their sink leaks; they stand in their rooms in the house as people you can tap, with a word over their head showing how they are. The player feeds them (food), gives medicine, sends the sick to the hospital (three beds: each patient needs treating before their care runs out and goes home better), and buys food and medicine in the shop with points. People who are starving, sick or unhappy for too long lose health and can die. Calls for help arrive in plain words ("My outlet is dead and it is dark in here", "The sink leaks"): Go and fix it opens the house on that room, the real wiring or plumbing job is done, and when it works the call finishes and earns 15 points; wiring and plumbing also break by themselves from time to time so there is always something to do. Hospital discharges, feeding and medicine earn points too. Everything is saved (the people, supplies, calls and which rooms are fixed or broken) and time passes only gently while the app is closed. Inside a room the view stays inside the house: you can look about a little but you cannot swing round behind the walls, and a Go outside button (and Go inside in the garden) is the only way out. Everything in a room is drawn in layers (the floor and walls first, then what is fixed to them like the TV, the plates, the frames and the doors, then the furniture and the person), so the edges of a TV or a door never disappear when you turn to the side and the person never shows through a door, a wall or their own body. The person is built from rounded parts with real joints (a head with a face and hair, shoulders, elbows, knees, hands and shoes), the foot that is down always stands on the floor, and the walk keeps a body-width away from furniture and walls. A TV button puts a wall TV (five models, the big ones up to 77 inches) in a room, or in every room, and turns TVs on and off. An Add button adds outlets, GFCI outlets and light switches to a room that you wire yourself with the wiring bench, a Map button shows or hides the little map (which shrinks to fit the screen), and the Start from a bare house button makes every room need its wiring and plumbing so you can wire the whole house first. The ceiling of a room can hold a light or a fan. All the lessons on the lab home screen (Wall outlet, Light switch, GFCI outlet, Ceiling fan, Sink drain, Faucet supply lines, Build and fix a house, Learn the trades: eight tiles, four on each side) play inside a furnished room with a big TV on the wall showing the NGMY Jobs ad; the ceiling light is already in and only the thing being taught is waiting (red), and once it is done you can use it: flip the switch, plug in a lamp, TV or hair dryer, watch the fan spin. The house also has a Garden (a view of the house from outside with a tree, a path and a mailbox): the front door of the living room leads out to it and the front door there leads back in. Tap a door in a room to open it and walk through it into the next room or the hall, like in a game. Every room can be fixed, even the ones shown as finished: a finished room opens finished and you can pull devices out and wire them again. In a wired room tap an outlet to plug something in (five big TVs from Beovision to Apple TV that play NGMY ads, a lamp, a toaster or a hair dryer) or unplug it, tap the wall switch (or the light) to turn the light or the ceiling fan on and off, and tap a TV to watch it full screen with its own brand home screen. Bedrooms have ceiling fans. Wire a room, Plumb a room and Fix a house on the lab home screen all open My House at a room that needs that job. In the wiring jobs a wrong wire can be fastened just like for real and it burns or trips the breaker when the power goes on, touching a live wire shocks (in Learn mode it hurts nothing but the shock still happens, in Practice mode it costs a life), the wire buttons that are already fastened disappear, the screw labels are kept away from the wires, finished devices have a bright frame so they are easy to find from far, finished rooms have a painted ceiling with crown moulding and no bare beams, and a TV in the room job opens full screen when tapped. The Construction Lab downloads on its own when its button is pressed, so the Core Protocol opens quickly. A TV that is plugged in and on plays the real NGMY ads right on its screen, flat on the glass like a normal TV, without opening it (tap it to watch full screen). There is a Voltage tester: in My House pick the Tester button and tap an outlet, the switch or the light (it glows and beeps when there is power and stays dark when there is none), and in the wiring jobs it is the Voltage tester right after Look in the devices tray. The Construction Lab menus are now at the top like in the Electronics Lab, the home screen of the lab is a short list of tiles with a Learn mode and Practice mode switch, a device already put in can be tapped again to open it or pull it out, and a tap that misses never moves the view. opened from the construction helmet button next to the AI button at the top of the Electronics Lab, and also as a tile in the Core Protocol. Every model can be turned with a finger, zoomed by pinching or with the zoom buttons, and any part can be tapped to zoom in and read what it is. Lessons: Wall outlet (black hot wire to the brass screw, white neutral to the silver screw, bare copper ground to the green screw), Light switch (two black wires on the two brass screws, white wires joined with a wire nut), GFCI outlet (power in on the LINE screws, the LOAD screws are covered with yellow tape, press RESET then TEST), Sink drain (build the tailpiece, P-trap and trap arm, tighten the slip nuts, run the water and see the water seal that blocks sewer gas), Faucet supply lines (hot red hose on the left, cold blue hose on the right, then open the shut-off valves) and a whole house cut open at the front that can be built stage by stage (slab, framing, plumbing rough-in, electrical rough-in, drywall, fixtures, roof), where a tripped breaker and a leaking slip nut can be fixed and each fixture opens its own lesson. The electrical lessons start with the breaker ON and refuse any wire until it is turned OFF, and every wrong connection is explained in plain words. BUILD A WHOLE ROOM (also WIRE A ROOM quick start, and a Skip to the wiring button in the tray, which do the framing, cable and drywall for you so you start straight at wiring the outlets, switches, light and fan with coloured labelled screws, the tester, the TV and the switch test; the room has a window wall, a door wall and the working wall): a project with three phases (rough-in, drywall, devices). Rough-in: mount wall boxes, ceiling boxes and a fan box on the studs with the drill, and unroll the cable through the studs and ceiling (a wrong route gives an error). Drywall: hang the sheets, cut holes with the drywall saw, screw them to the studs, then tape, mud, sand and paint. Devices: wire outlets, several switches, a ceiling light and a ceiling fan, each with a switch to test, then plug in a TV and other appliances. The screw terminals have different colours (brass gold hot, silver neutral, green ground) and show a label when tapped. A Behind the wall / In front button lets you choose which side of the wall you look from instead of the camera turning by itself. Learn mode tells you what to do next and explains every wrong move; Practice mode only speaks up when something is done wrong, and real wiring mistakes shock (three lives) or burn. SERVICE CALLS (Fix a house, learn and practice): a customer rings with four problems chosen from twelve kinds (tripped breaker, no hot water, leaking slip nut, leaking crimped joint, dead outlet, flickering light, burnt outlet, tripped GFCI, running toilet, dripping faucet, hole in the wall, clogged sink), a different mix every time; use Look and test, then the right tool from the toolbox (hand, screwdriver, pliers, wrench, crimp tool, plunger, new flapper, new outlet, drywall patch); wires must have their breaker switched off first. PLUMBING JOBS (learn and practice): fit out a bathroom (flange, wax ring, toilet, bolts, shut-off valve, supply hose, then the sink) or a kitchen sink piece by piece, with the order checked (the app says why a piece cannot go there yet), the main water valve turned off before cutting into pipes, joints tightened with the wrench, and finally the water turned on to find leaks.',"MY HOUSE, THE WORLD OUTSIDE: go outside from the living room (Go outside, or the front door) into a big garden town you can walk and decorate. It starts with a main street, a lane up to the house, a crossroads, a shop, a hospital with a red cross, a fire station with a fire truck, a school, a second house, an ambulance and a car, trees, a pond, lampposts, a bench and fenced animals. In Furniture mode the Add tray offers road pieces (straight, corner, T-junction, crossroads) that snap to a grid and jump a whole piece with the arrow buttons so they always join up, buildings (house, shop, hospital, fire station, school), cars, a fire truck, an ambulance, animals (dog, cat, cow, sheep, chicken, horse) that wander about, trees, bushes, flowers, fences, a bench, a swing, a shed and a doghouse. Everything can be moved, turned, recoloured and removed with the buttons, and nothing reacts to a tap unless the Furniture button is on. Walk about puts a person in the world: hold the arrows to walk (up is away from you), or double tap a spot to send them there; they walk round buildings, vehicles, trees and fences, and walking up to the front door takes them back into the living room. The camera never goes under the ground.","ELECTRONICS LAB: build real circuits with 56 parts in two tool rows, both at the top above the board (swipe sideways), under a redesigned top bar with the lab name, a live count of working and burnt parts, buttons for ready-made circuits, repair, clear and help, and a challenge card with a progress bar: batteries, solar panel, hand crank, wind turbine, switch, fuse, bulb, LED, motor, radio, TV, fan, speaker, clock, calculator, phone charger, WiFi router, siren, toy car, kettle, desk lamp, party lights, voltmeter and ammeter, step-down converter (brings big battery volts down to 3 to 9 V so a phone, tablet, headphones or smart watch is safe), 5 V regulator (gets hot), diode (one way, 0.7 V drop), light sensor, LED strip, water pump, hair dryer, headphones, smart watch, tablet, fridge, washing machine, blender, drone, power drill, torch, neon sign, microwave, doorbell, security camera, game console, heart monitor, aquarium, lighthouse, disco ball, robot and toaster. Each gadget needs the right volts and the right way round: the lab explains why something is not working (not connected, only one end wired, plugged in backwards, flat battery, switch open, too few volts, burnt out and why). A 1.5 volt battery starts flat and must be charged by a solar panel first. The TV shows NGMY animation channels: it opens on the big screen by itself for a minute when it first switches on, and tapping it 3 times quickly opens the big screen. Each TV brand shows its apps in its own design: Samsung with a Smart Hub bar along the bottom, LG with webOS wide launcher cards, Sony with Google TV rows and a picture card, Apple TV with big rounded icons that rise when selected, and Bang and Olufsen with a quiet warm text menu. The TV has 10 NGMY animation channels, a remote control at the top middle of the big screen (CH minus, CH plus, TV, Apps, Ads) and 8 apps inside the TV screen (there is no Growth Income ad or app on the TVs): NGMY Ads (every promotion as cartoons), Civic Registry, Jobs, NGMY Store (African and traditional food, supporting the Congolese and African community), Kiswahili, Doc Scanner, Invoices and Calendar. Each ad is a little cartoon with a kid character. Premium devices with screens play the NGMY cartoon ads on their own screens: TVs (Samsung Neo QLED 8K, LG OLED evo G5, Sony Bravia 9, Apple TV 4K, Bang and Olufsen Beovision), phones (iPhone 18 Pro Max with a Dynamic Island, iPhone Fold, Galaxy S26 Ultra, Galaxy Z Fold7, Pixel 10 Pro XL, Xiaomi 16 Ultra, Huawei Mate 80 Pro Max, OPPO Find X9 Ultra, Honor Magic V5, vivo X300 Pro), tablets and readers (iPad Pro, Kindle Scribe), computers (MacBook Pro, iMac, Pro Display XDR monitor, Sony laser projector, luxury car touchscreen, Apple Vision Pro). Tapping a screen 3 times opens its big screen (a phone opens like an iPhone, a computer shows a desktop with a dock and app windows). Tapping it 4 times opens a size sheet so the screen can be made bigger (never smaller than normal). Sample circuit: Phone and TV on one battery, using a step-down converter. The AI button at the top of the lab opens the AI Inventor, which builds what you describe on the lab board.  Every battery and solar panel can only give so many amps: when the gadgets connected ask for more, a red warning triangle appears on the power source, its volts sag, gadgets switch off and the lab explains why. The lab saves your board and your challenges by itself, so nothing disappears when you leave. The challenges sit behind a flag button in the top bar (with a number on it for how many are left), next to the dark glowing AI button and the help button.","BODY EXPLORER: a real 3D human body built from medical anatomy data. You can turn it, zoom in, switch layers (skin, muscles, organs, skeleton, blood vessels), tap any part to learn about it, hear the heart beat, and take a quiz.","KISWAHILI SCHOOL: learn English and Swahili with pictures and the teacher Mwalimu Amina.","FAMILY TREE AND FAMILY BOOK: build a family tree, then keep a Family Book library of up to six books. The AI can write a whole new book from the tree, in English or Swahili, and the cover can be designed. The look of the top of each book can be chosen from eight header designs (classic leather, ornate gold, parchment, clean paper, midnight, emerald, rose vintage, modern) with the Header button, and the book title also shows as a small running title on every page.","NOTES: business notes with search, photos and cards.","NGMY QUOTES: make a picture quote with many designs, word sizes, text styles, your own photo and the NGMY logo. It also makes NEWS: a newspaper page with a headline, article and your picture, written by an AI that knows NGMY.","BIO STUDIO: link-in-bio pages with designs such as Neural Core, Quantum Grid and Mech Terminal, and visitors can react to a page.","MENU STUDIO: restaurant menus published as a link.","BUSINESS CARD CREATOR: design and download business cards.","INVOICES AND QUOTE CALC: invoices, receipts and estimates with NGMY watermarks.","DOC SHARE, QR GENERATOR, RECORDER STUDIO, VIDEO STUDIO, PLAY ZONE AND PHONE UNLOCK: tools in the Creator Hub.","APP BUILDER: describe an app and the AI builds it, including real web apps you can publish.","DOCUMENT SCANNER: scan papers with the phone camera.","LIGHT AND DARK LOOK: in My Profile the appearance can be Light, Dark or Auto. Light mode is plain and calm: thick white cards with a wide soft shadow all round on a very light grey page, frames in the colourful reference style (a thick bright colour rim, rich colour inside with soft waves and glowing dots, still) on the four home frames and the Tool Hub (Business Card Creator green, Menu Studio gold, Essentials blue, each with its name and a round colour icon above, the light sample card in the middle and a round shiny play button, no dark fade), home frames in two colours only (Neural Link and Core Protocol blue, Signal Grid and Vault Channel purple), Hub, Creator Toolkit, Core Protocol, NGMY Slides and the NGMY Advisors filter frames with colour: a soft sky blue or soft lavender wash (white at the top) with a thin edge and a soft shadow of the same colour, a whole row at a time (one row blue, the next row purple, never mixed tile by tile), the four NGMY Hub tiles all in one colour, NGMY Services in a solid purple frame, the NGMY badge at the top of home in light gold, pure white pages, NGMY Slides opening at once when you come back to it (no loading every time), Civic Registry words in a dark readable grey in light mode, a Create Invoice form grouped into framed sections with rounded fields and icons, and the Quote Calc Iron Triangle made of brushed steel (when a third of FAST, CHEAP, GOOD is turned on, one of the other two turns off at random, not in a fixed order), pages that are loading stay light in light mode, each icon in a full colour app-style tile with a white icon, clear dark text, a white bottom menu with grey icons where the chosen tab is white in a dark circle, and nothing glowing or moving. This includes NGMY Slides, Creator Toolkit, Business Card and Menu Studio, My Profile, the Loan Service and Growth Income buttons on home, and the Core Protocol page, which is white in light mode. Dark mode keeps the futuristic look with glowing rings and moving scan lines. NGMY Advisors keep their own look in both modes.","GAME CENTER AND VAULT ARCADE: arcade games you can play. Game bets and wins have their own receipts and do not appear in the wallet history. Games played offline are saved on the phone and counted on the balance, then applied to the account in order as soon as the phone is online again, and every device updates."],x.s)
D.d2u=w([A.iw,D.jB,D.Mn],x.O)
D.eMa=new B.y(A.bp,D.a2R)
D.eND=new B.y(A.K,D.a2Q)
D.eHc=new B.y(A.e4,D.a2S)
D.d3u=w([D.eMa,D.eND,D.eHc],B.at("O<+(qn,a0)>"))
D.d3x=w([A.b8,A.aE],x.O)
D.d_=new C.JL(0,"text")
D.lS=new C.JL(1,"image")
D.fi=new C.JL(2,"shape")
D.TL=new C.JL(3,"pdf")
D.ls=new C.JL(4,"signature")
D.a8c=new C.JL(5,"bio")
D.d4u=w([D.d_,D.lS,D.fi,D.TL,D.ls,D.a8c],B.at("O<JL>"))
D.d4v=w([A.bt,A.cK],B.at("O<ID>"))
D.d5a=w(["School","Documents","Sign & present"],x.s)
D.b9W=new B.ab(0,A.G,A.ajP,A.vs,28)
D.d5y=w([D.b9W],x.V)
D.d5R=w([4292128567,4279983648,4290190364,4279898632,4293436183,4279060385],x.t)
D.RS=w(["Rocket","Trophy","Party popper","Confetti ball","Balloon","Wrapped gift","Birthday cake","Sparkles","Star","Glowing star","Fire","Light bulb","Gem stone","Crown","Money bag","Dollar banknote","Chart increasing","Bar chart","Bullseye","Globe showing americas","Globe showing europe-africa","Sun","Rainbow","Cloud","High voltage","Red heart","Handshake","Graduation cap","Books","Open book","Pencil","Laptop","Mobile phone","Microphone","Musical notes","Camera","Video camera","Megaphone","Bell","Calendar","Alarm clock","Hourglass done","Key","Locked","Shield","Gear","Hammer and wrench","Magnifying glass tilted left","Package","Shopping cart","House","Office building","Hospital","Ballot box with ballot","Automobile","Airplane","Seedling","Deciduous tree","Evergreen tree","Palm tree","Sunflower","Cherry blossom","Herb","Four leaf clover","Water wave","Mountain","Lion","Tiger face","Dog face","Cat face","Elephant","Unicorn","Butterfly","Honeybee","Owl","Eagle","Dolphin","Turtle","Panda","Fox","Rabbit face","Monkey face","Penguin","Horse","Bird","Peacock","Parrot","Red apple","Pizza","Hot beverage","Soccer ball","Basketball","Artist palette","Clapper board","Robot","Brain","Check mark button","Red question mark","Speech balloon","Compass","Crystal ball","Puzzle piece","1st place medal","Smiling face with sunglasses","Grinning face with big eyes","Star-struck","Partying face","Thinking face","Hundred points"],x.s)
D.aAs=w([A.ia,A.Gp,A.bl,A.c,A.pg,A.aC],x.O)
D.f_c=new B.y(0.1,0.08)
D.eTg=new B.y(0.3,0.05)
D.eGF=new B.y(0.55,0.1)
D.eL6=new B.y(0.8,0.06)
D.eOo=new B.y(0.92,0.16)
D.eNS=new B.y(0.2,0.2)
D.eLB=new B.y(0.7,0.22)
D.eRU=new B.y(0.05,0.4)
D.eOQ=new B.y(0.95,0.45)
D.eHs=new B.y(0.12,0.7)
D.eJP=new B.y(0.88,0.75)
D.eJX=new B.y(0.4,0.9)
D.eEV=new B.y(0.65,0.93)
D.eKK=new B.y(0.25,0.97)
D.eM7=new B.y(0.85,0.9)
D.eIn=new B.y(0.5,0.04)
D.d7s=w([D.f_c,D.eTg,D.eGF,D.eL6,D.eOo,D.eNS,D.eLB,D.eRU,D.eOQ,D.eHs,D.eJP,D.eJX,D.eEV,D.eKK,D.eM7,D.eIn],x.G)
D.d7B=w([A.c,A.hF,A.aG,A.aV],x.O)
D.eg3=new C.k0("office_blue","Office Blue",A.bn,A.da,A.aM,A.c,A.lh)
D.ege=new C.k0("campus_green","Campus Green",A.b2,A.he,A.cX,A.nw,A.uc)
D.eg4=new C.k0("sunset","Sunset",A.fq,A.ku,A.od,A.hY,A.q9)
D.eg5=new C.k0("midnight","Midnight",A.aE,A.kN,A.cx,A.a_,A.dB)
D.egg=new C.k0("classic","Classic",A.d3,A.dW,A.m5,A.hG,A.fz)
D.egd=new C.k0("rose_gold","Rose Gold",A.hF,A.yk,A.yj,A.wg,A.C1)
D.efZ=new C.k0("ocean_teal","Ocean Teal",A.fp,A.u7,A.of,A.rM,A.u1)
D.efY=new C.k0("slate_pro","Slate Pro",A.bw,A.a_,A.aM,A.aS,A.bl)
D.efX=new C.k0("neon_night","Neon Night",A.b9,A.aZ,A.bl,A.dF,A.a_)
D.eg8=new C.k0("lavender","Lavender",A.b8,A.nv,A.kp,A.qc,A.qe)
D.ega=new C.k0("coral","Coral",A.c6,A.ku,A.u5,A.hY,A.mP)
D.eg_=new C.k0("forest","Forest",A.hu,A.ea,A.cl,A.m6,A.es)
D.eg0=new C.k0("berry","Berry",A.fe,G.a_5,A.C2,D.aja,A.kN)
D.eg7=new C.k0("sand","Sand",A.e0,A.ic,A.od,A.hG,A.bL)
D.egc=new C.k0("ice","Ice",A.oh,A.FV,A.aM,A.oe,A.fI)
D.eg2=new C.k0("charcoal","Charcoal",A.an,A.aS,A.cx,A.br,A.a_)
D.efW=new C.k0("mint","Mint",A.aV,A.fX,A.he,A.m6,A.qq)
D.egb=new C.k0("crimson","Crimson",A.bD,A.mO,A.kt,A.Gn,A.rN)
D.biY=new B.u(1,0.996078431372549,0.9882352941176471,0.9098039215686274,A.q)
D.eg6=new C.k0("gold","Gold",A.mJ,A.y3,A.pe,D.biY,A.m4)
D.eg9=new C.k0("aqua","Aqua",A.bU,A.G8,A.pb,A.qd,A.ph)
D.eg1=new C.k0("plum","Plum",A.nu,A.yh,A.C2,A.FW,A.rI)
D.egf=new C.k0("steel","Steel",A.d7,A.da,A.br,A.lh,A.lf)
D.a5w=w([D.eg3,D.ege,D.eg4,D.eg5,D.egg,D.egd,D.efZ,D.efY,D.efX,D.eg8,D.ega,D.eg_,D.eg0,D.eg7,D.egc,D.eg2,D.efW,D.egb,D.eg6,D.eg9,D.eg1,D.egf],B.at("O<k0>"))
D.d7Y=w([A.c4,A.jC],x.O)
D.TN=new C.hF(10,"rotate3d")
D.Jn=new C.hF(8,"flip")
D.aL5=new C.hF(19,"spiral")
D.r1=new C.hF(16,"bounce")
D.aL8=new C.hF(9,"flipVertical")
D.d7Z=w([D.TN,D.Jn,D.aL5,D.r1,D.aL8],x.i)
D.eo=w([1353184337,1399144830,3282310938,2522752826,3412831035,4047871263,2874735276,2466505547,1442459680,4134368941,2440481928,625738485,4242007375,3620416197,2151953702,2409849525,1230680542,1729870373,2551114309,3787521629,41234371,317738113,2744600205,3338261355,3881799427,2510066197,3950669247,3663286933,763608788,3542185048,694804553,1154009486,1787413109,2021232372,1799248025,3715217703,3058688446,397248752,1722556617,3023752829,407560035,2184256229,1613975959,1165972322,3765920945,2226023355,480281086,2485848313,1483229296,436028815,2272059028,3086515026,601060267,3791801202,1468997603,715871590,120122290,63092015,2591802758,2768779219,4068943920,2997206819,3127509762,1552029421,723308426,2461301159,4042393587,2715969870,3455375973,3586000134,526529745,2331944644,2639474228,2689987490,853641733,1978398372,971801355,2867814464,111112542,1360031421,4186579262,1023860118,2919579357,1186850381,3045938321,90031217,1876166148,4279586912,620468249,2548678102,3426959497,2006899047,3175278768,2290845959,945494503,3689859193,1191869601,3910091388,3374220536,0,2206629897,1223502642,2893025566,1316117100,4227796733,1446544655,517320253,658058550,1691946762,564550760,3511966619,976107044,2976320012,266819475,3533106868,2660342555,1338359936,2720062561,1766553434,370807324,179999714,3844776128,1138762300,488053522,185403662,2915535858,3114841645,3366526484,2233069911,1275557295,3151862254,4250959779,2670068215,3170202204,3309004356,880737115,1982415755,3703972811,1761406390,1676797112,3403428311,277177154,1076008723,538035844,2099530373,4164795346,288553390,1839278535,1261411869,4080055004,3964831245,3504587127,1813426987,2579067049,4199060497,577038663,3297574056,440397984,3626794326,4019204898,3343796615,3251714265,4272081548,906744984,3481400742,685669029,646887386,2764025151,3835509292,227702864,2613862250,1648787028,3256061430,3904428176,1593260334,4121936770,3196083615,2090061929,2838353263,3004310991,999926984,2809993232,1852021992,2075868123,158869197,4095236462,28809964,2828685187,1701746150,2129067946,147831841,3873969647,3650873274,3459673930,3557400554,3598495785,2947720241,824393514,815048134,3227951669,935087732,2798289660,2966458592,366520115,1251476721,4158319681,240176511,804688151,2379631990,1303441219,1414376140,3741619940,3820343710,461924940,3089050817,2136040774,82468509,1563790337,1937016826,776014843,1511876531,1389550482,861278441,323475053,2355222426,2047648055,2383738969,2302415851,3995576782,902390199,3991215329,1018251130,1507840668,1064563285,2043548696,3208103795,3939366739,1537932639,342834655,2262516856,2180231114,1053059257,741614648,1598071746,1925389590,203809468,2336832552,1100287487,1895934009,3736275976,2632234200,2428589668,1636092795,1890988757,1952214088,1113045200],x.t)
D.d8l=w([0.62,1],x.x)
D.d8Y=w([0,0.32,0.68,1],x.x)
D.n9=new C.hF(6,"zoom")
D.vm=new C.hF(4,"slideUp")
D.vl=new C.hF(2,"slideLeft")
D.d97=w([D.n9,D.Jn,D.vm,D.TN,D.vl],x.i)
D.d9D=w([A.bT,A.hF,A.iv,A.ia,A.c],x.O)
D.b9K=new B.ab(0,A.G,D.ahR,A.vs,30)
D.dap=w([D.b9K],x.V)
D.erE=new B.o(0,-2.5)
D.erv=new B.o(-2.5,0)
D.epI=new B.o(2.5,0)
D.das=w([A.U0,A.a8D,A.aMg,A.a8C,D.erE,A.a8F,D.erv,D.epI],x.dN)
D.Iy=w([0,79764919,159529838,222504665,319059676,398814059,445009330,507990021,638119352,583659535,797628118,726387553,890018660,835552979,1015980042,944750013,1276238704,1221641927,1167319070,1095957929,1595256236,1540665371,1452775106,1381403509,1780037320,1859660671,1671105958,1733955601,2031960084,2111593891,1889500026,1952343757,2552477408,2632100695,2443283854,2506133561,2334638140,2414271883,2191915858,2254759653,3190512472,3135915759,3081330742,3009969537,2905550212,2850959411,2762807018,2691435357,3560074640,3505614887,3719321342,3648080713,3342211916,3287746299,3467911202,3396681109,4063920168,4143685023,4223187782,4286162673,3779000052,3858754371,3904687514,3967668269,881225847,809987520,1023691545,969234094,662832811,591600412,771767749,717299826,311336399,374308984,453813921,533576470,25881363,88864420,134795389,214552010,2023205639,2086057648,1897238633,1976864222,1804852699,1867694188,1645340341,1724971778,1587496639,1516133128,1461550545,1406951526,1302016099,1230646740,1142491917,1087903418,2896545431,2825181984,2770861561,2716262478,3215044683,3143675388,3055782693,3001194130,2326604591,2389456536,2200899649,2280525302,2578013683,2640855108,2418763421,2498394922,3769900519,3832873040,3912640137,3992402750,4088425275,4151408268,4197601365,4277358050,3334271071,3263032808,3476998961,3422541446,3585640067,3514407732,3694837229,3640369242,1762451694,1842216281,1619975040,1682949687,2047383090,2127137669,1938468188,2001449195,1325665622,1271206113,1183200824,1111960463,1543535498,1489069629,1434599652,1363369299,622672798,568075817,748617968,677256519,907627842,853037301,1067152940,995781531,51762726,131386257,177728840,240578815,269590778,349224269,429104020,491947555,4046411278,4126034873,4172115296,4234965207,3794477266,3874110821,3953728444,4016571915,3609705398,3555108353,3735388376,3664026991,3290680682,3236090077,3449943556,3378572211,3174993278,3120533705,3032266256,2961025959,2923101090,2868635157,2813903052,2742672763,2604032198,2683796849,2461293480,2524268063,2284983834,2364738477,2175806836,2238787779,1569362073,1498123566,1409854455,1355396672,1317987909,1246755826,1192025387,1137557660,2072149281,2135122070,1912620623,1992383480,1753615357,1816598090,1627664531,1707420964,295390185,358241886,404320391,483945776,43990325,106832002,186451547,266083308,932423249,861060070,1041341759,986742920,613929101,542559546,756411363,701822548,3316196985,3244833742,3425377559,3370778784,3601682597,3530312978,3744426955,3689838204,3819031489,3881883254,3928223919,4007849240,4037393693,4100235434,4180117107,4259748804,2310601993,2373574846,2151335527,2231098320,2596047829,2659030626,2470359227,2550115596,2947551409,2876312838,2788305887,2733848168,3165939309,3094707162,3040238851,2985771188],x.t)
D.db_=w([23,114,69,56,80,144],x.t)
D.dbt=w(["Make the headline shorter","Add a paragraph about the Civic Registry","Write the whole thing in Swahili","Change the newspaper name"],x.s)
D.dbV=w(["Add a slide about\u2026","Make this slide shorter","Translate everything to Swahili","Add a slide with our contact details","Change the style to luxury","Remove the last slide"],x.s)
D.ddE=w([null,4294626325,4294828103,4283096704,4280472558,4294210230,4294677052,4293870660,4287323382,4282090230,4294967295,4279310375],x.Z)
D.ddJ=w(["Kichwa cha Mtu: [Kiasi kilichosalia au thamani]","Mbuzi Mbili","Ngyoka","Mmoko"],x.s)
D.bm=new C.vj(0,"rectangle")
D.f1=new C.vj(1,"circle")
D.lt=new C.vj(6,"hexagon")
D.de_=w([D.bm,D.f1,D.lt],x.m)
D.oO=w([99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22],x.t)
D.ajj=new B.u(1,0.24313725490196078,0.47843137254901963,0.30980392156862746,A.q)
D.dey=w([D.ajj,A.ea],x.O)
D.eGW=new B.y("","Classic")
D.eF9=new B.y("caps","Bold caps")
D.eRX=new B.y("elegant","Elegant")
D.eY2=new B.y("shadow","Shadow")
D.eLu=new B.y("neon","Neon glow")
D.eVJ=new B.y("marker","Highlighter")
D.eYg=new B.y("stamp","Stamp")
D.eKm=new B.y("threed","3D")
D.eSt=new B.y("fire","Fire")
D.eTs=new B.y("ice","Ice")
D.eR5=new B.y("chalk","Chalk")
D.eRa=new B.y("comic","Comic")
D.eZy=new B.y("softglow","Soft glow")
D.eUv=new B.y("lowercase","Lowercase")
D.eRF=new B.y("double","Echo")
D.eZH=new B.y("whisper","Whisper")
D.aBo=w([D.eGW,D.eF9,D.eRX,D.eY2,D.eLu,M.aRz,D.eVJ,D.eYg,M.aRB,D.eKm,M.aRt,D.eSt,D.eTs,D.eR5,D.eRa,A.Ux,At.aRC,D.eZy,D.eUv,D.eRF,D.eZH],x.L)
D.dfS=w([3,5,7,10,12,15],x.t)
D.dhs=w([A.bT,A.bL,A.c,A.eK,A.cI],x.O)
D.dH6=new C.tP(10,"cardWorld")
D.DU=new C.Cb(3,"rounded")
D.dXK=new C.lx("world","NGMY World",D.dH6,D.DU,4278918980,4278521378,4294967295,4280118271,"logo","Roboto","Roboto","Roboto","a modern digital news site: clear, confident and direct, a strong plain headline and a one-sentence summary",!1,"none",!0,!1)
D.dH7=new C.tP(11,"cardSplit")
D.dXG=new C.lx("business","Business Wire",D.dH7,D.DU,4294967295,4294507260,4279179050,4292943150,"logo","Roboto","Roboto","Roboto","a clean business news site: precise, informative and professional, with a plain, strong headline",!1,"none",!1,!1)
D.dH8=new C.tP(12,"cardBreaking")
D.dXT=new C.lx("breaking","Breaking Red",D.dH8,D.DU,4278913807,4280944139,4294967295,4292943150,"logo","Roboto","Roboto","Roboto","a breaking-news broadcast: urgent, factual and clear, a punchy headline and a tight summary",!1,"none",!0,!1)
D.dH9=new C.tP(13,"cardFeature")
D.dXM=new C.lx("feature","Tech Feature",D.dH9,D.DU,4294967295,4294047225,4279179050,4280640491,"logo","Roboto","Roboto","Roboto","a modern feature article: informative, engaging and well explained",!1,"none",!1,!1)
D.aJJ=new C.tP(6,"circle")
D.aJD=new C.Cb(4,"circle")
D.dXQ=new C.lx("parchment","Royal Circle",D.aJJ,D.aJD,4294241234,4293450160,4281278992,4285211048,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a stately royal edition: dignified, noble and ceremonial",!0,"sepia",!1,!1)
D.dXF=new C.lx("ocean","Blue Ocean",D.aJJ,D.aJD,4293916415,4292602622,4278984254,4278413729,"centered","NgmyAbril","NgmyAbril","NgmyOldStandard","a calm, trustworthy paper: clear, steady and reassuring",!1,"none",!1,!1)
D.dHc=new C.tP(7,"rail")
D.aJC=new C.Cb(1,"double")
D.dXH=new C.lx("forest","Green Leaf",D.dHc,D.aJC,4293983732,4292672743,4278529558,4279599165,"centered","NgmyAbril","NgmyAbril","NgmyOldStandard","a calm community paper about growth and togetherness: gentle, hopeful and clear",!1,"none",!1,!1)
D.aJG=new C.tP(1,"sideBySide")
D.dXV=new C.lx("herald","NGMY Herald",D.aJG,D.DU,4294967295,4294308863,4280163147,4286331629,"split","NgmyAbril","NgmyAbril","NgmyOldStandard","the proud NGMY Herald: warm, hopeful and community-minded, in NGMY purple",!1,"none",!1,!1)
D.aJF=new C.tP(0,"classic")
D.a7o=new C.Cb(9,"shadow")
D.dXU=new C.lx("daily","The Daily",D.aJF,D.a7o,4294967295,4294243570,4279308561,4292225064,"bar","NgmyAbril","NgmyAbril","NgmyOldStandard","a modern daily newspaper: crisp, clear and energetic, with a punchy headline",!1,"none",!1,!0)
D.dHa=new C.tP(2,"splash")
D.aJE=new C.Cb(6,"cutCorner")
D.dXE=new C.lx("tabloid","Big Tabloid",D.dHa,D.aJE,4294967295,4294965216,4279308561,4292943176,"bar","Roboto","NgmyAbril","Roboto","a bold tabloid: exciting, short punchy sentences and a loud, attention-grabbing headline (still truthful)",!1,"none",!1,!0)
D.aJK=new C.tP(9,"minimal")
D.dXP=new C.lx("modern","Modern Digest",D.aJK,D.DU,4294507260,4293060848,4279179050,4279080072,"logo","Roboto","Roboto","Roboto","a clean modern digest: simple words, short paragraphs, friendly and clear",!1,"none",!1,!1)
D.aJH=new C.tP(3,"magazine")
D.aJB=new C.Cb(0,"plain")
D.dXL=new C.lx("midnight","Midnight Edition",D.aJH,D.aJB,4279310375,4278915104,4294047225,4294626325,"logo","Roboto","NgmyAbril","NgmyOldStandard","a dramatic late-night edition: confident, cinematic and polished",!1,"none",!0,!0)
D.dHd=new C.tP(8,"banner")
D.dXN=new C.lx("metro","Metro Wire",D.dHd,D.aJE,4294047225,4293060848,4278915616,4280640491,"logo","Roboto","Roboto","Roboto","a modern news wire: fast, factual and direct, like breaking news",!1,"none",!1,!0)
D.dH5=new C.Cb(8,"arch")
D.dXO=new C.lx("sunrise","Sunrise Post",D.aJH,D.dH5,4294965229,4294962645,4282064136,4293548044,"split","NgmyAbril","NgmyAbril","NgmyOldStandard","a cheerful morning paper: bright, optimistic and welcoming",!1,"none",!1,!1)
D.aJI=new C.tP(5,"scrapbook")
D.dH4=new C.Cb(5,"tape")
D.dXJ=new C.lx("neon","Neon Beat",D.aJI,D.dH4,4280163147,4279175726,4294308863,4293675161,"split","NgmyAbril","NgmyAbril","Roboto","a youthful neon culture paper: fresh, bold, energetic and fun",!1,"none",!0,!1)
D.dHb=new C.tP(4,"wrap")
D.dXW=new C.lx("gold","Golden Press",D.dHb,D.a7o,4279505162,4278847748,4294898631,4294626325,"logo","Roboto","NgmyAbril","NgmyOldStandard","a luxurious golden press edition: grand, elegant and prestigious",!1,"none",!0,!0)
D.dXX=new C.lx("minimal","Paper White",D.aJK,D.a7o,4294967295,4294638330,4279769115,4279769115,"split","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a quiet, elegant long-read: thoughtful, simple and beautifully written",!1,"none",!1,!1)
D.dXI=new C.lx("gazette","Fresh Gazette",D.aJF,D.aJC,4294373341,4293582786,4280949518,4288295954,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a refined town gazette: formal, dignified and warm, with a strong headline",!1,"none",!1,!0)
D.dXS=new C.lx("times","Classic Times",D.aJG,D.aJB,4294637810,4293913565,4279636750,4280171146,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a serious classic broadsheet: calm, factual, authoritative, with a strong headline and a clear subhead",!1,"bw",!1,!1)
D.Ti=new C.Cb(2,"polaroid")
D.dXR=new C.lx("scrapbook","Memory Scrapbook",D.aJI,D.Ti,4294437835,4293580710,4282001946,4290007817,"split","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a warm scrapbook clipping: personal, nostalgic and heartfelt",!1,"sepia",!1,!1)
D.a5N=w([D.dXK,D.dXG,D.dXT,D.dXM,D.dXQ,D.dXF,D.dXH,D.dXV,D.dXU,D.dXE,D.dXP,D.dXL,D.dXN,D.dXO,D.dXJ,D.dXW,D.dXX,D.dXI,D.dXS,D.dXR],B.at("O<lx>"))
D.dhE=w([0.45,1],x.x)
D.ID=w([619,720,127,481,931,816,813,233,566,247,985,724,205,454,863,491,741,242,949,214,733,859,335,708,621,574,73,654,730,472,419,436,278,496,867,210,399,680,480,51,878,465,811,169,869,675,611,697,867,561,862,687,507,283,482,129,807,591,733,623,150,238,59,379,684,877,625,169,643,105,170,607,520,932,727,476,693,425,174,647,73,122,335,530,442,853,695,249,445,515,909,545,703,919,874,474,882,500,594,612,641,801,220,162,819,984,589,513,495,799,161,604,958,533,221,400,386,867,600,782,382,596,414,171,516,375,682,485,911,276,98,553,163,354,666,933,424,341,533,870,227,730,475,186,263,647,537,686,600,224,469,68,770,919,190,373,294,822,808,206,184,943,795,384,383,461,404,758,839,887,715,67,618,276,204,918,873,777,604,560,951,160,578,722,79,804,96,409,713,940,652,934,970,447,318,353,859,672,112,785,645,863,803,350,139,93,354,99,820,908,609,772,154,274,580,184,79,626,630,742,653,282,762,623,680,81,927,626,789,125,411,521,938,300,821,78,343,175,128,250,170,774,972,275,999,639,495,78,352,126,857,956,358,619,580,124,737,594,701,612,669,112,134,694,363,992,809,743,168,974,944,375,748,52,600,747,642,182,862,81,344,805,988,739,511,655,814,334,249,515,897,955,664,981,649,113,974,459,893,228,433,837,553,268,926,240,102,654,459,51,686,754,806,760,493,403,415,394,687,700,946,670,656,610,738,392,760,799,887,653,978,321,576,617,626,502,894,679,243,440,680,879,194,572,640,724,926,56,204,700,707,151,457,449,797,195,791,558,945,679,297,59,87,824,713,663,412,693,342,606,134,108,571,364,631,212,174,643,304,329,343,97,430,751,497,314,983,374,822,928,140,206,73,263,980,736,876,478,430,305,170,514,364,692,829,82,855,953,676,246,369,970,294,750,807,827,150,790,288,923,804,378,215,828,592,281,565,555,710,82,896,831,547,261,524,462,293,465,502,56,661,821,976,991,658,869,905,758,745,193,768,550,608,933,378,286,215,979,792,961,61,688,793,644,986,403,106,366,905,644,372,567,466,434,645,210,389,550,919,135,780,773,635,389,707,100,626,958,165,504,920,176,193,713,857,265,203,50,668,108,645,990,626,197,510,357,358,850,858,364,936,638],x.t)
D.di3=w(["video/webm;codecs=vp9","video/webm;codecs=vp8","video/webm","video/mp4"],x.s)
D.hAK=new C.oX("Original",0,1,1,0,0,0)
D.hAO=new C.oX("Black & white",0,1.1,0,0,0,0)
D.hAB=new C.oX("Noir",-0.05,1.55,0,0,0,0)
D.hAF=new C.oX("Sepia",0,1,0.25,0.9,0,0)
D.hAE=new C.oX("Vivid",0,1.15,1.6,0,0,0)
D.hAx=new C.oX("Pop",0,1.3,1.9,0,0,0)
D.hAz=new C.oX("Faded",0.06,0.85,0.8,0.1,0,0.4)
D.hAL=new C.oX("Matte",0,0.9,0.85,0,0,0.55)
D.hAG=new C.oX("Cool",0,1.05,1,-0.8,0,0)
D.hAN=new C.oX("Warm",0.03,1.05,1.1,0.8,0,0)
D.hAy=new C.oX("Golden hour",0.04,1,1.25,1,0,0)
D.hAD=new C.oX("Moonlight",-0.08,1.1,0.8,-0.8,-0.1,0)
D.hAM=new C.oX("Dreamy",0.08,0.85,1.1,0.2,0,0.25)
D.hAC=new C.oX("Dramatic",-0.05,1.5,1.2,0,0,0)
D.hAI=new C.oX("Retro",0,0.9,0.7,0.4,0,0.35)
D.hAH=new C.oX("Forest",0,1,1.2,-0.1,-0.45,0)
D.hAJ=new C.oX("Rose",0,1,1.1,0.3,0.4,0)
D.hAA=new C.oX("Ocean",0,1,1.2,-0.5,-0.2,0)
D.di4=w([D.hAK,D.hAO,D.hAB,D.hAF,D.hAE,D.hAx,D.hAz,D.hAL,D.hAG,D.hAN,D.hAy,D.hAD,D.hAM,D.hAC,D.hAI,D.hAH,D.hAJ,D.hAA],B.at("O<oX>"))
D.bfm=new B.u(1,0.0392156862745098,0.1803921568627451,0.09019607843137255,A.q)
D.di6=w([D.ajj,A.ea,D.bfm],x.O)
D.eCf=new B.y(0.12,0.3)
D.eTD=new B.y(0.26,0.75)
D.eRT=new B.y(0.8,0.22)
D.eYs=new B.y(0.9,0.7)
D.eUu=new B.y(0.5,0.15)
D.eWD=new B.y(0.65,0.85)
D.eIU=new B.y(0.08,0.85)
D.dim=w([D.eCf,D.eTD,D.eRT,D.eYs,D.eUu,D.eWD,D.eIU],x.G)
D.aBB=w([A.b9,A.bT,A.bg,A.b4],x.O)
D.dji=w([y.L,"Mbuzi Wawili","Ngyoka","Mmoko"],x.s)
D.djv=w([A.c,A.fI,A.dn,A.w6],x.O)
D.bjd=new B.u(1,0.10980392156862745,0.09019607843137255,0.06274509803921569,A.q)
D.dkz=w([D.bjd,D.ahB],x.O)
D.dkB=w([A.ua,A.aC],x.O)
D.dkS=w([0,0.25,0.75,1],x.x)
D.dkU=w([A.y7,A.pg],x.O)
D.aKG=new C.lb(10,"kenteSunset")
D.hFR=w([D.ai6,A.kn,A.aC],x.O)
D.dSX=new C.jE("kuhowa_kente_sunset","Kente ya Jua",y.H,D.aKG,4294964964,4282000405,4279983648,D.kc)
D.aKH=new C.lb(11,"indigoMudcloth")
D.bgz=new B.u(1,0.9686274509803922,0.9411764705882353,0.8941176470588236,A.q)
D.hG4=w([D.bgz,A.ahy,A.iw],x.O)
D.dT4=new C.jE("kuhowa_indigo_mudcloth","Nguo ya Indigo",y.n,D.aKH,4294439140,4279903102,4279903102,D.kc)
D.aKI=new C.lb(12,"adinkraRoyal")
D.bvM=new B.u(1,0.4196078431372549,0.24705882352941178,0.12156862745098039,A.q)
D.hG5=w([D.agk,D.bvM,A.aC],x.O)
D.dT6=new C.jE("kuhowa_adinkra_royal","Muhuri wa Adinkra",y.z,D.aKI,4294965484,4285218591,4287322667,D.kc)
D.aKJ=new C.lb(13,"nileLotus")
D.brB=new B.u(1,0.9568627450980393,0.9686274509803922,0.9568627450980393,A.q)
D.bnH=new B.u(1,0.058823529411764705,0.3607843137254902,0.3607843137254902,A.q)
D.hGa=w([D.brB,D.bnH,A.iw],x.O)
D.dT5=new C.jE("kuhowa_nile_lotus","Lotus ya Nile","Nguzo za papyrus na ua la lotus juu.",D.aKJ,4294244340,4279196764,4279196764,D.kc)
D.aKK=new C.lb(14,"shweshweIvory")
D.blx=new B.u(1,0.9725490196078431,0.9568627450980393,0.9333333333333333,A.q)
D.bk5=new B.u(1,0.10588235294117647,0.16470588235294117,0.2901960784313726,A.q)
D.bh5=new B.u(1,0.7686274509803922,0.3607843137254902,0.24313725490196078,A.q)
D.hFS=w([D.blx,D.bk5,D.bh5],x.O)
D.dT1=new C.jE("kuhowa_shweshwe_ivory","Shweshwe","Nguo ya shweshwe \xb7 kadi ya pembe ndani.",D.aKK,4294505710,4279970378,4291058750,D.kc)
D.to=new C.lb(15,"certIvoryNavy")
D.hFQ=w([D.N9,D.jB,A.iw],x.O)
D.aKg=new C.ye(1,"ringsNdoa")
D.dSZ=new C.jE("kuhowa_rings_ndoa","Hati ya Ndoa","Pete mbili \xb7 vichwa vya kidonge \xb7 hati rasmi.",D.to,4294966259,4279378237,4291404327,D.aKg)
D.a7U=new C.ye(2,"coupleCards")
D.dSU=new C.jE("kuhowa_couple_taarifa","Taarifa za Wanandoa","Picha ya mwanamume na mwanamke kila upande.",D.to,4294966259,4279378237,4291404327,D.a7U)
D.DX=new C.lb(18,"certIvoryNavyBar")
D.agj=new B.u(1,1,0.9882352941176471,0.9686274509803922,A.q)
D.hG3=w([D.agj,D.jB,A.iw],x.O)
D.aKh=new C.ye(3,"kuhoweshaForm")
D.dSS=new C.jE("kuhowa_barua","Barua ya Kuhowesha","Barua rasmi \xb7 pete \xb7 orodha ya vitu.",D.DX,4294966519,4279378237,4291404327,D.aKh)
D.ahP=new B.u(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,A.q)
D.hGn=w([D.N9,D.ahP,A.iw],x.O)
D.a7V=new C.ye(4,"mahariPande")
D.dSV=new C.jE("kuhowa_mahari_pande","Mahari ya Pande","Masharti ya mahari \xb7 pande mbili.",D.to,4294966259,4279904068,4291404327,D.a7V)
D.aKL=new C.lb(16,"certIvoryGreen")
D.bkP=new B.u(1,0.12156862745098039,0.30196078431372547,0.22745098039215686,A.q)
D.hFU=w([A.Mf,D.bkP,A.iw],x.O)
D.aKi=new C.ye(5,"familiaMti")
D.dT0=new C.jE("kuhowa_sheria_familia","Sheria za Familia","Mti wa familia \xb7 sheria za pamoja.",D.aKL,4294966776,4280241466,4291404327,D.aKi)
D.a7W=new C.ye(6,"ndoaSafi")
D.dST=new C.jE("kuhowa_ndoa_pamoja","Ndoa ya Pamoja","Safu mbili \xb7 mume na mke.",D.DX,4294966519,4279378237,4291404327,D.a7W)
D.bpN=new B.u(1,0.22745098039215686,0.16470588235294117,0.06274509803921569,A.q)
D.hFX=w([D.N9,A.iw,D.bpN],x.O)
D.a7X=new C.ye(7,"peteWide")
D.dSY=new C.jE("kuhowa_pete_pana","Pete Pana","Pete kubwa za dhahabu \xb7 nafasi wazi.",D.to,4294966259,4282001936,4291404327,D.a7X)
D.dT7=new C.ye(8,"muhuriCrest")
D.dSR=new C.jE("kuhowa_muhuri","Muhuri wa Familia","Muhuri mkubwa juu \xb7 fomu rasmi.",D.to,4294966259,4279378237,4291404327,D.dT7)
D.hG6=w([D.agj,D.ahP,A.iw],x.O)
D.dT8=new C.ye(9,"fomuWazi")
D.dT3=new C.jE("kuhowa_fomu","Fomu ya Ndoa","Fomu yenye mistari \xb7 sehemu wazi.",D.DX,4294966519,4279904068,4291404327,D.dT8)
D.aKM=new C.lb(17,"certIvoryRose")
D.blC=new B.u(1,1,0.9725490196078431,0.9607843137254902,A.q)
D.hG9=w([D.blC,D.aiQ,A.iw],x.O)
D.a7T=new C.ye(10,"upendoOrnate")
D.dT_=new C.jE("kuhowa_upendo","Upendo wa Dhahabu","Mapambo ya dhahabu \xb7 picha za wanandoa.",D.aKM,4294965493,4286200650,4291404327,D.a7T)
D.dll=w([D.dSX,D.dT4,D.dT6,D.dT5,D.dT1,D.dSZ,D.dSU,D.dSS,D.dSV,D.dT0,D.dST,D.dSY,D.dSR,D.dT3,D.dT_],x.h)
D.ep=w([2774754246,2222750968,2574743534,2373680118,234025727,3177933782,2976870366,1422247313,1345335392,50397442,2842126286,2099981142,436141799,1658312629,3870010189,2591454956,1170918031,2642575903,1086966153,2273148410,368769775,3948501426,3376891790,200339707,3970805057,1742001331,4255294047,3937382213,3214711843,4154762323,2524082916,1539358875,3266819957,486407649,2928907069,1780885068,1513502316,1094664062,49805301,1338821763,1546925160,4104496465,887481809,150073849,2473685474,1943591083,1395732834,1058346282,201589768,1388824469,1696801606,1589887901,672667696,2711000631,251987210,3046808111,151455502,907153956,2608889883,1038279391,652995533,1764173646,3451040383,2675275242,453576978,2659418909,1949051992,773462580,756751158,2993581788,3998898868,4221608027,4132590244,1295727478,1641469623,3467883389,2066295122,1055122397,1898917726,2542044179,4115878822,1758581177,0,753790401,1612718144,536673507,3367088505,3982187446,3194645204,1187761037,3653156455,1262041458,3729410708,3561770136,3898103984,1255133061,1808847035,720367557,3853167183,385612781,3309519750,3612167578,1429418854,2491778321,3477423498,284817897,100794884,2172616702,4031795360,1144798328,3131023141,3819481163,4082192802,4272137053,3225436288,2324664069,2912064063,3164445985,1211644016,83228145,3753688163,3249976951,1977277103,1663115586,806359072,452984805,250868733,1842533055,1288555905,336333848,890442534,804056259,3781124030,2727843637,3427026056,957814574,1472513171,4071073621,2189328124,1195195770,2892260552,3881655738,723065138,2507371494,2690670784,2558624025,3511635870,2145180835,1713513028,2116692564,2878378043,2206763019,3393603212,703524551,3552098411,1007948840,2044649127,3797835452,487262998,1994120109,1004593371,1446130276,1312438900,503974420,3679013266,168166924,1814307912,3831258296,1573044895,1859376061,4021070915,2791465668,2828112185,2761266481,937747667,2339994098,854058965,1137232011,1496790894,3077402074,2358086913,1691735473,3528347292,3769215305,3027004632,4199962284,133494003,636152527,2942657994,2390391540,3920539207,403179536,3585784431,2289596656,1864705354,1915629148,605822008,4054230615,3350508659,1371981463,602466507,2094914977,2624877800,555687742,3712699286,3703422305,2257292045,2240449039,2423288032,1111375484,3300242801,2858837708,3628615824,84083462,32962295,302911004,2741068226,1597322602,4183250862,3501832553,2441512471,1489093017,656219450,3114180135,954327513,335083755,3013122091,856756514,3144247762,1893325225,2307821063,2811532339,3063651117,572399164,2458355477,552200649,1238290055,4283782570,2015897680,2061492133,2408352771,4171342169,2156497161,386731290,3669999461,837215959,3326231172,3093850320,3275833730,2962856233,1999449434,286199582,3417354363,4233385128,3602627437,974525996],x.t)
D.Jo=new C.wA(0,"emojis")
D.E2=new C.wA(1,"pictures")
D.Jp=new C.wA(2,"icons3d")
D.a8e=new C.wA(3,"animations")
D.TP=new C.wA(4,"videoMotion")
D.E3=new C.wA(5,"luxe")
D.a5U=w([D.Jo,D.E2,D.Jp,D.a8e,D.TP,D.E3],B.at("O<wA>"))
D.eXg=new B.y(A.ed,"Looks")
D.eL_=new B.y(A.Db,"Light")
D.eKX=new B.y(A.mj,"Colour")
D.eIV=new B.y(A.wC,"Effects")
D.apD=new B.a0(63112,"MaterialIcons",!1)
D.eFp=new B.y(D.apD,"Crop")
D.dlS=w([D.eXg,D.eL_,D.eKX,D.eIV,D.eFp],x.f2)
D.dmA=w([],x.D)
D.hGk=w([],x.L)
D.eJ8=new B.y("Flashcard",D.Jj)
D.eN2=new B.y("Quiz",D.Jk)
D.eP4=new B.y("Worksheet",D.Jl)
D.eM2=new B.y("Notes",D.n8)
D.eNB=new B.y("Section",D.E0)
D.dnj=w([D.eJ8,D.eN2,D.eP4,D.eM2,D.eNB],B.at("O<+(n,mV)>"))
D.dUU=new C.lb(6,"beadedPearl")
D.box=new B.u(1,0.47843137254901963,0.3607843137254902,0.1803921568627451,A.q)
D.hGo=w([H.ZN,D.box,A.iw],x.O)
D.aKe=new C.jE("malipo_beaded_pearl","Malipo \u2014 Lulu","Mpaka wa shanga za lulu kuzunguka pembeni \xb7 dhahabu na shaba.",D.dUU,4294966774,4286209070,4291404327,D.kc)
D.dUV=new C.lb(7,"artDeco")
D.bsZ=new B.u(1,0.9686274509803922,0.9607843137254902,0.9490196078431372,A.q)
D.bw6=new B.u(1,0.12156862745098039,0.10588235294117647,0.08627450980392157,A.q)
D.hGm=w([D.bsZ,D.bw6,A.c4],x.O)
D.aKf=new C.jE("malipo_art_deco","Malipo \u2014 Art Deco","Pembe za ngazi za kisasa \xb7 mng'ao wa dhahabu juu.",D.dUV,4294440434,4280228630,4290283019,D.kc)
D.dUW=new C.lb(8,"rosetteCorners")
D.bvd=new B.u(1,0.984313725490196,0.9647058823529412,0.9372549019607843,A.q)
D.bji=new B.u(1,0.4196078431372549,0.24705882352941178,0.16470588235294117,A.q)
D.bop=new B.u(1,0.788235294117647,0.4823529411764706,0.23921568627450981,A.q)
D.hG_=w([D.bvd,D.bji,D.bop],x.O)
D.aKd=new C.jE("malipo_rosette","Malipo \u2014 Duara","Medali ya duara kila pembe \xb7 shaba na mahogany.",D.dUW,4294702831,4285218602,4291394365,D.kc)
D.dUX=new C.lb(9,"modernLedger")
D.hFZ=w([A.c,D.jB,D.jB],x.O)
D.aKc=new C.jE("malipo_modern_ledger","Malipo \u2014 Kisasa","Ukanda thabiti wa bluu upande wa kushoto \xb7 mstari mwembamba.",D.dUX,4294967295,4279378237,4279378237,D.kc)
D.dnn=w([D.aKe,D.aKf,D.aKd,D.aKc],x.h)
D.dnx=w([A.iv,A.pg],x.O)
D.ct=new C.hF(0,"none")
D.ds=new C.hF(1,"fade")
D.Jm=new C.hF(3,"slideRight")
D.aL7=new C.hF(5,"slideDown")
D.eey=new C.hF(7,"zoomOut")
D.a8d=new C.hF(11,"cube")
D.eet=new C.hF(12,"blur")
D.aL4=new C.hF(13,"dissolve")
D.eeu=new C.hF(14,"wipeLeft")
D.eev=new C.hF(15,"wipeRight")
D.TO=new C.hF(17,"push")
D.eew=new C.hF(18,"flash")
D.aL6=new C.hF(20,"swing")
D.eex=new C.hF(21,"curtain")
D.Sq=w([D.ct,D.ds,D.vl,D.Jm,D.vm,D.aL7,D.n9,D.eey,D.Jn,D.aL8,D.TN,D.a8d,D.eet,D.aL4,D.eeu,D.eev,D.r1,D.TO,D.eew,D.aL5,D.aL6,D.eex],x.i)
D.Sr=w([D.a7S,D.a7Q,D.a7J,D.a7K,D.a7L,D.a7O,D.a7M,D.a7N,D.a7R,D.a7P,D.aKe,D.aKf,D.aKd,D.aKc],x.h)
D.do_=w([y.L,"Mbuzi Mbili","Ngyoka","Mmoko"],x.s)
D.do3=w([A.ud,A.ia,A.c4],x.O)
D.eKg=new B.y(A.uO,"Design")
D.eYS=new B.y(D.apT,"Word sizes")
D.eUd=new B.y(A.D7,"Text")
D.bS8=new B.a0(983182,"MaterialIcons",!1)
D.eUi=new B.y(D.bS8,"Photo")
D.eEY=new B.y(A.lm,"Logo")
D.f_a=new B.y(A.HU,"News")
D.do9=w([D.eKg,D.eYS,D.eUd,D.eUi,D.eEY,D.f_a],x.f2)
D.doa=w(["golddust","sparkle","sheen"],x.s)
D.efV=new C.ew("upload_pdf",K.PG,"Upload PDF")
D.ef4=new C.ew("sign_paper",A.HR,"Sign Paper")
D.bRo=new B.a0(63438,"MaterialIcons",!1)
D.efR=new C.ew("hd_photo",D.bRo,"HD Photo")
D.eeX=new C.ew("sharpen",E.a2A,"Sharpen")
D.ef6=new C.ew("print",K.PG,"Download PDF")
D.efy=new C.ew("rotate",D.apD,"Rotate")
D.eff=new C.ew("text_box",A.D7,"Text Box")
D.efh=new C.ew("picture",A.uS,"Picture")
D.efd=new C.ew("title",A.wP,"Title")
D.ef9=new C.ew("subtitle",U.aqt,"Subtitle")
D.efH=new C.ew("bullets",I.a2T,"Bullet List")
D.efa=new C.ew("numbered",A.Pt,"Numbered")
D.efK=new C.ew("quote",A5.CU,"Quote")
D.efm=new C.ew("citation",A.oy,"Citation")
D.efN=new C.ew("date_stamp",Aj.a2D,"Date Stamp")
D.efA=new C.ew("page_number",A.wO,"Page #")
D.efE=new C.ew("header_bar",A.zu,"Header")
D.efg=new C.ew("footer_bar",Au.a3r,"Footer")
D.ef5=new C.ew("divider",A.t6,"Divider")
D.ef1=new C.ew("highlight",A.a2W,"Highlight")
D.efG=new C.ew("redact",A.v2,"Redact")
D.eft=new C.ew("callout",A.CM,"Callout")
D.efP=new C.ew("checkboxes",I.aoX,"Checklist")
D.efq=new C.ew("table",A.a3p,"Table")
D.efk=new C.ew("memo",I.a38,"Memo")
D.efu=new C.ew("letter",A.HG,"Letter")
D.bR1=new B.a0(63259,"MaterialIcons",!0)
D.eeW=new C.ew("agenda",D.bR1,"Agenda")
D.ef7=new C.ew("toc",AD.aq5,"Contents")
D.bRk=new B.a0(63406,"MaterialIcons",!1)
D.efr=new C.ew("sig_line",D.bRk,"Sign Line")
D.eeP=new C.ew("initial_line",A.j7,"Initials")
D.eeS=new C.ew("approved",A.lm,"APPROVED")
D.efw=new C.ew("draft",A.pC,"DRAFT")
D.efC=new C.ew("confidential",A.jI,"Confidential")
D.efF=new C.ew("sticky",A.PM,"Sticky Note")
D.efO=new C.ew("progress",A.aq4,"Progress")
D.bSy=new B.a0(983507,"MaterialIcons",!1)
D.ef2=new C.ew("stars",D.bSy,"Star Rating")
D.eeN=new C.ew("equation",A.apV,"Equation")
D.eeY=new C.ew("timeline",A.a3q,"Timeline")
D.efl=new C.ew("two_col",A.a3s,"Two Columns")
D.ef_=new C.ew("compare",Az.a2H,"Compare")
D.eeL=new C.ew("duplicate_el",A.fM,"Duplicate")
D.efT=new C.ew("delete_el",A.ej,"Delete")
D.efJ=new C.ew("bring_fwd",H.apP,"Bring Front")
D.eeQ=new C.ew("send_back",H.apO,"Send Back")
D.efv=new C.ew("align_left",D.a2R,"Align L")
D.efB=new C.ew("align_center",D.a2Q,"Align C")
D.efS=new C.ew("align_right",D.a2S,"Align R")
D.efe=new C.ew("word_count",Y.a2e,"Word Count")
D.efb=new C.ew("link_text",A.hQ,"Link")
D.efz=new C.ew("phone",A.iS,"Phone")
D.ef0=new C.ew("email",A.CR,"Email")
D.efU=new C.ew("qr_placeholder",A.jK,"QR Placeholder")
D.eeV=new C.ew("rectangle",A6.t4,"Rectangle")
D.efp=new C.ew("circle",A.ps,"Circle")
D.eeR=new C.ew("arrow",A.jH,"Arrow")
D.efI=new C.ew("line",A.t6,"Line")
D.ef3=new C.ew("triangle",A.a2F,"Triangle")
D.bR8=new B.a0(63318,"MaterialIcons",!1)
D.ef8=new C.ew("grayscale",D.bR8,"Grayscale")
D.efi=new C.ew("brighten",I.apg,"Brighten")
D.efn=new C.ew("flip_h",A.CT,"Flip H")
D.bRf=new B.a0(63348,"MaterialIcons",!1)
D.efQ=new C.ew("flip_v",D.bRf,"Flip V")
D.efD=new C.ew("cover_page",A.qK,"Cover Page")
D.eeO=new C.ew("invoice",A.hj,"Invoice")
D.eeZ=new C.ew("resume",A.mh,"Resume")
D.efc=new C.ew("minutes",A.pu,"Minutes")
D.eeT=new C.ew("lab_report",A.PI,"Lab Report")
D.eeU=new C.ew("rubric",A.qN,"Rubric")
D.efo=new C.ew("flashcard_tool",W.HO,"Flashcard")
D.efL=new C.ew("quiz_tool",A.HL,"Quiz Block")
D.efs=new C.ew("worksheet_tool",O.Hm,"Worksheet")
D.efx=new C.ew("outline_share",A.PK,"Share Outline")
D.efM=new C.ew("export_json",D.ap2,"Export JSON")
D.eeM=new C.ew("new_slide",D.a2d,"New Slide")
D.efj=new C.ew("present",A.qP,"Present")
D.doH=w([D.efV,D.ef4,D.efR,D.eeX,D.ef6,D.efy,D.eff,D.efh,D.efd,D.ef9,D.efH,D.efa,D.efK,D.efm,D.efN,D.efA,D.efE,D.efg,D.ef5,D.ef1,D.efG,D.eft,D.efP,D.efq,D.efk,D.efu,D.eeW,D.ef7,D.efr,D.eeP,D.eeS,D.efw,D.efC,D.efF,D.efO,D.ef2,D.eeN,D.eeY,D.efl,D.ef_,D.eeL,D.efT,D.efJ,D.eeQ,D.efv,D.efB,D.efS,D.efe,D.efb,D.efz,D.ef0,D.efU,D.eeV,D.efp,D.eeR,D.efI,D.ef3,D.ef8,D.efi,D.efn,D.efQ,D.efD,D.eeO,D.eeZ,D.efc,D.eeT,D.eeU,D.efo,D.efL,D.efs,D.efx,D.efM,D.eeM,D.efj],B.at("O<ew>"))
D.doR=w([A.cx,A.an],x.O)
D.eEu=new B.y(4286331629,4292552567)
D.eEh=new B.y(4280640491,4278630100)
D.eEC=new B.y(4294538006,4292943176)
D.eDE=new B.y(4278556265,4280640491)
D.diy=w([D.eEu,D.eEh,D.eEC,D.eDE],x.n)
D.cFx=w([4294626325,4280472558,4294210230],x.t)
D.eeG=new C.oa("colorful","Colorful",A.mj,D.diy,4294967295,3875536895,D.cFx,D.n9)
D.eE5=new B.y(4279522093,4279657780)
D.eEl=new B.y(4281750292,4283268111)
D.eDH=new B.y(4278603323,4279203438)
D.eEm=new B.y(4282343954,4279599165)
D.cQH=w([D.eE5,D.eEl,D.eDH,D.eEm],x.n)
D.cFf=w([4288931381,4294829706,4287033260],x.t)
D.eeC=new C.oa("nature","Nature",A.HS,D.cQH,4294442727,3874290891,D.cFf,D.ds)
D.eE_=new B.y(4279369771,4283178389)
D.eDX=new B.y(4279179050,4286456526)
D.eEd=new B.y(4280163147,4290648157)
D.eDw=new B.y(4278322711,4285343961)
D.d8c=w([D.eE_,D.eDX,D.eEd,D.eDw],x.n)
D.cFt=w([4294210230,4280472558,4289170426],x.t)
D.eeA=new C.oa("vibe","Vibe",A.Px,D.d8c,4294967295,3874869502,D.cFt,D.vl)
D.eEy=new B.y(4290007817,4292552567)
D.eEs=new B.y(4286328082,4294286859)
D.eEx=new B.y(4288485197,4294538006)
D.eEr=new B.y(4285343961,4293675161)
D.cbh=w([D.eEy,D.eEs,D.eEx,D.eEr],x.n)
D.cFy=w([4294829706,4294967295,4284999929],x.t)
D.eeB=new C.oa("celebration","Celebration",A.k7,D.cbh,4294967295,4009752557,D.cFy,D.r1)
D.eDV=new B.y(4279179050,4280171146)
D.eDZ=new B.y(4279310375,4280232247)
D.eDN=new B.y(4278916151,4280172719)
D.eDW=new B.y(4279179050,4281549141)
D.d0p=w([D.eDV,D.eDZ,D.eDN,D.eDW],x.n)
D.cFa=w([4281908728,4294626325,4287931320],x.t)
D.eeF=new C.oa("professional","Professional",A.zd,D.d0p,4294967295,3872118241,D.cFa,D.TO)
D.eDR=new B.y(4278995566,4278413729)
D.eDJ=new B.y(4278727492,4279137424)
D.eEe=new B.y(4280171146,4278751666)
D.eDS=new B.y(4278995566,4279590517)
D.cJo=w([D.eDR,D.eDJ,D.eEe,D.eDS],x.n)
D.cFd=w([4286436348,4284410580,4294829706],x.t)
D.eeH=new C.oa("ocean","Ocean",I.a3u,D.cJo,4294967295,3873501950,D.cFd,D.vm)
D.eEt=new B.y(4286328082,4294538006)
D.eEv=new B.y(4286781507,4294677052)
D.eEp=new B.y(4283178389,4294197086)
D.eEw=new B.y(4288295954,4294688548)
D.cXB=w([D.eEt,D.eEv,D.eEp,D.eEw],x.n)
D.cFz=w([4294829706,4294967295,4294747557],x.t)
D.eeI=new C.oa("sunset","Sunset",A.PP,D.cXB,4294967295,4009749973,D.cFz,D.ds)
D.eEG=new B.y(4294967295,4294047225)
D.eEB=new B.y(4294507260,4294967295)
D.eEF=new B.y(4294967295,4293060848)
D.eEA=new B.y(4294507260,4294047225)
D.dbz=w([D.eEG,D.eEB,D.eEF,D.eEA],x.n)
D.cF8=w([4280640491,4279179050,4287931320],x.t)
D.eeE=new C.oa("minimal","Minimal",A6.t4,D.dbz,4279179050,4282865001,D.cF8,D.ds)
D.eDQ=new B.y(4278979081,4280886564)
D.eE9=new B.y(4280031511,4278979081)
D.eDY=new B.y(4279308561,4281148438)
D.eDP=new B.y(4278979081,4280031511)
D.dqT=w([D.eDQ,D.eE9,D.eDY,D.eDP],x.n)
D.cFm=w([4292128567,4294829706,4289241758],x.t)
D.eeJ=new C.oa("elegant","Elegant",A.ml,D.dqT,4294898631,3873957348,D.cFm,D.aL4)
D.eEb=new B.y(4280159034,4282058596)
D.eDM=new B.y(4278916151,4280163147)
D.eEj=new B.y(4281208933,4278916151)
D.eE2=new B.y(4279502891,4283178389)
D.dyv=w([D.eEb,D.eDM,D.eEj,D.eE2],x.n)
D.cFv=w([4294296657,4292128567,4291081725],x.t)
D.eeD=new C.oa("royal","Royal Gold",A.j8,D.dyv,4294965222,3874084351,D.cFv,D.n9)
D.eDB=new B.y(4278464302,4280163147)
D.eDL=new B.y(4278916151,4279455306)
D.eEc=new B.y(4280163147,4283040846)
D.eDy=new B.y(4278332450,4281413249)
D.di9=w([D.eDB,D.eDL,D.eEc,D.eDy],x.n)
D.cF9=w([4281193663,4289170426,4294210230],x.t)
D.eeK=new C.oa("aurora","Aurora Glow",A.ed,D.di9,4293983738,3869766608,D.cF9,D.ds)
D.x_=w([D.eeG,D.eeC,D.eeA,D.eeB,D.eeF,D.eeH,D.eeI,D.eeE,D.eeJ,D.eeD,D.eeK],B.at("O<oa>"))
D.bp7=new B.u(0.13333333333333333,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.q)
D.dpr=w([A.rz,D.bp7,A.rz],x.O)
D.dpJ=w([4279179050,4281549141,4280640491,4278556265,4292617766,4286331629,4293548044,4278751666,4294967295,4294688548],x.t)
D.dpN=w([null,4294967295,4279310375,4294626325,4280472558,4294210230,4283096704,4293870660,4282090230,4294677052],x.Z)
D.eU5=new B.y("The NGMY app","Write the front-page story about the NGMY app and everything it offers.")
D.eJR=new B.y("KB PABLO QR, our CEO","Write a respectful story about KB PABLO QR, Founder, President and CEO of NGMY, and what he built.")
D.eOD=new B.y("Civic Registry","Write about the Civic Registry: why it was built, receipts, registrars and trust in the community.")
D.eB0=new B.y("NGMY Advisors","Write about the NGMY Advisors, the AI advisors who help members.")
D.eNe=new B.y("Growth Income","Write about Growth Income, the wallet and how members earn on work days.")
D.eLm=new B.y("Core Protocol studios","Write about the Core Protocol studios, the Body Explorer and the learning labs.")
D.ePW=new B.y("Surprise me","")
D.dql=w([D.eU5,D.eJR,D.eOD,D.eB0,D.eNe,D.eLm,D.ePW],x.L)
D.bh7=new B.u(1,0.9450980392156862,0.9294117647058824,0.8941176470588236,A.q)
D.bty=new B.u(1,0.796078431372549,0.7647058823529411,0.7019607843137254,A.q)
D.dr8=w([A.c,D.bh7,D.bty],x.O)
D.dtq=w([1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0],x.x)
D.aKE=new C.lb(0,"heritageGold")
D.bnr=new B.u(1,0.9764705882352941,0.9450980392156862,0.8666666666666667,A.q)
D.hGp=w([D.bnr,A1.ai1,A.aC],x.O)
D.dT2=new C.jE("kuhowa_heritage_gold","Kuhowa \u2014 Hazina ya Dhahabu","Mpaka mzito wa kikabila \xb7 dhahabu na hudhurungi.",D.aKE,4294570461,4284234270,4292128567,D.kc)
D.aKF=new C.lb(1,"heritageCrimson")
D.bfi=new B.u(1,0.9803921568627451,0.9411764705882353,0.9019607843137255,A.q)
D.blz=new B.u(1,0.4196078431372549,0.16470588235294117,0.11764705882352941,A.q)
D.btj=new B.u(1,0.8784313725490196,0.6431372549019608,0.34509803921568627,A.q)
D.hG2=w([D.bfi,D.blz,D.btj],x.O)
D.dSW=new C.jE("kuhowa_heritage_crimson","Kuhowa \u2014 Hazina Nyekundu","Mpaka mzito wa kikabila \xb7 nyekundu na dhahabu.",D.aKF,4294635750,4285213214,4292912216,D.kc)
D.dtv=w([D.a7S,D.a7Q,D.dT2,D.dSW,D.a7L,D.a7O],x.h)
D.dZ_=new C.rZ(1,"circuit")
D.dZs=new C.mu("neural","Neural Link","Robotic",D.dZ_,4278322711,4279179050,4280472558,4284704497,4292932350,"One link at a time, NGMY connects young people everywhere.")
D.dYZ=new C.rZ(0,"grid")
D.dZp=new C.mu("signal","Signal Grid","Robotic",D.dYZ,4280163147,4278322711,4289222135,4293675161,4294308863,"A strong signal starts with one voice. Make yours heard.")
D.dZ4=new C.rZ(2,"hexes")
D.dZa=new C.mu("core","Core Protocol","Robotic",D.dZ4,4278464302,4278322711,4281193663,4281908728,4291623921,"Our core is simple: help each other grow.")
D.aL1=new C.rZ(11,"diagonal")
D.dZl=new C.mu("steel","Steel Tech","Robotic",D.aL1,4281549141,4279179050,4287931320,4281908728,4294047225,"Build with your hands, lead with your heart.")
D.aL2=new C.rZ(3,"rings")
D.dZ9=new C.mu("vault","Vault Gold","Robotic",D.aL2,4280031511,4278190080,4294626325,4294286859,4294898631,"What you build together is worth more than gold.")
D.dZ2=new C.rZ(13,"leaves")
D.dZc=new C.mu("forest","Forest Morning","Nature",D.dZ2,4279522093,4278529558,4283096704,4288931381,4293983732,"Like a forest, a community grows strongest together.")
D.aL3=new C.rZ(5,"waves")
D.dZj=new C.mu("ocean","Ocean Calm","Nature",D.aL3,4278413729,4278995566,4281908728,4284999929,4293982719,"Small waves become a movement. Keep going.")
D.dZ5=new C.rZ(6,"sunset")
D.dZo=new C.mu("sunset","Sunset Glow","Nature",D.dZ5,4294538006,4290648157,4294829706,4294668677,4294967295,"Every sunset is a promise that tomorrow can be better.")
D.dZ6=new C.rZ(7,"mountains")
D.dZb=new C.mu("mountain","Mountain Air","Nature",D.dZ6,4282595530,4280171146,4291285758,4286680312,4293849855,"Climb together. The view is better with friends.")
D.dZ7=new C.rZ(8,"stars")
D.dZi=new C.mu("night","Night Sky","Nature",D.dZ7,4280163147,4278190080,4294829706,4291081725,4294308863,"Dream big. NGMY is built by people who looked up.")
D.a8b=new C.rZ(4,"orbs")
D.dZg=new C.mu("aurora","Aurora","Nature",D.a8b,4278603323,4283178389,4281652121,4289170426,4294967295,"Light shows up when people choose to shine together.")
D.dZq=new C.mu("sand","Sand Dune","Nature",D.aL3,4294829706,4292441862,4290007817,4294966251,4282718723,"Patience builds a legacy, one grain at a time.")
D.dZ8=new C.rZ(9,"rays")
D.dZf=new C.mu("golden","Golden Hour","Warm",D.dZ8,4294286859,4290321436,4294897802,4294967295,4294967295,"Your hour is now. Start where you are.")
D.dZd=new C.mu("royal","Royal Purple","Warm",D.aL1,4286456526,4290648157,4293962748,4294829706,4294967295,"Lead with respect, and people will follow with joy.")
D.dZe=new C.mu("rose","Rose Petal","Warm",D.a8b,4294668677,4292943176,4294960358,4294812847,4294967295,"Kindness is the strongest thing a community can grow.")
D.dZ1=new C.rZ(12,"blocks")
D.dZh=new C.mu("electric","Electric Blue","Bold",D.dZ1,4280640491,4278751666,4290438909,4294967295,4294967295,"Energy is contagious. Bring yours to NGMY.")
D.dZr=new C.mu("mint","Fresh Mint","Bold",D.a8b,4281652121,4278630100,4294967295,4289197008,4278603323,"Fresh ideas grow when young people lead.")
D.dZ3=new C.rZ(14,"minimal")
D.dZn=new C.mu("white","Clean White","Clean",D.dZ3,4294967295,4294047225,4280640491,4287931320,4279179050,"Simple words, strong purpose. That is NGMY.")
D.dZ0=new C.rZ(10,"frame")
D.dZk=new C.mu("midnight","Midnight Gold","Clean",D.dZ0,4279179050,4278322711,4294626325,4294829706,4294966251,"Quiet work in the dark makes the morning shine.")
D.dZm=new C.mu("community","Community Green","Clean",D.aL2,4278556265,4280640491,4289197008,4290763774,4294967295,"The New Global Movement for Youth starts with you.")
D.a6o=w([D.dZs,D.dZp,D.dZa,D.dZl,D.dZ9,D.dZc,D.dZj,D.dZo,D.dZb,D.dZi,D.dZg,D.dZq,D.dZf,D.dZd,D.dZe,D.dZh,D.dZr,D.dZn,D.dZk,D.dZm],B.at("O<mu>"))
D.dtU=w([D.BY,A.ua,A.ia,A.c4],x.O)
D.duc=w([D.aj2,D.jB],x.O)
D.dum=w(["pdf","docx","txt","md"],x.s)
D.f3p=new B.b5(-3,150,34)
D.f3q=new B.b5(-3,214,62)
D.f3r=new B.b5(-3,288,62)
D.dve=w([D.f3p,D.f3q,D.f3r],B.at("O<+(F,F,F)>"))
D.dvL=w(["rays","bokeh","aurora","spotlight"],x.s)
D.dwv=w(["Write","Design","Print & fold"],x.s)
D.kd=new C.vj(2,"triangle")
D.E1=new C.vj(3,"arrow")
D.fO=new C.vj(4,"line")
D.ke=new C.vj(5,"parallelogram")
D.dwy=w([D.bm,D.f1,D.kd,D.E1,D.fO,D.ke,D.lt],x.m)
D.eCv=new B.y(240,96)
D.eFh=new B.y(560,46)
D.dwE=w([D.eCv,D.eFh],x.G)
D.hGA=new C.yh(0,"classic")
D.dV_=new C.o7("heritage_gold","Urithi wa Dhahabu","Mpaka wa kitamaduni \xb7 rangi ya dhahabu na kahawia.",D.aKE,4294570461,4282000405,4284234270)
D.dVb=new C.o7("heritage_crimson","Urithi wa Nyekundu","Mpaka wa kitamaduni \xb7 rangi ya nyekundu na shaba.",D.aKF,4294635750,4281999378,4285213214)
D.dV0=new C.o7("elegant_navy","Umoja Mzuri",y.s,D.a82,4294967035,4279378237,4290283019)
D.dVd=new C.o7("elegant_gold","Umoja wa Dhahabu",y.Q,D.aKN,4294966515,4281016592,4289102906)
D.dVf=new C.o7("kente_sunset","Kente ya Jua",y.H,D.aKG,4294964964,4282000405,4279983648)
D.dUY=new C.o7("indigo_mudcloth","Nguo ya Indigo",y.n,D.aKH,4294439140,4279903102,4279903102)
D.dV2=new C.o7("adinkra_royal","Muhuri wa Adinkra",y.z,D.aKI,4294965484,4285218591,4287322667)
D.dV7=new C.o7("nile_lotus","Lotus ya Nile","Nguzo za papyrus na ua la lotus juu.",D.aKJ,4294244340,4279196764,4279196764)
D.dV9=new C.o7("shweshwe_ivory","Shweshwe","Nguo ya shweshwe \xb7 kadi ya pembe ndani.",D.aKK,4294505710,4279970378,4291058750)
D.hGB=new C.yh(1,"ringsNdoa")
D.dV1=new C.o7("rings_ndoa","Hati ya Ndoa","Pete mbili \xb7 vichwa vya kidonge \xb7 hati rasmi ya ndoa.",D.to,4294966259,4279378237,4291404327)
D.hGD=new C.yh(2,"coupleCards")
D.dVc=new C.o7("couple_taarifa","Taarifa za Wanandoa","Picha ya mwanamume na mwanamke \xb7 kadi mbili za taarifa.",D.to,4294966259,4279378237,4291404327)
D.hGE=new C.yh(3,"kuhoweshaForm")
D.dV8=new C.o7("barua_kuhowesha","Barua ya Kuhowesha","Barua rasmi \xb7 orodha ya NIMETOWEA \xb7 mashahidi.",D.DX,4294966519,4279378237,4291404327)
D.hGF=new C.yh(4,"mahariPande")
D.dUZ=new C.o7("mahari_pande","Mahari ya Pande","Masharti ya mahari \xb7 pande mbili za sahihi.",D.to,4294966259,4279904068,4291404327)
D.hGG=new C.yh(5,"familiaMti")
D.dVe=new C.o7("sheria_familia","Sheria za Familia","Mti wa familia \xb7 sheria za pamoja \xb7 kijani.",D.aKL,4294966776,4280241466,4291404327)
D.hGH=new C.yh(6,"ndoaSafi")
D.dV5=new C.o7("ndoa_safi","Ndoa ya Pamoja","Safu mbili \xb7 mume na mke \xb7 masharti ya ndoa.",D.DX,4294966519,4279378237,4291404327)
D.hGI=new C.yh(7,"peteWide")
D.dV4=new C.o7("pete_pana","Pete Pana","Pete kubwa za dhahabu \xb7 nafasi wazi \xb7 hati ya heshima.",D.to,4294966259,4282001936,4291404327)
D.hGJ=new C.yh(8,"muhuriCrest")
D.dV3=new C.o7("muhuri_familia","Muhuri wa Familia","Muhuri mkubwa juu \xb7 fomu rasmi ya familia.",D.to,4294966259,4279378237,4291404327)
D.hGK=new C.yh(9,"fomuWazi")
D.dV6=new C.o7("fomu_wazi","Fomu ya Ndoa","Fomu yenye mistari \xb7 namba \xb7 sehemu wazi za kujaza.",D.DX,4294966519,4279904068,4291404327)
D.hGC=new C.yh(10,"upendoOrnate")
D.dVa=new C.o7("upendo_dhahabu","Upendo wa Dhahabu","Mapambo ya dhahabu \xb7 picha za wanandoa \xb7 rangi ya waridi.",D.aKM,4294965493,4286200650,4291404327)
D.SH=w([D.dV_,D.dVb,D.dV0,D.dVd,D.dVf,D.dUY,D.dV2,D.dV7,D.dV9,D.dV1,D.dVc,D.dV8,D.dUZ,D.dVe,D.dV5,D.dV4,D.dV3,D.dV6,D.dVa],B.at("O<o7>"))
D.E_=new C.asX(0,"landscape169")
D.oQ=new C.asX(1,"portrait916")
D.dxp=w([D.E_,D.oQ],B.at("O<asX>"))
D.aDn=w([A.ia,A.bL,A.cI,A.iv,A.c],x.O)
D.ve=w([A.c4,A.ic],x.O)
D.eBv=new B.y(1000,"M")
D.eGL=new B.y(900,"CM")
D.eFb=new B.y(500,"D")
D.eDr=new B.y(400,"CD")
D.eBw=new B.y(100,"C")
D.eGM=new B.y(90,"XC")
D.eFc=new B.y(50,"L")
D.eDs=new B.y(40,"XL")
D.eBC=new B.y(10,"X")
D.eGY=new B.y(9,"IX")
D.eFt=new B.y(5,"V")
D.eEX=new B.y(4,"IV")
D.eC8=new B.y(1,"I")
D.dya=w([D.eBv,D.eGL,D.eFb,D.eDr,D.eBw,D.eGM,D.eFc,D.eDs,D.eBC,D.eGY,D.eFt,D.eEX,D.eC8],x.ek)
D.f4I=new B.cu(["open",A.j7,"Open & write","Keep writing this book"])
D.f58=new B.cu(["print",A.uX,"Print as a book","Fold and staple it"])
D.dyl=w([D.f4I,D.f58],B.at("O<+(n,a0,n,n)>"))
D.dz4=w([D.a8d,D.n9,D.Jn,D.TO,D.ds,D.TN],x.i)
D.eUQ=new B.y(-1,"Small")
D.eBg=new B.y(0,"Normal")
D.eC5=new B.y(1,"Big")
D.eCM=new B.y(2,"Huge")
D.dzE=w([D.eUQ,D.eBg,D.eC5,D.eCM],x.ek)
D.dA4=w([49,65,89,38,83,89],x.t)
D.dAa=w([A.ua,A.ia,A.c4],x.O)
D.dAE=w([D.ds,D.n9,D.vl,D.a8d,D.Jn,D.TO],x.i)
D.aIG=new B.d_([0,D.Nv,8,D.akz,12,D.akA],B.at("d_<H,a51>"))
D.ekL={gold:0,platinum:1,glow:2,rainbow:3,double:4,neon:5,framed:6,rosegold:7,jewels:8,aurora:9}
D.d0A=w([A.bL,H.ajE],x.O)
D.dn2=w([A.aZ,A.bn],x.O)
D.dhd=w([A.bT,A.aG,A.bk],x.O)
D.dym=w([A.cx,A.bw],x.O)
D.d9b=w([A.b9,A.fe],x.O)
D.dk9=w([A.b8,A.fo],x.O)
D.blb=new B.u(1,0.9529411764705882,0.7764705882352941,0.7098039215686275,A.q)
D.djq=w([D.blb,A.pg],x.O)
D.ddn=w([A.hr,A.yd],x.O)
D.d8Z=w([A.bx,A.ch],x.O)
D.dDk=new B.bu(D.ekL,[D.d0A,Q.att,D.dn2,D.dhd,D.dym,D.d9b,D.dk9,D.djq,D.ddn,D.d8Z],B.at("bu<n,ai<u>>"))
D.ejT={"[Jina la Baba wa Mume]":0,"[Jina la Jamii ya Mume]":1,"[Jina la Nyumba ya Mume]":2,"[Jina la Kijana]":3,"[Jina la Binti]":4,"[Jina la Baba wa Binti]":5,"[Jina la Jamii ya Binti]":6,"[Jina la Nyumba ya Binti]":7}
D.a72=new B.bu(D.ejT,["[Jina la Baba wa Mume]","[Jina la Jamii ya Mume]","[Jina la Nyumba ya Mume]","[Jina la Kijana]","[Jina la Binti]","[Jina la Baba wa Binti]","[Jina la Jamii ya Binti]","[Jina la Nyumba ya Binti]"],B.at("bu<n,n>"))
D.a79=new B.bu(A.i5,[],B.at("bu<H,+icon3d,picture(n?,n?)>"))
D.dHQ=new F.NT(30,null)
D.dN4=new F.mS("Chapter 1","","","")
D.dxc=w([D.dN4],x.B)
D.dN8=new F.rP("My Book","","",D.dxc,E.aK4)
D.dN6=new F.v8("starry",null,null,null,null,"","","")
D.dN9=new F.rP("Dream Big","","",E.a61,D.dN6)
D.dN7=new F.v8("story",null,null,null,null,"","","")
D.dNa=new F.rP("Little Lion","","",E.a61,D.dN7)
D.dN5=new F.v8("vintage",null,null,null,null,"","","")
D.dNb=new F.rP("Our Story","","",E.a61,D.dN5)
D.dQd=new C.Fo("","NGMY","","")
D.dXD=new C.Ae("The NGMY Times","NGMY NEWS","","","By the NGMY Newsroom","",A.Z,"","","")
D.eez=new C.b3y(null,null,null,null)
D.egh=new C.at1(null)
D.egs=new C.atv(0,"smaller")
D.egt=new C.atv(1,"bigger")
D.aLi=new C.atv(2,"fit")
D.eol=new B.o(3,6)
D.eoF=new B.o(4,8)
D.esQ=new B.D(E.alr,U.afA,null)
D.esU=new B.D(A.a09,A.m2,null)
D.bTR=new B.ae(A.k8,16,A.bW,null,null,null)
D.esY=new B.D(A.iP,D.bTR,null)
D.beH=new B.fj(2.2,null,null,null,null,A.c,null,null,null,null)
D.et9=new B.D(A.H_,D.beH,null)
D.c3v=new B.ae(A.cB,16,A.aD,null,null,null)
D.etd=new B.D(A.eA,D.c3v,null)
D.fNX=new B.B("Play",null,A.o_,null,null,null,null,null,null,null,null,null)
D.dnk=w([V.arX,A.vB,D.fNX],x.p)
D.f9N=new B.c8(A.aL,A.e,A.P,A.l,null,A.p,null,0,D.dnk,null)
D.etg=new B.D(A.nG,D.f9N,null)
D.beQ=new B.fj(2.4,null,null,null,null,null,null,null,null,null)
D.fge=new B.a5(20,20,D.beQ,null)
D.etn=new B.D(A.iP,D.fge,null)
D.fXq=new B.B("Seconds per slide",null,A.h1,null,null,null,null,null,null,null,null,null)
D.etx=new B.D(A.bh,D.fXq,null)
D.euS=new C.a9Z(2,"print")
D.euV=new B.j2(1,0.7764705882352941,0.1568627450980392,0.1568627450980392)
D.ewx=new B.hf("/Annot")
D.ewz=new B.hf("/URI")
D.fHY=new B.B("Share text outline",null,null,null,null,null,null,null,null,null,null,null)
D.ez3=new B.jG("share",48,D.fHY,null,B.at("jG<n>"))
D.c3p=new B.ae(A.ed,14,A.eK,null,null,null)
D.ezc=new B.cK(null,-2,-2,null,null,null,D.c3p,null)
D.d2S=w([A.Zp,A.L],x.O)
D.ca1=new B.a8(A.a7,A.aa,A.x,D.d2S,null,null)
D.b77=new B.p(null,null,null,null,null,D.ca1,A.n)
D.byA=new B.bN(D.b77,A.bj,null,null)
D.ezp=new B.cK(0,0,null,0,8,null,D.byA,null)
D.dsm=w([A.hG,A.mP,A.c6],x.O)
D.eA4=new B.bY(A.A,0.5,A.x,null,0,D.dsm,null,null)
D.eCE=new B.y(0.22,A.bn)
D.eHh=new B.y("ai","Your newspaper is ready. Tell me anything you want changed, or ask me a question about NGMY.")
D.eJv=new B.y(0.5,A.hF)
D.eTb=new B.y(0.78,A.aV)
D.f4x=new B.cu([A.bg,0.22,0.7,2.6])
D.f4E=new B.cu([A.b9,0.36,1.2,1.3])
D.f4K=new B.cu([A.dO,0.28,0.2,0.4])
D.f4Q=new B.cu([A.cD,0.05,0.3,0.35])
D.f4W=new B.cu([A.bx,0.28,0.9,0])
D.f53=new B.cu([A.aE,-0.25,-0.15,0.45])
D.f5V=new B.cu([A.bT,0.42,1,4.1])
D.f9v=new B.aaY(9)
D.bUY=new B.ae(A.HU,28,A.bk,null,null,null)
D.fXY=new B.B("NGMY News",null,A.dq,null,null,null,null,null,null,null,null,null)
D.bJ_=new B.by(1,A.bb,D.fXY,null)
D.dvO=w([D.bUY,A.au,D.bJ_],x.p)
D.f9H=new B.c8(A.aL,A.e,A.j,A.l,null,A.p,null,0,D.dvO,null)
D.bV8=new B.ae(A.oy,16,A.c,null,null,null)
D.fZy=new B.B("Book",null,A.nY,null,null,null,null,null,null,null,null,null)
D.dA9=w([D.bV8,A.e8,D.fZy],x.p)
D.f9Q=new B.c8(A.aL,A.e,A.P,A.l,null,A.p,null,0,D.dA9,null)
D.c0W=new B.ae(A.jI,10,A.c,null,null,null)
D.fLW=new B.B("Pro",null,A.nW,null,null,null,null,null,null,null,null,null)
D.dnp=w([D.c0W,A.r8,D.fLW],x.p)
D.f9U=new B.c8(A.aL,A.e,A.P,A.l,null,A.p,null,0,D.dnp,null)
D.fXo=new B.B("Make a newspaper",null,A.VM,null,null,null,null,null,null,null,null,null)
D.cbf=w([E.a3R,A.af,D.fXo],x.p)
D.f9V=new B.c8(A.aL,A.e,A.P,A.l,null,A.p,null,0,D.cbf,null)
D.c_m=new B.ae(A.k7,18,A.bL,null,null,null)
D.fOa=new B.B("Ending celebration",null,A.hq,null,null,null,null,null,null,null,null,null)
D.duO=w([D.c_m,A.bo,D.fOa],x.p)
D.f9Y=new B.c8(A.aL,A.e,A.j,A.l,null,A.p,null,0,D.duO,null)
D.c0H=new B.ae(A.j7,18,A.ku,null,null,null)
D.fri=new B.G(!0,A.ku,null,null,null,null,15,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fZR=new B.B("Write",null,D.fri,null,null,null,null,null,null,null,null,null)
D.dbn=w([D.c0H,A.af,D.fZR],x.p)
D.fa5=new B.c8(A.aL,A.e,A.P,A.l,null,A.p,null,0,D.dbn,null)
D.fLU=new B.B("Download picture",null,A.nX,null,null,null,null,null,null,null,null,null)
D.bLM=new B.qK(A.e7,A.A,A.f,D.fLU,null)
D.bLY=new B.dm(1,A.co,D.bLM,null)
D.dnP=w([K.arO,A.af,D.bLY],x.p)
D.fa6=new B.c8(A.aL,A.ba,A.j,A.l,null,A.p,null,0,D.dnP,null)
D.bWV=new B.ae(A.HU,22,A.bk,null,null,null)
D.fVW=new B.B("NGMY NEWS",null,M.aaZ,null,null,null,null,null,null,null,null,null)
D.d2f=w([D.bWV,A.af,D.fVW],x.p)
D.fag=new B.c8(A.aL,A.e,A.P,A.l,null,A.p,null,0,D.d2f,null)
D.fas=new B.pE(!1,!1,null,U.XX,null,A.c3,null,null,null)
D.aa5=new B.iM([D.ct,D.ds,D.vl,D.Jm,D.vm,D.aL7],B.at("iM<hF>"))
D.emz={title:0,quote:1,closing:2,bio:3}
D.fbX=new B.de(D.emz,4,x.M)
D.eke={caps:0,stamp:1,retro:2,glitch:3,whisper:4}
D.fc_=new B.de(D.eke,5,x.M)
D.elP={midnight:0,rose_gold:1,slate_pro:2,neon_night:3,charcoal:4,crimson:5,gold:6,plum:7}
D.aa7=new B.de(D.elP,8,x.M)
D.ekZ={Design:0,Transitions:1,Insert:2}
D.fc8=new B.de(D.ekZ,3,x.M)
D.hGT=new B.iM([D.a8e],B.at("iM<wA>"))
D.el7={float3d:0,drift:1,pulse:2}
D.fcc=new B.de(D.el7,3,x.M)
D.aSY=new B.iM([D.Jj,D.Jk,D.Jl],B.at("iM<mV>"))
D.ekc={shimmer:0,golddust:1,spotlight:2,goldframe:3,twinkle:4,orbit:5,rays:6,bokeh:7,aurora:8,sparkle:9,sheen:10,velvet:11,crest:12,filigree:13}
D.aT0=new B.de(D.ekc,14,x.M)
D.hGU=new B.de(A.i5,0,B.at("de<wA>"))
D.el4={"kbpabloqr@gmail.com":0,"ngumoyaking@gmail.com":1,"appbusiness321@gmail.com":2,"appbusiness84@gmail.com":3}
D.UO=new B.de(D.el4,4,x.M)
D.ek4={print:0,rotate:1,text_box:2,picture:3,title:4,subtitle:5,bullets:6,numbered:7,quote:8,citation:9,date_stamp:10,page_number:11,header_bar:12,footer_bar:13,divider:14,table:15,sticky:16,duplicate_el:17,delete_el:18,bring_fwd:19,send_back:20,align_left:21,align_center:22,align_right:23,word_count:24,link_text:25,phone:26,email:27,new_slide:28,present:29}
D.aT3=new B.de(D.ek4,30,x.M)
D.eld={circle:0,triangle:1,hexagon:2,diamond:3}
D.fcE=new B.de(D.eld,4,x.M)
D.ff7=new B.av(390,844)
D.ffY=new B.a5(20,20,A.M9,null)
D.aTT=new B.a5(null,2.5,null,null)
D.fg7=new B.a5(18,18,A.M9,null)
D.c0L=new B.ae(A.j8,19,A.c,null,null,null)
D.fgj=new B.a5(38,38,D.c0L,null)
D.bZU=new B.ae(A.zx,22,A.c,null,null,null)
D.fgm=new B.a5(40,40,D.bZU,null)
D.fgV=new B.hG(2,10,10,1.15,null)
D.aU0=new B.hG(2,16,14,0.62,null)
D.bGP=new B.R(32,30,32,40)
D.bgo=new B.u(0.3333333333333333,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.q)
D.bUV=new B.ae(A.qK,56,D.bgo,null,null,null)
D.ajD=new B.u(0.6,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.q)
D.ftu=new B.G(!0,D.ajD,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fSN=new B.B("Your books will live here.",null,D.ftu,null,A.K,null,null,null,null,null,null,null)
D.deo=w([D.bUV,A.W,D.fSN],x.p)
D.bxw=new B.fk(A.ah,A.e,A.j,A.l,null,A.p,null,0,D.deo,null)
D.etv=new B.D(D.bGP,D.bxw,null)
D.fhg=new B.m3(D.etv,null)
D.fSK=new B.B("Chagua jimbo la Civic Registry kwanza.",null,null,null,null,null,null,null,null,null,null,null)
D.fhy=new B.b1(D.fSK,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.fQO=new B.B("Done \u2014 only the text size was changed. Undo brings back the old size.",null,null,null,null,null,null,null,null,null,null,null)
D.fhz=new B.b1(D.fQO,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.fW_=new B.B("This slide has no text boxes.",null,null,null,null,null,null,null,null,null,null,null)
D.fhI=new B.b1(D.fW_,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.fWz=new B.B("Tap fields to edit names. Tap signature boxes to sign or re-sign. Print from the View tab.",null,null,null,null,null,null,null,null,null,null,null)
D.fhX=new B.b1(D.fWz,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.fPq=new B.B("Sign in to Civic Registry to view Hati ya Kiapo cha Uongozi.",null,null,null,null,null,null,null,null,null,null,null)
D.fi9=new B.b1(D.fPq,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.h2R=new B.B("Could not read that presentation QR or document code.",null,null,null,null,null,null,null,null,null,null,null)
D.fis=new B.b1(D.h2R,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.h_S=new B.B("Use the 5-character code on the document QR, like GA847.",null,null,null,null,null,null,null,null,null,null,null)
D.fiD=new B.b1(D.h_S,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.fWI=new B.B("Sign in to Civic Registry to view this document.",null,null,null,null,null,null,null,null,null,null,null)
D.fjm=new B.b1(D.fWI,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.fK4=new B.B("Buttons hidden. Double-tap the top-right corner to show them again.",null,null,null,null,null,null,null,null,null,null,null)
D.fjD=new B.b1(D.fK4,null,null,null,null,null,null,null,A.iZ,null,null,null,null,A.oo,!1,null,null,null,A.t,null)
D.fM3=new B.B("Could not crop that picture.",null,null,null,null,null,null,null,null,null,null,null)
D.fjV=new B.b1(D.fM3,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.fSp=new B.B("This oath is locked for editing (5 hours after the president signed). You can still view and play the video.",null,null,null,null,null,null,null,null,null,null,null)
D.fjX=new B.b1(D.fSp,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.fS5=new B.B("Only the authorized registrar for this state can add the oath video.",null,null,null,null,null,null,null,null,null,null,null)
D.fjY=new B.b1(D.fS5,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.fYP=new B.B("Document code copied.",null,null,null,null,null,null,null,null,null,null,null)
D.fjZ=new B.b1(D.fYP,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.h0I=new B.B("Only the admin can delete Hati ya Kiapo cha Uongozi.",null,null,null,null,null,null,null,null,null,null,null)
D.fk3=new B.b1(D.h0I,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.fG8=new B.B("Tap the logo or a picture on this slide first.",null,null,null,null,null,null,null,null,null,null,null)
D.fk8=new B.b1(D.fG8,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.fNe=new B.B("Sign in to unlock Slides Pro features.",null,null,null,null,null,null,null,null,null,null,null)
D.fkv=new B.b1(D.fNe,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.h1w=new B.B("Done \u2014 the look is changed. Undo brings back the old one.",null,null,null,null,null,null,null,null,null,null,null)
D.fkx=new B.b1(D.h1w,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.h12=new B.B("The NGMY logo stays on every quote. You can move it or change its frame.",null,null,null,null,null,null,null,null,null,null,null)
D.fkB=new B.b1(D.h12,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.fF3=new B.B("Video upload failed. Check your connection and try again.",null,null,null,null,null,null,null,null,null,null,null)
D.fkD=new B.b1(D.fF3,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.fXT=new B.B("This transferred document is view only. You can print or download it.",null,null,null,null,null,null,null,null,null,null,null)
D.fkM=new B.b1(D.fXT,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.h0B=new B.B("Done \u2014 the words are changed and the design is kept. Undo brings back the old version.",null,null,null,null,null,null,null,null,null,null,null)
D.fl1=new B.b1(D.h0B,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.h0s=new B.B("Book saved on this device.",null,null,null,null,null,null,null,null,null,null,null)
D.fl3=new B.b1(D.h0s,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.fEV=new B.B("Only the authorized registrar for this state can update this signature.",null,null,null,null,null,null,null,null,null,null,null)
D.fl9=new B.b1(D.fEV,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.fJ2=new B.B("You don't have a Bio link yet \u2014 create one in Bio first.",null,null,null,null,null,null,null,null,null,null,null)
D.flB=new B.b1(D.fJ2,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.h_G=new B.B("Nothing to transfer yet \u2014 fill names or details on this document first.",null,null,null,null,null,null,null,null,null,null,null)
D.flN=new B.b1(D.h_G,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.fIP=new B.B("Only the authorized registrar for this state can sign this document.",null,null,null,null,null,null,null,null,null,null,null)
D.fm2=new B.b1(D.fIP,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.boM=new B.u(1,0.9764705882352941,0.8352941176470589,0.8274509803921568,A.q)
D.d0Q=w([A.iv,A.pg,D.boM,D.ag4,A.iv],x.O)
D.fmq=new B.fZ(A.A,0,6.283185307179586,A.x,D.d0Q,null,null)
D.dat=w([A.bL,A.c4,A.ia,D.BY,A.bL],x.O)
D.aUz=new B.fZ(A.A,0,6.283185307179586,A.x,D.dat,null,null)
D.dpH=w([A.bT,A.bg,A.b9,A.b4,A.bk,A.bT],x.O)
D.fmv=new B.fZ(A.A,0,6.283185307179586,A.x,D.dpH,null,null)
D.d38=w([A.qq,A.ph,A.qe,A.iv,A.qq],x.O)
D.fmw=new B.fZ(A.A,0,6.283185307179586,A.x,D.d38,null,null)
D.dpB=w([A.aS,A.bN,A.bl,A.an,A.aS],x.O)
D.fmx=new B.fZ(A.A,0,6.283185307179586,A.x,D.dpB,null,null)
D.dxY=w([A.bx,A.b9,A.bg,A.bT,A.bx],x.O)
D.fmz=new B.fZ(A.A,0,6.283185307179586,A.x,D.dxY,null,null)
D.bk4=new B.u(1,0,1,0,A.q)
D.bp6=new B.u(1,0,1,1,A.q)
D.blW=new B.u(1,0,0,1,A.q)
D.bhM=new B.u(1,1,0,1,A.q)
D.dtM=w([A.Mq,A.Ze,D.bk4,D.bp6,D.blW,D.bhM,A.Mq],x.O)
D.fmA=new B.fZ(A.A,0,6.283185307179586,A.x,D.dtM,null,null)
D.fmP=new C.axJ(2,"immersiveSticky")
D.fmQ=new C.axJ(3,"edgeToEdge")
D.fmR=new C.axJ(4,"manual")
D.fpn=new B.G(!0,A.bB,null,null,null,null,14,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpo=new B.G(!0,A.ob,null,null,null,null,12,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aV9=new B.G(!0,A.eW,null,null,null,null,12.5,A.U,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpW=new B.G(!0,E.nz,null,null,null,null,13,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fsI=new B.G(!0,A.c,null,null,null,null,22,A.u,null,0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fsS=new B.G(!0,A.bW,null,null,null,null,12.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftd=new B.G(!0,A.eK,null,null,null,null,12,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fuI=new B.G(!0,A.bN,null,null,null,null,13.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fuT=new B.G(!0,A.jZ,null,null,null,null,11,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fv6=new B.t8(!0,A.JJ,null,null,null,null,A.dH,8,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvA=new B.G(!0,A.c,null,null,null,null,8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwk=new B.G(!0,A.jC,null,null,null,null,11.5,A.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwI=new B.G(!0,A.aD,null,null,null,null,12.5,A.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.euY=new B.j2(1,1,0.7568627450980392,0.027450980392156862)
D.fwM=new B.t8(!0,D.euY,null,null,null,null,A.dH,7,null,null,null,null,null,null,null,null,null,null,null,null)
D.ain=new B.u(1,0.8392156862745098,0.7254901960784313,0.6039215686274509,A.q)
D.aVY=new B.G(!0,D.ain,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwU=new B.G(!0,D.ajD,null,null,null,null,11.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwV=new B.G(!0,A.c,null,null,null,null,20,A.u,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aW_=new B.G(!0,A.c,null,null,null,null,null,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxy=new B.t8(!0,A.pN,null,null,null,null,A.dH,9,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxQ=new B.G(!0,null,null,null,null,null,20,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyn=new B.G(!0,A.c,null,null,null,null,16,A.I,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyp=new B.G(!0,D.ain,null,null,null,null,14,null,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.KO=new B.G(!0,A.aD,null,null,null,null,12.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyX=new B.G(!0,A.c4,null,null,null,null,11.5,A.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fz7=new B.G(!0,A.bN,null,null,null,null,14,A.a8,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzb=new B.G(!0,A.bL,null,null,null,null,12,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzs=new B.G(!0,A.c,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.a5z,null,null,null)
D.fzv=new B.G(!0,A.c0,null,null,null,null,null,A.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzx=new B.G(!0,A.c,null,null,null,null,30,A.u,null,5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzM=new B.G(!0,A.c,null,null,null,null,6.5,A.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzY=new B.G(!0,A.dn,null,null,null,null,13,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAz=new B.G(!0,A.aR,null,null,null,null,null,A.a8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAK=new B.G(!0,A.c,null,null,null,null,13.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fB0=new B.G(!0,A.ab,null,null,null,null,15,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aWE=new B.G(!0,A.c,null,null,null,null,14.5,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aWG=new B.G(!0,A.bW,null,null,null,null,11.5,A.a8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bv_=new B.u(0.7019607843137254,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.q)
D.fCU=new B.G(!0,D.bv_,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aWM=new B.G(!0,E.nz,null,null,null,null,16,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDo=new B.G(!0,A.bN,null,null,null,null,11,A.a8,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDr=new B.G(!0,N.lF,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvP=new B.G(!0,A.w,null,null,null,null,8,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEG=new B.B("NEW",null,D.fvP,null,null,null,null,null,null,null,null,null)
D.fEY=new B.B("Hati ya Kuhowesha",null,A.fR,null,null,null,null,null,null,null,null,null)
D.fFp=new B.B("Session ended",null,null,null,null,null,null,null,null,null,null,null)
D.fFP=new B.B("Scrollable PDF on this slide",null,A.dk,null,null,null,null,null,null,null,null,null)
D.fGA=new B.B("Big quote mark",null,A.jx,null,null,null,null,null,null,null,null,null)
D.fGC=new B.B("Move down",null,null,null,null,null,null,null,null,null,null,null)
D.fGO=new B.B("Duplicate",null,null,null,null,null,null,null,null,null,null,null)
D.fHg=new B.B("Edit window ended",null,null,null,null,null,null,null,null,null,null,null)
D.fHi=new B.B("How many slides?",null,A.h1,null,null,null,null,null,null,null,null,null)
D.fHR=new B.B("Transfer",null,A.ci,null,null,null,null,null,null,null,null,null)
D.frl=new B.G(!0,A.c,null,null,null,null,12,A.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fId=new B.B("Luxury FX",null,D.frl,null,null,null,null,null,null,null,null,null)
D.fIy=new B.B("Font",null,A.tK,null,null,null,null,null,null,null,null,null)
D.fIJ=new B.B("Anza hati mpya?",null,null,null,null,null,null,null,null,null,null,null)
D.fIQ=new B.B("Ghairi",null,null,null,null,null,null,null,null,null,null,null)
D.fCp=new B.G(!0,A.bN,null,null,null,null,12,A.U,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJ_=new B.B("Example  GA847",null,D.fCp,null,null,null,null,null,null,null,null,null)
D.fJp=new B.B("Design shapes",null,A.jx,null,null,null,null,null,null,null,null,null)
D.fJA=new B.B("Your 4-hour window to edit this admin-shared document has ended. You can still view, print, or download it.",null,null,null,null,null,null,null,null,null,null,null)
D.fJF=new B.B("Non-stop (loop)",null,A.h1,null,null,null,null,null,null,null,null,null)
D.fJT=new B.B("Hati ya Kuhoweya",null,A.fR,null,null,null,null,null,null,null,null,null)
D.fKb=new B.B("Photo studio",null,A.fE,null,null,null,null,null,null,null,null,null)
D.fKG=new B.B("Add your picture",null,A.jP,null,null,null,null,null,null,null,null,null)
D.fv7=new B.G(!0,A.c,null,null,null,null,20,A.u,null,-0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKH=new B.B("Enter document code",null,D.fv7,null,A.K,null,null,null,null,null,null,null)
D.fKI=new B.B("Kiswahili",null,null,null,null,null,null,null,null,null,null,null)
D.fKN=new B.B("English",null,null,null,null,null,null,null,null,null,null,null)
D.fsv=new B.G(!0,E.nz,null,null,null,null,19,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fL7=new B.B("Delete this book?",null,D.fsv,null,A.K,null,null,null,null,null,null,null)
D.fxn=new B.G(!0,E.nz,null,null,null,null,18,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fM5=new B.B("Your library",null,D.fxn,null,null,null,null,null,null,null,null,null)
D.fMa=new B.B("Delete",null,A.aVQ,null,null,null,null,null,null,null,null,null)
D.fMd=new B.B("Add a picture and the AI writes a whole newspaper page about NGMY around it: the headline, the story and the caption. It knows the app, the Civic Registry, the Advisors and KB PABLO QR, the CEO. Pick old or modern designs, then tell the AI what to change.",null,Ax.EL,null,null,null,null,null,null,null,null,null)
D.fMo=new B.B("Element flies in",null,A.aW3,null,null,null,null,null,null,null,null,null)
D.VX=new B.B("Hati mpya (chagua muundo)",null,null,null,null,null,null,null,null,null,null,null)
D.fMO=new B.B("Fungua / hariri hati",null,null,null,null,null,null,null,null,null,null,null)
D.fNb=new B.B("Cancel",null,E.aWe,null,null,null,null,null,null,null,null,null)
D.fNd=new B.B("The lines and circles that come with the design",null,A.hp,null,null,null,null,null,null,null,null,null)
D.fB9=new B.G(!0,A.hx,null,null,null,null,11,A.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fNH=new B.B("DOCUMENT CODE",null,D.fB9,null,null,null,null,null,null,null,null,null)
D.fOw=new B.B("Quotes",null,G.abz,null,null,null,null,null,null,null,null,null)
D.fuu=new B.G(!0,N.lF,null,null,null,null,null,A.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fOG=new B.B("Add a picture",null,D.fuu,null,null,null,null,null,null,null,null,null)
D.fOO=new B.B("Point at a NGMY Slides transfer QR, or tap search to enter the document code",null,A.VA,null,A.K,null,null,null,null,null,null,null)
D.fOS=new B.B("Look & feel",null,A.h1,null,null,null,null,null,null,null,null,null)
D.fOX=new B.B("Rings",null,A.hq,null,null,null,null,null,null,null,null,null)
D.fP2=new B.B("W",null,A.tK,null,null,null,null,null,null,null,null,null)
D.fPc=new B.B("Move up",null,null,null,null,null,null,null,null,null,null,null)
D.fPw=new B.B("It goes behind your words. Then the photo studio opens: looks, light, colour, effects and crop.",null,A.VJ,null,A.K,null,null,null,null,null,null,null)
D.fPy=new B.B("Write your book",null,A.cG,null,null,null,null,null,null,null,null,null)
D.fQi=new B.B("Add page",null,A.ci,null,null,null,null,null,null,null,null,null)
D.fQA=new B.B("Malipo ya Awamu ya Mahari",null,A.fR,null,null,null,null,null,null,null,null,null)
D.fuX=new B.G(!0,A.c,null,null,null,null,24,A.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fQP=new B.B("Create with AI",null,D.fuX,null,A.K,null,null,null,null,null,null,null)
D.fRk=new B.B("Apply look",null,A.hq,null,null,null,null,null,null,null,null,null)
D.fvF=new B.G(!0,A.es,null,null,null,null,12,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fS7=new B.B("Type your presentation below",null,D.fvF,null,A.K,null,null,null,null,null,null,null)
D.fSa=new B.B("Tap the code to copy it. Share the code or the QR: the other phone types the code or scans the QR.",null,M.aWQ,null,A.K,null,null,null,null,null,null,null)
D.fSc=new B.B("Keep it",null,A.ci,null,null,null,null,null,null,null,null,null)
D.fqe=new B.G(!0,A.cv,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fSj=new B.B("Done",null,D.fqe,null,null,null,null,null,null,null,null,null)
D.fSE=new B.B("Delete",null,A.nZ,null,null,null,null,null,null,null,null,null)
D.fSP=new B.B("Hati ya Kiapo cha Uongozi",null,A.fR,null,null,null,null,null,null,null,null,null)
D.ftN=new B.G(!0,A.aR,null,null,null,null,13,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fTK=new B.B("Write your idea in any language \u2014 the AI makes the slides.",null,D.ftN,null,A.K,null,null,null,null,null,null,null)
D.fU6=new B.B("Anza upya (hati mpya)",null,null,null,null,null,null,null,null,null,null,null)
D.fUd=new B.B("Layout",null,A.VO,null,null,null,null,null,null,null,null,null)
D.fUU=new B.B("Print",null,A.cG,null,null,null,null,null,null,null,null,null)
D.fV2=new B.B("X",null,A.tK,null,null,null,null,null,null,null,null,null)
D.fVE=new B.B("Your logo goes on every slide and your pictures replace stock photos. The ring button also has the ending celebrations.",null,A4.xk,null,null,null,null,null,null,null,null,null)
D.fWd=new B.B("Use the whole picture",null,null,null,null,null,null,null,null,null,null,null)
D.fWr=new B.B("Hati ya Kuhowa",null,A.fR,null,null,null,null,null,null,null,null,null)
D.fWt=new B.B("Choose a class template",null,A.fR,null,null,null,null,null,null,null,null,null)
D.fWv=new B.B("Drag the picture to move it. Pinch or use the slider to zoom.",null,A.hp,null,null,null,null,null,null,null,null,null)
D.fWC=new B.B("Download the newspaper picture",null,A.cG,null,null,null,null,null,null,null,null,null)
D.fWP=new B.B("Print view",null,null,null,null,null,null,null,null,null,null,null)
D.fWW=new B.B("Done",null,A.aWD,null,null,null,null,null,null,null,null,null)
D.fX6=new B.B("Ending celebration",null,A.dq,null,null,null,null,null,null,null,null,null)
D.fX7=new B.B("Delete element",null,null,null,null,null,null,null,null,null,null,null)
D.fXm=new B.B("Plays after your last slide. Tap one to watch it and change its words or logo.",null,A4.tJ,null,null,null,null,null,null,null,null,null)
D.fYl=new B.B("Export presentation",null,A.dk,null,null,null,null,null,null,null,null,null)
D.fYm=new B.B("What would you like to do?",null,D.aVY,null,null,null,null,null,null,null,null,null)
D.fYr=new B.B("Delete",null,A.cG,null,null,null,null,null,null,null,null,null)
D.fYY=new B.B("Your 4-hour marriage document session has ended. Pay again to keep editing.",null,null,null,null,null,null,null,null,null,null,null)
D.fZ1=new B.B("Hati (Documents)",null,A.fR,null,null,null,null,null,null,null,null,null)
D.fZe=new B.B("Done",null,A.lw,null,null,null,null,null,null,null,null,null)
D.fCe=new B.G(!0,A.c,null,null,null,null,18,A.I,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fZi=new B.B("Delete presentation?",null,D.fCe,null,A.K,null,null,null,null,null,null,null)
D.fZC=new B.B("After the last slide it starts again from the first",null,A.hp,null,null,null,null,null,null,null,null,null)
D.fZO=new B.B("\ud83c\udf33",null,A.EK,null,A.K,null,null,null,null,null,null,null)
D.h_5=new B.B("Plays big after your last slide. Tap one to watch it, change the words or add your logo.",null,A.hp,null,null,null,null,null,null,null,null,null)
D.h_c=new B.B("Transfer document",null,A.nf,null,null,null,null,null,null,null,null,null)
D.h_n=new B.B("Add to the slides",null,A.h1,null,null,null,null,null,null,null,null,null)
D.h_K=new B.B("Endelea",null,null,null,null,null,null,null,null,null,null,null)
D.fs_=new B.G(!0,A.c,null,null,null,null,24,A.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h_Y=new B.B("Make a book",null,D.fs_,null,null,null,null,null,null,null,null,null)
D.h01=new B.B("Books",null,A.cG,null,null,null,null,null,null,null,null,null)
D.fum=new B.G(!0,A.an,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h03=new B.B("Keep this page open until it finishes.",null,D.fum,null,null,null,null,null,null,null,null,null)
D.h05=new B.B("Making your video",null,A.dq,null,null,null,null,null,null,null,null,null)
D.h0a=new B.B("LANGUAGE",null,X.tL,null,null,null,null,null,null,null,null,null)
D.h0g=new B.B("Use this ending",null,A.cG,null,null,null,null,null,null,null,null,null)
D.h0o=new B.B("Scan presentation QR",null,null,null,null,null,null,null,null,null,null,null)
D.h0q=new B.B("Upload a different logo",null,A.ci,null,null,null,null,null,null,null,null,null)
D.h0H=new B.B("Delete from the database?",null,A.jP,null,null,null,null,null,null,null,null,null)
D.h0J=new B.B("H",null,A.tK,null,null,null,null,null,null,null,null,null)
D.h18=new B.B("NGMY Quotes",null,A.dq,null,null,null,null,null,null,null,null,null)
D.h1C=new B.B("Cover",null,D.aWM,null,null,null,null,null,null,null,null,null)
D.h1G=new B.B("Hati iliyopo ya jimbo hili itabadilishwa.",null,null,null,null,null,null,null,null,null,null,null)
D.h1H=new B.B("Each page becomes its own slide you can present",null,A.hp,null,null,null,null,null,null,null,null,null)
D.h22=new B.B("Y",null,A.tK,null,null,null,null,null,null,null,null,null)
D.h2e=new B.B("Crop the picture",null,A.lw,null,null,null,null,null,null,null,null,null)
D.h2l=new B.B("Edit text",null,A.KK,null,null,null,null,null,null,null,null,null)
D.h4G=B.dR("a9L")
D.hrg=new B.bA("slides-create-kiapo",x.W)
D.EY=new C.az4(0,"none")
D.b_V=new C.az4(1,"zipCrypto")
D.b_W=new C.az4(2,"aes")
D.htL=new F.Qu("","",null)
D.huT=new C.beO(null)
D.hw0=new C.a01(null)
D.hz_=new C.aeJ(null)
D.hz1=new C.aGj(null)
D.hBN=new C.a1f(null)
D.hCy=new C.a1M(null)
D.hDa=new C.bwR(null)})();(function staticFields(){$.huB=null
$.huC=null
$.huD=null
$.huE=null
$.hbK=B.wZ("_lastQuoRemDigits")
$.hbL=B.wZ("_lastQuoRemUsed")
$.azs=B.wZ("_lastRemUsed")
$.hbM=B.wZ("_lastRem_nsh")
$.qx=B.a([4294967295,2147483647,1073741823,536870911,268435455,134217727,67108863,33554431,16777215,8388607,4194303,2097151,1048575,524287,262143,131071,65535,32767,16383,8191,4095,2047,1023,511,255,127,63,31,15,7,3,1,0],x.t)
$.Cm=B.T(x.N,x.I)
$.cfK=!1
$.hqg=null
$.Cn=B.T(x.N,B.at("a9<n,n>"))
$.hzD=B.T(B.at("lb"),x.N)
$.hzP=B.T(B.at("lb"),x.E)
$.hxJ=!1
$.bCv="q"
$.Rz=0
$.Dq=B.T(x.N,B.at("ai<Af>"))
$.hy5=!1
$.hdu=!1
$.hEM=null
$.i9r=B.T(x.N,B.at("aB<n?>"))
$.Ln=""
$.jc=0
$.hrs=function(){var w=x.N
return B.T(w,w)}()
$.hrr=B.T(x.N,x.R)
$.hdQ=!1
$.ahn=B.T(x.N,x.E)
$.heI=0
$.hdU=B.T(x.N,x.R)
$.bn5=!1})();(function lazyInitializers(){var w=a.lazyFinal
w($,"iA4","DN",()=>C.bch(0))
w($,"iA2","a44",()=>C.bch(1))
w($,"iA3","hIF",()=>C.bch(2))
w($,"iA1","hiR",()=>$.a44().vK(0))
w($,"iA_","hID",()=>C.bch(1e4))
w($,"iA0","hIE",()=>B.F4(8))
w($,"ivL","hGy",()=>B.F4(0))
w($,"ivT","hGC",()=>B.F4(0))
w($,"ivS","hGB",()=>B.c2M(0))
w($,"iE2","hKP",()=>{var v,u,t=x.N
t=B.T(t,t)
for(v=D.a72.gdO(D.a72),v=v.gae(v);v.C();){u=v.gR(v)
t.n(0,u.b,u.a)}return t})
w($,"iEu","bH2",()=>{var v="Corporate",u=4280171146,t=4294967295,s=4280640491,r=4279080072,q="Modern",p="Bold",o=4278190080,n=4280472558,m=4279179050,l=4284773515,k=4287874557,j=4293548044,i=4279548070,h=x.O
return B.a([C.nc(new C.fUg(),v,"biz_plan_blue","Business Plan",B.a([B.b0(u),B.b0(t)],h)),C.nc(new C.fUh(),v,"exec_summary","Executive",B.a([B.b0(s),B.b0(t)],h)),C.nc(new C.fUi(),v,"teal_corporate","Teal Corp",B.a([B.b0(r),B.b0(4279310375)],h)),C.nc(new C.fUt(),q,"geometric_overlap","Geometric",B.a([B.b0(4279203438),B.b0(u)],h)),C.nc(new C.fUy(),p,"midnight_cyan","Midnight Cyan",B.a([B.b0(o),B.b0(n)],h)),C.nc(new C.fUz(),q,"diagonal_hero","Diagonal Hero",B.a([B.b0(m),B.b0(l)],h)),C.nc(new C.fUA(),v,"swot_grid","SWOT Grid",B.a([B.b0(u),B.b0(4278556265)],h)),C.nc(new C.fUB(),v,"layered_chevrons","Chevrons",B.a([B.b0(4280172719),B.b0(k)],h)),C.nc(new C.fUC(),q,"split_triangle","Split Panel",B.a([B.b0(s),B.b0(t)],h)),C.nc(new C.fUD(),v,"corporate_navy","Navy Pro",B.a([B.b0(4278982953),B.b0(4282090230)],h)),C.nc(new C.fUE(),p,"cyan_slash","Cyan Slash",B.a([B.b0(o),B.b0(4278630100)],h)),C.nc(new C.fUj(),p,"crimson_impact","Crimson",B.a([B.b0(4282714634),B.b0(4292617766)],h)),C.nc(new C.fUk(),q,"ocean_waves","Ocean Waves",B.a([B.b0(4278413729),B.b0(4286436348)],h)),C.nc(new C.fUl(),p,"mono_geometric","Mono Geo",B.a([B.b0(o),B.b0(n)],h)),C.nc(new C.fUm(),"Luxury","luxury_gold","Gold Luxe",B.a([B.b0(4280031511),B.b0(4293571336)],h)),C.nc(new C.fUn(),q,"hex_infographic","Hex Stack",B.a([B.b0(r),B.b0(4284410580)],h)),C.nc(new C.fUo(),q,"photo_banner","Photo Banner",B.a([B.b0(m),B.b0(4281908728)],h)),C.nc(new C.fUp(),v,"process_steps","Process",B.a([B.b0(s),B.b0(k)],h)),C.nc(new C.fUq(),"Minimal","grid_modern","Grid Modern",B.a([B.b0(l),B.b0(t)],h)),C.nc(new C.fUr(),"Luxury","platinum_frame","Platinum",B.a([B.b0(4282865001),B.b0(4293060848)],h)),C.nc(new C.fUs(),v,"agenda_cards","Agenda Cards",B.a([B.b0(u),B.b0(4292602622)],h)),C.nc(new C.fUu(),q,"headline_orange","Headline Orange",B.a([B.b0(j),B.b0(i)],h)),C.nc(new C.fUv(),q,"infographic_teal","Infographic",B.a([B.b0(r),B.b0(j)],h)),C.nc(new C.fUw(),q,"content_year","Year Feature",B.a([B.b0(j),B.b0(t)],h)),C.nc(new C.fUx(),q,"photo_cta","Photo CTA",B.a([B.b0(m),B.b0(i)],h))],B.at("O<Fx>"))})
w($,"iE5","hKR",()=>B.ag("^[A-Z]{2}\\d{3}$",!0,!1,!1,!1))})()};
(a=>{a["6186w1YZ6hDfFY97FvIhZzD0oVA="]=a.current})($__dart_deferred_initializers__);