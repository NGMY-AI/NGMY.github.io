((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,Ah,A5,Ai,A6,Aj,U,A7,Ak,Al,C={
ty(d,e){for(;;){if(!(d>0&&e[d-1]===0))break;--d}return d},
fR3(d,e,f,g){var w,v=new Uint16Array(g),u=f-e
for(w=0;w<u;++w)v[w]=d[e+w]
return v},
J7(d){var w
if(d===0)return $.CC()
if(d===1)return $.a1T()
if(d===2)return $.hkY()
if(Math.abs(d)<4294967296)return C.b8o(A.o.O(d))
w=C.hFz(d)
return w},
b8o(d){var w,v,u,t,s=d<0
if(s){if(d===-9223372036854776e3){w=new Uint16Array(4)
w[3]=32768
v=C.ty(4,w)
return new C.nL(v!==0,w,v)}d=-d}if(d<65536){w=new Uint16Array(1)
w[0]=d
v=C.ty(1,w)
return new C.nL(v===0?!1:s,w,v)}if(d<=4294967295){w=new Uint16Array(2)
w[0]=d&65535
w[1]=A.o.aB(d,16)
v=C.ty(2,w)
return new C.nL(v===0?!1:s,w,v)}v=A.o.an(A.o.gaj5(d)-1,16)+1
w=new Uint16Array(v)
for(u=0;d!==0;u=t){t=u+1
w[u]=d&65535
d=A.o.an(d,65536)}v=C.ty(v,w)
return new C.nL(v===0?!1:s,w,v)},
hFz(d){var w,v,u,t,s,r,q,p
if(isNaN(d)||d==1/0||d==-1/0)throw B.U(B.dI("Value must be finite: "+d,null))
d=Math.floor(d)
if(d===0)return $.CC()
w=$.hkX()
for(v=w.$flags|0,u=0;u<8;++u){v&2&&B.ak(w)
w[u]=0}v=J.l1(A.aG.gaP(w))
v.$flags&2&&B.ak(v,13)
v.setFloat64(0,d,!0)
v=w[7]
t=w[6]
s=(v<<4>>>0)+(t>>>4)-1075
r=new Uint16Array(4)
r[0]=(w[1]<<8>>>0)+w[0]
r[1]=(w[3]<<8>>>0)+w[2]
r[2]=(w[5]<<8>>>0)+w[4]
r[3]=t&15|16
q=new C.nL(!1,r,4)
if(s<0)p=q.mi(0,-s)
else p=s>0?q.dU(0,s):q
return p},
fR4(d,e,f,g){var w,v,u
if(e===0)return 0
if(f===0&&g===d)return e
for(w=e-1,v=g.$flags|0;w>=0;--w){u=d[w]
v&2&&B.ak(g)
g[w+f]=u}for(w=f-1;w>=0;--w){v&2&&B.ak(g)
g[w]=0}return e+f},
h7R(d,e,f,g){var w,v,u,t,s,r=A.o.an(f,16),q=A.o.F(f,16),p=16-q,o=A.o.dU(1,p)-1
for(w=e-1,v=g.$flags|0,u=0;w>=0;--w){t=d[w]
s=A.o.fA(t,p)
v&2&&B.ak(g)
g[w+r+1]=(s|u)>>>0
u=A.o.dU(t&o,q)}v&2&&B.ak(g)
g[r]=u},
h7M(d,e,f,g){var w,v,u,t,s=A.o.an(f,16)
if(A.o.F(f,16)===0)return C.fR4(d,e,s,g)
w=e+s+1
C.h7R(d,e,f,g)
for(v=g.$flags|0,u=s;--u,u>=0;){v&2&&B.ak(g)
g[u]=0}t=w-1
return g[t]===0?t:w},
hFC(d,e,f,g){var w,v,u,t,s=A.o.an(f,16),r=A.o.F(f,16),q=16-r,p=A.o.dU(1,r)-1,o=A.o.fA(d[s],r),n=e-s-1
for(w=g.$flags|0,v=0;v<n;++v){u=d[v+s+1]
t=A.o.dU(u&p,q)
w&2&&B.ak(g)
g[v]=(t|o)>>>0
o=A.o.fA(u,r)}w&2&&B.ak(g)
g[n]=o},
cCE(d,e,f,g){var w,v=e-g
if(v===0)for(w=e-1;w>=0;--w){v=d[w]-f[w]
if(v!==0)return v}return v},
hFA(d,e,f,g,h){var w,v,u
for(w=h.$flags|0,v=0,u=0;u<g;++u){v+=d[u]+f[u]
w&2&&B.ak(h)
h[u]=v&65535
v=v>>>16}for(u=g;u<e;++u){v+=d[u]
w&2&&B.ak(h)
h[u]=v&65535
v=v>>>16}w&2&&B.ak(h)
h[e]=v},
b8p(d,e,f,g,h){var w,v,u
for(w=h.$flags|0,v=0,u=0;u<g;++u){v+=d[u]-f[u]
w&2&&B.ak(h)
h[u]=v&65535
v=0-(A.o.aB(v,16)&1)}for(u=g;u<e;++u){v+=d[u]
w&2&&B.ak(h)
h[u]=v&65535
v=0-(A.o.aB(v,16)&1)}},
h7S(d,e,f,g,h,i){var w,v,u,t,s,r
if(d===0)return
for(w=g.$flags|0,v=0;--i,i>=0;h=s,f=u){u=f+1
t=d*e[f]+g[h]+v
s=h+1
w&2&&B.ak(g)
g[h]=t&65535
v=A.o.an(t,65536)}for(;v!==0;h=s){r=g[h]+v
s=h+1
w&2&&B.ak(g)
g[h]=r&65535
v=A.o.an(r,65536)}},
hFB(d,e,f){var w,v=e[f]
if(v===d)return 65535
w=A.o.e3((v<<16|e[f-1])>>>0,d)
if(w>65535)return 65535
return w},
nL:function nL(d,e,f){this.a=d
this.b=e
this.c=f},
cCF:function cCF(){},
cCG:function cCG(){},
cCH:function cCH(d,e){this.a=d
this.b=e},
cCI:function cCI(d){this.a=d},
aQ2:function aQ2(d,e){this.a=d
this.b=e},
fYO(d,e,f){var w=new C.R7(d,A.o.an(Date.now(),1000),e)
w.Q=f
return w},
R7:function R7(d,e,f){var _=this
_.a=d
_.b=420
_.e=e
_.as=_.Q=null
_.at=f},
a33:function a33(d,e){this.a=d
this.b=e},
bG0:function bG0(d){this.a=d
this.c=this.b=0},
hoa(){return new C.bEm()},
bEm:function bEm(){var _=this
_.ax=_.at=_.as=_.Q=_.z=_.y=_.x=_.w=_.r=_.f=_.e=_.d=_.c=_.b=_.a=$
_.ay=0
_.ch=-1
_.cx=_.CW=0
_.fr=_.dy=_.dx=_.db=_.cy=$
_.fx=0},
cuP:function cuP(d){var _=this
_.a=-1
_.r=_.f=0
_.x=d},
hFh(d,e,f){var w,v,u,t,s
if(d.gam(d))return new Uint8Array(0)
w=new Uint8Array(B.cr(d.gcTo(d)))
v=f*2+2
u=C.h5t(C.h5v(),64)
t=new C.ceR(u)
u=u.b
u===$&&B.c()
t.c=new Uint8Array(u)
t.a=new C.ceS(e,1000,v)
s=new Uint8Array(v)
return A.aG.dn(s,0,t.cGY(w,0,s,0))},
cuN:function cuN(d,e){this.c=d
this.d=e},
avV:function avV(d,e){this.a=d
this.b=e},
cuQ:function cuQ(d,e,f,g){var _=this
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
b75:function b75(){var _=this
_.as=_.Q=_.y=_.x=_.w=_.a=0
_.at=""
_.ch=_.ax=null},
cuO:function cuO(){this.a=$},
h7g(d,e){var w,v,u=d.length
if(u!==e.length)return!1
for(w=0,v=0;v<u;++v)w|=d[v]^e[v]
return w===0},
hnU(d,e){var w
d.$flags&2&&B.ak(d)
d[0]=e&255
d[1]=e>>>8&255
d[2]=e>>>16&255
d[3]=e>>>24&255
for(w=4;w<=15;++w)d[w]=0},
bCX:function bCX(d,e,f){var _=this
_.a=1
_.b=d
_.c=e
_.d=f
_.r=null
_.x=_.w=$},
fWz(d,e){e&=31
return(d&$.pX[e])<<e>>>0},
ni(d,e){e&=31
return(d>>>e|C.fWz(d,32-e))>>>0},
h5u(d){var w,v=new C.arD()
if(B.iF(d))v.aIV(d,null)
else{x.dw.a(d)
w=d.a
w===$&&B.c()
v.a=w
w=d.b
w===$&&B.c()
v.b=w}return v},
h5v(){var w=C.h5u(0),v=new Uint8Array(4),u=x.S
u=new C.ceT(w,v,A.DF,5,B.c2(5,0,!1,u),B.c2(80,0,!1,u))
u.lt(0)
return u},
h5t(d,e){var w=new C.ceP(d,e)
w.b=20
w.d=new Uint8Array(e)
w.e=new Uint8Array(e+20)
return w},
ceO:function ceO(){},
ceS:function ceS(d,e,f){this.a=d
this.b=e
this.c=f},
ceM:function ceM(){},
arC:function arC(d){this.a=d},
ceR:function ceR(d){this.a=$
this.b=d
this.c=$},
ceN:function ceN(){},
ceL:function ceL(){},
arD:function arD(){this.b=this.a=$},
ceQ:function ceQ(){},
ceT:function ceT(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=$
_.d=f
_.e=g
_.f=h
_.r=i
_.w=$},
ceP:function ceP(d,e){var _=this
_.a=d
_.b=$
_.c=e
_.e=_.d=$},
ceK:function ceK(){},
ceJ:function ceJ(d){var _=this
_.a=0
_.b=$
_.c=!1
_.d=d},
bM9:function bM9(){},
bMa:function bMa(d){this.a=d},
hIu(d){if(d<0.36363636363636365)return 7.5625*d*d
else if(d<0.7272727272727273){d-=0.5454545454545454
return 7.5625*d*d+0.75}else if(d<0.9090909090909091){d-=0.8181818181818182
return 7.5625*d*d+0.9375}d-=0.9545454545454546
return 7.5625*d*d+0.984375},
b8E:function b8E(){},
coM:function coM(){},
bN2:function bN2(d,e){this.a=d
this.b=!1
this.c=e},
bN3:function bN3(){},
hRj(d){var w,v,u=B.a([],x.s)
for(w=d.length,v=0;v<w;++v)u.push(d[v].u(0))
return u},
auz(d){var w=0,v=B.j(x.H),u
var $async$auz=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:u=x.H
w=d!==D.eRf?2:4
break
case 2:w=5
return B.b(A.k1.fV("SystemChrome.setEnabledSystemUIMode",d.a4(),u),$async$auz)
case 5:w=3
break
case 4:null.toString
w=6
return B.b(A.k1.fV("SystemChrome.setEnabledSystemUIOverlays",C.hRj(null),u),$async$auz)
case 6:case 3:return B.h(null,v)}})
return B.i($async$auz,v)},
auC:function auC(d,e){this.a=d
this.b=e},
a7F:function a7F(d){this.a=d},
fN2(d,e){return new C.aUq(e,d,null)},
aUq:function aUq(d,e,f){this.e=d
this.c=e
this.a=f},
azs:function azs(d,e,f,g,h){var _=this
_.ag=d
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
hTV(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p=new C.fnh(15,d,f,e,g,h),o=i*i,n=A.k.V(i/1.4142135623730951)
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
fnh:function fnh(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
amv(){var w=0,v=B.j(x.gw),u,t,s,r,q
var $async$amv=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(S.afY("ngmy_menu_lib_v1_zzslides_index",A.bG),$async$amv)
case 3:q=e
if(!q.a){u=null
w=1
break}t=q.b
s=t==null?null:J.q(t,"items")
if(x.j.b(s)){t=J.d8(s,x.f)
t=B.cD(t,new C.bXt(),t.$ti.k("J.E"),x.P)
r=B.B(t,B.a4(t).k("J.E"))}else r=B.a([],x.d)
A.d.b_(r,new C.bXu())
u=r
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$amv,v)},
amx(d){var w=0,v=B.j(x.S),u,t,s,r,q,p,o,n,m,l,k,j
var $async$amx=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.amv(),$async$amx)
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
l=new B.S(Date.now(),0,!1).a6().ac()
p=m.a
k=B.af("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(B.nh("ngmy_menu_lib_v1_zzslide_"+B.aJ(p,k,""),B.F(["deck",m.ae(),"savedAt",l],t,q),null),$async$amx)
case 7:if(!f){w=5
break}s.n(0,p,B.F(["id",p,"name",m.b,"slides",m.r.length,"savedAt",l],t,q));++o
case 5:d.length===r||(0,B.L)(d),++n
w=4
break
case 6:w=o>0?8:9
break
case 8:r=s.$ti.k("bc<2>")
s=B.B(new B.bc(s,r),r.k("J.E"))
w=10
return B.b(B.nh("ngmy_menu_lib_v1_zzslides_index",B.F(["items",s,"savedAt",new B.S(Date.now(),0,!1).a6().ac()],t,q),null),$async$amx)
case 10:if(!f){u=0
w=1
break}case 9:u=o
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$amx,v)},
bXv(d){return C.htB(d)},
htB(d){var w=0,v=B.j(x.af),u,t=2,s=[],r,q,p,o,n,m
var $async$bXv=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
o=B.af("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(S.afY("ngmy_menu_lib_v1_zzslide_"+B.aJ(d,o,""),A.hH),$async$bXv)
case 7:r=f
o=r.b
q=o==null?null:J.q(o,"deck")
if(!x.f.b(q)){u=null
w=1
break}o=C.Ve(B.a1(q,x.N,x.z))
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
return B.i($async$bXv,v)},
amw(d){var w=0,v=B.j(x.y),u,t,s,r
var $async$amw=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.amv(),$async$amw)
case 3:r=f
if(r==null){u=!1
w=1
break}J.nj(r,new C.bXw(d))
w=4
return B.b(B.nh("ngmy_menu_lib_v1_zzslides_index",B.F(["items",r,"savedAt",new B.S(Date.now(),0,!1).a6().ac()],x.N,x.z),null),$async$amw)
case 4:t=f
w=t?5:6
break
case 5:s=B.af("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(S.aO3("ngmy_menu_lib_v1_zzslide_"+B.aJ(d,s,"")),$async$amw)
case 7:case 6:u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$amw,v)},
bXt:function bXt(){},
bXu:function bXu(){},
bXw:function bXw(d){this.a=d},
i2M(d,e,f){return B.bV(A.K,null,new C.fD4(e,f,null),d,!0,!0,!0,null,!1,!1,x.H)},
fD4:function fD4(d,e,f){this.a=d
this.b=e
this.c=f},
a06:function a06(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aHQ:function aHQ(d){var _=this
_.d=d
_.e=null
_.f=!0
_.r=!1
_.w=0
_.x=null
_.y=!1
_.c=_.a=null},
f1r:function f1r(d,e){this.a=d
this.b=e},
f1v:function f1v(d){this.a=d},
f1w:function f1w(d){this.a=d},
f1x:function f1x(d,e,f){this.a=d
this.b=e
this.c=f},
f1s:function f1s(d){this.a=d},
f1t:function f1t(d){this.a=d},
f1u:function f1u(d,e){this.a=d
this.b=e},
f1m:function f1m(d){this.a=d},
f1k:function f1k(d){this.a=d},
f1l:function f1l(d){this.a=d},
f1n:function f1n(d){this.a=d},
f1o:function f1o(d){this.a=d},
f1B:function f1B(d,e){this.a=d
this.b=e},
f1A:function f1A(d,e){this.a=d
this.b=e},
f1q:function f1q(d,e,f){this.a=d
this.b=e
this.c=f},
f1p:function f1p(d,e,f){this.a=d
this.b=e
this.c=f},
f1y:function f1y(d,e){this.a=d
this.b=e},
f1z:function f1z(d,e){this.a=d
this.b=e},
f1E:function f1E(d){this.a=d},
f1F:function f1F(d,e){this.a=d
this.b=e},
f1D:function f1D(d,e){this.a=d
this.b=e},
f1C:function f1C(){},
haf(d){var w,v,u,t
if(d==null||d.length===0)return B.a([],x.k)
try{w=A.R.aH(0,d,null)
if(!x.j.b(w)){v=B.a([],x.k)
return v}v=J.d8(w,x.f)
v=B.cD(v,new C.f8E(),v.$ti.k("J.E"),x.ea)
u=B.a4(v).k("a2<J.E>")
v=B.B(new B.a2(v,new C.f8F(),u),u.k("J.E"))
return v}catch(t){v=B.a([],x.k)
return v}},
a14(d){return C.hVa(d)},
hVa(d){var w=0,v=B.j(x.gL),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$a14=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:n=B.V(x.N,x.ea)
m=new C.fpO(n)
t=4
j=m
i=C
w=7
return B.b(B.a1E("ngmy_books_v1_"+A.a.i(d.toLowerCase())),$async$a14)
case 7:j.$1(i.haf(f))
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
return B.b(B.az(),$async$a14)
case 12:r=f
p=A.a.i(d.toLowerCase())
m.$1(C.haf(B.aU(J.q(r.a,"ngmy_books_v1_"+p))))
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
o=p.k("a2<J.E>")
j=B
i=B
h=new B.bc(n,p)
g=C
w=13
return B.b(C.f8N(d),$async$a14)
case 13:p=j.B(new i.a2(h,new g.fpM(f),o),o.k("J.E"))
A.d.b_(p,new C.fpN())
u=p
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a14,v)},
agx(d,e){return C.i2r(d,e)},
i2r(d,e){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l
var $async$agx=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:n=J.b6(e,new C.fCz(),x.P)
n=B.B(n,n.$ti.k("aj.E"))
r=A.R.ao(n,null)
q=!1
t=4
w=7
return B.b(B.agp("ngmy_books_v1_"+A.a.i(d.toLowerCase()),r),$async$agx)
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
return B.b(B.az(),$async$agx)
case 12:p=g
w=13
return B.b(p.ar("String","ngmy_books_v1_"+A.a.i(d.toLowerCase()),r),$async$agx)
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
return B.i($async$agx,v)},
f8N(d){return C.hJT(d)},
hJT(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o
var $async$f8N=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.az(),$async$f8N)
case 7:r=f
q=r.rU("ngmy_books_deleted_v1_"+A.a.i(d.toLowerCase()))
if(q==null)q=A.T
q=B.ky(q,B.T(q).c)
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
return B.i($async$f8N,v)},
afm(d,e){return C.hTN(d,e)},
hTN(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m
var $async$afm=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$afm)
case 6:s=g
r=B.aX(x.N)
q=s.rU("ngmy_books_deleted_v1_"+A.a.i(d.toLowerCase()))
if(q!=null)J.h_(r,q)
J.cf(r,e)
p=r
r=A.a.i(d.toLowerCase())
q=p
q=B.B(q,B.a4(q).k("cm.E"))
w=7
return B.b(s.ar("StringList","ngmy_books_deleted_v1_"+r,q),$async$afm)
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
return B.b(C.a14(d),$async$afm)
case 8:n=g
J.nj(n,new C.fmY(e))
w=9
return B.b(C.agx(d,n),$async$afm)
case 9:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$afm,v)},
i2R(d,e){return B.a5(d,!1).c6(B.e6(new C.fDq(e),!0,null,x.H))},
hFE(d){var w=d.b
return A.a.i(w.a)==="My Book"&&A.d.d9(w.d,new C.cE0())},
oc:function oc(d,e,f){this.a=d
this.b=e
this.c=f},
f8E:function f8E(){},
f8F:function f8F(){},
fpO:function fpO(d){this.a=d},
fpM:function fpM(d){this.a=d},
fpN:function fpN(){},
fCz:function fCz(){},
fmY:function fmY(d){this.a=d},
fDq:function fDq(d){this.a=d},
XU:function XU(d,e){this.c=d
this.a=e},
aws:function aws(d,e){var _=this
_.d=d
_.e=!0
_.f=e
_.c=_.a=null},
cE0:function cE0(){},
cE2:function cE2(d,e){this.a=d
this.b=e},
cE5:function cE5(d){this.a=d},
cE6:function cE6(d){this.a=d},
cE4:function cE4(){},
cE7:function cE7(d,e){this.a=d
this.b=e},
cE3:function cE3(d){this.a=d},
cE8:function cE8(){},
cE1:function cE1(d,e){this.a=d
this.b=e},
cE9:function cE9(){},
cDX:function cDX(d){this.a=d},
cDV:function cDV(d){this.a=d},
cDW:function cDW(d){this.a=d},
cDY:function cDY(d,e){this.a=d
this.b=e},
cDU:function cDU(d){this.a=d},
cDT:function cDT(d){this.a=d},
cDR:function cDR(d,e){this.a=d
this.b=e},
cDS:function cDS(d){this.a=d},
cE_:function cE_(){},
cDZ:function cDZ(d){this.a=d},
cDQ:function cDQ(d,e){this.a=d
this.b=e},
cDP:function cDP(d,e){this.a=d
this.b=e},
cDO:function cDO(d,e){this.a=d
this.b=e},
cEa:function cEa(d){this.a=d},
XS:function XS(d,e,f){this.c=d
this.d=e
this.a=f},
aDK:function aDK(d,e,f){this.a=d
this.b=e
this.c=f},
awo:function awo(d){var _=this
_.r=_.f=_.e=_.d=$
_.w=d
_.x=null
_.y=!1
_.c=_.a=null},
cDh:function cDh(d){this.a=d},
cDg:function cDg(d){this.a=d},
cDj:function cDj(d,e,f){this.a=d
this.b=e
this.c=f},
cDr:function cDr(){},
cDs:function cDs(d){this.a=d},
cDk:function cDk(d,e,f){this.a=d
this.b=e
this.c=f},
cDi:function cDi(d,e){this.a=d
this.b=e},
cDm:function cDm(d,e){this.a=d
this.b=e},
cDn:function cDn(d,e){this.a=d
this.b=e},
cDo:function cDo(d,e){this.a=d
this.b=e},
cDl:function cDl(d){this.a=d},
cDq:function cDq(d){this.a=d},
cDp:function cDp(d,e){this.a=d
this.b=e},
cDx:function cDx(d){this.a=d},
cDt:function cDt(d,e){this.a=d
this.b=e},
cDu:function cDu(d,e){this.a=d
this.b=e},
cDv:function cDv(d,e){this.a=d
this.b=e},
cDw:function cDw(d,e){this.a=d
this.b=e},
awq:function awq(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
hXv(){var w,v,u,t,s=!1
try{u=document
if(u.fullscreenElement==null){w=u.documentElement
if(w!=null){v=w.requestFullscreen()
if(s&&v!=null)B.eg(v,x.cK).bz(new C.fuk(),x.H).eU(new C.ful())}}else if(s)C.hbJ()}catch(t){}},
hbJ(){var w,v,u
try{w=window.screen.orientation
if(w==null)return
v=w.lock("landscape")
if(v!=null)B.eg(v,x.cK).eU(new C.fd2())}catch(u){}},
hXy(){var w,v,u
try{w=window.screen.orientation
if(w!=null)w.unlock()}catch(v){}try{u=document
if(u.fullscreenElement!=null)u.webkitExitFullscreen()}catch(v){}},
fuk:function fuk(){},
ful:function ful(){},
fd2:function fd2(){},
hgh(d){var w="marriage_field_",v=d.db
if(!A.a.a0(v,w))return null
return A.d.gK(A.a.e9(v,w,"").split(":"))},
hge(d){var w=d.db
if(!A.a.a0(w,"marriage_sign_"))return null
if(A.a.a0(w,"marriage_sign_placed_"))return null
if(d.b===D.kS)return null
return A.a.b0(w,14)},
fVi(d){var w
if(d.b!==D.kS)return null
w=d.db
if(!A.a.a0(w,"marriage_sign_placed_"))return null
return A.a.b0(w,21)},
hXY(d){if(d==="hati_kuhowa")return"hati_kuhoweya"
if(d==="hati_kuhoweya")return"hati_kuhowa"
return""},
hgi(d){if(d==="hati_kuhowa")return"Hati ya Kuhoweya"
if(d==="hati_kuhoweya")return"Hati ya Kuhowa"
return"partner document"},
hXT(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=B.af("\\s+",!0,!1,!1,!1),f=A.a.i(B.aJ(d,g," "))
g=B.af("\\s+",!0,!1,!1,!1)
w=A.a.i(B.aJ(e,g," "))
g=f.length
if(g===0||w.length===0){g=x.N
return B.V(g,g)}v=B.af("\\[[^\\]]+\\]",!0,!1,!1,!1)
u=v.kR(0,f)
t=x.N
u=B.cD(u,new C.fvj(),B.a4(u).k("J.E"),t)
s=B.B(u,B.a4(u).k("J.E"))
if(s.length===0)return B.V(t,t)
for(u=v.kR(0,f),u=new B.J6(u.a,u.b,u.c),r=x.cz,q=0,p="^";u.C();){o=u.d
n=(o==null?r.a(o):o).b
m=n.index
p=(m>q?p+B.QO(A.a.ap(f,q,m)):p)+"(.*?)"
q=m+n[0].length}u=(q<g?p+B.QO(A.a.b0(f,q)):p)+"\\.?$"
l=B.af(u.charCodeAt(0)==0?u:u,!1,!1,!1,!1).cD(w)
if(l==null)return B.V(t,t)
k=B.V(t,t)
for(g=l.b,j=0;j<s.length;j=i){i=j+1
u=g[i]
h=A.a.i(u==null?"":u)
if(h.length===0)continue
k.n(0,s[j],h)}return k},
hXR(d,e){var w,v,u,t,s,r=B.a4(e).k("cz<1>"),q=B.B(new B.cz(e,r),r.k("J.E"))
A.d.b_(q,new C.fvi())
for(r=q.length,w=d,v=0;v<q.length;q.length===r||(0,B.L)(q),++v){u=q[v]
t=e.h(0,u)
s=t==null?null:A.a.i(t)
if(s==null)s=""
if(s.length===0)continue
if(A.a.a0(s,"[")&&A.a.cb(s,"]"))continue
w=B.aP1(w,u,s,0)}return w},
hXV(d,e){var w,v,u,t=d==="hati_kuhowa"?D.a2Y:$.hmY(),s=x.N,r=B.V(s,s)
for(s=t.gdK(t),s=s.gaf(s);s.C();){w=s.gU(s)
v=e.h(0,w.a)
u=v==null?null:A.a.i(v)
if(u==null)u=""
if(u.length===0)continue
if(A.a.a0(u,"[")&&A.a.cb(u,"]"))continue
r.n(0,w.b,u)}return r},
hgf(d){if(d==="hati_kuhowa")return y.O
if(d==="hati_kuhoweya")return y.f
return""},
f9G(d,e){var w,v,u,t,s,r,q
for(w=d.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u)for(t=w[u].z,s=t.length,r=0;r<t.length;t.length===s||(0,B.L)(t),++r){q=t[r]
if(C.hgh(q)===e)return q}return null},
hXW(d){var w,v=A.a.i(d.c),u=d.w
if(u==="hati_kuhowa")w="hati_kuhowa_"
else w=u==="hati_kuhoweya"?"hati_kuhoweya_":""
u=w.length
if(u!==0&&A.a.a0(v,w))return A.a.b0(v,u)
return A.d.gK(D.Gk).a},
hXX(b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0="utangulizi",b1=b6.w,b2=b1==null?"":b1,b3=b5.w,b4=b3==null?"":b3
if(b1==="hati_kuhowa"||b1==="hati_kuhoweya")w=!(b3==="hati_kuhowa"||b3==="hati_kuhoweya")
else w=!0
if(w)return new B.adh(0,0,0)
if(b2.length===0||b4.length===0||b2===b4)return new B.adh(0,0,0)
v=C.f9G(b6,b0)
u=C.f9G(b5,b0)
t=0
if(v!=null&&u!=null){s=C.hXV(b2,C.hXT(C.hgf(b2),v.r))
if(s.a!==0){u.r=C.hXR(C.hgf(b4),s)
t=s.a}}r=B.aX(x.N)
for(w=b6.r,q=w.length,p=0;p<w.length;w.length===q||(0,B.L)(w),++p)for(o=w[p].z,n=o.length,m=0;m<o.length;o.length===n||(0,B.L)(o),++m){l=C.hgh(o[m])
if(l==null||l==="utangulizi")continue
r.L(0,l)}for(q=B.eb(r,r.r,r.$ti.c),o=q.$ti.c,k=0;q.C();){n=q.d
if(n==null)n=o.a(n)
j=C.f9G(b6,n)
i=C.f9G(b5,n)
if(j==null||i==null)continue
h=j.r
if(A.a.a0(n,"witness_")){g=A.a.i(h)
n=g.length===0||g==="[Jina la Shahidi]"}else n=!1
if(n)continue
if(A.a.i(h).length===0)continue
i.r=h;++k}q=b5.r
f=q.length===0?null:A.d.gK(q)
e=0
if(f!=null)for(q=w.length,p=0;p<w.length;w.length===q||(0,B.L)(w),++p)for(o=w[p].z,n=o.length,m=0;m<o.length;o.length===n||(0,B.L)(o),++m){d=o[m]
a0=C.fVi(d)
if(a0==null)continue
a1=d.at
if(A.a.i(a1==null?"":a1).length===0)continue
a2=d.c
a3=d.d
a4=d.e
a5=d.f
for(a1=f.z,a6=a1.length,a7=0;a7<a1.length;a1.length===a6||(0,B.L)(a1),++a7){a8=a1[a7]
if(C.hge(a8)===a0||C.fVi(a8)===a0){a2=a8.c
a3=a8.d
a4=a8.e
a5=a8.f
break}}a1=f.z
a1.$flags&1&&B.ak(a1,16)
A.d.Qm(a1,new C.fvp(a0),!0)
a1=f.z
a6=Date.now()
a9=$.iX
$.iX=a9+1
A.d.L(a1,new C.eI(""+1000*a6+"_"+a9,D.kS,a2,a3,a4,a5,"",24,A.a4,A.bl,A.aD,4279310375,A.bg,d.at,D.be,4280640491,4280172719,2,0,!1,"marriage_sign_placed_"+a0,0,D.cg,0,"","","","","",!1,0));++e}b5.f=new B.S(Date.now(),0,!1)
return new B.adh(k,t,e)},
hXS(d){var w=C.hXW(d)
if(d.w==="hati_kuhowa")return C.hfC("",w)
return C.hfB("",w)},
fvj:function fvj(){},
fvi:function fvi(){},
fvp:function fvp(d){this.a=d},
hbs(){var w=new B.S(Date.now(),0,!1),v=new C.fc5()
return B.t(v.$1(B.bQ(w)))+"/"+B.t(v.$1(B.bG(w)))+"/"+B.by(w)},
fVq(d){var w=d.at,v=A.a.i(w==null?"":w)
w=d.db
return(w==="__kiapo_video__"||A.a.a0(w,"__kiapo_video___"))&&v.length!==0},
fwh(d){var w,v,u,t,s,r,q=d.ax
if(A.a.i(q==null?"":q).length!==0)return!0
for(q=d.r,w=q.length,v=0;v<w;++v)for(u=q[v].z,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===D.kS&&A.a.a0(r.db,"marriage_sign_placed_rais"))return!0}return!1},
hgv(d){var w,v=d.ax,u=A.a.i(v==null?"":v)
if(u.length===0)return!C.fwh(d)
w=B.bi(u)
if(w==null)return!C.fwh(d)
return new B.S(Date.now(),0,!1).a6().cY(w.a6().bP(18e9))},
hYD(d){var w=d.ax
if(A.a.i(w==null?"":w).length!==0)return
d.ax=new B.S(Date.now(),0,!1).a6().ac()},
hxC(d){return A.a.i(d).toLowerCase()},
aoE(d){return C.hxE(d)},
hxE(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o,n,m
var $async$aoE=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.az(),$async$aoE)
case 7:r=f
p=r.rU("ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase())
q=p==null?A.T:p
o=q
o=new B.K(o,C.i18(),B.T(o).k("K<1,n>")).c_(0,new C.c72())
o=B.da(o,o.$ti.k("J.E"))
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
return B.i($async$aoE,v)},
aoD(d,e){return C.hxD(d,e)},
hxD(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n
var $async$aoD=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:o=A.a.i(e).toLowerCase()
if(o.length===0||A.a.i(d).length===0){w=1
break}w=3
return B.b(C.aoE(d),$async$aoD)
case 3:r=g
if(!J.cf(r,o)){w=1
break}t=5
w=8
return B.b(B.az(),$async$aoD)
case 8:q=g
w=9
return B.b(q.ar("StringList","ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase(),J.q5(r)),$async$aoD)
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
return B.i($async$aoD,v)},
aoF(d,e){return C.hxF(d,e)},
hxF(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n
var $async$aoF=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:o=A.a.i(e).toLowerCase()
if(o.length===0||A.a.i(d).length===0){w=1
break}w=3
return B.b(C.aoE(d),$async$aoF)
case 3:r=g
if(!J.hC(r,o)){w=1
break}t=5
w=8
return B.b(B.az(),$async$aoF)
case 8:q=g
w=9
return B.b(q.ar("StringList","ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase(),J.q5(r)),$async$aoF)
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
return B.i($async$aoF,v)},
Uw(a5){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$Uw=B.e(function(a6,a7){if(a6===1){s.push(a7)
w=t}for(;;)switch(w){case 0:if($.fOx&&!a5){w=1
break}t=4
w=7
return B.b(B.az(),$async$Uw)
case 7:r=a7
q=B.aU(J.q(r.a,"ngmy_civic_hati_kiapo_uongozi_v1"))
if(q!=null&&A.a.i(q).length!==0){p=A.R.aH(0,q,null)
f=x.f
if(f.b(p)){e=x.N
o=B.V(e,x.I)
for(d=J.js(p),d=d.gaf(d),a0=x.z;d.C();){n=d.gU(d)
if(f.b(n.b))J.aG(o,J.k(n.a),C.Ve(B.a1(f.a(n.b),e,a0)))}$.a6u=o}}t=2
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
return B.b(B.c1(),$async$Uw)
case 12:case 11:w=a7?8:9
break
case 8:t=14
w=17
return B.b(B.tL("civic_hati_kiapo_uongozi",null,A.ed),$async$Uw)
case 17:l=a7
w=l!=null&&x.f.b(J.q(l,"byState"))?18:19
break
case 18:o=x.N
k=B.V(o,x.I)
for(f=x.f,e=J.js(f.a(J.q(l,"byState"))),e=e.gaf(e),d=x.z;e.C();){j=e.gU(e)
if(!f.b(j.b))continue
J.aG(k,J.k(j.a),C.Ve(B.a1(f.a(j.b),o,d)))}for(o=k,o=new B.cJ(o,B.a4(o).k("cJ<1,2>")).gaf(0);o.C();){f=o.d
f.toString
i=f
h=$.a6u.h(0,i.a)
if(h!=null){f=i.b.f
e=h.f
d=f.a
if(d>=e.gbo())f=d===e.gbo()&&f.b<e.gcw()
else f=!0
f=!f}else f=!0
if(f)$.a6u.n(0,i.a,i.b)}w=20
return B.b(C.aoG(),$async$Uw)
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
case 16:case 9:$.fOx=!0
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Uw,v)},
aoG(){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m,l
var $async$aoG=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$aoG)
case 6:s=e
r=B.V(x.N,x.P)
for(o=$.a6u,o=new B.cJ(o,B.a4(o).k("cJ<1,2>")).gaf(0);o.C();){n=o.d
n.toString
q=n
J.aG(r,q.a,q.b.ae())}w=7
return B.b(s.ar("String","ngmy_civic_hati_kiapo_uongozi_v1",A.R.ao(r,null)),$async$aoG)
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
return B.i($async$aoG,v)},
aYS(d){var w=0,v=B.j(x.af),u,t,s,r
var $async$aYS=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.Uw(!1),$async$aYS)
case 3:t=A.a.i(d).toLowerCase()
if(t.length===0){u=null
w=1
break}s=$.a6u.h(0,t)
r=s==null?null:s.hC()
if(r==null){u=null
w=1
break}u=C.bAt(r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aYS,v)},
a6v(a1){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$a6v=B.e(function(a2,a3){if(a2===1){s.push(a3)
w=t}for(;;)switch(w){case 0:e=a1.x
d=A.a.i(A.a.i(e==null?"":e)).toLowerCase()
if(d.length===0){u=!1
w=1
break}a1.w="hati_kiapo_uongozi"
a1.f=new B.S(Date.now(),0,!1)
o=a1.hC()
for(e=o.r,n=e.length,m=0;m<e.length;e.length===n||(0,B.L)(e),++m)for(l=e[m].z,k=l.length,j=0;j<k;++j){i=l[j]
h=i.at
g=A.a.i(h==null?"":h)
h=i.db
if((h==="__kiapo_video__"||A.a.a0(h,"__kiapo_video___"))&&A.a.a0(g,"data:"))i.at=null}$.a6u.n(0,d,o)
$.fOx=!0
w=3
return B.b(C.aoG(),$async$a6v)
case 3:w=4
return B.b(B.c1(),$async$a6v)
case 4:if(!a3){u=!1
w=1
break}t=6
e=x.N
r=B.V(e,x.P)
for(n=$.a6u,n=new B.cJ(n,B.a4(n).k("cJ<1,2>")).gaf(0);n.C();){l=n.d
l.toString
q=l
J.aG(r,q.a,q.b.ae())}w=9
return B.b(B.nh("civic_hati_kiapo_uongozi",B.F(["byState",r,"updatedAt",new B.S(Date.now(),0,!1).a6().ac()],e,x.z),null),$async$a6v)
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
return B.i($async$a6v,v)},
aoH(d){var w=0,v=B.j(x.T),u,t,s
var $async$aoH=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(new B.hW().a4P(A.eG),$async$aoH)
case 3:s=f
if(s==null){u=null
w=1
break}w=4
return B.b(s.ff(),$async$aoH)
case 4:t=f
if(t.length===0){u=null
w=1
break}w=5
return B.b(C.aYR(t,d),$async$aoH)
case 5:u=f
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aoH,v)},
aYR(d,e){return C.hxG(d,e)},
hxG(d,e){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$aYR=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.c1(),$async$aYR)
case 7:if(!g){u=null
w=1
break}n=A.a.i(e)
m=B.af("[^a-z0-9]+",!0,!1,!1,!1)
r=B.aJ(n.toLowerCase(),m,"_")
q="civic_kiapo/"+B.t(r)+"/"+1000*Date.now()+".mp4"
n=$.eV().b
n===$&&B.c()
n=n.at
n===$&&B.c()
p=n.i5("media")
w=8
return B.b(p.wE(q,new Uint8Array(B.cr(d)),D.bwJ),$async$aYR)
case 8:n=p.Cf(q)
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
return B.i($async$aYR,v)},
JZ(d,e,f,g,h,i,j,k,l,m,n){var w=C.cC()
return C.en(e,!1,f,A.aD,k.length===0?"marriage_locked":"marriage_locked_"+k,4280640491,g,h,i,"",j,w,null,"","",0,!1,"",0,D.be,4280172719,2,d,0,0,"",D.cg,D.cQ,l,m,n)},
fbl(d,e,f,g,h,i,j,k,l){var w=C.cC()
return C.en(A.bg,!1,4279310375,A.aD,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bl,A.a4,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.cg,D.f_,j,k,l)},
fSx(d,e,f,g,h,i,j,k){var w=C.cC(),v=A.k.D(i*0.0017,0.02,0.06)
return C.en(h,!1,j,A.aD,"marriage_field_"+d+":"+A.k.aa(g,3),4280640491,i,A.cD,A.O,"",v,w,null,"","",0,!1,"",0,D.be,4280172719,2,k,0,0,"",D.cg,D.cQ,g,e,f)},
faU(d,e,f,g){return C.fbl(0,0.002,D.fq,g,0.8,"ul_"+B.t(d)+"_"+B.t(e),f,d,e+0.002)},
fSy(d,e,f,g,h,i,j,k){var w=C.cC()
return C.en(A.q9,!1,j,A.aD,"marriage_field_"+d+":"+A.k.aa(g,3),4280640491,i,A.bl,A.a4,"",h,w,null,"","",0,!1,"",0,D.be,4280172719,2,k,0,0,"",D.cg,D.cQ,g,e,f)},
hbr(d){var w="marriage_field_",v=d.db
if(!A.a.a0(v,w))return null
return A.d.gK(A.a.e9(v,w,"").split(":"))},
bAt(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4="hati_kiapo_uongozi",a5="__kiapo_video___"
if(a6.w!==a4)return a6
w=a6.x
v=w==null
u=A.a.i(v?"":w)
t=a6.r
s=t.length===0?a3:A.d.gK(t)
t=x.N
r=B.V(t,t)
q=a3
p=a3
if(s!=null)for(t=s.z,o=t.length,n=0;n<t.length;t.length===o||(0,B.L)(t),++n){m=t[n]
l=C.hbr(m)
if(l!=null&&A.a.i(m.r).length!==0)r.n(0,l,m.r)
k=m.at
j=A.a.i(k==null?"":k)
i=m.db
if((i==="__kiapo_video__"||A.a.a0(i,a5))&&j.length!==0)q=k
if(m.b===D.kS&&A.a.a0(i,"marriage_sign_placed_rais"))p=m.hC()}h=C.fUX(u)
t=a6.b
o=h.c
i=h.d
if(v)w=u
v=a6.y
g=a6.z
f=a6.Q
e=a6.as
d=a6.at
a0=C.Bc(f,a3,a3,a3,i,5,!1,a4,a3,a3,a3,a3,a6.a,a6.ax,!1,w,t,d,e,h.r,o,v,g,a6.f)
a1=A.d.gK(a0.r)
for(w=a1.z,v=w.length,t=q!=null,n=0;n<w.length;w.length===v||(0,B.L)(w),++n){m=w[n]
l=C.hbr(m)
if(l!=null&&r.ah(0,l)){o=r.h(0,l)
o.toString
m.r=o}o=m.db
if((o==="__kiapo_video__"||A.a.a0(o,a5))&&t)m.at=q}if(p!=null){a2={}
a2.a=null
for(w=a1.z,v=w.length,n=0;n<v;++n){m=w[n]
t=m.db
if(A.a.a0(t,"marriage_sign_")&&!A.a.a0(t,"marriage_sign_placed_")&&m.b!==D.kS&&A.a.cb(t,"rais")){a2.a=m
break}}w=a2.a
if(w!=null){p.c=w.c
p.d=w.d
p.e=w.e
p.f=w.f
A.d.bm(a1.z,new C.fui(a2))}else A.d.bm(a1.z,new C.fuj())
A.d.L(a1.z,p)}w=a0.ax
if(A.a.i(w==null?"":w).length===0&&C.fwh(a0))a0.ax=a6.f.a6().ac()
return a0},
fUX(d){var w,v,u="Hati ya Kiapo cha Uongozi",t=null,s=4279310375,r=4280640491,q=4280172719,p=4279378237,o=4290283019,n=4293056712,m=C.fx4(D.a3Y),l=C.cC(),k=x.u,j=B.a([C.en(A.bg,!1,s,A.aD,"marriage_locked_bg",r,24,A.bl,A.a4,"",1,C.cC(),m,"","",0,!1,"",0,D.be,q,2,"",0,0,"",D.cg,D.lk,1,0,0)],k),i=B.a([],k)
i.push(C.JZ("NGMY",A.L,236069181,52,A.bl,A.u,0.08,"watermark",0.45,-0.08,0.02))
i.push(C.JZ("TAREHE:",A.bg,o,16,A.bl,A.H,A.k.D(0.0272,0.02,0.06),"tarehe_lbl",0.1,0.7,0.026))
i.push(C.fSx("tarehe",0.8059999999999999,0.026,0.18,A.bg,16,p,C.hbs()))
i.push(C.faU(0.8099999999999999,0.026+A.k.D(0.0272,0.02,0.06)*0.8,0.12,o))
i.push(C.JZ("HATI YA KIAPO CHA UONGOZI",A.L,p,26,A.bl,A.u,0.048,"title",0.83,0.085,0.055))
i.push(C.JZ("Kiapo cha Rais \xb7 Presidential Oath of Leadership",A.L,o,11,A.cD,A.a4,0.024,"subtitle",0.83,0.085,0.1))
i.push(C.fbl(0,0.002,D.fq,o,1.6,"title_rule",0.5312,0.2344,0.128))
i.push(C.fSy("body_p1",0.085,0.145,0.83,0.105,12,p,"Mimi [Jina Kamili la Rais], nikiwa Rais wa jamii yetu ya Kikongo, ninasimama mbele ya wanajamii wote kuapa kwamba nitawaongoza kwa haki, amani, na heshima kubwa, huku nikihakikisha tunashirikiana kwa pamoja kujenga jamii yetu na kuchangia maendeleo kwa njia bora na ya kistaarabu."))
i.push(C.fSy("body_p2",0.085,0.255,0.83,0.092,12,p,"Ninajwika jukumu kamili la kusimamia rasilimali na fedha za wananchi kwa uaminifu mkubwa. Endapo itatokea kiasi chochote cha fedha cha mwanachama yeyote hakikurekodiwa vizuri, au fedha ya jumuiya ikipotea bila maelezo, nitawajibika kulipa mara tatu (triple) ya kiasi kilichopotea."))
i.push(C.fSy("body_p3",0.085,0.352,0.83,0.095,12,p,"Kama nikishindwa kulipa au nikakataa kufanya hivyo, wanajamii wote wanaruhusiwa na wako huru kuchukua hatua za kisheria kwenda kuripoti kwa maofisa wa serikali (state officers) au polisi, au kumfungulia mashitaka mahakamani, na niko tayari kukabiliwa na sheria hizo bila pingamizi."))
i.push(C.fbl(268435456,0.175,D.be,o,1.6,"video_frame",0.83,0.085,0.46))
i.push(C.JZ("VIDEO YA KIAPO",A.bg,o,10,A.bl,A.H,0.02,"video_lbl",0.7899999999999999,0.10500000000000001,0.468))
i.push(C.en(A.bg,!1,s,A.aD,"__kiapo_video__",r,24,A.bl,A.a4,"",0.131,C.cC(),t,"","",0,!1,"",0,D.be,q,2,"",0,0,"",D.cg,D.lk,0.77,0.115,0.492))
i.push(C.JZ("Rais Anayeapa:",A.bg,p,15,A.bl,A.u,0.028,"rais_hdr",0.83,0.085,0.655))
i.push(C.JZ("Jina:",A.bg,p,13,A.bl,A.O,0.026,"jina_lbl",0.1,0.085,0.6930000000000001))
i.push(C.fSx("rais_jina",0.195,0.6930000000000001,0.62,A.bg,13,p,""))
i.push(C.faU(0.195,0.7130000000000001,0.62,n))
i.push(C.JZ("Sahihi:",A.bg,p,13,A.bl,A.O,0.026,"sahihi_lbl",0.12,0.085,0.74))
i.push(C.en(A.bg,!1,s,A.aD,"marriage_sign_rais",0,24,A.bl,A.a4,"",0.07,C.cC(),t,"","",0,!1,"",0,D.be,0,2,"",0,0,"",D.cg,D.f_,0.38,0.21500000000000002,0.73))
i.push(C.faU(0.21500000000000002,0.795,0.38,n))
i.push(C.JZ("Tarehe:",A.bg,p,13,A.bl,A.O,0.026,"tarehe2_lbl",0.12,0.625,0.74))
i.push(C.fSx("rais_tarehe",0.745,0.74,0.2,A.bg,12,p,C.hbs()))
i.push(C.faU(0.745,0.76,0.2,n))
w=A.a.i(d)
if(w.length!==0)A.d.v(i,B.a([C.fbl(0,0.032,D.be,o,1,"state_box",0.72,0.14,0.875),C.JZ("EMO 'YA M'MBONDO "+w,A.L,p,14,A.bl,A.O,0.026000000000000002,"state_text",0.72,0.14,0.878)],k))
A.d.v(j,i)
v=C.rh(4294967035,t,0,0,j,l,D.pZ,"","",u,D.dd)
return C.Bc(t,t,t,t,D.o2,5,!1,"hati_kiapo_uongozi",t,t,t,t,C.cC(),t,!1,w,u,t,t,B.a([v],x.g),"hati_kiapo_elegant_navy",t,!1,t)},
afy(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$afy=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:p=A.a.i(i)
if(p.length===0){if(f.e!=null)f.I(x.q).f.R(D.eM4)
w=1
break}w=3
return B.b(C.Uw(!0),$async$afy)
case 3:w=4
return B.b(C.aYS(p),$async$afy)
case 4:t=k
if(f.e==null){w=1
break}if(e)s=d||t==null||C.hgv(t)
else s=!1
w=t!=null?5:6
break
case 5:w=s?7:8
break
case 7:w=9
return B.b(B.bV(D.bb9,null,new C.fp9(p),f,!0,!0,!1,A.ln,!1,!1,x.N),$async$afy)
case 9:r=k
if(r==="continue"){h.$1(t)
w=1
break}if(r!=="new"){w=1
break}if(f.e==null){w=1
break}w=10
return B.b(B.ca(null,null,!0,null,new C.fpa(),f,null,!0,!0,x.y),$async$afy)
case 10:if(k!==!0||f.e==null){w=1
break}g.$1(C.fUX(p))
w=1
break
case 8:h.$1(t)
w=1
break
case 6:if(!s){if(f.e!=null){q=f.I(x.q).f
q.R(B.b2(null,null,null,null,null,A.r,null,B.d("Registrar wa "+p+" bado hajachapisha Hati ya Kiapo cha Uongozi.",null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))}w=1
break}if(f.e==null){w=1
break}g.$1(C.fUX(p))
case 1:return B.h(u,v)}})
return B.i($async$afy,v)},
fc5:function fc5(){},
c72:function c72(){},
fui:function fui(d){this.a=d},
fuj:function fuj(){},
fp9:function fp9(d){this.a=d},
fp7:function fp7(d){this.a=d},
fp8:function fp8(d){this.a=d},
fpa:function fpa(){},
fp5:function fp5(d){this.a=d},
fp6:function fp6(d){this.a=d},
apb:function apb(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aCw:function aCw(){var _=this
_.d=null
_.r=_.f=_.e=!1
_.c=_.a=null},
e5t:function e5t(d){this.a=d},
e5r:function e5r(d){this.a=d},
e5s:function e5s(d){this.a=d},
e5u:function e5u(d){this.a=d},
e5v:function e5v(d){this.a=d},
wf(d,e,f,g,h,i,j,k,l,m,n){var w=C.cC()
return C.en(e,!1,f,A.aD,k.length===0?"marriage_locked":"marriage_locked_"+k,4280640491,g,A.bl,h,"",i,w,null,"","",0,!1,"",j,D.be,4280172719,2,d,0,0,"",D.cg,D.cQ,l,m,n)},
hb5(d,e,f){var w=4291404327
return B.a([C.pW(0,f,D.eI,w,2,"ring_l",f,d-f*0.42,e),C.pW(0,f,D.eI,w,2,"ring_r",f,d+f*0.06,e)],x.u)},
fak(d,e,f,g,h){var w,v,u="ps_"+g,t=C.pW(4294967288,f,D.eI,4291404327,1.3,u+"_ring",f,d,e),s=f*0.36
s=C.pW(h,s,D.eI,h,0,u+"_head",s,d+f*0.32,e+f*0.16)
w=g?0.12:0.18
v=g?0.76:0.64
return B.a([t,s,C.pW(h,f*0.46,D.eI,h,0,u+"_body",f*v,d+f*w,e+f*0.5)],x.u)},
pW(d,e,f,g,h,i,j,k,l){var w=C.cC()
return C.en(A.bg,!1,4279310375,A.aD,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bl,A.a4,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.cg,D.f_,j,k,l)},
faj(d,e,f,g,h,i,j,k,l){var w=C.cC(),v=A.k.D(j*0.0017,0.02,0.06),u="marriage_field_"+d+":"
return C.en(h,!1,k,A.aD,i?u+A.k.aa(g,3)+":"+A.o.aa(j,1):u+A.k.aa(g,3),4280640491,j,A.cD,A.O,"",v,w,null,"","",0,!1,"",0,D.be,4280172719,2,l,0,0,"",D.cg,D.cQ,g,e,f)},
bxT(d,e,f,g){return C.pW(0,0.002,D.fq,g,0.8,"ul_"+B.t(d)+"_"+B.t(e),f,d,e+0.002)},
hb4(d,e,f,g,h){var w=A.k.D(d.length*30*0.00058+0.08,0.2,0.5),v=f+(g-w)/2
return B.a([C.pW(0,0.036,D.be,h,1.4,"banner_box_"+d,w,v,e),C.wf(d,A.L,h,30,A.u,0.025199999999999997,0,"banner_t_"+d,w,v,e+0.00612)],x.u)},
hgg(){var w=new B.S(Date.now(),0,!1),v=new C.fvo()
return B.t(v.$1(B.bQ(w)))+"/"+B.t(v.$1(B.bG(w)))+"/"+B.by(w)},
hb6(d,e,f,g,h,i,j){var w=4293056712,v=h*0.56,u=f+v+0.01,t=u+0.08,s=f+h-t,r=""+e,q=f+0.026,p=v-0.026
return B.a([C.wf(r+".",A.bg,i,13,A.H,0.024,0,"wln_"+d+"_"+r,0.026,f,g),C.faj("witness_"+d+"_"+r+"_name",q,g,p,A.bg,!0,16,j,"[Jina la Shahidi]"),C.bxT(q,g+A.k.D(0.0272,0.02,0.06),p,w),C.wf("Sahihi:",A.bg,j,15,A.a4,0.028,0,"wls_"+d+"_"+r,0.077,u,g),C.en(A.bg,!1,4279310375,A.aD,"marriage_sign_"+d+"_witness_"+r,0,24,A.bl,A.a4,"",0.05,C.cC(),null,"","",0,!1,"",0,D.be,0,2,"",0,0,"",D.cg,D.f_,s,t,g-0.004),C.bxT(t,g+0.044,s,w)],x.u)},
ag_(d,e){var w,v,u,t=x.cd,s=e!=null?B.a([e],t):B.a([D.d7S,D.cet,D.d0Q,D.d2G],t)
for(t=s.length,w=0;w<s.length;s.length===t||(0,B.L)(s),++w)for(v=A.d.gaf(s[w]);v.C();){u=v.gU(0)
if(u.a===d)return u}return null},
fRR(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var w=C.fx4(d.d),v=B.a([C.en(A.bg,!1,4279310375,A.aD,"marriage_locked_bg",4280640491,24,A.bl,A.a4,"",1,C.cC(),w,"","",0,!1,"",0,D.be,4280172719,2,"",0,0,"",D.cg,D.lk,1,0,0)],x.u)
A.d.v(v,C.hMh(d,e,f,g,h,i,j,k,l,m,n,o,p,q))
return v},
hMh(c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=null,b0=4286200650,b1=4291404327,b2=4280640491,b3=4280172719,b4="marriage_locked",b5=4293056712,b6=4279310375,b7=4279673674,b8="marriage_locked_",b9=c3.f,c0=c3.r,c1=x.u,c2=B.a([],c1)
c2.push(C.wf("NGMY",A.L,b9&16777215|251658240,60,A.u,0.09,-0.52,"watermark",0.5,-0.11,0.025))
w=c3.z
switch(w.a){case 1:case 3:A.d.v(c2,C.hb5(0.42,0.016,0.048))
v=0.066
break
case 7:A.d.v(c2,C.hb5(0.38,0.012,0.072))
v=0.082
break
case 2:case 6:case 10:A.d.v(c2,C.fak(0.16,0.018,0.052,!1,b9))
A.d.v(c2,C.fak(0.79,0.018,0.052,!0,b0))
v=0.072
break
case 5:c2.push(C.wf("\ud83c\udf33",A.L,4279898632,22,A.a4,0.04,0,"tree",0.16,0.42,0.014))
v=0.056
break
case 8:A.d.v(c2,B.a([C.pW(0,0.062,D.eI,b1,1.6,"crest_o",0.11,0.445,0.012),C.pW(0,0.046,D.eI,b1,1,"crest_i",0.084,0.458,0.02),C.wf("MUHURI",A.L,b9,9,A.u,0.028,0,"crest_t",0.11,0.445,0.028)],c1))
v=0.078
break
case 4:case 9:A.d.v(c2,B.a([C.pW(0,0.002,D.fq,b1,1,"orn_l_0.018",0.24,0.2,0.024),C.pW(b9,0.016,D.kT,b1,0.9,"orn_c_0.018",0.024,0.488,0.018),C.pW(0,0.002,D.fq,b1,1,"orn_r_0.018",0.24,0.518,0.024)],c1))
v=0.04
break
case 0:v=d5
break
default:v=d5}A.d.v(c2,B.a([C.wf("TAREHE:",A.bg,c0,20,A.H,A.k.D(0.033999999999999996,0.02,0.06),0,"tarehe_lbl",0.1,0.7,0.026),C.faj("tarehe",0.8059999999999999,0.026,0.14400000000000002,A.bg,!1,21,b9,C.hgg()),C.bxT(0.814,0.026+A.k.D(0.035699999999999996,0.02,0.06)*0.8,0.12,c0)],c1))
c2.push(C.wf(d2,A.L,b9,d3,A.u,0.06,0,"title",0.82,0.09,v))
u=v+0.054
c2.push(C.pW(c0,0.0026,D.be,c0,0,"title_rule_1",0.82*d4,0.09+0.82*(1-d4)/2,u))
t=u+0.028
c2.push(C.pW(c3.e,0.138,D.be,c0,1.15,"intro_frame",0.832,0.08399999999999999,t-0.004))
s=C.cC()
c2.push(C.en(A.bg,!1,b9,A.aD,"marriage_field_utangulizi:"+A.k.aa(0.82,3),b2,19,A.bl,A.cu,"",0.128,s,a9,"","",0,!1,"",0,D.be,b3,2,c5,0,0,"",D.cg,D.cQ,0.82,0.09,t))
t+=c4
if(c8){r=A.k.D(c7.length*30*0.00058+0.08,0.2,0.5)
q=0.09+(0.82-r)/2
s=C.pW(0,0.036,D.be,c0,1.4,"banner_box_nimetowe_label",r,q,t)
p=C.cC()
A.d.v(c2,B.a([s,C.en(A.L,!1,c0,A.aD,"marriage_field_nimetowe_label:"+A.k.aa(r,3),b2,30,A.bl,A.u,"",0.025199999999999997,p,a9,"","",0,!1,"",0,D.be,b3,2,c7,0,0,"",D.cg,D.cQ,r,q,t+0.00612)],c1))}else A.d.v(c2,C.hb4(c7,t,0.09,0.82,c0))
t+=0.048
c2.push(C.wf(c9,A.bg,b9,d0,A.O,0.03,0,"nimetowe_sub",0.82,0.09,t))
t+=0.03
for(o=1;o<=4;++o){s=c6[o-1]
n=o===1
m=A.k.D(0.7779999999999999-(n?0.328:0),0.22,1)
l=n?A.k.D(0.037399999999999996,0.02,0.06):A.k.D(0.0272,0.02,0.06)
p=""+o
k=t+0.002
j=C.faj("mahari_"+p,0.132,k,m,A.bg,!1,16,b9,s)
if(n)j.f=l
s="nim_n_"+p
i=Date.now()
h=$.iX
$.iX=h+1
s=s.length===0?b4:b8+s
g="nim_ul_"+p
f=Date.now()
e=$.iX
$.iX=e+1
g=g.length===0?b4:b8+g
d=B.a([new C.eI(""+1000*i+"_"+h,D.cQ,0.09,t+0.004,0.032,0.022,p+".",13,A.H,A.bl,A.aD,c0,A.bg,a9,D.be,b2,b3,2,0,!1,s,0,D.cg,0,"","","","","",!1,0),j,new C.eI(""+1000*f+"_"+e,D.f_,0.132,k+l+0.002,0.7779999999999999,0.002,"",24,A.a4,A.bl,A.aD,b6,A.bg,a9,D.fq,0,b5,0.8,0,!1,g,0,D.cg,0,"","","","","",!1,0)],c1)
if(n){a0=0.132+m+0.008
a1=a0+0.268+0.004
a2=k+(l-0.025875)/2
s=Date.now()
p=$.iX
$.iX=p+1
i=Date.now()
h=$.iX
$.iX=h+1
g=Date.now()
f=$.iX
$.iX=f+1
e=Date.now()
a3=$.iX
$.iX=a3+1
A.d.v(d,B.a([new C.eI(""+1000*s+"_"+p,D.cQ,a0,k,0.268,l,"AKUNA DENI",22,A.u,A.bl,A.aD,b7,A.dL,a9,D.be,b2,b3,2,0,!1,"marriage_locked_nim_akuna_deni",0,D.cg,0,"","","","","",!1,0),new C.eI(""+1000*i+"_"+h,D.f_,a1,a2,0.046,0.025875,"",24,A.a4,A.bl,A.aD,b6,A.bg,a9,D.be,0,b7,2,0,!1,"marriage_locked_nim_akuna_box",0,D.cg,0,"","","","","",!1,0),new C.eI(""+1000*g+"_"+f,D.cQ,a1,a2-0.002,0.046,0.029875,"\u2713",18,A.u,A.bl,A.aD,b7,A.L,a9,D.be,b2,b3,2,0,!1,"marriage_locked_nim_akuna_tick",0,D.cg,0,"","","","","",!1,0),new C.eI(""+1000*e+"_"+a3,D.f_,a0,k,a1+0.046-a0,l,"",24,A.a4,A.bl,A.aD,b6,A.bg,a9,D.be,0,0,0,0,!1,"marriage_locked_nim_akuna_hit",0,D.cg,0,"","","","","",!1,0)],c1))}A.d.v(c2,d)
t+=0.04}t+=0.006
A.d.v(c2,C.hb4("MASHAHIDI",t,0.09,0.82,c0))
t+=0.046
if(w===D.a3N||w===D.a3P||w===D.a3M||w===D.a3O){w=t-0.008
A.d.v(c2,C.fak(0.21,w,0.044,!0,b0))
A.d.v(c2,C.fak(0.7459999999999999,w,0.044,!1,b9))
t+=0.012}a4=0.05+d6*0.056+0.011
w=t+0.05
s=t+0.012
A.d.v(c2,B.a([C.pW(0,a4,D.be,c0,1.3,"wit_table_border",0.82,0.09,t),C.pW(c0,a4,D.be,c0,0,"wit_table_divider",0.0024,0.4988,t),C.pW(0,0.0022,D.fq,c0,1.1,"wit_table_hdrline",0.82,0.09,w),C.wf("UPANDE WA MKE",A.L,c0,20,A.u,0.03,0,"wit_h_mke_t",0.41,0.09,s),C.wf("UPANDE WA MUME",A.L,c0,20,A.u,0.03,0,"wit_h_mume_t",0.41,0.5,s)],c1))
a5=w+0.01
for(a6=1;a6<=d6;++a6){A.d.v(c2,C.hb6("mke",a6,0.106,a5,0.378,c0,b9))
A.d.v(c2,C.hb6("mume",a6,0.516,a5,0.378,c0,b9))
a5+=0.056}t=t+a4+0.012
w=t+0.056
s=t+0.09
p=s-0.002
A.d.v(c2,B.a([C.pW(0,0.11,D.be,c0,1.2,"mw_box",0.82,0.09,t),C.wf("MWANDISHI",A.bg,c0,15,A.H,0.026,0,"mw_hdr",0.7759999999999999,0.11199999999999999,t+0.016),C.wf("Jina:",A.bg,b9,15,A.a4,0.028,0,"mw_jl",0.09,0.11199999999999999,w),C.faj("mwandishi_jina",0.215,w,0.3116,A.bg,!0,15,b9,""),C.bxT(0.215,p,0.3116,b5),C.wf("Sahihi:",A.bg,b9,15,A.a4,0.028,0,"mw_sl",0.09,0.5,w),C.en(A.bg,!1,b6,A.aD,"marriage_sign_mwandishi",0,24,A.bl,A.a4,"",0.044,C.cC(),a9,"","",0,!1,"",0,D.be,0,2,"",0,0,"",D.cg,D.f_,0.3161999999999999,0.5738,s-0.044),C.bxT(0.5738,p,0.3161999999999999,b5)],c1))
a7=A.a.i(d1)
if(a7.length!==0){a8=t+0.11+0.006
A.d.v(c2,B.a([C.pW(0,0.032,D.be,c0,1,"state_box",0.7,0.15,a8),C.wf("EMO 'YA M'MBONDO "+a7,A.L,b9,26,A.O,0.026000000000000002,0,"state_text",0.7,0.15,a8+0.003)],c1))}return c2},
hXU(d){var w,v,u,t=null,s=B.b0(d.f),r=B.b0(d.r),q=C.fVA(d.d),p=new C.fvk(s),o=new C.fvl(s),n=d.z,m=n===D.a3N||n===D.a3P||n===D.a3M||n===D.a3O,l=n===D.aDN||n===D.a3Q||n===D.aDO,k=B.bY(0,B.fL(q,A.A,t,t,A.co,A.bQ,!0,t,!1,t,t),0,0,0),j=x.p,i=B.a([],j)
if(l){w=n===D.a3Q?26:16
i.push(new C.fvn().$1$size(w))}if(n===D.aDP)i.push(D.fqd)
if(m)i.push(B.A(B.a([o.$1$female(!1),o.$1$female(!0)],j),A.m,t,A.hM,A.j,0,t,t))
i.push(B.d("HATI YA KUHOWA",t,t,t,t,t,t,B.l(t,t,s,t,t,t,t,t,t,t,t,9,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),A.L,t,t))
i.push(A.an)
n=B.I(r,A.q,1.1)
w=B.m(4)
i.push(B.p(t,B.v(B.a([p.$0(),D.aMP,p.$1$w(0.9),D.aMP,p.$1$w(0.75)],j),A.m,t,A.e,A.j,0,A.p),A.f,t,t,new B.o(D.b6L,t,n,w,t,t,A.n),t,t,t,t,A.ahy,t,t,t))
i.push(A.an)
i.push(new C.fvm(r).$1("NIMETOWE"))
i.push(A.fZ)
v=J.e2(3,x.l)
for(u=0;u<3;++u)v[u]=new B.C(A.Lr,new B.cl(A.aO,A.e,A.j,A.m,t,A.p,t,0,B.a([B.p(t,t,A.f,t,t,new B.o(r,t,t,t,t,t,A.a6),t,7,t,t,t,t,t,7),A.d8,new B.bD(1,A.bi,p.$1$h(4),t)],j),t),t)
A.d.v(i,v)
i.push(A.b4)
i.push(B.d(d.b,t,t,t,t,t,t,B.l(t,t,s.j(0.85),t,t,t,t,t,t,t,t,8,t,t,A.H,t,t,!0,t,t,t,t,t,t,t,t),A.L,t,t))
return new B.an(A.W,t,A.b_,A.r,B.a([k,new B.C(A.ag8,B.v(i,A.aj,t,A.e,A.j,0,A.p),t)],j),t)},
hfB(d,e){var w,v,u,t=null,s="Hati ya Kuhowa",r=C.ag_(e,t)
if(r==null)r=A.d.gK(D.Gk)
w=C.cC()
v=C.rh(r.e,t,0,0,C.fRR(r,0.165,y.O,D.d3f,"NIMETOWA",!1,"Vitu vifuatavyo vimetolewa:",20,d,"HATI YA KUHOWA",40,0.55,0.036,3),w,D.pZ,"","",s,D.dd)
w=C.cC()
u=A.a.i(d)
if(u.length===0)u=t
return C.Bc(t,t,t,t,D.o2,5,!1,"hati_kuhowa",t,t,t,t,w,t,!1,u,s,t,t,B.a([v],x.g),"hati_kuhowa_"+r.a,t,!1,t)},
hfC(d,e){var w,v,u,t=null,s="Hati ya Kuhoweya",r=C.ag_(e,t)
if(r==null)r=A.d.gK(D.Gk)
w=C.cC()
v=C.rh(r.e,t,0,0,C.fRR(r,0.165,y.f,D.d_2,"NIMEPOKEYA CASH",!0,"Vitu vifuatavyo vimetolewa:",20,d,"HATI YA KUHOWESHA",40,0.55,0.036,3),w,D.pZ,"","",s,D.dd)
w=C.cC()
u=A.a.i(d)
if(u.length===0)u=t
return C.Bc(t,t,t,t,D.o2,5,!1,"hati_kuhoweya",t,t,t,t,w,t,!1,u,s,t,t,B.a([v],x.g),"hati_kuhoweya_"+r.a,t,!1,t)},
bBQ(d,e,f){var w=0,v=B.j(x.T),u
var $async$bBQ=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:u=B.bV(A.K,null,new C.fGS(e,f),d,!0,!0,!0,null,!1,!1,x.N)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bBQ,v)},
afz(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$afz=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:q=B.T(i).k("a2<1>")
p=B.B(new B.a2(i,new C.fpd(),q),q.k("J.E"))
w=!g&&p.length!==0?3:4
break
case 3:w=5
return B.b(B.bV(D.KF,null,new C.fpe(p),d,!0,!0,!1,A.ln,!1,!1,x.N),$async$afz)
case 5:t=k
if(t==="continue"){f.$1(A.d.gK(p).hC())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bBQ(d,"Hati ya Kuhowa",D.Gk),$async$afz)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.KC(d,"Tafuta jimbo\u2026","",A.jX,"Chagua jimbo"),$async$afz)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}e.$1(C.hfB(r,s))
case 1:return B.h(u,v)}})
return B.i($async$afz,v)},
afA(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$afA=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:q=B.T(i).k("a2<1>")
p=B.B(new B.a2(i,new C.fph(),q),q.k("J.E"))
w=!g&&p.length!==0?3:4
break
case 3:w=5
return B.b(B.bV(D.KF,null,new C.fpi(p),d,!0,!0,!1,A.ln,!1,!1,x.N),$async$afA)
case 5:t=k
if(t==="continue"){f.$1(A.d.gK(p).hC())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bBQ(d,"Hati ya Kuhoweya",D.Gk),$async$afA)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.KC(d,"Tafuta jimbo\u2026","",A.jX,"Chagua jimbo"),$async$afA)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}e.$1(C.hfC(r,s))
case 1:return B.h(u,v)}})
return B.i($async$afA,v)},
afB(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p,o,n,m
var $async$afB=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:n=B.T(i).k("a2<1>")
m=B.B(new B.a2(i,new C.fpl(),n),n.k("J.E"))
w=!g&&m.length!==0?3:4
break
case 3:w=5
return B.b(B.bV(D.KF,null,new C.fpm(m),d,!0,!0,!1,A.ln,!1,!1,x.N),$async$afB)
case 5:t=k
if(t==="continue"){f.$1(A.d.gK(m).hC())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bBQ(d,"Malipo ya Awamu ya Mahari",D.PR),$async$afB)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.KC(d,"Tafuta jimbo\u2026","",A.jX,"Chagua jimbo"),$async$afB)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}q=C.ag_(s,D.PR)
if(q==null)q=A.d.gK(D.PR)
n=C.cC()
p=C.rh(q.e,null,0,0,C.fRR(q,0.21,"Mimi [Jina la Baba wa Mume], nikiwa kama baba na mkuu wa familia ya upande wa mume kutoka jamii ya [Jina la Jamii ya Mume], nyumba ya [Jina la Nyumba ya Mume], ninafanya makubaliano haya rasmi na familia ya [Jina la Baba wa Binti], wa jamii ya [Jina la Jamii ya Binti], nyumba ya [Jina la Nyumba ya Binti]. Kwa kuwa malipo kamili ya mahari ya mke wa mwanangu hayajakamilika kwa sasa, tumefikia makubaliano ya kulipa kwa awamu. Kiasi kilichosalia cha mahari kitakamilishwa kikamilifu na familia yetu ifikapo tarehe [Tarehe ya Kurudi Kulipa Mahari]. Siku hiyo, pande zote mbili zitakutana tena kwa ajili ya kukamilisha taratibu zote zilizosalia, kupokea baraka kamili za ndoa, na kukabidhiwa Cheti cha Ndoa ya Kimila. Makubaliano haya yanafanyika kwa hiari, kwa ridhaa ya familia zote mbili, na kwa kufuata misingi ya heshima, mila, desturi na maelewano mema kati ya familia zetu.",D.cVd,"MALIPO YALIYOSALIA",!1,"Mambo ya Cash na Mali (Yaliyosalia / Yatakayokamilishwa):",18,r,"HATI YA MAKUBALIANO YA MALIPO YA AWAMU YA MAHARI",24,0.85,0.048,2),n,D.pZ,"","","Hati ya Makubaliano ya Malipo ya Awamu",D.dd)
n=C.cC()
o=A.a.i(r)
if(o.length===0)o=null
e.$1(C.Bc(null,null,null,null,D.o2,5,!1,"hati_malipo_awamu",null,null,null,null,n,null,!1,o,"Hati ya Makubaliano ya Malipo ya Awamu",null,null,B.a([p],x.g),"hati_malipo_awamu_"+q.a,null,!1,null))
case 1:return B.h(u,v)}})
return B.i($async$afB,v)},
xd:function xd(d,e){this.a=d
this.b=e},
ji:function ji(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.z=k},
fvo:function fvo(){},
fvk:function fvk(d){this.a=d},
fvm:function fvm(d){this.a=d},
fvn:function fvn(){},
fvl:function fvl(d){this.a=d},
fGS:function fGS(d,e){this.a=d
this.b=e},
aco:function aco(d,e,f){this.c=d
this.d=e
this.a=f},
dVO:function dVO(d,e,f){this.a=d
this.b=e
this.c=f},
dVN:function dVN(d,e){this.a=d
this.b=e},
dVM:function dVM(d,e){this.a=d
this.b=e},
abO:function abO(d,e,f){this.c=d
this.d=e
this.a=f},
fpd:function fpd(){},
fpe:function fpe(d){this.a=d},
fpb:function fpb(d){this.a=d},
fpc:function fpc(d){this.a=d},
fph:function fph(){},
fpi:function fpi(d){this.a=d},
fpf:function fpf(d){this.a=d},
fpg:function fpg(d){this.a=d},
fpl:function fpl(){},
fpm:function fpm(d){this.a=d},
fpj:function fpj(d){this.a=d},
fpk:function fpk(d){this.a=d},
K1(d,e,f,g,h,i,j,k,l,m){var w=C.cC()
return C.en(e,!1,f,A.aD,j.length===0?"marriage_locked":"marriage_locked_"+j,4280640491,g,A.bl,h,"",i,w,null,"","",0,!1,"",0,D.be,4280172719,2,d,0,0,"",D.cg,D.cQ,k,l,m)},
Ch(d,e,f,g,h,i,j,k,l){var w=C.cC()
return C.en(A.bg,!1,4279310375,A.aD,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bl,A.a4,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.cg,D.f_,j,k,l)},
hbM(d,e,f){return C.Ch(0,0.002,D.fq,4293056712,0.8,"ul_"+B.t(d)+"_"+B.t(e),f,d,e+0.022)},
by2(d,e,f,g,h){return B.a([C.Ch(4294967288,0.032,D.be,4291404327,1.15,"pill_"+d,g,f,e),C.K1(d,A.L,h,11,A.u,0.024,"pill_t_"+d,g,f,e+0.005)],x.u)},
fSC(d,e,f,g,h){var w=d+f/2,v=e+0.006,u=f*0.4,t=B.t(e)
return B.a([C.Ch(0,0.002,D.fq,g,1,"orn_l_"+t,u,d,v),C.Ch(h,0.016,D.kT,g,0.9,"orn_c_"+t,0.024,w-0.012,e),C.Ch(0,0.002,D.fq,g,1,"orn_r_"+t,u,w+0.018,v)],x.u)},
a0s(d,e,f,g,h,i,j,k){var w=d.length*i*0.0027+0.006,v=C.K1(d,A.bg,j,i,A.O,0.022,"ll_"+e,w,f,g),u=f+w,t=h-w,s=C.cC()
return B.a([v,C.en(A.L,!1,j,A.aD,"marriage_field_"+e+":"+A.k.aa(t,3),4280640491,i,A.cD,A.O,"",0.02,s,null,"","",0,!1,"",0,D.be,4280172719,2,k,0,0,"",D.cg,D.cQ,t,u,g-0.002),C.hbM(u,g+0.018,t)],x.u)},
hbN(d,e,f,g,h,i){var w=4291404327,v=f+0.002
return B.a([C.Ch(h,0.028,D.be,h,0,"chv_"+d,g,e,f),C.Ch(w,0.024,D.kT,w,0,"chv_l_"+d,0.024,e-0.008,v),C.Ch(w,0.024,D.kT,w,0,"chv_r_"+d,0.024,e+g-0.016,v),C.K1(d,A.L,i,9.5,A.u,0.02,"chv_t_"+d,g,e,f+0.004)],x.u)},
by1(d,e,f,g,h){var w=e+0.12,v=g-0.12
return B.a([C.K1("Sahihi:",A.bg,h,10,A.O,0.02,"is_"+d,0.12,e,f),C.en(A.bg,!1,4279310375,A.aD,"marriage_sign_"+d,0,24,A.bl,A.a4,"",0.032,C.cC(),null,"","",0,!1,"",0,D.be,0,2,"",0,0,"",D.cg,D.f_,v,w,f-0.006),C.hbM(w,f+0.016,v)],x.u)},
fVB(d){var w,v
for(w=0;w<19;++w){v=D.Q3[w]
if(v.a===d)return v}return null},
i_a(d){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=d.c
if(A.a.a0(k,"hati_kuhowa_")){w=C.ag_(A.a.b0(k,12),l)
v=w==null?l:w.d}else if(A.a.a0(k,"hati_kuhoweya_")){w=C.ag_(A.a.b0(k,14),l)
v=w==null?l:w.d}else if(A.a.a0(k,"hati_malipo_awamu_")){u=A.a.b0(k,18)
w=C.ag_(u,D.PR)
v=w==null?l:w.d
if(v==null){w=C.ag_(u,l)
v=w==null?l:w.d}}else if(A.a.a0(k,"marriage_")){w=C.fVB(A.a.b0(k,9))
v=w==null?l:w.d}else v=l
if(v==null)return!1
$.hcB.a9(0)
$.hcO.a9(0)
t=C.fx4(v)
for(w=d.r,s=w.length,r=!1,q=0;q<w.length;w.length===s||(0,B.L)(w),++q)for(p=w[q].z,o=p.length,n=0;n<o;++n){m=p[n]
if(m.db==="marriage_locked_bg"&&m.at!==t){m.at=t
r=!0}}return r},
fWG(d){var w=0,v=B.j(x.T),u
var $async$fWG=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:u=B.bV(A.K,null,new C.fIk(),d,!0,!0,!0,null,!1,!1,x.N)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fWG,v)},
xg:function xg(d,e){this.a=d
this.b=e},
nx:function nx(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bhE:function bhE(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
fIk:function fIk(){},
acr:function acr(d){this.a=d},
eaI:function eaI(d,e){this.a=d
this.b=e},
eaH:function eaH(d){this.a=d},
eaG:function eaG(d,e){this.a=d
this.b=e},
ae5:function ae5(d,e,f){this.c=d
this.d=e
this.a=f},
fVA(d){return $.hcO.ck(0,d,new C.fx6(d))},
fx4(d){return $.hcB.ck(0,d,new C.fx5(d))},
fy(d){return B.fMa(d>>>16&255,d>>>8&255,d&255,255)},
hPi(d){var w,v,u=4292128567,t=4285213214,s=4294967035,r=4290283019,q=null,p=4279378237,o=4291404327,n=4294966774,m=4294702831,l=4285218602,k=4291394365,j=4294967295,i=4294964964,h=4294965484,g=4280241466,f=4287326484,e=4294966518
switch(d.a){case 0:return C.hdS(4294570461,4293910718,4284234270,u)
case 1:return C.hdS(4294635750,4293975240,t,4292912216)
case 2:w=C.f8V(s,4294505966,r)
C.bxN(w,14,16,p)
C.kp(w,8,9,464,836,u,1.2)
C.Cd(w,2,2,1,1,u,10)
C.Cd(w,478,2,-1,1,u,10)
C.Cd(w,2,852,1,-1,u,10)
C.Cd(w,478,852,-1,-1,u,10)
return w
case 3:return C.f8V(4294966515,4294373082,4289102906)
case 4:return C.hK6(C.f8V(4294376440,4293653998,4290287194))
case 5:w=C.f8V(4294965238,4294437098,4288444980)
C.bxN(w,14,16,4283043359)
C.kp(w,6,7,468,840,u,1)
C.kp(w,9,10,462,834,o,0.7)
return w
case 6:v=B.hl(q,q,A.c9,0,A.e0,854,q,0,3,q,A.c9,480,!1)
C.y5(v,n,4294175448)
C.rB(v,n)
C.kp(v,24,24,432,806,4286209070,1)
C.a0g(v,12,12,468,12,o,3,20)
C.a0g(v,12,842,468,842,o,3,20)
C.a0g(v,12,12,12,842,o,3,20)
C.a0g(v,468,12,468,842,o,3,20)
return v
case 7:return C.hIa(4294440434,4293518297,4280228630,r)
case 8:v=B.hl(q,q,A.c9,0,A.e0,854,q,0,3,q,A.c9,480,!1)
C.y5(v,m,4293911504)
C.rB(v,m)
C.kp(v,28,28,424,798,l,1)
C.fhH(v,28,28,l,k)
C.fhH(v,452,28,l,k)
C.fhH(v,28,826,l,k)
C.fhH(v,452,826,l,k)
return v
case 9:v=B.hl(q,q,A.c9,0,A.e0,854,q,0,3,q,A.c9,480,!1)
C.y5(v,j,4294111986)
C.rB(v,j)
C.kp(v,18,18,444,818,4292401368,0.7)
B.iH(v,!0,C.fy(p),0,13,0,853)
return v
case 10:return C.hM3(i,4294173372)
case 11:return C.hN8(4294439140,4293449662)
case 12:return C.hI2(h,4294239432)
case 13:return C.hMA(4294244340,4293193448)
case 14:return C.hQR(4294505710,4293780694)
case 15:return C.f7V(4294966259,4294439138,o,p,q)
case 16:return C.f7V(4294966776,4294178544,o,g,g)
case 17:return C.f7V(4294965493,4294504170,o,4286200650,q)
case 18:return C.f7V(4294966519,4294373862,o,p,p)
case 19:return C.hLb()
case 20:return C.hLc()
case 21:v=B.hl(q,q,A.c9,0,A.e0,854,q,0,3,q,A.c9,480,!1)
C.y5(v,h,4293976768)
C.rB(v,h)
C.bxN(v,14,16,p)
B.iH(v,!0,C.fy(u),4,475,4,9)
B.iH(v,!0,C.fy(u),4,475,844,849)
B.iH(v,!0,C.fy(u),4,9,4,849)
B.iH(v,!0,C.fy(u),470,475,4,849)
C.a0g(v,10,12,470,12,u,2,16)
C.a0g(v,10,842,470,842,u,2,16)
C.a0g(v,10,12,10,842,u,2,18)
C.a0g(v,470,12,470,842,u,2,18)
C.Cd(v,2,2,1,1,t,10)
C.Cd(v,478,2,-1,1,t,10)
C.Cd(v,2,852,1,-1,t,10)
C.Cd(v,478,852,-1,-1,t,10)
C.kp(v,14,16,452,822,u,1.8)
return v
case 22:v=B.hl(q,q,A.c9,0,A.e0,854,q,0,3,q,A.c9,480,!1)
C.y5(v,s,4294438872)
C.rB(v,s)
C.kp(v,14,16,452,822,o,2.2)
C.kp(v,22,24,436,806,o,1)
C.fTU(v,!1,!1,o,p,p,36,14,16)
C.kD(v,240,20,7,o,!0)
C.kD(v,240,834,7,o,!0)
C.kD(v,18,427,7,o,!0)
C.kD(v,462,427,7,o,!0)
return v
case 23:v=B.hl(q,q,A.c9,0,A.e0,854,q,0,3,q,A.c9,480,!1)
C.y5(v,i,4293910712)
C.rB(v,i)
B.iH(v,!0,C.fy(u),0,479,0,20)
B.iH(v,!0,C.fy(u),0,479,834,853)
B.iH(v,!0,C.fy(u),0,20,0,853)
B.iH(v,!0,C.fy(u),460,479,0,853)
B.iH(v,!0,C.fy(f),5,474,5,9)
B.iH(v,!0,C.fy(f),5,474,844,848)
B.iH(v,!0,C.fy(f),5,9,5,848)
B.iH(v,!0,C.fy(f),470,474,5,848)
C.kp(v,28,28,424,798,f,1.4)
return v
case 24:v=B.hl(q,q,A.c9,0,A.e0,854,q,0,3,q,A.c9,480,!1)
C.y5(v,e,4294174404)
C.rB(v,e)
C.bxN(v,14,16,p)
B.iH(v,!0,C.fy(u),3,476,3,8)
B.iH(v,!0,C.fy(u),3,476,845,850)
B.iH(v,!0,C.fy(u),3,8,3,850)
B.iH(v,!0,C.fy(u),471,476,3,850)
C.kp(v,9,10,462,834,t,1)
C.kp(v,14,16,452,822,u,1.8)
C.kD(v,240,8,4,u,!0)
C.kD(v,240,846,4,u,!0)
C.kD(v,8,427,4,u,!0)
C.kD(v,472,427,4,u,!0)
C.kD(v,8,8,3,t,!0)
C.kD(v,472,8,3,t,!0)
C.kD(v,8,846,3,t,!0)
C.kD(v,472,846,3,t,!0)
return v}},
y5(d,e,f){var w,v,u,t,s,r=null,q=e>>>16&255,p=f>>>16&255,o=e>>>8&255,n=f>>>8&255,m=e&255,l=f&255,k=0
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
B.kF(d,!1,A.da,new B.Rq(s),r,A.cW,1,0,w-1,k,k);++k}},
rB(d,e){var w,v,u,t,s,r,q,p,o=null,n=new B.eP()
n.dG(e)
for(w=0;w<900;++w){v=d.a
v=v==null?o:v.a
u=n.aA(v==null?0:v)
v=d.a
v=v==null?o:v.b
t=n.aA(v==null?0:v)
v=d.a
s=v==null?o:v.dQ(u,t,o)
if(s==null)s=new B.iC()
v=A.o.D(A.k.O(s.gb6(s))-3,0,255)
r=A.o.D(A.k.O(s.gbf())-3,0,255)
q=A.o.D(A.k.O(s.gbg(s))-2,0,255)
p=d.a
if(p!=null)p.jB(u,t,v,r,q,255)}},
kp(d,e,f,g,h,i,j){var w,v=null,u=C.fy(i),t=e+g
B.kF(d,!0,A.da,u,v,A.cW,j,e,t,f,f)
w=f+h
B.kF(d,!0,A.da,u,v,A.cW,j,e,t,w,w)
B.kF(d,!0,A.da,u,v,A.cW,j,e,e,f,w)
B.kF(d,!0,A.da,u,v,A.cW,j,t,t,f,w)},
Cd(d,e,f,g,h,i,j){var w,v,u=null,t=A.o.D(A.k.V(j*0.72),8,j-2)
B.kF(d,!0,A.da,C.fy(i),u,A.cW,2,e,e+g*j,f,f)
B.kF(d,!0,A.da,C.fy(i),u,A.cW,2,e,e,f,f+h*j)
w=e+g*3
v=f+h*3
B.kF(d,!0,A.da,C.fy(i),u,A.cW,1,w,e+g*t,v,v)
B.kF(d,!0,A.da,C.fy(i),u,A.cW,1,w,w,v,f+h*t)},
hdS(d,e,f,g){var w=null,v=B.hl(w,w,A.c9,0,A.e0,854,w,0,3,w,A.c9,480,!1)
C.y5(v,d,e)
C.rB(v,d)
B.iH(v,!0,C.fy(f),0,479,0,28)
B.iH(v,!0,C.fy(f),0,479,826,853)
B.iH(v,!0,C.fy(f),0,28,0,853)
B.iH(v,!0,C.fy(f),452,479,0,853)
C.kp(v,5,5,470,844,g,1.1)
C.kp(v,28,28,424,798,g,1.6)
C.Cd(v,2,2,1,1,g,11)
C.Cd(v,478,2,-1,1,g,11)
C.Cd(v,2,852,1,-1,g,11)
C.Cd(v,478,852,-1,-1,g,11)
return v},
f8V(d,e,f){var w=null,v=B.hl(w,w,A.c9,0,A.e0,854,w,0,3,w,A.c9,480,!1)
C.y5(v,d,e)
C.rB(v,d)
C.kp(v,14,16,452,822,f,1.6)
C.kp(v,20,22,440,810,f,0.8)
return v},
bxN(d,e,f,g){var w,v=C.fy(g)
B.iH(d,!0,v,0,479,0,f-1)
w=854-f
B.iH(d,!0,v,0,479,w,853);--w
B.iH(d,!0,v,0,e-1,f,w)
B.iH(d,!0,v,480-e,479,f,w)},
hK6(d){var w,v,u=4291404327
C.bxN(d,14,16,4279122734)
for(w=10;w<470;w+=14){C.kD(d,w,8,3,u,!0)
C.kD(d,w,846,3,u,!0)}for(v=18;v<836;v+=16){C.kD(d,7,v,3,u,!0)
C.kD(d,473,v,3,u,!0)}return d},
fkG(d,e,f,g,h,i,j,k,l,m,n){var w,v,u,t=x.J,s=B.a([new B.j9(e,f),new B.j9(e+g*n,f),new B.j9(e,f+h*n)],t)
B.a11(d,C.fy(m),s)
w=A.o.D(A.k.V(n*0.17),5,8)
v=A.k.V(n*0.78)
s=e+g*w
u=f+h*w
t=B.a([new B.j9(s,u),new B.j9(e+g*v,u),new B.j9(s,f+h*v)],t)
B.a11(d,C.fy(k),t)
t=A.k.V(n*0.39)
C.kD(d,e+g*t,f+h*t,6,l,!0)
if(i){t=n-7
C.kD(d,e+g*t,f+h*3,4,k,!0)
C.kD(d,e+g*3,f+h*t,4,k,!0)}if(j){t=n-4
C.kD(d,e+g*t,f,5,k,!0)
C.kD(d,e,f+h*t,5,k,!0)}},
fTU(d,e,f,g,h,i,j,k,l){var w,v
C.fkG(d,k,l,1,1,e,f,g,h,i,j)
w=480-k
C.fkG(d,w,l,-1,1,e,f,g,h,i,j)
v=854-l
C.fkG(d,k,v,1,-1,e,f,g,h,i,j)
C.fkG(d,w,v,-1,-1,e,f,g,h,i,j)},
a0g(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p,o=g-e,n=h-f,m=Math.max(1,A.k.V(Math.sqrt(o*o+n*n)/k))
for(w=i>>>16&255,v=i>>>8&255,u=i&255,t=0;t<=m;++t){s=t/m
r=A.k.V(e+o*s)
q=A.k.V(f+n*s)
p=new Uint8Array(4)
p[0]=w
p[1]=v
p[2]=u
p[3]=255
B.kX(d,!0,A.da,new B.qO(p),null,A.cW,j,r,q)}},
fjP(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o
for(w=i>>>16&255,v=i>>>8&255,u=i&255,t=0;t<3;++t){s=34+t*12
r=26-t*6
q=e+g*s
p=f+h*s
o=new Uint8Array(4)
o[0]=w
o[1]=v
o[2]=u
o[3]=255
B.kF(d,!0,A.da,new B.qO(o),null,A.cW,1.4,q,q+g*r,p,p)
o=new Uint8Array(4)
o[0]=w
o[1]=v
o[2]=u
o[3]=255
B.kF(d,!0,A.da,new B.qO(o),null,A.cW,1.4,q,q,p,p+h*r)}},
hIa(d,e,f,g){var w,v,u,t,s,r,q,p,o=null,n=B.hl(o,o,A.c9,0,A.e0,854,o,0,3,o,A.c9,480,!1)
C.y5(n,d,e)
C.rB(n,d)
C.kp(n,20,20,440,814,f,1.2)
C.fjP(n,0,0,1,1,g)
C.fjP(n,480,0,-1,1,g)
C.fjP(n,0,854,1,-1,g)
C.fjP(n,480,854,-1,-1,g)
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
B.kF(n,!0,A.da,new B.qO(p),o,A.cW,1.2,240,r,60,q)}return n},
fhH(d,e,f,g,h){var w
C.fni(d,!0,C.fy(g),13,e,f)
C.fni(d,!0,C.fy(g),9,e,f)
w=B.a([new B.j9(e,f-4),new B.j9(e+4,f),new B.j9(e,f+4),new B.j9(e-4,f)],x.J)
B.a11(d,C.fy(h),w)},
kD(d,e,f,g,h,i){var w=null,v=f-g,u=e+g,t=f+g,s=e-g,r=B.a([new B.j9(e,v),new B.j9(u,f),new B.j9(e,t),new B.j9(s,f)],x.J)
if(i){B.a11(d,C.fy(h),r)
return}B.kF(d,!0,A.da,C.fy(h),w,A.cW,1,e,u,v,f)
B.kF(d,!0,A.da,C.fy(h),w,A.cW,1,u,e,f,t)
B.kF(d,!0,A.da,C.fy(h),w,A.cW,1,e,s,t,f)
B.kF(d,!0,A.da,C.fy(h),w,A.cW,1,s,e,f,v)},
f7U(d,e,f,g,h,i,j){var w,v=B.a([new B.j9(e,f),new B.j9(e+g*28,f),new B.j9(e,f+h*28)],x.J)
B.a11(d,C.fy(i),v)
v=e+g*14
w=f+h*14
C.kD(d,v,w,6,j,!0)
C.kD(d,v,w,3,i,!0)},
f7V(d,e,f,g,h){var w=null,v=B.hl(w,w,A.c9,0,A.e0,854,w,0,3,w,A.c9,480,!1)
C.y5(v,d,e)
C.rB(v,d)
C.kp(v,18,18,444,818,f,2)
C.kp(v,26,26,428,802,f,0.9)
if(h!=null)B.iH(v,!0,C.fy(h),28,451,28,34)
C.f7U(v,18,18,1,1,g,f)
C.f7U(v,462,18,-1,1,g,f)
C.f7U(v,18,836,1,-1,g,f)
C.f7U(v,462,836,-1,-1,g,f)
return v},
hLb(){var w,v=null,u=4294966259,t=4292128567,s=4287326484,r=B.hl(v,v,A.c9,0,A.e0,854,v,0,3,v,A.c9,480,!1)
C.y5(r,u,4294240980)
C.rB(r,u)
C.kp(r,10,12,460,830,t,3.2)
C.kp(r,18,20,444,814,s,1.2)
C.kp(r,24,26,432,802,t,1.8)
C.fTU(r,!0,!1,t,s,4279378237,38,10,12)
for(w=56;w<424;w+=18){C.kD(r,w,16,3,t,!0)
C.kD(r,w,838,3,t,!0)}for(w=56;w<798;w+=22){C.kD(r,16,w,3,t,!0)
C.kD(r,464,w,3,t,!0)}return r},
hLc(){var w,v,u,t=null,s=4294966776,r=4291404327,q=4282000405,p=B.hl(t,t,A.c9,0,A.e0,854,t,0,3,t,A.c9,480,!1)
C.y5(p,s,4294373080)
C.rB(p,s)
C.kp(p,16,18,448,818,r,2.4)
C.kp(p,24,26,432,802,4286209044,1)
w=new C.fab(p)
for(v=40;v<440;v+=16){w.$4(v,22,1,1)
w.$4(v,832,1,1)}for(u=44;u<810;u+=18){w.$4(22,u,1,1)
w.$4(458,u,-1,1)}C.fTU(p,!1,!0,r,q,q,34,16,18)
return p},
byt(d,e,f,g,h,i){B.iH(d,!0,C.fy(i),e,e+g,f,f+h)},
bzi(d,e,f,g,h,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
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
B.kF(d,!1,A.da,new B.Rq(i),null,A.cW,1,e,w,l,l)}},
hM2(d,e,f,g,h,i){var w,v,u,t,s,r,q
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
B.kF(d,!1,A.da,new B.qO(r),null,A.cW,1,e,s,t,t);++v}return}w=f+g-1
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
B.kF(d,!1,A.da,new B.qO(r),null,A.cW,1,t,t,f,s);++q}},
hM3(d,e){var w,v,u=null,t=B.hl(u,u,A.c9,0,A.e0,854,u,0,3,u,A.c9,480,!1)
for(w=0;w<854;w+=30)for(v=0;v<480;v+=30)C.hM2(t,v,w,30,D.cOl,(A.o.an(v,30)+A.o.an(w,30)&1)===0)
C.byt(t,44,44,392,766,d)
C.bzi(t,44,44,392,766,d,e)
C.rB(t,d)
C.kp(t,44,44,392,766,4292128567,2.2)
C.kp(t,50,50,380,754,4279898632,0.8)
return t},
hN7(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=null
switch(A.o.F(g,4)){case 0:C.kD(d,e,f,7,h,!0)
C.kD(d,e,f,3,h,!1)
break
case 1:w=e-7
v=f-7
u=e+7
t=f+7
B.kF(d,!0,A.da,C.fy(h),o,A.cW,1.6,w,u,v,t)
B.kF(d,!0,A.da,C.fy(h),o,A.cW,1.6,u,w,v,t)
break
case 2:for(w=e-8,v=e+8,u=h>>>16&255,t=h>>>8&255,s=h&255,r=-2;r<=2;++r){q=f+r*3
p=new Uint8Array(4)
p[0]=u
p[1]=t
p[2]=s
p[3]=255
B.kF(d,!0,A.da,new B.qO(p),o,A.cW,1.2,w,v,q,q)}break
default:B.kF(d,!0,A.da,C.fy(h),o,A.cW,1.5,e-8,e+8,f,f)
B.kF(d,!0,A.da,C.fy(h),o,A.cW,1.5,e,e,f-8,f+8)
B.kX(d,!0,A.da,C.fy(h),o,A.cW,2,e,f)}},
hN8(d,e){var w,v,u,t,s=null,r=B.hl(s,s,A.c9,0,A.e0,854,s,0,3,s,A.c9,480,!1)
B.iH(r,!0,C.fy(4284103196),0,479,0,853)
for(w=0,v=18;v<854;v+=32)for(u=18;u<480;u+=32,w=t){t=w+1
C.hN7(r,u,v,w,4292391514)}C.byt(r,46,46,388,762,d)
C.bzi(r,46,46,388,762,d,e)
C.rB(r,d)
C.kp(r,46,46,388,762,4291404327,1.8)
return r},
h9i(d,e,f,g){C.fni(d,!0,C.fy(g),16,e,f)
C.fni(d,!0,C.fy(g),11,e,f)
C.kD(d,e,f,6,g,!0)
B.kF(d,!0,A.da,C.fy(g),null,A.cW,1.3,e-14,e+14,f,f)
B.kF(d,!0,A.da,C.fy(g),null,A.cW,1.3,e,e,f-14,f+14)},
hI2(d,e){var w,v=null,u=4283051028,t=4292128567,s=B.hl(v,v,A.c9,0,A.e0,854,v,0,3,v,A.c9,480,!1)
B.iH(s,!0,C.fy(4280948752),0,479,0,853)
B.iH(s,!0,C.fy(u),0,479,0,78)
B.iH(s,!0,C.fy(u),0,479,776,853)
for(w=28;w<460;w+=44){C.h9i(s,w,39,t)
C.h9i(s,w,815,t)}C.byt(s,38,92,404,670,d)
C.bzi(s,38,92,404,670,d,e)
C.rB(s,d)
C.kp(s,38,92,404,670,t,1.8)
C.kp(s,45,99,390,656,4287322667,0.8)
return s},
hMz(d,e,f,g){var w,v,u,t,s,r,q,p,o
for(w=f-4,v=x.J,u=g>>>16&255,t=g>>>8&255,s=g&255,r=-2;r<=2;++r){q=e+r*9
p=B.a([new B.j9(e,f),new B.j9(q-5,w),new B.j9(q,f-(18-Math.abs(r)*3)),new B.j9(q+5,w)],v)
o=new Uint8Array(4)
o[0]=u
o[1]=t
o[2]=s
o[3]=255
B.a11(d,new B.qO(o),p)}B.kX(d,!0,A.da,C.fy(4292128567),null,A.cW,3,e,f)},
hMA(d,e){var w,v,u,t,s=null,r=4279196764,q=B.hl(s,s,A.c9,0,A.e0,854,s,0,3,s,A.c9,480,!1)
C.y5(q,4278931279,4292330394)
for(w=8;w<=34;w+=4){v=new Uint8Array(4)
v[0]=8
v[1]=56
v[2]=56
v[3]=255
B.kF(q,!0,A.da,new B.qO(v),s,A.cW,1.1,w,w,0,853)
v=479-w
u=new Uint8Array(4)
u[0]=8
u[1]=56
u[2]=56
u[3]=255
B.kF(q,!0,A.da,new B.qO(u),s,A.cW,1.1,v,v,0,853)}B.iH(q,!0,C.fy(r),0,479,0,70)
B.iH(q,!0,C.fy(r),0,479,798,853)
for(t=0;t<5;++t)C.hMz(q,70+t*85,48,4292128567)
C.byt(q,48,78,384,712,d)
C.bzi(q,48,78,384,712,d,e)
C.rB(q,d)
C.kp(q,48,78,384,712,4291404327,1.6)
return q},
hQR(d,e){var w,v,u,t=null,s=4279970378,r=B.hl(t,t,A.c9,0,A.e0,854,t,0,3,t,A.c9,480,!1)
B.iH(r,!0,C.fy(s),0,479,0,853)
for(w=10;w<854;w+=18)for(v=10;v<480;v+=18){C.kD(r,v,w,6,4293449648,!1)
u=new Uint8Array(4)
u[0]=232
u[1]=215
u[2]=176
u[3]=255
B.kX(r,!0,A.da,new B.qO(u),t,A.cW,1,v,w)}C.byt(r,40,40,400,774,d)
C.bzi(r,40,40,400,774,d,e)
C.rB(r,d)
C.kp(r,40,40,400,774,4291058750,2)
C.kp(r,48,48,384,758,s,0.8)
return r},
kM:function kM(d,e){this.a=d
this.b=e},
fx6:function fx6(d){this.a=d},
fx5:function fx5(d){this.a=d},
fab:function fab(d){this.a=d},
fxK(d){var w,v=d.a
A:{if("gazette"===v){w="The NGMY Gazette"
break A}if("chronicle"===v){w="The NGMY Chronicle"
break A}if("times"===v){w="The NGMY Times"
break A}if("daily"===v){w="The NGMY Daily"
break A}if("tabloid"===v){w="The Big NGMY"
break A}if("modern"===v){w="NGMY Digest"
break A}if("midnight"===v){w="The Midnight NGMY"
break A}w="The NGMY Herald"
break A}return w},
hN1(d){var w=d.length
if(w>3&&d[0]===137&&d[1]===80)return"image/png"
if(w>11&&d[8]===87&&d[9]===69)return"image/webp"
return"image/jpeg"},
fSv(d){var w,v,u,t=null,s=A.a.cJ(d,"{"),r=A.a.oo(d,"}")
if(s<0||r<=s)return t
try{w=A.R.aH(0,Ai.afW(A.a.ap(d,s,r+1)),t)
v=x.f.b(w)?B.a1(w,x.N,x.z):t
return v}catch(u){return t}},
aer(d,e){var w=0,v=B.j(x.N),u,t,s,r,q,p,o,n
var $async$aer=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(B.v4(null,""),$async$aer)
case 3:n=g
if(A.a.i(n).length===0)throw B.U("AI is not available right now. Please try again later.")
t=B.mZ(n)
if(e==null)s=A.hl
else{r=C.hN1(e)
s=B.a([new B.a_h(A.cS.gcv().aJ(e),r)],x.aD)}q=null,p=0
case 4:if(!(p<2)){w=6
break}w=7
return B.b(B.qF(t,d,s,E.ES),$async$aer)
case 7:o=g
r=o.b
if(r!=null&&A.a.i(r).length!==0){u=r
w=1
break}q=o.a
case 5:++p
w=4
break
case 6:throw B.U(q!=null&&B.Kr(q)?"No internet connection. Try again when you are online.":"The AI could not do that just now. Try again.")
case 1:return B.h(u,v)}})
return B.i($async$aer,v)},
bAX(d){return C.hZR(d)},
hZR(d){var w=0,v=B.j(x.b6),u,t=2,s=[],r,q,p,o,n,m
var $async$bAX=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
r='You are a professional Swahili newspaper editor and journalist: a native speaker from Tanzania or Kenya whose writing every Swahili reader finds natural, warm and correct.\nThe newspaper page below was written or translated by a machine, so it may sound stiff, foreign or word-for-word. Rewrite EVERY field so it reads as if a skilled native Swahili journalist wrote it first: natural, clear, correct and professional. Fix wrong grammar (noun classes, verb agreement, tenses), odd or invented words and any English sentence structure. Keep every fact, name and number and do not add facts. Keep the same fields and the same number of paragraphs. Write people\'s names with normal capitals, except KB PABLO QR.\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n\nPage: '+A.R.ao(d.ae(),null)+'\nReply with JSON only, with exactly the same fields: {"paper":"newspaper name","category":"ONE of COMMUNITY, TECHNOLOGY, BUSINESS, EDUCATION, WORLD NEWS, FEATURE","headline":"...","subhead":"...","byline":"By ...","caption":"one sentence about the picture","body":["paragraph 1","paragraph 2","paragraph 3","paragraph 4"],"pullQuote":"a short line from the story","sidebarTitle":"Did you know?","sidebarText":"two short sentences"}\n'
w=7
return B.b(C.aer(r,null),$async$bAX)
case 7:q=f
p=C.fSv(q)
if(p==null){u=d
w=1
break}o=d.aBj(p)
if(o.r.length===0||A.d.aI(o.r," ").length<A.d.aI(d.r," ").length*0.5){u=d
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
return B.i($async$bAX,v)},
hdb(d){var w,v=F.fUT(d)
v=B.aJ(v,"book","newspaper")
if(F.a1k(d)!=="sw"){w=B.af("swahili|kiswahili",!1,!1,!1,!1)
w=w.b.test(d)}else w=!0
w=w?'SWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n':""
return"- Write like a real newspaper: a strong headline (max 12 words), a subhead (max 25 words), a byline, then 4 or 5 paragraphs, about 330 to 400 words in all. Plain text only: no markdown, no emojis, no lists.\n- Use ONLY the facts in the knowledge above. Never invent numbers, prices, dates, awards, places or quotes. Do not put made-up words in anyone's mouth.\n- KB PABLO QR is the Founder, President and CEO of NGMY. Always write his name in capital letters.\n- Never mention secret or admin details, passwords or the price list.\n- STYLE: write like an experienced human newspaper journalist in the style of a quality wire service (Associated Press, Reuters): polished, precise, natural and professional. Open with the most important fact. Use the active voice, concrete nouns and strong verbs. Mix short and longer sentences. Plain, grown-up words.\n- NEVER sound like an AI. Do not use: delve, tapestry, testament, beacon, realm, landscape, journey, game-changer, groundbreaking, revolutionize, unlock, empower, seamless, vibrant, bustling, in today's fast-paced world, it is worth noting, not just X but Y, whether you are X or Y. No exclamation marks, no rhetorical questions, no lists of three adjectives, no filler, no hype, no dashes for drama. Every sentence must say something real.\n- Check spelling, grammar and punctuation. Names are written with normal capitals, except KB PABLO QR.\n"+v+w},
fBG(d,e,f,g){return C.i0I(d,e,f,g)},
i0I(d,e,f,g){var w=0,v=B.j(x.b6),u,t,s,r,q,p,o,n,m
var $async$fBG=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:o=C.fxK(g)
n=A.a.i(f)
if(n.length===0)n="Choose the most interesting true story about NGMY from what you know, and write it. Vary it: it can be about the app, the Civic Registry, the Advisors, the studios, or the CEO."
t=C.hgE()
s=e==null?"There is no picture yet: write the caption as a short line about the story.":"A PICTURE IS ATTACHED. Look at it. Mention what is really visible in the caption and weave it into the story. Do not say who the people in it are unless the owner told you."
m=C
w=3
return B.b(C.aer('You are the editor-in-chief of a newspaper called "'+o+'". Write its front-page story in the voice of '+g.at+".\n"+t+'\n\nWHAT THE OWNER ASKED FOR: """'+n+'"""\n'+s+"\nRules:\n"+C.hdb(n)+'\nReply with JSON only, in exactly this shape: {"paper":"newspaper name","category":"ONE of COMMUNITY, TECHNOLOGY, BUSINESS, EDUCATION, WORLD NEWS, FEATURE","headline":"...","subhead":"...","byline":"By ...","caption":"one sentence about the picture","body":["paragraph 1","paragraph 2","paragraph 3","paragraph 4"],"pullQuote":"a short line from the story","sidebarTitle":"Did you know?","sidebarText":"two short sentences"}\n',e),$async$fBG)
case 3:r=m.fSv(i)
if(r==null)throw B.U(y.S)
q=new C.z5(o,"NGMY NEWS","","","By the NGMY Newsroom","",A.T,"","","").aBj(r)
t=q.r
if(t.length===0)throw B.U("The AI did not write a story. Try again.")
s=n+" "+A.d.aI(t," ")
if(F.a1k(s)!=="sw"){p=B.af("swahili|kiswahili",!1,!1,!1,!1)
s=p.b.test(s)}else s=!0
u=s&&F.a1k(A.d.aI(t," "))==="sw"?C.bAX(q):q
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fBG,v)},
bAr(d,e,f,g,h){return C.hXt(d,e,f,g,h)},
hXt(d,e,f,g,h){var w=0,v=B.j(x.gX),u,t,s,r,q,p,o,n,m,l,k,j
var $async$bAr=B.e(function(i,a0){if(i===1)return B.f(a0,v)
for(;;)switch(w){case 0:l=B.a([],x.s)
k=e.length
k=k>6?A.d.fJ(e,k-6):e
t=k.length
s=0
for(;s<k.length;k.length===t||(0,B.L)(k),++s){r=k[s]
l.push(r.a+": "+r.b)}q=A.d.aI(l,"\n")
l=C.hgE()
k=A.R.ao(d.ae(),null)
t=q.length===0?"":"EARLIER IN THIS CONVERSATION:\n"+q+"\n"
j=C
w=3
return B.b(C.aer('You are the editor-in-chief of the newspaper "'+d.a+'", written in the voice of '+h.at+". The owner is talking to you about the page below. They may ask a question about NGMY or the page (just answer it), or ask you to change, add, shorten, rewrite or fix something (change ONLY that).\n"+l+"\n\nTHE PAGE NOW: "+k+"\n"+t+'\nTHE OWNER SAYS: """'+f+'"""\nRules:\n'+C.hdb(f)+'\n- Keep every part they did not mention exactly as it is. Keep the story about 330 to 400 words unless they ask for another length.\nReply with JSON only: {"message":"one or two friendly sentences: your answer, or what you changed","changes":{ ...only the fields you change, using the same names as the page... }}. For a pure question leave "changes" empty.\n',g),$async$bAr)
case 3:p=j.fSv(a0)
if(p==null)throw B.U(y.S)
o=p.h(0,"changes")
if(x.f.b(o)&&J.cx(o)){n=d.aBj(B.a1(o,x.N,x.z))
m=A.R.ao(n.ae(),null)!==A.R.ao(d.ae(),null)}else{n=d
m=!1}w=m&&F.a1k(A.d.aI(n.r," "))==="sw"?4:5
break
case 4:w=6
return B.b(C.bAX(n),$async$bAr)
case 6:n=a0
case 5:l=p.h(0,"message")
if(l==null)l=m?"Done.":"Okay."
u=new C.a78(A.a.i(B.t(l)),n,m)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bAr,v)},
a78:function a78(d,e,f){this.a=d
this.b=e
this.c=f},
i3p(d,e){return B.a5(d,!1).c6(B.e6(new C.fIv(e),!0,null,x.H))},
fIv:function fIv(d){this.a=d},
V1:function V1(d,e){this.c=d
this.a=e},
aCP:function aCP(d,e,f,g,h,i,j,k){var _=this
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
ee_:function ee_(d){this.a=d},
edZ:function edZ(){},
ee0:function ee0(d){this.a=d},
edY:function edY(d,e){this.a=d
this.b=e},
ee1:function ee1(){},
edC:function edC(d,e){this.a=d
this.b=e},
edy:function edy(d,e){this.a=d
this.b=e},
edJ:function edJ(d){this.a=d},
edK:function edK(d,e){this.a=d
this.b=e},
edL:function edL(d){this.a=d},
edE:function edE(d,e){this.a=d
this.b=e},
edF:function edF(d,e){this.a=d
this.b=e},
edG:function edG(d,e){this.a=d
this.b=e},
edH:function edH(d){this.a=d},
edI:function edI(d){this.a=d},
edD:function edD(d,e){this.a=d
this.b=e},
edA:function edA(d){this.a=d},
edB:function edB(d){this.a=d},
edR:function edR(d){this.a=d},
edS:function edS(d){this.a=d},
edQ:function edQ(d){this.a=d},
edT:function edT(d,e){this.a=d
this.b=e},
edP:function edP(d,e){this.a=d
this.b=e},
edU:function edU(d){this.a=d},
edO:function edO(d){this.a=d},
edV:function edV(d){this.a=d},
edN:function edN(d){this.a=d},
edW:function edW(d,e){this.a=d
this.b=e},
edM:function edM(d,e){this.a=d
this.b=e},
edX:function edX(d){this.a=d},
edz:function edz(d,e){this.a=d
this.b=e},
fwG(){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o
var $async$fwG=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if($.haN){w=1
break}r=new C.fwH()
t=4
q=x.s
w=7
return B.b(B.iJ(B.a([r.$2("NgmyBlackletter",B.a(["UnifrakturCook-Bold.ttf"],q)),r.$2("NgmyOldStandard",B.a(["OldStandard-Regular.ttf","OldStandard-Bold.ttf","OldStandard-Italic.ttf"],q)),r.$2("NgmyAbril",B.a(["AbrilFatface-Regular.ttf"],q))],x.fG),x.H),$async$fwG)
case 7:$.haN=!0
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
return B.i($async$fwG,v)},
bAO(d){return A.GF[B.mr(d)-1]+", "+A.oN[B.bG(d)-1]+" "+B.bQ(d)+", "+B.by(d)},
hPX(d){var w,v,u,t,s
for(w="",v=0;v<13;++v){u=D.dbW[v]
t=u.a
s=u.b
while(d>=t){w+=s
d-=t}}return w},
fVh(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j={},i=x.s,h=B.a([],i)
for(w=0;w<d.length;++w){v=A.a.fz(d[w],B.af("[ \\t]+",!0,!1,!1,!1))
A.d.v(h,new B.a2(v,new C.fuZ(),B.T(v).k("a2<1>")))
if(w<d.length-1)h.push("\n\n")}u=B.a([],i)
j.a=0
for(i=f.length,t=0;t<f.length;f.length===i||(0,B.L)(f),++t){s={}
v=f[t]
s.a=s.b=null
r=v.a
s.b=r
q=v.b
s.a=q
v=j.a
p=h.length
if(v>=p||r<20||q<20){u.push("")
continue}o=new C.fv0(j,h)
n=new C.fv_(s,o,e)
m=p-v
for(l=0;l<m;){k=A.o.an(l+m+1,2)
if(n.$1(k))l=k
else m=k-1}u.push(l===0?"":J.iS(o.$1(l)))
j.a+=l}return u},
fSf(d,e){var w=new C.f9N()
return A.d.cI(e,0,new C.f9L(w))>=A.d.cI(d,0,new C.f9M(w))},
h7Y(d){var w,v,u=new B.aQ($.X().r,A.ap,null,null,B.a([],x.v))
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
z5:function z5(d,e,f,g,h,i,j,k,l,m){var _=this
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
caI:function caI(d){this.a=d},
caG:function caG(){},
caH:function caH(){},
t3:function t3(d,e){this.a=d
this.b=e},
B_:function B_(d,e){this.a=d
this.b=e},
l9:function l9(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var _=this
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
fwH:function fwH(){},
fuZ:function fuZ(){},
fv0:function fv0(d,e){this.a=d
this.b=e},
fv_:function fv_(d,e,f){this.a=d
this.b=e
this.c=f},
f9N:function f9N(){},
f9O:function f9O(){},
f9L:function f9L(d){this.a=d},
f9M:function f9M(d){this.a=d},
b_n:function b_n(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
caJ:function caJ(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
caK:function caK(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
caL:function caL(d){this.a=d},
baR:function baR(d){this.a=d},
baQ:function baQ(d,e){this.b=d
this.a=e},
bsj:function bsj(d){this.a=d},
b7n:function b7n(d,e){this.b=d
this.a=e},
bpQ:function bpQ(d,e){this.b=d
this.a=e},
hiy(d,e){return B.a5(d,!1).c6(B.e6(new C.fIy(e,null),!0,null,x.E))},
fIy:function fIy(d,e){this.a=d
this.b=e},
V4:function V4(d,e,f){this.c=d
this.d=e
this.a=f},
aCT:function aCT(){var _=this
_.d=null
_.e=0
_.f=1
_.w=_.r=0.5
_.x=1
_.y=!1
_.c=_.a=null},
efa:function efa(){},
efb:function efb(d){this.a=d},
ef9:function ef9(d,e){this.a=d
this.b=e},
eeY:function eeY(d){this.a=d},
eeZ:function eeZ(d){this.a=d},
ef4:function ef4(d){this.a=d},
ef5:function ef5(d,e){this.a=d
this.b=e},
ef2:function ef2(d){this.a=d},
ef3:function ef3(d,e,f){this.a=d
this.b=e
this.c=f},
ef_:function ef_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ef6:function ef6(d,e){this.a=d
this.b=e},
ef1:function ef1(d,e){this.a=d
this.b=e},
ef7:function ef7(d){this.a=d},
ef0:function ef0(d,e){this.a=d
this.b=e},
ef8:function ef8(d,e){this.a=d
this.b=e},
ban:function ban(d,e,f){this.b=d
this.c=e
this.a=f},
i3v(d){return B.a5(d,!1).c6(B.e6(new C.fIO(),!0,null,x.I))},
bye(d,e){var w,v,u,t,s,r,q=B.c2(20,0,!1,x.gR)
for(w=0;w<4;++w)for(v=w*5,u=v+4,t=0;t<5;++t){for(s=0,r=0;r<4;++r)s+=d[v+r]*e[r*5+t]
if(t===4)s+=d[u]
q[v+t]=s}return q},
fTD(d,e,f,g){return B.a([d,0,0,0,e,0,d,0,0,f,0,0,d,0,g,0,0,0,1,0],x.x)},
fIO:function fIO(){},
a_a:function a_a(d){this.a=d},
oo:function oo(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
aEf:function aEf(d,e,f,g,h,i,j,k,l){var _=this
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
_.aG=_.aN=_.aE=_.az=_.Z=_.b5=_.bi=_.y2=0
_.b3=null
_.b1=0.25
_.bb=null
_.bK=0.5
_.aR=1
_.c8=_.bT=_.bj=0
_.cW=_.cT=!1
_.c=_.a=null},
eOp:function eOp(d){this.a=d},
eNh:function eNh(d,e){this.a=d
this.b=e},
eNF:function eNF(d,e){this.a=d
this.b=e},
eNP:function eNP(d){this.a=d},
eN0:function eN0(d){this.a=d},
eN1:function eN1(d){this.a=d},
eMZ:function eMZ(d){this.a=d},
eN_:function eN_(d){this.a=d},
eNy:function eNy(d,e){this.a=d
this.b=e},
eNz:function eNz(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eNL:function eNL(d,e,f){this.a=d
this.b=e
this.c=f},
eNK:function eNK(d,e){this.a=d
this.b=e},
eNM:function eNM(d,e){this.a=d
this.b=e},
eNJ:function eNJ(d,e){this.a=d
this.b=e},
eNO:function eNO(d,e,f){this.a=d
this.b=e
this.c=f},
eNN:function eNN(d,e){this.a=d
this.b=e},
eMR:function eMR(d){this.a=d},
eMS:function eMS(d){this.a=d},
eMT:function eMT(d){this.a=d},
eMQ:function eMQ(){},
eMU:function eMU(d,e){this.a=d
this.b=e},
eMP:function eMP(d,e){this.a=d
this.b=e},
eMW:function eMW(){},
eMV:function eMV(d,e){this.a=d
this.b=e},
eMO:function eMO(d,e){this.a=d
this.b=e},
eML:function eML(d,e){this.a=d
this.b=e},
eMX:function eMX(d){this.a=d},
eMN:function eMN(d,e){this.a=d
this.b=e},
eMY:function eMY(d){this.a=d},
eMM:function eMM(d,e){this.a=d
this.b=e},
eOe:function eOe(d,e){this.a=d
this.b=e},
eOl:function eOl(d){this.a=d},
eOm:function eOm(d,e){this.a=d
this.b=e},
eOn:function eOn(){},
eOf:function eOf(d,e){this.a=d
this.b=e},
eOd:function eOd(d,e){this.a=d
this.b=e},
eOg:function eOg(d,e){this.a=d
this.b=e},
eOc:function eOc(d,e){this.a=d
this.b=e},
eOh:function eOh(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eOb:function eOb(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eOi:function eOi(d){this.a=d},
eOj:function eOj(d,e){this.a=d
this.b=e},
eOk:function eOk(d){this.a=d},
eOa:function eOa(d){this.a=d},
eNY:function eNY(d){this.a=d},
eNZ:function eNZ(d){this.a=d},
eNX:function eNX(d,e){this.a=d
this.b=e},
eNS:function eNS(d,e){this.a=d
this.b=e},
eO_:function eO_(d){this.a=d},
eO2:function eO2(d){this.a=d},
eNW:function eNW(d){this.a=d},
eO3:function eO3(d){this.a=d},
eO4:function eO4(d){this.a=d},
eO5:function eO5(d){this.a=d},
eO6:function eO6(d){this.a=d},
eNV:function eNV(d){this.a=d},
eO7:function eO7(d){this.a=d},
eNU:function eNU(d){this.a=d},
eO8:function eO8(d,e){this.a=d
this.b=e},
eNT:function eNT(d,e){this.a=d
this.b=e},
eO9:function eO9(d){this.a=d},
eO0:function eO0(d){this.a=d},
eO1:function eO1(d){this.a=d},
eNC:function eNC(d){this.a=d},
eNB:function eNB(d){this.a=d},
eND:function eND(d,e){this.a=d
this.b=e},
eNA:function eNA(d,e){this.a=d
this.b=e},
eNE:function eNE(d){this.a=d},
eNu:function eNu(d){this.a=d},
eNt:function eNt(d){this.a=d},
eNv:function eNv(d){this.a=d},
eNs:function eNs(d){this.a=d},
eNw:function eNw(d,e){this.a=d
this.b=e},
eNr:function eNr(d,e){this.a=d
this.b=e},
eNq:function eNq(d,e){this.a=d
this.b=e},
eN8:function eN8(d){this.a=d},
eN9:function eN9(d){this.a=d},
eNa:function eNa(d){this.a=d},
eNb:function eNb(d){this.a=d},
eNc:function eNc(d){this.a=d},
eNd:function eNd(d){this.a=d},
eNe:function eNe(d){this.a=d},
eNf:function eNf(d){this.a=d},
eNg:function eNg(d){this.a=d},
eMu:function eMu(d){this.a=d},
eMv:function eMv(d){this.a=d},
eMw:function eMw(d){this.a=d},
eMx:function eMx(d){this.a=d},
eMy:function eMy(d){this.a=d},
eMt:function eMt(d){this.a=d},
eMz:function eMz(d){this.a=d},
eMA:function eMA(d){this.a=d},
eN2:function eN2(d){this.a=d},
eN3:function eN3(d){this.a=d},
eN4:function eN4(d){this.a=d},
eN5:function eN5(d){this.a=d},
eN6:function eN6(d){this.a=d},
eME:function eME(d){this.a=d},
eMF:function eMF(d){this.a=d},
eMG:function eMG(d){this.a=d},
eMH:function eMH(d){this.a=d},
eMI:function eMI(d){this.a=d},
eMD:function eMD(d){this.a=d},
eMJ:function eMJ(d){this.a=d},
eMC:function eMC(d){this.a=d},
eMK:function eMK(d){this.a=d},
eMB:function eMB(d){this.a=d},
eNx:function eNx(d){this.a=d},
eNp:function eNp(d){this.a=d},
eNl:function eNl(d){this.a=d},
eNk:function eNk(d){this.a=d},
eNm:function eNm(d,e){this.a=d
this.b=e},
eNj:function eNj(d,e){this.a=d
this.b=e},
eNn:function eNn(d,e){this.a=d
this.b=e},
eNi:function eNi(d,e){this.a=d
this.b=e},
eNo:function eNo(d){this.a=d},
eNI:function eNI(d){this.a=d},
eNH:function eNH(d,e,f){this.a=d
this.b=e
this.c=f},
eNG:function eNG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eNR:function eNR(d,e){this.a=d
this.b=e},
eNQ:function eNQ(d,e){this.a=d
this.b=e},
eN7:function eN7(d){this.a=d},
eOo:function eOo(d){this.a=d},
bdV:function bdV(d,e){this.b=d
this.a=e},
i_1(d){var w=A.a.i(d).length
if(w<=40)return 66
if(w<=80)return 54
if(w<=140)return 44
if(w<=220)return 36
return 30},
i_2(d,e){var w,v,u,t,s,r,q,p,o,n=B.af("\\S+",!0,!1,!1,!1).kR(0,d),m=B.B(n,B.a4(n).k("J.E"))
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
v=t.index+t[0].length}n=w.a=n+A.a.b0(d,v)
return n.charCodeAt(0)==0?n:n},
byP(){var w=$.bxX,v=$.PK
$.PK=v+1
return w+"_"+v},
i6(d,e,f,g,h,i,j){return C.en(A.bg,!1,4279310375,A.aD,"",i,24,A.bl,A.a4,"",h,C.byP(),null,"","",0,!1,"",j,d,i,0,"",0,0,"",D.cg,D.f_,g,e,f)},
nO(d,e,f,g){var w=f*9
return C.i6(D.eI,d-f/2,e-w/32,f,w/16,g,0)},
hJI(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=4279310375
switch(d.a){case 0:w=B.a([],x.u)
for(v=[0.12,0.26,0.4,0.54,0.68,0.82,0.94],u=e&16777215,t=u|855638016,s=0;s<7;++s){r=v[s]
q=$.bxX
p=$.PK
$.PK=p+1
w.push(new C.eI(q+"_"+p,D.f_,0,r,1,0.0016,"",24,A.a4,A.bl,A.aD,k,A.bg,null,D.be,t,t,0,0,!1,"",0,D.cg,0,"","","","","",!1,0))}for(v=[0.18,0.5,0.82],t=u|570425344,s=0;s<3;++s){o=v[s]
q=$.bxX
p=$.PK
$.PK=p+1
w.push(new C.eI(q+"_"+p,D.f_,o,0,0.004,1,"",24,A.a4,A.bl,A.aD,k,A.bg,null,D.be,t,t,0,0,!1,"",0,D.cg,0,"","","","","",!1,0))}w.push(C.nO(0.88,0.1,0.5,f&16777215|855638016))
w.push(C.nO(0.1,0.92,0.6,u|704643072))
return w
case 1:w=e&16777215
v=(w|2852126720)>>>0
u=f&16777215
t=(u|2852126720)>>>0
return B.a([C.i6(D.be,0.08,0.08,0.5,0.003,v,0),C.i6(D.be,0.58,0.08,0.004,0.06,v,0),C.i6(D.be,0.58,0.14,0.34,0.003,v,0),C.i6(D.be,0.92,0.14,0.004,0.08,(w|2281701376)>>>0,0),C.i6(D.be,0.08,0.8,0.004,0.14,t,0),C.i6(D.be,0.08,0.94,0.6,0.003,t,0),C.nO(0.58,0.08,0.05,e),C.nO(0.92,0.22,0.05,e),C.nO(0.08,0.8,0.05,f),C.nO(0.68,0.94,0.05,f),C.nO(0.9,0.9,0.55,u|570425344)],x.u)
case 2:w=e&16777215
v=f&16777215
return B.a([C.i6(D.kT,0.62,0.04,0.34,0.2,w|855638016,0.2),C.i6(D.kT,0.02,0.74,0.42,0.24,v|771751936,-0.15),C.i6(D.kT,0.7,0.8,0.22,0.12,w|1140850688,0),C.i6(D.kT,0.05,0.05,0.16,0.09,v|1426063360,0)],x.u)
case 3:w=e&16777215
v=f&16777215
return B.a([C.nO(0.5,0.5,1.5,w|335544320),C.nO(0.5,0.5,1.15,w|402653184),C.nO(0.5,0.5,0.8,v|436207616),C.nO(0.95,0.05,0.4,v|855638016),C.nO(0.05,0.97,0.5,w|704643072)],x.u)
case 4:w=e&16777215
v=f&16777215
return B.a([C.nO(0.85,0.08,0.7,w|1140850688),C.nO(0.1,0.35,0.5,v|855638016),C.nO(0.9,0.62,0.55,v|771751936),C.nO(0.15,0.95,0.8,w|939524096)],x.u)
case 5:w=e&16777215
v=f&16777215
return B.a([C.i6(D.be,-0.1,0.7,1.2,0.06,w|671088640,-0.04),C.i6(D.be,-0.1,0.78,1.2,0.07,v|872415232,0.035),C.i6(D.be,-0.1,0.86,1.2,0.08,w|1073741824,-0.03),C.i6(D.be,-0.1,0.94,1.2,0.1,v|1426063360,0.02),C.nO(0.85,0.12,0.3,v|855638016)],x.u)
case 6:w=e&16777215
return B.a([C.nO(0.5,0.2,0.65,(w|3422552064)>>>0),C.nO(0.5,0.2,0.95,w|855638016),C.i6(D.be,-0.05,0.84,1.1,0.2,2570782564,-0.02),C.i6(D.be,-0.05,0.9,1.1,0.14,3139312459,0.02)],x.u)
case 7:w=e&16777215
return B.a([C.i6(D.jD,-0.1,0.78,0.7,0.2,w|1426063360,0),C.i6(D.jD,0.35,0.74,0.8,0.24,f&16777215|1711276032,0),C.i6(D.jD,0.15,0.86,0.6,0.14,1712265002,0),C.nO(0.82,0.1,0.22,(w|2852126720)>>>0)],x.u)
case 8:w=B.a([],x.u)
for(n=0;n<16;++n){v=D.cPG[n]
u=A.o.F(n,3)===0
t=u?0.035:0.02
q=(n&1)===0?e:f
q=((u?255:170)<<24|q&16777215)>>>0
p=t*9
m=$.bxX
l=$.PK
$.PK=l+1
w.push(new C.eI(m+"_"+l,D.f_,v.a-t/2,v.b-p/32,t,p/16,"",24,A.a4,A.bl,A.aD,k,A.bg,null,D.eI,q,q,0,0,!1,"",0,D.cg,0,"","","","","",!1,0))}w.push(C.nO(0.85,0.12,0.35,f&16777215|570425344))
return w
case 9:w=e&16777215
v=f&16777215|570425344
return B.a([C.i6(D.jD,0.35,-0.1,0.3,0.62,w|855638016,0),C.i6(D.jD,0.05,-0.1,0.3,0.55,v,-0.5),C.i6(D.jD,0.65,-0.1,0.3,0.55,v,0.5),C.nO(0.5,0.04,0.45,w|1711276032)],x.u)
case 10:w=(f&16777215|2281701376)>>>0
return B.a([C.i6(D.be,0.06,0.04,0.88,0.002,e,0),C.i6(D.be,0.06,0.96,0.88,0.002,e,0),C.i6(D.be,0.06,0.04,0.004,0.92,e,0),C.i6(D.be,0.936,0.04,0.004,0.92,e,0),C.i6(D.be,0.09,0.07,0.82,0.001,w,0),C.i6(D.be,0.09,0.93,0.82,0.001,w,0)],x.u)
case 11:w=e&16777215
return B.a([C.i6(D.jE,-0.1,0.05,0.7,0.12,w|855638016,-0.1),C.i6(D.jE,0.45,0.78,0.7,0.1,f&16777215|1073741824,-0.1),C.i6(D.jE,-0.1,0.9,0.6,0.06,w|1426063360,-0.1)],x.u)
case 12:w=f&16777215
v=e&16777215
return B.a([C.i6(D.be,0,0,0.3,0.09,w|1140850688,0),C.i6(D.be,0.7,0.9,0.3,0.1,v|1426063360,0),C.i6(D.be,0.82,0.04,0.12,0.07,w|771751936,0),C.i6(D.be,0.04,0.82,0.18,0.08,v|855638016,0)],x.u)
case 13:w=e&16777215
v=w|1140850688
u=f&16777215|1140850688
return B.a([C.i6(D.eI,0.62,0.02,0.5,0.16,v,0.6),C.i6(D.eI,0.78,0.12,0.4,0.12,u,0.9),C.i6(D.eI,-0.12,0.8,0.5,0.16,u,-0.6),C.i6(D.eI,-0.05,0.9,0.4,0.12,v,-0.9),C.nO(0.9,0.9,0.3,w|855638016)],x.u)
case 14:w=f&16777215|1711276032
return B.a([C.i6(D.be,0.09,0.12,0.16,0.006,e,0),C.i6(D.be,0.05,0.03,0.9,0.001,w,0),C.i6(D.be,0.05,0.97,0.9,0.001,w,0)],x.u)}},
hWx(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3){var w,v,u,t,s,r,q,p,o,n=4279310375,m=4280640491,l=4280172719
$.bxX=j
$.PK=0
w=A.a.i(a6)
if(w.length===0)w=d.y
v=A.a.i(f)
u=b1==null?d.x:b1
t=new C.fsn()
s=b3?0:d.e
r=b3?0:d.f
q=B.a([],x.u)
if(g!=null&&g.length!==0)q.push(C.en(A.bg,!1,n,A.aD,"ngmy_quote_background",m,24,A.bl,A.a4,"",1,C.byP(),g,"","",0,!1,"",0,D.be,l,2,"",0,0,"",D.cg,D.lk,1,0,0))
if(a9)A.d.v(q,C.hJI(d.d,d.r,d.w))
if(a7)q.push(t.$9$align$weight("\u201c",0.08,A.k.D(a8-0.13,0,1),0.84,0.1,200,d.r,e,A.u))
p=B.af("[*~^]",!0,!1,!1,!1)
p=C.i_1(B.aJ(w,p,""))
o=A.a.t(w,B.af("[*^]",!0,!1,!1,!1))?0.85:1
q.push(new C.fsm(a8,h,k,e,b2,i).$3(w,p*b0*o,u))
if(v.length!==0)q.push(t.$10$align$style$weight("\u2014 "+v,0.09,A.k.D(a8+0.39,0,0.9),0.82,0.05,30,(u&16777215|3707764736)>>>0,e,A.cD,A.a4))
p=u&16777215
q.push(t.$8$weight("NGMY",0.3,0.925,0.4,0.028,22,(p|3003121664)>>>0,A.u))
q.push(t.$8$weight("New Global Movement for Youth",0.1,0.96,0.8,0.025,14,(p|2566914048)>>>0,A.a4))
if(a0!=null&&a0.length!==0)q.push(C.en(A.bg,!1,n,A.aD,"ngmy_quote_logo",m,24,A.bl,A.a4,a1,a3*9/16,C.byP(),a0,"","",0,!1,a2,0,D.be,l,2,"",0,0,"",D.cg,D.lk,a3,a4,a5))
return C.rh(s,r,0,0,q,j+"_slide",D.pZ,"","","",D.dd)},
rg:function rg(d,e){this.a=d
this.b=e},
lZ:function lZ(d,e,f,g,h,i,j,k,l,m){var _=this
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
fsn:function fsn(){},
fsm:function fsm(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
hzP(d){var w,v,u,t,s
if(!x.f.b(d))return null
w=J.a8(d)
v=B.bi(B.t(w.h(d,"at")))
u=w.h(d,"outline")
t=B.t(u==null?"":u)
if(v==null||t.length===0)return null
u=x.j
if(u.b(w.h(d,"extras"))){u=J.b6(u.a(w.h(d,"extras")),new C.cc4(),x.N)
s=B.B(u,u.$ti.k("aj.E"))}else s=B.a([],x.s)
u=v.bS()
w=w.h(d,"request")
return new C.z7(u,t,s,B.t(w==null?"":w))},
fA3(){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$fA3=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if($.hba){w=1
break}$.hba=!0
t=4
w=7
return B.b(B.az(),$async$fA3)
case 7:r=e
q=B.aU(J.q(r.a,"ngmy_slides_ai_history_v1"))
if(q==null||q.length===0){w=1
break}p=A.R.aH(0,q,null)
if(!x.f.b(p)){w=1
break}for(k=J.js(p),k=k.gaf(k),j=x.j,i=x.o;k.C();){o=k.gU(k)
n=B.a([],i)
if(j.b(o.b))for(h=J.aW(j.a(o.b));h.C();){m=h.gU(h)
l=C.hzP(m)
if(l!=null)J.cf(n,l)}$.Ce.ck(0,B.t(o.a),new C.fA4(n))}C.fTj()
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
return B.i($async$fA3,v)},
fTj(){var w,v=new B.S(Date.now(),0,!1).bP(-12e8)
for(w=new B.dt($.Ce,$.Ce.r,$.Ce.e);w.C();)J.nj(w.d,new C.fgU(v))
$.Ce.bm($.Ce,new C.fgV())},
aMN(){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$aMN=B.e(function(d,a0){if(d===1){t.push(a0)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$aMN)
case 6:s=a0
m=x.N
l=x.z
r=B.V(m,l)
for(k=new B.cJ($.Ce,B.a4($.Ce).k("cJ<1,2>")).gaf(0),j=x.d;k.C();){i=k.d
i.toString
q=i
i=q.a
p=B.a([],j)
for(h=J.aW(q.b);h.C();){o=h.gU(h)
g=o
J.cf(p,B.F(["at",g.a.a6().ac(),"outline",g.b,"extras",g.c,"request",g.d],m,l))}J.aG(r,i,p)}n=r
w=7
return B.b(s.ar("String","ngmy_slides_ai_history_v1",A.R.ao(n,null)),$async$aMN)
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
return B.i($async$aMN,v)},
i_D(d,e,f,g){var w,v,u
if(d.length===0||A.a.i(f).length===0)return
C.fTj()
w=$.Ce.ck(0,d,new C.fA6())
v=Date.now()
u=B.B(e,B.a4(e).k("cm.E"))
J.pm(w,0,new C.z7(new B.S(v,0,!1),f,u,g))
C.aMN()},
i_A(d){var w,v=$.Ce.h(0,d)
if(v==null||J.ck(v))return
w=J.cE(v)
w.cA(v,0)
if(w.gam(v))$.Ce.W(0,d)
C.aMN()},
z7:function z7(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cc4:function cc4(){},
fA4:function fA4(d){this.a=d},
fgU:function fgU(d){this.a=d},
fgV:function fgV(){},
fA6:function fA6(){},
i_F(d){return A.d.dM(D.vK,new C.fA9(d),new C.fAa())},
hzN(d){var w
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
hzM(d){var w
switch(d.a){case 0:w=D.ajX
break
case 1:w=A.y0
break
case 2:w=A.al4
break
case 3:w=I.ajA
break
case 4:w=A.aks
break
case 5:w=A.lM
break
default:w=null}return w},
hMF(d){var w,v,u,t=A.a.i(d).toLowerCase()
if(t.length===0)return null
for(w=0;w<109;++w){v=D.Pg[w]
if(v.toLowerCase()===t)return v}for(w=0;w<109;++w){v=D.Pg[w]
if(!B.dr(v.toLowerCase(),t,0))u=B.dr(t,v.toLowerCase(),0)
else u=!0
if(u)return v}return null},
hzO(d){var w,v,u,t,s,r,q,p,o=B.a([],x.ez)
for(w=d.c,v=w.length,u=x.N,t=x.C,s=0;s<w.length;w.length===v||(0,B.L)(w),++s){r=w[s]
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
o.push(q)}return A.R.ao(B.F(["title",d.a,"style",d.b,"logo_frame",d.d,"logo_ring",d.e,"photo_frame",d.f,"photo_ring",d.r,"slides",o],u,t),null)},
i_B(d,e,f,g,h){var w=new B.K(D.vK,new C.fA2(),x.eC).aI(0,", "),v=""+d,u=C.hgw(h),t=F.ftM(h),s=C.hcM(g),r=e.t(0,D.HA)?'- New slides get an "emoji".\n':"",q=e.t(0,D.HB)?'- New slides get an "icon3d" from: '+A.d.aI(D.Pg,", ")+".\n":"",p=e.t(0,D.Cl)?'- New content slides get an "image_query" (2-3 English words).\n':""
return"You edit an existing presentation. Here it is as JSON:\n"+f+"\n\nThe presenter is looking at slide "+v+'.\n\nWHAT THEY WANT CHANGED (may be informal):\n"""'+h+'"""\n\nRules:\n- Do exactly what they ask: add, remove, move, shorten, lengthen or rewrite slides, change the tone, the language or the style ('+w+'). "This slide" / "here" means slide '+v+". New slides go where they say (or right after slide "+v+').\n- Keep every slide they did not ask about exactly as it is.\n- Same limits as before: titles max 7 words, 3 to 5 bullets of max 12 words, never invent prices, dates or statistics.\n- LANGUAGE: keep the presentation\'s current language unless they ask for another one; if they do, translate EVERY slide. JSON keys and the "kind", "style", "icon3d" and "image_query" values stay in English.\n- TRANSLATING OR REWORDING: change only the words. Keep "style", "kind", "emoji", "icon3d", "image_query", "picture" and the frame/ring values exactly as they are, with the same number of slides and bullets.\n- VOICE: write the way a real, friendly person talks and writes to someone they respect. Short plain sentences. Everyday words that people really use today. No corporate or robotic phrasing ("leverage", "synergy", "empower the ecosystem", "in today\'s dynamic landscape"), no made-up or rare words, no stacked jargon, no lecture tone. Explain the Civic registry, the AI, and any other topic the way you would explain it to a neighbour. If the language is Swahili, use the Swahili people speak and write every day in Kenya and Tanzania: real common words, natural word order, and never an English word forced into Swahili grammar or an invented Swahili word. Check that each word is one an ordinary speaker would understand.\n'+u+"\n"+t+'\n- Keep "logo_frame", "logo_ring", "photo_frame" and "photo_ring" unless they ask to change how the logo or pictures look.\n- PICTURE LOOK: "logo_frame" and "photo_frame" are one of: circle, rounded, triangle, hexagon, diamond, arch, or "" (as is). "logo_ring" and "photo_ring" are one of: gold, platinum, glow, rainbow, double, neon, framed, rosegold, jewels, aurora, or "" (none). Follow what the request says (e.g. "my picture in a circle with a gold ring"); if it says nothing, choose what suits the look (luxury \u2192 gold, neon/night \u2192 neon, clean \u2192 rounded with no ring).\n- BIO LINK: if they ask to put their bio link / link page / socials / "my links" in the presentation, add ONE slide with kind "bio" (title like "Connect with me", a one-line inviting subtitle) \u2014 usually just before the closing slide, or where they say. Their real Bio page (with clickable links) is shown on a phone on that slide.\n'+s+"\n"+r+q+p+'- Reply with the WHOLE presentation as JSON only, no markdown, same shape:\n{"title":"...","style":"...","logo_frame":"","logo_ring":"","photo_frame":"","photo_ring":"","slides":[{"kind":"...","title":"...","subtitle":"...","bullets":[],"notes":"...","emoji":"","icon3d":"","image_query":""}]}\n'},
i_C(d,e,f,g,h,i){var w,v,u,t,s='- "emoji": ONE emoji that fits the slide (e.g. \ud83c\udf89 \ud83d\ude80 \ud83c\udf3f \ud83d\udca1).\n',r=f?"- A document is attached (read it all). Rewrite its content as the slides in the same language: keep its facts, names, numbers, dates and the order of its sections, and never invent facts it does not contain.\n":"",q=new B.K(D.vK,new C.fA5(),x.eC).aI(0,", "),p=new B.fd("")
if(e.t(0,D.HA)){p.a=s
w=s}else w=""
if(e.t(0,D.HB))w=p.a=w+('- "icon3d": ONE name copied exactly from this list that fits the slide: '+A.d.aI(D.Pg,", ")+".\n")
if(e.t(0,D.Cl))p.a=w+'- "image_query": 2-3 simple English words for a real photo that fits the slide (e.g. "city skyline", "students classroom").\n'
w=C.hgw(d)
v=F.ftM(d)
u=C.hcM(g)
t=i==="auto"?"pick the best of: "+q+" (match the mood they describe: nature, vibe, celebration, colorful, professional...)":'use "'+i+'"'
return'You design presentation slides. Write a presentation from the user\'s request.\n\nUSER REQUEST (spoken, may be informal):\n"""'+d+'"""\n\nRules:\n'+r+"- Exactly "+h+' slides.\n- Slide 1 has kind "title". The last slide has kind "closing" (thank-you / call to action).\n- Middle slides mostly kind "bullets" (3 to 5 short bullets, max 12 words each). You may use one "section" divider and one "quote" slide when it fits.\n- Titles are short and punchy (max 7 words). Use the user\'s own names, facts and details; never invent prices, dates or statistics they did not give.\n- "notes": 1-2 sentences the presenter can say.\n- LANGUAGE: if the request names a language (e.g. "in Swahili", "en fran\xe7ais", "en espa\xf1ol", "in Arabic"), write EVERY title, subtitle, bullet and note in that language, with correct spelling and accents. If no language is named, write in the language the request itself is written in. Keep the JSON keys and the "kind", "style", "icon3d" and "image_query" values in English.\n- VOICE: write the way a real, friendly person talks and writes to someone they respect. Short plain sentences. Everyday words that people really use today. No corporate or robotic phrasing ("leverage", "synergy", "empower the ecosystem", "in today\'s dynamic landscape"), no made-up or rare words, no stacked jargon, no lecture tone. Explain the Civic registry, the AI, and any other topic the way you would explain it to a neighbour. If the language is Swahili, use the Swahili people speak and write every day in Kenya and Tanzania: real common words, natural word order, and never an English word forced into Swahili grammar or an invented Swahili word. Check that each word is one an ordinary speaker would understand.\n'+w+"\n"+v+'\n- PICTURE LOOK: "logo_frame" and "photo_frame" are one of: circle, rounded, triangle, hexagon, diamond, arch, or "" (as is). "logo_ring" and "photo_ring" are one of: gold, platinum, glow, rainbow, double, neon, framed, rosegold, jewels, aurora, or "" (none). Follow what the request says (e.g. "my picture in a circle with a gold ring"); if it says nothing, choose what suits the look (luxury \u2192 gold, neon/night \u2192 neon, clean \u2192 rounded with no ring).\n- BIO LINK: if they ask to put their bio link / link page / socials / "my links" in the presentation, add ONE slide with kind "bio" (title like "Connect with me", a one-line inviting subtitle) \u2014 usually just before the closing slide, or where they say. Their real Bio page (with clickable links) is shown on a phone on that slide.\n'+u+'\n- "style": '+t+".\n"+p.u(0)+'- Reply with JSON only, no markdown, in this shape:\n{"title":"...","style":"...","logo_frame":"","logo_ring":"","photo_frame":"","photo_ring":"","slides":[{"kind":"title","title":"...","subtitle":"...","bullets":[],"notes":"...","emoji":"","icon3d":"","image_query":""}]}\n'},
agb(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=null,a2="bullets",a3=A.a.i(a6),a4=J.CF(a3,"{"),a5=J.fLL(a3,"}")
if(a4<0||a5<=a4)return a1
a3=J.KM(a3,a4,a5+1)
try{w=A.R.aH(0,a3,a1)
q=x.f
if(!q.b(w))return a1
v=J.q(w,"slides")
p=x.j
if(!p.b(v)||J.ck(v))return a1
u=B.a([],x.aC)
for(o=J.aW(v),n=x.s,m=x.N;o.C();){t=o.gU(o)
if(!q.b(t))continue
if(p.b(J.q(t,a2))){l=J.b6(p.a(J.q(t,a2)),new C.fy1(),m).c_(0,new C.fy2())
k=B.B(l,l.$ti.k("J.E"))}else k=B.a([],n)
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
f=C.hMF(B.t(f==null?"":f))
if(f==null)f=""
e=J.q(t,"image_query")
if(e==null)e=J.q(t,"imageQuery")
e=A.a.i(B.t(e==null?"":e))
d=J.q(t,"picture")
d=B.c7(B.t(d==null?0:d),a1)
if(d==null)d=0
J.cf(u,new C.a7g(l.toLowerCase(),j,i,s,h,g,f,e,d))}if(J.ad(u)===0)return a1
q=J.q(w,"style")
r=A.a.i(B.t(q==null?a7:q)).toLowerCase()
q=J.q(w,"title")
q=A.a.i(B.t(q==null?J.fo(u).b:q))
p=A.d.b7(D.vK,new C.fy3(r))?r:a7
o=C.fg8(J.q(w,"logo_frame"),D.BL)
n=C.fg8(J.q(w,"logo_ring"),D.BG)
m=C.fg8(J.q(w,"photo_frame"),D.BL)
l=C.fg8(J.q(w,"photo_ring"),D.BG)
return new C.aq0(q,p,u,o,n,m,l)}catch(a0){return a1}},
a0R(d,e){return(A.o.D(e,0,255)<<24|d&16777215)>>>0},
hfE(f9,g0,g1,g2,g3,g4,g5,g6,g7,g8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4=null,e5="title",e6="orb1",e7="drift",e8="orb2",e9="logo",f0="hero",f1="photo",f2="float3d",f3="bar",f4="pulse",f5="sub",f6=g2.t(0,D.Cm),f7=f6?C.hGq():e4,f8=f7==null
if(f8)w=e4
else{v=new B.eP()
v.dG(f7.w+1)
u=f7.a
t=B.bl(u.b,!0,x.dL)
A.d.fq(t,v)
s=u.c
s=new C.nB("luxe",u.a,A.lM,t,u.e,u.f,B.a([s,u.d,s],x.t),D.dd)
w=s}if(w==null)w=C.i_F(f9.b)
r=g2.t(0,D.a46)||f6
q=g2.t(0,D.HA)
p=g2.t(0,D.Rc)
o=new C.fsr()
n=B.a([],x.g)
m=new C.fsu(o,w,r)
l=new C.fst(o,r)
k=new C.fss(o,r)
j=(g3==null?"":g3).length!==0
u=f9.c
for(s=w.w,f8=!f8,i=g7==null,h=g6==null,g=f9.f,f=f9.r,e=g5==null,d=g4==null,a0=f9.d,a1=f9.e,a2=w.f,a3=w.d,a4=w.r,a5=x.u,a6=J.a8(g0),a7=!A.d.b7(u,new C.fsq(g8)),a8=g1==null,a9=x.s,b0=0,b1=0;b1<u.length;b1=b6){b2=u[b1]
b3=a3[A.o.F(b1,a3.length)]
b4=A.o.F(b1,3)
b5=a4[b4]
b6=b1+1
b7=a4[b6%3]
b8=A.o.F(b1,5)
b9=D.cRb[b8]
c0=D.cQ8[b8]
c1=B.a([],a5)
c2=a6.h(g0,b1)
c3=c2==null
c4=c3?e4:c2.a
c5=c3?e4:c2.b
c3=b2.x
c6=c3>0&&c3<=g8.length
if(c6)c5=g8[c3-1]
else if(g8.length!==0&&a7&&!D.eHd.t(0,b2.a)){c7=b0+1
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
c1.push(k.$8$anim$delay$key(g3,0.41,0.04,0.18,0.27,D.mv,450,e9))}else if(d0!=null){b4=d1?f0:f1
c1.push(k.$9$anim$delay$fx$key(d0,0.42,0.04,0.16,0.28,c0,500,d1?f2:"",b4))}else if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,0.4,0.04,0.2,0.24,64,A.L,D.q_,500,f2,f0))
c1.push(l.$8$fx$key(D.be,0.4,0.66,0.2,0.012,b5,f4,f3))
c1.push(m.$10$align$anim$key$weight(b2.b,0.08,0.33,0.84,0.3,54,A.L,b9,e5,A.u))
c1.push(m.$10$align$color$delay$key(b2.c,0.12,0.7,0.76,0.14,24,A.L,a2,300,f5))
d3=D.R9
break A}if("section"===d2){c1.push(l.$8$fx$key(D.eI,0.64,0.46,0.42,0.75,(A.o.D(42,0,255)<<24|b5&16777215)>>>0,e7,e6))
if(d0!=null){b4=!c3&&!d1?f1:f0
c1.push(k.$8$anim$fx$key(d0,0.7,0.2,0.24,0.44,c0,d1?f2:"",b4))}else c1.push(l.$9$fx$key$rotation(D.kT,0.78,0.1,0.18,0.32,(A.o.D(64,0,255)<<24|b7&16777215)>>>0,e7,e8,0.3))
c1.push(l.$8$fx$key(D.be,0.08,0.6,0.14,0.014,b5,f4,f3))
b4=b2.b
c1.push(m.$9$anim$key$weight(c8.length===0?b4:c8+"  "+b4,0.08,0.34,0.62,0.24,46,b9,e5,A.u))
c1.push(m.$9$color$delay$key(b2.c,0.08,0.64,0.6,0.14,22,a2,250,f5))
d3=D.Cj
break A}if("quote"===d2){b4=b5&16777215
c1.push(l.$8$fx$key(D.eI,-0.12,-0.2,0.36,0.64,(A.o.D(36,0,255)<<24|b4)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.eI,0.82,0.66,0.26,0.46,(A.o.D(38,0,255)<<24|b7&16777215)>>>0,e7,e8))
c1.push(m.$11$anim$color$fx$key$weight("\u201c",0.06,0.02,0.2,0.36,140,D.mv,(A.o.D(204,0,255)<<24|b4)>>>0,f4,"quote",A.u))
c1.push(m.$11$align$anim$key$style$weight(b2.b,0.12,0.3,0.76,0.34,36,A.L,b9,e5,A.cD,A.O))
b4=b2.c
c1.push(m.$10$align$color$delay$key(b4.length===0?"":"\u2014 "+b4,0.12,0.68,0.76,0.12,22,A.L,a2,300,f5))
if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,j?0.72:0.82,0.06,0.12,0.2,52,A.L,D.q_,500,f2,f0))
d3=D.mu
break A}if("bio"===d2)b4=(a8?"":g1).length!==0
else b4=!1
if(b4){c1.push(l.$8$fx$key(D.eI,0.58,0.04,0.44,0.8,(A.o.D(42,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.be,0.08,0.62,0.14,0.014,b5,f4,f3))
b4=b2.b
c1.push(m.$9$anim$key$weight(c8.length===0?b4:c8+"  "+b4,0.07,0.3,0.52,0.28,46,b9,e5,A.u))
c1.push(m.$9$color$delay$key(b2.c,0.07,0.66,0.5,0.16,22,a2,250,f5))
b4=o.$0()
g1.toString
b8=r?D.u8:D.cg
c1.push(new C.eI(b4,D.a44,0.64,0.05,0.27,0.9,g1,24,A.a4,A.bl,A.aD,4279310375,A.bg,e4,D.be,4280640491,4280172719,2,0,!1,"",0,b8,r?350:0,"bio","","","","",!1,0))
d3=D.mu
break A}if("closing"===d2){c1.push(l.$8$fx$key(D.eI,-0.15,-0.3,0.5,0.9,(A.o.D(46,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.eI,0.78,0.62,0.3,0.54,(A.o.D(51,0,255)<<24|b7&16777215)>>>0,e7,e8))
if(j){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.41,0.05,0.18,0.27,D.mv,400,e9))}else if(d0!=null){b4=d1?f0:f1
c1.push(k.$9$anim$delay$fx$key(d0,0.42,0.05,0.16,0.28,c0,450,d1?f2:"",b4))}else if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,0.4,0.05,0.2,0.24,64,A.L,D.q_,450,f2,f0))
c1.push(l.$8$fx$key(D.be,0.42,0.61,0.16,0.012,b5,f4,f3))
c1.push(m.$10$align$anim$key$weight(b2.b,0.1,0.34,0.8,0.26,52,A.L,b9,e5,A.u))
c1.push(m.$10$align$color$delay$key(b2.c,0.14,0.65,0.72,0.16,24,A.L,a2,300,f5))
d3=D.R9
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
b4=A.d.aI(d4,"\n")
b8=d5?0.53:0.7
c1.push(m.$11$anim$bullets$color$delay$key(b4,d7,0.31,b8,0.6,d4.length>4?21:24,D.Hy,!0,a2,250,f5))
if(d5){d8=!c3
d9=d8?0.29:0.24
if(d6)e0=0.06
else e0=d8?0.67:0.7
b4=d8?0.22:0.26
b8=d8?0.56:0.44
c3=d8?f1:f0
c1.push(k.$9$anim$delay$fx$key(c9,e0,b4,d9,b8,c0,400,d8?"":f2,c3))}d3=D.mu}if(j&&d2!=="title"&&d2!=="closing"){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.885,0.035,0.085,0.13,D.dd,200,e9))}for(b4=c1.length,e1=0;e1<b4;++e1){e2=c1[e1]
b8=e2.fx
if(b8==="logo"){e2.go=d?a0:g4
e2.id=e?a1:g5}else if(b8==="photo"){e2.go=h?g:g6
e2.id=i?f:g7}}if(f8)C.hI1(c1,b1,o,f7)
b4=o.$0()
if(f8){b8=f7.r
b8=b8[A.o.F(b1,b8.length)]}else b8=r?D.dea[A.o.F(b1,6)]:s
n.push(new C.lA(b4,b2.b,b2.e,d3,b3.a,b3.b,b8,0,"",0,c1))}e3=A.a.i(f9.a)
if(e3.length===0)e3="AI Presentation"
f8=o.$0()
return C.Bc(e4,e4,e4,e4,D.Ci,5,!1,e4,e4,e4,e4,e4,f8,e4,!1,e4,e3.length>60?A.a.ap(e3,0,60):e3,e4,e4,n,"office_blue",e4,!1,e4)},
fuP(d,e){var w=0,v=B.j(x.gI),u,t,s,r,q,p,o,n,m
var $async$fuP=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:o=e.t(0,D.Cl)
n=e.t(0,D.HB)
if(!o&&!n){u=D.a33
w=1
break}t=B.a([],x.d5)
for(s=d.c,r=0;r<s.length;++r)t.push(new C.fuS(o,s[r],n,$.hLq,r).$0())
s=B.V(x.S,x.aH)
m=J
w=3
return B.b(B.iJ(t,x.e),$async$fuP)
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
return B.i($async$fuP,v)},
ftP(d,e,f,g,h,i,j,k,l){var w=0,v=B.j(x.I),u,t,s
var $async$ftP=B.e(function(m,n){if(m===1)return B.f(n,v)
for(;;)switch(w){case 0:h.$1("Writing your "+j+" slides\u2026")
t=i.length
t=C.i_C(d,e,k.length!==0,t,j,l)
s=C
w=3
return B.b(C.aM8(t,"The AI could not write the slides. Try describing it again.",l==="auto"?"colorful":l,k),$async$ftP)
case 3:u=s.aMt(n,e,h,f,g,i)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ftP,v)},
bAs(d,e,f,g,h,i,j,k){var w=0,v=B.j(x.I),u,t,s,r,q,p,o
var $async$bAs=B.e(function(l,m){if(l===1)return B.f(m,v)
for(;;)switch(w){case 0:if(e.length!==0){t=B.aX(x.N)
for(s=B.eb(f,f.r,B.a4(f).c),r=s.$ti.c;s.C();){q=s.d
t.L(0,(q==null?r.a(q):q).b)}C.i_D(e,t,i,k)}if(h!=null)h.$1("Making your changes\u2026")
p=C.agb(i,"colorful")
t=C.i_B(d,f,i,j.length,k)
s=p==null?null:p.b
o=C
w=3
return B.b(C.aM8(t,"The AI could not make that change. Try saying it another way.",s==null?"colorful":s,A.hl),$async$bAs)
case 3:u=o.aMt(m,f,h,g,D.dSb,j)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bAs,v)},
aM8(d,e,f,g){var w=0,v=B.j(x.dO),u,t,s,r,q,p,o,n
var $async$aM8=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:w=3
return B.b(B.v4(null,""),$async$aM8)
case 3:n=i
if(A.a.i(n).length===0)throw B.U("AI is not set up yet. AI is not available right now. Please try again later.")
t=B.mZ(n)
s=null,r=0
case 4:if(!(r<2)){w=6
break}w=7
return B.b(B.qF(t,d,g,null),$async$aM8)
case 7:q=i
p=q.b
if(p!=null){o=C.agb(p,f)
if(o!=null){u=o
w=1
break}}else s=q.a
case 5:++r
w=4
break
case 6:throw B.U(s!=null&&B.Kr(s)?"No internet connection \u2014 try again when you are online.":e)
case 1:return B.h(u,v)}})
return B.i($async$aM8,v)},
aMt(d,e,f,g,h,i){var w=0,v=B.j(x.I),u,t,s,r,q,p,o,n,m,l
var $async$aMt=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:w=e.t(0,D.Cl)||e.t(0,D.HB)?3:5
break
case 3:if(f!=null)f.$1("Adding pictures and 3D art\u2026")
if(i.length===0)t=e
else{t=B.da(e,x.Q)
t.W(0,D.Cl)}w=6
return B.b(C.fuP(d,t),$async$aMt)
case 6:s=k
w=4
break
case 5:s=D.a33
case 4:t=d.c
w=A.d.b7(t,new C.f9I())?7:9
break
case 7:r=$.hho
r=r==null?null:r.$0()
w=10
return B.b(x.gc.b(r)?r:B.dP(r,x.aP),$async$aMt)
case 10:q=k
p=q!=null?A.R.ao(q.ae(),null):null
w=8
break
case 9:p=null
case 8:r=h.a
o=h.b
n=h.c
m=h.d
l=C.hfE(d,s,p,e,g,r,o,n,m,i)
if(r==null)r=d.d
if(o==null)o=d.e
if(n==null)n=d.f
if(m==null)m=d.r
l.CW=C.hzO(new C.aq0(d.a,d.b,t,r,o,n,m))
m=l.r
n=B.T(m).k("K<1,n>")
t=B.B(new B.K(m,new C.f9J(),n),n.k("aj.E"))
l.cx=t
t=B.a4(e).k("jK<cm.E,n>")
t=B.B(new B.jK(e,new C.f9K(),t),t.k("J.E"))
l.cy=t
l.ay=e.t(0,D.Rc)
u=l
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aMt,v)},
fW_(d){var w,v,u,t=d.cy
if(t==null)t=A.T
w=B.aX(x.Q)
for(v=0;v<6;++v){u=D.a1W[v]
if(A.d.t(t,u.b))w.L(0,u)}return w},
i3A(d){return B.bV(A.K,null,new C.fJ_(),d,!0,!0,!0,null,!1,!1,x.I)},
hH1(d,e){var w,v=e.toLowerCase()
if(A.a.cb(v,".png"))w="image/png"
else w=A.a.cb(v,".webp")?"image/webp":"image/jpeg"
return"data:"+w+";base64,"+A.cS.gcv().aJ(d)},
i3z(d,e,f){return B.bV(A.K,null,new C.fIZ(f,e),d,!0,!0,!0,null,!1,!1,x.I)},
fW0(d){var w,v,u,t,s,r,q,p
for(w=d.r,v=w.length,u=0;u<v;++u)for(t=w[u].z,s=t.length,r=0;r<s;++r){q=t[r]
if(q.fx==="logo"){p=q.at
p=(p==null?"":p).length!==0}else p=!1
if(p)return q.at}return null},
fW1(d){var w,v,u,t,s,r,q,p,o=B.a([],x.s)
for(w=d.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u)for(t=w[u].z,s=t.length,r=0;r<t.length;t.length===s||(0,B.L)(t),++r){q=t[r]
p=q.at
if(p==null)p=""
if(q.fx==="photo"&&p.length!==0&&!A.d.t(o,p))o.push(p)}return o},
fg8(d,e){var w=A.a.i(B.t(d==null?"":d)).toLowerCase()
return A.d.b7(e,new C.fg9(w))?w:""},
hcM(d){var w,v
if(d<=0)return""
w=""+d
v=d===1?"":"s"
return"- THEIR PICTURES: they uploaded "+w+" picture"+v+" of their own, numbered 1 to "+w+' in the order they picked them. Put "picture": <number> on each slide where one belongs, following exactly what they say (e.g. "picture 2 on the team slide", "first picture on the title"). If they don\'t say, spread them over the content slides in order. Use 0 where no picture is wanted.'},
hhm(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0="colorful",a1=a4.CW,a2=C.agb(a1==null?"":a1,a0),a3=C.agb(a5,a0)
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
for(v=t.length,r=a4.r,q=B.T(r).k("a2<1>"),p=0;p<t.length;t.length===v||(0,B.L)(t),++p){o=B.r2(new B.a2(r,new C.fAb(t[p]),q))
if(o==null)return!1
s.push(o)}for(v=w.length,n=0;n<v;++n){m=w[n]
l=u[n]
if(m.a!==l.a||m.f!==l.f||m.r!==l.r||m.w!==l.w||m.x!==l.x)return!1
if(m.d.length!==l.d.length)return!1}if(!a6)return!0
for(v=x.fR,r=v.k("J.E"),q=x.L,n=0;n<w.length;++n){m=w[n]
l=u[n]
k=B.a([new B.y(m.b,l.b),new B.y(m.c,l.c)],q)
for(j=m.d,i=l.d,h=0;h<j.length;++h)k.push(new B.y(j[h],i[h]))
k.push(new B.y(m.e,l.e))
g=B.B(new B.a2(k,new C.fAc(),v),r)
A.d.b_(g,new C.fAd())
if(g.length===0)continue
f=new C.fAe(g)
e=s[n]
for(k=e.z,j=k.length,p=0;p<k.length;k.length===j||(0,B.L)(k),++p){d=k[p]
i=d.r
if(i.length!==0)d.r=f.$1(i)}e.c=f.$1(e.c)}if(A.a.i(a4.b)===A.a.i(a2.a)&&A.a.i(a3.a).length!==0)a4.b=A.a.i(a3.a)
a4.CW=a5
return!0},
i_W(d){var w=d.toLowerCase(),v=B.af("\\b(fit|fits|fitting|overflow|overflowing|reframe|inside|too big|out of the|going under|under the slide|below the slide)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.aET
v=B.af("\\b(smaller|shrink|reduce|decrease|make .{0,20}small|less big)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.dU6
v=B.af("\\b(bigger|larger|increase|enlarge|grow|make .{0,20}big)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.dU7
return null},
hcn(d,e,f,g){var w,v,u,t=d.e,s=d.f,r=Math.max(1,A.k.bw(t*f/(e*0.55)))
for(t=d.r.split("\n"),w=t.length,v=0,u=0;u<w;++u)v+=Math.max(1,A.k.dw(t[u].length/r))
return v*e*1.3<=s*g+0.5&&d.d+d.f<=1.001},
i_G(a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a0.r,d=e.length
if(d===0)return!1
e=a3?e:B.a([e[A.o.D(a1,0,d-1)]],x.g)
w=a0.d===D.o2
v=w?540:960
u=w?960:540
for(d=e.length,t=a2.a,s=!1,r=0;r<e.length;e.length===d||(0,B.L)(e),++r)for(q=e[r].z,p=q.length,o=0;o<q.length;q.length===p||(0,B.L)(q),++o){n=q[o]
if(n.b!==D.cQ)continue
m=n.w
l=n.c
k=n.d
switch(t){case 0:n.w=A.k.D(m*0.85,10,120)
break
case 1:j=A.k.D(m*1.15,10,120)
if(C.hcn(n,j,v,u))n.w=j
break
case 2:i=m
h=0
for(;;){g=!1
if(!C.hcn(n,i,v,u))if(n.w>10){f=h+1
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
i_E(d,e){var w,v,u,t,s,r,q,p,o=d.b,n=C.agb(o,"colorful")
if(n==null)throw B.U("That earlier version could not be read.")
w=B.aX(x.Q)
for(v=d.c,u=v.length,t=0;t<v.length;v.length===u||(0,B.L)(v),++t){s=v[t]
for(r=0;r<6;++r){q=D.a1W[r]
if(q.b===s)w.L(0,q)}}v=C.fW0(e)
u=C.fW1(e)
p=C.hfE(n,D.a33,null,w,v,n.d,n.e,n.f,n.r,u)
p.CW=o
o=p.r
u=B.T(o).k("K<1,n>")
o=B.B(new B.K(o,new C.fA7(),u),u.k("aj.E"))
p.cx=o
o=w.$ti.k("jK<cm.E,n>")
o=B.B(new B.jK(w,new C.fA8(),o),o.k("J.E"))
p.cy=o
p.ay=w.t(0,D.Rc)
return p},
i3m(d,e,f){return B.bV(A.K,null,new C.fIc(f,e),d,!0,!0,!0,null,!1,!1,x.I)},
hGq(){var w,v,u,t=1000*Date.now()&2147483647,s=new B.eP()
s.dG(t)
w=D.cvy[s.aA(10)]
v=new C.ea5(s)
u=x.N
return new C.ea4(w,s.aA(4),J.fo(v.$1$2(D.cVp,1,x.ff)),w.r[s.aA(3)],v.$1$2(D.d9V,2+s.aA(2),u),v.$1$2(D.d3p,2,u),v.$1$2(D.dcK,4,x.fP),t)},
hI1(a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g="lux_frame",f="goldframe",e="lux_emblem",d=a5.a,a0=d.c,a1=new B.eP()
a1.dG(a5.w+a3*13)
w=new C.f6d(a4)
v=new C.f6f(a4,d)
u=new C.f6e(w,a5,a0,d)
for(t=a2.length,s=d.f,r=d.d,q=0;q<a2.length;a2.length===t||(0,B.L)(a2),++q){p=a2[q]
if(p.b===D.cQ){o=p.fx
if(o==="title"){p.Q=r
p.fy="shimmer@"+A.a.aT(A.o.fQ(r,16),8,"0").toUpperCase()}else if(o==="sub"||o==="body")p.Q=s}if(p.fx==="bar")p.fy="shimmer@"+A.a.aT(A.o.fQ(r,16),8,"0").toUpperCase()}t=a5.e
n=t[A.o.F(a3,t.length)]
if(n==="spotlight")A.d.cj(a2,0,w.$8(D.eI,0.1+a1.aj()*0.45,0.05+a1.aj()*0.3,0.45,0.75,C.a0R(a0,52),"lux_spot",a5.we(0,"spotlight")))
else A.d.cj(a2,0,w.$8(D.be,0,0,1,1,0,"lux_back",a5.we(0,n)))
m=t[(a3+1)%t.length]
t=a3&1
if(t===1&&m!==n&&m!=="spotlight")A.d.cj(a2,1,w.$8(D.be,0,0,1,1,0,"lux_back2",a5.aDK(0,m,r)))
switch(a5.b){case 0:a2.push(w.$12$anim$delay$stroke$strokeWidth(D.be,0.022,0.038,0.956,0.924,0,g,a5.we(0,f),D.dd,150,C.a0R(a0,176),1.6))
a2.push(u.$4(0.022,0.038,"lux_c1",300))
a2.push(u.$4(0.978,0.038,"lux_c2",380))
a2.push(u.$4(0.022,0.962,"lux_c3",460))
a2.push(u.$4(0.978,0.962,"lux_c4",540))
break
case 1:a2.push(w.$12$anim$delay$stroke$strokeWidth(D.be,0.018,0.032,0.964,0.936,0,g,a5.we(0,f),D.dd,120,C.a0R(a0,200),2))
a2.push(w.$12$anim$delay$stroke$strokeWidth(D.be,0.034,0.06,0.932,0.88,0,"lux_frame2","",D.dd,260,C.a0R(a0,112),0.8))
a2.push(u.$5$size(0.5,0.032,"lux_c1",420,0.026))
a2.push(u.$5$size(0.5,0.968,"lux_c2",480,0.026))
break
case 2:a2.push(w.$10$anim$delay(D.be,0,0,1,1,0,"lux_filigree",a5.we(0,"filigree"),D.dd,200))
break
default:a2.push(w.$10$anim$delay(D.be,0.08,0.06,0.84,0.004,C.a0R(a0,208),"lux_rule",a5.aDK(0,"shimmer",r),D.u7,150))
a2.push(w.$10$anim$delay(D.be,0.08,0.936,0.84,0.004,C.a0R(a0,144),"lux_rule2","",D.Hy,220))}l=!A.d.b7(a2,new C.f6c())||a3===0
s=a5.d
if(l)a2.push(v.$9(s,0.44,0.06,0.12,0.14,40,e,a5.we(0,"crest"),350))
else{o=a1.h8()?0.035:0.905
a2.push(v.$9(s,o,0.055,0.06,0.09,22,e,a5.we(0,"crest"),350))}s=a5.c
t=t===0
o=t?0.3:0.62
k=C.a0R(r,242)
j=a5.we(0,"orbit")
i=s===D.be?0.785:0
a2.push(w.$13$anim$delay$rotation$stroke$strokeWidth(s,o-0.008,0.024,0.016,0.028,k,"lux_g1",j,D.q_,600,i,4294967295,1))
t=t?0.66:0.34
a2.push(w.$10$anim$delay(D.eI,t-0.007,0.9495,0.014,0.025,C.a0R(r,242),"lux_g2",a5.we(0,"orbit"),D.q_,700))
for(t=a5.f,s=t.length,q=0;q<t.length;t.length===s||(0,B.L)(t),++q){h=t[q]
a2.push(w.$8(D.be,0,0,1,1,0,"lux_"+h,h+"@"+A.a.aT(A.o.fQ(a0,16),8,"0").toUpperCase()))}if((A.d.gK(d.b).a&16777215)<8421504)a2.push(w.$8(D.be,0,0,1,1,0,"lux_velvet",a5.we(0,"velvet")))},
nB:function nB(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fA9:function fA9(d){this.a=d},
fAa:function fAa(){},
vG:function vG(d,e){this.a=d
this.b=e},
a7g:function a7g(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
aq0:function aq0(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
fA2:function fA2(){},
fA5:function fA5(){},
fy1:function fy1(){},
fy2:function fy2(){},
fy3:function fy3(d){this.a=d},
fsr:function fsr(){},
fsu:function fsu(d,e,f){this.a=d
this.b=e
this.c=f},
fst:function fst(d,e){this.a=d
this.b=e},
fss:function fss(d,e){this.a=d
this.b=e},
fsq:function fsq(d){this.a=d},
fuS:function fuS(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fuQ:function fuQ(d){this.a=d},
fuR:function fuR(d){this.a=d},
f9I:function f9I(){},
f9J:function f9J(){},
f9K:function f9K(){},
fJ_:function fJ_(){},
a_F:function a_F(d){this.a=d},
aG9:function aG9(d,e,f,g,h){var _=this
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
eUq:function eUq(d,e,f){this.a=d
this.b=e
this.c=f},
eUr:function eUr(d,e){this.a=d
this.b=e},
eUo:function eUo(d,e){this.a=d
this.b=e},
eUp:function eUp(d,e){this.a=d
this.b=e},
eUn:function eUn(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
eUi:function eUi(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
eUm:function eUm(d,e){this.a=d
this.b=e},
eUh:function eUh(d,e){this.a=d
this.b=e},
eUl:function eUl(d,e){this.a=d
this.b=e},
eUg:function eUg(d,e){this.a=d
this.b=e},
eUj:function eUj(d){this.a=d},
eUk:function eUk(d,e){this.a=d
this.b=e},
eU6:function eU6(d,e){this.a=d
this.b=e},
eU7:function eU7(d,e){this.a=d
this.b=e},
eU9:function eU9(d){this.a=d},
eUa:function eUa(d){this.a=d},
eUb:function eUb(d){this.a=d},
eUc:function eUc(d){this.a=d},
eU8:function eU8(d,e){this.a=d
this.b=e},
eUd:function eUd(d,e){this.a=d
this.b=e},
eUE:function eUE(d){this.a=d},
eUF:function eUF(d){this.a=d},
eUD:function eUD(d){this.a=d},
eUG:function eUG(d){this.a=d},
eUC:function eUC(d){this.a=d},
eUI:function eUI(d){this.a=d},
eUB:function eUB(d,e){this.a=d
this.b=e},
eUJ:function eUJ(d){this.a=d},
eUA:function eUA(d,e){this.a=d
this.b=e},
eUK:function eUK(d){this.a=d},
eUz:function eUz(d){this.a=d},
eUL:function eUL(d){this.a=d},
eUy:function eUy(d,e){this.a=d
this.b=e},
eUM:function eUM(d){this.a=d},
eUx:function eUx(d,e){this.a=d
this.b=e},
eUN:function eUN(d){this.a=d},
eUw:function eUw(d){this.a=d},
eUO:function eUO(d,e){this.a=d
this.b=e},
eUv:function eUv(d,e){this.a=d
this.b=e},
eUP:function eUP(d){this.a=d},
eUH:function eUH(d){this.a=d},
eUu:function eUu(d,e){this.a=d
this.b=e},
eUe:function eUe(d,e,f){this.a=d
this.b=e
this.c=f},
eUf:function eUf(d,e,f){this.a=d
this.b=e
this.c=f},
eUt:function eUt(d,e){this.a=d
this.b=e},
eUs:function eUs(d,e){this.a=d
this.b=e},
fIZ:function fIZ(d,e){this.a=d
this.b=e},
a_E:function a_E(d,e,f){this.c=d
this.d=e
this.a=f},
aG8:function aG8(d){var _=this
_.d=d
_.e=!1
_.f=""
_.c=_.a=_.r=null},
eU_:function eU_(d){this.a=d},
eU0:function eU0(d){this.a=d},
eU1:function eU1(d,e){this.a=d
this.b=e},
eU2:function eU2(d){this.a=d},
eU3:function eU3(d){this.a=d},
eTZ:function eTZ(d,e){this.a=d
this.b=e},
eU4:function eU4(d,e){this.a=d
this.b=e},
eU5:function eU5(d,e){this.a=d
this.b=e},
fg9:function fg9(d){this.a=d},
b_L:function b_L(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aCI:function aCI(d,e,f){this.c=d
this.d=e
this.a=f},
biz:function biz(d,e){var _=this
_.d=$
_.bq$=d
_.a7$=e
_.c=_.a=null},
ea7:function ea7(d){this.a=d},
ea6:function ea6(){},
bg6:function bg6(d,e){this.b=d
this.a=e},
fAb:function fAb(d){this.a=d},
fAc:function fAc(){},
fAd:function fAd(){},
fAe:function fAe(d){this.a=d},
aqA:function aqA(d,e){this.a=d
this.b=e},
fA7:function fA7(){},
fA8:function fA8(){},
fIc:function fIc(d,e){this.a=d
this.b=e},
Z2:function Z2(d,e,f){this.c=d
this.d=e
this.a=f},
aA9:function aA9(){var _=this
_.e=_.d=$
_.f=!1
_.c=_.a=_.r=null},
dg8:function dg8(d){this.a=d},
dg9:function dg9(d){this.a=d},
dga:function dga(d,e){this.a=d
this.b=e},
dgd:function dgd(d){this.a=d},
dge:function dge(d,e){this.a=d
this.b=e},
dgc:function dgc(d,e){this.a=d
this.b=e},
dgf:function dgf(d){this.a=d},
dgb:function dgb(d,e){this.a=d
this.b=e},
bqV:function bqV(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ea4:function ea4(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
ea5:function ea5(d){this.a=d},
f6d:function f6d(d){this.a=d},
f6f:function f6f(d,e){this.a=d
this.b=e},
f6e:function f6e(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f6c:function f6c(){},
aKH:function aKH(){},
fUQ(d){var w,v,u
try{w=A.R.aH(0,d,null)
if(x.f.b(w)){v=B.vy(B.a1(w,x.N,x.z))
return v}}catch(u){}return null},
b_H:function b_H(d,e,f){this.c=d
this.d=e
this.a=f},
bkc:function bkc(d,e){this.c=d
this.a=e},
hX_(d){return A.d.dM(D.GC,new C.fty(d),new C.ftz())},
hX0(d){var w,v,u,t=A.a.i(d)
if(!A.a.a0(t,"class_"))return null
w=A.a.b0(t,6)
if(w.length===0)return null
v=new B.a2(D.GC,new C.ftA(w),x.b4)
if(!v.gaf(0).C())return null
u=v.gK(0)
return new C.jB("class_"+u.a,u.b,u.d,u.r,u.w,u.e,u.f)},
l6:function l6(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fty:function fty(d){this.a=d},
ftz:function ftz(){},
ftA:function ftA(d){this.a=d},
mN(d,e,f,g,h){return new C.Ee(f,g,d)},
hJf(d){var w=d.z,v=B.T(w).k("a2<1>")
w=B.B(new B.a2(w,new C.f8d(),v),v.k("J.E"))
d.z=w
d.x=""},
du(d,e){var w=$.JR
e.db="__design__:"+(w.length===0?"layer":w)
A.d.cj(d.z,0,e)},
dv(d,e,f,g,h,i,j,k,l){return C.en(A.bg,!1,4279310375,A.aD,"",d,24,A.bl,A.a4,"",e,"design_"+C.cC(),null,"","",0,!1,"",f,g,h,i,"",0,0,"",D.cg,D.f_,j,k,l)},
hfr(d,e){var w
C.hJf(d)
w=A.d.dM($.bCt(),new C.fro(e),new C.frp())
$.JR=w.a
d.x=w.a;++d.y
try{w.bx(d)}finally{$.JR=""}d.z=B.bl(d.z,!0,x.F)},
Ee:function Ee(d,e,f){this.a=d
this.b=e
this.e=f},
f8d:function f8d(){},
fzE:function fzE(){},
fzF:function fzF(){},
fzG:function fzG(){},
fzR:function fzR(){},
fzW:function fzW(){},
fzX:function fzX(){},
fzY:function fzY(){},
fzZ:function fzZ(){},
fA_:function fA_(){},
fA0:function fA0(){},
fA1:function fA1(){},
fzH:function fzH(){},
fzI:function fzI(){},
fzJ:function fzJ(){},
fzK:function fzK(){},
fzL:function fzL(){},
fzM:function fzM(){},
fzN:function fzN(){},
fzO:function fzO(){},
fzP:function fzP(){},
fzQ:function fzQ(){},
fzS:function fzS(){},
fzT:function fzT(){},
fzU:function fzU(){},
fzV:function fzV(){},
fro:function fro(d){this.a=d},
frp:function frp(){},
iR(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){return C.en(d,e,f,g,"",4280640491,h,i,j,"",k,l,null,"","",0,!1,"",0,D.be,4280172719,2,m,n,0,"",o,D.cQ,p,q,r)},
Cw(d,e,f,g,h,i,j,k,l){return C.en(A.bg,!1,4279310375,A.aD,"",d,24,A.bl,A.a4,"",e,f,null,"","",0,!1,"",0,g,h,i,"",0,0,"",D.cg,D.f_,j,k,l)},
bBb(){var w=new B.S(Date.now(),0,!1)
return A.ib[B.bG(w)-1]+" "+B.bQ(w)+", "+B.by(w)},
er:function er(d,e,f){this.a=d
this.b=e
this.c=f},
byz(d){return new B.iM((A.o.aB(d,24)&255)/255,(A.o.aB(d,16)&255)/255,(A.o.aB(d,8)&255)/255,(d&255)/255)},
hOh(d){var w,v
if(d==null||!A.a.a0(d,"data:image"))return null
try{w=B.alO(A.cE.aJ(A.d.gal(d.split(","))))
return w}catch(v){return null}},
hOl(d){var w=d.r
if(!d.cy)return w
return new B.K(B.a(w.split("\n"),x.s),new C.ffE(),x.dv).aI(0,"\n")},
hOk(d){switch(d.a){case 2:return A.nl
case 1:case 5:return A.eRz
default:return A.Sz}},
hOe(d){switch(d.a){case 2:return A.uG
case 1:case 5:return A.Up
default:return A.a8U}},
hOi(d,e){var w,v=null,u=d.ay,t=A.o.aB(u,24),s=A.o.aB(d.ch,24),r=(t&255)===0?v:C.byz(u),q=(s&255)===0?v:C.byz(d.ch),p=A.k.D(d.CW*(e/960),0.35,6)
u=q==null
if(u)w=v
else{t=new B.nl(q,p,A.kA)
w=new B.pn(t,t,t,t)}switch(d.ax.a){case 1:return B.lp(v,v,v,new B.kv(r,w,v,A.aa7,v),v,v,v,v)
case 4:return u?new B.fO(v,v,v):B.wH(B.lp(v,v,q,v,p+0.4,v,v,v))
default:return B.lp(v,v,v,new B.kv(r,w,B.vb(4),A.hC,v),v,v,v,v)}},
hOg(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=d.c*e,j=d.d*a0,i=d.b,h=i===D.f_?0.4:12,g=A.k.D(d.e*e,h,e),f=A.k.D(d.f*a0,h,a0)
switch(i.a){case 0:w=C.hOe(d.as)
v=A.k.D(d.w*(e/960),3,96)
u=C.hOl(d)
t=C.byz(d.Q)
s=d.x.a>=700?A.ei:A.vh
r=d.y===A.cD?A.xD:A.air
q=d.z
p=new B.CI(w,l,l,B.f8(u,l,l,l,B.h2(l,t,1===q.a?A.aNN:A.aNM,l,l,l,l,l,l,A.dr,l,l,v,r,s,l,!0,l,l,l,l),C.hOk(d.as)))
break
case 1:case 4:o=C.hOh(d.at)
n=i===D.lk&&d.c===0&&d.d===0&&d.e===1&&d.f===1
if(o==null){w=d.db
if(w.length===0)w="Image"
p=B.wH(B.f8(w,l,l,l,B.h2(l,A.rl,l,l,l,l,l,l,l,A.dr,l,l,10,l,l,l,!0,l,l,l,l),l))}else p=new B.Hj(o,n?A.aa3:A.UM,l,l)
break
case 3:w=new B.nl(A.HR,1,A.kA)
u=B.vb(6)
t=d.db
if(t.length===0)t="PDF document"
p=B.lp(A.uG,B.f8(t,l,l,l,B.h2(l,D.e5f,l,l,l,l,l,l,l,A.dr,l,l,11,l,A.ei,l,!0,l,l,l,l),A.nl),l,new B.kv(E.aGb,new B.pn(w,w,w,w),u,A.hC,l),l,l,l,l)
break
case 2:p=C.hOi(d,e)
break
case 5:p=C.hOf(d)
break
default:p=l}w=d.cx
if(w!==0)p=B.h79(-w,p)
w=i===D.cQ
if(w){m=A.o.aB(d.Q,24)&255
if(m<255)p=new B.arl(m/255,p)}if(w)return new F.vN(k,l,j,l,new B.Rx(new B.ku(g,g,f,1/0),p))
if(i===D.kS){i=new B.nl(A.HR,1,A.kA)
i=B.lp(A.uG,p,l,new B.kv(A.oT,new B.pn(i,i,i,i),B.vb(4),A.hC,l),l,l,D.btg,l)}else i=p
return new F.vN(k,l,j,l,new B.fO(g,f,i))},
hOj(d,e,f,g){var w,v=null,u=C.byz(d.e),t=d.f
t=B.a([F.h5M(t!=null?B.lp(v,v,v,new B.kv(v,v,v,A.hC,new B.aVe(E.Uq,A.a8O,B.a([u,C.byz(t)],x.cR),v)),v,v,v,v):B.lp(v,v,u,v,v,v,v,v))],x.eR)
w=d.z
A.d.v(t,new B.K(w,new C.ffD(f,g),B.T(w).k("K<1,fe>")))
return F.cpe(t)},
fW3(d){var w=0,v=B.j(x.E),u,t,s,r,q,p,o,n
var $async$fW3=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:n=B.a3r(null,"NGMY Slides",d.b)
for(t=d.r,s=t.length,r=n.c,q=0;q<t.length;t.length===s||(0,B.L)(t),++q){p=t[q]
o=new B.VO(A.vW,A.HO,D.bun,null,null,null,!1,null)
o=new B.Bi(o,new C.fAk(607,787,p,d))
o.M4(n,null)
r.push(o)}u=n.jV(0)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fW3,v)},
hOf(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=C.fUQ(d.r),k=l==null,j=k?m:l.b,i=A.a.i(j==null?"":j),h=k?m:l.gaiG()
if(h==null)h=A.avS
j=B.tg(4279308564)
w=B.vb(18)
v=new B.nl(B.tg(4287531653),3,A.kA)
u=i.length===0?"My links":i
u=B.a([B.wH(B.f8(u,m,m,m,B.h2(m,A.oT,m,m,m,m,m,m,m,A.dr,m,m,12,m,A.ei,m,!0,m,m,m,m),m))],x.eR)
t=k?m:l.c
if(A.a.i(t==null?"":t).length!==0)u.push(B.wH(B.f8(A.a.i(l.c),m,m,m,D.eYG,m)))
u.push(new B.fO(m,8,m))
for(t=B.dc(h,0,B.dJ(8,"count",x.S),B.T(h).c),s=t.$ti,t=new B.bW(t,t.gM(0),s.k("bW<aj.E>")),s=s.k("aj.E");t.C();){r=t.d
if(r==null)r=s.a(r)
q=A.a.i(r.c)
p=B.tg(4280690220)
o=new B.a8w(8,8)
n=A.a.i(r.b)
u.push(new B.nC(D.bnz,new C.avx(new C.ahe(q),B.lp(m,B.f8(n.length===0?A.a.i(r.c):n,m,m,m,D.f_Z,A.nl),m,new B.kv(p,m,new B.ahF(o,o,o,o),A.hC,m),m,m,D.btH,m))))}k=k?m:l.as
if(A.a.i(k==null?"":k).length!==0){k=A.a.i(l.as)
t=B.wH(B.f8(k,m,m,m,D.f_d,m))
u.push(new C.avx(C.ho_(k),t))}return B.lp(m,B.ys(u,A.L9,A.li),m,new B.kv(j,new B.pn(v,v,v,v),w,A.hC,m),m,m,D.bop,m)},
ffE:function ffE(){},
ffD:function ffD(d,e){this.a=d
this.b=e},
fAk:function fAk(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
afZ(d){var w,v
for(w=0;w<32;++w){v=D.Gt[w]
if(v.a===d)return v}return null},
h9N(d){var w,v,u=A.a.cJ(d,",")
if(!A.a.a0(d,"data:")||u<0)return null
try{w=A.cE.aJ(A.a.b0(d,u+1))
return w}catch(v){return null}},
cT(d,e){var w=d*374761393+e*668265263+1013904223&2147483647
w=(w^w>>>13)*1274126177&2147483647
return((w^w>>>16)&65535)/65535},
hiu(d,e){return B.a5(d,!1).c6(B.e6(new C.fGC(e),!0,null,x.fB))},
hit(d,e){return B.bV(A.K,null,new C.fGB(e),d,!0,!0,!0,null,!1,!1,x.fB)},
iV:function iV(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
E5:function E5(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
MR:function MR(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bhW:function bhW(d,e,f){var _=this
_.d=d
_.e=$
_.bq$=e
_.a7$=f
_.c=_.a=null},
dRy:function dRy(d){this.a=d},
dRx:function dRx(d,e,f){this.a=d
this.b=e
this.c=f},
dRw:function dRw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bpv:function bpv(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eTd:function eTd(d,e){this.a=d
this.b=e},
bd0:function bd0(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
aYB:function aYB(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
c6E:function c6E(){},
c6F:function c6F(d){this.a=d},
c6G:function c6G(d,e,f){this.a=d
this.b=e
this.c=f},
c6H:function c6H(d,e,f){this.a=d
this.b=e
this.c=f},
fGC:function fGC(d){this.a=d},
YB:function YB(d,e){this.c=d
this.a=e},
ayx:function ayx(){var _=this
_.f=_.e=_.d=$
_.r=0
_.c=_.a=null},
d5n:function d5n(d,e,f){this.a=d
this.b=e
this.c=f},
d5s:function d5s(d){this.a=d},
d5t:function d5t(d){this.a=d},
d5r:function d5r(d){this.a=d},
d5u:function d5u(d){this.a=d},
d5q:function d5q(d,e){this.a=d
this.b=e},
d5v:function d5v(d){this.a=d},
d5p:function d5p(d){this.a=d},
d5w:function d5w(d){this.a=d},
d5o:function d5o(d,e){this.a=d
this.b=e},
d5x:function d5x(d,e){this.a=d
this.b=e},
fGB:function fGB(d){this.a=d},
fGA:function fGA(d){this.a=d},
fGz:function fGz(d,e,f){this.a=d
this.b=e
this.c=f},
fGy:function fGy(d,e){this.a=d
this.b=e},
aKa:function aKa(){},
i3y(d){return B.bV(A.K,null,new C.fIY(),d,!0,!0,!0,null,!1,!1,x.N)},
fIY:function fIY(){},
YW:function YW(d){this.a=d},
beu:function beu(d){this.d=d
this.c=this.a=null},
dc8:function dc8(d){this.a=d},
dc9:function dc9(d,e){this.a=d
this.b=e},
dca:function dca(d){this.a=d},
hKJ(d){var w,v=d.split("@")
if(v.length>1){w=B.c7(v[1],16)
if(w!=null)return B.b0(w)}return D.x5},
hYV(d){var w,v=A.d.gK(d.split("@"))
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
hYU(d,e,f,g){var w,v,u,t,s,r=null,q=A.d.gK(d.split("@")),p=C.hKJ(d)
switch(q){case"shimmer":return B.nH(A.a9f,g,new C.fx_(p,A.k.F(e,6.283185307179586)/6.283185307179586*1.8-0.4))
case"golddust":return new B.an(A.W,r,A.b_,A.r,B.a([g,B.e0(B.b3(r,r,r,new C.bdS(e,f,p,r),A.au),!0,r)],x.p),r)
case"spotlight":w=Math.sin(e)
v=Math.cos(e*0.7)
u=Math.sin(e*2)
t=Math.sin(e*3)
return B.dV(B.ea(A.A,B.db(C.fN2(g,B.a4l(40,40,r)),0.75+t*0.25),1+u*0.08,r,r),new B.u(w*60,v*26))
case"goldframe":return new B.an(A.W,r,A.b_,A.r,B.a([g,B.e0(B.b3(r,r,r,new C.bdz(e,p,r),A.au),!0,r)],x.p),r)
case"twinkle":s=Math.sin(e)
w=A.k.D(0.55+s*0.45,0,1)
return B.db(B.eC(A.A,e*0.5,B.ea(A.A,g,0.8+(s+1)*0.18,r,r),r),w)
case"orbit":w=Math.cos(e)
v=Math.sin(e)
u=B.dl()
t=u.a
t.$flags&2&&B.ak(t)
t[11]=0.002
u.fv(e)
u.mC(Math.sin(e)*0.3)
return B.dV(B.fs(A.A,g,r,u,!0),new B.u(w*22,v*12))
case"rays":return new B.an(A.W,r,A.b_,A.r,B.a([B.e0(B.b3(r,r,r,new C.bmn(e,f,p,r),A.au),!0,r),g],x.p),r)
case"bokeh":return new B.an(A.W,r,A.b_,A.r,B.a([B.e0(B.b3(r,r,r,new C.b8w(e,f,p,r),A.au),!0,r),g],x.p),r)
case"aurora":return new B.an(A.W,r,A.b_,A.r,B.a([B.e0(B.b3(r,r,r,new C.b89(e,f,p,r),A.au),!0,r),g],x.p),r)
case"velvet":return new B.an(A.W,r,A.b_,A.r,B.a([g,B.e0(B.b3(r,r,r,new C.btf(e,p,r),A.au),!0,r)],x.p),r)
case"sparkle":return new B.an(A.W,r,A.b_,A.r,B.a([g,B.e0(B.b3(r,r,r,new C.bqi(e,f,p,r),A.au),!0,r)],x.p),r)
case"sheen":return new B.an(A.W,r,A.b_,A.r,B.a([g,B.e0(B.b3(r,r,r,new C.bpr(e,p,r),A.au),!0,r)],x.p),r)
case"filigree":return new B.an(A.W,r,A.b_,A.r,B.a([g,B.e0(B.b3(r,r,r,new C.bcU(e,p,r),A.au),!0,r)],x.p),r)
case"crest":s=Math.sin(e)
return new B.an(A.A,r,A.aa,A.f,B.a([B.bY(0,B.e0(B.ea(A.A,B.c_(r,new B.o(r,r,r,r,r,new B.bR(A.A,0.5,A.x,r,0,B.a([p.j(0.35+s*0.12),p.j(0)],x.O),r,r),A.a6),A.bd),1.6+s*0.15,r,r),!0,r),0,0,0),B.eC(A.A,s*0.06,B.ea(A.A,g,1+s*0.05,r,r),r)],x.p),r)}return g},
fx_:function fx_(d,e){this.a=d
this.b=e},
bdS:function bdS(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bdz:function bdz(d,e,f){this.b=d
this.c=e
this.a=f},
bmn:function bmn(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
b8w:function b8w(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
b89:function b89(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
btf:function btf(d,e,f){this.b=d
this.c=e
this.a=f},
bqi:function bqi(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bpr:function bpr(d,e,f){this.b=d
this.c=e
this.a=f},
bcU:function bcU(d,e,f){this.b=d
this.d=e
this.a=f},
d54:function d54(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
xf:function xf(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
fx2(d){var w=d.db
return A.a.a0(w,"marriage_sign_")&&!A.a.a0(w,"marriage_sign_placed_")&&d.b!==D.kS},
hZ_(d,e){var w,v,u,t,s,r,q,p,o,n,m,l="marriage_locked_box_",k="marriage_field_",j=B.a([],x.u)
for(w=d.z,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u){t=w[u]
if(A.a.a0(t.db,l))continue
if(Math.abs(t.d+t.f*0.5-e)<0.03)j.push(t)}if(j.length<2)return
A.d.b_(j,new C.fx3())
s=A.d.gK(j).c
for(w=j.length,u=0;u<j.length;j.length===w||(0,B.L)(j),++u){t=j[u]
r=s-t.c
if(Math.abs(r)>0.0001){t.c=s
v=t.db
if(A.a.a0(v,k)){q=A.d.gK(B.aP1(v,k,"",0).split(":"))
for(v=d.z,p=v.length,o=l+q,n=0;n<p;++n){m=v[n]
if(m.db===o)m.c+=r}}}s+=t.e+0.006}},
hYZ(d,e){var w,v,u,t,s,r=d.db
if(!A.a.a0(r,"marriage_field_"))return
w=r.split(":")
r=w.length
if(r>1){v=B.d4(w[1])
u=v==null?d.e:v}else u=d.e
t=r>2?B.d4(w[2]):null
r=A.a.i(e).length
if(r===0){d.e=u
if(t!=null)d.w=t
return}if(t!=null){s=r*(t*0.001)+0.028
if(s<=u){d.w=t
d.e=A.k.D(s,0.06,u)}else{d.w=A.k.D((u-0.028)/(r*0.001),12,t)
d.e=u}return}d.e=A.k.D(r*(d.w*0.001)+0.028,0.06,u)},
afC(d,a0,a1,a2,a3,a4){var w=0,v=B.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$afC=B.e(function(a5,a6){if(a5===1)return B.f(a6,v)
for(;;)switch(w){case 0:f=B.T(a4).k("a2<1>")
e=B.B(new B.a2(a4,new C.fpp(),f),f.k("J.E"))
w=!a2&&e.length!==0?3:4
break
case 3:w=5
return B.b(B.bV(A.dE,null,new C.fpq(e),d,!0,!0,!1,A.ln,!1,!1,x.N),$async$afC)
case 5:t=a6
if(t==="continue"){a1.$1(A.d.gK(e).hC())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.fWG(d),$async$afC)
case 6:s=a6
if(s==null||d.e==null){w=1
break}r=A.a.i(a3==null?"":a3)
w=r.length!==0?7:9
break
case 7:a6=r
w=8
break
case 9:w=10
return B.b(B.KC(d,"Search states\u2026","",A.jX,"Choose state"),$async$afC)
case 10:case 8:q=a6
if(q==null||d.e==null){w=1
break}p=C.fVB(s)
if(p==null)p=A.d.gK(D.Q3)
f=C.cC()
o=A.a.i(q)
if(o.length===0)o=null
n=C.cC()
m=p.e
l=C.fx4(p.d)
k=x.u
j=B.a([C.en(A.bg,!1,4279310375,A.aD,"marriage_locked_bg",4280640491,24,A.bl,A.a4,"",1,C.cC(),l,"","",0,!1,"",0,D.be,4280172719,2,"",0,0,"",D.cg,D.lk,1,0,0)],k)
i=p.f
h=x.F
k=B.B(B.a([C.Ch(i,0.016,D.kT,4291404327,0.8,"ring_jewel",0.028,0.42544,0.008),C.Ch(0,0.058,D.eI,4291404327,2.4,"ring_l",0.058,0.39064,0.026),C.Ch(0,0.058,D.eI,4291404327,2.4,"ring_r",0.058,0.41963999999999996,0.026)],k),h)
k.push(C.K1("HATI YA NDOA",A.L,i,32,A.u,0.048,"title",0.78,0.11,0.086))
k.push(C.K1("Hati ya Makubaliano ya Ndoa",A.L,i,12,A.a4,0.018,"subtitle",0.78,0.11,0.134))
A.d.v(k,C.fSC(0.2,0.154,0.6,4291404327,i))
A.d.v(k,C.by2("TAARIFA ZA WANANDOA",0.176,0.2,0.6,i))
A.d.v(k,C.a0s("Jina la Mume:","groom_name",0.11,0.218,0.78,11,i,""))
A.d.v(k,C.a0s("Jina la Mke:","bride_name",0.11,0.25,0.78,11,i,""))
A.d.v(k,C.a0s("Tarehe ya Ndoa:","tarehe",0.11,0.282,0.78,11,i,""))
A.d.v(k,C.a0s("Mahali:","bride_house",0.11,0.314,0.78,11,i,""))
A.d.v(k,C.by2("TAMKO LA MAKUBALIANO",0.35,0.2,0.6,i))
k.push(C.Ch(m,0.082,D.be,4291404327,1.15,"intro_frame",0.792,0.104,0.384))
g=C.cC()
k.push(C.en(A.bg,!1,i,A.aD,"marriage_field_utangulizi:"+A.k.aa(0.78,3),4280640491,9.5,A.bl,A.cu,"",0.074,g,null,"","",0,!1,"",0,D.be,4280172719,2,y.O,0,0,"",D.cg,D.cQ,0.78,0.11,0.388))
A.d.v(k,C.fSC(0.22,0.47,0.56,4291404327,i))
A.d.v(k,C.by2("MASHAHIDI",0.49,0.26,0.48,i))
A.d.v(k,C.hbN("Shahidi wa Mume",0.11,0.528,0.37,i,4294967295))
A.d.v(k,C.hbN("Shahidi wa Mke",0.52,0.528,0.37,i,4294967295))
A.d.v(k,C.a0s("Jina:","witness_mume_1_name",0.11,0.564,0.37,10,i,""))
A.d.v(k,C.a0s("Jina:","witness_mke_1_name",0.52,0.564,0.37,10,i,""))
A.d.v(k,C.by1("witness_mume_1",0.11,0.596,0.37,i))
A.d.v(k,C.by1("witness_mke_1",0.52,0.596,0.37,i))
A.d.v(k,C.by2("SAHIHI ZA WANANDOA",0.64,0.2,0.6,i))
k.push(C.K1("Mume",A.L,i,11,A.u,0.016,"mume_h",0.37,0.11,0.678))
k.push(C.K1("Mke",A.L,i,11,A.u,0.016,"mke_h",0.37,0.52,0.678))
A.d.v(k,C.by1("mchumba_mume",0.11,0.7,0.37,i))
A.d.v(k,C.by1("mchumba_mke",0.52,0.7,0.37,i))
A.d.v(k,C.by2("MWANDISHI / MSIMAMIZI",0.744,0.18,0.64,i))
A.d.v(k,C.a0s("Jina:","mwandishi",0.11,0.784,0.26,10,i,""))
A.d.v(k,C.by1("witness_mume_2",0.38,0.784,0.26,i))
A.d.v(k,C.a0s("Tarehe:","mchumba_mume_tarehe",0.65,0.784,0.24,10,i,""))
h=B.B(C.fSC(0.22,0.83,0.56,4291404327,i),h)
h.push(C.K1("NGMY",A.L,i,13,A.u,0.022,"ngmy_mark",0.6,0.2,0.846))
h.push(C.K1("Nakala ya Hati",A.L,4291404327,9,A.a4,0.016,"ngmy_sub",0.6,0.2,0.866))
A.d.v(k,h)
A.d.v(j,k)
a0.$1(C.Bc(null,null,null,null,D.o2,5,!1,"marriage_agreement",null,null,null,null,f,null,!1,o,p.b,null,null,B.a([C.rh(m,null,0,0,j,n,D.pZ,"","","Hati ya Ndoa",D.dd)],x.g),"marriage_"+p.a,null,!1,null))
case 1:return B.h(u,v)}})
return B.i($async$afC,v)},
fx3:function fx3(){},
fpp:function fpp(){},
fpq:function fpq(d){this.a=d},
fpn:function fpn(d){this.a=d},
fpo:function fpo(d){this.a=d},
hNK(d){var w=d.a
if(1===w)return"underline"
if(4===w)return"lineThrough"
return"none"},
hNJ(d){var w=d==null?null:J.k(d)
switch(w==null?"none":w){case"underline":return A.mA
case"lineThrough":return A.zg
default:return A.aD}},
en(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){return new C.eI(o,a7,a9,b0,a8,n,a2,j,l,k,g,f,d,p,w,i,a0,a1,v,e,h,s,a6,a3,r,q,m,u,a5,t,a4)},
hdQ(d){var w,v,u=J.k(d==null?"fade":d)
for(w=0;w<22;++w){v=D.PQ[w]
if(v.b===u)return v}return D.dd},
hK7(d){var w,v,u=J.k(d==null?"text":d)
for(w=0;w<6;++w){v=D.cN7[w]
if(v.b===u)return v}return D.cQ},
hQv(d){var w,v,u=J.k(d==null?"rectangle":d)
for(w=0;w<7;++w){v=D.dax[w]
if(v.b===u)return v}return D.be},
rh(d,e,f,g,h,i,j,k,l,m,n){return new C.lA(i,m,k,j,d,e,n,g,l,f,h==null?B.a([],x.u):h)},
h4w(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=d.h(0,"id")
l=J.k(l==null?"":l)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"notes")
v=J.k(v==null?"":v)
u=C.hM7(d.h(0,"layout"))
t=B.aN(d.h(0,"background"))
t=t==null?m:A.k.O(t)
if(t==null)t=4294967295
s=B.aN(d.h(0,"backgroundEnd"))
s=s==null?m:A.k.O(s)
r=C.hdQ(d.h(0,"transition"))
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
else{n=J.d8(n,x.f)
n=B.cD(n,new C.cc1(),n.$ti.k("J.E"),x.F)
n=B.B(n,B.a4(n).k("J.E"))}return C.rh(t,s,o,q,n==null?B.a([],x.u):n,l,u,v,p,w,r)},
hM7(d){var w,v,u=J.k(d==null?"titleContent":d)
for(w=0;w<9;++w){v=D.anL[w]
if(v.b===u)return v}return D.mu},
Bc(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,a0,a1,a2,a3,a4){var w=a4==null?new B.S(Date.now(),0,!1):a4
return new C.hZ(p,t,a1,h,i,w,a0==null?B.a([C.rh(4294967295,null,0,0,null,C.cC(),D.pZ,"","","",D.dd)],x.g):a0,k,s,a2,a3,d,v,u,q,j,r,f,g,e,m,o,n,l)},
Ve(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4="deckKind",a5=a6.h(0,"id")
a5=J.k(a5==null?"":a5)
w=a6.h(0,"name")
w=J.k(w==null?"Untitled Presentation":w)
v=a6.h(0,"themeId")
v=J.k(v==null?"office_blue":v)
u=C.hIh(a6.h(0,"aspectRatio"))
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
if(J.z(a6.h(0,"transferReceived"),!0)){o=a6.h(0,a4)
o=C.kr(o==null?a3:J.k(o))}else o=!1
n=a6.h(0,a4)
if(C.kr(n==null?a3:J.k(n))){n=a6.h(0,"adminShareEditUntil")
n=n==null?a3:J.k(n)}else n=a3
m=B.aN(a6.h(0,"signatureStrokeWidth"))
if(m==null)m=a3
l=B.aN(a6.h(0,"signatureInkColor"))
l=l==null?a3:A.k.O(l)
k=a6.h(0,"kiapoSignedAt")
k=k==null?a3:J.k(k)
j=J.z(a6.h(0,"cinematic"),!0)
i=J.z(a6.h(0,"loop"),!0)
h=a6.h(0,"aiOutlineJson")
h=h==null?a3:J.k(h)
g=x.c
f=g.a(a6.h(0,"aiSlideIds"))
if(f==null)f=a3
else{f=J.b6(f,new C.cbP(),x.N)
f=B.B(f,f.$ti.k("aj.E"))}e=g.a(a6.h(0,"aiExtras"))
if(e==null)e=a3
else{e=J.b6(e,new C.cbQ(),x.N)
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
else{g=J.d8(g,x.f)
g=B.cD(g,new C.cbR(),g.$ti.k("J.E"),x.bt)
g=B.B(g,B.a4(g).k("J.E"))}return C.Bc(n,e,h,f,u,t,j,r,a2,d,a1,a0,a5,k,i,q,w,l,m,g==null?B.a([C.rh(4294967295,a3,0,0,a3,C.cC(),D.pZ,"","","",D.dd)],x.g):g,v,p,o,s)},
kr(d){return d==="marriage_agreement"||d==="hati_kuhowa"||d==="hati_kuhoweya"||d==="hati_malipo_awamu"||d==="hati_kiapo_uongozi"},
hIh(d){var w,v,u=J.k(d==null?"landscape169":d)
for(w=0;w<2;++w){v=D.dbm[w]
if(v.b===u)return v}return D.Ci},
cC(){var w=Date.now(),v=$.iX
$.iX=v+1
return""+1000*w+"_"+v},
cci(d,e,f){var w,v,u,t,s,r,q,p=null,o="Click to add title",n=4280640491,m=4280172719,l=4279310375
d.d=e
A.d.a9(d.z)
if(e!==D.Cj){d.e=f.f.l()
w=f.r
d.f=w==null?p:w.l()}switch(e.a){case 0:break
case 1:w=d.z
v=C.cC()
v=C.en(A.L,!1,f.d.l(),A.aD,"",n,40,A.bl,A.u,"",0.2,v,p,"","",0,!1,"",0,D.be,m,2,o,0,0,"",D.cg,D.cQ,0.84,0.08,0.3)
u=C.cC()
A.d.v(w,B.a([v,C.en(A.L,!1,f.e.l(),A.aD,"",n,20,A.bl,A.cu,"",0.12,u,p,"","",0,!1,"",0,D.be,m,2,"Click to add subtitle",0,0,"",D.cg,D.cQ,0.76,0.12,0.58)],x.u))
break
case 2:w=d.z
v=C.cC()
v=C.en(A.bg,!1,f.d.l(),A.aD,"",n,32,A.bl,A.u,"",0.14,v,p,"","",0,!1,"",0,D.be,m,2,o,0,0,"",D.cg,D.cQ,0.88,0.06,0.06)
u=C.cC()
A.d.v(w,B.a([v,C.en(A.bg,!0,f.e.l(),A.aD,"",n,20,A.bl,A.cu,"",0.68,u,p,"","",0,!1,"",0,D.be,m,2,"\u2022 Tap text to select, then Edit to type\n\u2022 Use Format for size & color\n\u2022 Add images and shapes from Insert",0,0,"",D.cg,D.cQ,0.88,0.06,0.24)],x.u))
break
case 3:w=d.z
v=C.cC()
v=C.en(A.bg,!1,f.d.l(),A.aD,"",n,30,A.bl,A.u,"",0.12,v,p,"","",0,!1,"",0,D.be,m,2,"Two Column Slide",0,0,"",D.cg,D.cQ,0.88,0.06,0.06)
u=C.cC()
t=f.e
u=C.en(A.bg,!0,t.l(),A.aD,"",n,18,A.bl,A.a4,"",0.7,u,p,"","",0,!1,"",0,D.be,m,2,"Left column\n\n\u2022 Point A\n\u2022 Point B",0,0,"",D.cg,D.cQ,0.42,0.06,0.22)
s=C.cC()
A.d.v(w,B.a([v,u,C.en(A.bg,!0,t.l(),A.aD,"",n,18,A.bl,A.a4,"",0.7,s,p,"","",0,!1,"",0,D.be,m,2,"Right column\n\n\u2022 Point C\n\u2022 Point D",0,0,"",D.cg,D.cQ,0.42,0.52,0.22)],x.u))
break
case 4:w=f.c
d.e=w.l()
d.f=w.j(0.85).l()
A.d.L(d.z,C.en(A.L,!1,4294967295,A.aD,"",n,42,A.bl,A.u,"",0.2,C.cC(),p,"","",0,!1,"",0,D.be,m,2,"Section Header",0,0,"",D.cg,D.cQ,0.84,0.08,0.38))
break
case 5:w=d.z
v=C.cC()
v=C.en(A.bg,!1,f.d.l(),A.aD,"",n,30,A.bl,A.u,"",0.12,v,p,"","",0,!1,"",0,D.be,m,2,"Compare",0,0,"",D.cg,D.cQ,0.88,0.06,0.06)
u=C.cC()
t=f.c
u=C.en(A.bg,!1,l,A.aD,"",t.j(0.12).l(),24,A.bl,A.a4,"",0.68,u,p,"","",0,!1,"",0,D.be,t.l(),2,"",0,0,"",D.cg,D.f_,0.42,0.06,0.22)
s=C.cC()
r=f.e
s=C.en(A.bg,!1,r.l(),A.aD,"",n,20,A.bl,A.O,"",0.6,s,p,"","",0,!1,"",0,D.be,m,2,"Option A",0,0,"",D.cg,D.cQ,0.38,0.08,0.26)
q=C.cC()
t=C.en(A.bg,!1,l,A.aD,"",t.j(0.06).l(),24,A.bl,A.a4,"",0.68,q,p,"","",0,!1,"",0,D.be,t.j(0.5).l(),2,"",0,0,"",D.cg,D.f_,0.42,0.52,0.22)
q=C.cC()
A.d.v(w,B.a([v,u,s,t,C.en(A.bg,!1,r.l(),A.aD,"",n,20,A.bl,A.O,"",0.6,q,p,"","",0,!1,"",0,D.be,m,2,"Option B",0,0,"",D.cg,D.cQ,0.38,0.54,0.26)],x.u))
break
case 6:w=d.z
v=C.cC()
v=C.en(A.L,!1,f.d.l(),A.aD,"",n,36,A.bl,A.u,"",0.35,v,p,"","",0,!1,"",0,D.be,m,2,"TERM / QUESTION",0,0,"",D.cg,D.cQ,0.8,0.1,0.12)
u=C.cC()
A.d.v(w,B.a([v,C.en(A.L,!1,f.e.l(),A.aD,"",n,22,A.bl,A.cu,"",0.35,u,p,"","",0,!1,"",0,D.be,m,2,"Definition or answer \u2014 flip mentally when presenting",0,0,"",D.cg,D.cQ,0.8,0.1,0.52)],x.u))
break
case 7:w=d.z
v=C.cC()
v=C.en(A.bg,!1,f.d.l(),A.aD,"",n,28,A.bl,A.u,"",0.18,v,p,"","",0,!1,"",0,D.be,m,2,"Quiz Question",0,0,"",D.cg,D.cQ,0.88,0.06,0.06)
u=C.cC()
A.d.v(w,B.a([v,C.en(A.bg,!1,f.e.l(),A.aD,"",n,20,A.bl,A.a4,"",0.62,u,p,"","",0,!1,"",0,D.be,m,2,"A) Answer choice\nB) Answer choice\nC) Answer choice\nD) Answer choice",0,0,"",D.cg,D.cQ,0.84,0.08,0.28)],x.u))
break
case 8:w=d.z
v=C.cC()
v=C.en(A.bg,!1,f.d.l(),A.aD,"",n,26,A.bl,A.u,"",0.1,v,p,"","",0,!1,"",0,D.be,m,2,"Worksheet / Assignment",0,0,"",D.cg,D.cQ,0.88,0.06,0.04)
u=C.cC()
A.d.v(w,B.a([v,C.en(A.bg,!1,f.e.l(),A.aD,"",n,18,A.bl,A.a4,"",0.78,u,p,"","",0,!1,"",0,D.be,m,2,"Name: _______________\nDate: _______________\n\n1. _________________________________\n\n2. _________________________________\n\n3. _________________________________",0,0,"",D.cg,D.cQ,0.88,0.06,0.16)],x.u))
break}},
hzY(d){return A.d.dM(D.a1z,new C.ccj(d),new C.cck())},
hzV(d){var w,v,u,t,s,r,q,p
if(A.a.i(d).length===0)return B.a([],x.D)
try{w=A.R.aH(0,d,null)
if(!x.j.b(w)){t=B.a([],x.D)
return t}v=B.a([],x.D)
for(t=J.aW(w),s=x.N,r=x.z,q=x.f;t.C();){u=t.gU(t)
if(!q.b(u))continue
try{J.cf(v,C.Ve(B.a1(u,s,r)))}catch(p){}}return v}catch(p){t=B.a([],x.D)
return t}},
fP9(d,e){var w,v,u,t=B.V(x.N,x.I),s=new C.cce(t)
for(w=J.aW(d);w.C();)s.$1(w.gU(w))
for(w=e.length,v=0;v<e.length;e.length===w||(0,B.L)(e),++v)s.$1(e[v])
w=t.$ti.k("bc<2>")
u=B.B(new B.bc(t,w),w.k("J.E"))
A.d.b_(u,new C.ccd())
return u},
h4z(d,e){var w,v,u=d.length
if(u===0)return e
w=e.length
if(w===0)return d
v=new C.cc9()
if(u!==w)return u>=w?d:e
return v.$1(d).cc(v.$1(e))?d:e},
aq1(d){return C.hzT(d)},
hzT(d){var w=0,v=B.j(x.R),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$aq1=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=A.a.i(d.toLowerCase())
l=new C.ccc()
k=x.D
j=B.a([],k)
t=4
g=l
w=7
return B.b(B.a1E(m),$async$aq1)
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
return B.b(B.az(),$async$aq1)
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
case 11:o=l.$1($.h4y.h(0,m))
n=C.fP9(C.fP9(j,r),o)
if(n.length===0){u=C.h4z(C.h4z(j,r),o)
w=1
break}u=n
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$aq1,v)},
cc8(d){return C.hzS(d)},
hzS(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o
var $async$cc8=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.az(),$async$cc8)
case 7:r=f
q=r.rU("ngmy_slides_deleted_"+A.a.i(d.toLowerCase()))
if(q==null)q=A.T
q=B.ky(q,B.T(q).c)
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
return B.i($async$cc8,v)},
b_N(d,e){return C.hzU(d,e)},
hzU(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m
var $async$b_N=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$b_N)
case 6:s=g
q=s.rU("ngmy_slides_deleted_"+A.a.i(d.toLowerCase()))
if(q==null)q=B.a([],x.s)
A.d.L(q,e)
r=q
p=A.a.i(d.toLowerCase())
o=J.ad(r)>500?J.KL(r,J.ad(r)-500):r
w=7
return B.b(s.ar("StringList","ngmy_slides_deleted_"+p,o),$async$b_N)
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
return B.i($async$b_N,v)},
Vf(d,e){return C.hzW(d,e)},
hzW(a3,a4){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$Vf=B.e(function(a5,a6){if(a5===1){s.push(a6)
w=t}for(;;)switch(w){case 0:a0=A.a.i(a3.toLowerCase())
if(J.ad(a0)===0){w=1
break}p=$.h4x.h(0,a0)
w=p==null?3:4
break
case 3:w=5
return B.b(C.aq1(a3),$async$Vf)
case 5:p=a6
case 4:w=6
return B.b(C.cc8(a3),$async$Vf)
case 6:o=a6
n=B.V(x.N,x.I)
for(m=J.aW(p);m.C();){l=m.gU(m)
k=l.a
if(A.a.i(k).length!==0)n.n(0,k,l)}for(m=a4.length,j=0;j<a4.length;a4.length===m||(0,B.L)(a4),++j){i=a4[j]
l=i.a
if(A.a.i(l).length===0)continue
h=n.h(0,l)
if(h!=null){k=h.f
g=i.f
f=k.a
if(f<=g.gbo())k=f===g.gbo()&&k.b>g.gcw()
else k=!0
k=!k}else k=!0
if(k)n.n(0,l,i)}m=n.$ti.k("bc<2>")
l=m.k("a2<J.E>")
e=B.B(new B.a2(new B.bc(n,m),new C.ccf(o),l),l.k("J.E"))
A.d.b_(e,new C.ccg())
$.h4x.n(0,a0,e)
n=B.T(e).k("K<1,a3<n,@>>")
n=B.B(new B.K(e,new C.cch(),n),n.k("aj.E"))
r=A.R.ao(n,null)
$.h4y.n(0,a0,r)
t=8
w=11
return B.b(B.agp(a0,r),$async$Vf)
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
return B.b(B.az(),$async$Vf)
case 16:q=a6
w=17
return B.b(q.ar("String","ngmy_slides_decks_"+A.a.i(a3.toLowerCase()),r),$async$Vf)
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
return B.i($async$Vf,v)},
Ib:function Ib(d,e){this.a=d
this.b=e},
aq_:function aq_(d,e){this.a=d
this.b=e},
uu:function uu(d,e){this.a=d
this.b=e},
mp:function mp(d,e){this.a=d
this.b=e},
hw:function hw(d,e){this.a=d
this.b=e},
eI:function eI(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){var _=this
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
lA:function lA(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
cc2:function cc2(){},
cc3:function cc3(){},
cc1:function cc1(){},
hZ:function hZ(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3){var _=this
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
cbS:function cbS(){},
cbT:function cbT(){},
cbP:function cbP(){},
cbQ:function cbQ(){},
cbR:function cbR(){},
jB:function jB(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
ccj:function ccj(d){this.a=d},
cck:function cck(){},
cce:function cce(d){this.a=d},
ccd:function ccd(){},
cc9:function cc9(){},
cca:function cca(){},
ccb:function ccb(){},
ccc:function ccc(){},
ccf:function ccf(d){this.a=d},
ccg:function ccg(){},
cch:function cch(){},
hZa(d,e){var w=x.N,v=B.V(w,x.F)
w=new C.fxC(e,v,d,B.aX(w))
w.$1(new C.fxy())
w.$1(new C.fxz())
w.$1(new C.fxA())
w.$1(new C.fxB())
return v},
fxC:function fxC(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fxy:function fxy(){},
fxz:function fxz(){},
fxA:function fxA(){},
fxB:function fxB(){},
b_K:function b_K(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cbY:function cbY(d){this.a=d},
cbX:function cbX(){},
cbZ:function cbZ(){},
cc_:function cc_(d,e){this.a=d
this.b=e},
cc0:function cc0(d){this.a=d},
and:function and(d,e){this.c=d
this.a=e},
bhG:function bhG(d,e){var _=this
_.d=$
_.bq$=d
_.a7$=e
_.c=_.a=null},
dDL:function dDL(){},
aJW:function aJW(){},
cc5(d,e,f){var w=0,v=B.j(x.y),u,t
var $async$cc5=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:if(f){u=!0
w=1
break}t=A.a.i(e)
if(t.length===0){if(d.e!=null)d.I(x.q).f.R(D.eOX)
u=!1
w=1
break}u=B.kO(!1,d,t,!1,null,A.a48,null)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$cc5,v)},
hzQ(d){var w=A.d.ba(D.GC,new C.cc6(d))
if(w<0)return!0
return w>=4},
hzR(d){var w=A.d.ba($.bCt(),new C.cc7(d))
if(w<0)return!0
return w>=5},
cc6:function cc6(d){this.a=d},
cc7:function cc7(d){this.a=d},
i_Q(d,e,f){var w,v=null,u=""+f,t="ngmy-pdf-"+A.a.gX(d)+"-"+u,s=f>0?d+"#page="+u:d
$.yh()
$.q2().pz(t,new C.fAr(s),!0)
u=B.a([B.Dr(v,A.q2,t)],x.p)
if(e.length!==0){w=B.m(4)
u.push(B.ao(v,B.p(v,B.d(e,v,v,v,v,v,v,D.eZ9,v,v,v),A.f,v,v,new B.o(A.aX,v,v,w,v,v,A.n),v,v,v,v,A.n6,v,v,v),v,v,4,v,4,v))}return new B.an(A.W,v,A.b_,A.r,u,v)},
fAr:function fAr(d){this.a=d},
i_r(){return C.fVX()},
hXo(){return C.bAp()},
hZr(){return C.fVO()},
aO6(d,e,f){var w=0,v=B.j(x.H),u
var $async$aO6=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:w=e==="__ngmy_slides_pdf_staged__"?3:4
break
case 3:w=5
return B.b(C.fzx(d,f),$async$aO6)
case 5:w=1
break
case 4:if(d.e!=null)d.I(x.q).f.R(B.b2(null,null,null,null,null,A.r,null,B.d(e,null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$aO6,v)},
fzx(d,e){var w=0,v=B.j(x.H),u
var $async$fzx=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:u=$.byA
if(u==null)u=e+".pdf"
w=2
return B.b(B.bV(A.K,null,new C.fzy(u,e==="Invoice"),d,!0,!1,!0,null,!1,!1,x.H),$async$fzx)
case 2:return B.h(null,v)}})
return B.i($async$fzx,v)},
fzy:function fzy(d,e){this.a=d
this.b=e},
acu:function acu(d,e,f){this.c=d
this.d=e
this.a=f},
emb:function emb(d,e){this.a=d
this.b=e},
emc:function emc(d,e){this.a=d
this.b=e},
emd:function emd(d,e){this.a=d
this.b=e},
eme:function eme(d){this.a=d},
acM:function acM(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
b_J(d,e,f,g,h,i,j,k,l,m,n,o){return new C.b_I(g,m,f,d,e,h,l,k,j,o,i,null)},
hgL(d){return B.cn(new C.fxx(d))},
fVZ(d){switch(d.a){case 0:return"\u23ed\ufe0f"
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
i_z(d){if(d===D.cg)return"None"
return C.fVZ(d)},
bz5(d,e,f,g){return C.hQC(d,e,f,g)},
hQC(d,e,f,g){var w=0,v=B.j(x.H),u,t,s
var $async$bz5=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:s={}
if(d.e==null){w=1
break}t=B.a5(d,!0)
if($.fSV&&t.pi())t.eI()
$.fSV=!0
s.a=null
w=3
return B.b(B.hR(A.bh,!0,"Animation preview",d,new C.fif(s,e,g,f),null,A.eE,!0,x.H),$async$bz5)
case 3:s=s.a
if(s!=null)s.a8(0)
$.fSV=!1
case 1:return B.h(u,v)}})
return B.i($async$bz5,v)},
fJM(d,e,f){var w=0,v=B.j(x.H),u,t,s,r
var $async$fJM=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:e.$0()
if(d.e==null){w=1
break}t=A.k.D(B.aI(d,A.bT,x.w).w.a.a*0.88,280,440)
s=f===D.cg
r=s?"\u23ed\ufe0f None \u2014 no slide transition":C.fVZ(f)+" Slide transition preview"
s=s?Af.EW:A.v1
w=3
return B.b(C.bz5(d,s,new B.a6(t,t*0.56,B.bv(B.m(14),new C.aHx(f,null),A.aq),null),r),$async$fJM)
case 3:case 1:return B.h(u,v)}})
return B.i($async$fJM,v)},
hg3(d,e,f){var w,v,u=null,t=A.cr.av(0,A.k.D(e,0,1))
switch(d.a){case 0:return f
case 1:case 13:case 18:return B.db(f,t)
case 2:case 17:return B.dV(B.db(f,t),new B.u((1-t)*48,0))
case 3:return B.dV(B.db(f,t),new B.u(-(1-t)*48,0))
case 4:case 21:return B.dV(B.db(f,t),new B.u(0,(1-t)*36))
case 5:return B.dV(B.db(f,t),new B.u(0,-(1-t)*36))
case 6:case 16:return B.ea(A.A,B.db(f,t),0.5+t*0.5,u,u)
case 7:return B.ea(A.A,B.db(f,t),1.4-t*0.4,u,u)
case 8:w=B.dl()
v=w.a
v.$flags&2&&B.ak(v)
v[11]=0.001
w.fv((1-t)*1.2)
return B.fs(A.A,B.db(f,t),u,w,!0)
case 9:w=B.dl()
v=w.a
v.$flags&2&&B.ak(v)
v[11]=0.001
w.jQ((1-t)*1.2)
return B.fs(A.A,B.db(f,t),u,w,!0)
case 10:case 19:w=B.dl()
v=w.a
v.$flags&2&&B.ak(v)
v[11]=0.002
w.mC((1-t)*0.8)
v=0.6+t*0.4
w.jA(v,v,v,1)
return B.fs(A.A,B.db(f,t),u,w,!0)
case 11:case 12:case 14:case 15:case 20:return B.dV(B.db(f,t),new B.u((1-t)*24,0))}},
bBZ(d,e,f){var w=0,v=B.j(x.H),u,t,s,r
var $async$bBZ=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:e.$0()
if(d.e==null){w=1
break}t=A.k.D(B.aI(d,A.bT,x.w).w.a.a*0.88,300,440)
s=f===D.cg
r=s?"\u23ed\ufe0f None \u2014 no element animation":C.fVZ(f)+" Element animation preview"
s=s?Af.EW:A.v1
w=3
return B.b(C.bz5(d,s,new B.a6(t,t*0.62,B.bv(B.m(14),new C.ayh(f,null),A.aq),null),r),$async$bBZ)
case 3:case 1:return B.h(u,v)}})
return B.i($async$bBZ,v)},
i_y(d){var w,v,u,t,s=$.af4.W(0,d)
if(s!=null){$.af4.n(0,d,s)
return s}w=A.cE.aJ(A.a.b0(d,A.a.cJ(d,",")+1))
$.af4.n(0,d,w)
v=$.fTI=$.fTI+w.length
u=B.a4($.af4).k("cz<1>")
for(;;){if(!(v>41943040&&$.af4.a>1))break
t=new B.cz($.af4,u).gaf(0)
if(!t.C())B.ba(B.fD())
v-=$.af4.W(0,t.gU(0)).length
$.fTI=v}return w},
i_f(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=B.af("\\*([^*]+)\\*|\\^([^^]+)\\^|~([^~]+)~",!0,!1,!1,!1).kR(0,d),j=B.B(k,B.a4(k).k("J.E"))
if(j.length===0)return l
w=e.r
if(w==null)w=24
v=B.a([],x.aF)
for(k=j.length,u=w*0.62,t=w*2.4,s=w*1.6,r=0,q=0;q<j.length;j.length===k||(0,B.L)(j),++q){p=j[q].b
o=p.index
if(o>r){n=A.a.ap(d,r,o)
m=f.$1(e)
v.push(new B.eo(n,l,l,A.cO,l,l,l,l,l,l,m))}n=p[1]
if(n!=null){m=f.$1(e.S4(s,A.u))
v.push(new B.eo(n,l,l,A.cO,l,l,l,l,l,l,m))}else{n=p[2]
if(n!=null){m=f.$1(e.S4(t,A.u))
v.push(new B.eo(n,l,l,A.cO,l,l,l,l,l,l,m))}else{n=p[3]
m=f.$1(e.S4(u,A.cu))
v.push(new B.eo(n,l,l,A.cO,l,l,l,l,l,l,m))}}r=o+p[0].length}if(r<d.length){k=A.a.b0(d,r)
v.push(B.dq(l,l,l,l,l,l,l,l,l,f.$1(e),k))}return v},
a1D(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=x.v
switch(d){case"circle":m=new B.aQ($.X().r,A.ap,n,n,B.a([],m))
m.E(new B.kt(e))
return m
case"rounded":m=new B.aQ($.X().r,A.ap,n,n,B.a([],m))
w=e.gee()*0.18
m.E(new B.iT(B.bA(e,new B.aV(w,w))))
return m
case"triangle":m=new B.aQ($.X().r,A.ap,n,n,B.a([],m))
m.E(new B.b5(e.gbR().a,e.b))
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
m.E(new B.b5(e.gbR().a,e.b))
m.E(new B.ap(e.c,e.gbR().b))
m.E(new B.ap(e.gbR().a,e.d))
m.E(new B.ap(e.a,e.gbR().b))
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
m.b8k(new B.u(t,p),new B.aV(s,s))
m.E(new B.ap(t,u))
m.E(new B.bF())
return m
default:m=new B.aQ($.X().r,A.ap,n,n,B.a([],m))
m.E(new B.nX(e))
return m}},
fv6(d,e,f){return B.cn(new C.fv7(D.eHC.t(0,d),d,f,e))},
b_I:function b_I(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
cbW:function cbW(d){this.a=d},
cbV:function cbV(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cbU:function cbU(){},
b_F:function b_F(d,e){this.b=d
this.a=e},
fxx:function fxx(d){this.a=d},
fxw:function fxw(d,e){this.a=d
this.b=e},
fif:function fif(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fid:function fid(d){this.a=d},
fie:function fie(d,e){this.a=d
this.b=e},
aHx:function aHx(d,e){this.c=d
this.a=e},
bsM:function bsM(d,e){var _=this
_.d=$
_.bq$=d
_.a7$=e
_.c=_.a=null},
f0x:function f0x(d,e,f){this.a=d
this.b=e
this.c=f},
aI9:function aI9(d,e){this.b=d
this.a=e},
Ug:function Ug(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bhT:function bhT(d,e){var _=this
_.d=$
_.bq$=d
_.a7$=e
_.c=_.a=null},
dPL:function dPL(d){this.a=d},
dPK:function dPK(d){this.a=d},
dPJ:function dPJ(d){this.a=d},
Ia:function Ia(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cbO:function cbO(d){this.a=d},
cbN:function cbN(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ayh:function ayh(d,e){this.c=d
this.a=e},
bcn:function bcn(){this.d=0
this.c=this.a=null},
d2j:function d2j(d){this.a=d},
d2i:function d2i(d){this.a=d},
a6Z:function a6Z(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bix:function bix(d,e){var _=this
_.d=null
_.bq$=d
_.a7$=e
_.c=_.a=null},
e9O:function e9O(d,e,f){this.a=d
this.b=e
this.c=f},
aYE:function aYE(d,e,f,g){var _=this
_.c=d
_.e=e
_.f=f
_.a=g},
bdx:function bdx(d,e,f){this.b=d
this.c=e
this.a=f},
boo:function boo(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
eQR:function eQR(){},
fv7:function fv7(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bpo:function bpo(d,e,f){this.b=d
this.c=e
this.a=f},
aK9:function aK9(){},
aKF:function aKF(){},
aM_:function aM_(){},
fyx(){var w=0,v=B.j(x.a6),u,t,s,r
var $async$fyx=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.wQ.c5().Lu(D.d8D,A.tB,!0),$async$fyx)
case 3:r=e
if(r==null||J.ck(r.a)){u=null
w=1
break}t=J.fo(r.a)
s=t.c
if(s==null)throw B.U("That file could not be opened. Try another file.")
if(s.length>8388608)throw B.U("That file is too big. Use a file under 8 MB.")
u=C.i_9(t.b,s)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fyx,v)},
i_9(d,e){var w,v=d.toLowerCase()
if(A.a.cb(v,".pdf"))return new C.a7h(d,new B.a_h(A.cS.gcv().aJ(e),"application/pdf"),"")
if(A.a.cb(v,".docx")){w=C.hSd(e)
if(A.a.i(w).length===0)throw B.U("No readable words were found in that Word file.")
return new C.a7h(d,null,w.length>6e4?A.a.ap(w,0,6e4):w)}w=A.c4.Ki(0,e,!0)
if(A.a.i(w).length===0)throw B.U("That file is empty.")
return new C.a7h(d,null,w.length>6e4?A.a.ap(w,0,6e4):w)},
hSd(d){var w,v,u,t,s,r,q,p,o=null,n=new C.cuO().cGJ(B.r1(d,A.hT,o,o),o,o,!1).cIq(0,"word/document.xml")
if(n==null)return""
w=n.cQo()
v=A.c4.Ki(0,w==null?$.hiZ():w,!0).split("</w:p>")
u=new B.fd("")
for(w=v.length,t=x.N,s=0;s<w;++s){r=v[s]
q=B.af("<w:t[^>]*>([^<]*)</w:t>",!0,!1,!1,!1).kR(0,r)
p=A.a.i(B.cD(q,new C.fl4(),B.a4(q).k("J.E"),t).fW(0))
if(p.length!==0){q=B.aJ(p,"&lt;","<")
q=B.aJ(q,"&gt;",">")
q=B.aJ(q,"&quot;",'"')
q=B.aJ(q,"&apos;","'")
q=B.aJ(q,"&amp;","&")+"\n"
u.a+=q}}w=u.a
return w.charCodeAt(0)==0?w:w},
a7h:function a7h(d,e,f){this.a=d
this.b=e
this.c=f},
fl4:function fl4(){},
hzX(d,e,f,g,h,i,j,k,l){return new C.Ni(l,e,d,g,f,i,h,j,k,null)},
Ni:function Ni(d,e,f,g,h,i,j,k,l,m){var _=this
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
aD8:function aD8(d,e,f,g,h,i,j,k,l){var _=this
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
esp:function esp(d){this.a=d},
esn:function esn(){},
eso:function eso(d){this.a=d},
eoN:function eoN(){},
eoO:function eoO(){},
eoP:function eoP(d,e){this.a=d
this.b=e},
eqn:function eqn(d){this.a=d},
eqb:function eqb(){},
eqc:function eqc(){},
eoa:function eoa(){},
erv:function erv(d){this.a=d},
esl:function esl(d,e){this.a=d
this.b=e},
eql:function eql(d,e){this.a=d
this.b=e},
es8:function es8(d){this.a=d},
es9:function es9(){},
esa:function esa(){},
esb:function esb(d){this.a=d},
esc:function esc(){},
enz:function enz(d){this.a=d},
esm:function esm(){},
epu:function epu(d,e){this.a=d
this.b=e},
enx:function enx(d){this.a=d},
eny:function eny(d){this.a=d},
epR:function epR(d){this.a=d},
epS:function epS(d,e,f){this.a=d
this.b=e
this.c=f},
epT:function epT(d){this.a=d},
ept:function ept(){},
eps:function eps(d){this.a=d},
epq:function epq(){},
epp:function epp(d){this.a=d},
epr:function epr(){},
eoJ:function eoJ(d){this.a=d},
eoK:function eoK(d){this.a=d},
epA:function epA(d){this.a=d},
epv:function epv(d){this.a=d},
epw:function epw(d){this.a=d},
epx:function epx(d){this.a=d},
epy:function epy(d){this.a=d},
epz:function epz(d){this.a=d},
epB:function epB(d,e){this.a=d
this.b=e},
enB:function enB(){},
enC:function enC(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
epM:function epM(){},
epN:function epN(d,e){this.a=d
this.b=e},
epK:function epK(d,e,f){this.a=d
this.b=e
this.c=f},
epL:function epL(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
epE:function epE(d,e,f){this.a=d
this.b=e
this.c=f},
epF:function epF(d,e,f){this.a=d
this.b=e
this.c=f},
epG:function epG(d){this.a=d},
epH:function epH(d,e){this.a=d
this.b=e},
epI:function epI(d,e){this.a=d
this.b=e},
epJ:function epJ(d,e){this.a=d
this.b=e},
epD:function epD(d,e){this.a=d
this.b=e},
epP:function epP(d){this.a=d},
epQ:function epQ(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
epO:function epO(d){this.a=d},
eq6:function eq6(){},
eq7:function eq7(){},
eq8:function eq8(){},
eq9:function eq9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eq3:function eq3(d){this.a=d},
eq5:function eq5(){},
eq4:function eq4(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
eq1:function eq1(d,e,f){this.a=d
this.b=e
this.c=f},
eq2:function eq2(d,e){this.a=d
this.b=e},
eqa:function eqa(){},
epC:function epC(d,e){this.a=d
this.b=e},
enS:function enS(){},
enT:function enT(d,e,f){this.a=d
this.b=e
this.c=f},
enU:function enU(d){this.a=d},
enV:function enV(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
enR:function enR(d){this.a=d},
eqg:function eqg(d){this.a=d},
eqf:function eqf(d,e){this.a=d
this.b=e},
eqe:function eqe(d,e){this.a=d
this.b=e},
eqd:function eqd(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eqh:function eqh(d,e){this.a=d
this.b=e},
emw:function emw(d,e){this.a=d
this.b=e},
enQ:function enQ(d,e){this.a=d
this.b=e},
enO:function enO(d){this.a=d},
eqp:function eqp(d,e,f){this.a=d
this.b=e
this.c=f},
enK:function enK(d,e){this.a=d
this.b=e},
enJ:function enJ(d){this.a=d},
eqo:function eqo(d,e,f){this.a=d
this.b=e
this.c=f},
enA:function enA(d){this.a=d},
eob:function eob(){},
es6:function es6(d,e){this.a=d
this.b=e},
es7:function es7(d,e,f){this.a=d
this.b=e
this.c=f},
erw:function erw(d,e,f){this.a=d
this.b=e
this.c=f},
emx:function emx(d){this.a=d},
emu:function emu(d,e){this.a=d
this.b=e},
emk:function emk(d,e){this.a=d
this.b=e},
emh:function emh(d){this.a=d},
emg:function emg(d,e){this.a=d
this.b=e},
emi:function emi(d,e){this.a=d
this.b=e},
enM:function enM(d){this.a=d},
enN:function enN(d,e){this.a=d
this.b=e},
enL:function enL(d){this.a=d},
emZ:function emZ(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
en_:function en_(d,e){this.a=d
this.b=e},
en3:function en3(d,e){this.a=d
this.b=e},
en4:function en4(d){this.a=d},
en1:function en1(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
en2:function en2(d){this.a=d},
en0:function en0(){},
emY:function emY(d,e,f){this.a=d
this.b=e
this.c=f},
eq0:function eq0(d,e){this.a=d
this.b=e},
esf:function esf(d){this.a=d},
esg:function esg(d,e){this.a=d
this.b=e},
esh:function esh(d){this.a=d},
esi:function esi(d,e,f){this.a=d
this.b=e
this.c=f},
ese:function ese(d){this.a=d},
erM:function erM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
erL:function erL(d,e,f){this.a=d
this.b=e
this.c=f},
erK:function erK(){},
erJ:function erJ(d,e,f){this.a=d
this.b=e
this.c=f},
erI:function erI(d,e){this.a=d
this.b=e},
erF:function erF(d,e,f){this.a=d
this.b=e
this.c=f},
erD:function erD(d){this.a=d},
erE:function erE(d){this.a=d},
erH:function erH(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
erG:function erG(d){this.a=d},
eoF:function eoF(d,e){this.a=d
this.b=e},
eoE:function eoE(d,e){this.a=d
this.b=e},
erx:function erx(){},
es5:function es5(d,e){this.a=d
this.b=e},
es3:function es3(d){this.a=d},
es4:function es4(d){this.a=d},
emp:function emp(d,e){this.a=d
this.b=e},
emn:function emn(d){this.a=d},
emo:function emo(d){this.a=d},
emq:function emq(d,e){this.a=d
this.b=e},
emr:function emr(d,e,f){this.a=d
this.b=e
this.c=f},
emv:function emv(d,e){this.a=d
this.b=e},
emm:function emm(d,e,f){this.a=d
this.b=e
this.c=f},
eml:function eml(d){this.a=d},
eqm:function eqm(d,e,f){this.a=d
this.b=e
this.c=f},
esd:function esd(d,e,f){this.a=d
this.b=e
this.c=f},
eoI:function eoI(d,e,f){this.a=d
this.b=e
this.c=f},
eoH:function eoH(){},
en7:function en7(d,e,f){this.a=d
this.b=e
this.c=f},
en8:function en8(d){this.a=d},
emj:function emj(d,e){this.a=d
this.b=e},
eo9:function eo9(d,e){this.a=d
this.b=e},
ems:function ems(d,e){this.a=d
this.b=e},
emB:function emB(d){this.a=d},
emC:function emC(d,e){this.a=d
this.b=e},
emD:function emD(d,e){this.a=d
this.b=e},
emA:function emA(d){this.a=d},
emO:function emO(d,e){this.a=d
this.b=e},
emz:function emz(d){this.a=d},
emR:function emR(d){this.a=d},
emS:function emS(d){this.a=d},
emT:function emT(d){this.a=d},
emU:function emU(d){this.a=d},
emV:function emV(d){this.a=d},
emW:function emW(){},
emX:function emX(){},
emE:function emE(d){this.a=d},
emF:function emF(d){this.a=d},
emG:function emG(d){this.a=d},
emH:function emH(d){this.a=d},
emI:function emI(d){this.a=d},
emJ:function emJ(d){this.a=d},
emK:function emK(d){this.a=d},
emL:function emL(d){this.a=d},
emM:function emM(d){this.a=d},
emN:function emN(d){this.a=d},
emP:function emP(d){this.a=d},
emQ:function emQ(d,e){this.a=d
this.b=e},
eo8:function eo8(d,e,f){this.a=d
this.b=e
this.c=f},
eo7:function eo7(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eo6:function eo6(d,e,f){this.a=d
this.b=e
this.c=f},
eo5:function eo5(d,e){this.a=d
this.b=e},
emt:function emt(d,e){this.a=d
this.b=e},
enb:function enb(d){this.a=d},
ena:function ena(d){this.a=d},
en9:function en9(d,e){this.a=d
this.b=e},
enc:function enc(d){this.a=d},
end:function end(d){this.a=d},
ene:function ene(d,e){this.a=d
this.b=e},
enP:function enP(d){this.a=d},
eq_:function eq_(d,e){this.a=d
this.b=e},
epZ:function epZ(d,e){this.a=d
this.b=e},
epY:function epY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
epW:function epW(d){this.a=d},
epX:function epX(d,e){this.a=d
this.b=e},
epU:function epU(){},
epV:function epV(){},
ery:function ery(){},
erz:function erz(d,e){this.a=d
this.b=e},
erA:function erA(){},
erB:function erB(d){this.a=d},
erC:function erC(d,e){this.a=d
this.b=e},
emy:function emy(d,e){this.a=d
this.b=e},
enD:function enD(){},
enE:function enE(){},
enF:function enF(){},
enI:function enI(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
enH:function enH(d,e){this.a=d
this.b=e},
enG:function enG(d,e,f){this.a=d
this.b=e
this.c=f},
ep8:function ep8(d){this.a=d},
ep7:function ep7(){},
ep9:function ep9(d,e){this.a=d
this.b=e},
epa:function epa(d,e){this.a=d
this.b=e},
ep6:function ep6(d){this.a=d},
epb:function epb(d,e){this.a=d
this.b=e},
ep5:function ep5(d){this.a=d},
epc:function epc(d,e){this.a=d
this.b=e},
ep4:function ep4(d){this.a=d},
epd:function epd(d,e){this.a=d
this.b=e},
ep3:function ep3(d){this.a=d},
epe:function epe(d,e){this.a=d
this.b=e},
ep2:function ep2(d,e){this.a=d
this.b=e},
epf:function epf(d,e){this.a=d
this.b=e},
ep1:function ep1(d){this.a=d},
epg:function epg(d,e){this.a=d
this.b=e},
ep0:function ep0(d){this.a=d},
eoU:function eoU(d,e){this.a=d
this.b=e},
eoV:function eoV(d){this.a=d},
eoW:function eoW(d){this.a=d},
eoT:function eoT(d){this.a=d},
eoX:function eoX(d,e){this.a=d
this.b=e},
eoS:function eoS(d){this.a=d},
eoY:function eoY(d,e){this.a=d
this.b=e},
eoR:function eoR(d){this.a=d},
eoZ:function eoZ(d,e){this.a=d
this.b=e},
eoQ:function eoQ(d){this.a=d},
ep_:function ep_(d){this.a=d},
eo1:function eo1(d){this.a=d},
eo2:function eo2(d){this.a=d},
eo4:function eo4(d){this.a=d},
enX:function enX(d){this.a=d},
enW:function enW(d,e){this.a=d
this.b=e},
enY:function enY(d,e){this.a=d
this.b=e},
enZ:function enZ(d){this.a=d},
eo_:function eo_(d){this.a=d},
eo0:function eo0(d,e){this.a=d
this.b=e},
eo3:function eo3(d){this.a=d},
esj:function esj(d){this.a=d},
esk:function esk(d){this.a=d},
epj:function epj(d,e){this.a=d
this.b=e},
epi:function epi(d,e){this.a=d
this.b=e},
eph:function eph(d,e){this.a=d
this.b=e},
epk:function epk(d){this.a=d},
epl:function epl(d){this.a=d},
eqI:function eqI(d,e){this.a=d
this.b=e},
eqJ:function eqJ(d){this.a=d},
eqK:function eqK(d){this.a=d},
eqV:function eqV(d){this.a=d},
er5:function er5(d){this.a=d},
erg:function erg(d){this.a=d},
ern:function ern(d){this.a=d},
ero:function ero(d){this.a=d},
erp:function erp(d){this.a=d},
erq:function erq(d){this.a=d},
err:function err(d,e){this.a=d
this.b=e},
eqL:function eqL(d){this.a=d},
eqM:function eqM(d){this.a=d},
eqN:function eqN(d){this.a=d},
eqO:function eqO(d){this.a=d},
eqP:function eqP(d){this.a=d},
eqQ:function eqQ(d){this.a=d},
eqR:function eqR(d){this.a=d},
eqS:function eqS(d){this.a=d},
eqT:function eqT(d){this.a=d},
eqU:function eqU(d){this.a=d},
eqW:function eqW(d){this.a=d},
eqX:function eqX(d){this.a=d},
eqY:function eqY(d){this.a=d},
eqZ:function eqZ(d){this.a=d},
er_:function er_(d){this.a=d},
er0:function er0(d){this.a=d},
er1:function er1(d){this.a=d},
er2:function er2(d){this.a=d},
er3:function er3(d){this.a=d},
eqy:function eqy(d){this.a=d},
er4:function er4(d){this.a=d},
eqG:function eqG(d){this.a=d},
er6:function er6(d){this.a=d},
eqF:function eqF(d,e){this.a=d
this.b=e},
er7:function er7(d,e){this.a=d
this.b=e},
er8:function er8(d,e){this.a=d
this.b=e},
eqE:function eqE(d,e,f){this.a=d
this.b=e
this.c=f},
equ:function equ(d,e){this.a=d
this.b=e},
eqH:function eqH(d){this.a=d},
ers:function ers(d,e){this.a=d
this.b=e},
eru:function eru(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ert:function ert(d,e){this.a=d
this.b=e},
er9:function er9(d,e,f){this.a=d
this.b=e
this.c=f},
eqD:function eqD(d,e,f){this.a=d
this.b=e
this.c=f},
eqt:function eqt(d,e,f){this.a=d
this.b=e
this.c=f},
eqr:function eqr(d,e){this.a=d
this.b=e},
era:function era(d,e){this.a=d
this.b=e},
eqC:function eqC(d,e){this.a=d
this.b=e},
eqs:function eqs(d,e){this.a=d
this.b=e},
eqq:function eqq(d,e){this.a=d
this.b=e},
erb:function erb(d){this.a=d},
eqB:function eqB(d){this.a=d},
erc:function erc(d){this.a=d},
erd:function erd(d){this.a=d},
ere:function ere(d){this.a=d},
erf:function erf(d){this.a=d},
eqA:function eqA(d){this.a=d},
erh:function erh(d){this.a=d},
eri:function eri(d){this.a=d},
erj:function erj(d,e){this.a=d
this.b=e},
eqz:function eqz(d){this.a=d},
erk:function erk(d,e){this.a=d
this.b=e},
eqx:function eqx(d){this.a=d},
erl:function erl(d,e){this.a=d
this.b=e},
eqw:function eqw(d){this.a=d},
erm:function erm(d,e){this.a=d
this.b=e},
eqv:function eqv(d){this.a=d},
en6:function en6(d,e,f){this.a=d
this.b=e
this.c=f},
en5:function en5(d,e){this.a=d
this.b=e},
erP:function erP(d,e){this.a=d
this.b=e},
erO:function erO(d,e){this.a=d
this.b=e},
erQ:function erQ(d,e){this.a=d
this.b=e},
erN:function erN(d,e){this.a=d
this.b=e},
eoe:function eoe(d,e){this.a=d
this.b=e},
eod:function eod(d){this.a=d},
eof:function eof(d,e){this.a=d
this.b=e},
eoc:function eoc(d){this.a=d},
eoM:function eoM(){},
eoL:function eoL(){},
es1:function es1(d){this.a=d},
es0:function es0(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
es_:function es_(d,e){this.a=d
this.b=e},
erV:function erV(d,e){this.a=d
this.b=e},
erZ:function erZ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
erW:function erW(d,e){this.a=d
this.b=e},
erR:function erR(d){this.a=d},
erS:function erS(d){this.a=d},
erT:function erT(d){this.a=d},
erU:function erU(d){this.a=d},
erX:function erX(d,e){this.a=d
this.b=e},
erY:function erY(d,e){this.a=d
this.b=e},
es2:function es2(d){this.a=d},
enw:function enw(d){this.a=d},
env:function env(d,e,f){this.a=d
this.b=e
this.c=f},
enu:function enu(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
enj:function enj(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
enk:function enk(d,e){this.a=d
this.b=e},
enl:function enl(d,e){this.a=d
this.b=e},
enm:function enm(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eni:function eni(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
enn:function enn(d,e){this.a=d
this.b=e},
enp:function enp(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eno:function eno(d,e){this.a=d
this.b=e},
enq:function enq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
enh:function enh(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
enr:function enr(d,e){this.a=d
this.b=e},
eng:function eng(d,e){this.a=d
this.b=e},
ens:function ens(d,e){this.a=d
this.b=e},
enf:function enf(d){this.a=d},
ent:function ent(d,e){this.a=d
this.b=e},
epn:function epn(d){this.a=d},
epm:function epm(d){this.a=d},
epo:function epo(d,e){this.a=d
this.b=e},
eos:function eos(d,e){this.a=d
this.b=e},
eot:function eot(d,e){this.a=d
this.b=e},
eor:function eor(d,e){this.a=d
this.b=e},
eou:function eou(d,e){this.a=d
this.b=e},
eoq:function eoq(d,e){this.a=d
this.b=e},
eov:function eov(d,e){this.a=d
this.b=e},
eop:function eop(d,e){this.a=d
this.b=e},
eow:function eow(d,e){this.a=d
this.b=e},
eoo:function eoo(d,e){this.a=d
this.b=e},
eox:function eox(d,e){this.a=d
this.b=e},
eon:function eon(d,e){this.a=d
this.b=e},
eoy:function eoy(d,e,f){this.a=d
this.b=e
this.c=f},
eom:function eom(d,e){this.a=d
this.b=e},
eoz:function eoz(d,e,f){this.a=d
this.b=e
this.c=f},
eol:function eol(d,e){this.a=d
this.b=e},
eoA:function eoA(d,e){this.a=d
this.b=e},
eok:function eok(d,e,f){this.a=d
this.b=e
this.c=f},
eoh:function eoh(d,e){this.a=d
this.b=e},
eoB:function eoB(d,e){this.a=d
this.b=e},
eoj:function eoj(d,e){this.a=d
this.b=e},
eoC:function eoC(d,e){this.a=d
this.b=e},
eoi:function eoi(d,e,f){this.a=d
this.b=e
this.c=f},
eog:function eog(d,e){this.a=d
this.b=e},
eoD:function eoD(d,e){this.a=d
this.b=e},
eoG:function eoG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
emf:function emf(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eqk:function eqk(d,e){this.a=d
this.b=e},
eqi:function eqi(d){this.a=d},
eqj:function eqj(d,e){this.a=d
this.b=e},
aef:function aef(d,e,f){this.a=d
this.b=e
this.c=f},
axE:function axE(d,e){this.c=d
this.a=e},
bba:function bba(d,e){var _=this
_.e=_.d=$
_.cS$=d
_.b2$=e
_.c=_.a=null},
cZl:function cZl(d){this.a=d},
cZk:function cZk(d){this.a=d},
bbo:function bbo(d,e){this.c=d
this.a=e},
cZH:function cZH(d){this.a=d},
cZI:function cZI(d){this.a=d},
Jb:function Jb(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bb9:function bb9(){this.d=!1
this.c=this.a=null},
cZi:function cZi(d){this.a=d},
cZe:function cZe(d){this.a=d},
cZj:function cZj(d){this.a=d},
cZd:function cZd(d){this.a=d},
cZh:function cZh(d){this.a=d},
cZf:function cZf(d){this.a=d},
cZg:function cZg(d,e){this.a=d
this.b=e},
OX:function OX(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
ZN:function ZN(d,e,f){this.c=d
this.d=e
this.a=f},
aDb:function aDb(d,e,f){var _=this
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
et_:function et_(){},
esQ:function esQ(d){this.a=d},
esZ:function esZ(d){this.a=d},
esR:function esR(d){this.a=d},
esS:function esS(d){this.a=d},
esM:function esM(d){this.a=d},
esN:function esN(d,e){this.a=d
this.b=e},
esO:function esO(d){this.a=d},
esP:function esP(d,e,f){this.a=d
this.b=e
this.c=f},
esX:function esX(){},
esY:function esY(d){this.a=d},
esT:function esT(d){this.a=d},
esU:function esU(d){this.a=d},
esV:function esV(d){this.a=d},
esW:function esW(d){this.a=d},
et0:function et0(d,e,f){this.a=d
this.b=e
this.c=f},
et2:function et2(d,e){this.a=d
this.b=e},
et1:function et1(d){this.a=d},
Jj:function Jj(d,e){this.c=d
this.a=e},
bpT:function bpT(d,e){this.b=d
this.a=e},
bg0:function bg0(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bg_:function bg_(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aIR:function aIR(){},
aKT:function aKT(){},
bvA:function bvA(){},
aKU:function aKU(){},
fAs(){var w=0,v=B.j(x.bZ),u,t,s,r,q
var $async$fAs=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.wQ.c5().Lu(B.a(["pdf"],x.s),A.tB,!0),$async$fAs)
case 3:q=e
if(q==null||J.ck(q.a)){u=null
w=1
break}t=J.fo(q.a)
s=t.c
if(s==null||s.length===0){u=null
w=1
break}r=A.a.i(t.b)
if(r.length===0)r="document.pdf"
u=new B.bn9(s,"data:application/pdf;base64,"+A.cS.gcv().aJ(s),r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fAs,v)},
i_K(d){var w,v,u,t,s,r
try{w=B.jm(d,0,null)
v=B.af("/Type\\s*/Pages[^>]*?/Count\\s+(\\d+)",!0,!0,!1,!1).cD(w)
if(v!=null){s=v.b[1]
s.toString
u=B.c7(s,null)
if(u!=null&&u>0){s=A.o.D(u,1,200)
return s}}t=B.af("/Type\\s*/Page\\b",!0,!1,!1,!1).kR(0,w).gM(0)
if(t>0){s=J.aPt(t,1,200)
return s}}catch(r){}return 1},
fAj(d){return C.i_J(d)},
i_J(d){var w=0,v=B.j(x.T),u
var $async$fAj=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(!A.a.a0(d,"data:image")){u=d
w=1
break}u=d
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fAj,v)},
bBa(d,e,f,g){return C.i_T(d,e,f,g)},
i_T(b6,b7,b8,b9){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$bBa=B.e(function(c0,c1){if(c0===1){s.push(c1)
w=t}for(;;)switch(w){case 0:if(!new B.e7(b6,x.co).gaf(0).C()){u=null
w=1
break}t=4
r=A.k.D(b7.a,80,2400)
q=A.k.D(b7.b,80,2400)
p=B.hhl(b9,new B.at(r,q))
o=1
n=1
m=0
l=0
for(a7=b6.length,a8=0;a8<a7;++a8){k=b6[a8]
if(k==null)continue
a9=o
b0=k.a
o=Math.min(B.lJ(a9),b0)
b0=n
a9=k.b
n=Math.min(B.lJ(b0),a9)
a9=m
b0=k.a
m=Math.max(B.lJ(a9),b0)
b0=l
a9=k.b
l=Math.max(B.lJ(b0),a9)}o=A.k.D(o-0.04,0,1)
n=A.k.D(n-0.04,0,1)
m=A.k.D(m+0.04,0,1)
l=A.k.D(l+0.04,0,1)
j=A.k.D(m-o,0.12,1)
i=A.k.D(l-n,0.12,1)
h=A.o.D(A.k.V(800*(i/j)),180,420)
$.X()
g=new B.rT()
f=B.GC(g,null)
a7=B.M()
a7.r=A.qz.gp(0)
f.aY(new B.aa(0,0,800,0+h),a7)
e=800/(j*r)
b1=B.M()
b1.r=b8.gp(b8)
b1.c=p*e
b1.d=A.bO
b1.e=A.fA
b1.b=A.ae
b1.f=!0
d=b1
a0=null
for(a7=b6.length,a8=0;a8<b6.length;b6.length===a7||(0,B.L)(b6),++a8){a1=b6[a8]
if(a1==null){a0=null
continue}a2=new B.u((a1.a-o)/j*800,(a1.b-n)/i*h)
if(a0!=null){a9=a0
b0=a2
b2=d.H()
b3=f.a
b3.drawLine.apply(b3,[a9.a,a9.b,b0.a,b0.b,b2])
b2.delete()}a0=a2}a3=g.qh()
w=7
return B.b(a3.z0(800,h),$async$bBa)
case 7:a4=c1
a3.q()
w=8
return B.b(a4.hp(A.fW),$async$bBa)
case 8:a5=c1
a4.q()
if(a5==null){u=null
w=1
break}a7=J.fa(A.dH.gaP(a5))
a7=A.cS.gcv().aJ(a7)
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
return B.i($async$bBa,v)},
aOG(d,e,f){return C.i_H(d,e,f)},
i_H(d,e,f){var w=0,v=B.j(x.go),u,t,s,r,q
var $async$aOG=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:r={}
q=B.a([],x.bA)
r.a=null
r.b=e==null?A.aB:e
r.c=f==null?5.2:f
w=3
return B.b(B.agD(d,e,f,new C.fAh(r,q),q,"Sign document"),$async$aOG)
case 3:if(!new B.e7(q,x.co).gaf(0).C()||r.a==null){u=null
w=1
break}t=r.a
t.toString
w=4
return B.b(C.bBa(q,t,r.b,r.c),$async$aOG)
case 4:s=h
if(s==null){u=null
w=1
break}u=new C.b_M(s,r.c,r.b)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aOG,v)},
i_R(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h="&amp;",g="&lt;",f="&gt;",e="&quot;",d='<!DOCTYPE html><html><head><meta charset="utf-8"><title>'+C.haz(a0.b)+'</title>\n<style>\n  @page { size: 210mm 297mm; margin: 1.7mm; }\n  * { box-sizing: border-box; }\n  body { font-family: system-ui, sans-serif; background: #fff; color: #111; margin: 0; }\n  h1 { font-size: 14px; margin: 6px 10mm; }\n  .slide { page-break-after: always; width: 100%; height: 293.6mm; border: 1px solid #ddd; position: relative; overflow: hidden; margin: 0 auto 24px; }\n  /* Requested after the margin was already trimmed to near zero: a real\n     zoom-in on the whole slide (frame included), not just less border.\n     `.slide` keeps overflow:hidden so whatever spills past the edge at\n     this scale gets cropped instead of pushing the page layout around.\n     Width and height scale independently \u2014 a separate "wider on the\n     left and right only" request on top of the overall zoom. */\n  .zoom { position: absolute; inset: 0; transform: scaleX(1.0375) scaleY(1.01875); transform-origin: center center; }\n  .el { position: absolute; overflow: hidden; }\n  .txt { white-space: pre-wrap; word-break: break-word; }\n  img { max-width: 100%; max-height: 100%; object-fit: contain; }\n  .pdf { display:flex; flex-direction:column; align-items:center; justify-content:center; height:100%; background:#f8fafc; }\n</style></head><body>\n<h1>'+C.haz(a0.b)+"</h1>\n"
for(w=a0.r,v=0;v<w.length;++v){u=w[v]
d=d+('<div class="slide" style="background:#'+A.a.b0(A.a.aT(A.o.fQ(u.e,16),8,"0"),2)+'">\n')+'<div class="zoom">\n'
for(t=u.z,s=t.length,r=0;r<t.length;t.length===s||(0,B.L)(t),++r){q=t[r]
d+='<div class="el" style="left:'+A.k.aa(q.c*100,2)+"%;top:"+A.k.aa(q.d*100,2)+"%;width:"+A.k.aa(q.e*100,2)+"%;height:"+A.k.aa(q.f*100,2)+'%">'
p=q.b
switch(p.a){case 0:o=A.a.b0(A.a.aT(A.o.fQ(q.Q,16),8,"0"),2)
p=q.w
n=q.r
n=B.aJ(n,"&",h)
n=B.aJ(n,"<",g)
n=B.aJ(n,">",f)
d+='<div class="txt" style="font-size:'+B.t(p)+"px;color:#"+o+'">'+B.aJ(n,'"',e)+"</div>"
break
case 1:case 4:n=q.at
if(n!=null&&A.a.a0(n,"data:image")){m=p===D.lk&&q.c===0&&q.d===0&&q.e===1&&q.f===1?' style="object-fit:fill"':""
d+='<img src="'+n+'" alt=""'+m+" />"}break
case 3:p=q.db
if(p.length===0)p="PDF document"
p=B.aJ(p,"&",h)
p=B.aJ(p,"<",g)
p=B.aJ(p,">",f)
d+='<div class="pdf"><div>\ud83d\udcc4 '+B.aJ(p,'"',e)+"</div></div>"
break
case 2:d+='<div style="width:100%;height:100%;background:'+C.hab(q.ay)+";border:2px solid "+C.hab(q.ch)+'"></div>'
break
case 5:l=C.fUQ(q.r)
p=l==null
n=p?null:l.b
n=A.a.i(n==null?"":n).length===0?"My links":A.a.i(l.b)
n=B.aJ(n,"&",h)
n=B.aJ(n,"<",g)
n=B.aJ(n,">",f)
d=d+'<div style="width:100%;height:100%;box-sizing:border-box;background:#111114;border:4px solid #8E8A85;border-radius:18px;padding:18px 8px 8px;color:#fff;font-family:sans-serif;text-align:center;overflow:hidden">'+('<div style="font-weight:700;font-size:13px">'+B.aJ(n,'"',e)+"</div>")
p=p?null:l.gaiG()
if(p==null)p=A.avS
n=B.T(p)
k=n.k("pO<1>")
j=new B.pO(p,0,8,k)
j.GM(p,0,8,n.c)
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
hab(d){var w=A.o.aB(d,24)
return"rgba("+(A.o.aB(d,16)&255)+","+(A.o.aB(d,8)&255)+","+(d&255)+","+A.k.aa((w&255)/255,3)+")"},
haz(d){var w=B.aJ(d,"&","&amp;")
w=B.aJ(w,"<","&lt;")
w=B.aJ(w,">","&gt;")
return B.aJ(w,'"',"&quot;")},
bB8(d,e){var w=0,v=B.j(x.H)
var $async$bB8=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b(B.ca(null,null,!0,null,new C.fAq(e,C.i_R(e),d),d,null,!0,!0,x.H),$async$bB8)
case 2:return B.h(null,v)}})
return B.i($async$bB8,v)},
bB9(){var w=0,v=B.j(x.T),u,t,s
var $async$bB9=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A4.G8(92,2400),$async$bB9)
case 3:s=e
if(s==null){u=null
w=1
break}w=4
return B.b(C.fAj(s),$async$bB9)
case 4:t=e
u=t==null?s:t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bB9,v)},
aOH(d){var w=0,v=B.j(x.N),u,t,s,r,q
var $async$aOH=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.fW3(d),$async$aOH)
case 3:t=f
s=A.a.i(d.b)
r=B.af("[^\\w\\-. ]+",!0,!1,!1,!1)
q=A.a.i(B.aJ(s,r,"_"))
u=Z.fCH(t,q.length===0?"presentation":q)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aOH,v)},
h4v(d,e){var w
if(e<0||e>=d.r.length)return A.o.D(d.e,1,120)
w=d.r[e].w
return A.o.D(w>0?w:d.e,1,120)},
b_M:function b_M(d,e,f){this.a=d
this.b=e
this.c=f},
fAh:function fAh(d,e){this.a=d
this.b=e},
fAq:function fAq(d,e,f){this.a=d
this.b=e
this.c=f},
fAn:function fAn(d){this.a=d},
fAo:function fAo(d,e,f){this.a=d
this.b=e
this.c=f},
fAp:function fAp(d,e,f){this.a=d
this.b=e
this.c=f},
i_I(d){return C.kr(d.w)},
i_P(d){var w,v,u,t
if(d.length===0||!A.d.d9(d,C.i1x()))return null
for(w=d.length,v=0;v<w;++v){u=d[v].x
t=A.a.i(u==null?"":u)
if(t.length!==0)return t}return""},
yf(d){var w=A.a.i(d),v=B.af("[^A-Z0-9]",!0,!1,!1,!1),u=B.aJ(w.toUpperCase(),v,"")
w=$.hn_()
if(w.b.test(u))return u
return null},
hhn(d,e,f){var w,v,u=C.hvA(d),t=$.pi()
for(w=0;w<80;++w){v=u+A.a.aT(A.o.u(t.aA(1000)),3,"0")
if(!f.t(0,v))return v}return u+A.a.aT(A.o.u(Date.now()%1000),3,"0")},
i_V(d){var w,v,u,t,s=B.aX(x.N)
for(w=J.aW(d.a),v=new B.fk(w,d.b);v.C();){u=w.gU(w).y
t=C.yf(u==null?"":u)
if(t!=null)s.L(0,t)}return s},
fAf(d,e){var w,v=d.y,u=C.yf(v==null?"":v)
if(u!=null)return d.y=u
w=C.i_V(new B.a2(e,new C.fAg(d),B.T(e).k("a2<1>")))
v=d.x
return d.y=C.hhn(v==null?"":v,null,w)},
i_U(d){var w,v
if(d.length!==1)return null
w=A.d.gK(d)
if(!C.kr(w.w))return null
v=w.y
return C.yf(v==null?"":v)},
hzZ(){var w,v=$.pi(),u=J.e2(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aA(32)]
return"SL"+A.d.fW(u)},
Vi(){var w=0,v=B.j(x.P),u,t=2,s=[],r,q,p,o,n,m
var $async$Vi=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return B.b(B.c1(),$async$Vi)
case 3:if(!e){u=B.V(x.N,x.z)
w=1
break}t=5
w=8
return B.b(B.f1("ngmy_slides_transfer_qr_stashes_v1",null,!1,A.bG),$async$Vi)
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
return B.i($async$Vi,v)},
Vj(d){return C.hA_(d)},
hA_(d){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p
var $async$Vj=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return B.b(B.c1(),$async$Vj)
case 3:if(!f){w=1
break}t=5
w=8
return B.b(B.hB("ngmy_slides_transfer_qr_stashes_v1",B.F(["stashes",d,"savedAt",new B.S(Date.now(),0,!1).a6().ac()],x.N,x.z),!1,!1,A.cG,null),$async$Vj)
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
return B.i($async$Vj,v)},
a7j(a0,a1,a2,a3,a4){var w=0,v=B.j(x.gl),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$a7j=B.e(function(a5,a6){if(a5===1)return B.f(a6,v)
for(;;)switch(w){case 0:w=3
return B.b(B.c1(),$async$a7j)
case 3:if(!a6){u=null
w=1
break}t=A.a.i(a0)
if(t.length===0){u=null
w=1
break}w=4
return B.b(C.Vi(),$async$a7j)
case 4:s=a6
r=C.yf(a2==null?"":a2)
if(r==null)r=a3!=null?C.hhn(a3,null,A.Ie):null
q=x.N
p=B.aX(q)
for(o=J.dj(s),n=J.aW(o.gi0(s)),m=x.f;n.C();){l=n.gU(n)
if(!m.b(l))continue
k=J.q(l,"claimCode")
j=C.yf(J.k(k==null?"":k))
if(j!=null)p.L(0,j)}n=o.gdK(s),n=n.gaf(n),k=x.z
case 5:if(!n.C()){w=6
break}i=n.gU(n)
h=i.b
if(!m.b(h)){w=5
break}g=B.a1(h,q,k)
h=g.h(0,"bundleId")
if(J.k(h==null?"":h)!==a1){w=5
break}q=A.dJ.aJ(t)
g.n(0,"payload",A.cS.gcv().aJ(q))
g.n(0,"ownerEmail",A.a.i(a4))
g.n(0,"updatedAt",new B.S(Date.now(),0,!1).a6().ac())
if(D.Sb.t(0,A.a.i(a4.toLowerCase())))g.n(0,"sharedByAdmin",!0)
if(r!=null){g.n(0,"kind","marriage")
g.n(0,"usesRemaining",2)
f=r}else{q=g.h(0,"claimCode")
f=C.yf(J.k(q==null?"":q))
if(f==null)f=C.h4A(p)
g.n(0,"usesRemaining",25)}g.n(0,"claimCode",f)
q=i.a
o.n(s,q,g)
w=7
return B.b(C.Vj(s),$async$a7j)
case 7:u=new B.aEB(f,"NGMYSLIDESYNC2|"+q,q)
w=1
break
w=5
break
case 6:e=C.hzZ()
n=r==null
d=n?C.h4A(p):r
q=B.V(q,x.C)
q.n(0,"ownerEmail",A.a.i(a4))
q.n(0,"bundleId",a1)
m=A.dJ.aJ(t)
q.n(0,"payload",A.cS.gcv().aJ(m))
n=!n
q.n(0,"usesRemaining",n?2:25)
q.n(0,"createdAt",new B.S(Date.now(),0,!1).a6().ac())
if(D.Sb.t(0,A.a.i(a4.toLowerCase())))q.n(0,"sharedByAdmin",!0)
q.n(0,"claimCode",d)
if(n)q.n(0,"kind","marriage")
o.n(s,e,q)
w=8
return B.b(C.Vj(s),$async$a7j)
case 8:u=new B.aEB(d,"NGMYSLIDESYNC2|"+e,e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a7j,v)},
h4A(d){var w,v,u=$.pi()
for(w=0;w<200;++w){v="SL"+A.a.aT(A.o.u(u.aA(1000)),3,"0")
if(d.L(0,v))return v}return"SL"+A.a.aT(A.o.u(Date.now()%1000),3,"0")},
aq3(d){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$aq3=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=A.a.i(d)
p=q.length===0
if(p)f=p
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.c1(),$async$aq3)
case 5:f=!f
case 4:if(f){w=1
break}w=6
return B.b(C.Vi(),$async$aq3)
case 6:t=f
s=J.a8(t)
r=s.gM(t)
s.bm(t,new C.ccl(q))
w=s.gM(t)!==r?7:8
break
case 7:w=9
return B.b(C.Vj(t),$async$aq3)
case 9:case 8:case 1:return B.h(u,v)}})
return B.i($async$aq3,v)},
aq2(d){var w=0,v=B.j(x.T),u,t,s,r,q,p,o
var $async$aq2=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:p=C.yf(d)
o=p==null
if(o)f=o
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.c1(),$async$aq2)
case 5:f=!f
case 4:if(f){u=null
w=1
break}o=J
w=6
return B.b(C.Vi(),$async$aq2)
case 6:t=o.js(f),t=t.gaf(t),s=x.f
case 7:if(!t.C()){w=8
break}r=t.gU(t)
q=r.b
if(!s.b(q)){w=7
break}q=J.q(q,"claimCode")
if(C.yf(J.k(q==null?"":q))===p){u=C.a7i(r.a)
w=1
break}w=7
break
case 8:u=null
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aq2,v)},
a7i(d){var w=0,v=B.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$a7i=B.e(function(a0,a1){if(a0===1)return B.f(a1,v)
for(;;)switch(w){case 0:g=A.a.i(d)
f=g.length===0
if(f)a1=f
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.c1(),$async$a7i)
case 5:a1=!a1
case 4:if(a1){u=null
w=1
break}w=6
return B.b(C.Vi(),$async$a7i)
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
if(J.ad(t)===0){u=null
w=1
break}s=null
try{s=A.c4.ca(0,A.cE.aJ(t))}catch(e){u=null
w=1
break}if(A.a.i(s).length===0){u=null
w=1
break}k=l.h(n,"ownerEmail")
if(D.Sb.t(0,A.a.i(J.k(k==null?"":k).toLowerCase()))||J.z(l.h(n,"sharedByAdmin"),!0))try{r=A.R.aH(0,s,null)
if(m.b(r)){q=B.a1(r,x.N,x.z)
J.aG(q,"sharedByAdmin",!0)
s=A.R.ao(q,null)}}catch(e){}h=j-1
m=l.h(n,"kind")
m=J.k(m==null?"":m)
if(h<=0&&m!=="marriage")o.W(p,g)
else{m=x.N
l=x.z
l=B.dT(B.a1(n,m,l),m,l)
l.n(0,"usesRemaining",h)
l.n(0,"lastUsedAt",new B.S(Date.now(),0,!1).a6().ac())
o.n(p,g,l)}w=7
return B.b(C.Vj(p),$async$a7i)
case 7:u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a7i,v)},
i_O(d,e,f){var w,v=B.V(x.N,x.z)
v.n(0,"type","ngmy_slides_library_v1")
v.n(0,"ownerEmail",A.a.i(e))
v.n(0,"exportedAt",new B.S(Date.now(),0,!1).a6().ac())
if(f)v.n(0,"sharedByAdmin",!0)
w=B.T(d).k("K<1,a3<n,@>>")
w=B.B(new B.K(d,new C.fAm(),w),w.k("aj.E"))
v.n(0,"decks",w)
return v},
fAu(d,e,f,g){var w
if(e!=null){w=B.V(x.N,x.z)
w.n(0,"type","ngmy_slides_deck_v1")
w.n(0,"ownerEmail",A.a.i(f))
w.n(0,"exportedAt",new B.S(Date.now(),0,!1).a6().ac())
if(g)w.n(0,"sharedByAdmin",!0)
w.n(0,"deck",e.ae())
return A.R.ao(w,null)}return A.R.ao(C.i_O(d==null?B.a([],x.D):d,f,g),null)},
fAt(d,e,f,g,h){var w=0,v=B.j(x.eb),u,t,s,r
var $async$fAt=B.e(function(i,j){if(i===1)return B.f(j,v)
for(;;)switch(w){case 0:w=3
return B.b(C.a7j(h,d,e,f,g),$async$fAt)
case 3:r=j
if(r!=null){t=r.b
s=r.a
if(s==null)s=C.yf(e==null?"":e)
u=new B.aEo(s,t)
w=1
break}t=A.dJ.aJ(h)
t=A.k7.gcv().aJ(t)
u=new B.aEo(C.yf(e==null?"":e),"NGMY_SL:"+t)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fAt,v)},
fW5(d){var w,v,u,t,s="ngmy_slides_deck_v1",r="ngmy_slides_library_v1",q=A.a.i(d)
if(J.ad(q)===0)return!1
if(J.cZ(q,"NGMYSLIDESYNC2|"))return!0
if(J.cZ(q,"NGMYSLIDECODE|"))return!0
if(J.cZ(q,"NGMY_SL:"))return!0
if(J.eZ(q,s)||J.eZ(q,r))return!0
if(J.cZ(q,"{"))try{w=A.R.aH(0,q,null)
if(x.f.b(w)){u=J.q(w,"type")
v=J.k(u==null?"":u)
u=J.z(v,s)||J.z(v,r)
return u}}catch(t){}return!1},
i_S(d){var w,v,u,t,s,r=d.z,q=r==null?null:A.a.i(r)
r=d.d
for(r=[q,r==null?null:A.a.i(r)],w=0;w<2;++w){v=r[w]
if(v==null||v.length===0)continue
if(C.fW5(v))return v
u=A.a.cJ(v,"NGMYSLIDESYNC2|")
if(u>=0){t=A.a.i(A.a.b0(v,u))
if(C.fW5(t))return t}s=A.a.cJ(v,"NGMY_SL:")
if(s>=0){t=A.a.i(A.a.b0(v,s))
if(C.fW5(t))return t}}return null},
fAi(d){var w,v,u,t=A.a.i(d)
if(J.ad(t)===0||J.cZ(t,"NGMYSLIDESYNC2|"))return B.a([],x.D)
try{w=null
v=x.P
if(J.cZ(t,"NGMY_SL:"))w=v.a(A.R.aH(0,A.c4.ca(0,A.cE.aJ(J.mz(t,8))),null))
else w=v.a(A.R.aH(0,t,null))
v=C.hJF(w)
return v}catch(u){v=B.a([],x.D)
return v}},
ago(d){var w=0,v=B.j(x.R),u,t,s,r,q
var $async$ago=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=A.a.i(d)
w=A.a.a0(q,"NGMYSLIDECODE|")?3:4
break
case 3:t=q.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return B.b(C.aq2(t[1]),$async$ago)
case 7:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fAi(s)
w=1
break}case 6:u=B.a([],x.D)
w=1
break
case 4:r=C.yf(q)
w=r!=null&&!A.a.t(q,"|")&&!A.a.a0(q,"{")?8:9
break
case 8:w=10
return B.b(C.aq2(r),$async$ago)
case 10:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fAi(s)
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
return B.b(C.a7i(t[1]),$async$ago)
case 15:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fAi(s)
w=1
break}case 14:u=B.a([],x.D)
w=1
break
case 12:u=C.fAi(q)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ago,v)},
hJF(d){var w,v,u,t=J.a8(d),s=t.h(d,"type"),r=J.k(s==null?"":s)
if(!J.z(t.h(d,"sharedByAdmin"),!0)){s=t.h(d,"ownerEmail")
w=D.Sb.t(0,A.a.i(J.k(s==null?"":s).toLowerCase()))}else w=!0
if(r==="ngmy_slides_deck_v1"){v=t.h(d,"deck")
if(!x.f.b(v))return B.a([],x.D)
return B.a([C.fW2(C.Ve(B.a1(v,x.N,x.z)),w)],x.D)}if(r==="ngmy_slides_library_v1"){u=t.h(d,"decks")
if(!x.j.b(u))return B.a([],x.D)
t=J.d8(u,x.f)
t=B.cD(t,new C.f8D(w),t.$ti.k("J.E"),x.I)
t=B.B(t,B.a4(t).k("J.E"))
return t}return B.a([],x.D)},
fW2(d,e){var w,v,u,t,s,r,q,p,o=d.ae()
o.n(0,"id",C.cC())
w=A.a.i(d.b)
o.n(0,"name",w.length===0?"Shared presentation":w)
o.n(0,"transferReceived",!0)
o.W(0,"transferClaimCode")
o.W(0,"adminShareEditUntil")
v=o.h(0,"slides")
if(x.j.b(v))for(u=J.aW(v),t=x.f;u.C();){s=u.gU(u)
if(t.b(s)){r=Date.now()
q=$.iX
$.iX=q+1
J.aG(s,"id",""+1000*r+"_"+q)}}p=C.Ve(B.a1(o,x.N,x.z))
if(e&&C.kr(p.w))p.Q=new B.S(Date.now(),0,!1).a6().bP(144e8).ac()
return p},
bAU(){var w=0,v=B.j(x.aT),u,t,s
var $async$bAU=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.G7(),$async$bAU)
case 3:s=e
if(s==null||A.a.i(s).length===0){u=null
w=1
break}w=4
return B.b(C.ago(s),$async$bAU)
case 4:t=e
u=J.ck(t)?null:t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bAU,v)},
fJ0(d){var w=0,v=B.j(x.T),u,t
var $async$fJ0=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.hR(D.VU,!0,"Dismiss",d,new C.fJ1(),new C.fJ2(),A.EU,!0,x.N),$async$fJ0)
case 3:t=f
if(t==null){u=null
w=1
break}if(t.length===0){if(d.e!=null)d.I(x.q).f.R(D.eN9)
u=null
w=1
break}u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fJ0,v)},
i3B(d,e,f,g,h){return B.a5(d,!1).c6(B.e6(new C.fJ3(h,e,g,f),!0,null,x.H))},
fAg:function fAg(d){this.a=d},
ccl:function ccl(d){this.a=d},
fAm:function fAm(){},
f8D:function f8D(d){this.a=d},
fJ1:function fJ1(){},
fJ2:function fJ2(){},
fJ3:function fJ3(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Vg:function Vg(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aD9:function aD9(){var _=this
_.d="one"
_.e=null
_.r=_.f=!1
_.c=_.a=null},
esw:function esw(){},
ess:function ess(d,e){this.a=d
this.b=e},
esv:function esv(d,e){this.a=d
this.b=e},
est:function est(d){this.a=d},
esu:function esu(d){this.a=d},
esx:function esx(d){this.a=d},
esy:function esy(d){this.a=d},
esB:function esB(d){this.a=d},
esC:function esC(d){this.a=d},
esA:function esA(d){this.a=d},
esD:function esD(d){this.a=d},
esz:function esz(d){this.a=d},
esE:function esE(d,e){this.a=d
this.b=e},
esr:function esr(d,e){this.a=d
this.b=e},
esq:function esq(d,e){this.a=d
this.b=e},
Vh:function Vh(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
biT:function biT(){var _=this
_.c=_.a=_.f=_.e=_.d=null},
esF:function esF(d,e){this.a=d
this.b=e},
esG:function esG(d){this.a=d},
esH:function esH(){},
esI:function esI(d){this.a=d},
esJ:function esJ(d,e){this.a=d
this.b=e},
aD6:function aD6(d){this.a=d},
aD7:function aD7(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
em9:function em9(d){this.a=d},
em8:function em8(){},
ema:function ema(d){this.a=d},
em5:function em5(d){this.a=d},
em4:function em4(){},
em6:function em6(d){this.a=d},
em7:function em7(d){this.a=d},
bt6:function bt6(){},
aq4:function aq4(d){this.a=d},
aDa:function aDa(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
esL:function esL(d){this.a=d},
esK:function esK(d){this.a=d},
hON(){var w,v,u,t
for(v=0;v<4;++v){w=D.cZ1[v]
try{if(Ac.bV0(w)){u=w
return u}}catch(t){}}return null},
Qu(d,e){return C.hXz(d,e)},
hXz(c6,c7){var w=0,v=B.j(x.T),u,t=2,s=[],r=[],q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5
var $async$Qu=B.e(function(c9,d0){if(c9===1){s.push(d0)
w=t}for(;;)switch(w){case 0:c2={}
c3=c7.r
if(c3.length===0){u="This presentation has no slides."
w=1
break}q=C.hON()
if(q==null){u="This browser cannot record video. Try Chrome, Edge, or a recent Safari."
w=1
break}b2=c7.d===D.o2?0.5625:1.7777777777777777
b3=b2>=1
b4=c2.a=A.k.V(b3?1280:1280*b2)
b5=c2.b=A.k.V(b3?1280/b2:1280)
c2.a=b4-A.o.F(b4,2)
c2.b=b5-A.o.F(b5,2)
b6=B.qm(c6,!0)
b6.toString
p=B.a5(c6,!0)
b7=new B.cq(null,x.A)
b8=A.d.gK(c3)
b9=$.aw()
o=new B.eN(b8,b9)
n=new B.eN("Getting ready\u2026",b9)
m=new B.eN(0,b9)
l=B.od(new C.fuA(c2,b7,o),!1,!1)
b6.lI(0,l)
b9=x.H
B.ca(null,A.db,!1,null,new C.fuB(n,m),c6,null,!0,!0,b9)
k=new C.fuF(b7)
j=new C.fuG()
i=null
t=4
b3=c2.a
h=Aj.aQY(c2.b,b3)
b3=h.getContext("2d")
b3.toString
g=b3
f=J.fLC(h,30)
e=B.a([],x.aK)
b3=x.z
i=Ac.aVO(f,B.F(["mimeType",q,"videoBitsPerSecond",8e6],b3,b3))
A.He.y0(i,"dataavailable",new C.fuC(e))
d=new B.bS(new B.bg($.bx,x.dT),x.b2)
A.He.y0(i,"stop",new C.fuD(d))
J.agX(n,"Drawing slide 1 of "+c3.length+"\u2026")
c5=j
w=8
return B.b(k.$0(),$async$Qu)
case 8:w=7
return B.b(c5.$1(d0),$async$Qu)
case 7:a0=d0
J.fLE(g,a0,0,0,c2.a,c2.b)
i.start(200)
a1=0
case 9:if(!(b3=a1,b8=c3.length,b3<b8)){w=11
break}a2=c3[a1]
w=a1>0?12:13
break
case 12:J.agX(n,"Drawing slide "+B.t(a1+1)+" of "+b8+"\u2026")
J.agX(o,a2)
c5=j
w=15
return B.b(k.$0(),$async$Qu)
case 15:w=14
return B.b(c5.$1(d0),$async$Qu)
case 14:a0=d0
case 13:J.fLE(g,a0,0,0,c2.a,c2.b)
a3=A.o.D(a2.w>0?a2.w:c7.e,1,120)
J.agX(n,"Recording slide "+B.t(a1+1)+" of "+c3.length+" \xb7 "+B.t(a3)+" s")
a4=new B.S(Date.now(),0,!1).bP(1e6*a3)
case 16:b3=Date.now()
b8=a4
if(b3>=b8.gbo())b3=b3===b8.gbo()&&0<b8.gcw()
else b3=!0
if(!b3){w=17
break}J.fLE(g,a0,0,0,c2.a,c2.b)
w=18
return B.b(B.bN(A.fx,null,b9),$async$Qu)
case 18:w=16
break
case 17:J.agX(m,(a1+1)/c3.length)
case 10:++a1
w=9
break
case 11:J.agX(n,"Saving your video\u2026")
i.stop()
w=19
return B.b(d.a.cM(0,A.nM),$async$Qu)
case 19:a5=A.d.gK(q.split(";"))
a6=B.hL(e,a5)
c3=(self.URL||self.webkitURL).createObjectURL(a6)
c3.toString
a7=c3
a8=J.z(a5,"video/mp4")?"mp4":"webm"
c3=A.a.i(c7.b)
b3=B.af("[^\\w\\-. ]+",!0,!1,!1,!1)
a9=A.a.i(B.aJ(c3,b3,"_"))
c0=B.n0(a7)
c0.download=B.t(J.ad(a9)===0?"presentation":a9)+"."+B.t(a8)
c3=c0.style
c3.display="none"
b0=c0
c3=document.body
if(c3!=null)c3.appendChild(b0).toString
J.KI(b0)
J.lP(b0)
B.bN(A.nL,new C.fuE(a7),b9)
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
J.lP(l)
if(p.pi())p.eI()
c3=o
b3=$.aw()
c3.shT(b3)
J.aPy(c3,0)
c3=n
c3.shT(b3)
J.aPy(c3,0)
c3=m
c3.shT(b3)
J.aPy(c3,0)
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Qu,v)},
fuA:function fuA(d,e,f){this.a=d
this.b=e
this.c=f},
fuz:function fuz(){},
fuB:function fuB(d,e){this.a=d
this.b=e},
fuF:function fuF(d){this.a=d},
fuG:function fuG(){},
fuC:function fuC(d){this.a=d},
fuD:function fuD(d){this.a=d},
fuE:function fuE(d){this.a=d},
bti:function bti(d,e,f){this.c=d
this.d=e
this.a=f},
f2Z:function f2Z(){},
f3_:function f3_(){},
ccI(d){var w=0,v=B.j(x.at),u,t,s
var $async$ccI=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.aqe(d,A.yY),$async$ccI)
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
return B.i($async$ccI,v)},
ccH(d){if(d==null)return!1
return d==="marriage_agreement"||d==="hati_kuhowa"||d==="hati_kuhoweya"||d==="hati_malipo_awamu"},
a7_:function a7_(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
biC:function biC(d){var _=this
_.d=null
_.e=d
_.f=!1
_.c=_.a=null},
eaF:function eaF(d){this.a=d},
eaD:function eaD(d){this.a=d},
eaE:function eaE(d,e){this.a=d
this.b=e},
a7S:function a7S(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.cx=d
_.cy=e
_.x=f
_.y=!0
_.a=g
_.b=h
_.c=i
_.d=j
_.od$=k
_.oe$=l
_.of$=m
_.nC$=n},
a7T:function a7T(d,e){this.a=d
this.b=e},
b1p:function b1p(){},
ceU:function ceU(){},
ceV:function ceV(){},
ceW:function ceW(d,e,f,g,h,i,j,k,l){var _=this
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
ho_(d){return new C.ahe(d)},
a26:function a26(){},
ahe:function ahe(d){this.a=d},
aPT:function aPT(){},
avx:function avx(d,e){this.d=d
this.b=e
this.a=null},
aRm:function aRm(d){this.b=d
this.a=null},
fpJ(d,e){var w=0,v=B.j(x.H)
var $async$fpJ=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b($.X().gxd().Ld(d,e),$async$fpJ)
case 2:B.fCN()
return B.h(null,v)}})
return B.i($async$fpJ,v)},
heE(d,e){return(A.r6[(d^e)&255]^A.o.aB(d,8))>>>0},
fni(d,e,f,g,h,i){var w=C.hTV(d,A.da,f,null,A.cW,g,h,i)
return w},
hgw(d){var w=F.hhe(d)
if(w==null)return""
return"- WRITE EVERYTHING THE READER SEES IN "+w+" \u2014 every title, subtitle, sentence and note, with natural, correct grammar. Do not mix in English (JSON keys stay as given)."},
hvA(d){var w,v,u,t,s,r=A.a.i(d)
if(r.length===0)return"XX"
w=r.toLowerCase()
v=A.oQ.h(0,w)
if(v!=null)return v
for(u=A.oQ.gdK(A.oQ),u=u.gaf(u);u.C();){t=u.gU(u).b
if(t.toLowerCase()===w)return t}u=B.af("[^A-Z]",!0,!1,!1,!1)
s=B.aJ(r.toUpperCase(),u,"")
if(s.length>=2)return A.a.ap(s,0,2)
return A.a.ap(s+"XX",0,2)},
hgE(){var w,v
for(w=0,v='=== EVERYTHING YOU KNOW ABOUT NGMY (use only this; never invent features, numbers, prices, names or dates) ===\nTHE FOUNDER: NGMY stands for New Global Movement for Youth. It was created by KB PABLO QR (always written in capital letters), the Founder, President and CEO of NGMY. The "QR" in his name comes from QR codes, which NGMY and his business use a lot, and it is part of his brand. He built NGMY as one app (ngmy.org) that gives young people and families tools for work, money, learning, community and creativity. When a story is about the CEO, call him KB PABLO QR, Founder, President and CEO of NGMY. Do not give him a different name, age, birthplace, degrees, awards or family details, and do not make up quotes from him.\n\nFEATURES:\n';w<35;++w)v+="- "+D.cJo[w]+"\n"
v=v+"\nABOUT THE COMMUNITY AND THE SYSTEM (facts you can use; do not invent numbers, names or dates):\n- The community is M'MBONDO (also written MBONDO). Its motto is \"EMO 'YA M'MBONDO\". Members live in different US states.\n- The Civic Registry \u2014 people also just call it \"the system\" \u2014 was built inside the NGMY app for the M'MBONDO community.\n- Why it was built: a big problem in the community was not seeing where contribution money went. People gave but were unsure what happened to their money, so trust and giving went down. The system brings light: every contribution gets a receipt, members can see where the money is going and how much has been contributed, and that transparency builds trust and the confidence to keep contributing \u2014 when you know where your money goes, you give.\n- What it does:\n  \u2022 Registers community members with their details and a member ID card (Registry ID), kept safely as the community's records.\n  \u2022 Lets each state know how many members it has (state totals, nationwide totals).\n  \u2022 Records contributions with receipts and contribution reports, so everyone sees the money trail.\n  \u2022 Authorized Registrars enroll members and help them; there is a help mode for assisted sign-up.\n  \u2022 Civic Voting for community decisions, and a Civic State Wallet that shows each state's funds.\n- How NGMY helps members beyond the registry: help finding jobs and applying for them, fixing their houses, helping them get houses, sending money, and NGMY Advisors (AI advisors) who help people apply for jobs, food stamps and other benefits and fill out applications for them.\n- Tone for this community: warm, proud, hopeful and trustworthy; it is about unity, transparency and helping each other.\n\n\nHOW MEMBERS USE THE APP:\n"+"WHAT NGMY IS: NGMY stands for New Global Movement for Youth \u2014 multi-hub app by KB PABLO QR (Founder/CEO). Live site ngmy.org. Wallet balance in USD. Gmail login (@gmail.com), password 6+ chars, also Google/GitHub sign-in.\n\nBOTTOM NAV (7 tabs):\n1) Home \u2014 brand, Helper AI entry, loans, tech frames (Neural/Signal/Core/Vault Channel games).\n2) Tool Hub \u2014 Business Card Creator, Menu Studio (+ Bio Studio), Business Essentials.\n3) Slides \u2014 presentations + Marriage/Hati documents.\n4) NGMY Hub (center) \u2014 Civic Registry, NGMY Store, Help Center, Document Scanner; center star may open App Builder when enabled.\n5) Advisors \u2014 AI advisor chat (this hub).\n6) Creator Hub \u2014 Doc Share, Quote Calc, QR Generator, Play Zone, Kiswahili School, Recorder, Video Studio, Phone Unlock.\n7) Profile \u2014 theme, logout, legal, Worksheets (Projects / Cashier IOUs / Family Tree).\n\nMENU STUDIO (Tool Hub \u2192 Menu Studio):\n- Menus tab: design restaurant/business menus, publish public link https://ngmy.org/?m={slug}\n- First menu free; more menus need Menu Studio subscription (paywall shows price).\n- Bios tab (same studio): link-in-bio pages, publish https://ngmy.org/?b={slug}\n- First Bio free with starter template; more Bios/templates need Bio Studio subscription.\n- Extra Bio photo/header changes may need a photo pack after free changes.\n- Local Menu / Local Bio: Home Essentials hub \u2192 device-local publish at /local-menu/ and /local-bio/\n\nBUSINESS CARD: Tool Hub \u2192 create/edit/download. Paid unlock for edit+download window (paywall).\n\nSLIDES: Slides tab. Free blank + some class templates/designs. Slides Pro unlocks more. Marriage documents are a separate short session unlock.\n\nADVISORS: 30 free minutes, then Advisors subscription for unlimited chat (admins unlimited).\n\nCIVIC REGISTRY (NGMY Hub): community ID, PIN gate, enrollment, registrars (AR), civic registrar roles. Guest enroll can use ?civic=enroll. Georgia stays free. Every other state gets a 2-month free Civic Registry trial for Authorized Registrars, then $50/mo State Registrar sponsorship starting month 3.\n\nVAULT GAMES (Home \u2192 Vault Channel): arcade games. Need an active Growth Income investment for full access; otherwise one free play total. Free trial does not unlock games.\n\nGROWTH INCOME / INVEST: purchase a plan, daily clock-in for ROI over work days; min withdraw typically $10. Plans are $5, $20, $30, $50 and $100 (the most expensive is $100). Plan availability is admin-controlled.\n\nCREATOR TOOLS:\n- Doc Share \u2014 share docs; free individual creations then paid / org license.\n- QR Generator \u2014 free saves then paid access window.\n- Transfer \u2014 receive free; limited free sends then monthly unlock.\n- Kiswahili School \u2014 Basics free; other levels one-time unlock.\n- Document Scanner \u2014 trial then monthly.\n- Message Translator \u2014 paid unlimited.\n- Phone Unlock \u2014 short access window.\n- Video Studio / Recorder / Play Zone \u2014 Creator Hub tools.\n- Worksheets \u2192 Cashier (IOUs/receipts), Family Tree (create/photos may be paid).\n- Invoices \u2014 free standard tier with limited free premium saves; paid templates via paywall.\n- App Builder \u2014 Hub center (if enabled); cloud + Bolt AI may be paid.\n- Music Studio \u2014 AI songs may cost wallet credits when enabled.\n\nSTORE / JOBS / LOANS / HELP: Store in NGMY Hub; loans from Home; jobs/helpers need approval; Help Center + NGMY Helper AI for support.\n\nGUEST LINKS (no full login): /bio/, /local-bio/, /menu/, /local-menu/, /invoice/, /app/{slug}.\n\nHOW TO HELP MEMBERS: Give clear tap-by-tap steps. Stay in character. If unsure of a live price, send them to the feature paywall rather than guessing.\n"
return A.a.i(v.charCodeAt(0)==0?v:v)},
bz2(d,e){return C.hQx(d,e)},
hQx(d,e){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l
var $async$bz2=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
if(d.length===0){u=!1
w=1
break}r=B.hL([d],"application/pdf")
n=x.z
q=B.aT_(B.a([r],x.e3),e,B.F(["type","application/pdf"],n,n))
p=B.cA(B.F(["files",B.a([q],x.fA),"title",e],x.N,x.C))
n=window.navigator
n.toString
o=n
w=7
return B.b(B.eg(B.jU(o,"share",[p]),x.H),$async$bz2)
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
return B.i($async$bz2,v)},
fVX(){var w=0,v=B.j(x.y),u,t,s
var $async$fVX=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=$.ffF
s=$.byA
if(s==null)s="presentation.pdf"
if(t==null||t.length===0){u=!1
w=1
break}u=C.bz2(t,s)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fVX,v)},
bAp(){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$bAp=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=$.ffF
l=$.byA
k=l==null?"presentation.pdf":l
if(m==null||m.length===0){u=!1
w=1
break}w=Z.hbg()?3:4
break
case 3:w=5
return B.b(C.bz2(m,k),$async$bAp)
case 5:if(e){u=!0
w=1
break}case 4:r=$.byB
if(r==null||r.length===0){u=!1
w=1
break}t=7
p=B.n0(null)
p.href=r
p.download=k
o=p.style
o.display="none"
q=p
o=document.body
if(o!=null)o.appendChild(q).toString
J.KI(q)
w=10
return B.b(B.bN(A.a1,null,x.H),$async$bAp)
case 10:J.lP(q)
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
return B.i($async$bAp,v)},
fVO(){var w=0,v=B.j(x.y),u,t,s,r
var $async$fVO=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=$.byB
if(r==null||r.length===0){u=!1
w=1
break}try{t=window
t.toString
A.ls.us(t,r,"_blank")
u=!0
w=1
break}catch(q){u=!1
w=1
break}case 1:return B.h(u,v)}})
return B.i($async$fVO,v)},
fW4(d,e){var w=0,v=B.j(x.H),u,t
var $async$fW4=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:t=(self.URL||self.webkitURL).createObjectURL(B.hL([d],"text/html"))
t.toString
u=window
u.toString
A.ls.us(u,t,"_blank")
return B.h(null,v)}})
return B.i($async$fW4,v)},
b0m(d,e){var w=0,v=B.j(x.y),u
var $async$b0m=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(B.b0o(d,e),$async$b0m)
case 3:if(g){u=!0
w=1
break}w=4
return B.b(B.b0n(d),$async$b0m)
case 4:u=g<2
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$b0m,v)}},D,O,H,Am,A8,Y,V,An,G,F,E,Ao,W,Q,Z,A_,Ap,Aq,A9,K,Ar,A0,N,X,Aa,L,Ab,As,P,A1,At,Au,Ac,Ad,Av,Ae,Af,Ag,Aw,Ax,R,Ay,I,Az,AA,S,T,M,A2,A3,A4
J=c[1]
B=c[0]
A=c[2]
Ah=c[190]
A5=c[66]
Ai=c[49]
A6=c[155]
Aj=c[57]
U=c[205]
A7=c[52]
Ak=c[131]
Al=c[215]
C=a.updateHolder(c[4],C)
D=c[203]
O=c[92]
H=c[118]
Am=c[36]
A8=c[207]
Y=c[204]
V=c[193]
An=c[123]
G=c[174]
F=c[31]
E=c[206]
Ao=c[96]
W=c[114]
Q=c[133]
Z=c[29]
A_=c[162]
Ap=c[217]
Aq=c[170]
A9=c[136]
K=c[208]
Ar=c[110]
A0=c[60]
N=c[184]
X=c[75]
Aa=c[111]
L=c[143]
Ab=c[101]
As=c[210]
P=c[105]
A1=c[121]
At=c[86]
Au=c[116]
Ac=c[53]
Ad=c[180]
Av=c[35]
Ae=c[73]
Af=c[132]
Ag=c[214]
Aw=c[216]
Ax=c[213]
R=c[67]
Ay=c[211]
I=c[159]
Az=c[171]
AA=c[218]
S=c[47]
T=c[209]
M=c[191]
A2=c[212]
A3=c[99]
A4=c[56]
C.nL.prototype={
uM(d){var w,v,u=this,t=u.c
if(t===0)return u
w=!u.a
v=u.b
t=C.ty(t,v)
return new C.nL(t===0?!1:w,v,t)},
bJq(d){var w,v,u,t,s,r,q=this.c
if(q===0)return $.CC()
w=q+d
v=this.b
u=new Uint16Array(w)
for(t=q-1;t>=0;--t)u[t+d]=v[t]
s=this.a
r=C.ty(w,u)
return new C.nL(r===0?!1:s,u,r)},
bJU(d){var w,v,u,t,s,r,q,p=this,o=p.c
if(o===0)return $.CC()
w=o-d
if(w<=0)return p.a?$.fXr():$.CC()
v=p.b
u=new Uint16Array(w)
for(t=d;t<o;++t)u[t-d]=v[t]
s=p.a
r=C.ty(w,u)
q=new C.nL(r===0?!1:s,u,r)
if(s)for(t=0;t<d;++t)if(v[t]!==0)return q.aC(0,$.a1T())
return q},
dU(d,e){var w,v,u,t,s,r=this
if(e<0)throw B.U(B.dI("shift-amount must be posititve "+e,null))
w=r.c
if(w===0)return r
v=A.o.an(e,16)
if(A.o.F(e,16)===0)return r.bJq(v)
u=w+v+1
t=new Uint16Array(u)
C.h7R(r.b,w,e,t)
w=r.a
s=C.ty(u,t)
return new C.nL(s===0?!1:w,t,s)},
mi(d,e){var w,v,u,t,s,r,q,p,o,n=this
if(e<0)throw B.U(B.dI("shift-amount must be posititve "+e,null))
w=n.c
if(w===0)return n
v=A.o.an(e,16)
u=A.o.F(e,16)
if(u===0)return n.bJU(v)
t=w-v
if(t<=0)return n.a?$.fXr():$.CC()
s=n.b
r=new Uint16Array(t)
C.hFC(s,w,e,r)
w=n.a
q=C.ty(t,r)
p=new C.nL(q===0?!1:w,r,q)
if(w){if((s[v]&A.o.dU(1,u)-1)!==0)return p.aC(0,$.a1T())
for(o=0;o<v;++o)if(s[o]!==0)return p.aC(0,$.a1T())}return p},
aL(d,e){var w,v=this.a
if(v===e.a){w=C.cCE(this.b,this.c,e.b,e.c)
return v?0-w:w}return v?-1:1},
a7d(d,e){var w,v,u,t=this,s=t.c,r=d.c
if(s<r)return d.a7d(t,e)
if(s===0)return $.CC()
if(r===0)return t.a===e?t:t.uM(0)
w=s+1
v=new Uint16Array(w)
C.hFA(t.b,s,d.b,r,v)
u=C.ty(w,v)
return new C.nL(u===0?!1:e,v,u)},
GN(d,e){var w,v,u,t=this,s=t.c
if(s===0)return $.CC()
w=d.c
if(w===0)return t.a===e?t:t.uM(0)
v=new Uint16Array(s)
C.b8p(t.b,s,d.b,w,v)
u=C.ty(s,v)
return new C.nL(u===0?!1:e,v,u)},
bww(d,e){var w,v,u,t,s,r=this.c,q=d.c
r=r<q?r:q
w=this.b
v=d.b
u=new Uint16Array(r)
for(t=0;t<r;++t)u[t]=w[t]&v[t]
s=C.ty(r,u)
return new C.nL(!1,u,s)},
bwv(d,e){var w,v,u=this.c,t=this.b,s=d.b,r=new Uint16Array(u),q=d.c
if(u<q)q=u
for(w=0;w<q;++w)r[w]=t[w]&~s[w]
for(w=q;w<u;++w)r[w]=t[w]
v=C.ty(u,r)
return new C.nL(!1,r,v)},
bwx(d,e){var w,v,u,t,s,r=this.c,q=d.c,p=r>q?r:q,o=this.b,n=d.b,m=new Uint16Array(p)
if(r<q){w=r
v=d}else{w=q
v=this}for(u=0;u<w;++u)m[u]=o[u]|n[u]
t=v.b
for(u=w;u<p;++u)m[u]=t[u]
s=C.ty(p,m)
return new C.nL(s!==0,m,s)},
U3(d,e){var w,v,u,t=this
if(t.c===0||e.c===0)return $.CC()
w=t.a
if(w===e.a){if(w){w=$.a1T()
return t.GN(w,!0).bwx(e.GN(w,!0),!0).a7d(w,!0)}return t.bww(e,!1)}if(w){v=t
u=e}else{v=e
u=t}return u.bwv(v.GN($.a1T(),!1),!1)},
ad(d,e){var w,v,u=this,t=u.c
if(t===0)return e
w=e.c
if(w===0)return u
v=u.a
if(v===e.a)return u.a7d(e,v)
if(C.cCE(u.b,t,e.b,w)>=0)return u.GN(e,v)
return e.GN(u,!v)},
aC(d,e){var w,v,u=this,t=u.c
if(t===0)return e.uM(0)
w=e.c
if(w===0)return u
v=u.a
if(v!==e.a)return u.a7d(e,v)
if(C.cCE(u.b,t,e.b,w)>=0)return u.GN(e,v)
return e.GN(u,!v)},
aF(d,e){var w,v,u,t,s,r,q,p=this.c,o=e.c
if(p===0||o===0)return $.CC()
w=p+o
v=this.b
u=e.b
t=new Uint16Array(w)
for(s=0;s<o;){C.h7S(u[s],v,0,t,s,p);++s}r=this.a!==e.a
q=C.ty(w,t)
return new C.nL(q===0?!1:r,t,q)},
bJp(d){var w,v,u,t
if(this.c<d.c)return $.CC()
this.aPY(d)
w=$.fR1.c5()-$.awg.c5()
v=C.fR3($.fR0.c5(),$.awg.c5(),$.fR1.c5(),w)
u=C.ty(w,v)
t=new C.nL(!1,v,u)
return this.a!==d.a&&u>0?t.uM(0):t},
ckG(d){var w,v,u,t=this
if(t.c<d.c)return t
t.aPY(d)
w=C.fR3($.fR0.c5(),0,$.awg.c5(),$.awg.c5())
v=C.ty($.awg.c5(),w)
u=new C.nL(!1,w,v)
if($.fR2.c5()>0)u=u.mi(0,$.fR2.c5())
return t.a&&u.c>0?u.uM(0):u},
aPY(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.c
if(f===$.h7O&&d.c===$.h7Q&&g.b===$.h7N&&d.b===$.h7P)return
w=d.b
v=d.c
u=16-A.o.gaj5(w[v-1])
if(u>0){t=new Uint16Array(v+5)
s=C.h7M(w,v,u,t)
r=new Uint16Array(f+5)
q=C.h7M(g.b,f,u,r)}else{r=C.fR3(g.b,0,f,f+2)
s=v
t=w
q=f}p=t[s-1]
o=q-s
n=new Uint16Array(q)
m=C.fR4(t,s,o,n)
l=q+1
k=r.$flags|0
if(C.cCE(r,q,n,m)>=0){k&2&&B.ak(r)
r[q]=1
C.b8p(r,l,n,m,r)}else{k&2&&B.ak(r)
r[q]=0}j=new Uint16Array(s+2)
j[s]=1
C.b8p(j,s+1,t,s,j)
i=q-1
while(o>0){h=C.hFB(p,r,i);--o
C.h7S(h,j,0,r,o,s)
if(r[i]<h){m=C.fR4(j,s,o,n)
C.b8p(r,l,n,m,r)
while(--h,r[i]<h)C.b8p(r,l,n,m,r)}--i}$.h7N=g.b
$.h7O=f
$.h7P=w
$.h7Q=v
$.fR0.b=r
$.fR1.b=l
$.awg.b=s
$.fR2.b=u},
gX(d){var w,v,u,t=new C.cCF(),s=this.c
if(s===0)return 6707
w=this.a?83585:429689
for(v=this.b,u=0;u<s;++u)w=t.$2(w,v[u])
return new C.cCG().$1(w)},
A(d,e){if(e==null)return!1
return e instanceof C.nL&&this.aL(0,e)===0},
rV(d,e){return this.aL(0,e)>0},
O(d){var w,v,u
for(w=this.c-1,v=this.b,u=0;w>=0;--w)u=u*65536+v[w]
return this.a?-u:u},
uG(d){var w,v,u,t,s,r,q,p=this,o={},n=p.c
if(n===0)return 0
w=new Uint8Array(8);--n
v=p.b
u=16*n+A.o.gaj5(v[n])
if(u>1024)return p.a?-1/0:1/0
if(p.a)w[7]=128
t=u-53+1075
w[6]=(t&15)<<4
w[7]=(w[7]|A.o.aB(t,4))>>>0
o.a=o.b=0
o.c=n
s=new C.cCH(o,p)
n=s.$1(5)
w[6]=w[6]|n&15
for(r=5;r>=0;--r)w[r]=s.$1(8)
q=new C.cCI(w)
if(J.z(s.$1(1),1))if((w[0]&1)===1)q.$0()
else if(o.b!==0)q.$0()
else for(r=o.c;r>=0;--r)if(v[r]!==0){q.$0()
break}return J.l1(A.aG.gaP(w)).getFloat64(0,!0)},
u(d){var w,v,u,t,s,r=this,q=r.c
if(q===0)return"0"
if(q===1){if(r.a)return A.o.u(-r.b[0])
return A.o.u(r.b[0])}w=B.a([],x.s)
q=r.a
v=q?r.uM(0):r
while(v.c>1){u=$.hkW()
if(u.c===0)B.ba(D.b1i)
t=v.ckG(u).u(0)
w.push(t)
s=t.length
if(s===1)w.push("000")
if(s===2)w.push("00")
if(s===3)w.push("0")
v=v.bJp(u)}w.push(A.o.u(v.b[0]))
if(q)w.push("-")
return new B.dw(w,x.bJ).fW(0)},
$iaQC:1,
$ihF:1}
C.aQ2.prototype={
L(d,e){var w,v=this.b,u=e.a,t=v.h(0,u)
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
cIq(d,e){var w=this.b.h(0,e)
return w!=null?this.a[w]:null},
gK(d){return A.d.gK(this.a)},
gal(d){return A.d.gal(this.a)},
gam(d){return this.a.length===0},
gcn(d){return this.a.length!==0},
gaf(d){var w=this.a
return new J.jX(w,w.length,B.T(w).k("jX<1>"))}}
C.R7.prototype={
cQo(){var w,v
if(this.as==null)this.baJ()
w=this.as
v=w==null?null:w.anO()
return v==null?null:v.eD()},
baJ(){var w,v
if(this.as!=null)return
w=this.Q
if(w!=null){v=w.anO().eD()
this.as=new C.bMa(v)}},
gY(d){return this.at}}
C.a33.prototype={
a4(){return"CompressionType."+this.b}}
C.bG0.prototype={
eq(d){var w,v,u,t,s=this
if(d===0)return 0
if(s.c===0){s.c=8
s.b=s.a.cp()}for(w=s.a,v=0;u=s.c,d>u;){v=A.o.dU(v,u)+(s.b&A.yx[u])
d-=u
s.c=8
u=w.b
u.toString
s.b=u[w.c++]}if(d>0){if(u===0){s.c=8
s.b=w.cp()}w=A.o.dU(v,d)
u=s.b
t=s.c-d
v=w+(A.o.fA(u,t)&A.yx[d])
s.c=t}return v}}
C.bEm.prototype={
cGI(d,e){var w,v,u,t,s,r=this,q=new C.bG0(d)
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
t=r.ciZ(q)
if(t<0)return!1
if(t===0){q.eq(8)
q.eq(8)
q.eq(8)
q.eq(8)
s=r.cj1(q,e)
if(s<0)return!1
v=(v<<1|v>>>31)^s^4294967295}else if(t===2){q.eq(8)
q.eq(8)
q.eq(8)
q.eq(8)
return!0}}return!0},
ciZ(d){var w,v,u,t
for(w=!0,v=!0,u=0;u<6;++u){t=d.eq(8)
if(t!==D.ddD[u])v=!1
if(t!==D.cST[u])w=!1
if(!w&&!v)return-1}return v?0:2},
cj1(d3,d4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9=this,d0=4294967295,d1=d3.eq(1),d2=((d3.eq(8)<<8|d3.eq(8))<<8|d3.eq(8))>>>0
c9.c=new Uint8Array(16)
for(w=0;w<16;++w){v=c9.c
u=d3.eq(1)
v.$flags&2&&B.ak(v)
v[w]=u}c9.d=new Uint8Array(256)
for(w=0,t=0;w<16;++w,t+=16)if(c9.c[w]!==0)for(s=0;s<16;++s){v=c9.d
u=d3.eq(1)
v.$flags&2&&B.ak(v)
v[t+s]=u}c9.bZB()
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
v.$flags&2&&B.ak(v)
v[w]=s}p=new Uint8Array(6)
for(w=0;w<q;++w)p[w]=w
for(u=c9.x,o=c9.w,n=u.$flags|0,w=0;w<v;++w){m=o[w]
l=p[m]
for(;m>0;m=k){k=m-1
p[m]=p[k]}p[0]=l
n&2&&B.ak(u)
u[w]=l}c9.fr=B.c2(6,$.hj2(),!1,x.E)
for(j=0;j<q;++j){v=c9.fr
v[j]=new Uint8Array(258)
i=d3.eq(5)
for(w=0;w<r;++w){for(;;){if(i<1||i>20)return-1
if(d3.eq(1)===0)break
i=d3.eq(1)===0?i+1:i-1}v=c9.fr[j]
v.$flags&2&&B.ak(v)
v[w]=i}}v=$.hj1()
u=x.an
c9.y=B.c2(6,v,!1,u)
c9.z=B.c2(6,v,!1,u)
c9.Q=B.c2(6,v,!1,u)
c9.as=new Int32Array(6)
for(j=0;j<q;++j){v=c9.y
v[j]=new Int32Array(258)
u=c9.z
u[j]=new Int32Array(258)
o=c9.Q
o[j]=new Int32Array(258)
for(n=c9.fr,h=32,g=0,w=0;w<r;++w){f=n[j][w]
if(f>g)g=f
if(f<h)h=f}c9.bV9(v[j],u[j],o[j],n[j],h,g,r)
v=c9.as
v.$flags&2&&B.ak(v)
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
a3=c9.asB(d3)
if(a3<0)return-1
for(a4=0;;){if(a3===e)break
if(a3===0||a3===1){a5=-1
a6=1
do{if(a6>=2097152)return-1
if(a3===0)a5+=a6
else if(a3===1)a5+=2*a6
a6*=2
a3=c9.asB(d3)}while(a3===0||a3===1);++a5
v=c9.e
v===$&&B.c()
a7=v[c9.f[c9.r[0]]]
v=c9.at
u=v[a7]
v.$flags&2&&B.ak(v)
v[a7]=u+a5
for(v=c9.b;a5>0;){if(a4>=d)return-1
v===$&&B.c()
v.$flags&2&&B.ak(v)
v[a4]=a7;++a4;--a5}continue}else{if(a4>=d)return-1
a8=a3-1
v=c9.r
u=c9.f
if(a8<16){a9=v[0]
a7=u[a9+a8]
for(v=u.$flags|0;a8>3;){b0=a9+a8
o=b0-1
n=u[o]
v&2&&B.ak(u)
u[b0]=n
n=b0-2
u[o]=u[n]
o=b0-3
u[n]=u[o]
u[o]=u[b0-4]
a8-=4}while(a8>0){o=a9+a8
n=u[o-1]
v&2&&B.ak(u)
u[o]=n;--a8}v&2&&B.ak(u)
u[a9]=a7}else{b1=A.o.an(a8,16)
b2=A.o.F(a8,16)
a9=v[b1]+b2
a7=u[a9]
for(o=u.$flags|0;n=v[b1],a9>n;a9=b3){b3=a9-1
n=u[b3]
o&2&&B.ak(u)
u[a9]=n}v.$flags&2&&B.ak(v)
v[b1]=n+1
while(b1>0){v[b1]=v[b1]-1
n=v[b1];--b1
b4=u[v[b1]+16-1]
o&2&&B.ak(u)
u[n]=b4}v[0]=v[0]-1
n=v[0]
o&2&&B.ak(u)
u[n]=a7
if(v[0]===0)for(a0=4095,a1=15;a1>=0;--a1){for(a2=15;a2>=0;--a2){u[a0]=u[v[a1]+a2];--a0}v[a1]=a0+1}}v=c9.at
u=c9.e
u===$&&B.c()
o=u[a7]
n=v[o]
v.$flags&2&&B.ak(v)
v[o]=n+1
n=c9.b
n===$&&B.c()
u=u[a7]
n.$flags&2&&B.ak(n)
n[a4]=u;++a4
a3=c9.asB(d3)
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
u.$flags&2&&B.ak(u)
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
d4.bG(c3)
c1=(c1<<8^D.GJ[c1>>>24&255^v])>>>0;--c2}if(c4===c0)return c1
if(c4>c0)return-1
v=c9.b
b5=v[b5]
b6=b5>>>8
if(b8===0){b8=D.GL[b9];++b9
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
if(b8===0){b8=D.GL[b9];++b9
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
if(b8===0){b8=D.GL[b9];++b9
if(b9===512)b9=0}u=b8===1?1:0
c5=b5&255^u;++c4
if(c4===c0){c6=b7
b5=b6
c2=3
continue}if(c5!==b7){c6=c5
b5=b6
c2=3
continue}b5=v[b6]
if(b8===0){b8=D.GL[b9];++b9
if(b9===512)b9=0}u=b8===1?1:0
c2=(b5&255^u)+4
b5=v[b5>>>8]
b6=b5>>>8
if(b8===0){b8=D.GL[b9];++b9
if(b9===512)b9=0}v=b8===1?1:0
c6=b5&255^v
c4=c4+1+1
b5=b6}else for(c7=b7,c2=0,c3=0,c4=1;;c3=c7,c7=c8){if(c2>0){for(v=c3&255;;){if(c2===1)break
d4.bG(c3)
c1=c1<<8^D.GJ[c1>>>24&255^v];--c2}d4.bG(c3)
c1=(c1<<8^D.GJ[c1>>>24&255^v])>>>0}if(c4>c0)return-1
if(c4===c0)return c1
v=1e5*c9.a
if(b5>=v)return-1
u=c9.b
b5=u[b5]
c5=b5&255
b5=b5>>>8;++c4
c2=0
if(c5!==c7){d4.bG(c7)
c1=(c1<<8^D.GJ[c1>>>24&255^c7&255])>>>0
c8=c5
continue}if(c4===c0){d4.bG(c7)
c1=(c1<<8^D.GJ[c1>>>24&255^c7&255])>>>0
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
asB(d){var w,v,u,t,s=this,r=s.ay
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
bV9(d,e,f,g,h,i,j){var w,v,u,t,s,r,q,p
for(w=f.$flags|0,v=h,u=0;v<=i;++v)for(t=0;t<j;++t)if(g[t]===v){w&2&&B.ak(f)
f[u]=t;++u}for(w=e.$flags|0,v=0;v<23;++v){w&2&&B.ak(e)
e[v]=0}for(v=0;v<j;++v){s=g[v]+1
r=e[s]
w&2&&B.ak(e)
e[s]=r+1}for(v=1;v<23;++v){s=e[v]
r=e[v-1]
w&2&&B.ak(e)
e[v]=s+r}for(s=d.$flags|0,v=0;v<23;++v){s&2&&B.ak(d)
d[v]=0}for(v=h,q=0;v<=i;v=p){p=v+1
q+=e[p]-e[v]
s&2&&B.ak(d)
d[v]=q-1
q=q<<1>>>0}for(v=h+1;v<=i;++v){s=d[v-1]
r=e[v]
w&2&&B.ak(e)
e[v]=(s+1<<1>>>0)-r}},
bZB(){var w,v,u,t=this
t.fx=0
t.e=new Uint8Array(256)
for(w=0;w<256;++w){v=t.d
v===$&&B.c()
if(v[w]!==0){v=t.e
u=t.fx++
v.$flags&2&&B.ak(v)
v[u]=w}}}}
C.cuP.prototype={
aGp(d,e,f){var w,v,u,t,s,r=this,q=r.a=r.bMz(e)
if(q<0)return
e.c=q
if(e.aK()!==101010256)return
e.aU()
e.aU()
e.aU()
e.aU()
r.f=e.aK()
r.r=e.aK()
w=e.aU()
if(w>0)e.aGs(w,!1)
r.cjm(e)
q=r.r
v=r.f
u=e.aJt(Math.min(v,1024),v,q)
q=r.x
for(;;){v=u.c
t=u.d
t===$&&B.c()
if(!(v<t))break
if(u.aK()!==33639248)break
s=new C.b75()
s.cQn(0,u,e,f)
q.push(s)}},
cjm(d){var w,v,u,t,s=d.c,r=this.a-20
if(r<0)return
w=d.a6R(20,r)
if(w.aK()!==117853008){d.c=s
return}w.aK()
v=w.rJ()
w.aK()
d.c=v
if(d.aK()!==101075792){d.c=s
return}d.rJ()
d.aU()
d.aU()
d.aK()
d.aK()
d.rJ()
d.rJ()
u=d.rJ()
t=d.rJ()
this.f=u
this.r=t
d.c=s},
bMz(d){var w,v,u,t,s,r,q,p,o,n
if(d.gM(0)<=4)return-1
w=d.c
v=d.gM(0)-4
u=Math.min(v,1024)
t=v-u
for(s=u-4;t>=0;){d.c=t
r=d.a6R(u,t)
q=d.c
p=r.b
d.c=q+(p==null?0:p.length-r.c)
o=new B.akM(A.hT)
o.aKK(r.eD(),A.hT,null,null)
for(n=s;n>=0;--n){o.c=n
if(o.aK()===101010256){d.c=w
return t+n}}t=t>0&&t<u?0:t-u}return-1}}
C.cuN.prototype={}
C.avV.prototype={
a4(){return"ZipEncryptionMode."+this.b}}
C.cuQ.prototype={
aGp(d,e,f){var w,v,u,t,s,r,q,p,o=this
if(e.aK()!==67324752)return
e.aU()
o.b=e.aU()
w=D.aCi.h(0,e.aU())
o.c=w==null?D.L3:w
o.d=e.aU()
o.e=e.aU()
o.f=e.aK()
o.r=e.aK()
o.w=e.aK()
v=e.aU()
u=e.aU()
o.x=e.amC(v)
o.y=e.ha(u).eD()
w=o.z
t=w.w
o.r=t
w=w.x
o.w=w
o.at=(o.b&1)!==0?D.aSo:D.De
o.ay=f
o.Q=e.ha(t)
if(o.at!==D.De&&u>2){w=o.y
w.toString
s=B.r1(w,A.hT,null,null)
for(;;){w=s.c
t=s.d
t===$&&B.c()
if(!(w<t))break
if(s.aU()===39169){s.aU()
s.aU()
s.amC(2)
w=s.b
w.toString
r=w[s.c++]
q=s.aU()
o.at=D.aSp
o.ax=new C.cuN(r,q)
w=D.aCi.h(0,q)
o.c=w==null?D.L3:w}}}if((o.b&8)!==0){p=e.aK()
if(p===134695760)o.f=e.aK()
else o.f=p
o.r=e.aK()
o.w=e.aK()}},
gM(d){return this.bkb().length},
anO(){var w,v,u,t,s,r=this,q=null,p=r.Q
if(p==null)return B.r1(new Uint8Array(0),A.hT,q,q)
w=r.at
if(w!==D.De)if(p.gM(0)<=0)r.at=D.De
else{if(w===D.aSo){p=r.bHK(p)
r.Q=p}else if(w===D.aSp){p=r.bHn(p)
r.Q=p}r.at=D.De}w=r.c
if(w===D.af4){v=p.c
u=B.df()
p=r.Q
if(p.gM(0)<=524288e3)u.b=A.pc.B7(p.eD(),!0,!1)
else{t=B.a7H(A.hT,r.w)
p=r.Q
p.toString
A.pc.a34(p,t,!0,!1)
u.b=t.Gk()}r.Q.c=v
return B.r1(u.bd(),A.hT,q,q)}else if(w===D.af5){s=B.a7H(A.hT,32768)
p=r.Q
v=p.c
C.hoa().cGI(p,s)
u=s.Gk()
r.Q.c=v
return B.r1(u,A.hT,q,q)}else return B.r1(p.eD(),A.hT,q,q)},
bkb(){var w=this.Q
if(w==null)return new Uint8Array(0)
return w.eD()},
u(d){return this.x},
b6C(d){var w=this.ch,v=C.J7(C.heE(w[0].O(0),d))
w[0]=v
v=w[1].ad(0,v.U3(0,C.J7(255)))
w[1]=v
w[1]=v.aF(0,C.J7(134775813)).ad(0,C.J7(1)).U3(0,C.J7(4294967295))
w[2]=C.J7(C.heE(w[2].O(0),w[1].mi(0,24).O(0)))},
aPn(){var w=(this.ch[2].U3(0,C.J7(65535)).O(0)|2)>>>0
return w*((w^1)>>>0)>>>8&255},
bHK(d){var w,v,u,t,s,r=this,q=null
if(r.Q==null)return B.r1(new Uint8Array(0),A.hT,q,q)
for(w=0;w<12;++w){v=r.Q
u=v.b
u.toString
r.b6C(u[v.c++]^r.aPn())}t=r.Q.eD()
for(v=t.length,u=t.$flags|0,w=0;w<v;++w){s=t[w]^r.aPn()
r.b6C(s)
u&2&&B.ak(t)
t[w]=s}return B.r1(t,A.hT,q,q)},
bHn(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this.ax.c
if(k===1){w=d.ha(8).eD()
v=16}else if(k===2){w=d.ha(12).eD()
v=24}else{w=d.ha(16).eD()
v=32}u=d.ha(2).eD()
t=d.ha(d.gM(0)-10)
s=d.ha(10)
r=t.eD()
k=this.ay
k.toString
q=C.hFh(k,w,v)
p=new Uint8Array(B.cr(A.aG.dn(q,0,v)))
k=v*2
o=new Uint8Array(B.cr(A.aG.dn(q,v,k)))
if(!C.h7g(A.aG.dn(q,k,k+2),u))throw B.U(B.fl("password error"))
k=new Uint8Array(16)
n=new C.bCX(k,new Uint8Array(16),p)
k=x.S
m=J.a4t(0,k)
m=n.r=new C.ceJ(m)
m.c=!0
m.b=m.bjv(!0,new C.arC(p))
if(m.c)m.d=B.bl(D.o_,!0,k)
else m.d=B.bl(D.yq,!0,k)
l=C.h5t(C.h5v(),64)
l.bd3(new C.arC(o))
n.w=l
n.cPW(r,0,r.length)
k=s.eD()
m=n.x
m===$&&B.c()
if(!C.h7g(k,m))throw B.U(B.fl("macs don't match"))
return B.r1(r,A.hT,null,null)}}
C.b75.prototype={
cQn(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=this
n.a=e.aU()
e.aU()
e.aU()
e.aU()
e.aU()
e.aU()
e.aK()
n.w=e.aK()
n.x=e.aK()
w=e.aU()
v=e.aU()
u=e.aU()
n.y=e.aU()
e.aU()
n.Q=e.aK()
n.as=e.aK()
if(w>0)n.at=e.amC(w)
if(v>0){t=e.ha(v).eD()
n.ax=t
if(v>=4){s=B.r1(t,A.hT,null,null)
for(;;){t=s.c
r=s.d
r===$&&B.c()
if(!(t<r))break
q=s.aU()
p=s.aU()
o=s.a6R(p,s.c)
t=s.c
r=o.b
s.c=t+(r==null?0:r.length-o.c)
if(q===1){if(p>=8&&n.x===4294967295){n.x=o.rJ()
p-=8}if(p>=8&&n.w===4294967295){n.w=o.rJ()
p-=8}if(p>=8&&n.as===4294967295){n.as=o.rJ()
p-=8}if(p>=4&&n.y===65535)n.y=o.aK()}}}}if(u>0)e.amC(u)
f.c=n.as
t=new C.cuQ(D.L3,n,D.De,B.a([C.J7(0),C.J7(0),C.J7(0)],x.f3))
n.ch=t
t.aGp(0,f,g)},
u(d){return this.at}}
C.cuO.prototype={
cGJ(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=new C.cuP(B.a([],x.fT))
this.a=g
g.aGp(0,d,f)
g=B.a([],x.bm)
w=B.V(x.N,x.S)
v=new C.aQ2(g,w)
for(u=this.a.x,t=u.length,s=0;s<u.length;u.length===t||(0,B.L)(u),++s){r=u[s]
q=r.ch
p=r.Q>>>16
o=q.x
n=A.a.cb(o,"/")||A.a.cb(o,"\\")
m=w.h(0,o)
l=m!=null?g[m]:h
if(l==null){l=n?new C.R7(o,A.o.an(Date.now(),1000),0):C.fYO(o,q.w,q)
v.L(0,l)}l.b=p
if(r.a>>>8===3)if((p&61440)===40960){k=C.fYO(o,q.w,q)
if(k.as==null)k.baJ()
o=k.as
if(o==null)j=h
else{o=o.a
j=new B.akM(A.hT)
j.aKK(o,A.hT,h,h)}i=j==null?h:j.eD()
if(i!=null)new B.JO(!1).Ho(i,0,h,!0)}}return v}}
C.bCX.prototype={
cPW(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.w
l===$&&B.c()
l.a.C2(0,d,0,f)
for(l=e+f,w=m.c,v=d.$flags|0,u=m.b,t=e;t<l;t=s){s=t+16
r=s<=l?16:l-t
C.hnU(u,m.a)
q=m.r
if(16>u.byteLength)B.ba(B.dI("Input buffer too short",null))
if(16>w.byteLength)B.ba(B.dI("Output buffer too short",null))
p=q.c
o=q.b
if(p){o===$&&B.c()
q.bKZ(u,0,w,0,o)}else{o===$&&B.c()
q.bHO(u,0,w,0,o)}for(n=0;n<r;++n){q=t+n
p=d[q]
o=w[n]
v&2&&B.ak(d)
d[q]=p^o}++m.a}l=m.w
w=l.b
w===$&&B.c()
w=new Uint8Array(w)
m.x=w
l.Kz(w,0)
m.x=A.aG.dn(m.x,0,10)
w=m.w
l=w.a
l.lt(0)
w=w.d
w===$&&B.c()
l.C2(0,w,0,w.length)
return f}}
C.ceO.prototype={}
C.ceS.prototype={}
C.ceM.prototype={}
C.arC.prototype={}
C.ceR.prototype={
cGY(d,e,f,g){var w,v,u,t,s,r,q,p,o=this,n=o.a
n===$&&B.c()
w=n.c
n=o.b
v=n.b
v===$&&B.c()
u=A.o.e3(w+v-1,v)
t=new Uint8Array(4)
s=new Uint8Array(u*v)
n.bd3(new C.arC(A.aG.fJ(d,e)))
for(r=0,q=1;q<=u;++q){for(p=3;;--p){t[p]=t[p]+1
if(t[p]!==0)break}n=o.a
o.bLX(n.a,n.b,t,s,r)
r+=v}A.aG.hk(f,g,g+w,s)
return o.a.c},
bLX(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m=this
if(e<=0)throw B.U(B.dI("Iteration count must be at least 1.",null))
w=m.b
v=w.a
v.C2(0,d,0,d.length)
v.C2(0,f,0,4)
u=m.c
u===$&&B.c()
w.Kz(u,0)
u=m.c
A.aG.hk(g,h,h+u.length,u)
for(u=g.$flags|0,t=1;t<e;++t){s=m.c
v.C2(0,s,0,s.length)
w.Kz(m.c,0)
for(s=m.c,r=s.length,q=0;q!==r;++q){p=h+q
o=g[p]
n=s[q]
u&2&&B.ak(g)
g[p]=o^n}}}}
C.ceN.prototype={}
C.ceL.prototype={}
C.arD.prototype={
A(d,e){var w,v,u
if(e==null)return!1
w=!1
if(e instanceof C.arD){v=this.a
v===$&&B.c()
u=e.a
u===$&&B.c()
if(v===u){w=this.b
w===$&&B.c()
v=e.b
v===$&&B.c()
v=w===v
w=v}}return w},
rV(d,e){var w=this.a
w===$&&B.c()
w=A.o.rV(w,e.gbVq())
if(!w)e.gbVq()
return w},
aIV(d,e){this.a=0
this.b=d},
rZ(d){return this.aIV(d,null)},
aJw(d){var w,v=this,u=v.b
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
w.aZz(v,u)
u=w.b
u===$&&B.c()
w.aZz(v,u)
u=v.a
return u.charCodeAt(0)==0?u:u},
aZz(d,e){var w,v=A.o.fQ(e,16)
for(w=8-v.length;w>0;--w)d.a+="0"
d.a+=v},
gX(d){var w,v=this.a
v===$&&B.c()
w=this.b
w===$&&B.c()
return B.bs(v,w,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h)}}
C.ceQ.prototype={
lt(d){var w,v=this
v.a.rZ(0)
v.c=0
A.aG.he(v.b,0,4,0)
v.w=0
w=v.r
A.d.he(w,0,w.length,0)
w=v.f
w[0]=1732584193
w[1]=4023233417
w[2]=2562383102
w[3]=271733878
w[4]=3285377520},
ani(d){var w,v=this,u=v.b,t=v.c
t===$&&B.c()
w=t+1
v.c=w
u.$flags&2&&B.ak(u)
u[t]=d&255
if(w===4){v.b03(u,0)
v.c=0}v.a.aJw(1)},
C2(d,e,f,g){var w=this.chR(e,f,g)
f+=w
g-=w
w=this.chS(e,f,g)
this.chI(e,f+w,g-w)},
Kz(d,e){var w,v=this,u=C.h5u(v.a),t=u.a
t===$&&B.c()
t=C.fWz(t,3)
u.a=t
w=u.b
w===$&&B.c()
u.a=(t|w>>>29)>>>0
u.b=C.fWz(w,3)
v.chM()
v.chJ(u)
v.arr()
v.cbX(d,e)
v.lt(0)
return 20},
b03(d,e){var w=this,v=w.w
v===$&&B.c()
w.w=v+1
w.r[v]=J.nV(A.aG.gaP(d),d.byteOffset,d.length).getUint32(e,A.i4===w.d)
if(w.w===16)w.arr()},
arr(){this.cPV()
this.w=0
A.d.he(this.r,0,16,0)},
chI(d,e,f){while(f>0){this.ani(d[e]);++e;--f}},
chS(d,e,f){var w,v
for(w=this.a,v=0;f>4;){this.b03(d,e)
e+=4
f-=4
w.aJw(4)
v+=4}return v},
chR(d,e,f){var w,v=0
for(;;){w=this.c
w===$&&B.c()
if(!(w!==0&&f>0))break
this.ani(d[e]);++e;--f;++v}return v},
chM(){this.ani(128)
for(;;){var w=this.c
w===$&&B.c()
if(!(w!==0))break
this.ani(0)}},
chJ(d){var w,v=this,u=v.w
u===$&&B.c()
if(u>14)v.arr()
u=v.d
switch(u){case A.i4:u=v.r
w=d.b
w===$&&B.c()
u[14]=w
w=d.a
w===$&&B.c()
u[15]=w
break
case A.DF:u=v.r
w=d.a
w===$&&B.c()
u[14]=w
w=d.b
w===$&&B.c()
u[15]=w
break
default:throw B.U(B.bd("Invalid endianness: "+u.u(0)))}},
cbX(d,e){var w,v,u,t,s,r,q
for(w=this.e,v=this.f,u=d.length,t=A.i4===this.d,s=0;s<w;++s){r=v[s]
q=J.nV(A.aG.gaP(d),d.byteOffset,u)
q.$flags&2&&B.ak(q,11)
q.setUint32(e+s*4,r,t)}},
gda(d){return this.f}}
C.ceT.prototype={
cPV(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
for(w=this.r,v=16;v<80;++v){u=w[v-3]^w[v-8]^w[v-14]^w[v-16]
w[v]=((u&$.pX[1])<<1|u>>>31)>>>0}t=this.f
s=t[0]
r=t[1]
q=t[2]
p=t[3]
o=t[4]
for(n=s,m=0,l=0;l<4;++l,m=j){k=$.pX[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r&q|~r&p)>>>0)+w[m]+1518500249>>>0
i=$.pX[30]
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
q=((q&i)<<30|q>>>2)>>>0}for(l=0;l<4;++l,m=j){k=$.pX[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r^q^p)>>>0)+w[m]+1859775393>>>0
i=$.pX[30]
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
q=((q&i)<<30|q>>>2)>>>0}for(l=0;l<4;++l,m=j){k=$.pX[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r&q|r&p|q&p)>>>0)+w[m]+2400959708>>>0
i=$.pX[30]
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
q=((q&i)<<30|q>>>2)>>>0}for(l=0;l<4;++l,m=j){k=$.pX[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r^q^p)>>>0)+w[m]+3395469782>>>0
i=$.pX[30]
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
C.ceP.prototype={
bd3(d){var w,v,u,t,s=this,r=s.a
r.lt(0)
w=d.a
w===$&&B.c()
v=w.length
u=s.c
u===$&&B.c()
if(v>u){r.C2(0,w,0,v)
w=s.d
w===$&&B.c()
r.Kz(w,0)
w=s.b
w===$&&B.c()
v=w}else{t=s.d
t===$&&B.c()
A.aG.hk(t,0,v,w)}w=s.d
w===$&&B.c()
A.aG.he(w,v,w.length,0)
w=s.e
w===$&&B.c()
A.aG.hk(w,0,u,s.d)
s.b7L(s.d,u,54)
s.b7L(s.e,u,92)
u=s.d
r.C2(0,u,0,u.length)},
Kz(d,e){var w,v,u=this,t=u.a,s=u.e
s===$&&B.c()
w=u.c
w===$&&B.c()
t.Kz(s,w)
s=u.e
t.C2(0,s,0,s.length)
v=t.Kz(d,e)
s=u.e
A.aG.he(s,w,s.length,0)
s=u.d
s===$&&B.c()
t.C2(0,s,0,s.length)
return v},
b7L(d,e,f){var w,v,u
for(w=d.$flags|0,v=0;v<e;++v){u=d[v]
w&2&&B.ak(d)
d[v]=u^f}}}
C.ceK.prototype={}
C.ceJ.prototype={
a1s(d){return(D.o_[d&255]&255|(D.o_[d>>>8&255]&255)<<8|(D.o_[d>>>16&255]&255)<<16|D.o_[d>>>24&255]<<24)>>>0},
bjv(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=a0.a
e===$&&B.c()
w=e.length
if(w<16||w>32||(w&7)!==0)throw B.U(B.dI("Key length not 128/192/256 bits.",null))
v=w>>>2
u=v+6
f.a=u
t=u+1
s=J.e2(t,x.bW)
for(u=x.S,r=0;r<t;++r)s[r]=B.c2(4,0,!1,u)
switch(v){case 4:q=J.nV(A.aG.gaP(e),e.byteOffset,w)
p=q.getUint32(0,!0)
e=s[0]
e[0]=p
o=q.getUint32(4,!0)
e[1]=o
n=q.getUint32(8,!0)
e[2]=n
m=q.getUint32(12,!0)
e[3]=m
for(r=1;r<=10;++r){p=(p^f.a1s((m>>>8|(m&$.pX[24])<<24)>>>0)^D.cvq[r-1])>>>0
e=s[r]
e[0]=p
o=(o^p)>>>0
e[1]=o
n=(n^o)>>>0
e[2]=n
m=(m^n)>>>0
e[3]=m}break
case 6:q=J.nV(A.aG.gaP(e),e.byteOffset,w)
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
p=(p^f.a1s((k>>>8|(k&$.pX[24])<<24)>>>0)^j)>>>0
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
p=(p^f.a1s((k>>>8|(k&$.pX[24])<<24)>>>0)^i)>>>0
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
case 8:q=J.nV(A.aG.gaP(e),e.byteOffset,w)
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
p=(p^f.a1s((g>>>8|(g&$.pX[24])<<24)>>>0)^j)>>>0
e=s[r]
e[0]=p
o=(o^p)>>>0
e[1]=o
n=(n^o)>>>0
e[2]=n
m=(m^n)>>>0
e[3]=m;++r
if(r>=15)break
l=(l^f.a1s(m))>>>0
e=s[r]
e[0]=l
k=(k^l)>>>0
e[1]=k
h=(h^k)>>>0
e[2]=h
g=(g^h)>>>0
e[3]=g;++r}break
default:throw B.U(B.bd("Should never get here"))}return s},
bKZ(b2,b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=J.nV(A.aG.gaP(b2),b2.byteOffset,16),a3=a2.getUint32(b3,!0),a4=a2.getUint32(b3+4,!0),a5=a2.getUint32(b3+8,!0),a6=a2.getUint32(b3+12,!0),a7=b6[0],a8=a3^a7[0],a9=a4^a7[1],b0=a5^a7[2],b1=a6^a7[3]
for(a7=this.a-1,w=1;w<a7;){v=D.e6[a8&255]
u=D.e6[a9>>>8&255]
t=$.pX[8]
s=D.e6[b0>>>16&255]
r=$.pX[16]
q=D.e6[b1>>>24&255]
p=$.pX[24]
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
b1=u^(o>>>24|(o&t)<<8)^(s>>>16|(s&r)<<16)^(v>>>8|(v&p)<<24)^q[3]}n=D.e6[a8&255]^C.ni(D.e6[a9>>>8&255],24)^C.ni(D.e6[b0>>>16&255],16)^C.ni(D.e6[b1>>>24&255],8)^b6[w][0]
m=D.e6[a9&255]^C.ni(D.e6[b0>>>8&255],24)^C.ni(D.e6[b1>>>16&255],16)^C.ni(D.e6[a8>>>24&255],8)^b6[w][1]
l=D.e6[b0&255]^C.ni(D.e6[b1>>>8&255],24)^C.ni(D.e6[a8>>>16&255],16)^C.ni(D.e6[a9>>>24&255],8)^b6[w][2]
b1=D.e6[b1&255]^C.ni(D.e6[a8>>>8&255],24)^C.ni(D.e6[a9>>>16&255],16)^C.ni(D.e6[b0>>>24&255],8)^b6[w][3]
a7=D.o_[n&255]
b0=D.o_[m>>>8&255]
v=this.d
u=v[l>>>16&255]
t=v[b1>>>24&255]
s=b6[w+1]
r=s[0]
q=v[m&255]
p=D.o_[l>>>8&255]
a9=D.o_[b1>>>16&255]
o=v[n>>>24&255]
k=s[1]
j=v[l&255]
i=D.o_[b1>>>8&255]
h=D.o_[n>>>16&255]
g=D.o_[m>>>24&255]
f=s[2]
e=v[b1&255]
d=v[n>>>8&255]
v=v[m>>>16&255]
a0=D.o_[l>>>24&255]
s=s[3]
a1=J.nV(A.aG.gaP(b4),b4.byteOffset,16)
a1.$flags&2&&B.ak(a1,11)
a1.setUint32(b5,(a7&255^(b0&255)<<8^(u&255)<<16^t<<24^r)>>>0,!0)
r=J.nV(A.aG.gaP(b4),b4.byteOffset,16)
r.$flags&2&&B.ak(r,11)
r.setUint32(b5+4,(q&255^(p&255)<<8^(a9&255)<<16^o<<24^k)>>>0,!0)
k=J.nV(A.aG.gaP(b4),b4.byteOffset,16)
k.$flags&2&&B.ak(k,11)
k.setUint32(b5+8,(j&255^(i&255)<<8^(h&255)<<16^g<<24^f)>>>0,!0)
f=J.nV(A.aG.gaP(b4),b4.byteOffset,16)
f.$flags&2&&B.ak(f,11)
f.setUint32(b5+12,(e&255^(d&255)<<8^(v&255)<<16^a0<<24^s)>>>0,!0)},
bHO(b1,b2,b3,b4,b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=J.nV(A.aG.gaP(b1),b1.byteOffset,16).getUint32(b2,!0),a1=J.nV(A.aG.gaP(b1),b1.byteOffset,16).getUint32(b2+4,!0),a2=J.nV(A.aG.gaP(b1),b1.byteOffset,16).getUint32(b2+8,!0),a3=J.nV(A.aG.gaP(b1),b1.byteOffset,16).getUint32(b2+12,!0),a4=this.a,a5=b5[a4],a6=a0^a5[0],a7=a1^a5[1],a8=a2^a5[2],a9=a4-1,b0=a3^a5[3]
for(a5=a8,a4=a7;a9>1;){w=D.e5[a6&255]
v=D.e5[b0>>>8&255]
u=$.pX[8]
t=D.e5[a5>>>16&255]
s=$.pX[16]
r=D.e5[a4>>>24&255]
q=$.pX[24]
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
b0=v^(a7>>>24|(a7&u)<<8)^(t>>>16|(t&s)<<16)^(w>>>8|(w&q)<<24)^r[3]}p=D.e5[a6&255]^C.ni(D.e5[b0>>>8&255],24)^C.ni(D.e5[a5>>>16&255],16)^C.ni(D.e5[a4>>>24&255],8)^b5[a9][0]
o=D.e5[a4&255]^C.ni(D.e5[a6>>>8&255],24)^C.ni(D.e5[b0>>>16&255],16)^C.ni(D.e5[a5>>>24&255],8)^b5[a9][1]
n=D.e5[a5&255]^C.ni(D.e5[a4>>>8&255],24)^C.ni(D.e5[a6>>>16&255],16)^C.ni(D.e5[b0>>>24&255],8)^b5[a9][2]
b0=D.e5[b0&255]^C.ni(D.e5[a5>>>8&255],24)^C.ni(D.e5[a4>>>16&255],16)^C.ni(D.e5[a6>>>24&255],8)^b5[a9][3]
a4=D.yq[p&255]
a5=this.d
w=a5[b0>>>8&255]
v=a5[n>>>16&255]
u=D.yq[o>>>24&255]
t=b5[0]
s=t[0]
r=a5[o&255]
q=a5[p>>>8&255]
a7=D.yq[b0>>>16&255]
m=a5[n>>>24&255]
l=t[1]
k=a5[n&255]
j=D.yq[o>>>8&255]
i=D.yq[p>>>16&255]
h=a5[b0>>>24&255]
g=t[2]
f=D.yq[b0&255]
e=a5[n>>>8&255]
a8=a5[o>>>16&255]
a5=a5[p>>>24&255]
t=t[3]
d=J.nV(A.aG.gaP(b3),b3.byteOffset,16)
d.$flags&2&&B.ak(d,11)
d.setUint32(b4,(a4&255^(w&255)<<8^(v&255)<<16^u<<24^s)>>>0,!0)
d.setUint32(b4+4,(r&255^(q&255)<<8^(a7&255)<<16^m<<24^l)>>>0,!0)
d.setUint32(b4+8,(k&255^(j&255)<<8^(i&255)<<16^h<<24^g)>>>0,!0)
d.setUint32(b4+12,(f&255^(e&255)<<8^(a8&255)<<16^a5<<24^t)>>>0,!0)}}
C.bM9.prototype={}
C.bMa.prototype={
gM(d){var w=this.a.length
return w},
anO(){return B.r1(this.a,A.hT,null,null)}}
C.b8E.prototype={
uI(d){return C.hIu(d)}}
C.coM.prototype={
M8(d){var w=d.w,v=Math.max(1,A.k.dw(w/186)),u=Math.max(0,w-16*(v-1))/v,t=u/0.52
return new B.a9f(v,t+20,u+16,t,u,B.tH(d.x))},
nd(d){return!1}}
C.bN2.prototype={
cB6(d){if(this.b)throw B.U(B.bd("FontLoader is already loaded"))
this.c.push(d.bz(new C.bN3(),x.E))},
my(d){var w=0,v=B.j(x.H),u=this,t,s,r,q,p
var $async$my=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(u.b)throw B.U(B.bd("FontLoader is already loaded"))
u.b=!0
t=u.c,s=t.length,r=u.a,q=0
case 2:if(!(q<t.length)){w=4
break}p=C
w=6
return B.b(t[q],$async$my)
case 6:w=5
return B.b(p.fpJ(f,r),$async$my)
case 5:case 3:t.length===s||(0,B.L)(t),++q
w=2
break
case 4:return B.h(null,v)}})
return B.i($async$my,v)}}
C.auC.prototype={
a4(){return"SystemUiMode."+this.b}}
C.a7F.prototype={
A(d,e){if(e==null)return!1
if(J.bL(e)!==B.b_(this))return!1
return e instanceof C.a7F&&e.a===this.a},
gX(d){return B.bs(B.b_(this),B.wu(this.a),A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h)},
u(d){var w="<optimized out>#"
if(B.b_(this)===D.fvS)return"["+(w+B.e3(this.a))+"]"
return"[ObjectKey "+(w+B.e3(this.a))+"]"}}
C.aUq.prototype={
c0(d){var w=new C.azs(!0,this.e,null,new B.dd(),B.cg())
w.bZ()
w.scC(null)
return w},
c9(d,e){var w
x.cQ.a(e)
e.syk(0,!0)
w=this.e
if(!w.A(0,e.ak)){e.ak=w
e.aF1()}}}
C.azs.prototype={
syk(d,e){return},
gpf(){var w=this.ab$
return w!=null},
gkZ(){var w=this.ab$
return w!=null},
LY(d){var w=d==null?B.h0b(null):d
w.sa3Z(this.ak)
return w}}
C.a06.prototype={
T(){return new C.aHQ(B.aX(x.N))},
cO7(d){return this.d.$1(d)},
cLV(){return this.e.$0()}}
C.aHQ.prototype={
a_(){this.a1()
this.Ov()},
Ov(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Ov=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.a.cLV(),$async$Ov)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.f1r(t,s))
case 1:return B.h(u,v)}})
return B.i($async$Ov,v)},
Ye(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$Ye=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.a.c
q=B.T(r).k("a2<1>")
p=B.B(new B.a2(r,new C.f1v(t),q),q.k("J.E"))
if(p.length===0||t.r){w=1
break}t.m(new C.f1w(t))
w=3
return B.b(C.amx(p),$async$Ye)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.f1x(t,s,p))
w=4
return B.b(t.Ov(),$async$Ye)
case 4:case 1:return B.h(u,v)}})
return B.i($async$Ye,v)},
a0q(d){return this.clU(d)},
clU(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a0q=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}t.m(new C.f1s(t))
s=J.q(d,"id")
w=3
return B.b(C.bXv(J.k(s==null?"":s)),$async$a0q)
case 3:r=f
if(r==null){if(t.c==null){w=1
break}t.m(new C.f1t(t))
w=1
break}q=C.fW2(r,!1)
q.z=!1
s=t.a
s.toString
w=4
return B.b(s.cO7(B.a([q],x.D)),$async$a0q)
case 4:if(t.c==null){w=1
break}t.m(new C.f1u(t,r))
case 1:return B.h(u,v)}})
return B.i($async$a0q,v)},
Ou(d,e){return this.bIc(0,e)},
bIc(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$Ou=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}s=J.a8(e)
r=s.h(e,"name")
q=J.k(r==null?"this presentation":r)
r=t.c
r.toString
w=3
return B.b(B.ca(null,null,!0,null,new C.f1m(q),r,null,!0,!0,x.y),$async$Ou)
case 3:if(g!==!0||t.c==null){w=1
break}t.m(new C.f1n(t))
s=s.h(e,"id")
w=4
return B.b(C.amw(J.k(s==null?"":s)),$async$Ou)
case 4:if(t.c==null){w=1
break}t.m(new C.f1o(t))
w=5
return B.b(t.Ov(),$async$Ou)
case 5:case 1:return B.h(u,v)}})
return B.i($async$Ou,v)},
cA9(d){var w=B.bi(d),v=w==null?null:w.bS()
if(v==null)return""
return A.ib[B.bG(v)-1]+" "+B.bQ(v)},
aPe(d,e){var w=null,v=B.m(e*0.3)
return B.p(w,B.W(d,A.c,w,w,w,e*0.5),A.f,w,w,new B.o(w,w,w,v,w,D.NB,A.n),w,e,w,w,w,w,w,e)},
aPd(d){return this.aPe(d,44)},
b5_(d,e,f,g){var w,v,u=null,t=this.w===d,s=t?D.NB:u,r=B.m(14),q=B.W(e,t?A.c:A.az,u,u,u,17),p=x.p
q=B.a([q,L.Ir,B.d(f,u,u,u,u,u,u,B.l(u,u,t?A.c:A.az,u,u,u,u,u,u,u,u,13.5,u,u,A.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],p)
if(g>0){w=A.c.j(t?0.25:0.1)
v=B.m(10)
A.d.v(q,B.a([L.Ir,B.p(u,B.d(""+g,u,u,u,u,u,u,B.l(u,u,t?A.c:A.aR,u,u,u,u,u,u,u,u,11,u,u,A.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.f,u,u,new B.o(w,u,u,v,u,u,A.n),u,u,u,u,D.bup,u,u,u)],p))}return B.D(B.aE(A.c5,B.dg(u,B.A(q,A.m,u,A.bb,A.j,0,u,u),u,u,A.bc,new B.o(u,u,u,r,u,s,A.n),A.hX,u,u,u,A.v4,u,u,u),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.f1B(this,d),u,u,u,u,u,u,!1,A.a8),1)},
cfP(d){var w,v,u,t,s,r,q=null,p=this.d.t(0,d.a),o=p?A.d6.j(0.14):D.WN,n=B.m(18),m=p?A.d6:A.dp
m=B.I(m,A.q,p?1.8:1)
w=this.aPd(A.pM)
v=B.d(d.b,q,1,A.a2,q,q,q,D.aPo,q,q,q)
u=d.r.length
t=u===1?"":"s"
s=x.p
t=B.D(B.v(B.a([v,A.cX,B.d(""+u+" slide"+t,q,q,q,q,q,q,D.aPq,q,q,q)],s),A.F,q,A.e,A.j,0,A.p),1)
v=p?D.NB:q
u=p?q:B.I(A.b2,A.q,1.6)
r=p?D.bK2:q
return B.aE(q,B.dg(q,B.A(B.a([w,A.bf,t,B.dg(q,r,q,q,A.bc,new B.o(q,q,u,q,q,v,A.a6),A.fG,q,26,q,q,q,q,26)],s),A.m,q,A.e,A.j,0,q,q),q,q,A.bc,new B.o(o,q,m,n,q,q,A.n),A.fG,q,q,A.dc,A.bk,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.f1q(this,p,d),q,q,q,q,q,q,!1,A.a8)},
cnr(d){var w,v,u,t,s,r=this,q=null,p=J.a8(d),o=p.h(d,"savedAt"),n=r.cA9(J.k(o==null?"":o))
o=B.m(18)
w=B.I(A.dp,A.q,1)
v=r.aPd(A.MP)
u=p.h(d,"name")
u=B.d(J.k(u==null?"Presentation":u),q,1,A.a2,q,q,q,D.aPo,q,q,q)
p=p.h(d,"slides")
p=B.t(p==null?"?":p)
t=n.length===0?"":" \xb7 saved "+n
s=x.p
t=B.D(B.v(B.a([u,A.cX,B.d(p+" slides"+t,q,q,q,q,q,q,D.aPq,q,q,q)],s),A.F,q,A.e,A.j,0,A.p),1)
p=r.b1I(A.hz,A.bt,"Bring it back",r.r?q:new C.f1y(r,d))
return B.p(q,B.A(B.a([v,A.bf,t,p,A.bp,r.b1I(A.e4,A.cj,"Delete",r.r?q:new C.f1z(r,d))],s),A.m,q,A.e,A.j,0,q,q),A.f,q,q,new B.o(D.WN,q,w,o,q,q,A.n),q,q,q,A.dc,D.boX,q,q,q)},
b1I(d,e,f,g){var w=null,v=g==null,u=e.j(v?0.06:0.14)
return B.hp(B.aE(w,B.p(w,B.W(d,v?A.b2:e,w,w,w,19),A.f,w,w,new B.o(u,w,w,w,w,w,A.a6),w,38,w,w,w,w,w,38),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a8),w,f,w,w)},
arH(d,e,f){var w=null
return new B.C(D.bo0,B.v(B.a([B.W(d,A.b2,w,w,w,46),A.ac,B.d(e,w,w,w,w,w,w,D.f32,w,w,w),A.at,B.d(f,w,w,w,w,w,w,D.eWE,A.L,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),w)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.e
if(h==null)h=A.c6
w=j.a.c.length
v=w!==0&&j.d.a===w
w=B.aI(d,A.bT,x.w).w
u=B.p(i,i,A.f,i,i,new B.o(A.b2,i,i,B.m(3),i,i,A.n),i,4,i,i,i,i,i,42)
t=x.p
s=B.a([j.aPe(A.yd,46),A.bf,D.bvf],t)
if(j.r)s.push(D.e3K)
s.push(B.aH(i,i,i,i,A.Nm,i,i,i,new C.f1E(d),i,i,i,i,i,i))
s=B.A(s,A.m,i,A.e,A.j,0,i,i)
r=A.c.j(0.05)
q=B.m(18)
p=B.I(A.dp,A.q,1)
o=J.a8(h)
q=B.a([A.S,u,new B.C(D.brv,s,i),B.p(i,B.A(B.a([j.b5_(0,A.xN,"Save",j.a.c.length),j.b5_(1,A.N3,"Saved",o.gM(h))],t),A.m,i,A.e,A.j,0,i,i),A.f,i,i,new B.o(r,i,p,q,i,i,A.n),i,i,i,D.bqz,A.en,i,i,i)],t)
if(j.x!=null){u=(j.y?A.cj:A.bt).j(0.12)
s=B.m(14)
r=B.I((j.y?A.cj:A.bt).j(0.4),A.q,1)
p=j.y
n=p?A.MQ:A.ee
n=B.W(n,p?A.cj:A.bt,i,i,i,18)
m=j.x
m.toString
q.push(B.p(i,B.A(B.a([n,A.ab,B.D(B.d(m,i,i,i,i,i,i,A.a6G,i,i,i),1)],t),A.m,i,A.e,A.j,0,i,i),A.f,i,i,new B.o(u,i,r,s,i,i,A.n),i,i,i,D.bqv,A.ix,i,i,1/0))}u=B.a([],t)
if(j.w===0){s=j.d.a
s=B.a([B.D(B.d(s===0?"Tap the ones to save":""+s+" picked",i,i,i,i,i,i,D.f_9,i,i,i),1)],t)
if(j.a.c.length!==0)s.push(B.aE(i,B.d(v?"Clear":"Pick all",i,i,i,i,i,i,D.f29,i,i,i),A.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new C.f1F(j,v),i,i,i,i,i,i,!1,A.a8))
s=B.a([B.A(s,A.m,i,A.e,A.j,0,i,i),A.S],t)
if(j.a.c.length===0)s.push(j.arH(A.pM,"No presentations yet","Make one first, then save it here."))
for(r=j.a.c,p=r.length,l=0;l<r.length;r.length===p||(0,B.L)(r),++l)s.push(j.cfP(r[l]))
A.d.v(u,s)}else{s=B.a([],t)
if(j.f)s.push(D.e3i)
else if(j.e==null)s.push(j.arH(A.ajK,"Could not reach the database","Check the connection, then open this again."))
else if(o.gam(h))s.push(j.arH(A.oA,"Nothing saved yet","Save some presentations and they will show up here."))
for(r=o.gaf(h);r.C();)s.push(j.cnr(r.gU(r)))
A.d.v(u,s)}q.push(new B.dm(1,A.ci,B.cB(u,i,Y.agR,i,i,A.ah,!0),i))
if(j.w===0){u=j.d
s=u.a===0
r=s||j.r?i:j.gc14()
p=s?i:D.NB
s=s?A.c.j(0.07):i
o=B.m(18)
n=u.a===0?i:B.a([new B.ac(0,A.G,A.b5.j(0.4),A.cv,18)],x.V)
u=u.a
m=u===0
k=B.W(A.xN,m?A.j9:A.c,i,i,i,21)
u=m?"Pick presentations to save":"Save "+u+" to the database"
q.push(new B.C(D.br7,B.aE(i,B.dg(i,B.A(B.a([k,A.a69,new B.dm(1,A.ci,B.f2(A.A,B.d(u,i,i,i,i,i,i,B.l(i,i,m?A.j9:A.c,i,i,i,i,i,i,i,i,15,i,i,A.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),A.f,A.eg),i)],t),A.m,i,A.bb,A.j,0,i,i),i,i,A.bc,new B.o(s,i,i,o,n,p,A.n),A.hX,i,54,i,i,i,i,i),A.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,r,i,i,i,i,i,i,!1,A.a8),i))}else q.push(A.S)
return B.p(i,B.bm(!0,B.v(q,A.m,i,A.e,A.Q,0,A.p),!0,!1,A.af,!0,!1),A.f,i,new B.aY(0,1/0,0,w.a.b*0.9),D.aZg,i,i,i,i,i,i,i,i)}}
C.oc.prototype={
ae(){return B.F(["id",this.a,"doc",this.b.ae(),"updatedAt",this.c.a6().ac()],x.N,x.z)}}
C.XU.prototype={
T(){return new C.aws(B.a([],x.k),B.fb(null,x.H))},
gdX(){return this.c}}
C.aws.prototype={
a_(){this.a1()
this.OC()},
OC(){var w=0,v=B.j(x.H),u,t=this,s
var $async$OC=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(C.a14(t.a.c),$async$OC)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.cE2(t,s))
case 1:return B.h(u,v)}})
return B.i($async$OC,v)},
ctw(d){var w,v,u,t=this
d.c=new B.S(Date.now(),0,!1)
w=J.q4(t.d,new C.cE5(d))
v=w<0
if(v&&C.hFE(d))return t.f
u=t.d
if(v)J.pm(u,0,d)
else J.aG(u,w,d)
v=x.a
B.fMT(new C.cE6(t),v)
return t.f=t.f.bz(new C.cE7(t,d),v).eU(new C.cE8())},
I8(d,e,f){return this.c9u(0,e,f)},
aWL(d,e){return this.I8(0,e,!1)},
c9u(d,e,f){var w=0,v=B.j(x.H),u,t=this,s
var $async$I8=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.a5(s,!1).c6(B.e6(new C.cE1(t,e),!1,null,x.H)),$async$I8)
case 3:w=4
return B.b(t.f,$async$I8)
case 4:w=5
return B.b(t.OC(),$async$I8)
case 5:case 1:return B.h(u,v)}})
return B.i($async$I8,v)},
aW1(d){var w=A.o.u(1000*Date.now()),v=d==null?D.dpY:d
this.I8(0,new C.oc(w,v,new B.S(Date.now(),0,!1)),!0)},
c0A(){return this.aW1(null)},
acm(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$acm=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.bV(A.K,null,new C.cE9(),r,!1,!1,!0,null,!1,!1,x.g2),$async$acm)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.aW1(s)
case 1:return B.h(u,v)}})
return B.i($async$acm,v)},
I7(d,e){return this.bI4(0,e)},
bI4(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$I7=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return B.b(B.ca(null,null,!0,null,new C.cDX(e),s,null,!0,!0,x.y),$async$I7)
case 3:if(g!==!0){w=1
break}t.m(new C.cDY(t,e))
w=4
return B.b(t.f,$async$I7)
case 4:w=5
return B.b(C.afm(t.a.c,e.a),$async$I7)
case 5:w=6
return B.b(t.OC(),$async$I7)
case 6:case 1:return B.h(u,v)}})
return B.i($async$I7,v)},
CM(d){return this.bAk(d)},
bAk(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$CM=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.bV(A.K,null,new C.cDT(d),r,!0,!0,!1,null,!1,!1,x.N),$async$CM)
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
return B.b(t.aWL(0,d),$async$CM)
case 9:w=5
break
case 7:w=10
return B.b(F.fWB(r,d.b,null),$async$CM)
case 10:w=5
break
case 8:w=11
return B.b(t.I7(0,d),$async$CM)
case 11:w=5
break
case 5:case 1:return B.h(u,v)}})
return B.i($async$CM,v)},
bVn(){var w,v,u=null,t=[D.dq0,D.dpZ,D.dq_],s=new C.cE_(),r=B.m(26),q=x.V,p=B.a([new B.ac(0,A.G,A.d9.j(0.4),A.eT,24)],q),o=x.p,n=B.a([],o)
for(w=0;w<3;++w){v=new B.aV(999,999)
n.push(B.p(u,new B.x(D.dau[w],u,A.ob,u,u,u,u,u,u,u,u,u),A.f,u,u,new B.o(A.c.j(0.18),u,u,new B.bq(v,v,v,v),u,u,A.n),u,u,u,u,A.nS,u,u,u))}return B.p(u,B.A(B.a([B.D(B.v(B.a([D.fro,A.P,B.bZ(A.bB,n,A.bs,6,6),A.aP,B.aE(u,B.p(u,D.eFM,A.f,u,u,new B.o(A.c,u,u,B.m(999),B.a([new B.ac(0,A.G,A.w.j(0.2),A.cJ,10)],q),u,A.n),u,u,u,u,U.ahe,u,u,u),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.cDZ(this),u,u,u,u,u,u,!1,A.a8)],o),A.F,u,A.e,A.j,0,A.p),1),new B.a6(130,110,new B.an(A.A,u,A.aa,A.r,B.a([s.$3(t[0],-0.22,-30),s.$3(t[2],0.22,30),s.$3(t[1],0,0)],o),u),u)],o),A.m,u,A.e,A.j,0,u,u),A.f,u,u,new B.o(u,u,u,r,p,D.bRX,A.n),u,u,u,u,D.brF,u,u,u)},
bAi(d){var w,v=null,u=d.b.d.length,t=B.m(6),s=B.a([new B.ac(0,A.G,A.w.j(0.5),A.cv,14)],x.V),r=x.p
s=B.p(v,B.bv(B.m(6),new B.an(A.W,v,A.b_,A.r,B.a([B.f2(A.A,F.an4(d.b),A.f,A.bQ),D.e9c,B.ao(v,B.aE(v,B.p(v,D.bKP,A.f,v,v,D.b_b,v,26,v,v,v,v,v,26),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.cDO(this,d),v,v,v,v,v,v,!1,A.a8),v,v,v,4,4,v)],r),v),A.aq),A.f,v,v,new B.o(v,v,v,t,s,v,A.n),v,v,v,v,v,v,v,v)
t=A.a.i(d.b.a)
t=B.d(t.length===0?"Untitled Book":t,v,1,A.a2,v,v,v,D.eU2,v,v,v)
w=u===1?"":"s"
return B.aE(v,B.v(B.a([new B.fG(0.6470588235294118,s,v),A.P,t,B.d(""+u+" page"+w,v,v,v,v,v,v,D.f_k,v,v,v)],r),A.F,v,A.e,A.j,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,new C.cDP(this,d),v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.cDQ(this,d),v,v,v,v,v,v,!1,A.a8)},
B(d){var w,v,u,t=this,s=null,r=x.p,q=B.eF(B.a([new B.C(H.afL,B.hp(B.aE(s,B.p(s,A.amu,A.f,s,s,new B.o(s,s,s,s,B.a([new B.ac(0,A.G,A.b5.j(0.5),A.J,12)],x.V),E.vE,A.a6),s,36,s,s,s,s,s,36),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.gc1Q(),s,s,s,s,s,s,!1,A.a8),s,"Write with AI",s,s),s)],r),s,s,!0,!0,A.K,s,1,!0,s,0,!1,s,!1,E.mV,s,s,s,!0,s,s,s,s,s,D.frs,s,s,s,1,s,!0)
if(t.e)r=D.b2z
else{w=t.bVn()
v=B.a([D.fdn,A.ab],r)
if(J.cx(t.d)){u=B.m(999)
v.push(B.p(s,B.d(""+J.ad(t.d),s,s,s,s,s,s,D.eTu,s,s,s),A.f,s,s,new B.o(D.b7a,s,s,u,s,s,A.n),s,s,s,s,A.xv,s,s,s))}r=B.a([new B.nI(A5.XU,new B.m1(w,s),s),new B.nI(D.br1,new B.m1(B.A(v,A.m,s,A.e,A.j,0,s,s),s),s)],r)
if(J.ck(t.d))r.push(D.eLN)
else r.push(new B.nI(D.bqx,B.Oi(new B.oh(new C.cEa(t),J.ad(t.d),!0,!0,!0,0,B.rI(),s),D.b1R),s))
r=B.vg(0,s,A.r,s,A.y,s,s,s,s,s,!1,s,A.ah,!1,r)}return B.c8(q,D.b5Y,r,s,!1,!1,s,s)}}
C.XS.prototype={
T(){return new C.awo(B.a([],x.bx))},
Tk(d){return this.d.$1(d)}}
C.aDK.prototype={}
C.awo.prototype={
aZB(d,e,f){var w=$.aw(),v=new B.ar(new B.bb(d,A.b3,A.aN),w),u=this.gaWK()
v.aM(0,u)
w=new B.ar(new B.bb(e,A.b3,A.aN),w)
w.aM(0,u)
return new C.aDK(v,w,f)},
DB(){var w,v=this
v.y=!0
w=v.x
if(w!=null)w.a8(0)
v.x=B.cM(A.pB,new C.cDh(v))},
a_(){var w,v,u,t,s,r,q,p,o,n,m=this
m.a1()
w=m.a.c.b
v=$.aw()
u=new B.ar(new B.bb(w.a,A.b3,A.aN),v)
t=m.gaWK()
u.aM(0,t)
m.d!==$&&B.aO()
m.d=u
u=new B.ar(new B.bb(w.b,A.b3,A.aN),v)
u.aM(0,t)
m.e!==$&&B.aO()
m.e=u
u=new B.ar(new B.bb(w.c,A.b3,A.aN),v)
u.aM(0,t)
m.f!==$&&B.aO()
m.f=u
m.r=w.e
for(u=w.d,s=u.length,r=m.w,q=0;q<u.length;u.length===s||(0,B.L)(u),++q){p=u[q]
o=new B.ar(new B.bb(p.a,A.b3,A.aN),v)
o.aM(0,t)
n=new B.ar(new B.bb(p.b,A.b3,A.aN),v)
n.aM(0,t)
r.push(new C.aDK(o,n,p.c))}if(r.length===0)r.push(m.aZB("Page 1","",""))},
q(){var w,v,u,t,s,r=this,q=r.x
if(q!=null)q.a8(0)
if(r.y){r.a.c.b=r.goR()
q=r.a
q.Tk(q.c)}q=r.d
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
goR(){var w,v,u,t,s,r,q,p,o=this,n=o.d
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
for(s=o.w,r=s.length,q=0;q<s.length;s.length===r||(0,B.L)(s),++q){p=s[q]
t.push(new F.ml(A.a.i(p.a.a.a),p.b.a.a,p.c,""))}return new F.r6(n,w,v,t,u)},
Aq(){var w=0,v=B.j(x.H),u=this,t
var $async$Aq=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.x
if(t!=null)t.a8(0)
u.y=!1
u.a.c.b=u.goR()
t=u.a
w=2
return B.b(t.Tk(t.c),$async$Aq)
case 2:return B.h(null,v)}})
return B.i($async$Aq,v)},
c1O(){this.m(new C.cDg(this))
this.DB()},
aVJ(d,e){var w=this,v=d+e
if(v<0||v>=w.w.length)return
w.m(new C.cDj(w,d,v))
w.DB()},
c1P(d,e){var w=A.d.cA(this.w,e)
this.m(new C.cDr())
this.DB()
$.aT.x1$.push(new C.cDs(w))},
PO(d){return this.cfF(d)},
cfF(d){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$PO=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hW().l1(80,1400,A.eG),$async$PO)
case 7:q=f
if(q==null){w=1
break}w=8
return B.b(q.ff(),$async$PO)
case 8:p=f
o=q.b.toLowerCase()
n=J.agT(o,".png")?"image/png":"image/jpeg"
r.m(new C.cDk(d,n,p))
r.DB()
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
return B.i($async$PO,v)},
xl(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$xl=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(F.hih(r,t.goR()),$async$xl)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.cDi(t,s))
t.DB()
case 1:return B.h(u,v)}})
return B.i($async$xl,v)},
cfX(d){var w,v=this,u=null,t=F.ftR(d.c)
if(t==null)return new B.bH(A.a3,u,u,B.hc(D.bEc,D.ffM,new C.cDm(v,d),u),u)
w=x.p
return new B.C(A.cH,new B.an(A.W,u,A.aa,A.r,B.a([B.bv(B.m(12),B.fL(t,A.A,u,u,A.co,A.bQ,!0,140,!1,u,1/0),A.aq),B.ao(u,B.A(B.a([v.b1J(A.kN,new C.cDn(v,d)),A.bp,v.b1J(A.cy,new C.cDo(v,d))],w),A.m,u,A.e,A.j,0,u,u),u,u,u,6,6,u)],w),u),u)},
b1J(d,e){var w=null
return B.aF(!1,A.a1,!0,w,B.aK(!1,w,!0,new B.C(A.hw,B.W(d,A.c,w,w,w,18),w),A.cL,!0,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,w),A.f,A.aX,0,w,w,A.cL,w,w,A.ag)},
I9(){var w=0,v=B.j(x.H),u,t=this,s
var $async$I9=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.Aq(),$async$I9)
case 3:s=t.c
if(s==null){w=1
break}w=4
return B.b(F.fWB(s,t.goR(),new C.cDq(t)),$async$I9)
case 4:case 1:return B.h(u,v)}})
return B.i($async$I9,v)},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=x.p,k=B.eF(B.a([new B.C(A.qM,B.hc(D.bIO,D.flG,n.gavm(),B.fv(m,m,m,m,m,m,m,m,m,m,m,A.bK,m,m,m,m,m,m,m,m,m,m,m,m,m,m)),m),B.aH(m,m,m,m,A.amt,m,m,m,new C.cDt(n,d),m,m,m,m,"Save",m)],l),m,m,!0,!0,E.W_,m,1,m,m,m,!1,m,!1,E.mV,m,m,m,!0,m,m,m,m,m,D.fgD,m,m,m,1,m,!0),j=Av.aTa(N.l4,A.c,Ae.UU,A.nW,D.fhn,n.gc1N()),i=B.m(18),h=n.gavl(),g=B.a([new B.ac(0,A.G,A.w.j(0.4),A.jl,12)],x.V)
g=B.aE(m,B.p(m,new B.a6(92,142.1818181818182,B.f2(A.A,F.an4(n.goR()),A.f,A.dt),m),A.f,m,m,new B.o(m,m,m,m,g,m,A.n),m,m,m,m,m,m,m,m),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,h,m,m,m,m,m,m,!1,A.a8)
w=n.r
w===$&&B.c()
i=B.p(m,B.A(B.a([g,A.eB,B.D(B.v(B.a([D.fsW,A.at,B.d(F.fV6(w.a).b+" template \xb7 pick from 10, change colours, add your picture.",m,m,m,m,m,m,D.f4M,m,m,m),A.S,B.dp(E.alL,E.aQ9,h,B.bk(A.d9,m,m,m,m,m,m,m,m,m,m,m))],l),A.F,m,A.e,A.j,0,A.p),1)],l),A.m,m,A.e,A.j,0,m,m),A.f,m,m,new B.o(E.W_,m,m,i,m,m,A.n),m,m,m,m,A.bk,m,m,m)
h=n.d
h===$&&B.c()
h=B.aL(m,A.T,!1,m,!0,A.r,m,B.aM(),h,m,m,m,m,m,2,B.br(m,new B.b4(4,B.m(12),A.dg),m,m,m,m,m,m,!0,m,m,m,m,m,m,A.c,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,"Book title",!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.ai,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,A.oa,!0,A.a5,m,A.am,m,m,m,m)
w=n.e
w===$&&B.c()
w=B.aL(m,A.T,!1,m,!0,A.r,m,B.aM(),w,m,m,m,m,m,2,B.br(m,new B.b4(4,B.m(12),A.dg),m,m,m,m,m,m,!0,m,m,m,m,m,m,A.c,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,"Subtitle (optional)",!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.ai,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.a5,m,A.am,m,m,m,m)
g=n.f
g===$&&B.c()
g=B.a([i,A.aA,h,A.P,w,A.P,B.aL(m,A.T,!1,m,!0,A.r,m,B.aM(),g,m,m,m,m,m,2,B.br(m,new B.b4(4,B.m(12),A.dg),m,m,m,m,m,m,!0,m,m,m,m,m,m,A.c,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,"Author (optional)",!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.ai,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.a5,m,A.am,m,m,m,m),A.aP],l)
for(i=n.w,v=0;v<i.length;v=t){h=i[v]
w=new B.aV(16,16)
u=new B.aA(N.l4.j(0.18),1,A.q,-1)
t=v+1
s=B.aH(m,m,m,m,D.bHy,m,m,m,v===0?m:new C.cDu(n,v),m,m,m,m,"Move up",A.c7)
r=i.length
q=B.aH(m,m,m,m,D.bNL,m,m,m,v===r-1?m:new C.cDv(n,v),m,m,m,m,"Move down",A.c7)
r=r===1?m:new C.cDw(n,v)
p=new B.aV(12,12)
o=new B.aV(12,12)
g.push(B.p(m,B.v(B.a([new B.cl(A.aO,A.e,A.j,A.m,m,A.p,m,0,B.a([new B.x("Page "+t,m,D.f5j,m,m,m,m,m,m,m,m,m),A.b4,s,q,B.aH(m,m,m,m,B.W(A.e4,A.ot,m,m,m,18),m,m,m,r,m,m,m,m,"Remove page",A.c7)],l),m),B.aL(m,A.T,!1,m,!0,A.r,m,B.aM(),i[v].a,m,m,m,m,m,2,new B.e1(m,m,m,"Title",m,m,m,m,m,m,m,m,m,m,m,m,!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.c,m,m,m,m,m,m,m,new B.b4(4,new B.bq(p,p,p,p),A.dg),!0,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.ai,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,A.cc,!0,A.a5,m,A.am,m,m,m,m),A.an,n.cfX(i[v]),B.aL(m,A.T,!1,m,!0,A.r,m,B.aM(),i[v].b,m,m,m,m,m,2,new B.e1(m,m,m,"Write here\u2026 long pages flow onto the next paper page",m,m,m,m,m,m,m,m,m,m,m,m,!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.c,m,m,m,m,m,m,m,new B.b4(4,new B.bq(o,o,o,o),A.dg),!0,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.ai,m,m,m,m,m,m,m,m,m,m,5,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.a5,m,A.am,m,m,m,m)],l),A.m,m,A.e,A.j,0,A.p),A.f,m,m,new B.o(E.mV,m,new B.bP(u,u,u,u),new B.bq(w,w,w,w),m,m,A.n),m,m,new C.a7F(h),A.e3,D.bpb,m,m,m))}return B.oe(!0,B.c8(k,E.adV,B.cB(g,m,D.bpD,m,m,A.ah,!1),m,!1,!1,j,m),new C.cDx(n),x.C)}}
C.awq.prototype={
B(d){var w,v,u=this,t=null,s=u.r,r=s?A.cj:E.mV,q=B.m(16),p=B.m(16),o=s?A.ay.j(0.08):A.c.j(0.04)
s=s?A.ay.j(0.16):A.d9.j(0.22)
w=B.m(12)
v=x.p
return new B.C(A.eO,B.aF(!1,A.a1,!0,t,B.aK(!1,q,!0,B.p(t,B.A(B.a([B.p(t,B.W(u.c,r,t,t,t,20),A.f,t,t,new B.o(s,t,t,w,t,t,A.n),t,40,t,t,t,t,t,40),A.bf,B.D(B.v(B.a([B.d(u.d,t,t,t,t,t,t,B.l(t,t,r,t,t,t,t,t,t,t,t,15,t,t,A.H,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),A.bA,B.d(u.e,t,t,t,t,t,t,D.aOL,t,t,t)],v),A.F,t,A.e,A.j,0,A.p),1),B.W(A.ex,r.j(0.6),t,t,t,t)],v),A.m,t,A.e,A.j,0,t,t),A.f,t,t,new B.o(o,t,t,p,t,t,A.n),t,t,t,t,A.bk,t,t,t),t,!0,t,t,t,t,t,t,t,t,t,t,t,u.f,t,t,t,t,t,t,t),A.f,A.K,0,t,t,t,t,t,A.ag),t)}}
C.apb.prototype={
T(){return new C.aCw()}}
C.aCw.prototype={
a_(){this.a1()
this.YS()},
br(d){this.bE(d)
if(d.c!=this.a.c)this.a0f()},
a0f(){var w=0,v=B.j(x.H),u=this,t
var $async$a0f=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.d
t=t==null?null:t.q()
w=2
return B.b(x.bq.b(t)?t:B.dP(t,x.H),$async$a0f)
case 2:u.d=null
if(u.c!=null)u.m(new C.e5t(u))
w=3
return B.b(u.YS(),$async$a0f)
case 3:return B.h(null,v)}})
return B.i($async$a0f,v)},
YS(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$YS=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:o=r.a.c
n=A.a.i(o==null?"":o)
if(J.ad(n)===0){w=1
break}t=4
if(J.cZ(n,"http://")||J.cZ(n,"https://")||J.cZ(n,"data:")){o=B.Xu(B.cv(n,0,null),new B.OG(!0))
r.d=o}else{o=B.fl("unsupported video ref")
throw B.U(o)}w=7
return B.b(o.i6(0).cM(0,A.px),$async$YS)
case 7:if(r.c==null){w=1
break}r.d.t0(!1)
r.m(new C.e5r(r))
t=2
w=6
break
case 4:t=3
m=s.pop()
q=B.a9(m)
$.am.$1("[kiapo video] "+B.t(q))
if(r.c!=null)r.m(new C.e5s(r))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$YS,v)},
q(){var w=this.d
if(w!=null)w.q()
this.a2()},
c4n(){var w=this,v=w.d
if(v==null||!w.e)return
if(v.a.f){v.h0(0)
w.m(new C.e5u(w))}else{v.py(0)
w.m(new C.e5v(w))}},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.a,m=n.c
if(A.a.i(m==null?"":m).length===0){if(!n.e)return A.bH
n=B.m(8*n.d)
m=B.a([D.j5.j(0.92),D.Ka.j(0.95)],x.O)
w=B.I(A.bY.j(0.55),A.q,1)
v=p.a
u=v.d
t=B.W(A.pP,A.bY,o,o,o,28*u)
v=v.f?"Tap to add president video":"Video ya kiapo"
return B.c_(B.av(B.v(B.a([t,new B.a6(o,6*u,o,o),B.d(v,o,o,o,o,o,o,B.l(o,o,A.c.j(0.85),o,o,o,o,o,o,o,o,11*p.a.d,o,o,A.O,o,o,!0,o,o,o,o,o,o,o,o),A.L,o,o)],x.p),A.m,o,A.e,A.Q,0,A.p),o,o,o),new B.o(o,o,w,n,o,new B.a7(A.ax,A.aC,A.x,m,o,o),A.n),A.bd)}if(p.f)return B.av(B.W(A.al2,A.az,o,o,o,28*n.d),o,o,o)
if(!p.e||p.d==null)return D.b3o
s=p.d
m=s.a.as
r=m.a
r=r>0?r:16
q=m.b
q=q>0?q:9
n=B.m(6*n.d)
m=B.a([B.f2(A.A,new B.a6(r,q,new B.zI(s,o),o),A.r,A.bQ)],x.p)
if(!p.r){w=8*p.a.d
v=A.w.j(0.45)
m.push(B.av(B.p(o,B.W(A.iT,A.c,o,o,o,28*p.a.d),A.f,o,o,new B.o(v,o,o,o,o,o,A.a6),o,o,o,o,new B.Q(w,w,w,w),o,o,o),o,o,o))}return B.aE(o,B.bv(n,new B.an(A.W,o,A.b_,A.r,m,o),A.aq),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gc4m(),o,o,o,o,o,o,!1,A.a8)}}
C.xd.prototype={
a4(){return"NgmyHatiLayoutKind."+this.b}}
C.ji.prototype={}
C.aco.prototype={
B(d){return B.oH(new C.dVO(this,B.O(d).ax.a===A.I,d),!0,0.72,0.9,0.5,!1,null)}}
C.abO.prototype={
B(d){var w,v,u=null,t=B.O(d).ax.a===A.I,s=B.m(18),r=B.m(18),q=B.I(D.j5.j(t?0.35:0.4),A.q,1),p=t?D.KF:A.c,o=x.V,n=B.a([new B.ac(0,A.G,A.w.j(t?0.3:0.08),A.cv,14)],o),m=B.m(10),l=B.I(A.bY.j(0.5),A.q,1)
o=B.a([new B.ac(0,A.G,A.w.j(0.14),A.dC,6)],o)
w=this.c
o=B.D(B.p(u,new B.fG(0.5625,C.hXU(w),u),A.aq,u,u,new B.o(u,u,l,m,o,u,A.n),u,u,u,D.ahI,u,u,u,u),1)
m=D.j5.j(t?0.18:0.16)
l=B.d(w.b,u,u,u,u,u,u,B.l(u,u,t?A.c:D.j5,u,u,u,u,u,u,u,u,12.5,u,u,A.u,u,u,!0,u,0.1,u,u,u,u,u,u),u,u,u)
v=x.p
return B.aF(!1,A.a1,!0,u,B.aK(!1,s,!0,B.p(u,B.v(B.a([o,B.p(u,B.v(B.a([l,A.cX,B.d(w.c,u,2,A.a2,u,u,u,B.l(u,u,t?A.az:D.bd1,u,u,u,u,u,u,u,u,9.5,u,u,u,u,1.32,!0,u,u,u,u,u,u,u,u),u,u,u)],v),A.F,u,A.e,A.j,0,A.p),A.f,u,u,new B.o(u,u,new B.bP(new B.aA(m,1,A.q,-1),A.Y,A.Y,A.Y),u,u,u,A.n),u,u,u,u,D.ag0,u,u,u)],v),A.aj,u,A.e,A.j,0,A.p),A.f,u,u,new B.o(p,u,q,r,n,u,A.n),u,u,u,u,u,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,this.d,u,u,u,u,u,u,u),A.f,A.K,0,u,u,u,u,u,A.ag)}}
C.xg.prototype={
a4(){return"NgmyMarriageLayoutKind."+this.b}}
C.nx.prototype={}
C.bhE.prototype={
Z0(d){var w=null
return new B.bH(A.a3,w,w,B.Dq(A.A,B.p(w,w,A.f,w,w,new B.o(this.d.j(0.14),w,w,B.m(3),w,w,A.n),w,5,w,w,w,w,w,w),w,d),w)},
c4P(){return this.Z0(1)},
aw1(d){var w=null,v=B.m(8),u=B.I(A.hV,A.q,0.9)
return B.p(A.A,B.d(d,w,w,w,w,w,w,B.l(w,w,this.d,w,w,w,w,w,w,w,w,6.5,w,w,A.u,w,w,!0,w,0.3,w,w,w,w,w,w),w,w,w),A.f,w,w,new B.o(D.ac_,w,u,v,w,w,A.n),w,13,w,w,w,w,w,w)},
B(d){var w=this,v=null,u=x.p,t=w.d
return B.v(B.a([B.A(B.a([B.p(v,v,A.f,v,v,new B.o(v,v,B.I(A.hV,A.q,1.6),v,v,v,A.a6),v,22,v,v,v,v,v,22),B.dV(B.p(v,v,A.f,v,v,new B.o(v,v,B.I(A.hV,A.q,1.6),v,v,v,A.a6),v,22,v,v,v,v,v,22),new B.u(-8.36,0))],u),A.m,v,A.bb,A.j,0,v,v),A.at,B.d("HATI YA NDOA",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,12,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v),B.d("Hati ya Makubaliano ya Ndoa",v,v,v,v,v,v,B.l(v,v,t.j(0.7),v,v,v,v,v,v,v,v,7,v,v,A.a4,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v),A.an,w.aw1("TAARIFA ZA WANANDOA"),A.an,w.c4P(),A.cX,w.Z0(0.9),A.cX,w.Z0(0.7),A.P,w.aw1("TAMKO LA MAKUBALIANO"),A.fZ,w.Z0(1),A.cX,w.Z0(0.95),A.P,w.aw1("MASHAHIDI"),A.b4,B.d("NGMY",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,8,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.d(w.c.b,v,v,v,v,v,v,B.l(v,v,w.e,v,v,v,v,v,v,v,v,7,v,v,A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],u),A.m,v,A.e,A.j,0,A.p)}}
C.acr.prototype={
B(d){return B.oH(new C.eaI(B.O(d).ax.a===A.I,d),!0,0.92,0.96,0.5,!1,null)}}
C.ae5.prototype={
B(d){var w,v,u,t,s,r=null,q=B.O(d).ax.a===A.I,p=B.m(18),o=B.m(18),n=B.I(A.aw.j(q?0.35:0.4),A.q,1),m=q?D.bcC:A.c,l=x.V,k=B.a([new B.ac(0,A.G,A.w.j(q?0.3:0.08),A.cv,14)],l),j=B.m(10),i=B.I(A.aw.j(0.5),A.q,1)
l=B.a([new B.ac(0,A.G,A.w.j(0.14),A.dC,6)],l)
w=this.c
v=C.fVB(w.a)
if(v==null)v=A.d.gK(D.Q3)
u=B.b0(v.f)
t=B.b0(v.r)
s=x.p
l=B.D(B.p(r,new B.fG(0.5625,new B.an(A.W,r,A.b_,A.r,B.a([B.bY(0,B.fL(C.fVA(v.d),A.A,r,r,A.co,A.bQ,!0,r,!1,r,r),0,0,0),new B.C(A.agI,new C.bhE(v,u,t,r),r)],s),r),r),A.aq,r,r,new B.o(r,r,i,j,l,r,A.n),r,r,r,D.ahI,r,r,r,r),1)
j=A.aw.j(q?0.18:0.16)
i=B.d(w.b,r,r,r,r,r,r,B.l(r,r,q?A.c:A_.KG,r,r,r,r,r,r,r,r,12.5,r,r,A.u,r,r,!0,r,0.1,r,r,r,r,r,r),r,r,r)
return B.aF(!1,A.a1,!0,r,B.aK(!1,p,!0,B.p(r,B.v(B.a([l,B.p(r,B.v(B.a([i,A.cX,B.d(w.c,r,2,A.a2,r,r,r,B.l(r,r,q?A.az:D.b6t,r,r,r,r,r,r,r,r,9.5,r,r,r,r,1.32,!0,r,r,r,r,r,r,r,r),r,r,r)],s),A.F,r,A.e,A.j,0,A.p),A.f,r,r,new B.o(r,r,new B.bP(new B.aA(j,1,A.q,-1),A.Y,A.Y,A.Y),r,r,r,A.n),r,r,r,r,D.ag0,r,r,r)],s),A.aj,r,A.e,A.j,0,A.p),A.f,r,r,new B.o(m,r,n,o,k,r,A.n),r,r,r,r,r,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,this.d,r,r,r,r,r,r,r),A.f,A.K,0,r,r,r,r,r,A.ag)}}
C.kM.prototype={
a4(){return"NgmyMarriagePaperStyle."+this.b}}
C.a78.prototype={}
C.V1.prototype={
T(){var w=$.aw()
return new C.aCP(new B.cq(null,x.A),new B.ar(A.as,w),new B.ar(A.as,w),B.mt(0,null,null),A.d.gK(D.a1P),D.dAg,B.a([],x.L),B.a([],x.gE))}}
C.aCP.prototype={
a_(){var w,v=this
v.a1()
v.w=v.a.c
v.z=new C.z5(C.fxK(v.y),"NGMY NEWS","","","By the NGMY Newsroom","",A.T,"","","")
w=x.a
C.fwG().bz(new C.ee_(v),w)
$.tT().ki(0,"assets/images/ngmy_logo.png").bz(new C.ee0(v),w).eU(new C.ee1())},
q(){var w=this,v=w.e,u=$.aw()
v.S$=u
v.P$=0
v=w.f
v.S$=u
v.P$=0
w.r.q()
w.a2()},
age(d){var w=null,v=this.c
if(v!=null)v.I(x.q).f.R(B.b2(w,w,w,w,w,A.r,w,B.d(d,w,w,w,w,w,w,w,w,w,w),w,A.U,w,w,w,w,w,w,w,w,w,w))},
It(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k
var $async$It=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hW().l1(88,1600,A.eG),$async$It)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.ff(),$async$It)
case 8:p=e
m=r.c
if(m==null){w=1
break}w=9
return B.b(C.hiy(m,p),$async$It)
case 9:o=e
if(o==null||r.c==null){w=1
break}m=r.c
m.toString
w=10
return B.b(F.bBy(new B.pA(o,1),m),$async$It)
case 10:if(r.c!=null)r.m(new C.edC(r,o))
t=2
w=6
break
case 4:t=3
k=s.pop()
n=B.a9(k)
r.age("Could not open that picture. "+B.t(n))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$It,v)},
W6(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$W6=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.w
if(q==null||t.as){w=1
break}s=t.c
s.toString
w=3
return B.b(C.hiy(s,q),$async$W6)
case 3:r=e
if(r==null||t.c==null){w=1
break}s=t.c
s.toString
w=4
return B.b(F.bBy(new B.pA(r,1),s),$async$W6)
case 4:if(t.c!=null)t.m(new C.edy(t,r))
case 1:return B.h(u,v)}})
return B.i($async$W6,v)},
ad9(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$ad9=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.as){w=1
break}q.m(new C.edJ(q))
t=4
q.a.toString
p=C.i1j()
l=q.Q
k=q.e.a
o=l==="sw"?A.a.i(A.a.i(k.a)+" Write the whole newspaper in Swahili (Kiswahili)."):k.a
k=q.y
w=7
return B.b(p.$4$paper$photo$request$template(null,q.w,o,k),$async$ad9)
case 7:n=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.edK(q,n))
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
m=B.a9(i)
q.age(B.t(m))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.edL(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$ad9,v)},
Z5(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h,g
var $async$Z5=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i=A.a.i(q.f.a.a)
h=!0
if(J.ad(i)!==0)if(!q.as){h=q.z
h=A.a.i(h.c).length===0&&h.r.length===0}if(h){w=1
break}q.m(new C.edE(q,i))
t=4
q.a.toString
p=C.i1i()
h=q.z
m=q.y
l=q.w
k=B.B(q.ax,x.fz)
w=7
return B.b(p.$5$doc$history$instruction$photo$template(h,k,i,l,m),$async$Z5)
case 7:o=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.edF(q,o))
r.push(6)
w=5
break
case 4:t=3
g=s.pop()
n=B.a9(g)
if(q.c!=null)q.m(new C.edG(q,n))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.edH(q))
$.aT.x1$.push(new C.edI(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Z5,v)},
c54(d){this.m(new C.edD(this,d))},
DT(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$DT=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(!q.as){k=q.z
k=A.a.i(k.c).length===0&&k.r.length===0}else k=!0
if(k){w=1
break}q.m(new C.edA(q))
t=4
w=7
return B.b($.aT.gms(),$async$DT)
case 7:w=8
return B.b(B.bN(A.n0,null,x.H),$async$DT)
case 8:k=$.aT.ak$.x.h(0,q.d)
p=k==null?null:k.gb8()
if(!(p instanceof B.pL))throw B.U("The page is not ready yet.")
w=9
return B.b(p.lR(1800/p.gY(0).a),$async$DT)
case 9:o=e
w=10
return B.b(o.hp(A.fW),$async$DT)
case 10:n=e
if(n==null)throw B.U("Could not make the picture.")
w=11
return B.b(A7.afp(J.fa(A.dH.gaP(n)),"ngmy_news.png","image/png"),$async$DT)
case 11:m=e
q.age(m?"Your newspaper picture is ready. Check your downloads.":"Downloading is not available here.")
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
l=B.a9(i)
q.age(B.t(l))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.edB(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$DT,v)},
B(a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=a1.z,a4=!(A.a.i(a3.c).length===0&&a3.r.length===0)
a3=B.aH(a2,a2,a2,a2,A.kP,a2,a2,a2,new C.edR(a5),a2,a2,a2,a2,a2,a2)
w=x.p
v=B.a([],w)
if(a1.ay.length!==0)v.push(B.aH(a2,a2,a2,a2,D.bJj,a2,a2,a2,new C.edS(a1),a2,a2,a2,a2,"Undo the last change",a2))
v.push(B.aH(a2,a2,a2,a2,A.oJ,a2,a2,a2,a4?a1.gaXP():a2,a2,a2,a2,a2,"Download",a2))
a3=B.eF(v,a2,a2,!0,!0,A.Av,a2,1,!0,a2,0,!1,a2,!1,a2,a2,a3,a2,!0,a2,a2,a2,a2,a2,D.eFV,a2,a2,a2,1,a2,!0)
v=x.V
u=B.a([new B.ac(0,A.G,A.w.j(0.6),A.eT,24)],v)
t=a1.z
s=a1.y
r=a1.w
u=B.p(a2,new B.fG(0.7142857142857143,B.f2(A.A,new B.es(new C.b_n(t,s,r,a1.x,a2),a1.d),A.f,A.dt),a2),A.f,a2,a2,new B.o(a2,a2,a2,a2,u,a2,A.n),a2,a2,a2,a2,a2,a2,a2,a2)
s=B.d("1  YOUR PICTURE",a2,a2,a2,a2,a2,a2,D.T4,a2,a2,a2)
t=a1.as?a2:a1.gc53()
t=B.a([B.D(B.dp(D.bK3,B.d(r==null?"Add a picture":"Change the picture",a2,a2,a2,a2,a2,a2,A.cc,a2,a2,a2),t,B.bk(D.t7,a2,a2,a2,A.c,A.fN,a2,a2,new B.b7(B.m(14),P.uI),a2,a2,a2)),1)],w)
r=a1.w
if(r!=null){r=B.bv(B.m(10),B.fL(r,A.A,a2,a2,A.co,A.bQ,!1,48,!1,a2,48),A.aq)
A.d.v(t,B.a([A.av,r,B.aH(a2,a2,a2,a2,D.bGR,a2,a2,a2,a1.as?a2:a1.gbGI(),a2,a2,a2,a2,"Crop the picture",a2)],w))}t=B.A(t,A.m,a2,A.e,A.j,0,a2,a2)
r=B.d("2  WHAT SHOULD IT BE ABOUT?  (optional)",a2,a2,a2,a2,a2,a2,D.T4,a2,a2,a2)
q=B.aL(a2,A.T,!1,a2,!0,A.r,a2,B.aM(),a1.e,a2,a2,a2,a2,a2,2,a1.aR_("Leave it empty and the AI picks a story about NGMY"),A.y,!0,a2,!0,a2,!1,a2,A.ai,a2,a2,a2,a2,a2,a2,a2,a2,a2,3,1,a2,!1,"\u2022",a2,a2,a2,a2,a2,!1,a2,a2,!1,a2,!0,a2,A.a9,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,A.dl,!0,A.a5,a2,A.am,a2,a2,a2,a2)
p=B.a([],w)
for(o=0;o<7;++o){n=D.d5i[o]
p.push(B.mB(a2,D.t7,new B.x(n.a,a2,A.p2,a2,a2,a2,a2,a2,a2,a2,a2,a2),A.hB,new C.edT(a1,n),a2,a2,P.uI,a2))}p=B.bZ(A.bB,p,A.bs,6,8)
m=a1.Q
m=B.bZ(A.bB,B.a([D.frB,A.bf,B.jI(a2,a2,a2,D.fcd,a2,new C.edU(a1),m==="en",a2,a2,a2,a2),A.ab,B.jI(a2,a2,a2,D.fc8,a2,new C.edV(a1),m==="sw",a2,a2,a2,a2)],w),A.rF,0,8)
l=B.d("3  PICK A DESIGN",a2,a2,a2,a2,a2,a2,D.T4,a2,a2,a2)
k=B.a([],w)
for(j=x.dt,i=B.dc(D.a1P,0,B.dJ(10,"count",x.S),j),h=i.$ti,i=new B.bW(i,i.gM(0),h.k("bW<aj.E>")),h=h.k("aj.E");i.C();){g=i.d
k.push(a1.aPx(g==null?h.a(g):g))}k=B.cB(k,a2,a2,a2,a2,A.aO,!1)
i=B.a([],w)
for(j=B.dc(D.a1P,10,a2,j),h=j.$ti,j=new B.bW(j,j.gM(0),h.k("bW<aj.E>")),h=h.k("aj.E");j.C();){g=j.d
i.push(a1.aPx(g==null?h.a(g):g))}j=B.cB(i,a2,a2,a2,a2,A.aO,!1)
i=a1.as?a2:a1.gc56()
h=B.m(18)
v=B.a([new B.ac(0,A.G,A.bz.j(0.4),A.J,18)],v)
v=B.a([u,A.aA,new B.C(A.cH,s,a2),t,A.aA,new B.C(A.cH,r,a2),q,A.P,p,A.S,m,A.aA,new B.C(A.cH,l,a2),new B.a6(a2,78,k,a2),A.P,new B.a6(a2,78,j,a2),A.aP,B.aE(a2,B.p(A.A,B.A(B.a([D.bJY,A.ab,B.d(a4?"Write it again":"Write my newspaper",a2,a2,a2,a2,a2,a2,A.fO,a2,a2,a2)],w),A.m,a2,A.e,A.Q,0,a2,a2),A.f,a2,a2,new B.o(a2,a2,a2,h,v,G.tU,A.n),a2,54,a2,a2,a2,a2,a2,a2),A.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,i,a2,a2,a2,a2,a2,a2,!1,A.a8)],w)
if(a4){u=B.a([A.e1,B.A(B.a([D.dkQ,A.av,D.bvy],w),A.m,a2,A.e,A.j,0,a2,a2),A.P],w)
for(t=a1.ax,s=t.length,o=0;o<t.length;t.length===s||(0,B.L)(t),++o){f=t[o]
e=f.a==="you"
r=e?A.a7:A.a3
q=e?A.b5.j(0.35):D.t7
p=new B.aV(16,16)
d=new B.aA(A.bF,1,A.q,-1)
u.push(new B.bH(r,a2,a2,B.p(a2,new B.x(f.b,a2,D.f2P,a2,a2,a2,a2,a2,a2,a2,a2,a2),A.f,a2,A8.UI,new B.o(q,a2,new B.bP(d,d,d,d),new B.bq(p,p,p,p),a2,a2,A.n),a2,a2,a2,A.cH,A.ix,a2,a2,a2),a2))}u.push(A.an)
t=B.a([],w)
for(o=0;o<4;++o){a0=D.cTi[o]
t.push(B.mB(a2,D.t7,new B.x(a0,a2,A.IB,a2,a2,a2,a2,a2,a2,a2,a2,a2),A.hB,new C.edW(a1,a0),a2,a2,P.uI,a2))}u.push(B.bZ(A.bB,t,A.bs,6,8))
u.push(A.S)
t=B.D(B.aL(a2,A.T,!1,a2,!0,A.r,a2,B.aM(),a1.f,a2,a2,a2,a2,a2,2,a1.aR_("Ask for a change, or ask a question\u2026"),A.y,!0,a2,!0,a2,!1,a2,A.ai,a2,a2,a2,a2,a2,a2,a2,a2,a2,4,1,a2,!1,"\u2022",a2,a2,a2,new C.edX(a1),a2,!1,a2,a2,!1,a2,!0,a2,A.a9,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,A.dl,!0,A.a5,a2,A.am,a2,a2,a2,a2),1)
s=a1.as?a2:a1.gc55()
u.push(B.A(B.a([t,A.ab,B.Hd(A.yi,s,B.nr(a2,A.b5,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2)],w),A.m,a2,A.e,A.j,0,a2,a2))
u.push(A.aA)
t=a1.as?a2:a1.gaXP()
u.push(B.dp(A.oJ,D.fnd,t,B.bk(A.d_,a2,a2,a2,a2,A.Ip,a2,a2,new B.b7(B.m(16),A.Y),a2,a2,a2)))
A.d.v(v,u)}v=B.a([B.cB(v,a1.r,A.agu,a2,a2,A.ah,!1)],w)
if(a1.as){u=A.w.j(0.55)
t=B.m(20)
s=B.I(E.jL.j(0.5),A.q,1)
v.push(B.bY(0,B.ej(B.av(B.p(a2,B.A(B.a([E.a6a,A.eB,B.d(a1.at,a2,a2,a2,a2,a2,a2,A.iG,a2,a2,a2)],w),A.m,a2,A.e,A.Q,0,a2,a2),A.f,a2,a2,new B.o(E.Am,a2,s,t,a2,a2,A.n),a2,a2,a2,a2,D.brW,a2,a2,a2),a2,a2,a2),u,!0),0,0,0))}return B.c8(a3,A.Av,new B.an(A.W,a2,A.aa,A.r,v,a2),a2,!1,!1,a2,a2)},
aR_(d){var w=null
return B.br(w,new B.b4(4,B.m(14),A.Y),w,A.eP,w,w,w,w,!0,w,w,w,w,w,w,D.t7,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,X.Ix,d,w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
aPx(d){var w,v,u,t=null,s=d.a===this.y.a,r=B.m(12),q=B.b0(d.f),p=s?A.bz:A.bF
p=B.I(p,A.q,s?2.4:1)
w=B.a([B.p(t,t,A.f,B.b0(d.x),t,t,t,5,t,A.l7,t,t,t,t),A.fZ],x.p)
for(v=d.w,u=0;u<4;++u)w.push(B.p(t,t,A.f,B.b0(v).j(0.5),t,t,t,2,t,D.boe,t,t,t,t))
w.push(A.cX)
w.push(new B.C(A.je,B.d(d.b,t,1,A.a2,t,t,t,B.l(t,t,B.b0(v),t,t,t,t,t,t,t,t,9,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t))
return B.aE(t,B.p(t,B.v(w,A.m,t,A.bb,A.j,0,A.p),A.f,t,t,new B.o(q,t,p,r,t,t,A.n),t,t,t,A.jc,t,t,t,72),A.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.edz(this,d),t,t,t,t,t,t,!1,A.a8)}}
C.z5.prototype={
b9V(d,e,f,g,h,i,j,k,l,m){var w=this,v=g==null?w.b:g,u=i==null?w.a:i,t=h==null?w.c:h,s=m==null?w.d:m,r=e==null?w.e:e,q=f==null?w.f:f,p=d==null?w.r:d,o=j==null?w.w:j,n=l==null?w.x:l
return new C.z5(u,v,t,s,r,q,p,o,n,k==null?w.y:k)},
cEu(d){var w=null
return this.b9V(w,w,w,w,w,d,w,w,w,w)},
ae(){var w=this
return B.F(["paper",w.a,"headline",w.c,"subhead",w.d,"byline",w.e,"caption",w.f,"body",w.r,"pullQuote",w.w,"sidebarTitle",w.x,"sidebarText",w.y,"category",w.b],x.N,x.z)},
aBj(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j="headline",i="category",h=new C.caI(d),g=d.h(0,"body")
if(x.j.b(g)){w=B.a([],x.s)
for(v=J.aW(g);v.C();){u=v.gU(v)
if(A.a.i(B.t(u)).length!==0)w.push(A.a.i(B.t(u)))}t=w}else if(typeof g=="string"&&A.a.i(g).length!==0){w=A.a.fz(g,B.af("\\n\\s*\\n",!0,!1,!1,!1))
w=new B.K(w,new C.caG(),B.T(w).k("K<1,n>")).c_(0,new C.caH())
t=B.B(w,w.$ti.k("J.E"))}else t=k
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
return this.b9V(p,r,q,J.ad(l==null?"":l)===0?k:h.$1(i).toUpperCase(),v,w,o,m,n,s)},
gF2(d){return this.f}}
C.t3.prototype={
a4(){return"NewsLayout."+this.b}}
C.B_.prototype={
a4(){return"NewsFrame."+this.b}}
C.l9.prototype={}
C.b_n.prototype={
r_(d,e,f,g,h,i,j){var w=null
return B.l(w,w,f==null?B.b0(this.d.w):f,w,w,w,w,w,d,w,w,e,i,w,j,w,g,!0,w,h,w,w,w,w,w,w)},
aXR(d,e,f,g){return this.r_(d,e,null,1.25,f,A.bl,g)},
P9(d,e,f,g,h){return this.r_(d,e,f,1.25,g,A.bl,h)},
aw7(d,e,f,g,h){return this.r_(d,e,null,f,g,A.bl,h)},
aw6(d,e,f,g,h){return this.r_(d,e,f,g,0,A.bl,h)},
aXT(d,e,f,g,h){return this.r_(d,e,null,f,0,g,h)},
c5a(d,e,f,g,h,i){return this.r_(d,e,f,g,0,h,i)},
aw5(d,e,f,g){return this.r_(d,e,null,f,0,A.bl,g)},
adc(d,e,f){return this.r_(d,e,null,f,0,A.bl,A.cN)},
aXS(d,e,f,g,h){return this.r_(d,e,f,g,0,h,A.cN)},
c59(d,e,f,g){return this.r_(d,e,null,f,0,g,A.cN)},
c58(d,e,f,g){return this.r_(d,e,f,g,0,A.bl,A.cN)},
ade(d,e,f,g,h,i){return this.r_(d,e,f,g,h,A.bl,i)},
aXQ(d,e,f,g,h,i,j,k,l){var w,v,u=null
for(w=i;w>j;){v=new B.ko(new B.eo(d,u,u,A.cO,u,u,u,u,u,u,new B.G(!0,u,u,e,u,u,w,f,l,u,u,u,k,u,u,u,u,u,u,u,u,u,u,u,u,u)),A.a5,A.ch,new B.jo(1),u,u,h,u,A.cd,u)
v.Bw(g)
if(!v.b.a.c.gaCZ())return w
w-=2}return j},
ada(d,e,f,g,h,i,j,k){return this.aXQ(d,e,f,g,h,i,j,k,A.bl)},
ayb(d,e,f){var w=null,v=d==null?B.b0(this.d.w):d,u=x.p,t=B.a([B.p(w,w,A.f,v,w,w,w,f,w,w,w,w,w,w)],u)
if(e)A.d.v(t,B.a([new B.a6(w,3,w,w),B.p(w,w,A.f,v,w,w,w,0.8,w,w,w,w,w,w)],u))
return B.v(t,A.m,w,A.e,A.j,0,A.p)},
aya(d){return this.ayb(null,!1,d)},
ag2(d,e){return this.ayb(null,d,e)},
cmA(d,e){return this.ayb(d,!1,e)},
gaZZ(){var w=A.a.i(this.c.a)
return w.length===0?"The NGMY Times":w},
gaTz(){var w=A.a.i(this.c.c)
if(w.length===0)w="Your headline appears here"
return this.d.CW?w.toUpperCase():w},
O0(d,e,f,g,h,i){var w=this,v=null,u=w.d.Q,t=w.ada(w.gaTz(),u,A.O,d,g,h,i,1.02)
return B.d(w.gaTz(),v,g,A.a2,v,v,v,w.aw6(u,t,f,1.02,A.O),e,v,v)},
aTE(d){return this.O0(d,A.L,null,2,78,30)},
aaF(d,e,f,g,h){return this.O0(d,e,null,f,g,h)},
bVf(d,e,f,g,h){return this.O0(d,A.L,e,f,g,h)},
bVe(d,e,f){return this.O0(d,A.L,null,e,f,30)},
R4(d,e,f,g,h){var w,v=this,u=null,t=v.c.d,s=A.a.i(t)
if(s.length===0)return A.bH
w=v.d.as
return new B.C(A.kh,B.d(s,u,g,A.a2,u,u,u,v.aXS(w,v.aXQ(t,w,A.cN,d,g,h,15,1.2,A.cD),f,1.2,A.cD),e,u,u),u)},
b4G(d){return this.R4(d,A.L,null,3,24)},
azF(d,e,f,g){return this.R4(d,e,null,f,g)},
cu_(d,e,f){return this.R4(d,A.L,e,3,f)},
b4H(d,e){return this.R4(d,e,null,3,24)},
ctY(d,e){return this.R4(d,A.L,null,3,e)},
ctZ(d,e,f){return this.R4(d,e,null,3,f)},
apJ(d,e){var w=this,v=null,u=A.a.i(w.c.e),t=new B.C(A.fT,B.d(u.toUpperCase(),v,v,v,v,v,v,w.P9("Roboto",12,d==null?B.b0(w.d.x):d,1.4,A.H),v,v,v),v)
if(!e)return t
u=w.d.w
return B.A(B.a([B.D(B.p(v,v,A.f,B.b0(u),v,v,v,1.2,v,v,v,v,v,v),1),t,B.D(B.p(v,v,A.f,B.b0(u),v,v,v,1.2,v,v,v,v,v,v),1)],x.p),A.m,v,A.e,A.j,0,v,v)},
MY(){return this.apJ(null,!0)},
apI(d){return this.apJ(null,d)},
bCE(d,e){var w=null,v=A.a.i(this.c.f)
if(v.length===0)return A.bH
return new B.C(A.ia,new B.a6(d,w,B.d(v,w,2,A.a2,w,w,w,this.c59(this.d.as,13.5,1.2,A.cD),e,w,w),w),w)},
ve(d,a0){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Roboto",j=new B.S(Date.now(),0,!1),i=m.gaZZ(),h=A.o.an(j.by(B.c0(B.by(j),1,1,0,0,0,0,0)).a,864e8),g="VOL. "+C.hPX(Math.max(1,B.by(j)-2021))+"  \xb7  NO. "+(h+1+3000),f=m.aXR(k,12,1.2,A.O),e=a0?0.62:1
h=m.d
w=h.y
v=h.z
if(w==="blackletter")u=m.ada(i,v,A.O,d,1,96*e,36,1)
else{t=w==="bar"?76:72
u=m.ada(i.toUpperCase(),v,A.O,d,1,t*e,30,1)}switch(w){case"bar":w=a0?6:10
t=B.b0(h.x)
h=h.ch?B.b0(h.f):A.c
s=x.p
return B.v(B.a([B.p(l,B.A(B.a([B.D(B.d(i.toUpperCase(),l,1,A.eC,l,l,l,m.ade(v,u*0.84,h,1,1,A.O),l,l,l),1)],s),A.m,l,A.e,A.j,0,l,l),A.f,t,l,l,l,l,l,l,new B.Q(18,w,18,w),l,l,l),A.P,B.A(B.a([B.d(C.bAO(j).toUpperCase(),l,l,l,l,l,l,f,l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("FREE \xb7 NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],s),A.m,l,A.hM,A.j,0,l,l),A.an,m.ag2(!0,3)],s),A.m,l,A.e,A.j,0,A.p)
case"split":h=h.x
w=x.p
return B.v(B.a([B.A(B.a([B.p(l,l,A.f,B.b0(h),l,l,l,u*0.8,l,l,l,l,l,14),A.eB,B.D(B.d(i,l,1,A.eC,l,l,l,m.aw5(v,u*0.9,1,A.O),l,l,l),1)],w),A.m,l,A.e,A.j,0,l,l),A.S,B.A(B.a([B.d(C.bAO(j),l,l,l,l,l,l,m.P9(k,13,B.b0(h),0.6,A.O),l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l)],w),A.m,l,A.hM,A.j,0,l,l),A.P,m.cmA(B.b0(h),3)],w),A.m,l,A.e,A.j,0,A.p)
case"logo":r=a0?52:64
w=m.gaZZ()
v=B.d("NGMY",l,l,l,l,l,l,m.aw7(k,r,1,-1.5,A.u),l,l,l)
t=r*0.2
s=r*0.04
q=B.b0(h.x)
p=B.m(r*0.16)
o=h.ch&&h.a==="midnight"||h.a==="gold"?A.w:A.c
h=h.w
n=x.p
return B.v(B.a([B.A(B.a([v,A.ab,B.eC(A.A,-0.03,B.p(l,B.d("NEWS",l,l,l,l,l,l,m.r_(k,r*0.72,o,1.05,-0.5,A.cD,A.u),l,l,l),A.f,l,l,new B.o(q,l,l,p,l,l,A.n),l,l,l,l,new B.Q(t,s,t,s),l,l,l),l),A.b4,new B.dm(1,A.ci,B.d(w.toUpperCase(),l,2,A.a2,l,l,l,m.ade(k,12.5,B.b0(h).j(0.85),1.3,1.2,A.O),A.dL,l,l),l)],n),A.m,l,A.e,A.j,0,l,l),A.P,B.p(l,l,A.f,B.b0(h).j(0.25),l,l,l,1.4,l,l,l,l,l,l)],n),A.m,l,A.e,A.j,0,A.p)
case"blackletter":h=x.p
w=B.A(B.a([B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("PRICE: FREE \xb7 NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],h),A.m,l,A.hM,A.j,0,l,l)
t=m.ag2(!0,1.4)
s=a0?4:10
v=B.d(i,l,1,l,l,l,l,m.aw5(v,u,1,A.O),A.L,l,l)
q=a0?4:8
return B.v(B.a([w,A.at,t,new B.a6(l,s,l,l),v,new B.a6(l,q,l,l),m.ag2(!0,1.4),A.at,B.d(C.bAO(j).toUpperCase(),l,l,l,l,l,l,f,A.L,l,l),A.at,m.aya(3)],h),A.m,l,A.e,A.j,0,A.p)
default:h=x.p
return B.v(B.a([B.d(i.toUpperCase(),l,1,l,l,l,l,m.aw7(v,u,1,3,A.O),A.L,l,l),A.P,m.ag2(!0,1.2),A.at,B.A(B.a([B.d(C.bAO(j).toUpperCase(),l,l,l,l,l,l,f,l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],h),A.m,l,A.hM,A.j,0,l,l),A.at,m.aya(3)],h),A.m,l,A.e,A.j,0,A.p)}},
abL(d){return this.ve(d,!1)},
adb(d,e,f,g){var w=null,v=f*0.9,u=f*0.45,t=e==null?B.b0(this.d.x):e,s=B.m(f)
return B.p(w,B.d(d,w,w,w,w,w,w,this.ade("Roboto",f,g==null?A.c:g,1,0.4,A.u),w,w,w),A.f,w,w,new B.o(t,w,w,s,w,w,A.n),w,w,w,w,new B.Q(v,u,v,u),w,w,w)},
c57(d,e){return this.adb(d,null,e,null)},
aVB(d){var w=null,v=new B.S(Date.now(),0,!1),u=A.o.F(B.dh(v),12)===0?12:A.o.F(B.dh(v),12),t=B.b0(this.d.w).j(0.75),s=this.aw6("Roboto",15,t,1,A.cu),r=B.W(E.aj6,t,w,w,w,18),q=A.a.ap(A.oN[B.bG(v)-1],0,3),p=A.a.aT(A.o.u(B.fY(v)),2,"0"),o=B.dh(v)>=12?"PM":"AM"
return B.A(B.a([r,A.ab,B.d(q+" "+B.bQ(v)+", "+B.by(v)+"  \xb7  "+u+":"+p+" "+o,w,w,w,w,w,w,s,w,w,w),B.p(w,w,A.f,t.j(0.4),w,w,w,20,w,A.fJ,w,w,w,1),B.W(d,t,w,w,w,19),A.ab,B.d("NGMY News",w,w,w,w,w,w,s,w,w,w)],x.p),A.m,w,A.e,A.j,0,w,w)},
auP(){return this.aVB(A.ml)},
b1X(d,e,f,g){var w=null,v=A.a.i(this.c.c)
if(v.length===0)v="Your headline appears here"
return B.d(v,w,e,A.a2,w,w,w,this.ade("Roboto",this.ada(v,"Roboto",A.H,d,e,f,g,1.08),w,1.08,-0.8,A.H),w,w,w)},
aye(d,e,f){return this.b1X(d,e,f,30)},
azI(d,e,f){var w=null,v=A.a.i(this.c.d)
if(v.length===0)return A.bH
return new B.C(A.v3,B.d(v,w,e,A.a2,w,w,w,this.c58("Roboto",f,B.b0(this.d.w).j(0.88),1.35),w,w,w),w)},
b4L(d){return this.azI(d,3,22)},
cua(d,e){return this.azI(d,e,22)},
ti(d,e){var w,v,u,t,s=null,r=this.e
if(r!=null){w=B.fL(r,A.A,s,s,A.co,A.bQ,!0,e,!1,s,d)
r=this.d
v=r.ay
if(v==="bw")w=new B.CZ(D.buG,w,s)
if(v==="sepia")w=new B.CZ(D.buF,w,s)}else{r=this.d
v=r.w
u=B.b0(v).j(0.1)
t=Math.min(d,e)
w=B.p(s,B.av(B.W(A.xI,B.b0(v).j(0.35),s,s,s,t*0.25),s,s,s),A.f,u,s,s,s,e,s,s,s,s,s,d)}v=B.a([w],x.p)
if(r.ax)v.push(B.c_(s,new B.o(s,s,s,s,s,new B.bR(A.A,0.95,A.x,s,0,B.a([A.K,A.VW.j(0.38)],x.O),s,s),A.n),A.bd))
return new B.a6(d,e,new B.an(A.W,s,A.b_,A.r,v,s),s)},
q5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.d
switch(j.e.a){case 1:j=j.w
w=B.I(B.b0(j),A.q,3)
j=B.I(B.b0(j),A.q,1)
return B.p(k,B.p(k,l.ti(d-24,e-24),A.f,k,k,new B.o(k,k,j,k,k,k,A.n),k,k,k,k,A.en,k,k,k),A.f,k,k,new B.o(k,k,w,k,k,k,A.n),k,e,k,k,A.lJ,k,k,d)
case 2:w=B.a([new B.ac(0,A.G,A.w.j(0.35),D.e_Q,14)],x.V)
v=l.ti(d-28,e-28-58)
u=A.a.i(l.c.f)
if(u.length===0)u="NGMY"
return B.eC(A.A,-0.035,B.p(k,B.v(B.a([v,B.D(B.av(B.d(u,k,2,A.a2,k,k,k,l.aXS(j.as,13.5,D.b7Z,1.1,A.cD),A.L,k,k),k,k,k),1)],x.p),A.m,k,A.e,A.j,0,A.p),A.f,k,k,new B.o(D.bb1,k,k,k,w,k,A.n),k,e,k,k,D.bpy,k,k,d),k)
case 3:w=B.m(30)
j=B.I(B.b0(j.x),A.q,5)
return B.p(k,B.bv(B.m(25),l.ti(d-10,e-10),A.aq),A.f,k,k,new B.o(k,k,j,w,k,k,A.n),k,e,k,k,k,k,k,d)
case 4:t=Math.min(d,e)
w=B.I(B.b0(j.x),A.q,6)
j=B.b0(j.f)
v=t-10
return new B.a6(d,e,B.av(B.p(k,B.hS(l.ti(v,v),A.aq),A.f,k,k,new B.o(j,k,w,k,k,k,A.a6),k,t,k,k,A.lJ,k,k,t),k,k,k),k)
case 5:j=B.a([new B.ac(0,A.G,A.w.j(0.3),D.e_G,10)],x.V)
return B.eC(A.A,0.025,new B.a6(d,e,new B.an(A.W,k,A.aa,A.f,B.a([B.bY(0,B.p(k,l.ti(d-18,e-18),A.f,k,k,new B.o(A.c,k,k,k,j,k,A.n),k,k,k,k,A.qP,k,k,k),0,0,0),B.ao(k,B.eC(A.A,-0.6,B.p(k,k,A.f,A.bK.j(0.85),k,k,k,26,k,k,k,k,k,90),k),k,k,-18,k,-10,k),B.ao(-10,B.eC(A.A,-0.6,B.p(k,k,A.f,A.bK.j(0.85),k,k,k,26,k,k,k,k,k,90),k),k,k,k,-18,k,k)],x.p),k),k),k)
case 6:j=B.b0(j.x)
return new B.a6(d,e,B.b3(B.nm(l.ti(d,e),A.aq,D.fKz),new C.baQ(j,k),k,k,A.au),k)
case 7:j=x.p
w=B.a([l.ti(d-16,e-44)],j)
for(v=[!0,!1],u=d/34,s=0;s<2;++s){r=v[s]
q=r?-18:k
p=r?k:-18
o=B.a([],j)
for(n=0;n<Math.max(6,A.k.bw(u));++n){m=new B.aV(2,2)
o.push(B.p(k,k,A.f,k,k,new B.o(A.bR,k,k,new B.bq(m,m,m,m),k,k,A.n),k,10,k,k,k,k,k,14))}w.push(new B.cK(0,q,0,p,k,k,new B.cl(A.aO,A.pT,A.j,A.m,k,A.p,k,0,o,k),k))}return B.p(k,new B.an(A.W,k,A.b_,A.r,w,k),A.f,A.e8,k,k,k,e,k,k,D.btX,k,k,d)
case 8:w=d/2
v=B.wD(A.he,new B.aV(w,w))
j=B.I(B.b0(j.x),A.q,5)
w-=5
return B.p(k,B.bv(B.wD(A.hA,new B.aV(w,w)),l.ti(d-10,e-10),A.aq),A.f,k,k,new B.o(k,k,j,v,k,k,A.n),k,e,k,k,k,k,k,d)
case 9:j=B.a([new B.ac(0,A.G,A.w.j(0.35),A.fM,22)],x.V)
return B.p(k,l.ti(d-20,e-20),A.f,k,k,new B.o(A.c,k,k,k,j,k,A.n),k,e,k,k,A.bS,k,k,d)
case 10:return new B.a6(d,e,B.nm(l.ti(d,e),A.aq,D.fQB),k)
case 0:j=B.I(B.b0(j.w),A.q,2.4)
return B.p(k,l.ti(d-14,e-14),A.f,k,k,new B.o(k,k,j,k,k,k,A.n),k,e,k,k,A.en,k,k,d)}},
aN9(d,e){return this.d.e===D.QH?A.bH:this.bCE(d,e)},
VF(d){return this.aN9(d,A.L)},
gaz_(){var w=this.c
return A.a.i(w.y).length!==0||A.a.i(w.w).length!==0},
ayZ(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.c,l=A.a.i(m.x)
if(l.length===0)l=A.a.i(m.w).length!==0?"":"NGMY NOTES"
w=A.a.i(m.y)
v=o.d
u=B.I(B.b0(v.w),A.q,1.6)
t=v.x
s=B.b0(t)
s=s.j(v.ch?0.14:0.07)
r=x.p
q=B.a([],r)
m=A.a.i(m.w)
if(m.length!==0&&w.length===0)q.push(B.D(B.av(B.d("\u201c"+m+"\u201d",n,7,A.a2,n,n,n,o.aXT(v.Q,19,1.15,A.cD,A.O),A.L,n,n),n,n,n),1))
else{r=B.a([],r)
p=l.length!==0
if(p)r.push(B.d(l.toUpperCase(),n,1,A.a2,n,n,n,o.P9("Roboto",12.5,B.b0(t),1.2,A.u),n,n,n))
if(p)r.push(A.at)
m=w.length===0?m:w
r.push(B.D(B.d(m,n,9,A.a2,n,n,n,o.adc(v.as,13,1.25),n,n,n),1))
A.d.v(q,r)}return B.p(n,B.jt(B.v(q,A.F,n,A.e,A.j,0,A.p),A.r,n),A.f,n,n,new B.o(s,n,u,n,n,n,A.n),n,e,n,n,A.bk,n,n,d)},
gcdc(){var w=this.c.r
return w.length===0?B.a([y.g],x.s):w},
a8o(d,e,f,g){return B.cn(new C.caJ(this,e,d,f,g))},
a8n(d){return this.a8o(d,22,!0,18)},
VQ(d,e){return this.a8o(d,22,!0,e)},
aOb(d,e,f){return this.a8o(d,22,e,f)},
bED(d,e,f){return this.a8o(d,e,!0,f)},
b7B(d,e,f,g){return B.cn(new C.caK(this,e,d,g,!0,f))},
cc1(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i="Roboto",h=k.d
switch(h.d.a){case 0:return B.v(B.a([k.abL(824),A.aA,k.aTE(824),k.b4G(824),A.P,k.MY(),A.ac,B.av(k.q5(824,360),j,j,j),k.VF(824),A.ac,B.D(k.a8n(3),1)],x.p),A.aj,j,A.e,A.j,0,A.p)
case 1:w=x.p
return B.v(B.a([k.abL(824),A.aP,new B.a6(j,350,B.A(B.a([new B.a6(440,j,B.v(B.a([k.aaF(440,A.bg,3,62,26),k.azF(440,A.bg,2,20),A.b4,k.apJ(B.b0(h.x),!1)],w),A.F,j,A.e,A.j,0,A.p),j),A.Iq,B.v(B.a([k.q5(362,310),k.VF(362)],w),A.m,j,A.e,A.j,0,A.p)],w),A.F,j,A.e,A.j,0,j,j),j),A.S,k.aya(2),A.ac,B.D(k.a8n(3),1)],w),A.aj,j,A.e,A.j,0,A.p)
case 2:w=k.ve(824,!0)
v=B.b0(h.x)
u=h.ch
t=x.p
s=B.a([k.bVf(788,u?B.b0(h.f):A.c,3,92,34)],t)
r=k.c
if(A.a.i(r.d).length!==0)s.push(k.cu_(788,u?B.b0(h.f):A.c,22))
v=B.p(j,B.v(s,A.m,j,A.e,A.j,0,A.p),A.f,v,j,j,j,j,j,j,A.AS,j,j,j)
u=B.a([B.av(k.q5(824,390),j,j,j)],t)
s=A.a.i(r.f)
if(s.length!==0&&h.e!==D.QH){h=A.w.j(0.65)
u.push(B.ao(0,B.p(j,B.d(s,j,2,A.a2,j,j,j,k.aw6(i,14,A.c,1.15,A.O),j,j,j),A.f,h,j,j,j,j,j,j,A.lH,j,j,j),j,j,0,0,j,j))}return B.v(B.a([w,A.ac,v,A.ac,new B.an(A.W,j,A.aa,A.r,u,j),A.P,k.MY(),A.S,B.D(k.VQ(2,21),1)],t),A.aj,j,A.e,A.j,0,A.p)
case 3:h=k.ve(824,!0)
w=k.q5(824,560)
v=B.a([A.K,A.w.j(0.85)],x.O)
u=x.p
return B.v(B.a([h,A.ac,new B.an(A.b6,j,A.aa,A.r,B.a([w,B.ao(0,B.p(j,k.O0(780,A.bg,A.c,3,74,30),A.f,j,j,new B.o(j,j,j,j,j,new B.a7(A.b0,A.b6,A.x,v,j,j),A.n),j,j,j,j,D.bse,j,j,j),j,j,0,0,j,j)],u),j),k.b4H(824,A.bg),A.P,k.MY(),A.S,B.D(k.a8n(3),1)],u),A.aj,j,A.e,A.j,0,A.p)
case 4:h=x.p
return B.v(B.a([k.abL(824),A.aA,k.aTE(824),k.b4G(824),A.P,k.MY(),A.ac,B.D(k.b7B(3,300,B.v(B.a([k.q5(300,300),k.VF(300)],h),A.m,j,A.e,A.j,0,A.p),360),1)],h),A.aj,j,A.e,A.j,0,A.p)
case 5:w=k.ve(824,!0)
v=x.p
u=B.v(B.a([k.aaF(440,A.bg,3,62,26),k.azF(440,A.bg,2,20),A.b4,k.apI(!1)],v),A.F,j,A.e,A.j,0,A.p)
return B.v(B.a([w,A.bw,new B.a6(j,400,B.A(B.a([new B.a6(440,j,u,j),A.aMN,new B.C(A.ia,k.q5(364,h.e===D.QH?400:330),j)],v),A.F,j,A.e,A.j,0,j,j),j),A.aA,B.D(k.VQ(2,21),1)],v),A.aj,j,A.e,A.j,0,A.p)
case 6:return B.v(B.a([k.abL(824),A.ac,k.bVe(824,2,70),k.ctY(824,21),A.P,k.MY(),A.ac,B.D(k.b7B(3,340,B.av(k.q5(340,340),j,j,j),350),1)],x.p),A.aj,j,A.e,A.j,0,A.p)
case 7:w=k.ve(824,!0)
v=B.b0(h.x)
u=Date.now()
u=C.bAO(new B.S(u,0,!1))
t=x.p
v=B.a([B.p(j,B.d(u.toUpperCase(),j,j,j,j,j,j,k.P9(i,13,h.ch?B.b0(h.f):A.c,1.2,A.u),A.L,j,j),A.f,v,j,j,j,j,j,j,A.bk,j,j,j),A.aA],t)
u=A.a.i(k.c.w)
if(u.length!==0)v.push(B.d("\u201c"+u+"\u201d",j,j,j,j,j,j,k.aXT(h.Q,24,1.15,A.cD,A.O),j,j,j))
v.push(A.b4)
if(k.gaz_())v.push(k.ayZ(230,250))
return B.v(B.a([w,A.aA,B.D(B.A(B.a([new B.a6(230,j,B.v(v,A.aj,j,A.e,A.j,0,A.p),j),B.p(j,j,A.f,B.b0(h.w),j,j,j,j,j,A.afZ,j,j,j,1.2),new B.a6(570,j,B.v(B.a([k.aaF(570,A.bg,3,62,28),k.ctZ(570,A.bg,20),A.P,k.apI(!1),A.P,B.av(k.q5(570,330),j,j,j),k.VF(570),A.S,B.D(k.aOb(2,!1,17),1)],t),A.aj,j,A.e,A.j,0,A.p),j)],t),A.F,j,A.e,A.j,0,j,j),1)],t),A.aj,j,A.e,A.j,0,A.p)
case 8:w=k.ve(824,!0)
v=h.ch
u=v?B.b0(h.x):B.b0(h.w)
t=B.d("\u2605  SPECIAL REPORT  \u2605",j,j,j,j,j,j,k.P9(i,13,v?A.w:B.b0(h.x),3,A.u),j,j,j)
s=x.p
return B.v(B.a([w,A.ac,B.p(j,B.v(B.a([t,A.an,k.O0(788,A.bg,v?A.w:B.b0(h.f),2,72,30)],s),A.F,j,A.e,A.j,0,A.p),A.f,u,j,j,j,j,j,j,D.bqA,j,j,j),k.b4H(824,A.bg),A.S,B.av(k.q5(824,310),j,j,j),k.VF(824),A.P,k.MY(),A.S,B.D(k.a8n(3),1)],s),A.aj,j,A.e,A.j,0,A.p)
case 10:w=x.p
return B.v(B.a([k.ve(824,!0),A.aP,new B.an(A.W,j,A.aa,A.r,B.a([k.q5(824,430),B.ao(18,k.c57(k.c.b,17),j,j,18,j,j,j)],w),j),A.bw,k.aye(824,3,66),k.b4L(824),A.ac,B.p(j,j,A.f,B.b0(h.w).j(0.25),j,j,j,1,j,j,j,j,j,j),A.ac,k.auP(),A.aA,B.D(k.VQ(2,18),1)],w),A.aj,j,A.e,A.j,0,A.p)
case 11:h=h.x
w=x.p
return B.v(B.a([k.ve(824,!0),A.bw,new B.a6(j,500,B.A(B.a([new B.a6(410,j,B.v(B.a([k.adb(k.c.b,B.b0(h).j(0.14),15,B.b0(h)),A.aP,k.b1X(410,4,58,28),k.azI(410,6,20),A.b4],w),A.F,j,A.e,A.j,0,A.p),j),U.aMO,k.q5(390,500)],w),A.F,j,A.e,A.j,0,j,j),j),A.aA,k.auP(),A.aP,B.D(k.VQ(2,18),1)],w),A.aj,j,A.e,A.j,0,A.p)
case 12:w=k.ve(824,!0)
v=k.q5(824,420)
u=B.hsL(-0.25)
t=B.b0(h.x)
s=B.a([new B.ac(0,A.G,A.w.j(0.4),A.J,10)],x.V)
r=x.p
return B.v(B.a([w,A.aP,new B.an(A.W,j,A.aa,A.r,B.a([v,B.ao(22,B.fs(j,B.p(j,B.d("BREAKING NEWS",j,j,j,j,j,j,k.c5a(i,30,A.c,1,A.cD,A.u),j,j,j),A.f,j,j,new B.o(t,j,j,j,s,j,A.n),j,j,j,j,D.bsu,j,j,j),j,u,!0),j,j,0,j,j,j)],r),j),A.bw,k.aye(824,3,62),k.b4L(824),A.ac,B.p(j,j,A.f,B.b0(h.w).j(0.25),j,j,j,1,j,j,j,j,j,j),A.ac,k.aVB(A.le),A.aA,B.D(k.VQ(2,18),1)],r),A.aj,j,A.e,A.j,0,A.p)
case 13:w=k.c
q=A.a.i(w.x)
if(!(q.length!==0)){v=A.a.i(w.w)
q=v.length!==0?v:"More from NGMY News"}v=k.ve(824,!0)
u=h.w
t=x.p
w=B.a([k.q5(824,380),B.ao(j,k.adb(w.b,B.b0(u).j(0.85),15,B.b0(h.f)),j,j,16,j,16,j)],t)
s=k.aye(824,2,60)
r=k.cua(824,2)
p=k.auP()
o=B.D(k.aOb(2,!1,18),1)
n=B.I(B.b0(u).j(0.18),A.q,1)
m=B.m(18)
h=h.x
l=B.b0(h).j(0.05)
return B.v(B.a([v,A.aP,new B.an(A.W,j,A.aa,A.r,w,j),A.aP,s,r,A.S,p,A.aA,o,A.ac,B.p(j,B.A(B.a([B.bv(B.m(14),k.ti(150,104),A.aq),A.o8,B.D(B.v(B.a([k.adb("RELATED",B.b0(h).j(0.14),12,B.b0(h)),A.P,B.d(q,j,2,A.a2,j,j,j,k.aw5(i,19,1.15,A.H),j,j,j)],t),A.F,j,A.e,A.Q,0,A.p),1),B.W(A.ex,B.b0(u).j(0.6),j,j,j,30)],t),A.m,j,A.e,A.j,0,j,j),A.f,j,j,new B.o(l,j,n,m,j,j,A.n),j,j,j,j,A.bk,j,j,j)],t),A.aj,j,A.e,A.j,0,A.p)
case 9:return B.v(B.a([k.ve(824,!0),A.bw,k.aaF(824,A.bg,3,62,30),k.azF(824,A.bg,2,22),A.S,k.apI(!1),A.S,B.av(k.q5(824,330),j,j,j),k.aN9(824,A.bg),A.aP,B.D(k.bED(2,40,21),1)],x.p),A.aj,j,A.e,A.j,0,A.p)}},
B(d){var w,v,u,t=this,s=null,r="Roboto",q=t.d,p=q.f,o=x.p,n=B.a([B.bY(0,B.c_(s,new B.o(s,s,s,s,s,new B.a7(A.ax,A.aC,A.x,B.a([B.b0(p),B.b0(q.r)],x.O),s,s),A.n),A.bd),0,0,0)],o)
if(q.ax)n.push(B.bY(0,B.b3(s,s,s,new C.b7n(B.b0(q.w),s),A.au),0,0,0))
w=q.w
n.push(new B.C(D.bt_,B.v(B.a([B.D(t.cc1(),1),A.P,B.p(s,s,A.f,B.b0(w),s,s,s,1.4,s,s,s,s,s,s),A.fZ,B.A(B.a([B.d("PRINTED WITH NGMY NEWS",s,s,s,s,s,s,t.aXR(r,11,1.4,A.H),s,s,s),B.d("CREATED BY NGMY.ORG",s,s,s,s,s,s,t.P9(r,11,B.b0(q.x),1.4,A.u),s,s,s)],o),A.m,s,A.hM,A.j,0,s,s)],o),A.aj,s,A.e,A.j,0,A.p),s))
v=B.b0(w)
n.push(B.bY(0,B.e0(B.b3(s,s,s,new C.bpQ(v.j(q.ch?0.07:0.06),s),A.au),!0,s),0,0,0))
p=B.b0(p).j(0.75)
v=B.I(B.b0(w).j(0.5),A.q,1.2)
u=B.m(40)
o=B.a([],o)
q=t.f
if(q!=null)o.push(B.hS(B.fL(q,A.A,s,s,A.co,A.bQ,!1,30,!1,s,30),A.aq))
else o.push(B.W(A.ml,B.b0(w),s,s,s,28))
o.push(A.ab)
o.push(B.d("NGMY.ORG",s,s,s,s,s,s,t.aw7(r,15,1,1.6,A.u),s,s,s))
n.push(B.ao(52,B.e0(B.db(B.p(s,B.A(o,A.m,s,A.e,A.Q,0,s,s),A.f,s,s,new B.o(p,s,v,u,s,s,A.n),s,s,s,s,D.bu4,s,s,s),0.6),!0,s),s,s,s,40,s,s))
return new B.a6(900,1260,B.jt(new B.an(A.W,s,A.aa,A.r,n,s),A.r,s),s)}}
C.baR.prototype={
iX(d){return C.h7Y(d)},
jD(d){return!1}}
C.baQ.prototype={
a5(d,e){var w,v=C.h7Y(e)
$.X()
w=B.M()
w.r=this.b.gp(0)
w.b=A.ae
w.c=6
return d.aO(v,w)},
aq(d){return!d.b.A(0,this.b)}}
C.bsj.prototype={
iX(d){var w,v,u,t,s,r,q,p,o=new B.eP()
o.dG(3)
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
jD(d){return!1}}
C.b7n.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=new B.eP()
k.dG(7)
$.X()
w=B.M()
for(v=this.b,u=e.a,t=e.b,s=d.a,r=0;r<700;++r){w.r=v.j(0.03+k.aj()*0.07).gp(0)
q=k.aj()
p=k.aj()
o=k.aj()
n=w.H()
s.drawCircle(q*u,p*t,0.4+o*1.4,n)
n.delete()}for(v=x.O,r=0;r<5;++r){q=k.aj()*u
p=k.aj()*t
m=50+k.aj()*90
w.sau(new B.bR(A.A,0.5,A.x,l,0,B.a([A.Kb.j(0.13),A.K],v),l,l).aw(0,B.bU(new B.u(q,p),m)))
n=w.H()
s.drawCircle(q,p,m,n)
n.delete()}w.sau(l)},
aq(d){return!1}}
C.bpQ.prototype={
a5(d,e){var w,v,u=null,t=e.a,s=B.ii(u,u,u,u,B.dq(u,u,u,u,u,u,u,u,u,B.l(u,u,this.b,u,u,u,u,u,"Roboto",u,u,t*0.34,u,u,A.u,u,u,!0,u,10,u,u,u,u,u,u),"NGMY"),A.a5,A.ch,u,A.eq,A.cd)
s.eP()
w=d.a
J.bz(w.save())
w.translate(t/2,e.b*0.52)
d.ja(0,-0.5)
t=s.b
v=t.c
t=t.a.c
s.a5(d,new B.u(-v/2,-t.gbc(t)/2))
w.restore()},
aq(d){return!d.b.A(0,this.b)}}
C.V4.prototype={
T(){return new C.aCT()}}
C.aCT.prototype={
a_(){var w=this
w.a1()
B.heP(w.a.c,null).bz(new C.efa(),x.g7).bz(new C.efb(w),x.a)
w.a.toString},
gaLZ(){var w=D.atJ[this.e].b
if(w==null){w=this.d
w=w==null?1:w.c/w.d}return w},
gaw8(){var w,v,u,t,s,r=this,q=r.d,p=q.c,o=q.d
q=r.gaLZ()
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
Z7(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f
var $async$Z7=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:g=r.d
if(g==null||r.y){w=1
break}r.m(new C.eeY(r))
t=4
q=r.gaw8()
j=q
p=Math.min(1600,j.c-j.a)
j=q
i=q
o=p*(j.d-j.b)/(i.c-i.a)
$.X()
n=new B.rT()
m=B.GC(n,null)
i=B.M()
i.Q=A.fU
m.Be(g,q,new B.aa(0,0,0+p,0+o),i)
w=7
return B.b(n.qh().z0(J.fYy(p),J.fYy(o)),$async$Z7)
case 7:l=e
w=8
return B.b(l.hp(A.fW),$async$Z7)
case 8:k=e
j=r.c
if(j!=null){j=B.a5(j,!1)
i=k
i.toString
j.N(J.fa(J.wy(i)))}t=2
w=6
break
case 4:t=3
f=s.pop()
if(r.c!=null){r.m(new C.eeZ(r))
r.c.I(x.q).f.R(D.eOn)}w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Z7,v)},
B(d){var w,v,u,t=this,s=null,r=t.d,q=B.aH(s,s,s,s,A.kP,s,s,s,new C.ef4(d),s,s,s,s,s,s),p=x.p
q=B.eF(B.a([B.bK(!1,D.fpH,s,s,!0,s,s,t.y||r==null?s:t.gc5b(),s,s)],p),s,s,!0,!0,A.Av,s,1,!0,s,0,!1,s,!1,s,s,q,s,!0,s,s,s,s,s,D.fty,s,s,s,1,s,!0)
if(r==null)p=A.lz
else{w=B.D(new B.C(A.bW,B.av(new B.fG(t.gaLZ(),B.cn(new C.ef5(t,r)),s),s,s,s),s),1)
v=B.a([],p)
for(u=0;u<6;++u)v.push(new B.C(A.jc,B.jI(s,s,s,new B.x(D.atJ[u].a,s,E.aOA,s,s,s,s,s,s,s,s,s),s,new C.ef6(t,u),t.e===u,s,s,s,s),s))
p=B.v(B.a([w,B.p(s,B.bm(!0,B.v(B.a([new B.a6(s,40,B.cB(v,s,s,s,s,A.aO,!1),s),B.A(B.a([D.bKG,B.D(B.kT(s,s,s,6,1,new C.ef7(t),t.f),1),D.bKi],p),A.m,s,A.e,A.j,0,s,s),D.fn7,A.an,B.bK(!1,D.fmS,s,s,!0,s,s,new C.ef8(t,d),s,s)],p),A.m,s,A.e,A.Q,0,A.p),!0,!1,A.af,!0,!1),A.f,D.W9,s,s,s,s,s,s,D.bpW,s,s,s)],p),A.m,s,A.e,A.j,0,A.p)}return B.c8(q,A.Av,p,s,!1,!1,s,s)}}
C.ban.prototype={
a5(d,e){var w
$.X()
w=B.M()
w.Q=A.co
return d.Be(this.b,this.c,new B.aa(0,0,0+e.a,0+e.b),w)},
aq(d){return!d.c.A(0,this.c)||d.b!==this.b}}
C.a_a.prototype={
T(){var w=$.aw(),v=x.A
return new C.aEf(new B.ar(A.as,w),new B.ar(new B.bb("NGMY",A.b3,A.aN),w),new B.cq(null,v),new B.cq(null,v),A.d.gK(D.a2m),"quote"+1000*Date.now(),B.a([],x.t),B.aX(x.S),A.L)}}
C.oo.prototype={}
C.aEf.prototype={
gaTM(){var w,v,u=this
if(u.p1)w=new B.wT(1,u.p2,0.9,u.p3).iH().l()&16777215
else{v=u.k4
w=v==null?null:v&16777215}if(w==null)return 0
return(A.o.D(A.k.V(u.ok*255),0,255)<<24|w)>>>0},
a_(){var w=this
w.a1()
w.a.toString
w.p4=null
$.aT.x1$.push(new C.eOp(w))},
q(){var w=this.d,v=$.aw()
w.S$=v
w.P$=0
w=this.e
w.S$=v
w.P$=0
this.a2()},
XM(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$XM=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b($.tT().ki(0,"assets/images/ngmy_logo.png"),$async$XM)
case 7:q=e
p=J.fa(J.wy(q))
o=r.c
w=o!=null?8:9
break
case 8:w=10
return B.b(F.bBy(new B.pA(p,1),o),$async$XM)
case 10:case 9:if(r.c==null){w=1
break}r.m(new C.eNh(r,p))
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
return B.i($async$XM,v)},
Pc(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Pc=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hW().l1(92,1800,A.eG),$async$Pc)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.ff(),$async$Pc)
case 8:p=e
n=r.c
if(n==null){w=1
break}w=9
return B.b(F.bBy(new B.pA(p,1),n),$async$Pc)
case 9:if(r.c==null){w=1
break}r.m(new C.eNF(r,p))
t=2
w=6
break
case 4:t=3
l=s.pop()
o=B.a9(l)
n=r.c
if(n!=null)n.I(x.q).f.R(B.b2(null,null,null,null,null,A.r,null,B.d("Could not open that picture. "+B.t(o),null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Pc,v)},
b1k(){var w=this
w.RG=w.R8=0
w.ry=w.rx=1
w.xr=w.x2=w.x1=w.to=0
w.y1=!1
w.aG=w.aN=w.aE=w.az=w.Z=w.b5=w.bi=w.y2=0
w.b3=null
w.b1=0.25
w.bb=null
w.bK=0.5
w.aR=1
w.c8=w.bT=w.bj=0
w.cW=w.cT=!1},
aVl(d,e,f,g,h,i,j,a0,a1){var w,v,u,t,s,r,q,p,o,n=1-g,m=n*0.2126,l=n*0.7152,k=n*0.0722
n=x.x
w=C.bye(B.a([m+g,l,k,0,0,m,l+g,k,0,0,m,l,k+g,0,0,0,0,0,1,0],n),D.d7O)
if(Math.abs(j)>0.5){v=j*3.141592653589793/180
u=Math.cos(v)
t=Math.sin(v)
s=0.715-u*0.715
r=t*0.715
q=0.072-u*0.072
p=0.213-u*0.213
w=C.bye(B.a([0.213+u*0.787-t*0.213,s-r,q+t*0.928,0,0,p+t*0.143,0.715+u*0.285+t*0.14,q-t*0.283,0,0,p-t*0.787,s+r,0.072+u*0.928+t*0.072,0,0,0,0,0,1,0],n),w)}o=128*(1-f)+d*255
n=h*25
w=C.bye(C.fTD(Math.pow(2,e)*f,o+n,o-i*25,o-n+i*12),w)
if(a0>0){n=a0*255*0.25
w=C.bye(C.fTD(1-a0*0.5,n,n,n),w)}return a1?C.bye(C.fTD(-1,255,255,255),w):w},
azO(){var w,v,u=B.af("\\S+",!0,!1,!1,!1).kR(0,this.d.a.a),t=B.B(u,B.a4(u).k("J.E"))
for(u=this.db;w=u.length,v=t.length,w<v;)u.push(0)
if(w>v)A.d.yU(u,v,w)
this.dx.pW(new C.eNP(t),!0)
return t},
b3P(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.w
e.azO()
w=C.i_2(e.d.a.a,e.db)
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
return C.hWx(d,k,v,a0,j,e.gaTM(),e.ax,i,u,q,p,r,t,s,w,g,h,f,n,l,o,m)},
crU(){return this.b3P(null)},
CL(){var w=0,v=B.j(x.dd),u,t=this,s,r,q
var $async$CL=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.p4==null){u=null
w=1
break}w=3
return B.b($.aT.gms(),$async$CL)
case 3:w=4
return B.b(B.bN(A.eN,null,x.H),$async$CL)
case 4:w=5
return B.b($.aT.gms(),$async$CL)
case 5:s=$.aT.ak$.x.h(0,t.r)
r=s==null?null:s.gb8()
if(!(r instanceof B.pL)){u=null
w=1
break}w=7
return B.b(r.lR(1080/r.gY(0).a),$async$CL)
case 7:w=6
return B.b(e.hp(A.fW),$async$CL)
case 6:q=e
u=q==null?null:J.fa(A.dH.gaP(q))
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$CL,v)},
a9f(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$a9f=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.Q){w=1
break}q.m(new C.eN0(q))
t=4
w=7
return B.b(q.CL(),$async$a9f)
case 7:p=e
o=p==null?null:"data:image/png;base64,"+A.cS.gcv().aJ(p)
n=C.Bc(null,null,null,null,D.o2,6,!1,null,null,null,null,null,C.cC(),null,!1,null,"NGMY Quote",null,null,B.a([q.b3P(o)],x.g),"office_blue",null,!1,null)
l=q.c
if(l!=null)B.a5(l,!1).N(n)
r.push(6)
w=5
break
case 4:t=3
j=s.pop()
m=B.a9(j)
l=q.c
if(l!=null)l.I(x.q).f.R(B.b2(null,null,null,null,null,A.r,null,B.d(B.t(m),null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.eN1(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a9f,v)},
A8(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$A8=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.Q){w=1
break}q.m(new C.eMZ(q))
t=4
w=7
return B.b($.aT.gms(),$async$A8)
case 7:w=8
return B.b(B.bN(A.ow,null,x.H),$async$A8)
case 8:w=9
return B.b($.aT.gms(),$async$A8)
case 9:k=$.aT.ak$.x.h(0,q.f)
p=k==null?null:k.gb8()
if(!(p instanceof B.pL))throw B.U("The picture is not ready yet.")
w=10
return B.b(p.lR(1080/p.gY(0).a),$async$A8)
case 10:o=e
w=11
return B.b(o.hp(A.fW),$async$A8)
case 11:n=e
if(n==null)throw B.U("Could not make the picture.")
w=12
return B.b(A7.afp(J.fa(A.dH.gaP(n)),"ngmy_quote.png","image/png"),$async$A8)
case 12:m=e
k=q.c
if(k==null){r=[1]
w=5
break}k=k.I(x.q).f
k.R(B.b2(null,null,null,null,null,A.r,null,B.d(m?"Your quote picture is ready. Check your downloads.":"Downloading is not available here. Use Edit in Slides, then PDF.",null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
l=B.a9(i)
k=q.c
if(k!=null)k.I(x.q).f.R(B.b2(null,null,null,null,null,A.r,null,B.d(B.t(l),null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.eN_(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$A8,v)},
cf6(){var w=this.p4
w.toString
return B.cn(new C.eNy(this,w))},
aY_(d,e){var w=null
return B.br(w,w,w,w,w,D.eYs,w,w,!0,new B.b4(4,B.m(16),P.uI),w,w,w,w,w,D.t7,!0,w,w,w,w,new B.b4(4,B.m(16),D.aWV),w,w,w,w,w,w,w,w,A1.D3,e,w,w,w,w,w,w,w,D.f2G,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
xv(d,e){var w=null,v=x.p,u=B.a([],v)
A.d.v(u,B.a([B.W(e,A.b5,w,w,w,15),A.bp],v))
u.push(B.d(d,w,w,w,w,w,w,D.aPl,w,w,w))
return new B.C(D.bnT,B.A(u,A.m,w,A.e,A.j,0,w,w),w)},
aXZ(d,e){var w=null,v=B.m(18),u=B.I(A.bF,A.q,1)
return B.p(w,B.aF(!1,A.a1,!0,w,d,A.f,w,0,w,w,w,w,w,A.jA),A.f,w,w,new B.o(D.t7,w,u,v,w,w,A.n),w,w,w,w,e,w,w,1/0)},
vk(d){return this.aXZ(d,A.bC)},
nW(d,e,f,g){var w,v,u,t,s,r=null,q=g!=null,p=f?G.tU:r
if(f)w=r
else w=A.c.j(q?0.07:0.03)
v=B.m(30)
u=B.I(f?A.K:A.bF,A.q,1)
t=x.p
s=B.a([],t)
if(e!=null)A.d.v(s,B.a([B.W(e,q?A.c:A.j9,r,r,r,16),A.bp],t))
s.push(B.d(d,r,r,r,r,r,r,B.l(r,r,q?A.c:A.j9,r,r,r,r,r,r,r,r,12.5,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r))
return B.aE(r,B.dg(r,B.A(s,A.m,r,A.e,A.Q,0,r,r),r,r,A.bc,new B.o(w,r,u,v,r,p,A.n),A.hX,r,r,r,A.EZ,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,g,r,r,r,r,r,r,!1,A.a8)},
af2(d,e,f){return this.nW(d,null,e,f)},
awc(d,e,f,g,h,i,j){var w=null,v=B.m(12),u=g?A.b5.j(0.28):A.c.j(0.05),t=g?A.ez:A.bF,s=x.p
v=B.a([B.dg(w,d,w,w,A.bc,new B.o(u,w,B.I(t,A.q,g?2:1),v,w,w,A.n),A.hX,w,e,w,new B.Q(i,i,i,i),w,w,j)],s)
u=g?A.c:A.az
A.d.v(v,B.a([A.at,B.d(f,w,1,A.a2,w,w,w,B.l(w,w,u,w,w,w,w,w,w,w,w,j<54?8.5:10.5,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],s))
return B.aE(w,new B.a6(j,w,B.v(v,A.m,w,A.e,A.Q,0,A.p),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,h,w,w,w,w,w,w,!1,A.a8)},
aY2(d,e,f,g,h,i){return this.awc(d,e,f,g,h,5,i)},
ka(d,e,f,g,h,i,j){var w,v,u=null,t=x.p,s=B.a([B.D(B.d(d,u,u,u,u,u,u,D.eVw,u,u,u),1)],t)
if(i!=null&&Math.abs(e-i)>0.001)s.push(B.aE(u,D.e3m,A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.eNL(this,h,i),u,u,u,u,u,u,!1,A.a8))
w=A.c.j(0.08)
v=B.m(20)
s.push(B.p(u,B.d(j,u,u,u,u,u,u,A.aOq,u,u,u),A.f,u,u,new B.o(w,u,u,v,u,u,A.n),u,u,u,u,A.Yj,u,u,u))
s=B.A(s,A.m,u,A.e,A.j,0,u,u)
w=this.c
w.toString
w=B.au1(w).cFR(A.b5,A.bF,A.b5.j(0.2),A.c,D.eFf,4)
return new B.C(A.xh,B.v(B.a([s,B.a9b(B.kT(u,u,u,g,f,new C.eNM(this,h),A.k.D(e,f,g)),w)],t),A.m,u,A.e,A.j,0,A.p),u)},
ah2(d,e,f,g,h,i){return this.ka(d,e,f,g,h,null,i)},
ahs(d,e,f){var w,v,u,t,s,r,q,p,o=null,n=B.a([],x.p)
for(w=f.length,v=0;v<f.length;f.length===w||(0,B.L)(f),++v){u=f[v]
t=u==null
s=t?A.dp:B.b0(u)
r=d==u
q=r?A.c:A.b2
p=new B.aA(q,r?3:1,A.q,-1)
t=t?D.bDP:o
n.push(B.aE(o,B.p(o,t,A.f,o,o,new B.o(s,o,new B.bP(p,p,p,p),o,o,o,A.a6),o,34,o,o,o,o,o,34),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new C.eNO(this,e,u),o,o,o,o,o,o,!1,A.a8))}return B.bZ(A.bB,n,A.bs,10,10)},
bIK(){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.x==="All")w=D.a2m
else{v=x.a8
w=B.B(new B.a2(D.a2m,new C.eMR(o),v),v.k("J.E"))}v=B.aL(n,A.T,!1,n,!0,A.r,n,B.aM(),o.d,n,n,n,n,n,2,o.aY_("Your quote",o.w.y),A.y,!0,n,!0,n,!1,n,A.ai,n,n,n,n,n,n,n,280,n,4,2,n,!1,"\u2022",n,new C.eMS(o),n,n,n,!1,n,n,!1,n,!0,n,A.a9,n,n,n,n,n,n,n,n,n,n,n,A.a77,!0,A.a5,n,A.am,n,n,n,n)
u=B.aL(n,A.T,!1,n,!0,A.r,n,B.aM(),o.e,n,n,n,n,n,2,o.aY_("Who said it","NGMY"),A.y,!0,n,!0,n,!1,n,A.ai,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,new C.eMT(o),n,n,n,!1,n,n,!1,n,!0,n,A.a9,n,n,n,n,n,n,n,n,n,n,n,A.dl,!0,A.a5,n,A.am,n,n,n,n)
t=o.xv("DESIGNS",A.tI)
s=x.p
r=B.a([],s)
for(q=0;q<6;++q){p=D.cL8[q]
r.push(new B.C(A.jc,o.af2(p,o.x===p,new C.eMU(o,p)),n))}return B.v(B.a([v,A.S,u,t,B.cd(B.A(r,A.m,n,A.e,A.j,0,n,n),A.r,n,A.y,n,n,n,n,A.aO),A.ac,new B.a6(n,118,B.hG(n,new C.eMV(o,w),w.length,n,n,A.aO,new C.eMW(),!1),n),A.P,o.aXZ(B.v(B.a([B.iD(A.b5,n,n,A.af,!0,new C.eMX(o),n,D.feq,n,D.faY,o.k3),B.iD(A.b5,n,n,A.af,!0,new C.eMY(o),n,n,n,D.f8e,o.k2)],s),A.m,n,A.e,A.j,0,A.p),A.agt)],s),A.F,n,A.e,A.j,0,A.p)},
cAp(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=null,a7=a5.azO()
if(a7.length===0)return a5.vk(B.d("Type your quote on the Design tab. Every word will show up here so you can make it bigger, normal or smaller.",a6,a6,a6,a6,a6,a6,D.IJ,a6,a6,a6))
w=a5.d.a.a
v=B.a([],x.t)
for(u=a7.length,t=0,s=0;s<a7.length;a7.length===u||(0,B.L)(a7),++s){r=a7[s]
v.push(t)
q=B.af('[.!?]["\u201d\u2019)]*$',!0,!1,!1,!1)
p=r.b
o=p.index
p=A.a.ap(w,o,o+p[0].length)
if(q.b.test(p))++t}n=v.length===0?0:A.d.gal(v)+1
u=a5.dx
m=B.B(u,B.a4(u).k("cm.E"))
A.d.fh(m)
l=m.length!==0&&A.d.d9(m,new C.eOe(a5,m))?a5.db[A.d.gK(m)]:a6
k=new C.eOl(a5)
j=new C.eOn()
q=B.d("Tap the words you want to change, then choose a size. One sentence can have big, normal and small words.",a6,a6,a6,a6,a6,a6,D.IJ,a6,a6,a6)
p=x.p
o=B.a([],p)
for(i=a5.db,h=0;h<a7.length;++h){g=new B.aV(11,11)
f=u.t(0,h)?A.b5.j(0.38):A.c.j(0.06)
e=u.t(0,h)?A.ez:A.bF
d=new B.aA(e,u.t(0,h)?2:1,A.q,-1)
e=a7[h].b
a0=e.index
e=A.a.ap(w,a0,a0+e[0].length)
a0=B.af("[*~^]",!0,!1,!1,!1)
e=B.aJ(e,a0,"")
a0=j.$1(i[h])
a1=i[h]>0?A.u:A.a4
o.push(B.aE(a6,B.p(a6,new B.x(e,a6,new B.G(!0,A.c,a6,a6,a6,a6,a0,a1,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),a6,a6,a6,a6,a6,a6,a6,a6,a6),A.f,a6,a6,new B.o(f,a6,new B.bP(d,d,d,d),new B.bq(g,g,g,g),a6,a6,A.n),a6,a6,a6,a6,A.M_,a6,a6,a6),A.y,!1,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,new C.eOf(a5,h),a6,a6,a6,a6,a6,a6,!1,A.a8))}o=a5.vk(B.bZ(A.bB,o,A.rF,6,6))
i=B.a([a5.nW("All words",K.akJ,!1,new C.eOg(a5,a7))],p)
if(n>1){a2=0
for(;;){if(!(a2<n&&a2<8))break
a3=a2+1
i.push(a5.af2("Sentence "+a3,!1,new C.eOh(a5,a7,v,a2)))
a2=a3}}i.push(a5.af2("Clear picks",!1,new C.eOi(a5)))
i=B.bZ(A.bB,i,A.bs,8,8)
g=a5.xv("SIZE OF THE PICKED WORDS",D.ak8)
f=B.a([],p)
for(s=0;s<4;++s){e={}
a0=D.ddd[s]
a1=e.a=null
a4=a0.a
e.a=a4
e=u.a===0?a1:new C.eOj(e,k)
f.push(a5.af2(a0.b,l===a4,e))}return B.v(B.a([q,A.S,o,A.S,i,g,B.bZ(A.bB,f,A.bs,8,8),A.S,a5.nW("Make every word normal",A.ld,!1,new C.eOk(a5))],p),A.F,a6,A.e,A.j,0,A.p)},
cvE(){var w,v,u,t,s,r,q=this,p=null,o=x.p,n=B.A(B.a([D.bvc,B.d(A.d.iD(D.avp,new C.eNY(q)).b,p,p,p,p,p,p,D.eWZ,p,p,p)],o),A.m,p,A.e,A.j,0,p,p),m=B.cn(new C.eNZ(q)),l=q.xv("HIGHLIGHT BEHIND THE WORDS",A.a_c),k=q.p1?-1:q.k4
k=q.ahs(k,new C.eO_(q),D.cV9)
w=q.p1
v=w?A.c:A.b2
n=B.a([n,A.S,m,l,B.bZ(A.bB,B.a([k,B.aE(p,B.p(p,D.bGL,A.f,p,p,new B.o(p,p,B.I(v,A.q,w?3:1),p,p,D.eQZ,A.a6),p,34,p,p,p,p,p,34),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.eO2(q),p,p,p,p,p,p,!1,A.a8)],o),A.rF,10,10),A.an,B.d("Add a coloured band behind the words, with any word design. The first circle turns it off.",p,p,p,p,p,p,D.IJ,p,p,p)],o)
if(q.gaTM()!==0){m=B.a([],o)
if(q.p1){l=q.p2
l=q.ah2("Colour",l,0,360,new C.eO3(q),""+A.k.V(l)+"\xb0")
k=q.p3
A.d.v(m,B.a([l,q.ah2("Shade",k,0.15,0.9,new C.eO4(q),""+A.k.V(k*100))],o))}l=q.ok
m.push(q.ka("Strength",l,0.15,1,new C.eO5(q),1,""+A.k.V(l*100)+"%"))
A.d.v(n,B.a([A.S,q.vk(B.v(m,A.m,p,A.e,A.j,0,A.p))],o))}n.push(q.xv("LOOK",A.y6))
m=B.a([q.nW("Bold",I.ak6,q.fy,new C.eO6(q)),q.nW("Italic",I.ak7,q.go,new C.eO7(q))],o)
for(u=0;u<3;++u){l={}
k=D.cMh[u]
l.a=null
t=k.a
l.a=t
w=q.id===t
v=w?G.tU:p
w=w?p:A.c.j(0.07)
s=new B.aV(14,14)
r=new B.aA(q.id===l.a?A.K:A.bF,1,A.q,-1)
m.push(B.aE(p,B.p(p,B.W(k.b,A.c,p,p,p,20),A.f,p,p,new B.o(w,p,new B.bP(r,r,r,r),new B.bq(s,s,s,s),p,v,A.n),p,38,p,p,p,p,p,42),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.eO8(l,q),p,p,p,p,p,p,!1,A.a8))}n.push(B.bZ(A.bB,m,A.rF,8,8))
n.push(q.xv("COLOUR",A.n9))
n.push(q.ahs(q.fx,new C.eO9(q),D.d4O))
n.push(A.an)
n.push(B.d("The first circle keeps the colour that comes with the design.",p,p,p,p,p,p,D.IJ,p,p,p))
n.push(q.xv("SIZE AND PLACE",A.FV))
m=q.fr
m=q.ka("Text size",m,0.5,1.6,new C.eO0(q),1,""+A.k.V(m*100)+"%")
l=q.k1
n.push(q.vk(B.v(B.a([m,q.ka("Up / down",l,0.12,0.5,new C.eO1(q),0.3,""+A.k.V(l*100))],o),A.m,p,A.e,A.j,0,A.p)))
return B.v(n,A.F,p,A.e,A.j,0,A.p)},
cf7(){var w,v,u,t,s,r,q=this,p=null,o=q.p4
if(o==null){w=B.m(22)
v=B.I(A.b5.j(0.6),A.q,1.6)
u=B.a([A.b5.j(0.18),A.bz.j(0.12)],x.O)
return B.aE(p,B.p(p,B.v(B.a([B.p(p,D.bM5,A.f,p,p,D.aZT,p,62,p,p,p,p,p,62),A.aA,D.fc6,A.an,D.fgB],x.p),A.m,p,A.e,A.j,0,A.p),A.f,p,p,new B.o(D.t7,p,v,w,p,new B.a7(A.a3,A.a7,A.x,u,p,p),A.n),p,p,p,p,D.br6,p,p,1/0),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,q.gaY1(),p,p,p,p,p,p,!1,A.a8)}w=x.p
v=B.A(B.a([B.bv(B.m(12),new B.a6(46,62,B.fL(o,A.A,120,p,A.co,A.bQ,!1,p,!1,p,p),p),A.aq),A.bf,B.D(B.v(B.a([D.fbH,A.P,B.bZ(A.bB,B.a([q.nW("Change",A.kN,!1,q.gaY1()),q.nW("Remove",A.e4,!1,new C.eNC(q))],w),A.bs,6,6)],w),A.F,p,A.e,A.j,0,A.p),1)],w),A.m,p,A.e,A.j,0,p,p)
u=B.a([],w)
for(t=0;t<5;++t){s=D.d1l[t]
u.push(q.nW(s.b,s.a,q.at===t,new C.eND(q,t)))}u=B.bZ(A.bB,u,A.bs,8,8)
r=q.at
A:{if(0===r){s=q.bZ5(o)
break A}if(1===r){s=q.bY8()
break A}if(2===r){s=q.bEC()
break A}if(3===r){s=q.bKQ()
break A}s=q.bGJ()
break A}return B.v(B.a([v,A.ac,u,A.aA,s,A.S,new B.bH(A.a3,p,p,q.nW("Reset the whole picture",A.ld,!1,new C.eNE(q)),p)],w),A.F,p,A.e,A.j,0,A.p)},
bZ5(d){var w=this,v=x.p
return B.v(B.a([B.bZ(A.bB,B.a([w.nW("Auto enhance",E.ZR,!1,new C.eNu(w)),w.nW("Make words easy to read",A.oG,!1,new C.eNv(w))],v),A.bs,8,8),A.aA,B.cn(new C.eNw(w,d))],v),A.F,null,A.e,A.j,0,A.p)},
bY8(){var w,v,u,t,s,r,q,p,o=this,n=o.R8
n=o.ka("Exposure",n,-1.5,1.5,new C.eN8(o),0,A.k.aa(n,1))
w=o.RG
w=o.ka("Brightness",w,-0.5,0.5,new C.eN9(o),0,""+A.k.V(w*100))
v=o.rx
v=o.ka("Contrast",v,0.4,2,new C.eNa(o),1,""+A.k.V(v*100))
u=o.xr
u=o.ka("Fade",u,0,1,new C.eNb(o),0,""+A.k.V(u*100))
t=o.aE
t=o.ka("Spotlight",t,0,1,new C.eNc(o),0,""+A.k.V(t*100))
s=o.Z
s=o.ka("Darken",s,0,0.85,new C.eNd(o),0,""+A.k.V(s*100))
r=o.b5
r=o.ka("Vignette",r,0,0.9,new C.eNe(o),0,""+A.k.V(r*100))
q=o.aG
q=o.ka("Shade behind words",q,0,0.85,new C.eNf(o),0,""+A.k.V(q*100))
p=o.aN
return o.vk(B.v(B.a([n,w,v,u,t,s,r,q,o.ka("Shade top & bottom",p,0,0.85,new C.eNg(o),0,""+A.k.V(p*100))],x.p),A.m,null,A.e,A.j,0,A.p))},
bEC(){var w,v,u,t,s=this,r=null,q=s.ry
q=s.ka("Colour strength",q,0,2.2,new C.eMu(s),1,""+A.k.V(q*100))
w=s.to
w=s.ka("Warmth",w,-1,1,new C.eMv(s),0,""+A.k.V(w*100))
v=s.x1
v=s.ka("Tint",v,-1,1,new C.eMw(s),0,""+A.k.V(v*100))
u=s.x2
t=x.p
u=s.vk(B.v(B.a([q,w,v,s.ka("Shift colours",u,-180,180,new C.eMx(s),0,""+A.k.V(u)+"\xb0"),new B.bH(A.a3,r,r,s.nW("Negative",D.bBP,s.y1,new C.eMy(s)),r)],t),A.m,r,A.e,A.j,0,A.p))
v=s.xv("COLOUR WASH",A.MZ)
w=s.b3
q=B.a([null],x.Z)
A.d.v(q,D.au8)
t=B.a([u,v,s.ahs(w,new C.eMz(s),q),A.P],t)
if(s.b3!=null){q=s.b1
t.push(s.vk(s.ah2("Wash strength",q,0,0.9,new C.eMA(s),""+A.k.V(q*100))))}return B.v(t,A.F,r,A.e,A.j,0,A.p)},
bKQ(){var w,v,u,t,s,r=this,q=r.y2
q=r.ka("Blur",q,0,24,new C.eN2(r),0,A.o.u(A.k.V(q)))
w=r.bi
w=r.ka("Soft focus",w,0,1,new C.eN3(r),0,""+A.k.V(w*100))
v=r.az
u=x.p
v=r.vk(B.v(B.a([q,w,r.ka("Film grain",v,0,1,new C.eN4(r),0,""+A.k.V(v*100))],u),A.m,null,A.e,A.j,0,A.p))
w=r.xv("LIGHT LEAK",H.ak2)
q=r.bb
t=B.a([null],x.Z)
s=x.S
A.d.v(t,B.dc(D.au8,0,B.dJ(8,"count",s),s))
u=B.a([v,w,r.ahs(q,new C.eN5(r),t),A.P],u)
if(r.bb!=null){q=r.bK
u.push(r.vk(r.ah2("Leak strength",q,0,1,new C.eN6(r),""+A.k.V(q*100))))}return B.v(u,A.F,null,A.e,A.j,0,A.p)},
bGJ(){var w,v,u,t,s=this,r=s.aR
r=s.ka("Zoom",r,1,3,new C.eME(s),1,""+A.k.V(r*100)+"%")
w=s.bj
w=s.ka("Left / right",w,-1,1,new C.eMF(s),0,""+A.k.V(w*100))
v=s.bT
v=s.ka("Up / down",v,-1,1,new C.eMG(s),0,""+A.k.V(v*100))
u=s.c8
t=x.p
return B.v(B.a([s.vk(B.v(B.a([r,w,v,s.ka("Turn",u,-180,180,new C.eMH(s),0,""+A.k.V(u)+"\xb0")],t),A.m,null,A.e,A.j,0,A.p)),A.S,B.bZ(A.bB,B.a([s.nW("Turn 90\xb0",O.alg,!1,new C.eMI(s)),s.nW("Flip sideways",A.FJ,s.cT,new C.eMJ(s)),s.nW("Flip upside down",A.FJ,s.cW,new C.eMK(s))],t),A.bs,8,8)],t),A.F,null,A.e,A.j,0,A.p)},
c0J(){var w=null,v=B.m(22),u=B.I(A.bF,A.q,1)
return B.p(w,B.v(B.a([D.eFr,A.S,D.fdu,A.aA,B.aE(w,B.p(A.A,D.eFE,A.f,w,w,new B.o(w,w,w,B.m(16),w,G.tU,A.n),w,52,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eNx(this),w,w,w,w,w,w,!1,A.a8)],x.p),A.F,w,A.e,A.j,0,A.p),A.f,w,w,new B.o(D.t7,w,u,v,w,w,A.n),w,w,w,w,A.bW,w,w,w)},
bYY(){var w,v,u,t,s,r,q,p=this,o=null,n=new C.eNp(p),m=x.p,l=B.A(B.a([D.bvi,p.nW("Reset",A.ld,!1,new C.eNl(p))],m),A.m,o,A.e,A.j,0,o,o),k=B.d("Drag it on the quote to move it. It stays on every quote.",o,o,o,o,o,o,D.IJ,o,o,o),j=p.xv("SHAPE",A.alc),i=B.a([],m)
for(w=0;w<7;++w){v={}
u=D.BL[w]
v.a=null
t=v.a=u.a
if(t.length!==0){s=p.cx
i.push(p.aY2(n.$2(t,p.cy),62,u.b,s===t,new C.eNm(v,p),62))}}i=B.bZ(A.bB,i,A.bs,8,8)
v=p.xv("RING",A.qR)
u=B.a([],m)
for(w=0;w<11;++w){s={}
r=D.BG[w]
s.a=null
t=s.a=r.a
q=p.cy
u.push(p.aY2(n.$2(p.cx,t),62,r.b,q===t,new C.eNn(s,p),62))}u=B.bZ(A.bB,u,A.bs,8,8)
s=p.CW
return B.v(B.a([l,A.at,k,j,i,v,u,A.ac,p.vk(p.ka("Size",s,0.12,0.4,new C.eNo(p),0.22,""+A.k.V(s*100)))],m),A.F,o,A.e,A.j,0,A.p)},
b_X(d){return new B.a6(null,d,new B.fG(0.5625,B.cn(new C.eNI(this)),null),null)},
cuW(){var w,v,u,t,s,r,q=null,p=A.c.j(0.05),o=B.m(18),n=B.I(A.bF,A.q,1),m=x.p,l=B.a([],m)
for(w=0;w<6;++w){v=this.as===w
u=v?G.tU:q
t=new B.aV(14,14)
s=D.d3o[w]
r=v?A.c:A.az
r=B.W(s.a,r,q,q,q,19)
v=v?A.c:A.az
l.push(new B.bD(1,A.bi,B.aE(A.c5,B.dg(q,B.v(B.a([r,A.cX,new B.q9(A.eg,A.A,A.f,new B.x(s.b,q,new B.G(!0,v,q,q,q,q,10.5,A.H,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q),q,q,q,q,q,q,q,q,q),q)],m),A.m,q,A.e,A.Q,0,A.p),q,q,A.bc,new B.o(q,q,q,new B.bq(t,t,t,t),q,u,A.n),D.bmP,q,q,q,A.hI,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.eNR(this,w),q,q,q,q,q,q,!1,A.a8),q))}return B.p(q,B.A(l,A.m,q,A.e,A.j,0,q,q),A.f,q,q,new B.o(p,q,n,o,q,q,A.n),q,q,q,D.boU,A.lJ,q,q,q)},
aOH(){var w,v,u=this,t=null,s=u.cuW(),r=u.as
A:{if(0===r){w=u.bIK()
break A}if(1===r){w=u.cAp()
break A}if(2===r){w=u.cvE()
break A}if(3===r){w=u.cf7()
break A}if(4===r){w=u.bYY()
break A}w=u.c0J()
break A}v=x.p
return B.bv(A.rL,B.ej(B.v(B.a([s,B.D(B.cB(B.a([w],v),t,D.bpX,t,t,A.ah,!1),1)],v),A.m,t,A.e,A.j,0,A.p),D.W9,!0),A.aq)},
aKX(){var w,v,u,t,s=this,r=null,q=s.Q?r:s.gc5C(),p=B.m(16)
q=B.D(B.aE(r,B.p(r,D.eFN,A.f,r,r,new B.o(A.c.j(0.08),r,B.I(A.b2,A.q,1),p,r,r,A.n),r,50,r,r,r,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,!1,A.a8),1)
p=s.Q?r:s.gbKq()
w=B.m(16)
v=B.a([new B.ac(0,A.G,A.bz.j(0.35),A.cv,16)],x.V)
u=x.p
t=B.a([],u)
if(s.Q)t.push(D.eKH)
else t.push(D.bFS)
t.push(A.ab)
t.push(D.bx2)
return B.p(r,B.A(B.a([q,A.av,B.D(B.aE(r,B.p(r,B.A(t,A.m,r,A.bb,A.j,0,r,r),A.f,r,r,new B.o(r,r,r,w,v,G.tU,A.n),r,50,r,r,r,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,p,r,r,r,r,r,r,!1,A.a8),1)],u),A.m,r,A.e,A.j,0,r,r),A.f,r,r,D.aZ0,r,r,r,r,G.agh,r,r,r)},
aY0(){var w=null
return new B.C(T.Yf,B.A(B.a([B.aH(w,w,w,w,A.mp,w,w,w,new C.eN7(this),w,w,w,w,w,w),D.fsv,A.b4,D.bOm],x.p),A.m,w,A.e,A.j,0,w,w),w)},
B(d){var w=null
return B.c8(w,A.Av,B.bm(!0,B.cn(new C.eOo(this)),!0,!1,A.af,!0,!0),w,!1,!1,w,w)}}
C.bdV.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m=new B.eP()
m.dG(7)
w=e.a
v=e.b
u=A.k.V(w*v/55)
$.X()
t=B.M()
s=this.b
t.r=A.c.j(0.16*s).gp(0)
r=B.M()
r.r=A.w.j(0.2*s).gp(0)
for(s=d.a,q=0;q<u;++q){p=m.aj()*w
o=m.aj()*v
n=((q&1)===0?t:r).H()
s.drawRect(B.c4(new B.aa(p,o,p+1.1,o+1.1)),n)
n.delete()}},
aq(d){return d.b!==this.b}}
C.rg.prototype={
a4(){return"NgmyQuoteDeco."+this.b}}
C.lZ.prototype={}
C.z7.prototype={
ae(){var w=this
return B.F(["at",w.a.a6().ac(),"outline",w.b,"extras",w.c,"request",w.d],x.N,x.z)}}
C.nB.prototype={}
C.vG.prototype={
a4(){return"NgmySlidesAiExtra."+this.b}}
C.a7g.prototype={}
C.aq0.prototype={}
C.a_F.prototype={
T(){return new C.aG9(new B.ar(A.as,$.aw()),B.ki(!0,null,!0,!0,null,null,!1),D.dt0,B.a([],x.s),B.ev([D.HA],x.Q))}}
C.aG9.prototype={
q(){var w=this.d
w.S$=$.aw()
w.P$=0
this.f.q()
this.a2()},
a_s(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$a_s=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hW().BI(90,700,700,A.eG),$async$a_s)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.ff(),$async$a_s)
case 8:p=e
if(r.c!=null)r.m(new C.eUq(r,p,q))
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
return B.i($async$a_s,v)},
a_v(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a_v=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i=20-r.y.length
if(i<=0){w=1
break}t=4
n=i>1?i:null
w=7
return B.b(new B.hW().aG7(78,n,1100,1100),$async$a_v)
case 7:q=e
if(J.ck(q)){w=1
break}p=B.bl(r.y,!0,x.N)
n=J.aW(q)
case 8:if(!n.C()){w=9
break}o=n.gU(n)
if(J.ad(p)>=20){w=9
break}w=10
return B.b(o.ff(),$async$a_v)
case 10:m=e
l=o.b.toLowerCase()
if(A.a.cb(l,".png"))k="image/png"
else k=A.a.cb(l,".webp")?"image/webp":"image/jpeg"
J.cf(p,"data:"+k+";base64,"+A.cS.gcv().aJ(m))
w=8
break
case 9:if(r.c!=null)r.m(new C.eUr(r,p))
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
return B.i($async$a_v,v)},
b1W(d){var w,v,u=null
if(d!=null&&A.a.t(d,","))try{w=B.fL(A.cE.aJ(A.d.gal(d.split(","))),A.A,u,u,A.co,A.bQ,!0,u,!1,u,u)
return w}catch(v){}return D.bl6},
bZ3(d,e,f,g){var w=e.length===0&&f.length===0?"rounded":e
return B.coA(C.fv6(w,this.b1W(d),f),g)},
abw(d,e,f,g,h){var w=null,v=new C.eUo(f,e),u=new C.eUp(f,e),t=A.c.j(0.05),s=B.m(12),r=B.m(12),q=B.m(12),p=h==null,o=B.I(p?A.bF:A.b5.j(0.6),A.q,1)
if(p)p=new B.a6(34,30,new B.an(A.W,w,A.aa,A.f,B.a([B.av(B.W(f?A.Bq:A.MO,A.c_,w,w,w,26),w,w,w),D.e90],x.p),w),w)
else p=this.bZ3(g,v.$1(h),u.$1(h),34)
return B.aF(!1,A.a1,!0,s,B.aK(!1,r,!0,B.p(w,B.A(B.a([B.D(B.av(p,w,w,w),1),D.bFz],x.p),A.m,w,A.e,A.j,0,w,w),A.f,w,w,new B.o(w,w,o,q,w,w,A.n),w,44,w,w,A.mh,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eUn(this,f,h,g,v,u,d),w,w,w,w,w,w,w),A.f,t,0,w,w,w,w,w,A.ag)},
aVr(d,e,f,g,h){var w,v,u,t,s,r,q,p=null,o=null,n=h==null
if(!n&&A.a.t(h,","))try{o=B.bv(B.m(8),B.fL(A.cE.aJ(A.d.gal(h.split(","))),A.A,p,p,A.co,A.bQ,!1,30,!1,p,30),A.aq)}catch(w){}v=A.c.j(0.05)
u=B.m(14)
t=B.m(14)
s=B.m(14)
r=B.I(n?A.bF:A.bo.j(0.6),A.q,1)
q=o
n=q==null?B.W(d,A.es,p,p,p,20):q
n=B.a([n,A.ab,B.D(B.d(e,p,1,A.a2,p,p,p,A.Tg,p,p,p),1)],x.p)
if(f!=null)n.push(B.aE(p,D.a07,A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,!1,A.a8))
return B.aF(!1,A.a1,!0,u,B.aK(!1,t,!0,B.p(p,B.A(n,A.m,p,A.e,A.j,0,p,p),A.f,p,p,new B.o(p,p,r,s,p,p,A.n),p,50,p,p,A.l7,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,g,p,p,p,p,p,p,p),A.f,v,0,p,p,p,p,p,A.ag)},
a7I(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$a7I=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(C.fyx(),$async$a7I)
case 7:q=e
if(q==null||r.c==null){w=1
break}r.m(new C.eU6(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
p=B.a9(n)
if(r.c!=null)r.m(new C.eU7(r,p))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a7I,v)},
adm(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$adm=B.e(function(d,a0){if(d===1){s.push(a0)
w=t}for(;;)switch(w){case 0:f=A.a.i(r.d.a.a)
if(f.length<6&&r.e==null){r.m(new C.eU9(r))
w=1
break}if(r.x==null){m=B.af("\\blogo\\b",!1,!1,!1,!1)
m=m.b.test(f)}else m=!1
if(m){r.m(new C.eUa(r))
w=1
break}m=r.e
l=m==null?null:m.c
if(l==null)l=""
q=l.length===0?f:f+"\n\nSOURCE DOCUMENT ("+m.a+"):\n"+l
r.m(new C.eUb(r))
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
return B.b(C.ftP(q,r.cx,j,new C.b_L(r.z,r.Q,r.as,r.at),new C.eUc(r),i,m,p,k),$async$adm)
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
if(r.c!=null)r.m(new C.eUd(r,n))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$adm,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=x.w,f=B.aI(d,A.eD,g).w
g=B.aI(d,A.bT,g).w
w=B.av(B.p(h,h,A.f,h,h,new B.o(A.b2,h,h,B.m(99),h,h,A.n),h,4,h,h,h,h,h,40),h,h,h)
v=x.V
u=B.av(B.aE(h,B.p(h,D.bIJ,A.f,h,h,new B.o(h,h,B.I(A.c.j(0.35),A.q,2),h,B.a([new B.ac(2,A.G,A.bo.j(0.5),A.J,24)],v),D.bS6,A.a6),h,84,h,h,h,h,h,84),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.eUE(i),h,h,h,h,h,h,!1,A.a8),h,h,h)
t=x.p
s=B.a([],t)
if(i.e!=null)s.push(B.aH(h,h,h,h,D.a07,h,h,h,i.ax?h:new C.eUF(i),h,h,h,h,"Remove document",h))
r=i.e
r=r==null?"Attach a PDF, Word or text file":r.a
q=i.ax?h:i.gbzH()
v=B.a([new B.ac(0,A.G,A.b5.j(0.45),A.J,10)],v)
s.push(B.hp(B.aF(!1,A.a1,!0,h,B.aK(!1,h,!0,B.p(h,B.W(i.e==null?A.vp:A.hy,A.c,h,h,h,20),A.f,h,h,new B.o(h,h,h,h,v,E.vE,A.a6),h,40,h,h,h,h,h,40),A.cL,!0,h,h,h,h,h,h,h,h,h,h,h,q,h,h,h,h,h,h,h),A.f,A.K,0,h,h,A.cL,h,h,A.ag),h,r,h,h))
v=B.A(s,A.m,h,A.e,A.Q,0,h,h)
s=A.c.j(0.05)
v=B.aL(h,A.T,!1,h,!0,A.r,h,B.aM(),i.d,h,h,h,h,h,2,B.br(h,h,h,h,h,h,h,h,!0,new B.b4(4,B.m(16),new B.aA(A.c.j(0.1),1,A.q,-1)),h,h,h,h,h,s,!0,h,h,h,h,new B.b4(4,B.m(16),D.aWs),h,h,h,h,h,h,h,h,X.Ix,"Type your idea here\u2026",h,h,h,h,h,h,h,h,h,!0,!0,!1,h,h,h,h,h,h,h,h,new B.C(A.jc,v,h),h,h,h,h,h),A.y,!0,h,!0,h,!1,i.f,A.ai,h,h,h,h,h,h,h,h,h,6,3,h,!1,"\u2022",h,h,h,h,h,!1,h,h,!1,h,!0,h,A.a9,h,h,h,h,h,h,h,h,h,h,h,D.aON,!0,A.a5,h,A.am,h,h,h,h)
s=i.x
r=s==null
q=r?"Add your logo":"Logo added"
r=r?h:new C.eUG(i)
s=i.aVr(A.lf,q,r,i.gcfy(),s)
r=i.z
r=B.D(i.abw(new C.eUI(i),i.Q,!1,i.x,r),1)
q=i.Q
q=B.D(B.v(B.a([s,A.an,B.A(B.a([r,A.bp,B.D(i.abw(new C.eUJ(i),i.z,!0,i.x,q),1)],t),A.m,h,A.e,A.j,0,h,h)],t),A.m,h,A.e,A.j,0,A.p),1)
s=i.y
r=s.length
p=r===0
if(p)r="Add your pictures"
else{o=r===1?"":"s"
o=""+r+" picture"+o
r=o}s=p?h:A.d.gK(s)
p=i.y.length===0?h:new C.eUK(i)
s=i.aVr(A.vn,r,p,i.gcfG(),s)
p=i.as
r=i.at
o=i.y
o=o.length===0?h:A.d.gK(o)
p=B.D(i.abw(new C.eUL(i),r,!1,o,p),1)
o=i.at
r=i.as
n=i.y
n=n.length===0?h:A.d.gK(n)
o=B.a([w,A.aA,D.fhQ,A.at,D.fkD,A.bw,u,A.P,D.fj5,A.aA,v,A.bw,B.A(B.a([q,A.av,B.D(B.v(B.a([s,A.an,B.A(B.a([p,A.bp,B.D(i.abw(new C.eUM(i),r,!0,n,o),1)],t),A.m,h,A.e,A.j,0,h,h)],t),A.m,h,A.e,A.j,0,A.p),1)],t),A.F,h,A.e,A.j,0,h,h),A.an,D.fmk],t)
w=i.w.a
if(w.length!==0){v=B.m(999)
u=B.I(D.bdP,A.q,1)
w=C.afZ(w)
w=w==null?h:w.b
A.d.v(o,B.a([A.S,new B.bH(A.a3,h,h,B.p(h,B.A(B.a([D.bJO,A.bp,B.d("Ending: "+(w==null?"":w),h,h,h,h,h,h,D.f1r,h,h,h),B.aK(!1,h,!0,D.e3C,h,!0,h,h,h,h,h,h,h,h,h,h,h,new C.eUN(i),h,h,h,h,h,h,h)],t),A.m,h,A.e,A.Q,0,h,h),A.f,h,h,new B.o(D.b7f,h,u,v,h,h,A.n),h,h,h,h,D.boB,h,h,h),h)],t))}o.push(A.bw)
o.push(D.f8W)
o.push(A.P)
w=B.a([],t)
for(m=0;m<6;++m){l=D.cXa[m]
v=i.ch===l?A.b5:A.c.j(0.06)
u=i.ch===l
k=new B.aA(u?A.az:A.bF,1,A.q,-1)
u=u?A.u:A.O
w.push(new B.bD(1,A.bi,new B.C(A.je,B.aE(h,B.dg(A.A,new B.x(""+l,h,new B.G(!0,A.c,h,h,h,h,h,u,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h),h,h,h,h,h,h,h,h,h),h,h,A.bc,new B.o(v,h,new B.bP(k,k,k,k),h,h,h,A.a6),A.eE,h,42,h,h,h,h,h),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.eUO(i,l),h,h,h,h,h,h,!1,A.a8),h),h))}o.push(B.A(w,A.m,h,A.e,A.j,0,h,h))
o.push(A.bw)
o.push(D.fqN)
o.push(A.P)
o.push(B.cn(new C.eUP(i)))
o.push(A.bw)
o.push(D.ffY)
o.push(A.P)
w=B.a([i.b4E("auto","Let AI choose",A.dW,A.Pv)],t)
for(v=x.O,m=0;m<11;++m){j=D.vK[m]
u=j.d
w.push(i.b4E(j.a,j.b,j.c,B.a([B.b0(A.d.gK(u).a),B.b0(A.d.gK(u).b)],v)))}o.push(B.bZ(A.bB,w,A.bs,8,8))
o.push(A.aP)
w=A.c.j(0.04)
v=B.m(16)
u=B.I(i.r?A.bo.j(0.5):A.bF,A.q,1)
o.push(B.p(h,B.iD(h,A.bo,h,h,h,new C.eUH(i),D.bF0,D.fq2,h,D.fba,i.r),A.f,h,h,new B.o(w,h,u,v,h,h,A.n),h,h,h,h,h,h,h,h))
w=i.cy
if(w!=null)A.d.v(o,B.a([A.aA,B.d(w,h,h,h,h,h,h,D.aO1,h,h,h)],t))
o.push(A.bw)
w=i.ax?h:i.gc5G()
v=B.fm(h,h,A.b5,A.b5.j(0.5),h,h,h,h,h,A.c,h,h,h,h,new B.b7(B.m(18),A.Y),h,h,h,h,h)
u=i.ax
t=u?D.eKx:A.G8
o.push(new B.a6(h,54,B.lq(t,B.d(u?i.ay:"Create my presentation",h,h,h,h,h,h,A.p1,h,h,h),w,v),h))
return new B.C(new B.Q(0,0,0,f.f.d),B.p(h,B.bm(!0,B.cd(B.v(o,A.aj,h,A.e,A.j,0,A.p),A.r,h,A.y,h,A.vf,h,h,A.ah),!0,!1,A.af,!0,!1),A.f,h,new B.aY(0,680,0,g.a.b*0.92),D.a9X,h,h,h,h,h,h,h,h),h)},
bLU(d){var w,v,u,t,s,r,q=null,p=this.cx.t(0,d),o=new C.eUe(this,p,d)
if(d===D.Cm)return new C.aCI(p,o,q)
w=B.m(16)
v=p?E.vE:q
u=p?q:A.c.j(0.05)
t=B.I(p?A.az:A.bF,A.q,1)
s=B.W(p?A.ee:C.hzM(d),A.c,q,q,q,20)
r=C.hzN(d)
return B.aE(q,B.dg(q,B.v(B.a([s,A.at,B.f2(A.A,B.d(r,q,q,q,q,q,q,B.l(q,q,A.c,q,q,q,q,q,q,q,q,12,q,q,p?A.u:A.a4,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),A.f,A.eg)],x.p),A.m,q,A.bb,A.j,0,A.p),q,q,A.bc,new B.o(u,q,t,w,q,v,A.n),A.hX,q,64,q,A.hw,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,o,q,q,q,q,q,q,!1,A.a8)},
b4E(d,e,f,g){var w,v=null,u=this.CW===d,t=B.m(99),s=u?A.c.j(0.12):A.c.j(0.04),r=u?A.ad:A.bF
r=B.I(r,A.q,u?1.6:1)
w=B.p(v,B.W(f,A.c,v,v,v,14),A.f,v,v,new B.o(v,v,v,v,v,new B.a7(A.a3,A.a7,A.x,g,v,v),A.a6),v,26,v,v,v,v,v,26)
return B.aE(v,B.dg(v,B.A(B.a([w,L.Ir,B.d(e,v,v,v,v,v,v,B.l(v,v,A.c,v,v,v,v,v,v,v,v,12.5,v,v,u?A.u:A.a4,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.Q,0,v,v),v,v,A.bc,new B.o(s,v,r,t,v,v,A.n),A.eE,v,v,v,L.ahz,v,v,v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.eUt(this,d),v,v,v,v,v,v,!1,A.a8)}}
C.a_E.prototype={
T(){return new C.aG8(new B.ar(A.as,$.aw()))}}
C.aG8.prototype={
q(){var w=this.d
w.S$=$.aw()
w.P$=0
this.a2()},
adn(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$adn=B.e(function(a2,a3){if(a2===1){s.push(a3)
w=t}for(;;)switch(w){case 0:a0=A.a.i(r.d.a.a)
if(J.ad(a0)<3){r.m(new C.eU_(r))
w=1
break}B.eR()
r.m(new C.eU0(r))
t=4
q=C.i_W(a0)
if(q!=null){k=r.a
j=k.c
k=k.d
i=B.af("\\b(all|every|whole|entire)\\b.{0,30}\\b(slides?|presentation|deck|pages?)\\b|\\b(slides?|presentation|deck)\\b.{0,20}\\b(all|every|whole|entire)\\b",!0,!1,!1,!1)
h=a0.toLowerCase()
p=C.i_G(j,k-1,q,i.b.test(h))
if(!p){r.m(new C.eU1(r,q))
w=1
break}k=r.c
if(k!=null)B.a5(k,!1).N(r.a.c)
w=1
break}g=a0.toLowerCase()
k=B.af("\\b(undo|un-do|bring (it |them |the .{0,30}?)?back|brings? back|put (it |them |the .{0,30}?)?back|restore|revert|go back|change (it|that|them) back|back the way|what it was|the way it was|previous version|before (you|the ai) (changed|change))\\b",!0,!1,!1,!1)
if(k.b.test(g)){k=r.a.c
C.fTj()
f=$.Ce.h(0,k.a)
o=f==null||J.ck(f)?null:J.fo(f)
if(o==null){r.m(new C.eU2(r))
w=1
break}n=C.i_E(o,r.a.c)
C.i_A(r.a.c.a)
$.fSA=!0
k=r.c
if(k!=null)B.a5(k,!1).N(n)
w=1
break}k=r.a
j=k.c
i=j.CW
if(i==null)i=""
k=k.d
j=C.fW_(j)
h=C.fW0(r.a.c)
e=C.fW1(r.a.c)
w=7
return B.b(C.bAs(k,r.a.c.a,j,h,new C.eU3(r),i,e,a0),$async$adn)
case 7:m=a3
k=r.c
if(k!=null)B.a5(k,!1).N(m)
t=2
w=6
break
case 4:t=3
a1=s.pop()
l=B.a9(a1)
if(r.c!=null)r.m(new C.eU4(r,l))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$adn,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=x.w,h=B.aI(d,A.eD,i).w
i=B.aI(d,A.bT,i).w
w=B.av(B.p(j,j,A.f,j,j,new B.o(A.b2,j,j,B.m(99),j,j,A.n),j,4,j,j,j,j,j,40),j,j,j)
v=x.p
u=B.A(B.a([B.p(j,D.alv,A.f,j,j,D.aYG,j,34,j,j,j,j,j,34),A.av,D.bvS],v),A.m,j,A.e,A.j,0,j,j)
t=B.d("You're on slide "+k.a.d+". Ask for new slides, changes to any slide, a different style or another language.",j,j,j,j,j,j,X.aOu,j,j,j)
s=A.c.j(0.05)
s=B.aL(j,A.T,!0,j,!0,A.r,j,B.aM(),k.d,j,j,j,j,j,2,B.br(j,j,j,j,j,j,j,j,!0,new B.b4(4,B.m(16),new B.aA(A.c.j(0.1),1,A.q,-1)),j,j,j,j,j,s,!0,j,j,j,j,new B.b4(4,B.m(16),As.a9s),j,j,j,j,j,j,j,j,X.Ix,"e.g. Add a slide after this one about how to sign up, and make the title slide more exciting.",j,j,j,j,j,j,j,j,j,!0,!0,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j),A.y,!0,j,!0,j,!1,j,A.ai,j,j,j,j,j,j,j,j,j,5,2,j,!1,"\u2022",j,j,j,j,j,!1,j,j,!1,j,!0,j,A.a9,j,j,j,j,j,j,j,j,j,j,j,D.aON,!0,A.a5,j,A.am,j,j,j,j)
r=B.a([],v)
for(q=0;q<6;++q){p=D.cTH[q]
o=A.c.j(0.06)
n=k.e?j:new C.eU5(k,p)
r.push(B.mB(j,o,new B.x(p,j,Ay.SN,j,j,j,j,j,j,j,j,j),j,n,j,j,P.uI,j))}w=B.a([w,A.aA,u,A.an,t,A.aA,s,A.S,B.bZ(A.bB,r,A.bs,8,8)],v)
u=k.r
if(u!=null)A.d.v(w,B.a([A.ac,B.d(u,j,j,j,j,j,j,D.aO1,j,j,j)],v))
w.push(A.aP)
u=k.e
t=u?j:k.gc5H()
s=B.m(18)
r=B.m(18)
u=u?B.a([A.bo.j(0.5),A.ff.j(0.5)],x.O):D.csc
o=B.a([new B.ac(0,A.G,A.bo.j(0.35),A.cv,16)],x.V)
n=A.c.j(0.22)
m=k.e
l=m?D.e3y:D.bJn
n=B.p(j,l,A.f,j,j,new B.o(n,j,j,j,j,j,A.a6),j,30,j,j,j,j,j,30)
w.push(B.aF(!1,A.a1,!0,j,B.aK(!1,s,!0,B.ez(B.A(B.a([n,A.av,B.d(m?k.f:"Make the change",j,j,j,j,j,j,A.i3,j,j,j)],v),A.m,j,A.bb,A.j,0,j,j),j,new B.o(j,j,j,r,o,new B.a7(A.a3,A.a7,A.x,u,j,j),A.n),54,j,j),j,!0,j,j,j,j,j,j,j,j,j,j,j,t,j,j,j,j,j,j,j),A.f,A.K,0,j,j,j,j,j,A.ag))
return new B.C(new B.Q(0,0,0,h.f.d),B.p(j,B.bm(!0,B.cd(B.v(w,A.aj,j,A.e,A.j,0,A.p),A.r,j,A.y,j,A.vf,j,j,A.ah),!0,!1,A.af,!0,!1),A.f,j,new B.aY(0,680,0,i.a.b*0.85),D.a9X,j,j,j,j,j,j,j,j),j)}}
C.b_L.prototype={}
C.aCI.prototype={
T(){return new C.biz(null,null)}}
C.biz.prototype={
gawd(){var w,v=this,u=v.d
if(u===$){w=B.bj(null,A.pz,null,1,null,v)
w.cH(0)
v.d!==$&&B.bM()
v.d=w
u=w}return u},
q(){this.gawd().q()
this.btD()},
B(d){var w=null,v=this.a.d
return B.aE(w,B.c6(this.gawd(),new C.ea7(this),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,!1,A.a8)}}
C.bg6.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m
for(w=this.b*2,v=e.a,u=e.b,t=d.a,s=0;s<7;++s){r=0.5+0.5*Math.sin(w+s*1.7)
q=D.cZf[s]
p=q.a*v
q=q.b*u
$.X()
o=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
o.r=D.x5.j(0.25+r*0.6).gp(0)
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
C.aqA.prototype={
a4(){return"NgmyTextCommand."+this.b}}
C.Z2.prototype={
T(){return new C.aA9()}}
C.aA9.prototype={
gahp(){var w,v="colorful",u=this.d
if(u===$){w=this.a.c.CW
w=C.agb(w==null?"":w,v)
u=w==null?null:w.b
u=this.d=u==null?v:u}return u},
gzT(){var w=this.e
return w===$?this.e=C.fW_(this.a.c).t(0,D.Cm):w},
a7v(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$a7v=B.e(function(a0,a1){if(a0===1){t.push(a1)
w=u}for(;;)switch(w){case 0:s.m(new C.dg8(s))
u=3
r=A.d.iD(D.vK,new C.dg9(s))
q=B.da(C.fW_(s.a.c),x.Q)
l=q
J.hC(l,D.Cm)
p=l
if(s.gzT())J.cf(p,D.Cm)
q=s.a.c.CW
if(q==null)q=""
k=r.a
j=s.gzT()?" with Luxury FX":""
i=s.a
h=i.d
i=C.fW0(i.c)
g=C.fW1(s.a.c)
w=6
return B.b(C.bAs(h,s.a.c.a,p,i,null,q,g,'Change the look: use the style "'+k+'"'+j+". Keep every word, slide, bullet, picture and the logo exactly as they are."),$async$a7v)
case 6:o=a1
j=o.CW
q=j==null?"":j
q=C.agb(q,s.gahp())
f=q==null?null:q.b
n=f==null?s.gahp():f
if(!J.z(n,r.a)&&!s.gzT())throw B.U("The AI did not change the look. Try again.")
q=s.c
if(q!=null)B.a5(q,!1).N(o)
u=1
w=5
break
case 3:u=2
d=t.pop()
m=B.a9(d)
if(s.c!=null)s.m(new C.dga(s,m))
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$a7v,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=B.O(d).ax.a===A.I,l=m?A.c:A.M,k=m?A.aR:A.ak,j=m?A.M:A.c,i=B.m(28),h=B.I(m?A.bF:A.aL,A.q,1),g=x.p,f=B.D(B.v(B.a([B.d("Look and feel",n,n,n,n,n,n,B.l(n,n,l,n,n,n,n,n,n,n,n,20,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),A.bA,B.d("Your words, pictures and logo stay the same.",n,n,n,n,n,n,B.l(n,n,k,n,n,n,n,n,n,n,n,12.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],g),A.F,n,A.e,A.j,0,A.p),1),e=o.f?n:new C.dgd(d)
e=B.A(B.a([f,B.aH(n,n,n,n,B.W(A.cy,k,n,n,n,n),n,n,n,e,n,n,n,n,n,n)],g),A.m,n,A.e,A.j,0,n,n)
f=B.a([],g)
for(w=0;w<11;++w){v=D.vK[w]
u=o.gahp()
t=o.f?n:new C.dge(o,v)
f.push(new C.bqV(v,u===v.a,t,n))}f=B.lU(1.25,f,3,10,10,n,A.dQ,!0)
u=B.m(18)
t=o.gzT()?D.bUO:n
if(o.gzT())s=n
else s=m?A.bm:A.bM
r=B.W(A.dW,o.gzT()?A.c:k,n,n,n,n)
q=B.d("Luxury FX",n,n,n,n,n,n,B.l(n,n,o.gzT()?A.c:l,n,n,n,n,n,n,n,n,n,n,n,A.H,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
q=B.D(B.v(B.a([q,B.d("Moving light and ornaments, a new royal look each time",n,n,n,n,n,n,B.l(n,n,o.gzT()?A.ad:k,n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],g),A.F,n,A.e,A.j,0,A.p),1)
p=o.gzT()
f=B.a([f,A.aA,B.p(n,B.A(B.a([r,A.av,q,B.aux(n,A.c,n,A.bK,!1,A.y,n,n,n,n,n,n,o.f?n:new C.dgf(o),n,n,n,n,n,n,n,n,p)],g),A.m,n,A.e,A.j,0,n,n),A.f,n,n,new B.o(s,n,n,u,n,t,A.n),n,n,n,n,H.agk,n,n,n)],g)
u=o.r
if(u!=null)A.d.v(f,B.a([A.S,B.d(u,n,n,n,n,n,n,D.f1K,n,n,n)],g))
f=B.cd(B.v(f,A.F,n,A.e,A.j,0,A.p),A.r,n,A.y,n,A.F6,n,n,A.ah)
u=o.f?n:o.gbyG()
t=B.bk(A.K,n,n,n,n,n,A.af,n,new B.b7(B.m(16),A.Y),n,n,n)
s=B.m(16)
return B.bm(!0,B.p(n,B.v(B.a([new B.C(D.brA,e,n),new B.dm(1,A.ci,f,n),new B.C(A.F5,new B.a6(1/0,50,B.bJ(B.ez(B.av(o.f?A.rv:D.fii,n,n,n),n,new B.o(n,n,n,s,n,D.bTo,A.n),n,n,n),u,t),n),n)],g),A.m,n,A.e,A.Q,0,A.p),A.f,n,n,new B.o(j,n,h,i,n,n,A.n),n,n,n,A.tt,n,n,n,n),!0,!1,A.af,!0,!0)}}
C.bqV.prototype={
B(d){var w=null,v=this.c,u=A.d.gK(v.d),t=B.m(16),s=u.a,r=B.a([B.b0(s),B.b0(u.b)],x.O),q=this.d,p=B.I(q?A.c:A.K,A.q,2.5)
s=q?B.a([new B.ac(0,A.G,B.b0(s).j(0.5),A.J,12)],x.V):w
v=B.a([new B.bH(A.l_,w,w,B.W(v.c,A.ad,w,w,w,18),w),new B.bH(A.lu,w,w,B.d(v.b,w,w,w,w,w,w,D.f1I,w,w,w),w)],x.p)
if(q)v.push(D.aUy)
return B.aE(w,B.dg(w,new B.an(A.W,w,A.aa,A.r,v,w),w,w,A.bc,new B.o(w,w,p,t,s,new B.a7(A.ax,A.aC,A.x,r,w,w),A.n),A.eE,w,w,w,A.ck,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,this.e,w,w,w,w,w,w,!1,A.a8)}}
C.ea4.prototype={
aDK(d,e,f){return e+"@"+A.a.aT(A.o.fQ(f==null?this.a.c:f,16),8,"0").toUpperCase()},
we(d,e){return this.aDK(0,e,null)}}
C.aKH.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bv()}}
C.b_H.prototype={
B(d){var w,v,u=null,t=C.fUQ(this.c)
if(t==null)w=D.bjT
else{w=B.aI(d,u,x.w).w.cFj(D.bo7,D.eJL)
v=this.d
w=B.uh(B.e0(B.amY(!1,t,!1,v,!1,390),!v,u),w)}return B.f2(A.A,new B.a6(416,870,new C.bkc(w,u),u),A.f,A.dt)}}
C.bkc.prototype={
B(d){var w,v,u,t=null,s=B.a([],x.p)
for(w=0;w<3;++w){v=D.d9r[w]
u=new B.aV(3,3)
s.push(new B.cK(v.a,v.b,t,t,t,t,B.p(t,t,A.f,t,t,new B.o(t,t,t,new B.bq(u,u,u,u),t,D.anp,A.n),t,v.c,t,t,t,t,t,5),t))}for(w=0;w<2;++w){v=D.daC[w]
u=new B.aV(3,3)
s.push(new B.cK(t,v.a,-3,t,t,t,B.p(t,t,A.f,t,t,new B.o(t,t,t,new B.bq(u,u,u,u),t,D.anp,A.n),t,v.b,t,t,t,t,t,5),t))}s.push(B.bY(0,B.c_(t,new B.o(t,t,t,B.m(64),D.cJW,D.bRP,A.n),A.bd),0,0,0))
s.push(B.bY(3,B.c_(t,new B.o(A.w,t,t,B.m(61),t,t,A.n),A.bd),3,3,3))
s.push(B.bY(13,B.bv(B.m(51),B.ej(this.c,A.w,!0),A.aq),13,13,13))
u=B.m(20)
s.push(B.ao(t,B.av(B.p(D.aUK,B.p(t,t,A.f,t,t,D.aYZ,t,11,t,t,t,t,t,11),A.f,t,t,new B.o(A.w,t,t,u,t,t,A.n),t,36,t,t,t,t,t,122),t,t,t),t,t,0,0,25,t))
s.push(B.bY(13,B.e0(B.bv(B.m(51),D.blc,A.aq),!0,t),13,13,13))
s.push(B.ao(22,B.e0(B.av(B.p(t,t,A.f,t,t,new B.o(A.ad,t,t,B.m(3),t,t,A.n),t,5,t,t,t,t,t,134),t,t,t),!0,t),t,t,0,0,t,t))
return new B.an(A.W,t,A.aa,A.f,s,t)}}
C.l6.prototype={
ph(){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=4280640491,j=4280172719,i=4294967295,h="Thank You",g=C.cC(),f=C.cC(),e=m.r
f=C.en(A.L,!1,e.l(),A.aD,"",k,42,A.bl,A.u,"",0.22,f,l,"","",0,!1,"",0,D.be,j,2,"Your Presentation Title",0,0,"",D.mv,D.cQ,0.84,0.08,0.26)
w=C.cC()
v=m.w
w=C.en(A.L,!1,v.l(),A.aD,"",k,20,A.bl,A.a4,"",0.12,w,l,"","",0,!1,"",0,D.be,j,2,"Class \xb7 Subject \xb7 Date",0,0,"",D.dd,D.cQ,0.76,0.12,0.56)
u=C.cC()
t=m.d
s=x.u
t=C.rh(i,l,0,0,B.a([f,w,C.en(A.bg,!1,4279310375,A.aD,"",t.j(0.8).l(),24,A.bl,A.a4,"",0.006,u,l,"","",0,!1,"",0,D.fq,t.l(),3,"",0,0,"",D.cg,D.f_,0.3,0.35,0.72)],s),C.cC(),D.mu,"","","Welcome",D.dd)
u=C.cC()
u=C.en(A.bg,!1,e.l(),A.aD,"",k,34,A.bl,A.u,"",0.14,u,l,"","",0,!1,"",0,D.be,j,2,"Agenda",0,0,"",D.cg,D.cQ,0.84,0.08,0.08)
w=C.cC()
w=C.rh(i,l,0,0,B.a([u,C.en(A.bg,!0,v.l(),A.aD,"",k,22,A.bl,A.a4,"",0.6,w,l,"","",0,!1,"",0,D.be,j,2,"1. Introduction\n2. Core concepts\n3. Case study\n4. Discussion\n5. Summary & Q&A",0,0,"",D.u8,D.cQ,0.8,0.1,0.26)],s),C.cC(),D.mu,"","","Agenda",D.dd)
u=C.cC()
u=C.en(A.bg,!1,e.l(),A.aD,"",k,32,A.bl,A.u,"",0.14,u,l,"","",0,!1,"",0,D.be,j,2,"Main Idea",0,0,"",D.cg,D.cQ,0.84,0.08,0.08)
f=C.cC()
f=C.rh(i,l,0,0,B.a([u,C.en(A.bg,!0,v.l(),A.aD,"",k,21,A.bl,A.a4,"",0.62,f,l,"","",0,!1,"",0,D.be,j,2,"\u2022 Supporting detail\n\u2022 Evidence or example\n\u2022 Why it matters",0,0,"",D.cg,D.cQ,0.8,0.1,0.26)],s),C.cC(),D.mu,"","","Key Point 1",D.dd)
u=C.cC()
u=C.en(A.bg,!1,e.l(),A.aD,"",k,30,A.bl,A.u,"",0.12,u,l,"","",0,!1,"",0,D.be,j,2,"Compare & Contrast",0,0,"",D.cg,D.cQ,0.84,0.08,0.08)
r=C.cC()
r=C.en(A.bg,!0,v.l(),A.aD,"",k,18,A.bl,A.a4,"",0.62,r,l,"","",0,!1,"",0,D.be,j,2,"Option A\n\n\u2022 Strength\n\u2022 Example",0,0,"",D.cg,D.cQ,0.4,0.08,0.24)
q=C.cC()
q=C.rh(i,l,0,0,B.a([u,r,C.en(A.bg,!0,v.l(),A.aD,"",k,18,A.bl,A.a4,"",0.62,q,l,"","",0,!1,"",0,D.be,j,2,"Option B\n\n\u2022 Strength\n\u2022 Example",0,0,"",D.cg,D.cQ,0.4,0.52,0.24)],s),C.cC(),D.mu,"","","Key Point 2",D.dd)
r=C.cC()
r=C.en(A.L,!1,e.l(),A.aD,"",k,48,A.bl,A.u,"",0.2,r,l,"","",0,!1,"",0,D.be,j,2,h,0,0,"",D.dd,D.cQ,0.8,0.1,0.32)
e=C.cC()
p=C.Bc(l,l,l,l,D.Ci,5,!1,l,l,l,l,l,g,l,!1,l,m.b,l,l,B.a([t,w,f,q,C.rh(i,l,0,0,B.a([r,C.en(A.L,!1,v.l(),A.aD,"",k,22,A.bl,A.a4,"",0.1,e,l,"","",0,!1,"",0,D.be,j,2,"Questions?",0,0,"",D.cg,D.cQ,0.7,0.15,0.58)],s),C.cC(),D.mu,"","",h,D.dd)],x.g),"class_"+m.a,l,!1,l)
for(g=p.r,f=g.length,e=m.e,w=m.f,o=0;o<g.length;g.length===f||(0,B.L)(g),++o){n=g[o]
n.e=e.l()
n.f=w.l()}return p}}
C.Ee.prototype={
bx(d){return this.e.$1(d)}}
C.er.prototype={}
C.iV.prototype={}
C.E5.prototype={
gaJv(){var w=this.c
if(!(A.a.i(w).length!==0)){w=C.afZ(this.a)
w=w==null?null:w.c
if(w==null)w=""}return w},
a2L(d,e,f,g){var w=this,v=e==null?w.a:e,u=g==null?w.b:g,t=f==null?w.c:f
return new C.E5(v,u,t,d==null?w.d:d)},
F9(d){return this.a2L(null,d,null,null)},
aCt(d){return this.a2L(null,null,null,d)},
cFh(d,e){return this.a2L(d,e,null,null)},
b9M(d){return this.a2L(d,null,null,null)},
b9T(d){return this.a2L(null,null,d,null)}}
C.MR.prototype={
T(){return new C.bhW(new B.eN(0,$.aw()),null,null)}}
C.bhW.prototype={
a_(){var w,v=this
v.a1()
w=v.qf(new C.dRy(v))
v.e!==$&&B.aO()
v.e=w
if(v.a.e)w.j0(0)
else v.d.sp(0,3.2)},
q(){var w=this.e
w===$&&B.c()
w.q()
w=this.d
w.S$=$.aw()
w.P$=0
this.bt5()},
B(d){var w=C.afZ(this.a.c.a)
if(w==null)w=A.d.gK(D.Gt)
return B.cn(new C.dRx(this,w,C.h9N(this.a.c.d)))}}
C.bpv.prototype={
B(d){return B.nH(A.Uy,this.e,new C.eTd(this,A.k.F(this.d*0.35,1.6)-0.3))}}
C.bd0.prototype={
a5(d,e){var w=this,v=w.c.a
switch(w.b){case"fireworks":w.aRe(d,e,v)
break
case"confetti":w.bF7(d,e,v)
break
case"crown":w.bGK(d,e,v)
break
case"aurora":w.bzL(d,e,v)
break
case"champagne":w.bCZ(d,e,v)
break
case"diamonds":w.bIT(d,e,v)
break
case"starburst":w.csC(d,e,v)
break
case"balloons":w.bzZ(d,e,v)
break
case"galaxy":w.bNC(d,e,v)
break
case"redcarpet":w.cjK(d,e,v)
break
case"coins":w.bEu(d,e,v)
break
case"lanterns":w.bXF(d,e,v)
break
case"hearts":w.bVj(d,e,v)
break
case"petals":w.cf_(d,e,v)
break
case"butterflies":w.bC_(d,e,v)
break
case"neon":w.c0t(d,e,v)
break
case"disco":w.bJ3(d,e,v)
break
case"sunrise":w.cuc(d,e,v)
break
case"pearls":w.ce3(d,e,v)
break
case"snow":w.csg(d,e,v)
break
case"laurel":w.bXL(d,e,v)
break
case"ribbons":w.cmf(d,e,v)
break
case"kente":w.bXt(d,e,v)
break
case"trophy":w.cxP(d,e,v)
break
case"shooting":w.cq8(d,e,v)
break
case"bokeh":w.bAh(d,e,v)
break
case"orbits":w.cbJ(d,e,v)
break
case"flowers":w.bMU(d,e,v)
break
case"music":w.c0d(d,e,v)
break
case"mandala":w.bZF(d,e,v)
break
case"sparklers":w.csq(d,e,v)
break
case"city":w.bDO(d,e,v)
break}},
re(d,e,f,g,h){var w,v,u,t,s
if(h<=0.01)return
w=$.X()
v=B.M()
v.r=g.j(A.k.D(h,0,1)).gp(0)
v.a=A.nu
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
d.aO(u,v)
d.ai(e,f*0.18,v)},
lC(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o=e.a,n=e.b,m=Math.min(o,n)
for(w=Math.max(4,A.k.V(g*this.d)),v=i+3,u=i+4,t=i+1,s=i+2,r=i+5,q=0;q<w;++q){p=(Math.sin(f*(1.2+C.cT(q,v)*2.5)+C.cT(q,u)*6.28)+1)/2
this.re(d,new B.u(C.cT(q,t)*o,C.cT(q,s)*n),m*(0.006+0.014*C.cT(q,r))*(0.5+p),h,p*p)}},
aRe(c3,c4,c5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0=c4.a,c1=c4.b,c2=Math.min(c0,c1)
this.lC(c3,c4,c5,40,A.c,10)
w=x.O
v=[B.a([A.bK,A.aH],w),B.a([A.io,A.bz],w),B.a([A.et,A.aS],w),B.a([A.c,A.aw],w)]
for(u=c2*0.005,t=c3.a,s=c2*0.012,r=c5*30,q=46*this.d,p=c2*0.08,o=c2*0.04,n=c2*0.006,m=c2*0.008,l=0;l<7;++l){k=c5+l*2.8/7
j=A.k.bw(k/2.8)
i=A.k.F(k,2.8)/2.8
h=l*97+j*13
g=c0*(0.15+0.7*C.cT(h,1))
f=g+c0*(C.cT(h,2)-0.5)*0.15
e=c1*(0.12+0.35*C.cT(h,3))
d=v[Math.abs(A.o.F(h,4))]
if(i<0.22){a0=B.lc(new B.u(g,c1),new B.u(f,e),A.cr.av(0,i/0.22))
a0.toString
$.X()
a1=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
a1.sau(new B.a7(A.a3,A.a7,A.x,B.a([d[0].j(0),d[0]],w),null,null).aw(0,B.rj(new B.u(g,c1),a0)))
a1.c=n
a1.d=A.bO
a2=B.lc(new B.u(g,c1),a0,0.75)
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
a6=A.cr.av(0,a5)
a0=1-a5
a7=a0*a0
a0=Math.max(4,A.k.V(q))
a2=C.cT(h,4)
if(a5<0.15){a4=1-a5/0.15
$.X()
a8=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
a8.r=d[0].j(0.5*a4).gp(0)
a8.z=new B.ht(A.G,o)
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
b9.a=A.nu
a3=b9.H()
t.drawLine.apply(t,[f+b6*b3*0.82,e+b7*b3*0.82+b0,b4,b5,a3])
a3.delete()
if(a4&&C.cT(h,b1+120)>0.5)this.re(c3,new B.u(b4,b5),s,A.c,a7*(0.5+0.5*Math.sin(r+b1)))}}}},
bF7(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=a2.a,i=a2.b,h=Math.min(j,i),g=A.k.F(a3*0.25,1.6)-0.3,f=0+j,e=0+i,d=$.X(),a0=B.M()
a0.sau(new B.a7(A.ax,A.aC,A.x,D.d4t,B.a([A.k.D(g-0.15,0,1),A.k.D(g,0,1),A.k.D(g+0.15,0,1)],x.x),null).aw(0,new B.aa(0,0,f,e)))
a1.aY(new B.aa(0,0,f,e),a0)
a0=Math.max(4,A.k.V(150*this.d))
for(f=a1.a,w=i+h*0.1,i=h*0.05,e=a3*4,v=x.v,u=0;u<a0;++u){t=A.k.F(a3*(h*(0.08+0.12*C.cT(u,1)))+C.cT(u,2)*w,w)
s=C.cT(u,3)
r=Math.sin(a3*(0.8+C.cT(u,4))+u)
q=h*(0.012+0.012*C.cT(u,5))
p=Math.cos(a3*(2+3*C.cT(u,6))+u)
o=D.OY[A.o.D(A.k.bw(C.cT(u,7)*5),0,4)]
J.bz(f.save())
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
f.drawPath((t==null?m.e=new B.cF(m.gbJ().a.snapshot()):t).a,k)
k.delete()}else{t=B.cu(A.J,q*1.8*A.k.D(t,0.15,1),q)
k=n.H()
f.drawRect(B.c4(t),k)
k.delete()}f.restore()}this.lC(a1,a2,a3,25,A.bK,30)},
bGK(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=a9.a,a6=a9.b,a7=Math.min(a5,a6)
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
o.sau(new B.bR(A.A,0.5,A.x,a4,0,B.a([A.bK.j(0.22),D.b8Z],v),a4,a4).aw(0,B.bU(w,u)))
l=o.H()
o=m.gbJ().a.snapshot()
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
if(s){n=B.M()
n.sau(new B.a7(A.b0,A.b6,A.x,D.d3j,a4,a4).aw(0,new B.aa(a5,a6,o,v)))
a8.aO(i,n)
for(v=[D.ehZ,D.ec4,D.er1],o=a6+j*0.78,n=a7*0.016,g=a7*0.005,f=o-g,e=0;e<3;++e){d=v[e]
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
g.r=A.hU.gp(0)
l=g.H()
t.drawCircle(a5+k*a2,a6+n,o,l)
l.delete()}}for(v=B.wO(i),u=B.a([],x.X),o=new B.vj(v,!1,u),n=v.a,g=a7*0.008;o.C();){f=o.c
if(f===0||o.f)B.ba(B.jR(y.M));--f
o.jj()
d=u[f].b
d===$&&B.c()
d=d.a.length()
d=new B.aQ(n,v.b,a4,new B.cL([new B.GV(o,f),0,d*h,!0]),B.a([],r))
f=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
f.b=A.ae
f.c=g
f.e=A.fA
f.r=A.bK.gp(0)
l=f.H()
f=d.gbJ().a.snapshot()
t.drawPath((d.e=new B.cF(f)).a,l)
l.delete()}if(s){a3=A.k.F(b0*0.5,1)
this.re(a8,new B.u(a5+k*a3,a6+j*0.5),a7*0.04,A.c,Math.sin(a3*3.141592653589793))}this.lC(a8,a9,b0,45,A.bK,40)},
bzL(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=a9.a,a6=a9.b,a7=Math.min(a5,a6)
this.lC(a8,a9,b0,60,A.c,50)
w=[D.eBc,D.eAV,D.eAQ,D.eC7]
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
n.a=A.nu
n.z=new B.ht(A.G,s)
a2=n.H()
n=h.e
u.drawPath((n==null?h.e=new B.cF(h.gbJ().a.snapshot()):n).a,a2)
a2.delete()
n=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
n.b=A.ae
n.c=v
n.r=m.j(0.55).gp(0)
n.a=A.nu
n.z=new B.ht(A.G,v)
a2=n.H()
n=h.e
u.drawPath((n==null?h.e=new B.cF(h.gbJ().a.snapshot()):n).a,a2)
a2.delete()}for(v=Math.max(4,A.k.V(40*this.d)),a3=a6+20,t=b0*a7,a4=0;a4<v;++a4){s=A.k.F(t*(0.05+0.06*C.cT(a4,1))+C.cT(a4,2)*a3,a3)
r=C.cT(a4,3)
q=Math.sin(b0+a4)
p=C.cT(a4,4)
$.X()
n=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
n.r=A.x4.j(0.4+0.5*C.cT(a4,5)).gp(0)
n.a=A.nu
a2=n.H()
u.drawCircle(r*a5+q*a7*0.02,a6-s,a7*(0.003+0.004*p),a2)
a2.delete()}},
bCZ(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=a2.a,j=a2.b,i=Math.min(k,j),h=Math.sin(a3*1.5),g=k/2,f=j*0.5,e=i*0.55,d=$.X(),a0=B.M()
a0.sau(new B.bR(A.A,0.5,A.x,l,0,B.a([A.hE.j(0.25+0.1*h),D.Wj],x.O),l,l).aw(0,B.bU(new B.u(g,f),e)))
a1.ai(new B.u(g,f),e,a0)
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
a0.r=D.OY[A.o.F(w,4)].j(0.7).gp(0)
p=a0.H()
a0=u.e
g.drawPath((a0==null?u.e=new B.cF(u.gbJ().a.snapshot()):a0).a,p)
p.delete()}for(h=Math.max(4,A.k.V(110*this.d)),f=j*0.08,o=j*1.1,e=a3*2,w=0;w<h;++w){n=j-A.k.F(a3*(i*(0.07+0.12*C.cT(w,1)))+C.cT(w,2)*o,o)
r=k*(0.1+0.8*C.cT(w,3))+Math.sin(e+w)*i*0.015
m=i*(0.004+0.012*C.cT(w,4))
if(n<f){this.re(a1,new B.u(r,n),m*2.4,A.bK,A.k.D(n/f,0,1))
continue}$.X()
d=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
d.b=A.ae
a0=m*0.25
d.c=Math.max(0.8,a0)
d.r=A.Ag.j(0.75).gp(0)
p=d.H()
g.drawCircle(r,n,m,p)
p.delete()
d=m*0.35
t=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
t.r=A.c.j(0.8).gp(0)
p=t.H()
g.drawCircle(r-d,n-d,a0,p)
p.delete()}},
bIT(a9,b0,b1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=null,a6=b0.a,a7=b0.b,a8=Math.min(a6,a7)
this.lC(a9,b0,b1,30,A.l1,60)
for(w=Math.max(4,A.k.V(42*this.d)),v=a9.a,u=b1*2.2,t=b1*a8,s=b1*0.7,r=b1*0.8,q=x.v,p=0;p<w;++p){o=a8*(0.025+0.035*C.cT(p,1))
n=a7+o*4
m=A.k.F(t*(0.04+0.06*C.cT(p,2))+C.cT(p,3)*n,n)-o*2
l=C.cT(p,4)*a6+Math.sin(s+p)*a8*0.02
J.bz(v.save())
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
g.sau(new B.a7(A.ax,A.aC,A.x,D.d_e,a5,a5).aw(0,B.cu(A.J,k*1.2,o)))
a2=g.H()
g=f.gbJ().a.snapshot()
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
if(a4>0.85)this.re(a9,new B.u(l+o*0.2,m-o*0.3),o*0.9,A.c,(a4-0.85)/0.15)}},
csC(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=e.a,g=e.b,f=Math.min(h,g)
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
p.r=A.bK.j(r?0.12:0.07).gp(0)
m=p.H()
r=n.gbJ().a.snapshot()
w.drawPath((n.e=new B.cF(r)).a,m)
m.delete()}for(v=f*0.008,l=0;l<3;++l){k=A.k.F(a0+l*0.6,1.8)/1.8
$.X()
u=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
u.b=A.ae
r=1-k
u.c=v*r
u.r=A.bK.j(r*0.6).gp(0)
m=u.H()
w.drawCircle(h,g,f*(0.15+0.6*k),m)
m.delete()}j=A.k.bw(a0/2.4)
k=A.k.F(a0,2.4)/2.4
for(w=Math.max(4,A.k.V(70*this.d)),v=j+1,u=(1-k)*1.2,t=0;t<w;++t){s=C.cT(t,j)*3.141592653589793*2
i=f*(0.1+0.55*D.bkz.av(0,k)*(0.5+0.5*C.cT(t,v)))
this.re(d,new B.u(h+Math.cos(s)*i,g+Math.sin(s)*i),f*(0.01+0.012*C.cT(t,3)),D.OY[A.o.D(A.k.bw(C.cT(t,4)*5),0,4)],u)}},
bzZ(a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=a8.a,a5=a8.b,a6=Math.min(a4,a5)
for(w=this.d,v=Math.max(4,A.k.V(22*w)),u=a7.a,t=x.O,s=x.v,r=a9*2,q=a9*a6,p=a9*0.9,o=0;o<v;++o){n=a6*(0.045+0.035*C.cT(o,1))
m=a5+n*6
l=n*2
k=a5+l-A.k.F(q*(0.05+0.05*C.cT(o,2))+C.cT(o,3)*m,m)
j=C.cT(o,4)*a4+Math.sin(p+o*1.3)*a6*0.03
i=D.aux[A.o.F(o,6)]
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
u.drawPath((d==null?f.e=new B.cF(f.gbJ().a.snapshot()):d).a,a1)
a1.delete()
a2=B.cu(new B.u(j,k),n*2.3,l)
l=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
d=B.aq(i,A.w,0.35)
d.toString
l.sau(new B.bR(D.aUN,0.9,A.x,a3,0,B.a([A.c,i,d],t),V.auo,a3).aw(0,a2))
a1=l.H()
u.drawOval(B.c4(a2),a1)
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
l=g.gbJ().a.snapshot()
u.drawPath((g.e=new B.cF(l)).a,a1)
a1.delete()}for(w=Math.max(4,A.k.V(60*w)),m=a5+20,a5=a9*3,v=a6*0.012,t=a6*0.02,o=0;o<w;++o){s=A.k.F(q*(0.1+0.1*C.cT(o,11))+C.cT(o,12)*m,m)
r=C.cT(o,13)
J.bz(u.save())
u.translate(r*a4,s-10)
u.rotate((a5+o)*180/3.141592653589793,0,0)
s=B.cu(A.J,t,v)
$.X()
r=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
r.r=D.aux[A.o.F(o,6)].j(0.85).gp(0)
a1=r.H()
u.drawRect(B.c4(s),a1)
a1.delete()
u.restore()}},
bNC(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=b2.a,a6=b2.b,a7=Math.min(a5,a6),a8=a5/2,a9=a6/2,b0=new B.u(a8,a9)
this.lC(b1,b2,b3,50,A.c,70)
for(w=[D.eBk,D.eB0,D.eB6],v=b3*0.3,u=x.O,t=b1.a,s=0;s<3;++s){r=w[s].a
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
k=B.aq(A.bK,A.ez,g)
k.toString
d=C.cT(i,3)
$.X()
a0=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
a0.r=k.j(0.5+0.5*C.cT(i,4)).gp(0)
a0.a=A.nu
j=a0.H()
t.drawCircle(a8+m*f,a9+l*f*0.62,a7*(0.0025+0.004*d),j)
j.delete()}a8=a7*0.12
$.X()
a9=B.M()
a9.sau(new B.bR(A.A,0.5,A.x,a4,0,B.a([A.Ag.j(0.55),D.adX],u),a4,a4).aw(0,B.bU(b0,a8)))
b1.ai(b0,a8,a9)
a1=A.k.F(b3,3.5)/3.5
if(a1<0.25){a2=A.k.bw(b3/3.5)
a3=new B.u(a5*(0.1+0.5*C.cT(a2,9)),a6*0.1*C.cT(a2,8))
a5=B.lc(a3,a3.ad(0,new B.u(v,a7*0.3)),a1/0.25)
a5.toString
a6=B.lc(a3,a5,0.6)
a6.toString
a8=B.M()
a8.sau(new B.a7(A.a3,A.a7,A.x,B.a([A.c.j(0),A.c],u),a4,a4).aw(0,B.rj(a3,a5)))
a8.c=a7*0.005
a8.d=A.bO
b1.bA(a6,a5,a8)}},
cjK(b9,c0,c1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=null,b6=c0.a,b7=c0.b,b8=Math.min(b6,b7)
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
o.sau(new B.bR(A.A,0.5,A.x,b5,0,B.a([A.Ag.j(0.28),D.adX],w),b5,b5).aw(0,B.bU(new B.u(q,u),t)))
o.a=A.nu
l=o.H()
q=m.gbJ().a.snapshot()
v.drawPath((m.e=new B.cF(q)).a,l)
l.delete()}for(u=[!0,!1],q=b7*0.52,o=b8*0.012,n=b7*0.5,k=b7*0.55,j=0+b7,i=b6*0.16,h=i*0.55,g=i*0.9,f=i*0.62,e=i*0.95,d=b6-e,a0=b6-f,a1=b6-g,a2=b6-h,a3=b6-i,a4=0;a4<2;++a4){a5=u[a4]
a6=a5?0:a3
a7=B.a([],w)
for(a8=0;a8<7;++a8)a7.push((a8&1)===0?A.er:A.eM)
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
a9=m.gbJ().a.snapshot()
v.drawPath((m.e=new B.cF(a9)).a,l)
l.delete()
a9=a5?f:a0
b0=a5?e:d
b1=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
b1.r=A.hE.gp(0)
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
v=B.M()
v.sau(D.bTi.aw(0,new B.aa(0,w,0+b6,w+b7*0.22)))
b9.aO(b2,v)
for(w=Math.max(4,A.k.V(80*this.d)),b3=b7+10,b7=c1*b8,v=c1*5,r=0;r<w;++r){b4=A.k.F(b7*(0.05+0.07*C.cT(r,1))+C.cT(r,2)*b3,b3)
u=C.cT(r,3)
s=Math.sin(c1+r)
q=Math.sin(v+r)
this.re(b9,new B.u(b6*(0.15+0.7*u)+s*b8*0.01,b4),b8*(0.006+0.008*C.cT(r,4)),A.bK,0.3+0.7*((q+1)/2))}},
bEu(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=e.a,h=e.b,g=Math.min(i,h)
for(w=Math.max(4,A.k.V(55*this.d)),v=d.a,u=f*g,t=0;t<w;++t){s=g*(0.02+0.02*C.cT(t,1))
r=h+s*4
q=s*2
p=A.k.F(u*(0.12+0.12*C.cT(t,2))+C.cT(t,3)*r,r)-q
o=C.cT(t,4)*i
n=Math.cos(f*(2+3*C.cT(t,5))+t)
m=Math.abs(n)
l=B.cu(new B.u(o,p),q,q*A.k.D(m,0.12,1))
$.X()
q=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
q.sau(new B.a7(A.ax,A.aC,A.x,n>0?D.ddK:D.cxP,null,null).aw(0,l))
k=q.H()
v.drawOval(B.c4(l),k)
k.delete()
q=-(s*0.22)
j=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
j.b=A.ae
j.c=Math.max(0.6,s*0.08)
j.r=D.bhL.gp(0)
k=j.H()
v.drawOval(B.c4(new B.aa(l.a-q,l.b-q,l.c+q,l.d+q)),k)
k.delete()
if(m>0.97)this.re(d,new B.u(o+s*0.3,p-s*0.4),s*0.9,A.c,0.9)}this.lC(d,e,f,30,A.bK,110)},
bXF(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
this.lC(a3,a4,a5,50,A.c,120)
for(w=Math.max(4,A.k.V(26*this.d)),v=a3.a,u=x.O,t=a5*a2,s=a5*0.6,r=a5*9,q=x.v,p=0;p<w;++p){o=a2*(0.035+0.035*C.cT(p,1))
n=a1+o*4
m=a1+o*2-A.k.F(t*(0.03+0.04*C.cT(p,2))+C.cT(p,3)*n,n)
l=C.cT(p,4)*a0+Math.sin(s+p)*a2*0.03
k=0.8+0.2*Math.sin(r+p*3)
j=o*2.2
i=$.X()
h=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
h.sau(new B.bR(A.A,0.5,A.x,d,0,B.a([W.Ww.j(0.45*k),D.acO],u),d,d).aw(0,B.bU(new B.u(l,m),j)))
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
i=B.aq(D.b99,A.c,0.2*k)
i.toString
j.sau(new B.a7(A.b0,A.b6,A.x,B.a([D.bds,i],u),d,d).aw(0,B.cu(new B.u(l,m),o*1.4,o)))
g=j.H()
j=f.gbJ().a.snapshot()
v.drawPath((f.e=new B.cF(j)).a,g)
g.delete()
j=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
j.r=A.c.j(k).gp(0)
g=j.H()
v.drawCircle(l,m+o*0.55,o*0.12,g)
g.delete()}},
bVj(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
for(w=Math.max(4,A.k.V(40*this.d)),v=a3.a,u=x.O,t=x.v,s=a5*a2,r=a5*1.3,q=a5*6,p=0;p<w;++p){o=a2*(0.02+0.03*C.cT(p,1))
n=a1+o*4
m=A.k.F(s*(0.05+0.06*C.cT(p,2))+C.cT(p,3)*n,n)
l=C.cT(p,4)
k=Math.sin(r+p)
j=1+0.12*Math.max(0,Math.sin(q+p))
J.bz(v.save())
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
l.push(new B.pr(k*1.8,h,k*0.9,g,0,k*0.55))
l.push(new B.pr(m,g,o*1.8,h,0,m))
l.push(new B.bF())
f=D.cRG[A.o.F(p,5)]
m=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
l=B.aq(f,A.w,0.25)
l.toString
m.sau(new B.bR(A.rI,0.5,A.x,d,0,B.a([A.c,f,l],u),H.a1h,d).aw(0,B.bU(A.J,o*1.4)))
e=m.H()
m=i.gbJ().a.snapshot()
v.drawPath((i.e=new B.cF(m)).a,e)
e.delete()
v.restore()}this.lC(a3,a4,a5,30,A.io,130)},
cf_(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=e.a,g=e.b,f=Math.min(h,g)
for(w=Math.max(4,A.k.V(70*this.d)),v=d.a,u=x.v,t=a0*f,s=a0*0.9,r=a0*2,q=0;q<w;++q){p=f*(0.015+0.02*C.cT(q,1))
o=g+p*4
n=A.k.F(t*(0.05+0.06*C.cT(q,2))+C.cT(q,3)*o,o)
m=C.cT(q,4)
l=Math.sin(s+q*0.7)
J.bz(v.save())
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
m=(q&1)===0?D.csb:D.d0s
n.sau(new B.a7(A.a3,A.a7,A.x,m,i,i).aw(0,B.bU(A.J,p)))
j=n.H()
n=k.gbJ().a.snapshot()
v.drawPath((k.e=new B.cF(n)).a,j)
j.delete()
v.restore()}this.lC(d,e,a0,25,A.bK,140)},
bC_(b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=null,a7=b1.a,a8=b1.b,a9=Math.min(a7,a8)
this.lC(b0,b1,b2,40,A.bK,150)
for(w=Math.max(4,A.k.V(16*this.d)),v=b0.a,u=x.v,t=b2*9,s=b2*0.5,r=0;r<w;++r){q=a9*(0.035+0.025*C.cT(r,1))
p=Math.sin(b2*(0.15+0.1*C.cT(r,2))+r*2.1)
o=Math.sin(b2*(0.21+0.1*C.cT(r,3))+r*1.3)
n=0.25+0.75*Math.abs(Math.cos(t+r))
J.bz(v.save())
v.translate(a7*(0.5+0.45*p),a8*(0.5+0.42*o))
v.rotate(Math.sin(s+r)*0.4*180/3.141592653589793,0,0)
for(p=[-1,1],o=q*0.04,m=-q,l=q*1.4,k=0+l,j=m+q*2,i=(r&1)===0,h=q*0.2,g=q*0.8,f=q*1.2,e=m*1.3,d=m*0.1,a0=0;a0<2;++a0){a1=p[a0]
J.bz(v.save())
v.scale(a1*n,1)
a2=$.X()
a3=B.a([],u)
a4=new B.aQ(a2.r,A.ap,a6,a6,a3)
a3.push(new B.b5(0,0))
a3.push(new B.pr(f,e,l,d,h,0))
a3.push(new B.pr(q,h,g,q,0,h))
a3.push(new B.bF())
a2=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
a2.sau(new B.a7(A.a3,A.a7,A.x,i?D.d0c:D.d2O,a6,a6).aw(0,new B.aa(0,m,k,j)))
a5=a2.H()
a2=a4.gbJ().a.snapshot()
v.drawPath((a4.e=new B.cF(a2)).a,a5)
a5.delete()
a2=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
a2.b=A.ae
a2.c=Math.max(0.6,o)
a2.r=D.Ao.gp(0)
a5=a2.H()
a2=a4.e
v.drawPath((a2==null?a4.e=new B.cF(a4.gbJ().a.snapshot()):a2).a,a5)
a5.delete()
v.restore()}$.X()
p=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
p.r=D.bh2.gp(0)
p.c=q*0.1
p.d=A.bO
a5=p.H()
v.drawLine.apply(v,[0,m*0.3,0,q*0.4,a5])
a5.delete()
v.restore()}},
c0t(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=a0.a,g=a0.b,f=Math.min(h,g),e=new B.u(h/2,g/2)
for(w=a1*0.45,v=f*0.012,u=d.a,t=0;t<4;++t){s=A.k.F(w+t/4,1)
r=f*(0.2+0.7*s)
$.X()
q=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
q.b=A.ae
q.c=v
q.r=D.avz[t].j((1-s)*0.9).gp(0)
q.z=new B.ht(A.G,v)
p=r*0.3
p=B.bA(B.cu(e,r,r*1.6),new B.aV(p,p))
o=q.H()
u.drawRRect(B.ep(p),o)
o.delete()}n=h/28
for(h=n*0.15,w=n*0.7,v=n*0.3,p=f*0.01,m=0;m<28;++m){l=g*(0.05+0.18*(0.5+0.5*Math.sin(a1*(3+C.cT(m,1)*4)+m)))
k=D.avz[A.o.F(m,4)]
j=m*n+h
i=g-l
i=B.bA(new B.aa(j,i,j+w,i+l),new B.aV(v,v))
$.X()
j=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
j.r=k.j(0.85).gp(0)
j.z=new B.ht(A.a9g,p)
o=j.H()
u.drawRRect(B.ep(i),o)
o.delete()}},
bJ3(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
a0/=2
w=a2*0.12
v=new B.u(a0,w)
u=a2*0.09
for(t=Math.max(4,A.k.V(60*this.d)),s=a5*0.6,a1*=0.55,r=a2*0.004,q=a3.a,p=0;p<t;++p){o=C.cT(p,1)*3.141592653589793*2+s
n=a2*(0.2+0.8*C.cT(p,2))
m=Math.cos(o)
l=Math.sin(o)
k=[A.c,A.bK,A.mK,A.dy][A.o.F(p,4)]
j=C.cT(p,3)
$.X()
i=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
i.r=k.j(0.75).gp(0)
i.a=A.nu
i.z=new B.ht(A.G,r)
h=i.H()
q.drawCircle(a0+m*n*1.4,a1+l*n*0.5,a2*(0.008+0.01*j),h)
h.delete()}a1=$.X()
t=B.M()
t.r=A.az.gp(0)
t.c=1.2
a3.bA(new B.u(a0,0),new B.u(a0,w-u),t)
t=B.M()
t.r=A.dz.gp(0)
a3.ai(v,u,t)
J.bz(q.save())
a1=new B.aQ(a1.r,A.ap,null,null,B.a([],x.v))
a1.E(new B.kt(B.bU(v,u)))
a3.rj(0,a1)
g=u/4
for(a1=a5*g*2,t=g*0.9,s=a5*4,f=-4;f<4;++f)for(r=w+f*g,m=r+t,l=f*2.3,e=-6;e<6;++e){j=a0+e*g+A.k.F(a1,g)
i=Math.sin(e*1.7+l+s)
$.X()
d=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
d.r=B.aq(A.bn,A.c,0.4+0.6*((i+1)/2)).gp(0)
h=d.H()
q.drawRect(B.c4(new B.aa(j,r,j+t,m)),h)
h.delete()}q.restore()
a0=-u*0.4
this.re(a3,v.ad(0,new B.u(a0,a0)),u*0.6,A.c,0.6+0.4*Math.sin(a5*5))},
cuc(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=a3.a,f=a3.b,e=Math.min(g,f),d=g/2,a0=f*(1.05-0.25*A.cr.av(0,A.k.D(a4/3,0,1))),a1=new B.u(d,a0)
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
r.r=A.bK.j(0.1).gp(0)
o=r.H()
r=p.gbJ().a.snapshot()
w.drawPath((p.e=new B.cF(r)).a,o)
o.delete()}d=e*0.5
$.X()
a0=B.M()
a0.sau(new B.bR(A.A,0.5,A.x,h,0,B.a([D.b5i.j(0.6),D.acO],x.O),h,h).aw(0,B.bU(a1,d)))
a2.ai(a1,d,a0)
a0=e*0.2
d=B.M()
d.sau(D.e9R.aw(0,B.bU(a1,a0)))
a2.ai(a1,a0,d)
for(d=a4*e*0.03,a0=g*1.4,v=g*0.2,u=e*0.35,r=e*0.07,q=e*0.06,n=e*0.03,m=e*0.18,t=0;t<5;++t){l=A.k.F(d*(1+t*0.3)+C.cT(t,1)*g*1.4,a0)-v
k=f*(0.15+0.12*t)
j=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
j.r=A.c.j(0.18).gp(0)
i=B.cu(new B.u(l,k),r,u)
o=j.H()
w.drawOval(B.c4(i),o)
o.delete()
i=B.cu(new B.u(l+q,k-n),r,m)
o=j.H()
w.drawOval(B.c4(i),o)
o.delete()}this.lC(a2,a3,a4,20,A.hU,180)},
ce3(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a2.a,d=a2.b,a0=Math.min(e,d)
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
r.r=B.aq(A.cx,A.j3,s/3).j(0.55).gp(0)
k=r.H()
r=p.e
w.drawPath((r==null?p.e=new B.cF(p.gbJ().a.snapshot()):r).a,k)
k.delete()}for(v=Math.max(4,A.k.V(45*this.d)),j=d*0.95,d*=0.9,u=a3*a0,i=0;i<v;++i){h=a0*(0.012+0.02*C.cT(i,1))
g=d-A.k.F(u*(0.04+0.05*C.cT(i,2))+C.cT(i,3)*j,j)
n=C.cT(i,4)*e+Math.sin(a3+i)*a0*0.02
$.X()
t=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
t.sau(new B.bR(An.ql,0.5,A.x,f,0,D.d62,f,f).aw(0,B.bU(new B.u(n,g),h)))
k=t.H()
w.drawCircle(n,g,h,k)
k.delete()}this.lC(a1,a2,a3,25,A.c,190)},
csg(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=a0.a,f=a0.b,e=Math.min(g,f)
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
J.bz(v.save())
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
h.delete()}v.restore()}this.lC(d,a0,a1,40,A.et,200)},
bXL(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
a0/=2
a1/=2
w=new B.u(a0,a1)
v=a2*0.4
for(u=[-1,1],t=13*A.k.D(a5/2,0,1),s=a3.a,r=a2*0.05,q=a2*0.02,p=r/2,o=-q,n=0+r,m=o+q*2,l=0;l<2;++l){k=u[l]
for(j=k>0,i=0;i<A.k.dw(t);++i){h=1.5707963267948966+k*(0.35+i/13*2.2)
g=Math.cos(h)
f=Math.sin(h)
J.bz(s.save())
s.translate(a0+g*v,a1+f*v)
s.rotate((h+(j?0.6:2.541592653589793))*180/3.141592653589793,0,0)
g=B.cu(new B.u(p,0),q,r)
$.X()
f=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
f.sau(D.bT5.aw(0,new B.aa(0,o,n,m)))
e=f.H()
s.drawOval(B.c4(g),e)
e.delete()
s.restore()}}$.X()
a0=B.M()
a0.b=A.ae
a0.c=a2*0.003
a0.r=D.b9m.gp(0)
a3.ai(w,v*1.08,a0)
d=a5*0.8
this.re(a3,w.ad(0,new B.u(Math.cos(d)*v*1.08,Math.sin(d)*v*1.08)),a2*0.03,A.c,0.9)
this.lC(a3,a4,a5,40,A.bK,210)},
cmf(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=a9.a,a4=a9.b,a5=Math.min(a3,a4),a6=x.O,a7=[B.a([A.hE,A.hU],a6),B.a([A.oo,A.io],a6),B.a([A.aE,A.ez],a6)]
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
j.e=null}i.push(new B.u(e,d+a0))}for(l=new B.dw(i,s),l=new B.bW(l,l.gM(0),r);l.C();){h=l.d
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
l.sau(new B.a7(A.a3,A.a7,A.x,B.a([h,k[1],h],a6),H.avd,new B.mg(w)).aw(0,new B.aa(0,0,v,u)))
l.r=A.c.j(0.85).gp(0)
a2=l.H()
l=j.e
t.drawPath((l==null?j.e=new B.cF(j.gbJ().a.snapshot()):l).a,a2)
a2.delete()}this.lC(a8,a9,b0,40,A.c,220)},
bXt(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=b2.a,a8=b2.b,a9=Math.min(a7,a8),b0=a9*0.09
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
a2.r=D.a1k[a3].gp(0)
a4=a2.H()
s.drawRect(B.c4(new B.aa(g,i,a1,f)),a4)
a4.delete()
a2=g+r
a5=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
a5.r=D.a1k[A.o.F(a3+2,5)].gp(0)
a4=a5.H()
s.drawRect(B.c4(new B.aa(a2,e,a2+p,d)),a4)
a4.delete()}}for(w=Math.max(4,A.k.V(36*this.d)),u=b3*3,a6=a8-v,a0=0;a0<w;++a0){a8=A.k.F(n*(0.04+0.05*C.cT(a0,1))+C.cT(a0,2)*a6,a6)
v=C.cT(a0,3)
t=C.cT(a0,4)
this.re(b1,new B.u(v*a7,l-a8),a9*(0.01+0.012*t),D.a1k[A.o.F(a0,3)===0?0:4],0.5+0.5*Math.sin(u+a0))}},
cxP(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=a5.a,a2=a5.b,a3=Math.min(a1,a2)
a1/=2
a2/=2
for(w=a6*0.2,v=a3*0.03,u=a4.a,t=0;t<18;++t){s=t/18*3.141592653589793*2+w
r=Math.cos(s)
q=Math.sin(s)
$.X()
p=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
p.c=v
p.r=A.bK.j(0.06).gp(0)
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
f=B.cu(new B.u(a1+g*n*0.5,p),i,k)
e=g<0?1.5707963267948966:-1.5707963267948966
d=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
d.b=A.ae
d.c=q
d.r=A.aw.gp(0)
o=d.H()
u.drawArc.apply(u,[B.c4(f),e*57.29577951308232,180,!1,o])
o.delete()}a1=B.M()
a1.sau(new B.a7(A.a3,A.a7,A.x,D.d8e,A.auE,null).aw(0,new B.aa(v,a2,r,j)))
a4.aO(l,a1)
a0=A.k.F(a6*0.6,1.4)
if(a0<1)this.re(a4,new B.u(v+(r-v)*a0,a2+(j-a2)*0.3),a3*0.035,A.c,Math.sin(a0*3.141592653589793))
this.bF8(a4,a5,a6,60)},
bF8(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m,l=e.a,k=e.b,j=Math.min(l,k)
for(w=Math.max(4,A.k.V(g*this.d)),v=k+20,k=f*j,u=d.a,t=f*3,s=j*0.012,r=j*0.02,q=f*4,p=0;p<w;++p){o=A.k.F(k*(0.1+0.1*C.cT(p,31))+C.cT(p,32)*v,v)
n=C.cT(p,33)
J.bz(u.save())
u.translate(n*l,o-10)
u.rotate((t+p)*180/3.141592653589793,0,0)
o=B.cu(A.J,r*A.k.D(Math.abs(Math.cos(q+p)),0.2,1),s)
$.X()
n=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
n.r=D.OY[A.o.F(p,5)].gp(0)
m=n.H()
u.drawRect(B.c4(o),m)
m.delete()
u.restore()}},
cq8(a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a1.a,d=Math.min(e,a1.b)
this.lC(a0,a1,a2,70,A.c,250)
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
g.sau(new B.a7(A.a3,A.a7,A.x,B.a([A.c.j(0),A.bK],s),null,null).aw(0,B.rj(new B.u(l,h),i)))
g.c=r
g.d=A.bO
f=g.H()
q.drawLine.apply(q,[l,h,k,j,f])
f.delete()
this.re(a0,i,p,A.c,1-m)}},
bAh(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=e.a,i=e.b,h=Math.min(j,i)
for(w=Math.max(4,A.k.V(36*this.d)),v=f*0.2,u=f*0.17,t=f*0.8,s=d.a,r=0;r<w;++r){q=h*(0.03+0.09*C.cT(r,1))
p=A.k.F(C.cT(r,2)*j+Math.sin(v+r)*h*0.12,j)
o=A.k.F(C.cT(r,3)*i+Math.cos(u+r*1.3)*h*0.1,i)
n=0.12+0.18*(0.5+0.5*Math.sin(t+r))
$.X()
m=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
l=A.o.F(r,5)
m.r=D.ax0[l].j(n).gp(0)
m.a=A.nu
m.z=new B.ht(A.G,q*0.12)
k=m.H()
s.drawCircle(p,o,q,k)
k.delete()
m=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
m.b=A.ae
m.c=Math.max(0.6,q*0.05)
m.r=D.ax0[l].j(n*1.4).gp(0)
k=m.H()
s.drawCircle(p,o,q,k)
k.delete()}},
cbJ(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=e.a,i=e.b,h=Math.min(j,i)
j/=2
i/=2
for(w=d.a,v=f*0.05,u=h*0.003,t=h*0.012,s=h*0.03,r=h*0.02,q=0;q<4;++q){J.bz(w.save())
w.translate(j,i)
w.rotate((q*3.141592653589793/4+v)*180/3.141592653589793,0,0)
p=B.cu(A.J,h*(0.28+q*0.05),h*(0.8+q*0.12))
$.X()
o=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
o.b=A.ae
o.c=u
o.r=A.bK.j(0.45).gp(0)
n=o.H()
w.drawOval(B.c4(p),n)
n.delete()
m=f*(0.9+q*0.25)+q
o=Math.cos(m)*(p.c-p.a)/2
l=Math.sin(m)*(p.d-p.b)/2
k=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
k.r=A.hU.gp(0)
n=k.H()
w.drawCircle(o,l,t,n)
n.delete()
k=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
k.r=A.hE.j(0.4).gp(0)
k.z=new B.ht(A.G,r)
n=k.H()
w.drawCircle(o,l,s,n)
n.delete()
w.restore()}this.lC(d,e,f,45,A.bK,270)},
bMU(a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=a6.a,a3=a6.b,a4=Math.min(a2,a3)
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
g=D.cYu[A.o.F(o,5)]
J.bz(v.save())
v.translate(l.a,l.b)
v.rotate((t+o)*180/3.141592653589793,0,0)
for(l=-h*0.7,j=h*0.7,i=h*1.3,f=h*1.4,e=0;e<6;++e){v.rotate(59.99999999999999,0,0)
d=B.cu(new B.u(0,l),i,j)
$.X()
a0=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
a0.sau(new B.a7(A.b0,A.b6,A.x,B.a([A.c,g],u),null,null).aw(0,B.cu(new B.u(0,l),f,h)))
a1=a0.H()
v.drawOval(B.c4(d),a1)
a1.delete()}$.X()
l=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
l.r=A.hE.gp(0)
a1=l.H()
v.drawCircle(0,0,h*0.3,a1)
a1.delete()
v.restore()}this.lC(a5,a6,a7,30,A.hU,280)},
c0d(a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=a6.a,a3=a6.b,a4=Math.min(a2,a3)
for(w=[0,1],v=a4*0.008,u=a5.a,t=a7*0.6,s=a3/2,r=0;r<2;++r){q=w[r]
for(p=q===0,o=a2*q,n=0;n<4;++n){m=A.k.F(t+n/4,1)
l=B.bU(new B.u(o,s),a4*(0.1+0.6*m))
k=p?-1.0471975511965976:2.0943951023931953
$.X()
j=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
j.b=A.ae
j.c=v
j.r=D.atK[n].j((1-m)*0.8).gp(0)
i=j.H()
u.drawArc.apply(u,[B.c4(l),k*57.29577951308232,119.99999999999999,!1,i])
i.delete()}}for(w=Math.max(4,A.k.V(26*this.d)),h=a3+30,v=a7*a4,t=a7*1.5,g=0;g<w;++g){f=a3-A.k.F(v*(0.06+0.06*C.cT(g,1))+C.cT(g,2)*h,h)
e=C.cT(g,3)*a2+Math.sin(t+g)*a4*0.04
d=a4*(0.015+0.012*C.cT(g,4))
a0=D.atK[A.o.F(g,4)]
$.X()
a1=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
a1.r=a0.gp(0)
J.bz(u.save())
u.translate(e,f)
u.rotate(-17.188733853924695,0,0)
s=B.cu(A.J,d,d*1.5)
i=a1.H()
u.drawOval(B.c4(s),i)
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
bZF(a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=a8.a,a5=a8.b,a6=Math.min(a4,a5)
a4/=2
a5/=2
w=new B.u(a4,a5)
for(v=a7.a,u=a6*0.004,t=a6*0.003,s=x.v,r=a9*0.08,q=0;q<4;++q){p=8+q*4
o=a6*(0.2+q*0.11)
n=(q&1)===0?1:-1
J.bz(v.save())
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
d.r=B.aq(A.bK,A.mK,k).j(0.7).gp(0)
a2=d.H()
d=a1.gbJ().a.snapshot()
v.drawPath((a1.e=new B.cF(d)).a,a2)
a2.delete()
d=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
d.r=A.hU.j(0.8).gp(0)
a2=d.H()
v.drawCircle(0,l,u,a2)
a2.delete()}v.restore()}a4=a6*0.17
$.X()
a5=B.M()
a5.sau(new B.bR(A.A,0.5,A.x,a3,0,B.a([A.hE.j(0.25),D.Wj],x.O),a3,a3).aw(0,B.bU(w,a4)))
a7.ai(w,a4,a5)
this.lC(a7,a8,a9,30,A.bK,300)},
csq(b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=b1.a,a8=b1.b,a9=Math.min(a7,a8)
for(w=[-1,1],v=70*this.d,u=a9*0.003,t=b0.a,s=a7/2,a8*=0.95,r=b2*1.3,q=a9*0.008,p=a9*0.06,o=x.O,n=0;n<2;++n){m=w[n]
l=s+m*a7*0.34
k=Math.sin(r+m)*0.12
j=l+(Math.sin(k)*a9*0.45-m*a9*0.08)
i=a8+-Math.cos(k)*a9*0.45
$.X()
h=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
h.r=A.bn.gp(0)
h.c=q
h.d=A.bO
g=h.H()
t.drawLine.apply(t,[l,a8,j,i,g])
g.delete()
l=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
l.sau(new B.bR(A.A,0.5,A.x,null,0,B.a([A.hU,A.hE.j(0.6),D.Wj],o),null,null).aw(0,B.bU(new B.u(j,i),p)))
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
a6.r=B.aq(A.hU,A.aH,d).j(1-d).gp(0)
a6.c=Math.max(0.8,u)
a6.d=A.bO
a6.a=A.nu
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
g.delete()}}}this.lC(b0,b1,b2,35,A.bK,310)},
bDO(a9,b0,b1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=b0.a,a8=b0.b
this.aRe(a9,new B.at(a7,a8*0.75),b1*0.9)
w=Math.min(a7,a8)
for(v=w*0.01,u=w*0.008,t=w*0.012,s=w*0.016,r=a9.a,q=w*0.025,p=w*0.035,o=0,n=0;o<a7;){m=w*(0.08+0.1*C.cT(n,1))
l=a8*(0.14+0.24*C.cT(n,2))
k=a8-l
j=new B.aa(o,k,o+m,k+l)
$.X()
i=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
i.sau(D.bU0.aw(0,j))
h=i.H()
r.drawRect(B.c4(j),h)
h.delete()
g=A.k.bw(m/q)
f=A.k.bw(l/p)
for(i=o+u,k+=t,e=n*50,d=0;d<g;++d)for(a0=i+d*w*0.025,a1=a0+t,a2=e+d,a3=d*1.7,a4=0;a4<f;++a4){if(!(Math.sin(b1*(0.3+C.cT(a2,a4))+a3+a4*2.3+n)>0.2))continue
a5=k+a4*w*0.035
$.X()
a6=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
a6.r=A.bK.j(0.85).gp(0)
h=a6.H()
r.drawRect(B.c4(new B.aa(a0,a5,a1,a5+s)),h)
h.delete()}o+=m+v;++n}},
aq(d){return d.b!==this.b||d.d!==this.d}}
C.aYB.prototype={
B(d){var w,v=null,u=new C.c6E(),t=new C.c6G(this,u,d),s=B.a([u.$4$child$label$onTap$selected(B.p(v,D.amy,A.f,A.c.j(0.05),v,v,v,v,v,v,v,v,v,v),"None",new C.c6F(this),this.c.a.length===0)],x.p)
for(w=0;w<32;++w)s.push(t.$1(D.Gt[w]))
return B.bZ(A.bB,s,A.bs,12,10)}}
C.YB.prototype={
T(){return new C.ayx()}}
C.ayx.prototype={
gvl(){var w=this.d
return w===$?this.d=this.a.c:w},
gaY5(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new B.ar(new B.bb(w.b,A.b3,A.aN),$.aw())}return v},
gawe(){var w,v,u=this,t=u.f
if(t===$){w=u.a.c.gaJv()
v=$.aw()
u.f!==$&&B.bM()
t=u.f=new B.ar(new B.bb(w,A.b3,A.aN),v)}return t},
q(){var w=this.gaY5(0),v=$.aw()
w.S$=v
w.P$=0
w=this.gawe()
w.S$=v
w.P$=0
this.a2()},
Zi(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Zi=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hW().BI(90,700,700,A.eG),$async$Zi)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.ff(),$async$Zi)
case 8:p=e
o=q.b.toLowerCase()
n=J.agT(o,".png")?"image/png":"image/jpeg"
r.m(new C.d5n(r,n,p))
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
return B.i($async$Zi,v)},
aY4(d){var w=null,v=A.c.j(0.07)
return B.br(w,new B.b4(4,B.m(12),A.Y),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,A.aOS,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=C.afZ(p.gvl().a)
if(n==null)n=A.d.gK(D.Gt)
w=p.gvl()
v=p.r
u=x.p
v=B.D(new B.an(A.W,o,A.aa,A.r,B.a([B.bY(0,new C.MR(p.gvl(),!1,!0,new B.cw(w.a+v,x.W)),0,0,0),B.ao(o,B.Hd(A.mp,new C.d5s(d),B.nr(o,A.aX,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o),o,o,8,o,8,o),B.ao(o,B.Hd(D.bDW,new C.d5t(p),B.nr(o,A.aX,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),"Play again"),o,o,o,8,8,o)],u),o),1)
w=B.d(n.b,o,o,o,o,o,o,E.aOM,o,o,o)
t=B.D(B.aL(o,A.T,!1,o,!0,A.r,o,B.aM(),p.gaY5(0),o,o,o,o,o,2,p.aY4("Big words"),A.y,!0,o,!0,o,!1,o,A.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.d5u(p),o,o,o,!1,o,o,!1,o,!0,o,A.a9,o,o,o,o,o,o,o,o,o,o,o,A.ho,!0,A.a5,o,A.am,o,o,o,o),1)
s=A.c.j(0.07)
r=B.I(A.hE.j(0.6),A.q,1)
if(p.gvl().d.length===0)q=D.bHe
else{q=C.h9N(p.gvl().d)
if(q==null)q=new Uint8Array(0)
q=B.hS(B.fL(q,A.A,o,o,A.co,A.bQ,!1,o,!1,o,o),A.aq)}r=B.a([t,A.ab,B.aE(o,B.p(o,q,A.f,o,o,new B.o(s,o,r,o,o,o,A.a6),o,48,o,o,o,o,o,48),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gc5I(),o,o,o,o,o,o,!1,A.a8)],u)
if(p.gvl().d.length!==0)r.push(B.aH(o,o,o,o,D.a07,o,o,o,new C.d5v(p),o,o,o,o,"Remove logo",o))
return B.c8(o,A.w,B.bm(!0,B.v(B.a([v,B.p(o,B.v(B.a([w,A.S,B.A(r,A.m,o,A.e,A.j,0,o,o),A.P,B.aL(o,A.T,!1,o,!0,A.r,o,B.aM(),p.gawe(),o,o,o,o,o,2,p.aY4("Line under it"),A.y,!0,o,!0,o,!1,o,A.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.d5w(p),o,o,o,!1,o,o,!1,o,!0,o,A.a9,o,o,o,o,o,o,o,o,o,o,o,A.dl,!0,A.a5,o,A.am,o,o,o,o),A.ac,B.dp(D.bG9,D.frI,new C.d5x(p,d),B.bk(A.aw,o,o,o,A.w,o,A.cf,o,new B.b7(B.m(14),A.Y),o,o,o))],u),A.aj,o,A.e,A.Q,0,A.p),A.f,o,o,D.aZ9,o,o,o,o,A.F2,o,o,o)],u),A.m,o,A.e,A.j,0,A.p),!0,!1,A.af,!0,!0),o,!1,!1,o,o)}}
C.aKa.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bv()}}
C.YW.prototype={
T(){return new C.beu(new B.ar(A.as,$.aw()))}}
C.beu.prototype={
q(){var w=this.d
w.S$=$.aw()
w.P$=0
this.a2()},
B(d){var w,v,u,t,s,r,q,p,o=null,n=B.O(d).ax.a===A.I,m=n?A.c:A.M,l=n?A.aR:A.ak,k=B.aI(d,A.bT,x.w).w,j=n?A.M:A.c,i=B.m(28),h=B.I(n?A.bF:A.aL,A.q,1),g=x.p,f=B.A(B.a([B.D(B.d("Choose an icon",o,o,o,o,o,o,B.l(o,o,m,o,o,o,o,o,o,o,o,19,o,o,A.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),1),B.aH(o,o,o,o,B.W(A.cy,l,o,o,o,o),o,o,o,new C.dc8(d),o,o,o,o,o,o)],g),A.m,o,A.e,A.j,0,o,o),e=B.a([],g)
for(w=0;w<5;++w){v=D.cJl[w]
u=B.a([],g)
for(t=J.aW(v.b);t.C();){s=t.gU(t)
r=new B.aV(12,12)
q=new B.aV(12,12)
p=n?A.c.j(0.06):A.bM
u.push(B.aK(!1,new B.bq(r,r,r,r),!0,B.p(A.A,new B.x(s,o,A.uv,o,o,o,o,o,o,o,o,o),A.f,o,o,new B.o(p,o,o,new B.bq(q,q,q,q),o,o,A.n),o,44,o,o,o,o,o,44),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.dc9(this,s),o,o,o,o,o,o,o))}A.d.v(e,B.a([new B.C(A.hI,new B.x(v.a.toUpperCase(),o,new B.G(!0,l,o,o,o,o,10.5,A.u,o,1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o,o,o,o,o,o,o),o),new B.BQ(A.bB,6,6,A.bs,u,o)],g))}e.push(A.aA)
e.push(B.d("YOUR OWN",o,o,o,o,o,o,B.l(o,o,l,o,o,o,o,o,o,o,o,10.5,o,o,A.u,o,o,!0,o,1,o,o,o,o,o,o),o,o,o))
e.push(A.P)
v=B.l(o,o,m,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
u=n?A.bm:A.aQ
e.push(B.A(B.a([B.D(B.aL(o,A.T,!1,o,!0,A.r,o,B.aM(),this.d,o,o,o,o,o,2,B.br(o,new B.b4(4,B.m(14),A.Y),o,o,o,o,o,o,!0,o,o,o,o,o,o,u,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,"Type or paste any icon",o,o,o,o,o,!0,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),A.y,!0,o,!0,o,!1,o,A.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,A.a9,o,o,o,o,o,o,o,o,o,o,o,v,!0,A.a5,o,A.am,o,o,o,o),1),A.ab,B.bJ(A.aPI,new C.dca(this),o)],g),A.m,o,A.e,A.j,0,o,o))
e.push(A.P)
return B.bm(!0,B.p(o,B.v(B.a([f,new B.dm(1,A.ci,B.cB(e,o,o,o,o,A.ah,!0),o)],g),A.F,o,A.e,A.Q,0,A.p),A.f,o,new B.aY(0,1/0,0,k.a.b*0.8),new B.o(j,o,h,i,o,o,A.n),o,o,o,A.tt,A.XX,o,o,o),!0,!1,A.af,!0,!0)}}
C.bdS.prototype={
a5(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=new B.eP()
a2.dG(this.c)
w=this.b
v=w/6.283185307179586
$.X()
u=B.M()
u.z=A.Qx
t=B.M()
for(s=a3.a,r=this.d,q=w*2,p=a4.a,o=a4.b,n=0;n<46;++n){m=a2.aj()
l=a2.aj()
k=a2.aj()
j=0.8+a2.aj()*2.2
i=Math.sin(w*(3+a2.aA(4))+n)
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
C.bdz.prototype={
a5(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null,a1=B.bA(new B.aa(0,0,0+a7.a,0+a7.b),A.kq),a2=this.b,a3=Math.sin(a2*2),a4=$.X(),a5=B.M()
a5.b=A.ae
a5.c=6
w=this.c
a5.r=w.j(0.12+(0.5+a3*0.5)*0.18).gp(0)
a5.z=A.lj
a6.aD(a1,a5)
a5=x.v
a4=new B.aQ(a4.r,A.ap,a0,a0,B.a([],a5))
a4.E(new B.iT(a1))
v=new B.RS(new B.vj(B.wO(a4),!1,B.a([],x.X))).gK(0)
a4=v.a
a3=v.b
a4.jj()
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
f=k.gbJ().a.snapshot()
q.drawPath((k.e=new B.cF(f)).a,g)
g.delete()}else{k=new B.aQ(r,k,a0,new B.cL([v,i,t,!0]),B.a([],a5))
g=j.H()
f=k.gbJ().a.snapshot()
q.drawPath((k.e=new B.cF(f)).a,g)
g.delete()
k=new B.aQ(r,a2.b,a0,new B.cL([v,0,h,!0]),B.a([],a5))
g=j.H()
f=k.gbJ().a.snapshot()
q.drawPath((k.e=new B.cF(f)).a,g)
g.delete()}}a4.jj()
e=u[a3].Md(n).a
$.X()
k=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
k.r=w.gp(0)
k.z=A1.mt
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
C.bmn.prototype={
a5(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=new B.eP()
e.dG(this.c)
w=a0.a*(0.2+e.aj()*0.6)
v=e.h8()?-0.1:1.1
v=a0.b*v
u=new B.u(w,v)
t=a0.galw()*1.4
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
j.sau(B.aTI(u,t,B.a([s.j(0.16),s.j(0)],r),f,A.x,f,f,0))
j.z=A.jk
g=j.H()
j=h.gbJ().a.snapshot()
q.drawPath((h.e=new B.cF(j)).a,g)
g.delete()}},
aq(d){return d.b!==this.b}}
C.b8w.prototype={
a5(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=new B.eP()
a0.dG(this.c*7+3)
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
e.z=new B.ht(A.G,k*0.35)
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
C.b89.prototype={
a5(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=new B.eP()
a0.dG(this.c+11)
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
i.z=new B.ht(A.G,u)
d=i.H()
i=g.e
t.drawPath((i==null?g.e=new B.cF(g.gbJ().a.snapshot()):i).a,d)
d.delete()}},
aq(d){return d.b!==this.b}}
C.btf.prototype={
a5(d,e){var w,v,u=new B.aa(0,0,0+e.a,0+e.b),t=Math.sin(this.b)
$.X()
w=B.M()
t=(0.5+0.5*t)*0.12
w.sau(new B.bR(A.A,0.95,A.x,null,0,B.a([A.K,A.w.j(0.28+t)],x.O),D.cQt,null).aw(0,u))
d.aY(u,w)
w=u.cG(-3)
v=B.M()
v.b=A.ae
v.c=2
v.r=this.c.j(0.1+t).gp(0)
v.z=A.jk
d.aY(w,v)},
aq(d){return d.b!==this.b}}
C.bqi.prototype={
a5(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this.b/6.283185307179586*3
for(w=a1.a,v=Math.abs(w),u=a1.b,t=Math.abs(u),s=this.d,r=a0.a,q=this.c*31+A.k.bw(d)*7,p=0;p<7;++p){o=new B.eP()
o.dG(q+p)
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
g.z=new B.ht(A.G,k*0.3)
h=g.H()
r.drawCircle(n,m,k*0.35,h)
h.delete()}},
aq(d){return d.b!==this.b}}
C.bpr.prototype={
a5(d,e){var w,v,u=this.b/6.283185307179586*2.2-0.6
if(u<-0.3||u>1.3)return
w=new B.aa(0,0,0+e.a,0+e.b)
$.X()
v=B.M()
v.a=A.nu
v.sau(new B.a7(A.ax,A.aC,A.x,B.a([A.K,B.aq(this.c,A.c,0.6).j(0.16),A.K],x.O),B.a([A.k.D(u-0.15,0,1),A.k.D(u,0,1),A.k.D(u+0.15,0,1)],x.x),null).aw(0,w))
d.aY(w,v)},
aq(d){return d.b!==this.b}}
C.bcU.prototype={
a5(d,e){var w,v,u,t,s,r=e.gee(),q=0.55+0.45*Math.sin(this.b)
$.X()
w=B.M()
w.b=A.ae
w.c=1.4
w.d=A.bO
v=this.d
w.r=v.j(0.55+q*0.35).gp(0)
u=B.M()
u.b=A.ae
u.c=4
u.r=v.j(0.12*q).gp(0)
u.z=A.rb
r=new C.d54(this,r*0.16,d,u,w)
t=e.gee()*0.045
r.$3(new B.u(t,t),1,1)
v=e.a-t
r.$3(new B.u(v,t),-1,1)
s=e.b-t
r.$3(new B.u(t,s),1,-1)
r.$3(new B.u(v,s),-1,-1)},
aq(d){return d.b!==this.b}}
C.xf.prototype={}
C.Ib.prototype={
a4(){return"NgmySlideElementType."+this.b}}
C.aq_.prototype={
a4(){return"NgmySlideAspectRatio."+this.b}}
C.uu.prototype={
a4(){return"NgmySlideShapeKind."+this.b}}
C.mp.prototype={
a4(){return"NgmySlideLayout."+this.b}}
C.hw.prototype={
a4(){return"NgmySlideTransition."+this.b}}
C.eI.prototype={
hC(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=w.Q,l=w.as,k=w.at,j=w.ay,i=w.ch,h=w.cx,g=w.cy,f=w.db,e=w.dy,d=w.fy
return C.en(l,g,m,n,f,j,q,o,p,w.go,s,w.a,k,d,w.fx,w.dx,w.k2,w.id,h,w.ax,i,w.CW,r,w.fr,w.k3,w.k1,e,w.b,t,v,u)},
ae(){var w,v=this,u=B.V(x.N,x.z)
u.n(0,"id",v.a)
u.n(0,"type",v.b.b)
u.n(0,"x",v.c)
u.n(0,"y",v.d)
u.n(0,"w",v.e)
u.n(0,"h",v.f)
u.n(0,"text",v.r)
u.n(0,"fontSize",v.w)
u.n(0,"fontWeight",v.x.gdI(0))
u.n(0,"fontStyle",v.y.a)
u.n(0,"decoration",C.hNK(v.z))
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
C.lA.prototype={
hC(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=B.T(n).k("K<1,eI>")
n=B.B(new B.K(n,new C.cc2(),m),m.k("aj.E"))
return C.rh(t,s,o,q,n,w.a,u,v,p,w.b,r)},
ae(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=B.T(n).k("K<1,a3<n,@>>")
n=B.B(new B.K(n,new C.cc3(),m),m.k("aj.E"))
return B.F(["id",w.a,"title",w.b,"notes",v,"layout",u.b,"background",t,"backgroundEnd",s,"transition",r.b,"durationSeconds",q,"slideDesignId",p,"designRevision",o,"elements",n],x.N,x.z)}}
C.hZ.prototype={
gb84(){var w=this.Q,v=w==null?null:A.a.i(w)
if(v==null)v=""
if(v.length===0)return null
return B.bi(v)},
gRC(){if(!C.kr(this.w))return!1
var w=this.gb84()
if(w==null)return!1
return new B.S(Date.now(),0,!1).cY(w.bS())},
hC(){var w,v,u,t,s,r,q,p=this,o=p.b,n=p.c,m=p.d,l=p.e,k=p.f,j=p.w,i=p.y,h=p.z,g=p.Q,f=p.as,e=p.at,d=p.ax,a0=p.ay,a1=p.ch,a2=p.CW,a3=p.cx
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
q=B.T(r).k("K<1,lA>")
r=B.B(new B.K(r,new C.cbS(),q),q.k("aj.E"))
return C.Bc(g,w,a2,a3,m,l,a0,j,s,v,t,u,p.a,d,a1,p.x,o,e,f,r,n,i,h,k)},
ae(){var w,v,u=this,t=B.V(x.N,x.z)
t.n(0,"id",u.a)
t.n(0,"name",u.b)
t.n(0,"themeId",u.c)
t.n(0,"aspectRatio",u.d.b)
t.n(0,"autoAdvanceSeconds",u.e)
t.n(0,"updatedAt",u.f.a6().ac())
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
v=B.T(w).k("K<1,a3<n,@>>")
w=B.B(new B.K(w,new C.cbT(),v),v.k("aj.E"))
t.n(0,"slides",w)
return t}}
C.jB.prototype={}
C.b_K.prototype={
B(d){return B.cn(new C.cbY(this))}}
C.and.prototype={
T(){return new C.bhG(null,null)}}
C.bhG.prototype={
gaY6(){var w,v=this,u=v.d
if(u===$){w=B.bj(null,A.h4,null,1,null,v)
w.cH(0)
v.d!==$&&B.bM()
v.d=w
u=w}return u},
q(){this.gaY6().q()
this.bsQ()},
B(d){return B.c6(this.gaY6(),new C.dDL(),this.a.c)}}
C.aJW.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bv()}}
C.acu.prototype={
Pf(d,e,f,g){return this.bMB(d,e,f,g)},
bMB(d,e,f,g){var w=0,v=B.j(x.H),u,t,s
var $async$Pf=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:w=3
return B.b(e.$0(),$async$Pf)
case 3:s=i
if(d.e==null){w=1
break}B.a5(d,!1).N(null)
t=d.I(x.q).f
t.R(B.b2(null,null,null,null,null,A.r,null,B.d(s?f:g,null,null,null,null,null,null,null,null,null,null),null,A.ed,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$Pf,v)},
B(d){var w=this,v=null,u=B.m(22),t=B.I(A.c.j(0.08),A.q,1),s=B.a([new B.ac(0,A.G,A.w.j(0.35),A.dk,24)],x.V),r=B.av(B.p(v,v,A.f,v,v,new B.o(A.b2,v,v,B.m(99),v,v,A.n),v,4,v,v,v,v,v,40),v,v,v),q=w.d,p=B.d(q?"Print your invoice":"Save your PDF",v,v,v,v,v,v,A.du,A.L,v,v),o=q?"One full letter page \u2014 tap Share then Print, or open in Safari.":w.c,n=q?3:2,m=x.p
n=B.a([r,A.aP,p,A.an,B.d(o,v,n,A.a2,v,v,v,B.l(v,v,A.c.j(0.55),v,v,v,v,v,v,v,v,12,v,v,A.a4,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v)],m)
if(!q)A.d.v(n,B.a([A.at,B.d(w.c,v,2,A.a2,v,v,v,B.l(v,v,A.c.j(0.45),v,v,v,v,v,v,v,v,11,v,v,A.a4,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v)],m))
n.push(A.d5)
n.push(B.A(B.a([B.D(new C.acM(A.hz,"Download",A.bY,new C.emb(w,d),!0,v),1),A.av,B.D(new C.acM(A.vr,"Share",A.bj,new C.emc(w,d),!1,v),1),A.av,B.D(new C.acM(A.hj,"Safari",A.aZ,new C.emd(w,d),!1,v),1)],m),A.m,v,A.e,A.j,0,v,v))
n.push(A.aA)
n.push(B.bK(!1,B.d("Cancel",v,v,v,v,v,v,B.l(v,v,A.c.j(0.6),v,v,v,v,v,v,v,v,v,v,v,A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,!0,v,v,new C.eme(d),v,v))
return B.bm(!0,new B.C(A.pC,B.v(B.a([B.p(v,B.v(n,A.aj,v,A.e,A.j,0,A.p),A.f,v,v,new B.o(A.iO,v,t,u,s,v,A.n),v,v,v,v,A.F9,v,v,1/0)],m),A.m,v,A.e,A.Q,0,A.p),v),!0,!1,A.af,!0,!0)}}
C.acM.prototype={
B(d){var w=this,v=null,u=B.m(16),t=w.r,s=t?w.e.j(0.22):A.c.j(0.06),r=B.m(16),q=B.I(t?w.e.j(0.55):A.c.j(0.1),A.q,1),p=t?w.e:A.c
p=B.W(w.c,p,v,v,v,26)
return B.aF(!1,A.a1,!0,v,B.aK(!1,u,!0,B.ez(B.v(B.a([p,A.P,B.d(w.d,v,v,v,v,v,v,B.l(v,v,A.c,v,v,v,v,v,v,v,v,12,v,v,t?A.u:A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.Q,0,A.p),v,new B.o(s,v,q,r,v,v,A.n),v,D.btW,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),A.f,A.K,0,v,v,v,v,v,A.ag)}}
C.b_I.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.c,f=g.db
if(f==="__kiapo_video__"||A.a.a0(f,"__kiapo_video___"))return new C.apb(g.at,i.d,i.as,i.at,h)
switch(g.b.a){case 0:f=i.r
w=i.d
if(f){v=2*w
u=new B.Q(v,w,v,w)}else{v=6*w
u=new B.Q(v,10*w,v,12*w)}t=i.c5J().ajF(1.35)
s=B.aur(h,h,h,g.w*w,h,h,!0,1.35,h,h,h)
v=g.as
r=i.byg(v)
if(i.e&&i.w!=null)q=B.aL(h,A.T,!1,h,!0,A.r,h,B.aM(),i.w,A.bj,h,h,h,h,2,D.bP9,A.y,!0,h,!0,h,!1,i.x,A.ai,h,h,h,new B.cw("slide_tf_"+g.a,x.W),h,A.w4,h,h,h,h,1,h,!1,"\u2022",h,i.y,h,h,h,!1,h,h,!1,h,!0,h,A.a9,h,h,h,h,h,h,h,h,h,h,s,t,!0,v,A.zf,A.am,h,A.SC,h,h)
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
w=n?t.cF4(B.b0(g.Q).j(0.45),A.cD):t
p=g.as
l=m?1:h
k=m?A.eC:A.CU
p=B.d(f,new B.cw("slide_txt_"+g.a+"_"+v,x.W),l,k,h,!m,s,w,p,h,h)
g=p}else{f=A.a.gX(v)
v=g.k1
p=g.r
if(v==="outline"){l=g.k2
k=l?A.St:s
$.X()
j=B.M()
j.b=A.ae
j.c=3*w
j.e=A.fA
j.r=A.aB.gp(0)
j=i.cmi(p,t,k,j)
k=g.r
w=new B.an(A.W,h,A.aa,A.r,B.a([j,i.cmg(k,t,l?A.St:s)],x.p),h)}else w=i.cmh(p,t,g.k2?A.St:s,m)
v=new B.n7(w,new B.cw("slide_txt_"+g.a+"_"+f+"_"+v,x.W))
g=v}q=B.aE(A.c5,g,A.y,!1,h,i.Q,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,i.z,h,h,h,h,h,h,!1,A.a8)}return new B.C(u,new B.bH(r,h,h,q,h),h)
case 1:case 4:return i.bVY()
case 3:return i.ce2()
case 2:return B.b3(h,h,h,new C.b_F(g,h),A.f0)
case 5:g=g.r
return new C.b_H(g,!i.e&&i.z==null,h)}},
c5J(){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.c,l=B.b0(m.Q),k=m.x,j=m.y,i=m.z,h=n,g=n,f=n,e=n
switch(m.k1){case"caps":h=3*o.d
w=l
k=A.u
break
case"elegant":h=1.2*o.d
w=l
k=A.jT
j=A.cD
break
case"shadow":v=o.d
e=B.a([new B.cP(D.acM,new B.u(0,4*v),8*v)],x.r)
w=l
break
case"neon":v=o.d
e=B.a([new B.cP(l,A.J,6*v),new B.cP(l,A.J,16*v),new B.cP(l.j(0.8),A.J,30*v)],x.r)
w=l
break
case"marker":k=A.u
g=A.cn
w=A.aB
break
case"stamp":h=6*o.d
w=l
k=A.u
i=A.mA
break
case"retro":v=o.d
h=2*v
v=4*v
e=B.a([new B.cP(A.bz,new B.u(v,v),0)],x.r)
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
e=B.a([new B.cP(A.b7,new B.u(-3*v,0),0),new B.cP(A.ay,new B.u(3*v,0),0)],x.r)
w=l
k=A.u
break
case"fire":v=o.d
e=B.a([new B.cP(A.ct,A.J,8*v),new B.cP(A.ay,new B.u(0,-3*v),18*v)],x.r)
k=A.u
w=W.Vp
break
case"ice":v=o.d
e=B.a([new B.cP(A.aS,A.J,10*v),new B.cP(A.cx,A.J,22*v)],x.r)
k=A.O
w=A.et
break
case"chalk":h=o.d
e=B.a([new B.cP(l.j(0.45),A.J,3*h)],x.r)
w=l
k=A.jT
break
case"comic":v=B.aq(l,A.w,0.85)
v.toString
u=B.a([],x.r)
for(t=o.d,q=0;q<8;++q){p=D.cSq[q]
u.push(new B.cP(v,new B.u(p.a*t,p.b*t),0))}u.push(new B.cP(v,new B.u(5*t,6*t),0))
e=u
w=l
k=A.u
break
case"gold":$.X()
f=B.M()
v=o.d
f.sau(D.bRw.aw(0,new B.aa(0,0,0+900*v,0+m.w*v*1.6)))
e=B.a([new B.cP(A.K_,new B.u(0,3*v),5*v)],x.r)
w=l
k=A.u
break
case"sunset":$.X()
f=B.M()
v=o.d
f.sau(D.bRR.aw(0,new B.aa(0,0,0+900*v,0+m.w*v*1.6)))
w=l
k=A.u
break
case"softglow":e=B.a([new B.cP(l,A.J,14*o.d)],x.r)
w=l
k=A.a4
break
case"lowercase":h=2*o.d
w=l
k=A.cu
break
case"double":v=o.d
u=5*v
v=10*v
e=B.a([new B.cP(l.j(0.45),new B.u(u,u),0),new B.cP(l.j(0.2),new B.u(v,v),0)],x.r)
w=l
break
case"whisper":h=6*o.d
w=l
k=A.jT
break
default:w=l}v=m.w
u=f==null?w:n
m=m.k3
m=m!==0?B.b0(m):g
return B.l(n,m,u,n,i,n,n,n,n,n,n,v*o.d,j,n,k,f,1.25,!0,n,h,n,n,n,e,n,n)},
ay7(d,e,f,g,h){var w,v,u,t,s=null,r=this.c,q=r.k1
if(D.eHf.t(0,q))w=d.toUpperCase()
else w=q==="lowercase"?d.toLowerCase():d
q=new C.cbW(h)
v=r.k2?C.i_f(w,e,q):s
if(v==null){q=q.$1(e)
r=r.as
u=g?1:s
t=g?A.eC:A.CU
return B.d(w,s,u,t,s,!g,f,q,r,s,s)}return B.X6(B.dq(v,s,s,s,s,s,s,s,s,s,s),s,s,q.$1(e),r.as)},
cmi(d,e,f,g){return this.ay7(d,e,f,!1,g)},
cmg(d,e,f){return this.ay7(d,e,f,!1,null)},
cmh(d,e,f,g){return this.ay7(d,e,f,g,null)},
byg(d){switch(d.a){case 2:return A.A
case 1:case 5:return A.a7
default:return A.a3}},
bVY(){var w,v,u=this,t=null,s=u.c,r=s.at
if(r==null||!A.a.a0(r,"data:image")){if(!u.as)return A.bH
return B.av(B.W(s.b===D.kS?A.G3:A.Bc,A.az,t,t,t,32),t,t,t)}w=u.bBd(r)
if(s.b===D.kS){s=B.m(6)
v=2*u.d
return B.p(t,w,A.f,t,t,new B.o(A.c,t,B.I(A.cp,A.q,1),s,B.a([new B.ac(0,A.G,A.w.j(0.08),A.dC,6)],x.V),t,A.n),t,1/0,t,t,new B.Q(v,v,v,v),t,t,1/0)}if(s.go.length!==0||s.id.length!==0){v=u.aMD(r,!0)
return C.fv6(s.go,v,s.id)}return w},
aMD(d,e){var w,v,u,t
try{w=C.i_y(d)
u=this.c.db
v=u==="marriage_locked_bg"||A.a.cb(u,"_bg")
u=B.cn(new C.cbV(this,w,v,e))
return u}catch(t){return D.aaC}},
bBd(d){return this.aMD(d,!1)},
ce2(){var w=this.c,v=w.at
if(v==null||v.length===0)return D.b3p
return C.i_Q(v,w.db,w.dx)}}
C.b_F.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=$.X(),g=B.M(),f=this.b
g.r=B.b0(f.ay).gp(0)
w=B.M()
w.r=B.b0(f.ch).gp(0)
w.b=A.ae
v=f.CW
w.c=v
u=e.a
t=e.b
s=new B.aa(0,0,0+u,0+t)
switch(f.ax.a){case 0:d.aY(s,g)
d.aY(s,w)
break
case 1:d.hN(s,g)
d.hN(s,w)
break
case 2:r=new B.aQ(h.r,A.ap,i,i,B.a([],x.v))
r.E(new B.b5(u/2,0))
r.E(new B.ap(u,t))
r.E(new B.ap(0,t))
r.E(new B.bF())
d.aO(r,g)
d.aO(r,w)
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
d.aO(r,g)
d.aO(r,w)
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
d.aO(r,g)
d.aO(r,w)
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
d.aO(r,g)
d.aO(r,w)
break}},
aq(d){return d.b!==this.b}}
C.aHx.prototype={
T(){return new C.bsM(null,null)}}
C.bsM.prototype={
a_(){var w,v=this
v.a1()
w=B.bj(null,A.i9,null,1,null,v)
w.cH(0)
v.d!==$&&B.aO()
v.d=w},
q(){var w=this.d
w===$&&B.c()
w.q()
this.bv5()},
aMO(d,e){var w=null,v=B.a([e,e.j(0.7)],x.O),u=B.m(8)
return B.c_(B.av(B.d(d,w,w,w,w,w,w,A.du,w,w,w),w,w,w),new B.o(w,w,w,u,w,new B.a7(A.a3,A.a7,A.x,v,w,w),A.n),A.bd)},
byu(){var w,v=this,u=null,t=v.aMO("Slide A",A.bj),s=v.aMO("Slide B",A.aZ)
if(v.a.c===D.cg)return new B.an(A.W,u,A.b_,A.r,B.a([t,B.av(B.d("No transition",u,u,u,u,u,u,B.l(u,u,A.c.j(0.7),u,u,u,u,u,u,u,u,16,u,u,A.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,u)],x.p),u)
w=v.d
w===$&&B.c()
return B.c6(w,new C.f0x(v,s,t),u)},
B(d){return this.byu()}}
C.aI9.prototype={
iX(d){return new B.aa(0,0,0+d.a*A.k.D(this.b,0,1),0+d.b)},
jD(d){return d.b!==this.b}}
C.Ug.prototype={
T(){return new C.bhT(null,null)}}
C.bhT.prototype={
a_(){var w,v,u=this
u.a1()
w=B.bj(null,A.AD,null,1,null,u)
u.d!==$&&B.aO()
u.d=w
v=u.a
if(!v.e||v.c.dy===D.cg){w.sp(0,1)
return}B.bN(B.dC(0,0,0,v.c.fr+v.f*120,0,0),new C.dPL(u),x.a)},
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
else B.bN(B.dC(0,0,0,v.c.fr+v.f*120,0,0),new C.dPK(t),x.a)}},
q(){var w=this.d
w===$&&B.c()
w.q()
this.bt4()},
B(d){var w,v=this.a
if(v.c.dy===D.cg||!v.e)return v.d
w=this.d
w===$&&B.c()
return B.c6(w,new C.dPJ(this),v.d)}}
C.Ia.prototype={
B(d){return B.cn(new C.cbO(this))}}
C.ayh.prototype={
T(){return new C.bcn()}}
C.bcn.prototype={
a_(){this.a1()
if(this.a.c!==D.cg)B.bN(A.Lj,new C.d2j(this),x.a)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=4280172719,n=q.a.c
if(n===D.cg)n=B.av(B.d("No animation on elements",p,p,p,p,p,p,B.l(p,p,A.c.j(0.75),p,p,p,p,p,p,p,p,16,p,p,A.O,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p)
else{n=n.u(0)
w=q.d
v=x.W
u=q.a.c
w=B.ao(p,new C.Ug(C.en(A.bg,!1,4279310375,A.aD,"",4294538006,24,A.bl,A.a4,"",0.2,"preview_shape",p,"","",0,!1,"",0,D.be,o,2,"",0,0,"",u,D.f_,0.84,0.08,0.12),B.p(p,p,A.f,p,p,new B.o(A.cb,p,p,B.m(14),p,p,A.n),p,72,p,p,p,p,p,72),!0,0,new B.cw("shape_"+n+"_"+w,v)),p,p,24,p,28,p)
u=u.u(0)
n=q.d
t=C.en(A.bg,!1,4294967295,A.aD,"",4280640491,22,A.bl,A.a4,"",0.2,"preview_text",p,"","",0,!1,"",0,D.be,o,2,"Element flies in",0,0,"",q.a.c,D.cQ,0.84,0.08,0.12)
s=A.c.j(0.14)
r=B.m(14)
v=new B.an(A.W,p,A.aa,A.r,B.a([w,B.ao(32,new C.Ug(t,B.p(p,D.fdF,A.f,p,p,new B.o(s,p,B.I(A.b2,A.q,1),r,p,p,A.n),p,p,p,p,A.jd,p,p,1/0),!0,1,new B.cw("text_"+u+"_"+n,v)),p,p,24,24,p,p)],x.p),p)
n=v}return B.c_(n,D.aZJ,A.bd)}}
C.a6Z.prototype={
T(){return new C.bix(null,null)}}
C.bix.prototype={
gaYD(){var w=this.a
if(w.e)w=D.eHm.t(0,w.c)||D.aM0.t(0,A.d.gK(this.a.c.split("@")))
else w=!1
return w},
a_(){var w,v=this
v.a1()
if(v.gaYD()){w=C.hYV(v.a.c)
if(w==null){w=v.a.c
if(w==="drift")w=9000
else w=w==="pulse"?2600:4200}w=B.bj(null,B.dC(0,0,0,w,0,0),null,1,null,v)
w.cH(0)
v.d=w}},
q(){var w=this.d
if(w!=null)w.q()
this.btB()},
B(d){var w,v=this,u=v.d
if(!v.gaYD()||u==null)return v.a.d
w=v.a
return B.c6(u,new C.e9O(v,u,A.o.F(w.f,7)/7*3.141592653589793*2),w.d)}}
C.aYE.prototype={
B(d){var w=null
return B.av(C.b_J(!0,w,!1,C.en(A.L,!1,this.e.l(),A.aD,"",4280640491,this.f,A.bl,A.a4,"",0.2,"fx",w,"","",0,!1,"",0,D.be,4280172719,2,"Aa",0,0,this.c,D.cg,D.cQ,0.84,0.08,0.12),w,!1,w,w,w,1,!1,!0),w,w,w)},
gY(d){return this.f}}
C.bdx.prototype={
iX(d){return C.a1D(this.b,new B.aa(0,0,0+d.a,0+d.b).cG(-this.c))},
jD(d){return d.b!==this.b||d.c!==this.c}}
C.boo.prototype={
a5(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=new B.aa(0,0,0+a1.a,0+a1.b).cG(-this.d),g=this.b,f=C.a1D(g,h),e=a1.gee(),d=new C.eQR()
switch(this.c){case"gold":w=d.$1(e*0.045)
w.sau(D.aNw.aw(0,h))
a0.aO(f,w)
g=C.a1D(g,h.cG(-(e*0.03)))
w=d.$1(e*0.006)
w.r=D.bhx.gp(0)
a0.aO(g,w)
break
case"platinum":g=d.$1(e*0.04)
g.sau(D.eQW.aw(0,h))
a0.aO(f,g)
break
case"glow":g=d.$1(e*0.05)
g.r=A.c.j(0.55).gp(0)
g.z=new B.ht(A.G,e*0.04)
a0.aO(f,g)
g=d.$1(e*0.012)
g.r=A.c.gp(0)
a0.aO(f,g)
break
case"rainbow":g=d.$1(e*0.04)
g.sau(D.eQU.aw(0,h))
a0.aO(f,g)
break
case"double":w=d.$1(e*0.012)
w.r=A.c.gp(0)
a0.aO(f,w)
g=C.a1D(g,h.cG(e*0.03))
w=d.$1(e*0.008)
w.r=A.c.j(0.75).gp(0)
a0.aO(g,w)
break
case"neon":g=d.$1(e*0.06)
g.r=A.b7.j(0.7).gp(0)
g.z=new B.ht(A.G,e*0.035)
a0.aO(f,g)
g=d.$1(e*0.016)
g.r=A.oq.gp(0)
a0.aO(f,g)
break
case"rosegold":w=d.$1(e*0.05)
w.sau(D.eQP.aw(0,h))
a0.aO(f,w)
w=C.a1D(g,h.cG(-(e*0.032)))
v=d.$1(e*0.006)
v.r=D.b6K.gp(0)
a0.aO(w,v)
g=C.a1D(g,h.cG(e*0.03))
v=d.$1(e*0.004)
v.r=D.b9c.gp(0)
a0.aO(g,v)
break
case"jewels":g=d.$1(e*0.055)
g.sau(D.aNw.aw(0,h))
a0.aO(f,g)
for(g=B.wO(f),w=B.a([],x.X),g=new B.vj(g,!1,w),v=e*0.018,u=a0.a,t=-e*0.006,s=e*0.006,r=e*0.09;g.C();){q=g.c
if(q===0||g.f)B.ba(B.jR(y.M));--q
g.jj()
p=w[q].b
p===$&&B.c()
o=A.o.D(A.k.bw(p.a.length()/r),8,40)
for(n=0;n<o;++n){g.jj()
p=w[q].b
p===$&&B.c()
p=p.a.length()
g.jj()
m=w[q].Md(p*n/o).a
l=D.cPN[A.o.F(n,4)]
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
g.sau(D.eQY.aw(0,h))
g.z=new B.ht(A.G,e*0.03)
a0.aO(f,g)
g=d.$1(e*0.018)
g.sau(D.eQV.aw(0,h))
a0.aO(f,g)
break
case"framed":w=d.$1(e*0.07)
w.r=A.c.gp(0)
a0.aO(f,w)
g=C.a1D(g,h.cG(-(e*0.035)))
w=d.$1(e*0.004)
w.r=A.nA.gp(0)
a0.aO(g,w)
break}},
aq(d){return d.b!==this.b||d.c!==this.c||d.d!==this.d}}
C.bpo.prototype={
a5(d,e){d.Fo(C.a1D(this.b,new B.aa(0,0,0+e.a,0+e.b).cG(-this.c)),A.w,e.gee()*0.05,!1)},
aq(d){return d.b!==this.b||d.c!==this.c}}
C.aK9.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bv()}}
C.aKF.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bv()}}
C.aM_.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bv()}}
C.a7h.prototype={}
C.Ni.prototype={
T(){var w=x.gz,v=x.N,u=x.bO
return new C.aD8(B.a([],x.D),B.a([],w),B.a([],w),B.V(v,u),B.V(v,x.bo),B.V(v,u),B.aX(v),null,null)},
gdX(){return this.c},
gSY(){return this.r},
gSZ(){return this.w},
gL4(){return this.x}}
C.aD8.prototype={
a_(){var w,v=this
v.a1()
$.aT.c2$.push(v)
C.fA3()
$.hho=new C.esp(v)
w=B.bj(null,A.AB,null,1,null,v)
w.f9(0,!0)
v.fy!==$&&B.aO()
v.fy=w
v.HW()},
br(d){var w,v,u=this
u.bE(d)
w=A.a.i(d.y)
v=u.a
if(w.toLowerCase()!==A.a.i(v.y).toLowerCase()||A.a.i(d.z).toLowerCase()!==A.a.i(v.z).toLowerCase()||d.c!==v.c){w=d.c
u.NS(w)
if(w!==u.a.c){u.e=null
u.db=!1
u.w=u.r=null}u.x=!0
u.HW()}},
iS(d){if(d===A.zH||d===A.rK||d===A.rJ||d===A.pa)this.tf()},
q(){var w,v,u,t=this
$.aT.hF(t)
w=t.at
if(w!=null)w.a8(0)
t.tf()
w=t.fy
w===$&&B.c()
w.q()
for(w=t.ch,w=new B.dt(w,w.r,w.e);w.C();){v=w.d
v.S$=$.aw()
v.P$=0}for(w=t.CW,w=new B.dt(w,w.r,w.e);w.C();){v=w.d
u=v.ax
if(u!=null)u.bL(0)
v.h1()}for(w=t.cx,w=new B.dt(w,w.r,w.e);w.C();){v=w.d
v.S$=$.aw()
v.P$=0}t.btP()},
gaaz(){var w=this.a
return w.f||w.r||w.w||w.x||w.d},
gOb(){var w,v=this.a
if(v.d||v.w||v.x){w=A.a.i(v.y)
if(w.length!==0)return w}if(v.r&&A.a.i(v.z).length!==0)return A.a.i(v.z)
return A.a.i(v.y)},
ab2(d){var w=d==null?this.e:d
if((w==null?null:w.z)!==!0)return!1
if(w.gRC())return!1
return!0},
k5(){return this.ab2(null)},
ahH(){var w=this.c
if(w==null)return
w.I(x.q).f.R(D.ePd)},
pY(){if(!this.k5())return!1
this.ahH()
return!0},
apO(d){var w,v,u,t,s,r=this
if(r.ab2(d))return!1
w=d==null?r.e:d
v=w==null
if((v?null:w.w)!=="hati_kiapo_uongozi")return!0
if(r.a.d)return!0
if(!v&&!C.hgv(w))return!1
u=r.a
if(u.w||u.x)return!0
if(!u.r)return!1
v=v?null:w.x
t=A.a.i(v==null?"":v).toLowerCase()
s=A.a.i(u.z).toLowerCase()
return t.length!==0&&s.length!==0&&t===s},
zy(){return this.apO(null)},
HW(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$HW=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=++t.dx
k=t.a.c
w=3
return B.b(C.aq1(k),$async$HW)
case 3:j=e
w=4
return B.b(C.aoE(k),$async$HW)
case 4:t.dy=e
if(t.c==null||l!==t.dx){w=1
break}s=C.fP9(j,t.bYP())
w=t.gaaz()?5:7
break
case 5:r=t.gOb()
w=r.length!==0?8:9
break
case 8:w=10
return B.b(C.aYS(r),$async$HW)
case 10:q=e
if(t.c==null||l!==t.dx){w=1
break}if(q!=null){A.d.bm(s,new C.eoN())
if(!t.dy.t(0,A.a.i(r).toLowerCase()))A.d.cj(s,0,q)}case 9:w=6
break
case 7:A.d.bm(s,new C.eoO())
case 6:for(l=s.length,p=!1,o=0;o<s.length;s.length===l||(0,B.L)(s),++o){n=s[o]
m=n.w
if(!(m==="marriage_agreement"||m==="hati_kuhowa"||m==="hati_kuhoweya"||m==="hati_malipo_awamu"||m==="hati_kiapo_uongozi"))continue
m=n.y
if(C.yf(m==null?"":m)!=null)continue
C.fAf(n,s)
p=!0}t.m(new C.eoP(t,s))
if(p||s.length>J.ad(j))t.tf()
case 1:return B.h(u,v)}})
return B.i($async$HW,v)},
bYP(){var w,v,u,t,s,r,q="hati_kiapo_uongozi",p=B.a([],x.D)
for(w=this.d,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u){t=w[u]
s=t.w
if((s==="marriage_agreement"||s==="hati_kuhowa"||s==="hati_kuhoweya"||s==="hati_malipo_awamu"||s===q)&&s!==q)p.push(t)}r=this.e
w=!1
if(!this.db)if(r!=null){w=r.w
w=C.kr(w)&&w!==q}if(w)p.push(r)
return p},
ckI(d){var w,v=this,u=d.w
if(!C.kr(u)||u==="hati_kiapo_uongozi")return
v.a9p(d)
w=A.d.ba(v.d,new C.eqn(d))
u=v.d
if(w>=0){u[w]=d.hC()
v.d[w].f=new B.S(Date.now(),0,!1)}else A.d.cj(u,0,d.hC())
v.db=!1},
ceZ(){var w,v,u=this,t=u.e,s=!1
if(!u.db)if(t!=null){s=t.w
s=C.kr(s)&&s!=="hati_kiapo_uongozi"}if(s)u.ckI(t)
s=u.d
w=B.T(s)
v=w.k("cQ<1,hZ>")
s=B.B(new B.cQ(new B.a2(s,new C.eqb(),w.k("a2<1>")),new C.eqc(),v),v.k("J.E"))
return s},
NS(d){return this.bMY(d)},
tf(){return this.NS(null)},
bMY(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$NS=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.x&&d==null){w=1
break}s=t.ceZ()
w=3
return B.b(C.Vf(d==null?t.a.c:d,s),$async$NS)
case 3:r=t.e
w=r!=null&&r.w==="hati_kiapo_uongozi"&&t.apO(r)?4:5
break
case 4:w=6
return B.b(C.a6v(r),$async$NS)
case 6:q=r.x
p=A.a.i(q==null?t.gOb():q)
if(t.dy.t(0,A.a.i(p).toLowerCase())){w=1
break}o=A.d.ba(t.d,new C.eoa())
q=t.d
if(o>=0)q[o]=r.hC()
else A.d.cj(q,0,r.hC())
case 5:case 1:return B.h(u,v)}})
return B.i($async$NS,v)},
p0(){var w,v=this,u=v.at
if(u!=null)u.a8(0)
u=v.e
w=(u==null?null:C.kr(u.w))===!0?A.hX:A.lG
v.at=B.cM(w,new C.erv(v))},
aY7(){var w,v=this,u=v.e
if(u==null)return
w=v.ax
w.push(new C.aef(u.hC(),v.f,v.r))
if(w.length>40)A.d.cA(w,0)
A.d.a9(v.ay)},
cy2(){var w=this,v=w.ax
if(v.length===0||w.e==null)return
w.ay.push(new C.aef(w.e.hC(),w.f,w.r))
w.m(new C.esl(w,v.pop()))
w.p0()},
cjP(){var w=this,v=w.ay
if(v.length===0||w.e==null)return
w.ax.push(new C.aef(w.e.hC(),w.f,w.r))
w.m(new C.eql(w,v.pop()))
w.p0()},
o_(){var w,v,u=this
if(u.e==null)return
w=A.d.ba(u.d,new C.es8(u))
if(w>=0){u.d[w]=u.e.hC()
u.d[w].f=new B.S(Date.now(),0,!1)}v=u.e
v.toString
v.f=new B.S(Date.now(),0,!1)},
WU(d){var w,v,u,t,s=this.gdq()
if(s==null)return null
for(w=s.z,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t}return null},
x7(){var w,v,u,t
for(w=this.ch,v=new B.dt(w,w.r,w.e);v.C();){u=v.d
u.S$=$.aw()
u.P$=0}w.a9(0)
for(w=this.CW,v=new B.dt(w,w.r,w.e);v.C();){u=v.d
t=u.ax
if(t!=null)t.bL(0)
u.h1()}w.a9(0)},
JD(){var w,v,u,t,s,r,q,p,o,n,m,l=this.gdq()
if(l==null)return
w=l.z
v=B.T(w)
u=v.k("cQ<1,n>")
t=B.da(new B.cQ(new B.a2(w,new C.es9(),v.k("a2<1>")),new C.esa(),u),u.k("J.E"))
w=this.ch
v=B.a4(w).k("cz<1>")
v=B.B(new B.cz(w,v),v.k("J.E"))
u=v.length
s=this.CW
r=0
for(;r<v.length;v.length===u||(0,B.L)(v),++r){q=v[r]
if(!t.t(0,q)){p=w.W(0,q)
if(p!=null){p.S$=$.aw()
p.P$=0}p=s.W(0,q)
if(p!=null){o=p.ax
if(o!=null)o.bL(0)
p.h1()}}}for(v=l.z,u=v.length,r=0;r<v.length;v.length===u||(0,B.L)(v),++r){n=v[r]
if(n.b!==D.cQ)continue
p=n.a
m=w.ck(0,p,new C.esb(n))
s.ck(0,p,new C.esc())
p=m.a.a
o=n.r
if(p!==o)m.saV(0,o)}},
Hg(){var w,v,u=this
if(!u.db||u.e==null)return
w=u.db=!1
if(!A.d.b7(u.d,new C.enz(u))){v=u.e
if(v.w==="hati_kiapo_uongozi"){v=v.x
if(v==null)v=u.gOb()
w=u.dy.t(0,A.a.i(v).toLowerCase())}if(!w)A.d.cj(u.d,0,u.e.hC())}u.o_()
u.p0()},
ai2(d,e){var w,v,u,t,s=this
if(s.k5())return
w=s.WU(d)
if(w==null||w.r===e)return
w.r=e
v=s.e
u=(v==null?null:C.kr(v.w))===!0
if(u){C.hYZ(w,e)
v=s.e
if((v==null?null:v.w==="marriage_agreement")===!0){t=s.gdq()
if(t!=null)C.hZ_(t,w.d+w.f*0.5)}}s.Hg()
s.o_()
s.p0()
if(u&&s.c!=null)s.m(new C.esm())},
cz5(d,e){var w=this,v=w.gdq()
if(v==null||v.a!==d||v.c===e)return
v.c=e
w.Hg()
w.o_()
w.p0()},
gdq(){var w,v=this.e
if(v==null||v.r.length===0)return null
w=v.r
return w[A.o.D(this.f,0,w.length-1)]},
gq2(){var w,v,u,t,s,r,q=this,p=q.e,o=p==null?null:p.c
if(o==null)o="office_blue"
w=C.hX0(o)
if(w!=null)return w
v=q.gdq()
if(v==null){p=q.e
v=p!=null&&p.r.length!==0?A.d.gK(p.r):null}if(v!=null&&A.a.a0(o,"class_")){p=v.f
p=B.b0(p==null?v.e:p)
u=q.bWc(v)
t=q.bWb(v)
s=B.b0(v.e)
r=v.f
return new C.jB(o,"Class template",p,u,t,s,r==null?null:B.b0(r))}return C.hzY(o)},
bWc(d){var w,v,u,t,s
for(w=d.z,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u){t=w[u]
if(t.b===D.cQ)s=t.w>=28||A.o.D(A.o.an(t.x.a,100)-1,0,8)>=A.o.D(7,0,8)
else s=!1
if(s)return B.b0(t.Q)}return A.M},
bWb(d){var w,v,u,t
for(w=d.z,v=w.length,u=0;u<v;++u){t=w[u]
if(t.b===D.cQ&&t.w<28)return B.b0(t.Q)}return A.aK},
ae1(d){var w=this,v=d.w
if(v==="hati_kiapo_uongozi"){if(!w.gaaz()){w.c.I(x.q).f.R(D.eNQ)
return}w.a9p(d)
w.aZj(C.bAt(d))
return}if(C.ccH(v)){w.a9p(d)
w.aZj(d)
return}w.m(new C.epu(w,d))},
aqm(){var w,v,u,t,s,r,q=this
q.a1m(!0)
if(q.db){w=q.e
v=w==null
u=v?null:w.w
t=v?null:w.x
s=A.a.i(t==null?"":t)
r=!v&&C.kr(w.w)&&u!=="hati_kiapo_uongozi"&&s.length!==0
q.m(new C.enx(q))
if(r&&q.c!=null){u.toString
q.Jd(u,s)}return}q.tf()
q.m(new C.eny(q))},
aZi(d){this.a9p(d)
this.ZT(d,!0)},
a9p(d){if(!C.kr(d.w))return
C.fAf(d,this.d)},
ZT(d,e){return this.caV(d,e)},
aZj(d){return this.ZT(d,!1)},
caV(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$ZT=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:l={}
l.a=d
if(d.w==="hati_kiapo_uongozi"){s=l.a=C.bAt(d)
if(e){r=s.x
q=A.a.i(r==null?t.gOb():r)
t.dy.W(0,q.toLowerCase())
C.aoF(t.a.c,q)}r=s}else r=d
w=C.ccH(r.w)?3:4
break
case 3:w=5
return B.b(t.a9q(r),$async$ZT)
case 5:if(!g||t.c==null){w=1
break}case 4:p=A.d.b7(t.d,new C.epR(l))
o=l.a.hC()
n=C.kr(o.w)&&C.i_a(o)
t.m(new C.epS(t,o,p))
if(n){m=A.d.ba(t.d,new C.epT(o))
if(m>=0){t.d[m]=o.hC()
t.tf()}}if(!t.ab2(l.a))t.Y1()
r=!1
if(t.c!=null)if(!t.ab2(l.a)){r=l.a
l=r.w==="hati_kiapo_uongozi"&&!t.apO(r)&&C.fwh(l.a)}else l=r
else l=r
if(l)t.c.I(x.q).f.R(D.eOp)
case 1:return B.h(u,v)}})
return B.i($async$ZT,v)},
a9q(d){return this.bLe(d)},
bLe(d){var w=0,v=B.j(x.y),u,t=this,s,r
var $async$a9q=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.a
if(r.d){u=!0
w=1
break}s=d.z
if(s===!0){u=!0
w=1
break}w=3
return B.b(B.la(r.c,A.yY),$async$a9q)
case 3:if(f){u=!0
w=1
break}r=t.c
r.toString
s=t.a
u=B.kO(!1,r,s.c,s.d,null,A.yY,null)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a9q,v)},
nS(){var w=0,v=B.j(x.y),u,t=this,s,r
var $async$nS=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.e
r=s==null
if(C.ccH(r?null:s.w)){u=!0
w=1
break}if((r?null:s.w)==="hati_kiapo_uongozi"){u=!0
w=1
break}s=t.c
s.toString
r=t.a
u=C.cc5(s,r.c,r.d)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$nS,v)},
adJ(){var w=0,v=B.j(x.H),u,t=this,s
var $async$adJ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.ca(null,null,!1,null,new C.ept(),s,null,!0,!0,x.H),$async$adJ)
case 3:if(t.c==null){w=1
break}t.aqm()
case 1:return B.h(u,v)}})
return B.i($async$adJ,v)},
adI(){var w=0,v=B.j(x.H),u,t=this,s
var $async$adI=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.ca(null,null,!1,null,new C.epq(),s,null,!0,!0,x.H),$async$adI)
case 3:if(t.c==null){w=1
break}t.m(new C.epr())
t.aqm()
case 1:return B.h(u,v)}})
return B.i($async$adI,v)},
Y1(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$Y1=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.az(),$async$Y1)
case 3:r=e
if(B.kc(J.q(r.a,"ngmy_marriage_hint_seen"))===!0){w=1
break}w=4
return B.b(r.ar("Bool","ngmy_marriage_hint_seen",!0),$async$Y1)
case 4:s=t.c
if(s==null){w=1
break}s.I(x.q).f.R(D.eMt)
case 1:return B.h(u,v)}})
return B.i($async$Y1,v)},
Jd(d,e){return this.cl8(d,e)},
cl8(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$Jd=B.e(function(f,g){if(f===1)return B.f(g,v)
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
return B.b(C.afz(s,t.gE_(),t.gDZ(),!0,e,t.d),$async$Jd)
case 9:w=4
break
case 6:w=10
return B.b(C.afA(s,t.gE_(),t.gDZ(),!0,e,t.d),$async$Jd)
case 10:w=4
break
case 7:w=11
return B.b(C.afB(s,t.gE_(),t.gDZ(),!0,e,t.d),$async$Jd)
case 11:w=4
break
case 8:w=12
return B.b(C.afC(s,t.gE_(),t.gDZ(),!0,e,t.d),$async$Jd)
case 12:w=4
break
case 4:case 1:return B.h(u,v)}})
return B.i($async$Jd,v)},
bXJ(){var w,v,u,t,s=this
if(!s.gaaz()){s.c.I(x.q).f.R(D.eMG)
return}w=s.gOb()
v=s.a
u=v.d
t=!0
if(!u)if(!v.w){if(!v.x)if(v.r){v=A.a.i(v.z)
v=v.length!==0&&v.toLowerCase()===w.toLowerCase()}else v=!1
else v=t
t=v}v=s.c
v.toString
C.afy(u,t,v,new C.eoJ(s),new C.eoK(s),w)},
ae2(){var w=0,v=B.j(x.H),u=this,t,s
var $async$ae2=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return B.b(B.bV(A.dE,null,new C.epA(u),s,!0,!0,!1,A.ln,!1,!1,x.N),$async$ae2)
case 2:t=e
if(t==="marriage_agreement"){s=u.c
s.toString
C.afC(s,u.gE_(),u.gDZ(),!1,null,u.d)}else if(t==="hati_kuhowa"){s=u.c
s.toString
C.afz(s,u.gE_(),u.gDZ(),!1,null,u.d)}else if(t==="hati_kuhoweya"){s=u.c
s.toString
C.afA(s,u.gE_(),u.gDZ(),!1,null,u.d)}else if(t==="hati_malipo_awamu"){s=u.c
s.toString
C.afB(s,u.gE_(),u.gDZ(),!1,null,u.d)}else if(t==="hati_kiapo_uongozi")u.bXJ()
return B.h(null,v)}})
return B.i($async$ae2,v)},
ca1(d,e){var w,v,u=this,t=null
if(u.e!=null)u.aY7()
w=C.cC()
v=C.Bc(t,t,t,t,D.Ci,5,!1,t,t,t,t,t,w,t,!1,t,d==null?"Untitled Presentation":d,t,t,t,"office_blue",t,!1,t)
u.m(new C.epB(u,v))},
a8R(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$a8R=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e==null||t.pY()){w=1
break}s=t.c
s.toString
w=3
return B.b(C.i3A(s),$async$a8R)
case 3:r=e
if(r==null||t.c==null||t.e==null){w=1
break}q=t.e
p=A.d.d9(q.r,new C.enB())
t.d1(new C.enC(t,p,q,r))
s=t.c.I(x.q).f
o=r.r.length
s.R(B.b2(null,null,null,null,null,A.r,null,B.d(p?"Your "+o+"-slide presentation is ready. The mic is green now \u2014 tap it to tell the AI what to change.":"Added "+o+" AI slides after this one. Tap the green mic to change them.",null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a8R,v)},
ag_(d,e,f,g){var w=null,v=g?A.dp:A.bM,u=B.I(g?A.b2:A.cp,A.q,1)
return B.hp(B.aE(w,B.p(w,B.W(d,g?A.c:A.aK,w,w,w,18),A.f,w,w,new B.o(v,w,u,w,w,w,A.a6),w,34,w,w,w,w,w,34),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,A.a8),w,e,w,w)},
ZS(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$ZS=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:n=t.e
if(n==null||t.pY()){w=1
break}s=t.jG()
r=n.r
q=r.length
if(q===0||t.f>=q)p=B.a([],x.u)
else{r=r[t.f].z
q=B.T(r).k("a2<1>")
p=B.B(new B.a2(r,new C.epM(),q),q.k("J.E"))}o=s!=null&&s.b===D.lk?B.a([s],x.u):p
if(o.length===0){t.c.I(x.q).f.R(D.eOA)
w=1
break}r=t.c
r.toString
w=3
return B.b(B.bV(A.K,null,new C.epN(t,o),r,!0,!0,!0,null,!1,!1,x.H),$async$ZS)
case 3:case 1:return B.h(u,v)}})
return B.i($async$ZS,v)},
aej(){return this.caU()},
caU(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$aej=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p={}
o=t.e
if(o!=null){s=o.CW
s=(s==null?"":s).length===0||t.pY()}else s=!0
if(s){w=1
break}s=t.c
s.toString
w=3
return B.b(C.i3m(s,t.f+1,o),$async$aej)
case 3:r=e
if(r==null||t.c==null||t.e!==o){w=1
break}s=o.cx
if(s==null)s=A.T
q=B.ky(s,B.T(s).c)
p.a=A.d.ba(o.r,new C.epP(q))
t.d1(new C.epQ(p,t,o,q,r))
t.c.I(x.q).f.R(D.eOZ)
case 1:return B.h(u,v)}})
return B.i($async$aej,v)},
aeq(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$aeq=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e==null||t.pY()||!t.zy()){w=1
break}s=t.gdq()
if(s==null){w=1
break}r=s.z
q=B.T(r).k("a2<1>")
p=B.B(new B.a2(r,new C.eq6(),q),q.k("J.E"))
if(p.length===0){t.c.I(x.q).f.R(D.eMe)
w=1
break}o=new B.K(p,new C.eq7(),B.T(p).k("K<1,N>")).fF(0,new C.eq8())
r=B.V(x.N,x.bO)
for(q=p.length,n=0;n<p.length;p.length===q||(0,B.L)(p),++n){m=p[n]
l=m.r
r.n(0,m.a,new B.ar(new B.bb(l,A.b3,A.aN),$.aw()))}q=t.c
q.toString
w=3
return B.b(B.bV(A.K,null,new C.eq9(t,p,o,r),q,!0,!0,!0,null,!1,!1,x.H),$async$aeq)
case 3:for(r=new B.dt(r,r.r,r.e);r.C();){q=r.d
q.S$=$.aw()
q.P$=0}if(t.c!=null)t.m(new C.eqa())
case 1:return B.h(u,v)}})
return B.i($async$aeq,v)},
ae5(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$ae5=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:m=t.e
if(m==null||t.pY()){w=1
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
return B.b(C.hit(s,new C.E5(r,q,p,o==null?"":o)),$async$ae5)
case 3:n=e
if(n==null||t.c==null){w=1
break}t.d1(new C.epC(m,n))
s=t.c.I(x.q).f
r=n.a
if(r.length===0)r="No ending celebration."
else{r=C.afZ(r)
r=B.t(r==null?null:r.b)+" will play after your last slide."}s.R(B.b2(null,null,null,null,null,A.r,null,B.d(r,null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$ae5,v)},
a9j(){return this.bKB()},
bKB(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$a9j=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:m={}
l=t.e
if(l!=null){s=l.CW
s=(s==null?"":s).length===0||t.pY()}else s=!0
if(s){w=1
break}s=t.c
s.toString
w=3
return B.b(C.i3z(s,t.f+1,l),$async$a9j)
case 3:r=e
q=$.fSA
$.fSA=!1
if(r==null||t.c==null||t.e!==l){w=1
break}if(r===l){t.d1(new C.enS())
t.c.I(x.q).f.R(D.eM5)
w=1
break}if(!q){s=r.CW
s=C.hhm(l,s==null?"":s,!1)}else s=!1
if(s){t.d1(new C.enT(t,l,r))
t.c.I(x.q).f.R(D.ePs)
w=1
break}s=l.cx
if(s==null)s=A.T
p=B.ky(s,B.T(s).c)
s=l.r
m.a=A.d.ba(s,new C.enU(p))
o=s.length
t.d1(new C.enV(m,t,l,p,r))
n=s.length-o
s=t.c.I(x.q).f
if(n>0){m=n===1?"":"s"
m="Done \u2014 added "+n+" slide"+m+". Undo brings back the old version."}else m="Done \u2014 your slides are updated. Undo brings back the old version."
s.R(B.b2(null,null,null,null,null,A.r,null,B.d(m,null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a9j,v)},
aOT(d,e){if(e){this.aeT()
return}this.ca1(d,!1)},
bGk(){return this.aOT(null,!1)},
aeT(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$aeT=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.bV(A.bX,null,new C.eqg(t),r,!0,!0,!0,A.oW,!1,!1,x.N),$async$aeT)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.eqh(t,C.hX_(s).ph()))
case 1:return B.h(u,v)}})
return B.i($async$aeT,v)},
d1(d){var w=this
if(w.pY())return
w.Hg()
w.aY7()
w.m(d)
w.JD()
w.o_()
w.p0()},
a7k(){this.d1(new C.emw(this,D.mu))},
aQh(){var w=this.gdq()
if(w==null)return
this.d1(new C.enQ(this,w))},
aPt(){var w=this.e
if(w==null||w.r.length<=1)return
this.d1(new C.enO(this))},
b1e(d,e){if(this.e==null||d===e)return
this.d1(new C.eqp(this,d,e))},
Np(d){return this.bIi(d)},
bIi(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$Np=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=d.w==="hati_kiapo_uongozi"?3:4
break
case 3:s=d.x
r=A.a.i(s==null?t.gOb():s)
w=5
return B.b(C.aoD(t.a.c,r),$async$Np)
case 5:t.dy.L(0,r.toLowerCase())
case 4:s=d.a
C.aq3(s)
w=6
return B.b(C.b_N(t.a.c,s),$async$Np)
case 6:if(t.c==null){w=1
break}t.m(new C.enK(t,d))
w=7
return B.b(t.tf(),$async$Np)
case 7:case 1:return B.h(u,v)}})
return B.i($async$Np,v)},
cl5(d,e){var w=this
if(d.z){w.ahH()
return}w.m(new C.eqo(w,d,e))
w.p0()},
jG(){var w,v,u,t,s,r=this.gdq()
if(r==null||this.r==null)return null
for(w=r.z,v=w.length,u=this.r,t=0;t<v;++t){s=w[t]
if(s.a===u)return s}return null},
VV(d){return this.ch.ck(0,d.a,new C.enA(d))},
asc(d){return this.CW.ck(0,d.a,new C.eob())},
a1m(d){var w,v,u,t=this,s=t.w
if(s!=null){w=t.WU(s)
v=t.ch.h(0,s)
if(w!=null&&v!=null&&v.a.a!==w.r)w.r=v.a.a}t.w=null
u=$.aT.ak$.d.c
if(u!=null)u.jw()},
b4y(){return this.a1m(!0)},
a1k(d){var w,v,u=this
if(u.pY())return
if(!u.zy())return
w=u.WU(d)
if(w==null||w.b!==D.cQ)return
v=A.a.i(w.r).toLowerCase()
if(v==="click to edit text"||v==="tap to edit text"||v==="double-tap to edit"){w.r=""
u.VV(w).saV(0,"")}u.m(new C.es6(u,d))
$.aT.x1$.push(new C.es7(u,d,w))},
b53(d){var w=this
if(d.b===D.cQ&&!w.k5()&&w.zy()){w.a1k(d.a)
return}w.ayx(d.a)},
ayx(d){var w,v,u,t,s,r=this
if(r.k5())return
w=r.r
if(w!=null&&w!==d){v=r.WU(w)
if(v!=null&&v.b===D.cQ){u=r.ch.h(0,w)
if(u!=null&&u.a.a!==v.r)v.r=u.a.a}}t=r.w
s=t!=null&&t!==d
r.m(new C.erw(r,s,d))
if(s||d==null){t=$.aT.ak$.d.c
if(t!=null)t.jw()}},
aLb(){this.d1(new C.emx(this))},
oL(d){return this.bxw(d)},
bxw(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$oL=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(t.nS(),$async$oL)
case 3:s=f
if(!s){w=1
break}if(t.c==null){w=1
break}t.d1(new C.emu(t,d))
case 1:return B.h(u,v)}})
return B.i($async$oL,v)},
V3(){var w=0,v=B.j(x.H),u,t=this,s
var $async$V3=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A4.G8(78,1920),$async$V3)
case 3:s=e
if(s==null||t.gdq()==null){w=1
break}t.d1(new C.emk(t,s))
case 1:return B.h(u,v)}})
return B.i($async$V3,v)},
UY(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$UY=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.gdq()==null){w=1
break}w=3
return B.b(S.Cr(t.a.c),$async$UY)
case 3:s=e
if(t.c==null){w=1
break}r=J.a8(s)
if(r.gam(s)){t.c.I(x.q).f.R(D.eQ1)
w=1
break}w=r.gM(s)===1?4:6
break
case 4:q=r.gK(s)
w=5
break
case 6:r=t.c
r.toString
w=7
return B.b(B.bV(null,null,new C.emh(s),r,!0,!0,!1,null,!1,!1,x.ei),$async$UY)
case 7:q=e
case 5:if(q==null||t.c==null||t.gdq()==null){w=1
break}t.d1(new C.emi(t,q))
case 1:return B.h(u,v)}})
return B.i($async$UY,v)},
arb(){var w=this,v=w.r
if(v==null||w.gdq()==null)return
if(A.d.b7(w.gdq().z,new C.enM(v))){w.c.I(x.q).f.R(D.eP2)
return}if(w.w===v)w.a1m(!0)
w.d1(new C.enN(w,v))},
bEA(){var w=this.jG(),v=w==null
if((v?null:w.b)===D.f_)return"Tap a design shape, then pick a color to fill it."
if((v?null:w.b)===D.cQ)return"Selected text \u2014 color applies to this text box."
return"No selection \u2014 color applies to the slide background."},
aLT(d,e){var w=this,v=w.jG(),u=w.gdq(),t=w.e
if(t==null)return
w.d1(new C.emZ(w,v,d,e,t,u))},
bz7(d){return this.aLT(d,null)},
a7C(d){return this.bzf(d)},
bzf(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a7C=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=D.a5L.t(0,A.a.i(d.a))||t.Q
if(q){w=3
break}else f=q
w=4
break
case 3:w=5
return B.b(t.nS(),$async$a7C)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}s=t.jG()
if(s!=null){r=s.b
if(r===D.cQ)t.bz7(s.w>=28||s.x.gdI(0)>=A.H.gdI(0)?d.d:d.e)
else if(r===D.f_){r=d.c
t.aLT(r.j(0.88),r)}w=1
break}t.d1(new C.en3(t,d))
case 1:return B.h(u,v)}})
return B.i($async$a7C,v)},
a7B(d){return this.bzd(d)},
bzd(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a7B=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=t.jG()
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
return B.b(t.nS(),$async$a7B)
case 7:f=!f
case 6:case 4:if(f){w=1
break}if(t.c==null){w=1
break}t.d1(new C.en1(t,s,d,q,r))
case 1:return B.h(u,v)}})
return B.i($async$a7B,v)},
byY(d){var w=this.gdq()
if(w==null)return
this.d1(new C.emY(this,w,d))},
ZY(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$ZY=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(C.i3v(r),$async$ZY)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.o_()
t.m(new C.eq0(t,s))
w=4
return B.b(t.tf(),$async$ZY)
case 4:if(t.c!=null)t.ae1(s)
case 1:return B.h(u,v)}})
return B.i($async$ZY,v)},
a9b(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a9b=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.e
if(q==null){w=1
break}t.a1m(!0)
t.o_()
s=t.c
s.toString
w=3
return B.b(C.Qu(s,q),$async$a9b)
case 3:r=e
s=t.c
if(s==null){w=1
break}s=s.I(x.q).f
s.R(B.b2(null,null,null,null,null,A.r,null,B.d(r==null?"Your video is ready. Check your downloads.":r,null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a9b,v)},
D8(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$D8=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=r.e
if(m==null){w=1
break}r.o_()
t=4
w=7
return B.b(C.aOH(m),$async$D8)
case 7:q=e
o=r.c
if(o==null){w=1
break}w=8
return B.b(C.aO6(o,q,m.b),$async$D8)
case 8:t=2
w=6
break
case 4:t=3
l=s.pop()
p=B.a9(l)
o=r.c
if(o==null){w=1
break}o.I(x.q).f.R(B.b2(null,null,null,null,null,A.r,null,B.d("Could not create PDF: "+B.t(p),null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$D8,v)},
EN(d,e){return this.cxw(d,e)},
cxw(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$EN=B.e(function(f,a0){if(f===1)return B.f(a0,v)
for(;;)switch(w){case 0:h={}
if(t.pY()){w=1
break}s=d.w
if(!(s==="hati_kuhowa"||s==="hati_kuhoweya")){w=1
break}h.a=d
if(e){s=t.e
s=s!=null&&s.a===d.a}else s=!1
if(s){t.a1m(!0)
t.o_()
s=h.a=t.e.hC()}else{r=A.d.ba(t.d,new C.esf(d))
s=h.a=r>=0?t.d[r].hC():d.hC()}s=s.w
q=s==null
p=C.hXY(q?"":s)
o=C.hgi(q?"":s)
if(p.length===0){w=1
break}s=t.d
q=B.T(s).k("a2<1>")
n=B.B(new B.a2(s,new C.esg(h,p),q),q.k("J.E"))
s=h.a.b
w=3
return B.b(t.cqQ(n.length,o,s),$async$EN)
case 3:m=a0
if(m==null||t.c==null){w=1
break}h.b=null
h.c=!1
w=m==="new"?4:6
break
case 4:s=h.b=C.hXS(h.a)
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
return B.b(t.cqP(n,o),$async$EN)
case 10:a0=g.a=a0
w=8
break
case 9:a0=l
case 8:if(a0==null||t.c==null){w=1
break}k=A.d.iD(t.d,new C.esh(s))
s=h.a.b
w=11
return B.b(t.cqN(k.b,s),$async$EN)
case 11:if(a0!==!0||t.c==null){w=1
break}s=h.b=k.hC()
case 5:j=C.hXX(s,h.a)
s=j.b
if(s===0&&j.a===0&&j.c===0){h=t.c
if(h==null){w=1
break}h.I(x.q).f.R(D.eQc)
w=1
break}w=12
return B.b(t.cqO(j.a,s,o,j.c),$async$EN)
case 12:i=a0
if(t.c==null){w=1
break}t.m(new C.esi(h,t,i))
t.p0()
case 1:return B.h(u,v)}})
return B.i($async$EN,v)},
cqQ(d,e,f){var w=this.c
w.toString
return B.bV(A.K,null,new C.erM(this,e,f,d),w,!0,!0,!0,null,!1,!1,x.N)},
cqP(d,e){var w=this.c
w.toString
return B.bV(A.K,null,new C.erL(this,e,d),w,!0,!0,!0,null,!1,!1,x.N)},
cqN(d,e){var w=this.c
w.toString
return B.bV(A.K,null,new C.erF(this,e,d),w,!0,!0,!0,null,!1,!1,x.y)},
cqO(d,e,f,g){var w=this.c
w.toString
return B.bV(A.K,null,new C.erH(this,f,e,d,g),w,!0,!0,!0,null,!1,!1,x.y)},
aaD(){var w=null
return B.av(B.p(w,w,A.f,w,w,new B.o(A.b2,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w)},
aaE(d,e,f,g){var w,v,u=null,t=B.m(16),s=B.aq(d,A.bX,0.35)
s.toString
s=B.a([d,s],x.O)
w=B.a([new B.ac(0,A.G,d.j(0.28),A.dk,18)],x.V)
v=x.p
return B.A(B.a([B.p(u,B.W(e,A.c,u,u,u,28),A.f,u,u,new B.o(u,u,u,t,w,new B.a7(A.ax,A.aC,A.x,s,u,u),A.n),u,54,u,u,u,u,u,54),A.eB,B.D(B.v(B.a([B.d(g,u,u,u,u,u,u,D.f_l,u,u,u),A.an,B.d(f,u,u,u,u,u,u,B.l(u,u,A.c.j(0.58),u,u,u,u,u,u,u,u,13.5,u,u,A.a4,u,1.35,!0,u,u,u,u,u,u,u,u),u,u,u)],v),A.F,u,A.e,A.j,0,A.p),1)],v),A.F,u,A.e,A.j,0,u,u)},
aTv(d,e){var w=null,v=e.j(0.14),u=B.m(12),t=B.I(e.j(0.22),A.q,1)
return B.p(w,B.d(d,w,2,A.a2,w,w,w,A.Te,A.L,w,w),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.bS,w,w,w)},
aTy(d,e,f,g,h,i,j){var w=null,v=B.m(16),u=B.m(16),t=g?new B.a7(A.ax,A.aC,A.x,B.a([d.j(0.22),d.j(0.08)],x.O),w,w):w,s=g?w:A.c.j(0.05),r=B.I(g?d.j(0.45):A.c.j(0.08),A.q,1),q=d.j(g?0.22:0.14),p=B.m(13),o=x.p
return B.aF(!1,A.a1,!0,w,B.aK(!1,v,!0,B.p(w,B.A(B.a([B.p(w,B.W(f,d,w,w,w,22),A.f,w,w,new B.o(q,w,w,p,w,w,A.n),w,44,w,w,w,w,w,44),A.bf,B.D(B.v(B.a([B.d(i,w,w,w,w,w,w,A.np,w,w,w),A.cX,B.d(h,w,w,w,w,w,w,B.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,12.5,w,w,A.a4,w,1.25,!0,w,w,w,w,w,w,w,w),w,w,w)],o),A.F,w,A.e,A.j,0,A.p),1),B.W(A.Bf,A.c.j(0.35),w,w,w,14)],o),A.m,w,A.e,A.j,0,w,w),A.f,w,w,new B.o(s,w,r,u,w,t,A.n),w,w,w,w,A.bC,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eoF(e,j),w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ag)},
bV8(d,e,f,g,h,i){return this.aTy(d,e,f,!1,g,h,i)},
atx(d,e){var w=null,v=A.c.j(0.05),u=B.m(14),t=B.I(A.c.j(0.08),A.q,1)
return B.p(w,B.v(B.a([B.d(e,w,w,w,w,w,w,A.du,w,w,w),A.bA,B.d(d,w,w,w,w,w,w,B.l(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,11,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.Yh,w,w,w)},
aTx(d,e,f){var w=null,v=B.bk(A.c.j(0.08),w,w,w,A.c,w,A.cf,w,new B.b7(B.m(14),A.Y),w,w,w)
return B.bJ(B.d(e,w,w,w,w,w,w,A.nn,w,w,w),new C.eoE(d,f),v)},
aTw(d,e){return this.aTx(d,e,null)},
Ju(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$Ju=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
s=t.a
w=3
return B.b(B.oX(l,s.c,s.d),$async$Ju)
case 3:if(!e||t.c==null){w=1
break}r=t.e
if(r==null){w=1
break}l=r.b
l=l+"\n"+A.a.aF("=",l.length)+"\n\n"
q=new B.fd(l)
for(s=r.r,p=0;p<s.length;){o=s[p];++p
n=o.b
if(n.length===0)n="(untitled)"
q.a=l+("Slide "+p+": "+n+"\n")
for(l=A.d.gaf(o.z),n=new B.fk(l,new C.erx());n.C();){m=l.gU(0).r
if(A.a.i(m).length!==0){m="  \u2022 "+B.aJ(m,"\n"," ")+"\n"
q.a+=m}}l=o.c
if(A.a.i(l).length!==0)q.a+="  Notes: "+l+"\n"
l=q.a+="\n"}w=4
return B.b(B.a94(l.charCodeAt(0)==0?l:l,r.b),$async$Ju)
case 4:l=t.a
w=5
return B.b(B.oW(l.c,l.d),$async$Ju)
case 5:case 1:return B.h(u,v)}})
return B.i($async$Ju,v)},
HC(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$HC=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.c
q.toString
s=t.a
w=3
return B.b(B.oX(q,s.c,s.d),$async$HC)
case 3:if(!e||t.c==null){w=1
break}r=t.e
if(r==null){w=1
break}w=4
return B.b(B.a94(A.R.ao(r.ae(),null),r.b+".json"),$async$HC)
case 4:q=t.a
w=5
return B.b(B.oW(q.c,q.d),$async$HC)
case 5:case 1:return B.h(u,v)}})
return B.i($async$HC,v)},
b4l(){var w,v,u=this,t=u.e
if(t==null||t.r.length===0)return
u.o_()
u.tf()
w=u.c
w.toString
v=B.e6(new C.es5(u,t),!1,null,x.z)
B.a5(w,!1).c6(v)},
GP(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$GP=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.nS(),$async$GP)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}w=4
return B.b(C.fAs(),$async$GP)
case 4:s=e
if(s==null||t.e==null||t.c==null){w=1
break}r=C.i_K(s.a)
q=t.c
q.toString
w=5
return B.b(B.bV(A.aB,null,new C.emp(s,r),q,!0,!0,!1,null,!1,!1,x.N),$async$GP)
case 5:p=e
if(p==null){w=1
break}if(p==="scroll"){t.d1(new C.emq(t,s))
w=1
break}if(p==="split")t.d1(new C.emr(t,r,s))
case 1:return B.h(u,v)}})
return B.i($async$GP,v)},
ML(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$ML=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.pY()){w=1
break}w=3
return B.b(t.nS(),$async$ML)
case 3:if(!e){w=1
break}s=t.c
if(s==null){w=1
break}w=4
return B.b(C.aOG(s,null,null),$async$ML)
case 4:r=e
if(r==null||t.gdq()==null){w=1
break}t.d1(new C.emv(t,r))
case 1:return B.h(u,v)}})
return B.i($async$ML,v)},
b11(d){var w=this.e
if(w==null||!C.kr(w.w)||w.as!=null)return
w.as=d.b
w.at=d.c.l()},
aNa(){var w,v,u,t,s=this.c
s.toString
w=this.e
v=w==null
u=v?null:w.as
t=v?null:w.at
return C.aOG(s,t==null?null:B.b0(t),u)},
a7i(d){return this.bxn(d)},
bxn(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a7i=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.pY()){w=1
break}if(!t.zy()){s=t.c
if(s==null){w=1
break}s.I(x.q).f.R(D.eQr)
w=1
break}w=3
return B.b(t.aNa(),$async$a7i)
case 3:r=f
if(r==null||t.gdq()==null){w=1
break}t.d1(new C.emm(t,r,d))
case 1:return B.h(u,v)}})
return B.i($async$a7i,v)},
afD(d){return this.cjS(d)},
cjS(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$afD=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.pY()){w=1
break}if(!t.zy()){s=t.c
if(s==null){w=1
break}s.I(x.q).f.R(D.ePA)
w=1
break}w=3
return B.b(t.aNa(),$async$afD)
case 3:r=f
if(r==null||t.gdq()==null){w=1
break}t.d1(new C.eqm(t,r,d))
case 1:return B.h(u,v)}})
return B.i($async$afD,v)},
c6J(){var w,v,u=this
if(u.k5())return
w=new B.S(Date.now(),0,!1)
v=u.fx
v=v!=null&&w.by(v).a<=5e5?++u.fr:u.fr=1
u.fx=w
if(v>=3){u.fr=0
u.fx=null
u.cwy()}},
cwy(){var w,v,u,t,s,r=this.gdq()
if(r==null)return
v=r.z
u=v.length
t=0
for(;;){if(!(t<u)){w=null
break}s=v[t]
if(s.db==="marriage_locked_nim_akuna_deni"){w=s
break}++t}if(w==null)return
this.d1(new C.esd(this,r,(A.o.aB(w.Q,24)&255)===0||A.a.i(w.r).length===0))},
bVt(){var w,v,u,t,s,r=this.gdq()
if(r==null)return
for(w=r.z,v=w.length,u=null,t=0;t<v;++t){s=w[t]
if(s.db==="marriage_locked_nim_n_4")u=s}if(u==null)return
this.d1(new C.eoI(this,r,u.d))},
c_0(d){var w
if(this.k5())return!1
w=this.e
if((w==null?null:C.kr(w.w))!==!0)return!0
w=d.db
if(w==="marriage_locked"||A.a.a0(w,"marriage_locked_"))return!1
if(A.a.a0(w,"marriage_field_"))return!1
if(C.fx2(d))return!1
w=d.db
if(w==="__kiapo_video__"||A.a.a0(w,"__kiapo_video___"))return!1
if(d.b===D.kS&&A.a.a0(w,"marriage_sign_"))return!1
return!1},
c_1(d){var w
if(this.k5())return!1
w=this.e
if((w==null?null:C.kr(w.w))!==!0)return!0
if(!this.zy())return!1
w=d.db
if(w==="marriage_locked"||A.a.a0(w,"marriage_locked_"))return!1
if(C.fx2(d))return!1
w=d.db
if(w==="__kiapo_video__"||A.a.a0(w,"__kiapo_video___"))return!1
if(d.b===D.kS&&A.a.a0(w,"marriage_sign_"))return!1
return A.a.a0(w,"marriage_field_")},
MU(d){return this.bzF(d)},
bzF(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$MU=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.pY()){w=1
break}if(!t.zy()){s=t.c
if(s==null){w=1
break}s.I(x.q).f.R(D.eOq)
w=1
break}r=t.e
s=r==null
q=s?null:r.x
p=A.a.i(q==null?"":q)
if(s||p.length===0){w=1
break}w=3
return B.b(C.aoH(p),$async$MU)
case 3:o=f
s=t.c
if(s==null){w=1
break}if(o==null||A.a.i(o).length===0){s.I(x.q).f.R(D.eP4)
w=1
break}s=t.e
if(s!==r){s=s==null?null:s.a
s=s!==r.a}else s=!1
if(s){s=r.r
n=s.length===0?null:A.d.gK(s)
if(n!=null)for(s=n.z,q=s.length,m=0;m<q;++m){l=s[m]
k=l.db
if(k==="__kiapo_video__"||A.a.a0(k,"__kiapo_video___")){l.at=o
l.db="__kiapo_video__"}}C.a6v(r)
w=1
break}t.m(new C.en7(t,d,o))
t.o_()
$.aT.x1$.push(new C.en8(t))
case 1:return B.h(u,v)}})
return B.i($async$MU,v)},
V1(){var w=0,v=B.j(x.H),u,t=this,s
var $async$V1=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.nS(),$async$V1)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}w=4
return B.b(C.bB9(),$async$V1)
case 4:s=e
if(s==null||t.gdq()==null){w=1
break}t.d1(new C.emj(t,s))
case 1:return B.h(u,v)}})
return B.i($async$V1,v)},
ND(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$ND=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.nS(),$async$ND)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}s=t.jG()
if(s==null||s.at==null){w=1
break}r=s.at
r.toString
w=4
return B.b(C.fAj(r),$async$ND)
case 4:q=e
if(q==null){w=1
break}t.d1(new C.eo9(s,q))
case 1:return B.h(u,v)}})
return B.i($async$ND,v)},
iP(d){this.d1(new C.ems(this,d))},
pN(d){return this.byR(d)},
byR(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$pN=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)A:switch(w){case 0:if(d!=="print"&&d!=="present"&&t.pY()){w=1
break}m=!D.aM2.t(0,A.a.i(d))
if(m){w=3
break}else f=m
w=4
break
case 3:w=5
return B.b(t.nS(),$async$pN)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}switch(d){case"upload_pdf":t.GP()
w=1
break A
case"sign_paper":t.ML()
w=1
break A
case"hd_photo":t.V1()
w=1
break A
case"sharpen":t.ND()
w=1
break A
case"print":t.D8()
w=1
break A
case"rotate":s=t.jG()
if(s!=null)t.d1(new C.emB(s))
w=1
break A
case"text_box":t.aLb()
w=1
break A
case"picture":t.V3()
w=1
break A
case"present":t.b4l()
w=1
break A
case"new_slide":t.a7k()
w=1
break A
case"export_json":t.HC()
w=1
break A
case"outline_share":t.Ju()
w=1
break A
case"flashcard_tool":t.uV(D.Hv)
w=1
break A
case"quiz_tool":t.uV(D.Hw)
w=1
break A
case"worksheet_tool":t.uV(D.Hx)
w=1
break A
case"duplicate_el":s=t.jG()
if(s==null){w=1
break A}t.d1(new C.emC(t,s))
w=1
break A
case"delete_el":t.arb()
w=1
break A
case"bring_fwd":s=t.jG()
if(s==null||t.gdq()==null){w=1
break A}t.d1(new C.emD(t,s))
w=1
break A
case"send_back":s=t.jG()
if(s==null||t.gdq()==null){w=1
break A}t.d1(new C.emO(t,s))
w=1
break A
case"align_left":s=t.jG()
if(s!=null)t.d1(new C.emR(s))
w=1
break A
case"align_center":s=t.jG()
if(s!=null)t.d1(new C.emS(s))
w=1
break A
case"align_right":s=t.jG()
if(s!=null)t.d1(new C.emT(s))
w=1
break A
case"grayscale":case"brighten":t.ND()
w=1
break A
case"flip_h":s=t.jG()
if(s!=null)t.d1(new C.emU(s))
w=1
break A
case"flip_v":s=t.jG()
if(s!=null)t.d1(new C.emV(s))
w=1
break A
case"rectangle":t.oL(D.be)
w=1
break A
case"circle":t.oL(D.eI)
w=1
break A
case"triangle":t.oL(D.jD)
w=1
break A
case"arrow":t.oL(D.Ck)
w=1
break A
case"line":case"divider":t.oL(D.fq)
w=1
break A
case"word_count":r=t.gdq()
if(r==null){w=1
break A}for(q=A.d.gaf(r.z),p=new B.fk(q,new C.emW()),o=0;p.C();){n=A.a.fz(A.a.i(q.gU(0).r),B.af("\\s+",!0,!1,!1,!1))
o+=new B.a2(n,new C.emX(),B.T(n).k("a2<1>")).gM(0)}t.c.I(x.q).f.R(B.b2(null,null,null,null,null,A.r,null,B.d(""+o+" words on this slide",null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
w=1
break A
case"title":q=C.cC()
t.iP(C.iR(A.L,!1,t.gq2().d.l(),A.aD,40,A.bl,A.u,0.18,q,"Presentation Title",0,D.mv,0.8,0.1,0.28))
w=1
break A
case"subtitle":q=C.cC()
t.iP(C.iR(A.L,!1,t.gq2().e.l(),A.aD,22,A.bl,A.a4,0.12,q,"Subtitle goes here",0,D.dd,0.8,0.1,0.48))
w=1
break A
case"bullets":t.iP(C.iR(A.bg,!0,4279310375,A.aD,20,A.bl,A.a4,0.5,C.cC(),"\u2022 First point\n\u2022 Second point\n\u2022 Third point",0,D.u8,0.8,0.1,0.22))
w=1
break A
case"numbered":t.iP(C.iR(A.bg,!1,4279310375,A.aD,20,A.bl,A.a4,0.5,C.cC(),"1. First item\n2. Second item\n3. Third item",0,D.u7,0.8,0.1,0.22))
w=1
break A
case"quote":t.iP(C.iR(A.L,!1,4279310375,A.aD,24,A.cD,A.a4,0.25,C.cC(),'"Insert meaningful quote here."',0,D.dd,0.8,0.1,0.3))
w=1
break A
case"citation":t.iP(C.iR(A.bg,!1,4284773515,A.aD,14,A.bl,A.a4,0.1,C.cC(),"Author, Title (Year). Publisher.",0,D.u8,0.8,0.1,0.78))
w=1
break A
case"date_stamp":t.iP(C.iR(A.dL,!1,4279310375,A.aD,14,A.bl,A.a4,0.08,C.cC(),C.bBb(),0,D.dd,0.24,0.72,0.04))
w=1
break A
case"page_number":t.iP(C.iR(A.dL,!1,4279310375,A.aD,13,A.bl,A.a4,0.06,C.cC(),"Page "+(t.f+1),0,D.dd,0.18,0.78,0.9))
w=1
break A
case"header_bar":t.d1(new C.emE(t))
w=1
break A
case"footer_bar":t.d1(new C.emF(t))
w=1
break A
case"highlight":t.d1(new C.emG(t))
w=1
break A
case"redact":t.d1(new C.emH(t))
w=1
break A
case"callout":t.d1(new C.emI(t))
w=1
break A
case"checkboxes":t.iP(C.iR(A.bg,!1,4279310375,A.aD,20,A.bl,A.a4,0.45,C.cC(),"\u2610 Task one\n\u2610 Task two\n\u2610 Task three",0,D.dd,0.8,0.1,0.2))
w=1
break A
case"table":t.iP(C.iR(A.bg,!1,4279310375,A.aD,16,A.bl,A.a4,0.55,C.cC(),"Column A\tColumn B\tColumn C\nRow 1\tData\tData\nRow 2\tData\tData",0,D.dd,0.8,0.1,0.18))
w=1
break A
case"memo":t.d1(new C.emJ(t))
w=1
break A
case"letter":t.iP(C.iR(A.bg,!1,4279179050,A.aD,17,A.bl,A.a4,0.82,C.cC(),C.bBb()+"\n\nDear [Name],\n\n[Letter body]\n\nSincerely,\n[Your name]",0,D.dd,0.8,0.1,0.08))
w=1
break A
case"agenda":t.iP(C.iR(A.bg,!1,4279310375,A.aD,22,A.bl,A.O,0.76,C.cC(),"AGENDA\n\n1. Welcome\n2. Updates\n3. Discussion\n4. Action items\n5. Next steps",0,D.u8,0.8,0.1,0.12))
w=1
break A
case"toc":t.iP(C.iR(A.bg,!1,4279310375,A.aD,18,A.bl,A.a4,0.76,C.cC(),"TABLE OF CONTENTS\n\n1. Introduction .......... 1\n2. Main topic .......... 3\n3. Conclusion .......... 8",0,D.dd,0.8,0.1,0.12))
w=1
break A
case"sig_line":t.iP(C.iR(A.bg,!1,4279310375,A.aD,16,A.bl,A.a4,0.08,C.cC(),"Signature: _________________________",0,D.dd,0.8,0.1,0.78))
w=1
break A
case"initial_line":t.iP(C.iR(A.bg,!1,4279310375,A.aD,16,A.bl,A.a4,0.08,C.cC(),"Initials: ______",0,D.dd,0.3,0.65,0.78))
w=1
break A
case"approved":t.iP(C.iR(A.L,!1,4278556265,A.aD,28,A.bl,A.u,0.12,C.cC(),"APPROVED",0,D.mv,0.32,0.62,0.08))
w=1
break A
case"draft":t.iP(C.iR(A.L,!1,4292617766,A.aD,28,A.bl,A.u,0.12,C.cC(),"DRAFT",0,D.dd,0.32,0.62,0.08))
w=1
break A
case"confidential":t.iP(C.iR(A.L,!1,871318596,A.aD,36,A.bl,A.u,0.12,C.cC(),"CONFIDENTIAL",0,D.dd,0.8,0.1,0.42))
w=1
break A
case"sticky":t.d1(new C.emK(t))
w=1
break A
case"progress":t.d1(new C.emL(t))
w=1
break A
case"stars":t.iP(C.iR(A.L,!1,4279310375,A.aD,36,A.bl,A.a4,0.12,C.cC(),"\u2605\u2605\u2605\u2605\u2606",0,D.q_,0.8,0.1,0.4))
w=1
break A
case"equation":t.iP(C.iR(A.L,!1,4279310375,A.aD,32,A.bl,A.O,0.14,C.cC(),"y = mx + b",0,D.dd,0.8,0.1,0.38))
w=1
break A
case"timeline":t.iP(C.iR(A.L,!1,4279310375,A.aD,18,A.bl,A.a4,0.2,C.cC(),"2024 \u2500\u2500\u25ba 2025 \u2500\u2500\u25ba 2026\nPhase 1    Phase 2    Phase 3",0,D.u7,0.8,0.1,0.35))
w=1
break A
case"two_col":t.d1(new C.emM(t))
w=1
break A
case"compare":t.d1(new C.emN(t))
w=1
break A
case"link_text":t.iP(C.iR(A.bg,!1,4280640491,A.mA,16,A.bl,A.a4,0.1,C.cC(),"https://example.com",0,D.dd,0.8,0.1,0.5))
w=1
break A
case"phone":t.iP(C.iR(A.bg,!1,4279310375,A.aD,18,A.bl,A.a4,0.1,C.cC(),"(555) 123-4567",0,D.dd,0.8,0.1,0.5))
w=1
break A
case"email":t.iP(C.iR(A.bg,!1,4280640491,A.aD,18,A.bl,A.a4,0.1,C.cC(),"name@email.com",0,D.dd,0.8,0.1,0.5))
w=1
break A
case"qr_placeholder":t.d1(new C.emP(t))
w=1
break A
case"cover_page":r=t.gdq()
if(r==null){w=1
break A}t.d1(new C.emQ(t,r))
w=1
break A
case"invoice":t.iP(C.iR(A.bg,!1,4279179050,A.aD,16,A.bl,A.a4,0.84,C.cC(),"INVOICE #001\n\nBill To:\nItem\tQty\tPrice\nService A\t1\t$100\nTOTAL\t\t$100",0,D.dd,0.8,0.1,0.08))
w=1
break A
case"resume":t.iP(C.iR(A.bg,!1,4279179050,A.aD,17,A.bl,A.a4,0.84,C.cC(),"YOUR NAME\nJob Title\n\nExperience\n\u2022 Role at Company\n\nEducation\n\u2022 Degree",0,D.dd,0.8,0.1,0.08))
w=1
break A
case"minutes":t.iP(C.iR(A.bg,!1,4279310375,A.aD,16,A.bl,A.a4,0.88,C.cC(),"MEETING MINUTES\nDate: "+C.bBb()+"\nAttendees:\n\nDiscussion:\n\nDecisions:\n\nAction items:",0,D.dd,0.8,0.1,0.06))
w=1
break A
case"lab_report":t.iP(C.iR(A.bg,!1,4279310375,A.aD,17,A.bl,A.a4,0.88,C.cC(),"LAB REPORT\n\nHypothesis:\n\nProcedure:\n\nResults:\n\nConclusion:",0,D.dd,0.8,0.1,0.06))
w=1
break A
case"rubric":t.iP(C.iR(A.bg,!1,4279310375,A.aD,15,A.bl,A.a4,0.8,C.cC(),"RUBRIC\nCriteria\tExcellent\tGood\tNeeds work\nContent\t4\t3\t2\nOrganization\t4\t3\t2",0,D.dd,0.8,0.1,0.1))
w=1
break A}case 1:return B.h(u,v)}})
return B.i($async$pN,v)},
cqh(d){if(!this.y)return!1
if(this.w!=null)return!1
if(!d)return!0
return!D.eHj.t(0,this.z)},
cqg(d){if(this.jG()==null)return!1
if(this.w!=null)return!1
if(d)return!1
return this.as},
b5T(d,e,f,g,h,i){var w,v,u,t,s,r,q,p=null,o=d===D.cg,n=o?12:10
if(e)w=f.j(0.25)
else w=g?A.c.j(0.06):A.w.j(0.04)
v=B.m(12)
u=e?f:A.bF
u=B.I(u,A.q,o&&e?2:1)
t=C.i_z(d)
s=o?12:18
r=o?A.H:A.cN
if(o)if(e)q=f
else q=g?A.ad:A.ak
else q=p
n=B.a([B.p(p,B.d(t,p,p,p,p,p,p,B.l(p,p,q,p,p,p,p,p,p,p,p,s,p,p,r,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),A.f,p,p,new B.o(w,p,u,v,p,p,A.n),p,p,p,p,new B.Q(n,8,n,8),p,p,p)],x.p)
if(i)n.push(B.ao(p,B.p(p,D.Nn,A.f,p,p,D.DD,p,12,p,p,p,p,p,12),p,p,p,-2,-2,p))
return new B.C(A.fy,B.aE(p,new B.an(A.W,p,A.aa,A.f,n,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,h,p,p,p,p,p,p,!1,A.a8),p)},
bKR(d){var w,v=null,u=this.jG()
if(u==null)return A.bH
w=B.a([A.ab,B.d("Anim:",v,v,v,v,v,v,B.l(v,v,d?A.az:A.ak,v,v,v,v,v,v,v,v,10,v,v,A.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.bp],x.p)
A.d.v(w,new B.K(D.PQ,new C.eo8(this,u,d),x.bR))
return B.A(w,A.m,v,A.e,A.j,0,v,v)},
uV(d){return this.bxv(d)},
bxv(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$uV=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=D.aLY.t(0,d)
if(s){w=3
break}else f=s
w=4
break
case 3:w=5
return B.b(t.nS(),$async$uV)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}t.d1(new C.emt(t,d))
case 1:return B.h(u,v)}})
return B.i($async$uV,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
if(h.x)return D.eG5
w=h.e
if(w==null)return h.bBj()
v=h.gdq()
v.toString
u=h.c
u.toString
t=B.O(u).ax.a===A.I
u=h.c
u.toString
s=x.w
r=B.aI(u,A.bT,s).w.a.a<900
q=!r
u=h.c
u.toString
p=B.aI(u,A.eD,s).w.f.d>40
s=h.w==null
o=!s
u=!p
n=!u||o
m=t?A.bX:D.b8H
l=x.p
k=B.a([],l)
if(s){j=h.e
j=j!=null&&j.gRC()}else j=!1
if(j)k.push(new C.a7_(h.a.c,!1,h.e.gb84(),h.gc6G(),g))
else if(s&&h.e!=null&&!h.k5()&&C.ccH(h.e.w)){j=h.a
k.push(new C.a7_(j.c,j.d,g,h.gc7P(),g))}if(s)k.push(h.bKN(w,t,r))
if(s&&h.k5()){w=t?A.fn:A.ke
j=B.m(14)
i=B.I(A.bj.j(0.35),A.q,1)
k.push(B.p(g,B.A(B.a([D.bIZ,A.ab,B.D(B.d("Received copy \u2014 view, print, or download only. Editing is turned off.",g,g,g,g,g,g,B.l(g,g,t?A.c:A.fn,g,g,g,g,g,g,g,g,12,g,g,A.O,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),1)],l),A.m,g,A.e,A.j,0,g,g),A.f,g,g,new B.o(w,g,i,j,g,g,A.n),g,g,g,A.AI,A.ix,g,g,g))}w=!n
if(w&&!h.k5())k.push(h.c_X(t,r))
if(w&&h.k5())k.push(h.cxx(t))
if(r&&h.jG()!=null&&w&&!h.k5())k.push(h.c_T(t))
j=B.a([],l)
if(q&&w)j.push(new B.a6(132,g,h.b3R(t,!0),g))
i=B.a([],l)
if(r&&w)i.push(new B.a6(g,72,h.b3R(t,!1),g))
i.push(B.D(new B.bH(A.b0,g,g,h.bCB(v,t,!s||p),g),1))
if(h.cqh(r)&&u&&s&&!h.k5())i.push(h.c6u(v,t,r))
j.push(B.D(B.v(i,A.m,g,A.e,A.j,0,A.p),1))
if(q&&!h.k5()&&h.cqg(!1))j.push(new B.a6(240,g,h.bNl(t),g))
k.push(B.D(B.A(j,A.aj,g,A.e,A.j,0,g,g),1))
if(u&&s)k.push(new B.a6(g,r?72:h.a.e,g,g))
w=B.a([B.v(k,A.m,g,A.e,A.j,0,A.p)],l)
if(o&&r)w.push(h.c_U(t))
return B.c8(g,m,B.bm(!1,new B.an(A.W,g,A.aa,A.r,w,g),!0,!1,A.af,!0,!0),g,!1,!1,g,!1)},
bBj(){var w,v,u,t,s,r=this,q=null,p=r.c
p.toString
w=B.O(p).ax.a===A.I
p=w?A.bX:A.bM
v=r.a.e
u=r.c5K(A.bj,A.pF,new C.enb(r),r.gc9Z(),"School & document toolkit \u2014 edit PDFs, photos, sign papers, present, and build class decks","NGMY SLIDES")
t=x.p
s=B.A(B.a([B.D(r.aKV(A.bj,A.hx,"Blank Presentation",new C.enc(r)),1),A.av,B.D(r.aKV(A.aZ,A.y3,"Class Template",new C.end(r)),1)],t),A.m,q,A.e,A.j,0,q,q)
u=B.a([u,A.bw,s,A.mz,B.d("YOUR PRESENTATIONS",q,q,q,q,q,q,B.l(q,q,w?A.az:A.ak,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1.2,q,q,q,q,q,q),q,q,q),A.ac],t)
t=r.d
if(t.length===0)u.push(r.byj(w))
else{t=new B.hX(t,B.T(t).k("hX<1>"))
A.d.v(u,t.gdK(t).dt(0,new C.ene(r,w),x.l))}return B.c8(q,p,B.bm(!1,B.cB(u,q,new B.Q(18,12,18,v),q,q,A.ah,!1),!0,!1,A.af,!0,!0),q,!1,!1,q,q)},
bJ6(){this.m(new C.enP(this))
var w=this.c
w.toString
if(B.aI(w,A.bT,x.w).w.a.a<900){w=$.aT.ak$.d.c
if(w!=null)w.jw()}},
aek(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$aek=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.jG()==null){w=1
break}s=t.c
s.toString
s=B.O(s)
r=t.c
r.toString
w=3
return B.b(B.bV(A.K,null,new C.eq_(t,s.ax.a===A.I),r,!0,!0,!0,null,!1,!1,x.H),$async$aek)
case 3:case 1:return B.h(u,v)}})
return B.i($async$aek,v)},
Av(d,e){return this.cqD(d,e)},
cqD(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$Av=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:j=r.c
j.toString
w=3
return B.b(B.hR(D.VU,!0,"Dismiss",j,new C.ery(),new C.erz(d,e),A.iv,!0,x.N),$async$Av)
case 3:o=g
if(o==null||r.c==null){w=1
break}j=o==="rename"
if(j||o==="duplicate")if(d.z){r.ahH()
w=1
break}n=o==="transfer_hati"
if(n&&d.z&&!d.gRC()){r.ahH()
w=1
break}w=o==="pdf"?4:6
break
case 4:t=8
w=11
return B.b(C.aOH(d),$async$Av)
case 11:q=g
j=r.c
if(j==null){w=1
break}w=12
return B.b(C.aO6(j,q,d.b),$async$Av)
case 12:t=2
w=10
break
case 8:t=7
i=s.pop()
p=B.a9(i)
j=r.c
if(j==null){w=1
break}j.I(x.q).f.R(B.b2(null,null,null,null,null,A.r,null,B.d("Could not create PDF: "+B.t(p),null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
w=10
break
case 7:w=2
break
case 10:w=5
break
case 6:w=n?13:15
break
case 13:w=16
return B.b(r.EN(d,!1),$async$Av)
case 16:w=14
break
case 15:w=o==="delete"?17:19
break
case 17:j=r.c
j.toString
w=20
return B.b(B.hR(D.VU,!0,"Dismiss",j,new C.erA(),new C.erB(d),A.a1,!0,x.y),$async$Av)
case 20:if(g===!0)r.Np(d)
w=18
break
case 19:w=j?21:23
break
case 21:w=24
return B.b(r.afn("Rename presentation",d.b),$async$Av)
case 24:l=g
if(l!=null)r.cl5(d,l)
w=22
break
case 23:if(o==="duplicate"){k=d.ae()
k.n(0,"id",C.cC())
k.n(0,"name",d.b+" (Copy)")
r.m(new C.erC(r,k))
r.p0()}case 22:case 18:case 14:case 5:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Av,v)},
aZY(d,e){var w=null
return B.bK(!1,D.fnw,w,w,!0,w,w,e,w,B.fv(w,w,w,w,w,w,w,w,w,w,w,A.bj,w,w,w,A.au,w,A.lH,w,w,w,w,w,A.km,w,w))},
byj(d){var w=this.fy
w===$&&B.c()
return B.c6(w,new C.emy(this,d),null)},
bHe(d,e,f){var w=new B.K(B.a(d.split(" \u2022 "),x.s),new C.enD(),x.dv).c_(0,new C.enE()),v=B.B(w,w.$ti.k("J.E"))
return new B.C(G.afT,this.aLt(v,e,new C.enF(),f),null)},
aLt(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=x.p,l=B.a([],m)
for(w=f!=null,v=0;v<d.length;++v){u=B.a([],m)
if(v>0)u.push(A.eb)
t=e.j(g?0.14:0.1)
s=new B.aV(6,6)
r=new B.aA(e.j(g?0.55:0.45),1,A.q,-1)
q=B.a([],m)
if(w){p=f.$1(d[v])
A.d.v(q,B.a([B.W(p,g?A.ad:A.bv,n,n,n,10),A.q6],m))}p=d[v]
o=g?A.c.j(0.85):A.aK
q.push(new B.x(p,n,new B.G(!0,o,n,n,n,n,9.5,A.H,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n,n,n,n,1,n,n))
u.push(B.p(n,new B.cl(A.aO,A.e,A.Q,A.m,n,A.p,n,0,q,n),A.f,n,n,new B.o(t,n,new B.bP(r,r,r,r),new B.bq(s,s,s,s),n,n,A.n),n,n,n,n,A.n6,n,n,n))
A.d.v(l,u)}return B.f2(A.a3,B.A(l,A.m,n,A.e,A.Q,0,n,n),A.f,A.eg)},
byh(d,e,f){return this.aLt(d,e,null,f)},
bHg(d,e,f){var w,v=d.w
if(v==="hati_kuhowa")w=D.d8u
else if(v==="hati_kuhoweya")w=D.cVX
else{if(v==="hati_kiapo_uongozi")v=D.cJf
else v=C.kr(v)?D.cQ7:A.Pr
w=v}v=this.fy
v===$&&B.c()
return B.c6(v,new C.enI(this,f,d,e,w),null)},
c_U(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.jG()
if(i==null||i.b!==D.cQ)return A.bH
w=k.VV(i)
v=k.asc(i)
u=A.w.j(0.55)
t=x.p
s=B.bm(!1,new B.C(A.AL,B.A(B.a([B.d("Edit text",j,j,j,j,j,j,B.l(j,j,A.c.j(0.9),j,j,j,j,j,j,j,j,15,j,j,A.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),A.b4,B.bK(!1,D.fjh,j,j,!0,j,j,new C.ep8(k),j,j)],t),A.m,j,A.e,A.j,0,j,j),j),!0,!1,A.af,!0,!0)
r=d?A.aB:A.c
q=B.m(18)
p=B.I(A.bj.j(0.45),A.q,1)
o=B.a([new B.ac(0,A.G,A.w.j(0.25),A.J,20)],x.V)
n=i.x
m=i.y
l=i.z
r=B.D(new B.C(A.h6,B.c_(new B.C(A.eP,B.aL(j,A.T,!0,j,!0,A.r,j,B.aM(),w,A.bj,j,j,j,j,2,D.bOS,A.y,!0,j,!0,j,!0,v,A.ai,j,j,j,j,j,A.w4,j,j,j,j,j,j,!1,"\u2022",j,new C.ep9(k,i),j,j,j,!1,j,j,!1,j,!0,j,A.a9,j,j,j,j,j,j,j,j,j,j,j,B.l(j,j,d?A.c:A.M,j,l,j,j,j,j,j,j,18,m,j,n,j,1.35,!0,j,j,j,j,j,j,j,j),!0,A.a5,A.zf,A.am,j,A.SC,j,j),j),new B.o(r,j,p,q,o,j,A.n),A.bd),j),1)
q=B.m(16)
p=d?A.bm:A.c
o=B.I(d?A.aK:A.aL,A.q,1)
n=B.D(B.cd(B.A(B.a([k.tE(G.Mn,j,new C.epa(k,i),d),k.tE(G.Zr,j,new C.epb(k,i),d),k.tE(I.ak9,j,new C.epc(k,i),d),k.tE(I.a_7,j,new C.epd(k,i),d),k.tE(k.byf(i.as),j,new C.epe(k,i),d),k.tE(D.all,j,new C.epf(k,i),d),k.tE(D.alk,j,new C.epg(k,i),d)],t),A.m,j,A.e,A.j,0,j,j),A.r,j,A.y,j,j,j,j,A.aO),1)
m=A.k.O(i.w)
return B.bY(0,B.aF(!1,A.a1,!0,j,B.v(B.a([s,r,new B.C(O.ag1,B.p(j,B.A(B.a([n,A.ab,B.d(""+m+" pt",j,j,j,j,j,j,B.l(j,j,d?A.az:A.ak,j,j,j,j,j,j,j,j,11,j,j,A.H,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),A.d8],t),A.m,j,A.e,A.j,0,j,j),A.f,j,j,new B.o(p,j,o,q,j,j,A.n),j,j,j,j,A.l9,j,j,j),j)],t),A.m,j,A.e,A.j,0,A.p),A.f,u,0,j,j,j,j,j,A.ag),0,0,0)},
c_T(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.jG()
if(m==null)return A.bH
w=m.b
v=w===D.cQ
u=B.m(18)
t=x.O
t=d?B.a([A.bm,A.M],t):B.a([A.c,A.aQ],t)
s=B.I(d?A.aK:A.aL,A.q,1)
r=B.a([new B.ac(0,A.G,A.w.j(0.12),A.cv,16)],x.V)
q=x.p
p=B.a([],q)
if(v)p.push(o.b2w(A.jg,"Edit",new C.eoU(o,m),d,!0))
if(w===D.lk)p.push(o.b2w(A.FY,"Shape & ring",new C.eoV(o),d,!0))
p.push(o.tE(A.Bv,"Format",new C.eoW(o),d))
if(v)A.d.v(p,B.a([o.tE(G.Mn,n,new C.eoX(o,m),d),o.tE(D.all,n,new C.eoY(o,m),d),o.tE(D.alk,n,new C.eoZ(o,m),d)],q))
p.push(A.b4)
p.push(o.cow(A.e4,n,o.gaPr(),d,!0))
p.push(o.tE(A.hy,"Done",new C.ep_(o),d))
return B.p(n,B.A(p,A.m,n,A.e,A.j,0,n,n),A.f,n,n,new B.o(n,n,s,u,r,new B.a7(A.a3,A.a7,A.x,t,n,n),A.n),n,n,n,A.AJ,A.l9,n,n,n)},
byf(d){switch(d.a){case 2:return D.a_4
case 1:case 5:return D.a_6
default:return D.a_5}},
c0K(d){switch(d.a){case 0:case 4:return A.L
case 2:return A.dL
default:return A.bg}},
ayw(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o,n=null
if(i)w=A.ay
else if(h)w=A.c
else{v=g?A.ad:A.aK
w=v}v=B.m(12)
u=B.m(12)
t=h?K.Gi:n
if(h)s=n
else s=g?A.c.j(0.06):A.bM
r=e==null
q=r?10:12
p=x.p
o=B.a([B.W(d,w,n,n,n,16)],p)
if(!r)A.d.v(o,B.a([A.eb,B.d(e,n,n,n,n,n,n,B.l(n,n,w,n,n,n,n,n,n,n,n,12,n,n,A.H,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],p))
return new B.C(A.qM,B.aF(!1,A.a1,!0,n,B.aK(!1,v,!1,B.ez(new B.C(new B.Q(q,8,q,8),B.A(o,A.m,n,A.e,A.Q,0,n,n),n),n,new B.o(s,n,n,u,n,t,A.n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,f,n,n,n,n,n,n,n),A.f,A.K,0,n,n,n,n,n,A.ag),n)},
tE(d,e,f,g){return this.ayw(d,e,f,g,!1,!1)},
b2w(d,e,f,g,h){return this.ayw(d,e,f,g,h,!1)},
cow(d,e,f,g,h){return this.ayw(d,e,f,g,!1,h)},
bKN(d,e,f){var w,v,u,t,s,r,q,p=this,o=null,n=B.m(20),m=x.O
m=e?B.a([A.bm,A.M],m):B.a([A.c,A.mM],m)
w=B.I(e?A.aK:A.pe,A.q,1.2)
v=B.a([new B.ac(0,A.G,A.bj.j(e?0.18:0.1),A.cv,18)],x.V)
u=p.a1N(A.eA,"Back",p.gbEk(),e)
t=d.b
s=f?14:15
t=B.d(t,o,1,A.a2,o,o,o,B.l(o,o,e?A.c:A.M,o,o,o,o,o,o,o,o,s,o,o,A.u,o,o,!0,o,-0.2,o,o,o,o,o,o),o,o,o)
s=p.f
r=d.r.length
q=x.p
r=B.a([u,A.d8,B.D(B.A(B.a([new B.dm(1,A.ci,t,o),A.ab,B.d(""+(s+1)+" of "+r,o,1,o,o,o,o,B.l(o,o,e?A.c_:A.ak,o,o,o,o,o,o,o,o,11,o,o,A.O,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],q),A.ti,o,A.e,A.j,0,A.cV,o),1)],q)
if(!p.k5()){u=p.a1N(A.r0,"Undo",p.ax.length===0?o:p.gcy1(),e)
A.d.v(r,B.a([u,p.a1N(D.bCA,"Redo",p.ay.length===0?o:p.gcjO(),e)],q))}r.push(p.a1N(A.xK,"PDF",new C.eo1(p),e))
r.push(p.a1N(A.hz,"Download as video",new C.eo2(p),e))
if(!p.k5())r.push(B.Bq(o,o,B.W(A.nU,e?A.ad:A.bv,o,o,o,o),new C.eo3(p),A.J,new C.eo4(p),A.af,"More",x.N))
r.push(A.d8)
r.push(B.aF(!1,A.a1,!0,o,B.aK(!1,B.m(14),!0,B.ez(D.e3F,o,new B.o(o,o,o,B.m(14),o,K.Gi,A.n),o,o,o),o,!0,o,o,o,o,o,o,o,o,o,o,o,p.gazl(),o,o,o,o,o,o,o),A.f,A.K,0,o,o,o,o,o,A.ag))
return B.p(o,B.A(r,A.m,o,A.e,A.j,0,o,o),A.f,o,o,new B.o(o,o,w,n,v,new B.a7(A.ax,A.aC,A.x,m,o,o),A.n),o,o,o,D.boE,D.btL,o,o,o)},
cxx(d){var w=this,v=null,u=B.m(18),t=d?A.aB.j(0.92):A.c.j(0.96),s=B.I(d?A.cC:A.aL,A.q,1)
return B.p(v,B.cd(B.A(B.a([w.iw(A.tO,"Print",new C.esj(w),d),w.iw(A.xK,"Download PDF",new C.esk(w),d),w.iw(A.pM,"Present",w.gazl(),d)],x.p),A.m,v,A.e,A.j,0,v,v),A.r,v,A.y,v,v,v,v,A.aO),A.f,v,v,new B.o(t,v,s,u,v,v,A.n),v,v,v,A.AI,G.ahG,v,v,v)},
a1N(d,e,f,g){var w,v=null
if(f==null)w=g?A.b2:A.dn
else w=g?A.ad:A.aK
return B.aH(v,v,v,v,B.W(d,w,v,v,v,20),v,v,v,f,v,v,v,v,e,A.c7)},
c_X(d,e){var w,v,u,t,s,r=this,q=null,p=B.a(["Home","Insert","School","Tools","Design","Transitions","View"],x.s),o=r.e
if(o==null)o=q
else{o=o.CW
o=(o==null?"":o).length!==0}w=o===!0
o=B.m(18)
v=d?A.aB.j(0.92):A.c.j(0.96)
u=B.I(d?A.cC:A.aL,A.q,1)
t=x.f0
t=B.B(new B.K(p,new C.epj(r,d),t),t.k("aj.E"))
t.push(new B.C(Y.ahl,new B.fh(new C.epk(r),q),q))
A.d.v(t,w?B.a([new B.C(R.vg,r.ag_(A.la,"Ending celebration",r.gcab(),d),q),new B.C(R.vg,r.ag_(A.FY,"Logo ring & frame",r.gcaS(),d),q)],x.p):A.ha)
A.d.v(t,w?B.a([new B.C(R.vg,r.ag_(A.n9,"Look and feel",r.gcaT(),d),q),new B.C(R.vg,r.ag_(A.oI,"Edit this slide's text",r.gcbp(),d),q)],x.p):A.ha)
t.push(new B.C(R.vg,B.hp(B.aE(q,B.p(q,D.eFz,A.f,q,q,new B.o(q,q,q,B.m(999),B.a([new B.ac(0,A.G,N.l4.j(0.4),A.J,10)],x.V),D.anj,A.n),q,34,q,q,A.fT,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.epl(r),q,q,q,q,q,q,!1,A.a8),q,"Books \u2014 write and print a fold & staple book",q,q),q))
t=B.cd(B.A(t,A.m,q,A.e,A.j,0,q,q),A.r,q,A.y,q,D.bud,q,q,A.aO)
s=e?8:10
return B.p(q,B.v(B.a([t,B.cd(r.cme(d),A.r,q,A.y,q,new B.Q(8,2,8,s),q,q,A.aO)],x.p),A.aj,q,A.e,A.j,0,A.p),A.f,q,q,new B.o(v,q,u,o,q,q,A.n),q,q,q,A.AI,q,q,q,q)},
cme(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0="Text Box",a1="New Slide",a2="Delete Slide"
switch(e.z){case"School":w=B.a([],x.p)
for(v=0;v<5;++v){u={}
t=D.d2C[v]
u.a=null
s=u.a=t.b
w.push(e.lz(e.cnW(s),t.a,new C.eqI(u,e),a3,D.aLY.t(0,s)))}w.push(e.iw(A.kL,"Notes Slide",new C.eqJ(e),a3))
w.push(e.lz(A.FX,"Quiz",new C.eqK(e),a3,!0))
w.push(e.lz(L.FA,"Worksheet",new C.eqV(e),a3,!0))
w.push(e.lz(V.G_,"Flashcard",new C.er5(e),a3,!0))
w.push(e.lz(A.Nd,"Lab Report",new C.erg(e),a3,!0))
w.push(e.lz(A.xQ,"Rubric",new C.ern(e),a3,!0))
w.push(e.lz(A.oC,"Minutes",new C.ero(e),a3,!0))
w.push(e.lz(A.pK,"Syllabus",new C.erp(e),a3,!0))
w.push(e.lz(A.Nh,"Timeline",new C.erq(e),a3,!0))
return B.A(w,A.m,d,A.e,A.j,0,d,d)
case"Tools":w=B.a([],x.p)
for(v=0;v<74;++v){r=D.d3P[v]
w.push(e.lz(r.b,r.c,new C.err(e,r),a3,!D.aM2.t(0,A.a.i(r.a))))}return B.A(w,A.m,d,A.e,A.j,0,d,d)
case"Insert":return B.A(B.a([e.iw(A.y6,a0,e.gaLa(),a3),e.iw(A.tL,"Picture",new C.eqL(e),a3),e.iw(A.y_,"Bio link",new C.eqM(e),a3),e.iw(A.a_C,"Table",new C.eqN(e),a3),e.iw(A.Ng,"Sticky",new C.eqO(e),a3),e.iw(A.tK,"Divider",new C.eqP(e),a3),e.iw(A.Bw,"Header",new C.eqQ(e),a3),e.lz(A3.vo,"Rectangle",new C.eqR(e),a3,!0),e.lz(A.qR,"Circle",new C.eqS(e),a3,!0),e.lz(A.ZX,"Triangle",new C.eqT(e),a3,!0),e.lz(A.iS,"Arrow",new C.eqU(e),a3,!0),e.lz(D.bB4,"Parallelogram",new C.eqW(e),a3,!0),e.lz(D.bDx,"Hexagon",new C.eqX(e),a3,!0),e.lz(A.tK,"Line",new C.eqY(e),a3,!0),e.lz(A.xK,"PDF",new C.eqZ(e),a3,!0),e.lz(N.a_L,"Signature",new C.er_(e),a3,!0),e.iw(A2.Bm,"Quote",new C.er0(e),a3),e.iw(D.Zz,a1,new C.er1(e),a3)],x.p),A.m,d,A.e,A.j,0,d,d)
case"Design":w=e.c
w.toString
w=B.aI(w,A.bT,x.w).w
u=x.p
t=B.A(B.a([e.aM_("Wide 16:9",D.Ci,a3),e.aM_("Short 9:16",D.o2,a3),new B.C(A.fy,B.mB(D.bFF,d,D.ffE,d,new C.er2(e),d,d,d,d),d)],u),A.m,d,A.e,A.j,0,d,d)
q=B.A(B.a([e.bEz("This slide",!e.Q,a3,new C.er3(e)),A.bp,e.aOa("All slides",e.Q,a3,new C.er4(e),!0)],u),A.m,d,A.e,A.j,0,d,d)
p=e.bEA()
p=B.d(p,d,d,d,d,d,d,B.l(d,d,a3?A.c_:A.bJ,d,d,d,d,d,d,d,d,10,d,d,A.a4,d,d,!0,d,d,d,d,d,d,d,d),d,d,d)
o=B.d("COLORS",d,d,d,d,d,d,B.l(d,d,a3?A.az:A.ak,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
n=x.cT
n=B.B(new B.K(D.a1z,new C.er6(e),n),n.k("aj.E"))
n=B.cd(B.A(n,A.m,d,A.e,A.j,0,d,d),A.r,d,A.y,d,d,d,d,A.aO)
m=B.d("TEXT COLORS",d,d,d,d,d,d,B.l(d,d,a3?A.az:A.ak,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
l=B.a([],u)
for(v=0;v<10;++v){k=D.d4K[v]
j=B.b0(k)
i=new B.aA(k===4294967295?A.dn:A.b2,1.5,A.q,-1)
l.push(new B.C(A.fy,B.aE(d,B.p(d,d,A.f,d,d,new B.o(j,d,new B.bP(i,i,i,i),d,d,d,A.a6),d,24,d,d,d,d,d,24),A.y,!1,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,new C.er7(e,k),d,d,d,d,d,d,!1,A.a8),d))}l=B.cd(B.A(l,A.m,d,A.e,A.j,0,d,d),A.r,d,A.y,d,d,d,d,A.aO)
j=B.d("SLIDE DESIGNS \xb7 first 5 free",d,d,d,d,d,d,B.l(d,d,a3?A.az:A.ak,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
h=$.bCt()
g=B.T(h).k("K<1,C>")
h=B.B(new B.K(h,new C.er8(e,a3),g),g.k("aj.E"))
return new B.a6(w.a.a-20,d,B.v(B.a([t,A.P,q,A.an,p,A.P,o,A.at,n,A.P,m,A.at,l,A.P,j,A.at,B.cd(B.A(h,A.m,d,A.e,A.j,0,d,d),A.r,d,A.y,d,d,d,d,A.aO),A.an,e.bXQ(a3)],u),A.F,d,A.e,A.Q,0,A.p),d)
case"Transitions":f=e.jG()
w=e.c
w.toString
w=B.aI(w,A.bT,x.w).w
u=new C.eqH(e)
t=new C.ers(e,a3)
q=x.p
p=B.a([],q)
if(f!=null){o=B.d("ELEMENT ANIMATION",d,d,d,d,d,d,B.l(d,d,a3?A.az:A.ak,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
n=t.$4(D.PQ,f.dy,new C.er9(e,u,f),A.aZ)
A.d.v(p,B.a([o,A.at,n,A.P,B.d("SLIDE TRANSITION",d,d,d,d,d,d,B.l(d,d,a3?A.az:A.ak,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d),A.at],q))}q=e.gdq()
q=q==null?d:q.r
p.push(t.$4(D.PQ,q,new C.era(e,u),A.bj))
return new B.a6(w.a.a-20,d,B.v(p,A.F,d,A.e,A.Q,0,A.p),d)
case"View":w=e.y?"Hide Notes":"Show Notes"
return B.A(B.a([e.iw(A.kL,w,new C.erb(e),a3),e.iw(A.tO,"Print deck",new C.erc(e),a3),e.lz(D.ajd,"Export JSON",new C.erd(e),a3,!0),e.iw(A.fL,"Duplicate Slide",e.gaQg(),a3),e.iw(A.e4,a2,e.gaPs(),a3),e.crV(a3)],x.p),A.m,d,A.e,A.j,0,d,d)
case"Home":default:f=e.jG()
w=x.p
u=B.a([e.iw(D.Zz,a1,new C.ere(e),a3),e.iw(A.fL,"Duplicate",e.gaQg(),a3),e.iw(A.e4,a2,e.gaPs(),a3),e.iw(A.pM,"Present",e.gazl(),a3),e.iw(A.Bu,a0,e.gaLa(),a3),e.iw(A.Bp,"Fit Text",new C.erf(e),a3),e.iw(A.xK,"Download PDF",new C.erh(e),a3)],w)
t=e.e
if(t!=null){t=t.w
t=t==="hati_kuhowa"||t==="hati_kuhoweya"}else t=!1
if(t)u.push(e.iw(A.kN,"Transfer",new C.eri(e),a3))
if(f!=null){w=B.a([A.ab,e.iw(G.Mn,"Bold",new C.erj(e,f),a3),e.iw(G.Zr,"Italic",new C.erk(e,f),a3),e.iw(G.aiP,"Underline",new C.erl(e,f),a3),e.iw(Ae.Mo,"Bullets",new C.erm(e,f),a3),e.bN4(f,a3)],w)
if(!A.a.a0(f.db,"__design__"))w.push(e.bKR(a3))
w.push(e.iw(D.bzL,"Delete",e.gaPr(),a3))
A.d.v(u,w)}return B.A(u,A.m,d,A.e,A.j,0,d,d)}},
aM_(d,e,f){var w,v,u,t=null,s=this.e
s=s==null?t:s.d
w=e===D.o2
v=x.p
u=B.a([B.d(d,t,t,t,t,t,t,G.a7f,t,t,t)],v)
if(w)A.d.v(u,B.a([A.d8,D.bER],v))
return new B.C(A.fy,B.jI(t,t,t,B.A(u,A.m,t,A.e,A.Q,0,t,t),t,new C.en6(this,w,e),s===e,A.bj.j(0.25),t,t,t),t)},
crV(d){var w,v,u,t,s,r=this,q=null,p=r.gdq()
if(p==null)return A.bH
w=p.w
if(!(w>0)){v=r.e
v=v==null?q:v.e
w=v==null?5:v}v=B.I(d?A.b2:A.cp,A.q,1)
u=B.m(8)
t=B.W(A.Fy,d?A.az:A.ak,q,q,q,14)
s=B.aH(q,q,q,q,D.amj,q,q,q,new C.erP(r,p),q,q,q,q,q,A.c7)
return B.p(q,B.A(B.a([t,s,B.d(""+w+"s",q,q,q,q,q,q,B.l(q,q,d?A.c:A.bh,q,q,q,q,q,q,q,q,11,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.aH(q,q,q,q,D.ama,q,q,q,new C.erQ(r,p),q,q,q,q,q,A.c7)],x.p),A.m,q,A.e,A.Q,0,q,q),A.f,q,q,new B.o(q,q,v,u,q,q,A.n),q,q,q,A.Fe,A.mh,q,q,q)},
cnW(d){switch(d.a){case 6:return V.G_
case 7:return A.FX
case 8:return L.FA
case 4:return A.Bw
default:return A.kL}},
bN4(d,e){var w=null,v=B.I(e?A.b2:A.cp,A.q,1),u=B.m(8),t=B.aH(w,w,w,w,D.amj,w,w,w,new C.eoe(this,d),w,w,w,w,w,A.c7),s=A.k.O(d.w)
return B.p(w,B.A(B.a([t,B.d(""+s,w,w,w,w,w,w,B.l(w,w,e?A.c:A.bh,w,w,w,w,w,w,w,w,w,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aH(w,w,w,w,D.ama,w,w,w,new C.eof(this,d),w,w,w,w,w,A.c7)],x.p),A.m,w,A.e,A.Q,0,w,w),A.f,w,w,new B.o(w,w,v,u,w,w,A.n),w,w,w,A.xt,A.mh,w,w,w)},
bXQ(d){var w=null
return B.Bq(B.CX(B.W(A5.ZC,d?A.ad:A.bv,w,w,w,16),w,w,D.fl4,w,w,w),w,w,new C.eoM(),A.J,this.gbyX(),A.ck,"Slide layout",x.fO)},
lz(d,e,f,g,h){var w=null,v=B.m(14),u=B.m(14),t=g?A.c.j(0.06):A.bM,s=B.I(g?A.dp:A.aL,A.q,1),r=x.p,q=B.a([B.W(d,g?A.dy:A.bj,w,w,w,18)],r)
if(h)q.push(B.ao(w,B.p(w,D.Nn,A.f,w,w,D.DD,w,12,w,w,w,w,w,12),w,w,w,-6,-4,w))
return new B.C(A.fy,B.aF(!1,A.a1,!0,w,B.aK(!1,v,!0,B.ez(new B.C(A.h6,B.v(B.a([new B.an(A.W,w,A.aa,A.f,q,w),A.cX,B.d(e,w,w,w,w,w,w,B.l(w,w,g?A.aR:A.bv,w,w,w,w,w,w,w,w,9,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],r),A.m,w,A.e,A.Q,0,A.p),w),w,new B.o(t,w,s,u,w,w,A.n),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ag),w)},
iw(d,e,f,g){return this.lz(d,e,f,g,!1)},
b3R(d,e){var w,v,u=this,t=null,s=u.e
s.toString
w=e?A.ah:A.aO
v=B.hG(t,new C.es0(u,s,e,d),s.r.length,A.ck,t,w,new C.es1(e),!1)
s=d?A.aB:A.bM
w=B.a([],x.p)
if(e&&!u.k5())w.push(new B.C(A.ck,B.Hd(E.amw,new C.es2(u),B.nr(t,A.bj,t,t,t,t,t,t,t,t,t,t,E.aMG,t,t,t,t),"Add slide"),t))
w.push(B.D(v,1))
return B.p(t,B.v(w,A.m,t,A.e,A.j,0,A.p),A.f,s,t,t,t,t,t,t,t,t,t,t)},
bCB(d,e,f){var w,v=null,u=this.e
if(u==null)w=v
else{u=u.d===D.o2?0.5625:1.7777777777777777
w=u}if(w==null)w=1.7777777777777777
u=f?8:16
return new B.C(new B.Q(u,u,u,u),new B.bH(A.b0,v,v,new B.fG(w,B.aE(v,B.cn(new C.env(this,d,e)),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.enw(this),v,v,v,v,v,v,!1,A.a8),v),v),v)},
bCD(b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=a7.e,b0=(a9==null?a8:C.kr(a9.w))===!0,b1=b0&&C.fx2(b3),b2=b0&&b3.b===D.kS&&A.a.a0(b3.db,"marriage_sign_placed_")
if(b0){a9=b3.db
w=a9==="__kiapo_video__"||A.a.a0(a9,"__kiapo_video___")}else w=!1
if(!a7.k5())v=!b0||a7.c_1(b3)
else v=!1
if(!a7.k5())u=!b0||a7.c_0(b3)
else u=!1
t=v&&a7.r===b3.a
s=b4/960
a9=b3.db
r=A.a.a0(a9,"__design__")||A.a.a0(b3.a,"design_")?A.cb:A.bj
q=b0&&A.a.a0(a9,"marriage_field_")
if(b0)p=a9==="marriage_locked_nim_akuna_deni"||a9==="marriage_locked_nim_akuna_box"||a9==="marriage_locked_nim_akuna_tick"||a9==="marriage_locked_nim_akuna_hit"
else p=!1
if(w&&C.fVq(b3))o=a8
else if(p&&!a7.k5())o=a7.gc6I()
else o=a7.k5()?a8:new C.enj(a7,w,b3,b1,b2,v)
a9=b3.a
n=b3.c
m=b3.d
l=b3.e
k=b3.f
j=p?A.c5:A.jf
i=w&&C.fVq(b3)&&a7.zy()?new C.enk(a7,b3):a8
h=v&&b3.b===D.cQ?new C.enl(a7,b3):a8
g=u?new C.enm(a7,b3,b4,b5):a8
f=b3.cx
if(t)if(a7.w===a9)e=A.bo
else e=q?A.bY:r
else e=A.K
e=B.I(e,A.q,t?2:0)
d=B.m(t?6:0)
if(b1)a0=A.bY.j(0.08)
else a0=b3.b===D.kS?A.K:a8
if(b1){a1=a7.k5()?"":"Tap to sign"
a1=B.av(B.d(a1,a8,a8,a8,a8,a8,a8,B.l(a8,a8,A.bY.j(0.7),a8,a8,a8,a8,a8,a8,a8,a8,10*s,a8,a8,A.O,a8,a8,!0,a8,a8,a8,a8,a8,a8,a8,a8),a8,a8,a8),a8,a8,a8)}else{if(a7.w===a9){a1=a7.c
a1.toString
a1=!(B.aI(a1,A.bT,x.w).w.a.a<900)}else a1=!1
a2=w&&a7.zy()
a3=b3.b===D.cQ
a4=a3?a7.VV(b3):a8
a5=a3?a7.asc(b3):a8
if(a7.w===a9){a6=a7.c
a6.toString
a6=!(B.aI(a6,A.bT,x.w).w.a.a<900)}else a6=!1
a6=a6?new C.enn(a7,b3):a8
a3=v&&a3?new C.eno(a7,b3):a8
a6=C.b_J(q,a4,a1,b3,a5,a2,a3,new C.enp(a7,w,b3,v),a6,s,t,!0)
a1=a6}d=B.a([B.p(a8,a1,A.f,a8,a8,new B.o(a0,a8,e,d,a8,a8,A.n),a8,a8,a8,a8,a8,a8,a8,a8)],x.p)
if(t&&u&&a7.w!==a9){e=B.m(6)
d.push(B.ao(-4,B.aE(a8,B.p(a8,D.bHE,A.f,a8,a8,new B.o(r,a8,B.I(A.c,A.q,1.5),e,a8,a8,A.n),a8,22,a8,a8,a8,a8,a8,22),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.enq(a7,b3,b4,b5),a8,a8,new C.enr(a7,b3),a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,!1,A.a8),a8,a8,a8,-4,a8,a8))}if(b0&&!a7.k5()&&b3.db==="marriage_locked_nim_n_4")d.push(B.ao(a8,B.aE(a8,B.p(a8,D.bIi,A.f,a8,a8,new B.o(A.dz,a8,B.I(A.c,A.q,1.2),a8,B.a([new B.ac(0,A.G,A.w.j(0.25),A.J,4)],x.V),a8,A.a6),a8,20,a8,a8,a8,a8,a8,20),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a7.gbVs(),a8,a8,a8,a8,a8,a8,!1,A.a8),a8,a8,a8,-6,-6,a8))
if(b0&&!a7.k5()&&A.a.a0(b3.db,"marriage_field_tarehe:"))d.push(B.ao(a8,B.aE(a8,B.p(a8,D.bJQ,A.f,a8,a8,new B.o(A.bY,a8,B.I(A.c,A.q,1.2),a8,B.a([new B.ac(0,A.G,A.w.j(0.25),A.J,4)],x.V),a8,A.a6),a8,20,a8,a8,a8,a8,a8,20),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.ens(a7,b3),a8,a8,a8,a8,a8,a8,!1,A.a8),a8,a8,a8,-6,-6,a8))
e=!1
if(t)if(b3.b===D.cQ)if(a7.w!==a9){e=a7.c
e.toString
e=B.aI(e,A.bT,x.w).w.a.a<900}if(e)d.push(B.ao(-28,B.av(B.aE(a8,B.p(a8,D.ftE,A.f,a8,a8,new B.o(A.bj,a8,a8,B.m(999),B.a([new B.ac(0,A.G,A.w.j(0.2),A.J,8)],x.V),a8,A.n),a8,a8,a8,a8,A.kJ,a8,a8,a8),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.ent(a7,b3),a8,a8,a8,a8,a8,a8,!1,A.a8),a8,a8,a8),a8,a8,0,0,a8,a8))
return B.ao(a8,B.aE(j,B.eC(A.A,f,new B.an(A.W,a8,A.aa,A.f,d,a8),a8),A.y,!1,a8,h,a8,a8,a8,a8,a8,a8,i,a8,a8,a8,a8,a8,a8,g,a8,a8,a8,a8,a8,a8,a8,o,a8,a8,a8,a8,a8,a8,!1,A.a8),k*b5,new B.cw("el_"+a9,x.W),n*b4,a8,m*b5,l*b4)},
aOa(d,e,f,g,h){var w,v,u,t,s,r=null
if(e)w=A.bj.j(0.25)
else w=f?A.c.j(0.06):A.w.j(0.04)
v=B.m(10)
u=B.I(e?A.bj:A.bF,A.q,1)
if(e)t=A.bj
else t=f?A.az:A.ak
s=x.p
t=B.a([B.d(d,r,r,r,r,r,r,B.l(r,r,t,r,r,r,r,r,r,r,r,10,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],s)
if(h)A.d.v(t,B.a([A.d8,B.p(r,D.Nn,A.f,r,r,D.DD,r,12,r,r,r,r,r,12)],s))
return B.aE(r,B.p(r,B.A(t,A.m,r,A.e,A.Q,0,r,r),A.f,r,r,new B.o(w,r,u,v,r,r,A.n),r,r,r,r,A.h5,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,g,r,r,r,r,r,r,!1,A.a8)},
bEz(d,e,f,g){return this.aOa(d,e,f,g,!1)},
c6u(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=d.a
if(m.cy!==k){m.cy=k
w=m.cx
v=w.h(0,k)
if(v!=null){v.S$=$.aw()
v.P$=0}v=d.c
w.n(0,k,new B.ar(new B.bb(v,A.b3,A.aN),$.aw()))}k=m.cx.h(0,k)
k.toString
w=f?8:10
v=f?8:10
u=e?A.aB:A.aQ
t=f?A.wv:l
if(f)s=new B.bP(new B.aA(e?A.bF:A.aL,1,A.q,-1),A.Y,A.Y,A.Y)
else s=l
r=f?B.a([new B.ac(0,A.G,A.w.j(0.12),A.rk,16)],x.V):l
q=x.p
p=B.A(B.a([B.d("Speaker Notes",l,l,l,l,l,l,B.l(l,l,e?A.ad:A.bv,l,l,l,l,l,l,l,l,12,l,l,A.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),A.b4,m.aZY(e,new C.epn(m))],q),A.m,l,A.e,A.j,0,l,l)
o=B.l(l,l,e?A.c:A.aK,l,l,l,l,l,l,l,l,12,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
n=B.l(l,l,e?A.c_:A.bJ,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
return B.p(l,B.v(B.a([p,A.an,B.D(B.aL(l,A.T,!1,l,!0,A.r,l,B.aM(),k,l,l,l,l,l,2,B.br(l,new B.b4(4,B.m(10),A.dg),l,A.bS,l,l,l,l,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,n,"Speaker notes for this slide\u2026",l,l,l,l,l,!0,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ai,l,l,l,l,l,l,l,l,l,2,l,l,!1,"\u2022",l,new C.epo(m,d),l,l,l,!1,l,l,!1,l,!0,l,A.a9,l,l,l,l,l,l,l,l,l,l,l,o,!0,A.a5,l,A.am,l,l,l,l),1)],q),A.aj,l,A.e,A.j,0,A.p),A.f,l,l,new B.o(u,l,s,t,r,l,A.n),l,96,l,l,new B.Q(12,w,12,v),l,l,l)},
aRx(a3,a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=null,a2=a0.jG()
if(a2==null)return A.bH
w=new C.eos(a0,a6)
v=B.a([4279310375,4294967295,4280640491,4278556265,4292617766,4286331629,4293548044,4281549141],x.t)
u=A.k.D(1-a2.c,0.06,1)
t=A.k.D(1-a2.d,0.06,1)
s=A.k.D(1-a2.e,0.01,1)
r=A.k.D(1-a2.f,0.01,1)
q=a5?A.dQ:a1
p=x.p
o=B.a([],p)
n=!a5
if(n)o.push(B.A(B.a([B.d("Format",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.c:A.M,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,A.u,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),A.b4,a0.aZY(a3,a0.gbJ5())],p),A.m,a1,A.e,A.j,0,a1,a1))
if(n)o.push(A.S)
o.push(B.d("Size",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.az:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1))
o.push(B.A(B.a([D.fg8,B.D(B.kT(a1,a1,a1,u,0.05,new C.eot(w,a2),A.k.D(a2.e,0.05,u)),1)],p),A.m,a1,A.e,A.j,0,a1,a1))
o.push(B.A(B.a([D.fs7,B.D(B.kT(a1,a1,a1,t,0.05,new C.eou(w,a2),A.k.D(a2.f,0.05,t)),1)],p),A.m,a1,A.e,A.j,0,a1,a1))
n=a2.b
m=n===D.cQ
if(m)o.push(B.A(B.a([D.fa9,B.D(B.kT(a1,a1,a1,96,10,new C.eov(w,a2),A.k.D(a2.w,10,96)),1)],p),A.m,a1,A.e,A.j,0,a1,a1))
l=n===D.lk
if(l||n===D.kS||n===D.R8)A.d.v(o,B.a([B.d("Crop / position",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.az:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),B.A(B.a([D.flL,B.D(B.kT(a1,a1,a1,s,0,new C.eow(w,a2),A.k.D(a2.c,0,s)),1)],p),A.m,a1,A.e,A.j,0,a1,a1),B.A(B.a([D.ftn,B.D(B.kT(a1,a1,a1,r,0,new C.eox(w,a2),A.k.D(a2.d,0,r)),1)],p),A.m,a1,A.e,A.j,0,a1,a1)],p))
if(l){l=B.d("Shape (frame)",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.az:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
k=B.a([],p)
for(j=0;j<7;++j){i={}
h=D.BL[j]
i.a=null
g=h.a
i.a=g
k.push(B.jI(a1,a1,a1,new B.x(h.b,a1,A.qb,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,new C.eoy(i,w,a2),a2.go===g,a1,a1,a1,a1))}k=B.bZ(A.bB,k,A.bs,6,6)
i=B.d("Ring",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.az:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
h=B.a([],p)
for(j=0;j<11;++j){f={}
e=D.BG[j]
f.a=null
g=e.a
f.a=g
h.push(B.jI(a1,a1,a1,new B.x(e.b,a1,A.qb,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,new C.eoz(f,w,a2),a2.id===g,a1,a1,a1,a1))}A.d.v(o,B.a([A.P,l,A.an,k,A.P,i,A.an,B.bZ(A.bB,h,A.bs,6,6)],p))}o.push(A.P)
if(m){m=B.d("Text color",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.az:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
l=x.gN
l=B.B(new B.K(v,new C.eoA(w,a2),l),l.k("aj.E"))
k=x.fw
A.d.v(o,B.a([m,A.an,B.bZ(A.bB,l,A.bs,6,6),A.ac,B.h6l(new C.eoB(w,a2),D.ckD,B.ev([a2.as],k),!0,a1,k)],p))}if(n===D.f_){n=B.d("Fill",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.az:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
m=x.gN
m=B.B(new B.K(v,new C.eoC(w,a2),m),m.k("aj.E"))
A.d.v(o,B.a([n,B.bZ(A.bB,m,A.bs,0,6)],p))}o.push(A.ac)
o.push(B.dp(D.bJC,D.fnH,new C.eoD(a0,a5),B.bk(A.bI,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1)))
d=B.cB(o,a1,a1,q,a1,A.ah,a5)
if(a5)return d
q=a3?A.cC:A.c
p=a4?A.wv:a1
if(a4)o=new B.bP(new B.aA(a3?A.bF:A.aL,1,A.q,-1),A.Y,A.Y,A.Y)
else o=a1
return B.p(a1,d,A.f,a1,a1,new B.o(q,a1,o,p,a4?B.a([new B.ac(0,A.G,A.w.j(0.12),A.rk,16)],x.V):a1,a1,A.n),a1,a1,a1,a1,A.EY,a1,a1,a1)},
bNl(d){return this.aRx(d,!1,!1,null)},
c5K(d,e,f,g,h,i){var w,v,u,t,s,r=this,q=null,p=r.fy
p===$&&B.c()
p=B.c6(p,new C.eoG(r,f,d,e),q)
w=B.d(i,q,q,q,q,q,q,D.f0f,q,q,q)
v=r.c
v.toString
u=x.p
v=B.a([p,A.bf,B.D(B.v(B.a([w,A.bA,A.cX,r.byh(D.cNJ,d,B.O(v).ax.a===A.I)],u),A.F,q,A.e,A.j,0,A.p),1)],u)
p=x.V
A.d.v(v,B.a([A.ab,B.dV(B.hp(B.aF(!1,A.a1,!0,q,B.aK(!1,q,!0,B.ez(D.eKS,q,new B.o(q,q,B.I(A.c.j(0.55),A.q,1.3),q,B.a([new B.ac(0,A.G,A.bY.j(0.4),A.ej,8)],p),D.ano,A.a6),q,q,q),A.cL,!0,q,q,q,q,q,q,q,q,q,q,q,g,q,q,q,q,q,q,q),A.f,A.K,0,q,q,q,q,q,A.ag),q,"Documents (Hati)",q,q),A.J)],u))
t=B.A(v,A.m,q,A.e,A.j,0,q,q)
w=r.c
w.toString
s=B.O(w).ax.a===A.I
w=B.m(20)
v=x.O
v=s?B.a([D.b5u,D.b5S],v):B.a([A.c,A.ke],v)
u=B.I(d.j(s?0.45:0.25),A.q,1.2)
return B.p(q,t,A.f,q,q,new B.o(q,q,u,w,B.a([new B.ac(0,A.G,d.j(s?0.18:0.1),A.cv,14)],p),new B.a7(A.ax,A.aC,A.x,v,q,q),A.n),q,q,q,q,A.bS,q,q,q)},
aKV(d,e,f,g){var w=this.fy
w===$&&B.c()
return B.c6(w,new C.emf(this,g,d,e,f),null)},
afn(d,e){return this.cia(d,e)},
cia(d,e){var w=0,v=B.j(x.T),u,t=this,s,r,q,p
var $async$afn=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:r=$.aw()
q=new B.ar(new B.bb(e,A.b3,A.aN),r)
p=t.c
p.toString
w=3
return B.b(B.ca(null,null,!0,null,new C.eqk(d,q),p,null,!0,!0,x.N),$async$afn)
case 3:s=g
q.S$=r
q.P$=0
u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$afn,v)},
Pg(d){var w=d.bS()
return""+B.bG(w)+"/"+B.bQ(w)+"/"+B.by(w)}}
C.aef.prototype={}
C.axE.prototype={
T(){return new C.bba(null,null)}}
C.bba.prototype={
gcu9(){var w,v=this.a.c,u=v.f.bS(),t=""+B.bG(u)+"/"+B.bQ(u)+"/"+B.by(u),s=v.w
if(s==="marriage_agreement")return"Hati ya Kuhowesha \xb7 "+t
if(s==="hati_kuhowa")return"Hati ya Kuhowa \xb7 "+t
if(s==="hati_kuhoweya")return"Hati ya Kuhoweya \xb7 "+t
if(s==="hati_kiapo_uongozi"){v=v.x
w=A.a.i(v==null?"":v)
return w.length===0?"Hati ya Kiapo cha Uongozi \xb7 "+t:"Kiapo cha Uongozi \xb7 "+w+" \xb7 "+t}return""+v.r.length+" slides \xb7 "+t},
a_(){var w,v=this,u=null
v.a1()
w=B.bj(u,A.pz,u,1,u,v)
w.f9(0,!0)
v.d!==$&&B.aO()
v.d=w
w=B.bj(u,D.bn8,u,1,u,v)
w.cq(0)
v.e!==$&&B.aO()
v.e=w},
q(){var w=this.d
w===$&&B.c()
w.q()
w=this.e
w===$&&B.c()
w.q()
this.brI()},
Iw(d){var w=0.12+d*0.09,v=A.k.D(w+0.55,0,1),u=this.e
u===$&&B.c()
u=u.x
u===$&&B.c()
return A.cr.av(0,new B.hM(w,v,A.cr).av(0,u))},
B(d){var w,v=null,u=this.d
u===$&&B.c()
w=this.e
w===$&&B.c()
return B.av(new B.C(D.bsB,B.c6(new B.h3(B.a([u,w],x.dS)),new C.cZl(this),v),v),v,v,v)}}
C.bbo.prototype={
B(d){var w=null,v=B.m(22),u=B.I(A.aK,A.q,1),t=x.p
return B.av(new B.C(D.bsS,B.aF(!1,A.a1,!0,w,B.p(w,B.bv(B.m(22),B.v(B.a([new B.C(D.bs3,B.v(B.a([B.p(w,D.bIo,A.f,w,w,new B.o(A.ay.j(0.12),w,w,B.m(16),w,w,A.n),w,52,w,w,w,w,w,52),A.aP,D.fpM,A.S,B.d('"'+this.c+'" will be permanently removed. This cannot be undone.',w,w,w,w,w,w,D.f1o,A.L,w,w)],t),A.m,w,A.e,A.j,0,A.p),w),A.e1,D.bmc,B.A(B.a([B.D(B.bK(!1,D.feo,w,w,!0,w,w,new C.cZH(d),w,B.fv(w,w,w,w,w,w,w,w,w,w,w,A.bJ,w,w,w,w,w,A.n3,w,A.o6,w,w,w,w,w,w)),1),B.p(w,w,A.f,A.bm,w,w,w,48,w,w,w,w,w,1),B.D(B.bK(!1,D.fjC,w,w,!0,w,w,new C.cZI(d),w,B.fv(w,w,w,w,w,w,w,w,w,w,w,A.ay,w,w,w,w,w,A.n3,w,A.o6,w,w,w,w,w,w)),1)],t),A.m,w,A.e,A.j,0,w,w)],t),A.m,w,A.e,A.Q,0,A.p),A.aq),A.f,w,A8.UI,new B.o(A.aB,w,u,v,D.cO2,w,A.n),w,w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ag),w),w,w,w)}}
C.Jb.prototype={
T(){return new C.bb9()}}
C.bb9.prototype={
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.a,m=n.f,l=n.w,k=n.r
n=p.d
w=n?0.96:1
v=B.m(12)
if(l){u=0.1+(n?0.06:0)
n=u}else{u=0.08+(n?0.05:0)
n=u}n=m.j(n)
u=B.I(m.j(l?0.34:0.28),A.q,1)
t=x.V
t=p.d?B.a([],t):B.a([new B.ac(0,A.G,m.j(0.08),A.dC,8)],t)
s=m.j(l?0.16:0.14)
r=B.m(9)
q=p.a
r=B.p(o,B.W(q.c,m,o,o,o,18),A.f,o,o,new B.o(s,o,o,r,o,o,A.n),o,32,o,o,o,o,o,32)
q=q.d
return B.dV(B.db(B.aE(o,B.v9(B.dg(o,B.A(B.a([r,A.av,new B.dm(1,A.ci,B.d(q,o,2,A.a2,o,o,o,B.l(o,o,l?A.f3:A.c,o,o,o,o,o,o,o,o,13,o,o,A.O,o,1.2,!0,o,o,o,o,o,o,o,o),A.L,o,o),o)],x.p),A.m,o,A.bb,A.Q,0,o,o),o,o,A.bc,new B.o(n,o,u,v,t,o,A.n),A.eE,o,o,o,A.nQ,o,o,1/0),A.cr,A.ja,w),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new C.cZg(p,d),new C.cZh(p),new C.cZi(p),new C.cZj(p),o,o,o,!1,A.a8),k),new B.u(0,(1-k)*16))}}
C.OX.prototype={
B(d){var w=this,v=null,u=A.c.j(0.04),t=B.m(16),s=B.m(16),r=B.m(14),q=B.I(A.c.j(0.5),A.q,1.2),p=x.p
return B.aF(!1,A.a1,!0,t,B.aK(!1,s,!0,new B.C(A.eP,B.A(B.a([B.p(v,B.W(w.c,A.c,v,v,v,22),A.f,v,v,new B.o(v,v,q,r,v,new B.a7(A.ax,A.aC,A.x,w.d,v,v),A.n),v,46,v,v,v,v,v,46),A.eB,B.D(B.v(B.a([B.d(w.e,v,v,v,v,v,v,A.np,v,v,v),A.bA,B.d(w.f,v,v,v,v,v,v,B.l(v,v,A.c.j(0.55),v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],p),A.F,v,A.e,A.j,0,A.p),1),B.W(A.ex,A.c.j(0.4),v,v,v,v)],p),A.m,v,A.e,A.j,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.r,v,v,v,v,v,v,v),A.f,u,0,v,v,v,v,v,A.ag)}}
C.ZN.prototype={
T(){return new C.aDb(D.dd,null,null)}}
C.aDb.prototype={
gY7(){var w,v=this,u=v.w
if(u===$){w=B.bj(null,D.bmJ,null,1,null,v)
v.w!==$&&B.bM()
v.w=w
u=w}return u},
b4g(d){if(!this.a.c.ay)return
this.x=d
this.gY7().is(0,0)},
a_(){var w,v=this
v.a1()
w=v.a
v.d=A.o.D(w.d,0,w.c.r.length-1)
C.auz(D.eRd)
C.hXv()
v.QF()},
q(){var w=this,v=w.f
if(v!=null)v.a8(0)
w.gY7().q()
v=w.z
if(v!=null)v.a8(0)
C.auz(D.eRe)
C.hXy()
w.btQ()},
cwV(){B.je()
this.m(new C.et_())
var w=this.c.I(x.q).f
w.a3T()
if($.biU)w.R(D.eO5)},
QF(){var w,v=this,u=v.f
if(u!=null)u.a8(0)
if(!v.r||v.y)return
u=v.a.c
w=v.d
w===$&&B.c()
v.f=B.cM(B.dC(0,0,0,0,0,A.o.D(C.h4v(u,w),1,120)),new C.esQ(v))},
cwA(){var w,v=this
v.m(new C.esZ(v))
if(v.r)v.QF()
else{w=v.f
if(w!=null)w.a8(0)}},
gaTo(){var w=this.a.c.db
return(w==null?"":w).length!==0},
cqJ(){var w=this,v=w.f
if(v!=null)v.a8(0)
w.m(new C.esR(w))
v=w.z
if(v!=null)v.a8(0)
if(w.a.c.ch&&w.r)w.z=B.cM(A.l6,new C.esS(w))},
av2(){var w,v,u=this,t=u.a.c,s=t.r.length
if(u.y){t=u.z
if(t!=null)t.a8(0)
if(u.a.c.ch){u.m(new C.esM(u))
u.QF()}return}w=u.d
w===$&&B.c()
v=s-1
if(w===v&&u.gaTo()){u.cqJ()
return}if(w>=v)t=t.ch&&s>1
else t=!0
if(t){u.m(new C.esN(u,A.o.F(w+1,s)))
u.b4g(w)
u.QF()}},
cgP(){var w,v=this,u=v.a.c,t=u.r.length
if(v.y){if(!u.ch)return
u=v.z
if(u!=null)u.a8(0)
v.m(new C.esO(v))
v.QF()
return}w=v.d
w===$&&B.c()
if(w<=0)u=u.ch&&t>1
else u=!0
if(u){v.m(new C.esP(v,w,t))
v.b4g(w)
v.QF()}},
cs6(d){var w,v=this,u=v.e
if(u===D.cg){u=v.d
u===$&&B.c()
return new B.n7(d,new B.cw(u,x.ac))}w=v.cs7(u)
u=v.d
u===$&&B.c()
return B.q6(new B.n7(d,new B.cw(u,x.ac)),w,new C.esX(),A.bc,A.bc,new C.esY(v))},
cs7(d){switch(d.a){case 8:case 9:case 10:case 11:case 19:return D.bn4
case 16:return A.kg
case 18:return A.n0
default:return A.n1}},
cs5(d,e,f){var w,v,u,t=null,s=B.cI(A.cr,f,t)
switch(d.a){case 0:return e
case 1:case 13:case 18:return new B.cX(s,!1,e,t)
case 2:case 17:w=x.K
return B.jl(e,new B.bf(s,new B.bn(A.ug,A.J,w),w.k("bf<bI.T>")),t,!0)
case 3:w=x.K
return B.jl(e,new B.bf(s,new B.bn(A.Ro,A.J,w),w.k("bf<bI.T>")),t,!0)
case 4:case 21:w=x.K
return B.jl(e,new B.bf(s,new B.bn(A.ig,A.J,w),w.k("bf<bI.T>")),t,!0)
case 5:w=x.K
return B.jl(e,new B.bf(s,new B.bn(A.uf,A.J,w),w.k("bf<bI.T>")),t,!0)
case 6:case 16:w=x.b
return B.ih(A.A,new B.cX(s,!1,e,t),t,new B.bf(s,new B.bn(0.82,1,w),w.k("bf<bI.T>")))
case 7:w=x.b
return B.ih(A.A,new B.cX(s,!1,e,t),t,new B.bf(s,new B.bn(1.18,1,w),w.k("bf<bI.T>")))
case 8:return B.c6(s,new C.esT(s),e)
case 9:return B.c6(s,new C.esU(s),e)
case 10:return B.c6(s,new C.esV(s),e)
case 11:return B.c6(s,new C.esW(s),e)
case 12:w=x.b
return new B.cX(s,!1,B.ih(A.A,e,t,new B.bf(s,new B.bn(1.03,1,w),w.k("bf<bI.T>"))),t)
case 14:w=s.gp(0)
v=x.K
return B.jt(B.jl(e,new B.bf(s,new B.bn(A.ug,A.J,v),v.k("bf<bI.T>")),t,!0),A.r,new C.bpT(w,t))
case 15:w=x.K
return B.jl(e,new B.bf(s,new B.bn(A.Ro,A.J,w),w.k("bf<bI.T>")),t,!0)
case 19:w=B.dl()
w.mC((1-s.gp(0))*2)
v=s.gp(0)
u=s.gp(0)
w.jA(v,u,v,1)
return B.fs(A.A,B.db(e,s.gp(0)),t,w,!0)
case 20:return B.eC(A.A,(1-s.gp(0))*0.2,new B.cX(s,!1,e,t),t)}},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.a.c,k=n.d
k===$&&B.c()
w=l.r[k]
if(l.ay){v=n.x
u=B.jt(new C.and(B.c6(n.gY7(),new C.et0(n,v,w),m),m),A.r,m)}else{t=B.rl(new C.Ia(w,!0,!1,m))
l=B.b0(w.e)
u=n.cs6(B.ej(B.jt(t,A.r,m),l,!0))}l=B.m(20)
k=x.p
s=B.p(m,B.A(B.a([B.d(n.r?"Auto "+C.h4v(n.a.c,n.d)+"s":"Manual",m,m,m,m,m,m,A.ob,m,m,m),A.bp,D.bKE],k),A.m,m,A.e,A.Q,0,m,m),A.f,m,m,new B.o(A.aX,m,m,l,m,m,A.n),m,m,m,m,A.fI,m,m,m)
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
l.push(B.bY(0,new C.MR(new C.E5(q,p,o,r==null?"":r),!1,!0,m),0,0,0))}else{r=q.c.d===D.o2?0.5625:1.7777777777777777
l.push(B.av(new B.fG(r,B.jt(B.ud(A.af,u,!0,4,1,!0,!0,m),A.r,m),m),m,m,m))}if(!$.biU){r=B.Hd(A.kP,new C.et1(d),B.nr(m,A.aX,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m)
k=B.a([B.ao(m,B.bm(!0,B.A(B.a([r,A.ab,B.Hd(B.W(n.r?Ak.xY:A.iT,m,m,m,m,m),n.gcwz(),B.nr(m,A.aX,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m)],k),A.m,m,A.e,A.j,0,m,m),!0,!1,A.af,!0,!0),m,m,12,m,12,m)],k)
if(!n.y){r=B.m(20)
k.push(B.ao(16,B.bm(!0,B.p(m,B.d(""+(n.d+1)+" / "+n.a.c.r.length,m,m,m,m,m,m,A.ho,m,m,m),A.f,m,m,new B.o(A.aX,m,m,r,m,m,A.n),m,m,m,m,A.fI,m,m,m),!0,!1,A.af,!0,!0),m,m,m,16,m,m))}A.d.v(l,k)}l.push(B.ao(m,B.bm(!0,B.aE(A.c5,B.p(A.l_,$.biU?A.bH:s,A.f,m,m,m,m,64,m,m,D.bnQ,m,m,150),A.y,!1,m,n.gcwU(),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!1,A.a8),!0,!1,A.af,!0,!0),m,m,m,0,0,m))
return B.c8(m,A.w,B.aE(m,new B.an(A.W,m,A.b_,A.r,l,m),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.et2(n,d),m,m,m,!1,A.a8),m,!1,!1,m,m)}}
C.Jj.prototype={
B(d){var w=null
return B.p(w,B.bm(!0,new B.C(E.ah7,this.c,w),!0,!1,A.af,!0,!1),A.f,w,w,D.aZr,w,w,w,w,w,w,w,w)}}
C.bpT.prototype={
iX(d){return new B.aa(0,0,0+d.a*A.k.D(this.b,0,1),0+d.b)},
jD(d){return d.b!==this.b}}
C.bg0.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.c
A:{if("circle"===q){w=B.m(999)
break A}if("rounded"===q){w=B.m(18)
break A}if("arch"===q){w=D.aWe
break A}w=B.m(6)
break A}v=s.e
u=B.I(v?A.aE:A.K,A.q,2.5)
if(q==="circle")t=B.m(999)
else t=B.m(q==="rounded"?9:3)
w=B.dg(r,B.av(B.p(r,r,A.f,r,r,new B.o(r,r,r,t,r,E.vE,A.n),r,30,r,r,r,r,r,30),r,r,r),r,r,A.bc,new B.o(s.f,r,u,w,r,r,A.n),A.hX,r,64,r,r,r,r,64)
return B.aE(r,new B.a6(78,r,B.v(B.a([w,A.an,B.d(s.d,r,1,A.a2,r,r,r,B.l(r,r,v?A.aE:s.r,r,r,r,r,r,r,r,r,11.5,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),A.m,r,A.e,A.j,0,A.p),r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,s.w,r,r,r,r,r,r,!1,A.a8)}}
C.bg_.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=r.c,o=D.dgN.h(0,p)
if(o==null)o=D.d3Y
p=p==="none"
w=p?q:new B.a7(A.a3,A.a7,A.x,o,q,q)
p=p?A.cU.j(0.25):q
v=r.e
u=v?B.I(A.aE,A.q,2.5):q
t=r.r.j(0.15)
s=v?I.alx:q
w=B.p(q,B.p(q,s,A.f,q,q,new B.o(t,q,q,q,q,q,A.a6),q,q,q,q,q,q,q,q),A.f,q,q,new B.o(p,q,u,q,q,w,A.a6),q,52,q,q,A.en,q,q,52)
return B.aE(q,new B.a6(66,q,B.v(B.a([w,A.an,B.d(r.d,q,1,A.a2,q,q,q,B.l(q,q,v?A.aE:r.f,q,q,q,q,q,q,q,q,10.5,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),A.L,q,q)],x.p),A.m,q,A.e,A.j,0,A.p),q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.w,q,q,q,q,q,q,!1,A.a8)}}
C.aIR.prototype={
aQ(){this.aX()
this.aW()
this.dJ()},
q(){var w=this,v=w.b2$
if(v!=null)v.a3(0,w.gdH())
w.b2$=null
w.a2()}}
C.aKT.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bv()}}
C.bvA.prototype={}
C.aKU.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bv()}}
C.b_M.prototype={}
C.Vg.prototype={
T(){return new C.aD9()},
beK(d){return this.e.$1(d)}}
C.aD9.prototype={
gb2C(){var w,v,u,t,s=this.e
if(s==null)return null
for(w=this.a.d,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===s)return t}return null},
ga9z(){var w,v
if(this.d==="all")return B.bl(this.a.d,!0,x.I)
w=this.gb2C()
v=x.D
return w==null?B.a([],v):B.a([w],v)},
gaMQ(){if(this.d==="all")return"All presentations ("+this.a.d.length+")"
var w=this.gb2C()
w=w==null?null:w.b
return w==null?"Pick a presentation":w},
gb3Q(){return A.d.cI(this.ga9z(),0,new C.esw())},
a_(){var w,v=this
v.a1()
w=v.a.d
if(w.length!==0)v.e=A.d.gK(w).a
v.Qg()},
Qg(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Qg=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return B.b(C.b0m(s.c,s.f),$async$Qg)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.ess(t,!s))
case 1:return B.h(u,v)}})
return B.i($async$Qg,v)},
Iy(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$Iy=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p=t.ga9z()
o=p.length
if(o===0){w=1
break}for(s=0;s<p.length;p.length===o||(0,B.L)(p),++s){r=p[s]
q=r.w
if(q==="marriage_agreement"||q==="hati_kuhowa"||q==="hati_kuhoweya"||q==="hati_malipo_awamu"||q==="hati_kiapo_uongozi")C.fAf(r,t.a.d)}o=t.c
o.toString
q=t.a
w=3
return B.b(B.oX(o,q.c,q.f),$async$Iy)
case 3:if(!e||t.c==null){w=1
break}o=t.c
o.toString
q=B.e6(new C.esv(t,p),!1,null,x.H)
w=4
return B.b(B.a5(o,!1).c6(q),$async$Iy)
case 4:q=t.a
w=5
return B.b(B.oW(q.c,q.f),$async$Iy)
case 5:w=6
return B.b(t.Qg(),$async$Iy)
case 6:case 1:return B.h(u,v)}})
return B.i($async$Iy,v)},
QD(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$QD=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:o=t.c
o.toString
w=3
return B.b(B.hv(o,D.dTU,!0,"NgmySlidesTransferScan",x.N),$async$QD)
case 3:s=e
if(s==null||A.a.i(s).length===0){w=1
break}t.m(new C.est(t))
w=4
return B.b(C.ago(s),$async$QD)
case 4:r=e
t.m(new C.esu(t))
o=J.a8(r)
if(o.gam(r)){o=t.c
if(o==null){w=1
break}o.I(x.q).f.R(D.eMZ)
w=1
break}w=5
return B.b(t.a.beK(r),$async$QD)
case 5:q=t.c
if(q==null){w=1
break}B.a5(q,!1).N(null)
q=t.c.I(x.q).f
p=o.gM(r)
o=o.gM(r)===1?"":"s"
q.R(B.b2(null,null,null,null,null,A.r,null,B.d("Imported "+p+" presentation"+o,null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$QD,v)},
Ix(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Ix=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:n=t.ga9z()
if(n.length===0){w=1
break}s=t.c
s.toString
r=t.a
w=3
return B.b(B.oX(s,r.c,r.f),$async$Ix)
case 3:if(!e||t.c==null){w=1
break}s=n.length
r=t.a
if(s===1){s=r.c
q=C.fAu(null,A.d.gK(n),s,t.a.f)}else q=C.fAu(n,null,r.c,r.f)
if(n.length===1){s=A.d.gK(n).b
r=B.af("[^\\w\\-.]+",!0,!1,!1,!1)
p=B.aJ(s,r,"_")}else p="ngmy_slides_library"
w=4
return B.b(B.FX(q,"ngmy_slides_"+p,!1),$async$Ix)
case 4:o=e
s=t.a
w=5
return B.b(B.oW(s.c,s.f),$async$Ix)
case 5:w=6
return B.b(t.Qg(),$async$Ix)
case 6:s=t.c
if(s==null){w=1
break}s.I(x.q).f.R(B.b2(null,null,null,null,null,A.r,null,B.d(o,null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$Ix,v)},
a1Y(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a1Y=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t.m(new C.esx(t))
w=3
return B.b(C.bAU(),$async$a1Y)
case 3:s=e
t.m(new C.esy(t))
if(s==null||J.ck(s)){w=1
break}w=4
return B.b(t.a.beK(s),$async$a1Y)
case 4:r=t.c
if(r==null){w=1
break}B.a5(r,!1).N(null)
r=t.c.I(x.q).f
q=J.a8(s)
p=q.gM(s)
q=q.gM(s)===1?"":"s"
r.R(B.b2(null,null,null,null,null,A.r,null,B.d("Imported "+p+" presentation"+q+" from file",null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a1Y,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=B.O(d).ax.a===A.I,l=m?A.db:A.bM,k=o.ga9z().length!==0,j=B.ao(n,B.p(n,n,A.f,n,n,new B.o(n,n,n,n,n,new B.bR(A.A,0.5,A.x,n,0,B.a([A.bj.j(0.22),A.K],x.O),n,n),A.a6),n,220,n,n,n,n,n,220),n,n,n,-60,-80,n),i=B.aH(n,n,n,n,B.W(A.cy,m?A.ad:A.ak,n,n,n,n),n,n,n,new C.esB(d),n,n,n,n,n,n),h=x.p
i=B.A(B.a([i,B.D(B.d("Transfer presentations",n,n,n,n,n,n,B.l(n,n,m?A.c:A.M,n,n,n,n,n,n,n,n,17,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),A.L,n,n),1),A.zc],h),A.m,n,A.e,A.j,0,n,n)
w=B.m(24)
v=B.a([new B.ac(0,A.G,A.bj.j(0.35),A.eT,24)],x.V)
u=B.ao(n,B.W(A.pF,A.c.j(0.1),n,n,n,100),n,n,n,-12,-8,n)
t=A.c.j(0.18)
s=B.m(16)
s=B.a([u,B.A(B.a([B.p(n,D.bL9,A.f,n,n,new B.o(t,n,B.I(A.c.j(0.35),A.q,1),s,n,n,A.n),n,56,n,n,n,n,n,56),A.eB,B.D(B.v(B.a([B.d("NGMY Slides Transfer",n,n,n,n,n,n,B.l(n,n,A.c.j(0.85),n,n,n,n,n,n,n,n,11,n,n,A.H,n,n,!0,n,1.1,n,n,n,n,n,n),n,n,n),A.at,D.bwN],h),A.F,n,A.e,A.j,0,A.p),1)],h),A.m,n,A.e,A.j,0,n,n)],h)
if(o.a.f)s.push(B.ao(n,B.hp(B.aE(A.c5,D.eKU,A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gcbB(),n,n,n,n,n,n,!1,A.a8),n,"Save presentations to the database",n,n),n,n,n,-17,-19,n))
w=B.a([B.p(n,new B.an(A.W,n,A.aa,A.f,s,n),A.aq,n,n,new B.o(n,n,n,w,v,D.a0f,A.n),n,n,n,n,E.Y5,n,n,1/0),A.e1,o.awf(m,"What to transfer"),A.ac,B.A(B.a([B.D(o.aVC(A.pM,m,new C.esC(o),o.d==="one","Pick a single deck","One presentation"),1),A.av,B.D(o.aVC(D.bAX,m,new C.esD(o),o.d==="all",""+o.a.d.length+" saved","All presentations"),1)],h),A.m,n,A.e,A.j,0,n,n)],h)
if(o.d==="one"){v=B.a([A.d5,o.awf(m,"Choose presentation"),A.S],h)
u=o.a.d
if(u.length===0){u=m?A.aB:A.c
t=B.m(16)
s=B.I(m?A.bF:A.aL,A.q,1)
v.push(B.p(n,B.d("Create a presentation first, then come back to transfer it.",n,n,n,n,n,n,B.l(n,n,m?A.az:A.ak,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),A.f,n,n,new B.o(u,n,s,t,n,n,A.n),n,n,n,n,A.bW,n,n,n))}else A.d.v(v,new B.K(u,new C.esE(o,m),B.T(u).k("K<1,r>")))
A.d.v(w,v)}w.push(A.mz)
w.push(o.awf(m,"Transfer options"))
w.push(A.ac)
w.push(B.A(B.a([B.D(o.aoY(A.aS,k,!0,A.jj,m,o.r,o.gc5O(),"Scan on another device","Show QR"),1),A.av,B.D(o.aKW(A.jM,!0,A.iU,m,o.gcnw(),"Receive presentations","Scan QR"),1)],h),A.m,n,A.e,A.j,0,n,n))
w.push(A.S)
w.push(B.A(B.a([B.D(o.bwL(A.aV,k,A.hz,m,o.r,o.gc5L(),"Download .json","Backup file"),1),A.av,B.D(o.aKW(A.aH,!0,Ax.y8,m,o.gczg(),"Import backup","Upload file"),1)],h),A.m,n,A.e,A.j,0,n,n))
if(k){v=A.bj.j(m?0.12:0.08)
u=B.m(16)
t=B.I(A.bj.j(0.28),A.q,1)
s=B.W(A.lc,A.bj.j(0.9),n,n,n,18)
r=o.gaMQ()
q=o.gb3Q()
p=o.gb3Q()===1?"":"s"
A.d.v(w,B.a([A.bw,B.p(n,B.A(B.a([s,A.av,B.D(B.d("Ready to share "+r+" \xb7 "+q+" slide"+p,n,n,n,n,n,n,B.l(n,n,m?A.ad:A.bv,n,n,n,n,n,n,n,n,12,n,n,A.a4,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)],h),A.m,n,A.e,A.j,0,n,n),A.f,n,n,new B.o(v,n,t,u,n,n,A.n),n,n,n,n,A.bC,n,n,n)],h))}j=B.a([j,B.bm(!0,B.v(B.a([new B.C(Ag.LZ,i,n),B.D(B.cB(w,n,D.brd,n,n,A.ah,!1),1)],h),A.m,n,A.e,A.j,0,A.p),!0,!1,A.af,!0,!0)],h)
if(o.f)j.push(B.p(n,T.V0,A.f,A.dA,n,n,n,n,n,n,n,n,n,n))
return B.c8(n,l,new B.an(A.W,n,A.aa,A.r,j,n),n,!1,!1,n,n)},
aex(){var w=0,v=B.j(x.H),u=this,t,s
var $async$aex=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
t=u.a
w=2
return B.b(C.i2M(s,t.d,t.e),$async$aex)
case 2:return B.h(null,v)}})
return B.i($async$aex,v)},
awf(d,e){var w=null,v=B.p(w,w,A.f,w,w,new B.o(A.bj,w,w,B.m(2),w,w,A.n),w,14,w,w,w,w,w,3)
return B.A(B.a([v,A.ab,B.d(e.toUpperCase(),w,w,w,w,w,w,B.l(w,w,d?A.az:A.ak,w,w,w,w,w,w,w,w,11,w,w,A.u,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,w,w)},
aVC(d,e,f,g,h,i){var w,v,u,t,s=null,r=B.m(18),q=B.m(18),p=e?A.aB:A.c
if(g)w=A.bj
else w=e?A.bF:A.aL
w=B.I(w,A.q,g?2:1)
v=g?B.a([new B.ac(0,A.G,A.bj.j(0.2),A.cv,14)],x.V):s
u=A.bj.j(g?0.2:0.1)
t=B.m(12)
t=B.p(s,B.W(d,A.bj,s,s,s,22),A.f,s,s,new B.o(u,s,s,t,s,s,A.n),s,s,s,s,A.ck,s,s,s)
u=B.d(i,s,s,s,s,s,s,B.l(s,s,e?A.c:A.M,s,s,s,s,s,s,s,s,13,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
return B.aF(!1,A.a1,!0,s,B.aK(!1,r,!0,B.ez(new B.C(A.bC,B.v(B.a([t,A.S,u,A.bA,B.d(h,s,s,s,s,s,s,B.l(s,s,e?A.az:A.ak,s,s,s,s,s,s,s,s,11,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),A.F,s,A.e,A.j,0,A.p),s),s,new B.o(p,s,w,q,v,s,A.n),s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,f,s,s,s,s,s,s,s),A.f,A.K,0,s,s,s,s,s,A.ag)},
bHf(d,e){var w,v,u,t,s,r,q=null,p=d.a===this.e,o=B.m(16),n=e?A.aB:A.c,m=B.m(16)
if(p)w=A.bj
else w=e?A.bF:A.aL
w=B.I(w,A.q,p?2:1)
v=B.p(q,D.bLk,A.f,q,q,new B.o(q,q,q,B.m(12),q,new B.a7(A.a3,A.a7,A.x,B.a([A.bj,A.bj.j(0.7)],x.O),q,q),A.n),q,44,q,q,q,q,q,44)
u=d.b
u=B.d(u,q,1,A.a2,q,q,q,B.l(q,q,e?A.c:A.M,q,q,q,q,q,q,q,q,q,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=d.r.length
s=x.p
t=B.D(B.v(B.a([u,B.d(""+t+" slides",q,q,q,q,q,q,B.l(q,q,e?A.az:A.ak,q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),A.F,q,A.e,A.j,0,A.p),1)
u=p?A.ee:A.qR
if(p)r=A.bj
else r=e?A.b2:A.dn
return new B.C(A.cH,B.aF(!1,A.a1,!0,q,B.aK(!1,o,!0,B.p(q,B.A(B.a([v,A.bf,t,B.W(u,r,q,q,q,q)],s),A.m,q,A.e,A.j,0,q,q),A.f,q,q,new B.o(n,q,w,m,q,q,A.n),q,q,q,q,A.bC,q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,new C.esr(this,d),q,q,q,q,q,q,q),A.f,A.K,0,q,q,q,q,q,A.ag),q)},
aoY(d,e,f,g,h,i,j,k,l){var w,v,u,t,s=null,r=e?1:0.45,q=e?j:s,p=B.m(18),o=B.m(18),n=h?A.aB:A.c
if(f)w=d.j(0.45)
else w=h?A.bF:A.aL
w=B.I(w,A.q,f?1.5:1)
v=d.j(0.14)
u=B.m(12)
t=x.p
u=B.a([B.p(s,B.W(g,d,s,s,s,22),A.f,s,s,new B.o(v,s,s,u,s,s,A.n),s,s,s,s,A.qP,s,s,s)],t)
if(i)u.push(B.ao(s,B.p(s,D.am4,A.f,s,s,D.aZd,s,14,s,s,s,s,s,14),s,s,s,-4,-4,s))
v=B.d(l,s,s,s,s,s,s,B.l(s,s,h?A.c:A.M,s,s,s,s,s,s,s,s,14,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
return B.db(B.aF(!1,A.a1,!0,s,B.aK(!1,p,!0,B.ez(new B.C(E.XM,B.v(B.a([new B.an(A.W,s,A.aa,A.f,u,s),A.ac,v,A.bA,B.d(k,s,s,s,s,s,s,B.l(s,s,h?A.az:A.ak,s,s,s,s,s,s,s,s,11,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),A.F,s,A.e,A.j,0,A.p),s),s,new B.o(n,s,w,o,s,s,A.n),s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,q,s,s,s,s,s,s,s),A.f,A.K,0,s,s,s,s,s,A.ag),r)},
aKW(d,e,f,g,h,i,j){return this.aoY(d,e,!1,f,g,!1,h,i,j)},
bwL(d,e,f,g,h,i,j,k){return this.aoY(d,e,!1,f,g,h,i,j,k)}}
C.Vh.prototype={
T(){return new C.biT()}}
C.biT.prototype={
a_(){this.a1()
this.ado()},
ado(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$ado=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
n=r.a
m=n.d
l=m.length
k=n.c
q=l===1?C.fAu(null,A.d.gK(m),k,r.a.f):C.fAu(m,null,k,n.f)
n=r.a.d
m=n.length
p=m===1?A.d.gK(n).a:"library_"+m
n=r.a.d
if(n.length===1&&C.kr(A.d.gK(n).w))C.fAf(A.d.gK(r.a.d),D.d1Y)
n=r.a
m=n.c
n=C.i_P(n.d)
w=7
return B.b(C.fAt(p,C.i_U(r.a.d),n,m,q),$async$ado)
case 7:o=e
if(r.c==null){w=1
break}r.m(new C.esF(r,o))
t=2
w=6
break
case 4:t=3
i=s.pop()
if(r.c==null){w=1
break}r.m(new C.esG(r))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$ado,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=B.O(d).ax.a===A.I,h=i?A.db:A.bM,g=k.d
g=g==null?j:A.a.a0(g,"NGMYSLIDESYNC2|")
w=A.d.cI(k.a.d,0,new C.esH())
v=B.aH(j,j,j,j,B.W(A.eA,i?A.ad:A.ak,j,j,j,18),j,j,j,new C.esI(d),j,j,j,j,j,j)
u=x.p
v=B.A(B.a([v,B.D(B.d("Presentation QR",j,j,j,j,j,j,B.l(j,j,i?A.c:A.M,j,j,j,j,j,j,j,j,17,j,j,A.u,j,j,!0,j,j,j,j,j,j,j,j),A.L,j,j),1),A.zc],u),A.m,j,A.e,A.j,0,j,j)
t=B.m(24)
s=k.a
r=B.d(s.e,j,j,j,j,j,j,A.du,A.L,j,j)
s=s.d.length
q=s===1?"":"s"
t=B.p(j,B.v(B.a([r,A.P,B.d(""+s+" presentation"+q+" \xb7 "+w+" slides",j,j,j,j,j,j,B.l(j,j,A.c.j(0.85),j,j,j,j,j,j,j,j,12,j,j,A.O,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],u),A.m,j,A.e,A.j,0,A.p),A.f,j,j,new B.o(j,j,j,t,j,D.a0f,A.n),j,j,j,j,E.Y5,j,j,1/0)
q=B.m(24)
s=B.I(A.aS.j(0.35),A.q,1)
r=B.a([],u)
p=k.f
if(p!=null)r.push(B.d(p,j,j,j,j,j,j,A.a6D,A.L,j,j))
else if(k.d==null)r.push(D.e3e)
else{p=B.a([],u)
o=k.e
if((o==null?"":o).length!==0){o=B.m(16)
n=B.a([new B.ac(0,A.G,A.aE.j(0.35),A.cv,18)],x.V)
m=k.e
m.toString
A.d.v(p,B.a([D.feR,A.an,B.aE(j,B.p(j,B.A(B.a([D.bMS,A.av,B.d(m,j,j,j,j,j,j,D.f1M,j,j,j)],u),A.m,j,A.e,A.Q,0,j,j),A.f,j,j,new B.o(j,j,j,o,n,D.bRk,A.n),j,j,j,j,A0.agU,j,j,j),A.y,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new C.esJ(k,d),j,j,j,j,j,j,!1,A.a8),A.P,D.fj8,A.aA],u))}o=A.c.j(0.04)
n=B.m(22)
m=B.I(A.bF,A.q,1)
l=k.d
l.toString
p.push(B.p(j,B.pC(j,j,!1,l,j,!0,!0,j,!1,D.biS),A.f,j,j,new B.o(o,j,m,n,j,j,A.n),j,j,j,j,A.ck,j,j,j))
A.d.v(r,p)}r.push(A.aA)
r.push(B.d(g===!0?"Cloud QR \u2014 scan on another phone with NGMY Slides open.":"Offline QR \u2014 keep both devices on the same network if scan fails.",j,j,j,j,j,j,A.hp,A.L,j,j))
return B.c8(j,h,B.bm(!0,B.v(B.a([new B.C(Ag.LZ,v,j),B.D(B.cd(B.v(B.a([t,A.aP,B.p(j,B.v(r,A.m,j,A.e,A.j,0,A.p),A.f,j,j,new B.o(j,j,s,q,j,D.bTe,A.n),j,j,j,j,A.ty,j,j,1/0)],u),A.m,j,A.e,A.j,0,A.p),A.r,j,A.y,j,E.ahc,j,j,A.ah),1)],u),A.m,j,A.e,A.j,0,A.p),!0,!1,A.af,!0,!0),j,!1,!1,j,j)}}
C.aD6.prototype={
T(){return new C.aD7(new B.ar(A.as,$.aw()),B.ki(!0,null,!0,!0,null,null,!1))}}
C.aD7.prototype={
a_(){var w=this
w.a1()
w.e.aM(0,new C.em9(w))
$.aT.x1$.push(new C.ema(w))},
q(){var w=this.d
w.S$=$.aw()
w.P$=0
this.e.q()
this.a2()},
aY9(){var w,v=this.c
v.toString
w=C.yf(this.d.a.a.toUpperCase())
if(w==null)w=""
B.a5(v,!1).N(w)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=B.aI(a2,A.eD,x.w).w,i=B.m(28),h=B.I(A.bj.j(0.4),A.q,1.2),g=x.V,f=B.a([new B.ac(0,A.G,A.bj.j(0.28),A.ue,36),D.aa6],g),e=B.m(28),d=A.c.j(0.16),a0=B.m(16),a1=x.p
a0=B.p(k,B.v(B.a([B.p(k,D.bIr,A.f,k,k,new B.o(d,k,B.I(A.c.j(0.28),A.q,1),a0,k,k,A.n),k,52,k,k,k,k,k,52),A.ac,D.fc7,A.an,B.d("Type the 5-character code shown with the QR.",k,k,k,k,k,k,B.l(k,k,A.c.j(0.82),k,k,k,k,k,k,k,k,13,k,k,A.a4,k,1.35,!0,k,k,k,k,k,k,k,k),A.L,k,k)],a1),A.m,k,A.e,A.j,0,A.p),A.f,k,k,D.aZE,k,k,k,k,A.xs,k,k,1/0)
d=B.a([],a1)
for(w=l.d,v=l.e,u=0;u<5;++u){t=B.a([],a1)
if(u===2)t.push(A.av)
s=w.a.a
r=u<s.toUpperCase().length
q=u===s.toUpperCase().length&&v.ge6()
p=r?w.a.a.toUpperCase()[u]:""
s=r||q?A.aB:A.M
o=new B.aV(14,14)
if(q)n=A.bj
else n=r?A.bj.j(0.55):A.aK
m=new B.aA(n,q?2:1.2,A.q,-1)
n=q?B.a([new B.ac(0,A.G,A.bj.j(0.28),A.J,12)],g):k
t.push(new B.bD(1,A.bi,B.dg(A.A,new B.x(p,k,D.eWu,k,k,k,k,k,k,k,k,k),k,k,A.bc,new B.o(s,k,new B.bP(m,m,m,m),new B.bq(o,o,o,o),n,k,A.n),A.hX,k,56,k,k,k,k,k),k))
if(u!==4&&u!==1)t.push(L.Ir)
A.d.v(d,t)}g=B.a([B.A(d,A.m,k,A.e,A.j,0,k,k),B.bY(0,B.db(B.aL(k,A.T,!0,k,!0,A.r,k,B.aM(),w,k,k,k,k,k,2,D.bPA,A.y,!0,k,!0,k,!1,v,A.ai,k,k,B.a([new B.u4(B.af("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.AU(5,k),new C.bt6()],x.aS),k,k,A.aNU,k,5,k,1,k,k,!1,"\u2022",k,new C.em5(l),k,new C.em6(l),k,!1,k,k,!1,k,!0,k,A.a9,k,k,k,k,k,k,k,k,k,k,k,k,!0,A.a5,k,A.lX,k,k,k,k),0),0,0,0)],a1)
d=C.yf(w.a.a.toUpperCase())==null?k:l.gc5P()
return B.av(new B.C(new B.Q(24,24,24,24+j.f.d),B.aF(!1,A.a1,!0,k,new B.cU(Ad.JL,B.p(k,B.bv(e,B.v(B.a([a0,new B.C(D.brI,B.v(B.a([new B.an(A.W,k,A.aa,A.r,g,k),A.S,D.fay,A.bw,new B.a6(1/0,50,B.bJ(D.fqC,d,B.bk(A.bj,A.bm,A.ak,k,A.c,k,k,k,new B.b7(B.m(16),A.Y),k,k,k)),k),A.an,B.bK(!1,A.nq,k,k,!0,k,k,new C.em7(a2),k,B.fv(k,k,k,k,k,k,k,k,k,k,k,A.bJ,k,k,k,k,k,k,k,k,k,k,k,k,k,k))],a1),A.m,k,A.e,A.j,0,A.p),k)],a1),A.m,k,A.e,A.Q,0,A.p),A.aq),A.f,k,k,new B.o(A.db,k,h,i,f,k,A.n),k,k,k,k,k,k,k,k),k),A.f,A.K,0,k,k,k,k,k,A.ag),k),k,k,k)}}
C.bt6.prototype={
oj(d,e){var w=e.a.toUpperCase()
return e.cFm(B.h8(A.bu,w.length),w)}}
C.aq4.prototype={
T(){return new C.aDa(B.yP(A.Le,A.nx,A.tX))}}
C.aDa.prototype={
q(){this.d.q()
this.a2()},
aY8(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
B.iL(w,d)},
a9t(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a9t=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e){w=1
break}s=t.c
s.toString
w=3
return B.b(C.fJ0(s),$async$a9t)
case 3:r=e
if(r==null||t.c==null){w=1
break}t.aY8("NGMYSLIDECODE|"+r)
case 1:return B.h(u,v)}})
return B.i($async$a9t,v)},
c5N(d){var w,v,u,t
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u){t=C.i_S(w[u])
if(t!=null){this.aY8(t)
return}}},
B(d){var w,v,u,t=this,s=null,r=B.aH(s,s,s,s,A.vB,s,s,s,t.gbLl(),s,s,s,s,"Enter document code",s),q=t.f,p=q?"Flash off":"Flash on",o=x.p
p=B.eF(B.a([r,B.aH(s,s,s,s,B.W(q?A.qW:Al.MV,s,s,s,s,s),s,s,s,new C.esL(t),s,s,s,s,p,s)],o),s,s,!0,!0,A.db,s,1,s,s,s,!1,s,!1,A.c,s,s,s,!0,s,s,s,s,s,D.frQ,s,s,s,1,s,!0)
r=B.yO(t.d,A.bQ,t.gc5M())
w=B.m(28)
w=B.av(B.p(s,s,A.f,s,s,new B.o(s,s,B.I(A.bj,A.q,3),w,B.a([new B.ac(2,A.G,A.bj.j(0.35),A.J,24)],x.V),s,A.n),s,260,s,s,s,s,s,260),s,s,s)
v=A.w.j(0.72)
u=B.m(16)
return B.c8(p,A.w,new B.an(A.W,s,A.b_,A.r,B.a([r,w,B.ao(32,B.p(s,D.ffU,A.f,s,s,new B.o(v,s,B.I(A.bj.j(0.45),A.q,1),u,s,s,A.n),s,s,s,s,A.jd,s,s,s),s,s,20,20,s,s)],o),s),s,!1,!1,s,s)}}
C.bti.prototype={
B(d){var w=null,v=B.m(24),u=B.I(A.aK,A.q,1)
return B.aF(!1,A.a1,!0,w,B.p(w,B.v(B.a([B.p(w,D.bGC,A.f,w,w,D.aZn,w,56,w,w,w,w,w,56),A.aP,D.frw,A.an,new B.kb(this.c,new C.f2Z(),w,w,x.cI),A.aP,new B.kb(this.d,new C.f3_(),w,w,x.cl),A.ac,D.frt],x.p),A.m,w,A.e,A.Q,0,A.p),A.f,w,Ad.JL,new B.o(A.aB,w,u,v,w,w,A.n),w,w,w,K.Yc,D.bsk,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ag)}}
C.a7_.prototype={
T(){return new C.biC(A.bx)},
gdc(){return this.c}}
C.biC.prototype={
a_(){var w=this
w.a1()
if(w.a.d)return
w.Zj()
w.d=B.dA(A.h4,new C.eaF(w))},
q(){var w=this.d
if(w!=null)w.a8(0)
this.a2()},
Zj(){return this.cjV()},
cjV(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$Zj=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q={}
p=t.a
if(p.d){if(t.c!=null)t.m(new C.eaD(t))
w=1
break}s=p.e
q.a=null
w=s!=null?3:5
break
case 3:q.a=s.by(new B.S(Date.now(),0,!1))
w=4
break
case 5:w=6
return B.b(C.ccI(p.c),$async$Zj)
case 6:r=e
q.a=r==null?A.bx:r
case 4:if(t.c==null){w=1
break}t.m(new C.eaE(q,t))
if(q.a.a<=0&&!t.f){t.f=!0
t.a.f.$0()}case 1:return B.h(u,v)}})
return B.i($async$Zj,v)},
bNc(d){var w,v,u=d.a,t=A.o.an(u,36e8)
if(t>=999)return"Admin \u2014 unlimited"
w=A.o.an(u,6e7)%60
v=A.o.an(u,1e6)%60
if(t>0)return""+t+"h "+A.a.aT(A.o.u(w),2,"0")+"m "+A.a.aT(A.o.u(v),2,"0")+"s left"
return A.a.aT(A.o.u(w),2,"0")+":"+A.a.aT(A.o.u(v),2,"0")+" left"},
B(d){var w,v,u,t,s=this,r=null
if(s.a.d)return A.bH
w=s.e.a
v=A.o.an(w,6e7)<30&&A.o.an(w,36e8)<999?A.ay:A.bY
w=v.j(0.14)
u=B.m(14)
t=B.I(v.j(0.55),A.q,1)
return B.p(r,B.A(B.a([B.W(A.Fy,v,r,r,r,20),A.av,B.D(B.d("Marriage document session \xb7 "+s.bNc(s.e),r,r,r,r,r,r,B.l(r,r,v,r,r,r,r,r,r,r,r,13,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),1)],x.p),A.m,r,A.e,A.j,0,r,r),A.f,r,r,new B.o(w,r,t,u,r,r,A.n),r,r,r,W.afX,A.ix,r,r,1/0)}}
C.a7S.prototype={
n3(){var w,v,u,t=this
t.wR()
w=t.cx
v=t.c
w.bom(t.cy,t,v)
u=x.Y
v.a.n(0,"/A",B.pJ(B.F(["/S",D.e6U,"/URI",new B.ri(B.VP(w.as),A.uh,!0)],x.N,u),u))}}
C.a7T.prototype={
a4(){return"PdfAnnotFlags."+this.b}}
C.b1p.prototype={
bvP(d,e,f,g,h,i,j,k,l,m){var w=B.ev([D.e5c],x.di)
this.w!==$&&B.aO()
this.w=w},
gcIC(){var w=this.w
w===$&&B.c()
if(w.a===0)return 0
return new B.jK(w,new C.ceU(),B.a4(w).k("jK<cm.E,H>")).fF(0,new C.ceV())},
aBC(d,e,f){var w,v,u,t=this,s=f.a
s.n(0,"/Subtype",new B.h6(t.a))
w=t.b
v=w.a
u=w.b
s.n(0,"/Rect",B.tf(B.a([v,u,v+w.c,u+w.d],x.cA)))
s.n(0,"/P",new B.j8(d.a,d.b))
s.n(0,"/Border",B.tf(D.bVe))
w=t.w
w===$&&B.c()
if(w.a!==0)s.n(0,"/F",new B.fX(t.gcIC()))
w=t.z
if(w.a!==0)s.n(0,"/AP",B.pJ(w,x.Y))}}
C.ceW.prototype={}
C.a26.prototype={}
C.ahe.prototype={}
C.aPT.prototype={
fX(d){var w,v,u,t,s,r,q=this,p=null
q.lb(d)
q.Lq(d)
w=q.a
v=d.a
v.toString
w.toString
w=d.be6(w)
u=x.N
t=x.Y
s=new C.ceW(q.d.a,"/Link",w,p,p,p,p,p,B.V(u,t))
s.bvP(p,p,p,p,p,p,p,w,p,"/Link")
w=v.x
t=B.pJ(B.F(["/Type",D.e6S],u,t),t)
u=w.b++
r=w.e
r===$&&B.c()
r=new C.a7S(s,v,w,u,0,t,r,B.a([],x.s),p,p,0)
w.c.L(0,r)
v.dx.push(r)}}
C.avx.prototype={}
C.aRm.prototype={
fX(d){var w,v,u,t,s=this
s.lb(d)
w=s.b
if(w!=null){v=B.dl()
u=s.a
v.e2(u.a,u.b,0,1)
u=d.b
u.i1()
t=s.a
t.toString
u.KA(t)
u.RT(0)
u.oE(0,v)
w.fX(d)
u.n6(0)}}}
var z=a.updateTypes(["ay<~>()","~(lA)","R(hZ)","~()","R(eI)","R(oc)","R(lA)","~(hZ)","R(eI,eI)","Jj(Y)","R(nB)","R(l6)","ay<R>()","H(H,hZ)","a3<n,@>(hZ)","ai<z7>()","n(nB)","R(a7g)","n(lA)","n(vG)","R(Ee)","H(hZ,hZ)","n(eI)","r(eI)","cK(eI)","r(hw)","~(hw)","eI(uu,N,N,N,N,H{fx:n,key:n,rotation:N})","eI(n,N,H)","H(oc,oc)","R(z7)","R(n,ai<z7>)","a3<n,@>(oc)","nB()","XU(Y)","eI(n,N,N,N,N,N{align:pQ,anim:hw,bullets:R,color:H?,delay:H,fx:n,key:n,style:H7,weight:qb})","a06(Y)","eI(n,N,N,N,N{anim:hw,delay:H,fx:n,key:n})","ay<~>(oc)","R(ml)","XS(Y)","a_F(Y)","a_E(Y)","ON(Y)","Z2(Y)","eI(uu,N,N,N,N,H,n,n{anim:hw,delay:H,rotation:N,stroke:H,strokeWidth:N})","eI(n,N,N,N,N,N,n,n,H)","eI(N,N,n,H{size:N})","r(r6,N,N)","l6()","oc(a3<@,@>)","~(uk)","Ee()","fe(eI)","r(iV)","YB(Y)","~(E5)","YW(Y)","H(eI,eI)","eI(eI)","a3<n,@>(eI)","eI(a3<@,@>)","lA(lA)","a3<n,@>(lA)","lA(a3<@,@>)","R(jB)","jB()","n(hZ)","~(ai<oc>)","S(ai<hZ>)","S(hZ)","ai<hZ>(n?)","abO(Y,H)","~(R(eI,eI))","acr(Y)","ae5(Y,H)","w(lA,R)","V1(Y)","acu(Y)","V4(Y)","~(mp)","hZ(hZ)","N(eI)","a_a(Y)","ZN(Y)","hZ()","ai<EA>()","ay<~>(ai<hZ>)","r(bu<H,hZ>)","C(jB)","C(Ee)","ay<~>(hw,~())","r(ai<hw>,hw?,~(hw),w)","R(lZ)","ai<jk<mp>>(Y)","jk<mp>(mp)","hZ(a3<@,@>)","Vg(Y)","eI(n,N,N,N,N,N,H{align:pQ,style:H7,weight:qb})","Vh(Y)","r(hZ)","~(lS)","Ia(Y,lA,r?)","H(a7T)","ay<ai<a3<n,@>>?>()","n(n)","ay<z5>({paper:n?,photo:dD?,request:n,template!l9})","ay<a78>({doc!z5,history:ai<+(n,n)>,instruction!n,photo:dD?,template!l9})","aco(Y)"])
C.cCF.prototype={
$2(d,e){d=d+e&536870911
d=d+((d&524287)<<10)&536870911
return d^d>>>6},
$S:75}
C.cCG.prototype={
$1(d){d=d+((d&67108863)<<3)&536870911
d^=d>>>11
return d+((d&16383)<<15)&536870911},
$S:76}
C.cCH.prototype={
$1(d){var w,v,u,t,s,r,q
for(w=this.a,v=this.b,u=v.c-1,v=v.b;t=w.a,t<d;){t=w.c
if(t<0){w.c=t-1
s=0
r=16}else{s=v[t]
r=t===u?A.o.gaj5(s):16;--w.c}w.b=A.o.dU(w.b,r)+s
w.a+=r}v=w.b
t-=d
q=A.o.mi(v,t)
w.b=v-A.o.dU(q,t)
w.a=t
return q},
$S:76}
C.cCI.prototype={
$0(){var w,v,u,t,s
for(w=this.a,v=w.$flags|0,u=1,t=0;t<8;++t){if(u===0)break
s=w[t]+u
v&2&&B.ak(w)
w[t]=s&255
u=s>>>8}},
$S:0}
C.bN3.prototype={
$1(d){return J.eX(A.dH.gaP(d),d.byteOffset,d.byteLength)},
$S:1666}
C.fnh.prototype={
$5(d,e,f,g,h){var w=this,v=w.a
if((v&8)!==0)B.iG(w.b,d+f,e+g,w.c,h,w.d,!1,w.e,w.f)
if((v&4)!==0)B.iG(w.b,d-f,e+g,w.c,h,w.d,!1,w.e,w.f)
if((v&2)!==0)B.iG(w.b,d+f,e-g,w.c,h,w.d,!1,w.e,w.f)
if((v&1)!==0)B.iG(w.b,d-f,e-g,w.c,h,w.d,!1,w.e,w.f)},
$S:1667}
C.bXt.prototype={
$1(d){return B.a1(d,x.N,x.z)},
$S:26}
C.bXu.prototype={
$2(d,e){var w,v=J.q(e,"savedAt")
v=J.k(v==null?"":v)
w=J.q(d,"savedAt")
return A.a.aL(v,J.k(w==null?"":w))},
$S:44}
C.bXw.prototype={
$1(d){var w=J.q(d,"id")
return J.k(w==null?"":w)===this.a},
$S:4}
C.fD4.prototype={
$1(d){return new C.a06(this.a,this.b,C.i0K(),null)},
$S:z+36}
C.f1r.prototype={
$0(){var w=this.a
w.e=this.b
w.f=!1},
$S:0}
C.f1v.prototype={
$1(d){return this.a.d.t(0,d.a)},
$S:z+2}
C.f1w.prototype={
$0(){var w=this.a
w.r=!0
w.x=null},
$S:0}
C.f1x.prototype={
$0(){var w,v,u=this.a
u.r=!1
w=this.b
v=this.c.length
if(w===v){v=w===1?"":"s"
u.x="Saved "+w+" presentation"+v+" to the database."
u.y=!1
u.d.a9(0)
u.w=1}else if(w===0){u.x="Could not save. Check the connection and try again."
u.y=!0}else{u.x="Saved "+w+" of "+v+". Try the rest again."
u.y=!0}},
$S:0}
C.f1s.prototype={
$0(){var w=this.a
w.r=!0
w.x=null},
$S:0}
C.f1t.prototype={
$0(){var w=this.a
w.r=!1
w.x="Could not open that saved presentation."
w.y=!0},
$S:0}
C.f1u.prototype={
$0(){var w=this.a
w.r=!1
w.x='"'+this.b.b+'" is back in your presentations.'
w.y=!1},
$S:0}
C.f1m.prototype={
$1(d){var w=null,v=B.d('"'+this.a+'" will be removed from the database. Your own copy stays in your presentations.',w,w,w,w,w,w,A.hB,w,w,w)
return B.ei(B.a([B.bK(!1,D.fek,w,w,!0,w,w,new C.f1k(d),w,w),B.bK(!1,D.fds,w,w,!0,w,w,new C.f1l(d),w,w)],x.p),w,w,D.WN,v,w,w,w,w,D.fs6,w)},
$S:19}
C.f1k.prototype={
$0(){B.a5(this.a,!1).N(!1)
return null},
$S:0}
C.f1l.prototype={
$0(){B.a5(this.a,!1).N(!0)
return null},
$S:0}
C.f1n.prototype={
$0(){return this.a.r=!0},
$S:0}
C.f1o.prototype={
$0(){return this.a.r=!1},
$S:0}
C.f1B.prototype={
$0(){var w=this.a
return w.m(new C.f1A(w,this.b))},
$S:0}
C.f1A.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.f1q.prototype={
$0(){var w=this.a
return w.m(new C.f1p(w,this.b,this.c))},
$S:0}
C.f1p.prototype={
$0(){var w=this.a.d,v=this.c.a
return this.b?w.W(0,v):w.L(0,v)},
$S:0}
C.f1y.prototype={
$0(){return this.a.a0q(this.b)},
$S:0}
C.f1z.prototype={
$0(){return this.a.Ou(0,this.b)},
$S:0}
C.f1E.prototype={
$0(){B.a5(this.a,!1).N(null)
return null},
$S:0}
C.f1F.prototype={
$0(){var w=this.a
return w.m(new C.f1D(w,this.b))},
$S:0}
C.f1D.prototype={
$0(){var w=this.a,v=w.d
if(this.b)v.a9(0)
else{w=w.a.c
v.v(0,new B.K(w,new C.f1C(),B.T(w).k("K<1,n>")))}},
$S:0}
C.f1C.prototype={
$1(d){return d.a},
$S:z+67}
C.f8E.prototype={
$1(d){var w,v=x.N,u=x.z,t=B.a1(d,v,u),s=t.h(0,"id")
s=J.k(s==null?"":s)
w=x.f
v=F.h1L(w.b(t.h(0,"doc"))?B.a1(w.a(t.h(0,"doc")),v,u):A.cA)
t=t.h(0,"updatedAt")
u=B.bi(J.k(t==null?"":t))
return new C.oc(s,v,u==null?new B.S(Date.now(),0,!1):u)},
$S:z+50}
C.f8F.prototype={
$1(d){return d.a.length!==0},
$S:z+5}
C.fpO.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n
for(w=d.length,v=this.a,u=0;u<d.length;d.length===w||(0,B.L)(d),++u){t=d[u]
s=t.a
r=v.h(0,s)
q=!0
if(r!=null){p=t.c
o=r.c
n=p.a
if(n<=o.gbo())q=n===o.gbo()&&p.b>o.gcw()}if(q)v.n(0,s,t)}},
$S:z+68}
C.fpM.prototype={
$1(d){return!this.a.t(0,d.a)},
$S:z+5}
C.fpN.prototype={
$2(d,e){return e.c.aL(0,d.c)},
$S:z+29}
C.fCz.prototype={
$1(d){return d.ae()},
$S:z+32}
C.fmY.prototype={
$1(d){return d.a===this.a},
$S:z+5}
C.fDq.prototype={
$1(d){return new C.XU(this.a,null)},
$S:z+34}
C.cE0.prototype={
$1(d){return A.a.i(d.b).length===0},
$S:z+39}
C.cE2.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.cE5.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cE6.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.cE4())},
$S:11}
C.cE4.prototype={
$0(){},
$S:0}
C.cE7.prototype={
$1(d){var w=0,v=B.j(x.a),u=this,t,s,r,q,p
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(C.a14(t.a.c),$async$$1)
case 2:s=f
r=u.b
q=J.cE(s)
p=q.ba(s,new C.cE3(r))
if(p<0)q.cj(s,0,r)
else q.n(s,p,r)
w=3
return B.b(C.agx(t.a.c,s),$async$$1)
case 3:return B.h(null,v)}})
return B.i($async$$1,v)},
$S:318}
C.cE3.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cE8.prototype={
$1(d){},
$S:30}
C.cE1.prototype={
$1(d){return new C.XS(this.b,this.a.gctv(),null)},
$S:z+40}
C.cE9.prototype={
$1(d){return D.fJt},
$S:z+43}
C.cDX.prototype={
$1(d){var w=null,v=B.m(24),u=B.I(D.Wu,A.q,1),t=x.p
return B.av(B.aF(!1,A.a1,!0,w,B.p(w,B.v(B.a([new B.C(D.bs6,B.v(B.a([B.p(w,D.bFG,A.f,w,w,new B.o(A.ay.j(0.14),w,w,w,w,w,A.a6),w,56,w,w,w,w,w,56),A.aP,D.fcw,A.S,B.d("\u201c"+this.a.b.a+"\u201d is removed from this device. This cannot be undone.",w,w,w,w,w,w,D.f0O,A.L,w,w)],t),A.m,w,A.e,A.j,0,A.p),w),A.e1,new B.C(A.pC,B.A(B.a([B.D(B.dU(D.fja,new C.cDV(d),B.de(w,w,w,w,w,w,w,w,w,E.mV,w,w,A.cf,w,new B.b7(B.m(14),A.Y),D.aWE,w,w,w,w)),1),A.av,B.D(B.bJ(D.foX,new C.cDW(d),B.bk(A.bI,w,w,w,w,w,A.cf,w,new B.b7(B.m(14),A.Y),w,w,w)),1)],t),A.m,w,A.e,A.j,0,w,w),w)],t),A.m,w,A.e,A.Q,0,A.p),A.f,w,A.wy,new B.o(D.abM,w,u,v,D.cSn,w,A.n),w,w,w,K.Yc,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ag),w,w,w)},
$S:1668}
C.cDV.prototype={
$0(){B.a5(this.a,!1).N(!1)
return null},
$S:0}
C.cDW.prototype={
$0(){B.a5(this.a,!1).N(!0)
return null},
$S:0}
C.cDY.prototype={
$0(){return J.nj(this.a.d,new C.cDU(this.b))},
$S:0}
C.cDU.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cDT.prototype={
$1(d){var w,v,u,t=null,s=B.m(28),r=B.I(D.Wu,A.q,1),q=x.p
q=B.a([B.A(B.a([B.p(t,D.bKx,A.f,t,t,new B.o(t,t,t,B.m(14),t,D.anj,A.n),t,44,t,t,t,t,t,44),A.bf,B.D(B.v(B.a([B.d(this.a.b.a,t,1,A.a2,t,t,t,D.aPy,t,t,t),A.bA,D.foU],q),A.F,t,A.e,A.j,0,A.p),1)],q),A.m,t,A.e,A.j,0,t,t),A.aA],q)
for(w=0;w<2;++w){v={}
u=D.dc5[w]
v.a=null
u=u.a
v.a=u[0]
q.push(new C.awq(u[1],u[2],u[3],new C.cDR(v,d),!1,t))}q.push(A.an)
q.push(D.bmf)
q.push(A.an)
q.push(new C.awq(A.e4,"Delete book","Remove it from this device",new C.cDS(d),!0,t))
return B.bm(!0,B.p(t,B.v(q,A.F,t,A.e,A.Q,0,A.p),A.f,t,t,new B.o(D.abM,t,r,s,t,t,A.n),t,t,t,A.tt,Ao.LK,t,t,t),!0,!1,A.af,!0,!0)},
$S:28}
C.cDR.prototype={
$0(){var w=this.a.a
B.a5(this.b,!1).N(w)
return null},
$S:0}
C.cDS.prototype={
$0(){B.a5(this.a,!1).N("delete")
return null},
$S:0}
C.cE_.prototype={
$3(d,e,f){var w=null,v=B.m(4),u=B.a([new B.ac(0,A.G,A.w.j(0.45),A.aFt,12)],x.V)
return B.dV(B.eC(A.A,e,B.p(w,B.bv(B.m(4),new B.a6(62,95.81818181818181,B.f2(A.A,F.an4(d),A.f,A.dt),w),A.aq),A.f,w,w,new B.o(w,w,w,v,u,w,A.n),w,w,w,w,w,w,w,w),w),new B.u(f,0))},
$S:z+48}
C.cDZ.prototype={
$0(){return this.a.c0A()},
$S:0}
C.cDQ.prototype={
$0(){return this.a.aWL(0,this.b)},
$S:0}
C.cDP.prototype={
$0(){return this.a.CM(this.b)},
$S:0}
C.cDO.prototype={
$0(){return this.a.CM(this.b)},
$S:0}
C.cEa.prototype={
$2(d,e){var w=this.a
return w.bAi(J.q(w.d,e))},
$S:40}
C.cDh.prototype={
$0(){var w=this.a
if(w.c!=null)w.Aq()},
$S:0}
C.cDg.prototype={
$0(){var w=this.a,v=w.w
return v.push(w.aZB("Page "+(v.length+1),"",""))},
$S:0}
C.cDj.prototype={
$0(){var w=this.a.w,v=this.b,u=w[v],t=this.c
w[v]=w[t]
w[t]=u},
$S:0}
C.cDr.prototype={
$0(){},
$S:0}
C.cDs.prototype={
$1(d){var w=this.a,v=w.a,u=$.aw()
v.S$=u
v.P$=0
w=w.b
w.S$=u
w.P$=0
return null},
$S:8}
C.cDk.prototype={
$0(){return this.a.c="data:"+this.b+";base64,"+A.cS.gcv().aJ(this.c)},
$S:0}
C.cDi.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.cDm.prototype={
$0(){return this.a.PO(this.b)},
$S:0}
C.cDn.prototype={
$0(){return this.a.PO(this.b)},
$S:0}
C.cDo.prototype={
$0(){var w=this.a
w.m(new C.cDl(this.b))
w.DB()},
$S:0}
C.cDl.prototype={
$0(){return this.a.c=""},
$S:0}
C.cDq.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new C.cDp(w,d))
w.DB()},
$S:z+51}
C.cDp.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.cDx.prototype={
$2(d,e){if(d)this.a.Aq()},
$S:122}
C.cDt.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=2
return B.b(u.a.Aq(),$async$$0)
case 2:t=u.b
if(t.e!=null)t.I(x.q).f.R(D.ePu)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.cDu.prototype={
$0(){return this.a.aVJ(this.b,-1)},
$S:0}
C.cDv.prototype={
$0(){return this.a.aVJ(this.b,1)},
$S:0}
C.cDw.prototype={
$0(){return this.a.c1P(0,this.b)},
$S:0}
C.fuk.prototype={
$1(d){return C.hbJ()},
$S:43}
C.ful.prototype={
$1(d){return null},
$S:30}
C.fd2.prototype={
$1(d){return null},
$S:30}
C.fvj.prototype={
$1(d){var w=d.b[0]
w.toString
return w},
$S:310}
C.fvi.prototype={
$2(d,e){return A.o.aL(e.length,d.length)},
$S:249}
C.fvp.prototype={
$1(d){var w=this.a
return C.fVi(d)===w||C.hge(d)===w},
$S:z+4}
C.fc5.prototype={
$1(d){return A.a.aT(A.o.u(d),2,"0")},
$S:74}
C.c72.prototype={
$1(d){return d.length!==0},
$S:3}
C.fui.prototype={
$1(d){return d.a===this.a.a.a},
$S:z+4}
C.fuj.prototype={
$1(d){return C.fx2(d)&&A.a.t(d.db,"rais")},
$S:z+4}
C.fp9.prototype={
$1(d){var w=null
return B.bm(!0,new B.C(E.xr,B.v(B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.b2,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bw,D.fjL,A.P,B.d("Hati ya jimbo: "+this.a,w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aP,B.dp(D.G9,D.fe2,new C.fp7(d),B.bk(A.bY,w,w,w,A.w,w,A.cf,w,w,w,w,w)),A.S,B.eB(A.vA,D.fkZ,new C.fp8(d),B.de(w,w,w,w,w,w,w,w,w,A.ad,w,w,A.cf,w,w,Q.ww,w,w,w,w))],x.p),A.aj,w,A.e,A.Q,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:28}
C.fp7.prototype={
$0(){B.a5(this.a,!1).N("continue")
return null},
$S:0}
C.fp8.prototype={
$0(){B.a5(this.a,!1).N("new")
return null},
$S:0}
C.fpa.prototype={
$1(d){var w=null
return B.ei(B.a([B.bK(!1,D.faq,w,w,!0,w,w,new C.fp5(d),w,w),B.bJ(D.fr9,new C.fp6(d),w)],x.p),w,w,w,D.ft_,w,w,w,w,D.fak,w)},
$S:19}
C.fp5.prototype={
$0(){B.a5(this.a,!1).N(!1)
return null},
$S:0}
C.fp6.prototype={
$0(){B.a5(this.a,!1).N(!0)
return null},
$S:0}
C.e5t.prototype={
$0(){var w=this.a
w.r=w.f=w.e=!1},
$S:0}
C.e5r.prototype={
$0(){return this.a.e=!0},
$S:0}
C.e5s.prototype={
$0(){return this.a.f=!0},
$S:0}
C.e5u.prototype={
$0(){return this.a.r=!1},
$S:0}
C.e5v.prototype={
$0(){return this.a.r=!0},
$S:0}
C.fvo.prototype={
$1(d){return A.a.aT(A.o.u(d),2,"0")},
$S:74}
C.fvk.prototype={
$2$h$w(d,e){var w=null
return new B.bH(A.a3,w,w,B.Dq(A.A,B.p(w,w,A.f,w,w,new B.o(this.a.j(0.14),w,w,B.m(3),w,w,A.n),w,d,w,w,w,w,w,w),w,e),w)},
$0(){return this.$2$h$w(5,1)},
$1$w(d){return this.$2$h$w(5,d)},
$1$h(d){return this.$2$h$w(d,1)},
$S:1669}
C.fvm.prototype={
$1(d){var w=null,v=B.m(3)
return B.p(A.A,B.d(d,w,w,w,w,w,w,D.f1Z,w,w,w),A.f,w,w,new B.o(this.a,w,w,v,w,w,A.n),w,12,w,w,w,w,w,w)},
$S:175}
C.fvn.prototype={
$1$size(d){var w=null
return B.A(B.a([B.p(w,w,A.f,w,w,new B.o(w,w,B.I(A.hV,A.q,1.5),w,w,w,A.a6),w,d,w,w,w,w,w,d),B.dV(B.p(w,w,A.f,w,w,new B.o(w,w,B.I(A.hV,A.q,1.5),w,w,w,A.a6),w,d,w,w,w,w,w,d),new B.u(-d*0.38,0))],x.p),A.m,w,A.bb,A.j,0,w,w)},
$0(){return this.$1$size(18)},
$S:1670}
C.fvl.prototype={
$2$female$size(d,e){var w=null,v=d?D.ady:this.a,u=B.I(A.hV,A.q,1),t=e*0.32,s=B.ao(w,B.p(w,w,A.f,w,w,new B.o(v,w,w,w,w,w,A.a6),w,t,w,w,w,w,w,t),w,w,w,w,e*0.16,w),r=d?0.62:0.5
return B.p(w,new B.an(A.A,w,A.aa,A.r,B.a([s,B.ao(e*0.06,B.p(w,w,A.f,w,w,new B.o(v,w,w,B.m(7),w,w,A.n),w,t,w,w,w,w,w,e*r),w,w,w,w,w,w)],x.p),w),A.f,w,w,new B.o(D.ac_,w,u,w,w,w,A.a6),w,e,w,w,w,w,w,e)},
$1$female(d){return this.$2$female$size(d,18)},
$S:1671}
C.fGS.prototype={
$1(d){return new C.aco(this.a,this.b,null)},
$S:z+108}
C.dVO.prototype={
$2(d,e){var w,v,u,t=null,s=this.b,r=s?D.bjl:A.KJ,q=B.I(D.j5.j(0.25),A.q,1),p=B.av(B.p(t,t,A.f,t,t,new B.o(A.bY.j(0.45),t,t,B.m(2),t,t,A.n),t,4,t,t,t,t,t,40),t,t,t),o=B.m(15)
o=B.p(t,D.am3,A.f,t,t,new B.o(t,t,B.I(A.c.j(0.5),A.q,1.2),o,B.a([new B.ac(0,A.G,D.j5.j(0.35),A.ej,10)],x.V),D.bTQ,A.n),t,t,t,t,A.Ly,t,t,t)
w=this.a
v=w.d.length
u=x.p
return B.p(t,B.v(B.a([new B.C(H.Y1,B.v(B.a([p,A.aA,B.A(B.a([o,A.bf,B.D(B.v(B.a([B.d("Chagua muundo wa hati",t,t,t,t,t,t,B.l(t,t,s?A.c:D.j5,t,t,t,t,t,t,t,t,17,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),A.bA,B.d(w.c+" \xb7 "+v+" miundo",t,t,t,t,t,t,D.f1g,t,t,t)],u),A.F,t,A.e,A.j,0,A.p),1)],u),A.m,t,A.e,A.j,0,t,t)],u),A.m,t,A.e,A.j,0,A.p),t),B.D(B.ic(!0,t,e,A.y,D.aMX,new C.dVN(w,this.c),v,D.agP,t,A.ah,!1),1)],u),A.m,t,A.e,A.j,0,A.p),A.f,t,t,new B.o(r,t,q,A.m1,t,t,A.n),t,t,t,t,t,t,t,t)},
$S:109}
C.dVN.prototype={
$2(d,e){var w=this.a.d[e]
return new C.abO(w,new C.dVM(this.b,w),null)},
$S:z+72}
C.dVM.prototype={
$0(){B.a5(this.a,!1).N(this.b.a)
return null},
$S:0}
C.fpd.prototype={
$1(d){return d.w==="hati_kuhowa"},
$S:z+2}
C.fpe.prototype={
$1(d){var w=null,v=this.a
return B.bm(!0,new B.C(E.xr,B.v(B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.b2,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bw,D.fn3,A.P,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aP,B.dp(D.G9,B.d('Endelea na "'+A.d.gK(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fpb(d),B.bk(D.j5,w,w,w,A.c,w,A.cf,w,w,w,w,w)),A.S,B.eB(A.nW,D.Tk,new C.fpc(d),B.de(w,w,w,w,w,w,w,w,w,A.ad,w,w,A.cf,w,w,Q.ww,w,w,w,w))],x.p),A.aj,w,A.e,A.Q,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:28}
C.fpb.prototype={
$0(){B.a5(this.a,!1).N("continue")
return null},
$S:0}
C.fpc.prototype={
$0(){B.a5(this.a,!1).N("new")
return null},
$S:0}
C.fph.prototype={
$1(d){return d.w==="hati_kuhoweya"},
$S:z+2}
C.fpi.prototype={
$1(d){var w=null,v=this.a
return B.bm(!0,new B.C(E.xr,B.v(B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.b2,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bw,D.fbo,A.P,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aP,B.dp(D.G9,B.d('Endelea na "'+A.d.gK(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fpf(d),B.bk(D.j5,w,w,w,A.c,w,A.cf,w,w,w,w,w)),A.S,B.eB(A.nW,D.Tk,new C.fpg(d),B.de(w,w,w,w,w,w,w,w,w,A.ad,w,w,A.cf,w,w,Q.ww,w,w,w,w))],x.p),A.aj,w,A.e,A.Q,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:28}
C.fpf.prototype={
$0(){B.a5(this.a,!1).N("continue")
return null},
$S:0}
C.fpg.prototype={
$0(){B.a5(this.a,!1).N("new")
return null},
$S:0}
C.fpl.prototype={
$1(d){return d.w==="hati_malipo_awamu"},
$S:z+2}
C.fpm.prototype={
$1(d){var w=null,v=this.a
return B.bm(!0,new B.C(E.xr,B.v(B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.b2,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bw,D.fhB,A.P,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aP,B.dp(D.G9,B.d('Endelea na "'+A.d.gK(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fpj(d),B.bk(D.j5,w,w,w,A.c,w,A.cf,w,w,w,w,w)),A.S,B.eB(A.nW,D.Tk,new C.fpk(d),B.de(w,w,w,w,w,w,w,w,w,A.ad,w,w,A.cf,w,w,Q.ww,w,w,w,w))],x.p),A.aj,w,A.e,A.Q,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:28}
C.fpj.prototype={
$0(){B.a5(this.a,!1).N("continue")
return null},
$S:0}
C.fpk.prototype={
$0(){B.a5(this.a,!1).N("new")
return null},
$S:0}
C.fIk.prototype={
$1(d){return D.fNf},
$S:z+74}
C.eaI.prototype={
$2(d,e){var w,v=null,u=this.a,t=u?D.bbf:A.KJ,s=B.I(A.aw.j(0.25),A.q,1),r=B.av(B.p(v,v,A.f,v,v,new B.o(A.aw.j(0.45),v,v,B.m(2),v,v,A.n),v,4,v,v,v,v,v,40),v,v,v),q=B.m(15)
q=B.p(v,D.bMO,A.f,v,v,new B.o(v,v,B.I(A.c.j(0.5),A.q,1.2),q,B.a([new B.ac(0,A.G,A.bY.j(0.35),A.ej,10)],x.V),D.ano,A.n),v,v,v,v,A.Ly,v,v,v)
w=x.p
return B.p(v,B.v(B.a([new B.C(H.Y1,B.v(B.a([r,A.aA,B.A(B.a([q,A.bf,B.D(B.v(B.a([B.d("Chagua muundo wa hati",v,v,v,v,v,v,B.l(v,v,u?A.c:A_.KG,v,v,v,v,v,v,v,v,17,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.bA,B.d("Hati ya Ndoa \xb7 19 miundo",v,v,v,v,v,v,D.eZM,v,v,v)],w),A.F,v,A.e,A.j,0,A.p),1)],w),A.m,v,A.e,A.j,0,v,v)],w),A.m,v,A.e,A.j,0,A.p),v),B.D(B.ic(!0,v,e,A.y,D.aMX,new C.eaH(this.b),19,D.agP,v,A.ah,!1),1)],w),A.m,v,A.e,A.j,0,A.p),A.f,v,v,new B.o(t,v,s,A.m1,v,v,A.n),v,v,v,v,v,v,v,v)},
$S:109}
C.eaH.prototype={
$2(d,e){var w=D.Q3[e]
return new C.ae5(w,new C.eaG(this.a,w),null)},
$S:z+75}
C.eaG.prototype={
$0(){B.a5(this.a,!1).N(this.b.a)
return null},
$S:0}
C.fx6.prototype={
$0(){return B.fUj(C.hPi(this.a))},
$S:337}
C.fx5.prototype={
$0(){var w=C.fVA(this.a)
return"data:image/png;base64,"+A.cS.gcv().aJ(w)},
$S:22}
C.fab.prototype={
$4(d,e,f,g){var w=d+f*7,v=g*3
v=B.a([new B.j9(d,e),new B.j9(w,e+v),new B.j9(d+f*14,e),new B.j9(w,e-v)],x.J)
B.a11(this.a,C.fy(4291404327),v)},
$S:664}
C.fIv.prototype={
$1(d){return new C.V1(this.a,null)},
$S:z+77}
C.ee_.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.edZ())},
$S:27}
C.edZ.prototype={
$0(){},
$S:0}
C.ee0.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.edY(w,d))},
$S:1673}
C.edY.prototype={
$0(){return this.a.x=J.fa(A.dH.gaP(this.b))},
$S:0}
C.ee1.prototype={
$1(d){},
$S:30}
C.edC.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.edy.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.edJ.prototype={
$0(){var w=this.a
w.as=!0
w.at="The editor is writing your newspaper\u2026"},
$S:0}
C.edK.prototype={
$0(){var w=this.a
A.d.a9(w.ay)
w.z=this.b
w=w.ax
A.d.a9(w)
w.push(D.efX)},
$S:0}
C.edL.prototype={
$0(){return this.a.as=!1},
$S:0}
C.edE.prototype={
$0(){var w=this.a
w.as=!0
w.at="Working on it\u2026"
w.ax.push(new B.y("you",this.b))
w.f.bN(0,A.c3)},
$S:0}
C.edF.prototype={
$0(){var w,v=this.b
if(v.c){w=this.a
w.ay.push(w.z)
w.z=v.b}this.a.ax.push(new B.y("ai",v.a))},
$S:0}
C.edG.prototype={
$0(){return this.a.ax.push(new B.y("ai",B.t(this.b)))},
$S:0}
C.edH.prototype={
$0(){return this.a.as=!1},
$S:0}
C.edI.prototype={
$1(d){var w=this.a.r,v=w.f
if(v.length!==0){v=A.d.gcZ(v).Q
v.toString
w.m2(v,A.dV,A.i8)}},
$S:8}
C.edD.prototype={
$0(){var w=this.a,v=w.z,u=C.fxK(w.y),t=this.b
w.y=t
if(v.a===u)w.z=v.cEu(C.fxK(t))},
$S:0}
C.edA.prototype={
$0(){var w=this.a
w.as=!0
w.at="Making your picture\u2026"},
$S:0}
C.edB.prototype={
$0(){return this.a.as=!1},
$S:0}
C.edR.prototype={
$0(){return B.a5(this.a,!1).lL()},
$S:0}
C.edS.prototype={
$0(){var w=this.a
return w.m(new C.edQ(w))},
$S:0}
C.edQ.prototype={
$0(){var w=this.a
return w.z=w.ay.pop()},
$S:0}
C.edT.prototype={
$0(){var w=this.a
return w.m(new C.edP(w,this.b))},
$S:0}
C.edP.prototype={
$0(){var w=this.b.b
this.a.e.saV(0,w)
return w},
$S:0}
C.edU.prototype={
$1(d){var w=this.a
return w.m(new C.edO(w))},
$S:9}
C.edO.prototype={
$0(){return this.a.Q="en"},
$S:0}
C.edV.prototype={
$1(d){var w=this.a
return w.m(new C.edN(w))},
$S:9}
C.edN.prototype={
$0(){return this.a.Q="sw"},
$S:0}
C.edW.prototype={
$0(){var w=this.a
return w.m(new C.edM(w,this.b))},
$S:0}
C.edM.prototype={
$0(){var w=this.b
this.a.f.saV(0,w)
return w},
$S:0}
C.edX.prototype={
$1(d){return this.a.Z5()},
$S:2}
C.edz.prototype={
$0(){return this.a.c54(this.b)},
$S:0}
C.caI.prototype={
$1(d){var w=this.a
return typeof w.h(0,d)=="string"?A.a.i(B.cO(w.h(0,d))):null},
$S:381}
C.caG.prototype={
$1(d){return A.a.i(d)},
$S:14}
C.caH.prototype={
$1(d){return d.length!==0},
$S:3}
C.fwH.prototype={
bj8(d,e){var w=0,v=B.j(x.H),u,t,s,r
var $async$$2=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:r=new C.bN2(d,B.a([],x.bH))
for(u=e.length,t=0;t<e.length;e.length===u||(0,B.L)(e),++t){s=e[t]
r.cB6($.tT().ki(0,"assets/news_fonts/"+s))}w=2
return B.b(r.my(0),$async$$2)
case 2:return B.h(null,v)}})
return B.i($async$$2,v)},
$2(d,e){return this.bj8(d,e)},
$S:1674}
C.fuZ.prototype={
$1(d){return d.length!==0},
$S:3}
C.fv0.prototype={
$1(d){var w=this.a.a
w=A.d.aI(A.d.dn(this.b,w,w+d)," ")
w=B.aJ(w," \n\n ","\n\n")
w=B.aJ(w," \n\n","\n\n")
return B.aJ(w,"\n\n ","\n\n")},
$S:74}
C.fv_.prototype={
$1(d){var w,v,u,t=null
if(d===0)return!0
w=B.ii(t,t,t,t,B.dq(t,t,t,t,t,t,t,t,t,this.c,this.b.$1(d)),A.q9,A.ch,t,A.eq,A.cd)
v=this.a
w.Bw(v.b)
u=w.b.a.c
return u.gbc(u)<=v.a},
$S:32}
C.f9N.prototype={
$1(d){var w=A.a.fz(d,B.af("\\s+",!0,!1,!1,!1))
return new B.a2(w,new C.f9O(),B.T(w).k("a2<1>")).gM(0)},
$S:261}
C.f9O.prototype={
$1(d){return d.length!==0},
$S:3}
C.f9L.prototype={
$2(d,e){return d+this.a.$1(e)},
$S:225}
C.f9M.prototype={
$2(d,e){return d+this.a.$1(e)},
$S:225}
C.caJ.prototype={
$2(a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=null,a7=y.g,a8=b0.b
a8=isFinite(a8)?a8:824
w=b0.d
w=isFinite(w)?w:340
v=a5.b
u=a5.c
t=u-1
s=(a8-v*t)/u
r=a5.d&&a5.a.gaz_()?Math.min(150,w*0.42):0
q=a5.e
p=x.s
o=B.a([],p)
for(n=a5.a,m=x.G,l=n.d,k=l.as;q>=10.5;q-=0.5){j=n.c.r
i=j.length===0?B.a([a7],p):j
h=B.b0(l.w)
g=B.a([],m)
for(f=0;f<u;++f)g.push(new B.y(s,w-(f===t?r:0)))
o=C.fVh(i,new B.G(!0,h,a6,k,a6,a6,q,A.cN,A.bl,0,a6,a6,1.28,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),g)
if(C.fSf(j.length===0?B.a([a7],p):j,o))break}e=q*1.28
j=A.d.aI(n.gcdc(),"\n\n")
d=B.ii(a6,a6,a6,a6,B.dq(a6,a6,a6,a6,a6,a6,a6,a6,a6,n.adc(k,q,1.28),j),A.q9,A.ch,a6,A.eq,A.cd)
d.Bw(s)
for(a0=1;a0<40;++a0){j=d.b.a.c
a1=Math.min(w,j.gbc(j)/u+e*a0)
j=n.c.r
i=j.length===0?B.a([a7],p):j
h=B.b0(l.w)
g=B.a([],m)
for(f=0;f<u;++f)g.push(new B.y(s,Math.min(a1,w-(f===t?r:0))))
a2=C.fVh(i,new B.G(!0,h,a6,k,a6,a6,q,A.cN,A.bl,0,a6,a6,1.28,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),g)
if(C.fSf(j.length===0?B.a([a7],p):j,a2)){o=a2
break}}a3=n.adc(k,q,1.28)
p=x.p
m=B.a([],p)
for(k=r>0,v=v/2-0.5,l=l.w,j=r-12,a4=0;a4<u;++a4){i=B.a([],p)
if(a4>0)i.push(new B.C(new B.Q(v,0,v,0),B.p(a6,a6,A.f,B.b0(l).j(0.5),a6,a6,a6,a6,a6,a6,a6,a6,a6,1),a6))
h=B.a([new B.bD(1,A.bi,new B.x(o.length>a4?o[a4]:"",a6,a3,a6,A.q9,a6,a6,a6,a6,a6,a6,a6),a6)],p)
if(k&&a4===t)h.push(n.ayZ(s,j))
i.push(new B.a6(s,a6,B.v(h,A.F,a6,A.e,A.j,0,A.p),a6))
A.d.v(m,i)}return B.A(m,A.F,a6,A.e,A.j,0,a6,a6)},
$S:450}
C.caK.prototype={
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
n=o.gaz_()
m=n?Math.min(140,p*0.4):0
n=x.s
l=B.a([],n)
for(k=x.G,j=o.d,i=j.as,h=17;h>=10.5;h-=0.5){g=o.c.r
f=g.length===0?B.a([a6],n):g
e=B.b0(j.w)
d=B.a([new B.y(u,q),new B.y(u,q)],k)
for(a0=0;a0<t;++a0)d.push(new B.y(r,p-(a0===s?m:0)))
l=C.fVh(f,new B.G(!0,e,a5,i,a5,a5,h,A.cN,A.bl,0,a5,a5,1.28,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5),d)
if(C.fSf(g.length===0?B.a([a6],n):g,l))break}a1=o.adc(i,h,1.28)
a2=new C.caL(a1)
n=x.p
v=B.A(B.a([a2.$2(l[0],u),A.Iq,new B.a6(v,a5,a4.f,a5),A.Iq,a2.$2(l[1],u)],n),A.F,a5,A.e,A.j,0,a5,a5)
k=B.a([],n)
for(i=m>0,j=j.w,g=m-12,a3=0;a3<t;++a3){f=B.a([],n)
if(a3>0)f.push(new B.C(D.buo,B.p(a5,a5,A.f,B.b0(j).j(0.5),a5,a5,a5,a5,a5,a5,a5,a5,a5,1),a5))
e=B.a([new B.bD(1,A.bi,new B.x(l[2+a3],a5,a1,a5,A.q9,a5,a5,a5,a5,a5,a5,a5),a5)],n)
if(i&&a3===s)e.push(o.ayZ(r,g))
f.push(new B.a6(r,a5,B.v(e,A.F,a5,A.e,A.j,0,A.p),a5))
A.d.v(k,f)}return B.v(B.a([new B.a6(a5,q,v,a5),A.ac,B.D(B.A(k,A.F,a5,A.e,A.j,0,a5,a5),1)],n),A.m,a5,A.e,A.j,0,A.p)},
$S:144}
C.caL.prototype={
$2(d,e){var w=null
return new B.a6(e,w,B.d(d,w,w,w,w,w,w,this.a,A.q9,w,w),w)},
$S:1675}
C.fIy.prototype={
$1(d){return new C.V4(this.a,this.b,null)},
$S:z+79}
C.efa.prototype={
$1(d){return d.mf()},
$S:1676}
C.efb.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.ef9(w,d))},
$S:1677}
C.ef9.prototype={
$0(){var w=this.b
return this.a.d=w.gfm(w)},
$S:0}
C.eeY.prototype={
$0(){return this.a.y=!0},
$S:0}
C.eeZ.prototype={
$0(){return this.a.y=!1},
$S:0}
C.ef4.prototype={
$0(){return B.a5(this.a,!1).eI()},
$S:0}
C.ef5.prototype={
$2(d,e){var w=null,v=this.a,u=this.b,t=B.I(A.bz,A.q,2.5)
return B.aE(w,B.p(w,B.b3(w,w,w,new C.ban(u,v.gaw8(),w),A.f0),A.f,w,w,new B.o(w,w,t,w,w,w,A.n),w,w,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.ef2(v),new C.ef3(v,e,u),w,w,w,w,w,w,w,w,w,w,w,!1,A.a8)},
$S:35}
C.ef2.prototype={
$1(d){var w=this.a
return w.x=w.f},
$S:264}
C.ef3.prototype={
$1(d){var w=this.a
w.m(new C.ef_(w,d,this.b,this.c))},
$S:212}
C.ef_.prototype={
$0(){var w,v,u,t=this,s=t.a,r=t.b
s.f=A.k.D(s.x*r.d,1,6)
w=s.gaw8()
r=r.a
v=t.c
u=t.d
s.r=A.k.D(s.r-r.a/v.b*(w.c-w.a)/u.c,0,1)
s.w=A.k.D(s.w-r.b/v.d*(w.d-w.b)/u.d,0,1)},
$S:0}
C.ef6.prototype={
$1(d){var w=this.a
return w.m(new C.ef1(w,this.b))},
$S:9}
C.ef1.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.ef7.prototype={
$1(d){var w=this.a
return w.m(new C.ef0(w,d))},
$S:6}
C.ef0.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.ef8.prototype={
$0(){return B.a5(this.b,!1).N(this.a.a.c)},
$S:0}
C.fIO.prototype={
$1(d){return D.fQ2},
$S:z+83}
C.eOp.prototype={
$1(d){return this.a.XM()},
$S:8}
C.eNh.prototype={
$0(){var w=this.a,v=this.b
w.z=v
w.y="data:image/png;base64,"+A.cS.gcv().aJ(v)},
$S:0}
C.eNF.prototype={
$0(){var w=this.a
w.p4=this.b
w.as=3},
$S:0}
C.eNP.prototype={
$1(d){return d>=this.a.length},
$S:32}
C.eN0.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.eN1.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.eMZ.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.eN_.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.eNy.prototype={
$2(d,e){var w,v,u=null,t=e.d,s=this.a,r=new C.eNz(s,this.b,t,e.b),q=r.$1(!0),p=s.y2
p=B.a([B.jt(B.rl(p>0.2?C.fN2(q,B.a4l(p,p,A.x)):q),A.r,u)],x.p)
w=s.bi
if(w>0.02){v=B.a4l(12,12,A.x)
p.push(B.jt(B.db(B.rl(C.fN2(r.$1(!0),v)),w*0.75),A.r,u))}r=s.b3
if(r!=null&&s.b1>0)p.push(B.ej(u,B.b0(r).j(s.b1),!0))
r=s.bb
if(r!=null&&s.bK>0){r=B.b0(r).j(s.bK)
w=s.bb
w.toString
p.push(B.c_(u,new B.o(u,u,u,u,u,new B.bR(D.aUX,1.15,A.x,u,0,B.a([r,B.b0(w).j(0)],x.O),u,u),A.n),A.bd))}r=s.aE
if(r>0)p.push(B.c_(u,new B.o(u,u,u,u,u,new B.bR(D.aUI,0.8,A.x,u,0,B.a([A.c.j(r*0.55),A.c.j(0)],x.O),u,u),A.n),A.bd))
r=s.aN
if(r>0)p.push(B.c_(u,new B.o(u,u,u,u,u,new B.a7(A.b0,A.b6,A.x,B.a([A.w.j(r),A.K,A.K,A.w.j(s.aN)],x.O),D.cR2,u),A.n),A.bd))
if(s.aG>0){r=s.k1
p.push(B.ao(u,B.c_(u,new B.o(u,u,u,u,u,new B.a7(A.b0,A.b6,A.x,B.a([A.w.j(0),A.w.j(s.aG),A.w.j(s.aG),A.w.j(0)],x.O),D.d0q,u),A.n),A.bd),0.48*t,u,0,0,(r-0.06)*t,u))}r=s.Z
if(r>0)p.push(B.ej(u,A.w.j(r),!0))
r=s.b5
if(r>0)p.push(B.c_(u,new B.o(u,u,u,u,u,new B.bR(A.A,0.95,A.x,u,0,B.a([A.K,A.w.j(r)],x.O),D.cYG,u),A.n),A.bd))
s=s.az
if(s>0)p.push(B.b3(u,u,u,new C.bdV(s,u),A.au))
return new B.an(A.W,u,A.b_,A.r,p,u)},
$S:62}
C.eNz.prototype={
$1(d){var w,v,u,t,s,r=this,q=null,p=B.fL(r.b,A.A,q,q,A.co,A.bQ,!0,q,!1,q,q),o=r.a,n=o.aVl(o.RG,o.R8,o.rx,o.ry,o.to,o.x1,o.x2,o.xr,o.y1),m=o.c8,l=m*3.141592653589793/180
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
t=o.bT
s=o.cT?-1:1
return B.dV(B.ea(A.A,B.eC(A.A,l,B.fs(A.A,new B.CZ(new B.yv(q,q,n,A.A2),p,q),q,B.vt(s,o.cW?-1:1,1),!0),q),v*w,q,q),new B.u(-m*r.d*u/2,-t*r.c*u/2))},
$S:551}
C.eNL.prototype={
$0(){return this.a.m(new C.eNK(this.b,this.c))},
$S:0}
C.eNK.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eNM.prototype={
$1(d){return this.a.m(new C.eNJ(this.b,d))},
$S:6}
C.eNJ.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eNO.prototype={
$0(){return this.a.m(new C.eNN(this.b,this.c))},
$S:0}
C.eNN.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eMR.prototype={
$1(d){return d.c===this.a.x},
$S:z+93}
C.eMS.prototype={
$1(d){var w=this.a
return w.m(w.gcuU())},
$S:2}
C.eMT.prototype={
$1(d){return this.a.m(new C.eMQ())},
$S:2}
C.eMQ.prototype={
$0(){},
$S:0}
C.eMU.prototype={
$0(){var w=this.a
return w.m(new C.eMP(w,this.b))},
$S:0}
C.eMP.prototype={
$0(){return this.a.x=this.b},
$S:0}
C.eMW.prototype={
$2(d,e){return A.av},
$S:36}
C.eMV.prototype={
$2(d,e){var w=null,v=this.b[e],u=this.a,t=v.a===u.w.a,s=B.m(14),r=B.a([B.b0(v.e),B.b0(v.f)],x.O),q=t?A.c:A.bF
q=B.I(q,A.q,t?2.5:1)
r=B.dg(w,B.av(B.d("\u201c",w,w,w,w,w,w,B.l(w,w,B.b0(v.r),w,w,w,w,w,w,w,w,40,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,w),w,w,A.bc,new B.o(w,w,q,s,w,new B.a7(A.b0,A.b6,A.x,r,w,w),A.n),A.hX,w,94,w,w,w,w,70)
return B.aE(w,new B.a6(70,w,B.v(B.a([r,A.fZ,B.d(v.b,w,1,A.a2,w,w,w,B.l(w,w,t?A.c:A.az,w,w,w,w,w,w,w,w,10.5,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eMO(u,v),w,w,w,w,w,w,!1,A.a8)},
$S:77}
C.eMO.prototype={
$0(){var w=this.a
return w.m(new C.eML(w,this.b))},
$S:0}
C.eML.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.eMX.prototype={
$1(d){var w=this.a
return w.m(new C.eMN(w,d))},
$S:9}
C.eMN.prototype={
$0(){return this.a.k3=this.b},
$S:0}
C.eMY.prototype={
$1(d){var w=this.a
return w.m(new C.eMM(w,d))},
$S:9}
C.eMM.prototype={
$0(){return this.a.k2=this.b},
$S:0}
C.eOe.prototype={
$1(d){var w=this.a.db
return w[d]===w[A.d.gK(this.b)]},
$S:32}
C.eOl.prototype={
$1(d){var w=this.a
return w.m(new C.eOm(w,d))},
$S:29}
C.eOm.prototype={
$0(){var w,v,u,t,s
for(w=this.a,v=w.dx,v=B.eb(v,v.r,B.a4(v).c),w=w.db,u=this.b,t=v.$ti.c;v.C();){s=v.d
w[s==null?t.a(s):s]=u}},
$S:0}
C.eOn.prototype={
$1(d){var w
A:{if(1===d){w=20
break A}if(2===d){w=28
break A}if(-1===d){w=11
break A}w=15
break A}return w},
$S:244}
C.eOf.prototype={
$0(){var w=this.a
return w.m(new C.eOd(w,this.b))},
$S:0}
C.eOd.prototype={
$0(){var w=this.a.dx,v=this.b
return w.t(0,v)?w.W(0,v):w.L(0,v)},
$S:0}
C.eOg.prototype={
$0(){var w=this.a
return w.m(new C.eOc(w,this.b))},
$S:0}
C.eOc.prototype={
$0(){var w,v=this.b.length,u=J.e2(v,x.S)
for(w=0;w<v;++w)u[w]=w
return this.a.dx.v(0,u)},
$S:0}
C.eOh.prototype={
$0(){var w=this,v=w.a
return v.m(new C.eOb(v,w.b,w.c,w.d))},
$S:0}
C.eOb.prototype={
$0(){var w,v,u,t,s,r=this,q=r.a.dx
q.a9(0)
w=B.a([],x.t)
for(v=r.b,u=r.c,t=r.d,s=0;s<v.length;++s)if(u[s]===t)w.push(s)
q.v(0,w)},
$S:0}
C.eOi.prototype={
$0(){var w=this.a,v=w.dx
return w.m(v.gri(v))},
$S:0}
C.eOj.prototype={
$0(){return this.b.$1(this.a.a)},
$S:0}
C.eOk.prototype={
$0(){var w=this.a
return w.m(new C.eOa(w))},
$S:0}
C.eOa.prototype={
$0(){var w=this.a.db
return A.d.he(w,0,w.length,0)},
$S:0}
C.eNY.prototype={
$1(d){return d.a===this.a.dy},
$S:207}
C.eNZ.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=(e.b-42)/7,h=B.a([],x.p)
for(w=i*0.42,v=this.a,u=i*0.95,t=x.O,s=0;s<21;++s){r={}
q=D.avp[s]
r.a=null
p=q.a
r.a=p
o=v.dy
n=new B.aV(9,9)
m=B.a([B.b0(v.w.e),B.b0(v.w.f)],t)
l=r.a
k=v.fx
h.push(v.awc(new B.o_(new B.bq(n,n,n,n),A.aq,new B.kJ(new B.o(j,j,j,j,j,new B.a7(A.a3,A.a7,A.x,m,j,j),A.n),A.bd,new C.aYE(l,B.b0(k==null?v.w.x:k),A.k.D(w,12,26),j),j),j),u,q.b,o===p,new C.eNX(r,v),2,i))}return B.bZ(A.bB,h,A.bs,7,7)},
$S:159}
C.eNX.prototype={
$0(){var w=this.b
return w.m(new C.eNS(this.a,w))},
$S:0}
C.eNS.prototype={
$0(){return this.b.dy=this.a.a},
$S:0}
C.eO_.prototype={
$1(d){var w=this.a
w.p1=!1
w.k4=d},
$S:243}
C.eO2.prototype={
$0(){var w=this.a
return w.m(new C.eNW(w))},
$S:0}
C.eNW.prototype={
$0(){return this.a.p1=!0},
$S:0}
C.eO3.prototype={
$1(d){return this.a.p2=d},
$S:6}
C.eO4.prototype={
$1(d){return this.a.p3=d},
$S:6}
C.eO5.prototype={
$1(d){return this.a.ok=d},
$S:6}
C.eO6.prototype={
$0(){var w=this.a
return w.m(new C.eNV(w))},
$S:0}
C.eNV.prototype={
$0(){var w=this.a
return w.fy=!w.fy},
$S:0}
C.eO7.prototype={
$0(){var w=this.a
return w.m(new C.eNU(w))},
$S:0}
C.eNU.prototype={
$0(){var w=this.a
return w.go=!w.go},
$S:0}
C.eO8.prototype={
$0(){var w=this.b
return w.m(new C.eNT(this.a,w))},
$S:0}
C.eNT.prototype={
$0(){return this.b.id=this.a.a},
$S:0}
C.eO9.prototype={
$1(d){return this.a.fx=d},
$S:243}
C.eO0.prototype={
$1(d){return this.a.fr=d},
$S:6}
C.eO1.prototype={
$1(d){return this.a.k1=d},
$S:6}
C.eNC.prototype={
$0(){var w=this.a
return w.m(new C.eNB(w))},
$S:0}
C.eNB.prototype={
$0(){var w=this.a
w.p4=null
w.b1k()},
$S:0}
C.eND.prototype={
$0(){var w=this.a
return w.m(new C.eNA(w,this.b))},
$S:0}
C.eNA.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.eNE.prototype={
$0(){var w=this.a
return w.m(w.gclx())},
$S:0}
C.eNu.prototype={
$0(){var w=this.a
return w.m(new C.eNt(w))},
$S:0}
C.eNt.prototype={
$0(){var w=this.a
w.RG=0.03
w.rx=1.12
w.ry=1.15
w.R8=w.xr=0},
$S:0}
C.eNv.prototype={
$0(){var w=this.a
return w.m(new C.eNs(w))},
$S:0}
C.eNs.prototype={
$0(){var w=this.a
w.aG=0.55
w.Z=Math.max(w.Z,0.12)},
$S:0}
C.eNw.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=null,n=(e.b-24)/4,m=B.a([],x.p)
for(w=n*1.25,v=this.a,u=this.b,t=0;t<18;++t){s=D.cZ2[t]
r=s.b
q=Math.abs(v.RG-r)<0.001&&Math.abs(v.rx-s.c)<0.001&&Math.abs(v.ry-s.d)<0.001&&Math.abs(v.to-s.e)<0.001&&Math.abs(v.x1-s.f)<0.001&&Math.abs(v.xr-s.r)<0.001&&Math.abs(v.x2)<0.5&&Math.abs(v.R8)<0.001&&!v.y1
p=new B.aV(9,9)
m.push(v.awc(new B.o_(new B.bq(p,p,p,p),A.aq,new B.a6(1/0,1/0,new B.CZ(new B.yv(o,o,v.aVl(r,0,s.c,s.d,s.e,s.f,0,s.r,!1),A.A2),B.fL(u,A.A,140,o,A.co,A.bQ,!1,o,!1,o,o),o),o),o),w,s.a,q,new C.eNr(v,s),3,n))}return B.bZ(A.bB,m,A.bs,10,8)},
$S:159}
C.eNr.prototype={
$0(){var w=this.a
return w.m(new C.eNq(w,this.b))},
$S:0}
C.eNq.prototype={
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
C.eN8.prototype={
$1(d){return this.a.R8=d},
$S:6}
C.eN9.prototype={
$1(d){return this.a.RG=d},
$S:6}
C.eNa.prototype={
$1(d){return this.a.rx=d},
$S:6}
C.eNb.prototype={
$1(d){return this.a.xr=d},
$S:6}
C.eNc.prototype={
$1(d){return this.a.aE=d},
$S:6}
C.eNd.prototype={
$1(d){return this.a.Z=d},
$S:6}
C.eNe.prototype={
$1(d){return this.a.b5=d},
$S:6}
C.eNf.prototype={
$1(d){return this.a.aG=d},
$S:6}
C.eNg.prototype={
$1(d){return this.a.aN=d},
$S:6}
C.eMu.prototype={
$1(d){return this.a.ry=d},
$S:6}
C.eMv.prototype={
$1(d){return this.a.to=d},
$S:6}
C.eMw.prototype={
$1(d){return this.a.x1=d},
$S:6}
C.eMx.prototype={
$1(d){return this.a.x2=d},
$S:6}
C.eMy.prototype={
$0(){var w=this.a
return w.m(new C.eMt(w))},
$S:0}
C.eMt.prototype={
$0(){var w=this.a
return w.y1=!w.y1},
$S:0}
C.eMz.prototype={
$1(d){return this.a.b3=d},
$S:243}
C.eMA.prototype={
$1(d){return this.a.b1=d},
$S:6}
C.eN2.prototype={
$1(d){return this.a.y2=d},
$S:6}
C.eN3.prototype={
$1(d){return this.a.bi=d},
$S:6}
C.eN4.prototype={
$1(d){return this.a.az=d},
$S:6}
C.eN5.prototype={
$1(d){return this.a.bb=d},
$S:243}
C.eN6.prototype={
$1(d){return this.a.bK=d},
$S:6}
C.eME.prototype={
$1(d){return this.a.aR=d},
$S:6}
C.eMF.prototype={
$1(d){return this.a.bj=d},
$S:6}
C.eMG.prototype={
$1(d){return this.a.bT=d},
$S:6}
C.eMH.prototype={
$1(d){return this.a.c8=d},
$S:6}
C.eMI.prototype={
$0(){var w=this.a
return w.m(new C.eMD(w))},
$S:0}
C.eMD.prototype={
$0(){var w=this.a
return w.c8=A.k.F(w.c8+90+180,360)-180},
$S:0}
C.eMJ.prototype={
$0(){var w=this.a
return w.m(new C.eMC(w))},
$S:0}
C.eMC.prototype={
$0(){var w=this.a
return w.cT=!w.cT},
$S:0}
C.eMK.prototype={
$0(){var w=this.a
return w.m(new C.eMB(w))},
$S:0}
C.eMB.prototype={
$0(){var w=this.a
return w.cW=!w.cW},
$S:0}
C.eNx.prototype={
$0(){var w=this.a,v=w.c
v.toString
return C.i3p(v,w.p4)},
$S:0}
C.eNp.prototype={
$2(d,e){var w=null,v=this.a.z,u=v==null?D.bjD:B.fL(v,A.A,w,w,A.co,A.bQ,!1,w,!1,w,w)
return C.fv6(d.length===0?"rounded":d,u,e)},
$S:133}
C.eNl.prototype={
$0(){var w=this.a
return w.m(new C.eNk(w))},
$S:0}
C.eNk.prototype={
$0(){var w=this.a
w.ay=0.39
w.ch=0.8
w.CW=0.22
w.cx="circle"
w.cy="gold"},
$S:0}
C.eNm.prototype={
$0(){var w=this.b
return w.m(new C.eNj(this.a,w))},
$S:0}
C.eNj.prototype={
$0(){return this.b.cx=this.a.a},
$S:0}
C.eNn.prototype={
$0(){var w=this.b
return w.m(new C.eNi(this.a,w))},
$S:0}
C.eNi.prototype={
$0(){return this.b.cy=this.a.a},
$S:0}
C.eNo.prototype={
$1(d){var w=this.a
w.CW=d
w.ay=A.k.D(w.ay,0,1-d)
w.ch=A.k.D(w.ch,0,0.95)},
$S:6}
C.eNI.prototype={
$2(d,e){var w,v,u,t=null,s=e.b,r=e.d,q=B.m(20),p=B.a([new B.ac(-4,A.G,A.b5.j(0.35),A.J,30)],x.V),o=B.m(20),n=this.a,m=x.p,l=B.a([],m)
if(n.p4!=null)l.push(new B.es(n.cf6(),n.r))
l.push(new C.Ia(n.crU(),!1,!1,t))
o=B.bY(0,B.bv(o,new B.es(new B.an(A.W,t,A.b_,A.r,l,t),n.f),A.aq),0,0,0)
l=n.ay
w=n.ch
v=n.CW*s
u=B.m(8)
return B.p(t,new B.an(A.W,t,A.aa,A.r,B.a([o,B.ao(t,B.aE(A.c5,B.c_(t,new B.o(t,t,B.I(A.c.j(0.3),A.q,1),u,t,t,A.n),A.bd),A.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.eNH(n,s,r),t,t,t,t,t,t,t,t,t,t,t,t,t,t,!1,A.a8),v,t,l*s,t,w*r,v)],m),t),A.f,t,t,new B.o(t,t,t,q,p,t,A.n),t,t,t,t,t,t,t,t)},
$S:221}
C.eNH.prototype={
$1(d){var w=this.a
return w.m(new C.eNG(w,d,this.b,this.c))},
$S:18}
C.eNG.prototype={
$0(){var w,v=this,u=v.a,t=v.b.d,s=v.c
u.ay=A.k.D(u.ay+t.a/s,0,1-u.CW)
w=v.d
u.ch=A.k.D(u.ch+t.b/w,0,1-u.CW*s/w)},
$S:0}
C.eNR.prototype={
$0(){var w=this.a
return w.m(new C.eNQ(w,this.b))},
$S:0}
C.eNQ.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.eN7.prototype={
$0(){var w=this.a.c
w.toString
return B.a5(w,!1).lL()},
$S:0}
C.eOo.prototype={
$2(d,e){var w,v,u,t=null,s=e.b
if(s>=860){w=this.a
v=x.p
return B.A(B.a([new B.a6(Math.min(s*0.4,460),t,B.v(B.a([w.aY0(),B.D(B.av(w.b_X(Math.max(240,e.d-110)),t,t,t),1)],v),A.m,t,A.e,A.j,0,A.p),t),B.D(B.v(B.a([B.D(w.aOH(),1),w.aKX()],v),A.m,t,A.e,A.j,0,A.p),1)],v),A.m,t,A.e,A.j,0,t,t)}u=A.k.D(e.d*0.36,190,360)
s=this.a
return B.v(B.a([s.aY0(),new B.C(A.hI,B.av(s.b_X(u),t,t,t),t),B.D(s.aOH(),1),s.aKX()],x.p),A.m,t,A.e,A.j,0,A.p)},
$S:632}
C.fsn.prototype={
$10$align$style$weight(d,e,f,g,h,i,j,k,l,m){return C.en(k,!1,j,A.aD,"",4280640491,i,l,m,"",h,C.byP(),null,"","",0,!1,"",0,D.be,4280172719,2,d,0,0,"",D.cg,D.cQ,g,e,f)},
$9$align$weight(d,e,f,g,h,i,j,k,l){return this.$10$align$style$weight(d,e,f,g,h,i,j,k,A.bl,l)},
$8$weight(d,e,f,g,h,i,j,k){return this.$10$align$style$weight(d,e,f,g,h,i,j,A.L,A.bl,k)},
$7(d,e,f,g,h,i,j){return this.$10$align$style$weight(d,e,f,g,h,i,j,A.L,A.bl,A.O)},
$S:z+98}
C.fsm.prototype={
$3(d,e,f){var w=this,v=C.byP(),u=w.b?A.H:A.cu,t=w.c?A.cD:A.bl
return C.en(w.d,!1,f,A.aD,"",4280640491,e,t,u,"",0.36,v,null,"","",0,!0,"",0,D.be,4280172719,2,d,0,w.f,w.e,D.cg,D.cQ,0.82,0.09,w.a)},
$S:z+28}
C.cc4.prototype={
$1(d){return B.t(d)},
$S:17}
C.fA4.prototype={
$0(){return this.a},
$S:z+15}
C.fgU.prototype={
$1(d){return d.a.cY(this.a)},
$S:z+30}
C.fgV.prototype={
$2(d,e){return J.ck(e)},
$S:z+31}
C.fA6.prototype={
$0(){return B.a([],x.o)},
$S:z+15}
C.fA9.prototype={
$1(d){return d.a===A.a.i(this.a).toLowerCase()},
$S:z+10}
C.fAa.prototype={
$0(){return A.d.gK(D.vK)},
$S:z+33}
C.fA2.prototype={
$1(d){return d.a},
$S:z+16}
C.fA5.prototype={
$1(d){return d.a},
$S:z+16}
C.fy1.prototype={
$1(d){return A.a.i(B.t(d))},
$S:17}
C.fy2.prototype={
$1(d){return d.length!==0},
$S:3}
C.fy3.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.fsr.prototype={
$0(){return C.cC()},
$S:22}
C.fsu.prototype={
$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var w=this.a.$0(),v=m==null?this.b.e:m,u=this.c,t=u?k:D.cg,s=u?n:0
return C.en(j,l,v,A.aD,"",4280640491,i,q,r,"",h,w,null,u?o:"",p,0,!1,"",0,D.be,4280172719,2,d,s,0,"",t,D.cQ,g,e,f)},
$6(d,e,f,g,h,i){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bg,D.dd,!1,null,0,"","",A.bl,A.a4)},
$7$key(d,e,f,g,h,i,j){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bg,D.dd,!1,null,0,"",j,A.bl,A.a4)},
$8$fx$key(d,e,f,g,h,i,j,k){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bg,D.dd,!1,null,0,j,k,A.bl,A.a4)},
$11$align$anim$delay$fx$key(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,!1,null,l,m,n,A.bl,A.a4)},
$10$align$anim$key$weight(d,e,f,g,h,i,j,k,l,m){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,!1,null,0,"",l,A.bl,m)},
$10$align$color$delay$key(d,e,f,g,h,i,j,k,l,m){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,D.dd,!1,k,l,"",m,A.bl,A.a4)},
$9$anim$key$weight(d,e,f,g,h,i,j,k,l){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bg,j,!1,null,0,"",k,A.bl,l)},
$9$color$delay$key(d,e,f,g,h,i,j,k,l){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bg,D.dd,!1,j,k,"",l,A.bl,A.a4)},
$11$anim$color$fx$key$weight(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bg,j,!1,k,0,l,m,A.bl,n)},
$11$align$anim$key$style$weight(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,!1,null,0,"",l,m,n)},
$11$anim$bullets$color$delay$key(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bg,j,k,l,m,"",n,A.bl,A.a4)},
$S:z+35}
C.fst.prototype={
$9$fx$key$rotation(d,e,f,g,h,i,j,k,l){var w=this.a.$0()
return C.en(A.bg,!1,4279310375,A.aD,"",i,24,A.bl,A.a4,"",h,w,null,this.b?j:"",k,0,!1,"",l,d,i,0,"",0,0,"",D.cg,D.f_,g,e,f)},
$6(d,e,f,g,h,i){return this.$9$fx$key$rotation(d,e,f,g,h,i,"","",0)},
$7$key(d,e,f,g,h,i,j){return this.$9$fx$key$rotation(d,e,f,g,h,i,"",j,0)},
$8$fx$key(d,e,f,g,h,i,j,k){return this.$9$fx$key$rotation(d,e,f,g,h,i,j,k,0)},
$S:z+27}
C.fss.prototype={
$9$anim$delay$fx$key(d,e,f,g,h,i,j,k,l){var w=this.a.$0(),v=this.b,u=v?i:D.cg,t=v?j:0
return C.en(A.bg,!1,4279310375,A.aD,"",4280640491,24,A.bl,A.a4,"",h,w,d,v?k:"",l,0,!1,"",0,D.be,4280172719,2,"",t,0,"",u,D.lk,g,e,f)},
$5(d,e,f,g,h){return this.$9$anim$delay$fx$key(d,e,f,g,h,D.q_,350,"","")},
$8$anim$delay$key(d,e,f,g,h,i,j,k){return this.$9$anim$delay$fx$key(d,e,f,g,h,i,j,"",k)},
$8$anim$fx$key(d,e,f,g,h,i,j,k){return this.$9$anim$delay$fx$key(d,e,f,g,h,i,350,j,k)},
$S:z+37}
C.fsq.prototype={
$1(d){var w=d.x
return w>0&&w<=this.a.length},
$S:z+17}
C.fuS.prototype={
$0(){var w=0,v=B.j(x.e),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.a){s=t.b
r=s.a
s=(r==="bullets"||r==="section")&&s.w.length!==0}else s=!1
w=s?3:5
break
case 3:s=t.b
w=6
return B.b($.hcL.ck(0,A.a.i(s.w).toLowerCase(),new C.fuQ(s)),$async$$0)
case 6:q=e
w=4
break
case 5:q=null
case 4:w=t.c&&t.b.r.length!==0?7:9
break
case 7:s=t.b
w=10
return B.b(t.d.ck(0,s.r,new C.fuR(s)),$async$$0)
case 10:p=e
w=8
break
case 9:p=null
case 8:u=new B.bu(t.e,new B.bmP(p,q),x.e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1681}
C.fuQ.prototype={
$0(){return F.aMq(this.a.w)},
$S:195}
C.fuR.prototype={
$0(){var w=this.a.r,v=B.aJ(w.toLowerCase()," ","_")
return F.bxJ("https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji@main/assets/"+B.hA(2,w,A.c4,!1)+"/3D/"+v+"_3d.png","image/png")},
$S:195}
C.f9I.prototype={
$1(d){return d.a==="bio"},
$S:z+17}
C.f9J.prototype={
$1(d){return d.a},
$S:z+18}
C.f9K.prototype={
$1(d){return d.b},
$S:z+19}
C.fJ_.prototype={
$1(d){return D.fQi},
$S:z+41}
C.eUq.prototype={
$0(){return this.a.x=C.hH1(this.b,this.c.b)},
$S:0}
C.eUr.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.eUo.prototype={
$1(d){var w
if(this.a){w=this.b
if(w==null)w="circle"}else w=d
return w},
$S:399}
C.eUp.prototype={
$1(d){var w
if(this.a)w=d
else{w=this.b
if(w==null)w=""}return w},
$S:399}
C.eUn.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:o=t.b
n=t.a
m=n.c
m.toString
w=3
return B.b(B.bV(A.aB,null,new C.eUi(n,t.c,o,t.d,t.e,t.f),m,!0,!0,o,A.lm,!1,!1,x.N),$async$$0)
case 3:s=e
if(s==null){w=1
break}w=A.a.a0(s,"finale:")?4:5
break
case 4:r=A.a.b0(s,7)
if(r.length===0){n.m(new C.eUj(n))
w=1
break}o=n.c
if(o==null){w=1
break}m=n.w
q=m.d
if(q.length===0){q=n.x
if(q==null)q=""}w=6
return B.b(C.hiu(o,m.cFh(q,r)),$async$$0)
case 6:p=e
if(p!=null&&n.c!=null)n.m(new C.eUk(n,p))
w=1
break
case 5:o=s==="__auto"?null:s
t.r.$1(o)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eUi.prototype={
$1(d){var w,v,u,t,s,r,q=this,p=null,o=new C.eUm(q.b,d),n=x.p,m=B.a([o.$2("__auto",B.p(p,D.b32,A.f,p,p,D.aZ7,p,p,p,p,p,p,p,p))],n),l=q.c,k=l?D.BG:D.BL,j=k.length,i=q.a,h=q.d,g=q.e,f=q.f,e=0
for(;e<j;++e){w=k[e].a
v=g.$1(w)
u=f.$1(w)
if(v.length===0&&u.length===0)v="rounded"
m.push(o.$2(w,new B.a6(64,64,C.fv6(v,i.b1W(h),u),p)))}t=B.lU(1,m,4,10,10,p,A.dQ,!0)
if(!l)return B.bm(!0,new B.C(A9.AQ,t,p),!0,!1,A.af,!0,!0)
s=new C.eUl(i,d)
m=B.aI(d,A.bT,x.w).w
l=B.a([s.$2("","None")],n)
for(e=0;e<32;++e){r=D.Gt[e]
l.push(s.$2(r.a,r.b))}return B.bm(!0,new B.cU(new B.aY(0,1/0,0,m.a.b*0.85),B.cd(B.v(B.a([D.fg2,A.S,t,A.e1,D.eFH,A.at,D.fqv,A.S,B.lU(1.15,l,3,10,10,p,A.dQ,!0)],n),A.F,p,A.e,A.j,0,A.p),A.r,p,A.y,p,A9.AQ,p,p,A.ah),p),!0,!1,A.af,!0,!0)},
$S:28}
C.eUm.prototype={
$2(d,e){var w=null,v=d==="__auto"&&this.a==null||d===this.a,u=B.m(16),t=v?A.b5.j(0.22):A.c.j(0.04),s=v?A.by:A.dp
return B.aE(w,B.p(w,e,A.f,w,w,new B.o(t,w,B.I(s,A.q,v?2:1),u,w,w,A.n),w,w,w,w,A.hw,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eUh(this.b,d),w,w,w,w,w,w,!1,A.a8)},
$S:1682}
C.eUh.prototype={
$0(){B.a5(this.a,!1).N(this.b)
return null},
$S:0}
C.eUl.prototype={
$2(d,e){var w,v=null,u=this.a.w,t=u.a===d,s=B.m(12),r=t?A.bK:A.bF
r=B.I(r,A.q,t?2.5:1)
w=B.m(10)
u=B.D(B.p(v,B.bv(w,d.length===0?B.p(v,D.amy,A.f,A.c.j(0.05),v,v,v,v,v,v,v,v,v,v):B.e0(new C.MR(u.F9(d),!0,!1,v),!0,v),A.aq),A.f,v,v,new B.o(v,v,r,s,v,v,A.n),v,v,v,v,v,v,v,v),1)
return B.aE(v,B.v(B.a([u,A.at,B.d(e,v,1,A.a2,v,v,v,B.l(v,v,t?A.bK:A.ad,v,v,v,v,v,v,v,v,10.5,v,v,A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.j,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.eUg(this.b,d),v,v,v,v,v,v,!1,A.a8)},
$S:133}
C.eUg.prototype={
$0(){B.a5(this.a,!1).N("finale:"+this.b)
return null},
$S:0}
C.eUj.prototype={
$0(){var w=this.a
return w.w=w.w.F9("")},
$S:0}
C.eUk.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.eU6.prototype={
$0(){var w=this.a
w.e=this.b
w.cy=null},
$S:0}
C.eU7.prototype={
$0(){return this.a.cy=J.k(this.b)},
$S:0}
C.eU9.prototype={
$0(){return this.a.cy="Type a little about the presentation first, or attach a document."},
$S:0}
C.eUa.prototype={
$0(){return this.a.cy='You mentioned your logo \u2014 tap "Add your logo" below to upload it, so the AI puts the real one in.'},
$S:0}
C.eUb.prototype={
$0(){var w=this.a
w.ax=!0
w.cy=null
w.ay="Writing your "+w.ch+" slides\u2026"},
$S:0}
C.eUc.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.eU8(w,d))},
$S:2}
C.eU8.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.eUd.prototype={
$0(){var w=this.a
w.ax=!1
w.cy=B.t(this.b)},
$S:0}
C.eUE.prototype={
$0(){return this.a.f.fG()},
$S:0}
C.eUF.prototype={
$0(){var w=this.a
return w.m(new C.eUD(w))},
$S:0}
C.eUD.prototype={
$0(){return this.a.e=null},
$S:0}
C.eUG.prototype={
$0(){var w=this.a
return w.m(new C.eUC(w))},
$S:0}
C.eUC.prototype={
$0(){return this.a.x=null},
$S:0}
C.eUI.prototype={
$1(d){var w=this.a
return w.m(new C.eUB(w,d))},
$S:33}
C.eUB.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.eUJ.prototype={
$1(d){var w=this.a
return w.m(new C.eUA(w,d))},
$S:33}
C.eUA.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.eUK.prototype={
$0(){var w=this.a
return w.m(new C.eUz(w))},
$S:0}
C.eUz.prototype={
$0(){return this.a.y=B.a([],x.s)},
$S:0}
C.eUL.prototype={
$1(d){var w=this.a
return w.m(new C.eUy(w,d))},
$S:33}
C.eUy.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.eUM.prototype={
$1(d){var w=this.a
return w.m(new C.eUx(w,d))},
$S:33}
C.eUx.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.eUN.prototype={
$0(){var w=this.a
return w.m(new C.eUw(w))},
$S:0}
C.eUw.prototype={
$0(){var w=this.a
return w.w=w.w.F9("")},
$S:0}
C.eUO.prototype={
$0(){var w=this.a
return w.m(new C.eUv(w,this.b))},
$S:0}
C.eUv.prototype={
$0(){return this.a.ch=this.b},
$S:0}
C.eUP.prototype={
$2(d,e){var w,v,u=(e.b-16)/3,t=B.a([],x.p)
for(w=this.a,v=0;v<6;++v)t.push(new B.a6(u,null,w.bLU(D.a1W[v]),null))
return B.bZ(A.bB,t,A.bs,8,8)},
$S:159}
C.eUH.prototype={
$1(d){var w=this.a
return w.m(new C.eUu(w,d))},
$S:9}
C.eUu.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.eUe.prototype={
$0(){var w=this.a
return w.m(new C.eUf(w,this.b,this.c))},
$S:0}
C.eUf.prototype={
$0(){var w=this.c,v=this.a.cx
return this.b?v.W(0,w):v.L(0,w)},
$S:0}
C.eUt.prototype={
$0(){var w=this.a
return w.m(new C.eUs(w,this.b))},
$S:0}
C.eUs.prototype={
$0(){return this.a.CW=this.b},
$S:0}
C.fIZ.prototype={
$1(d){return new C.a_E(this.a,this.b,null)},
$S:z+42}
C.eU_.prototype={
$0(){return this.a.r="Type what you want changed or added."},
$S:0}
C.eU0.prototype={
$0(){var w=this.a
w.e=!0
w.r=null
w.f="Making your changes\u2026"},
$S:0}
C.eU1.prototype={
$0(){var w=this.a
w.e=!1
w.r=this.b===D.aET?"The text already fits inside its frame.":"The text is already at its limit."},
$S:0}
C.eU2.prototype={
$0(){var w=this.a
w.e=!1
w.r="Nothing to bring back. Changes are kept for 20 minutes."},
$S:0}
C.eU3.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.eTZ(w,d))},
$S:2}
C.eTZ.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eU4.prototype={
$0(){var w=this.a
w.e=!1
w.r=B.t(this.b)},
$S:0}
C.eU5.prototype={
$0(){var w=this.b
if(A.a.cb(w,"\u2026"))w=A.a.ap(w,0,w.length-1)
this.a.d.bN(0,new B.bb(w,B.h8(A.bu,w.length),A.aN))},
$S:0}
C.fg9.prototype={
$1(d){return d.a===this.a},
$S:207}
C.ea7.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=p.gawd(),n=o.x
n===$&&B.c()
w=B.m(16)
v=p.a.c
u=v?D.cLj:D.d0b
t=D.x5.j(v?1:0.55)
v=p.a.c
t=B.I(t,A.q,v?1.8:1.2)
s=D.x5.j(v?0.35+0.15*o.x:0.12)
v=B.a([new B.ac(0,A.G,s,A.J,p.a.c?16:8)],x.V)
s=B.m(15)
n=B.bY(0,B.b3(q,q,q,new C.bg6(n*6.283,q),A.au),0,0,0)
o=o.x
o=B.bY(0,B.bNj(B.eC(A.A,0.5,B.p(q,q,A.f,q,q,new B.o(q,q,q,q,q,new B.a7(A.a3,A.a7,A.x,B.a([A.K,D.b9H.j(0.28),A.K],x.O),q,q),A.n),q,q,q,q,q,q,q,q),q),!0,new B.u(o*2.4-1.2,0)),0,0,0)
r=x.p
return B.p(q,B.bv(s,new B.an(A.W,q,A.aa,A.r,B.a([n,o,B.av(B.v(B.a([B.W(p.a.c?A.ee:A.lM,D.x5,q,q,q,20),A.at,B.f2(A.A,B.nH(A.jp,D.f9O,new C.ea6()),A.f,A.eg)],r),A.m,q,A.e,A.Q,0,A.p),q,q,q),B.ao(q,B.p(q,D.f6v,A.f,q,q,new B.o(D.x5,q,q,B.m(6),q,q,A.n),q,q,q,q,L.ahu,q,q,q),q,q,q,4,4,q)],r),q),A.aq),A.f,q,q,new B.o(q,q,t,w,v,new B.a7(A.ax,A.aC,A.x,u,q,q),A.n),q,64,q,q,q,q,q,q)},
$S:95}
C.ea6.prototype={
$1(d){return D.bS5.aw(0,d)},
$S:66}
C.fAb.prototype={
$1(d){return d.a===this.a},
$S:z+6}
C.fAc.prototype={
$1(d){var w=d.a
return A.a.i(w).length!==0&&w!==d.b},
$S:207}
C.fAd.prototype={
$2(d,e){return A.o.aL(e.a.length,d.a.length)},
$S:1683}
C.fAe.prototype={
$1(d){var w,v,u,t,s,r,q,p
for(w=this.a,v=w.length,u=d,t=0;t<w.length;w.length===v||(0,B.L)(w),++t){s=w[t]
r=s.a
q=s.b
u=B.aJ(u,r,q)
p=r.toUpperCase()
if(p!==r)u=B.aJ(u,p,q.toUpperCase())}return u},
$S:14}
C.fA7.prototype={
$1(d){return d.a},
$S:z+18}
C.fA8.prototype={
$1(d){return d.b},
$S:z+19}
C.fIc.prototype={
$1(d){return new C.Z2(this.a,this.b,null)},
$S:z+44}
C.dg8.prototype={
$0(){var w=this.a
w.f=!0
w.r=null},
$S:0}
C.dg9.prototype={
$1(d){return d.a===this.a.gahp()},
$S:z+10}
C.dga.prototype={
$0(){var w=this.a
w.f=!1
w.r=J.k(this.b)},
$S:0}
C.dgd.prototype={
$0(){B.a5(this.a,!1).N(null)
return null},
$S:0}
C.dge.prototype={
$0(){var w=this.a
return w.m(new C.dgc(w,this.b))},
$S:0}
C.dgc.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.dgf.prototype={
$1(d){var w=this.a
return w.m(new C.dgb(w,d))},
$S:9}
C.dgb.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.ea5.prototype={
$1$2(d,e,f){var w=B.bl(d,!0,f)
A.d.fq(w,this.a)
return B.dc(w,0,B.dJ(e,"count",x.S),B.T(w).c).dF(0)},
$2(d,e){return this.$1$2(d,e,x.z)},
$S:1684}
C.f6d.prototype={
$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,n,o,p){return C.en(A.bg,!1,4279310375,A.aD,"",i,24,A.bl,A.a4,"",h,this.a.$0(),null,k,j,0,!1,"",n,d,o,p,"",m,0,"",l,D.f_,g,e,f)},
$8(d,e,f,g,h,i,j,k){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,D.cg,0,0,0,0)},
$12$anim$delay$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,n,o){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,0,n,o)},
$10$anim$delay(d,e,f,g,h,i,j,k,l,m){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,0,0,0)},
$S:z+45}
C.f6f.prototype={
$9(d,e,f,g,h,i,j,k,l){return C.en(A.L,!1,this.b.d,A.aD,"",4280640491,i,A.bl,A.cN,"",h,this.a.$0(),null,k,j,0,!1,"",0,D.be,4280172719,2,d,l,0,"",D.mv,D.cQ,g,e,f)},
$S:z+46}
C.f6e.prototype={
$5$size(d,e,f,g,h){var w,v=this,u=v.b,t=u.c
u=u.we(0,"twinkle")
w=t===D.be?0.785:0
return v.a.$13$anim$delay$rotation$stroke$strokeWidth(t,d-h/2,e-h*0.89,h,h*1.78,v.c,f,u,D.mv,g,w,v.d.d,1.2)},
$4(d,e,f,g){return this.$5$size(d,e,f,g,0.022)},
$S:z+47}
C.f6c.prototype={
$1(d){var w=d.fx
return w==="sub"||w==="body"},
$S:z+4}
C.fty.prototype={
$1(d){return d.a===this.a},
$S:z+11}
C.ftz.prototype={
$0(){return A.d.gK(D.GC)},
$S:z+49}
C.ftA.prototype={
$1(d){return d.a===this.a},
$S:z+11}
C.f8d.prototype={
$1(d){return!(A.a.a0(d.db,"__design__")||A.a.a0(d.a,"design_"))},
$S:z+4}
C.fzE.prototype={
$1(d){var w=2450411,v=4281908728
C.du(d,C.dv(4280171146,1,0,D.be,w,0,0.52,0,0))
C.du(d,C.dv(v,1,0,D.be,w,0,0.04,0.48,0))
C.du(d,C.dv(4294047225,0.38,0,D.be,w,0,0.48,0.52,0.62))
C.du(d,C.dv(v,0.006,0,D.fq,v,3,0.32,0.08,0.14))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fzF.prototype={
$1(d){var w=2450411,v=4280640491,u=4291548641
C.du(d,C.dv(4280172719,0.8,0,D.be,w,0,0.36,0.58,0.1))
C.du(d,C.dv(v,0.64,0,D.be,w,0,0.28,0.64,0.18))
C.du(d,C.dv(4282090230,0.44,0,D.be,w,0,0.2,0.7,0.28))
C.du(d,C.dv(v,0.006,0,D.fq,v,3,0.22,0.08,0.12))
C.du(d,C.dv(u,0.004,0,D.fq,u,2,0.38,0.08,0.18))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fzG.prototype={
$1(d){var w=2450411,v=4279548070
C.du(d,C.dv(4279080072,0.11,0,D.be,w,0,1,0,0))
C.du(d,C.dv(4279310375,0.11,0,D.be,w,0,1,0,0.89))
C.du(d,C.dv(856528008,0.72,0,D.jE,w,0,0.28,0.72,0.14))
C.du(d,C.dv(1426953352,0.2,0,D.jE,w,0,0.2,0.78,0.22))
C.du(d,C.dv(v,0.004,0,D.fq,v,2,1,0,0.105))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fzR.prototype={
$1(d){var w=2450411
C.du(d,C.dv(4279203438,0.55,0,D.jE,w,0,0.5,0.55,-0.05))
C.du(d,C.dv(4280171146,0.5,0,D.jE,w,0,0.45,0.62,0.35))
C.du(d,C.dv(4280640491,0.4,0.3,D.jD,w,0,0.35,0.68,0.55))
C.du(d,C.dv(571438702,0.12,0,D.be,w,0,0.12,0.08,0.08))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fzW.prototype={
$1(d){var w=4280472558
C.du(d,C.dv(4279310375,0.75,-0.4,D.jD,2450411,0,0.75,-0.15,0.35))
C.du(d,C.dv(w,0.55,0,D.be,2450411,0,0.06,0.42,0.38))
C.du(d,C.dv(w,0.006,0,D.fq,w,3,0.35,0.08,0.08))
C.du(d,C.dv(2282478,0.12,0,D.be,w,2,0.2,0.75,0.82))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fzX.prototype={
$1(d){var w=2450411,v=4280640491
C.du(d,C.dv(3423541034,0.48,0,D.be,w,0,1,0,0))
C.du(d,C.dv(v,0.12,-0.08,D.jE,w,0,1.1,-0.05,0.38))
C.du(d,C.dv(858088427,0.35,0,D.be,w,0,0.42,0.55,0.05))
C.du(d,C.dv(v,0.006,0,D.fq,v,3,0.25,0.08,0.52))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fzY.prototype={
$1(d){var w,v,u,t,s=4280171146
for(w=0;w<4;++w){v=D.cKn[w]
u=Date.now()
t=$.iX
$.iX=t+1
v=new C.eI("design_"+(""+1000*u+"_"+t),D.f_,0.04+w*0.235,0.72,0.21,0.22,"",24,A.a4,A.bl,A.aD,4279310375,A.bg,null,D.be,v,4294967295,2,0,!1,"",0,D.cg,0,"","","","","",!1,0)
u=$.JR
v.db="__design__:"+(u.length===0?"layer":u)
A.d.cj(d.z,0,v)}C.du(d,C.dv(s,0.006,0,D.fq,s,3,0.3,0.04,0.08))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fzZ.prototype={
$1(d){var w,v,u,t,s=4280172719
for(w=0;w<4;++w){v=B.aq(A.ma,A.dy,w/3).l()
u=Date.now()
t=$.iX
$.iX=t+1
v=new C.eI("design_"+(""+1000*u+"_"+t),D.f_,0.58+w*0.08,0.15+w*0.05,0.32,0.7,"",24,A.a4,A.bl,A.aD,4279310375,A.bg,null,D.Ck,v,2450411,0,0,!1,"",0,D.cg,0,"","","","","",!1,0)
u=$.JR
v.db="__design__:"+(u.length===0?"layer":u)
A.d.cj(d.z,0,v)}C.du(d,C.dv(s,0.006,0,D.fq,s,3,0.4,0.06,0.1))
d.e=4294967295
d.f=4292602622},
$S:z+1}
C.fA_.prototype={
$1(d){var w=4294967295
C.du(d,C.dv(4280640491,1,0,D.be,2450411,0,0.42,0,0))
C.du(d,C.dv(4280110808,1.1,1.57,D.jD,2450411,0,0.18,0.35,-0.05))
C.du(d,C.dv(w,0.006,0,D.fq,w,2,0.25,0.08,0.85))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fA0.prototype={
$1(d){var w=4278982953,v=2450411,u=4282090230
C.du(d,C.dv(w,0.1,0,D.be,v,0,1,0,0))
C.du(d,C.dv(u,0.012,0,D.be,v,0,1,0,0.1))
C.du(d,C.dv(u,0.006,0,D.fq,u,3,0.42,0.06,0.14))
C.du(d,C.dv(403446057,0.68,0,D.jE,v,0,0.22,0.72,0.18))
C.du(d,C.dv(w,0.1,0,D.be,v,0,1,0,0.9))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fA1.prototype={
$1(d){var w=4278630100
C.du(d,C.dv(4279310375,1.2,0.15,D.jE,2450411,0,0.55,-0.2,-0.1))
C.du(d,C.dv(w,1.1,0.15,D.be,2450411,0,0.08,0.15,-0.05))
C.du(d,C.dv(1120295,0.18,0,D.be,w,3,0.38,0.55,0.75))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fzH.prototype={
$1(d){var w=4292617766
C.du(d,C.dv(4282714634,0.65,-0.2,D.jD,2450411,0,0.65,-0.1,0.45))
C.du(d,C.dv(w,0.5,-0.15,D.jD,2450411,0,0.5,0.05,0.55))
C.du(d,C.dv(w,0.006,0,D.fq,w,3,0.38,0.55,0.08))
d.e=4294967295
d.f=4294898418},
$S:z+1}
C.fzI.prototype={
$1(d){var w=2450411
C.du(d,C.dv(4278413729,0.35,3.14,D.jD,w,0,0.45,-0.05,0.7))
C.du(d,C.dv(4278355143,0.3,3.14,D.jD,w,0,0.4,0.25,0.75))
C.du(d,C.dv(4279150057,0.32,3.14,D.jD,w,0,0.5,0.55,0.72))
C.du(d,C.dv(863884284,0.22,0,D.eI,w,0,0.22,0.08,0.12))
d.e=4293982719
d.f=4294967295},
$S:z+1}
C.fzJ.prototype={
$1(d){var w=4279310375,v=2450411,u=4280472558
C.du(d,C.dv(w,0.14,0,D.be,v,0,0.14,0.02,0.02))
C.du(d,C.dv(2282478,0.14,0,D.be,u,3,0.14,0.84,0.02))
C.du(d,C.dv(w,0.28,0,D.jE,v,0,0.35,-0.08,0.78))
C.du(d,C.dv(u,0.22,0.5,D.jD,v,0,0.3,0.72,0.78))
C.du(d,C.dv(w,0.006,0,D.fq,w,3,0.2,0.08,0.22))
d.e=4294967295
d.f=null},
$S:z+1}
C.fzK.prototype={
$1(d){var w=4293571336,v=1156231944
C.du(d,C.dv(1841431,0.92,0,D.be,w,3,0.92,0.04,0.04))
C.du(d,C.dv(v,0.15,0,D.jD,2450411,0,0.15,0.02,0.02))
C.du(d,C.dv(v,0.15,3.14,D.jD,2450411,0,0.15,0.83,0.83))
C.du(d,C.dv(w,0.004,0,D.fq,w,2,0.7,0.15,0.88))
d.e=4280031511
d.f=4282523654},
$S:z+1}
C.fzL.prototype={
$1(d){var w=4279080072,v=2450411
C.du(d,C.dv(w,0.14,0,D.kT,v,0,0.14,0.68,0.18))
C.du(d,C.dv(4279548070,0.14,0,D.kT,v,0,0.14,0.78,0.28))
C.du(d,C.dv(4281193663,0.14,0,D.kT,v,0,0.14,0.68,0.38))
C.du(d,C.dv(4284410580,0.14,0,D.kT,v,0,0.14,0.78,0.48))
C.du(d,C.dv(4279203438,0.14,0,D.kT,v,0,0.14,0.68,0.58))
C.du(d,C.dv(w,0.006,0,D.fq,w,3,0.22,0.06,0.1))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fzM.prototype={
$1(d){var w=2450411,v=4280640491
C.du(d,C.dv(3708753706,0.42,0,D.be,w,0,1,0,0))
C.du(d,C.dv(v,0.06,-0.05,D.jE,w,0,1,0,0.38))
C.du(d,C.dv(859356664,0.25,0,D.eI,w,0,0.25,0.7,0.08))
C.du(d,C.dv(v,0.006,0,D.fq,v,3,0.3,0.08,0.48))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fzN.prototype={
$1(d){var w,v,u,t,s=4280640491
for(w=0;w<4;++w){v=B.aq(A.ma,A.dy,w/3).l()
u=Date.now()
t=$.iX
$.iX=t+1
v=new C.eI("design_"+(""+1000*u+"_"+t),D.f_,0.06+w*0.23,0.78,0.2,0.14,"",24,A.a4,A.bl,A.aD,4279310375,A.bg,null,D.Ck,v,2450411,0,0,!1,"",0,D.cg,0,"","","","","",!1,0)
u=$.JR
v.db="__design__:"+(u.length===0?"layer":u)
A.d.cj(d.z,0,v)}C.du(d,C.dv(4280172719,0.08,0,D.be,2450411,0,1,0,0))
C.du(d,C.dv(s,0.006,0,D.fq,s,3,0.35,0.06,0.14))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fzO.prototype={
$1(d){var w,v,u,t=4291548641,s=4279310375
for(w=1;w<6;++w){v=Date.now()
u=$.iX
$.iX=u+1
u=new C.eI("design_"+(""+1000*v+"_"+u),D.f_,0.08,0.15+w*0.12,0.55,0.002,"",24,A.a4,A.bl,A.aD,s,A.bg,null,D.fq,t,t,0,0,!1,"",0,D.cg,0,"","","","","",!1,0)
v=$.JR
u.db="__design__:"+(v.length===0?"layer":v)
A.d.cj(d.z,0,u)}C.du(d,C.dv(s,0.75,0,D.be,2450411,0,0.22,0.72,0.1))
C.du(d,C.dv(872415231,0.16,0,D.be,2450411,0,0.16,0.75,0.15))
C.du(d,C.dv(s,0.006,0,D.fq,s,3,0.2,0.08,0.1))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fzP.prototype={
$1(d){var w=4282865001,v=2450411,u=4284773515
C.du(d,C.dv(4674921,0.9,0,D.be,4287931320,2,0.9,0.05,0.05))
C.du(d,C.dv(w,0.08,0,D.be,v,0,0.08,0.03,0.03))
C.du(d,C.dv(u,0.08,0,D.be,v,0,0.08,0.89,0.03))
C.du(d,C.dv(u,0.08,0,D.be,v,0,0.08,0.03,0.89))
C.du(d,C.dv(w,0.08,0,D.be,v,0,0.08,0.89,0.89))
C.du(d,C.dv(w,0.004,0,D.fq,w,2,0.25,0.12,0.12))
d.e=4294507260
d.f=4293060848},
$S:z+1}
C.fzQ.prototype={
$1(d){var w,v,u,t,s,r=4279310375,q=2450411
for(w=0;w<3;++w){v=w*0.24
u=Date.now()
t=$.iX
$.iX=t+1
t=new C.eI("design_"+(""+1000*u+"_"+t),D.f_,0.55,0.14+v,0.38,0.18,"",24,A.a4,A.bl,A.aD,r,A.bg,null,D.be,4294967295,4280640491,2,0,!1,"",0,D.cg,0,"","","","","",!1,0)
u=$.JR
t.db="__design__:"+(u.length===0?"layer":u)
A.d.cj(d.z,0,t)
u=B.aq(A.dq,A.cs,w/2).l()
t=Date.now()
s=$.iX
$.iX=s+1
u=new C.eI("design_"+(""+1000*t+"_"+s),D.f_,0.57,0.16+v,0.06,0.14,"",24,A.a4,A.bl,A.aD,r,A.bg,null,D.be,u,q,0,0,!1,"",0,D.cg,0,"","","","","",!1,0)
v=$.JR
u.db="__design__:"+(v.length===0?"layer":v)
A.d.cj(d.z,0,u)}C.du(d,C.dv(4280171146,1,0,D.be,q,0,0.48,0,0))
C.du(d,C.dv(4280172719,1.1,1.57,D.jD,q,0,0.12,0.42,-0.05))
d.e=4294967295
d.f=4292602622},
$S:z+1}
C.fzS.prototype={
$1(d){var w=2450411
C.du(d,C.dv(870995980,0.55,0.45,D.jE,w,0,0.55,-0.12,-0.08))
C.du(d,C.dv(856996006,0.45,0.45,D.jE,w,0,0.45,0.62,-0.05))
C.du(d,C.dv(16777215,0.38,0.45,D.jE,4293548044,5,0.38,0.52,0.12))
C.du(d,C.dv(585783308,0.3,0.45,D.jE,w,0,0.3,0.56,0.16))
C.du(d,C.dv(4279548070,0.06,0,D.be,w,0,0.16,0.38,0.04))
C.du(d,C.dv(1156208652,0.28,0,D.eI,w,0,0.28,0.66,0.52))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fzT.prototype={
$1(d){var w=4279080072,v=2450411,u=4294047225,t=4291548641,s=4293548044
C.du(d,C.dv(w,1,0,D.be,v,0,0.07,0,0))
C.du(d,C.dv(u,0.1,0,D.be,t,1,0.46,0.48,0.14))
C.du(d,C.dv(u,0.1,0,D.be,t,1,0.46,0.48,0.28))
C.du(d,C.dv(u,0.1,0,D.be,t,1,0.46,0.48,0.42))
C.du(d,C.dv(s,0.08,0,D.eI,v,0,0.08,0.5,0.16))
C.du(d,C.dv(w,0.08,0,D.eI,v,0,0.08,0.5,0.3))
C.du(d,C.dv(4279548070,0.08,0,D.eI,v,0,0.08,0.5,0.44))
C.du(d,C.dv(16777215,0.32,0.45,D.jE,s,4,0.32,0.1,0.18))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fzU.prototype={
$1(d){var w,v,u,t=4279548070,s=4293548044,r=4279179050
C.du(d,C.dv(4294047225,0.08,0,D.be,t,2,0.1,0.02,0.06))
C.du(d,C.dv(s,0.42,0,D.be,2450411,0,0.36,0.58,0.18))
C.du(d,C.dv(872415231,0.12,0,D.be,2450411,0,0.28,0.62,0.24))
C.du(d,C.dv(16777215,0.28,0,D.eI,s,4,0.32,0,0.72))
C.du(d,C.dv(r,0.006,0,D.fq,r,3,0.42,0.08,0.22))
for(w=0;w<3;++w){v=Date.now()
u=$.iX
$.iX=u+1
u=new C.eI("design_"+(""+1000*v+"_"+u),D.f_,0.08,0.58+w*0.1,0.04,0.04,"",24,A.a4,A.bl,A.aD,4279310375,A.bg,null,D.eI,16777215,t,2,0,!1,"",0,D.cg,0,"","","","","",!1,0)
v=$.JR
u.db="__design__:"+(v.length===0?"layer":v)
A.d.cj(d.z,0,u)}d.e=4294967295
d.f=4294965229},
$S:z+1}
C.fzV.prototype={
$1(d){var w=2450411,v=4279548070
C.du(d,C.dv(3423541034,0.55,0,D.be,w,0,1,0,0))
C.du(d,C.dv(4009754623,0.56,0.45,D.jE,w,0,0.56,0.22,0.18))
C.du(d,C.dv(3439329279,0.44,0.45,D.jE,w,0,0.44,0.28,0.24))
C.du(d,C.dv(v,0.07,0,D.be,w,0,0.22,0.34,0.62))
C.du(d,C.dv(v,1,0,D.be,w,0,0.07,0,0))
d.e=4280166715
d.f=4279179050},
$S:z+1}
C.fro.prototype={
$1(d){return d.a===this.a},
$S:z+20}
C.frp.prototype={
$0(){return A.d.gK($.bCt())},
$S:z+52}
C.ffE.prototype={
$1(d){var w=A.a.i(d)
if(w.length===0)return""
return A.a.a0(w,"\u2022")?w:"\u2022 "+w},
$S:14}
C.ffD.prototype={
$1(d){return C.hOg(d,this.a,this.b)},
$S:z+53}
C.fAk.prototype={
$1(d){var w=this,v=w.a,u=w.b,t=B.vt(1.0375,1.01875,1)
return new B.fO(v,u,new C.aRm(B.hE3(A.uG,C.hOj(w.c,w.d,v,u),t)))},
$S:342}
C.dRy.prototype={
$1(d){var w=d.a/1e6
this.a.d.sp(0,w)
return w},
$S:8}
C.dRx.prototype={
$2(d,e){var w=null,v=Math.min(e.b,e.d),u=this.b,t=B.c_(w,new B.o(w,w,w,w,w,new B.bR(A.Jq,1.2,A.x,w,0,u.d,w,w),A.n),A.bd),s=this.a,r=s.d,q=s.a.d?0.45:1
return B.jt(new B.an(A.W,w,A.b_,A.r,B.a([t,new B.es(B.b3(w,w,w,new C.bd0(u.a,r,q,r),A.au),w),B.av(new B.kb(r,new C.dRw(s,v,this.c,u),w,w,x.cl),w,w,w)],x.p),w),A.r,w)},
$S:466}
C.dRw.prototype={
$3(d,e,f){var w,v,u,t,s=this,r=null,q=A.ev.av(0,A.k.D(e/1.4,0,1)),p=A.k.D(e/0.9,0,1),o=A.k.D((e-0.8)/0.9,0,1),n=Math.sin(e*1.6),m=s.b,l=m*0.08,k=x.p,j=B.a([],k),i=s.c
if(i!=null){w=m*0.22
v=m*0.008
u=s.d.e
t=B.B(u,x.bz)
t.push(A.d.gK(u))
u=B.a([new B.ac(0,A.G,u[1].j(0.55),A.J,l)],x.V)
A.d.v(j,B.a([B.p(r,B.hS(B.fL(i,A.A,r,r,A.co,A.bQ,!0,r,!1,r,r),A.aq),A.f,r,r,new B.o(r,r,r,r,u,new B.fS(A.A,0,6.283185307179586,A.x,t,r,new B.mg(e*0.8)),A.a6),r,w,r,r,new B.Q(v,v,v,v),r,r,w),new B.a6(r,m*0.04,r,r)],k))}i=s.d.e
w=s.a
v=A.a.i(w.a.c.b)
u=v.length
if(u===0)v="NGMY"
u=u>12?0.1:0.17
t=m*0.05
j.push(new C.bpv(i,e,B.d(v,r,r,r,r,r,r,B.l(r,r,A.c,r,r,r,r,r,r,r,r,m*u,r,r,A.u,r,1.05,!0,r,m*0.012,r,r,r,B.a([new B.cP(i[1].j(0.6),A.J,t)],x.r),r,r),A.L,r,r),r))
j.push(new B.a6(r,m*0.025,r,r))
u=Math.max(1.5,m*0.004)
j.push(B.db(B.dV(B.v(B.a([B.p(r,r,A.f,r,r,new B.o(r,r,r,r,r,new B.a7(A.a3,A.a7,A.x,B.a([A.K,i[1],A.K],x.O),r,r),A.n),r,u,r,r,r,r,r,m*0.22),new B.a6(r,m*0.022,r,r),B.d(w.a.c.gaJv(),r,r,r,r,r,r,B.l(r,r,A.c.j(0.92),r,r,r,r,r,r,r,r,t,r,r,A.a4,r,r,!0,r,m*0.003,r,r,r,r,r,r),A.L,r,r)],k),A.m,r,A.e,A.Q,0,A.p),new B.u(0,(1-o)*m*0.03)),o))
return B.db(B.ea(A.A,new B.C(new B.Q(l,0,l,0),B.v(j,A.m,r,A.e,A.Q,0,A.p),r),(0.6+0.4*q)*(1+n*0.012),r,r),p)},
$S:102}
C.eTd.prototype={
$1(d){var w=this.b
return new B.a7(A.ax,A.aC,A.x,this.a.c,B.a([0,A.k.D(w-0.1,0,1),A.k.D(w,0,1),A.k.D(w+0.1,0,1),1],x.x),null).aw(0,d)},
$S:66}
C.c6E.prototype={
$4$child$label$onTap$selected(d,e,f,g){var w,v=null,u=B.m(14),t=g?A.bK:A.bF
t=B.I(t,A.q,g?2.5:1)
w=g?B.a([new B.ac(0,A.G,A.hE.j(0.4),A.J,14)],x.V):v
w=B.dg(v,B.bv(B.m(12),d,A.aq),v,v,A.bc,new B.o(v,v,t,u,w,v,A.n),A.eE,v,72,v,v,v,v,v)
return B.aE(v,new B.a6(112,v,B.v(B.a([w,A.fZ,B.d(e,v,1,A.a2,v,v,v,B.l(v,v,g?A.bK:A.ad,v,v,v,v,v,v,v,v,11,v,v,A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.j,0,A.p),v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,f,v,v,v,v,v,v,!1,A.a8)},
$S:1685}
C.c6F.prototype={
$0(){var w=this.a
return w.d.$1(w.c.F9(""))},
$S:0}
C.c6G.prototype={
$1(d){var w=this.a,v=w.c,u=d.a
return this.b.$4$child$label$onTap$selected(B.e0(new C.MR(v.F9(u),!0,!1,null),!0,null),d.b,new C.c6H(w,this.c,d),v.a===u)},
$S:z+54}
C.c6H.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(C.hiu(u.b,t.c.F9(u.c.a)),$async$$0)
case 2:s=e
if(s!=null)t.d.$1(s)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fGC.prototype={
$1(d){return new C.YB(this.a,null)},
$S:z+55}
C.d5n.prototype={
$0(){var w=this.a
w.d=w.gvl().b9M("data:"+this.b+";base64,"+A.cS.gcv().aJ(this.c));++w.r},
$S:0}
C.d5s.prototype={
$0(){B.a5(this.a,!1).N(null)
return null},
$S:0}
C.d5t.prototype={
$0(){var w=this.a
return w.m(new C.d5r(w))},
$S:0}
C.d5r.prototype={
$0(){return this.a.r++},
$S:0}
C.d5u.prototype={
$1(d){var w=this.a
return w.m(new C.d5q(w,d))},
$S:2}
C.d5q.prototype={
$0(){var w=this.a
return w.d=w.gvl().aCt(this.b)},
$S:0}
C.d5v.prototype={
$0(){var w=this.a
return w.m(new C.d5p(w))},
$S:0}
C.d5p.prototype={
$0(){var w=this.a
return w.d=w.gvl().b9M("")},
$S:0}
C.d5w.prototype={
$1(d){var w=this.a
return w.m(new C.d5o(w,d))},
$S:2}
C.d5o.prototype={
$0(){var w=this.a
return w.d=w.gvl().b9T(this.b)},
$S:0}
C.d5x.prototype={
$0(){var w=this.a
w=w.gvl().b9T(w.gawe().a.a)
B.a5(this.b,!1).N(w)
return null},
$S:0}
C.fGB.prototype={
$1(d){var w={}
w.a=this.a
return new B.e_(new C.fGA(w),null)},
$S:20}
C.fGA.prototype={
$2(d,e){var w=null,v=this.a
return B.p(w,B.bm(!0,new B.cU(new B.aY(0,1/0,0,B.aI(d,A.bT,x.w).w.a.b*0.85),B.cd(B.v(B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.b2,w,w,B.m(9),w,w,A.n),w,4,w,w,w,w,w,40),w,w,w),A.aA,D.fnG,A.at,D.fnW,A.aA,new C.aYB(v.a,new C.fGz(v,e,d),!0,w)],x.p),A.F,w,A.e,A.Q,0,A.p),A.r,w,A.y,w,w,w,w,A.ah),w),!0,!1,A.af,!0,!1),A.f,w,w,D.aZF,w,w,w,w,A.LI,w,w,w)},
$S:193}
C.fGz.prototype={
$1(d){this.b.$1(new C.fGy(this.a,d))
B.a5(this.c,!1).N(d)},
$S:z+56}
C.fGy.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.fIY.prototype={
$1(d){return D.fLG},
$S:z+57}
C.dc8.prototype={
$0(){B.a5(this.a,!1).N(null)
return null},
$S:0}
C.dc9.prototype={
$0(){var w=this.a.c
w.toString
B.a5(w,!1).N(this.b)
return null},
$S:0}
C.dca.prototype={
$0(){var w=this.a,v=A.a.i(w.d.a.a)
if(v.length!==0){w=w.c
w.toString
B.a5(w,!1).N(v)}},
$S:0}
C.fx_.prototype={
$1(d){var w=this.b
return new B.a7(A.ax,A.aC,A.x,B.a([A.K,B.aq(this.a,A.c,0.75).j(0.9),A.K],x.O),B.a([A.k.D(w-0.12,0,1),A.k.D(w,0,1),A.k.D(w+0.12,0,1)],x.x),null).aw(0,d)},
$S:66}
C.d54.prototype={
$3(d,e,f){var w,v=this,u=new B.aQ($.X().r,A.ap,null,null,B.a([],x.v)),t=d.a,s=v.b,r=e*s,q=d.b,p=f*s,o=q+p*0.12
u.E(new B.b5(t+r*1.2,o))
u.E(new B.cS(t+r*0.25,o,t+r*0.18,q+p*0.5))
w=t+r*0.12
u.E(new B.cS(w,q+p,w,q+p*1.2))
u.E(new B.CH(B.bU(new B.u(t+r*0.42,q+p*0.42),s*0.14),0,5.026548245743669))
s=v.c
s.aO(u,v.d)
s.aO(u,v.e)
p=B.M()
p.r=B.aq(v.a.d,A.c,0.6).gp(0)
s.ai(new B.u(w,o),2.2,p)},
$S:668}
C.fx3.prototype={
$2(d,e){return A.k.aL(d.c,e.c)},
$S:z+58}
C.fpp.prototype={
$1(d){return d.w==="marriage_agreement"},
$S:z+2}
C.fpq.prototype={
$1(d){var w=null,v=this.a
return B.bm(!0,new B.C(E.xr,B.v(B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.b2,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bw,D.f6L,A.P,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aP,B.dp(D.G9,B.d('Endelea na "'+A.d.gK(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fpn(d),B.bk(A.bY,w,w,w,A.c,w,A.cf,w,w,w,w,w)),A.S,B.eB(A.nW,D.Tk,new C.fpo(d),B.de(w,w,w,w,w,w,w,w,w,A.ad,w,w,A.cf,w,w,Q.ww,w,w,w,w))],x.p),A.aj,w,A.e,A.Q,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:28}
C.fpn.prototype={
$0(){B.a5(this.a,!1).N("continue")
return null},
$S:0}
C.fpo.prototype={
$0(){B.a5(this.a,!1).N("new")
return null},
$S:0}
C.cc2.prototype={
$1(d){return d.hC()},
$S:z+59}
C.cc3.prototype={
$1(d){return d.ae()},
$S:z+60}
C.cc1.prototype={
$1(b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=null,b2=B.a1(b5,x.N,x.z),b3=B.aN(b2.h(0,"fontWeight")),b4=b3==null?b1:A.k.O(b3)
if(b4==null)b4=A.a4.gdI(0)
b3=B.aN(b2.h(0,"fontStyle"))
w=b3==null?b1:A.k.O(b3)
if(w==null)w=0
b3=B.aN(b2.h(0,"align"))
v=b3==null?b1:A.k.O(b3)
if(v==null)v=0
b3=b2.h(0,"id")
b3=J.k(b3==null?"":b3)
u=C.hK7(b2.h(0,"type"))
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
n=A.ax8[A.o.D(b4,0,8)]
m=D.cN8[A.o.D(w,0,1)]
l=C.hNJ(b2.h(0,"decoration"))
k=B.aN(b2.h(0,"color"))
k=k==null?b1:A.k.O(k)
if(k==null)k=4279310375
j=A.atW[A.o.D(v,0,5)]
i=b2.h(0,"imageRef")
i=i==null?b1:J.k(i)
h=C.hQv(b2.h(0,"shape"))
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
a0=J.z(b2.h(0,"bulletList"),!0)
a1=b2.h(0,"fileName")
a1=J.k(a1==null?"":a1)
a2=B.aN(b2.h(0,"pdfPage"))
a2=a2==null?b1:A.k.O(a2)
if(a2==null)a2=0
a3=C.hdQ(b2.h(0,"textTransition"))
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
b0=J.z(b2.h(0,"rich"),!0)
b2=B.aN(b2.h(0,"textBg"))
b2=b2==null?b1:A.k.O(b2)
return C.en(j,a0,k,l,a1,g,o,m,n,a7,q,b3,i,a6,a5,a2,b0,a8,d,h,f,e,p,a4,b2==null?0:b2,a9,a3,u,r,t,s)},
$S:z+61}
C.cbS.prototype={
$1(d){return d.hC()},
$S:z+62}
C.cbT.prototype={
$1(d){return d.ae()},
$S:z+63}
C.cbP.prototype={
$1(d){return B.t(d)},
$S:17}
C.cbQ.prototype={
$1(d){return B.t(d)},
$S:17}
C.cbR.prototype={
$1(d){return C.h4w(B.a1(d,x.N,x.z))},
$S:z+64}
C.ccj.prototype={
$1(d){return d.a===this.a},
$S:z+65}
C.cck.prototype={
$0(){return A.d.gK(D.a1z)},
$S:z+66}
C.cce.prototype={
$1(d){var w,v,u=d.a
if(A.a.i(u).length===0)return
w=this.a
v=w.h(0,u)
if(v==null||!v.f.cc(d.f))w.n(0,u,d.hC())},
$S:z+7}
C.ccd.prototype={
$2(d,e){return e.f.aL(0,d.f)},
$S:z+21}
C.cc9.prototype={
$1(d){return new B.K(d,new C.cca(),B.T(d).k("K<1,S>")).fF(0,new C.ccb())},
$S:z+69}
C.cca.prototype={
$1(d){return d.f},
$S:z+70}
C.ccb.prototype={
$2(d,e){return d.cc(e)?d:e},
$S:669}
C.ccc.prototype={
$1(d){if(d==null||A.a.i(d).length===0)return B.a([],x.D)
return C.hzV(d)},
$S:z+71}
C.ccf.prototype={
$1(d){return!this.a.t(0,d.a)},
$S:z+2}
C.ccg.prototype={
$2(d,e){return e.f.aL(0,d.f)},
$S:z+21}
C.cch.prototype={
$1(d){return d.ae()},
$S:z+14}
C.fxC.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this
for(w=i.a.z,v=w.length,u=i.c,t=i.d,s=i.b,r=0;r<w.length;w.length===v||(0,B.L)(w),++r){q=w[r]
p=q.a
if(s.ah(0,p))continue
for(o=u.z,n=o.length,m=q.b,l=0;l<o.length;o.length===n||(0,B.L)(o),++l){k=o[l]
j=k.a
if(t.t(0,j)||k.b!==m)continue
if(d.$2(k,q)){s.n(0,p,k)
t.L(0,j)
break}}}},
$S:z+73}
C.fxy.prototype={
$2(d,e){var w=d.fx
return w.length!==0&&w===e.fx},
$S:z+8}
C.fxz.prototype={
$2(d,e){var w=d.at
return(w==null?"":w).length!==0&&w==e.at},
$S:z+8}
C.fxA.prototype={
$2(d,e){var w
if(d.b===D.cQ){w=A.a.i(d.r)
w=w.length!==0&&w===A.a.i(e.r)}else w=!1
return w},
$S:z+8}
C.fxB.prototype={
$2(d,e){return d.b===D.f_&&d.ax===e.ax&&d.fx.length===0&&e.fx.length===0},
$S:z+8}
C.cbY.prototype={
$2(b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=null,a9=b7.b,b0=a9/960,b1=this.a,b2=b1.c,b3=b1.d,b4=C.hZa(b2,b3),b5=B.a4(b4).k("bc<2>")
b5=B.cD(new B.bc(b4,b5),new C.cbX(),b5.k("J.E"),x.N)
w=B.da(b5,B.a4(b5).k("J.E"))
b1=b1.e
v=A.pv.av(0,A.k.D(b1,0,1))
u=new C.cbZ()
b5=B.aq(u.$2(b2,!1),u.$2(b3,!1),v)
b5.toString
t=B.aq(u.$2(b2,!0),u.$2(b3,!0),v)
t.toString
s=new C.cc_(a9,b7.d)
r=new C.cc0(b0)
q=x.p
p=B.a([],q)
for(b2=b2.z,o=b2.length,n=b1/0.55,m=0;m<b2.length;b2.length===o||(0,B.L)(b2),++m){l=b2[m]
if(w.t(0,l.a))continue
k=A.jP.av(0,A.k.D(n,0,1))
p.push(s.$5(l.c,l.d,l.e,l.f,new B.kz(A.k.D(1-k,0,1),B.dV(B.ea(A.A,r.$1(l),1-k*0.06,a8,a8),new B.u(-k*30*b0,0)),a8)))}for(b2=b3.z,b3=b2.length,o=1-v,j=0,m=0;m<b2.length;b2.length===b3||(0,B.L)(b2),++m){i=b2[m]
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
if(a2===D.f_){a4=i.hC()
a4.ay=B.aq(B.b0(l.ay),B.b0(i.ay),v).l()
a4.ch=B.aq(B.b0(l.ch),B.b0(i.ch),v).l()
a4.cx=0
a5=r.$1(a4)}else a5=a2===D.lk&&l.at==i.at?r.$1(i):new B.an(A.W,a8,A.b_,A.r,B.a([new B.kz(A.k.D(o,0,1),r.$1(l),a8),new B.kz(A.k.D(v,0,1),r.$1(i),a8)],q),a8)
a2=a3===0?a5:new B.iE(B.vZ(a3),a8,A.A,!0,a8,a5,a8)
p.push(s.$5(n+(h-n)*v,g+(f-g)*v,e+(d-e)*v,a0+(a1-a0)*v,a2))}else{a6=A.k.D((b1-(0.35+j*0.07))/0.5,0,1);++j
a7=i.dy
if(a7===D.cg)a7=D.mv
p.push(s.$5(i.c,i.d,i.e,i.f,C.hg3(a7,a6,r.$1(i))))}}return B.c_(new B.an(A.W,a8,A.aa,A.r,p,a8),new B.o(a8,a8,a8,a8,a8,new B.a7(A.a3,A.a7,A.x,B.a([b5,t],x.O),a8,a8),A.n),A.bd)},
$S:462}
C.cbX.prototype={
$1(d){return d.a},
$S:z+22}
C.cbZ.prototype={
$2(d,e){var w
if(e){w=d.f
if(w==null)w=d.e}else w=d.e
return B.b0(w)},
$S:z+76}
C.cc_.prototype={
$5(d,e,f,g,h){var w=this.a,v=this.b
return B.ao(null,h,g*v,null,d*w,null,e*v,f*w)},
$S:1689}
C.cc0.prototype={
$1(d){var w=null,v=d.fy,u=A.a.gX(d.a)
return new C.a6Z(v,C.b_J(!1,w,!1,d,w,!1,w,w,w,this.a,!1,!1),!0,u,w)},
$S:z+23}
C.dDL.prototype={
$2(d,e){var w=Date.now()/1000*2*3.141592653589793,v=Math.sin(w/18)
return B.ea(new B.d9(Math.sin(w/23)*0.6,Math.cos(w/29)*0.5),e,1.035+v*0.03,null,null)},
$S:45}
C.cc6.prototype={
$1(d){return d.a===this.a.a},
$S:z+11}
C.cc7.prototype={
$1(d){return d.a===this.a.a},
$S:z+20}
C.fAr.prototype={
$1(d){var w,v=document.createElement("iframe")
v.src=this.a
w=v.style
w.border="none"
w=v.style
w.width="100%"
w=v.style
w.height="100%"
return v},
$S:314}
C.fzy.prototype={
$1(d){return new C.acu(this.a,this.b,null)},
$S:z+78}
C.emb.prototype={
$0(){return this.a.Pf(this.b,C.i1u(),"Tap Save to Files on the next screen.","Download did not start \u2014 try Share.")},
$S:0}
C.emc.prototype={
$0(){var w=this.a,v=w.d?"Choose Print from the share menu for one full page.":"Pick Save to Files or send from the share menu."
return w.Pf(this.b,C.i1w(),v,"Share unavailable \u2014 try Safari.")},
$S:0}
C.emd.prototype={
$0(){var w=this.a,v=w.d?"PDF opened \u2014 tap Share \u2197 then Print.":"PDF opened \u2014 use Share \u2197 at the bottom of Safari."
return w.Pf(this.b,C.i1v(),v,"Could not open Safari \u2014 try Share.")},
$S:0}
C.eme.prototype={
$0(){Z.hfO()
B.a5(this.a,!1).N(null)},
$S:0}
C.cbW.prototype={
$1(d){var w=null,v=this.a
return v==null?d:B.l(w,w,w,w,w,w,w,w,w,w,w,d.r,d.x,w,d.w,v,d.as,!0,w,d.y,w,w,w,w,w,w)},
$S:1690}
C.cbV.prototype={
$2(d,e){var w,v=this,u=null,t=B.dL(d,A.ns),s=t==null?u:t.b,r=s==null?2:s,q=e.b,p=isFinite(q)?q:0,o=p<=0?u:A.k.V(A.k.D(p*Math.max(B.lJ(r),5),96,1500))
t=v.b
w=v.c||v.d?A.bQ:A.dt
return B.fL(t,A.A,o,new C.cbU(),A.co,w,!0,u,!1,new B.cw("img_"+v.a.c.a+"_"+t.length,x.W),u)},
$S:1691}
C.cbU.prototype={
$3(d,e,f){return D.aaC},
$S:202}
C.fxx.prototype={
$2(d,e){var w,v,u,t=null,s=B.m(6),r=this.a
if(r.f!=null){w=B.b0(r.e)
v=r.f
v.toString
v=new B.a7(A.ax,A.aC,A.x,B.a([w,B.b0(v)],x.O),t,t)
w=v}else w=t
v=r.f==null?B.b0(r.e):t
r=r.z
r=B.dc(r,0,B.dJ(6,"count",x.S),B.T(r).c)
u=r.$ti.k("K<aj.E,cK>")
r=B.B(new B.K(r,new C.fxw(e.b,e.d),u),u.k("aj.E"))
return B.bv(s,B.c_(new B.an(A.W,t,A.aa,A.r,r,t),new B.o(v,t,t,t,t,w,A.n),A.bd),A.aq)},
$S:1692}
C.fxw.prototype={
$1(d){var w=null,v=d.c,u=this.a,t=d.d,s=this.b,r=d.e,q=d.f
return B.ao(w,C.b_J(!1,w,!1,d,w,!1,w,w,w,u/960,!1,!0),q*s,w,v*u,w,t*s,r*u)},
$S:z+24}
C.fif.prototype={
$3(d,e,f){var w,v,u,t,s,r=this,q=null,p=r.a
p.a=B.cM(r.b,new C.fid(d))
w=B.aI(d,A.bT,x.w).w
v=B.m(22)
u=B.I(A.bF,A.q,1)
t=B.a([new B.ac(0,A.G,A.w.j(0.45),A.fM,28)],x.V)
s=x.p
return new B.cX(e,!1,B.av(B.aF(!1,A.a1,!0,q,B.p(q,B.v(B.a([B.A(B.a([B.D(B.v(B.a([B.d(r.c,q,q,q,q,q,q,A.kX,q,q,q),A.at,B.d("Applied \u2014 tap Done or wait 1.5 seconds",q,q,q,q,q,q,B.l(q,q,A.c.j(0.45),q,q,q,q,q,q,q,q,11,q,q,A.a4,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),A.F,q,A.e,A.j,0,A.p),1),B.bK(!1,A.zn,q,q,!0,q,q,new C.fie(p,d),q,B.fv(q,q,A.bj,q,q,q,q,q,q,q,q,A.c,q,q,q,q,q,A.F_,q,new B.b7(B.m(12),A.Y),q,q,q,q,q,q))],s),A.m,q,A.e,A.j,0,q,q),A.aA,r.d],s),A.m,q,A.e,A.Q,0,A.p),A.f,q,new B.aY(0,w.a.a*0.94,0,1/0),new B.o(A.aB,q,u,v,t,q,A.n),q,q,q,A.fJ,A.F8,q,q,q),A.f,A.K,0,q,q,q,q,q,A.ag),q,q,q),q)},
$C:"$3",
$R:3,
$S:254}
C.fid.prototype={
$0(){var w=this.a
if(w.e!=null&&B.a5(w,!0).pi())B.a5(w,!0).eI()},
$S:0}
C.fie.prototype={
$0(){var w=this.a.a
if(w!=null)w.a8(0)
B.a5(this.b,!0).eI()},
$S:0}
C.f0x.prototype={
$2(d,e){var w,v,u=this,t=null,s=u.a,r=s.d
r===$&&B.c()
r=r.x
r===$&&B.c()
switch(s.a.c.a){case 0:return u.b
case 1:case 13:return new B.an(A.W,t,A.b_,A.r,B.a([u.c,B.db(u.b,r)],x.p),t)
case 2:case 17:return new B.an(A.W,t,A.b_,A.r,B.a([u.c,B.dV(u.b,new B.u((1-r)*220,0))],x.p),t)
case 3:return new B.an(A.W,t,A.b_,A.r,B.a([u.c,B.dV(u.b,new B.u(-(1-r)*220,0))],x.p),t)
case 4:case 21:return new B.an(A.W,t,A.b_,A.r,B.a([u.c,B.dV(u.b,new B.u(0,(1-r)*140))],x.p),t)
case 5:return new B.an(A.W,t,A.b_,A.r,B.a([u.c,B.dV(u.b,new B.u(0,-(1-r)*140))],x.p),t)
case 6:return new B.an(A.W,t,A.b_,A.r,B.a([u.c,B.ea(A.A,B.db(u.b,r),0.6+r*0.4,t,t)],x.p),t)
case 7:return new B.an(A.W,t,A.b_,A.r,B.a([u.c,B.ea(A.A,B.db(u.b,r),1.3-r*0.3,t,t)],x.p),t)
case 8:s=B.dl()
w=s.a
w.$flags&2&&B.ak(w)
w[11]=0.001
s.fv(r*3.14159)
return B.fs(A.A,r<0.5?u.c:u.b,t,s,!0)
case 9:s=B.dl()
w=s.a
w.$flags&2&&B.ak(w)
w[11]=0.001
s.jQ(r*3.14159)
return B.fs(A.A,r<0.5?u.c:u.b,t,s,!0)
case 10:s=B.dl()
w=s.a
w.$flags&2&&B.ak(w)
w[11]=0.002
s.fv(r*1.2)
s.jQ(r*0.5)
return B.fs(A.A,B.db(u.b,0.4+r*0.6),t,s,!0)
case 11:s=B.dl()
w=s.a
w.$flags&2&&B.ak(w)
w[11]=0.002
s.fv(-r*1.4)
return B.fs(A.a7,B.db(u.b,r),t,s,!0)
case 12:return new B.an(A.W,t,A.b_,A.r,B.a([u.c,B.db(B.ea(A.A,u.b,1.02-r*0.02,t,t),r)],x.p),t)
case 14:return new B.an(A.W,t,A.b_,A.r,B.a([u.c,B.jt(u.b,A.r,new C.aI9(r,t))],x.p),t)
case 15:return new B.an(A.W,t,A.b_,A.r,B.a([u.c,B.jt(u.b,A.r,new C.aI9(1-r,t))],x.p),t)
case 16:v=D.b22.av(0,r)
return new B.an(A.W,t,A.b_,A.r,B.a([u.c,B.ea(A.A,B.db(u.b,r),0.5+v*0.5,t,t)],x.p),t)
case 18:s=r<0.15
if(s)r=1
return new B.an(A.W,t,A.b_,A.r,B.a([u.c,B.db(B.ej(u.b,A.c.j(s?0.9:0),!0),r)],x.p),t)
case 19:s=B.dl()
s.mC(r*6.28)
s.jA(r,r,r,1)
return B.fs(A.A,u.b,t,s,!0)
case 20:return B.eC(A.A,(r-0.5)*0.35,new B.an(A.W,t,A.b_,A.r,B.a([u.c,B.db(u.b,r)],x.p),t),t)}},
$S:58}
C.dPL.prototype={
$0(){var w=this.a
if(w.c!=null){w=w.d
w===$&&B.c()
w.cq(0)}},
$S:11}
C.dPK.prototype={
$0(){var w=this.a
if(w.c!=null){w=w.d
w===$&&B.c()
w.cq(0)}},
$S:11}
C.dPJ.prototype={
$2(d,e){var w,v=this.a
e.toString
w=v.d
w===$&&B.c()
v=v.a.c.dy
w=w.x
w===$&&B.c()
return C.hg3(v,w,e)},
$S:58}
C.cbO.prototype={
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
s=B.T(v).k("K<1,cK>")
q=B.B(new B.K(v,new C.cbN(q,w,e.b,e.d),s),s.k("aj.E"))
return B.c_(new B.an(A.W,r,A.aa,A.f,q,r),new B.o(t,r,r,r,r,u,A.n),A.bd)},
$S:462}
C.cbN.prototype={
$1(d){var w,v=this,u=null,t=d.dy!==D.cg?v.a.a++:0,s=d.c,r=v.c,q=d.d,p=v.d,o=d.e,n=d.f,m=d.fy,l=v.b,k=l.d
l=k||l.e
w=A.a.gX(d.a)
return B.ao(u,new C.a6Z(m,new C.Ug(d,C.b_J(!1,u,!1,d,u,!1,u,u,u,r/960,!1,!1),k,t,u),l,w,u),n*p,u,s*r,u,q*p,o*r)},
$S:z+24}
C.d2j.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.d2i(w))},
$S:11}
C.d2i.prototype={
$0(){return this.a.d++},
$S:0}
C.e9O.prototype={
$2(d,e){var w,v=null,u=A.o.an(this.b.e.a,1000),t=A.o.F(Date.now(),u)/u*3.141592653589793*2+this.c,s=this.a
if(D.aM0.t(0,A.d.gK(s.a.c.split("@")))){s=s.a
w=s.c
s=s.f
e.toString
return C.hYU(w,t,s,e)}switch(s.a.c){case"float3d":s=B.dl()
w=s.a
w.$flags&2&&B.ak(w)
w[11]=0.0016
w=Math.sin(t)
s.e2(0,w*7,0,1)
s.fv(Math.sin(t)*0.32)
s.jQ(Math.cos(t)*0.12)
w=1+Math.sin(t*2)*0.025
s.jA(w,w,w,1)
return B.fs(A.A,e,v,s,!0)
case"drift":s=Math.sin(t)
w=Math.cos(t*0.8)
return B.dV(B.ea(A.A,e,1+Math.sin(t*0.5)*0.05,v,v),new B.u(s*14,w*10))
default:s=Math.sin(t)
return B.db(B.ea(A.A,e,1+Math.sin(t)*0.04,v,v),0.82+s*0.18)}},
$S:58}
C.eQR.prototype={
$1(d){var w
$.X()
w=B.M()
w.b=A.ae
w.c=d
w.e=A.fA
return w},
$S:1693}
C.fv7.prototype={
$2(d,e){var w,v,u,t,s=this,r=null,q=e.b,p=e.d,o=Math.min(q,p)
if(!s.a)w=s.b.length===0&&s.c.length!==0
else w=!0
v=w?new B.at(o,o):new B.at(q,p)
u=s.b
if(u.length===0)u="rounded"
q=s.c
p=q.length===0
if(p)t=0
else{w=v.gee()
t=w*(q==="framed"?0.07:0.05)}w=B.a([],x.p)
if(q==="framed"||q==="gold")w.push(B.b3(r,r,r,new C.bpo(u,t,r),A.au))
w.push(B.nm(s.d,A.aq,new C.bdx(u,t,r)))
if(!p)w.push(B.b3(r,r,r,new C.boo(u,q,t,r),A.au))
return B.av(new B.a6(v.a,v.b,new B.an(A.W,r,A.b_,A.r,w,r),r),r,r,r)},
$S:248}
C.fl4.prototype={
$1(d){var w=d.b[1]
return w==null?"":w},
$S:310}
C.esp.prototype={
$0(){var w=0,v=B.j(x.aP),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(S.Cr(t.a.a.c),$async$$0)
case 3:s=e
r=J.a8(s)
if(r.gam(s)){u=null
w=1
break}u=r.dM(s,new C.esn(),new C.eso(s))
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1694}
C.esn.prototype={
$1(d){return d.at==="published"&&d.Q.length!==0},
$S:201}
C.eso.prototype={
$0(){return J.fo(this.a)},
$S:1696}
C.eoN.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.eoO.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.eoP.prototype={
$0(){var w=this.a
w.d=this.b
w.x=!1},
$S:0}
C.eqn.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eqb.prototype={
$1(d){return d.w!=="hati_kiapo_uongozi"},
$S:z+2}
C.eqc.prototype={
$1(d){return d.hC()},
$S:z+81}
C.eoa.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.erv.prototype={
$0(){this.a.tf()},
$S:0}
C.esl.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.e=u
w.f=A.o.D(v.b,0,u.r.length-1)
w.r=v.c
w.o_()
w.JD()},
$S:0}
C.eql.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.e=u
w.f=A.o.D(v.b,0,u.r.length-1)
w.r=v.c
w.o_()
w.JD()},
$S:0}
C.es8.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+2}
C.es9.prototype={
$1(d){return d.b===D.cQ},
$S:z+4}
C.esa.prototype={
$1(d){return d.a},
$S:z+22}
C.esb.prototype={
$0(){var w=this.a.r
return new B.ar(new B.bb(w,A.b3,A.aN),$.aw())},
$S:241}
C.esc.prototype={
$0(){return B.ki(!0,null,!0,!0,null,null,!1)},
$S:673}
C.enz.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+2}
C.esm.prototype={
$0(){},
$S:0}
C.epu.prototype={
$0(){var w=this.a
w.e=this.b.hC()
w.f=0
w.r=null
w.db=!1
A.d.a9(w.ax)
A.d.a9(w.ay)
w.x7()
w.JD()},
$S:0}
C.enx.prototype={
$0(){var w=this.a
w.e=null
w.db=!1
w.w=w.r=null
w.x7()},
$S:0}
C.eny.prototype={
$0(){var w=this.a
w.w=w.r=w.e=null
w.x7()},
$S:0}
C.epR.prototype={
$1(d){return d.a===this.a.a.a},
$S:z+2}
C.epS.prototype={
$0(){var w=this.a
w.e=this.b
w.f=0
w.r=null
w.db=!this.c
A.d.a9(w.ax)
A.d.a9(w.ay)
w.x7()
w.JD()
w.z="Home"},
$S:0}
C.epT.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.ept.prototype={
$1(d){var w=null
return B.ei(B.a([B.bK(!1,A.Tj,w,w,!0,w,w,new C.eps(d),w,w)],x.p),w,w,w,D.fpq,w,w,w,w,D.f7d,w)},
$S:19}
C.eps.prototype={
$0(){B.a5(this.a,!1).N(null)
return null},
$S:0}
C.epq.prototype={
$1(d){var w=null
return B.ei(B.a([B.bK(!1,A.Tj,w,w,!0,w,w,new C.epp(d),w,w)],x.p),w,w,w,D.fb6,w,w,w,w,D.f8U,w)},
$S:19}
C.epp.prototype={
$0(){B.a5(this.a,!1).N(null)
return null},
$S:0}
C.epr.prototype={
$0(){},
$S:0}
C.eoJ.prototype={
$1(d){return this.a.aZi(C.bAt(d))},
$S:z+7}
C.eoK.prototype={
$1(d){return this.a.ae1(C.bAt(d))},
$S:z+7}
C.epA.prototype={
$1(d){var w=null,v=x.p,u=B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.b2,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bw,D.fpu,A.at,B.d("Chagua aina ya hati",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.bw,new C.OX(A.vp,D.avh,"HATI YA KUHOWA","Hati ya mahari",new C.epv(d),w),A.S,new C.OX(A.h9,D.cZ3,"HATI YA KUHOWESHA","Hati ya kupokea",new C.epw(d),w),A.S,new C.OX(A.hZ,D.cLp,"HATI YA NDOA","Makubaliano \xb7 pete \xb7 picha za wanandoa",new C.epx(d),w),A.S,new C.OX(A.hK,D.cJK,"MALIPO YA AWAMU YA MAHARI","Makubaliano ya mahari iliyosalia",new C.epy(d),w)],v)
if(this.a.gaaz())A.d.v(u,B.a([A.S,new C.OX(A.iV,D.cuT,"HATI YA KIAPO CHA UONGOZI","Kiapo cha Rais \xb7 Civic Registry",new C.epz(d),w)],v))
return B.bm(!0,B.cd(B.v(u,A.aj,w,A.e,A.Q,0,A.p),A.r,w,A.y,w,E.xr,w,w,A.ah),!0,!1,A.af,!0,!0)},
$S:28}
C.epv.prototype={
$0(){B.a5(this.a,!1).N("hati_kuhowa")
return null},
$S:0}
C.epw.prototype={
$0(){B.a5(this.a,!1).N("hati_kuhoweya")
return null},
$S:0}
C.epx.prototype={
$0(){B.a5(this.a,!1).N("marriage_agreement")
return null},
$S:0}
C.epy.prototype={
$0(){B.a5(this.a,!1).N("hati_malipo_awamu")
return null},
$S:0}
C.epz.prototype={
$0(){B.a5(this.a,!1).N("hati_kiapo_uongozi")
return null},
$S:0}
C.epB.prototype={
$0(){var w=this.a
w.e=this.b.hC()
w.f=0
w.r=null
w.db=!0
A.d.a9(w.ax)
A.d.a9(w.ay)
w.x7()},
$S:0}
C.enB.prototype={
$1(d){return d.z.length===0},
$S:z+6}
C.enC.prototype={
$0(){var w,v,u=this,t=u.c,s=u.d,r=t.r,q=s.r
if(u.b){A.d.a9(r)
A.d.v(r,q)
w=A.a.i(t.b).toLowerCase()
if(w.length===0||A.a.a0(w,"untitled"))t.b=s.b
r=u.a
r.f=0}else{v=u.a
A.d.n2(r,v.f+1,q);++v.f
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
C.epM.prototype={
$1(d){return d.b===D.lk},
$S:z+4}
C.epN.prototype={
$1(d){var w={},v=this.b
w.a=A.d.gK(v).go
w.b=A.d.gK(v).id
return new B.e_(new C.epK(w,this.a,v),null)},
$S:20}
C.epK.prototype={
$2(a2,a3){var w,v,u,t,s,r,q=null,p=this.a,o=this.b,n=this.c,m=new C.epL(p,o,a3,n),l=B.O(a2).ax.a===A.I,k=l?A.c:A.M,j=l?A.aR:A.ak,i=l?A.bm:A.bM,h=l?A.M:A.c,g=B.m(28),f=B.I(l?A.bF:A.aL,A.q,1),e=x.p,d=B.A(B.a([B.D(B.v(B.a([B.d("Logo and pictures",q,q,q,q,q,q,B.l(q,q,k,q,q,q,q,q,q,q,q,20,q,q,A.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),A.bA,B.d("Tap a shape or a ring to change it.",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,12.5,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],e),A.F,q,A.e,A.j,0,A.p),1),B.aH(q,q,q,q,B.W(A.cy,j,q,q,q,q),q,q,q,new C.epG(a2),q,q,q,q,q,q)],e),A.m,q,A.e,A.j,0,q,q),a0=B.d("SHAPE",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q),a1=B.a([],e)
for(w=0;w<7;++w){v={}
u=D.BL[w]
v.a=null
t=v.a=u.a
a1.push(new C.bg0(t,u.b,p.a===t,i,k,new C.epH(v,m),q))}a1=B.bZ(A.bB,a1,A.bs,10,10)
v=B.d("RING",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q)
u=B.a([],e)
for(w=0;w<11;++w){s={}
r=D.BG[w]
s.a=null
t=s.a=r.a
u.push(new C.bg_(t,r.b,p.b===t,k,j,new C.epI(s,m),q))}return B.bm(!0,B.p(q,B.cd(B.v(B.a([d,A.aP,a0,A.S,a1,A.bw,v,A.S,B.bZ(A.bB,u,A.bs,12,12),A.bw,new B.a6(1/0,48,B.eB(D.bOs,D.frR,new C.epJ(o,n),B.de(q,q,q,q,q,q,q,q,q,A.aE,q,q,q,q,new B.b7(B.m(16),A.Y),D.aXa,q,q,q,q)),q)],e),A.F,q,A.e,A.Q,0,A.p),A.r,q,A.y,q,q,q,q,A.ah),A.f,q,q,new B.o(h,q,f,g,q,q,A.n),q,q,q,A.tt,D.bqR,q,q,q),!0,!1,A.af,!0,!0)},
$S:83}
C.epL.prototype={
$2$f$r(d,e){var w=this
w.c.$1(new C.epE(w.a,d,e))
w.b.d1(new C.epF(w.d,d,e))},
$0(){return this.$2$f$r(null,null)},
$1$r(d){return this.$2$f$r(null,d)},
$1$f(d){return this.$2$f$r(d,null)},
$S:1699}
C.epE.prototype={
$0(){var w=this,v=w.b
if(v!=null)w.a.a=v
v=w.c
if(v!=null)w.a.b=v},
$S:0}
C.epF.prototype={
$0(){var w,v,u,t,s,r,q,p
for(w=this.a,v=w.length,u=this.c,t=u!=null,s=this.b,r=s!=null,q=0;q<v;++q){p=w[q]
if(r)p.go=s
if(t)p.id=u}},
$S:0}
C.epG.prototype={
$0(){B.a5(this.a,!1).N(null)
return null},
$S:0}
C.epH.prototype={
$0(){return this.b.$1$f(this.a.a)},
$S:0}
C.epI.prototype={
$0(){return this.b.$1$r(this.a.a)},
$S:0}
C.epJ.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A4.G8(78,1920),$async$$0)
case 3:s=e
if(s==null){w=1
break}t.a.d1(new C.epD(t.b,s))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.epD.prototype={
$0(){var w,v,u,t
for(w=this.a,v=w.length,u=this.b,t=0;t<v;++t)w[t].at=u},
$S:0}
C.epP.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+6}
C.epQ.prototype={
$0(){var w,v,u,t=this,s=t.a
if(s.a<0)s.a=t.c.r.length
w=t.c
v=w.r
A.d.bm(v,new C.epO(t.d))
u=A.o.D(s.a,0,v.length)
s.a=u
s=t.e
A.d.n2(v,u,s.r)
w.CW=s.CW
w.cx=s.cx
w.cy=s.cy
w.ay=s.ay
s=t.b
s.f=A.o.D(s.f,0,v.length-1)
s.r=null
s.x7()},
$S:0}
C.epO.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+6}
C.eq6.prototype={
$1(d){return d.b===D.cQ},
$S:z+4}
C.eq7.prototype={
$1(d){return d.w},
$S:z+82}
C.eq8.prototype={
$2(d,e){return d>e?d:e},
$S:89}
C.eq9.prototype={
$1(d){var w=this,v=null,u=B.O(d).ax.a===A.I,t=u?A.c:A.M,s=u?A.aR:A.ak,r=u?A.bm:A.aQ,q=u?A.M:A.c,p=B.m(28),o=B.I(u?A.bF:A.aL,A.q,1),n=B.aI(d,A.bT,x.w).w,m=w.a,l=x.p,k=w.b
return B.bm(!0,B.p(v,B.v(B.a([B.A(B.a([B.p(v,D.bIe,A.f,v,v,D.aYy,v,38,v,v,v,v,v,38),A.bf,B.D(B.v(B.a([B.d("Edit this slide",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,19,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.d("Slide "+(m.f+1)+" \xb7 changes save as you type",v,v,v,v,v,v,B.l(v,v,s,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],l),A.F,v,A.e,A.j,0,A.p),1),B.aH(v,v,v,v,B.W(A.cy,s,v,v,v,v),v,v,v,new C.eq3(d),v,v,v,v,v,v)],l),A.m,v,A.e,A.j,0,v,v),A.aA,new B.dm(1,A.ci,B.hG(v,new C.eq4(m,k,w.c,s,w.d,t,r),k.length,A.fy,v,A.ah,new C.eq5(),!0),v)],l),A.F,v,A.e,A.Q,0,A.p),A.f,v,new B.aY(0,1/0,0,n.a.b*0.8),new B.o(q,v,o,p,v,v,A.n),v,v,v,A.tt,A.XX,v,v,v),!0,!1,A.af,!0,!0)},
$S:28}
C.eq3.prototype={
$0(){B.a5(this.a,!1).N(null)
return null},
$S:0}
C.eq5.prototype={
$2(d,e){return A.ac},
$S:36}
C.eq4.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=null,p=r.b[e],o=p.w===r.c,n=o?"TITLE":"TEXT "+(e+1)
n=B.d(n,q,q,q,q,q,q,B.l(q,q,o?A.aE:r.d,q,q,q,q,q,q,q,q,10.5,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q)
w=r.e
v=w.h(0,p.a)
u=o?1:2
t=o?A.H:A.cu
t=B.l(q,q,r.f,q,q,q,q,q,q,q,q,15,q,q,t,q,q,!0,q,q,q,q,q,q,q,q)
s=r.a
w=B.aH(q,q,q,q,D.bLj,q,q,q,new C.eq1(s,w,p),q,q,q,q,"Add an icon",q)
return B.v(B.a([new B.C(D.bt4,n,q),B.aL(q,A.T,!1,q,!0,A.r,q,B.aM(),v,q,q,q,q,q,2,B.br(q,new B.b4(4,B.m(16),A.Y),q,A.eP,q,q,q,q,!0,q,q,q,q,q,q,r.r,!0,q,q,q,q,new B.b4(4,B.m(16),D.aWQ),q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,!0,!0,!1,q,q,q,q,q,q,q,q,w,q,q,q,q,q),A.y,!0,q,!0,q,!1,q,A.ai,q,q,q,q,q,q,q,q,q,q,u,q,!1,"\u2022",q,new C.eq2(s,p),q,q,q,!1,q,q,!1,q,!0,q,A.a9,q,q,q,q,q,q,q,q,q,q,q,t,!0,A.a5,q,A.am,q,q,q,q)],x.p),A.F,q,A.e,A.j,0,A.p)},
$S:674}
C.eq1.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=t.a
k=l.c
k.toString
w=3
return B.b(C.i3y(k),$async$$0)
case 3:s=e
if(s==null||l.c==null){w=1
break}k=t.c.a
r=t.b.h(0,k)
q=r.a
p=q.b
o=p.geu()?p.a:q.a.length
n=p.geu()?p.b:q.a.length
m=A.a.ov(q.a,o,n,s)
r.bN(0,new B.bb(m,B.h8(A.bu,o+s.length),A.aN))
l.ai2(k,m)
l.p0()
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eq2.prototype={
$1(d){var w=this.a
w.ai2(this.b.a,d)
w.p0()},
$S:2}
C.eqa.prototype={
$0(){},
$S:0}
C.epC.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.db=u.length===0?null:u
w.dx=v.b
w.dy=v.c
v=v.d
w.fr=v.length===0?null:v},
$S:0}
C.enS.prototype={
$0(){},
$S:0}
C.enT.prototype={
$0(){var w=this.c.CW
if(w==null)w=""
C.hhm(this.b,w,!0)
w=this.a
w.r=null
w.x7()},
$S:0}
C.enU.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+6}
C.enV.prototype={
$0(){var w,v,u,t=this,s=t.a
if(s.a<0)s.a=t.c.r.length
w=t.c
v=w.r
A.d.bm(v,new C.enR(t.d))
u=A.o.D(s.a,0,v.length)
s.a=u
s=t.e
A.d.n2(v,u,s.r)
w.CW=s.CW
w.cx=s.cx
s=t.b
s.f=A.o.D(s.f,0,v.length-1)
s.r=null
s.x7()},
$S:0}
C.enR.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+6}
C.eqg.prototype={
$1(d){return B.oH(new C.eqf(this.a,d),!1,0.82,0.95,0.45,!1,null)},
$S:130}
C.eqf.prototype={
$2(d,e){var w=null,v=x.p
return B.v(B.a([new B.C(E.aha,B.v(B.a([D.fn5,A.an,B.d("Top 4 templates are free \xb7 lock icon means Slides Pro",w,w,w,w,w,w,B.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],v),A.F,w,A.e,A.j,0,A.p),w),B.D(B.ic(!0,w,e,A.y,D.eLs,new C.eqe(this.a,this.b),20,A.tw,w,A.ah,!1),1)],v),A.aj,w,A.e,A.j,0,A.p)},
$S:451}
C.eqe.prototype={
$2(d,e){var w=null,v=D.GC[e],u=C.hzQ(v),t=B.m(16),s=B.m(16),r=B.a([v.e,v.f],x.O),q=v.d,p=B.I(q.j(0.45),A.q,1),o=q.j(0.2),n=B.m(8),m=x.p
n=B.a([B.p(w,B.d(v.c,w,w,w,w,w,w,B.l(w,w,q,w,w,w,w,w,w,w,w,9,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.f,w,w,new B.o(o,w,w,n,w,w,A.n),w,w,w,w,A.fK,w,w,w)],m)
if(u)A.d.v(n,B.a([A.bp,B.p(w,D.eFD,A.f,w,w,new B.o(A.dS.j(0.85),w,w,B.m(8),w,w,A.n),w,w,w,w,A.n6,w,w,w)],m))
return B.aF(!1,A.a1,!0,w,B.aK(!1,t,!0,B.p(w,B.v(B.a([B.A(n,A.m,w,A.e,A.j,0,w,w),A.b4,B.d(v.b,w,w,w,w,w,w,B.l(w,w,v.r,w,w,w,w,w,w,w,w,14,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.d("5 slides",w,w,w,w,w,w,B.l(w,w,v.w.j(0.8),w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],m),A.F,w,A.e,A.j,0,A.p),A.f,w,w,new B.o(w,w,p,s,w,new B.a7(A.a3,A.a7,A.x,r,w,w),A.n),w,w,w,w,A.bk,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eqd(this.a,u,this.b,v),w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ag)},
$S:78}
C.eqd.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=t.b?3:4
break
case 3:s=t.c
r=t.a.a
w=5
return B.b(C.cc5(s,r.c,r.d),$async$$0)
case 5:if(!e||s.e==null){w=1
break}case 4:s=t.c
if(s.e!=null)B.a5(s,!1).N(t.d.a)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eqh.prototype={
$0(){var w=this.a
w.e=this.b.hC()
w.f=0
w.r=null
w.db=!0
A.d.a9(w.ax)
A.d.a9(w.ay)
w.x7()},
$S:0}
C.emw.prototype={
$0(){var w,v=this.a,u=v.gq2(),t=C.rh(4294967295,null,0,0,null,C.cC(),D.mu,"","","",D.dd),s=this.b
C.cci(t,s,u)
w=v.gdq()
if(w!=null&&s!==D.Cj){t.e=w.e
t.f=w.f}A.d.cj(v.e.r,v.f+1,t);++v.f
v.r=null},
$S:0}
C.enQ.prototype={
$0(){var w,v,u,t,s,r,q=this.b.ae()
q.n(0,"id",C.cC())
w=x.c.a(q.h(0,"elements"))
if(w!=null)for(v=J.aW(w),u=x.f;v.C();){t=v.gU(v)
if(u.b(t)){s=Date.now()
r=$.iX
$.iX=r+1
J.aG(t,"id",""+1000*s+"_"+r)}}v=this.a
A.d.cj(v.e.r,v.f+1,C.h4w(q));++v.f},
$S:0}
C.enO.prototype={
$0(){var w=this.a
A.d.cA(w.e.r,w.f)
w.f=A.o.D(w.f,0,w.e.r.length-1)
w.r=null},
$S:0}
C.eqp.prototype={
$0(){var w,v=this.a,u=this.b,t=A.d.cA(v.e.r,u),s=this.c
A.d.cj(v.e.r,s,t)
w=v.f
if(w===u)v.f=s
else if(u<w&&s>=w)v.f=w-1
else if(u>w&&s<=w)v.f=w+1},
$S:0}
C.enK.prototype={
$0(){var w,v=this.a,u=this.b
A.d.bm(v.d,new C.enJ(u))
w=v.e
w=w==null?null:w.a
if(w===u.a){v.e=null
v.db=!1}},
$S:0}
C.enJ.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eqo.prototype={
$0(){var w,v=this.b,u=A.a.i(this.c)
v.b=u.length===0?"Untitled Presentation":u
v.f=new B.S(Date.now(),0,!1)
u=this.a.e
w=u==null?null:u.a
if(w===v.a)u.b=v.b},
$S:0}
C.enA.prototype={
$0(){var w=this.a.r
return new B.ar(new B.bb(w,A.b3,A.aN),$.aw())},
$S:241}
C.eob.prototype={
$0(){return B.ki(!0,null,!0,!0,null,null,!1)},
$S:673}
C.es6.prototype={
$0(){var w=this.a
w.w=w.r=this.b
w.y=!1},
$S:0}
C.es7.prototype={
$1(d){var w,v,u=this.a
if(u.c==null||u.w!==this.b)return
w=this.c
u.asc(w).fG()
v=u.VV(w)
v.srY(B.h8(A.bu,v.a.a.length))},
$S:8}
C.erw.prototype={
$0(){var w,v,u,t=this
if(t.b)t.a.w=null
w=t.a
v=w.r=t.c
if(v!=null){w.as=!0
u=w.WU(v)
if(u!=null&&u.b===D.cQ)w.VV(u).saV(0,u.r)}else w.w=null},
$S:0}
C.emx.prototype={
$0(){var w=C.cC(),v=this.a,u=C.en(A.bg,!1,v.gq2().e.l(),A.aD,"",4280640491,24,A.bl,A.a4,"",0.22,w,null,"","",0,!1,"",0,D.be,4280172719,2,"Tap to edit text",0,0,"",D.cg,D.cQ,0.7,0.15,0.2)
A.d.L(v.gdq().z,u)
v.r=u.a},
$S:0}
C.emu.prototype={
$0(){var w=C.cC(),v=this.a,u=C.en(A.bg,!1,4279310375,A.aD,"",v.gq2().c.j(0.25).l(),24,A.bl,A.a4,"",0.25,w,null,"","",0,!1,"",0,this.b,v.gq2().c.l(),2,"",0,0,"",D.cg,D.f_,0.25,0.3,0.3)
A.d.L(v.gdq().z,u)
v.r=u.a},
$S:0}
C.emk.prototype={
$0(){var w=C.en(A.bg,!1,4279310375,A.aD,"",4280640491,24,A.bl,A.a4,"",0.55,C.cC(),this.b,"","",0,!1,"",0,D.be,4280172719,2,"",0,0,"",D.cg,D.lk,0.6,0.2,0.18),v=this.a
A.d.L(v.gdq().z,w)
v.r=w.a},
$S:0}
C.emh.prototype={
$1(d){var w,v,u,t,s,r=null,q=B.a([D.bUZ],x.p)
for(w=J.aW(this.a);w.C();){v=w.gU(w)
u=A.a.i(v.b)
if(u.length===0)u="My Bio"
t=v.gaiG().length
s=v.at==="published"&&v.Q.length!==0?" \xb7 "+v.as:""
q.push(B.dN(!1,r,r,r,!0,r,r,r,!0,r,D.bFZ,r,r,r,r,new C.emg(d,v),!1,r,r,r,r,r,new B.x(""+t+" links"+s,r,r,r,r,r,r,A.a2,r,1,r,r),r,new B.x(u,r,r,r,r,r,r,r,r,r,r,r),r,r,r))}return B.bm(!0,B.cB(q,r,r,r,r,A.ah,!0),!0,!1,A.af,!0,!0)},
$S:28}
C.emg.prototype={
$0(){B.a5(this.a,!1).N(this.b)
return null},
$S:0}
C.emi.prototype={
$0(){var w=A.k.D(0.23131034482758622,0.12,0.5),v=C.cC(),u=this.b,t=A.R.ao(u.ae(),null),s=C.en(A.bg,!1,4279310375,A.aD,u.b,4280640491,24,A.bl,A.a4,"",0.86,v,null,"","",0,!1,"",0,D.be,4280172719,2,t,0,0,"",D.cg,D.a44,w,0.5-w/2,0.07)
t=this.a
A.d.L(t.gdq().z,s)
t.r=s.a},
$S:0}
C.enM.prototype={
$1(d){return d.a===this.a&&d.db==="ngmy_quote_logo"},
$S:z+4}
C.enN.prototype={
$0(){var w,v=this.a,u=this.b
A.d.bm(v.gdq().z,new C.enL(u))
v.w=v.r=null
w=v.ch.W(0,u)
if(w!=null){w.S$=$.aw()
w.P$=0}v=v.CW.W(0,u)
if(v!=null)v.q()},
$S:0}
C.enL.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.emZ.prototype={
$0(){var w,v,u,t=this,s=t.b
if(s!=null){w=s.b
if(w===D.cQ)s.Q=t.c.l()
else if(w===D.f_){s.ay=t.c.l()
w=t.d
if(w!=null)s.ch=w.l()}return}v=new C.en_(t.c,t.d)
if(t.a.Q)for(s=t.e.r,w=s.length,u=0;u<s.length;s.length===w||(0,B.L)(s),++u)v.$1(s[u])
else{s=t.f
if(s!=null)v.$1(s)}},
$S:0}
C.en_.prototype={
$1(d){var w
d.e=this.a.l()
w=this.b
d.f=w==null?null:w.l()},
$S:z+1}
C.en3.prototype={
$0(){var w,v,u,t,s=this.a,r=s.e
r.toString
w=this.b
v=new C.en4(w)
if(s.Q){r.c=w.a
for(s=r.r,r=s.length,u=0;u<s.length;s.length===r||(0,B.L)(s),++u)v.$1(s[u])}else{t=s.gdq()
if(t!=null)v.$1(t)}},
$S:0}
C.en4.prototype={
$1(d){var w=this.a
d.e=w.f.l()
w=w.r
d.f=w==null?null:w.l()},
$S:z+1}
C.en1.prototype={
$0(){var w,v,u,t=this,s=t.b
if(s!=null&&s.b===D.cQ){s.Q=t.c
return}w=new C.en2(t.c)
if(t.a.Q)for(s=t.d.r,v=s.length,u=0;u<s.length;s.length===v||(0,B.L)(s),++u)w.$1(s[u])
else{s=t.e
if(s!=null)w.$1(s)}},
$S:0}
C.en2.prototype={
$1(d){var w,v,u
for(w=A.d.gaf(d.z),v=new B.fk(w,new C.en0()),u=this.a;v.C();)w.gU(0).Q=u},
$S:z+1}
C.en0.prototype={
$1(d){return d.b===D.cQ},
$S:z+4}
C.emY.prototype={
$0(){return C.cci(this.b,this.c,this.a.gq2())},
$S:0}
C.eq0.prototype={
$0(){return A.d.cj(this.a.d,0,this.b)},
$S:0}
C.esf.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.esg.prototype={
$1(d){return d.w===this.b&&d.a!==this.a.a.a},
$S:z+2}
C.esh.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.esi.prototype={
$0(){var w,v=this.a,u=v.c,t=this.b,s=t.d
if(u)A.d.cj(s,0,v.b)
else{w=A.d.ba(s,new C.ese(v))
if(w>=0)t.d[w]=v.b}if(v.a.gRC()){u=v.b
u.Q=v.a.Q
u.z=!0}if(this.c===!0){t.e=v.b.hC()
t.f=0
t.r=null
t.db=!1
A.d.a9(t.ax)
A.d.a9(t.ay)
t.x7()
t.JD()}},
$S:0}
C.ese.prototype={
$1(d){return d.a===this.a.b.a},
$S:z+2}
C.erM.prototype={
$1(d){var w=this,v=null,u=w.a,t=u.aaD(),s=w.b,r=u.aaE(A.f7,A.kN,"Copy filled names, date, mahari, witnesses, and signatures into "+s+".","Transfer details"),q=B.m(18),p=B.a([A.c.j(0.07),A.c.j(0.03)],x.O),o=B.I(A.c.j(0.08),A.q,1),n=x.p
p=B.a([t,A.P,r,A.bw,B.p(v,B.A(B.a([B.D(u.aTv(w.c,A.ak),1),new B.C(A.fp,B.p(v,D.bG4,A.f,v,v,new B.o(A.f7.j(0.18),v,v,v,v,v,A.a6),v,34,v,v,v,v,v,34),v),B.D(u.aTv(s,A.f7),1)],n),A.m,v,A.e,A.j,0,v,v),A.f,v,v,new B.o(v,v,o,q,v,new B.a7(A.ax,A.aC,A.x,p,v,v),A.n),v,v,v,v,A.bC,v,v,v),A.bw,u.aTy(A.f7,d,D.bCc,!0,"Make a fresh "+s+" and fill it automatically","Create new & transfer","new")],n)
t=w.d
if(t>0)A.d.v(p,B.a([A.S,u.bV8(A.aS,d,A.tJ,t===1?"Update your saved "+s:"Choose among "+t+" saved documents","Use existing","existing")],n))
p.push(A.aA)
p.push(u.aTw(d,"Not now"))
return new C.Jj(B.v(p,A.aj,v,A.e,A.Q,0,A.p),v)},
$S:z+9}
C.erL.prototype={
$1(d){var w=null,v=this.a,u=this.c
return new C.Jj(B.v(B.a([v.aaD(),A.P,v.aaE(A.aS,D.bBS,"Pick which saved document should receive the details.","Choose "+this.b),A.aP,new B.cU(new B.aY(0,1/0,0,B.aI(d,A.bT,x.w).w.a.b*0.42),B.hG(w,new C.erJ(v,u,d),u.length,w,w,A.ah,new C.erK(),!0),w),A.aA,v.aTw(d,"Cancel")],x.p),A.aj,w,A.e,A.Q,0,A.p),w)},
$S:z+9}
C.erK.prototype={
$2(d,e){return A.S},
$S:36}
C.erJ.prototype={
$2(d,e){var w=null,v=this.b[e],u=B.m(16),t=A.c.j(0.05),s=B.m(16),r=B.I(A.c.j(0.08),A.q,1),q=x.p
return B.aF(!1,A.a1,!0,w,B.aK(!1,u,!0,B.p(w,B.A(B.a([B.p(w,D.am3,A.f,w,w,new B.o(w,w,w,B.m(12),w,D.bS0,A.n),w,42,w,w,w,w,w,42),A.bf,B.D(B.v(B.a([B.d(v.b,w,1,A.a2,w,w,w,A.np,w,w,w),A.cX,B.d("Updated "+this.a.Pg(v.f),w,w,w,w,w,w,B.l(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,12,w,w,A.a4,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],q),A.F,w,A.e,A.j,0,A.p),1),B.W(A.ex,A.c.j(0.35),w,w,w,w)],q),A.m,w,A.e,A.j,0,w,w),A.f,w,w,new B.o(t,w,r,s,w,w,A.n),w,w,w,w,A.bC,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.erI(this.c,v),w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ag)},
$S:78}
C.erI.prototype={
$0(){B.a5(this.a,!1).N(this.b.a)
return null},
$S:0}
C.erF.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.aaD()
t=t.aaE(A.aH,A.tS,"Names and shared details from \u201c"+this.b+"\u201d will fill matching spots on \u201c"+this.c+"\u201d.","Replace matching fields?")
w=A.c.j(0.14)
v=x.p
return new C.Jj(B.v(B.a([s,A.P,t,A.bw,B.A(B.a([B.D(B.dU(A.a7n,new C.erD(d),B.de(u,u,u,u,u,u,u,u,u,A.c,u,u,A.cf,u,new B.b7(B.m(14),A.Y),new B.aA(w,1,A.q,-1),u,u,u,u)),1),A.av,B.D(B.bJ(D.f9t,new C.erE(d),B.bk(A.f7,u,u,u,A.c,u,A.cf,u,new B.b7(B.m(14),A.Y),u,u,u)),1)],v),A.m,u,A.e,A.j,0,u,u)],v),A.aj,u,A.e,A.Q,0,A.p),u)},
$S:z+9}
C.erD.prototype={
$0(){B.a5(this.a,!1).N(!1)
return null},
$S:0}
C.erE.prototype={
$0(){B.a5(this.a,!1).N(!0)
return null},
$S:0}
C.erH.prototype={
$1(d){var w=this,v=null,u=w.a,t=u.aaD(),s=w.b,r=u.aaE(A.aV,A.ee,"Everything that could be matched is now on "+s+".","Transfer complete"),q=x.p,p=B.A(B.a([B.D(u.atx("Names",""+w.c),1),A.ab,B.D(u.atx("Fields",""+w.d),1),A.ab,B.D(u.atx("Signatures",""+w.e),1)],q),A.m,v,A.e,A.j,0,v,v),o=B.bk(A.bj,v,v,v,A.c,v,A.xi,v,new B.b7(B.m(14),A.Y),v,v,v)
return new C.Jj(B.v(B.a([t,A.P,r,A.aP,p,A.bw,B.bJ(B.d("Open "+s,v,v,v,v,v,v,A.nn,v,v,v),new C.erG(d),o),A.S,u.aTx(d,"Stay here",!1)],q),A.aj,v,A.e,A.Q,0,A.p),v)},
$S:z+9}
C.erG.prototype={
$0(){B.a5(this.a,!1).N(!0)
return null},
$S:0}
C.eoF.prototype={
$0(){B.a5(this.a,!1).N(this.b)
return null},
$S:0}
C.eoE.prototype={
$0(){B.a5(this.a,!1).N(this.b)
return null},
$S:0}
C.erx.prototype={
$1(d){return d.b===D.cQ},
$S:z+4}
C.es5.prototype={
$1(d){var w=this.a,v=this.b
return new C.ZN(A.d.dM(w.d,new C.es3(v),new C.es4(v)).hC(),w.f,null)},
$S:z+84}
C.es3.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.es4.prototype={
$0(){return this.a},
$S:z+85}
C.emp.prototype={
$1(d){var w=null,v=this.b,u=""+v,t=v===1?"":"s"
t=B.a([new B.C(A.bC,B.d("Import "+this.a.c+" ("+u+" page"+t+")",w,w,w,w,w,w,A.ho,w,w,w),w),B.dN(!1,w,w,w,!0,w,w,w,!0,w,D.bHP,w,w,w,w,new C.emn(d),!1,w,w,w,w,w,B.d("Scroll through all "+u+" pages inside the slide",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,D.f7x,w,w,w)],x.p)
if(v>1)t.push(B.dN(!1,w,w,w,!0,w,w,w,!0,w,D.bIY,w,w,w,w,new C.emo(d),!1,w,w,w,w,w,D.ft0,w,B.d("One slide per page ("+u+" slides)",w,w,w,w,w,w,A.dl,w,w,w),w,w,w))
return B.bm(!0,B.v(t,A.m,w,A.e,A.Q,0,A.p),!0,!1,A.af,!0,!0)},
$S:28}
C.emn.prototype={
$0(){B.a5(this.a,!1).N("scroll")
return null},
$S:0}
C.emo.prototype={
$0(){B.a5(this.a,!1).N("split")
return null},
$S:0}
C.emq.prototype={
$0(){var w=this.b,v=w.c,u=C.en(A.bg,!1,4279310375,A.aD,v,4280640491,24,A.bl,A.a4,"",0.84,C.cC(),w.b,"","",0,!1,"",0,D.be,4280172719,2,v,0,0,"",D.cg,D.R8,0.88,0.06,0.08)
v=this.a
A.d.L(v.gdq().z,u)
v.r=u.a},
$S:0}
C.emr.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this.a,i=j.f+1
for(w=this.b,v=this.c,u=v.b,t=w,v=v.c,s=x.u,r=v+" \u2014 page ",q=1;q<=w;++q){p=Date.now()
o=$.iX
$.iX=o+1
n=""+q
m=B.a([],s)
l=Date.now()
k=$.iX
$.iX=k+1
m.push(new C.eI(""+1000*l+"_"+k,D.R8,0.04,0.06,0.92,0.88,v,24,A.a4,A.bl,A.aD,4279310375,A.bg,u,D.be,4280640491,4280172719,2,0,!1,n+" / "+t,q,D.cg,0,"","","","","",!1,0))
A.d.cj(j.e.r,i+q-1,new C.lA(""+1000*p+"_"+o,r+n,"",D.pZ,4294967295,null,D.dd,0,"",0,m))}j.f=i
j.r=null},
$S:0}
C.emv.prototype={
$0(){var w,v=C.cC(),u=this.a,t=u.e
t=(t==null?null:C.kr(t.w))===!0?"marriage_sign_placed":"Signature"
w=C.en(A.bg,!1,4279310375,A.aD,t,4280640491,24,A.bl,A.a4,"",0.22,v,this.b.a,"","",0,!1,"",0,D.be,4280172719,2,"",0,0,"",D.cg,D.kS,0.35,0.55,0.62)
A.d.L(u.gdq().z,w)
u.r=w.a},
$S:0}
C.emm.prototype={
$0(){var w,v,u,t,s,r,q,p=this.a,o=this.b
p.b11(o)
w=C.cC()
v=this.c
u=v.c
t=v.d
s=v.e
r=v.f
q=C.en(A.bg,!1,4279310375,A.aD,"marriage_sign_placed_"+A.a.e9(v.db,"marriage_sign_",""),4280640491,24,A.bl,A.a4,"",r,w,o.a,"","",0,!1,"",0,D.be,4280172719,2,"",0,0,"",D.cg,D.kS,s,u,t)
A.d.L(p.gdq().z,q)
A.d.bm(p.gdq().z,new C.eml(v))
p.r=null
p=p.e
if((p==null?null:p.w)==="hati_kiapo_uongozi"&&A.a.t(v.db,"rais")){p.toString
C.hYD(p)}},
$S:0}
C.eml.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.eqm.prototype={
$0(){var w=this.a,v=this.b
w.b11(v)
this.c.at=v.a
w.r=null},
$S:0}
C.esd.prototype={
$0(){var w,v,u,t,s,r,q=4279673674,p=1483594
for(w=this.b.z,v=w.length,u=this.c,t=0;t<v;++t){s=w[t]
r=s.db
if(r==="marriage_locked_nim_akuna_deni"){s.r="AKUNA DENI"
s.Q=u?q:p}else if(r==="marriage_locked_nim_akuna_box")s.ch=u?q:p
else if(r==="marriage_locked_nim_akuna_tick"){s.r="\u2713"
s.Q=u?q:p}}this.a.r=null},
$S:0}
C.eoI.prototype={
$0(){var w,v,u,t,s,r=this.b
A.d.bm(r.z,new C.eoH())
for(r=r.z,w=r.length,v=this.c+0.001,u=0;u<w;++u){t=r[u]
s=t.d
if(s>v)t.d=s-0.043}this.a.r=null},
$S:0}
C.eoH.prototype={
$1(d){var w=d.db
return w==="marriage_locked_nim_n_4"||w==="marriage_locked_nim_ul_4"||A.a.a0(w,"marriage_field_mahari_4:")},
$S:z+4}
C.en7.prototype={
$0(){var w=this.b
w.at=this.c
w.db="__kiapo_video__"
w=this.a
w.r=null
w.db=!1},
$S:0}
C.en8.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.tf()},
$S:8}
C.emj.prototype={
$0(){var w=C.en(A.bg,!1,4279310375,A.aD,"HD Photo",4280640491,24,A.bl,A.a4,"",0.8,C.cC(),this.b,"","",0,!1,"",0,D.be,4280172719,2,"",0,0,"",D.cg,D.lk,0.8,0.1,0.1),v=this.a
A.d.L(v.gdq().z,w)
v.r=w.a},
$S:0}
C.eo9.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.ems.prototype={
$0(){var w=this.a,v=this.b
A.d.L(w.gdq().z,v)
w.r=v.a},
$S:0}
C.emB.prototype={
$0(){return this.a.cx+=0.785398},
$S:0}
C.emC.prototype={
$0(){var w=this.b.hC(),v=C.cC(),u=A.k.D(w.c+0.04,0,0.92),t=A.k.D(w.d+0.04,0,0.92),s=w.e,r=w.f,q=w.r,p=w.w,o=w.x,n=w.y,m=w.z,l=w.Q,k=w.as,j=w.at,i=w.ay,h=w.ch,g=w.cx,f=C.en(k,w.cy,l,m,w.db,i,p,n,o,"",r,v,j,"","",w.dx,!1,"",g,w.ax,h,w.CW,q,w.fr,0,"",w.dy,w.b,s,u,t)
t=this.a
A.d.L(t.gdq().z,f)
t.r=f.a},
$S:0}
C.emD.prototype={
$0(){var w=this.a.gdq().z,v=this.b,u=A.d.ba(w,new C.emA(v))
if(u>=0&&u<w.length-1){A.d.cA(w,u)
A.d.cj(w,u+1,v)}},
$S:0}
C.emA.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.emO.prototype={
$0(){var w=this.a.gdq().z,v=this.b,u=A.d.ba(w,new C.emz(v))
if(u>0){A.d.cA(w,u)
A.d.cj(w,u-1,v)}},
$S:0}
C.emz.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.emR.prototype={
$0(){return this.a.as=A.bg},
$S:0}
C.emS.prototype={
$0(){return this.a.as=A.L},
$S:0}
C.emT.prototype={
$0(){return this.a.as=A.dL},
$S:0}
C.emU.prototype={
$0(){return this.a.cx+=3.14159},
$S:0}
C.emV.prototype={
$0(){return this.a.cx-=3.14159},
$S:0}
C.emW.prototype={
$1(d){return d.b===D.cQ},
$S:z+4}
C.emX.prototype={
$1(d){return d.length!==0},
$S:3}
C.emE.prototype={
$0(){var w=this.a,v=w.gdq().z,u=C.cC()
A.d.L(v,C.Cw(w.gq2().c.j(0.18).l(),0.1,u,D.be,0,2,1,0,0))
u=w.gdq().z
v=C.cC()
A.d.L(u,C.iR(A.bg,!1,w.gq2().d.l(),A.aD,18,A.bl,A.H,0.07,v,"Document Header",0,D.dd,0.9,0.05,0.02))},
$S:0}
C.emF.prototype={
$0(){var w,v=this.a,u=v.gdq().z,t=C.cC()
A.d.L(u,C.Cw(v.gq2().c.j(0.12).l(),0.1,t,D.be,0,2,1,0,0.9))
t=v.gdq().z
u=C.cC()
w=C.bBb()
A.d.L(t,C.iR(A.L,!1,v.gq2().e.l(),A.aD,12,A.bl,A.a4,0.06,u,"Footer \xb7 "+w,0,D.dd,0.9,0.05,0.92))},
$S:0}
C.emG.prototype={
$0(){A.d.L(this.a.gdq().z,C.Cw(1727914055,0.12,C.cC(),D.be,4294626325,2,0.76,0.12,0.35))},
$S:0}
C.emH.prototype={
$0(){var w=4279310375
A.d.L(this.a.gdq().z,C.Cw(w,0.08,C.cC(),D.be,w,2,0.5,0.2,0.4))},
$S:0}
C.emI.prototype={
$0(){var w=this.a,v=w.gdq().z,u=C.cC()
A.d.L(v,C.Cw(w.gq2().c.j(0.35).l(),0.12,u,D.Ck,4280640491,2,0.2,0.15,0.55))
A.d.L(w.gdq().z,C.iR(A.bg,!1,4279310375,A.aD,18,A.bl,A.a4,0.15,C.cC(),"Important note",0,D.q_,0.5,0.38,0.52))},
$S:0}
C.emJ.prototype={
$0(){var w=this.a
A.d.L(w.gdq().z,C.Cw(4294507260,0.78,C.cC(),D.be,4291548641,1.5,0.84,0.08,0.1))
A.d.L(w.gdq().z,C.iR(A.bg,!1,4279179050,A.aD,16,A.bl,A.a4,0.7,C.cC(),"MEMO\n\nTo:\nFrom:\nDate: "+C.bBb()+"\n\nSubject:\n\nBody text\u2026",0,D.dd,0.76,0.12,0.14))},
$S:0}
C.emK.prototype={
$0(){var w=this.a
A.d.L(w.gdq().z,C.Cw(4294897802,0.28,C.cC(),D.be,4294626325,2,0.3,0.62,0.12))
A.d.L(w.gdq().z,C.iR(A.bg,!1,4285611794,A.aD,15,A.bl,A.a4,0.24,C.cC(),"Sticky note",0,D.aEI,0.26,0.64,0.14))},
$S:0}
C.emL.prototype={
$0(){var w=4280640491,v=this.a
A.d.L(v.gdq().z,C.Cw(4293060848,0.04,C.cC(),D.be,4291548641,2,0.8,0.1,0.48))
A.d.L(v.gdq().z,C.Cw(w,0.04,C.cC(),D.be,w,2,0.55,0.1,0.48))},
$S:0}
C.emM.prototype={
$0(){var w=4279310375,v=this.a
A.d.L(v.gdq().z,C.iR(A.bg,!1,w,A.aD,18,A.bl,A.a4,0.62,C.cC(),"Left column\n\n\u2022 Point A\n\u2022 Point B",0,D.Hy,0.42,0.06,0.18))
A.d.L(v.gdq().z,C.iR(A.bg,!1,w,A.aD,18,A.bl,A.a4,0.62,C.cC(),"Right column\n\n\u2022 Point C\n\u2022 Point D",200,D.u7,0.42,0.52,0.18))},
$S:0}
C.emN.prototype={
$0(){var w=4279310375,v=this.a
A.d.L(v.gdq().z,C.Cw(858088427,0.62,C.cC(),D.be,4280640491,2,0.42,0.05,0.18))
A.d.L(v.gdq().z,C.Cw(856004201,0.62,C.cC(),D.be,4278556265,2,0.42,0.53,0.18))
A.d.L(v.gdq().z,C.iR(A.bg,!1,w,A.aD,20,A.bl,A.H,0.1,C.cC(),"Option A",0,D.dd,0.36,0.08,0.2))
A.d.L(v.gdq().z,C.iR(A.bg,!1,w,A.aD,20,A.bl,A.H,0.1,C.cC(),"Option B",0,D.dd,0.36,0.56,0.2))},
$S:0}
C.emP.prototype={
$0(){var w=4279310375,v=this.a
A.d.L(v.gdq().z,C.Cw(4294967295,0.36,C.cC(),D.be,w,2,0.24,0.38,0.28))
A.d.L(v.gdq().z,C.iR(A.L,!1,w,A.aD,14,A.bl,A.a4,0.12,C.cC(),"[ QR CODE ]",0,D.dd,0.24,0.38,0.4))},
$S:0}
C.emQ.prototype={
$0(){return C.cci(this.b,D.R9,this.a.gq2())},
$S:0}
C.eo8.prototype={
$1(d){var w=this.b,v=w.dy,u=!D.a5K.t(0,d),t=this.a
return t.b5T(d,v===d,A.aZ,this.c,new C.eo7(t,u,d,w),u)},
$S:z+25}
C.eo7.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p=t.b
if(p){w=3
break}else e=p
w=4
break
case 3:w=5
return B.b(t.a.nS(),$async$$0)
case 5:e=!e
case 4:if(e){w=1
break}s=t.a
r=s.c
if(r==null){w=1
break}q=t.c
C.bBZ(r,new C.eo6(s,t.d,q),q)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eo6.prototype={
$0(){return this.a.d1(new C.eo5(this.b,this.c))},
$S:0}
C.eo5.prototype={
$0(){return this.a.dy=this.b},
$S:0}
C.emt.prototype={
$0(){var w,v=this.a,u=v.gq2(),t=C.rh(4294967295,null,0,0,null,C.cC(),D.mu,"","","",D.dd),s=this.b
C.cci(t,s,u)
w=v.gdq()
if(w!=null&&s!==D.Cj){t.e=w.e
t.f=w.f}A.d.cj(v.e.r,v.f+1,t);++v.f
v.r=null},
$S:0}
C.enb.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.a
p=q.c
if(p==null){w=1
break}s=q.a
r=s.c
s=s.d
w=3
return B.b(C.i3B(p,q.d,s,new C.ena(q),r),$async$$0)
case 3:w=q.c!=null?4:5
break
case 4:w=6
return B.b(q.tf(),$async$$0)
case 6:case 5:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.ena.prototype={
$1(d){return this.biy(d)},
biy(d){var w=0,v=B.j(x.H),u=this,t
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.a
t.m(new C.en9(t,d))
w=2
return B.b(t.tf(),$async$$1)
case 2:return B.h(null,v)}})
return B.i($async$$1,v)},
$S:z+87}
C.en9.prototype={
$0(){var w,v,u
for(w=J.aW(this.b),v=this.a;w.C();){u=w.gU(w)
A.d.cj(v.d,0,u)}},
$S:0}
C.enc.prototype={
$0(){return this.a.bGk()},
$S:0}
C.end.prototype={
$0(){return this.a.aOT("Class Presentation",!0)},
$S:0}
C.ene.prototype={
$1(d){return this.a.bHg(d.b,this.b,d.a)},
$S:z+88}
C.enP.prototype={
$0(){var w,v=this.a
v.as=!1
w=v.c
w.toString
if(B.aI(w,A.bT,x.w).w.a.a<900)v.w=v.r=null},
$S:0}
C.eq_.prototype={
$1(d){return new B.C(new B.Q(0,0,0,B.aI(d,A.eD,x.w).w.f.d),new B.e_(new C.epZ(this.a,this.b),null),null)},
$S:60}
C.epZ.prototype={
$2(d,e){return B.oH(new C.epY(this.a,this.b,d,e),!1,0.52,0.9,0.34,!1,null)},
$S:591}
C.epY.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u?A.aB:A.c,s=B.I(u?A.bF:A.aL,A.q,1),r=B.p(v,v,A.f,v,v,new B.o(A.b2,v,v,B.m(99),v,v,A.n),v,4,v,v,v,v,v,40),q=x.p,p=w.a
return B.p(v,B.v(B.a([A.S,r,new B.C(A.agC,B.A(B.a([B.d("Format",v,v,v,v,v,v,B.l(v,v,u?A.c:A.M,v,v,v,v,v,v,v,v,17,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.b4,B.bK(!1,A.zn,v,v,!0,v,v,new C.epW(w.c),v,v)],q),A.m,v,A.e,A.j,0,v,v),v),B.D(B.cB(B.a([p.aRx(u,!0,!0,new C.epX(p,w.d))],q),e,D.boI,v,v,A.ah,!1),1)],q),A.m,v,A.e,A.j,0,A.p),A.f,v,v,new B.o(t,v,s,A.kz,v,v,A.n),v,v,v,v,v,v,v,v)},
$S:109}
C.epW.prototype={
$0(){B.a5(this.a,!1).N(null)
return null},
$S:0}
C.epX.prototype={
$0(){this.b.$1(new C.epU())
var w=this.a
if(w.c!=null)w.m(new C.epV())},
$S:0}
C.epU.prototype={
$0(){},
$S:0}
C.epV.prototype={
$0(){},
$S:0}
C.ery.prototype={
$3(d,e,f){return A.bH},
$C:"$3",
$R:3,
$S:90}
C.erz.prototype={
$4(d,e,f,g){var w=A.cr.av(0,e.gp(0))
return B.db(B.ea(A.A,new C.axE(this.a,null),0.94+w*0.06,null,null),w)},
$S:449}
C.erA.prototype={
$3(d,e,f){return A.bH},
$C:"$3",
$R:3,
$S:90}
C.erB.prototype={
$4(d,e,f,g){var w=A.cr.av(0,e.gp(0))
return B.db(B.ea(A.A,new C.bbo(this.a.b,null),0.94+w*0.06,null,null),w)},
$S:449}
C.erC.prototype={
$0(){return A.d.cj(this.a.d,0,C.Ve(this.b))},
$S:0}
C.emy.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a.fy
o===$&&B.c()
o=o.x
o===$&&B.c()
w=A.dB.av(0,o)
o=B.m(22)
v=B.m(22)
u=this.b
t=x.O
s=u?B.a([A.c.j(0.1+w*0.04),A.aB.j(0.72)],t):B.a([A.c.j(0.88),A.pi.j(0.75)],t)
r=B.I(A.b1.j(0.28+w*0.22),A.q,1.3)
q=w*0.2
t=B.a([A.b1.j(0.35+q),A.c8.j(0.18),A.K],t)
q=B.I(A.b1.j(0.45+q),A.q,1)
t=B.p(p,B.W(A0.ZL,u?A.ad:A.M,p,p,p,28),A.f,p,p,new B.o(p,p,q,p,p,new B.bR(A.A,0.5,A.x,p,0,t,p,p),A.a6),p,58,p,p,p,p,p,58)
q=B.d("No presentations yet",p,p,p,p,p,p,B.l(p,p,u?A.c:A.M,p,p,p,p,p,p,p,p,p,p,p,A.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
return B.bv(o,B.tK(A.fu,B.p(p,B.v(B.a([t,A.aA,q,A.an,B.d("Open Blank or Class Template to start \u2014 nothing is saved until you edit.",p,p,p,p,p,p,B.l(p,p,u?A.az:A.ak,p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),A.L,p,p)],x.p),A.m,p,A.e,A.j,0,A.p),A.f,p,p,new B.o(p,p,r,v,p,new B.a7(A.ax,A.aC,A.x,s,p,p),A.n),p,p,p,p,A.ew,p,p,1/0),14,!1),A.aq)},
$S:296}
C.enD.prototype={
$1(d){return A.a.i(d)},
$S:14}
C.enE.prototype={
$1(d){return d.length!==0},
$S:3}
C.enF.prototype={
$1(d){var w
if(A.a.a0(d,"Updated"))w=A.kj
else{w=B.af("^\\d+ slides?$",!0,!1,!1,!1)
w=w.b.test(d)?A.a_g:A.Ba}return w},
$S:677}
C.enI.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.a,j=k.fy
j===$&&B.c()
j=j.x
j===$&&B.c()
w=A.dB.av(0,A.k.F(j+m.b*0.12,1))
j=B.m(20)
v=m.c
u=B.m(20)
t=m.d
s=x.O
s=t?B.a([A.c.j(0.1+w*0.04),A.aB.j(0.78)],s):B.a([A.c.j(0.92),A.mM.j(0.82)],s)
r=m.e
q=A.d.gK(r)
p=t?0.34:0.26
p=B.I(q.j(p+w*0.22),A.q,1.25)
q=B.m(10)
q=B.p(l,B.W(C.kr(v.w)?A.vp:A.pM,A.c,l,l,l,22),A.f,l,l,new B.o(l,l,l,q,l,new B.a7(A.a3,A.a7,A.x,r,l,l),A.n),l,36,l,l,l,l,l,52)
o=v.b
o=B.d(o.toUpperCase(),l,l,l,l,l,l,B.l(l,l,t?A.c:A.M,l,l,l,l,l,l,l,l,l,l,l,A.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
n=v.w
if(n==="marriage_agreement")n="Hati ya Kuhowesha \u2022 Updated "+k.Pg(v.f)
else if(n==="hati_kuhowa")n="Hati ya Kuhowa \u2022 Updated "+k.Pg(v.f)
else if(n==="hati_kuhoweya")n="Hati ya Kuhoweya \u2022 Updated "+k.Pg(v.f)
else if(n==="hati_kiapo_uongozi"){n=v.x
if(A.a.i(n==null?"":n).length===0)n="Civic Registry"
n="Kiapo cha Uongozi \u2022 "+B.t(n)+" \u2022 Updated "+k.Pg(v.f)}else n=""+v.r.length+" slides \u2022 Updated "+k.Pg(v.f)
r=k.bHe(n,A.d.gK(r),t)
return B.p(l,B.bv(j,new B.a79(B.aF(!1,A.a1,!0,l,B.aK(!1,l,!0,B.p(l,B.dN(!1,A.LF,l,l,!0,l,l,l,!0,l,q,l,l,l,l,l,!1,l,l,l,l,l,r,l,o,l,B.aH(l,l,l,l,B.W(A.nU,t?A.az:A.bJ,l,l,l,l),l,l,l,new C.enG(k,v,t),l,l,l,l,"Project options",l),l),A.f,l,l,new B.o(l,l,p,u,l,new B.a7(A.ax,A.aC,A.x,s,l,l),A.n),l,l,l,l,l,l,l,l),l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.enH(k,v),l,l,l,l,l,l,l),A.f,A.K,0,l,l,l,l,l,A.ag),l),A.aq),A.f,l,l,l,l,l,l,A.dc,l,l,l,l)},
$S:95}
C.enH.prototype={
$0(){return this.a.ae1(this.b)},
$S:0}
C.enG.prototype={
$0(){return this.a.Av(this.b,this.c)},
$S:0}
C.ep8.prototype={
$0(){var w=this.a
w.b4y()
w.m(new C.ep7())},
$S:0}
C.ep7.prototype={
$0(){},
$S:0}
C.ep9.prototype={
$1(d){return this.a.ai2(this.b.a,d)},
$S:2}
C.epa.prototype={
$0(){this.a.d1(new C.ep6(this.b))},
$S:0}
C.ep6.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.O)?A.cu:A.O},
$S:0}
C.epb.prototype={
$0(){this.a.d1(new C.ep5(this.b))},
$S:0}
C.ep5.prototype={
$0(){var w=this.a
return w.y=w.y===A.cD?A.bl:A.cD},
$S:0}
C.epc.prototype={
$0(){this.a.d1(new C.ep4(this.b))},
$S:0}
C.ep4.prototype={
$0(){var w=this.a,v=w.z
return w.z=1===v.a?A.aD:A.mA},
$S:0}
C.epd.prototype={
$0(){this.a.d1(new C.ep3(this.b))},
$S:0}
C.ep3.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
C.epe.prototype={
$0(){var w=this.a
w.d1(new C.ep2(w,this.b))},
$S:0}
C.ep2.prototype={
$0(){var w=this.b
return w.as=this.a.c0K(w.as)},
$S:0}
C.epf.prototype={
$0(){return this.a.d1(new C.ep1(this.b))},
$S:0}
C.ep1.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w+2,10,96)},
$S:0}
C.epg.prototype={
$0(){return this.a.d1(new C.ep0(this.b))},
$S:0}
C.ep0.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w-2,10,96)},
$S:0}
C.eoU.prototype={
$0(){return this.a.a1k(this.b.a)},
$S:0}
C.eoV.prototype={
$0(){this.a.ZS()
return null},
$S:0}
C.eoW.prototype={
$0(){var w=this.a,v=w.c
v.toString
if(B.aI(v,A.bT,x.w).w.a.a<900)w.aek()
else w.m(new C.eoT(w))},
$S:0}
C.eoT.prototype={
$0(){return this.a.as=!0},
$S:0}
C.eoX.prototype={
$0(){this.a.d1(new C.eoS(this.b))},
$S:0}
C.eoS.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.O)?A.cu:A.O},
$S:0}
C.eoY.prototype={
$0(){return this.a.d1(new C.eoR(this.b))},
$S:0}
C.eoR.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w+2,10,96)},
$S:0}
C.eoZ.prototype={
$0(){return this.a.d1(new C.eoQ(this.b))},
$S:0}
C.eoQ.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w-2,10,96)},
$S:0}
C.ep_.prototype={
$0(){return this.a.ayx(null)},
$S:0}
C.eo1.prototype={
$0(){this.a.D8()
return null},
$S:0}
C.eo2.prototype={
$0(){this.a.a9b()
return null},
$S:0}
C.eo4.prototype={
$1(d){return this.biz(d)},
biz(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
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
return B.b(t.a.Ju(),$async$$1)
case 10:w=4
break
case 6:s=t.a
r=s.e
if(r==null){w=1
break}q=s.c
q.toString
w=11
return B.b(B.bV(A.aB,null,new C.enX(r),q,!0,!0,!1,null,!1,!1,x.S),$async$$1)
case 11:p=f
if(p!=null)s.d1(new C.enY(r,p))
w=4
break
case 7:s=t.a
r=s.e
if(r==null){w=1
break}s.d1(new C.enZ(r))
s=s.c.I(x.q).f
s.R(B.b2(null,null,null,null,null,A.r,null,B.d(r.ay?"Video motion on \u2014 press Play to watch it like a video.":"Video motion off.",null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
w=4
break
case 8:s=t.a
r=s.e
if(r==null){w=1
break}s.d1(new C.eo_(r))
s=s.c.I(x.q).f
s.R(B.b2(null,null,null,null,null,A.r,null,B.d(r.ch?"Non-stop on \u2014 the show starts over after the last slide.":"Non-stop off \u2014 the show stops on the last slide.",null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
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
return B.b(C.hit(q,new C.E5(o,n,m,l==null?"":l)),$async$$1)
case 12:p=f
if(p==null||s.c==null){w=1
break}s.d1(new C.eo0(r,p))
s=s.c.I(x.q).f
q=p.a
if(q.length===0)q="No ending celebration."
else{q=C.afZ(q)
q=B.t(q==null?null:q.b)+" will play after your last slide."}s.R(B.b2(null,null,null,null,null,A.r,null,B.d(q,null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
w=4
break
case 4:case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:92}
C.enX.prototype={
$1(d){var w,v,u,t,s,r=null,q=B.a([D.e3S],x.p)
for(w=[3,5,8,10,15,20,30,60],v=this.a,u=0;u<8;++u){t=w[u]
s=v.e===t?D.bHW:r
q.push(B.dN(!1,r,r,r,!0,r,r,r,!0,r,r,r,r,r,r,new C.enW(d,t),!1,r,r,r,r,r,r,r,new B.x(""+t+" seconds",r,A.dl,r,r,r,r,r,r,r,r,r),r,s,r))}return B.bm(!0,B.v(q,A.m,r,A.e,A.Q,0,A.p),!0,!1,A.af,!0,!0)},
$S:28}
C.enW.prototype={
$0(){B.a5(this.a,!1).N(this.b)
return null},
$S:0}
C.enY.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.enZ.prototype={
$0(){var w=this.a
return w.ay=!w.ay},
$S:0}
C.eo_.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
C.eo0.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.db=u.length===0?null:u
w.dx=v.b
w.dy=v.c
v=v.d
w.fr=v.length===0?null:v},
$S:0}
C.eo3.prototype={
$1(d){var w,v,u,t=null,s=this.a.e,r=s==null,q=r?t:s.e,p=x.N
q=B.zi(B.d("Timer: "+(q==null?5:q)+"s",t,t,t,t,t,t,t,t,t,t),48,"timer",p)
w=r?t:s.ay
v=B.zi(B.d("Video motion: "+(w===!0?"On":"Off"),t,t,t,t,t,t,t,t,t,t),48,"motion",p)
w=r?t:s.ch
u=B.zi(B.d("Non-stop loop: "+(w===!0?"On":"Off"),t,t,t,t,t,t,t,t,t,t),48,"loop",p)
s=C.afZ(r?t:s.db)
s=s==null?t:s.b
return B.a([D.e8S,q,v,u,B.zi(B.d("Ending celebration: "+(s==null?"None":s),t,t,t,t,t,t,t,t,t,t),48,"finale",p)],x.gx)},
$S:129}
C.esj.prototype={
$0(){var w=this.a,v=w.e
if(v!=null){w=w.c
w.toString
C.bB8(w,v)}},
$S:0}
C.esk.prototype={
$0(){this.a.D8()
return null},
$S:0}
C.epj.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.z===d,r=B.m(999),q=s?D.bRV:u
if(s)w=u
else w=this.b?A.c.j(0.05):A.bM
if(s)v=A.c
else v=this.b?A.aR:A.bv
return new B.C(A.fy,B.aE(u,B.dg(u,B.d(d,u,u,u,u,u,u,B.l(u,u,v,u,u,u,u,u,u,u,u,12,u,u,A.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,A.bc,new B.o(w,u,u,r,u,q,A.n),A.eE,u,u,u,A.lH,u,u,u),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.epi(t,d),u,u,u,u,u,u,!1,A.a8),u)},
$S:126}
C.epi.prototype={
$0(){var w=this.a
return w.m(new C.eph(w,this.b))},
$S:0}
C.eph.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.epk.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.e
if(s==null)s=u
else{s=s.CW
s=(s==null?"":s).length!==0}w=s===!0
v=w?G.a26:E.avn
s=w?"Tell the AI what to change or add":"Type it \u2014 AI creates the slides"
t=w?t.gbKA():t.gbGF()
return B.hp(B.aE(u,B.p(u,D.alv,A.f,u,u,new B.o(u,u,u,u,B.a([new B.ac(0,A.G,A.d.gK(v).j(0.45),A.J,10)],x.V),new B.a7(A.a3,A.a7,A.x,v,u,u),A.a6),u,34,u,u,u,u,u,34),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,t,u,u,u,u,u,u,!1,A.a8),u,s,u,u)},
$S:1704}
C.epl.prototype={
$0(){var w=this.a,v=w.c
v.toString
return C.i2R(v,w.a.c)},
$S:0}
C.eqI.prototype={
$0(){return this.b.uV(this.a.a)},
$S:0}
C.eqJ.prototype={
$0(){return this.a.uV(D.mu)},
$S:0}
C.eqK.prototype={
$0(){return this.a.uV(D.Hw)},
$S:0}
C.eqV.prototype={
$0(){return this.a.uV(D.Hx)},
$S:0}
C.er5.prototype={
$0(){return this.a.uV(D.Hv)},
$S:0}
C.erg.prototype={
$0(){return this.a.pN("lab_report")},
$S:0}
C.ern.prototype={
$0(){return this.a.pN("rubric")},
$S:0}
C.ero.prototype={
$0(){return this.a.pN("minutes")},
$S:0}
C.erp.prototype={
$0(){return this.a.pN("agenda")},
$S:0}
C.erq.prototype={
$0(){return this.a.pN("timeline")},
$S:0}
C.err.prototype={
$0(){return this.a.pN(this.b.a)},
$S:0}
C.eqL.prototype={
$0(){this.a.V3()
return null},
$S:0}
C.eqM.prototype={
$0(){this.a.UY()
return null},
$S:0}
C.eqN.prototype={
$0(){return this.a.pN("table")},
$S:0}
C.eqO.prototype={
$0(){return this.a.pN("sticky")},
$S:0}
C.eqP.prototype={
$0(){return this.a.pN("divider")},
$S:0}
C.eqQ.prototype={
$0(){return this.a.pN("header_bar")},
$S:0}
C.eqR.prototype={
$0(){return this.a.oL(D.be)},
$S:0}
C.eqS.prototype={
$0(){return this.a.oL(D.eI)},
$S:0}
C.eqT.prototype={
$0(){return this.a.oL(D.jD)},
$S:0}
C.eqU.prototype={
$0(){return this.a.oL(D.Ck)},
$S:0}
C.eqW.prototype={
$0(){return this.a.oL(D.jE)},
$S:0}
C.eqX.prototype={
$0(){return this.a.oL(D.kT)},
$S:0}
C.eqY.prototype={
$0(){return this.a.oL(D.fq)},
$S:0}
C.eqZ.prototype={
$0(){this.a.GP()
return null},
$S:0}
C.er_.prototype={
$0(){this.a.ML()
return null},
$S:0}
C.er0.prototype={
$0(){return this.a.pN("quote")},
$S:0}
C.er1.prototype={
$0(){return this.a.a7k()},
$S:0}
C.er2.prototype={
$0(){this.a.ZY()
return null},
$S:0}
C.er3.prototype={
$0(){var w=this.a
return w.m(new C.eqy(w))},
$S:0}
C.eqy.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.er4.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return B.b(s.nS(),$async$$0)
case 3:if(!e){w=1
break}if(s.c==null){w=1
break}s.m(new C.eqG(s))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eqG.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.er6.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=r.e
q=q==null?s:q.c
w=d.a
v=q===w&&r.jG()==null&&!r.Q
q=A.a.i(w)
w=d.b
if(D.a5L.t(0,q))w+=" (Pro)"
u=d.r
if(u==null)u=d.c
u=B.a([d.f,u],x.O)
t=v?d.c:A.b2
u=B.a([B.p(s,s,A.f,s,s,new B.o(s,s,B.I(t,A.q,v?2.5:1),s,s,new B.a7(A.a3,A.a7,A.x,u,s,s),A.a6),s,26,s,s,s,s,s,26)],x.p)
if(D.a5L.t(0,q))u.push(B.ao(s,B.p(s,D.Nn,A.f,s,s,D.DD,s,12,s,s,s,s,s,12),s,s,s,-2,-2,s))
return new B.C(A.fy,B.aE(s,B.hp(new B.an(A.W,s,A.aa,A.f,u,s),s,w,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.eqF(r,d),s,s,s,s,s,s,!1,A.a8),s)},
$S:z+89}
C.eqF.prototype={
$0(){this.a.a7C(this.b)
return null},
$S:0}
C.er7.prototype={
$0(){this.a.a7B(this.b)
return null},
$S:0}
C.er8.prototype={
$1(d){var w,v,u,t,s,r=null,q=C.hzR(d),p=this.a,o=B.m(8),n=p.gdq()
n=n==null?r:n.x
w=d.a
n=n===w?A.bj:A.b2
v=p.gdq()
n=B.I(n,A.q,(v==null?r:v.x)===w?2.5:1)
u=B.m(8)
t=B.m(7)
s=C.rh(4294967295,r,0,0,r,"preview_"+w,D.pZ,"","","",D.dd)
C.hfr(s,w)
w=x.p
u=B.a([B.bv(o,B.p(r,B.bv(t,C.hgL(s),A.aq),A.f,r,r,new B.o(r,r,n,u,r,r,A.n),r,44,r,r,r,r,r,72),A.aq)],w)
if(q)u.push(B.ao(r,B.p(r,D.am4,A.f,r,r,D.DD,r,14,r,r,r,r,r,14),r,r,r,2,2,r))
return new B.C(A.jc,B.aE(r,B.v(B.a([new B.an(A.W,r,A.aa,A.r,u,r),A.cX,B.d(d.b,r,r,r,r,r,r,B.l(r,r,this.b?A.az:A.ak,r,r,r,r,r,r,r,r,9,r,r,A.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],w),A.m,r,A.e,A.j,0,A.p),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.eqE(p,q,d),r,r,r,r,r,r,!1,A.a8),r)},
$S:z+90}
C.eqE.prototype={
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
return B.b(s.nS(),$async$$0)
case 5:e=!e
case 4:if(e){w=1
break}if(s.c==null){w=1
break}s.d1(new C.equ(r,t.c))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.equ.prototype={
$0(){return C.hfr(this.a,this.b.a)},
$S:0}
C.eqH.prototype={
biA(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$$2=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=!D.a5K.t(0,d)
if(s){w=3
break}else g=s
w=4
break
case 3:w=5
return B.b(t.a.nS(),$async$$2)
case 5:g=!g
case 4:if(g){w=1
break}if(t.a.c==null){w=1
break}e.$0()
case 1:return B.h(u,v)}})
return B.i($async$$2,v)},
$2(d,e){return this.biA(d,e)},
$S:z+91}
C.ers.prototype={
$4(d,e,f,g){var w=null,v=B.T(d).k("K<1,r>")
v=B.B(new B.K(d,new C.eru(this.a,e,g,this.b,f),v),v.k("aj.E"))
return B.cd(B.A(v,A.m,w,A.e,A.j,0,w,w),A.r,w,A.y,w,w,w,w,A.aO)},
$S:z+92}
C.eru.prototype={
$1(d){var w=this
return w.a.b5T(d,w.b===d,w.c,w.d,new C.ert(w.e,d),!D.a5K.t(0,d))},
$S:z+25}
C.ert.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.er9.prototype={
$1(d){this.b.$2(d,new C.eqD(this.a,d,this.c))
return null},
$S:z+26}
C.eqD.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.bBZ(u,new C.eqt(v,this.c,w),w)},
$S:0}
C.eqt.prototype={
$0(){return this.a.d1(new C.eqr(this.b,this.c))},
$S:0}
C.eqr.prototype={
$0(){return this.a.dy=this.b},
$S:0}
C.era.prototype={
$1(d){this.b.$2(d,new C.eqC(this.a,d))
return null},
$S:z+26}
C.eqC.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.fJM(u,new C.eqs(v,w),w)},
$S:0}
C.eqs.prototype={
$0(){var w=this.a
return w.d1(new C.eqq(w,this.b))},
$S:0}
C.eqq.prototype={
$0(){return this.a.gdq().r=this.b},
$S:0}
C.erb.prototype={
$0(){var w=this.a
return w.m(new C.eqB(w))},
$S:0}
C.eqB.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
C.erc.prototype={
$0(){var w=this.a,v=w.e
if(v!=null){w=w.c
w.toString
C.bB8(w,v)}},
$S:0}
C.erd.prototype={
$0(){this.a.HC()
return null},
$S:0}
C.ere.prototype={
$0(){return this.a.a7k()},
$S:0}
C.erf.prototype={
$0(){var w=this.a,v=w.jG()
if(v!=null&&v.b===D.cQ)w.d1(new C.eqA(v))},
$S:0}
C.eqA.prototype={
$0(){var w=this.a
w.f=A.k.D(w.f*1.25,0.08,1.8)
w.e=A.k.D(w.e*1.1,0.08,1.8)},
$S:0}
C.erh.prototype={
$0(){this.a.D8()
return null},
$S:0}
C.eri.prototype={
$0(){var w=this.a,v=w.e
v.toString
w.EN(v,!0)
return null},
$S:0}
C.erj.prototype={
$0(){this.a.d1(new C.eqz(this.b))},
$S:0}
C.eqz.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.O)?A.cu:A.O},
$S:0}
C.erk.prototype={
$0(){this.a.d1(new C.eqx(this.b))},
$S:0}
C.eqx.prototype={
$0(){var w=this.a
return w.y=w.y===A.cD?A.bl:A.cD},
$S:0}
C.erl.prototype={
$0(){this.a.d1(new C.eqw(this.b))},
$S:0}
C.eqw.prototype={
$0(){var w=this.a,v=w.z
return w.z=1===v.a?A.aD:A.mA},
$S:0}
C.erm.prototype={
$0(){this.a.d1(new C.eqv(this.b))},
$S:0}
C.eqv.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
C.en6.prototype={
$1(d){return this.bix(d)},
bix(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.b
if(r){w=3
break}else f=r
w=4
break
case 3:w=5
return B.b(t.a.nS(),$async$$1)
case 5:f=!f
case 4:if(f){w=1
break}s=t.a
if(s.c==null){w=1
break}s.d1(new C.en5(s,t.c))
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:192}
C.en5.prototype={
$0(){return this.a.e.d=this.b},
$S:0}
C.erP.prototype={
$0(){var w=this.a
return w.d1(new C.erO(w,this.b))},
$S:0}
C.erO.prototype={
$0(){var w,v=this.b,u=v.w
if(!(u>0)){w=this.a.e
w=w==null?null:w.e
u=w==null?5:w}v.w=A.o.D(u-1,1,120)},
$S:0}
C.erQ.prototype={
$0(){var w=this.a
return w.d1(new C.erN(w,this.b))},
$S:0}
C.erN.prototype={
$0(){var w,v=this.b,u=v.w
if(!(u>0)){w=this.a.e
w=w==null?null:w.e
u=w==null?5:w}v.w=A.o.D(u+1,1,120)},
$S:0}
C.eoe.prototype={
$0(){return this.a.d1(new C.eod(this.b))},
$S:0}
C.eod.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w-2,10,96)},
$S:0}
C.eof.prototype={
$0(){return this.a.d1(new C.eoc(this.b))},
$S:0}
C.eoc.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w+2,10,96)},
$S:0}
C.eoM.prototype={
$1(d){var w=x.gh
w=B.B(new B.K(D.anL,new C.eoL(),w),w.k("aj.E"))
return w},
$S:z+94}
C.eoL.prototype={
$1(d){var w=null
return B.zi(B.d(d.b,w,w,w,w,w,w,A.mD,w,w,w),48,d,x.fO)},
$S:z+95}
C.es1.prototype={
$2(d,e){var w=this.a,v=w?0:8
return new B.a6(v,w?8:0,null,null)},
$S:36}
C.es0.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=null,p=r.a,o=e===p.f,n=p.k5()?q:new C.erZ(p,r.b,d,e),m=r.c,l=m?1/0:112
m=m?72:64
w=B.m(8)
if(o)v=A.bj
else v=r.d?A.b2:A.cp
v=B.I(v,A.q,o?2:1)
u=r.d?A.cC:A.c
t=B.bY(0,C.hgL(r.b.r[e]),0,0,0)
s=B.m(4)
return B.aE(q,B.p(q,new B.an(A.W,q,A.aa,A.r,B.a([t,B.ao(4,B.p(q,B.d(""+(e+1),q,q,q,q,q,q,A.nm,q,q,q),A.f,q,q,new B.o(A.aX,q,q,s,q,q,A.n),q,q,q,q,A.ahv,q,q,q),q,q,4,q,q,q)],x.p),q),A.f,q,q,new B.o(u,q,v,w,q,q,A.n),q,m,q,q,q,q,q,l),A.y,!1,q,q,q,q,q,q,q,q,n,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.es_(p,e),q,q,q,q,q,q,!1,A.a8)},
$S:77}
C.es_.prototype={
$0(){var w=this.a
return w.m(new C.erV(w,this.b))},
$S:0}
C.erV.prototype={
$0(){var w=this.a
w.f=this.b
w.r=null
w.JD()},
$S:0}
C.erZ.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.b
if(q.r.length<=1){w=1
break}s=t.d
w=3
return B.b(B.bV(null,null,new C.erW(s,q),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:r=e
if(r==="dup"){q=t.a
q.m(new C.erX(q,s))
q.aQh()}else if(r==="del"){q=t.a
q.m(new C.erY(q,s))
q.aPt()}else if(r==="up")t.a.b1e(s,s-1)
else if(r==="down")t.a.b1e(s,s+1)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.erW.prototype={
$1(d){var w=null,v=B.a([B.dN(!1,w,w,w,!0,w,w,w,!0,w,D.bJz,w,w,w,w,new C.erR(d),!1,w,w,w,w,w,w,w,D.f8s,w,w,w),B.dN(!1,w,w,w,!0,w,w,w,!0,w,D.bJs,w,w,w,w,new C.erS(d),!1,w,w,w,w,w,w,w,A.w9,w,w,w)],x.p),u=this.a
if(u>0)v.push(B.dN(!1,w,w,w,!0,w,w,w,!0,w,D.bIK,w,w,w,w,new C.erT(d),!1,w,w,w,w,w,w,w,D.fgi,w,w,w))
if(u<this.b.r.length-1)v.push(B.dN(!1,w,w,w,!0,w,w,w,!0,w,D.bKL,w,w,w,w,new C.erU(d),!1,w,w,w,w,w,w,w,D.f8h,w,w,w))
return B.bm(!0,B.v(v,A.m,w,A.e,A.Q,0,A.p),!0,!1,A.af,!0,!0)},
$S:28}
C.erR.prototype={
$0(){B.a5(this.a,!1).N("dup")
return null},
$S:0}
C.erS.prototype={
$0(){B.a5(this.a,!1).N("del")
return null},
$S:0}
C.erT.prototype={
$0(){B.a5(this.a,!1).N("up")
return null},
$S:0}
C.erU.prototype={
$0(){B.a5(this.a,!1).N("down")
return null},
$S:0}
C.erX.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.erY.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.es2.prototype={
$0(){return this.a.a7k()},
$S:0}
C.enw.prototype={
$0(){var w=this.a
w.b4y()
w.ayx(null)},
$S:0}
C.env.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=B.m(4),n=B.a([new B.ac(0,A.G,A.w.j(0.35),A.dk,24)],x.V),m=this.b
if(m.f!=null){w=B.b0(m.e)
v=m.f
v.toString
v=new B.a7(A.ax,A.aC,A.x,B.a([w,B.b0(v)],x.O),p,p)
w=v}else w=p
v=m.f==null?B.b0(m.e):p
u=m.x
t=m.y
s=B.m(4)
if(m.f!=null){r=B.b0(m.e)
q=m.f
q.toString
q=new B.a7(A.ax,A.aC,A.x,B.a([r,B.b0(q)],x.O),p,p)
r=q}else r=p
s=B.a([B.bv(s,B.c_(A.ks,new B.o(m.f==null?B.b0(m.e):p,p,p,p,p,r,A.n),A.bd),A.aq)],x.p)
r=m.z
q=this.c
A.d.v(s,new B.K(r,new C.enu(this.a,e.b,e.d,q),B.T(r).k("K<1,r>")))
if(m.z.length===0)s.push(B.av(B.d("Use Insert \u2192 Text Box, Picture, or Shapes",p,p,p,p,p,p,B.l(p,p,q?A.az:A.bJ,p,p,p,p,p,p,p,p,p,p,p,A.a4,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p))
return B.c_(new B.an(A.W,p,A.aa,A.f,s,new B.cw("canvas_"+m.a+"_"+u+"_"+t,x.W)),new B.o(v,p,p,o,n,w,A.n),A.bd)},
$S:462}
C.enu.prototype={
$1(d){var w=this
return w.a.bCD(d,w.b,w.c,w.d)},
$S:z+23}
C.enj.prototype={
$0(){var w=this
if(w.b){w.a.MU(w.c)
return}if(w.d){w.a.a7i(w.c)
return}if(w.e){w.a.afD(w.c)
return}if(w.f)w.a.b53(w.c)},
$S:0}
C.enk.prototype={
$0(){this.a.MU(this.b)
return null},
$S:0}
C.enl.prototype={
$0(){return this.a.a1k(this.b.a)},
$S:0}
C.enm.prototype={
$1(d){var w=this,v=w.a,u=w.b
if(v.w===u.a)return
v.m(new C.eni(u,d,w.c,w.d))
v.Hg()
v.o_()
v.p0()},
$S:18}
C.eni.prototype={
$0(){var w=this,v=w.a,u=w.b.d
v.c=A.k.D(v.c+u.a/w.c,-0.3,1.2)
v.d=A.k.D(v.d+u.b/w.d,-0.3,1.2)},
$S:0}
C.enn.prototype={
$1(d){return this.a.ai2(this.b.a,d)},
$S:2}
C.enp.prototype={
$0(){var w,v,u=this
if(u.b){w=u.c
if(!C.fVq(w))u.a.MU(w)
return}if(!u.d)return
w=u.a
v=u.c
if(w.w===v.a)return
w.b53(v)},
$S:0}
C.eno.prototype={
$0(){return this.a.a1k(this.b.a)},
$S:0}
C.enq.prototype={
$1(d){var w=this,v=w.a
v.m(new C.enh(w.b,d,w.c,w.d))
v.Hg()
v.o_()
v.p0()},
$S:18}
C.enh.prototype={
$0(){var w=this,v=w.a,u=w.b.d
v.e=A.k.D(v.e+u.a/w.c,0.04,1.8)
u=u.b
v.f=A.k.D(v.f+u/w.d,0.04,1.8)
if(v.b===D.cQ)v.w=A.k.D(v.w+u*0.15,10,120)},
$S:0}
C.enr.prototype={
$1(d){var w=this.a
w.m(new C.eng(this.b,d))
w.Hg()
w.o_()
w.p0()},
$S:212}
C.eng.prototype={
$0(){var w=this.a,v=this.b.d
w.e=A.k.D(w.e*v,0.04,1.8)
w.f=A.k.D(w.f*v,0.04,1.8)
if(w.b===D.cQ)w.w=A.k.D(w.w*v,10,120)},
$S:0}
C.ens.prototype={
$0(){var w=this.a
w.m(new C.enf(this.b))
w.Hg()
w.o_()
w.p0()},
$S:0}
C.enf.prototype={
$0(){this.a.r=C.hgg()},
$S:0}
C.ent.prototype={
$0(){return this.a.a1k(this.b.a)},
$S:0}
C.epn.prototype={
$0(){var w=this.a
return w.m(new C.epm(w))},
$S:0}
C.epm.prototype={
$0(){return this.a.y=!1},
$S:0}
C.epo.prototype={
$1(d){return this.a.cz5(this.b.a,d)},
$S:2}
C.eos.prototype={
$1(d){var w
this.a.d1(d)
w=this.b
if(w!=null)w.$0()},
$S:165}
C.eot.prototype={
$1(d){return this.a.$1(new C.eor(this.b,d))},
$S:6}
C.eor.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eou.prototype={
$1(d){return this.a.$1(new C.eoq(this.b,d))},
$S:6}
C.eoq.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eov.prototype={
$1(d){return this.a.$1(new C.eop(this.b,d))},
$S:6}
C.eop.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.eow.prototype={
$1(d){return this.a.$1(new C.eoo(this.b,d))},
$S:6}
C.eoo.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.eox.prototype={
$1(d){return this.a.$1(new C.eon(this.b,d))},
$S:6}
C.eon.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eoy.prototype={
$1(d){return this.b.$1(new C.eom(this.a,this.c))},
$S:9}
C.eom.prototype={
$0(){return this.b.go=this.a.a},
$S:0}
C.eoz.prototype={
$1(d){return this.b.$1(new C.eol(this.a,this.c))},
$S:9}
C.eol.prototype={
$0(){return this.b.id=this.a.a},
$S:0}
C.eoA.prototype={
$1(d){var w=null,v=this.b,u=B.b0(d),t=v.Q===d,s=t?A.bj:A.cU
return B.aE(w,B.p(w,w,A.f,w,w,new B.o(u,w,B.I(s,A.q,t?2:1),w,w,w,A.a6),w,24,w,w,w,w,w,24),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eok(this.a,v,d),w,w,w,w,w,w,!1,A.a8)},
$S:470}
C.eok.prototype={
$0(){return this.a.$1(new C.eoh(this.b,this.c))},
$S:0}
C.eoh.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.eoB.prototype={
$1(d){return this.a.$1(new C.eoj(this.b,d))},
$S:1705}
C.eoj.prototype={
$0(){var w=this.b
return this.a.as=w.gK(w)},
$S:0}
C.eoC.prototype={
$1(d){var w=null
return B.aE(w,B.p(w,w,A.f,w,w,new B.o(B.b0(d),w,w,w,w,w,A.a6),w,22,w,w,w,w,w,22),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eoi(this.a,this.b,d),w,w,w,w,w,w,!1,A.a8)},
$S:470}
C.eoi.prototype={
$0(){return this.a.$1(new C.eog(this.b,this.c))},
$S:0}
C.eog.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.eoD.prototype={
$0(){var w,v=this
if(v.b){w=v.a.c
w.toString
w=B.a5(w,!1).pi()}else w=!1
if(w){w=v.a.c
w.toString
B.a5(w,!1).eI()}v.a.arb()},
$S:0}
C.eoG.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.fy
m===$&&B.c()
m=m.x
m===$&&B.c()
w=A.dB.av(0,m)
m=B.m(16)
v=B.m(16)
u=o.c
t=B.aq(u,A.b1,0.35+w*0.15)
t.toString
t=B.a([u,t],x.O)
s=B.I(A.c.j(0.3+w*0.2),A.q,1.2)
r=B.a([B.W(o.d,A.c,n,n,n,26)],x.p)
q=B.m(6)
p=B.I(u,A.q,1.2)
r.push(B.ao(2,B.p(n,B.W(A.tS,u,n,n,n,10),A.f,n,n,new B.o(A.c,n,p,q,n,n,A.n),n,n,n,n,A.n5,n,n,n),n,n,n,2,n,n))
return B.aF(!1,A.a1,!0,n,B.aK(!1,m,!0,B.ez(new B.a6(48,48,new B.an(A.A,n,A.aa,A.r,r,n),n),n,new B.o(n,n,s,v,n,new B.a7(A.ax,A.aC,A.x,t,n,n),A.n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.b,n,n,n,n,n,n,n),A.f,A.K,0,n,A.K,n,n,n,A.ag)},
$S:136}
C.emf.prototype={
$2(d,e){var w,v,u,t,s,r,q=this,p=null,o=q.a.fy
o===$&&B.c()
o=o.x
o===$&&B.c()
w=A.dB.av(0,o)
o=B.m(22)
v=B.m(22)
u=q.c
t=B.aq(u,A.b1,0.22+w*0.12)
t.toString
u=B.a([u,t,u.j(0.9)],x.O)
t=B.I(A.c.j(0.28+w*0.22),A.q,1.35)
s=A.c.j(0.14+w*0.08)
r=B.I(A.c.j(0.4+w*0.15),A.q,1)
return B.aF(!1,A.a1,!0,p,B.aK(!1,o,!0,B.ez(B.v(B.a([B.ea(A.A,B.p(p,B.W(q.d,A.c,p,p,p,26),A.f,p,p,new B.o(s,p,r,p,p,p,A.a6),p,48,p,p,p,p,p,48),1+w*0.06,p,p),A.ac,B.d(q.e,p,p,p,p,p,p,A.jn,A.L,p,p)],x.p),A.m,p,A.bb,A.j,0,A.p),p,new B.o(p,p,t,v,p,new B.a7(A.ax,A.aC,A.x,u,p,p),A.n),p,A.F3,1/0),p,!0,p,p,p,p,p,p,p,p,p,p,p,q.b,p,p,p,p,p,p,p),A.f,A.K,0,p,A.K,p,p,p,A.ag)},
$S:136}
C.eqk.prototype={
$1(d){var w=null,v=B.d(this.a,w,w,w,w,w,w,w,w,w,w),u=this.b,t=B.aL(w,A.T,!0,w,!0,A.r,w,B.aM(),u,w,w,w,w,w,2,A.amV,A.y,!0,w,!0,w,!1,w,A.ai,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,A.a9,w,w,w,w,w,w,w,w,w,w,w,w,!0,A.a5,w,A.am,w,w,w,w)
return B.ei(B.a([B.bK(!1,A.de,w,w,!0,w,w,new C.eqi(d),w,w),B.bJ(A.p4,new C.eqj(d,u),w)],x.p),w,w,w,t,w,w,w,w,v,w)},
$S:19}
C.eqi.prototype={
$0(){B.a5(this.a,!1).N(null)
return null},
$S:0}
C.eqj.prototype={
$0(){var w=this.b.a.a
B.a5(this.a,!1).N(w)
return null},
$S:0}
C.cZl.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.a,i=j.d
i===$&&B.c()
i=i.x
i===$&&B.c()
w=A.dB.av(0,i)
i=j.e
i===$&&B.c()
v=i.x
v===$&&B.c()
u=A.ev.av(0,A.k.D(v,0,1))
i=i.x
i===$&&B.c()
i=A.dV.av(0,i)
v=B.m(22)
t=B.aq(A.aK,A.d.gK(C.kr(j.a.c.w)?D.u_:M.ne),w*0.35)
t.toString
t=B.I(t,A.q,1.2)
s=x.V
r=B.a([new B.ac(w*2,A.G,A.d.gK(C.kr(j.a.c.w)?D.u_:M.ne).j(0.18+w*0.12),A.J,32+w*10),D.aa6],s)
q=B.m(22)
p=x.O
o=B.ao(k,B.p(k,k,A.f,k,k,new B.o(k,k,k,k,k,new B.bR(A.b0,0.9,A.x,k,0,B.a([A.d.gK(C.kr(j.a.c.w)?D.u_:M.ne).j(0.22+w*0.1),A.K],p),k,k),A.n),k,80,k,k,k,k,k,k),k,k,0,0,-28,k)
n=64+w*6
m=A.d.gK(C.kr(j.a.c.w)?D.u_:M.ne).j(0.28+w*0.14)
p=B.p(k,k,A.f,k,k,new B.o(k,k,k,k,k,new B.bR(A.A,0.5,A.x,k,0,B.a([m,A.d.gal(C.kr(j.a.c.w)?D.u_:M.ne).j(0.08),A.K],p),k,k),A.a6),k,n,k,k,k,k,k,n)
n=B.m(14)
m=j.a.c.w
l=C.kr(m)?D.u_:M.ne
s=B.a([new B.ac(0,A.G,A.d.gK(C.kr(m)?D.u_:M.ne).j(0.45+w*0.2),A.cv,18)],s)
m=x.p
l=B.a([p,B.ea(A.A,B.p(k,B.W(C.kr(j.a.c.w)?A.vp:A.pM,A.c,k,k,k,22),A.f,k,k,new B.o(k,k,k,n,s,new B.a7(A.ax,A.aC,A.x,l,k,k),A.n),k,46,k,k,k,k,k,46),1+w*0.04,k,k)],m)
s=B.a([new B.an(A.A,k,A.aa,A.r,l,k),A.S,B.d("PRESENTATION",k,k,k,k,k,k,B.l(k,k,A.d.gK(C.kr(j.a.c.w)?D.u_:M.ne).j(0.85+w*0.15),k,k,k,k,k,k,k,k,10,k,k,A.H,k,k,!0,k,1.4,k,k,k,k,k,k),A.L,k,k),A.fZ,B.d(j.a.c.b,k,2,A.a2,k,k,k,D.f0M,A.L,k,k),A.at,B.d(j.gcu9(),k,k,k,k,k,k,D.f5g,A.L,k,k),A.aA],m)
p=j.a.c
if(p.z){p=p.gRC()?"Shared by admin \xb7 editable for 4 hours":"Received copy \xb7 print or download only"
A.d.v(s,B.a([B.d(p,k,k,k,k,k,k,B.l(k,k,A.d.gK(C.kr(j.a.c.w)?D.u_:M.ne).j(0.9),k,k,k,k,k,k,k,k,11,k,k,A.O,k,k,!0,k,k,k,k,k,k,k,k),A.L,k,k),A.ac],m))}s.push(new C.Jb(A.xK,"Download PDF","pdf",A.d6,j.Iw(0),!1,k))
p=j.a.c
if(!p.z||p.gRC()){p=j.a.c.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"}else p=!1
if(p){p=j.a.c.w
A.d.v(s,B.a([A.an,new C.Jb(A.kN,"Transfer to "+C.hgi(p==null?"":p),"transfer_hati",A.aV,j.Iw(1),!1,k)],m))}p=j.a.c
if(!p.z){p=p.w
n=j.Iw(p==="hati_kuhowa"||p==="hati_kuhoweya"?2:1)
p=j.a.c.w
A.d.v(s,B.a([A.an,new C.Jb(D.bBf,"Rename presentation","rename",A.c8,n,!1,k),A.an,new C.Jb(A.aj9,"Duplicate","duplicate",A.b5,j.Iw(p==="hati_kuhowa"||p==="hati_kuhoweya"?3:2),!1,k)],m))}s.push(A.P)
p=j.a.c
if(p.z)p=1
else{p=p.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"?4:3}s.push(new C.Jb(A.e4,"Delete presentation","delete",A.ay,j.Iw(p),!0,k))
s.push(A.at)
p=j.a.c
if(p.z)p=2
else{p=p.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"?5:4}p=j.Iw(p)
n=j.a.c
if(n.z)n=2
else{n=n.w
n=n==="hati_kuhowa"||n==="hati_kuhoweya"?5:4}n=j.Iw(n)
s.push(B.dV(B.db(B.bK(!1,E.aPF,k,k,!0,k,k,new C.cZk(d),k,B.fv(k,k,k,k,k,k,k,k,k,k,k,A.bJ,k,k,k,A.au,k,D.brN,k,k,k,k,k,A.km,k,k)),n),new B.u(0,(1-p)*8)))
return B.ea(A.A,B.db(B.aF(!1,A.a1,!0,k,B.p(k,B.bv(q,new B.an(A.W,k,A.aa,A.r,B.a([o,new B.C(D.bqW,B.v(s,A.m,k,A.e,A.Q,0,A.p),k)],m),k),A.aq),A.f,k,A.UH,new B.o(A.aB,k,t,v,r,k,A.n),k,k,k,k,k,k,k,k),A.f,A.K,0,k,k,k,k,k,A.ag),i),0.88+u*0.12,k,k)},
$S:45}
C.cZk.prototype={
$0(){B.a5(this.a,!1).N(null)
return null},
$S:0}
C.cZH.prototype={
$0(){B.a5(this.a,!1).N(!1)
return null},
$S:0}
C.cZI.prototype={
$0(){B.a5(this.a,!1).N(!0)
return null},
$S:0}
C.cZi.prototype={
$1(d){var w=this.a
return w.m(new C.cZe(w))},
$S:23}
C.cZe.prototype={
$0(){return this.a.d=!0},
$S:0}
C.cZj.prototype={
$1(d){var w=this.a
return w.m(new C.cZd(w))},
$S:49}
C.cZd.prototype={
$0(){return this.a.d=!1},
$S:0}
C.cZh.prototype={
$0(){var w=this.a
return w.m(new C.cZf(w))},
$S:0}
C.cZf.prototype={
$0(){return this.a.d=!1},
$S:0}
C.cZg.prototype={
$0(){var w=this.a.a.e
B.a5(this.b,!1).N(w)
return null},
$S:0}
C.et_.prototype={
$0(){return $.biU=!$.biU},
$S:0}
C.esQ.prototype={
$0(){var w,v,u=this.a
if(u.c==null||!u.r)return
w=u.d
w===$&&B.c()
v=u.a.c
if(w<v.r.length-1||v.ch||u.gaTo())u.av2()},
$S:0}
C.esZ.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.esR.prototype={
$0(){return this.a.y=!0},
$S:0}
C.esS.prototype={
$0(){var w=this.a
if(w.c!=null&&w.y)w.av2()},
$S:0}
C.esM.prototype={
$0(){var w=this.a
w.y=!1
w.e=A.d.gK(w.a.c.r).r
w.d=0},
$S:0}
C.esN.prototype={
$0(){var w=this.a,v=this.b
w.e=w.a.c.r[v].r
w.d=v},
$S:0}
C.esO.prototype={
$0(){return this.a.y=!1},
$S:0}
C.esP.prototype={
$0(){var w,v,u=this.a
u.e=u.a.c.r[this.b].r
w=u.d
w===$&&B.c()
v=this.c
u.d=A.o.F(w-1+v,v)},
$S:0}
C.esX.prototype={
$2(d,e){var w=B.B(e,x.l)
if(d!=null)w.push(d)
return new B.an(A.A,null,A.b_,A.r,w,null)},
$S:1706}
C.esY.prototype={
$2(d,e){var w
if(e.gc3(e)===A.hS)return new B.cX(e,!1,d,null)
w=this.a
return w.cs5(w.e,d,e)},
$S:447}
C.esT.prototype={
$2(d,e){var w=B.dl(),v=w.a
v.$flags&2&&B.ak(v)
v[11]=0.001
v=this.a
w.fv((1-v.gp(0))*1.5708)
return B.fs(A.A,B.db(e,v.gp(0)),null,w,!0)},
$S:45}
C.esU.prototype={
$2(d,e){var w=B.dl(),v=w.a
v.$flags&2&&B.ak(v)
v[11]=0.001
v=this.a
w.jQ((1-v.gp(0))*1.5708)
return B.fs(A.A,B.db(e,v.gp(0)),null,w,!0)},
$S:45}
C.esV.prototype={
$2(d,e){var w=B.dl(),v=w.a
v.$flags&2&&B.ak(v)
v[11]=0.002
v=this.a
w.fv(v.gp(0)*0.8)
w.jQ(v.gp(0)*0.35)
return B.fs(A.A,B.db(e,v.gp(0)),null,w,!0)},
$S:45}
C.esW.prototype={
$2(d,e){var w=B.dl(),v=w.a
v.$flags&2&&B.ak(v)
v[11]=0.0025
v=this.a
w.fv(-v.gp(0)*1.2)
return B.fs(A.a7,B.db(e,v.gp(0)),null,w,!0)},
$S:45}
C.et0.prototype={
$2(d,e){var w,v=this,u=v.b,t=u==null
if(!t){w=v.a.gY7().r
w=w!=null&&w.a!=null}else w=!1
if(w){t=v.a
u=t.a.c.r[u]
t=t.gY7().x
t===$&&B.c()
return new C.b_K(u,v.c,t,null)}u=v.a.d
u===$&&B.c()
return new C.Ia(v.c,t,!0,new B.cw("cine"+u,x.W))},
$S:657}
C.et2.prototype={
$1(d){var w=this.a
if(d.b.a>B.aI(this.b,A.bT,x.w).w.a.a*0.55)w.av2()
else w.cgP()},
$S:49}
C.et1.prototype={
$0(){B.a5(this.a,!1).N(null)
return null},
$S:0}
C.fAh.prototype={
$4(d,e,f,g){var w=this.b
A.d.a9(w)
A.d.v(w,d)
w=this.a
w.a=e
w.b=f
w.c=g},
$S:472}
C.fAq.prototype={
$1(d){var w=null,v=this.a,u=v.r.length,t=u===1?"":"s"
t=B.d("Download a PDF that looks like your slides ("+u+" page"+t+"), or open the print view in your browser.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.75),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return B.ei(B.a([B.bK(!1,A.de,w,w,!0,w,w,new C.fAn(d),w,w),B.bK(!1,D.fnp,w,w,!0,w,w,new C.fAo(d,this.b,v),w,w),B.bJ(A.aPW,new C.fAp(d,v,this.c),w)],x.p),w,w,L.t9,new B.a6(320,w,t,w),w,w,w,w,D.foT,w)},
$S:19}
C.fAn.prototype={
$0(){B.a5(this.a,!1).N(null)
return null},
$S:0}
C.fAo.prototype={
$0(){var w=0,v=B.j(x.H),u=this
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:B.a5(u.a,!1).N(null)
C.fW4(u.b,u.c.b)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fAp.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:B.a5(u.a,!1).N(null)
t=u.b
w=2
return B.b(C.aOH(t),$async$$0)
case 2:s=e
r=u.c
w=r.e!=null?3:4
break
case 3:w=5
return B.b(C.aO6(r,s,t.b),$async$$0)
case 5:case 4:return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fAg.prototype={
$1(d){return d.a!==this.a.a},
$S:z+2}
C.ccl.prototype={
$2(d,e){var w
if(x.f.b(e)){w=J.q(e,"bundleId")
w=J.k(w==null?"":w)===this.a}else w=!1
return w},
$S:536}
C.fAm.prototype={
$1(d){return d.ae()},
$S:z+14}
C.f8D.prototype={
$1(d){return C.fW2(C.Ve(B.a1(d,x.N,x.z)),this.a)},
$S:z+96}
C.fJ1.prototype={
$3(d,e,f){return A.bH},
$C:"$3",
$R:3,
$S:90}
C.fJ2.prototype={
$4(d,e,f,g){var w=A.cr.av(0,e.gp(0))
return B.db(B.ea(A.A,D.fNh,0.94+w*0.06,null,null),w)},
$S:449}
C.fJ3.prototype={
$1(d){var w=this
return new C.Vg(w.a,w.b,w.c,w.d,null)},
$S:z+97}
C.esw.prototype={
$2(d,e){return d+e.r.length},
$S:z+13}
C.ess.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.esv.prototype={
$1(d){var w=this.a,v=w.a,u=v.c
v=v.f
return new C.Vh(u,this.b,w.gaMQ(),v,null)},
$S:z+99}
C.est.prototype={
$0(){return this.a.f=!0},
$S:0}
C.esu.prototype={
$0(){return this.a.f=!1},
$S:0}
C.esx.prototype={
$0(){return this.a.f=!0},
$S:0}
C.esy.prototype={
$0(){return this.a.f=!1},
$S:0}
C.esB.prototype={
$0(){B.a5(this.a,!1).N(null)
return null},
$S:0}
C.esC.prototype={
$0(){var w=this.a
return w.m(new C.esA(w))},
$S:0}
C.esA.prototype={
$0(){return this.a.d="one"},
$S:0}
C.esD.prototype={
$0(){var w=this.a
return w.m(new C.esz(w))},
$S:0}
C.esz.prototype={
$0(){return this.a.d="all"},
$S:0}
C.esE.prototype={
$1(d){return this.a.bHf(d,this.b)},
$S:z+100}
C.esr.prototype={
$0(){var w=this.a
return w.m(new C.esq(w,this.b))},
$S:0}
C.esq.prototype={
$0(){return this.a.e=this.b.a},
$S:0}
C.esF.prototype={
$0(){var w=this.a,v=this.b
w.d=v.b
w.e=v.a},
$S:0}
C.esG.prototype={
$0(){return this.a.f="Could not create QR. Check your connection and try again."},
$S:0}
C.esH.prototype={
$2(d,e){return d+e.r.length},
$S:z+13}
C.esI.prototype={
$0(){B.a5(this.a,!1).N(null)
return null},
$S:0}
C.esJ.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a.e
s.toString
w=3
return B.b(B.fI(new B.fB(s)),$async$$0)
case 3:s=t.b
if(s.e==null){w=1
break}s.I(x.q).f.R(D.eOr)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.em9.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.em8())},
$S:0}
C.em8.prototype={
$0(){},
$S:0}
C.ema.prototype={
$1(d){var w=this.a
if(w.c!=null)w.e.fG()},
$S:8}
C.em5.prototype={
$1(d){return this.a.m(new C.em4())},
$S:2}
C.em4.prototype={
$0(){},
$S:0}
C.em6.prototype={
$1(d){return this.a.aY9()},
$S:2}
C.em7.prototype={
$0(){B.a5(this.a,!1).N(null)
return null},
$S:0}
C.esL.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(t.d.pC(),$async$$0)
case 2:if(t.c!=null)t.m(new C.esK(t))
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.esK.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.fuA.prototype={
$1(d){var w=null,v=this.a,u=v.a
return B.ao(w,new B.es(new B.kb(this.c,new C.fuz(),w,w,x.ex),this.b),v.b,w,0,w,0,u)},
$S:224}
C.fuz.prototype={
$3(d,e,f){return new C.Ia(e,!1,!1,new B.cw(e.a,x.W))},
$S:z+102}
C.fuB.prototype={
$1(d){var w=null
return B.oe(!1,B.av(new C.bti(this.a,this.b,w),w,w,w),w,x.z)},
$S:273}
C.fuF.prototype={
$0(){var w=0,v=B.j(x.cc),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.aT.gms(),$async$$0)
case 3:w=4
return B.b(B.bN(A.n1,null,x.H),$async$$0)
case 4:w=5
return B.b($.aT.gms(),$async$$0)
case 5:s=$.aT.ak$.x.h(0,t.a)
r=s==null?null:s.gb8()
if(!(r instanceof B.pL))throw B.U("Could not draw the slide.")
u=r.lR(1)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1709}
C.fuG.prototype={
bj5(d){var w=0,v=B.j(x.fS),u,t,s,r
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(d.hp(A.fW),$async$$1)
case 3:r=f
if(r==null)throw B.U("Could not read the slide picture.")
t=(self.URL||self.webkitURL).createObjectURL(B.hL([J.fa(A.dH.gaP(r))],"image/png"))
t.toString
s=Am.fN0(t)
w=4
return B.b(new B.pR(s,"load",!1,x.ev).gK(0).cM(0,A.jv),$async$$1)
case 4:(self.URL||self.webkitURL).revokeObjectURL(t)
u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$1(d){return this.bj5(d)},
$S:1710}
C.fuC.prototype={
$1(d){var w,v=x.bu.a(d).data
if(v!=null){w=v.size
w.toString
w=w>0}else w=!1
if(w)this.a.push(v)},
$S:145}
C.fuD.prototype={
$1(d){var w=this.a
if((w.a.a&30)===0)w.fN(0)},
$S:145}
C.fuE.prototype={
$0(){return(self.URL||self.webkitURL).revokeObjectURL(this.a)},
$S:0}
C.f2Z.prototype={
$3(d,e,f){var w=null
return B.d(e,w,w,w,w,w,w,D.eYj,A.L,w,w)},
$S:1711}
C.f3_.prototype={
$3(d,e,f){var w=null,v=B.m(99)
return B.bv(v,B.lX(A.bm,w,A.dO,8,w,e===0?w:e,w),A.aq)},
$S:565}
C.eaF.prototype={
$1(d){this.a.Zj()
return null},
$S:13}
C.eaD.prototype={
$0(){return this.a.e=D.bmZ},
$S:0}
C.eaE.prototype={
$0(){var w=this.a.a
if(w.a<0)w=A.bx
return this.b.e=w},
$S:0}
C.ceU.prototype={
$1(d){return A.o.dv(1,d.a)},
$S:z+103}
C.ceV.prototype={
$2(d,e){return(d|e)>>>0},
$S:75};(function aliases(){var w=C.aKH.prototype
w.btD=w.q
w=C.aKa.prototype
w.bt5=w.q
w=C.aJW.prototype
w.bsQ=w.q
w=C.aK9.prototype
w.bt4=w.q
w=C.aKF.prototype
w.btB=w.q
w=C.aM_.prototype
w.bv5=w.q
w=C.aIR.prototype
w.brI=w.q
w=C.aKT.prototype
w.btP=w.q
w=C.aKU.prototype
w.btQ=w.q
w=C.b1p.prototype
w.bom=w.aBC})();(function installTearOffs(){var w=a._static_0,v=a._instance_0u,u=a._instance_1u,t=a._static_1,s=a.installStaticTearOff
w(C,"i0K","amv",104)
v(C.aHQ.prototype,"gc14","Ye",0)
var r
u(r=C.aws.prototype,"gctv","ctw",38)
v(r,"gc1Q","acm",0)
v(r=C.awo.prototype,"gaWK","DB",3)
v(r,"gc1N","c1O",3)
v(r,"gavl","xl",0)
v(r,"gavm","I9",0)
t(C,"i18","hxC",105)
v(C.aCw.prototype,"gc4m","c4n",3)
s(C,"i1j",0,null,["$4$paper$photo$request$template"],["fBG"],106,0)
s(C,"i1i",0,null,["$5$doc$history$instruction$photo$template"],["bAr"],107,0)
v(r=C.aCP.prototype,"gc53","It",0)
v(r,"gbGI","W6",0)
v(r,"gc56","ad9",0)
v(r,"gc55","Z5",0)
v(r,"gaXP","DT",0)
v(C.aCT.prototype,"gc5b","Z7",0)
v(r=C.aEf.prototype,"gaY1","Pc",0)
v(r,"gclx","b1k",3)
v(r,"gcuU","azO",86)
v(r,"gbKq","a9f",0)
v(r,"gc5C","A8",0)
v(r=C.aG9.prototype,"gcfy","a_s",0)
v(r,"gcfG","a_v",0)
v(r,"gbzH","a7I",0)
v(r,"gc5G","adm",0)
v(C.aG8.prototype,"gc5H","adn",0)
v(C.aA9.prototype,"gbyG","a7v",0)
v(C.ayx.prototype,"gc5I","Zi",0)
w(C,"i1w","i_r",12)
w(C,"i1u","hXo",12)
w(C,"i1v","hZr",12)
v(r=C.aD8.prototype,"gcy1","cy2",3)
v(r,"gcjO","cjP",3)
u(r,"gDZ","ae1",7)
v(r,"gbEk","aqm",3)
u(r,"gE_","aZi",7)
v(r,"gc7P","adJ",0)
v(r,"gc6G","adI",0)
v(r,"gc9Z","ae2",0)
v(r,"gbGF","a8R",0)
v(r,"gcaS","ZS",0)
v(r,"gcaT","aej",0)
v(r,"gcbp","aeq",0)
v(r,"gcab","ae5",0)
v(r,"gbKA","a9j",0)
v(r,"gaQg","aQh",3)
v(r,"gaPs","aPt",3)
v(r,"gaLa","aLb",3)
v(r,"gaPr","arb",3)
u(r,"gbyX","byY",80)
v(r,"gazl","b4l",3)
v(r,"gc6I","c6J",3)
v(r,"gbVs","bVt",3)
v(r,"gbJ5","bJ6",3)
v(r=C.aDb.prototype,"gcwU","cwV",3)
v(r,"gcwz","cwA",3)
t(C,"i1x","i_I",2)
v(r=C.aD9.prototype,"gc5O","Iy",0)
v(r,"gcnw","QD",0)
v(r,"gc5L","Ix",0)
v(r,"gczg","a1Y",0)
v(r,"gcbB","aex",0)
v(C.aD7.prototype,"gc5P","aY9",3)
v(r=C.aDa.prototype,"gbLl","a9t",0)
u(r,"gc5M","c5N",101)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(B.aC,[C.nL,C.R7,C.bG0,C.bEm,C.cuP,C.cuN,C.bM9,C.b75,C.cuO,C.bCX,C.ceO,C.ceM,C.ceN,C.ceL,C.arD,C.ceK,C.bN2,C.oc,C.aDK,C.ji,C.nx,C.a78,C.z5,C.l9,C.oo,C.lZ,C.z7,C.nB,C.a7g,C.aq0,C.b_L,C.ea4,C.l6,C.Ee,C.er,C.iV,C.E5,C.xf,C.eI,C.lA,C.hZ,C.jB,C.a7h,C.aef,C.b_M,C.b1p,C.a26])
u(B.ke,[C.cCF,C.bXu,C.fpN,C.cEa,C.cDx,C.fvi,C.dVO,C.dVN,C.eaI,C.eaH,C.fwH,C.f9L,C.f9M,C.caJ,C.caK,C.caL,C.ef5,C.eNy,C.eMW,C.eMV,C.eNZ,C.eNw,C.eNp,C.eNI,C.eOo,C.fgV,C.eUm,C.eUl,C.eUP,C.ea7,C.fAd,C.dRx,C.fGA,C.fx3,C.ccd,C.ccb,C.ccg,C.fxy,C.fxz,C.fxA,C.fxB,C.cbY,C.cbZ,C.dDL,C.cbV,C.fxx,C.f0x,C.dPJ,C.cbO,C.e9O,C.fv7,C.epK,C.eq8,C.eq5,C.eq4,C.eqf,C.eqe,C.erK,C.erJ,C.epZ,C.epY,C.emy,C.enI,C.eqH,C.es1,C.es0,C.env,C.eoG,C.emf,C.cZl,C.esX,C.esY,C.esT,C.esU,C.esV,C.esW,C.et0,C.ccl,C.esw,C.esH,C.ceV])
u(B.hT,[C.cCG,C.cCH,C.bN3,C.fnh,C.bXt,C.bXw,C.fD4,C.f1v,C.f1m,C.f1C,C.f8E,C.f8F,C.fpO,C.fpM,C.fCz,C.fmY,C.fDq,C.cE0,C.cE5,C.cE7,C.cE3,C.cE8,C.cE1,C.cE9,C.cDX,C.cDU,C.cDT,C.cE_,C.cDs,C.cDq,C.fuk,C.ful,C.fd2,C.fvj,C.fvp,C.fc5,C.c72,C.fui,C.fuj,C.fp9,C.fpa,C.fvo,C.fvk,C.fvm,C.fvn,C.fvl,C.fGS,C.fpd,C.fpe,C.fph,C.fpi,C.fpl,C.fpm,C.fIk,C.fab,C.fIv,C.ee_,C.ee0,C.ee1,C.edI,C.edU,C.edV,C.edX,C.caI,C.caG,C.caH,C.fuZ,C.fv0,C.fv_,C.f9N,C.f9O,C.fIy,C.efa,C.efb,C.ef2,C.ef3,C.ef6,C.ef7,C.fIO,C.eOp,C.eNP,C.eNz,C.eNM,C.eMR,C.eMS,C.eMT,C.eMX,C.eMY,C.eOe,C.eOl,C.eOn,C.eNY,C.eO_,C.eO3,C.eO4,C.eO5,C.eO9,C.eO0,C.eO1,C.eN8,C.eN9,C.eNa,C.eNb,C.eNc,C.eNd,C.eNe,C.eNf,C.eNg,C.eMu,C.eMv,C.eMw,C.eMx,C.eMz,C.eMA,C.eN2,C.eN3,C.eN4,C.eN5,C.eN6,C.eME,C.eMF,C.eMG,C.eMH,C.eNo,C.eNH,C.fsn,C.fsm,C.cc4,C.fgU,C.fA9,C.fA2,C.fA5,C.fy1,C.fy2,C.fy3,C.fsu,C.fst,C.fss,C.fsq,C.f9I,C.f9J,C.f9K,C.fJ_,C.eUo,C.eUp,C.eUi,C.eUc,C.eUI,C.eUJ,C.eUL,C.eUM,C.eUH,C.fIZ,C.eU3,C.fg9,C.ea6,C.fAb,C.fAc,C.fAe,C.fA7,C.fA8,C.fIc,C.dg9,C.dgf,C.ea5,C.f6d,C.f6f,C.f6e,C.f6c,C.fty,C.ftA,C.f8d,C.fzE,C.fzF,C.fzG,C.fzR,C.fzW,C.fzX,C.fzY,C.fzZ,C.fA_,C.fA0,C.fA1,C.fzH,C.fzI,C.fzJ,C.fzK,C.fzL,C.fzM,C.fzN,C.fzO,C.fzP,C.fzQ,C.fzS,C.fzT,C.fzU,C.fzV,C.fro,C.ffE,C.ffD,C.fAk,C.dRy,C.dRw,C.eTd,C.c6E,C.c6G,C.fGC,C.d5u,C.d5w,C.fGB,C.fGz,C.fIY,C.fx_,C.d54,C.fpp,C.fpq,C.cc2,C.cc3,C.cc1,C.cbS,C.cbT,C.cbP,C.cbQ,C.cbR,C.ccj,C.cce,C.cc9,C.cca,C.ccc,C.ccf,C.cch,C.fxC,C.cbX,C.cc_,C.cc0,C.cc6,C.cc7,C.fAr,C.fzy,C.cbW,C.cbU,C.fxw,C.fif,C.cbN,C.eQR,C.fl4,C.esn,C.eoN,C.eoO,C.eqn,C.eqb,C.eqc,C.eoa,C.es8,C.es9,C.esa,C.enz,C.epR,C.epT,C.ept,C.epq,C.eoJ,C.eoK,C.epA,C.enB,C.epM,C.epN,C.epL,C.epP,C.epO,C.eq6,C.eq7,C.eq9,C.eq2,C.enU,C.enR,C.eqg,C.enJ,C.es7,C.emh,C.enM,C.enL,C.en_,C.en4,C.en2,C.en0,C.esf,C.esg,C.esh,C.ese,C.erM,C.erL,C.erF,C.erH,C.erx,C.es5,C.es3,C.emp,C.eml,C.eoH,C.en8,C.emA,C.emz,C.emW,C.emX,C.eo8,C.ena,C.ene,C.eq_,C.ery,C.erz,C.erA,C.erB,C.enD,C.enE,C.enF,C.ep9,C.eo4,C.enX,C.eo3,C.epj,C.epk,C.er6,C.er8,C.ers,C.eru,C.er9,C.era,C.en6,C.eoM,C.eoL,C.erW,C.enu,C.enm,C.enn,C.enq,C.enr,C.epo,C.eos,C.eot,C.eou,C.eov,C.eow,C.eox,C.eoy,C.eoz,C.eoA,C.eoB,C.eoC,C.eqk,C.cZi,C.cZj,C.et2,C.fAh,C.fAq,C.fAg,C.fAm,C.f8D,C.fJ1,C.fJ2,C.fJ3,C.esv,C.esE,C.ema,C.em5,C.em6,C.fuA,C.fuz,C.fuB,C.fuG,C.fuC,C.fuD,C.f2Z,C.f3_,C.eaF,C.ceU])
u(B.j3,[C.cCI,C.f1r,C.f1w,C.f1x,C.f1s,C.f1t,C.f1u,C.f1k,C.f1l,C.f1n,C.f1o,C.f1B,C.f1A,C.f1q,C.f1p,C.f1y,C.f1z,C.f1E,C.f1F,C.f1D,C.cE2,C.cE6,C.cE4,C.cDV,C.cDW,C.cDY,C.cDR,C.cDS,C.cDZ,C.cDQ,C.cDP,C.cDO,C.cDh,C.cDg,C.cDj,C.cDr,C.cDk,C.cDi,C.cDm,C.cDn,C.cDo,C.cDl,C.cDp,C.cDt,C.cDu,C.cDv,C.cDw,C.fp7,C.fp8,C.fp5,C.fp6,C.e5t,C.e5r,C.e5s,C.e5u,C.e5v,C.dVM,C.fpb,C.fpc,C.fpf,C.fpg,C.fpj,C.fpk,C.eaG,C.fx6,C.fx5,C.edZ,C.edY,C.edC,C.edy,C.edJ,C.edK,C.edL,C.edE,C.edF,C.edG,C.edH,C.edD,C.edA,C.edB,C.edR,C.edS,C.edQ,C.edT,C.edP,C.edO,C.edN,C.edW,C.edM,C.edz,C.ef9,C.eeY,C.eeZ,C.ef4,C.ef_,C.ef1,C.ef0,C.ef8,C.eNh,C.eNF,C.eN0,C.eN1,C.eMZ,C.eN_,C.eNL,C.eNK,C.eNJ,C.eNO,C.eNN,C.eMQ,C.eMU,C.eMP,C.eMO,C.eML,C.eMN,C.eMM,C.eOm,C.eOf,C.eOd,C.eOg,C.eOc,C.eOh,C.eOb,C.eOi,C.eOj,C.eOk,C.eOa,C.eNX,C.eNS,C.eO2,C.eNW,C.eO6,C.eNV,C.eO7,C.eNU,C.eO8,C.eNT,C.eNC,C.eNB,C.eND,C.eNA,C.eNE,C.eNu,C.eNt,C.eNv,C.eNs,C.eNr,C.eNq,C.eMy,C.eMt,C.eMI,C.eMD,C.eMJ,C.eMC,C.eMK,C.eMB,C.eNx,C.eNl,C.eNk,C.eNm,C.eNj,C.eNn,C.eNi,C.eNG,C.eNR,C.eNQ,C.eN7,C.fA4,C.fA6,C.fAa,C.fsr,C.fuS,C.fuQ,C.fuR,C.eUq,C.eUr,C.eUn,C.eUh,C.eUg,C.eUj,C.eUk,C.eU6,C.eU7,C.eU9,C.eUa,C.eUb,C.eU8,C.eUd,C.eUE,C.eUF,C.eUD,C.eUG,C.eUC,C.eUB,C.eUA,C.eUK,C.eUz,C.eUy,C.eUx,C.eUN,C.eUw,C.eUO,C.eUv,C.eUu,C.eUe,C.eUf,C.eUt,C.eUs,C.eU_,C.eU0,C.eU1,C.eU2,C.eTZ,C.eU4,C.eU5,C.dg8,C.dga,C.dgd,C.dge,C.dgc,C.dgb,C.ftz,C.frp,C.c6F,C.c6H,C.d5n,C.d5s,C.d5t,C.d5r,C.d5q,C.d5v,C.d5p,C.d5o,C.d5x,C.fGy,C.dc8,C.dc9,C.dca,C.fpn,C.fpo,C.cck,C.emb,C.emc,C.emd,C.eme,C.fid,C.fie,C.dPL,C.dPK,C.d2j,C.d2i,C.esp,C.eso,C.eoP,C.erv,C.esl,C.eql,C.esb,C.esc,C.esm,C.epu,C.enx,C.eny,C.epS,C.eps,C.epp,C.epr,C.epv,C.epw,C.epx,C.epy,C.epz,C.epB,C.enC,C.epE,C.epF,C.epG,C.epH,C.epI,C.epJ,C.epD,C.epQ,C.eq3,C.eq1,C.eqa,C.epC,C.enS,C.enT,C.enV,C.eqd,C.eqh,C.emw,C.enQ,C.enO,C.eqp,C.enK,C.eqo,C.enA,C.eob,C.es6,C.erw,C.emx,C.emu,C.emk,C.emg,C.emi,C.enN,C.emZ,C.en3,C.en1,C.emY,C.eq0,C.esi,C.erI,C.erD,C.erE,C.erG,C.eoF,C.eoE,C.es4,C.emn,C.emo,C.emq,C.emr,C.emv,C.emm,C.eqm,C.esd,C.eoI,C.en7,C.emj,C.eo9,C.ems,C.emB,C.emC,C.emD,C.emO,C.emR,C.emS,C.emT,C.emU,C.emV,C.emE,C.emF,C.emG,C.emH,C.emI,C.emJ,C.emK,C.emL,C.emM,C.emN,C.emP,C.emQ,C.eo7,C.eo6,C.eo5,C.emt,C.enb,C.en9,C.enc,C.end,C.enP,C.epW,C.epX,C.epU,C.epV,C.erC,C.enH,C.enG,C.ep8,C.ep7,C.epa,C.ep6,C.epb,C.ep5,C.epc,C.ep4,C.epd,C.ep3,C.epe,C.ep2,C.epf,C.ep1,C.epg,C.ep0,C.eoU,C.eoV,C.eoW,C.eoT,C.eoX,C.eoS,C.eoY,C.eoR,C.eoZ,C.eoQ,C.ep_,C.eo1,C.eo2,C.enW,C.enY,C.enZ,C.eo_,C.eo0,C.esj,C.esk,C.epi,C.eph,C.epl,C.eqI,C.eqJ,C.eqK,C.eqV,C.er5,C.erg,C.ern,C.ero,C.erp,C.erq,C.err,C.eqL,C.eqM,C.eqN,C.eqO,C.eqP,C.eqQ,C.eqR,C.eqS,C.eqT,C.eqU,C.eqW,C.eqX,C.eqY,C.eqZ,C.er_,C.er0,C.er1,C.er2,C.er3,C.eqy,C.er4,C.eqG,C.eqF,C.er7,C.eqE,C.equ,C.ert,C.eqD,C.eqt,C.eqr,C.eqC,C.eqs,C.eqq,C.erb,C.eqB,C.erc,C.erd,C.ere,C.erf,C.eqA,C.erh,C.eri,C.erj,C.eqz,C.erk,C.eqx,C.erl,C.eqw,C.erm,C.eqv,C.en5,C.erP,C.erO,C.erQ,C.erN,C.eoe,C.eod,C.eof,C.eoc,C.es_,C.erV,C.erZ,C.erR,C.erS,C.erT,C.erU,C.erX,C.erY,C.es2,C.enw,C.enj,C.enk,C.enl,C.eni,C.enp,C.eno,C.enh,C.eng,C.ens,C.enf,C.ent,C.epn,C.epm,C.eor,C.eoq,C.eop,C.eoo,C.eon,C.eom,C.eol,C.eok,C.eoh,C.eoj,C.eoi,C.eog,C.eoD,C.eqi,C.eqj,C.cZk,C.cZH,C.cZI,C.cZe,C.cZd,C.cZh,C.cZf,C.cZg,C.et_,C.esQ,C.esZ,C.esR,C.esS,C.esM,C.esN,C.esO,C.esP,C.et1,C.fAn,C.fAo,C.fAp,C.ess,C.est,C.esu,C.esx,C.esy,C.esB,C.esC,C.esA,C.esD,C.esz,C.esr,C.esq,C.esF,C.esG,C.esI,C.esJ,C.em9,C.em8,C.em4,C.em7,C.esL,C.esK,C.fuF,C.fuE,C.eaD,C.eaE])
t(C.aQ2,B.J)
u(B.m3,[C.a33,C.avV,C.auC,C.xd,C.xg,C.kM,C.t3,C.B_,C.rg,C.vG,C.aqA,C.Ib,C.aq_,C.uu,C.mp,C.hw,C.a7T])
u(C.bM9,[C.cuQ,C.bMa])
u(C.ceO,[C.ceS,C.arC])
t(C.ceR,C.ceM)
t(C.ceQ,C.ceL)
t(C.ceT,C.ceQ)
t(C.ceP,C.ceN)
t(C.ceJ,C.ceK)
t(C.b8E,B.oF)
t(C.coM,B.au3)
t(C.a7F,B.x0)
t(C.aUq,B.dG)
t(C.azs,B.asX)
u(B.ag,[C.a06,C.XU,C.XS,C.apb,C.V1,C.V4,C.a_a,C.a_F,C.a_E,C.aCI,C.Z2,C.MR,C.YB,C.YW,C.and,C.aHx,C.Ug,C.ayh,C.a6Z,C.Ni,C.axE,C.Jb,C.ZN,C.Vg,C.Vh,C.aD6,C.aq4,C.a7_])
u(B.ah,[C.aHQ,C.aws,C.awo,C.aCw,C.aCP,C.aCT,C.aEf,C.aG9,C.aG8,C.aKH,C.aA9,C.aKa,C.ayx,C.beu,C.aJW,C.aM_,C.aK9,C.bcn,C.aKF,C.aKT,C.aIR,C.bb9,C.aKU,C.aD9,C.biT,C.aD7,C.aDa,C.biC])
u(B.au,[C.awq,C.aco,C.abO,C.bhE,C.acr,C.ae5,C.b_n,C.bqV,C.b_H,C.bkc,C.bpv,C.aYB,C.b_K,C.acu,C.acM,C.b_I,C.Ia,C.aYE,C.bbo,C.OX,C.Jj,C.bg0,C.bg_,C.bti])
u(B.GI,[C.baR,C.bsj,C.aI9,C.bdx,C.bpT])
u(B.mG,[C.baQ,C.b7n,C.bpQ,C.ban,C.bdV,C.bg6,C.bd0,C.bdS,C.bdz,C.bmn,C.b8w,C.b89,C.btf,C.bqi,C.bpr,C.bcU,C.b_F,C.boo,C.bpo])
t(C.biz,C.aKH)
t(C.bhW,C.aKa)
t(C.bhG,C.aJW)
t(C.bsM,C.aM_)
t(C.bhT,C.aK9)
t(C.bix,C.aKF)
t(C.bvA,C.aKT)
t(C.aD8,C.bvA)
t(C.bba,C.aIR)
t(C.aDb,C.aKU)
t(C.bt6,B.iO)
t(C.a7S,B.km)
t(C.ceW,C.b1p)
t(C.ahe,C.a26)
u(B.WU,[C.aPT,C.aRm])
t(C.avx,C.aPT)
w(C.aKH,B.c9)
w(C.aKa,B.c9)
w(C.aJW,B.c9)
w(C.aK9,B.c9)
w(C.aKF,B.c9)
w(C.aM_,B.c9)
w(C.aIR,B.eT)
w(C.aKT,B.c9)
v(C.bvA,B.ew)
w(C.aKU,B.c9)})()
B.jT(b.typeUniverse,JSON.parse('{"aQC":{"hF":["aQC"]},"nL":{"aQC":[],"hF":["aQC"]},"aQ2":{"J":["R7"],"J.E":"R7"},"b8E":{"oF":[]},"a7F":{"x0":[],"o5":[]},"aUq":{"dG":[],"cy":[],"r":[]},"azs":{"aS":[],"d5":["aS"],"aR":[],"ct":[]},"a06":{"ag":[],"r":[]},"aHQ":{"ah":["a06"]},"XU":{"ag":[],"r":[]},"XS":{"ag":[],"r":[]},"aws":{"ah":["XU"]},"awo":{"ah":["XS"]},"awq":{"au":[],"r":[]},"apb":{"ag":[],"r":[]},"aCw":{"ah":["apb"]},"aco":{"au":[],"r":[]},"abO":{"au":[],"r":[]},"acr":{"au":[],"r":[]},"ae5":{"au":[],"r":[]},"bhE":{"au":[],"r":[]},"V1":{"ag":[],"r":[]},"aCP":{"ah":["V1"]},"b_n":{"au":[],"r":[]},"baR":{"aB":[]},"baQ":{"aB":[]},"bsj":{"aB":[]},"b7n":{"aB":[]},"bpQ":{"aB":[]},"V4":{"ag":[],"r":[]},"aCT":{"ah":["V4"]},"ban":{"aB":[]},"a_a":{"ag":[],"r":[]},"aEf":{"ah":["a_a"]},"bdV":{"aB":[]},"a_F":{"ag":[],"r":[]},"a_E":{"ag":[],"r":[]},"aCI":{"ag":[],"r":[]},"Z2":{"ag":[],"r":[]},"aG9":{"ah":["a_F"]},"aG8":{"ah":["a_E"]},"biz":{"ah":["aCI"]},"bg6":{"aB":[]},"aA9":{"ah":["Z2"]},"bqV":{"au":[],"r":[]},"b_H":{"au":[],"r":[]},"bkc":{"au":[],"r":[]},"MR":{"ag":[],"r":[]},"YB":{"ag":[],"r":[]},"bhW":{"ah":["MR"]},"bpv":{"au":[],"r":[]},"bd0":{"aB":[]},"aYB":{"au":[],"r":[]},"ayx":{"ah":["YB"]},"YW":{"ag":[],"r":[]},"beu":{"ah":["YW"]},"bdS":{"aB":[]},"bdz":{"aB":[]},"bmn":{"aB":[]},"b8w":{"aB":[]},"b89":{"aB":[]},"btf":{"aB":[]},"bqi":{"aB":[]},"bpr":{"aB":[]},"bcU":{"aB":[]},"and":{"ag":[],"r":[]},"b_K":{"au":[],"r":[]},"bhG":{"ah":["and"]},"acu":{"au":[],"r":[]},"acM":{"au":[],"r":[]},"aHx":{"ag":[],"r":[]},"Ug":{"ag":[],"r":[]},"Ia":{"au":[],"r":[]},"ayh":{"ag":[],"r":[]},"a6Z":{"ag":[],"r":[]},"b_I":{"au":[],"r":[]},"b_F":{"aB":[]},"bsM":{"ah":["aHx"]},"aI9":{"aB":[]},"bhT":{"ah":["Ug"]},"bcn":{"ah":["ayh"]},"bix":{"ah":["a6Z"]},"aYE":{"au":[],"r":[]},"bdx":{"aB":[]},"boo":{"aB":[]},"bpo":{"aB":[]},"axE":{"ag":[],"r":[]},"Jb":{"ag":[],"r":[]},"ZN":{"ag":[],"r":[]},"Jj":{"au":[],"r":[]},"Ni":{"ag":[],"r":[]},"aD8":{"ah":["Ni"],"ew":[]},"bba":{"ah":["axE"]},"bbo":{"au":[],"r":[]},"bb9":{"ah":["Jb"]},"OX":{"au":[],"r":[]},"aDb":{"ah":["ZN"]},"bpT":{"aB":[]},"bg0":{"au":[],"r":[]},"bg_":{"au":[],"r":[]},"Vg":{"ag":[],"r":[]},"Vh":{"ag":[],"r":[]},"aD6":{"ag":[],"r":[]},"aq4":{"ag":[],"r":[]},"aD9":{"ah":["Vg"]},"biT":{"ah":["Vh"]},"aD7":{"ah":["aD6"]},"bt6":{"iO":[]},"aDa":{"ah":["aq4"]},"bti":{"au":[],"r":[]},"a7_":{"ag":[],"r":[]},"biC":{"ah":["a7_"]},"a7S":{"km":["fr<eL>"],"k8":["fr<eL>"]},"ahe":{"a26":[]},"aPT":{"iZ":[],"fe":[]},"avx":{"iZ":[],"fe":[]},"aRm":{"iZ":[],"fe":[]}}'))
var y={z:"Amri ya kifalme \xb7 bendi za muhuri juu na chini.",L:"Kichwa cha Mtu: Dollar elfu ishirini ($20,000)",f:"Mimi [Jina la Baba wa Binti], wa jamaa ya [Jina la Jamii ya Binti], Nyumba ya [Jina la Nyumba ya Binti]. Nimehowesha binti wangu aitwaye [Jina la Binti], na ndugu [Jina la Kijana], wa jamaa ya [Jina la Jamii ya Mume], Nyumba ya [Jina la Nyumba ya Mume], kijana wa [Jina la Baba wa Mume]. Makubaliano haya yanathibitishwa rasmi na pande zote mbili ili kuweka kumbukumbu na kuimarisha uhusiano mwema kati ya familia zote mbili.",O:"Mimi [Jina la Baba wa Mume], wa jamaa ya [Jina la Jamii ya Mume], Nyumba ya [Jina la Nyumba ya Mume]. Nimetowa mahali ya kuhoweya kijana wangu aitwaye [Jina la Kijana] na [Jina la Binti], binti wa [Jina la Baba wa Binti], wa jamaa ya [Jina la Jamii ya Binti], Nyumba ya [Jina la Nyumba ya Binti]. Makubaliano haya yanathibitishwa rasmi na pande zote mbili ili kuweka kumbukumbu na kuimarisha uhusiano mwema kati ya familia zote mbili.",s:"Mpaka mwembamba wa dhahabu \xb7 vichwa vya bluu ya kifalme.",Q:"Mpaka mwembamba wa dhahabu \xb7 vichwa vya dhahabu.",H:"Nguo ya kente yenye dirisha la karatasi katikati.",n:"Nguo ya udongo yenye alama \xb7 karatasi ndani.",M:'PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".',S:"The AI sent something I could not read. Try again.",g:"Your story appears here. Add a picture, then ask the AI to write it."}
var x=(function rtii(){var w=B.ax
return{bu:w("L4"),U:w("vc<pQ>"),bz:w("w"),M:w("eW<n>"),bo:w("jv"),g7:w("LA"),gc:w("ay<it?>"),bq:w("ay<~>"),cc:w("LM"),fS:w("Dw"),an:w("akO"),bm:w("P<R7>"),X:w("P<a2e>"),f3:w("P<aQC>"),aK:w("P<n1>"),V:w("P<ac>"),O:w("P<w>"),fA:w("P<ls>"),d5:w("P<ay<bu<H,+icon3d,picture(n?,n?)>>>"),bH:w("P<ay<dD>>"),fG:w("P<ay<~>>"),aF:w("P<n6>"),cd:w("P<ai<ji>>"),ez:w("P<a3<n,aC>>"),d:w("P<a3<n,@>>"),B:w("P<ml>"),h:w("P<ji>"),gE:w("P<z5>"),k:w("P<oc>"),g:w("P<lA>"),D:w("P<hZ>"),u:w("P<eI>"),m:w("P<uu>"),i:w("P<hw>"),aC:w("P<a7g>"),o:w("P<z7>"),e3:w("P<aC>"),dN:w("P<u>"),v:w("P<hn>"),cR:w("P<iM>"),J:w("P<j9>"),gx:w("P<oZ<n>>"),f2:w("P<+(a0,n)>"),L:w("P<+(n,n)>"),aD:w("P<+data,mimeType(n,n)>"),G:w("P<+(N,N)>"),ek:w("P<+(H,n)>"),n:w("P<+(H,H)>"),r:w("P<cP>"),s:w("P<n>"),aS:w("P<iO>"),p:w("P<r>"),eR:w("P<fe>"),fT:w("P<b75>"),bx:w("P<aDK>"),gz:w("P<aef>"),x:w("P<N>"),t:w("P<H>"),dS:w("P<aB?>"),bA:w("P<u?>"),Z:w("P<H?>"),cA:w("P<ci>"),A:w("cq<ah<ag>>"),gL:w("ai<oc>"),R:w("ai<hZ>"),j:w("ai<@>"),bW:w("ai<H>"),e:w("bu<H,+icon3d,picture(n?,n?)>"),P:w("a3<n,@>"),f:w("a3<@,@>"),gI:w("a3<H,+icon3d,picture(n?,n?)>"),bR:w("K<hw,r>"),eC:w("K<nB,n>"),cT:w("K<jB,C>"),dv:w("K<n,n>"),f0:w("K<n,r>"),gN:w("K<H,pt>"),gh:w("K<mp,jk<mp>>"),w:w("iz"),ei:w("it"),g2:w("r6"),fB:w("E5"),b6:w("z5"),gX:w("a78"),dt:w("l9"),ea:w("oc"),bt:w("lA"),I:w("hZ"),F:w("eI"),fO:w("mp"),ff:w("uu"),fP:w("hw"),Q:w("vG"),dO:w("aq0"),a:w("co"),C:w("aC"),dw:w("arD"),di:w("a7T"),Y:w("eL"),fz:w("+(n,n)"),dL:w("+(H,H)"),eb:w("+claimCode,qrPayload(n?,n)"),aH:w("+icon3d,picture(n?,n?)"),cz:w("EA"),dB:w("dw<u>"),bJ:w("dw<n>"),_:w("dZ<n>"),N:w("n"),fw:w("pQ"),bO:w("ar"),K:w("bn<u>"),b:w("bn<N>"),E:w("dD"),W:w("cw<n>"),ac:w("cw<H>"),ex:w("kb<lA>"),cI:w("kb<n>"),cl:w("kb<N>"),b4:w("a2<l6>"),a8:w("a2<lZ>"),fR:w("a2<+(n,n)>"),co:w("e7<u>"),l:w("r"),b2:w("bS<~>"),ev:w("pR<dW>"),dT:w("bg<~>"),cQ:w("azs"),q:w("mU"),y:w("R"),gR:w("N"),z:w("@"),S:w("H"),at:w("b9?"),gw:w("ai<a3<n,@>>?"),aT:w("ai<hZ>?"),c:w("ai<@>?"),aP:w("it?"),af:w("hZ?"),go:w("b_M?"),a6:w("a7h?"),cK:w("aC?"),bZ:w("+bytes,dataUrl,fileName(dD,n,n)?"),gl:w("+claimCode,qrPayload,token(n?,n,n)?"),T:w("n?"),dd:w("dD?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.aUy=new B.bH(A.ax,null,null,O.amF,null)
D.aUI=new B.d9(0,-0.15)
D.aUK=new B.d9(0.62,0)
D.aUN=new B.d9(-0.35,-0.45)
D.aUX=new B.d9(0.9,-0.85)
D.aKF=new B.aV(30,30)
D.aWe=new B.bq(D.aKF,D.aKF,A.he,A.he)
D.aWs=new B.aA(A.b5,1,A.q,-1)
D.beF=new B.w(1,0.4196078431372549,0.2901960784313726,0.2,A.t)
D.aWE=new B.aA(D.beF,1,A.q,-1)
D.aWQ=new B.aA(A.aE,1.5,A.q,-1)
D.aWV=new B.aA(A.b5,1.6,A.q,-1)
D.aXa=new B.aA(A.aE,1.4,A.q,-1)
D.aYy=new B.o(null,null,null,null,null,K.Gi,A.a6)
D.bT4=new B.a7(A.a3,A.a7,A.x,G.a26,null,null)
D.aYG=new B.o(null,null,null,null,null,D.bT4,A.a6)
D.a9X=new B.o(A.aB,null,null,A.rL,null,null,A.n)
D.b8S=new B.w(1,0.16862745098039217,0.22745098039215686,0.3333333333333333,A.t)
D.beD=new B.w(1,0.0392156862745098,0.058823529411764705,0.10196078431372549,A.t)
D.cPK=w([D.b8S,D.beD],x.O)
D.eaf=new B.bR(A.A,0.5,A.x,null,0,D.cPK,null,null)
D.aYZ=new B.o(null,null,null,null,null,D.eaf,A.a6)
D.W9=new B.w(1,0.054901960784313725,0.08235294117647059,0.14901960784313725,A.t)
D.aXq=new B.bP(P.uI,A.Y,A.Y,A.Y)
D.aZ0=new B.o(D.W9,null,D.aXq,null,null,null,A.n)
D.bUM=new B.a7(A.a3,A.a7,A.x,A.Pv,null,null)
D.aZ7=new B.o(null,null,null,null,null,D.bUM,A.a6)
D.abs=new B.w(1,0.058823529411764705,0.058823529411764705,0.0784313725490196,A.t)
D.aZ9=new B.o(D.abs,null,null,A.rM,null,null,A.n)
D.aZd=new B.o(A.kd,null,null,null,null,null,A.a6)
D.aXx=new B.bP(A.zQ,A.Y,A.Y,A.Y)
D.aZg=new B.o(A_.acv,null,D.aXx,A.m1,null,null,A.n)
D.DD=new B.o(A.dS,null,null,null,null,null,A.a6)
D.aZn=new B.o(null,null,null,null,null,E.vE,A.a6)
D.cUt=w([E.adn,A.bX],x.O)
D.bUo=new B.a7(A.b0,A.b6,A.x,D.cUt,null,null)
D.aZr=new B.o(null,null,null,A.m1,null,D.bUo,A.n)
D.d3J=w([A.bj,A.dS,A.jM],x.O)
D.a0f=new B.a7(A.ax,A.aC,A.x,D.d3J,null,null)
D.aZE=new B.o(null,null,null,null,null,D.a0f,A.n)
D.aZF=new B.o(D.abs,null,null,A.kz,null,null,A.n)
D.ckP=w([A.dq,A.bj],x.O)
D.bUg=new B.a7(A.ax,A.aC,A.x,D.ckP,null,null)
D.aZJ=new B.o(null,null,null,null,null,D.bUg,A.n)
D.aZT=new B.o(null,null,null,null,null,G.tU,A.a6)
D.b_b=new B.o(A.ado,null,null,null,null,null,A.a6)
D.b9C=new B.w(0.5647058823529412,0,0,0,A.t)
D.aa6=new B.ac(0,A.G,D.b9C,A.Rk,28)
D.b1i=new B.aUD()
D.b1R=new C.coM()
D.b22=new C.b8E()
D.aaC=new B.cp(A.A,null,null,A.a04,null)
D.b4w=new B.fi(null,null,null,null,null,E.mV,null,null,null,null)
D.b2z=new B.cp(A.A,null,null,D.b4w,null)
D.bEb=new B.ae(A.dW,28,A.c,null,null,null)
D.b32=new B.cp(A.A,null,null,D.bEb,null)
D.b4t=new B.fi(2,null,null,null,null,A.bY,null,null,null,null)
D.b3o=new B.cp(A.A,null,null,D.b4t,null)
D.bEv=new B.ae(K.Na,40,A.bI,null,null,null)
D.b3p=new B.cp(A.A,null,null,D.bEv,null)
D.b5i=new B.w(1,1,0.9019607843137255,0.6549019607843137,A.t)
D.b5u=new B.w(1,0.10588235294117647,0.13333333333333333,0.19607843137254902,A.t)
D.b5S=new B.w(1,0.08235294117647059,0.10196078431372549,0.14901960784313725,A.t)
D.b5Y=new B.w(1,0.10980392156862745,0.07450980392156863,0.054901960784313725,A.t)
D.b6t=new B.w(1,0.47843137254901963,0.41568627450980394,0.27058823529411763,A.t)
D.b6K=new B.w(0.8,1,0.9450980392156862,0.9490196078431372,A.t)
D.b6L=new B.w(0.0784313725490196,0.788235294117647,0.6352941176470588,0.15294117647058825,A.t)
D.Ka=new B.w(1,0.0392156862745098,0.08235294117647059,0.14901960784313725,A.t)
D.b7a=new B.w(0.2,0.9607843137254902,0.6196078431372549,0.043137254901960784,A.t)
D.b7f=new B.w(0.13333333333333333,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.t)
D.abM=new B.w(1,0.1411764705882353,0.09411764705882353,0.07058823529411765,A.t)
D.b7Z=new B.w(1,0.22745098039215686,0.16470588235294117,0.10196078431372549,A.t)
D.b8H=new B.w(1,0.9098039215686274,0.9333333333333333,0.9647058823529412,A.t)
D.ac_=new B.w(1,1,1,0.9725490196078431,A.t)
D.b8Z=new B.w(0,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.t)
D.b99=new B.w(1,1,0.5490196078431373,0.10196078431372549,A.t)
D.b9c=new B.w(0.6,0.9098039215686274,0.7058823529411765,0.7215686274509804,A.t)
D.b9m=new B.w(0.4,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.t)
D.b9H=new B.w(1,1,0.9568627450980393,0.8392156862745098,A.t)
D.bb1=new B.w(1,1,0.996078431372549,0.9725490196078431,A.t)
D.VU=new B.w(0.8509803921568627,0,0,0,A.t)
D.bb9=new B.w(1,0.0784313725490196,0.06666666666666667,0.047058823529411764,A.t)
D.bbf=new B.w(1,0.0784313725490196,0.06666666666666667,0.0392156862745098,A.t)
D.acM=new B.w(0.6,0,0,0,A.t)
D.acO=new B.w(0,1,0.7019607843137254,0.2784313725490196,A.t)
D.bcC=new B.w(1,0.12156862745098039,0.10196078431372549,0.058823529411764705,A.t)
D.t7=new B.w(1,0.08235294117647059,0.12156862745098039,0.21176470588235294,A.t)
D.bd1=new B.w(1,0.35294117647058826,0.41568627450980394,0.5215686274509804,A.t)
D.bds=new B.w(1,1,0.8784313725490196,0.6392156862745098,A.t)
D.bdP=new B.w(0.4,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.t)
D.ady=new B.w(1,0.47843137254901963,0.23137254901960785,0.2901960784313726,A.t)
D.Wj=new B.w(0,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.t)
D.Ao=new B.w(1,0.5411764705882353,0.39215686274509803,0.09019607843137255,A.t)
D.KF=new B.w(1,0.0784313725490196,0.09803921568627451,0.16470588235294117,A.t)
D.j5=new B.w(1,0.07058823529411765,0.12941176470588237,0.23921568627450981,A.t)
D.adX=new B.w(0,1,0.9686274509803922,0.8392156862745098,A.t)
D.Wu=new B.w(1,0.2901960784313726,0.17254901960784313,0.10588235294117647,A.t)
D.bh2=new B.w(1,0.24705882352941178,0.16470588235294117,0.0392156862745098,A.t)
D.bhx=new B.w(0.6,1,0.9686274509803922,0.9019607843137255,A.t)
D.bhL=new B.w(0.6,1,0.984313725490196,0.9215686274509803,A.t)
D.WN=new B.w(1,0.07450980392156863,0.10980392156862745,0.2,A.t)
D.biS=new B.w(1,0.8627450980392157,0.9215686274509803,0.9803921568627451,A.t)
D.x5=new B.w(1,0.9137254901960784,0.7686274509803922,0.41568627450980394,A.t)
D.bjl=new B.w(1,0.058823529411764705,0.0784313725490196,0.12549019607843137,A.t)
D.bjD=new B.hE(A.b2,!0,null,null)
D.f3w=new B.G(!0,A.az,null,null,null,null,22,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fsT=new B.x("Bio link",null,D.f3w,null,null,null,null,null,null,null,null,null)
D.b3i=new B.cp(A.A,null,null,D.fsT,null)
D.bjT=new B.hE(A.Vh,!0,D.b3i,null)
D.L3=new C.a33(0,"none")
D.af4=new C.a33(1,"deflate")
D.af5=new C.a33(2,"bzip2")
D.bkz=new B.kg(0.165,0.84,0.44,1)
D.cUM=w([A.cb,A.dO,A.aE],x.O)
D.bTx=new B.a7(A.ax,A.aC,A.x,D.cUM,null,null)
D.aYD=new B.o(null,null,null,null,null,D.bTx,A.n)
D.bNg=new B.ae(A.eR,null,A.ad,null,null,null)
D.b3U=new B.cp(A.A,null,null,D.bNg,null)
D.bl6=new B.kJ(D.aYD,A.bd,D.b3U,null)
D.bhj=new B.w(0.058823529411764705,1,1,1,A.t)
D.cXP=w([A.bF,A.qz,A.qz,D.bhj],x.O)
D.cBP=w([0,0.32,0.7,1],x.x)
D.bU5=new B.a7(A.ax,A.aC,A.x,D.cXP,D.cBP,null)
D.aYs=new B.o(null,null,null,null,null,D.bU5,A.n)
D.blc=new B.kJ(D.aYs,A.bd,null,null)
D.bmc=new B.md(1,1,null,null,null,A.bm,null)
D.bmf=new B.md(1,null,null,null,null,D.Wu,null)
D.bmJ=new B.b9(125e4)
D.bmP=new B.b9(17e4)
D.bmZ=new B.b9(35964e8)
D.bn4=new B.b9(55e4)
D.bn8=new B.b9(68e4)
D.bnz=new B.i9(0,0,0,5)
D.bnQ=new B.Q(0,16,16,0)
D.bnT=new B.Q(0,18,0,8)
D.bo0=new B.Q(0,36,0,36)
D.bo7=new B.Q(0,54,0,0)
D.boe=new B.Q(10,0,10,3)
D.bop=new B.i9(10,16,10,10)
D.boB=new B.Q(10,6,4,6)
D.boE=new B.Q(10,8,10,6)
D.ag0=new B.Q(11,8,11,11)
D.boI=new B.Q(12,0,12,24)
D.boU=new B.Q(12,12,12,4)
D.boX=new B.Q(12,12,8,12)
D.bpb=new B.Q(12,8,8,12)
D.bpy=new B.Q(14,14,14,0)
D.bpD=new B.Q(14,14,14,90)
D.bpW=new B.Q(16,10,16,16)
D.bpX=new B.Q(16,10,16,20)
D.agP=new B.Q(16,6,16,28)
D.bqv=new B.Q(18,0,18,10)
D.bqx=new B.Q(18,0,18,30)
D.bqz=new B.Q(18,10,18,12)
D.bqA=new B.Q(18,10,18,14)
D.bqR=new B.Q(18,16,14,18)
D.bqW=new B.Q(18,18,18,12)
D.br1=new B.Q(18,26,18,12)
D.br6=new B.Q(18,34,18,34)
D.br7=new B.Q(18,4,18,14)
D.brd=new B.Q(18,8,18,24)
D.brv=new B.Q(20,16,14,4)
D.brA=new B.Q(20,18,12,4)
D.brF=new B.Q(20,20,12,20)
D.brI=new B.Q(20,22,20,20)
D.brN=new B.Q(20,6,20,6)
D.brW=new B.Q(22,18,22,18)
D.bs3=new B.Q(22,24,22,0)
D.bs6=new B.Q(22,24,22,4)
D.bse=new B.Q(22,60,22,22)
D.bsk=new B.Q(24,24,24,22)
D.bsu=new B.Q(26,10,60,10)
D.bsB=new B.Q(28,44,28,44)
D.bsS=new B.Q(32,44,32,44)
D.bt_=new B.Q(38,30,38,20)
D.bt4=new B.Q(4,0,0,6)
D.btg=new B.i9(4,4,4,4)
D.btH=new B.i9(6,5,6,5)
D.btL=new B.Q(6,6,8,6)
D.btW=new B.Q(8,14,8,14)
D.btX=new B.Q(8,22,8,22)
D.bu4=new B.Q(8,6,12,6)
D.bud=new B.Q(8,8,8,4)
D.ahI=new B.Q(9,9,9,6)
D.bun=new B.i9(2.5,2.5,2.5,2.5)
D.buo=new B.Q(10.5,0,10.5,0)
D.bup=new B.Q(7,1.5,7,1.5)
D.cMZ=w([0.393,0.769,0.189,0,0,0.349,0.686,0.168,0,0,0.272,0.534,0.131,0,0,0,0,0,1,0],x.x)
D.buF=new B.yv(null,null,D.cMZ,A.A2)
D.cKa=w([0.2126,0.7152,0.0722,0,0,0.2126,0.7152,0.0722,0,0,0.2126,0.7152,0.0722,0,0,0,0,0,1,0],x.x)
D.buG=new B.yv(null,null,D.cKa,A.A2)
D.aPl=new B.G(!0,A.az,null,null,null,null,11,A.u,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fsd=new B.x("WORD DESIGN",null,D.aPl,null,null,null,null,null,null,null,null,null)
D.bvc=new B.bD(1,A.bi,D.fsd,null)
D.frU=new B.x("Slides database",null,Ab.rx,null,null,null,null,null,null,null,null,null)
D.fpd=new B.x("Admin only \xb7 keep as many as you like",null,U.aOQ,null,null,null,null,null,null,null,null,null)
D.dbl=w([D.frU,A.bA,D.fpd],x.p)
D.bkh=new B.fq(A.ah,A.e,A.j,A.F,null,A.p,null,0,D.dbl,null)
D.bvf=new B.bD(1,A.bi,D.bkh,null)
D.fjQ=new B.x("NGMY logo",null,A.fO,null,null,null,null,null,null,null,null,null)
D.bvi=new B.bD(1,A.bi,D.fjQ,null)
D.f1q=new B.G(!0,A.ad,null,null,null,null,12,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fu8=new B.x("TALK TO THE EDITOR",null,D.f1q,null,null,null,null,null,null,null,null,null)
D.bvy=new B.bD(1,A.bi,D.fu8,null)
D.fdL=new B.x("Tell the AI what to change",null,Ab.rx,null,null,null,null,null,null,null,null,null)
D.bvS=new B.bD(1,A.bi,D.fdL,null)
D.bwJ=new B.Dl(!0,"video/mp4")
D.f_J=new B.G(!0,A.c,null,null,null,null,16,A.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fbX=new B.x("Move presentations between devices",null,D.f_J,null,null,null,!1,null,null,1,null,null)
D.bwN=new B.q9(A.eg,A.a3,A.f,D.fbX,null)
D.fd0=new B.x("Edit in Slides",null,A.jn,null,null,null,null,null,null,null,null,null)
D.bwO=new B.q9(A.eg,A.A,A.f,D.fd0,null)
D.bx2=new B.dm(1,A.ci,D.bwO,null)
D.Zz=new B.a0(60988,"MaterialIcons",!1)
D.bzL=new B.a0(61352,"MaterialIcons",!1)
D.ajd=new B.a0(61531,"MaterialIcons",!1)
D.bAX=new B.a0(63062,"MaterialIcons",!1)
D.bB4=new B.a0(63109,"MaterialIcons",!1)
D.bBf=new B.a0(63206,"MaterialIcons",!1)
D.ajX=new B.a0(63238,"MaterialIcons",!1)
D.a_4=new B.a0(63365,"MaterialIcons",!1)
D.a_5=new B.a0(63367,"MaterialIcons",!1)
D.a_6=new B.a0(63368,"MaterialIcons",!1)
D.ak8=new B.a0(63384,"MaterialIcons",!1)
D.bBP=new B.a0(63525,"MaterialIcons",!1)
D.bBS=new B.a0(63568,"MaterialIcons",!1)
D.bCc=new B.a0(983072,"MaterialIcons",!1)
D.bCA=new B.a0(983271,"MaterialIcons",!0)
D.alk=new B.a0(983965,"MaterialIcons",!1)
D.all=new B.a0(983966,"MaterialIcons",!1)
D.bDx=new B.a0(984592,"MaterialIcons",!1)
D.bDP=new B.ae(A.tG,16,A.az,null,null,null)
D.bDW=new B.ae(A.mm,null,A.c,null,null,null)
D.alv=new B.ae(A.pL,18,A.c,null,null,null)
D.bEc=new B.ae(A.B9,18,N.l4,null,null,null)
D.bER=new B.ae(A.jh,11,null,null,null,null)
D.bF0=new B.ae(A.ZP,null,A.es,null,null,null)
D.bFz=new B.ae(A.qV,18,A.az,null,null,null)
D.bFF=new B.ae(A2.Bm,14,null,null,null,null)
D.bFG=new B.ae(A.e4,28,A.cj,null,null,null)
D.bFS=new B.ae(A.pM,20,A.c,null,null,null)
D.bFZ=new B.ae(A.y_,null,null,null,null,null)
D.bG4=new B.ae(A.iS,18,A.hv,null,null,null)
D.bG9=new B.ae(A.la,null,null,null,null,null)
D.bGC=new B.ae(A.a_l,28,A.c,null,null,null)
D.bB_=new B.a0(63065,"MaterialIcons",!1)
D.bGL=new B.ae(D.bB_,15,A.c,null,null,null)
D.bB5=new B.a0(63113,"MaterialIcons",!1)
D.bGR=new B.ae(D.bB5,null,A.ad,null,null,null)
D.bHe=new B.ae(A.vn,22,A.bK,null,null,null)
D.bHy=new B.ae(A.tF,18,null,null,null,null)
D.bHE=new B.ae(A.Bp,12,A.c,null,null,null)
D.bD9=new B.a0(983687,"MaterialIcons",!1)
D.bHP=new B.ae(D.bD9,null,A.bj,null,null,null)
D.bHW=new B.ae(A.hy,null,A.bj,null,null,null)
D.bIe=new B.ae(A.oI,22,A.c,null,null,null)
D.bIi=new B.ae(A.cy,13,A.c,null,null,null)
D.bIo=new B.ae(A.e4,26,A.ay,null,null,null)
D.bIr=new B.ae(A.r_,26,A.c,null,null,null)
D.Nn=new B.ae(A.jh,8,A.c,null,null,null)
D.bIJ=new B.ae(A.pL,40,A.c,null,null,null)
D.bIK=new B.ae(A.byI,null,null,null,null,null)
D.bIO=new B.ae(A.tO,20,null,null,null,null)
D.bD8=new B.a0(983683,"MaterialIcons",!1)
D.bIY=new B.ae(D.bD8,null,A.aZ,null,null,null)
D.bIZ=new B.ae(A.jh,16,A.bj,null,null,null)
D.bJj=new B.ae(A.r0,null,null,null,null,null)
D.am3=new B.ae(A.vp,22,A.c,null,null,null)
D.bJn=new B.ae(A.dW,17,A.c,null,null,null)
D.am4=new B.ae(A.jh,9,A.c,null,null,null)
D.bJs=new B.ae(A.vk,null,null,null,null,null)
D.byZ=new B.a0(57744,"MaterialIcons",!1)
D.bJz=new B.ae(D.byZ,null,null,null,null,null)
D.bJC=new B.ae(A.vk,16,null,null,null,null)
D.bDG=new B.a0(985181,"MaterialIcons",!1)
D.G9=new B.ae(D.bDG,null,null,null,null,null)
D.bJO=new B.ae(A.la,16,A.bK,null,null,null)
D.bD1=new B.a0(983615,"MaterialIcons",!1)
D.bJQ=new B.ae(D.bD1,12,A.c,null,null,null)
D.ama=new B.ae(A.xH,16,null,null,null,null)
D.bJY=new B.ae(A.dW,21,A.c,null,null,null)
D.bK2=new B.ae(A.hy,17,A.c,null,null,null)
D.bK3=new B.ae(A.vn,null,null,null,null,null)
D.bKi=new B.ae(A.a_J,20,A.az,null,null,null)
D.bKx=new B.ae(A.pK,22,E.mV,null,null,null)
D.bKE=new B.ae(A.pJ,13,A.ad,null,null,null)
D.bKG=new B.ae(A.al6,20,A.az,null,null,null)
D.byG=new B.a0(57495,"MaterialIcons",!1)
D.bKL=new B.ae(D.byG,null,null,null,null,null)
D.bKP=new B.ae(A.nU,18,A.c,null,null,null)
D.bL9=new B.ae(A.tS,28,A.c,null,null,null)
D.bLj=new B.ae(D.ajX,null,A.aE,null,null,null)
D.bLk=new B.ae(A.pM,22,A.c,null,null,null)
D.amj=new B.ae(A.Zv,16,null,null,null,null)
D.bM5=new B.ae(A.vn,32,A.c,null,null,null)
D.bMO=new B.ae(A.iV,22,A.c,null,null,null)
D.bMS=new B.ae(A.r_,22,A.ad,null,null,null)
D.amy=new B.ae(A.tG,null,A.c_,null,null,null)
D.bNL=new B.ae(A.qS,18,null,null,null,null)
D.bOm=new B.ae(A.dW,18,A.cn,null,null,null)
D.a07=new B.ae(A.cy,18,A.az,null,null,null)
D.bOs=new B.ae(A.al0,null,null,null,null,null)
D.bOS=new B.e1(null,null,null,null,null,null,null,null,null,null,"Type here\u2026",null,A.aP8,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.ey,!0,null,null,null,null)
D.eT1=new B.G(!0,A.bJ,null,null,null,null,null,A.cu,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bP9=new B.e1(null,null,null,null,null,null,null,null,null,null,"Type here\u2026",null,D.eT1,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,A.af,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.ey,!0,null,null,null,null)
D.bPA=new B.e1(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"",null,null,null,null,null,null,null,null,null,null,null,A.ey,!0,null,null,null,null)
D.cQH=w([A.dS,A.aE],x.O)
D.bRk=new B.a7(A.a3,A.a7,A.x,D.cQH,null,null)
D.bRw=new B.a7(A.b0,A.b6,A.Tr,A.atB,null,null)
D.b5I=new B.w(1,0.5568627450980392,0.5411764705882353,0.5215686274509804,A.t)
D.b9K=new B.w(1,0.23529411764705882,0.22745098039215686,0.21568627450980393,A.t)
D.bcD=new B.w(1,0.7254901960784313,0.7058823529411765,0.6784313725490196,A.t)
D.b7R=new B.w(1,0.1803921568627451,0.17254901960784313,0.16470588235294117,A.t)
D.cBR=w([D.b5I,D.b9K,D.bcD,D.b7R],x.O)
D.bRP=new B.a7(A.ax,A.aC,A.x,D.cBR,A.GI,null)
D.dbs=w([A.ct,A.bz,A.b5],x.O)
D.bRR=new B.a7(A.b0,A.b6,A.Tr,D.dbs,null,null)
D.dcL=w([A.bj,A.c8],x.O)
D.bRV=new B.a7(A.a3,A.a7,A.x,D.dcL,null,null)
D.d80=w([A.hu,A.d9,A.aH],x.O)
D.bRX=new B.a7(A.ax,A.aC,A.x,D.d80,null,null)
D.cWl=w([A.cZ,A.f7],x.O)
D.bS0=new B.a7(A.a3,A.a7,A.x,D.cWl,null,null)
D.dbn=w([N.l4,A.d9],x.O)
D.anj=new B.a7(A.a3,A.a7,A.x,D.dbn,null,null)
D.bai=new B.w(1,0.9686274509803922,0.8901960784313725,0.6313725490196078,A.t)
D.dbk=w([D.bai,D.x5,A.bY],x.O)
D.bS5=new B.a7(A.a3,A.a7,A.x,D.dbk,null,null)
D.cSi=w([A.b8,A.d_,A.ff],x.O)
D.bS6=new B.a7(A.ax,A.aC,A.x,D.cSi,null,null)
D.NB=new B.a7(A.a3,A.a7,A.x,A.GW,null,null)
D.bi7=new B.w(1,0.9019607843137255,0.7568627450980392,0.3607843137254902,A.t)
D.cuY=w([D.bi7,A.bY,A.j7],x.O)
D.ano=new B.a7(A.ax,A.aC,A.x,D.cuY,null,null)
D.d0l=w([A.wU,A.aw,D.Ao],x.O)
D.bT5=new B.a7(A.a3,A.a7,A.x,D.d0l,null,null)
D.bjm=new B.w(1,0.43137254901960786,0.41568627450980394,0.396078431372549,A.t)
D.b8G=new B.w(1,0.6627450980392157,0.6431372549019608,0.615686274509804,A.t)
D.bdF=new B.w(1,0.3333333333333333,0.3215686274509804,0.3058823529411765,A.t)
D.cRs=w([D.bjm,D.b8G,D.bdF],x.O)
D.anp=new B.a7(A.a3,A.a7,A.x,D.cRs,null,null)
D.bak=new B.w(1,0.0392156862745098,0.06666666666666667,0.13333333333333333,A.t)
D.bV1=w([Aw.aeM,D.bak],x.O)
D.bTe=new B.a7(A.b0,A.b6,A.x,D.bV1,null,null)
D.cPy=w([A.mS,A.bI],x.O)
D.bTi=new B.a7(A.b0,A.b6,A.x,D.cPy,null,null)
D.d5c=w([A.aE,A.dO],x.O)
D.bTo=new B.a7(A.a3,A.a7,A.x,D.d5c,null,null)
D.adJ=new B.w(1,0.1803921568627451,0.25882352941176473,0.4392156862745098,A.t)
D.avh=w([D.adJ,D.j5,D.Ka],x.O)
D.bTQ=new B.a7(A.ax,A.aC,A.x,D.avh,null,null)
D.cuQ=w([A.dv,A.dK],x.O)
D.bU0=new B.a7(A.b0,A.b6,A.x,D.cuQ,null,null)
D.d2q=w([A.uO,Az.Eg],x.O)
D.bUO=new B.a7(A.a3,A.a7,A.x,D.d2q,null,null)
D.flk=new B.x("Which Bio link?",null,A.cw,null,null,null,null,null,null,null,null,null)
D.bUZ=new B.pz(null,D.flk,null,null,null,null,null,null,null,null,!0,null,null,!1,null,null,null,!1,null,null,null,null,null,null,null,null,!0,null,null)
D.yq=w([82,9,106,213,48,54,165,56,191,64,163,158,129,243,215,251,124,227,57,130,155,47,255,135,52,142,67,68,196,222,233,203,84,123,148,50,166,194,35,61,238,76,149,11,66,250,195,78,8,46,161,102,40,217,36,178,118,91,162,73,109,139,209,37,114,248,246,100,134,104,152,22,212,164,92,204,93,101,182,146,108,112,72,80,253,237,185,218,94,21,70,87,167,141,157,132,144,216,171,0,140,188,211,10,247,228,88,5,184,179,69,6,208,44,30,143,202,63,15,2,193,175,189,3,1,19,138,107,58,145,17,65,79,103,220,234,151,242,207,206,240,180,230,115,150,172,116,34,231,173,53,133,226,249,55,232,28,117,223,110,71,241,26,113,29,41,197,137,111,183,98,14,170,24,190,27,252,86,62,75,198,210,121,32,154,219,192,254,120,205,90,244,31,221,168,51,136,7,199,49,177,18,16,89,39,128,236,95,96,81,127,169,25,181,74,13,45,229,122,159,147,201,156,239,160,224,59,77,174,42,245,176,200,235,187,60,131,83,153,97,23,43,4,126,186,119,214,38,225,105,20,99,85,33,12,125],x.t)
D.a3Y=new C.kM(2,"elegantNavy")
D.fTP=w([A.Wh,D.j5,A.bY],x.O)
D.jC=new C.xd(0,"classic")
D.a3L=new C.ji("kuhowa_elegant_navy","Kuhowa \u2014 Bluu ya Kifalme",y.s,D.a3Y,4294967035,4279378237,4290283019,D.jC)
D.aEo=new C.kM(3,"elegantGold")
D.b5h=new B.w(1,1,0.9882352941176471,0.9529411764705882,A.t)
D.b6c=new B.w(1,0.6509803921568628,0.5176470588235295,0.22745098039215686,A.t)
D.acl=new B.w(1,0.4196078431372549,0.2901960784313726,0.07058823529411765,A.t)
D.fTh=w([D.b5h,D.b6c,D.acl],x.O)
D.a3J=new C.ji("kuhowa_elegant_gold","Kuhowa \u2014 Dhahabu",y.Q,D.aEo,4294966515,4281016592,4289102906,D.jC)
D.dxr=new C.kM(22,"goldRibbon")
D.fTd=w([A.Wh,D.j5,A.hV],x.O)
D.a3C=new C.ji("kuhowa_gold_ribbon","Utepe wa Dhahabu","Pembe za bluu na dhahabu \xb7 almasi kati ya kila upande.",D.dxr,4294967035,4279378237,4291404327,D.jC)
D.dxs=new C.kM(23,"goldBaroque")
D.acX=new B.w(1,1,0.9647058823529412,0.8941176470588236,A.t)
D.fTj=w([D.acX,A.aw,A.j7],x.O)
D.a3D=new C.ji("kuhowa_gold_baroque","Ukanda wa Dhahabu","Ukanda mzito wa dhahabu \xb7 rosette kwenye pembe.",D.dxs,4294964964,4283053072,4292128567,D.jC)
D.dxu=new C.kM(4,"elegantEmerald")
D.b7l=new B.w(1,0.9647058823529412,0.984313725490196,0.9725490196078431,A.t)
D.b8d=new B.w(1,0.054901960784313725,0.23137254901960785,0.1803921568627451,A.t)
D.fTp=w([D.b7l,D.b8d,A.hV],x.O)
D.a3E=new C.ji("kuhowa_elegant_emerald","Kuhowa \u2014 Zumaridi","Mpaka mwembamba wa dhahabu \xb7 vichwa vya kijani ya zumaridi.",D.dxu,4294376440,4279122734,4291404327,D.jC)
D.dxv=new C.kM(5,"elegantBurgundy")
D.bbE=new B.w(1,1,0.9686274509803922,0.9647058823529412,A.t)
D.fTw=w([D.bbE,A.abE,A.hV],x.O)
D.a3H=new C.ji("kuhowa_elegant_burgundy","Kuhowa \u2014 Mvinyo","Mpaka mwembamba wa dhahabu \xb7 vichwa vya rangi ya mvinyo.",D.dxv,4294965238,4283043359,4291404327,D.jC)
D.dxo=new C.kM(19,"goldFiligree")
D.KM=new B.w(1,1,0.984313725490196,0.9529411764705882,A.t)
D.fTk=w([D.KM,A.aw,A.j7],x.O)
D.a3F=new C.ji("kuhowa_gold_filigree","Dhahabu ya Filigree","Mpaka wa dhahabu mara tatu \xb7 pembe za mapambo.",D.dxo,4294966259,4279378237,4292128567,D.jC)
D.dxp=new C.kM(20,"goldLaurel")
D.bhY=new B.w(1,0.47843137254901963,0.3607843137254902,0.0784313725490196,A.t)
D.fTx=w([A.K3,A.hV,D.bhY],x.O)
D.a3G=new C.ji("kuhowa_gold_laurel","Taji ya Dhahabu","Majani ya dhahabu kando \xb7 almasi kwenye pembe.",D.dxp,4294966776,4282000405,4291404327,D.jC)
D.dxq=new C.kM(21,"goldCrest")
D.abv=new B.w(1,1,0.9725490196078431,0.9254901960784314,A.t)
D.bi4=new B.w(1,0.4196078431372549,0.30980392156862746,0.07058823529411765,A.t)
D.fTm=w([D.abv,A.aw,D.bi4],x.O)
D.a3K=new C.ji("kuhowa_gold_crest","Muhuri wa Dhahabu","Medali za dhahabu kwenye pembe \xb7 shanga za lulu.",D.dxq,4294965484,4283053072,4292128567,D.jC)
D.dxt=new C.kM(24,"goldStar")
D.bjg=new B.w(1,1,0.9882352941176471,0.9647058823529412,A.t)
D.fTq=w([D.bjg,A.aw,D.j5],x.O)
D.a3I=new C.ji("kuhowa_gold_star","Nyota ya Dhahabu","Nyota za dhahabu kwenye pembe \xb7 mstari wa bluu ndani.",D.dxt,4294966518,4279378237,4292128567,D.jC)
D.Gk=w([D.a3L,D.a3J,D.a3C,D.a3D,D.a3E,D.a3H,D.a3F,D.a3G,D.a3K,D.a3I],x.h)
D.pZ=new C.mp(0,"blank")
D.R9=new C.mp(1,"title")
D.mu=new C.mp(2,"titleContent")
D.dS3=new C.mp(3,"twoColumn")
D.Cj=new C.mp(4,"section")
D.dS4=new C.mp(5,"comparison")
D.Hv=new C.mp(6,"flashcard")
D.Hw=new C.mp(7,"quiz")
D.Hx=new C.mp(8,"worksheet")
D.anL=w([D.pZ,D.R9,D.mu,D.dS3,D.Cj,D.dS4,D.Hv,D.Hw,D.Hx],B.ax("P<mp>"))
D.bVe=w([0,0,0],x.cA)
D.awf=w([Ap.VE,A.dK],x.O)
D.kl=w([A.bY,A.bK,A.hU,A.hE,D.Ao],x.O)
D.dtl=new C.iV("fireworks","Royal Fireworks","Thank you for celebrating with us",D.awf,D.kl)
D.bih=new B.w(1,0.2901960784313726,0.050980392156862744,0.11764705882352941,A.t)
D.bbC=new B.w(1,0.07058823529411765,0.011764705882352941,0.0392156862745098,A.t)
D.cPL=w([D.bih,D.bbC],x.O)
D.dtc=new C.iV("confetti","Golden Confetti","Together we rise",D.cPL,D.kl)
D.cN3=w([A.ny,A.Vk],x.O)
D.dtd=new C.iV("crown","Crown of Glory","Built for our community",D.cN3,D.kl)
D.b8x=new B.w(1,0.011764705882352941,0.10588235294117647,0.1803921568627451,A.t)
D.bbh=new B.w(1,0.00392156862745098,0.023529411764705882,0.058823529411764705,A.t)
D.cTA=w([D.b8x,D.bbh],x.O)
D.tW=w([A.bJ,A.aQ,A.c,A.aL,A.ak],x.O)
D.dt7=new C.iV("aurora","Aurora Gala","A brighter future, together",D.cTA,D.tW)
D.bcF=new B.w(1,0.027450980392156862,0.01568627450980392,0.00392156862745098,A.t)
D.d2w=w([G.ab8,D.bcF],x.O)
D.dto=new C.iV("champagne","Champagne Toast","Cheers to every member",D.d2w,D.kl)
D.dtp=new C.iV("diamonds","Diamond Rain","Every member is a jewel",Y.awQ,D.tW)
D.b63=new B.w(1,0.3568627450980392,0.16470588235294117,0.023529411764705882,A.t)
D.baP=new B.w(1,0.10196078431372549,0.043137254901960784,0.00784313725490196,A.t)
D.d7k=w([D.b63,D.baP],x.O)
D.dt2=new C.iV("starburst","Golden Starburst","Thank you!",D.d7k,D.kl)
D.bV7=w([A.f6,A.wY],x.O)
D.abh=new B.w(1,0.615686274509804,0.3058823529411765,0.3607843137254902,A.t)
D.P8=w([A.oo,A.io,A.v_,A.mK,D.abh],x.O)
D.dtw=new C.iV("balloons","Luxury Balloons","Let's celebrate",D.bV7,D.P8)
D.cMn=w([A.Vs,A.w],x.O)
D.dtk=new C.iV("galaxy","Galaxy Spiral","The sky is not the limit",D.cMn,D.tW)
D.bgm=new B.w(1,0.047058823529411764,0.00392156862745098,0.00392156862745098,A.t)
D.d_b=w([A.kc,D.bgm],x.O)
D.dtf=new C.iV("redcarpet","Red Carpet","Tonight we shine",D.d_b,D.kl)
D.beg=new B.w(1,0.10980392156862745,0.0784313725490196,0.0196078431372549,A.t)
D.bcs=new B.w(1,0.0196078431372549,0.011764705882352941,0.00392156862745098,A.t)
D.d3q=w([D.beg,D.bcs],x.O)
D.dt4=new C.iV("coins","Gold Coin Rain","Every contribution counts",D.d3q,D.kl)
D.d9T=w([A.dv,A.hD],x.O)
D.dta=new C.iV("lanterns","Sky Lanterns","Lighting the way together",D.d9T,D.kl)
D.b9q=new B.w(1,0.0784313725490196,0.00784313725490196,0.0392156862745098,A.t)
D.cKr=w([A.x_,D.b9q],x.O)
D.dt6=new C.iV("hearts","Floating Hearts","Made with love",D.cKr,D.P8)
D.b6D=new B.w(1,0.23137254901960785,0.0392156862745098,0.10980392156862745,A.t)
D.b7s=new B.w(1,0.058823529411764705,0.00784313725490196,0.027450980392156862,A.t)
D.dbi=w([D.b6D,D.b7s],x.O)
D.dtv=new C.iV("petals","Rose Petals","Thank you, from our hearts",D.dbi,D.P8)
D.bhh=new B.w(1,0.00784313725490196,0.06274509803921569,0.0392156862745098,A.t)
D.d7E=w([A.l3,D.bhh],x.O)
D.dt1=new C.iV("butterflies","Golden Butterflies","New beginnings",D.d7E,D.kl)
D.bdC=new B.w(1,0.0392156862745098,0.0392156862745098,0.12156862745098039,A.t)
D.cLm=w([D.bdC,A.w],x.O)
D.dtn=new C.iV("neon","Neon Night","Let's go!",D.cLm,D.tW)
D.bax=new B.w(1,0.0196078431372549,0.00392156862745098,0.050980392156862744,A.t)
D.d5m=w([A.Kr,D.bax],x.O)
D.dtq=new C.iV("disco","Disco Ball","Party time",D.d5m,D.tW)
D.be8=new B.w(1,0.11764705882352941,0.0392156862745098,0.1803921568627451,A.t)
D.d4V=w([A.hu,D.be8],x.O)
D.dt5=new C.iV("sunrise","Golden Sunrise","A new day for our community",D.d4V,D.kl)
D.d4y=w([A.qD,A.dK],x.O)
D.dtr=new C.iV("pearls","Ocean Pearls","Deep roots, bright future",D.d4y,D.tW)
D.b8C=new B.w(1,0.047058823529411764,0.11764705882352941,0.22745098039215686,A.t)
D.d4M=w([D.b8C,A.dK],x.O)
D.dtu=new C.iV("snow","Winter Gala","Warm wishes to all",D.d4M,D.tW)
D.b5q=new B.w(1,0.0784313725490196,0.13725490196078433,0.10196078431372549,A.t)
D.b6n=new B.w(1,0.01568627450980392,0.03137254901960784,0.0196078431372549,A.t)
D.dag=w([D.b5q,D.b6n],x.O)
D.dtj=new C.iV("laurel","Laurel Victory","We did it together",D.dag,D.kl)
D.b5g=new B.w(1,0.12156862745098039,0.06274509803921569,0.2,A.t)
D.bbd=new B.w(1,0.027450980392156862,0.011764705882352941,0.050980392156862744,A.t)
D.cJz=w([D.b5g,D.bbd],x.O)
D.dtt=new C.iV("ribbons","Silk Ribbons","Elegance in every step",D.cJz,D.kl)
D.bcc=new B.w(1,0.023529411764705882,0.01568627450980392,0.00784313725490196,A.t)
D.cuN=w([G.An,D.bcc],x.O)
D.dtg=new C.iV("kente","Kente Pride","Proud of our roots",D.cuN,D.kl)
D.beO=new B.w(1,0.1411764705882353,0.10196078431372549,0.0196078431372549,A.t)
D.bhB=new B.w(1,0.027450980392156862,0.0196078431372549,0.00392156862745098,A.t)
D.cV5=w([D.beO,D.bhB],x.O)
D.dtb=new C.iV("trophy","Trophy Shine","Winners together",D.cV5,D.kl)
D.d4S=w([Aq.Kg,A.w],x.O)
D.dt3=new C.iV("shooting","Shooting Stars","Make a wish",D.d4S,D.tW)
D.b5x=new B.w(1,0.10980392156862745,0.07058823529411765,0.023529411764705882,A.t)
D.aez=new B.w(1,0.0196078431372549,0.011764705882352941,0.00784313725490196,A.t)
D.daw=w([D.b5x,D.aez],x.O)
D.dth=new C.iV("bokeh","Golden Bokeh","Shine bright",D.daw,D.kl)
D.b5T=new B.w(1,0.0392156862745098,0.058823529411764705,0.1411764705882353,A.t)
D.d0_=w([D.b5T,A.w],x.O)
D.dt9=new C.iV("orbits","Golden Orbits","Always moving forward",D.d0_,D.kl)
D.bhi=new B.w(1,0.0392156862745098,0.011764705882352941,0.047058823529411764,A.t)
D.cXI=w([A.acj,D.bhi],x.O)
D.dte=new C.iV("flowers","Blooming Garden","Growing together",D.cXI,D.P8)
D.b5G=new B.w(1,0.07450980392156863,0.027450980392156862,0.1803921568627451,A.t)
D.b6h=new B.w(1,0.00784313725490196,0.00392156862745098,0.03137254901960784,A.t)
D.d9m=w([D.b5G,D.b6h],x.O)
D.dt8=new C.iV("music","Music Party","Celebrate with us",D.d9m,D.tW)
D.b7b=new B.w(1,0.16470588235294117,0.0392156862745098,0.22745098039215686,A.t)
D.bi0=new B.w(1,0.027450980392156862,0.00784313725490196,0.047058823529411764,A.t)
D.cKD=w([D.b7b,D.bi0],x.O)
D.dts=new C.iV("mandala","Royal Mandala","Harmony and unity",D.cKD,D.kl)
D.cXN=w([G.An,D.aez],x.O)
D.dtm=new C.iV("sparklers","Golden Sparklers","Light up the night",D.cXN,D.kl)
D.dti=new C.iV("city","City Lights","The whole city celebrates",D.awf,D.kl)
D.Gt=w([D.dtl,D.dtc,D.dtd,D.dt7,D.dto,D.dtp,D.dt2,D.dtw,D.dtk,D.dtf,D.dt4,D.dta,D.dt6,D.dtv,D.dt1,D.dtn,D.dtq,D.dt5,D.dtr,D.dtu,D.dtj,D.dtt,D.dtg,D.dtb,D.dt3,D.dth,D.dt9,D.dte,D.dt8,D.dts,D.dtm,D.dti],B.ax("P<iV>"))
D.eff=new B.y("","No ring")
D.etQ=new B.y("platinum","Platinum")
D.eqQ=new B.y("glow","Glow")
D.eiD=new B.y("double","Double line")
D.ehy=new B.y("framed","Gallery frame")
D.eeT=new B.y("rosegold","Rose gold")
D.erA=new B.y("jewels","Jeweled")
D.eoj=new B.y("aurora","Aurora")
D.BG=w([D.eff,A.a5f,D.etQ,D.eqQ,H.aKU,D.eiD,A.a5h,D.ehy,D.eeT,D.erA,D.eoj],x.L)
D.cet=w([D.a3F,D.a3G,D.a3K,D.a3C,D.a3D,D.a3I],x.h)
D.bKb=new B.ae(G.aiO,16,null,null,null,null)
D.b0E=new B.vc(A.bg,D.bKb,null,x.U)
D.bz7=new B.a0(58027,"MaterialIcons",!1)
D.bDV=new B.ae(D.bz7,16,null,null,null,null)
D.b0C=new B.vc(A.L,D.bDV,null,x.U)
D.bz8=new B.a0(58030,"MaterialIcons",!1)
D.bHV=new B.ae(D.bz8,16,null,null,null,null)
D.b0F=new B.vc(A.dL,D.bHV,null,x.U)
D.ckD=w([D.b0E,D.b0C,D.b0F],B.ax("P<vc<pQ>>"))
D.csb=w([A.As,A.hg],x.O)
D.csc=w([A.b8,A.bo,A.ff],x.O)
D.OY=w([A.bK,A.hE,A.hU,A.aw,A.mK],x.O)
D.cuT=w([A.bY,D.j5,D.Ka],x.O)
D.cvq=w([1,2,4,8,16,32,64,128,27,54,108,216,171,77,154,47,94,188,99,198,151,53,106,212,179,125,250,239,197,145],x.t)
D.ecW=new B.y(4278913286,4280030216)
D.edd=new B.y(4279373061,4278518787)
D.edk=new B.y(4279898630,4278847235)
D.cUx=w([D.ecW,D.edd,D.edk],x.n)
D.cQq=w(["\u265b","\u269c","\u2726"],x.s)
D.dxm=new C.xf("Royal Onyx & Gold",D.cUx,4292128567,4294370209,4294965479,3874020544,D.cQq)
D.ecJ=new B.y(4278326799,4278598442)
D.ecL=new B.y(4278395929,4278258953)
D.ecS=new B.y(4278599728,4278327826)
D.d9K=w([D.ecJ,D.ecL,D.ecS],x.n)
D.cLe=w(["\u269c","\u2756","\u2727"],x.s)
D.dxj=new C.xf("Imperial Emerald",D.d9K,4293050997,4294699968,4294180856,3872254170,D.cLe)
D.ecM=new B.y(4278455076,4278918747)
D.ecR=new B.y(4278587439,4278322714)
D.ed4=new B.y(4279051376,4278455076)
D.d7X=w([D.ecM,D.ecR,D.ed4],x.n)
D.d0A=w(["\u2654","\u2726","\u2748"],x.s)
D.dxd=new C.xf("Sapphire Crown",D.d7X,4291417834,4294967295,4294310143,3871986666,D.d0A)
D.edi=new B.y(4279894534,4283041554)
D.edu=new B.y(4281008906,4279042307)
D.edC=new B.y(4284221976,4279894534)
D.ddj=w([D.edi,D.edu,D.edC],x.n)
D.cMv=w(["\u265b","\u2766","\u2726"],x.s)
D.dxf=new C.xf("Ruby Throne",D.ddj,4293378685,4294963145,4294964466,3874213833,D.cMv)
D.edc=new B.y(4279371039,4281995100)
D.edm=new B.y(4280092723,4278714896)
D.edz=new B.y(4283045242,4279371039)
D.da5=w([D.edc,D.edm,D.edz],x.n)
D.d8i=w(["\u2655","\u2756","\u2727"],x.s)
D.dxk=new C.xf("Amethyst Palace",D.da5,4293314984,4294963421,4294702591,3873229802,D.d8i)
D.ecO=new B.y(4278519045,4280032287)
D.ed5=new B.y(4279111184,4278321666)
D.edr=new B.y(4280492839,4278716426)
D.d6S=w([D.ecO,D.ed5,D.edr],x.n)
D.cZZ=w(["\u2726","\u25c6","\u2742"],x.s)
D.dxh=new C.xf("Obsidian & Platinum",D.d6S,4293256418,4294967295,4294638330,3872378836,D.cZZ)
D.edj=new B.y(4279896588,4282194463)
D.eds=new B.y(4280553487,4279043334)
D.edA=new B.y(4283048488,4279896588)
D.cZu=w([D.edj,D.eds,D.edA],x.n)
D.dbG=w(["\u2766","\u273f","\u2727"],x.s)
D.dxe=new C.xf("Rose Gold Velvet",D.cZu,4293440672,4294960345,4294964979,3874214602,D.dbG)
D.ecP=new B.y(4278520340,4279180595)
D.ecU=new B.y(4278718495,4278322443)
D.edg=new B.y(4279510591,4278520340)
D.cBz=w([D.ecP,D.ecU,D.edg],x.n)
D.d_E=w(["\u269c","\u2736","\u2756"],x.s)
D.dxi=new C.xf("Midnight Brass",D.cBz,4291405148,4293975208,4294439914,3872837564,D.d_E)
D.edP=new B.y(4294703086,4293780428)
D.edL=new B.y(4294307549,4293187253)
D.edQ=new B.y(4294966517,4293977807)
D.cOy=w([D.edP,D.edL,D.edQ],x.n)
D.d02=w(["\u269c","\u265b","\u2726"],x.s)
D.dxl=new C.xf("Ivory Marble & Gold",D.cOy,4289760572,4286209048,4280951062,3863625518,D.d02)
D.ed_=new B.y(4278978566,4280555024)
D.edf=new B.y(4279504137,4278518530)
D.edw=new B.y(4281211923,4278978566)
D.cMm=w([D.ed_,D.edf,D.edw],x.n)
D.d9_=w(["\u2742","\u2726","\u265c"],x.s)
D.dxg=new C.xf("Onyx & Copper",D.cMm,4291856987,4294365880,4294964718,3873885630,D.d9_)
D.cvy=w([D.dxm,D.dxj,D.dxd,D.dxf,D.dxk,D.dxh,D.dxe,D.dxi,D.dxl,D.dxg],B.ax("P<xf>"))
D.cxP=w([A.aw,D.Ao,A.hE],x.O)
D.ekJ=new B.y("Original",null)
D.ekR=new B.y("Wide 16:9",1.7777777777777777)
D.en4=new B.y("Landscape 3:2",1.5)
D.ekc=new B.y("Photo 4:3",1.3333333333333333)
D.elU=new B.y("Square",1)
D.exp=new B.y("Portrait 3:4",0.75)
D.atJ=w([D.ekJ,D.ekR,D.en4,D.ekc,D.elU,D.exp],B.ax("P<+(n,N?)>"))
D.atK=w([A.hE,A.bV,A.b7,A.by],x.O)
D.ene=new B.y("","Original")
D.ep2=new B.y("circle","Circle")
D.euA=new B.y("rounded","Rounded")
D.evu=new B.y("triangle","Triangle")
D.er3=new B.y("hexagon","Hexagon")
D.epr=new B.y("diamond","Diamond")
D.eoi=new B.y("arch","Arch")
D.BL=w([D.ene,D.ep2,D.euA,D.evu,D.er3,D.epr,D.eoi],x.L)
D.dss=new C.l6("classic_blue","Classic Blue","Normal",A.bj,A.c,A.ke,A.dq,A.aK)
D.dsI=new C.l6("campus_green","Campus Green","Normal",A.aZ,A.mQ,A.t3,A.h3,A.eu)
D.dsz=new C.l6("warm_sand","Warm Sand","Normal",A.dT,A.hU,A.bK,A.it,A.nC)
D.dsG=new C.l6("slate_minimal","Slate Minimal","Normal",A.bv,A.aQ,A.aL,A.M,A.aK)
D.dsr=new C.l6("coral_fresh","Coral Fresh","Normal",A.cb,A.iq,A.qv,A.jO,A.rY)
D.dsH=new C.l6("lavender_calm","Lavender Calm","Normal",A.b5,A.pg,A.Ac,A.pj,A.jr)
D.dst=new C.l6("ocean_breeze","Ocean Breeze","Normal",A.f7,A.qG,A.rT,A.uQ,A.nD)
D.adP=new B.w(1,0.9803921568627451,0.9607843137254902,1,A.t)
D.dsE=new C.l6("berry_pop","Berry Pop","Normal",A.fg,D.adP,A.k9,G.WL,A.EE)
D.dsu=new C.l6("midnight_pro","Midnight Pro","Professional",A.aE,A.M,A.dv,A.k9,A.cp)
D.dsD=new C.l6("executive_navy","Executive Navy","Professional",A.d6,A.adb,A.dq,A.l1,A.bJ)
D.dsB=new C.l6("boardroom_charcoal","Boardroom Charcoal","Professional",A.ak,A.bm,A.M,A.aQ,A.cp)
D.dsv=new C.l6("corporate_steel","Corporate Steel","Professional",A.mO,A.M,A.ma,A.fh,A.bJ)
D.dsy=new C.l6("gold_luxe","Gold Luxe","Luxury",A.om,A.dE,A.on,A.lB,A.bK)
D.bec=new B.w(1,0.10196078431372549,0.0392156862745098,0.058823529411764705,A.t)
D.dsC=new C.l6("rose_gold_elite","Rose Gold Elite","Luxury",A.hg,D.bec,A.WB,A.io,A.mK)
D.dsF=new C.l6("platinum_night","Platinum Night","Luxury",A.cp,A.dK,A.bm,A.aQ,A.aL)
D.dsJ=new C.l6("emerald_prestige","Emerald Prestige","Luxury",A.aV,A.pm,A.eX,A.pt,A.js)
D.dsq=new C.l6("royal_purple","Royal Purple","Luxury",A.mP,A.VL,A.jr,A.k9,A.K2)
D.dsA=new C.l6("neon_pitch","Neon Pitch","Bold",A.b7,A.dK,A.M,A.b1,A.aL)
D.dsx=new C.l6("crimson_impact","Crimson Impact","Bold",A.bI,A.kc,A.er,A.tf,A.f3)
D.dsw=new C.l6("sunset_gallery","Sunset Gallery","Bold",A.fD,A.rY,A.jO,A.qv,A.op)
D.GC=w([D.dss,D.dsI,D.dsz,D.dsG,D.dsr,D.dsH,D.dst,D.dsE,D.dsu,D.dsD,D.dsB,D.dsv,D.dsy,D.dsC,D.dsF,D.dsJ,D.dsq,D.dsA,D.dsx,D.dsw],B.ax("P<l6>"))
D.cJf=w([A.bY,D.j5],x.O)
D.cZK=w(["\ud83d\ude00","\ud83d\ude03","\ud83d\ude04","\ud83d\ude01","\ud83d\ude0a","\ud83d\ude0e","\ud83e\udd29","\ud83e\udd73","\ud83d\ude07","\ud83e\udd17","\ud83d\ude4c","\ud83d\udc4f","\ud83e\udd1d","\ud83d\udc4d","\ud83d\udc4b","\ud83d\udcaa","\ud83d\ude4f","\u2728"],x.s)
D.eo4=new B.y("Faces & people",D.cZK)
D.cxT=w(["\ud83d\udca1","\ud83c\udfaf","\ud83d\ude80","\ud83d\udcc8","\ud83d\udcca","\ud83d\udccc","\ud83d\udccd","\ud83d\udce3","\ud83d\udd14","\ud83e\udded","\ud83d\udee0\ufe0f","\ud83d\udd27","\u2699\ufe0f","\ud83e\udde0","\ud83d\udcda","\ud83d\udcdd","\u270f\ufe0f","\ud83d\udcd6","\ud83d\uddc2\ufe0f","\ud83d\udcc5","\u23f0","\u2705","\u274c","\u26a0\ufe0f","\u2753","\u2757"],x.s)
D.ebP=new B.y("Ideas & work",D.cxT)
D.cQV=w(["\ud83c\udf3f","\ud83c\udf31","\ud83c\udf33","\ud83c\udf38","\ud83c\udf3c","\ud83c\udf3b","\ud83c\udf1e","\ud83c\udf08","\ud83c\udf0a","\ud83d\udd25","\ud83d\udca7","\u2744\ufe0f","\ud83c\udf19","\u2b50","\ud83c\udf1f","\u2600\ufe0f","\ud83c\udf40"],x.s)
D.er8=new B.y("Nature",D.cQV)
D.cZS=w(["\ud83c\udfe0","\ud83c\udfeb","\ud83c\udfe5","\ud83c\udfe6","\ud83c\udfea","\ud83d\ude97","\ud83d\ude8c","\u2708\ufe0f","\ud83c\udf81","\ud83d\udcb0","\ud83d\udcb5","\ud83d\udcb3","\ud83d\uded2","\ud83c\udfc6","\ud83e\udd47","\ud83c\udf89","\ud83c\udf88","\ud83c\udfb6","\ud83c\udfb5","\ud83c\udfa4","\ud83d\udcf7","\ud83c\udfac","\ud83d\uddbc\ufe0f","\ud83d\udcbb","\ud83d\udcf1"],x.s)
D.ekH=new B.y("Places & things",D.cZS)
D.cU7=w(["\u2764\ufe0f","\ud83d\udc9a","\ud83d\udc99","\ud83d\udc9c","\ud83e\udde1","\ud83d\udc9b","\ud83d\udda4","\ud83e\udd0d","\u2b06\ufe0f","\u27a1\ufe0f","\ud83d\udd36","\ud83d\udd37","\ud83d\udd34","\ud83d\udfe2","\ud83d\udd35","\ud83d\udfe1"],x.s)
D.eon=new B.y("Symbols",D.cU7)
D.cJl=w([D.eo4,D.ebP,D.er8,D.ekH,D.eon],B.ax("P<+(n,ai<n>)>"))
D.cJo=w(["HOME: the first tab. It has the NGMY brand, the Helper AI, loans, and the tech frames: Neural Link, Signal Grid, Core Protocol and the Vault Channel arcade.","TOOL HUB: the second tab. It holds the Business Card Creator, Menu Studio (restaurant menus and Bio link pages) and Business Essentials (invoices, receipts, flyers and other business papers).","SLIDES: the third tab. Presentations with many designs, an AI that makes decks, and Marriage documents.","NGMY HUB: the centre tab. Civic Registry, NGMY Store, Help Center and Insurance, Document Scanner, and the App Builder when it is switched on.","ADVISORS: the fifth tab. AI advisors you can chat with like real people. They help with jobs, applications, benefits and everyday questions, and they can answer in Swahili when you write Swahili.","CREATOR HUB: the sixth tab. Doc Share, Quote Calc, QR Generator, Play Zone, Kiswahili School, Recorder Studio, Video Studio and Phone Unlock.","PROFILE: the seventh tab. Theme, logout, legal pages and Worksheets (Projects, Cashier IOUs and receipts, and the Family Tree).","GROWTH INCOME: For now the Growth Income button (the wifi icon, top right of Home) works only for the admin: everyone else sees the same icon but it does not open. members buy an investment plan and earn daily by clocking in, on work days only (Monday to Friday, there is no clock-in on Saturday and Sunday). The wallet shows the balance, deposits, withdrawals and a history of the last two months, with the balance before and after each move. Missing 3 work days in a month removes the investment plan (a new plan must be bought), and the count starts again each month; a warning shows after the 2nd missed day. Clocking in 30 minutes late or more takes 30 percent off the earnings for that day. The investment plans are $5, $20, $30, $50 and $100; $100 is the most expensive plan and nothing above it is offered.","KING AND QUEEN CROWN: a crown badge for special members. A King or Queen receives a daily crown reward of one dollar, and the receipt shows in the wallet history.","WALLET: one balance everywhere in the app. The server keeps the balance so every phone shows the same number.","LOANS: Loan Services is a community help service: it helps members when they need help, for example funerals, buying a car, car repairs or family emergencies. For now the Loan Service button (top left of Home) works only for the admin: everyone else sees the same icon but it cannot be opened. The loan calculator (amount, interest rate and repayment period to try, the whole cost and every payment, and a button to make the tried terms the real loan terms) is for the admin only. The How it works frame is a five-step timeline (Apply, Review, Funds, Repay, Released). A loan is applied for with collateral, repaid in weekly payments, and the collateral is released back to the member when the loan is fully repaid. The admin sets the interest rate, the biggest loan and the repayment period in Loan Center, Loan terms; nothing is written into the screens. Before applying, the member sees the full cost (amount, interest, total to repay, number of payments, each payment, repayment period) and must tap I agree; the agreement is saved with the application. The application asks what the member needs help with (Funeral or Burial, Buy a car, Car repair, Family emergency, Other need), the date needed, the collateral with its estimated value and photos, and an optional family or guarantor contact. A loan shows as Pending, Approved, Paid Out, In Repayment, Repaid, Overdue or Declined, and the member sees a gentle reminder about the next payment.","NGMY STORE: buy and sell items inside the app. Approved members can open a store.","CIVIC REGISTRY: the community system for the M'MBONDO community. It registers members with a Registry ID card, counts members by state, records contributions with receipts, and lets Authorized Registrars enroll families. Registrars can print the community roster as a PDF.","CIVIC BIRTHDAYS AND FAMILY: the registry records children and their ages, shows a birthday reminder two days before, and congratulates a child on turning 18. Members can have a nickname that others search for, while registrars see the real name.","CIVIC VOTING AND STATE WALLET: the community votes on decisions inside the app, and each state has a wallet showing its funds, spending and trust deposits so the money is visible to everyone.","LIGHTNING GROUPS: groups inside the Civic Registry where people give together. A person asks to join with a name, phone number, state and address, and the group owner approves. The group shows named contribution rounds, receipts, who gave, who missed and how many times.","JOBS AND HELP: help finding jobs, house repairs and house workers, a Help Center with insurance, and the Helper AI for support.","CORE PROTOCOL: a collection of studios for curious minds: Universe, Electronics Lab (the AI Inventor now lives inside it as the AI button at the top), Construction Lab (real 3D wiring, plumbing and a house), Discovery Lab (Body Explorer, a real 3D human you can turn and look inside), Toolbox, Molecule Maker, DNA Lab, Ecosystem Lab, Balance Lab, Gear Lab, Laser Maze, Light Mixer, Cipher Lab, Reaction Lab, Spark Painter, Rocket Lander, Orbit Studio, Swarm Studio, Chain Burst, Title Animator, Circuit Lab, Marble Music and Orbit Sequencer.","CITY AVATARS: the people of My House use characters from the NGMY 3D viewer: the X Bot (white robot with glowing eyes), the Dancer (long hair and bun) and the Soldier (helmet, vest and pack), next to ordinary people. The X Bot is the one who goes through the rooms on the house tour and that you steer outside; in the tour sheet (Play) a Who walks the house? choice switches the tour guide to the Dancer, the Soldier or a plain person. The residents stay in the house, some stroll out into the garden for a while and go back in, and a resident with an open call for help holds a phone to the ear and shows a phone icon in the name. The characters are rebuilt from shapes in the game, the real viewer files are not loaded.",'CONSTRUCTION LAB: a trade school in real looking 3D, MY HOUSE (top card of the Construction Lab): a finished furnished house with 5 bedrooms, 3 bathrooms, a kitchen, a living room and a hall, each drawn as a cut-away 3D room. A little map in the corner shows where you are, tap a room to go there, or use the door buttons; red marks a room whose wiring needs work and blue one whose plumbing does. Signals in the room (a red No power sign, a blue Needs plumbing sign, bare pipe stubs) show what is wrong; the Wiring and Plumbing buttons, or a tap on the outlet, light, toilet or sink, open the same hands-on jobs and the room is finished when the job is. Furniture, walls, floor, ceiling and doors only react while their own edit button is on: Furniture (add, move with arrows, turn, change colour, remove), Walls (paint one wall or all), Floor (wood, carpet or tile), Ceiling, Doors (open and close). A Learn button opens short beginner cards on safety, wiring, plumbing, framing and tools. In My House you are inside the room by default (a low view, like standing in the doorway) and a button switches to a view of the whole room from above. A \ud83c\udfac Tour button plays a life-like person (an adult with a face, hair, arms, legs and a real stride) who comes in through the front door and walks through the whole house like a film, in the time you choose (30 seconds, 1, 2, 3 or 5 minutes), after every TV is switched on. The walk is planned round the furniture and fixtures, so the person never goes through a wall, a chair or a table; in the living room and the bedrooms the person picks up the remote and switches the ad on the TV, in the kitchen they take a drink from the fridge, in the bathrooms they wash their hands, and between rooms they open the door and walk through into the hall. The doors really swing open and show the next room behind them; when the person opens a door the camera moves in towards it, then the picture dissolves into the next room (the hall, a bedroom, a bathroom) where the camera starts on the door they come out of, and the door closes behind them as they walk on. TVs on the wall go from 100 inches to 150, 200 and a whole-wall TV: each is as big as the free stretch of wall allows, never over a door, with nothing in front of it, and the person on the tour stands beside the TV and not in front of it. The hall is wider and deeper, has all ten doors on its back wall and a big TV on each end wall. A \ud83d\udd04 Look all round (360) button puts you in the middle of a closed room (solid ceiling and four walls) to turn all the way round by dragging; a double tap on the floor walks you to that spot, and from above or in the garden a double tap takes the view closer to where you tapped. The view can never go under the floor. The garden is a big lawn you can walk all the way round, and the house outside has windows and doors on all four sides, a porch, a chimney and a roof; with the Furniture button you can add and move trees, pines, bushes, flowers, fences, street lamps, benches, cars, roads, ponds, swings, sheds and dog houses. The cards on the Construction Lab home screen are centred, with a glowing round icon and a soft colour. COMMUNITY (a card on the Construction Lab home screen and a Community button in My House): the seven people who live in the house (Ama, Joseph, Grace, Daniel, Fatima, Papa Moses and Mama Rose, each with their own look) get hungry over time, can fall sick, and become unhappy when their room has no power or their sink leaks; they stand in their rooms in the house as people you can tap, with a word over their head showing how they are. The player feeds them (food), gives medicine, sends the sick to the hospital (three beds: each patient needs treating before their care runs out and goes home better), and buys food and medicine in the shop with points. People who are starving, sick or unhappy for too long lose health and can die. Calls for help arrive in plain words ("My outlet is dead and it is dark in here", "The sink leaks"): Go and fix it opens the house on that room, the real wiring or plumbing job is done, and when it works the call finishes and earns 15 points; wiring and plumbing also break by themselves from time to time so there is always something to do. Hospital discharges, feeding and medicine earn points too. Everything is saved (the people, supplies, calls and which rooms are fixed or broken) and time passes only gently while the app is closed. Inside a room the view stays inside the house: you can look about a little but you cannot swing round behind the walls, and a Go outside button (and Go inside in the garden) is the only way out. Everything in a room is drawn in layers (the floor and walls first, then what is fixed to them like the TV, the plates, the frames and the doors, then the furniture and the person), so the edges of a TV or a door never disappear when you turn to the side and the person never shows through a door, a wall or their own body. The person is built from rounded parts with real joints (a head with a face and hair, shoulders, elbows, knees, hands and shoes), the foot that is down always stands on the floor, and the walk keeps a body-width away from furniture and walls. A TV button puts a wall TV (five models, the big ones up to 77 inches) in a room, or in every room, and turns TVs on and off. An Add button adds outlets, GFCI outlets and light switches to a room that you wire yourself with the wiring bench, a Map button shows or hides the little map (which shrinks to fit the screen), and the Start from a bare house button makes every room need its wiring and plumbing so you can wire the whole house first. The ceiling of a room can hold a light or a fan. All the lessons on the lab home screen (Wall outlet, Light switch, GFCI outlet, Ceiling fan, Sink drain, Faucet supply lines, Build and fix a house, Learn the trades: eight tiles, four on each side) play inside a furnished room with a big TV on the wall showing the NGMY Jobs ad; the ceiling light is already in and only the thing being taught is waiting (red), and once it is done you can use it: flip the switch, plug in a lamp, TV or hair dryer, watch the fan spin. The house also has a Garden (a view of the house from outside with a tree, a path and a mailbox): the front door of the living room leads out to it and the front door there leads back in. Tap a door in a room to open it and walk through it into the next room or the hall, like in a game. Every room can be fixed, even the ones shown as finished: a finished room opens finished and you can pull devices out and wire them again. In a wired room tap an outlet to plug something in (five big TVs from Beovision to Apple TV that play NGMY ads, a lamp, a toaster or a hair dryer) or unplug it, tap the wall switch (or the light) to turn the light or the ceiling fan on and off, and tap a TV to watch it full screen with its own brand home screen. Bedrooms have ceiling fans. Wire a room, Plumb a room and Fix a house on the lab home screen all open My House at a room that needs that job. In the wiring jobs a wrong wire can be fastened just like for real and it burns or trips the breaker when the power goes on, touching a live wire shocks (in Learn mode it hurts nothing but the shock still happens, in Practice mode it costs a life), the wire buttons that are already fastened disappear, the screw labels are kept away from the wires, finished devices have a bright frame so they are easy to find from far, finished rooms have a painted ceiling with crown moulding and no bare beams, and a TV in the room job opens full screen when tapped. The Construction Lab downloads on its own when its button is pressed, so the Core Protocol opens quickly. A TV that is plugged in and on plays the real NGMY ads right on its screen, flat on the glass like a normal TV, without opening it (tap it to watch full screen). There is a Voltage tester: in My House pick the Tester button and tap an outlet, the switch or the light (it glows and beeps when there is power and stays dark when there is none), and in the wiring jobs it is the Voltage tester right after Look in the devices tray. The Construction Lab menus are now at the top like in the Electronics Lab, the home screen of the lab is a short list of tiles with a Learn mode and Practice mode switch, a device already put in can be tapped again to open it or pull it out, and a tap that misses never moves the view. opened from the construction helmet button next to the AI button at the top of the Electronics Lab, and also as a tile in the Core Protocol. Every model can be turned with a finger, zoomed by pinching or with the zoom buttons, and any part can be tapped to zoom in and read what it is. Lessons: Wall outlet (black hot wire to the brass screw, white neutral to the silver screw, bare copper ground to the green screw), Light switch (two black wires on the two brass screws, white wires joined with a wire nut), GFCI outlet (power in on the LINE screws, the LOAD screws are covered with yellow tape, press RESET then TEST), Sink drain (build the tailpiece, P-trap and trap arm, tighten the slip nuts, run the water and see the water seal that blocks sewer gas), Faucet supply lines (hot red hose on the left, cold blue hose on the right, then open the shut-off valves) and a whole house cut open at the front that can be built stage by stage (slab, framing, plumbing rough-in, electrical rough-in, drywall, fixtures, roof), where a tripped breaker and a leaking slip nut can be fixed and each fixture opens its own lesson. The electrical lessons start with the breaker ON and refuse any wire until it is turned OFF, and every wrong connection is explained in plain words. BUILD A WHOLE ROOM (also WIRE A ROOM quick start, and a Skip to the wiring button in the tray, which do the framing, cable and drywall for you so you start straight at wiring the outlets, switches, light and fan with coloured labelled screws, the tester, the TV and the switch test; the room has a window wall, a door wall and the working wall): a project with three phases (rough-in, drywall, devices). Rough-in: mount wall boxes, ceiling boxes and a fan box on the studs with the drill, and unroll the cable through the studs and ceiling (a wrong route gives an error). Drywall: hang the sheets, cut holes with the drywall saw, screw them to the studs, then tape, mud, sand and paint. Devices: wire outlets, several switches, a ceiling light and a ceiling fan, each with a switch to test, then plug in a TV and other appliances. The screw terminals have different colours (brass gold hot, silver neutral, green ground) and show a label when tapped. A Behind the wall / In front button lets you choose which side of the wall you look from instead of the camera turning by itself. Learn mode tells you what to do next and explains every wrong move; Practice mode only speaks up when something is done wrong, and real wiring mistakes shock (three lives) or burn. SERVICE CALLS (Fix a house, learn and practice): a customer rings with four problems chosen from twelve kinds (tripped breaker, no hot water, leaking slip nut, leaking crimped joint, dead outlet, flickering light, burnt outlet, tripped GFCI, running toilet, dripping faucet, hole in the wall, clogged sink), a different mix every time; use Look and test, then the right tool from the toolbox (hand, screwdriver, pliers, wrench, crimp tool, plunger, new flapper, new outlet, drywall patch); wires must have their breaker switched off first. PLUMBING JOBS (learn and practice): fit out a bathroom (flange, wax ring, toilet, bolts, shut-off valve, supply hose, then the sink) or a kitchen sink piece by piece, with the order checked (the app says why a piece cannot go there yet), the main water valve turned off before cutting into pipes, joints tightened with the wrench, and finally the water turned on to find leaks.',"MY HOUSE, THE WORLD OUTSIDE: go outside from the living room (Go outside, or the front door) into a big garden town you can walk and decorate. It starts with a main street, a lane up to the house, a crossroads, a shop, a hospital with a red cross, a fire station with a fire truck, a school, a second house, an ambulance and a car, trees, a pond, lampposts, a bench and fenced animals. In Furniture mode the Add tray offers road pieces (straight, corner, T-junction, crossroads) that snap to a grid and jump a whole piece with the arrow buttons so they always join up, buildings (house, shop, hospital, fire station, school), cars, a fire truck, an ambulance, animals (dog, cat, cow, sheep, chicken, horse) that wander about, trees, bushes, flowers, fences, a bench, a swing, a shed and a doghouse. Everything can be moved, turned, recoloured and removed with the buttons, and nothing reacts to a tap unless the Furniture button is on. Walk about puts a person in the world: hold the arrows to walk (up is away from you), or double tap a spot to send them there; they walk round buildings, vehicles, trees and fences, and walking up to the front door takes them back into the living room. The camera never goes under the ground.","ELECTRONICS LAB: build real circuits with 56 parts in two tool rows, both at the top above the board (swipe sideways), under a redesigned top bar with the lab name, a live count of working and burnt parts, buttons for ready-made circuits, repair, clear and help, and a challenge card with a progress bar: batteries, solar panel, hand crank, wind turbine, switch, fuse, bulb, LED, motor, radio, TV, fan, speaker, clock, calculator, phone charger, WiFi router, siren, toy car, kettle, desk lamp, party lights, voltmeter and ammeter, step-down converter (brings big battery volts down to 3 to 9 V so a phone, tablet, headphones or smart watch is safe), 5 V regulator (gets hot), diode (one way, 0.7 V drop), light sensor, LED strip, water pump, hair dryer, headphones, smart watch, tablet, fridge, washing machine, blender, drone, power drill, torch, neon sign, microwave, doorbell, security camera, game console, heart monitor, aquarium, lighthouse, disco ball, robot and toaster. Each gadget needs the right volts and the right way round: the lab explains why something is not working (not connected, only one end wired, plugged in backwards, flat battery, switch open, too few volts, burnt out and why). A 1.5 volt battery starts flat and must be charged by a solar panel first. The TV shows NGMY animation channels: it opens on the big screen by itself for a minute when it first switches on, and tapping it 3 times quickly opens the big screen. Each TV brand shows its apps in its own design: Samsung with a Smart Hub bar along the bottom, LG with webOS wide launcher cards, Sony with Google TV rows and a picture card, Apple TV with big rounded icons that rise when selected, and Bang and Olufsen with a quiet warm text menu. The TV has 10 NGMY animation channels, a remote control at the top middle of the big screen (CH minus, CH plus, TV, Apps, Ads) and 8 apps inside the TV screen (there is no Growth Income ad or app on the TVs): NGMY Ads (every promotion as cartoons), Civic Registry, Jobs, NGMY Store (African and traditional food, supporting the Congolese and African community), Kiswahili, Doc Scanner, Invoices and Calendar. Each ad is a little cartoon with a kid character. Premium devices with screens play the NGMY cartoon ads on their own screens: TVs (Samsung Neo QLED 8K, LG OLED evo G5, Sony Bravia 9, Apple TV 4K, Bang and Olufsen Beovision), phones (iPhone 18 Pro Max with a Dynamic Island, iPhone Fold, Galaxy S26 Ultra, Galaxy Z Fold7, Pixel 10 Pro XL, Xiaomi 16 Ultra, Huawei Mate 80 Pro Max, OPPO Find X9 Ultra, Honor Magic V5, vivo X300 Pro), tablets and readers (iPad Pro, Kindle Scribe), computers (MacBook Pro, iMac, Pro Display XDR monitor, Sony laser projector, luxury car touchscreen, Apple Vision Pro). Tapping a screen 3 times opens its big screen (a phone opens like an iPhone, a computer shows a desktop with a dock and app windows). Tapping it 4 times opens a size sheet so the screen can be made bigger (never smaller than normal). Sample circuit: Phone and TV on one battery, using a step-down converter. The AI button at the top of the lab opens the AI Inventor, which builds what you describe on the lab board.  Every battery and solar panel can only give so many amps: when the gadgets connected ask for more, a red warning triangle appears on the power source, its volts sag, gadgets switch off and the lab explains why. The lab saves your board and your challenges by itself, so nothing disappears when you leave. The challenges sit behind a flag button in the top bar (with a number on it for how many are left), next to the dark glowing AI button and the help button.","BODY EXPLORER: a real 3D human body built from medical anatomy data. You can turn it, zoom in, switch layers (skin, muscles, organs, skeleton, blood vessels), tap any part to learn about it, hear the heart beat, and take a quiz.","KISWAHILI SCHOOL: learn English and Swahili with pictures and the teacher Mwalimu Amina.","FAMILY TREE AND FAMILY BOOK: build a family tree, then keep a Family Book library of up to six books. The AI can write a whole new book from the tree, in English or Swahili, and the cover can be designed. The look of the top of each book can be chosen from eight header designs (classic leather, ornate gold, parchment, clean paper, midnight, emerald, rose vintage, modern) with the Header button, and the book title also shows as a small running title on every page.","NOTES: business notes with search, photos and cards.","NGMY QUOTES: make a picture quote with many designs, word sizes, text styles, your own photo and the NGMY logo. It also makes NEWS: a newspaper page with a headline, article and your picture, written by an AI that knows NGMY.","BIO STUDIO: link-in-bio pages with designs such as Neural Core, Quantum Grid and Mech Terminal, and visitors can react to a page.","MENU STUDIO: restaurant menus published as a link.","BUSINESS CARD CREATOR: design and download business cards.","INVOICES AND QUOTE CALC: invoices, receipts and estimates with NGMY watermarks.","DOC SHARE, QR GENERATOR, RECORDER STUDIO, VIDEO STUDIO, PLAY ZONE AND PHONE UNLOCK: tools in the Creator Hub.","APP BUILDER: describe an app and the AI builds it, including real web apps you can publish.","DOCUMENT SCANNER: scan papers with the phone camera.","GAME CENTER AND VAULT ARCADE: arcade games you can play. Game bets and wins have their own receipts and do not appear in the wallet history. Games played offline are saved on the phone and counted on the balance, then applied to the account in order as soon as the phone is online again, and every device updates."],x.s)
D.b5L=new B.w(1,0.22745098039215686,0.15294117647058825,0.03137254901960784,A.t)
D.cJK=w([A.bY,D.acl,D.b5L],x.O)
D.b0_=new B.ac(0,A.G,A.K_,A.aFd,40)
D.b_H=new B.ac(0,A.G,A.nA,A.ej,8)
D.cJW=w([D.b0_,D.b_H],x.V)
D.cKn=w([4280171146,4280640491,4279080072,4278556265],x.t)
D.au8=w([4294677052,4294626325,4293870660,4294210230,4287323382,4282090230,4280472558,4283096704,4294967295,4279310375],x.t)
D.a1k=w([A.hE,A.ff,A.bI,A.aB,A.cb],x.O)
D.cL8=w(["All","Robotic","Nature","Warm","Bold","Clean"],x.s)
D.acz=new B.w(1,0.043137254901960784,0.0392156862745098,0.03137254901960784,A.t)
D.cLj=w([A.Wr,D.acz,A.Wr],x.O)
D.cLp=w([A.hV,D.j5,D.Ka],x.O)
D.ekv=new B.y(A.bg,D.a_5)
D.elP=new B.y(A.L,D.a_4)
D.efS=new B.y(A.dL,D.a_6)
D.cMh=w([D.ekv,D.elP,D.efS],B.ax("P<+(pQ,a0)>"))
D.cQ=new C.Ib(0,"text")
D.lk=new C.Ib(1,"image")
D.f_=new C.Ib(2,"shape")
D.R8=new C.Ib(3,"pdf")
D.kS=new C.Ib(4,"signature")
D.a44=new C.Ib(5,"bio")
D.cN7=w([D.cQ,D.lk,D.f_,D.R8,D.kS,D.a44],B.ax("P<Ib>"))
D.cN8=w([A.bl,A.cD],B.ax("P<H7>"))
D.cNJ=w(["School","Documents","Sign & present"],x.s)
D.b04=new B.ac(0,A.G,A.aeo,A.ue,28)
D.cO2=w([D.b04],x.V)
D.cOl=w([4292128567,4279983648,4290190364,4279898632,4293436183,4279060385],x.t)
D.Pg=w(["Rocket","Trophy","Party popper","Confetti ball","Balloon","Wrapped gift","Birthday cake","Sparkles","Star","Glowing star","Fire","Light bulb","Gem stone","Crown","Money bag","Dollar banknote","Chart increasing","Bar chart","Bullseye","Globe showing americas","Globe showing europe-africa","Sun","Rainbow","Cloud","High voltage","Red heart","Handshake","Graduation cap","Books","Open book","Pencil","Laptop","Mobile phone","Microphone","Musical notes","Camera","Video camera","Megaphone","Bell","Calendar","Alarm clock","Hourglass done","Key","Locked","Shield","Gear","Hammer and wrench","Magnifying glass tilted left","Package","Shopping cart","House","Office building","Hospital","Ballot box with ballot","Automobile","Airplane","Seedling","Deciduous tree","Evergreen tree","Palm tree","Sunflower","Cherry blossom","Herb","Four leaf clover","Water wave","Mountain","Lion","Tiger face","Dog face","Cat face","Elephant","Unicorn","Butterfly","Honeybee","Owl","Eagle","Dolphin","Turtle","Panda","Fox","Rabbit face","Monkey face","Penguin","Horse","Bird","Peacock","Parrot","Red apple","Pizza","Hot beverage","Soccer ball","Basketball","Artist palette","Clapper board","Robot","Brain","Check mark button","Red question mark","Speech balloon","Compass","Crystal ball","Puzzle piece","1st place medal","Smiling face with sunglasses","Grinning face with big eyes","Star-struck","Partying face","Thinking face","Hundred points"],x.s)
D.aux=w([A.hE,A.ED,A.aL,A.c,A.oo,A.aw],x.O)
D.ewN=new B.y(0.1,0.08)
D.er6=new B.y(0.3,0.05)
D.efp=new B.y(0.55,0.1)
D.ejv=new B.y(0.8,0.06)
D.emy=new B.y(0.92,0.16)
D.em3=new B.y(0.2,0.2)
D.ejY=new B.y(0.7,0.22)
D.epO=new B.y(0.05,0.4)
D.emX=new B.y(0.95,0.45)
D.eg6=new B.y(0.12,0.7)
D.eih=new B.y(0.88,0.75)
D.eip=new B.y(0.4,0.9)
D.ee4=new B.y(0.65,0.93)
D.ej7=new B.y(0.25,0.97)
D.eks=new B.y(0.85,0.9)
D.egW=new B.y(0.5,0.04)
D.cPG=w([D.ewN,D.er6,D.efp,D.ejv,D.emy,D.em3,D.ejY,D.epO,D.emX,D.eg6,D.eih,D.eip,D.ee4,D.ej7,D.eks,D.egW],x.G)
D.cPN=w([A.c,A.hg,A.aS,A.aV],x.O)
D.dTG=new C.jB("office_blue","Office Blue",A.bj,A.dq,A.aK,A.c,A.ke)
D.dTR=new C.jB("campus_green","Campus Green",A.aZ,A.h3,A.eu,A.mQ,A.t3)
D.dTH=new C.jB("sunset","Sunset",A.fD,A.jO,A.nC,A.iq,A.qv)
D.dTI=new C.jB("midnight","Midnight",A.aE,A.k9,A.cp,A.M,A.dv)
D.dTT=new C.jB("classic","Classic",A.d9,A.dE,A.lC,A.hU,A.h1)
D.dTQ=new C.jB("rose_gold","Rose Gold",A.hg,A.x0,A.x_,A.v_,A.As)
D.dTB=new C.jB("ocean_teal","Ocean Teal",A.f7,A.uQ,A.nD,A.qG,A.rT)
D.dTA=new C.jB("slate_pro","Slate Pro",A.bv,A.M,A.aK,A.aQ,A.aL)
D.dTz=new C.jB("neon_night","Neon Night",A.b7,A.b1,A.aL,A.dK,A.M)
D.dTL=new C.jB("lavender","Lavender",A.b5,A.pj,A.jr,A.pg,A.Ac)
D.dTN=new C.jB("coral","Coral",A.cb,A.jO,A.rY,A.iq,A.op)
D.dTC=new C.jB("forest","Forest",A.hh,A.e9,A.cC,A.lD,A.es)
D.dTD=new C.jB("berry","Berry",A.fg,G.WL,A.EE,D.adP,A.k9)
D.dTK=new C.jB("sand","Sand",A.dT,A.it,A.nC,A.hU,A.bK)
D.dTP=new C.jB("ice","Ice",A.mO,A.Ks,A.aK,A.mM,A.fh)
D.dTF=new C.jB("charcoal","Charcoal",A.ak,A.aQ,A.cp,A.bm,A.M)
D.dTy=new C.jB("mint","Mint",A.aV,A.fv,A.h3,A.lD,A.pt)
D.dTO=new C.jB("crimson","Crimson",A.bI,A.mS,A.kc,A.EB,A.tf)
D.b8c=new B.w(1,0.996078431372549,0.9882352941176471,0.9098039215686274,A.t)
D.dTJ=new C.jB("gold","Gold",A.om,A.uO,A.on,D.b8c,A.lB)
D.dTM=new C.jB("aqua","Aqua",A.bN,A.Eq,A.ok,A.pi,A.oq)
D.dTE=new C.jB("plum","Plum",A.mP,A.wY,A.EE,A.Ec,A.ta)
D.dTS=new C.jB("steel","Steel",A.d6,A.dq,A.bm,A.ke,A.l1)
D.a1z=w([D.dTG,D.dTR,D.dTH,D.dTI,D.dTT,D.dTQ,D.dTB,D.dTA,D.dTz,D.dTL,D.dTN,D.dTC,D.dTD,D.dTK,D.dTP,D.dTF,D.dTy,D.dTO,D.dTJ,D.dTM,D.dTE,D.dTS],B.ax("P<jB>"))
D.cQ7=w([A.bY,A.j7],x.O)
D.Ra=new C.hw(10,"rotate3d")
D.Hz=new C.hw(8,"flip")
D.aEH=new C.hw(19,"spiral")
D.q_=new C.hw(16,"bounce")
D.aEK=new C.hw(9,"flipVertical")
D.cQ8=w([D.Ra,D.Hz,D.aEH,D.q_,D.aEK],x.i)
D.e5=w([1353184337,1399144830,3282310938,2522752826,3412831035,4047871263,2874735276,2466505547,1442459680,4134368941,2440481928,625738485,4242007375,3620416197,2151953702,2409849525,1230680542,1729870373,2551114309,3787521629,41234371,317738113,2744600205,3338261355,3881799427,2510066197,3950669247,3663286933,763608788,3542185048,694804553,1154009486,1787413109,2021232372,1799248025,3715217703,3058688446,397248752,1722556617,3023752829,407560035,2184256229,1613975959,1165972322,3765920945,2226023355,480281086,2485848313,1483229296,436028815,2272059028,3086515026,601060267,3791801202,1468997603,715871590,120122290,63092015,2591802758,2768779219,4068943920,2997206819,3127509762,1552029421,723308426,2461301159,4042393587,2715969870,3455375973,3586000134,526529745,2331944644,2639474228,2689987490,853641733,1978398372,971801355,2867814464,111112542,1360031421,4186579262,1023860118,2919579357,1186850381,3045938321,90031217,1876166148,4279586912,620468249,2548678102,3426959497,2006899047,3175278768,2290845959,945494503,3689859193,1191869601,3910091388,3374220536,0,2206629897,1223502642,2893025566,1316117100,4227796733,1446544655,517320253,658058550,1691946762,564550760,3511966619,976107044,2976320012,266819475,3533106868,2660342555,1338359936,2720062561,1766553434,370807324,179999714,3844776128,1138762300,488053522,185403662,2915535858,3114841645,3366526484,2233069911,1275557295,3151862254,4250959779,2670068215,3170202204,3309004356,880737115,1982415755,3703972811,1761406390,1676797112,3403428311,277177154,1076008723,538035844,2099530373,4164795346,288553390,1839278535,1261411869,4080055004,3964831245,3504587127,1813426987,2579067049,4199060497,577038663,3297574056,440397984,3626794326,4019204898,3343796615,3251714265,4272081548,906744984,3481400742,685669029,646887386,2764025151,3835509292,227702864,2613862250,1648787028,3256061430,3904428176,1593260334,4121936770,3196083615,2090061929,2838353263,3004310991,999926984,2809993232,1852021992,2075868123,158869197,4095236462,28809964,2828685187,1701746150,2129067946,147831841,3873969647,3650873274,3459673930,3557400554,3598495785,2947720241,824393514,815048134,3227951669,935087732,2798289660,2966458592,366520115,1251476721,4158319681,240176511,804688151,2379631990,1303441219,1414376140,3741619940,3820343710,461924940,3089050817,2136040774,82468509,1563790337,1937016826,776014843,1511876531,1389550482,861278441,323475053,2355222426,2047648055,2383738969,2302415851,3995576782,902390199,3991215329,1018251130,1507840668,1064563285,2043548696,3208103795,3939366739,1537932639,342834655,2262516856,2180231114,1053059257,741614648,1598071746,1925389590,203809468,2336832552,1100287487,1895934009,3736275976,2632234200,2428589668,1636092795,1890988757,1952214088,1113045200],x.t)
D.cQt=w([0.62,1],x.x)
D.cR2=w([0,0.32,0.68,1],x.x)
D.mv=new C.hw(6,"zoom")
D.u8=new C.hw(4,"slideUp")
D.u7=new C.hw(2,"slideLeft")
D.cRb=w([D.mv,D.Hz,D.u8,D.Ra,D.u7],x.i)
D.cRG=w([A.bV,A.hg,A.io,A.hE,A.c],x.O)
D.b_V=new B.ac(0,A.G,D.acM,A.ue,30)
D.cSn=w([D.b_V],x.V)
D.e2a=new B.u(0,-2.5)
D.e20=new B.u(-2.5,0)
D.e0J=new B.u(2.5,0)
D.cSq=w([A.Rq,A.a4r,A.aFJ,A.a4q,D.e2a,H.aFF,D.e20,D.e0J],x.dN)
D.GJ=w([0,79764919,159529838,222504665,319059676,398814059,445009330,507990021,638119352,583659535,797628118,726387553,890018660,835552979,1015980042,944750013,1276238704,1221641927,1167319070,1095957929,1595256236,1540665371,1452775106,1381403509,1780037320,1859660671,1671105958,1733955601,2031960084,2111593891,1889500026,1952343757,2552477408,2632100695,2443283854,2506133561,2334638140,2414271883,2191915858,2254759653,3190512472,3135915759,3081330742,3009969537,2905550212,2850959411,2762807018,2691435357,3560074640,3505614887,3719321342,3648080713,3342211916,3287746299,3467911202,3396681109,4063920168,4143685023,4223187782,4286162673,3779000052,3858754371,3904687514,3967668269,881225847,809987520,1023691545,969234094,662832811,591600412,771767749,717299826,311336399,374308984,453813921,533576470,25881363,88864420,134795389,214552010,2023205639,2086057648,1897238633,1976864222,1804852699,1867694188,1645340341,1724971778,1587496639,1516133128,1461550545,1406951526,1302016099,1230646740,1142491917,1087903418,2896545431,2825181984,2770861561,2716262478,3215044683,3143675388,3055782693,3001194130,2326604591,2389456536,2200899649,2280525302,2578013683,2640855108,2418763421,2498394922,3769900519,3832873040,3912640137,3992402750,4088425275,4151408268,4197601365,4277358050,3334271071,3263032808,3476998961,3422541446,3585640067,3514407732,3694837229,3640369242,1762451694,1842216281,1619975040,1682949687,2047383090,2127137669,1938468188,2001449195,1325665622,1271206113,1183200824,1111960463,1543535498,1489069629,1434599652,1363369299,622672798,568075817,748617968,677256519,907627842,853037301,1067152940,995781531,51762726,131386257,177728840,240578815,269590778,349224269,429104020,491947555,4046411278,4126034873,4172115296,4234965207,3794477266,3874110821,3953728444,4016571915,3609705398,3555108353,3735388376,3664026991,3290680682,3236090077,3449943556,3378572211,3174993278,3120533705,3032266256,2961025959,2923101090,2868635157,2813903052,2742672763,2604032198,2683796849,2461293480,2524268063,2284983834,2364738477,2175806836,2238787779,1569362073,1498123566,1409854455,1355396672,1317987909,1246755826,1192025387,1137557660,2072149281,2135122070,1912620623,1992383480,1753615357,1816598090,1627664531,1707420964,295390185,358241886,404320391,483945776,43990325,106832002,186451547,266083308,932423249,861060070,1041341759,986742920,613929101,542559546,756411363,701822548,3316196985,3244833742,3425377559,3370778784,3601682597,3530312978,3744426955,3689838204,3819031489,3881883254,3928223919,4007849240,4037393693,4100235434,4180117107,4259748804,2310601993,2373574846,2151335527,2231098320,2596047829,2659030626,2470359227,2550115596,2947551409,2876312838,2788305887,2733848168,3165939309,3094707162,3040238851,2985771188],x.t)
D.cST=w([23,114,69,56,80,144],x.t)
D.cTi=w(["Make the headline shorter","Add a paragraph about the Civic Registry","Write the whole thing in Swahili","Change the newspaper name"],x.s)
D.cTH=w(["Add a slide about\u2026","Make this slide shorter","Translate everything to Swahili","Add a slide with our contact details","Change the style to luxury","Remove the last slide"],x.s)
D.cV9=w([null,4294626325,4294828103,4283096704,4280472558,4294210230,4294677052,4293870660,4287323382,4282090230,4294967295,4279310375],x.Z)
D.cVd=w(["Kichwa cha Mtu: [Kiasi kilichosalia au thamani]","Mbuzi Mbili","Ngyoka","Mmoko"],x.s)
D.be=new C.uu(0,"rectangle")
D.eI=new C.uu(1,"circle")
D.kT=new C.uu(6,"hexagon")
D.cVp=w([D.be,D.eI,D.kT],x.m)
D.o_=w([99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22],x.t)
D.adW=new B.w(1,0.24313725490196078,0.47843137254901963,0.30980392156862746,A.t)
D.cVX=w([D.adW,A.e9],x.O)
D.efA=new B.y("","Classic")
D.eeh=new B.y("caps","Bold caps")
D.epR=new B.y("elegant","Elegant")
D.euT=new B.y("shadow","Shadow")
D.ejR=new B.y("neon","Neon glow")
D.etw=new B.y("outline","Outline")
D.esI=new B.y("marker","Highlighter")
D.ev3=new B.y("stamp","Stamp")
D.euv=new B.y("retro","Retro")
D.eiP=new B.y("threed","3D")
D.eqm=new B.y("fire","Fire")
D.eri=new B.y("ice","Ice")
D.ep1=new B.y("chalk","Chalk")
D.ep6=new B.y("comic","Comic")
D.ev5=new B.y("sunset","Sunset")
D.ewc=new B.y("softglow","Soft glow")
D.esh=new B.y("lowercase","Lowercase")
D.epy=new B.y("double","Echo")
D.ewl=new B.y("whisper","Whisper")
D.avp=w([D.efA,D.eeh,D.epR,D.euT,D.ejR,D.etw,D.esI,D.ev3,D.euv,D.eiP,H.aKS,D.eqm,D.eri,D.ep1,D.ep6,A.a5f,D.ev5,D.ewc,D.esh,D.epy,D.ewl],x.L)
D.cXa=w([3,5,7,10,12,15],x.t)
D.cYu=w([A.bV,A.bK,A.c,A.ez,A.ct],x.O)
D.dk6=new C.t3(10,"cardWorld")
D.Cb=new C.B_(3,"rounded")
D.dAn=new C.l9("world","NGMY World",D.dk6,D.Cb,4278918980,4278521378,4294967295,4280118271,"logo","Roboto","Roboto","Roboto","a modern digital news site: clear, confident and direct, a strong plain headline and a one-sentence summary",!1,"none",!0,!1)
D.dk7=new C.t3(11,"cardSplit")
D.dAj=new C.l9("business","Business Wire",D.dk7,D.Cb,4294967295,4294507260,4279179050,4292943150,"logo","Roboto","Roboto","Roboto","a clean business news site: precise, informative and professional, with a plain, strong headline",!1,"none",!1,!1)
D.dk8=new C.t3(12,"cardBreaking")
D.dAw=new C.l9("breaking","Breaking Red",D.dk8,D.Cb,4278913807,4280944139,4294967295,4292943150,"logo","Roboto","Roboto","Roboto","a breaking-news broadcast: urgent, factual and clear, a punchy headline and a tight summary",!1,"none",!0,!1)
D.dk9=new C.t3(13,"cardFeature")
D.dAp=new C.l9("feature","Tech Feature",D.dk9,D.Cb,4294967295,4294047225,4279179050,4280640491,"logo","Roboto","Roboto","Roboto","a modern feature article: informative, engaging and well explained",!1,"none",!1,!1)
D.aDc=new C.t3(6,"circle")
D.aD6=new C.B_(4,"circle")
D.dAt=new C.l9("parchment","Royal Circle",D.aDc,D.aD6,4294241234,4293450160,4281278992,4285211048,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a stately royal edition: dignified, noble and ceremonial",!0,"sepia",!1,!1)
D.dAi=new C.l9("ocean","Blue Ocean",D.aDc,D.aD6,4293916415,4292602622,4278984254,4278413729,"centered","NgmyAbril","NgmyAbril","NgmyOldStandard","a calm, trustworthy paper: clear, steady and reassuring",!1,"none",!1,!1)
D.dkc=new C.t3(7,"rail")
D.aD5=new C.B_(1,"double")
D.dAk=new C.l9("forest","Green Leaf",D.dkc,D.aD5,4293983732,4292672743,4278529558,4279599165,"centered","NgmyAbril","NgmyAbril","NgmyOldStandard","a calm community paper about growth and togetherness: gentle, hopeful and clear",!1,"none",!1,!1)
D.aD9=new C.t3(1,"sideBySide")
D.dAy=new C.l9("herald","NGMY Herald",D.aD9,D.Cb,4294967295,4294308863,4280163147,4286331629,"split","NgmyAbril","NgmyAbril","NgmyOldStandard","the proud NGMY Herald: warm, hopeful and community-minded, in NGMY purple",!1,"none",!1,!1)
D.aD8=new C.t3(0,"classic")
D.a3h=new C.B_(9,"shadow")
D.dAx=new C.l9("daily","The Daily",D.aD8,D.a3h,4294967295,4294243570,4279308561,4292225064,"bar","NgmyAbril","NgmyAbril","NgmyOldStandard","a modern daily newspaper: crisp, clear and energetic, with a punchy headline",!1,"none",!1,!0)
D.dka=new C.t3(2,"splash")
D.aD7=new C.B_(6,"cutCorner")
D.dAh=new C.l9("tabloid","Big Tabloid",D.dka,D.aD7,4294967295,4294965216,4279308561,4292943176,"bar","Roboto","NgmyAbril","Roboto","a bold tabloid: exciting, short punchy sentences and a loud, attention-grabbing headline (still truthful)",!1,"none",!1,!0)
D.aDd=new C.t3(9,"minimal")
D.dAs=new C.l9("modern","Modern Digest",D.aDd,D.Cb,4294507260,4293060848,4279179050,4279080072,"logo","Roboto","Roboto","Roboto","a clean modern digest: simple words, short paragraphs, friendly and clear",!1,"none",!1,!1)
D.aDa=new C.t3(3,"magazine")
D.aD4=new C.B_(0,"plain")
D.dAo=new C.l9("midnight","Midnight Edition",D.aDa,D.aD4,4279310375,4278915104,4294047225,4294626325,"logo","Roboto","NgmyAbril","NgmyOldStandard","a dramatic late-night edition: confident, cinematic and polished",!1,"none",!0,!0)
D.dkd=new C.t3(8,"banner")
D.dAq=new C.l9("metro","Metro Wire",D.dkd,D.aD7,4294047225,4293060848,4278915616,4280640491,"logo","Roboto","Roboto","Roboto","a modern news wire: fast, factual and direct, like breaking news",!1,"none",!1,!0)
D.dk5=new C.B_(8,"arch")
D.dAr=new C.l9("sunrise","Sunrise Post",D.aDa,D.dk5,4294965229,4294962645,4282064136,4293548044,"split","NgmyAbril","NgmyAbril","NgmyOldStandard","a cheerful morning paper: bright, optimistic and welcoming",!1,"none",!1,!1)
D.aDb=new C.t3(5,"scrapbook")
D.dk4=new C.B_(5,"tape")
D.dAm=new C.l9("neon","Neon Beat",D.aDb,D.dk4,4280163147,4279175726,4294308863,4293675161,"split","NgmyAbril","NgmyAbril","Roboto","a youthful neon culture paper: fresh, bold, energetic and fun",!1,"none",!0,!1)
D.dkb=new C.t3(4,"wrap")
D.dAz=new C.l9("gold","Golden Press",D.dkb,D.a3h,4279505162,4278847748,4294898631,4294626325,"logo","Roboto","NgmyAbril","NgmyOldStandard","a luxurious golden press edition: grand, elegant and prestigious",!1,"none",!0,!0)
D.dAA=new C.l9("minimal","Paper White",D.aDd,D.a3h,4294967295,4294638330,4279769115,4279769115,"split","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a quiet, elegant long-read: thoughtful, simple and beautifully written",!1,"none",!1,!1)
D.dAl=new C.l9("gazette","Fresh Gazette",D.aD8,D.aD5,4294373341,4293582786,4280949518,4288295954,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a refined town gazette: formal, dignified and warm, with a strong headline",!1,"none",!1,!0)
D.dAv=new C.l9("times","Classic Times",D.aD9,D.aD4,4294637810,4293913565,4279636750,4280171146,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a serious classic broadsheet: calm, factual, authoritative, with a strong headline and a clear subhead",!1,"bw",!1,!1)
D.QH=new C.B_(2,"polaroid")
D.dAu=new C.l9("scrapbook","Memory Scrapbook",D.aDb,D.QH,4294437835,4293580710,4282001946,4290007817,"split","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a warm scrapbook clipping: personal, nostalgic and heartfelt",!1,"sepia",!1,!1)
D.a1P=w([D.dAn,D.dAj,D.dAw,D.dAp,D.dAt,D.dAi,D.dAk,D.dAy,D.dAx,D.dAh,D.dAs,D.dAo,D.dAq,D.dAr,D.dAm,D.dAz,D.dAA,D.dAl,D.dAv,D.dAu],B.ax("P<l9>"))
D.cYG=w([0.45,1],x.x)
D.GL=w([619,720,127,481,931,816,813,233,566,247,985,724,205,454,863,491,741,242,949,214,733,859,335,708,621,574,73,654,730,472,419,436,278,496,867,210,399,680,480,51,878,465,811,169,869,675,611,697,867,561,862,687,507,283,482,129,807,591,733,623,150,238,59,379,684,877,625,169,643,105,170,607,520,932,727,476,693,425,174,647,73,122,335,530,442,853,695,249,445,515,909,545,703,919,874,474,882,500,594,612,641,801,220,162,819,984,589,513,495,799,161,604,958,533,221,400,386,867,600,782,382,596,414,171,516,375,682,485,911,276,98,553,163,354,666,933,424,341,533,870,227,730,475,186,263,647,537,686,600,224,469,68,770,919,190,373,294,822,808,206,184,943,795,384,383,461,404,758,839,887,715,67,618,276,204,918,873,777,604,560,951,160,578,722,79,804,96,409,713,940,652,934,970,447,318,353,859,672,112,785,645,863,803,350,139,93,354,99,820,908,609,772,154,274,580,184,79,626,630,742,653,282,762,623,680,81,927,626,789,125,411,521,938,300,821,78,343,175,128,250,170,774,972,275,999,639,495,78,352,126,857,956,358,619,580,124,737,594,701,612,669,112,134,694,363,992,809,743,168,974,944,375,748,52,600,747,642,182,862,81,344,805,988,739,511,655,814,334,249,515,897,955,664,981,649,113,974,459,893,228,433,837,553,268,926,240,102,654,459,51,686,754,806,760,493,403,415,394,687,700,946,670,656,610,738,392,760,799,887,653,978,321,576,617,626,502,894,679,243,440,680,879,194,572,640,724,926,56,204,700,707,151,457,449,797,195,791,558,945,679,297,59,87,824,713,663,412,693,342,606,134,108,571,364,631,212,174,643,304,329,343,97,430,751,497,314,983,374,822,928,140,206,73,263,980,736,876,478,430,305,170,514,364,692,829,82,855,953,676,246,369,970,294,750,807,827,150,790,288,923,804,378,215,828,592,281,565,555,710,82,896,831,547,261,524,462,293,465,502,56,661,821,976,991,658,869,905,758,745,193,768,550,608,933,378,286,215,979,792,961,61,688,793,644,986,403,106,366,905,644,372,567,466,434,645,210,389,550,919,135,780,773,635,389,707,100,626,958,165,504,920,176,193,713,857,265,203,50,668,108,645,990,626,197,510,357,358,850,858,364,936,638],x.t)
D.cZ1=w(["video/webm;codecs=vp9","video/webm;codecs=vp8","video/webm","video/mp4"],x.s)
D.fP_=new C.oo("Original",0,1,1,0,0,0)
D.fP3=new C.oo("Black & white",0,1.1,0,0,0,0)
D.fOR=new C.oo("Noir",-0.05,1.55,0,0,0,0)
D.fOV=new C.oo("Sepia",0,1,0.25,0.9,0,0)
D.fOU=new C.oo("Vivid",0,1.15,1.6,0,0,0)
D.fON=new C.oo("Pop",0,1.3,1.9,0,0,0)
D.fOP=new C.oo("Faded",0.06,0.85,0.8,0.1,0,0.4)
D.fP0=new C.oo("Matte",0,0.9,0.85,0,0,0.55)
D.fOW=new C.oo("Cool",0,1.05,1,-0.8,0,0)
D.fP2=new C.oo("Warm",0.03,1.05,1.1,0.8,0,0)
D.fOO=new C.oo("Golden hour",0.04,1,1.25,1,0,0)
D.fOT=new C.oo("Moonlight",-0.08,1.1,0.8,-0.8,-0.1,0)
D.fP1=new C.oo("Dreamy",0.08,0.85,1.1,0.2,0,0.25)
D.fOS=new C.oo("Dramatic",-0.05,1.5,1.2,0,0,0)
D.fOY=new C.oo("Retro",0,0.9,0.7,0.4,0,0.35)
D.fOX=new C.oo("Forest",0,1,1.2,-0.1,-0.45,0)
D.fOZ=new C.oo("Rose",0,1,1.1,0.3,0.4,0)
D.fOQ=new C.oo("Ocean",0,1,1.2,-0.5,-0.2,0)
D.cZ2=w([D.fP_,D.fP3,D.fOR,D.fOV,D.fOU,D.fON,D.fOP,D.fP0,D.fOW,D.fP2,D.fOO,D.fOT,D.fP1,D.fOS,D.fOY,D.fOX,D.fOZ,D.fOQ],B.ax("P<oo>"))
D.b5c=new B.w(1,0.0392156862745098,0.1803921568627451,0.09019607843137255,A.t)
D.cZ3=w([D.adW,A.e9,D.b5c],x.O)
D.ebI=new B.y(0.12,0.3)
D.ert=new B.y(0.26,0.75)
D.epN=new B.y(0.8,0.22)
D.evd=new B.y(0.9,0.7)
D.esg=new B.y(0.5,0.15)
D.ety=new B.y(0.65,0.85)
D.ehp=new B.y(0.08,0.85)
D.cZf=w([D.ebI,D.ert,D.epN,D.evd,D.esg,D.ety,D.ehp],x.G)
D.avz=w([A.b7,A.bV,A.by,A.b8],x.O)
D.d_2=w([y.L,"Mbuzi Wawili","Ngyoka","Mmoko"],x.s)
D.d_e=w([A.c,A.fh,A.dy,A.uR],x.O)
D.b8p=new B.w(1,0.10980392156862745,0.09019607843137255,0.06274509803921569,A.t)
D.d0b=w([D.b8p,D.acz],x.O)
D.d0c=w([A.wU,A.aw],x.O)
D.d0q=w([0,0.25,0.75,1],x.x)
D.d0s=w([A.wQ,A.oo],x.O)
D.aEh=new C.kM(10,"kenteSunset")
D.fTf=w([D.acX,A.jK,A.aw],x.O)
D.dvF=new C.ji("kuhowa_kente_sunset","Kente ya Jua",y.H,D.aEh,4294964964,4282000405,4279983648,D.jC)
D.aEi=new C.kM(11,"indigoMudcloth")
D.b68=new B.w(1,0.9686274509803922,0.9411764705882353,0.8941176470588236,A.t)
D.fTt=w([D.b68,A.acw,A.hV],x.O)
D.dvN=new C.ji("kuhowa_indigo_mudcloth","Nguo ya Indigo",y.n,D.aEi,4294439140,4279903102,4279903102,D.jC)
D.aEj=new C.kM(12,"adinkraRoyal")
D.biI=new B.w(1,0.4196078431372549,0.24705882352941178,0.12156862745098039,A.t)
D.fTu=w([D.abv,D.biI,A.aw],x.O)
D.dvP=new C.ji("kuhowa_adinkra_royal","Muhuri wa Adinkra",y.z,D.aEj,4294965484,4285218591,4287322667,D.jC)
D.aEk=new C.kM(13,"nileLotus")
D.bf3=new B.w(1,0.9568627450980393,0.9686274509803922,0.9568627450980393,A.t)
D.bbS=new B.w(1,0.058823529411764705,0.3607843137254902,0.3607843137254902,A.t)
D.fTz=w([D.bf3,D.bbS,A.hV],x.O)
D.dvO=new C.ji("kuhowa_nile_lotus","Lotus ya Nile","Nguzo za papyrus na ua la lotus juu.",D.aEk,4294244340,4279196764,4279196764,D.jC)
D.aEl=new C.kM(14,"shweshweIvory")
D.ba9=new B.w(1,0.9725490196078431,0.9568627450980393,0.9333333333333333,A.t)
D.b92=new B.w(1,0.10588235294117647,0.16470588235294117,0.2901960784313726,A.t)
D.b6C=new B.w(1,0.7686274509803922,0.3607843137254902,0.24313725490196078,A.t)
D.fTg=w([D.ba9,D.b92,D.b6C],x.O)
D.dvK=new C.ji("kuhowa_shweshwe_ivory","Shweshwe","Nguo ya shweshwe \xb7 kadi ya pembe ndani.",D.aEl,4294505710,4279970378,4291058750,D.jC)
D.rg=new C.kM(15,"certIvoryNavy")
D.fTe=w([D.KM,D.j5,A.hV],x.O)
D.aDN=new C.xd(1,"ringsNdoa")
D.dvH=new C.ji("kuhowa_rings_ndoa","Hati ya Ndoa","Pete mbili \xb7 vichwa vya kidonge \xb7 hati rasmi.",D.rg,4294966259,4279378237,4291404327,D.aDN)
D.a3N=new C.xd(2,"coupleCards")
D.dvC=new C.ji("kuhowa_couple_taarifa","Taarifa za Wanandoa","Picha ya mwanamume na mwanamke kila upande.",D.rg,4294966259,4279378237,4291404327,D.a3N)
D.Ce=new C.kM(18,"certIvoryNavyBar")
D.abu=new B.w(1,1,0.9882352941176471,0.9686274509803922,A.t)
D.fTs=w([D.abu,D.j5,A.hV],x.O)
D.aDO=new C.xd(3,"kuhoweshaForm")
D.dvA=new C.ji("kuhowa_barua","Barua ya Kuhowesha","Barua rasmi \xb7 pete \xb7 orodha ya vitu.",D.Ce,4294966519,4279378237,4291404327,D.aDO)
D.acK=new B.w(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,A.t)
D.fTM=w([D.KM,D.acK,A.hV],x.O)
D.a3O=new C.xd(4,"mahariPande")
D.dvD=new C.ji("kuhowa_mahari_pande","Mahari ya Pande","Masharti ya mahari \xb7 pande mbili.",D.rg,4294966259,4279904068,4291404327,D.a3O)
D.aEm=new C.kM(16,"certIvoryGreen")
D.b9A=new B.w(1,0.12156862745098039,0.30196078431372547,0.22745098039215686,A.t)
D.fTi=w([A.K3,D.b9A,A.hV],x.O)
D.aDP=new C.xd(5,"familiaMti")
D.dvJ=new C.ji("kuhowa_sheria_familia","Sheria za Familia","Mti wa familia \xb7 sheria za pamoja.",D.aEm,4294966776,4280241466,4291404327,D.aDP)
D.a3P=new C.xd(6,"ndoaSafi")
D.dvB=new C.ji("kuhowa_ndoa_pamoja","Ndoa ya Pamoja","Safu mbili \xb7 mume na mke.",D.Ce,4294966519,4279378237,4291404327,D.a3P)
D.bdB=new B.w(1,0.22745098039215686,0.16470588235294117,0.06274509803921569,A.t)
D.fTl=w([D.KM,A.hV,D.bdB],x.O)
D.a3Q=new C.xd(7,"peteWide")
D.dvG=new C.ji("kuhowa_pete_pana","Pete Pana","Pete kubwa za dhahabu \xb7 nafasi wazi.",D.rg,4294966259,4282001936,4291404327,D.a3Q)
D.dvQ=new C.xd(8,"muhuriCrest")
D.dvz=new C.ji("kuhowa_muhuri","Muhuri wa Familia","Muhuri mkubwa juu \xb7 fomu rasmi.",D.rg,4294966259,4279378237,4291404327,D.dvQ)
D.fTv=w([D.abu,D.acK,A.hV],x.O)
D.dvR=new C.xd(9,"fomuWazi")
D.dvM=new C.ji("kuhowa_fomu","Fomu ya Ndoa","Fomu yenye mistari \xb7 sehemu wazi.",D.Ce,4294966519,4279904068,4291404327,D.dvR)
D.aEn=new C.kM(17,"certIvoryRose")
D.bac=new B.w(1,1,0.9725490196078431,0.9607843137254902,A.t)
D.fTy=w([D.bac,D.ady,A.hV],x.O)
D.a3M=new C.xd(10,"upendoOrnate")
D.dvI=new C.ji("kuhowa_upendo","Upendo wa Dhahabu","Mapambo ya dhahabu \xb7 picha za wanandoa.",D.aEn,4294965493,4286200650,4291404327,D.a3M)
D.d0Q=w([D.dvF,D.dvN,D.dvP,D.dvO,D.dvK,D.dvH,D.dvC,D.dvA,D.dvD,D.dvJ,D.dvB,D.dvG,D.dvz,D.dvM,D.dvI],x.h)
D.e6=w([2774754246,2222750968,2574743534,2373680118,234025727,3177933782,2976870366,1422247313,1345335392,50397442,2842126286,2099981142,436141799,1658312629,3870010189,2591454956,1170918031,2642575903,1086966153,2273148410,368769775,3948501426,3376891790,200339707,3970805057,1742001331,4255294047,3937382213,3214711843,4154762323,2524082916,1539358875,3266819957,486407649,2928907069,1780885068,1513502316,1094664062,49805301,1338821763,1546925160,4104496465,887481809,150073849,2473685474,1943591083,1395732834,1058346282,201589768,1388824469,1696801606,1589887901,672667696,2711000631,251987210,3046808111,151455502,907153956,2608889883,1038279391,652995533,1764173646,3451040383,2675275242,453576978,2659418909,1949051992,773462580,756751158,2993581788,3998898868,4221608027,4132590244,1295727478,1641469623,3467883389,2066295122,1055122397,1898917726,2542044179,4115878822,1758581177,0,753790401,1612718144,536673507,3367088505,3982187446,3194645204,1187761037,3653156455,1262041458,3729410708,3561770136,3898103984,1255133061,1808847035,720367557,3853167183,385612781,3309519750,3612167578,1429418854,2491778321,3477423498,284817897,100794884,2172616702,4031795360,1144798328,3131023141,3819481163,4082192802,4272137053,3225436288,2324664069,2912064063,3164445985,1211644016,83228145,3753688163,3249976951,1977277103,1663115586,806359072,452984805,250868733,1842533055,1288555905,336333848,890442534,804056259,3781124030,2727843637,3427026056,957814574,1472513171,4071073621,2189328124,1195195770,2892260552,3881655738,723065138,2507371494,2690670784,2558624025,3511635870,2145180835,1713513028,2116692564,2878378043,2206763019,3393603212,703524551,3552098411,1007948840,2044649127,3797835452,487262998,1994120109,1004593371,1446130276,1312438900,503974420,3679013266,168166924,1814307912,3831258296,1573044895,1859376061,4021070915,2791465668,2828112185,2761266481,937747667,2339994098,854058965,1137232011,1496790894,3077402074,2358086913,1691735473,3528347292,3769215305,3027004632,4199962284,133494003,636152527,2942657994,2390391540,3920539207,403179536,3585784431,2289596656,1864705354,1915629148,605822008,4054230615,3350508659,1371981463,602466507,2094914977,2624877800,555687742,3712699286,3703422305,2257292045,2240449039,2423288032,1111375484,3300242801,2858837708,3628615824,84083462,32962295,302911004,2741068226,1597322602,4183250862,3501832553,2441512471,1489093017,656219450,3114180135,954327513,335083755,3013122091,856756514,3144247762,1893325225,2307821063,2811532339,3063651117,572399164,2458355477,552200649,1238290055,4283782570,2015897680,2061492133,2408352771,4171342169,2156497161,386731290,3669999461,837215959,3326231172,3093850320,3275833730,2962856233,1999449434,286199582,3417354363,4233385128,3602627437,974525996],x.t)
D.HA=new C.vG(0,"emojis")
D.Cl=new C.vG(1,"pictures")
D.HB=new C.vG(2,"icons3d")
D.a46=new C.vG(3,"animations")
D.Rc=new C.vG(4,"videoMotion")
D.Cm=new C.vG(5,"luxe")
D.a1W=w([D.HA,D.Cl,D.HB,D.a46,D.Rc,D.Cm],B.ax("P<vG>"))
D.eu8=new B.y(A.dW,"Looks")
D.ejo=new B.y(A.yc,"Light")
D.ejk=new B.y(A.n9,"Colour")
D.ehq=new B.y(A.xM,"Effects")
D.ajS=new B.a0(63112,"MaterialIcons",!1)
D.eeu=new B.y(D.ajS,"Crop")
D.d1l=w([D.eu8,D.ejo,D.ejk,D.ehq,D.eeu],x.f2)
D.d1Y=w([],x.D)
D.fTJ=w([],x.L)
D.ehD=new B.y("Flashcard",D.Hv)
D.eli=new B.y("Quiz",D.Hw)
D.en9=new B.y("Worksheet",D.Hx)
D.ekn=new B.y("Notes",D.mu)
D.elN=new B.y("Section",D.Cj)
D.d2C=w([D.ehD,D.eli,D.en9,D.ekn,D.elN],B.ax("P<+(n,mp)>"))
D.dxw=new C.kM(6,"beadedPearl")
D.bcv=new B.w(1,0.47843137254901963,0.3607843137254902,0.1803921568627451,A.t)
D.fTN=w([O.WA,D.bcv,A.hV],x.O)
D.aDL=new C.ji("malipo_beaded_pearl","Malipo \u2014 Lulu","Mpaka wa shanga za lulu kuzunguka pembeni \xb7 dhahabu na shaba.",D.dxw,4294966774,4286209070,4291404327,D.jC)
D.dxx=new C.kM(7,"artDeco")
D.bgg=new B.w(1,0.9686274509803922,0.9607843137254902,0.9490196078431372,A.t)
D.biZ=new B.w(1,0.12156862745098039,0.10588235294117647,0.08627450980392157,A.t)
D.fTL=w([D.bgg,D.biZ,A.bY],x.O)
D.aDM=new C.ji("malipo_art_deco","Malipo \u2014 Art Deco","Pembe za ngazi za kisasa \xb7 mng'ao wa dhahabu juu.",D.dxx,4294440434,4280228630,4290283019,D.jC)
D.dxy=new C.kM(8,"rosetteCorners")
D.bib=new B.w(1,0.984313725490196,0.9647058823529412,0.9372549019607843,A.t)
D.b8s=new B.w(1,0.4196078431372549,0.24705882352941178,0.16470588235294117,A.t)
D.bcq=new B.w(1,0.788235294117647,0.4823529411764706,0.23921568627450981,A.t)
D.fTo=w([D.bib,D.b8s,D.bcq],x.O)
D.aDK=new C.ji("malipo_rosette","Malipo \u2014 Duara","Medali ya duara kila pembe \xb7 shaba na mahogany.",D.dxy,4294702831,4285218602,4291394365,D.jC)
D.dxz=new C.kM(9,"modernLedger")
D.fTn=w([A.c,D.j5,D.j5],x.O)
D.aDJ=new C.ji("malipo_modern_ledger","Malipo \u2014 Kisasa","Ukanda thabiti wa bluu upande wa kushoto \xb7 mstari mwembamba.",D.dxz,4294967295,4279378237,4279378237,D.jC)
D.d2G=w([D.aDL,D.aDM,D.aDK,D.aDJ],x.h)
D.d2O=w([A.io,A.oo],x.O)
D.cg=new C.hw(0,"none")
D.dd=new C.hw(1,"fade")
D.Hy=new C.hw(3,"slideRight")
D.aEJ=new C.hw(5,"slideDown")
D.dSa=new C.hw(7,"zoomOut")
D.a45=new C.hw(11,"cube")
D.dS5=new C.hw(12,"blur")
D.aEG=new C.hw(13,"dissolve")
D.dS6=new C.hw(14,"wipeLeft")
D.dS7=new C.hw(15,"wipeRight")
D.Rb=new C.hw(17,"push")
D.dS8=new C.hw(18,"flash")
D.aEI=new C.hw(20,"swing")
D.dS9=new C.hw(21,"curtain")
D.PQ=w([D.cg,D.dd,D.u7,D.Hy,D.u8,D.aEJ,D.mv,D.dSa,D.Hz,D.aEK,D.Ra,D.a45,D.dS5,D.aEG,D.dS6,D.dS7,D.q_,D.Rb,D.dS8,D.aEH,D.aEI,D.dS9],x.i)
D.PR=w([D.a3L,D.a3J,D.a3C,D.a3D,D.a3E,D.a3H,D.a3F,D.a3G,D.a3K,D.a3I,D.aDL,D.aDM,D.aDK,D.aDJ],x.h)
D.d3f=w([y.L,"Mbuzi Mbili","Ngyoka","Mmoko"],x.s)
D.d3j=w([A.Ag,A.hE,A.bY],x.O)
D.eiJ=new B.y(A.tI,"Design")
D.evD=new B.y(D.ak8,"Word sizes")
D.es0=new B.y(A.Bu,"Text")
D.bCr=new B.a0(983182,"MaterialIcons",!1)
D.es4=new B.y(D.bCr,"Photo")
D.ee6=new B.y(A.lf,"Logo")
D.ewL=new B.y(A.G6,"News")
D.d3o=w([D.eiJ,D.evD,D.es0,D.es4,D.ee6,D.ewL],x.f2)
D.d3p=w(["golddust","sparkle","sheen"],x.s)
D.dTx=new C.er("upload_pdf",K.Na,"Upload PDF")
D.dSH=new C.er("sign_paper",A.G3,"Sign Paper")
D.bBI=new B.a0(63438,"MaterialIcons",!1)
D.dTt=new C.er("hd_photo",D.bBI,"HD Photo")
D.dSz=new C.er("sharpen",E.ZR,"Sharpen")
D.dSJ=new C.er("print",K.Na,"Download PDF")
D.dTa=new C.er("rotate",D.ajS,"Rotate")
D.dSS=new C.er("text_box",A.Bu,"Text Box")
D.dSU=new C.er("picture",A.tL,"Picture")
D.dSQ=new C.er("title",A.y6,"Title")
D.dSM=new C.er("subtitle",T.akL,"Subtitle")
D.dTj=new C.er("bullets",I.a_7,"Bullet List")
D.dSN=new C.er("numbered",A.N_,"Numbered")
D.dTm=new C.er("quote",A2.Bm,"Quote")
D.dSZ=new C.er("citation",A.pK,"Citation")
D.dTp=new C.er("date_stamp",Ah.ZW,"Date Stamp")
D.dTc=new C.er("page_number",A.y5,"Page #")
D.dTg=new C.er("header_bar",A.Bw,"Header")
D.dST=new C.er("footer_bar",Ar.a_E,"Footer")
D.dSI=new C.er("divider",A.tK,"Divider")
D.dSE=new C.er("highlight",A.a_c,"Highlight")
D.dTi=new C.er("redact",A.y9,"Redact")
D.dT5=new C.er("callout",A.Bi,"Callout")
D.dTr=new C.er("checkboxes",I.aj7,"Checklist")
D.dT2=new C.er("table",A.a_C,"Table")
D.dSX=new C.er("memo",I.a_o,"Memo")
D.dT6=new C.er("letter",A.FT,"Letter")
D.bBk=new B.a0(63259,"MaterialIcons",!0)
D.dSy=new C.er("agenda",D.bBk,"Agenda")
D.dSK=new C.er("toc",AA.akl,"Contents")
D.bBE=new B.a0(63406,"MaterialIcons",!1)
D.dT3=new C.er("sig_line",D.bBE,"Sign Line")
D.dSr=new C.er("initial_line",A.jg,"Initials")
D.dSu=new C.er("approved",A.lf,"APPROVED")
D.dT8=new C.er("draft",A.oI,"DRAFT")
D.dTe=new C.er("confidential",A.jh,"Confidential")
D.dTh=new C.er("sticky",A.Ng,"Sticky Note")
D.dTq=new C.er("progress",A.akk,"Progress")
D.bCU=new B.a0(983507,"MaterialIcons",!1)
D.dSF=new C.er("stars",D.bCU,"Star Rating")
D.dSp=new C.er("equation",A.akb,"Equation")
D.dSA=new C.er("timeline",A.Nh,"Timeline")
D.dSY=new C.er("two_col",A.a_F,"Two Columns")
D.dSC=new C.er("compare",A1.ZZ,"Compare")
D.dSn=new C.er("duplicate_el",A.fL,"Duplicate")
D.dTv=new C.er("delete_el",A.e4,"Delete")
D.dTl=new C.er("bring_fwd",O.ak4,"Bring Front")
D.dSs=new C.er("send_back",O.ak3,"Send Back")
D.dT7=new C.er("align_left",D.a_5,"Align L")
D.dTd=new C.er("align_center",D.a_4,"Align C")
D.dTu=new C.er("align_right",D.a_6,"Align R")
D.dSR=new C.er("word_count",A0.ZA,"Word Count")
D.dSO=new C.er("link_text",A.hk,"Link")
D.dTb=new C.er("phone",A.iA,"Phone")
D.dSD=new C.er("email",A.Bk,"Email")
D.dTw=new C.er("qr_placeholder",A.jj,"QR Placeholder")
D.dSx=new C.er("rectangle",A3.vo,"Rectangle")
D.dT1=new C.er("circle",A.qR,"Circle")
D.dSt=new C.er("arrow",A.iS,"Arrow")
D.dTk=new C.er("line",A.tK,"Line")
D.dSG=new C.er("triangle",A.ZX,"Triangle")
D.bBs=new B.a0(63318,"MaterialIcons",!1)
D.dSL=new C.er("grayscale",D.bBs,"Grayscale")
D.dSV=new C.er("brighten",I.ajr,"Brighten")
D.dT_=new C.er("flip_h",A.FJ,"Flip H")
D.bBz=new B.a0(63348,"MaterialIcons",!1)
D.dTs=new C.er("flip_v",D.bBz,"Flip V")
D.dTf=new C.er("cover_page",A.pF,"Cover Page")
D.dSq=new C.er("invoice",A.h9,"Invoice")
D.dSB=new C.er("resume",A.mi,"Resume")
D.dSP=new C.er("minutes",A.oC,"Minutes")
D.dSv=new C.er("lab_report",A.Nd,"Lab Report")
D.dSw=new C.er("rubric",A.xQ,"Rubric")
D.dT0=new C.er("flashcard_tool",V.G_,"Flashcard")
D.dTn=new C.er("quiz_tool",A.FX,"Quiz Block")
D.dT4=new C.er("worksheet_tool",L.FA,"Worksheet")
D.dT9=new C.er("outline_share",A.Ne,"Share Outline")
D.dTo=new C.er("export_json",D.ajd,"Export JSON")
D.dSo=new C.er("new_slide",D.Zz,"New Slide")
D.dSW=new C.er("present",A.pM,"Present")
D.d3P=w([D.dTx,D.dSH,D.dTt,D.dSz,D.dSJ,D.dTa,D.dSS,D.dSU,D.dSQ,D.dSM,D.dTj,D.dSN,D.dTm,D.dSZ,D.dTp,D.dTc,D.dTg,D.dST,D.dSI,D.dSE,D.dTi,D.dT5,D.dTr,D.dT2,D.dSX,D.dT6,D.dSy,D.dSK,D.dT3,D.dSr,D.dSu,D.dT8,D.dTe,D.dTh,D.dTq,D.dSF,D.dSp,D.dSA,D.dSY,D.dSC,D.dSn,D.dTv,D.dTl,D.dSs,D.dT7,D.dTd,D.dTu,D.dSR,D.dSO,D.dTb,D.dSD,D.dTw,D.dSx,D.dT1,D.dSt,D.dTk,D.dSG,D.dSL,D.dSV,D.dT_,D.dTs,D.dTf,D.dSq,D.dSB,D.dSP,D.dSv,D.dSw,D.dT0,D.dTn,D.dT4,D.dT9,D.dTo,D.dSo,D.dSW],B.ax("P<er>"))
D.d3Y=w([A.cp,A.ak],x.O)
D.edG=new B.y(4286331629,4292552567)
D.edt=new B.y(4280640491,4278630100)
D.edO=new B.y(4294538006,4292943176)
D.ecQ=new B.y(4278556265,4280640491)
D.cZp=w([D.edG,D.edt,D.edO,D.ecQ],x.n)
D.coj=w([4294626325,4280472558,4294210230],x.t)
D.dSi=new C.nB("colorful","Colorful",A.n9,D.cZp,4294967295,3875536895,D.coj,D.mv)
D.edh=new B.y(4279522093,4279657780)
D.edx=new B.y(4281750292,4283268111)
D.ecT=new B.y(4278603323,4279203438)
D.edy=new B.y(4282343954,4279599165)
D.cz5=w([D.edh,D.edx,D.ecT,D.edy],x.n)
D.co1=w([4288931381,4294829706,4287033260],x.t)
D.dSe=new C.nB("nature","Nature",A.G4,D.cz5,4294442727,3874290891,D.co1,D.dd)
D.edb=new B.y(4279369771,4283178389)
D.ed8=new B.y(4279179050,4286456526)
D.edp=new B.y(4280163147,4290648157)
D.ecI=new B.y(4278322711,4285343961)
D.cQl=w([D.edb,D.ed8,D.edp,D.ecI],x.n)
D.cof=w([4294210230,4280472558,4289170426],x.t)
D.dSc=new C.nB("vibe","Vibe",A.a_a,D.cQl,4294967295,3874869502,D.cof,D.u7)
D.edK=new B.y(4290007817,4292552567)
D.edE=new B.y(4286328082,4294286859)
D.edJ=new B.y(4288485197,4294538006)
D.edD=new B.y(4285343961,4293675161)
D.bVx=w([D.edK,D.edE,D.edJ,D.edD],x.n)
D.cok=w([4294829706,4294967295,4284999929],x.t)
D.dSd=new C.nB("celebration","Celebration",A.la,D.bVx,4294967295,4009752557,D.cok,D.q_)
D.ed6=new B.y(4279179050,4280171146)
D.eda=new B.y(4279310375,4280232247)
D.ecZ=new B.y(4278916151,4280172719)
D.ed7=new B.y(4279179050,4281549141)
D.cJD=w([D.ed6,D.eda,D.ecZ,D.ed7],x.n)
D.cnX=w([4281908728,4294626325,4287931320],x.t)
D.dSh=new C.nB("professional","Professional",A.Bg,D.cJD,4294967295,3872118241,D.cnX,D.Rb)
D.ed2=new B.y(4278995566,4278413729)
D.ecV=new B.y(4278727492,4279137424)
D.edq=new B.y(4280171146,4278751666)
D.ed3=new B.y(4278995566,4279590517)
D.cs4=w([D.ed2,D.ecV,D.edq,D.ed3],x.n)
D.co_=w([4286436348,4284410580,4294829706],x.t)
D.dSj=new C.nB("ocean","Ocean",I.a_H,D.cs4,4294967295,3873501950,D.co_,D.u8)
D.edF=new B.y(4286328082,4294538006)
D.edH=new B.y(4286781507,4294677052)
D.edB=new B.y(4283178389,4294197086)
D.edI=new B.y(4288295954,4294688548)
D.cFP=w([D.edF,D.edH,D.edB,D.edI],x.n)
D.col=w([4294829706,4294967295,4294747557],x.t)
D.dSk=new C.nB("sunset","Sunset",A.Nj,D.cFP,4294967295,4009749973,D.col,D.dd)
D.edS=new B.y(4294967295,4294047225)
D.edN=new B.y(4294507260,4294967295)
D.edR=new B.y(4294967295,4293060848)
D.edM=new B.y(4294507260,4294047225)
D.cTo=w([D.edS,D.edN,D.edR,D.edM],x.n)
D.cnV=w([4280640491,4279179050,4287931320],x.t)
D.dSg=new C.nB("minimal","Minimal",A3.vo,D.cTo,4279179050,4282865001,D.cnV,D.dd)
D.ed1=new B.y(4278979081,4280886564)
D.edl=new B.y(4280031511,4278979081)
D.ed9=new B.y(4279308561,4281148438)
D.ed0=new B.y(4278979081,4280031511)
D.d5R=w([D.ed1,D.edl,D.ed9,D.ed0],x.n)
D.co8=w([4292128567,4294829706,4289241758],x.t)
D.dSl=new C.nB("elegant","Elegant",A.lM,D.d5R,4294898631,3873957348,D.co8,D.aEG)
D.edn=new B.y(4280159034,4282058596)
D.ecY=new B.y(4278916151,4280163147)
D.edv=new B.y(4281208933,4278916151)
D.ede=new B.y(4279502891,4283178389)
D.dcf=w([D.edn,D.ecY,D.edv,D.ede],x.n)
D.coh=w([4294296657,4292128567,4291081725],x.t)
D.dSf=new C.nB("royal","Royal Gold",A.iV,D.dcf,4294965222,3874084351,D.coh,D.mv)
D.ecN=new B.y(4278464302,4280163147)
D.ecX=new B.y(4278916151,4279455306)
D.edo=new B.y(4280163147,4283040846)
D.ecK=new B.y(4278332450,4281413249)
D.cZ6=w([D.ecN,D.ecX,D.edo,D.ecK],x.n)
D.cnW=w([4281193663,4289170426,4294210230],x.t)
D.dSm=new C.nB("aurora","Aurora Glow",A.dW,D.cZ6,4293983738,3869766608,D.cnW,D.dd)
D.vK=w([D.dSi,D.dSe,D.dSc,D.dSd,D.dSh,D.dSj,D.dSk,D.dSg,D.dSl,D.dSf,D.dSm],B.ax("P<nB>"))
D.bd_=new B.w(0.13333333333333333,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.t)
D.d4t=w([A.qz,D.bd_,A.qz],x.O)
D.d4K=w([4279179050,4281549141,4280640491,4278556265,4292617766,4286331629,4293548044,4278751666,4294967295,4294688548],x.t)
D.d4O=w([null,4294967295,4279310375,4294626325,4280472558,4294210230,4283096704,4293870660,4282090230,4294677052],x.Z)
D.erT=new B.y("The NGMY app","Write the front-page story about the NGMY app and everything it offers.")
D.eij=new B.y("KB PABLO QR, our CEO","Write a respectful story about KB PABLO QR, Founder, President and CEO of NGMY, and what he built.")
D.emL=new B.y("Civic Registry","Write about the Civic Registry: why it was built, receipts, registrars and trust in the community.")
D.eaP=new B.y("NGMY Advisors","Write about the NGMY Advisors, the AI advisors who help members.")
D.els=new B.y("Growth Income","Write about Growth Income, the wallet and how members earn on work days.")
D.ejJ=new B.y("Core Protocol studios","Write about the Core Protocol studios, the Body Explorer and the learning labs.")
D.enU=new B.y("Surprise me","")
D.d5i=w([D.erT,D.eij,D.emL,D.eaP,D.els,D.ejJ,D.enU],x.L)
D.b6E=new B.w(1,0.9450980392156862,0.9294117647058824,0.8941176470588236,A.t)
D.bgJ=new B.w(1,0.796078431372549,0.7647058823529411,0.7019607843137254,A.t)
D.d62=w([A.c,D.b6E,D.bgJ],x.O)
D.d7O=w([1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0],x.x)
D.aEf=new C.kM(0,"heritageGold")
D.bbH=new B.w(1,0.9764705882352941,0.9450980392156862,0.8666666666666667,A.t)
D.fTO=w([D.bbH,W.acU,A.aw],x.O)
D.dvL=new C.ji("kuhowa_heritage_gold","Kuhowa \u2014 Hazina ya Dhahabu","Mpaka mzito wa kikabila \xb7 dhahabu na hudhurungi.",D.aEf,4294570461,4284234270,4292128567,D.jC)
D.aEg=new C.kM(1,"heritageCrimson")
D.b58=new B.w(1,0.9803921568627451,0.9411764705882353,0.9019607843137255,A.t)
D.baa=new B.w(1,0.4196078431372549,0.16470588235294117,0.11764705882352941,A.t)
D.bgz=new B.w(1,0.8784313725490196,0.6431372549019608,0.34509803921568627,A.t)
D.fTr=w([D.b58,D.baa,D.bgz],x.O)
D.dvE=new C.ji("kuhowa_heritage_crimson","Kuhowa \u2014 Hazina Nyekundu","Mpaka mzito wa kikabila \xb7 nyekundu na dhahabu.",D.aEg,4294635750,4285213214,4292912216,D.jC)
D.d7S=w([D.a3L,D.a3J,D.dvL,D.dvE,D.a3E,D.a3H],x.h)
D.dBD=new C.rg(1,"circuit")
D.dC5=new C.lZ("neural","Neural Link","Robotic",D.dBD,4278322711,4279179050,4280472558,4284704497,4292932350,"One link at a time, NGMY connects young people everywhere.")
D.dBC=new C.rg(0,"grid")
D.dC2=new C.lZ("signal","Signal Grid","Robotic",D.dBC,4280163147,4278322711,4289222135,4293675161,4294308863,"A strong signal starts with one voice. Make yours heard.")
D.dBI=new C.rg(2,"hexes")
D.dBO=new C.lZ("core","Core Protocol","Robotic",D.dBI,4278464302,4278322711,4281193663,4281908728,4291623921,"Our core is simple: help each other grow.")
D.aED=new C.rg(11,"diagonal")
D.dBZ=new C.lZ("steel","Steel Tech","Robotic",D.aED,4281549141,4279179050,4287931320,4281908728,4294047225,"Build with your hands, lead with your heart.")
D.aEE=new C.rg(3,"rings")
D.dBN=new C.lZ("vault","Vault Gold","Robotic",D.aEE,4280031511,4278190080,4294626325,4294286859,4294898631,"What you build together is worth more than gold.")
D.dBG=new C.rg(13,"leaves")
D.dBQ=new C.lZ("forest","Forest Morning","Nature",D.dBG,4279522093,4278529558,4283096704,4288931381,4293983732,"Like a forest, a community grows strongest together.")
D.aEF=new C.rg(5,"waves")
D.dBX=new C.lZ("ocean","Ocean Calm","Nature",D.aEF,4278413729,4278995566,4281908728,4284999929,4293982719,"Small waves become a movement. Keep going.")
D.dBJ=new C.rg(6,"sunset")
D.dC1=new C.lZ("sunset","Sunset Glow","Nature",D.dBJ,4294538006,4290648157,4294829706,4294668677,4294967295,"Every sunset is a promise that tomorrow can be better.")
D.dBK=new C.rg(7,"mountains")
D.dBP=new C.lZ("mountain","Mountain Air","Nature",D.dBK,4282595530,4280171146,4291285758,4286680312,4293849855,"Climb together. The view is better with friends.")
D.dBL=new C.rg(8,"stars")
D.dBW=new C.lZ("night","Night Sky","Nature",D.dBL,4280163147,4278190080,4294829706,4291081725,4294308863,"Dream big. NGMY is built by people who looked up.")
D.a43=new C.rg(4,"orbs")
D.dBU=new C.lZ("aurora","Aurora","Nature",D.a43,4278603323,4283178389,4281652121,4289170426,4294967295,"Light shows up when people choose to shine together.")
D.dC3=new C.lZ("sand","Sand Dune","Nature",D.aEF,4294829706,4292441862,4290007817,4294966251,4282718723,"Patience builds a legacy, one grain at a time.")
D.dBM=new C.rg(9,"rays")
D.dBT=new C.lZ("golden","Golden Hour","Warm",D.dBM,4294286859,4290321436,4294897802,4294967295,4294967295,"Your hour is now. Start where you are.")
D.dBR=new C.lZ("royal","Royal Purple","Warm",D.aED,4286456526,4290648157,4293962748,4294829706,4294967295,"Lead with respect, and people will follow with joy.")
D.dBS=new C.lZ("rose","Rose Petal","Warm",D.a43,4294668677,4292943176,4294960358,4294812847,4294967295,"Kindness is the strongest thing a community can grow.")
D.dBF=new C.rg(12,"blocks")
D.dBV=new C.lZ("electric","Electric Blue","Bold",D.dBF,4280640491,4278751666,4290438909,4294967295,4294967295,"Energy is contagious. Bring yours to NGMY.")
D.dC4=new C.lZ("mint","Fresh Mint","Bold",D.a43,4281652121,4278630100,4294967295,4289197008,4278603323,"Fresh ideas grow when young people lead.")
D.dBH=new C.rg(14,"minimal")
D.dC0=new C.lZ("white","Clean White","Clean",D.dBH,4294967295,4294047225,4280640491,4287931320,4279179050,"Simple words, strong purpose. That is NGMY.")
D.dBE=new C.rg(10,"frame")
D.dBY=new C.lZ("midnight","Midnight Gold","Clean",D.dBE,4279179050,4278322711,4294626325,4294829706,4294966251,"Quiet work in the dark makes the morning shine.")
D.dC_=new C.lZ("community","Community Green","Clean",D.aEE,4278556265,4280640491,4289197008,4290763774,4294967295,"The New Global Movement for Youth starts with you.")
D.a2m=w([D.dC5,D.dC2,D.dBO,D.dBZ,D.dBN,D.dBQ,D.dBX,D.dC1,D.dBP,D.dBW,D.dBU,D.dC3,D.dBT,D.dBR,D.dBS,D.dBV,D.dC4,D.dC0,D.dBY,D.dC_],B.ax("P<lZ>"))
D.d8e=w([D.Ao,A.wU,A.hE,A.bY],x.O)
D.d8u=w([D.adJ,D.j5],x.O)
D.d8D=w(["pdf","docx","txt","md"],x.s)
D.eA3=new B.bw(-3,150,34)
D.eA4=new B.bw(-3,214,62)
D.eA5=new B.bw(-3,288,62)
D.d9r=w([D.eA3,D.eA4,D.eA5],B.ax("P<+(N,N,N)>"))
D.d9V=w(["rays","bokeh","aurora","spotlight"],x.s)
D.dau=w(["Write","Design","Print & fold"],x.s)
D.jD=new C.uu(2,"triangle")
D.Ck=new C.uu(3,"arrow")
D.fq=new C.uu(4,"line")
D.jE=new C.uu(5,"parallelogram")
D.dax=w([D.be,D.eI,D.jD,D.Ck,D.fq,D.jE,D.kT],x.m)
D.ebW=new B.y(240,96)
D.een=new B.y(560,46)
D.daC=w([D.ebW,D.een],x.G)
D.fTZ=new C.xg(0,"classic")
D.dxC=new C.nx("heritage_gold","Urithi wa Dhahabu","Mpaka wa kitamaduni \xb7 rangi ya dhahabu na kahawia.",D.aEf,4294570461,4282000405,4284234270)
D.dxO=new C.nx("heritage_crimson","Urithi wa Nyekundu","Mpaka wa kitamaduni \xb7 rangi ya nyekundu na shaba.",D.aEg,4294635750,4281999378,4285213214)
D.dxD=new C.nx("elegant_navy","Umoja Mzuri",y.s,D.a3Y,4294967035,4279378237,4290283019)
D.dxQ=new C.nx("elegant_gold","Umoja wa Dhahabu",y.Q,D.aEo,4294966515,4281016592,4289102906)
D.dxS=new C.nx("kente_sunset","Kente ya Jua",y.H,D.aEh,4294964964,4282000405,4279983648)
D.dxA=new C.nx("indigo_mudcloth","Nguo ya Indigo",y.n,D.aEi,4294439140,4279903102,4279903102)
D.dxF=new C.nx("adinkra_royal","Muhuri wa Adinkra",y.z,D.aEj,4294965484,4285218591,4287322667)
D.dxK=new C.nx("nile_lotus","Lotus ya Nile","Nguzo za papyrus na ua la lotus juu.",D.aEk,4294244340,4279196764,4279196764)
D.dxM=new C.nx("shweshwe_ivory","Shweshwe","Nguo ya shweshwe \xb7 kadi ya pembe ndani.",D.aEl,4294505710,4279970378,4291058750)
D.fU_=new C.xg(1,"ringsNdoa")
D.dxE=new C.nx("rings_ndoa","Hati ya Ndoa","Pete mbili \xb7 vichwa vya kidonge \xb7 hati rasmi ya ndoa.",D.rg,4294966259,4279378237,4291404327)
D.fU1=new C.xg(2,"coupleCards")
D.dxP=new C.nx("couple_taarifa","Taarifa za Wanandoa","Picha ya mwanamume na mwanamke \xb7 kadi mbili za taarifa.",D.rg,4294966259,4279378237,4291404327)
D.fU2=new C.xg(3,"kuhoweshaForm")
D.dxL=new C.nx("barua_kuhowesha","Barua ya Kuhowesha","Barua rasmi \xb7 orodha ya NIMETOWEA \xb7 mashahidi.",D.Ce,4294966519,4279378237,4291404327)
D.fU3=new C.xg(4,"mahariPande")
D.dxB=new C.nx("mahari_pande","Mahari ya Pande","Masharti ya mahari \xb7 pande mbili za sahihi.",D.rg,4294966259,4279904068,4291404327)
D.fU4=new C.xg(5,"familiaMti")
D.dxR=new C.nx("sheria_familia","Sheria za Familia","Mti wa familia \xb7 sheria za pamoja \xb7 kijani.",D.aEm,4294966776,4280241466,4291404327)
D.fU5=new C.xg(6,"ndoaSafi")
D.dxI=new C.nx("ndoa_safi","Ndoa ya Pamoja","Safu mbili \xb7 mume na mke \xb7 masharti ya ndoa.",D.Ce,4294966519,4279378237,4291404327)
D.fU6=new C.xg(7,"peteWide")
D.dxH=new C.nx("pete_pana","Pete Pana","Pete kubwa za dhahabu \xb7 nafasi wazi \xb7 hati ya heshima.",D.rg,4294966259,4282001936,4291404327)
D.fU7=new C.xg(8,"muhuriCrest")
D.dxG=new C.nx("muhuri_familia","Muhuri wa Familia","Muhuri mkubwa juu \xb7 fomu rasmi ya familia.",D.rg,4294966259,4279378237,4291404327)
D.fU8=new C.xg(9,"fomuWazi")
D.dxJ=new C.nx("fomu_wazi","Fomu ya Ndoa","Fomu yenye mistari \xb7 namba \xb7 sehemu wazi za kujaza.",D.Ce,4294966519,4279904068,4291404327)
D.fU0=new C.xg(10,"upendoOrnate")
D.dxN=new C.nx("upendo_dhahabu","Upendo wa Dhahabu","Mapambo ya dhahabu \xb7 picha za wanandoa \xb7 rangi ya waridi.",D.aEn,4294965493,4286200650,4291404327)
D.Q3=w([D.dxC,D.dxO,D.dxD,D.dxQ,D.dxS,D.dxA,D.dxF,D.dxK,D.dxM,D.dxE,D.dxP,D.dxL,D.dxB,D.dxR,D.dxI,D.dxH,D.dxG,D.dxJ,D.dxN],B.ax("P<nx>"))
D.Ci=new C.aq_(0,"landscape169")
D.o2=new C.aq_(1,"portrait916")
D.dbm=w([D.Ci,D.o2],B.ax("P<aq_>"))
D.ax0=w([A.hE,A.bK,A.ct,A.io,A.c],x.O)
D.u_=w([A.bY,A.it],x.O)
D.ebb=new B.y(1000,"M")
D.efr=new B.y(900,"CM")
D.eei=new B.y(500,"D")
D.ecG=new B.y(400,"CD")
D.ebc=new B.y(100,"C")
D.efs=new B.y(90,"XC")
D.eej=new B.y(50,"L")
D.ecH=new B.y(40,"XL")
D.ebg=new B.y(10,"X")
D.efC=new B.y(9,"IX")
D.eex=new B.y(5,"V")
D.ee5=new B.y(4,"IV")
D.ebD=new B.y(1,"I")
D.dbW=w([D.ebb,D.efr,D.eei,D.ecG,D.ebc,D.efs,D.eej,D.ecH,D.ebg,D.efC,D.eex,D.ee5,D.ebD],x.ek)
D.eAZ=new B.cL(["open",A.jg,"Open & write","Keep writing this book"])
D.eBo=new B.cL(["print",A.tO,"Print as a book","Fold and staple it"])
D.dc5=w([D.eAZ,D.eBo],B.ax("P<+(n,a0,n,n)>"))
D.dcK=w([D.a45,D.mv,D.Hz,D.Rb,D.dd,D.Ra],x.i)
D.esq=new B.y(-1,"Small")
D.eb_=new B.y(0,"Normal")
D.ebC=new B.y(1,"Big")
D.ecb=new B.y(2,"Huge")
D.ddd=w([D.esq,D.eb_,D.ebC,D.ecb],x.ek)
D.ddD=w([49,65,89,38,83,89],x.t)
D.ddK=w([A.wU,A.hE,A.bY],x.O)
D.dea=w([D.dd,D.mv,D.u7,D.a45,D.Hz,D.Rb],x.i)
D.aCi=new B.dR([0,D.L3,8,D.af4,12,D.af5],B.ax("dR<H,a33>"))
D.dYh={gold:0,platinum:1,glow:2,rainbow:3,double:4,neon:5,framed:6,rosegold:7,jewels:8,aurora:9}
D.bgs=new B.w(1,0.8313725490196079,0.6274509803921569,0.09019607843137255,A.t)
D.cJN=w([A.bK,D.bgs],x.O)
D.d2o=w([A.b1,A.bj],x.O)
D.cYg=w([A.bV,A.aS,A.cn],x.O)
D.dc6=w([A.cp,A.bv],x.O)
D.cRf=w([A.b7,A.fg],x.O)
D.d_R=w([A.b5,A.f6],x.O)
D.b9V=new B.w(1,0.9529411764705882,0.7764705882352941,0.7098039215686275,A.t)
D.d_9=w([D.b9V,A.oo],x.O)
D.cUX=w([A.h_,A.wV],x.O)
D.cR3=w([A.bt,A.c8],x.O)
D.dgN=new B.bo(D.dYh,[D.cJN,H.anH,D.d2o,D.cYg,D.dc6,D.cRf,D.d_R,D.d_9,D.cUX,D.cR3],B.ax("bo<n,ai<w>>"))
D.dXr={"[Jina la Baba wa Mume]":0,"[Jina la Jamii ya Mume]":1,"[Jina la Nyumba ya Mume]":2,"[Jina la Kijana]":3,"[Jina la Binti]":4,"[Jina la Baba wa Binti]":5,"[Jina la Jamii ya Binti]":6,"[Jina la Nyumba ya Binti]":7}
D.a2Y=new B.bo(D.dXr,["[Jina la Baba wa Mume]","[Jina la Jamii ya Mume]","[Jina la Nyumba ya Mume]","[Jina la Kijana]","[Jina la Binti]","[Jina la Baba wa Binti]","[Jina la Jamii ya Binti]","[Jina la Nyumba ya Binti]"],B.ax("bo<n,n>"))
D.a33=new B.bo(A.ie,[],B.ax("bo<H,+icon3d,picture(n?,n?)>"))
D.dkQ=new F.Mk(30,null)
D.dpU=new F.ml("Chapter 1","","","")
D.db8=w([D.dpU],x.B)
D.dpY=new F.r6("My Book","","",D.db8,E.aDy)
D.dpW=new F.uk("starry",null,null,null,null,"","","")
D.dpZ=new F.r6("Dream Big","","",E.a24,D.dpW)
D.dpX=new F.uk("story",null,null,null,null,"","","")
D.dq_=new F.r6("Little Lion","","",E.a24,D.dpX)
D.dpV=new F.uk("vintage",null,null,null,null,"","","")
D.dq0=new F.r6("Our Story","","",E.a24,D.dpV)
D.dt0=new C.E5("","NGMY","","")
D.dAg=new C.z5("The NGMY Times","NGMY NEWS","","","By the NGMY Newsroom","",A.T,"","","")
D.dSb=new C.b_L(null,null,null,null)
D.dTU=new C.aq4(null)
D.dU6=new C.aqA(0,"smaller")
D.dU7=new C.aqA(1,"bigger")
D.aET=new C.aqA(2,"fit")
D.e_G=new B.u(3,6)
D.e_Q=new B.u(4,8)
D.e3e=new B.C(E.afS,T.aaS,null)
D.e3i=new B.C(A.Xx,A.lz,null)
D.bEa=new B.ae(A.ld,16,A.c_,null,null,null)
D.e3m=new B.C(A.jc,D.bEa,null)
D.b4B=new B.fi(2.2,null,null,null,null,A.c,null,null,null,null)
D.e3y=new B.C(A.Fd,D.b4B,null)
D.bOk=new B.ae(A.cy,16,A.az,null,null,null)
D.e3C=new B.C(A.en,D.bOk,null)
D.ff5=new B.x("Play",null,A.no,null,null,null,null,null,null,null,null,null)
D.d2D=w([U.amb,A.rt,D.ff5],x.p)
D.eFx=new B.cl(A.aO,A.e,A.Q,A.m,null,A.p,null,0,D.d2D,null)
D.e3F=new B.C(A.nQ,D.eFx,null)
D.b4K=new B.fi(2.4,null,null,null,null,null,null,null,null,null)
D.eKN=new B.a6(20,20,D.b4K,null)
D.e3K=new B.C(A.jc,D.eKN,null)
D.fnZ=new B.x("Seconds per slide",null,A.ho,null,null,null,null,null,null,null,null,null)
D.e3S=new B.C(A.bk,D.fnZ,null)
D.e5c=new C.a7T(2,"print")
D.e5f=new B.iM(1,0.7764705882352941,0.1568627450980392,0.1568627450980392)
D.e6S=new B.h6("/Annot")
D.e6U=new B.h6("/URI")
D.f9C=new B.x("Share text outline",null,null,null,null,null,null,null,null,null,null,null)
D.e8S=new B.jk("share",48,D.f9C,null,B.ax("jk<n>"))
D.bOe=new B.ae(A.dW,14,A.ez,null,null,null)
D.e90=new B.cK(null,-2,-2,null,null,null,D.bOe,null)
D.bdq=new B.w(0.3333333333333333,0,0,0,A.t)
D.cLJ=w([D.bdq,A.K],x.O)
D.bUn=new B.a7(A.a3,A.a7,A.x,D.cLJ,null,null)
D.aYv=new B.o(null,null,null,null,null,D.bUn,A.n)
D.bl3=new B.kJ(D.aYv,A.bd,null,null)
D.e9c=new B.cK(0,0,null,0,8,null,D.bl3,null)
D.d6T=w([A.hU,A.op,A.cb],x.O)
D.e9R=new B.bR(A.A,0.5,A.x,null,0,D.d6T,null,null)
D.ec4=new B.y(0.22,A.bj)
D.efX=new B.y("ai","Your newspaper is ready. Tell me anything you want changed, or ask me a question about NGMY.")
D.ehZ=new B.y(0.5,A.hg)
D.er1=new B.y(0.78,A.aV)
D.eAQ=new B.cL([A.by,0.22,0.7,2.6])
D.eAV=new B.cL([A.b7,0.36,1.2,1.3])
D.eB0=new B.cL([A.dO,0.28,0.2,0.4])
D.eB6=new B.cL([A.cx,0.05,0.3,0.35])
D.eBc=new B.cL([A.bt,0.28,0.9,0])
D.eBk=new B.cL([A.aE,-0.25,-0.15,0.45])
D.eC7=new B.cL([A.bV,0.42,1,4.1])
D.eFf=new B.a8M(9)
D.bFg=new B.ae(A.G6,28,A.cn,null,null,null)
D.foy=new B.x("NGMY News",null,A.du,null,null,null,null,null,null,null,null,null)
D.buN=new B.bD(1,A.bi,D.foy,null)
D.d9Y=w([D.bFg,A.av,D.buN],x.p)
D.eFr=new B.cl(A.aO,A.e,A.j,A.m,null,A.p,null,0,D.d9Y,null)
D.bFr=new B.ae(A.pK,16,A.c,null,null,null)
D.fpZ=new B.x("Book",null,A.o9,null,null,null,null,null,null,null,null,null)
D.ddJ=w([D.bFr,A.eb,D.fpZ],x.p)
D.eFz=new B.cl(A.aO,A.e,A.Q,A.m,null,A.p,null,0,D.ddJ,null)
D.bLR=new B.ae(A.jh,10,A.c,null,null,null)
D.fdf=new B.x("Pro",null,A.nm,null,null,null,null,null,null,null,null,null)
D.d2I=w([D.bLR,A.q6,D.fdf],x.p)
D.eFD=new B.cl(A.aO,A.e,A.Q,A.m,null,A.p,null,0,D.d2I,null)
D.fnY=new B.x("Make a newspaper",null,Au.Ta,null,null,null,null,null,null,null,null,null)
D.bVv=w([E.a01,A.ab,D.fnY],x.p)
D.eFE=new B.cl(A.aO,A.e,A.Q,A.m,null,A.p,null,0,D.bVv,null)
D.bKp=new B.ae(A.la,18,A.bK,null,null,null)
D.ffj=new B.x("Ending celebration",null,A.i3,null,null,null,null,null,null,null,null,null)
D.d92=w([D.bKp,A.bp,D.ffj],x.p)
D.eFH=new B.cl(A.aO,A.e,A.j,A.m,null,A.p,null,0,D.d92,null)
D.bLD=new B.ae(A.jg,18,A.jO,null,null,null)
D.eVf=new B.G(!0,A.jO,null,null,null,null,15,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqf=new B.x("Write",null,D.eVf,null,null,null,null,null,null,null,null,null)
D.cTd=w([D.bLD,A.ab,D.fqf],x.p)
D.eFM=new B.cl(A.aO,A.e,A.Q,A.m,null,A.p,null,0,D.cTd,null)
D.fdd=new B.x("Download picture",null,A.qa,null,null,null,null,null,null,null,null,null)
D.bwQ=new B.q9(A.eg,A.A,A.f,D.fdd,null)
D.bx0=new B.dm(1,A.ci,D.bwQ,null)
D.d34=w([K.am1,A.ab,D.bx0],x.p)
D.eFN=new B.cl(A.aO,A.bb,A.j,A.m,null,A.p,null,0,D.d34,null)
D.bHc=new B.ae(A.G6,22,A.cn,null,null,null)
D.fmD=new B.x("NGMY NEWS",null,H.a6E,null,null,null,null,null,null,null,null,null)
D.cLb=w([D.bHc,A.ab,D.fmD],x.p)
D.eFV=new B.cl(A.aO,A.e,A.Q,A.m,null,A.p,null,0,D.cLb,null)
D.eG5=new B.p_(!1,!1,null,T.V0,null,A.bX,null,null,null)
D.a5K=new B.jL([D.cg,D.dd,D.u7,D.Hy,D.u8,D.aEJ],B.ax("jL<hw>"))
D.dZu={title:0,quote:1,closing:2,bio:3}
D.eHd=new B.eW(D.dZu,4,x.M)
D.dXJ={caps:0,stamp:1,retro:2,glitch:3,whisper:4}
D.eHf=new B.eW(D.dXJ,5,x.M)
D.dZ1={midnight:0,rose_gold:1,slate_pro:2,neon_night:3,charcoal:4,crimson:5,gold:6,plum:7}
D.a5L=new B.eW(D.dZ1,8,x.M)
D.dYp={Design:0,Transitions:1,Insert:2}
D.eHj=new B.eW(D.dYp,3,x.M)
D.fUg=new B.jL([D.a46],B.ax("jL<vG>"))
D.dYw={float3d:0,drift:1,pulse:2}
D.eHm=new B.eW(D.dYw,3,x.M)
D.aLY=new B.jL([D.Hv,D.Hw,D.Hx],B.ax("jL<mp>"))
D.dXG={shimmer:0,golddust:1,spotlight:2,goldframe:3,twinkle:4,orbit:5,rays:6,bokeh:7,aurora:8,sparkle:9,sheen:10,velvet:11,crest:12,filigree:13}
D.aM0=new B.eW(D.dXG,14,x.M)
D.fUh=new B.eW(A.ie,0,B.ax("eW<vG>"))
D.dYt={"kbpabloqr@gmail.com":0,"ngumoyaking@gmail.com":1,"appbusiness321@gmail.com":2,"appbusiness84@gmail.com":3}
D.Sb=new B.eW(D.dYt,4,x.M)
D.dXz={print:0,rotate:1,text_box:2,picture:3,title:4,subtitle:5,bullets:6,numbered:7,quote:8,citation:9,date_stamp:10,page_number:11,header_bar:12,footer_bar:13,divider:14,table:15,sticky:16,duplicate_el:17,delete_el:18,bring_fwd:19,send_back:20,align_left:21,align_center:22,align_right:23,word_count:24,link_text:25,phone:26,email:27,new_slide:28,present:29}
D.aM2=new B.eW(D.dXz,30,x.M)
D.dYB={circle:0,triangle:1,hexagon:2,diamond:3}
D.eHC=new B.eW(D.dYB,4,x.M)
D.eJL=new B.at(390,844)
D.eKx=new B.a6(20,20,A6.JY,null)
D.aMP=new B.a6(null,2.5,null,null)
D.eKH=new B.a6(18,18,A6.JY,null)
D.bLH=new B.ae(A.iV,19,A.c,null,null,null)
D.eKS=new B.a6(38,38,D.bLH,null)
D.bK_=new B.ae(A.yd,22,A.c,null,null,null)
D.eKU=new B.a6(40,40,D.bK_,null)
D.eLs=new B.hJ(2,10,10,1.15,null)
D.aMX=new B.hJ(2,16,14,0.62,null)
D.bsR=new B.Q(32,30,32,40)
D.b6_=new B.w(0.3333333333333333,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.t)
D.bFd=new B.ae(A.pF,56,D.b6_,null,null,null)
D.aef=new B.w(0.6,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.t)
D.eXc=new B.G(!0,D.aef,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fjJ=new B.x("Your books will live here.",null,D.eXc,null,A.L,null,null,null,null,null,null,null)
D.cVO=w([D.bFd,A.S,D.fjJ],x.p)
D.bkg=new B.fq(A.ah,A.e,A.j,A.m,null,A.p,null,0,D.cVO,null)
D.e3Q=new B.C(D.bsR,D.bkg,null)
D.eLN=new B.m1(D.e3Q,null)
D.fjG=new B.x("Chagua jimbo la Civic Registry kwanza.",null,null,null,null,null,null,null,null,null,null,null)
D.eM4=new B.b1(D.fjG,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fhP=new B.x("Done \u2014 only the text size was changed. Undo brings back the old size.",null,null,null,null,null,null,null,null,null,null,null)
D.eM5=new B.b1(D.fhP,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fmG=new B.x("This slide has no text boxes.",null,null,null,null,null,null,null,null,null,null,null)
D.eMe=new B.b1(D.fmG,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fnb=new B.x("Tap fields to edit names. Tap signature boxes to sign or re-sign. Print from the View tab.",null,null,null,null,null,null,null,null,null,null,null)
D.eMt=new B.b1(D.fnb,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fgv=new B.x("Sign in to Civic Registry to view Hati ya Kiapo cha Uongozi.",null,null,null,null,null,null,null,null,null,null,null)
D.eMG=new B.b1(D.fgv,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fu5=new B.x("Could not read that presentation QR or document code.",null,null,null,null,null,null,null,null,null,null,null)
D.eMZ=new B.b1(D.fu5,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fri=new B.x("Use the 5-character code on the document QR, like GA847.",null,null,null,null,null,null,null,null,null,null,null)
D.eN9=new B.b1(D.fri,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fnj=new B.x("Sign in to Civic Registry to view this document.",null,null,null,null,null,null,null,null,null,null,null)
D.eNQ=new B.b1(D.fnj,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fbA=new B.x("Buttons hidden. Double-tap the top-right corner to show them again.",null,null,null,null,null,null,null,null,null,null,null)
D.eO5=new B.b1(D.fbA,null,null,null,null,null,null,null,A.ij,null,null,null,null,A.pw,!1,null,null,null,A.r,null)
D.fdl=new B.x("Could not crop that picture.",null,null,null,null,null,null,null,null,null,null,null)
D.eOn=new B.b1(D.fdl,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fjn=new B.x("This oath is locked for editing (5 hours after the president signed). You can still view and play the video.",null,null,null,null,null,null,null,null,null,null,null)
D.eOp=new B.b1(D.fjn,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fj3=new B.x("Only the authorized registrar for this state can add the oath video.",null,null,null,null,null,null,null,null,null,null,null)
D.eOq=new B.b1(D.fj3,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fpi=new B.x("Document code copied.",null,null,null,null,null,null,null,null,null,null,null)
D.eOr=new B.b1(D.fpi,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.f7Q=new B.x("Tap the logo or a picture on this slide first.",null,null,null,null,null,null,null,null,null,null,null)
D.eOA=new B.b1(D.f7Q,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fer=new B.x("Sign in to unlock Slides Pro features.",null,null,null,null,null,null,null,null,null,null,null)
D.eOX=new B.b1(D.fer,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fsR=new B.x("Done \u2014 the look is changed. Undo brings back the old one.",null,null,null,null,null,null,null,null,null,null,null)
D.eOZ=new B.b1(D.fsR,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fsp=new B.x("The NGMY logo stays on every quote. You can move it or change its frame.",null,null,null,null,null,null,null,null,null,null,null)
D.eP2=new B.b1(D.fsp,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.f6Q=new B.x("Video upload failed. Check your connection and try again.",null,null,null,null,null,null,null,null,null,null,null)
D.eP4=new B.b1(D.f6Q,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fot=new B.x("This transferred document is view only. You can print or download it.",null,null,null,null,null,null,null,null,null,null,null)
D.ePd=new B.b1(D.fot,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fs0=new B.x("Done \u2014 the words are changed and the design is kept. Undo brings back the old version.",null,null,null,null,null,null,null,null,null,null,null)
D.ePs=new B.b1(D.fs0,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.frS=new B.x("Book saved on this device.",null,null,null,null,null,null,null,null,null,null,null)
D.ePu=new B.b1(D.frS,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.f6I=new B.x("Only the authorized registrar for this state can update this signature.",null,null,null,null,null,null,null,null,null,null,null)
D.ePA=new B.b1(D.f6I,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.faB=new B.x("You don't have a Bio link yet \u2014 create one in Bio first.",null,null,null,null,null,null,null,null,null,null,null)
D.eQ1=new B.b1(D.faB,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fr5=new B.x("Nothing to transfer yet \u2014 fill names or details on this document first.",null,null,null,null,null,null,null,null,null,null,null)
D.eQc=new B.b1(D.fr5,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fap=new B.x("Only the authorized registrar for this state can sign this document.",null,null,null,null,null,null,null,null,null,null,null)
D.eQr=new B.b1(D.fap,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.bcH=new B.w(1,0.9764705882352941,0.8352941176470589,0.8274509803921568,A.t)
D.cK0=w([A.io,A.oo,D.bcH,D.abh,A.io],x.O)
D.eQP=new B.fS(A.A,0,6.283185307179586,A.x,D.cK0,null,null)
D.cSr=w([A.bK,A.bY,A.hE,D.Ao,A.bK],x.O)
D.aNw=new B.fS(A.A,0,6.283185307179586,A.x,D.cSr,null,null)
D.d4I=w([A.bV,A.by,A.b7,A.b8,A.cn,A.bV],x.O)
D.eQU=new B.fS(A.A,0,6.283185307179586,A.x,D.d4I,null,null)
D.cLX=w([A.pt,A.oq,A.Ac,A.io,A.pt],x.O)
D.eQV=new B.fS(A.A,0,6.283185307179586,A.x,D.cLX,null,null)
D.d4C=w([A.aQ,A.bJ,A.aL,A.ak,A.aQ],x.O)
D.eQW=new B.fS(A.A,0,6.283185307179586,A.x,D.d4C,null,null)
D.dbN=w([A.bt,A.b7,A.by,A.bV,A.bt],x.O)
D.eQY=new B.fS(A.A,0,6.283185307179586,A.x,D.dbN,null,null)
D.bcZ=new B.w(1,0,1,1,A.t)
D.b7d=new B.w(1,1,0,1,A.t)
D.d86=w([A.E1,A.ad6,H.ac4,D.bcZ,H.acr,D.b7d,A.E1],x.O)
D.eQZ=new B.fS(A.A,0,6.283185307179586,A.x,D.d86,null,null)
D.eRd=new C.auC(2,"immersiveSticky")
D.eRe=new C.auC(3,"edgeToEdge")
D.eRf=new C.auC(4,"manual")
D.eTu=new B.G(!0,A.oj,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aO1=new B.G(!0,A.f3,null,null,null,null,12.5,A.O,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eU2=new B.G(!0,E.mV,null,null,null,null,13,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eVw=new B.G(!0,A.ad,null,null,null,null,13,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eWu=new B.G(!0,A.c,null,null,null,null,22,A.u,null,0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eWE=new B.G(!0,A.c_,null,null,null,null,12.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eWZ=new B.G(!0,A.ez,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eYj=new B.G(!0,A.bJ,null,null,null,null,13.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eYs=new B.G(!0,A.j9,null,null,null,null,11,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eYG=new B.rp(!0,A.HR,null,null,null,null,A.dr,8,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZ9=new B.G(!0,A.c,null,null,null,null,8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZM=new B.G(!0,A.j7,null,null,null,null,11.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f_9=new B.G(!0,A.az,null,null,null,null,12.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.e5i=new B.iM(1,1,0.7568627450980392,0.027450980392156862)
D.f_d=new B.rp(!0,D.e5i,null,null,null,null,A.dr,7,null,null,null,null,null,null,null,null,null,null,null,null)
D.add=new B.w(1,0.8392156862745098,0.7254901960784313,0.6039215686274509,A.t)
D.aOL=new B.G(!0,D.add,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f_k=new B.G(!0,D.aef,null,null,null,null,11.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f_l=new B.G(!0,A.c,null,null,null,null,20,A.u,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aON=new B.G(!0,A.c,null,null,null,null,null,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f_Z=new B.rp(!0,A.oT,null,null,null,null,A.dr,9,null,null,null,null,null,null,null,null,null,null,null,null)
D.f0f=new B.G(!0,null,null,null,null,null,20,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.T4=new B.G(!0,A.az,null,null,null,null,11.5,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f0M=new B.G(!0,A.c,null,null,null,null,16,A.H,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f0O=new B.G(!0,D.add,null,null,null,null,14,null,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.IJ=new B.G(!0,A.az,null,null,null,null,12.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f1g=new B.G(!0,A.bY,null,null,null,null,11.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f1o=new B.G(!0,A.bJ,null,null,null,null,14,A.a4,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f1r=new B.G(!0,A.bK,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f1I=new B.G(!0,A.c,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.auR,null,null,null)
D.f1K=new B.G(!0,A.cj,null,null,null,null,null,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f1M=new B.G(!0,A.c,null,null,null,null,30,A.u,null,5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f1Z=new B.G(!0,A.c,null,null,null,null,6.5,A.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f29=new B.G(!0,A.dy,null,null,null,null,13,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f2G=new B.G(!0,A.aR,null,null,null,null,null,A.a4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f2P=new B.G(!0,A.c,null,null,null,null,13.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f32=new B.G(!0,A.ad,null,null,null,null,15,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aPo=new B.G(!0,A.c,null,null,null,null,14.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aPq=new B.G(!0,A.c_,null,null,null,null,11.5,A.a4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bi_=new B.w(0.7019607843137254,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.t)
D.f4M=new B.G(!0,D.bi_,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aPy=new B.G(!0,E.mV,null,null,null,null,16,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5g=new B.G(!0,A.bJ,null,null,null,null,11,A.a4,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5j=new B.G(!0,N.l4,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZn=new B.G(!0,A.w,null,null,null,null,8,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f6v=new B.x("NEW",null,D.eZn,null,null,null,null,null,null,null,null,null)
D.f6L=new B.x("Hati ya Kuhowesha",null,A.hq,null,null,null,null,null,null,null,null,null)
D.f7d=new B.x("Session ended",null,null,null,null,null,null,null,null,null,null,null)
D.f7x=new B.x("Scrollable PDF on this slide",null,A.dl,null,null,null,null,null,null,null,null,null)
D.f8e=new B.x("Big quote mark",null,A.iG,null,null,null,null,null,null,null,null,null)
D.f8h=new B.x("Move down",null,null,null,null,null,null,null,null,null,null,null)
D.f8s=new B.x("Duplicate",null,null,null,null,null,null,null,null,null,null,null)
D.f8U=new B.x("Edit window ended",null,null,null,null,null,null,null,null,null,null,null)
D.f8W=new B.x("How many slides?",null,A.ho,null,null,null,null,null,null,null,null,null)
D.f9t=new B.x("Transfer",null,A.cc,null,null,null,null,null,null,null,null,null)
D.eVi=new B.G(!0,A.c,null,null,null,null,12,A.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f9O=new B.x("Luxury FX",null,D.eVi,null,null,null,null,null,null,null,null,null)
D.fa9=new B.x("Font",null,A.rz,null,null,null,null,null,null,null,null,null)
D.fak=new B.x("Anza hati mpya?",null,null,null,null,null,null,null,null,null,null,null)
D.faq=new B.x("Ghairi",null,null,null,null,null,null,null,null,null,null,null)
D.f4j=new B.G(!0,A.bJ,null,null,null,null,12,A.O,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fay=new B.x("Example  GA847",null,D.f4j,null,null,null,null,null,null,null,null,null)
D.faY=new B.x("Design shapes",null,A.iG,null,null,null,null,null,null,null,null,null)
D.fb6=new B.x("Your 4-hour window to edit this admin-shared document has ended. You can still view, print, or download it.",null,null,null,null,null,null,null,null,null,null,null)
D.fba=new B.x("Non-stop (loop)",null,A.ho,null,null,null,null,null,null,null,null,null)
D.fbo=new B.x("Hati ya Kuhoweya",null,A.hq,null,null,null,null,null,null,null,null,null)
D.fbH=new B.x("Photo studio",null,A.fO,null,null,null,null,null,null,null,null,null)
D.fc6=new B.x("Add your picture",null,A.kX,null,null,null,null,null,null,null,null,null)
D.eYH=new B.G(!0,A.c,null,null,null,null,20,A.u,null,-0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fc7=new B.x("Enter document code",null,D.eYH,null,A.L,null,null,null,null,null,null,null)
D.fc8=new B.x("Kiswahili",null,null,null,null,null,null,null,null,null,null,null)
D.fcd=new B.x("English",null,null,null,null,null,null,null,null,null,null,null)
D.eWk=new B.G(!0,E.mV,null,null,null,null,19,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fcw=new B.x("Delete this book?",null,D.eWk,null,A.L,null,null,null,null,null,null,null)
D.f_O=new B.G(!0,E.mV,null,null,null,null,18,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fdn=new B.x("Your library",null,D.f_O,null,null,null,null,null,null,null,null,null)
D.fds=new B.x("Delete",null,A.aOF,null,null,null,null,null,null,null,null,null)
D.fdu=new B.x("Add a picture and the AI writes a whole newspaper page about NGMY around it: the headline, the story and the caption. It knows the app, the Civic Registry, the Advisors and KB PABLO QR, the CEO. Pick old or modern designs, then tell the AI what to change.",null,At.IG,null,null,null,null,null,null,null,null,null)
D.fdF=new B.x("Element flies in",null,A.aOR,null,null,null,null,null,null,null,null,null)
D.Tk=new B.x("Hati mpya (chagua muundo)",null,null,null,null,null,null,null,null,null,null,null)
D.fe2=new B.x("Fungua / hariri hati",null,null,null,null,null,null,null,null,null,null,null)
D.fek=new B.x("Keep it",null,null,null,null,null,null,null,null,null,null,null)
D.feo=new B.x("Cancel",null,E.aP0,null,null,null,null,null,null,null,null,null)
D.feq=new B.x("The lines and circles that come with the design",null,A.hp,null,null,null,null,null,null,null,null,null)
D.f3a=new B.G(!0,A.hi,null,null,null,null,11,A.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.feR=new B.x("DOCUMENT CODE",null,D.f3a,null,null,null,null,null,null,null,null,null)
D.ffE=new B.x("Quotes",null,G.a7f,null,null,null,null,null,null,null,null,null)
D.eY6=new B.G(!0,N.l4,null,null,null,null,null,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ffM=new B.x("Add a picture",null,D.eY6,null,null,null,null,null,null,null,null,null)
D.ffU=new B.x("Point at a NGMY Slides transfer QR, or tap search to enter the document code",null,A.a6V,null,A.L,null,null,null,null,null,null,null)
D.ffY=new B.x("Look & feel",null,A.ho,null,null,null,null,null,null,null,null,null)
D.fg2=new B.x("Rings",null,A.i3,null,null,null,null,null,null,null,null,null)
D.fg8=new B.x("W",null,A.rz,null,null,null,null,null,null,null,null,null)
D.fgi=new B.x("Move up",null,null,null,null,null,null,null,null,null,null,null)
D.fgB=new B.x("It goes behind your words. Then the photo studio opens: looks, light, colour, effects and crop.",null,A.II,null,A.L,null,null,null,null,null,null,null)
D.fgD=new B.x("Write your book",null,A.cw,null,null,null,null,null,null,null,null,null)
D.fhn=new B.x("Add page",null,A.cc,null,null,null,null,null,null,null,null,null)
D.fhB=new B.x("Malipo ya Awamu ya Mahari",null,A.hq,null,null,null,null,null,null,null,null,null)
D.eYw=new B.G(!0,A.c,null,null,null,null,24,A.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fhQ=new B.x("Create with AI",null,D.eYw,null,A.L,null,null,null,null,null,null,null)
D.fii=new B.x("Apply look",null,A.i3,null,null,null,null,null,null,null,null,null)
D.eZe=new B.G(!0,A.es,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fj5=new B.x("Type your presentation below",null,D.eZe,null,A.L,null,null,null,null,null,null,null)
D.fj8=new B.x("Tap the code to copy it. Share the code or the QR: the other phone types the code or scans the QR.",null,H.aPA,null,A.L,null,null,null,null,null,null,null)
D.fja=new B.x("Keep it",null,A.cc,null,null,null,null,null,null,null,null,null)
D.eUj=new B.G(!0,A.cs,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fjh=new B.x("Done",null,D.eUj,null,null,null,null,null,null,null,null,null)
D.fjC=new B.x("Delete",null,A.nn,null,null,null,null,null,null,null,null,null)
D.fjL=new B.x("Hati ya Kiapo cha Uongozi",null,A.hq,null,null,null,null,null,null,null,null,null)
D.eXu=new B.G(!0,A.aR,null,null,null,null,13,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fkD=new B.x("Write your idea in any language \u2014 the AI makes the slides.",null,D.eXu,null,A.L,null,null,null,null,null,null,null)
D.fkZ=new B.x("Anza upya (hati mpya)",null,null,null,null,null,null,null,null,null,null,null)
D.fl4=new B.x("Layout",null,A.Tc,null,null,null,null,null,null,null,null,null)
D.flG=new B.x("Print",null,A.cw,null,null,null,null,null,null,null,null,null)
D.flL=new B.x("X",null,A.rz,null,null,null,null,null,null,null,null,null)
D.fmk=new B.x("Your logo goes on every slide and your pictures replace stock photos. The ring button also has the ending celebrations.",null,Aa.SZ,null,null,null,null,null,null,null,null,null)
D.fmS=new B.x("Use the whole picture",null,null,null,null,null,null,null,null,null,null,null)
D.fn3=new B.x("Hati ya Kuhowa",null,A.hq,null,null,null,null,null,null,null,null,null)
D.fn5=new B.x("Choose a class template",null,A.hq,null,null,null,null,null,null,null,null,null)
D.fn7=new B.x("Drag the picture to move it. Pinch or use the slider to zoom.",null,A.hp,null,null,null,null,null,null,null,null,null)
D.fnd=new B.x("Download the newspaper picture",null,A.cw,null,null,null,null,null,null,null,null,null)
D.fnp=new B.x("Print view",null,null,null,null,null,null,null,null,null,null,null)
D.fnw=new B.x("Done",null,A.aPn,null,null,null,null,null,null,null,null,null)
D.fnG=new B.x("Ending celebration",null,A.du,null,null,null,null,null,null,null,null,null)
D.fnH=new B.x("Delete element",null,null,null,null,null,null,null,null,null,null,null)
D.fnW=new B.x("Plays after your last slide. Tap one to watch it and change its words or logo.",null,Aa.SQ,null,null,null,null,null,null,null,null,null)
D.foT=new B.x("Export presentation",null,A.dl,null,null,null,null,null,null,null,null,null)
D.foU=new B.x("What would you like to do?",null,D.aOL,null,null,null,null,null,null,null,null,null)
D.foX=new B.x("Delete",null,A.cw,null,null,null,null,null,null,null,null,null)
D.fpq=new B.x("Your 4-hour marriage document session has ended. Pay again to keep editing.",null,null,null,null,null,null,null,null,null,null,null)
D.fpu=new B.x("Hati (Documents)",null,A.hq,null,null,null,null,null,null,null,null,null)
D.fpH=new B.x("Done",null,A.kY,null,null,null,null,null,null,null,null,null)
D.f49=new B.G(!0,A.c,null,null,null,null,18,A.H,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpM=new B.x("Delete presentation?",null,D.f49,null,A.L,null,null,null,null,null,null,null)
D.fq2=new B.x("After the last slide it starts again from the first",null,A.hp,null,null,null,null,null,null,null,null,null)
D.fqd=new B.x("\ud83c\udf33",null,A.ID,null,A.L,null,null,null,null,null,null,null)
D.fqv=new B.x("Plays big after your last slide. Tap one to watch it, change the words or add your logo.",null,A.hp,null,null,null,null,null,null,null,null,null)
D.fqC=new B.x("Transfer document",null,A.p1,null,null,null,null,null,null,null,null,null)
D.fqN=new B.x("Add to the slides",null,A.ho,null,null,null,null,null,null,null,null,null)
D.fr9=new B.x("Endelea",null,null,null,null,null,null,null,null,null,null,null)
D.fro=new B.x("Make a book",null,I.aOi,null,null,null,null,null,null,null,null,null)
D.frs=new B.x("Books",null,A.cw,null,null,null,null,null,null,null,null,null)
D.eY_=new B.G(!0,A.ak,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frt=new B.x("Keep this page open until it finishes.",null,D.eY_,null,null,null,null,null,null,null,null,null)
D.frw=new B.x("Making your video",null,A.du,null,null,null,null,null,null,null,null,null)
D.frB=new B.x("LANGUAGE",null,D.T4,null,null,null,null,null,null,null,null,null)
D.frI=new B.x("Use this ending",null,A.cw,null,null,null,null,null,null,null,null,null)
D.frQ=new B.x("Scan presentation QR",null,null,null,null,null,null,null,null,null,null,null)
D.frR=new B.x("Upload a different logo",null,A.cc,null,null,null,null,null,null,null,null,null)
D.fs6=new B.x("Delete from the database?",null,A.kX,null,null,null,null,null,null,null,null,null)
D.fs7=new B.x("H",null,A.rz,null,null,null,null,null,null,null,null,null)
D.fsv=new B.x("NGMY Quotes",null,A.du,null,null,null,null,null,null,null,null,null)
D.fsW=new B.x("Cover",null,D.aPy,null,null,null,null,null,null,null,null,null)
D.ft_=new B.x("Hati iliyopo ya jimbo hili itabadilishwa.",null,null,null,null,null,null,null,null,null,null,null)
D.ft0=new B.x("Each page becomes its own slide you can present",null,A.hp,null,null,null,null,null,null,null,null,null)
D.ftn=new B.x("Y",null,A.rz,null,null,null,null,null,null,null,null,null)
D.fty=new B.x("Crop the picture",null,A.kY,null,null,null,null,null,null,null,null,null)
D.ftE=new B.x("Edit text",null,A.IE,null,null,null,null,null,null,null,null,null)
D.fvS=B.dQ("a7F")
D.De=new C.avV(0,"none")
D.aSo=new C.avV(1,"zipCrypto")
D.aSp=new C.avV(2,"aes")
D.fJt=new F.ON("","",null)
D.fKz=new C.baR(null)
D.fLG=new C.YW(null)
D.fNf=new C.acr(null)
D.fNh=new C.aD6(null)
D.fQ2=new C.a_a(null)
D.fQi=new C.a_F(null)
D.fQB=new C.bsj(null)})();(function staticFields(){$.h7N=null
$.h7O=null
$.h7P=null
$.h7Q=null
$.fR0=B.uR("_lastQuoRemDigits")
$.fR1=B.uR("_lastQuoRemUsed")
$.awg=B.uR("_lastRemUsed")
$.fR2=B.uR("_lastRem_nsh")
$.pX=B.a([4294967295,2147483647,1073741823,536870911,268435455,134217727,67108863,33554431,16777215,8388607,4194303,2097151,1048575,524287,262143,131071,65535,32767,16383,8191,4095,2047,1023,511,255,127,63,31,15,7,3,1,0],x.t)
$.a6u=B.V(x.N,x.I)
$.fOx=!1
$.hcB=B.V(B.ax("kM"),x.N)
$.hcO=B.V(B.ax("kM"),x.E)
$.haN=!1
$.bxX="q"
$.PK=0
$.Ce=B.V(x.N,B.ax("ai<z7>"))
$.hba=!1
$.fSA=!1
$.hho=null
$.hLq=B.V(x.N,B.ax("ay<n?>"))
$.JR=""
$.iX=0
$.h4y=function(){var w=x.N
return B.V(w,w)}()
$.h4x=B.V(x.N,x.R)
$.fSV=!1
$.af4=B.V(x.N,x.E)
$.fTI=0
$.biU=!1})();(function lazyInitializers(){var w=a.lazyFinal
w($,"i9t","CC",()=>C.b8o(0))
w($,"i9r","a1T",()=>C.b8o(1))
w($,"i9s","hkY",()=>C.b8o(2))
w($,"i9q","fXr",()=>$.a1T().uM(0))
w($,"i9o","hkW",()=>C.b8o(1e4))
w($,"i9p","hkX",()=>B.DO(8))
w($,"i5g","hiZ",()=>B.DO(0))
w($,"i5o","hj2",()=>B.DO(0))
w($,"i5n","hj1",()=>B.bWp(0))
w($,"id7","hmY",()=>{var v,u,t=x.N
t=B.V(t,t)
for(v=D.a2Y.gdK(D.a2Y),v=v.gaf(v);v.C();){u=v.gU(v)
t.n(0,u.b,u.a)}return t})
w($,"idy","bCt",()=>{var v="Corporate",u=4280171146,t=4294967295,s=4280640491,r=4279080072,q="Modern",p="Bold",o=4278190080,n=4280472558,m=4279179050,l=4284773515,k=4287874557,j=4293548044,i=4279548070,h=x.O
return B.a([C.mN(new C.fzE(),v,"biz_plan_blue","Business Plan",B.a([B.b0(u),B.b0(t)],h)),C.mN(new C.fzF(),v,"exec_summary","Executive",B.a([B.b0(s),B.b0(t)],h)),C.mN(new C.fzG(),v,"teal_corporate","Teal Corp",B.a([B.b0(r),B.b0(4279310375)],h)),C.mN(new C.fzR(),q,"geometric_overlap","Geometric",B.a([B.b0(4279203438),B.b0(u)],h)),C.mN(new C.fzW(),p,"midnight_cyan","Midnight Cyan",B.a([B.b0(o),B.b0(n)],h)),C.mN(new C.fzX(),q,"diagonal_hero","Diagonal Hero",B.a([B.b0(m),B.b0(l)],h)),C.mN(new C.fzY(),v,"swot_grid","SWOT Grid",B.a([B.b0(u),B.b0(4278556265)],h)),C.mN(new C.fzZ(),v,"layered_chevrons","Chevrons",B.a([B.b0(4280172719),B.b0(k)],h)),C.mN(new C.fA_(),q,"split_triangle","Split Panel",B.a([B.b0(s),B.b0(t)],h)),C.mN(new C.fA0(),v,"corporate_navy","Navy Pro",B.a([B.b0(4278982953),B.b0(4282090230)],h)),C.mN(new C.fA1(),p,"cyan_slash","Cyan Slash",B.a([B.b0(o),B.b0(4278630100)],h)),C.mN(new C.fzH(),p,"crimson_impact","Crimson",B.a([B.b0(4282714634),B.b0(4292617766)],h)),C.mN(new C.fzI(),q,"ocean_waves","Ocean Waves",B.a([B.b0(4278413729),B.b0(4286436348)],h)),C.mN(new C.fzJ(),p,"mono_geometric","Mono Geo",B.a([B.b0(o),B.b0(n)],h)),C.mN(new C.fzK(),"Luxury","luxury_gold","Gold Luxe",B.a([B.b0(4280031511),B.b0(4293571336)],h)),C.mN(new C.fzL(),q,"hex_infographic","Hex Stack",B.a([B.b0(r),B.b0(4284410580)],h)),C.mN(new C.fzM(),q,"photo_banner","Photo Banner",B.a([B.b0(m),B.b0(4281908728)],h)),C.mN(new C.fzN(),v,"process_steps","Process",B.a([B.b0(s),B.b0(k)],h)),C.mN(new C.fzO(),"Minimal","grid_modern","Grid Modern",B.a([B.b0(l),B.b0(t)],h)),C.mN(new C.fzP(),"Luxury","platinum_frame","Platinum",B.a([B.b0(4282865001),B.b0(4293060848)],h)),C.mN(new C.fzQ(),v,"agenda_cards","Agenda Cards",B.a([B.b0(u),B.b0(4292602622)],h)),C.mN(new C.fzS(),q,"headline_orange","Headline Orange",B.a([B.b0(j),B.b0(i)],h)),C.mN(new C.fzT(),q,"infographic_teal","Infographic",B.a([B.b0(r),B.b0(j)],h)),C.mN(new C.fzU(),q,"content_year","Year Feature",B.a([B.b0(j),B.b0(t)],h)),C.mN(new C.fzV(),q,"photo_cta","Photo CTA",B.a([B.b0(m),B.b0(i)],h))],B.ax("P<Ee>"))})
w($,"ida","hn_",()=>B.af("^[A-Z]{2}\\d{3}$",!0,!1,!1,!1))})()};
(a=>{a["GhTJ38VJzMX+v7+/yDPiZp93OK0="]=a.current})($__dart_deferred_initializers__);