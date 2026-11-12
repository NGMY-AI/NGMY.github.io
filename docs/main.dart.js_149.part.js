((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,Aj,A8,Ak,Al,W,A9,Am,An,C={
ui(d,e){for(;;){if(!(d>0&&e[d-1]===0))break;--d}return d},
har(d,e,f,g){var w,v=new Uint16Array(g),u=f-e
for(w=0;w<u;++w)v[w]=d[e+w]
return v},
KB(d){var w
if(d===0)return $.DJ()
if(d===1)return $.a3S()
if(d===2)return $.hHb()
if(Math.abs(d)<4294967296)return C.bbX(A.o.M(d))
w=C.i1u(d)
return w},
bbX(d){var w,v,u,t,s=d<0
if(s){if(d===-9223372036854776e3){w=new Uint16Array(4)
w[3]=32768
v=C.ui(4,w)
return new C.oj(v!==0,w,v)}d=-d}if(d<65536){w=new Uint16Array(1)
w[0]=d
v=C.ui(1,w)
return new C.oj(v===0?!1:s,w,v)}if(d<=4294967295){w=new Uint16Array(2)
w[0]=d&65535
w[1]=A.o.aI(d,16)
v=C.ui(2,w)
return new C.oj(v===0?!1:s,w,v)}v=A.o.aq(A.o.galw(d)-1,16)+1
w=new Uint16Array(v)
for(u=0;d!==0;u=t){t=u+1
w[u]=d&65535
d=A.o.aq(d,65536)}v=C.ui(v,w)
return new C.oj(v===0?!1:s,w,v)},
i1u(d){var w,v,u,t,s,r,q,p
if(isNaN(d)||d==1/0||d==-1/0)throw B.W(B.dL("Value must be finite: "+d,null))
d=Math.floor(d)
if(d===0)return $.DJ()
w=$.hHa()
for(v=w.$flags|0,u=0;u<8;++u){v&2&&B.aj(w)
w[u]=0}v=J.lp(A.aI.gaU(w))
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
if(s<0)p=q.mD(0,-s)
else p=s>0?q.dX(0,s):q
return p},
has(d,e,f,g){var w,v,u
if(e===0)return 0
if(f===0&&g===d)return e
for(w=e-1,v=g.$flags|0;w>=0;--w){u=d[w]
v&2&&B.aj(g)
g[w+f]=u}for(w=f-1;w>=0;--w){v&2&&B.aj(g)
g[w]=0}return e+f},
hte(d,e,f,g){var w,v,u,t,s,r=A.o.aq(f,16),q=A.o.F(f,16),p=16-q,o=A.o.dX(1,p)-1
for(w=e-1,v=g.$flags|0,u=0;w>=0;--w){t=d[w]
s=A.o.fQ(t,p)
v&2&&B.aj(g)
g[w+r+1]=(s|u)>>>0
u=A.o.dX(t&o,q)}v&2&&B.aj(g)
g[r]=u},
ht9(d,e,f,g){var w,v,u,t,s=A.o.aq(f,16)
if(A.o.F(f,16)===0)return C.has(d,e,s,g)
w=e+s+1
C.hte(d,e,f,g)
for(v=g.$flags|0,u=s;--u,u>=0;){v&2&&B.aj(g)
g[u]=0}t=w-1
return g[t]===0?t:w},
i1x(d,e,f,g){var w,v,u,t,s=A.o.aq(f,16),r=A.o.F(f,16),q=16-r,p=A.o.dX(1,r)-1,o=A.o.fQ(d[s],r),n=e-s-1
for(w=g.$flags|0,v=0;v<n;++v){u=d[v+s+1]
t=A.o.dX(u&p,q)
w&2&&B.aj(g)
g[v]=(t|o)>>>0
o=A.o.fQ(u,r)}w&2&&B.aj(g)
g[n]=o},
cOb(d,e,f,g){var w,v=e-g
if(v===0)for(w=e-1;w>=0;--w){v=d[w]-f[w]
if(v!==0)return v}return v},
i1v(d,e,f,g,h){var w,v,u
for(w=h.$flags|0,v=0,u=0;u<g;++u){v+=d[u]+f[u]
w&2&&B.aj(h)
h[u]=v&65535
v=v>>>16}for(u=g;u<e;++u){v+=d[u]
w&2&&B.aj(h)
h[u]=v&65535
v=v>>>16}w&2&&B.aj(h)
h[e]=v},
bbY(d,e,f,g,h){var w,v,u
for(w=h.$flags|0,v=0,u=0;u<g;++u){v+=d[u]-f[u]
w&2&&B.aj(h)
h[u]=v&65535
v=0-(A.o.aI(v,16)&1)}for(u=g;u<e;++u){v+=d[u]
w&2&&B.aj(h)
h[u]=v&65535
v=0-(A.o.aI(v,16)&1)}},
htf(d,e,f,g,h,i){var w,v,u,t,s,r
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
i1w(d,e,f){var w,v=e[f]
if(v===d)return 65535
w=A.o.ed((v<<16|e[f-1])>>>0,d)
if(w>65535)return 65535
return w},
oj:function oj(d,e,f){this.a=d
this.b=e
this.c=f},
cOc:function cOc(){},
cOd:function cOd(){},
cOe:function cOe(d,e){this.a=d
this.b=e},
cOf:function cOf(d){this.a=d},
aTg:function aTg(d,e){this.a=d
this.b=e},
hiU(d,e,f){var w=new C.SO(d,A.o.aq(Date.now(),1000),e)
w.Q=f
return w},
SO:function SO(d,e,f){var _=this
_.a=d
_.b=420
_.e=e
_.as=_.Q=null
_.at=f},
a4O:function a4O(d,e){this.a=d
this.b=e},
bKe:function bKe(d){this.a=d
this.c=this.b=0},
hKw(){return new C.bIw()},
bIw:function bIw(){var _=this
_.ax=_.at=_.as=_.Q=_.z=_.y=_.x=_.w=_.r=_.f=_.e=_.d=_.c=_.b=_.a=$
_.ay=0
_.ch=-1
_.cx=_.CW=0
_.fr=_.dy=_.dx=_.db=_.cy=$
_.fx=0},
cGb:function cGb(d){var _=this
_.a=-1
_.r=_.f=0
_.x=d},
i1a(d,e,f){var w,v,u,t,s
if(d.gau(d))return new Uint8Array(0)
w=new Uint8Array(B.cb(d.gd2E(d)))
v=f*2+2
u=C.hqU(C.hqW(),64)
t=new C.coT(u)
u=u.b
u===$&&B.c()
t.c=new Uint8Array(u)
t.a=new C.coU(e,1000,v)
s=new Uint8Array(v)
return A.aI.dt(s,0,t.cQs(w,0,s,0))},
cG9:function cG9(d,e){this.c=d
this.d=e},
ayQ:function ayQ(d,e){this.a=d
this.b=e},
cGc:function cGc(d,e,f,g){var _=this
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
baD:function baD(){var _=this
_.as=_.Q=_.y=_.x=_.w=_.a=0
_.at=""
_.ch=_.ax=null},
cGa:function cGa(){this.a=$},
hsJ(d,e){var w,v,u=d.length
if(u!==e.length)return!1
for(w=0,v=0;v<u;++v)w|=d[v]^e[v]
return w===0},
hKf(d,e){var w
d.$flags&2&&B.aj(d)
d[0]=e&255
d[1]=e>>>8&255
d[2]=e>>>16&255
d[3]=e>>>24&255
for(w=4;w<=15;++w)d[w]=0},
bH5:function bH5(d,e,f){var _=this
_.a=1
_.b=d
_.c=e
_.d=f
_.r=null
_.x=_.w=$},
hgw(d,e){e&=31
return(d&$.qv[e])<<e>>>0},
nO(d,e){e&=31
return(d>>>e|C.hgw(d,32-e))>>>0},
hqV(d){var w,v=new C.auo()
if(B.iU(d))v.aME(d,null)
else{x.dw.a(d)
w=d.a
w===$&&B.c()
v.a=w
w=d.b
w===$&&B.c()
v.b=w}return v},
hqW(){var w=C.hqV(0),v=new Uint8Array(4),u=x.S
u=new C.coV(w,v,A.Fl,5,B.bZ(5,0,!1,u),B.bZ(80,0,!1,u))
u.ir(0)
return u},
hqU(d,e){var w=new C.coR(d,e)
w.b=20
w.d=new Uint8Array(e)
w.e=new Uint8Array(e+20)
return w},
coQ:function coQ(){},
coU:function coU(d,e,f){this.a=d
this.b=e
this.c=f},
coO:function coO(){},
aun:function aun(d){this.a=d},
coT:function coT(d){this.a=$
this.b=d
this.c=$},
coP:function coP(){},
coN:function coN(){},
auo:function auo(){this.b=this.a=$},
coS:function coS(){},
coV:function coV(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=$
_.d=f
_.e=g
_.f=h
_.r=i
_.w=$},
coR:function coR(d,e){var _=this
_.a=d
_.b=$
_.c=e
_.e=_.d=$},
coM:function coM(){},
coL:function coL(d){var _=this
_.a=0
_.b=$
_.c=!1
_.d=d},
bSu:function bSu(){},
bSv:function bSv(d){this.a=d},
czi:function czi(){},
bTw:function bTw(d,e){this.a=d
this.b=!1
this.c=e},
bTx:function bTx(){},
ie_(d){var w,v,u=B.a([],x.s)
for(w=d.length,v=0;v<w;++v)u.push(d[v].u(0))
return u},
axr(d){var w=0,v=B.j(x.H),u
var $async$axr=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:u=x.H
w=d!==D.fle?2:4
break
case 2:w=5
return B.b(A.kC.h7("SystemChrome.setEnabledSystemUIMode",d.a7(),u),$async$axr)
case 5:w=3
break
case 4:null.toString
w=6
return B.b(A.kC.h7("SystemChrome.setEnabledSystemUIOverlays",C.ie_(null),u),$async$axr)
case 6:case 3:return B.h(null,v)}})
return B.i($async$axr,v)},
axu:function axu(d,e){this.a=d
this.b=e},
a9s:function a9s(d){this.a=d},
igL(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p=new C.fFW(15,d,f,e,g,h),o=i*i,n=A.j.V(i/1.4142135623730951)
for(w=0;w<=n;++w){v=Math.sqrt(o-w*w)
u=v-Math.floor(v)
t=u*(w===n?0.25:1)
s=A.j.bh(v)
r=1-u
p.$5(j,k,w,s,r)
q=s+1
p.$5(j,k,w,q,t)
p.$5(j,k,s,w,r)
p.$5(j,k,q,w,t)}return d},
fFW:function fFW(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aoT(){var w=0,v=B.j(x.gw),u,t,s,r,q
var $async$aoT=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(U.ai0("ngmy_menu_lib_v1_zzslides_index",A.bL),$async$aoT)
case 3:q=e
if(!q.a){u=null
w=1
break}t=q.b
s=t==null?null:J.t(t,"items")
if(x.j.b(s)){t=J.dd(s,x.f)
t=B.cE(t,new C.c3s(),t.$ti.k("M.E"),x.P)
r=B.C(t,B.a4(t).k("M.E"))}else r=B.a([],x.d)
A.d.aZ(r,new C.c3t())
u=r
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aoT,v)},
aoV(d){var w=0,v=B.j(x.S),u,t,s,r,q,p,o,n,m,l,k,j
var $async$aoV=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.aoT(),$async$aoV)
case 3:j=f
if(j==null){u=0
w=1
break}t=x.N
s=B.T(t,x.P)
for(r=J.aU(j);r.C();){q=r.gR(r)
p=J.t(q,"id")
s.n(0,J.k(p==null?"":p),q)}r=d.length,q=x.z,o=0,n=0
case 4:if(!(n<d.length)){w=6
break}m=d[n]
l=new B.V(Date.now(),0,!1).aa().ag()
p=m.a
k=B.ag("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(B.nN("ngmy_menu_lib_v1_zzslide_"+B.aL(p,k,""),B.I(["deck",m.aj(),"savedAt",l],t,q),null),$async$aoV)
case 7:if(!f){w=5
break}s.n(0,p,B.I(["id",p,"name",m.b,"slides",m.r.length,"savedAt",l],t,q));++o
case 5:d.length===r||(0,B.J)(d),++n
w=4
break
case 6:w=o>0?8:9
break
case 8:r=s.$ti.k("b8<2>")
s=B.C(new B.b8(s,r),r.k("M.E"))
w=10
return B.b(B.nN("ngmy_menu_lib_v1_zzslides_index",B.I(["items",s,"savedAt",new B.V(Date.now(),0,!1).aa().ag()],t,q),null),$async$aoV)
case 10:if(!f){u=0
w=1
break}case 9:u=o
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aoV,v)},
c3u(d){return C.hQk(d)},
hQk(d){var w=0,v=B.j(x.af),u,t=2,s=[],r,q,p,o,n,m
var $async$c3u=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
o=B.ag("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(U.ai0("ngmy_menu_lib_v1_zzslide_"+B.aL(d,o,""),A.ib),$async$c3u)
case 7:r=f
o=r.b
q=o==null?null:J.t(o,"deck")
if(!x.f.b(q)){u=null
w=1
break}o=C.X4(B.a3(q,x.N,x.z))
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.ab(m)
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
return B.i($async$c3u,v)},
aoU(d){var w=0,v=B.j(x.y),u,t,s,r
var $async$aoU=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.aoT(),$async$aoU)
case 3:r=f
if(r==null){u=!1
w=1
break}J.nR(r,new C.c3v(d))
w=4
return B.b(B.nN("ngmy_menu_lib_v1_zzslides_index",B.I(["items",r,"savedAt",new B.V(Date.now(),0,!1).aa().ag()],x.N,x.z),null),$async$aoU)
case 4:t=f
w=t?5:6
break
case 5:s=B.ag("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(U.aRf("ngmy_menu_lib_v1_zzslide_"+B.aL(d,s,"")),$async$aoU)
case 7:case 6:u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aoU,v)},
c3s:function c3s(){},
c3t:function c3t(){},
c3v:function c3v(d){this.a=d},
irv(d,e,f){return B.bT(A.L,null,new C.fWQ(e,f,null),d,!0,!0,!0,null,!1,!1,x.H)},
fWQ:function fWQ(d,e,f){this.a=d
this.b=e
this.c=f},
a25:function a25(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aKS:function aKS(d){var _=this
_.d=d
_.e=null
_.f=!0
_.r=!1
_.w=0
_.x=null
_.y=!1
_.c=_.a=null},
fhj:function fhj(d,e){this.a=d
this.b=e},
fhn:function fhn(d){this.a=d},
fho:function fho(d){this.a=d},
fhp:function fhp(d,e,f){this.a=d
this.b=e
this.c=f},
fhk:function fhk(d){this.a=d},
fhl:function fhl(d){this.a=d},
fhm:function fhm(d,e){this.a=d
this.b=e},
fhe:function fhe(d){this.a=d},
fhc:function fhc(d){this.a=d},
fhd:function fhd(d){this.a=d},
fhf:function fhf(d){this.a=d},
fhg:function fhg(d){this.a=d},
fht:function fht(d,e){this.a=d
this.b=e},
fhs:function fhs(d,e){this.a=d
this.b=e},
fhi:function fhi(d,e,f){this.a=d
this.b=e
this.c=f},
fhh:function fhh(d,e,f){this.a=d
this.b=e
this.c=f},
fhq:function fhq(d,e){this.a=d
this.b=e},
fhr:function fhr(d,e){this.a=d
this.b=e},
fhw:function fhw(d){this.a=d},
fhx:function fhx(d,e){this.a=d
this.b=e},
fhv:function fhv(d,e){this.a=d
this.b=e},
fhu:function fhu(){},
hvJ(d){var w,v,u,t
if(d==null||d.length===0)return B.a([],x.k)
try{w=A.Y.aQ(0,d,null)
if(!x.j.b(w)){v=B.a([],x.k)
return v}v=J.dd(w,x.f)
v=B.cE(v,new C.foX(),v.$ti.k("M.E"),x.ea)
u=B.a4(v).k("Y<M.E>")
v=B.C(new B.Y(v,new C.foY(),u),u.k("M.E"))
return v}catch(t){v=B.a([],x.k)
return v}},
a34(d){return C.ii6(d)},
ii6(d){var w=0,v=B.j(x.gL),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$a34=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:n=B.T(x.N,x.ea)
m=new C.fJ7(n)
t=4
j=m
i=C
w=7
return B.b(B.a3E("ngmy_books_v1_"+A.a.i(d.toLowerCase())),$async$a34)
case 7:j.$1(i.hvJ(f))
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
return B.b(B.az(),$async$a34)
case 12:r=f
p=A.a.i(d.toLowerCase())
m.$1(C.hvJ(B.aT(J.t(r.a,"ngmy_books_v1_"+p))))
t=2
w=11
break
case 9:t=8
k=s.pop()
w=11
break
case 8:w=2
break
case 11:p=n.$ti.k("b8<2>")
o=p.k("Y<M.E>")
j=B
i=B
h=new B.b8(n,p)
g=C
w=13
return B.b(C.fp5(d),$async$a34)
case 13:p=j.C(new i.Y(h,new g.fJ5(f),o),o.k("M.E"))
A.d.aZ(p,new C.fJ6())
u=p
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a34,v)},
aiB(d,e){return C.ir9(d,e)},
ir9(d,e){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l
var $async$aiB=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:n=J.b7(e,new C.fWi(),x.P)
n=B.C(n,n.$ti.k("ak.E"))
r=A.Y.az(n,null)
q=!1
t=4
w=7
return B.b(B.ait("ngmy_books_v1_"+A.a.i(d.toLowerCase()),r),$async$aiB)
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
return B.b(B.az(),$async$aiB)
case 12:p=g
w=13
return B.b(p.aB("String","ngmy_books_v1_"+A.a.i(d.toLowerCase()),r),$async$aiB)
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
return B.i($async$aiB,v)},
fp5(d){return C.i67(d)},
i67(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o
var $async$fp5=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.az(),$async$fp5)
case 7:r=f
q=r.tS("ngmy_books_deleted_v1_"+A.a.i(d.toLowerCase()))
if(q==null)q=A.Z
q=B.jz(q,B.U(q).c)
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
return B.i($async$fp5,v)},
aht(d,e){return C.igD(d,e)},
igD(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m
var $async$aht=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$aht)
case 6:s=g
r=B.aR(x.N)
q=s.tS("ngmy_books_deleted_v1_"+A.a.i(d.toLowerCase()))
if(q!=null)J.h7(r,q)
J.c6(r,e)
p=r
r=A.a.i(d.toLowerCase())
q=p
q=B.C(q,B.a4(q).k("ch.E"))
w=7
return B.b(s.aB("StringList","ngmy_books_deleted_v1_"+r,q),$async$aht)
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
return B.b(C.a34(d),$async$aht)
case 8:n=g
J.nR(n,new C.fFA(e))
w=9
return B.b(C.aiB(d,n),$async$aht)
case 9:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$aht,v)},
irA(d,e){return B.a6(d,!1).cd(B.eb(new C.fXb(e),!0,null,x.H))},
i1z(d){var w=d.b
return A.a.i(w.a)==="My Book"&&A.d.cD(w.d,new C.cPz())},
oK:function oK(d,e,f){this.a=d
this.b=e
this.c=f},
foX:function foX(){},
foY:function foY(){},
fJ7:function fJ7(d){this.a=d},
fJ5:function fJ5(d){this.a=d},
fJ6:function fJ6(){},
fWi:function fWi(){},
fFA:function fFA(d){this.a=d},
fXb:function fXb(d){this.a=d},
ZN:function ZN(d,e){this.c=d
this.a=e},
azo:function azo(d,e){var _=this
_.d=d
_.e=!0
_.f=e
_.c=_.a=null},
cPz:function cPz(){},
cPB:function cPB(d,e){this.a=d
this.b=e},
cPE:function cPE(d){this.a=d},
cPF:function cPF(d){this.a=d},
cPD:function cPD(){},
cPG:function cPG(d,e){this.a=d
this.b=e},
cPC:function cPC(d){this.a=d},
cPH:function cPH(){},
cPA:function cPA(d,e){this.a=d
this.b=e},
cPI:function cPI(){},
cPv:function cPv(d){this.a=d},
cPt:function cPt(d){this.a=d},
cPu:function cPu(d){this.a=d},
cPw:function cPw(d,e){this.a=d
this.b=e},
cPs:function cPs(d){this.a=d},
cPr:function cPr(d){this.a=d},
cPp:function cPp(d,e){this.a=d
this.b=e},
cPq:function cPq(d){this.a=d},
cPy:function cPy(){},
cPx:function cPx(d){this.a=d},
cPo:function cPo(d,e){this.a=d
this.b=e},
cPn:function cPn(d,e){this.a=d
this.b=e},
cPm:function cPm(d,e){this.a=d
this.b=e},
cPJ:function cPJ(d){this.a=d},
ZL:function ZL(d,e,f){this.c=d
this.d=e
this.a=f},
aGH:function aGH(d,e,f){this.a=d
this.b=e
this.c=f},
azk:function azk(d){var _=this
_.r=_.f=_.e=_.d=$
_.w=d
_.x=null
_.y=!1
_.c=_.a=null},
cOQ:function cOQ(d){this.a=d},
cOP:function cOP(d){this.a=d},
cOS:function cOS(d,e,f){this.a=d
this.b=e
this.c=f},
cP_:function cP_(){},
cP0:function cP0(d){this.a=d},
cOT:function cOT(d,e,f){this.a=d
this.b=e
this.c=f},
cOR:function cOR(d,e){this.a=d
this.b=e},
cOV:function cOV(d,e){this.a=d
this.b=e},
cOW:function cOW(d,e){this.a=d
this.b=e},
cOX:function cOX(d,e){this.a=d
this.b=e},
cOU:function cOU(d){this.a=d},
cOZ:function cOZ(d){this.a=d},
cOY:function cOY(d,e){this.a=d
this.b=e},
cP5:function cP5(d){this.a=d},
cP1:function cP1(d,e){this.a=d
this.b=e},
cP2:function cP2(d,e){this.a=d
this.b=e},
cP3:function cP3(d,e){this.a=d
this.b=e},
cP4:function cP4(d,e){this.a=d
this.b=e},
azm:function azm(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
iku(){var w,v,u,t,s=!1
try{u=document
if(u.fullscreenElement==null){w=u.documentElement
if(w!=null){v=w.requestFullscreen()
if(s&&v!=null)B.ef(v,x.cK).bG(new C.fNG(),x.H).eM(new C.fNH())}}else if(s)C.hxi()}catch(t){}},
hxi(){var w,v,u
try{w=window.screen.orientation
if(w==null)return
v=w.lock("landscape")
if(v!=null)B.ef(v,x.cK).eM(new C.fti())}catch(u){}},
ikx(){var w,v,u
try{w=window.screen.orientation
if(w!=null)w.unlock()}catch(v){}try{u=document
if(u.fullscreenElement!=null)u.webkitExitFullscreen()}catch(v){}},
fNG:function fNG(){},
fNH:function fNH(){},
fti:function fti(){},
hCa(d){var w="marriage_field_",v=d.db
if(!A.a.a0(v,w))return null
return A.d.gH(A.a.em(v,w,"").split(":"))},
hC7(d){var w=d.db
if(!A.a.a0(w,"marriage_sign_"))return null
if(A.a.a0(w,"marriage_sign_placed_"))return null
if(d.b===D.ls)return null
return A.a.b2(w,14)},
hfa(d){var w
if(d.b!==D.ls)return null
w=d.db
if(!A.a.a0(w,"marriage_sign_placed_"))return null
return A.a.b2(w,21)},
ikX(d){if(d==="hati_kuhowa")return"hati_kuhoweya"
if(d==="hati_kuhoweya")return"hati_kuhowa"
return""},
hCb(d){if(d==="hati_kuhowa")return"Hati ya Kuhoweya"
if(d==="hati_kuhoweya")return"Hati ya Kuhowa"
return"partner document"},
ikS(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=B.ag("\\s+",!0,!1,!1,!1),f=A.a.i(B.aL(d,g," "))
g=B.ag("\\s+",!0,!1,!1,!1)
w=A.a.i(B.aL(e,g," "))
g=f.length
if(g===0||w.length===0){g=x.N
return B.T(g,g)}v=B.ag("\\[[^\\]]+\\]",!0,!1,!1,!1)
u=v.kY(0,f)
t=x.N
u=B.cE(u,new C.fOF(),B.a4(u).k("M.E"),t)
s=B.C(u,B.a4(u).k("M.E"))
if(s.length===0)return B.T(t,t)
for(u=v.kY(0,f),u=new B.Gn(u.a,u.b,u.c),r=x.cz,q=0,p="^";u.C();){o=u.d
n=(o==null?r.a(o):o).b
m=n.index
p=(m>q?p+B.Sw(A.a.aC(f,q,m)):p)+"(.*?)"
q=m+n[0].length}u=(q<g?p+B.Sw(A.a.b2(f,q)):p)+"\\.?$"
l=B.ag(u.charCodeAt(0)==0?u:u,!1,!1,!1,!1).cE(w)
if(l==null)return B.T(t,t)
k=B.T(t,t)
for(g=l.b,j=0;j<s.length;j=i){i=j+1
u=g[i]
h=A.a.i(u==null?"":u)
if(h.length===0)continue
k.n(0,s[j],h)}return k},
ikQ(d,e){var w,v,u,t,s,r=B.a4(e).k("cx<1>"),q=B.C(new B.cx(e,r),r.k("M.E"))
A.d.aZ(q,new C.fOE())
for(r=q.length,w=d,v=0;v<q.length;q.length===r||(0,B.J)(q),++v){u=q[v]
t=e.h(0,u)
s=t==null?null:A.a.i(t)
if(s==null)s=""
if(s.length===0)continue
if(A.a.a0(s,"[")&&A.a.c8(s,"]"))continue
w=B.aSh(w,u,s,0)}return w},
ikU(d,e){var w,v,u,t=d==="hati_kuhowa"?D.a6N:$.hJk(),s=x.N,r=B.T(s,s)
for(s=t.gdO(t),s=s.gae(s);s.C();){w=s.gR(s)
v=e.h(0,w.a)
u=v==null?null:A.a.i(v)
if(u==null)u=""
if(u.length===0)continue
if(A.a.a0(u,"[")&&A.a.c8(u,"]"))continue
r.n(0,w.b,u)}return r},
hC8(d){if(d==="hati_kuhowa")return y.O
if(d==="hati_kuhoweya")return y.f
return""},
fq1(d,e){var w,v,u,t,s,r,q
for(w=d.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u)for(t=w[u].z,s=t.length,r=0;r<t.length;t.length===s||(0,B.J)(t),++r){q=t[r]
if(C.hCa(q)===e)return q}return null},
ikV(d){var w,v=A.a.i(d.c),u=d.w
if(u==="hati_kuhowa")w="hati_kuhowa_"
else w=u==="hati_kuhoweya"?"hati_kuhoweya_":""
u=w.length
if(u!==0&&A.a.a0(v,w))return A.a.b2(v,u)
return A.d.gH(D.I6).a},
ikW(b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0="utangulizi",b1=b6.w,b2=b1==null?"":b1,b3=b5.w,b4=b3==null?"":b3
if(b1==="hati_kuhowa"||b1==="hati_kuhoweya")w=!(b3==="hati_kuhowa"||b3==="hati_kuhoweya")
else w=!0
if(w)return new B.afd(0,0,0)
if(b2.length===0||b4.length===0||b2===b4)return new B.afd(0,0,0)
v=C.fq1(b6,b0)
u=C.fq1(b5,b0)
t=0
if(v!=null&&u!=null){s=C.ikU(b2,C.ikS(C.hC8(b2),v.r))
if(s.a!==0){u.r=C.ikQ(C.hC8(b4),s)
t=s.a}}r=B.aR(x.N)
for(w=b6.r,q=w.length,p=0;p<w.length;w.length===q||(0,B.J)(w),++p)for(o=w[p].z,n=o.length,m=0;m<o.length;o.length===n||(0,B.J)(o),++m){l=C.hCa(o[m])
if(l==null||l==="utangulizi")continue
r.J(0,l)}for(q=B.dZ(r,r.r,r.$ti.c),o=q.$ti.c,k=0;q.C();){n=q.d
if(n==null)n=o.a(n)
j=C.fq1(b6,n)
i=C.fq1(b5,n)
if(j==null||i==null)continue
h=j.r
if(A.a.a0(n,"witness_")){g=A.a.i(h)
n=g.length===0||g==="[Jina la Shahidi]"}else n=!1
if(n)continue
if(A.a.i(h).length===0)continue
i.r=h;++k}q=b5.r
f=q.length===0?null:A.d.gH(q)
e=0
if(f!=null)for(q=w.length,p=0;p<w.length;w.length===q||(0,B.J)(w),++p)for(o=w[p].z,n=o.length,m=0;m<o.length;o.length===n||(0,B.J)(o),++m){d=o[m]
a0=C.hfa(d)
if(a0==null)continue
a1=d.at
if(A.a.i(a1==null?"":a1).length===0)continue
a2=d.c
a3=d.d
a4=d.e
a5=d.f
for(a1=f.z,a6=a1.length,a7=0;a7<a1.length;a1.length===a6||(0,B.J)(a1),++a7){a8=a1[a7]
if(C.hC7(a8)===a0||C.hfa(a8)===a0){a2=a8.c
a3=a8.d
a4=a8.e
a5=a8.f
break}}a1=f.z
a1.$flags&1&&B.aj(a1,16)
A.d.RO(a1,new C.fOL(a0),!0)
a1=f.z
a6=Date.now()
a9=$.jc
$.jc=a9+1
A.d.J(a1,new C.eP(""+1000*a6+"_"+a9,D.ls,a2,a3,a4,a5,"",24,A.a8,A.bt,A.aG,4279310375,A.bn,d.at,D.bk,4280640491,4280172719,2,0,!1,"marriage_sign_placed_"+a0,0,D.ct,0,"","","","","",!1,0));++e}b5.f=new B.V(Date.now(),0,!1)
return new B.afd(k,t,e)},
ikR(d){var w=C.ikV(d)
if(d.w==="hati_kuhowa")return C.hBv("",w)
return C.hBu("",w)},
fOF:function fOF(){},
fOE:function fOE(){},
fOL:function fOL(d){this.a=d},
hx_(){var w=new B.V(Date.now(),0,!1),v=new C.fsj()
return B.w(v.$1(B.bW(w)))+"/"+B.w(v.$1(B.bK(w)))+"/"+B.bC(w)},
hfj(d){var w=d.at,v=A.a.i(w==null?"":w)
w=d.db
return(w==="__kiapo_video__"||A.a.a0(w,"__kiapo_video___"))&&v.length!==0},
fPD(d){var w,v,u,t,s,r,q=d.ax
if(A.a.i(q==null?"":q).length!==0)return!0
for(q=d.r,w=q.length,v=0;v<w;++v)for(u=q[v].z,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===D.ls&&A.a.a0(r.db,"marriage_sign_placed_rais"))return!0}return!1},
hCp(d){var w,v=d.ax,u=A.a.i(v==null?"":v)
if(u.length===0)return!C.fPD(d)
w=B.bj(u)
if(w==null)return!C.fPD(d)
return new B.V(Date.now(),0,!1).aa().d3(w.aa().bR(18e9))},
ilC(d){var w=d.ax
if(A.a.i(w==null?"":w).length!==0)return
d.ax=new B.V(Date.now(),0,!1).aa().ag()},
hUn(d){return A.a.i(d).toLowerCase()},
arh(d){return C.hUp(d)},
hUp(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o,n,m
var $async$arh=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.az(),$async$arh)
case 7:r=f
p=r.tS("ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase())
q=p==null?A.Z:p
o=q
o=new B.N(o,C.ipK(),B.U(o).k("N<1,n>")).bY(0,new C.cfe())
o=B.d4(o,o.$ti.k("M.E"))
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
return B.i($async$arh,v)},
arg(d,e){return C.hUo(d,e)},
hUo(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n
var $async$arg=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:o=A.a.i(e).toLowerCase()
if(o.length===0||A.a.i(d).length===0){w=1
break}w=3
return B.b(C.arh(d),$async$arg)
case 3:r=g
if(!J.c6(r,o)){w=1
break}t=5
w=8
return B.b(B.az(),$async$arg)
case 8:q=g
w=9
return B.b(q.aB("StringList","ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase(),J.pY(r)),$async$arg)
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
return B.i($async$arg,v)},
ari(d,e){return C.hUq(d,e)},
hUq(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n
var $async$ari=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:o=A.a.i(e).toLowerCase()
if(o.length===0||A.a.i(d).length===0){w=1
break}w=3
return B.b(C.arh(d),$async$ari)
case 3:r=g
if(!J.hk(r,o)){w=1
break}t=5
w=8
return B.b(B.az(),$async$ari)
case 8:q=g
w=9
return B.b(q.aB("StringList","ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase(),J.pY(r)),$async$ari)
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
return B.i($async$ari,v)},
Ws(a5){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$Ws=B.e(function(a6,a7){if(a6===1){s.push(a7)
w=t}for(;;)switch(w){case 0:if($.h7P&&!a5){w=1
break}t=4
w=7
return B.b(B.az(),$async$Ws)
case 7:r=a7
q=B.aT(J.t(r.a,"ngmy_civic_hati_kiapo_uongozi_v1"))
if(q!=null&&A.a.i(q).length!==0){p=A.Y.aQ(0,q,null)
f=x.f
if(f.b(p)){e=x.N
o=B.T(e,x.I)
for(d=J.i7(p),d=d.gae(d),a0=x.z;d.C();){n=d.gR(d)
if(f.b(n.b))J.aK(o,J.k(n.a),C.X4(B.a3(f.a(n.b),e,a0)))}$.a8g=o}}t=2
w=6
break
case 4:t=3
a2=s.pop()
m=B.ab(a2)
$.am.$1("[kiapo] local load: "+B.w(m))
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
return B.b(B.c8(),$async$Ws)
case 12:case 11:w=a7?8:9
break
case 8:t=14
w=17
return B.b(B.uy("civic_hati_kiapo_uongozi",null,A.ek),$async$Ws)
case 17:l=a7
w=l!=null&&x.f.b(J.t(l,"byState"))?18:19
break
case 18:o=x.N
k=B.T(o,x.I)
for(f=x.f,e=J.i7(f.a(J.t(l,"byState"))),e=e.gae(e),d=x.z;e.C();){j=e.gR(e)
if(!f.b(j.b))continue
J.aK(k,J.k(j.a),C.X4(B.a3(f.a(j.b),o,d)))}for(o=k,o=new B.ck(o,B.a4(o).k("ck<1,2>")).gae(0);o.C();){f=o.d
f.toString
i=f
h=$.a8g.h(0,i.a)
if(h!=null){f=i.b.f
e=h.f
d=f.a
if(d>=e.gbs())f=d===e.gbs()&&f.b<e.gcF()
else f=!0
f=!f}else f=!0
if(f)$.a8g.n(0,i.a,i.b)}w=20
return B.b(C.arj(),$async$Ws)
case 20:case 19:t=2
w=16
break
case 14:t=13
a3=s.pop()
g=B.ab(a3)
$.am.$1("[kiapo] cloud load: "+B.w(g))
w=16
break
case 13:w=2
break
case 16:case 9:$.h7P=!0
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Ws,v)},
arj(){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m,l
var $async$arj=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$arj)
case 6:s=e
r=B.T(x.N,x.P)
for(o=$.a8g,o=new B.ck(o,B.a4(o).k("ck<1,2>")).gae(0);o.C();){n=o.d
n.toString
q=n
J.aK(r,q.a,q.b.aj())}w=7
return B.b(s.aB("String","ngmy_civic_hati_kiapo_uongozi_v1",A.Y.az(r,null)),$async$arj)
case 7:u=1
w=5
break
case 3:u=2
l=t.pop()
p=B.ab(l)
$.am.$1("[kiapo] local save: "+B.w(p))
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$arj,v)},
b1l(d){var w=0,v=B.j(x.af),u,t,s,r
var $async$b1l=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.Ws(!1),$async$b1l)
case 3:t=A.a.i(d).toLowerCase()
if(t.length===0){u=null
w=1
break}s=$.a8g.h(0,t)
r=s==null?null:s.hQ()
if(r==null){u=null
w=1
break}u=C.bEE(r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$b1l,v)},
a8h(a1){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$a8h=B.e(function(a2,a3){if(a2===1){s.push(a3)
w=t}for(;;)switch(w){case 0:e=a1.x
d=A.a.i(A.a.i(e==null?"":e)).toLowerCase()
if(d.length===0){u=!1
w=1
break}a1.w="hati_kiapo_uongozi"
a1.f=new B.V(Date.now(),0,!1)
o=a1.hQ()
for(e=o.r,n=e.length,m=0;m<e.length;e.length===n||(0,B.J)(e),++m)for(l=e[m].z,k=l.length,j=0;j<k;++j){i=l[j]
h=i.at
g=A.a.i(h==null?"":h)
h=i.db
if((h==="__kiapo_video__"||A.a.a0(h,"__kiapo_video___"))&&A.a.a0(g,"data:"))i.at=null}$.a8g.n(0,d,o)
$.h7P=!0
w=3
return B.b(C.arj(),$async$a8h)
case 3:w=4
return B.b(B.c8(),$async$a8h)
case 4:if(!a3){u=!1
w=1
break}t=6
e=x.N
r=B.T(e,x.P)
for(n=$.a8g,n=new B.ck(n,B.a4(n).k("ck<1,2>")).gae(0);n.C();){l=n.d
l.toString
q=l
J.aK(r,q.a,q.b.aj())}w=9
return B.b(B.nN("civic_hati_kiapo_uongozi",B.I(["byState",r,"updatedAt",new B.V(Date.now(),0,!1).aa().ag()],e,x.z),null),$async$a8h)
case 9:r=a3
u=r
w=1
break
t=2
w=8
break
case 6:t=5
a0=s.pop()
p=B.ab(a0)
$.am.$1("[kiapo] cloud save: "+B.w(p))
u=!1
w=1
break
w=8
break
case 5:w=2
break
case 8:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a8h,v)},
ark(d){var w=0,v=B.j(x.T),u,t,s
var $async$ark=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(new B.hU().a6H(A.eO),$async$ark)
case 3:s=f
if(s==null){u=null
w=1
break}w=4
return B.b(s.fp(),$async$ark)
case 4:t=f
if(t.length===0){u=null
w=1
break}w=5
return B.b(C.b1k(t,d),$async$ark)
case 5:u=f
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ark,v)},
b1k(d,e){return C.hUr(d,e)},
hUr(d,e){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$b1k=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.c8(),$async$b1k)
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
return B.b(p.xH(q,new Uint8Array(B.cb(d)),D.bKJ),$async$b1k)
case 8:n=p.Db(q)
u=n
w=1
break
t=2
w=6
break
case 4:t=3
k=s.pop()
o=B.ab(k)
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
return B.i($async$b1k,v)},
Lo(d,e,f,g,h,i,j,k,l,m,n){var w=C.cD()
return C.er(e,!1,f,A.aG,k.length===0?"marriage_locked":"marriage_locked_"+k,4280640491,g,h,i,"",j,w,null,"","",0,!1,"",0,D.bk,4280172719,2,d,0,0,"",D.ct,D.cW,l,m,n)},
frL(d,e,f,g,h,i,j,k,l){var w=C.cD()
return C.er(A.bn,!1,4279310375,A.aG,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bt,A.a8,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.ct,D.fi,j,k,l)},
hc5(d,e,f,g,h,i,j,k){var w=C.cD(),v=A.j.E(i*0.0017,0.02,0.06)
return C.er(h,!1,j,A.aG,"marriage_field_"+d+":"+A.j.ad(g,3),4280640491,i,A.cH,A.V,"",v,w,null,"","",0,!1,"",0,D.bk,4280172719,2,k,0,0,"",D.ct,D.cW,g,e,f)},
frj(d,e,f,g){return C.frL(0,0.002,D.fJ,g,0.8,"ul_"+B.w(d)+"_"+B.w(e),f,d,e+0.002)},
hc6(d,e,f,g,h,i,j,k){var w=C.cD()
return C.er(A.r7,!1,j,A.aG,"marriage_field_"+d+":"+A.j.ad(g,3),4280640491,i,A.bt,A.a8,"",h,w,null,"","",0,!1,"",0,D.bk,4280172719,2,k,0,0,"",D.ct,D.cW,g,e,f)},
hwZ(d){var w="marriage_field_",v=d.db
if(!A.a.a0(v,w))return null
return A.d.gH(A.a.em(v,w,"").split(":"))},
bEE(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4="hati_kiapo_uongozi",a5="__kiapo_video___"
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
l=C.hwZ(m)
if(l!=null&&A.a.i(m.r).length!==0)r.n(0,l,m.r)
k=m.at
j=A.a.i(k==null?"":k)
i=m.db
if((i==="__kiapo_video__"||A.a.a0(i,a5))&&j.length!==0)q=k
if(m.b===D.ls&&A.a.a0(i,"marriage_sign_placed_rais"))p=m.hQ()}h=C.heP(u)
t=a6.b
o=h.c
i=h.d
if(v)w=u
v=a6.y
g=a6.z
f=a6.Q
e=a6.as
d=a6.at
a0=C.Cn(f,a3,a3,a3,i,5,!1,a4,a3,a3,a3,a3,a6.a,a6.ax,!1,w,t,d,e,h.r,o,v,g,a6.f)
a1=A.d.gH(a0.r)
for(w=a1.z,v=w.length,t=q!=null,n=0;n<w.length;w.length===v||(0,B.J)(w),++n){m=w[n]
l=C.hwZ(m)
if(l!=null&&r.al(0,l)){o=r.h(0,l)
o.toString
m.r=o}o=m.db
if((o==="__kiapo_video__"||A.a.a0(o,a5))&&t)m.at=q}if(p!=null){a2={}
a2.a=null
for(w=a1.z,v=w.length,n=0;n<v;++n){m=w[n]
t=m.db
if(A.a.a0(t,"marriage_sign_")&&!A.a.a0(t,"marriage_sign_placed_")&&m.b!==D.ls&&A.a.c8(t,"rais")){a2.a=m
break}}w=a2.a
if(w!=null){p.c=w.c
p.d=w.d
p.e=w.e
p.f=w.f
A.d.bt(a1.z,new C.fNE(a2))}else A.d.bt(a1.z,new C.fNF())
A.d.J(a1.z,p)}w=a0.ax
if(A.a.i(w==null?"":w).length===0&&C.fPD(a0))a0.ax=a6.f.aa().ag()
return a0},
heP(d){var w,v,u="Hati ya Kiapo cha Uongozi",t=null,s=4279310375,r=4280640491,q=4280172719,p=4279378237,o=4290283019,n=4293056712,m=C.fQq(D.a7N),l=C.cD(),k=x.u,j=B.a([C.er(A.bn,!1,s,A.aG,"marriage_locked_bg",r,24,A.bt,A.a8,"",1,C.cD(),m,"","",0,!1,"",0,D.bk,q,2,"",0,0,"",D.ct,D.lR,1,0,0)],k),i=B.a([],k)
i.push(C.Lo("NGMY",A.K,236069181,52,A.bt,A.u,0.08,"watermark",0.45,-0.08,0.02))
i.push(C.Lo("TAREHE:",A.bn,o,16,A.bt,A.H,A.j.E(0.0272,0.02,0.06),"tarehe_lbl",0.1,0.7,0.026))
i.push(C.hc5("tarehe",0.8059999999999999,0.026,0.18,A.bn,16,p,C.hx_()))
i.push(C.frj(0.8099999999999999,0.026+A.j.E(0.0272,0.02,0.06)*0.8,0.12,o))
i.push(C.Lo("HATI YA KIAPO CHA UONGOZI",A.K,p,26,A.bt,A.u,0.048,"title",0.83,0.085,0.055))
i.push(C.Lo("Kiapo cha Rais \xb7 Presidential Oath of Leadership",A.K,o,11,A.cH,A.a8,0.024,"subtitle",0.83,0.085,0.1))
i.push(C.frL(0,0.002,D.fJ,o,1.6,"title_rule",0.5312,0.2344,0.128))
i.push(C.hc6("body_p1",0.085,0.145,0.83,0.105,12,p,"Mimi [Jina Kamili la Rais], nikiwa Rais wa jamii yetu ya Kikongo, ninasimama mbele ya wanajamii wote kuapa kwamba nitawaongoza kwa haki, amani, na heshima kubwa, huku nikihakikisha tunashirikiana kwa pamoja kujenga jamii yetu na kuchangia maendeleo kwa njia bora na ya kistaarabu."))
i.push(C.hc6("body_p2",0.085,0.255,0.83,0.092,12,p,"Ninajwika jukumu kamili la kusimamia rasilimali na fedha za wananchi kwa uaminifu mkubwa. Endapo itatokea kiasi chochote cha fedha cha mwanachama yeyote hakikurekodiwa vizuri, au fedha ya jumuiya ikipotea bila maelezo, nitawajibika kulipa mara tatu (triple) ya kiasi kilichopotea."))
i.push(C.hc6("body_p3",0.085,0.352,0.83,0.095,12,p,"Kama nikishindwa kulipa au nikakataa kufanya hivyo, wanajamii wote wanaruhusiwa na wako huru kuchukua hatua za kisheria kwenda kuripoti kwa maofisa wa serikali (state officers) au polisi, au kumfungulia mashitaka mahakamani, na niko tayari kukabiliwa na sheria hizo bila pingamizi."))
i.push(C.frL(268435456,0.175,D.bk,o,1.6,"video_frame",0.83,0.085,0.46))
i.push(C.Lo("VIDEO YA KIAPO",A.bn,o,10,A.bt,A.H,0.02,"video_lbl",0.7899999999999999,0.10500000000000001,0.468))
i.push(C.er(A.bn,!1,s,A.aG,"__kiapo_video__",r,24,A.bt,A.a8,"",0.131,C.cD(),t,"","",0,!1,"",0,D.bk,q,2,"",0,0,"",D.ct,D.lR,0.77,0.115,0.492))
i.push(C.Lo("Rais Anayeapa:",A.bn,p,15,A.bt,A.u,0.028,"rais_hdr",0.83,0.085,0.655))
i.push(C.Lo("Jina:",A.bn,p,13,A.bt,A.V,0.026,"jina_lbl",0.1,0.085,0.6930000000000001))
i.push(C.hc5("rais_jina",0.195,0.6930000000000001,0.62,A.bn,13,p,""))
i.push(C.frj(0.195,0.7130000000000001,0.62,n))
i.push(C.Lo("Sahihi:",A.bn,p,13,A.bt,A.V,0.026,"sahihi_lbl",0.12,0.085,0.74))
i.push(C.er(A.bn,!1,s,A.aG,"marriage_sign_rais",0,24,A.bt,A.a8,"",0.07,C.cD(),t,"","",0,!1,"",0,D.bk,0,2,"",0,0,"",D.ct,D.fi,0.38,0.21500000000000002,0.73))
i.push(C.frj(0.21500000000000002,0.795,0.38,n))
i.push(C.Lo("Tarehe:",A.bn,p,13,A.bt,A.V,0.026,"tarehe2_lbl",0.12,0.625,0.74))
i.push(C.hc5("rais_tarehe",0.745,0.74,0.2,A.bn,12,p,C.hx_()))
i.push(C.frj(0.745,0.76,0.2,n))
w=A.a.i(d)
if(w.length!==0)A.d.v(i,B.a([C.frL(0,0.032,D.bk,o,1,"state_box",0.72,0.14,0.875),C.Lo("EMO 'YA M'MBONDO "+w,A.K,p,14,A.bt,A.V,0.026000000000000002,"state_text",0.72,0.14,0.878)],k))
A.d.v(j,i)
v=C.rW(4294967035,t,0,0,j,l,D.qX,"","",u,D.dm)
return C.Cn(t,t,t,t,D.oN,5,!1,"hati_kiapo_uongozi",t,t,t,t,C.cD(),t,!1,w,u,t,t,B.a([v],x.g),"hati_kiapo_elegant_navy",t,!1,t)},
ahB(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$ahB=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:p=A.a.i(i)
if(p.length===0){if(f.e!=null)f.L(x.q).f.U(D.ffZ)
w=1
break}w=3
return B.b(C.Ws(!0),$async$ahB)
case 3:w=4
return B.b(C.b1l(p),$async$ahB)
case 4:t=k
if(f.e==null){w=1
break}if(e)s=d||t==null||C.hCp(t)
else s=!1
w=t!=null?5:6
break
case 5:w=s?7:8
break
case 7:w=9
return B.b(B.bT(D.bm4,null,new C.fIu(p),f,!0,!0,!1,A.lS,!1,!1,x.N),$async$ahB)
case 9:r=k
if(r==="continue"){h.$1(t)
w=1
break}if(r!=="new"){w=1
break}if(f.e==null){w=1
break}w=10
return B.b(B.ce(null,null,!0,null,new C.fIv(),f,null,!0,!0,x.y),$async$ahB)
case 10:if(k!==!0||f.e==null){w=1
break}g.$1(C.heP(p))
w=1
break
case 8:h.$1(t)
w=1
break
case 6:if(!s){if(f.e!=null){q=f.L(x.q).f
q.U(B.b3(null,null,null,null,null,A.t,null,B.d("Registrar wa "+p+" bado hajachapisha Hati ya Kiapo cha Uongozi.",null,null,null,null,null,null,null,null,null,null),null,A.a_,null,null,null,null,null,null,null,null,null,null))}w=1
break}if(f.e==null){w=1
break}g.$1(C.heP(p))
case 1:return B.h(u,v)}})
return B.i($async$ahB,v)},
fsj:function fsj(){},
cfe:function cfe(){},
fNE:function fNE(d){this.a=d},
fNF:function fNF(){},
fIu:function fIu(d){this.a=d},
fIs:function fIs(d){this.a=d},
fIt:function fIt(d){this.a=d},
fIv:function fIv(){},
fIq:function fIq(d){this.a=d},
fIr:function fIr(d){this.a=d},
arP:function arP(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aFv:function aFv(){var _=this
_.d=null
_.r=_.f=_.e=!1
_.c=_.a=null},
el6:function el6(d){this.a=d},
el4:function el4(d){this.a=d},
el5:function el5(d){this.a=d},
el7:function el7(d){this.a=d},
el8:function el8(d){this.a=d},
x6(d,e,f,g,h,i,j,k,l,m,n){var w=C.cD()
return C.er(e,!1,f,A.aG,k.length===0?"marriage_locked":"marriage_locked_"+k,4280640491,g,A.bt,h,"",i,w,null,"","",0,!1,"",j,D.bk,4280172719,2,d,0,0,"",D.ct,D.cW,l,m,n)},
hwA(d,e,f){var w=4291404327
return B.a([C.qu(0,f,D.eZ,w,2,"ring_l",f,d-f*0.42,e),C.qu(0,f,D.eZ,w,2,"ring_r",f,d+f*0.06,e)],x.u)},
fqJ(d,e,f,g,h){var w,v,u="ps_"+g,t=C.qu(4294967288,f,D.eZ,4291404327,1.3,u+"_ring",f,d,e),s=f*0.36
s=C.qu(h,s,D.eZ,h,0,u+"_head",s,d+f*0.32,e+f*0.16)
w=g?0.12:0.18
v=g?0.76:0.64
return B.a([t,s,C.qu(h,f*0.46,D.eZ,h,0,u+"_body",f*v,d+f*w,e+f*0.5)],x.u)},
qu(d,e,f,g,h,i,j,k,l){var w=C.cD()
return C.er(A.bn,!1,4279310375,A.aG,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bt,A.a8,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.ct,D.fi,j,k,l)},
fqI(d,e,f,g,h,i,j,k,l){var w=C.cD(),v=A.j.E(j*0.0017,0.02,0.06),u="marriage_field_"+d+":"
return C.er(h,!1,k,A.aG,i?u+A.j.ad(g,3)+":"+A.o.ad(j,1):u+A.j.ad(g,3),4280640491,j,A.cH,A.V,"",v,w,null,"","",0,!1,"",0,D.bk,4280172719,2,l,0,0,"",D.ct,D.cW,g,e,f)},
bC1(d,e,f,g){return C.qu(0,0.002,D.fJ,g,0.8,"ul_"+B.w(d)+"_"+B.w(e),f,d,e+0.002)},
hwz(d,e,f,g,h){var w=A.j.E(d.length*30*0.00058+0.08,0.2,0.5),v=f+(g-w)/2
return B.a([C.qu(0,0.036,D.bk,h,1.4,"banner_box_"+d,w,v,e),C.x6(d,A.K,h,30,A.u,0.025199999999999997,0,"banner_t_"+d,w,v,e+0.00612)],x.u)},
hC9(){var w=new B.V(Date.now(),0,!1),v=new C.fOK()
return B.w(v.$1(B.bW(w)))+"/"+B.w(v.$1(B.bK(w)))+"/"+B.bC(w)},
hwB(d,e,f,g,h,i,j){var w=4293056712,v=h*0.56,u=f+v+0.01,t=u+0.08,s=f+h-t,r=""+e,q=f+0.026,p=v-0.026
return B.a([C.x6(r+".",A.bn,i,13,A.H,0.024,0,"wln_"+d+"_"+r,0.026,f,g),C.fqI("witness_"+d+"_"+r+"_name",q,g,p,A.bn,!0,16,j,"[Jina la Shahidi]"),C.bC1(q,g+A.j.E(0.0272,0.02,0.06),p,w),C.x6("Sahihi:",A.bn,j,15,A.a8,0.028,0,"wls_"+d+"_"+r,0.077,u,g),C.er(A.bn,!1,4279310375,A.aG,"marriage_sign_"+d+"_witness_"+r,0,24,A.bt,A.a8,"",0.05,C.cD(),null,"","",0,!1,"",0,D.bk,0,2,"",0,0,"",D.ct,D.fi,s,t,g-0.004),C.bC1(t,g+0.044,s,w)],x.u)},
ai2(d,e){var w,v,u,t=x.cd,s=e!=null?B.a([e],t):B.a([D.dsa,D.cuf,D.dk1,D.dm4],t)
for(t=s.length,w=0;w<s.length;s.length===t||(0,B.J)(s),++w)for(v=A.d.gae(s[w]);v.C();){u=v.gR(0)
if(u.a===d)return u}return null},
hbh(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var w=C.fQq(d.d),v=B.a([C.er(A.bn,!1,4279310375,A.aG,"marriage_locked_bg",4280640491,24,A.bt,A.a8,"",1,C.cD(),w,"","",0,!1,"",0,D.bk,4280172719,2,"",0,0,"",D.ct,D.lR,1,0,0)],x.u)
A.d.v(v,C.i8M(d,e,f,g,h,i,j,k,l,m,n,o,p,q))
return v},
i8M(c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=null,b0=4286200650,b1=4291404327,b2=4280640491,b3=4280172719,b4="marriage_locked",b5=4293056712,b6=4279310375,b7=4279673674,b8="marriage_locked_",b9=c3.f,c0=c3.r,c1=x.u,c2=B.a([],c1)
c2.push(C.x6("NGMY",A.K,b9&16777215|251658240,60,A.u,0.09,-0.52,"watermark",0.5,-0.11,0.025))
w=c3.z
switch(w.a){case 1:case 3:A.d.v(c2,C.hwA(0.42,0.016,0.048))
v=0.066
break
case 7:A.d.v(c2,C.hwA(0.38,0.012,0.072))
v=0.082
break
case 2:case 6:case 10:A.d.v(c2,C.fqJ(0.16,0.018,0.052,!1,b9))
A.d.v(c2,C.fqJ(0.79,0.018,0.052,!0,b0))
v=0.072
break
case 5:c2.push(C.x6("\ud83c\udf33",A.K,4279898632,22,A.a8,0.04,0,"tree",0.16,0.42,0.014))
v=0.056
break
case 8:A.d.v(c2,B.a([C.qu(0,0.062,D.eZ,b1,1.6,"crest_o",0.11,0.445,0.012),C.qu(0,0.046,D.eZ,b1,1,"crest_i",0.084,0.458,0.02),C.x6("MUHURI",A.K,b9,9,A.u,0.028,0,"crest_t",0.11,0.445,0.028)],c1))
v=0.078
break
case 4:case 9:A.d.v(c2,B.a([C.qu(0,0.002,D.fJ,b1,1,"orn_l_0.018",0.24,0.2,0.024),C.qu(b9,0.016,D.lt,b1,0.9,"orn_c_0.018",0.024,0.488,0.018),C.qu(0,0.002,D.fJ,b1,1,"orn_r_0.018",0.24,0.518,0.024)],c1))
v=0.04
break
case 0:v=d5
break
default:v=d5}A.d.v(c2,B.a([C.x6("TAREHE:",A.bn,c0,20,A.H,A.j.E(0.033999999999999996,0.02,0.06),0,"tarehe_lbl",0.1,0.7,0.026),C.fqI("tarehe",0.8059999999999999,0.026,0.14400000000000002,A.bn,!1,21,b9,C.hC9()),C.bC1(0.814,0.026+A.j.E(0.035699999999999996,0.02,0.06)*0.8,0.12,c0)],c1))
c2.push(C.x6(d2,A.K,b9,d3,A.u,0.06,0,"title",0.82,0.09,v))
u=v+0.054
c2.push(C.qu(c0,0.0026,D.bk,c0,0,"title_rule_1",0.82*d4,0.09+0.82*(1-d4)/2,u))
t=u+0.028
c2.push(C.qu(c3.e,0.138,D.bk,c0,1.15,"intro_frame",0.832,0.08399999999999999,t-0.004))
s=C.cD()
c2.push(C.er(A.bn,!1,b9,A.aG,"marriage_field_utangulizi:"+A.j.ad(0.82,3),b2,19,A.bt,A.cC,"",0.128,s,a9,"","",0,!1,"",0,D.bk,b3,2,c5,0,0,"",D.ct,D.cW,0.82,0.09,t))
t+=c4
if(c8){r=A.j.E(c7.length*30*0.00058+0.08,0.2,0.5)
q=0.09+(0.82-r)/2
s=C.qu(0,0.036,D.bk,c0,1.4,"banner_box_nimetowe_label",r,q,t)
p=C.cD()
A.d.v(c2,B.a([s,C.er(A.K,!1,c0,A.aG,"marriage_field_nimetowe_label:"+A.j.ad(r,3),b2,30,A.bt,A.u,"",0.025199999999999997,p,a9,"","",0,!1,"",0,D.bk,b3,2,c7,0,0,"",D.ct,D.cW,r,q,t+0.00612)],c1))}else A.d.v(c2,C.hwz(c7,t,0.09,0.82,c0))
t+=0.048
c2.push(C.x6(c9,A.bn,b9,d0,A.V,0.03,0,"nimetowe_sub",0.82,0.09,t))
t+=0.03
for(o=1;o<=4;++o){s=c6[o-1]
n=o===1
m=A.j.E(0.7779999999999999-(n?0.328:0),0.22,1)
l=n?A.j.E(0.037399999999999996,0.02,0.06):A.j.E(0.0272,0.02,0.06)
p=""+o
k=t+0.002
j=C.fqI("mahari_"+p,0.132,k,m,A.bn,!1,16,b9,s)
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
d=B.a([new C.eP(""+1000*i+"_"+h,D.cW,0.09,t+0.004,0.032,0.022,p+".",13,A.H,A.bt,A.aG,c0,A.bn,a9,D.bk,b2,b3,2,0,!1,s,0,D.ct,0,"","","","","",!1,0),j,new C.eP(""+1000*f+"_"+e,D.fi,0.132,k+l+0.002,0.7779999999999999,0.002,"",24,A.a8,A.bt,A.aG,b6,A.bn,a9,D.fJ,0,b5,0.8,0,!1,g,0,D.ct,0,"","","","","",!1,0)],c1)
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
A.d.v(d,B.a([new C.eP(""+1000*s+"_"+p,D.cW,a0,k,0.268,l,"AKUNA DENI",22,A.u,A.bt,A.aG,b7,A.e_,a9,D.bk,b2,b3,2,0,!1,"marriage_locked_nim_akuna_deni",0,D.ct,0,"","","","","",!1,0),new C.eP(""+1000*i+"_"+h,D.fi,a1,a2,0.046,0.025875,"",24,A.a8,A.bt,A.aG,b6,A.bn,a9,D.bk,0,b7,2,0,!1,"marriage_locked_nim_akuna_box",0,D.ct,0,"","","","","",!1,0),new C.eP(""+1000*g+"_"+f,D.cW,a1,a2-0.002,0.046,0.029875,"\u2713",18,A.u,A.bt,A.aG,b7,A.K,a9,D.bk,b2,b3,2,0,!1,"marriage_locked_nim_akuna_tick",0,D.ct,0,"","","","","",!1,0),new C.eP(""+1000*e+"_"+a3,D.fi,a0,k,a1+0.046-a0,l,"",24,A.a8,A.bt,A.aG,b6,A.bn,a9,D.bk,0,0,0,0,!1,"marriage_locked_nim_akuna_hit",0,D.ct,0,"","","","","",!1,0)],c1))}A.d.v(c2,d)
t+=0.04}t+=0.006
A.d.v(c2,C.hwz("MASHAHIDI",t,0.09,0.82,c0))
t+=0.046
if(w===D.a7E||w===D.a7G||w===D.a7D||w===D.a7F){w=t-0.008
A.d.v(c2,C.fqJ(0.21,w,0.044,!0,b0))
A.d.v(c2,C.fqJ(0.7459999999999999,w,0.044,!1,b9))
t+=0.012}a4=0.05+d6*0.056+0.011
w=t+0.05
s=t+0.012
A.d.v(c2,B.a([C.qu(0,a4,D.bk,c0,1.3,"wit_table_border",0.82,0.09,t),C.qu(c0,a4,D.bk,c0,0,"wit_table_divider",0.0024,0.4988,t),C.qu(0,0.0022,D.fJ,c0,1.1,"wit_table_hdrline",0.82,0.09,w),C.x6("UPANDE WA MKE",A.K,c0,20,A.u,0.03,0,"wit_h_mke_t",0.41,0.09,s),C.x6("UPANDE WA MUME",A.K,c0,20,A.u,0.03,0,"wit_h_mume_t",0.41,0.5,s)],c1))
a5=w+0.01
for(a6=1;a6<=d6;++a6){A.d.v(c2,C.hwB("mke",a6,0.106,a5,0.378,c0,b9))
A.d.v(c2,C.hwB("mume",a6,0.516,a5,0.378,c0,b9))
a5+=0.056}t=t+a4+0.012
w=t+0.056
s=t+0.09
p=s-0.002
A.d.v(c2,B.a([C.qu(0,0.11,D.bk,c0,1.2,"mw_box",0.82,0.09,t),C.x6("MWANDISHI",A.bn,c0,15,A.H,0.026,0,"mw_hdr",0.7759999999999999,0.11199999999999999,t+0.016),C.x6("Jina:",A.bn,b9,15,A.a8,0.028,0,"mw_jl",0.09,0.11199999999999999,w),C.fqI("mwandishi_jina",0.215,w,0.3116,A.bn,!0,15,b9,""),C.bC1(0.215,p,0.3116,b5),C.x6("Sahihi:",A.bn,b9,15,A.a8,0.028,0,"mw_sl",0.09,0.5,w),C.er(A.bn,!1,b6,A.aG,"marriage_sign_mwandishi",0,24,A.bt,A.a8,"",0.044,C.cD(),a9,"","",0,!1,"",0,D.bk,0,2,"",0,0,"",D.ct,D.fi,0.3161999999999999,0.5738,s-0.044),C.bC1(0.5738,p,0.3161999999999999,b5)],c1))
a7=A.a.i(d1)
if(a7.length!==0){a8=t+0.11+0.006
A.d.v(c2,B.a([C.qu(0,0.032,D.bk,c0,1,"state_box",0.7,0.15,a8),C.x6("EMO 'YA M'MBONDO "+a7,A.K,b9,26,A.V,0.026000000000000002,0,"state_text",0.7,0.15,a8+0.003)],c1))}return c2},
ikT(d){var w,v,u,t=null,s=B.b0(d.f),r=B.b0(d.r),q=C.hft(d.d),p=new C.fOG(s),o=new C.fOH(s),n=d.z,m=n===D.a7E||n===D.a7G||n===D.a7D||n===D.a7F,l=n===D.aJV||n===D.a7H||n===D.aJW,k=B.bR(0,B.fR(q,A.A,t,t,A.cj,A.c_,!0,t,!1,t,t),0,0,0),j=x.p,i=B.a([],j)
if(l){w=n===D.a7H?26:16
i.push(new C.fOJ().$1$size(w))}if(n===D.aJX)i.push(D.fXW)
if(m)i.push(B.A(B.a([o.$1$female(!1),o.$1$female(!0)],j),A.m,t,A.iR,A.i,0,t,t))
i.push(B.d("HATI YA KUHOWA",t,t,t,t,t,t,B.l(t,t,s,t,t,t,t,t,t,t,t,9,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),A.K,t,t))
i.push(A.an)
n=B.L(r,A.r,1.1)
w=B.m(4)
i.push(B.q(t,B.x(B.a([p.$0(),D.aTw,p.$1$w(0.9),D.aTw,p.$1$w(0.75)],j),A.m,t,A.e,A.i,0,A.p),A.f,t,t,new B.p(D.bgz,t,n,w,t,t,A.n),t,t,t,t,A.amO,t,t,t))
i.push(A.an)
i.push(new C.fOI(r).$1("NIMETOWE"))
i.push(A.fM)
v=J.e2(3,x.l)
for(u=0;u<3;++u)v[u]=new B.D(A.NQ,new B.c7(A.aL,A.e,A.i,A.m,t,A.p,t,0,B.a([B.q(t,t,A.f,t,t,new B.p(r,t,t,t,t,t,A.a7),t,7,t,t,t,t,t,7),A.de,new B.bz(1,A.bc,p.$1$h(4),t)],j),t),t)
A.d.v(i,v)
i.push(A.b5)
i.push(B.d(d.b,t,t,t,t,t,t,B.l(t,t,s.j(0.85),t,t,t,t,t,t,t,t,8,t,t,A.H,t,t,!0,t,t,t,t,t,t,t,t),A.K,t,t))
return new B.an(A.a0,t,A.b2,A.t,B.a([k,new B.D(A.alr,B.x(i,A.al,t,A.e,A.i,0,A.p),t)],j),t)},
hBu(d,e){var w,v,u,t=null,s="Hati ya Kuhowa",r=C.ai2(e,t)
if(r==null)r=A.d.gH(D.I6)
w=C.cD()
v=C.rW(r.e,t,0,0,C.hbh(r,0.165,y.O,D.dmH,"NIMETOWA",!1,"Vitu vifuatavyo vimetolewa:",20,d,"HATI YA KUHOWA",40,0.55,0.036,3),w,D.qX,"","",s,D.dm)
w=C.cD()
u=A.a.i(d)
if(u.length===0)u=t
return C.Cn(t,t,t,t,D.oN,5,!1,"hati_kuhowa",t,t,t,t,w,t,!1,u,s,t,t,B.a([v],x.g),"hati_kuhowa_"+r.a,t,!1,t)},
hBv(d,e){var w,v,u,t=null,s="Hati ya Kuhoweya",r=C.ai2(e,t)
if(r==null)r=A.d.gH(D.I6)
w=C.cD()
v=C.rW(r.e,t,0,0,C.hbh(r,0.165,y.f,D.di_,"NIMEPOKEYA CASH",!0,"Vitu vifuatavyo vimetolewa:",20,d,"HATI YA KUHOWESHA",40,0.55,0.036,3),w,D.qX,"","",s,D.dm)
w=C.cD()
u=A.a.i(d)
if(u.length===0)u=t
return C.Cn(t,t,t,t,D.oN,5,!1,"hati_kuhoweya",t,t,t,t,w,t,!1,u,s,t,t,B.a([v],x.g),"hati_kuhoweya_"+r.a,t,!1,t)},
bFY(d,e,f){var w=0,v=B.j(x.T),u
var $async$bFY=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:u=B.bT(A.L,null,new C.h_E(e,f),d,!0,!0,!0,null,!1,!1,x.N)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bFY,v)},
ahC(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$ahC=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:q=B.U(i).k("Y<1>")
p=B.C(new B.Y(i,new C.fIy(),q),q.k("M.E"))
w=!g&&p.length!==0?3:4
break
case 3:w=5
return B.b(B.bT(D.MY,null,new C.fIz(p),d,!0,!0,!1,A.lS,!1,!1,x.N),$async$ahC)
case 5:t=k
if(t==="continue"){f.$1(A.d.gH(p).hQ())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bFY(d,"Hati ya Kuhowa",D.I6),$async$ahC)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.M3(d,"Tafuta jimbo\u2026","",A.kw,"Chagua jimbo"),$async$ahC)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}e.$1(C.hBu(r,s))
case 1:return B.h(u,v)}})
return B.i($async$ahC,v)},
ahD(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$ahD=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:q=B.U(i).k("Y<1>")
p=B.C(new B.Y(i,new C.fIC(),q),q.k("M.E"))
w=!g&&p.length!==0?3:4
break
case 3:w=5
return B.b(B.bT(D.MY,null,new C.fID(p),d,!0,!0,!1,A.lS,!1,!1,x.N),$async$ahD)
case 5:t=k
if(t==="continue"){f.$1(A.d.gH(p).hQ())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bFY(d,"Hati ya Kuhoweya",D.I6),$async$ahD)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.M3(d,"Tafuta jimbo\u2026","",A.kw,"Chagua jimbo"),$async$ahD)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}e.$1(C.hBv(r,s))
case 1:return B.h(u,v)}})
return B.i($async$ahD,v)},
ahE(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p,o,n,m
var $async$ahE=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:n=B.U(i).k("Y<1>")
m=B.C(new B.Y(i,new C.fIG(),n),n.k("M.E"))
w=!g&&m.length!==0?3:4
break
case 3:w=5
return B.b(B.bT(D.MY,null,new C.fIH(m),d,!0,!0,!1,A.lS,!1,!1,x.N),$async$ahE)
case 5:t=k
if(t==="continue"){f.$1(A.d.gH(m).hQ())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bFY(d,"Malipo ya Awamu ya Mahari",D.So),$async$ahE)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.M3(d,"Tafuta jimbo\u2026","",A.kw,"Chagua jimbo"),$async$ahE)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}q=C.ai2(s,D.So)
if(q==null)q=A.d.gH(D.So)
n=C.cD()
p=C.rW(q.e,null,0,0,C.hbh(q,0.21,"Mimi [Jina la Baba wa Mume], nikiwa kama baba na mkuu wa familia ya upande wa mume kutoka jamii ya [Jina la Jamii ya Mume], nyumba ya [Jina la Nyumba ya Mume], ninafanya makubaliano haya rasmi na familia ya [Jina la Baba wa Binti], wa jamii ya [Jina la Jamii ya Binti], nyumba ya [Jina la Nyumba ya Binti]. Kwa kuwa malipo kamili ya mahari ya mke wa mwanangu hayajakamilika kwa sasa, tumefikia makubaliano ya kulipa kwa awamu. Kiasi kilichosalia cha mahari kitakamilishwa kikamilifu na familia yetu ifikapo tarehe [Tarehe ya Kurudi Kulipa Mahari]. Siku hiyo, pande zote mbili zitakutana tena kwa ajili ya kukamilisha taratibu zote zilizosalia, kupokea baraka kamili za ndoa, na kukabidhiwa Cheti cha Ndoa ya Kimila. Makubaliano haya yanafanyika kwa hiari, kwa ridhaa ya familia zote mbili, na kwa kufuata misingi ya heshima, mila, desturi na maelewano mema kati ya familia zetu.",D.dct,"MALIPO YALIYOSALIA",!1,"Mambo ya Cash na Mali (Yaliyosalia / Yatakayokamilishwa):",18,r,"HATI YA MAKUBALIANO YA MALIPO YA AWAMU YA MAHARI",24,0.85,0.048,2),n,D.qX,"","","Hati ya Makubaliano ya Malipo ya Awamu",D.dm)
n=C.cD()
o=A.a.i(r)
if(o.length===0)o=null
e.$1(C.Cn(null,null,null,null,D.oN,5,!1,"hati_malipo_awamu",null,null,null,null,n,null,!1,o,"Hati ya Makubaliano ya Malipo ya Awamu",null,null,B.a([p],x.g),"hati_malipo_awamu_"+q.a,null,!1,null))
case 1:return B.h(u,v)}})
return B.i($async$ahE,v)},
y8:function y8(d,e){this.a=d
this.b=e},
jC:function jC(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.z=k},
fOK:function fOK(){},
fOG:function fOG(d){this.a=d},
fOI:function fOI(d){this.a=d},
fOJ:function fOJ(){},
fOH:function fOH(d){this.a=d},
h_E:function h_E(d,e){this.a=d
this.b=e},
aem:function aem(d,e,f){this.c=d
this.d=e
this.a=f},
e7w:function e7w(d,e,f){this.a=d
this.b=e
this.c=f},
e7v:function e7v(d,e){this.a=d
this.b=e},
e7u:function e7u(d,e){this.a=d
this.b=e},
adL:function adL(d,e,f){this.c=d
this.d=e
this.a=f},
fIy:function fIy(){},
fIz:function fIz(d){this.a=d},
fIw:function fIw(d){this.a=d},
fIx:function fIx(d){this.a=d},
fIC:function fIC(){},
fID:function fID(d){this.a=d},
fIA:function fIA(d){this.a=d},
fIB:function fIB(d){this.a=d},
fIG:function fIG(){},
fIH:function fIH(d){this.a=d},
fIE:function fIE(d){this.a=d},
fIF:function fIF(d){this.a=d},
Lr(d,e,f,g,h,i,j,k,l,m){var w=C.cD()
return C.er(e,!1,f,A.aG,j.length===0?"marriage_locked":"marriage_locked_"+j,4280640491,g,A.bt,h,"",i,w,null,"","",0,!1,"",0,D.bk,4280172719,2,d,0,0,"",D.ct,D.cW,k,l,m)},
Dp(d,e,f,g,h,i,j,k,l){var w=C.cD()
return C.er(A.bn,!1,4279310375,A.aG,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bt,A.a8,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.ct,D.fi,j,k,l)},
hxl(d,e,f){return C.Dp(0,0.002,D.fJ,4293056712,0.8,"ul_"+B.w(d)+"_"+B.w(e),f,d,e+0.022)},
bCc(d,e,f,g,h){return B.a([C.Dp(4294967288,0.032,D.bk,4291404327,1.15,"pill_"+d,g,f,e),C.Lr(d,A.K,h,11,A.u,0.024,"pill_t_"+d,g,f,e+0.005)],x.u)},
hca(d,e,f,g,h){var w=d+f/2,v=e+0.006,u=f*0.4,t=B.w(e)
return B.a([C.Dp(0,0.002,D.fJ,g,1,"orn_l_"+t,u,d,v),C.Dp(h,0.016,D.lt,g,0.9,"orn_c_"+t,0.024,w-0.012,e),C.Dp(0,0.002,D.fJ,g,1,"orn_r_"+t,u,w+0.018,v)],x.u)},
a2t(d,e,f,g,h,i,j,k){var w=d.length*i*0.0027+0.006,v=C.Lr(d,A.bn,j,i,A.V,0.022,"ll_"+e,w,f,g),u=f+w,t=h-w,s=C.cD()
return B.a([v,C.er(A.K,!1,j,A.aG,"marriage_field_"+e+":"+A.j.ad(t,3),4280640491,i,A.cH,A.V,"",0.02,s,null,"","",0,!1,"",0,D.bk,4280172719,2,k,0,0,"",D.ct,D.cW,t,u,g-0.002),C.hxl(u,g+0.018,t)],x.u)},
hxm(d,e,f,g,h,i){var w=4291404327,v=f+0.002
return B.a([C.Dp(h,0.028,D.bk,h,0,"chv_"+d,g,e,f),C.Dp(w,0.024,D.lt,w,0,"chv_l_"+d,0.024,e-0.008,v),C.Dp(w,0.024,D.lt,w,0,"chv_r_"+d,0.024,e+g-0.016,v),C.Lr(d,A.K,i,9.5,A.u,0.02,"chv_t_"+d,g,e,f+0.004)],x.u)},
bCb(d,e,f,g,h){var w=e+0.12,v=g-0.12
return B.a([C.Lr("Sahihi:",A.bn,h,10,A.V,0.02,"is_"+d,0.12,e,f),C.er(A.bn,!1,4279310375,A.aG,"marriage_sign_"+d,0,24,A.bt,A.a8,"",0.032,C.cD(),null,"","",0,!1,"",0,D.bk,0,2,"",0,0,"",D.ct,D.fi,v,w,f-0.006),C.hxl(w,f+0.016,v)],x.u)},
hfu(d){var w,v
for(w=0;w<19;++w){v=D.SE[w]
if(v.a===d)return v}return null},
inb(d){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=d.c
if(A.a.a0(k,"hati_kuhowa_")){w=C.ai2(A.a.b2(k,12),l)
v=w==null?l:w.d}else if(A.a.a0(k,"hati_kuhoweya_")){w=C.ai2(A.a.b2(k,14),l)
v=w==null?l:w.d}else if(A.a.a0(k,"hati_malipo_awamu_")){u=A.a.b2(k,18)
w=C.ai2(u,D.So)
v=w==null?l:w.d
if(v==null){w=C.ai2(u,l)
v=w==null?l:w.d}}else if(A.a.a0(k,"marriage_")){w=C.hfu(A.a.b2(k,9))
v=w==null?l:w.d}else v=l
if(v==null)return!1
$.hya.a8(0)
$.hym.a8(0)
t=C.fQq(v)
for(w=d.r,s=w.length,r=!1,q=0;q<w.length;w.length===s||(0,B.J)(w),++q)for(p=w[q].z,o=p.length,n=0;n<o;++n){m=p[n]
if(m.db==="marriage_locked_bg"&&m.at!==t){m.at=t
r=!0}}return r},
hgE(d){var w=0,v=B.j(x.T),u
var $async$hgE=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:u=B.bT(A.L,null,new C.h16(),d,!0,!0,!0,null,!1,!1,x.N)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$hgE,v)},
yb:function yb(d,e){this.a=d
this.b=e},
o5:function o5(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
blr:function blr(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
h16:function h16(){},
aep:function aep(d){this.a=d},
epT:function epT(d,e){this.a=d
this.b=e},
epS:function epS(d){this.a=d},
epR:function epR(d,e){this.a=d
this.b=e},
ag4:function ag4(d,e,f){this.c=d
this.d=e
this.a=f},
hft(d){return $.hym.c3(0,d,new C.fQs(d))},
fQq(d){return $.hya.c3(0,d,new C.fQr(d))},
fE(d){return B.h5o(d>>>16&255,d>>>8&255,d&255,255)},
ic_(d){var w,v,u=4292128567,t=4285213214,s=4294967035,r=4290283019,q=null,p=4279378237,o=4291404327,n=4294966774,m=4294702831,l=4285218602,k=4291394365,j=4294967295,i=4294964964,h=4294965484,g=4280241466,f=4287326484,e=4294966518
switch(d.a){case 0:return C.hzs(4294570461,4293910718,4284234270,u)
case 1:return C.hzs(4294635750,4293975240,t,4292912216)
case 2:w=C.fpg(s,4294505966,r)
C.bBW(w,14,16,p)
C.kJ(w,8,9,464,836,u,1.2)
C.Dl(w,2,2,1,1,u,10)
C.Dl(w,478,2,-1,1,u,10)
C.Dl(w,2,852,1,-1,u,10)
C.Dl(w,478,852,-1,-1,u,10)
return w
case 3:return C.fpg(4294966515,4294373082,4289102906)
case 4:return C.i6t(C.fpg(4294376440,4293653998,4290287194))
case 5:w=C.fpg(4294965238,4294437098,4288444980)
C.bBW(w,14,16,4283043359)
C.kJ(w,6,7,468,840,u,1)
C.kJ(w,9,10,462,834,o,0.7)
return w
case 6:v=B.hn(q,q,A.cc,0,A.e8,854,q,0,3,q,A.cc,480,!1)
C.z4(v,n,4294175448)
C.tg(v,n)
C.kJ(v,24,24,432,806,4286209070,1)
C.a2g(v,12,12,468,12,o,3,20)
C.a2g(v,12,842,468,842,o,3,20)
C.a2g(v,12,12,12,842,o,3,20)
C.a2g(v,468,12,468,842,o,3,20)
return v
case 7:return C.i4e(4294440434,4293518297,4280228630,r)
case 8:v=B.hn(q,q,A.cc,0,A.e8,854,q,0,3,q,A.cc,480,!1)
C.z4(v,m,4293911504)
C.tg(v,m)
C.kJ(v,28,28,424,798,l,1)
C.fyX(v,28,28,l,k)
C.fyX(v,452,28,l,k)
C.fyX(v,28,826,l,k)
C.fyX(v,452,826,l,k)
return v
case 9:v=B.hn(q,q,A.cc,0,A.e8,854,q,0,3,q,A.cc,480,!1)
C.z4(v,j,4294111986)
C.tg(v,j)
C.kJ(v,18,18,444,818,4292401368,0.7)
B.iW(v,!0,C.fE(p),0,13,0,853)
return v
case 10:return C.i8y(i,4294173372)
case 11:return C.i9J(4294439140,4293449662)
case 12:return C.i40(h,4294239432)
case 13:return C.i98(4294244340,4293193448)
case 14:return C.idw(4294505710,4293780694)
case 15:return C.fo6(4294966259,4294439138,o,p,q)
case 16:return C.fo6(4294966776,4294178544,o,g,g)
case 17:return C.fo6(4294965493,4294504170,o,4286200650,q)
case 18:return C.fo6(4294966519,4294373862,o,p,p)
case 19:return C.i7E()
case 20:return C.i7F()
case 21:v=B.hn(q,q,A.cc,0,A.e8,854,q,0,3,q,A.cc,480,!1)
C.z4(v,h,4293976768)
C.tg(v,h)
C.bBW(v,14,16,p)
B.iW(v,!0,C.fE(u),4,475,4,9)
B.iW(v,!0,C.fE(u),4,475,844,849)
B.iW(v,!0,C.fE(u),4,9,4,849)
B.iW(v,!0,C.fE(u),470,475,4,849)
C.a2g(v,10,12,470,12,u,2,16)
C.a2g(v,10,842,470,842,u,2,16)
C.a2g(v,10,12,10,842,u,2,18)
C.a2g(v,470,12,470,842,u,2,18)
C.Dl(v,2,2,1,1,t,10)
C.Dl(v,478,2,-1,1,t,10)
C.Dl(v,2,852,1,-1,t,10)
C.Dl(v,478,852,-1,-1,t,10)
C.kJ(v,14,16,452,822,u,1.8)
return v
case 22:v=B.hn(q,q,A.cc,0,A.e8,854,q,0,3,q,A.cc,480,!1)
C.z4(v,s,4294438872)
C.tg(v,s)
C.kJ(v,14,16,452,822,o,2.2)
C.kJ(v,22,24,436,806,o,1)
C.hdA(v,!1,!1,o,p,p,36,14,16)
C.kY(v,240,20,7,o,!0)
C.kY(v,240,834,7,o,!0)
C.kY(v,18,427,7,o,!0)
C.kY(v,462,427,7,o,!0)
return v
case 23:v=B.hn(q,q,A.cc,0,A.e8,854,q,0,3,q,A.cc,480,!1)
C.z4(v,i,4293910712)
C.tg(v,i)
B.iW(v,!0,C.fE(u),0,479,0,20)
B.iW(v,!0,C.fE(u),0,479,834,853)
B.iW(v,!0,C.fE(u),0,20,0,853)
B.iW(v,!0,C.fE(u),460,479,0,853)
B.iW(v,!0,C.fE(f),5,474,5,9)
B.iW(v,!0,C.fE(f),5,474,844,848)
B.iW(v,!0,C.fE(f),5,9,5,848)
B.iW(v,!0,C.fE(f),470,474,5,848)
C.kJ(v,28,28,424,798,f,1.4)
return v
case 24:v=B.hn(q,q,A.cc,0,A.e8,854,q,0,3,q,A.cc,480,!1)
C.z4(v,e,4294174404)
C.tg(v,e)
C.bBW(v,14,16,p)
B.iW(v,!0,C.fE(u),3,476,3,8)
B.iW(v,!0,C.fE(u),3,476,845,850)
B.iW(v,!0,C.fE(u),3,8,3,850)
B.iW(v,!0,C.fE(u),471,476,3,850)
C.kJ(v,9,10,462,834,t,1)
C.kJ(v,14,16,452,822,u,1.8)
C.kY(v,240,8,4,u,!0)
C.kY(v,240,846,4,u,!0)
C.kY(v,8,427,4,u,!0)
C.kY(v,472,427,4,u,!0)
C.kY(v,8,8,3,t,!0)
C.kY(v,472,8,3,t,!0)
C.kY(v,8,846,3,t,!0)
C.kY(v,472,846,3,t,!0)
return v}},
z4(d,e,f){var w,v,u,t,s,r=null,q=e>>>16&255,p=f>>>16&255,o=e>>>8&255,n=f>>>8&255,m=e&255,l=f&255,k=0
for(;;){w=d.a
v=w==null
u=v?r:w.b
if(!(k<(u==null?0:u)))break
w=v?r:w.b
t=k/((w==null?0:w)-1)
w=1-t
v=A.o.E(A.j.V(q*w+p*t),0,255)
u=A.o.E(A.j.V(o*w+n*t),0,255)
w=A.o.E(A.j.V(m*w+l*t),0,255)
s=new Uint8Array(3)
s[0]=v
s[1]=u
s[2]=w
w=d.a
w=w==null?r:w.a
if(w==null)w=0
B.l_(d,!1,A.dj,new B.MH(s),r,A.d2,1,0,w-1,k,k);++k}},
tg(d,e){var w,v,u,t,s,r,q,p,o=null,n=new B.e4()
n.d_(e)
for(w=0;w<900;++w){v=d.a
v=v==null?o:v.a
u=n.aw(v==null?0:v)
v=d.a
v=v==null?o:v.b
t=n.aw(v==null?0:v)
v=d.a
s=v==null?o:v.dT(u,t,o)
if(s==null)s=new B.is()
v=A.o.E(A.j.M(s.gb8(s))-3,0,255)
r=A.o.E(A.j.M(s.gbe())-3,0,255)
q=A.o.E(A.j.M(s.gbc(s))-2,0,255)
p=d.a
if(p!=null)p.k7(u,t,v,r,q,255)}},
kJ(d,e,f,g,h,i,j){var w,v=null,u=C.fE(i),t=e+g
B.l_(d,!0,A.dj,u,v,A.d2,j,e,t,f,f)
w=f+h
B.l_(d,!0,A.dj,u,v,A.d2,j,e,t,w,w)
B.l_(d,!0,A.dj,u,v,A.d2,j,e,e,f,w)
B.l_(d,!0,A.dj,u,v,A.d2,j,t,t,f,w)},
Dl(d,e,f,g,h,i,j){var w,v,u=null,t=A.o.E(A.j.V(j*0.72),8,j-2)
B.l_(d,!0,A.dj,C.fE(i),u,A.d2,2,e,e+g*j,f,f)
B.l_(d,!0,A.dj,C.fE(i),u,A.d2,2,e,e,f,f+h*j)
w=e+g*3
v=f+h*3
B.l_(d,!0,A.dj,C.fE(i),u,A.d2,1,w,e+g*t,v,v)
B.l_(d,!0,A.dj,C.fE(i),u,A.d2,1,w,w,v,f+h*t)},
hzs(d,e,f,g){var w=null,v=B.hn(w,w,A.cc,0,A.e8,854,w,0,3,w,A.cc,480,!1)
C.z4(v,d,e)
C.tg(v,d)
B.iW(v,!0,C.fE(f),0,479,0,28)
B.iW(v,!0,C.fE(f),0,479,826,853)
B.iW(v,!0,C.fE(f),0,28,0,853)
B.iW(v,!0,C.fE(f),452,479,0,853)
C.kJ(v,5,5,470,844,g,1.1)
C.kJ(v,28,28,424,798,g,1.6)
C.Dl(v,2,2,1,1,g,11)
C.Dl(v,478,2,-1,1,g,11)
C.Dl(v,2,852,1,-1,g,11)
C.Dl(v,478,852,-1,-1,g,11)
return v},
fpg(d,e,f){var w=null,v=B.hn(w,w,A.cc,0,A.e8,854,w,0,3,w,A.cc,480,!1)
C.z4(v,d,e)
C.tg(v,d)
C.kJ(v,14,16,452,822,f,1.6)
C.kJ(v,20,22,440,810,f,0.8)
return v},
bBW(d,e,f,g){var w,v=C.fE(g)
B.iW(d,!0,v,0,479,0,f-1)
w=854-f
B.iW(d,!0,v,0,479,w,853);--w
B.iW(d,!0,v,0,e-1,f,w)
B.iW(d,!0,v,480-e,479,f,w)},
i6t(d){var w,v,u=4291404327
C.bBW(d,14,16,4279122734)
for(w=10;w<470;w+=14){C.kY(d,w,8,3,u,!0)
C.kY(d,w,846,3,u,!0)}for(v=18;v<836;v+=16){C.kY(d,7,v,3,u,!0)
C.kY(d,473,v,3,u,!0)}return d},
fCe(d,e,f,g,h,i,j,k,l,m,n){var w,v,u,t=x.J,s=B.a([new B.jr(e,f),new B.jr(e+g*n,f),new B.jr(e,f+h*n)],t)
B.a30(d,C.fE(m),s)
w=A.o.E(A.j.V(n*0.17),5,8)
v=A.j.V(n*0.78)
s=e+g*w
u=f+h*w
t=B.a([new B.jr(s,u),new B.jr(e+g*v,u),new B.jr(s,f+h*v)],t)
B.a30(d,C.fE(k),t)
t=A.j.V(n*0.39)
C.kY(d,e+g*t,f+h*t,6,l,!0)
if(i){t=n-7
C.kY(d,e+g*t,f+h*3,4,k,!0)
C.kY(d,e+g*3,f+h*t,4,k,!0)}if(j){t=n-4
C.kY(d,e+g*t,f,5,k,!0)
C.kY(d,e,f+h*t,5,k,!0)}},
hdA(d,e,f,g,h,i,j,k,l){var w,v
C.fCe(d,k,l,1,1,e,f,g,h,i,j)
w=480-k
C.fCe(d,w,l,-1,1,e,f,g,h,i,j)
v=854-l
C.fCe(d,k,v,1,-1,e,f,g,h,i,j)
C.fCe(d,w,v,-1,-1,e,f,g,h,i,j)},
a2g(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p,o=g-e,n=h-f,m=Math.max(1,A.j.V(Math.sqrt(o*o+n*n)/k))
for(w=i>>>16&255,v=i>>>8&255,u=i&255,t=0;t<=m;++t){s=t/m
r=A.j.V(e+o*s)
q=A.j.V(f+n*s)
p=new Uint8Array(4)
p[0]=w
p[1]=v
p[2]=u
p[3]=255
B.ln(d,!0,A.dj,new B.rq(p),null,A.d2,j,r,q)}},
fB5(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o
for(w=i>>>16&255,v=i>>>8&255,u=i&255,t=0;t<3;++t){s=34+t*12
r=26-t*6
q=e+g*s
p=f+h*s
o=new Uint8Array(4)
o[0]=w
o[1]=v
o[2]=u
o[3]=255
B.l_(d,!0,A.dj,new B.rq(o),null,A.d2,1.4,q,q+g*r,p,p)
o=new Uint8Array(4)
o[0]=w
o[1]=v
o[2]=u
o[3]=255
B.l_(d,!0,A.dj,new B.rq(o),null,A.d2,1.4,q,q,p,p+h*r)}},
i4e(d,e,f,g){var w,v,u,t,s,r,q,p,o=null,n=B.hn(o,o,A.cc,0,A.e8,854,o,0,3,o,A.cc,480,!1)
C.z4(n,d,e)
C.tg(n,d)
C.kJ(n,20,20,440,814,f,1.2)
C.fB5(n,0,0,1,1,g)
C.fB5(n,480,0,-1,1,g)
C.fB5(n,0,854,1,-1,g)
C.fB5(n,480,854,-1,-1,g)
for(w=g>>>16&255,v=g>>>8&255,u=g&255,t=-3;t<=3;++t){s=-1.5707963267948966+t*0.2
r=Math.cos(s)
q=Math.sin(s)
r=A.j.V(240+24*r)
q=A.j.V(60+24*q)
p=new Uint8Array(4)
p[0]=w
p[1]=v
p[2]=u
p[3]=255
B.l_(n,!0,A.dj,new B.rq(p),o,A.d2,1.2,240,r,60,q)}return n},
fyX(d,e,f,g,h){var w
C.fFX(d,!0,C.fE(g),13,e,f)
C.fFX(d,!0,C.fE(g),9,e,f)
w=B.a([new B.jr(e,f-4),new B.jr(e+4,f),new B.jr(e,f+4),new B.jr(e-4,f)],x.J)
B.a30(d,C.fE(h),w)},
kY(d,e,f,g,h,i){var w=null,v=f-g,u=e+g,t=f+g,s=e-g,r=B.a([new B.jr(e,v),new B.jr(u,f),new B.jr(e,t),new B.jr(s,f)],x.J)
if(i){B.a30(d,C.fE(h),r)
return}B.l_(d,!0,A.dj,C.fE(h),w,A.d2,1,e,u,v,f)
B.l_(d,!0,A.dj,C.fE(h),w,A.d2,1,u,e,f,t)
B.l_(d,!0,A.dj,C.fE(h),w,A.d2,1,e,s,t,f)
B.l_(d,!0,A.dj,C.fE(h),w,A.d2,1,s,e,f,v)},
fo5(d,e,f,g,h,i,j){var w,v=B.a([new B.jr(e,f),new B.jr(e+g*28,f),new B.jr(e,f+h*28)],x.J)
B.a30(d,C.fE(i),v)
v=e+g*14
w=f+h*14
C.kY(d,v,w,6,j,!0)
C.kY(d,v,w,3,i,!0)},
fo6(d,e,f,g,h){var w=null,v=B.hn(w,w,A.cc,0,A.e8,854,w,0,3,w,A.cc,480,!1)
C.z4(v,d,e)
C.tg(v,d)
C.kJ(v,18,18,444,818,f,2)
C.kJ(v,26,26,428,802,f,0.9)
if(h!=null)B.iW(v,!0,C.fE(h),28,451,28,34)
C.fo5(v,18,18,1,1,g,f)
C.fo5(v,462,18,-1,1,g,f)
C.fo5(v,18,836,1,-1,g,f)
C.fo5(v,462,836,-1,-1,g,f)
return v},
i7E(){var w,v=null,u=4294966259,t=4292128567,s=4287326484,r=B.hn(v,v,A.cc,0,A.e8,854,v,0,3,v,A.cc,480,!1)
C.z4(r,u,4294240980)
C.tg(r,u)
C.kJ(r,10,12,460,830,t,3.2)
C.kJ(r,18,20,444,814,s,1.2)
C.kJ(r,24,26,432,802,t,1.8)
C.hdA(r,!0,!1,t,s,4279378237,38,10,12)
for(w=56;w<424;w+=18){C.kY(r,w,16,3,t,!0)
C.kY(r,w,838,3,t,!0)}for(w=56;w<798;w+=22){C.kY(r,16,w,3,t,!0)
C.kY(r,464,w,3,t,!0)}return r},
i7F(){var w,v,u,t=null,s=4294966776,r=4291404327,q=4282000405,p=B.hn(t,t,A.cc,0,A.e8,854,t,0,3,t,A.cc,480,!1)
C.z4(p,s,4294373080)
C.tg(p,s)
C.kJ(p,16,18,448,818,r,2.4)
C.kJ(p,24,26,432,802,4286209044,1)
w=new C.fqA(p)
for(v=40;v<440;v+=16){w.$4(v,22,1,1)
w.$4(v,832,1,1)}for(u=44;u<810;u+=18){w.$4(22,u,1,1)
w.$4(458,u,-1,1)}C.hdA(p,!1,!0,r,q,q,34,16,18)
return p},
bCD(d,e,f,g,h,i){B.iW(d,!0,C.fE(i),e,e+g,f,f+h)},
bDu(d,e,f,g,h,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
for(w=e+g,v=a0>>>16&255,u=a1>>>16&255,t=a0>>>8&255,s=a1>>>8&255,r=a0&255,q=a1&255,p=h-1,o=h<=1,n=0;n<h;++n){m=o?0:n/p
l=1-m
k=A.o.E(A.j.V(v*l+u*m),0,255)
j=A.o.E(A.j.V(t*l+s*m),0,255)
l=A.o.E(A.j.V(r*l+q*m),0,255)
i=new Uint8Array(3)
i[0]=k
i[1]=j
i[2]=l
l=f+n
B.l_(d,!1,A.dj,new B.MH(i),null,A.d2,1,e,w,l,l)}},
i8x(d,e,f,g,h,i){var w,v,u,t,s,r,q
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
B.l_(d,!1,A.dj,new B.rq(r),null,A.d2,1,e,s,t,t);++v}return}w=f+g-1
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
B.l_(d,!1,A.dj,new B.rq(r),null,A.d2,1,t,t,f,s);++q}},
i8y(d,e){var w,v,u=null,t=B.hn(u,u,A.cc,0,A.e8,854,u,0,3,u,A.cc,480,!1)
for(w=0;w<854;w+=30)for(v=0;v<480;v+=30)C.i8x(t,v,w,30,D.d4E,(A.o.aq(v,30)+A.o.aq(w,30)&1)===0)
C.bCD(t,44,44,392,766,d)
C.bDu(t,44,44,392,766,d,e)
C.tg(t,d)
C.kJ(t,44,44,392,766,4292128567,2.2)
C.kJ(t,50,50,380,754,4279898632,0.8)
return t},
i9I(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=null
switch(A.o.F(g,4)){case 0:C.kY(d,e,f,7,h,!0)
C.kY(d,e,f,3,h,!1)
break
case 1:w=e-7
v=f-7
u=e+7
t=f+7
B.l_(d,!0,A.dj,C.fE(h),o,A.d2,1.6,w,u,v,t)
B.l_(d,!0,A.dj,C.fE(h),o,A.d2,1.6,u,w,v,t)
break
case 2:for(w=e-8,v=e+8,u=h>>>16&255,t=h>>>8&255,s=h&255,r=-2;r<=2;++r){q=f+r*3
p=new Uint8Array(4)
p[0]=u
p[1]=t
p[2]=s
p[3]=255
B.l_(d,!0,A.dj,new B.rq(p),o,A.d2,1.2,w,v,q,q)}break
default:B.l_(d,!0,A.dj,C.fE(h),o,A.d2,1.5,e-8,e+8,f,f)
B.l_(d,!0,A.dj,C.fE(h),o,A.d2,1.5,e,e,f-8,f+8)
B.ln(d,!0,A.dj,C.fE(h),o,A.d2,2,e,f)}},
i9J(d,e){var w,v,u,t,s=null,r=B.hn(s,s,A.cc,0,A.e8,854,s,0,3,s,A.cc,480,!1)
B.iW(r,!0,C.fE(4284103196),0,479,0,853)
for(w=0,v=18;v<854;v+=32)for(u=18;u<480;u+=32,w=t){t=w+1
C.i9I(r,u,v,w,4292391514)}C.bCD(r,46,46,388,762,d)
C.bDu(r,46,46,388,762,d,e)
C.tg(r,d)
C.kJ(r,46,46,388,762,4291404327,1.8)
return r},
huJ(d,e,f,g){C.fFX(d,!0,C.fE(g),16,e,f)
C.fFX(d,!0,C.fE(g),11,e,f)
C.kY(d,e,f,6,g,!0)
B.l_(d,!0,A.dj,C.fE(g),null,A.d2,1.3,e-14,e+14,f,f)
B.l_(d,!0,A.dj,C.fE(g),null,A.d2,1.3,e,e,f-14,f+14)},
i40(d,e){var w,v=null,u=4283051028,t=4292128567,s=B.hn(v,v,A.cc,0,A.e8,854,v,0,3,v,A.cc,480,!1)
B.iW(s,!0,C.fE(4280948752),0,479,0,853)
B.iW(s,!0,C.fE(u),0,479,0,78)
B.iW(s,!0,C.fE(u),0,479,776,853)
for(w=28;w<460;w+=44){C.huJ(s,w,39,t)
C.huJ(s,w,815,t)}C.bCD(s,38,92,404,670,d)
C.bDu(s,38,92,404,670,d,e)
C.tg(s,d)
C.kJ(s,38,92,404,670,t,1.8)
C.kJ(s,45,99,390,656,4287322667,0.8)
return s},
i97(d,e,f,g){var w,v,u,t,s,r,q,p,o
for(w=f-4,v=x.J,u=g>>>16&255,t=g>>>8&255,s=g&255,r=-2;r<=2;++r){q=e+r*9
p=B.a([new B.jr(e,f),new B.jr(q-5,w),new B.jr(q,f-(18-Math.abs(r)*3)),new B.jr(q+5,w)],v)
o=new Uint8Array(4)
o[0]=u
o[1]=t
o[2]=s
o[3]=255
B.a30(d,new B.rq(o),p)}B.ln(d,!0,A.dj,C.fE(4292128567),null,A.d2,3,e,f)},
i98(d,e){var w,v,u,t,s=null,r=4279196764,q=B.hn(s,s,A.cc,0,A.e8,854,s,0,3,s,A.cc,480,!1)
C.z4(q,4278931279,4292330394)
for(w=8;w<=34;w+=4){v=new Uint8Array(4)
v[0]=8
v[1]=56
v[2]=56
v[3]=255
B.l_(q,!0,A.dj,new B.rq(v),s,A.d2,1.1,w,w,0,853)
v=479-w
u=new Uint8Array(4)
u[0]=8
u[1]=56
u[2]=56
u[3]=255
B.l_(q,!0,A.dj,new B.rq(u),s,A.d2,1.1,v,v,0,853)}B.iW(q,!0,C.fE(r),0,479,0,70)
B.iW(q,!0,C.fE(r),0,479,798,853)
for(t=0;t<5;++t)C.i97(q,70+t*85,48,4292128567)
C.bCD(q,48,78,384,712,d)
C.bDu(q,48,78,384,712,d,e)
C.tg(q,d)
C.kJ(q,48,78,384,712,4291404327,1.6)
return q},
idw(d,e){var w,v,u,t=null,s=4279970378,r=B.hn(t,t,A.cc,0,A.e8,854,t,0,3,t,A.cc,480,!1)
B.iW(r,!0,C.fE(s),0,479,0,853)
for(w=10;w<854;w+=18)for(v=10;v<480;v+=18){C.kY(r,v,w,6,4293449648,!1)
u=new Uint8Array(4)
u[0]=232
u[1]=215
u[2]=176
u[3]=255
B.ln(r,!0,A.dj,new B.rq(u),t,A.d2,1,v,w)}C.bCD(r,40,40,400,774,d)
C.bDu(r,40,40,400,774,d,e)
C.tg(r,d)
C.kJ(r,40,40,400,774,4291058750,2)
C.kJ(r,48,48,384,758,s,0.8)
return r},
la:function la(d,e){this.a=d
this.b=e},
fQs:function fQs(d){this.a=d},
fQr:function fQr(d){this.a=d},
fqA:function fqA(d){this.a=d},
fR5(d){var w
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
i9B(d){var w=d.length
if(w>3&&d[0]===137&&d[1]===80)return"image/png"
if(w>11&&d[8]===87&&d[9]===69)return"image/webp"
return"image/jpeg"},
hc3(d){var w,v,u,t=null,s=A.a.co(d,"{"),r=A.a.p5(d,"}")
if(s<0||r<=s)return t
try{w=A.Y.aQ(0,Ak.ahZ(A.a.aC(d,s,r+1)),t)
v=x.f.b(w)?B.a3(w,x.N,x.z):t
return v}catch(u){return t}},
agr(d,e){var w=0,v=B.j(x.N),u,t,s,r,q,p,o,n
var $async$agr=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(B.vQ(null,""),$async$agr)
case 3:n=g
if(A.a.i(n).length===0)throw B.W("AI is not available right now. Please try again later.")
t=B.nl(n)
if(e==null)s=A.hY
else{r=C.i9B(e)
s=B.a([new B.a1d(A.cP.gcu().aN(e),r)],x.aD)}q=null,p=0
case 4:if(!(p<2)){w=6
break}w=7
return B.b(B.rf(t,d,s,"news",E.GA),$async$agr)
case 7:o=g
r=o.b
if(r!=null&&A.a.i(r).length!==0){u=r
w=1
break}q=o.a
case 5:++p
w=4
break
case 6:throw B.W(q!=null&&B.LS(q)?"No internet connection. Try again when you are online.":"The AI could not do that just now. Try again.")
case 1:return B.h(u,v)}})
return B.i($async$agr,v)},
bF7(d){return C.imS(d)},
imS(d){var w=0,v=B.j(x.b6),u,t=2,s=[],r,q,p,o,n,m
var $async$bF7=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
r='You are a professional Swahili newspaper editor and journalist: a native speaker from Tanzania or Kenya whose writing every Swahili reader finds natural, warm and correct.\nThe newspaper page below was written or translated by a machine, so it may sound stiff, foreign or word-for-word. Rewrite EVERY field so it reads as if a skilled native Swahili journalist wrote it first: natural, clear, correct and professional. Fix wrong grammar (noun classes, verb agreement, tenses), odd or invented words and any English sentence structure. Keep every fact, name and number and do not add facts. Keep the same fields and the same number of paragraphs. Write people\'s names with normal capitals, except KB PABLO QR.\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n\nPage: '+A.Y.az(d.aj(),null)+'\nReply with JSON only, with exactly the same fields: {"paper":"newspaper name","category":"ONE of COMMUNITY, TECHNOLOGY, BUSINESS, EDUCATION, WORLD NEWS, FEATURE","headline":"...","subhead":"...","byline":"By ...","caption":"one sentence about the picture","body":["paragraph 1","paragraph 2","paragraph 3","paragraph 4"],"pullQuote":"a short line from the story","sidebarTitle":"Did you know?","sidebarText":"two short sentences"}\n'
w=7
return B.b(C.agr(r,null),$async$bF7)
case 7:q=f
p=C.hc3(q)
if(p==null){u=d
w=1
break}o=d.aEH(p)
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
return B.i($async$bF7,v)},
hyG(d){var w,v=F.heL(d)
v=B.aL(v,"book","newspaper")
if(F.a3k(d)!=="sw"){w=B.ag("swahili|kiswahili",!1,!1,!1,!1)
w=w.b.test(d)}else w=!0
w=w?'SWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n':""
return"- Write like a real newspaper: a strong headline (max 12 words), a subhead (max 25 words), a byline, then 4 or 5 paragraphs, about 330 to 400 words in all. Plain text only: no markdown, no emojis, no lists.\n- Use ONLY the facts in the knowledge above. Never invent numbers, prices, dates, awards, places or quotes. Do not put made-up words in anyone's mouth.\n- KB PABLO QR is the Founder, President and CEO of NGMY. Always write his name in capital letters.\n- Never mention secret or admin details, passwords or the price list.\n- STYLE: write like an experienced human newspaper journalist in the style of a quality wire service (Associated Press, Reuters): polished, precise, natural and professional. Open with the most important fact. Use the active voice, concrete nouns and strong verbs. Mix short and longer sentences. Plain, grown-up words.\n- NEVER sound like an AI. Do not use: delve, tapestry, testament, beacon, realm, landscape, journey, game-changer, groundbreaking, revolutionize, unlock, empower, seamless, vibrant, bustling, in today's fast-paced world, it is worth noting, not just X but Y, whether you are X or Y. No exclamation marks, no rhetorical questions, no lists of three adjectives, no filler, no hype, no dashes for drama. Every sentence must say something real.\n- Check spelling, grammar and punctuation. Names are written with normal capitals, except KB PABLO QR.\n"+v+w},
fV4(d,e,f,g){return C.ioL(d,e,f,g)},
ioL(d,e,f,g){var w=0,v=B.j(x.b6),u,t,s,r,q,p,o,n,m
var $async$fV4=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:o=C.fR5(g)
n=A.a.i(f)
if(n.length===0)n="Choose the most interesting true story about NGMY from what you know, and write it. Vary it: it can be about the app, the Civic Registry, the Advisors, the studios, or the CEO."
t=C.hCy()
s=e==null?"There is no picture yet: write the caption as a short line about the story.":"A PICTURE IS ATTACHED. Look at it. Mention what is really visible in the caption and weave it into the story. Do not say who the people in it are unless the owner told you."
m=C
w=3
return B.b(C.agr('You are the editor-in-chief of a newspaper called "'+o+'". Write its front-page story in the voice of '+g.at+".\n"+t+'\n\nWHAT THE OWNER ASKED FOR: """'+n+'"""\n'+s+"\nRules:\n"+C.hyG(n)+'\nReply with JSON only, in exactly this shape: {"paper":"newspaper name","category":"ONE of COMMUNITY, TECHNOLOGY, BUSINESS, EDUCATION, WORLD NEWS, FEATURE","headline":"...","subhead":"...","byline":"By ...","caption":"one sentence about the picture","body":["paragraph 1","paragraph 2","paragraph 3","paragraph 4"],"pullQuote":"a short line from the story","sidebarTitle":"Did you know?","sidebarText":"two short sentences"}\n',e),$async$fV4)
case 3:r=m.hc3(i)
if(r==null)throw B.W(y.S)
q=new C.Ab(o,"NGMY NEWS","","","By the NGMY Newsroom","",A.Z,"","","").aEH(r)
t=q.r
if(t.length===0)throw B.W("The AI did not write a story. Try again.")
s=n+" "+A.d.aO(t," ")
if(F.a3k(s)!=="sw"){p=B.ag("swahili|kiswahili",!1,!1,!1,!1)
s=p.b.test(s)}else s=!0
u=s&&F.a3k(A.d.aO(t," "))==="sw"?C.bF7(q):q
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fV4,v)},
bEC(d,e,f,g,h){return C.iks(d,e,f,g,h)},
iks(d,e,f,g,h){var w=0,v=B.j(x.gX),u,t,s,r,q,p,o,n,m,l,k,j
var $async$bEC=B.e(function(i,a0){if(i===1)return B.f(a0,v)
for(;;)switch(w){case 0:l=B.a([],x.s)
k=e.length
k=k>6?A.d.fO(e,k-6):e
t=k.length
s=0
for(;s<k.length;k.length===t||(0,B.J)(k),++s){r=k[s]
l.push(r.a+": "+r.b)}q=A.d.aO(l,"\n")
l=C.hCy()
k=A.Y.az(d.aj(),null)
t=q.length===0?"":"EARLIER IN THIS CONVERSATION:\n"+q+"\n"
j=C
w=3
return B.b(C.agr('You are the editor-in-chief of the newspaper "'+d.a+'", written in the voice of '+h.at+". The owner is talking to you about the page below. They may ask a question about NGMY or the page (just answer it), or ask you to change, add, shorten, rewrite or fix something (change ONLY that).\n"+l+"\n\nTHE PAGE NOW: "+k+"\n"+t+'\nTHE OWNER SAYS: """'+f+'"""\nRules:\n'+C.hyG(f)+'\n- Keep every part they did not mention exactly as it is. Keep the story about 330 to 400 words unless they ask for another length.\nReply with JSON only: {"message":"one or two friendly sentences: your answer, or what you changed","changes":{ ...only the fields you change, using the same names as the page... }}. For a pure question leave "changes" empty.\n',g),$async$bEC)
case 3:p=j.hc3(a0)
if(p==null)throw B.W(y.S)
o=p.h(0,"changes")
if(x.f.b(o)&&J.cI(o)){n=d.aEH(B.a3(o,x.N,x.z))
m=A.Y.az(n.aj(),null)!==A.Y.az(d.aj(),null)}else{n=d
m=!1}w=m&&F.a3k(A.d.aO(n.r," "))==="sw"?4:5
break
case 4:w=6
return B.b(C.bF7(n),$async$bEC)
case 6:n=a0
case 5:l=p.h(0,"message")
if(l==null)l=m?"Done.":"Okay."
u=new C.a8V(A.a.i(B.w(l)),n,m)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bEC,v)},
a8V:function a8V(d,e,f){this.a=d
this.b=e
this.c=f},
is8(d,e){return B.a6(d,!1).cd(B.eb(new C.h1h(e),!0,null,x.H))},
h1h:function h1h(d){this.a=d},
WV:function WV(d,e){this.c=d
this.a=e},
aFM:function aFM(d,e,f,g,h,i,j,k){var _=this
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
esQ:function esQ(d){this.a=d},
esP:function esP(){},
esR:function esR(d){this.a=d},
esO:function esO(d,e){this.a=d
this.b=e},
esS:function esS(){},
ess:function ess(d,e){this.a=d
this.b=e},
eso:function eso(d,e){this.a=d
this.b=e},
esz:function esz(d){this.a=d},
esA:function esA(d,e){this.a=d
this.b=e},
esB:function esB(d){this.a=d},
esu:function esu(d,e){this.a=d
this.b=e},
esv:function esv(d,e){this.a=d
this.b=e},
esw:function esw(d,e){this.a=d
this.b=e},
esx:function esx(d){this.a=d},
esy:function esy(d){this.a=d},
est:function est(d,e){this.a=d
this.b=e},
esq:function esq(d){this.a=d},
esr:function esr(d){this.a=d},
esH:function esH(d){this.a=d},
esI:function esI(d){this.a=d},
esG:function esG(d){this.a=d},
esJ:function esJ(d,e){this.a=d
this.b=e},
esF:function esF(d,e){this.a=d
this.b=e},
esK:function esK(d){this.a=d},
esE:function esE(d){this.a=d},
esL:function esL(d){this.a=d},
esD:function esD(d){this.a=d},
esM:function esM(d,e){this.a=d
this.b=e},
esC:function esC(d,e){this.a=d
this.b=e},
esN:function esN(d){this.a=d},
esp:function esp(d,e){this.a=d
this.b=e},
fQ1(){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o
var $async$fQ1=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if($.hwi){w=1
break}r=new C.fQ2()
t=4
q=x.s
w=7
return B.b(B.iB(B.a([r.$2("NgmyBlackletter",B.a(["UnifrakturCook-Bold.ttf"],q)),r.$2("NgmyOldStandard",B.a(["OldStandard-Regular.ttf","OldStandard-Bold.ttf","OldStandard-Italic.ttf"],q)),r.$2("NgmyAbril",B.a(["AbrilFatface-Regular.ttf"],q))],x.fG),x.H),$async$fQ1)
case 7:$.hwi=!0
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
return B.i($async$fQ1,v)},
bEZ(d){return A.Dn[B.ms(d)-1]+", "+A.oI[B.bK(d)-1]+" "+B.bW(d)+", "+B.bC(d)},
icD(d){var w,v,u,t,s
for(w="",v=0;v<13;++v){u=D.dwM[v]
t=u.a
s=u.b
while(d>=t){w+=s
d-=t}}return w},
hf9(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j={},i=x.s,h=B.a([],i)
for(w=0;w<d.length;++w){v=A.a.fw(d[w],B.ag("[ \\t]+",!0,!1,!1,!1))
A.d.v(h,new B.Y(v,new C.fOk(),B.U(v).k("Y<1>")))
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
continue}o=new C.fOm(j,h)
n=new C.fOl(s,o,e)
m=p-v
for(l=0;l<m;){k=A.o.aq(l+m+1,2)
if(n.$1(k))l=k
else m=k-1}u.push(l===0?"":J.j7(o.$1(l)))
j.a+=l}return u},
hbN(d,e){var w=new C.fq9()
return A.d.cJ(e,0,new C.fq7(w))>=A.d.cJ(d,0,new C.fq8(w))},
hto(d){var w,v,u=new B.aF($.Q().r,A.ai,null,null,B.a([],x.v))
u.D(new B.aZ(46,0))
w=d.a
u.D(new B.aq(w,0))
v=d.b
u.D(new B.aq(w,v-46))
u.D(new B.aq(w-46,v))
u.D(new B.aq(0,v))
u.D(new B.aq(0,46))
u.D(new B.bv())
return u},
Ab:function Ab(d,e,f,g,h,i,j,k,l,m){var _=this
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
ciU:function ciU(d){this.a=d},
ciS:function ciS(){},
ciT:function ciT(){},
tN:function tN(d,e){this.a=d
this.b=e},
C9:function C9(d,e){this.a=d
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
fQ2:function fQ2(){},
fOk:function fOk(){},
fOm:function fOm(d,e){this.a=d
this.b=e},
fOl:function fOl(d,e,f){this.a=d
this.b=e
this.c=f},
fq9:function fq9(){},
fqa:function fqa(){},
fq7:function fq7(d){this.a=d},
fq8:function fq8(d){this.a=d},
b2Q:function b2Q(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
ciV:function ciV(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ciW:function ciW(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ciX:function ciX(d){this.a=d},
bet:function bet(d){this.a=d},
bes:function bes(d,e){this.b=d
this.a=e},
bwr:function bwr(d){this.a=d},
baW:function baW(d,e){this.b=d
this.a=e},
btV:function btV(d,e){this.b=d
this.a=e},
hEC(d,e){return B.a6(d,!1).cd(B.eb(new C.h1k(e,null),!0,null,x.E))},
h1k:function h1k(d,e){this.a=d
this.b=e},
WW:function WW(d,e,f){this.c=d
this.d=e
this.a=f},
aFP:function aFP(){var _=this
_.d=null
_.e=0
_.f=1
_.w=_.r=0.5
_.x=1
_.y=!1
_.c=_.a=null},
etC:function etC(){},
etD:function etD(d){this.a=d},
etB:function etB(d,e){this.a=d
this.b=e},
etp:function etp(d){this.a=d},
etq:function etq(d){this.a=d},
etw:function etw(d){this.a=d},
etx:function etx(d,e){this.a=d
this.b=e},
etu:function etu(d){this.a=d},
etv:function etv(d,e,f){this.a=d
this.b=e
this.c=f},
etr:function etr(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ety:function ety(d,e){this.a=d
this.b=e},
ett:function ett(d,e){this.a=d
this.b=e},
etz:function etz(d){this.a=d},
ets:function ets(d,e){this.a=d
this.b=e},
etA:function etA(d,e){this.a=d
this.b=e},
be0:function be0(d,e,f){this.b=d
this.c=e
this.a=f},
ise(d){return B.a6(d,!1).cd(B.eb(new C.h1A(),!0,null,x.I))},
bCo(d,e){var w,v,u,t,s,r,q=B.bZ(20,0,!1,x.gR)
for(w=0;w<4;++w)for(v=w*5,u=v+4,t=0;t<5;++t){for(s=0,r=0;r<4;++r)s+=d[v+r]*e[r*5+t]
if(t===4)s+=d[u]
q[v+t]=s}return q},
hdf(d,e,f,g){return B.a([d,0,0,0,e,0,d,0,0,f,0,0,d,0,g,0,0,0,1,0],x.x)},
h1A:function h1A(){},
a14:function a14(d){this.a=d},
oU:function oU(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
aHd:function aHd(d,e,f,g,h,i,j,k,l){var _=this
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
_.aH=_.aR=_.aL=_.aG=_.a_=_.bb=_.bn=_.y2=0
_.b7=null
_.b6=0.25
_.bf=null
_.bK=0.5
_.aP=1
_.c9=_.bH=_.bm=0
_.cO=_.c6=!1
_.c=_.a=null},
f2v:function f2v(d){this.a=d},
f1n:function f1n(d,e){this.a=d
this.b=e},
f1L:function f1L(d,e){this.a=d
this.b=e},
f1V:function f1V(d){this.a=d},
f16:function f16(d){this.a=d},
f17:function f17(d){this.a=d},
f14:function f14(d){this.a=d},
f15:function f15(d){this.a=d},
f1E:function f1E(d,e){this.a=d
this.b=e},
f1F:function f1F(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f1R:function f1R(d,e,f){this.a=d
this.b=e
this.c=f},
f1Q:function f1Q(d,e){this.a=d
this.b=e},
f1S:function f1S(d,e){this.a=d
this.b=e},
f1P:function f1P(d,e){this.a=d
this.b=e},
f1U:function f1U(d,e,f){this.a=d
this.b=e
this.c=f},
f1T:function f1T(d,e){this.a=d
this.b=e},
f0X:function f0X(d){this.a=d},
f0Y:function f0Y(d){this.a=d},
f0Z:function f0Z(d){this.a=d},
f0W:function f0W(){},
f1_:function f1_(d,e){this.a=d
this.b=e},
f0V:function f0V(d,e){this.a=d
this.b=e},
f11:function f11(){},
f10:function f10(d,e){this.a=d
this.b=e},
f0U:function f0U(d,e){this.a=d
this.b=e},
f0R:function f0R(d,e){this.a=d
this.b=e},
f12:function f12(d){this.a=d},
f0T:function f0T(d,e){this.a=d
this.b=e},
f13:function f13(d){this.a=d},
f0S:function f0S(d,e){this.a=d
this.b=e},
f2k:function f2k(d,e){this.a=d
this.b=e},
f2r:function f2r(d){this.a=d},
f2s:function f2s(d,e){this.a=d
this.b=e},
f2t:function f2t(){},
f2l:function f2l(d,e){this.a=d
this.b=e},
f2j:function f2j(d,e){this.a=d
this.b=e},
f2m:function f2m(d,e){this.a=d
this.b=e},
f2i:function f2i(d,e){this.a=d
this.b=e},
f2n:function f2n(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f2h:function f2h(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f2o:function f2o(d){this.a=d},
f2p:function f2p(d,e){this.a=d
this.b=e},
f2q:function f2q(d){this.a=d},
f2g:function f2g(d){this.a=d},
f23:function f23(d){this.a=d},
f24:function f24(d){this.a=d},
f22:function f22(d,e){this.a=d
this.b=e},
f1Y:function f1Y(d,e){this.a=d
this.b=e},
f25:function f25(d){this.a=d},
f28:function f28(d){this.a=d},
f21:function f21(d){this.a=d},
f29:function f29(d){this.a=d},
f2a:function f2a(d){this.a=d},
f2b:function f2b(d){this.a=d},
f2c:function f2c(d){this.a=d},
f20:function f20(d){this.a=d},
f2d:function f2d(d){this.a=d},
f2_:function f2_(d){this.a=d},
f2e:function f2e(d,e){this.a=d
this.b=e},
f1Z:function f1Z(d,e){this.a=d
this.b=e},
f2f:function f2f(d){this.a=d},
f26:function f26(d){this.a=d},
f27:function f27(d){this.a=d},
f1I:function f1I(d){this.a=d},
f1H:function f1H(d){this.a=d},
f1J:function f1J(d,e){this.a=d
this.b=e},
f1G:function f1G(d,e){this.a=d
this.b=e},
f1K:function f1K(d){this.a=d},
f1A:function f1A(d){this.a=d},
f1z:function f1z(d){this.a=d},
f1B:function f1B(d){this.a=d},
f1y:function f1y(d){this.a=d},
f1C:function f1C(d,e){this.a=d
this.b=e},
f1x:function f1x(d,e){this.a=d
this.b=e},
f1w:function f1w(d,e){this.a=d
this.b=e},
f1e:function f1e(d){this.a=d},
f1f:function f1f(d){this.a=d},
f1g:function f1g(d){this.a=d},
f1h:function f1h(d){this.a=d},
f1i:function f1i(d){this.a=d},
f1j:function f1j(d){this.a=d},
f1k:function f1k(d){this.a=d},
f1l:function f1l(d){this.a=d},
f1m:function f1m(d){this.a=d},
f0A:function f0A(d){this.a=d},
f0B:function f0B(d){this.a=d},
f0C:function f0C(d){this.a=d},
f0D:function f0D(d){this.a=d},
f0E:function f0E(d){this.a=d},
f0z:function f0z(d){this.a=d},
f0F:function f0F(d){this.a=d},
f0G:function f0G(d){this.a=d},
f18:function f18(d){this.a=d},
f19:function f19(d){this.a=d},
f1a:function f1a(d){this.a=d},
f1b:function f1b(d){this.a=d},
f1c:function f1c(d){this.a=d},
f0K:function f0K(d){this.a=d},
f0L:function f0L(d){this.a=d},
f0M:function f0M(d){this.a=d},
f0N:function f0N(d){this.a=d},
f0O:function f0O(d){this.a=d},
f0J:function f0J(d){this.a=d},
f0P:function f0P(d){this.a=d},
f0I:function f0I(d){this.a=d},
f0Q:function f0Q(d){this.a=d},
f0H:function f0H(d){this.a=d},
f1D:function f1D(d){this.a=d},
f1v:function f1v(d){this.a=d},
f1r:function f1r(d){this.a=d},
f1q:function f1q(d){this.a=d},
f1s:function f1s(d,e){this.a=d
this.b=e},
f1p:function f1p(d,e){this.a=d
this.b=e},
f1t:function f1t(d,e){this.a=d
this.b=e},
f1o:function f1o(d,e){this.a=d
this.b=e},
f1u:function f1u(d){this.a=d},
f1O:function f1O(d){this.a=d},
f1N:function f1N(d,e,f){this.a=d
this.b=e
this.c=f},
f1M:function f1M(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f1X:function f1X(d,e){this.a=d
this.b=e},
f1W:function f1W(d,e){this.a=d
this.b=e},
f1d:function f1d(d){this.a=d},
f2u:function f2u(d){this.a=d},
bhC:function bhC(d,e){this.b=d
this.a=e},
in2(d){var w=A.a.i(d).length
if(w<=40)return 66
if(w<=80)return 54
if(w<=140)return 44
if(w<=220)return 36
return 30},
in3(d,e){var w,v,u,t,s,r,q,p,o,n=B.ag("\\S+",!0,!1,!1,!1).kY(0,d),m=B.C(n,B.a4(n).k("M.E"))
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
t=w.a+=A.a.aC(d,v,n)
p=m[r].b
p=A.a.aC(d,n,p.index+p[0].length)
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
bCZ(){var w=$.bC5,v=$.Rq
$.Rq=v+1
return w+"_"+v},
ii(d,e,f,g,h,i,j){return C.er(A.bn,!1,4279310375,A.aG,"",i,24,A.bt,A.a8,"",h,C.bCZ(),null,"","",0,!1,"",j,d,i,0,"",0,0,"",D.ct,D.fi,g,e,f)},
om(d,e,f,g){var w=f*9
return C.ii(D.eZ,d-f/2,e-w/32,f,w/16,g,0)},
i5X(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=4279310375
switch(d.a){case 0:w=B.a([],x.u)
for(v=[0.12,0.26,0.4,0.54,0.68,0.82,0.94],u=v.length,t=e&16777215,s=t|855638016,r=0;r<u;++r){q=v[r]
p=$.bC5
o=$.Rq
$.Rq=o+1
w.push(new C.eP(p+"_"+o,D.fi,0,q,1,0.0016,"",24,A.a8,A.bt,A.aG,k,A.bn,null,D.bk,s,s,0,0,!1,"",0,D.ct,0,"","","","","",!1,0))}for(v=[0.18,0.5,0.82],u=v.length,s=t|570425344,r=0;r<u;++r){n=v[r]
p=$.bC5
o=$.Rq
$.Rq=o+1
w.push(new C.eP(p+"_"+o,D.fi,n,0,0.004,1,"",24,A.a8,A.bt,A.aG,k,A.bn,null,D.bk,s,s,0,0,!1,"",0,D.ct,0,"","","","","",!1,0))}w.push(C.om(0.88,0.1,0.5,f&16777215|855638016))
w.push(C.om(0.1,0.92,0.6,t|704643072))
return w
case 1:w=e&16777215
v=(w|2852126720)>>>0
u=f&16777215
t=(u|2852126720)>>>0
return B.a([C.ii(D.bk,0.08,0.08,0.5,0.003,v,0),C.ii(D.bk,0.58,0.08,0.004,0.06,v,0),C.ii(D.bk,0.58,0.14,0.34,0.003,v,0),C.ii(D.bk,0.92,0.14,0.004,0.08,(w|2281701376)>>>0,0),C.ii(D.bk,0.08,0.8,0.004,0.14,t,0),C.ii(D.bk,0.08,0.94,0.6,0.003,t,0),C.om(0.58,0.08,0.05,e),C.om(0.92,0.22,0.05,e),C.om(0.08,0.8,0.05,f),C.om(0.68,0.94,0.05,f),C.om(0.9,0.9,0.55,u|570425344)],x.u)
case 2:w=e&16777215
v=f&16777215
return B.a([C.ii(D.lt,0.62,0.04,0.34,0.2,w|855638016,0.2),C.ii(D.lt,0.02,0.74,0.42,0.24,v|771751936,-0.15),C.ii(D.lt,0.7,0.8,0.22,0.12,w|1140850688,0),C.ii(D.lt,0.05,0.05,0.16,0.09,v|1426063360,0)],x.u)
case 3:w=e&16777215
v=f&16777215
return B.a([C.om(0.5,0.5,1.5,w|335544320),C.om(0.5,0.5,1.15,w|402653184),C.om(0.5,0.5,0.8,v|436207616),C.om(0.95,0.05,0.4,v|855638016),C.om(0.05,0.97,0.5,w|704643072)],x.u)
case 4:w=e&16777215
v=f&16777215
return B.a([C.om(0.85,0.08,0.7,w|1140850688),C.om(0.1,0.35,0.5,v|855638016),C.om(0.9,0.62,0.55,v|771751936),C.om(0.15,0.95,0.8,w|939524096)],x.u)
case 5:w=e&16777215
v=f&16777215
return B.a([C.ii(D.bk,-0.1,0.7,1.2,0.06,w|671088640,-0.04),C.ii(D.bk,-0.1,0.78,1.2,0.07,v|872415232,0.035),C.ii(D.bk,-0.1,0.86,1.2,0.08,w|1073741824,-0.03),C.ii(D.bk,-0.1,0.94,1.2,0.1,v|1426063360,0.02),C.om(0.85,0.12,0.3,v|855638016)],x.u)
case 6:w=e&16777215
return B.a([C.om(0.5,0.2,0.65,(w|3422552064)>>>0),C.om(0.5,0.2,0.95,w|855638016),C.ii(D.bk,-0.05,0.84,1.1,0.2,2570782564,-0.02),C.ii(D.bk,-0.05,0.9,1.1,0.14,3139312459,0.02)],x.u)
case 7:w=e&16777215
return B.a([C.ii(D.kb,-0.1,0.78,0.7,0.2,w|1426063360,0),C.ii(D.kb,0.35,0.74,0.8,0.24,f&16777215|1711276032,0),C.ii(D.kb,0.15,0.86,0.6,0.14,1712265002,0),C.om(0.82,0.1,0.22,(w|2852126720)>>>0)],x.u)
case 8:w=B.a([],x.u)
for(m=0;m<16;++m){v=D.d6c[m]
u=A.o.F(m,3)===0
t=u?0.035:0.02
s=(m&1)===0?e:f
s=((u?255:170)<<24|s&16777215)>>>0
p=t*9
o=$.bC5
l=$.Rq
$.Rq=l+1
w.push(new C.eP(o+"_"+l,D.fi,v.a-t/2,v.b-p/32,t,p/16,"",24,A.a8,A.bt,A.aG,k,A.bn,null,D.eZ,s,s,0,0,!1,"",0,D.ct,0,"","","","","",!1,0))}w.push(C.om(0.85,0.12,0.35,f&16777215|570425344))
return w
case 9:w=e&16777215
v=f&16777215|570425344
return B.a([C.ii(D.kb,0.35,-0.1,0.3,0.62,w|855638016,0),C.ii(D.kb,0.05,-0.1,0.3,0.55,v,-0.5),C.ii(D.kb,0.65,-0.1,0.3,0.55,v,0.5),C.om(0.5,0.04,0.45,w|1711276032)],x.u)
case 10:w=(f&16777215|2281701376)>>>0
return B.a([C.ii(D.bk,0.06,0.04,0.88,0.002,e,0),C.ii(D.bk,0.06,0.96,0.88,0.002,e,0),C.ii(D.bk,0.06,0.04,0.004,0.92,e,0),C.ii(D.bk,0.936,0.04,0.004,0.92,e,0),C.ii(D.bk,0.09,0.07,0.82,0.001,w,0),C.ii(D.bk,0.09,0.93,0.82,0.001,w,0)],x.u)
case 11:w=e&16777215
return B.a([C.ii(D.kc,-0.1,0.05,0.7,0.12,w|855638016,-0.1),C.ii(D.kc,0.45,0.78,0.7,0.1,f&16777215|1073741824,-0.1),C.ii(D.kc,-0.1,0.9,0.6,0.06,w|1426063360,-0.1)],x.u)
case 12:w=f&16777215
v=e&16777215
return B.a([C.ii(D.bk,0,0,0.3,0.09,w|1140850688,0),C.ii(D.bk,0.7,0.9,0.3,0.1,v|1426063360,0),C.ii(D.bk,0.82,0.04,0.12,0.07,w|771751936,0),C.ii(D.bk,0.04,0.82,0.18,0.08,v|855638016,0)],x.u)
case 13:w=e&16777215
v=w|1140850688
u=f&16777215|1140850688
return B.a([C.ii(D.eZ,0.62,0.02,0.5,0.16,v,0.6),C.ii(D.eZ,0.78,0.12,0.4,0.12,u,0.9),C.ii(D.eZ,-0.12,0.8,0.5,0.16,u,-0.6),C.ii(D.eZ,-0.05,0.9,0.4,0.12,v,-0.9),C.om(0.9,0.9,0.3,w|855638016)],x.u)
case 14:w=f&16777215|1711276032
return B.a([C.ii(D.bk,0.09,0.12,0.16,0.006,e,0),C.ii(D.bk,0.05,0.03,0.9,0.001,w,0),C.ii(D.bk,0.05,0.97,0.9,0.001,w,0)],x.u)}},
ijv(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3){var w,v,u,t,s,r,q,p,o,n=4279310375,m=4280640491,l=4280172719
$.bC5=j
$.Rq=0
w=A.a.i(a6)
if(w.length===0)w=d.y
v=A.a.i(f)
u=b1==null?d.x:b1
t=new C.fLJ()
s=b3?0:d.e
r=b3?0:d.f
q=B.a([],x.u)
if(g!=null&&g.length!==0)q.push(C.er(A.bn,!1,n,A.aG,"ngmy_quote_background",m,24,A.bt,A.a8,"",1,C.bCZ(),g,"","",0,!1,"",0,D.bk,l,2,"",0,0,"",D.ct,D.lR,1,0,0))
if(a9)A.d.v(q,C.i5X(d.d,d.r,d.w))
if(a7)q.push(t.$9$align$weight("\u201c",0.08,A.j.E(a8-0.13,0,1),0.84,0.1,200,d.r,e,A.u))
p=B.ag("[*~^]",!0,!1,!1,!1)
p=C.in2(B.aL(w,p,""))
o=A.a.q(w,B.ag("[*^]",!0,!1,!1,!1))?0.85:1
q.push(new C.fLI(a8,h,k,e,b2,i).$3(w,p*b0*o,u))
if(v.length!==0)q.push(t.$10$align$style$weight("\u2014 "+v,0.09,A.j.E(a8+0.39,0,0.9),0.82,0.05,30,(u&16777215|3707764736)>>>0,e,A.cH,A.a8))
p=u&16777215
q.push(t.$8$weight("NGMY",0.3,0.925,0.4,0.028,22,(p|3003121664)>>>0,A.u))
q.push(t.$8$weight("New Global Movement for Youth",0.1,0.96,0.8,0.025,14,(p|2566914048)>>>0,A.a8))
if(a0!=null&&a0.length!==0)q.push(C.er(A.bn,!1,n,A.aG,"ngmy_quote_logo",m,24,A.bt,A.a8,a1,a3*9/16,C.bCZ(),a0,"","",0,!1,a2,0,D.bk,l,2,"",0,0,"",D.ct,D.lR,a3,a4,a5))
return C.rW(s,r,0,0,q,j+"_slide",D.qX,"","","",D.dm)},
rV:function rV(d,e){this.a=d
this.b=e},
mq:function mq(d,e,f,g,h,i,j,k,l,m){var _=this
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
fLJ:function fLJ(){},
fLI:function fLI(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
hWA(d){var w,v,u,t,s
if(!x.f.b(d))return null
w=J.a7(d)
v=B.bj(B.w(w.h(d,"at")))
u=w.h(d,"outline")
t=B.w(u==null?"":u)
if(v==null||t.length===0)return null
u=x.j
if(u.b(w.h(d,"extras"))){u=J.b7(u.a(w.h(d,"extras")),new C.ckp(),x.N)
s=B.C(u,u.$ti.k("ak.E"))}else s=B.a([],x.s)
u=v.bT()
w=w.h(d,"request")
return new C.Ac(u,t,s,B.w(w==null?"":w))},
fTr(){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$fTr=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if($.hwF){w=1
break}$.hwF=!0
t=4
w=7
return B.b(B.az(),$async$fTr)
case 7:r=e
q=B.aT(J.t(r.a,"ngmy_slides_ai_history_v1"))
if(q==null||q.length===0){w=1
break}p=A.Y.aQ(0,q,null)
if(!x.f.b(p)){w=1
break}for(k=J.i7(p),k=k.gae(k),j=x.j,i=x.o;k.C();){o=k.gR(k)
n=B.a([],i)
if(j.b(o.b))for(h=J.aU(j.a(o.b));h.C();){m=h.gR(h)
l=C.hWA(m)
if(l!=null)J.c6(n,l)}$.Dm.c3(0,B.w(o.a),new C.fTs(n))}C.hcU()
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
return B.i($async$fTr,v)},
hcU(){var w,v=new B.V(Date.now(),0,!1).bR(-12e8)
for(w=new B.dq($.Dm,$.Dm.r,$.Dm.e);w.C();)J.nR(w.d,new C.fyd(v))
$.Dm.bt($.Dm,new C.fye())},
aPT(){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$aPT=B.e(function(d,a0){if(d===1){t.push(a0)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$aPT)
case 6:s=a0
m=x.N
l=x.z
r=B.T(m,l)
for(k=new B.ck($.Dm,B.a4($.Dm).k("ck<1,2>")).gae(0),j=x.d;k.C();){i=k.d
i.toString
q=i
i=q.a
p=B.a([],j)
for(h=J.aU(q.b);h.C();){o=h.gR(h)
g=o
J.c6(p,B.I(["at",g.a.aa().ag(),"outline",g.b,"extras",g.c,"request",g.d],m,l))}J.aK(r,i,p)}n=r
w=7
return B.b(s.aB("String","ngmy_slides_ai_history_v1",A.Y.az(n,null)),$async$aPT)
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
return B.i($async$aPT,v)},
inG(d,e,f,g){var w,v,u
if(d.length===0||A.a.i(f).length===0)return
C.hcU()
w=$.Dm.c3(0,d,new C.fTu())
v=Date.now()
u=B.C(e,B.a4(e).k("ch.E"))
J.pX(w,0,new C.Ac(new B.V(v,0,!1),f,u,g))
C.aPT()},
inD(d){var w,v=$.Dm.h(0,d)
if(v==null||J.cr(v))return
w=J.cC(v)
w.cB(v,0)
if(w.gau(v))$.Dm.W(0,d)
C.aPT()},
Ac:function Ac(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ckp:function ckp(){},
fTs:function fTs(d){this.a=d},
fyd:function fyd(d){this.a=d},
fye:function fye(){},
fTu:function fTu(){},
inI(d){return A.d.dP(D.wV,new C.fTx(d),new C.fTy())},
hWy(d){var w
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
hWx(d){var w
switch(d.a){case 0:w=D.app
break
case 1:w=A.zh
break
case 2:w=A.PJ
break
case 3:w=I.ap4
break
case 4:w=A.apV
break
case 5:w=A.mj
break
default:w=null}return w},
i9d(d){var w,v,u,t=A.a.i(d).toLowerCase()
if(t.length===0)return null
for(w=0;w<109;++w){v=D.RO[w]
if(v.toLowerCase()===t)return v}for(w=0;w<109;++w){v=D.RO[w]
if(!B.cS(v.toLowerCase(),t,0))u=B.cS(t,v.toLowerCase(),0)
else u=!0
if(u)return v}return null},
hWz(d){var w,v,u,t,s,r,q,p,o=B.a([],x.ez)
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
o.push(q)}return A.Y.az(B.I(["title",d.a,"style",d.b,"logo_frame",d.d,"logo_ring",d.e,"photo_frame",d.f,"photo_ring",d.r,"slides",o],u,t),null)},
inE(d,e,f,g,h){var w=new B.N(D.wV,new C.fTq(),x.eC).aO(0,", "),v=""+d,u=C.hCq(h),t=F.fN7(h),s=C.hyk(g),r=e.q(0,D.Jj)?'- New slides get an "emoji".\n':"",q=e.q(0,D.Jk)?'- New slides get an "icon3d" from: '+A.d.aO(D.RO,", ")+".\n":"",p=e.q(0,D.DY)?'- New content slides get an "image_query" (2-3 English words).\n':""
return"You edit an existing presentation. Here it is as JSON:\n"+f+"\n\nThe presenter is looking at slide "+v+'.\n\nWHAT THEY WANT CHANGED (may be informal):\n"""'+h+'"""\n\nRules:\n- Do exactly what they ask: add, remove, move, shorten, lengthen or rewrite slides, change the tone, the language or the style ('+w+'). "This slide" / "here" means slide '+v+". New slides go where they say (or right after slide "+v+').\n- Keep every slide they did not ask about exactly as it is.\n- Same limits as before: titles max 7 words, 3 to 5 bullets of max 12 words, never invent prices, dates or statistics.\n- LANGUAGE: keep the presentation\'s current language unless they ask for another one; if they do, translate EVERY slide. JSON keys and the "kind", "style", "icon3d" and "image_query" values stay in English.\n- TRANSLATING OR REWORDING: change only the words. Keep "style", "kind", "emoji", "icon3d", "image_query", "picture" and the frame/ring values exactly as they are, with the same number of slides and bullets.\n- VOICE: write the way a real, friendly person talks and writes to someone they respect. Short plain sentences. Everyday words that people really use today. No corporate or robotic phrasing ("leverage", "synergy", "empower the ecosystem", "in today\'s dynamic landscape"), no made-up or rare words, no stacked jargon, no lecture tone. Explain the Civic registry, the AI, and any other topic the way you would explain it to a neighbour. If the language is Swahili, use the Swahili people speak and write every day in Kenya and Tanzania: real common words, natural word order, and never an English word forced into Swahili grammar or an invented Swahili word. Check that each word is one an ordinary speaker would understand.\n'+u+"\n"+t+'\n- Keep "logo_frame", "logo_ring", "photo_frame" and "photo_ring" unless they ask to change how the logo or pictures look.\n- PICTURE LOOK: "logo_frame" and "photo_frame" are one of: circle, rounded, triangle, hexagon, diamond, arch, or "" (as is). "logo_ring" and "photo_ring" are one of: gold, platinum, glow, rainbow, double, neon, framed, rosegold, jewels, aurora, or "" (none). Follow what the request says (e.g. "my picture in a circle with a gold ring"); if it says nothing, choose what suits the look (luxury \u2192 gold, neon/night \u2192 neon, clean \u2192 rounded with no ring).\n- BIO LINK: if they ask to put their bio link / link page / socials / "my links" in the presentation, add ONE slide with kind "bio" (title like "Connect with me", a one-line inviting subtitle) \u2014 usually just before the closing slide, or where they say. Their real Bio page (with clickable links) is shown on a phone on that slide.\n'+s+"\n"+r+q+p+'- Reply with the WHOLE presentation as JSON only, no markdown, same shape:\n{"title":"...","style":"...","logo_frame":"","logo_ring":"","photo_frame":"","photo_ring":"","slides":[{"kind":"...","title":"...","subtitle":"...","bullets":[],"notes":"...","emoji":"","icon3d":"","image_query":""}]}\n'},
inF(d,e,f,g,h,i){var w,v,u,t,s='- "emoji": ONE emoji that fits the slide (e.g. \ud83c\udf89 \ud83d\ude80 \ud83c\udf3f \ud83d\udca1).\n',r=f?"- A document is attached (read it all). Rewrite its content as the slides in the same language: keep its facts, names, numbers, dates and the order of its sections, and never invent facts it does not contain.\n":"",q=new B.N(D.wV,new C.fTt(),x.eC).aO(0,", "),p=new B.fd("")
if(e.q(0,D.Jj)){p.a=s
w=s}else w=""
if(e.q(0,D.Jk))w=p.a=w+('- "icon3d": ONE name copied exactly from this list that fits the slide: '+A.d.aO(D.RO,", ")+".\n")
if(e.q(0,D.DY))p.a=w+'- "image_query": 2-3 simple English words for a real photo that fits the slide (e.g. "city skyline", "students classroom").\n'
w=C.hCq(d)
v=F.fN7(d)
u=C.hyk(g)
t=i==="auto"?"pick the best of: "+q+" (match the mood they describe: nature, vibe, celebration, colorful, professional...)":'use "'+i+'"'
return'You design presentation slides. Write a presentation from the user\'s request.\n\nUSER REQUEST (spoken, may be informal):\n"""'+d+'"""\n\nRules:\n'+r+"- Exactly "+h+' slides.\n- Slide 1 has kind "title". The last slide has kind "closing" (thank-you / call to action).\n- Middle slides mostly kind "bullets" (3 to 5 short bullets, max 12 words each). You may use one "section" divider and one "quote" slide when it fits.\n- Titles are short and punchy (max 7 words). Use the user\'s own names, facts and details; never invent prices, dates or statistics they did not give.\n- "notes": 1-2 sentences the presenter can say.\n- LANGUAGE: if the request names a language (e.g. "in Swahili", "en fran\xe7ais", "en espa\xf1ol", "in Arabic"), write EVERY title, subtitle, bullet and note in that language, with correct spelling and accents. If no language is named, write in the language the request itself is written in. Keep the JSON keys and the "kind", "style", "icon3d" and "image_query" values in English.\n- VOICE: write the way a real, friendly person talks and writes to someone they respect. Short plain sentences. Everyday words that people really use today. No corporate or robotic phrasing ("leverage", "synergy", "empower the ecosystem", "in today\'s dynamic landscape"), no made-up or rare words, no stacked jargon, no lecture tone. Explain the Civic registry, the AI, and any other topic the way you would explain it to a neighbour. If the language is Swahili, use the Swahili people speak and write every day in Kenya and Tanzania: real common words, natural word order, and never an English word forced into Swahili grammar or an invented Swahili word. Check that each word is one an ordinary speaker would understand.\n'+w+"\n"+v+'\n- PICTURE LOOK: "logo_frame" and "photo_frame" are one of: circle, rounded, triangle, hexagon, diamond, arch, or "" (as is). "logo_ring" and "photo_ring" are one of: gold, platinum, glow, rainbow, double, neon, framed, rosegold, jewels, aurora, or "" (none). Follow what the request says (e.g. "my picture in a circle with a gold ring"); if it says nothing, choose what suits the look (luxury \u2192 gold, neon/night \u2192 neon, clean \u2192 rounded with no ring).\n- BIO LINK: if they ask to put their bio link / link page / socials / "my links" in the presentation, add ONE slide with kind "bio" (title like "Connect with me", a one-line inviting subtitle) \u2014 usually just before the closing slide, or where they say. Their real Bio page (with clickable links) is shown on a phone on that slide.\n'+u+'\n- "style": '+t+".\n"+p.u(0)+'- Reply with JSON only, no markdown, in this shape:\n{"title":"...","style":"...","logo_frame":"","logo_ring":"","photo_frame":"","photo_ring":"","slides":[{"kind":"title","title":"...","subtitle":"...","bullets":[],"notes":"...","emoji":"","icon3d":"","image_query":""}]}\n'},
aie(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=null,a2="bullets",a3=A.a.i(a6),a4=J.DL(a3,"{"),a5=J.h4W(a3,"}")
if(a4<0||a5<=a4)return a1
a3=J.Mc(a3,a4,a5+1)
try{w=A.Y.aQ(0,a3,a1)
q=x.f
if(!q.b(w))return a1
v=J.t(w,"slides")
p=x.j
if(!p.b(v)||J.cr(v))return a1
u=B.a([],x.aC)
for(o=J.aU(v),n=x.s,m=x.N;o.C();){t=o.gR(o)
if(!q.b(t))continue
if(p.b(J.t(t,a2))){l=J.b7(p.a(J.t(t,a2)),new C.fRo(),m).bY(0,new C.fRp())
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
f=C.i9d(B.w(f==null?"":f))
if(f==null)f=""
e=J.t(t,"image_query")
if(e==null)e=J.t(t,"imageQuery")
e=A.a.i(B.w(e==null?"":e))
d=J.t(t,"picture")
d=B.ca(B.w(d==null?0:d),a1)
if(d==null)d=0
J.c6(u,new C.a92(l.toLowerCase(),j,i,s,h,g,f,e,d))}if(J.ad(u)===0)return a1
q=J.t(w,"style")
r=A.a.i(B.w(q==null?a7:q)).toLowerCase()
q=J.t(w,"title")
q=A.a.i(B.w(q==null?J.fs(u).b:q))
p=A.d.aV(D.wV,new C.fRq(r))?r:a7
o=C.fxt(J.t(w,"logo_frame"),D.Dj)
n=C.fxt(J.t(w,"logo_ring"),D.Dc)
m=C.fxt(J.t(w,"photo_frame"),D.Dj)
l=C.fxt(J.t(w,"photo_ring"),D.Dc)
return new C.asJ(q,p,u,o,n,m,l)}catch(a0){return a1}},
a2R(d,e){return(A.o.E(e,0,255)<<24|d&16777215)>>>0},
hBx(f9,g0,g1,g2,g3,g4,g5,g6,g7,g8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4=null,e5="title",e6="orb1",e7="drift",e8="orb2",e9="logo",f0="hero",f1="photo",f2="float3d",f3="bar",f4="pulse",f5="sub",f6=g2.q(0,D.DZ),f7=f6?C.i2l():e4,f8=f7==null
if(f8)w=e4
else{v=new B.e4()
v.d_(f7.w+1)
u=f7.a
t=B.bq(u.b,!0,x.dL)
A.d.e0(t,v)
s=u.c
s=new C.o9("luxe",u.a,A.mj,t,u.e,u.f,B.a([s,u.d,s],x.t),D.dm)
w=s}if(w==null)w=C.inI(f9.b)
r=g2.q(0,D.a7Z)||f6
q=g2.q(0,D.Jj)
p=g2.q(0,D.TM)
o=new C.fLN()
n=B.a([],x.g)
m=new C.fLQ(o,w,r)
l=new C.fLP(o,r)
k=new C.fLO(o,r)
j=(g3==null?"":g3).length!==0
u=f9.c
for(s=w.w,f8=!f8,i=g7==null,h=g6==null,g=f9.f,f=f9.r,e=g5==null,d=g4==null,a0=f9.d,a1=f9.e,a2=w.f,a3=w.d,a4=w.r,a5=x.u,a6=J.a7(g0),a7=!A.d.aV(u,new C.fLM(g8)),a8=g1==null,a9=x.s,b0=0,b1=0;b1<u.length;b1=b6){b2=u[b1]
b3=a3[A.o.F(b1,a3.length)]
b4=A.o.F(b1,3)
b5=a4[b4]
b6=b1+1
b7=a4[b6%3]
b8=A.o.F(b1,5)
b9=D.d7S[b8]
c0=D.d6J[b8]
c1=B.a([],a5)
c2=a6.h(g0,b1)
c3=c2==null
c4=c3?e4:c2.a
c5=c3?e4:c2.b
c3=b2.x
c6=c3>0&&c3<=g8.length
if(c6)c5=g8[c3-1]
else if(g8.length!==0&&a7&&!D.fan.q(0,b2.a)){c7=b0+1
c5=g8[A.o.F(b0,g8.length)]
b0=c7}c8=q?b2.f:""
c3=c5==null
c9=c3?c4:c5
if(c6)d0=c5
else d0=c4==null?c5:c4
d1=!c6&&c4!=null
if(p)c1.push(l.$7$key(D.eZ,0.62-b8*0.36,-0.55+b4*0.18,1.15,2,(A.o.E(31,0,255)<<24|b5&16777215)>>>0,"pano"))
A:{d2=b2.a
if("title"===d2){c1.push(l.$8$fx$key(D.eZ,0.7,-0.25,0.46,0.82,(A.o.E(51,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.eZ,-0.08,0.68,0.24,0.43,(A.o.E(46,0,255)<<24|b7&16777215)>>>0,e7,e8))
if(j){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.41,0.04,0.18,0.27,D.n9,450,e9))}else if(d0!=null){b4=d1?f0:f1
c1.push(k.$9$anim$delay$fx$key(d0,0.42,0.04,0.16,0.28,c0,500,d1?f2:"",b4))}else if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,0.4,0.04,0.2,0.24,64,A.K,D.qY,500,f2,f0))
c1.push(l.$8$fx$key(D.bk,0.4,0.66,0.2,0.012,b5,f4,f3))
c1.push(m.$10$align$anim$key$weight(b2.b,0.08,0.33,0.84,0.3,54,A.K,b9,e5,A.u))
c1.push(m.$10$align$color$delay$key(b2.c,0.12,0.7,0.76,0.14,24,A.K,a2,300,f5))
d3=D.TJ
break A}if("section"===d2){c1.push(l.$8$fx$key(D.eZ,0.64,0.46,0.42,0.75,(A.o.E(42,0,255)<<24|b5&16777215)>>>0,e7,e6))
if(d0!=null){b4=!c3&&!d1?f1:f0
c1.push(k.$8$anim$fx$key(d0,0.7,0.2,0.24,0.44,c0,d1?f2:"",b4))}else c1.push(l.$9$fx$key$rotation(D.lt,0.78,0.1,0.18,0.32,(A.o.E(64,0,255)<<24|b7&16777215)>>>0,e7,e8,0.3))
c1.push(l.$8$fx$key(D.bk,0.08,0.6,0.14,0.014,b5,f4,f3))
b4=b2.b
c1.push(m.$9$anim$key$weight(c8.length===0?b4:c8+"  "+b4,0.08,0.34,0.62,0.24,46,b9,e5,A.u))
c1.push(m.$9$color$delay$key(b2.c,0.08,0.64,0.6,0.14,22,a2,250,f5))
d3=D.DW
break A}if("quote"===d2){b4=b5&16777215
c1.push(l.$8$fx$key(D.eZ,-0.12,-0.2,0.36,0.64,(A.o.E(36,0,255)<<24|b4)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.eZ,0.82,0.66,0.26,0.46,(A.o.E(38,0,255)<<24|b7&16777215)>>>0,e7,e8))
c1.push(m.$11$anim$color$fx$key$weight("\u201c",0.06,0.02,0.2,0.36,140,D.n9,(A.o.E(204,0,255)<<24|b4)>>>0,f4,"quote",A.u))
c1.push(m.$11$align$anim$key$style$weight(b2.b,0.12,0.3,0.76,0.34,36,A.K,b9,e5,A.cH,A.V))
b4=b2.c
c1.push(m.$10$align$color$delay$key(b4.length===0?"":"\u2014 "+b4,0.12,0.68,0.76,0.12,22,A.K,a2,300,f5))
if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,j?0.72:0.82,0.06,0.12,0.2,52,A.K,D.qY,500,f2,f0))
d3=D.n8
break A}if("bio"===d2)b4=(a8?"":g1).length!==0
else b4=!1
if(b4){c1.push(l.$8$fx$key(D.eZ,0.58,0.04,0.44,0.8,(A.o.E(42,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.bk,0.08,0.62,0.14,0.014,b5,f4,f3))
b4=b2.b
c1.push(m.$9$anim$key$weight(c8.length===0?b4:c8+"  "+b4,0.07,0.3,0.52,0.28,46,b9,e5,A.u))
c1.push(m.$9$color$delay$key(b2.c,0.07,0.66,0.5,0.16,22,a2,250,f5))
b4=o.$0()
g1.toString
b8=r?D.ve:D.ct
c1.push(new C.eP(b4,D.a7X,0.64,0.05,0.27,0.9,g1,24,A.a8,A.bt,A.aG,4279310375,A.bn,e4,D.bk,4280640491,4280172719,2,0,!1,"",0,b8,r?350:0,"bio","","","","",!1,0))
d3=D.n8
break A}if("closing"===d2){c1.push(l.$8$fx$key(D.eZ,-0.15,-0.3,0.5,0.9,(A.o.E(46,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.eZ,0.78,0.62,0.3,0.54,(A.o.E(51,0,255)<<24|b7&16777215)>>>0,e7,e8))
if(j){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.41,0.05,0.18,0.27,D.n9,400,e9))}else if(d0!=null){b4=d1?f0:f1
c1.push(k.$9$anim$delay$fx$key(d0,0.42,0.05,0.16,0.28,c0,450,d1?f2:"",b4))}else if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,0.4,0.05,0.2,0.24,64,A.K,D.qY,450,f2,f0))
c1.push(l.$8$fx$key(D.bk,0.42,0.61,0.16,0.012,b5,f4,f3))
c1.push(m.$10$align$anim$key$weight(b2.b,0.1,0.34,0.8,0.26,52,A.K,b9,e5,A.u))
c1.push(m.$10$align$color$delay$key(b2.c,0.14,0.65,0.72,0.16,24,A.K,a2,300,f5))
d3=D.TJ
break A}d4=b2.d
if(d4.length===0&&b2.c.length!==0)d4=B.a([b2.c],a9)
d5=c9!=null
d6=(b1&1)===1&&d5
d7=d6?0.4:0.07
b4=d6?-0.1:0.8
c1.push(l.$8$fx$key(D.eZ,b4,0.52,0.3,0.54,(A.o.E(36,0,255)<<24|b7&16777215)>>>0,e7,e8))
b4=d6?0.86:-0.12
c1.push(l.$8$fx$key(D.eZ,b4,-0.18,0.26,0.46,(A.o.E(30,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$7$key(D.bk,d6?0.988:0,0,0.012,1,b5,"rail"))
b4=b2.b
b4=c8.length===0?b4:c8+"  "+b4
c1.push(m.$9$anim$key$weight(b4,d7,0.08,d5?0.53:0.86,0.16,38,b9,e5,A.u))
c1.push(l.$8$fx$key(D.bk,d7,0.25,0.12,0.012,b5,f4,f3))
b4=A.d.aO(d4,"\n")
b8=d5?0.53:0.7
c1.push(m.$11$anim$bullets$color$delay$key(b4,d7,0.31,b8,0.6,d4.length>4?21:24,D.Jh,!0,a2,250,f5))
if(d5){d8=!c3
d9=d8?0.29:0.24
if(d6)e0=0.06
else e0=d8?0.67:0.7
b4=d8?0.22:0.26
b8=d8?0.56:0.44
c3=d8?f1:f0
c1.push(k.$9$anim$delay$fx$key(c9,e0,b4,d9,b8,c0,400,d8?"":f2,c3))}d3=D.n8}if(j&&d2!=="title"&&d2!=="closing"){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.885,0.035,0.085,0.13,D.dm,200,e9))}for(b4=c1.length,e1=0;e1<b4;++e1){e2=c1[e1]
b8=e2.fx
if(b8==="logo"){e2.go=d?a0:g4
e2.id=e?a1:g5}else if(b8==="photo"){e2.go=h?g:g6
e2.id=i?f:g7}}if(f8)C.i4_(c1,b1,o,f7)
b4=o.$0()
if(f8){b8=f7.r
b8=b8[A.o.F(b1,b8.length)]}else b8=r?D.dze[A.o.F(b1,6)]:s
n.push(new C.m0(b4,b2.b,b2.e,d3,b3.a,b3.b,b8,0,"",0,c1))}e3=A.a.i(f9.a)
if(e3.length===0)e3="AI Presentation"
f8=o.$0()
return C.Cn(e4,e4,e4,e4,D.DV,5,!1,e4,e4,e4,e4,e4,f8,e4,!1,e4,e3.length>60?A.a.aC(e3,0,60):e3,e4,e4,n,"office_blue",e4,!1,e4)},
fOa(d,e){var w=0,v=B.j(x.gI),u,t,s,r,q,p,o,n,m
var $async$fOa=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:o=e.q(0,D.DY)
n=e.q(0,D.Jk)
if(!o&&!n){u=D.a6U
w=1
break}t=B.a([],x.d5)
for(s=d.c,r=0;r<s.length;++r)t.push(new C.fOd(o,s[r],n,$.i7V,r).$0())
s=B.T(x.S,x.aH)
m=J
w=3
return B.b(B.iB(t,x.e),$async$fOa)
case 3:q=m.aU(g)
case 4:if(!q.C()){w=5
break}p=q.gR(q)
s.n(0,p.a,p.b)
w=4
break
case 5:u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fOa,v)},
fNa(d,e,f,g,h,i,j,k,l){var w=0,v=B.j(x.I),u,t,s
var $async$fNa=B.e(function(m,n){if(m===1)return B.f(n,v)
for(;;)switch(w){case 0:h.$1("Writing your "+j+" slides\u2026")
t=i.length
t=C.inF(d,e,k.length!==0,t,j,l)
s=C
w=3
return B.b(C.aPb(t,"The AI could not write the slides. Try describing it again.",l==="auto"?"colorful":l,k),$async$fNa)
case 3:u=s.aPx(n,e,h,f,g,i)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fNa,v)},
bED(d,e,f,g,h,i,j,k){var w=0,v=B.j(x.I),u,t,s,r,q,p,o
var $async$bED=B.e(function(l,m){if(l===1)return B.f(m,v)
for(;;)switch(w){case 0:if(e.length!==0){t=B.aR(x.N)
for(s=B.dZ(f,f.r,B.a4(f).c),r=s.$ti.c;s.C();){q=s.d
t.J(0,(q==null?r.a(q):q).b)}C.inG(e,t,i,k)}if(h!=null)h.$1("Making your changes\u2026")
p=C.aie(i,"colorful")
t=C.inE(d,f,i,j.length,k)
s=p==null?null:p.b
o=C
w=3
return B.b(C.aPb(t,"The AI could not make that change. Try saying it another way.",s==null?"colorful":s,A.hY),$async$bED)
case 3:u=o.aPx(m,f,h,g,D.ed4,j)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bED,v)},
aPb(d,e,f,g){var w=0,v=B.j(x.dO),u,t,s,r,q,p,o,n
var $async$aPb=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:w=3
return B.b(B.vQ(null,""),$async$aPb)
case 3:n=i
if(A.a.i(n).length===0)throw B.W("AI is not set up yet. AI is not available right now. Please try again later.")
t=B.nl(n)
s=null,r=0
case 4:if(!(r<2)){w=6
break}w=7
return B.b(B.rf(t,d,g,"slides",null),$async$aPb)
case 7:q=i
p=q.b
if(p!=null){o=C.aie(p,f)
if(o!=null){u=o
w=1
break}}else s=q.a
case 5:++r
w=4
break
case 6:throw B.W(s!=null&&B.LS(s)?"No internet connection \u2014 try again when you are online.":e)
case 1:return B.h(u,v)}})
return B.i($async$aPb,v)},
aPx(d,e,f,g,h,i){var w=0,v=B.j(x.I),u,t,s,r,q,p,o,n,m,l
var $async$aPx=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:w=e.q(0,D.DY)||e.q(0,D.Jk)?3:5
break
case 3:if(f!=null)f.$1("Adding pictures and 3D art\u2026")
if(i.length===0)t=e
else{t=B.d4(e,x.Q)
t.W(0,D.DY)}w=6
return B.b(C.fOa(d,t),$async$aPx)
case 6:s=k
w=4
break
case 5:s=D.a6U
case 4:t=d.c
w=A.d.aV(t,new C.fq3())?7:9
break
case 7:r=$.hDi
r=r==null?null:r.$0()
w=10
return B.b(x.gc.b(r)?r:B.dQ(r,x.aP),$async$aPx)
case 10:q=k
p=q!=null?A.Y.az(q.aj(),null):null
w=8
break
case 9:p=null
case 8:r=h.a
o=h.b
n=h.c
m=h.d
l=C.hBx(d,s,p,e,g,r,o,n,m,i)
if(r==null)r=d.d
if(o==null)o=d.e
if(n==null)n=d.f
if(m==null)m=d.r
l.CW=C.hWz(new C.asJ(d.a,d.b,t,r,o,n,m))
m=l.r
n=B.U(m).k("N<1,n>")
t=B.C(new B.N(m,new C.fq4(),n),n.k("ak.E"))
l.cx=t
t=B.a4(e).k("k7<ch.E,n>")
t=B.C(new B.k7(e,new C.fq5(),t),t.k("M.E"))
l.cy=t
l.ay=e.q(0,D.TM)
u=l
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aPx,v)},
hfT(d){var w,v,u,t=d.cy
if(t==null)t=A.Z
w=B.aR(x.Q)
for(v=0;v<6;++v){u=D.a5E[v]
if(A.d.q(t,u.b))w.J(0,u)}return w},
isj(d){return B.bT(A.L,null,new C.h1M(),d,!0,!0,!0,null,!1,!1,x.I)},
i2Z(d,e){var w,v=e.toLowerCase()
if(A.a.c8(v,".png"))w="image/png"
else w=A.a.c8(v,".webp")?"image/webp":"image/jpeg"
return"data:"+w+";base64,"+A.cP.gcu().aN(d)},
isi(d,e,f){return B.bT(A.L,null,new C.h1L(f,e),d,!0,!0,!0,null,!1,!1,x.I)},
hfU(d){var w,v,u,t,s,r,q,p
for(w=d.r,v=w.length,u=0;u<v;++u)for(t=w[u].z,s=t.length,r=0;r<s;++r){q=t[r]
if(q.fx==="logo"){p=q.at
p=(p==null?"":p).length!==0}else p=!1
if(p)return q.at}return null},
hfV(d){var w,v,u,t,s,r,q,p,o=B.a([],x.s)
for(w=d.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u)for(t=w[u].z,s=t.length,r=0;r<t.length;t.length===s||(0,B.J)(t),++r){q=t[r]
p=q.at
if(p==null)p=""
if(q.fx==="photo"&&p.length!==0&&!A.d.q(o,p))o.push(p)}return o},
fxt(d,e){var w=A.a.i(B.w(d==null?"":d)).toLowerCase()
return A.d.aV(e,new C.fxu(w))?w:""},
hyk(d){var w,v
if(d<=0)return""
w=""+d
v=d===1?"":"s"
return"- THEIR PICTURES: they uploaded "+w+" picture"+v+" of their own, numbered 1 to "+w+' in the order they picked them. Put "picture": <number> on each slide where one belongs, following exactly what they say (e.g. "picture 2 on the team slide", "first picture on the title"). If they don\'t say, spread them over the content slides in order. Use 0 where no picture is wanted.'},
hDg(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0="colorful",a1=a4.CW,a2=C.aie(a1==null?"":a1,a0),a3=C.aie(a5,a0)
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
for(v=t.length,r=a4.r,q=B.U(r).k("Y<1>"),p=0;p<t.length;t.length===v||(0,B.J)(t),++p){o=B.nA(new B.Y(r,new C.fTz(t[p]),q))
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
g=B.C(new B.Y(k,new C.fTA(),v),r)
A.d.aZ(g,new C.fTB())
if(g.length===0)continue
f=new C.fTC(g)
e=s[n]
for(k=e.z,j=k.length,p=0;p<k.length;k.length===j||(0,B.J)(k),++p){d=k[p]
i=d.r
if(i.length!==0)d.r=f.$1(i)}e.c=f.$1(e.c)}if(A.a.i(a4.b)===A.a.i(a2.a)&&A.a.i(a3.a).length!==0)a4.b=A.a.i(a3.a)
a4.CW=a5
return!0},
inZ(d){var w=d.toLowerCase(),v=B.ag("\\b(fit|fits|fitting|overflow|overflowing|reframe|inside|too big|out of the|going under|under the slide|below the slide)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.aKX
v=B.ag("\\b(smaller|shrink|reduce|decrease|make .{0,20}small|less big)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.eeY
v=B.ag("\\b(bigger|larger|increase|enlarge|grow|make .{0,20}big)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.eeZ
return null},
hxX(d,e,f,g){var w,v,u,t=d.e,s=d.f,r=Math.max(1,A.j.bh(t*f/(e*0.55)))
for(t=d.r.split("\n"),w=t.length,v=0,u=0;u<w;++u)v+=Math.max(1,A.j.cL(t[u].length/r))
return v*e*1.3<=s*g+0.5&&d.d+d.f<=1.001},
inJ(a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a0.r,d=e.length
if(d===0)return!1
e=a3?e:B.a([e[A.o.E(a1,0,d-1)]],x.g)
w=a0.d===D.oN
v=w?540:960
u=w?960:540
for(d=e.length,t=a2.a,s=!1,r=0;r<e.length;e.length===d||(0,B.J)(e),++r)for(q=e[r].z,p=q.length,o=0;o<q.length;q.length===p||(0,B.J)(q),++o){n=q[o]
if(n.b!==D.cW)continue
m=n.w
l=n.c
k=n.d
switch(t){case 0:n.w=A.j.E(m*0.85,10,120)
break
case 1:j=A.j.E(m*1.15,10,120)
if(C.hxX(n,j,v,u))n.w=j
break
case 2:i=m
h=0
for(;;){g=!1
if(!C.hxX(n,i,v,u))if(n.w>10){f=h+1
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
inH(d,e){var w,v,u,t,s,r,q,p,o=d.b,n=C.aie(o,"colorful")
if(n==null)throw B.W("That earlier version could not be read.")
w=B.aR(x.Q)
for(v=d.c,u=v.length,t=0;t<v.length;v.length===u||(0,B.J)(v),++t){s=v[t]
for(r=0;r<6;++r){q=D.a5E[r]
if(q.b===s)w.J(0,q)}}v=C.hfU(e)
u=C.hfV(e)
p=C.hBx(n,D.a6U,null,w,v,n.d,n.e,n.f,n.r,u)
p.CW=o
o=p.r
u=B.U(o).k("N<1,n>")
o=B.C(new B.N(o,new C.fTv(),u),u.k("ak.E"))
p.cx=o
o=w.$ti.k("k7<ch.E,n>")
o=B.C(new B.k7(w,new C.fTw(),o),o.k("M.E"))
p.cy=o
p.ay=w.q(0,D.TM)
return p},
is5(d,e,f){return B.bT(A.L,null,new C.h0Z(f,e),d,!0,!0,!0,null,!1,!1,x.I)},
i2l(){var w,v,u,t=1000*Date.now()&2147483647,s=new B.e4()
s.d_(t)
w=D.cLS[s.aw(10)]
v=new C.epg(s)
u=x.N
return new C.epf(w,s.aw(4),J.fs(v.$1$2(D.dcJ,1,x.ff)),w.r[s.aw(3)],v.$1$2(D.dup,2+s.aw(2),u),v.$1$2(D.dmS,2,u),v.$1$2(D.dxF,4,x.fP),t)},
i4_(a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g="lux_frame",f="goldframe",e="lux_emblem",d=a5.a,a0=d.c,a1=new B.e4()
a1.d_(a5.w+a3*13)
w=new C.fmb(a4)
v=new C.fmd(a4,d)
u=new C.fmc(w,a5,a0,d)
for(t=a2.length,s=d.f,r=d.d,q=0;q<a2.length;a2.length===t||(0,B.J)(a2),++q){p=a2[q]
if(p.b===D.cW){o=p.fx
if(o==="title"){p.Q=r
p.fy="shimmer@"+A.a.b0(A.o.ft(r,16),8,"0").toUpperCase()}else if(o==="sub"||o==="body")p.Q=s}if(p.fx==="bar")p.fy="shimmer@"+A.a.b0(A.o.ft(r,16),8,"0").toUpperCase()}t=a5.e
n=t[A.o.F(a3,t.length)]
if(n==="spotlight")A.d.c4(a2,0,w.$8(D.eZ,0.1+a1.ai()*0.45,0.05+a1.ai()*0.3,0.45,0.75,C.a2R(a0,52),"lux_spot",a5.xc(0,"spotlight")))
else A.d.c4(a2,0,w.$8(D.bk,0,0,1,1,0,"lux_back",a5.xc(0,n)))
m=t[(a3+1)%t.length]
t=a3&1
if(t===1&&m!==n&&m!=="spotlight")A.d.c4(a2,1,w.$8(D.bk,0,0,1,1,0,"lux_back2",a5.aHg(0,m,r)))
switch(a5.b){case 0:a2.push(w.$12$anim$delay$stroke$strokeWidth(D.bk,0.022,0.038,0.956,0.924,0,g,a5.xc(0,f),D.dm,150,C.a2R(a0,176),1.6))
a2.push(u.$4(0.022,0.038,"lux_c1",300))
a2.push(u.$4(0.978,0.038,"lux_c2",380))
a2.push(u.$4(0.022,0.962,"lux_c3",460))
a2.push(u.$4(0.978,0.962,"lux_c4",540))
break
case 1:a2.push(w.$12$anim$delay$stroke$strokeWidth(D.bk,0.018,0.032,0.964,0.936,0,g,a5.xc(0,f),D.dm,120,C.a2R(a0,200),2))
a2.push(w.$12$anim$delay$stroke$strokeWidth(D.bk,0.034,0.06,0.932,0.88,0,"lux_frame2","",D.dm,260,C.a2R(a0,112),0.8))
a2.push(u.$5$size(0.5,0.032,"lux_c1",420,0.026))
a2.push(u.$5$size(0.5,0.968,"lux_c2",480,0.026))
break
case 2:a2.push(w.$10$anim$delay(D.bk,0,0,1,1,0,"lux_filigree",a5.xc(0,"filigree"),D.dm,200))
break
default:a2.push(w.$10$anim$delay(D.bk,0.08,0.06,0.84,0.004,C.a2R(a0,208),"lux_rule",a5.aHg(0,"shimmer",r),D.vd,150))
a2.push(w.$10$anim$delay(D.bk,0.08,0.936,0.84,0.004,C.a2R(a0,144),"lux_rule2","",D.Jh,220))}l=!A.d.aV(a2,new C.fma())||a3===0
s=a5.d
if(l)a2.push(v.$9(s,0.44,0.06,0.12,0.14,40,e,a5.xc(0,"crest"),350))
else{o=a1.h8()?0.035:0.905
a2.push(v.$9(s,o,0.055,0.06,0.09,22,e,a5.xc(0,"crest"),350))}s=a5.c
t=t===0
o=t?0.3:0.62
k=C.a2R(r,242)
j=a5.xc(0,"orbit")
i=s===D.bk?0.785:0
a2.push(w.$13$anim$delay$rotation$stroke$strokeWidth(s,o-0.008,0.024,0.016,0.028,k,"lux_g1",j,D.qY,600,i,4294967295,1))
t=t?0.66:0.34
a2.push(w.$10$anim$delay(D.eZ,t-0.007,0.9495,0.014,0.025,C.a2R(r,242),"lux_g2",a5.xc(0,"orbit"),D.qY,700))
for(t=a5.f,s=t.length,q=0;q<t.length;t.length===s||(0,B.J)(t),++q){h=t[q]
a2.push(w.$8(D.bk,0,0,1,1,0,"lux_"+h,h+"@"+A.a.b0(A.o.ft(a0,16),8,"0").toUpperCase()))}if((A.d.gH(d.b).a&16777215)<8421504)a2.push(w.$8(D.bk,0,0,1,1,0,"lux_velvet",a5.xc(0,"velvet")))},
o9:function o9(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fTx:function fTx(d){this.a=d},
fTy:function fTy(){},
ww:function ww(d,e){this.a=d
this.b=e},
a92:function a92(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
asJ:function asJ(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
fTq:function fTq(){},
fTt:function fTt(){},
fRo:function fRo(){},
fRp:function fRp(){},
fRq:function fRq(d){this.a=d},
fLN:function fLN(){},
fLQ:function fLQ(d,e,f){this.a=d
this.b=e
this.c=f},
fLP:function fLP(d,e){this.a=d
this.b=e},
fLO:function fLO(d,e){this.a=d
this.b=e},
fLM:function fLM(d){this.a=d},
fOd:function fOd(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fOb:function fOb(d){this.a=d},
fOc:function fOc(d){this.a=d},
fq3:function fq3(){},
fq4:function fq4(){},
fq5:function fq5(){},
h1M:function h1M(){},
a1B:function a1B(d){this.a=d},
aJ8:function aJ8(d,e,f,g,h){var _=this
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
f8S:function f8S(d,e,f){this.a=d
this.b=e
this.c=f},
f8T:function f8T(d,e){this.a=d
this.b=e},
f8Q:function f8Q(d,e){this.a=d
this.b=e},
f8R:function f8R(d,e){this.a=d
this.b=e},
f8P:function f8P(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
f8K:function f8K(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
f8O:function f8O(d,e){this.a=d
this.b=e},
f8J:function f8J(d,e){this.a=d
this.b=e},
f8N:function f8N(d,e){this.a=d
this.b=e},
f8I:function f8I(d,e){this.a=d
this.b=e},
f8L:function f8L(d){this.a=d},
f8M:function f8M(d,e){this.a=d
this.b=e},
f8y:function f8y(d,e){this.a=d
this.b=e},
f8z:function f8z(d,e){this.a=d
this.b=e},
f8B:function f8B(d){this.a=d},
f8C:function f8C(d){this.a=d},
f8D:function f8D(d){this.a=d},
f8E:function f8E(d){this.a=d},
f8A:function f8A(d,e){this.a=d
this.b=e},
f8F:function f8F(d,e){this.a=d
this.b=e},
f95:function f95(d){this.a=d},
f96:function f96(d){this.a=d},
f94:function f94(d){this.a=d},
f97:function f97(d){this.a=d},
f93:function f93(d){this.a=d},
f99:function f99(d){this.a=d},
f92:function f92(d,e){this.a=d
this.b=e},
f9a:function f9a(d){this.a=d},
f91:function f91(d,e){this.a=d
this.b=e},
f9b:function f9b(d){this.a=d},
f90:function f90(d){this.a=d},
f9c:function f9c(d){this.a=d},
f9_:function f9_(d,e){this.a=d
this.b=e},
f9d:function f9d(d){this.a=d},
f8Z:function f8Z(d,e){this.a=d
this.b=e},
f9e:function f9e(d){this.a=d},
f8Y:function f8Y(d){this.a=d},
f9f:function f9f(d,e){this.a=d
this.b=e},
f8X:function f8X(d,e){this.a=d
this.b=e},
f9g:function f9g(d){this.a=d},
f98:function f98(d){this.a=d},
f8W:function f8W(d,e){this.a=d
this.b=e},
f8G:function f8G(d,e,f){this.a=d
this.b=e
this.c=f},
f8H:function f8H(d,e,f){this.a=d
this.b=e
this.c=f},
f8V:function f8V(d,e){this.a=d
this.b=e},
f8U:function f8U(d,e){this.a=d
this.b=e},
h1L:function h1L(d,e){this.a=d
this.b=e},
a1A:function a1A(d,e,f){this.c=d
this.d=e
this.a=f},
aJ7:function aJ7(d){var _=this
_.d=d
_.e=!1
_.f=""
_.c=_.a=_.r=null},
f8r:function f8r(d){this.a=d},
f8s:function f8s(d){this.a=d},
f8t:function f8t(d,e){this.a=d
this.b=e},
f8u:function f8u(d){this.a=d},
f8v:function f8v(d){this.a=d},
f8q:function f8q(d,e){this.a=d
this.b=e},
f8w:function f8w(d,e){this.a=d
this.b=e},
f8x:function f8x(d,e){this.a=d
this.b=e},
fxu:function fxu(d){this.a=d},
b3e:function b3e(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aFG:function aFG(d,e,f){this.c=d
this.d=e
this.a=f},
bmn:function bmn(d,e){var _=this
_.d=$
_.by$=d
_.a9$=e
_.c=_.a=null},
epi:function epi(d){this.a=d},
eph:function eph(){},
bjU:function bjU(d,e){this.b=d
this.a=e},
fTz:function fTz(d){this.a=d},
fTA:function fTA(){},
fTB:function fTB(){},
fTC:function fTC(d){this.a=d},
atg:function atg(d,e){this.a=d
this.b=e},
fTv:function fTv(){},
fTw:function fTw(){},
h0Z:function h0Z(d,e){this.a=d
this.b=e},
a_Y:function a_Y(d,e,f){this.c=d
this.d=e
this.a=f},
aDb:function aDb(){var _=this
_.e=_.d=$
_.f=!1
_.c=_.a=_.r=null},
dso:function dso(d){this.a=d},
dsp:function dsp(d){this.a=d},
dsq:function dsq(d,e){this.a=d
this.b=e},
dst:function dst(d){this.a=d},
dsu:function dsu(d,e){this.a=d
this.b=e},
dss:function dss(d,e){this.a=d
this.b=e},
dsv:function dsv(d){this.a=d},
dsr:function dsr(d,e){this.a=d
this.b=e},
bv2:function bv2(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
epf:function epf(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
epg:function epg(d){this.a=d},
fmb:function fmb(d){this.a=d},
fmd:function fmd(d,e){this.a=d
this.b=e},
fmc:function fmc(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fma:function fma(){},
aNL:function aNL(){},
heI(d){var w,v,u
try{w=A.Y.aQ(0,d,null)
if(x.f.b(w)){v=B.wp(B.a3(w,x.N,x.z))
return v}}catch(u){}return null},
b3a:function b3a(d,e,f){this.c=d
this.d=e
this.a=f},
bnY:function bnY(d,e){this.c=d
this.a=e},
ijZ(d){return A.d.dP(D.Io,new C.fMU(d),new C.fMV())},
ik_(d){var w,v,u,t=A.a.i(d)
if(!A.a.a0(t,"class_"))return null
w=A.a.b2(t,6)
if(w.length===0)return null
v=new B.Y(D.Io,new C.fMW(w),x.b4)
if(!v.gae(0).C())return null
u=v.gH(0)
return new C.jY("class_"+u.a,u.b,u.d,u.r,u.w,u.e,u.f)},
lu:function lu(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fMU:function fMU(d){this.a=d},
fMV:function fMV(){},
fMW:function fMW(d){this.a=d},
nb(d,e,f,g,h){return new C.Fs(f,g,d)},
i5o(d){var w=d.z,v=B.U(w).k("Y<1>")
w=B.C(new B.Y(w,new C.fop(),v),v.k("M.E"))
d.z=w
d.x=""},
dy(d,e){var w=$.Lg
e.db="__design__:"+(w.length===0?"layer":w)
A.d.c4(d.z,0,e)},
dz(d,e,f,g,h,i,j,k,l){return C.er(A.bn,!1,4279310375,A.aG,"",d,24,A.bt,A.a8,"",e,"design_"+C.cD(),null,"","",0,!1,"",f,g,h,i,"",0,0,"",D.ct,D.fi,j,k,l)},
hBk(d,e){var w
C.i5o(d)
w=A.d.dP($.bGC(),new C.fKK(e),new C.fKL())
$.Lg=w.a
d.x=w.a;++d.y
try{w.ak(d)}finally{$.Lg=""}d.z=B.bq(d.z,!0,x.F)},
Fs:function Fs(d,e,f){this.a=d
this.b=e
this.e=f},
fop:function fop(){},
fT1:function fT1(){},
fT2:function fT2(){},
fT3:function fT3(){},
fTe:function fTe(){},
fTj:function fTj(){},
fTk:function fTk(){},
fTl:function fTl(){},
fTm:function fTm(){},
fTn:function fTn(){},
fTo:function fTo(){},
fTp:function fTp(){},
fT4:function fT4(){},
fT5:function fT5(){},
fT6:function fT6(){},
fT7:function fT7(){},
fT8:function fT8(){},
fT9:function fT9(){},
fTa:function fTa(){},
fTb:function fTb(){},
fTc:function fTc(){},
fTd:function fTd(){},
fTf:function fTf(){},
fTg:function fTg(){},
fTh:function fTh(){},
fTi:function fTi(){},
fKK:function fKK(d){this.a=d},
fKL:function fKL(){},
j5(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){return C.er(d,e,f,g,"",4280640491,h,i,j,"",k,l,null,"","",0,!1,"",0,D.bk,4280172719,2,m,n,0,"",o,D.cW,p,q,r)},
DD(d,e,f,g,h,i,j,k,l){return C.er(A.bn,!1,4279310375,A.aG,"",d,24,A.bt,A.a8,"",e,f,null,"","",0,!1,"",0,g,h,i,"",0,0,"",D.ct,D.fi,j,k,l)},
bFm(){var w=new B.V(Date.now(),0,!1)
return A.iO[B.bK(w)-1]+" "+B.bW(w)+", "+B.bC(w)},
ew:function ew(d,e,f){this.a=d
this.b=e
this.c=f},
bCJ(d){return new B.j0((A.o.aI(d,24)&255)/255,(A.o.aI(d,16)&255)/255,(A.o.aI(d,8)&255)/255,(d&255)/255)},
iaX(d){var w,v
if(d==null||!A.a.a0(d,"data:image"))return null
try{w=B.aoc(A.cI.aN(A.d.gan(d.split(","))))
return w}catch(v){return null}},
ib0(d){var w=d.r
if(!d.cy)return w
return new B.N(B.a(w.split("\n"),x.s),new C.fwN(),x.dv).aO(0,"\n")},
ib_(d){switch(d.a){case 2:return A.nT
case 1:case 5:return A.flJ
default:return A.V9}},
iaU(d){switch(d.a){case 2:return A.vN
case 1:case 5:return A.X9
default:return A.adg}},
iaY(d,e){var w,v=null,u=d.ay,t=A.o.aI(u,24),s=A.o.aI(d.ch,24),r=(t&255)===0?v:C.bCJ(u),q=(s&255)===0?v:C.bCJ(d.ch),p=A.j.E(d.CW*(e/960),0.35,6)
u=q==null
if(u)w=v
else{t=new B.nT(q,p,A.l8)
w=new B.pZ(t,t,t,t)}switch(d.ax.a){case 1:return B.lQ(v,v,v,new B.kQ(r,w,v,A.aez,v),v,v,v,v)
case 4:return u?new B.fV(v,v,v):B.xA(B.lQ(v,v,q,v,p+0.4,v,v,v))
default:return B.lQ(v,v,v,new B.kQ(r,w,B.vZ(4),A.i1,v),v,v,v,v)}},
iaW(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=d.c*e,j=d.d*a0,i=d.b,h=i===D.fi?0.4:12,g=A.j.E(d.e*e,h,e),f=A.j.E(d.f*a0,h,a0)
switch(i.a){case 0:w=C.iaU(d.as)
v=A.j.E(d.w*(e/960),3,96)
u=C.ib0(d)
t=C.bCJ(d.Q)
s=d.x.a>=700?A.eB:A.wq
r=d.y===A.cH?A.yY:A.anP
q=d.z
p=new B.DP(w,l,l,B.fc(u,l,l,l,B.ha(l,t,1===q.a?A.aUt:A.aUs,l,l,l,l,l,l,A.dD,l,l,v,r,s,l,!0,l,l,l,l),C.ib_(d.as)))
break
case 1:case 4:o=C.iaX(d.at)
n=i===D.lR&&d.c===0&&d.d===0&&d.e===1&&d.f===1
if(o==null){w=d.db
if(w.length===0)w="Image"
p=B.xA(B.fc(w,l,l,l,B.ha(l,A.tn,l,l,l,l,l,l,l,A.dD,l,l,10,l,l,l,!0,l,l,l,l),l))}else p=new B.IK(o,n?A.aev:A.Xy,l,l)
break
case 3:w=new B.nT(A.JE,1,A.l8)
u=B.vZ(6)
t=d.db
if(t.length===0)t="PDF document"
p=B.lQ(A.vN,B.fc(t,l,l,l,B.ha(l,D.etr,l,l,l,l,l,l,l,A.dD,l,l,11,l,A.eB,l,!0,l,l,l,l),A.nT),l,new B.kQ(E.aMo,new B.pZ(w,w,w,w),u,A.i1,l),l,l,l,l)
break
case 2:p=C.iaY(d,e)
break
case 5:p=C.iaV(d)
break
default:p=l}w=d.cx
if(w!==0)p=B.hsD(-w,p)
w=i===D.cW
if(w){m=A.o.aI(d.Q,24)&255
if(m<255)p=new B.au5(m/255,p)}if(w)return new F.wB(k,l,j,l,new B.Ts(new B.kP(g,g,f,1/0),p))
if(i===D.ls){i=new B.nT(A.JE,1,A.l8)
i=B.lQ(A.vN,p,l,new B.kQ(A.pI,new B.pZ(i,i,i,i),B.vZ(4),A.i1,l),l,l,D.bGl,l)}else i=p
return new F.wB(k,l,j,l,new B.fV(g,f,i))},
iaZ(d,e,f,g){var w,v=null,u=C.bCJ(d.e),t=d.f
t=B.a([F.hrd(t!=null?B.lQ(v,v,v,new B.kQ(v,v,v,A.i1,new B.aYH(E.Xb,A.adb,B.a([u,C.bCJ(t)],x.cR),v)),v,v,v,v):B.lQ(v,v,u,v,v,v,v,v))],x.eR)
w=d.z
A.d.v(t,new B.N(w,new C.fwM(f,g),B.U(w).k("N<1,fi>")))
return F.czK(t)},
hfX(d){var w=0,v=B.j(x.E),u,t,s,r,q,p,o,n
var $async$hfX=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:n=B.a5h(null,"NGMY Slides",d.b)
for(t=d.r,s=t.length,r=n.c,q=0;q<t.length;t.length===s||(0,B.J)(t),++q){p=t[q]
o=new B.XH(A.x3,A.JB,D.bHy,null,null,null,!1,null)
o=new B.Cs(o,new C.fTI(607,787,p,d))
o.Ne(n,null)
r.push(o)}u=n.jH(0)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$hfX,v)},
iaV(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=C.heI(d.r),k=l==null,j=k?m:l.b,i=A.a.i(j==null?"":j),h=k?m:l.gal4()
if(h==null)h=A.aBB
j=B.u_(4279308564)
w=B.vZ(18)
v=new B.nT(B.u_(4287531653),3,A.l8)
u=i.length===0?"My links":i
u=B.a([B.xA(B.fc(u,m,m,m,B.ha(m,A.pI,m,m,m,m,m,m,m,A.dD,m,m,12,m,A.eB,m,!0,m,m,m,m),m))],x.eR)
t=k?m:l.c
if(A.a.i(t==null?"":t).length!==0)u.push(B.xA(B.fc(A.a.i(l.c),m,m,m,D.ftq,m)))
u.push(new B.fV(m,8,m))
for(t=B.cW(h,0,B.dA(8,"count",x.S),B.U(h).c),s=t.$ti,t=new B.bP(t,t.gI(0),s.k("bP<ak.E>")),s=s.k("ak.E");t.C();){r=t.d
if(r==null)r=s.a(r)
q=A.a.i(r.c)
p=B.u_(4280690220)
o=new B.aan(8,8)
n=A.a.i(r.b)
u.push(new B.oa(D.bAo,new C.ayq(new C.ajn(q),B.lQ(m,B.fc(n.length===0?A.a.i(r.c):n,m,m,m,D.fvP,A.nT),m,new B.kQ(p,m,new B.ajQ(o,o,o,o),A.i1,m),m,m,D.bGO,m))))}k=k?m:l.as
if(A.a.i(k==null?"":k).length!==0){k=A.a.i(l.as)
t=B.xA(B.fc(k,m,m,m,D.fv2,m))
u.push(new C.ayq(C.hKl(k),t))}return B.lQ(m,B.zu(u,A.Nx,A.lQ),m,new B.kQ(j,new B.pZ(v,v,v,v),w,A.i1,m),m,m,D.bBf,m)},
fwN:function fwN(){},
fwM:function fwM(d,e){this.a=d
this.b=e},
fTI:function fTI(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ai1(d){var w,v
for(w=0;w<32;++w){v=D.If[w]
if(v.a===d)return v}return null},
hvg(d){var w,v,u=A.a.co(d,",")
if(!A.a.a0(d,"data:")||u<0)return null
try{w=A.cI.aN(A.a.b2(d,u+1))
return w}catch(v){return null}},
cY(d,e){var w=d*374761393+e*668265263+1013904223&2147483647
w=(w^w>>>13)*1274126177&2147483647
return((w^w>>>16)&65535)/65535},
hEy(d,e){return B.a6(d,!1).cd(B.eb(new C.h_o(e),!0,null,x.fB))},
hEx(d,e){return B.bT(A.L,null,new C.h_n(e),d,!0,!0,!0,null,!1,!1,x.fB)},
jb:function jb(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Fj:function Fj(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Ok:function Ok(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
blJ:function blJ(d,e,f){var _=this
_.d=d
_.e=$
_.by$=e
_.a9$=f
_.c=_.a=null},
e2L:function e2L(d){this.a=d},
e2K:function e2K(d,e,f){this.a=d
this.b=e
this.c=f},
e2J:function e2J(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
btz:function btz(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
f7E:function f7E(d,e){this.a=d
this.b=e},
bgH:function bgH(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
b14:function b14(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ceQ:function ceQ(){},
ceR:function ceR(d){this.a=d},
ceS:function ceS(d,e,f){this.a=d
this.b=e
this.c=f},
ceT:function ceT(d,e,f){this.a=d
this.b=e
this.c=f},
h_o:function h_o(d){this.a=d},
a_v:function a_v(d,e){this.c=d
this.a=e},
aBy:function aBy(){var _=this
_.f=_.e=_.d=$
_.r=0
_.c=_.a=null},
dhC:function dhC(d,e,f){this.a=d
this.b=e
this.c=f},
dhH:function dhH(d){this.a=d},
dhI:function dhI(d){this.a=d},
dhG:function dhG(d){this.a=d},
dhJ:function dhJ(d){this.a=d},
dhF:function dhF(d,e){this.a=d
this.b=e},
dhK:function dhK(d){this.a=d},
dhE:function dhE(d){this.a=d},
dhL:function dhL(d){this.a=d},
dhD:function dhD(d,e){this.a=d
this.b=e},
dhM:function dhM(d,e){this.a=d
this.b=e},
h_n:function h_n(d){this.a=d},
h_m:function h_m(d){this.a=d},
h_l:function h_l(d,e,f){this.a=d
this.b=e
this.c=f},
h_k:function h_k(d,e){this.a=d
this.b=e},
aNf:function aNf(){},
ish(d){return B.bT(A.L,null,new C.h1K(),d,!0,!0,!0,null,!1,!1,x.N)},
h1K:function h1K(){},
a_Q:function a_Q(d){this.a=d},
bid:function bid(d){this.d=d
this.c=this.a=null},
doq:function doq(d){this.a=d},
dor:function dor(d,e){this.a=d
this.b=e},
dos:function dos(d){this.a=d},
i76(d){var w,v=d.split("@")
if(v.length>1){w=B.ca(v[1],16)
if(w!=null)return B.b0(w)}return D.ym},
ilU(d){var w=7000
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
ilT(d,e,f,g){var w,v,u,t,s,r=null,q=A.d.gH(d.split("@")),p=C.i76(d)
switch(q){case"shimmer":return B.oe(A.LK,g,new C.fQl(p,A.j.F(e,6.283185307179586)/6.283185307179586*1.8-0.4))
case"golddust":return new B.an(A.a0,r,A.b2,A.t,B.a([g,new B.dx(!0,B.b4(r,r,r,new C.bhy(e,f,p,r),A.az),r)],x.p),r)
case"spotlight":w=Math.sin(e)
v=Math.cos(e*0.7)
u=Math.sin(e*2)
t=Math.sin(e*3)
return B.dP(B.ed(A.A,B.da(F.bWX(g,new B.Eq(40,40,r)),0.75+t*0.25),1+u*0.08,r,r),new B.o(w*60,v*26))
case"goldframe":return new B.an(A.a0,r,A.b2,A.t,B.a([g,new B.dx(!0,B.b4(r,r,r,new C.bhf(e,p,r),A.az),r)],x.p),r)
case"twinkle":s=Math.sin(e)
w=A.j.E(0.55+s*0.45,0,1)
return B.da(B.eM(A.A,e*0.5,B.ed(A.A,g,0.8+(s+1)*0.18,r,r),r),w)
case"orbit":w=Math.cos(e)
v=Math.sin(e)
u=B.dr()
t=u.a
t.$flags&2&&B.aj(t)
t[11]=0.002
u.fL(e)
u.n_(Math.sin(e)*0.3)
return B.dP(B.fx(A.A,g,r,u,!0),new B.o(w*22,v*12))
case"rays":return new B.an(A.a0,r,A.b2,A.t,B.a([new B.dx(!0,B.b4(r,r,r,new C.bqj(e,f,p,r),A.az),r),g],x.p),r)
case"bokeh":return new B.an(A.a0,r,A.b2,A.t,B.a([new B.dx(!0,B.b4(r,r,r,new C.bc4(e,f,p,r),A.az),r),g],x.p),r)
case"aurora":return new B.an(A.a0,r,A.b2,A.t,B.a([new B.dx(!0,B.b4(r,r,r,new C.bbI(e,f,p,r),A.az),r),g],x.p),r)
case"velvet":return new B.an(A.a0,r,A.b2,A.t,B.a([g,new B.dx(!0,B.b4(r,r,r,new C.bxp(e,p,r),A.az),r)],x.p),r)
case"sparkle":return new B.an(A.a0,r,A.b2,A.t,B.a([g,new B.dx(!0,B.b4(r,r,r,new C.bun(e,f,p,r),A.az),r)],x.p),r)
case"sheen":return new B.an(A.a0,r,A.b2,A.t,B.a([g,new B.dx(!0,B.b4(r,r,r,new C.btv(e,p,r),A.az),r)],x.p),r)
case"filigree":return new B.an(A.a0,r,A.b2,A.t,B.a([g,new B.dx(!0,B.b4(r,r,r,new C.bgA(e,p,r),A.az),r)],x.p),r)
case"crest":s=Math.sin(e)
return new B.an(A.A,r,A.ad,A.f,B.a([B.bR(0,new B.dx(!0,B.ed(A.A,B.c3(r,new B.p(r,r,r,r,r,new B.c_(A.A,0.5,A.x,r,0,B.a([p.j(0.35+s*0.12),p.j(0)],x.O),r,r),A.a7),A.bj),1.6+s*0.15,r,r),r),0,0,0),B.eM(A.A,s*0.06,B.ed(A.A,g,1+s*0.05,r,r),r)],x.p),r)}return g},
fQl:function fQl(d,e){this.a=d
this.b=e},
bhy:function bhy(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bhf:function bhf(d,e,f){this.b=d
this.c=e
this.a=f},
bqj:function bqj(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bc4:function bc4(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bbI:function bbI(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bxp:function bxp(d,e,f){this.b=d
this.c=e
this.a=f},
bun:function bun(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
btv:function btv(d,e,f){this.b=d
this.c=e
this.a=f},
bgA:function bgA(d,e,f){this.b=d
this.d=e
this.a=f},
dhj:function dhj(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ya:function ya(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
fQo(d){var w=d.db
return A.a.a0(w,"marriage_sign_")&&!A.a.a0(w,"marriage_sign_placed_")&&d.b!==D.ls},
ilZ(d,e){var w,v,u,t,s,r,q,p,o,n,m,l="marriage_locked_box_",k="marriage_field_",j=B.a([],x.u)
for(w=d.z,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u){t=w[u]
if(A.a.a0(t.db,l))continue
if(Math.abs(t.d+t.f*0.5-e)<0.03)j.push(t)}if(j.length<2)return
A.d.aZ(j,new C.fQp())
s=A.d.gH(j).c
for(w=j.length,u=0;u<j.length;j.length===w||(0,B.J)(j),++u){t=j[u]
r=s-t.c
if(Math.abs(r)>0.0001){t.c=s
v=t.db
if(A.a.a0(v,k)){q=A.d.gH(B.aSh(v,k,"",0).split(":"))
for(v=d.z,p=v.length,o=l+q,n=0;n<p;++n){m=v[n]
if(m.db===o)m.c+=r}}}s+=t.e+0.006}},
ilY(d,e){var w,v,u,t,s,r=d.db
if(!A.a.a0(r,"marriage_field_"))return
w=r.split(":")
r=w.length
if(r>1){v=B.d1(w[1])
u=v==null?d.e:v}else u=d.e
t=r>2?B.d1(w[2]):null
r=A.a.i(e).length
if(r===0){d.e=u
if(t!=null)d.w=t
return}if(t!=null){s=r*(t*0.001)+0.028
if(s<=u){d.w=t
d.e=A.j.E(s,0.06,u)}else{d.w=A.j.E((u-0.028)/(r*0.001),12,t)
d.e=u}return}d.e=A.j.E(r*(d.w*0.001)+0.028,0.06,u)},
ahF(d,a0,a1,a2,a3,a4){var w=0,v=B.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$ahF=B.e(function(a5,a6){if(a5===1)return B.f(a6,v)
for(;;)switch(w){case 0:f=B.U(a4).k("Y<1>")
e=B.C(new B.Y(a4,new C.fIK(),f),f.k("M.E"))
w=!a2&&e.length!==0?3:4
break
case 3:w=5
return B.b(B.bT(A.dT,null,new C.fIL(e),d,!0,!0,!1,A.lS,!1,!1,x.N),$async$ahF)
case 5:t=a6
if(t==="continue"){a1.$1(A.d.gH(e).hQ())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.hgE(d),$async$ahF)
case 6:s=a6
if(s==null||d.e==null){w=1
break}r=A.a.i(a3==null?"":a3)
w=r.length!==0?7:9
break
case 7:a6=r
w=8
break
case 9:w=10
return B.b(B.M3(d,"Search states\u2026","",A.kw,"Choose state"),$async$ahF)
case 10:case 8:q=a6
if(q==null||d.e==null){w=1
break}p=C.hfu(s)
if(p==null)p=A.d.gH(D.SE)
f=C.cD()
o=A.a.i(q)
if(o.length===0)o=null
n=C.cD()
m=p.e
l=C.fQq(p.d)
k=x.u
j=B.a([C.er(A.bn,!1,4279310375,A.aG,"marriage_locked_bg",4280640491,24,A.bt,A.a8,"",1,C.cD(),l,"","",0,!1,"",0,D.bk,4280172719,2,"",0,0,"",D.ct,D.lR,1,0,0)],k)
i=p.f
h=x.F
k=B.C(B.a([C.Dp(i,0.016,D.lt,4291404327,0.8,"ring_jewel",0.028,0.42544,0.008),C.Dp(0,0.058,D.eZ,4291404327,2.4,"ring_l",0.058,0.39064,0.026),C.Dp(0,0.058,D.eZ,4291404327,2.4,"ring_r",0.058,0.41963999999999996,0.026)],k),h)
k.push(C.Lr("HATI YA NDOA",A.K,i,32,A.u,0.048,"title",0.78,0.11,0.086))
k.push(C.Lr("Hati ya Makubaliano ya Ndoa",A.K,i,12,A.a8,0.018,"subtitle",0.78,0.11,0.134))
A.d.v(k,C.hca(0.2,0.154,0.6,4291404327,i))
A.d.v(k,C.bCc("TAARIFA ZA WANANDOA",0.176,0.2,0.6,i))
A.d.v(k,C.a2t("Jina la Mume:","groom_name",0.11,0.218,0.78,11,i,""))
A.d.v(k,C.a2t("Jina la Mke:","bride_name",0.11,0.25,0.78,11,i,""))
A.d.v(k,C.a2t("Tarehe ya Ndoa:","tarehe",0.11,0.282,0.78,11,i,""))
A.d.v(k,C.a2t("Mahali:","bride_house",0.11,0.314,0.78,11,i,""))
A.d.v(k,C.bCc("TAMKO LA MAKUBALIANO",0.35,0.2,0.6,i))
k.push(C.Dp(m,0.082,D.bk,4291404327,1.15,"intro_frame",0.792,0.104,0.384))
g=C.cD()
k.push(C.er(A.bn,!1,i,A.aG,"marriage_field_utangulizi:"+A.j.ad(0.78,3),4280640491,9.5,A.bt,A.cC,"",0.074,g,null,"","",0,!1,"",0,D.bk,4280172719,2,y.O,0,0,"",D.ct,D.cW,0.78,0.11,0.388))
A.d.v(k,C.hca(0.22,0.47,0.56,4291404327,i))
A.d.v(k,C.bCc("MASHAHIDI",0.49,0.26,0.48,i))
A.d.v(k,C.hxm("Shahidi wa Mume",0.11,0.528,0.37,i,4294967295))
A.d.v(k,C.hxm("Shahidi wa Mke",0.52,0.528,0.37,i,4294967295))
A.d.v(k,C.a2t("Jina:","witness_mume_1_name",0.11,0.564,0.37,10,i,""))
A.d.v(k,C.a2t("Jina:","witness_mke_1_name",0.52,0.564,0.37,10,i,""))
A.d.v(k,C.bCb("witness_mume_1",0.11,0.596,0.37,i))
A.d.v(k,C.bCb("witness_mke_1",0.52,0.596,0.37,i))
A.d.v(k,C.bCc("SAHIHI ZA WANANDOA",0.64,0.2,0.6,i))
k.push(C.Lr("Mume",A.K,i,11,A.u,0.016,"mume_h",0.37,0.11,0.678))
k.push(C.Lr("Mke",A.K,i,11,A.u,0.016,"mke_h",0.37,0.52,0.678))
A.d.v(k,C.bCb("mchumba_mume",0.11,0.7,0.37,i))
A.d.v(k,C.bCb("mchumba_mke",0.52,0.7,0.37,i))
A.d.v(k,C.bCc("MWANDISHI / MSIMAMIZI",0.744,0.18,0.64,i))
A.d.v(k,C.a2t("Jina:","mwandishi",0.11,0.784,0.26,10,i,""))
A.d.v(k,C.bCb("witness_mume_2",0.38,0.784,0.26,i))
A.d.v(k,C.a2t("Tarehe:","mchumba_mume_tarehe",0.65,0.784,0.24,10,i,""))
h=B.C(C.hca(0.22,0.83,0.56,4291404327,i),h)
h.push(C.Lr("NGMY",A.K,i,13,A.u,0.022,"ngmy_mark",0.6,0.2,0.846))
h.push(C.Lr("Nakala ya Hati",A.K,4291404327,9,A.a8,0.016,"ngmy_sub",0.6,0.2,0.866))
A.d.v(k,h)
A.d.v(j,k)
a0.$1(C.Cn(null,null,null,null,D.oN,5,!1,"marriage_agreement",null,null,null,null,f,null,!1,o,p.b,null,null,B.a([C.rW(m,null,0,0,j,n,D.qX,"","","Hati ya Ndoa",D.dm)],x.g),"marriage_"+p.a,null,!1,null))
case 1:return B.h(u,v)}})
return B.i($async$ahF,v)},
fQp:function fQp(){},
fIK:function fIK(){},
fIL:function fIL(d){this.a=d},
fII:function fII(d){this.a=d},
fIJ:function fIJ(d){this.a=d},
ial(d){var w=d.a
if(1===w)return"underline"
if(4===w)return"lineThrough"
return"none"},
iak(d){var w=d==null?null:J.k(d)
switch(w==null?"none":w){case"underline":return A.nd
case"lineThrough":return A.xd
default:return A.aG}},
er(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){return new C.eP(o,a7,a9,b0,a8,n,a2,j,l,k,g,f,d,p,w,i,a0,a1,v,e,h,s,a6,a3,r,q,m,u,a5,t,a4)},
hzq(d){var w,v,u=J.k(d==null?"fade":d)
for(w=0;w<22;++w){v=D.Sn[w]
if(v.b===u)return v}return D.dm},
i6u(d){var w,v,u=J.k(d==null?"text":d)
for(w=0;w<6;++w){v=D.d3g[w]
if(v.b===u)return v}return D.cW},
id9(d){var w,v,u=J.k(d==null?"rectangle":d)
for(w=0;w<7;++w){v=D.dvb[w]
if(v.b===u)return v}return D.bk},
rW(d,e,f,g,h,i,j,k,l,m,n){return new C.m0(i,m,k,j,d,e,n,g,l,f,h==null?B.a([],x.u):h)},
hpZ(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=d.h(0,"id")
l=J.k(l==null?"":l)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"notes")
v=J.k(v==null?"":v)
u=C.i8C(d.h(0,"layout"))
t=B.aI(d.h(0,"background"))
t=t==null?m:A.j.M(t)
if(t==null)t=4294967295
s=B.aI(d.h(0,"backgroundEnd"))
s=s==null?m:A.j.M(s)
r=C.hzq(d.h(0,"transition"))
q=B.aI(d.h(0,"durationSeconds"))
q=q==null?m:A.j.M(q)
if(q==null)q=0
p=d.h(0,"slideDesignId")
p=J.k(p==null?"":p)
o=B.aI(d.h(0,"designRevision"))
o=o==null?m:A.j.M(o)
if(o==null)o=0
n=x.c.a(d.h(0,"elements"))
if(n==null)n=m
else{n=J.dd(n,x.f)
n=B.cE(n,new C.ckm(),n.$ti.k("M.E"),x.F)
n=B.C(n,B.a4(n).k("M.E"))}return C.rW(t,s,o,q,n==null?B.a([],x.u):n,l,u,v,p,w,r)},
i8C(d){var w,v,u=J.k(d==null?"titleContent":d)
for(w=0;w<9;++w){v=D.atc[w]
if(v.b===u)return v}return D.n8},
Cn(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,a0,a1,a2,a3,a4){var w=a4==null?new B.V(Date.now(),0,!1):a4
return new C.i3(p,t,a1,h,i,w,a0==null?B.a([C.rW(4294967295,null,0,0,null,C.cD(),D.qX,"","","",D.dm)],x.g):a0,k,s,a2,a3,d,v,u,q,j,r,f,g,e,m,o,n,l)},
X4(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4="deckKind",a5=a6.h(0,"id")
a5=J.k(a5==null?"":a5)
w=a6.h(0,"name")
w=J.k(w==null?"Untitled Presentation":w)
v=a6.h(0,"themeId")
v=J.k(v==null?"office_blue":v)
u=C.i4l(a6.h(0,"aspectRatio"))
t=B.aI(a6.h(0,"autoAdvanceSeconds"))
t=t==null?a3:A.o.E(A.j.M(t),1,120)
if(t==null)t=5
s=a6.h(0,"updatedAt")
s=B.bj(J.k(s==null?"":s))
if(s==null)s=new B.V(Date.now(),0,!1)
r=a6.h(0,a4)
r=r==null?a3:J.k(r)
q=a6.h(0,"marriageState")
q=q==null?a3:J.k(q)
p=a6.h(0,"transferClaimCode")
p=p==null?a3:J.k(p)
if(J.z(a6.h(0,"transferReceived"),!0)){o=a6.h(0,a4)
o=C.kL(o==null?a3:J.k(o))}else o=!1
n=a6.h(0,a4)
if(C.kL(n==null?a3:J.k(n))){n=a6.h(0,"adminShareEditUntil")
n=n==null?a3:J.k(n)}else n=a3
m=B.aI(a6.h(0,"signatureStrokeWidth"))
if(m==null)m=a3
l=B.aI(a6.h(0,"signatureInkColor"))
l=l==null?a3:A.j.M(l)
k=a6.h(0,"kiapoSignedAt")
k=k==null?a3:J.k(k)
j=J.z(a6.h(0,"cinematic"),!0)
i=J.z(a6.h(0,"loop"),!0)
h=a6.h(0,"aiOutlineJson")
h=h==null?a3:J.k(h)
g=x.c
f=g.a(a6.h(0,"aiSlideIds"))
if(f==null)f=a3
else{f=J.b7(f,new C.ck9(),x.N)
f=B.C(f,f.$ti.k("ak.E"))}e=g.a(a6.h(0,"aiExtras"))
if(e==null)e=a3
else{e=J.b7(e,new C.cka(),x.N)
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
g=B.cE(g,new C.ckb(),g.$ti.k("M.E"),x.bt)
g=B.C(g,B.a4(g).k("M.E"))}return C.Cn(n,e,h,f,u,t,j,r,a2,d,a1,a0,a5,k,i,q,w,l,m,g==null?B.a([C.rW(4294967295,a3,0,0,a3,C.cD(),D.qX,"","","",D.dm)],x.g):g,v,p,o,s)},
kL(d){return d==="marriage_agreement"||d==="hati_kuhowa"||d==="hati_kuhoweya"||d==="hati_malipo_awamu"||d==="hati_kiapo_uongozi"},
i4l(d){var w,v,u=J.k(d==null?"landscape169":d)
for(w=0;w<2;++w){v=D.dw2[w]
if(v.b===u)return v}return D.DV},
cD(){var w=Date.now(),v=$.jc
$.jc=v+1
return""+1000*w+"_"+v},
ckD(d,e,f){var w,v,u,t,s,r,q,p=null,o="Click to add title",n=4280640491,m=4280172719,l=4279310375
d.d=e
A.d.a8(d.z)
if(e!==D.DW){d.e=f.f.l()
w=f.r
d.f=w==null?p:w.l()}switch(e.a){case 0:break
case 1:w=d.z
v=C.cD()
v=C.er(A.K,!1,f.d.l(),A.aG,"",n,40,A.bt,A.u,"",0.2,v,p,"","",0,!1,"",0,D.bk,m,2,o,0,0,"",D.ct,D.cW,0.84,0.08,0.3)
u=C.cD()
A.d.v(w,B.a([v,C.er(A.K,!1,f.e.l(),A.aG,"",n,20,A.bt,A.cC,"",0.12,u,p,"","",0,!1,"",0,D.bk,m,2,"Click to add subtitle",0,0,"",D.ct,D.cW,0.76,0.12,0.58)],x.u))
break
case 2:w=d.z
v=C.cD()
v=C.er(A.bn,!1,f.d.l(),A.aG,"",n,32,A.bt,A.u,"",0.14,v,p,"","",0,!1,"",0,D.bk,m,2,o,0,0,"",D.ct,D.cW,0.88,0.06,0.06)
u=C.cD()
A.d.v(w,B.a([v,C.er(A.bn,!0,f.e.l(),A.aG,"",n,20,A.bt,A.cC,"",0.68,u,p,"","",0,!1,"",0,D.bk,m,2,"\u2022 Tap text to select, then Edit to type\n\u2022 Use Format for size & color\n\u2022 Add images and shapes from Insert",0,0,"",D.ct,D.cW,0.88,0.06,0.24)],x.u))
break
case 3:w=d.z
v=C.cD()
v=C.er(A.bn,!1,f.d.l(),A.aG,"",n,30,A.bt,A.u,"",0.12,v,p,"","",0,!1,"",0,D.bk,m,2,"Two Column Slide",0,0,"",D.ct,D.cW,0.88,0.06,0.06)
u=C.cD()
t=f.e
u=C.er(A.bn,!0,t.l(),A.aG,"",n,18,A.bt,A.a8,"",0.7,u,p,"","",0,!1,"",0,D.bk,m,2,"Left column\n\n\u2022 Point A\n\u2022 Point B",0,0,"",D.ct,D.cW,0.42,0.06,0.22)
s=C.cD()
A.d.v(w,B.a([v,u,C.er(A.bn,!0,t.l(),A.aG,"",n,18,A.bt,A.a8,"",0.7,s,p,"","",0,!1,"",0,D.bk,m,2,"Right column\n\n\u2022 Point C\n\u2022 Point D",0,0,"",D.ct,D.cW,0.42,0.52,0.22)],x.u))
break
case 4:w=f.c
d.e=w.l()
d.f=w.j(0.85).l()
A.d.J(d.z,C.er(A.K,!1,4294967295,A.aG,"",n,42,A.bt,A.u,"",0.2,C.cD(),p,"","",0,!1,"",0,D.bk,m,2,"Section Header",0,0,"",D.ct,D.cW,0.84,0.08,0.38))
break
case 5:w=d.z
v=C.cD()
v=C.er(A.bn,!1,f.d.l(),A.aG,"",n,30,A.bt,A.u,"",0.12,v,p,"","",0,!1,"",0,D.bk,m,2,"Compare",0,0,"",D.ct,D.cW,0.88,0.06,0.06)
u=C.cD()
t=f.c
u=C.er(A.bn,!1,l,A.aG,"",t.j(0.12).l(),24,A.bt,A.a8,"",0.68,u,p,"","",0,!1,"",0,D.bk,t.l(),2,"",0,0,"",D.ct,D.fi,0.42,0.06,0.22)
s=C.cD()
r=f.e
s=C.er(A.bn,!1,r.l(),A.aG,"",n,20,A.bt,A.V,"",0.6,s,p,"","",0,!1,"",0,D.bk,m,2,"Option A",0,0,"",D.ct,D.cW,0.38,0.08,0.26)
q=C.cD()
t=C.er(A.bn,!1,l,A.aG,"",t.j(0.06).l(),24,A.bt,A.a8,"",0.68,q,p,"","",0,!1,"",0,D.bk,t.j(0.5).l(),2,"",0,0,"",D.ct,D.fi,0.42,0.52,0.22)
q=C.cD()
A.d.v(w,B.a([v,u,s,t,C.er(A.bn,!1,r.l(),A.aG,"",n,20,A.bt,A.V,"",0.6,q,p,"","",0,!1,"",0,D.bk,m,2,"Option B",0,0,"",D.ct,D.cW,0.38,0.54,0.26)],x.u))
break
case 6:w=d.z
v=C.cD()
v=C.er(A.K,!1,f.d.l(),A.aG,"",n,36,A.bt,A.u,"",0.35,v,p,"","",0,!1,"",0,D.bk,m,2,"TERM / QUESTION",0,0,"",D.ct,D.cW,0.8,0.1,0.12)
u=C.cD()
A.d.v(w,B.a([v,C.er(A.K,!1,f.e.l(),A.aG,"",n,22,A.bt,A.cC,"",0.35,u,p,"","",0,!1,"",0,D.bk,m,2,"Definition or answer \u2014 flip mentally when presenting",0,0,"",D.ct,D.cW,0.8,0.1,0.52)],x.u))
break
case 7:w=d.z
v=C.cD()
v=C.er(A.bn,!1,f.d.l(),A.aG,"",n,28,A.bt,A.u,"",0.18,v,p,"","",0,!1,"",0,D.bk,m,2,"Quiz Question",0,0,"",D.ct,D.cW,0.88,0.06,0.06)
u=C.cD()
A.d.v(w,B.a([v,C.er(A.bn,!1,f.e.l(),A.aG,"",n,20,A.bt,A.a8,"",0.62,u,p,"","",0,!1,"",0,D.bk,m,2,"A) Answer choice\nB) Answer choice\nC) Answer choice\nD) Answer choice",0,0,"",D.ct,D.cW,0.84,0.08,0.28)],x.u))
break
case 8:w=d.z
v=C.cD()
v=C.er(A.bn,!1,f.d.l(),A.aG,"",n,26,A.bt,A.u,"",0.1,v,p,"","",0,!1,"",0,D.bk,m,2,"Worksheet / Assignment",0,0,"",D.ct,D.cW,0.88,0.06,0.04)
u=C.cD()
A.d.v(w,B.a([v,C.er(A.bn,!1,f.e.l(),A.aG,"",n,18,A.bt,A.a8,"",0.78,u,p,"","",0,!1,"",0,D.bk,m,2,"Name: _______________\nDate: _______________\n\n1. _________________________________\n\n2. _________________________________\n\n3. _________________________________",0,0,"",D.ct,D.cW,0.88,0.06,0.16)],x.u))
break}},
hWJ(d){return A.d.dP(D.a5g,new C.ckE(d),new C.ckF())},
hWG(d){var w,v,u,t,s,r,q,p
if(A.a.i(d).length===0)return B.a([],x.D)
try{w=A.Y.aQ(0,d,null)
if(!x.j.b(w)){t=B.a([],x.D)
return t}v=B.a([],x.D)
for(t=J.aU(w),s=x.N,r=x.z,q=x.f;t.C();){u=t.gR(t)
if(!q.b(u))continue
try{J.c6(v,C.X4(B.a3(u,s,r)))}catch(p){}}return v}catch(p){t=B.a([],x.D)
return t}},
h8q(d,e){var w,v,u,t=B.T(x.N,x.I),s=new C.ckz(t)
for(w=J.aU(d);w.C();)s.$1(w.gR(w))
for(w=e.length,v=0;v<e.length;e.length===w||(0,B.J)(e),++v)s.$1(e[v])
w=t.$ti.k("b8<2>")
u=B.C(new B.b8(t,w),w.k("M.E"))
A.d.aZ(u,new C.cky())
return u},
hq1(d,e){var w,v,u=d.length
if(u===0)return e
w=e.length
if(w===0)return d
v=new C.cku()
if(u!==w)return u>=w?d:e
return v.$1(d).cf(v.$1(e))?d:e},
asK(d){return C.hWE(d)},
hWE(d){var w=0,v=B.j(x.R),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$asK=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=A.a.i(d.toLowerCase())
l=new C.ckx()
k=x.D
j=B.a([],k)
t=4
g=l
w=7
return B.b(B.a3E(m),$async$asK)
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
return B.b(B.az(),$async$asK)
case 12:q=f
k=A.a.i(d.toLowerCase())
r=l.$1(B.aT(J.t(q.a,"ngmy_slides_decks_"+k)))
t=2
w=11
break
case 9:t=8
h=s.pop()
w=11
break
case 8:w=2
break
case 11:o=l.$1($.hq0.h(0,m))
n=C.h8q(C.h8q(j,r),o)
if(n.length===0){u=C.hq1(C.hq1(j,r),o)
w=1
break}u=n
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$asK,v)},
ckt(d){return C.hWD(d)},
hWD(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o
var $async$ckt=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.az(),$async$ckt)
case 7:r=f
q=r.tS("ngmy_slides_deleted_"+A.a.i(d.toLowerCase()))
if(q==null)q=A.Z
q=B.jz(q,B.U(q).c)
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
return B.i($async$ckt,v)},
b3g(d,e){return C.hWF(d,e)},
hWF(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m
var $async$b3g=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$b3g)
case 6:s=g
q=s.tS("ngmy_slides_deleted_"+A.a.i(d.toLowerCase()))
if(q==null)q=B.a([],x.s)
A.d.J(q,e)
r=q
p=A.a.i(d.toLowerCase())
o=J.ad(r)>500?J.Mb(r,J.ad(r)-500):r
w=7
return B.b(s.aB("StringList","ngmy_slides_deleted_"+p,o),$async$b3g)
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
return B.i($async$b3g,v)},
X5(d,e){return C.hWH(d,e)},
hWH(a3,a4){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$X5=B.e(function(a5,a6){if(a5===1){s.push(a6)
w=t}for(;;)switch(w){case 0:a0=A.a.i(a3.toLowerCase())
if(J.ad(a0)===0){w=1
break}p=$.hq_.h(0,a0)
w=p==null?3:4
break
case 3:w=5
return B.b(C.asK(a3),$async$X5)
case 5:p=a6
case 4:w=6
return B.b(C.ckt(a3),$async$X5)
case 6:o=a6
n=B.T(x.N,x.I)
for(m=J.aU(p);m.C();){l=m.gR(m)
k=l.a
if(A.a.i(k).length!==0)n.n(0,k,l)}for(m=a4.length,j=0;j<a4.length;a4.length===m||(0,B.J)(a4),++j){i=a4[j]
l=i.a
if(A.a.i(l).length===0)continue
h=n.h(0,l)
if(h!=null){k=h.f
g=i.f
f=k.a
if(f<=g.gbs())k=f===g.gbs()&&k.b>g.gcF()
else k=!0
k=!k}else k=!0
if(k)n.n(0,l,i)}m=n.$ti.k("b8<2>")
l=m.k("Y<M.E>")
e=B.C(new B.Y(new B.b8(n,m),new C.ckA(o),l),l.k("M.E"))
A.d.aZ(e,new C.ckB())
$.hq_.n(0,a0,e)
n=B.U(e).k("N<1,a8<n,@>>")
n=B.C(new B.N(e,new C.ckC(),n),n.k("ak.E"))
r=A.Y.az(n,null)
$.hq0.n(0,a0,r)
t=8
w=11
return B.b(B.ait(a0,r),$async$X5)
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
return B.b(B.az(),$async$X5)
case 16:q=a6
w=17
return B.b(q.aB("String","ngmy_slides_decks_"+A.a.i(a3.toLowerCase()),r),$async$X5)
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
return B.i($async$X5,v)},
JE:function JE(d,e){this.a=d
this.b=e},
asI:function asI(d,e){this.a=d
this.b=e},
vd:function vd(d,e){this.a=d
this.b=e},
mT:function mT(d,e){this.a=d
this.b=e},
hF:function hF(d,e){this.a=d
this.b=e},
eP:function eP(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){var _=this
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
m0:function m0(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
ckn:function ckn(){},
cko:function cko(){},
ckm:function ckm(){},
i3:function i3(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3){var _=this
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
ckc:function ckc(){},
ckd:function ckd(){},
ck9:function ck9(){},
cka:function cka(){},
ckb:function ckb(){},
jY:function jY(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
ckE:function ckE(d){this.a=d},
ckF:function ckF(){},
ckz:function ckz(d){this.a=d},
cky:function cky(){},
cku:function cku(){},
ckv:function ckv(){},
ckw:function ckw(){},
ckx:function ckx(){},
ckA:function ckA(d){this.a=d},
ckB:function ckB(){},
ckC:function ckC(){},
im9(d,e){var w=x.N,v=B.T(w,x.F)
w=new C.fQY(e,v,d,B.aR(w))
w.$1(new C.fQU())
w.$1(new C.fQV())
w.$1(new C.fQW())
w.$1(new C.fQX())
return v},
fQY:function fQY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fQU:function fQU(){},
fQV:function fQV(){},
fQW:function fQW(){},
fQX:function fQX(){},
b3d:function b3d(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cki:function cki(d){this.a=d},
ckh:function ckh(){},
ckj:function ckj(){},
ckk:function ckk(d,e){this.a=d
this.b=e},
ckl:function ckl(d){this.a=d},
apK:function apK(d,e){this.c=d
this.a=e},
blt:function blt(d,e){var _=this
_.d=$
_.by$=d
_.a9$=e
_.c=_.a=null},
dPU:function dPU(){},
aN0:function aN0(){},
ckq(d,e,f){var w=0,v=B.j(x.y),u,t
var $async$ckq=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:if(f){u=!0
w=1
break}t=A.a.i(e)
if(t.length===0){if(d.e!=null)d.L(x.q).f.U(D.fiV)
u=!1
w=1
break}u=B.lc(!1,d,t,!1,null,A.a80,null)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ckq,v)},
hWB(d){var w=A.d.bj(D.Io,new C.ckr(d))
if(w<0)return!0
return w>=4},
hWC(d){var w=A.d.bj($.bGC(),new C.cks(d))
if(w<0)return!0
return w>=5},
ckr:function ckr(d){this.a=d},
cks:function cks(d){this.a=d},
inT(d,e,f){var w,v=null,u=""+f,t="ngmy-pdf-"+A.a.gX(d)+"-"+u,s=f>0?d+"#page="+u:d
$.xp()
$.pU().pc(t,new C.fTP(s),!0)
u=B.a([B.BX(v,A.pJ,t)],x.p)
if(e.length!==0){w=B.m(4)
u.push(B.ap(v,B.q(v,B.d(e,v,v,v,v,v,v,D.ftT,v,v,v),A.f,v,v,new B.p(A.aU,v,v,w,v,v,A.n),v,v,v,v,A.n_,v,v,v),v,v,4,v,4,v))}return new B.an(A.a0,v,A.b2,A.t,u,v)},
fTP:function fTP(d){this.a=d},
inu(){return C.hfQ()},
ikn(){return C.bEA()},
ims(){return C.hfH()},
aRi(d,e,f){var w=0,v=B.j(x.H),u
var $async$aRi=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:w=e==="__ngmy_slides_pdf_staged__"?3:4
break
case 3:w=5
return B.b(C.fSV(d,f),$async$aRi)
case 5:w=1
break
case 4:if(d.e!=null)d.L(x.q).f.U(B.b3(null,null,null,null,null,A.t,null,B.d(e,null,null,null,null,null,null,null,null,null,null),null,A.a_,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$aRi,v)},
fSV(d,e){var w=0,v=B.j(x.H),u
var $async$fSV=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:u=$.bCK
if(u==null)u=e+".pdf"
w=2
return B.b(B.bT(A.L,null,new C.fSW(u,e==="Invoice"),d,!0,!1,!0,null,!1,!1,x.H),$async$fSV)
case 2:return B.h(null,v)}})
return B.i($async$fSV,v)},
fSW:function fSW(d,e){this.a=d
this.b=e},
aes:function aes(d,e,f){this.c=d
this.d=e
this.a=f},
eBC:function eBC(d,e){this.a=d
this.b=e},
eBD:function eBD(d,e){this.a=d
this.b=e},
eBE:function eBE(d,e){this.a=d
this.b=e},
eBF:function eBF(d){this.a=d},
aeJ:function aeJ(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
b3c(d,e,f,g,h,i,j,k,l,m,n,o){return new C.b3b(g,m,f,d,e,h,l,k,j,o,i,null)},
hCF(d){return B.cs(new C.fQT(d))},
hfS(d){switch(d.a){case 0:return"\u23ed\ufe0f"
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
inC(d){if(d===D.ct)return"None"
return C.hfS(d)},
bDf(d,e,f,g){return C.idg(d,e,f,g)},
idg(d,e,f,g){var w=0,v=B.j(x.H),u,t,s
var $async$bDf=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:s={}
if(d.e==null){w=1
break}t=B.a6(d,!0)
if($.hct&&t.pX())t.eO()
$.hct=!0
s.a=null
w=3
return B.b(B.i_(A.bo,!0,"Animation preview",d,new C.fzw(s,e,g,f),null,A.eH,!0,x.H),$async$bDf)
case 3:s=s.a
if(s!=null)s.a1(0)
$.hct=!1
case 1:return B.h(u,v)}})
return B.i($async$bDf,v)},
h2y(d,e,f){var w=0,v=B.j(x.H),u,t,s,r
var $async$h2y=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:e.$0()
if(d.e==null){w=1
break}t=A.j.E(B.aH(d,A.c1,x.w).w.a.a*0.88,280,440)
s=f===D.ct
r=s?"\u23ed\ufe0f None \u2014 no slide transition":C.hfS(f)+" Slide transition preview"
s=s?Ah.GE:A.rM
w=3
return B.b(C.bDf(d,s,new B.a5(t,t*0.56,B.by(B.m(14),new C.aKx(f,null),A.aq),null),r),$async$h2y)
case 3:case 1:return B.h(u,v)}})
return B.i($async$h2y,v)},
hBX(d,e,f){var w,v,u=null,t=A.cw.aA(0,A.j.E(e,0,1))
switch(d.a){case 0:return f
case 1:case 13:case 18:return B.da(f,t)
case 2:case 17:return B.dP(B.da(f,t),new B.o((1-t)*48,0))
case 3:return B.dP(B.da(f,t),new B.o(-(1-t)*48,0))
case 4:case 21:return B.dP(B.da(f,t),new B.o(0,(1-t)*36))
case 5:return B.dP(B.da(f,t),new B.o(0,-(1-t)*36))
case 6:case 16:return B.ed(A.A,B.da(f,t),0.5+t*0.5,u,u)
case 7:return B.ed(A.A,B.da(f,t),1.4-t*0.4,u,u)
case 8:w=B.dr()
v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
w.fL((1-t)*1.2)
return B.fx(A.A,B.da(f,t),u,w,!0)
case 9:w=B.dr()
v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
w.km((1-t)*1.2)
return B.fx(A.A,B.da(f,t),u,w,!0)
case 10:case 19:w=B.dr()
v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.002
w.n_((1-t)*0.8)
v=0.6+t*0.4
w.k5(v,v,v,1)
return B.fx(A.A,B.da(f,t),u,w,!0)
case 11:case 12:case 14:case 15:case 20:return B.dP(B.da(f,t),new B.o((1-t)*24,0))}},
bG6(d,e,f){var w=0,v=B.j(x.H),u,t,s,r
var $async$bG6=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:e.$0()
if(d.e==null){w=1
break}t=A.j.E(B.aH(d,A.c1,x.w).w.a.a*0.88,300,440)
s=f===D.ct
r=s?"\u23ed\ufe0f None \u2014 no element animation":C.hfS(f)+" Element animation preview"
s=s?Ah.GE:A.rM
w=3
return B.b(C.bDf(d,s,new B.a5(t,t*0.62,B.by(B.m(14),new C.aBd(f,null),A.aq),null),r),$async$bG6)
case 3:case 1:return B.h(u,v)}})
return B.i($async$bG6,v)},
inB(d){var w,v,u,t,s=$.ah6.W(0,d)
if(s!=null){$.ah6.n(0,d,s)
return s}w=A.cI.aN(A.a.b2(d,A.a.co(d,",")+1))
$.ah6.n(0,d,w)
v=$.hdk=$.hdk+w.length
u=B.a4($.ah6).k("cx<1>")
for(;;){if(!(v>41943040&&$.ah6.a>1))break
t=new B.cx($.ah6,u).gae(0)
if(!t.C())B.bi(B.fp())
v-=$.ah6.W(0,t.gR(0)).length
$.hdk=v}return w},
ing(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=B.ag("\\*([^*]+)\\*|\\^([^^]+)\\^|~([^~]+)~",!0,!1,!1,!1).kY(0,d),j=B.C(k,B.a4(k).k("M.E"))
if(j.length===0)return l
w=e.r
if(w==null)w=24
v=B.a([],x.aF)
for(k=j.length,u=w*0.62,t=w*2.4,s=w*1.6,r=0,q=0;q<j.length;j.length===k||(0,B.J)(j),++q){p=j[q].b
o=p.index
if(o>r){n=A.a.aC(d,r,o)
m=f.$1(e)
v.push(new B.en(n,l,l,A.cJ,l,l,l,l,l,l,m))}n=p[1]
if(n!=null){m=f.$1(e.Ty(s,A.u))
v.push(new B.en(n,l,l,A.cJ,l,l,l,l,l,l,m))}else{n=p[2]
if(n!=null){m=f.$1(e.Ty(t,A.u))
v.push(new B.en(n,l,l,A.cJ,l,l,l,l,l,l,m))}else{n=p[3]
m=f.$1(e.Ty(u,A.cC))
v.push(new B.en(n,l,l,A.cJ,l,l,l,l,l,l,m))}}r=o+p[0].length}if(r<d.length){k=A.a.b2(d,r)
v.push(B.cP(l,l,l,l,l,l,l,l,l,f.$1(e),k))}return v},
a3D(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=x.v
switch(d){case"circle":m=new B.aF($.Q().r,A.ai,n,n,B.a([],m))
m.D(new B.jP(e))
return m
case"rounded":m=new B.aF($.Q().r,A.ai,n,n,B.a([],m))
w=e.gdA()*0.18
m.D(new B.j8(B.bl(e,new B.aN(w,w))))
return m
case"triangle":m=new B.aF($.Q().r,A.ai,n,n,B.a([],m))
m.D(new B.aZ(e.gbw().a,e.b))
w=e.d
m.D(new B.aq(e.c,w))
m.D(new B.aq(e.a,w))
m.D(new B.bv())
return m
case"hexagon":w=$.Q()
m=B.a([],m)
v=new B.aF(w.r,A.ai,n,n,m)
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
v.ab()}}v.D(new B.bv())
return v
case"diamond":m=new B.aF($.Q().r,A.ai,n,n,B.a([],m))
m.D(new B.aZ(e.gbw().a,e.b))
m.D(new B.aq(e.c,e.gbw().b))
m.D(new B.aq(e.gbw().a,e.d))
m.D(new B.aq(e.a,e.gbw().b))
m.D(new B.bv())
return m
case"arch":m=new B.aF($.Q().r,A.ai,n,n,B.a([],m))
w=e.a
u=e.d
m.D(new B.aZ(w,u))
t=e.c
s=(t-w)/2
p=e.b+s
m.D(new B.aq(w,p))
m.bdo(new B.o(t,p),new B.aN(s,s))
m.D(new B.aq(t,u))
m.D(new B.bv())
return m
default:m=new B.aF($.Q().r,A.ai,n,n,B.a([],m))
m.D(new B.ov(e))
return m}},
fOs(d,e,f){return B.cs(new C.fOt(D.fb4.q(0,d),d,f,e))},
b3b:function b3b(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
ckg:function ckg(d){this.a=d},
ckf:function ckf(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cke:function cke(){},
b38:function b38(d,e){this.b=d
this.a=e},
fQT:function fQT(d){this.a=d},
fQS:function fQS(d,e){this.a=d
this.b=e},
fzw:function fzw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fzu:function fzu(d){this.a=d},
fzv:function fzv(d,e){this.a=d
this.b=e},
aKx:function aKx(d,e){this.c=d
this.a=e},
bwU:function bwU(d,e){var _=this
_.d=$
_.by$=d
_.a9$=e
_.c=_.a=null},
fgd:function fgd(d,e,f){this.a=d
this.b=e
this.c=f},
aLe:function aLe(d,e){this.b=d
this.a=e},
Wc:function Wc(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
blF:function blF(d,e){var _=this
_.d=$
_.by$=d
_.a9$=e
_.c=_.a=null},
e0u:function e0u(d){this.a=d},
e0t:function e0t(d){this.a=d},
e0s:function e0s(d){this.a=d},
JD:function JD(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ck8:function ck8(d){this.a=d},
ck7:function ck7(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aBd:function aBd(d,e){this.c=d
this.a=e},
bg0:function bg0(){this.d=0
this.c=this.a=null},
dew:function dew(d){this.a=d},
dev:function dev(d){this.a=d},
a8L:function a8L(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bml:function bml(d,e){var _=this
_.d=null
_.by$=d
_.a9$=e
_.c=_.a=null},
eoZ:function eoZ(d,e,f){this.a=d
this.b=e
this.c=f},
b17:function b17(d,e,f,g){var _=this
_.c=d
_.e=e
_.f=f
_.a=g},
bhd:function bhd(d,e,f){this.b=d
this.c=e
this.a=f},
bsp:function bsp(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
f58:function f58(){},
fOt:function fOt(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bts:function bts(d,e,f){this.b=d
this.c=e
this.a=f},
aNe:function aNe(){},
aNJ:function aNJ(){},
aP2:function aP2(){},
fRU(){var w=0,v=B.j(x.a6),u,t,s,r
var $async$fRU=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.xL.cq().MD(D.dt_,A.uA,!0),$async$fRU)
case 3:r=e
if(r==null||J.cr(r.a)){u=null
w=1
break}t=J.fs(r.a)
s=t.c
if(s==null)throw B.W("That file could not be opened. Try another file.")
if(s.length>8388608)throw B.W("That file is too big. Use a file under 8 MB.")
u=C.ina(t.b,s)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fRU,v)},
ina(d,e){var w,v=d.toLowerCase()
if(A.a.c8(v,".pdf"))return new C.a93(d,new B.a1d(A.cP.gcu().aN(e),"application/pdf"),"")
if(A.a.c8(v,".docx")){w=C.if7(e)
if(A.a.i(w).length===0)throw B.W("No readable words were found in that Word file.")
return new C.a93(d,null,w.length>6e4?A.a.aC(w,0,6e4):w)}w=A.c9.Lo(0,e,!0)
if(A.a.i(w).length===0)throw B.W("That file is empty.")
return new C.a93(d,null,w.length>6e4?A.a.aC(w,0,6e4):w)},
if7(d){var w,v,u,t,s,r,q,p,o=null,n=new C.cGa().cQd(B.rG(d,A.iq,o,o),o,o,!1).cS8(0,"word/document.xml")
if(n==null)return""
w=n.d_i()
v=A.c9.Lo(0,w==null?$.hF4():w,!0).split("</w:p>")
u=new B.fd("")
for(w=v.length,t=x.N,s=0;s<w;++s){r=v[s]
q=B.ag("<w:t[^>]*>([^<]*)</w:t>",!0,!1,!1,!1).kY(0,r)
p=A.a.i(B.cE(q,new C.fCD(),B.a4(q).k("M.E"),t).he(0))
if(p.length!==0){q=B.aL(p,"&lt;","<")
q=B.aL(q,"&gt;",">")
q=B.aL(q,"&quot;",'"')
q=B.aL(q,"&apos;","'")
q=B.aL(q,"&amp;","&")+"\n"
u.a+=q}}w=u.a
return w.charCodeAt(0)==0?w:w},
a93:function a93(d,e,f){this.a=d
this.b=e
this.c=f},
fCD:function fCD(){},
hWI(d,e,f,g,h,i,j,k,l){return new C.OO(l,e,d,g,f,i,h,j,k,null)},
OO:function OO(d,e,f,g,h,i,j,k,l,m){var _=this
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
aG5:function aG5(d,e,f,g,h,i,j,k,l){var _=this
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
_.by$=k
_.a9$=l
_.c=_.a=null},
eHQ:function eHQ(d){this.a=d},
eHO:function eHO(){},
eHP:function eHP(d){this.a=d},
eEd:function eEd(){},
eEe:function eEe(){},
eEf:function eEf(d,e){this.a=d
this.b=e},
eFO:function eFO(d){this.a=d},
eFC:function eFC(){},
eFD:function eFD(){},
eDB:function eDB(){},
eGW:function eGW(d){this.a=d},
eHM:function eHM(d,e){this.a=d
this.b=e},
eFM:function eFM(d,e){this.a=d
this.b=e},
eHz:function eHz(d){this.a=d},
eHA:function eHA(){},
eHB:function eHB(){},
eHC:function eHC(d){this.a=d},
eHD:function eHD(){},
eD_:function eD_(d){this.a=d},
eHN:function eHN(){},
eEV:function eEV(d,e){this.a=d
this.b=e},
eCY:function eCY(d){this.a=d},
eCZ:function eCZ(d){this.a=d},
eFh:function eFh(d){this.a=d},
eFi:function eFi(d,e,f){this.a=d
this.b=e
this.c=f},
eFj:function eFj(d){this.a=d},
eEU:function eEU(){},
eET:function eET(d){this.a=d},
eER:function eER(){},
eEQ:function eEQ(d){this.a=d},
eES:function eES(){},
eE9:function eE9(d){this.a=d},
eEa:function eEa(d){this.a=d},
eF0:function eF0(d){this.a=d},
eEW:function eEW(d){this.a=d},
eEX:function eEX(d){this.a=d},
eEY:function eEY(d){this.a=d},
eEZ:function eEZ(d){this.a=d},
eF_:function eF_(d){this.a=d},
eF1:function eF1(d,e){this.a=d
this.b=e},
eD1:function eD1(){},
eD2:function eD2(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eFc:function eFc(){},
eFd:function eFd(d,e){this.a=d
this.b=e},
eFa:function eFa(d,e,f){this.a=d
this.b=e
this.c=f},
eFb:function eFb(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eF4:function eF4(d,e,f){this.a=d
this.b=e
this.c=f},
eF5:function eF5(d,e,f){this.a=d
this.b=e
this.c=f},
eF6:function eF6(d){this.a=d},
eF7:function eF7(d,e){this.a=d
this.b=e},
eF8:function eF8(d,e){this.a=d
this.b=e},
eF9:function eF9(d,e){this.a=d
this.b=e},
eF3:function eF3(d,e){this.a=d
this.b=e},
eFf:function eFf(d){this.a=d},
eFg:function eFg(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eFe:function eFe(d){this.a=d},
eFx:function eFx(){},
eFy:function eFy(){},
eFz:function eFz(){},
eFA:function eFA(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eFu:function eFu(d){this.a=d},
eFw:function eFw(){},
eFv:function eFv(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
eFs:function eFs(d,e,f){this.a=d
this.b=e
this.c=f},
eFt:function eFt(d,e){this.a=d
this.b=e},
eFB:function eFB(){},
eF2:function eF2(d,e){this.a=d
this.b=e},
eDi:function eDi(){},
eDj:function eDj(d,e,f){this.a=d
this.b=e
this.c=f},
eDk:function eDk(d){this.a=d},
eDl:function eDl(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eDh:function eDh(d){this.a=d},
eFH:function eFH(d){this.a=d},
eFG:function eFG(d,e){this.a=d
this.b=e},
eFF:function eFF(d,e){this.a=d
this.b=e},
eFE:function eFE(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eFI:function eFI(d,e){this.a=d
this.b=e},
eBX:function eBX(d,e){this.a=d
this.b=e},
eDg:function eDg(d,e){this.a=d
this.b=e},
eDe:function eDe(d){this.a=d},
eFQ:function eFQ(d,e,f){this.a=d
this.b=e
this.c=f},
eDa:function eDa(d,e){this.a=d
this.b=e},
eD9:function eD9(d){this.a=d},
eFP:function eFP(d,e,f){this.a=d
this.b=e
this.c=f},
eD0:function eD0(d){this.a=d},
eDC:function eDC(){},
eHx:function eHx(d,e){this.a=d
this.b=e},
eHy:function eHy(d,e,f){this.a=d
this.b=e
this.c=f},
eGX:function eGX(d,e,f){this.a=d
this.b=e
this.c=f},
eBY:function eBY(d){this.a=d},
eBV:function eBV(d,e){this.a=d
this.b=e},
eBL:function eBL(d,e){this.a=d
this.b=e},
eBI:function eBI(d){this.a=d},
eBH:function eBH(d,e){this.a=d
this.b=e},
eBJ:function eBJ(d,e){this.a=d
this.b=e},
eDc:function eDc(d){this.a=d},
eDd:function eDd(d,e){this.a=d
this.b=e},
eDb:function eDb(d){this.a=d},
eCp:function eCp(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
eCq:function eCq(d,e){this.a=d
this.b=e},
eCu:function eCu(d,e){this.a=d
this.b=e},
eCv:function eCv(d){this.a=d},
eCs:function eCs(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eCt:function eCt(d){this.a=d},
eCr:function eCr(){},
eCo:function eCo(d,e,f){this.a=d
this.b=e
this.c=f},
eFr:function eFr(d,e){this.a=d
this.b=e},
eHG:function eHG(d){this.a=d},
eHH:function eHH(d,e){this.a=d
this.b=e},
eHI:function eHI(d){this.a=d},
eHJ:function eHJ(d,e,f){this.a=d
this.b=e
this.c=f},
eHF:function eHF(d){this.a=d},
eHc:function eHc(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eHb:function eHb(d,e,f){this.a=d
this.b=e
this.c=f},
eHa:function eHa(){},
eH9:function eH9(d,e,f){this.a=d
this.b=e
this.c=f},
eH8:function eH8(d,e){this.a=d
this.b=e},
eH5:function eH5(d,e,f){this.a=d
this.b=e
this.c=f},
eH3:function eH3(d){this.a=d},
eH4:function eH4(d){this.a=d},
eH7:function eH7(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eH6:function eH6(d){this.a=d},
eE5:function eE5(d,e){this.a=d
this.b=e},
eE4:function eE4(d,e){this.a=d
this.b=e},
eGY:function eGY(){},
eHw:function eHw(d,e){this.a=d
this.b=e},
eHu:function eHu(d){this.a=d},
eHv:function eHv(d){this.a=d},
eBQ:function eBQ(d,e){this.a=d
this.b=e},
eBO:function eBO(d){this.a=d},
eBP:function eBP(d){this.a=d},
eBR:function eBR(d,e){this.a=d
this.b=e},
eBS:function eBS(d,e,f){this.a=d
this.b=e
this.c=f},
eBW:function eBW(d,e){this.a=d
this.b=e},
eBN:function eBN(d,e,f){this.a=d
this.b=e
this.c=f},
eBM:function eBM(d){this.a=d},
eFN:function eFN(d,e,f){this.a=d
this.b=e
this.c=f},
eHE:function eHE(d,e,f){this.a=d
this.b=e
this.c=f},
eE8:function eE8(d,e,f){this.a=d
this.b=e
this.c=f},
eE7:function eE7(){},
eCy:function eCy(d,e,f){this.a=d
this.b=e
this.c=f},
eCz:function eCz(d){this.a=d},
eBK:function eBK(d,e){this.a=d
this.b=e},
eDA:function eDA(d,e){this.a=d
this.b=e},
eBT:function eBT(d,e){this.a=d
this.b=e},
eC1:function eC1(d){this.a=d},
eC2:function eC2(d,e){this.a=d
this.b=e},
eC3:function eC3(d,e){this.a=d
this.b=e},
eC0:function eC0(d){this.a=d},
eCe:function eCe(d,e){this.a=d
this.b=e},
eC_:function eC_(d){this.a=d},
eCh:function eCh(d){this.a=d},
eCi:function eCi(d){this.a=d},
eCj:function eCj(d){this.a=d},
eCk:function eCk(d){this.a=d},
eCl:function eCl(d){this.a=d},
eCm:function eCm(){},
eCn:function eCn(){},
eC4:function eC4(d){this.a=d},
eC5:function eC5(d){this.a=d},
eC6:function eC6(d){this.a=d},
eC7:function eC7(d){this.a=d},
eC8:function eC8(d){this.a=d},
eC9:function eC9(d){this.a=d},
eCa:function eCa(d){this.a=d},
eCb:function eCb(d){this.a=d},
eCc:function eCc(d){this.a=d},
eCd:function eCd(d){this.a=d},
eCf:function eCf(d){this.a=d},
eCg:function eCg(d,e){this.a=d
this.b=e},
eDz:function eDz(d,e,f){this.a=d
this.b=e
this.c=f},
eDy:function eDy(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eDx:function eDx(d,e,f){this.a=d
this.b=e
this.c=f},
eDw:function eDw(d,e){this.a=d
this.b=e},
eBU:function eBU(d,e){this.a=d
this.b=e},
eCC:function eCC(d){this.a=d},
eCB:function eCB(d){this.a=d},
eCA:function eCA(d,e){this.a=d
this.b=e},
eCD:function eCD(d){this.a=d},
eCE:function eCE(d){this.a=d},
eCF:function eCF(d,e){this.a=d
this.b=e},
eDf:function eDf(d){this.a=d},
eFq:function eFq(d,e){this.a=d
this.b=e},
eFp:function eFp(d,e){this.a=d
this.b=e},
eFo:function eFo(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eFm:function eFm(d){this.a=d},
eFn:function eFn(d,e){this.a=d
this.b=e},
eFk:function eFk(){},
eFl:function eFl(){},
eGZ:function eGZ(){},
eH_:function eH_(d,e){this.a=d
this.b=e},
eH0:function eH0(){},
eH1:function eH1(d){this.a=d},
eH2:function eH2(d,e){this.a=d
this.b=e},
eBZ:function eBZ(d,e){this.a=d
this.b=e},
eD3:function eD3(){},
eD4:function eD4(){},
eD5:function eD5(){},
eD8:function eD8(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eD7:function eD7(d,e){this.a=d
this.b=e},
eD6:function eD6(d,e,f){this.a=d
this.b=e
this.c=f},
eEz:function eEz(d){this.a=d},
eEy:function eEy(){},
eEA:function eEA(d,e){this.a=d
this.b=e},
eEB:function eEB(d,e){this.a=d
this.b=e},
eEx:function eEx(d){this.a=d},
eEC:function eEC(d,e){this.a=d
this.b=e},
eEw:function eEw(d){this.a=d},
eED:function eED(d,e){this.a=d
this.b=e},
eEv:function eEv(d){this.a=d},
eEE:function eEE(d,e){this.a=d
this.b=e},
eEu:function eEu(d){this.a=d},
eEF:function eEF(d,e){this.a=d
this.b=e},
eEt:function eEt(d,e){this.a=d
this.b=e},
eEG:function eEG(d,e){this.a=d
this.b=e},
eEs:function eEs(d){this.a=d},
eEH:function eEH(d,e){this.a=d
this.b=e},
eEr:function eEr(d){this.a=d},
eEk:function eEk(d,e){this.a=d
this.b=e},
eEl:function eEl(d){this.a=d},
eEm:function eEm(d){this.a=d},
eEj:function eEj(d){this.a=d},
eEn:function eEn(d,e){this.a=d
this.b=e},
eEi:function eEi(d){this.a=d},
eEo:function eEo(d,e){this.a=d
this.b=e},
eEh:function eEh(d){this.a=d},
eEp:function eEp(d,e){this.a=d
this.b=e},
eEg:function eEg(d){this.a=d},
eEq:function eEq(d){this.a=d},
eDs:function eDs(d){this.a=d},
eDt:function eDt(d){this.a=d},
eDv:function eDv(d){this.a=d},
eDn:function eDn(d){this.a=d},
eDm:function eDm(d,e){this.a=d
this.b=e},
eDo:function eDo(d,e){this.a=d
this.b=e},
eDp:function eDp(d){this.a=d},
eDq:function eDq(d){this.a=d},
eDr:function eDr(d,e){this.a=d
this.b=e},
eDu:function eDu(d){this.a=d},
eHK:function eHK(d){this.a=d},
eHL:function eHL(d){this.a=d},
eEK:function eEK(d,e){this.a=d
this.b=e},
eEJ:function eEJ(d,e){this.a=d
this.b=e},
eEI:function eEI(d,e){this.a=d
this.b=e},
eEL:function eEL(d){this.a=d},
eEM:function eEM(d){this.a=d},
eG8:function eG8(d,e){this.a=d
this.b=e},
eG9:function eG9(d){this.a=d},
eGa:function eGa(d){this.a=d},
eGl:function eGl(d){this.a=d},
eGw:function eGw(d){this.a=d},
eGH:function eGH(d){this.a=d},
eGO:function eGO(d){this.a=d},
eGP:function eGP(d){this.a=d},
eGQ:function eGQ(d){this.a=d},
eGR:function eGR(d){this.a=d},
eGS:function eGS(d,e){this.a=d
this.b=e},
eGb:function eGb(d){this.a=d},
eGc:function eGc(d){this.a=d},
eGd:function eGd(d){this.a=d},
eGe:function eGe(d){this.a=d},
eGf:function eGf(d){this.a=d},
eGg:function eGg(d){this.a=d},
eGh:function eGh(d){this.a=d},
eGi:function eGi(d){this.a=d},
eGj:function eGj(d){this.a=d},
eGk:function eGk(d){this.a=d},
eGm:function eGm(d){this.a=d},
eGn:function eGn(d){this.a=d},
eGo:function eGo(d){this.a=d},
eGp:function eGp(d){this.a=d},
eGq:function eGq(d){this.a=d},
eGr:function eGr(d){this.a=d},
eGs:function eGs(d){this.a=d},
eGt:function eGt(d){this.a=d},
eGu:function eGu(d){this.a=d},
eFZ:function eFZ(d){this.a=d},
eGv:function eGv(d){this.a=d},
eG6:function eG6(d){this.a=d},
eGx:function eGx(d){this.a=d},
eG5:function eG5(d,e){this.a=d
this.b=e},
eGy:function eGy(d,e){this.a=d
this.b=e},
eGz:function eGz(d,e){this.a=d
this.b=e},
eG4:function eG4(d,e,f){this.a=d
this.b=e
this.c=f},
eFV:function eFV(d,e){this.a=d
this.b=e},
eG7:function eG7(d){this.a=d},
eGT:function eGT(d,e){this.a=d
this.b=e},
eGV:function eGV(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eGU:function eGU(d,e){this.a=d
this.b=e},
eGA:function eGA(d,e,f){this.a=d
this.b=e
this.c=f},
eG3:function eG3(d,e,f){this.a=d
this.b=e
this.c=f},
eFU:function eFU(d,e,f){this.a=d
this.b=e
this.c=f},
eFS:function eFS(d,e){this.a=d
this.b=e},
eGB:function eGB(d,e){this.a=d
this.b=e},
eG2:function eG2(d,e){this.a=d
this.b=e},
eFT:function eFT(d,e){this.a=d
this.b=e},
eFR:function eFR(d,e){this.a=d
this.b=e},
eGC:function eGC(d){this.a=d},
eG1:function eG1(d){this.a=d},
eGD:function eGD(d){this.a=d},
eGE:function eGE(d){this.a=d},
eGF:function eGF(d){this.a=d},
eGG:function eGG(d){this.a=d},
eG0:function eG0(d){this.a=d},
eGI:function eGI(d){this.a=d},
eGJ:function eGJ(d){this.a=d},
eGK:function eGK(d,e){this.a=d
this.b=e},
eG_:function eG_(d){this.a=d},
eGL:function eGL(d,e){this.a=d
this.b=e},
eFY:function eFY(d){this.a=d},
eGM:function eGM(d,e){this.a=d
this.b=e},
eFX:function eFX(d){this.a=d},
eGN:function eGN(d,e){this.a=d
this.b=e},
eFW:function eFW(d){this.a=d},
eCx:function eCx(d,e,f){this.a=d
this.b=e
this.c=f},
eCw:function eCw(d,e){this.a=d
this.b=e},
eHf:function eHf(d,e){this.a=d
this.b=e},
eHe:function eHe(d,e){this.a=d
this.b=e},
eHg:function eHg(d,e){this.a=d
this.b=e},
eHd:function eHd(d,e){this.a=d
this.b=e},
eDF:function eDF(d,e){this.a=d
this.b=e},
eDE:function eDE(d){this.a=d},
eDG:function eDG(d,e){this.a=d
this.b=e},
eDD:function eDD(d){this.a=d},
eEc:function eEc(){},
eEb:function eEb(){},
eHs:function eHs(d){this.a=d},
eHr:function eHr(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eHq:function eHq(d,e){this.a=d
this.b=e},
eHl:function eHl(d,e){this.a=d
this.b=e},
eHp:function eHp(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eHm:function eHm(d,e){this.a=d
this.b=e},
eHh:function eHh(d){this.a=d},
eHi:function eHi(d){this.a=d},
eHj:function eHj(d){this.a=d},
eHk:function eHk(d){this.a=d},
eHn:function eHn(d,e){this.a=d
this.b=e},
eHo:function eHo(d,e){this.a=d
this.b=e},
eHt:function eHt(d){this.a=d},
eCX:function eCX(d){this.a=d},
eCW:function eCW(d,e,f){this.a=d
this.b=e
this.c=f},
eCV:function eCV(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eCK:function eCK(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
eCL:function eCL(d,e){this.a=d
this.b=e},
eCM:function eCM(d,e){this.a=d
this.b=e},
eCN:function eCN(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eCJ:function eCJ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eCO:function eCO(d,e){this.a=d
this.b=e},
eCQ:function eCQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eCP:function eCP(d,e){this.a=d
this.b=e},
eCR:function eCR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eCI:function eCI(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eCS:function eCS(d,e){this.a=d
this.b=e},
eCH:function eCH(d,e){this.a=d
this.b=e},
eCT:function eCT(d,e){this.a=d
this.b=e},
eCG:function eCG(d){this.a=d},
eCU:function eCU(d,e){this.a=d
this.b=e},
eEO:function eEO(d){this.a=d},
eEN:function eEN(d){this.a=d},
eEP:function eEP(d,e){this.a=d
this.b=e},
eDT:function eDT(d,e){this.a=d
this.b=e},
eDU:function eDU(d,e){this.a=d
this.b=e},
eDS:function eDS(d,e){this.a=d
this.b=e},
eDV:function eDV(d,e){this.a=d
this.b=e},
eDR:function eDR(d,e){this.a=d
this.b=e},
eDW:function eDW(d,e){this.a=d
this.b=e},
eDQ:function eDQ(d,e){this.a=d
this.b=e},
eDX:function eDX(d,e){this.a=d
this.b=e},
eDP:function eDP(d,e){this.a=d
this.b=e},
eDY:function eDY(d,e){this.a=d
this.b=e},
eDO:function eDO(d,e){this.a=d
this.b=e},
eDZ:function eDZ(d,e,f){this.a=d
this.b=e
this.c=f},
eDN:function eDN(d,e){this.a=d
this.b=e},
eE_:function eE_(d,e,f){this.a=d
this.b=e
this.c=f},
eDM:function eDM(d,e){this.a=d
this.b=e},
eE0:function eE0(d,e){this.a=d
this.b=e},
eDL:function eDL(d,e,f){this.a=d
this.b=e
this.c=f},
eDI:function eDI(d,e){this.a=d
this.b=e},
eE1:function eE1(d,e){this.a=d
this.b=e},
eDK:function eDK(d,e){this.a=d
this.b=e},
eE2:function eE2(d,e){this.a=d
this.b=e},
eDJ:function eDJ(d,e,f){this.a=d
this.b=e
this.c=f},
eDH:function eDH(d,e){this.a=d
this.b=e},
eE3:function eE3(d,e){this.a=d
this.b=e},
eE6:function eE6(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eBG:function eBG(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eFL:function eFL(d,e){this.a=d
this.b=e},
eFJ:function eFJ(d){this.a=d},
eFK:function eFK(d,e){this.a=d
this.b=e},
age:function age(d,e,f){this.a=d
this.b=e
this.c=f},
aAA:function aAA(d,e){this.c=d
this.a=e},
beN:function beN(d,e){var _=this
_.e=_.d=$
_.cR$=d
_.b9$=e
_.c=_.a=null},
d9Y:function d9Y(d){this.a=d},
d9X:function d9X(d){this.a=d},
bf1:function bf1(d,e){this.c=d
this.a=e},
dal:function dal(d){this.a=d},
dam:function dam(d){this.a=d},
KF:function KF(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
beM:function beM(){this.d=!1
this.c=this.a=null},
d9V:function d9V(d){this.a=d},
d9R:function d9R(d){this.a=d},
d9W:function d9W(d){this.a=d},
d9Q:function d9Q(d){this.a=d},
d9U:function d9U(d){this.a=d},
d9S:function d9S(d){this.a=d},
d9T:function d9T(d,e){this.a=d
this.b=e},
Qx:function Qx(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
a0H:function a0H(d,e,f){this.c=d
this.d=e
this.a=f},
aG8:function aG8(d,e,f){var _=this
_.d=$
_.e=d
_.f=null
_.r=!0
_.w=$
_.x=null
_.y=!1
_.z=null
_.by$=e
_.a9$=f
_.c=_.a=null},
eIq:function eIq(){},
eIg:function eIg(d){this.a=d},
eIp:function eIp(d){this.a=d},
eIh:function eIh(d){this.a=d},
eIi:function eIi(d){this.a=d},
eIc:function eIc(d){this.a=d},
eId:function eId(d,e){this.a=d
this.b=e},
eIe:function eIe(d){this.a=d},
eIf:function eIf(d,e,f){this.a=d
this.b=e
this.c=f},
eIn:function eIn(){},
eIo:function eIo(d){this.a=d},
eIj:function eIj(d){this.a=d},
eIk:function eIk(d){this.a=d},
eIl:function eIl(d){this.a=d},
eIm:function eIm(d){this.a=d},
eIr:function eIr(d,e,f){this.a=d
this.b=e
this.c=f},
eIt:function eIt(d,e){this.a=d
this.b=e},
eIs:function eIs(d){this.a=d},
KL:function KL(d,e){this.c=d
this.a=e},
btY:function btY(d,e){this.b=d
this.a=e},
bjN:function bjN(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bjM:function bjM(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aLW:function aLW(){},
aNW:function aNW(){},
bzM:function bzM(){},
aNX:function aNX(){},
fTQ(){var w=0,v=B.j(x.bZ),u,t,s,r,q
var $async$fTQ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.xL.cq().MD(B.a(["pdf"],x.s),A.uA,!0),$async$fTQ)
case 3:q=e
if(q==null||J.cr(q.a)){u=null
w=1
break}t=J.fs(q.a)
s=t.c
if(s==null||s.length===0){u=null
w=1
break}r=A.a.i(t.b)
if(r.length===0)r="document.pdf"
u=new B.br5(s,"data:application/pdf;base64,"+A.cP.gcu().aN(s),r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fTQ,v)},
inN(d){var w,v,u,t,s,r
try{w=B.jI(d,0,null)
v=B.ag("/Type\\s*/Pages[^>]*?/Count\\s+(\\d+)",!0,!0,!1,!1).cE(w)
if(v!=null){s=v.b[1]
s.toString
u=B.ca(s,null)
if(u!=null&&u>0){s=A.o.E(u,1,200)
return s}}t=B.ag("/Type\\s*/Page\\b",!0,!1,!1,!1).kY(0,w).gI(0)
if(t>0){s=J.aj0(t,1,200)
return s}}catch(r){}return 1},
fTH(d){return C.inM(d)},
inM(d){var w=0,v=B.j(x.T),u
var $async$fTH=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(!A.a.a0(d,"data:image")){u=d
w=1
break}u=d
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fTH,v)},
bFl(d,e,f,g){return C.inW(d,e,f,g)},
inW(b4,b5,b6,b7){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
var $async$bFl=B.e(function(b8,b9){if(b8===1){s.push(b9)
w=t}for(;;)switch(w){case 0:if(!new B.e9(b4,x.co).gae(0).C()){u=null
w=1
break}t=4
r=A.j.E(b5.a,80,2400)
q=A.j.E(b5.b,80,2400)
p=B.hDf(b7,new B.av(r,q))
o=1
n=1
m=0
l=0
for(a7=b4.length,a8=0;a8<a7;++a8){k=b4[a8]
if(k==null)continue
a9=o
b0=k.a
o=Math.min(B.jh(a9),b0)
b0=n
a9=k.b
n=Math.min(B.jh(b0),a9)
a9=m
b0=k.a
m=Math.max(B.jh(a9),b0)
b0=l
a9=k.b
l=Math.max(B.jh(b0),a9)}o=A.j.E(o-0.04,0,1)
n=A.j.E(n-0.04,0,1)
m=A.j.E(m+0.04,0,1)
l=A.j.E(l+0.04,0,1)
j=A.j.E(m-o,0.12,1)
i=A.j.E(l-n,0.12,1)
h=A.o.E(A.j.V(800*(i/j)),180,420)
$.Q()
g=new B.q_(new B.pz())
f=B.zt(g,null)
a7=B.K()
a7.r=A.rv.gp(0)
f.ar(new B.a1(0,0,800,0+h),a7)
e=800/(j*r)
b1=B.K()
b1.r=b6.gp(b6)
b1.c=p*e
b1.d=A.bw
b1.e=A.dP
b1.b=A.a9
b1.f=!0
d=b1
a0=null
for(a7=b4.length,a8=0;a8<b4.length;b4.length===a7||(0,B.J)(b4),++a8){a1=b4[a8]
if(a1==null){a0=null
continue}a2=new B.o((a1.a-o)/j*800,(a1.b-n)/i*h)
if(a0!=null)f.ah(a0,a2,d)
a0=a2}a3=g.o0()
w=7
return B.b(a3.xD(800,h),$async$bFl)
case 7:a4=b9
a3.t()
w=8
return B.b(a4.hs(A.hg),$async$bFl)
case 8:a5=b9
a4.t()
if(a5==null){u=null
w=1
break}a7=J.eT(A.dN.gaU(a5))
a7=A.cP.gcu().aN(a7)
u="data:image/png;base64,"+a7
w=1
break
t=2
w=6
break
case 4:t=3
b3=s.pop()
a6=B.ab(b3)
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
return B.i($async$bFl,v)},
aRR(d,e,f){return C.inK(d,e,f)},
inK(d,e,f){var w=0,v=B.j(x.go),u,t,s,r,q
var $async$aRR=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:r={}
q=B.a([],x.bA)
r.a=null
r.b=e==null?A.as:e
r.c=f==null?5.2:f
w=3
return B.b(B.aiH(d,e,f,new C.fTF(r,q),q,"Sign document"),$async$aRR)
case 3:if(!new B.e9(q,x.co).gae(0).C()||r.a==null){u=null
w=1
break}t=r.a
t.toString
w=4
return B.b(C.bFl(q,t,r.b,r.c),$async$aRR)
case 4:s=h
if(s==null){u=null
w=1
break}u=new C.b3f(s,r.c,r.b)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aRR,v)},
inU(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h="&amp;",g="&lt;",f="&gt;",e="&quot;",d='<!DOCTYPE html><html><head><meta charset="utf-8"><title>'+C.hw3(a0.b)+'</title>\n<style>\n  @page { size: 210mm 297mm; margin: 1.7mm; }\n  * { box-sizing: border-box; }\n  body { font-family: system-ui, sans-serif; background: #fff; color: #111; margin: 0; }\n  h1 { font-size: 14px; margin: 6px 10mm; }\n  .slide { page-break-after: always; width: 100%; height: 293.6mm; border: 1px solid #ddd; position: relative; overflow: hidden; margin: 0 auto 24px; }\n  /* Requested after the margin was already trimmed to near zero: a real\n     zoom-in on the whole slide (frame included), not just less border.\n     `.slide` keeps overflow:hidden so whatever spills past the edge at\n     this scale gets cropped instead of pushing the page layout around.\n     Width and height scale independently \u2014 a separate "wider on the\n     left and right only" request on top of the overall zoom. */\n  .zoom { position: absolute; inset: 0; transform: scaleX(1.0375) scaleY(1.01875); transform-origin: center center; }\n  .el { position: absolute; overflow: hidden; }\n  .txt { white-space: pre-wrap; word-break: break-word; }\n  img { max-width: 100%; max-height: 100%; object-fit: contain; }\n  .pdf { display:flex; flex-direction:column; align-items:center; justify-content:center; height:100%; background:#f8fafc; }\n</style></head><body>\n<h1>'+C.hw3(a0.b)+"</h1>\n"
for(w=a0.r,v=0;v<w.length;++v){u=w[v]
d=d+('<div class="slide" style="background:#'+A.a.b2(A.a.b0(A.o.ft(u.e,16),8,"0"),2)+'">\n')+'<div class="zoom">\n'
for(t=u.z,s=t.length,r=0;r<t.length;t.length===s||(0,B.J)(t),++r){q=t[r]
d+='<div class="el" style="left:'+A.j.ad(q.c*100,2)+"%;top:"+A.j.ad(q.d*100,2)+"%;width:"+A.j.ad(q.e*100,2)+"%;height:"+A.j.ad(q.f*100,2)+'%">'
p=q.b
switch(p.a){case 0:o=A.a.b2(A.a.b0(A.o.ft(q.Q,16),8,"0"),2)
p=q.w
n=q.r
n=B.aL(n,"&",h)
n=B.aL(n,"<",g)
n=B.aL(n,">",f)
d+='<div class="txt" style="font-size:'+B.w(p)+"px;color:#"+o+'">'+B.aL(n,'"',e)+"</div>"
break
case 1:case 4:n=q.at
if(n!=null&&A.a.a0(n,"data:image")){m=p===D.lR&&q.c===0&&q.d===0&&q.e===1&&q.f===1?' style="object-fit:fill"':""
d+='<img src="'+n+'" alt=""'+m+" />"}break
case 3:p=q.db
if(p.length===0)p="PDF document"
p=B.aL(p,"&",h)
p=B.aL(p,"<",g)
p=B.aL(p,">",f)
d+='<div class="pdf"><div>\ud83d\udcc4 '+B.aL(p,'"',e)+"</div></div>"
break
case 2:d+='<div style="width:100%;height:100%;background:'+C.hvF(q.ay)+";border:2px solid "+C.hvF(q.ch)+'"></div>'
break
case 5:l=C.heI(q.r)
p=l==null
n=p?null:l.b
n=A.a.i(n==null?"":n).length===0?"My links":A.a.i(l.b)
n=B.aL(n,"&",h)
n=B.aL(n,"<",g)
n=B.aL(n,">",f)
d=d+'<div style="width:100%;height:100%;box-sizing:border-box;background:#111114;border:4px solid #8E8A85;border-radius:18px;padding:18px 8px 8px;color:#fff;font-family:sans-serif;text-align:center;overflow:hidden">'+('<div style="font-weight:700;font-size:13px">'+B.aL(n,'"',e)+"</div>")
p=p?null:l.gal4()
if(p==null)p=A.aBB
n=B.U(p)
k=n.k("iu<1>")
j=new B.iu(p,0,8,k)
j.n5(p,0,8,n.c)
j=new B.bP(j,j.gI(0),k.k("bP<ak.E>"))
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
hvF(d){var w=A.o.aI(d,24)
return"rgba("+(A.o.aI(d,16)&255)+","+(A.o.aI(d,8)&255)+","+(d&255)+","+A.j.ad((w&255)/255,3)+")"},
hw3(d){var w=B.aL(d,"&","&amp;")
w=B.aL(w,"<","&lt;")
w=B.aL(w,">","&gt;")
return B.aL(w,'"',"&quot;")},
bFj(d,e){var w=0,v=B.j(x.H)
var $async$bFj=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b(B.ce(null,null,!0,null,new C.fTO(e,C.inU(e),d),d,null,!0,!0,x.H),$async$bFj)
case 2:return B.h(null,v)}})
return B.i($async$bFj,v)},
bFk(){var w=0,v=B.j(x.T),u,t,s
var $async$bFk=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A7.Ht(92,2400),$async$bFk)
case 3:s=e
if(s==null){u=null
w=1
break}w=4
return B.b(C.fTH(s),$async$bFk)
case 4:t=e
u=t==null?s:t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bFk,v)},
aRS(d){var w=0,v=B.j(x.N),u,t,s,r,q
var $async$aRS=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.hfX(d),$async$aRS)
case 3:t=f
s=A.a.i(d.b)
r=B.ag("[^\\w\\-. ]+",!0,!1,!1,!1)
q=A.a.i(B.aL(s,r,"_"))
u=A1.fWq(t,q.length===0?"presentation":q)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aRS,v)},
hpY(d,e){var w
if(e<0||e>=d.r.length)return A.o.E(d.e,1,120)
w=d.r[e].w
return A.o.E(w>0?w:d.e,1,120)},
b3f:function b3f(d,e,f){this.a=d
this.b=e
this.c=f},
fTF:function fTF(d,e){this.a=d
this.b=e},
fTO:function fTO(d,e,f){this.a=d
this.b=e
this.c=f},
fTL:function fTL(d){this.a=d},
fTM:function fTM(d,e,f){this.a=d
this.b=e
this.c=f},
fTN:function fTN(d,e,f){this.a=d
this.b=e
this.c=f},
inL(d){return C.kL(d.w)},
inS(d){var w,v,u,t
if(d.length===0||!A.d.cD(d,C.iq8()))return null
for(w=d.length,v=0;v<w;++v){u=d[v].x
t=A.a.i(u==null?"":u)
if(t.length!==0)return t}return""},
zd(d){var w=A.a.i(d),v=B.ag("[^A-Z0-9]",!0,!1,!1,!1),u=B.aL(w.toUpperCase(),v,"")
w=$.hJm()
if(w.b.test(u))return u
return null},
hDh(d,e,f){var w,v,u=C.hSl(d),t=$.os()
for(w=0;w<80;++w){v=u+A.a.b0(A.o.u(t.aw(1000)),3,"0")
if(!f.q(0,v))return v}return u+A.a.b0(A.o.u(Date.now()%1000),3,"0")},
inY(d){var w,v,u,t,s=B.aR(x.N)
for(w=J.aU(d.a),v=new B.eF(w,d.b);v.C();){u=w.gR(w).y
t=C.zd(u==null?"":u)
if(t!=null)s.J(0,t)}return s},
fTD(d,e){var w,v=d.y,u=C.zd(v==null?"":v)
if(u!=null)return d.y=u
w=C.inY(new B.Y(e,new C.fTE(d),B.U(e).k("Y<1>")))
v=d.x
return d.y=C.hDh(v==null?"":v,null,w)},
inX(d){var w,v
if(d.length!==1)return null
w=A.d.gH(d)
if(!C.kL(w.w))return null
v=w.y
return C.zd(v==null?"":v)},
hWK(){var w,v=$.os(),u=J.e2(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aw(32)]
return"SL"+A.d.he(u)},
X8(){var w=0,v=B.j(x.P),u,t=2,s=[],r,q,p,o,n,m
var $async$X8=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return B.b(B.c8(),$async$X8)
case 3:if(!e){u=B.T(x.N,x.z)
w=1
break}t=5
w=8
return B.b(B.f4("ngmy_slides_transfer_qr_stashes_v1",null,!1,A.bL),$async$X8)
case 8:r=e
if(r==null){u=B.T(x.N,x.z)
w=1
break}q=J.t(r,"stashes")
if(x.f.b(q)){o=B.a3(q,x.N,x.z)
u=o
w=1
break}t=2
w=7
break
case 5:t=4
m=s.pop()
p=B.ab(m)
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
return B.i($async$X8,v)},
X9(d){return C.hWL(d)},
hWL(d){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p
var $async$X9=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return B.b(B.c8(),$async$X9)
case 3:if(!f){w=1
break}t=5
w=8
return B.b(B.hJ("ngmy_slides_transfer_qr_stashes_v1",B.I(["stashes",d,"savedAt",new B.V(Date.now(),0,!1).aa().ag()],x.N,x.z),!1,!1,A.cL,null),$async$X9)
case 8:t=2
w=7
break
case 5:t=4
p=s.pop()
r=B.ab(p)
$.am.$1("[slides qr stash] save: "+B.w(r))
w=7
break
case 4:w=2
break
case 7:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$X9,v)},
a95(a0,a1,a2,a3,a4){var w=0,v=B.j(x.gl),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$a95=B.e(function(a5,a6){if(a5===1)return B.f(a6,v)
for(;;)switch(w){case 0:w=3
return B.b(B.c8(),$async$a95)
case 3:if(!a6){u=null
w=1
break}t=A.a.i(a0)
if(t.length===0){u=null
w=1
break}w=4
return B.b(C.X8(),$async$a95)
case 4:s=a6
r=C.zd(a2==null?"":a2)
if(r==null)r=a3!=null?C.hDh(a3,null,A.N):null
q=x.N
p=B.aR(q)
for(o=J.dm(s),n=J.aU(o.ghK(s)),m=x.f;n.C();){l=n.gR(n)
if(!m.b(l))continue
k=J.t(l,"claimCode")
j=C.zd(J.k(k==null?"":k))
if(j!=null)p.J(0,j)}n=o.gdO(s),n=n.gae(n),k=x.z
case 5:if(!n.C()){w=6
break}i=n.gR(n)
h=i.b
if(!m.b(h)){w=5
break}g=B.a3(h,q,k)
h=g.h(0,"bundleId")
if(J.k(h==null?"":h)!==a1){w=5
break}q=A.dS.aN(t)
g.n(0,"payload",A.cP.gcu().aN(q))
g.n(0,"ownerEmail",A.a.i(a4))
g.n(0,"updatedAt",new B.V(Date.now(),0,!1).aa().ag())
if(D.UL.q(0,A.a.i(a4.toLowerCase())))g.n(0,"sharedByAdmin",!0)
if(r!=null){g.n(0,"kind","marriage")
g.n(0,"usesRemaining",2)
f=r}else{q=g.h(0,"claimCode")
f=C.zd(J.k(q==null?"":q))
if(f==null)f=C.hq2(p)
g.n(0,"usesRemaining",25)}g.n(0,"claimCode",f)
q=i.a
o.n(s,q,g)
w=7
return B.b(C.X9(s),$async$a95)
case 7:u=new B.aHA(f,"NGMYSLIDESYNC2|"+q,q)
w=1
break
w=5
break
case 6:e=C.hWK()
n=r==null
d=n?C.hq2(p):r
q=B.T(q,x.C)
q.n(0,"ownerEmail",A.a.i(a4))
q.n(0,"bundleId",a1)
m=A.dS.aN(t)
q.n(0,"payload",A.cP.gcu().aN(m))
n=!n
q.n(0,"usesRemaining",n?2:25)
q.n(0,"createdAt",new B.V(Date.now(),0,!1).aa().ag())
if(D.UL.q(0,A.a.i(a4.toLowerCase())))q.n(0,"sharedByAdmin",!0)
q.n(0,"claimCode",d)
if(n)q.n(0,"kind","marriage")
o.n(s,e,q)
w=8
return B.b(C.X9(s),$async$a95)
case 8:u=new B.aHA(d,"NGMYSLIDESYNC2|"+e,e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a95,v)},
hq2(d){var w,v,u=$.os()
for(w=0;w<200;++w){v="SL"+A.a.b0(A.o.u(u.aw(1000)),3,"0")
if(d.J(0,v))return v}return"SL"+A.a.b0(A.o.u(Date.now()%1000),3,"0")},
asM(d){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$asM=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=A.a.i(d)
p=q.length===0
if(p)f=p
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.c8(),$async$asM)
case 5:f=!f
case 4:if(f){w=1
break}w=6
return B.b(C.X8(),$async$asM)
case 6:t=f
s=J.a7(t)
r=s.gI(t)
s.bt(t,new C.ckG(q))
w=s.gI(t)!==r?7:8
break
case 7:w=9
return B.b(C.X9(t),$async$asM)
case 9:case 8:case 1:return B.h(u,v)}})
return B.i($async$asM,v)},
asL(d){var w=0,v=B.j(x.T),u,t,s,r,q,p,o
var $async$asL=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:p=C.zd(d)
o=p==null
if(o)f=o
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.c8(),$async$asL)
case 5:f=!f
case 4:if(f){u=null
w=1
break}o=J
w=6
return B.b(C.X8(),$async$asL)
case 6:t=o.i7(f),t=t.gae(t),s=x.f
case 7:if(!t.C()){w=8
break}r=t.gR(t)
q=r.b
if(!s.b(q)){w=7
break}q=J.t(q,"claimCode")
if(C.zd(J.k(q==null?"":q))===p){u=C.a94(r.a)
w=1
break}w=7
break
case 8:u=null
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$asL,v)},
a94(d){var w=0,v=B.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$a94=B.e(function(a0,a1){if(a0===1)return B.f(a1,v)
for(;;)switch(w){case 0:g=A.a.i(d)
f=g.length===0
if(f)a1=f
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.c8(),$async$a94)
case 5:a1=!a1
case 4:if(a1){u=null
w=1
break}w=6
return B.b(C.X8(),$async$a94)
case 6:p=a1
o=J.a7(p)
n=o.h(p,g)
m=x.f
if(!m.b(n)){u=null
w=1
break}l=J.a7(n)
k=B.aI(l.h(n,"usesRemaining"))
j=k==null?null:A.j.M(k)
if(j==null)j=0
if(j<=0){u=null
w=1
break}k=l.h(n,"payload")
t=J.k(k==null?"":k)
if(J.ad(t)===0){u=null
w=1
break}s=null
try{s=A.c9.cH(0,A.cI.aN(t))}catch(e){u=null
w=1
break}if(A.a.i(s).length===0){u=null
w=1
break}k=l.h(n,"ownerEmail")
if(D.UL.q(0,A.a.i(J.k(k==null?"":k).toLowerCase()))||J.z(l.h(n,"sharedByAdmin"),!0))try{r=A.Y.aQ(0,s,null)
if(m.b(r)){q=B.a3(r,x.N,x.z)
J.aK(q,"sharedByAdmin",!0)
s=A.Y.az(q,null)}}catch(e){}h=j-1
m=l.h(n,"kind")
m=J.k(m==null?"":m)
if(h<=0&&m!=="marriage")o.W(p,g)
else{m=x.N
l=x.z
l=B.dM(B.a3(n,m,l),m,l)
l.n(0,"usesRemaining",h)
l.n(0,"lastUsedAt",new B.V(Date.now(),0,!1).aa().ag())
o.n(p,g,l)}w=7
return B.b(C.X9(p),$async$a94)
case 7:u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a94,v)},
inR(d,e,f){var w,v=B.T(x.N,x.z)
v.n(0,"type","ngmy_slides_library_v1")
v.n(0,"ownerEmail",A.a.i(e))
v.n(0,"exportedAt",new B.V(Date.now(),0,!1).aa().ag())
if(f)v.n(0,"sharedByAdmin",!0)
w=B.U(d).k("N<1,a8<n,@>>")
w=B.C(new B.N(d,new C.fTK(),w),w.k("ak.E"))
v.n(0,"decks",w)
return v},
fTS(d,e,f,g){var w
if(e!=null){w=B.T(x.N,x.z)
w.n(0,"type","ngmy_slides_deck_v1")
w.n(0,"ownerEmail",A.a.i(f))
w.n(0,"exportedAt",new B.V(Date.now(),0,!1).aa().ag())
if(g)w.n(0,"sharedByAdmin",!0)
w.n(0,"deck",e.aj())
return A.Y.az(w,null)}return A.Y.az(C.inR(d==null?B.a([],x.D):d,f,g),null)},
fTR(d,e,f,g,h){var w=0,v=B.j(x.eb),u,t,s,r
var $async$fTR=B.e(function(i,j){if(i===1)return B.f(j,v)
for(;;)switch(w){case 0:w=3
return B.b(C.a95(h,d,e,f,g),$async$fTR)
case 3:r=j
if(r!=null){t=r.b
s=r.a
if(s==null)s=C.zd(e==null?"":e)
u=new B.aHm(s,t)
w=1
break}t=A.dS.aN(h)
t=A.kH.gcu().aN(t)
u=new B.aHm(C.zd(e==null?"":e),"NGMY_SL:"+t)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fTR,v)},
hfZ(d){var w,v,u,t,s="ngmy_slides_deck_v1",r="ngmy_slides_library_v1",q=A.a.i(d)
if(J.ad(q)===0)return!1
if(J.d3(q,"NGMYSLIDESYNC2|"))return!0
if(J.d3(q,"NGMYSLIDECODE|"))return!0
if(J.d3(q,"NGMY_SL:"))return!0
if(J.eG(q,s)||J.eG(q,r))return!0
if(J.d3(q,"{"))try{w=A.Y.aQ(0,q,null)
if(x.f.b(w)){u=J.t(w,"type")
v=J.k(u==null?"":u)
u=J.z(v,s)||J.z(v,r)
return u}}catch(t){}return!1},
inV(d){var w,v,u,t,s,r,q=d.z,p=q==null?null:A.a.i(q)
q=d.d
for(q=[p,q==null?null:A.a.i(q)],w=q.length,v=0;v<w;++v){u=q[v]
if(u==null||u.length===0)continue
if(C.hfZ(u))return u
t=A.a.co(u,"NGMYSLIDESYNC2|")
if(t>=0){s=A.a.i(A.a.b2(u,t))
if(C.hfZ(s))return s}r=A.a.co(u,"NGMY_SL:")
if(r>=0){s=A.a.i(A.a.b2(u,r))
if(C.hfZ(s))return s}}return null},
fTG(d){var w,v,u,t=A.a.i(d)
if(J.ad(t)===0||J.d3(t,"NGMYSLIDESYNC2|"))return B.a([],x.D)
try{w=null
v=x.P
if(J.d3(t,"NGMY_SL:"))w=v.a(A.Y.aQ(0,A.c9.cH(0,A.cI.aN(J.nq(t,8))),null))
else w=v.a(A.Y.aQ(0,t,null))
v=C.i5T(w)
return v}catch(u){v=B.a([],x.D)
return v}},
ais(d){var w=0,v=B.j(x.R),u,t,s,r,q
var $async$ais=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=A.a.i(d)
w=A.a.a0(q,"NGMYSLIDECODE|")?3:4
break
case 3:t=q.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return B.b(C.asL(t[1]),$async$ais)
case 7:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fTG(s)
w=1
break}case 6:u=B.a([],x.D)
w=1
break
case 4:r=C.zd(q)
w=r!=null&&!A.a.q(q,"|")&&!A.a.a0(q,"{")?8:9
break
case 8:w=10
return B.b(C.asL(r),$async$ais)
case 10:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fTG(s)
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
return B.b(C.a94(t[1]),$async$ais)
case 15:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fTG(s)
w=1
break}case 14:u=B.a([],x.D)
w=1
break
case 12:u=C.fTG(q)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ais,v)},
i5T(d){var w,v,u,t=J.a7(d),s=t.h(d,"type"),r=J.k(s==null?"":s)
if(!J.z(t.h(d,"sharedByAdmin"),!0)){s=t.h(d,"ownerEmail")
w=D.UL.q(0,A.a.i(J.k(s==null?"":s).toLowerCase()))}else w=!0
if(r==="ngmy_slides_deck_v1"){v=t.h(d,"deck")
if(!x.f.b(v))return B.a([],x.D)
return B.a([C.hfW(C.X4(B.a3(v,x.N,x.z)),w)],x.D)}if(r==="ngmy_slides_library_v1"){u=t.h(d,"decks")
if(!x.j.b(u))return B.a([],x.D)
t=J.dd(u,x.f)
t=B.cE(t,new C.foW(w),t.$ti.k("M.E"),x.I)
t=B.C(t,B.a4(t).k("M.E"))
return t}return B.a([],x.D)},
hfW(d,e){var w,v,u,t,s,r,q,p,o=d.aj()
o.n(0,"id",C.cD())
w=A.a.i(d.b)
o.n(0,"name",w.length===0?"Shared presentation":w)
o.n(0,"transferReceived",!0)
o.W(0,"transferClaimCode")
o.W(0,"adminShareEditUntil")
v=o.h(0,"slides")
if(x.j.b(v))for(u=J.aU(v),t=x.f;u.C();){s=u.gR(u)
if(t.b(s)){r=Date.now()
q=$.jc
$.jc=q+1
J.aK(s,"id",""+1000*r+"_"+q)}}p=C.X4(B.a3(o,x.N,x.z))
if(e&&C.kL(p.w))p.Q=new B.V(Date.now(),0,!1).aa().bR(144e8).ag()
return p},
bF4(){var w=0,v=B.j(x.aT),u,t,s
var $async$bF4=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.Hs(),$async$bF4)
case 3:s=e
if(s==null||A.a.i(s).length===0){u=null
w=1
break}w=4
return B.b(C.ais(s),$async$bF4)
case 4:t=e
u=J.cr(t)?null:t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bF4,v)},
h1N(d){var w=0,v=B.j(x.T),u,t
var $async$h1N=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.i_(D.YO,!0,"Dismiss",d,new C.h1O(),new C.h1P(),A.GC,!0,x.N),$async$h1N)
case 3:t=f
if(t==null){u=null
w=1
break}if(t.length===0){if(d.e!=null)d.L(x.q).f.U(D.fh3)
u=null
w=1
break}u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$h1N,v)},
isk(d,e,f,g,h){return B.a6(d,!1).cd(B.eb(new C.h1Q(h,e,g,f),!0,null,x.H))},
fTE:function fTE(d){this.a=d},
ckG:function ckG(d){this.a=d},
fTK:function fTK(){},
foW:function foW(d){this.a=d},
h1O:function h1O(){},
h1P:function h1P(){},
h1Q:function h1Q(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
X6:function X6(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aG6:function aG6(){var _=this
_.d="one"
_.e=null
_.r=_.f=!1
_.c=_.a=null},
eHX:function eHX(){},
eHT:function eHT(d,e){this.a=d
this.b=e},
eHW:function eHW(d,e){this.a=d
this.b=e},
eHU:function eHU(d){this.a=d},
eHV:function eHV(d){this.a=d},
eHY:function eHY(d){this.a=d},
eHZ:function eHZ(d){this.a=d},
eI1:function eI1(d){this.a=d},
eI2:function eI2(d){this.a=d},
eI0:function eI0(d){this.a=d},
eI3:function eI3(d){this.a=d},
eI_:function eI_(d){this.a=d},
eI4:function eI4(d,e){this.a=d
this.b=e},
eHS:function eHS(d,e){this.a=d
this.b=e},
eHR:function eHR(d,e){this.a=d
this.b=e},
X7:function X7(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bmH:function bmH(){var _=this
_.c=_.a=_.f=_.e=_.d=null},
eI5:function eI5(d,e){this.a=d
this.b=e},
eI6:function eI6(d){this.a=d},
eI7:function eI7(){},
eI8:function eI8(d){this.a=d},
eI9:function eI9(d,e){this.a=d
this.b=e},
aG3:function aG3(d){this.a=d},
aG4:function aG4(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
eBA:function eBA(d){this.a=d},
eBz:function eBz(){},
eBB:function eBB(d){this.a=d},
eBw:function eBw(d){this.a=d},
eBv:function eBv(){},
eBx:function eBx(d){this.a=d},
eBy:function eBy(d){this.a=d},
bxf:function bxf(){},
asN:function asN(d){this.a=d},
aG7:function aG7(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
eIb:function eIb(d){this.a=d},
eIa:function eIa(d){this.a=d},
ibt(){var w,v,u,t
for(v=0;v<4;++v){w=D.dgM[v]
try{if(Ae.c0W(w)){u=w
return u}}catch(t){}}return null},
Sb(d,e){return C.iky(d,e)},
iky(c6,c7){var w=0,v=B.j(x.T),u,t=2,s=[],r=[],q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5
var $async$Sb=B.e(function(c9,d0){if(c9===1){s.push(d0)
w=t}for(;;)switch(w){case 0:c2={}
c3=c7.r
if(c3.length===0){u="This presentation has no slides."
w=1
break}q=C.ibt()
if(q==null){u="This browser cannot record video. Try Chrome, Edge, or a recent Safari."
w=1
break}b2=c7.d===D.oN?0.5625:1.7777777777777777
b3=b2>=1
b4=c2.a=A.j.V(b3?1280:1280*b2)
b5=c2.b=A.j.V(b3?1280/b2:1280)
c2.a=b4-A.o.F(b4,2)
c2.b=b5-A.o.F(b5,2)
b6=B.qS(c6,!0)
b6.toString
p=B.a6(c6,!0)
b7=new B.cw(null,x.A)
b8=A.d.gH(c3)
b9=$.aw()
o=new B.eA(b8,b9)
n=new B.eA("Getting ready\u2026",b9)
m=new B.eA(0,b9)
l=B.pw(new C.fNW(c2,b7,o),!1,!1)
b6.m7(0,l)
b9=x.H
B.ce(null,A.dh,!1,null,new C.fNX(n,m),c6,null,!0,!0,b9)
k=new C.fO0(b7)
j=new C.fO1()
i=null
t=4
b3=c2.a
h=Al.aUb(c2.b,b3)
b3=h.getContext("2d")
b3.toString
g=b3
f=J.h4O(h,30)
e=B.a([],x.aK)
b3=x.z
i=Ae.aZe(f,B.I(["mimeType",q,"videoBitsPerSecond",8e6],b3,b3))
A.J_.z5(i,"dataavailable",new C.fNY(e))
d=new B.c2(new B.bk($.bE,x.dT),x.b2)
A.J_.z5(i,"stop",new C.fNZ(d))
J.aj5(n,"Drawing slide 1 of "+c3.length+"\u2026")
c5=j
w=8
return B.b(k.$0(),$async$Sb)
case 8:w=7
return B.b(c5.$1(d0),$async$Sb)
case 7:a0=d0
J.h4P(g,a0,0,0,c2.a,c2.b)
i.start(200)
a1=0
case 9:if(!(b3=a1,b8=c3.length,b3<b8)){w=11
break}a2=c3[a1]
w=a1>0?12:13
break
case 12:J.aj5(n,"Drawing slide "+B.w(a1+1)+" of "+b8+"\u2026")
J.aj5(o,a2)
c5=j
w=15
return B.b(k.$0(),$async$Sb)
case 15:w=14
return B.b(c5.$1(d0),$async$Sb)
case 14:a0=d0
case 13:J.h4P(g,a0,0,0,c2.a,c2.b)
a3=A.o.E(a2.w>0?a2.w:c7.e,1,120)
J.aj5(n,"Recording slide "+B.w(a1+1)+" of "+c3.length+" \xb7 "+B.w(a3)+" s")
a4=new B.V(Date.now(),0,!1).bR(1e6*a3)
case 16:b3=Date.now()
b8=a4
if(b3>=b8.gbs())b3=b3===b8.gbs()&&0<b8.gcF()
else b3=!0
if(!b3){w=17
break}J.h4P(g,a0,0,0,c2.a,c2.b)
w=18
return B.b(B.bQ(A.ff,null,b9),$async$Sb)
case 18:w=16
break
case 17:J.aj5(m,(a1+1)/c3.length)
case 10:++a1
w=9
break
case 11:J.aj5(n,"Saving your video\u2026")
i.stop()
w=19
return B.b(d.a.dh(0,A.ol),$async$Sb)
case 19:a5=A.d.gH(q.split(";"))
a6=B.hK(e,a5)
c3=(self.URL||self.webkitURL).createObjectURL(a6)
c3.toString
a7=c3
a8=J.z(a5,"video/mp4")?"mp4":"webm"
c3=A.a.i(c7.b)
b3=B.ag("[^\\w\\-. ]+",!0,!1,!1,!1)
a9=A.a.i(B.aL(c3,b3,"_"))
c0=B.n3(a7)
c0.download=B.w(J.ad(a9)===0?"presentation":a9)+"."+B.w(a8)
c3=c0.style
c3.display="none"
b0=c0
c3=document.body
if(c3!=null)c3.appendChild(b0).toString
J.HG(b0)
J.lK(b0)
B.bQ(A.qq,new C.fO_(a7),b9)
u=null
r=[1]
w=5
break
r.push(6)
w=5
break
case 4:t=3
c4=s.pop()
b1=B.ab(c4)
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
J.lK(l)
if(p.pX())p.eO()
c3=o
b3=$.aw()
c3.sic(b3)
J.aSN(c3,0)
c3=n
c3.sic(b3)
J.aSN(c3,0)
c3=m
c3.sic(b3)
J.aSN(c3,0)
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Sb,v)},
fNW:function fNW(d,e,f){this.a=d
this.b=e
this.c=f},
fNV:function fNV(){},
fNX:function fNX(d,e){this.a=d
this.b=e},
fO0:function fO0(d){this.a=d},
fO1:function fO1(){},
fNY:function fNY(d){this.a=d},
fNZ:function fNZ(d){this.a=d},
fO_:function fO_(d){this.a=d},
bxt:function bxt(d,e,f){this.c=d
this.d=e
this.a=f},
fiR:function fiR(){},
fiS:function fiS(){},
cl1(d){var w=0,v=B.j(x.at),u,t,s
var $async$cl1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.asV(d,A.Aj),$async$cl1)
case 3:s=f
if(s==null){u=null
w=1
break}t=s.bD(new B.V(Date.now(),0,!1))
if(t.a<0){u=A.bE
w=1
break}u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$cl1,v)},
cl0(d){if(d==null)return!1
return d==="marriage_agreement"||d==="hati_kuhowa"||d==="hati_kuhoweya"||d==="hati_malipo_awamu"},
a8M:function a8M(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bmq:function bmq(d){var _=this
_.d=null
_.e=d
_.f=!1
_.c=_.a=null},
epQ:function epQ(d){this.a=d},
epO:function epO(d){this.a=d},
epP:function epP(d,e){this.a=d
this.b=e},
a9F:function a9F(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.cx=d
_.cy=e
_.x=f
_.y=!0
_.a=g
_.b=h
_.c=i
_.d=j
_.oT$=k
_.oU$=l
_.oV$=m
_.o3$=n},
a9G:function a9G(d,e){this.a=d
this.b=e},
b4V:function b4V(){},
coW:function coW(){},
coX:function coX(){},
coY:function coY(d,e,f,g,h,i,j,k,l){var _=this
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
hKl(d){return new C.ajn(d)},
a45:function a45(){},
ajn:function ajn(d){this.a=d},
aT6:function aT6(){},
ayq:function ayq(d,e){this.d=d
this.b=e
this.a=null},
aUA:function aUA(d){this.b=d
this.a=null},
bDZ(d,e){var w=0,v=B.j(x.H),u
var $async$bDZ=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b($.Q().gud().Ml(d,e),$async$bDZ)
case 2:u=B.fWz()
w=3
return B.b(u,$async$bDZ)
case 3:return B.h(null,v)}})
return B.i($async$bDZ,v)},
hAt(d,e){return(A.t9[(d^e)&255]^A.o.aI(d,8))>>>0},
fFX(d,e,f,g,h,i){var w=C.igL(d,A.dj,f,null,A.d2,g,h,i)
return w},
hCq(d){var w=F.hD8(d)
if(w==null)return""
return"- WRITE EVERYTHING THE READER SEES IN "+w+" \u2014 every title, subtitle, sentence and note, with natural, correct grammar. Do not mix in English (JSON keys stay as given)."},
hSl(d){var w,v,u,t,s,r=A.a.i(d)
if(r.length===0)return"XX"
w=r.toLowerCase()
v=A.pE.h(0,w)
if(v!=null)return v
for(u=A.pE.gdO(A.pE),u=u.gae(u);u.C();){t=u.gR(u).b
if(t.toLowerCase()===w)return t}u=B.ag("[^A-Z]",!0,!1,!1,!1)
s=B.aL(r.toUpperCase(),u,"")
if(s.length>=2)return A.a.aC(s,0,2)
return A.a.aC(s+"XX",0,2)},
hCy(){var w,v
for(w=0,v='=== EVERYTHING YOU KNOW ABOUT NGMY (use only this; never invent features, numbers, prices, names or dates) ===\nTHE FOUNDER: NGMY stands for New Global Movement for Youth. It was created by KB PABLO QR (always written in capital letters), the Founder, President and CEO of NGMY. The "QR" in his name comes from QR codes, which NGMY and his business use a lot, and it is part of his brand. He built NGMY as one app (ngmy.org) that gives young people and families tools for work, money, learning, community and creativity. When a story is about the CEO, call him KB PABLO QR, Founder, President and CEO of NGMY. Do not give him a different name, age, birthplace, degrees, awards or family details, and do not make up quotes from him.\n\nFEATURES:\n';w<62;++w)v+="- "+D.dk4[w]+"\n"
v=v+"\nABOUT THE COMMUNITY AND THE SYSTEM (facts you can use; do not invent numbers, names or dates):\n- The community is M'MBONDO (also written MBONDO). Its motto is \"EMO 'YA M'MBONDO\". Members live in different US states.\n- The Civic Registry \u2014 people also just call it \"the system\" \u2014 was built inside the NGMY app for the M'MBONDO community.\n- Why it was built: a big problem in the community was not seeing where contribution money went. People gave but were unsure what happened to their money, so trust and giving went down. The system brings light: every contribution gets a receipt, members can see where the money is going and how much has been contributed, and that transparency builds trust and the confidence to keep contributing \u2014 when you know where your money goes, you give.\n- What it does:\n  \u2022 Registers community members with their details and a member ID card (Registry ID), kept safely as the community's records.\n  \u2022 Lets each state know how many members it has (state totals, nationwide totals).\n  \u2022 Records contributions with receipts and contribution reports, so everyone sees the money trail.\n  \u2022 Authorized Registrars enroll members and help them; there is a help mode for assisted sign-up.\n  \u2022 Civic Voting for community decisions, and a Civic State Wallet that shows each state's funds.\n- How NGMY helps members beyond the registry: help finding jobs and applying for them, fixing their houses, helping them get houses, sending money, and NGMY Advisors (AI advisors) who help people apply for jobs, food stamps and other benefits and fill out applications for them.\n- Tone for this community: warm, proud, hopeful and trustworthy; it is about unity, transparency and helping each other.\n\n\nHOW MEMBERS USE THE APP:\n"+"WHAT NGMY IS: NGMY stands for New Global Movement for Youth \u2014 multi-hub app by KB PABLO QR (Founder/CEO). Live site ngmy.org. Wallet balance in USD. Gmail login (@gmail.com), password 6+ chars, also Google/GitHub sign-in.\n\nBOTTOM NAV (7 tabs):\n1) Home \u2014 brand, Helper AI entry, loans, tech frames (Neural/Signal/Core/Vault Channel games).\n2) Tool Hub \u2014 Business Card Creator, Menu Studio (+ Bio Studio), Business Essentials.\n3) Slides \u2014 presentations + Marriage/Hati documents.\n4) NGMY Hub (center) \u2014 Civic Registry, NGMY Store, Help Center, Document Scanner; center star may open App Builder when enabled.\n5) Advisors \u2014 AI advisor chat (this hub).\n6) Creator Hub \u2014 Doc Share, Quote Calc, QR Generator, Play Zone, Kiswahili School, Recorder, Video Studio, Phone Unlock.\n7) Profile \u2014 theme, logout, legal, Worksheets (Projects / Cashier IOUs / Family Tree).\n\nMENU STUDIO (Tool Hub \u2192 Menu Studio):\n- Menus tab: design restaurant/business menus, publish public link https://ngmy.org/?m={slug}\n- First menu free; more menus need Menu Studio subscription (paywall shows price).\n- Bios tab (same studio): link-in-bio pages, publish https://ngmy.org/?b={slug}\n- First Bio free with starter template; more Bios/templates need Bio Studio subscription.\n- Extra Bio photo/header changes may need a photo pack after free changes.\n- Local Menu / Local Bio: Home Essentials hub \u2192 device-local publish at /local-menu/ and /local-bio/\n\nBUSINESS CARD: Tool Hub \u2192 create/edit/download. Paid unlock for edit+download window (paywall).\n\nSLIDES: Slides tab. Free blank + some class templates/designs. Slides Pro unlocks more. Marriage documents are a separate short session unlock.\n\nADVISORS: 10 free minutes, then Advisors subscription for unlimited chat (admins unlimited). ADVISOR BROWSER: the live browser is free for 10 minutes, then $5.99 buys 2 hours (Stripe or Cash App with a screenshot approved by an admin) to use within a week; it only counts while the browser is open.\n\nCIVIC REGISTRY (NGMY Hub): community ID, PIN gate, enrollment, registrars (AR), civic registrar roles. Guest enroll can use ?civic=enroll. Georgia stays free. Every other state gets a 2-month free Civic Registry trial for Authorized Registrars, then $50/mo State Registrar sponsorship starting month 3.\n\nVAULT GAMES (Home \u2192 Vault Channel): arcade games. Need an active Growth Income investment for full access; otherwise one free play total. Free trial does not unlock games.\n\nGROWTH INCOME / INVEST: purchase a plan, daily clock-in for ROI over work days; min withdraw typically $10. Plans are $5, $20, $30, $50 and $100 (the most expensive is $100). Plan availability is admin-controlled.\n\nCREATOR TOOLS:\n- Doc Share \u2014 share docs; free individual creations then paid / org license.\n- QR Generator \u2014 free saves then paid access window.\n- Transfer \u2014 receive free; limited free sends then monthly unlock.\n- Kiswahili School \u2014 Basics free; other levels one-time unlock.\n- Document Scanner \u2014 trial then monthly.\n- Message Translator \u2014 paid unlimited.\n- Phone Unlock \u2014 short access window.\n- Video Studio / Recorder / Play Zone \u2014 Creator Hub tools.\n- Worksheets \u2192 Cashier (IOUs/receipts), Family Tree (create/photos may be paid).\n- Invoices \u2014 free standard tier with limited free premium saves; paid templates via paywall.\n- App Builder \u2014 Hub center (if enabled); cloud + Bolt AI may be paid.\n- Music Studio \u2014 AI songs may cost wallet credits when enabled.\n\nSTORE / JOBS / LOANS / HELP: Store in NGMY Hub; loans from Home; jobs/helpers need approval; Help Center + NGMY Helper AI for support.\n\nGUEST LINKS (no full login): /bio/, /local-bio/, /menu/, /local-menu/, /invoice/, /app/{slug}.\n\nHOW TO HELP MEMBERS: Give clear tap-by-tap steps. Stay in character. If unsure of a live price, send them to the feature paywall rather than guessing.\n"
return A.a.i(v.charCodeAt(0)==0?v:v)},
bDc(d,e){return C.idb(d,e)},
idb(d,e){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l
var $async$bDc=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
if(d.length===0){u=!1
w=1
break}r=B.hK([d],"application/pdf")
n=x.z
q=B.aWl(B.a([r],x.e3),e,B.I(["type","application/pdf"],n,n))
p=B.cv(B.I(["files",B.a([q],x.fA),"title",e],x.N,x.C))
n=window.navigator
n.toString
o=n
w=7
return B.b(B.ef(B.jN(o,"share",[p]),x.H),$async$bDc)
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
return B.i($async$bDc,v)},
hfQ(){var w=0,v=B.j(x.y),u,t,s
var $async$hfQ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=$.fwO
s=$.bCK
if(s==null)s="presentation.pdf"
if(t==null||t.length===0){u=!1
w=1
break}u=C.bDc(t,s)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$hfQ,v)},
bEA(){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$bEA=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=$.fwO
l=$.bCK
k=l==null?"presentation.pdf":l
if(m==null||m.length===0){u=!1
w=1
break}w=A1.hwN()?3:4
break
case 3:w=5
return B.b(C.bDc(m,k),$async$bEA)
case 5:if(e){u=!0
w=1
break}case 4:r=$.bCL
if(r==null||r.length===0){u=!1
w=1
break}t=7
p=B.n3(null)
p.href=r
p.download=k
o=p.style
o.display="none"
q=p
o=document.body
if(o!=null)o.appendChild(q).toString
J.HG(q)
w=10
return B.b(B.bQ(A.a3,null,x.H),$async$bEA)
case 10:J.lK(q)
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
return B.i($async$bEA,v)},
hfH(){var w=0,v=B.j(x.y),u,t,s,r
var $async$hfH=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=$.bCL
if(r==null||r.length===0){u=!1
w=1
break}try{t=window
t.toString
A.lX.rk(t,r,"_blank")
u=!0
w=1
break}catch(q){u=!1
w=1
break}case 1:return B.h(u,v)}})
return B.i($async$hfH,v)},
hfY(d,e){var w=0,v=B.j(x.H),u,t
var $async$hfY=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:t=(self.URL||self.webkitURL).createObjectURL(B.hK([d],"text/html"))
t.toString
u=window
u.toString
A.lX.rk(u,t,"_blank")
return B.h(null,v)}})
return B.i($async$hfY,v)},
b3R(d,e){var w=0,v=B.j(x.y),u
var $async$b3R=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(B.b3T(d,e),$async$b3R)
case 3:if(g){u=!0
w=1
break}w=4
return B.b(B.b3S(d),$async$b3R)
case 4:u=g<2
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$b3R,v)}},D,O,Ao,Aa,A_,A0,X,Ap,G,F,E,H,R,S,A1,A2,Aq,M,Ar,A3,As,At,Ab,K,Au,Av,A4,N,Y,P,Z,Aw,Ac,Ax,Q,Ad,Ay,Ae,Af,Az,Ag,AA,Ah,Ai,AB,AC,T,AD,I,AE,U,V,L,A5,A6,A7
J=c[1]
B=c[0]
A=c[2]
Aj=c[207]
A8=c[74]
Ak=c[54]
Al=c[65]
W=c[224]
A9=c[58]
Am=c[150]
An=c[235]
C=a.updateHolder(c[5],C)
D=c[222]
O=c[142]
Ao=c[42]
Aa=c[226]
A_=c[223]
A0=c[236]
X=c[212]
Ap=c[135]
G=c[193]
F=c[35]
E=c[225]
H=c[96]
R=c[122]
S=c[152]
A1=c[32]
A2=c[181]
Aq=c[238]
M=c[161]
Ar=c[188]
A3=c[106]
As=c[137]
At=c[231]
Ab=c[117]
K=c[227]
Au=c[239]
Av=c[134]
A4=c[68]
N=c[201]
Y=c[83]
P=c[163]
Z=c[115]
Aw=c[124]
Ac=c[119]
Ax=c[229]
Q=c[126]
Ad=c[144]
Ay=c[94]
Ae=c[59]
Af=c[197]
Az=c[40]
Ag=c[81]
AA=c[160]
Ah=c[151]
Ai=c[234]
AB=c[237]
AC=c[233]
T=c[75]
AD=c[230]
I=c[178]
AE=c[240]
U=c[52]
V=c[228]
L=c[209]
A5=c[232]
A6=c[112]
A7=c[64]
C.oj.prototype={
vF(d){var w,v,u=this,t=u.c
if(t===0)return u
w=!u.a
v=u.b
t=C.ui(t,v)
return new C.oj(t===0?!1:w,v,t)},
bPK(d){var w,v,u,t,s,r,q=this.c
if(q===0)return $.DJ()
w=q+d
v=this.b
u=new Uint16Array(w)
for(t=q-1;t>=0;--t)u[t+d]=v[t]
s=this.a
r=C.ui(w,u)
return new C.oj(r===0?!1:s,u,r)},
bQg(d){var w,v,u,t,s,r,q,p=this,o=p.c
if(o===0)return $.DJ()
w=o-d
if(w<=0)return p.a?$.hht():$.DJ()
v=p.b
u=new Uint16Array(w)
for(t=d;t<o;++t)u[t-d]=v[t]
s=p.a
r=C.ui(w,u)
q=new C.oj(r===0?!1:s,u,r)
if(s)for(t=0;t<d;++t)if(v[t]!==0)return q.aJ(0,$.a3S())
return q},
dX(d,e){var w,v,u,t,s,r=this
if(e<0)throw B.W(B.dL("shift-amount must be posititve "+e,null))
w=r.c
if(w===0)return r
v=A.o.aq(e,16)
if(A.o.F(e,16)===0)return r.bPK(v)
u=w+v+1
t=new Uint16Array(u)
C.hte(r.b,w,e,t)
w=r.a
s=C.ui(u,t)
return new C.oj(s===0?!1:w,t,s)},
mD(d,e){var w,v,u,t,s,r,q,p,o,n=this
if(e<0)throw B.W(B.dL("shift-amount must be posititve "+e,null))
w=n.c
if(w===0)return n
v=A.o.aq(e,16)
u=A.o.F(e,16)
if(u===0)return n.bQg(v)
t=w-v
if(t<=0)return n.a?$.hht():$.DJ()
s=n.b
r=new Uint16Array(t)
C.i1x(s,w,e,r)
w=n.a
q=C.ui(t,r)
p=new C.oj(q===0?!1:w,r,q)
if(w){if((s[v]&A.o.dX(1,u)-1)!==0)return p.aJ(0,$.a3S())
for(o=0;o<v;++o)if(s[o]!==0)return p.aJ(0,$.a3S())}return p},
aS(d,e){var w,v=this.a
if(v===e.a){w=C.cOb(this.b,this.c,e.b,e.c)
return v?0-w:w}return v?-1:1},
a9e(d,e){var w,v,u,t=this,s=t.c,r=d.c
if(s<r)return d.a9e(t,e)
if(s===0)return $.DJ()
if(r===0)return t.a===e?t:t.vF(0)
w=s+1
v=new Uint16Array(w)
C.i1v(t.b,s,d.b,r,v)
u=C.ui(w,v)
return new C.oj(u===0?!1:e,v,u)},
HO(d,e){var w,v,u,t=this,s=t.c
if(s===0)return $.DJ()
w=d.c
if(w===0)return t.a===e?t:t.vF(0)
v=new Uint16Array(s)
C.bbY(t.b,s,d.b,w,v)
u=C.ui(s,v)
return new C.oj(u===0?!1:e,v,u)},
bCF(d,e){var w,v,u,t,s,r=this.c,q=d.c
r=r<q?r:q
w=this.b
v=d.b
u=new Uint16Array(r)
for(t=0;t<r;++t)u[t]=w[t]&v[t]
s=C.ui(r,u)
return new C.oj(!1,u,s)},
bCE(d,e){var w,v,u=this.c,t=this.b,s=d.b,r=new Uint16Array(u),q=d.c
if(u<q)q=u
for(w=0;w<q;++w)r[w]=t[w]&~s[w]
for(w=q;w<u;++w)r[w]=t[w]
v=C.ui(u,r)
return new C.oj(!1,r,v)},
bCG(d,e){var w,v,u,t,s,r=this.c,q=d.c,p=r>q?r:q,o=this.b,n=d.b,m=new Uint16Array(p)
if(r<q){w=r
v=d}else{w=q
v=this}for(u=0;u<w;++u)m[u]=o[u]|n[u]
t=v.b
for(u=w;u<p;++u)m[u]=t[u]
s=C.ui(p,m)
return new C.oj(s!==0,m,s)},
VA(d,e){var w,v,u,t=this
if(t.c===0||e.c===0)return $.DJ()
w=t.a
if(w===e.a){if(w){w=$.a3S()
return t.HO(w,!0).bCG(e.HO(w,!0),!0).a9e(w,!0)}return t.bCF(e,!1)}if(w){v=t
u=e}else{v=e
u=t}return u.bCE(v.HO($.a3S(),!1),!1)},
a2(d,e){var w,v,u=this,t=u.c
if(t===0)return e
w=e.c
if(w===0)return u
v=u.a
if(v===e.a)return u.a9e(e,v)
if(C.cOb(u.b,t,e.b,w)>=0)return u.HO(e,v)
return e.HO(u,!v)},
aJ(d,e){var w,v,u=this,t=u.c
if(t===0)return e.vF(0)
w=e.c
if(w===0)return u
v=u.a
if(v!==e.a)return u.a9e(e,v)
if(C.cOb(u.b,t,e.b,w)>=0)return u.HO(e,v)
return e.HO(u,!v)},
aM(d,e){var w,v,u,t,s,r,q,p=this.c,o=e.c
if(p===0||o===0)return $.DJ()
w=p+o
v=this.b
u=e.b
t=new Uint16Array(w)
for(s=0;s<o;){C.htf(u[s],v,0,t,s,p);++s}r=this.a!==e.a
q=C.ui(w,t)
return new C.oj(q===0?!1:r,t,q)},
bPJ(d){var w,v,u,t
if(this.c<d.c)return $.DJ()
this.aTU(d)
w=$.hap.cq()-$.azc.cq()
v=C.har($.hao.cq(),$.azc.cq(),$.hap.cq(),w)
u=C.ui(w,v)
t=new C.oj(!1,v,u)
return this.a!==d.a&&u>0?t.vF(0):t},
ct9(d){var w,v,u,t=this
if(t.c<d.c)return t
t.aTU(d)
w=C.har($.hao.cq(),0,$.azc.cq(),$.azc.cq())
v=C.ui($.azc.cq(),w)
u=new C.oj(!1,w,v)
if($.haq.cq()>0)u=u.mD(0,$.haq.cq())
return t.a&&u.c>0?u.vF(0):u},
aTU(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.c
if(f===$.htb&&d.c===$.htd&&g.b===$.hta&&d.b===$.htc)return
w=d.b
v=d.c
u=16-A.o.galw(w[v-1])
if(u>0){t=new Uint16Array(v+5)
s=C.ht9(w,v,u,t)
r=new Uint16Array(f+5)
q=C.ht9(g.b,f,u,r)}else{r=C.har(g.b,0,f,f+2)
s=v
t=w
q=f}p=t[s-1]
o=q-s
n=new Uint16Array(q)
m=C.has(t,s,o,n)
l=q+1
k=r.$flags|0
if(C.cOb(r,q,n,m)>=0){k&2&&B.aj(r)
r[q]=1
C.bbY(r,l,n,m,r)}else{k&2&&B.aj(r)
r[q]=0}j=new Uint16Array(s+2)
j[s]=1
C.bbY(j,s+1,t,s,j)
i=q-1
while(o>0){h=C.i1w(p,r,i);--o
C.htf(h,j,0,r,o,s)
if(r[i]<h){m=C.has(j,s,o,n)
C.bbY(r,l,n,m,r)
while(--h,r[i]<h)C.bbY(r,l,n,m,r)}--i}$.hta=g.b
$.htb=f
$.htc=w
$.htd=v
$.hao.b=r
$.hap.b=l
$.azc.b=s
$.haq.b=u},
gX(d){var w,v,u,t=new C.cOc(),s=this.c
if(s===0)return 6707
w=this.a?83585:429689
for(v=this.b,u=0;u<s;++u)w=t.$2(w,v[u])
return new C.cOd().$1(w)},
A(d,e){if(e==null)return!1
return e instanceof C.oj&&this.aS(0,e)===0},
tT(d,e){return this.aS(0,e)>0},
M(d){var w,v,u
for(w=this.c-1,v=this.b,u=0;w>=0;--w)u=u*65536+v[w]
return this.a?-u:u},
vy(d){var w,v,u,t,s,r,q,p=this,o={},n=p.c
if(n===0)return 0
w=new Uint8Array(8);--n
v=p.b
u=16*n+A.o.galw(v[n])
if(u>1024)return p.a?-1/0:1/0
if(p.a)w[7]=128
t=u-53+1075
w[6]=(t&15)<<4
w[7]=(w[7]|A.o.aI(t,4))>>>0
o.a=o.b=0
o.c=n
s=new C.cOe(o,p)
n=s.$1(5)
w[6]=w[6]|n&15
for(r=5;r>=0;--r)w[r]=s.$1(8)
q=new C.cOf(w)
if(J.z(s.$1(1),1))if((w[0]&1)===1)q.$0()
else if(o.b!==0)q.$0()
else for(r=o.c;r>=0;--r)if(v[r]!==0){q.$0()
break}return J.lp(A.aI.gaU(w)).getFloat64(0,!0)},
u(d){var w,v,u,t,s,r=this,q=r.c
if(q===0)return"0"
if(q===1){if(r.a)return A.o.u(-r.b[0])
return A.o.u(r.b[0])}w=B.a([],x.s)
q=r.a
v=q?r.vF(0):r
while(v.c>1){u=$.hH9()
if(u.c===0)B.bi(D.bat)
t=v.ct9(u).u(0)
w.push(t)
s=t.length
if(s===1)w.push("000")
if(s===2)w.push("00")
if(s===3)w.push("0")
v=v.bPJ(u)}w.push(A.o.u(v.b[0]))
if(q)w.push("-")
return new B.ds(w,x.bJ).he(0)},
$iaTS:1,
$ihM:1}
C.aTg.prototype={
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
cS8(d,e){var w=this.b.h(0,e)
return w!=null?this.a[w]:null},
gH(d){return A.d.gH(this.a)},
gan(d){return A.d.gan(this.a)},
gau(d){return this.a.length===0},
gcm(d){return this.a.length!==0},
gae(d){var w=this.a
return new J.ki(w,w.length,B.U(w).k("ki<1>"))}}
C.SO.prototype={
d_i(){var w,v
if(this.as==null)this.bfQ()
w=this.as
v=w==null?null:w.aqI()
return v==null?null:v.eV()},
bfQ(){var w,v
if(this.as!=null)return
w=this.Q
if(w!=null){v=w.aqI().eV()
this.as=new C.bSv(v)}},
gZ(d){return this.at}}
C.a4O.prototype={
a7(){return"CompressionType."+this.b}}
C.bKe.prototype={
eH(d){var w,v,u,t,s=this
if(d===0)return 0
if(s.c===0){s.c=8
s.b=s.a.cs()}for(w=s.a,v=0;u=s.c,d>u;){v=A.o.dX(v,u)+(s.b&A.zT[u])
d-=u
s.c=8
u=w.b
u.toString
s.b=u[w.c++]}if(d>0){if(u===0){s.c=8
s.b=w.cs()}w=A.o.dX(v,d)
u=s.b
t=s.c-d
v=w+(A.o.fQ(u,t)&A.zT[d])
s.c=t}return v}}
C.bIw.prototype={
cQc(d,e){var w,v,u,t,s,r=this,q=new C.bKe(d)
r.cx=r.CW=r.ch=r.ay=0
if(q.eH(8)!==66||q.eH(8)!==90||q.eH(8)!==104)return!1
w=r.a=q.eH(8)-48
if(w<0||w>9)return!1
r.b=new Uint32Array(w*1e5)
v=0
for(;;){w=d.c
u=d.d
u===$&&B.c()
if(!(w<u))break
t=r.crr(q)
if(t<0)return!1
if(t===0){q.eH(8)
q.eH(8)
q.eH(8)
q.eH(8)
s=r.cru(q,e)
if(s<0)return!1
v=(v<<1|v>>>31)^s^4294967295}else if(t===2){q.eH(8)
q.eH(8)
q.eH(8)
q.eH(8)
return!0}}return!0},
crr(d){var w,v,u,t
for(w=!0,v=!0,u=0;u<6;++u){t=d.eH(8)
if(t!==D.dyF[u])v=!1
if(t!==D.d9K[u])w=!1
if(!w&&!v)return-1}return v?0:2},
cru(d3,d4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9=this,d0=4294967295,d1=d3.eH(1),d2=((d3.eH(8)<<8|d3.eH(8))<<8|d3.eH(8))>>>0
c9.c=new Uint8Array(16)
for(w=0;w<16;++w){v=c9.c
u=d3.eH(1)
v.$flags&2&&B.aj(v)
v[w]=u}c9.d=new Uint8Array(256)
for(w=0,t=0;w<16;++w,t+=16)if(c9.c[w]!==0)for(s=0;s<16;++s){v=c9.d
u=d3.eH(1)
v.$flags&2&&B.aj(v)
v[t+s]=u}c9.c5V()
v=c9.fx
if(v===0)return-1
r=v+2
q=d3.eH(3)
if(q<2||q>6)return-1
v=d3.eH(15)
c9.ax=v
if(v<1)return-1
c9.w=new Uint8Array(18002)
c9.x=new Uint8Array(18002)
for(w=0;v=c9.ax,w<v;++w){for(s=0;;){if(d3.eH(1)===0)break;++s
if(s>=q)return-1}v=c9.w
v.$flags&2&&B.aj(v)
v[w]=s}p=new Uint8Array(6)
for(w=0;w<q;++w)p[w]=w
for(u=c9.x,o=c9.w,n=u.$flags|0,w=0;w<v;++w){m=o[w]
l=p[m]
for(;m>0;m=k){k=m-1
p[m]=p[k]}p[0]=l
n&2&&B.aj(u)
u[w]=l}c9.fr=B.bZ(6,$.hF8(),!1,x.E)
for(j=0;j<q;++j){v=c9.fr
v[j]=new Uint8Array(258)
i=d3.eH(5)
for(w=0;w<r;++w){for(;;){if(i<1||i>20)return-1
if(d3.eH(1)===0)break
i=d3.eH(1)===0?i+1:i-1}v=c9.fr[j]
v.$flags&2&&B.aj(v)
v[w]=i}}v=$.hF7()
u=x.an
c9.y=B.bZ(6,v,!1,u)
c9.z=B.bZ(6,v,!1,u)
c9.Q=B.bZ(6,v,!1,u)
c9.as=new Int32Array(6)
for(j=0;j<q;++j){v=c9.y
v[j]=new Int32Array(258)
u=c9.z
u[j]=new Int32Array(258)
o=c9.Q
o[j]=new Int32Array(258)
for(n=c9.fr,h=32,g=0,w=0;w<r;++w){f=n[j][w]
if(f>g)g=f
if(f<h)h=f}c9.c1a(v[j],u[j],o[j],n[j],h,g,r)
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
a3=c9.avM(d3)
if(a3<0)return-1
for(a4=0;;){if(a3===e)break
if(a3===0||a3===1){a5=-1
a6=1
do{if(a6>=2097152)return-1
if(a3===0)a5+=a6
else if(a3===1)a5+=2*a6
a6*=2
a3=c9.avM(d3)}while(a3===0||a3===1);++a5
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
a3=c9.avM(d3)
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
c1=(c1<<8^D.Iu[c1>>>24&255^v])>>>0;--c2}if(c4===c0)return c1
if(c4>c0)return-1
v=c9.b
b5=v[b5]
b6=b5>>>8
if(b8===0){b8=D.Iy[b9];++b9
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
if(b8===0){b8=D.Iy[b9];++b9
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
if(b8===0){b8=D.Iy[b9];++b9
if(b9===512)b9=0}u=b8===1?1:0
c5=b5&255^u;++c4
if(c4===c0){c6=b7
b5=b6
c2=3
continue}if(c5!==b7){c6=c5
b5=b6
c2=3
continue}b5=v[b6]
if(b8===0){b8=D.Iy[b9];++b9
if(b9===512)b9=0}u=b8===1?1:0
c2=(b5&255^u)+4
b5=v[b5>>>8]
b6=b5>>>8
if(b8===0){b8=D.Iy[b9];++b9
if(b9===512)b9=0}v=b8===1?1:0
c6=b5&255^v
c4=c4+1+1
b5=b6}else for(c7=b7,c2=0,c3=0,c4=1;;c3=c7,c7=c8){if(c2>0){for(v=c3&255;;){if(c2===1)break
d4.bu(c3)
c1=c1<<8^D.Iu[c1>>>24&255^v];--c2}d4.bu(c3)
c1=(c1<<8^D.Iu[c1>>>24&255^v])>>>0}if(c4>c0)return-1
if(c4===c0)return c1
v=1e5*c9.a
if(b5>=v)return-1
u=c9.b
b5=u[b5]
c5=b5&255
b5=b5>>>8;++c4
c2=0
if(c5!==c7){d4.bu(c7)
c1=(c1<<8^D.Iu[c1>>>24&255^c7&255])>>>0
c8=c5
continue}if(c4===c0){d4.bu(c7)
c1=(c1<<8^D.Iu[c1>>>24&255^c7&255])>>>0
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
avM(d){var w,v,u,t,s=this,r=s.ay
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
t=d.eH(u)
for(;;){if(u>20)return-1
r=s.cy
r===$&&B.c()
if(t<=r[u])break;++u
t=(t<<1|d.eH(1))>>>0}r=s.dx
r===$&&B.c()
r=t-r[u]
if(r<0||r>=258)return-1
w=s.db
w===$&&B.c()
return w[r]},
c1a(d,e,f,g,h,i,j){var w,v,u,t,s,r,q,p
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
c5V(){var w,v,u,t=this
t.fx=0
t.e=new Uint8Array(256)
for(w=0;w<256;++w){v=t.d
v===$&&B.c()
if(v[w]!==0){v=t.e
u=t.fx++
v.$flags&2&&B.aj(v)
v[u]=w}}}}
C.cGb.prototype={
aK5(d,e,f){var w,v,u,t,s,r=this,q=r.a=r.bTn(e)
if(q<0)return
e.c=q
if(e.aT()!==101010256)return
e.b3()
e.b3()
e.b3()
e.b3()
r.f=e.aT()
r.r=e.aT()
w=e.b3()
if(w>0)e.aK8(w,!1)
r.crP(e)
q=r.r
v=r.f
u=e.aNe(Math.min(v,1024),v,q)
q=r.x
for(;;){v=u.c
t=u.d
t===$&&B.c()
if(!(v<t))break
if(u.aT()!==33639248)break
s=new C.baD()
s.d_h(0,u,e,f)
q.push(s)}},
crP(d){var w,v,u,t,s=d.c,r=this.a-20
if(r<0)return
w=d.a8V(20,r)
if(w.aT()!==117853008){d.c=s
return}w.aT()
v=w.tE()
w.aT()
d.c=v
if(d.aT()!==101075792){d.c=s
return}d.tE()
d.b3()
d.b3()
d.aT()
d.aT()
d.tE()
d.tE()
u=d.tE()
t=d.tE()
this.f=u
this.r=t
d.c=s},
bTn(d){var w,v,u,t,s,r,q,p,o,n
if(d.gI(0)<=4)return-1
w=d.c
v=d.gI(0)-4
u=Math.min(v,1024)
t=v-u
for(s=u-4;t>=0;){d.c=t
r=d.a8V(u,t)
q=d.c
p=r.b
d.c=q+(p==null?0:p.length-r.c)
o=new B.ana(A.iq)
o.aOt(r.eV(),A.iq,null,null)
for(n=s;n>=0;--n){o.c=n
if(o.aT()===101010256){d.c=w
return t+n}}t=t>0&&t<u?0:t-u}return-1}}
C.cG9.prototype={}
C.ayQ.prototype={
a7(){return"ZipEncryptionMode."+this.b}}
C.cGc.prototype={
aK5(d,e,f){var w,v,u,t,s,r,q,p,o=this
if(e.aT()!==67324752)return
e.b3()
o.b=e.b3()
w=D.aIk.h(0,e.b3())
o.c=w==null?D.Nr:w
o.d=e.b3()
o.e=e.b3()
o.f=e.aT()
o.r=e.aT()
o.w=e.aT()
v=e.b3()
u=e.b3()
o.x=e.apl(v)
o.y=e.hr(u).eV()
w=o.z
t=w.w
o.r=t
w=w.x
o.w=w
o.at=(o.b&1)!==0?D.b_l:D.EU
o.ay=f
o.Q=e.hr(t)
if(o.at!==D.EU&&u>2){w=o.y
w.toString
s=B.rG(w,A.iq,null,null)
for(;;){w=s.c
t=s.d
t===$&&B.c()
if(!(w<t))break
if(s.b3()===39169){s.b3()
s.b3()
s.apl(2)
w=s.b
w.toString
r=w[s.c++]
q=s.b3()
o.at=D.b_m
o.ax=new C.cG9(r,q)
w=D.aIk.h(0,q)
o.c=w==null?D.Nr:w}}}if((o.b&8)!==0){p=e.aT()
if(p===134695760)o.f=e.aT()
else o.f=p
o.r=e.aT()
o.w=e.aT()}},
gI(d){return this.bpz().length},
aqI(){var w,v,u,t,s,r=this,q=null,p=r.Q
if(p==null)return B.rG(new Uint8Array(0),A.iq,q,q)
w=r.at
if(w!==D.EU)if(p.gI(0)<=0)r.at=D.EU
else{if(w===D.b_l){p=r.bO1(p)
r.Q=p}else if(w===D.b_m){p=r.bNF(p)
r.Q=p}r.at=D.EU}w=r.c
if(w===D.akj){v=p.c
u=B.dj()
p=r.Q
if(p.gI(0)<=524288e3)u.b=A.q2.C6(p.eV(),!0,!1)
else{t=B.a9u(A.iq,r.w)
p=r.Q
p.toString
A.q2.a5_(p,t,!0,!1)
u.b=t.Hn()}r.Q.c=v
return B.rG(u.bl(),A.iq,q,q)}else if(w===D.akk){s=B.a9u(A.iq,32768)
p=r.Q
v=p.c
C.hKw().cQc(p,s)
u=s.Hn()
r.Q.c=v
return B.rG(u,A.iq,q,q)}else return B.rG(p.eV(),A.iq,q,q)},
bpz(){var w=this.Q
if(w==null)return new Uint8Array(0)
return w.eV()},
u(d){return this.x},
bbE(d){var w=this.ch,v=C.KB(C.hAt(w[0].M(0),d))
w[0]=v
v=w[1].a2(0,v.VA(0,C.KB(255)))
w[1]=v
w[1]=v.aM(0,C.KB(134775813)).a2(0,C.KB(1)).VA(0,C.KB(4294967295))
w[2]=C.KB(C.hAt(w[2].M(0),w[1].mD(0,24).M(0)))},
aTi(){var w=(this.ch[2].VA(0,C.KB(65535)).M(0)|2)>>>0
return w*((w^1)>>>0)>>>8&255},
bO1(d){var w,v,u,t,s,r=this,q=null
if(r.Q==null)return B.rG(new Uint8Array(0),A.iq,q,q)
for(w=0;w<12;++w){v=r.Q
u=v.b
u.toString
r.bbE(u[v.c++]^r.aTi())}t=r.Q.eV()
for(v=t.length,u=t.$flags|0,w=0;w<v;++w){s=t[w]^r.aTi()
r.bbE(s)
u&2&&B.aj(t)
t[w]=s}return B.rG(t,A.iq,q,q)},
bNF(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this.ax.c
if(k===1){w=d.hr(8).eV()
v=16}else if(k===2){w=d.hr(12).eV()
v=24}else{w=d.hr(16).eV()
v=32}u=d.hr(2).eV()
t=d.hr(d.gI(0)-10)
s=d.hr(10)
r=t.eV()
k=this.ay
k.toString
q=C.i1a(k,w,v)
p=new Uint8Array(B.cb(A.aI.dt(q,0,v)))
k=v*2
o=new Uint8Array(B.cb(A.aI.dt(q,v,k)))
if(!C.hsJ(A.aI.dt(q,k,k+2),u))throw B.W(B.fl("password error"))
k=new Uint8Array(16)
n=new C.bH5(k,new Uint8Array(16),p)
k=x.S
m=J.a6j(0,k)
m=n.r=new C.coL(m)
m.c=!0
m.b=m.boQ(!0,new C.aun(p))
if(m.c)m.d=B.bq(D.oL,!0,k)
else m.d=B.bq(D.zG,!0,k)
l=C.hqU(C.hqW(),64)
l.bif(new C.aun(o))
n.w=l
n.cZO(r,0,r.length)
k=s.eV()
m=n.x
m===$&&B.c()
if(!C.hsJ(k,m))throw B.W(B.fl("macs don't match"))
return B.rG(r,A.iq,null,null)}}
C.baD.prototype={
d_h(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=this
n.a=e.b3()
e.b3()
e.b3()
e.b3()
e.b3()
e.b3()
e.aT()
n.w=e.aT()
n.x=e.aT()
w=e.b3()
v=e.b3()
u=e.b3()
n.y=e.b3()
e.b3()
n.Q=e.aT()
n.as=e.aT()
if(w>0)n.at=e.apl(w)
if(v>0){t=e.hr(v).eV()
n.ax=t
if(v>=4){s=B.rG(t,A.iq,null,null)
for(;;){t=s.c
r=s.d
r===$&&B.c()
if(!(t<r))break
q=s.b3()
p=s.b3()
o=s.a8V(p,s.c)
t=s.c
r=o.b
s.c=t+(r==null?0:r.length-o.c)
if(q===1){if(p>=8&&n.x===4294967295){n.x=o.tE()
p-=8}if(p>=8&&n.w===4294967295){n.w=o.tE()
p-=8}if(p>=8&&n.as===4294967295){n.as=o.tE()
p-=8}if(p>=4&&n.y===65535)n.y=o.aT()}}}}if(u>0)e.apl(u)
f.c=n.as
t=new C.cGc(D.Nr,n,D.EU,B.a([C.KB(0),C.KB(0),C.KB(0)],x.f3))
n.ch=t
t.aK5(0,f,g)},
u(d){return this.at}}
C.cGa.prototype={
cQd(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=new C.cGb(B.a([],x.fT))
this.a=g
g.aK5(0,d,f)
g=B.a([],x.bm)
w=B.T(x.N,x.S)
v=new C.aTg(g,w)
for(u=this.a.x,t=u.length,s=0;s<u.length;u.length===t||(0,B.J)(u),++s){r=u[s]
q=r.ch
p=r.Q>>>16
o=q.x
n=A.a.c8(o,"/")||A.a.c8(o,"\\")
m=w.h(0,o)
l=m!=null?g[m]:h
if(l==null){l=n?new C.SO(o,A.o.aq(Date.now(),1000),0):C.hiU(o,q.w,q)
v.J(0,l)}l.b=p
if(r.a>>>8===3)if((p&61440)===40960){k=C.hiU(o,q.w,q)
if(k.as==null)k.bfQ()
o=k.as
if(o==null)j=h
else{o=o.a
j=new B.ana(A.iq)
j.aOt(o,A.iq,h,h)}i=j==null?h:j.eV()
if(i!=null)new B.GR(!1).E1(i,0,h,!0)}}return v}}
C.bH5.prototype={
cZO(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.w
l===$&&B.c()
l.a.CZ(0,d,0,f)
for(l=e+f,w=m.c,v=d.$flags|0,u=m.b,t=e;t<l;t=s){s=t+16
r=s<=l?16:l-t
C.hKf(u,m.a)
q=m.r
if(16>u.byteLength)B.bi(B.dL("Input buffer too short",null))
if(16>w.byteLength)B.bi(B.dL("Output buffer too short",null))
p=q.c
o=q.b
if(p){o===$&&B.c()
q.bRz(u,0,w,0,o)}else{o===$&&B.c()
q.bO5(u,0,w,0,o)}for(n=0;n<r;++n){q=t+n
p=d[q]
o=w[n]
v&2&&B.aj(d)
d[q]=p^o}++m.a}l=m.w
w=l.b
w===$&&B.c()
w=new Uint8Array(w)
m.x=w
l.LG(w,0)
m.x=A.aI.dt(m.x,0,10)
w=m.w
l=w.a
l.ir(0)
w=w.d
w===$&&B.c()
l.CZ(0,w,0,w.length)
return f}}
C.coQ.prototype={}
C.coU.prototype={}
C.coO.prototype={}
C.aun.prototype={}
C.coT.prototype={
cQs(d,e,f,g){var w,v,u,t,s,r,q,p,o=this,n=o.a
n===$&&B.c()
w=n.c
n=o.b
v=n.b
v===$&&B.c()
u=A.o.ed(w+v-1,v)
t=new Uint8Array(4)
s=new Uint8Array(u*v)
n.bif(new C.aun(A.aI.fO(d,e)))
for(r=0,q=1;q<=u;++q){for(p=3;;--p){t[p]=t[p]+1
if(t[p]!==0)break}n=o.a
o.bSH(n.a,n.b,t,s,r)
r+=v}A.aI.h9(f,g,g+w,s)
return o.a.c},
bSH(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m=this
if(e<=0)throw B.W(B.dL("Iteration count must be at least 1.",null))
w=m.b
v=w.a
v.CZ(0,d,0,d.length)
v.CZ(0,f,0,4)
u=m.c
u===$&&B.c()
w.LG(u,0)
u=m.c
A.aI.h9(g,h,h+u.length,u)
for(u=g.$flags|0,t=1;t<e;++t){s=m.c
v.CZ(0,s,0,s.length)
w.LG(m.c,0)
for(s=m.c,r=s.length,q=0;q!==r;++q){p=h+q
o=g[p]
n=s[q]
u&2&&B.aj(g)
g[p]=o^n}}}}
C.coP.prototype={}
C.coN.prototype={}
C.auo.prototype={
A(d,e){var w,v,u
if(e==null)return!1
w=!1
if(e instanceof C.auo){v=this.a
v===$&&B.c()
u=e.a
u===$&&B.c()
if(v===u){w=this.b
w===$&&B.c()
v=e.b
v===$&&B.c()
v=w===v
w=v}}return w},
tT(d,e){var w=this.a
w===$&&B.c()
w=A.o.tT(w,e.gc1r())
if(!w)e.gc1r()
return w},
aME(d,e){this.a=0
this.b=d},
tW(d){return this.aME(d,null)},
aNh(d){var w,v=this,u=v.b
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
w.b3h(v,u)
u=w.b
u===$&&B.c()
w.b3h(v,u)
u=v.a
return u.charCodeAt(0)==0?u:u},
b3h(d,e){var w,v=A.o.ft(e,16)
for(w=8-v.length;w>0;--w)d.a+="0"
d.a+=v},
gX(d){var w,v=this.a
v===$&&B.c()
w=this.b
w===$&&B.c()
return B.bx(v,w,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h)}}
C.coS.prototype={
ir(d){var w,v=this
v.a.tW(0)
v.c=0
A.aI.hy(v.b,0,4,0)
v.w=0
w=v.r
A.d.hy(w,0,w.length,0)
w=v.f
w[0]=1732584193
w[1]=4023233417
w[2]=2562383102
w[3]=271733878
w[4]=3285377520},
aqb(d){var w,v=this,u=v.b,t=v.c
t===$&&B.c()
w=t+1
v.c=w
u.$flags&2&&B.aj(u)
u[t]=d&255
if(w===4){v.b4K(u,0)
v.c=0}v.a.aNh(1)},
CZ(d,e,f,g){var w=this.cqa(e,f,g)
f+=w
g-=w
w=this.cqb(e,f,g)
this.cq1(e,f+w,g-w)},
LG(d,e){var w,v=this,u=C.hqV(v.a),t=u.a
t===$&&B.c()
t=C.hgw(t,3)
u.a=t
w=u.b
w===$&&B.c()
u.a=(t|w>>>29)>>>0
u.b=C.hgw(w,3)
v.cq5()
v.cq2(u)
v.auA()
v.ckb(d,e)
v.ir(0)
return 20},
b4K(d,e){var w=this,v=w.w
v===$&&B.c()
w.w=v+1
w.r[v]=J.ou(A.aI.gaU(d),d.byteOffset,d.length).getUint32(e,A.iz===w.d)
if(w.w===16)w.auA()},
auA(){this.cZN()
this.w=0
A.d.hy(this.r,0,16,0)},
cq1(d,e,f){while(f>0){this.aqb(d[e]);++e;--f}},
cqb(d,e,f){var w,v
for(w=this.a,v=0;f>4;){this.b4K(d,e)
e+=4
f-=4
w.aNh(4)
v+=4}return v},
cqa(d,e,f){var w,v=0
for(;;){w=this.c
w===$&&B.c()
if(!(w!==0&&f>0))break
this.aqb(d[e]);++e;--f;++v}return v},
cq5(){this.aqb(128)
for(;;){var w=this.c
w===$&&B.c()
if(!(w!==0))break
this.aqb(0)}},
cq2(d){var w,v=this,u=v.w
u===$&&B.c()
if(u>14)v.auA()
u=v.d
switch(u){case A.iz:u=v.r
w=d.b
w===$&&B.c()
u[14]=w
w=d.a
w===$&&B.c()
u[15]=w
break
case A.Fl:u=v.r
w=d.a
w===$&&B.c()
u[14]=w
w=d.b
w===$&&B.c()
u[15]=w
break
default:throw B.W(B.bc("Invalid endianness: "+u.u(0)))}},
ckb(d,e){var w,v,u,t,s,r,q
for(w=this.e,v=this.f,u=d.length,t=A.iz===this.d,s=0;s<w;++s){r=v[s]
q=J.ou(A.aI.gaU(d),d.byteOffset,u)
q.$flags&2&&B.aj(q,11)
q.setUint32(e+s*4,r,t)}},
gdf(d){return this.f}}
C.coV.prototype={
cZN(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
for(w=this.r,v=16;v<80;++v){u=w[v-3]^w[v-8]^w[v-14]^w[v-16]
w[v]=((u&$.qv[1])<<1|u>>>31)>>>0}t=this.f
s=t[0]
r=t[1]
q=t[2]
p=t[3]
o=t[4]
for(n=s,m=0,l=0;l<4;++l,m=j){k=$.qv[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r&q|~r&p)>>>0)+w[m]+1518500249>>>0
i=$.qv[30]
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
q=((q&i)<<30|q>>>2)>>>0}for(l=0;l<4;++l,m=j){k=$.qv[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r^q^p)>>>0)+w[m]+1859775393>>>0
i=$.qv[30]
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
q=((q&i)<<30|q>>>2)>>>0}for(l=0;l<4;++l,m=j){k=$.qv[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r&q|r&p|q&p)>>>0)+w[m]+2400959708>>>0
i=$.qv[30]
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
q=((q&i)<<30|q>>>2)>>>0}for(l=0;l<4;++l,m=j){k=$.qv[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r^q^p)>>>0)+w[m]+3395469782>>>0
i=$.qv[30]
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
C.coR.prototype={
bif(d){var w,v,u,t,s=this,r=s.a
r.ir(0)
w=d.a
w===$&&B.c()
v=w.length
u=s.c
u===$&&B.c()
if(v>u){r.CZ(0,w,0,v)
w=s.d
w===$&&B.c()
r.LG(w,0)
w=s.b
w===$&&B.c()
v=w}else{t=s.d
t===$&&B.c()
A.aI.h9(t,0,v,w)}w=s.d
w===$&&B.c()
A.aI.hy(w,v,w.length,0)
w=s.e
w===$&&B.c()
A.aI.h9(w,0,u,s.d)
s.bcS(s.d,u,54)
s.bcS(s.e,u,92)
u=s.d
r.CZ(0,u,0,u.length)},
LG(d,e){var w,v,u=this,t=u.a,s=u.e
s===$&&B.c()
w=u.c
w===$&&B.c()
t.LG(s,w)
s=u.e
t.CZ(0,s,0,s.length)
v=t.LG(d,e)
s=u.e
A.aI.hy(s,w,s.length,0)
s=u.d
s===$&&B.c()
t.CZ(0,s,0,s.length)
return v},
bcS(d,e,f){var w,v,u
for(w=d.$flags|0,v=0;v<e;++v){u=d[v]
w&2&&B.aj(d)
d[v]=u^f}}}
C.coM.prototype={}
C.coL.prototype={
a3e(d){return(D.oL[d&255]&255|(D.oL[d>>>8&255]&255)<<8|(D.oL[d>>>16&255]&255)<<16|D.oL[d>>>24&255]<<24)>>>0},
boQ(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=a0.a
e===$&&B.c()
w=e.length
if(w<16||w>32||(w&7)!==0)throw B.W(B.dL("Key length not 128/192/256 bits.",null))
v=w>>>2
u=v+6
f.a=u
t=u+1
s=J.e2(t,x.bW)
for(u=x.S,r=0;r<t;++r)s[r]=B.bZ(4,0,!1,u)
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
for(r=1;r<=10;++r){p=(p^f.a3e((m>>>8|(m&$.qv[24])<<24)>>>0)^D.cLK[r-1])>>>0
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
p=(p^f.a3e((k>>>8|(k&$.qv[24])<<24)>>>0)^j)>>>0
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
p=(p^f.a3e((k>>>8|(k&$.qv[24])<<24)>>>0)^i)>>>0
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
p=(p^f.a3e((g>>>8|(g&$.qv[24])<<24)>>>0)^j)>>>0
e=s[r]
e[0]=p
o=(o^p)>>>0
e[1]=o
n=(n^o)>>>0
e[2]=n
m=(m^n)>>>0
e[3]=m;++r
if(r>=15)break
l=(l^f.a3e(m))>>>0
e=s[r]
e[0]=l
k=(k^l)>>>0
e[1]=k
h=(h^k)>>>0
e[2]=h
g=(g^h)>>>0
e[3]=g;++r}break
default:throw B.W(B.bc("Should never get here"))}return s},
bRz(b2,b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=J.ou(A.aI.gaU(b2),b2.byteOffset,16),a3=a2.getUint32(b3,!0),a4=a2.getUint32(b3+4,!0),a5=a2.getUint32(b3+8,!0),a6=a2.getUint32(b3+12,!0),a7=b6[0],a8=a3^a7[0],a9=a4^a7[1],b0=a5^a7[2],b1=a6^a7[3]
for(a7=this.a-1,w=1;w<a7;){v=D.en[a8&255]
u=D.en[a9>>>8&255]
t=$.qv[8]
s=D.en[b0>>>16&255]
r=$.qv[16]
q=D.en[b1>>>24&255]
p=$.qv[24]
o=b6[w]
n=v^(u>>>24|(u&t)<<8)^(s>>>16|(s&r)<<16)^(q>>>8|(q&p)<<24)^o[0]
q=D.en[a9&255]
s=D.en[b0>>>8&255]
u=D.en[b1>>>16&255]
v=D.en[a8>>>24&255]
m=q^(s>>>24|(s&t)<<8)^(u>>>16|(u&r)<<16)^(v>>>8|(v&p)<<24)^o[1]
v=D.en[b0&255]
u=D.en[b1>>>8&255]
s=D.en[a8>>>16&255]
q=D.en[a9>>>24&255]
l=v^(u>>>24|(u&t)<<8)^(s>>>16|(s&r)<<16)^(q>>>8|(q&p)<<24)^o[2]
q=D.en[b1&255]
a8=D.en[a8>>>8&255]
a9=D.en[a9>>>16&255]
b0=D.en[b0>>>24&255];++w
b1=q^(a8>>>24|(a8&t)<<8)^(a9>>>16|(a9&r)<<16)^(b0>>>8|(b0&p)<<24)^o[3]
o=D.en[n&255]
b0=D.en[m>>>8&255]
a9=D.en[l>>>16&255]
a8=D.en[b1>>>24&255]
q=b6[w]
a8=o^(b0>>>24|(b0&t)<<8)^(a9>>>16|(a9&r)<<16)^(a8>>>8|(a8&p)<<24)^q[0]
a9=D.en[m&255]
b0=D.en[l>>>8&255]
o=D.en[b1>>>16&255]
s=D.en[n>>>24&255]
a9=a9^(b0>>>24|(b0&t)<<8)^(o>>>16|(o&r)<<16)^(s>>>8|(s&p)<<24)^q[1]
s=D.en[l&255]
o=D.en[b1>>>8&255]
b0=D.en[n>>>16&255]
u=D.en[m>>>24&255]
b0=s^(o>>>24|(o&t)<<8)^(b0>>>16|(b0&r)<<16)^(u>>>8|(u&p)<<24)^q[2]
u=D.en[b1&255]
o=D.en[n>>>8&255]
s=D.en[m>>>16&255]
v=D.en[l>>>24&255];++w
b1=u^(o>>>24|(o&t)<<8)^(s>>>16|(s&r)<<16)^(v>>>8|(v&p)<<24)^q[3]}n=D.en[a8&255]^C.nO(D.en[a9>>>8&255],24)^C.nO(D.en[b0>>>16&255],16)^C.nO(D.en[b1>>>24&255],8)^b6[w][0]
m=D.en[a9&255]^C.nO(D.en[b0>>>8&255],24)^C.nO(D.en[b1>>>16&255],16)^C.nO(D.en[a8>>>24&255],8)^b6[w][1]
l=D.en[b0&255]^C.nO(D.en[b1>>>8&255],24)^C.nO(D.en[a8>>>16&255],16)^C.nO(D.en[a9>>>24&255],8)^b6[w][2]
b1=D.en[b1&255]^C.nO(D.en[a8>>>8&255],24)^C.nO(D.en[a9>>>16&255],16)^C.nO(D.en[b0>>>24&255],8)^b6[w][3]
a7=D.oL[n&255]
b0=D.oL[m>>>8&255]
v=this.d
u=v[l>>>16&255]
t=v[b1>>>24&255]
s=b6[w+1]
r=s[0]
q=v[m&255]
p=D.oL[l>>>8&255]
a9=D.oL[b1>>>16&255]
o=v[n>>>24&255]
k=s[1]
j=v[l&255]
i=D.oL[b1>>>8&255]
h=D.oL[n>>>16&255]
g=D.oL[m>>>24&255]
f=s[2]
e=v[b1&255]
d=v[n>>>8&255]
v=v[m>>>16&255]
a0=D.oL[l>>>24&255]
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
bO5(b1,b2,b3,b4,b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=J.ou(A.aI.gaU(b1),b1.byteOffset,16).getUint32(b2,!0),a1=J.ou(A.aI.gaU(b1),b1.byteOffset,16).getUint32(b2+4,!0),a2=J.ou(A.aI.gaU(b1),b1.byteOffset,16).getUint32(b2+8,!0),a3=J.ou(A.aI.gaU(b1),b1.byteOffset,16).getUint32(b2+12,!0),a4=this.a,a5=b5[a4],a6=a0^a5[0],a7=a1^a5[1],a8=a2^a5[2],a9=a4-1,b0=a3^a5[3]
for(a5=a8,a4=a7;a9>1;){w=D.em[a6&255]
v=D.em[b0>>>8&255]
u=$.qv[8]
t=D.em[a5>>>16&255]
s=$.qv[16]
r=D.em[a4>>>24&255]
q=$.qv[24]
a7=b5[a9]
p=w^(v>>>24|(v&u)<<8)^(t>>>16|(t&s)<<16)^(r>>>8|(r&q)<<24)^a7[0]
r=D.em[a4&255]
t=D.em[a6>>>8&255]
v=D.em[b0>>>16&255]
w=D.em[a5>>>24&255]
o=r^(t>>>24|(t&u)<<8)^(v>>>16|(v&s)<<16)^(w>>>8|(w&q)<<24)^a7[1]
w=D.em[a5&255]
v=D.em[a4>>>8&255]
t=D.em[a6>>>16&255]
r=D.em[b0>>>24&255]
n=w^(v>>>24|(v&u)<<8)^(t>>>16|(t&s)<<16)^(r>>>8|(r&q)<<24)^a7[2]
r=D.em[b0&255]
a5=D.em[a5>>>8&255]
a4=D.em[a4>>>16&255]
a6=D.em[a6>>>24&255];--a9
b0=r^(a5>>>24|(a5&u)<<8)^(a4>>>16|(a4&s)<<16)^(a6>>>8|(a6&q)<<24)^a7[3]
a7=D.em[p&255]
a6=D.em[b0>>>8&255]
a4=D.em[n>>>16&255]
a5=D.em[o>>>24&255]
r=b5[a9]
a6=a7^(a6>>>24|(a6&u)<<8)^(a4>>>16|(a4&s)<<16)^(a5>>>8|(a5&q)<<24)^r[0]
a5=D.em[o&255]
a4=D.em[p>>>8&255]
a7=D.em[b0>>>16&255]
t=D.em[n>>>24&255]
a4=a5^(a4>>>24|(a4&u)<<8)^(a7>>>16|(a7&s)<<16)^(t>>>8|(t&q)<<24)^r[1]
t=D.em[n&255]
a7=D.em[o>>>8&255]
a5=D.em[p>>>16&255]
v=D.em[b0>>>24&255]
a5=t^(a7>>>24|(a7&u)<<8)^(a5>>>16|(a5&s)<<16)^(v>>>8|(v&q)<<24)^r[2]
v=D.em[b0&255]
a7=D.em[n>>>8&255]
t=D.em[o>>>16&255]
w=D.em[p>>>24&255];--a9
b0=v^(a7>>>24|(a7&u)<<8)^(t>>>16|(t&s)<<16)^(w>>>8|(w&q)<<24)^r[3]}p=D.em[a6&255]^C.nO(D.em[b0>>>8&255],24)^C.nO(D.em[a5>>>16&255],16)^C.nO(D.em[a4>>>24&255],8)^b5[a9][0]
o=D.em[a4&255]^C.nO(D.em[a6>>>8&255],24)^C.nO(D.em[b0>>>16&255],16)^C.nO(D.em[a5>>>24&255],8)^b5[a9][1]
n=D.em[a5&255]^C.nO(D.em[a4>>>8&255],24)^C.nO(D.em[a6>>>16&255],16)^C.nO(D.em[b0>>>24&255],8)^b5[a9][2]
b0=D.em[b0&255]^C.nO(D.em[a5>>>8&255],24)^C.nO(D.em[a4>>>16&255],16)^C.nO(D.em[a6>>>24&255],8)^b5[a9][3]
a4=D.zG[p&255]
a5=this.d
w=a5[b0>>>8&255]
v=a5[n>>>16&255]
u=D.zG[o>>>24&255]
t=b5[0]
s=t[0]
r=a5[o&255]
q=a5[p>>>8&255]
a7=D.zG[b0>>>16&255]
m=a5[n>>>24&255]
l=t[1]
k=a5[n&255]
j=D.zG[o>>>8&255]
i=D.zG[p>>>16&255]
h=a5[b0>>>24&255]
g=t[2]
f=D.zG[b0&255]
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
C.bSu.prototype={}
C.bSv.prototype={
gI(d){var w=this.a.length
return w},
aqI(){return B.rG(this.a,A.iq,null,null)}}
C.czi.prototype={
Nj(d){var w=d.w,v=Math.max(1,A.j.cL(w/186)),u=Math.max(0,w-16*(v-1))/v,t=u/0.52
return new B.ab8(v,t+20,u+16,t,u,B.us(d.x))},
nD(d){return!1}}
C.bTw.prototype={
cKf(d){if(this.b)throw B.W(B.bc("FontLoader is already loaded"))
this.c.push(d.bG(new C.bTx(),x.E))},
mW(d){var w=0,v=B.j(x.H),u=this,t,s,r,q,p
var $async$mW=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(u.b)throw B.W(B.bc("FontLoader is already loaded"))
u.b=!0
t=u.c,s=t.length,r=u.a,q=0
case 2:if(!(q<t.length)){w=4
break}p=C
w=6
return B.b(t[q],$async$mW)
case 6:w=5
return B.b(p.bDZ(f,r),$async$mW)
case 5:case 3:t.length===s||(0,B.J)(t),++q
w=2
break
case 4:return B.h(null,v)}})
return B.i($async$mW,v)}}
C.axu.prototype={
a7(){return"SystemUiMode."+this.b}}
C.a9s.prototype={
A(d,e){if(e==null)return!1
if(J.bV(e)!==B.b2(this))return!1
return e instanceof C.a9s&&e.a===this.a},
gX(d){return B.bx(B.b2(this),B.xm(this.a),A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h)},
u(d){var w="<optimized out>#"
if(B.b2(this)===D.h2P)return"["+(w+B.ea(this.a))+"]"
return"[ObjectKey "+(w+B.ea(this.a))+"]"}}
C.a25.prototype={
S(){return new C.aKS(B.aR(x.N))},
cXV(d){return this.d.$1(d)},
cVB(){return this.e.$0()}}
C.aKS.prototype={
Y(){this.a3()
this.PJ()},
PJ(){var w=0,v=B.j(x.H),u,t=this,s
var $async$PJ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.a.cVB(),$async$PJ)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.fhj(t,s))
case 1:return B.h(u,v)}})
return B.i($async$PJ,v)},
ZU(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$ZU=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.a.c
q=B.U(r).k("Y<1>")
p=B.C(new B.Y(r,new C.fhn(t),q),q.k("M.E"))
if(p.length===0||t.r){w=1
break}t.m(new C.fho(t))
w=3
return B.b(C.aoV(p),$async$ZU)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.fhp(t,s,p))
w=4
return B.b(t.PJ(),$async$ZU)
case 4:case 1:return B.h(u,v)}})
return B.i($async$ZU,v)},
a29(d){return this.cum(d)},
cum(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a29=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}t.m(new C.fhk(t))
s=J.t(d,"id")
w=3
return B.b(C.c3u(J.k(s==null?"":s)),$async$a29)
case 3:r=f
if(r==null){if(t.c==null){w=1
break}t.m(new C.fhl(t))
w=1
break}q=C.hfW(r,!1)
q.z=!1
s=t.a
s.toString
w=4
return B.b(s.cXV(B.a([q],x.D)),$async$a29)
case 4:if(t.c==null){w=1
break}t.m(new C.fhm(t,r))
case 1:return B.h(u,v)}})
return B.i($async$a29,v)},
PI(d,e){return this.bOx(0,e)},
bOx(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$PI=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}s=J.a7(e)
r=s.h(e,"name")
q=J.k(r==null?"this presentation":r)
r=t.c
r.toString
w=3
return B.b(B.ce(null,null,!0,null,new C.fhe(q),r,null,!0,!0,x.y),$async$PI)
case 3:if(g!==!0||t.c==null){w=1
break}t.m(new C.fhf(t))
s=s.h(e,"id")
w=4
return B.b(C.aoU(J.k(s==null?"":s)),$async$PI)
case 4:if(t.c==null){w=1
break}t.m(new C.fhg(t))
w=5
return B.b(t.PJ(),$async$PI)
case 5:case 1:return B.h(u,v)}})
return B.i($async$PI,v)},
cJe(d){var w=B.bj(d),v=w==null?null:w.bT()
if(v==null)return""
return A.iO[B.bK(v)-1]+" "+B.bW(v)},
aT9(d,e){var w=null,v=B.m(e*0.3)
return B.q(w,B.X(d,A.c,w,w,w,e*0.5),A.f,w,w,new B.p(w,w,w,v,w,D.Q4,A.n),w,e,w,w,w,w,w,e)},
aT8(d){return this.aT9(d,44)},
b9X(d,e,f,g){var w,v,u=null,t=this.w===d,s=t?D.Q4:u,r=B.m(14),q=B.X(e,t?A.c:A.aD,u,u,u,17),p=x.p
q=B.a([q,Z.AD,B.d(f,u,u,u,u,u,u,B.l(u,u,t?A.c:A.aD,u,u,u,u,u,u,u,u,13.5,u,u,A.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],p)
if(g>0){w=A.c.j(t?0.25:0.1)
v=B.m(10)
A.d.v(q,B.a([Z.AD,B.q(u,B.d(""+g,u,u,u,u,u,u,B.l(u,u,t?A.c:A.aS,u,u,u,u,u,u,u,u,11,u,u,A.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.f,u,u,new B.p(w,u,u,v,u,u,A.n),u,u,u,u,D.bHA,u,u,u)],p))}return B.E(B.aA(A.c5,B.cT(u,B.A(q,A.m,u,A.bb,A.i,0,u,u),u,u,A.b3,new B.p(u,u,u,r,u,s,A.n),A.h1,u,u,u,u,A.qx,u,u,u),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.fht(this,d),u,u,u,u,u,u,!1,A.a4),1)},
co8(d){var w,v,u,t,s,r,q=null,p=this.d.q(0,d.a),o=p?A.d5.j(0.14):D.ZV,n=B.m(18),m=p?A.d5:A.dl
m=B.L(m,A.r,p?1.8:1)
w=this.aT8(A.qL)
v=B.d(d.b,q,1,A.a2,q,q,q,D.aWc,q,q,q)
u=d.r.length
t=u===1?"":"s"
s=x.p
t=B.E(B.x(B.a([v,A.cU,B.d(""+u+" slide"+t,q,q,q,q,q,q,D.aWe,q,q,q)],s),A.E,q,A.e,A.i,0,A.p),1)
v=p?D.Q4:q
u=p?q:B.L(A.aT,A.r,1.6)
r=p?D.bYZ:q
return B.aA(q,B.cT(q,B.A(B.a([w,A.bd,t,B.cT(q,r,q,q,A.b3,new B.p(q,q,u,q,q,v,A.a7),A.fU,q,26,q,q,q,q,q,26)],s),A.m,q,A.e,A.i,0,q,q),q,q,A.b3,new B.p(o,q,m,n,q,q,A.n),A.fU,q,q,q,A.d3,A.bh,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.fhi(this,p,d),q,q,q,q,q,q,!1,A.a4)},
cvZ(d){var w,v,u,t,s,r=this,q=null,p=J.a7(d),o=p.h(d,"savedAt"),n=r.cJe(J.k(o==null?"":o))
o=B.m(18)
w=B.L(A.dl,A.r,1)
v=r.aT8(A.Pc)
u=p.h(d,"name")
u=B.d(J.k(u==null?"Presentation":u),q,1,A.a2,q,q,q,D.aWc,q,q,q)
p=p.h(d,"slides")
p=B.w(p==null?"?":p)
t=n.length===0?"":" \xb7 saved "+n
s=x.p
t=B.E(B.x(B.a([u,A.cU,B.d(p+" slides"+t,q,q,q,q,q,q,D.aWe,q,q,q)],s),A.E,q,A.e,A.i,0,A.p),1)
p=r.b6q(A.hX,A.bx,"Bring it back",r.r?q:new C.fhq(r,d))
return B.q(q,B.A(B.a([v,A.bd,t,p,A.bm,r.b6q(A.eh,A.c0,"Delete",r.r?q:new C.fhr(r,d))],s),A.m,q,A.e,A.i,0,q,q),A.f,q,q,new B.p(D.ZV,q,w,o,q,q,A.n),q,q,q,A.d3,D.bBP,q,q,q)},
b6q(d,e,f,g){var w=null,v=g==null,u=e.j(v?0.06:0.14)
return B.hb(B.aA(w,B.q(w,B.X(d,v?A.aT:e,w,w,w,19),A.f,w,w,new B.p(u,w,w,w,w,w,A.a7),w,38,w,w,w,w,w,38),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a4),w,f,w,w)},
auQ(d,e,f){var w=null
return new B.D(D.bAP,B.x(B.a([B.X(d,A.aT,w,w,w,46),A.af,B.d(e,w,w,w,w,w,w,D.fzc,w,w,w),A.ax,B.d(f,w,w,w,w,w,w,D.frd,A.K,w,w)],x.p),A.m,w,A.e,A.i,0,A.p),w)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.e
if(h==null)h=A.cd
w=j.a.c.length
v=w!==0&&j.d.a===w
w=B.aH(d,A.c1,x.w).w
u=B.q(i,i,A.f,i,i,new B.p(A.aT,i,i,B.m(3),i,i,A.n),i,4,i,i,i,i,i,42)
t=x.p
s=B.a([j.aT9(A.zs,46),A.bd,D.bIz],t)
if(j.r)s.push(D.erU)
s.push(B.aG(i,i,i,i,A.t5,i,i,i,new C.fhw(d),i,i,i,i,i,i))
s=B.A(s,A.m,i,A.e,A.i,0,i,i)
r=A.c.j(0.05)
q=B.m(18)
p=B.L(A.dl,A.r,1)
o=J.a7(h)
q=B.a([A.X,u,new B.D(D.bEy,s,i),B.q(i,B.A(B.a([j.b9X(0,A.z9,"Save",j.a.c.length),j.b9X(1,A.Pu,"Saved",o.gI(h))],t),A.m,i,A.e,A.i,0,i,i),A.f,i,i,new B.p(r,i,p,q,i,i,A.n),i,i,i,D.bDy,A.eA,i,i,i)],t)
if(j.x!=null){u=(j.y?A.c0:A.bx).j(0.12)
s=B.m(14)
r=B.L((j.y?A.c0:A.bx).j(0.4),A.r,1)
p=j.y
n=p?A.Pg:A.ee
n=B.X(n,p?A.c0:A.bx,i,i,i,18)
m=j.x
m.toString
q.push(B.q(i,B.A(B.a([n,A.ae,B.E(B.d(m,i,i,i,i,i,i,A.Vp,i,i,i),1)],t),A.m,i,A.e,A.i,0,i,i),A.f,i,i,new B.p(u,i,r,s,i,i,A.n),i,i,i,D.bDu,A.iu,i,i,1/0))}u=B.a([],t)
if(j.w===0){s=j.d.a
s=B.a([B.E(B.d(s===0?"Tap the ones to save":""+s+" picked",i,i,i,i,i,i,D.fuZ,i,i,i),1)],t)
if(j.a.c.length!==0)s.push(B.aA(i,B.d(v?"Clear":"Pick all",i,i,i,i,i,i,D.fyb,i,i,i),A.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new C.fhx(j,v),i,i,i,i,i,i,!1,A.a4))
s=B.a([B.A(s,A.m,i,A.e,A.i,0,i,i),A.X],t)
if(j.a.c.length===0)s.push(j.auQ(A.qL,"No presentations yet","Make one first, then save it here."))
for(r=j.a.c,p=r.length,l=0;l<r.length;r.length===p||(0,B.J)(r),++l)s.push(j.co8(r[l]))
A.d.v(u,s)}else{s=B.a([],t)
if(j.f)s.push(D.erq)
else if(j.e==null)s.push(j.auQ(A.a2r,"Could not reach the database","Check the connection, then open this again."))
else if(o.gau(h))s.push(j.auQ(A.pp,"Nothing saved yet","Save some presentations and they will show up here."))
for(r=o.gae(h);r.C();)s.push(j.cvZ(r.gR(r)))
A.d.v(u,s)}q.push(new B.dp(1,A.cr,B.cl(u,i,i,A_.am6,i,i,A.ah,!0),i))
if(j.w===0){u=j.d
s=u.a===0
r=s||j.r?i:j.gc8x()
p=s?i:D.Q4
s=s?A.c.j(0.07):i
o=B.m(18)
n=u.a===0?i:B.a([new B.ac(0,A.G,A.b8.j(0.4),A.cA,18)],x.V)
u=u.a
m=u===0
k=B.X(A.z9,m?A.jX:A.c,i,i,i,21)
u=m?"Pick presentations to save":"Save "+u+" to the database"
q.push(new B.D(D.bEa,B.aA(i,B.cT(i,B.A(B.a([k,A.aah,new B.dp(1,A.cr,B.ev(A.A,B.d(u,i,i,i,i,i,i,B.l(i,i,m?A.jX:A.c,i,i,i,i,i,i,i,i,15,i,i,A.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),A.f,A.e2),i)],t),A.m,i,A.bb,A.i,0,i,i),i,i,A.b3,new B.p(s,i,i,o,n,p,A.n),A.h1,i,54,i,i,i,i,i,i),A.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,r,i,i,i,i,i,i,!1,A.a4),i))}else q.push(A.X)
return B.q(i,B.bm(!0,B.x(q,A.m,i,A.e,A.Q,0,A.p),!0,!1,A.ag,!0,!1),A.f,i,new B.aY(0,1/0,0,w.a.b*0.9),D.b7n,i,i,i,i,i,i,i,i)}}
C.oK.prototype={
aj(){return B.I(["id",this.a,"doc",this.b.aj(),"updatedAt",this.c.aa().ag()],x.N,x.z)}}
C.ZN.prototype={
S(){return new C.azo(B.a([],x.k),B.f3(null,x.H))},
ge3(){return this.c}}
C.azo.prototype={
Y(){this.a3()
this.PT()},
PT(){var w=0,v=B.j(x.H),u,t=this,s
var $async$PT=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(C.a34(t.a.c),$async$PT)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.cPB(t,s))
case 1:return B.h(u,v)}})
return B.i($async$PT,v)},
cCh(d){var w,v,u,t=this
d.c=new B.V(Date.now(),0,!1)
w=J.qD(t.d,new C.cPE(d))
v=w<0
if(v&&C.i1z(d))return t.f
u=t.d
if(v)J.pX(u,0,d)
else J.aK(u,w,d)
v=x.a
B.h68(new C.cPF(t),v)
return t.f=t.f.bG(new C.cPG(t,d),v).eM(new C.cPH())},
Jc(d,e,f){return this.chG(0,e,f)},
b09(d,e){return this.Jc(0,e,!1)},
chG(d,e,f){var w=0,v=B.j(x.H),u,t=this,s
var $async$Jc=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.a6(s,!1).cd(B.eb(new C.cPA(t,e),!1,null,x.H)),$async$Jc)
case 3:w=4
return B.b(t.f,$async$Jc)
case 4:w=5
return B.b(t.PT(),$async$Jc)
case 5:case 1:return B.h(u,v)}})
return B.i($async$Jc,v)},
b_p(d){var w=A.o.u(1000*Date.now()),v=d==null?D.dLJ:d
this.Jc(0,new C.oK(w,v,new B.V(Date.now(),0,!1)),!0)},
c7Y(){return this.b_p(null)},
aeA(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$aeA=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.bT(A.L,null,new C.cPI(),r,!1,!1,!0,null,!1,!1,x.g2),$async$aeA)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.b_p(s)
case 1:return B.h(u,v)}})
return B.i($async$aeA,v)},
Jb(d,e){return this.bOo(0,e)},
bOo(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$Jb=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return B.b(B.ce(null,null,!0,null,new C.cPv(e),s,null,!0,!0,x.y),$async$Jb)
case 3:if(g!==!0){w=1
break}t.m(new C.cPw(t,e))
w=4
return B.b(t.f,$async$Jb)
case 4:w=5
return B.b(C.aht(t.a.c,e.a),$async$Jb)
case 5:w=6
return B.b(t.PT(),$async$Jb)
case 6:case 1:return B.h(u,v)}})
return B.i($async$Jb,v)},
DN(d){return this.bGw(d)},
bGw(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$DN=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.bT(A.L,null,new C.cPr(d),r,!0,!0,!1,null,!1,!1,x.N),$async$DN)
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
return B.b(t.b09(0,d),$async$DN)
case 9:w=5
break
case 7:w=10
return B.b(F.hgy(r,d.b,null),$async$DN)
case 10:w=5
break
case 8:w=11
return B.b(t.Jb(0,d),$async$DN)
case 11:w=5
break
case 5:case 1:return B.h(u,v)}})
return B.i($async$DN,v)},
c1n(){var w,v,u,t,s=null,r=[D.dLM,D.dLK,D.dLL],q=new C.cPy(),p=B.m(26),o=x.V,n=B.a([new B.ac(0,A.G,A.cZ.j(0.4),A.f_,24)],o),m=x.p,l=B.a([],m)
for(w=0;w<3;++w){v=D.dv8[w]
u=A.c.j(0.18)
t=new B.aN(999,999)
l.push(B.q(s,B.d(v,s,s,s,s,s,s,A.oZ,s,s,s),A.f,s,s,new B.p(u,s,s,new B.be(t,t,t,t),s,s,A.n),s,s,s,s,A.op,s,s,s))}return B.q(s,B.A(B.a([B.E(B.x(B.a([D.fZ6,A.U,B.bU(A.bG,l,A.bs,s,6,6),A.aR,B.aA(s,B.q(s,D.f8w,A.f,s,s,new B.p(A.c,s,s,B.m(999),B.a([new B.ac(0,A.G,A.w.j(0.2),A.cM,10)],o),s,A.n),s,s,s,s,W.amu,s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.cPx(this),s,s,s,s,s,s,!1,A.a4)],m),A.E,s,A.e,A.i,0,A.p),1),new B.a5(130,110,new B.an(A.A,s,A.ad,A.t,B.a([q.$3(r[0],-0.22,-30),q.$3(r[2],0.22,30),q.$3(r[1],0,0)],m),s),s)],m),A.m,s,A.e,A.i,0,s,s),A.f,s,s,new B.p(s,s,s,p,n,D.c6p,A.n),s,s,s,s,D.bEI,s,s,s)},
bGu(d){var w,v=null,u=d.b.d.length,t=B.m(6),s=B.a([new B.ac(0,A.G,A.w.j(0.5),A.cA,14)],x.V),r=x.p
s=B.q(v,B.by(B.m(6),new B.an(A.a0,v,A.b2,A.t,B.a([B.ev(A.A,F.apw(d.b),A.f,A.c_),D.exV,B.ap(v,B.aA(v,B.q(v,D.bZP,A.f,v,v,D.b8k,v,26,v,v,v,v,v,26),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.cPm(this,d),v,v,v,v,v,v,!1,A.a4),v,v,v,4,4,v)],r),v),A.aq),A.f,v,v,new B.p(v,v,v,t,s,v,A.n),v,v,v,v,v,v,v,v)
t=A.a.i(d.b.a)
t=B.d(t.length===0?"Untitled Book":t,v,1,A.a2,v,v,v,D.foj,v,v,v)
w=u===1?"":"s"
return B.aA(v,B.x(B.a([new B.fF(0.6470588235294118,s,v),A.U,t,B.d(""+u+" page"+w,v,v,v,v,v,v,D.fva,v,v,v)],r),A.E,v,A.e,A.i,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,new C.cPn(this,d),v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.cPo(this,d),v,v,v,v,v,v,!1,A.a4)},
B(d){var w,v,u,t=this,s=null,r=x.p,q=B.eH(B.a([new B.D(O.al2,B.hb(B.aA(s,B.q(s,A.arV,A.f,s,s,new B.p(s,s,s,s,B.a([new B.ac(0,A.G,A.b8.j(0.5),A.I,12)],x.V),E.wR,A.a7),s,36,s,s,s,s,s,36),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.gc9m(),s,s,s,s,s,s,!1,A.a4),s,"Write with AI",s,s),s)],r),s,s,!0,!0,A.L,s,1,!0,s,0,!1,s,!1,E.ny,s,s,s,!0,s,s,s,s,s,D.fZa,s,s,s,1,s,!0)
if(t.e)r=D.bbN
else{w=t.c1n()
v=B.a([D.fKe,A.ae],r)
if(J.cI(t.d)){u=B.m(999)
v.push(B.q(s,B.d(""+J.ad(t.d),s,s,s,s,s,s,D.fnK,s,s,s),A.f,s,s,new B.p(D.bh1,s,s,u,s,s,A.n),s,s,s,s,A.yQ,s,s,s))}r=B.a([new B.of(A8.a0i,new B.mv(w,s),s),new B.of(D.bE4,new B.mv(B.A(v,A.m,s,A.e,A.i,0,s,s),s),s)],r)
if(J.cr(t.d))r.push(D.ffH)
else r.push(new B.of(D.bDw,B.PN(new B.oO(new C.cPJ(t),J.ad(t.d),!0,!0,!0,0,B.tp(),s),D.bb1),s))
r=B.w2(0,s,A.t,s,A.y,s,s,s,s,s,!1,s,A.ah,!1,r)}return B.c4(q,D.bfD,r,s,!1,!1,s,s)}}
C.ZL.prototype={
S(){return new C.azk(B.a([],x.bx))},
UQ(d){return this.d.$1(d)}}
C.aGH.prototype={}
C.azk.prototype={
b3j(d,e,f){var w=$.aw(),v=new B.au(new B.ba(d,A.b6,A.aQ),w),u=this.gb08()
v.aW(0,u)
w=new B.au(new B.ba(e,A.b6,A.aQ),w)
w.aW(0,u)
return new C.aGH(v,w,f)},
EB(){var w,v=this
v.y=!0
w=v.x
if(w!=null)w.a1(0)
v.x=B.cy(A.qv,new C.cOQ(v))},
Y(){var w,v,u,t,s,r,q,p,o,n,m=this
m.a3()
w=m.a.c.b
v=$.aw()
u=new B.au(new B.ba(w.a,A.b6,A.aQ),v)
t=m.gb08()
u.aW(0,t)
m.d!==$&&B.aQ()
m.d=u
u=new B.au(new B.ba(w.b,A.b6,A.aQ),v)
u.aW(0,t)
m.e!==$&&B.aQ()
m.e=u
u=new B.au(new B.ba(w.c,A.b6,A.aQ),v)
u.aW(0,t)
m.f!==$&&B.aQ()
m.f=u
m.r=w.e
for(u=w.d,s=u.length,r=m.w,q=0;q<u.length;u.length===s||(0,B.J)(u),++q){p=u[q]
o=new B.au(new B.ba(p.a,A.b6,A.aQ),v)
o.aW(0,t)
n=new B.au(new B.ba(p.b,A.b6,A.aQ),v)
n.aW(0,t)
r.push(new C.aGH(o,n,p.c))}if(r.length===0)r.push(m.b3j("Page 1","",""))},
t(){var w,v,u,t,s,r=this,q=r.x
if(q!=null)q.a1(0)
if(r.y){r.a.c.b=r.gpx()
q=r.a
q.UQ(q.c)}q=r.d
q===$&&B.c()
w=q.T$=$.aw()
q.P$=0
q=r.e
q===$&&B.c()
q.T$=w
q.P$=0
q=r.f
q===$&&B.c()
q.T$=w
q.P$=0
for(q=r.w,v=q.length,u=0;u<v;++u){t=q[u]
s=t.a
s.T$=w
s.P$=0
s=t.b
s.T$=w
s.P$=0}r.a4()},
gpx(){var w,v,u,t,s,r,q,p,o=this,n=o.d
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
t.push(new F.mP(A.a.i(p.a.a.a),p.b.a.a,p.c,""))}return new F.rL(n,w,v,t,u)},
Bl(){var w=0,v=B.j(x.H),u=this,t
var $async$Bl=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.x
if(t!=null)t.a1(0)
u.y=!1
u.a.c.b=u.gpx()
t=u.a
w=2
return B.b(t.UQ(t.c),$async$Bl)
case 2:return B.h(null,v)}})
return B.i($async$Bl,v)},
c9k(){this.m(new C.cOP(this))
this.EB()},
b_4(d,e){var w=this,v=d+e
if(v<0||v>=w.w.length)return
w.m(new C.cOS(w,d,v))
w.EB()},
c9l(d,e){var w=A.d.cB(this.w,e)
this.m(new C.cP_())
this.EB()
$.aW.x1$.push(new C.cP0(w))},
Rd(d){return this.cnZ(d)},
cnZ(d){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Rd=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hU().l8(80,1400,A.eO),$async$Rd)
case 7:q=f
if(q==null){w=1
break}w=8
return B.b(q.fp(),$async$Rd)
case 8:p=f
o=q.b.toLowerCase()
n=J.aj1(o,".png")?"image/png":"image/jpeg"
r.m(new C.cOT(d,n,p))
r.EB()
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
return B.i($async$Rd,v)},
yp(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$yp=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(F.hEl(r,t.gpx()),$async$yp)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.cOR(t,s))
t.EB()
case 1:return B.h(u,v)}})
return B.i($async$yp,v)},
cog(d){var w,v=this,u=null,t=F.fNc(d.c)
if(t==null)return new B.bL(A.a6,u,u,B.ho(D.bSY,D.fMN,new C.cOV(v,d),u),u)
w=x.p
return new B.D(A.cx,new B.an(A.a0,u,A.ad,A.t,B.a([B.by(B.m(12),B.fR(t,A.A,u,u,A.cj,A.c_,!0,140,!1,u,1/0),A.aq),B.ap(u,B.A(B.a([v.b6r(A.jJ,new C.cOW(v,d)),A.bm,v.b6r(A.cz,new C.cOX(v,d))],w),A.m,u,A.e,A.i,0,u,u),u,u,u,6,6,u)],w),u),u)},
b6r(d,e){var w=null
return B.aJ(!1,A.a3,!0,w,B.aP(!1,w,!0,new B.D(A.hH,B.X(d,A.c,w,w,w,18),w),A.cR,!0,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,w),A.f,A.aU,0,w,w,A.cR,w,w,A.aj)},
JP(){var w=0,v=B.j(x.H),u,t=this,s
var $async$JP=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.Bl(),$async$JP)
case 3:s=t.c
if(s==null){w=1
break}w=4
return B.b(F.hgy(s,t.gpx(),new C.cOZ(t)),$async$JP)
case 4:case 1:return B.h(u,v)}})
return B.i($async$JP,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=x.p,j=B.eH(B.a([new B.D(A.qw,B.ho(D.bXI,D.fT1,m.gaAD(),B.fu(l,l,l,l,l,l,l,l,l,l,l,A.bN,l,l,l,l,l,l,l,l,l,l,l,l,l,l)),l),B.aG(l,l,l,l,A.arU,l,l,l,new C.cP1(m,d),l,l,l,l,"Save",l)],k),l,l,!0,!0,E.YV,l,1,l,l,l,!1,l,!1,E.ny,l,l,l,!0,l,l,l,l,l,D.fNF,l,l,l,1,l,!0),i=Az.aWx(N.lF,A.c,Ag.XG,A.oE,D.fOp,m.gc9j()),h=B.m(18),g=m.gayA(),f=B.a([new B.ac(0,A.G,A.w.j(0.4),A.j7,12)],x.V)
f=B.aA(l,B.q(l,new B.a5(92,142.1818181818182,B.ev(A.A,F.apw(m.gpx()),A.f,A.dB),l),A.f,l,l,new B.p(l,l,l,l,f,l,A.n),l,l,l,l,l,l,l,l),A.y,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,g,l,l,l,l,l,l,!1,A.a4)
w=m.r
w===$&&B.c()
h=B.q(l,B.A(B.a([f,A.ex,B.E(B.x(B.a([D.h_L,A.ax,B.d(F.heZ(w.a).b+" template \xb7 pick from 10, change colours, add your picture.",l,l,l,l,l,l,D.fB1,l,l,l),A.X,B.dh(E.arc,E.aX1,g,B.bp(A.cZ,l,l,l,l,l,l,l,l,l,l,l))],k),A.E,l,A.e,A.i,0,A.p),1)],k),A.m,l,A.e,A.i,0,l,l),A.f,l,l,new B.p(E.YV,l,l,h,l,l,A.n),l,l,l,l,A.bh,l,l,l)
g=m.d
g===$&&B.c()
g=B.aM(l,A.Z,!1,l,!0,A.t,l,B.aO(),g,l,l,l,l,l,2,B.bt(l,new B.b6(4,B.m(12),A.dq),l,l,l,l,l,l,!0,l,l,l,l,l,l,A.c,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,"Book title",!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ak,l,l,l,l,l,l,l,l,l,1,l,l,!1,"\u2022",l,l,l,l,l,!1,l,l,!1,l,!0,l,A.ac,l,l,l,l,l,l,l,l,l,l,l,A.oX,!0,A.a5,l,A.ao,l,l,l,l)
w=m.e
w===$&&B.c()
w=B.aM(l,A.Z,!1,l,!0,A.t,l,B.aO(),w,l,l,l,l,l,2,B.bt(l,new B.b6(4,B.m(12),A.dq),l,l,l,l,l,l,!0,l,l,l,l,l,l,A.c,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,"Subtitle (optional)",!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ak,l,l,l,l,l,l,l,l,l,1,l,l,!1,"\u2022",l,l,l,l,l,!1,l,l,!1,l,!0,l,A.ac,l,l,l,l,l,l,l,l,l,l,l,l,!0,A.a5,l,A.ao,l,l,l,l)
f=m.f
f===$&&B.c()
f=B.a([h,A.aB,g,A.U,w,A.U,B.aM(l,A.Z,!1,l,!0,A.t,l,B.aO(),f,l,l,l,l,l,2,B.bt(l,new B.b6(4,B.m(12),A.dq),l,l,l,l,l,l,!0,l,l,l,l,l,l,A.c,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,"Author (optional)",!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ak,l,l,l,l,l,l,l,l,l,1,l,l,!1,"\u2022",l,l,l,l,l,!1,l,l,!1,l,!0,l,A.ac,l,l,l,l,l,l,l,l,l,l,l,l,!0,A.a5,l,A.ao,l,l,l,l),A.aR],k)
for(h=m.w,v=0;v<h.length;v=t){g=h[v]
w=new B.aN(16,16)
u=new B.ay(N.lF.j(0.18),1,A.r,-1)
t=v+1
s=B.d("Page "+t,l,l,l,l,l,l,D.fBz,l,l,l)
r=B.aG(l,l,l,l,D.bWl,l,l,l,v===0?l:new C.cP2(m,v),l,l,l,l,"Move up",A.cf)
q=h.length
p=B.aG(l,l,l,l,D.c1Q,l,l,l,v===q-1?l:new C.cP3(m,v),l,l,l,l,"Move down",A.cf)
q=q===1?l:new C.cP4(m,v)
o=new B.aN(12,12)
n=new B.aN(12,12)
f.push(B.q(l,B.x(B.a([new B.c7(A.aL,A.e,A.i,A.m,l,A.p,l,0,B.a([s,A.b5,r,p,B.aG(l,l,l,l,B.X(A.eh,A.pf,l,l,l,18),l,l,l,q,l,l,l,l,"Remove page",A.cf)],k),l),B.aM(l,A.Z,!1,l,!0,A.t,l,B.aO(),h[v].a,l,l,l,l,l,2,new B.e5(l,l,l,"Title",l,l,l,l,l,l,l,l,l,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,A.c,l,l,l,l,l,l,l,new B.b6(4,new B.be(o,o,o,o),A.dq),!0,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ak,l,l,l,l,l,l,l,l,l,1,l,l,!1,"\u2022",l,l,l,l,l,!1,l,l,!1,l,!0,l,A.ac,l,l,l,l,l,l,l,l,l,l,l,A.cg,!0,A.a5,l,A.ao,l,l,l,l),A.an,m.cog(h[v]),B.aM(l,A.Z,!1,l,!0,A.t,l,B.aO(),h[v].b,l,l,l,l,l,2,new B.e5(l,l,l,"Write here\u2026 long pages flow onto the next paper page",l,l,l,l,l,l,l,l,l,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,A.c,l,l,l,l,l,l,l,new B.b6(4,new B.be(n,n,n,n),A.dq),!0,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ak,l,l,l,l,l,l,l,l,l,l,5,l,!1,"\u2022",l,l,l,l,l,!1,l,l,!1,l,!0,l,A.ac,l,l,l,l,l,l,l,l,l,l,l,l,!0,A.a5,l,A.ao,l,l,l,l)],k),A.m,l,A.e,A.i,0,A.p),A.f,l,l,new B.p(E.ny,l,new B.bF(u,u,u,u),new B.be(w,w,w,w),l,l,A.n),l,l,new C.a9s(g),A.el,D.bC4,l,l,l))}return B.oL(!0,B.c4(j,E.aj0,B.cl(f,l,l,D.bCy,l,l,A.ah,!1),l,!1,!1,i,l),new C.cP5(m),x.C)}}
C.azm.prototype={
B(d){var w,v,u=this,t=null,s=u.r,r=s?A.c0:E.ny,q=B.m(16),p=B.m(16),o=s?A.ay.j(0.08):A.c.j(0.04)
s=s?A.ay.j(0.16):A.cZ.j(0.22)
w=B.m(12)
v=x.p
return new B.D(A.eM,B.aJ(!1,A.a3,!0,t,B.aP(!1,q,!0,B.q(t,B.A(B.a([B.q(t,B.X(u.c,r,t,t,t,20),A.f,t,t,new B.p(s,t,t,w,t,t,A.n),t,40,t,t,t,t,t,40),A.bd,B.E(B.x(B.a([B.d(u.d,t,t,t,t,t,t,B.l(t,t,r,t,t,t,t,t,t,t,t,15,t,t,A.H,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),A.bH,B.d(u.e,t,t,t,t,t,t,D.aVy,t,t,t)],v),A.E,t,A.e,A.i,0,A.p),1),B.X(A.eJ,r.j(0.6),t,t,t,t)],v),A.m,t,A.e,A.i,0,t,t),A.f,t,t,new B.p(o,t,t,p,t,t,A.n),t,t,t,t,A.bh,t,t,t),t,!0,t,t,t,t,t,t,t,t,t,t,t,u.f,t,t,t,t,t,t,t),A.f,A.L,0,t,t,t,t,t,A.aj),t)}}
C.arP.prototype={
S(){return new C.aFv()}}
C.aFv.prototype={
Y(){this.a3()
this.a_A()},
bz(d){this.bJ(d)
if(d.c!=this.a.c)this.a1Z()},
a1Z(){var w=0,v=B.j(x.H),u=this,t
var $async$a1Z=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.d
t=t==null?null:t.t()
w=2
return B.b(x.bq.b(t)?t:B.dQ(t,x.H),$async$a1Z)
case 2:u.d=null
if(u.c!=null)u.m(new C.el6(u))
w=3
return B.b(u.a_A(),$async$a1Z)
case 3:return B.h(null,v)}})
return B.i($async$a1Z,v)},
a_A(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$a_A=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:o=r.a.c
n=A.a.i(o==null?"":o)
if(J.ad(n)===0){w=1
break}t=4
if(J.d3(n,"http://")||J.d3(n,"https://")||J.d3(n,"data:")){o=B.Zq(B.cF(n,0,null),new B.Q9(!0))
r.d=o}else{o=B.fl("unsupported video ref")
throw B.W(o)}w=7
return B.b(o.iV(0).dh(0,A.qs),$async$a_A)
case 7:if(r.c==null){w=1
break}r.d.tY(!1)
r.m(new C.el4(r))
t=2
w=6
break
case 4:t=3
m=s.pop()
q=B.ab(m)
$.am.$1("[kiapo video] "+B.w(q))
if(r.c!=null)r.m(new C.el5(r))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a_A,v)},
t(){var w=this.d
if(w!=null)w.t()
this.a4()},
cco(){var w=this,v=w.d
if(v==null||!w.e)return
if(v.a.f){v.hg(0)
w.m(new C.el7(w))}else{v.qp(0)
w.m(new C.el8(w))}},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.a,m=n.c
if(A.a.i(m==null?"":m).length===0){if(!n.e)return A.bM
n=B.m(8*n.d)
m=B.a([D.jz.j(0.92),D.Mj.j(0.95)],x.O)
w=B.L(A.c4.j(0.55),A.r,1)
v=p.a
u=v.d
t=B.X(A.qO,A.c4,o,o,o,28*u)
v=v.f?"Tap to add president video":"Video ya kiapo"
return B.c3(B.at(B.x(B.a([t,new B.a5(o,6*u,o,o),B.d(v,o,o,o,o,o,o,B.l(o,o,A.c.j(0.85),o,o,o,o,o,o,o,o,11*p.a.d,o,o,A.V,o,o,!0,o,o,o,o,o,o,o,o),A.K,o,o)],x.p),A.m,o,A.e,A.Q,0,A.p),o,o,o),new B.p(o,o,w,n,o,new B.a9(A.aA,A.aF,A.x,m,o,o),A.n),A.bj)}if(p.f)return B.at(B.X(A.aqr,A.aD,o,o,o,28*n.d),o,o,o)
if(!p.e||p.d==null)return D.bcF
s=p.d
m=s.a.as
r=m.a
r=r>0?r:16
q=m.b
q=q>0?q:9
n=B.m(6*n.d)
m=B.a([B.ev(A.A,new B.a5(r,q,new B.AL(s,o),o),A.t,A.c_)],x.p)
if(!p.r){w=8*p.a.d
v=A.w.j(0.45)
m.push(B.at(B.q(o,B.X(A.hw,A.c,o,o,o,28*p.a.d),A.f,o,o,new B.p(v,o,o,o,o,o,A.a7),o,o,o,o,new B.R(w,w,w,w),o,o,o),o,o,o))}return B.aA(o,B.by(n,new B.an(A.a0,o,A.b2,A.t,m,o),A.aq),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gccn(),o,o,o,o,o,o,!1,A.a4)}}
C.y8.prototype={
a7(){return"NgmyHatiLayoutKind."+this.b}}
C.jC.prototype={}
C.aem.prototype={
B(d){return B.pe(new C.e7w(this,B.S(d).ax.a===A.J,d),!0,0.72,0.9,0.5,!1,null)}}
C.adL.prototype={
B(d){var w,v,u=null,t=B.S(d).ax.a===A.J,s=B.m(18),r=B.m(18),q=B.L(D.jz.j(t?0.35:0.4),A.r,1),p=t?D.MY:A.c,o=x.V,n=B.a([new B.ac(0,A.G,A.w.j(t?0.3:0.08),A.cA,14)],o),m=B.m(10),l=B.L(A.c4.j(0.5),A.r,1)
o=B.a([new B.ac(0,A.G,A.w.j(0.14),A.dG,6)],o)
w=this.c
o=B.E(B.q(u,new B.fF(0.5625,C.ikT(w),u),A.aq,u,u,new B.p(u,u,l,m,o,u,A.n),u,u,u,D.an_,u,u,u,u),1)
m=D.jz.j(t?0.18:0.16)
l=B.d(w.b,u,u,u,u,u,u,B.l(u,u,t?A.c:D.jz,u,u,u,u,u,u,u,u,12.5,u,u,A.u,u,u,!0,u,0.1,u,u,u,u,u,u),u,u,u)
v=x.p
return B.aJ(!1,A.a3,!0,u,B.aP(!1,s,!0,B.q(u,B.x(B.a([o,B.q(u,B.x(B.a([l,A.cU,B.d(w.c,u,2,A.a2,u,u,u,B.l(u,u,t?A.aD:D.boo,u,u,u,u,u,u,u,u,9.5,u,u,u,u,1.32,!0,u,u,u,u,u,u,u,u),u,u,u)],v),A.E,u,A.e,A.i,0,A.p),A.f,u,u,new B.p(u,u,new B.bF(new B.ay(m,1,A.r,-1),A.a1,A.a1,A.a1),u,u,u,A.n),u,u,u,u,D.alj,u,u,u)],v),A.al,u,A.e,A.i,0,A.p),A.f,u,u,new B.p(p,u,q,r,n,u,A.n),u,u,u,u,u,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,this.d,u,u,u,u,u,u,u),A.f,A.L,0,u,u,u,u,u,A.aj)}}
C.yb.prototype={
a7(){return"NgmyMarriageLayoutKind."+this.b}}
C.o5.prototype={}
C.blr.prototype={
a_J(d){var w=null
return new B.bL(A.a6,w,w,B.BV(A.A,B.q(w,w,A.f,w,w,new B.p(this.d.j(0.14),w,w,B.m(3),w,w,A.n),w,5,w,w,w,w,w,w),w,d),w)},
ccS(){return this.a_J(1)},
azg(d){var w=null,v=B.m(8),u=B.L(A.is,A.r,0.9)
return B.q(A.A,B.d(d,w,w,w,w,w,w,B.l(w,w,this.d,w,w,w,w,w,w,w,w,6.5,w,w,A.u,w,w,!0,w,0.3,w,w,w,w,w,w),w,w,w),A.f,w,w,new B.p(D.agB,w,u,v,w,w,A.n),w,13,w,w,w,w,w,w)},
B(d){var w=this,v=null,u=x.p,t=w.d
return B.x(B.a([B.A(B.a([B.q(v,v,A.f,v,v,new B.p(v,v,B.L(A.is,A.r,1.6),v,v,v,A.a7),v,22,v,v,v,v,v,22),B.dP(B.q(v,v,A.f,v,v,new B.p(v,v,B.L(A.is,A.r,1.6),v,v,v,A.a7),v,22,v,v,v,v,v,22),new B.o(-8.36,0))],u),A.m,v,A.bb,A.i,0,v,v),A.ax,B.d("HATI YA NDOA",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,12,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),A.K,v,v),B.d("Hati ya Makubaliano ya Ndoa",v,v,v,v,v,v,B.l(v,v,t.j(0.7),v,v,v,v,v,v,v,v,7,v,v,A.a8,v,v,!0,v,v,v,v,v,v,v,v),A.K,v,v),A.an,w.azg("TAARIFA ZA WANANDOA"),A.an,w.ccS(),A.cU,w.a_J(0.9),A.cU,w.a_J(0.7),A.U,w.azg("TAMKO LA MAKUBALIANO"),A.fM,w.a_J(1),A.cU,w.a_J(0.95),A.U,w.azg("MASHAHIDI"),A.b5,B.d("NGMY",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,8,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.d(w.c.b,v,v,v,v,v,v,B.l(v,v,w.e,v,v,v,v,v,v,v,v,7,v,v,A.V,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],u),A.m,v,A.e,A.i,0,A.p)}}
C.aep.prototype={
B(d){return B.pe(new C.epT(B.S(d).ax.a===A.J,d),!0,0.92,0.96,0.5,!1,null)}}
C.ag4.prototype={
B(d){var w,v,u,t,s,r=null,q=B.S(d).ax.a===A.J,p=B.m(18),o=B.m(18),n=B.L(A.aC.j(q?0.35:0.4),A.r,1),m=q?D.bnV:A.c,l=x.V,k=B.a([new B.ac(0,A.G,A.w.j(q?0.3:0.08),A.cA,14)],l),j=B.m(10),i=B.L(A.aC.j(0.5),A.r,1)
l=B.a([new B.ac(0,A.G,A.w.j(0.14),A.dG,6)],l)
w=this.c
v=C.hfu(w.a)
if(v==null)v=A.d.gH(D.SE)
u=B.b0(v.f)
t=B.b0(v.r)
s=x.p
l=B.E(B.q(r,new B.fF(0.5625,new B.an(A.a0,r,A.b2,A.t,B.a([B.bR(0,B.fR(C.hft(v.d),A.A,r,r,A.cj,A.c_,!0,r,!1,r,r),0,0,0),new B.D(A.alX,new C.blr(v,u,t,r),r)],s),r),r),A.aq,r,r,new B.p(r,r,i,j,l,r,A.n),r,r,r,D.an_,r,r,r,r),1)
j=A.aC.j(q?0.18:0.16)
i=B.d(w.b,r,r,r,r,r,r,B.l(r,r,q?A.c:A2.MZ,r,r,r,r,r,r,r,r,12.5,r,r,A.u,r,r,!0,r,0.1,r,r,r,r,r,r),r,r,r)
return B.aJ(!1,A.a3,!0,r,B.aP(!1,p,!0,B.q(r,B.x(B.a([l,B.q(r,B.x(B.a([i,A.cU,B.d(w.c,r,2,A.a2,r,r,r,B.l(r,r,q?A.aD:D.bgg,r,r,r,r,r,r,r,r,9.5,r,r,r,r,1.32,!0,r,r,r,r,r,r,r,r),r,r,r)],s),A.E,r,A.e,A.i,0,A.p),A.f,r,r,new B.p(r,r,new B.bF(new B.ay(j,1,A.r,-1),A.a1,A.a1,A.a1),r,r,r,A.n),r,r,r,r,D.alj,r,r,r)],s),A.al,r,A.e,A.i,0,A.p),A.f,r,r,new B.p(m,r,n,o,k,r,A.n),r,r,r,r,r,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,this.d,r,r,r,r,r,r,r),A.f,A.L,0,r,r,r,r,r,A.aj)}}
C.la.prototype={
a7(){return"NgmyMarriagePaperStyle."+this.b}}
C.a8V.prototype={}
C.WV.prototype={
S(){var w=$.aw()
return new C.aFM(new B.cw(null,x.A),new B.au(A.aw,w),new B.au(A.aw,w),B.mX(0,null,null),A.d.gH(D.a5x),D.dW8,B.a([],x.L),B.a([],x.gE))}}
C.aFM.prototype={
Y(){var w,v=this
v.a3()
v.w=v.a.c
v.z=new C.Ab(C.fR5(v.y),"NGMY NEWS","","","By the NGMY Newsroom","",A.Z,"","","")
w=x.a
C.fQ1().bG(new C.esQ(v),w)
$.rh().jo(0,"assets/images/ngmy_logo.png").bG(new C.esR(v),w).eM(new C.esS())},
t(){var w=this,v=w.e,u=$.aw()
v.T$=u
v.P$=0
v=w.f
v.T$=u
v.P$=0
w.r.t()
w.a4()},
afr(d){var w=null,v=this.c
if(v!=null)v.L(x.q).f.U(B.b3(w,w,w,w,w,A.t,w,B.d(d,w,w,w,w,w,w,w,w,w,w),w,A.a_,w,w,w,w,w,w,w,w,w,w))},
Ju(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k
var $async$Ju=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hU().l8(88,1600,A.eO),$async$Ju)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fp(),$async$Ju)
case 8:p=e
m=r.c
if(m==null){w=1
break}w=9
return B.b(C.hEC(m,p),$async$Ju)
case 9:o=e
if(o==null||r.c==null){w=1
break}m=r.c
m.toString
w=10
return B.b(F.bFJ(new B.q9(o,1),m),$async$Ju)
case 10:if(r.c!=null)r.m(new C.ess(r,o))
t=2
w=6
break
case 4:t=3
k=s.pop()
n=B.ab(k)
r.afr("Could not open that picture. "+B.w(n))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Ju,v)},
XH(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$XH=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.w
if(q==null||t.as){w=1
break}s=t.c
s.toString
w=3
return B.b(C.hEC(s,q),$async$XH)
case 3:r=e
if(r==null||t.c==null){w=1
break}s=t.c
s.toString
w=4
return B.b(F.bFJ(new B.q9(r,1),s),$async$XH)
case 4:if(t.c!=null)t.m(new C.eso(t,r))
case 1:return B.h(u,v)}})
return B.i($async$XH,v)},
afs(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$afs=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.as){w=1
break}q.m(new C.esz(q))
t=4
q.a.toString
p=C.ipV()
l=q.Q
k=q.e.a
o=l==="sw"?A.a.i(A.a.i(k.a)+" Write the whole newspaper in Swahili (Kiswahili)."):k.a
k=q.y
w=7
return B.b(p.$4$paper$photo$request$template(null,q.w,o,k),$async$afs)
case 7:n=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.esA(q,n))
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
m=B.ab(i)
q.afr(B.w(m))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.esB(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$afs,v)},
a_O(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h,g
var $async$a_O=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i=A.a.i(q.f.a.a)
h=!0
if(J.ad(i)!==0)if(!q.as){h=q.z
h=A.a.i(h.c).length===0&&h.r.length===0}if(h){w=1
break}q.m(new C.esu(q,i))
t=4
q.a.toString
p=C.ipU()
h=q.z
m=q.y
l=q.w
k=B.C(q.ax,x.fz)
w=7
return B.b(p.$5$doc$history$instruction$photo$template(h,k,i,l,m),$async$a_O)
case 7:o=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.esv(q,o))
r.push(6)
w=5
break
case 4:t=3
g=s.pop()
n=B.ab(g)
if(q.c!=null)q.m(new C.esw(q,n))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.esx(q))
$.aW.x1$.push(new C.esy(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a_O,v)},
cd7(d){this.m(new C.est(this,d))},
ES(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$ES=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(!q.as){k=q.z
k=A.a.i(k.c).length===0&&k.r.length===0}else k=!0
if(k){w=1
break}q.m(new C.esq(q))
t=4
w=7
return B.b($.aW.gmS(),$async$ES)
case 7:w=8
return B.b(B.bQ(A.mU,null,x.H),$async$ES)
case 8:k=$.aW.ap$.x.h(0,q.d)
p=k==null?null:k.gbg()
if(!(p instanceof B.qj))throw B.W("The page is not ready yet.")
w=9
return B.b(p.md(1800/p.gZ(0).a),$async$ES)
case 9:o=e
w=10
return B.b(o.hs(A.hg),$async$ES)
case 10:n=e
if(n==null)throw B.W("Could not make the picture.")
w=11
return B.b(A9.ahv(J.eT(A.dN.gaU(n)),"ngmy_news.png","image/png"),$async$ES)
case 11:m=e
q.afr(m?"Your newspaper picture is ready. Check your downloads.":"Downloading is not available here.")
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
l=B.ab(i)
q.afr(B.w(l))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.esr(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$ES,v)},
B(a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=a1.z,a4=!(A.a.i(a3.c).length===0&&a3.r.length===0)
a3=B.aG(a2,a2,a2,a2,A.lo,a2,a2,a2,new C.esH(a5),a2,a2,a2,a2,a2,a2)
w=x.p
v=B.a([],w)
if(a1.ay.length!==0)v.push(B.aG(a2,a2,a2,a2,D.bYd,a2,a2,a2,new C.esI(a1),a2,a2,a2,a2,"Undo the last change",a2))
v.push(B.aG(a2,a2,a2,a2,A.oD,a2,a2,a2,a4?a1.gb1r():a2,a2,a2,a2,a2,"Download",a2))
a3=B.eH(v,a2,a2,!0,!0,A.BZ,a2,1,!0,a2,0,!1,a2,!1,a2,a2,a3,a2,!0,a2,a2,a2,a2,a2,D.f8H,a2,a2,a2,1,a2,!0)
v=x.V
u=B.a([new B.ac(0,A.G,A.w.j(0.6),A.f_,24)],v)
t=a1.z
s=a1.y
r=a1.w
u=B.q(a2,new B.fF(0.7142857142857143,B.ev(A.A,new B.em(new C.b2Q(t,s,r,a1.x,a2),a1.d),A.f,A.dB),a2),A.f,a2,a2,new B.p(a2,a2,a2,a2,u,a2,A.n),a2,a2,a2,a2,a2,a2,a2,a2)
s=B.d("1  YOUR PICTURE",a2,a2,a2,a2,a2,a2,R.tD,a2,a2,a2)
t=a1.as?a2:a1.gcd6()
t=B.a([B.E(B.dh(D.bZ_,B.d(r==null?"Add a picture":"Change the picture",a2,a2,a2,a2,a2,a2,A.cg,a2,a2,a2),t,B.bp(D.u9,a2,a2,a2,A.c,A.h5,a2,a2,new B.b9(B.m(14),Q.vP),a2,a2,a2)),1)],w)
r=a1.w
if(r!=null){r=B.by(B.m(10),B.fR(r,A.A,a2,a2,A.cj,A.c_,!1,48,!1,a2,48),A.aq)
A.d.v(t,B.a([A.au,r,B.aG(a2,a2,a2,a2,D.bVD,a2,a2,a2,a1.as?a2:a1.gbN_(),a2,a2,a2,a2,"Crop the picture",a2)],w))}t=B.A(t,A.m,a2,A.e,A.i,0,a2,a2)
r=B.d("2  WHAT SHOULD IT BE ABOUT?  (optional)",a2,a2,a2,a2,a2,a2,R.tD,a2,a2,a2)
q=B.aM(a2,A.Z,!1,a2,!0,A.t,a2,B.aO(),a1.e,a2,a2,a2,a2,a2,2,a1.aV_("Leave it empty and the AI picks a story about NGMY"),A.y,!0,a2,!0,a2,!1,a2,A.ak,a2,a2,a2,a2,a2,a2,a2,a2,a2,3,1,a2,!1,"\u2022",a2,a2,a2,a2,a2,!1,a2,a2,!1,a2,!0,a2,A.ac,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,A.dg,!0,A.a5,a2,A.ao,a2,a2,a2,a2)
p=B.a([],w)
for(o=0;o<7;++o){n=D.dp0[o]
p.push(B.n2(a2,D.u9,B.d(n.a,a2,a2,a2,a2,a2,a2,A.pP,a2,a2,a2),A.hi,new C.esJ(a1,n),a2,a2,Q.vP,a2))}p=B.bU(A.bG,p,A.bs,a2,6,8)
m=a1.Q
m=B.bU(A.bG,B.a([D.fZj,A.bd,B.jv(a2,a2,a2,D.fIV,a2,new C.esK(a1),m==="en",a2,a2,a2,a2),A.ae,B.jv(a2,a2,a2,D.fIQ,a2,new C.esL(a1),m==="sw",a2,a2,a2,a2)],w),A.vJ,a2,0,8)
l=B.d("3  PICK A DESIGN",a2,a2,a2,a2,a2,a2,R.tD,a2,a2,a2)
k=B.a([],w)
for(j=x.dt,i=B.cW(D.a5x,0,B.dA(10,"count",x.S),j),h=i.$ti,i=new B.bP(i,i.gI(0),h.k("bP<ak.E>")),h=h.k("ak.E");i.C();){g=i.d
k.push(a1.aTs(g==null?h.a(g):g))}k=B.cl(k,a2,a2,a2,a2,a2,A.aL,!1)
i=B.a([],w)
for(j=B.cW(D.a5x,10,a2,j),h=j.$ti,j=new B.bP(j,j.gI(0),h.k("bP<ak.E>")),h=h.k("ak.E");j.C();){g=j.d
i.push(a1.aTs(g==null?h.a(g):g))}j=B.cl(i,a2,a2,a2,a2,a2,A.aL,!1)
i=a1.as?a2:a1.gcd9()
h=B.m(18)
v=B.a([new B.ac(0,A.G,A.bD.j(0.4),A.I,18)],v)
v=B.a([u,A.aB,new B.D(A.cx,s,a2),t,A.aB,new B.D(A.cx,r,a2),q,A.U,p,A.X,m,A.aB,new B.D(A.cx,l,a2),new B.a5(a2,78,k,a2),A.U,new B.a5(a2,78,j,a2),A.aR,B.aA(a2,B.q(A.A,B.A(B.a([D.bYU,A.ae,B.d(a4?"Write it again":"Write my newspaper",a2,a2,a2,a2,a2,a2,A.fC,a2,a2,a2)],w),A.m,a2,A.e,A.Q,0,a2,a2),A.f,a2,a2,new B.p(a2,a2,a2,h,v,G.uY,A.n),a2,54,a2,a2,a2,a2,a2,a2),A.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,i,a2,a2,a2,a2,a2,a2,!1,A.a4)],w)
if(a4){u=B.a([A.dY,B.A(B.a([D.dGq,A.au,D.bIV],w),A.m,a2,A.e,A.i,0,a2,a2),A.U],w)
for(t=a1.ax,s=t.length,o=0;o<t.length;t.length===s||(0,B.J)(t),++o){f=t[o]
e=f.a==="you"
r=e?A.aa:A.a6
q=e?A.b8.j(0.35):D.u9
p=new B.aN(16,16)
d=new B.ay(A.bA,1,A.r,-1)
u.push(new B.bL(r,a2,a2,B.q(a2,B.d(f.b,a2,a2,a2,a2,a2,a2,D.fyX,a2,a2,a2),A.f,a2,Aa.Xu,new B.p(q,a2,new B.bF(d,d,d,d),new B.be(p,p,p,p),a2,a2,A.n),a2,a2,a2,A.cx,A.iu,a2,a2,a2),a2))}u.push(A.an)
t=B.a([],w)
for(o=0;o<4;++o){a0=D.dad[o]
t.push(B.n2(a2,D.u9,B.d(a0,a2,a2,a2,a2,a2,a2,A.KA,a2,a2,a2),A.hi,new C.esM(a1,a0),a2,a2,Q.vP,a2))}u.push(B.bU(A.bG,t,A.bs,a2,6,8))
u.push(A.X)
t=B.E(B.aM(a2,A.Z,!1,a2,!0,A.t,a2,B.aO(),a1.f,a2,a2,a2,a2,a2,2,a1.aV_("Ask for a change, or ask a question\u2026"),A.y,!0,a2,!0,a2,!1,a2,A.ak,a2,a2,a2,a2,a2,a2,a2,a2,a2,4,1,a2,!1,"\u2022",a2,a2,a2,new C.esN(a1),a2,!1,a2,a2,!1,a2,!0,a2,A.ac,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,A.dg,!0,A.a5,a2,A.ao,a2,a2,a2,a2),1)
s=a1.as?a2:a1.gcd8()
u.push(B.A(B.a([t,A.ae,B.ID(A.zw,s,B.o_(a2,A.b8,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2)],w),A.m,a2,A.e,A.i,0,a2,a2))
u.push(A.aB)
t=a1.as?a2:a1.gb1r()
u.push(B.dh(A.oD,D.fUJ,t,B.bp(A.cX,a2,a2,a2,a2,A.Kj,a2,a2,new B.b9(B.m(16),A.a1),a2,a2,a2)))
A.d.v(v,u)}v=B.a([B.cl(v,a1.r,a2,A.alI,a2,a2,A.ah,!1)],w)
if(a1.as){u=A.w.j(0.55)
t=B.m(20)
s=B.L(E.ko.j(0.5),A.r,1)
v.push(B.bR(0,B.e8(B.at(B.q(a2,B.A(B.a([E.aai,A.ex,B.d(a1.at,a2,a2,a2,a2,a2,a2,A.jv,a2,a2,a2)],w),A.m,a2,A.e,A.Q,0,a2,a2),A.f,a2,a2,new B.p(E.BP,a2,s,t,a2,a2,A.n),a2,a2,a2,a2,D.bF_,a2,a2,a2),a2,a2,a2),u,!0),0,0,0))}return B.c4(a3,A.BZ,new B.an(A.a0,a2,A.ad,A.t,v,a2),a2,!1,!1,a2,a2)},
aV_(d){var w=null
return B.bt(w,new B.b6(4,B.m(14),A.a1),w,A.eY,w,w,w,w,!0,w,w,w,w,w,w,D.u9,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,Y.EB,d,w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
aTs(d){var w,v,u,t=null,s=d.a===this.y.a,r=B.m(12),q=B.b0(d.f),p=s?A.bD:A.bA
p=B.L(p,A.r,s?2.4:1)
w=B.a([B.q(t,t,A.f,B.b0(d.x),t,t,t,5,t,A.kt,t,t,t,t),A.fM],x.p)
for(v=d.w,u=0;u<4;++u)w.push(B.q(t,t,A.f,B.b0(v).j(0.5),t,t,t,2,t,D.bB3,t,t,t,t))
w.push(A.cU)
w.push(new B.D(A.jo,B.d(d.b,t,1,A.a2,t,t,t,B.l(t,t,B.b0(v),t,t,t,t,t,t,t,t,9,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t))
return B.aA(t,B.q(t,B.x(w,A.m,t,A.bb,A.i,0,A.p),A.f,t,t,new B.p(q,t,p,r,t,t,A.n),t,t,t,A.iK,t,t,t,72),A.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.esp(this,d),t,t,t,t,t,t,!1,A.a4)}}
C.Ab.prototype={
bf1(d,e,f,g,h,i,j,k,l,m){var w=this,v=g==null?w.b:g,u=i==null?w.a:i,t=h==null?w.c:h,s=m==null?w.d:m,r=e==null?w.e:e,q=f==null?w.f:f,p=d==null?w.r:d,o=j==null?w.w:j,n=l==null?w.x:l
return new C.Ab(u,v,t,s,r,q,p,o,n,k==null?w.y:k)},
cNZ(d){var w=null
return this.bf1(w,w,w,w,w,d,w,w,w,w)},
aj(){var w=this
return B.I(["paper",w.a,"headline",w.c,"subhead",w.d,"byline",w.e,"caption",w.f,"body",w.r,"pullQuote",w.w,"sidebarTitle",w.x,"sidebarText",w.y,"category",w.b],x.N,x.z)},
aEH(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j="headline",i="category",h=new C.ciU(d),g=d.h(0,"body")
if(x.j.b(g)){w=B.a([],x.s)
for(v=J.aU(g);v.C();){u=v.gR(v)
if(A.a.i(B.w(u)).length!==0)w.push(A.a.i(B.w(u)))}t=w}else if(typeof g=="string"&&A.a.i(g).length!==0){w=A.a.fw(g,B.ag("\\n\\s*\\n",!0,!1,!1,!1))
w=new B.N(w,new C.ciS(),B.U(w).k("N<1,n>")).bY(0,new C.ciT())
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
return this.bf1(p,r,q,J.ad(l==null?"":l)===0?k:h.$1(i).toUpperCase(),v,w,o,m,n,s)},
gG4(d){return this.f}}
C.tN.prototype={
a7(){return"NewsLayout."+this.b}}
C.C9.prototype={
a7(){return"NewsFrame."+this.b}}
C.lx.prototype={}
C.b2Q.prototype={
rV(d,e,f,g,h,i,j){var w=null
return B.l(w,w,f==null?B.b0(this.d.w):f,w,w,w,w,w,d,w,w,e,i,w,j,w,g,!0,w,h,w,w,w,w,w,w)},
b1t(d,e,f,g){return this.rV(d,e,null,1.25,f,A.bt,g)},
Qw(d,e,f,g,h){return this.rV(d,e,f,1.25,g,A.bt,h)},
azm(d,e,f,g,h){return this.rV(d,e,null,f,g,A.bt,h)},
azl(d,e,f,g,h){return this.rV(d,e,f,g,0,A.bt,h)},
b1v(d,e,f,g,h){return this.rV(d,e,null,f,0,g,h)},
cdd(d,e,f,g,h,i){return this.rV(d,e,f,g,0,h,i)},
azk(d,e,f,g){return this.rV(d,e,null,f,0,A.bt,g)},
afv(d,e,f){return this.rV(d,e,null,f,0,A.bt,A.cT)},
b1u(d,e,f,g,h){return this.rV(d,e,f,g,0,h,A.cT)},
cdc(d,e,f,g){return this.rV(d,e,null,f,0,g,A.cT)},
cdb(d,e,f,g){return this.rV(d,e,f,g,0,A.bt,A.cT)},
afw(d,e,f,g,h,i){return this.rV(d,e,f,g,h,A.bt,i)},
b1s(d,e,f,g,h,i,j,k,l){var w,v,u=null
for(w=i;w>j;){v=new B.iH(new B.en(d,u,u,A.cJ,u,u,u,u,u,u,new B.H(!0,u,u,e,u,u,w,f,l,u,u,u,k,u,u,u,u,u,u,u,u,u,u,u,u,u)),A.a5,A.bX,new B.jg(1),u,u,h,u,A.bY,u,A.cs)
v.o5(g)
if(!v.b.a.c.gaGt())return w
w-=2}return j},
aft(d,e,f,g,h,i,j,k){return this.b1s(d,e,f,g,h,i,j,k,A.bt)},
aBy(d,e,f){var w=null,v=d==null?B.b0(this.d.w):d,u=x.p,t=B.a([B.q(w,w,A.f,v,w,w,w,f,w,w,w,w,w,w)],u)
if(e)A.d.v(t,B.a([new B.a5(w,3,w,w),B.q(w,w,A.f,v,w,w,w,0.8,w,w,w,w,w,w)],u))
return B.x(t,A.m,w,A.e,A.i,0,A.p)},
aBx(d){return this.aBy(null,!1,d)},
ait(d,e){return this.aBy(null,d,e)},
cv5(d,e){return this.aBy(d,!1,e)},
gb3G(){var w=A.a.i(this.c.a)
return w.length===0?"The NGMY Times":w},
gaXH(){var w=A.a.i(this.c.c)
if(w.length===0)w="Your headline appears here"
return this.d.CW?w.toUpperCase():w},
Pe(d,e,f,g,h,i){var w=this,v=null,u=w.d.Q,t=w.aft(w.gaXH(),u,A.V,d,g,h,i,1.02)
return B.d(w.gaXH(),v,g,A.a2,v,v,v,w.azl(u,t,f,1.02,A.V),e,v,v)},
aXM(d){return this.Pe(d,A.K,null,2,78,30)},
acJ(d,e,f,g,h){return this.Pe(d,e,null,f,g,h)},
c1g(d,e,f,g,h){return this.Pe(d,A.K,e,f,g,h)},
c1f(d,e,f){return this.Pe(d,A.K,null,e,f,30)},
Sw(d,e,f,g,h){var w,v=this,u=null,t=v.c.d,s=A.a.i(t)
if(s.length===0)return A.bM
w=v.d.as
return new B.D(A.jE,B.d(s,u,g,A.a2,u,u,u,v.b1u(w,v.b1s(t,w,A.cT,d,g,h,15,1.2,A.cH),f,1.2,A.cH),e,u,u),u)},
b9B(d){return this.Sw(d,A.K,null,3,24)},
aD1(d,e,f,g){return this.Sw(d,e,null,f,g)},
cCL(d,e,f){return this.Sw(d,A.K,e,3,f)},
b9C(d,e){return this.Sw(d,e,null,3,24)},
cCJ(d,e){return this.Sw(d,A.K,null,3,e)},
cCK(d,e,f){return this.Sw(d,e,null,3,f)},
asT(d,e){var w=this,v=null,u=A.a.i(w.c.e),t=new B.D(A.f3,B.d(u.toUpperCase(),v,v,v,v,v,v,w.Qw("Roboto",12,d==null?B.b0(w.d.x):d,1.4,A.H),v,v,v),v)
if(!e)return t
u=w.d.w
return B.A(B.a([B.E(B.q(v,v,A.f,B.b0(u),v,v,v,1.2,v,v,v,v,v,v),1),t,B.E(B.q(v,v,A.f,B.b0(u),v,v,v,1.2,v,v,v,v,v,v),1)],x.p),A.m,v,A.e,A.i,0,v,v)},
O9(){return this.asT(null,!0)},
asS(d){return this.asT(null,d)},
bIX(d,e){var w=null,v=A.a.i(this.c.f)
if(v.length===0)return A.bM
return new B.D(A.hU,new B.a5(d,w,B.d(v,w,2,A.a2,w,w,w,this.cdc(this.d.as,13.5,1.2,A.cH),e,w,w),w),w)},
w6(d,a0){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Roboto",j=new B.V(Date.now(),0,!1),i=m.gb3G(),h=A.o.aq(j.bD(B.c1(B.bC(j),1,1,0,0,0,0,0)).a,864e8),g="VOL. "+C.icD(Math.max(1,B.bC(j)-2021))+"  \xb7  NO. "+(h+1+3000),f=m.b1t(k,12,1.2,A.V),e=a0?0.62:1
h=m.d
w=h.y
v=h.z
if(w==="blackletter")u=m.aft(i,v,A.V,d,1,96*e,36,1)
else{t=w==="bar"?76:72
u=m.aft(i.toUpperCase(),v,A.V,d,1,t*e,30,1)}switch(w){case"bar":w=a0?6:10
t=B.b0(h.x)
h=h.ch?B.b0(h.f):A.c
s=x.p
return B.x(B.a([B.q(l,B.A(B.a([B.E(B.d(i.toUpperCase(),l,1,A.eP,l,l,l,m.afw(v,u*0.84,h,1,1,A.V),l,l,l),1)],s),A.m,l,A.e,A.i,0,l,l),A.f,t,l,l,l,l,l,l,new B.R(18,w,18,w),l,l,l),A.U,B.A(B.a([B.d(C.bEZ(j).toUpperCase(),l,l,l,l,l,l,f,l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("FREE \xb7 NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],s),A.m,l,A.iR,A.i,0,l,l),A.an,m.ait(!0,3)],s),A.m,l,A.e,A.i,0,A.p)
case"split":h=h.x
w=x.p
return B.x(B.a([B.A(B.a([B.q(l,l,A.f,B.b0(h),l,l,l,u*0.8,l,l,l,l,l,14),A.ex,B.E(B.d(i,l,1,A.eP,l,l,l,m.azk(v,u*0.9,1,A.V),l,l,l),1)],w),A.m,l,A.e,A.i,0,l,l),A.X,B.A(B.a([B.d(C.bEZ(j),l,l,l,l,l,l,m.Qw(k,13,B.b0(h),0.6,A.V),l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l)],w),A.m,l,A.iR,A.i,0,l,l),A.U,m.cv5(B.b0(h),3)],w),A.m,l,A.e,A.i,0,A.p)
case"logo":r=a0?52:64
w=m.gb3G()
v=B.d("NGMY",l,l,l,l,l,l,m.azm(k,r,1,-1.5,A.u),l,l,l)
t=r*0.2
s=r*0.04
q=B.b0(h.x)
p=B.m(r*0.16)
o=h.ch&&h.a==="midnight"||h.a==="gold"?A.w:A.c
h=h.w
n=x.p
return B.x(B.a([B.A(B.a([v,A.ae,B.eM(A.A,-0.03,B.q(l,B.d("NEWS",l,l,l,l,l,l,m.rV(k,r*0.72,o,1.05,-0.5,A.cH,A.u),l,l,l),A.f,l,l,new B.p(q,l,l,p,l,l,A.n),l,l,l,l,new B.R(t,s,t,s),l,l,l),l),A.b5,new B.dp(1,A.cr,B.d(w.toUpperCase(),l,2,A.a2,l,l,l,m.afw(k,12.5,B.b0(h).j(0.85),1.3,1.2,A.V),A.e_,l,l),l)],n),A.m,l,A.e,A.i,0,l,l),A.U,B.q(l,l,A.f,B.b0(h).j(0.25),l,l,l,1.4,l,l,l,l,l,l)],n),A.m,l,A.e,A.i,0,A.p)
case"blackletter":h=x.p
w=B.A(B.a([B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("PRICE: FREE \xb7 NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],h),A.m,l,A.iR,A.i,0,l,l)
t=m.ait(!0,1.4)
s=a0?4:10
v=B.d(i,l,1,l,l,l,l,m.azk(v,u,1,A.V),A.K,l,l)
q=a0?4:8
return B.x(B.a([w,A.ax,t,new B.a5(l,s,l,l),v,new B.a5(l,q,l,l),m.ait(!0,1.4),A.ax,B.d(C.bEZ(j).toUpperCase(),l,l,l,l,l,l,f,A.K,l,l),A.ax,m.aBx(3)],h),A.m,l,A.e,A.i,0,A.p)
default:h=x.p
return B.x(B.a([B.d(i.toUpperCase(),l,1,l,l,l,l,m.azm(v,u,1,3,A.V),A.K,l,l),A.U,m.ait(!0,1.2),A.ax,B.A(B.a([B.d(C.bEZ(j).toUpperCase(),l,l,l,l,l,l,f,l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],h),A.m,l,A.iR,A.i,0,l,l),A.ax,m.aBx(3)],h),A.m,l,A.e,A.i,0,A.p)}},
adV(d){return this.w6(d,!1)},
afu(d,e,f,g){var w=null,v=f*0.9,u=f*0.45,t=e==null?B.b0(this.d.x):e,s=B.m(f)
return B.q(w,B.d(d,w,w,w,w,w,w,this.afw("Roboto",f,g==null?A.c:g,1,0.4,A.u),w,w,w),A.f,w,w,new B.p(t,w,w,s,w,w,A.n),w,w,w,w,new B.R(v,u,v,u),w,w,w)},
cda(d,e){return this.afu(d,null,e,null)},
aZX(d){var w=null,v=new B.V(Date.now(),0,!1),u=A.o.F(B.dg(v),12)===0?12:A.o.F(B.dg(v),12),t=B.b0(this.d.w).j(0.75),s=this.azl("Roboto",15,t,1,A.cC),r=B.X(E.aoC,t,w,w,w,18),q=A.a.aC(A.oI[B.bK(v)-1],0,3),p=A.a.b0(A.o.u(B.fP(v)),2,"0"),o=B.dg(v)>=12?"PM":"AM"
return B.A(B.a([r,A.ae,B.d(q+" "+B.bW(v)+", "+B.bC(v)+"  \xb7  "+u+":"+p+" "+o,w,w,w,w,w,w,s,w,w,w),B.q(w,w,A.f,t.j(0.4),w,w,w,20,w,A.h3,w,w,w,1),B.X(d,t,w,w,w,19),A.ae,B.d("NGMY News",w,w,w,w,w,w,s,w,w,w)],x.p),A.m,w,A.e,A.i,0,w,w)},
ay1(){return this.aZX(A.n3)},
b6E(d,e,f,g){var w=null,v=A.a.i(this.c.c)
if(v.length===0)v="Your headline appears here"
return B.d(v,w,e,A.a2,w,w,w,this.afw("Roboto",this.aft(v,"Roboto",A.H,d,e,f,g,1.08),w,1.08,-0.8,A.H),w,w,w)},
aBB(d,e,f){return this.b6E(d,e,f,30)},
aD4(d,e,f){var w=null,v=A.a.i(this.c.d)
if(v.length===0)return A.bM
return new B.D(A.up,B.d(v,w,e,A.a2,w,w,w,this.cdb("Roboto",f,B.b0(this.d.w).j(0.88),1.35),w,w,w),w)},
b9G(d){return this.aD4(d,3,22)},
cCW(d,e){return this.aD4(d,e,22)},
ug(d,e){var w,v,u,t,s=null,r=this.e
if(r!=null){w=B.fR(r,A.A,s,s,A.cj,A.c_,!0,e,!1,s,d)
r=this.d
v=r.ay
if(v==="bw")w=new B.BH(D.bHR,w,s)
if(v==="sepia")w=new B.BH(D.bHQ,w,s)}else{r=this.d
v=r.w
u=B.b0(v).j(0.1)
t=Math.min(d,e)
w=B.q(s,B.at(B.X(A.z4,B.b0(v).j(0.35),s,s,s,t*0.25),s,s,s),A.f,u,s,s,s,e,s,s,s,s,s,d)}v=B.a([w],x.p)
if(r.ax)v.push(B.c3(s,new B.p(s,s,s,s,s,new B.c_(A.A,0.95,A.x,s,0,B.a([A.L,A.YQ.j(0.38)],x.O),s,s),A.n),A.bj))
return new B.a5(d,e,new B.an(A.a0,s,A.b2,A.t,v,s),s)},
qW(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d
switch(i.e.a){case 1:i=i.w
w=B.L(B.b0(i),A.r,3)
i=B.L(B.b0(i),A.r,1)
return B.q(j,B.q(j,k.ug(d-24,e-24),A.f,j,j,new B.p(j,j,i,j,j,j,A.n),j,j,j,j,A.eA,j,j,j),A.f,j,j,new B.p(j,j,w,j,j,j,A.n),j,e,j,j,A.me,j,j,d)
case 2:w=B.a([new B.ac(0,A.G,A.w.j(0.35),D.ena,14)],x.V)
v=k.ug(d-28,e-28-58)
u=A.a.i(k.c.f)
if(u.length===0)u="NGMY"
return B.eM(A.A,-0.035,B.q(j,B.x(B.a([v,B.E(B.at(B.d(u,j,2,A.a2,j,j,j,k.b1u(i.as,13.5,D.bi0,1.1,A.cH),A.K,j,j),j,j,j),1)],x.p),A.m,j,A.e,A.i,0,A.p),A.f,j,j,new B.p(D.blU,j,j,j,w,j,A.n),j,e,j,j,D.bCt,j,j,d),j)
case 3:w=B.m(30)
i=B.L(B.b0(i.x),A.r,5)
return B.q(j,B.by(B.m(25),k.ug(d-10,e-10),A.aq),A.f,j,j,new B.p(j,j,i,w,j,j,A.n),j,e,j,j,j,j,j,d)
case 4:t=Math.min(d,e)
w=B.L(B.b0(i.x),A.r,6)
i=B.b0(i.f)
v=t-10
return new B.a5(d,e,B.at(B.q(j,B.hS(k.ug(v,v),A.aq),A.f,j,j,new B.p(i,j,w,j,j,j,A.a7),j,t,j,j,A.me,j,j,t),j,j,j),j)
case 5:i=B.a([new B.ac(0,A.G,A.w.j(0.3),D.emR,10)],x.V)
return B.eM(A.A,0.025,new B.a5(d,e,new B.an(A.a0,j,A.ad,A.f,B.a([B.bR(0,B.q(j,k.ug(d-18,e-18),A.f,j,j,new B.p(A.c,j,j,j,i,j,A.n),j,j,j,j,A.rV,j,j,j),0,0,0),B.ap(j,B.eM(A.A,-0.6,B.q(j,j,A.f,A.bN.j(0.85),j,j,j,26,j,j,j,j,j,90),j),j,j,-18,j,-10,j),B.ap(-10,B.eM(A.A,-0.6,B.q(j,j,A.f,A.bN.j(0.85),j,j,j,26,j,j,j,j,j,90),j),j,j,j,-18,j,j)],x.p),j),j),j)
case 6:i=B.b0(i.x)
return new B.a5(d,e,B.b4(B.nU(k.ug(d,e),A.aq,D.hsN),new C.bes(i,j),j,j,A.az),j)
case 7:i=x.p
w=B.a([k.ug(d-16,e-44)],i)
for(v=[!0,!1],u=v.length,s=d/34,r=0;r<u;++r){q=v[r]
p=q?-18:j
o=q?j:-18
n=B.a([],i)
for(m=0;m<Math.max(6,A.j.bh(s));++m){l=new B.aN(2,2)
n.push(B.q(j,j,A.f,j,j,new B.p(A.bP,j,j,new B.be(l,l,l,l),j,j,A.n),j,10,j,j,j,j,j,14))}w.push(new B.cL(0,p,0,o,j,j,new B.c7(A.aL,A.qS,A.i,A.m,j,A.p,j,0,n,j),j))}return B.q(j,new B.an(A.a0,j,A.b2,A.t,w,j),A.f,A.ep,j,j,j,e,j,j,D.bH5,j,j,d)
case 8:w=d/2
v=B.xx(A.fK,new B.aN(w,w))
i=B.L(B.b0(i.x),A.r,5)
w-=5
return B.q(j,B.by(B.xx(A.hP,new B.aN(w,w)),k.ug(d-10,e-10),A.aq),A.f,j,j,new B.p(j,j,i,v,j,j,A.n),j,e,j,j,j,j,j,d)
case 9:i=B.a([new B.ac(0,A.G,A.w.j(0.35),A.h4,22)],x.V)
return B.q(j,k.ug(d-20,e-20),A.f,j,j,new B.p(A.c,j,j,j,i,j,A.n),j,e,j,j,A.bV,j,j,d)
case 10:return new B.a5(d,e,B.nU(k.ug(d,e),A.aq,D.hB2),j)
case 0:i=B.L(B.b0(i.w),A.r,2.4)
return B.q(j,k.ug(d-14,e-14),A.f,j,j,new B.p(j,j,i,j,j,j,A.n),j,e,j,j,A.eA,j,j,d)}},
aQZ(d,e){return this.d.e===D.Tf?A.bM:this.bIX(d,e)},
Xc(d){return this.aQZ(d,A.K)},
gaCl(){var w=this.c
return A.a.i(w.y).length!==0||A.a.i(w.w).length!==0},
aCk(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.c,l=A.a.i(m.x)
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
if(m.length!==0&&w.length===0)q.push(B.E(B.at(B.d("\u201c"+m+"\u201d",n,7,A.a2,n,n,n,o.b1v(v.Q,19,1.15,A.cH,A.V),A.K,n,n),n,n,n),1))
else{r=B.a([],r)
p=l.length!==0
if(p)r.push(B.d(l.toUpperCase(),n,1,A.a2,n,n,n,o.Qw("Roboto",12.5,B.b0(t),1.2,A.u),n,n,n))
if(p)r.push(A.ax)
m=w.length===0?m:w
r.push(B.E(B.d(m,n,9,A.a2,n,n,n,o.afv(v.as,13,1.25),n,n,n),1))
A.d.v(q,r)}return B.q(n,B.jl(B.x(q,A.E,n,A.e,A.i,0,A.p),A.t,n),A.f,n,n,new B.p(s,n,u,n,n,n,A.n),n,e,n,n,A.bh,n,n,d)},
gclt(){var w=this.c.r
return w.length===0?B.a([y.g],x.s):w},
aao(d,e,f,g){return B.cs(new C.ciV(this,e,d,f,g))},
aan(d){return this.aao(d,22,!0,18)},
Xq(d,e){return this.aao(d,22,!0,e)},
aS2(d,e,f){return this.aao(d,22,e,f)},
bKW(d,e,f){return this.aao(d,e,!0,f)},
bcF(d,e,f,g){return B.cs(new C.ciW(this,e,d,g,!0,f))},
ckg(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i="Roboto",h=k.d
switch(h.d.a){case 0:return B.x(B.a([k.adV(824),A.aB,k.aXM(824),k.b9B(824),A.U,k.O9(),A.af,B.at(k.qW(824,360),j,j,j),k.Xc(824),A.af,B.E(k.aan(3),1)],x.p),A.al,j,A.e,A.i,0,A.p)
case 1:w=x.p
return B.x(B.a([k.adV(824),A.aR,new B.a5(j,350,B.A(B.a([new B.a5(440,j,B.x(B.a([k.acJ(440,A.bn,3,62,26),k.aD1(440,A.bn,2,20),A.b5,k.asT(B.b0(h.x),!1)],w),A.E,j,A.e,A.i,0,A.p),j),A.Kk,B.x(B.a([k.qW(362,310),k.Xc(362)],w),A.m,j,A.e,A.i,0,A.p)],w),A.E,j,A.e,A.i,0,j,j),j),A.X,k.aBx(2),A.af,B.E(k.aan(3),1)],w),A.al,j,A.e,A.i,0,A.p)
case 2:w=k.w6(824,!0)
v=B.b0(h.x)
u=h.ch
t=x.p
s=B.a([k.c1g(788,u?B.b0(h.f):A.c,3,92,34)],t)
r=k.c
if(A.a.i(r.d).length!==0)s.push(k.cCL(788,u?B.b0(h.f):A.c,22))
v=B.q(j,B.x(s,A.m,j,A.e,A.i,0,A.p),A.f,v,j,j,j,j,j,j,A.Ci,j,j,j)
u=B.a([B.at(k.qW(824,390),j,j,j)],t)
s=A.a.i(r.f)
if(s.length!==0&&h.e!==D.Tf){h=A.w.j(0.65)
u.push(B.ap(0,B.q(j,B.d(s,j,2,A.a2,j,j,j,k.azl(i,14,A.c,1.15,A.V),j,j,j),A.f,h,j,j,j,j,j,j,A.lJ,j,j,j),j,j,0,0,j,j))}return B.x(B.a([w,A.af,v,A.af,new B.an(A.a0,j,A.ad,A.t,u,j),A.U,k.O9(),A.X,B.E(k.Xq(2,21),1)],t),A.al,j,A.e,A.i,0,A.p)
case 3:h=k.w6(824,!0)
w=k.qW(824,560)
v=B.a([A.L,A.w.j(0.85)],x.O)
u=x.p
return B.x(B.a([h,A.af,new B.an(A.b9,j,A.ad,A.t,B.a([w,B.ap(0,B.q(j,k.Pe(780,A.bn,A.c,3,74,30),A.f,j,j,new B.p(j,j,j,j,j,new B.a9(A.b7,A.b9,A.x,v,j,j),A.n),j,j,j,j,D.bFi,j,j,j),j,j,0,0,j,j)],u),j),k.b9C(824,A.bn),A.U,k.O9(),A.X,B.E(k.aan(3),1)],u),A.al,j,A.e,A.i,0,A.p)
case 4:h=x.p
return B.x(B.a([k.adV(824),A.aB,k.aXM(824),k.b9B(824),A.U,k.O9(),A.af,B.E(k.bcF(3,300,B.x(B.a([k.qW(300,300),k.Xc(300)],h),A.m,j,A.e,A.i,0,A.p),360),1)],h),A.al,j,A.e,A.i,0,A.p)
case 5:w=k.w6(824,!0)
v=x.p
u=B.x(B.a([k.acJ(440,A.bn,3,62,26),k.aD1(440,A.bn,2,20),A.b5,k.asS(!1)],v),A.E,j,A.e,A.i,0,A.p)
return B.x(B.a([w,A.bz,new B.a5(j,400,B.A(B.a([new B.a5(440,j,u,j),A.aTt,new B.D(A.hU,k.qW(364,h.e===D.Tf?400:330),j)],v),A.E,j,A.e,A.i,0,j,j),j),A.aB,B.E(k.Xq(2,21),1)],v),A.al,j,A.e,A.i,0,A.p)
case 6:return B.x(B.a([k.adV(824),A.af,k.c1f(824,2,70),k.cCJ(824,21),A.U,k.O9(),A.af,B.E(k.bcF(3,340,B.at(k.qW(340,340),j,j,j),350),1)],x.p),A.al,j,A.e,A.i,0,A.p)
case 7:w=k.w6(824,!0)
v=B.b0(h.x)
u=Date.now()
u=C.bEZ(new B.V(u,0,!1))
t=x.p
v=B.a([B.q(j,B.d(u.toUpperCase(),j,j,j,j,j,j,k.Qw(i,13,h.ch?B.b0(h.f):A.c,1.2,A.u),A.K,j,j),A.f,v,j,j,j,j,j,j,A.bh,j,j,j),A.aB],t)
u=A.a.i(k.c.w)
if(u.length!==0)v.push(B.d("\u201c"+u+"\u201d",j,j,j,j,j,j,k.b1v(h.Q,24,1.15,A.cH,A.V),j,j,j))
v.push(A.b5)
if(k.gaCl())v.push(k.aCk(230,250))
return B.x(B.a([w,A.aB,B.E(B.A(B.a([new B.a5(230,j,B.x(v,A.al,j,A.e,A.i,0,A.p),j),B.q(j,j,A.f,B.b0(h.w),j,j,j,j,j,A.alh,j,j,j,1.2),new B.a5(570,j,B.x(B.a([k.acJ(570,A.bn,3,62,28),k.cCK(570,A.bn,20),A.U,k.asS(!1),A.U,B.at(k.qW(570,330),j,j,j),k.Xc(570),A.X,B.E(k.aS2(2,!1,17),1)],t),A.al,j,A.e,A.i,0,A.p),j)],t),A.E,j,A.e,A.i,0,j,j),1)],t),A.al,j,A.e,A.i,0,A.p)
case 8:w=k.w6(824,!0)
v=h.ch
u=v?B.b0(h.x):B.b0(h.w)
t=B.d("\u2605  SPECIAL REPORT  \u2605",j,j,j,j,j,j,k.Qw(i,13,v?A.w:B.b0(h.x),3,A.u),j,j,j)
s=x.p
return B.x(B.a([w,A.af,B.q(j,B.x(B.a([t,A.an,k.Pe(788,A.bn,v?A.w:B.b0(h.f),2,72,30)],s),A.E,j,A.e,A.i,0,A.p),A.f,u,j,j,j,j,j,j,D.bDz,j,j,j),k.b9C(824,A.bn),A.X,B.at(k.qW(824,310),j,j,j),k.Xc(824),A.U,k.O9(),A.X,B.E(k.aan(3),1)],s),A.al,j,A.e,A.i,0,A.p)
case 10:w=x.p
return B.x(B.a([k.w6(824,!0),A.aR,new B.an(A.a0,j,A.ad,A.t,B.a([k.qW(824,430),B.ap(18,k.cda(k.c.b,17),j,j,18,j,j,j)],w),j),A.bz,k.aBB(824,3,66),k.b9G(824),A.af,B.q(j,j,A.f,B.b0(h.w).j(0.25),j,j,j,1,j,j,j,j,j,j),A.af,k.ay1(),A.aB,B.E(k.Xq(2,18),1)],w),A.al,j,A.e,A.i,0,A.p)
case 11:h=h.x
w=x.p
return B.x(B.a([k.w6(824,!0),A.bz,new B.a5(j,500,B.A(B.a([new B.a5(410,j,B.x(B.a([k.afu(k.c.b,B.b0(h).j(0.14),15,B.b0(h)),A.aR,k.b6E(410,4,58,28),k.aD4(410,6,20),A.b5],w),A.E,j,A.e,A.i,0,A.p),j),W.aTu,k.qW(390,500)],w),A.E,j,A.e,A.i,0,j,j),j),A.aB,k.ay1(),A.aR,B.E(k.Xq(2,18),1)],w),A.al,j,A.e,A.i,0,A.p)
case 12:w=k.w6(824,!0)
v=k.qW(824,420)
u=B.hPv(-0.25)
t=B.b0(h.x)
s=B.a([new B.ac(0,A.G,A.w.j(0.4),A.I,10)],x.V)
r=x.p
return B.x(B.a([w,A.aR,new B.an(A.a0,j,A.ad,A.t,B.a([v,B.ap(22,B.fx(j,B.q(j,B.d("BREAKING NEWS",j,j,j,j,j,j,k.cdd(i,30,A.c,1,A.cH,A.u),j,j,j),A.f,j,j,new B.p(t,j,j,j,s,j,A.n),j,j,j,j,D.bFy,j,j,j),j,u,!0),j,j,0,j,j,j)],r),j),A.bz,k.aBB(824,3,62),k.b9G(824),A.af,B.q(j,j,A.f,B.b0(h.w).j(0.25),j,j,j,1,j,j,j,j,j,j),A.af,k.aZX(A.lO),A.aB,B.E(k.Xq(2,18),1)],r),A.al,j,A.e,A.i,0,A.p)
case 13:w=k.c
q=A.a.i(w.x)
if(!(q.length!==0)){v=A.a.i(w.w)
q=v.length!==0?v:"More from NGMY News"}v=k.w6(824,!0)
u=h.w
t=x.p
w=B.a([k.qW(824,380),B.ap(j,k.afu(w.b,B.b0(u).j(0.85),15,B.b0(h.f)),j,j,16,j,16,j)],t)
s=k.aBB(824,2,60)
r=k.cCW(824,2)
p=k.ay1()
o=B.E(k.aS2(2,!1,18),1)
n=B.L(B.b0(u).j(0.18),A.r,1)
m=B.m(18)
h=h.x
l=B.b0(h).j(0.05)
return B.x(B.a([v,A.aR,new B.an(A.a0,j,A.ad,A.t,w,j),A.aR,s,r,A.X,p,A.aB,o,A.af,B.q(j,B.A(B.a([B.by(B.m(14),k.ug(150,104),A.aq),A.oU,B.E(B.x(B.a([k.afu("RELATED",B.b0(h).j(0.14),12,B.b0(h)),A.U,B.d(q,j,2,A.a2,j,j,j,k.azk(i,19,1.15,A.H),j,j,j)],t),A.E,j,A.e,A.Q,0,A.p),1),B.X(A.eJ,B.b0(u).j(0.6),j,j,j,30)],t),A.m,j,A.e,A.i,0,j,j),A.f,j,j,new B.p(l,j,n,m,j,j,A.n),j,j,j,j,A.bh,j,j,j)],t),A.al,j,A.e,A.i,0,A.p)
case 9:return B.x(B.a([k.w6(824,!0),A.bz,k.acJ(824,A.bn,3,62,30),k.aD1(824,A.bn,2,22),A.X,k.asS(!1),A.X,B.at(k.qW(824,330),j,j,j),k.aQZ(824,A.bn),A.aR,B.E(k.bKW(2,40,21),1)],x.p),A.al,j,A.e,A.i,0,A.p)}},
B(d){var w,v,u,t=this,s=null,r="Roboto",q=t.d,p=q.f,o=x.p,n=B.a([B.bR(0,B.c3(s,new B.p(s,s,s,s,s,new B.a9(A.aA,A.aF,A.x,B.a([B.b0(p),B.b0(q.r)],x.O),s,s),A.n),A.bj),0,0,0)],o)
if(q.ax)n.push(B.bR(0,B.b4(s,s,s,new C.baW(B.b0(q.w),s),A.az),0,0,0))
w=q.w
n.push(new B.D(D.bG4,B.x(B.a([B.E(t.ckg(),1),A.U,B.q(s,s,A.f,B.b0(w),s,s,s,1.4,s,s,s,s,s,s),A.fM,B.A(B.a([B.d("PRINTED WITH NGMY NEWS",s,s,s,s,s,s,t.b1t(r,11,1.4,A.H),s,s,s),B.d("CREATED BY NGMY.ORG",s,s,s,s,s,s,t.Qw(r,11,B.b0(q.x),1.4,A.u),s,s,s)],o),A.m,s,A.iR,A.i,0,s,s)],o),A.al,s,A.e,A.i,0,A.p),s))
v=B.b0(w)
n.push(B.bR(0,new B.dx(!0,B.b4(s,s,s,new C.btV(v.j(q.ch?0.07:0.06),s),A.az),s),0,0,0))
p=B.b0(p).j(0.75)
v=B.L(B.b0(w).j(0.5),A.r,1.2)
u=B.m(40)
o=B.a([],o)
q=t.f
if(q!=null)o.push(B.hS(B.fR(q,A.A,s,s,A.cj,A.c_,!1,30,!1,s,30),A.aq))
else o.push(B.X(A.n3,B.b0(w),s,s,s,28))
o.push(A.ae)
o.push(B.d("NGMY.ORG",s,s,s,s,s,s,t.azm(r,15,1,1.6,A.u),s,s,s))
n.push(B.ap(52,new B.dx(!0,B.da(B.q(s,B.A(o,A.m,s,A.e,A.Q,0,s,s),A.f,s,s,new B.p(p,s,v,u,s,s,A.n),s,s,s,s,D.bHe,s,s,s),0.6),s),s,s,s,40,s,s))
return new B.a5(900,1260,B.jl(new B.an(A.a0,s,A.ad,A.t,n,s),A.t,s),s)}}
C.bet.prototype={
jt(d){return C.hto(d)},
k9(d){return!1}}
C.bes.prototype={
a5(d,e){var w,v=C.hto(e)
$.Q()
w=B.K()
w.r=this.b.gp(0)
w.b=A.a9
w.c=6
return d.af(v,w)},
aE(d){return!d.b.A(0,this.b)}}
C.bwr.prototype={
jt(d){var w,v,u,t,s,r,q,p,o=new B.e4()
o.d_(3)
w=$.Q()
v=B.a([],x.v)
u=new B.aF(w.r,A.ai,null,null,v)
u.D(new B.aZ(0,8))
for(t=d.a,s=0;s<t;s+=14){w=new B.aq(s,o.ai()*14)
v.push(w)
r=u.f
if(r!=null)w.ak(r)
u.ab()}u.D(new B.aq(t,8))
w=d.b
r=w-8
u.D(new B.aq(t,r))
for(;t>0;t-=14){q=new B.aq(t,w-o.ai()*14)
v.push(q)
p=u.f
if(p!=null)q.ak(p)
u.ab()}u.D(new B.aq(0,r))
u.D(new B.bv())
return u},
k9(d){return!1}}
C.baW.prototype={
a5(d,e){var w,v,u,t,s,r,q,p=null,o=new B.e4()
o.d_(7)
$.Q()
w=B.K()
for(v=this.b,u=e.a,t=e.b,s=0;s<700;++s){w.r=v.j(0.03+o.ai()*0.07).gp(0)
d.N(new B.o(o.ai()*u,o.ai()*t),0.4+o.ai()*1.4,w)}for(v=x.O,s=0;s<5;++s){r=new B.o(o.ai()*u,o.ai()*t)
q=50+o.ai()*90
w.sav(new B.c_(A.A,0.5,A.x,p,0,B.a([A.Yi.j(0.13),A.L],v),p,p).aK(0,B.bX(r,q)))
d.N(r,q,w)}w.sav(p)},
aE(d){return!1}}
C.btV.prototype={
a5(d,e){var w,v,u=null,t=e.a,s=B.fq(u,A.cs,u,u,u,B.cP(u,u,u,u,u,u,u,u,u,B.l(u,u,this.b,u,u,u,u,u,"Roboto",u,u,t*0.34,u,u,A.u,u,u,!0,u,10,u,u,u,u,u,u),"NGMY"),A.a5,A.bX,u,A.dz,A.bY)
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
aE(d){return!d.b.A(0,this.b)}}
C.WW.prototype={
S(){return new C.aFP()}}
C.aFP.prototype={
Y(){var w=this
w.a3()
B.fHq(w.a.c,null).bG(new C.etC(),x.g7).bG(new C.etD(w),x.a)
w.a.toString},
gaPL(){var w=D.azh[this.e].b
if(w==null){w=this.d
w=w==null?1:w.c/w.d}return w},
gazn(){var w,v,u,t,s,r=this,q=r.d,p=q.c,o=q.d
q=r.gaPL()
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
q=A.j.E(v*p,q,p-q)-q
w=A.j.E(u*o,w,o-w)-w
return new B.a1(q,w,q+s,w+t)},
a_Q(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f
var $async$a_Q=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:g=r.d
if(g==null||r.y){w=1
break}r.m(new C.etp(r))
t=4
q=r.gazn()
j=q
p=Math.min(1600,j.c-j.a)
j=q
i=q
o=p*(j.d-j.b)/(i.c-i.a)
$.Q()
n=new B.q_(new B.pz())
m=B.zt(n,null)
i=B.K()
i.z=A.he
m.q2(g,q,new B.a1(0,0,0+p,0+o),i)
w=7
return B.b(n.o0().xD(J.hiC(p),J.hiC(o)),$async$a_Q)
case 7:l=e
w=8
return B.b(l.hs(A.hg),$async$a_Q)
case 8:k=e
j=r.c
if(j!=null){j=B.a6(j,!1)
i=k
i.toString
j.O(J.eT(J.vW(i)))}t=2
w=6
break
case 4:t=3
f=s.pop()
if(r.c!=null){r.m(new C.etq(r))
r.c.L(x.q).f.U(D.fil)}w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a_Q,v)},
B(d){var w,v,u,t=this,s=null,r=t.d,q=B.aG(s,s,s,s,A.lo,s,s,s,new C.etw(d),s,s,s,s,s,s),p=x.p
q=B.eH(B.a([B.bN(!1,D.fXm,s,s,!0,s,s,s,t.y||r==null?s:t.gcde(),s,s)],p),s,s,!0,!0,A.BZ,s,1,!0,s,0,!1,s,!1,s,s,q,s,!0,s,s,s,s,s,D.h0o,s,s,s,1,s,!0)
if(r==null)p=A.m1
else{w=B.E(new B.D(A.bQ,B.at(new B.fF(t.gaPL(),B.cs(new C.etx(t,r)),s),s,s,s),s),1)
v=B.a([],p)
for(u=0;u<6;++u)v.push(new B.D(A.iK,B.jv(s,s,s,B.d(D.azh[u].a,s,s,s,s,s,s,A.aaW,s,s,s),s,new C.ety(t,u),t.e===u,s,s,s,s),s))
p=B.x(B.a([w,B.q(s,B.bm(!0,B.x(B.a([new B.a5(s,40,B.cl(v,s,s,s,s,s,A.aL,!1),s),B.A(B.a([D.bZG,B.E(B.kV(s,s,s,6,1,new C.etz(t),t.f),1),D.bZg],p),A.m,s,A.e,A.i,0,s,s),D.fUC,A.an,B.bN(!1,D.fUk,s,s,!0,s,s,s,new C.etA(t,d),s,s)],p),A.m,s,A.e,A.Q,0,A.p),!0,!1,A.ag,!0,!1),A.f,D.Z6,s,s,s,s,s,s,D.bCV,s,s,s)],p),A.m,s,A.e,A.i,0,A.p)}return B.c4(q,A.BZ,p,s,!1,!1,s,s)}}
C.be0.prototype={
a5(d,e){var w
$.Q()
w=B.K()
w.z=A.cj
return d.q2(this.b,this.c,new B.a1(0,0,0+e.a,0+e.b),w)},
aE(d){return!d.c.A(0,this.c)||d.b!==this.b}}
C.a14.prototype={
S(){var w=$.aw(),v=x.A
return new C.aHd(new B.au(A.aw,w),new B.au(new B.ba("NGMY",A.b6,A.aQ),w),new B.cw(null,v),new B.cw(null,v),A.d.gH(D.a68),"quote"+1000*Date.now(),B.a([],x.t),B.aR(x.S),A.K)}}
C.oU.prototype={}
C.aHd.prototype={
gaXV(){var w,v,u=this
if(u.p1)w=new B.wc(1,u.p2,0.9,u.p3).k_().l()&16777215
else{v=u.k4
w=v==null?null:v&16777215}if(w==null)return 0
return(A.o.E(A.j.V(u.ok*255),0,255)<<24|w)>>>0},
Y(){var w=this
w.a3()
w.a.toString
w.p4=null
$.aW.x1$.push(new C.f2v(w))},
t(){var w=this.d,v=$.aw()
w.T$=v
w.P$=0
w=this.e
w.T$=v
w.P$=0
this.a4()},
Zq(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Zq=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b($.rh().jo(0,"assets/images/ngmy_logo.png"),$async$Zq)
case 7:q=e
p=J.eT(J.vW(q))
o=r.c
w=o!=null?8:9
break
case 8:w=10
return B.b(F.bFJ(new B.q9(p,1),o),$async$Zq)
case 10:case 9:if(r.c==null){w=1
break}r.m(new C.f1n(r,p))
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
return B.i($async$Zq,v)},
Qz(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Qz=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hU().l8(92,1800,A.eO),$async$Qz)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fp(),$async$Qz)
case 8:p=e
n=r.c
if(n==null){w=1
break}w=9
return B.b(F.bFJ(new B.q9(p,1),n),$async$Qz)
case 9:if(r.c==null){w=1
break}r.m(new C.f1L(r,p))
t=2
w=6
break
case 4:t=3
l=s.pop()
o=B.ab(l)
n=r.c
if(n!=null)n.L(x.q).f.U(B.b3(null,null,null,null,null,A.t,null,B.d("Could not open that picture. "+B.w(o),null,null,null,null,null,null,null,null,null,null),null,A.a_,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Qz,v)},
b60(){var w=this
w.RG=w.R8=0
w.ry=w.rx=1
w.xr=w.x2=w.x1=w.to=0
w.y1=!1
w.aH=w.aR=w.aL=w.aG=w.a_=w.bb=w.bn=w.y2=0
w.b7=null
w.b6=0.25
w.bf=null
w.bK=0.5
w.aP=1
w.c9=w.bH=w.bm=0
w.cO=w.c6=!1},
aZH(d,e,f,g,h,i,j,a0,a1){var w,v,u,t,s,r,q,p,o,n=1-g,m=n*0.2126,l=n*0.7152,k=n*0.0722
n=x.x
w=C.bCo(B.a([m+g,l,k,0,0,m,l+g,k,0,0,m,l,k+g,0,0,0,0,0,1,0],n),D.ds5)
if(Math.abs(j)>0.5){v=j*3.141592653589793/180
u=Math.cos(v)
t=Math.sin(v)
s=0.715-u*0.715
r=t*0.715
q=0.072-u*0.072
p=0.213-u*0.213
w=C.bCo(B.a([0.213+u*0.787-t*0.213,s-r,q+t*0.928,0,0,p+t*0.143,0.715+u*0.285+t*0.14,q-t*0.283,0,0,p-t*0.787,s+r,0.072+u*0.928+t*0.072,0,0,0,0,0,1,0],n),w)}o=128*(1-f)+d*255
n=h*25
w=C.bCo(C.hdf(Math.pow(2,e)*f,o+n,o-i*25,o-n+i*12),w)
if(a0>0){n=a0*255*0.25
w=C.bCo(C.hdf(1-a0*0.5,n,n,n),w)}return a1?C.bCo(C.hdf(-1,255,255,255),w):w},
aDa(){var w,v,u=B.ag("\\S+",!0,!1,!1,!1).kY(0,this.d.a.a),t=B.C(u,B.a4(u).k("M.E"))
for(u=this.db;w=u.length,v=t.length,w<v;)u.push(0)
if(w>v)A.d.xB(u,v,w)
this.dx.py(new C.f1V(t),!0)
return t},
b8A(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.w
e.aDa()
w=C.in3(e.d.a.a,e.db)
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
return C.ijv(d,k,v,a0,j,e.gaXV(),e.ax,i,u,q,p,r,t,s,w,g,h,f,n,l,o,m)},
cAz(){return this.b8A(null)},
DM(){var w=0,v=B.j(x.dd),u,t=this,s,r,q
var $async$DM=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.p4==null){u=null
w=1
break}w=3
return B.b($.aW.gmS(),$async$DM)
case 3:w=4
return B.b(B.bQ(A.eR,null,x.H),$async$DM)
case 4:w=5
return B.b($.aW.gmS(),$async$DM)
case 5:s=$.aW.ap$.x.h(0,t.r)
r=s==null?null:s.gbg()
if(!(r instanceof B.qj)){u=null
w=1
break}w=7
return B.b(r.md(1080/r.gZ(0).a),$async$DM)
case 7:w=6
return B.b(e.hs(A.hg),$async$DM)
case 6:q=e
u=q==null?null:J.eT(A.dN.gaU(q))
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$DM,v)},
abi(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$abi=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.Q){w=1
break}q.m(new C.f16(q))
t=4
w=7
return B.b(q.DM(),$async$abi)
case 7:p=e
o=p==null?null:"data:image/png;base64,"+A.cP.gcu().aN(p)
n=C.Cn(null,null,null,null,D.oN,6,!1,null,null,null,null,null,C.cD(),null,!1,null,"NGMY Quote",null,null,B.a([q.b8A(o)],x.g),"office_blue",null,!1,null)
l=q.c
if(l!=null)B.a6(l,!1).O(n)
r.push(6)
w=5
break
case 4:t=3
j=s.pop()
m=B.ab(j)
l=q.c
if(l!=null)l.L(x.q).f.U(B.b3(null,null,null,null,null,A.t,null,B.d(B.w(m),null,null,null,null,null,null,null,null,null,null),null,A.a_,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.f17(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$abi,v)},
B3(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$B3=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.Q){w=1
break}q.m(new C.f14(q))
t=4
w=7
return B.b($.aW.gmS(),$async$B3)
case 7:w=8
return B.b(B.bQ(A.mV,null,x.H),$async$B3)
case 8:w=9
return B.b($.aW.gmS(),$async$B3)
case 9:k=$.aW.ap$.x.h(0,q.f)
p=k==null?null:k.gbg()
if(!(p instanceof B.qj))throw B.W("The picture is not ready yet.")
w=10
return B.b(p.md(1080/p.gZ(0).a),$async$B3)
case 10:o=e
w=11
return B.b(o.hs(A.hg),$async$B3)
case 11:n=e
if(n==null)throw B.W("Could not make the picture.")
w=12
return B.b(A9.ahv(J.eT(A.dN.gaU(n)),"ngmy_quote.png","image/png"),$async$B3)
case 12:m=e
k=q.c
if(k==null){r=[1]
w=5
break}k=k.L(x.q).f
k.U(B.b3(null,null,null,null,null,A.t,null,B.d(m?"Your quote picture is ready. Check your downloads.":"Downloading is not available here. Use Edit in Slides, then PDF.",null,null,null,null,null,null,null,null,null,null),null,A.a_,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
l=B.ab(i)
k=q.c
if(k!=null)k.L(x.q).f.U(B.b3(null,null,null,null,null,A.t,null,B.d(B.w(l),null,null,null,null,null,null,null,null,null,null),null,A.a_,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.f15(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$B3,v)},
cnp(){var w=this.p4
w.toString
return B.cs(new C.f1E(this,w))},
b1C(d,e){var w=null
return B.bt(w,w,w,w,w,D.ftc,w,w,!0,new B.b6(4,B.m(16),Q.vP),w,w,w,w,w,D.u9,!0,w,w,w,w,new B.b6(4,B.m(16),D.b51),w,w,w,w,w,w,w,w,Ad.EJ,e,w,w,w,w,w,w,w,D.fyN,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
yy(d,e){var w=null,v=x.p,u=B.a([],v)
A.d.v(u,B.a([B.X(e,A.b8,w,w,w,15),A.bm],v))
u.push(B.d(d,w,w,w,w,w,w,D.aW9,w,w,w))
return new B.D(H.al7,B.A(u,A.m,w,A.e,A.i,0,w,w),w)},
b1B(d,e){var w=null,v=B.m(18),u=B.L(A.bA,A.r,1)
return B.q(w,B.aJ(!1,A.a3,!0,w,d,A.f,w,0,w,w,w,w,w,A.k8),A.f,w,w,new B.p(D.u9,w,u,v,w,w,A.n),w,w,w,w,e,w,w,1/0)},
we(d){return this.b1B(d,A.bF)},
ox(d,e,f,g){var w,v,u,t,s,r=null,q=g!=null,p=f?G.uY:r
if(f)w=r
else w=A.c.j(q?0.07:0.03)
v=B.m(30)
u=B.L(f?A.L:A.bA,A.r,1)
t=x.p
s=B.a([],t)
if(e!=null)A.d.v(s,B.a([B.X(e,q?A.c:A.jX,r,r,r,16),A.bm],t))
s.push(B.d(d,r,r,r,r,r,r,B.l(r,r,q?A.c:A.jX,r,r,r,r,r,r,r,r,12.5,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r))
return B.aA(r,B.cT(r,B.A(s,A.m,r,A.e,A.Q,0,r,r),r,r,A.b3,new B.p(w,r,u,v,r,p,A.n),A.h1,r,r,r,r,A.GK,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,g,r,r,r,r,r,r,!1,A.a4)},
ahp(d,e,f){return this.ox(d,null,e,f)},
azr(d,e,f,g,h,i,j){var w=null,v=B.m(12),u=g?A.b8.j(0.28):A.c.j(0.05),t=g?A.eL:A.bA,s=x.p
v=B.a([B.cT(w,d,w,w,A.b3,new B.p(u,w,B.L(t,A.r,g?2:1),v,w,w,A.n),A.h1,w,e,w,w,new B.R(i,i,i,i),w,w,j)],s)
u=g?A.c:A.aD
A.d.v(v,B.a([A.ax,B.d(f,w,1,A.a2,w,w,w,B.l(w,w,u,w,w,w,w,w,w,w,w,j<54?8.5:10.5,w,w,A.V,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],s))
return B.aA(w,new B.a5(j,w,B.x(v,A.m,w,A.e,A.Q,0,A.p),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,h,w,w,w,w,w,w,!1,A.a4)},
b1F(d,e,f,g,h,i){return this.azr(d,e,f,g,h,5,i)},
kB(d,e,f,g,h,i,j){var w,v,u=null,t=x.p,s=B.a([B.E(B.d(d,u,u,u,u,u,u,E.aUY,u,u,u),1)],t)
if(i!=null&&Math.abs(e-i)>0.001)s.push(B.aA(u,D.eru,A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.f1R(this,h,i),u,u,u,u,u,u,!1,A.a4))
w=A.c.j(0.08)
v=B.m(20)
s.push(B.q(u,B.d(j,u,u,u,u,u,u,A.aaS,u,u,u),A.f,u,u,new B.p(w,u,u,v,u,u,A.n),u,u,u,u,A.a0L,u,u,u))
s=B.A(s,A.m,u,A.e,A.i,0,u,u)
w=this.c
w.toString
w=B.ab5(w).cPk(A.b8,A.bA,A.b8.j(0.2),A.c,D.f7X,4)
return new B.D(A.yy,B.x(B.a([s,B.YO(B.kV(u,u,u,g,f,new C.f1S(this,h),A.j.E(e,f,g)),w)],t),A.m,u,A.e,A.i,0,A.p),u)},
ajs(d,e,f,g,h,i){return this.kB(d,e,f,g,h,null,i)},
ajR(d,e,f){var w,v,u,t,s,r,q,p,o=null,n=B.a([],x.p)
for(w=f.length,v=0;v<f.length;f.length===w||(0,B.J)(f),++v){u=f[v]
t=u==null
s=t?A.dl:B.b0(u)
r=d==u
q=r?A.c:A.aT
p=new B.ay(q,r?3:1,A.r,-1)
t=t?D.bSz:o
n.push(B.aA(o,B.q(o,t,A.f,o,o,new B.p(s,o,new B.bF(p,p,p,p),o,o,o,A.a7),o,34,o,o,o,o,o,34),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new C.f1U(this,e,u),o,o,o,o,o,o,!1,A.a4))}return B.bU(A.bG,n,A.bs,o,10,10)},
bP3(){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.x==="All")w=D.a68
else{v=x.a8
w=B.C(new B.Y(D.a68,new C.f0X(o),v),v.k("M.E"))}v=B.aM(n,A.Z,!1,n,!0,A.t,n,B.aO(),o.d,n,n,n,n,n,2,o.b1C("Your quote",o.w.y),A.y,!0,n,!0,n,!1,n,A.ak,n,n,n,n,n,n,n,280,n,4,2,n,!1,"\u2022",n,new C.f0Y(o),n,n,n,!1,n,n,!1,n,!0,n,A.ac,n,n,n,n,n,n,n,n,n,n,n,A.abe,!0,A.a5,n,A.ao,n,n,n,n)
u=B.aM(n,A.Z,!1,n,!0,A.t,n,B.aO(),o.e,n,n,n,n,n,2,o.b1C("Who said it","NGMY"),A.y,!0,n,!0,n,!1,n,A.ak,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,new C.f0Z(o),n,n,n,!1,n,n,!1,n,!0,n,A.ac,n,n,n,n,n,n,n,n,n,n,n,A.dg,!0,A.a5,n,A.ao,n,n,n,n)
t=o.yy("DESIGNS",A.uI)
s=x.p
r=B.a([],s)
for(q=0;q<6;++q){p=D.d10[q]
r.push(new B.D(A.iK,o.ahp(p,o.x===p,new C.f1_(o,p)),n))}return B.x(B.a([v,A.X,u,t,B.cg(B.A(r,A.m,n,A.e,A.i,0,n,n),A.t,n,A.y,n,n,n,n,A.aL),A.af,new B.a5(n,118,B.hN(n,new C.f10(o,w),w.length,n,n,A.aL,new C.f11(),!1),n),A.U,o.b1B(B.x(B.a([B.iQ(A.b8,n,n,A.ag,!0,new C.f12(o),n,D.fLl,n,D.fHx,o.k3),B.iQ(A.b8,n,n,A.ag,!0,new C.f13(o),n,n,n,D.fEJ,o.k2)],s),A.m,n,A.e,A.i,0,A.p),A.alH)],s),A.E,n,A.e,A.i,0,A.p)},
cJw(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=null,a7=a5.aDa()
if(a7.length===0)return a5.we(B.d("Type your quote on the Design tab. Every word will show up here so you can make it bigger, normal or smaller.",a6,a6,a6,a6,a6,a6,D.KJ,a6,a6,a6))
w=a5.d.a.a
v=B.a([],x.t)
for(u=a7.length,t=0,s=0;s<a7.length;a7.length===u||(0,B.J)(a7),++s){r=a7[s]
v.push(t)
q=B.ag('[.!?]["\u201d\u2019)]*$',!0,!1,!1,!1)
p=r.b
o=p.index
p=A.a.aC(w,o,o+p[0].length)
if(q.b.test(p))++t}n=v.length===0?0:A.d.gan(v)+1
u=a5.dx
m=B.C(u,B.a4(u).k("ch.E"))
A.d.fi(m)
l=m.length!==0&&A.d.cD(m,new C.f2k(a5,m))?a5.db[A.d.gH(m)]:a6
k=new C.f2r(a5)
j=new C.f2t()
q=B.d("Tap the words you want to change, then choose a size. One sentence can have big, normal and small words.",a6,a6,a6,a6,a6,a6,D.KJ,a6,a6,a6)
p=x.p
o=B.a([],p)
for(i=a5.db,h=0;h<a7.length;++h){g=new B.aN(11,11)
f=u.q(0,h)?A.b8.j(0.38):A.c.j(0.06)
e=u.q(0,h)?A.eL:A.bA
d=new B.ay(e,u.q(0,h)?2:1,A.r,-1)
e=a7[h].b
a0=e.index
e=A.a.aC(w,a0,a0+e[0].length)
a0=B.ag("[*~^]",!0,!1,!1,!1)
e=B.aL(e,a0,"")
a0=j.$1(i[h])
a1=i[h]>0?A.u:A.a8
o.push(B.aA(a6,B.q(a6,B.d(e,a6,a6,a6,a6,a6,a6,new B.H(!0,A.c,a6,a6,a6,a6,a0,a1,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),a6,a6,a6),A.f,a6,a6,new B.p(f,a6,new B.bF(d,d,d,d),new B.be(g,g,g,g),a6,a6,A.n),a6,a6,a6,a6,A.Om,a6,a6,a6),A.y,!1,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,new C.f2l(a5,h),a6,a6,a6,a6,a6,a6,!1,A.a4))}o=a5.we(B.bU(A.bG,o,A.vJ,a6,6,6))
i=B.a([a5.ox("All words",K.aqa,!1,new C.f2m(a5,a7))],p)
if(n>1){a2=0
for(;;){if(!(a2<n&&a2<8))break
a3=a2+1
i.push(a5.ahp("Sentence "+a3,!1,new C.f2n(a5,a7,v,a2)))
a2=a3}}i.push(a5.ahp("Clear picks",!1,new C.f2o(a5)))
i=B.bU(A.bG,i,A.bs,a6,8,8)
g=a5.yy("SIZE OF THE PICKED WORDS",D.apB)
f=B.a([],p)
for(s=0;s<4;++s){e={}
a0=D.dye[s]
a1=e.a=null
a4=a0.a
e.a=a4
e=u.a===0?a1:new C.f2p(e,k)
f.push(a5.ahp(a0.b,l===a4,e))}return B.x(B.a([q,A.X,o,A.X,i,g,B.bU(A.bG,f,A.bs,a6,8,8),A.X,a5.ox("Make every word normal",A.k6,!1,new C.f2q(a5))],p),A.E,a6,A.e,A.i,0,A.p)},
cEs(){var w,v,u,t,s,r,q=this,p=null,o=x.p,n=B.A(B.a([D.bIw,B.d(A.d.fe(D.aB2,new C.f23(q)).b,p,p,p,p,p,p,D.frz,p,p,p)],o),A.m,p,A.e,A.i,0,p,p),m=B.cs(new C.f24(q)),l=q.yy("HIGHLIGHT BEHIND THE WORDS",A.a2G),k=q.p1?-1:q.k4
k=q.ajR(k,new C.f25(q),D.dco)
w=q.p1
v=w?A.c:A.aT
n=B.a([n,A.X,m,l,B.bU(A.bG,B.a([k,B.aA(p,B.q(p,D.bVx,A.f,p,p,new B.p(p,p,B.L(v,A.r,w?3:1),p,p,D.fkY,A.a7),p,34,p,p,p,p,p,34),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.f28(q),p,p,p,p,p,p,!1,A.a4)],o),A.vJ,p,10,10),A.an,B.d("Add a coloured band behind the words, with any word design. The first circle turns it off.",p,p,p,p,p,p,D.KJ,p,p,p)],o)
if(q.gaXV()!==0){m=B.a([],o)
if(q.p1){l=q.p2
l=q.ajs("Colour",l,0,360,new C.f29(q),""+A.j.V(l)+"\xb0")
k=q.p3
A.d.v(m,B.a([l,q.ajs("Shade",k,0.15,0.9,new C.f2a(q),""+A.j.V(k*100))],o))}l=q.ok
m.push(q.kB("Strength",l,0.15,1,new C.f2b(q),1,""+A.j.V(l*100)+"%"))
A.d.v(n,B.a([A.X,q.we(B.x(m,A.m,p,A.e,A.i,0,A.p))],o))}n.push(q.yy("LOOK",A.wL))
m=B.a([q.ox("Bold",I.apz,q.fy,new C.f2c(q)),q.ox("Italic",I.apA,q.go,new C.f2d(q))],o)
for(u=0;u<3;++u){l={}
k=D.d2h[u]
l.a=null
t=k.a
l.a=t
w=q.id===t
v=w?G.uY:p
w=w?p:A.c.j(0.07)
s=new B.aN(14,14)
r=new B.ay(q.id===l.a?A.L:A.bA,1,A.r,-1)
m.push(B.aA(p,B.q(p,B.X(k.b,A.c,p,p,p,20),A.f,p,p,new B.p(w,p,new B.bF(r,r,r,r),new B.be(s,s,s,s),p,v,A.n),p,38,p,p,p,p,p,42),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.f2e(l,q),p,p,p,p,p,p,!1,A.a4))}n.push(B.bU(A.bG,m,A.vJ,p,8,8))
n.push(q.yy("COLOUR",A.mi))
n.push(q.ajR(q.fx,new C.f2f(q),D.dor))
n.push(A.an)
n.push(B.d("The first circle keeps the colour that comes with the design.",p,p,p,p,p,p,D.KJ,p,p,p))
n.push(q.yy("SIZE AND PLACE",A.HJ))
m=q.fr
m=q.kB("Text size",m,0.5,1.6,new C.f26(q),1,""+A.j.V(m*100)+"%")
l=q.k1
n.push(q.we(B.x(B.a([m,q.kB("Up / down",l,0.12,0.5,new C.f27(q),0.3,""+A.j.V(l*100))],o),A.m,p,A.e,A.i,0,A.p)))
return B.x(n,A.E,p,A.e,A.i,0,A.p)},
cnq(){var w,v,u,t,s,r=this,q=null,p=r.p4
if(p==null){w=B.m(22)
v=B.L(A.b8.j(0.6),A.r,1.6)
u=B.a([A.b8.j(0.18),A.bD.j(0.12)],x.O)
return B.aA(q,B.q(q,B.x(B.a([B.q(q,D.c09,A.f,q,q,D.b8_,q,62,q,q,q,q,q,62),A.aB,D.fIO,A.an,D.fND],x.p),A.m,q,A.e,A.i,0,A.p),A.f,q,q,new B.p(D.u9,q,v,w,q,new B.a9(A.a6,A.aa,A.x,u,q,q),A.n),q,q,q,q,D.bE9,q,q,1/0),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.gb1E(),q,q,q,q,q,q,!1,A.a4)}w=x.p
v=B.A(B.a([B.by(B.m(12),new B.a5(46,62,B.fR(p,A.A,120,q,A.cj,A.c_,!1,q,!1,q,q),q),A.aq),A.bd,B.E(B.x(B.a([D.fIk,A.U,B.bU(A.bG,B.a([r.ox("Change",A.jJ,!1,r.gb1E()),r.ox("Remove",A.eh,!1,new C.f1I(r))],w),A.bs,q,6,6)],w),A.E,q,A.e,A.i,0,A.p),1)],w),A.m,q,A.e,A.i,0,q,q)
u=B.a([],w)
for(t=0;t<5;++t){s=D.dkA[t]
u.push(r.ox(s.b,s.a,r.at===t,new C.f1J(r,t)))}u=B.bU(A.bG,u,A.bs,q,8,8)
switch(r.at){case 0:s=r.c5o(p)
break
case 1:s=r.c4j()
break
case 2:s=r.bKV()
break
case 3:s=r.bRm()
break
default:s=r.bN0()
break}return B.x(B.a([v,A.af,u,A.aB,s,A.X,new B.bL(A.a6,q,q,r.ox("Reset the whole picture",A.k6,!1,new C.f1K(r)),q)],w),A.E,q,A.e,A.i,0,A.p)},
c5o(d){var w=this,v=x.p
return B.x(B.a([B.bU(A.bG,B.a([w.ox("Auto enhance",E.a2k,!1,new C.f1A(w)),w.ox("Make words easy to read",A.pv,!1,new C.f1B(w))],v),A.bs,null,8,8),A.aB,B.cs(new C.f1C(w,d))],v),A.E,null,A.e,A.i,0,A.p)},
c4j(){var w,v,u,t,s,r,q,p,o=this,n=o.R8
n=o.kB("Exposure",n,-1.5,1.5,new C.f1e(o),0,A.j.ad(n,1))
w=o.RG
w=o.kB("Brightness",w,-0.5,0.5,new C.f1f(o),0,""+A.j.V(w*100))
v=o.rx
v=o.kB("Contrast",v,0.4,2,new C.f1g(o),1,""+A.j.V(v*100))
u=o.xr
u=o.kB("Fade",u,0,1,new C.f1h(o),0,""+A.j.V(u*100))
t=o.aL
t=o.kB("Spotlight",t,0,1,new C.f1i(o),0,""+A.j.V(t*100))
s=o.a_
s=o.kB("Darken",s,0,0.85,new C.f1j(o),0,""+A.j.V(s*100))
r=o.bb
r=o.kB("Vignette",r,0,0.9,new C.f1k(o),0,""+A.j.V(r*100))
q=o.aH
q=o.kB("Shade behind words",q,0,0.85,new C.f1l(o),0,""+A.j.V(q*100))
p=o.aR
return o.we(B.x(B.a([n,w,v,u,t,s,r,q,o.kB("Shade top & bottom",p,0,0.85,new C.f1m(o),0,""+A.j.V(p*100))],x.p),A.m,null,A.e,A.i,0,A.p))},
bKV(){var w,v,u,t,s=this,r=null,q=s.ry
q=s.kB("Colour strength",q,0,2.2,new C.f0A(s),1,""+A.j.V(q*100))
w=s.to
w=s.kB("Warmth",w,-1,1,new C.f0B(s),0,""+A.j.V(w*100))
v=s.x1
v=s.kB("Tint",v,-1,1,new C.f0C(s),0,""+A.j.V(v*100))
u=s.x2
t=x.p
u=s.we(B.x(B.a([q,w,v,s.kB("Shift colours",u,-180,180,new C.f0D(s),0,""+A.j.V(u)+"\xb0"),new B.bL(A.a6,r,r,s.ox("Negative",D.bQy,s.y1,new C.f0E(s)),r)],t),A.m,r,A.e,A.i,0,A.p))
v=s.yy("COLOUR WASH",A.Pn)
w=s.b7
q=B.a([null],x.Z)
A.d.v(q,D.azG)
t=B.a([u,v,s.ajR(w,new C.f0F(s),q),A.U],t)
if(s.b7!=null){q=s.b6
t.push(s.we(s.ajs("Wash strength",q,0,0.9,new C.f0G(s),""+A.j.V(q*100))))}return B.x(t,A.E,r,A.e,A.i,0,A.p)},
bRm(){var w,v,u,t,s,r=this,q=r.y2
q=r.kB("Blur",q,0,24,new C.f18(r),0,A.o.u(A.j.V(q)))
w=r.bn
w=r.kB("Soft focus",w,0,1,new C.f19(r),0,""+A.j.V(w*100))
v=r.aG
u=x.p
v=r.we(B.x(B.a([q,w,r.kB("Film grain",v,0,1,new C.f1a(r),0,""+A.j.V(v*100))],u),A.m,null,A.e,A.i,0,A.p))
w=r.yy("LIGHT LEAK",D.bQg)
q=r.bf
t=B.a([null],x.Z)
s=x.S
A.d.v(t,B.cW(D.azG,0,B.dA(8,"count",s),s))
u=B.a([v,w,r.ajR(q,new C.f1b(r),t),A.U],u)
if(r.bf!=null){q=r.bK
u.push(r.we(r.ajs("Leak strength",q,0,1,new C.f1c(r),""+A.j.V(q*100))))}return B.x(u,A.E,null,A.e,A.i,0,A.p)},
bN0(){var w,v,u,t,s=this,r=s.aP
r=s.kB("Zoom",r,1,3,new C.f0K(s),1,""+A.j.V(r*100)+"%")
w=s.bm
w=s.kB("Left / right",w,-1,1,new C.f0L(s),0,""+A.j.V(w*100))
v=s.bH
v=s.kB("Up / down",v,-1,1,new C.f0M(s),0,""+A.j.V(v*100))
u=s.c9
t=x.p
return B.x(B.a([s.we(B.x(B.a([r,w,v,s.kB("Turn",u,-180,180,new C.f0N(s),0,""+A.j.V(u)+"\xb0")],t),A.m,null,A.e,A.i,0,A.p)),A.X,B.bU(A.bG,B.a([s.ox("Turn 90\xb0",H.aqD,!1,new C.f0O(s)),s.ox("Flip sideways",A.CN,s.c6,new C.f0P(s)),s.ox("Flip upside down",A.CN,s.cO,new C.f0Q(s))],t),A.bs,null,8,8)],t),A.E,null,A.e,A.i,0,A.p)},
c86(){var w=null,v=B.m(22),u=B.L(A.bA,A.r,1)
return B.q(w,B.x(B.a([D.f88,A.X,D.fKn,A.aB,B.aA(w,B.q(A.A,D.f8m,A.f,w,w,new B.p(w,w,w,B.m(16),w,G.uY,A.n),w,52,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.f1D(this),w,w,w,w,w,w,!1,A.a4)],x.p),A.E,w,A.e,A.i,0,A.p),A.f,w,w,new B.p(D.u9,w,u,v,w,w,A.n),w,w,w,w,A.bQ,w,w,w)},
c5b(){var w,v,u,t,s,r,q,p=this,o=null,n=new C.f1v(p),m=x.p,l=B.A(B.a([D.bIC,p.ox("Reset",A.k6,!1,new C.f1r(p))],m),A.m,o,A.e,A.i,0,o,o),k=B.d("Drag it on the quote to move it. It stays on every quote.",o,o,o,o,o,o,D.KJ,o,o,o),j=p.yy("SHAPE",A.aqA),i=B.a([],m)
for(w=0;w<7;++w){v={}
u=D.Dj[w]
v.a=null
t=v.a=u.a
if(t.length!==0){s=p.cx
i.push(p.b1F(n.$2(t,p.cy),62,u.b,s===t,new C.f1s(v,p),62))}}i=B.bU(A.bG,i,A.bs,o,8,8)
v=p.yy("RING",A.pn)
u=B.a([],m)
for(w=0;w<11;++w){s={}
r=D.Dc[w]
s.a=null
t=s.a=r.a
q=p.cy
u.push(p.b1F(n.$2(p.cx,t),62,r.b,q===t,new C.f1t(s,p),62))}u=B.bU(A.bG,u,A.bs,o,8,8)
s=p.CW
return B.x(B.a([l,A.ax,k,j,i,v,u,A.af,p.we(p.kB("Size",s,0.12,0.4,new C.f1u(p),0.22,""+A.j.V(s*100)))],m),A.E,o,A.e,A.i,0,A.p)},
b4E(d){return new B.a5(null,d,new B.fF(0.5625,B.cs(new C.f1O(this)),null),null)},
cDG(){var w,v,u,t,s,r,q=null,p=A.c.j(0.05),o=B.m(18),n=B.L(A.bA,A.r,1),m=x.p,l=B.a([],m)
for(w=0;w<6;++w){v=this.as===w
u=v?G.uY:q
t=new B.aN(14,14)
s=D.dmR[w]
r=v?A.c:A.aD
r=B.X(s.a,r,q,q,q,19)
v=v?A.c:A.aD
l.push(new B.bz(1,A.bc,B.aA(A.c5,B.cT(q,B.x(B.a([r,A.cU,new B.qI(A.e2,A.A,A.f,B.d(s.b,q,q,q,q,q,q,new B.H(!0,v,q,q,q,q,10.5,A.H,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q),q,q,q),q)],m),A.m,q,A.e,A.Q,0,A.p),q,q,A.b3,new B.p(q,q,q,new B.be(t,t,t,t),q,u,A.n),D.bzD,q,q,q,q,A.hG,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.f1X(this,w),q,q,q,q,q,q,!1,A.a4),q))}return B.q(q,B.A(l,A.m,q,A.e,A.i,0,q,q),A.f,q,q,new B.p(p,q,n,o,q,q,A.n),q,q,q,D.bBM,A.me,q,q,q)},
aSB(){var w,v,u=this,t=null,s=u.cDG()
switch(u.as){case 0:w=u.bP3()
break
case 1:w=u.cJw()
break
case 2:w=u.cEs()
break
case 3:w=u.cnq()
break
case 4:w=u.c5b()
break
default:w=u.c86()
break}v=x.p
return B.by(A.tP,B.e8(B.x(B.a([s,B.E(B.cl(B.a([w],v),t,t,D.bCW,t,t,A.ah,!1),1)],v),A.m,t,A.e,A.i,0,A.p),D.Z6,!0),A.aq)},
aOF(){var w,v,u,t,s=this,r=null,q=s.Q?r:s.gcdF(),p=B.m(16)
q=B.E(B.aA(r,B.q(r,D.f8x,A.f,r,r,new B.p(A.c.j(0.08),r,B.L(A.aT,A.r,1),p,r,r,A.n),r,50,r,r,r,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,!1,A.a4),1)
p=s.Q?r:s.gbQV()
w=B.m(16)
v=B.a([new B.ac(0,A.G,A.bD.j(0.35),A.cA,16)],x.V)
u=x.p
t=B.a([],u)
if(s.Q)t.push(D.fex)
else t.push(D.bUD)
t.push(A.ae)
t.push(D.bL2)
return B.q(r,B.A(B.a([q,A.au,B.E(B.aA(r,B.q(r,B.A(t,A.m,r,A.bb,A.i,0,r,r),A.f,r,r,new B.p(r,r,r,w,v,G.uY,A.n),r,50,r,r,r,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,p,r,r,r,r,r,r,!1,A.a4),1)],u),A.m,r,A.e,A.i,0,r,r),A.f,r,r,D.b76,r,r,r,r,Aw.a08,r,r,r)},
b1D(){var w=null
return new B.D(V.a0G,B.A(B.a([B.aG(w,w,w,w,A.n5,w,w,w,new C.f1d(this),w,w,w,w,w,w),D.h_h,A.b5,D.c2s],x.p),A.m,w,A.e,A.i,0,w,w),w)},
B(d){var w=null
return B.c4(w,A.BZ,B.bm(!0,B.cs(new C.f2u(this)),!0,!1,A.ag,!0,!0),w,!1,!1,w,w)}}
C.bhC.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n=new B.e4()
n.d_(7)
w=e.a
v=e.b
u=A.j.V(w*v/55)
$.Q()
t=B.K()
s=this.b
t.r=A.c.j(0.16*s).gp(0)
r=B.K()
r.r=A.w.j(0.2*s).gp(0)
for(q=0;q<u;++q){s=n.ai()*w
p=n.ai()*v
o=(q&1)===0?t:r
d.ar(new B.a1(s,p,s+1.1,p+1.1),o)}},
aE(d){return d.b!==this.b}}
C.rV.prototype={
a7(){return"NgmyQuoteDeco."+this.b}}
C.mq.prototype={}
C.Ac.prototype={
aj(){var w=this
return B.I(["at",w.a.aa().ag(),"outline",w.b,"extras",w.c,"request",w.d],x.N,x.z)}}
C.o9.prototype={}
C.ww.prototype={
a7(){return"NgmySlidesAiExtra."+this.b}}
C.a92.prototype={}
C.asJ.prototype={}
C.a1B.prototype={
S(){return new C.aJ8(new B.au(A.aw,$.aw()),B.k8(!0,null,!0,!0,null,null,!1),D.dON,B.a([],x.s),B.ez([D.Jj],x.Q))}}
C.aJ8.prototype={
t(){var w=this.d
w.T$=$.aw()
w.P$=0
this.f.t()
this.a4()},
a1b(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$a1b=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hU().CH(90,700,700,A.eO),$async$a1b)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fp(),$async$a1b)
case 8:p=e
if(r.c!=null)r.m(new C.f8S(r,p,q))
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
return B.i($async$a1b,v)},
a1e(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a1e=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i=20-r.y.length
if(i<=0){w=1
break}t=4
n=i>1?i:null
w=7
return B.b(new B.hU().aJL(78,n,1100,1100),$async$a1e)
case 7:q=e
if(J.cr(q)){w=1
break}p=B.bq(r.y,!0,x.N)
n=J.aU(q)
case 8:if(!n.C()){w=9
break}o=n.gR(n)
if(J.ad(p)>=20){w=9
break}w=10
return B.b(o.fp(),$async$a1e)
case 10:m=e
l=o.b.toLowerCase()
if(A.a.c8(l,".png"))k="image/png"
else k=A.a.c8(l,".webp")?"image/webp":"image/jpeg"
J.c6(p,"data:"+k+";base64,"+A.cP.gcu().aN(m))
w=8
break
case 9:if(r.c!=null)r.m(new C.f8T(r,p))
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
return B.i($async$a1e,v)},
b6D(d){var w,v,u=null
if(d!=null&&A.a.q(d,","))try{w=B.fR(A.cI.aN(A.d.gan(d.split(","))),A.A,u,u,A.cj,A.c_,!0,u,!1,u,u)
return w}catch(v){}return D.bxN},
c5i(d,e,f,g){var w=e.length===0&&f.length===0?"rounded":e
return B.cz6(C.fOs(w,this.b6D(d),f),g)},
adE(d,e,f,g,h){var w=null,v=new C.f8Q(f,e),u=new C.f8R(f,e),t=A.c.j(0.05),s=B.m(12),r=B.m(12),q=B.m(12),p=h==null,o=B.L(p?A.bA:A.b8.j(0.6),A.r,1)
if(p)p=new B.a5(34,30,new B.an(A.a0,w,A.ad,A.f,B.a([B.at(B.X(f?A.zi:A.Pb,A.bW,w,w,w,26),w,w,w),D.exJ],x.p),w),w)
else p=this.c5i(g,v.$1(h),u.$1(h),34)
return B.aJ(!1,A.a3,!0,s,B.aP(!1,r,!0,B.q(w,B.A(B.a([B.E(B.at(p,w,w,w),1),D.bUk],x.p),A.m,w,A.e,A.i,0,w,w),A.f,w,w,new B.p(w,w,o,q,w,w,A.n),w,44,w,w,A.mZ,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.f8P(this,f,h,g,v,u,d),w,w,w,w,w,w,w),A.f,t,0,w,w,w,w,w,A.aj)},
aZN(d,e,f,g,h){var w,v,u,t,s,r,q,p=null,o=null,n=h==null
if(!n&&A.a.q(h,","))try{o=B.by(B.m(8),B.fR(A.cI.aN(A.d.gan(h.split(","))),A.A,p,p,A.cj,A.c_,!1,30,!1,p,30),A.aq)}catch(w){}v=A.c.j(0.05)
u=B.m(14)
t=B.m(14)
s=B.m(14)
r=B.L(n?A.bA:A.bg.j(0.6),A.r,1)
q=o
n=q==null?B.X(d,A.ev,p,p,p,20):q
n=B.a([n,A.ae,B.E(B.d(e,p,1,A.a2,p,p,p,A.KP,p,p,p),1)],x.p)
if(f!=null)n.push(B.aA(p,H.PW,A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,!1,A.a4))
return B.aJ(!1,A.a3,!0,u,B.aP(!1,t,!0,B.q(p,B.A(n,A.m,p,A.e,A.i,0,p,p),A.f,p,p,new B.p(p,p,r,s,p,p,A.n),p,50,p,p,A.kt,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,g,p,p,p,p,p,p,p),A.f,v,0,p,p,p,p,p,A.aj)},
a9H(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$a9H=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(C.fRU(),$async$a9H)
case 7:q=e
if(q==null||r.c==null){w=1
break}r.m(new C.f8y(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
p=B.ab(n)
if(r.c!=null)r.m(new C.f8z(r,p))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a9H,v)},
afE(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$afE=B.e(function(d,a0){if(d===1){s.push(a0)
w=t}for(;;)switch(w){case 0:f=A.a.i(r.d.a.a)
if(f.length<6&&r.e==null){r.m(new C.f8B(r))
w=1
break}if(r.x==null){m=B.ag("\\blogo\\b",!1,!1,!1,!1)
m=m.b.test(f)}else m=!1
if(m){r.m(new C.f8C(r))
w=1
break}m=r.e
l=m==null?null:m.c
if(l==null)l=""
q=l.length===0?f:f+"\n\nSOURCE DOCUMENT ("+m.a+"):\n"+l
r.m(new C.f8D(r))
t=4
m=r.ch
k=r.CW
j=r.x
i=r.y
p=B.a([],x.aD)
h=r.e
if((h==null?null:h.b)!=null){h=h.b
h.toString
J.c6(p,h)}w=7
return B.b(C.fNa(q,r.cx,j,new C.b3e(r.z,r.Q,r.as,r.at),new C.f8E(r),i,m,p,k),$async$afE)
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
n=B.ab(e)
if(r.c!=null)r.m(new C.f8F(r,n))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$afE,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=x.w,f=B.aH(d,A.eQ,g).w
g=B.aH(d,A.c1,g).w
w=B.at(B.q(h,h,A.f,h,h,new B.p(A.aT,h,h,B.m(99),h,h,A.n),h,4,h,h,h,h,h,40),h,h,h)
v=x.V
u=B.at(B.aA(h,B.q(h,D.bXD,A.f,h,h,new B.p(h,h,B.L(A.c.j(0.35),A.r,2),h,B.a([new B.ac(2,A.G,A.bg.j(0.5),A.I,24)],v),D.c6z,A.a7),h,84,h,h,h,h,h,84),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.f95(i),h,h,h,h,h,h,!1,A.a4),h,h,h)
t=x.p
s=B.a([],t)
if(i.e!=null)s.push(B.aG(h,h,h,h,H.PW,h,h,h,i.ax?h:new C.f96(i),h,h,h,h,"Remove document",h))
r=i.e
r=r==null?"Attach a PDF, Word or text file":r.a
q=i.ax?h:i.gbFQ()
v=B.a([new B.ac(0,A.G,A.b8.j(0.45),A.I,10)],v)
s.push(B.hb(B.aJ(!1,A.a3,!0,h,B.aP(!1,h,!0,B.q(h,B.X(i.e==null?A.wz:A.hI,A.c,h,h,h,20),A.f,h,h,new B.p(h,h,h,h,v,E.wR,A.a7),h,40,h,h,h,h,h,40),A.cR,!0,h,h,h,h,h,h,h,h,h,h,h,q,h,h,h,h,h,h,h),A.f,A.L,0,h,h,A.cR,h,h,A.aj),h,r,h,h))
v=B.A(s,A.m,h,A.e,A.Q,0,h,h)
s=A.c.j(0.05)
v=B.aM(h,A.Z,!1,h,!0,A.t,h,B.aO(),i.d,h,h,h,h,h,2,B.bt(h,h,h,h,h,h,h,h,!0,new B.b6(4,B.m(16),new B.ay(A.c.j(0.1),1,A.r,-1)),h,h,h,h,h,s,!0,h,h,h,h,new B.b6(4,B.m(16),D.b4z),h,h,h,h,h,h,h,h,Y.EB,"Type your idea here\u2026",h,h,h,h,h,h,h,h,h,!0,!0,!1,h,h,h,h,h,h,h,h,new B.D(A.iK,v,h),h,h,h,h,h),A.y,!0,h,!0,h,!1,i.f,A.ak,h,h,h,h,h,h,h,h,h,6,3,h,!1,"\u2022",h,h,h,h,h,!1,h,h,!1,h,!0,h,A.ac,h,h,h,h,h,h,h,h,h,h,h,D.aVA,!0,A.a5,h,A.ao,h,h,h,h)
s=i.x
r=s==null
q=r?"Add your logo":"Logo added"
r=r?h:new C.f97(i)
s=i.aZN(A.lm,q,r,i.gcnS(),s)
r=i.z
r=B.E(i.adE(new C.f99(i),i.Q,!1,i.x,r),1)
q=i.Q
q=B.E(B.x(B.a([s,A.an,B.A(B.a([r,A.bm,B.E(i.adE(new C.f9a(i),i.z,!0,i.x,q),1)],t),A.m,h,A.e,A.i,0,h,h)],t),A.m,h,A.e,A.i,0,A.p),1)
s=i.y
r=s.length
p=r===0
if(p)r="Add your pictures"
else{o=r===1?"":"s"
o=""+r+" picture"+o
r=o}s=p?h:A.d.gH(s)
p=i.y.length===0?h:new C.f9b(i)
s=i.aZN(A.uD,r,p,i.gco_(),s)
p=i.as
r=i.at
o=i.y
o=o.length===0?h:A.d.gH(o)
p=B.E(i.adE(new C.f9c(i),r,!1,o,p),1)
o=i.at
r=i.as
n=i.y
n=n.length===0?h:A.d.gH(n)
o=B.a([w,A.aB,D.fOW,A.ax,D.fRQ,A.bz,u,A.U,D.fQe,A.aB,v,A.bz,B.A(B.a([q,A.au,B.E(B.x(B.a([s,A.an,B.A(B.a([p,A.bm,B.E(i.adE(new C.f9d(i),r,!0,n,o),1)],t),A.m,h,A.e,A.i,0,h,h)],t),A.m,h,A.e,A.i,0,A.p),1)],t),A.E,h,A.e,A.i,0,h,h),A.an,D.fTM],t)
w=i.w.a
if(w.length!==0){v=B.m(999)
u=B.L(D.bph,A.r,1)
w=C.ai1(w)
w=w==null?h:w.b
A.d.v(o,B.a([A.X,new B.bL(A.a6,h,h,B.q(h,B.A(B.a([D.bYK,A.bm,B.d("Ending: "+(w==null?"":w),h,h,h,h,h,h,D.fxp,h,h,h),B.aP(!1,h,!0,D.erK,h,!0,h,h,h,h,h,h,h,h,h,h,h,new C.f9e(i),h,h,h,h,h,h,h)],t),A.m,h,A.e,A.Q,0,h,h),A.f,h,h,new B.p(D.bh9,h,u,v,h,h,A.n),h,h,h,h,D.bBr,h,h,h),h)],t))}o.push(A.bz)
o.push(D.fFr)
o.push(A.U)
w=B.a([],t)
for(m=0;m<6;++m){l=D.deA[m]
v=i.ch===l?A.b8:A.c.j(0.06)
u=i.ch===l
k=new B.ay(u?A.aD:A.bA,1,A.r,-1)
u=u?A.u:A.V
w.push(new B.bz(1,A.bc,new B.D(A.jo,B.aA(h,B.cT(A.A,B.d(""+l,h,h,h,h,h,h,new B.H(!0,A.c,h,h,h,h,h,u,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h),h,h,h),h,h,A.b3,new B.p(v,h,new B.bF(k,k,k,k),h,h,h,A.a7),A.eH,h,42,h,h,h,h,h,h),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.f9f(i,l),h,h,h,h,h,h,!1,A.a4),h),h))}o.push(B.A(w,A.m,h,A.e,A.i,0,h,h))
o.push(A.bz)
o.push(D.fYv)
o.push(A.U)
o.push(B.cs(new C.f9g(i)))
o.push(A.bz)
o.push(D.fMZ)
o.push(A.U)
w=B.a([i.b9z("auto","Let AI choose",A.ed,A.S2)],t)
for(v=x.O,m=0;m<11;++m){j=D.wV[m]
u=j.d
w.push(i.b9z(j.a,j.b,j.c,B.a([B.b0(A.d.gH(u).a),B.b0(A.d.gH(u).b)],v)))}o.push(B.bU(A.bG,w,A.bs,h,8,8))
o.push(A.aR)
w=A.c.j(0.04)
v=B.m(16)
u=B.L(i.r?A.bg.j(0.5):A.bA,A.r,1)
o.push(B.q(h,B.iQ(h,A.bg,h,h,h,new C.f98(i),D.bTN,D.fXK,h,D.fHO,i.r),A.f,h,h,new B.p(w,h,u,v,h,h,A.n),h,h,h,h,h,h,h,h))
w=i.cy
if(w!=null)A.d.v(o,B.a([A.aB,B.d(w,h,h,h,h,h,h,D.aUK,h,h,h)],t))
o.push(A.bz)
w=i.ax?h:i.gcdJ()
v=B.ft(h,h,A.b8,A.b8.j(0.5),h,h,h,h,h,A.c,h,h,h,h,new B.b9(B.m(18),A.a1),h,h,h,h,h)
u=i.ax
t=u?D.fen:A.HW
o.push(new B.a5(h,54,B.lR(t,B.d(u?i.ay:"Create my presentation",h,h,h,h,h,h,A.nf,h,h,h),w,v),h))
return new B.D(new B.R(0,0,0,f.f.d),B.q(h,B.bm(!0,B.cg(B.x(o,A.al,h,A.e,A.i,0,A.p),A.t,h,A.y,h,A.wl,h,h,A.ah),!0,!1,A.ag,!0,!1),A.f,h,new B.aY(0,680,0,g.a.b*0.92),D.aeo,h,h,h,h,h,h,h,h),h)},
bSE(d){var w,v,u,t,s,r,q=null,p=this.cx.q(0,d),o=new C.f8G(this,p,d)
if(d===D.DZ)return new C.aFG(p,o,q)
w=B.m(16)
v=p?E.wR:q
u=p?q:A.c.j(0.05)
t=B.L(p?A.aD:A.bA,A.r,1)
s=B.X(p?A.ee:C.hWx(d),A.c,q,q,q,20)
r=C.hWy(d)
return B.aA(q,B.cT(q,B.x(B.a([s,A.ax,B.ev(A.A,B.d(r,q,q,q,q,q,q,B.l(q,q,A.c,q,q,q,q,q,q,q,q,12,q,q,p?A.u:A.a8,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),A.f,A.e2)],x.p),A.m,q,A.bb,A.i,0,A.p),q,q,A.b3,new B.p(u,q,t,w,q,v,A.n),A.h1,q,64,q,q,A.hH,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,o,q,q,q,q,q,q,!1,A.a4)},
b9z(d,e,f,g){var w,v=null,u=this.CW===d,t=B.m(99),s=u?A.c.j(0.12):A.c.j(0.04),r=u?A.ab:A.bA
r=B.L(r,A.r,u?1.6:1)
w=B.q(v,B.X(f,A.c,v,v,v,14),A.f,v,v,new B.p(v,v,v,v,v,new B.a9(A.a6,A.aa,A.x,g,v,v),A.a7),v,26,v,v,v,v,v,26)
return B.aA(v,B.cT(v,B.A(B.a([w,Z.AD,B.d(e,v,v,v,v,v,v,B.l(v,v,A.c,v,v,v,v,v,v,v,v,12.5,v,v,u?A.u:A.a8,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.Q,0,v,v),v,v,A.b3,new B.p(s,v,r,t,v,v,A.n),A.eH,v,v,v,v,P.amP,v,v,v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.f8V(this,d),v,v,v,v,v,v,!1,A.a4)}}
C.a1A.prototype={
S(){return new C.aJ7(new B.au(A.aw,$.aw()))}}
C.aJ7.prototype={
t(){var w=this.d
w.T$=$.aw()
w.P$=0
this.a4()},
afF(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$afF=B.e(function(a2,a3){if(a2===1){s.push(a3)
w=t}for(;;)switch(w){case 0:a0=A.a.i(r.d.a.a)
if(J.ad(a0)<3){r.m(new C.f8r(r))
w=1
break}B.eY()
r.m(new C.f8s(r))
t=4
q=C.inZ(a0)
if(q!=null){k=r.a
j=k.c
k=k.d
i=B.ag("\\b(all|every|whole|entire)\\b.{0,30}\\b(slides?|presentation|deck|pages?)\\b|\\b(slides?|presentation|deck)\\b.{0,20}\\b(all|every|whole|entire)\\b",!0,!1,!1,!1)
h=a0.toLowerCase()
p=C.inJ(j,k-1,q,i.b.test(h))
if(!p){r.m(new C.f8t(r,q))
w=1
break}k=r.c
if(k!=null)B.a6(k,!1).O(r.a.c)
w=1
break}g=a0.toLowerCase()
k=B.ag("\\b(undo|un-do|bring (it |them |the .{0,30}?)?back|brings? back|put (it |them |the .{0,30}?)?back|restore|revert|go back|change (it|that|them) back|back the way|what it was|the way it was|previous version|before (you|the ai) (changed|change))\\b",!0,!1,!1,!1)
if(k.b.test(g)){k=r.a.c
C.hcU()
f=$.Dm.h(0,k.a)
o=f==null||J.cr(f)?null:J.fs(f)
if(o==null){r.m(new C.f8u(r))
w=1
break}n=C.inH(o,r.a.c)
C.inD(r.a.c.a)
$.hc8=!0
k=r.c
if(k!=null)B.a6(k,!1).O(n)
w=1
break}k=r.a
j=k.c
i=j.CW
if(i==null)i=""
k=k.d
j=C.hfT(j)
h=C.hfU(r.a.c)
e=C.hfV(r.a.c)
w=7
return B.b(C.bED(k,r.a.c.a,j,h,new C.f8v(r),i,e,a0),$async$afF)
case 7:m=a3
k=r.c
if(k!=null)B.a6(k,!1).O(m)
t=2
w=6
break
case 4:t=3
a1=s.pop()
l=B.ab(a1)
if(r.c!=null)r.m(new C.f8w(r,l))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$afF,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=x.w,h=B.aH(d,A.eQ,i).w
i=B.aH(d,A.c1,i).w
w=B.at(B.q(j,j,A.f,j,j,new B.p(A.aT,j,j,B.m(99),j,j,A.n),j,4,j,j,j,j,j,40),j,j,j)
v=x.p
u=B.A(B.a([B.q(j,D.aqU,A.f,j,j,D.b6M,j,34,j,j,j,j,j,34),A.au,D.bJe],v),A.m,j,A.e,A.i,0,j,j)
t=B.d("You're on slide "+k.a.d+". Ask for new slides, changes to any slide, a different style or another language.",j,j,j,j,j,j,Y.aaT,j,j,j)
s=A.c.j(0.05)
s=B.aM(j,A.Z,!0,j,!0,A.t,j,B.aO(),k.d,j,j,j,j,j,2,B.bt(j,j,j,j,j,j,j,j,!0,new B.b6(4,B.m(16),new B.ay(A.c.j(0.1),1,A.r,-1)),j,j,j,j,j,s,!0,j,j,j,j,new B.b6(4,B.m(16),Ax.adQ),j,j,j,j,j,j,j,j,Y.EB,"e.g. Add a slide after this one about how to sign up, and make the title slide more exciting.",j,j,j,j,j,j,j,j,j,!0,!0,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j),A.y,!0,j,!0,j,!1,j,A.ak,j,j,j,j,j,j,j,j,j,5,2,j,!1,"\u2022",j,j,j,j,j,!1,j,j,!1,j,!0,j,A.ac,j,j,j,j,j,j,j,j,j,j,j,D.aVA,!0,A.a5,j,A.ao,j,j,j,j)
r=B.a([],v)
for(q=0;q<6;++q){p=D.daG[q]
o=B.d(p,j,j,j,j,j,j,AD.Vo,j,j,j)
n=A.c.j(0.06)
r.push(B.n2(j,n,o,j,k.e?j:new C.f8x(k,p),j,j,Q.vP,j))}w=B.a([w,A.aB,u,A.an,t,A.aB,s,A.X,B.bU(A.bG,r,A.bs,j,8,8)],v)
u=k.r
if(u!=null)A.d.v(w,B.a([A.af,B.d(u,j,j,j,j,j,j,D.aUK,j,j,j)],v))
w.push(A.aR)
u=k.e
t=u?j:k.gcdK()
s=B.m(18)
r=B.m(18)
u=u?B.a([A.bg.j(0.5),A.eq.j(0.5)],x.O):D.cIn
o=B.a([new B.ac(0,A.G,A.bg.j(0.35),A.cA,16)],x.V)
n=A.c.j(0.22)
m=k.e
l=m?D.erG:D.bYj
n=B.q(j,l,A.f,j,j,new B.p(n,j,j,j,j,j,A.a7),j,30,j,j,j,j,j,30)
w.push(B.aJ(!1,A.a3,!0,j,B.aP(!1,s,!0,B.eJ(B.A(B.a([n,A.au,B.d(m?k.f:"Make the change",j,j,j,j,j,j,A.hk,j,j,j)],v),A.m,j,A.bb,A.i,0,j,j),j,new B.p(j,j,j,r,o,new B.a9(A.a6,A.aa,A.x,u,j,j),A.n),54,j,j),j,!0,j,j,j,j,j,j,j,j,j,j,j,t,j,j,j,j,j,j,j),A.f,A.L,0,j,j,j,j,j,A.aj))
return new B.D(new B.R(0,0,0,h.f.d),B.q(j,B.bm(!0,B.cg(B.x(w,A.al,j,A.e,A.i,0,A.p),A.t,j,A.y,j,A.wl,j,j,A.ah),!0,!1,A.ag,!0,!1),A.f,j,new B.aY(0,680,0,i.a.b*0.85),D.aeo,j,j,j,j,j,j,j,j),j)}}
C.b3e.prototype={}
C.aFG.prototype={
S(){return new C.bmn(null,null)}}
C.bmn.prototype={
gazs(){var w,v=this,u=v.d
if(u===$){w=B.bn(null,A.qt,null,1,null,v)
w.cP(0)
v.d!==$&&B.bG()
v.d=w
u=w}return u},
t(){this.gazs().t()
this.bzB()},
B(d){var w=null,v=this.a.d
return B.aA(w,B.c9(this.gazs(),new C.epi(this),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,!1,A.a4)}}
C.bjU.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o
for(w=this.b*2,v=e.a,u=e.b,t=0;t<7;++t){s=0.5+0.5*Math.sin(w+t*1.7)
r=D.dh4[t]
q=r.a*v
r=r.b*u
$.Q()
p=new B.ao(A.O,A.M,A.R,A.T,A.P)
p.r=D.ym.j(0.25+s*0.6).gp(0)
d.N(new B.o(q,r),1+s*1.4,p)
if(s>0.85){o=4*(s-0.85)/0.15
p.c=1
d.ah(new B.o(q-o,r),new B.o(q+o,r+0),p)
d.ah(new B.o(q,r-o),new B.o(q+0,r+o),p)}}},
aE(d){return d.b!==this.b}}
C.atg.prototype={
a7(){return"NgmyTextCommand."+this.b}}
C.a_Y.prototype={
S(){return new C.aDb()}}
C.aDb.prototype={
gajO(){var w,v="colorful",u=this.d
if(u===$){w=this.a.c.CW
w=C.aie(w==null?"":w,v)
u=w==null?null:w.b
u=this.d=u==null?v:u}return u},
gAM(){var w=this.e
return w===$?this.e=C.hfT(this.a.c).q(0,D.DZ):w},
a9u(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$a9u=B.e(function(a0,a1){if(a0===1){t.push(a1)
w=u}for(;;)switch(w){case 0:s.m(new C.dso(s))
u=3
r=A.d.fe(D.wV,new C.dsp(s))
q=B.d4(C.hfT(s.a.c),x.Q)
l=q
J.hk(l,D.DZ)
p=l
if(s.gAM())J.c6(p,D.DZ)
q=s.a.c.CW
if(q==null)q=""
k=r.a
j=s.gAM()?" with Luxury FX":""
i=s.a
h=i.d
i=C.hfU(i.c)
g=C.hfV(s.a.c)
w=6
return B.b(C.bED(h,s.a.c.a,p,i,null,q,g,'Change the look: use the style "'+k+'"'+j+". Keep every word, slide, bullet, picture and the logo exactly as they are."),$async$a9u)
case 6:o=a1
j=o.CW
q=j==null?"":j
q=C.aie(q,s.gajO())
f=q==null?null:q.b
n=f==null?s.gajO():f
if(!J.z(n,r.a)&&!s.gAM())throw B.W("The AI did not change the look. Try again.")
q=s.c
if(q!=null)B.a6(q,!1).O(o)
u=1
w=5
break
case 3:u=2
d=t.pop()
m=B.ab(d)
if(s.c!=null)s.m(new C.dsq(s,m))
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$a9u,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=B.S(d).ax.a===A.J,l=m?A.c:A.S,k=m?A.aS:A.am,j=m?A.S:A.c,i=B.m(28),h=B.L(m?A.bA:A.aO,A.r,1),g=x.p,f=B.E(B.x(B.a([B.d("Look and feel",n,n,n,n,n,n,B.l(n,n,l,n,n,n,n,n,n,n,n,20,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),A.bH,B.d("Your words, pictures and logo stay the same.",n,n,n,n,n,n,B.l(n,n,k,n,n,n,n,n,n,n,n,12.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],g),A.E,n,A.e,A.i,0,A.p),1),e=o.f?n:new C.dst(d)
e=B.A(B.a([f,B.aG(n,n,n,n,B.X(A.cz,k,n,n,n,n),n,n,n,e,n,n,n,n,n,n)],g),A.m,n,A.e,A.i,0,n,n)
f=B.a([],g)
for(w=0;w<11;++w){v=D.wV[w]
u=o.gajO()
t=o.f?n:new C.dsu(o,v)
f.push(new C.bv2(v,u===v.a,t,n))}f=B.kU(1.25,f,3,10,10,n,A.dW,!0)
u=B.m(18)
t=o.gAM()?D.c9i:n
if(o.gAM())s=n
else s=m?A.bp:A.bO
r=B.X(A.ed,o.gAM()?A.c:k,n,n,n,n)
q=B.d("Luxury FX",n,n,n,n,n,n,B.l(n,n,o.gAM()?A.c:l,n,n,n,n,n,n,n,n,n,n,n,A.H,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
q=B.E(B.x(B.a([q,B.d("Moving light and ornaments, a new royal look each time",n,n,n,n,n,n,B.l(n,n,o.gAM()?A.ab:k,n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],g),A.E,n,A.e,A.i,0,A.p),1)
p=o.gAM()
f=B.a([f,A.aB,B.q(n,B.A(B.a([r,A.au,q,B.b8T(n,A.c,n,A.bN,!1,A.y,n,n,n,n,n,n,o.f?n:new C.dsv(o),n,n,n,n,n,n,n,n,p)],g),A.m,n,A.e,A.i,0,n,n),A.f,n,n,new B.p(s,n,n,u,n,t,A.n),n,n,n,n,O.alz,n,n,n)],g)
u=o.r
if(u!=null)A.d.v(f,B.a([A.X,B.d(u,n,n,n,n,n,n,D.fxJ,n,n,n)],g))
f=B.cg(B.x(f,A.E,n,A.e,A.i,0,A.p),A.t,n,A.y,n,A.GR,n,n,A.ah)
u=o.f?n:o.gbEP()
t=B.bp(A.L,n,n,n,n,n,A.ag,n,new B.b9(B.m(16),A.a1),n,n,n)
s=B.m(16)
return B.bm(!0,B.q(n,B.x(B.a([new B.D(D.bED,e,n),new B.dp(1,A.cr,f,n),new B.D(A.GQ,new B.a5(1/0,50,B.bI(B.eJ(B.at(o.f?A.ty:D.fPr,n,n,n),n,new B.p(n,n,n,s,n,D.c7T,A.n),n,n,n),n,u,t),n),n)],g),A.m,n,A.e,A.Q,0,A.p),A.f,n,n,new B.p(j,n,h,i,n,n,A.n),n,n,n,A.us,n,n,n,n),!0,!1,A.ag,!0,!0)}}
C.bv2.prototype={
B(d){var w=null,v=this.c,u=A.d.gH(v.d),t=B.m(16),s=u.a,r=B.a([B.b0(s),B.b0(u.b)],x.O),q=this.d,p=B.L(q?A.c:A.L,A.r,2.5)
s=q?B.a([new B.ac(0,A.G,B.b0(s).j(0.5),A.I,12)],x.V):w
v=B.a([new B.bL(A.ly,w,w,B.X(v.c,A.ab,w,w,w,18),w),new B.bL(A.lz,w,w,B.d(v.b,w,w,w,w,w,w,D.fxG,w,w,w),w)],x.p)
if(q)v.push(D.b1K)
return B.aA(w,B.cT(w,new B.an(A.a0,w,A.ad,A.t,v,w),w,w,A.b3,new B.p(w,w,p,t,s,new B.a9(A.aA,A.aF,A.x,r,w,w),A.n),A.eH,w,w,w,w,A.cl,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,this.e,w,w,w,w,w,w,!1,A.a4)}}
C.epf.prototype={
aHg(d,e,f){return e+"@"+A.a.b0(A.o.ft(f==null?this.a.c:f,16),8,"0").toUpperCase()},
xc(d,e){return this.aHg(0,e,null)}}
C.aNL.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a4()},
aY(){this.b5()
this.b4()
this.bC()}}
C.b3a.prototype={
B(d){var w,v,u=null,t=C.heI(this.c)
if(t==null)w=D.bwf
else{w=B.aH(d,u,x.w).w.cON(D.bAX,D.fdx)
v=this.d
w=B.q8(new B.dx(!v,B.app(!1,t,!1,v,!1,390),u),w)}return B.ev(A.A,new B.a5(416,870,new C.bnY(w,u),u),A.f,A.dB)}}
C.bnY.prototype={
B(d){var w,v,u,t=null,s=B.a([],x.p)
for(w=0;w<3;++w){v=D.dtT[w]
u=new B.aN(3,3)
s.push(new B.cL(v.a,v.b,t,t,t,t,B.q(t,t,A.f,t,t,new B.p(t,t,t,new B.be(u,u,u,u),t,D.asS,A.n),t,v.c,t,t,t,t,t,5),t))}for(w=0;w<2;++w){v=D.dvh[w]
u=new B.aN(3,3)
s.push(new B.cL(t,v.a,-3,t,t,t,B.q(t,t,A.f,t,t,new B.p(t,t,t,new B.be(u,u,u,u),t,D.asS,A.n),t,v.b,t,t,t,t,t,5),t))}s.push(B.bR(0,B.c3(t,new B.p(t,t,t,B.m(64),D.d_x,D.c6g,A.n),A.bj),0,0,0))
s.push(B.bR(3,B.c3(t,new B.p(A.w,t,t,B.m(61),t,t,A.n),A.bj),3,3,3))
s.push(B.bR(13,B.by(B.m(51),B.e8(this.c,A.w,!0),A.aq),13,13,13))
u=B.m(20)
s.push(B.ap(t,B.at(B.q(D.b1V,B.q(t,t,A.f,t,t,D.b74,t,11,t,t,t,t,t,11),A.f,t,t,new B.p(A.w,t,t,u,t,t,A.n),t,36,t,t,t,t,t,122),t,t,t),t,t,0,0,25,t))
s.push(B.bR(13,new B.dx(!0,B.by(B.m(51),D.bxT,A.aq),t),13,13,13))
s.push(B.ap(22,new B.dx(!0,B.at(B.q(t,t,A.f,t,t,new B.p(A.ab,t,t,B.m(3),t,t,A.n),t,5,t,t,t,t,t,134),t,t,t),t),t,t,0,0,t,t))
return new B.an(A.a0,t,A.ad,A.f,s,t)}}
C.lu.prototype={
pW(){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=4280640491,j=4280172719,i=4294967295,h="Thank You",g=C.cD(),f=C.cD(),e=m.r
f=C.er(A.K,!1,e.l(),A.aG,"",k,42,A.bt,A.u,"",0.22,f,l,"","",0,!1,"",0,D.bk,j,2,"Your Presentation Title",0,0,"",D.n9,D.cW,0.84,0.08,0.26)
w=C.cD()
v=m.w
w=C.er(A.K,!1,v.l(),A.aG,"",k,20,A.bt,A.a8,"",0.12,w,l,"","",0,!1,"",0,D.bk,j,2,"Class \xb7 Subject \xb7 Date",0,0,"",D.dm,D.cW,0.76,0.12,0.56)
u=C.cD()
t=m.d
s=x.u
t=C.rW(i,l,0,0,B.a([f,w,C.er(A.bn,!1,4279310375,A.aG,"",t.j(0.8).l(),24,A.bt,A.a8,"",0.006,u,l,"","",0,!1,"",0,D.fJ,t.l(),3,"",0,0,"",D.ct,D.fi,0.3,0.35,0.72)],s),C.cD(),D.n8,"","","Welcome",D.dm)
u=C.cD()
u=C.er(A.bn,!1,e.l(),A.aG,"",k,34,A.bt,A.u,"",0.14,u,l,"","",0,!1,"",0,D.bk,j,2,"Agenda",0,0,"",D.ct,D.cW,0.84,0.08,0.08)
w=C.cD()
w=C.rW(i,l,0,0,B.a([u,C.er(A.bn,!0,v.l(),A.aG,"",k,22,A.bt,A.a8,"",0.6,w,l,"","",0,!1,"",0,D.bk,j,2,"1. Introduction\n2. Core concepts\n3. Case study\n4. Discussion\n5. Summary & Q&A",0,0,"",D.ve,D.cW,0.8,0.1,0.26)],s),C.cD(),D.n8,"","","Agenda",D.dm)
u=C.cD()
u=C.er(A.bn,!1,e.l(),A.aG,"",k,32,A.bt,A.u,"",0.14,u,l,"","",0,!1,"",0,D.bk,j,2,"Main Idea",0,0,"",D.ct,D.cW,0.84,0.08,0.08)
f=C.cD()
f=C.rW(i,l,0,0,B.a([u,C.er(A.bn,!0,v.l(),A.aG,"",k,21,A.bt,A.a8,"",0.62,f,l,"","",0,!1,"",0,D.bk,j,2,"\u2022 Supporting detail\n\u2022 Evidence or example\n\u2022 Why it matters",0,0,"",D.ct,D.cW,0.8,0.1,0.26)],s),C.cD(),D.n8,"","","Key Point 1",D.dm)
u=C.cD()
u=C.er(A.bn,!1,e.l(),A.aG,"",k,30,A.bt,A.u,"",0.12,u,l,"","",0,!1,"",0,D.bk,j,2,"Compare & Contrast",0,0,"",D.ct,D.cW,0.84,0.08,0.08)
r=C.cD()
r=C.er(A.bn,!0,v.l(),A.aG,"",k,18,A.bt,A.a8,"",0.62,r,l,"","",0,!1,"",0,D.bk,j,2,"Option A\n\n\u2022 Strength\n\u2022 Example",0,0,"",D.ct,D.cW,0.4,0.08,0.24)
q=C.cD()
q=C.rW(i,l,0,0,B.a([u,r,C.er(A.bn,!0,v.l(),A.aG,"",k,18,A.bt,A.a8,"",0.62,q,l,"","",0,!1,"",0,D.bk,j,2,"Option B\n\n\u2022 Strength\n\u2022 Example",0,0,"",D.ct,D.cW,0.4,0.52,0.24)],s),C.cD(),D.n8,"","","Key Point 2",D.dm)
r=C.cD()
r=C.er(A.K,!1,e.l(),A.aG,"",k,48,A.bt,A.u,"",0.2,r,l,"","",0,!1,"",0,D.bk,j,2,h,0,0,"",D.dm,D.cW,0.8,0.1,0.32)
e=C.cD()
p=C.Cn(l,l,l,l,D.DV,5,!1,l,l,l,l,l,g,l,!1,l,m.b,l,l,B.a([t,w,f,q,C.rW(i,l,0,0,B.a([r,C.er(A.K,!1,v.l(),A.aG,"",k,22,A.bt,A.a8,"",0.1,e,l,"","",0,!1,"",0,D.bk,j,2,"Questions?",0,0,"",D.ct,D.cW,0.7,0.15,0.58)],s),C.cD(),D.n8,"","",h,D.dm)],x.g),"class_"+m.a,l,!1,l)
for(g=p.r,f=g.length,e=m.e,w=m.f,o=0;o<g.length;g.length===f||(0,B.J)(g),++o){n=g[o]
n.e=e.l()
n.f=w.l()}return p}}
C.Fs.prototype={
ak(d){return this.e.$1(d)}}
C.ew.prototype={}
C.jb.prototype={}
C.Fj.prototype={
gaNg(){var w=this.c
if(!(A.a.i(w).length!==0)){w=C.ai1(this.a)
w=w==null?null:w.c
if(w==null)w=""}return w},
a4C(d,e,f,g){var w=this,v=e==null?w.a:e,u=g==null?w.b:g,t=f==null?w.c:f
return new C.Fj(v,u,t,d==null?w.d:d)},
Gc(d){return this.a4C(null,d,null,null)},
aFV(d){return this.a4C(null,null,null,d)},
cOL(d,e){return this.a4C(d,e,null,null)},
beU(d){return this.a4C(d,null,null,null)},
bf_(d){return this.a4C(null,null,d,null)}}
C.Ok.prototype={
S(){return new C.blJ(new B.eA(0,$.aw()),null,null)}}
C.blJ.prototype={
Y(){var w,v=this
v.a3()
w=v.q_(new C.e2L(v))
v.e!==$&&B.aQ()
v.e=w
if(v.a.e)w.fX(0)
else v.d.sp(0,3.2)},
t(){var w=this.e
w===$&&B.c()
w.t()
w=this.d
w.T$=$.aw()
w.P$=0
this.bz4()},
B(d){var w=C.ai1(this.a.c.a)
if(w==null)w=A.d.gH(D.If)
return B.cs(new C.e2K(this,w,C.hvg(this.a.c.d)))}}
C.btz.prototype={
B(d){return B.oe(A.Xj,this.e,new C.f7E(this,A.j.F(this.d*0.35,1.6)-0.3))}}
C.bgH.prototype={
a5(d,e){var w=this,v=w.c.a
switch(w.b){case"fireworks":w.aVf(d,e,v)
break
case"confetti":w.bLo(d,e,v)
break
case"crown":w.bN1(d,e,v)
break
case"aurora":w.bFU(d,e,v)
break
case"champagne":w.bJh(d,e,v)
break
case"diamonds":w.bPc(d,e,v)
break
case"starburst":w.cBi(d,e,v)
break
case"balloons":w.bG7(d,e,v)
break
case"galaxy":w.bUy(d,e,v)
break
case"redcarpet":w.csb(d,e,v)
break
case"coins":w.bKN(d,e,v)
break
case"lanterns":w.c3O(d,e,v)
break
case"hearts":w.c1j(d,e,v)
break
case"petals":w.cnh(d,e,v)
break
case"butterflies":w.bIf(d,e,v)
break
case"neon":w.c7R(d,e,v)
break
case"disco":w.bPn(d,e,v)
break
case"sunrise":w.cCY(d,e,v)
break
case"pearls":w.cmk(d,e,v)
break
case"snow":w.cB_(d,e,v)
break
case"laurel":w.c3U(d,e,v)
break
case"ribbons":w.cuI(d,e,v)
break
case"kente":w.c3C(d,e,v)
break
case"trophy":w.cGH(d,e,v)
break
case"shooting":w.cyK(d,e,v)
break
case"bokeh":w.bGt(d,e,v)
break
case"orbits":w.cjX(d,e,v)
break
case"flowers":w.bTM(d,e,v)
break
case"music":w.c7z(d,e,v)
break
case"mandala":w.c5Z(d,e,v)
break
case"sparklers":w.cB6(d,e,v)
break
case"city":w.bK3(d,e,v)
break}},
t8(d,e,f,g,h){var w,v,u,t,s
if(h<=0.01)return
w=$.Q()
v=B.K()
v.r=g.j(A.j.E(h,0,1)).gp(0)
v.a=A.p5
u=new B.aF(w.r,A.ai,null,null,B.a([],x.v))
w=e.a
t=e.b
s=t-f
u.D(new B.aZ(w,s))
u.D(new B.c5(w,t,w+f,t))
u.D(new B.c5(w,t,w,t+f))
u.D(new B.c5(w,t,w-f,t))
u.D(new B.c5(w,t,w,s))
u.D(new B.bv())
d.af(u,v)
d.N(e,f*0.18,v)},
m0(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o=e.a,n=e.b,m=Math.min(o,n)
for(w=Math.max(4,A.j.V(g*this.d)),v=i+3,u=i+4,t=i+1,s=i+2,r=i+5,q=0;q<w;++q){p=(Math.sin(f*(1.2+C.cY(q,v)*2.5)+C.cY(q,u)*6.28)+1)/2
this.t8(d,new B.o(C.cY(q,t)*o,C.cY(q,s)*n),m*(0.006+0.014*C.cY(q,r))*(0.5+p),h,p*p)}},
aVf(c0,c1,c2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7=c1.a,b8=c1.b,b9=Math.min(b7,b8)
this.m0(c0,c1,c2,40,A.c,10)
w=x.O
v=[B.a([A.bN,A.av],w),B.a([A.ir,A.bD],w),B.a([A.eE,A.aH],w),B.a([A.c,A.aC],w)]
for(u=b9*0.005,t=b9*0.012,s=c2*30,r=46*this.d,q=b9*0.08,p=b9*0.04,o=b9*0.006,n=b9*0.008,m=0;m<7;++m){l=c2+m*2.8/7
k=A.j.bh(l/2.8)
j=A.j.F(l,2.8)/2.8
i=m*97+k*13
h=b7*(0.15+0.7*C.cY(i,1))
g=h+b7*(C.cY(i,2)-0.5)*0.15
f=b8*(0.12+0.35*C.cY(i,3))
e=v[Math.abs(A.o.F(i,4))]
if(j<0.22){d=B.ks(new B.o(h,b8),new B.o(g,f),A.cw.aA(0,j/0.22))
d.toString
$.Q()
a0=new B.ao(A.O,A.M,A.R,A.T,A.P)
a0.sav(new B.a9(A.a6,A.aa,A.x,B.a([e[0].j(0),e[0]],w),null,null).aK(0,B.rY(new B.o(h,b8),d)))
a0.c=o
a0.d=A.bw
a1=B.ks(new B.o(h,b8),d,0.75)
a1.toString
c0.ah(a1,d,a0)
a1=new B.ao(A.O,A.M,A.R,A.T,A.P)
a1.r=A.c.gp(0)
c0.N(d,n,a1)}else{a2=(j-0.22)/0.78
a3=A.cw.aA(0,a2)
d=1-a2
a4=d*d
d=Math.max(4,A.j.V(r))
a1=C.cY(i,4)
if(a2<0.15){a5=1-a2/0.15
$.Q()
a6=new B.ao(A.O,A.M,A.R,A.T,A.P)
a6.r=e[0].j(0.5*a5).gp(0)
a6.y=new B.hw(A.G,p)
c0.N(new B.o(g,f),q*a5,a6)}for(a5=a2>0.45,a6=a4*0.8,a1=b9*(0.16+0.1*a1)*a3,a7=a2*a2*b9*0.12,a8=a7*0.8,a9=0;a9<d;++a9){b0=a9/d*3.141592653589793*2+C.cY(i,a9+10)*0.2
b1=a1*(0.75+0.25*C.cY(i,a9+60))
b2=new B.o(g+Math.cos(b0)*b1,f+Math.sin(b0)*b1+a7)
b3=Math.cos(b0)
b4=Math.sin(b0)
b5=(a9&1)===0?e[0]:e[1]
$.Q()
b6=new B.ao(A.O,A.M,A.R,A.T,A.P)
b6.r=b5.j(a6).gp(0)
b6.c=u
b6.d=A.bw
b6.a=A.p5
c0.ah(new B.o(g+b3*b1*0.82,f+b4*b1*0.82+a8),b2,b6)
if(a5&&C.cY(i,a9+120)>0.5)this.t8(c0,b2,t,A.c,a4*(0.5+0.5*Math.sin(s+a9)))}}}},
bLo(a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k=a1.a,j=a1.b,i=Math.min(k,j),h=A.j.F(a2*0.25,1.6)-0.3,g=0+k,f=0+j,e=$.Q(),d=B.K()
d.sav(new B.a9(A.aA,A.aF,A.x,D.do6,B.a([A.j.E(h-0.15,0,1),A.j.E(h,0,1),A.j.E(h+0.15,0,1)],x.x),null).aK(0,new B.a1(0,0,g,f)))
a0.ar(new B.a1(0,0,g,f),d)
d=Math.max(4,A.j.V(150*this.d))
for(g=a0.c,w=j+i*0.1,j=i*0.05,f=a2*4,v=x.v,u=0;u<d;++u){t=A.j.F(a2*(i*(0.08+0.12*C.cY(u,1)))+C.cY(u,2)*w,w)
s=C.cY(u,3)
r=Math.sin(a2*(0.8+C.cY(u,4))+u)
q=i*(0.012+0.012*C.cY(u,5))
p=Math.cos(a2*(2+3*C.cY(u,6))+u)
o=D.Ru[A.o.E(A.j.bh(C.cY(u,7)*5),0,4)]
J.bo(g.save())
g.translate(s*k+r*i*0.04,t-j)
g.rotate((a2*(0.6+C.cY(u,8)*2)+u)*180/3.141592653589793,0,0)
n=new B.ao(A.O,A.M,A.R,A.T,A.P)
t=Math.abs(p)
n.r=B.ar(o,A.c,t*0.4).j(0.95).gp(0)
if(A.o.F(u,5)===0){t=B.a([],v)
m=new B.aF(e.r,A.ai,null,null,t)
e=-q*2
t.push(new B.aZ(e,0))
m.ab()
for(l=1;l<=8;++l){s=new B.aq(e+l*q*0.5,Math.sin(l*1.2+f)*q*0.5)
t.push(s)
r=m.f
if(r!=null)s.ak(r)
m.ab()}e=$.Q()
t=new B.ao(A.O,A.M,A.R,A.T,A.P)
t.r=B.b0(n.r).gp(0)
t.b=A.a9
t.c=q*0.35
a0.af(m,t)}else a0.ar(B.bs(A.I,q*1.8*A.j.E(t,0.15,1),q),n)
g.restore()}this.m0(a0,a1,a2,25,A.bN,30)},
bN1(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=a9.a,a6=a9.b,a7=Math.min(a5,a6)
a5/=2
a6*=0.5
w=new B.o(a5,a6)
for(v=x.O,u=a7*1.2,t=b0*0.12,s=x.v,r=0;r<16;++r){q=r/16*3.141592653589793*2+t
p=$.Q()
o=B.a([],s)
n=new B.aF(p.r,A.ai,a4,a4,o)
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
p=new B.bv()
o.push(p)
o=n.f
if(o!=null)p.ak(o)
n.ab()
p=new B.ao(A.O,A.M,A.R,A.T,A.P)
p.sav(new B.c_(A.A,0.5,A.x,a4,0,B.a([A.bN.j(0.22),D.bjg],v),a4,a4).aK(0,B.bX(w,u)))
a8.af(n,p)}l=a7*0.28
k=a7*0.16
a5-=l/2
a6=a6-a7*0.15-k
j=new B.aF($.Q().r,A.ai,a4,a4,B.a([],s))
v=a6+k
j.D(new B.aZ(a5,v))
u=k*0.3
t=a6+u
j.D(new B.aq(a5,t))
p=a6+k*0.6
j.D(new B.aq(a5+l*0.22,p))
j.D(new B.aq(a5+l*0.5,a6))
j.D(new B.aq(a5+l*0.78,p))
p=a5+l
j.D(new B.aq(p,t))
j.D(new B.aq(p,v))
j.D(new B.bv())
i=A.j.E(b0/1.8,0,1)
t=i>=1
if(t){o=B.K()
o.sav(new B.a9(A.b7,A.b9,A.x,D.dmL,a4,a4).aK(0,new B.a1(a5,a6,p,v)))
a8.af(j,o)
for(v=[D.eI0,D.eB9,D.eRH],p=v.length,o=a6+k*0.78,m=a7*0.016,h=a7*0.005,g=o-h,f=0;f<p;++f){e=v[f]
d=e.b
e=a5+l*e.a
a0=new B.ao(A.O,A.M,A.R,A.T,A.P)
a0.r=d.gp(d)
a8.N(new B.o(e,o),m,a0)
a0=new B.ao(A.O,A.M,A.R,A.T,A.P)
a0.r=A.ab.gp(0)
a8.N(new B.o(e-h,g),h,a0)}for(v=[0,0.5,1],p=v.length,o=a7*0.014,f=0;f<p;++f){a1=v[f]
m=a1===0.5?0:u
h=new B.ao(A.O,A.M,A.R,A.T,A.P)
h.r=A.i5.gp(0)
a8.N(new B.o(a5+l*a1,a6+m),o,h)}}for(v=B.xI(j),u=B.a([],x.X),p=new B.rv(v,!1,u),o=v.a,m=a7*0.008;p.C();){h=p.c
if(h===0||p.f)B.bi(B.jG(y.M));--h
p.iy()
g=u[h].b
g===$&&B.c()
g=g.a.length()
e=v.b
a0=B.a([],s)
a2=new B.ao(A.O,A.M,A.R,A.T,A.P)
a2.b=A.a9
a2.c=m
a2.e=A.dP
a2.r=A.bN.gp(0)
a8.af(new B.aF(o,e,a4,new B.cu([new B.BQ(p,h),0,g*i,!0]),a0),a2)}if(t){a3=A.j.F(b0*0.5,1)
this.t8(a8,new B.o(a5+l*a3,a6+k*0.5),a7*0.04,A.c,Math.sin(a3*3.141592653589793))}this.m0(a8,a9,b0,45,A.bN,40)},
bFU(a6,a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=a7.a,a4=a7.b,a5=Math.min(a3,a4)
this.m0(a6,a7,a8,60,A.c,50)
w=[D.f3n,D.f35,D.f2Z,D.f4m]
for(v=a5*0.14,u=a5*0.06,t=a5*0.01,s=a3+10,r=a3/40,q=x.v,p=0;p<4;++p){o=w[p].a
n=o[0]
m=o[1]
l=o[2]
k=o[3]
o=$.Q()
j=B.a([],q)
i=new B.aF(o.r,A.ai,null,null,j)
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
i.ab()}}$.Q()
o=new B.ao(A.O,A.M,A.R,A.T,A.P)
o.b=A.a9
o.c=v
o.r=n.j(0.28).gp(0)
o.a=A.p5
o.y=new B.hw(A.G,u)
a6.af(i,o)
o=new B.ao(A.O,A.M,A.R,A.T,A.P)
o.b=A.a9
o.c=t
o.r=n.j(0.55).gp(0)
o.a=A.p5
o.y=new B.hw(A.G,t)
a6.af(i,o)}for(v=Math.max(4,A.j.V(40*this.d)),a1=a4+20,u=a8*a5,a2=0;a2<v;++a2){t=A.j.F(u*(0.05+0.06*C.cY(a2,1))+C.cY(a2,2)*a1,a1)
s=C.cY(a2,3)
r=Math.sin(a8+a2)
q=C.cY(a2,4)
$.Q()
o=new B.ao(A.O,A.M,A.R,A.T,A.P)
o.r=A.w9.j(0.4+0.5*C.cY(a2,5)).gp(0)
o.a=A.p5
a6.N(new B.o(s*a3+r*a5*0.02,a4-t),a5*(0.003+0.004*q),o)}},
bJh(d,a0,a1){var w,v,u,t,s,r,q,p,o,n=null,m=a0.a,l=a0.b,k=Math.min(m,l),j=Math.sin(a1*1.5),i=m/2,h=l*0.5,g=k*0.55,f=$.Q(),e=B.K()
e.sav(new B.c_(A.A,0.5,A.x,n,0,B.a([A.i3.j(0.25+0.1*j),D.Zi],x.O),n,n).aK(0,B.bX(new B.o(i,h),g)))
d.N(new B.o(i,h),g,e)
for(j=k*0.008,i=a1*3,h=x.v,g=f,w=0;w<6;++w){v=(w&1)===0
f=B.a([],h)
u=new B.aF(g.r,A.ai,n,n,f)
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
u.ab()}g=$.Q()
f=new B.ao(A.O,A.M,A.R,A.T,A.P)
f.b=A.a9
f.c=j
f.r=D.Ru[A.o.F(w,4)].j(0.7).gp(0)
d.af(u,f)}for(j=Math.max(4,A.j.V(110*this.d)),i=l*0.08,q=l*1.1,h=a1*2,w=0;w<j;++w){p=l-A.j.F(a1*(k*(0.07+0.12*C.cY(w,1)))+C.cY(w,2)*q,q)
s=m*(0.1+0.8*C.cY(w,3))+Math.sin(h+w)*k*0.015
o=k*(0.004+0.012*C.cY(w,4))
if(p<i){this.t8(d,new B.o(s,p),o*2.4,A.bN,A.j.E(p/i,0,1))
continue}$.Q()
g=new B.ao(A.O,A.M,A.R,A.T,A.P)
g.b=A.a9
f=o*0.25
g.c=Math.max(0.8,f)
g.r=A.u6.j(0.75).gp(0)
d.N(new B.o(s,p),o,g)
g=o*0.35
e=new B.ao(A.O,A.M,A.R,A.T,A.P)
e.r=A.c.j(0.8).gp(0)
d.N(new B.o(s-g,p-g),f,e)}},
bPc(b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=null,a7=b1.a,a8=b1.b,a9=Math.min(a7,a8)
this.m0(b0,b1,b2,30,A.ld,60)
for(w=Math.max(4,A.j.V(42*this.d)),v=b0.c,u=b2*2.2,t=b2*a9,s=b2*0.7,r=b2*0.8,q=x.v,p=0;p<w;++p){o=a9*(0.025+0.035*C.cY(p,1))
n=a8+o*4
m=A.j.F(t*(0.04+0.06*C.cY(p,2))+C.cY(p,3)*n,n)-o*2
l=C.cY(p,4)*a7+Math.sin(s+p)*a9*0.02
J.bo(v.save())
v.translate(l,m)
v.rotate(Math.sin(r+p)*0.5*180/3.141592653589793,0,0)
k=o*1.2
j=-k
i=j*0.35
h=$.Q()
g=B.a([],q)
f=new B.aF(h.r,A.ai,a6,a6,g)
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
a2=new B.bv()
g.push(a2)
g=f.f
if(g!=null)a2.ak(g)
f.ab()
g=new B.ao(A.O,A.M,A.R,A.T,A.P)
g.sav(new B.a9(A.aA,A.aF,A.x,D.dic,a6,a6).aK(0,B.bs(A.I,k*1.2,o)))
b0.af(f,g)
a4=new B.ao(A.O,A.M,A.R,A.T,A.P)
a4.b=A.a9
a4.c=Math.max(0.6,o*0.03)
a4.r=A.c.j(0.7).gp(0)
b0.ah(new B.o(e,i),new B.o(a0,i),a4)
b0.ah(new B.o(h,j),new B.o(0,a1),a4)
b0.ah(new B.o(d,j),new B.o(0,a1),a4)
v.restore()
a5=Math.sin(u+p*1.7)
if(a5>0.85)this.t8(b0,new B.o(l+o*0.2,m-o*0.3),o*0.9,A.c,(a5-0.85)/0.15)}},
cBi(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=e.a,g=e.b,f=Math.min(h,g)
h/=2
g/=2
w=new B.o(h,g)
for(v=x.v,u=a0*0.15,t=0;t<28;++t){s=t/28*3.141592653589793*2-u
r=(t&1)===0
q=r?0.05:0.025
p=$.Q()
o=B.a([],v)
n=new B.aF(p.r,A.ai,null,null,o)
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
p=new B.bv()
o.push(p)
o=n.f
if(o!=null)p.ak(o)
n.ab()
p=new B.ao(A.O,A.M,A.R,A.T,A.P)
p.r=A.bN.j(r?0.12:0.07).gp(0)
d.af(n,p)}for(v=f*0.008,l=0;l<3;++l){k=A.j.F(a0+l*0.6,1.8)/1.8
$.Q()
u=new B.ao(A.O,A.M,A.R,A.T,A.P)
u.b=A.a9
r=1-k
u.c=v*r
u.r=A.bN.j(r*0.6).gp(0)
d.N(w,f*(0.15+0.6*k),u)}j=A.j.bh(a0/2.4)
k=A.j.F(a0,2.4)/2.4
for(v=Math.max(4,A.j.V(70*this.d)),u=j+1,r=(1-k)*1.2,t=0;t<v;++t){s=C.cY(t,j)*3.141592653589793*2
i=f*(0.1+0.55*D.bxe.aA(0,k)*(0.5+0.5*C.cY(t,u)))
this.t8(d,new B.o(h+Math.cos(s)*i,g+Math.sin(s)*i),f*(0.01+0.012*C.cY(t,3)),D.Ru[A.o.E(A.j.bh(C.cY(t,4)*5),0,4)],r)}},
bG7(a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=null,a2=a6.a,a3=a6.b,a4=Math.min(a2,a3)
for(w=this.d,v=Math.max(4,A.j.V(22*w)),u=x.O,t=x.v,s=a7*2,r=a7*a4,q=a7*0.9,p=0;p<v;++p){o=a4*(0.045+0.035*C.cY(p,1))
n=a3+o*6
m=o*2
l=a3+m-A.j.F(r*(0.05+0.05*C.cY(p,2))+C.cY(p,3)*n,n)
k=C.cY(p,4)*a2+Math.sin(q+p*1.3)*a4*0.03
j=D.aA6[A.o.F(p,6)]
i=$.Q()
h=B.a([],t)
g=new B.aF(i.r,A.ai,a1,a1,h)
i=l+o*1.15
h.push(new B.aZ(k,i))
g.ab()
for(f=1;f<=6;++f){e=new B.aq(k+Math.sin(f*1.4+s+p)*o*0.15,i+f*o*0.35)
h.push(e)
d=g.f
if(d!=null)e.ak(d)
g.ab()}h=$.Q()
e=new B.ao(A.O,A.M,A.R,A.T,A.P)
e.b=A.a9
e.c=Math.max(0.7,o*0.03)
e.r=A.c.j(0.6).gp(0)
a5.af(g,e)
a0=B.bs(new B.o(k,l),o*2.3,m)
m=new B.ao(A.O,A.M,A.R,A.T,A.P)
e=B.ar(j,A.w,0.35)
e.toString
m.sav(new B.c_(D.b1Y,0.9,A.x,a1,0,B.a([A.c,j,e],u),X.azX,a1).aK(0,a0))
a5.bZ(a0,m)
m=B.a([],t)
h=new B.aF(h.r,A.ai,a1,a1,m)
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
i=new B.bv()
m.push(i)
m=h.f
if(m!=null)i.ak(m)
h.ab()
m=new B.ao(A.O,A.M,A.R,A.T,A.P)
m.r=B.ar(j,A.w,0.3).gp(0)
a5.af(h,m)}for(w=Math.max(4,A.j.V(60*w)),n=a3+20,a3=a5.c,v=a7*3,u=a4*0.012,t=a4*0.02,p=0;p<w;++p){s=A.j.F(r*(0.1+0.1*C.cY(p,11))+C.cY(p,12)*n,n)
q=C.cY(p,13)
J.bo(a3.save())
a3.translate(q*a2,s-10)
a3.rotate((v+p)*180/3.141592653589793,0,0)
s=B.bs(A.I,t,u)
$.Q()
q=new B.ao(A.O,A.M,A.R,A.T,A.P)
q.r=D.aA6[A.o.F(p,6)].j(0.85).gp(0)
a5.ar(s,q)
a3.restore()}},
bUy(b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=b1.a,a5=b1.b,a6=Math.min(a4,a5),a7=a4/2,a8=a5/2,a9=new B.o(a7,a8)
this.m0(b0,b1,b2,50,A.c,70)
for(w=[D.f3v,D.f3b,D.f3h],v=w.length,u=b2*0.3,t=x.O,s=0;s<v;++s){r=w[s].a
q=r[0]
p=r[1]
o=r[2]
n=r[3]
m=new B.o(a7+(p*a4+Math.sin(u)*a6*0.03),a8+o*a5)
r=a6*n
$.Q()
l=new B.ao(A.O,A.M,A.R,A.T,A.P)
l.sav(new B.c_(A.A,0.5,A.x,a3,0,B.a([q.j(0.32+0.08*Math.sin(b2)),q.j(0)],t),a3,a3).aK(0,B.bX(m,r)))
b0.N(m,r,l)}w=Math.max(4,A.j.V(420*this.d))
for(v=a6*0.6,u=b2*0.18,k=0;k<w;++k){j=A.o.F(k,3)
i=C.cY(k,1)
h=v*Math.pow(i,0.8)
g=j*3.141592653589793*2/3+i*5.5+u+(C.cY(k,2)-0.5)*0.5
r=Math.cos(g)
l=Math.sin(g)
f=B.ar(A.bN,A.eL,i)
f.toString
e=C.cY(k,3)
$.Q()
d=new B.ao(A.O,A.M,A.R,A.T,A.P)
d.r=f.j(0.5+0.5*C.cY(k,4)).gp(0)
d.a=A.p5
b0.N(new B.o(a7+r*h,a8+l*h*0.62),a6*(0.0025+0.004*e),d)}a7=a6*0.12
$.Q()
a8=B.K()
a8.sav(new B.c_(A.A,0.5,A.x,a3,0,B.a([A.u6.j(0.55),D.aj3],t),a3,a3).aK(0,B.bX(a9,a7)))
b0.N(a9,a7,a8)
a0=A.j.F(b2,3.5)/3.5
if(a0<0.25){a1=A.j.bh(b2/3.5)
a2=new B.o(a4*(0.1+0.5*C.cY(a1,9)),a5*0.1*C.cY(a1,8))
a4=B.ks(a2,a2.a2(0,new B.o(v,a6*0.3)),a0/0.25)
a4.toString
a5=B.ks(a2,a4,0.6)
a5.toString
a7=B.K()
a7.sav(new B.a9(A.a6,A.aa,A.x,B.a([A.c.j(0),A.c],t),a3,a3).aK(0,B.rY(a2,a4)))
a7.c=a6*0.005
a7.d=A.bw
b0.ah(a5,a4,a7)}},
csb(b8,b9,c0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=null,b5=b9.a,b6=b9.b,b7=Math.min(b5,b6)
for(w=x.O,v=-b7*0.05,u=b6*1.3,t=x.v,s=0;s<3;++s){r=b5*(0.2+s*0.3)
q=1.5707963267948966+Math.sin(c0*(0.5+s*0.15)+s*2)*0.45
p=$.Q()
o=B.a([],t)
n=new B.aF(p.r,A.ai,b4,b4,o)
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
p=new B.bv()
o.push(p)
o=n.f
if(o!=null)p.ak(o)
n.ab()
p=new B.ao(A.O,A.M,A.R,A.T,A.P)
p.sav(new B.c_(A.A,0.5,A.x,b4,0,B.a([A.u6.j(0.28),D.aj3],w),b4,b4).aK(0,B.bX(new B.o(r,v),u)))
p.a=A.p5
b8.af(n,p)}for(v=[!0,!1],r=v.length,p=b6*0.52,o=b7*0.012,m=b6*0.5,l=b6*0.55,k=0+b6,j=b5*0.16,i=j*0.55,h=j*0.9,g=j*0.62,f=j*0.95,e=b5-f,d=b5-g,a0=b5-h,a1=b5-i,a2=b5-j,a3=0;a3<r;++a3){a4=v[a3]
a5=a4?0:a2
a6=B.a([],w)
for(a7=0;a7<7;++a7)a6.push((a7&1)===0?A.ej:A.er)
a8=$.Q()
a9=B.a([],t)
n=new B.aF(a8.r,A.ai,b4,b4,a9)
a9.push(new B.aZ(a4?0:b5,0))
n.ab()
a8=new B.aq(a4?j:a2,0)
a9.push(a8)
b0=n.f
if(b0!=null)a8.ak(b0)
n.ab()
a8=a4?i:a1
a8=new B.c5(a8,l,a4?h:a0,b6)
a9.push(a8)
b0=n.f
if(b0!=null)a8.ak(b0)
n.ab()
a8=new B.aq(a4?0:b5,b6)
a9.push(a8)
b0=n.f
if(b0!=null)a8.ak(b0)
n.ab()
a8=new B.bv()
a9.push(a8)
a9=n.f
if(a9!=null)a8.ak(a9)
n.ab()
a8=new B.ao(A.O,A.M,A.R,A.T,A.P)
a8.sav(new B.a9(A.a6,A.aa,A.x,a6,b4,b4).aK(0,new B.a1(a5,0,a5+j,k)))
b8.af(n,a8)
a8=a4?g:d
a9=a4?f:e
b0=new B.ao(A.O,A.M,A.R,A.T,A.P)
b0.r=A.i3.gp(0)
b0.c=o
b0.d=A.bw
b8.ah(new B.o(a8,m),new B.o(a9,p),b0)}b1=new B.aF($.Q().r,A.ai,b4,b4,B.a([],t))
w=b6*0.78
b1.D(new B.aZ(b5*0.42,w))
b1.D(new B.aq(b5*0.58,w))
b1.D(new B.aq(b5*0.8,b6))
b1.D(new B.aq(b5*0.2,b6))
b1.D(new B.bv())
v=B.K()
v.sav(D.c7N.aK(0,new B.a1(0,w,0+b5,w+b6*0.22)))
b8.af(b1,v)
for(w=Math.max(4,A.j.V(80*this.d)),b2=b6+10,b6=c0*b7,v=c0*5,s=0;s<w;++s){b3=A.j.F(b6*(0.05+0.07*C.cY(s,1))+C.cY(s,2)*b2,b2)
t=C.cY(s,3)
r=Math.sin(c0+s)
p=Math.sin(v+s)
this.t8(b8,new B.o(b5*(0.15+0.7*t)+r*b7*0.01,b3),b7*(0.006+0.008*C.cY(s,4)),A.bN,0.3+0.7*((p+1)/2))}},
bKN(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=e.a,j=e.b,i=Math.min(k,j)
for(w=Math.max(4,A.j.V(55*this.d)),v=f*i,u=0;u<w;++u){t=i*(0.02+0.02*C.cY(u,1))
s=j+t*4
r=t*2
q=A.j.F(v*(0.12+0.12*C.cY(u,2))+C.cY(u,3)*s,s)-r
p=C.cY(u,4)*k
o=Math.cos(f*(2+3*C.cY(u,5))+u)
n=Math.abs(o)
m=B.bs(new B.o(p,q),r,r*A.j.E(n,0.12,1))
$.Q()
r=new B.ao(A.O,A.M,A.R,A.T,A.P)
r.sav(new B.a9(A.aA,A.aF,A.x,o>0?D.dyL:D.cOe,null,null).aK(0,m))
d.bZ(m,r)
r=-(t*0.22)
l=new B.ao(A.O,A.M,A.R,A.T,A.P)
l.b=A.a9
l.c=Math.max(0.6,t*0.08)
l.r=D.btS.gp(0)
d.bZ(new B.a1(m.a-r,m.b-r,m.c+r,m.d+r),l)
if(n>0.97)this.t8(d,new B.o(p+t*0.3,q-t*0.4),t*0.9,A.c,0.9)}this.m0(d,e,f,30,A.bN,110)},
c3O(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a3.a,a0=a3.b,a1=Math.min(d,a0)
this.m0(a2,a3,a4,50,A.c,120)
for(w=Math.max(4,A.j.V(26*this.d)),v=x.O,u=a4*a1,t=a4*0.6,s=a4*9,r=x.v,q=0;q<w;++q){p=a1*(0.035+0.035*C.cY(q,1))
o=a0+p*4
n=a0+p*2-A.j.F(u*(0.03+0.04*C.cY(q,2))+C.cY(q,3)*o,o)
m=C.cY(q,4)*d+Math.sin(t+q)*a1*0.03
l=0.8+0.2*Math.sin(s+q*3)
k=p*2.2
j=$.Q()
i=new B.ao(A.O,A.M,A.R,A.T,A.P)
i.sav(new B.c_(A.A,0.5,A.x,e,0,B.a([As.yj.j(0.45*l),D.ahD],v),e,e).aK(0,B.bX(new B.o(m,n),k)))
a2.N(new B.o(m,n),k,i)
i=B.a([],r)
h=new B.aF(j.r,A.ai,e,e,i)
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
k=new B.bv()
i.push(k)
j=h.f
if(j!=null)k.ak(j)
h.ab()
k=new B.ao(A.O,A.M,A.R,A.T,A.P)
j=B.ar(D.bjv,A.c,0.2*l)
j.toString
k.sav(new B.a9(A.b7,A.b9,A.x,B.a([D.boS,j],v),e,e).aK(0,B.bs(new B.o(m,n),p*1.4,p)))
a2.af(h,k)
k=new B.ao(A.O,A.M,A.R,A.T,A.P)
k.r=A.c.j(l).gp(0)
a2.N(new B.o(m,n+p*0.55),p*0.12,k)}},
c1j(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
for(w=Math.max(4,A.j.V(40*this.d)),v=x.O,u=a3.c,t=x.v,s=a5*a2,r=a5*1.3,q=a5*6,p=0;p<w;++p){o=a2*(0.02+0.03*C.cY(p,1))
n=a1+o*4
m=A.j.F(s*(0.05+0.06*C.cY(p,2))+C.cY(p,3)*n,n)
l=C.cY(p,4)
k=Math.sin(r+p)
j=1+0.12*Math.max(0,Math.sin(q+p))
J.bo(u.save())
u.translate(l*a0+k*a2*0.03,a1+o*2-m)
u.rotate(Math.sin(a5+p)*0.3*180/3.141592653589793,0,0)
u.scale(j,j)
m=$.Q()
l=B.a([],t)
i=new B.aF(m.r,A.ai,d,d,l)
m=o*0.9
l.push(new B.aZ(0,m))
i.ab()
k=-o
h=k*0.2
g=k*1.6
k=new B.kR(k*1.8,h,k*0.9,g,0,k*0.55)
l.push(k)
f=i.f
if(f!=null)k.ak(f)
i.ab()
m=new B.kR(m,g,o*1.8,h,0,m)
l.push(m)
k=i.f
if(k!=null)m.ak(k)
i.ab()
m=new B.bv()
l.push(m)
l=i.f
if(l!=null)m.ak(l)
i.ab()
e=D.d8n[A.o.F(p,5)]
m=new B.ao(A.O,A.M,A.R,A.T,A.P)
l=B.ar(e,A.w,0.25)
l.toString
m.sav(new B.c_(A.tM,0.5,A.x,d,0,B.a([A.c,e,l],v),M.a4Y,d).aK(0,B.bX(A.I,o*1.4)))
a3.af(i,m)
u.restore()}this.m0(a3,a4,a5,30,A.ir,130)},
cnh(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=a0.a,f=a0.b,e=Math.min(g,f)
for(w=Math.max(4,A.j.V(70*this.d)),v=d.c,u=x.v,t=a1*e,s=a1*0.9,r=a1*2,q=0;q<w;++q){p=e*(0.015+0.02*C.cY(q,1))
o=f+p*4
n=A.j.F(t*(0.05+0.06*C.cY(q,2))+C.cY(q,3)*o,o)
m=C.cY(q,4)
l=Math.sin(s+q*0.7)
J.bo(v.save())
v.translate(m*g+l*e*0.06,n-p*2)
v.rotate((a1*(0.5+C.cY(q,5))+q)*180/3.141592653589793,0,0)
n=Math.cos(r+q)
v.scale(1,0.4+0.6*Math.abs(n))
n=$.Q()
m=B.a([],u)
k=new B.aF(n.r,A.ai,h,h,m)
n=-p
m.push(new B.aZ(0,n))
k.ab()
l=n*0.2
j=new B.c5(p,l,0,p)
m.push(j)
i=k.f
if(i!=null)j.ak(i)
k.ab()
n=new B.c5(n,l,0,n)
m.push(n)
l=k.f
if(l!=null)n.ak(l)
k.ab()
n=new B.bv()
m.push(n)
m=k.f
if(m!=null)n.ak(m)
k.ab()
n=new B.ao(A.O,A.M,A.R,A.T,A.P)
m=(q&1)===0?D.cIm:D.djA
n.sav(new B.a9(A.a6,A.aa,A.x,m,h,h).aK(0,B.bX(A.I,p)))
d.af(k,n)
v.restore()}this.m0(d,a0,a1,25,A.bN,140)},
bIf(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=null,a8=b2.a,a9=b2.b,b0=Math.min(a8,a9)
this.m0(b1,b2,b3,40,A.bN,150)
for(w=Math.max(4,A.j.V(16*this.d)),v=b1.c,u=x.v,t=b3*9,s=b3*0.5,r=0;r<w;++r){q=b0*(0.035+0.025*C.cY(r,1))
p=Math.sin(b3*(0.15+0.1*C.cY(r,2))+r*2.1)
o=Math.sin(b3*(0.21+0.1*C.cY(r,3))+r*1.3)
n=0.25+0.75*Math.abs(Math.cos(t+r))
J.bo(v.save())
v.translate(a8*(0.5+0.45*p),a9*(0.5+0.42*o))
v.rotate(Math.sin(s+r)*0.4*180/3.141592653589793,0,0)
for(p=[-1,1],o=p.length,m=-q,l=q*1.4,k=0+l,j=m+q*2,i=q*0.04,h=(r&1)===0,g=q*0.2,f=q*0.8,e=q*1.2,d=m*1.3,a0=m*0.1,a1=0;a1<o;++a1){a2=p[a1]
J.bo(v.save())
v.scale(a2*n,1)
a3=$.Q()
a4=B.a([],u)
a5=new B.aF(a3.r,A.ai,a7,a7,a4)
a4.push(new B.aZ(0,0))
a5.ab()
a3=new B.kR(e,d,l,a0,g,0)
a4.push(a3)
a6=a5.f
if(a6!=null)a3.ak(a6)
a5.ab()
a3=new B.kR(q,g,f,q,0,g)
a4.push(a3)
a6=a5.f
if(a6!=null)a3.ak(a6)
a5.ab()
a3=new B.bv()
a4.push(a3)
a4=a5.f
if(a4!=null)a3.ak(a4)
a5.ab()
a3=new B.ao(A.O,A.M,A.R,A.T,A.P)
a3.sav(new B.a9(A.a6,A.aa,A.x,h?D.dji:D.dme,a7,a7).aK(0,new B.a1(0,m,k,j)))
b1.af(a5,a3)
a3=new B.ao(A.O,A.M,A.R,A.T,A.P)
a3.b=A.a9
a3.c=Math.max(0.6,i)
a3.r=D.BR.gp(0)
b1.af(a5,a3)
v.restore()}$.Q()
p=new B.ao(A.O,A.M,A.R,A.T,A.P)
p.r=D.bt6.gp(0)
p.c=q*0.1
p.d=A.bw
b1.ah(new B.o(0,m*0.3),new B.o(0,q*0.4),p)
v.restore()}},
c7R(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=e.a,i=e.b,h=Math.min(j,i),g=new B.o(j/2,i/2)
for(w=f*0.45,v=h*0.012,u=0;u<4;++u){t=A.j.F(w+u/4,1)
s=h*(0.2+0.7*t)
$.Q()
r=new B.ao(A.O,A.M,A.R,A.T,A.P)
r.b=A.a9
r.c=v
r.r=D.aBf[u].j((1-t)*0.9).gp(0)
r.y=new B.hw(A.G,v)
q=s*0.3
d.am(B.bl(B.bs(g,s,s*1.6),new B.aN(q,q)),r)}p=j/28
for(j=p*0.15,w=p*0.7,v=p*0.3,q=h*0.01,o=0;o<28;++o){n=i*(0.05+0.18*(0.5+0.5*Math.sin(f*(3+C.cY(o,1)*4)+o)))
m=D.aBf[A.o.F(o,4)]
l=o*p+j
k=i-n
k=B.bl(new B.a1(l,k,l+w,k+n),new B.aN(v,v))
$.Q()
l=new B.ao(A.O,A.M,A.R,A.T,A.P)
l.r=m.j(0.85).gp(0)
l.y=new B.hw(A.adE,q)
d.am(k,l)}},
bPn(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a3.a,a0=a3.b,a1=Math.min(d,a0)
d/=2
w=a1*0.12
v=new B.o(d,w)
u=a1*0.09
for(t=Math.max(4,A.j.V(60*this.d)),s=a4*0.6,a0*=0.55,r=a1*0.004,q=0;q<t;++q){p=C.cY(q,1)*3.141592653589793*2+s
o=a1*(0.2+0.8*C.cY(q,2))
n=Math.cos(p)
m=Math.sin(p)
l=[A.c,A.bN,A.o5,A.dk][A.o.F(q,4)]
k=C.cY(q,3)
$.Q()
j=new B.ao(A.O,A.M,A.R,A.T,A.P)
j.r=l.j(0.75).gp(0)
j.a=A.p5
j.y=new B.hw(A.G,r)
a2.N(new B.o(d+n*o*1.4,a0+m*o*0.5),a1*(0.008+0.01*k),j)}a0=$.Q()
t=B.K()
t.r=A.aD.gp(0)
t.c=1.2
a2.ah(new B.o(d,0),new B.o(d,w-u),t)
t=B.K()
t.r=A.db.gp(0)
a2.N(v,u,t)
t=a2.c
J.bo(t.save())
a0=new B.aF(a0.r,A.ai,null,null,B.a([],x.v))
a0.D(new B.jP(B.bX(v,u)))
a2.mQ(0,a0)
i=u/4
for(a0=a4*i*2,s=i*0.9,r=a4*4,h=-4;h<4;++h)for(n=w+h*i,m=n+s,k=h*2.3,g=-6;g<6;++g){j=d+g*i+A.j.F(a0,i)
f=Math.sin(g*1.7+k+r)
$.Q()
e=new B.ao(A.O,A.M,A.R,A.T,A.P)
e.r=B.ar(A.bq,A.c,0.4+0.6*((f+1)/2)).gp(0)
a2.ar(new B.a1(j,n,j+s,m),e)}t.restore()
d=-u*0.4
this.t8(a2,v.a2(0,new B.o(d,d)),u*0.6,A.c,0.6+0.4*Math.sin(a4*5))},
cCY(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=a0.a,i=a0.b,h=Math.min(j,i),g=j/2,f=i*(1.05-0.25*A.cw.aA(0,A.j.E(a1/3,0,1))),e=new B.o(g,f)
for(w=a1*0.3,v=x.v,u=0;u<20;++u){t=3.141592653589793+u/19*3.141592653589793+Math.sin(w)*0.03
s=$.Q()
r=B.a([],v)
q=new B.aF(s.r,A.ai,k,k,r)
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
s=new B.bv()
r.push(s)
r=q.f
if(r!=null)s.ak(r)
q.ab()
s=new B.ao(A.O,A.M,A.R,A.T,A.P)
s.r=A.bN.j(0.1).gp(0)
d.af(q,s)}g=h*0.5
$.Q()
f=B.K()
f.sav(new B.c_(A.A,0.5,A.x,k,0,B.a([D.beM.j(0.6),D.ahD],x.O),k,k).aK(0,B.bX(e,g)))
d.N(e,g,f)
f=h*0.2
g=B.K()
g.sav(D.eyz.aK(0,B.bX(e,f)))
d.N(e,f,g)
for(g=a1*h*0.03,f=j*1.4,w=j*0.2,v=h*0.35,s=h*0.07,r=h*0.06,p=h*0.03,o=h*0.18,u=0;u<5;++u){n=A.j.F(g*(1+u*0.3)+C.cY(u,1)*j*1.4,f)-w
m=i*(0.15+0.12*u)
l=new B.ao(A.O,A.M,A.R,A.T,A.P)
l.r=A.c.j(0.18).gp(0)
d.bZ(B.bs(new B.o(n,m),s,v),l)
d.bZ(B.bs(new B.o(n+r,m-p),s,o),l)}this.m0(d,a0,a1,20,A.i5,180)},
cmk(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=a0.a,f=a0.b,e=Math.min(g,f)
for(w=g+10,v=g/30,u=x.v,t=0;t<4;++t){s=$.Q()
r=B.a([],u)
q=new B.aF(s.r,A.ai,h,h,r)
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
s=new B.bv()
r.push(s)
r=q.f
if(r!=null)s.ak(r)
q.ab()
$.Q()
s=new B.ao(A.O,A.M,A.R,A.T,A.P)
s.r=B.ar(A.cy,A.jf,t/3).j(0.55).gp(0)
d.af(q,s)}for(w=Math.max(4,A.j.V(45*this.d)),l=f*0.95,f*=0.9,v=a1*e,k=0;k<w;++k){j=e*(0.012+0.02*C.cY(k,1))
i=f-A.j.F(v*(0.04+0.05*C.cY(k,2))+C.cY(k,3)*l,l)
o=C.cY(k,4)*g+Math.sin(a1+k)*e*0.02
$.Q()
u=new B.ao(A.O,A.M,A.R,A.T,A.P)
u.sav(new B.c_(Ap.B8,0.5,A.x,h,0,D.dpP,h,h).aK(0,B.bX(new B.o(o,i),j)))
d.N(new B.o(o,i),j,u)}this.m0(d,a0,a1,25,A.c,190)},
cB_(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=e.a,g=e.b,f=Math.min(h,g)
for(w=Math.max(4,A.j.V(70*this.d)),v=d.c,u=a0*f,t=a0*0.7,s=a0*0.4,r=0;r<w;++r){q=f*(0.01+0.025*C.cY(r,1))
p=g+q*4
o=A.j.F(u*(0.03+0.05*C.cY(r,2))+C.cY(r,3)*p,p)
n=C.cY(r,4)
m=Math.sin(t+r)
$.Q()
l=new B.ao(A.O,A.M,A.R,A.T,A.P)
l.r=A.c.j(0.6+0.4*C.cY(r,5)).gp(0)
l.c=Math.max(0.8,q*0.12)
l.d=A.bw
J.bo(v.save())
v.translate(n*h+m*f*0.03,o-q*2)
v.rotate((s+r)*180/3.141592653589793,0,0)
for(o=-q,n=o*0.55,m=q*0.25,k=o*0.8,j=o*0.25,i=0;i<6;++i){v.rotate(59.99999999999999,0,0)
d.ah(A.I,new B.o(0,o),l)
d.ah(new B.o(0,n),new B.o(m,k),l)
d.ah(new B.o(0,n),new B.o(j,k),l)}v.restore()}this.m0(d,e,a0,40,A.eE,200)},
c3U(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
a0/=2
a1/=2
w=new B.o(a0,a1)
v=a2*0.4
for(u=[-1,1],t=u.length,s=13*A.j.E(a5/2,0,1),r=a3.c,q=a2*0.05,p=a2*0.02,o=q/2,n=-p,m=0+q,l=n+p*2,k=0;k<t;++k){j=u[k]
for(i=j>0,h=0;h<A.j.cL(s);++h){g=1.5707963267948966+j*(0.35+h/13*2.2)
f=Math.cos(g)
e=Math.sin(g)
J.bo(r.save())
r.translate(a0+f*v,a1+e*v)
r.rotate((g+(i?0.6:2.541592653589793))*180/3.141592653589793,0,0)
f=B.bs(new B.o(o,0),p,q)
$.Q()
e=new B.ao(A.O,A.M,A.R,A.T,A.P)
e.sav(D.c7A.aK(0,new B.a1(0,n,m,l)))
a3.bZ(f,e)
r.restore()}}$.Q()
a0=B.K()
a0.b=A.a9
a0.c=a2*0.003
a0.r=D.bjP.gp(0)
a3.N(w,v*1.08,a0)
d=a5*0.8
this.t8(a3,w.a2(0,new B.o(Math.cos(d)*v*1.08,Math.sin(d)*v*1.08)),a2*0.03,A.c,0.9)
this.m0(a3,a4,a5,40,A.bN,210)},
cuI(a6,a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=a7.a,a2=a7.b,a3=Math.min(a1,a2),a4=x.O,a5=[B.a([A.i3,A.i5],a4),B.a([A.pd,A.ir],a4),B.a([A.aE,A.eL],a4)]
for(w=a8*0.3,v=0+a1,u=0+a2,t=x.dB,s=t.k("bP<ak.E>"),r=t.k("ak.E"),q=a8*1.5,p=x.v,o=x.dN,n=0;n<3;++n){m=$.Q()
l=B.a([],p)
k=new B.aF(m.r,A.ai,null,null,l)
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
k.ab()}j.push(new B.o(f,e+d))}for(m=new B.ds(j,t),m=new B.bP(m,m.gI(0),s);m.C();){i=m.d
if(i==null)i=r.a(i)
i=new B.aq(i.a,i.b)
l.push(i)
g=k.f
if(g!=null)i.ak(g)
k.ab()}m=new B.bv()
l.push(m)
l=k.f
if(l!=null)m.ak(l)
k.ab()
$.Q()
m=new B.ao(A.O,A.M,A.R,A.T,A.P)
l=a5[n]
i=l[0]
m.sav(new B.a9(A.a6,A.aa,A.x,B.a([i,l[1],i],a4),At.zN,new B.mJ(w)).aK(0,new B.a1(0,0,v,u)))
m.r=A.c.j(0.85).gp(0)
a6.af(k,m)}this.m0(a6,a7,a8,40,A.c,220)},
c3C(b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=b1.a,a7=b1.b,a8=Math.min(a6,a7),a9=a8*0.09
for(w=[!0,!1],v=w.length,u=a9*2,t=a6+u,s=a9*0.5,r=a9*0.1,q=a9*0.35,p=a9*0.3,o=-a9*2,n=b2*a8,m=n*0.08,l=a7-a9,k=0;k<v;++k){j=w[k]
i=j?0:l
h=A.j.F(m,u)
g=o+(j?h:-h)
f=i+a9
e=i+q
d=e+p
for(;g<t;g=a1){a0=A.o.F(A.j.bh(g/s),5)
a1=g+s
$.Q()
a2=new B.ao(A.O,A.M,A.R,A.T,A.P)
a3=Math.abs(a0)
a2.r=D.a51[a3].gp(0)
b0.ar(new B.a1(g,i,a1,f),a2)
a2=g+r
a4=new B.ao(A.O,A.M,A.R,A.T,A.P)
a4.r=D.a51[A.o.F(a3+2,5)].gp(0)
b0.ar(new B.a1(a2,e,a2+p,d),a4)}}for(w=Math.max(4,A.j.V(36*this.d)),v=b2*3,a5=a7-u,a0=0;a0<w;++a0){a7=A.j.F(n*(0.04+0.05*C.cY(a0,1))+C.cY(a0,2)*a5,a5)
u=C.cY(a0,3)
t=C.cY(a0,4)
this.t8(b0,new B.o(u*a6,l-a7),a8*(0.01+0.012*t),D.a51[A.o.F(a0,3)===0?0:4],0.5+0.5*Math.sin(v+a0))}},
cGH(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=a5.a,a2=a5.b,a3=Math.min(a1,a2)
a1/=2
a2/=2
w=new B.o(a1,a2)
for(v=a6*0.2,u=a3*0.03,t=0;t<18;++t){s=t/18*3.141592653589793*2+v
r=Math.cos(s)
q=Math.sin(s)
$.Q()
p=new B.ao(A.O,A.M,A.R,A.T,A.P)
p.c=u
p.r=A.bN.j(0.06).gp(0)
a4.ah(w,new B.o(a1+r*a3*1.2,a2+q*a3*1.2),p)}o=a3*0.16
n=a3*0.17
a2=a2-n-n
m=new B.aF($.Q().r,A.ai,null,null,B.a([],x.v))
v=o/2
u=a1-v
m.D(new B.aZ(u,a2))
v=a1+v
m.D(new B.aq(v,a2))
r=a2+n*0.75
q=o*0.1
p=a1+q
l=a2+n*0.8
m.D(new B.c5(v,r,p,l))
v=a2+n*0.95
m.D(new B.aq(p,v))
p=o*0.3
k=a2+n
m.D(new B.aq(a1+p,k))
m.D(new B.aq(a1-p,k))
q=a1-q
m.D(new B.aq(q,v))
m.D(new B.aq(q,l))
m.D(new B.c5(u,r,u,a2))
m.D(new B.bv())
r=u+o
for(v=[-1,1],q=v.length,p=a3*0.012,l=a2+n*0.25,j=o*0.4,i=n*0.35,h=0;h<q;++h){g=v[h]
f=B.bs(new B.o(a1+g*o*0.5,l),i,j)
e=g<0?1.5707963267948966:-1.5707963267948966
d=new B.ao(A.O,A.M,A.R,A.T,A.P)
d.b=A.a9
d.c=p
d.r=A.aC.gp(0)
a4.cC(f,e,3.141592653589793,!1,d)}a1=B.K()
a1.sav(new B.a9(A.a6,A.aa,A.x,D.dsy,A.aAe,null).aK(0,new B.a1(u,a2,r,k)))
a4.af(m,a1)
a0=A.j.F(a6*0.6,1.4)
if(a0<1)this.t8(a4,new B.o(u+(r-u)*a0,a2+(k-a2)*0.3),a3*0.035,A.c,Math.sin(a0*3.141592653589793))
this.bLp(a4,a5,a6,60)},
bLp(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m=e.a,l=e.b,k=Math.min(m,l)
for(w=Math.max(4,A.j.V(g*this.d)),v=l+20,l=f*k,u=d.c,t=f*3,s=k*0.012,r=k*0.02,q=f*4,p=0;p<w;++p){o=A.j.F(l*(0.1+0.1*C.cY(p,31))+C.cY(p,32)*v,v)
n=C.cY(p,33)
J.bo(u.save())
u.translate(n*m,o-10)
u.rotate((t+p)*180/3.141592653589793,0,0)
o=B.bs(A.I,r*A.j.E(Math.abs(Math.cos(q+p)),0.2,1),s)
$.Q()
n=new B.ao(A.O,A.M,A.R,A.T,A.P)
n.r=D.Ru[A.o.F(p,5)].gp(0)
d.ar(o,n)
u.restore()}},
cyK(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=e.a,h=Math.min(i,e.b)
this.m0(d,e,f,70,A.c,250)
for(w=Math.max(4,A.j.V(12*this.d)),v=-h*0.1,u=h*1.4,t=-0.6*u,s=x.O,r=h*0.006,q=h*0.018,p=0;p<w;++p){o=1.6+C.cY(p,1)*1.6
n=A.j.F(f+C.cY(p,2)*o,o)/o
m=i*(C.cY(p*7+A.j.bh((f+C.cY(p,2)*o)/o),3)*1.2-0.1)
l=new B.o(m+t*n,v+u*n)
k=Math.max(0,n-0.18)
j=new B.o(m+t*k,v+u*k)
$.Q()
k=new B.ao(A.O,A.M,A.R,A.T,A.P)
k.sav(new B.a9(A.a6,A.aa,A.x,B.a([A.c.j(0),A.bN],s),null,null).aK(0,B.rY(j,l)))
k.c=r
k.d=A.bw
d.ah(j,l,k)
this.t8(d,l,q,A.c,1-n)}},
bGt(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=e.a,k=e.b,j=Math.min(l,k)
for(w=Math.max(4,A.j.V(36*this.d)),v=f*0.2,u=f*0.17,t=f*0.8,s=0;s<w;++s){r=j*(0.03+0.09*C.cY(s,1))
q=A.j.F(C.cY(s,2)*l+Math.sin(v+s)*j*0.12,l)
p=A.j.F(C.cY(s,3)*k+Math.cos(u+s*1.3)*j*0.1,k)
o=0.12+0.18*(0.5+0.5*Math.sin(t+s))
$.Q()
n=new B.ao(A.O,A.M,A.R,A.T,A.P)
m=A.o.F(s,5)
n.r=D.aD1[m].j(o).gp(0)
n.a=A.p5
n.y=new B.hw(A.G,r*0.12)
d.N(new B.o(q,p),r,n)
n=new B.ao(A.O,A.M,A.R,A.T,A.P)
n.b=A.a9
n.c=Math.max(0.6,r*0.05)
n.r=D.aD1[m].j(o*1.4).gp(0)
d.N(new B.o(q,p),r,n)}},
cjX(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=e.a,k=e.b,j=Math.min(l,k)
l/=2
k/=2
for(w=d.c,v=f*0.05,u=j*0.003,t=j*0.012,s=j*0.03,r=j*0.02,q=0;q<4;++q){J.bo(w.save())
w.translate(l,k)
w.rotate((q*3.141592653589793/4+v)*180/3.141592653589793,0,0)
p=B.bs(A.I,j*(0.28+q*0.05),j*(0.8+q*0.12))
$.Q()
o=new B.ao(A.O,A.M,A.R,A.T,A.P)
o.b=A.a9
o.c=u
o.r=A.bN.j(0.45).gp(0)
d.bZ(p,o)
n=f*(0.9+q*0.25)+q
m=new B.o(Math.cos(n)*(p.c-p.a)/2,Math.sin(n)*(p.d-p.b)/2)
o=new B.ao(A.O,A.M,A.R,A.T,A.P)
o.r=A.i5.gp(0)
d.N(m,t,o)
o=new B.ao(A.O,A.M,A.R,A.T,A.P)
o.r=A.i3.j(0.4).gp(0)
o.y=new B.hw(A.G,r)
d.N(m,s,o)
w.restore()}this.m0(d,e,f,45,A.bN,270)},
bTM(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=a5.a,a2=a5.b,a3=Math.min(a1,a2)
for(w=Math.max(4,A.j.V(22*this.d)),v=a4.c,u=x.O,t=a6*0.3,s=a1*0.94,r=a1*0.06,q=a2*0.92,p=a2*0.08,o=0;o<w;++o){n=A.o.F(o,4)
m=C.cY(o,1)
switch(n){case 0:l=new B.o(m*a1,p)
break
case 1:l=new B.o(m*a1,q)
break
case 2:l=new B.o(r,m*a2)
break
default:l=new B.o(s,m*a2)
break}k=A.j.F(a6+C.cY(o,2)*4,4)/4
j=A.e7.aA(0,A.j.E(k/0.4,0,1))
i=k>0.85?1-(k-0.85)/0.15:1
h=a3*(0.03+0.03*C.cY(o,3))*(j*i)
if(h<=0.5)continue
g=D.dga[A.o.F(o,5)]
J.bo(v.save())
v.translate(l.a,l.b)
v.rotate((t+o)*180/3.141592653589793,0,0)
for(l=-h*0.7,j=h*0.7,i=h*1.3,f=h*1.4,e=0;e<6;++e){v.rotate(59.99999999999999,0,0)
d=B.bs(new B.o(0,l),i,j)
$.Q()
a0=new B.ao(A.O,A.M,A.R,A.T,A.P)
a0.sav(new B.a9(A.b7,A.b9,A.x,B.a([A.c,g],u),null,null).aK(0,B.bs(new B.o(0,l),f,h)))
a4.bZ(d,a0)}$.Q()
l=new B.ao(A.O,A.M,A.R,A.T,A.P)
l.r=A.i3.gp(0)
a4.N(A.I,h*0.3,l)
v.restore()}this.m0(a4,a5,a6,30,A.i5,280)},
c7z(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=a5.a,a2=a5.b,a3=Math.min(a1,a2)
for(w=[0,1],v=w.length,u=a3*0.008,t=a6*0.6,s=a2/2,r=0;r<v;++r){q=w[r]
for(p=q===0,o=a1*q,n=0;n<4;++n){m=A.j.F(t+n/4,1)
l=B.bX(new B.o(o,s),a3*(0.1+0.6*m))
k=p?-1.0471975511965976:2.0943951023931953
$.Q()
j=new B.ao(A.O,A.M,A.R,A.T,A.P)
j.b=A.a9
j.c=u
j.r=D.azi[n].j((1-m)*0.8).gp(0)
a4.cC(l,k,2.0943951023931953,!1,j)}}for(w=Math.max(4,A.j.V(26*this.d)),i=a2+30,v=a6*a3,u=a6*1.5,t=a4.c,h=0;h<w;++h){g=a2-A.j.F(v*(0.06+0.06*C.cY(h,1))+C.cY(h,2)*i,i)
f=C.cY(h,3)*a1+Math.sin(u+h)*a3*0.04
e=a3*(0.015+0.012*C.cY(h,4))
d=D.azi[A.o.F(h,4)]
$.Q()
a0=new B.ao(A.O,A.M,A.R,A.T,A.P)
a0.r=d.gp(0)
J.bo(t.save())
t.translate(f,g)
t.rotate(-17.188733853924695,0,0)
a4.bZ(B.bs(A.I,e,e*1.5),a0)
t.restore()
s=f+e*0.65
p=g-e*2.6
o=new B.ao(A.O,A.M,A.R,A.T,A.P)
o.r=d.gp(0)
o.c=Math.max(1,e*0.18)
a4.ah(new B.o(s,g),new B.o(s,p),o)
if((h&1)===0){o=new B.ao(A.O,A.M,A.R,A.T,A.P)
o.r=d.gp(0)
o.c=Math.max(1,e*0.3)
a4.ah(new B.o(s,p),new B.o(f+e*1.6,g-e*2),o)}}},
c5Z(a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=a8.a,a5=a8.b,a6=Math.min(a4,a5)
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
d=$.Q()
a0=B.a([],s)
a1=new B.aF(d.r,A.ai,a3,a3,a0)
a0.push(new B.aZ(0,i))
a1.ab()
d=new B.c5(h,l,0,g)
a0.push(d)
a2=a1.f
if(a2!=null)d.ak(a2)
a1.ab()
d=new B.c5(j,l,0,i)
a0.push(d)
a0=a1.f
if(a0!=null)d.ak(a0)
a1.ab()
d=new B.ao(A.O,A.M,A.R,A.T,A.P)
d.b=A.a9
d.c=u
d.r=B.ar(A.bN,A.o5,m).j(0.7).gp(0)
a7.af(a1,d)
d=new B.ao(A.O,A.M,A.R,A.T,A.P)
d.r=A.i5.j(0.8).gp(0)
a7.N(new B.o(0,k),t,d)}v.restore()}a4=a6*0.17
$.Q()
a5=B.K()
a5.sav(new B.c_(A.A,0.5,A.x,a3,0,B.a([A.i3.j(0.25),D.Zi],x.O),a3,a3).aK(0,B.bX(w,a4)))
a7.N(w,a4,a5)
this.m0(a7,a8,a9,30,A.bN,300)},
cB6(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=b2.a,a9=b2.b,b0=Math.min(a8,a9)
for(w=[-1,1],v=w.length,u=70*this.d,t=b0*0.003,s=a8/2,a9*=0.95,r=b3*1.3,q=b0*0.008,p=b0*0.06,o=x.O,n=0;n<v;++n){m=w[n]
l=s+m*a8*0.34
k=Math.sin(r+m)*0.12
j=l+(Math.sin(k)*b0*0.45-m*b0*0.08)
i=a9+-Math.cos(k)*b0*0.45
h=new B.o(j,i)
$.Q()
g=new B.ao(A.O,A.M,A.R,A.T,A.P)
g.r=A.bq.gp(0)
g.c=q
g.d=A.bw
b1.ah(new B.o(l,a9),h,g)
g=new B.ao(A.O,A.M,A.R,A.T,A.P)
g.sav(new B.c_(A.A,0.5,A.x,null,0,B.a([A.i5,A.i3.j(0.6),D.Zi],o),null,null).aK(0,B.bX(h,p)))
b1.N(h,p,g)
for(l=Math.max(4,A.j.V(u)),f=0;f<l;++f){e=0.5+0.4*C.cY(f,1)
d=A.j.F(b3+C.cY(f,2)*e,e)/e
a0=A.j.bh((b3+C.cY(f,2)*e)/e)
a1=C.cY(f*31+a0,3)*3.141592653589793*2
a2=b0*(0.06+0.16*C.cY(f*17+a0,4))
g=Math.cos(a1)
a3=Math.sin(a1)
a4=j+Math.cos(a1)*a2*d
a5=i+Math.sin(a1)*a2*d
a6=new B.o(a4,a5)
a7=new B.ao(A.O,A.M,A.R,A.T,A.P)
a7.r=B.ar(A.i5,A.av,d).j(1-d).gp(0)
a7.c=Math.max(0.8,t)
a7.d=A.bw
a7.a=A.p5
b1.ah(new B.o(j+g*a2*d*0.6,i+a3*a2*d*0.6),a6,a7)
if(d>0.6){g=a1+0.7
b1.ah(a6,new B.o(a4+Math.cos(g)*a2*0.15,a5+Math.sin(g)*a2*0.15),a7)
g=a1-0.7
b1.ah(a6,new B.o(a4+Math.cos(g)*a2*0.15,a5+Math.sin(g)*a2*0.15),a7)}}}this.m0(b1,b2,b3,35,A.bN,310)},
bK3(a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=a8.a,a6=a8.b
this.aVf(a7,new B.av(a5,a6*0.75),a9*0.9)
w=Math.min(a5,a6)
for(v=w*0.01,u=w*0.008,t=w*0.012,s=w*0.016,r=w*0.025,q=w*0.035,p=0,o=0;p<a5;){n=w*(0.08+0.1*C.cY(o,1))
m=a6*(0.14+0.24*C.cY(o,2))
l=a6-m
k=new B.a1(p,l,p+n,l+m)
$.Q()
j=new B.ao(A.O,A.M,A.R,A.T,A.P)
j.sav(D.c8v.aK(0,k))
a7.ar(k,j)
i=A.j.bh(n/r)
h=A.j.bh(m/q)
for(j=p+u,l+=t,g=o*50,f=0;f<i;++f)for(e=j+f*w*0.025,d=e+t,a0=g+f,a1=f*1.7,a2=0;a2<h;++a2){if(!(Math.sin(a9*(0.3+C.cY(a0,a2))+a1+a2*2.3+o)>0.2))continue
a3=l+a2*w*0.035
$.Q()
a4=new B.ao(A.O,A.M,A.R,A.T,A.P)
a4.r=A.bN.j(0.85).gp(0)
a7.ar(new B.a1(e,a3,d,a3+s),a4)}p+=n+v;++o}},
aE(d){return d.b!==this.b||d.d!==this.d}}
C.b14.prototype={
B(d){var w,v=null,u=new C.ceQ(),t=new C.ceS(this,u,d),s=B.a([u.$4$child$label$onTap$selected(B.q(v,D.as_,A.f,A.c.j(0.05),v,v,v,v,v,v,v,v,v,v),"None",new C.ceR(this),this.c.a.length===0)],x.p)
for(w=0;w<32;++w)s.push(t.$1(D.If[w]))
return B.bU(A.bG,s,A.bs,v,12,10)}}
C.a_v.prototype={
S(){return new C.aBy()}}
C.aBy.prototype={
gwf(){var w=this.d
return w===$?this.d=this.a.c:w},
gb1I(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new B.au(new B.ba(w.b,A.b6,A.aQ),$.aw())}return v},
gazt(){var w,v,u=this,t=u.f
if(t===$){w=u.a.c.gaNg()
v=$.aw()
u.f!==$&&B.bG()
t=u.f=new B.au(new B.ba(w,A.b6,A.aQ),v)}return t},
t(){var w=this.gb1I(0),v=$.aw()
w.T$=v
w.P$=0
w=this.gazt()
w.T$=v
w.P$=0
this.a4()},
a00(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$a00=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hU().CH(90,700,700,A.eO),$async$a00)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fp(),$async$a00)
case 8:p=e
o=q.b.toLowerCase()
n=J.aj1(o,".png")?"image/png":"image/jpeg"
r.m(new C.dhC(r,n,p))
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
return B.i($async$a00,v)},
b1H(d){var w=null,v=A.c.j(0.07)
return B.bt(w,new B.b6(4,B.m(12),A.a1),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,A.Vz,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=C.ai1(p.gwf().a)
if(n==null)n=A.d.gH(D.If)
w=p.gwf()
v=p.r
u=x.p
v=B.E(new B.an(A.a0,o,A.ad,A.t,B.a([B.bR(0,new C.Ok(p.gwf(),!1,!0,new B.bM(w.a+v,x.W)),0,0,0),B.ap(o,B.ID(A.n5,new C.dhH(d),B.o_(o,A.aU,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o),o,o,8,o,8,o),B.ap(o,B.ID(A.aqS,new C.dhI(p),B.o_(o,A.aU,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),"Play again"),o,o,o,8,8,o)],u),o),1)
w=B.d(n.b,o,o,o,o,o,o,E.aVz,o,o,o)
t=B.E(B.aM(o,A.Z,!1,o,!0,A.t,o,B.aO(),p.gb1I(0),o,o,o,o,o,2,p.b1H("Big words"),A.y,!0,o,!0,o,!1,o,A.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.dhJ(p),o,o,o,!1,o,o,!1,o,!0,o,A.ac,o,o,o,o,o,o,o,o,o,o,o,A.fY,!0,A.a5,o,A.ao,o,o,o,o),1)
s=A.c.j(0.07)
r=B.L(A.i3.j(0.6),A.r,1)
if(p.gwf().d.length===0)q=D.bW0
else{q=C.hvg(p.gwf().d)
if(q==null)q=new Uint8Array(0)
q=B.hS(B.fR(q,A.A,o,o,A.cj,A.c_,!1,o,!1,o,o),A.aq)}r=B.a([t,A.ae,B.aA(o,B.q(o,q,A.f,o,o,new B.p(s,o,r,o,o,o,A.a7),o,48,o,o,o,o,o,48),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gcdL(),o,o,o,o,o,o,!1,A.a4)],u)
if(p.gwf().d.length!==0)r.push(B.aG(o,o,o,o,H.PW,o,o,o,new C.dhK(p),o,o,o,o,"Remove logo",o))
return B.c4(o,A.w,B.bm(!0,B.x(B.a([v,B.q(o,B.x(B.a([w,A.X,B.A(r,A.m,o,A.e,A.i,0,o,o),A.U,B.aM(o,A.Z,!1,o,!0,A.t,o,B.aO(),p.gazt(),o,o,o,o,o,2,p.b1H("Line under it"),A.y,!0,o,!0,o,!1,o,A.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.dhL(p),o,o,o,!1,o,o,!1,o,!0,o,A.ac,o,o,o,o,o,o,o,o,o,o,o,A.dg,!0,A.a5,o,A.ao,o,o,o,o),A.af,B.dh(D.bUV,D.fZq,new C.dhM(p,d),B.bp(A.aC,o,o,o,A.w,o,A.co,o,new B.b9(B.m(14),A.a1),o,o,o))],u),A.al,o,A.e,A.Q,0,A.p),A.f,o,o,D.b7g,o,o,o,o,A.GN,o,o,o)],u),A.m,o,A.e,A.i,0,A.p),!0,!1,A.ag,!0,!0),o,!1,!1,o,o)}}
C.aNf.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a4()},
aY(){this.b5()
this.b4()
this.bC()}}
C.a_Q.prototype={
S(){return new C.bid(new B.au(A.aw,$.aw()))}}
C.bid.prototype={
t(){var w=this.d
w.T$=$.aw()
w.P$=0
this.a4()},
B(d){var w,v,u,t,s,r,q,p,o=null,n=B.S(d).ax.a===A.J,m=n?A.c:A.S,l=n?A.aS:A.am,k=B.aH(d,A.c1,x.w).w,j=n?A.S:A.c,i=B.m(28),h=B.L(n?A.bA:A.aO,A.r,1),g=x.p,f=B.A(B.a([B.E(B.d("Choose an icon",o,o,o,o,o,o,B.l(o,o,m,o,o,o,o,o,o,o,o,19,o,o,A.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),1),B.aG(o,o,o,o,B.X(A.cz,l,o,o,o,o),o,o,o,new C.doq(d),o,o,o,o,o,o)],g),A.m,o,A.e,A.i,0,o,o),e=B.a([],g)
for(w=0;w<5;++w){v=D.d__[w]
u=B.d(v.a.toUpperCase(),o,o,o,o,o,o,new B.H(!0,l,o,o,o,o,10.5,A.u,o,1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o)
t=B.a([],g)
for(v=J.aU(v.b);v.C();){s=v.gR(v)
r=new B.aN(12,12)
q=new B.aN(12,12)
p=n?A.c.j(0.06):A.bO
t.push(B.aP(!1,new B.be(r,r,r,r),!0,B.q(A.A,B.d(s,o,o,o,o,o,o,A.pS,o,o,o),A.f,o,o,new B.p(p,o,o,new B.be(q,q,q,q),o,o,A.n),o,44,o,o,o,o,o,44),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.dor(this,s),o,o,o,o,o,o,o))}A.d.v(e,B.a([new B.D(A.hG,u,o),new B.CY(A.bG,6,6,A.bs,t,o)],g))}e.push(A.aB)
e.push(B.d("YOUR OWN",o,o,o,o,o,o,B.l(o,o,l,o,o,o,o,o,o,o,o,10.5,o,o,A.u,o,o,!0,o,1,o,o,o,o,o,o),o,o,o))
e.push(A.U)
v=B.l(o,o,m,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
u=n?A.bp:A.aP
e.push(B.A(B.a([B.E(B.aM(o,A.Z,!1,o,!0,A.t,o,B.aO(),this.d,o,o,o,o,o,2,B.bt(o,new B.b6(4,B.m(14),A.a1),o,o,o,o,o,o,!0,o,o,o,o,o,o,u,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,"Type or paste any icon",o,o,o,o,o,!0,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),A.y,!0,o,!0,o,!1,o,A.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,A.ac,o,o,o,o,o,o,o,o,o,o,o,v,!0,A.a5,o,A.ao,o,o,o,o),1),A.ae,B.bI(A.aWz,o,new C.dos(this),o)],g),A.m,o,A.e,A.i,0,o,o))
e.push(A.U)
return B.bm(!0,B.q(o,B.x(B.a([f,new B.dp(1,A.cr,B.cl(e,o,o,o,o,o,A.ah,!0),o)],g),A.E,o,A.e,A.Q,0,A.p),A.f,o,new B.aY(0,1/0,0,k.a.b*0.8),new B.p(j,o,h,i,o,o,A.n),o,o,o,A.us,A.a0l,o,o,o),!0,!1,A.ag,!0,!0)}}
C.bhy.prototype={
a5(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=new B.e4()
a1.d_(this.c)
w=this.b
v=w/6.283185307179586
$.Q()
u=B.K()
u.y=A.H4
t=B.K()
for(s=this.d,r=w*2,q=a3.a,p=a3.b,o=0;o<46;++o){n=a1.ai()
m=a1.ai()
l=a1.ai()
k=0.8+a1.ai()*2.2
j=Math.sin(w*(3+a1.aw(4))+o)
i=A.j.F(m-v*(0.4+l*0.9),1)
l=(n+Math.sin(r+o)*0.012)*q
h=i*p
g=new B.o(l,h)
if(a1.ai()<0.25){f=B.ar(s,A.c,0.85)
f.toString}else f=s
e=f.j(A.j.E(0.35+j*0.35,0.05,0.85))
u.r=e.j(e.a*0.5).gp(0)
a2.N(g,k*2.4,u)
t.r=e.gp(0)
a2.N(g,k,t)
if(j>0.85&&k>2){d=k*4*(j-0.85)/0.15
$.Q()
a0=new B.ao(A.O,A.M,A.R,A.T,A.P)
a0.r=e.gp(0)
a0.c=1
a2.ah(new B.o(l-d,h),new B.o(l+d,h+0),a0)
a2.ah(new B.o(l,h-d),new B.o(l+0,h+d),a0)}}},
aE(d){return d.b!==this.b}}
C.bhf.prototype={
a5(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=B.bl(new B.a1(0,0,0+a3.a,0+a3.b),A.jK),e=this.b,d=Math.sin(e*2),a0=$.Q(),a1=B.K()
a1.b=A.a9
a1.c=6
w=this.c
a1.r=w.j(0.12+(0.5+d*0.5)*0.18).gp(0)
a1.y=A.mf
a2.am(f,a1)
a1=x.v
a0=new B.aF(a0.r,A.ai,g,g,B.a([],a1))
a0.D(new B.j8(f))
v=new B.TO(new B.rv(B.xI(a0),!1,B.a([],x.X))).gH(0)
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
for(e=a0.a,r=e.a,q=t*0.14,p=0;p<2;++p){o=A.j.F(s+p*t/2,t)
for(n=0;n<10;n=m){m=n+1
l=m/10
$.Q()
k=new B.ao(A.O,A.M,A.R,A.T,A.P)
k.b=A.a9
k.d=A.bw
k.c=1.5+2*n/10
k.r=w.j(l).gp(0)
j=A.j.F(o-q*(1-n/10),t)
i=A.j.F(o-q*(1-l),t)
l=e.b
if(j<=i)a2.af(new B.aF(r,l,g,new B.cu([v,j,i,!0]),B.a([],a1)),k)
else{a2.af(new B.aF(r,l,g,new B.cu([v,j,t,!0]),B.a([],a1)),k)
a2.af(new B.aF(r,e.b,g,new B.cu([v,0,i,!0]),B.a([],a1)),k)}}a0.iy()
h=u[d].De(o).a
$.Q()
l=new B.ao(A.O,A.M,A.R,A.T,A.P)
l.r=w.gp(0)
l.y=Ad.oq
a2.N(h,5,l)
l=new B.ao(A.O,A.M,A.R,A.T,A.P)
l.r=A.c.gp(0)
a2.N(h,2,l)}},
aE(d){return d.b!==this.b}}
C.bqj.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new B.e4()
f.d_(this.c)
w=e.a*(0.2+f.ai()*0.6)
v=f.h8()?-0.1:1.1
v=e.b*v
u=new B.o(w,v)
t=e.gao4()*1.4
for(s=this.d,r=x.O,q=this.b,p=q*0.25,q*=2,o=x.v,n=0;n<14;++n){m=p+n*3.141592653589793*2/14
l=0.06+0.04*Math.sin(q+n)
k=$.Q()
j=B.a([],o)
i=new B.aF(k.r,A.ai,g,g,j)
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
k=new B.bv()
j.push(k)
j=i.f
if(j!=null)k.ak(j)
i.ab()
k=new B.ao(A.O,A.M,A.R,A.T,A.P)
j=B.a([s.j(0.16),s.j(0)],r)
k.sav(new B.alz(u,t,j,g,A.x,g,g,0))
k.y=A.kU
d.af(i,k)}},
aE(d){return d.b!==this.b}}
C.bc4.prototype={
a5(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=new B.e4()
e.d_(this.c*7+3)
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
g=f}$.Q()
f=new B.ao(A.O,A.M,A.R,A.T,A.P)
f.r=g.j(h).gp(0)
f.y=new B.hw(A.G,l*0.35)
d.N(new B.o(j,i),l,f)
f=new B.ao(A.O,A.M,A.R,A.T,A.P)
f.b=A.a9
f.c=1
f.r=B.ar(g,A.c,0.5).j(h*0.9).gp(0)
d.N(new B.o(j,i),l,f)}},
aE(d){return d.b!==this.b}}
C.bbI.prototype={
a5(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=new B.e4()
e.d_(this.c+11)
for(w=this.b,v=a0.b,u=v*0.04,t=this.d,s=v*0.08,r=a0.a,q=r/24,p=w*2,o=x.v,n=0;n<3;++n){m=v*(0.25+n*0.25+(e.ai()-0.5)*0.1)
l=v*(0.06+e.ai()*0.05)
k=e.ai()*3.141592653589793*2
j=$.Q()
i=B.a([],o)
h=new B.aF(j.r,A.ai,null,null,i)
i.push(new B.aZ(0,m))
h.ab()
for(g=0;g<=r;g+=q){j=g/r
j=new B.aq(g,m+Math.sin(j*3.141592653589793*2+w+k)*l+Math.sin(j*7+p)*l*0.25)
i.push(j)
f=h.f
if(f!=null)j.ak(f)
h.ab()}$.Q()
j=new B.ao(A.O,A.M,A.R,A.T,A.P)
j.b=A.a9
j.c=s
j.d=A.bw
if(n===1){i=B.ar(t,A.c,0.5)
i.toString}else i=t
j.r=i.j(0.07+0.04*Math.sin(w+n)).gp(0)
j.y=new B.hw(A.G,u)
d.af(h,j)}},
aE(d){return d.b!==this.b}}
C.bxp.prototype={
a5(d,e){var w,v,u=new B.a1(0,0,0+e.a,0+e.b),t=Math.sin(this.b)
$.Q()
w=B.K()
t=(0.5+0.5*t)*0.12
w.sav(new B.c_(A.A,0.95,A.x,null,0,B.a([A.L,A.w.j(0.28+t)],x.O),D.d75,null).aK(0,u))
d.ar(u,w)
w=u.cn(-3)
v=B.K()
v.b=A.a9
v.c=2
v.r=this.c.j(0.1+t).gp(0)
v.y=A.kU
d.ar(w,v)},
aE(d){return d.b!==this.b}}
C.bun.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this.b/6.283185307179586*3
for(w=e.a,v=Math.abs(w),u=e.b,t=Math.abs(u),s=this.d,r=this.c*31+A.j.bh(f)*7,q=0;q<7;++q){p=new B.e4()
p.d_(r+q)
o=p.ai()*w
n=p.ai()*u
m=Math.sin(A.j.F(A.j.F(f,1)+q/7,1)*3.141592653589793)
if(m<0.05)continue
l=Math.min(v,t)*(0.02+p.ai()*0.025)*m
k=B.ar(s,A.c,0.7).j(m)
$.Q()
j=new B.ao(A.O,A.M,A.R,A.T,A.P)
j.r=k.gp(0)
j.c=1.4
j.d=A.bw
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
i=new B.ao(A.O,A.M,A.R,A.T,A.P)
i.r=A.c.j(m*0.9).gp(0)
i.y=new B.hw(A.G,l*0.3)
d.N(new B.o(o,n),l*0.35,i)}},
aE(d){return d.b!==this.b}}
C.btv.prototype={
a5(d,e){var w,v,u=this.b/6.283185307179586*2.2-0.6
if(u<-0.3||u>1.3)return
w=new B.a1(0,0,0+e.a,0+e.b)
$.Q()
v=B.K()
v.a=A.p5
v.sav(new B.a9(A.aA,A.aF,A.x,B.a([A.L,B.ar(this.c,A.c,0.6).j(0.16),A.L],x.O),B.a([A.j.E(u-0.15,0,1),A.j.E(u,0,1),A.j.E(u+0.15,0,1)],x.x),null).aK(0,w))
d.ar(w,v)},
aE(d){return d.b!==this.b}}
C.bgA.prototype={
a5(d,e){var w,v,u,t,s,r=e.gdA(),q=0.55+0.45*Math.sin(this.b)
$.Q()
w=B.K()
w.b=A.a9
w.c=1.4
w.d=A.bw
v=this.d
w.r=v.j(0.55+q*0.35).gp(0)
u=B.K()
u.b=A.a9
u.c=4
u.r=v.j(0.12*q).gp(0)
u.y=A.uy
r=new C.dhj(this,r*0.16,d,u,w)
t=e.gdA()*0.045
r.$3(new B.o(t,t),1,1)
v=e.a-t
r.$3(new B.o(v,t),-1,1)
s=e.b-t
r.$3(new B.o(t,s),1,-1)
r.$3(new B.o(v,s),-1,-1)},
aE(d){return d.b!==this.b}}
C.ya.prototype={}
C.JE.prototype={
a7(){return"NgmySlideElementType."+this.b}}
C.asI.prototype={
a7(){return"NgmySlideAspectRatio."+this.b}}
C.vd.prototype={
a7(){return"NgmySlideShapeKind."+this.b}}
C.mT.prototype={
a7(){return"NgmySlideLayout."+this.b}}
C.hF.prototype={
a7(){return"NgmySlideTransition."+this.b}}
C.eP.prototype={
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
u.n(0,"decoration",C.ial(v.z))
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
C.m0.prototype={
hQ(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=B.U(n).k("N<1,eP>")
n=B.C(new B.N(n,new C.ckn(),m),m.k("ak.E"))
return C.rW(t,s,o,q,n,w.a,u,v,p,w.b,r)},
aj(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=B.U(n).k("N<1,a8<n,@>>")
n=B.C(new B.N(n,new C.cko(),m),m.k("ak.E"))
return B.I(["id",w.a,"title",w.b,"notes",v,"layout",u.b,"background",t,"backgroundEnd",s,"transition",r.b,"durationSeconds",q,"slideDesignId",p,"designRevision",o,"elements",n],x.N,x.z)}}
C.i3.prototype={
gbd9(){var w=this.Q,v=w==null?null:A.a.i(w)
if(v==null)v=""
if(v.length===0)return null
return B.bj(v)},
gT7(){if(!C.kL(this.w))return!1
var w=this.gbd9()
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
q=B.U(r).k("N<1,m0>")
r=B.C(new B.N(r,new C.ckc(),q),q.k("ak.E"))
return C.Cn(g,w,a2,a3,m,l,a0,j,s,v,t,u,p.a,d,a1,p.x,o,e,f,r,n,i,h,k)},
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
v=B.U(w).k("N<1,a8<n,@>>")
w=B.C(new B.N(w,new C.ckd(),v),v.k("ak.E"))
t.n(0,"slides",w)
return t}}
C.jY.prototype={}
C.b3d.prototype={
B(d){return B.cs(new C.cki(this))}}
C.apK.prototype={
S(){return new C.blt(null,null)}}
C.blt.prototype={
gb1J(){var w,v=this,u=v.d
if(u===$){w=B.bn(null,A.fG,null,1,null,v)
w.cP(0)
v.d!==$&&B.bG()
v.d=w
u=w}return u},
t(){this.gb1J().t()
this.byP()},
B(d){return B.c9(this.gb1J(),new C.dPU(),this.a.c)}}
C.aN0.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a4()},
aY(){this.b5()
this.b4()
this.bC()}}
C.aes.prototype={
QC(d,e,f,g){return this.bTp(d,e,f,g)},
bTp(d,e,f,g){var w=0,v=B.j(x.H),u,t,s
var $async$QC=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:w=3
return B.b(e.$0(),$async$QC)
case 3:s=i
if(d.e==null){w=1
break}B.a6(d,!1).O(null)
t=d.L(x.q).f
t.U(B.b3(null,null,null,null,null,A.t,null,B.d(s?f:g,null,null,null,null,null,null,null,null,null,null),null,A.ek,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$QC,v)},
B(d){var w=this,v=null,u=B.m(22),t=B.L(A.c.j(0.08),A.r,1),s=B.a([new B.ac(0,A.G,A.w.j(0.35),A.dv,24)],x.V),r=B.at(B.q(v,v,A.f,v,v,new B.p(A.aT,v,v,B.m(99),v,v,A.n),v,4,v,v,v,v,v,40),v,v,v),q=w.d,p=B.d(q?"Print your invoice":"Save your PDF",v,v,v,v,v,v,A.di,A.K,v,v),o=q?"One full letter page \u2014 tap Share then Print, or open in Safari.":w.c,n=q?3:2,m=x.p
n=B.a([r,A.aR,p,A.an,B.d(o,v,n,A.a2,v,v,v,B.l(v,v,A.c.j(0.55),v,v,v,v,v,v,v,v,12,v,v,A.a8,v,v,!0,v,v,v,v,v,v,v,v),A.K,v,v)],m)
if(!q)A.d.v(n,B.a([A.ax,B.d(w.c,v,2,A.a2,v,v,v,B.l(v,v,A.c.j(0.45),v,v,v,v,v,v,v,v,11,v,v,A.a8,v,v,!0,v,v,v,v,v,v,v,v),A.K,v,v)],m))
n.push(A.d8)
n.push(B.A(B.a([B.E(new C.aeJ(A.hX,"Download",A.c4,new C.eBC(w,d),!0,v),1),A.au,B.E(new C.aeJ(A.uN,"Share",A.bl,new C.eBD(w,d),!1,v),1),A.au,B.E(new C.aeJ(A.hK,"Safari",A.b1,new C.eBE(w,d),!1,v),1)],m),A.m,v,A.e,A.i,0,v,v))
n.push(A.aB)
n.push(B.bN(!1,B.d("Cancel",v,v,v,v,v,v,B.l(v,v,A.c.j(0.6),v,v,v,v,v,v,v,v,v,v,v,A.V,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,!0,v,v,v,new C.eBF(d),v,v))
return B.bm(!0,new B.D(A.qy,B.x(B.a([B.q(v,B.x(n,A.al,v,A.e,A.i,0,A.p),A.f,v,v,new B.p(A.ji,v,t,u,s,v,A.n),v,v,v,v,A.GU,v,v,1/0)],m),A.m,v,A.e,A.Q,0,A.p),v),!0,!1,A.ag,!0,!0)}}
C.aeJ.prototype={
B(d){var w=this,v=null,u=B.m(16),t=w.r,s=t?w.e.j(0.22):A.c.j(0.06),r=B.m(16),q=B.L(t?w.e.j(0.55):A.c.j(0.1),A.r,1),p=t?w.e:A.c
p=B.X(w.c,p,v,v,v,26)
return B.aJ(!1,A.a3,!0,v,B.aP(!1,u,!0,B.eJ(B.x(B.a([p,A.U,B.d(w.d,v,v,v,v,v,v,B.l(v,v,A.c,v,v,v,v,v,v,v,v,12,v,v,t?A.u:A.V,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.Q,0,A.p),v,new B.p(s,v,q,r,v,v,A.n),v,D.bH4,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),A.f,A.L,0,v,v,v,v,v,A.aj)}}
C.b3b.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.c,f=g.db
if(f==="__kiapo_video__"||A.a.a0(f,"__kiapo_video___"))return new C.arP(g.at,i.d,i.as,i.at,h)
switch(g.b.a){case 0:f=i.r
w=i.d
if(f){v=2*w
u=new B.R(v,w,v,w)}else{v=6*w
u=new B.R(v,10*w,v,12*w)}t=i.cdM().am6(1.35)
s=B.axl(h,h,h,g.w*w,h,h,!0,1.35,h,h,h)
v=g.as
r=i.bEp(v)
if(i.e&&i.w!=null)q=B.aM(h,A.Z,!1,h,!0,A.t,h,B.aO(),i.w,A.bl,h,h,h,h,2,D.c3h,A.y,!0,h,!0,h,!1,i.x,A.ak,h,h,h,new B.bM("slide_tf_"+g.a,x.W),h,A.xe,h,h,h,h,1,h,!1,"\u2022",h,i.y,h,h,h,!1,h,h,!1,h,!0,h,A.ac,h,h,h,h,h,h,h,h,h,h,s,t,!0,v,A.AE,A.ao,h,A.Vc,h,h)
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
w=n?t.cOy(B.b0(g.Q).j(0.45),A.cH):t
p=g.as
l=m?1:h
k=m?A.eP:A.Ez
p=B.d(f,new B.bM("slide_txt_"+g.a+"_"+v,x.W),l,k,h,!m,s,w,p,h,h)
g=p}else{f=A.a.gX(v)
v=g.k1
p=g.r
if(v==="outline"){l=g.k2
k=l?A.V3:s
$.Q()
j=B.K()
j.b=A.a9
j.c=3*w
j.e=A.dP
j.r=A.as.gp(0)
j=i.cuL(p,t,k,j)
k=g.r
w=new B.an(A.a0,h,A.ad,A.t,B.a([j,i.cuJ(k,t,l?A.V3:s)],x.p),h)}else w=i.cuK(p,t,g.k2?A.V3:s,m)
v=new B.mL(w,new B.bM("slide_txt_"+g.a+"_"+f+"_"+v,x.W))
g=v}q=B.aA(A.c5,g,A.y,!1,h,i.Q,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,i.z,h,h,h,h,h,h,!1,A.a4)}return new B.D(u,new B.bL(r,h,h,q,h),h)
case 1:case 4:return i.c20()
case 3:return i.cmj()
case 2:return B.b4(h,h,h,new C.b38(g,h),A.fL)
case 5:g=g.r
return new C.b3a(g,!i.e&&i.z==null,h)}},
cdM(){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.c,l=B.b0(m.Q),k=m.x,j=m.y,i=m.z,h=n,g=n,f=n,e=n
switch(m.k1){case"caps":h=3*o.d
w=l
k=A.u
break
case"elegant":h=1.2*o.d
w=l
k=A.k2
j=A.cH
break
case"shadow":v=o.d
e=B.a([new B.cU(D.ahB,new B.o(0,4*v),8*v)],x.r)
w=l
break
case"neon":v=o.d
e=B.a([new B.cU(l,A.I,6*v),new B.cU(l,A.I,16*v),new B.cU(l.j(0.8),A.I,30*v)],x.r)
w=l
break
case"marker":k=A.u
g=A.bi
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
e=B.a([new B.cU(A.bD,new B.o(v,v),0)],x.r)
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
e=B.a([new B.cU(A.ba,new B.o(-3*v,0),0),new B.cU(A.ay,new B.o(3*v,0),0)],x.r)
w=l
k=A.u
break
case"fire":v=o.d
e=B.a([new B.cU(A.cF,A.I,8*v),new B.cU(A.ay,new B.o(0,-3*v),18*v)],x.r)
k=A.u
w=A3.xX
break
case"ice":v=o.d
e=B.a([new B.cU(A.aH,A.I,10*v),new B.cU(A.cy,A.I,22*v)],x.r)
k=A.V
w=A.eE
break
case"chalk":h=o.d
e=B.a([new B.cU(l.j(0.45),A.I,3*h)],x.r)
w=l
k=A.k2
break
case"comic":v=B.ar(l,A.w,0.85)
v.toString
u=B.a([],x.r)
for(t=o.d,q=0;q<8;++q){p=D.d9c[q]
u.push(new B.cU(v,new B.o(p.a*t,p.b*t),0))}u.push(new B.cU(v,new B.o(5*t,6*t),0))
e=u
w=l
k=A.u
break
case"gold":$.Q()
f=B.K()
v=o.d
f.sav(D.c5Z.aK(0,new B.a1(0,0,0+900*v,0+m.w*v*1.6)))
e=B.a([new B.cU(A.M7,new B.o(0,3*v),5*v)],x.r)
w=l
k=A.u
break
case"sunset":$.Q()
f=B.K()
v=o.d
f.sav(D.c6i.aK(0,new B.a1(0,0,0+900*v,0+m.w*v*1.6)))
w=l
k=A.u
break
case"softglow":e=B.a([new B.cU(l,A.I,14*o.d)],x.r)
w=l
k=A.a8
break
case"lowercase":h=2*o.d
w=l
k=A.cC
break
case"double":v=o.d
u=5*v
v=10*v
e=B.a([new B.cU(l.j(0.45),new B.o(u,u),0),new B.cU(l.j(0.2),new B.o(v,v),0)],x.r)
w=l
break
case"whisper":h=6*o.d
w=l
k=A.k2
break
default:w=l}v=m.w
u=f==null?w:n
m=m.k3
m=m!==0?B.b0(m):g
return B.l(n,m,u,n,i,n,n,n,n,n,n,v*o.d,j,n,k,f,1.25,!0,n,h,n,n,n,e,n,n)},
aBu(d,e,f,g,h){var w,v,u,t,s=null,r=this.c,q=r.k1
if(D.faq.q(0,q))w=d.toUpperCase()
else w=q==="lowercase"?d.toLowerCase():d
q=new C.ckg(h)
v=r.k2?C.ing(w,e,q):s
if(v==null){q=q.$1(e)
r=r.as
u=g?1:s
t=g?A.eP:A.Ez
return B.d(w,s,u,t,s,!g,f,q,r,s,s)}return B.YZ(B.cP(v,s,s,s,s,s,s,s,s,s,s),s,s,q.$1(e),r.as)},
cuL(d,e,f,g){return this.aBu(d,e,f,!1,g)},
cuJ(d,e,f){return this.aBu(d,e,f,!1,null)},
cuK(d,e,f,g){return this.aBu(d,e,f,g,null)},
bEp(d){switch(d.a){case 2:return A.A
case 1:case 5:return A.aa
default:return A.a6}},
c20(){var w,v,u=this,t=null,s=u.c,r=s.at
if(r==null||!A.a.a0(r,"data:image")){if(!u.as)return A.bM
return B.at(B.X(s.b===D.ls?A.HR:A.Cz,A.aD,t,t,t,32),t,t,t)}w=u.bHt(r)
if(s.b===D.ls){s=B.m(6)
v=2*u.d
return B.q(t,w,A.f,t,t,new B.p(A.c,t,B.L(A.cu,A.r,1),s,B.a([new B.ac(0,A.G,A.w.j(0.08),A.dG,6)],x.V),t,A.n),t,1/0,t,t,new B.R(v,v,v,v),t,t,1/0)}if(s.go.length!==0||s.id.length!==0){v=u.aQq(r,!0)
return C.fOs(s.go,v,s.id)}return w},
aQq(d,e){var w,v,u,t
try{w=C.inB(d)
u=this.c.db
v=u==="marriage_locked_bg"||A.a.c8(u,"_bg")
u=B.cs(new C.ckf(this,w,v,e))
return u}catch(t){return D.af2}},
bHt(d){return this.aQq(d,!1)},
cmj(){var w=this.c,v=w.at
if(v==null||v.length===0)return D.bcG
return C.inT(v,w.db,w.dx)}}
C.b38.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=$.Q(),g=B.K(),f=this.b
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
case 2:r=new B.aF(h.r,A.ai,i,i,B.a([],x.v))
r.D(new B.aZ(u/2,0))
r.D(new B.aq(u,t))
r.D(new B.aq(0,t))
r.D(new B.bv())
d.af(r,g)
d.af(r,w)
break
case 3:r=new B.aF(h.r,A.ai,i,i,B.a([],x.v))
h=t*0.45
r.D(new B.aZ(0,h))
f=u*0.65
r.D(new B.aq(f,h))
r.D(new B.aq(f,t*0.2))
r.D(new B.aq(u,t*0.5))
r.D(new B.aq(f,t*0.8))
t*=0.55
r.D(new B.aq(f,t))
r.D(new B.aq(0,t))
r.D(new B.bv())
d.af(r,g)
d.af(r,w)
break
case 4:h=t/2
w.c=v+2
d.ah(new B.o(0,h),new B.o(u,h),w)
break
case 5:q=u*0.22
r=new B.aF(h.r,A.ai,i,i,B.a([],x.v))
r.D(new B.aZ(q,0))
r.D(new B.aq(u,0))
r.D(new B.aq(u-q,t))
r.D(new B.aq(0,t))
r.D(new B.bv())
d.af(r,g)
d.af(r,w)
break
case 6:p=u/2
o=t/2
n=Math.min(u,t)/2
f=B.a([],x.v)
r=new B.aF(h.r,A.ai,i,i,f)
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
r.ab()}}r.D(new B.bv())
d.af(r,g)
d.af(r,w)
break}},
aE(d){return d.b!==this.b}}
C.aKx.prototype={
S(){return new C.bwU(null,null)}}
C.bwU.prototype={
Y(){var w,v=this
v.a3()
w=B.bn(null,A.hF,null,1,null,v)
w.cP(0)
v.d!==$&&B.aQ()
v.d=w},
t(){var w=this.d
w===$&&B.c()
w.t()
this.bB3()},
aQB(d,e){var w=null,v=B.a([e,e.j(0.7)],x.O),u=B.m(8)
return B.c3(B.at(B.d(d,w,w,w,w,w,w,A.di,w,w,w),w,w,w),new B.p(w,w,w,u,w,new B.a9(A.a6,A.aa,A.x,v,w,w),A.n),A.bj)},
bED(){var w,v=this,u=null,t=v.aQB("Slide A",A.bl),s=v.aQB("Slide B",A.b1)
if(v.a.c===D.ct)return new B.an(A.a0,u,A.b2,A.t,B.a([t,B.at(B.d("No transition",u,u,u,u,u,u,B.l(u,u,A.c.j(0.7),u,u,u,u,u,u,u,u,16,u,u,A.V,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,u)],x.p),u)
w=v.d
w===$&&B.c()
return B.c9(w,new C.fgd(v,s,t),u)},
B(d){return this.bED()}}
C.aLe.prototype={
jt(d){return new B.a1(0,0,0+d.a*A.j.E(this.b,0,1),0+d.b)},
k9(d){return d.b!==this.b}}
C.Wc.prototype={
S(){return new C.blF(null,null)}}
C.blF.prototype={
Y(){var w,v,u=this
u.a3()
w=B.bn(null,A.C6,null,1,null,u)
u.d!==$&&B.aQ()
u.d=w
v=u.a
if(!v.e||v.c.dy===D.ct){w.sp(0,1)
return}B.bQ(B.dv(0,0,0,v.c.fr+v.f*120,0,0),new C.e0u(u),x.a)},
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
else B.bQ(B.dv(0,0,0,v.c.fr+v.f*120,0,0),new C.e0t(t),x.a)}},
t(){var w=this.d
w===$&&B.c()
w.t()
this.bz3()},
B(d){var w,v=this.a
if(v.c.dy===D.ct||!v.e)return v.d
w=this.d
w===$&&B.c()
return B.c9(w,new C.e0s(this),v.d)}}
C.JD.prototype={
B(d){return B.cs(new C.ck8(this))}}
C.aBd.prototype={
S(){return new C.bg0()}}
C.bg0.prototype={
Y(){this.a3()
if(this.a.c!==D.ct)B.bQ(A.NI,new C.dew(this),x.a)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=4280172719,n=q.a.c
if(n===D.ct)n=B.at(B.d("No animation on elements",p,p,p,p,p,p,B.l(p,p,A.c.j(0.75),p,p,p,p,p,p,p,p,16,p,p,A.V,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p)
else{n=n.u(0)
w=q.d
v=x.W
u=q.a.c
w=B.ap(p,new C.Wc(C.er(A.bn,!1,4279310375,A.aG,"",4294538006,24,A.bt,A.a8,"",0.2,"preview_shape",p,"","",0,!1,"",0,D.bk,o,2,"",0,0,"",u,D.fi,0.84,0.08,0.12),B.q(p,p,A.f,p,p,new B.p(A.ca,p,p,B.m(14),p,p,A.n),p,72,p,p,p,p,p,72),!0,0,new B.bM("shape_"+n+"_"+w,v)),p,p,24,p,28,p)
u=u.u(0)
n=q.d
t=C.er(A.bn,!1,4294967295,A.aG,"",4280640491,22,A.bt,A.a8,"",0.2,"preview_text",p,"","",0,!1,"",0,D.bk,o,2,"Element flies in",0,0,"",q.a.c,D.cW,0.84,0.08,0.12)
s=A.c.j(0.14)
r=B.m(14)
v=new B.an(A.a0,p,A.ad,A.t,B.a([w,B.ap(32,new C.Wc(t,B.q(p,D.fKy,A.f,p,p,new B.p(s,p,B.L(A.aT,A.r,1),r,p,p,A.n),p,p,p,p,A.jn,p,p,1/0),!0,1,new B.bM("text_"+u+"_"+n,v)),p,p,24,24,p,p)],x.p),p)
n=v}return B.c3(n,D.b7Q,A.bj)}}
C.a8L.prototype={
S(){return new C.bml(null,null)}}
C.bml.prototype={
gb2k(){var w=this.a
if(w.e)w=D.faD.q(0,w.c)||D.aSE.q(0,A.d.gH(this.a.c.split("@")))
else w=!1
return w},
Y(){var w,v=this
v.a3()
if(v.gb2k()){w=C.ilU(v.a.c)
if(w==null){w=v.a.c
if(w==="drift")w=9000
else w=w==="pulse"?2600:4200}w=B.bn(null,B.dv(0,0,0,w,0,0),null,1,null,v)
w.cP(0)
v.d=w}},
t(){var w=this.d
if(w!=null)w.t()
this.bzz()},
B(d){var w,v=this,u=v.d
if(!v.gb2k()||u==null)return v.a.d
w=v.a
return B.c9(u,new C.eoZ(v,u,A.o.F(w.f,7)/7*3.141592653589793*2),w.d)}}
C.b17.prototype={
B(d){var w=null
return B.at(C.b3c(!0,w,!1,C.er(A.K,!1,this.e.l(),A.aG,"",4280640491,this.f,A.bt,A.a8,"",0.2,"fx",w,"","",0,!1,"",0,D.bk,4280172719,2,"Aa",0,0,this.c,D.ct,D.cW,0.84,0.08,0.12),w,!1,w,w,w,1,!1,!0),w,w,w)},
gZ(d){return this.f}}
C.bhd.prototype={
jt(d){return C.a3D(this.b,new B.a1(0,0,0+d.a,0+d.b).cn(-this.c))},
k9(d){return d.b!==this.b||d.c!==this.c}}
C.bsp.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=new B.a1(0,0,0+e.a,0+e.b).cn(-this.d),k=this.b,j=C.a3D(k,l),i=e.gdA(),h=new C.f58()
switch(this.c){case"gold":w=h.$1(i*0.045)
w.sav(D.aUb.aK(0,l))
d.af(j,w)
k=C.a3D(k,l.cn(-(i*0.03)))
w=h.$1(i*0.006)
w.r=D.btC.gp(0)
d.af(k,w)
break
case"platinum":k=h.$1(i*0.04)
k.sav(D.fkV.aK(0,l))
d.af(j,k)
break
case"glow":k=h.$1(i*0.05)
k.r=A.c.j(0.55).gp(0)
k.y=new B.hw(A.G,i*0.04)
d.af(j,k)
k=h.$1(i*0.012)
k.r=A.c.gp(0)
d.af(j,k)
break
case"rainbow":k=h.$1(i*0.04)
k.sav(D.fkT.aK(0,l))
d.af(j,k)
break
case"double":w=h.$1(i*0.012)
w.r=A.c.gp(0)
d.af(j,w)
k=C.a3D(k,l.cn(i*0.03))
w=h.$1(i*0.008)
w.r=A.c.j(0.75).gp(0)
d.af(k,w)
break
case"neon":k=h.$1(i*0.06)
k.r=A.ba.j(0.7).gp(0)
k.y=new B.hw(A.G,i*0.035)
d.af(j,k)
k=h.$1(i*0.016)
k.r=A.pe.gp(0)
d.af(j,k)
break
case"rosegold":w=h.$1(i*0.05)
w.sav(D.fkO.aK(0,l))
d.af(j,w)
w=C.a3D(k,l.cn(-(i*0.032)))
v=h.$1(i*0.006)
v.r=D.bgx.gp(0)
d.af(w,v)
k=C.a3D(k,l.cn(i*0.03))
v=h.$1(i*0.004)
v.r=D.bjy.gp(0)
d.af(k,v)
break
case"jewels":k=h.$1(i*0.055)
k.sav(D.aUb.aK(0,l))
d.af(j,k)
for(k=B.xI(j),w=B.a([],x.X),k=new B.rv(k,!1,w),v=i*0.018,u=-i*0.006,t=i*0.006,s=i*0.09;k.C();){r=k.c
if(r===0||k.f)B.bi(B.jG(y.M));--r
k.iy()
q=w[r].b
q===$&&B.c()
p=A.o.E(A.j.bh(q.a.length()/s),8,40)
for(o=0;o<p;++o){k.iy()
q=w[r].b
q===$&&B.c()
q=q.a.length()
k.iy()
n=w[r].De(q*o/p).a
m=D.d6l[A.o.F(o,4)]
$.Q()
q=new B.ao(A.O,A.M,A.R,A.T,A.P)
q.r=m.gp(0)
d.N(n,v,q)
q=new B.ao(A.O,A.M,A.R,A.T,A.P)
q.r=A.c.j(0.9).gp(0)
d.N(new B.o(n.a+u,n.b+u),t,q)}}break
case"aurora":k=h.$1(i*0.08)
k.sav(D.fkX.aK(0,l))
k.y=new B.hw(A.G,i*0.03)
d.af(j,k)
k=h.$1(i*0.018)
k.sav(D.fkU.aK(0,l))
d.af(j,k)
break
case"framed":w=h.$1(i*0.07)
w.r=A.c.gp(0)
d.af(j,w)
k=C.a3D(k,l.cn(-(i*0.035)))
w=h.$1(i*0.004)
w.r=A.o9.gp(0)
d.af(k,w)
break}},
aE(d){return d.b!==this.b||d.c!==this.c||d.d!==this.d}}
C.bts.prototype={
a5(d,e){d.Gq(C.a3D(this.b,new B.a1(0,0,0+e.a,0+e.b).cn(-this.c)),A.w,e.gdA()*0.05,!1)},
aE(d){return d.b!==this.b||d.c!==this.c}}
C.aNe.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a4()},
aY(){this.b5()
this.b4()
this.bC()}}
C.aNJ.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a4()},
aY(){this.b5()
this.b4()
this.bC()}}
C.aP2.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a4()},
aY(){this.b5()
this.b4()
this.bC()}}
C.a93.prototype={}
C.OO.prototype={
S(){var w=x.gz,v=x.N,u=x.bO
return new C.aG5(B.a([],x.D),B.a([],w),B.a([],w),B.T(v,u),B.T(v,x.bo),B.T(v,u),B.aR(v),null,null)},
ge3(){return this.c},
gUu(){return this.r},
gUv(){return this.w},
gMb(){return this.x}}
C.aG5.prototype={
Y(){var w,v=this
v.a3()
$.aW.c1$.push(v)
C.fTr()
$.hDi=new C.eHQ(v)
w=B.bn(null,A.C3,null,1,null,v)
w.fs(0,!0)
v.fy!==$&&B.aQ()
v.fy=w
v.IX()},
bz(d){var w,v,u=this
u.bJ(d)
w=A.a.i(d.y)
v=u.a
if(w.toLowerCase()!==A.a.i(v.y).toLowerCase()||A.a.i(d.z).toLowerCase()!==A.a.i(v.z).toLowerCase()||d.c!==v.c){w=d.c
u.P5(w)
if(w!==u.a.c){u.e=null
u.db=!1
u.w=u.r=null}u.x=!0
u.IX()}},
jl(d){if(d===A.Ba||d===A.tO||d===A.tN||d===A.q_)this.uc()},
t(){var w,v,u,t=this
$.aW.hV(t)
w=t.at
if(w!=null)w.a1(0)
t.uc()
w=t.fy
w===$&&B.c()
w.t()
for(w=t.ch,w=new B.dq(w,w.r,w.e);w.C();){v=w.d
v.T$=$.aw()
v.P$=0}for(w=t.CW,w=new B.dq(w,w.r,w.e);w.C();){v=w.d
u=v.ax
if(u!=null)u.bN(0)
v.hi()}for(w=t.cx,w=new B.dq(w,w.r,w.e);w.C();){v=w.d
v.T$=$.aw()
v.P$=0}t.bzM()},
gacD(){var w=this.a
return w.f||w.r||w.w||w.x||w.d},
gPo(){var w,v=this.a
if(v.d||v.w||v.x){w=A.a.i(v.y)
if(w.length!==0)return w}if(v.r&&A.a.i(v.z).length!==0)return A.a.i(v.z)
return A.a.i(v.y)},
ad8(d){var w=d==null?this.e:d
if((w==null?null:w.z)!==!0)return!1
if(w.gT7())return!1
return!0},
ky(){return this.ad8(null)},
ak5(){var w=this.c
if(w==null)return
w.L(x.q).f.U(D.fjb)},
qP(){if(!this.ky())return!1
this.ak5()
return!0},
asY(d){var w,v,u,t,s,r=this
if(r.ad8(d))return!1
w=d==null?r.e:d
v=w==null
if((v?null:w.w)!=="hati_kiapo_uongozi")return!0
if(r.a.d)return!0
if(!v&&!C.hCp(w))return!1
u=r.a
if(u.w||u.x)return!0
if(!u.r)return!1
v=v?null:w.x
t=A.a.i(v==null?"":v).toLowerCase()
s=A.a.i(u.z).toLowerCase()
return t.length!==0&&s.length!==0&&t===s},
Ap(){return this.asY(null)},
IX(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$IX=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=++t.dx
k=t.a.c
w=3
return B.b(C.asK(k),$async$IX)
case 3:j=e
w=4
return B.b(C.arh(k),$async$IX)
case 4:t.dy=e
if(t.c==null||l!==t.dx){w=1
break}s=C.h8q(j,t.c51())
w=t.gacD()?5:7
break
case 5:r=t.gPo()
w=r.length!==0?8:9
break
case 8:w=10
return B.b(C.b1l(r),$async$IX)
case 10:q=e
if(t.c==null||l!==t.dx){w=1
break}if(q!=null){A.d.bt(s,new C.eEd())
if(!t.dy.q(0,A.a.i(r).toLowerCase()))A.d.c4(s,0,q)}case 9:w=6
break
case 7:A.d.bt(s,new C.eEe())
case 6:for(l=s.length,p=!1,o=0;o<s.length;s.length===l||(0,B.J)(s),++o){n=s[o]
m=n.w
if(!(m==="marriage_agreement"||m==="hati_kuhowa"||m==="hati_kuhoweya"||m==="hati_malipo_awamu"||m==="hati_kiapo_uongozi"))continue
m=n.y
if(C.zd(m==null?"":m)!=null)continue
C.fTD(n,s)
p=!0}t.m(new C.eEf(t,s))
if(p||s.length>J.ad(j))t.uc()
case 1:return B.h(u,v)}})
return B.i($async$IX,v)},
c51(){var w,v,u,t,s,r,q="hati_kiapo_uongozi",p=B.a([],x.D)
for(w=this.d,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u){t=w[u]
s=t.w
if((s==="marriage_agreement"||s==="hati_kuhowa"||s==="hati_kuhoweya"||s==="hati_malipo_awamu"||s===q)&&s!==q)p.push(t)}r=this.e
w=!1
if(!this.db)if(r!=null){w=r.w
w=C.kL(w)&&w!==q}if(w)p.push(r)
return p},
ctb(d){var w,v=this,u=d.w
if(!C.kL(u)||u==="hati_kiapo_uongozi")return
v.abs(d)
w=A.d.bj(v.d,new C.eFO(d))
u=v.d
if(w>=0){u[w]=d.hQ()
v.d[w].f=new B.V(Date.now(),0,!1)}else A.d.c4(u,0,d.hQ())
v.db=!1},
cng(){var w,v,u=this,t=u.e,s=!1
if(!u.db)if(t!=null){s=t.w
s=C.kL(s)&&s!=="hati_kiapo_uongozi"}if(s)u.ctb(t)
s=u.d
w=B.U(s)
v=w.k("cM<1,i3>")
s=B.C(new B.cM(new B.Y(s,new C.eFC(),w.k("Y<1>")),new C.eFD(),v),v.k("M.E"))
return s},
P5(d){return this.bTQ(d)},
uc(){return this.P5(null)},
bTQ(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$P5=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.x&&d==null){w=1
break}s=t.cng()
w=3
return B.b(C.X5(d==null?t.a.c:d,s),$async$P5)
case 3:r=t.e
w=r!=null&&r.w==="hati_kiapo_uongozi"&&t.asY(r)?4:5
break
case 4:w=6
return B.b(C.a8h(r),$async$P5)
case 6:q=r.x
p=A.a.i(q==null?t.gPo():q)
if(t.dy.q(0,A.a.i(p).toLowerCase())){w=1
break}o=A.d.bj(t.d,new C.eDB())
q=t.d
if(o>=0)q[o]=r.hQ()
else A.d.c4(q,0,r.hQ())
case 5:case 1:return B.h(u,v)}})
return B.i($async$P5,v)},
pJ(){var w,v=this,u=v.at
if(u!=null)u.a1(0)
u=v.e
w=(u==null?null:C.kL(u.w))===!0?A.h1:A.lH
v.at=B.cy(w,new C.eGW(v))},
b1K(){var w,v=this,u=v.e
if(u==null)return
w=v.ax
w.push(new C.age(u.hQ(),v.f,v.r))
if(w.length>40)A.d.cB(w,0)
A.d.a8(v.ay)},
cGZ(){var w=this,v=w.ax
if(v.length===0||w.e==null)return
w.ay.push(new C.age(w.e.hQ(),w.f,w.r))
w.m(new C.eHM(w,v.pop()))
w.pJ()},
csg(){var w=this,v=w.ay
if(v.length===0||w.e==null)return
w.ax.push(new C.age(w.e.hQ(),w.f,w.r))
w.m(new C.eFM(w,v.pop()))
w.pJ()},
oD(){var w,v,u=this
if(u.e==null)return
w=A.d.bj(u.d,new C.eHz(u))
if(w>=0){u.d[w]=u.e.hQ()
u.d[w].f=new B.V(Date.now(),0,!1)}v=u.e
v.toString
v.f=new B.V(Date.now(),0,!1)},
Yv(d){var w,v,u,t,s=this.gdB()
if(s==null)return null
for(w=s.z,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t}return null},
ya(){var w,v,u,t
for(w=this.ch,v=new B.dq(w,w.r,w.e);v.C();){u=v.d
u.T$=$.aw()
u.P$=0}w.a8(0)
for(w=this.CW,v=new B.dq(w,w.r,w.e);v.C();){u=v.d
t=u.ax
if(t!=null)t.bN(0)
u.hi()}w.a8(0)},
KJ(){var w,v,u,t,s,r,q,p,o,n,m,l=this.gdB()
if(l==null)return
w=l.z
v=B.U(w)
u=v.k("cM<1,n>")
t=B.d4(new B.cM(new B.Y(w,new C.eHA(),v.k("Y<1>")),new C.eHB(),u),u.k("M.E"))
w=this.ch
v=B.a4(w).k("cx<1>")
v=B.C(new B.cx(w,v),v.k("M.E"))
u=v.length
s=this.CW
r=0
for(;r<v.length;v.length===u||(0,B.J)(v),++r){q=v[r]
if(!t.q(0,q)){p=w.W(0,q)
if(p!=null){p.T$=$.aw()
p.P$=0}p=s.W(0,q)
if(p!=null){o=p.ax
if(o!=null)o.bN(0)
p.hi()}}}for(v=l.z,u=v.length,r=0;r<v.length;v.length===u||(0,B.J)(v),++r){n=v[r]
if(n.b!==D.cW)continue
p=n.a
m=w.c3(0,p,new C.eHC(n))
s.c3(0,p,new C.eHD())
p=m.a.a
o=n.r
if(p!==o)m.sb1(0,o)}},
Ig(){var w,v,u=this
if(!u.db||u.e==null)return
w=u.db=!1
if(!A.d.aV(u.d,new C.eD_(u))){v=u.e
if(v.w==="hati_kiapo_uongozi"){v=v.x
if(v==null)v=u.gPo()
w=u.dy.q(0,A.a.i(v).toLowerCase())}if(!w)A.d.c4(u.d,0,u.e.hQ())}u.oD()
u.pJ()},
akr(d,e){var w,v,u,t,s=this
if(s.ky())return
w=s.Yv(d)
if(w==null||w.r===e)return
w.r=e
v=s.e
u=(v==null?null:C.kL(v.w))===!0
if(u){C.ilY(w,e)
v=s.e
if((v==null?null:v.w==="marriage_agreement")===!0){t=s.gdB()
if(t!=null)C.ilZ(t,w.d+w.f*0.5)}}s.Ig()
s.oD()
s.pJ()
if(u&&s.c!=null)s.m(new C.eHN())},
cI6(d,e){var w=this,v=w.gdB()
if(v==null||v.a!==d||v.c===e)return
v.c=e
w.Ig()
w.oD()
w.pJ()},
gdB(){var w,v=this.e
if(v==null||v.r.length===0)return null
w=v.r
return w[A.o.E(this.f,0,w.length-1)]},
gqT(){var w,v,u,t,s,r,q=this,p=q.e,o=p==null?null:p.c
if(o==null)o="office_blue"
w=C.ik_(o)
if(w!=null)return w
v=q.gdB()
if(v==null){p=q.e
v=p!=null&&p.r.length!==0?A.d.gH(p.r):null}if(v!=null&&A.a.a0(o,"class_")){p=v.f
p=B.b0(p==null?v.e:p)
u=q.c2f(v)
t=q.c2e(v)
s=B.b0(v.e)
r=v.f
return new C.jY(o,"Class template",p,u,t,s,r==null?null:B.b0(r))}return C.hWJ(o)},
c2f(d){var w,v,u,t,s
for(w=d.z,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u){t=w[u]
if(t.b===D.cW)s=t.w>=28||A.o.E(A.o.aq(t.x.a,100)-1,0,8)>=A.o.E(7,0,8)
else s=!1
if(s)return B.b0(t.Q)}return A.S},
c2e(d){var w,v,u,t
for(w=d.z,v=w.length,u=0;u<v;++u){t=w[u]
if(t.b===D.cW&&t.w<28)return B.b0(t.Q)}return A.aM},
ago(d){var w=this,v=d.w
if(v==="hati_kiapo_uongozi"){if(!w.gacD()){w.c.L(x.q).f.U(D.fhN)
return}w.abs(d)
w.b31(C.bEE(d))
return}if(C.cl0(v)){w.abs(d)
w.b31(d)
return}w.m(new C.eEV(w,d))},
atv(){var w,v,u,t,s,r,q=this
q.a39(!0)
if(q.db){w=q.e
v=w==null
u=v?null:w.w
t=v?null:w.x
s=A.a.i(t==null?"":t)
r=!v&&C.kL(w.w)&&u!=="hati_kiapo_uongozi"&&s.length!==0
q.m(new C.eCY(q))
if(r&&q.c!=null){u.toString
q.Kf(u,s)}return}q.uc()
q.m(new C.eCZ(q))},
b30(d){this.abs(d)
this.a0D(d,!0)},
abs(d){if(!C.kL(d.w))return
C.fTD(d,this.d)},
a0D(d,e){return this.cj8(d,e)},
b31(d){return this.a0D(d,!1)},
cj8(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$a0D=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:l={}
l.a=d
if(d.w==="hati_kiapo_uongozi"){s=l.a=C.bEE(d)
if(e){r=s.x
q=A.a.i(r==null?t.gPo():r)
t.dy.W(0,q.toLowerCase())
C.ari(t.a.c,q)}r=s}else r=d
w=C.cl0(r.w)?3:4
break
case 3:w=5
return B.b(t.abt(r),$async$a0D)
case 5:if(!g||t.c==null){w=1
break}case 4:p=A.d.aV(t.d,new C.eFh(l))
o=l.a.hQ()
n=C.kL(o.w)&&C.inb(o)
t.m(new C.eFi(t,o,p))
if(n){m=A.d.bj(t.d,new C.eFj(o))
if(m>=0){t.d[m]=o.hQ()
t.uc()}}if(!t.ad8(l.a))t.ZG()
r=!1
if(t.c!=null)if(!t.ad8(l.a)){r=l.a
l=r.w==="hati_kiapo_uongozi"&&!t.asY(r)&&C.fPD(l.a)}else l=r
else l=r
if(l)t.c.L(x.q).f.U(D.fin)
case 1:return B.h(u,v)}})
return B.i($async$a0D,v)},
abt(d){return this.bRQ(d)},
bRQ(d){var w=0,v=B.j(x.y),u,t=this,s,r
var $async$abt=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.a
if(r.d){u=!0
w=1
break}s=d.z
if(s===!0){u=!0
w=1
break}w=3
return B.b(B.ly(r.c,A.Aj),$async$abt)
case 3:if(f){u=!0
w=1
break}r=t.c
r.toString
s=t.a
u=B.lc(!1,r,s.c,s.d,null,A.Aj,null)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$abt,v)},
or(){var w=0,v=B.j(x.y),u,t=this,s,r
var $async$or=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.e
r=s==null
if(C.cl0(r?null:s.w)){u=!0
w=1
break}if((r?null:s.w)==="hati_kiapo_uongozi"){u=!0
w=1
break}s=t.c
s.toString
r=t.a
u=C.ckq(s,r.c,r.d)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$or,v)},
ag5(){var w=0,v=B.j(x.H),u,t=this,s
var $async$ag5=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.ce(null,null,!1,null,new C.eEU(),s,null,!0,!0,x.H),$async$ag5)
case 3:if(t.c==null){w=1
break}t.atv()
case 1:return B.h(u,v)}})
return B.i($async$ag5,v)},
ag4(){var w=0,v=B.j(x.H),u,t=this,s
var $async$ag4=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.ce(null,null,!1,null,new C.eER(),s,null,!0,!0,x.H),$async$ag4)
case 3:if(t.c==null){w=1
break}t.m(new C.eES())
t.atv()
case 1:return B.h(u,v)}})
return B.i($async$ag4,v)},
ZG(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$ZG=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.az(),$async$ZG)
case 3:r=e
if(B.k2(J.t(r.a,"ngmy_marriage_hint_seen"))===!0){w=1
break}w=4
return B.b(r.aB("Bool","ngmy_marriage_hint_seen",!0),$async$ZG)
case 4:s=t.c
if(s==null){w=1
break}s.L(x.q).f.U(D.fgn)
case 1:return B.h(u,v)}})
return B.i($async$ZG,v)},
Kf(d,e){return this.ctC(d,e)},
ctC(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$Kf=B.e(function(f,g){if(f===1)return B.f(g,v)
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
return B.b(C.ahC(s,t.gEZ(),t.gEY(),!0,e,t.d),$async$Kf)
case 9:w=4
break
case 6:w=10
return B.b(C.ahD(s,t.gEZ(),t.gEY(),!0,e,t.d),$async$Kf)
case 10:w=4
break
case 7:w=11
return B.b(C.ahE(s,t.gEZ(),t.gEY(),!0,e,t.d),$async$Kf)
case 11:w=4
break
case 8:w=12
return B.b(C.ahF(s,t.gEZ(),t.gEY(),!0,e,t.d),$async$Kf)
case 12:w=4
break
case 4:case 1:return B.h(u,v)}})
return B.i($async$Kf,v)},
c3S(){var w,v,u,t,s=this
if(!s.gacD()){s.c.L(x.q).f.U(D.fgA)
return}w=s.gPo()
v=s.a
u=v.d
t=!0
if(!u)if(!v.w){if(!v.x)if(v.r){v=A.a.i(v.z)
v=v.length!==0&&v.toLowerCase()===w.toLowerCase()}else v=!1
else v=t
t=v}v=s.c
v.toString
C.ahB(u,t,v,new C.eE9(s),new C.eEa(s),w)},
agp(){var w=0,v=B.j(x.H),u=this,t,s
var $async$agp=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return B.b(B.bT(A.dT,null,new C.eF0(u),s,!0,!0,!1,A.lS,!1,!1,x.N),$async$agp)
case 2:t=e
if(t==="marriage_agreement"){s=u.c
s.toString
C.ahF(s,u.gEZ(),u.gEY(),!1,null,u.d)}else if(t==="hati_kuhowa"){s=u.c
s.toString
C.ahC(s,u.gEZ(),u.gEY(),!1,null,u.d)}else if(t==="hati_kuhoweya"){s=u.c
s.toString
C.ahD(s,u.gEZ(),u.gEY(),!1,null,u.d)}else if(t==="hati_malipo_awamu"){s=u.c
s.toString
C.ahE(s,u.gEZ(),u.gEY(),!1,null,u.d)}else if(t==="hati_kiapo_uongozi")u.c3S()
return B.h(null,v)}})
return B.i($async$agp,v)},
cie(d,e){var w,v,u=this,t=null
if(u.e!=null)u.b1K()
w=C.cD()
v=C.Cn(t,t,t,t,D.DV,5,!1,t,t,t,t,t,w,t,!1,t,d==null?"Untitled Presentation":d,t,t,t,"office_blue",t,!1,t)
u.m(new C.eF1(u,v))},
aaQ(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$aaQ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e==null||t.qP()){w=1
break}s=t.c
s.toString
w=3
return B.b(C.isj(s),$async$aaQ)
case 3:r=e
if(r==null||t.c==null||t.e==null){w=1
break}q=t.e
p=A.d.cD(q.r,new C.eD1())
t.da(new C.eD2(t,p,q,r))
s=t.c.L(x.q).f
o=r.r.length
s.U(B.b3(null,null,null,null,null,A.t,null,B.d(p?"Your "+o+"-slide presentation is ready. The mic is green now \u2014 tap it to tell the AI what to change.":"Added "+o+" AI slides after this one. Tap the green mic to change them.",null,null,null,null,null,null,null,null,null,null),null,A.a_,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$aaQ,v)},
aiq(d,e,f,g){var w=null,v=g?A.dl:A.bO,u=B.L(g?A.aT:A.cu,A.r,1)
return B.hb(B.aA(w,B.q(w,B.X(d,g?A.c:A.aM,w,w,w,18),A.f,w,w,new B.p(v,w,u,w,w,w,A.a7),w,34,w,w,w,w,w,34),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,A.a4),w,e,w,w)},
a0C(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a0C=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:n=t.e
if(n==null||t.qP()){w=1
break}s=t.kc()
r=n.r
q=r.length
if(q===0||t.f>=q)p=B.a([],x.u)
else{r=r[t.f].z
q=B.U(r).k("Y<1>")
p=B.C(new B.Y(r,new C.eFc(),q),q.k("M.E"))}o=s!=null&&s.b===D.lR?B.a([s],x.u):p
if(o.length===0){t.c.L(x.q).f.U(D.fiy)
w=1
break}r=t.c
r.toString
w=3
return B.b(B.bT(A.L,null,new C.eFd(t,o),r,!0,!0,!0,null,!1,!1,x.H),$async$a0C)
case 3:case 1:return B.h(u,v)}})
return B.i($async$a0C,v)},
agG(){return this.cj7()},
cj7(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$agG=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p={}
o=t.e
if(o!=null){s=o.CW
s=(s==null?"":s).length===0||t.qP()}else s=!0
if(s){w=1
break}s=t.c
s.toString
w=3
return B.b(C.is5(s,t.f+1,o),$async$agG)
case 3:r=e
if(r==null||t.c==null||t.e!==o){w=1
break}s=o.cx
if(s==null)s=A.Z
q=B.jz(s,B.U(s).c)
p.a=A.d.bj(o.r,new C.eFf(q))
t.da(new C.eFg(p,t,o,q,r))
t.c.L(x.q).f.U(D.fiX)
case 1:return B.h(u,v)}})
return B.i($async$agG,v)},
agN(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$agN=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e==null||t.qP()||!t.Ap()){w=1
break}s=t.gdB()
if(s==null){w=1
break}r=s.z
q=B.U(r).k("Y<1>")
p=B.C(new B.Y(r,new C.eFx(),q),q.k("M.E"))
if(p.length===0){t.c.L(x.q).f.U(D.fg8)
w=1
break}o=new B.N(p,new C.eFy(),B.U(p).k("N<1,F>")).f1(0,new C.eFz())
r=B.T(x.N,x.bO)
for(q=p.length,n=0;n<p.length;p.length===q||(0,B.J)(p),++n){m=p[n]
l=m.r
r.n(0,m.a,new B.au(new B.ba(l,A.b6,A.aQ),$.aw()))}q=t.c
q.toString
w=3
return B.b(B.bT(A.L,null,new C.eFA(t,p,o,r),q,!0,!0,!0,null,!1,!1,x.H),$async$agN)
case 3:for(r=new B.dq(r,r.r,r.e);r.C();){q=r.d
q.T$=$.aw()
q.P$=0}if(t.c!=null)t.m(new C.eFB())
case 1:return B.h(u,v)}})
return B.i($async$agN,v)},
ags(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$ags=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:m=t.e
if(m==null||t.qP()){w=1
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
return B.b(C.hEx(s,new C.Fj(r,q,p,o==null?"":o)),$async$ags)
case 3:n=e
if(n==null||t.c==null){w=1
break}t.da(new C.eF2(m,n))
s=t.c.L(x.q).f
r=n.a
if(r.length===0)r="No ending celebration."
else{r=C.ai1(r)
r=B.w(r==null?null:r.b)+" will play after your last slide."}s.U(B.b3(null,null,null,null,null,A.t,null,B.d(r,null,null,null,null,null,null,null,null,null,null),null,A.a_,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$ags,v)},
abm(){return this.bR7()},
bR7(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$abm=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:m={}
l=t.e
if(l!=null){s=l.CW
s=(s==null?"":s).length===0||t.qP()}else s=!0
if(s){w=1
break}s=t.c
s.toString
w=3
return B.b(C.isi(s,t.f+1,l),$async$abm)
case 3:r=e
q=$.hc8
$.hc8=!1
if(r==null||t.c==null||t.e!==l){w=1
break}if(r===l){t.da(new C.eDi())
t.c.L(x.q).f.U(D.fg_)
w=1
break}if(!q){s=r.CW
s=C.hDg(l,s==null?"":s,!1)}else s=!1
if(s){t.da(new C.eDj(t,l,r))
t.c.L(x.q).f.U(D.fjq)
w=1
break}s=l.cx
if(s==null)s=A.Z
p=B.jz(s,B.U(s).c)
s=l.r
m.a=A.d.bj(s,new C.eDk(p))
o=s.length
t.da(new C.eDl(m,t,l,p,r))
n=s.length-o
s=t.c.L(x.q).f
if(n>0){m=n===1?"":"s"
m="Done \u2014 added "+n+" slide"+m+". Undo brings back the old version."}else m="Done \u2014 your slides are updated. Undo brings back the old version."
s.U(B.b3(null,null,null,null,null,A.t,null,B.d(m,null,null,null,null,null,null,null,null,null,null),null,A.a_,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$abm,v)},
aSO(d,e){if(e){this.ahf()
return}this.cie(d,!1)},
bMC(){return this.aSO(null,!1)},
ahf(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$ahf=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.bT(A.c3,null,new C.eFH(t),r,!0,!0,!0,A.pL,!1,!1,x.N),$async$ahf)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.eFI(t,C.ijZ(s).pW()))
case 1:return B.h(u,v)}})
return B.i($async$ahf,v)},
da(d){var w=this
if(w.qP())return
w.Ig()
w.b1K()
w.m(d)
w.KJ()
w.oD()
w.pJ()},
a9l(){this.da(new C.eBX(this,D.n8))},
aUi(){var w=this.gdB()
if(w==null)return
this.da(new C.eDg(this,w))},
aTo(){var w=this.e
if(w==null||w.r.length<=1)return
this.da(new C.eDe(this))},
b5W(d,e){if(this.e==null||d===e)return
this.da(new C.eFQ(this,d,e))},
OC(d){return this.bOD(d)},
bOD(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$OC=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=d.w==="hati_kiapo_uongozi"?3:4
break
case 3:s=d.x
r=A.a.i(s==null?t.gPo():s)
w=5
return B.b(C.arg(t.a.c,r),$async$OC)
case 5:t.dy.J(0,r.toLowerCase())
case 4:s=d.a
C.asM(s)
w=6
return B.b(C.b3g(t.a.c,s),$async$OC)
case 6:if(t.c==null){w=1
break}t.m(new C.eDa(t,d))
w=7
return B.b(t.uc(),$async$OC)
case 7:case 1:return B.h(u,v)}})
return B.i($async$OC,v)},
ctz(d,e){var w=this
if(d.z){w.ak5()
return}w.m(new C.eFP(w,d,e))
w.pJ()},
kc(){var w,v,u,t,s,r=this.gdB()
if(r==null||this.r==null)return null
for(w=r.z,v=w.length,u=this.r,t=0;t<v;++t){s=w[t]
if(s.a===u)return s}return null},
Xv(d){return this.ch.c3(0,d.a,new C.eD0(d))},
avo(d){return this.CW.c3(0,d.a,new C.eDC())},
a39(d){var w,v,u,t=this,s=t.w
if(s!=null){w=t.Yv(s)
v=t.ch.h(0,s)
if(w!=null&&v!=null&&v.a.a!==w.r)w.r=v.a.a}t.w=null
u=$.aW.ap$.d.c
if(u!=null)u.jr()},
b9t(){return this.a39(!0)},
a35(d){var w,v,u=this
if(u.qP())return
if(!u.Ap())return
w=u.Yv(d)
if(w==null||w.b!==D.cW)return
v=A.a.i(w.r).toLowerCase()
if(v==="click to edit text"||v==="tap to edit text"||v==="double-tap to edit"){w.r=""
u.Xv(w).sb1(0,"")}u.m(new C.eHx(u,d))
$.aW.x1$.push(new C.eHy(u,d,w))},
ba1(d){var w=this
if(d.b===D.cW&&!w.ky()&&w.Ap()){w.a35(d.a)
return}w.aBU(d.a)},
aBU(d){var w,v,u,t,s,r=this
if(r.ky())return
w=r.r
if(w!=null&&w!==d){v=r.Yv(w)
if(v!=null&&v.b===D.cW){u=r.ch.h(0,w)
if(u!=null&&u.a.a!==v.r)v.r=u.a.a}}t=r.w
s=t!=null&&t!==d
r.m(new C.eGX(r,s,d))
if(s||d==null){t=$.aW.ap$.d.c
if(t!=null)t.jr()}},
aOV(){this.da(new C.eBY(this))},
pr(d){return this.bDG(d)},
bDG(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$pr=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(t.or(),$async$pr)
case 3:s=f
if(!s){w=1
break}if(t.c==null){w=1
break}t.da(new C.eBV(t,d))
case 1:return B.h(u,v)}})
return B.i($async$pr,v)},
Wx(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Wx=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A7.Ht(78,1920),$async$Wx)
case 3:s=e
if(s==null||t.gdB()==null){w=1
break}t.da(new C.eBL(t,s))
case 1:return B.h(u,v)}})
return B.i($async$Wx,v)},
Wr(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$Wr=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.gdB()==null){w=1
break}w=3
return B.b(U.Dy(t.a.c),$async$Wr)
case 3:s=e
if(t.c==null){w=1
break}r=J.a7(s)
if(r.gau(s)){t.c.L(x.q).f.U(D.fk_)
w=1
break}w=r.gI(s)===1?4:6
break
case 4:q=r.gH(s)
w=5
break
case 6:r=t.c
r.toString
w=7
return B.b(B.bT(null,null,new C.eBI(s),r,!0,!0,!1,null,!1,!1,x.ei),$async$Wr)
case 7:q=e
case 5:if(q==null||t.c==null||t.gdB()==null){w=1
break}t.da(new C.eBJ(t,q))
case 1:return B.h(u,v)}})
return B.i($async$Wr,v)},
aum(){var w=this,v=w.r
if(v==null||w.gdB()==null)return
if(A.d.aV(w.gdB().z,new C.eDc(v))){w.c.L(x.q).f.U(D.fj0)
return}if(w.w===v)w.a39(!0)
w.da(new C.eDd(w,v))},
bKT(){var w=this.kc(),v=w==null
if((v?null:w.b)===D.fi)return"Tap a design shape, then pick a color to fill it."
if((v?null:w.b)===D.cW)return"Selected text \u2014 color applies to this text box."
return"No selection \u2014 color applies to the slide background."},
aPD(d,e){var w=this,v=w.kc(),u=w.gdB(),t=w.e
if(t==null)return
w.da(new C.eCp(w,v,d,e,t,u))},
bFg(d){return this.aPD(d,null)},
a9B(d){return this.bFo(d)},
bFo(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a9B=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=D.a9S.q(0,A.a.i(d.a))||t.Q
if(q){w=3
break}else f=q
w=4
break
case 3:w=5
return B.b(t.or(),$async$a9B)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}s=t.kc()
if(s!=null){r=s.b
if(r===D.cW)t.bFg(s.w>=28||s.x.gdR(0)>=A.H.gdR(0)?d.d:d.e)
else if(r===D.fi){r=d.c
t.aPD(r.j(0.88),r)}w=1
break}t.da(new C.eCu(t,d))
case 1:return B.h(u,v)}})
return B.i($async$a9B,v)},
a9A(d){return this.bFm(d)},
bFm(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a9A=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=t.kc()
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
return B.b(t.or(),$async$a9A)
case 7:f=!f
case 6:case 4:if(f){w=1
break}if(t.c==null){w=1
break}t.da(new C.eCs(t,s,d,q,r))
case 1:return B.h(u,v)}})
return B.i($async$a9A,v)},
bF6(d){var w=this.gdB()
if(w==null)return
this.da(new C.eCo(this,w,d))},
a0I(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a0I=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(C.ise(r),$async$a0I)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.oD()
t.m(new C.eFr(t,s))
w=4
return B.b(t.uc(),$async$a0I)
case 4:if(t.c!=null)t.ago(s)
case 1:return B.h(u,v)}})
return B.i($async$a0I,v)},
abd(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$abd=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.e
if(q==null){w=1
break}t.a39(!0)
t.oD()
s=t.c
s.toString
w=3
return B.b(C.Sb(s,q),$async$abd)
case 3:r=e
s=t.c
if(s==null){w=1
break}s=s.L(x.q).f
s.U(B.b3(null,null,null,null,null,A.t,null,B.d(r==null?"Your video is ready. Check your downloads.":r,null,null,null,null,null,null,null,null,null,null),null,A.a_,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$abd,v)},
E7(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$E7=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=r.e
if(m==null){w=1
break}r.oD()
t=4
w=7
return B.b(C.aRS(m),$async$E7)
case 7:q=e
o=r.c
if(o==null){w=1
break}w=8
return B.b(C.aRi(o,q,m.b),$async$E7)
case 8:t=2
w=6
break
case 4:t=3
l=s.pop()
p=B.ab(l)
o=r.c
if(o==null){w=1
break}o.L(x.q).f.U(B.b3(null,null,null,null,null,A.t,null,B.d("Could not create PDF: "+B.w(p),null,null,null,null,null,null,null,null,null,null),null,A.a_,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$E7,v)},
FO(d,e){return this.cGm(d,e)},
cGm(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$FO=B.e(function(f,a0){if(f===1)return B.f(a0,v)
for(;;)switch(w){case 0:h={}
if(t.qP()){w=1
break}s=d.w
if(!(s==="hati_kuhowa"||s==="hati_kuhoweya")){w=1
break}h.a=d
if(e){s=t.e
s=s!=null&&s.a===d.a}else s=!1
if(s){t.a39(!0)
t.oD()
s=h.a=t.e.hQ()}else{r=A.d.bj(t.d,new C.eHG(d))
s=h.a=r>=0?t.d[r].hQ():d.hQ()}s=s.w
q=s==null
p=C.ikX(q?"":s)
o=C.hCb(q?"":s)
if(p.length===0){w=1
break}s=t.d
q=B.U(s).k("Y<1>")
n=B.C(new B.Y(s,new C.eHH(h,p),q),q.k("M.E"))
s=h.a.b
w=3
return B.b(t.czr(n.length,o,s),$async$FO)
case 3:m=a0
if(m==null||t.c==null){w=1
break}h.b=null
h.c=!1
w=m==="new"?4:6
break
case 4:s=h.b=C.ikR(h.a)
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
return B.b(t.czq(n,o),$async$FO)
case 10:a0=g.a=a0
w=8
break
case 9:a0=l
case 8:if(a0==null||t.c==null){w=1
break}k=A.d.fe(t.d,new C.eHI(s))
s=h.a.b
w=11
return B.b(t.czo(k.b,s),$async$FO)
case 11:if(a0!==!0||t.c==null){w=1
break}s=h.b=k.hQ()
case 5:j=C.ikW(s,h.a)
s=j.b
if(s===0&&j.a===0&&j.c===0){h=t.c
if(h==null){w=1
break}h.L(x.q).f.U(D.fkb)
w=1
break}w=12
return B.b(t.czp(j.a,s,o,j.c),$async$FO)
case 12:i=a0
if(t.c==null){w=1
break}t.m(new C.eHJ(h,t,i))
t.pJ()
case 1:return B.h(u,v)}})
return B.i($async$FO,v)},
czr(d,e,f){var w=this.c
w.toString
return B.bT(A.L,null,new C.eHc(this,e,f,d),w,!0,!0,!0,null,!1,!1,x.N)},
czq(d,e){var w=this.c
w.toString
return B.bT(A.L,null,new C.eHb(this,e,d),w,!0,!0,!0,null,!1,!1,x.N)},
czo(d,e){var w=this.c
w.toString
return B.bT(A.L,null,new C.eH5(this,e,d),w,!0,!0,!0,null,!1,!1,x.y)},
czp(d,e,f,g){var w=this.c
w.toString
return B.bT(A.L,null,new C.eH7(this,f,e,d,g),w,!0,!0,!0,null,!1,!1,x.y)},
acH(){var w=null
return B.at(B.q(w,w,A.f,w,w,new B.p(A.aT,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w)},
acI(d,e,f,g){var w,v,u=null,t=B.m(16),s=B.ar(d,A.c3,0.35)
s.toString
s=B.a([d,s],x.O)
w=B.a([new B.ac(0,A.G,d.j(0.28),A.dv,18)],x.V)
v=x.p
return B.A(B.a([B.q(u,B.X(e,A.c,u,u,u,28),A.f,u,u,new B.p(u,u,u,t,w,new B.a9(A.aA,A.aF,A.x,s,u,u),A.n),u,54,u,u,u,u,u,54),A.ex,B.E(B.x(B.a([B.d(g,u,u,u,u,u,u,D.fvb,u,u,u),A.an,B.d(f,u,u,u,u,u,u,B.l(u,u,A.c.j(0.58),u,u,u,u,u,u,u,u,13.5,u,u,A.a8,u,1.35,!0,u,u,u,u,u,u,u,u),u,u,u)],v),A.E,u,A.e,A.i,0,A.p),1)],v),A.E,u,A.e,A.i,0,u,u)},
aXD(d,e){var w=null,v=e.j(0.14),u=B.m(12),t=B.L(e.j(0.22),A.r,1)
return B.q(w,B.d(d,w,2,A.a2,w,w,w,A.VM,A.K,w,w),A.f,w,w,new B.p(v,w,t,u,w,w,A.n),w,w,w,w,A.bV,w,w,w)},
aXG(d,e,f,g,h,i,j){var w=null,v=B.m(16),u=B.m(16),t=g?new B.a9(A.aA,A.aF,A.x,B.a([d.j(0.22),d.j(0.08)],x.O),w,w):w,s=g?w:A.c.j(0.05),r=B.L(g?d.j(0.45):A.c.j(0.08),A.r,1),q=d.j(g?0.22:0.14),p=B.m(13),o=x.p
return B.aJ(!1,A.a3,!0,w,B.aP(!1,v,!0,B.q(w,B.A(B.a([B.q(w,B.X(f,d,w,w,w,22),A.f,w,w,new B.p(q,w,w,p,w,w,A.n),w,44,w,w,w,w,w,44),A.bd,B.E(B.x(B.a([B.d(i,w,w,w,w,w,w,A.ng,w,w,w),A.cU,B.d(h,w,w,w,w,w,w,B.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,12.5,w,w,A.a8,w,1.25,!0,w,w,w,w,w,w,w,w),w,w,w)],o),A.E,w,A.e,A.i,0,A.p),1),B.X(A.z8,A.c.j(0.35),w,w,w,14)],o),A.m,w,A.e,A.i,0,w,w),A.f,w,w,new B.p(s,w,r,u,w,t,A.n),w,w,w,w,A.bF,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eE5(e,j),w,w,w,w,w,w,w),A.f,A.L,0,w,w,w,w,w,A.aj)},
c19(d,e,f,g,h,i){return this.aXG(d,e,f,!1,g,h,i)},
awI(d,e){var w=null,v=A.c.j(0.05),u=B.m(14),t=B.L(A.c.j(0.08),A.r,1)
return B.q(w,B.x(B.a([B.d(e,w,w,w,w,w,w,A.di,w,w,w),A.bH,B.d(d,w,w,w,w,w,w,B.l(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,11,w,w,A.V,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.i,0,A.p),A.f,w,w,new B.p(v,w,t,u,w,w,A.n),w,w,w,w,A.a0J,w,w,w)},
aXF(d,e,f){var w=null,v=B.bp(A.c.j(0.08),w,w,w,A.c,w,A.co,w,new B.b9(B.m(14),A.a1),w,w,w)
return B.bI(B.d(e,w,w,w,w,w,w,A.nW,w,w,w),w,new C.eE4(d,f),v)},
aXE(d,e){return this.aXF(d,e,null)},
KA(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$KA=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
s=t.a
w=3
return B.b(B.pv(l,s.c,s.d),$async$KA)
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
for(l=A.d.gae(o.z),n=new B.eF(l,new C.eGY());n.C();){m=l.gR(0).r
if(A.a.i(m).length!==0){m="  \u2022 "+B.aL(m,"\n"," ")+"\n"
q.a+=m}}l=o.c
if(A.a.i(l).length!==0)q.a+="  Notes: "+l+"\n"
l=q.a+="\n"}w=4
return B.b(B.aaY(l.charCodeAt(0)==0?l:l,r.b),$async$KA)
case 4:l=t.a
w=5
return B.b(B.pu(l.c,l.d),$async$KA)
case 5:case 1:return B.h(u,v)}})
return B.i($async$KA,v)},
IC(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$IC=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.c
q.toString
s=t.a
w=3
return B.b(B.pv(q,s.c,s.d),$async$IC)
case 3:if(!e||t.c==null){w=1
break}r=t.e
if(r==null){w=1
break}w=4
return B.b(B.aaY(A.Y.az(r.aj(),null),r.b+".json"),$async$IC)
case 4:q=t.a
w=5
return B.b(B.pu(q.c,q.d),$async$IC)
case 5:case 1:return B.h(u,v)}})
return B.i($async$IC,v)},
b9c(){var w,v,u=this,t=u.e
if(t==null||t.r.length===0)return
u.oD()
u.uc()
w=u.c
w.toString
v=B.eb(new C.eHw(u,t),!1,null,x.z)
B.a6(w,!1).cd(v)},
HQ(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$HQ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.or(),$async$HQ)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}w=4
return B.b(C.fTQ(),$async$HQ)
case 4:s=e
if(s==null||t.e==null||t.c==null){w=1
break}r=C.inN(s.a)
q=t.c
q.toString
w=5
return B.b(B.bT(A.as,null,new C.eBQ(s,r),q,!0,!0,!1,null,!1,!1,x.N),$async$HQ)
case 5:p=e
if(p==null){w=1
break}if(p==="scroll"){t.da(new C.eBR(t,s))
w=1
break}if(p==="split")t.da(new C.eBS(t,r,s))
case 1:return B.h(u,v)}})
return B.i($async$HQ,v)},
NX(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$NX=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.qP()){w=1
break}w=3
return B.b(t.or(),$async$NX)
case 3:if(!e){w=1
break}s=t.c
if(s==null){w=1
break}w=4
return B.b(C.aRR(s,null,null),$async$NX)
case 4:r=e
if(r==null||t.gdB()==null){w=1
break}t.da(new C.eBW(t,r))
case 1:return B.h(u,v)}})
return B.i($async$NX,v)},
b5I(d){var w=this.e
if(w==null||!C.kL(w.w)||w.as!=null)return
w.as=d.b
w.at=d.c.l()},
aR_(){var w,v,u,t,s=this.c
s.toString
w=this.e
v=w==null
u=v?null:w.as
t=v?null:w.at
return C.aRR(s,t==null?null:B.b0(t),u)},
a9j(d){return this.bDx(d)},
bDx(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a9j=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.qP()){w=1
break}if(!t.Ap()){s=t.c
if(s==null){w=1
break}s.L(x.q).f.U(D.fkq)
w=1
break}w=3
return B.b(t.aR_(),$async$a9j)
case 3:r=f
if(r==null||t.gdB()==null){w=1
break}t.da(new C.eBN(t,r,d))
case 1:return B.h(u,v)}})
return B.i($async$a9j,v)},
ahZ(d){return this.csj(d)},
csj(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$ahZ=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.qP()){w=1
break}if(!t.Ap()){s=t.c
if(s==null){w=1
break}s.L(x.q).f.U(D.fjy)
w=1
break}w=3
return B.b(t.aR_(),$async$ahZ)
case 3:r=f
if(r==null||t.gdB()==null){w=1
break}t.da(new C.eFN(t,r,d))
case 1:return B.h(u,v)}})
return B.i($async$ahZ,v)},
ceV(){var w,v,u=this
if(u.ky())return
w=new B.V(Date.now(),0,!1)
v=u.fx
v=v!=null&&w.bD(v).a<=5e5?++u.fr:u.fr=1
u.fx=w
if(v>=3){u.fr=0
u.fx=null
u.cFm()}},
cFm(){var w,v,u,t,s,r=this.gdB()
if(r==null)return
v=r.z
u=v.length
t=0
for(;;){if(!(t<u)){w=null
break}s=v[t]
if(s.db==="marriage_locked_nim_akuna_deni"){w=s
break}++t}if(w==null)return
this.da(new C.eHE(this,r,(A.o.aI(w.Q,24)&255)===0||A.a.i(w.r).length===0))},
c1u(){var w,v,u,t,s,r=this.gdB()
if(r==null)return
for(w=r.z,v=w.length,u=null,t=0;t<v;++t){s=w[t]
if(s.db==="marriage_locked_nim_n_4")u=s}if(u==null)return
this.da(new C.eE8(this,r,u.d))},
c6k(d){var w
if(this.ky())return!1
w=this.e
if((w==null?null:C.kL(w.w))!==!0)return!0
w=d.db
if(w==="marriage_locked"||A.a.a0(w,"marriage_locked_"))return!1
if(A.a.a0(w,"marriage_field_"))return!1
if(C.fQo(d))return!1
w=d.db
if(w==="__kiapo_video__"||A.a.a0(w,"__kiapo_video___"))return!1
if(d.b===D.ls&&A.a.a0(w,"marriage_sign_"))return!1
return!1},
c6l(d){var w
if(this.ky())return!1
w=this.e
if((w==null?null:C.kL(w.w))!==!0)return!0
if(!this.Ap())return!1
w=d.db
if(w==="marriage_locked"||A.a.a0(w,"marriage_locked_"))return!1
if(C.fQo(d))return!1
w=d.db
if(w==="__kiapo_video__"||A.a.a0(w,"__kiapo_video___"))return!1
if(d.b===D.ls&&A.a.a0(w,"marriage_sign_"))return!1
return A.a.a0(w,"marriage_field_")},
O4(d){return this.bFO(d)},
bFO(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$O4=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.qP()){w=1
break}if(!t.Ap()){s=t.c
if(s==null){w=1
break}s.L(x.q).f.U(D.fio)
w=1
break}r=t.e
s=r==null
q=s?null:r.x
p=A.a.i(q==null?"":q)
if(s||p.length===0){w=1
break}w=3
return B.b(C.ark(p),$async$O4)
case 3:o=f
s=t.c
if(s==null){w=1
break}if(o==null||A.a.i(o).length===0){s.L(x.q).f.U(D.fj2)
w=1
break}s=t.e
if(s!==r){s=s==null?null:s.a
s=s!==r.a}else s=!1
if(s){s=r.r
n=s.length===0?null:A.d.gH(s)
if(n!=null)for(s=n.z,q=s.length,m=0;m<q;++m){l=s[m]
k=l.db
if(k==="__kiapo_video__"||A.a.a0(k,"__kiapo_video___")){l.at=o
l.db="__kiapo_video__"}}C.a8h(r)
w=1
break}t.m(new C.eCy(t,d,o))
t.oD()
$.aW.x1$.push(new C.eCz(t))
case 1:return B.h(u,v)}})
return B.i($async$O4,v)},
Wv(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Wv=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.or(),$async$Wv)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}w=4
return B.b(C.bFk(),$async$Wv)
case 4:s=e
if(s==null||t.gdB()==null){w=1
break}t.da(new C.eBK(t,s))
case 1:return B.h(u,v)}})
return B.i($async$Wv,v)},
OR(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$OR=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.or(),$async$OR)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}s=t.kc()
if(s==null||s.at==null){w=1
break}r=s.at
r.toString
w=4
return B.b(C.fTH(r),$async$OR)
case 4:q=e
if(q==null){w=1
break}t.da(new C.eDA(s,q))
case 1:return B.h(u,v)}})
return B.i($async$OR,v)},
jj(d){this.da(new C.eBT(this,d))},
qE(d){return this.bF_(d)},
bF_(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$qE=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)A:switch(w){case 0:if(d!=="print"&&d!=="present"&&t.qP()){w=1
break}m=!D.aSH.q(0,A.a.i(d))
if(m){w=3
break}else f=m
w=4
break
case 3:w=5
return B.b(t.or(),$async$qE)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}switch(d){case"upload_pdf":t.HQ()
w=1
break A
case"sign_paper":t.NX()
w=1
break A
case"hd_photo":t.Wv()
w=1
break A
case"sharpen":t.OR()
w=1
break A
case"print":t.E7()
w=1
break A
case"rotate":s=t.kc()
if(s!=null)t.da(new C.eC1(s))
w=1
break A
case"text_box":t.aOV()
w=1
break A
case"picture":t.Wx()
w=1
break A
case"present":t.b9c()
w=1
break A
case"new_slide":t.a9l()
w=1
break A
case"export_json":t.IC()
w=1
break A
case"outline_share":t.KA()
w=1
break A
case"flashcard_tool":t.vO(D.Je)
w=1
break A
case"quiz_tool":t.vO(D.Jf)
w=1
break A
case"worksheet_tool":t.vO(D.Jg)
w=1
break A
case"duplicate_el":s=t.kc()
if(s==null){w=1
break A}t.da(new C.eC2(t,s))
w=1
break A
case"delete_el":t.aum()
w=1
break A
case"bring_fwd":s=t.kc()
if(s==null||t.gdB()==null){w=1
break A}t.da(new C.eC3(t,s))
w=1
break A
case"send_back":s=t.kc()
if(s==null||t.gdB()==null){w=1
break A}t.da(new C.eCe(t,s))
w=1
break A
case"align_left":s=t.kc()
if(s!=null)t.da(new C.eCh(s))
w=1
break A
case"align_center":s=t.kc()
if(s!=null)t.da(new C.eCi(s))
w=1
break A
case"align_right":s=t.kc()
if(s!=null)t.da(new C.eCj(s))
w=1
break A
case"grayscale":case"brighten":t.OR()
w=1
break A
case"flip_h":s=t.kc()
if(s!=null)t.da(new C.eCk(s))
w=1
break A
case"flip_v":s=t.kc()
if(s!=null)t.da(new C.eCl(s))
w=1
break A
case"rectangle":t.pr(D.bk)
w=1
break A
case"circle":t.pr(D.eZ)
w=1
break A
case"triangle":t.pr(D.kb)
w=1
break A
case"arrow":t.pr(D.DX)
w=1
break A
case"line":case"divider":t.pr(D.fJ)
w=1
break A
case"word_count":r=t.gdB()
if(r==null){w=1
break A}for(q=A.d.gae(r.z),p=new B.eF(q,new C.eCm()),o=0;p.C();){n=A.a.fw(A.a.i(q.gR(0).r),B.ag("\\s+",!0,!1,!1,!1))
o+=new B.Y(n,new C.eCn(),B.U(n).k("Y<1>")).gI(0)}t.c.L(x.q).f.U(B.b3(null,null,null,null,null,A.t,null,B.d(""+o+" words on this slide",null,null,null,null,null,null,null,null,null,null),null,A.a_,null,null,null,null,null,null,null,null,null,null))
w=1
break A
case"title":q=C.cD()
t.jj(C.j5(A.K,!1,t.gqT().d.l(),A.aG,40,A.bt,A.u,0.18,q,"Presentation Title",0,D.n9,0.8,0.1,0.28))
w=1
break A
case"subtitle":q=C.cD()
t.jj(C.j5(A.K,!1,t.gqT().e.l(),A.aG,22,A.bt,A.a8,0.12,q,"Subtitle goes here",0,D.dm,0.8,0.1,0.48))
w=1
break A
case"bullets":t.jj(C.j5(A.bn,!0,4279310375,A.aG,20,A.bt,A.a8,0.5,C.cD(),"\u2022 First point\n\u2022 Second point\n\u2022 Third point",0,D.ve,0.8,0.1,0.22))
w=1
break A
case"numbered":t.jj(C.j5(A.bn,!1,4279310375,A.aG,20,A.bt,A.a8,0.5,C.cD(),"1. First item\n2. Second item\n3. Third item",0,D.vd,0.8,0.1,0.22))
w=1
break A
case"quote":t.jj(C.j5(A.K,!1,4279310375,A.aG,24,A.cH,A.a8,0.25,C.cD(),'"Insert meaningful quote here."',0,D.dm,0.8,0.1,0.3))
w=1
break A
case"citation":t.jj(C.j5(A.bn,!1,4284773515,A.aG,14,A.bt,A.a8,0.1,C.cD(),"Author, Title (Year). Publisher.",0,D.ve,0.8,0.1,0.78))
w=1
break A
case"date_stamp":t.jj(C.j5(A.e_,!1,4279310375,A.aG,14,A.bt,A.a8,0.08,C.cD(),C.bFm(),0,D.dm,0.24,0.72,0.04))
w=1
break A
case"page_number":t.jj(C.j5(A.e_,!1,4279310375,A.aG,13,A.bt,A.a8,0.06,C.cD(),"Page "+(t.f+1),0,D.dm,0.18,0.78,0.9))
w=1
break A
case"header_bar":t.da(new C.eC4(t))
w=1
break A
case"footer_bar":t.da(new C.eC5(t))
w=1
break A
case"highlight":t.da(new C.eC6(t))
w=1
break A
case"redact":t.da(new C.eC7(t))
w=1
break A
case"callout":t.da(new C.eC8(t))
w=1
break A
case"checkboxes":t.jj(C.j5(A.bn,!1,4279310375,A.aG,20,A.bt,A.a8,0.45,C.cD(),"\u2610 Task one\n\u2610 Task two\n\u2610 Task three",0,D.dm,0.8,0.1,0.2))
w=1
break A
case"table":t.jj(C.j5(A.bn,!1,4279310375,A.aG,16,A.bt,A.a8,0.55,C.cD(),"Column A\tColumn B\tColumn C\nRow 1\tData\tData\nRow 2\tData\tData",0,D.dm,0.8,0.1,0.18))
w=1
break A
case"memo":t.da(new C.eC9(t))
w=1
break A
case"letter":t.jj(C.j5(A.bn,!1,4279179050,A.aG,17,A.bt,A.a8,0.82,C.cD(),C.bFm()+"\n\nDear [Name],\n\n[Letter body]\n\nSincerely,\n[Your name]",0,D.dm,0.8,0.1,0.08))
w=1
break A
case"agenda":t.jj(C.j5(A.bn,!1,4279310375,A.aG,22,A.bt,A.V,0.76,C.cD(),"AGENDA\n\n1. Welcome\n2. Updates\n3. Discussion\n4. Action items\n5. Next steps",0,D.ve,0.8,0.1,0.12))
w=1
break A
case"toc":t.jj(C.j5(A.bn,!1,4279310375,A.aG,18,A.bt,A.a8,0.76,C.cD(),"TABLE OF CONTENTS\n\n1. Introduction .......... 1\n2. Main topic .......... 3\n3. Conclusion .......... 8",0,D.dm,0.8,0.1,0.12))
w=1
break A
case"sig_line":t.jj(C.j5(A.bn,!1,4279310375,A.aG,16,A.bt,A.a8,0.08,C.cD(),"Signature: _________________________",0,D.dm,0.8,0.1,0.78))
w=1
break A
case"initial_line":t.jj(C.j5(A.bn,!1,4279310375,A.aG,16,A.bt,A.a8,0.08,C.cD(),"Initials: ______",0,D.dm,0.3,0.65,0.78))
w=1
break A
case"approved":t.jj(C.j5(A.K,!1,4278556265,A.aG,28,A.bt,A.u,0.12,C.cD(),"APPROVED",0,D.n9,0.32,0.62,0.08))
w=1
break A
case"draft":t.jj(C.j5(A.K,!1,4292617766,A.aG,28,A.bt,A.u,0.12,C.cD(),"DRAFT",0,D.dm,0.32,0.62,0.08))
w=1
break A
case"confidential":t.jj(C.j5(A.K,!1,871318596,A.aG,36,A.bt,A.u,0.12,C.cD(),"CONFIDENTIAL",0,D.dm,0.8,0.1,0.42))
w=1
break A
case"sticky":t.da(new C.eCa(t))
w=1
break A
case"progress":t.da(new C.eCb(t))
w=1
break A
case"stars":t.jj(C.j5(A.K,!1,4279310375,A.aG,36,A.bt,A.a8,0.12,C.cD(),"\u2605\u2605\u2605\u2605\u2606",0,D.qY,0.8,0.1,0.4))
w=1
break A
case"equation":t.jj(C.j5(A.K,!1,4279310375,A.aG,32,A.bt,A.V,0.14,C.cD(),"y = mx + b",0,D.dm,0.8,0.1,0.38))
w=1
break A
case"timeline":t.jj(C.j5(A.K,!1,4279310375,A.aG,18,A.bt,A.a8,0.2,C.cD(),"2024 \u2500\u2500\u25ba 2025 \u2500\u2500\u25ba 2026\nPhase 1    Phase 2    Phase 3",0,D.vd,0.8,0.1,0.35))
w=1
break A
case"two_col":t.da(new C.eCc(t))
w=1
break A
case"compare":t.da(new C.eCd(t))
w=1
break A
case"link_text":t.jj(C.j5(A.bn,!1,4280640491,A.nd,16,A.bt,A.a8,0.1,C.cD(),"https://example.com",0,D.dm,0.8,0.1,0.5))
w=1
break A
case"phone":t.jj(C.j5(A.bn,!1,4279310375,A.aG,18,A.bt,A.a8,0.1,C.cD(),"(555) 123-4567",0,D.dm,0.8,0.1,0.5))
w=1
break A
case"email":t.jj(C.j5(A.bn,!1,4280640491,A.aG,18,A.bt,A.a8,0.1,C.cD(),"name@email.com",0,D.dm,0.8,0.1,0.5))
w=1
break A
case"qr_placeholder":t.da(new C.eCf(t))
w=1
break A
case"cover_page":r=t.gdB()
if(r==null){w=1
break A}t.da(new C.eCg(t,r))
w=1
break A
case"invoice":t.jj(C.j5(A.bn,!1,4279179050,A.aG,16,A.bt,A.a8,0.84,C.cD(),"INVOICE #001\n\nBill To:\nItem\tQty\tPrice\nService A\t1\t$100\nTOTAL\t\t$100",0,D.dm,0.8,0.1,0.08))
w=1
break A
case"resume":t.jj(C.j5(A.bn,!1,4279179050,A.aG,17,A.bt,A.a8,0.84,C.cD(),"YOUR NAME\nJob Title\n\nExperience\n\u2022 Role at Company\n\nEducation\n\u2022 Degree",0,D.dm,0.8,0.1,0.08))
w=1
break A
case"minutes":t.jj(C.j5(A.bn,!1,4279310375,A.aG,16,A.bt,A.a8,0.88,C.cD(),"MEETING MINUTES\nDate: "+C.bFm()+"\nAttendees:\n\nDiscussion:\n\nDecisions:\n\nAction items:",0,D.dm,0.8,0.1,0.06))
w=1
break A
case"lab_report":t.jj(C.j5(A.bn,!1,4279310375,A.aG,17,A.bt,A.a8,0.88,C.cD(),"LAB REPORT\n\nHypothesis:\n\nProcedure:\n\nResults:\n\nConclusion:",0,D.dm,0.8,0.1,0.06))
w=1
break A
case"rubric":t.jj(C.j5(A.bn,!1,4279310375,A.aG,15,A.bt,A.a8,0.8,C.cD(),"RUBRIC\nCriteria\tExcellent\tGood\tNeeds work\nContent\t4\t3\t2\nOrganization\t4\t3\t2",0,D.dm,0.8,0.1,0.1))
w=1
break A}case 1:return B.h(u,v)}})
return B.i($async$qE,v)},
cyT(d){if(!this.y)return!1
if(this.w!=null)return!1
if(!d)return!0
return!D.faz.q(0,this.z)},
cyS(d){if(this.kc()==null)return!1
if(this.w!=null)return!1
if(d)return!1
return this.as},
baV(d,e,f,g,h,i){var w,v,u,t,s,r,q,p=null,o=d===D.ct,n=o?12:10
if(e)w=f.j(0.25)
else w=g?A.c.j(0.06):A.w.j(0.04)
v=B.m(12)
u=e?f:A.bA
u=B.L(u,A.r,o&&e?2:1)
t=C.inC(d)
s=o?12:18
r=o?A.H:A.cT
if(o)if(e)q=f
else q=g?A.ab:A.am
else q=p
n=B.a([B.q(p,B.d(t,p,p,p,p,p,p,B.l(p,p,q,p,p,p,p,p,p,p,p,s,p,p,r,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),A.f,p,p,new B.p(w,p,u,v,p,p,A.n),p,p,p,p,new B.R(n,8,n,8),p,p,p)],x.p)
if(i)n.push(B.ap(p,B.q(p,D.PN,A.f,p,p,D.Fj,p,12,p,p,p,p,p,12),p,p,p,-2,-2,p))
return new B.D(A.fz,B.aA(p,new B.an(A.a0,p,A.ad,A.f,n,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,h,p,p,p,p,p,p,!1,A.a4),p)},
bRo(d){var w,v=null,u=this.kc()
if(u==null)return A.bM
w=B.a([A.ae,B.d("Anim:",v,v,v,v,v,v,B.l(v,v,d?A.aD:A.am,v,v,v,v,v,v,v,v,10,v,v,A.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.bm],x.p)
A.d.v(w,new B.N(D.Sn,new C.eDz(this,u,d),x.bR))
return B.A(w,A.m,v,A.e,A.i,0,v,v)},
vO(d){return this.bDF(d)},
bDF(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$vO=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=D.aSB.q(0,d)
if(s){w=3
break}else f=s
w=4
break
case 3:w=5
return B.b(t.or(),$async$vO)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}t.da(new C.eBU(t,d))
case 1:return B.h(u,v)}})
return B.i($async$vO,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
if(h.x)return D.f8T
w=h.e
if(w==null)return h.bHz()
v=h.gdB()
v.toString
u=h.c
u.toString
t=B.S(u).ax.a===A.J
u=h.c
u.toString
s=x.w
r=B.aH(u,A.c1,s).w.a.a<900
q=!r
u=h.c
u.toString
p=B.aH(u,A.eQ,s).w.f.d>40
s=h.w==null
o=!s
u=!p
n=!u||o
m=t?A.c3:D.biV
l=x.p
k=B.a([],l)
if(s){j=h.e
j=j!=null&&j.gT7()}else j=!1
if(j)k.push(new C.a8M(h.a.c,!1,h.e.gbd9(),h.gceS(),g))
else if(s&&h.e!=null&&!h.ky()&&C.cl0(h.e.w)){j=h.a
k.push(new C.a8M(j.c,j.d,g,h.gcg0(),g))}if(s)k.push(h.bRj(w,t,r))
if(s&&h.ky()){w=t?A.fS:A.kO
j=B.m(14)
i=B.L(A.bl.j(0.35),A.r,1)
k.push(B.q(g,B.A(B.a([D.bXT,A.ae,B.E(B.d("Received copy \u2014 view, print, or download only. Editing is turned off.",g,g,g,g,g,g,B.l(g,g,t?A.c:A.fS,g,g,g,g,g,g,g,g,12,g,g,A.V,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),1)],l),A.m,g,A.e,A.i,0,g,g),A.f,g,g,new B.p(w,g,i,j,g,g,A.n),g,g,g,A.yB,A.iu,g,g,g))}w=!n
if(w&&!h.ky())k.push(h.c7i(t,r))
if(w&&h.ky())k.push(h.cGn(t))
if(r&&h.kc()!=null&&w&&!h.ky())k.push(h.c7d(t))
j=B.a([],l)
if(q&&w)j.push(new B.a5(132,g,h.b8C(t,!0),g))
i=B.a([],l)
if(r&&w)i.push(new B.a5(g,72,h.b8C(t,!1),g))
i.push(B.E(new B.bL(A.b7,g,g,h.bIU(v,t,!s||p),g),1))
if(h.cyT(r)&&u&&s&&!h.ky())i.push(h.ceE(v,t,r))
j.push(B.E(B.x(i,A.m,g,A.e,A.i,0,A.p),1))
if(q&&!h.ky()&&h.cyS(!1))j.push(new B.a5(240,g,h.bUe(t),g))
k.push(B.E(B.A(j,A.al,g,A.e,A.i,0,g,g),1))
if(u&&s)k.push(new B.a5(g,r?72:h.a.e,g,g))
w=B.a([B.x(k,A.m,g,A.e,A.i,0,A.p)],l)
if(o&&r)w.push(h.c7e(t))
return B.c4(g,m,B.bm(!1,new B.an(A.a0,g,A.ad,A.t,w,g),!0,!1,A.ag,!0,!0),g,!1,!1,g,!1)},
bHz(){var w,v,u,t,s,r=this,q=null,p=r.c
p.toString
w=B.S(p).ax.a===A.J
p=w?A.c3:A.bO
v=r.a.e
u=r.cdN(A.bl,A.qF,new C.eCC(r),r.gcib(),"School & document toolkit \u2014 edit PDFs, photos, sign papers, present, and build class decks","NGMY SLIDES")
t=x.p
s=B.A(B.a([B.E(r.aOD(A.bl,A.hW,"Blank Presentation",new C.eCD(r)),1),A.au,B.E(r.aOD(A.b1,A.uS,"Class Template",new C.eCE(r)),1)],t),A.m,q,A.e,A.i,0,q,q)
u=B.a([u,A.bz,s,A.nc,B.d("YOUR PRESENTATIONS",q,q,q,q,q,q,B.l(q,q,w?A.aD:A.am,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1.2,q,q,q,q,q,q),q,q,q),A.af],t)
t=r.d
if(t.length===0)u.push(r.bEs(w))
else{t=new B.i1(t,B.U(t).k("i1<1>"))
A.d.v(u,t.gdO(t).dL(0,new C.eCF(r,w),x.l))}return B.c4(q,p,B.bm(!1,B.cl(u,q,q,new B.R(18,12,18,v),q,q,A.ah,!1),!0,!1,A.ag,!0,!0),q,!1,!1,q,q)},
bPq(){this.m(new C.eDf(this))
var w=this.c
w.toString
if(B.aH(w,A.c1,x.w).w.a.a<900){w=$.aW.ap$.d.c
if(w!=null)w.jr()}},
agH(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$agH=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.kc()==null){w=1
break}s=t.c
s.toString
s=B.S(s)
r=t.c
r.toString
w=3
return B.b(B.bT(A.L,null,new C.eFq(t,s.ax.a===A.J),r,!0,!0,!0,null,!1,!1,x.H),$async$agH)
case 3:case 1:return B.h(u,v)}})
return B.i($async$agH,v)},
Bq(d,e){return this.cze(d,e)},
cze(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$Bq=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:j=r.c
j.toString
w=3
return B.b(B.i_(D.YO,!0,"Dismiss",j,new C.eGZ(),new C.eH_(d,e),A.iH,!0,x.N),$async$Bq)
case 3:o=g
if(o==null||r.c==null){w=1
break}j=o==="rename"
if(j||o==="duplicate")if(d.z){r.ak5()
w=1
break}n=o==="transfer_hati"
if(n&&d.z&&!d.gT7()){r.ak5()
w=1
break}w=o==="pdf"?4:6
break
case 4:t=8
w=11
return B.b(C.aRS(d),$async$Bq)
case 11:q=g
j=r.c
if(j==null){w=1
break}w=12
return B.b(C.aRi(j,q,d.b),$async$Bq)
case 12:t=2
w=10
break
case 8:t=7
i=s.pop()
p=B.ab(i)
j=r.c
if(j==null){w=1
break}j.L(x.q).f.U(B.b3(null,null,null,null,null,A.t,null,B.d("Could not create PDF: "+B.w(p),null,null,null,null,null,null,null,null,null,null),null,A.a_,null,null,null,null,null,null,null,null,null,null))
w=10
break
case 7:w=2
break
case 10:w=5
break
case 6:w=n?13:15
break
case 13:w=16
return B.b(r.FO(d,!1),$async$Bq)
case 16:w=14
break
case 15:w=o==="delete"?17:19
break
case 17:j=r.c
j.toString
w=20
return B.b(B.i_(D.YO,!0,"Dismiss",j,new C.eH0(),new C.eH1(d),A.a3,!0,x.y),$async$Bq)
case 20:if(g===!0)r.OC(d)
w=18
break
case 19:w=j?21:23
break
case 21:w=24
return B.b(r.ahJ("Rename presentation",d.b),$async$Bq)
case 24:l=g
if(l!=null)r.ctz(d,l)
w=22
break
case 23:if(o==="duplicate"){k=d.aj()
k.n(0,"id",C.cD())
k.n(0,"name",d.b+" (Copy)")
r.m(new C.eH2(r,k))
r.pJ()}case 22:case 18:case 14:case 5:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Bq,v)},
b3F(d,e){var w=null
return B.bN(!1,D.fV2,w,w,!0,w,w,w,e,w,B.fu(w,w,w,w,w,w,w,w,w,w,w,A.bl,w,w,w,A.az,w,A.lJ,w,w,w,w,w,A.kz,w,w))},
bEs(d){var w=this.fy
w===$&&B.c()
return B.c9(w,new C.eBZ(this,d),null)},
bNw(d,e,f){var w=new B.N(B.a(d.split(" \u2022 "),x.s),new C.eD3(),x.dv).bY(0,new C.eD4()),v=B.C(w,w.$ti.k("M.E"))
return new B.D(G.alc,this.aPd(v,e,new C.eD5(),f),null)},
aPd(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=x.p,l=B.a([],m)
for(w=f!=null,v=0;v<d.length;++v){u=B.a([],m)
if(v>0)u.push(A.e3)
t=e.j(g?0.14:0.1)
s=new B.aN(6,6)
r=new B.ay(e.j(g?0.55:0.45),1,A.r,-1)
q=B.a([],m)
if(w){p=f.$1(d[v])
A.d.v(q,B.a([B.X(p,g?A.ab:A.bv,n,n,n,10),A.r4],m))}p=d[v]
o=g?A.c.j(0.85):A.aM
q.push(B.d(p,n,1,n,n,n,n,new B.H(!0,o,n,n,n,n,9.5,A.H,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n))
u.push(B.q(n,new B.c7(A.aL,A.e,A.Q,A.m,n,A.p,n,0,q,n),A.f,n,n,new B.p(t,n,new B.bF(r,r,r,r),new B.be(s,s,s,s),n,n,A.n),n,n,n,n,A.n_,n,n,n))
A.d.v(l,u)}return B.ev(A.a6,B.A(l,A.m,n,A.e,A.Q,0,n,n),A.f,A.e2)},
bEq(d,e,f){return this.aPd(d,e,null,f)},
bNy(d,e,f){var w,v=d.w
if(v==="hati_kuhowa")w=D.dsQ
else if(v==="hati_kuhoweya")w=D.ddh
else{if(v==="hati_kiapo_uongozi")v=D.cZU
else v=C.kL(v)?D.d6I:A.RZ
w=v}v=this.fy
v===$&&B.c()
return B.c9(v,new C.eD8(this,f,d,e,w),null)},
c7e(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.kc()
if(i==null||i.b!==D.cW)return A.bM
w=k.Xv(i)
v=k.avo(i)
u=A.w.j(0.55)
t=x.p
s=B.bm(!1,new B.D(A.Cc,B.A(B.a([B.d("Edit text",j,j,j,j,j,j,B.l(j,j,A.c.j(0.9),j,j,j,j,j,j,j,j,15,j,j,A.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),A.b5,B.bN(!1,D.fQq,j,j,!0,j,j,j,new C.eEz(k),j,j)],t),A.m,j,A.e,A.i,0,j,j),j),!0,!1,A.ag,!0,!0)
r=d?A.as:A.c
q=B.m(18)
p=B.L(A.bl.j(0.45),A.r,1)
o=B.a([new B.ac(0,A.G,A.w.j(0.25),A.I,20)],x.V)
n=i.x
m=i.y
l=i.z
r=B.E(new B.D(A.hd,B.c3(new B.D(A.eY,B.aM(j,A.Z,!0,j,!0,A.t,j,B.aO(),w,A.bl,j,j,j,j,2,D.c3_,A.y,!0,j,!0,j,!0,v,A.ak,j,j,j,j,j,A.xe,j,j,j,j,j,j,!1,"\u2022",j,new C.eEA(k,i),j,j,j,!1,j,j,!1,j,!0,j,A.ac,j,j,j,j,j,j,j,j,j,j,j,B.l(j,j,d?A.c:A.S,j,l,j,j,j,j,j,j,18,m,j,n,j,1.35,!0,j,j,j,j,j,j,j,j),!0,A.a5,A.AE,A.ao,j,A.Vc,j,j),j),new B.p(r,j,p,q,o,j,A.n),A.bj),j),1)
q=B.m(16)
p=d?A.bp:A.c
o=B.L(d?A.aM:A.aO,A.r,1)
n=B.E(B.cg(B.A(B.a([k.uF(G.OP,j,new C.eEB(k,i),d),k.uF(G.a1R,j,new C.eEC(k,i),d),k.uF(I.apC,j,new C.eED(k,i),d),k.uF(I.a2D,j,new C.eEE(k,i),d),k.uF(k.bEo(i.as),j,new C.eEF(k,i),d),k.uF(D.aqI,j,new C.eEG(k,i),d),k.uF(D.aqH,j,new C.eEH(k,i),d)],t),A.m,j,A.e,A.i,0,j,j),A.t,j,A.y,j,j,j,j,A.aL),1)
m=A.j.M(i.w)
return B.bR(0,B.aJ(!1,A.a3,!0,j,B.x(B.a([s,r,new B.D(H.all,B.q(j,B.A(B.a([n,A.ae,B.d(""+m+" pt",j,j,j,j,j,j,B.l(j,j,d?A.aD:A.am,j,j,j,j,j,j,j,j,11,j,j,A.H,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),A.de],t),A.m,j,A.e,A.i,0,j,j),A.f,j,j,new B.p(p,j,o,q,j,j,A.n),j,j,j,j,A.lK,j,j,j),j)],t),A.m,j,A.e,A.i,0,A.p),A.f,u,0,j,j,j,j,j,A.aj),0,0,0)},
c7d(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.kc()
if(m==null)return A.bM
w=m.b
v=w===D.cW
u=B.m(18)
t=x.O
t=d?B.a([A.bp,A.S],t):B.a([A.c,A.aP],t)
s=B.L(d?A.aM:A.aO,A.r,1)
r=B.a([new B.ac(0,A.G,A.w.j(0.12),A.cA,16)],x.V)
q=x.p
p=B.a([],q)
if(v)p.push(o.b7d(A.j2,"Edit",new C.eEk(o,m),d,!0))
if(w===D.lR)p.push(o.b7d(A.HM,"Shape & ring",new C.eEl(o),d,!0))
p.push(o.uF(A.D2,"Format",new C.eEm(o),d))
if(v)A.d.v(p,B.a([o.uF(G.OP,n,new C.eEn(o,m),d),o.uF(D.aqI,n,new C.eEo(o,m),d),o.uF(D.aqH,n,new C.eEp(o,m),d)],q))
p.push(A.b5)
p.push(o.cx5(A.eh,n,o.gaTm(),d,!0))
p.push(o.uF(A.hI,"Done",new C.eEq(o),d))
return B.q(n,B.A(p,A.m,n,A.e,A.i,0,n,n),A.f,n,n,new B.p(n,n,s,u,r,new B.a9(A.a6,A.aa,A.x,t,n,n),A.n),n,n,n,A.Cb,A.lK,n,n,n)},
bEo(d){switch(d.a){case 2:return D.a2A
case 1:case 5:return D.a2C
default:return D.a2B}},
c88(d){switch(d.a){case 0:case 4:return A.K
case 2:return A.e_
default:return A.bn}},
aBS(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o,n=null
if(i)w=A.ay
else if(h)w=A.c
else{v=g?A.ab:A.aM
w=v}v=B.m(12)
u=B.m(12)
t=h?K.I4:n
if(h)s=n
else s=g?A.c.j(0.06):A.bO
r=e==null
q=r?10:12
p=x.p
o=B.a([B.X(d,w,n,n,n,16)],p)
if(!r)A.d.v(o,B.a([A.e3,B.d(e,n,n,n,n,n,n,B.l(n,n,w,n,n,n,n,n,n,n,n,12,n,n,A.H,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],p))
return new B.D(A.qw,B.aJ(!1,A.a3,!0,n,B.aP(!1,v,!1,B.eJ(new B.D(new B.R(q,8,q,8),B.A(o,A.m,n,A.e,A.Q,0,n,n),n),n,new B.p(s,n,n,u,n,t,A.n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,f,n,n,n,n,n,n,n),A.f,A.L,0,n,n,n,n,n,A.aj),n)},
uF(d,e,f,g){return this.aBS(d,e,f,g,!1,!1)},
b7d(d,e,f,g,h){return this.aBS(d,e,f,g,h,!1)},
cx5(d,e,f,g,h){return this.aBS(d,e,f,g,!1,h)},
bRj(d,e,f){var w,v,u,t,s,r,q,p=this,o=null,n=B.m(20),m=x.O
m=e?B.a([A.bp,A.S],m):B.a([A.c,A.np],m)
w=B.L(e?A.aM:A.nm,A.r,1.2)
v=B.a([new B.ac(0,A.G,A.bl.j(e?0.18:0.1),A.cA,18)],x.V)
u=p.a3A(A.eN,"Back",p.gbKD(),e)
t=d.b
s=f?14:15
t=B.d(t,o,1,A.a2,o,o,o,B.l(o,o,e?A.c:A.S,o,o,o,o,o,o,o,o,s,o,o,A.u,o,o,!0,o,-0.2,o,o,o,o,o,o),o,o,o)
s=p.f
r=d.r.length
q=x.p
r=B.a([u,A.de,B.E(B.A(B.a([new B.dp(1,A.cr,t,o),A.ae,B.d(""+(s+1)+" of "+r,o,1,o,o,o,o,B.l(o,o,e?A.bW:A.am,o,o,o,o,o,o,o,o,11,o,o,A.V,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],q),A.ui,o,A.e,A.i,0,A.d1,o),1)],q)
if(!p.ky()){u=p.a3A(A.pu,"Undo",p.ax.length===0?o:p.gcGY(),e)
A.d.v(r,B.a([u,p.a3A(D.bRl,"Redo",p.ay.length===0?o:p.gcsf(),e)],q))}r.push(p.a3A(A.z6,"PDF",new C.eDs(p),e))
r.push(p.a3A(A.hX,"Download as video",new C.eDt(p),e))
if(!p.ky())r.push(B.CA(o,o,B.X(A.ow,e?A.ab:A.bv,o,o,o,o),new C.eDu(p),A.I,new C.eDv(p),A.ag,"More",x.N))
r.push(A.de)
r.push(B.aJ(!1,A.a3,!0,o,B.aP(!1,B.m(14),!0,B.eJ(D.erN,o,new B.p(o,o,o,B.m(14),o,K.I4,A.n),o,o,o),o,!0,o,o,o,o,o,o,o,o,o,o,o,p.gaCH(),o,o,o,o,o,o,o),A.f,A.L,0,o,o,o,o,o,A.aj))
return B.q(o,B.A(r,A.m,o,A.e,A.i,0,o,o),A.f,o,o,new B.p(o,o,w,n,v,new B.a9(A.aA,A.aF,A.x,m,o,o),A.n),o,o,o,D.bBu,D.bGT,o,o,o)},
cGn(d){var w=this,v=null,u=B.m(18),t=d?A.as.j(0.92):A.c.j(0.96),s=B.L(d?A.cq:A.aO,A.r,1)
return B.q(v,B.cg(B.A(B.a([w.j5(A.uQ,"Print",new C.eHK(w),d),w.j5(A.z6,"Download PDF",new C.eHL(w),d),w.j5(A.qL,"Present",w.gaCH(),d)],x.p),A.m,v,A.e,A.i,0,v,v),A.t,v,A.y,v,v,v,v,A.aL),A.f,v,v,new B.p(t,v,s,u,v,v,A.n),v,v,v,A.yB,G.amW,v,v,v)},
a3A(d,e,f,g){var w,v=null
if(f==null)w=g?A.aT:A.ds
else w=g?A.ab:A.aM
return B.aG(v,v,v,v,B.X(d,w,v,v,v,20),v,v,v,f,v,v,v,v,e,A.cf)},
c7i(d,e){var w,v,u,t,s,r=this,q=null,p=B.a(["Home","Insert","School","Tools","Design","Transitions","View"],x.s),o=r.e
if(o==null)o=q
else{o=o.CW
o=(o==null?"":o).length!==0}w=o===!0
o=B.m(18)
v=d?A.as.j(0.92):A.c.j(0.96)
u=B.L(d?A.cq:A.aO,A.r,1)
t=x.f0
t=B.C(new B.N(p,new C.eEK(r,d),t),t.k("ak.E"))
t.push(new B.D(A_.amB,new B.ff(new C.eEL(r),q),q))
A.d.v(t,w?B.a([new B.D(T.wn,r.aiq(A.kv,"Ending celebration",r.gcio(),d),q),new B.D(T.wn,r.aiq(A.HM,"Logo ring & frame",r.gcj5(),d),q)],x.p):A.f6)
A.d.v(t,w?B.a([new B.D(T.wn,r.aiq(A.mi,"Look and feel",r.gcj6(),d),q),new B.D(T.wn,r.aiq(A.px,"Edit this slide's text",r.gcjD(),d),q)],x.p):A.f6)
t.push(new B.D(T.wn,B.hb(B.aA(q,B.q(q,D.f8h,A.f,q,q,new B.p(q,q,q,B.m(999),B.a([new B.ac(0,A.G,N.lF.j(0.4),A.I,10)],x.V),D.asM,A.n),q,34,q,q,A.f3,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.eEM(r),q,q,q,q,q,q,!1,A.a4),q,"Books \u2014 write and print a fold & staple book",q,q),q))
t=B.cg(B.A(t,A.m,q,A.e,A.i,0,q,q),A.t,q,A.y,q,D.bHn,q,q,A.aL)
s=e?8:10
return B.q(q,B.x(B.a([t,B.cg(r.cuH(d),A.t,q,A.y,q,new B.R(8,2,8,s),q,q,A.aL)],x.p),A.al,q,A.e,A.i,0,A.p),A.f,q,q,new B.p(v,q,u,o,q,q,A.n),q,q,q,A.yB,q,q,q,q)},
cuH(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0="Text Box",a1="New Slide",a2="Delete Slide"
switch(e.z){case"School":w=B.a([],x.p)
for(v=0;v<5;++v){u={}
t=D.dm0[v]
u.a=null
s=u.a=t.b
w.push(e.lY(e.cwt(s),t.a,new C.eG8(u,e),a3,D.aSB.q(0,s)))}w.push(e.j5(A.lk,"Notes Slide",new C.eG9(e),a3))
w.push(e.lY(A.HL,"Quiz",new C.eGa(e),a3,!0))
w.push(e.lY(P.Hm,"Worksheet",new C.eGl(e),a3,!0))
w.push(e.lY(X.HO,"Flashcard",new C.eGw(e),a3,!0))
w.push(e.lY(A.PD,"Lab Report",new C.eGH(e),a3,!0))
w.push(e.lY(A.qI,"Rubric",new C.eGO(e),a3,!0))
w.push(e.lY(A.pq,"Minutes",new C.eGP(e),a3,!0))
w.push(e.lY(A.ov,"Syllabus",new C.eGQ(e),a3,!0))
w.push(e.lY(A.a3a,"Timeline",new C.eGR(e),a3,!0))
return B.A(w,A.m,d,A.e,A.i,0,d,d)
case"Tools":w=B.a([],x.p)
for(v=0;v<74;++v){r=D.dnn[v]
w.push(e.lY(r.b,r.c,new C.eGS(e,r),a3,!D.aSH.q(0,A.a.i(r.a))))}return B.A(w,A.m,d,A.e,A.i,0,d,d)
case"Insert":return B.A(B.a([e.j5(A.wL,a0,e.gaOU(),a3),e.j5(A.uM,"Picture",new C.eGb(e),a3),e.j5(A.zg,"Bio link",new C.eGc(e),a3),e.j5(A.a39,"Table",new C.eGd(e),a3),e.j5(A.PH,"Sticky",new C.eGe(e),a3),e.j5(A.t_,"Divider",new C.eGf(e),a3),e.j5(A.zp,"Header",new C.eGg(e),a3),e.lY(A6.rY,"Rectangle",new C.eGh(e),a3,!0),e.lY(A.pn,"Circle",new C.eGi(e),a3,!0),e.lY(A.a2q,"Triangle",new C.eGj(e),a3,!0),e.lY(A.jF,"Arrow",new C.eGk(e),a3,!0),e.lY(D.bPN,"Parallelogram",new C.eGm(e),a3,!0),e.lY(D.bSh,"Hexagon",new C.eGn(e),a3,!0),e.lY(A.t_,"Line",new C.eGo(e),a3,!0),e.lY(A.z6,"PDF",new C.eGp(e),a3,!0),e.lY(N.a3j,"Signature",new C.eGq(e),a3,!0),e.j5(A5.CO,"Quote",new C.eGr(e),a3),e.j5(D.a1Z,a1,new C.eGs(e),a3)],x.p),A.m,d,A.e,A.i,0,d,d)
case"Design":w=e.c
w.toString
w=B.aH(w,A.c1,x.w).w
u=x.p
t=B.A(B.a([e.aPM("Wide 16:9",D.DV,a3),e.aPM("Short 9:16",D.oN,a3),new B.D(A.fz,B.n2(D.bUq,d,D.fMD,d,new C.eGt(e),d,d,d,d),d)],u),A.m,d,A.e,A.i,0,d,d)
q=B.A(B.a([e.bKS("This slide",!e.Q,a3,new C.eGu(e)),A.bm,e.aS1("All slides",e.Q,a3,new C.eGv(e),!0)],u),A.m,d,A.e,A.i,0,d,d)
p=e.bKT()
p=B.d(p,d,d,d,d,d,d,B.l(d,d,a3?A.bW:A.bK,d,d,d,d,d,d,d,d,10,d,d,A.a8,d,d,!0,d,d,d,d,d,d,d,d),d,d,d)
o=B.d("COLORS",d,d,d,d,d,d,B.l(d,d,a3?A.aD:A.am,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
n=x.cT
n=B.C(new B.N(D.a5g,new C.eGx(e),n),n.k("ak.E"))
n=B.cg(B.A(n,A.m,d,A.e,A.i,0,d,d),A.t,d,A.y,d,d,d,d,A.aL)
m=B.d("TEXT COLORS",d,d,d,d,d,d,B.l(d,d,a3?A.aD:A.am,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
l=B.a([],u)
for(v=0;v<10;++v){k=D.don[v]
j=B.b0(k)
i=new B.ay(k===4294967295?A.ds:A.aT,1.5,A.r,-1)
l.push(new B.D(A.fz,B.aA(d,B.q(d,d,A.f,d,d,new B.p(j,d,new B.bF(i,i,i,i),d,d,d,A.a7),d,24,d,d,d,d,d,24),A.y,!1,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,new C.eGy(e,k),d,d,d,d,d,d,!1,A.a4),d))}l=B.cg(B.A(l,A.m,d,A.e,A.i,0,d,d),A.t,d,A.y,d,d,d,d,A.aL)
j=B.d("SLIDE DESIGNS \xb7 first 5 free",d,d,d,d,d,d,B.l(d,d,a3?A.aD:A.am,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
h=$.bGC()
g=B.U(h).k("N<1,D>")
h=B.C(new B.N(h,new C.eGz(e,a3),g),g.k("ak.E"))
return new B.a5(w.a.a-20,d,B.x(B.a([t,A.U,q,A.an,p,A.U,o,A.ax,n,A.U,m,A.ax,l,A.U,j,A.ax,B.cg(B.A(h,A.m,d,A.e,A.i,0,d,d),A.t,d,A.y,d,d,d,d,A.aL),A.an,e.c3Z(a3)],u),A.E,d,A.e,A.Q,0,A.p),d)
case"Transitions":f=e.kc()
w=e.c
w.toString
w=B.aH(w,A.c1,x.w).w
u=new C.eG7(e)
t=new C.eGT(e,a3)
q=x.p
p=B.a([],q)
if(f!=null){o=B.d("ELEMENT ANIMATION",d,d,d,d,d,d,B.l(d,d,a3?A.aD:A.am,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
n=t.$4(D.Sn,f.dy,new C.eGA(e,u,f),A.b1)
A.d.v(p,B.a([o,A.ax,n,A.U,B.d("SLIDE TRANSITION",d,d,d,d,d,d,B.l(d,d,a3?A.aD:A.am,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d),A.ax],q))}q=e.gdB()
q=q==null?d:q.r
p.push(t.$4(D.Sn,q,new C.eGB(e,u),A.bl))
return new B.a5(w.a.a-20,d,B.x(p,A.E,d,A.e,A.Q,0,A.p),d)
case"View":w=e.y?"Hide Notes":"Show Notes"
return B.A(B.a([e.j5(A.lk,w,new C.eGC(e),a3),e.j5(A.uQ,"Print deck",new C.eGD(e),a3),e.lY(D.aoJ,"Export JSON",new C.eGE(e),a3,!0),e.j5(A.fW,"Duplicate Slide",e.gaUh(),a3),e.j5(A.eh,a2,e.gaTn(),a3),e.cAA(a3)],x.p),A.m,d,A.e,A.i,0,d,d)
case"Home":default:f=e.kc()
w=x.p
u=B.a([e.j5(D.a1Z,a1,new C.eGF(e),a3),e.j5(A.fW,"Duplicate",e.gaUh(),a3),e.j5(A.eh,a2,e.gaTn(),a3),e.j5(A.qL,"Present",e.gaCH(),a3),e.j5(A.D0,a0,e.gaOU(),a3),e.j5(A.CT,"Fit Text",new C.eGG(e),a3),e.j5(A.z6,"Download PDF",new C.eGI(e),a3)],w)
t=e.e
if(t!=null){t=t.w
t=t==="hati_kuhowa"||t==="hati_kuhoweya"}else t=!1
if(t)u.push(e.j5(A.jJ,"Transfer",new C.eGJ(e),a3))
if(f!=null){w=B.a([A.ae,e.j5(G.OP,"Bold",new C.eGK(e,f),a3),e.j5(G.a1R,"Italic",new C.eGL(e,f),a3),e.j5(G.aok,"Underline",new C.eGM(e,f),a3),e.j5(Ag.OQ,"Bullets",new C.eGN(e,f),a3),e.bTY(f,a3)],w)
if(!A.a.a0(f.db,"__design__"))w.push(e.bRo(a3))
w.push(e.j5(D.bOu,"Delete",e.gaTm(),a3))
A.d.v(u,w)}return B.A(u,A.m,d,A.e,A.i,0,d,d)}},
aPM(d,e,f){var w,v,u,t=null,s=this.e
s=s==null?t:s.d
w=e===D.oN
v=x.p
u=B.a([B.d(d,t,t,t,t,t,t,G.abn,t,t,t)],v)
if(w)A.d.v(u,B.a([A.de,D.bTC],v))
return new B.D(A.fz,B.jv(t,t,t,B.A(u,A.m,t,A.e,A.Q,0,t,t),t,new C.eCx(this,w,e),s===e,A.bl.j(0.25),t,t,t),t)},
cAA(d){var w,v,u,t,s,r=this,q=null,p=r.gdB()
if(p==null)return A.bM
w=p.w
if(!(w>0)){v=r.e
v=v==null?q:v.e
w=v==null?5:v}v=B.L(d?A.aT:A.cu,A.r,1)
u=B.m(8)
t=B.X(A.Hk,d?A.aD:A.am,q,q,q,14)
s=B.aG(q,q,q,q,D.arK,q,q,q,new C.eHf(r,p),q,q,q,q,q,A.cf)
return B.q(q,B.A(B.a([t,s,B.d(""+w+"s",q,q,q,q,q,q,B.l(q,q,d?A.c:A.bo,q,q,q,q,q,q,q,q,11,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.aG(q,q,q,q,D.arB,q,q,q,new C.eHg(r,p),q,q,q,q,q,A.cf)],x.p),A.m,q,A.e,A.Q,0,q,q),A.f,q,q,new B.p(q,q,v,u,q,q,A.n),q,q,q,A.GZ,A.mZ,q,q,q)},
cwt(d){switch(d.a){case 6:return X.HO
case 7:return A.HL
case 8:return P.Hm
case 4:return A.zp
default:return A.lk}},
bTY(d,e){var w=null,v=B.L(e?A.aT:A.cu,A.r,1),u=B.m(8),t=B.aG(w,w,w,w,D.arK,w,w,w,new C.eDF(this,d),w,w,w,w,w,A.cf),s=A.j.M(d.w)
return B.q(w,B.A(B.a([t,B.d(""+s,w,w,w,w,w,w,B.l(w,w,e?A.c:A.bo,w,w,w,w,w,w,w,w,w,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aG(w,w,w,w,D.arB,w,w,w,new C.eDG(this,d),w,w,w,w,w,A.cf)],x.p),A.m,w,A.e,A.Q,0,w,w),A.f,w,w,new B.p(w,w,v,u,w,w,A.n),w,w,w,A.ux,A.mZ,w,w,w)},
c3Z(d){var w=null
return B.CA(B.E3(B.X(A8.a21,d?A.ab:A.bv,w,w,w,16),w,w,D.fSl,w,w,w),w,w,new C.eEc(),A.I,this.gbF5(),A.cl,"Slide layout",x.fO)},
lY(d,e,f,g,h){var w=null,v=B.m(14),u=B.m(14),t=g?A.c.j(0.06):A.bO,s=B.L(g?A.dl:A.aO,A.r,1),r=x.p,q=B.a([B.X(d,g?A.dk:A.bl,w,w,w,18)],r)
if(h)q.push(B.ap(w,B.q(w,D.PN,A.f,w,w,D.Fj,w,12,w,w,w,w,w,12),w,w,w,-6,-4,w))
return new B.D(A.fz,B.aJ(!1,A.a3,!0,w,B.aP(!1,v,!0,B.eJ(new B.D(A.hd,B.x(B.a([new B.an(A.a0,w,A.ad,A.f,q,w),A.cU,B.d(e,w,w,w,w,w,w,B.l(w,w,g?A.aS:A.bv,w,w,w,w,w,w,w,w,9,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],r),A.m,w,A.e,A.Q,0,A.p),w),w,new B.p(t,w,s,u,w,w,A.n),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),A.f,A.L,0,w,w,w,w,w,A.aj),w)},
j5(d,e,f,g){return this.lY(d,e,f,g,!1)},
b8C(d,e){var w,v,u=this,t=null,s=u.e
s.toString
w=e?A.ah:A.aL
v=B.hN(t,new C.eHr(u,s,e,d),s.r.length,A.cl,t,w,new C.eHs(e),!1)
s=d?A.as:A.bO
w=B.a([],x.p)
if(e&&!u.ky())w.push(new B.D(A.cl,B.ID(E.arY,new C.eHt(u),B.o_(t,A.bl,t,t,t,t,t,t,t,t,t,t,E.aTm,t,t,t,t),"Add slide"),t))
w.push(B.E(v,1))
return B.q(t,B.x(w,A.m,t,A.e,A.i,0,A.p),A.f,s,t,t,t,t,t,t,t,t,t,t)},
bIU(d,e,f){var w,v=null,u=this.e
if(u==null)w=v
else{u=u.d===D.oN?0.5625:1.7777777777777777
w=u}if(w==null)w=1.7777777777777777
u=f?8:16
return new B.D(new B.R(u,u,u,u),new B.bL(A.b7,v,v,new B.fF(w,B.aA(v,B.cs(new C.eCW(this,d,e)),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.eCX(this),v,v,v,v,v,v,!1,A.a4),v),v),v)},
bIW(b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=a7.e,b0=(a9==null?a8:C.kL(a9.w))===!0,b1=b0&&C.fQo(b3),b2=b0&&b3.b===D.ls&&A.a.a0(b3.db,"marriage_sign_placed_")
if(b0){a9=b3.db
w=a9==="__kiapo_video__"||A.a.a0(a9,"__kiapo_video___")}else w=!1
if(!a7.ky())v=!b0||a7.c6l(b3)
else v=!1
if(!a7.ky())u=!b0||a7.c6k(b3)
else u=!1
t=v&&a7.r===b3.a
s=b4/960
a9=b3.db
r=A.a.a0(a9,"__design__")||A.a.a0(b3.a,"design_")?A.ca:A.bl
q=b0&&A.a.a0(a9,"marriage_field_")
if(b0)p=a9==="marriage_locked_nim_akuna_deni"||a9==="marriage_locked_nim_akuna_box"||a9==="marriage_locked_nim_akuna_tick"||a9==="marriage_locked_nim_akuna_hit"
else p=!1
if(w&&C.hfj(b3))o=a8
else if(p&&!a7.ky())o=a7.gceU()
else o=a7.ky()?a8:new C.eCK(a7,w,b3,b1,b2,v)
a9=b3.a
n=b3.c
m=b3.d
l=b3.e
k=b3.f
j=p?A.c5:A.iL
i=w&&C.hfj(b3)&&a7.Ap()?new C.eCL(a7,b3):a8
h=v&&b3.b===D.cW?new C.eCM(a7,b3):a8
g=u?new C.eCN(a7,b3,b4,b5):a8
f=b3.cx
if(t)if(a7.w===a9)e=A.bg
else e=q?A.c4:r
else e=A.L
e=B.L(e,A.r,t?2:0)
d=B.m(t?6:0)
if(b1)a0=A.c4.j(0.08)
else a0=b3.b===D.ls?A.L:a8
if(b1){a1=a7.ky()?"":"Tap to sign"
a1=B.at(B.d(a1,a8,a8,a8,a8,a8,a8,B.l(a8,a8,A.c4.j(0.7),a8,a8,a8,a8,a8,a8,a8,a8,10*s,a8,a8,A.V,a8,a8,!0,a8,a8,a8,a8,a8,a8,a8,a8),a8,a8,a8),a8,a8,a8)}else{if(a7.w===a9){a1=a7.c
a1.toString
a1=!(B.aH(a1,A.c1,x.w).w.a.a<900)}else a1=!1
a2=w&&a7.Ap()
a3=b3.b===D.cW
a4=a3?a7.Xv(b3):a8
a5=a3?a7.avo(b3):a8
if(a7.w===a9){a6=a7.c
a6.toString
a6=!(B.aH(a6,A.c1,x.w).w.a.a<900)}else a6=!1
a6=a6?new C.eCO(a7,b3):a8
a3=v&&a3?new C.eCP(a7,b3):a8
a6=C.b3c(q,a4,a1,b3,a5,a2,a3,new C.eCQ(a7,w,b3,v),a6,s,t,!0)
a1=a6}d=B.a([B.q(a8,a1,A.f,a8,a8,new B.p(a0,a8,e,d,a8,a8,A.n),a8,a8,a8,a8,a8,a8,a8,a8)],x.p)
if(t&&u&&a7.w!==a9){e=B.m(6)
d.push(B.ap(-4,B.aA(a8,B.q(a8,D.bWr,A.f,a8,a8,new B.p(r,a8,B.L(A.c,A.r,1.5),e,a8,a8,A.n),a8,22,a8,a8,a8,a8,a8,22),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.eCR(a7,b3,b4,b5),a8,a8,new C.eCS(a7,b3),a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,!1,A.a4),a8,a8,a8,-4,a8,a8))}if(b0&&!a7.ky()&&b3.db==="marriage_locked_nim_n_4")d.push(B.ap(a8,B.aA(a8,B.q(a8,D.bX8,A.f,a8,a8,new B.p(A.db,a8,B.L(A.c,A.r,1.2),a8,B.a([new B.ac(0,A.G,A.w.j(0.25),A.I,4)],x.V),a8,A.a7),a8,20,a8,a8,a8,a8,a8,20),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a7.gc1t(),a8,a8,a8,a8,a8,a8,!1,A.a4),a8,a8,a8,-6,-6,a8))
if(b0&&!a7.ky()&&A.a.a0(b3.db,"marriage_field_tarehe:"))d.push(B.ap(a8,B.aA(a8,B.q(a8,D.bYM,A.f,a8,a8,new B.p(A.c4,a8,B.L(A.c,A.r,1.2),a8,B.a([new B.ac(0,A.G,A.w.j(0.25),A.I,4)],x.V),a8,A.a7),a8,20,a8,a8,a8,a8,a8,20),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.eCT(a7,b3),a8,a8,a8,a8,a8,a8,!1,A.a4),a8,a8,a8,-6,-6,a8))
e=!1
if(t)if(b3.b===D.cW)if(a7.w!==a9){e=a7.c
e.toString
e=B.aH(e,A.c1,x.w).w.a.a<900}if(e)d.push(B.ap(-28,B.at(B.aA(a8,B.q(a8,D.h0v,A.f,a8,a8,new B.p(A.bl,a8,a8,B.m(999),B.a([new B.ac(0,A.G,A.w.j(0.2),A.I,8)],x.V),a8,A.n),a8,a8,a8,a8,A.lh,a8,a8,a8),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.eCU(a7,b3),a8,a8,a8,a8,a8,a8,!1,A.a4),a8,a8,a8),a8,a8,0,0,a8,a8))
return B.ap(a8,B.aA(j,B.eM(A.A,f,new B.an(A.a0,a8,A.ad,A.f,d,a8),a8),A.y,!1,a8,h,a8,a8,a8,a8,a8,a8,i,a8,a8,a8,a8,a8,a8,g,a8,a8,a8,a8,a8,a8,a8,o,a8,a8,a8,a8,a8,a8,!1,A.a4),k*b5,new B.bM("el_"+a9,x.W),n*b4,a8,m*b5,l*b4)},
aS1(d,e,f,g,h){var w,v,u,t,s,r=null
if(e)w=A.bl.j(0.25)
else w=f?A.c.j(0.06):A.w.j(0.04)
v=B.m(10)
u=B.L(e?A.bl:A.bA,A.r,1)
if(e)t=A.bl
else t=f?A.aD:A.am
s=x.p
t=B.a([B.d(d,r,r,r,r,r,r,B.l(r,r,t,r,r,r,r,r,r,r,r,10,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],s)
if(h)A.d.v(t,B.a([A.de,B.q(r,D.PN,A.f,r,r,D.Fj,r,12,r,r,r,r,r,12)],s))
return B.aA(r,B.q(r,B.A(t,A.m,r,A.e,A.Q,0,r,r),A.f,r,r,new B.p(w,r,u,v,r,r,A.n),r,r,r,r,A.hb,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,g,r,r,r,r,r,r,!1,A.a4)},
bKS(d,e,f,g){return this.aS1(d,e,f,g,!1)},
ceE(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=d.a
if(m.cy!==k){m.cy=k
w=m.cx
v=w.h(0,k)
if(v!=null){v.T$=$.aw()
v.P$=0}v=d.c
w.n(0,k,new B.au(new B.ba(v,A.b6,A.aQ),$.aw()))}k=m.cx.h(0,k)
k.toString
w=f?8:10
v=f?8:10
u=e?A.as:A.aP
t=f?A.xI:l
if(f)s=new B.bF(new B.ay(e?A.bA:A.aO,1,A.r,-1),A.a1,A.a1,A.a1)
else s=l
r=f?B.a([new B.ac(0,A.G,A.w.j(0.12),A.tm,16)],x.V):l
q=x.p
p=B.A(B.a([B.d("Speaker Notes",l,l,l,l,l,l,B.l(l,l,e?A.ab:A.bv,l,l,l,l,l,l,l,l,12,l,l,A.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),A.b5,m.b3F(e,new C.eEO(m))],q),A.m,l,A.e,A.i,0,l,l)
o=B.l(l,l,e?A.c:A.aM,l,l,l,l,l,l,l,l,12,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
n=B.l(l,l,e?A.bW:A.bK,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
return B.q(l,B.x(B.a([p,A.an,B.E(B.aM(l,A.Z,!1,l,!0,A.t,l,B.aO(),k,l,l,l,l,l,2,B.bt(l,new B.b6(4,B.m(10),A.dq),l,A.bV,l,l,l,l,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,n,"Speaker notes for this slide\u2026",l,l,l,l,l,!0,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ak,l,l,l,l,l,l,l,l,l,2,l,l,!1,"\u2022",l,new C.eEP(m,d),l,l,l,!1,l,l,!1,l,!0,l,A.ac,l,l,l,l,l,l,l,l,l,l,l,o,!0,A.a5,l,A.ao,l,l,l,l),1)],q),A.al,l,A.e,A.i,0,A.p),A.f,l,l,new B.p(u,l,s,t,r,l,A.n),l,96,l,l,new B.R(12,w,12,v),l,l,l)},
aVA(a3,a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=null,a2=a0.kc()
if(a2==null)return A.bM
w=new C.eDT(a0,a6)
v=B.a([4279310375,4294967295,4280640491,4278556265,4292617766,4286331629,4293548044,4281549141],x.t)
u=A.j.E(1-a2.c,0.06,1)
t=A.j.E(1-a2.d,0.06,1)
s=A.j.E(1-a2.e,0.01,1)
r=A.j.E(1-a2.f,0.01,1)
q=a5?A.dW:a1
p=x.p
o=B.a([],p)
n=!a5
if(n)o.push(B.A(B.a([B.d("Format",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.c:A.S,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,A.u,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),A.b5,a0.b3F(a3,a0.gbPp())],p),A.m,a1,A.e,A.i,0,a1,a1))
if(n)o.push(A.X)
o.push(B.d("Size",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aD:A.am,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1))
o.push(B.A(B.a([D.fN9,B.E(B.kV(a1,a1,a1,u,0.05,new C.eDU(w,a2),A.j.E(a2.e,0.05,u)),1)],p),A.m,a1,A.e,A.i,0,a1,a1))
o.push(B.A(B.a([D.fZS,B.E(B.kV(a1,a1,a1,t,0.05,new C.eDV(w,a2),A.j.E(a2.f,0.05,t)),1)],p),A.m,a1,A.e,A.i,0,a1,a1))
n=a2.b
m=n===D.cW
if(m)o.push(B.A(B.a([D.fGG,B.E(B.kV(a1,a1,a1,96,10,new C.eDW(w,a2),A.j.E(a2.w,10,96)),1)],p),A.m,a1,A.e,A.i,0,a1,a1))
l=n===D.lR
if(l||n===D.ls||n===D.TI)A.d.v(o,B.a([B.d("Crop / position",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aD:A.am,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),B.A(B.a([D.fTa,B.E(B.kV(a1,a1,a1,s,0,new C.eDX(w,a2),A.j.E(a2.c,0,s)),1)],p),A.m,a1,A.e,A.i,0,a1,a1),B.A(B.a([D.h0c,B.E(B.kV(a1,a1,a1,r,0,new C.eDY(w,a2),A.j.E(a2.d,0,r)),1)],p),A.m,a1,A.e,A.i,0,a1,a1)],p))
if(l){l=B.d("Shape (frame)",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aD:A.am,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
k=B.a([],p)
for(j=0;j<7;++j){i={}
h=D.Dj[j]
i.a=null
g=h.a
i.a=g
k.push(B.jv(a1,a1,a1,B.d(h.b,a1,a1,a1,a1,a1,a1,A.pR,a1,a1,a1),a1,new C.eDZ(i,w,a2),a2.go===g,a1,a1,a1,a1))}k=B.bU(A.bG,k,A.bs,a1,6,6)
i=B.d("Ring",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aD:A.am,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
h=B.a([],p)
for(j=0;j<11;++j){f={}
e=D.Dc[j]
f.a=null
g=e.a
f.a=g
h.push(B.jv(a1,a1,a1,B.d(e.b,a1,a1,a1,a1,a1,a1,A.pR,a1,a1,a1),a1,new C.eE_(f,w,a2),a2.id===g,a1,a1,a1,a1))}A.d.v(o,B.a([A.U,l,A.an,k,A.U,i,A.an,B.bU(A.bG,h,A.bs,a1,6,6)],p))}o.push(A.U)
if(m){m=B.d("Text color",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aD:A.am,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
l=x.gN
l=B.C(new B.N(v,new C.eE0(w,a2),l),l.k("ak.E"))
k=x.fw
A.d.v(o,B.a([m,A.an,B.bU(A.bG,l,A.bs,a1,6,6),A.af,B.hrM(new C.eE1(w,a2),D.cAy,B.ez([a2.as],k),!0,a1,k)],p))}if(n===D.fi){n=B.d("Fill",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aD:A.am,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
m=x.gN
m=B.C(new B.N(v,new C.eE2(w,a2),m),m.k("ak.E"))
A.d.v(o,B.a([n,B.bU(A.bG,m,A.bs,a1,0,6)],p))}o.push(A.af)
o.push(B.dh(D.bYy,D.fVe,new C.eE3(a0,a5),B.bp(A.bC,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1)))
d=B.cl(o,a1,a1,a1,q,a1,A.ah,a5)
if(a5)return d
q=a3?A.cq:A.c
p=a4?A.xI:a1
if(a4)o=new B.bF(new B.ay(a3?A.bA:A.aO,1,A.r,-1),A.a1,A.a1,A.a1)
else o=a1
return B.q(a1,d,A.f,a1,a1,new B.p(q,a1,o,p,a4?B.a([new B.ac(0,A.G,A.w.j(0.12),A.tm,16)],x.V):a1,a1,A.n),a1,a1,a1,a1,A.GI,a1,a1,a1)},
bUe(d){return this.aVA(d,!1,!1,null)},
cdN(d,e,f,g,h,i){var w,v,u,t,s,r=this,q=null,p=r.fy
p===$&&B.c()
p=B.c9(p,new C.eE6(r,f,d,e),q)
w=B.d(i,q,q,q,q,q,q,D.fw5,q,q,q)
v=r.c
v.toString
u=x.p
v=B.a([p,A.bd,B.E(B.x(B.a([w,A.bH,A.cU,r.bEq(D.d3X,d,B.S(v).ax.a===A.J)],u),A.E,q,A.e,A.i,0,A.p),1)],u)
p=x.V
A.d.v(v,B.a([A.ae,B.dP(B.hb(B.aJ(!1,A.a3,!0,q,B.aP(!1,q,!0,B.eJ(D.feJ,q,new B.p(q,q,B.L(A.c.j(0.55),A.r,1.3),q,B.a([new B.ac(0,A.G,A.c4.j(0.4),A.et,8)],p),D.asR,A.a7),q,q,q),A.cR,!0,q,q,q,q,q,q,q,q,q,q,q,g,q,q,q,q,q,q,q),A.f,A.L,0,q,q,q,q,q,A.aj),q,"Documents (Hati)",q,q),A.I)],u))
t=B.A(v,A.m,q,A.e,A.i,0,q,q)
w=r.c
w.toString
s=B.S(w).ax.a===A.J
w=B.m(20)
v=x.O
v=s?B.a([D.beZ,D.bfr],v):B.a([A.c,A.kO],v)
u=B.L(d.j(s?0.45:0.25),A.r,1.2)
return B.q(q,t,A.f,q,q,new B.p(q,q,u,w,B.a([new B.ac(0,A.G,d.j(s?0.18:0.1),A.cA,14)],p),new B.a9(A.aA,A.aF,A.x,v,q,q),A.n),q,q,q,q,A.bV,q,q,q)},
aOD(d,e,f,g){var w=this.fy
w===$&&B.c()
return B.c9(w,new C.eBG(this,g,d,e,f),null)},
ahJ(d,e){return this.cqu(d,e)},
cqu(d,e){var w=0,v=B.j(x.T),u,t=this,s,r,q,p
var $async$ahJ=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:r=$.aw()
q=new B.au(new B.ba(e,A.b6,A.aQ),r)
p=t.c
p.toString
w=3
return B.b(B.ce(null,null,!0,null,new C.eFL(d,q),p,null,!0,!0,x.N),$async$ahJ)
case 3:s=g
q.T$=r
q.P$=0
u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ahJ,v)},
QD(d){var w=d.bT()
return""+B.bK(w)+"/"+B.bW(w)+"/"+B.bC(w)}}
C.age.prototype={}
C.aAA.prototype={
S(){return new C.beN(null,null)}}
C.beN.prototype={
gcCV(){var w,v=this.a.c,u=v.f.bT(),t=""+B.bK(u)+"/"+B.bW(u)+"/"+B.bC(u),s=v.w
if(s==="marriage_agreement")return"Hati ya Kuhowesha \xb7 "+t
if(s==="hati_kuhowa")return"Hati ya Kuhowa \xb7 "+t
if(s==="hati_kuhoweya")return"Hati ya Kuhoweya \xb7 "+t
if(s==="hati_kiapo_uongozi"){v=v.x
w=A.a.i(v==null?"":v)
return w.length===0?"Hati ya Kiapo cha Uongozi \xb7 "+t:"Kiapo cha Uongozi \xb7 "+w+" \xb7 "+t}return""+v.r.length+" slides \xb7 "+t},
Y(){var w,v=this,u=null
v.a3()
w=B.bn(u,A.qt,u,1,u,v)
w.fs(0,!0)
v.d!==$&&B.aQ()
v.d=w
w=B.bn(u,D.bzY,u,1,u,v)
w.cr(0)
v.e!==$&&B.aQ()
v.e=w},
t(){var w=this.d
w===$&&B.c()
w.t()
w=this.e
w===$&&B.c()
w.t()
this.bxH()},
Jx(d){var w=0.12+d*0.09,v=A.j.E(w+0.55,0,1),u=this.e
u===$&&B.c()
u=u.x
u===$&&B.c()
return A.cw.aA(0,new B.hV(w,v,A.cw).aA(0,u))},
B(d){var w,v=null,u=this.d
u===$&&B.c()
w=this.e
w===$&&B.c()
return B.at(new B.D(D.bFG,B.c9(new B.h5(B.a([u,w],x.dS)),new C.d9Y(this),v),v),v,v,v)}}
C.bf1.prototype={
B(d){var w=null,v=B.m(22),u=B.L(A.aM,A.r,1),t=x.p
return B.at(new B.D(D.bFX,B.aJ(!1,A.a3,!0,w,B.q(w,B.by(B.m(22),B.x(B.a([new B.D(D.bF7,B.x(B.a([B.q(w,D.bXe,A.f,w,w,new B.p(A.ay.j(0.12),w,w,B.m(16),w,w,A.n),w,52,w,w,w,w,w,52),A.aR,D.fXq,A.X,B.d('"'+this.c+'" will be permanently removed. This cannot be undone.',w,w,w,w,w,w,D.fxl,A.K,w,w)],t),A.m,w,A.e,A.i,0,A.p),w),A.dY,D.bz0,B.A(B.a([B.E(B.bN(!1,D.fLj,w,w,!0,w,w,w,new C.dal(d),w,B.fu(w,w,w,w,w,w,w,w,w,w,w,A.bK,w,w,w,w,w,A.nD,w,A.oS,w,w,w,w,w,w)),1),B.q(w,w,A.f,A.bp,w,w,w,48,w,w,w,w,w,1),B.E(B.bN(!1,D.fQL,w,w,!0,w,w,w,new C.dam(d),w,B.fu(w,w,w,w,w,w,w,w,w,w,w,A.ay,w,w,w,w,w,A.nD,w,A.oS,w,w,w,w,w,w)),1)],t),A.m,w,A.e,A.i,0,w,w)],t),A.m,w,A.e,A.Q,0,A.p),A.aq),A.f,w,Aa.Xu,new B.p(A.as,w,u,v,D.d4l,w,A.n),w,w,w,w,w,w,w,w),A.f,A.L,0,w,w,w,w,w,A.aj),w),w,w,w)}}
C.KF.prototype={
S(){return new C.beM()}}
C.beM.prototype={
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.a,m=n.f,l=n.w,k=n.r
n=p.d
w=n?0.96:1
v=B.m(12)
if(l){u=0.1+(n?0.06:0)
n=u}else{u=0.08+(n?0.05:0)
n=u}n=m.j(n)
u=B.L(m.j(l?0.34:0.28),A.r,1)
t=x.V
t=p.d?B.a([],t):B.a([new B.ac(0,A.G,m.j(0.08),A.dG,8)],t)
s=m.j(l?0.16:0.14)
r=B.m(9)
q=p.a
r=B.q(o,B.X(q.c,m,o,o,o,18),A.f,o,o,new B.p(s,o,o,r,o,o,A.n),o,32,o,o,o,o,o,32)
q=q.d
return B.dP(B.da(B.aA(o,B.vY(B.cT(o,B.A(B.a([r,A.au,new B.dp(1,A.cr,B.d(q,o,2,A.a2,o,o,o,B.l(o,o,l?A.eU:A.c,o,o,o,o,o,o,o,o,13,o,o,A.V,o,1.2,!0,o,o,o,o,o,o,o,o),A.K,o,o),o)],x.p),A.m,o,A.bb,A.Q,0,o,o),o,o,A.b3,new B.p(n,o,u,v,t,o,A.n),A.eH,o,o,o,o,A.nE,o,o,1/0),A.cw,A.jm,w),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new C.d9T(p,d),new C.d9U(p),new C.d9V(p),new C.d9W(p),o,o,o,!1,A.a4),k),new B.o(0,(1-k)*16))}}
C.Qx.prototype={
B(d){var w=this,v=null,u=A.c.j(0.04),t=B.m(16),s=B.m(16),r=B.m(14),q=B.L(A.c.j(0.5),A.r,1.2),p=x.p
return B.aJ(!1,A.a3,!0,t,B.aP(!1,s,!0,new B.D(A.eY,B.A(B.a([B.q(v,B.X(w.c,A.c,v,v,v,22),A.f,v,v,new B.p(v,v,q,r,v,new B.a9(A.aA,A.aF,A.x,w.d,v,v),A.n),v,46,v,v,v,v,v,46),A.ex,B.E(B.x(B.a([B.d(w.e,v,v,v,v,v,v,A.ng,v,v,v),A.bH,B.d(w.f,v,v,v,v,v,v,B.l(v,v,A.c.j(0.55),v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],p),A.E,v,A.e,A.i,0,A.p),1),B.X(A.eJ,A.c.j(0.4),v,v,v,v)],p),A.m,v,A.e,A.i,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.r,v,v,v,v,v,v,v),A.f,u,0,v,v,v,v,v,A.aj)}}
C.a0H.prototype={
S(){return new C.aG8(D.dm,null,null)}}
C.aG8.prototype={
gZN(){var w,v=this,u=v.w
if(u===$){w=B.bn(null,D.bzx,null,1,null,v)
v.w!==$&&B.bG()
v.w=w
u=w}return u},
b95(d){if(!this.a.c.ay)return
this.x=d
this.gZN().iA(0,0)},
Y(){var w,v=this
v.a3()
w=v.a
v.d=A.o.E(w.d,0,w.c.r.length-1)
C.axr(D.flc)
C.iku()
v.S6()},
t(){var w=this,v=w.f
if(v!=null)v.a1(0)
w.gZN().t()
v=w.z
if(v!=null)v.a1(0)
C.axr(D.fld)
C.ikx()
w.bzN()},
cFL(){B.jV()
this.m(new C.eIq())
var w=this.c.L(x.q).f
w.a5O()
if($.bmI)w.U(D.fi3)},
S6(){var w,v=this,u=v.f
if(u!=null)u.a1(0)
if(!v.r||v.y)return
u=v.a.c
w=v.d
w===$&&B.c()
v.f=B.cy(B.dv(0,0,0,0,0,A.o.E(C.hpY(u,w),1,120)),new C.eIg(v))},
cFo(){var w,v=this
v.m(new C.eIp(v))
if(v.r)v.S6()
else{w=v.f
if(w!=null)w.a1(0)}},
gaXw(){var w=this.a.c.db
return(w==null?"":w).length!==0},
czk(){var w=this,v=w.f
if(v!=null)v.a1(0)
w.m(new C.eIh(w))
v=w.z
if(v!=null)v.a1(0)
if(w.a.c.ch&&w.r)w.z=B.cy(A.lI,new C.eIi(w))},
azu(){var w,v,u=this,t=u.a.c,s=t.r.length
if(u.y){t=u.z
if(t!=null)t.a1(0)
if(u.a.c.ch){u.m(new C.eIc(u))
u.S6()}return}w=u.d
w===$&&B.c()
v=s-1
if(w===v&&u.gaXw()){u.czk()
return}if(w>=v)t=t.ch&&s>1
else t=!0
if(t){u.m(new C.eId(u,A.o.F(w+1,s)))
u.b95(w)
u.S6()}},
cp8(){var w,v=this,u=v.a.c,t=u.r.length
if(v.y){if(!u.ch)return
u=v.z
if(u!=null)u.a1(0)
v.m(new C.eIe(v))
v.S6()
return}w=v.d
w===$&&B.c()
if(w<=0)u=u.ch&&t>1
else u=!0
if(u){v.m(new C.eIf(v,w,t))
v.b95(w)
v.S6()}},
cAQ(d){var w,v=this,u=v.e
if(u===D.ct){u=v.d
u===$&&B.c()
return new B.mL(d,new B.bM(u,x.ac))}w=v.cAR(u)
u=v.d
u===$&&B.c()
return B.p8(new B.mL(d,new B.bM(u,x.ac)),w,new C.eIn(),A.b3,A.b3,new C.eIo(v))},
cAR(d){switch(d.a){case 8:case 9:case 10:case 11:case 19:return D.bzU
case 16:return A.iJ
case 18:return A.mU
default:return A.ma}},
cAP(d,e,f){var w,v,u,t=null,s=B.cJ(A.cw,f,t)
switch(d.a){case 0:return e
case 1:case 13:case 18:return new B.d0(s,!1,e,t)
case 2:case 17:w=x.K
return B.jH(e,new B.bg(s,new B.br(A.vn,A.I,w),w.k("bg<bO.T>")),t,!0)
case 3:w=x.K
return B.jH(e,new B.bg(s,new B.br(A.TW,A.I,w),w.k("bg<bO.T>")),t,!0)
case 4:case 21:w=x.K
return B.jH(e,new B.bg(s,new B.br(A.ik,A.I,w),w.k("bg<bO.T>")),t,!0)
case 5:w=x.K
return B.jH(e,new B.bg(s,new B.br(A.tl,A.I,w),w.k("bg<bO.T>")),t,!0)
case 6:case 16:w=x.b
return B.it(A.A,new B.d0(s,!1,e,t),t,new B.bg(s,new B.br(0.82,1,w),w.k("bg<bO.T>")))
case 7:w=x.b
return B.it(A.A,new B.d0(s,!1,e,t),t,new B.bg(s,new B.br(1.18,1,w),w.k("bg<bO.T>")))
case 8:return B.c9(s,new C.eIj(s),e)
case 9:return B.c9(s,new C.eIk(s),e)
case 10:return B.c9(s,new C.eIl(s),e)
case 11:return B.c9(s,new C.eIm(s),e)
case 12:w=x.b
return new B.d0(s,!1,B.it(A.A,e,t,new B.bg(s,new B.br(1.03,1,w),w.k("bg<bO.T>"))),t)
case 14:w=s.gp(0)
v=x.K
return B.jl(B.jH(e,new B.bg(s,new B.br(A.vn,A.I,v),v.k("bg<bO.T>")),t,!0),A.t,new C.btY(w,t))
case 15:w=x.K
return B.jH(e,new B.bg(s,new B.br(A.TW,A.I,w),w.k("bg<bO.T>")),t,!0)
case 19:w=B.dr()
w.n_((1-s.gp(0))*2)
v=s.gp(0)
u=s.gp(0)
w.k5(v,u,v,1)
return B.fx(A.A,B.da(e,s.gp(0)),t,w,!0)
case 20:return B.eM(A.A,(1-s.gp(0))*0.2,new B.d0(s,!1,e,t),t)}},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.a.c,k=n.d
k===$&&B.c()
w=l.r[k]
if(l.ay){v=n.x
u=B.jl(new C.apK(B.c9(n.gZN(),new C.eIr(n,v,w),m),m),A.t,m)}else{t=B.t1(new C.JD(w,!0,!1,m))
l=B.b0(w.e)
u=n.cAQ(B.e8(B.jl(t,A.t,m),l,!0))}l=B.m(20)
k=x.p
s=B.q(m,B.A(B.a([B.d(n.r?"Auto "+C.hpY(n.a.c,n.d)+"s":"Manual",m,m,m,m,m,m,A.oZ,m,m,m),A.bm,D.bZD],k),A.m,m,A.e,A.Q,0,m,m),A.f,m,m,new B.p(A.aU,m,m,l,m,m,A.n),m,m,m,m,A.hc,m,m,m)
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
l.push(B.bR(0,new C.Ok(new C.Fj(q,p,o,r==null?"":r),!1,!0,m),0,0,0))}else{r=q.c.d===D.oN?0.5625:1.7777777777777777
l.push(B.at(new B.fF(r,B.jl(B.uY(A.ag,u,!0,4,1,!0,!0,m),A.t,m),m),m,m,m))}if(!$.bmI){r=B.ID(A.lo,new C.eIs(d),B.o_(m,A.aU,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m)
k=B.a([B.ap(m,B.bm(!0,B.A(B.a([r,A.ae,B.ID(B.X(n.r?Am.uP:A.hw,m,m,m,m,m),n.gcFn(),B.o_(m,A.aU,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m)],k),A.m,m,A.e,A.i,0,m,m),!0,!1,A.ag,!0,!0),m,m,12,m,12,m)],k)
if(!n.y){r=B.m(20)
k.push(B.ap(16,B.bm(!0,B.q(m,B.d(""+(n.d+1)+" / "+n.a.c.r.length,m,m,m,m,m,m,A.fY,m,m,m),A.f,m,m,new B.p(A.aU,m,m,r,m,m,A.n),m,m,m,m,A.hc,m,m,m),!0,!1,A.ag,!0,!0),m,m,m,16,m,m))}A.d.v(l,k)}l.push(B.ap(m,B.bm(!0,B.aA(A.c5,B.q(A.ly,$.bmI?A.bM:s,A.f,m,m,m,m,64,m,m,D.bAE,m,m,150),A.y,!1,m,n.gcFK(),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!1,A.a4),!0,!1,A.ag,!0,!0),m,m,m,0,0,m))
return B.c4(m,A.w,B.aA(m,new B.an(A.a0,m,A.b2,A.t,l,m),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.eIt(n,d),m,m,m,!1,A.a4),m,!1,!1,m,m)}}
C.KL.prototype={
B(d){var w=null
return B.q(w,B.bm(!0,new B.D(E.amn,this.c,w),!0,!1,A.ag,!0,!1),A.f,w,w,D.b7y,w,w,w,w,w,w,w,w)}}
C.btY.prototype={
jt(d){return new B.a1(0,0,0+d.a*A.j.E(this.b,0,1),0+d.b)},
k9(d){return d.b!==this.b}}
C.bjN.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.c
switch(q){case"circle":w=B.m(999)
break
case"rounded":w=B.m(18)
break
case"arch":w=D.b4j
break
default:w=B.m(6)
break}v=s.e
u=B.L(v?A.aE:A.L,A.r,2.5)
if(q==="circle")q=B.m(999)
else{t=B.m(q==="rounded"?9:3)
q=t}w=B.cT(r,B.at(B.q(r,r,A.f,r,r,new B.p(r,r,r,q,r,E.wR,A.n),r,30,r,r,r,r,r,30),r,r,r),r,r,A.b3,new B.p(s.f,r,u,w,r,r,A.n),A.h1,r,64,r,r,r,r,r,64)
return B.aA(r,new B.a5(78,r,B.x(B.a([w,A.an,B.d(s.d,r,1,A.a2,r,r,r,B.l(r,r,v?A.aE:s.r,r,r,r,r,r,r,r,r,11.5,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),A.m,r,A.e,A.i,0,A.p),r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,s.w,r,r,r,r,r,r,!1,A.a4)}}
C.bjM.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=r.c,o=D.dBV.h(0,p)
if(o==null)o=D.dnx
p=p==="none"
w=p?q:new B.a9(A.a6,A.aa,A.x,o,q,q)
p=p?A.d0.j(0.25):q
v=r.e
u=v?B.L(A.aE,A.r,2.5):q
t=r.r.j(0.15)
s=v?I.aqW:q
w=B.q(q,B.q(q,s,A.f,q,q,new B.p(t,q,q,q,q,q,A.a7),q,q,q,q,q,q,q,q),A.f,q,q,new B.p(p,q,u,q,q,w,A.a7),q,52,q,q,A.eA,q,q,52)
return B.aA(q,new B.a5(66,q,B.x(B.a([w,A.an,B.d(r.d,q,1,A.a2,q,q,q,B.l(q,q,v?A.aE:r.f,q,q,q,q,q,q,q,q,10.5,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),A.K,q,q)],x.p),A.m,q,A.e,A.i,0,A.p),q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.w,q,q,q,q,q,q,!1,A.a4)}}
C.aLW.prototype={
aY(){this.b5()
this.b4()
this.dN()},
t(){var w=this,v=w.b9$
if(v!=null)v.a6(0,w.gdH())
w.b9$=null
w.a4()}}
C.aNW.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a4()},
aY(){this.b5()
this.b4()
this.bC()}}
C.bzM.prototype={}
C.aNX.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a4()},
aY(){this.b5()
this.b4()
this.bC()}}
C.b3f.prototype={}
C.X6.prototype={
S(){return new C.aG6()},
bjS(d){return this.e.$1(d)}}
C.aG6.prototype={
gb7j(){var w,v,u,t,s=this.e
if(s==null)return null
for(w=this.a.d,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===s)return t}return null},
gabB(){var w,v
if(this.d==="all")return B.bq(this.a.d,!0,x.I)
w=this.gb7j()
v=x.D
return w==null?B.a([],v):B.a([w],v)},
gaQD(){if(this.d==="all")return"All presentations ("+this.a.d.length+")"
var w=this.gb7j()
w=w==null?null:w.b
return w==null?"Pick a presentation":w},
gb8B(){return A.d.cJ(this.gabB(),0,new C.eHX())},
Y(){var w,v=this
v.a3()
w=v.a.d
if(w.length!==0)v.e=A.d.gH(w).a
v.RH()},
RH(){var w=0,v=B.j(x.H),u,t=this,s
var $async$RH=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return B.b(C.b3R(s.c,s.f),$async$RH)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.eHT(t,!s))
case 1:return B.h(u,v)}})
return B.i($async$RH,v)},
Jz(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$Jz=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p=t.gabB()
o=p.length
if(o===0){w=1
break}for(s=0;s<p.length;p.length===o||(0,B.J)(p),++s){r=p[s]
q=r.w
if(q==="marriage_agreement"||q==="hati_kuhowa"||q==="hati_kuhoweya"||q==="hati_malipo_awamu"||q==="hati_kiapo_uongozi")C.fTD(r,t.a.d)}o=t.c
o.toString
q=t.a
w=3
return B.b(B.pv(o,q.c,q.f),$async$Jz)
case 3:if(!e||t.c==null){w=1
break}o=t.c
o.toString
q=B.eb(new C.eHW(t,p),!1,null,x.H)
w=4
return B.b(B.a6(o,!1).cd(q),$async$Jz)
case 4:q=t.a
w=5
return B.b(B.pu(q.c,q.f),$async$Jz)
case 5:w=6
return B.b(t.RH(),$async$Jz)
case 6:case 1:return B.h(u,v)}})
return B.i($async$Jz,v)},
S4(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$S4=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:o=t.c
o.toString
w=3
return B.b(B.hE(o,D.eeN,!0,"NgmySlidesTransferScan",x.N),$async$S4)
case 3:s=e
if(s==null||A.a.i(s).length===0){w=1
break}t.m(new C.eHU(t))
w=4
return B.b(C.ais(s),$async$S4)
case 4:r=e
t.m(new C.eHV(t))
o=J.a7(r)
if(o.gau(r)){o=t.c
if(o==null){w=1
break}o.L(x.q).f.U(D.fgT)
w=1
break}w=5
return B.b(t.a.bjS(r),$async$S4)
case 5:q=t.c
if(q==null){w=1
break}B.a6(q,!1).O(null)
q=t.c.L(x.q).f
p=o.gI(r)
o=o.gI(r)===1?"":"s"
q.U(B.b3(null,null,null,null,null,A.t,null,B.d("Imported "+p+" presentation"+o,null,null,null,null,null,null,null,null,null,null),null,A.a_,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$S4,v)},
Jy(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Jy=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:n=t.gabB()
if(n.length===0){w=1
break}s=t.c
s.toString
r=t.a
w=3
return B.b(B.pv(s,r.c,r.f),$async$Jy)
case 3:if(!e||t.c==null){w=1
break}s=n.length
r=t.a
if(s===1){s=r.c
q=C.fTS(null,A.d.gH(n),s,t.a.f)}else q=C.fTS(n,null,r.c,r.f)
if(n.length===1){s=A.d.gH(n).b
r=B.ag("[^\\w\\-.]+",!0,!1,!1,!1)
p=B.aL(s,r,"_")}else p="ngmy_slides_library"
w=4
return B.b(B.Hf(q,"ngmy_slides_"+p,!1),$async$Jy)
case 4:o=e
s=t.a
w=5
return B.b(B.pu(s.c,s.f),$async$Jy)
case 5:w=6
return B.b(t.RH(),$async$Jy)
case 6:s=t.c
if(s==null){w=1
break}s.L(x.q).f.U(B.b3(null,null,null,null,null,A.t,null,B.d(o,null,null,null,null,null,null,null,null,null,null),null,A.a_,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$Jy,v)},
a3L(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a3L=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t.m(new C.eHY(t))
w=3
return B.b(C.bF4(),$async$a3L)
case 3:s=e
t.m(new C.eHZ(t))
if(s==null||J.cr(s)){w=1
break}w=4
return B.b(t.a.bjS(s),$async$a3L)
case 4:r=t.c
if(r==null){w=1
break}B.a6(r,!1).O(null)
r=t.c.L(x.q).f
q=J.a7(s)
p=q.gI(s)
q=q.gI(s)===1?"":"s"
r.U(B.b3(null,null,null,null,null,A.t,null,B.d("Imported "+p+" presentation"+q+" from file",null,null,null,null,null,null,null,null,null,null),null,A.a_,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a3L,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=B.S(d).ax.a===A.J,l=m?A.dh:A.bO,k=o.gabB().length!==0,j=B.ap(n,B.q(n,n,A.f,n,n,new B.p(n,n,n,n,n,new B.c_(A.A,0.5,A.x,n,0,B.a([A.bl.j(0.22),A.L],x.O),n,n),A.a7),n,220,n,n,n,n,n,220),n,n,n,-60,-80,n),i=B.aG(n,n,n,n,B.X(A.cz,m?A.ab:A.am,n,n,n,n),n,n,n,new C.eI1(d),n,n,n,n,n,n),h=x.p
i=B.A(B.a([i,B.E(B.d("Transfer presentations",n,n,n,n,n,n,B.l(n,n,m?A.c:A.S,n,n,n,n,n,n,n,n,17,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),A.K,n,n),1),A.x9],h),A.m,n,A.e,A.i,0,n,n)
w=B.m(24)
v=B.a([new B.ac(0,A.G,A.bl.j(0.35),A.f_,24)],x.V)
u=B.ap(n,B.X(A.qF,A.c.j(0.1),n,n,n,100),n,n,n,-12,-8,n)
t=A.c.j(0.18)
s=B.m(16)
s=B.a([u,B.A(B.a([B.q(n,D.c_b,A.f,n,n,new B.p(t,n,B.L(A.c.j(0.35),A.r,1),s,n,n,A.n),n,56,n,n,n,n,n,56),A.ex,B.E(B.x(B.a([B.d("NGMY Slides Transfer",n,n,n,n,n,n,B.l(n,n,A.c.j(0.85),n,n,n,n,n,n,n,n,11,n,n,A.H,n,n,!0,n,1.1,n,n,n,n,n,n),n,n,n),A.ax,D.bKN],h),A.E,n,A.e,A.i,0,A.p),1)],h),A.m,n,A.e,A.i,0,n,n)],h)
if(o.a.f)s.push(B.ap(n,B.hb(B.aA(A.c5,D.feM,A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gcjP(),n,n,n,n,n,n,!1,A.a4),n,"Save presentations to the database",n,n),n,n,n,-17,-19,n))
w=B.a([B.q(n,new B.an(A.a0,n,A.ad,A.f,s,n),A.aq,n,n,new B.p(n,n,n,w,v,D.a3P,A.n),n,n,n,n,E.a0x,n,n,1/0),A.dY,o.azv(m,"What to transfer"),A.af,B.A(B.a([B.E(o.aZY(A.qL,m,new C.eI2(o),o.d==="one","Pick a single deck","One presentation"),1),A.au,B.E(o.aZY(D.bPG,m,new C.eI3(o),o.d==="all",""+o.a.d.length+" saved","All presentations"),1)],h),A.m,n,A.e,A.i,0,n,n)],h)
if(o.d==="one"){v=B.a([A.d8,o.azv(m,"Choose presentation"),A.X],h)
u=o.a.d
if(u.length===0){u=m?A.as:A.c
t=B.m(16)
s=B.L(m?A.bA:A.aO,A.r,1)
v.push(B.q(n,B.d("Create a presentation first, then come back to transfer it.",n,n,n,n,n,n,B.l(n,n,m?A.aD:A.am,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),A.f,n,n,new B.p(u,n,s,t,n,n,A.n),n,n,n,n,A.bQ,n,n,n))}else A.d.v(v,new B.N(u,new C.eI4(o,m),B.U(u).k("N<1,v>")))
A.d.v(w,v)}w.push(A.nc)
w.push(o.azv(m,"Transfer options"))
w.push(A.af)
w.push(B.A(B.a([B.E(o.as4(A.aH,k,!0,A.jI,m,o.r,o.gcdR(),"Scan on another device","Show QR"),1),A.au,B.E(o.aOE(A.jV,!0,A.jp,m,o.gcw2(),"Receive presentations","Scan QR"),1)],h),A.m,n,A.e,A.i,0,n,n))
w.push(A.X)
w.push(B.A(B.a([B.E(o.bCU(A.aY,k,A.hX,m,o.r,o.gcdO(),"Download .json","Backup file"),1),A.au,B.E(o.aOE(A.av,!0,AC.zo,m,o.gcIh(),"Import backup","Upload file"),1)],h),A.m,n,A.e,A.i,0,n,n))
if(k){v=A.bl.j(m?0.12:0.08)
u=B.m(16)
t=B.L(A.bl.j(0.28),A.r,1)
s=B.X(A.lN,A.bl.j(0.9),n,n,n,18)
r=o.gaQD()
q=o.gb8B()
p=o.gb8B()===1?"":"s"
A.d.v(w,B.a([A.bz,B.q(n,B.A(B.a([s,A.au,B.E(B.d("Ready to share "+r+" \xb7 "+q+" slide"+p,n,n,n,n,n,n,B.l(n,n,m?A.ab:A.bv,n,n,n,n,n,n,n,n,12,n,n,A.a8,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)],h),A.m,n,A.e,A.i,0,n,n),A.f,n,n,new B.p(v,n,t,u,n,n,A.n),n,n,n,n,A.bF,n,n,n)],h))}j=B.a([j,B.bm(!0,B.x(B.a([new B.D(Ai.Ol,i,n),B.E(B.cl(w,n,n,D.bEf,n,n,A.ah,!1),1)],h),A.m,n,A.e,A.i,0,A.p),!0,!1,A.ag,!0,!0)],h)
if(o.f)j.push(B.q(n,V.XM,A.f,A.dO,n,n,n,n,n,n,n,n,n,n))
return B.c4(n,l,new B.an(A.a0,n,A.ad,A.t,j,n),n,!1,!1,n,n)},
agU(){var w=0,v=B.j(x.H),u=this,t,s
var $async$agU=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
t=u.a
w=2
return B.b(C.irv(s,t.d,t.e),$async$agU)
case 2:return B.h(null,v)}})
return B.i($async$agU,v)},
azv(d,e){var w=null,v=B.q(w,w,A.f,w,w,new B.p(A.bl,w,w,B.m(2),w,w,A.n),w,14,w,w,w,w,w,3)
return B.A(B.a([v,A.ae,B.d(e.toUpperCase(),w,w,w,w,w,w,B.l(w,w,d?A.aD:A.am,w,w,w,w,w,w,w,w,11,w,w,A.u,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.i,0,w,w)},
aZY(d,e,f,g,h,i){var w,v,u,t,s=null,r=B.m(18),q=B.m(18),p=e?A.as:A.c
if(g)w=A.bl
else w=e?A.bA:A.aO
w=B.L(w,A.r,g?2:1)
v=g?B.a([new B.ac(0,A.G,A.bl.j(0.2),A.cA,14)],x.V):s
u=A.bl.j(g?0.2:0.1)
t=B.m(12)
t=B.q(s,B.X(d,A.bl,s,s,s,22),A.f,s,s,new B.p(u,s,s,t,s,s,A.n),s,s,s,s,A.cl,s,s,s)
u=B.d(i,s,s,s,s,s,s,B.l(s,s,e?A.c:A.S,s,s,s,s,s,s,s,s,13,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
return B.aJ(!1,A.a3,!0,s,B.aP(!1,r,!0,B.eJ(new B.D(A.bF,B.x(B.a([t,A.X,u,A.bH,B.d(h,s,s,s,s,s,s,B.l(s,s,e?A.aD:A.am,s,s,s,s,s,s,s,s,11,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),A.E,s,A.e,A.i,0,A.p),s),s,new B.p(p,s,w,q,v,s,A.n),s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,f,s,s,s,s,s,s,s),A.f,A.L,0,s,s,s,s,s,A.aj)},
bNx(d,e){var w,v,u,t,s,r,q=null,p=d.a===this.e,o=B.m(16),n=e?A.as:A.c,m=B.m(16)
if(p)w=A.bl
else w=e?A.bA:A.aO
w=B.L(w,A.r,p?2:1)
v=B.q(q,D.c_n,A.f,q,q,new B.p(q,q,q,B.m(12),q,new B.a9(A.a6,A.aa,A.x,B.a([A.bl,A.bl.j(0.7)],x.O),q,q),A.n),q,44,q,q,q,q,q,44)
u=d.b
u=B.d(u,q,1,A.a2,q,q,q,B.l(q,q,e?A.c:A.S,q,q,q,q,q,q,q,q,q,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=d.r.length
s=x.p
t=B.E(B.x(B.a([u,B.d(""+t+" slides",q,q,q,q,q,q,B.l(q,q,e?A.aD:A.am,q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),A.E,q,A.e,A.i,0,A.p),1)
u=p?A.ee:A.pn
if(p)r=A.bl
else r=e?A.aT:A.ds
return new B.D(A.cx,B.aJ(!1,A.a3,!0,q,B.aP(!1,o,!0,B.q(q,B.A(B.a([v,A.bd,t,B.X(u,r,q,q,q,q)],s),A.m,q,A.e,A.i,0,q,q),A.f,q,q,new B.p(n,q,w,m,q,q,A.n),q,q,q,q,A.bF,q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,new C.eHS(this,d),q,q,q,q,q,q,q),A.f,A.L,0,q,q,q,q,q,A.aj),q)},
as4(d,e,f,g,h,i,j,k,l){var w,v,u,t,s=null,r=e?1:0.45,q=e?j:s,p=B.m(18),o=B.m(18),n=h?A.as:A.c
if(f)w=d.j(0.45)
else w=h?A.bA:A.aO
w=B.L(w,A.r,f?1.5:1)
v=d.j(0.14)
u=B.m(12)
t=x.p
u=B.a([B.q(s,B.X(g,d,s,s,s,22),A.f,s,s,new B.p(v,s,s,u,s,s,A.n),s,s,s,s,A.rV,s,s,s)],t)
if(i)u.push(B.ap(s,B.q(s,D.arv,A.f,s,s,D.b7k,s,14,s,s,s,s,s,14),s,s,s,-4,-4,s))
v=B.d(l,s,s,s,s,s,s,B.l(s,s,h?A.c:A.S,s,s,s,s,s,s,s,s,14,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
return B.da(B.aJ(!1,A.a3,!0,s,B.aP(!1,p,!0,B.eJ(new B.D(E.a0a,B.x(B.a([new B.an(A.a0,s,A.ad,A.f,u,s),A.af,v,A.bH,B.d(k,s,s,s,s,s,s,B.l(s,s,h?A.aD:A.am,s,s,s,s,s,s,s,s,11,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),A.E,s,A.e,A.i,0,A.p),s),s,new B.p(n,s,w,o,s,s,A.n),s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,q,s,s,s,s,s,s,s),A.f,A.L,0,s,s,s,s,s,A.aj),r)},
aOE(d,e,f,g,h,i,j){return this.as4(d,e,!1,f,g,!1,h,i,j)},
bCU(d,e,f,g,h,i,j,k){return this.as4(d,e,!1,f,g,h,i,j,k)}}
C.X7.prototype={
S(){return new C.bmH()}}
C.bmH.prototype={
Y(){this.a3()
this.afG()},
afG(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$afG=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
n=r.a
m=n.d
l=m.length
k=n.c
q=l===1?C.fTS(null,A.d.gH(m),k,r.a.f):C.fTS(m,null,k,n.f)
n=r.a.d
m=n.length
p=m===1?A.d.gH(n).a:"library_"+m
n=r.a.d
if(n.length===1&&C.kL(A.d.gH(n).w))C.fTD(A.d.gH(r.a.d),D.dlh)
n=r.a
m=n.c
n=C.inS(n.d)
w=7
return B.b(C.fTR(p,C.inX(r.a.d),n,m,q),$async$afG)
case 7:o=e
if(r.c==null){w=1
break}r.m(new C.eI5(r,o))
t=2
w=6
break
case 4:t=3
i=s.pop()
if(r.c==null){w=1
break}r.m(new C.eI6(r))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$afG,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=B.S(d).ax.a===A.J,h=i?A.dh:A.bO,g=k.d
g=g==null?j:A.a.a0(g,"NGMYSLIDESYNC2|")
w=A.d.cJ(k.a.d,0,new C.eI7())
v=B.aG(j,j,j,j,B.X(A.eN,i?A.ab:A.am,j,j,j,18),j,j,j,new C.eI8(d),j,j,j,j,j,j)
u=x.p
v=B.A(B.a([v,B.E(B.d("Presentation QR",j,j,j,j,j,j,B.l(j,j,i?A.c:A.S,j,j,j,j,j,j,j,j,17,j,j,A.u,j,j,!0,j,j,j,j,j,j,j,j),A.K,j,j),1),A.x9],u),A.m,j,A.e,A.i,0,j,j)
t=B.m(24)
s=k.a
r=B.d(s.e,j,j,j,j,j,j,A.di,A.K,j,j)
s=s.d.length
q=s===1?"":"s"
t=B.q(j,B.x(B.a([r,A.U,B.d(""+s+" presentation"+q+" \xb7 "+w+" slides",j,j,j,j,j,j,B.l(j,j,A.c.j(0.85),j,j,j,j,j,j,j,j,12,j,j,A.V,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],u),A.m,j,A.e,A.i,0,A.p),A.f,j,j,new B.p(j,j,j,t,j,D.a3P,A.n),j,j,j,j,E.a0x,j,j,1/0)
q=B.m(24)
s=B.L(A.aH.j(0.35),A.r,1)
r=B.a([],u)
p=k.f
if(p!=null)r.push(B.d(p,j,j,j,j,j,j,A.Vk,A.K,j,j))
else if(k.d==null)r.push(D.erm)
else{p=B.a([],u)
o=k.e
if((o==null?"":o).length!==0){o=B.m(16)
n=B.a([new B.ac(0,A.G,A.aE.j(0.35),A.cA,18)],x.V)
m=k.e
m.toString
A.d.v(p,B.a([D.fLN,A.an,B.aA(j,B.q(j,B.A(B.a([D.c0V,A.au,B.d(m,j,j,j,j,j,j,D.fxL,j,j,j)],u),A.m,j,A.e,A.Q,0,j,j),A.f,j,j,new B.p(j,j,j,o,n,D.c5O,A.n),j,j,j,j,A4.am9,j,j,j),A.y,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new C.eI9(k,d),j,j,j,j,j,j,!1,A.a4),A.U,D.fQh,A.aB],u))}o=A.c.j(0.04)
n=B.m(22)
m=B.L(A.bA,A.r,1)
l=k.d
l.toString
p.push(B.q(j,B.qb(j,j,!1,l,j,!0,!0,j,!1,D.bv4),A.f,j,j,new B.p(o,j,m,n,j,j,A.n),j,j,j,j,A.cl,j,j,j))
A.d.v(r,p)}r.push(A.aB)
r.push(B.d(g===!0?"Cloud QR \u2014 scan on another phone with NGMY Slides open.":"Offline QR \u2014 keep both devices on the same network if scan fails.",j,j,j,j,j,j,A.hj,A.K,j,j))
return B.c4(j,h,B.bm(!0,B.x(B.a([new B.D(Ai.Ol,v,j),B.E(B.cg(B.x(B.a([t,A.aR,B.q(j,B.x(r,A.m,j,A.e,A.i,0,A.p),A.f,j,j,new B.p(j,j,s,q,j,D.c7J,A.n),j,j,j,j,A.uw,j,j,1/0)],u),A.m,j,A.e,A.i,0,A.p),A.t,j,A.y,j,E.ams,j,j,A.ah),1)],u),A.m,j,A.e,A.i,0,A.p),!0,!1,A.ag,!0,!0),j,!1,!1,j,j)}}
C.aG3.prototype={
S(){return new C.aG4(new B.au(A.aw,$.aw()),B.k8(!0,null,!0,!0,null,null,!1))}}
C.aG4.prototype={
Y(){var w=this
w.a3()
w.e.aW(0,new C.eBA(w))
$.aW.x1$.push(new C.eBB(w))},
t(){var w=this.d
w.T$=$.aw()
w.P$=0
this.e.t()
this.a4()},
b1M(){var w,v=this.c
v.toString
w=C.zd(this.d.a.a.toUpperCase())
if(w==null)w=""
B.a6(v,!1).O(w)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=B.aH(a2,A.eQ,x.w).w,i=B.m(28),h=B.L(A.bl.j(0.4),A.r,1.2),g=x.V,f=B.a([new B.ac(0,A.G,A.bl.j(0.28),A.vk,36),D.aey],g),e=B.m(28),d=A.c.j(0.16),a0=B.m(16),a1=x.p
a0=B.q(k,B.x(B.a([B.q(k,D.bXi,A.f,k,k,new B.p(d,k,B.L(A.c.j(0.28),A.r,1),a0,k,k,A.n),k,52,k,k,k,k,k,52),A.af,D.fIP,A.an,B.d("Type the 5-character code shown with the QR.",k,k,k,k,k,k,B.l(k,k,A.c.j(0.82),k,k,k,k,k,k,k,k,13,k,k,A.a8,k,1.35,!0,k,k,k,k,k,k,k,k),A.K,k,k)],a1),A.m,k,A.e,A.i,0,A.p),A.f,k,k,D.b7L,k,k,k,k,A.yN,k,k,1/0)
d=B.a([],a1)
for(w=l.d,v=l.e,u=0;u<5;++u){t=B.a([],a1)
if(u===2)t.push(A.au)
s=w.a.a
r=u<s.toUpperCase().length
q=u===s.toUpperCase().length&&v.geb()
p=r?w.a.a.toUpperCase()[u]:""
s=r||q?A.as:A.S
o=new B.aN(14,14)
if(q)n=A.bl
else n=r?A.bl.j(0.55):A.aM
m=new B.ay(n,q?2:1.2,A.r,-1)
n=q?B.a([new B.ac(0,A.G,A.bl.j(0.28),A.I,12)],g):k
t.push(new B.bz(1,A.bc,B.cT(A.A,B.d(p,k,k,k,k,k,k,D.fr3,k,k,k),k,k,A.b3,new B.p(s,k,new B.bF(m,m,m,m),new B.be(o,o,o,o),n,k,A.n),A.h1,k,56,k,k,k,k,k,k),k))
if(u!==4&&u!==1)t.push(Z.AD)
A.d.v(d,t)}g=B.a([B.A(d,A.m,k,A.e,A.i,0,k,k),B.bR(0,B.da(B.aM(k,A.Z,!0,k,!0,A.t,k,B.aO(),w,k,k,k,k,k,2,D.c3I,A.y,!0,k,!0,k,!1,v,A.ak,k,k,B.a([new B.uS(B.ag("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.C5(5,k),new C.bxf()],x.aS),k,k,A.aUz,k,5,k,1,k,k,!1,"\u2022",k,new C.eBw(l),k,new C.eBx(l),k,!1,k,k,!1,k,!0,k,A.ac,k,k,k,k,k,k,k,k,k,k,k,k,!0,A.a5,k,A.my,k,k,k,k),0),0,0,0)],a1)
d=C.zd(w.a.a.toUpperCase())==null?k:l.gcdS()
return B.at(new B.D(new B.R(24,24,24,24+j.f.d),B.aJ(!1,A.a3,!0,k,new B.cR(Af.LP,B.q(k,B.by(e,B.x(B.a([a0,new B.D(D.bEL,B.x(B.a([new B.an(A.a0,k,A.ad,A.t,g,k),A.X,D.fH7,A.bz,new B.a5(1/0,50,B.bI(D.fYk,k,d,B.bp(A.bl,A.bp,A.am,k,A.c,k,k,k,new B.b9(B.m(16),A.a1),k,k,k)),k),A.an,B.bN(!1,A.nY,k,k,!0,k,k,k,new C.eBy(a2),k,B.fu(k,k,k,k,k,k,k,k,k,k,k,A.bK,k,k,k,k,k,k,k,k,k,k,k,k,k,k))],a1),A.m,k,A.e,A.i,0,A.p),k)],a1),A.m,k,A.e,A.Q,0,A.p),A.aq),A.f,k,k,new B.p(A.dh,k,h,i,f,k,A.n),k,k,k,k,k,k,k,k),k),A.f,A.L,0,k,k,k,k,k,A.aj),k),k,k,k)}}
C.bxf.prototype={
oY(d,e){var w=e.a.toUpperCase()
return e.cOQ(B.hg(A.bB,w.length),w)}}
C.asN.prototype={
S(){return new C.aG7(B.zU(A.NC,A.o3,A.v1))}}
C.aG7.prototype={
t(){this.d.t()
this.a4()},
b1L(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
B.j_(w,d)},
abw(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$abw=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e){w=1
break}s=t.c
s.toString
w=3
return B.b(C.h1N(s),$async$abw)
case 3:r=e
if(r==null||t.c==null){w=1
break}t.b1L("NGMYSLIDECODE|"+r)
case 1:return B.h(u,v)}})
return B.i($async$abw,v)},
cdQ(d){var w,v,u,t
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u){t=C.inV(w[u])
if(t!=null){this.b1L(t)
return}}},
B(d){var w,v,u,t=this,s=null,r=B.aG(s,s,s,s,A.wN,s,s,s,t.gbRX(),s,s,s,s,"Enter document code",s),q=t.f,p=q?"Flash off":"Flash on",o=x.p
p=B.eH(B.a([r,B.aG(s,s,s,s,B.X(q?A.uJ:An.Pk,s,s,s,s,s),s,s,s,new C.eIb(t),s,s,s,s,p,s)],o),s,s,!0,!0,A.dh,s,1,s,s,s,!1,s,!1,A.c,s,s,s,!0,s,s,s,s,s,D.fZy,s,s,s,1,s,!0)
r=B.zT(t.d,A.c_,t.gcdP())
w=B.m(28)
w=B.at(B.q(s,s,A.f,s,s,new B.p(s,s,B.L(A.bl,A.r,3),w,B.a([new B.ac(2,A.G,A.bl.j(0.35),A.I,24)],x.V),s,A.n),s,260,s,s,s,s,s,260),s,s,s)
v=A.w.j(0.72)
u=B.m(16)
return B.c4(p,A.w,new B.an(A.a0,s,A.b2,A.t,B.a([r,w,B.ap(32,B.q(s,D.fMV,A.f,s,s,new B.p(v,s,B.L(A.bl.j(0.45),A.r,1),u,s,s,A.n),s,s,s,s,A.jn,s,s,s),s,s,20,20,s,s)],o),s),s,!1,!1,s,s)}}
C.bxt.prototype={
B(d){var w=null,v=B.m(24),u=B.L(A.aM,A.r,1)
return B.aJ(!1,A.a3,!0,w,B.q(w,B.x(B.a([B.q(w,H.ara,A.f,w,w,D.b7u,w,56,w,w,w,w,w,56),A.aR,D.fZe,A.an,new B.k1(this.c,new C.fiR(),w,w,x.cI),A.aR,new B.k1(this.d,new C.fiS(),w,w,x.cl),A.af,D.fZc],x.p),A.m,w,A.e,A.Q,0,A.p),A.f,w,Af.LP,new B.p(A.as,w,u,v,w,w,A.n),w,w,w,K.a0D,D.bFo,w,w,w),A.f,A.L,0,w,w,w,w,w,A.aj)}}
C.a8M.prototype={
S(){return new C.bmq(A.bE)},
gd1(){return this.c}}
C.bmq.prototype={
Y(){var w=this
w.a3()
if(w.a.d)return
w.a01()
w.d=B.df(A.fG,new C.epQ(w))},
t(){var w=this.d
if(w!=null)w.a1(0)
this.a4()},
a01(){return this.csm()},
csm(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a01=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q={}
p=t.a
if(p.d){if(t.c!=null)t.m(new C.epO(t))
w=1
break}s=p.e
q.a=null
w=s!=null?3:5
break
case 3:q.a=s.bD(new B.V(Date.now(),0,!1))
w=4
break
case 5:w=6
return B.b(C.cl1(p.c),$async$a01)
case 6:r=e
q.a=r==null?A.bE:r
case 4:if(t.c==null){w=1
break}t.m(new C.epP(q,t))
if(q.a.a<=0&&!t.f){t.f=!0
t.a.f.$0()}case 1:return B.h(u,v)}})
return B.i($async$a01,v)},
bU5(d){var w,v,u=d.a,t=A.o.aq(u,36e8)
if(t>=999)return"Admin \u2014 unlimited"
w=A.o.aq(u,6e7)%60
v=A.o.aq(u,1e6)%60
if(t>0)return""+t+"h "+A.a.b0(A.o.u(w),2,"0")+"m "+A.a.b0(A.o.u(v),2,"0")+"s left"
return A.a.b0(A.o.u(w),2,"0")+":"+A.a.b0(A.o.u(v),2,"0")+" left"},
B(d){var w,v,u,t,s=this,r=null
if(s.a.d)return A.bM
w=s.e.a
v=A.o.aq(w,6e7)<30&&A.o.aq(w,36e8)<999?A.ay:A.c4
w=v.j(0.14)
u=B.m(14)
t=B.L(v.j(0.55),A.r,1)
return B.q(r,B.A(B.a([B.X(A.Hk,v,r,r,r,20),A.au,B.E(B.d("Marriage document session \xb7 "+s.bU5(s.e),r,r,r,r,r,r,B.l(r,r,v,r,r,r,r,r,r,r,r,13,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),1)],x.p),A.m,r,A.e,A.i,0,r,r),A.f,r,r,new B.p(w,r,t,u,r,r,A.n),r,r,r,A0.alg,A.iu,r,r,1/0)}}
C.a9F.prototype={
nv(){var w,v,u,t=this
t.xV()
w=t.cx
v=t.c
w.bub(t.cy,t,v)
u=x.Y
v.a.n(0,"/A",B.qh(B.I(["/S",D.ev5,"/URI",new B.rX(B.XI(w.as),A.vo,!0)],x.N,u),u))}}
C.a9G.prototype={
a7(){return"PdfAnnotFlags."+this.b}}
C.b4V.prototype={
bBT(d,e,f,g,h,i,j,k,l,m){var w=B.ez([D.eto],x.di)
this.w!==$&&B.aQ()
this.w=w},
gcSj(){var w=this.w
w===$&&B.c()
if(w.a===0)return 0
return new B.k7(w,new C.coW(),B.a4(w).k("k7<ch.E,G>")).f1(0,new C.coX())},
aF0(d,e,f){var w,v,u,t=this,s=f.a
s.n(0,"/Subtype",new B.he(t.a))
w=t.b
v=w.a
u=w.b
s.n(0,"/Rect",B.tZ(B.a([v,u,v+w.c,u+w.d],x.cA)))
s.n(0,"/P",new B.jq(d.a,d.b))
s.n(0,"/Border",B.tZ(H.ate))
w=t.w
w===$&&B.c()
if(w.a!==0)s.n(0,"/F",new B.h3(t.gcSj()))
w=t.z
if(w.a!==0)s.n(0,"/AP",B.qh(w,x.Y))}}
C.coY.prototype={}
C.a45.prototype={}
C.ajn.prototype={}
C.aT6.prototype={
fV(d){var w,v,u,t,s,r,q=this,p=null
q.lA(d)
q.Mz(d)
w=q.a
v=d.a
v.toString
w.toString
w=d.bjc(w)
u=x.N
t=x.Y
s=new C.coY(q.d.a,"/Link",w,p,p,p,p,p,B.T(u,t))
s.bBT(p,p,p,p,p,p,p,w,p,"/Link")
w=v.x
t=B.qh(B.I(["/Type",D.ev3],u,t),t)
u=w.b++
r=w.e
r===$&&B.c()
r=new C.a9F(s,v,w,u,0,t,r,B.a([],x.s),p,p,0)
w.c.J(0,r)
v.dx.push(r)}}
C.ayq.prototype={}
C.aUA.prototype={
fV(d){var w,v,u,t,s=this
s.lA(d)
w=s.b
if(w!=null){v=B.dr()
u=s.a
v.eh(u.a,u.b,0,1)
u=d.b
u.is()
t=s.a
t.toString
u.LH(t)
u.Tm(0)
u.pm(0,v)
w.fV(d)
u.ny(0)}}}
var z=a.updateTypes(["aB<~>()","~(m0)","P(i3)","~()","P(eP)","P(oK)","P(m0)","~(i3)","P(eP,eP)","KL(Z)","P(o9)","P(lu)","aB<P>()","G(G,i3)","a8<n,@>(i3)","ai<Ac>()","n(o9)","P(a92)","n(m0)","n(ww)","P(Fs)","G(i3,i3)","n(eP)","v(eP)","cL(eP)","v(hF)","~(hF)","eP(vd,F,F,F,F,G{fx:n,key:n,rotation:F})","eP(n,F,G)","G(oK,oK)","P(Ac)","P(n,ai<Ac>)","a8<n,@>(oK)","o9()","ZN(Z)","eP(n,F,F,F,F,F{align:qm,anim:hF,bullets:P,color:G?,delay:G,fx:n,key:n,style:Iw,weight:nX})","a25(Z)","eP(n,F,F,F,F{anim:hF,delay:G,fx:n,key:n})","aB<~>(oK)","P(mP)","ZL(Z)","a1B(Z)","a1A(Z)","Qm(Z)","a_Y(Z)","eP(vd,F,F,F,F,G,n,n{anim:hF,delay:G,rotation:F,stroke:G,strokeWidth:F})","eP(n,F,F,F,F,F,n,n,G)","eP(F,F,n,G{size:F})","v(rL,F,F)","lu()","oK(a8<@,@>)","~(v3)","Fs()","fi(eP)","v(jb)","a_v(Z)","~(Fj)","a_Q(Z)","G(eP,eP)","eP(eP)","a8<n,@>(eP)","eP(a8<@,@>)","m0(m0)","a8<n,@>(m0)","m0(a8<@,@>)","P(jY)","jY()","n(i3)","~(ai<oK>)","V(ai<i3>)","V(i3)","ai<i3>(n?)","adL(Z,G)","~(P(eP,eP))","aep(Z)","ag4(Z,G)","u(m0,P)","WV(Z)","aes(Z)","WW(Z)","~(mT)","i3(i3)","F(eP)","a14(Z)","a0H(Z)","i3()","ai<FP>()","aB<~>(ai<i3>)","v(bB<G,i3>)","D(jY)","D(Fs)","aB<~>(hF,~())","v(ai<hF>,hF?,~(hF),u)","P(mq)","ai<jE<mT>>(Z)","jE<mT>(mT)","i3(a8<@,@>)","X6(Z)","eP(n,F,F,F,F,F,G{align:qm,style:Iw,weight:nX})","X7(Z)","v(i3)","~(mi)","JD(Z,m0,v?)","G(a9G)","aB<ai<a8<n,@>>?>()","n(n)","aB<Ab>({paper:n?,photo:dK?,request:n,template!lx})","aB<a8V>({doc!Ab,history:ai<+(n,n)>,instruction!n,photo:dK?,template!lx})","aem(Z)"])
C.cOc.prototype={
$2(d,e){d=d+e&536870911
d=d+((d&524287)<<10)&536870911
return d^d>>>6},
$S:61}
C.cOd.prototype={
$1(d){d=d+((d&67108863)<<3)&536870911
d^=d>>>11
return d+((d&16383)<<15)&536870911},
$S:69}
C.cOe.prototype={
$1(d){var w,v,u,t,s,r,q
for(w=this.a,v=this.b,u=v.c-1,v=v.b;t=w.a,t<d;){t=w.c
if(t<0){w.c=t-1
s=0
r=16}else{s=v[t]
r=t===u?A.o.galw(s):16;--w.c}w.b=A.o.dX(w.b,r)+s
w.a+=r}v=w.b
t-=d
q=A.o.mD(v,t)
w.b=v-A.o.dX(q,t)
w.a=t
return q},
$S:69}
C.cOf.prototype={
$0(){var w,v,u,t,s
for(w=this.a,v=w.$flags|0,u=1,t=0;t<8;++t){if(u===0)break
s=w[t]+u
v&2&&B.aj(w)
w[t]=s&255
u=s>>>8}},
$S:0}
C.bTx.prototype={
$1(d){return J.eD(A.dN.gaU(d),d.byteOffset,d.byteLength)},
$S:1689}
C.fFW.prototype={
$5(d,e,f,g,h){var w=this,v=w.a
if((v&8)!==0)B.iV(w.b,d+f,e+g,w.c,h,w.d,!1,w.e,w.f)
if((v&4)!==0)B.iV(w.b,d-f,e+g,w.c,h,w.d,!1,w.e,w.f)
if((v&2)!==0)B.iV(w.b,d+f,e-g,w.c,h,w.d,!1,w.e,w.f)
if((v&1)!==0)B.iV(w.b,d-f,e-g,w.c,h,w.d,!1,w.e,w.f)},
$S:1690}
C.c3s.prototype={
$1(d){return B.a3(d,x.N,x.z)},
$S:32}
C.c3t.prototype={
$2(d,e){var w,v=J.t(e,"savedAt")
v=J.k(v==null?"":v)
w=J.t(d,"savedAt")
return A.a.aS(v,J.k(w==null?"":w))},
$S:43}
C.c3v.prototype={
$1(d){var w=J.t(d,"id")
return J.k(w==null?"":w)===this.a},
$S:4}
C.fWQ.prototype={
$1(d){return new C.a25(this.a,this.b,C.ioN(),null)},
$S:z+36}
C.fhj.prototype={
$0(){var w=this.a
w.e=this.b
w.f=!1},
$S:0}
C.fhn.prototype={
$1(d){return this.a.d.q(0,d.a)},
$S:z+2}
C.fho.prototype={
$0(){var w=this.a
w.r=!0
w.x=null},
$S:0}
C.fhp.prototype={
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
C.fhk.prototype={
$0(){var w=this.a
w.r=!0
w.x=null},
$S:0}
C.fhl.prototype={
$0(){var w=this.a
w.r=!1
w.x="Could not open that saved presentation."
w.y=!0},
$S:0}
C.fhm.prototype={
$0(){var w=this.a
w.r=!1
w.x='"'+this.b.b+'" is back in your presentations.'
w.y=!1},
$S:0}
C.fhe.prototype={
$1(d){var w=null,v=B.d('"'+this.a+'" will be removed from the database. Your own copy stays in your presentations.',w,w,w,w,w,w,A.hi,w,w,w)
return B.eg(B.a([B.bN(!1,E.aWG,w,w,!0,w,w,w,new C.fhc(d),w,w),B.bN(!1,D.fKk,w,w,!0,w,w,w,new C.fhd(d),w,w)],x.p),w,w,D.ZV,v,w,w,w,w,D.fZR,w)},
$S:18}
C.fhc.prototype={
$0(){B.a6(this.a,!1).O(!1)
return null},
$S:0}
C.fhd.prototype={
$0(){B.a6(this.a,!1).O(!0)
return null},
$S:0}
C.fhf.prototype={
$0(){return this.a.r=!0},
$S:0}
C.fhg.prototype={
$0(){return this.a.r=!1},
$S:0}
C.fht.prototype={
$0(){var w=this.a
return w.m(new C.fhs(w,this.b))},
$S:0}
C.fhs.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.fhi.prototype={
$0(){var w=this.a
return w.m(new C.fhh(w,this.b,this.c))},
$S:0}
C.fhh.prototype={
$0(){var w=this.a.d,v=this.c.a
return this.b?w.W(0,v):w.J(0,v)},
$S:0}
C.fhq.prototype={
$0(){return this.a.a29(this.b)},
$S:0}
C.fhr.prototype={
$0(){return this.a.PI(0,this.b)},
$S:0}
C.fhw.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.fhx.prototype={
$0(){var w=this.a
return w.m(new C.fhv(w,this.b))},
$S:0}
C.fhv.prototype={
$0(){var w=this.a,v=w.d
if(this.b)v.a8(0)
else{w=w.a.c
v.v(0,new B.N(w,new C.fhu(),B.U(w).k("N<1,n>")))}},
$S:0}
C.fhu.prototype={
$1(d){return d.a},
$S:z+67}
C.foX.prototype={
$1(d){var w,v=x.N,u=x.z,t=B.a3(d,v,u),s=t.h(0,"id")
s=J.k(s==null?"":s)
w=x.f
v=F.hn9(w.b(t.h(0,"doc"))?B.a3(w.a(t.h(0,"doc")),v,u):A.cD)
t=t.h(0,"updatedAt")
u=B.bj(J.k(t==null?"":t))
return new C.oK(s,v,u==null?new B.V(Date.now(),0,!1):u)},
$S:z+50}
C.foY.prototype={
$1(d){return d.a.length!==0},
$S:z+5}
C.fJ7.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n
for(w=d.length,v=this.a,u=0;u<d.length;d.length===w||(0,B.J)(d),++u){t=d[u]
s=t.a
r=v.h(0,s)
q=!0
if(r!=null){p=t.c
o=r.c
n=p.a
if(n<=o.gbs())q=n===o.gbs()&&p.b>o.gcF()}if(q)v.n(0,s,t)}},
$S:z+68}
C.fJ5.prototype={
$1(d){return!this.a.q(0,d.a)},
$S:z+5}
C.fJ6.prototype={
$2(d,e){return e.c.aS(0,d.c)},
$S:z+29}
C.fWi.prototype={
$1(d){return d.aj()},
$S:z+32}
C.fFA.prototype={
$1(d){return d.a===this.a},
$S:z+5}
C.fXb.prototype={
$1(d){return new C.ZN(this.a,null)},
$S:z+34}
C.cPz.prototype={
$1(d){return A.a.i(d.b).length===0},
$S:z+39}
C.cPB.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.cPE.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cPF.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.cPD())},
$S:12}
C.cPD.prototype={
$0(){},
$S:0}
C.cPG.prototype={
$1(d){var w=0,v=B.j(x.a),u=this,t,s,r,q,p
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(C.a34(t.a.c),$async$$1)
case 2:s=f
r=u.b
q=J.cC(s)
p=q.bj(s,new C.cPC(r))
if(p<0)q.c4(s,0,r)
else q.n(s,p,r)
w=3
return B.b(C.aiB(t.a.c,s),$async$$1)
case 3:return B.h(null,v)}})
return B.i($async$$1,v)},
$S:293}
C.cPC.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cPH.prototype={
$1(d){},
$S:30}
C.cPA.prototype={
$1(d){return new C.ZL(this.b,this.a.gcCg(),null)},
$S:z+40}
C.cPI.prototype={
$1(d){return D.hrF},
$S:z+43}
C.cPv.prototype={
$1(d){var w=null,v=B.m(24),u=B.L(D.Zs,A.r,1),t=x.p
return B.at(B.aJ(!1,A.a3,!0,w,B.q(w,B.x(B.a([new B.D(D.bFa,B.x(B.a([B.q(w,D.bUr,A.f,w,w,new B.p(A.ay.j(0.14),w,w,w,w,w,A.a7),w,56,w,w,w,w,w,56),A.aR,D.fJf,A.X,B.d("\u201c"+this.a.b.a+"\u201d is removed from this device. This cannot be undone.",w,w,w,w,w,w,D.fwF,A.K,w,w)],t),A.m,w,A.e,A.i,0,A.p),w),A.dY,new B.D(A.qy,B.A(B.a([B.E(B.dU(D.fQj,new C.cPt(d),B.di(w,w,w,w,w,w,w,w,w,E.ny,w,w,A.co,w,new B.b9(B.m(14),A.a1),D.b4L,w,w,w,w)),1),A.au,B.E(B.bI(D.fWz,w,new C.cPu(d),B.bp(A.bC,w,w,w,w,w,A.co,w,new B.b9(B.m(14),A.a1),w,w,w)),1)],t),A.m,w,A.e,A.i,0,w,w),w)],t),A.m,w,A.e,A.Q,0,A.p),A.f,w,A.xL,new B.p(D.agl,w,u,v,D.d99,w,A.n),w,w,w,K.a0D,w,w,w,w),A.f,A.L,0,w,w,w,w,w,A.aj),w,w,w)},
$S:1691}
C.cPt.prototype={
$0(){B.a6(this.a,!1).O(!1)
return null},
$S:0}
C.cPu.prototype={
$0(){B.a6(this.a,!1).O(!0)
return null},
$S:0}
C.cPw.prototype={
$0(){return J.nR(this.a.d,new C.cPs(this.b))},
$S:0}
C.cPs.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cPr.prototype={
$1(d){var w,v,u,t=null,s=B.m(28),r=B.L(D.Zs,A.r,1),q=x.p
q=B.a([B.A(B.a([B.q(t,D.bZv,A.f,t,t,new B.p(t,t,t,B.m(14),t,D.asM,A.n),t,44,t,t,t,t,t,44),A.bd,B.E(B.x(B.a([B.d(this.a.b.a,t,1,A.a2,t,t,t,D.aWk,t,t,t),A.bH,D.fWu],q),A.E,t,A.e,A.i,0,A.p),1)],q),A.m,t,A.e,A.i,0,t,t),A.aB],q)
for(w=0;w<2;++w){v={}
u=D.dwX[w]
v.a=null
u=u.a
v.a=u[0]
q.push(new C.azm(u[1],u[2],u[3],new C.cPp(v,d),!1,t))}q.push(A.an)
q.push(D.bz3)
q.push(A.an)
q.push(new C.azm(A.eh,"Delete book","Remove it from this device",new C.cPq(d),!0,t))
return B.bm(!0,B.q(t,B.x(q,A.E,t,A.e,A.Q,0,A.p),A.f,t,t,new B.p(D.agl,t,r,s,t,t,A.n),t,t,t,A.us,R.O7,t,t,t),!0,!1,A.ag,!0,!0)},
$S:27}
C.cPp.prototype={
$0(){var w=this.a.a
B.a6(this.b,!1).O(w)
return null},
$S:0}
C.cPq.prototype={
$0(){B.a6(this.a,!1).O("delete")
return null},
$S:0}
C.cPy.prototype={
$3(d,e,f){var w=null,v=B.m(4),u=B.a([new B.ac(0,A.G,A.w.j(0.45),A.aLC,12)],x.V)
return B.dP(B.eM(A.A,e,B.q(w,B.by(B.m(4),new B.a5(62,95.81818181818181,B.ev(A.A,F.apw(d),A.f,A.dB),w),A.aq),A.f,w,w,new B.p(w,w,w,v,u,w,A.n),w,w,w,w,w,w,w,w),w),new B.o(f,0))},
$S:z+48}
C.cPx.prototype={
$0(){return this.a.c7Y()},
$S:0}
C.cPo.prototype={
$0(){return this.a.b09(0,this.b)},
$S:0}
C.cPn.prototype={
$0(){return this.a.DN(this.b)},
$S:0}
C.cPm.prototype={
$0(){return this.a.DN(this.b)},
$S:0}
C.cPJ.prototype={
$2(d,e){var w=this.a
return w.bGu(J.t(w.d,e))},
$S:41}
C.cOQ.prototype={
$0(){var w=this.a
if(w.c!=null)w.Bl()},
$S:0}
C.cOP.prototype={
$0(){var w=this.a,v=w.w
return v.push(w.b3j("Page "+(v.length+1),"",""))},
$S:0}
C.cOS.prototype={
$0(){var w=this.a.w,v=this.b,u=w[v],t=this.c
w[v]=w[t]
w[t]=u},
$S:0}
C.cP_.prototype={
$0(){},
$S:0}
C.cP0.prototype={
$1(d){var w=this.a,v=w.a,u=$.aw()
v.T$=u
v.P$=0
w=w.b
w.T$=u
w.P$=0
return null},
$S:7}
C.cOT.prototype={
$0(){return this.a.c="data:"+this.b+";base64,"+A.cP.gcu().aN(this.c)},
$S:0}
C.cOR.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.cOV.prototype={
$0(){return this.a.Rd(this.b)},
$S:0}
C.cOW.prototype={
$0(){return this.a.Rd(this.b)},
$S:0}
C.cOX.prototype={
$0(){var w=this.a
w.m(new C.cOU(this.b))
w.EB()},
$S:0}
C.cOU.prototype={
$0(){return this.a.c=""},
$S:0}
C.cOZ.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new C.cOY(w,d))
w.EB()},
$S:z+51}
C.cOY.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.cP5.prototype={
$2(d,e){if(d)this.a.Bl()},
$S:131}
C.cP1.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=2
return B.b(u.a.Bl(),$async$$0)
case 2:t=u.b
if(t.e!=null)t.L(x.q).f.U(D.fjs)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.cP2.prototype={
$0(){return this.a.b_4(this.b,-1)},
$S:0}
C.cP3.prototype={
$0(){return this.a.b_4(this.b,1)},
$S:0}
C.cP4.prototype={
$0(){return this.a.c9l(0,this.b)},
$S:0}
C.fNG.prototype={
$1(d){return C.hxi()},
$S:44}
C.fNH.prototype={
$1(d){return null},
$S:30}
C.fti.prototype={
$1(d){return null},
$S:30}
C.fOF.prototype={
$1(d){var w=d.b[0]
w.toString
return w},
$S:328}
C.fOE.prototype={
$2(d,e){return A.o.aS(e.length,d.length)},
$S:228}
C.fOL.prototype={
$1(d){var w=this.a
return C.hfa(d)===w||C.hC7(d)===w},
$S:z+4}
C.fsj.prototype={
$1(d){return A.a.b0(A.o.u(d),2,"0")},
$S:78}
C.cfe.prototype={
$1(d){return d.length!==0},
$S:3}
C.fNE.prototype={
$1(d){return d.a===this.a.a.a},
$S:z+4}
C.fNF.prototype={
$1(d){return C.fQo(d)&&A.a.q(d.db,"rais")},
$S:z+4}
C.fIu.prototype={
$1(d){var w=null
return B.bm(!0,new B.D(E.yM,B.x(B.a([B.at(B.q(w,w,A.f,w,w,new B.p(A.aT,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bz,D.fQW,A.U,B.d("Hati ya jimbo: "+this.a,w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aR,B.dh(D.HX,D.fKX,new C.fIs(d),B.bp(A.c4,w,w,w,A.w,w,A.co,w,w,w,w,w)),A.X,B.es(A.uW,D.fSe,new C.fIt(d),B.di(w,w,w,w,w,w,w,w,w,A.ab,w,w,A.co,w,w,S.xJ,w,w,w,w))],x.p),A.al,w,A.e,A.Q,0,A.p),w),!0,!1,A.ag,!0,!0)},
$S:27}
C.fIs.prototype={
$0(){B.a6(this.a,!1).O("continue")
return null},
$S:0}
C.fIt.prototype={
$0(){B.a6(this.a,!1).O("new")
return null},
$S:0}
C.fIv.prototype={
$1(d){var w=null
return B.eg(B.a([B.bN(!1,D.fGY,w,w,!0,w,w,w,new C.fIq(d),w,w),B.bI(D.fYS,w,new C.fIr(d),w)],x.p),w,w,w,D.h_P,w,w,w,w,D.fGR,w)},
$S:18}
C.fIq.prototype={
$0(){B.a6(this.a,!1).O(!1)
return null},
$S:0}
C.fIr.prototype={
$0(){B.a6(this.a,!1).O(!0)
return null},
$S:0}
C.el6.prototype={
$0(){var w=this.a
w.r=w.f=w.e=!1},
$S:0}
C.el4.prototype={
$0(){return this.a.e=!0},
$S:0}
C.el5.prototype={
$0(){return this.a.f=!0},
$S:0}
C.el7.prototype={
$0(){return this.a.r=!1},
$S:0}
C.el8.prototype={
$0(){return this.a.r=!0},
$S:0}
C.fOK.prototype={
$1(d){return A.a.b0(A.o.u(d),2,"0")},
$S:78}
C.fOG.prototype={
$2$h$w(d,e){var w=null
return new B.bL(A.a6,w,w,B.BV(A.A,B.q(w,w,A.f,w,w,new B.p(this.a.j(0.14),w,w,B.m(3),w,w,A.n),w,d,w,w,w,w,w,w),w,e),w)},
$0(){return this.$2$h$w(5,1)},
$1$w(d){return this.$2$h$w(5,d)},
$1$h(d){return this.$2$h$w(d,1)},
$S:1692}
C.fOI.prototype={
$1(d){var w=null,v=B.m(3)
return B.q(A.A,B.d(d,w,w,w,w,w,w,D.fy_,w,w,w),A.f,w,w,new B.p(this.a,w,w,v,w,w,A.n),w,12,w,w,w,w,w,w)},
$S:132}
C.fOJ.prototype={
$1$size(d){var w=null
return B.A(B.a([B.q(w,w,A.f,w,w,new B.p(w,w,B.L(A.is,A.r,1.5),w,w,w,A.a7),w,d,w,w,w,w,w,d),B.dP(B.q(w,w,A.f,w,w,new B.p(w,w,B.L(A.is,A.r,1.5),w,w,w,A.a7),w,d,w,w,w,w,w,d),new B.o(-d*0.38,0))],x.p),A.m,w,A.bb,A.i,0,w,w)},
$0(){return this.$1$size(18)},
$S:1693}
C.fOH.prototype={
$2$female$size(d,e){var w=null,v=d?D.aiy:this.a,u=B.L(A.is,A.r,1),t=e*0.32,s=B.ap(w,B.q(w,w,A.f,w,w,new B.p(v,w,w,w,w,w,A.a7),w,t,w,w,w,w,w,t),w,w,w,w,e*0.16,w),r=d?0.62:0.5
return B.q(w,new B.an(A.A,w,A.ad,A.t,B.a([s,B.ap(e*0.06,B.q(w,w,A.f,w,w,new B.p(v,w,w,B.m(7),w,w,A.n),w,t,w,w,w,w,w,e*r),w,w,w,w,w,w)],x.p),w),A.f,w,w,new B.p(D.agB,w,u,w,w,w,A.a7),w,e,w,w,w,w,w,e)},
$1$female(d){return this.$2$female$size(d,18)},
$S:1694}
C.h_E.prototype={
$1(d){return new C.aem(this.a,this.b,null)},
$S:z+108}
C.e7w.prototype={
$2(d,e){var w,v,u,t=null,s=this.b,r=s?D.bvG:A.N2,q=B.L(D.jz.j(0.25),A.r,1),p=B.at(B.q(t,t,A.f,t,t,new B.p(A.c4.j(0.45),t,t,B.m(2),t,t,A.n),t,4,t,t,t,t,t,40),t,t,t),o=B.m(15)
o=B.q(t,D.aru,A.f,t,t,new B.p(t,t,B.L(A.c.j(0.5),A.r,1.2),o,B.a([new B.ac(0,A.G,D.jz.j(0.35),A.et,10)],x.V),D.c8k,A.n),t,t,t,t,A.yC,t,t,t)
w=this.a
v=w.d.length
u=x.p
return B.q(t,B.x(B.a([new B.D(O.a0t,B.x(B.a([p,A.aB,B.A(B.a([o,A.bd,B.E(B.x(B.a([B.d("Chagua muundo wa hati",t,t,t,t,t,t,B.l(t,t,s?A.c:D.jz,t,t,t,t,t,t,t,t,17,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),A.bH,B.d(w.c+" \xb7 "+v+" miundo",t,t,t,t,t,t,D.fxb,t,t,t)],u),A.E,t,A.e,A.i,0,A.p),1)],u),A.m,t,A.e,A.i,0,t,t)],u),A.m,t,A.e,A.i,0,A.p),t),B.E(B.im(!0,t,e,A.y,D.aTD,new C.e7v(w,this.c),v,D.am3,t,A.ah,!1),1)],u),A.m,t,A.e,A.i,0,A.p),A.f,t,t,new B.p(r,t,q,A.mE,t,t,A.n),t,t,t,t,t,t,t,t)},
$S:122}
C.e7v.prototype={
$2(d,e){var w=this.a.d[e]
return new C.adL(w,new C.e7u(this.b,w),null)},
$S:z+72}
C.e7u.prototype={
$0(){B.a6(this.a,!1).O(this.b.a)
return null},
$S:0}
C.fIy.prototype={
$1(d){return d.w==="hati_kuhowa"},
$S:z+2}
C.fIz.prototype={
$1(d){var w=null,v=this.a
return B.bm(!0,new B.D(E.yM,B.x(B.a([B.at(B.q(w,w,A.f,w,w,new B.p(A.aT,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bz,D.fUy,A.U,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aR,B.dh(D.HX,B.d('Endelea na "'+A.d.gH(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fIw(d),B.bp(D.jz,w,w,w,A.c,w,A.co,w,w,w,w,w)),A.X,B.es(A.oE,D.VS,new C.fIx(d),B.di(w,w,w,w,w,w,w,w,w,A.ab,w,w,A.co,w,w,S.xJ,w,w,w,w))],x.p),A.al,w,A.e,A.Q,0,A.p),w),!0,!1,A.ag,!0,!0)},
$S:27}
C.fIw.prototype={
$0(){B.a6(this.a,!1).O("continue")
return null},
$S:0}
C.fIx.prototype={
$0(){B.a6(this.a,!1).O("new")
return null},
$S:0}
C.fIC.prototype={
$1(d){return d.w==="hati_kuhoweya"},
$S:z+2}
C.fID.prototype={
$1(d){var w=null,v=this.a
return B.bm(!0,new B.D(E.yM,B.x(B.a([B.at(B.q(w,w,A.f,w,w,new B.p(A.aT,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bz,D.fI1,A.U,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aR,B.dh(D.HX,B.d('Endelea na "'+A.d.gH(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fIA(d),B.bp(D.jz,w,w,w,A.c,w,A.co,w,w,w,w,w)),A.X,B.es(A.oE,D.VS,new C.fIB(d),B.di(w,w,w,w,w,w,w,w,w,A.ab,w,w,A.co,w,w,S.xJ,w,w,w,w))],x.p),A.al,w,A.e,A.Q,0,A.p),w),!0,!1,A.ag,!0,!0)},
$S:27}
C.fIA.prototype={
$0(){B.a6(this.a,!1).O("continue")
return null},
$S:0}
C.fIB.prototype={
$0(){B.a6(this.a,!1).O("new")
return null},
$S:0}
C.fIG.prototype={
$1(d){return d.w==="hati_malipo_awamu"},
$S:z+2}
C.fIH.prototype={
$1(d){var w=null,v=this.a
return B.bm(!0,new B.D(E.yM,B.x(B.a([B.at(B.q(w,w,A.f,w,w,new B.p(A.aT,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bz,D.fOH,A.U,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aR,B.dh(D.HX,B.d('Endelea na "'+A.d.gH(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fIE(d),B.bp(D.jz,w,w,w,A.c,w,A.co,w,w,w,w,w)),A.X,B.es(A.oE,D.VS,new C.fIF(d),B.di(w,w,w,w,w,w,w,w,w,A.ab,w,w,A.co,w,w,S.xJ,w,w,w,w))],x.p),A.al,w,A.e,A.Q,0,A.p),w),!0,!1,A.ag,!0,!0)},
$S:27}
C.fIE.prototype={
$0(){B.a6(this.a,!1).O("continue")
return null},
$S:0}
C.fIF.prototype={
$0(){B.a6(this.a,!1).O("new")
return null},
$S:0}
C.h16.prototype={
$1(d){return D.hwS},
$S:z+74}
C.epT.prototype={
$2(d,e){var w,v=null,u=this.a,t=u?D.bmb:A.N2,s=B.L(A.aC.j(0.25),A.r,1),r=B.at(B.q(v,v,A.f,v,v,new B.p(A.aC.j(0.45),v,v,B.m(2),v,v,A.n),v,4,v,v,v,v,v,40),v,v,v),q=B.m(15)
q=B.q(v,D.c0S,A.f,v,v,new B.p(v,v,B.L(A.c.j(0.5),A.r,1.2),q,B.a([new B.ac(0,A.G,A.c4.j(0.35),A.et,10)],x.V),D.asR,A.n),v,v,v,v,A.yC,v,v,v)
w=x.p
return B.q(v,B.x(B.a([new B.D(O.a0t,B.x(B.a([r,A.aB,B.A(B.a([q,A.bd,B.E(B.x(B.a([B.d("Chagua muundo wa hati",v,v,v,v,v,v,B.l(v,v,u?A.c:A2.MZ,v,v,v,v,v,v,v,v,17,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.bH,B.d("Hati ya Ndoa \xb7 19 miundo",v,v,v,v,v,v,D.fuB,v,v,v)],w),A.E,v,A.e,A.i,0,A.p),1)],w),A.m,v,A.e,A.i,0,v,v)],w),A.m,v,A.e,A.i,0,A.p),v),B.E(B.im(!0,v,e,A.y,D.aTD,new C.epS(this.b),19,D.am3,v,A.ah,!1),1)],w),A.m,v,A.e,A.i,0,A.p),A.f,v,v,new B.p(t,v,s,A.mE,v,v,A.n),v,v,v,v,v,v,v,v)},
$S:122}
C.epS.prototype={
$2(d,e){var w=D.SE[e]
return new C.ag4(w,new C.epR(this.a,w),null)},
$S:z+75}
C.epR.prototype={
$0(){B.a6(this.a,!1).O(this.b.a)
return null},
$S:0}
C.fQs.prototype={
$0(){return B.he5(C.ic_(this.a))},
$S:308}
C.fQr.prototype={
$0(){var w=C.hft(this.a)
return"data:image/png;base64,"+A.cP.gcu().aN(w)},
$S:22}
C.fqA.prototype={
$4(d,e,f,g){var w=d+f*7,v=g*3
v=B.a([new B.jr(d,e),new B.jr(w,e+v),new B.jr(d+f*14,e),new B.jr(w,e-v)],x.J)
B.a30(this.a,C.fE(4291404327),v)},
$S:713}
C.h1h.prototype={
$1(d){return new C.WV(this.a,null)},
$S:z+77}
C.esQ.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.esP())},
$S:29}
C.esP.prototype={
$0(){},
$S:0}
C.esR.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.esO(w,d))},
$S:1696}
C.esO.prototype={
$0(){return this.a.x=J.eT(A.dN.gaU(this.b))},
$S:0}
C.esS.prototype={
$1(d){},
$S:30}
C.ess.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.eso.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.esz.prototype={
$0(){var w=this.a
w.as=!0
w.at="The editor is writing your newspaper\u2026"},
$S:0}
C.esA.prototype={
$0(){var w=this.a
A.d.a8(w.ay)
w.z=this.b
w=w.ax
A.d.a8(w)
w.push(D.eFN)},
$S:0}
C.esB.prototype={
$0(){return this.a.as=!1},
$S:0}
C.esu.prototype={
$0(){var w=this.a
w.as=!0
w.at="Working on it\u2026"
w.ax.push(new B.y("you",this.b))
w.f.bP(0,A.ce)},
$S:0}
C.esv.prototype={
$0(){var w,v=this.b
if(v.c){w=this.a
w.ay.push(w.z)
w.z=v.b}this.a.ax.push(new B.y("ai",v.a))},
$S:0}
C.esw.prototype={
$0(){return this.a.ax.push(new B.y("ai",B.w(this.b)))},
$S:0}
C.esx.prototype={
$0(){return this.a.as=!1},
$S:0}
C.esy.prototype={
$1(d){var w=this.a.r,v=w.f
if(v.length!==0){v=A.d.gd5(v).Q
v.toString
w.mp(v,A.dH,A.iI)}},
$S:7}
C.est.prototype={
$0(){var w=this.a,v=w.z,u=C.fR5(w.y),t=this.b
w.y=t
if(v.a===u)w.z=v.cNZ(C.fR5(t))},
$S:0}
C.esq.prototype={
$0(){var w=this.a
w.as=!0
w.at="Making your picture\u2026"},
$S:0}
C.esr.prototype={
$0(){return this.a.as=!1},
$S:0}
C.esH.prototype={
$0(){return B.a6(this.a,!1).hU()},
$S:0}
C.esI.prototype={
$0(){var w=this.a
return w.m(new C.esG(w))},
$S:0}
C.esG.prototype={
$0(){var w=this.a
return w.z=w.ay.pop()},
$S:0}
C.esJ.prototype={
$0(){var w=this.a
return w.m(new C.esF(w,this.b))},
$S:0}
C.esF.prototype={
$0(){var w=this.b.b
this.a.e.sb1(0,w)
return w},
$S:0}
C.esK.prototype={
$1(d){var w=this.a
return w.m(new C.esE(w))},
$S:9}
C.esE.prototype={
$0(){return this.a.Q="en"},
$S:0}
C.esL.prototype={
$1(d){var w=this.a
return w.m(new C.esD(w))},
$S:9}
C.esD.prototype={
$0(){return this.a.Q="sw"},
$S:0}
C.esM.prototype={
$0(){var w=this.a
return w.m(new C.esC(w,this.b))},
$S:0}
C.esC.prototype={
$0(){var w=this.b
this.a.f.sb1(0,w)
return w},
$S:0}
C.esN.prototype={
$1(d){return this.a.a_O()},
$S:2}
C.esp.prototype={
$0(){return this.a.cd7(this.b)},
$S:0}
C.ciU.prototype={
$1(d){var w=this.a
return typeof w.h(0,d)=="string"?A.a.i(B.cO(w.h(0,d))):null},
$S:310}
C.ciS.prototype={
$1(d){return A.a.i(d)},
$S:14}
C.ciT.prototype={
$1(d){return d.length!==0},
$S:3}
C.fQ2.prototype={
bot(d,e){var w=0,v=B.j(x.H),u,t,s,r
var $async$$2=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:r=new C.bTw(d,B.a([],x.bH))
for(u=e.length,t=0;t<e.length;e.length===u||(0,B.J)(e),++t){s=e[t]
r.cKf($.rh().jo(0,"assets/news_fonts/"+s))}w=2
return B.b(r.mW(0),$async$$2)
case 2:return B.h(null,v)}})
return B.i($async$$2,v)},
$2(d,e){return this.bot(d,e)},
$S:1697}
C.fOk.prototype={
$1(d){return d.length!==0},
$S:3}
C.fOm.prototype={
$1(d){var w=this.a.a
w=A.d.aO(A.d.dt(this.b,w,w+d)," ")
w=B.aL(w," \n\n ","\n\n")
w=B.aL(w," \n\n","\n\n")
return B.aL(w,"\n\n ","\n\n")},
$S:78}
C.fOl.prototype={
$1(d){var w,v,u,t=null
if(d===0)return!0
w=B.fq(t,A.cs,t,t,t,B.cP(t,t,t,t,t,t,t,t,t,this.c,this.b.$1(d)),A.r7,A.bX,t,A.dz,A.bY)
v=this.a
w.o5(v.b)
u=w.b.a.c
return u.gba(u)<=v.a},
$S:33}
C.fq9.prototype={
$1(d){var w=A.a.fw(d,B.ag("\\s+",!0,!1,!1,!1))
return new B.Y(w,new C.fqa(),B.U(w).k("Y<1>")).gI(0)},
$S:274}
C.fqa.prototype={
$1(d){return d.length!==0},
$S:3}
C.fq7.prototype={
$2(d,e){return d+this.a.$1(e)},
$S:221}
C.fq8.prototype={
$2(d,e){return d+this.a.$1(e)},
$S:221}
C.ciV.prototype={
$2(a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=null,a7=y.g,a8=b0.b
a8=isFinite(a8)?a8:824
w=b0.d
w=isFinite(w)?w:340
v=a5.b
u=a5.c
t=u-1
s=(a8-v*t)/u
r=a5.d&&a5.a.gaCl()?Math.min(150,w*0.42):0
q=a5.e
p=x.s
o=B.a([],p)
for(n=a5.a,m=x.G,l=n.d,k=l.as;q>=10.5;q-=0.5){j=n.c.r
i=j.length===0?B.a([a7],p):j
h=B.b0(l.w)
g=B.a([],m)
for(f=0;f<u;++f)g.push(new B.y(s,w-(f===t?r:0)))
o=C.hf9(i,new B.H(!0,h,a6,k,a6,a6,q,A.cT,A.bt,0,a6,a6,1.28,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),g)
if(C.hbN(j.length===0?B.a([a7],p):j,o))break}e=q*1.28
j=A.d.aO(n.gclt(),"\n\n")
d=B.fq(a6,A.cs,a6,a6,a6,B.cP(a6,a6,a6,a6,a6,a6,a6,a6,a6,n.afv(k,q,1.28),j),A.r7,A.bX,a6,A.dz,A.bY)
d.o5(s)
for(a0=1;a0<40;++a0){j=d.b.a.c
a1=Math.min(w,j.gba(j)/u+e*a0)
j=n.c.r
i=j.length===0?B.a([a7],p):j
h=B.b0(l.w)
g=B.a([],m)
for(f=0;f<u;++f)g.push(new B.y(s,Math.min(a1,w-(f===t?r:0))))
a2=C.hf9(i,new B.H(!0,h,a6,k,a6,a6,q,A.cT,A.bt,0,a6,a6,1.28,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),g)
if(C.hbN(j.length===0?B.a([a7],p):j,a2)){o=a2
break}}a3=n.afv(k,q,1.28)
p=x.p
m=B.a([],p)
for(k=r>0,v=v/2-0.5,l=l.w,j=r-12,a4=0;a4<u;++a4){i=B.a([],p)
if(a4>0)i.push(new B.D(new B.R(v,0,v,0),B.q(a6,a6,A.f,B.b0(l).j(0.5),a6,a6,a6,a6,a6,a6,a6,a6,a6,1),a6))
h=B.a([new B.bz(1,A.bc,B.d(o.length>a4?o[a4]:"",a6,a6,a6,a6,a6,a6,a3,A.r7,a6,a6),a6)],p)
if(k&&a4===t)h.push(n.aCk(s,j))
i.push(new B.a5(s,a6,B.x(h,A.E,a6,A.e,A.i,0,A.p),a6))
A.d.v(m,i)}return B.A(m,A.E,a6,A.e,A.i,0,a6,a6)},
$S:353}
C.ciW.prototype={
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
n=o.gaCl()
m=n?Math.min(140,p*0.4):0
n=x.s
l=B.a([],n)
for(k=x.G,j=o.d,i=j.as,h=17;h>=10.5;h-=0.5){g=o.c.r
f=g.length===0?B.a([a6],n):g
e=B.b0(j.w)
d=B.a([new B.y(u,q),new B.y(u,q)],k)
for(a0=0;a0<t;++a0)d.push(new B.y(r,p-(a0===s?m:0)))
l=C.hf9(f,new B.H(!0,e,a5,i,a5,a5,h,A.cT,A.bt,0,a5,a5,1.28,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5),d)
if(C.hbN(g.length===0?B.a([a6],n):g,l))break}a1=o.afv(i,h,1.28)
a2=new C.ciX(a1)
n=x.p
v=B.A(B.a([a2.$2(l[0],u),A.Kk,new B.a5(v,a5,a4.f,a5),A.Kk,a2.$2(l[1],u)],n),A.E,a5,A.e,A.i,0,a5,a5)
k=B.a([],n)
for(i=m>0,j=j.w,g=m-12,a3=0;a3<t;++a3){f=B.a([],n)
if(a3>0)f.push(new B.D(D.bHz,B.q(a5,a5,A.f,B.b0(j).j(0.5),a5,a5,a5,a5,a5,a5,a5,a5,a5,1),a5))
e=B.a([new B.bz(1,A.bc,B.d(l[2+a3],a5,a5,a5,a5,a5,a5,a1,A.r7,a5,a5),a5)],n)
if(i&&a3===s)e.push(o.aCk(r,g))
f.push(new B.a5(r,a5,B.x(e,A.E,a5,A.e,A.i,0,A.p),a5))
A.d.v(k,f)}return B.x(B.a([new B.a5(a5,q,v,a5),A.af,B.E(B.A(k,A.E,a5,A.e,A.i,0,a5,a5),1)],n),A.m,a5,A.e,A.i,0,A.p)},
$S:160}
C.ciX.prototype={
$2(d,e){var w=null
return new B.a5(e,w,B.d(d,w,w,w,w,w,w,this.a,A.r7,w,w),w)},
$S:714}
C.h1k.prototype={
$1(d){return new C.WW(this.a,this.b,null)},
$S:z+79}
C.etC.prototype={
$1(d){return d.lb()},
$S:1699}
C.etD.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.etB(w,d))},
$S:1700}
C.etB.prototype={
$0(){return this.a.d=this.b.b},
$S:0}
C.etp.prototype={
$0(){return this.a.y=!0},
$S:0}
C.etq.prototype={
$0(){return this.a.y=!1},
$S:0}
C.etw.prototype={
$0(){return B.a6(this.a,!1).eO()},
$S:0}
C.etx.prototype={
$2(d,e){var w=null,v=this.a,u=this.b,t=B.L(A.bD,A.r,2.5)
return B.aA(w,B.q(w,B.b4(w,w,w,new C.be0(u,v.gazn(),w),A.fL),A.f,w,w,new B.p(w,w,t,w,w,w,A.n),w,w,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.etu(v),new C.etv(v,e,u),w,w,w,w,w,w,w,w,w,w,w,!1,A.a4)},
$S:37}
C.etu.prototype={
$1(d){var w=this.a
return w.x=w.f},
$S:258}
C.etv.prototype={
$1(d){var w=this.a
w.m(new C.etr(w,d,this.b,this.c))},
$S:240}
C.etr.prototype={
$0(){var w,v,u,t=this,s=t.a,r=t.b
s.f=A.j.E(s.x*r.d,1,6)
w=s.gazn()
r=r.a
v=t.c
u=t.d
s.r=A.j.E(s.r-r.a/v.b*(w.c-w.a)/u.c,0,1)
s.w=A.j.E(s.w-r.b/v.d*(w.d-w.b)/u.d,0,1)},
$S:0}
C.ety.prototype={
$1(d){var w=this.a
return w.m(new C.ett(w,this.b))},
$S:9}
C.ett.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.etz.prototype={
$1(d){var w=this.a
return w.m(new C.ets(w,d))},
$S:6}
C.ets.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.etA.prototype={
$0(){return B.a6(this.b,!1).O(this.a.a.c)},
$S:0}
C.h1A.prototype={
$1(d){return D.hzF},
$S:z+83}
C.f2v.prototype={
$1(d){return this.a.Zq()},
$S:7}
C.f1n.prototype={
$0(){var w=this.a,v=this.b
w.z=v
w.y="data:image/png;base64,"+A.cP.gcu().aN(v)},
$S:0}
C.f1L.prototype={
$0(){var w=this.a
w.p4=this.b
w.as=3},
$S:0}
C.f1V.prototype={
$1(d){return d>=this.a.length},
$S:33}
C.f16.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.f17.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.f14.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.f15.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.f1E.prototype={
$2(d,e){var w,v=null,u=e.d,t=this.a,s=new C.f1F(t,this.b,u,e.b),r=s.$1(!0),q=t.y2
q=B.a([B.jl(B.t1(q>0.2?F.bWX(r,new B.Eq(q,q,A.x)):r),A.t,v)],x.p)
w=t.bn
if(w>0.02)q.push(B.jl(B.da(B.t1(F.bWX(s.$1(!0),new B.Eq(12,12,A.x))),w*0.75),A.t,v))
s=t.b7
if(s!=null&&t.b6>0)q.push(B.e8(v,B.b0(s).j(t.b6),!0))
s=t.bf
if(s!=null&&t.bK>0){s=B.b0(s).j(t.bK)
w=t.bf
w.toString
q.push(B.c3(v,new B.p(v,v,v,v,v,new B.c_(D.b28,1.15,A.x,v,0,B.a([s,B.b0(w).j(0)],x.O),v,v),A.n),A.bj))}s=t.aL
if(s>0)q.push(B.c3(v,new B.p(v,v,v,v,v,new B.c_(D.b1T,0.8,A.x,v,0,B.a([A.c.j(s*0.55),A.c.j(0)],x.O),v,v),A.n),A.bj))
s=t.aR
if(s>0)q.push(B.c3(v,new B.p(v,v,v,v,v,new B.a9(A.b7,A.b9,A.x,B.a([A.w.j(s),A.L,A.L,A.w.j(t.aR)],x.O),D.d7I,v),A.n),A.bj))
if(t.aH>0){s=t.k1
q.push(B.ap(v,B.c3(v,new B.p(v,v,v,v,v,new B.a9(A.b7,A.b9,A.x,B.a([A.w.j(0),A.w.j(t.aH),A.w.j(t.aH),A.w.j(0)],x.O),D.djy,v),A.n),A.bj),0.48*u,v,0,0,(s-0.06)*u,v))}s=t.a_
if(s>0)q.push(B.e8(v,A.w.j(s),!0))
s=t.bb
if(s>0)q.push(B.c3(v,new B.p(v,v,v,v,v,new B.c_(A.A,0.95,A.x,v,0,B.a([A.L,A.w.j(s)],x.O),D.dgm,v),A.n),A.bj))
t=t.aG
if(t>0)q.push(B.b4(v,v,v,new C.bhC(t,v),A.az))
return new B.an(A.a0,v,A.b2,A.t,q,v)},
$S:67}
C.f1F.prototype={
$1(d){var w,v,u,t,s,r=this,q=null,p=B.fR(r.b,A.A,q,q,A.cj,A.c_,!0,q,!1,q,q),o=r.a,n=o.aZH(o.RG,o.R8,o.rx,o.ry,o.to,o.x1,o.x2,o.xr,o.y1),m=o.c9,l=m*3.141592653589793/180
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
s=o.c6?-1:1
return B.dP(B.ed(A.A,B.eM(A.A,l,B.fx(A.A,new B.BH(new B.uN(q,q,n,A.xW),p,q),q,B.wj(s,o.cO?-1:1,1),!0),q),v*w,q,q),new B.o(-m*r.d*u/2,-t*r.c*u/2))},
$S:611}
C.f1R.prototype={
$0(){return this.a.m(new C.f1Q(this.b,this.c))},
$S:0}
C.f1Q.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.f1S.prototype={
$1(d){return this.a.m(new C.f1P(this.b,d))},
$S:6}
C.f1P.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.f1U.prototype={
$0(){return this.a.m(new C.f1T(this.b,this.c))},
$S:0}
C.f1T.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.f0X.prototype={
$1(d){return d.c===this.a.x},
$S:z+93}
C.f0Y.prototype={
$1(d){var w=this.a
return w.m(w.gcDE())},
$S:2}
C.f0Z.prototype={
$1(d){return this.a.m(new C.f0W())},
$S:2}
C.f0W.prototype={
$0(){},
$S:0}
C.f1_.prototype={
$0(){var w=this.a
return w.m(new C.f0V(w,this.b))},
$S:0}
C.f0V.prototype={
$0(){return this.a.x=this.b},
$S:0}
C.f11.prototype={
$2(d,e){return A.au},
$S:36}
C.f10.prototype={
$2(d,e){var w=null,v=this.b[e],u=this.a,t=v.a===u.w.a,s=B.m(14),r=B.a([B.b0(v.e),B.b0(v.f)],x.O),q=t?A.c:A.bA
q=B.L(q,A.r,t?2.5:1)
r=B.cT(w,B.at(B.d("\u201c",w,w,w,w,w,w,B.l(w,w,B.b0(v.r),w,w,w,w,w,w,w,w,40,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,w),w,w,A.b3,new B.p(w,w,q,s,w,new B.a9(A.b7,A.b9,A.x,r,w,w),A.n),A.h1,w,94,w,w,w,w,w,70)
return B.aA(w,new B.a5(70,w,B.x(B.a([r,A.fM,B.d(v.b,w,1,A.a2,w,w,w,B.l(w,w,t?A.c:A.aD,w,w,w,w,w,w,w,w,10.5,w,w,A.V,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.i,0,A.p),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.f0U(u,v),w,w,w,w,w,w,!1,A.a4)},
$S:84}
C.f0U.prototype={
$0(){var w=this.a
return w.m(new C.f0R(w,this.b))},
$S:0}
C.f0R.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.f12.prototype={
$1(d){var w=this.a
return w.m(new C.f0T(w,d))},
$S:9}
C.f0T.prototype={
$0(){return this.a.k3=this.b},
$S:0}
C.f13.prototype={
$1(d){var w=this.a
return w.m(new C.f0S(w,d))},
$S:9}
C.f0S.prototype={
$0(){return this.a.k2=this.b},
$S:0}
C.f2k.prototype={
$1(d){var w=this.a.db
return w[d]===w[A.d.gH(this.b)]},
$S:33}
C.f2r.prototype={
$1(d){var w=this.a
return w.m(new C.f2s(w,d))},
$S:28}
C.f2s.prototype={
$0(){var w,v,u,t,s
for(w=this.a,v=w.dx,v=B.dZ(v,v.r,B.a4(v).c),w=w.db,u=this.b,t=v.$ti.c;v.C();){s=v.d
w[s==null?t.a(s):s]=u}},
$S:0}
C.f2t.prototype={
$1(d){var w
switch(d){case 1:w=20
break
case 2:w=28
break
case-1:w=11
break
default:w=15
break}return w},
$S:169}
C.f2l.prototype={
$0(){var w=this.a
return w.m(new C.f2j(w,this.b))},
$S:0}
C.f2j.prototype={
$0(){var w=this.a.dx,v=this.b
return w.q(0,v)?w.W(0,v):w.J(0,v)},
$S:0}
C.f2m.prototype={
$0(){var w=this.a
return w.m(new C.f2i(w,this.b))},
$S:0}
C.f2i.prototype={
$0(){var w,v=this.b.length,u=J.e2(v,x.S)
for(w=0;w<v;++w)u[w]=w
return this.a.dx.v(0,u)},
$S:0}
C.f2n.prototype={
$0(){var w=this,v=w.a
return v.m(new C.f2h(v,w.b,w.c,w.d))},
$S:0}
C.f2h.prototype={
$0(){var w,v,u,t,s,r=this,q=r.a.dx
q.a8(0)
w=B.a([],x.t)
for(v=r.b,u=r.c,t=r.d,s=0;s<v.length;++s)if(u[s]===t)w.push(s)
q.v(0,w)},
$S:0}
C.f2o.prototype={
$0(){var w=this.a,v=w.dx
return w.m(v.gte(v))},
$S:0}
C.f2p.prototype={
$0(){return this.b.$1(this.a.a)},
$S:0}
C.f2q.prototype={
$0(){var w=this.a
return w.m(new C.f2g(w))},
$S:0}
C.f2g.prototype={
$0(){var w=this.a.db
return A.d.hy(w,0,w.length,0)},
$S:0}
C.f23.prototype={
$1(d){return d.a===this.a.dy},
$S:232}
C.f24.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=(e.b-42)/7,h=B.a([],x.p)
for(w=i*0.42,v=this.a,u=i*0.95,t=x.O,s=0;s<21;++s){r={}
q=D.aB2[s]
r.a=null
p=q.a
r.a=p
o=v.dy
n=new B.aN(9,9)
m=B.a([B.b0(v.w.e),B.b0(v.w.f)],t)
l=r.a
k=v.fx
h.push(v.azr(new B.ns(new B.be(n,n,n,n),A.aq,new B.l5(new B.p(j,j,j,j,j,new B.a9(A.a6,A.aa,A.x,m,j,j),A.n),A.bj,new C.b17(l,B.b0(k==null?v.w.x:k),A.j.E(w,12,26),j),j),j),u,q.b,o===p,new C.f22(r,v),2,i))}return B.bU(A.bG,h,A.bs,j,7,7)},
$S:178}
C.f22.prototype={
$0(){var w=this.b
return w.m(new C.f1Y(this.a,w))},
$S:0}
C.f1Y.prototype={
$0(){return this.b.dy=this.a.a},
$S:0}
C.f25.prototype={
$1(d){var w=this.a
w.p1=!1
w.k4=d},
$S:150}
C.f28.prototype={
$0(){var w=this.a
return w.m(new C.f21(w))},
$S:0}
C.f21.prototype={
$0(){return this.a.p1=!0},
$S:0}
C.f29.prototype={
$1(d){return this.a.p2=d},
$S:6}
C.f2a.prototype={
$1(d){return this.a.p3=d},
$S:6}
C.f2b.prototype={
$1(d){return this.a.ok=d},
$S:6}
C.f2c.prototype={
$0(){var w=this.a
return w.m(new C.f20(w))},
$S:0}
C.f20.prototype={
$0(){var w=this.a
return w.fy=!w.fy},
$S:0}
C.f2d.prototype={
$0(){var w=this.a
return w.m(new C.f2_(w))},
$S:0}
C.f2_.prototype={
$0(){var w=this.a
return w.go=!w.go},
$S:0}
C.f2e.prototype={
$0(){var w=this.b
return w.m(new C.f1Z(this.a,w))},
$S:0}
C.f1Z.prototype={
$0(){return this.b.id=this.a.a},
$S:0}
C.f2f.prototype={
$1(d){return this.a.fx=d},
$S:150}
C.f26.prototype={
$1(d){return this.a.fr=d},
$S:6}
C.f27.prototype={
$1(d){return this.a.k1=d},
$S:6}
C.f1I.prototype={
$0(){var w=this.a
return w.m(new C.f1H(w))},
$S:0}
C.f1H.prototype={
$0(){var w=this.a
w.p4=null
w.b60()},
$S:0}
C.f1J.prototype={
$0(){var w=this.a
return w.m(new C.f1G(w,this.b))},
$S:0}
C.f1G.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.f1K.prototype={
$0(){var w=this.a
return w.m(w.gcu0())},
$S:0}
C.f1A.prototype={
$0(){var w=this.a
return w.m(new C.f1z(w))},
$S:0}
C.f1z.prototype={
$0(){var w=this.a
w.RG=0.03
w.rx=1.12
w.ry=1.15
w.R8=w.xr=0},
$S:0}
C.f1B.prototype={
$0(){var w=this.a
return w.m(new C.f1y(w))},
$S:0}
C.f1y.prototype={
$0(){var w=this.a
w.aH=0.55
w.a_=Math.max(w.a_,0.12)},
$S:0}
C.f1C.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=null,n=(e.b-24)/4,m=B.a([],x.p)
for(w=n*1.25,v=this.a,u=this.b,t=0;t<18;++t){s=D.dgN[t]
r=s.b
q=Math.abs(v.RG-r)<0.001&&Math.abs(v.rx-s.c)<0.001&&Math.abs(v.ry-s.d)<0.001&&Math.abs(v.to-s.e)<0.001&&Math.abs(v.x1-s.f)<0.001&&Math.abs(v.xr-s.r)<0.001&&Math.abs(v.x2)<0.5&&Math.abs(v.R8)<0.001&&!v.y1
p=new B.aN(9,9)
m.push(v.azr(new B.ns(new B.be(p,p,p,p),A.aq,new B.a5(1/0,1/0,new B.BH(new B.uN(o,o,v.aZH(r,0,s.c,s.d,s.e,s.f,0,s.r,!1),A.xW),B.fR(u,A.A,140,o,A.cj,A.c_,!1,o,!1,o,o),o),o),o),w,s.a,q,new C.f1x(v,s),3,n))}return B.bU(A.bG,m,A.bs,o,10,8)},
$S:178}
C.f1x.prototype={
$0(){var w=this.a
return w.m(new C.f1w(w,this.b))},
$S:0}
C.f1w.prototype={
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
C.f1e.prototype={
$1(d){return this.a.R8=d},
$S:6}
C.f1f.prototype={
$1(d){return this.a.RG=d},
$S:6}
C.f1g.prototype={
$1(d){return this.a.rx=d},
$S:6}
C.f1h.prototype={
$1(d){return this.a.xr=d},
$S:6}
C.f1i.prototype={
$1(d){return this.a.aL=d},
$S:6}
C.f1j.prototype={
$1(d){return this.a.a_=d},
$S:6}
C.f1k.prototype={
$1(d){return this.a.bb=d},
$S:6}
C.f1l.prototype={
$1(d){return this.a.aH=d},
$S:6}
C.f1m.prototype={
$1(d){return this.a.aR=d},
$S:6}
C.f0A.prototype={
$1(d){return this.a.ry=d},
$S:6}
C.f0B.prototype={
$1(d){return this.a.to=d},
$S:6}
C.f0C.prototype={
$1(d){return this.a.x1=d},
$S:6}
C.f0D.prototype={
$1(d){return this.a.x2=d},
$S:6}
C.f0E.prototype={
$0(){var w=this.a
return w.m(new C.f0z(w))},
$S:0}
C.f0z.prototype={
$0(){var w=this.a
return w.y1=!w.y1},
$S:0}
C.f0F.prototype={
$1(d){return this.a.b7=d},
$S:150}
C.f0G.prototype={
$1(d){return this.a.b6=d},
$S:6}
C.f18.prototype={
$1(d){return this.a.y2=d},
$S:6}
C.f19.prototype={
$1(d){return this.a.bn=d},
$S:6}
C.f1a.prototype={
$1(d){return this.a.aG=d},
$S:6}
C.f1b.prototype={
$1(d){return this.a.bf=d},
$S:150}
C.f1c.prototype={
$1(d){return this.a.bK=d},
$S:6}
C.f0K.prototype={
$1(d){return this.a.aP=d},
$S:6}
C.f0L.prototype={
$1(d){return this.a.bm=d},
$S:6}
C.f0M.prototype={
$1(d){return this.a.bH=d},
$S:6}
C.f0N.prototype={
$1(d){return this.a.c9=d},
$S:6}
C.f0O.prototype={
$0(){var w=this.a
return w.m(new C.f0J(w))},
$S:0}
C.f0J.prototype={
$0(){var w=this.a
return w.c9=A.j.F(w.c9+90+180,360)-180},
$S:0}
C.f0P.prototype={
$0(){var w=this.a
return w.m(new C.f0I(w))},
$S:0}
C.f0I.prototype={
$0(){var w=this.a
return w.c6=!w.c6},
$S:0}
C.f0Q.prototype={
$0(){var w=this.a
return w.m(new C.f0H(w))},
$S:0}
C.f0H.prototype={
$0(){var w=this.a
return w.cO=!w.cO},
$S:0}
C.f1D.prototype={
$0(){var w=this.a,v=w.c
v.toString
return C.is8(v,w.p4)},
$S:0}
C.f1v.prototype={
$2(d,e){var w=null,v=this.a.z,u=v==null?D.bw0:B.fR(v,A.A,w,w,A.cj,A.c_,!1,w,!1,w,w)
return C.fOs(d.length===0?"rounded":d,u,e)},
$S:125}
C.f1r.prototype={
$0(){var w=this.a
return w.m(new C.f1q(w))},
$S:0}
C.f1q.prototype={
$0(){var w=this.a
w.ay=0.39
w.ch=0.8
w.CW=0.22
w.cx="circle"
w.cy="gold"},
$S:0}
C.f1s.prototype={
$0(){var w=this.b
return w.m(new C.f1p(this.a,w))},
$S:0}
C.f1p.prototype={
$0(){return this.b.cx=this.a.a},
$S:0}
C.f1t.prototype={
$0(){var w=this.b
return w.m(new C.f1o(this.a,w))},
$S:0}
C.f1o.prototype={
$0(){return this.b.cy=this.a.a},
$S:0}
C.f1u.prototype={
$1(d){var w=this.a
w.CW=d
w.ay=A.j.E(w.ay,0,1-d)
w.ch=A.j.E(w.ch,0,0.95)},
$S:6}
C.f1O.prototype={
$2(d,e){var w,v,u,t=null,s=e.b,r=e.d,q=B.m(20),p=B.a([new B.ac(-4,A.G,A.b8.j(0.35),A.I,30)],x.V),o=B.m(20),n=this.a,m=x.p,l=B.a([],m)
if(n.p4!=null)l.push(new B.em(n.cnp(),n.r))
l.push(new C.JD(n.cAz(),!1,!1,t))
o=B.bR(0,B.by(o,new B.em(new B.an(A.a0,t,A.b2,A.t,l,t),n.f),A.aq),0,0,0)
l=n.ay
w=n.ch
v=n.CW*s
u=B.m(8)
return B.q(t,new B.an(A.a0,t,A.ad,A.t,B.a([o,B.ap(t,B.aA(A.c5,B.c3(t,new B.p(t,t,B.L(A.c.j(0.3),A.r,1),u,t,t,A.n),A.bj),A.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.f1N(n,s,r),t,t,t,t,t,t,t,t,t,t,t,t,t,t,!1,A.a4),v,t,l*s,t,w*r,v)],m),t),A.f,t,t,new B.p(t,t,t,q,p,t,A.n),t,t,t,t,t,t,t,t)},
$S:237}
C.f1N.prototype={
$1(d){var w=this.a
return w.m(new C.f1M(w,d,this.b,this.c))},
$S:19}
C.f1M.prototype={
$0(){var w,v=this,u=v.a,t=v.b.d,s=v.c
u.ay=A.j.E(u.ay+t.a/s,0,1-u.CW)
w=v.d
u.ch=A.j.E(u.ch+t.b/w,0,1-u.CW*s/w)},
$S:0}
C.f1X.prototype={
$0(){var w=this.a
return w.m(new C.f1W(w,this.b))},
$S:0}
C.f1W.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.f1d.prototype={
$0(){var w=this.a.c
w.toString
return B.a6(w,!1).hU()},
$S:0}
C.f2u.prototype={
$2(d,e){var w,v,u,t=null,s=e.b
if(s>=860){w=this.a
v=x.p
return B.A(B.a([new B.a5(Math.min(s*0.4,460),t,B.x(B.a([w.b1D(),B.E(B.at(w.b4E(Math.max(240,e.d-110)),t,t,t),1)],v),A.m,t,A.e,A.i,0,A.p),t),B.E(B.x(B.a([B.E(w.aSB(),1),w.aOF()],v),A.m,t,A.e,A.i,0,A.p),1)],v),A.m,t,A.e,A.i,0,t,t)}u=A.j.E(e.d*0.36,190,360)
s=this.a
return B.x(B.a([s.b1D(),new B.D(A.hG,B.at(s.b4E(u),t,t,t),t),B.E(s.aSB(),1),s.aOF()],x.p),A.m,t,A.e,A.i,0,A.p)},
$S:586}
C.fLJ.prototype={
$10$align$style$weight(d,e,f,g,h,i,j,k,l,m){return C.er(k,!1,j,A.aG,"",4280640491,i,l,m,"",h,C.bCZ(),null,"","",0,!1,"",0,D.bk,4280172719,2,d,0,0,"",D.ct,D.cW,g,e,f)},
$9$align$weight(d,e,f,g,h,i,j,k,l){return this.$10$align$style$weight(d,e,f,g,h,i,j,k,A.bt,l)},
$8$weight(d,e,f,g,h,i,j,k){return this.$10$align$style$weight(d,e,f,g,h,i,j,A.K,A.bt,k)},
$7(d,e,f,g,h,i,j){return this.$10$align$style$weight(d,e,f,g,h,i,j,A.K,A.bt,A.V)},
$S:z+98}
C.fLI.prototype={
$3(d,e,f){var w=this,v=C.bCZ(),u=w.b?A.H:A.cC,t=w.c?A.cH:A.bt
return C.er(w.d,!1,f,A.aG,"",4280640491,e,t,u,"",0.36,v,null,"","",0,!0,"",0,D.bk,4280172719,2,d,0,w.f,w.e,D.ct,D.cW,0.82,0.09,w.a)},
$S:z+28}
C.ckp.prototype={
$1(d){return B.w(d)},
$S:17}
C.fTs.prototype={
$0(){return this.a},
$S:z+15}
C.fyd.prototype={
$1(d){return d.a.d3(this.a)},
$S:z+30}
C.fye.prototype={
$2(d,e){return J.cr(e)},
$S:z+31}
C.fTu.prototype={
$0(){return B.a([],x.o)},
$S:z+15}
C.fTx.prototype={
$1(d){return d.a===A.a.i(this.a).toLowerCase()},
$S:z+10}
C.fTy.prototype={
$0(){return A.d.gH(D.wV)},
$S:z+33}
C.fTq.prototype={
$1(d){return d.a},
$S:z+16}
C.fTt.prototype={
$1(d){return d.a},
$S:z+16}
C.fRo.prototype={
$1(d){return A.a.i(B.w(d))},
$S:17}
C.fRp.prototype={
$1(d){return d.length!==0},
$S:3}
C.fRq.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.fLN.prototype={
$0(){return C.cD()},
$S:22}
C.fLQ.prototype={
$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var w=this.a.$0(),v=m==null?this.b.e:m,u=this.c,t=u?k:D.ct,s=u?n:0
return C.er(j,l,v,A.aG,"",4280640491,i,q,r,"",h,w,null,u?o:"",p,0,!1,"",0,D.bk,4280172719,2,d,s,0,"",t,D.cW,g,e,f)},
$6(d,e,f,g,h,i){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bn,D.dm,!1,null,0,"","",A.bt,A.a8)},
$7$key(d,e,f,g,h,i,j){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bn,D.dm,!1,null,0,"",j,A.bt,A.a8)},
$8$fx$key(d,e,f,g,h,i,j,k){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bn,D.dm,!1,null,0,j,k,A.bt,A.a8)},
$11$align$anim$delay$fx$key(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,!1,null,l,m,n,A.bt,A.a8)},
$10$align$anim$key$weight(d,e,f,g,h,i,j,k,l,m){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,!1,null,0,"",l,A.bt,m)},
$10$align$color$delay$key(d,e,f,g,h,i,j,k,l,m){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,D.dm,!1,k,l,"",m,A.bt,A.a8)},
$9$anim$key$weight(d,e,f,g,h,i,j,k,l){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bn,j,!1,null,0,"",k,A.bt,l)},
$9$color$delay$key(d,e,f,g,h,i,j,k,l){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bn,D.dm,!1,j,k,"",l,A.bt,A.a8)},
$11$anim$color$fx$key$weight(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bn,j,!1,k,0,l,m,A.bt,n)},
$11$align$anim$key$style$weight(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,!1,null,0,"",l,m,n)},
$11$anim$bullets$color$delay$key(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bn,j,k,l,m,"",n,A.bt,A.a8)},
$S:z+35}
C.fLP.prototype={
$9$fx$key$rotation(d,e,f,g,h,i,j,k,l){var w=this.a.$0()
return C.er(A.bn,!1,4279310375,A.aG,"",i,24,A.bt,A.a8,"",h,w,null,this.b?j:"",k,0,!1,"",l,d,i,0,"",0,0,"",D.ct,D.fi,g,e,f)},
$6(d,e,f,g,h,i){return this.$9$fx$key$rotation(d,e,f,g,h,i,"","",0)},
$7$key(d,e,f,g,h,i,j){return this.$9$fx$key$rotation(d,e,f,g,h,i,"",j,0)},
$8$fx$key(d,e,f,g,h,i,j,k){return this.$9$fx$key$rotation(d,e,f,g,h,i,j,k,0)},
$S:z+27}
C.fLO.prototype={
$9$anim$delay$fx$key(d,e,f,g,h,i,j,k,l){var w=this.a.$0(),v=this.b,u=v?i:D.ct,t=v?j:0
return C.er(A.bn,!1,4279310375,A.aG,"",4280640491,24,A.bt,A.a8,"",h,w,d,v?k:"",l,0,!1,"",0,D.bk,4280172719,2,"",t,0,"",u,D.lR,g,e,f)},
$5(d,e,f,g,h){return this.$9$anim$delay$fx$key(d,e,f,g,h,D.qY,350,"","")},
$8$anim$delay$key(d,e,f,g,h,i,j,k){return this.$9$anim$delay$fx$key(d,e,f,g,h,i,j,"",k)},
$8$anim$fx$key(d,e,f,g,h,i,j,k){return this.$9$anim$delay$fx$key(d,e,f,g,h,i,350,j,k)},
$S:z+37}
C.fLM.prototype={
$1(d){var w=d.x
return w>0&&w<=this.a.length},
$S:z+17}
C.fOd.prototype={
$0(){var w=0,v=B.j(x.e),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.a){s=t.b
r=s.a
s=(r==="bullets"||r==="section")&&s.w.length!==0}else s=!1
w=s?3:5
break
case 3:s=t.b
w=6
return B.b($.hyj.c3(0,A.a.i(s.w).toLowerCase(),new C.fOb(s)),$async$$0)
case 6:q=e
w=4
break
case 5:q=null
case 4:w=t.c&&t.b.r.length!==0?7:9
break
case 7:s=t.b
w=10
return B.b(t.d.c3(0,s.r,new C.fOc(s)),$async$$0)
case 10:p=e
w=8
break
case 9:p=null
case 8:u=new B.bB(t.e,new B.bqK(p,q),x.e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1703}
C.fOb.prototype={
$0(){return F.aPu(this.a.w)},
$S:192}
C.fOc.prototype={
$0(){var w=this.a.r,v=B.aL(w.toLowerCase()," ","_")
return F.bBS("https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji@main/assets/"+B.hz(2,w,A.c9,!1)+"/3D/"+v+"_3d.png","image/png")},
$S:192}
C.fq3.prototype={
$1(d){return d.a==="bio"},
$S:z+17}
C.fq4.prototype={
$1(d){return d.a},
$S:z+18}
C.fq5.prototype={
$1(d){return d.b},
$S:z+19}
C.h1M.prototype={
$1(d){return D.hAq},
$S:z+41}
C.f8S.prototype={
$0(){return this.a.x=C.i2Z(this.b,this.c.b)},
$S:0}
C.f8T.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.f8Q.prototype={
$1(d){var w
if(this.a){w=this.b
if(w==null)w="circle"}else w=d
return w},
$S:419}
C.f8R.prototype={
$1(d){var w
if(this.a)w=d
else{w=this.b
if(w==null)w=""}return w},
$S:419}
C.f8P.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:o=t.b
n=t.a
m=n.c
m.toString
w=3
return B.b(B.bT(A.as,null,new C.f8K(n,t.c,o,t.d,t.e,t.f),m,!0,!0,o,A.ke,!1,!1,x.N),$async$$0)
case 3:s=e
if(s==null){w=1
break}w=A.a.a0(s,"finale:")?4:5
break
case 4:r=A.a.b2(s,7)
if(r.length===0){n.m(new C.f8L(n))
w=1
break}o=n.c
if(o==null){w=1
break}m=n.w
q=m.d
if(q.length===0){q=n.x
if(q==null)q=""}w=6
return B.b(C.hEy(o,m.cOL(q,r)),$async$$0)
case 6:p=e
if(p!=null&&n.c!=null)n.m(new C.f8M(n,p))
w=1
break
case 5:o=s==="__auto"?null:s
t.r.$1(o)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.f8K.prototype={
$1(d){var w,v,u,t,s,r,q=this,p=null,o=new C.f8O(q.b,d),n=x.p,m=B.a([o.$2("__auto",B.q(p,D.bci,A.f,p,p,D.b7d,p,p,p,p,p,p,p,p))],n),l=q.c,k=l?D.Dc:D.Dj,j=k.length,i=q.a,h=q.d,g=q.e,f=q.f,e=0
for(;e<j;++e){w=k[e].a
v=g.$1(w)
u=f.$1(w)
if(v.length===0&&u.length===0)v="rounded"
m.push(o.$2(w,new B.a5(64,64,C.fOs(v,i.b6D(h),u),p)))}t=B.kU(1,m,4,10,10,p,A.dW,!0)
if(!l)return B.bm(!0,new B.D(Ab.yJ,t,p),!0,!1,A.ag,!0,!0)
s=new C.f8N(i,d)
m=B.aH(d,A.c1,x.w).w
l=B.a([s.$2("","None")],n)
for(e=0;e<32;++e){r=D.If[e]
l.push(s.$2(r.a,r.b))}return B.bm(!0,new B.cR(new B.aY(0,1/0,0,m.a.b*0.85),B.cg(B.x(B.a([D.fN3,A.X,t,A.dY,D.f8p,A.ax,D.fYd,A.X,B.kU(1.15,l,3,10,10,p,A.dW,!0)],n),A.E,p,A.e,A.i,0,A.p),A.t,p,A.y,p,Ab.yJ,p,p,A.ah),p),!0,!1,A.ag,!0,!0)},
$S:27}
C.f8O.prototype={
$2(d,e){var w=null,v=d==="__auto"&&this.a==null||d===this.a,u=B.m(16),t=v?A.b8.j(0.22):A.c.j(0.04),s=v?A.br:A.dl
return B.aA(w,B.q(w,e,A.f,w,w,new B.p(t,w,B.L(s,A.r,v?2:1),u,w,w,A.n),w,w,w,w,A.hH,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.f8J(this.b,d),w,w,w,w,w,w,!1,A.a4)},
$S:1704}
C.f8J.prototype={
$0(){B.a6(this.a,!1).O(this.b)
return null},
$S:0}
C.f8N.prototype={
$2(d,e){var w,v=null,u=this.a.w,t=u.a===d,s=B.m(12),r=t?A.bN:A.bA
r=B.L(r,A.r,t?2.5:1)
w=B.m(10)
u=B.E(B.q(v,B.by(w,d.length===0?B.q(v,D.as_,A.f,A.c.j(0.05),v,v,v,v,v,v,v,v,v,v):new B.dx(!0,new C.Ok(u.Gc(d),!0,!1,v),v),A.aq),A.f,v,v,new B.p(v,v,r,s,v,v,A.n),v,v,v,v,v,v,v,v),1)
return B.aA(v,B.x(B.a([u,A.ax,B.d(e,v,1,A.a2,v,v,v,B.l(v,v,t?A.bN:A.ab,v,v,v,v,v,v,v,v,10.5,v,v,A.V,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.i,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.f8I(this.b,d),v,v,v,v,v,v,!1,A.a4)},
$S:125}
C.f8I.prototype={
$0(){B.a6(this.a,!1).O("finale:"+this.b)
return null},
$S:0}
C.f8L.prototype={
$0(){var w=this.a
return w.w=w.w.Gc("")},
$S:0}
C.f8M.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.f8y.prototype={
$0(){var w=this.a
w.e=this.b
w.cy=null},
$S:0}
C.f8z.prototype={
$0(){return this.a.cy=J.k(this.b)},
$S:0}
C.f8B.prototype={
$0(){return this.a.cy="Type a little about the presentation first, or attach a document."},
$S:0}
C.f8C.prototype={
$0(){return this.a.cy='You mentioned your logo \u2014 tap "Add your logo" below to upload it, so the AI puts the real one in.'},
$S:0}
C.f8D.prototype={
$0(){var w=this.a
w.ax=!0
w.cy=null
w.ay="Writing your "+w.ch+" slides\u2026"},
$S:0}
C.f8E.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.f8A(w,d))},
$S:2}
C.f8A.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.f8F.prototype={
$0(){var w=this.a
w.ax=!1
w.cy=B.w(this.b)},
$S:0}
C.f95.prototype={
$0(){return this.a.f.fW()},
$S:0}
C.f96.prototype={
$0(){var w=this.a
return w.m(new C.f94(w))},
$S:0}
C.f94.prototype={
$0(){return this.a.e=null},
$S:0}
C.f97.prototype={
$0(){var w=this.a
return w.m(new C.f93(w))},
$S:0}
C.f93.prototype={
$0(){return this.a.x=null},
$S:0}
C.f99.prototype={
$1(d){var w=this.a
return w.m(new C.f92(w,d))},
$S:35}
C.f92.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.f9a.prototype={
$1(d){var w=this.a
return w.m(new C.f91(w,d))},
$S:35}
C.f91.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.f9b.prototype={
$0(){var w=this.a
return w.m(new C.f90(w))},
$S:0}
C.f90.prototype={
$0(){return this.a.y=B.a([],x.s)},
$S:0}
C.f9c.prototype={
$1(d){var w=this.a
return w.m(new C.f9_(w,d))},
$S:35}
C.f9_.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.f9d.prototype={
$1(d){var w=this.a
return w.m(new C.f8Z(w,d))},
$S:35}
C.f8Z.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.f9e.prototype={
$0(){var w=this.a
return w.m(new C.f8Y(w))},
$S:0}
C.f8Y.prototype={
$0(){var w=this.a
return w.w=w.w.Gc("")},
$S:0}
C.f9f.prototype={
$0(){var w=this.a
return w.m(new C.f8X(w,this.b))},
$S:0}
C.f8X.prototype={
$0(){return this.a.ch=this.b},
$S:0}
C.f9g.prototype={
$2(d,e){var w,v,u=(e.b-16)/3,t=B.a([],x.p)
for(w=this.a,v=0;v<6;++v)t.push(new B.a5(u,null,w.bSE(D.a5E[v]),null))
return B.bU(A.bG,t,A.bs,null,8,8)},
$S:178}
C.f98.prototype={
$1(d){var w=this.a
return w.m(new C.f8W(w,d))},
$S:9}
C.f8W.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.f8G.prototype={
$0(){var w=this.a
return w.m(new C.f8H(w,this.b,this.c))},
$S:0}
C.f8H.prototype={
$0(){var w=this.c,v=this.a.cx
return this.b?v.W(0,w):v.J(0,w)},
$S:0}
C.f8V.prototype={
$0(){var w=this.a
return w.m(new C.f8U(w,this.b))},
$S:0}
C.f8U.prototype={
$0(){return this.a.CW=this.b},
$S:0}
C.h1L.prototype={
$1(d){return new C.a1A(this.a,this.b,null)},
$S:z+42}
C.f8r.prototype={
$0(){return this.a.r="Type what you want changed or added."},
$S:0}
C.f8s.prototype={
$0(){var w=this.a
w.e=!0
w.r=null
w.f="Making your changes\u2026"},
$S:0}
C.f8t.prototype={
$0(){var w=this.a
w.e=!1
w.r=this.b===D.aKX?"The text already fits inside its frame.":"The text is already at its limit."},
$S:0}
C.f8u.prototype={
$0(){var w=this.a
w.e=!1
w.r="Nothing to bring back. Changes are kept for 20 minutes."},
$S:0}
C.f8v.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.f8q(w,d))},
$S:2}
C.f8q.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.f8w.prototype={
$0(){var w=this.a
w.e=!1
w.r=B.w(this.b)},
$S:0}
C.f8x.prototype={
$0(){var w=this.b
if(A.a.c8(w,"\u2026"))w=A.a.aC(w,0,w.length-1)
this.a.d.bP(0,new B.ba(w,B.hg(A.bB,w.length),A.aQ))},
$S:0}
C.fxu.prototype={
$1(d){return d.a===this.a},
$S:232}
C.epi.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=p.gazs(),n=o.x
n===$&&B.c()
w=B.m(16)
v=p.a.c
u=v?D.d1c:D.djg
t=D.ym.j(v?1:0.55)
v=p.a.c
t=B.L(t,A.r,v?1.8:1.2)
s=D.ym.j(v?0.35+0.15*o.x:0.12)
v=B.a([new B.ac(0,A.G,s,A.I,p.a.c?16:8)],x.V)
s=B.m(15)
n=B.bR(0,B.b4(q,q,q,new C.bjU(n*6.283,q),A.az),0,0,0)
o=o.x
o=B.bR(0,B.bTN(B.eM(A.A,0.5,B.q(q,q,A.f,q,q,new B.p(q,q,q,q,q,new B.a9(A.a6,A.aa,A.x,B.a([A.L,D.bke.j(0.28),A.L],x.O),q,q),A.n),q,q,q,q,q,q,q,q),q),!0,new B.o(o*2.4-1.2,0)),0,0,0)
r=x.p
return B.q(q,B.by(s,new B.an(A.a0,q,A.ad,A.t,B.a([n,o,B.at(B.x(B.a([B.X(p.a.c?A.ee:A.mj,D.ym,q,q,q,20),A.ax,B.ev(A.A,B.oe(A.jR,D.fGl,new C.eph()),A.f,A.e2)],r),A.m,q,A.e,A.Q,0,A.p),q,q,q),B.ap(q,B.q(q,D.fCP,A.f,q,q,new B.p(D.ym,q,q,B.m(6),q,q,A.n),q,q,q,q,P.amK,q,q,q),q,q,q,4,4,q)],r),q),A.aq),A.f,q,q,new B.p(q,q,t,w,v,new B.a9(A.aA,A.aF,A.x,u,q,q),A.n),q,64,q,q,q,q,q,q)},
$S:98}
C.eph.prototype={
$1(d){return D.c6y.aK(0,d)},
$S:73}
C.fTz.prototype={
$1(d){return d.a===this.a},
$S:z+6}
C.fTA.prototype={
$1(d){var w=d.a
return A.a.i(w).length!==0&&w!==d.b},
$S:232}
C.fTB.prototype={
$2(d,e){return A.o.aS(e.a.length,d.a.length)},
$S:1705}
C.fTC.prototype={
$1(d){var w,v,u,t,s,r,q,p
for(w=this.a,v=w.length,u=d,t=0;t<w.length;w.length===v||(0,B.J)(w),++t){s=w[t]
r=s.a
q=s.b
u=B.aL(u,r,q)
p=r.toUpperCase()
if(p!==r)u=B.aL(u,p,q.toUpperCase())}return u},
$S:14}
C.fTv.prototype={
$1(d){return d.a},
$S:z+18}
C.fTw.prototype={
$1(d){return d.b},
$S:z+19}
C.h0Z.prototype={
$1(d){return new C.a_Y(this.a,this.b,null)},
$S:z+44}
C.dso.prototype={
$0(){var w=this.a
w.f=!0
w.r=null},
$S:0}
C.dsp.prototype={
$1(d){return d.a===this.a.gajO()},
$S:z+10}
C.dsq.prototype={
$0(){var w=this.a
w.f=!1
w.r=J.k(this.b)},
$S:0}
C.dst.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.dsu.prototype={
$0(){var w=this.a
return w.m(new C.dss(w,this.b))},
$S:0}
C.dss.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.dsv.prototype={
$1(d){var w=this.a
return w.m(new C.dsr(w,d))},
$S:9}
C.dsr.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.epg.prototype={
$1$2(d,e,f){var w=B.bq(d,!0,f)
A.d.e0(w,this.a)
return B.cW(w,0,B.dA(e,"count",x.S),B.U(w).c).dn(0)},
$2(d,e){return this.$1$2(d,e,x.z)},
$S:1706}
C.fmb.prototype={
$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,n,o,p){return C.er(A.bn,!1,4279310375,A.aG,"",i,24,A.bt,A.a8,"",h,this.a.$0(),null,k,j,0,!1,"",n,d,o,p,"",m,0,"",l,D.fi,g,e,f)},
$8(d,e,f,g,h,i,j,k){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,D.ct,0,0,0,0)},
$12$anim$delay$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,n,o){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,0,n,o)},
$10$anim$delay(d,e,f,g,h,i,j,k,l,m){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,0,0,0)},
$S:z+45}
C.fmd.prototype={
$9(d,e,f,g,h,i,j,k,l){return C.er(A.K,!1,this.b.d,A.aG,"",4280640491,i,A.bt,A.cT,"",h,this.a.$0(),null,k,j,0,!1,"",0,D.bk,4280172719,2,d,l,0,"",D.n9,D.cW,g,e,f)},
$S:z+46}
C.fmc.prototype={
$5$size(d,e,f,g,h){var w,v=this,u=v.b,t=u.c
u=u.xc(0,"twinkle")
w=t===D.bk?0.785:0
return v.a.$13$anim$delay$rotation$stroke$strokeWidth(t,d-h/2,e-h*0.89,h,h*1.78,v.c,f,u,D.n9,g,w,v.d.d,1.2)},
$4(d,e,f,g){return this.$5$size(d,e,f,g,0.022)},
$S:z+47}
C.fma.prototype={
$1(d){var w=d.fx
return w==="sub"||w==="body"},
$S:z+4}
C.fMU.prototype={
$1(d){return d.a===this.a},
$S:z+11}
C.fMV.prototype={
$0(){return A.d.gH(D.Io)},
$S:z+49}
C.fMW.prototype={
$1(d){return d.a===this.a},
$S:z+11}
C.fop.prototype={
$1(d){return!(A.a.a0(d.db,"__design__")||A.a.a0(d.a,"design_"))},
$S:z+4}
C.fT1.prototype={
$1(d){var w=2450411,v=4281908728
C.dy(d,C.dz(4280171146,1,0,D.bk,w,0,0.52,0,0))
C.dy(d,C.dz(v,1,0,D.bk,w,0,0.04,0.48,0))
C.dy(d,C.dz(4294047225,0.38,0,D.bk,w,0,0.48,0.52,0.62))
C.dy(d,C.dz(v,0.006,0,D.fJ,v,3,0.32,0.08,0.14))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fT2.prototype={
$1(d){var w=2450411,v=4280640491,u=4291548641
C.dy(d,C.dz(4280172719,0.8,0,D.bk,w,0,0.36,0.58,0.1))
C.dy(d,C.dz(v,0.64,0,D.bk,w,0,0.28,0.64,0.18))
C.dy(d,C.dz(4282090230,0.44,0,D.bk,w,0,0.2,0.7,0.28))
C.dy(d,C.dz(v,0.006,0,D.fJ,v,3,0.22,0.08,0.12))
C.dy(d,C.dz(u,0.004,0,D.fJ,u,2,0.38,0.08,0.18))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fT3.prototype={
$1(d){var w=2450411,v=4279548070
C.dy(d,C.dz(4279080072,0.11,0,D.bk,w,0,1,0,0))
C.dy(d,C.dz(4279310375,0.11,0,D.bk,w,0,1,0,0.89))
C.dy(d,C.dz(856528008,0.72,0,D.kc,w,0,0.28,0.72,0.14))
C.dy(d,C.dz(1426953352,0.2,0,D.kc,w,0,0.2,0.78,0.22))
C.dy(d,C.dz(v,0.004,0,D.fJ,v,2,1,0,0.105))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fTe.prototype={
$1(d){var w=2450411
C.dy(d,C.dz(4279203438,0.55,0,D.kc,w,0,0.5,0.55,-0.05))
C.dy(d,C.dz(4280171146,0.5,0,D.kc,w,0,0.45,0.62,0.35))
C.dy(d,C.dz(4280640491,0.4,0.3,D.kb,w,0,0.35,0.68,0.55))
C.dy(d,C.dz(571438702,0.12,0,D.bk,w,0,0.12,0.08,0.08))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fTj.prototype={
$1(d){var w=4280472558
C.dy(d,C.dz(4279310375,0.75,-0.4,D.kb,2450411,0,0.75,-0.15,0.35))
C.dy(d,C.dz(w,0.55,0,D.bk,2450411,0,0.06,0.42,0.38))
C.dy(d,C.dz(w,0.006,0,D.fJ,w,3,0.35,0.08,0.08))
C.dy(d,C.dz(2282478,0.12,0,D.bk,w,2,0.2,0.75,0.82))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fTk.prototype={
$1(d){var w=2450411,v=4280640491
C.dy(d,C.dz(3423541034,0.48,0,D.bk,w,0,1,0,0))
C.dy(d,C.dz(v,0.12,-0.08,D.kc,w,0,1.1,-0.05,0.38))
C.dy(d,C.dz(858088427,0.35,0,D.bk,w,0,0.42,0.55,0.05))
C.dy(d,C.dz(v,0.006,0,D.fJ,v,3,0.25,0.08,0.52))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fTl.prototype={
$1(d){var w,v,u,t,s=4280171146
for(w=0;w<4;++w){v=D.d04[w]
u=Date.now()
t=$.jc
$.jc=t+1
v=new C.eP("design_"+(""+1000*u+"_"+t),D.fi,0.04+w*0.235,0.72,0.21,0.22,"",24,A.a8,A.bt,A.aG,4279310375,A.bn,null,D.bk,v,4294967295,2,0,!1,"",0,D.ct,0,"","","","","",!1,0)
u=$.Lg
v.db="__design__:"+(u.length===0?"layer":u)
A.d.c4(d.z,0,v)}C.dy(d,C.dz(s,0.006,0,D.fJ,s,3,0.3,0.04,0.08))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fTm.prototype={
$1(d){var w,v,u,t,s=4280172719
for(w=0;w<4;++w){v=B.ar(A.mR,A.dk,w/3).l()
u=Date.now()
t=$.jc
$.jc=t+1
v=new C.eP("design_"+(""+1000*u+"_"+t),D.fi,0.58+w*0.08,0.15+w*0.05,0.32,0.7,"",24,A.a8,A.bt,A.aG,4279310375,A.bn,null,D.DX,v,2450411,0,0,!1,"",0,D.ct,0,"","","","","",!1,0)
u=$.Lg
v.db="__design__:"+(u.length===0?"layer":u)
A.d.c4(d.z,0,v)}C.dy(d,C.dz(s,0.006,0,D.fJ,s,3,0.4,0.06,0.1))
d.e=4294967295
d.f=4292602622},
$S:z+1}
C.fTn.prototype={
$1(d){var w=4294967295
C.dy(d,C.dz(4280640491,1,0,D.bk,2450411,0,0.42,0,0))
C.dy(d,C.dz(4280110808,1.1,1.57,D.kb,2450411,0,0.18,0.35,-0.05))
C.dy(d,C.dz(w,0.006,0,D.fJ,w,2,0.25,0.08,0.85))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fTo.prototype={
$1(d){var w=4278982953,v=2450411,u=4282090230
C.dy(d,C.dz(w,0.1,0,D.bk,v,0,1,0,0))
C.dy(d,C.dz(u,0.012,0,D.bk,v,0,1,0,0.1))
C.dy(d,C.dz(u,0.006,0,D.fJ,u,3,0.42,0.06,0.14))
C.dy(d,C.dz(403446057,0.68,0,D.kc,v,0,0.22,0.72,0.18))
C.dy(d,C.dz(w,0.1,0,D.bk,v,0,1,0,0.9))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fTp.prototype={
$1(d){var w=4278630100
C.dy(d,C.dz(4279310375,1.2,0.15,D.kc,2450411,0,0.55,-0.2,-0.1))
C.dy(d,C.dz(w,1.1,0.15,D.bk,2450411,0,0.08,0.15,-0.05))
C.dy(d,C.dz(1120295,0.18,0,D.bk,w,3,0.38,0.55,0.75))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fT4.prototype={
$1(d){var w=4292617766
C.dy(d,C.dz(4282714634,0.65,-0.2,D.kb,2450411,0,0.65,-0.1,0.45))
C.dy(d,C.dz(w,0.5,-0.15,D.kb,2450411,0,0.5,0.05,0.55))
C.dy(d,C.dz(w,0.006,0,D.fJ,w,3,0.38,0.55,0.08))
d.e=4294967295
d.f=4294898418},
$S:z+1}
C.fT5.prototype={
$1(d){var w=2450411
C.dy(d,C.dz(4278413729,0.35,3.14,D.kb,w,0,0.45,-0.05,0.7))
C.dy(d,C.dz(4278355143,0.3,3.14,D.kb,w,0,0.4,0.25,0.75))
C.dy(d,C.dz(4279150057,0.32,3.14,D.kb,w,0,0.5,0.55,0.72))
C.dy(d,C.dz(863884284,0.22,0,D.eZ,w,0,0.22,0.08,0.12))
d.e=4293982719
d.f=4294967295},
$S:z+1}
C.fT6.prototype={
$1(d){var w=4279310375,v=2450411,u=4280472558
C.dy(d,C.dz(w,0.14,0,D.bk,v,0,0.14,0.02,0.02))
C.dy(d,C.dz(2282478,0.14,0,D.bk,u,3,0.14,0.84,0.02))
C.dy(d,C.dz(w,0.28,0,D.kc,v,0,0.35,-0.08,0.78))
C.dy(d,C.dz(u,0.22,0.5,D.kb,v,0,0.3,0.72,0.78))
C.dy(d,C.dz(w,0.006,0,D.fJ,w,3,0.2,0.08,0.22))
d.e=4294967295
d.f=null},
$S:z+1}
C.fT7.prototype={
$1(d){var w=4293571336,v=1156231944
C.dy(d,C.dz(1841431,0.92,0,D.bk,w,3,0.92,0.04,0.04))
C.dy(d,C.dz(v,0.15,0,D.kb,2450411,0,0.15,0.02,0.02))
C.dy(d,C.dz(v,0.15,3.14,D.kb,2450411,0,0.15,0.83,0.83))
C.dy(d,C.dz(w,0.004,0,D.fJ,w,2,0.7,0.15,0.88))
d.e=4280031511
d.f=4282523654},
$S:z+1}
C.fT8.prototype={
$1(d){var w=4279080072,v=2450411
C.dy(d,C.dz(w,0.14,0,D.lt,v,0,0.14,0.68,0.18))
C.dy(d,C.dz(4279548070,0.14,0,D.lt,v,0,0.14,0.78,0.28))
C.dy(d,C.dz(4281193663,0.14,0,D.lt,v,0,0.14,0.68,0.38))
C.dy(d,C.dz(4284410580,0.14,0,D.lt,v,0,0.14,0.78,0.48))
C.dy(d,C.dz(4279203438,0.14,0,D.lt,v,0,0.14,0.68,0.58))
C.dy(d,C.dz(w,0.006,0,D.fJ,w,3,0.22,0.06,0.1))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fT9.prototype={
$1(d){var w=2450411,v=4280640491
C.dy(d,C.dz(3708753706,0.42,0,D.bk,w,0,1,0,0))
C.dy(d,C.dz(v,0.06,-0.05,D.kc,w,0,1,0,0.38))
C.dy(d,C.dz(859356664,0.25,0,D.eZ,w,0,0.25,0.7,0.08))
C.dy(d,C.dz(v,0.006,0,D.fJ,v,3,0.3,0.08,0.48))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fTa.prototype={
$1(d){var w,v,u,t,s=4280640491
for(w=0;w<4;++w){v=B.ar(A.mR,A.dk,w/3).l()
u=Date.now()
t=$.jc
$.jc=t+1
v=new C.eP("design_"+(""+1000*u+"_"+t),D.fi,0.06+w*0.23,0.78,0.2,0.14,"",24,A.a8,A.bt,A.aG,4279310375,A.bn,null,D.DX,v,2450411,0,0,!1,"",0,D.ct,0,"","","","","",!1,0)
u=$.Lg
v.db="__design__:"+(u.length===0?"layer":u)
A.d.c4(d.z,0,v)}C.dy(d,C.dz(4280172719,0.08,0,D.bk,2450411,0,1,0,0))
C.dy(d,C.dz(s,0.006,0,D.fJ,s,3,0.35,0.06,0.14))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fTb.prototype={
$1(d){var w,v,u,t=4291548641,s=4279310375
for(w=1;w<6;++w){v=Date.now()
u=$.jc
$.jc=u+1
u=new C.eP("design_"+(""+1000*v+"_"+u),D.fi,0.08,0.15+w*0.12,0.55,0.002,"",24,A.a8,A.bt,A.aG,s,A.bn,null,D.fJ,t,t,0,0,!1,"",0,D.ct,0,"","","","","",!1,0)
v=$.Lg
u.db="__design__:"+(v.length===0?"layer":v)
A.d.c4(d.z,0,u)}C.dy(d,C.dz(s,0.75,0,D.bk,2450411,0,0.22,0.72,0.1))
C.dy(d,C.dz(872415231,0.16,0,D.bk,2450411,0,0.16,0.75,0.15))
C.dy(d,C.dz(s,0.006,0,D.fJ,s,3,0.2,0.08,0.1))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fTc.prototype={
$1(d){var w=4282865001,v=2450411,u=4284773515
C.dy(d,C.dz(4674921,0.9,0,D.bk,4287931320,2,0.9,0.05,0.05))
C.dy(d,C.dz(w,0.08,0,D.bk,v,0,0.08,0.03,0.03))
C.dy(d,C.dz(u,0.08,0,D.bk,v,0,0.08,0.89,0.03))
C.dy(d,C.dz(u,0.08,0,D.bk,v,0,0.08,0.03,0.89))
C.dy(d,C.dz(w,0.08,0,D.bk,v,0,0.08,0.89,0.89))
C.dy(d,C.dz(w,0.004,0,D.fJ,w,2,0.25,0.12,0.12))
d.e=4294507260
d.f=4293060848},
$S:z+1}
C.fTd.prototype={
$1(d){var w,v,u,t,s,r=4279310375,q=2450411
for(w=0;w<3;++w){v=w*0.24
u=Date.now()
t=$.jc
$.jc=t+1
t=new C.eP("design_"+(""+1000*u+"_"+t),D.fi,0.55,0.14+v,0.38,0.18,"",24,A.a8,A.bt,A.aG,r,A.bn,null,D.bk,4294967295,4280640491,2,0,!1,"",0,D.ct,0,"","","","","",!1,0)
u=$.Lg
t.db="__design__:"+(u.length===0?"layer":u)
A.d.c4(d.z,0,t)
u=B.ar(A.d6,A.cn,w/2).l()
t=Date.now()
s=$.jc
$.jc=s+1
u=new C.eP("design_"+(""+1000*t+"_"+s),D.fi,0.57,0.16+v,0.06,0.14,"",24,A.a8,A.bt,A.aG,r,A.bn,null,D.bk,u,q,0,0,!1,"",0,D.ct,0,"","","","","",!1,0)
v=$.Lg
u.db="__design__:"+(v.length===0?"layer":v)
A.d.c4(d.z,0,u)}C.dy(d,C.dz(4280171146,1,0,D.bk,q,0,0.48,0,0))
C.dy(d,C.dz(4280172719,1.1,1.57,D.kb,q,0,0.12,0.42,-0.05))
d.e=4294967295
d.f=4292602622},
$S:z+1}
C.fTf.prototype={
$1(d){var w=2450411
C.dy(d,C.dz(870995980,0.55,0.45,D.kc,w,0,0.55,-0.12,-0.08))
C.dy(d,C.dz(856996006,0.45,0.45,D.kc,w,0,0.45,0.62,-0.05))
C.dy(d,C.dz(16777215,0.38,0.45,D.kc,4293548044,5,0.38,0.52,0.12))
C.dy(d,C.dz(585783308,0.3,0.45,D.kc,w,0,0.3,0.56,0.16))
C.dy(d,C.dz(4279548070,0.06,0,D.bk,w,0,0.16,0.38,0.04))
C.dy(d,C.dz(1156208652,0.28,0,D.eZ,w,0,0.28,0.66,0.52))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fTg.prototype={
$1(d){var w=4279080072,v=2450411,u=4294047225,t=4291548641,s=4293548044
C.dy(d,C.dz(w,1,0,D.bk,v,0,0.07,0,0))
C.dy(d,C.dz(u,0.1,0,D.bk,t,1,0.46,0.48,0.14))
C.dy(d,C.dz(u,0.1,0,D.bk,t,1,0.46,0.48,0.28))
C.dy(d,C.dz(u,0.1,0,D.bk,t,1,0.46,0.48,0.42))
C.dy(d,C.dz(s,0.08,0,D.eZ,v,0,0.08,0.5,0.16))
C.dy(d,C.dz(w,0.08,0,D.eZ,v,0,0.08,0.5,0.3))
C.dy(d,C.dz(4279548070,0.08,0,D.eZ,v,0,0.08,0.5,0.44))
C.dy(d,C.dz(16777215,0.32,0.45,D.kc,s,4,0.32,0.1,0.18))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fTh.prototype={
$1(d){var w,v,u,t=4279548070,s=4293548044,r=4279179050
C.dy(d,C.dz(4294047225,0.08,0,D.bk,t,2,0.1,0.02,0.06))
C.dy(d,C.dz(s,0.42,0,D.bk,2450411,0,0.36,0.58,0.18))
C.dy(d,C.dz(872415231,0.12,0,D.bk,2450411,0,0.28,0.62,0.24))
C.dy(d,C.dz(16777215,0.28,0,D.eZ,s,4,0.32,0,0.72))
C.dy(d,C.dz(r,0.006,0,D.fJ,r,3,0.42,0.08,0.22))
for(w=0;w<3;++w){v=Date.now()
u=$.jc
$.jc=u+1
u=new C.eP("design_"+(""+1000*v+"_"+u),D.fi,0.08,0.58+w*0.1,0.04,0.04,"",24,A.a8,A.bt,A.aG,4279310375,A.bn,null,D.eZ,16777215,t,2,0,!1,"",0,D.ct,0,"","","","","",!1,0)
v=$.Lg
u.db="__design__:"+(v.length===0?"layer":v)
A.d.c4(d.z,0,u)}d.e=4294967295
d.f=4294965229},
$S:z+1}
C.fTi.prototype={
$1(d){var w=2450411,v=4279548070
C.dy(d,C.dz(3423541034,0.55,0,D.bk,w,0,1,0,0))
C.dy(d,C.dz(4009754623,0.56,0.45,D.kc,w,0,0.56,0.22,0.18))
C.dy(d,C.dz(3439329279,0.44,0.45,D.kc,w,0,0.44,0.28,0.24))
C.dy(d,C.dz(v,0.07,0,D.bk,w,0,0.22,0.34,0.62))
C.dy(d,C.dz(v,1,0,D.bk,w,0,0.07,0,0))
d.e=4280166715
d.f=4279179050},
$S:z+1}
C.fKK.prototype={
$1(d){return d.a===this.a},
$S:z+20}
C.fKL.prototype={
$0(){return A.d.gH($.bGC())},
$S:z+52}
C.fwN.prototype={
$1(d){var w=A.a.i(d)
if(w.length===0)return""
return A.a.a0(w,"\u2022")?w:"\u2022 "+w},
$S:14}
C.fwM.prototype={
$1(d){return C.iaW(d,this.a,this.b)},
$S:z+53}
C.fTI.prototype={
$1(d){var w=this,v=w.a,u=w.b,t=B.wj(1.0375,1.01875,1)
return new B.fV(v,u,new C.aUA(B.i_W(A.vN,C.iaZ(w.c,w.d,v,u),t)))},
$S:422}
C.e2L.prototype={
$1(d){var w=d.a/1e6
this.a.d.sp(0,w)
return w},
$S:7}
C.e2K.prototype={
$2(d,e){var w=null,v=Math.min(e.b,e.d),u=this.b,t=B.c3(w,new B.p(w,w,w,w,w,new B.c_(A.Fb,1.2,A.x,w,0,u.d,w,w),A.n),A.bj),s=this.a,r=s.d,q=s.a.d?0.45:1
return B.jl(new B.an(A.a0,w,A.b2,A.t,B.a([t,new B.em(B.b4(w,w,w,new C.bgH(u.a,r,q,r),A.az),w),B.at(new B.k1(r,new C.e2J(s,v,this.c,u),w,w,x.cl),w,w,w)],x.p),w),A.t,w)},
$S:314}
C.e2J.prototype={
$3(d,e,f){var w,v,u,t,s=this,r=null,q=A.e7.aA(0,A.j.E(e/1.4,0,1)),p=A.j.E(e/0.9,0,1),o=A.j.E((e-0.8)/0.9,0,1),n=Math.sin(e*1.6),m=s.b,l=m*0.08,k=x.p,j=B.a([],k),i=s.c
if(i!=null){w=m*0.22
v=m*0.008
u=s.d.e
t=B.C(u,x.bz)
t.push(A.d.gH(u))
u=B.a([new B.ac(0,A.G,u[1].j(0.55),A.I,l)],x.V)
A.d.v(j,B.a([B.q(r,B.hS(B.fR(i,A.A,r,r,A.cj,A.c_,!0,r,!1,r,r),A.aq),A.f,r,r,new B.p(r,r,r,r,u,new B.fY(A.A,0,6.283185307179586,A.x,t,r,new B.mJ(e*0.8)),A.a7),r,w,r,r,new B.R(v,v,v,v),r,r,w),new B.a5(r,m*0.04,r,r)],k))}i=s.d.e
w=s.a
v=A.a.i(w.a.c.b)
u=v.length
if(u===0)v="NGMY"
u=u>12?0.1:0.17
t=m*0.05
j.push(new C.btz(i,e,B.d(v,r,r,r,r,r,r,B.l(r,r,A.c,r,r,r,r,r,r,r,r,m*u,r,r,A.u,r,1.05,!0,r,m*0.012,r,r,r,B.a([new B.cU(i[1].j(0.6),A.I,t)],x.r),r,r),A.K,r,r),r))
j.push(new B.a5(r,m*0.025,r,r))
u=Math.max(1.5,m*0.004)
j.push(B.da(B.dP(B.x(B.a([B.q(r,r,A.f,r,r,new B.p(r,r,r,r,r,new B.a9(A.a6,A.aa,A.x,B.a([A.L,i[1],A.L],x.O),r,r),A.n),r,u,r,r,r,r,r,m*0.22),new B.a5(r,m*0.022,r,r),B.d(w.a.c.gaNg(),r,r,r,r,r,r,B.l(r,r,A.c.j(0.92),r,r,r,r,r,r,r,r,t,r,r,A.a8,r,r,!0,r,m*0.003,r,r,r,r,r,r),A.K,r,r)],k),A.m,r,A.e,A.Q,0,A.p),new B.o(0,(1-o)*m*0.03)),o))
return B.da(B.ed(A.A,new B.D(new B.R(l,0,l,0),B.x(j,A.m,r,A.e,A.Q,0,A.p),r),(0.6+0.4*q)*(1+n*0.012),r,r),p)},
$S:102}
C.f7E.prototype={
$1(d){var w=this.b
return new B.a9(A.aA,A.aF,A.x,this.a.c,B.a([0,A.j.E(w-0.1,0,1),A.j.E(w,0,1),A.j.E(w+0.1,0,1),1],x.x),null).aK(0,d)},
$S:73}
C.ceQ.prototype={
$4$child$label$onTap$selected(d,e,f,g){var w,v=null,u=B.m(14),t=g?A.bN:A.bA
t=B.L(t,A.r,g?2.5:1)
w=g?B.a([new B.ac(0,A.G,A.i3.j(0.4),A.I,14)],x.V):v
w=B.cT(v,B.by(B.m(12),d,A.aq),v,v,A.b3,new B.p(v,v,t,u,w,v,A.n),A.eH,v,72,v,v,v,v,v,v)
return B.aA(v,new B.a5(112,v,B.x(B.a([w,A.fM,B.d(e,v,1,A.a2,v,v,v,B.l(v,v,g?A.bN:A.ab,v,v,v,v,v,v,v,v,11,v,v,A.V,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.i,0,A.p),v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,f,v,v,v,v,v,v,!1,A.a4)},
$S:1707}
C.ceR.prototype={
$0(){var w=this.a
return w.d.$1(w.c.Gc(""))},
$S:0}
C.ceS.prototype={
$1(d){var w=this.a,v=w.c,u=d.a
return this.b.$4$child$label$onTap$selected(new B.dx(!0,new C.Ok(v.Gc(u),!0,!1,null),null),d.b,new C.ceT(w,this.c,d),v.a===u)},
$S:z+54}
C.ceT.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(C.hEy(u.b,t.c.Gc(u.c.a)),$async$$0)
case 2:s=e
if(s!=null)t.d.$1(s)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.h_o.prototype={
$1(d){return new C.a_v(this.a,null)},
$S:z+55}
C.dhC.prototype={
$0(){var w=this.a
w.d=w.gwf().beU("data:"+this.b+";base64,"+A.cP.gcu().aN(this.c));++w.r},
$S:0}
C.dhH.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.dhI.prototype={
$0(){var w=this.a
return w.m(new C.dhG(w))},
$S:0}
C.dhG.prototype={
$0(){return this.a.r++},
$S:0}
C.dhJ.prototype={
$1(d){var w=this.a
return w.m(new C.dhF(w,d))},
$S:2}
C.dhF.prototype={
$0(){var w=this.a
return w.d=w.gwf().aFV(this.b)},
$S:0}
C.dhK.prototype={
$0(){var w=this.a
return w.m(new C.dhE(w))},
$S:0}
C.dhE.prototype={
$0(){var w=this.a
return w.d=w.gwf().beU("")},
$S:0}
C.dhL.prototype={
$1(d){var w=this.a
return w.m(new C.dhD(w,d))},
$S:2}
C.dhD.prototype={
$0(){var w=this.a
return w.d=w.gwf().bf_(this.b)},
$S:0}
C.dhM.prototype={
$0(){var w=this.a
w=w.gwf().bf_(w.gazt().a.a)
B.a6(this.b,!1).O(w)
return null},
$S:0}
C.h_n.prototype={
$1(d){var w={}
w.a=this.a
return new B.dY(new C.h_m(w),null)},
$S:20}
C.h_m.prototype={
$2(d,e){var w=null,v=this.a
return B.q(w,B.bm(!0,new B.cR(new B.aY(0,1/0,0,B.aH(d,A.c1,x.w).w.a.b*0.85),B.cg(B.x(B.a([B.at(B.q(w,w,A.f,w,w,new B.p(A.aT,w,w,B.m(9),w,w,A.n),w,4,w,w,w,w,w,40),w,w,w),A.aB,D.fVd,A.ax,D.fVt,A.aB,new C.b14(v.a,new C.h_l(v,e,d),!0,w)],x.p),A.E,w,A.e,A.Q,0,A.p),A.t,w,A.y,w,w,w,w,A.ah),w),!0,!1,A.ag,!0,!1),A.f,w,w,D.b7M,w,w,w,w,A.O4,w,w,w)},
$S:174}
C.h_l.prototype={
$1(d){this.b.$1(new C.h_k(this.a,d))
B.a6(this.c,!1).O(d)},
$S:z+56}
C.h_k.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.h1K.prototype={
$1(d){return D.htT},
$S:z+57}
C.doq.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.dor.prototype={
$0(){var w=this.a.c
w.toString
B.a6(w,!1).O(this.b)
return null},
$S:0}
C.dos.prototype={
$0(){var w=this.a,v=A.a.i(w.d.a.a)
if(v.length!==0){w=w.c
w.toString
B.a6(w,!1).O(v)}},
$S:0}
C.fQl.prototype={
$1(d){var w=this.b
return new B.a9(A.aA,A.aF,A.x,B.a([A.L,B.ar(this.a,A.c,0.75).j(0.9),A.L],x.O),B.a([A.j.E(w-0.12,0,1),A.j.E(w,0,1),A.j.E(w+0.12,0,1)],x.x),null).aK(0,d)},
$S:73}
C.dhj.prototype={
$3(d,e,f){var w,v=this,u=new B.aF($.Q().r,A.ai,null,null,B.a([],x.v)),t=d.a,s=v.b,r=e*s,q=d.b,p=f*s,o=q+p*0.12
u.D(new B.aZ(t+r*1.2,o))
u.D(new B.c5(t+r*0.25,o,t+r*0.18,q+p*0.5))
w=t+r*0.12
u.D(new B.c5(w,q+p,w,q+p*1.2))
u.D(new B.DO(B.bX(new B.o(t+r*0.42,q+p*0.42),s*0.14),0,5.026548245743669))
s=v.c
s.af(u,v.d)
s.af(u,v.e)
p=B.K()
p.r=B.ar(v.a.d,A.c,0.6).gp(0)
s.N(new B.o(w,o),2.2,p)},
$S:437}
C.fQp.prototype={
$2(d,e){return A.j.aS(d.c,e.c)},
$S:z+58}
C.fIK.prototype={
$1(d){return d.w==="marriage_agreement"},
$S:z+2}
C.fIL.prototype={
$1(d){var w=null,v=this.a
return B.bm(!0,new B.D(E.yM,B.x(B.a([B.at(B.q(w,w,A.f,w,w,new B.p(A.aT,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bz,D.fD6,A.U,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aR,B.dh(D.HX,B.d('Endelea na "'+A.d.gH(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fII(d),B.bp(A.c4,w,w,w,A.c,w,A.co,w,w,w,w,w)),A.X,B.es(A.oE,D.VS,new C.fIJ(d),B.di(w,w,w,w,w,w,w,w,w,A.ab,w,w,A.co,w,w,S.xJ,w,w,w,w))],x.p),A.al,w,A.e,A.Q,0,A.p),w),!0,!1,A.ag,!0,!0)},
$S:27}
C.fII.prototype={
$0(){B.a6(this.a,!1).O("continue")
return null},
$S:0}
C.fIJ.prototype={
$0(){B.a6(this.a,!1).O("new")
return null},
$S:0}
C.ckn.prototype={
$1(d){return d.hQ()},
$S:z+59}
C.cko.prototype={
$1(d){return d.aj()},
$S:z+60}
C.ckm.prototype={
$1(b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=null,b2=B.a3(b5,x.N,x.z),b3=B.aI(b2.h(0,"fontWeight")),b4=b3==null?b1:A.j.M(b3)
if(b4==null)b4=A.a8.gdR(0)
b3=B.aI(b2.h(0,"fontStyle"))
w=b3==null?b1:A.j.M(b3)
if(w==null)w=0
b3=B.aI(b2.h(0,"align"))
v=b3==null?b1:A.j.M(b3)
if(v==null)v=0
b3=b2.h(0,"id")
b3=J.k(b3==null?"":b3)
u=C.i6u(b2.h(0,"type"))
t=B.aI(b2.h(0,"x"))
if(t==null)t=b1
if(t==null)t=0.08
s=B.aI(b2.h(0,"y"))
if(s==null)s=b1
if(s==null)s=0.12
r=B.aI(b2.h(0,"w"))
if(r==null)r=b1
if(r==null)r=0.84
q=B.aI(b2.h(0,"h"))
if(q==null)q=b1
if(q==null)q=0.2
p=b2.h(0,"text")
p=J.k(p==null?"":p)
o=B.aI(b2.h(0,"fontSize"))
if(o==null)o=b1
if(o==null)o=24
n=A.aD8[A.o.E(b4,0,8)]
m=D.d3h[A.o.E(w,0,1)]
l=C.iak(b2.h(0,"decoration"))
k=B.aI(b2.h(0,"color"))
k=k==null?b1:A.j.M(k)
if(k==null)k=4279310375
j=A.azv[A.o.E(v,0,5)]
i=b2.h(0,"imageRef")
i=i==null?b1:J.k(i)
h=C.id9(b2.h(0,"shape"))
g=B.aI(b2.h(0,"fillColor"))
g=g==null?b1:A.j.M(g)
if(g==null)g=4280640491
f=B.aI(b2.h(0,"strokeColor"))
f=f==null?b1:A.j.M(f)
if(f==null)f=4280172719
e=B.aI(b2.h(0,"strokeWidth"))
if(e==null)e=b1
if(e==null)e=2
d=B.aI(b2.h(0,"rotation"))
if(d==null)d=b1
if(d==null)d=0
a0=J.z(b2.h(0,"bulletList"),!0)
a1=b2.h(0,"fileName")
a1=J.k(a1==null?"":a1)
a2=B.aI(b2.h(0,"pdfPage"))
a2=a2==null?b1:A.j.M(a2)
if(a2==null)a2=0
a3=C.hzq(b2.h(0,"textTransition"))
a4=B.aI(b2.h(0,"textAnimDelayMs"))
a4=a4==null?b1:A.j.M(a4)
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
b2=B.aI(b2.h(0,"textBg"))
b2=b2==null?b1:A.j.M(b2)
return C.er(j,a0,k,l,a1,g,o,m,n,a7,q,b3,i,a6,a5,a2,b0,a8,d,h,f,e,p,a4,b2==null?0:b2,a9,a3,u,r,t,s)},
$S:z+61}
C.ckc.prototype={
$1(d){return d.hQ()},
$S:z+62}
C.ckd.prototype={
$1(d){return d.aj()},
$S:z+63}
C.ck9.prototype={
$1(d){return B.w(d)},
$S:17}
C.cka.prototype={
$1(d){return B.w(d)},
$S:17}
C.ckb.prototype={
$1(d){return C.hpZ(B.a3(d,x.N,x.z))},
$S:z+64}
C.ckE.prototype={
$1(d){return d.a===this.a},
$S:z+65}
C.ckF.prototype={
$0(){return A.d.gH(D.a5g)},
$S:z+66}
C.ckz.prototype={
$1(d){var w,v,u=d.a
if(A.a.i(u).length===0)return
w=this.a
v=w.h(0,u)
if(v==null||!v.f.cf(d.f))w.n(0,u,d.hQ())},
$S:z+7}
C.cky.prototype={
$2(d,e){return e.f.aS(0,d.f)},
$S:z+21}
C.cku.prototype={
$1(d){return new B.N(d,new C.ckv(),B.U(d).k("N<1,V>")).f1(0,new C.ckw())},
$S:z+69}
C.ckv.prototype={
$1(d){return d.f},
$S:z+70}
C.ckw.prototype={
$2(d,e){return d.cf(e)?d:e},
$S:716}
C.ckx.prototype={
$1(d){if(d==null||A.a.i(d).length===0)return B.a([],x.D)
return C.hWG(d)},
$S:z+71}
C.ckA.prototype={
$1(d){return!this.a.q(0,d.a)},
$S:z+2}
C.ckB.prototype={
$2(d,e){return e.f.aS(0,d.f)},
$S:z+21}
C.ckC.prototype={
$1(d){return d.aj()},
$S:z+14}
C.fQY.prototype={
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
$S:z+73}
C.fQU.prototype={
$2(d,e){var w=d.fx
return w.length!==0&&w===e.fx},
$S:z+8}
C.fQV.prototype={
$2(d,e){var w=d.at
return(w==null?"":w).length!==0&&w==e.at},
$S:z+8}
C.fQW.prototype={
$2(d,e){var w
if(d.b===D.cW){w=A.a.i(d.r)
w=w.length!==0&&w===A.a.i(e.r)}else w=!1
return w},
$S:z+8}
C.fQX.prototype={
$2(d,e){return d.b===D.fi&&d.ax===e.ax&&d.fx.length===0&&e.fx.length===0},
$S:z+8}
C.cki.prototype={
$2(b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=null,a9=b7.b,b0=a9/960,b1=this.a,b2=b1.c,b3=b1.d,b4=C.im9(b2,b3),b5=B.a4(b4).k("b8<2>")
b5=B.cE(new B.b8(b4,b5),new C.ckh(),b5.k("M.E"),x.N)
w=B.d4(b5,B.a4(b5).k("M.E"))
b1=b1.e
v=A.qp.aA(0,A.j.E(b1,0,1))
u=new C.ckj()
b5=B.ar(u.$2(b2,!1),u.$2(b3,!1),v)
b5.toString
t=B.ar(u.$2(b2,!0),u.$2(b3,!0),v)
t.toString
s=new C.ckk(a9,b7.d)
r=new C.ckl(b0)
q=x.p
p=B.a([],q)
for(b2=b2.z,o=b2.length,n=b1/0.55,m=0;m<b2.length;b2.length===o||(0,B.J)(b2),++m){l=b2[m]
if(w.q(0,l.a))continue
k=A.jC.aA(0,A.j.E(n,0,1))
p.push(s.$5(l.c,l.d,l.e,l.f,new B.kG(A.j.E(1-k,0,1),B.dP(B.ed(A.A,r.$1(l),1-k*0.06,a8,a8),new B.o(-k*30*b0,0)),a8)))}for(b2=b3.z,b3=b2.length,o=1-v,j=0,m=0;m<b2.length;b2.length===b3||(0,B.J)(b2),++m){i=b2[m]
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
a5=r.$1(a4)}else a5=a2===D.lR&&l.at==i.at?r.$1(i):new B.an(A.a0,a8,A.b2,A.t,B.a([new B.kG(A.j.E(o,0,1),r.$1(l),a8),new B.kG(A.j.E(v,0,1),r.$1(i),a8)],q),a8)
a2=a3===0?a5:new B.iR(B.wN(a3),a8,A.A,!0,a8,a5,a8)
p.push(s.$5(n+(h-n)*v,g+(f-g)*v,e+(d-e)*v,a0+(a1-a0)*v,a2))}else{a6=A.j.E((b1-(0.35+j*0.07))/0.5,0,1);++j
a7=i.dy
if(a7===D.ct)a7=D.n9
p.push(s.$5(i.c,i.d,i.e,i.f,C.hBX(a7,a6,r.$1(i))))}}return B.c3(new B.an(A.a0,a8,A.ad,A.t,p,a8),new B.p(a8,a8,a8,a8,a8,new B.a9(A.a6,A.aa,A.x,B.a([b5,t],x.O),a8,a8),A.n),A.bj)},
$S:438}
C.ckh.prototype={
$1(d){return d.a},
$S:z+22}
C.ckj.prototype={
$2(d,e){var w
if(e){w=d.f
if(w==null)w=d.e}else w=d.e
return B.b0(w)},
$S:z+76}
C.ckk.prototype={
$5(d,e,f,g,h){var w=this.a,v=this.b
return B.ap(null,h,g*v,null,d*w,null,e*v,f*w)},
$S:1711}
C.ckl.prototype={
$1(d){var w=null,v=d.fy,u=A.a.gX(d.a)
return new C.a8L(v,C.b3c(!1,w,!1,d,w,!1,w,w,w,this.a,!1,!1),!0,u,w)},
$S:z+23}
C.dPU.prototype={
$2(d,e){var w=Date.now()/1000*2*3.141592653589793,v=Math.sin(w/18)
return B.ed(new B.d9(Math.sin(w/23)*0.6,Math.cos(w/29)*0.5),e,1.035+v*0.03,null,null)},
$S:46}
C.ckr.prototype={
$1(d){return d.a===this.a.a},
$S:z+11}
C.cks.prototype={
$1(d){return d.a===this.a.a},
$S:z+20}
C.fTP.prototype={
$1(d){var w,v=document.createElement("iframe")
v.src=this.a
w=v.style
w.border="none"
w=v.style
w.width="100%"
w=v.style
w.height="100%"
return v},
$S:327}
C.fSW.prototype={
$1(d){return new C.aes(this.a,this.b,null)},
$S:z+78}
C.eBC.prototype={
$0(){return this.a.QC(this.b,C.iq5(),"Tap Save to Files on the next screen.","Download did not start \u2014 try Share.")},
$S:0}
C.eBD.prototype={
$0(){var w=this.a,v=w.d?"Choose Print from the share menu for one full page.":"Pick Save to Files or send from the share menu."
return w.QC(this.b,C.iq7(),v,"Share unavailable \u2014 try Safari.")},
$S:0}
C.eBE.prototype={
$0(){var w=this.a,v=w.d?"PDF opened \u2014 tap Share \u2197 then Print.":"PDF opened \u2014 use Share \u2197 at the bottom of Safari."
return w.QC(this.b,C.iq6(),v,"Could not open Safari \u2014 try Share.")},
$S:0}
C.eBF.prototype={
$0(){A1.hBH()
B.a6(this.a,!1).O(null)},
$S:0}
C.ckg.prototype={
$1(d){var w=null,v=this.a
return v==null?d:B.l(w,w,w,w,w,w,w,w,w,w,w,d.r,d.x,w,d.w,v,d.as,!0,w,d.y,w,w,w,w,w,w)},
$S:1712}
C.ckf.prototype={
$2(d,e){var w,v=this,u=null,t=B.dN(d,A.o_),s=t==null?u:t.b,r=s==null?2:s,q=e.b,p=isFinite(q)?q:0,o=p<=0?u:A.j.V(A.j.E(p*Math.max(B.jh(r),5),96,1500))
t=v.b
w=v.c||v.d?A.c_:A.dB
return B.fR(t,A.A,o,new C.cke(),A.cj,w,!0,u,!1,new B.bM("img_"+v.a.c.a+"_"+t.length,x.W),u)},
$S:1713}
C.cke.prototype={
$3(d,e,f){return D.af2},
$S:236}
C.fQT.prototype={
$2(d,e){var w,v,u,t=null,s=B.m(6),r=this.a
if(r.f!=null){w=B.b0(r.e)
v=r.f
v.toString
v=new B.a9(A.aA,A.aF,A.x,B.a([w,B.b0(v)],x.O),t,t)
w=v}else w=t
v=r.f==null?B.b0(r.e):t
r=r.z
r=B.cW(r,0,B.dA(6,"count",x.S),B.U(r).c)
u=r.$ti.k("N<ak.E,cL>")
r=B.C(new B.N(r,new C.fQS(e.b,e.d),u),u.k("ak.E"))
return B.by(s,B.c3(new B.an(A.a0,t,A.ad,A.t,r,t),new B.p(v,t,t,t,t,w,A.n),A.bj),A.aq)},
$S:1714}
C.fQS.prototype={
$1(d){var w=null,v=d.c,u=this.a,t=d.d,s=this.b,r=d.e,q=d.f
return B.ap(w,C.b3c(!1,w,!1,d,w,!1,w,w,w,u/960,!1,!0),q*s,w,v*u,w,t*s,r*u)},
$S:z+24}
C.fzw.prototype={
$3(d,e,f){var w,v,u,t,s,r=this,q=null,p=r.a
p.a=B.cy(r.b,new C.fzu(d))
w=B.aH(d,A.c1,x.w).w
v=B.m(22)
u=B.L(A.bA,A.r,1)
t=B.a([new B.ac(0,A.G,A.w.j(0.45),A.h4,28)],x.V)
s=x.p
return new B.d0(e,!1,B.at(B.aJ(!1,A.a3,!0,q,B.q(q,B.x(B.a([B.A(B.a([B.E(B.x(B.a([B.d(r.c,q,q,q,q,q,q,A.jN,q,q,q),A.ax,B.d("Applied \u2014 tap Done or wait 1.5 seconds",q,q,q,q,q,q,B.l(q,q,A.c.j(0.45),q,q,q,q,q,q,q,q,11,q,q,A.a8,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),A.E,q,A.e,A.i,0,A.p),1),B.bN(!1,A.AR,q,q,!0,q,q,q,new C.fzv(p,d),q,B.fu(q,q,A.bl,q,q,q,q,q,q,q,q,A.c,q,q,q,q,q,A.Ce,q,new B.b9(B.m(12),A.a1),q,q,q,q,q,q))],s),A.m,q,A.e,A.i,0,q,q),A.aB,r.d],s),A.m,q,A.e,A.Q,0,A.p),A.f,q,new B.aY(0,w.a.a*0.94,0,1/0),new B.p(A.as,q,u,v,t,q,A.n),q,q,q,A.h3,A.GT,q,q,q),A.f,A.L,0,q,q,q,q,q,A.aj),q,q,q),q)},
$C:"$3",
$R:3,
$S:253}
C.fzu.prototype={
$0(){var w=this.a
if(w.e!=null&&B.a6(w,!0).pX())B.a6(w,!0).eO()},
$S:0}
C.fzv.prototype={
$0(){var w=this.a.a
if(w!=null)w.a1(0)
B.a6(this.b,!0).eO()},
$S:0}
C.fgd.prototype={
$2(d,e){var w,v,u=this,t=null,s=u.a,r=s.d
r===$&&B.c()
r=r.x
r===$&&B.c()
switch(s.a.c.a){case 0:return u.b
case 1:case 13:return new B.an(A.a0,t,A.b2,A.t,B.a([u.c,B.da(u.b,r)],x.p),t)
case 2:case 17:return new B.an(A.a0,t,A.b2,A.t,B.a([u.c,B.dP(u.b,new B.o((1-r)*220,0))],x.p),t)
case 3:return new B.an(A.a0,t,A.b2,A.t,B.a([u.c,B.dP(u.b,new B.o(-(1-r)*220,0))],x.p),t)
case 4:case 21:return new B.an(A.a0,t,A.b2,A.t,B.a([u.c,B.dP(u.b,new B.o(0,(1-r)*140))],x.p),t)
case 5:return new B.an(A.a0,t,A.b2,A.t,B.a([u.c,B.dP(u.b,new B.o(0,-(1-r)*140))],x.p),t)
case 6:return new B.an(A.a0,t,A.b2,A.t,B.a([u.c,B.ed(A.A,B.da(u.b,r),0.6+r*0.4,t,t)],x.p),t)
case 7:return new B.an(A.a0,t,A.b2,A.t,B.a([u.c,B.ed(A.A,B.da(u.b,r),1.3-r*0.3,t,t)],x.p),t)
case 8:s=B.dr()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.001
s.fL(r*3.14159)
return B.fx(A.A,r<0.5?u.c:u.b,t,s,!0)
case 9:s=B.dr()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.001
s.km(r*3.14159)
return B.fx(A.A,r<0.5?u.c:u.b,t,s,!0)
case 10:s=B.dr()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.002
s.fL(r*1.2)
s.km(r*0.5)
return B.fx(A.A,B.da(u.b,0.4+r*0.6),t,s,!0)
case 11:s=B.dr()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.002
s.fL(-r*1.4)
return B.fx(A.aa,B.da(u.b,r),t,s,!0)
case 12:return new B.an(A.a0,t,A.b2,A.t,B.a([u.c,B.da(B.ed(A.A,u.b,1.02-r*0.02,t,t),r)],x.p),t)
case 14:return new B.an(A.a0,t,A.b2,A.t,B.a([u.c,B.jl(u.b,A.t,new C.aLe(r,t))],x.p),t)
case 15:return new B.an(A.a0,t,A.b2,A.t,B.a([u.c,B.jl(u.b,A.t,new C.aLe(1-r,t))],x.p),t)
case 16:v=A0.XF.aA(0,r)
return new B.an(A.a0,t,A.b2,A.t,B.a([u.c,B.ed(A.A,B.da(u.b,r),0.5+v*0.5,t,t)],x.p),t)
case 18:s=r<0.15
if(s)r=1
return new B.an(A.a0,t,A.b2,A.t,B.a([u.c,B.da(B.e8(u.b,A.c.j(s?0.9:0),!0),r)],x.p),t)
case 19:s=B.dr()
s.n_(r*6.28)
s.k5(r,r,r,1)
return B.fx(A.A,u.b,t,s,!0)
case 20:return B.eM(A.A,(r-0.5)*0.35,new B.an(A.a0,t,A.b2,A.t,B.a([u.c,B.da(u.b,r)],x.p),t),t)}},
$S:65}
C.e0u.prototype={
$0(){var w=this.a
if(w.c!=null){w=w.d
w===$&&B.c()
w.cr(0)}},
$S:12}
C.e0t.prototype={
$0(){var w=this.a
if(w.c!=null){w=w.d
w===$&&B.c()
w.cr(0)}},
$S:12}
C.e0s.prototype={
$2(d,e){var w,v=this.a
e.toString
w=v.d
w===$&&B.c()
v=v.a.c.dy
w=w.x
w===$&&B.c()
return C.hBX(v,w,e)},
$S:65}
C.ck8.prototype={
$2(d,e){var w,v,u,t,s,r=null,q={}
q.a=0
w=this.a
v=w.c
if(v.f!=null){u=B.b0(v.e)
t=v.f
t.toString
t=new B.a9(A.a6,A.aa,A.x,B.a([u,B.b0(t)],x.O),r,r)
u=t}else u=r
t=v.f==null?B.b0(v.e):r
v=v.z
s=B.U(v).k("N<1,cL>")
q=B.C(new B.N(v,new C.ck7(q,w,e.b,e.d),s),s.k("ak.E"))
return B.c3(new B.an(A.a0,r,A.ad,A.f,q,r),new B.p(t,r,r,r,r,u,A.n),A.bj)},
$S:438}
C.ck7.prototype={
$1(d){var w,v=this,u=null,t=d.dy!==D.ct?v.a.a++:0,s=d.c,r=v.c,q=d.d,p=v.d,o=d.e,n=d.f,m=d.fy,l=v.b,k=l.d
l=k||l.e
w=A.a.gX(d.a)
return B.ap(u,new C.a8L(m,new C.Wc(d,C.b3c(!1,u,!1,d,u,!1,u,u,u,r/960,!1,!1),k,t,u),l,w,u),n*p,u,s*r,u,q*p,o*r)},
$S:z+24}
C.dew.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.dev(w))},
$S:12}
C.dev.prototype={
$0(){return this.a.d++},
$S:0}
C.eoZ.prototype={
$2(d,e){var w,v=null,u=A.o.aq(this.b.e.a,1000),t=A.o.F(Date.now(),u)/u*3.141592653589793*2+this.c,s=this.a
if(D.aSE.q(0,A.d.gH(s.a.c.split("@")))){s=s.a
w=s.c
s=s.f
e.toString
return C.ilT(w,t,s,e)}switch(s.a.c){case"float3d":s=B.dr()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.0016
w=Math.sin(t)
s.eh(0,w*7,0,1)
s.fL(Math.sin(t)*0.32)
s.km(Math.cos(t)*0.12)
w=1+Math.sin(t*2)*0.025
s.k5(w,w,w,1)
return B.fx(A.A,e,v,s,!0)
case"drift":s=Math.sin(t)
w=Math.cos(t*0.8)
return B.dP(B.ed(A.A,e,1+Math.sin(t*0.5)*0.05,v,v),new B.o(s*14,w*10))
default:s=Math.sin(t)
return B.da(B.ed(A.A,e,1+Math.sin(t)*0.04,v,v),0.82+s*0.18)}},
$S:65}
C.f58.prototype={
$1(d){var w
$.Q()
w=B.K()
w.b=A.a9
w.c=d
w.e=A.dP
return w},
$S:1715}
C.fOt.prototype={
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
if(q==="framed"||q==="gold")w.push(B.b4(r,r,r,new C.bts(u,t,r),A.az))
w.push(B.nU(s.d,A.aq,new C.bhd(u,t,r)))
if(!p)w.push(B.b4(r,r,r,new C.bsp(u,q,t,r),A.az))
return B.at(new B.a5(v.a,v.b,new B.an(A.a0,r,A.b2,A.t,w,r),r),r,r,r)},
$S:224}
C.fCD.prototype={
$1(d){var w=d.b[1]
return w==null?"":w},
$S:328}
C.eHQ.prototype={
$0(){var w=0,v=B.j(x.aP),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(U.Dy(t.a.a.c),$async$$0)
case 3:s=e
r=J.a7(s)
if(r.gau(s)){u=null
w=1
break}u=r.dP(s,new C.eHO(),new C.eHP(s))
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1716}
C.eHO.prototype={
$1(d){return d.at==="published"&&d.Q.length!==0},
$S:202}
C.eHP.prototype={
$0(){return J.fs(this.a)},
$S:1718}
C.eEd.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.eEe.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.eEf.prototype={
$0(){var w=this.a
w.d=this.b
w.x=!1},
$S:0}
C.eFO.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eFC.prototype={
$1(d){return d.w!=="hati_kiapo_uongozi"},
$S:z+2}
C.eFD.prototype={
$1(d){return d.hQ()},
$S:z+81}
C.eDB.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.eGW.prototype={
$0(){this.a.uc()},
$S:0}
C.eHM.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.e=u
w.f=A.o.E(v.b,0,u.r.length-1)
w.r=v.c
w.oD()
w.KJ()},
$S:0}
C.eFM.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.e=u
w.f=A.o.E(v.b,0,u.r.length-1)
w.r=v.c
w.oD()
w.KJ()},
$S:0}
C.eHz.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+2}
C.eHA.prototype={
$1(d){return d.b===D.cW},
$S:z+4}
C.eHB.prototype={
$1(d){return d.a},
$S:z+22}
C.eHC.prototype={
$0(){var w=this.a.r
return new B.au(new B.ba(w,A.b6,A.aQ),$.aw())},
$S:269}
C.eHD.prototype={
$0(){return B.k8(!0,null,!0,!0,null,null,!1)},
$S:718}
C.eD_.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+2}
C.eHN.prototype={
$0(){},
$S:0}
C.eEV.prototype={
$0(){var w=this.a
w.e=this.b.hQ()
w.f=0
w.r=null
w.db=!1
A.d.a8(w.ax)
A.d.a8(w.ay)
w.ya()
w.KJ()},
$S:0}
C.eCY.prototype={
$0(){var w=this.a
w.e=null
w.db=!1
w.w=w.r=null
w.ya()},
$S:0}
C.eCZ.prototype={
$0(){var w=this.a
w.w=w.r=w.e=null
w.ya()},
$S:0}
C.eFh.prototype={
$1(d){return d.a===this.a.a.a},
$S:z+2}
C.eFi.prototype={
$0(){var w=this.a
w.e=this.b
w.f=0
w.r=null
w.db=!this.c
A.d.a8(w.ax)
A.d.a8(w.ay)
w.ya()
w.KJ()
w.z="Home"},
$S:0}
C.eFj.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eEU.prototype={
$1(d){var w=null
return B.eg(B.a([B.bN(!1,A.VR,w,w,!0,w,w,w,new C.eET(d),w,w)],x.p),w,w,w,D.fX5,w,w,w,w,D.fDz,w)},
$S:18}
C.eET.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.eER.prototype={
$1(d){var w=null
return B.eg(B.a([B.bN(!1,A.VR,w,w,!0,w,w,w,new C.eEQ(d),w,w)],x.p),w,w,w,D.fHJ,w,w,w,w,D.fFp,w)},
$S:18}
C.eEQ.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.eES.prototype={
$0(){},
$S:0}
C.eE9.prototype={
$1(d){return this.a.b30(C.bEE(d))},
$S:z+7}
C.eEa.prototype={
$1(d){return this.a.ago(C.bEE(d))},
$S:z+7}
C.eF0.prototype={
$1(d){var w=null,v=x.p,u=B.a([B.at(B.q(w,w,A.f,w,w,new B.p(A.aT,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bz,D.fX9,A.ax,B.d("Chagua aina ya hati",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.bz,new C.Qx(A.wz,D.aAS,"HATI YA KUHOWA","Hati ya mahari",new C.eEW(d),w),A.X,new C.Qx(A.hx,D.dgP,"HATI YA KUHOWESHA","Hati ya kupokea",new C.eEX(d),w),A.X,new C.Qx(A.hJ,D.d1h,"HATI YA NDOA","Makubaliano \xb7 pete \xb7 picha za wanandoa",new C.eEY(d),w),A.X,new C.Qx(A.id,D.d_k,"MALIPO YA AWAMU YA MAHARI","Makubaliano ya mahari iliyosalia",new C.eEZ(d),w)],v)
if(this.a.gacD())A.d.v(u,B.a([A.X,new C.Qx(A.jq,D.cLc,"HATI YA KIAPO CHA UONGOZI","Kiapo cha Rais \xb7 Civic Registry",new C.eF_(d),w)],v))
return B.bm(!0,B.cg(B.x(u,A.al,w,A.e,A.Q,0,A.p),A.t,w,A.y,w,E.yM,w,w,A.ah),!0,!1,A.ag,!0,!0)},
$S:27}
C.eEW.prototype={
$0(){B.a6(this.a,!1).O("hati_kuhowa")
return null},
$S:0}
C.eEX.prototype={
$0(){B.a6(this.a,!1).O("hati_kuhoweya")
return null},
$S:0}
C.eEY.prototype={
$0(){B.a6(this.a,!1).O("marriage_agreement")
return null},
$S:0}
C.eEZ.prototype={
$0(){B.a6(this.a,!1).O("hati_malipo_awamu")
return null},
$S:0}
C.eF_.prototype={
$0(){B.a6(this.a,!1).O("hati_kiapo_uongozi")
return null},
$S:0}
C.eF1.prototype={
$0(){var w=this.a
w.e=this.b.hQ()
w.f=0
w.r=null
w.db=!0
A.d.a8(w.ax)
A.d.a8(w.ay)
w.ya()},
$S:0}
C.eD1.prototype={
$1(d){return d.z.length===0},
$S:z+6}
C.eD2.prototype={
$0(){var w,v,u=this,t=u.c,s=u.d,r=t.r,q=s.r
if(u.b){A.d.a8(r)
A.d.v(r,q)
w=A.a.i(t.b).toLowerCase()
if(w.length===0||A.a.a0(w,"untitled"))t.b=s.b
r=u.a
r.f=0}else{v=u.a
A.d.nu(r,v.f+1,q);++v.f
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
C.eFc.prototype={
$1(d){return d.b===D.lR},
$S:z+4}
C.eFd.prototype={
$1(d){var w={},v=this.b
w.a=A.d.gH(v).go
w.b=A.d.gH(v).id
return new B.dY(new C.eFa(w,this.a,v),null)},
$S:20}
C.eFa.prototype={
$2(a2,a3){var w,v,u,t,s,r,q=null,p=this.a,o=this.b,n=this.c,m=new C.eFb(p,o,a3,n),l=B.S(a2).ax.a===A.J,k=l?A.c:A.S,j=l?A.aS:A.am,i=l?A.bp:A.bO,h=l?A.S:A.c,g=B.m(28),f=B.L(l?A.bA:A.aO,A.r,1),e=x.p,d=B.A(B.a([B.E(B.x(B.a([B.d("Logo and pictures",q,q,q,q,q,q,B.l(q,q,k,q,q,q,q,q,q,q,q,20,q,q,A.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),A.bH,B.d("Tap a shape or a ring to change it.",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,12.5,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],e),A.E,q,A.e,A.i,0,A.p),1),B.aG(q,q,q,q,B.X(A.cz,j,q,q,q,q),q,q,q,new C.eF6(a2),q,q,q,q,q,q)],e),A.m,q,A.e,A.i,0,q,q),a0=B.d("SHAPE",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q),a1=B.a([],e)
for(w=0;w<7;++w){v={}
u=D.Dj[w]
v.a=null
t=v.a=u.a
a1.push(new C.bjN(t,u.b,p.a===t,i,k,new C.eF7(v,m),q))}a1=B.bU(A.bG,a1,A.bs,q,10,10)
v=B.d("RING",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q)
u=B.a([],e)
for(w=0;w<11;++w){s={}
r=D.Dc[w]
s.a=null
t=s.a=r.a
u.push(new C.bjM(t,r.b,p.b===t,k,j,new C.eF8(s,m),q))}return B.bm(!0,B.q(q,B.cg(B.x(B.a([d,A.aR,a0,A.X,a1,A.bz,v,A.X,B.bU(A.bG,u,A.bs,q,12,12),A.bz,new B.a5(1/0,48,B.es(D.c2z,D.fZA,new C.eF9(o,n),B.di(q,q,q,q,q,q,q,q,q,A.aE,q,q,q,q,new B.b9(B.m(16),A.a1),D.b5h,q,q,q,q)),q)],e),A.E,q,A.e,A.Q,0,A.p),A.t,q,A.y,q,q,q,q,A.ah),A.f,q,q,new B.p(h,q,f,g,q,q,A.n),q,q,q,A.us,D.bDU,q,q,q),!0,!1,A.ag,!0,!0)},
$S:87}
C.eFb.prototype={
$2$f$r(d,e){var w=this
w.c.$1(new C.eF4(w.a,d,e))
w.b.da(new C.eF5(w.d,d,e))},
$0(){return this.$2$f$r(null,null)},
$1$r(d){return this.$2$f$r(null,d)},
$1$f(d){return this.$2$f$r(d,null)},
$S:1721}
C.eF4.prototype={
$0(){var w=this,v=w.b
if(v!=null)w.a.a=v
v=w.c
if(v!=null)w.a.b=v},
$S:0}
C.eF5.prototype={
$0(){var w,v,u,t,s,r,q,p
for(w=this.a,v=w.length,u=this.c,t=u!=null,s=this.b,r=s!=null,q=0;q<v;++q){p=w[q]
if(r)p.go=s
if(t)p.id=u}},
$S:0}
C.eF6.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.eF7.prototype={
$0(){return this.b.$1$f(this.a.a)},
$S:0}
C.eF8.prototype={
$0(){return this.b.$1$r(this.a.a)},
$S:0}
C.eF9.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A7.Ht(78,1920),$async$$0)
case 3:s=e
if(s==null){w=1
break}t.a.da(new C.eF3(t.b,s))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eF3.prototype={
$0(){var w,v,u,t
for(w=this.a,v=w.length,u=this.b,t=0;t<v;++t)w[t].at=u},
$S:0}
C.eFf.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+6}
C.eFg.prototype={
$0(){var w,v,u,t=this,s=t.a
if(s.a<0)s.a=t.c.r.length
w=t.c
v=w.r
A.d.bt(v,new C.eFe(t.d))
u=A.o.E(s.a,0,v.length)
s.a=u
s=t.e
A.d.nu(v,u,s.r)
w.CW=s.CW
w.cx=s.cx
w.cy=s.cy
w.ay=s.ay
s=t.b
s.f=A.o.E(s.f,0,v.length-1)
s.r=null
s.ya()},
$S:0}
C.eFe.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+6}
C.eFx.prototype={
$1(d){return d.b===D.cW},
$S:z+4}
C.eFy.prototype={
$1(d){return d.w},
$S:z+82}
C.eFz.prototype={
$2(d,e){return d>e?d:e},
$S:79}
C.eFA.prototype={
$1(d){var w=this,v=null,u=B.S(d).ax.a===A.J,t=u?A.c:A.S,s=u?A.aS:A.am,r=u?A.bp:A.aP,q=u?A.S:A.c,p=B.m(28),o=B.L(u?A.bA:A.aO,A.r,1),n=B.aH(d,A.c1,x.w).w,m=w.a,l=x.p,k=w.b
return B.bm(!0,B.q(v,B.x(B.a([B.A(B.a([B.q(v,D.bX4,A.f,v,v,D.b6E,v,38,v,v,v,v,v,38),A.bd,B.E(B.x(B.a([B.d("Edit this slide",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,19,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.d("Slide "+(m.f+1)+" \xb7 changes save as you type",v,v,v,v,v,v,B.l(v,v,s,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],l),A.E,v,A.e,A.i,0,A.p),1),B.aG(v,v,v,v,B.X(A.cz,s,v,v,v,v),v,v,v,new C.eFu(d),v,v,v,v,v,v)],l),A.m,v,A.e,A.i,0,v,v),A.aB,new B.dp(1,A.cr,B.hN(v,new C.eFv(m,k,w.c,s,w.d,t,r),k.length,A.fz,v,A.ah,new C.eFw(),!0),v)],l),A.E,v,A.e,A.Q,0,A.p),A.f,v,new B.aY(0,1/0,0,n.a.b*0.8),new B.p(q,v,o,p,v,v,A.n),v,v,v,A.us,A.a0l,v,v,v),!0,!1,A.ag,!0,!0)},
$S:27}
C.eFu.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.eFw.prototype={
$2(d,e){return A.af},
$S:36}
C.eFv.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=null,p=r.b[e],o=p.w===r.c,n=o?"TITLE":"TEXT "+(e+1)
n=B.d(n,q,q,q,q,q,q,B.l(q,q,o?A.aE:r.d,q,q,q,q,q,q,q,q,10.5,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q)
w=r.e
v=w.h(0,p.a)
u=o?1:2
t=o?A.H:A.cC
t=B.l(q,q,r.f,q,q,q,q,q,q,q,q,15,q,q,t,q,q,!0,q,q,q,q,q,q,q,q)
s=r.a
w=B.aG(q,q,q,q,D.c_m,q,q,q,new C.eFs(s,w,p),q,q,q,q,"Add an icon",q)
return B.x(B.a([new B.D(D.bG9,n,q),B.aM(q,A.Z,!1,q,!0,A.t,q,B.aO(),v,q,q,q,q,q,2,B.bt(q,new B.b6(4,B.m(16),A.a1),q,A.eY,q,q,q,q,!0,q,q,q,q,q,q,r.r,!0,q,q,q,q,new B.b6(4,B.m(16),D.b4X),q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,!0,!0,!1,q,q,q,q,q,q,q,q,w,q,q,q,q,q),A.y,!0,q,!0,q,!1,q,A.ak,q,q,q,q,q,q,q,q,q,q,u,q,!1,"\u2022",q,new C.eFt(s,p),q,q,q,!1,q,q,!1,q,!0,q,A.ac,q,q,q,q,q,q,q,q,q,q,q,t,!0,A.a5,q,A.ao,q,q,q,q)],x.p),A.E,q,A.e,A.i,0,A.p)},
$S:719}
C.eFs.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=t.a
k=l.c
k.toString
w=3
return B.b(C.ish(k),$async$$0)
case 3:s=e
if(s==null||l.c==null){w=1
break}k=t.c.a
r=t.b.h(0,k)
q=r.a
p=q.b
o=p.geC()?p.a:q.a.length
n=p.geC()?p.b:q.a.length
m=A.a.oa(q.a,o,n,s)
r.bP(0,new B.ba(m,B.hg(A.bB,o+s.length),A.aQ))
l.akr(k,m)
l.pJ()
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eFt.prototype={
$1(d){var w=this.a
w.akr(this.b.a,d)
w.pJ()},
$S:2}
C.eFB.prototype={
$0(){},
$S:0}
C.eF2.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.db=u.length===0?null:u
w.dx=v.b
w.dy=v.c
v=v.d
w.fr=v.length===0?null:v},
$S:0}
C.eDi.prototype={
$0(){},
$S:0}
C.eDj.prototype={
$0(){var w=this.c.CW
if(w==null)w=""
C.hDg(this.b,w,!0)
w=this.a
w.r=null
w.ya()},
$S:0}
C.eDk.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+6}
C.eDl.prototype={
$0(){var w,v,u,t=this,s=t.a
if(s.a<0)s.a=t.c.r.length
w=t.c
v=w.r
A.d.bt(v,new C.eDh(t.d))
u=A.o.E(s.a,0,v.length)
s.a=u
s=t.e
A.d.nu(v,u,s.r)
w.CW=s.CW
w.cx=s.cx
s=t.b
s.f=A.o.E(s.f,0,v.length-1)
s.r=null
s.ya()},
$S:0}
C.eDh.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+6}
C.eFH.prototype={
$1(d){return B.pe(new C.eFG(this.a,d),!1,0.82,0.95,0.45,!1,null)},
$S:134}
C.eFG.prototype={
$2(d,e){var w=null,v=x.p
return B.x(B.a([new B.D(E.amq,B.x(B.a([D.fUA,A.an,B.d("Top 4 templates are free \xb7 lock icon means Slides Pro",w,w,w,w,w,w,B.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],v),A.E,w,A.e,A.i,0,A.p),w),B.E(B.im(!0,w,e,A.y,D.ffl,new C.eFF(this.a,this.b),20,A.uv,w,A.ah,!1),1)],v),A.al,w,A.e,A.i,0,A.p)},
$S:441}
C.eFF.prototype={
$2(d,e){var w=null,v=D.Io[e],u=C.hWB(v),t=B.m(16),s=B.m(16),r=B.a([v.e,v.f],x.O),q=v.d,p=B.L(q.j(0.45),A.r,1),o=q.j(0.2),n=B.m(8),m=x.p
n=B.a([B.q(w,B.d(v.c,w,w,w,w,w,w,B.l(w,w,q,w,w,w,w,w,w,w,w,9,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.f,w,w,new B.p(o,w,w,n,w,w,A.n),w,w,w,w,A.fV,w,w,w)],m)
if(u)A.d.v(n,B.a([A.bm,B.q(w,D.f8l,A.f,w,w,new B.p(A.dJ.j(0.85),w,w,B.m(8),w,w,A.n),w,w,w,w,A.n_,w,w,w)],m))
return B.aJ(!1,A.a3,!0,w,B.aP(!1,t,!0,B.q(w,B.x(B.a([B.A(n,A.m,w,A.e,A.i,0,w,w),A.b5,B.d(v.b,w,w,w,w,w,w,B.l(w,w,v.r,w,w,w,w,w,w,w,w,14,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.d("5 slides",w,w,w,w,w,w,B.l(w,w,v.w.j(0.8),w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],m),A.E,w,A.e,A.i,0,A.p),A.f,w,w,new B.p(w,w,p,s,w,new B.a9(A.a6,A.aa,A.x,r,w,w),A.n),w,w,w,w,A.bh,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eFE(this.a,u,this.b,v),w,w,w,w,w,w,w),A.f,A.L,0,w,w,w,w,w,A.aj)},
$S:80}
C.eFE.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=t.b?3:4
break
case 3:s=t.c
r=t.a.a
w=5
return B.b(C.ckq(s,r.c,r.d),$async$$0)
case 5:if(!e||s.e==null){w=1
break}case 4:s=t.c
if(s.e!=null)B.a6(s,!1).O(t.d.a)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eFI.prototype={
$0(){var w=this.a
w.e=this.b.hQ()
w.f=0
w.r=null
w.db=!0
A.d.a8(w.ax)
A.d.a8(w.ay)
w.ya()},
$S:0}
C.eBX.prototype={
$0(){var w,v=this.a,u=v.gqT(),t=C.rW(4294967295,null,0,0,null,C.cD(),D.n8,"","","",D.dm),s=this.b
C.ckD(t,s,u)
w=v.gdB()
if(w!=null&&s!==D.DW){t.e=w.e
t.f=w.f}A.d.c4(v.e.r,v.f+1,t);++v.f
v.r=null},
$S:0}
C.eDg.prototype={
$0(){var w,v,u,t,s,r,q=this.b.aj()
q.n(0,"id",C.cD())
w=x.c.a(q.h(0,"elements"))
if(w!=null)for(v=J.aU(w),u=x.f;v.C();){t=v.gR(v)
if(u.b(t)){s=Date.now()
r=$.jc
$.jc=r+1
J.aK(t,"id",""+1000*s+"_"+r)}}v=this.a
A.d.c4(v.e.r,v.f+1,C.hpZ(q));++v.f},
$S:0}
C.eDe.prototype={
$0(){var w=this.a
A.d.cB(w.e.r,w.f)
w.f=A.o.E(w.f,0,w.e.r.length-1)
w.r=null},
$S:0}
C.eFQ.prototype={
$0(){var w,v=this.a,u=this.b,t=A.d.cB(v.e.r,u),s=this.c
A.d.c4(v.e.r,s,t)
w=v.f
if(w===u)v.f=s
else if(u<w&&s>=w)v.f=w-1
else if(u>w&&s<=w)v.f=w+1},
$S:0}
C.eDa.prototype={
$0(){var w,v=this.a,u=this.b
A.d.bt(v.d,new C.eD9(u))
w=v.e
w=w==null?null:w.a
if(w===u.a){v.e=null
v.db=!1}},
$S:0}
C.eD9.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eFP.prototype={
$0(){var w,v=this.b,u=A.a.i(this.c)
v.b=u.length===0?"Untitled Presentation":u
v.f=new B.V(Date.now(),0,!1)
u=this.a.e
w=u==null?null:u.a
if(w===v.a)u.b=v.b},
$S:0}
C.eD0.prototype={
$0(){var w=this.a.r
return new B.au(new B.ba(w,A.b6,A.aQ),$.aw())},
$S:269}
C.eDC.prototype={
$0(){return B.k8(!0,null,!0,!0,null,null,!1)},
$S:718}
C.eHx.prototype={
$0(){var w=this.a
w.w=w.r=this.b
w.y=!1},
$S:0}
C.eHy.prototype={
$1(d){var w,v,u=this.a
if(u.c==null||u.w!==this.b)return
w=this.c
u.avo(w).fW()
v=u.Xv(w)
v.stV(B.hg(A.bB,v.a.a.length))},
$S:7}
C.eGX.prototype={
$0(){var w,v,u,t=this
if(t.b)t.a.w=null
w=t.a
v=w.r=t.c
if(v!=null){w.as=!0
u=w.Yv(v)
if(u!=null&&u.b===D.cW)w.Xv(u).sb1(0,u.r)}else w.w=null},
$S:0}
C.eBY.prototype={
$0(){var w=C.cD(),v=this.a,u=C.er(A.bn,!1,v.gqT().e.l(),A.aG,"",4280640491,24,A.bt,A.a8,"",0.22,w,null,"","",0,!1,"",0,D.bk,4280172719,2,"Tap to edit text",0,0,"",D.ct,D.cW,0.7,0.15,0.2)
A.d.J(v.gdB().z,u)
v.r=u.a},
$S:0}
C.eBV.prototype={
$0(){var w=C.cD(),v=this.a,u=C.er(A.bn,!1,4279310375,A.aG,"",v.gqT().c.j(0.25).l(),24,A.bt,A.a8,"",0.25,w,null,"","",0,!1,"",0,this.b,v.gqT().c.l(),2,"",0,0,"",D.ct,D.fi,0.25,0.3,0.3)
A.d.J(v.gdB().z,u)
v.r=u.a},
$S:0}
C.eBL.prototype={
$0(){var w=C.er(A.bn,!1,4279310375,A.aG,"",4280640491,24,A.bt,A.a8,"",0.55,C.cD(),this.b,"","",0,!1,"",0,D.bk,4280172719,2,"",0,0,"",D.ct,D.lR,0.6,0.2,0.18),v=this.a
A.d.J(v.gdB().z,w)
v.r=w.a},
$S:0}
C.eBI.prototype={
$1(d){var w,v,u,t,s,r=null,q=B.a([D.c9v],x.p)
for(w=J.aU(this.a);w.C();){v=w.gR(w)
u=A.a.i(v.b)
u=B.d(u.length===0?"My Bio":u,r,r,r,r,r,r,r,r,r,r)
t=v.gal4().length
s=v.at==="published"&&v.Q.length!==0?" \xb7 "+v.as:""
q.push(B.dG(!1,r,r,r,!0,r,r,r,!0,r,r,D.bUK,r,r,r,r,new C.eBH(d,v),!1,r,r,r,r,r,B.d(""+t+" links"+s,r,1,A.a2,r,r,r,r,r,r,r),r,u,r,r,r))}return B.bm(!0,B.cl(q,r,r,r,r,r,A.ah,!0),!0,!1,A.ag,!0,!0)},
$S:27}
C.eBH.prototype={
$0(){B.a6(this.a,!1).O(this.b)
return null},
$S:0}
C.eBJ.prototype={
$0(){var w=A.j.E(0.23131034482758622,0.12,0.5),v=C.cD(),u=this.b,t=A.Y.az(u.aj(),null),s=C.er(A.bn,!1,4279310375,A.aG,u.b,4280640491,24,A.bt,A.a8,"",0.86,v,null,"","",0,!1,"",0,D.bk,4280172719,2,t,0,0,"",D.ct,D.a7X,w,0.5-w/2,0.07)
t=this.a
A.d.J(t.gdB().z,s)
t.r=s.a},
$S:0}
C.eDc.prototype={
$1(d){return d.a===this.a&&d.db==="ngmy_quote_logo"},
$S:z+4}
C.eDd.prototype={
$0(){var w,v=this.a,u=this.b
A.d.bt(v.gdB().z,new C.eDb(u))
v.w=v.r=null
w=v.ch.W(0,u)
if(w!=null){w.T$=$.aw()
w.P$=0}v=v.CW.W(0,u)
if(v!=null)v.t()},
$S:0}
C.eDb.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.eCp.prototype={
$0(){var w,v,u,t=this,s=t.b
if(s!=null){w=s.b
if(w===D.cW)s.Q=t.c.l()
else if(w===D.fi){s.ay=t.c.l()
w=t.d
if(w!=null)s.ch=w.l()}return}v=new C.eCq(t.c,t.d)
if(t.a.Q)for(s=t.e.r,w=s.length,u=0;u<s.length;s.length===w||(0,B.J)(s),++u)v.$1(s[u])
else{s=t.f
if(s!=null)v.$1(s)}},
$S:0}
C.eCq.prototype={
$1(d){var w
d.e=this.a.l()
w=this.b
d.f=w==null?null:w.l()},
$S:z+1}
C.eCu.prototype={
$0(){var w,v,u,t,s=this.a,r=s.e
r.toString
w=this.b
v=new C.eCv(w)
if(s.Q){r.c=w.a
for(s=r.r,r=s.length,u=0;u<s.length;s.length===r||(0,B.J)(s),++u)v.$1(s[u])}else{t=s.gdB()
if(t!=null)v.$1(t)}},
$S:0}
C.eCv.prototype={
$1(d){var w=this.a
d.e=w.f.l()
w=w.r
d.f=w==null?null:w.l()},
$S:z+1}
C.eCs.prototype={
$0(){var w,v,u,t=this,s=t.b
if(s!=null&&s.b===D.cW){s.Q=t.c
return}w=new C.eCt(t.c)
if(t.a.Q)for(s=t.d.r,v=s.length,u=0;u<s.length;s.length===v||(0,B.J)(s),++u)w.$1(s[u])
else{s=t.e
if(s!=null)w.$1(s)}},
$S:0}
C.eCt.prototype={
$1(d){var w,v,u
for(w=A.d.gae(d.z),v=new B.eF(w,new C.eCr()),u=this.a;v.C();)w.gR(0).Q=u},
$S:z+1}
C.eCr.prototype={
$1(d){return d.b===D.cW},
$S:z+4}
C.eCo.prototype={
$0(){return C.ckD(this.b,this.c,this.a.gqT())},
$S:0}
C.eFr.prototype={
$0(){return A.d.c4(this.a.d,0,this.b)},
$S:0}
C.eHG.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eHH.prototype={
$1(d){return d.w===this.b&&d.a!==this.a.a.a},
$S:z+2}
C.eHI.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eHJ.prototype={
$0(){var w,v=this.a,u=v.c,t=this.b,s=t.d
if(u)A.d.c4(s,0,v.b)
else{w=A.d.bj(s,new C.eHF(v))
if(w>=0)t.d[w]=v.b}if(v.a.gT7()){u=v.b
u.Q=v.a.Q
u.z=!0}if(this.c===!0){t.e=v.b.hQ()
t.f=0
t.r=null
t.db=!1
A.d.a8(t.ax)
A.d.a8(t.ay)
t.ya()
t.KJ()}},
$S:0}
C.eHF.prototype={
$1(d){return d.a===this.a.b.a},
$S:z+2}
C.eHc.prototype={
$1(d){var w=this,v=null,u=w.a,t=u.acH(),s=w.b,r=u.acI(A.fo,A.jJ,"Copy filled names, date, mahari, witnesses, and signatures into "+s+".","Transfer details"),q=B.m(18),p=B.a([A.c.j(0.07),A.c.j(0.03)],x.O),o=B.L(A.c.j(0.08),A.r,1),n=x.p
p=B.a([t,A.U,r,A.bz,B.q(v,B.A(B.a([B.E(u.aXD(w.c,A.am),1),new B.D(A.fH,B.q(v,D.bUQ,A.f,v,v,new B.p(A.fo.j(0.18),v,v,v,v,v,A.a7),v,34,v,v,v,v,v,34),v),B.E(u.aXD(s,A.fo),1)],n),A.m,v,A.e,A.i,0,v,v),A.f,v,v,new B.p(v,v,o,q,v,new B.a9(A.aA,A.aF,A.x,p,v,v),A.n),v,v,v,v,A.bF,v,v,v),A.bz,u.aXG(A.fo,d,D.bQX,!0,"Make a fresh "+s+" and fill it automatically","Create new & transfer","new")],n)
t=w.d
if(t>0)A.d.v(p,B.a([A.X,u.c19(A.aH,d,A.uK,t===1?"Update your saved "+s:"Choose among "+t+" saved documents","Use existing","existing")],n))
p.push(A.aB)
p.push(u.aXE(d,"Not now"))
return new C.KL(B.x(p,A.al,v,A.e,A.Q,0,A.p),v)},
$S:z+9}
C.eHb.prototype={
$1(d){var w=null,v=this.a,u=this.c
return new C.KL(B.x(B.a([v.acH(),A.U,v.acI(A.aH,D.bQC,"Pick which saved document should receive the details.","Choose "+this.b),A.aR,new B.cR(new B.aY(0,1/0,0,B.aH(d,A.c1,x.w).w.a.b*0.42),B.hN(w,new C.eH9(v,u,d),u.length,w,w,A.ah,new C.eHa(),!0),w),A.aB,v.aXE(d,"Cancel")],x.p),A.al,w,A.e,A.Q,0,A.p),w)},
$S:z+9}
C.eHa.prototype={
$2(d,e){return A.X},
$S:36}
C.eH9.prototype={
$2(d,e){var w=null,v=this.b[e],u=B.m(16),t=A.c.j(0.05),s=B.m(16),r=B.L(A.c.j(0.08),A.r,1),q=x.p
return B.aJ(!1,A.a3,!0,w,B.aP(!1,u,!0,B.q(w,B.A(B.a([B.q(w,D.aru,A.f,w,w,new B.p(w,w,w,B.m(12),w,D.c6t,A.n),w,42,w,w,w,w,w,42),A.bd,B.E(B.x(B.a([B.d(v.b,w,1,A.a2,w,w,w,A.ng,w,w,w),A.cU,B.d("Updated "+this.a.QD(v.f),w,w,w,w,w,w,B.l(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,12,w,w,A.a8,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],q),A.E,w,A.e,A.i,0,A.p),1),B.X(A.eJ,A.c.j(0.35),w,w,w,w)],q),A.m,w,A.e,A.i,0,w,w),A.f,w,w,new B.p(t,w,r,s,w,w,A.n),w,w,w,w,A.bF,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eH8(this.c,v),w,w,w,w,w,w,w),A.f,A.L,0,w,w,w,w,w,A.aj)},
$S:80}
C.eH8.prototype={
$0(){B.a6(this.a,!1).O(this.b.a)
return null},
$S:0}
C.eH5.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.acH()
t=t.acI(A.av,A.uU,"Names and shared details from \u201c"+this.b+"\u201d will fill matching spots on \u201c"+this.c+"\u201d.","Replace matching fields?")
w=A.c.j(0.14)
v=x.p
return new C.KL(B.x(B.a([s,A.U,t,A.bz,B.A(B.a([B.E(B.dU(A.abv,new C.eH3(d),B.di(u,u,u,u,u,u,u,u,u,A.c,u,u,A.co,u,new B.b9(B.m(14),A.a1),new B.ay(w,1,A.r,-1),u,u,u,u)),1),A.au,B.E(B.bI(D.fG_,u,new C.eH4(d),B.bp(A.fo,u,u,u,A.c,u,A.co,u,new B.b9(B.m(14),A.a1),u,u,u)),1)],v),A.m,u,A.e,A.i,0,u,u)],v),A.al,u,A.e,A.Q,0,A.p),u)},
$S:z+9}
C.eH3.prototype={
$0(){B.a6(this.a,!1).O(!1)
return null},
$S:0}
C.eH4.prototype={
$0(){B.a6(this.a,!1).O(!0)
return null},
$S:0}
C.eH7.prototype={
$1(d){var w=this,v=null,u=w.a,t=u.acH(),s=w.b,r=u.acI(A.aY,A.ee,"Everything that could be matched is now on "+s+".","Transfer complete"),q=x.p,p=B.A(B.a([B.E(u.awI("Names",""+w.c),1),A.ae,B.E(u.awI("Fields",""+w.d),1),A.ae,B.E(u.awI("Signatures",""+w.e),1)],q),A.m,v,A.e,A.i,0,v,v),o=B.bp(A.bl,v,v,v,A.c,v,A.yz,v,new B.b9(B.m(14),A.a1),v,v,v)
return new C.KL(B.x(B.a([t,A.U,r,A.aR,p,A.bz,B.bI(B.d("Open "+s,v,v,v,v,v,v,A.nW,v,v,v),v,new C.eH6(d),o),A.X,u.aXF(d,"Stay here",!1)],q),A.al,v,A.e,A.Q,0,A.p),v)},
$S:z+9}
C.eH6.prototype={
$0(){B.a6(this.a,!1).O(!0)
return null},
$S:0}
C.eE5.prototype={
$0(){B.a6(this.a,!1).O(this.b)
return null},
$S:0}
C.eE4.prototype={
$0(){B.a6(this.a,!1).O(this.b)
return null},
$S:0}
C.eGY.prototype={
$1(d){return d.b===D.cW},
$S:z+4}
C.eHw.prototype={
$1(d){var w=this.a,v=this.b
return new C.a0H(A.d.dP(w.d,new C.eHu(v),new C.eHv(v)).hQ(),w.f,null)},
$S:z+84}
C.eHu.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eHv.prototype={
$0(){return this.a},
$S:z+85}
C.eBQ.prototype={
$1(d){var w=null,v=this.b,u=""+v,t=v===1?"":"s"
t=B.a([new B.D(A.bF,B.d("Import "+this.a.c+" ("+u+" page"+t+")",w,w,w,w,w,w,A.fY,w,w,w),w),B.dG(!1,w,w,w,!0,w,w,w,!0,w,w,D.bWD,w,w,w,w,new C.eBO(d),!1,w,w,w,w,w,B.d("Scroll through all "+u+" pages inside the slide",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,D.fDY,w,w,w)],x.p)
if(v>1)t.push(B.dG(!1,w,w,w,!0,w,w,w,!0,w,w,D.bXS,w,w,w,w,new C.eBP(d),!1,w,w,w,w,w,D.h_Q,w,B.d("One slide per page ("+u+" slides)",w,w,w,w,w,w,A.dg,w,w,w),w,w,w))
return B.bm(!0,B.x(t,A.m,w,A.e,A.Q,0,A.p),!0,!1,A.ag,!0,!0)},
$S:27}
C.eBO.prototype={
$0(){B.a6(this.a,!1).O("scroll")
return null},
$S:0}
C.eBP.prototype={
$0(){B.a6(this.a,!1).O("split")
return null},
$S:0}
C.eBR.prototype={
$0(){var w=this.b,v=w.c,u=C.er(A.bn,!1,4279310375,A.aG,v,4280640491,24,A.bt,A.a8,"",0.84,C.cD(),w.b,"","",0,!1,"",0,D.bk,4280172719,2,v,0,0,"",D.ct,D.TI,0.88,0.06,0.08)
v=this.a
A.d.J(v.gdB().z,u)
v.r=u.a},
$S:0}
C.eBS.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this.a,i=j.f+1
for(w=this.b,v=this.c,u=v.b,t=w,v=v.c,s=x.u,r=v+" \u2014 page ",q=1;q<=w;++q){p=Date.now()
o=$.jc
$.jc=o+1
n=""+q
m=B.a([],s)
l=Date.now()
k=$.jc
$.jc=k+1
m.push(new C.eP(""+1000*l+"_"+k,D.TI,0.04,0.06,0.92,0.88,v,24,A.a8,A.bt,A.aG,4279310375,A.bn,u,D.bk,4280640491,4280172719,2,0,!1,n+" / "+t,q,D.ct,0,"","","","","",!1,0))
A.d.c4(j.e.r,i+q-1,new C.m0(""+1000*p+"_"+o,r+n,"",D.qX,4294967295,null,D.dm,0,"",0,m))}j.f=i
j.r=null},
$S:0}
C.eBW.prototype={
$0(){var w,v=C.cD(),u=this.a,t=u.e
t=(t==null?null:C.kL(t.w))===!0?"marriage_sign_placed":"Signature"
w=C.er(A.bn,!1,4279310375,A.aG,t,4280640491,24,A.bt,A.a8,"",0.22,v,this.b.a,"","",0,!1,"",0,D.bk,4280172719,2,"",0,0,"",D.ct,D.ls,0.35,0.55,0.62)
A.d.J(u.gdB().z,w)
u.r=w.a},
$S:0}
C.eBN.prototype={
$0(){var w,v,u,t,s,r,q,p=this.a,o=this.b
p.b5I(o)
w=C.cD()
v=this.c
u=v.c
t=v.d
s=v.e
r=v.f
q=C.er(A.bn,!1,4279310375,A.aG,"marriage_sign_placed_"+A.a.em(v.db,"marriage_sign_",""),4280640491,24,A.bt,A.a8,"",r,w,o.a,"","",0,!1,"",0,D.bk,4280172719,2,"",0,0,"",D.ct,D.ls,s,u,t)
A.d.J(p.gdB().z,q)
A.d.bt(p.gdB().z,new C.eBM(v))
p.r=null
p=p.e
if((p==null?null:p.w)==="hati_kiapo_uongozi"&&A.a.q(v.db,"rais")){p.toString
C.ilC(p)}},
$S:0}
C.eBM.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.eFN.prototype={
$0(){var w=this.a,v=this.b
w.b5I(v)
this.c.at=v.a
w.r=null},
$S:0}
C.eHE.prototype={
$0(){var w,v,u,t,s,r,q=4279673674,p=1483594
for(w=this.b.z,v=w.length,u=this.c,t=0;t<v;++t){s=w[t]
r=s.db
if(r==="marriage_locked_nim_akuna_deni"){s.r="AKUNA DENI"
s.Q=u?q:p}else if(r==="marriage_locked_nim_akuna_box")s.ch=u?q:p
else if(r==="marriage_locked_nim_akuna_tick"){s.r="\u2713"
s.Q=u?q:p}}this.a.r=null},
$S:0}
C.eE8.prototype={
$0(){var w,v,u,t,s,r=this.b
A.d.bt(r.z,new C.eE7())
for(r=r.z,w=r.length,v=this.c+0.001,u=0;u<w;++u){t=r[u]
s=t.d
if(s>v)t.d=s-0.043}this.a.r=null},
$S:0}
C.eE7.prototype={
$1(d){var w=d.db
return w==="marriage_locked_nim_n_4"||w==="marriage_locked_nim_ul_4"||A.a.a0(w,"marriage_field_mahari_4:")},
$S:z+4}
C.eCy.prototype={
$0(){var w=this.b
w.at=this.c
w.db="__kiapo_video__"
w=this.a
w.r=null
w.db=!1},
$S:0}
C.eCz.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.uc()},
$S:7}
C.eBK.prototype={
$0(){var w=C.er(A.bn,!1,4279310375,A.aG,"HD Photo",4280640491,24,A.bt,A.a8,"",0.8,C.cD(),this.b,"","",0,!1,"",0,D.bk,4280172719,2,"",0,0,"",D.ct,D.lR,0.8,0.1,0.1),v=this.a
A.d.J(v.gdB().z,w)
v.r=w.a},
$S:0}
C.eDA.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.eBT.prototype={
$0(){var w=this.a,v=this.b
A.d.J(w.gdB().z,v)
w.r=v.a},
$S:0}
C.eC1.prototype={
$0(){return this.a.cx+=0.785398},
$S:0}
C.eC2.prototype={
$0(){var w=this.b.hQ(),v=C.cD(),u=A.j.E(w.c+0.04,0,0.92),t=A.j.E(w.d+0.04,0,0.92),s=w.e,r=w.f,q=w.r,p=w.w,o=w.x,n=w.y,m=w.z,l=w.Q,k=w.as,j=w.at,i=w.ay,h=w.ch,g=w.cx,f=C.er(k,w.cy,l,m,w.db,i,p,n,o,"",r,v,j,"","",w.dx,!1,"",g,w.ax,h,w.CW,q,w.fr,0,"",w.dy,w.b,s,u,t)
t=this.a
A.d.J(t.gdB().z,f)
t.r=f.a},
$S:0}
C.eC3.prototype={
$0(){var w=this.a.gdB().z,v=this.b,u=A.d.bj(w,new C.eC0(v))
if(u>=0&&u<w.length-1){A.d.cB(w,u)
A.d.c4(w,u+1,v)}},
$S:0}
C.eC0.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.eCe.prototype={
$0(){var w=this.a.gdB().z,v=this.b,u=A.d.bj(w,new C.eC_(v))
if(u>0){A.d.cB(w,u)
A.d.c4(w,u-1,v)}},
$S:0}
C.eC_.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.eCh.prototype={
$0(){return this.a.as=A.bn},
$S:0}
C.eCi.prototype={
$0(){return this.a.as=A.K},
$S:0}
C.eCj.prototype={
$0(){return this.a.as=A.e_},
$S:0}
C.eCk.prototype={
$0(){return this.a.cx+=3.14159},
$S:0}
C.eCl.prototype={
$0(){return this.a.cx-=3.14159},
$S:0}
C.eCm.prototype={
$1(d){return d.b===D.cW},
$S:z+4}
C.eCn.prototype={
$1(d){return d.length!==0},
$S:3}
C.eC4.prototype={
$0(){var w=this.a,v=w.gdB().z,u=C.cD()
A.d.J(v,C.DD(w.gqT().c.j(0.18).l(),0.1,u,D.bk,0,2,1,0,0))
u=w.gdB().z
v=C.cD()
A.d.J(u,C.j5(A.bn,!1,w.gqT().d.l(),A.aG,18,A.bt,A.H,0.07,v,"Document Header",0,D.dm,0.9,0.05,0.02))},
$S:0}
C.eC5.prototype={
$0(){var w,v=this.a,u=v.gdB().z,t=C.cD()
A.d.J(u,C.DD(v.gqT().c.j(0.12).l(),0.1,t,D.bk,0,2,1,0,0.9))
t=v.gdB().z
u=C.cD()
w=C.bFm()
A.d.J(t,C.j5(A.K,!1,v.gqT().e.l(),A.aG,12,A.bt,A.a8,0.06,u,"Footer \xb7 "+w,0,D.dm,0.9,0.05,0.92))},
$S:0}
C.eC6.prototype={
$0(){A.d.J(this.a.gdB().z,C.DD(1727914055,0.12,C.cD(),D.bk,4294626325,2,0.76,0.12,0.35))},
$S:0}
C.eC7.prototype={
$0(){var w=4279310375
A.d.J(this.a.gdB().z,C.DD(w,0.08,C.cD(),D.bk,w,2,0.5,0.2,0.4))},
$S:0}
C.eC8.prototype={
$0(){var w=this.a,v=w.gdB().z,u=C.cD()
A.d.J(v,C.DD(w.gqT().c.j(0.35).l(),0.12,u,D.DX,4280640491,2,0.2,0.15,0.55))
A.d.J(w.gdB().z,C.j5(A.bn,!1,4279310375,A.aG,18,A.bt,A.a8,0.15,C.cD(),"Important note",0,D.qY,0.5,0.38,0.52))},
$S:0}
C.eC9.prototype={
$0(){var w=this.a
A.d.J(w.gdB().z,C.DD(4294507260,0.78,C.cD(),D.bk,4291548641,1.5,0.84,0.08,0.1))
A.d.J(w.gdB().z,C.j5(A.bn,!1,4279179050,A.aG,16,A.bt,A.a8,0.7,C.cD(),"MEMO\n\nTo:\nFrom:\nDate: "+C.bFm()+"\n\nSubject:\n\nBody text\u2026",0,D.dm,0.76,0.12,0.14))},
$S:0}
C.eCa.prototype={
$0(){var w=this.a
A.d.J(w.gdB().z,C.DD(4294897802,0.28,C.cD(),D.bk,4294626325,2,0.3,0.62,0.12))
A.d.J(w.gdB().z,C.j5(A.bn,!1,4285611794,A.aG,15,A.bt,A.a8,0.24,C.cD(),"Sticky note",0,D.aKL,0.26,0.64,0.14))},
$S:0}
C.eCb.prototype={
$0(){var w=4280640491,v=this.a
A.d.J(v.gdB().z,C.DD(4293060848,0.04,C.cD(),D.bk,4291548641,2,0.8,0.1,0.48))
A.d.J(v.gdB().z,C.DD(w,0.04,C.cD(),D.bk,w,2,0.55,0.1,0.48))},
$S:0}
C.eCc.prototype={
$0(){var w=4279310375,v=this.a
A.d.J(v.gdB().z,C.j5(A.bn,!1,w,A.aG,18,A.bt,A.a8,0.62,C.cD(),"Left column\n\n\u2022 Point A\n\u2022 Point B",0,D.Jh,0.42,0.06,0.18))
A.d.J(v.gdB().z,C.j5(A.bn,!1,w,A.aG,18,A.bt,A.a8,0.62,C.cD(),"Right column\n\n\u2022 Point C\n\u2022 Point D",200,D.vd,0.42,0.52,0.18))},
$S:0}
C.eCd.prototype={
$0(){var w=4279310375,v=this.a
A.d.J(v.gdB().z,C.DD(858088427,0.62,C.cD(),D.bk,4280640491,2,0.42,0.05,0.18))
A.d.J(v.gdB().z,C.DD(856004201,0.62,C.cD(),D.bk,4278556265,2,0.42,0.53,0.18))
A.d.J(v.gdB().z,C.j5(A.bn,!1,w,A.aG,20,A.bt,A.H,0.1,C.cD(),"Option A",0,D.dm,0.36,0.08,0.2))
A.d.J(v.gdB().z,C.j5(A.bn,!1,w,A.aG,20,A.bt,A.H,0.1,C.cD(),"Option B",0,D.dm,0.36,0.56,0.2))},
$S:0}
C.eCf.prototype={
$0(){var w=4279310375,v=this.a
A.d.J(v.gdB().z,C.DD(4294967295,0.36,C.cD(),D.bk,w,2,0.24,0.38,0.28))
A.d.J(v.gdB().z,C.j5(A.K,!1,w,A.aG,14,A.bt,A.a8,0.12,C.cD(),"[ QR CODE ]",0,D.dm,0.24,0.38,0.4))},
$S:0}
C.eCg.prototype={
$0(){return C.ckD(this.b,D.TJ,this.a.gqT())},
$S:0}
C.eDz.prototype={
$1(d){var w=this.b,v=w.dy,u=!D.a9Q.q(0,d),t=this.a
return t.baV(d,v===d,A.b1,this.c,new C.eDy(t,u,d,w),u)},
$S:z+25}
C.eDy.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p=t.b
if(p){w=3
break}else e=p
w=4
break
case 3:w=5
return B.b(t.a.or(),$async$$0)
case 5:e=!e
case 4:if(e){w=1
break}s=t.a
r=s.c
if(r==null){w=1
break}q=t.c
C.bG6(r,new C.eDx(s,t.d,q),q)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eDx.prototype={
$0(){return this.a.da(new C.eDw(this.b,this.c))},
$S:0}
C.eDw.prototype={
$0(){return this.a.dy=this.b},
$S:0}
C.eBU.prototype={
$0(){var w,v=this.a,u=v.gqT(),t=C.rW(4294967295,null,0,0,null,C.cD(),D.n8,"","","",D.dm),s=this.b
C.ckD(t,s,u)
w=v.gdB()
if(w!=null&&s!==D.DW){t.e=w.e
t.f=w.f}A.d.c4(v.e.r,v.f+1,t);++v.f
v.r=null},
$S:0}
C.eCC.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.a
p=q.c
if(p==null){w=1
break}s=q.a
r=s.c
s=s.d
w=3
return B.b(C.isk(p,q.d,s,new C.eCB(q),r),$async$$0)
case 3:w=q.c!=null?4:5
break
case 4:w=6
return B.b(q.uc(),$async$$0)
case 6:case 5:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eCB.prototype={
$1(d){return this.bnU(d)},
bnU(d){var w=0,v=B.j(x.H),u=this,t
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.a
t.m(new C.eCA(t,d))
w=2
return B.b(t.uc(),$async$$1)
case 2:return B.h(null,v)}})
return B.i($async$$1,v)},
$S:z+87}
C.eCA.prototype={
$0(){var w,v,u
for(w=J.aU(this.b),v=this.a;w.C();){u=w.gR(w)
A.d.c4(v.d,0,u)}},
$S:0}
C.eCD.prototype={
$0(){return this.a.bMC()},
$S:0}
C.eCE.prototype={
$0(){return this.a.aSO("Class Presentation",!0)},
$S:0}
C.eCF.prototype={
$1(d){return this.a.bNy(d.b,this.b,d.a)},
$S:z+88}
C.eDf.prototype={
$0(){var w,v=this.a
v.as=!1
w=v.c
w.toString
if(B.aH(w,A.c1,x.w).w.a.a<900)v.w=v.r=null},
$S:0}
C.eFq.prototype={
$1(d){return new B.D(new B.R(0,0,0,B.aH(d,A.eQ,x.w).w.f.d),new B.dY(new C.eFp(this.a,this.b),null),null)},
$S:59}
C.eFp.prototype={
$2(d,e){return B.pe(new C.eFo(this.a,this.b,d,e),!1,0.52,0.9,0.34,!1,null)},
$S:664}
C.eFo.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u?A.as:A.c,s=B.L(u?A.bA:A.aO,A.r,1),r=B.q(v,v,A.f,v,v,new B.p(A.aT,v,v,B.m(99),v,v,A.n),v,4,v,v,v,v,v,40),q=x.p,p=w.a
return B.q(v,B.x(B.a([A.X,r,new B.D(A.alR,B.A(B.a([B.d("Format",v,v,v,v,v,v,B.l(v,v,u?A.c:A.S,v,v,v,v,v,v,v,v,17,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.b5,B.bN(!1,A.AR,v,v,!0,v,v,v,new C.eFm(w.c),v,v)],q),A.m,v,A.e,A.i,0,v,v),v),B.E(B.cl(B.a([p.aVA(u,!0,!0,new C.eFn(p,w.d))],q),e,v,D.bBz,v,v,A.ah,!1),1)],q),A.m,v,A.e,A.i,0,A.p),A.f,v,v,new B.p(t,v,s,A.l7,v,v,A.n),v,v,v,v,v,v,v,v)},
$S:122}
C.eFm.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.eFn.prototype={
$0(){this.b.$1(new C.eFk())
var w=this.a
if(w.c!=null)w.m(new C.eFl())},
$S:0}
C.eFk.prototype={
$0(){},
$S:0}
C.eFl.prototype={
$0(){},
$S:0}
C.eGZ.prototype={
$3(d,e,f){return A.bM},
$C:"$3",
$R:3,
$S:92}
C.eH_.prototype={
$4(d,e,f,g){var w=A.cw.aA(0,e.gp(0))
return B.da(B.ed(A.A,new C.aAA(this.a,null),0.94+w*0.06,null,null),w)},
$S:442}
C.eH0.prototype={
$3(d,e,f){return A.bM},
$C:"$3",
$R:3,
$S:92}
C.eH1.prototype={
$4(d,e,f,g){var w=A.cw.aA(0,e.gp(0))
return B.da(B.ed(A.A,new C.bf1(this.a.b,null),0.94+w*0.06,null,null),w)},
$S:442}
C.eH2.prototype={
$0(){return A.d.c4(this.a.d,0,C.X4(this.b))},
$S:0}
C.eBZ.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a.fy
o===$&&B.c()
o=o.x
o===$&&B.c()
w=A.dC.aA(0,o)
o=B.m(22)
v=B.m(22)
u=this.b
t=x.O
s=u?B.a([A.c.j(0.1+w*0.04),A.as.j(0.72)],t):B.a([A.c.j(0.88),A.q9.j(0.75)],t)
r=B.L(A.b0.j(0.28+w*0.22),A.r,1.3)
q=w*0.2
t=B.a([A.b0.j(0.35+q),A.ch.j(0.18),A.L],t)
q=B.L(A.b0.j(0.45+q),A.r,1)
t=B.q(p,B.X(A4.a2a,u?A.ab:A.S,p,p,p,28),A.f,p,p,new B.p(p,p,q,p,p,new B.c_(A.A,0.5,A.x,p,0,t,p,p),A.a7),p,58,p,p,p,p,p,58)
q=B.d("No presentations yet",p,p,p,p,p,p,B.l(p,p,u?A.c:A.S,p,p,p,p,p,p,p,p,p,p,p,A.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
return B.by(o,B.ux(A.fj,B.q(p,B.x(B.a([t,A.aB,q,A.an,B.d("Open Blank or Class Template to start \u2014 nothing is saved until you edit.",p,p,p,p,p,p,B.l(p,p,u?A.aD:A.am,p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),A.K,p,p)],x.p),A.m,p,A.e,A.i,0,A.p),A.f,p,p,new B.p(p,p,r,v,p,new B.a9(A.aA,A.aF,A.x,s,p,p),A.n),p,p,p,p,A.ez,p,p,1/0),14,!1),A.aq)},
$S:345}
C.eD3.prototype={
$1(d){return A.a.i(d)},
$S:14}
C.eD4.prototype={
$1(d){return d.length!==0},
$S:3}
C.eD5.prototype={
$1(d){var w
if(A.a.a0(d,"Updated"))w=A.k7
else{w=B.ag("^\\d+ slides?$",!0,!1,!1,!1)
w=w.b.test(d)?A.a2K:A.Cx}return w},
$S:720}
C.eD8.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.a,j=k.fy
j===$&&B.c()
j=j.x
j===$&&B.c()
w=A.dC.aA(0,A.j.F(j+m.b*0.12,1))
j=B.m(20)
v=m.c
u=B.m(20)
t=m.d
s=x.O
s=t?B.a([A.c.j(0.1+w*0.04),A.as.j(0.78)],s):B.a([A.c.j(0.92),A.np.j(0.82)],s)
r=m.e
q=A.d.gH(r)
p=t?0.34:0.26
p=B.L(q.j(p+w*0.22),A.r,1.25)
q=B.m(10)
q=B.q(l,B.X(C.kL(v.w)?A.wz:A.qL,A.c,l,l,l,22),A.f,l,l,new B.p(l,l,l,q,l,new B.a9(A.a6,A.aa,A.x,r,l,l),A.n),l,36,l,l,l,l,l,52)
o=v.b
o=B.d(o.toUpperCase(),l,l,l,l,l,l,B.l(l,l,t?A.c:A.S,l,l,l,l,l,l,l,l,l,l,l,A.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
n=v.w
if(n==="marriage_agreement")n="Hati ya Kuhowesha \u2022 Updated "+k.QD(v.f)
else if(n==="hati_kuhowa")n="Hati ya Kuhowa \u2022 Updated "+k.QD(v.f)
else if(n==="hati_kuhoweya")n="Hati ya Kuhoweya \u2022 Updated "+k.QD(v.f)
else if(n==="hati_kiapo_uongozi"){n=v.x
if(A.a.i(n==null?"":n).length===0)n="Civic Registry"
n="Kiapo cha Uongozi \u2022 "+B.w(n)+" \u2022 Updated "+k.QD(v.f)}else n=""+v.r.length+" slides \u2022 Updated "+k.QD(v.f)
r=k.bNw(n,A.d.gH(r),t)
return B.q(l,B.by(j,new B.a8W(B.aJ(!1,A.a3,!0,l,B.aP(!1,l,!0,B.q(l,B.dG(!1,A.O1,l,l,!0,l,l,l,!0,l,l,q,l,l,l,l,l,!1,l,l,l,l,l,r,l,o,l,B.aG(l,l,l,l,B.X(A.ow,t?A.aD:A.bK,l,l,l,l),l,l,l,new C.eD6(k,v,t),l,l,l,l,"Project options",l),l),A.f,l,l,new B.p(l,l,p,u,l,new B.a9(A.aA,A.aF,A.x,s,l,l),A.n),l,l,l,l,l,l,l,l),l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.eD7(k,v),l,l,l,l,l,l,l),A.f,A.L,0,l,l,l,l,l,A.aj),l),A.aq),A.f,l,l,l,l,l,l,A.d3,l,l,l,l)},
$S:98}
C.eD7.prototype={
$0(){return this.a.ago(this.b)},
$S:0}
C.eD6.prototype={
$0(){return this.a.Bq(this.b,this.c)},
$S:0}
C.eEz.prototype={
$0(){var w=this.a
w.b9t()
w.m(new C.eEy())},
$S:0}
C.eEy.prototype={
$0(){},
$S:0}
C.eEA.prototype={
$1(d){return this.a.akr(this.b.a,d)},
$S:2}
C.eEB.prototype={
$0(){this.a.da(new C.eEx(this.b))},
$S:0}
C.eEx.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.V)?A.cC:A.V},
$S:0}
C.eEC.prototype={
$0(){this.a.da(new C.eEw(this.b))},
$S:0}
C.eEw.prototype={
$0(){var w=this.a
return w.y=w.y===A.cH?A.bt:A.cH},
$S:0}
C.eED.prototype={
$0(){this.a.da(new C.eEv(this.b))},
$S:0}
C.eEv.prototype={
$0(){var w=this.a,v=w.z
return w.z=1===v.a?A.aG:A.nd},
$S:0}
C.eEE.prototype={
$0(){this.a.da(new C.eEu(this.b))},
$S:0}
C.eEu.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
C.eEF.prototype={
$0(){var w=this.a
w.da(new C.eEt(w,this.b))},
$S:0}
C.eEt.prototype={
$0(){var w=this.b
return w.as=this.a.c88(w.as)},
$S:0}
C.eEG.prototype={
$0(){return this.a.da(new C.eEs(this.b))},
$S:0}
C.eEs.prototype={
$0(){var w=this.a
return w.w=A.j.E(w.w+2,10,96)},
$S:0}
C.eEH.prototype={
$0(){return this.a.da(new C.eEr(this.b))},
$S:0}
C.eEr.prototype={
$0(){var w=this.a
return w.w=A.j.E(w.w-2,10,96)},
$S:0}
C.eEk.prototype={
$0(){return this.a.a35(this.b.a)},
$S:0}
C.eEl.prototype={
$0(){this.a.a0C()
return null},
$S:0}
C.eEm.prototype={
$0(){var w=this.a,v=w.c
v.toString
if(B.aH(v,A.c1,x.w).w.a.a<900)w.agH()
else w.m(new C.eEj(w))},
$S:0}
C.eEj.prototype={
$0(){return this.a.as=!0},
$S:0}
C.eEn.prototype={
$0(){this.a.da(new C.eEi(this.b))},
$S:0}
C.eEi.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.V)?A.cC:A.V},
$S:0}
C.eEo.prototype={
$0(){return this.a.da(new C.eEh(this.b))},
$S:0}
C.eEh.prototype={
$0(){var w=this.a
return w.w=A.j.E(w.w+2,10,96)},
$S:0}
C.eEp.prototype={
$0(){return this.a.da(new C.eEg(this.b))},
$S:0}
C.eEg.prototype={
$0(){var w=this.a
return w.w=A.j.E(w.w-2,10,96)},
$S:0}
C.eEq.prototype={
$0(){return this.a.aBU(null)},
$S:0}
C.eDs.prototype={
$0(){this.a.E7()
return null},
$S:0}
C.eDt.prototype={
$0(){this.a.abd()
return null},
$S:0}
C.eDv.prototype={
$1(d){return this.bnV(d)},
bnV(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
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
return B.b(t.a.KA(),$async$$1)
case 10:w=4
break
case 6:s=t.a
r=s.e
if(r==null){w=1
break}q=s.c
q.toString
w=11
return B.b(B.bT(A.as,null,new C.eDn(r),q,!0,!0,!1,null,!1,!1,x.S),$async$$1)
case 11:p=f
if(p!=null)s.da(new C.eDo(r,p))
w=4
break
case 7:s=t.a
r=s.e
if(r==null){w=1
break}s.da(new C.eDp(r))
s=s.c.L(x.q).f
s.U(B.b3(null,null,null,null,null,A.t,null,B.d(r.ay?"Video motion on \u2014 press Play to watch it like a video.":"Video motion off.",null,null,null,null,null,null,null,null,null,null),null,A.a_,null,null,null,null,null,null,null,null,null,null))
w=4
break
case 8:s=t.a
r=s.e
if(r==null){w=1
break}s.da(new C.eDq(r))
s=s.c.L(x.q).f
s.U(B.b3(null,null,null,null,null,A.t,null,B.d(r.ch?"Non-stop on \u2014 the show starts over after the last slide.":"Non-stop off \u2014 the show stops on the last slide.",null,null,null,null,null,null,null,null,null,null),null,A.a_,null,null,null,null,null,null,null,null,null,null))
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
return B.b(C.hEx(q,new C.Fj(o,n,m,l==null?"":l)),$async$$1)
case 12:p=f
if(p==null||s.c==null){w=1
break}s.da(new C.eDr(r,p))
s=s.c.L(x.q).f
q=p.a
if(q.length===0)q="No ending celebration."
else{q=C.ai1(q)
q=B.w(q==null?null:q.b)+" will play after your last slide."}s.U(B.b3(null,null,null,null,null,A.t,null,B.d(q,null,null,null,null,null,null,null,null,null,null),null,A.a_,null,null,null,null,null,null,null,null,null,null))
w=4
break
case 4:case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:94}
C.eDn.prototype={
$1(d){var w,v,u,t,s,r,q,p=null,o=B.a([D.es3],x.p)
for(w=[3,5,8,10,15,20,30,60],v=w.length,u=this.a,t=0;t<v;++t){s=w[t]
r=B.d(""+s+" seconds",p,p,p,p,p,p,A.dg,p,p,p)
q=u.e===s?D.bWM:p
o.push(B.dG(!1,p,p,p,!0,p,p,p,!0,p,p,p,p,p,p,p,new C.eDm(d,s),!1,p,p,p,p,p,p,p,r,p,q,p))}return B.bm(!0,B.x(o,A.m,p,A.e,A.Q,0,A.p),!0,!1,A.ag,!0,!0)},
$S:27}
C.eDm.prototype={
$0(){B.a6(this.a,!1).O(this.b)
return null},
$S:0}
C.eDo.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eDp.prototype={
$0(){var w=this.a
return w.ay=!w.ay},
$S:0}
C.eDq.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
C.eDr.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.db=u.length===0?null:u
w.dx=v.b
w.dy=v.c
v=v.d
w.fr=v.length===0?null:v},
$S:0}
C.eDu.prototype={
$1(d){var w,v,u,t=null,s=this.a.e,r=s==null,q=r?t:s.e,p=x.N
q=B.An(B.d("Timer: "+(q==null?5:q)+"s",t,t,t,t,t,t,t,t,t,t),48,"timer",p)
w=r?t:s.ay
v=B.An(B.d("Video motion: "+(w===!0?"On":"Off"),t,t,t,t,t,t,t,t,t,t),48,"motion",p)
w=r?t:s.ch
u=B.An(B.d("Non-stop loop: "+(w===!0?"On":"Off"),t,t,t,t,t,t,t,t,t,t),48,"loop",p)
s=C.ai1(r?t:s.db)
s=s==null?t:s.b
return B.a([D.exA,q,v,u,B.An(B.d("Ending celebration: "+(s==null?"None":s),t,t,t,t,t,t,t,t,t,t),48,"finale",p)],x.gx)},
$S:135}
C.eHK.prototype={
$0(){var w=this.a,v=w.e
if(v!=null){w=w.c
w.toString
C.bFj(w,v)}},
$S:0}
C.eHL.prototype={
$0(){this.a.E7()
return null},
$S:0}
C.eEK.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.z===d,r=B.m(999),q=s?D.c6n:u
if(s)w=u
else w=this.b?A.c.j(0.05):A.bO
if(s)v=A.c
else v=this.b?A.aS:A.bv
return new B.D(A.fz,B.aA(u,B.cT(u,B.d(d,u,u,u,u,u,u,B.l(u,u,v,u,u,u,u,u,u,u,u,12,u,u,A.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,A.b3,new B.p(w,u,u,r,u,q,A.n),A.eH,u,u,u,u,A.lJ,u,u,u),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.eEJ(t,d),u,u,u,u,u,u,!1,A.a4),u)},
$S:137}
C.eEJ.prototype={
$0(){var w=this.a
return w.m(new C.eEI(w,this.b))},
$S:0}
C.eEI.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.eEL.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.e
if(s==null)s=u
else{s=s.CW
s=(s==null?"":s).length!==0}w=s===!0
v=w?G.a5P:E.aAZ
s=w?"Tell the AI what to change or add":"Type it \u2014 AI creates the slides"
t=w?t.gbR6():t.gbMX()
return B.hb(B.aA(u,B.q(u,D.aqU,A.f,u,u,new B.p(u,u,u,u,B.a([new B.ac(0,A.G,A.d.gH(v).j(0.45),A.I,10)],x.V),new B.a9(A.a6,A.aa,A.x,v,u,u),A.a7),u,34,u,u,u,u,u,34),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,t,u,u,u,u,u,u,!1,A.a4),u,s,u,u)},
$S:1726}
C.eEM.prototype={
$0(){var w=this.a,v=w.c
v.toString
return C.irA(v,w.a.c)},
$S:0}
C.eG8.prototype={
$0(){return this.b.vO(this.a.a)},
$S:0}
C.eG9.prototype={
$0(){return this.a.vO(D.n8)},
$S:0}
C.eGa.prototype={
$0(){return this.a.vO(D.Jf)},
$S:0}
C.eGl.prototype={
$0(){return this.a.vO(D.Jg)},
$S:0}
C.eGw.prototype={
$0(){return this.a.vO(D.Je)},
$S:0}
C.eGH.prototype={
$0(){return this.a.qE("lab_report")},
$S:0}
C.eGO.prototype={
$0(){return this.a.qE("rubric")},
$S:0}
C.eGP.prototype={
$0(){return this.a.qE("minutes")},
$S:0}
C.eGQ.prototype={
$0(){return this.a.qE("agenda")},
$S:0}
C.eGR.prototype={
$0(){return this.a.qE("timeline")},
$S:0}
C.eGS.prototype={
$0(){return this.a.qE(this.b.a)},
$S:0}
C.eGb.prototype={
$0(){this.a.Wx()
return null},
$S:0}
C.eGc.prototype={
$0(){this.a.Wr()
return null},
$S:0}
C.eGd.prototype={
$0(){return this.a.qE("table")},
$S:0}
C.eGe.prototype={
$0(){return this.a.qE("sticky")},
$S:0}
C.eGf.prototype={
$0(){return this.a.qE("divider")},
$S:0}
C.eGg.prototype={
$0(){return this.a.qE("header_bar")},
$S:0}
C.eGh.prototype={
$0(){return this.a.pr(D.bk)},
$S:0}
C.eGi.prototype={
$0(){return this.a.pr(D.eZ)},
$S:0}
C.eGj.prototype={
$0(){return this.a.pr(D.kb)},
$S:0}
C.eGk.prototype={
$0(){return this.a.pr(D.DX)},
$S:0}
C.eGm.prototype={
$0(){return this.a.pr(D.kc)},
$S:0}
C.eGn.prototype={
$0(){return this.a.pr(D.lt)},
$S:0}
C.eGo.prototype={
$0(){return this.a.pr(D.fJ)},
$S:0}
C.eGp.prototype={
$0(){this.a.HQ()
return null},
$S:0}
C.eGq.prototype={
$0(){this.a.NX()
return null},
$S:0}
C.eGr.prototype={
$0(){return this.a.qE("quote")},
$S:0}
C.eGs.prototype={
$0(){return this.a.a9l()},
$S:0}
C.eGt.prototype={
$0(){this.a.a0I()
return null},
$S:0}
C.eGu.prototype={
$0(){var w=this.a
return w.m(new C.eFZ(w))},
$S:0}
C.eFZ.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.eGv.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return B.b(s.or(),$async$$0)
case 3:if(!e){w=1
break}if(s.c==null){w=1
break}s.m(new C.eG6(s))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eG6.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.eGx.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=r.e
q=q==null?s:q.c
w=d.a
v=q===w&&r.kc()==null&&!r.Q
q=A.a.i(w)
w=d.b
if(D.a9S.q(0,q))w+=" (Pro)"
u=d.r
if(u==null)u=d.c
u=B.a([d.f,u],x.O)
t=v?d.c:A.aT
u=B.a([B.q(s,s,A.f,s,s,new B.p(s,s,B.L(t,A.r,v?2.5:1),s,s,new B.a9(A.a6,A.aa,A.x,u,s,s),A.a7),s,26,s,s,s,s,s,26)],x.p)
if(D.a9S.q(0,q))u.push(B.ap(s,B.q(s,D.PN,A.f,s,s,D.Fj,s,12,s,s,s,s,s,12),s,s,s,-2,-2,s))
return new B.D(A.fz,B.aA(s,B.hb(new B.an(A.a0,s,A.ad,A.f,u,s),s,w,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.eG5(r,d),s,s,s,s,s,s,!1,A.a4),s)},
$S:z+89}
C.eG5.prototype={
$0(){this.a.a9B(this.b)
return null},
$S:0}
C.eGy.prototype={
$0(){this.a.a9A(this.b)
return null},
$S:0}
C.eGz.prototype={
$1(d){var w,v,u,t,s,r=null,q=C.hWC(d),p=this.a,o=B.m(8),n=p.gdB()
n=n==null?r:n.x
w=d.a
n=n===w?A.bl:A.aT
v=p.gdB()
n=B.L(n,A.r,(v==null?r:v.x)===w?2.5:1)
u=B.m(8)
t=B.m(7)
s=C.rW(4294967295,r,0,0,r,"preview_"+w,D.qX,"","","",D.dm)
C.hBk(s,w)
w=x.p
u=B.a([B.by(o,B.q(r,B.by(t,C.hCF(s),A.aq),A.f,r,r,new B.p(r,r,n,u,r,r,A.n),r,44,r,r,r,r,r,72),A.aq)],w)
if(q)u.push(B.ap(r,B.q(r,D.arv,A.f,r,r,D.Fj,r,14,r,r,r,r,r,14),r,r,r,2,2,r))
return new B.D(A.iK,B.aA(r,B.x(B.a([new B.an(A.a0,r,A.ad,A.t,u,r),A.cU,B.d(d.b,r,r,r,r,r,r,B.l(r,r,this.b?A.aD:A.am,r,r,r,r,r,r,r,r,9,r,r,A.V,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],w),A.m,r,A.e,A.i,0,A.p),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.eG4(p,q,d),r,r,r,r,r,r,!1,A.a4),r)},
$S:z+90}
C.eG4.prototype={
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
return B.b(s.or(),$async$$0)
case 5:e=!e
case 4:if(e){w=1
break}if(s.c==null){w=1
break}s.da(new C.eFV(r,t.c))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eFV.prototype={
$0(){return C.hBk(this.a,this.b.a)},
$S:0}
C.eG7.prototype={
bnW(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$$2=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=!D.a9Q.q(0,d)
if(s){w=3
break}else g=s
w=4
break
case 3:w=5
return B.b(t.a.or(),$async$$2)
case 5:g=!g
case 4:if(g){w=1
break}if(t.a.c==null){w=1
break}e.$0()
case 1:return B.h(u,v)}})
return B.i($async$$2,v)},
$2(d,e){return this.bnW(d,e)},
$S:z+91}
C.eGT.prototype={
$4(d,e,f,g){var w=null,v=B.U(d).k("N<1,v>")
v=B.C(new B.N(d,new C.eGV(this.a,e,g,this.b,f),v),v.k("ak.E"))
return B.cg(B.A(v,A.m,w,A.e,A.i,0,w,w),A.t,w,A.y,w,w,w,w,A.aL)},
$S:z+92}
C.eGV.prototype={
$1(d){var w=this
return w.a.baV(d,w.b===d,w.c,w.d,new C.eGU(w.e,d),!D.a9Q.q(0,d))},
$S:z+25}
C.eGU.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eGA.prototype={
$1(d){this.b.$2(d,new C.eG3(this.a,d,this.c))
return null},
$S:z+26}
C.eG3.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.bG6(u,new C.eFU(v,this.c,w),w)},
$S:0}
C.eFU.prototype={
$0(){return this.a.da(new C.eFS(this.b,this.c))},
$S:0}
C.eFS.prototype={
$0(){return this.a.dy=this.b},
$S:0}
C.eGB.prototype={
$1(d){this.b.$2(d,new C.eG2(this.a,d))
return null},
$S:z+26}
C.eG2.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.h2y(u,new C.eFT(v,w),w)},
$S:0}
C.eFT.prototype={
$0(){var w=this.a
return w.da(new C.eFR(w,this.b))},
$S:0}
C.eFR.prototype={
$0(){return this.a.gdB().r=this.b},
$S:0}
C.eGC.prototype={
$0(){var w=this.a
return w.m(new C.eG1(w))},
$S:0}
C.eG1.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
C.eGD.prototype={
$0(){var w=this.a,v=w.e
if(v!=null){w=w.c
w.toString
C.bFj(w,v)}},
$S:0}
C.eGE.prototype={
$0(){this.a.IC()
return null},
$S:0}
C.eGF.prototype={
$0(){return this.a.a9l()},
$S:0}
C.eGG.prototype={
$0(){var w=this.a,v=w.kc()
if(v!=null&&v.b===D.cW)w.da(new C.eG0(v))},
$S:0}
C.eG0.prototype={
$0(){var w=this.a
w.f=A.j.E(w.f*1.25,0.08,1.8)
w.e=A.j.E(w.e*1.1,0.08,1.8)},
$S:0}
C.eGI.prototype={
$0(){this.a.E7()
return null},
$S:0}
C.eGJ.prototype={
$0(){var w=this.a,v=w.e
v.toString
w.FO(v,!0)
return null},
$S:0}
C.eGK.prototype={
$0(){this.a.da(new C.eG_(this.b))},
$S:0}
C.eG_.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.V)?A.cC:A.V},
$S:0}
C.eGL.prototype={
$0(){this.a.da(new C.eFY(this.b))},
$S:0}
C.eFY.prototype={
$0(){var w=this.a
return w.y=w.y===A.cH?A.bt:A.cH},
$S:0}
C.eGM.prototype={
$0(){this.a.da(new C.eFX(this.b))},
$S:0}
C.eFX.prototype={
$0(){var w=this.a,v=w.z
return w.z=1===v.a?A.aG:A.nd},
$S:0}
C.eGN.prototype={
$0(){this.a.da(new C.eFW(this.b))},
$S:0}
C.eFW.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
C.eCx.prototype={
$1(d){return this.bnT(d)},
bnT(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.b
if(r){w=3
break}else f=r
w=4
break
case 3:w=5
return B.b(t.a.or(),$async$$1)
case 5:f=!f
case 4:if(f){w=1
break}s=t.a
if(s.c==null){w=1
break}s.da(new C.eCw(s,t.c))
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:179}
C.eCw.prototype={
$0(){return this.a.e.d=this.b},
$S:0}
C.eHf.prototype={
$0(){var w=this.a
return w.da(new C.eHe(w,this.b))},
$S:0}
C.eHe.prototype={
$0(){var w,v=this.b,u=v.w
if(!(u>0)){w=this.a.e
w=w==null?null:w.e
u=w==null?5:w}v.w=A.o.E(u-1,1,120)},
$S:0}
C.eHg.prototype={
$0(){var w=this.a
return w.da(new C.eHd(w,this.b))},
$S:0}
C.eHd.prototype={
$0(){var w,v=this.b,u=v.w
if(!(u>0)){w=this.a.e
w=w==null?null:w.e
u=w==null?5:w}v.w=A.o.E(u+1,1,120)},
$S:0}
C.eDF.prototype={
$0(){return this.a.da(new C.eDE(this.b))},
$S:0}
C.eDE.prototype={
$0(){var w=this.a
return w.w=A.j.E(w.w-2,10,96)},
$S:0}
C.eDG.prototype={
$0(){return this.a.da(new C.eDD(this.b))},
$S:0}
C.eDD.prototype={
$0(){var w=this.a
return w.w=A.j.E(w.w+2,10,96)},
$S:0}
C.eEc.prototype={
$1(d){var w=x.gh
w=B.C(new B.N(D.atc,new C.eEb(),w),w.k("ak.E"))
return w},
$S:z+94}
C.eEb.prototype={
$1(d){var w=null
return B.An(B.d(d.b,w,w,w,w,w,w,A.lV,w,w,w),48,d,x.fO)},
$S:z+95}
C.eHs.prototype={
$2(d,e){var w=this.a,v=w?0:8
return new B.a5(v,w?8:0,null,null)},
$S:36}
C.eHr.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=null,p=r.a,o=e===p.f,n=p.ky()?q:new C.eHp(p,r.b,d,e),m=r.c,l=m?1/0:112
m=m?72:64
w=B.m(8)
if(o)v=A.bl
else v=r.d?A.aT:A.cu
v=B.L(v,A.r,o?2:1)
u=r.d?A.cq:A.c
t=B.bR(0,C.hCF(r.b.r[e]),0,0,0)
s=B.m(4)
return B.aA(q,B.q(q,new B.an(A.a0,q,A.ad,A.t,B.a([t,B.ap(4,B.q(q,B.d(""+(e+1),q,q,q,q,q,q,A.nU,q,q,q),A.f,q,q,new B.p(A.aU,q,q,s,q,q,A.n),q,q,q,q,A.amL,q,q,q),q,q,4,q,q,q)],x.p),q),A.f,q,q,new B.p(u,q,v,w,q,q,A.n),q,m,q,q,q,q,q,l),A.y,!1,q,q,q,q,q,q,q,q,n,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.eHq(p,e),q,q,q,q,q,q,!1,A.a4)},
$S:84}
C.eHq.prototype={
$0(){var w=this.a
return w.m(new C.eHl(w,this.b))},
$S:0}
C.eHl.prototype={
$0(){var w=this.a
w.f=this.b
w.r=null
w.KJ()},
$S:0}
C.eHp.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.b
if(q.r.length<=1){w=1
break}s=t.d
w=3
return B.b(B.bT(null,null,new C.eHm(s,q),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:r=e
if(r==="dup"){q=t.a
q.m(new C.eHn(q,s))
q.aUi()}else if(r==="del"){q=t.a
q.m(new C.eHo(q,s))
q.aTo()}else if(r==="up")t.a.b5W(s,s-1)
else if(r==="down")t.a.b5W(s,s+1)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eHm.prototype={
$1(d){var w=null,v=B.a([B.dG(!1,w,w,w,!0,w,w,w,!0,w,w,D.bYv,w,w,w,w,new C.eHh(d),!1,w,w,w,w,w,w,w,D.fEX,w,w,w),B.dG(!1,w,w,w,!0,w,w,w,!0,w,w,D.bYo,w,w,w,w,new C.eHi(d),!1,w,w,w,w,w,w,w,A.xm,w,w,w)],x.p),u=this.a
if(u>0)v.push(B.dG(!1,w,w,w,!0,w,w,w,!0,w,w,D.bXE,w,w,w,w,new C.eHj(d),!1,w,w,w,w,w,w,w,D.fNj,w,w,w))
if(u<this.b.r.length-1)v.push(B.dG(!1,w,w,w,!0,w,w,w,!0,w,w,D.bZL,w,w,w,w,new C.eHk(d),!1,w,w,w,w,w,w,w,D.fEL,w,w,w))
return B.bm(!0,B.x(v,A.m,w,A.e,A.Q,0,A.p),!0,!1,A.ag,!0,!0)},
$S:27}
C.eHh.prototype={
$0(){B.a6(this.a,!1).O("dup")
return null},
$S:0}
C.eHi.prototype={
$0(){B.a6(this.a,!1).O("del")
return null},
$S:0}
C.eHj.prototype={
$0(){B.a6(this.a,!1).O("up")
return null},
$S:0}
C.eHk.prototype={
$0(){B.a6(this.a,!1).O("down")
return null},
$S:0}
C.eHn.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eHo.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eHt.prototype={
$0(){return this.a.a9l()},
$S:0}
C.eCX.prototype={
$0(){var w=this.a
w.b9t()
w.aBU(null)},
$S:0}
C.eCW.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=B.m(4),n=B.a([new B.ac(0,A.G,A.w.j(0.35),A.dv,24)],x.V),m=this.b
if(m.f!=null){w=B.b0(m.e)
v=m.f
v.toString
v=new B.a9(A.aA,A.aF,A.x,B.a([w,B.b0(v)],x.O),p,p)
w=v}else w=p
v=m.f==null?B.b0(m.e):p
u=m.x
t=m.y
s=B.m(4)
if(m.f!=null){r=B.b0(m.e)
q=m.f
q.toString
q=new B.a9(A.aA,A.aF,A.x,B.a([r,B.b0(q)],x.O),p,p)
r=q}else r=p
s=B.a([B.by(s,B.c3(A.l1,new B.p(m.f==null?B.b0(m.e):p,p,p,p,p,r,A.n),A.bj),A.aq)],x.p)
r=m.z
q=this.c
A.d.v(s,new B.N(r,new C.eCV(this.a,e.b,e.d,q),B.U(r).k("N<1,v>")))
if(m.z.length===0)s.push(B.at(B.d("Use Insert \u2192 Text Box, Picture, or Shapes",p,p,p,p,p,p,B.l(p,p,q?A.aD:A.bK,p,p,p,p,p,p,p,p,p,p,p,A.a8,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p))
return B.c3(new B.an(A.a0,p,A.ad,A.f,s,new B.bM("canvas_"+m.a+"_"+u+"_"+t,x.W)),new B.p(v,p,p,o,n,w,A.n),A.bj)},
$S:438}
C.eCV.prototype={
$1(d){var w=this
return w.a.bIW(d,w.b,w.c,w.d)},
$S:z+23}
C.eCK.prototype={
$0(){var w=this
if(w.b){w.a.O4(w.c)
return}if(w.d){w.a.a9j(w.c)
return}if(w.e){w.a.ahZ(w.c)
return}if(w.f)w.a.ba1(w.c)},
$S:0}
C.eCL.prototype={
$0(){this.a.O4(this.b)
return null},
$S:0}
C.eCM.prototype={
$0(){return this.a.a35(this.b.a)},
$S:0}
C.eCN.prototype={
$1(d){var w=this,v=w.a,u=w.b
if(v.w===u.a)return
v.m(new C.eCJ(u,d,w.c,w.d))
v.Ig()
v.oD()
v.pJ()},
$S:19}
C.eCJ.prototype={
$0(){var w=this,v=w.a,u=w.b.d
v.c=A.j.E(v.c+u.a/w.c,-0.3,1.2)
v.d=A.j.E(v.d+u.b/w.d,-0.3,1.2)},
$S:0}
C.eCO.prototype={
$1(d){return this.a.akr(this.b.a,d)},
$S:2}
C.eCQ.prototype={
$0(){var w,v,u=this
if(u.b){w=u.c
if(!C.hfj(w))u.a.O4(w)
return}if(!u.d)return
w=u.a
v=u.c
if(w.w===v.a)return
w.ba1(v)},
$S:0}
C.eCP.prototype={
$0(){return this.a.a35(this.b.a)},
$S:0}
C.eCR.prototype={
$1(d){var w=this,v=w.a
v.m(new C.eCI(w.b,d,w.c,w.d))
v.Ig()
v.oD()
v.pJ()},
$S:19}
C.eCI.prototype={
$0(){var w=this,v=w.a,u=w.b.d
v.e=A.j.E(v.e+u.a/w.c,0.04,1.8)
u=u.b
v.f=A.j.E(v.f+u/w.d,0.04,1.8)
if(v.b===D.cW)v.w=A.j.E(v.w+u*0.15,10,120)},
$S:0}
C.eCS.prototype={
$1(d){var w=this.a
w.m(new C.eCH(this.b,d))
w.Ig()
w.oD()
w.pJ()},
$S:240}
C.eCH.prototype={
$0(){var w=this.a,v=this.b.d
w.e=A.j.E(w.e*v,0.04,1.8)
w.f=A.j.E(w.f*v,0.04,1.8)
if(w.b===D.cW)w.w=A.j.E(w.w*v,10,120)},
$S:0}
C.eCT.prototype={
$0(){var w=this.a
w.m(new C.eCG(this.b))
w.Ig()
w.oD()
w.pJ()},
$S:0}
C.eCG.prototype={
$0(){this.a.r=C.hC9()},
$S:0}
C.eCU.prototype={
$0(){return this.a.a35(this.b.a)},
$S:0}
C.eEO.prototype={
$0(){var w=this.a
return w.m(new C.eEN(w))},
$S:0}
C.eEN.prototype={
$0(){return this.a.y=!1},
$S:0}
C.eEP.prototype={
$1(d){return this.a.cI6(this.b.a,d)},
$S:2}
C.eDT.prototype={
$1(d){var w
this.a.da(d)
w=this.b
if(w!=null)w.$0()},
$S:167}
C.eDU.prototype={
$1(d){return this.a.$1(new C.eDS(this.b,d))},
$S:6}
C.eDS.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eDV.prototype={
$1(d){return this.a.$1(new C.eDR(this.b,d))},
$S:6}
C.eDR.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eDW.prototype={
$1(d){return this.a.$1(new C.eDQ(this.b,d))},
$S:6}
C.eDQ.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.eDX.prototype={
$1(d){return this.a.$1(new C.eDP(this.b,d))},
$S:6}
C.eDP.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.eDY.prototype={
$1(d){return this.a.$1(new C.eDO(this.b,d))},
$S:6}
C.eDO.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eDZ.prototype={
$1(d){return this.b.$1(new C.eDN(this.a,this.c))},
$S:9}
C.eDN.prototype={
$0(){return this.b.go=this.a.a},
$S:0}
C.eE_.prototype={
$1(d){return this.b.$1(new C.eDM(this.a,this.c))},
$S:9}
C.eDM.prototype={
$0(){return this.b.id=this.a.a},
$S:0}
C.eE0.prototype={
$1(d){var w=null,v=this.b,u=B.b0(d),t=v.Q===d,s=t?A.bl:A.d0
return B.aA(w,B.q(w,w,A.f,w,w,new B.p(u,w,B.L(s,A.r,t?2:1),w,w,w,A.a7),w,24,w,w,w,w,w,24),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eDL(this.a,v,d),w,w,w,w,w,w,!1,A.a4)},
$S:433}
C.eDL.prototype={
$0(){return this.a.$1(new C.eDI(this.b,this.c))},
$S:0}
C.eDI.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.eE1.prototype={
$1(d){return this.a.$1(new C.eDK(this.b,d))},
$S:1727}
C.eDK.prototype={
$0(){var w=this.b
return this.a.as=w.gH(w)},
$S:0}
C.eE2.prototype={
$1(d){var w=null
return B.aA(w,B.q(w,w,A.f,w,w,new B.p(B.b0(d),w,w,w,w,w,A.a7),w,22,w,w,w,w,w,22),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eDJ(this.a,this.b,d),w,w,w,w,w,w,!1,A.a4)},
$S:433}
C.eDJ.prototype={
$0(){return this.a.$1(new C.eDH(this.b,this.c))},
$S:0}
C.eDH.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.eE3.prototype={
$0(){var w,v=this
if(v.b){w=v.a.c
w.toString
w=B.a6(w,!1).pX()}else w=!1
if(w){w=v.a.c
w.toString
B.a6(w,!1).eO()}v.a.aum()},
$S:0}
C.eE6.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.fy
m===$&&B.c()
m=m.x
m===$&&B.c()
w=A.dC.aA(0,m)
m=B.m(16)
v=B.m(16)
u=o.c
t=B.ar(u,A.b0,0.35+w*0.15)
t.toString
t=B.a([u,t],x.O)
s=B.L(A.c.j(0.3+w*0.2),A.r,1.2)
r=B.a([B.X(o.d,A.c,n,n,n,26)],x.p)
q=B.m(6)
p=B.L(u,A.r,1.2)
r.push(B.ap(2,B.q(n,B.X(A.uU,u,n,n,n,10),A.f,n,n,new B.p(A.c,n,p,q,n,n,A.n),n,n,n,n,A.nG,n,n,n),n,n,n,2,n,n))
return B.aJ(!1,A.a3,!0,n,B.aP(!1,m,!0,B.eJ(new B.a5(48,48,new B.an(A.A,n,A.ad,A.t,r,n),n),n,new B.p(n,n,s,v,n,new B.a9(A.aA,A.aF,A.x,t,n,n),A.n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.b,n,n,n,n,n,n,n),A.f,A.L,0,n,A.L,n,n,n,A.aj)},
$S:133}
C.eBG.prototype={
$2(d,e){var w,v,u,t,s,r,q=this,p=null,o=q.a.fy
o===$&&B.c()
o=o.x
o===$&&B.c()
w=A.dC.aA(0,o)
o=B.m(22)
v=B.m(22)
u=q.c
t=B.ar(u,A.b0,0.22+w*0.12)
t.toString
u=B.a([u,t,u.j(0.9)],x.O)
t=B.L(A.c.j(0.28+w*0.22),A.r,1.35)
s=A.c.j(0.14+w*0.08)
r=B.L(A.c.j(0.4+w*0.15),A.r,1)
return B.aJ(!1,A.a3,!0,p,B.aP(!1,o,!0,B.eJ(B.x(B.a([B.ed(A.A,B.q(p,B.X(q.d,A.c,p,p,p,26),A.f,p,p,new B.p(s,p,r,p,p,p,A.a7),p,48,p,p,p,p,p,48),1+w*0.06,p,p),A.af,B.d(q.e,p,p,p,p,p,p,A.ja,A.K,p,p)],x.p),A.m,p,A.bb,A.i,0,A.p),p,new B.p(p,p,t,v,p,new B.a9(A.aA,A.aF,A.x,u,p,p),A.n),p,A.GO,1/0),p,!0,p,p,p,p,p,p,p,p,p,p,p,q.b,p,p,p,p,p,p,p),A.f,A.L,0,p,A.L,p,p,p,A.aj)},
$S:133}
C.eFL.prototype={
$1(d){var w=null,v=B.d(this.a,w,w,w,w,w,w,w,w,w,w),u=this.b,t=B.aM(w,A.Z,!0,w,!0,A.t,w,B.aO(),u,w,w,w,w,w,2,A.asm,A.y,!0,w,!0,w,!1,w,A.ak,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,A.ac,w,w,w,w,w,w,w,w,w,w,w,w,!0,A.a5,w,A.ao,w,w,w,w)
return B.eg(B.a([B.bN(!1,A.dn,w,w,!0,w,w,w,new C.eFJ(d),w,w),B.bI(A.r9,w,new C.eFK(d,u),w)],x.p),w,w,w,t,w,w,w,w,v,w)},
$S:18}
C.eFJ.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.eFK.prototype={
$0(){var w=this.b.a.a
B.a6(this.a,!1).O(w)
return null},
$S:0}
C.d9Y.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.a,i=j.d
i===$&&B.c()
i=i.x
i===$&&B.c()
w=A.dC.aA(0,i)
i=j.e
i===$&&B.c()
v=i.x
v===$&&B.c()
u=A.e7.aA(0,A.j.E(v,0,1))
i=i.x
i===$&&B.c()
i=A.dH.aA(0,i)
v=B.m(22)
t=B.ar(A.aM,A.d.gH(C.kL(j.a.c.w)?D.v6:L.nK),w*0.35)
t.toString
t=B.L(t,A.r,1.2)
s=x.V
r=B.a([new B.ac(w*2,A.G,A.d.gH(C.kL(j.a.c.w)?D.v6:L.nK).j(0.18+w*0.12),A.I,32+w*10),D.aey],s)
q=B.m(22)
p=x.O
o=B.ap(k,B.q(k,k,A.f,k,k,new B.p(k,k,k,k,k,new B.c_(A.b7,0.9,A.x,k,0,B.a([A.d.gH(C.kL(j.a.c.w)?D.v6:L.nK).j(0.22+w*0.1),A.L],p),k,k),A.n),k,80,k,k,k,k,k,k),k,k,0,0,-28,k)
n=64+w*6
m=A.d.gH(C.kL(j.a.c.w)?D.v6:L.nK).j(0.28+w*0.14)
p=B.q(k,k,A.f,k,k,new B.p(k,k,k,k,k,new B.c_(A.A,0.5,A.x,k,0,B.a([m,A.d.gan(C.kL(j.a.c.w)?D.v6:L.nK).j(0.08),A.L],p),k,k),A.a7),k,n,k,k,k,k,k,n)
n=B.m(14)
m=j.a.c.w
l=C.kL(m)?D.v6:L.nK
s=B.a([new B.ac(0,A.G,A.d.gH(C.kL(m)?D.v6:L.nK).j(0.45+w*0.2),A.cA,18)],s)
m=x.p
l=B.a([p,B.ed(A.A,B.q(k,B.X(C.kL(j.a.c.w)?A.wz:A.qL,A.c,k,k,k,22),A.f,k,k,new B.p(k,k,k,n,s,new B.a9(A.aA,A.aF,A.x,l,k,k),A.n),k,46,k,k,k,k,k,46),1+w*0.04,k,k)],m)
s=B.a([new B.an(A.A,k,A.ad,A.t,l,k),A.X,B.d("PRESENTATION",k,k,k,k,k,k,B.l(k,k,A.d.gH(C.kL(j.a.c.w)?D.v6:L.nK).j(0.85+w*0.15),k,k,k,k,k,k,k,k,10,k,k,A.H,k,k,!0,k,1.4,k,k,k,k,k,k),A.K,k,k),A.fM,B.d(j.a.c.b,k,2,A.a2,k,k,k,D.fwD,A.K,k,k),A.ax,B.d(j.gcCV(),k,k,k,k,k,k,D.fBw,A.K,k,k),A.aB],m)
p=j.a.c
if(p.z){p=p.gT7()?"Shared by admin \xb7 editable for 4 hours":"Received copy \xb7 print or download only"
A.d.v(s,B.a([B.d(p,k,k,k,k,k,k,B.l(k,k,A.d.gH(C.kL(j.a.c.w)?D.v6:L.nK).j(0.9),k,k,k,k,k,k,k,k,11,k,k,A.V,k,k,!0,k,k,k,k,k,k,k,k),A.K,k,k),A.af],m))}s.push(new C.KF(A.z6,"Download PDF","pdf",A.d5,j.Jx(0),!1,k))
p=j.a.c
if(!p.z||p.gT7()){p=j.a.c.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"}else p=!1
if(p){p=j.a.c.w
A.d.v(s,B.a([A.an,new C.KF(A.jJ,"Transfer to "+C.hCb(p==null?"":p),"transfer_hati",A.aY,j.Jx(1),!1,k)],m))}p=j.a.c
if(!p.z){p=p.w
n=j.Jx(p==="hati_kuhowa"||p==="hati_kuhoweya"?2:1)
p=j.a.c.w
A.d.v(s,B.a([A.an,new C.KF(D.bQ_,"Rename presentation","rename",A.ch,n,!1,k),A.an,new C.KF(A.aoF,"Duplicate","duplicate",A.b8,j.Jx(p==="hati_kuhowa"||p==="hati_kuhoweya"?3:2),!1,k)],m))}s.push(A.U)
p=j.a.c
if(p.z)p=1
else{p=p.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"?4:3}s.push(new C.KF(A.eh,"Delete presentation","delete",A.ay,j.Jx(p),!0,k))
s.push(A.ax)
p=j.a.c
if(p.z)p=2
else{p=p.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"?5:4}p=j.Jx(p)
n=j.a.c
if(n.z)n=2
else{n=n.w
n=n==="hati_kuhowa"||n==="hati_kuhoweya"?5:4}n=j.Jx(n)
s.push(B.dP(B.da(B.bN(!1,E.aWw,k,k,!0,k,k,k,new C.d9X(d),k,B.fu(k,k,k,k,k,k,k,k,k,k,k,A.bK,k,k,k,A.az,k,D.bEQ,k,k,k,k,k,A.kz,k,k)),n),new B.o(0,(1-p)*8)))
return B.ed(A.A,B.da(B.aJ(!1,A.a3,!0,k,B.q(k,B.by(q,new B.an(A.a0,k,A.ad,A.t,B.a([o,new B.D(D.bDZ,B.x(s,A.m,k,A.e,A.Q,0,A.p),k)],m),k),A.aq),A.f,k,A.Xs,new B.p(A.as,k,t,v,r,k,A.n),k,k,k,k,k,k,k,k),A.f,A.L,0,k,k,k,k,k,A.aj),i),0.88+u*0.12,k,k)},
$S:46}
C.d9X.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.dal.prototype={
$0(){B.a6(this.a,!1).O(!1)
return null},
$S:0}
C.dam.prototype={
$0(){B.a6(this.a,!1).O(!0)
return null},
$S:0}
C.d9V.prototype={
$1(d){var w=this.a
return w.m(new C.d9R(w))},
$S:23}
C.d9R.prototype={
$0(){return this.a.d=!0},
$S:0}
C.d9W.prototype={
$1(d){var w=this.a
return w.m(new C.d9Q(w))},
$S:72}
C.d9Q.prototype={
$0(){return this.a.d=!1},
$S:0}
C.d9U.prototype={
$0(){var w=this.a
return w.m(new C.d9S(w))},
$S:0}
C.d9S.prototype={
$0(){return this.a.d=!1},
$S:0}
C.d9T.prototype={
$0(){var w=this.a.a.e
B.a6(this.b,!1).O(w)
return null},
$S:0}
C.eIq.prototype={
$0(){return $.bmI=!$.bmI},
$S:0}
C.eIg.prototype={
$0(){var w,v,u=this.a
if(u.c==null||!u.r)return
w=u.d
w===$&&B.c()
v=u.a.c
if(w<v.r.length-1||v.ch||u.gaXw())u.azu()},
$S:0}
C.eIp.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.eIh.prototype={
$0(){return this.a.y=!0},
$S:0}
C.eIi.prototype={
$0(){var w=this.a
if(w.c!=null&&w.y)w.azu()},
$S:0}
C.eIc.prototype={
$0(){var w=this.a
w.y=!1
w.e=A.d.gH(w.a.c.r).r
w.d=0},
$S:0}
C.eId.prototype={
$0(){var w=this.a,v=this.b
w.e=w.a.c.r[v].r
w.d=v},
$S:0}
C.eIe.prototype={
$0(){return this.a.y=!1},
$S:0}
C.eIf.prototype={
$0(){var w,v,u=this.a
u.e=u.a.c.r[this.b].r
w=u.d
w===$&&B.c()
v=this.c
u.d=A.o.F(w-1+v,v)},
$S:0}
C.eIn.prototype={
$2(d,e){var w=B.C(e,x.l)
if(d!=null)w.push(d)
return new B.an(A.A,null,A.b2,A.t,w,null)},
$S:1728}
C.eIo.prototype={
$2(d,e){var w
if(e.gc5(e)===A.ip)return new B.d0(e,!1,d,null)
w=this.a
return w.cAP(w.e,d,e)},
$S:443}
C.eIj.prototype={
$2(d,e){var w=B.dr(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
v=this.a
w.fL((1-v.gp(0))*1.5708)
return B.fx(A.A,B.da(e,v.gp(0)),null,w,!0)},
$S:46}
C.eIk.prototype={
$2(d,e){var w=B.dr(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
v=this.a
w.km((1-v.gp(0))*1.5708)
return B.fx(A.A,B.da(e,v.gp(0)),null,w,!0)},
$S:46}
C.eIl.prototype={
$2(d,e){var w=B.dr(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.002
v=this.a
w.fL(v.gp(0)*0.8)
w.km(v.gp(0)*0.35)
return B.fx(A.A,B.da(e,v.gp(0)),null,w,!0)},
$S:46}
C.eIm.prototype={
$2(d,e){var w=B.dr(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.0025
v=this.a
w.fL(-v.gp(0)*1.2)
return B.fx(A.aa,B.da(e,v.gp(0)),null,w,!0)},
$S:46}
C.eIr.prototype={
$2(d,e){var w,v=this,u=v.b,t=u==null
if(!t){w=v.a.gZN().r
w=w!=null&&w.a!=null}else w=!1
if(w){t=v.a
u=t.a.c.r[u]
t=t.gZN().x
t===$&&B.c()
return new C.b3d(u,v.c,t,null)}u=v.a.d
u===$&&B.c()
return new C.JD(v.c,t,!0,new B.bM("cine"+u,x.W))},
$S:707}
C.eIt.prototype={
$1(d){var w=this.a
if(d.b.a>B.aH(this.b,A.c1,x.w).w.a.a*0.55)w.azu()
else w.cp8()},
$S:72}
C.eIs.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.fTF.prototype={
$4(d,e,f,g){var w=this.b
A.d.a8(w)
A.d.v(w,d)
w=this.a
w.a=e
w.b=f
w.c=g},
$S:444}
C.fTO.prototype={
$1(d){var w=null,v=this.a,u=v.r.length,t=u===1?"":"s"
t=B.d("Download a PDF that looks like your slides ("+u+" page"+t+"), or open the print view in your browser.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.75),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return B.eg(B.a([B.bN(!1,A.dn,w,w,!0,w,w,w,new C.fTL(d),w,w),B.bN(!1,D.fUW,w,w,!0,w,w,w,new C.fTM(d,this.b,v),w,w),B.bI(A.aWP,w,new C.fTN(d,v,this.c),w)],x.p),w,w,P.uc,new B.a5(320,w,t,w),w,w,w,w,D.fWt,w)},
$S:18}
C.fTL.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.fTM.prototype={
$0(){var w=0,v=B.j(x.H),u=this
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:B.a6(u.a,!1).O(null)
C.hfY(u.b,u.c.b)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fTN.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:B.a6(u.a,!1).O(null)
t=u.b
w=2
return B.b(C.aRS(t),$async$$0)
case 2:s=e
r=u.c
w=r.e!=null?3:4
break
case 3:w=5
return B.b(C.aRi(r,s,t.b),$async$$0)
case 5:case 4:return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fTE.prototype={
$1(d){return d.a!==this.a.a},
$S:z+2}
C.ckG.prototype={
$2(d,e){var w
if(x.f.b(e)){w=J.t(e,"bundleId")
w=J.k(w==null?"":w)===this.a}else w=!1
return w},
$S:636}
C.fTK.prototype={
$1(d){return d.aj()},
$S:z+14}
C.foW.prototype={
$1(d){return C.hfW(C.X4(B.a3(d,x.N,x.z)),this.a)},
$S:z+96}
C.h1O.prototype={
$3(d,e,f){return A.bM},
$C:"$3",
$R:3,
$S:92}
C.h1P.prototype={
$4(d,e,f,g){var w=A.cw.aA(0,e.gp(0))
return B.da(B.ed(A.A,D.hwU,0.94+w*0.06,null,null),w)},
$S:442}
C.h1Q.prototype={
$1(d){var w=this
return new C.X6(w.a,w.b,w.c,w.d,null)},
$S:z+97}
C.eHX.prototype={
$2(d,e){return d+e.r.length},
$S:z+13}
C.eHT.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.eHW.prototype={
$1(d){var w=this.a,v=w.a,u=v.c
v=v.f
return new C.X7(u,this.b,w.gaQD(),v,null)},
$S:z+99}
C.eHU.prototype={
$0(){return this.a.f=!0},
$S:0}
C.eHV.prototype={
$0(){return this.a.f=!1},
$S:0}
C.eHY.prototype={
$0(){return this.a.f=!0},
$S:0}
C.eHZ.prototype={
$0(){return this.a.f=!1},
$S:0}
C.eI1.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.eI2.prototype={
$0(){var w=this.a
return w.m(new C.eI0(w))},
$S:0}
C.eI0.prototype={
$0(){return this.a.d="one"},
$S:0}
C.eI3.prototype={
$0(){var w=this.a
return w.m(new C.eI_(w))},
$S:0}
C.eI_.prototype={
$0(){return this.a.d="all"},
$S:0}
C.eI4.prototype={
$1(d){return this.a.bNx(d,this.b)},
$S:z+100}
C.eHS.prototype={
$0(){var w=this.a
return w.m(new C.eHR(w,this.b))},
$S:0}
C.eHR.prototype={
$0(){return this.a.e=this.b.a},
$S:0}
C.eI5.prototype={
$0(){var w=this.a,v=this.b
w.d=v.b
w.e=v.a},
$S:0}
C.eI6.prototype={
$0(){return this.a.f="Could not create QR. Check your connection and try again."},
$S:0}
C.eI7.prototype={
$2(d,e){return d+e.r.length},
$S:z+13}
C.eI8.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.eI9.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a.e
s.toString
w=3
return B.b(B.fG(new B.fA(s)),$async$$0)
case 3:s=t.b
if(s.e==null){w=1
break}s.L(x.q).f.U(D.fip)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eBA.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.eBz())},
$S:0}
C.eBz.prototype={
$0(){},
$S:0}
C.eBB.prototype={
$1(d){var w=this.a
if(w.c!=null)w.e.fW()},
$S:7}
C.eBw.prototype={
$1(d){return this.a.m(new C.eBv())},
$S:2}
C.eBv.prototype={
$0(){},
$S:0}
C.eBx.prototype={
$1(d){return this.a.b1M()},
$S:2}
C.eBy.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.eIb.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(t.d.qt(),$async$$0)
case 2:if(t.c!=null)t.m(new C.eIa(t))
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.eIa.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.fNW.prototype={
$1(d){var w=null,v=this.a,u=v.a
return B.ap(w,new B.em(new B.k1(this.c,new C.fNV(),w,w,x.ex),this.b),v.b,w,0,w,0,u)},
$S:227}
C.fNV.prototype={
$3(d,e,f){return new C.JD(e,!1,!1,new B.bM(e.a,x.W))},
$S:z+102}
C.fNX.prototype={
$1(d){var w=null
return B.oL(!1,B.at(new C.bxt(this.a,this.b,w),w,w,w),w,x.z)},
$S:322}
C.fO0.prototype={
$0(){var w=0,v=B.j(x.cc),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.aW.gmS(),$async$$0)
case 3:w=4
return B.b(B.bQ(A.ma,null,x.H),$async$$0)
case 4:w=5
return B.b($.aW.gmS(),$async$$0)
case 5:s=$.aW.ap$.x.h(0,t.a)
r=s==null?null:s.gbg()
if(!(r instanceof B.qj))throw B.W("Could not draw the slide.")
u=r.md(1)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1731}
C.fO1.prototype={
boq(d){var w=0,v=B.j(x.fS),u,t,s,r
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(d.hs(A.hg),$async$$1)
case 3:r=f
if(r==null)throw B.W("Could not read the slide picture.")
t=(self.URL||self.webkitURL).createObjectURL(B.hK([J.eT(A.dN.gaU(r))],"image/png"))
t.toString
s=Ao.h6i(t)
w=4
return B.b(new B.qq(s,"load",!1,x.ev).gH(0).dh(0,A.jY),$async$$1)
case 4:(self.URL||self.webkitURL).revokeObjectURL(t)
u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$1(d){return this.boq(d)},
$S:1732}
C.fNY.prototype={
$1(d){var w,v=x.bu.a(d).data
if(v!=null){w=v.size
w.toString
w=w>0}else w=!1
if(w)this.a.push(v)},
$S:159}
C.fNZ.prototype={
$1(d){var w=this.a
if((w.a.a&30)===0)w.h_(0)},
$S:159}
C.fO_.prototype={
$0(){return(self.URL||self.webkitURL).revokeObjectURL(this.a)},
$S:0}
C.fiR.prototype={
$3(d,e,f){var w=null
return B.d(e,w,w,w,w,w,w,D.ft1,A.K,w,w)},
$S:1733}
C.fiS.prototype={
$3(d,e,f){var w=null,v=B.m(99)
return B.by(v,B.kn(A.bp,w,A.dK,8,w,e===0?w:e,w),A.aq)},
$S:651}
C.epQ.prototype={
$1(d){this.a.a01()
return null},
$S:11}
C.epO.prototype={
$0(){return this.a.e=D.bzN},
$S:0}
C.epP.prototype={
$0(){var w=this.a.a
if(w.a<0)w=A.bE
return this.b.e=w},
$S:0}
C.coW.prototype={
$1(d){return A.o.dw(1,d.a)},
$S:z+103}
C.coX.prototype={
$2(d,e){return(d|e)>>>0},
$S:61};(function aliases(){var w=C.aNL.prototype
w.bzB=w.t
w=C.aNf.prototype
w.bz4=w.t
w=C.aN0.prototype
w.byP=w.t
w=C.aNe.prototype
w.bz3=w.t
w=C.aNJ.prototype
w.bzz=w.t
w=C.aP2.prototype
w.bB3=w.t
w=C.aLW.prototype
w.bxH=w.t
w=C.aNW.prototype
w.bzM=w.t
w=C.aNX.prototype
w.bzN=w.t
w=C.b4V.prototype
w.bub=w.aF0})();(function installTearOffs(){var w=a._static_0,v=a._instance_0u,u=a._instance_1u,t=a._static_1,s=a.installStaticTearOff
w(C,"ioN","aoT",104)
v(C.aKS.prototype,"gc8x","ZU",0)
var r
u(r=C.azo.prototype,"gcCg","cCh",38)
v(r,"gc9m","aeA",0)
v(r=C.azk.prototype,"gb08","EB",3)
v(r,"gc9j","c9k",3)
v(r,"gayA","yp",0)
v(r,"gaAD","JP",0)
t(C,"ipK","hUn",105)
v(C.aFv.prototype,"gccn","cco",3)
s(C,"ipV",0,null,["$4$paper$photo$request$template"],["fV4"],106,0)
s(C,"ipU",0,null,["$5$doc$history$instruction$photo$template"],["bEC"],107,0)
v(r=C.aFM.prototype,"gcd6","Ju",0)
v(r,"gbN_","XH",0)
v(r,"gcd9","afs",0)
v(r,"gcd8","a_O",0)
v(r,"gb1r","ES",0)
v(C.aFP.prototype,"gcde","a_Q",0)
v(r=C.aHd.prototype,"gb1E","Qz",0)
v(r,"gcu0","b60",3)
v(r,"gcDE","aDa",86)
v(r,"gbQV","abi",0)
v(r,"gcdF","B3",0)
v(r=C.aJ8.prototype,"gcnS","a1b",0)
v(r,"gco_","a1e",0)
v(r,"gbFQ","a9H",0)
v(r,"gcdJ","afE",0)
v(C.aJ7.prototype,"gcdK","afF",0)
v(C.aDb.prototype,"gbEP","a9u",0)
v(C.aBy.prototype,"gcdL","a00",0)
w(C,"iq7","inu",12)
w(C,"iq5","ikn",12)
w(C,"iq6","ims",12)
v(r=C.aG5.prototype,"gcGY","cGZ",3)
v(r,"gcsf","csg",3)
u(r,"gEY","ago",7)
v(r,"gbKD","atv",3)
u(r,"gEZ","b30",7)
v(r,"gcg0","ag5",0)
v(r,"gceS","ag4",0)
v(r,"gcib","agp",0)
v(r,"gbMX","aaQ",0)
v(r,"gcj5","a0C",0)
v(r,"gcj6","agG",0)
v(r,"gcjD","agN",0)
v(r,"gcio","ags",0)
v(r,"gbR6","abm",0)
v(r,"gaUh","aUi",3)
v(r,"gaTn","aTo",3)
v(r,"gaOU","aOV",3)
v(r,"gaTm","aum",3)
u(r,"gbF5","bF6",80)
v(r,"gaCH","b9c",3)
v(r,"gceU","ceV",3)
v(r,"gc1t","c1u",3)
v(r,"gbPp","bPq",3)
v(r=C.aG8.prototype,"gcFK","cFL",3)
v(r,"gcFn","cFo",3)
t(C,"iq8","inL",2)
v(r=C.aG6.prototype,"gcdR","Jz",0)
v(r,"gcw2","S4",0)
v(r,"gcdO","Jy",0)
v(r,"gcIh","a3L",0)
v(r,"gcjP","agU",0)
v(C.aG4.prototype,"gcdS","b1M",3)
v(r=C.aG7.prototype,"gbRX","abw",0)
u(r,"gcdP","cdQ",101)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(B.aE,[C.oj,C.SO,C.bKe,C.bIw,C.cGb,C.cG9,C.bSu,C.baD,C.cGa,C.bH5,C.coQ,C.coO,C.coP,C.coN,C.auo,C.coM,C.bTw,C.oK,C.aGH,C.jC,C.o5,C.a8V,C.Ab,C.lx,C.oU,C.mq,C.Ac,C.o9,C.a92,C.asJ,C.b3e,C.epf,C.lu,C.Fs,C.ew,C.jb,C.Fj,C.ya,C.eP,C.m0,C.i3,C.jY,C.a93,C.age,C.b3f,C.b4V,C.a45])
u(B.jw,[C.cOc,C.c3t,C.fJ6,C.cPJ,C.cP5,C.fOE,C.e7w,C.e7v,C.epT,C.epS,C.fQ2,C.fq7,C.fq8,C.ciV,C.ciW,C.ciX,C.etx,C.f1E,C.f11,C.f10,C.f24,C.f1C,C.f1v,C.f1O,C.f2u,C.fye,C.f8O,C.f8N,C.f9g,C.epi,C.fTB,C.e2K,C.h_m,C.fQp,C.cky,C.ckw,C.ckB,C.fQU,C.fQV,C.fQW,C.fQX,C.cki,C.ckj,C.dPU,C.ckf,C.fQT,C.fgd,C.e0s,C.ck8,C.eoZ,C.fOt,C.eFa,C.eFz,C.eFw,C.eFv,C.eFG,C.eFF,C.eHa,C.eH9,C.eFp,C.eFo,C.eBZ,C.eD8,C.eG7,C.eHs,C.eHr,C.eCW,C.eE6,C.eBG,C.d9Y,C.eIn,C.eIo,C.eIj,C.eIk,C.eIl,C.eIm,C.eIr,C.ckG,C.eHX,C.eI7,C.coX])
u(B.ht,[C.cOd,C.cOe,C.bTx,C.fFW,C.c3s,C.c3v,C.fWQ,C.fhn,C.fhe,C.fhu,C.foX,C.foY,C.fJ7,C.fJ5,C.fWi,C.fFA,C.fXb,C.cPz,C.cPE,C.cPG,C.cPC,C.cPH,C.cPA,C.cPI,C.cPv,C.cPs,C.cPr,C.cPy,C.cP0,C.cOZ,C.fNG,C.fNH,C.fti,C.fOF,C.fOL,C.fsj,C.cfe,C.fNE,C.fNF,C.fIu,C.fIv,C.fOK,C.fOG,C.fOI,C.fOJ,C.fOH,C.h_E,C.fIy,C.fIz,C.fIC,C.fID,C.fIG,C.fIH,C.h16,C.fqA,C.h1h,C.esQ,C.esR,C.esS,C.esy,C.esK,C.esL,C.esN,C.ciU,C.ciS,C.ciT,C.fOk,C.fOm,C.fOl,C.fq9,C.fqa,C.h1k,C.etC,C.etD,C.etu,C.etv,C.ety,C.etz,C.h1A,C.f2v,C.f1V,C.f1F,C.f1S,C.f0X,C.f0Y,C.f0Z,C.f12,C.f13,C.f2k,C.f2r,C.f2t,C.f23,C.f25,C.f29,C.f2a,C.f2b,C.f2f,C.f26,C.f27,C.f1e,C.f1f,C.f1g,C.f1h,C.f1i,C.f1j,C.f1k,C.f1l,C.f1m,C.f0A,C.f0B,C.f0C,C.f0D,C.f0F,C.f0G,C.f18,C.f19,C.f1a,C.f1b,C.f1c,C.f0K,C.f0L,C.f0M,C.f0N,C.f1u,C.f1N,C.fLJ,C.fLI,C.ckp,C.fyd,C.fTx,C.fTq,C.fTt,C.fRo,C.fRp,C.fRq,C.fLQ,C.fLP,C.fLO,C.fLM,C.fq3,C.fq4,C.fq5,C.h1M,C.f8Q,C.f8R,C.f8K,C.f8E,C.f99,C.f9a,C.f9c,C.f9d,C.f98,C.h1L,C.f8v,C.fxu,C.eph,C.fTz,C.fTA,C.fTC,C.fTv,C.fTw,C.h0Z,C.dsp,C.dsv,C.epg,C.fmb,C.fmd,C.fmc,C.fma,C.fMU,C.fMW,C.fop,C.fT1,C.fT2,C.fT3,C.fTe,C.fTj,C.fTk,C.fTl,C.fTm,C.fTn,C.fTo,C.fTp,C.fT4,C.fT5,C.fT6,C.fT7,C.fT8,C.fT9,C.fTa,C.fTb,C.fTc,C.fTd,C.fTf,C.fTg,C.fTh,C.fTi,C.fKK,C.fwN,C.fwM,C.fTI,C.e2L,C.e2J,C.f7E,C.ceQ,C.ceS,C.h_o,C.dhJ,C.dhL,C.h_n,C.h_l,C.h1K,C.fQl,C.dhj,C.fIK,C.fIL,C.ckn,C.cko,C.ckm,C.ckc,C.ckd,C.ck9,C.cka,C.ckb,C.ckE,C.ckz,C.cku,C.ckv,C.ckx,C.ckA,C.ckC,C.fQY,C.ckh,C.ckk,C.ckl,C.ckr,C.cks,C.fTP,C.fSW,C.ckg,C.cke,C.fQS,C.fzw,C.ck7,C.f58,C.fCD,C.eHO,C.eEd,C.eEe,C.eFO,C.eFC,C.eFD,C.eDB,C.eHz,C.eHA,C.eHB,C.eD_,C.eFh,C.eFj,C.eEU,C.eER,C.eE9,C.eEa,C.eF0,C.eD1,C.eFc,C.eFd,C.eFb,C.eFf,C.eFe,C.eFx,C.eFy,C.eFA,C.eFt,C.eDk,C.eDh,C.eFH,C.eD9,C.eHy,C.eBI,C.eDc,C.eDb,C.eCq,C.eCv,C.eCt,C.eCr,C.eHG,C.eHH,C.eHI,C.eHF,C.eHc,C.eHb,C.eH5,C.eH7,C.eGY,C.eHw,C.eHu,C.eBQ,C.eBM,C.eE7,C.eCz,C.eC0,C.eC_,C.eCm,C.eCn,C.eDz,C.eCB,C.eCF,C.eFq,C.eGZ,C.eH_,C.eH0,C.eH1,C.eD3,C.eD4,C.eD5,C.eEA,C.eDv,C.eDn,C.eDu,C.eEK,C.eEL,C.eGx,C.eGz,C.eGT,C.eGV,C.eGA,C.eGB,C.eCx,C.eEc,C.eEb,C.eHm,C.eCV,C.eCN,C.eCO,C.eCR,C.eCS,C.eEP,C.eDT,C.eDU,C.eDV,C.eDW,C.eDX,C.eDY,C.eDZ,C.eE_,C.eE0,C.eE1,C.eE2,C.eFL,C.d9V,C.d9W,C.eIt,C.fTF,C.fTO,C.fTE,C.fTK,C.foW,C.h1O,C.h1P,C.h1Q,C.eHW,C.eI4,C.eBB,C.eBw,C.eBx,C.fNW,C.fNV,C.fNX,C.fO1,C.fNY,C.fNZ,C.fiR,C.fiS,C.epQ,C.coW])
u(B.iJ,[C.cOf,C.fhj,C.fho,C.fhp,C.fhk,C.fhl,C.fhm,C.fhc,C.fhd,C.fhf,C.fhg,C.fht,C.fhs,C.fhi,C.fhh,C.fhq,C.fhr,C.fhw,C.fhx,C.fhv,C.cPB,C.cPF,C.cPD,C.cPt,C.cPu,C.cPw,C.cPp,C.cPq,C.cPx,C.cPo,C.cPn,C.cPm,C.cOQ,C.cOP,C.cOS,C.cP_,C.cOT,C.cOR,C.cOV,C.cOW,C.cOX,C.cOU,C.cOY,C.cP1,C.cP2,C.cP3,C.cP4,C.fIs,C.fIt,C.fIq,C.fIr,C.el6,C.el4,C.el5,C.el7,C.el8,C.e7u,C.fIw,C.fIx,C.fIA,C.fIB,C.fIE,C.fIF,C.epR,C.fQs,C.fQr,C.esP,C.esO,C.ess,C.eso,C.esz,C.esA,C.esB,C.esu,C.esv,C.esw,C.esx,C.est,C.esq,C.esr,C.esH,C.esI,C.esG,C.esJ,C.esF,C.esE,C.esD,C.esM,C.esC,C.esp,C.etB,C.etp,C.etq,C.etw,C.etr,C.ett,C.ets,C.etA,C.f1n,C.f1L,C.f16,C.f17,C.f14,C.f15,C.f1R,C.f1Q,C.f1P,C.f1U,C.f1T,C.f0W,C.f1_,C.f0V,C.f0U,C.f0R,C.f0T,C.f0S,C.f2s,C.f2l,C.f2j,C.f2m,C.f2i,C.f2n,C.f2h,C.f2o,C.f2p,C.f2q,C.f2g,C.f22,C.f1Y,C.f28,C.f21,C.f2c,C.f20,C.f2d,C.f2_,C.f2e,C.f1Z,C.f1I,C.f1H,C.f1J,C.f1G,C.f1K,C.f1A,C.f1z,C.f1B,C.f1y,C.f1x,C.f1w,C.f0E,C.f0z,C.f0O,C.f0J,C.f0P,C.f0I,C.f0Q,C.f0H,C.f1D,C.f1r,C.f1q,C.f1s,C.f1p,C.f1t,C.f1o,C.f1M,C.f1X,C.f1W,C.f1d,C.fTs,C.fTu,C.fTy,C.fLN,C.fOd,C.fOb,C.fOc,C.f8S,C.f8T,C.f8P,C.f8J,C.f8I,C.f8L,C.f8M,C.f8y,C.f8z,C.f8B,C.f8C,C.f8D,C.f8A,C.f8F,C.f95,C.f96,C.f94,C.f97,C.f93,C.f92,C.f91,C.f9b,C.f90,C.f9_,C.f8Z,C.f9e,C.f8Y,C.f9f,C.f8X,C.f8W,C.f8G,C.f8H,C.f8V,C.f8U,C.f8r,C.f8s,C.f8t,C.f8u,C.f8q,C.f8w,C.f8x,C.dso,C.dsq,C.dst,C.dsu,C.dss,C.dsr,C.fMV,C.fKL,C.ceR,C.ceT,C.dhC,C.dhH,C.dhI,C.dhG,C.dhF,C.dhK,C.dhE,C.dhD,C.dhM,C.h_k,C.doq,C.dor,C.dos,C.fII,C.fIJ,C.ckF,C.eBC,C.eBD,C.eBE,C.eBF,C.fzu,C.fzv,C.e0u,C.e0t,C.dew,C.dev,C.eHQ,C.eHP,C.eEf,C.eGW,C.eHM,C.eFM,C.eHC,C.eHD,C.eHN,C.eEV,C.eCY,C.eCZ,C.eFi,C.eET,C.eEQ,C.eES,C.eEW,C.eEX,C.eEY,C.eEZ,C.eF_,C.eF1,C.eD2,C.eF4,C.eF5,C.eF6,C.eF7,C.eF8,C.eF9,C.eF3,C.eFg,C.eFu,C.eFs,C.eFB,C.eF2,C.eDi,C.eDj,C.eDl,C.eFE,C.eFI,C.eBX,C.eDg,C.eDe,C.eFQ,C.eDa,C.eFP,C.eD0,C.eDC,C.eHx,C.eGX,C.eBY,C.eBV,C.eBL,C.eBH,C.eBJ,C.eDd,C.eCp,C.eCu,C.eCs,C.eCo,C.eFr,C.eHJ,C.eH8,C.eH3,C.eH4,C.eH6,C.eE5,C.eE4,C.eHv,C.eBO,C.eBP,C.eBR,C.eBS,C.eBW,C.eBN,C.eFN,C.eHE,C.eE8,C.eCy,C.eBK,C.eDA,C.eBT,C.eC1,C.eC2,C.eC3,C.eCe,C.eCh,C.eCi,C.eCj,C.eCk,C.eCl,C.eC4,C.eC5,C.eC6,C.eC7,C.eC8,C.eC9,C.eCa,C.eCb,C.eCc,C.eCd,C.eCf,C.eCg,C.eDy,C.eDx,C.eDw,C.eBU,C.eCC,C.eCA,C.eCD,C.eCE,C.eDf,C.eFm,C.eFn,C.eFk,C.eFl,C.eH2,C.eD7,C.eD6,C.eEz,C.eEy,C.eEB,C.eEx,C.eEC,C.eEw,C.eED,C.eEv,C.eEE,C.eEu,C.eEF,C.eEt,C.eEG,C.eEs,C.eEH,C.eEr,C.eEk,C.eEl,C.eEm,C.eEj,C.eEn,C.eEi,C.eEo,C.eEh,C.eEp,C.eEg,C.eEq,C.eDs,C.eDt,C.eDm,C.eDo,C.eDp,C.eDq,C.eDr,C.eHK,C.eHL,C.eEJ,C.eEI,C.eEM,C.eG8,C.eG9,C.eGa,C.eGl,C.eGw,C.eGH,C.eGO,C.eGP,C.eGQ,C.eGR,C.eGS,C.eGb,C.eGc,C.eGd,C.eGe,C.eGf,C.eGg,C.eGh,C.eGi,C.eGj,C.eGk,C.eGm,C.eGn,C.eGo,C.eGp,C.eGq,C.eGr,C.eGs,C.eGt,C.eGu,C.eFZ,C.eGv,C.eG6,C.eG5,C.eGy,C.eG4,C.eFV,C.eGU,C.eG3,C.eFU,C.eFS,C.eG2,C.eFT,C.eFR,C.eGC,C.eG1,C.eGD,C.eGE,C.eGF,C.eGG,C.eG0,C.eGI,C.eGJ,C.eGK,C.eG_,C.eGL,C.eFY,C.eGM,C.eFX,C.eGN,C.eFW,C.eCw,C.eHf,C.eHe,C.eHg,C.eHd,C.eDF,C.eDE,C.eDG,C.eDD,C.eHq,C.eHl,C.eHp,C.eHh,C.eHi,C.eHj,C.eHk,C.eHn,C.eHo,C.eHt,C.eCX,C.eCK,C.eCL,C.eCM,C.eCJ,C.eCQ,C.eCP,C.eCI,C.eCH,C.eCT,C.eCG,C.eCU,C.eEO,C.eEN,C.eDS,C.eDR,C.eDQ,C.eDP,C.eDO,C.eDN,C.eDM,C.eDL,C.eDI,C.eDK,C.eDJ,C.eDH,C.eE3,C.eFJ,C.eFK,C.d9X,C.dal,C.dam,C.d9R,C.d9Q,C.d9U,C.d9S,C.d9T,C.eIq,C.eIg,C.eIp,C.eIh,C.eIi,C.eIc,C.eId,C.eIe,C.eIf,C.eIs,C.fTL,C.fTM,C.fTN,C.eHT,C.eHU,C.eHV,C.eHY,C.eHZ,C.eI1,C.eI2,C.eI0,C.eI3,C.eI_,C.eHS,C.eHR,C.eI5,C.eI6,C.eI8,C.eI9,C.eBA,C.eBz,C.eBv,C.eBy,C.eIb,C.eIa,C.fO0,C.fO_,C.epO,C.epP])
t(C.aTg,B.M)
u(B.lD,[C.a4O,C.ayQ,C.axu,C.y8,C.yb,C.la,C.tN,C.C9,C.rV,C.ww,C.atg,C.JE,C.asI,C.vd,C.mT,C.hF,C.a9G])
u(C.bSu,[C.cGc,C.bSv])
u(C.coQ,[C.coU,C.aun])
t(C.coT,C.coO)
t(C.coS,C.coN)
t(C.coV,C.coS)
t(C.coR,C.coP)
t(C.coL,C.coM)
t(C.czi,B.awX)
t(C.a9s,B.xW)
u(B.af,[C.a25,C.ZN,C.ZL,C.arP,C.WV,C.WW,C.a14,C.a1B,C.a1A,C.aFG,C.a_Y,C.Ok,C.a_v,C.a_Q,C.apK,C.aKx,C.Wc,C.aBd,C.a8L,C.OO,C.aAA,C.KF,C.a0H,C.X6,C.X7,C.aG3,C.asN,C.a8M])
u(B.ah,[C.aKS,C.azo,C.azk,C.aFv,C.aFM,C.aFP,C.aHd,C.aJ8,C.aJ7,C.aNL,C.aDb,C.aNf,C.aBy,C.bid,C.aN0,C.aP2,C.aNe,C.bg0,C.aNJ,C.aNW,C.aLW,C.beM,C.aNX,C.aG6,C.bmH,C.aG4,C.aG7,C.bmq])
u(B.ax,[C.azm,C.aem,C.adL,C.blr,C.aep,C.ag4,C.b2Q,C.bv2,C.b3a,C.bnY,C.btz,C.b14,C.b3d,C.aes,C.aeJ,C.b3b,C.JD,C.b17,C.bf1,C.Qx,C.KL,C.bjN,C.bjM,C.bxt])
u(B.I4,[C.bet,C.bwr,C.aLe,C.bhd,C.btY])
u(B.mk,[C.bes,C.baW,C.btV,C.be0,C.bhC,C.bjU,C.bgH,C.bhy,C.bhf,C.bqj,C.bc4,C.bbI,C.bxp,C.bun,C.btv,C.bgA,C.b38,C.bsp,C.bts])
t(C.bmn,C.aNL)
t(C.blJ,C.aNf)
t(C.blt,C.aN0)
t(C.bwU,C.aP2)
t(C.blF,C.aNe)
t(C.bml,C.aNJ)
t(C.bzM,C.aNW)
t(C.aG5,C.bzM)
t(C.beN,C.aLW)
t(C.aG8,C.aNX)
t(C.bxf,B.j2)
t(C.a9F,B.kH)
t(C.coY,C.b4V)
t(C.ajn,C.a45)
u(B.YM,[C.aT6,C.aUA])
t(C.ayq,C.aT6)
w(C.aNL,B.cc)
w(C.aNf,B.cc)
w(C.aN0,B.cc)
w(C.aNe,B.cc)
w(C.aNJ,B.cc)
w(C.aP2,B.cc)
w(C.aLW,B.eQ)
w(C.aNW,B.cc)
v(C.bzM,B.eB)
w(C.aNX,B.cc)})()
B.iT(b.typeUniverse,JSON.parse('{"aTS":{"hM":["aTS"]},"oj":{"aTS":[],"hM":["aTS"]},"aTg":{"M":["SO"],"M.E":"SO"},"a9s":{"xW":[],"oD":[]},"a25":{"af":[],"v":[]},"aKS":{"ah":["a25"]},"ZN":{"af":[],"v":[]},"ZL":{"af":[],"v":[]},"azo":{"ah":["ZN"]},"azk":{"ah":["ZL"]},"azm":{"ax":[],"v":[]},"arP":{"af":[],"v":[]},"aFv":{"ah":["arP"]},"aem":{"ax":[],"v":[]},"adL":{"ax":[],"v":[]},"aep":{"ax":[],"v":[]},"ag4":{"ax":[],"v":[]},"blr":{"ax":[],"v":[]},"WV":{"af":[],"v":[]},"aFM":{"ah":["WV"]},"b2Q":{"ax":[],"v":[]},"bet":{"aC":[]},"bes":{"aC":[]},"bwr":{"aC":[]},"baW":{"aC":[]},"btV":{"aC":[]},"WW":{"af":[],"v":[]},"aFP":{"ah":["WW"]},"be0":{"aC":[]},"a14":{"af":[],"v":[]},"aHd":{"ah":["a14"]},"bhC":{"aC":[]},"a1B":{"af":[],"v":[]},"a1A":{"af":[],"v":[]},"aFG":{"af":[],"v":[]},"a_Y":{"af":[],"v":[]},"aJ8":{"ah":["a1B"]},"aJ7":{"ah":["a1A"]},"bmn":{"ah":["aFG"]},"bjU":{"aC":[]},"aDb":{"ah":["a_Y"]},"bv2":{"ax":[],"v":[]},"b3a":{"ax":[],"v":[]},"bnY":{"ax":[],"v":[]},"Ok":{"af":[],"v":[]},"a_v":{"af":[],"v":[]},"blJ":{"ah":["Ok"]},"btz":{"ax":[],"v":[]},"bgH":{"aC":[]},"b14":{"ax":[],"v":[]},"aBy":{"ah":["a_v"]},"a_Q":{"af":[],"v":[]},"bid":{"ah":["a_Q"]},"bhy":{"aC":[]},"bhf":{"aC":[]},"bqj":{"aC":[]},"bc4":{"aC":[]},"bbI":{"aC":[]},"bxp":{"aC":[]},"bun":{"aC":[]},"btv":{"aC":[]},"bgA":{"aC":[]},"apK":{"af":[],"v":[]},"b3d":{"ax":[],"v":[]},"blt":{"ah":["apK"]},"aes":{"ax":[],"v":[]},"aeJ":{"ax":[],"v":[]},"aKx":{"af":[],"v":[]},"Wc":{"af":[],"v":[]},"JD":{"ax":[],"v":[]},"aBd":{"af":[],"v":[]},"a8L":{"af":[],"v":[]},"b3b":{"ax":[],"v":[]},"b38":{"aC":[]},"bwU":{"ah":["aKx"]},"aLe":{"aC":[]},"blF":{"ah":["Wc"]},"bg0":{"ah":["aBd"]},"bml":{"ah":["a8L"]},"b17":{"ax":[],"v":[]},"bhd":{"aC":[]},"bsp":{"aC":[]},"bts":{"aC":[]},"aAA":{"af":[],"v":[]},"KF":{"af":[],"v":[]},"a0H":{"af":[],"v":[]},"KL":{"ax":[],"v":[]},"OO":{"af":[],"v":[]},"aG5":{"ah":["OO"],"eB":[]},"beN":{"ah":["aAA"]},"bf1":{"ax":[],"v":[]},"beM":{"ah":["KF"]},"Qx":{"ax":[],"v":[]},"aG8":{"ah":["a0H"]},"btY":{"aC":[]},"bjN":{"ax":[],"v":[]},"bjM":{"ax":[],"v":[]},"X6":{"af":[],"v":[]},"X7":{"af":[],"v":[]},"aG3":{"af":[],"v":[]},"asN":{"af":[],"v":[]},"aG6":{"ah":["X6"]},"bmH":{"ah":["X7"]},"aG4":{"ah":["aG3"]},"bxf":{"j2":[]},"aG7":{"ah":["asN"]},"bxt":{"ax":[],"v":[]},"a8M":{"af":[],"v":[]},"bmq":{"ah":["a8M"]},"a9F":{"kH":["fw<eW>"],"ku":["fw<eW>"]},"ajn":{"a45":[]},"aT6":{"jf":[],"fi":[]},"ayq":{"jf":[],"fi":[]},"aUA":{"jf":[],"fi":[]}}'))
var y={z:"Amri ya kifalme \xb7 bendi za muhuri juu na chini.",L:"Kichwa cha Mtu: Dollar elfu ishirini ($20,000)",f:"Mimi [Jina la Baba wa Binti], wa jamaa ya [Jina la Jamii ya Binti], Nyumba ya [Jina la Nyumba ya Binti]. Nimehowesha binti wangu aitwaye [Jina la Binti], na ndugu [Jina la Kijana], wa jamaa ya [Jina la Jamii ya Mume], Nyumba ya [Jina la Nyumba ya Mume], kijana wa [Jina la Baba wa Mume]. Makubaliano haya yanathibitishwa rasmi na pande zote mbili ili kuweka kumbukumbu na kuimarisha uhusiano mwema kati ya familia zote mbili.",O:"Mimi [Jina la Baba wa Mume], wa jamaa ya [Jina la Jamii ya Mume], Nyumba ya [Jina la Nyumba ya Mume]. Nimetowa mahali ya kuhoweya kijana wangu aitwaye [Jina la Kijana] na [Jina la Binti], binti wa [Jina la Baba wa Binti], wa jamaa ya [Jina la Jamii ya Binti], Nyumba ya [Jina la Nyumba ya Binti]. Makubaliano haya yanathibitishwa rasmi na pande zote mbili ili kuweka kumbukumbu na kuimarisha uhusiano mwema kati ya familia zote mbili.",s:"Mpaka mwembamba wa dhahabu \xb7 vichwa vya bluu ya kifalme.",Q:"Mpaka mwembamba wa dhahabu \xb7 vichwa vya dhahabu.",H:"Nguo ya kente yenye dirisha la karatasi katikati.",n:"Nguo ya udongo yenye alama \xb7 karatasi ndani.",M:'PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".',S:"The AI sent something I could not read. Try again.",g:"Your story appears here. Add a picture, then ask the AI to write it."}
var x=(function rtii(){var w=B.as
return{bu:w("Mw"),U:w("w_<qm>"),bz:w("u"),M:w("de<n>"),bo:w("jS"),g7:w("Ua"),gc:w("aB<iF?>"),bq:w("aB<~>"),cc:w("C1"),fS:w("EF"),an:w("IO"),bm:w("O<SO>"),X:w("O<SR>"),f3:w("O<aTS>"),aK:w("O<nr>"),V:w("O<ac>"),O:w("O<u>"),fA:w("O<lS>"),d5:w("O<aB<bB<G,+icon3d,picture(n?,n?)>>>"),bH:w("O<aB<dK>>"),fG:w("O<aB<~>>"),aF:w("O<nz>"),cd:w("O<ai<jC>>"),ez:w("O<a8<n,aE>>"),d:w("O<a8<n,@>>"),B:w("O<mP>"),h:w("O<jC>"),gE:w("O<Ab>"),k:w("O<oK>"),g:w("O<m0>"),D:w("O<i3>"),u:w("O<eP>"),m:w("O<vd>"),i:w("O<hF>"),aC:w("O<a92>"),o:w("O<Ac>"),e3:w("O<aE>"),dN:w("O<o>"),v:w("O<fT>"),cR:w("O<j0>"),J:w("O<jr>"),gx:w("O<pA<n>>"),f2:w("O<+(a0,n)>"),L:w("O<+(n,n)>"),aD:w("O<+data,mimeType(n,n)>"),G:w("O<+(F,F)>"),ek:w("O<+(G,n)>"),n:w("O<+(G,G)>"),r:w("O<cU>"),s:w("O<n>"),aS:w("O<j2>"),p:w("O<v>"),eR:w("O<fi>"),fT:w("O<baD>"),bx:w("O<aGH>"),gz:w("O<age>"),x:w("O<F>"),t:w("O<G>"),dS:w("O<aC?>"),bA:w("O<o?>"),Z:w("O<G?>"),cA:w("O<ci>"),A:w("cw<ah<af>>"),gL:w("ai<oK>"),R:w("ai<i3>"),j:w("ai<@>"),bW:w("ai<G>"),e:w("bB<G,+icon3d,picture(n?,n?)>"),P:w("a8<n,@>"),f:w("a8<@,@>"),gI:w("a8<G,+icon3d,picture(n?,n?)>"),bR:w("N<hF,v>"),eC:w("N<o9,n>"),cT:w("N<jY,D>"),dv:w("N<n,n>"),f0:w("N<n,v>"),gN:w("N<G,q4>"),gh:w("N<mT,jE<mT>>"),w:w("iC"),ei:w("iF"),g2:w("rL"),fB:w("Fj"),b6:w("Ab"),gX:w("a8V"),dt:w("lx"),ea:w("oK"),bt:w("m0"),I:w("i3"),F:w("eP"),fO:w("mT"),ff:w("vd"),fP:w("hF"),Q:w("ww"),dO:w("asJ"),a:w("ct"),C:w("aE"),dw:w("auo"),di:w("a9G"),Y:w("eW"),fz:w("+(n,n)"),dL:w("+(G,G)"),eb:w("+claimCode,qrPayload(n?,n)"),aH:w("+icon3d,picture(n?,n?)"),cz:w("FP"),dB:w("ds<o>"),bJ:w("ds<n>"),_:w("e0<n>"),N:w("n"),fw:w("qm"),bO:w("au"),K:w("br<o>"),b:w("br<F>"),E:w("dK"),W:w("bM<n>"),ac:w("bM<G>"),ex:w("k1<m0>"),cI:w("k1<n>"),cl:w("k1<F>"),b4:w("Y<lu>"),a8:w("Y<mq>"),fR:w("Y<+(n,n)>"),co:w("e9<o>"),l:w("v"),b2:w("c2<~>"),ev:w("qq<e_>"),dT:w("bk<~>"),q:w("mz"),y:w("P"),gR:w("F"),z:w("@"),S:w("G"),at:w("bd?"),gw:w("ai<a8<n,@>>?"),aT:w("ai<i3>?"),c:w("ai<@>?"),aP:w("iF?"),af:w("i3?"),go:w("b3f?"),a6:w("a93?"),cK:w("aE?"),bZ:w("+bytes,dataUrl,fileName(dK,n,n)?"),gl:w("+claimCode,qrPayload,token(n?,n,n)?"),T:w("n?"),dd:w("dK?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.b1K=new B.bL(A.aA,null,null,H.as7,null)
D.b1T=new B.d9(0,-0.15)
D.b1V=new B.d9(0.62,0)
D.b1Y=new B.d9(-0.35,-0.45)
D.b28=new B.d9(0.9,-0.85)
D.b4j=new B.be(H.Uo,H.Uo,A.fK,A.fK)
D.b4z=new B.ay(A.b8,1,A.r,-1)
D.bqi=new B.u(1,0.4196078431372549,0.2901960784313726,0.2,A.q)
D.b4L=new B.ay(D.bqi,1,A.r,-1)
D.b4X=new B.ay(A.aE,1.5,A.r,-1)
D.b51=new B.ay(A.b8,1.6,A.r,-1)
D.b5h=new B.ay(A.aE,1.4,A.r,-1)
D.b6E=new B.p(null,null,null,null,null,K.I4,A.a7)
D.c7y=new B.a9(A.a6,A.aa,A.x,G.a5P,null,null)
D.b6M=new B.p(null,null,null,null,null,D.c7y,A.a7)
D.aeo=new B.p(A.as,null,null,A.tP,null,null,A.n)
D.bj7=new B.u(1,0.16862745098039217,0.22745098039215686,0.3333333333333333,A.q)
D.bqf=new B.u(1,0.0392156862745098,0.058823529411764705,0.10196078431372549,A.q)
D.d6g=w([D.bj7,D.bqf],x.O)
D.eyY=new B.c_(A.A,0.5,A.x,null,0,D.d6g,null,null)
D.b74=new B.p(null,null,null,null,null,D.eyY,A.a7)
D.Z6=new B.u(1,0.054901960784313725,0.08235294117647059,0.14901960784313725,A.q)
D.b5x=new B.bF(Q.vP,A.a1,A.a1,A.a1)
D.b76=new B.p(D.Z6,null,D.b5x,null,null,null,A.n)
D.c9g=new B.a9(A.a6,A.aa,A.x,A.S2,null,null)
D.b7d=new B.p(null,null,null,null,null,D.c9g,A.a7)
D.ag0=new B.u(1,0.058823529411764705,0.058823529411764705,0.0784313725490196,A.q)
D.b7g=new B.p(D.ag0,null,null,A.rk,null,null,A.n)
D.b7k=new B.p(A.jW,null,null,null,null,null,A.a7)
D.b7n=new B.p(A2.ahh,null,H.ae0,A.mE,null,null,A.n)
D.Fj=new B.p(A.dJ,null,null,null,null,null,A.a7)
D.b7u=new B.p(null,null,null,null,null,E.wR,A.a7)
D.dbC=w([E.aif,A.c3],x.O)
D.c8T=new B.a9(A.b7,A.b9,A.x,D.dbC,null,null)
D.b7y=new B.p(null,null,null,A.mE,null,D.c8T,A.n)
D.dnd=w([A.bl,A.dJ,A.jV],x.O)
D.a3P=new B.a9(A.aA,A.aF,A.x,D.dnd,null,null)
D.b7L=new B.p(null,null,null,null,null,D.a3P,A.n)
D.b7M=new B.p(D.ag0,null,null,A.l7,null,null,A.n)
D.cAO=w([A.d6,A.bl],x.O)
D.c8K=new B.a9(A.aA,A.aF,A.x,D.cAO,null,null)
D.b7Q=new B.p(null,null,null,null,null,D.c8K,A.n)
D.b8_=new B.p(null,null,null,null,null,G.uY,A.a7)
D.b8k=new B.p(A.aih,null,null,null,null,null,A.a7)
D.bk8=new B.u(0.5647058823529412,0,0,0,A.q)
D.aey=new B.ac(0,A.G,D.bk8,A.Ju,28)
D.bat=new B.aY4()
D.bb1=new C.czi()
D.af2=new B.cf(A.A,null,null,A.a3E,null)
D.bdU=new B.fk(null,null,null,null,null,E.ny,null,null,null,null)
D.bbN=new B.cf(A.A,null,null,D.bdU,null)
D.bSX=new B.ae(A.ed,28,A.c,null,null,null)
D.bci=new B.cf(A.A,null,null,D.bSX,null)
D.bdR=new B.fk(2,null,null,null,null,A.c4,null,null,null,null)
D.bcF=new B.cf(A.A,null,null,D.bdR,null)
D.bTg=new B.ae(K.PB,40,A.bC,null,null,null)
D.bcG=new B.cf(A.A,null,null,D.bTg,null)
D.beM=new B.u(1,1,0.9019607843137255,0.6549019607843137,A.q)
D.beZ=new B.u(1,0.10588235294117647,0.13333333333333333,0.19607843137254902,A.q)
D.bfr=new B.u(1,0.08235294117647059,0.10196078431372549,0.14901960784313725,A.q)
D.bfD=new B.u(1,0.10980392156862745,0.07450980392156863,0.054901960784313725,A.q)
D.bgg=new B.u(1,0.47843137254901963,0.41568627450980394,0.27058823529411763,A.q)
D.bgx=new B.u(0.8,1,0.9450980392156862,0.9490196078431372,A.q)
D.bgz=new B.u(0.0784313725490196,0.788235294117647,0.6352941176470588,0.15294117647058825,A.q)
D.Mj=new B.u(1,0.0392156862745098,0.08235294117647059,0.14901960784313725,A.q)
D.bh1=new B.u(0.2,0.9607843137254902,0.6196078431372549,0.043137254901960784,A.q)
D.bh9=new B.u(0.13333333333333333,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.q)
D.agl=new B.u(1,0.1411764705882353,0.09411764705882353,0.07058823529411765,A.q)
D.bi0=new B.u(1,0.22745098039215686,0.16470588235294117,0.10196078431372549,A.q)
D.biV=new B.u(1,0.9098039215686274,0.9333333333333333,0.9647058823529412,A.q)
D.agB=new B.u(1,1,1,0.9725490196078431,A.q)
D.bjg=new B.u(0,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.q)
D.bjv=new B.u(1,1,0.5490196078431373,0.10196078431372549,A.q)
D.bjy=new B.u(0.6,0.9098039215686274,0.7058823529411765,0.7215686274509804,A.q)
D.bjP=new B.u(0.4,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.q)
D.bke=new B.u(1,1,0.9568627450980393,0.8392156862745098,A.q)
D.blU=new B.u(1,1,0.996078431372549,0.9725490196078431,A.q)
D.YO=new B.u(0.8509803921568627,0,0,0,A.q)
D.bm4=new B.u(1,0.0784313725490196,0.06666666666666667,0.047058823529411764,A.q)
D.bmb=new B.u(1,0.0784313725490196,0.06666666666666667,0.0392156862745098,A.q)
D.ahB=new B.u(0.6,0,0,0,A.q)
D.ahD=new B.u(0,1,0.7019607843137254,0.2784313725490196,A.q)
D.bnV=new B.u(1,0.12156862745098039,0.10196078431372549,0.058823529411764705,A.q)
D.u9=new B.u(1,0.08235294117647059,0.12156862745098039,0.21176470588235294,A.q)
D.boo=new B.u(1,0.35294117647058826,0.41568627450980394,0.5215686274509804,A.q)
D.boS=new B.u(1,1,0.8784313725490196,0.6392156862745098,A.q)
D.bph=new B.u(0.4,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.q)
D.aiy=new B.u(1,0.47843137254901963,0.23137254901960785,0.2901960784313726,A.q)
D.Zi=new B.u(0,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.q)
D.BR=new B.u(1,0.5411764705882353,0.39215686274509803,0.09019607843137255,A.q)
D.MY=new B.u(1,0.0784313725490196,0.09803921568627451,0.16470588235294117,A.q)
D.jz=new B.u(1,0.07058823529411765,0.12941176470588237,0.23921568627450981,A.q)
D.aj3=new B.u(0,1,0.9686274509803922,0.8392156862745098,A.q)
D.Zs=new B.u(1,0.2901960784313726,0.17254901960784313,0.10588235294117647,A.q)
D.bt6=new B.u(1,0.24705882352941178,0.16470588235294117,0.0392156862745098,A.q)
D.btC=new B.u(0.6,1,0.9686274509803922,0.9019607843137255,A.q)
D.btS=new B.u(0.6,1,0.984313725490196,0.9215686274509803,A.q)
D.ZV=new B.u(1,0.07450980392156863,0.10980392156862745,0.2,A.q)
D.bv4=new B.u(1,0.8627450980392157,0.9215686274509803,0.9803921568627451,A.q)
D.ym=new B.u(1,0.9137254901960784,0.7686274509803922,0.41568627450980394,A.q)
D.bvG=new B.u(1,0.058823529411764705,0.0784313725490196,0.12549019607843137,A.q)
D.bw0=new B.hL(A.aT,!0,null,null)
D.fzJ=new B.H(!0,A.aD,null,null,null,null,22,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h_I=new B.B("Bio link",null,D.fzJ,null,null,null,null,null,null,null,null,null)
D.bcA=new B.cf(A.A,null,null,D.h_I,null)
D.bwf=new B.hL(A.Bv,!0,D.bcA,null)
D.Nr=new C.a4O(0,"none")
D.akj=new C.a4O(1,"deflate")
D.akk=new C.a4O(2,"bzip2")
D.bxe=new B.kB(0.165,0.84,0.44,1)
D.dbW=w([A.ca,A.dK,A.aE],x.O)
D.c80=new B.a9(A.aA,A.aF,A.x,D.dbW,null,null)
D.b6J=new B.p(null,null,null,null,null,D.c80,A.n)
D.c1l=new B.ae(A.f5,null,A.ab,null,null,null)
D.bde=new B.cf(A.A,null,null,D.c1l,null)
D.bxN=new B.l5(D.b6J,A.bj,D.bde,null)
D.btl=new B.u(0.058823529411764705,1,1,1,A.q)
D.dfn=w([A.bA,A.rv,A.rv,D.btl],x.O)
D.cSj=w([0,0.32,0.7,1],x.x)
D.c8A=new B.a9(A.aA,A.aF,A.x,D.dfn,D.cSj,null)
D.b6y=new B.p(null,null,null,null,null,D.c8A,A.n)
D.bxT=new B.l5(D.b6y,A.bj,null,null)
D.bz0=new B.mG(1,1,null,null,null,A.bp,null)
D.bz3=new B.mG(1,null,null,null,null,D.Zs,null)
D.bzx=new B.bd(125e4)
D.bzD=new B.bd(17e4)
D.bzN=new B.bd(35964e8)
D.bzU=new B.bd(55e4)
D.bzY=new B.bd(68e4)
D.bAo=new B.ik(0,0,0,5)
D.bAE=new B.R(0,16,16,0)
D.bAP=new B.R(0,36,0,36)
D.bAX=new B.R(0,54,0,0)
D.bB3=new B.R(10,0,10,3)
D.bBf=new B.ik(10,16,10,10)
D.bBr=new B.R(10,6,4,6)
D.bBu=new B.R(10,8,10,6)
D.alj=new B.R(11,8,11,11)
D.bBz=new B.R(12,0,12,24)
D.bBM=new B.R(12,12,12,4)
D.bBP=new B.R(12,12,8,12)
D.bC4=new B.R(12,8,8,12)
D.bCt=new B.R(14,14,14,0)
D.bCy=new B.R(14,14,14,90)
D.bCV=new B.R(16,10,16,16)
D.bCW=new B.R(16,10,16,20)
D.am3=new B.R(16,6,16,28)
D.bDu=new B.R(18,0,18,10)
D.bDw=new B.R(18,0,18,30)
D.bDy=new B.R(18,10,18,12)
D.bDz=new B.R(18,10,18,14)
D.bDU=new B.R(18,16,14,18)
D.bDZ=new B.R(18,18,18,12)
D.bE4=new B.R(18,26,18,12)
D.bE9=new B.R(18,34,18,34)
D.bEa=new B.R(18,4,18,14)
D.bEf=new B.R(18,8,18,24)
D.bEy=new B.R(20,16,14,4)
D.bED=new B.R(20,18,12,4)
D.bEI=new B.R(20,20,12,20)
D.bEL=new B.R(20,22,20,20)
D.bEQ=new B.R(20,6,20,6)
D.bF_=new B.R(22,18,22,18)
D.bF7=new B.R(22,24,22,0)
D.bFa=new B.R(22,24,22,4)
D.bFi=new B.R(22,60,22,22)
D.bFo=new B.R(24,24,24,22)
D.bFy=new B.R(26,10,60,10)
D.bFG=new B.R(28,44,28,44)
D.bFX=new B.R(32,44,32,44)
D.bG4=new B.R(38,30,38,20)
D.bG9=new B.R(4,0,0,6)
D.bGl=new B.ik(4,4,4,4)
D.bGO=new B.ik(6,5,6,5)
D.bGT=new B.R(6,6,8,6)
D.bH4=new B.R(8,14,8,14)
D.bH5=new B.R(8,22,8,22)
D.bHe=new B.R(8,6,12,6)
D.bHn=new B.R(8,8,8,4)
D.an_=new B.R(9,9,9,6)
D.bHy=new B.ik(2.5,2.5,2.5,2.5)
D.bHz=new B.R(10.5,0,10.5,0)
D.bHA=new B.R(7,1.5,7,1.5)
D.d34=w([0.393,0.769,0.189,0,0,0.349,0.686,0.168,0,0,0.272,0.534,0.131,0,0,0,0,0,1,0],x.x)
D.bHQ=new B.uN(null,null,D.d34,A.xW)
D.d_P=w([0.2126,0.7152,0.0722,0,0,0.2126,0.7152,0.0722,0,0,0.2126,0.7152,0.0722,0,0,0,0,0,1,0],x.x)
D.bHR=new B.uN(null,null,D.d_P,A.xW)
D.aW9=new B.H(!0,A.aD,null,null,null,null,11,A.u,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h__=new B.B("WORD DESIGN",null,D.aW9,null,null,null,null,null,null,null,null,null)
D.bIw=new B.bz(1,A.bc,D.h__,null)
D.fZE=new B.B("Slides database",null,Ac.vw,null,null,null,null,null,null,null,null,null)
D.fWR=new B.B("Admin only \xb7 keep as many as you like",null,W.aVD,null,null,null,null,null,null,null,null,null)
D.dw1=w([D.fZE,A.bH,D.fWR],x.p)
D.bwG=new B.fj(A.ah,A.e,A.i,A.E,null,A.p,null,0,D.dw1,null)
D.bIz=new B.bz(1,A.bc,D.bwG,null)
D.fR0=new B.B("NGMY logo",null,A.fC,null,null,null,null,null,null,null,null,null)
D.bIC=new B.bz(1,A.bc,D.fR0,null)
D.fxo=new B.H(!0,A.ab,null,null,null,null,12,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h12=new B.B("TALK TO THE EDITOR",null,D.fxo,null,null,null,null,null,null,null,null,null)
D.bIV=new B.bz(1,A.bc,D.h12,null)
D.fKE=new B.B("Tell the AI what to change",null,Ac.vw,null,null,null,null,null,null,null,null,null)
D.bJe=new B.bz(1,A.bc,D.fKE,null)
D.bKJ=new B.Ev(!0,"video/mp4")
D.fvz=new B.H(!0,A.c,null,null,null,null,16,A.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fIA=new B.B("Move presentations between devices",null,D.fvz,null,null,null,!1,null,null,1,null,null)
D.bKN=new B.qI(A.e2,A.a6,A.f,D.fIA,null)
D.fJP=new B.B("Edit in Slides",null,A.ja,null,null,null,null,null,null,null,null,null)
D.bKO=new B.qI(A.e2,A.A,A.f,D.fJP,null)
D.bL2=new B.dp(1,A.cr,D.bKO,null)
D.a1Z=new B.a0(60988,"MaterialIcons",!1)
D.bOu=new B.a0(61352,"MaterialIcons",!1)
D.aoJ=new B.a0(61531,"MaterialIcons",!1)
D.bPG=new B.a0(63062,"MaterialIcons",!1)
D.bPN=new B.a0(63109,"MaterialIcons",!1)
D.bQ_=new B.a0(63206,"MaterialIcons",!1)
D.app=new B.a0(63238,"MaterialIcons",!1)
D.bQg=new B.a0(63338,"MaterialIcons",!1)
D.a2A=new B.a0(63365,"MaterialIcons",!1)
D.a2B=new B.a0(63367,"MaterialIcons",!1)
D.a2C=new B.a0(63368,"MaterialIcons",!1)
D.apB=new B.a0(63384,"MaterialIcons",!1)
D.bQy=new B.a0(63525,"MaterialIcons",!1)
D.bQC=new B.a0(63568,"MaterialIcons",!1)
D.bQX=new B.a0(983072,"MaterialIcons",!1)
D.bRl=new B.a0(983271,"MaterialIcons",!0)
D.aqH=new B.a0(983965,"MaterialIcons",!1)
D.aqI=new B.a0(983966,"MaterialIcons",!1)
D.bSh=new B.a0(984592,"MaterialIcons",!1)
D.bSz=new B.ae(A.uF,16,A.aD,null,null,null)
D.aqU=new B.ae(A.ps,18,A.c,null,null,null)
D.bSY=new B.ae(A.Cw,18,N.lF,null,null,null)
D.bTC=new B.ae(A.jG,11,null,null,null,null)
D.bTN=new B.ae(A.a2h,null,A.ev,null,null,null)
D.bUk=new B.ae(A.rZ,18,A.aD,null,null,null)
D.bUq=new B.ae(A5.CO,14,null,null,null,null)
D.bUr=new B.ae(A.eh,28,A.c0,null,null,null)
D.bUD=new B.ae(A.qL,20,A.c,null,null,null)
D.bUK=new B.ae(A.zg,null,null,null,null,null)
D.bUQ=new B.ae(A.jF,18,A.hq,null,null,null)
D.bUV=new B.ae(A.kv,null,null,null,null,null)
D.bPI=new B.a0(63065,"MaterialIcons",!1)
D.bVx=new B.ae(D.bPI,15,A.c,null,null,null)
D.bPO=new B.a0(63113,"MaterialIcons",!1)
D.bVD=new B.ae(D.bPO,null,A.ab,null,null,null)
D.bW0=new B.ae(A.uD,22,A.bN,null,null,null)
D.bWl=new B.ae(A.rW,18,null,null,null,null)
D.bWr=new B.ae(A.CT,12,A.c,null,null,null)
D.bRU=new B.a0(983687,"MaterialIcons",!1)
D.bWD=new B.ae(D.bRU,null,A.bl,null,null,null)
D.bWM=new B.ae(A.hI,null,A.bl,null,null,null)
D.bX4=new B.ae(A.px,22,A.c,null,null,null)
D.bX8=new B.ae(A.cz,13,A.c,null,null,null)
D.bXe=new B.ae(A.eh,26,A.ay,null,null,null)
D.bXi=new B.ae(A.t1,26,A.c,null,null,null)
D.PN=new B.ae(A.jG,8,A.c,null,null,null)
D.bXD=new B.ae(A.ps,40,A.c,null,null,null)
D.bXE=new B.ae(A.bNr,null,null,null,null,null)
D.bXI=new B.ae(A.uQ,20,null,null,null,null)
D.bRT=new B.a0(983683,"MaterialIcons",!1)
D.bXS=new B.ae(D.bRT,null,A.b1,null,null,null)
D.bXT=new B.ae(A.jG,16,A.bl,null,null,null)
D.bYd=new B.ae(A.pu,null,null,null,null,null)
D.aru=new B.ae(A.wz,22,A.c,null,null,null)
D.bYj=new B.ae(A.ed,17,A.c,null,null,null)
D.arv=new B.ae(A.jG,9,A.c,null,null,null)
D.bYo=new B.ae(A.wu,null,null,null,null,null)
D.bNI=new B.a0(57744,"MaterialIcons",!1)
D.bYv=new B.ae(D.bNI,null,null,null,null,null)
D.bYy=new B.ae(A.wu,16,null,null,null,null)
D.bSq=new B.a0(985181,"MaterialIcons",!1)
D.HX=new B.ae(D.bSq,null,null,null,null,null)
D.bYK=new B.ae(A.kv,16,A.bN,null,null,null)
D.bRM=new B.a0(983615,"MaterialIcons",!1)
D.bYM=new B.ae(D.bRM,12,A.c,null,null,null)
D.arB=new B.ae(A.z3,16,null,null,null,null)
D.bYU=new B.ae(A.ed,21,A.c,null,null,null)
D.bYZ=new B.ae(A.hI,17,A.c,null,null,null)
D.bZ_=new B.ae(A.uD,null,null,null,null,null)
D.bZg=new B.ae(A.a3g,20,A.aD,null,null,null)
D.bZv=new B.ae(A.ov,22,E.ny,null,null,null)
D.bZD=new B.ae(A.qK,13,A.ab,null,null,null)
D.bZG=new B.ae(A.aqu,20,A.aD,null,null,null)
D.bNp=new B.a0(57495,"MaterialIcons",!1)
D.bZL=new B.ae(D.bNp,null,null,null,null,null)
D.bZP=new B.ae(A.ow,18,A.c,null,null,null)
D.c_b=new B.ae(A.uU,28,A.c,null,null,null)
D.c_m=new B.ae(D.app,null,A.aE,null,null,null)
D.c_n=new B.ae(A.qL,22,A.c,null,null,null)
D.arK=new B.ae(A.a1V,16,null,null,null,null)
D.c09=new B.ae(A.uD,32,A.c,null,null,null)
D.c0S=new B.ae(A.jq,22,A.c,null,null,null)
D.c0V=new B.ae(A.t1,22,A.ab,null,null,null)
D.as_=new B.ae(A.uF,null,A.bW,null,null,null)
D.c1Q=new B.ae(A.qE,18,null,null,null,null)
D.c2s=new B.ae(A.ed,18,A.bi,null,null,null)
D.c2z=new B.ae(A.aqp,null,null,null,null,null)
D.c3_=new B.e5(null,null,null,null,null,null,null,null,null,null,"Type here\u2026",null,A.aVY,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.eK,!0,null,null,null,null)
D.fne=new B.H(!0,A.bK,null,null,null,null,null,A.cC,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c3h=new B.e5(null,null,null,null,null,null,null,null,null,null,"Type here\u2026",null,D.fne,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,A.ag,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.eK,!0,null,null,null,null)
D.c3I=new B.e5(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"",null,null,null,null,null,null,null,null,null,null,null,A.eK,!0,null,null,null,null)
D.d7j=w([A.dJ,A.aE],x.O)
D.c5O=new B.a9(A.a6,A.aa,A.x,D.d7j,null,null)
D.c5Z=new B.a9(A.b7,A.b9,A.VZ,A.az8,null,null)
D.bfg=new B.u(1,0.5568627450980392,0.5411764705882353,0.5215686274509804,A.q)
D.bkg=new B.u(1,0.23529411764705882,0.22745098039215686,0.21568627450980393,A.q)
D.bnW=new B.u(1,0.7254901960784313,0.7058823529411765,0.6784313725490196,A.q)
D.bhS=new B.u(1,0.1803921568627451,0.17254901960784313,0.16470588235294117,A.q)
D.cSl=w([D.bfg,D.bkg,D.bnW,D.bhS],x.O)
D.c6g=new B.a9(A.aA,A.aF,A.x,D.cSl,A.Is,null)
D.dwa=w([A.cF,A.bD,A.b8],x.O)
D.c6i=new B.a9(A.b7,A.b9,A.VZ,D.dwa,null,null)
D.dxG=w([A.bl,A.ch],x.O)
D.c6n=new B.a9(A.a6,A.aa,A.x,D.dxG,null,null)
D.dsk=w([A.hE,A.cZ,A.av],x.O)
D.c6p=new B.a9(A.aA,A.aF,A.x,D.dsk,null,null)
D.ddG=w([A.cG,A.fo],x.O)
D.c6t=new B.a9(A.a6,A.aa,A.x,D.ddG,null,null)
D.dw3=w([N.lF,A.cZ],x.O)
D.asM=new B.a9(A.a6,A.aa,A.x,D.dw3,null,null)
D.bkZ=new B.u(1,0.9686274509803922,0.8901960784313725,0.6313725490196078,A.q)
D.dw0=w([D.bkZ,D.ym,A.c4],x.O)
D.c6y=new B.a9(A.a6,A.aa,A.x,D.dw0,null,null)
D.d93=w([A.b4,A.cX,A.eq],x.O)
D.c6z=new B.a9(A.aA,A.aF,A.x,D.d93,null,null)
D.Q4=new B.a9(A.a6,A.aa,A.x,A.IH,null,null)
D.buf=new B.u(1,0.9019607843137255,0.7568627450980392,0.3607843137254902,A.q)
D.cLh=w([D.buf,A.c4,A.jB],x.O)
D.asR=new B.a9(A.aA,A.aF,A.x,D.cLh,null,null)
D.djr=w([A.u3,A.aC,D.BR],x.O)
D.c7A=new B.a9(A.a6,A.aa,A.x,D.djr,null,null)
D.bvH=new B.u(1,0.43137254901960786,0.41568627450980394,0.396078431372549,A.q)
D.biU=new B.u(1,0.6627450980392157,0.6431372549019608,0.615686274509804,A.q)
D.bp5=new B.u(1,0.3333333333333333,0.3215686274509804,0.3058823529411765,A.q)
D.d89=w([D.bvH,D.biU,D.bp5],x.O)
D.asS=new B.a9(A.a6,A.aa,A.x,D.d89,null,null)
D.bl0=new B.u(1,0.0392156862745098,0.06666666666666667,0.13333333333333333,A.q)
D.c9z=w([AB.ajY,D.bl0],x.O)
D.c7J=new B.a9(A.b7,A.b9,A.x,D.c9z,null,null)
D.d64=w([A.mO,A.bC],x.O)
D.c7N=new B.a9(A.b7,A.b9,A.x,D.d64,null,null)
D.doU=w([A.aE,A.dK],x.O)
D.c7T=new B.a9(A.a6,A.aa,A.x,D.doU,null,null)
D.aiM=new B.u(1,0.1803921568627451,0.25882352941176473,0.4392156862745098,A.q)
D.aAS=w([D.aiM,D.jz,D.Mj],x.O)
D.c8k=new B.a9(A.aA,A.aF,A.x,D.aAS,null,null)
D.cL9=w([A.dx,A.dA],x.O)
D.c8v=new B.a9(A.b7,A.b9,A.x,D.cL9,null,null)
D.dlM=w([A.xZ,A.y8],x.O)
D.c9i=new B.a9(A.a6,A.aa,A.x,D.dlM,null,null)
D.fSD=new B.B("Which Bio link?",null,A.cB,null,null,null,null,null,null,null,null,null)
D.c9v=new B.q7(null,D.fSD,null,null,null,null,null,null,null,null,!0,null,null,!1,null,null,null,!1,null,null,null,null,null,null,null,null,!0,null,null)
D.zG=w([82,9,106,213,48,54,165,56,191,64,163,158,129,243,215,251,124,227,57,130,155,47,255,135,52,142,67,68,196,222,233,203,84,123,148,50,166,194,35,61,238,76,149,11,66,250,195,78,8,46,161,102,40,217,36,178,118,91,162,73,109,139,209,37,114,248,246,100,134,104,152,22,212,164,92,204,93,101,182,146,108,112,72,80,253,237,185,218,94,21,70,87,167,141,157,132,144,216,171,0,140,188,211,10,247,228,88,5,184,179,69,6,208,44,30,143,202,63,15,2,193,175,189,3,1,19,138,107,58,145,17,65,79,103,220,234,151,242,207,206,240,180,230,115,150,172,116,34,231,173,53,133,226,249,55,232,28,117,223,110,71,241,26,113,29,41,197,137,111,183,98,14,170,24,190,27,252,86,62,75,198,210,121,32,154,219,192,254,120,205,90,244,31,221,168,51,136,7,199,49,177,18,16,89,39,128,236,95,96,81,127,169,25,181,74,13,45,229,122,159,147,201,156,239,160,224,59,77,174,42,245,176,200,235,187,60,131,83,153,97,23,43,4,126,186,119,214,38,225,105,20,99,85,33,12,125],x.t)
D.a7N=new C.la(2,"elegantNavy")
D.hEi=w([A.Zg,D.jz,A.c4],x.O)
D.ka=new C.y8(0,"classic")
D.a7C=new C.jC("kuhowa_elegant_navy","Kuhowa \u2014 Bluu ya Kifalme",y.s,D.a7N,4294967035,4279378237,4290283019,D.ka)
D.aKr=new C.la(3,"elegantGold")
D.beL=new B.u(1,1,0.9882352941176471,0.9529411764705882,A.q)
D.bfX=new B.u(1,0.6509803921568628,0.5176470588235295,0.22745098039215686,A.q)
D.ah5=new B.u(1,0.4196078431372549,0.2901960784313726,0.07058823529411765,A.q)
D.hDL=w([D.beL,D.bfX,D.ah5],x.O)
D.a7A=new C.jC("kuhowa_elegant_gold","Kuhowa \u2014 Dhahabu",y.Q,D.aKr,4294966515,4281016592,4289102906,D.ka)
D.dTk=new C.la(22,"goldRibbon")
D.hDH=w([A.Zg,D.jz,A.is],x.O)
D.a7t=new C.jC("kuhowa_gold_ribbon","Utepe wa Dhahabu","Pembe za bluu na dhahabu \xb7 almasi kati ya kila upande.",D.dTk,4294967035,4279378237,4291404327,D.ka)
D.dTl=new C.la(23,"goldBaroque")
D.ahQ=new B.u(1,1,0.9647058823529412,0.8941176470588236,A.q)
D.hDN=w([D.ahQ,A.aC,A.jB],x.O)
D.a7u=new C.jC("kuhowa_gold_baroque","Ukanda wa Dhahabu","Ukanda mzito wa dhahabu \xb7 rosette kwenye pembe.",D.dTl,4294964964,4283053072,4292128567,D.ka)
D.dTn=new C.la(4,"elegantEmerald")
D.bhh=new B.u(1,0.9647058823529412,0.984313725490196,0.9725490196078431,A.q)
D.bii=new B.u(1,0.054901960784313725,0.23137254901960785,0.1803921568627451,A.q)
D.hDT=w([D.bhh,D.bii,A.is],x.O)
D.a7v=new C.jC("kuhowa_elegant_emerald","Kuhowa \u2014 Zumaridi","Mpaka mwembamba wa dhahabu \xb7 vichwa vya kijani ya zumaridi.",D.dTn,4294376440,4279122734,4291404327,D.ka)
D.dTo=new C.la(5,"elegantBurgundy")
D.bmC=new B.u(1,1,0.9686274509803922,0.9647058823529412,A.q)
D.hE_=w([D.bmC,A.agc,A.is],x.O)
D.a7y=new C.jC("kuhowa_elegant_burgundy","Kuhowa \u2014 Mvinyo","Mpaka mwembamba wa dhahabu \xb7 vichwa vya rangi ya mvinyo.",D.dTo,4294965238,4283043359,4291404327,D.ka)
D.dTh=new C.la(19,"goldFiligree")
D.N5=new B.u(1,1,0.984313725490196,0.9529411764705882,A.q)
D.hDO=w([D.N5,A.aC,A.jB],x.O)
D.a7w=new C.jC("kuhowa_gold_filigree","Dhahabu ya Filigree","Mpaka wa dhahabu mara tatu \xb7 pembe za mapambo.",D.dTh,4294966259,4279378237,4292128567,D.ka)
D.dTi=new C.la(20,"goldLaurel")
D.bu5=new B.u(1,0.47843137254901963,0.3607843137254902,0.0784313725490196,A.q)
D.hE0=w([A.Mb,A.is,D.bu5],x.O)
D.a7x=new C.jC("kuhowa_gold_laurel","Taji ya Dhahabu","Majani ya dhahabu kando \xb7 almasi kwenye pembe.",D.dTi,4294966776,4282000405,4291404327,D.ka)
D.dTj=new C.la(21,"goldCrest")
D.ag3=new B.u(1,1,0.9725490196078431,0.9254901960784314,A.q)
D.buc=new B.u(1,0.4196078431372549,0.30980392156862746,0.07058823529411765,A.q)
D.hDQ=w([D.ag3,A.aC,D.buc],x.O)
D.a7B=new C.jC("kuhowa_gold_crest","Muhuri wa Dhahabu","Medali za dhahabu kwenye pembe \xb7 shanga za lulu.",D.dTj,4294965484,4283053072,4292128567,D.ka)
D.dTm=new C.la(24,"goldStar")
D.bvy=new B.u(1,1,0.9882352941176471,0.9647058823529412,A.q)
D.hDU=w([D.bvy,A.aC,D.jz],x.O)
D.a7z=new C.jC("kuhowa_gold_star","Nyota ya Dhahabu","Nyota za dhahabu kwenye pembe \xb7 mstari wa bluu ndani.",D.dTm,4294966518,4279378237,4292128567,D.ka)
D.I6=w([D.a7C,D.a7A,D.a7t,D.a7u,D.a7v,D.a7y,D.a7w,D.a7x,D.a7B,D.a7z],x.h)
D.qX=new C.mT(0,"blank")
D.TJ=new C.mT(1,"title")
D.n8=new C.mT(2,"titleContent")
D.ecX=new C.mT(3,"twoColumn")
D.DW=new C.mT(4,"section")
D.ecY=new C.mT(5,"comparison")
D.Je=new C.mT(6,"flashcard")
D.Jf=new C.mT(7,"quiz")
D.Jg=new C.mT(8,"worksheet")
D.atc=w([D.qX,D.TJ,D.n8,D.ecX,D.DW,D.ecY,D.Je,D.Jf,D.Jg],B.as("O<mT>"))
D.aBZ=w([Aq.Yz,A.dA],x.O)
D.kX=w([A.c4,A.bN,A.i5,A.i3,D.BR],x.O)
D.dP7=new C.jb("fireworks","Royal Fireworks","Thank you for celebrating with us",D.aBZ,D.kX)
D.bus=new B.u(1,0.2901960784313726,0.050980392156862744,0.11764705882352941,A.q)
D.bmA=new B.u(1,0.07058823529411765,0.011764705882352941,0.0392156862745098,A.q)
D.d6h=w([D.bus,D.bmA],x.O)
D.dOZ=new C.jb("confetti","Golden Confetti","Together we rise",D.d6h,D.kX)
D.d3a=w([A.o4,A.Y9],x.O)
D.dP_=new C.jb("crown","Crown of Glory","Built for our community",D.d3a,D.kX)
D.biH=new B.u(1,0.011764705882352941,0.10588235294117647,0.1803921568627451,A.q)
D.bmd=new B.u(1,0.00392156862745098,0.023529411764705882,0.058823529411764705,A.q)
D.dax=w([D.biH,D.bmd],x.O)
D.v_=w([A.bK,A.aP,A.c,A.aO,A.am],x.O)
D.dOU=new C.jb("aurora","Aurora Gala","A brighter future, together",D.dax,D.v_)
D.bnY=new B.u(1,0.027450980392156862,0.01568627450980392,0.00392156862745098,A.q)
D.dlV=w([G.afF,D.bnY],x.O)
D.dPa=new C.jb("champagne","Champagne Toast","Cheers to every member",D.dlV,D.kX)
D.dPb=new C.jb("diamonds","Diamond Rain","Every member is a jewel",A_.aCK,D.v_)
D.bfL=new B.u(1,0.3568627450980392,0.16470588235294117,0.023529411764705882,A.q)
D.blD=new B.u(1,0.10196078431372549,0.043137254901960784,0.00784313725490196,A.q)
D.drx=w([D.bfL,D.blD],x.O)
D.dOP=new C.jb("starburst","Golden Starburst","Thank you!",D.drx,D.kX)
D.c9G=w([A.fn,A.yd],x.O)
D.afP=new B.u(1,0.615686274509804,0.3058823529411765,0.3607843137254902,A.q)
D.RF=w([A.pd,A.ir,A.wa,A.o5,D.afP],x.O)
D.dPi=new C.jb("balloons","Luxury Balloons","Let's celebrate",D.c9G,D.RF)
D.d2n=w([A.Yn,A.w],x.O)
D.dP6=new C.jb("galaxy","Galaxy Spiral","The sky is not the limit",D.d2n,D.v_)
D.bsh=new B.u(1,0.047058823529411764,0.00392156862745098,0.00392156862745098,A.q)
D.di9=w([A.kq,D.bsh],x.O)
D.dP1=new C.jb("redcarpet","Red Carpet","Tonight we shine",D.di9,D.kX)
D.bpN=new B.u(1,0.10980392156862745,0.0784313725490196,0.0196078431372549,A.q)
D.bnH=new B.u(1,0.0196078431372549,0.011764705882352941,0.00392156862745098,A.q)
D.dmT=w([D.bpN,D.bnH],x.O)
D.dOR=new C.jb("coins","Gold Coin Rain","Every contribution counts",D.dmT,D.kX)
D.dun=w([A.dx,A.i2],x.O)
D.dOX=new C.jb("lanterns","Sky Lanterns","Lighting the way together",D.dun,D.kX)
D.bjV=new B.u(1,0.0784313725490196,0.00784313725490196,0.0392156862745098,A.q)
D.d0a=w([A.yf,D.bjV],x.O)
D.dOT=new C.jb("hearts","Floating Hearts","Made with love",D.d0a,D.RF)
D.bgp=new B.u(1,0.23137254901960785,0.0392156862745098,0.10980392156862745,A.q)
D.bho=new B.u(1,0.058823529411764705,0.00784313725490196,0.027450980392156862,A.q)
D.dvZ=w([D.bgp,D.bho],x.O)
D.dPh=new C.jb("petals","Rose Petals","Thank you, from our hearts",D.dvZ,D.RF)
D.btj=new B.u(1,0.00784313725490196,0.06274509803921569,0.0392156862745098,A.q)
D.drT=w([A.lf,D.btj],x.O)
D.dOO=new C.jb("butterflies","Golden Butterflies","New beginnings",D.drT,D.kX)
D.bp1=new B.u(1,0.0392156862745098,0.0392156862745098,0.12156862745098039,A.q)
D.d1f=w([D.bp1,A.w],x.O)
D.dP9=new C.jb("neon","Neon Night","Let's go!",D.d1f,D.v_)
D.blg=new B.u(1,0.0196078431372549,0.00392156862745098,0.050980392156862744,A.q)
D.dp5=w([A.MG,D.blg],x.O)
D.dPc=new C.jb("disco","Disco Ball","Party time",D.dp5,D.v_)
D.bpC=new B.u(1,0.11764705882352941,0.0392156862745098,0.1803921568627451,A.q)
D.doA=w([A.hE,D.bpC],x.O)
D.dOS=new C.jb("sunrise","Golden Sunrise","A new day for our community",D.doA,D.kX)
D.dob=w([A.rz,A.dA],x.O)
D.dPd=new C.jb("pearls","Ocean Pearls","Deep roots, bright future",D.dob,D.v_)
D.biO=new B.u(1,0.047058823529411764,0.11764705882352941,0.22745098039215686,A.q)
D.dop=w([D.biO,A.dA],x.O)
D.dPg=new C.jb("snow","Winter Gala","Warm wishes to all",D.dop,D.v_)
D.beU=new B.u(1,0.0784313725490196,0.13725490196078433,0.10196078431372549,A.q)
D.bga=new B.u(1,0.01568627450980392,0.03137254901960784,0.0196078431372549,A.q)
D.duS=w([D.beU,D.bga],x.O)
D.dP5=new C.jb("laurel","Laurel Victory","We did it together",D.duS,D.kX)
D.beK=new B.u(1,0.12156862745098039,0.06274509803921569,0.2,A.q)
D.bm9=new B.u(1,0.027450980392156862,0.011764705882352941,0.050980392156862744,A.q)
D.d_9=w([D.beK,D.bm9],x.O)
D.dPf=new C.jb("ribbons","Silk Ribbons","Elegance in every step",D.d_9,D.kX)
D.bnl=new B.u(1,0.023529411764705882,0.01568627450980392,0.00784313725490196,A.q)
D.cL6=w([G.BQ,D.bnl],x.O)
D.dP2=new C.jb("kente","Kente Pride","Proud of our roots",D.cL6,D.kX)
D.bqt=new B.u(1,0.1411764705882353,0.10196078431372549,0.0196078431372549,A.q)
D.btH=new B.u(1,0.027450980392156862,0.0196078431372549,0.00392156862745098,A.q)
D.dcj=w([D.bqt,D.btH],x.O)
D.dOY=new C.jb("trophy","Trophy Shine","Winners together",D.dcj,D.kX)
D.dow=w([Ar.Mq,A.w],x.O)
D.dOQ=new C.jb("shooting","Shooting Stars","Make a wish",D.dow,D.v_)
D.bf2=new B.u(1,0.10980392156862745,0.07058823529411765,0.023529411764705882,A.q)
D.ajJ=new B.u(1,0.0196078431372549,0.011764705882352941,0.00784313725490196,A.q)
D.dva=w([D.bf2,D.ajJ],x.O)
D.dP3=new C.jb("bokeh","Golden Bokeh","Shine bright",D.dva,D.kX)
D.bft=new B.u(1,0.0392156862745098,0.058823529411764705,0.1411764705882353,A.q)
D.dj0=w([D.bft,A.w],x.O)
D.dOW=new C.jb("orbits","Golden Orbits","Always moving forward",D.dj0,D.kX)
D.btk=new B.u(1,0.0392156862745098,0.011764705882352941,0.047058823529411764,A.q)
D.dff=w([A.ah0,D.btk],x.O)
D.dP0=new C.jb("flowers","Blooming Garden","Growing together",D.dff,D.RF)
D.bfe=new B.u(1,0.07450980392156863,0.027450980392156862,0.1803921568627451,A.q)
D.bg1=new B.u(1,0.00784313725490196,0.00392156862745098,0.03137254901960784,A.q)
D.dtO=w([D.bfe,D.bg1],x.O)
D.dOV=new C.jb("music","Music Party","Celebrate with us",D.dtO,D.v_)
D.bh2=new B.u(1,0.16470588235294117,0.0392156862745098,0.22745098039215686,A.q)
D.bu8=new B.u(1,0.027450980392156862,0.00784313725490196,0.047058823529411764,A.q)
D.d0o=w([D.bh2,D.bu8],x.O)
D.dPe=new C.jb("mandala","Royal Mandala","Harmony and unity",D.d0o,D.kX)
D.dfl=w([G.BQ,D.ajJ],x.O)
D.dP8=new C.jb("sparklers","Golden Sparklers","Light up the night",D.dfl,D.kX)
D.dP4=new C.jb("city","City Lights","The whole city celebrates",D.aBZ,D.kX)
D.If=w([D.dP7,D.dOZ,D.dP_,D.dOU,D.dPa,D.dPb,D.dOP,D.dPi,D.dP6,D.dP1,D.dOR,D.dOX,D.dOT,D.dPh,D.dOO,D.dP9,D.dPc,D.dOS,D.dPd,D.dPg,D.dP5,D.dPf,D.dP2,D.dOY,D.dOQ,D.dP3,D.dOW,D.dP0,D.dOV,D.dPe,D.dP8,D.dP4],B.as("O<jb>"))
D.eEW=new B.y("","No ring")
D.eVq=new B.y("platinum","Platinum")
D.eRs=new B.y("glow","Glow")
D.eIG=new B.y("double","Double line")
D.eHz=new B.y("framed","Gallery frame")
D.eEs=new B.y("rosegold","Rose gold")
D.eSh=new B.y("jewels","Jeweled")
D.eOT=new B.y("aurora","Aurora")
D.Dc=w([D.eEW,A.Uu,D.eVq,D.eRs,M.aRd,D.eIG,A.aRb,D.eHz,D.eEs,D.eSh,D.eOT],x.L)
D.cuf=w([D.a7w,D.a7x,D.a7B,D.a7t,D.a7u,D.a7z],x.h)
D.bZ7=new B.ae(G.aoj,16,null,null,null,null)
D.b9R=new B.w_(A.bn,D.bZ7,null,x.U)
D.bNR=new B.a0(58027,"MaterialIcons",!1)
D.bSF=new B.ae(D.bNR,16,null,null,null,null)
D.b9P=new B.w_(A.K,D.bSF,null,x.U)
D.bNS=new B.a0(58030,"MaterialIcons",!1)
D.bWK=new B.ae(D.bNS,16,null,null,null,null)
D.b9S=new B.w_(A.e_,D.bWK,null,x.U)
D.cAy=w([D.b9R,D.b9P,D.b9S],B.as("O<w_<qm>>"))
D.cIm=w([A.BW,A.hD],x.O)
D.cIn=w([A.b4,A.bg,A.eq],x.O)
D.Ru=w([A.bN,A.i3,A.i5,A.aC,A.o5],x.O)
D.cLc=w([A.c4,D.jz,D.Mj],x.O)
D.cLK=w([1,2,4,8,16,32,64,128,27,54,108,216,171,77,154,47,94,188,99,198,151,53,106,212,179,125,250,239,197,145],x.t)
D.eCf=new B.y(4278913286,4280030216)
D.eCx=new B.y(4279373061,4278518787)
D.eCE=new B.y(4279898630,4278847235)
D.dbG=w([D.eCf,D.eCx,D.eCE],x.n)
D.d72=w(["\u265b","\u269c","\u2726"],x.s)
D.dTf=new C.ya("Royal Onyx & Gold",D.dbG,4292128567,4294370209,4294965479,3874020544,D.d72)
D.eC2=new B.y(4278326799,4278598442)
D.eC4=new B.y(4278395929,4278258953)
D.eCb=new B.y(4278599728,4278327826)
D.due=w([D.eC2,D.eC4,D.eCb],x.n)
D.d17=w(["\u269c","\u2756","\u2727"],x.s)
D.dTc=new C.ya("Imperial Emerald",D.due,4293050997,4294699968,4294180856,3872254170,D.d17)
D.eC5=new B.y(4278455076,4278918747)
D.eCa=new B.y(4278587439,4278322714)
D.eCo=new B.y(4279051376,4278455076)
D.dsg=w([D.eC5,D.eCa,D.eCo],x.n)
D.djL=w(["\u2654","\u2726","\u2748"],x.s)
D.dT6=new C.ya("Sapphire Crown",D.dsg,4291417834,4294967295,4294310143,3871986666,D.djL)
D.eCC=new B.y(4279894534,4283041554)
D.eCO=new B.y(4281008906,4279042307)
D.eCW=new B.y(4284221976,4279894534)
D.dyl=w([D.eCC,D.eCO,D.eCW],x.n)
D.d2w=w(["\u265b","\u2766","\u2726"],x.s)
D.dT8=new C.ya("Ruby Throne",D.dyl,4293378685,4294963145,4294964466,3874213833,D.d2w)
D.eCw=new B.y(4279371039,4281995100)
D.eCG=new B.y(4280092723,4278714896)
D.eCT=new B.y(4283045242,4279371039)
D.duC=w([D.eCw,D.eCG,D.eCT],x.n)
D.dsD=w(["\u2655","\u2756","\u2727"],x.s)
D.dTd=new C.ya("Amethyst Palace",D.duC,4293314984,4294963421,4294702591,3873229802,D.dsD)
D.eC7=new B.y(4278519045,4280032287)
D.eCp=new B.y(4279111184,4278321666)
D.eCL=new B.y(4280492839,4278716426)
D.dr0=w([D.eC7,D.eCp,D.eCL],x.n)
D.dhW=w(["\u2726","\u25c6","\u2742"],x.s)
D.dTa=new C.ya("Obsidian & Platinum",D.dr0,4293256418,4294967295,4294638330,3872378836,D.dhW)
D.eCD=new B.y(4279896588,4282194463)
D.eCM=new B.y(4280553487,4279043334)
D.eCU=new B.y(4283048488,4279896588)
D.dhl=w([D.eCD,D.eCM,D.eCU],x.n)
D.dwr=w(["\u2766","\u273f","\u2727"],x.s)
D.dT7=new C.ya("Rose Gold Velvet",D.dhl,4293440672,4294960345,4294964979,3874214602,D.dwr)
D.eC8=new B.y(4278520340,4279180595)
D.eCd=new B.y(4278718495,4278322443)
D.eCA=new B.y(4279510591,4278520340)
D.cS1=w([D.eC8,D.eCd,D.eCA],x.n)
D.diF=w(["\u269c","\u2736","\u2756"],x.s)
D.dTb=new C.ya("Midnight Brass",D.cS1,4291405148,4293975208,4294439914,3872837564,D.diF)
D.eD8=new B.y(4294703086,4293780428)
D.eD4=new B.y(4294307549,4293187253)
D.eD9=new B.y(4294966517,4293977807)
D.d4T=w([D.eD8,D.eD4,D.eD9],x.n)
D.dj4=w(["\u269c","\u265b","\u2726"],x.s)
D.dTe=new C.ya("Ivory Marble & Gold",D.d4T,4289760572,4286209048,4280951062,3863625518,D.dj4)
D.eCj=new B.y(4278978566,4280555024)
D.eCz=new B.y(4279504137,4278518530)
D.eCQ=new B.y(4281211923,4278978566)
D.d2m=w([D.eCj,D.eCz,D.eCQ],x.n)
D.dto=w(["\u2742","\u2726","\u265c"],x.s)
D.dT9=new C.ya("Onyx & Copper",D.d2m,4291856987,4294365880,4294964718,3873885630,D.dto)
D.cLS=w([D.dTf,D.dTc,D.dT6,D.dT8,D.dTd,D.dTa,D.dT7,D.dTb,D.dTe,D.dT9],B.as("O<ya>"))
D.cOe=w([A.aC,D.BR,A.i3],x.O)
D.eKW=new B.y("Original",null)
D.eL5=new B.y("Wide 16:9",1.7777777777777777)
D.eNt=new B.y("Landscape 3:2",1.5)
D.eKm=new B.y("Photo 4:3",1.3333333333333333)
D.eZk=new B.y("Portrait 3:4",0.75)
D.azh=w([D.eKW,D.eL5,D.eNt,D.eKm,M.aR1,D.eZk],B.as("O<+(n,F?)>"))
D.azi=w([A.i3,A.bT,A.ba,A.br],x.O)
D.eNF=new B.y("","Original")
D.ePC=new B.y("circle","Circle")
D.eWe=new B.y("rounded","Rounded")
D.eXe=new B.y("triangle","Triangle")
D.eRJ=new B.y("hexagon","Hexagon")
D.eQ2=new B.y("diamond","Diamond")
D.eOS=new B.y("arch","Arch")
D.Dj=w([D.eNF,D.ePC,D.eWe,D.eXe,D.eRJ,D.eQ2,D.eOS],x.L)
D.dOd=new C.lu("classic_blue","Classic Blue","Normal",A.bl,A.c,A.kO,A.d6,A.aM)
D.dOt=new C.lu("campus_green","Campus Green","Normal",A.b1,A.nv,A.u5,A.ha,A.e6)
D.dOk=new C.lu("warm_sand","Warm Sand","Normal",A.dX,A.i5,A.bN,A.i7,A.ob)
D.dOr=new C.lu("slate_minimal","Slate Minimal","Normal",A.bv,A.aP,A.aO,A.S,A.aM)
D.dOc=new C.lu("coral_fresh","Coral Fresh","Normal",A.ca,A.i4,A.q5,A.kr,A.tZ)
D.dOs=new C.lu("lavender_calm","Lavender Calm","Normal",A.b8,A.q8,A.y6,A.og,A.kn)
D.dOe=new C.lu("ocean_breeze","Ocean Breeze","Normal",A.fo,A.rH,A.tV,A.u0,A.oc)
D.aiU=new B.u(1,0.9803921568627451,0.9607843137254902,1,A.q)
D.dOp=new C.lu("berry_pop","Berry Pop","Normal",A.fd,D.aiU,A.kK,G.ZS,A.BX)
D.dOf=new C.lu("midnight_pro","Midnight Pro","Professional",A.aE,A.S,A.dx,A.kK,A.cu)
D.dOo=new C.lu("executive_navy","Executive Navy","Professional",A.d5,A.ai3,A.d6,A.ld,A.bK)
D.dOm=new C.lu("boardroom_charcoal","Boardroom Charcoal","Professional",A.am,A.bp,A.S,A.aP,A.cu)
D.dOg=new C.lu("corporate_steel","Corporate Steel","Professional",A.oe,A.S,A.mR,A.fF,A.bK)
D.dOj=new C.lu("gold_luxe","Gold Luxe","Luxury",A.mJ,A.dT,A.pb,A.m3,A.bN)
D.bpH=new B.u(1,0.10196078431372549,0.0392156862745098,0.058823529411764705,A.q)
D.dOn=new C.lu("rose_gold_elite","Rose Gold Elite","Luxury",A.hD,D.bpH,A.ZA,A.ir,A.o5)
D.dOq=new C.lu("platinum_night","Platinum Night","Luxury",A.cu,A.dA,A.bp,A.aP,A.aO)
D.dOu=new C.lu("emerald_prestige","Emerald Prestige","Luxury",A.aY,A.qc,A.eV,A.ql,A.jT)
D.dOb=new C.lu("royal_purple","Royal Purple","Luxury",A.nu,A.YF,A.kn,A.kK,A.Ma)
D.dOl=new C.lu("neon_pitch","Neon Pitch","Bold",A.ba,A.dA,A.S,A.b0,A.aO)
D.dOi=new C.lu("crimson_impact","Crimson Impact","Bold",A.bC,A.kq,A.ej,A.rI,A.eU)
D.dOh=new C.lu("sunset_gallery","Sunset Gallery","Bold",A.fp,A.tZ,A.kr,A.q5,A.mP)
D.Io=w([D.dOd,D.dOt,D.dOk,D.dOr,D.dOc,D.dOs,D.dOe,D.dOp,D.dOf,D.dOo,D.dOm,D.dOg,D.dOj,D.dOn,D.dOq,D.dOu,D.dOb,D.dOl,D.dOi,D.dOh],B.as("O<lu>"))
D.cZU=w([A.c4,D.jz],x.O)
D.dhF=w(["\ud83d\ude00","\ud83d\ude03","\ud83d\ude04","\ud83d\ude01","\ud83d\ude0a","\ud83d\ude0e","\ud83e\udd29","\ud83e\udd73","\ud83d\ude07","\ud83e\udd17","\ud83d\ude4c","\ud83d\udc4f","\ud83e\udd1d","\ud83d\udc4d","\ud83d\udc4b","\ud83d\udcaa","\ud83d\ude4f","\u2728"],x.s)
D.eOC=new B.y("Faces & people",D.dhF)
D.cOi=w(["\ud83d\udca1","\ud83c\udfaf","\ud83d\ude80","\ud83d\udcc8","\ud83d\udcca","\ud83d\udccc","\ud83d\udccd","\ud83d\udce3","\ud83d\udd14","\ud83e\udded","\ud83d\udee0\ufe0f","\ud83d\udd27","\u2699\ufe0f","\ud83e\udde0","\ud83d\udcda","\ud83d\udcdd","\u270f\ufe0f","\ud83d\udcd6","\ud83d\uddc2\ufe0f","\ud83d\udcc5","\u23f0","\u2705","\u274c","\u26a0\ufe0f","\u2753","\u2757"],x.s)
D.eAS=new B.y("Ideas & work",D.cOi)
D.d7y=w(["\ud83c\udf3f","\ud83c\udf31","\ud83c\udf33","\ud83c\udf38","\ud83c\udf3c","\ud83c\udf3b","\ud83c\udf1e","\ud83c\udf08","\ud83c\udf0a","\ud83d\udd25","\ud83d\udca7","\u2744\ufe0f","\ud83c\udf19","\u2b50","\ud83c\udf1f","\u2600\ufe0f","\ud83c\udf40"],x.s)
D.eRO=new B.y("Nature",D.d7y)
D.dhO=w(["\ud83c\udfe0","\ud83c\udfeb","\ud83c\udfe5","\ud83c\udfe6","\ud83c\udfea","\ud83d\ude97","\ud83d\ude8c","\u2708\ufe0f","\ud83c\udf81","\ud83d\udcb0","\ud83d\udcb5","\ud83d\udcb3","\ud83d\uded2","\ud83c\udfc6","\ud83e\udd47","\ud83c\udf89","\ud83c\udf88","\ud83c\udfb6","\ud83c\udfb5","\ud83c\udfa4","\ud83d\udcf7","\ud83c\udfac","\ud83d\uddbc\ufe0f","\ud83d\udcbb","\ud83d\udcf1"],x.s)
D.eKU=new B.y("Places & things",D.dhO)
D.dbd=w(["\u2764\ufe0f","\ud83d\udc9a","\ud83d\udc99","\ud83d\udc9c","\ud83e\udde1","\ud83d\udc9b","\ud83d\udda4","\ud83e\udd0d","\u2b06\ufe0f","\u27a1\ufe0f","\ud83d\udd36","\ud83d\udd37","\ud83d\udd34","\ud83d\udfe2","\ud83d\udd35","\ud83d\udfe1"],x.s)
D.eOX=new B.y("Symbols",D.dbd)
D.d__=w([D.eOC,D.eAS,D.eRO,D.eKU,D.eOX],B.as("O<+(n,ai<n>)>"))
D.bfj=new B.u(1,0.22745098039215686,0.15294117647058825,0.03137254901960784,A.q)
D.d_k=w([A.c4,D.ah5,D.bfj],x.O)
D.b9a=new B.ac(0,A.G,A.M7,A.aLh,40)
D.b8R=new B.ac(0,A.G,A.o9,A.et,8)
D.d_x=w([D.b9a,D.b8R],x.V)
D.d04=w([4280171146,4280640491,4279080072,4278556265],x.t)
D.azG=w([4294677052,4294626325,4293870660,4294210230,4287323382,4282090230,4280472558,4283096704,4294967295,4279310375],x.t)
D.a51=w([A.i3,A.eq,A.bC,A.as,A.ca],x.O)
D.d10=w(["All","Robotic","Nature","Warm","Bold","Clean"],x.s)
D.ahl=new B.u(1,0.043137254901960784,0.0392156862745098,0.03137254901960784,A.q)
D.d1c=w([A.Zq,D.ahl,A.Zq],x.O)
D.d1h=w([A.is,D.jz,D.Mj],x.O)
D.eKG=new B.y(A.bn,D.a2B)
D.eM8=new B.y(A.K,D.a2A)
D.eFI=new B.y(A.e_,D.a2C)
D.d2h=w([D.eKG,D.eM8,D.eFI],B.as("O<+(qm,a0)>"))
D.cW=new C.JE(0,"text")
D.lR=new C.JE(1,"image")
D.fi=new C.JE(2,"shape")
D.TI=new C.JE(3,"pdf")
D.ls=new C.JE(4,"signature")
D.a7X=new C.JE(5,"bio")
D.d3g=w([D.cW,D.lR,D.fi,D.TI,D.ls,D.a7X],B.as("O<JE>"))
D.d3h=w([A.bt,A.cH],B.as("O<Iw>"))
D.d3X=w(["School","Documents","Sign & present"],x.s)
D.b9f=new B.ac(0,A.G,A.ajy,A.vk,28)
D.d4l=w([D.b9f],x.V)
D.d4E=w([4292128567,4279983648,4290190364,4279898632,4293436183,4279060385],x.t)
D.RO=w(["Rocket","Trophy","Party popper","Confetti ball","Balloon","Wrapped gift","Birthday cake","Sparkles","Star","Glowing star","Fire","Light bulb","Gem stone","Crown","Money bag","Dollar banknote","Chart increasing","Bar chart","Bullseye","Globe showing americas","Globe showing europe-africa","Sun","Rainbow","Cloud","High voltage","Red heart","Handshake","Graduation cap","Books","Open book","Pencil","Laptop","Mobile phone","Microphone","Musical notes","Camera","Video camera","Megaphone","Bell","Calendar","Alarm clock","Hourglass done","Key","Locked","Shield","Gear","Hammer and wrench","Magnifying glass tilted left","Package","Shopping cart","House","Office building","Hospital","Ballot box with ballot","Automobile","Airplane","Seedling","Deciduous tree","Evergreen tree","Palm tree","Sunflower","Cherry blossom","Herb","Four leaf clover","Water wave","Mountain","Lion","Tiger face","Dog face","Cat face","Elephant","Unicorn","Butterfly","Honeybee","Owl","Eagle","Dolphin","Turtle","Panda","Fox","Rabbit face","Monkey face","Penguin","Horse","Bird","Peacock","Parrot","Red apple","Pizza","Hot beverage","Soccer ball","Basketball","Artist palette","Clapper board","Robot","Brain","Check mark button","Red question mark","Speech balloon","Compass","Crystal ball","Puzzle piece","1st place medal","Smiling face with sunglasses","Grinning face with big eyes","Star-struck","Partying face","Thinking face","Hundred points"],x.s)
D.aA6=w([A.i3,A.Gm,A.aO,A.c,A.pd,A.aC],x.O)
D.eYI=new B.y(0.1,0.08)
D.eRM=new B.y(0.3,0.05)
D.eFa=new B.y(0.55,0.1)
D.eJC=new B.y(0.8,0.06)
D.eMU=new B.y(0.92,0.16)
D.eMn=new B.y(0.2,0.2)
D.eK6=new B.y(0.7,0.22)
D.eQp=new B.y(0.05,0.4)
D.eNl=new B.y(0.95,0.45)
D.eFY=new B.y(0.12,0.7)
D.eIk=new B.y(0.88,0.75)
D.eIs=new B.y(0.4,0.9)
D.eDq=new B.y(0.65,0.93)
D.eJf=new B.y(0.25,0.97)
D.eKD=new B.y(0.85,0.9)
D.eGT=new B.y(0.5,0.04)
D.d6c=w([D.eYI,D.eRM,D.eFa,D.eJC,D.eMU,D.eMn,D.eK6,D.eQp,D.eNl,D.eFY,D.eIk,D.eIs,D.eDq,D.eJf,D.eKD,D.eGT],x.G)
D.d6l=w([A.c,A.hD,A.aH,A.aY],x.O)
D.eez=new C.jY("office_blue","Office Blue",A.bl,A.d6,A.aM,A.c,A.kO)
D.eeK=new C.jY("campus_green","Campus Green",A.b1,A.ha,A.e6,A.nv,A.u5)
D.eeA=new C.jY("sunset","Sunset",A.fp,A.kr,A.ob,A.i4,A.q5)
D.eeB=new C.jY("midnight","Midnight",A.aE,A.kK,A.cu,A.S,A.dx)
D.eeM=new C.jY("classic","Classic",A.cZ,A.dT,A.m4,A.i5,A.h_)
D.eeJ=new C.jY("rose_gold","Rose Gold",A.hD,A.yg,A.yf,A.wa,A.BW)
D.eeu=new C.jY("ocean_teal","Ocean Teal",A.fo,A.u0,A.oc,A.rH,A.tV)
D.eet=new C.jY("slate_pro","Slate Pro",A.bv,A.S,A.aM,A.aP,A.aO)
D.ees=new C.jY("neon_night","Neon Night",A.ba,A.b0,A.aO,A.dA,A.S)
D.eeE=new C.jY("lavender","Lavender",A.b8,A.og,A.kn,A.q8,A.y6)
D.eeG=new C.jY("coral","Coral",A.ca,A.kr,A.tZ,A.i4,A.mP)
D.eev=new C.jY("forest","Forest",A.hp,A.e5,A.cq,A.m5,A.ev)
D.eew=new C.jY("berry","Berry",A.fd,G.ZS,A.BX,D.aiU,A.kK)
D.eeD=new C.jY("sand","Sand",A.dX,A.i7,A.ob,A.i5,A.bN)
D.eeI=new C.jY("ice","Ice",A.oe,A.FT,A.aM,A.np,A.fF)
D.eey=new C.jY("charcoal","Charcoal",A.am,A.aP,A.cu,A.bp,A.S)
D.eer=new C.jY("mint","Mint",A.aY,A.fR,A.ha,A.m5,A.ql)
D.eeH=new C.jY("crimson","Crimson",A.bC,A.mO,A.kq,A.Gk,A.rI)
D.bih=new B.u(1,0.996078431372549,0.9882352941176471,0.9098039215686274,A.q)
D.eeC=new C.jY("gold","Gold",A.mJ,A.xZ,A.pb,D.bih,A.m3)
D.eeF=new C.jY("aqua","Aqua",A.bU,A.G5,A.p8,A.q9,A.pe)
D.eex=new C.jY("plum","Plum",A.nu,A.yd,A.BX,A.FU,A.rD)
D.eeL=new C.jY("steel","Steel",A.d5,A.d6,A.bp,A.kO,A.ld)
D.a5g=w([D.eez,D.eeK,D.eeA,D.eeB,D.eeM,D.eeJ,D.eeu,D.eet,D.ees,D.eeE,D.eeG,D.eev,D.eew,D.eeD,D.eeI,D.eey,D.eer,D.eeH,D.eeC,D.eeF,D.eex,D.eeL],B.as("O<jY>"))
D.d6I=w([A.c4,A.jB],x.O)
D.TK=new C.hF(10,"rotate3d")
D.Ji=new C.hF(8,"flip")
D.aKK=new C.hF(19,"spiral")
D.qY=new C.hF(16,"bounce")
D.aKN=new C.hF(9,"flipVertical")
D.d6J=w([D.TK,D.Ji,D.aKK,D.qY,D.aKN],x.i)
D.em=w([1353184337,1399144830,3282310938,2522752826,3412831035,4047871263,2874735276,2466505547,1442459680,4134368941,2440481928,625738485,4242007375,3620416197,2151953702,2409849525,1230680542,1729870373,2551114309,3787521629,41234371,317738113,2744600205,3338261355,3881799427,2510066197,3950669247,3663286933,763608788,3542185048,694804553,1154009486,1787413109,2021232372,1799248025,3715217703,3058688446,397248752,1722556617,3023752829,407560035,2184256229,1613975959,1165972322,3765920945,2226023355,480281086,2485848313,1483229296,436028815,2272059028,3086515026,601060267,3791801202,1468997603,715871590,120122290,63092015,2591802758,2768779219,4068943920,2997206819,3127509762,1552029421,723308426,2461301159,4042393587,2715969870,3455375973,3586000134,526529745,2331944644,2639474228,2689987490,853641733,1978398372,971801355,2867814464,111112542,1360031421,4186579262,1023860118,2919579357,1186850381,3045938321,90031217,1876166148,4279586912,620468249,2548678102,3426959497,2006899047,3175278768,2290845959,945494503,3689859193,1191869601,3910091388,3374220536,0,2206629897,1223502642,2893025566,1316117100,4227796733,1446544655,517320253,658058550,1691946762,564550760,3511966619,976107044,2976320012,266819475,3533106868,2660342555,1338359936,2720062561,1766553434,370807324,179999714,3844776128,1138762300,488053522,185403662,2915535858,3114841645,3366526484,2233069911,1275557295,3151862254,4250959779,2670068215,3170202204,3309004356,880737115,1982415755,3703972811,1761406390,1676797112,3403428311,277177154,1076008723,538035844,2099530373,4164795346,288553390,1839278535,1261411869,4080055004,3964831245,3504587127,1813426987,2579067049,4199060497,577038663,3297574056,440397984,3626794326,4019204898,3343796615,3251714265,4272081548,906744984,3481400742,685669029,646887386,2764025151,3835509292,227702864,2613862250,1648787028,3256061430,3904428176,1593260334,4121936770,3196083615,2090061929,2838353263,3004310991,999926984,2809993232,1852021992,2075868123,158869197,4095236462,28809964,2828685187,1701746150,2129067946,147831841,3873969647,3650873274,3459673930,3557400554,3598495785,2947720241,824393514,815048134,3227951669,935087732,2798289660,2966458592,366520115,1251476721,4158319681,240176511,804688151,2379631990,1303441219,1414376140,3741619940,3820343710,461924940,3089050817,2136040774,82468509,1563790337,1937016826,776014843,1511876531,1389550482,861278441,323475053,2355222426,2047648055,2383738969,2302415851,3995576782,902390199,3991215329,1018251130,1507840668,1064563285,2043548696,3208103795,3939366739,1537932639,342834655,2262516856,2180231114,1053059257,741614648,1598071746,1925389590,203809468,2336832552,1100287487,1895934009,3736275976,2632234200,2428589668,1636092795,1890988757,1952214088,1113045200],x.t)
D.d75=w([0.62,1],x.x)
D.d7I=w([0,0.32,0.68,1],x.x)
D.n9=new C.hF(6,"zoom")
D.ve=new C.hF(4,"slideUp")
D.vd=new C.hF(2,"slideLeft")
D.d7S=w([D.n9,D.Ji,D.ve,D.TK,D.vd],x.i)
D.d8n=w([A.bT,A.hD,A.ir,A.i3,A.c],x.O)
D.b95=new B.ac(0,A.G,D.ahB,A.vk,30)
D.d99=w([D.b95],x.V)
D.eq9=new B.o(0,-2.5)
D.eq_=new B.o(-2.5,0)
D.eob=new B.o(2.5,0)
D.d9c=w([A.TY,A.a8o,A.aLV,A.a8n,D.eq9,O.aLR,D.eq_,D.eob],x.dN)
D.Iu=w([0,79764919,159529838,222504665,319059676,398814059,445009330,507990021,638119352,583659535,797628118,726387553,890018660,835552979,1015980042,944750013,1276238704,1221641927,1167319070,1095957929,1595256236,1540665371,1452775106,1381403509,1780037320,1859660671,1671105958,1733955601,2031960084,2111593891,1889500026,1952343757,2552477408,2632100695,2443283854,2506133561,2334638140,2414271883,2191915858,2254759653,3190512472,3135915759,3081330742,3009969537,2905550212,2850959411,2762807018,2691435357,3560074640,3505614887,3719321342,3648080713,3342211916,3287746299,3467911202,3396681109,4063920168,4143685023,4223187782,4286162673,3779000052,3858754371,3904687514,3967668269,881225847,809987520,1023691545,969234094,662832811,591600412,771767749,717299826,311336399,374308984,453813921,533576470,25881363,88864420,134795389,214552010,2023205639,2086057648,1897238633,1976864222,1804852699,1867694188,1645340341,1724971778,1587496639,1516133128,1461550545,1406951526,1302016099,1230646740,1142491917,1087903418,2896545431,2825181984,2770861561,2716262478,3215044683,3143675388,3055782693,3001194130,2326604591,2389456536,2200899649,2280525302,2578013683,2640855108,2418763421,2498394922,3769900519,3832873040,3912640137,3992402750,4088425275,4151408268,4197601365,4277358050,3334271071,3263032808,3476998961,3422541446,3585640067,3514407732,3694837229,3640369242,1762451694,1842216281,1619975040,1682949687,2047383090,2127137669,1938468188,2001449195,1325665622,1271206113,1183200824,1111960463,1543535498,1489069629,1434599652,1363369299,622672798,568075817,748617968,677256519,907627842,853037301,1067152940,995781531,51762726,131386257,177728840,240578815,269590778,349224269,429104020,491947555,4046411278,4126034873,4172115296,4234965207,3794477266,3874110821,3953728444,4016571915,3609705398,3555108353,3735388376,3664026991,3290680682,3236090077,3449943556,3378572211,3174993278,3120533705,3032266256,2961025959,2923101090,2868635157,2813903052,2742672763,2604032198,2683796849,2461293480,2524268063,2284983834,2364738477,2175806836,2238787779,1569362073,1498123566,1409854455,1355396672,1317987909,1246755826,1192025387,1137557660,2072149281,2135122070,1912620623,1992383480,1753615357,1816598090,1627664531,1707420964,295390185,358241886,404320391,483945776,43990325,106832002,186451547,266083308,932423249,861060070,1041341759,986742920,613929101,542559546,756411363,701822548,3316196985,3244833742,3425377559,3370778784,3601682597,3530312978,3744426955,3689838204,3819031489,3881883254,3928223919,4007849240,4037393693,4100235434,4180117107,4259748804,2310601993,2373574846,2151335527,2231098320,2596047829,2659030626,2470359227,2550115596,2947551409,2876312838,2788305887,2733848168,3165939309,3094707162,3040238851,2985771188],x.t)
D.d9K=w([23,114,69,56,80,144],x.t)
D.dad=w(["Make the headline shorter","Add a paragraph about the Civic Registry","Write the whole thing in Swahili","Change the newspaper name"],x.s)
D.daG=w(["Add a slide about\u2026","Make this slide shorter","Translate everything to Swahili","Add a slide with our contact details","Change the style to luxury","Remove the last slide"],x.s)
D.dco=w([null,4294626325,4294828103,4283096704,4280472558,4294210230,4294677052,4293870660,4287323382,4282090230,4294967295,4279310375],x.Z)
D.dct=w(["Kichwa cha Mtu: [Kiasi kilichosalia au thamani]","Mbuzi Mbili","Ngyoka","Mmoko"],x.s)
D.bk=new C.vd(0,"rectangle")
D.eZ=new C.vd(1,"circle")
D.lt=new C.vd(6,"hexagon")
D.dcJ=w([D.bk,D.eZ,D.lt],x.m)
D.oL=w([99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22],x.t)
D.aj2=new B.u(1,0.24313725490196078,0.47843137254901963,0.30980392156862746,A.q)
D.ddh=w([D.aj2,A.e5],x.O)
D.eFr=new B.y("","Classic")
D.eDF=new B.y("caps","Bold caps")
D.eQs=new B.y("elegant","Elegant")
D.eWy=new B.y("shadow","Shadow")
D.eK_=new B.y("neon","Neon glow")
D.eUe=new B.y("marker","Highlighter")
D.eWM=new B.y("stamp","Stamp")
D.eIS=new B.y("threed","3D")
D.eQZ=new B.y("fire","Fire")
D.eRY=new B.y("ice","Ice")
D.ePB=new B.y("chalk","Chalk")
D.ePG=new B.y("comic","Comic")
D.eY3=new B.y("softglow","Soft glow")
D.eT0=new B.y("lowercase","Lowercase")
D.eQa=new B.y("double","Echo")
D.eYc=new B.y("whisper","Whisper")
D.aB2=w([D.eFr,D.eDF,D.eQs,D.eWy,D.eK_,M.aRc,D.eUe,D.eWM,M.aRe,D.eIS,M.aR6,D.eQZ,D.eRY,D.ePB,D.ePG,A.Uu,Au.aRf,D.eY3,D.eT0,D.eQa,D.eYc],x.L)
D.deA=w([3,5,7,10,12,15],x.t)
D.dga=w([A.bT,A.bN,A.c,A.eL,A.cF],x.O)
D.dFH=new C.tN(10,"cardWorld")
D.DP=new C.C9(3,"rounded")
D.dWf=new C.lx("world","NGMY World",D.dFH,D.DP,4278918980,4278521378,4294967295,4280118271,"logo","Roboto","Roboto","Roboto","a modern digital news site: clear, confident and direct, a strong plain headline and a one-sentence summary",!1,"none",!0,!1)
D.dFI=new C.tN(11,"cardSplit")
D.dWb=new C.lx("business","Business Wire",D.dFI,D.DP,4294967295,4294507260,4279179050,4292943150,"logo","Roboto","Roboto","Roboto","a clean business news site: precise, informative and professional, with a plain, strong headline",!1,"none",!1,!1)
D.dFJ=new C.tN(12,"cardBreaking")
D.dWo=new C.lx("breaking","Breaking Red",D.dFJ,D.DP,4278913807,4280944139,4294967295,4292943150,"logo","Roboto","Roboto","Roboto","a breaking-news broadcast: urgent, factual and clear, a punchy headline and a tight summary",!1,"none",!0,!1)
D.dFK=new C.tN(13,"cardFeature")
D.dWh=new C.lx("feature","Tech Feature",D.dFK,D.DP,4294967295,4294047225,4279179050,4280640491,"logo","Roboto","Roboto","Roboto","a modern feature article: informative, engaging and well explained",!1,"none",!1,!1)
D.aJn=new C.tN(6,"circle")
D.aJh=new C.C9(4,"circle")
D.dWl=new C.lx("parchment","Royal Circle",D.aJn,D.aJh,4294241234,4293450160,4281278992,4285211048,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a stately royal edition: dignified, noble and ceremonial",!0,"sepia",!1,!1)
D.dWa=new C.lx("ocean","Blue Ocean",D.aJn,D.aJh,4293916415,4292602622,4278984254,4278413729,"centered","NgmyAbril","NgmyAbril","NgmyOldStandard","a calm, trustworthy paper: clear, steady and reassuring",!1,"none",!1,!1)
D.dFN=new C.tN(7,"rail")
D.aJg=new C.C9(1,"double")
D.dWc=new C.lx("forest","Green Leaf",D.dFN,D.aJg,4293983732,4292672743,4278529558,4279599165,"centered","NgmyAbril","NgmyAbril","NgmyOldStandard","a calm community paper about growth and togetherness: gentle, hopeful and clear",!1,"none",!1,!1)
D.aJk=new C.tN(1,"sideBySide")
D.dWq=new C.lx("herald","NGMY Herald",D.aJk,D.DP,4294967295,4294308863,4280163147,4286331629,"split","NgmyAbril","NgmyAbril","NgmyOldStandard","the proud NGMY Herald: warm, hopeful and community-minded, in NGMY purple",!1,"none",!1,!1)
D.aJj=new C.tN(0,"classic")
D.a78=new C.C9(9,"shadow")
D.dWp=new C.lx("daily","The Daily",D.aJj,D.a78,4294967295,4294243570,4279308561,4292225064,"bar","NgmyAbril","NgmyAbril","NgmyOldStandard","a modern daily newspaper: crisp, clear and energetic, with a punchy headline",!1,"none",!1,!0)
D.dFL=new C.tN(2,"splash")
D.aJi=new C.C9(6,"cutCorner")
D.dW9=new C.lx("tabloid","Big Tabloid",D.dFL,D.aJi,4294967295,4294965216,4279308561,4292943176,"bar","Roboto","NgmyAbril","Roboto","a bold tabloid: exciting, short punchy sentences and a loud, attention-grabbing headline (still truthful)",!1,"none",!1,!0)
D.aJo=new C.tN(9,"minimal")
D.dWk=new C.lx("modern","Modern Digest",D.aJo,D.DP,4294507260,4293060848,4279179050,4279080072,"logo","Roboto","Roboto","Roboto","a clean modern digest: simple words, short paragraphs, friendly and clear",!1,"none",!1,!1)
D.aJl=new C.tN(3,"magazine")
D.aJf=new C.C9(0,"plain")
D.dWg=new C.lx("midnight","Midnight Edition",D.aJl,D.aJf,4279310375,4278915104,4294047225,4294626325,"logo","Roboto","NgmyAbril","NgmyOldStandard","a dramatic late-night edition: confident, cinematic and polished",!1,"none",!0,!0)
D.dFO=new C.tN(8,"banner")
D.dWi=new C.lx("metro","Metro Wire",D.dFO,D.aJi,4294047225,4293060848,4278915616,4280640491,"logo","Roboto","Roboto","Roboto","a modern news wire: fast, factual and direct, like breaking news",!1,"none",!1,!0)
D.dFG=new C.C9(8,"arch")
D.dWj=new C.lx("sunrise","Sunrise Post",D.aJl,D.dFG,4294965229,4294962645,4282064136,4293548044,"split","NgmyAbril","NgmyAbril","NgmyOldStandard","a cheerful morning paper: bright, optimistic and welcoming",!1,"none",!1,!1)
D.aJm=new C.tN(5,"scrapbook")
D.dFF=new C.C9(5,"tape")
D.dWe=new C.lx("neon","Neon Beat",D.aJm,D.dFF,4280163147,4279175726,4294308863,4293675161,"split","NgmyAbril","NgmyAbril","Roboto","a youthful neon culture paper: fresh, bold, energetic and fun",!1,"none",!0,!1)
D.dFM=new C.tN(4,"wrap")
D.dWr=new C.lx("gold","Golden Press",D.dFM,D.a78,4279505162,4278847748,4294898631,4294626325,"logo","Roboto","NgmyAbril","NgmyOldStandard","a luxurious golden press edition: grand, elegant and prestigious",!1,"none",!0,!0)
D.dWs=new C.lx("minimal","Paper White",D.aJo,D.a78,4294967295,4294638330,4279769115,4279769115,"split","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a quiet, elegant long-read: thoughtful, simple and beautifully written",!1,"none",!1,!1)
D.dWd=new C.lx("gazette","Fresh Gazette",D.aJj,D.aJg,4294373341,4293582786,4280949518,4288295954,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a refined town gazette: formal, dignified and warm, with a strong headline",!1,"none",!1,!0)
D.dWn=new C.lx("times","Classic Times",D.aJk,D.aJf,4294637810,4293913565,4279636750,4280171146,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a serious classic broadsheet: calm, factual, authoritative, with a strong headline and a clear subhead",!1,"bw",!1,!1)
D.Tf=new C.C9(2,"polaroid")
D.dWm=new C.lx("scrapbook","Memory Scrapbook",D.aJm,D.Tf,4294437835,4293580710,4282001946,4290007817,"split","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a warm scrapbook clipping: personal, nostalgic and heartfelt",!1,"sepia",!1,!1)
D.a5x=w([D.dWf,D.dWb,D.dWo,D.dWh,D.dWl,D.dWa,D.dWc,D.dWq,D.dWp,D.dW9,D.dWk,D.dWg,D.dWi,D.dWj,D.dWe,D.dWr,D.dWs,D.dWd,D.dWn,D.dWm],B.as("O<lx>"))
D.dgm=w([0.45,1],x.x)
D.Iy=w([619,720,127,481,931,816,813,233,566,247,985,724,205,454,863,491,741,242,949,214,733,859,335,708,621,574,73,654,730,472,419,436,278,496,867,210,399,680,480,51,878,465,811,169,869,675,611,697,867,561,862,687,507,283,482,129,807,591,733,623,150,238,59,379,684,877,625,169,643,105,170,607,520,932,727,476,693,425,174,647,73,122,335,530,442,853,695,249,445,515,909,545,703,919,874,474,882,500,594,612,641,801,220,162,819,984,589,513,495,799,161,604,958,533,221,400,386,867,600,782,382,596,414,171,516,375,682,485,911,276,98,553,163,354,666,933,424,341,533,870,227,730,475,186,263,647,537,686,600,224,469,68,770,919,190,373,294,822,808,206,184,943,795,384,383,461,404,758,839,887,715,67,618,276,204,918,873,777,604,560,951,160,578,722,79,804,96,409,713,940,652,934,970,447,318,353,859,672,112,785,645,863,803,350,139,93,354,99,820,908,609,772,154,274,580,184,79,626,630,742,653,282,762,623,680,81,927,626,789,125,411,521,938,300,821,78,343,175,128,250,170,774,972,275,999,639,495,78,352,126,857,956,358,619,580,124,737,594,701,612,669,112,134,694,363,992,809,743,168,974,944,375,748,52,600,747,642,182,862,81,344,805,988,739,511,655,814,334,249,515,897,955,664,981,649,113,974,459,893,228,433,837,553,268,926,240,102,654,459,51,686,754,806,760,493,403,415,394,687,700,946,670,656,610,738,392,760,799,887,653,978,321,576,617,626,502,894,679,243,440,680,879,194,572,640,724,926,56,204,700,707,151,457,449,797,195,791,558,945,679,297,59,87,824,713,663,412,693,342,606,134,108,571,364,631,212,174,643,304,329,343,97,430,751,497,314,983,374,822,928,140,206,73,263,980,736,876,478,430,305,170,514,364,692,829,82,855,953,676,246,369,970,294,750,807,827,150,790,288,923,804,378,215,828,592,281,565,555,710,82,896,831,547,261,524,462,293,465,502,56,661,821,976,991,658,869,905,758,745,193,768,550,608,933,378,286,215,979,792,961,61,688,793,644,986,403,106,366,905,644,372,567,466,434,645,210,389,550,919,135,780,773,635,389,707,100,626,958,165,504,920,176,193,713,857,265,203,50,668,108,645,990,626,197,510,357,358,850,858,364,936,638],x.t)
D.dgM=w(["video/webm;codecs=vp9","video/webm;codecs=vp8","video/webm","video/mp4"],x.s)
D.hyC=new C.oU("Original",0,1,1,0,0,0)
D.hyG=new C.oU("Black & white",0,1.1,0,0,0,0)
D.hyt=new C.oU("Noir",-0.05,1.55,0,0,0,0)
D.hyx=new C.oU("Sepia",0,1,0.25,0.9,0,0)
D.hyw=new C.oU("Vivid",0,1.15,1.6,0,0,0)
D.hyp=new C.oU("Pop",0,1.3,1.9,0,0,0)
D.hyr=new C.oU("Faded",0.06,0.85,0.8,0.1,0,0.4)
D.hyD=new C.oU("Matte",0,0.9,0.85,0,0,0.55)
D.hyy=new C.oU("Cool",0,1.05,1,-0.8,0,0)
D.hyF=new C.oU("Warm",0.03,1.05,1.1,0.8,0,0)
D.hyq=new C.oU("Golden hour",0.04,1,1.25,1,0,0)
D.hyv=new C.oU("Moonlight",-0.08,1.1,0.8,-0.8,-0.1,0)
D.hyE=new C.oU("Dreamy",0.08,0.85,1.1,0.2,0,0.25)
D.hyu=new C.oU("Dramatic",-0.05,1.5,1.2,0,0,0)
D.hyA=new C.oU("Retro",0,0.9,0.7,0.4,0,0.35)
D.hyz=new C.oU("Forest",0,1,1.2,-0.1,-0.45,0)
D.hyB=new C.oU("Rose",0,1,1.1,0.3,0.4,0)
D.hys=new C.oU("Ocean",0,1,1.2,-0.5,-0.2,0)
D.dgN=w([D.hyC,D.hyG,D.hyt,D.hyx,D.hyw,D.hyp,D.hyr,D.hyD,D.hyy,D.hyF,D.hyq,D.hyv,D.hyE,D.hyu,D.hyA,D.hyz,D.hyB,D.hys],B.as("O<oU>"))
D.beF=new B.u(1,0.0392156862745098,0.1803921568627451,0.09019607843137255,A.q)
D.dgP=w([D.aj2,A.e5,D.beF],x.O)
D.eAL=new B.y(0.12,0.3)
D.eS8=new B.y(0.26,0.75)
D.eQo=new B.y(0.8,0.22)
D.eWY=new B.y(0.9,0.7)
D.eT_=new B.y(0.5,0.15)
D.eV8=new B.y(0.65,0.85)
D.eHp=new B.y(0.08,0.85)
D.dh4=w([D.eAL,D.eS8,D.eQo,D.eWY,D.eT_,D.eV8,D.eHp],x.G)
D.aBf=w([A.ba,A.bT,A.br,A.b4],x.O)
D.di_=w([y.L,"Mbuzi Wawili","Ngyoka","Mmoko"],x.s)
D.dic=w([A.c,A.fF,A.dk,A.w_],x.O)
D.bix=new B.u(1,0.10980392156862745,0.09019607843137255,0.06274509803921569,A.q)
D.djg=w([D.bix,D.ahl],x.O)
D.dji=w([A.u3,A.aC],x.O)
D.djy=w([0,0.25,0.75,1],x.x)
D.djA=w([A.y2,A.pd],x.O)
D.aKk=new C.la(10,"kenteSunset")
D.hDJ=w([D.ahQ,A.kl,A.aC],x.O)
D.dRs=new C.jC("kuhowa_kente_sunset","Kente ya Jua",y.H,D.aKk,4294964964,4282000405,4279983648,D.ka)
D.aKl=new C.la(11,"indigoMudcloth")
D.bfR=new B.u(1,0.9686274509803922,0.9411764705882353,0.8941176470588236,A.q)
D.hDX=w([D.bfR,A.ahi,A.is],x.O)
D.dRA=new C.jC("kuhowa_indigo_mudcloth","Nguo ya Indigo",y.n,D.aKl,4294439140,4279903102,4279903102,D.ka)
D.aKm=new C.la(12,"adinkraRoyal")
D.buU=new B.u(1,0.4196078431372549,0.24705882352941178,0.12156862745098039,A.q)
D.hDY=w([D.ag3,D.buU,A.aC],x.O)
D.dRC=new C.jC("kuhowa_adinkra_royal","Muhuri wa Adinkra",y.z,D.aKm,4294965484,4285218591,4287322667,D.ka)
D.aKn=new C.la(13,"nileLotus")
D.bqP=new B.u(1,0.9568627450980393,0.9686274509803922,0.9568627450980393,A.q)
D.bmW=new B.u(1,0.058823529411764705,0.3607843137254902,0.3607843137254902,A.q)
D.hE2=w([D.bqP,D.bmW,A.is],x.O)
D.dRB=new C.jC("kuhowa_nile_lotus","Lotus ya Nile","Nguzo za papyrus na ua la lotus juu.",D.aKn,4294244340,4279196764,4279196764,D.ka)
D.aKo=new C.la(14,"shweshweIvory")
D.bkN=new B.u(1,0.9725490196078431,0.9568627450980393,0.9333333333333333,A.q)
D.bjn=new B.u(1,0.10588235294117647,0.16470588235294117,0.2901960784313726,A.q)
D.bgo=new B.u(1,0.7686274509803922,0.3607843137254902,0.24313725490196078,A.q)
D.hDK=w([D.bkN,D.bjn,D.bgo],x.O)
D.dRx=new C.jC("kuhowa_shweshwe_ivory","Shweshwe","Nguo ya shweshwe \xb7 kadi ya pembe ndani.",D.aKo,4294505710,4279970378,4291058750,D.ka)
D.th=new C.la(15,"certIvoryNavy")
D.hDI=w([D.N5,D.jz,A.is],x.O)
D.aJV=new C.y8(1,"ringsNdoa")
D.dRu=new C.jC("kuhowa_rings_ndoa","Hati ya Ndoa","Pete mbili \xb7 vichwa vya kidonge \xb7 hati rasmi.",D.th,4294966259,4279378237,4291404327,D.aJV)
D.a7E=new C.y8(2,"coupleCards")
D.dRp=new C.jC("kuhowa_couple_taarifa","Taarifa za Wanandoa","Picha ya mwanamume na mwanamke kila upande.",D.th,4294966259,4279378237,4291404327,D.a7E)
D.DS=new C.la(18,"certIvoryNavyBar")
D.ag2=new B.u(1,1,0.9882352941176471,0.9686274509803922,A.q)
D.hDW=w([D.ag2,D.jz,A.is],x.O)
D.aJW=new C.y8(3,"kuhoweshaForm")
D.dRn=new C.jC("kuhowa_barua","Barua ya Kuhowesha","Barua rasmi \xb7 pete \xb7 orodha ya vitu.",D.DS,4294966519,4279378237,4291404327,D.aJW)
D.ahz=new B.u(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,A.q)
D.hEf=w([D.N5,D.ahz,A.is],x.O)
D.a7F=new C.y8(4,"mahariPande")
D.dRq=new C.jC("kuhowa_mahari_pande","Mahari ya Pande","Masharti ya mahari \xb7 pande mbili.",D.th,4294966259,4279904068,4291404327,D.a7F)
D.aKp=new C.la(16,"certIvoryGreen")
D.bk5=new B.u(1,0.12156862745098039,0.30196078431372547,0.22745098039215686,A.q)
D.hDM=w([A.Mb,D.bk5,A.is],x.O)
D.aJX=new C.y8(5,"familiaMti")
D.dRw=new C.jC("kuhowa_sheria_familia","Sheria za Familia","Mti wa familia \xb7 sheria za pamoja.",D.aKp,4294966776,4280241466,4291404327,D.aJX)
D.a7G=new C.y8(6,"ndoaSafi")
D.dRo=new C.jC("kuhowa_ndoa_pamoja","Ndoa ya Pamoja","Safu mbili \xb7 mume na mke.",D.DS,4294966519,4279378237,4291404327,D.a7G)
D.bp0=new B.u(1,0.22745098039215686,0.16470588235294117,0.06274509803921569,A.q)
D.hDP=w([D.N5,A.is,D.bp0],x.O)
D.a7H=new C.y8(7,"peteWide")
D.dRt=new C.jC("kuhowa_pete_pana","Pete Pana","Pete kubwa za dhahabu \xb7 nafasi wazi.",D.th,4294966259,4282001936,4291404327,D.a7H)
D.dRD=new C.y8(8,"muhuriCrest")
D.dRm=new C.jC("kuhowa_muhuri","Muhuri wa Familia","Muhuri mkubwa juu \xb7 fomu rasmi.",D.th,4294966259,4279378237,4291404327,D.dRD)
D.hDZ=w([D.ag2,D.ahz,A.is],x.O)
D.dRE=new C.y8(9,"fomuWazi")
D.dRz=new C.jC("kuhowa_fomu","Fomu ya Ndoa","Fomu yenye mistari \xb7 sehemu wazi.",D.DS,4294966519,4279904068,4291404327,D.dRE)
D.aKq=new C.la(17,"certIvoryRose")
D.bkS=new B.u(1,1,0.9725490196078431,0.9607843137254902,A.q)
D.hE1=w([D.bkS,D.aiy,A.is],x.O)
D.a7D=new C.y8(10,"upendoOrnate")
D.dRv=new C.jC("kuhowa_upendo","Upendo wa Dhahabu","Mapambo ya dhahabu \xb7 picha za wanandoa.",D.aKq,4294965493,4286200650,4291404327,D.a7D)
D.dk1=w([D.dRs,D.dRA,D.dRC,D.dRB,D.dRx,D.dRu,D.dRp,D.dRn,D.dRq,D.dRw,D.dRo,D.dRt,D.dRm,D.dRz,D.dRv],x.h)
D.dk4=w(["HOME: the first tab. It has the NGMY brand, the Helper AI, loans, and the tech frames: Neural Link, Signal Grid, Core Protocol and the Vault Channel arcade.","TOOL HUB: the second tab. It holds the Business Card Creator, Menu Studio (restaurant menus and Bio link pages) and Business Essentials (invoices, receipts, flyers and other business papers).","SLIDES: the third tab. Presentations with many designs, an AI that makes decks, and Marriage documents.","NGMY HUB: the centre tab. Civic Registry, NGMY Store, Help Center and Insurance, Document Scanner, and the App Builder when it is switched on.","ADVISORS: the fifth tab. AI advisors you can chat with like real people. They help with jobs, applications, benefits and everyday questions, and they can answer in Swahili when you write Swahili.","CREATOR HUB: the sixth tab. Doc Share, Quote Calc, QR Generator, Play Zone, Kiswahili School, Recorder Studio, Video Studio and Phone Unlock.","PROFILE: the seventh tab. Theme, logout, legal pages and Worksheets (Projects, Cashier IOUs and receipts, and the Family Tree).","GROWTH INCOME: For now the Growth Income button (the wifi icon, top right of Home) works only for the admin: everyone else sees the same icon but it does not open. members buy an investment plan and earn daily by clocking in, on work days only (Monday to Friday, there is no clock-in on Saturday and Sunday). The wallet shows the balance, deposits, withdrawals and a history of the last two months, with the balance before and after each move. Missing 3 work days in a month removes the investment plan (a new plan must be bought), and the count starts again each month; a warning shows after the 2nd missed day. Clocking in 30 minutes late or more takes 30 percent off the earnings for that day. The investment plans are $5, $20, $30, $50 and $100; $100 is the most expensive plan and nothing above it is offered.","KING AND QUEEN CROWN: a crown badge for special members. A King or Queen receives a daily crown reward of one dollar, and the receipt shows in the wallet history.","WALLET: one balance everywhere in the app. The server keeps the balance so every phone shows the same number.","LOANS: Loan Services is a community help service: it helps members when they need help, for example funerals, buying a car, car repairs or family emergencies. For now the Loan Service button (top left of Home) works only for the admin: everyone else sees the same icon but it cannot be opened. The loan calculator (amount, interest rate and repayment period to try, the whole cost and every payment, and a button to make the tried terms the real loan terms) is for the admin only. The How it works frame is a five-step timeline (Apply, Review, Funds, Repay, Released). A loan is applied for with collateral, repaid in weekly payments, and the collateral is released back to the member when the loan is fully repaid. The admin sets the interest rate, the biggest loan and the repayment period in Loan Center, Loan terms; nothing is written into the screens. Before applying, the member sees the full cost (amount, interest, total to repay, number of payments, each payment, repayment period) and must tap I agree; the agreement is saved with the application. The application asks what the member needs help with (Funeral or Burial, Buy a car, Car repair, Family emergency, Other need), the date needed, the collateral with its estimated value and photos, and an optional family or guarantor contact. A loan shows as Pending, Approved, Paid Out, In Repayment, Repaid, Overdue or Declined, and the member sees a gentle reminder about the next payment.","NGMY STORE: buy and sell items inside the app. Approved members can open a store.","CIVIC REGISTRY: the community system for the M'MBONDO community. It registers members with a Registry ID card, counts members by state, records contributions with receipts, and lets Authorized Registrars enroll families. Registrars can print the community roster as a PDF.","CIVIC BIRTHDAYS AND FAMILY: the registry records children and their ages, shows a birthday reminder two days before, and congratulates a child on turning 18. Members can have a nickname that others search for, while registrars see the real name.","CIVIC VOTING AND STATE WALLET: the community votes on decisions inside the app, and each state has a wallet showing its funds, spending and trust deposits so the money is visible to everyone.","LIGHTNING GROUPS: groups inside the Civic Registry where people give together. A person asks to join with a name, phone number, state and address, and the group owner approves. The group shows named contribution rounds, receipts, who gave, who missed and how many times.","JOBS AND HELP: help finding jobs, house repairs and house workers, a Help Center with insurance, and the Helper AI for support.","CORE PROTOCOL: a collection of studios for curious minds: Universe, Electronics Lab (the AI Inventor now lives inside it as the AI button at the top), Construction Lab (real 3D wiring, plumbing and a house), Discovery Lab (Body Explorer, a real 3D human you can turn and look inside), Toolbox, Reaction Lab, Spark Painter, Rocket Lander, Title Animator and Circuit Lab. (Molecule Maker, DNA Lab, Ecosystem Lab, Balance Lab, Gear Lab, Laser Maze, Light Mixer, Orbit Studio, Swarm Studio, Chain Burst, Marble Music and Orbit Sequencer and Cipher Lab were removed and no longer exist.)","CITY AVATARS: the people of My House are the real characters from the NGMY 3D viewer files (Xbot.glb the X Bot, Michelle.glb the Dancer, Soldier.glb the Soldier), kept in the app (assets/avatars) and drawn with their own skeletons and animations (the X Bot and Soldier stand and walk, the Dancer dances). Their skin pictures are painted onto the body faces, and the body is thinned to a few thousand faces so the game stays quick, so they look a little more faceted than in the viewer. The X Bot is the one who goes through the rooms on the house tour and that you steer outside; in the tour sheet (Play) a Who walks the house? choice switches the tour guide to the Dancer, the Soldier or a plain person. The residents are the three characters too: they stay in the house, some stroll out into the garden for a while and go back in, and a resident with an open call for help shows a phone icon in the name. In every view of My House you can turn the camera all the way round (360) by dragging, with no button needed; Look all round (360) only moves you to the middle of the room at a normal distance. Names no longer float over the people in the rooms: tap a person to see their card. Outside, in the garden and town, the sky behind is space with stars, a galaxy, the Earth and the Moon. The Dancer is played slowly and kept on her spot, and the Soldier now faces the way he walks.","MY HOUSE, THE HALL AND THE CITY: the hall is a wide lobby: three doors in the middle of the back wall (the living room, the kitchen, the first bedroom) with a big video-wall TV on each side showing NGMY ads, the other seven doors on the two short walls, a blue carpet with the NGMY logo, sofas, armchairs, plants, lamps and consoles. In the Tour sheet, Book a hallway tour plays a tour of just the hall. Tapping a door asks whether to open it, close it or go through it. Outlets, switches, doors with their handles, TV frames, wall trim and the wiring job room are drawn so they never disappear when the camera turns, and from outside the house its walls hide the room. The residents live in the city (the Garden is the whole city): they walk about the streets, those with a call for help stand with a phone and a Help sign, and tapping the hospital or the shop building (or the Calls, Hospital, Shop and People buttons, or Community) opens those services over the city. In the city a Walk the city button gives you the walking controls, and Build adds roads, buildings and other things. Nobody is placed in the rooms during the house tour.","WALKING THE CITY: in the Garden (the whole city) press Walk the city and a round stick appears: slide a finger on it to walk, further from the middle is faster, and the Run and Jump buttons make the person run and jump. Walk up to the front door of the house, the hospital or the shop and the person goes in; inside the hospital walk onto the blue mat to admit the sick and up to a bed to treat the patient, inside the shop walk onto the yellow mat for food and the purple mat for medicine, and walk onto the green mat to go out. Near an animal an Act button feeds it for a point, and near a car, ambulance or fire truck it lets you get in and drive it with the stick and park it. When somebody calls for help the phone rings with a call banner: Answer opens the calls. Phone, hospital, shop, animals and cars are all in the city, and the hall of the house shows only three doors: the other rooms are reached from the map or from their own door.","ELECTRICAL SAFETY SCHOOL: every wiring lesson and job is judged by one safety engine. A job is CORRECT only if the connections are on the right terminals, complete and safe; a device that works (a TV that plays, a fan that spins) is never proof of safe wiring. Swapped hot and neutral, a missing neutral or ground, neutral used as ground, hot touching ground, loose or bare wires and a fan on a plain box are all UNSAFE and can never pass. Results are CORRECT, INCORRECT, UNSAFE, INCOMPLETE or REQUIRES VERIFICATION. The lessons have Learn (a wrong wire is refused and explained), Practice (anything is allowed and power-on shows the consequence with arcs, sparks, smoke or flames) and Test (silent, graded on submit with score, explanations and violations). The wiring job has a Test mode switch and Submit for inspection in its settings. A Wire guide lists U.S. wire colors, exceptions and the rule to verify. Diagram lessons (three-way switch, fan with a light kit) are in the Construction Lab menu.","CITY LIFE AND THE HALL, UPDATE: seen from outside the house, the walls on your side are left out (like a doll house) so the TVs and the logo carpet are never hidden at any angle, and the TV pictures also show when seen from behind. The house outside has a big wide NGMY poster on the back wall and different framed posters on the sides. In the city every resident is busy with a real job (the nurse on duty at the hospital, feeding the animals, teaching at the school, washing the car, cooking, resting on the bench, watering the flowers), with props such as steam, grain and water, and a small name for the activity. The city has many more houses. Inside the hospital there are a nurse, a doctor and patients lying in their beds, and you treat them by walking to them. A Full screen button in the city turns the game on its side like a video and keeps only the stick, Run, Jump and Act buttons. When somebody calls, a phone-call screen with a green Answer and a red hang-up button appears; answering opens a text message with what the person needs, a button that shows where they are and a button that takes you to fix it.","WIRING CONTROLS, UPDATE: in a wiring lesson or job, tap a house wire to pick it up (it glows), then tap the screw, wire nut or fixture wire it joins and they connect; tap a joined wire, nut or screw again to take it off. Ceiling lights and fans are shown from the side so the house wires, fixture wires and nuts are all in view. Swiping up looks up and swiping right turns right in every 3D view. The wiring job has Look up (from the floor to the ceiling) and Behind the TV buttons, the Voltage tester sits at the end of the tray where Unplug was, and tapping something plugged in pulls the plug (a TV no longer opens full screen). The house has a Look up at the ceiling button. The Construction Lab menu has a new Safety inspection job (a test job marked on submit). The plumbing sink, basin, mirror and shut-off valves are bigger and look more like a real bathroom sink.","LESSON ROOMS, UPDATE: every lesson room is now big and bare (no furniture, no bathroom fixtures in the electrical lessons), so the outlets and the switch are in the open and nothing hides them or the TV. The wall TV is big by default (Cinema 150) and the TV button lets you choose the wall it hangs on: back, left or right.","CITY AND PLUMBING, UPDATE: the city is now a big town (1800 by 1400) with streets both ways and houses spread over nearly all the land; far-away houses are not drawn while you walk close by, to keep it quick. The Full screen button sits in the row with the door buttons next to Living room. The top buttons are smaller. The Construction Lab menu no longer has the Learn mode and Practice mode buttons or the Community card (the community lives in the city). Seen from outside the house, a whole wall is left out or kept, never half a wall. In the lessons and the wiring job the wall, studs, box and cable cannot be tapped, only the wires and screws. The plumbing job now shows a blue Next box that says exactly what to do, with a Show me button that picks the tool and turns the view to the spot; it shows only the parts the job needs; and a leak shows big drops, a puddle and a red LEAK label that names the joint, with the instruction to turn the water off and tighten it with the wrench.","CITY ADS AND TRAFFIC: the city has about a dozen billboards along the streets, each playing a different NGMY ad (new ads for NGMY Jobs, Loans, Kiswahili School, Civic Registry, Core Protocol, Build and Fix and Create, plus the NGMY app ads), big houses with two big TVs on the front that play ads too, and a huge billboard behind the main house with the NGMY logo and New Global Movement for Youth. Big buses and big police cars with flashing lights drive themselves up and down the streets, each with a billboard on both sides playing an ad, and two helicopters circle in the sky pulling banners that play ads. The sign that says how many rooms still need work is at the top of the house, above the roof. Every person in the city is a different colour.","BACK BUTTON AND KNOCKOUTS: the round back button in the corner of every construction page (jobs, lessons, the city) fades away three seconds after the page opens, so it never covers the work; two quick taps where it was bring it back for another three seconds. In Wiring a house, putting a box on a stud closes the view in on it and shows its two tabs; tapping a box does the same, tapping an orange tab breaks it out (green tabs are out already). With the Cable roll, tap the box and then tap the knockout the cable goes in through (a closed tab is broken out for you) and the cable rolls in from the panel through that knockout. Tap a box that has power to start the next cable from it (it leaves through a free knockout); tap a box that has its cable to pull it out.","WIRING A HOUSE, THE FULL VERSION: after a box is on a stud, the Knockout tool closes the view in on the box and you break out its little round tab (a box needs one open knockout for each cable that comes in or goes on). The Cable roll pulls the cable from the breaker panel through the drilled studs; to go on from one box to the next (an outlet to another outlet, then to the switch) tap a blue box that has power first, then the next box, and tap the panel to start from it again. Then pick a device (Outlets, Switches or Lights groups) and tap a box that has its cable: the close-up opens where you connect each wire to its screw, push the device in and put the plate on. The Breaker button turns the power on and tests every finished device; flip a finished switch with Look to light the ceiling; plug in TVs, phones, a lamp, a toaster, a hair dryer, a washer, a dryer or a range from the TVs, Phones and Appliances groups. The tools are in groups: tap a group button (TVs, Switches, Outlets and the others) to open more and Back to return. The Hint button in the Wiring a house and Hanging drywall lessons shows the next step and lights the place; a hint costs 2 stars and a job finished without a hint earns 1 star (the same stars as the city).","WIRING A HOUSE AND HANGING DRYWALL: two big lessons in the Construction Lab Lessons list, just before Learn the trades. Wiring a house is a bare room of four framed walls with a door, a window, ceiling joists and a breaker panel, no drywall. Pick Outlet box, Switch box or Ceiling box and tap a stud or a joist; pick Drill and tap a stud to drill the hole the cable goes through (20 inches up), or the top plate over the switch; pick Cable roll and tap a box and the cable unrolls from the panel through the holes. The cable cannot go through a stud with no hole and never crosses a doorway; the light is fed from the switch through a hole in the top plate. Tasks: an outlet on each wall, a switch beside the door, a light box in the ceiling, all with cable. Hanging drywall is the same room already wired: hang the ceiling first (cut the narrow pieces with the Cutter first), then the walls, screw every sheet, cut the holes for the boxes, the door and the window with the Saw, put corner bead on the door and window, then for each surface mud, paper tape, two more coats with drying between, sand, and prime with the Roller. The tools, the mud bucket, the tape rolls and the stack of sheets lie on the floor. The Whole room button shows the room from above with the near walls left out, and Inside brings you back. Every tool lies on the floor of the room (the cable roll and the drill; the stack of sheets, saw, mud, tape, knife, screw gun, T-square, sanding pole, corner bead and the roller): tap it in the picture to pick it up, as well as choosing it from the list, and the message says what to do first when it has nothing to work on yet. A double tap on the floor or a wall walks you over there, also from the whole room view. When you tap a wire in a device close-up the view turns to the side of the device where that wire goes (silver side, brass side, or the green screw from the front). In Wiring a house a tap on the plug or the cord of a TV, phone or machine pulls the plug out of the outlet. The marks that show where a tool works are bright balls that can be seen from every side, all the tools are on the screen at once, and Drill the lit drills every stud the cable still needs in one tap.","WIRING BY HAND AND TAP ANYWHERE: in Wiring a house the power does not go on to the next box until you have connected the wires in the first one yourself: put a device in the box (Outlets or Switches), open its close-up and join each wire to its screw. Only then can the Cable roll start the next cable from that box (a box whose wires are not connected only says so when tapped, and a second tap pulls its cable out), and the light only gets its cable once the switch is wired. The Hint button says so too. A double tap anywhere in the room, also when looking up at the ceiling or down at the floor, closes the view in on that spot (on a box when one is there), in the Wiring a house and Hanging drywall lessons. The knockouts are drawn like real ones: a flat strip on the edge of the box with a round punched tab (two pressed rings and a dimple), and a black hole with a torn edge and the bent tab hanging when it is broken out; a thin ring in orange, green or grey shows the state of the tab in the close-up. The tool buttons of Wiring a house are small square buttons in two rows; an open group (Outlets and the others) shows two buttons in every row. The back button of a device close-up inside a job stays on the screen; only the one that leads back to the lab fades.","LESSONS ARE SAVED: what you do in Wiring a house, Hanging drywall, the device close-ups (outlets, switches, lights, fans) and the P-trap and faucet lessons is kept on the phone, also when the app is closed; opening the lesson again shows it just as you left it. The Diagram lessons keep your picks too. It is cleared when you finish the lesson (the house wired, the drywall finished, the device done) or press Start over. In Wiring a house, putting a box on a stud no longer moves the view (tap the box to look closer), the cable roll and the drill hang on two shelves on the wall beside the window (the view starts facing that wall), and the tool buttons are small squares in two rows of seven: Boxes, Outlets, Switches, Lights, Look, Drill, Cable roll on the first line and Breaker, TVs, Phones, Appliances, Knockout, Hint, Start over on the second, and the small counts (cables, devices, feet) sit in a little frame between the title and Steps.","OUTLET LESSON ROOMS: the room of an outlet lesson is named after the thing being fixed in a few words (Dryer outlet 4-wire, Range outlet 3-wire, Washer outlet, no longer Faucet), the outlet in it is drawn exactly like the one on the wiring bench before it is wired (a round dark receptacle on a cream plate with the slots of its type: the L neutral, the two hot blades and the ground hole of the 14-30 and 14-50, no ground hole on the 10-30 and 10-50, the T slot of the washer; a GFCI with TEST and RESET; an isolated ground with its orange triangle; the 240 volt only outlet with its two flat blades and ground hole; the smart switch with its blue light; the switch and outlet in one with its small outlet under the rocker; the plate is cream before and after the wiring). The wiring bench, the framed house of Wiring a house, the rooms of the jobs (the outlet and switch a job asks for look like that kind) and the small house of the service calls all draw the same faces), a search icon sits by the title where you type dryer or range and pick it to plug it in, and under the buttons are all the equipment whose plug fits that outlet (the dryer fits a dryer outlet, the range a range outlet, the washer its own, lamps and TVs the normal ones). Equipment is plugged in only after the outlet is wired.","ZOOM IN A ROOM: in every room view (houses, jobs, lessons) the plus and minus buttons, the mouse wheel and the pinch go toward and away from what the middle of the screen looks at (an outlet, a switch, a wall), not toward the middle of the room.","WALLS, PEOPLE AND BILLBOARDS: in the device close-ups the wall is wide and tall and drawn in tiers (studs, then wall, then the device), and the view cannot go behind or far to the side of the wall, so nothing shows through it. The three city characters are kept for offline from the first visit and a character that could not be read is tried again every twenty seconds. Every billboard in the Billboard Studio now stands in a place: footings, braces, a catwalk with a rail and ladder, lamps on arms, beacons, a service hut, a fence, a pickup truck, cones, bushes and flowers, and each kind has its own extras (highway barriers, a road and cars; a tower ladder, bands and a big beacon; neon tubes and a glowing street with a diner; a stage with speakers, a lighting truss and a crowd barrier; two stone towers with flags and torches and a paved way for the gate).","PHONE VIDEO WALL ON A PHONE: when the Videos app opens the wall of four phones on a real phone (iPhone, Android), the phones of a set take turns so the browser is never asked to hold four video players at once (it used to close the page): a video file plays on two phones at a time and YouTube or Vimeo on one, the others say Waiting its turn, and the next ones start when these finish, set after set. On a computer all four play together.","TV PLAYS ALL CHANNELS AND SCREW POP-UPS: the lab TV now goes through its channels by itself, one after another, ten seconds each (one whole advert), and round again; CH plus and CH minus still jump, and the apps screen stops the round while it is open. In every device close-up (outlets, switches, GFCI, lights, fans and the others) two quick taps on a screw or nut that has no wire open a framed pop-up in the middle of the screen: the wire that goes there, why it has none (a spare screw, a LOAD screw under tape, the ground that must never stay empty, or a wire not put on yet) and a reminder.","TV ADVERTS AND BIGGER SCREENS: in the Electronics Lab a screen part (TV, phone, laptop) tapped four times opens the Resize sheet, and it can now be made up to five times its normal size (twice as big as before). On the lab TV channel 1 stays the NGMY Tree Story, and channels 3 to 5, 7, 9 and 10 are NGMY adverts drawn live: Construction Lab (a house goes up), Electronics Lab (current round a circuit to a bulb), Advisors (chat bubbles), Game Center (coins and a game pad), Vault (the vault door opens on gold) and Studios (coloured tiles pop in). The Construction Lab page header is a small framed card in the middle with the back arrow at the side. The Resize sheet is a card with a live preview of the screen, buttons 1x to 5x, a slider and a Done button. The adverts on the lab TV are little ten second movies of four scenes each (what it is, what you do, what you get, then an end banner with ngmy.org): Construction Lab, Electronics Lab, Advisors, Game Center, Vault, Studios, Business Cards and the Store (channel 2), on channels 2 to 5 and 7 to 10. TV channel 6 is Spark Adventure (Sparky the spark runs round a circuit board with a battery, a switch, a resistor, a capacitor and a bulb, with captions) and channel 8 is an NGMY Business Cards advert.","CITY DOORS, ARROW, ELEVATOR: walking through a door takes you in again (no button). The arrow above the player shows only when the view is zoomed far out, and there is no ring. The houses stand far apart (more than two house widths between them). When the elevator doors open you now see a lit lobby with TVs and a sign, not a black space. In the lobby the elevator doors shut completely, carry NGMY on the left door and ELEVATOR on the right door, and open onto a lit inside with nothing in front of the doors. During the ride the camera stays inside the car, which now has a back wall, so the person never disappears when you turn the view.","CITY WALKING RULES: you go into a house, hospital, shop, store, school or any building by walking through its door. The view never zooms or turns by itself: your zoom and angle stay as you set them when you go into a building and when you come out, and inside a building the camera only stops at the walls. A bright arrow shows where you are when the view is zoomed far out. The houses stand much further apart. The NGMY stores and the NGMY licence offices have a big sign on the roof, facing front and back. The city remembers where you were: the street spot, or the building you were inside, and puts you there when you come back; the Neighbourhood jobs button now opens the city itself instead of the first unfinished room of the house.","MACHINES AND WIDER ROOM VIEW: after the laundry or kitchen job the room items now include a washing machine, a dryer and a kitchen range to plug in; each only fits its own outlet (washer 5-20, dryer 14-30 or 10-30, range 14-50 or 10-50), and when it runs the washer and dryer show clothes tumbling and the range burners glow. In the house the Plug in list has them too. In any room, when the camera cannot go back any further because of the wall, zooming out widens the view so you see more of the room and still stand inside it.","LESSON HELPERS AND WATER: in the electrical lessons, picking a wire turns the device to the screws that wire belongs on: the white neutral wire shows the silver screws, a hot wire shows the brass screws, and the ground wire shows the green screw in front. Tap the name of a wire, a hose or a drain piece twice and the place it goes glows for a few seconds. In the faucet lesson tap the red or blue valve handle to turn it by hand; an open valve with no hose sprays, and a good line pours a clear stream into the basin with ripples. In the drain lesson tap the sink once the drain is built to run or stop the water. The Diagram lessons page is a picture: pick a wire on the left, tap its place on the diagram and a coloured wire is drawn between them.","SINKS IN THE PLUMBING LESSONS: the drain lesson and the faucet lesson now show a real sink: a counter with a hole, a white or steel basin sunk into it with a drain, a faucet with two handles on a flat plate behind it, and an open cabinet under it. The counter pieces leave out the faces that touch so no dark gaps flash at any angle.","CONSTRUCTION LAB ZOOM AND LESSON SEARCH: in any room of a job or lesson you can pinch or scroll back as far as the room allows while the camera always stays inside the house (it never goes out through a wall or the ceiling), and you can still turn all the way round. In the Construction Lab the LESSONS line has a small search icon on its right; tap it, type a word such as dryer or sink, and only the matching lessons stay. Tap the icon again to close the box. Only the lessons are searched, not the jobs.","NEIGHBOURHOOD WORK AND TRADE: every building in the city can be walked into (hospital, shop, school, fire station, every house and big house), and each has its own job done by walking onto a mat: teach the class at the school, check the equipment at the fire station, sell what you carry at the market stall in the shop. The buildings are about half as big again, and the houses stand well back from the streets so there is room to walk beside the road. Electric poles carry wires along the streets with street lights on them, and street lamps stand between the poles. From time to time a street light goes out (it is dark with a red sign) and a neighbour rings because a house has no power. A street light is fixed with the real ceiling-light wiring lesson (black to black, white to white, ground to ground, then the cover); a house is fixed by walking in and onto the red mat at its breaker panel, which opens the wiring job. Fixing earns points. Crates of goods lie about the farm: pick one up with the action button, carry it to the shop and sell it at the market stall, then come back for more. In Build mode a house, big house, shop, billboard, car, tree, bench or crate can be sold for points. Full screen: double tap the two buttons to hide them, double tap where they were to bring them back. The controls are raised from the edges of the phone. The small buttons beside the zoom buttons flip the up-down and left-right swipe, and the choice is remembered. The Construction Lab menu has the jobs first (with a new Neighbourhood jobs tile) and the lessons and reading last. Double tap anywhere in the house, a room or the city and the camera takes you to that spot, like a map. The city has fewer cars: two buses and two police cars drive round two loops of road and never turn back, and every junction on the loops is a roundabout. In the wiring job a plugged-in TV is not a button: go behind it and tap the plug on the wall to pull it out. Pulling a switch or outlet out of the wall keeps it there (only a burnt one is thrown away so a new one can go in). Every billboard has a picture on each side, so nothing is upside down or backwards from behind. The buses and police cars are bigger, with big billboards. In the city the phone rings at least once a minute: a house with no power, a street light out, or somebody sick who must be taken to the hospital desk. A room whose wiring is right has no red boxes left, even if the final test was not run. Swiping left and right turns the view the way your finger goes. The house tour sheet has a new design. Full screen inside a room puts you inside it, like a normal house. Getting out of a car puts you beside it, never inside it, and a person who ends up stuck is moved out. A dark house shows its breaker panel, outlet and switch with red frames, and tapping a red tag (No power, Light out) takes you to that house or street light. The city no longer redraws itself every two seconds, and nothing happens in the city while a job page is open. Work comes one job at a time from houses chosen by chance: while you work no new call rings, a job you put off with the Later button waits on a list and starts when you leave the house you fixed. Turning calls down or not answering counts as a miss; two misses in a row bring a call from the City office, three close the game for 5 hours. The Hide tags button (next to Full screen and Rotate) hides the red tags and the rooms-still-need-work sign. Every outlet, switch and ceiling light or fan in a room is marked fixed on its own as soon as it is wired right, so only the ones still to do keep a red frame, and the sign over the room names what is still to wire. A call opens as a card in the middle of the screen (it turns with the full screen game) with Show me the way (a yellow dashed line on the ground and a tall yellow beam lead to the place), Take me there and Later. A Drone button gives a film of the city from the air: choose the whole city, billboards and the NGMY logos, houses (and inside a big one), the hospital, shop and school inside, or the traffic. The hall has a camera in each corner: tap one to look from there. The Kiswahili School ad has a long conversation, three exchanges a play and new phrases each time. In a house with no power in the city, tap the breaker panel, the outlet or the switch (or their red frames) to start the wiring job straight away. The drone is one smooth flight with no cuts: it starts high, comes down and passes in front of each billboard and round its side, never going into it, and the houses and the buildings are flown past the same way before it goes inside. Indoor furniture is smaller, a TV never stands on a cabinet or the floor (TVs hang on the wall), and a wardrobe, shelf, lamp or console is moved aside so it never hides the TV on the wall. The city land is much bigger (2600 by 2100) with houses behind my house, down both sides and over every green stretch, each with room in front of its door so you can always walk up to it, and a longer street system. Downtown, at the south end, has NGMY office towers, the NGMY company building, NGMY stores, NGMY gas stations and a second NGMY hospital; the stores and gas stations can be walked into like a shop. The biggest billboard, NGMY Town, stands over the middle road, and a NGMY Town billboard stands at each corner of the land; every sign has a picture on both sides. The drone passes each billboard slowly in an arc of about three seconds, goes round all the signs and follows the helicopters to show their banners. Swiping now turns the view the way the finger goes: swipe right looks right, swipe up looks up (the choice is saved under a new name so old choices do not interfere). The message at the top is placed under the buttons in full screen. Nothing in the city is switched off because it is far away: the houses, the billboards and the signs stay on, seen from the drone or from the ground. Every tower and the NGMY company building has billboards on the south face and on the north face (the side the town looks at), and the big NGMY Town sign shows a picture on both of its faces. In the hall the camera is only the camera (no label), and the wall TVs read the right way round from outside the wall too. In a house with no power each fixture turns green on its own when it is fixed, the work you did is kept when you leave and come back, and the panel turns green when the whole house has power; in your own rooms a fixed outlet, switch or light has a green frame, an amber frame while it is started, and a red one while it is not. The work you do on a house, an office level or a street light is kept in the town. Take me there puts you a few steps in front of the door (or beside the street light). People walk fast in the big town and the drawing skips what is off the screen. Missing calls never closes the game; after a few the office only rings to remind you. Every office tower and the NGMY company building can be walked into: the lobby has an elevator (walk onto the blue mat or tap it) with buttons for every level, the level number is always shown, there is a balcony with a glass railing (step on the green mat to look over the town), and you can get a job from an office with no power on any level, take the elevator to that level and fix its breaker panel. The elevator ride is shown: the person walks to the doors, they slide open, the person steps in, the doors close, the camera is inside the car with a display above the doors and a big number that counts up or down level by level with a little shake, a chime and the doors open at the new level where the person walks out. The Orders button opens the delivery board: orders for food, groceries, medicine, packages and letters are picked up at a shop, a store, the hospital, a tower or the company building and carried to a house (follow the yellow line); they pay points. Five other couriers, Maya, Kofi, Amara, Tunde and Zawadi, walk the town doing the same: an order they take is gone, and the first to deliver 8 orders wins the round and a bonus. The race table shows everybody. There are many more big NGMY ad billboards round the edge of the land (north, south, east and west) and on the roofs and sides of the towers and the company building; every one plays the NGMY ads one after the other, a new one every 7 seconds. NEW IN THE CITY: the drone has a special request for the edge billboards only (the big boards round the edge of the land), the billboards request now includes the edge boards, the tower boards and every other billboard, and every drone film always starts at the big sign that welcomes everybody to NGMY Town. The rival couriers now walk round the buildings (never through walls) and go in and out of the doors, out of sight for a moment inside. When all the fixtures of a dark house or office are connected, a green Complete work button appears (in the chips row, and next to the drone button in full screen): press it to check the wiring, bring the power back and get paid. Energy: about five minutes of walking use it all up, then you must rest for three minutes (then you are back at half energy) or eat; a long battery bar next to the page title shows it, and under the Run and Jump buttons in full screen, with no numbers. Food from the shops (apple, juice, sandwich, burger meal) gives energy back and costs points. The shops are now real: shelves with tins, boxes, bottles and loaves, drinks fridges, fresh fruit, a till and a cashier, and walking up to a shelf or the counter (or the Buy things chip) opens the shopping list: food, food for the town and medicine, all paid with the points you earned. Cars only have about two minutes of gas; a gas bar shows beside the energy bar while you drive, and there are many gas stations round the town where you press Buy gas (or buy a gas can in the gas shop). The licence office sells the Uber licence for 40 points. Uber stations (a yellow and black shelter with a car beside it) have people waiting: drive up with the licence and they get in, take them to their house (follow the yellow line) and the fare is paid when you arrive. MORE SWITCHES, OUTLETS AND LIFE: the Construction Lab has ten more wiring lessons (double-pole, three-way, four-way, smart or motion or timer, and combination switches; split half-switched, 4-wire 240 V, 3-wire 240 V, 240 V only and isolated-ground outlets), and every house or office job now asks for a different outlet and a different switch, so people learn them all by fixing them. Calls and jobs only come in the NGMY City map (the garden with the billboards), never in the rooms of the house. Houses stand much further apart. The incoming call screen shows who is calling on top and the Decline, Later and Answer buttons in a row below. Energy lasts about two minutes of walking, then the person crawls on the ground for 20 seconds: if they have not bought food in a shop by then they lose 5 stars, rest for three minutes and come back at half energy. Thirst (buy water or juice) and feeling unwell (buy pain pills) make walking tire faster, so everything the shops sell is needed at some time. The stars balance is shown next to the zoom in button all the time. Thirst also lasts two minutes. Nothing counts against the person while they are working on a job or away from the city map. When all the wiring of a house is connected the work is handed in by itself. Wires and screws are easy to tap: a tap near one picks it. The shop screen is laid out in columns to fit a phone on its side with nothing to scroll, and every pop-up shrinks to fit the screen. Every elevator car and every level of a tower has big TVs playing the NGMY ads, a ride takes at least 3 seconds and longer for every level it climbs, and inside a building the view is close in so you feel you are inside. ADVISOR BROWSER: the live browser of the advisors (the computer an advisor uses to look things up and fill forms) is free for the first 10 minutes of use. After that a payment pop-up appears (never a text message) asking $5.99 for 2 more hours, by card with Stripe or with Cash App (a code, a screenshot of the payment, and an admin approves it). The hours must be used within a week; they are counted quietly in the background only while the browser is open, and what is left is still there when the person comes back. Hours not used within the week are lost, and the next time the person gets only 5 minutes before the pop-up asks again. One browser task may spend at most 2 dollars. In the elevator car the camera is inside the car with the person, the doors in front and a big TV on each side. A finished job pays a random number of stars from 10 to 35. The Uber stations and their signs are called NGMY Uber. During the drone flights nothing far away is left out, and small far pictures are drawn flat so the flight stays smooth. PHONE VIEW: in the garden (NGMY City) a phone icon between the Full screen and the living room chips opens the city across the whole phone standing up, like a phone video, not turned on its side; it opens the drone chooser straight away, with buttons to close, start or stop the drone and hide the tags. The drone sweeps past billboards sideways instead of climbing and dropping on one spot, and the helicopter and vehicle shots are short sweeps round them, so it never hangs in one place. Inside a building the camera never leaves the walls, so turning round never shows a wall from behind or a TV switching off, and the rooms are deeper and taller. In a tower the way out is only on the ground floor; the other levels use the elevator down. Walking, the drone and the elevator ride move in step with every frame and the camera sticks to the person, so it is smooth. Finishing the wiring or plumbing of a room, a lesson or an added outlet pays stars at once. ROADS, TRAFFIC LIGHTS AND ACCIDENTS: the city streets are big two-lane roads with a double yellow line, and the buses and police cars drive in their own lane, keep their distance, never drive through each other, and stop at red lights. Traffic lights stand at the crossings with zebra crossings; the little walking person is green only while the cars have red, so cross then. Anybody on foot who walks in front of a moving car is run over: an ambulance takes them to the hospital, they are weak, and medicine and food are ordered from the stores to the hospital. Those emergency orders go to the top of the Orders board and other users (and you) can deliver them for stars. HIDE ALL BUTTON: the eye icon next to the hide-tags button (and Hide all in the chip list) hides every button, map, banner and card so only the city shows, also while the drone flies; tap the top left corner where the buttons were to bring them back. ROOMS ARE VIEWED FROM INSIDE: in my house every room now opens with you standing inside it, with the four walls and the ceiling round you (like the big buildings), not looking at the room from outside; the See the whole room button still shows the cut-away view from above. A room is only finished (green) when its wiring AND its plumbing (bathroom, kitchen) are done. In a dark city house or office the breaker panel stays red until all four things are fixed (two outlets, the ceiling light, the switch): the ceiling light now has its own red frame and label in the middle of the ceiling, and the panel label says what is still to fix. CARS AT THE CORNERS: the two loops of buses and police cars meet at the two ends of the middle street. Only one vehicle at a time may be in each of those corner zones; the others wait at its edge and go on when it is out, so cars never touch or drive through each other and none gets stuck (tested over 50 minutes of traffic). DARK HOUSE WIRING: a device that runs (the TV works) can still be wired NOT safely, and then its frame stays red: the job counts a fixture as fixed only when it is in, finished and wired right. After you leave the wiring bench the message and the red labels now say why (not put in, not finished, or works but not wired safely, with the reason). Tapping a blue spot with nothing in your hand puts in the device that belongs there. FAR BILLBOARDS: every billboard keeps showing its real ad from any distance and any angle (the biggest few play smoothly, the rest show a picture of the ad that is made again about five times a second), never a plain colour. JOB COMPLETE: when a job from a phone call is finished the screen says JOB COMPLETE with the stars, and the next job only starts about 10 seconds later; the other red tags in the city are other houses still without power. BILLBOARD STUDIO: in the Construction Lab, a small Billboards button sits at the top right corner of the My House frame. It opens a page with ONE billboard on its own: six kinds to choose from (highway board, tall tower sign, neon board, rooftop board, big screen, town gate), a 30 second drone shot round it (wide shot, coming in, close slide, left side, behind the board, right side, pull back and up; Stop the drone ends it), and an Edit button where the person can change the big words, the smaller words and the web address, put their own logo and their own picture from their gallery, pick the colours, or go back to the NGMY default. By default the board plays the NGMY logo, the NGMY words and the NGMY ads one after another. What the person changes is kept on their device. Update: all the boards are much bigger. Joined boards: two signs on one board, or three signs on one long board. Separate boards: Three in a row (three boards in one straight line), Two lines of three (six boards, a line facing front and a line facing back), and Billboard park (four boards: front, back and both sides). Each sign has its own words, logo, picture and colours (Edit, then Which sign). The default NGMY poster words shrink to fit beside the logo so they never run over it. The rooftop board stands on a big house with big TVs and NGMY logos on its front and sides and the NGMY hall carpet on its back. Poles always stop below the board. While the drone flies there is no title or bar; Hide everything removes the buttons and a tap on the screen brings them back. The shot is a crane move, a push in, a slide along the face, then round both sides and the back, then up and away. The Family Tree ad in the Electronics lab (TV channel NGMY Tree Story and the Family Book and Tree cartoon ad) was redesigned: a real tree grows with the grandparents at the roots, the parents on the big branches and the children at the top, a round face and name tag on every branch, hearts joining the couples, and a card that says NGMY Family Tree: add every person, link mums, dads and kids, keep it for ever. Billboard park has its own planned 30 second drone shot: a high wide shot, a crane down and push in to the front board, a sweeping arc to the right board, a long curve behind to the back board, round to the left board, then up and away. On the home screen the Civic Registry ID card shows the plus button when it is the only card, so other cards can be added; once another card is added the plus leaves the Civic card. All the drone shots are now dramatic: a high bird-eye shot that dives to a low hero angle, a low slide across the face, whips round the sides, swoops up high, dives behind, and pulls away into the sky; each move starts slowly, whips and settles. In the Construction lab wiring job, an installed outlet or switch has a button Take it out and put in a different one, which leaves the empty box so a different kind of outlet or switch can be put in. Latest billboard update: no boards are joined any more. Billboard layouts are Two far apart, Three in a row, Three scattered far, Skyline, Two lines of three and Billboard park, with boards of different heights and sizes, the taller ones standing behind and some far from the others. The chooser shows two billboards in every row. Every kind of billboard has its own camera move, and each layout has its own tour where the drone flies from board to board. The rooftop board stands on a tall house with one big TV on each side of the door, and its board, TVs, logo and frame no longer vanish when the angle changes. Cipher Lab was removed from Core Protocol. In the city wiring job the person chooses what goes into an empty box from the tray (nothing is picked for them), and any outlet counts for an outlet and any switch for a switch as long as it is wired right, so the red frames in the house turn green when the job is really done. The zoom buttons answer at once with a big step and keep zooming while held, and pinching measures from the last step so the zoom is never thrown back. FAMILY GAMES: in the Family Tree there is a games button (a game controller icon) next to the Family Book button, and the redesigned Tree display settings sheet has a Family Games card. The system makes games by itself from the people in the tree: Family Kahoot (10 timed questions with coloured answer tiles, points for speed, a streak bonus and a podium against family members), Fireside Stories (a painted African village at night, with huts, a baobab, the moon and a living village: someone pounds grain, a girl carries water on her head, children roll a hoop, a goat grazes, a drummer plays. The oldest person in the tree sits by the fire and talks, with the words coming out while the mouth moves; the other elder and the children look at whoever speaks, blink, nod, ask things, gasp, laugh and clap, and the fire grows with every right answer), Safari Journey (a painted bus drives to a stop for each question, a villager asks, a wrong answer is a flat tyre), Line Up (tap two people to swap them until the family stands in the right order, then everybody cheers) and Village School (the teacher writes each question on a chalkboard, then a report card with the mistakes explained). Small trees get culture questions with Swahili family words and African proverbs. The person who created the tree can write up to two games of their own, in the Kahoot style, with up to 12 questions each, and everyone who opens the tree can play them. Players win Family Stars on this phone, with badges: Little Seed, Young Listener, Storyteller, Village Pride, Keeper of Roots and Elder of the Fire. The Family Games hub now shows eight games, two in every row: Family Kahoot, Fireside Stories, Calabash Catch (slide a basket under the gourd with the right answer as gourds fall), Plant the Tree (drag the children of a family onto the branches and watch the tree grow), Who Am I (a shadow turns into a face as clues come), Safari Journey, Line Up and Village School. Memory Drums, the old Family Test and the old Elder Order were removed. CITY PEOPLE: everybody in the city is one of the 3D characters you made (the X Bot and the Soldier for the residents, and whichever of the X Bot, the Dancer or the Soldier you choose for yourself on the tour sheet), read from their .glb files. They are dressed in their own colours (skin on the head and arms, a shirt, trousers), the X Bot residents get a face with eyes, brows, nose and mouth, and the head and hands keep more detail than the rest. The three character files are kept on the phone after the first visit so the same people appear with no internet; while a file is still being read nobody else is drawn in their place. The 3D view skips whole blocks of the town that are behind you, too far or off the side of the screen, and keeps billboard pictures on top of their boards. ROOM JOB SCREEN (the working screen of a room wiring job): you start inside the room, close to the wall that has the boxes, and can zoom out to see all of it. In the devices phase every box of the job has a little light on top of it (no frames): it blinks RED while that box is not fixed, and blinks GREEN only when its device is in, wired right and covered. Tap a box and the tray at the top shows only what can go in that box: an outlet box shows the outlets (outlet, GFCI, split, 240 volt, dryer, range, washer...), a switch box only the switches, and a ceiling box only the light and the fan, so nothing has to be scrolled through. The box you tapped has a bigger light, a cross at the start of the tray lets it go and shows everything again, and tapping an item puts it straight into the picked box. When the phone is turned on its side (or the job is shown sideways in full screen) the three phase tabs and the hint box are gone to leave room: only the tray is left, and its first button shows the phase (for example 3 Devices) and goes to the next phase when tapped. Standing up straight it is all there as before. When you work on a device with the phone on its side, the buttons are small, with their words in them (back to the room, fasten every wire or push into the box, pull it out, cover on, take it out and put in another), and they sit in ONE row of the same height together with the wire chips (for example black from the breaker, black to the light, bare copper ground). Once you pick a wire, the screws it can go on come in their own small low row UNDER the buttons, not along the side. The messages are small too: the note that says what just happened is a small box in the top corner (three lines at most, gone after six seconds) and the card about the thing you tapped is a small box in the bottom corner, so the work stays in view. The lights on the boxes are small, and round every empty box there is an invisible pad bigger than the box, so a box answers the first tap. Taps on every 3D view (the room, the bench, the city) are read the moment the finger lifts, they no longer wait for a possible double tap, so nothing needs two or three taps. Standing up straight they are the big buttons with words and the wide messages as before. REAL WORK IN THE CONSTRUCTION LAB AND THE CITY: the eight JOBS of the Construction Lab (Wire a room, Plumb a room, Fix a house, Build a room, Wiring bench, Safety inspection, Service calls, Neighbourhood jobs), My House and the whole city are real work, not a learning stage: wrong moves have real consequences (shocks that cost a life, burnt outlets, floods), there are no hints (the screen says Real work: no hints), and the practice and test switches are gone from the job screens. Only the LESSONS teach, with explanations and hints. The old Garden is now called NGMY City. Safety is enforced like on a real site: a device can not be put into a box while the breaker is on (a STOP message says to turn the breaker OFF first and test that the wires are dead), and touching live wires, pushing in, pulling out or covering with the power on is refused or shocks. Every finished job of the lab pays stars into the same stars the city shows: 12 plus 4 for each thing to fix, minus 2 for each mistake and 5 for each shock, never under 6 (the jobs started from the house in the city pay by their own rules, so nothing is paid twice; stars earned outside the city are kept and added when the city is next opened). The sinks of the bathroom and the kitchen are real sinks: a counter with a basin sunk into it (walls, floor, drain) over a hollow cabinet, and a faucet with two handles once the sink is plumbed. CONSTRUCTION CITY APPLIANCE JOBS (American NEMA style): the Construction Lab and the city jobs now have the outlets of the big appliances. Dryer outlet 4-wire (NEMA 14-30, 30 amp: an L-shaped neutral W, two hots X and Y, a round ground G), dryer outlet 3-wire (NEMA 10-30, the old kind: two hots and a neutral that also grounds, no ground hole), range outlet 4-wire (NEMA 14-50, 50 amp) and 3-wire (NEMA 10-50), and the washing machine outlet (NEMA 5-20, its own 20 amp circuit with a T-shaped slot, GFCI protected in a laundry area). Each has the real face of its type in 3D and is wired by putting the black, red, white and bare copper wires on the right screws: the two hots on the brass X and Y screws, the neutral on the silver W screw, the ground on the green screw. There are also two cord hookups at the back of the appliance: the 3-wire cord, where the metal ground strap stays on the middle terminal, and the 4-wire cord, where you take the strap off first (tap it), then put the green ground wire on the frame screw, white in the middle, black on the left and red on the right; the neutral and the ground are refused while the strap is on. In the house the kitchen wiring job is the range outlet (plus a GFCI outlet), and the hall is a laundry corner with a washer outlet and a dryer outlet (3-wire or 4-wire). The lab random room jobs can be a Laundry room or a Kitchen with a range. A house call in the city is now most often about the dryer, the stove or the washer, with its own message, and it sends you to the right room. The Add to room menu offers all of these outlets and both cords. When the city is in full screen (on its side) and a call is accepted and a fix starts, the job page stays on its side too, and a small button on its right edge turns it upright and back; without full screen it stays upright. PHONE (Phone Unlock page, under Open on your phone, the Phone button): a whole virtual phone of its own inside NGMY, separate from the device in use, with a lock screen (swipe up or tap), a home screen with a dock and a clock card, a home bar to go home, a status bar, and only a few apps of its own: Videos (paste the link of any video, YouTube, Vimeo or a video file such as mp4 or webm, and it plays on the virtual phone; save videos and see recent ones), Web (type an address; some sites refuse to be shown inside another page), the App Store and Settings (phone name, six wallpapers, brightness, the phone number, device ID and place, reset). There is no notes, calculator, clock or files app. The App Store holds NGMY apps that open inside the phone: Title Animator, Universe Explorer, Beat Maker, Piano Studio, Drum Pads, Palette Lab, Mandala Studio, Fireworks, Gravity Lab and Spark Painter; tap Get to install one (its icon appears on the home screen), Open to run it, Remove to take it away, and what is installed is remembered. To make the phone bigger, double-tap the top of the phone (the black bar with the camera): each double-tap makes it bigger, step by step, up to the full screen, and one more goes back to the first size. The phone has its own phone number and device ID (made when it is first opened, new again after a reset), its own place in the world that you choose in Settings (it never reads the place of the device running it), and its own memory that no other part of NGMY reads. Limits: the phone uses the internet connection of the device it runs on, so its internet address is the same as that device (a web page cannot change it), and apps from Google Play or the Apple App Store cannot run inside a web page. Everything on the virtual phone is kept on its own and a reset clears only it. PHONE WALL (inside the Phone, there is no separate button): the Phone shows one phone. When a YouTube, Vimeo or video file link is played in the Videos app, the four front phones of a wall of 100 open, two in a row, filling the room, each playing the video with the picture filling its screen, with the waiting phones stacked behind. Each of the 100 phones has its own phone number, device ID and place and a memory of the videos it watched (kept between visits). The four start one after the other so the first is never kept waiting. They play without sound, because a browser only starts several videos on its own when they are muted. When the video is over, the next four phones slide in and play it from the start, set after set (25 sets), and after the 100th phone it starts again from the first four (round 2, 3...). Buttons: next four, start again from phone 1, and One phone, which goes back to the single phone with the same video playing there. The single phone plays a video straight away with no extra settings. A web page link (not a video) stays on the single phone. EARTH GLOBE OFFLINE: the Universe Explorer Earth Globe map data is kept on the phone after the first visit and preloaded, so the globe opens with no internet; if it cannot load it says so and has a Try again button. TITLE ANIMATOR: more than 24 title movements, 8 letter looks and 20 different painted background scenes (not just colours); Download the animation saves the whole animation as a looping GIF, not a single picture. BUSINESS CARDS: the cards on the Home screen are saved safely: a background refresh can no longer write an old list over a card that was just added, there is a second copy of the cards kept beside the first that restores them if the first is damaged, and a business card put on Home is also kept on the account when one of the 5 cloud places is free, so it is still there after the app is reset. The studio card list uses a key made from the email so saved cards are not lost when the app is built again. Every business card has a Share my card button (the NFC icon on the card on Home and next to Download in the studio): it makes a contact file (vCard) with the name, job, company, phone, email, website, address and logo, shows a QR code any phone camera can read, opens the phone share sheet so the card can be sent by AirDrop to a phone held close, copies the contact text, and writes the card to an NFC tag on phones that allow it (Chrome on Android; iPhone Safari does not allow web pages to use NFC, and Apple Wallet passes need an Apple developer certificate, so they are not available yet).","AI FAIR USE: all NGMY AI runs on the server and needs a signed-in account. To keep the shared AI key safe, each person can use AI only so fast: if you go too fast you see You are using AI too fast, please wait a little and try again, and you can use it again after a short wait. Big jobs (job applications, documents, books, slides, news, translations, pictures, voice) have tighter limits than normal chat. If the AI company is busy you see that the AI is busy and to try again in a minute, and the app does not keep asking. There is also a daily cap for the whole app. Admins can see the limits, the heaviest users and the newest abuse, and change the limits without a new version of the app.",'CONSTRUCTION LAB: a trade school in real looking 3D, MY HOUSE (top card of the Construction Lab): a finished furnished house with 5 bedrooms, 3 bathrooms, a kitchen, a living room and a hall, each drawn as a cut-away 3D room. A little map in the corner shows where you are, tap a room to go there, or use the door buttons; red marks a room whose wiring needs work and blue one whose plumbing does. Signals in the room (a red No power sign, a blue Needs plumbing sign, bare pipe stubs) show what is wrong; the Wiring and Plumbing buttons, or a tap on the outlet, light, toilet or sink, open the same hands-on jobs and the room is finished when the job is. Furniture, walls, floor, ceiling and doors only react while their own edit button is on: Furniture (add, move with arrows, turn, change colour, remove), Walls (paint one wall or all), Floor (wood, carpet or tile), Ceiling, Doors (open and close). A Learn button opens short beginner cards on safety, wiring, plumbing, framing and tools. In My House you are inside the room by default (a low view, like standing in the doorway) and a button switches to a view of the whole room from above. A \ud83c\udfac Tour button plays a life-like person (an adult with a face, hair, arms, legs and a real stride) who comes in through the front door and walks through the whole house like a film, in the time you choose (30 seconds, 1, 2, 3 or 5 minutes), after every TV is switched on. The walk is planned round the furniture and fixtures, so the person never goes through a wall, a chair or a table; in the living room and the bedrooms the person picks up the remote and switches the ad on the TV, in the kitchen they take a drink from the fridge, in the bathrooms they wash their hands, and between rooms they open the door and walk through into the hall. The doors really swing open and show the next room behind them; when the person opens a door the camera moves in towards it, then the picture dissolves into the next room (the hall, a bedroom, a bathroom) where the camera starts on the door they come out of, and the door closes behind them as they walk on. TVs on the wall go from 100 inches to 150, 200 and a whole-wall TV: each is as big as the free stretch of wall allows, never over a door, with nothing in front of it, and the person on the tour stands beside the TV and not in front of it. The hall is wider and deeper, has all ten doors on its back wall and a big TV on each end wall. A \ud83d\udd04 Look all round (360) button puts you in the middle of a closed room (solid ceiling and four walls) to turn all the way round by dragging; a double tap on the floor walks you to that spot, and from above or in the garden a double tap takes the view closer to where you tapped. The view can never go under the floor. The garden is a big lawn you can walk all the way round, and the house outside has windows and doors on all four sides, a porch, a chimney and a roof; with the Furniture button you can add and move trees, pines, bushes, flowers, fences, street lamps, benches, cars, roads, ponds, swings, sheds and dog houses. The cards on the Construction Lab home screen are centred, with a glowing round icon and a soft colour. COMMUNITY (a card on the Construction Lab home screen and a Community button in My House): the seven people who live in the house (Ama, Joseph, Grace, Daniel, Fatima, Papa Moses and Mama Rose, each with their own look) get hungry over time, can fall sick, and become unhappy when their room has no power or their sink leaks; they stand in their rooms in the house as people you can tap, with a word over their head showing how they are. The player feeds them (food), gives medicine, sends the sick to the hospital (three beds: each patient needs treating before their care runs out and goes home better), and buys food and medicine in the shop with points. People who are starving, sick or unhappy for too long lose health and can die. Calls for help arrive in plain words ("My outlet is dead and it is dark in here", "The sink leaks"): Go and fix it opens the house on that room, the real wiring or plumbing job is done, and when it works the call finishes and earns 15 points; wiring and plumbing also break by themselves from time to time so there is always something to do. Hospital discharges, feeding and medicine earn points too. Everything is saved (the people, supplies, calls and which rooms are fixed or broken) and time passes only gently while the app is closed. Inside a room the view stays inside the house: you can look about a little but you cannot swing round behind the walls, and a Go outside button (and Go inside in the garden) is the only way out. Everything in a room is drawn in layers (the floor and walls first, then what is fixed to them like the TV, the plates, the frames and the doors, then the furniture and the person), so the edges of a TV or a door never disappear when you turn to the side and the person never shows through a door, a wall or their own body. The person is built from rounded parts with real joints (a head with a face and hair, shoulders, elbows, knees, hands and shoes), the foot that is down always stands on the floor, and the walk keeps a body-width away from furniture and walls. A TV button puts a wall TV (five models, the big ones up to 77 inches) in a room, or in every room, and turns TVs on and off. An Add button adds outlets, GFCI outlets and light switches to a room that you wire yourself with the wiring bench, a Map button shows or hides the little map (which shrinks to fit the screen), and the Start from a bare house button makes every room need its wiring and plumbing so you can wire the whole house first. The ceiling of a room can hold a light or a fan. All the lessons on the lab home screen (Wall outlet, Light switch, GFCI outlet, Ceiling fan, Sink drain, Faucet supply lines, Build and fix a house, Learn the trades: eight tiles, four on each side) play inside a furnished room with a big TV on the wall showing the NGMY Jobs ad; the ceiling light is already in and only the thing being taught is waiting (red), and once it is done you can use it: flip the switch, plug in a lamp, TV or hair dryer, watch the fan spin. The house also has a Garden (a view of the house from outside with a tree, a path and a mailbox): the front door of the living room leads out to it and the front door there leads back in. Tap a door in a room to open it and walk through it into the next room or the hall, like in a game. Every room can be fixed, even the ones shown as finished: a finished room opens finished and you can pull devices out and wire them again. In a wired room tap an outlet to plug something in (five big TVs from Beovision to Apple TV that play NGMY ads, a lamp, a toaster or a hair dryer) or unplug it, tap the wall switch (or the light) to turn the light or the ceiling fan on and off, and tap a TV to watch it full screen with its own brand home screen. Bedrooms have ceiling fans. Wire a room, Plumb a room and Fix a house on the lab home screen all open My House at a room that needs that job. In the wiring jobs a wrong wire can be fastened just like for real and it burns or trips the breaker when the power goes on, touching a live wire shocks (in Learn mode it hurts nothing but the shock still happens, in Practice mode it costs a life), the wire buttons that are already fastened disappear, the screw labels are kept away from the wires, finished devices have a bright frame so they are easy to find from far, finished rooms have a painted ceiling with crown moulding and no bare beams, and a TV in the room job opens full screen when tapped. The Construction Lab downloads on its own when its button is pressed, so the Core Protocol opens quickly. A TV that is plugged in and on plays the real NGMY ads right on its screen, flat on the glass like a normal TV, without opening it (tap it to watch full screen). There is a Voltage tester: in My House pick the Tester button and tap an outlet, the switch or the light (it glows and beeps when there is power and stays dark when there is none), and in the wiring jobs it is the Voltage tester right after Look in the devices tray. The Construction Lab menus are now at the top like in the Electronics Lab, the home screen of the lab is a short list of tiles with a Learn mode and Practice mode switch, a device already put in can be tapped again to open it or pull it out, and a tap that misses never moves the view. opened from the construction helmet button next to the AI button at the top of the Electronics Lab, and also as a tile in the Core Protocol. Every model can be turned with a finger, zoomed by pinching or with the zoom buttons, and any part can be tapped to zoom in and read what it is. Lessons: Wall outlet (black hot wire to the brass screw, white neutral to the silver screw, bare copper ground to the green screw), Light switch (two black wires on the two brass screws, white wires joined with a wire nut), GFCI outlet (power in on the LINE screws, the LOAD screws are covered with yellow tape, press RESET then TEST), Sink drain (build the tailpiece, P-trap and trap arm, tighten the slip nuts, run the water and see the water seal that blocks sewer gas), Faucet supply lines (hot red hose on the left, cold blue hose on the right, then open the shut-off valves) and a whole house cut open at the front that can be built stage by stage (slab, framing, plumbing rough-in, electrical rough-in, drywall, fixtures, roof), where a tripped breaker and a leaking slip nut can be fixed and each fixture opens its own lesson. The electrical lessons start with the breaker ON and refuse any wire until it is turned OFF, and every wrong connection is explained in plain words. BUILD A WHOLE ROOM (also WIRE A ROOM quick start, and a Skip to the wiring button in the tray, which do the framing, cable and drywall for you so you start straight at wiring the outlets, switches, light and fan with coloured labelled screws, the tester, the TV and the switch test; the room has a window wall, a door wall and the working wall): a project with three phases (rough-in, drywall, devices). Rough-in: mount wall boxes, ceiling boxes and a fan box on the studs with the drill, and unroll the cable through the studs and ceiling (a wrong route gives an error). Drywall: hang the sheets, cut holes with the drywall saw, screw them to the studs, then tape, mud, sand and paint. Devices: wire outlets, several switches, a ceiling light and a ceiling fan, each with a switch to test, then plug in a TV and other appliances. The screw terminals have different colours (brass gold hot, silver neutral, green ground) and show a label when tapped. A Behind the wall / In front button lets you choose which side of the wall you look from instead of the camera turning by itself. Learn mode tells you what to do next and explains every wrong move; Practice mode only speaks up when something is done wrong, and real wiring mistakes shock (three lives) or burn. SERVICE CALLS (Fix a house, learn and practice): a customer rings with four problems chosen from twelve kinds (tripped breaker, no hot water, leaking slip nut, leaking crimped joint, dead outlet, flickering light, burnt outlet, tripped GFCI, running toilet, dripping faucet, hole in the wall, clogged sink), a different mix every time; use Look and test, then the right tool from the toolbox (hand, screwdriver, pliers, wrench, crimp tool, plunger, new flapper, new outlet, drywall patch); wires must have their breaker switched off first. PLUMBING JOBS (learn and practice): fit out a bathroom (flange, wax ring, toilet, bolts, shut-off valve, supply hose, then the sink) or a kitchen sink piece by piece, with the order checked (the app says why a piece cannot go there yet), the main water valve turned off before cutting into pipes, joints tightened with the wrench, and finally the water turned on to find leaks.',"MY HOUSE, THE WORLD OUTSIDE: go outside from the living room (Go outside, or the front door) into a big garden town you can walk and decorate. It starts with a main street, a lane up to the house, a crossroads, a shop, a hospital with a red cross, a fire station with a fire truck, a school, a second house, an ambulance and a car, trees, a pond, lampposts, a bench and fenced animals. In Furniture mode the Add tray offers road pieces (straight, corner, T-junction, crossroads) that snap to a grid and jump a whole piece with the arrow buttons so they always join up, buildings (house, shop, hospital, fire station, school), cars, a fire truck, an ambulance, animals (dog, cat, cow, sheep, chicken, horse) that wander about, trees, bushes, flowers, fences, a bench, a swing, a shed and a doghouse. Everything can be moved, turned, recoloured and removed with the buttons, and nothing reacts to a tap unless the Furniture button is on. Walk about puts a person in the world: hold the arrows to walk (up is away from you), or double tap a spot to send them there; they walk round buildings, vehicles, trees and fences, and walking up to the front door takes them back into the living room. The camera never goes under the ground.","ELECTRONICS LAB: build real circuits with 56 parts in two tool rows, both at the top above the board (swipe sideways), under a redesigned top bar with the lab name, a live count of working and burnt parts, buttons for ready-made circuits, repair, clear and help, and a challenge card with a progress bar: batteries, solar panel, hand crank, wind turbine, switch, fuse, bulb, LED, motor, radio, TV, fan, speaker, clock, calculator, phone charger, WiFi router, siren, toy car, kettle, desk lamp, party lights, voltmeter and ammeter, step-down converter (brings big battery volts down to 3 to 9 V so a phone, tablet, headphones or smart watch is safe), 5 V regulator (gets hot), diode (one way, 0.7 V drop), light sensor, LED strip, water pump, hair dryer, headphones, smart watch, tablet, fridge, washing machine, blender, drone, power drill, torch, neon sign, microwave, doorbell, security camera, game console, heart monitor, aquarium, lighthouse, disco ball, robot and toaster. Each gadget needs the right volts and the right way round: the lab explains why something is not working (not connected, only one end wired, plugged in backwards, flat battery, switch open, too few volts, burnt out and why). A 1.5 volt battery starts flat and must be charged by a solar panel first. The TV shows NGMY animation channels: it opens on the big screen by itself for a minute when it first switches on, and tapping it 3 times quickly opens the big screen. Each TV brand shows its apps in its own design: Samsung with a Smart Hub bar along the bottom, LG with webOS wide launcher cards, Sony with Google TV rows and a picture card, Apple TV with big rounded icons that rise when selected, and Bang and Olufsen with a quiet warm text menu. The TV has 10 NGMY animation channels, a remote control at the top middle of the big screen (CH minus, CH plus, TV, Apps, Ads) and 8 apps inside the TV screen (there is no Growth Income ad or app on the TVs): NGMY Ads (every promotion as cartoons), Civic Registry, Jobs, NGMY Store (African and traditional food, supporting the Congolese and African community), Kiswahili, Doc Scanner, Invoices and Calendar. Each ad is a little cartoon with a kid character. Premium devices with screens play the NGMY cartoon ads on their own screens: TVs (Samsung Neo QLED 8K, LG OLED evo G5, Sony Bravia 9, Apple TV 4K, Bang and Olufsen Beovision), phones (iPhone 18 Pro Max with a Dynamic Island, iPhone Fold, Galaxy S26 Ultra, Galaxy Z Fold7, Pixel 10 Pro XL, Xiaomi 16 Ultra, Huawei Mate 80 Pro Max, OPPO Find X9 Ultra, Honor Magic V5, vivo X300 Pro), tablets and readers (iPad Pro, Kindle Scribe), computers (MacBook Pro, iMac, Pro Display XDR monitor, Sony laser projector, luxury car touchscreen, Apple Vision Pro). Tapping a screen 3 times opens its big screen (a phone opens like an iPhone, a computer shows a desktop with a dock and app windows). Tapping it 4 times opens a size sheet so the screen can be made bigger (never smaller than normal). Sample circuit: Phone and TV on one battery, using a step-down converter. The AI button at the top of the lab opens the AI Inventor, which builds what you describe on the lab board.  Every battery and solar panel can only give so many amps: when the gadgets connected ask for more, a red warning triangle appears on the power source, its volts sag, gadgets switch off and the lab explains why. The lab saves your board and your challenges by itself, so nothing disappears when you leave. The challenges sit behind a flag button in the top bar (with a number on it for how many are left), next to the dark glowing AI button and the help button.","BODY EXPLORER: a real 3D human body built from medical anatomy data. You can turn it, zoom in, switch layers (skin, muscles, organs, skeleton, blood vessels), tap any part to learn about it, hear the heart beat, and take a quiz.","KISWAHILI SCHOOL: learn English and Swahili with pictures and the teacher Mwalimu Amina.","FAMILY TREE AND FAMILY BOOK: build a family tree, then keep a Family Book library of up to six books. The AI can write a whole new book from the tree, in English or Swahili, and the cover can be designed. The look of the top of each book can be chosen from eight header designs (classic leather, ornate gold, parchment, clean paper, midnight, emerald, rose vintage, modern) with the Header button, and the book title also shows as a small running title on every page.","NOTES: business notes with search, photos and cards.","NGMY QUOTES: make a picture quote with many designs, word sizes, text styles, your own photo and the NGMY logo. It also makes NEWS: a newspaper page with a headline, article and your picture, written by an AI that knows NGMY.","BIO STUDIO: link-in-bio pages with designs such as Neural Core, Quantum Grid and Mech Terminal, and visitors can react to a page.","MENU STUDIO: restaurant menus published as a link.","BUSINESS CARD CREATOR: design and download business cards.","INVOICES AND QUOTE CALC: invoices, receipts and estimates with NGMY watermarks.","DOC SHARE, QR GENERATOR, RECORDER STUDIO, VIDEO STUDIO, PLAY ZONE AND PHONE UNLOCK: tools in the Creator Hub.","APP BUILDER: describe an app and the AI builds it, including real web apps you can publish.","DOCUMENT SCANNER: scan papers with the phone camera.","GAME CENTER AND VAULT ARCADE: arcade games you can play. Game bets and wins have their own receipts and do not appear in the wallet history. Games played offline are saved on the phone and counted on the balance, then applied to the account in order as soon as the phone is online again, and every device updates."],x.s)
D.en=w([2774754246,2222750968,2574743534,2373680118,234025727,3177933782,2976870366,1422247313,1345335392,50397442,2842126286,2099981142,436141799,1658312629,3870010189,2591454956,1170918031,2642575903,1086966153,2273148410,368769775,3948501426,3376891790,200339707,3970805057,1742001331,4255294047,3937382213,3214711843,4154762323,2524082916,1539358875,3266819957,486407649,2928907069,1780885068,1513502316,1094664062,49805301,1338821763,1546925160,4104496465,887481809,150073849,2473685474,1943591083,1395732834,1058346282,201589768,1388824469,1696801606,1589887901,672667696,2711000631,251987210,3046808111,151455502,907153956,2608889883,1038279391,652995533,1764173646,3451040383,2675275242,453576978,2659418909,1949051992,773462580,756751158,2993581788,3998898868,4221608027,4132590244,1295727478,1641469623,3467883389,2066295122,1055122397,1898917726,2542044179,4115878822,1758581177,0,753790401,1612718144,536673507,3367088505,3982187446,3194645204,1187761037,3653156455,1262041458,3729410708,3561770136,3898103984,1255133061,1808847035,720367557,3853167183,385612781,3309519750,3612167578,1429418854,2491778321,3477423498,284817897,100794884,2172616702,4031795360,1144798328,3131023141,3819481163,4082192802,4272137053,3225436288,2324664069,2912064063,3164445985,1211644016,83228145,3753688163,3249976951,1977277103,1663115586,806359072,452984805,250868733,1842533055,1288555905,336333848,890442534,804056259,3781124030,2727843637,3427026056,957814574,1472513171,4071073621,2189328124,1195195770,2892260552,3881655738,723065138,2507371494,2690670784,2558624025,3511635870,2145180835,1713513028,2116692564,2878378043,2206763019,3393603212,703524551,3552098411,1007948840,2044649127,3797835452,487262998,1994120109,1004593371,1446130276,1312438900,503974420,3679013266,168166924,1814307912,3831258296,1573044895,1859376061,4021070915,2791465668,2828112185,2761266481,937747667,2339994098,854058965,1137232011,1496790894,3077402074,2358086913,1691735473,3528347292,3769215305,3027004632,4199962284,133494003,636152527,2942657994,2390391540,3920539207,403179536,3585784431,2289596656,1864705354,1915629148,605822008,4054230615,3350508659,1371981463,602466507,2094914977,2624877800,555687742,3712699286,3703422305,2257292045,2240449039,2423288032,1111375484,3300242801,2858837708,3628615824,84083462,32962295,302911004,2741068226,1597322602,4183250862,3501832553,2441512471,1489093017,656219450,3114180135,954327513,335083755,3013122091,856756514,3144247762,1893325225,2307821063,2811532339,3063651117,572399164,2458355477,552200649,1238290055,4283782570,2015897680,2061492133,2408352771,4171342169,2156497161,386731290,3669999461,837215959,3326231172,3093850320,3275833730,2962856233,1999449434,286199582,3417354363,4233385128,3602627437,974525996],x.t)
D.Jj=new C.ww(0,"emojis")
D.DY=new C.ww(1,"pictures")
D.Jk=new C.ww(2,"icons3d")
D.a7Z=new C.ww(3,"animations")
D.TM=new C.ww(4,"videoMotion")
D.DZ=new C.ww(5,"luxe")
D.a5E=w([D.Jj,D.DY,D.Jk,D.a7Z,D.TM,D.DZ],B.as("O<ww>"))
D.eVM=new B.y(A.ed,"Looks")
D.eJv=new B.y(A.D4,"Light")
D.eJs=new B.y(A.mi,"Colour")
D.eHq=new B.y(A.wx,"Effects")
D.apk=new B.a0(63112,"MaterialIcons",!1)
D.eDV=new B.y(D.apk,"Crop")
D.dkA=w([D.eVM,D.eJv,D.eJs,D.eHq,D.eDV],x.f2)
D.dlh=w([],x.D)
D.hEc=w([],x.L)
D.eHE=new B.y("Flashcard",D.Je)
D.eLy=new B.y("Quiz",D.Jf)
D.eNA=new B.y("Worksheet",D.Jg)
D.eKy=new B.y("Notes",D.n8)
D.eM6=new B.y("Section",D.DW)
D.dm0=w([D.eHE,D.eLy,D.eNA,D.eKy,D.eM6],B.as("O<+(n,mT)>"))
D.dTp=new C.la(6,"beadedPearl")
D.bnM=new B.u(1,0.47843137254901963,0.3607843137254902,0.1803921568627451,A.q)
D.hEg=w([H.Zz,D.bnM,A.is],x.O)
D.aJT=new C.jC("malipo_beaded_pearl","Malipo \u2014 Lulu","Mpaka wa shanga za lulu kuzunguka pembeni \xb7 dhahabu na shaba.",D.dTp,4294966774,4286209070,4291404327,D.ka)
D.dTq=new C.la(7,"artDeco")
D.bsb=new B.u(1,0.9686274509803922,0.9607843137254902,0.9490196078431372,A.q)
D.bve=new B.u(1,0.12156862745098039,0.10588235294117647,0.08627450980392157,A.q)
D.hEe=w([D.bsb,D.bve,A.c4],x.O)
D.aJU=new C.jC("malipo_art_deco","Malipo \u2014 Art Deco","Pembe za ngazi za kisasa \xb7 mng'ao wa dhahabu juu.",D.dTq,4294440434,4280228630,4290283019,D.ka)
D.dTr=new C.la(8,"rosetteCorners")
D.bul=new B.u(1,0.984313725490196,0.9647058823529412,0.9372549019607843,A.q)
D.biC=new B.u(1,0.4196078431372549,0.24705882352941178,0.16470588235294117,A.q)
D.bnE=new B.u(1,0.788235294117647,0.4823529411764706,0.23921568627450981,A.q)
D.hDS=w([D.bul,D.biC,D.bnE],x.O)
D.aJS=new C.jC("malipo_rosette","Malipo \u2014 Duara","Medali ya duara kila pembe \xb7 shaba na mahogany.",D.dTr,4294702831,4285218602,4291394365,D.ka)
D.dTs=new C.la(9,"modernLedger")
D.hDR=w([A.c,D.jz,D.jz],x.O)
D.aJR=new C.jC("malipo_modern_ledger","Malipo \u2014 Kisasa","Ukanda thabiti wa bluu upande wa kushoto \xb7 mstari mwembamba.",D.dTs,4294967295,4279378237,4279378237,D.ka)
D.dm4=w([D.aJT,D.aJU,D.aJS,D.aJR],x.h)
D.dme=w([A.ir,A.pd],x.O)
D.ct=new C.hF(0,"none")
D.dm=new C.hF(1,"fade")
D.Jh=new C.hF(3,"slideRight")
D.aKM=new C.hF(5,"slideDown")
D.ed3=new C.hF(7,"zoomOut")
D.a7Y=new C.hF(11,"cube")
D.ecZ=new C.hF(12,"blur")
D.aKJ=new C.hF(13,"dissolve")
D.ed_=new C.hF(14,"wipeLeft")
D.ed0=new C.hF(15,"wipeRight")
D.TL=new C.hF(17,"push")
D.ed1=new C.hF(18,"flash")
D.aKL=new C.hF(20,"swing")
D.ed2=new C.hF(21,"curtain")
D.Sn=w([D.ct,D.dm,D.vd,D.Jh,D.ve,D.aKM,D.n9,D.ed3,D.Ji,D.aKN,D.TK,D.a7Y,D.ecZ,D.aKJ,D.ed_,D.ed0,D.qY,D.TL,D.ed1,D.aKK,D.aKL,D.ed2],x.i)
D.So=w([D.a7C,D.a7A,D.a7t,D.a7u,D.a7v,D.a7y,D.a7w,D.a7x,D.a7B,D.a7z,D.aJT,D.aJU,D.aJS,D.aJR],x.h)
D.dmH=w([y.L,"Mbuzi Mbili","Ngyoka","Mmoko"],x.s)
D.dmL=w([A.u6,A.i3,A.c4],x.O)
D.eIM=new B.y(A.uI,"Design")
D.eXn=new B.y(D.apB,"Word sizes")
D.eSJ=new B.y(A.D0,"Text")
D.bRb=new B.a0(983182,"MaterialIcons",!1)
D.eSO=new B.y(D.bRb,"Photo")
D.eDt=new B.y(A.lm,"Logo")
D.eYG=new B.y(A.HU,"News")
D.dmR=w([D.eIM,D.eXn,D.eSJ,D.eSO,D.eDt,D.eYG],x.f2)
D.dmS=w(["golddust","sparkle","sheen"],x.s)
D.eeq=new C.ew("upload_pdf",K.PB,"Upload PDF")
D.edA=new C.ew("sign_paper",A.HR,"Sign Paper")
D.bQr=new B.a0(63438,"MaterialIcons",!1)
D.eem=new C.ew("hd_photo",D.bQr,"HD Photo")
D.eds=new C.ew("sharpen",E.a2k,"Sharpen")
D.edC=new C.ew("print",K.PB,"Download PDF")
D.ee3=new C.ew("rotate",D.apk,"Rotate")
D.edL=new C.ew("text_box",A.D0,"Text Box")
D.edN=new C.ew("picture",A.uM,"Picture")
D.edJ=new C.ew("title",A.wL,"Title")
D.edF=new C.ew("subtitle",V.aqb,"Subtitle")
D.eec=new C.ew("bullets",I.a2D,"Bullet List")
D.edG=new C.ew("numbered",A.Po,"Numbered")
D.eef=new C.ew("quote",A5.CO,"Quote")
D.edS=new C.ew("citation",A.ov,"Citation")
D.eei=new C.ew("date_stamp",Aj.a2o,"Date Stamp")
D.ee5=new C.ew("page_number",A.zn,"Page #")
D.ee9=new C.ew("header_bar",A.zp,"Header")
D.edM=new C.ew("footer_bar",Av.a3b,"Footer")
D.edB=new C.ew("divider",A.t_,"Divider")
D.edx=new C.ew("highlight",A.a2G,"Highlight")
D.eeb=new C.ew("redact",A.uV,"Redact")
D.edZ=new C.ew("callout",A.CF,"Callout")
D.eek=new C.ew("checkboxes",I.aoD,"Checklist")
D.edW=new C.ew("table",A.a39,"Table")
D.edQ=new C.ew("memo",I.a2T,"Memo")
D.ee_=new C.ew("letter",A.HG,"Letter")
D.bQ4=new B.a0(63259,"MaterialIcons",!0)
D.edr=new C.ew("agenda",D.bQ4,"Agenda")
D.edD=new C.ew("toc",AE.apO,"Contents")
D.bQn=new B.a0(63406,"MaterialIcons",!1)
D.edX=new C.ew("sig_line",D.bQn,"Sign Line")
D.edk=new C.ew("initial_line",A.j2,"Initials")
D.edn=new C.ew("approved",A.lm,"APPROVED")
D.ee1=new C.ew("draft",A.px,"DRAFT")
D.ee7=new C.ew("confidential",A.jG,"Confidential")
D.eea=new C.ew("sticky",A.PH,"Sticky Note")
D.eej=new C.ew("progress",A.apN,"Progress")
D.bRB=new B.a0(983507,"MaterialIcons",!1)
D.edy=new C.ew("stars",D.bRB,"Star Rating")
D.edi=new C.ew("equation",A.apD,"Equation")
D.edt=new C.ew("timeline",A.a3a,"Timeline")
D.edR=new C.ew("two_col",A.a3c,"Two Columns")
D.edv=new C.ew("compare",AA.a2s,"Compare")
D.edg=new C.ew("duplicate_el",A.fW,"Duplicate")
D.eeo=new C.ew("delete_el",A.eh,"Delete")
D.eee=new C.ew("bring_fwd",H.apx,"Bring Front")
D.edl=new C.ew("send_back",H.apw,"Send Back")
D.ee0=new C.ew("align_left",D.a2B,"Align L")
D.ee6=new C.ew("align_center",D.a2A,"Align C")
D.een=new C.ew("align_right",D.a2C,"Align R")
D.edK=new C.ew("word_count",A4.a2_,"Word Count")
D.edH=new C.ew("link_text",A.hL,"Link")
D.ee4=new C.ew("phone",A.j3,"Phone")
D.edw=new C.ew("email",A.CK,"Email")
D.eep=new C.ew("qr_placeholder",A.jI,"QR Placeholder")
D.edq=new C.ew("rectangle",A6.rY,"Rectangle")
D.edV=new C.ew("circle",A.pn,"Circle")
D.edm=new C.ew("arrow",A.jF,"Arrow")
D.eed=new C.ew("line",A.t_,"Line")
D.edz=new C.ew("triangle",A.a2q,"Triangle")
D.bQb=new B.a0(63318,"MaterialIcons",!1)
D.edE=new C.ew("grayscale",D.bQb,"Grayscale")
D.edO=new C.ew("brighten",I.aoY,"Brighten")
D.edT=new C.ew("flip_h",A.CN,"Flip H")
D.bQi=new B.a0(63348,"MaterialIcons",!1)
D.eel=new C.ew("flip_v",D.bQi,"Flip V")
D.ee8=new C.ew("cover_page",A.qF,"Cover Page")
D.edj=new C.ew("invoice",A.hx,"Invoice")
D.edu=new C.ew("resume",A.n0,"Resume")
D.edI=new C.ew("minutes",A.pq,"Minutes")
D.edo=new C.ew("lab_report",A.PD,"Lab Report")
D.edp=new C.ew("rubric",A.qI,"Rubric")
D.edU=new C.ew("flashcard_tool",X.HO,"Flashcard")
D.eeg=new C.ew("quiz_tool",A.HL,"Quiz Block")
D.edY=new C.ew("worksheet_tool",P.Hm,"Worksheet")
D.ee2=new C.ew("outline_share",A.PF,"Share Outline")
D.eeh=new C.ew("export_json",D.aoJ,"Export JSON")
D.edh=new C.ew("new_slide",D.a1Z,"New Slide")
D.edP=new C.ew("present",A.qL,"Present")
D.dnn=w([D.eeq,D.edA,D.eem,D.eds,D.edC,D.ee3,D.edL,D.edN,D.edJ,D.edF,D.eec,D.edG,D.eef,D.edS,D.eei,D.ee5,D.ee9,D.edM,D.edB,D.edx,D.eeb,D.edZ,D.eek,D.edW,D.edQ,D.ee_,D.edr,D.edD,D.edX,D.edk,D.edn,D.ee1,D.ee7,D.eea,D.eej,D.edy,D.edi,D.edt,D.edR,D.edv,D.edg,D.eeo,D.eee,D.edl,D.ee0,D.ee6,D.een,D.edK,D.edH,D.ee4,D.edw,D.eep,D.edq,D.edV,D.edm,D.eed,D.edz,D.edE,D.edO,D.edT,D.eel,D.ee8,D.edj,D.edu,D.edI,D.edo,D.edp,D.edU,D.eeg,D.edY,D.ee2,D.eeh,D.edh,D.edP],B.as("O<ew>"))
D.dnx=w([A.cu,A.am],x.O)
D.eD_=new B.y(4286331629,4292552567)
D.eCN=new B.y(4280640491,4278630100)
D.eD7=new B.y(4294538006,4292943176)
D.eC9=new B.y(4278556265,4280640491)
D.dhg=w([D.eD_,D.eCN,D.eD7,D.eC9],x.n)
D.cEn=w([4294626325,4280472558,4294210230],x.t)
D.edb=new C.o9("colorful","Colorful",A.mi,D.dhg,4294967295,3875536895,D.cEn,D.n9)
D.eCB=new B.y(4279522093,4279657780)
D.eCR=new B.y(4281750292,4283268111)
D.eCc=new B.y(4278603323,4279203438)
D.eCS=new B.y(4282343954,4279599165)
D.cPw=w([D.eCB,D.eCR,D.eCc,D.eCS],x.n)
D.cE5=w([4288931381,4294829706,4287033260],x.t)
D.ed7=new C.o9("nature","Nature",A.HS,D.cPw,4294442727,3874290891,D.cE5,D.dm)
D.eCv=new B.y(4279369771,4283178389)
D.eCs=new B.y(4279179050,4286456526)
D.eCJ=new B.y(4280163147,4290648157)
D.eC1=new B.y(4278322711,4285343961)
D.d6X=w([D.eCv,D.eCs,D.eCJ,D.eC1],x.n)
D.cEj=w([4294210230,4280472558,4289170426],x.t)
D.ed5=new C.o9("vibe","Vibe",A.Ps,D.d6X,4294967295,3874869502,D.cEj,D.vd)
D.eD3=new B.y(4290007817,4292552567)
D.eCY=new B.y(4286328082,4294286859)
D.eD2=new B.y(4288485197,4294538006)
D.eCX=new B.y(4285343961,4293675161)
D.ca8=w([D.eD3,D.eCY,D.eD2,D.eCX],x.n)
D.cEo=w([4294829706,4294967295,4284999929],x.t)
D.ed6=new C.o9("celebration","Celebration",A.kv,D.ca8,4294967295,4009752557,D.cEo,D.qY)
D.eCq=new B.y(4279179050,4280171146)
D.eCu=new B.y(4279310375,4280232247)
D.eCi=new B.y(4278916151,4280172719)
D.eCr=new B.y(4279179050,4281549141)
D.d_d=w([D.eCq,D.eCu,D.eCi,D.eCr],x.n)
D.cE0=w([4281908728,4294626325,4287931320],x.t)
D.eda=new C.o9("professional","Professional",A.CD,D.d_d,4294967295,3872118241,D.cE0,D.TL)
D.eCm=new B.y(4278995566,4278413729)
D.eCe=new B.y(4278727492,4279137424)
D.eCK=new B.y(4280171146,4278751666)
D.eCn=new B.y(4278995566,4279590517)
D.cIe=w([D.eCm,D.eCe,D.eCK,D.eCn],x.n)
D.cE3=w([4286436348,4284410580,4294829706],x.t)
D.edc=new C.o9("ocean","Ocean",I.a3e,D.cIe,4294967295,3873501950,D.cE3,D.ve)
D.eCZ=new B.y(4286328082,4294538006)
D.eD0=new B.y(4286781507,4294677052)
D.eCV=new B.y(4283178389,4294197086)
D.eD1=new B.y(4288295954,4294688548)
D.cWq=w([D.eCZ,D.eD0,D.eCV,D.eD1],x.n)
D.cEp=w([4294829706,4294967295,4294747557],x.t)
D.edd=new C.o9("sunset","Sunset",A.PK,D.cWq,4294967295,4009749973,D.cEp,D.dm)
D.eDb=new B.y(4294967295,4294047225)
D.eD6=new B.y(4294507260,4294967295)
D.eDa=new B.y(4294967295,4293060848)
D.eD5=new B.y(4294507260,4294047225)
D.daj=w([D.eDb,D.eD6,D.eDa,D.eD5],x.n)
D.cDZ=w([4280640491,4279179050,4287931320],x.t)
D.ed9=new C.o9("minimal","Minimal",A6.rY,D.daj,4279179050,4282865001,D.cDZ,D.dm)
D.eCl=new B.y(4278979081,4280886564)
D.eCF=new B.y(4280031511,4278979081)
D.eCt=new B.y(4279308561,4281148438)
D.eCk=new B.y(4278979081,4280031511)
D.dpz=w([D.eCl,D.eCF,D.eCt,D.eCk],x.n)
D.cEc=w([4292128567,4294829706,4289241758],x.t)
D.ede=new C.o9("elegant","Elegant",A.mj,D.dpz,4294898631,3873957348,D.cEc,D.aKJ)
D.eCH=new B.y(4280159034,4282058596)
D.eCh=new B.y(4278916151,4280163147)
D.eCP=new B.y(4281208933,4278916151)
D.eCy=new B.y(4279502891,4283178389)
D.dx6=w([D.eCH,D.eCh,D.eCP,D.eCy],x.n)
D.cEl=w([4294296657,4292128567,4291081725],x.t)
D.ed8=new C.o9("royal","Royal Gold",A.jq,D.dx6,4294965222,3874084351,D.cEl,D.n9)
D.eC6=new B.y(4278464302,4280163147)
D.eCg=new B.y(4278916151,4279455306)
D.eCI=new B.y(4280163147,4283040846)
D.eC3=new B.y(4278332450,4281413249)
D.dgS=w([D.eC6,D.eCg,D.eCI,D.eC3],x.n)
D.cE_=w([4281193663,4289170426,4294210230],x.t)
D.edf=new C.o9("aurora","Aurora Glow",A.ed,D.dgS,4293983738,3869766608,D.cE_,D.dm)
D.wV=w([D.edb,D.ed7,D.ed5,D.ed6,D.eda,D.edc,D.edd,D.ed9,D.ede,D.ed8,D.edf],B.as("O<o9>"))
D.bom=new B.u(0.13333333333333333,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.q)
D.do6=w([A.rv,D.bom,A.rv],x.O)
D.don=w([4279179050,4281549141,4280640491,4278556265,4292617766,4286331629,4293548044,4278751666,4294967295,4294688548],x.t)
D.dor=w([null,4294967295,4279310375,4294626325,4280472558,4294210230,4283096704,4293870660,4282090230,4294677052],x.Z)
D.eSB=new B.y("The NGMY app","Write the front-page story about the NGMY app and everything it offers.")
D.eIm=new B.y("KB PABLO QR, our CEO","Write a respectful story about KB PABLO QR, Founder, President and CEO of NGMY, and what he built.")
D.eN8=new B.y("Civic Registry","Write about the Civic Registry: why it was built, receipts, registrars and trust in the community.")
D.ezw=new B.y("NGMY Advisors","Write about the NGMY Advisors, the AI advisors who help members.")
D.eLK=new B.y("Growth Income","Write about Growth Income, the wallet and how members earn on work days.")
D.eJS=new B.y("Core Protocol studios","Write about the Core Protocol studios, the Body Explorer and the learning labs.")
D.eOr=new B.y("Surprise me","")
D.dp0=w([D.eSB,D.eIm,D.eN8,D.ezw,D.eLK,D.eJS,D.eOr],x.L)
D.bgq=new B.u(1,0.9450980392156862,0.9294117647058824,0.8941176470588236,A.q)
D.bsJ=new B.u(1,0.796078431372549,0.7647058823529411,0.7019607843137254,A.q)
D.dpP=w([A.c,D.bgq,D.bsJ],x.O)
D.ds5=w([1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0],x.x)
D.aKi=new C.la(0,"heritageGold")
D.bmG=new B.u(1,0.9764705882352941,0.9450980392156862,0.8666666666666667,A.q)
D.hEh=w([D.bmG,A0.ahL,A.aC],x.O)
D.dRy=new C.jC("kuhowa_heritage_gold","Kuhowa \u2014 Hazina ya Dhahabu","Mpaka mzito wa kikabila \xb7 dhahabu na hudhurungi.",D.aKi,4294570461,4284234270,4292128567,D.ka)
D.aKj=new C.la(1,"heritageCrimson")
D.beA=new B.u(1,0.9803921568627451,0.9411764705882353,0.9019607843137255,A.q)
D.bkP=new B.u(1,0.4196078431372549,0.16470588235294117,0.11764705882352941,A.q)
D.bsv=new B.u(1,0.8784313725490196,0.6431372549019608,0.34509803921568627,A.q)
D.hDV=w([D.beA,D.bkP,D.bsv],x.O)
D.dRr=new C.jC("kuhowa_heritage_crimson","Kuhowa \u2014 Hazina Nyekundu","Mpaka mzito wa kikabila \xb7 nyekundu na dhahabu.",D.aKj,4294635750,4285213214,4292912216,D.ka)
D.dsa=w([D.a7C,D.a7A,D.dRy,D.dRr,D.a7v,D.a7y],x.h)
D.dXv=new C.rV(1,"circuit")
D.dXY=new C.mq("neural","Neural Link","Robotic",D.dXv,4278322711,4279179050,4280472558,4284704497,4292932350,"One link at a time, NGMY connects young people everywhere.")
D.dXu=new C.rV(0,"grid")
D.dXV=new C.mq("signal","Signal Grid","Robotic",D.dXu,4280163147,4278322711,4289222135,4293675161,4294308863,"A strong signal starts with one voice. Make yours heard.")
D.dXA=new C.rV(2,"hexes")
D.dXG=new C.mq("core","Core Protocol","Robotic",D.dXA,4278464302,4278322711,4281193663,4281908728,4291623921,"Our core is simple: help each other grow.")
D.aKG=new C.rV(11,"diagonal")
D.dXR=new C.mq("steel","Steel Tech","Robotic",D.aKG,4281549141,4279179050,4287931320,4281908728,4294047225,"Build with your hands, lead with your heart.")
D.aKH=new C.rV(3,"rings")
D.dXF=new C.mq("vault","Vault Gold","Robotic",D.aKH,4280031511,4278190080,4294626325,4294286859,4294898631,"What you build together is worth more than gold.")
D.dXy=new C.rV(13,"leaves")
D.dXI=new C.mq("forest","Forest Morning","Nature",D.dXy,4279522093,4278529558,4283096704,4288931381,4293983732,"Like a forest, a community grows strongest together.")
D.aKI=new C.rV(5,"waves")
D.dXP=new C.mq("ocean","Ocean Calm","Nature",D.aKI,4278413729,4278995566,4281908728,4284999929,4293982719,"Small waves become a movement. Keep going.")
D.dXB=new C.rV(6,"sunset")
D.dXU=new C.mq("sunset","Sunset Glow","Nature",D.dXB,4294538006,4290648157,4294829706,4294668677,4294967295,"Every sunset is a promise that tomorrow can be better.")
D.dXC=new C.rV(7,"mountains")
D.dXH=new C.mq("mountain","Mountain Air","Nature",D.dXC,4282595530,4280171146,4291285758,4286680312,4293849855,"Climb together. The view is better with friends.")
D.dXD=new C.rV(8,"stars")
D.dXO=new C.mq("night","Night Sky","Nature",D.dXD,4280163147,4278190080,4294829706,4291081725,4294308863,"Dream big. NGMY is built by people who looked up.")
D.a7W=new C.rV(4,"orbs")
D.dXM=new C.mq("aurora","Aurora","Nature",D.a7W,4278603323,4283178389,4281652121,4289170426,4294967295,"Light shows up when people choose to shine together.")
D.dXW=new C.mq("sand","Sand Dune","Nature",D.aKI,4294829706,4292441862,4290007817,4294966251,4282718723,"Patience builds a legacy, one grain at a time.")
D.dXE=new C.rV(9,"rays")
D.dXL=new C.mq("golden","Golden Hour","Warm",D.dXE,4294286859,4290321436,4294897802,4294967295,4294967295,"Your hour is now. Start where you are.")
D.dXJ=new C.mq("royal","Royal Purple","Warm",D.aKG,4286456526,4290648157,4293962748,4294829706,4294967295,"Lead with respect, and people will follow with joy.")
D.dXK=new C.mq("rose","Rose Petal","Warm",D.a7W,4294668677,4292943176,4294960358,4294812847,4294967295,"Kindness is the strongest thing a community can grow.")
D.dXx=new C.rV(12,"blocks")
D.dXN=new C.mq("electric","Electric Blue","Bold",D.dXx,4280640491,4278751666,4290438909,4294967295,4294967295,"Energy is contagious. Bring yours to NGMY.")
D.dXX=new C.mq("mint","Fresh Mint","Bold",D.a7W,4281652121,4278630100,4294967295,4289197008,4278603323,"Fresh ideas grow when young people lead.")
D.dXz=new C.rV(14,"minimal")
D.dXT=new C.mq("white","Clean White","Clean",D.dXz,4294967295,4294047225,4280640491,4287931320,4279179050,"Simple words, strong purpose. That is NGMY.")
D.dXw=new C.rV(10,"frame")
D.dXQ=new C.mq("midnight","Midnight Gold","Clean",D.dXw,4279179050,4278322711,4294626325,4294829706,4294966251,"Quiet work in the dark makes the morning shine.")
D.dXS=new C.mq("community","Community Green","Clean",D.aKH,4278556265,4280640491,4289197008,4290763774,4294967295,"The New Global Movement for Youth starts with you.")
D.a68=w([D.dXY,D.dXV,D.dXG,D.dXR,D.dXF,D.dXI,D.dXP,D.dXU,D.dXH,D.dXO,D.dXM,D.dXW,D.dXL,D.dXJ,D.dXK,D.dXN,D.dXX,D.dXT,D.dXQ,D.dXS],B.as("O<mq>"))
D.dsy=w([D.BR,A.u3,A.i3,A.c4],x.O)
D.dsQ=w([D.aiM,D.jz],x.O)
D.dt_=w(["pdf","docx","txt","md"],x.s)
D.f1U=new B.b5(-3,150,34)
D.f1V=new B.b5(-3,214,62)
D.f1W=new B.b5(-3,288,62)
D.dtT=w([D.f1U,D.f1V,D.f1W],B.as("O<+(F,F,F)>"))
D.dup=w(["rays","bokeh","aurora","spotlight"],x.s)
D.dv8=w(["Write","Design","Print & fold"],x.s)
D.kb=new C.vd(2,"triangle")
D.DX=new C.vd(3,"arrow")
D.fJ=new C.vd(4,"line")
D.kc=new C.vd(5,"parallelogram")
D.dvb=w([D.bk,D.eZ,D.kb,D.DX,D.fJ,D.kc,D.lt],x.m)
D.eB0=new B.y(240,96)
D.eDN=new B.y(560,46)
D.dvh=w([D.eB0,D.eDN],x.G)
D.hEs=new C.yb(0,"classic")
D.dTv=new C.o5("heritage_gold","Urithi wa Dhahabu","Mpaka wa kitamaduni \xb7 rangi ya dhahabu na kahawia.",D.aKi,4294570461,4282000405,4284234270)
D.dTH=new C.o5("heritage_crimson","Urithi wa Nyekundu","Mpaka wa kitamaduni \xb7 rangi ya nyekundu na shaba.",D.aKj,4294635750,4281999378,4285213214)
D.dTw=new C.o5("elegant_navy","Umoja Mzuri",y.s,D.a7N,4294967035,4279378237,4290283019)
D.dTJ=new C.o5("elegant_gold","Umoja wa Dhahabu",y.Q,D.aKr,4294966515,4281016592,4289102906)
D.dTL=new C.o5("kente_sunset","Kente ya Jua",y.H,D.aKk,4294964964,4282000405,4279983648)
D.dTt=new C.o5("indigo_mudcloth","Nguo ya Indigo",y.n,D.aKl,4294439140,4279903102,4279903102)
D.dTy=new C.o5("adinkra_royal","Muhuri wa Adinkra",y.z,D.aKm,4294965484,4285218591,4287322667)
D.dTD=new C.o5("nile_lotus","Lotus ya Nile","Nguzo za papyrus na ua la lotus juu.",D.aKn,4294244340,4279196764,4279196764)
D.dTF=new C.o5("shweshwe_ivory","Shweshwe","Nguo ya shweshwe \xb7 kadi ya pembe ndani.",D.aKo,4294505710,4279970378,4291058750)
D.hEt=new C.yb(1,"ringsNdoa")
D.dTx=new C.o5("rings_ndoa","Hati ya Ndoa","Pete mbili \xb7 vichwa vya kidonge \xb7 hati rasmi ya ndoa.",D.th,4294966259,4279378237,4291404327)
D.hEv=new C.yb(2,"coupleCards")
D.dTI=new C.o5("couple_taarifa","Taarifa za Wanandoa","Picha ya mwanamume na mwanamke \xb7 kadi mbili za taarifa.",D.th,4294966259,4279378237,4291404327)
D.hEw=new C.yb(3,"kuhoweshaForm")
D.dTE=new C.o5("barua_kuhowesha","Barua ya Kuhowesha","Barua rasmi \xb7 orodha ya NIMETOWEA \xb7 mashahidi.",D.DS,4294966519,4279378237,4291404327)
D.hEx=new C.yb(4,"mahariPande")
D.dTu=new C.o5("mahari_pande","Mahari ya Pande","Masharti ya mahari \xb7 pande mbili za sahihi.",D.th,4294966259,4279904068,4291404327)
D.hEy=new C.yb(5,"familiaMti")
D.dTK=new C.o5("sheria_familia","Sheria za Familia","Mti wa familia \xb7 sheria za pamoja \xb7 kijani.",D.aKp,4294966776,4280241466,4291404327)
D.hEz=new C.yb(6,"ndoaSafi")
D.dTB=new C.o5("ndoa_safi","Ndoa ya Pamoja","Safu mbili \xb7 mume na mke \xb7 masharti ya ndoa.",D.DS,4294966519,4279378237,4291404327)
D.hEA=new C.yb(7,"peteWide")
D.dTA=new C.o5("pete_pana","Pete Pana","Pete kubwa za dhahabu \xb7 nafasi wazi \xb7 hati ya heshima.",D.th,4294966259,4282001936,4291404327)
D.hEB=new C.yb(8,"muhuriCrest")
D.dTz=new C.o5("muhuri_familia","Muhuri wa Familia","Muhuri mkubwa juu \xb7 fomu rasmi ya familia.",D.th,4294966259,4279378237,4291404327)
D.hEC=new C.yb(9,"fomuWazi")
D.dTC=new C.o5("fomu_wazi","Fomu ya Ndoa","Fomu yenye mistari \xb7 namba \xb7 sehemu wazi za kujaza.",D.DS,4294966519,4279904068,4291404327)
D.hEu=new C.yb(10,"upendoOrnate")
D.dTG=new C.o5("upendo_dhahabu","Upendo wa Dhahabu","Mapambo ya dhahabu \xb7 picha za wanandoa \xb7 rangi ya waridi.",D.aKq,4294965493,4286200650,4291404327)
D.SE=w([D.dTv,D.dTH,D.dTw,D.dTJ,D.dTL,D.dTt,D.dTy,D.dTD,D.dTF,D.dTx,D.dTI,D.dTE,D.dTu,D.dTK,D.dTB,D.dTA,D.dTz,D.dTC,D.dTG],B.as("O<o5>"))
D.DV=new C.asI(0,"landscape169")
D.oN=new C.asI(1,"portrait916")
D.dw2=w([D.DV,D.oN],B.as("O<asI>"))
D.aD1=w([A.i3,A.bN,A.cF,A.ir,A.c],x.O)
D.v6=w([A.c4,A.i7],x.O)
D.eA0=new B.y(1000,"M")
D.eFg=new B.y(900,"CM")
D.eDH=new B.y(500,"D")
D.eBX=new B.y(400,"CD")
D.eA1=new B.y(100,"C")
D.eFh=new B.y(90,"XC")
D.eDI=new B.y(50,"L")
D.eBY=new B.y(40,"XL")
D.eA7=new B.y(10,"X")
D.eFt=new B.y(9,"IX")
D.eDZ=new B.y(5,"V")
D.eDs=new B.y(4,"IV")
D.eAE=new B.y(1,"I")
D.dwM=w([D.eA0,D.eFg,D.eDH,D.eBX,D.eA1,D.eFh,D.eDI,D.eBY,D.eA7,D.eFt,D.eDZ,D.eDs,D.eAE],x.ek)
D.f39=new B.cu(["open",A.j2,"Open & write","Keep writing this book"])
D.f3A=new B.cu(["print",A.uQ,"Print as a book","Fold and staple it"])
D.dwX=w([D.f39,D.f3A],B.as("O<+(n,a0,n,n)>"))
D.dxF=w([D.a7Y,D.n9,D.Ji,D.TL,D.dm,D.TK],x.i)
D.eTl=new B.y(-1,"Small")
D.ezM=new B.y(0,"Normal")
D.eAB=new B.y(1,"Big")
D.eBh=new B.y(2,"Huge")
D.dye=w([D.eTl,D.ezM,D.eAB,D.eBh],x.ek)
D.dyF=w([49,65,89,38,83,89],x.t)
D.dyL=w([A.u3,A.i3,A.c4],x.O)
D.dze=w([D.dm,D.n9,D.vd,D.a7Y,D.Ji,D.TL],x.i)
D.aIk=new B.cZ([0,D.Nr,8,D.akj,12,D.akk],B.as("cZ<G,a4O>"))
D.ejg={gold:0,platinum:1,glow:2,rainbow:3,double:4,neon:5,framed:6,rosegold:7,jewels:8,aurora:9}
D.d_o=w([A.bN,H.ajn],x.O)
D.dlK=w([A.b0,A.bl],x.O)
D.dfW=w([A.bT,A.aH,A.bi],x.O)
D.dwY=w([A.cu,A.bv],x.O)
D.d7W=w([A.ba,A.fd],x.O)
D.diR=w([A.b8,A.fn],x.O)
D.bks=new B.u(1,0.9529411764705882,0.7764705882352941,0.7098039215686275,A.q)
D.di7=w([D.bks,A.pd],x.O)
D.dc7=w([A.hm,A.y9],x.O)
D.d7J=w([A.bx,A.ch],x.O)
D.dBV=new B.bu(D.ejg,[D.d_o,O.at9,D.dlK,D.dfW,D.dwY,D.d7W,D.diR,D.di7,D.dc7,D.d7J],B.as("bu<n,ai<u>>"))
D.eio={"[Jina la Baba wa Mume]":0,"[Jina la Jamii ya Mume]":1,"[Jina la Nyumba ya Mume]":2,"[Jina la Kijana]":3,"[Jina la Binti]":4,"[Jina la Baba wa Binti]":5,"[Jina la Jamii ya Binti]":6,"[Jina la Nyumba ya Binti]":7}
D.a6N=new B.bu(D.eio,["[Jina la Baba wa Mume]","[Jina la Jamii ya Mume]","[Jina la Nyumba ya Mume]","[Jina la Kijana]","[Jina la Binti]","[Jina la Baba wa Binti]","[Jina la Jamii ya Binti]","[Jina la Nyumba ya Binti]"],B.as("bu<n,n>"))
D.a6U=new B.bu(A.hZ,[],B.as("bu<G,+icon3d,picture(n?,n?)>"))
D.dGq=new F.NO(30,null)
D.dLF=new F.mP("Chapter 1","","","")
D.dvQ=w([D.dLF],x.B)
D.dLJ=new F.rL("My Book","","",D.dvQ,E.aJJ)
D.dLH=new F.v3("starry",null,null,null,null,"","","")
D.dLK=new F.rL("Dream Big","","",E.a5M,D.dLH)
D.dLI=new F.v3("story",null,null,null,null,"","","")
D.dLL=new F.rL("Little Lion","","",E.a5M,D.dLI)
D.dLG=new F.v3("vintage",null,null,null,null,"","","")
D.dLM=new F.rL("Our Story","","",E.a5M,D.dLG)
D.dON=new C.Fj("","NGMY","","")
D.dW8=new C.Ab("The NGMY Times","NGMY NEWS","","","By the NGMY Newsroom","",A.Z,"","","")
D.ed4=new C.b3e(null,null,null,null)
D.eeN=new C.asN(null)
D.eeY=new C.atg(0,"smaller")
D.eeZ=new C.atg(1,"bigger")
D.aKX=new C.atg(2,"fit")
D.emR=new B.o(3,6)
D.ena=new B.o(4,8)
D.erm=new B.D(E.alb,V.afk,null)
D.erq=new B.D(A.a_V,A.m1,null)
D.bSW=new B.ae(A.k6,16,A.bW,null,null,null)
D.eru=new B.D(A.iK,D.bSW,null)
D.bdZ=new B.fk(2.2,null,null,null,null,A.c,null,null,null,null)
D.erG=new B.D(A.GY,D.bdZ,null)
D.c2q=new B.ae(A.cz,16,A.aD,null,null,null)
D.erK=new B.D(A.eA,D.c2q,null)
D.fM3=new B.B("Play",null,A.nX,null,null,null,null,null,null,null,null,null)
D.dm1=w([W.arC,A.tw,D.fM3],x.p)
D.f8e=new B.c7(A.aL,A.e,A.Q,A.m,null,A.p,null,0,D.dm1,null)
D.erN=new B.D(A.nE,D.f8e,null)
D.be7=new B.fk(2.4,null,null,null,null,null,null,null,null,null)
D.feE=new B.a5(20,20,D.be7,null)
D.erU=new B.D(A.iK,D.feE,null)
D.fVx=new B.B("Seconds per slide",null,A.fY,null,null,null,null,null,null,null,null,null)
D.es3=new B.D(A.bh,D.fVx,null)
D.eto=new C.a9G(2,"print")
D.etr=new B.j0(1,0.7764705882352941,0.1568627450980392,0.1568627450980392)
D.ev3=new B.he("/Annot")
D.ev5=new B.he("/URI")
D.fG7=new B.B("Share text outline",null,null,null,null,null,null,null,null,null,null,null)
D.exA=new B.jE("share",48,D.fG7,null,B.as("jE<n>"))
D.c2k=new B.ae(A.ed,14,A.eL,null,null,null)
D.exJ=new B.cL(null,-2,-2,null,null,null,D.c2k,null)
D.d1F=w([H.aig,A.L],x.O)
D.c8S=new B.a9(A.a6,A.aa,A.x,D.d1F,null,null)
D.b6B=new B.p(null,null,null,null,null,D.c8S,A.n)
D.bxK=new B.l5(D.b6B,A.bj,null,null)
D.exV=new B.cL(0,0,null,0,8,null,D.bxK,null)
D.dr1=w([A.i5,A.mP,A.ca],x.O)
D.eyz=new B.c_(A.A,0.5,A.x,null,0,D.dr1,null,null)
D.eB9=new B.y(0.22,A.bl)
D.eFN=new B.y("ai","Your newspaper is ready. Tell me anything you want changed, or ask me a question about NGMY.")
D.eI0=new B.y(0.5,A.hD)
D.eRH=new B.y(0.78,A.aY)
D.f2Z=new B.cu([A.br,0.22,0.7,2.6])
D.f35=new B.cu([A.ba,0.36,1.2,1.3])
D.f3b=new B.cu([A.dK,0.28,0.2,0.4])
D.f3h=new B.cu([A.cy,0.05,0.3,0.35])
D.f3n=new B.cu([A.bx,0.28,0.9,0])
D.f3v=new B.cu([A.aE,-0.25,-0.15,0.45])
D.f4m=new B.cu([A.bT,0.42,1,4.1])
D.f7X=new B.aaF(9)
D.bU1=new B.ae(A.HU,28,A.bi,null,null,null)
D.fW5=new B.B("NGMY News",null,A.di,null,null,null,null,null,null,null,null,null)
D.bI5=new B.bz(1,A.bc,D.fW5,null)
D.dus=w([D.bU1,A.au,D.bI5],x.p)
D.f88=new B.c7(A.aL,A.e,A.i,A.m,null,A.p,null,0,D.dus,null)
D.bUc=new B.ae(A.ov,16,A.c,null,null,null)
D.fXG=new B.B("Book",null,A.oW,null,null,null,null,null,null,null,null,null)
D.dyK=w([D.bUc,A.e3,D.fXG],x.p)
D.f8h=new B.c7(A.aL,A.e,A.Q,A.m,null,A.p,null,0,D.dyK,null)
D.c_V=new B.ae(A.jG,10,A.c,null,null,null)
D.fK4=new B.B("Pro",null,A.nU,null,null,null,null,null,null,null,null,null)
D.dm6=w([D.c_V,A.r4,D.fK4],x.p)
D.f8l=new B.c7(A.aL,A.e,A.Q,A.m,null,A.p,null,0,D.dm6,null)
D.fVv=new B.B("Make a newspaper",null,A.VH,null,null,null,null,null,null,null,null,null)
D.ca6=w([E.a3B,A.ae,D.fVv],x.p)
D.f8m=new B.c7(A.aL,A.e,A.Q,A.m,null,A.p,null,0,D.ca6,null)
D.bZn=new B.ae(A.kv,18,A.bN,null,null,null)
D.fMh=new B.B("Ending celebration",null,A.hk,null,null,null,null,null,null,null,null,null)
D.dtr=w([D.bZn,A.bm,D.fMh],x.p)
D.f8p=new B.c7(A.aL,A.e,A.i,A.m,null,A.p,null,0,D.dtr,null)
D.c_G=new B.ae(A.j2,18,A.kr,null,null,null)
D.fpH=new B.H(!0,A.kr,null,null,null,null,15,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fXZ=new B.B("Write",null,D.fpH,null,null,null,null,null,null,null,null,null)
D.da7=w([D.c_G,A.ae,D.fXZ],x.p)
D.f8w=new B.c7(A.aL,A.e,A.Q,A.m,null,A.p,null,0,D.da7,null)
D.fK2=new B.B("Download picture",null,A.nV,null,null,null,null,null,null,null,null,null)
D.bKQ=new B.qI(A.e2,A.A,A.f,D.fK2,null)
D.bL0=new B.dp(1,A.cr,D.bKQ,null)
D.dmw=w([K.art,A.ae,D.bL0],x.p)
D.f8x=new B.c7(A.aL,A.bb,A.i,A.m,null,A.p,null,0,D.dmw,null)
D.bVZ=new B.ae(A.HU,22,A.bi,null,null,null)
D.fU3=new B.B("NGMY NEWS",null,M.aaK,null,null,null,null,null,null,null,null,null)
D.d13=w([D.bVZ,A.ae,D.fU3],x.p)
D.f8H=new B.c7(A.aL,A.e,A.Q,A.m,null,A.p,null,0,D.d13,null)
D.f8T=new B.pB(!1,!1,null,V.XM,null,A.c3,null,null,null)
D.a9Q=new B.iM([D.ct,D.dm,D.vd,D.Jh,D.ve,D.aKM],B.as("iM<hF>"))
D.el4={title:0,quote:1,closing:2,bio:3}
D.fan=new B.de(D.el4,4,x.M)
D.eiK={caps:0,stamp:1,retro:2,glitch:3,whisper:4}
D.faq=new B.de(D.eiK,5,x.M)
D.ekk={midnight:0,rose_gold:1,slate_pro:2,neon_night:3,charcoal:4,crimson:5,gold:6,plum:7}
D.a9S=new B.de(D.ekk,8,x.M)
D.eju={Design:0,Transitions:1,Insert:2}
D.faz=new B.de(D.eju,3,x.M)
D.hEL=new B.iM([D.a7Z],B.as("iM<ww>"))
D.ejD={float3d:0,drift:1,pulse:2}
D.faD=new B.de(D.ejD,3,x.M)
D.aSB=new B.iM([D.Je,D.Jf,D.Jg],B.as("iM<mT>"))
D.eiI={shimmer:0,golddust:1,spotlight:2,goldframe:3,twinkle:4,orbit:5,rays:6,bokeh:7,aurora:8,sparkle:9,sheen:10,velvet:11,crest:12,filigree:13}
D.aSE=new B.de(D.eiI,14,x.M)
D.hEM=new B.de(A.hZ,0,B.as("de<ww>"))
D.ejA={"kbpabloqr@gmail.com":0,"ngumoyaking@gmail.com":1,"appbusiness321@gmail.com":2,"appbusiness84@gmail.com":3}
D.UL=new B.de(D.ejA,4,x.M)
D.eiA={print:0,rotate:1,text_box:2,picture:3,title:4,subtitle:5,bullets:6,numbered:7,quote:8,citation:9,date_stamp:10,page_number:11,header_bar:12,footer_bar:13,divider:14,table:15,sticky:16,duplicate_el:17,delete_el:18,bring_fwd:19,send_back:20,align_left:21,align_center:22,align_right:23,word_count:24,link_text:25,phone:26,email:27,new_slide:28,present:29}
D.aSH=new B.de(D.eiA,30,x.M)
D.ejJ={circle:0,triangle:1,hexagon:2,diamond:3}
D.fb4=new B.de(D.ejJ,4,x.M)
D.fdx=new B.av(390,844)
D.fen=new B.a5(20,20,A.M4,null)
D.aTw=new B.a5(null,2.5,null,null)
D.fex=new B.a5(18,18,A.M4,null)
D.c_K=new B.ae(A.jq,19,A.c,null,null,null)
D.feJ=new B.a5(38,38,D.c_K,null)
D.bYW=new B.ae(A.zs,22,A.c,null,null,null)
D.feM=new B.a5(40,40,D.bYW,null)
D.ffl=new B.hG(2,10,10,1.15,null)
D.aTD=new B.hG(2,16,14,0.62,null)
D.bFW=new B.R(32,30,32,40)
D.bfG=new B.u(0.3333333333333333,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.q)
D.bTZ=new B.ae(A.qF,56,D.bfG,null,null,null)
D.ajm=new B.u(0.6,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.q)
D.frP=new B.H(!0,D.ajm,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fQU=new B.B("Your books will live here.",null,D.frP,null,A.K,null,null,null,null,null,null,null)
D.dd7=w([D.bTZ,A.X,D.fQU],x.p)
D.bwF=new B.fj(A.ah,A.e,A.i,A.m,null,A.p,null,0,D.dd7,null)
D.es1=new B.D(D.bFW,D.bwF,null)
D.ffH=new B.mv(D.es1,null)
D.fQR=new B.B("Chagua jimbo la Civic Registry kwanza.",null,null,null,null,null,null,null,null,null,null,null)
D.ffZ=new B.b1(D.fQR,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fOV=new B.B("Done \u2014 only the text size was changed. Undo brings back the old size.",null,null,null,null,null,null,null,null,null,null,null)
D.fg_=new B.b1(D.fOV,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fU7=new B.B("This slide has no text boxes.",null,null,null,null,null,null,null,null,null,null,null)
D.fg8=new B.b1(D.fU7,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fUG=new B.B("Tap fields to edit names. Tap signature boxes to sign or re-sign. Print from the View tab.",null,null,null,null,null,null,null,null,null,null,null)
D.fgn=new B.b1(D.fUG,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fNx=new B.B("Sign in to Civic Registry to view Hati ya Kiapo cha Uongozi.",null,null,null,null,null,null,null,null,null,null,null)
D.fgA=new B.b1(D.fNx,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.h1_=new B.B("Could not read that presentation QR or document code.",null,null,null,null,null,null,null,null,null,null,null)
D.fgT=new B.b1(D.h1_,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fZ0=new B.B("Use the 5-character code on the document QR, like GA847.",null,null,null,null,null,null,null,null,null,null,null)
D.fh3=new B.b1(D.fZ0,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fUP=new B.B("Sign in to Civic Registry to view this document.",null,null,null,null,null,null,null,null,null,null,null)
D.fhN=new B.b1(D.fUP,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fId=new B.B("Buttons hidden. Double-tap the top-right corner to show them again.",null,null,null,null,null,null,null,null,null,null,null)
D.fi3=new B.b1(D.fId,null,null,null,null,null,null,null,A.iU,null,null,null,null,A.qr,!1,null,null,null,A.t,null)
D.fKc=new B.B("Could not crop that picture.",null,null,null,null,null,null,null,null,null,null,null)
D.fil=new B.b1(D.fKc,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fQw=new B.B("This oath is locked for editing (5 hours after the president signed). You can still view and play the video.",null,null,null,null,null,null,null,null,null,null,null)
D.fin=new B.b1(D.fQw,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fQc=new B.B("Only the authorized registrar for this state can add the oath video.",null,null,null,null,null,null,null,null,null,null,null)
D.fio=new B.b1(D.fQc,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fWX=new B.B("Document code copied.",null,null,null,null,null,null,null,null,null,null,null)
D.fip=new B.b1(D.fWX,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fEh=new B.B("Tap the logo or a picture on this slide first.",null,null,null,null,null,null,null,null,null,null,null)
D.fiy=new B.b1(D.fEh,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fLm=new B.B("Sign in to unlock Slides Pro features.",null,null,null,null,null,null,null,null,null,null,null)
D.fiV=new B.b1(D.fLm,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.h_F=new B.B("Done \u2014 the look is changed. Undo brings back the old one.",null,null,null,null,null,null,null,null,null,null,null)
D.fiX=new B.b1(D.h_F,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.h_b=new B.B("The NGMY logo stays on every quote. You can move it or change its frame.",null,null,null,null,null,null,null,null,null,null,null)
D.fj0=new B.b1(D.h_b,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fDc=new B.B("Video upload failed. Check your connection and try again.",null,null,null,null,null,null,null,null,null,null,null)
D.fj2=new B.b1(D.fDc,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fW0=new B.B("This transferred document is view only. You can print or download it.",null,null,null,null,null,null,null,null,null,null,null)
D.fjb=new B.b1(D.fW0,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fZL=new B.B("Done \u2014 the words are changed and the design is kept. Undo brings back the old version.",null,null,null,null,null,null,null,null,null,null,null)
D.fjq=new B.b1(D.fZL,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fZC=new B.B("Book saved on this device.",null,null,null,null,null,null,null,null,null,null,null)
D.fjs=new B.b1(D.fZC,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fD3=new B.B("Only the authorized registrar for this state can update this signature.",null,null,null,null,null,null,null,null,null,null,null)
D.fjy=new B.b1(D.fD3,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fHa=new B.B("You don't have a Bio link yet \u2014 create one in Bio first.",null,null,null,null,null,null,null,null,null,null,null)
D.fk_=new B.b1(D.fHa,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fYO=new B.B("Nothing to transfer yet \u2014 fill names or details on this document first.",null,null,null,null,null,null,null,null,null,null,null)
D.fkb=new B.b1(D.fYO,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fGX=new B.B("Only the authorized registrar for this state can sign this document.",null,null,null,null,null,null,null,null,null,null,null)
D.fkq=new B.b1(D.fGX,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.bo0=new B.u(1,0.9764705882352941,0.8352941176470589,0.8274509803921568,A.q)
D.d_E=w([A.ir,A.pd,D.bo0,D.afP,A.ir],x.O)
D.fkO=new B.fY(A.A,0,6.283185307179586,A.x,D.d_E,null,null)
D.d9d=w([A.bN,A.c4,A.i3,D.BR,A.bN],x.O)
D.aUb=new B.fY(A.A,0,6.283185307179586,A.x,D.d9d,null,null)
D.dol=w([A.bT,A.br,A.ba,A.b4,A.bi,A.bT],x.O)
D.fkT=new B.fY(A.A,0,6.283185307179586,A.x,D.dol,null,null)
D.d1W=w([A.ql,A.pe,A.y6,A.ir,A.ql],x.O)
D.fkU=new B.fY(A.A,0,6.283185307179586,A.x,D.d1W,null,null)
D.dof=w([A.aP,A.bK,A.aO,A.am,A.aP],x.O)
D.fkV=new B.fY(A.A,0,6.283185307179586,A.x,D.dof,null,null)
D.dwz=w([A.bx,A.ba,A.br,A.bT,A.bx],x.O)
D.fkX=new B.fY(A.A,0,6.283185307179586,A.x,D.dwz,null,null)
D.bjm=new B.u(1,0,1,0,A.q)
D.bol=new B.u(1,0,1,1,A.q)
D.blb=new B.u(1,0,0,1,A.q)
D.bh4=new B.u(1,1,0,1,A.q)
D.dsq=w([A.Mm,A.Z2,D.bjm,D.bol,D.blb,D.bh4,A.Mm],x.O)
D.fkY=new B.fY(A.A,0,6.283185307179586,A.x,D.dsq,null,null)
D.flc=new C.axu(2,"immersiveSticky")
D.fld=new C.axu(3,"edgeToEdge")
D.fle=new C.axu(4,"manual")
D.fnK=new B.H(!0,A.o8,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aUK=new B.H(!0,A.eU,null,null,null,null,12.5,A.V,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.foj=new B.H(!0,E.ny,null,null,null,null,13,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fr3=new B.H(!0,A.c,null,null,null,null,22,A.u,null,0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frd=new B.H(!0,A.bW,null,null,null,null,12.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frz=new B.H(!0,A.eL,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ft1=new B.H(!0,A.bK,null,null,null,null,13.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftc=new B.H(!0,A.jX,null,null,null,null,11,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftq=new B.t5(!0,A.JE,null,null,null,null,A.dD,8,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftT=new B.H(!0,A.c,null,null,null,null,8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fuB=new B.H(!0,A.jB,null,null,null,null,11.5,A.V,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fuZ=new B.H(!0,A.aD,null,null,null,null,12.5,A.V,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.etu=new B.j0(1,1,0.7568627450980392,0.027450980392156862)
D.fv2=new B.t5(!0,D.etu,null,null,null,null,A.dD,7,null,null,null,null,null,null,null,null,null,null,null,null)
D.ai5=new B.u(1,0.8392156862745098,0.7254901960784313,0.6039215686274509,A.q)
D.aVy=new B.H(!0,D.ai5,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fva=new B.H(!0,D.ajm,null,null,null,null,11.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvb=new B.H(!0,A.c,null,null,null,null,20,A.u,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aVA=new B.H(!0,A.c,null,null,null,null,null,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvP=new B.t5(!0,A.pI,null,null,null,null,A.dD,9,null,null,null,null,null,null,null,null,null,null,null,null)
D.fw5=new B.H(!0,null,null,null,null,null,20,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwD=new B.H(!0,A.c,null,null,null,null,16,A.H,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwF=new B.H(!0,D.ai5,null,null,null,null,14,null,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.KJ=new B.H(!0,A.aD,null,null,null,null,12.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxb=new B.H(!0,A.c4,null,null,null,null,11.5,A.V,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxl=new B.H(!0,A.bK,null,null,null,null,14,A.a8,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxp=new B.H(!0,A.bN,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxG=new B.H(!0,A.c,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.a5j,null,null,null)
D.fxJ=new B.H(!0,A.c0,null,null,null,null,null,A.V,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxL=new B.H(!0,A.c,null,null,null,null,30,A.u,null,5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fy_=new B.H(!0,A.c,null,null,null,null,6.5,A.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyb=new B.H(!0,A.dk,null,null,null,null,13,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyN=new B.H(!0,A.aS,null,null,null,null,null,A.a8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyX=new B.H(!0,A.c,null,null,null,null,13.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzc=new B.H(!0,A.ab,null,null,null,null,15,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aWc=new B.H(!0,A.c,null,null,null,null,14.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aWe=new B.H(!0,A.bW,null,null,null,null,11.5,A.a8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bu7=new B.u(0.7019607843137254,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.q)
D.fB1=new B.H(!0,D.bu7,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aWk=new B.H(!0,E.ny,null,null,null,null,16,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBw=new B.H(!0,A.bK,null,null,null,null,11,A.a8,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBz=new B.H(!0,N.lF,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fu7=new B.H(!0,A.w,null,null,null,null,8,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCP=new B.B("NEW",null,D.fu7,null,null,null,null,null,null,null,null,null)
D.fD6=new B.B("Hati ya Kuhowesha",null,A.fB,null,null,null,null,null,null,null,null,null)
D.fDz=new B.B("Session ended",null,null,null,null,null,null,null,null,null,null,null)
D.fDY=new B.B("Scrollable PDF on this slide",null,A.dg,null,null,null,null,null,null,null,null,null)
D.fEJ=new B.B("Big quote mark",null,A.jv,null,null,null,null,null,null,null,null,null)
D.fEL=new B.B("Move down",null,null,null,null,null,null,null,null,null,null,null)
D.fEX=new B.B("Duplicate",null,null,null,null,null,null,null,null,null,null,null)
D.fFp=new B.B("Edit window ended",null,null,null,null,null,null,null,null,null,null,null)
D.fFr=new B.B("How many slides?",null,A.fY,null,null,null,null,null,null,null,null,null)
D.fG_=new B.B("Transfer",null,A.cg,null,null,null,null,null,null,null,null,null)
D.fpK=new B.H(!0,A.c,null,null,null,null,12,A.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGl=new B.B("Luxury FX",null,D.fpK,null,null,null,null,null,null,null,null,null)
D.fGG=new B.B("Font",null,A.tC,null,null,null,null,null,null,null,null,null)
D.fGR=new B.B("Anza hati mpya?",null,null,null,null,null,null,null,null,null,null,null)
D.fGY=new B.B("Ghairi",null,null,null,null,null,null,null,null,null,null,null)
D.fAy=new B.H(!0,A.bK,null,null,null,null,12,A.V,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fH7=new B.B("Example  GA847",null,D.fAy,null,null,null,null,null,null,null,null,null)
D.fHx=new B.B("Design shapes",null,A.jv,null,null,null,null,null,null,null,null,null)
D.fHJ=new B.B("Your 4-hour window to edit this admin-shared document has ended. You can still view, print, or download it.",null,null,null,null,null,null,null,null,null,null,null)
D.fHO=new B.B("Non-stop (loop)",null,A.fY,null,null,null,null,null,null,null,null,null)
D.fI1=new B.B("Hati ya Kuhoweya",null,A.fB,null,null,null,null,null,null,null,null,null)
D.fIk=new B.B("Photo studio",null,A.fC,null,null,null,null,null,null,null,null,null)
D.fIO=new B.B("Add your picture",null,A.jN,null,null,null,null,null,null,null,null,null)
D.ftr=new B.H(!0,A.c,null,null,null,null,20,A.u,null,-0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fIP=new B.B("Enter document code",null,D.ftr,null,A.K,null,null,null,null,null,null,null)
D.fIQ=new B.B("Kiswahili",null,null,null,null,null,null,null,null,null,null,null)
D.fIV=new B.B("English",null,null,null,null,null,null,null,null,null,null,null)
D.fqS=new B.H(!0,E.ny,null,null,null,null,19,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJf=new B.B("Delete this book?",null,D.fqS,null,A.K,null,null,null,null,null,null,null)
D.fvE=new B.H(!0,E.ny,null,null,null,null,18,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKe=new B.B("Your library",null,D.fvE,null,null,null,null,null,null,null,null,null)
D.fKk=new B.B("Delete",null,A.aVr,null,null,null,null,null,null,null,null,null)
D.fKn=new B.B("Add a picture and the AI writes a whole newspaper page about NGMY around it: the headline, the story and the caption. It knows the app, the Civic Registry, the Advisors and KB PABLO QR, the CEO. Pick old or modern designs, then tell the AI what to change.",null,Ay.EG,null,null,null,null,null,null,null,null,null)
D.fKy=new B.B("Element flies in",null,A.aVE,null,null,null,null,null,null,null,null,null)
D.VS=new B.B("Hati mpya (chagua muundo)",null,null,null,null,null,null,null,null,null,null,null)
D.fKX=new B.B("Fungua / hariri hati",null,null,null,null,null,null,null,null,null,null,null)
D.fLj=new B.B("Cancel",null,E.aVO,null,null,null,null,null,null,null,null,null)
D.fLl=new B.B("The lines and circles that come with the design",null,A.hj,null,null,null,null,null,null,null,null,null)
D.fzl=new B.H(!0,A.hs,null,null,null,null,11,A.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fLN=new B.B("DOCUMENT CODE",null,D.fzl,null,null,null,null,null,null,null,null,null)
D.fMD=new B.B("Quotes",null,G.abn,null,null,null,null,null,null,null,null,null)
D.fsO=new B.H(!0,N.lF,null,null,null,null,null,A.V,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fMN=new B.B("Add a picture",null,D.fsO,null,null,null,null,null,null,null,null,null)
D.fMV=new B.B("Point at a NGMY Slides transfer QR, or tap search to enter the document code",null,A.Vw,null,A.K,null,null,null,null,null,null,null)
D.fMZ=new B.B("Look & feel",null,A.fY,null,null,null,null,null,null,null,null,null)
D.fN3=new B.B("Rings",null,A.hk,null,null,null,null,null,null,null,null,null)
D.fN9=new B.B("W",null,A.tC,null,null,null,null,null,null,null,null,null)
D.fNj=new B.B("Move up",null,null,null,null,null,null,null,null,null,null,null)
D.fND=new B.B("It goes behind your words. Then the photo studio opens: looks, light, colour, effects and crop.",null,A.VE,null,A.K,null,null,null,null,null,null,null)
D.fNF=new B.B("Write your book",null,A.cB,null,null,null,null,null,null,null,null,null)
D.fOp=new B.B("Add page",null,A.cg,null,null,null,null,null,null,null,null,null)
D.fOH=new B.B("Malipo ya Awamu ya Mahari",null,A.fB,null,null,null,null,null,null,null,null,null)
D.ftg=new B.H(!0,A.c,null,null,null,null,24,A.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fOW=new B.B("Create with AI",null,D.ftg,null,A.K,null,null,null,null,null,null,null)
D.fPr=new B.B("Apply look",null,A.hk,null,null,null,null,null,null,null,null,null)
D.ftY=new B.H(!0,A.ev,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fQe=new B.B("Type your presentation below",null,D.ftY,null,A.K,null,null,null,null,null,null,null)
D.fQh=new B.B("Tap the code to copy it. Share the code or the QR: the other phone types the code or scans the QR.",null,M.aWp,null,A.K,null,null,null,null,null,null,null)
D.fQj=new B.B("Keep it",null,A.cg,null,null,null,null,null,null,null,null,null)
D.foD=new B.H(!0,A.cn,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fQq=new B.B("Done",null,D.foD,null,null,null,null,null,null,null,null,null)
D.fQL=new B.B("Delete",null,A.nW,null,null,null,null,null,null,null,null,null)
D.fQW=new B.B("Hati ya Kiapo cha Uongozi",null,A.fB,null,null,null,null,null,null,null,null,null)
D.fs6=new B.H(!0,A.aS,null,null,null,null,13,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fRQ=new B.B("Write your idea in any language \u2014 the AI makes the slides.",null,D.fs6,null,A.K,null,null,null,null,null,null,null)
D.fSe=new B.B("Anza upya (hati mpya)",null,null,null,null,null,null,null,null,null,null,null)
D.fSl=new B.B("Layout",null,A.VJ,null,null,null,null,null,null,null,null,null)
D.fT1=new B.B("Print",null,A.cB,null,null,null,null,null,null,null,null,null)
D.fTa=new B.B("X",null,A.tC,null,null,null,null,null,null,null,null,null)
D.fTM=new B.B("Your logo goes on every slide and your pictures replace stock photos. The ring button also has the ending celebrations.",null,A3.xg,null,null,null,null,null,null,null,null,null)
D.fUk=new B.B("Use the whole picture",null,null,null,null,null,null,null,null,null,null,null)
D.fUy=new B.B("Hati ya Kuhowa",null,A.fB,null,null,null,null,null,null,null,null,null)
D.fUA=new B.B("Choose a class template",null,A.fB,null,null,null,null,null,null,null,null,null)
D.fUC=new B.B("Drag the picture to move it. Pinch or use the slider to zoom.",null,A.hj,null,null,null,null,null,null,null,null,null)
D.fUJ=new B.B("Download the newspaper picture",null,A.cB,null,null,null,null,null,null,null,null,null)
D.fUW=new B.B("Print view",null,null,null,null,null,null,null,null,null,null,null)
D.fV2=new B.B("Done",null,A.aWb,null,null,null,null,null,null,null,null,null)
D.fVd=new B.B("Ending celebration",null,A.di,null,null,null,null,null,null,null,null,null)
D.fVe=new B.B("Delete element",null,null,null,null,null,null,null,null,null,null,null)
D.fVt=new B.B("Plays after your last slide. Tap one to watch it and change its words or logo.",null,A3.tB,null,null,null,null,null,null,null,null,null)
D.fWt=new B.B("Export presentation",null,A.dg,null,null,null,null,null,null,null,null,null)
D.fWu=new B.B("What would you like to do?",null,D.aVy,null,null,null,null,null,null,null,null,null)
D.fWz=new B.B("Delete",null,A.cB,null,null,null,null,null,null,null,null,null)
D.fX5=new B.B("Your 4-hour marriage document session has ended. Pay again to keep editing.",null,null,null,null,null,null,null,null,null,null,null)
D.fX9=new B.B("Hati (Documents)",null,A.fB,null,null,null,null,null,null,null,null,null)
D.fXm=new B.B("Done",null,A.lw,null,null,null,null,null,null,null,null,null)
D.fAn=new B.H(!0,A.c,null,null,null,null,18,A.H,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fXq=new B.B("Delete presentation?",null,D.fAn,null,A.K,null,null,null,null,null,null,null)
D.fXK=new B.B("After the last slide it starts again from the first",null,A.hj,null,null,null,null,null,null,null,null,null)
D.fXW=new B.B("\ud83c\udf33",null,A.EF,null,A.K,null,null,null,null,null,null,null)
D.fYd=new B.B("Plays big after your last slide. Tap one to watch it, change the words or add your logo.",null,A.hj,null,null,null,null,null,null,null,null,null)
D.fYk=new B.B("Transfer document",null,A.nf,null,null,null,null,null,null,null,null,null)
D.fYv=new B.B("Add to the slides",null,A.fY,null,null,null,null,null,null,null,null,null)
D.fYS=new B.B("Endelea",null,null,null,null,null,null,null,null,null,null,null)
D.fZ6=new B.B("Make a book",null,I.aV3,null,null,null,null,null,null,null,null,null)
D.fZa=new B.B("Books",null,A.cB,null,null,null,null,null,null,null,null,null)
D.fsH=new B.H(!0,A.am,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fZc=new B.B("Keep this page open until it finishes.",null,D.fsH,null,null,null,null,null,null,null,null,null)
D.fZe=new B.B("Making your video",null,A.di,null,null,null,null,null,null,null,null,null)
D.fZj=new B.B("LANGUAGE",null,R.tD,null,null,null,null,null,null,null,null,null)
D.fZq=new B.B("Use this ending",null,A.cB,null,null,null,null,null,null,null,null,null)
D.fZy=new B.B("Scan presentation QR",null,null,null,null,null,null,null,null,null,null,null)
D.fZA=new B.B("Upload a different logo",null,A.cg,null,null,null,null,null,null,null,null,null)
D.fZR=new B.B("Delete from the database?",null,A.jN,null,null,null,null,null,null,null,null,null)
D.fZS=new B.B("H",null,A.tC,null,null,null,null,null,null,null,null,null)
D.h_h=new B.B("NGMY Quotes",null,A.di,null,null,null,null,null,null,null,null,null)
D.h_L=new B.B("Cover",null,D.aWk,null,null,null,null,null,null,null,null,null)
D.h_P=new B.B("Hati iliyopo ya jimbo hili itabadilishwa.",null,null,null,null,null,null,null,null,null,null,null)
D.h_Q=new B.B("Each page becomes its own slide you can present",null,A.hj,null,null,null,null,null,null,null,null,null)
D.h0c=new B.B("Y",null,A.tC,null,null,null,null,null,null,null,null,null)
D.h0o=new B.B("Crop the picture",null,A.lw,null,null,null,null,null,null,null,null,null)
D.h0v=new B.B("Edit text",null,A.KE,null,null,null,null,null,null,null,null,null)
D.h2P=B.dR("a9s")
D.EU=new C.ayQ(0,"none")
D.b_l=new C.ayQ(1,"zipCrypto")
D.b_m=new C.ayQ(2,"aes")
D.hrF=new F.Qm("","",null)
D.hsN=new C.bet(null)
D.htT=new C.a_Q(null)
D.hwS=new C.aep(null)
D.hwU=new C.aG3(null)
D.hzF=new C.a14(null)
D.hAq=new C.a1B(null)
D.hB2=new C.bwr(null)})();(function staticFields(){$.hta=null
$.htb=null
$.htc=null
$.htd=null
$.hao=B.wV("_lastQuoRemDigits")
$.hap=B.wV("_lastQuoRemUsed")
$.azc=B.wV("_lastRemUsed")
$.haq=B.wV("_lastRem_nsh")
$.qv=B.a([4294967295,2147483647,1073741823,536870911,268435455,134217727,67108863,33554431,16777215,8388607,4194303,2097151,1048575,524287,262143,131071,65535,32767,16383,8191,4095,2047,1023,511,255,127,63,31,15,7,3,1,0],x.t)
$.a8g=B.T(x.N,x.I)
$.h7P=!1
$.hya=B.T(B.as("la"),x.N)
$.hym=B.T(B.as("la"),x.E)
$.hwi=!1
$.bC5="q"
$.Rq=0
$.Dm=B.T(x.N,B.as("ai<Ac>"))
$.hwF=!1
$.hc8=!1
$.hDi=null
$.i7V=B.T(x.N,B.as("aB<n?>"))
$.Lg=""
$.jc=0
$.hq0=function(){var w=x.N
return B.T(w,w)}()
$.hq_=B.T(x.N,x.R)
$.hct=!1
$.ah6=B.T(x.N,x.E)
$.hdk=0
$.bmI=!1})();(function lazyInitializers(){var w=a.lazyFinal
w($,"iyr","DJ",()=>C.bbX(0))
w($,"iyp","a3S",()=>C.bbX(1))
w($,"iyq","hHb",()=>C.bbX(2))
w($,"iyo","hht",()=>$.a3S().vF(0))
w($,"iym","hH9",()=>C.bbX(1e4))
w($,"iyn","hHa",()=>B.F_(8))
w($,"iu7","hF4",()=>B.F_(0))
w($,"iuf","hF8",()=>B.F_(0))
w($,"iue","hF7",()=>B.c2l(0))
w($,"iCo","hJk",()=>{var v,u,t=x.N
t=B.T(t,t)
for(v=D.a6N.gdO(D.a6N),v=v.gae(v);v.C();){u=v.gR(v)
t.n(0,u.b,u.a)}return t})
w($,"iCQ","bGC",()=>{var v="Corporate",u=4280171146,t=4294967295,s=4280640491,r=4279080072,q="Modern",p="Bold",o=4278190080,n=4280472558,m=4279179050,l=4284773515,k=4287874557,j=4293548044,i=4279548070,h=x.O
return B.a([C.nb(new C.fT1(),v,"biz_plan_blue","Business Plan",B.a([B.b0(u),B.b0(t)],h)),C.nb(new C.fT2(),v,"exec_summary","Executive",B.a([B.b0(s),B.b0(t)],h)),C.nb(new C.fT3(),v,"teal_corporate","Teal Corp",B.a([B.b0(r),B.b0(4279310375)],h)),C.nb(new C.fTe(),q,"geometric_overlap","Geometric",B.a([B.b0(4279203438),B.b0(u)],h)),C.nb(new C.fTj(),p,"midnight_cyan","Midnight Cyan",B.a([B.b0(o),B.b0(n)],h)),C.nb(new C.fTk(),q,"diagonal_hero","Diagonal Hero",B.a([B.b0(m),B.b0(l)],h)),C.nb(new C.fTl(),v,"swot_grid","SWOT Grid",B.a([B.b0(u),B.b0(4278556265)],h)),C.nb(new C.fTm(),v,"layered_chevrons","Chevrons",B.a([B.b0(4280172719),B.b0(k)],h)),C.nb(new C.fTn(),q,"split_triangle","Split Panel",B.a([B.b0(s),B.b0(t)],h)),C.nb(new C.fTo(),v,"corporate_navy","Navy Pro",B.a([B.b0(4278982953),B.b0(4282090230)],h)),C.nb(new C.fTp(),p,"cyan_slash","Cyan Slash",B.a([B.b0(o),B.b0(4278630100)],h)),C.nb(new C.fT4(),p,"crimson_impact","Crimson",B.a([B.b0(4282714634),B.b0(4292617766)],h)),C.nb(new C.fT5(),q,"ocean_waves","Ocean Waves",B.a([B.b0(4278413729),B.b0(4286436348)],h)),C.nb(new C.fT6(),p,"mono_geometric","Mono Geo",B.a([B.b0(o),B.b0(n)],h)),C.nb(new C.fT7(),"Luxury","luxury_gold","Gold Luxe",B.a([B.b0(4280031511),B.b0(4293571336)],h)),C.nb(new C.fT8(),q,"hex_infographic","Hex Stack",B.a([B.b0(r),B.b0(4284410580)],h)),C.nb(new C.fT9(),q,"photo_banner","Photo Banner",B.a([B.b0(m),B.b0(4281908728)],h)),C.nb(new C.fTa(),v,"process_steps","Process",B.a([B.b0(s),B.b0(k)],h)),C.nb(new C.fTb(),"Minimal","grid_modern","Grid Modern",B.a([B.b0(l),B.b0(t)],h)),C.nb(new C.fTc(),"Luxury","platinum_frame","Platinum",B.a([B.b0(4282865001),B.b0(4293060848)],h)),C.nb(new C.fTd(),v,"agenda_cards","Agenda Cards",B.a([B.b0(u),B.b0(4292602622)],h)),C.nb(new C.fTf(),q,"headline_orange","Headline Orange",B.a([B.b0(j),B.b0(i)],h)),C.nb(new C.fTg(),q,"infographic_teal","Infographic",B.a([B.b0(r),B.b0(j)],h)),C.nb(new C.fTh(),q,"content_year","Year Feature",B.a([B.b0(j),B.b0(t)],h)),C.nb(new C.fTi(),q,"photo_cta","Photo CTA",B.a([B.b0(m),B.b0(i)],h))],B.as("O<Fs>"))})
w($,"iCr","hJm",()=>B.ag("^[A-Z]{2}\\d{3}$",!0,!1,!1,!1))})()};
(a=>{a["rk7yNUtXh7MHIhZreFtpuZssV2k="]=a.current})($__dart_deferred_initializers__);