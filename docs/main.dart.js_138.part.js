((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,Ah,A5,A6,Ai,Aj,U,A7,Ak,Al,C={
tw(d,e){for(;;){if(!(d>0&&e[d-1]===0))break;--d}return d},
fPN(d,e,f,g){var w,v=new Uint16Array(g),u=f-e
for(w=0;w<u;++w)v[w]=d[e+w]
return v},
J2(d){var w
if(d===0)return $.Cy()
if(d===1)return $.a1J()
if(d===2)return $.hjF()
if(Math.abs(d)<4294967296)return C.b8d(A.o.O(d))
w=C.hEe(d)
return w},
b8d(d){var w,v,u,t,s=d<0
if(s){if(d===-9223372036854776e3){w=new Uint16Array(4)
w[3]=32768
v=C.tw(4,w)
return new C.nK(v!==0,w,v)}d=-d}if(d<65536){w=new Uint16Array(1)
w[0]=d
v=C.tw(1,w)
return new C.nK(v===0?!1:s,w,v)}if(d<=4294967295){w=new Uint16Array(2)
w[0]=d&65535
w[1]=A.o.aA(d,16)
v=C.tw(2,w)
return new C.nK(v===0?!1:s,w,v)}v=A.o.an(A.o.gaiQ(d)-1,16)+1
w=new Uint16Array(v)
for(u=0;d!==0;u=t){t=u+1
w[u]=d&65535
d=A.o.an(d,65536)}v=C.tw(v,w)
return new C.nK(v===0?!1:s,w,v)},
hEe(d){var w,v,u,t,s,r,q,p
if(isNaN(d)||d==1/0||d==-1/0)throw B.U(B.dI("Value must be finite: "+d,null))
d=Math.floor(d)
if(d===0)return $.Cy()
w=$.hjE()
for(v=w.$flags|0,u=0;u<8;++u){v&2&&B.aj(w)
w[u]=0}v=J.l1(A.aG.gaP(w))
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
q=new C.nK(!1,r,4)
if(s<0)p=q.mh(0,-s)
else p=s>0?q.dU(0,s):q
return p},
fPO(d,e,f,g){var w,v,u
if(e===0)return 0
if(f===0&&g===d)return e
for(w=e-1,v=g.$flags|0;w>=0;--w){u=d[w]
v&2&&B.aj(g)
g[w+f]=u}for(w=f-1;w>=0;--w){v&2&&B.aj(g)
g[w]=0}return e+f},
h6y(d,e,f,g){var w,v,u,t,s,r=A.o.an(f,16),q=A.o.G(f,16),p=16-q,o=A.o.dU(1,p)-1
for(w=e-1,v=g.$flags|0,u=0;w>=0;--w){t=d[w]
s=A.o.fz(t,p)
v&2&&B.aj(g)
g[w+r+1]=(s|u)>>>0
u=A.o.dU(t&o,q)}v&2&&B.aj(g)
g[r]=u},
h6t(d,e,f,g){var w,v,u,t,s=A.o.an(f,16)
if(A.o.G(f,16)===0)return C.fPO(d,e,s,g)
w=e+s+1
C.h6y(d,e,f,g)
for(v=g.$flags|0,u=s;--u,u>=0;){v&2&&B.aj(g)
g[u]=0}t=w-1
return g[t]===0?t:w},
hEh(d,e,f,g){var w,v,u,t,s=A.o.an(f,16),r=A.o.G(f,16),q=16-r,p=A.o.dU(1,r)-1,o=A.o.fz(d[s],r),n=e-s-1
for(w=g.$flags|0,v=0;v<n;++v){u=d[v+s+1]
t=A.o.dU(u&p,q)
w&2&&B.aj(g)
g[v]=(t|o)>>>0
o=A.o.fz(u,r)}w&2&&B.aj(g)
g[n]=o},
cCh(d,e,f,g){var w,v=e-g
if(v===0)for(w=e-1;w>=0;--w){v=d[w]-f[w]
if(v!==0)return v}return v},
hEf(d,e,f,g,h){var w,v,u
for(w=h.$flags|0,v=0,u=0;u<g;++u){v+=d[u]+f[u]
w&2&&B.aj(h)
h[u]=v&65535
v=v>>>16}for(u=g;u<e;++u){v+=d[u]
w&2&&B.aj(h)
h[u]=v&65535
v=v>>>16}w&2&&B.aj(h)
h[e]=v},
b8e(d,e,f,g,h){var w,v,u
for(w=h.$flags|0,v=0,u=0;u<g;++u){v+=d[u]-f[u]
w&2&&B.aj(h)
h[u]=v&65535
v=0-(A.o.aA(v,16)&1)}for(u=g;u<e;++u){v+=d[u]
w&2&&B.aj(h)
h[u]=v&65535
v=0-(A.o.aA(v,16)&1)}},
h6z(d,e,f,g,h,i){var w,v,u,t,s,r
if(d===0)return
for(w=g.$flags|0,v=0;--i,i>=0;h=s,f=u){u=f+1
t=d*e[f]+g[h]+v
s=h+1
w&2&&B.aj(g)
g[h]=t&65535
v=A.o.an(t,65536)}for(;v!==0;h=s){r=g[h]+v
s=h+1
w&2&&B.aj(g)
g[h]=r&65535
v=A.o.an(r,65536)}},
hEg(d,e,f){var w,v=e[f]
if(v===d)return 65535
w=A.o.e3((v<<16|e[f-1])>>>0,d)
if(w>65535)return 65535
return w},
nK:function nK(d,e,f){this.a=d
this.b=e
this.c=f},
cCi:function cCi(){},
cCj:function cCj(){},
cCk:function cCk(d,e){this.a=d
this.b=e},
cCl:function cCl(d){this.a=d},
aPS:function aPS(d,e){this.a=d
this.b=e},
fXw(d,e,f){var w=new C.QZ(d,A.o.an(Date.now(),1000),e)
w.Q=f
return w},
QZ:function QZ(d,e,f){var _=this
_.a=d
_.b=420
_.e=e
_.as=_.Q=null
_.at=f},
a2U:function a2U(d,e){this.a=d
this.b=e},
bFO:function bFO(d){this.a=d
this.c=this.b=0},
hmS(){return new C.bE9()},
bE9:function bE9(){var _=this
_.ax=_.at=_.as=_.Q=_.z=_.y=_.x=_.w=_.r=_.f=_.e=_.d=_.c=_.b=_.a=$
_.ay=0
_.ch=-1
_.cx=_.CW=0
_.fr=_.dy=_.dx=_.db=_.cy=$
_.fx=0},
cus:function cus(d){var _=this
_.a=-1
_.r=_.f=0
_.x=d},
hDX(d,e,f){var w,v,u,t,s
if(d.gam(d))return new Uint8Array(0)
w=new Uint8Array(B.cr(d.gcSz(d)))
v=f*2+2
u=C.h4b(C.h4d(),64)
t=new C.ceu(u)
u=u.b
u===$&&B.c()
t.c=new Uint8Array(u)
t.a=new C.cev(e,1000,v)
s=new Uint8Array(v)
return A.aG.dn(s,0,t.cGa(w,0,s,0))},
cuq:function cuq(d,e){this.c=d
this.d=e},
avK:function avK(d,e){this.a=d
this.b=e},
cut:function cut(d,e,f,g){var _=this
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
b6V:function b6V(){var _=this
_.as=_.Q=_.y=_.x=_.w=_.a=0
_.at=""
_.ch=_.ax=null},
cur:function cur(){this.a=$},
h5Z(d,e){var w,v,u=d.length
if(u!==e.length)return!1
for(w=0,v=0;v<u;++v)w|=d[v]^e[v]
return w===0},
hmB(d,e){var w
d.$flags&2&&B.aj(d)
d[0]=e&255
d[1]=e>>>8&255
d[2]=e>>>16&255
d[3]=e>>>24&255
for(w=4;w<=15;++w)d[w]=0},
bCK:function bCK(d,e,f){var _=this
_.a=1
_.b=d
_.c=e
_.d=f
_.r=null
_.x=_.w=$},
fVh(d,e){e&=31
return(d&$.pW[e])<<e>>>0},
nh(d,e){e&=31
return(d>>>e|C.fVh(d,32-e))>>>0},
h4c(d){var w,v=new C.arr()
if(B.iF(d))v.aIy(d,null)
else{x.dw.a(d)
w=d.a
w===$&&B.c()
v.a=w
w=d.b
w===$&&B.c()
v.b=w}return v},
h4d(){var w=C.h4c(0),v=new Uint8Array(4),u=x.S
u=new C.cew(w,v,A.Ds,5,B.c2(5,0,!1,u),B.c2(80,0,!1,u))
u.lq(0)
return u},
h4b(d,e){var w=new C.ces(d,e)
w.b=20
w.d=new Uint8Array(e)
w.e=new Uint8Array(e+20)
return w},
cer:function cer(){},
cev:function cev(d,e,f){this.a=d
this.b=e
this.c=f},
cep:function cep(){},
arq:function arq(d){this.a=d},
ceu:function ceu(d){this.a=$
this.b=d
this.c=$},
ceq:function ceq(){},
ceo:function ceo(){},
arr:function arr(){this.b=this.a=$},
cet:function cet(){},
cew:function cew(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=$
_.d=f
_.e=g
_.f=h
_.r=i
_.w=$},
ces:function ces(d,e){var _=this
_.a=d
_.b=$
_.c=e
_.e=_.d=$},
cen:function cen(){},
cem:function cem(d){var _=this
_.a=0
_.b=$
_.c=!1
_.d=d},
bLN:function bLN(){},
bLO:function bLO(d){this.a=d},
hH9(d){if(d<0.36363636363636365)return 7.5625*d*d
else if(d<0.7272727272727273){d-=0.5454545454545454
return 7.5625*d*d+0.75}else if(d<0.9090909090909091){d-=0.8181818181818182
return 7.5625*d*d+0.9375}d-=0.9545454545454546
return 7.5625*d*d+0.984375},
b8t:function b8t(){},
coq:function coq(){},
bMG:function bMG(d,e){this.a=d
this.b=!1
this.c=e},
bMH:function bMH(){},
hPX(d){var w,v,u=B.a([],x.s)
for(w=d.length,v=0;v<w;++v)u.push(d[v].u(0))
return u},
auo(d){var w=0,v=B.j(x.H),u
var $async$auo=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:u=x.H
w=d!==D.ePk?2:4
break
case 2:w=5
return B.b(A.jY.fU("SystemChrome.setEnabledSystemUIMode",d.a4(),u),$async$auo)
case 5:w=3
break
case 4:null.toString
w=6
return B.b(A.jY.fU("SystemChrome.setEnabledSystemUIOverlays",C.hPX(null),u),$async$auo)
case 6:case 3:return B.h(null,v)}})
return B.i($async$auo,v)},
aur:function aur(d,e){this.a=d
this.b=e},
a7u:function a7u(d){this.a=d},
fLM(d,e){return new C.aUf(e,d,null)},
aUf:function aUf(d,e,f){this.e=d
this.c=e
this.a=f},
azh:function azh(d,e,f,g,h){var _=this
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
hSy(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p=new C.fm4(15,d,f,e,g,h),o=i*i,n=A.k.V(i/1.4142135623730951)
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
fm4:function fm4(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ami(){var w=0,v=B.j(x.gw),u,t,s,r,q
var $async$ami=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(S.afM("ngmy_menu_lib_v1_zzslides_index",A.bG),$async$ami)
case 3:q=e
if(!q.a){u=null
w=1
break}t=q.b
s=t==null?null:J.q(t,"items")
if(x.j.b(s)){t=J.d8(s,x.f)
t=B.cD(t,new C.bX6(),t.$ti.k("H.E"),x.P)
r=B.B(t,B.a3(t).k("H.E"))}else r=B.a([],x.d)
A.d.b_(r,new C.bX7())
u=r
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ami,v)},
amk(d){var w=0,v=B.j(x.S),u,t,s,r,q,p,o,n,m,l,k,j
var $async$amk=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.ami(),$async$amk)
case 3:j=f
if(j==null){u=0
w=1
break}t=x.N
s=B.V(t,x.P)
for(r=J.aX(j);r.C();){q=r.gU(r)
p=J.q(q,"id")
s.n(0,J.k(p==null?"":p),q)}r=d.length,q=x.z,o=0,n=0
case 4:if(!(n<d.length)){w=6
break}m=d[n]
l=new B.S(Date.now(),0,!1).a5().ac()
p=m.a
k=B.af("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(B.ng("ngmy_menu_lib_v1_zzslide_"+B.aJ(p,k,""),B.E(["deck",m.ae(),"savedAt",l],t,q),null),$async$amk)
case 7:if(!f){w=5
break}s.n(0,p,B.E(["id",p,"name",m.b,"slides",m.r.length,"savedAt",l],t,q));++o
case 5:d.length===r||(0,B.L)(d),++n
w=4
break
case 6:w=o>0?8:9
break
case 8:r=s.$ti.k("bc<2>")
s=B.B(new B.bc(s,r),r.k("H.E"))
w=10
return B.b(B.ng("ngmy_menu_lib_v1_zzslides_index",B.E(["items",s,"savedAt",new B.S(Date.now(),0,!1).a5().ac()],t,q),null),$async$amk)
case 10:if(!f){u=0
w=1
break}case 9:u=o
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$amk,v)},
bX8(d){return C.hsg(d)},
hsg(d){var w=0,v=B.j(x.af),u,t=2,s=[],r,q,p,o,n,m
var $async$bX8=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
o=B.af("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(S.afM("ngmy_menu_lib_v1_zzslide_"+B.aJ(d,o,""),A.hG),$async$bX8)
case 7:r=f
o=r.b
q=o==null?null:J.q(o,"deck")
if(!x.f.b(q)){u=null
w=1
break}o=C.V4(B.a1(q,x.N,x.z))
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
return B.i($async$bX8,v)},
amj(d){var w=0,v=B.j(x.y),u,t,s,r
var $async$amj=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.ami(),$async$amj)
case 3:r=f
if(r==null){u=!1
w=1
break}J.ni(r,new C.bX9(d))
w=4
return B.b(B.ng("ngmy_menu_lib_v1_zzslides_index",B.E(["items",r,"savedAt",new B.S(Date.now(),0,!1).a5().ac()],x.N,x.z),null),$async$amj)
case 4:t=f
w=t?5:6
break
case 5:s=B.af("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(S.aNT("ngmy_menu_lib_v1_zzslide_"+B.aJ(d,s,"")),$async$amj)
case 7:case 6:u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$amj,v)},
bX6:function bX6(){},
bX7:function bX7(){},
bX9:function bX9(d){this.a=d},
i1p(d,e,f){return B.bW(A.K,null,new C.fBP(e,f,null),d,!0,!0,!0,null,!1,!1,x.H)},
fBP:function fBP(d,e,f){this.a=d
this.b=e
this.c=f},
a_W:function a_W(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aHF:function aHF(d){var _=this
_.d=d
_.e=null
_.f=!0
_.r=!1
_.w=0
_.x=null
_.y=!1
_.c=_.a=null},
f0k:function f0k(d,e){this.a=d
this.b=e},
f0o:function f0o(d){this.a=d},
f0p:function f0p(d){this.a=d},
f0q:function f0q(d,e,f){this.a=d
this.b=e
this.c=f},
f0l:function f0l(d){this.a=d},
f0m:function f0m(d){this.a=d},
f0n:function f0n(d,e){this.a=d
this.b=e},
f0f:function f0f(d){this.a=d},
f0d:function f0d(d){this.a=d},
f0e:function f0e(d){this.a=d},
f0g:function f0g(d){this.a=d},
f0h:function f0h(d){this.a=d},
f0u:function f0u(d,e){this.a=d
this.b=e},
f0t:function f0t(d,e){this.a=d
this.b=e},
f0j:function f0j(d,e,f){this.a=d
this.b=e
this.c=f},
f0i:function f0i(d,e,f){this.a=d
this.b=e
this.c=f},
f0r:function f0r(d,e){this.a=d
this.b=e},
f0s:function f0s(d,e){this.a=d
this.b=e},
f0x:function f0x(d){this.a=d},
f0y:function f0y(d,e){this.a=d
this.b=e},
f0w:function f0w(d,e){this.a=d
this.b=e},
f0v:function f0v(){},
h8W(d){var w,v,u,t
if(d==null||d.length===0)return B.a([],x.k)
try{w=A.R.aH(0,d,null)
if(!x.j.b(w)){v=B.a([],x.k)
return v}v=J.d8(w,x.f)
v=B.cD(v,new C.f7w(),v.$ti.k("H.E"),x.ea)
u=B.a3(v).k("a2<H.E>")
v=B.B(new B.a2(v,new C.f7x(),u),u.k("H.E"))
return v}catch(t){v=B.a([],x.k)
return v}},
a0V(d){return C.hTO(d)},
hTO(d){var w=0,v=B.j(x.gL),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$a0V=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:n=B.V(x.N,x.ea)
m=new C.foz(n)
t=4
j=m
i=C
w=7
return B.b(B.a1u("ngmy_books_v1_"+A.a.i(d.toLowerCase())),$async$a0V)
case 7:j.$1(i.h8W(f))
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
return B.b(B.aA(),$async$a0V)
case 12:r=f
p=A.a.i(d.toLowerCase())
m.$1(C.h8W(B.aU(J.q(r.a,"ngmy_books_v1_"+p))))
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
return B.b(C.f7F(d),$async$a0V)
case 13:p=j.B(new i.a2(h,new g.fox(f),o),o.k("H.E"))
A.d.b_(p,new C.foy())
u=p
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a0V,v)},
agl(d,e){return C.i14(d,e)},
i14(d,e){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l
var $async$agl=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:n=J.b6(e,new C.fBj(),x.P)
n=B.B(n,n.$ti.k("ai.E"))
r=A.R.ao(n,null)
q=!1
t=4
w=7
return B.b(B.agd("ngmy_books_v1_"+A.a.i(d.toLowerCase()),r),$async$agl)
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
return B.b(B.aA(),$async$agl)
case 12:p=g
w=13
return B.b(p.ar("String","ngmy_books_v1_"+A.a.i(d.toLowerCase()),r),$async$agl)
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
return B.i($async$agl,v)},
f7F(d){return C.hIx(d)},
hIx(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o
var $async$f7F=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.aA(),$async$f7F)
case 7:r=f
q=r.rU("ngmy_books_deleted_v1_"+A.a.i(d.toLowerCase()))
if(q==null)q=A.T
q=B.kx(q,B.T(q).c)
u=q
w=1
break
t=2
w=6
break
case 4:t=3
o=s.pop()
u=B.aW(x.N)
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$f7F,v)},
afa(d,e){return C.hSq(d,e)},
hSq(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m
var $async$afa=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.aA(),$async$afa)
case 6:s=g
r=B.aW(x.N)
q=s.rU("ngmy_books_deleted_v1_"+A.a.i(d.toLowerCase()))
if(q!=null)J.h_(r,q)
J.cf(r,e)
p=r
r=A.a.i(d.toLowerCase())
q=p
q=B.B(q,B.a3(q).k("cl.E"))
w=7
return B.b(s.ar("StringList","ngmy_books_deleted_v1_"+r,q),$async$afa)
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
return B.b(C.a0V(d),$async$afa)
case 8:n=g
J.ni(n,new C.flL(e))
w=9
return B.b(C.agl(d,n),$async$afa)
case 9:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$afa,v)},
i1u(d,e){return B.a5(d,!1).ce(B.ej(new C.fCa(e),!0,null,x.H))},
hEj(d){var w=d.b
return A.a.i(w.a)==="My Book"&&A.d.d9(w.d,new C.cDE())},
oa:function oa(d,e,f){this.a=d
this.b=e
this.c=f},
f7w:function f7w(){},
f7x:function f7x(){},
foz:function foz(d){this.a=d},
fox:function fox(d){this.a=d},
foy:function foy(){},
fBj:function fBj(){},
flL:function flL(d){this.a=d},
fCa:function fCa(d){this.a=d},
XJ:function XJ(d,e){this.c=d
this.a=e},
awh:function awh(d,e){var _=this
_.d=d
_.e=!0
_.f=e
_.c=_.a=null},
cDE:function cDE(){},
cDG:function cDG(d,e){this.a=d
this.b=e},
cDJ:function cDJ(d){this.a=d},
cDK:function cDK(d){this.a=d},
cDI:function cDI(){},
cDL:function cDL(d,e){this.a=d
this.b=e},
cDH:function cDH(d){this.a=d},
cDM:function cDM(){},
cDF:function cDF(d,e){this.a=d
this.b=e},
cDN:function cDN(){},
cDA:function cDA(d){this.a=d},
cDy:function cDy(d){this.a=d},
cDz:function cDz(d){this.a=d},
cDB:function cDB(d,e){this.a=d
this.b=e},
cDx:function cDx(d){this.a=d},
cDw:function cDw(d){this.a=d},
cDu:function cDu(d,e){this.a=d
this.b=e},
cDv:function cDv(d){this.a=d},
cDD:function cDD(){},
cDC:function cDC(d){this.a=d},
cDt:function cDt(d,e){this.a=d
this.b=e},
cDs:function cDs(d,e){this.a=d
this.b=e},
cDr:function cDr(d,e){this.a=d
this.b=e},
cDO:function cDO(d){this.a=d},
XH:function XH(d,e,f){this.c=d
this.d=e
this.a=f},
aDz:function aDz(d,e,f){this.a=d
this.b=e
this.c=f},
awd:function awd(d){var _=this
_.r=_.f=_.e=_.d=$
_.w=d
_.x=null
_.y=!1
_.c=_.a=null},
cCV:function cCV(d){this.a=d},
cCU:function cCU(d){this.a=d},
cCX:function cCX(d,e,f){this.a=d
this.b=e
this.c=f},
cD4:function cD4(){},
cD5:function cD5(d){this.a=d},
cCY:function cCY(d,e,f){this.a=d
this.b=e
this.c=f},
cCW:function cCW(d,e){this.a=d
this.b=e},
cD_:function cD_(d,e){this.a=d
this.b=e},
cD0:function cD0(d,e){this.a=d
this.b=e},
cD1:function cD1(d,e){this.a=d
this.b=e},
cCZ:function cCZ(d){this.a=d},
cD3:function cD3(d){this.a=d},
cD2:function cD2(d,e){this.a=d
this.b=e},
cDa:function cDa(d){this.a=d},
cD6:function cD6(d,e){this.a=d
this.b=e},
cD7:function cD7(d,e){this.a=d
this.b=e},
cD8:function cD8(d,e){this.a=d
this.b=e},
cD9:function cD9(d,e){this.a=d
this.b=e},
awf:function awf(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
hW8(){var w,v,u,t,s=!1
try{u=document
if(u.fullscreenElement==null){w=u.documentElement
if(w!=null){v=w.requestFullscreen()
if(s&&v!=null)B.ef(v,x.cK).bz(new C.ft5(),x.H).eU(new C.ft6())}}else if(s)C.hap()}catch(t){}},
hap(){var w,v,u
try{w=window.screen.orientation
if(w==null)return
v=w.lock("landscape")
if(v!=null)B.ef(v,x.cK).eU(new C.fbV())}catch(u){}},
hWb(){var w,v,u
try{w=window.screen.orientation
if(w!=null)w.unlock()}catch(v){}try{u=document
if(u.fullscreenElement!=null)u.webkitExitFullscreen()}catch(v){}},
ft5:function ft5(){},
ft6:function ft6(){},
fbV:function fbV(){},
heZ(d){var w="marriage_field_",v=d.db
if(!A.a.a0(v,w))return null
return A.d.gL(A.a.e9(v,w,"").split(":"))},
heW(d){var w=d.db
if(!A.a.a0(w,"marriage_sign_"))return null
if(A.a.a0(w,"marriage_sign_placed_"))return null
if(d.b===D.kP)return null
return A.a.b0(w,14)},
fU1(d){var w
if(d.b!==D.kP)return null
w=d.db
if(!A.a.a0(w,"marriage_sign_placed_"))return null
return A.a.b0(w,21)},
hWB(d){if(d==="hati_kuhowa")return"hati_kuhoweya"
if(d==="hati_kuhoweya")return"hati_kuhowa"
return""},
hf_(d){if(d==="hati_kuhowa")return"Hati ya Kuhoweya"
if(d==="hati_kuhoweya")return"Hati ya Kuhowa"
return"partner document"},
hWw(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=B.af("\\s+",!0,!1,!1,!1),f=A.a.i(B.aJ(d,g," "))
g=B.af("\\s+",!0,!1,!1,!1)
w=A.a.i(B.aJ(e,g," "))
g=f.length
if(g===0||w.length===0){g=x.N
return B.V(g,g)}v=B.af("\\[[^\\]]+\\]",!0,!1,!1,!1)
u=v.kP(0,f)
t=x.N
u=B.cD(u,new C.fu4(),B.a3(u).k("H.E"),t)
s=B.B(u,B.a3(u).k("H.E"))
if(s.length===0)return B.V(t,t)
for(u=v.kP(0,f),u=new B.J1(u.a,u.b,u.c),r=x.cz,q=0,p="^";u.C();){o=u.d
n=(o==null?r.a(o):o).b
m=n.index
p=(m>q?p+B.QF(A.a.ap(f,q,m)):p)+"(.*?)"
q=m+n[0].length}u=(q<g?p+B.QF(A.a.b0(f,q)):p)+"\\.?$"
l=B.af(u.charCodeAt(0)==0?u:u,!1,!1,!1,!1).cD(w)
if(l==null)return B.V(t,t)
k=B.V(t,t)
for(g=l.b,j=0;j<s.length;j=i){i=j+1
u=g[i]
h=A.a.i(u==null?"":u)
if(h.length===0)continue
k.n(0,s[j],h)}return k},
hWu(d,e){var w,v,u,t,s,r=B.a3(e).k("cz<1>"),q=B.B(new B.cz(e,r),r.k("H.E"))
A.d.b_(q,new C.fu3())
for(r=q.length,w=d,v=0;v<q.length;q.length===r||(0,B.L)(q),++v){u=q[v]
t=e.h(0,u)
s=t==null?null:A.a.i(t)
if(s==null)s=""
if(s.length===0)continue
if(A.a.a0(s,"[")&&A.a.c9(s,"]"))continue
w=B.aOR(w,u,s,0)}return w},
hWy(d,e){var w,v,u,t=d==="hati_kuhowa"?D.a2P:$.hlF(),s=x.N,r=B.V(s,s)
for(s=t.gdL(t),s=s.gag(s);s.C();){w=s.gU(s)
v=e.h(0,w.a)
u=v==null?null:A.a.i(v)
if(u==null)u=""
if(u.length===0)continue
if(A.a.a0(u,"[")&&A.a.c9(u,"]"))continue
r.n(0,w.b,u)}return r},
heX(d){if(d==="hati_kuhowa")return y.O
if(d==="hati_kuhoweya")return y.f
return""},
f8y(d,e){var w,v,u,t,s,r,q
for(w=d.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u)for(t=w[u].z,s=t.length,r=0;r<t.length;t.length===s||(0,B.L)(t),++r){q=t[r]
if(C.heZ(q)===e)return q}return null},
hWz(d){var w,v=A.a.i(d.c),u=d.w
if(u==="hati_kuhowa")w="hati_kuhowa_"
else w=u==="hati_kuhoweya"?"hati_kuhoweya_":""
u=w.length
if(u!==0&&A.a.a0(v,w))return A.a.b0(v,u)
return A.d.gL(D.Ga).a},
hWA(b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0="utangulizi",b1=b6.w,b2=b1==null?"":b1,b3=b5.w,b4=b3==null?"":b3
if(b1==="hati_kuhowa"||b1==="hati_kuhoweya")w=!(b3==="hati_kuhowa"||b3==="hati_kuhoweya")
else w=!0
if(w)return new B.ad5(0,0,0)
if(b2.length===0||b4.length===0||b2===b4)return new B.ad5(0,0,0)
v=C.f8y(b6,b0)
u=C.f8y(b5,b0)
t=0
if(v!=null&&u!=null){s=C.hWy(b2,C.hWw(C.heX(b2),v.r))
if(s.a!==0){u.r=C.hWu(C.heX(b4),s)
t=s.a}}r=B.aW(x.N)
for(w=b6.r,q=w.length,p=0;p<w.length;w.length===q||(0,B.L)(w),++p)for(o=w[p].z,n=o.length,m=0;m<o.length;o.length===n||(0,B.L)(o),++m){l=C.heZ(o[m])
if(l==null||l==="utangulizi")continue
r.K(0,l)}for(q=B.ea(r,r.r,r.$ti.c),o=q.$ti.c,k=0;q.C();){n=q.d
if(n==null)n=o.a(n)
j=C.f8y(b6,n)
i=C.f8y(b5,n)
if(j==null||i==null)continue
h=j.r
if(A.a.a0(n,"witness_")){g=A.a.i(h)
n=g.length===0||g==="[Jina la Shahidi]"}else n=!1
if(n)continue
if(A.a.i(h).length===0)continue
i.r=h;++k}q=b5.r
f=q.length===0?null:A.d.gL(q)
e=0
if(f!=null)for(q=w.length,p=0;p<w.length;w.length===q||(0,B.L)(w),++p)for(o=w[p].z,n=o.length,m=0;m<o.length;o.length===n||(0,B.L)(o),++m){d=o[m]
a0=C.fU1(d)
if(a0==null)continue
a1=d.at
if(A.a.i(a1==null?"":a1).length===0)continue
a2=d.c
a3=d.d
a4=d.e
a5=d.f
for(a1=f.z,a6=a1.length,a7=0;a7<a1.length;a1.length===a6||(0,B.L)(a1),++a7){a8=a1[a7]
if(C.heW(a8)===a0||C.fU1(a8)===a0){a2=a8.c
a3=a8.d
a4=a8.e
a5=a8.f
break}}a1=f.z
a1.$flags&1&&B.aj(a1,16)
A.d.Qg(a1,new C.fua(a0),!0)
a1=f.z
a6=Date.now()
a9=$.iX
$.iX=a9+1
A.d.K(a1,new C.eG(""+1000*a6+"_"+a9,D.kP,a2,a3,a4,a5,"",24,A.a4,A.bk,A.aC,4279310375,A.bg,d.at,D.be,4280640491,4280172719,2,0,!1,"marriage_sign_placed_"+a0,0,D.cg,0,"","","","","",!1,0));++e}b5.f=new B.S(Date.now(),0,!1)
return new B.ad5(k,t,e)},
hWv(d){var w=C.hWz(d)
if(d.w==="hati_kuhowa")return C.hej("",w)
return C.hei("",w)},
fu4:function fu4(){},
fu3:function fu3(){},
fua:function fua(d){this.a=d},
ha8(){var w=new B.S(Date.now(),0,!1),v=new C.faY()
return B.t(v.$1(B.bQ(w)))+"/"+B.t(v.$1(B.bG(w)))+"/"+B.by(w)},
fU9(d){var w=d.at,v=A.a.i(w==null?"":w)
w=d.db
return(w==="__kiapo_video__"||A.a.a0(w,"__kiapo_video___"))&&v.length!==0},
fv2(d){var w,v,u,t,s,r,q=d.ax
if(A.a.i(q==null?"":q).length!==0)return!0
for(q=d.r,w=q.length,v=0;v<w;++v)for(u=q[v].z,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===D.kP&&A.a.a0(r.db,"marriage_sign_placed_rais"))return!0}return!1},
hfc(d){var w,v=d.ax,u=A.a.i(v==null?"":v)
if(u.length===0)return!C.fv2(d)
w=B.bi(u)
if(w==null)return!C.fv2(d)
return new B.S(Date.now(),0,!1).a5().cY(w.a5().bN(18e9))},
hXg(d){var w=d.ax
if(A.a.i(w==null?"":w).length!==0)return
d.ax=new B.S(Date.now(),0,!1).a5().ac()},
hwh(d){return A.a.i(d).toLowerCase()},
aor(d){return C.hwj(d)},
hwj(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o,n,m
var $async$aor=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.aA(),$async$aor)
case 7:r=f
p=r.rU("ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase())
q=p==null?A.T:p
o=q
o=new B.K(o,C.i_M(),B.T(o).k("K<1,n>")).bZ(0,new C.c6G())
o=B.da(o,o.$ti.k("H.E"))
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
u=B.aW(x.N)
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$aor,v)},
aoq(d,e){return C.hwi(d,e)},
hwi(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n
var $async$aoq=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:o=A.a.i(e).toLowerCase()
if(o.length===0||A.a.i(d).length===0){w=1
break}w=3
return B.b(C.aor(d),$async$aoq)
case 3:r=g
if(!J.cf(r,o)){w=1
break}t=5
w=8
return B.b(B.aA(),$async$aoq)
case 8:q=g
w=9
return B.b(q.ar("StringList","ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase(),J.q4(r)),$async$aoq)
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
return B.i($async$aoq,v)},
aos(d,e){return C.hwk(d,e)},
hwk(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n
var $async$aos=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:o=A.a.i(e).toLowerCase()
if(o.length===0||A.a.i(d).length===0){w=1
break}w=3
return B.b(C.aor(d),$async$aos)
case 3:r=g
if(!J.hK(r,o)){w=1
break}t=5
w=8
return B.b(B.aA(),$async$aos)
case 8:q=g
w=9
return B.b(q.ar("StringList","ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase(),J.q4(r)),$async$aos)
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
return B.i($async$aos,v)},
Um(a5){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$Um=B.e(function(a6,a7){if(a6===1){s.push(a7)
w=t}for(;;)switch(w){case 0:if($.fNg&&!a5){w=1
break}t=4
w=7
return B.b(B.aA(),$async$Um)
case 7:r=a7
q=B.aU(J.q(r.a,"ngmy_civic_hati_kiapo_uongozi_v1"))
if(q!=null&&A.a.i(q).length!==0){p=A.R.aH(0,q,null)
f=x.f
if(f.b(p)){e=x.N
o=B.V(e,x.I)
for(d=J.jr(p),d=d.gag(d),a0=x.z;d.C();){n=d.gU(d)
if(f.b(n.b))J.aG(o,J.k(n.a),C.V4(B.a1(f.a(n.b),e,a0)))}$.a6j=o}}t=2
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
return B.b(B.c1(),$async$Um)
case 12:case 11:w=a7?8:9
break
case 8:t=14
w=17
return B.b(B.tK("civic_hati_kiapo_uongozi",null,A.ed),$async$Um)
case 17:l=a7
w=l!=null&&x.f.b(J.q(l,"byState"))?18:19
break
case 18:o=x.N
k=B.V(o,x.I)
for(f=x.f,e=J.jr(f.a(J.q(l,"byState"))),e=e.gag(e),d=x.z;e.C();){j=e.gU(e)
if(!f.b(j.b))continue
J.aG(k,J.k(j.a),C.V4(B.a1(f.a(j.b),o,d)))}for(o=k,o=new B.cJ(o,B.a3(o).k("cJ<1,2>")).gag(0);o.C();){f=o.d
f.toString
i=f
h=$.a6j.h(0,i.a)
if(h!=null){f=i.b.f
e=h.f
d=f.a
if(d>=e.gbo())f=d===e.gbo()&&f.b<e.gcw()
else f=!0
f=!f}else f=!0
if(f)$.a6j.n(0,i.a,i.b)}w=20
return B.b(C.aot(),$async$Um)
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
case 16:case 9:$.fNg=!0
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Um,v)},
aot(){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m,l
var $async$aot=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.aA(),$async$aot)
case 6:s=e
r=B.V(x.N,x.P)
for(o=$.a6j,o=new B.cJ(o,B.a3(o).k("cJ<1,2>")).gag(0);o.C();){n=o.d
n.toString
q=n
J.aG(r,q.a,q.b.ae())}w=7
return B.b(s.ar("String","ngmy_civic_hati_kiapo_uongozi_v1",A.R.ao(r,null)),$async$aot)
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
return B.i($async$aot,v)},
aYH(d){var w=0,v=B.j(x.af),u,t,s,r
var $async$aYH=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.Um(!1),$async$aYH)
case 3:t=A.a.i(d).toLowerCase()
if(t.length===0){u=null
w=1
break}s=$.a6j.h(0,t)
r=s==null?null:s.hA()
if(r==null){u=null
w=1
break}u=C.bAg(r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aYH,v)},
a6k(a1){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$a6k=B.e(function(a2,a3){if(a2===1){s.push(a3)
w=t}for(;;)switch(w){case 0:e=a1.x
d=A.a.i(A.a.i(e==null?"":e)).toLowerCase()
if(d.length===0){u=!1
w=1
break}a1.w="hati_kiapo_uongozi"
a1.f=new B.S(Date.now(),0,!1)
o=a1.hA()
for(e=o.r,n=e.length,m=0;m<e.length;e.length===n||(0,B.L)(e),++m)for(l=e[m].z,k=l.length,j=0;j<k;++j){i=l[j]
h=i.at
g=A.a.i(h==null?"":h)
h=i.db
if((h==="__kiapo_video__"||A.a.a0(h,"__kiapo_video___"))&&A.a.a0(g,"data:"))i.at=null}$.a6j.n(0,d,o)
$.fNg=!0
w=3
return B.b(C.aot(),$async$a6k)
case 3:w=4
return B.b(B.c1(),$async$a6k)
case 4:if(!a3){u=!1
w=1
break}t=6
e=x.N
r=B.V(e,x.P)
for(n=$.a6j,n=new B.cJ(n,B.a3(n).k("cJ<1,2>")).gag(0);n.C();){l=n.d
l.toString
q=l
J.aG(r,q.a,q.b.ae())}w=9
return B.b(B.ng("civic_hati_kiapo_uongozi",B.E(["byState",r,"updatedAt",new B.S(Date.now(),0,!1).a5().ac()],e,x.z),null),$async$a6k)
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
return B.i($async$a6k,v)},
aou(d){var w=0,v=B.j(x.T),u,t,s
var $async$aou=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(new B.hW().a4D(A.eG),$async$aou)
case 3:s=f
if(s==null){u=null
w=1
break}w=4
return B.b(s.fe(),$async$aou)
case 4:t=f
if(t.length===0){u=null
w=1
break}w=5
return B.b(C.aYG(t,d),$async$aou)
case 5:u=f
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aou,v)},
aYG(d,e){return C.hwl(d,e)},
hwl(d,e){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$aYG=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.c1(),$async$aYG)
case 7:if(!g){u=null
w=1
break}n=A.a.i(e)
m=B.af("[^a-z0-9]+",!0,!1,!1,!1)
r=B.aJ(n.toLowerCase(),m,"_")
q="civic_kiapo/"+B.t(r)+"/"+1000*Date.now()+".mp4"
n=$.eU().b
n===$&&B.c()
n=n.at
n===$&&B.c()
p=n.i4("media")
w=8
return B.b(p.wE(q,new Uint8Array(B.cr(d)),D.bvM),$async$aYG)
case 8:n=p.Ce(q)
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
return B.i($async$aYG,v)},
JU(d,e,f,g,h,i,j,k,l,m,n){var w=C.cC()
return C.en(e,!1,f,A.aC,k.length===0?"marriage_locked":"marriage_locked_"+k,4280640491,g,h,i,"",j,w,null,"","",0,!1,"",0,D.be,4280172719,2,d,0,0,"",D.cg,D.cQ,l,m,n)},
fad(d,e,f,g,h,i,j,k,l){var w=C.cC()
return C.en(A.bg,!1,4279310375,A.aC,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bk,A.a4,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.cg,D.f_,j,k,l)},
fRg(d,e,f,g,h,i,j,k){var w=C.cC(),v=A.k.D(i*0.0017,0.02,0.06)
return C.en(h,!1,j,A.aC,"marriage_field_"+d+":"+A.k.aa(g,3),4280640491,i,A.cD,A.O,"",v,w,null,"","",0,!1,"",0,D.be,4280172719,2,k,0,0,"",D.cg,D.cQ,g,e,f)},
f9M(d,e,f,g){return C.fad(0,0.002,D.fp,g,0.8,"ul_"+B.t(d)+"_"+B.t(e),f,d,e+0.002)},
fRh(d,e,f,g,h,i,j,k){var w=C.cC()
return C.en(A.q3,!1,j,A.aC,"marriage_field_"+d+":"+A.k.aa(g,3),4280640491,i,A.bk,A.a4,"",h,w,null,"","",0,!1,"",0,D.be,4280172719,2,k,0,0,"",D.cg,D.cQ,g,e,f)},
ha7(d){var w="marriage_field_",v=d.db
if(!A.a.a0(v,w))return null
return A.d.gL(A.a.e9(v,w,"").split(":"))},
bAg(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4="hati_kiapo_uongozi",a5="__kiapo_video___"
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
if(s!=null)for(t=s.z,o=t.length,n=0;n<t.length;t.length===o||(0,B.L)(t),++n){m=t[n]
l=C.ha7(m)
if(l!=null&&A.a.i(m.r).length!==0)r.n(0,l,m.r)
k=m.at
j=A.a.i(k==null?"":k)
i=m.db
if((i==="__kiapo_video__"||A.a.a0(i,a5))&&j.length!==0)q=k
if(m.b===D.kP&&A.a.a0(i,"marriage_sign_placed_rais"))p=m.hA()}h=C.fTG(u)
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
for(w=a1.z,v=w.length,t=q!=null,n=0;n<w.length;w.length===v||(0,B.L)(w),++n){m=w[n]
l=C.ha7(m)
if(l!=null&&r.ah(0,l)){o=r.h(0,l)
o.toString
m.r=o}o=m.db
if((o==="__kiapo_video__"||A.a.a0(o,a5))&&t)m.at=q}if(p!=null){a2={}
a2.a=null
for(w=a1.z,v=w.length,n=0;n<v;++n){m=w[n]
t=m.db
if(A.a.a0(t,"marriage_sign_")&&!A.a.a0(t,"marriage_sign_placed_")&&m.b!==D.kP&&A.a.c9(t,"rais")){a2.a=m
break}}w=a2.a
if(w!=null){p.c=w.c
p.d=w.d
p.e=w.e
p.f=w.f
A.d.bn(a1.z,new C.ft3(a2))}else A.d.bn(a1.z,new C.ft4())
A.d.K(a1.z,p)}w=a0.ax
if(A.a.i(w==null?"":w).length===0&&C.fv2(a0))a0.ax=a6.f.a5().ac()
return a0},
fTG(d){var w,v,u="Hati ya Kiapo cha Uongozi",t=null,s=4279310375,r=4280640491,q=4280172719,p=4279378237,o=4290283019,n=4293056712,m=C.fvQ(D.a3P),l=C.cC(),k=x.u,j=B.a([C.en(A.bg,!1,s,A.aC,"marriage_locked_bg",r,24,A.bk,A.a4,"",1,C.cC(),m,"","",0,!1,"",0,D.be,q,2,"",0,0,"",D.cg,D.lh,1,0,0)],k),i=B.a([],k)
i.push(C.JU("NGMY",A.L,236069181,52,A.bk,A.u,0.08,"watermark",0.45,-0.08,0.02))
i.push(C.JU("TAREHE:",A.bg,o,16,A.bk,A.I,A.k.D(0.0272,0.02,0.06),"tarehe_lbl",0.1,0.7,0.026))
i.push(C.fRg("tarehe",0.8059999999999999,0.026,0.18,A.bg,16,p,C.ha8()))
i.push(C.f9M(0.8099999999999999,0.026+A.k.D(0.0272,0.02,0.06)*0.8,0.12,o))
i.push(C.JU("HATI YA KIAPO CHA UONGOZI",A.L,p,26,A.bk,A.u,0.048,"title",0.83,0.085,0.055))
i.push(C.JU("Kiapo cha Rais \xb7 Presidential Oath of Leadership",A.L,o,11,A.cD,A.a4,0.024,"subtitle",0.83,0.085,0.1))
i.push(C.fad(0,0.002,D.fp,o,1.6,"title_rule",0.5312,0.2344,0.128))
i.push(C.fRh("body_p1",0.085,0.145,0.83,0.105,12,p,"Mimi [Jina Kamili la Rais], nikiwa Rais wa jamii yetu ya Kikongo, ninasimama mbele ya wanajamii wote kuapa kwamba nitawaongoza kwa haki, amani, na heshima kubwa, huku nikihakikisha tunashirikiana kwa pamoja kujenga jamii yetu na kuchangia maendeleo kwa njia bora na ya kistaarabu."))
i.push(C.fRh("body_p2",0.085,0.255,0.83,0.092,12,p,"Ninajwika jukumu kamili la kusimamia rasilimali na fedha za wananchi kwa uaminifu mkubwa. Endapo itatokea kiasi chochote cha fedha cha mwanachama yeyote hakikurekodiwa vizuri, au fedha ya jumuiya ikipotea bila maelezo, nitawajibika kulipa mara tatu (triple) ya kiasi kilichopotea."))
i.push(C.fRh("body_p3",0.085,0.352,0.83,0.095,12,p,"Kama nikishindwa kulipa au nikakataa kufanya hivyo, wanajamii wote wanaruhusiwa na wako huru kuchukua hatua za kisheria kwenda kuripoti kwa maofisa wa serikali (state officers) au polisi, au kumfungulia mashitaka mahakamani, na niko tayari kukabiliwa na sheria hizo bila pingamizi."))
i.push(C.fad(268435456,0.175,D.be,o,1.6,"video_frame",0.83,0.085,0.46))
i.push(C.JU("VIDEO YA KIAPO",A.bg,o,10,A.bk,A.I,0.02,"video_lbl",0.7899999999999999,0.10500000000000001,0.468))
i.push(C.en(A.bg,!1,s,A.aC,"__kiapo_video__",r,24,A.bk,A.a4,"",0.131,C.cC(),t,"","",0,!1,"",0,D.be,q,2,"",0,0,"",D.cg,D.lh,0.77,0.115,0.492))
i.push(C.JU("Rais Anayeapa:",A.bg,p,15,A.bk,A.u,0.028,"rais_hdr",0.83,0.085,0.655))
i.push(C.JU("Jina:",A.bg,p,13,A.bk,A.O,0.026,"jina_lbl",0.1,0.085,0.6930000000000001))
i.push(C.fRg("rais_jina",0.195,0.6930000000000001,0.62,A.bg,13,p,""))
i.push(C.f9M(0.195,0.7130000000000001,0.62,n))
i.push(C.JU("Sahihi:",A.bg,p,13,A.bk,A.O,0.026,"sahihi_lbl",0.12,0.085,0.74))
i.push(C.en(A.bg,!1,s,A.aC,"marriage_sign_rais",0,24,A.bk,A.a4,"",0.07,C.cC(),t,"","",0,!1,"",0,D.be,0,2,"",0,0,"",D.cg,D.f_,0.38,0.21500000000000002,0.73))
i.push(C.f9M(0.21500000000000002,0.795,0.38,n))
i.push(C.JU("Tarehe:",A.bg,p,13,A.bk,A.O,0.026,"tarehe2_lbl",0.12,0.625,0.74))
i.push(C.fRg("rais_tarehe",0.745,0.74,0.2,A.bg,12,p,C.ha8()))
i.push(C.f9M(0.745,0.76,0.2,n))
w=A.a.i(d)
if(w.length!==0)A.d.v(i,B.a([C.fad(0,0.032,D.be,o,1,"state_box",0.72,0.14,0.875),C.JU("EMO 'YA M'MBONDO "+w,A.L,p,14,A.bk,A.O,0.026000000000000002,"state_text",0.72,0.14,0.878)],k))
A.d.v(j,i)
v=C.rf(4294967035,t,0,0,j,l,D.pS,"","",u,D.dd)
return C.B9(t,t,t,t,D.nW,5,!1,"hati_kiapo_uongozi",t,t,t,t,C.cC(),t,!1,w,u,t,t,B.a([v],x.g),"hati_kiapo_elegant_navy",t,!1,t)},
afm(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$afm=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:p=A.a.i(i)
if(p.length===0){if(f.e!=null)f.I(x.q).f.R(D.eK9)
w=1
break}w=3
return B.b(C.Um(!0),$async$afm)
case 3:w=4
return B.b(C.aYH(p),$async$afm)
case 4:t=k
if(f.e==null){w=1
break}if(e)s=d||t==null||C.hfc(t)
else s=!1
w=t!=null?5:6
break
case 5:w=s?7:8
break
case 7:w=9
return B.b(B.bW(D.bao,null,new C.fnU(p),f,!0,!0,!1,A.li,!1,!1,x.N),$async$afm)
case 9:r=k
if(r==="continue"){h.$1(t)
w=1
break}if(r!=="new"){w=1
break}if(f.e==null){w=1
break}w=10
return B.b(B.c9(null,null,!0,null,new C.fnV(),f,null,!0,!0,x.y),$async$afm)
case 10:if(k!==!0||f.e==null){w=1
break}g.$1(C.fTG(p))
w=1
break
case 8:h.$1(t)
w=1
break
case 6:if(!s){if(f.e!=null){q=f.I(x.q).f
q.R(B.b2(null,null,null,null,null,A.q,null,B.d("Registrar wa "+p+" bado hajachapisha Hati ya Kiapo cha Uongozi.",null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))}w=1
break}if(f.e==null){w=1
break}g.$1(C.fTG(p))
case 1:return B.h(u,v)}})
return B.i($async$afm,v)},
faY:function faY(){},
c6G:function c6G(){},
ft3:function ft3(d){this.a=d},
ft4:function ft4(){},
fnU:function fnU(d){this.a=d},
fnS:function fnS(d){this.a=d},
fnT:function fnT(d){this.a=d},
fnV:function fnV(){},
fnQ:function fnQ(d){this.a=d},
fnR:function fnR(d){this.a=d},
ap_:function ap_(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aCl:function aCl(){var _=this
_.d=null
_.r=_.f=_.e=!1
_.c=_.a=null},
e4m:function e4m(d){this.a=d},
e4k:function e4k(d){this.a=d},
e4l:function e4l(d){this.a=d},
e4n:function e4n(d){this.a=d},
e4o:function e4o(d){this.a=d},
wc(d,e,f,g,h,i,j,k,l,m,n){var w=C.cC()
return C.en(e,!1,f,A.aC,k.length===0?"marriage_locked":"marriage_locked_"+k,4280640491,g,A.bk,h,"",i,w,null,"","",0,!1,"",j,D.be,4280172719,2,d,0,0,"",D.cg,D.cQ,l,m,n)},
h9M(d,e,f){var w=4291404327
return B.a([C.pV(0,f,D.eI,w,2,"ring_l",f,d-f*0.42,e),C.pV(0,f,D.eI,w,2,"ring_r",f,d+f*0.06,e)],x.u)},
f9c(d,e,f,g,h){var w,v,u="ps_"+g,t=C.pV(4294967288,f,D.eI,4291404327,1.3,u+"_ring",f,d,e),s=f*0.36
s=C.pV(h,s,D.eI,h,0,u+"_head",s,d+f*0.32,e+f*0.16)
w=g?0.12:0.18
v=g?0.76:0.64
return B.a([t,s,C.pV(h,f*0.46,D.eI,h,0,u+"_body",f*v,d+f*w,e+f*0.5)],x.u)},
pV(d,e,f,g,h,i,j,k,l){var w=C.cC()
return C.en(A.bg,!1,4279310375,A.aC,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bk,A.a4,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.cg,D.f_,j,k,l)},
f9b(d,e,f,g,h,i,j,k,l){var w=C.cC(),v=A.k.D(j*0.0017,0.02,0.06),u="marriage_field_"+d+":"
return C.en(h,!1,k,A.aC,i?u+A.k.aa(g,3)+":"+A.o.aa(j,1):u+A.k.aa(g,3),4280640491,j,A.cD,A.O,"",v,w,null,"","",0,!1,"",0,D.be,4280172719,2,l,0,0,"",D.cg,D.cQ,g,e,f)},
bxG(d,e,f,g){return C.pV(0,0.002,D.fp,g,0.8,"ul_"+B.t(d)+"_"+B.t(e),f,d,e+0.002)},
h9L(d,e,f,g,h){var w=A.k.D(d.length*30*0.00058+0.08,0.2,0.5),v=f+(g-w)/2
return B.a([C.pV(0,0.036,D.be,h,1.4,"banner_box_"+d,w,v,e),C.wc(d,A.L,h,30,A.u,0.025199999999999997,0,"banner_t_"+d,w,v,e+0.00612)],x.u)},
heY(){var w=new B.S(Date.now(),0,!1),v=new C.fu9()
return B.t(v.$1(B.bQ(w)))+"/"+B.t(v.$1(B.bG(w)))+"/"+B.by(w)},
h9N(d,e,f,g,h,i,j){var w=4293056712,v=h*0.56,u=f+v+0.01,t=u+0.08,s=f+h-t,r=""+e,q=f+0.026,p=v-0.026
return B.a([C.wc(r+".",A.bg,i,13,A.I,0.024,0,"wln_"+d+"_"+r,0.026,f,g),C.f9b("witness_"+d+"_"+r+"_name",q,g,p,A.bg,!0,16,j,"[Jina la Shahidi]"),C.bxG(q,g+A.k.D(0.0272,0.02,0.06),p,w),C.wc("Sahihi:",A.bg,j,15,A.a4,0.028,0,"wls_"+d+"_"+r,0.077,u,g),C.en(A.bg,!1,4279310375,A.aC,"marriage_sign_"+d+"_witness_"+r,0,24,A.bk,A.a4,"",0.05,C.cC(),null,"","",0,!1,"",0,D.be,0,2,"",0,0,"",D.cg,D.f_,s,t,g-0.004),C.bxG(t,g+0.044,s,w)],x.u)},
afO(d,e){var w,v,u,t=x.cd,s=e!=null?B.a([e],t):B.a([D.d6G,D.cdu,D.d_K,D.d1x],t)
for(t=s.length,w=0;w<s.length;s.length===t||(0,B.L)(s),++w)for(v=A.d.gag(s[w]);v.C();){u=v.gU(0)
if(u.a===d)return u}return null},
fQA(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var w=C.fvQ(d.d),v=B.a([C.en(A.bg,!1,4279310375,A.aC,"marriage_locked_bg",4280640491,24,A.bk,A.a4,"",1,C.cC(),w,"","",0,!1,"",0,D.be,4280172719,2,"",0,0,"",D.cg,D.lh,1,0,0)],x.u)
A.d.v(v,C.hKW(d,e,f,g,h,i,j,k,l,m,n,o,p,q))
return v},
hKW(c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=null,b0=4286200650,b1=4291404327,b2=4280640491,b3=4280172719,b4="marriage_locked",b5=4293056712,b6=4279310375,b7=4279673674,b8="marriage_locked_",b9=c3.f,c0=c3.r,c1=x.u,c2=B.a([],c1)
c2.push(C.wc("NGMY",A.L,b9&16777215|251658240,60,A.u,0.09,-0.52,"watermark",0.5,-0.11,0.025))
w=c3.z
switch(w.a){case 1:case 3:A.d.v(c2,C.h9M(0.42,0.016,0.048))
v=0.066
break
case 7:A.d.v(c2,C.h9M(0.38,0.012,0.072))
v=0.082
break
case 2:case 6:case 10:A.d.v(c2,C.f9c(0.16,0.018,0.052,!1,b9))
A.d.v(c2,C.f9c(0.79,0.018,0.052,!0,b0))
v=0.072
break
case 5:c2.push(C.wc("\ud83c\udf33",A.L,4279898632,22,A.a4,0.04,0,"tree",0.16,0.42,0.014))
v=0.056
break
case 8:A.d.v(c2,B.a([C.pV(0,0.062,D.eI,b1,1.6,"crest_o",0.11,0.445,0.012),C.pV(0,0.046,D.eI,b1,1,"crest_i",0.084,0.458,0.02),C.wc("MUHURI",A.L,b9,9,A.u,0.028,0,"crest_t",0.11,0.445,0.028)],c1))
v=0.078
break
case 4:case 9:A.d.v(c2,B.a([C.pV(0,0.002,D.fp,b1,1,"orn_l_0.018",0.24,0.2,0.024),C.pV(b9,0.016,D.kQ,b1,0.9,"orn_c_0.018",0.024,0.488,0.018),C.pV(0,0.002,D.fp,b1,1,"orn_r_0.018",0.24,0.518,0.024)],c1))
v=0.04
break
case 0:v=d5
break
default:v=d5}A.d.v(c2,B.a([C.wc("TAREHE:",A.bg,c0,20,A.I,A.k.D(0.033999999999999996,0.02,0.06),0,"tarehe_lbl",0.1,0.7,0.026),C.f9b("tarehe",0.8059999999999999,0.026,0.14400000000000002,A.bg,!1,21,b9,C.heY()),C.bxG(0.814,0.026+A.k.D(0.035699999999999996,0.02,0.06)*0.8,0.12,c0)],c1))
c2.push(C.wc(d2,A.L,b9,d3,A.u,0.06,0,"title",0.82,0.09,v))
u=v+0.054
c2.push(C.pV(c0,0.0026,D.be,c0,0,"title_rule_1",0.82*d4,0.09+0.82*(1-d4)/2,u))
t=u+0.028
c2.push(C.pV(c3.e,0.138,D.be,c0,1.15,"intro_frame",0.832,0.08399999999999999,t-0.004))
s=C.cC()
c2.push(C.en(A.bg,!1,b9,A.aC,"marriage_field_utangulizi:"+A.k.aa(0.82,3),b2,19,A.bk,A.cs,"",0.128,s,a9,"","",0,!1,"",0,D.be,b3,2,c5,0,0,"",D.cg,D.cQ,0.82,0.09,t))
t+=c4
if(c8){r=A.k.D(c7.length*30*0.00058+0.08,0.2,0.5)
q=0.09+(0.82-r)/2
s=C.pV(0,0.036,D.be,c0,1.4,"banner_box_nimetowe_label",r,q,t)
p=C.cC()
A.d.v(c2,B.a([s,C.en(A.L,!1,c0,A.aC,"marriage_field_nimetowe_label:"+A.k.aa(r,3),b2,30,A.bk,A.u,"",0.025199999999999997,p,a9,"","",0,!1,"",0,D.be,b3,2,c7,0,0,"",D.cg,D.cQ,r,q,t+0.00612)],c1))}else A.d.v(c2,C.h9L(c7,t,0.09,0.82,c0))
t+=0.048
c2.push(C.wc(c9,A.bg,b9,d0,A.O,0.03,0,"nimetowe_sub",0.82,0.09,t))
t+=0.03
for(o=1;o<=4;++o){s=c6[o-1]
n=o===1
m=A.k.D(0.7779999999999999-(n?0.328:0),0.22,1)
l=n?A.k.D(0.037399999999999996,0.02,0.06):A.k.D(0.0272,0.02,0.06)
p=""+o
k=t+0.002
j=C.f9b("mahari_"+p,0.132,k,m,A.bg,!1,16,b9,s)
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
d=B.a([new C.eG(""+1000*i+"_"+h,D.cQ,0.09,t+0.004,0.032,0.022,p+".",13,A.I,A.bk,A.aC,c0,A.bg,a9,D.be,b2,b3,2,0,!1,s,0,D.cg,0,"","","","","",!1,0),j,new C.eG(""+1000*f+"_"+e,D.f_,0.132,k+l+0.002,0.7779999999999999,0.002,"",24,A.a4,A.bk,A.aC,b6,A.bg,a9,D.fp,0,b5,0.8,0,!1,g,0,D.cg,0,"","","","","",!1,0)],c1)
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
A.d.v(d,B.a([new C.eG(""+1000*s+"_"+p,D.cQ,a0,k,0.268,l,"AKUNA DENI",22,A.u,A.bk,A.aC,b7,A.dK,a9,D.be,b2,b3,2,0,!1,"marriage_locked_nim_akuna_deni",0,D.cg,0,"","","","","",!1,0),new C.eG(""+1000*i+"_"+h,D.f_,a1,a2,0.046,0.025875,"",24,A.a4,A.bk,A.aC,b6,A.bg,a9,D.be,0,b7,2,0,!1,"marriage_locked_nim_akuna_box",0,D.cg,0,"","","","","",!1,0),new C.eG(""+1000*g+"_"+f,D.cQ,a1,a2-0.002,0.046,0.029875,"\u2713",18,A.u,A.bk,A.aC,b7,A.L,a9,D.be,b2,b3,2,0,!1,"marriage_locked_nim_akuna_tick",0,D.cg,0,"","","","","",!1,0),new C.eG(""+1000*e+"_"+a3,D.f_,a0,k,a1+0.046-a0,l,"",24,A.a4,A.bk,A.aC,b6,A.bg,a9,D.be,0,0,0,0,!1,"marriage_locked_nim_akuna_hit",0,D.cg,0,"","","","","",!1,0)],c1))}A.d.v(c2,d)
t+=0.04}t+=0.006
A.d.v(c2,C.h9L("MASHAHIDI",t,0.09,0.82,c0))
t+=0.046
if(w===D.a3E||w===D.a3G||w===D.a3D||w===D.a3F){w=t-0.008
A.d.v(c2,C.f9c(0.21,w,0.044,!0,b0))
A.d.v(c2,C.f9c(0.7459999999999999,w,0.044,!1,b9))
t+=0.012}a4=0.05+d6*0.056+0.011
w=t+0.05
s=t+0.012
A.d.v(c2,B.a([C.pV(0,a4,D.be,c0,1.3,"wit_table_border",0.82,0.09,t),C.pV(c0,a4,D.be,c0,0,"wit_table_divider",0.0024,0.4988,t),C.pV(0,0.0022,D.fp,c0,1.1,"wit_table_hdrline",0.82,0.09,w),C.wc("UPANDE WA MKE",A.L,c0,20,A.u,0.03,0,"wit_h_mke_t",0.41,0.09,s),C.wc("UPANDE WA MUME",A.L,c0,20,A.u,0.03,0,"wit_h_mume_t",0.41,0.5,s)],c1))
a5=w+0.01
for(a6=1;a6<=d6;++a6){A.d.v(c2,C.h9N("mke",a6,0.106,a5,0.378,c0,b9))
A.d.v(c2,C.h9N("mume",a6,0.516,a5,0.378,c0,b9))
a5+=0.056}t=t+a4+0.012
w=t+0.056
s=t+0.09
p=s-0.002
A.d.v(c2,B.a([C.pV(0,0.11,D.be,c0,1.2,"mw_box",0.82,0.09,t),C.wc("MWANDISHI",A.bg,c0,15,A.I,0.026,0,"mw_hdr",0.7759999999999999,0.11199999999999999,t+0.016),C.wc("Jina:",A.bg,b9,15,A.a4,0.028,0,"mw_jl",0.09,0.11199999999999999,w),C.f9b("mwandishi_jina",0.215,w,0.3116,A.bg,!0,15,b9,""),C.bxG(0.215,p,0.3116,b5),C.wc("Sahihi:",A.bg,b9,15,A.a4,0.028,0,"mw_sl",0.09,0.5,w),C.en(A.bg,!1,b6,A.aC,"marriage_sign_mwandishi",0,24,A.bk,A.a4,"",0.044,C.cC(),a9,"","",0,!1,"",0,D.be,0,2,"",0,0,"",D.cg,D.f_,0.3161999999999999,0.5738,s-0.044),C.bxG(0.5738,p,0.3161999999999999,b5)],c1))
a7=A.a.i(d1)
if(a7.length!==0){a8=t+0.11+0.006
A.d.v(c2,B.a([C.pV(0,0.032,D.be,c0,1,"state_box",0.7,0.15,a8),C.wc("EMO 'YA M'MBONDO "+a7,A.L,b9,26,A.O,0.026000000000000002,0,"state_text",0.7,0.15,a8+0.003)],c1))}return c2},
hWx(d){var w,v,u,t=null,s=B.b0(d.f),r=B.b0(d.r),q=C.fUj(d.d),p=new C.fu5(s),o=new C.fu6(s),n=d.z,m=n===D.a3E||n===D.a3G||n===D.a3D||n===D.a3F,l=n===D.aDk||n===D.a3H||n===D.aDl,k=B.bY(0,B.fL(q,A.A,t,t,A.cm,A.bQ,!0,t,!1,t,t),0,0,0),j=x.p,i=B.a([],j)
if(l){w=n===D.a3H?26:16
i.push(new C.fu8().$1$size(w))}if(n===D.aDm)i.push(D.fo_)
if(m)i.push(B.A(B.a([o.$1$female(!1),o.$1$female(!0)],j),A.m,t,A.hL,A.j,0,t,t))
i.push(B.d("HATI YA KUHOWA",t,t,t,t,t,t,B.l(t,t,s,t,t,t,t,t,t,t,t,9,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),A.L,t,t))
i.push(A.ao)
n=B.I(r,A.r,1.1)
w=B.m(4)
i.push(B.p(t,B.v(B.a([p.$0(),D.aMi,p.$1$w(0.9),D.aMi,p.$1$w(0.75)],j),A.m,t,A.e,A.j,0,A.p),A.f,t,t,new B.o(D.b65,t,n,w,t,t,A.n),t,t,t,t,A.aha,t,t,t))
i.push(A.ao)
i.push(new C.fu7(r).$1("NIMETOWE"))
i.push(A.fW)
v=J.e1(3,x.l)
for(u=0;u<3;++u)v[u]=new B.C(A.Li,new B.co(A.aQ,A.e,A.j,A.m,t,A.p,t,0,B.a([B.p(t,t,A.f,t,t,new B.o(r,t,t,t,t,t,A.a6),t,7,t,t,t,t,t,7),A.d8,new B.bF(1,A.bj,p.$1$h(4),t)],j),t),t)
A.d.v(i,v)
i.push(A.b3)
i.push(B.d(d.b,t,t,t,t,t,t,B.l(t,t,s.j(0.85),t,t,t,t,t,t,t,t,8,t,t,A.I,t,t,!0,t,t,t,t,t,t,t,t),A.L,t,t))
return new B.an(A.W,t,A.b_,A.q,B.a([k,new B.C(A.afL,B.v(i,A.aj,t,A.e,A.j,0,A.p),t)],j),t)},
hei(d,e){var w,v,u,t=null,s="Hati ya Kuhowa",r=C.afO(e,t)
if(r==null)r=A.d.gL(D.Ga)
w=C.cC()
v=C.rf(r.e,t,0,0,C.fQA(r,0.165,y.O,D.d27,"NIMETOWA",!1,"Vitu vifuatavyo vimetolewa:",20,d,"HATI YA KUHOWA",40,0.55,0.036,3),w,D.pS,"","",s,D.dd)
w=C.cC()
u=A.a.i(d)
if(u.length===0)u=t
return C.B9(t,t,t,t,D.nW,5,!1,"hati_kuhowa",t,t,t,t,w,t,!1,u,s,t,t,B.a([v],x.g),"hati_kuhowa_"+r.a,t,!1,t)},
hej(d,e){var w,v,u,t=null,s="Hati ya Kuhoweya",r=C.afO(e,t)
if(r==null)r=A.d.gL(D.Ga)
w=C.cC()
v=C.rf(r.e,t,0,0,C.fQA(r,0.165,y.f,D.cYX,"NIMEPOKEYA CASH",!0,"Vitu vifuatavyo vimetolewa:",20,d,"HATI YA KUHOWESHA",40,0.55,0.036,3),w,D.pS,"","",s,D.dd)
w=C.cC()
u=A.a.i(d)
if(u.length===0)u=t
return C.B9(t,t,t,t,D.nW,5,!1,"hati_kuhoweya",t,t,t,t,w,t,!1,u,s,t,t,B.a([v],x.g),"hati_kuhoweya_"+r.a,t,!1,t)},
bBD(d,e,f){var w=0,v=B.j(x.T),u
var $async$bBD=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:u=B.bW(A.K,null,new C.fFC(e,f),d,!0,!0,!0,null,!1,!1,x.N)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bBD,v)},
afn(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$afn=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:q=B.T(i).k("a2<1>")
p=B.B(new B.a2(i,new C.fnY(),q),q.k("H.E"))
w=!g&&p.length!==0?3:4
break
case 3:w=5
return B.b(B.bW(D.Kw,null,new C.fnZ(p),d,!0,!0,!1,A.li,!1,!1,x.N),$async$afn)
case 5:t=k
if(t==="continue"){f.$1(A.d.gL(p).hA())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bBD(d,"Hati ya Kuhowa",D.Ga),$async$afn)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.Kx(d,"Tafuta jimbo\u2026","",A.jT,"Chagua jimbo"),$async$afn)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}e.$1(C.hei(r,s))
case 1:return B.h(u,v)}})
return B.i($async$afn,v)},
afo(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$afo=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:q=B.T(i).k("a2<1>")
p=B.B(new B.a2(i,new C.fo1(),q),q.k("H.E"))
w=!g&&p.length!==0?3:4
break
case 3:w=5
return B.b(B.bW(D.Kw,null,new C.fo2(p),d,!0,!0,!1,A.li,!1,!1,x.N),$async$afo)
case 5:t=k
if(t==="continue"){f.$1(A.d.gL(p).hA())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bBD(d,"Hati ya Kuhoweya",D.Ga),$async$afo)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.Kx(d,"Tafuta jimbo\u2026","",A.jT,"Chagua jimbo"),$async$afo)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}e.$1(C.hej(r,s))
case 1:return B.h(u,v)}})
return B.i($async$afo,v)},
afp(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p,o,n,m
var $async$afp=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:n=B.T(i).k("a2<1>")
m=B.B(new B.a2(i,new C.fo5(),n),n.k("H.E"))
w=!g&&m.length!==0?3:4
break
case 3:w=5
return B.b(B.bW(D.Kw,null,new C.fo6(m),d,!0,!0,!1,A.li,!1,!1,x.N),$async$afp)
case 5:t=k
if(t==="continue"){f.$1(A.d.gL(m).hA())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bBD(d,"Malipo ya Awamu ya Mahari",D.PF),$async$afp)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.Kx(d,"Tafuta jimbo\u2026","",A.jT,"Chagua jimbo"),$async$afp)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}q=C.afO(s,D.PF)
if(q==null)q=A.d.gL(D.PF)
n=C.cC()
p=C.rf(q.e,null,0,0,C.fQA(q,0.21,"Mimi [Jina la Baba wa Mume], nikiwa kama baba na mkuu wa familia ya upande wa mume kutoka jamii ya [Jina la Jamii ya Mume], nyumba ya [Jina la Nyumba ya Mume], ninafanya makubaliano haya rasmi na familia ya [Jina la Baba wa Binti], wa jamii ya [Jina la Jamii ya Binti], nyumba ya [Jina la Nyumba ya Binti]. Kwa kuwa malipo kamili ya mahari ya mke wa mwanangu hayajakamilika kwa sasa, tumefikia makubaliano ya kulipa kwa awamu. Kiasi kilichosalia cha mahari kitakamilishwa kikamilifu na familia yetu ifikapo tarehe [Tarehe ya Kurudi Kulipa Mahari]. Siku hiyo, pande zote mbili zitakutana tena kwa ajili ya kukamilisha taratibu zote zilizosalia, kupokea baraka kamili za ndoa, na kukabidhiwa Cheti cha Ndoa ya Kimila. Makubaliano haya yanafanyika kwa hiari, kwa ridhaa ya familia zote mbili, na kwa kufuata misingi ya heshima, mila, desturi na maelewano mema kati ya familia zetu.",D.cU8,"MALIPO YALIYOSALIA",!1,"Mambo ya Cash na Mali (Yaliyosalia / Yatakayokamilishwa):",18,r,"HATI YA MAKUBALIANO YA MALIPO YA AWAMU YA MAHARI",24,0.85,0.048,2),n,D.pS,"","","Hati ya Makubaliano ya Malipo ya Awamu",D.dd)
n=C.cC()
o=A.a.i(r)
if(o.length===0)o=null
e.$1(C.B9(null,null,null,null,D.nW,5,!1,"hati_malipo_awamu",null,null,null,null,n,null,!1,o,"Hati ya Makubaliano ya Malipo ya Awamu",null,null,B.a([p],x.g),"hati_malipo_awamu_"+q.a,null,!1,null))
case 1:return B.h(u,v)}})
return B.i($async$afp,v)},
xa:function xa(d,e){this.a=d
this.b=e},
jh:function jh(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.z=k},
fu9:function fu9(){},
fu5:function fu5(d){this.a=d},
fu7:function fu7(d){this.a=d},
fu8:function fu8(){},
fu6:function fu6(d){this.a=d},
fFC:function fFC(d,e){this.a=d
this.b=e},
acc:function acc(d,e,f){this.c=d
this.d=e
this.a=f},
dV1:function dV1(d,e,f){this.a=d
this.b=e
this.c=f},
dV0:function dV0(d,e){this.a=d
this.b=e},
dV_:function dV_(d,e){this.a=d
this.b=e},
abC:function abC(d,e,f){this.c=d
this.d=e
this.a=f},
fnY:function fnY(){},
fnZ:function fnZ(d){this.a=d},
fnW:function fnW(d){this.a=d},
fnX:function fnX(d){this.a=d},
fo1:function fo1(){},
fo2:function fo2(d){this.a=d},
fo_:function fo_(d){this.a=d},
fo0:function fo0(d){this.a=d},
fo5:function fo5(){},
fo6:function fo6(d){this.a=d},
fo3:function fo3(d){this.a=d},
fo4:function fo4(d){this.a=d},
JX(d,e,f,g,h,i,j,k,l,m){var w=C.cC()
return C.en(e,!1,f,A.aC,j.length===0?"marriage_locked":"marriage_locked_"+j,4280640491,g,A.bk,h,"",i,w,null,"","",0,!1,"",0,D.be,4280172719,2,d,0,0,"",D.cg,D.cQ,k,l,m)},
Cd(d,e,f,g,h,i,j,k,l){var w=C.cC()
return C.en(A.bg,!1,4279310375,A.aC,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bk,A.a4,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.cg,D.f_,j,k,l)},
has(d,e,f){return C.Cd(0,0.002,D.fp,4293056712,0.8,"ul_"+B.t(d)+"_"+B.t(e),f,d,e+0.022)},
bxQ(d,e,f,g,h){return B.a([C.Cd(4294967288,0.032,D.be,4291404327,1.15,"pill_"+d,g,f,e),C.JX(d,A.L,h,11,A.u,0.024,"pill_t_"+d,g,f,e+0.005)],x.u)},
fRl(d,e,f,g,h){var w=d+f/2,v=e+0.006,u=f*0.4,t=B.t(e)
return B.a([C.Cd(0,0.002,D.fp,g,1,"orn_l_"+t,u,d,v),C.Cd(h,0.016,D.kQ,g,0.9,"orn_c_"+t,0.024,w-0.012,e),C.Cd(0,0.002,D.fp,g,1,"orn_r_"+t,u,w+0.018,v)],x.u)},
a0h(d,e,f,g,h,i,j,k){var w=d.length*i*0.0027+0.006,v=C.JX(d,A.bg,j,i,A.O,0.022,"ll_"+e,w,f,g),u=f+w,t=h-w,s=C.cC()
return B.a([v,C.en(A.L,!1,j,A.aC,"marriage_field_"+e+":"+A.k.aa(t,3),4280640491,i,A.cD,A.O,"",0.02,s,null,"","",0,!1,"",0,D.be,4280172719,2,k,0,0,"",D.cg,D.cQ,t,u,g-0.002),C.has(u,g+0.018,t)],x.u)},
hat(d,e,f,g,h,i){var w=4291404327,v=f+0.002
return B.a([C.Cd(h,0.028,D.be,h,0,"chv_"+d,g,e,f),C.Cd(w,0.024,D.kQ,w,0,"chv_l_"+d,0.024,e-0.008,v),C.Cd(w,0.024,D.kQ,w,0,"chv_r_"+d,0.024,e+g-0.016,v),C.JX(d,A.L,i,9.5,A.u,0.02,"chv_t_"+d,g,e,f+0.004)],x.u)},
bxP(d,e,f,g,h){var w=e+0.12,v=g-0.12
return B.a([C.JX("Sahihi:",A.bg,h,10,A.O,0.02,"is_"+d,0.12,e,f),C.en(A.bg,!1,4279310375,A.aC,"marriage_sign_"+d,0,24,A.bk,A.a4,"",0.032,C.cC(),null,"","",0,!1,"",0,D.be,0,2,"",0,0,"",D.cg,D.f_,v,w,f-0.006),C.has(w,f+0.016,v)],x.u)},
fUk(d){var w,v
for(w=0;w<19;++w){v=D.PS[w]
if(v.a===d)return v}return null},
hYO(d){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=d.c
if(A.a.a0(k,"hati_kuhowa_")){w=C.afO(A.a.b0(k,12),l)
v=w==null?l:w.d}else if(A.a.a0(k,"hati_kuhoweya_")){w=C.afO(A.a.b0(k,14),l)
v=w==null?l:w.d}else if(A.a.a0(k,"hati_malipo_awamu_")){u=A.a.b0(k,18)
w=C.afO(u,D.PF)
v=w==null?l:w.d
if(v==null){w=C.afO(u,l)
v=w==null?l:w.d}}else if(A.a.a0(k,"marriage_")){w=C.fUk(A.a.b0(k,9))
v=w==null?l:w.d}else v=l
if(v==null)return!1
$.hbh.a8(0)
$.hbv.a8(0)
t=C.fvQ(v)
for(w=d.r,s=w.length,r=!1,q=0;q<w.length;w.length===s||(0,B.L)(w),++q)for(p=w[q].z,o=p.length,n=0;n<o;++n){m=p[n]
if(m.db==="marriage_locked_bg"&&m.at!==t){m.at=t
r=!0}}return r},
fVo(d){var w=0,v=B.j(x.T),u
var $async$fVo=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:u=B.bW(A.K,null,new C.fH4(),d,!0,!0,!0,null,!1,!1,x.N)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fVo,v)},
xd:function xd(d,e){this.a=d
this.b=e},
nw:function nw(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bhs:function bhs(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
fH4:function fH4(){},
acf:function acf(d){this.a=d},
e9B:function e9B(d,e){this.a=d
this.b=e},
e9A:function e9A(d){this.a=d},
e9z:function e9z(d,e){this.a=d
this.b=e},
adU:function adU(d,e,f){this.c=d
this.d=e
this.a=f},
fUj(d){return $.hbv.ci(0,d,new C.fvS(d))},
fvQ(d){return $.hbh.ci(0,d,new C.fvR(d))},
fy(d){return B.fKV(d>>>16&255,d>>>8&255,d&255,255)},
hNX(d){var w,v,u=4292128567,t=4285213214,s=4294967035,r=4290283019,q=null,p=4279378237,o=4291404327,n=4294966774,m=4294702831,l=4285218602,k=4291394365,j=4294967295,i=4294964964,h=4294965484,g=4280241466,f=4287326484,e=4294966518
switch(d.a){case 0:return C.hcz(4294570461,4293910718,4284234270,u)
case 1:return C.hcz(4294635750,4293975240,t,4292912216)
case 2:w=C.f7N(s,4294505966,r)
C.bxA(w,14,16,p)
C.kp(w,8,9,464,836,u,1.2)
C.C9(w,2,2,1,1,u,10)
C.C9(w,478,2,-1,1,u,10)
C.C9(w,2,852,1,-1,u,10)
C.C9(w,478,852,-1,-1,u,10)
return w
case 3:return C.f7N(4294966515,4294373082,4289102906)
case 4:return C.hIL(C.f7N(4294376440,4293653998,4290287194))
case 5:w=C.f7N(4294965238,4294437098,4288444980)
C.bxA(w,14,16,4283043359)
C.kp(w,6,7,468,840,u,1)
C.kp(w,9,10,462,834,o,0.7)
return w
case 6:v=B.hl(q,q,A.c9,0,A.e_,854,q,0,3,q,A.c9,480,!1)
C.y2(v,n,4294175448)
C.rz(v,n)
C.kp(v,24,24,432,806,4286209070,1)
C.a05(v,12,12,468,12,o,3,20)
C.a05(v,12,842,468,842,o,3,20)
C.a05(v,12,12,12,842,o,3,20)
C.a05(v,468,12,468,842,o,3,20)
return v
case 7:return C.hGQ(4294440434,4293518297,4280228630,r)
case 8:v=B.hl(q,q,A.c9,0,A.e_,854,q,0,3,q,A.c9,480,!1)
C.y2(v,m,4293911504)
C.rz(v,m)
C.kp(v,28,28,424,798,l,1)
C.fgv(v,28,28,l,k)
C.fgv(v,452,28,l,k)
C.fgv(v,28,826,l,k)
C.fgv(v,452,826,l,k)
return v
case 9:v=B.hl(q,q,A.c9,0,A.e_,854,q,0,3,q,A.c9,480,!1)
C.y2(v,j,4294111986)
C.rz(v,j)
C.kp(v,18,18,444,818,4292401368,0.7)
B.iH(v,!0,C.fy(p),0,13,0,853)
return v
case 10:return C.hKI(i,4294173372)
case 11:return C.hLN(4294439140,4293449662)
case 12:return C.hGI(h,4294239432)
case 13:return C.hLe(4294244340,4293193448)
case 14:return C.hPu(4294505710,4293780694)
case 15:return C.f6N(4294966259,4294439138,o,p,q)
case 16:return C.f6N(4294966776,4294178544,o,g,g)
case 17:return C.f6N(4294965493,4294504170,o,4286200650,q)
case 18:return C.f6N(4294966519,4294373862,o,p,p)
case 19:return C.hJQ()
case 20:return C.hJR()
case 21:v=B.hl(q,q,A.c9,0,A.e_,854,q,0,3,q,A.c9,480,!1)
C.y2(v,h,4293976768)
C.rz(v,h)
C.bxA(v,14,16,p)
B.iH(v,!0,C.fy(u),4,475,4,9)
B.iH(v,!0,C.fy(u),4,475,844,849)
B.iH(v,!0,C.fy(u),4,9,4,849)
B.iH(v,!0,C.fy(u),470,475,4,849)
C.a05(v,10,12,470,12,u,2,16)
C.a05(v,10,842,470,842,u,2,16)
C.a05(v,10,12,10,842,u,2,18)
C.a05(v,470,12,470,842,u,2,18)
C.C9(v,2,2,1,1,t,10)
C.C9(v,478,2,-1,1,t,10)
C.C9(v,2,852,1,-1,t,10)
C.C9(v,478,852,-1,-1,t,10)
C.kp(v,14,16,452,822,u,1.8)
return v
case 22:v=B.hl(q,q,A.c9,0,A.e_,854,q,0,3,q,A.c9,480,!1)
C.y2(v,s,4294438872)
C.rz(v,s)
C.kp(v,14,16,452,822,o,2.2)
C.kp(v,22,24,436,806,o,1)
C.fSD(v,!1,!1,o,p,p,36,14,16)
C.kB(v,240,20,7,o,!0)
C.kB(v,240,834,7,o,!0)
C.kB(v,18,427,7,o,!0)
C.kB(v,462,427,7,o,!0)
return v
case 23:v=B.hl(q,q,A.c9,0,A.e_,854,q,0,3,q,A.c9,480,!1)
C.y2(v,i,4293910712)
C.rz(v,i)
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
case 24:v=B.hl(q,q,A.c9,0,A.e_,854,q,0,3,q,A.c9,480,!1)
C.y2(v,e,4294174404)
C.rz(v,e)
C.bxA(v,14,16,p)
B.iH(v,!0,C.fy(u),3,476,3,8)
B.iH(v,!0,C.fy(u),3,476,845,850)
B.iH(v,!0,C.fy(u),3,8,3,850)
B.iH(v,!0,C.fy(u),471,476,3,850)
C.kp(v,9,10,462,834,t,1)
C.kp(v,14,16,452,822,u,1.8)
C.kB(v,240,8,4,u,!0)
C.kB(v,240,846,4,u,!0)
C.kB(v,8,427,4,u,!0)
C.kB(v,472,427,4,u,!0)
C.kB(v,8,8,3,t,!0)
C.kB(v,472,8,3,t,!0)
C.kB(v,8,846,3,t,!0)
C.kB(v,472,846,3,t,!0)
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
B.kD(d,!1,A.d9,new B.Rh(s),r,A.cW,1,0,w-1,k,k);++k}},
rz(d,e){var w,v,u,t,s,r,q,p,o=null,n=new B.eT()
n.dI(e)
for(w=0;w<900;++w){v=d.a
v=v==null?o:v.a
u=n.aB(v==null?0:v)
v=d.a
v=v==null?o:v.b
t=n.aB(v==null?0:v)
v=d.a
s=v==null?o:v.dQ(u,t,o)
if(s==null)s=new B.iC()
v=A.o.D(A.k.O(s.gb6(s))-3,0,255)
r=A.o.D(A.k.O(s.gbf())-3,0,255)
q=A.o.D(A.k.O(s.gbg(s))-2,0,255)
p=d.a
if(p!=null)p.jy(u,t,v,r,q,255)}},
kp(d,e,f,g,h,i,j){var w,v=null,u=C.fy(i),t=e+g
B.kD(d,!0,A.d9,u,v,A.cW,j,e,t,f,f)
w=f+h
B.kD(d,!0,A.d9,u,v,A.cW,j,e,t,w,w)
B.kD(d,!0,A.d9,u,v,A.cW,j,e,e,f,w)
B.kD(d,!0,A.d9,u,v,A.cW,j,t,t,f,w)},
C9(d,e,f,g,h,i,j){var w,v,u=null,t=A.o.D(A.k.V(j*0.72),8,j-2)
B.kD(d,!0,A.d9,C.fy(i),u,A.cW,2,e,e+g*j,f,f)
B.kD(d,!0,A.d9,C.fy(i),u,A.cW,2,e,e,f,f+h*j)
w=e+g*3
v=f+h*3
B.kD(d,!0,A.d9,C.fy(i),u,A.cW,1,w,e+g*t,v,v)
B.kD(d,!0,A.d9,C.fy(i),u,A.cW,1,w,w,v,f+h*t)},
hcz(d,e,f,g){var w=null,v=B.hl(w,w,A.c9,0,A.e_,854,w,0,3,w,A.c9,480,!1)
C.y2(v,d,e)
C.rz(v,d)
B.iH(v,!0,C.fy(f),0,479,0,28)
B.iH(v,!0,C.fy(f),0,479,826,853)
B.iH(v,!0,C.fy(f),0,28,0,853)
B.iH(v,!0,C.fy(f),452,479,0,853)
C.kp(v,5,5,470,844,g,1.1)
C.kp(v,28,28,424,798,g,1.6)
C.C9(v,2,2,1,1,g,11)
C.C9(v,478,2,-1,1,g,11)
C.C9(v,2,852,1,-1,g,11)
C.C9(v,478,852,-1,-1,g,11)
return v},
f7N(d,e,f){var w=null,v=B.hl(w,w,A.c9,0,A.e_,854,w,0,3,w,A.c9,480,!1)
C.y2(v,d,e)
C.rz(v,d)
C.kp(v,14,16,452,822,f,1.6)
C.kp(v,20,22,440,810,f,0.8)
return v},
bxA(d,e,f,g){var w,v=C.fy(g)
B.iH(d,!0,v,0,479,0,f-1)
w=854-f
B.iH(d,!0,v,0,479,w,853);--w
B.iH(d,!0,v,0,e-1,f,w)
B.iH(d,!0,v,480-e,479,f,w)},
hIL(d){var w,v,u=4291404327
C.bxA(d,14,16,4279122734)
for(w=10;w<470;w+=14){C.kB(d,w,8,3,u,!0)
C.kB(d,w,846,3,u,!0)}for(v=18;v<836;v+=16){C.kB(d,7,v,3,u,!0)
C.kB(d,473,v,3,u,!0)}return d},
fju(d,e,f,g,h,i,j,k,l,m,n){var w,v,u,t=x.J,s=B.a([new B.j9(e,f),new B.j9(e+g*n,f),new B.j9(e,f+h*n)],t)
B.a0S(d,C.fy(m),s)
w=A.o.D(A.k.V(n*0.17),5,8)
v=A.k.V(n*0.78)
s=e+g*w
u=f+h*w
t=B.a([new B.j9(s,u),new B.j9(e+g*v,u),new B.j9(s,f+h*v)],t)
B.a0S(d,C.fy(k),t)
t=A.k.V(n*0.39)
C.kB(d,e+g*t,f+h*t,6,l,!0)
if(i){t=n-7
C.kB(d,e+g*t,f+h*3,4,k,!0)
C.kB(d,e+g*3,f+h*t,4,k,!0)}if(j){t=n-4
C.kB(d,e+g*t,f,5,k,!0)
C.kB(d,e,f+h*t,5,k,!0)}},
fSD(d,e,f,g,h,i,j,k,l){var w,v
C.fju(d,k,l,1,1,e,f,g,h,i,j)
w=480-k
C.fju(d,w,l,-1,1,e,f,g,h,i,j)
v=854-l
C.fju(d,k,v,1,-1,e,f,g,h,i,j)
C.fju(d,w,v,-1,-1,e,f,g,h,i,j)},
a05(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p,o=g-e,n=h-f,m=Math.max(1,A.k.V(Math.sqrt(o*o+n*n)/k))
for(w=i>>>16&255,v=i>>>8&255,u=i&255,t=0;t<=m;++t){s=t/m
r=A.k.V(e+o*s)
q=A.k.V(f+n*s)
p=new Uint8Array(4)
p[0]=w
p[1]=v
p[2]=u
p[3]=255
B.kX(d,!0,A.d9,new B.qM(p),null,A.cW,j,r,q)}},
fiD(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o
for(w=i>>>16&255,v=i>>>8&255,u=i&255,t=0;t<3;++t){s=34+t*12
r=26-t*6
q=e+g*s
p=f+h*s
o=new Uint8Array(4)
o[0]=w
o[1]=v
o[2]=u
o[3]=255
B.kD(d,!0,A.d9,new B.qM(o),null,A.cW,1.4,q,q+g*r,p,p)
o=new Uint8Array(4)
o[0]=w
o[1]=v
o[2]=u
o[3]=255
B.kD(d,!0,A.d9,new B.qM(o),null,A.cW,1.4,q,q,p,p+h*r)}},
hGQ(d,e,f,g){var w,v,u,t,s,r,q,p,o=null,n=B.hl(o,o,A.c9,0,A.e_,854,o,0,3,o,A.c9,480,!1)
C.y2(n,d,e)
C.rz(n,d)
C.kp(n,20,20,440,814,f,1.2)
C.fiD(n,0,0,1,1,g)
C.fiD(n,480,0,-1,1,g)
C.fiD(n,0,854,1,-1,g)
C.fiD(n,480,854,-1,-1,g)
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
B.kD(n,!0,A.d9,new B.qM(p),o,A.cW,1.2,240,r,60,q)}return n},
fgv(d,e,f,g,h){var w
C.fm5(d,!0,C.fy(g),13,e,f)
C.fm5(d,!0,C.fy(g),9,e,f)
w=B.a([new B.j9(e,f-4),new B.j9(e+4,f),new B.j9(e,f+4),new B.j9(e-4,f)],x.J)
B.a0S(d,C.fy(h),w)},
kB(d,e,f,g,h,i){var w=null,v=f-g,u=e+g,t=f+g,s=e-g,r=B.a([new B.j9(e,v),new B.j9(u,f),new B.j9(e,t),new B.j9(s,f)],x.J)
if(i){B.a0S(d,C.fy(h),r)
return}B.kD(d,!0,A.d9,C.fy(h),w,A.cW,1,e,u,v,f)
B.kD(d,!0,A.d9,C.fy(h),w,A.cW,1,u,e,f,t)
B.kD(d,!0,A.d9,C.fy(h),w,A.cW,1,e,s,t,f)
B.kD(d,!0,A.d9,C.fy(h),w,A.cW,1,s,e,f,v)},
f6M(d,e,f,g,h,i,j){var w,v=B.a([new B.j9(e,f),new B.j9(e+g*28,f),new B.j9(e,f+h*28)],x.J)
B.a0S(d,C.fy(i),v)
v=e+g*14
w=f+h*14
C.kB(d,v,w,6,j,!0)
C.kB(d,v,w,3,i,!0)},
f6N(d,e,f,g,h){var w=null,v=B.hl(w,w,A.c9,0,A.e_,854,w,0,3,w,A.c9,480,!1)
C.y2(v,d,e)
C.rz(v,d)
C.kp(v,18,18,444,818,f,2)
C.kp(v,26,26,428,802,f,0.9)
if(h!=null)B.iH(v,!0,C.fy(h),28,451,28,34)
C.f6M(v,18,18,1,1,g,f)
C.f6M(v,462,18,-1,1,g,f)
C.f6M(v,18,836,1,-1,g,f)
C.f6M(v,462,836,-1,-1,g,f)
return v},
hJQ(){var w,v=null,u=4294966259,t=4292128567,s=4287326484,r=B.hl(v,v,A.c9,0,A.e_,854,v,0,3,v,A.c9,480,!1)
C.y2(r,u,4294240980)
C.rz(r,u)
C.kp(r,10,12,460,830,t,3.2)
C.kp(r,18,20,444,814,s,1.2)
C.kp(r,24,26,432,802,t,1.8)
C.fSD(r,!0,!1,t,s,4279378237,38,10,12)
for(w=56;w<424;w+=18){C.kB(r,w,16,3,t,!0)
C.kB(r,w,838,3,t,!0)}for(w=56;w<798;w+=22){C.kB(r,16,w,3,t,!0)
C.kB(r,464,w,3,t,!0)}return r},
hJR(){var w,v,u,t=null,s=4294966776,r=4291404327,q=4282000405,p=B.hl(t,t,A.c9,0,A.e_,854,t,0,3,t,A.c9,480,!1)
C.y2(p,s,4294373080)
C.rz(p,s)
C.kp(p,16,18,448,818,r,2.4)
C.kp(p,24,26,432,802,4286209044,1)
w=new C.f93(p)
for(v=40;v<440;v+=16){w.$4(v,22,1,1)
w.$4(v,832,1,1)}for(u=44;u<810;u+=18){w.$4(22,u,1,1)
w.$4(458,u,-1,1)}C.fSD(p,!1,!0,r,q,q,34,16,18)
return p},
byg(d,e,f,g,h,i){B.iH(d,!0,C.fy(i),e,e+g,f,f+h)},
bz5(d,e,f,g,h,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
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
B.kD(d,!1,A.d9,new B.Rh(i),null,A.cW,1,e,w,l,l)}},
hKH(d,e,f,g,h,i){var w,v,u,t,s,r,q
if(i){w=e+g-1
v=0
for(;;){if(!(v<g&&f+v<854))break
u=h[A.o.G(A.o.an(v,5),6)]
t=f+v
s=Math.min(w,479)
r=new Uint8Array(4)
r[0]=u>>>16&255
r[1]=u>>>8&255
r[2]=u&255
r[3]=255
B.kD(d,!1,A.d9,new B.qM(r),null,A.cW,1,e,s,t,t);++v}return}w=f+g-1
q=0
for(;;){if(!(q<g&&e+q<480))break
u=h[A.o.G(A.o.an(q,5),6)]
t=e+q
s=Math.min(w,853)
r=new Uint8Array(4)
r[0]=u>>>16&255
r[1]=u>>>8&255
r[2]=u&255
r[3]=255
B.kD(d,!1,A.d9,new B.qM(r),null,A.cW,1,t,t,f,s);++q}},
hKI(d,e){var w,v,u=null,t=B.hl(u,u,A.c9,0,A.e_,854,u,0,3,u,A.c9,480,!1)
for(w=0;w<854;w+=30)for(v=0;v<480;v+=30)C.hKH(t,v,w,30,D.cNk,(A.o.an(v,30)+A.o.an(w,30)&1)===0)
C.byg(t,44,44,392,766,d)
C.bz5(t,44,44,392,766,d,e)
C.rz(t,d)
C.kp(t,44,44,392,766,4292128567,2.2)
C.kp(t,50,50,380,754,4279898632,0.8)
return t},
hLM(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=null
switch(A.o.G(g,4)){case 0:C.kB(d,e,f,7,h,!0)
C.kB(d,e,f,3,h,!1)
break
case 1:w=e-7
v=f-7
u=e+7
t=f+7
B.kD(d,!0,A.d9,C.fy(h),o,A.cW,1.6,w,u,v,t)
B.kD(d,!0,A.d9,C.fy(h),o,A.cW,1.6,u,w,v,t)
break
case 2:for(w=e-8,v=e+8,u=h>>>16&255,t=h>>>8&255,s=h&255,r=-2;r<=2;++r){q=f+r*3
p=new Uint8Array(4)
p[0]=u
p[1]=t
p[2]=s
p[3]=255
B.kD(d,!0,A.d9,new B.qM(p),o,A.cW,1.2,w,v,q,q)}break
default:B.kD(d,!0,A.d9,C.fy(h),o,A.cW,1.5,e-8,e+8,f,f)
B.kD(d,!0,A.d9,C.fy(h),o,A.cW,1.5,e,e,f-8,f+8)
B.kX(d,!0,A.d9,C.fy(h),o,A.cW,2,e,f)}},
hLN(d,e){var w,v,u,t,s=null,r=B.hl(s,s,A.c9,0,A.e_,854,s,0,3,s,A.c9,480,!1)
B.iH(r,!0,C.fy(4284103196),0,479,0,853)
for(w=0,v=18;v<854;v+=32)for(u=18;u<480;u+=32,w=t){t=w+1
C.hLM(r,u,v,w,4292391514)}C.byg(r,46,46,388,762,d)
C.bz5(r,46,46,388,762,d,e)
C.rz(r,d)
C.kp(r,46,46,388,762,4291404327,1.8)
return r},
h8_(d,e,f,g){C.fm5(d,!0,C.fy(g),16,e,f)
C.fm5(d,!0,C.fy(g),11,e,f)
C.kB(d,e,f,6,g,!0)
B.kD(d,!0,A.d9,C.fy(g),null,A.cW,1.3,e-14,e+14,f,f)
B.kD(d,!0,A.d9,C.fy(g),null,A.cW,1.3,e,e,f-14,f+14)},
hGI(d,e){var w,v=null,u=4283051028,t=4292128567,s=B.hl(v,v,A.c9,0,A.e_,854,v,0,3,v,A.c9,480,!1)
B.iH(s,!0,C.fy(4280948752),0,479,0,853)
B.iH(s,!0,C.fy(u),0,479,0,78)
B.iH(s,!0,C.fy(u),0,479,776,853)
for(w=28;w<460;w+=44){C.h8_(s,w,39,t)
C.h8_(s,w,815,t)}C.byg(s,38,92,404,670,d)
C.bz5(s,38,92,404,670,d,e)
C.rz(s,d)
C.kp(s,38,92,404,670,t,1.8)
C.kp(s,45,99,390,656,4287322667,0.8)
return s},
hLd(d,e,f,g){var w,v,u,t,s,r,q,p,o
for(w=f-4,v=x.J,u=g>>>16&255,t=g>>>8&255,s=g&255,r=-2;r<=2;++r){q=e+r*9
p=B.a([new B.j9(e,f),new B.j9(q-5,w),new B.j9(q,f-(18-Math.abs(r)*3)),new B.j9(q+5,w)],v)
o=new Uint8Array(4)
o[0]=u
o[1]=t
o[2]=s
o[3]=255
B.a0S(d,new B.qM(o),p)}B.kX(d,!0,A.d9,C.fy(4292128567),null,A.cW,3,e,f)},
hLe(d,e){var w,v,u,t,s=null,r=4279196764,q=B.hl(s,s,A.c9,0,A.e_,854,s,0,3,s,A.c9,480,!1)
C.y2(q,4278931279,4292330394)
for(w=8;w<=34;w+=4){v=new Uint8Array(4)
v[0]=8
v[1]=56
v[2]=56
v[3]=255
B.kD(q,!0,A.d9,new B.qM(v),s,A.cW,1.1,w,w,0,853)
v=479-w
u=new Uint8Array(4)
u[0]=8
u[1]=56
u[2]=56
u[3]=255
B.kD(q,!0,A.d9,new B.qM(u),s,A.cW,1.1,v,v,0,853)}B.iH(q,!0,C.fy(r),0,479,0,70)
B.iH(q,!0,C.fy(r),0,479,798,853)
for(t=0;t<5;++t)C.hLd(q,70+t*85,48,4292128567)
C.byg(q,48,78,384,712,d)
C.bz5(q,48,78,384,712,d,e)
C.rz(q,d)
C.kp(q,48,78,384,712,4291404327,1.6)
return q},
hPu(d,e){var w,v,u,t=null,s=4279970378,r=B.hl(t,t,A.c9,0,A.e_,854,t,0,3,t,A.c9,480,!1)
B.iH(r,!0,C.fy(s),0,479,0,853)
for(w=10;w<854;w+=18)for(v=10;v<480;v+=18){C.kB(r,v,w,6,4293449648,!1)
u=new Uint8Array(4)
u[0]=232
u[1]=215
u[2]=176
u[3]=255
B.kX(r,!0,A.d9,new B.qM(u),t,A.cW,1,v,w)}C.byg(r,40,40,400,774,d)
C.bz5(r,40,40,400,774,d,e)
C.rz(r,d)
C.kp(r,40,40,400,774,4291058750,2)
C.kp(r,48,48,384,758,s,0.8)
return r},
kL:function kL(d,e){this.a=d
this.b=e},
fvS:function fvS(d){this.a=d},
fvR:function fvR(d){this.a=d},
f93:function f93(d){this.a=d},
fwv(d){var w,v=d.a
A:{if("gazette"===v){w="The NGMY Gazette"
break A}if("chronicle"===v){w="The NGMY Chronicle"
break A}if("times"===v){w="The NGMY Times"
break A}if("daily"===v){w="The NGMY Daily"
break A}if("tabloid"===v){w="The Big NGMY"
break A}if("modern"===v){w="NGMY Digest"
break A}if("midnight"===v){w="The Midnight NGMY"
break A}w="The NGMY Herald"
break A}return w},
hLG(d){var w=d.length
if(w>3&&d[0]===137&&d[1]===80)return"image/png"
if(w>11&&d[8]===87&&d[9]===69)return"image/webp"
return"image/jpeg"},
fRe(d){var w,v,u,t=null,s=A.a.cJ(d,"{"),r=A.a.on(d,"}")
if(s<0||r<=s)return t
try{w=A.R.aH(0,Ai.afK(A.a.ap(d,s,r+1)),t)
v=x.f.b(w)?B.a1(w,x.N,x.z):t
return v}catch(u){return t}},
aef(d,e){var w=0,v=B.j(x.N),u,t,s,r,q,p,o,n
var $async$aef=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(B.v2(null,""),$async$aef)
case 3:n=g
if(A.a.i(n).length===0)throw B.U("AI is not available right now. Please try again later.")
t=B.mZ(n)
if(e==null)s=A.hk
else{r=C.hLG(e)
s=B.a([new B.a_6(A.cS.gcv().aJ(e),r)],x.aD)}q=null,p=0
case 4:if(!(p<2)){w=6
break}w=7
return B.b(B.qD(t,d,s,E.EG),$async$aef)
case 7:o=g
r=o.b
if(r!=null&&A.a.i(r).length!==0){u=r
w=1
break}q=o.a
case 5:++p
w=4
break
case 6:throw B.U(q!=null&&B.Km(q)?"No internet connection. Try again when you are online.":"The AI could not do that just now. Try again.")
case 1:return B.h(u,v)}})
return B.i($async$aef,v)},
bAK(d){return C.hYu(d)},
hYu(d){var w=0,v=B.j(x.b6),u,t=2,s=[],r,q,p,o,n,m
var $async$bAK=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
r='You are a professional Swahili newspaper editor and journalist: a native speaker from Tanzania or Kenya whose writing every Swahili reader finds natural, warm and correct.\nThe newspaper page below was written or translated by a machine, so it may sound stiff, foreign or word-for-word. Rewrite EVERY field so it reads as if a skilled native Swahili journalist wrote it first: natural, clear, correct and professional. Fix wrong grammar (noun classes, verb agreement, tenses), odd or invented words and any English sentence structure. Keep every fact, name and number and do not add facts. Keep the same fields and the same number of paragraphs. Write people\'s names with normal capitals, except KB PABLO QR.\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n\nPage: '+A.R.ao(d.ae(),null)+'\nReply with JSON only, with exactly the same fields: {"paper":"newspaper name","category":"ONE of COMMUNITY, TECHNOLOGY, BUSINESS, EDUCATION, WORLD NEWS, FEATURE","headline":"...","subhead":"...","byline":"By ...","caption":"one sentence about the picture","body":["paragraph 1","paragraph 2","paragraph 3","paragraph 4"],"pullQuote":"a short line from the story","sidebarTitle":"Did you know?","sidebarText":"two short sentences"}\n'
w=7
return B.b(C.aef(r,null),$async$bAK)
case 7:q=f
p=C.fRe(q)
if(p==null){u=d
w=1
break}o=d.aB_(p)
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
return B.i($async$bAK,v)},
hbT(d){var w,v=F.fTC(d)
v=B.aJ(v,"book","newspaper")
if(F.a1a(d)!=="sw"){w=B.af("swahili|kiswahili",!1,!1,!1,!1)
w=w.b.test(d)}else w=!0
w=w?'SWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n':""
return"- Write like a real newspaper: a strong headline (max 12 words), a subhead (max 25 words), a byline, then 4 or 5 paragraphs, about 330 to 400 words in all. Plain text only: no markdown, no emojis, no lists.\n- Use ONLY the facts in the knowledge above. Never invent numbers, prices, dates, awards, places or quotes. Do not put made-up words in anyone's mouth.\n- KB PABLO QR is the Founder, President and CEO of NGMY. Always write his name in capital letters.\n- Never mention secret or admin details, passwords or the price list.\n- STYLE: write like an experienced human newspaper journalist in the style of a quality wire service (Associated Press, Reuters): polished, precise, natural and professional. Open with the most important fact. Use the active voice, concrete nouns and strong verbs. Mix short and longer sentences. Plain, grown-up words.\n- NEVER sound like an AI. Do not use: delve, tapestry, testament, beacon, realm, landscape, journey, game-changer, groundbreaking, revolutionize, unlock, empower, seamless, vibrant, bustling, in today's fast-paced world, it is worth noting, not just X but Y, whether you are X or Y. No exclamation marks, no rhetorical questions, no lists of three adjectives, no filler, no hype, no dashes for drama. Every sentence must say something real.\n- Check spelling, grammar and punctuation. Names are written with normal capitals, except KB PABLO QR.\n"+v+w},
fAq(d,e,f,g){return C.i_l(d,e,f,g)},
i_l(d,e,f,g){var w=0,v=B.j(x.b6),u,t,s,r,q,p,o,n,m
var $async$fAq=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:o=C.fwv(g)
n=A.a.i(f)
if(n.length===0)n="Choose the most interesting true story about NGMY from what you know, and write it. Vary it: it can be about the app, the Civic Registry, the Advisors, the studios, or the CEO."
t=C.hfl()
s=e==null?"There is no picture yet: write the caption as a short line about the story.":"A PICTURE IS ATTACHED. Look at it. Mention what is really visible in the caption and weave it into the story. Do not say who the people in it are unless the owner told you."
m=C
w=3
return B.b(C.aef('You are the editor-in-chief of a newspaper called "'+o+'". Write its front-page story in the voice of '+g.at+".\n"+t+'\n\nWHAT THE OWNER ASKED FOR: """'+n+'"""\n'+s+"\nRules:\n"+C.hbT(n)+'\nReply with JSON only, in exactly this shape: {"paper":"newspaper name","category":"ONE of COMMUNITY, TECHNOLOGY, BUSINESS, EDUCATION, WORLD NEWS, FEATURE","headline":"...","subhead":"...","byline":"By ...","caption":"one sentence about the picture","body":["paragraph 1","paragraph 2","paragraph 3","paragraph 4"],"pullQuote":"a short line from the story","sidebarTitle":"Did you know?","sidebarText":"two short sentences"}\n',e),$async$fAq)
case 3:r=m.fRe(i)
if(r==null)throw B.U(y.S)
q=new C.z2(o,"NGMY NEWS","","","By the NGMY Newsroom","",A.T,"","","").aB_(r)
t=q.r
if(t.length===0)throw B.U("The AI did not write a story. Try again.")
s=n+" "+A.d.aI(t," ")
if(F.a1a(s)!=="sw"){p=B.af("swahili|kiswahili",!1,!1,!1,!1)
s=p.b.test(s)}else s=!0
u=s&&F.a1a(A.d.aI(t," "))==="sw"?C.bAK(q):q
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fAq,v)},
bAe(d,e,f,g,h){return C.hW6(d,e,f,g,h)},
hW6(d,e,f,g,h){var w=0,v=B.j(x.gX),u,t,s,r,q,p,o,n,m,l,k,j
var $async$bAe=B.e(function(i,a0){if(i===1)return B.f(a0,v)
for(;;)switch(w){case 0:l=B.a([],x.s)
k=e.length
k=k>6?A.d.fI(e,k-6):e
t=k.length
s=0
for(;s<k.length;k.length===t||(0,B.L)(k),++s){r=k[s]
l.push(r.a+": "+r.b)}q=A.d.aI(l,"\n")
l=C.hfl()
k=A.R.ao(d.ae(),null)
t=q.length===0?"":"EARLIER IN THIS CONVERSATION:\n"+q+"\n"
j=C
w=3
return B.b(C.aef('You are the editor-in-chief of the newspaper "'+d.a+'", written in the voice of '+h.at+". The owner is talking to you about the page below. They may ask a question about NGMY or the page (just answer it), or ask you to change, add, shorten, rewrite or fix something (change ONLY that).\n"+l+"\n\nTHE PAGE NOW: "+k+"\n"+t+'\nTHE OWNER SAYS: """'+f+'"""\nRules:\n'+C.hbT(f)+'\n- Keep every part they did not mention exactly as it is. Keep the story about 330 to 400 words unless they ask for another length.\nReply with JSON only: {"message":"one or two friendly sentences: your answer, or what you changed","changes":{ ...only the fields you change, using the same names as the page... }}. For a pure question leave "changes" empty.\n',g),$async$bAe)
case 3:p=j.fRe(a0)
if(p==null)throw B.U(y.S)
o=p.h(0,"changes")
if(x.f.b(o)&&J.cx(o)){n=d.aB_(B.a1(o,x.N,x.z))
m=A.R.ao(n.ae(),null)!==A.R.ao(d.ae(),null)}else{n=d
m=!1}w=m&&F.a1a(A.d.aI(n.r," "))==="sw"?4:5
break
case 4:w=6
return B.b(C.bAK(n),$async$bAe)
case 6:n=a0
case 5:l=p.h(0,"message")
if(l==null)l=m?"Done.":"Okay."
u=new C.a6Y(A.a.i(B.t(l)),n,m)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bAe,v)},
a6Y:function a6Y(d,e,f){this.a=d
this.b=e
this.c=f},
i22(d,e){return B.a5(d,!1).ce(B.ej(new C.fHf(e),!0,null,x.H))},
fHf:function fHf(d){this.a=d},
US:function US(d,e){this.c=d
this.a=e},
aCE:function aCE(d,e,f,g,h,i,j,k){var _=this
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
ecT:function ecT(d){this.a=d},
ecS:function ecS(){},
ecU:function ecU(d){this.a=d},
ecR:function ecR(d,e){this.a=d
this.b=e},
ecV:function ecV(){},
ecv:function ecv(d,e){this.a=d
this.b=e},
ecr:function ecr(d,e){this.a=d
this.b=e},
ecC:function ecC(d){this.a=d},
ecD:function ecD(d,e){this.a=d
this.b=e},
ecE:function ecE(d){this.a=d},
ecx:function ecx(d,e){this.a=d
this.b=e},
ecy:function ecy(d,e){this.a=d
this.b=e},
ecz:function ecz(d,e){this.a=d
this.b=e},
ecA:function ecA(d){this.a=d},
ecB:function ecB(d){this.a=d},
ecw:function ecw(d,e){this.a=d
this.b=e},
ect:function ect(d){this.a=d},
ecu:function ecu(d){this.a=d},
ecK:function ecK(d){this.a=d},
ecL:function ecL(d){this.a=d},
ecJ:function ecJ(d){this.a=d},
ecM:function ecM(d,e){this.a=d
this.b=e},
ecI:function ecI(d,e){this.a=d
this.b=e},
ecN:function ecN(d){this.a=d},
ecH:function ecH(d){this.a=d},
ecO:function ecO(d){this.a=d},
ecG:function ecG(d){this.a=d},
ecP:function ecP(d,e){this.a=d
this.b=e},
ecF:function ecF(d,e){this.a=d
this.b=e},
ecQ:function ecQ(d){this.a=d},
ecs:function ecs(d,e){this.a=d
this.b=e},
fvr(){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o
var $async$fvr=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if($.h9t){w=1
break}r=new C.fvs()
t=4
q=x.s
w=7
return B.b(B.iJ(B.a([r.$2("NgmyBlackletter",B.a(["UnifrakturCook-Bold.ttf"],q)),r.$2("NgmyOldStandard",B.a(["OldStandard-Regular.ttf","OldStandard-Bold.ttf","OldStandard-Italic.ttf"],q)),r.$2("NgmyAbril",B.a(["AbrilFatface-Regular.ttf"],q))],x.fG),x.H),$async$fvr)
case 7:$.h9t=!0
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
return B.i($async$fvr,v)},
bAB(d){return A.Gv[B.mq(d)-1]+", "+A.oH[B.bG(d)-1]+" "+B.bQ(d)+", "+B.by(d)},
hOA(d){var w,v,u,t,s
for(w="",v=0;v<13;++v){u=D.daK[v]
t=u.a
s=u.b
while(d>=t){w+=s
d-=t}}return w},
fU0(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j={},i=x.s,h=B.a([],i)
for(w=0;w<d.length;++w){v=A.a.fw(d[w],B.af("[ \\t]+",!0,!1,!1,!1))
A.d.v(h,new B.a2(v,new C.ftK(),B.T(v).k("a2<1>")))
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
continue}o=new C.ftM(j,h)
n=new C.ftL(s,o,e)
m=p-v
for(l=0;l<m;){k=A.o.an(l+m+1,2)
if(n.$1(k))l=k
else m=k-1}u.push(l===0?"":J.iS(o.$1(l)))
j.a+=l}return u},
fQZ(d,e){var w=new C.f8F()
return A.d.cI(e,0,new C.f8D(w))>=A.d.cI(d,0,new C.f8E(w))},
h6F(d){var w,v,u=new B.aQ($.X().r,A.ap,null,null,B.a([],x.v))
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
z2:function z2(d,e,f,g,h,i,j,k,l,m){var _=this
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
cal:function cal(d){this.a=d},
caj:function caj(){},
cak:function cak(){},
t1:function t1(d,e){this.a=d
this.b=e},
AX:function AX(d,e){this.a=d
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
fvs:function fvs(){},
ftK:function ftK(){},
ftM:function ftM(d,e){this.a=d
this.b=e},
ftL:function ftL(d,e,f){this.a=d
this.b=e
this.c=f},
f8F:function f8F(){},
f8G:function f8G(){},
f8D:function f8D(d){this.a=d},
f8E:function f8E(d){this.a=d},
b_c:function b_c(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cam:function cam(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
can:function can(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
cao:function cao(d){this.a=d},
baG:function baG(d){this.a=d},
baF:function baF(d,e){this.b=d
this.a=e},
bs6:function bs6(d){this.a=d},
b7c:function b7c(d,e){this.b=d
this.a=e},
bpD:function bpD(d,e){this.b=d
this.a=e},
hhf(d,e){return B.a5(d,!1).ce(B.ej(new C.fHi(e,null),!0,null,x.E))},
fHi:function fHi(d,e){this.a=d
this.b=e},
UV:function UV(d,e,f){this.c=d
this.d=e
this.a=f},
aCI:function aCI(){var _=this
_.d=null
_.e=0
_.f=1
_.w=_.r=0.5
_.x=1
_.y=!1
_.c=_.a=null},
ee3:function ee3(){},
ee4:function ee4(d){this.a=d},
ee2:function ee2(d,e){this.a=d
this.b=e},
edR:function edR(d){this.a=d},
edS:function edS(d){this.a=d},
edY:function edY(d){this.a=d},
edZ:function edZ(d,e){this.a=d
this.b=e},
edW:function edW(d){this.a=d},
edX:function edX(d,e,f){this.a=d
this.b=e
this.c=f},
edT:function edT(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ee_:function ee_(d,e){this.a=d
this.b=e},
edV:function edV(d,e){this.a=d
this.b=e},
ee0:function ee0(d){this.a=d},
edU:function edU(d,e){this.a=d
this.b=e},
ee1:function ee1(d,e){this.a=d
this.b=e},
bac:function bac(d,e,f){this.b=d
this.c=e
this.a=f},
i28(d){return B.a5(d,!1).ce(B.ej(new C.fHy(),!0,null,x.I))},
by1(d,e){var w,v,u,t,s,r,q=B.c2(20,0,!1,x.gR)
for(w=0;w<4;++w)for(v=w*5,u=v+4,t=0;t<5;++t){for(s=0,r=0;r<4;++r)s+=d[v+r]*e[r*5+t]
if(t===4)s+=d[u]
q[v+t]=s}return q},
fSm(d,e,f,g){return B.a([d,0,0,0,e,0,d,0,0,f,0,0,d,0,g,0,0,0,1,0],x.x)},
fHy:function fHy(){},
a__:function a__(d){this.a=d},
om:function om(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
aE4:function aE4(d,e,f,g,h,i,j,k,l){var _=this
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
_.ba=null
_.bJ=0.5
_.aR=1
_.c6=_.bS=_.bj=0
_.cW=_.cT=!1
_.c=_.a=null},
eNi:function eNi(d){this.a=d},
eMa:function eMa(d,e){this.a=d
this.b=e},
eMy:function eMy(d,e){this.a=d
this.b=e},
eMI:function eMI(d){this.a=d},
eLU:function eLU(d){this.a=d},
eLV:function eLV(d){this.a=d},
eLS:function eLS(d){this.a=d},
eLT:function eLT(d){this.a=d},
eMr:function eMr(d,e){this.a=d
this.b=e},
eMs:function eMs(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eME:function eME(d,e,f){this.a=d
this.b=e
this.c=f},
eMD:function eMD(d,e){this.a=d
this.b=e},
eMF:function eMF(d,e){this.a=d
this.b=e},
eMC:function eMC(d,e){this.a=d
this.b=e},
eMH:function eMH(d,e,f){this.a=d
this.b=e
this.c=f},
eMG:function eMG(d,e){this.a=d
this.b=e},
eLK:function eLK(d){this.a=d},
eLL:function eLL(d){this.a=d},
eLM:function eLM(d){this.a=d},
eLJ:function eLJ(){},
eLN:function eLN(d,e){this.a=d
this.b=e},
eLI:function eLI(d,e){this.a=d
this.b=e},
eLP:function eLP(){},
eLO:function eLO(d,e){this.a=d
this.b=e},
eLH:function eLH(d,e){this.a=d
this.b=e},
eLE:function eLE(d,e){this.a=d
this.b=e},
eLQ:function eLQ(d){this.a=d},
eLG:function eLG(d,e){this.a=d
this.b=e},
eLR:function eLR(d){this.a=d},
eLF:function eLF(d,e){this.a=d
this.b=e},
eN7:function eN7(d,e){this.a=d
this.b=e},
eNe:function eNe(d){this.a=d},
eNf:function eNf(d,e){this.a=d
this.b=e},
eNg:function eNg(){},
eN8:function eN8(d,e){this.a=d
this.b=e},
eN6:function eN6(d,e){this.a=d
this.b=e},
eN9:function eN9(d,e){this.a=d
this.b=e},
eN5:function eN5(d,e){this.a=d
this.b=e},
eNa:function eNa(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eN4:function eN4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eNb:function eNb(d){this.a=d},
eNc:function eNc(d,e){this.a=d
this.b=e},
eNd:function eNd(d){this.a=d},
eN3:function eN3(d){this.a=d},
eMR:function eMR(d){this.a=d},
eMS:function eMS(d){this.a=d},
eMQ:function eMQ(d,e){this.a=d
this.b=e},
eML:function eML(d,e){this.a=d
this.b=e},
eMT:function eMT(d){this.a=d},
eMW:function eMW(d){this.a=d},
eMP:function eMP(d){this.a=d},
eMX:function eMX(d){this.a=d},
eMY:function eMY(d){this.a=d},
eMZ:function eMZ(d){this.a=d},
eN_:function eN_(d){this.a=d},
eMO:function eMO(d){this.a=d},
eN0:function eN0(d){this.a=d},
eMN:function eMN(d){this.a=d},
eN1:function eN1(d,e){this.a=d
this.b=e},
eMM:function eMM(d,e){this.a=d
this.b=e},
eN2:function eN2(d){this.a=d},
eMU:function eMU(d){this.a=d},
eMV:function eMV(d){this.a=d},
eMv:function eMv(d){this.a=d},
eMu:function eMu(d){this.a=d},
eMw:function eMw(d,e){this.a=d
this.b=e},
eMt:function eMt(d,e){this.a=d
this.b=e},
eMx:function eMx(d){this.a=d},
eMn:function eMn(d){this.a=d},
eMm:function eMm(d){this.a=d},
eMo:function eMo(d){this.a=d},
eMl:function eMl(d){this.a=d},
eMp:function eMp(d,e){this.a=d
this.b=e},
eMk:function eMk(d,e){this.a=d
this.b=e},
eMj:function eMj(d,e){this.a=d
this.b=e},
eM1:function eM1(d){this.a=d},
eM2:function eM2(d){this.a=d},
eM3:function eM3(d){this.a=d},
eM4:function eM4(d){this.a=d},
eM5:function eM5(d){this.a=d},
eM6:function eM6(d){this.a=d},
eM7:function eM7(d){this.a=d},
eM8:function eM8(d){this.a=d},
eM9:function eM9(d){this.a=d},
eLn:function eLn(d){this.a=d},
eLo:function eLo(d){this.a=d},
eLp:function eLp(d){this.a=d},
eLq:function eLq(d){this.a=d},
eLr:function eLr(d){this.a=d},
eLm:function eLm(d){this.a=d},
eLs:function eLs(d){this.a=d},
eLt:function eLt(d){this.a=d},
eLW:function eLW(d){this.a=d},
eLX:function eLX(d){this.a=d},
eLY:function eLY(d){this.a=d},
eLZ:function eLZ(d){this.a=d},
eM_:function eM_(d){this.a=d},
eLx:function eLx(d){this.a=d},
eLy:function eLy(d){this.a=d},
eLz:function eLz(d){this.a=d},
eLA:function eLA(d){this.a=d},
eLB:function eLB(d){this.a=d},
eLw:function eLw(d){this.a=d},
eLC:function eLC(d){this.a=d},
eLv:function eLv(d){this.a=d},
eLD:function eLD(d){this.a=d},
eLu:function eLu(d){this.a=d},
eMq:function eMq(d){this.a=d},
eMi:function eMi(d){this.a=d},
eMe:function eMe(d){this.a=d},
eMd:function eMd(d){this.a=d},
eMf:function eMf(d,e){this.a=d
this.b=e},
eMc:function eMc(d,e){this.a=d
this.b=e},
eMg:function eMg(d,e){this.a=d
this.b=e},
eMb:function eMb(d,e){this.a=d
this.b=e},
eMh:function eMh(d){this.a=d},
eMB:function eMB(d){this.a=d},
eMA:function eMA(d,e,f){this.a=d
this.b=e
this.c=f},
eMz:function eMz(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eMK:function eMK(d,e){this.a=d
this.b=e},
eMJ:function eMJ(d,e){this.a=d
this.b=e},
eM0:function eM0(d){this.a=d},
eNh:function eNh(d){this.a=d},
bdJ:function bdJ(d,e){this.b=d
this.a=e},
hYF(d){var w=A.a.i(d).length
if(w<=40)return 66
if(w<=80)return 54
if(w<=140)return 44
if(w<=220)return 36
return 30},
hYG(d,e){var w,v,u,t,s,r,q,p,o,n=B.af("\\S+",!0,!1,!1,!1).kP(0,d),m=B.B(n,B.a3(n).k("H.E"))
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
v=t.index+t[0].length}n=w.a=n+A.a.b0(d,v)
return n.charCodeAt(0)==0?n:n},
byC(){var w=$.bxK,v=$.PB
$.PB=v+1
return w+"_"+v},
i6(d,e,f,g,h,i,j){return C.en(A.bg,!1,4279310375,A.aC,"",i,24,A.bk,A.a4,"",h,C.byC(),null,"","",0,!1,"",j,d,i,0,"",0,0,"",D.cg,D.f_,g,e,f)},
nN(d,e,f,g){var w=f*9
return C.i6(D.eI,d-f/2,e-w/32,f,w/16,g,0)},
hIm(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=4279310375
switch(d.a){case 0:w=B.a([],x.u)
for(v=[0.12,0.26,0.4,0.54,0.68,0.82,0.94],u=e&16777215,t=u|855638016,s=0;s<7;++s){r=v[s]
q=$.bxK
p=$.PB
$.PB=p+1
w.push(new C.eG(q+"_"+p,D.f_,0,r,1,0.0016,"",24,A.a4,A.bk,A.aC,k,A.bg,null,D.be,t,t,0,0,!1,"",0,D.cg,0,"","","","","",!1,0))}for(v=[0.18,0.5,0.82],t=u|570425344,s=0;s<3;++s){o=v[s]
q=$.bxK
p=$.PB
$.PB=p+1
w.push(new C.eG(q+"_"+p,D.f_,o,0,0.004,1,"",24,A.a4,A.bk,A.aC,k,A.bg,null,D.be,t,t,0,0,!1,"",0,D.cg,0,"","","","","",!1,0))}w.push(C.nN(0.88,0.1,0.5,f&16777215|855638016))
w.push(C.nN(0.1,0.92,0.6,u|704643072))
return w
case 1:w=e&16777215
v=(w|2852126720)>>>0
u=f&16777215
t=(u|2852126720)>>>0
return B.a([C.i6(D.be,0.08,0.08,0.5,0.003,v,0),C.i6(D.be,0.58,0.08,0.004,0.06,v,0),C.i6(D.be,0.58,0.14,0.34,0.003,v,0),C.i6(D.be,0.92,0.14,0.004,0.08,(w|2281701376)>>>0,0),C.i6(D.be,0.08,0.8,0.004,0.14,t,0),C.i6(D.be,0.08,0.94,0.6,0.003,t,0),C.nN(0.58,0.08,0.05,e),C.nN(0.92,0.22,0.05,e),C.nN(0.08,0.8,0.05,f),C.nN(0.68,0.94,0.05,f),C.nN(0.9,0.9,0.55,u|570425344)],x.u)
case 2:w=e&16777215
v=f&16777215
return B.a([C.i6(D.kQ,0.62,0.04,0.34,0.2,w|855638016,0.2),C.i6(D.kQ,0.02,0.74,0.42,0.24,v|771751936,-0.15),C.i6(D.kQ,0.7,0.8,0.22,0.12,w|1140850688,0),C.i6(D.kQ,0.05,0.05,0.16,0.09,v|1426063360,0)],x.u)
case 3:w=e&16777215
v=f&16777215
return B.a([C.nN(0.5,0.5,1.5,w|335544320),C.nN(0.5,0.5,1.15,w|402653184),C.nN(0.5,0.5,0.8,v|436207616),C.nN(0.95,0.05,0.4,v|855638016),C.nN(0.05,0.97,0.5,w|704643072)],x.u)
case 4:w=e&16777215
v=f&16777215
return B.a([C.nN(0.85,0.08,0.7,w|1140850688),C.nN(0.1,0.35,0.5,v|855638016),C.nN(0.9,0.62,0.55,v|771751936),C.nN(0.15,0.95,0.8,w|939524096)],x.u)
case 5:w=e&16777215
v=f&16777215
return B.a([C.i6(D.be,-0.1,0.7,1.2,0.06,w|671088640,-0.04),C.i6(D.be,-0.1,0.78,1.2,0.07,v|872415232,0.035),C.i6(D.be,-0.1,0.86,1.2,0.08,w|1073741824,-0.03),C.i6(D.be,-0.1,0.94,1.2,0.1,v|1426063360,0.02),C.nN(0.85,0.12,0.3,v|855638016)],x.u)
case 6:w=e&16777215
return B.a([C.nN(0.5,0.2,0.65,(w|3422552064)>>>0),C.nN(0.5,0.2,0.95,w|855638016),C.i6(D.be,-0.05,0.84,1.1,0.2,2570782564,-0.02),C.i6(D.be,-0.05,0.9,1.1,0.14,3139312459,0.02)],x.u)
case 7:w=e&16777215
return B.a([C.i6(D.jy,-0.1,0.78,0.7,0.2,w|1426063360,0),C.i6(D.jy,0.35,0.74,0.8,0.24,f&16777215|1711276032,0),C.i6(D.jy,0.15,0.86,0.6,0.14,1712265002,0),C.nN(0.82,0.1,0.22,(w|2852126720)>>>0)],x.u)
case 8:w=B.a([],x.u)
for(n=0;n<16;++n){v=D.cOE[n]
u=A.o.G(n,3)===0
t=u?0.035:0.02
q=(n&1)===0?e:f
q=((u?255:170)<<24|q&16777215)>>>0
p=t*9
m=$.bxK
l=$.PB
$.PB=l+1
w.push(new C.eG(m+"_"+l,D.f_,v.a-t/2,v.b-p/32,t,p/16,"",24,A.a4,A.bk,A.aC,k,A.bg,null,D.eI,q,q,0,0,!1,"",0,D.cg,0,"","","","","",!1,0))}w.push(C.nN(0.85,0.12,0.35,f&16777215|570425344))
return w
case 9:w=e&16777215
v=f&16777215|570425344
return B.a([C.i6(D.jy,0.35,-0.1,0.3,0.62,w|855638016,0),C.i6(D.jy,0.05,-0.1,0.3,0.55,v,-0.5),C.i6(D.jy,0.65,-0.1,0.3,0.55,v,0.5),C.nN(0.5,0.04,0.45,w|1711276032)],x.u)
case 10:w=(f&16777215|2281701376)>>>0
return B.a([C.i6(D.be,0.06,0.04,0.88,0.002,e,0),C.i6(D.be,0.06,0.96,0.88,0.002,e,0),C.i6(D.be,0.06,0.04,0.004,0.92,e,0),C.i6(D.be,0.936,0.04,0.004,0.92,e,0),C.i6(D.be,0.09,0.07,0.82,0.001,w,0),C.i6(D.be,0.09,0.93,0.82,0.001,w,0)],x.u)
case 11:w=e&16777215
return B.a([C.i6(D.jz,-0.1,0.05,0.7,0.12,w|855638016,-0.1),C.i6(D.jz,0.45,0.78,0.7,0.1,f&16777215|1073741824,-0.1),C.i6(D.jz,-0.1,0.9,0.6,0.06,w|1426063360,-0.1)],x.u)
case 12:w=f&16777215
v=e&16777215
return B.a([C.i6(D.be,0,0,0.3,0.09,w|1140850688,0),C.i6(D.be,0.7,0.9,0.3,0.1,v|1426063360,0),C.i6(D.be,0.82,0.04,0.12,0.07,w|771751936,0),C.i6(D.be,0.04,0.82,0.18,0.08,v|855638016,0)],x.u)
case 13:w=e&16777215
v=w|1140850688
u=f&16777215|1140850688
return B.a([C.i6(D.eI,0.62,0.02,0.5,0.16,v,0.6),C.i6(D.eI,0.78,0.12,0.4,0.12,u,0.9),C.i6(D.eI,-0.12,0.8,0.5,0.16,u,-0.6),C.i6(D.eI,-0.05,0.9,0.4,0.12,v,-0.9),C.nN(0.9,0.9,0.3,w|855638016)],x.u)
case 14:w=f&16777215|1711276032
return B.a([C.i6(D.be,0.09,0.12,0.16,0.006,e,0),C.i6(D.be,0.05,0.03,0.9,0.001,w,0),C.i6(D.be,0.05,0.97,0.9,0.001,w,0)],x.u)}},
hVa(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3){var w,v,u,t,s,r,q,p,o,n=4279310375,m=4280640491,l=4280172719
$.bxK=j
$.PB=0
w=A.a.i(a6)
if(w.length===0)w=d.y
v=A.a.i(f)
u=b1==null?d.x:b1
t=new C.fr8()
s=b3?0:d.e
r=b3?0:d.f
q=B.a([],x.u)
if(g!=null&&g.length!==0)q.push(C.en(A.bg,!1,n,A.aC,"ngmy_quote_background",m,24,A.bk,A.a4,"",1,C.byC(),g,"","",0,!1,"",0,D.be,l,2,"",0,0,"",D.cg,D.lh,1,0,0))
if(a9)A.d.v(q,C.hIm(d.d,d.r,d.w))
if(a7)q.push(t.$9$align$weight("\u201c",0.08,A.k.D(a8-0.13,0,1),0.84,0.1,200,d.r,e,A.u))
p=B.af("[*~^]",!0,!1,!1,!1)
p=C.hYF(B.aJ(w,p,""))
o=A.a.t(w,B.af("[*^]",!0,!1,!1,!1))?0.85:1
q.push(new C.fr7(a8,h,k,e,b2,i).$3(w,p*b0*o,u))
if(v.length!==0)q.push(t.$10$align$style$weight("\u2014 "+v,0.09,A.k.D(a8+0.39,0,0.9),0.82,0.05,30,(u&16777215|3707764736)>>>0,e,A.cD,A.a4))
p=u&16777215
q.push(t.$8$weight("NGMY",0.3,0.925,0.4,0.028,22,(p|3003121664)>>>0,A.u))
q.push(t.$8$weight("New Global Movement for Youth",0.1,0.96,0.8,0.025,14,(p|2566914048)>>>0,A.a4))
if(a0!=null&&a0.length!==0)q.push(C.en(A.bg,!1,n,A.aC,"ngmy_quote_logo",m,24,A.bk,A.a4,a1,a3*9/16,C.byC(),a0,"","",0,!1,a2,0,D.be,l,2,"",0,0,"",D.cg,D.lh,a3,a4,a5))
return C.rf(s,r,0,0,q,j+"_slide",D.pS,"","","",D.dd)},
re:function re(d,e){this.a=d
this.b=e},
lX:function lX(d,e,f,g,h,i,j,k,l,m){var _=this
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
fr8:function fr8(){},
fr7:function fr7(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
hyu(d){var w,v,u,t,s
if(!x.f.b(d))return null
w=J.a8(d)
v=B.bi(B.t(w.h(d,"at")))
u=w.h(d,"outline")
t=B.t(u==null?"":u)
if(v==null||t.length===0)return null
u=x.j
if(u.b(w.h(d,"extras"))){u=J.b6(u.a(w.h(d,"extras")),new C.cbI(),x.N)
s=B.B(u,u.$ti.k("ai.E"))}else s=B.a([],x.s)
u=v.bR()
w=w.h(d,"request")
return new C.z4(u,t,s,B.t(w==null?"":w))},
fyO(){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$fyO=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if($.h9R){w=1
break}$.h9R=!0
t=4
w=7
return B.b(B.aA(),$async$fyO)
case 7:r=e
q=B.aU(J.q(r.a,"ngmy_slides_ai_history_v1"))
if(q==null||q.length===0){w=1
break}p=A.R.aH(0,q,null)
if(!x.f.b(p)){w=1
break}for(k=J.jr(p),k=k.gag(k),j=x.j,i=x.o;k.C();){o=k.gU(k)
n=B.a([],i)
if(j.b(o.b))for(h=J.aX(j.a(o.b));h.C();){m=h.gU(h)
l=C.hyu(m)
if(l!=null)J.cf(n,l)}$.Ca.ci(0,B.t(o.a),new C.fyP(n))}C.fS2()
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
return B.i($async$fyO,v)},
fS2(){var w,v=new B.S(Date.now(),0,!1).bN(-12e8)
for(w=new B.dt($.Ca,$.Ca.r,$.Ca.e);w.C();)J.ni(w.d,new C.ffI(v))
$.Ca.bn($.Ca,new C.ffJ())},
aMC(){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$aMC=B.e(function(d,a0){if(d===1){t.push(a0)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.aA(),$async$aMC)
case 6:s=a0
m=x.N
l=x.z
r=B.V(m,l)
for(k=new B.cJ($.Ca,B.a3($.Ca).k("cJ<1,2>")).gag(0),j=x.d;k.C();){i=k.d
i.toString
q=i
i=q.a
p=B.a([],j)
for(h=J.aX(q.b);h.C();){o=h.gU(h)
g=o
J.cf(p,B.E(["at",g.a.a5().ac(),"outline",g.b,"extras",g.c,"request",g.d],m,l))}J.aG(r,i,p)}n=r
w=7
return B.b(s.ar("String","ngmy_slides_ai_history_v1",A.R.ao(n,null)),$async$aMC)
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
return B.i($async$aMC,v)},
hZg(d,e,f,g){var w,v,u
if(d.length===0||A.a.i(f).length===0)return
C.fS2()
w=$.Ca.ci(0,d,new C.fyR())
v=Date.now()
u=B.B(e,B.a3(e).k("cl.E"))
J.pl(w,0,new C.z4(new B.S(v,0,!1),f,u,g))
C.aMC()},
hZd(d){var w,v=$.Ca.h(0,d)
if(v==null||J.ck(v))return
w=J.cE(v)
w.cA(v,0)
if(w.gam(v))$.Ca.W(0,d)
C.aMC()},
z4:function z4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cbI:function cbI(){},
fyP:function fyP(d){this.a=d},
ffI:function ffI(d){this.a=d},
ffJ:function ffJ(){},
fyR:function fyR(){},
hZi(d){return A.d.dM(D.vC,new C.fyU(d),new C.fyV())},
hys(d){var w
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
hyr(d){var w
switch(d.a){case 0:w=D.ajy
break
case 1:w=A.xV
break
case 2:w=A.akG
break
case 3:w=I.ajb
break
case 4:w=A.ak3
break
case 5:w=A.lF
break
default:w=null}return w},
hLj(d){var w,v,u,t=A.a.i(d).toLowerCase()
if(t.length===0)return null
for(w=0;w<109;++w){v=D.P5[w]
if(v.toLowerCase()===t)return v}for(w=0;w<109;++w){v=D.P5[w]
if(!B.dr(v.toLowerCase(),t,0))u=B.dr(t,v.toLowerCase(),0)
else u=!0
if(u)return v}return null},
hyt(d){var w,v,u,t,s,r,q,p,o=B.a([],x.ez)
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
o.push(q)}return A.R.ao(B.E(["title",d.a,"style",d.b,"logo_frame",d.d,"logo_ring",d.e,"photo_frame",d.f,"photo_ring",d.r,"slides",o],u,t),null)},
hZe(d,e,f,g,h){var w=new B.K(D.vC,new C.fyN(),x.eC).aI(0,", "),v=""+d,u=C.hfd(h),t=F.fsx(h),s=C.hbt(g),r=e.t(0,D.Hq)?'- New slides get an "emoji".\n':"",q=e.t(0,D.Hr)?'- New slides get an "icon3d" from: '+A.d.aI(D.P5,", ")+".\n":"",p=e.t(0,D.Cb)?'- New content slides get an "image_query" (2-3 English words).\n':""
return"You edit an existing presentation. Here it is as JSON:\n"+f+"\n\nThe presenter is looking at slide "+v+'.\n\nWHAT THEY WANT CHANGED (may be informal):\n"""'+h+'"""\n\nRules:\n- Do exactly what they ask: add, remove, move, shorten, lengthen or rewrite slides, change the tone, the language or the style ('+w+'). "This slide" / "here" means slide '+v+". New slides go where they say (or right after slide "+v+').\n- Keep every slide they did not ask about exactly as it is.\n- Same limits as before: titles max 7 words, 3 to 5 bullets of max 12 words, never invent prices, dates or statistics.\n- LANGUAGE: keep the presentation\'s current language unless they ask for another one; if they do, translate EVERY slide. JSON keys and the "kind", "style", "icon3d" and "image_query" values stay in English.\n- TRANSLATING OR REWORDING: change only the words. Keep "style", "kind", "emoji", "icon3d", "image_query", "picture" and the frame/ring values exactly as they are, with the same number of slides and bullets.\n- VOICE: write the way a real, friendly person talks and writes to someone they respect. Short plain sentences. Everyday words that people really use today. No corporate or robotic phrasing ("leverage", "synergy", "empower the ecosystem", "in today\'s dynamic landscape"), no made-up or rare words, no stacked jargon, no lecture tone. Explain the Civic registry, the AI, and any other topic the way you would explain it to a neighbour. If the language is Swahili, use the Swahili people speak and write every day in Kenya and Tanzania: real common words, natural word order, and never an English word forced into Swahili grammar or an invented Swahili word. Check that each word is one an ordinary speaker would understand.\n'+u+"\n"+t+'\n- Keep "logo_frame", "logo_ring", "photo_frame" and "photo_ring" unless they ask to change how the logo or pictures look.\n- PICTURE LOOK: "logo_frame" and "photo_frame" are one of: circle, rounded, triangle, hexagon, diamond, arch, or "" (as is). "logo_ring" and "photo_ring" are one of: gold, platinum, glow, rainbow, double, neon, framed, rosegold, jewels, aurora, or "" (none). Follow what the request says (e.g. "my picture in a circle with a gold ring"); if it says nothing, choose what suits the look (luxury \u2192 gold, neon/night \u2192 neon, clean \u2192 rounded with no ring).\n- BIO LINK: if they ask to put their bio link / link page / socials / "my links" in the presentation, add ONE slide with kind "bio" (title like "Connect with me", a one-line inviting subtitle) \u2014 usually just before the closing slide, or where they say. Their real Bio page (with clickable links) is shown on a phone on that slide.\n'+s+"\n"+r+q+p+'- Reply with the WHOLE presentation as JSON only, no markdown, same shape:\n{"title":"...","style":"...","logo_frame":"","logo_ring":"","photo_frame":"","photo_ring":"","slides":[{"kind":"...","title":"...","subtitle":"...","bullets":[],"notes":"...","emoji":"","icon3d":"","image_query":""}]}\n'},
hZf(d,e,f,g,h,i){var w,v,u,t,s='- "emoji": ONE emoji that fits the slide (e.g. \ud83c\udf89 \ud83d\ude80 \ud83c\udf3f \ud83d\udca1).\n',r=f?"- A document is attached (read it all). Rewrite its content as the slides in the same language: keep its facts, names, numbers, dates and the order of its sections, and never invent facts it does not contain.\n":"",q=new B.K(D.vC,new C.fyQ(),x.eC).aI(0,", "),p=new B.fc("")
if(e.t(0,D.Hq)){p.a=s
w=s}else w=""
if(e.t(0,D.Hr))w=p.a=w+('- "icon3d": ONE name copied exactly from this list that fits the slide: '+A.d.aI(D.P5,", ")+".\n")
if(e.t(0,D.Cb))p.a=w+'- "image_query": 2-3 simple English words for a real photo that fits the slide (e.g. "city skyline", "students classroom").\n'
w=C.hfd(d)
v=F.fsx(d)
u=C.hbt(g)
t=i==="auto"?"pick the best of: "+q+" (match the mood they describe: nature, vibe, celebration, colorful, professional...)":'use "'+i+'"'
return'You design presentation slides. Write a presentation from the user\'s request.\n\nUSER REQUEST (spoken, may be informal):\n"""'+d+'"""\n\nRules:\n'+r+"- Exactly "+h+' slides.\n- Slide 1 has kind "title". The last slide has kind "closing" (thank-you / call to action).\n- Middle slides mostly kind "bullets" (3 to 5 short bullets, max 12 words each). You may use one "section" divider and one "quote" slide when it fits.\n- Titles are short and punchy (max 7 words). Use the user\'s own names, facts and details; never invent prices, dates or statistics they did not give.\n- "notes": 1-2 sentences the presenter can say.\n- LANGUAGE: if the request names a language (e.g. "in Swahili", "en fran\xe7ais", "en espa\xf1ol", "in Arabic"), write EVERY title, subtitle, bullet and note in that language, with correct spelling and accents. If no language is named, write in the language the request itself is written in. Keep the JSON keys and the "kind", "style", "icon3d" and "image_query" values in English.\n- VOICE: write the way a real, friendly person talks and writes to someone they respect. Short plain sentences. Everyday words that people really use today. No corporate or robotic phrasing ("leverage", "synergy", "empower the ecosystem", "in today\'s dynamic landscape"), no made-up or rare words, no stacked jargon, no lecture tone. Explain the Civic registry, the AI, and any other topic the way you would explain it to a neighbour. If the language is Swahili, use the Swahili people speak and write every day in Kenya and Tanzania: real common words, natural word order, and never an English word forced into Swahili grammar or an invented Swahili word. Check that each word is one an ordinary speaker would understand.\n'+w+"\n"+v+'\n- PICTURE LOOK: "logo_frame" and "photo_frame" are one of: circle, rounded, triangle, hexagon, diamond, arch, or "" (as is). "logo_ring" and "photo_ring" are one of: gold, platinum, glow, rainbow, double, neon, framed, rosegold, jewels, aurora, or "" (none). Follow what the request says (e.g. "my picture in a circle with a gold ring"); if it says nothing, choose what suits the look (luxury \u2192 gold, neon/night \u2192 neon, clean \u2192 rounded with no ring).\n- BIO LINK: if they ask to put their bio link / link page / socials / "my links" in the presentation, add ONE slide with kind "bio" (title like "Connect with me", a one-line inviting subtitle) \u2014 usually just before the closing slide, or where they say. Their real Bio page (with clickable links) is shown on a phone on that slide.\n'+u+'\n- "style": '+t+".\n"+p.u(0)+'- Reply with JSON only, no markdown, in this shape:\n{"title":"...","style":"...","logo_frame":"","logo_ring":"","photo_frame":"","photo_ring":"","slides":[{"kind":"title","title":"...","subtitle":"...","bullets":[],"notes":"...","emoji":"","icon3d":"","image_query":""}]}\n'},
ag_(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=null,a2="bullets",a3=A.a.i(a6),a4=J.CB(a3,"{"),a5=J.fKv(a3,"}")
if(a4<0||a5<=a4)return a1
a3=J.KH(a3,a4,a5+1)
try{w=A.R.aH(0,a3,a1)
q=x.f
if(!q.b(w))return a1
v=J.q(w,"slides")
p=x.j
if(!p.b(v)||J.ck(v))return a1
u=B.a([],x.aC)
for(o=J.aX(v),n=x.s,m=x.N;o.C();){t=o.gU(o)
if(!q.b(t))continue
if(p.b(J.q(t,a2))){l=J.b6(p.a(J.q(t,a2)),new C.fwN(),m).bZ(0,new C.fwO())
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
f=C.hLj(B.t(f==null?"":f))
if(f==null)f=""
e=J.q(t,"image_query")
if(e==null)e=J.q(t,"imageQuery")
e=A.a.i(B.t(e==null?"":e))
d=J.q(t,"picture")
d=B.c7(B.t(d==null?0:d),a1)
if(d==null)d=0
J.cf(u,new C.a75(l.toLowerCase(),j,i,s,h,g,f,e,d))}if(J.ad(u)===0)return a1
q=J.q(w,"style")
r=A.a.i(B.t(q==null?a7:q)).toLowerCase()
q=J.q(w,"title")
q=A.a.i(B.t(q==null?J.fn(u).b:q))
p=A.d.b8(D.vC,new C.fwP(r))?r:a7
o=C.feX(J.q(w,"logo_frame"),D.BB)
n=C.feX(J.q(w,"logo_ring"),D.Bw)
m=C.feX(J.q(w,"photo_frame"),D.BB)
l=C.feX(J.q(w,"photo_ring"),D.Bw)
return new C.apP(q,p,u,o,n,m,l)}catch(a0){return a1}},
a0H(d,e){return(A.o.D(e,0,255)<<24|d&16777215)>>>0},
hel(f9,g0,g1,g2,g3,g4,g5,g6,g7,g8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4=null,e5="title",e6="orb1",e7="drift",e8="orb2",e9="logo",f0="hero",f1="photo",f2="float3d",f3="bar",f4="pulse",f5="sub",f6=g2.t(0,D.Cc),f7=f6?C.hF5():e4,f8=f7==null
if(f8)w=e4
else{v=new B.eT()
v.dI(f7.w+1)
u=f7.a
t=B.bl(u.b,!0,x.dL)
A.d.fq(t,v)
s=u.c
s=new C.nA("luxe",u.a,A.lF,t,u.e,u.f,B.a([s,u.d,s],x.t),D.dd)
w=s}if(w==null)w=C.hZi(f9.b)
r=g2.t(0,D.a3Y)||f6
q=g2.t(0,D.Hq)
p=g2.t(0,D.R0)
o=new C.frc()
n=B.a([],x.g)
m=new C.frf(o,w,r)
l=new C.fre(o,r)
k=new C.frd(o,r)
j=(g3==null?"":g3).length!==0
u=f9.c
for(s=w.w,f8=!f8,i=g7==null,h=g6==null,g=f9.f,f=f9.r,e=g5==null,d=g4==null,a0=f9.d,a1=f9.e,a2=w.f,a3=w.d,a4=w.r,a5=x.u,a6=J.a8(g0),a7=!A.d.b8(u,new C.frb(g8)),a8=g1==null,a9=x.s,b0=0,b1=0;b1<u.length;b1=b6){b2=u[b1]
b3=a3[A.o.G(b1,a3.length)]
b4=A.o.G(b1,3)
b5=a4[b4]
b6=b1+1
b7=a4[b6%3]
b8=A.o.G(b1,5)
b9=D.cQ8[b8]
c0=D.cP6[b8]
c1=B.a([],a5)
c2=a6.h(g0,b1)
c3=c2==null
c4=c3?e4:c2.a
c5=c3?e4:c2.b
c3=b2.x
c6=c3>0&&c3<=g8.length
if(c6)c5=g8[c3-1]
else if(g8.length!==0&&a7&&!D.eFj.t(0,b2.a)){c7=b0+1
c5=g8[A.o.G(b0,g8.length)]
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
c1.push(k.$8$anim$delay$key(g3,0.41,0.04,0.18,0.27,D.mq,450,e9))}else if(d0!=null){b4=d1?f0:f1
c1.push(k.$9$anim$delay$fx$key(d0,0.42,0.04,0.16,0.28,c0,500,d1?f2:"",b4))}else if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,0.4,0.04,0.2,0.24,64,A.L,D.pT,500,f2,f0))
c1.push(l.$8$fx$key(D.be,0.4,0.66,0.2,0.012,b5,f4,f3))
c1.push(m.$10$align$anim$key$weight(b2.b,0.08,0.33,0.84,0.3,54,A.L,b9,e5,A.u))
c1.push(m.$10$align$color$delay$key(b2.c,0.12,0.7,0.76,0.14,24,A.L,a2,300,f5))
d3=D.QY
break A}if("section"===d2){c1.push(l.$8$fx$key(D.eI,0.64,0.46,0.42,0.75,(A.o.D(42,0,255)<<24|b5&16777215)>>>0,e7,e6))
if(d0!=null){b4=!c3&&!d1?f1:f0
c1.push(k.$8$anim$fx$key(d0,0.7,0.2,0.24,0.44,c0,d1?f2:"",b4))}else c1.push(l.$9$fx$key$rotation(D.kQ,0.78,0.1,0.18,0.32,(A.o.D(64,0,255)<<24|b7&16777215)>>>0,e7,e8,0.3))
c1.push(l.$8$fx$key(D.be,0.08,0.6,0.14,0.014,b5,f4,f3))
b4=b2.b
c1.push(m.$9$anim$key$weight(c8.length===0?b4:c8+"  "+b4,0.08,0.34,0.62,0.24,46,b9,e5,A.u))
c1.push(m.$9$color$delay$key(b2.c,0.08,0.64,0.6,0.14,22,a2,250,f5))
d3=D.C9
break A}if("quote"===d2){b4=b5&16777215
c1.push(l.$8$fx$key(D.eI,-0.12,-0.2,0.36,0.64,(A.o.D(36,0,255)<<24|b4)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.eI,0.82,0.66,0.26,0.46,(A.o.D(38,0,255)<<24|b7&16777215)>>>0,e7,e8))
c1.push(m.$11$anim$color$fx$key$weight("\u201c",0.06,0.02,0.2,0.36,140,D.mq,(A.o.D(204,0,255)<<24|b4)>>>0,f4,"quote",A.u))
c1.push(m.$11$align$anim$key$style$weight(b2.b,0.12,0.3,0.76,0.34,36,A.L,b9,e5,A.cD,A.O))
b4=b2.c
c1.push(m.$10$align$color$delay$key(b4.length===0?"":"\u2014 "+b4,0.12,0.68,0.76,0.12,22,A.L,a2,300,f5))
if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,j?0.72:0.82,0.06,0.12,0.2,52,A.L,D.pT,500,f2,f0))
d3=D.mp
break A}if("bio"===d2)b4=(a8?"":g1).length!==0
else b4=!1
if(b4){c1.push(l.$8$fx$key(D.eI,0.58,0.04,0.44,0.8,(A.o.D(42,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.be,0.08,0.62,0.14,0.014,b5,f4,f3))
b4=b2.b
c1.push(m.$9$anim$key$weight(c8.length===0?b4:c8+"  "+b4,0.07,0.3,0.52,0.28,46,b9,e5,A.u))
c1.push(m.$9$color$delay$key(b2.c,0.07,0.66,0.5,0.16,22,a2,250,f5))
b4=o.$0()
g1.toString
b8=r?D.u0:D.cg
c1.push(new C.eG(b4,D.a3W,0.64,0.05,0.27,0.9,g1,24,A.a4,A.bk,A.aC,4279310375,A.bg,e4,D.be,4280640491,4280172719,2,0,!1,"",0,b8,r?350:0,"bio","","","","",!1,0))
d3=D.mp
break A}if("closing"===d2){c1.push(l.$8$fx$key(D.eI,-0.15,-0.3,0.5,0.9,(A.o.D(46,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.eI,0.78,0.62,0.3,0.54,(A.o.D(51,0,255)<<24|b7&16777215)>>>0,e7,e8))
if(j){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.41,0.05,0.18,0.27,D.mq,400,e9))}else if(d0!=null){b4=d1?f0:f1
c1.push(k.$9$anim$delay$fx$key(d0,0.42,0.05,0.16,0.28,c0,450,d1?f2:"",b4))}else if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,0.4,0.05,0.2,0.24,64,A.L,D.pT,450,f2,f0))
c1.push(l.$8$fx$key(D.be,0.42,0.61,0.16,0.012,b5,f4,f3))
c1.push(m.$10$align$anim$key$weight(b2.b,0.1,0.34,0.8,0.26,52,A.L,b9,e5,A.u))
c1.push(m.$10$align$color$delay$key(b2.c,0.14,0.65,0.72,0.16,24,A.L,a2,300,f5))
d3=D.QY
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
c1.push(m.$11$anim$bullets$color$delay$key(b4,d7,0.31,b8,0.6,d4.length>4?21:24,D.Ho,!0,a2,250,f5))
if(d5){d8=!c3
d9=d8?0.29:0.24
if(d6)e0=0.06
else e0=d8?0.67:0.7
b4=d8?0.22:0.26
b8=d8?0.56:0.44
c3=d8?f1:f0
c1.push(k.$9$anim$delay$fx$key(c9,e0,b4,d9,b8,c0,400,d8?"":f2,c3))}d3=D.mp}if(j&&d2!=="title"&&d2!=="closing"){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.885,0.035,0.085,0.13,D.dd,200,e9))}for(b4=c1.length,e1=0;e1<b4;++e1){e2=c1[e1]
b8=e2.fx
if(b8==="logo"){e2.go=d?a0:g4
e2.id=e?a1:g5}else if(b8==="photo"){e2.go=h?g:g6
e2.id=i?f:g7}}if(f8)C.hGH(c1,b1,o,f7)
b4=o.$0()
if(f8){b8=f7.r
b8=b8[A.o.G(b1,b8.length)]}else b8=r?D.dcZ[A.o.G(b1,6)]:s
n.push(new C.lA(b4,b2.b,b2.e,d3,b3.a,b3.b,b8,0,"",0,c1))}e3=A.a.i(f9.a)
if(e3.length===0)e3="AI Presentation"
f8=o.$0()
return C.B9(e4,e4,e4,e4,D.C8,5,!1,e4,e4,e4,e4,e4,f8,e4,!1,e4,e3.length>60?A.a.ap(e3,0,60):e3,e4,e4,n,"office_blue",e4,!1,e4)},
ftA(d,e){var w=0,v=B.j(x.gI),u,t,s,r,q,p,o,n,m
var $async$ftA=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:o=e.t(0,D.Cb)
n=e.t(0,D.Hr)
if(!o&&!n){u=D.a2V
w=1
break}t=B.a([],x.d5)
for(s=d.c,r=0;r<s.length;++r)t.push(new C.ftD(o,s[r],n,$.hK4,r).$0())
s=B.V(x.S,x.aH)
m=J
w=3
return B.b(B.iJ(t,x.e),$async$ftA)
case 3:q=m.aX(g)
case 4:if(!q.C()){w=5
break}p=q.gU(q)
s.n(0,p.a,p.b)
w=4
break
case 5:u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ftA,v)},
fsA(d,e,f,g,h,i,j,k,l){var w=0,v=B.j(x.I),u,t,s
var $async$fsA=B.e(function(m,n){if(m===1)return B.f(n,v)
for(;;)switch(w){case 0:h.$1("Writing your "+j+" slides\u2026")
t=i.length
t=C.hZf(d,e,k.length!==0,t,j,l)
s=C
w=3
return B.b(C.aLY(t,"The AI could not write the slides. Try describing it again.",l==="auto"?"colorful":l,k),$async$fsA)
case 3:u=s.aMi(n,e,h,f,g,i)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fsA,v)},
bAf(d,e,f,g,h,i,j,k){var w=0,v=B.j(x.I),u,t,s,r,q,p,o
var $async$bAf=B.e(function(l,m){if(l===1)return B.f(m,v)
for(;;)switch(w){case 0:if(e.length!==0){t=B.aW(x.N)
for(s=B.ea(f,f.r,B.a3(f).c),r=s.$ti.c;s.C();){q=s.d
t.K(0,(q==null?r.a(q):q).b)}C.hZg(e,t,i,k)}if(h!=null)h.$1("Making your changes\u2026")
p=C.ag_(i,"colorful")
t=C.hZe(d,f,i,j.length,k)
s=p==null?null:p.b
o=C
w=3
return B.b(C.aLY(t,"The AI could not make that change. Try saying it another way.",s==null?"colorful":s,A.hk),$async$bAf)
case 3:u=o.aMi(m,f,h,g,D.dQY,j)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bAf,v)},
aLY(d,e,f,g){var w=0,v=B.j(x.dO),u,t,s,r,q,p,o,n
var $async$aLY=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:w=3
return B.b(B.v2(null,""),$async$aLY)
case 3:n=i
if(A.a.i(n).length===0)throw B.U("AI is not set up yet. AI is not available right now. Please try again later.")
t=B.mZ(n)
s=null,r=0
case 4:if(!(r<2)){w=6
break}w=7
return B.b(B.qD(t,d,g,null),$async$aLY)
case 7:q=i
p=q.b
if(p!=null){o=C.ag_(p,f)
if(o!=null){u=o
w=1
break}}else s=q.a
case 5:++r
w=4
break
case 6:throw B.U(s!=null&&B.Km(s)?"No internet connection \u2014 try again when you are online.":e)
case 1:return B.h(u,v)}})
return B.i($async$aLY,v)},
aMi(d,e,f,g,h,i){var w=0,v=B.j(x.I),u,t,s,r,q,p,o,n,m,l
var $async$aMi=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:w=e.t(0,D.Cb)||e.t(0,D.Hr)?3:5
break
case 3:if(f!=null)f.$1("Adding pictures and 3D art\u2026")
if(i.length===0)t=e
else{t=B.da(e,x.Q)
t.W(0,D.Cb)}w=6
return B.b(C.ftA(d,t),$async$aMi)
case 6:s=k
w=4
break
case 5:s=D.a2V
case 4:t=d.c
w=A.d.b8(t,new C.f8A())?7:9
break
case 7:r=$.hg5
r=r==null?null:r.$0()
w=10
return B.b(x.gc.b(r)?r:B.dP(r,x.aP),$async$aMi)
case 10:q=k
p=q!=null?A.R.ao(q.ae(),null):null
w=8
break
case 9:p=null
case 8:r=h.a
o=h.b
n=h.c
m=h.d
l=C.hel(d,s,p,e,g,r,o,n,m,i)
if(r==null)r=d.d
if(o==null)o=d.e
if(n==null)n=d.f
if(m==null)m=d.r
l.CW=C.hyt(new C.apP(d.a,d.b,t,r,o,n,m))
m=l.r
n=B.T(m).k("K<1,n>")
t=B.B(new B.K(m,new C.f8B(),n),n.k("ai.E"))
l.cx=t
t=B.a3(e).k("jJ<cl.E,n>")
t=B.B(new B.jJ(e,new C.f8C(),t),t.k("H.E"))
l.cy=t
l.ay=e.t(0,D.R0)
u=l
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aMi,v)},
fUJ(d){var w,v,u,t=d.cy
if(t==null)t=A.T
w=B.aW(x.Q)
for(v=0;v<6;++v){u=D.a1N[v]
if(A.d.t(t,u.b))w.K(0,u)}return w},
i2d(d){return B.bW(A.K,null,new C.fHK(),d,!0,!0,!0,null,!1,!1,x.I)},
hFH(d,e){var w,v=e.toLowerCase()
if(A.a.c9(v,".png"))w="image/png"
else w=A.a.c9(v,".webp")?"image/webp":"image/jpeg"
return"data:"+w+";base64,"+A.cS.gcv().aJ(d)},
i2c(d,e,f){return B.bW(A.K,null,new C.fHJ(f,e),d,!0,!0,!0,null,!1,!1,x.I)},
fUK(d){var w,v,u,t,s,r,q,p
for(w=d.r,v=w.length,u=0;u<v;++u)for(t=w[u].z,s=t.length,r=0;r<s;++r){q=t[r]
if(q.fx==="logo"){p=q.at
p=(p==null?"":p).length!==0}else p=!1
if(p)return q.at}return null},
fUL(d){var w,v,u,t,s,r,q,p,o=B.a([],x.s)
for(w=d.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u)for(t=w[u].z,s=t.length,r=0;r<t.length;t.length===s||(0,B.L)(t),++r){q=t[r]
p=q.at
if(p==null)p=""
if(q.fx==="photo"&&p.length!==0&&!A.d.t(o,p))o.push(p)}return o},
feX(d,e){var w=A.a.i(B.t(d==null?"":d)).toLowerCase()
return A.d.b8(e,new C.feY(w))?w:""},
hbt(d){var w,v
if(d<=0)return""
w=""+d
v=d===1?"":"s"
return"- THEIR PICTURES: they uploaded "+w+" picture"+v+" of their own, numbered 1 to "+w+' in the order they picked them. Put "picture": <number> on each slide where one belongs, following exactly what they say (e.g. "picture 2 on the team slide", "first picture on the title"). If they don\'t say, spread them over the content slides in order. Use 0 where no picture is wanted.'},
hg3(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0="colorful",a1=a4.CW,a2=C.ag_(a1==null?"":a1,a0),a3=C.ag_(a5,a0)
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
for(v=t.length,r=a4.r,q=B.T(r).k("a2<1>"),p=0;p<t.length;t.length===v||(0,B.L)(t),++p){o=B.r0(new B.a2(r,new C.fyW(t[p]),q))
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
g=B.B(new B.a2(k,new C.fyX(),v),r)
A.d.b_(g,new C.fyY())
if(g.length===0)continue
f=new C.fyZ(g)
e=s[n]
for(k=e.z,j=k.length,p=0;p<k.length;k.length===j||(0,B.L)(k),++p){d=k[p]
i=d.r
if(i.length!==0)d.r=f.$1(i)}e.c=f.$1(e.c)}if(A.a.i(a4.b)===A.a.i(a2.a)&&A.a.i(a3.a).length!==0)a4.b=A.a.i(a3.a)
a4.CW=a5
return!0},
hZz(d){var w=d.toLowerCase(),v=B.af("\\b(fit|fits|fitting|overflow|overflowing|reframe|inside|too big|out of the|going under|under the slide|below the slide)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.aEp
v=B.af("\\b(smaller|shrink|reduce|decrease|make .{0,20}small|less big)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.dST
v=B.af("\\b(bigger|larger|increase|enlarge|grow|make .{0,20}big)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.dSU
return null},
hb3(d,e,f,g){var w,v,u,t=d.e,s=d.f,r=Math.max(1,A.k.bw(t*f/(e*0.55)))
for(t=d.r.split("\n"),w=t.length,v=0,u=0;u<w;++u)v+=Math.max(1,A.k.dw(t[u].length/r))
return v*e*1.3<=s*g+0.5&&d.d+d.f<=1.001},
hZj(a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a0.r,d=e.length
if(d===0)return!1
e=a3?e:B.a([e[A.o.D(a1,0,d-1)]],x.g)
w=a0.d===D.nW
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
if(C.hb3(n,j,v,u))n.w=j
break
case 2:i=m
h=0
for(;;){g=!1
if(!C.hb3(n,i,v,u))if(n.w>10){f=h+1
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
hZh(d,e){var w,v,u,t,s,r,q,p,o=d.b,n=C.ag_(o,"colorful")
if(n==null)throw B.U("That earlier version could not be read.")
w=B.aW(x.Q)
for(v=d.c,u=v.length,t=0;t<v.length;v.length===u||(0,B.L)(v),++t){s=v[t]
for(r=0;r<6;++r){q=D.a1N[r]
if(q.b===s)w.K(0,q)}}v=C.fUK(e)
u=C.fUL(e)
p=C.hel(n,D.a2V,null,w,v,n.d,n.e,n.f,n.r,u)
p.CW=o
o=p.r
u=B.T(o).k("K<1,n>")
o=B.B(new B.K(o,new C.fyS(),u),u.k("ai.E"))
p.cx=o
o=w.$ti.k("jJ<cl.E,n>")
o=B.B(new B.jJ(w,new C.fyT(),o),o.k("H.E"))
p.cy=o
p.ay=w.t(0,D.R0)
return p},
i2_(d,e,f){return B.bW(A.K,null,new C.fGX(f,e),d,!0,!0,!0,null,!1,!1,x.I)},
hF5(){var w,v,u,t=1000*Date.now()&2147483647,s=new B.eT()
s.dI(t)
w=D.cuz[s.aB(10)]
v=new C.e8Z(s)
u=x.N
return new C.e8Y(w,s.aB(4),J.fn(v.$1$2(D.cUk,1,x.ff)),w.r[s.aB(3)],v.$1$2(D.d8J,2+s.aB(2),u),v.$1$2(D.d2h,2,u),v.$1$2(D.dby,4,x.fP),t)},
hGH(a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g="lux_frame",f="goldframe",e="lux_emblem",d=a5.a,a0=d.c,a1=new B.eT()
a1.dI(a5.w+a3*13)
w=new C.f56(a4)
v=new C.f58(a4,d)
u=new C.f57(w,a5,a0,d)
for(t=a2.length,s=d.f,r=d.d,q=0;q<a2.length;a2.length===t||(0,B.L)(a2),++q){p=a2[q]
if(p.b===D.cQ){o=p.fx
if(o==="title"){p.Q=r
p.fy="shimmer@"+A.a.aT(A.o.fP(r,16),8,"0").toUpperCase()}else if(o==="sub"||o==="body")p.Q=s}if(p.fx==="bar")p.fy="shimmer@"+A.a.aT(A.o.fP(r,16),8,"0").toUpperCase()}t=a5.e
n=t[A.o.G(a3,t.length)]
if(n==="spotlight")A.d.cn(a2,0,w.$8(D.eI,0.1+a1.aj()*0.45,0.05+a1.aj()*0.3,0.45,0.75,C.a0H(a0,52),"lux_spot",a5.wd(0,"spotlight")))
else A.d.cn(a2,0,w.$8(D.be,0,0,1,1,0,"lux_back",a5.wd(0,n)))
m=t[(a3+1)%t.length]
t=a3&1
if(t===1&&m!==n&&m!=="spotlight")A.d.cn(a2,1,w.$8(D.be,0,0,1,1,0,"lux_back2",a5.aDp(0,m,r)))
switch(a5.b){case 0:a2.push(w.$12$anim$delay$stroke$strokeWidth(D.be,0.022,0.038,0.956,0.924,0,g,a5.wd(0,f),D.dd,150,C.a0H(a0,176),1.6))
a2.push(u.$4(0.022,0.038,"lux_c1",300))
a2.push(u.$4(0.978,0.038,"lux_c2",380))
a2.push(u.$4(0.022,0.962,"lux_c3",460))
a2.push(u.$4(0.978,0.962,"lux_c4",540))
break
case 1:a2.push(w.$12$anim$delay$stroke$strokeWidth(D.be,0.018,0.032,0.964,0.936,0,g,a5.wd(0,f),D.dd,120,C.a0H(a0,200),2))
a2.push(w.$12$anim$delay$stroke$strokeWidth(D.be,0.034,0.06,0.932,0.88,0,"lux_frame2","",D.dd,260,C.a0H(a0,112),0.8))
a2.push(u.$5$size(0.5,0.032,"lux_c1",420,0.026))
a2.push(u.$5$size(0.5,0.968,"lux_c2",480,0.026))
break
case 2:a2.push(w.$10$anim$delay(D.be,0,0,1,1,0,"lux_filigree",a5.wd(0,"filigree"),D.dd,200))
break
default:a2.push(w.$10$anim$delay(D.be,0.08,0.06,0.84,0.004,C.a0H(a0,208),"lux_rule",a5.aDp(0,"shimmer",r),D.u_,150))
a2.push(w.$10$anim$delay(D.be,0.08,0.936,0.84,0.004,C.a0H(a0,144),"lux_rule2","",D.Ho,220))}l=!A.d.b8(a2,new C.f55())||a3===0
s=a5.d
if(l)a2.push(v.$9(s,0.44,0.06,0.12,0.14,40,e,a5.wd(0,"crest"),350))
else{o=a1.hg()?0.035:0.905
a2.push(v.$9(s,o,0.055,0.06,0.09,22,e,a5.wd(0,"crest"),350))}s=a5.c
t=t===0
o=t?0.3:0.62
k=C.a0H(r,242)
j=a5.wd(0,"orbit")
i=s===D.be?0.785:0
a2.push(w.$13$anim$delay$rotation$stroke$strokeWidth(s,o-0.008,0.024,0.016,0.028,k,"lux_g1",j,D.pT,600,i,4294967295,1))
t=t?0.66:0.34
a2.push(w.$10$anim$delay(D.eI,t-0.007,0.9495,0.014,0.025,C.a0H(r,242),"lux_g2",a5.wd(0,"orbit"),D.pT,700))
for(t=a5.f,s=t.length,q=0;q<t.length;t.length===s||(0,B.L)(t),++q){h=t[q]
a2.push(w.$8(D.be,0,0,1,1,0,"lux_"+h,h+"@"+A.a.aT(A.o.fP(a0,16),8,"0").toUpperCase()))}if((A.d.gL(d.b).a&16777215)<8421504)a2.push(w.$8(D.be,0,0,1,1,0,"lux_velvet",a5.wd(0,"velvet")))},
nA:function nA(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fyU:function fyU(d){this.a=d},
fyV:function fyV(){},
vE:function vE(d,e){this.a=d
this.b=e},
a75:function a75(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
apP:function apP(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
fyN:function fyN(){},
fyQ:function fyQ(){},
fwN:function fwN(){},
fwO:function fwO(){},
fwP:function fwP(d){this.a=d},
frc:function frc(){},
frf:function frf(d,e,f){this.a=d
this.b=e
this.c=f},
fre:function fre(d,e){this.a=d
this.b=e},
frd:function frd(d,e){this.a=d
this.b=e},
frb:function frb(d){this.a=d},
ftD:function ftD(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ftB:function ftB(d){this.a=d},
ftC:function ftC(d){this.a=d},
f8A:function f8A(){},
f8B:function f8B(){},
f8C:function f8C(){},
fHK:function fHK(){},
a_u:function a_u(d){this.a=d},
aFZ:function aFZ(d,e,f,g,h){var _=this
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
eTj:function eTj(d,e,f){this.a=d
this.b=e
this.c=f},
eTk:function eTk(d,e){this.a=d
this.b=e},
eTh:function eTh(d,e){this.a=d
this.b=e},
eTi:function eTi(d,e){this.a=d
this.b=e},
eTg:function eTg(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
eTb:function eTb(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
eTf:function eTf(d,e){this.a=d
this.b=e},
eTa:function eTa(d,e){this.a=d
this.b=e},
eTe:function eTe(d,e){this.a=d
this.b=e},
eT9:function eT9(d,e){this.a=d
this.b=e},
eTc:function eTc(d){this.a=d},
eTd:function eTd(d,e){this.a=d
this.b=e},
eT_:function eT_(d,e){this.a=d
this.b=e},
eT0:function eT0(d,e){this.a=d
this.b=e},
eT2:function eT2(d){this.a=d},
eT3:function eT3(d){this.a=d},
eT4:function eT4(d){this.a=d},
eT5:function eT5(d){this.a=d},
eT1:function eT1(d,e){this.a=d
this.b=e},
eT6:function eT6(d,e){this.a=d
this.b=e},
eTx:function eTx(d){this.a=d},
eTy:function eTy(d){this.a=d},
eTw:function eTw(d){this.a=d},
eTz:function eTz(d){this.a=d},
eTv:function eTv(d){this.a=d},
eTB:function eTB(d){this.a=d},
eTu:function eTu(d,e){this.a=d
this.b=e},
eTC:function eTC(d){this.a=d},
eTt:function eTt(d,e){this.a=d
this.b=e},
eTD:function eTD(d){this.a=d},
eTs:function eTs(d){this.a=d},
eTE:function eTE(d){this.a=d},
eTr:function eTr(d,e){this.a=d
this.b=e},
eTF:function eTF(d){this.a=d},
eTq:function eTq(d,e){this.a=d
this.b=e},
eTG:function eTG(d){this.a=d},
eTp:function eTp(d){this.a=d},
eTH:function eTH(d,e){this.a=d
this.b=e},
eTo:function eTo(d,e){this.a=d
this.b=e},
eTI:function eTI(d){this.a=d},
eTA:function eTA(d){this.a=d},
eTn:function eTn(d,e){this.a=d
this.b=e},
eT7:function eT7(d,e,f){this.a=d
this.b=e
this.c=f},
eT8:function eT8(d,e,f){this.a=d
this.b=e
this.c=f},
eTm:function eTm(d,e){this.a=d
this.b=e},
eTl:function eTl(d,e){this.a=d
this.b=e},
fHJ:function fHJ(d,e){this.a=d
this.b=e},
a_t:function a_t(d,e,f){this.c=d
this.d=e
this.a=f},
aFY:function aFY(d){var _=this
_.d=d
_.e=!1
_.f=""
_.c=_.a=_.r=null},
eST:function eST(d){this.a=d},
eSU:function eSU(d){this.a=d},
eSV:function eSV(d,e){this.a=d
this.b=e},
eSW:function eSW(d){this.a=d},
eSX:function eSX(d){this.a=d},
eSS:function eSS(d,e){this.a=d
this.b=e},
eSY:function eSY(d,e){this.a=d
this.b=e},
eSZ:function eSZ(d,e){this.a=d
this.b=e},
feY:function feY(d){this.a=d},
b_A:function b_A(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aCx:function aCx(d,e,f){this.c=d
this.d=e
this.a=f},
bim:function bim(d,e){var _=this
_.d=$
_.bq$=d
_.a7$=e
_.c=_.a=null},
e90:function e90(d){this.a=d},
e9_:function e9_(){},
bfV:function bfV(d,e){this.b=d
this.a=e},
fyW:function fyW(d){this.a=d},
fyX:function fyX(){},
fyY:function fyY(){},
fyZ:function fyZ(d){this.a=d},
aqo:function aqo(d,e){this.a=d
this.b=e},
fyS:function fyS(){},
fyT:function fyT(){},
fGX:function fGX(d,e){this.a=d
this.b=e},
YS:function YS(d,e,f){this.c=d
this.d=e
this.a=f},
azZ:function azZ(){var _=this
_.e=_.d=$
_.f=!1
_.c=_.a=_.r=null},
dfM:function dfM(d){this.a=d},
dfN:function dfN(d){this.a=d},
dfO:function dfO(d,e){this.a=d
this.b=e},
dfR:function dfR(d){this.a=d},
dfS:function dfS(d,e){this.a=d
this.b=e},
dfQ:function dfQ(d,e){this.a=d
this.b=e},
dfT:function dfT(d){this.a=d},
dfP:function dfP(d,e){this.a=d
this.b=e},
bqI:function bqI(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
e8Y:function e8Y(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
e8Z:function e8Z(d){this.a=d},
f56:function f56(d){this.a=d},
f58:function f58(d,e){this.a=d
this.b=e},
f57:function f57(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f55:function f55(){},
aKw:function aKw(){},
fTz(d){var w,v,u
try{w=A.R.aH(0,d,null)
if(x.f.b(w)){v=B.vw(B.a1(w,x.N,x.z))
return v}}catch(u){}return null},
b_w:function b_w(d,e,f){this.c=d
this.d=e
this.a=f},
bk_:function bk_(d,e){this.c=d
this.a=e},
hVD(d){return A.d.dM(D.Gs,new C.fsj(d),new C.fsk())},
hVE(d){var w,v,u,t=A.a.i(d)
if(!A.a.a0(t,"class_"))return null
w=A.a.b0(t,6)
if(w.length===0)return null
v=new B.a2(D.Gs,new C.fsl(w),x.b4)
if(!v.gag(0).C())return null
u=v.gL(0)
return new C.jA("class_"+u.a,u.b,u.d,u.r,u.w,u.e,u.f)},
l6:function l6(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fsj:function fsj(d){this.a=d},
fsk:function fsk(){},
fsl:function fsl(d){this.a=d},
mN(d,e,f,g,h){return new C.Ea(f,g,d)},
hHU(d){var w=d.z,v=B.T(w).k("a2<1>")
w=B.B(new B.a2(w,new C.f75(),v),v.k("H.E"))
d.z=w
d.x=""},
du(d,e){var w=$.JM
e.db="__design__:"+(w.length===0?"layer":w)
A.d.cn(d.z,0,e)},
dv(d,e,f,g,h,i,j,k,l){return C.en(A.bg,!1,4279310375,A.aC,"",d,24,A.bk,A.a4,"",e,"design_"+C.cC(),null,"","",0,!1,"",f,g,h,i,"",0,0,"",D.cg,D.f_,j,k,l)},
he8(d,e){var w
C.hHU(d)
w=A.d.dM($.bCg(),new C.fq9(e),new C.fqa())
$.JM=w.a
d.x=w.a;++d.y
try{w.bx(d)}finally{$.JM=""}d.z=B.bl(d.z,!0,x.F)},
Ea:function Ea(d,e,f){this.a=d
this.b=e
this.e=f},
f75:function f75(){},
fyo:function fyo(){},
fyp:function fyp(){},
fyq:function fyq(){},
fyB:function fyB(){},
fyG:function fyG(){},
fyH:function fyH(){},
fyI:function fyI(){},
fyJ:function fyJ(){},
fyK:function fyK(){},
fyL:function fyL(){},
fyM:function fyM(){},
fyr:function fyr(){},
fys:function fys(){},
fyt:function fyt(){},
fyu:function fyu(){},
fyv:function fyv(){},
fyw:function fyw(){},
fyx:function fyx(){},
fyy:function fyy(){},
fyz:function fyz(){},
fyA:function fyA(){},
fyC:function fyC(){},
fyD:function fyD(){},
fyE:function fyE(){},
fyF:function fyF(){},
fq9:function fq9(d){this.a=d},
fqa:function fqa(){},
iR(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){return C.en(d,e,f,g,"",4280640491,h,i,j,"",k,l,null,"","",0,!1,"",0,D.be,4280172719,2,m,n,0,"",o,D.cQ,p,q,r)},
Cs(d,e,f,g,h,i,j,k,l){return C.en(A.bg,!1,4279310375,A.aC,"",d,24,A.bk,A.a4,"",e,f,null,"","",0,!1,"",0,g,h,i,"",0,0,"",D.cg,D.f_,j,k,l)},
bAZ(){var w=new B.S(Date.now(),0,!1)
return A.i9[B.bG(w)-1]+" "+B.bQ(w)+", "+B.by(w)},
er:function er(d,e,f){this.a=d
this.b=e
this.c=f},
bym(d){return new B.iM((A.o.aA(d,24)&255)/255,(A.o.aA(d,16)&255)/255,(A.o.aA(d,8)&255)/255,(d&255)/255)},
hMW(d){var w,v
if(d==null||!A.a.a0(d,"data:image"))return null
try{w=B.alC(A.cB.aJ(A.d.gal(d.split(","))))
return w}catch(v){return null}},
hN_(d){var w=d.r
if(!d.cy)return w
return new B.K(B.a(w.split("\n"),x.s),new C.few(),x.dv).aI(0,"\n")},
hMZ(d){switch(d.a){case 2:return A.nd
case 1:case 5:return A.ePE
default:return A.Sm}},
hMT(d){switch(d.a){case 2:return A.ux
case 1:case 5:return A.Ug
default:return A.a8L}},
hMX(d,e){var w,v=null,u=d.ay,t=A.o.aA(u,24),s=A.o.aA(d.ch,24),r=(t&255)===0?v:C.bym(u),q=(s&255)===0?v:C.bym(d.ch),p=A.k.D(d.CW*(e/960),0.35,6)
u=q==null
if(u)w=v
else{t=new B.nk(q,p,A.kx)
w=new B.pm(t,t,t,t)}switch(d.ax.a){case 1:return B.lp(v,v,v,new B.ku(r,w,v,A.a9Z,v),v,v,v,v)
case 4:return u?new B.fO(v,v,v):B.wE(B.lp(v,v,q,v,p+0.4,v,v,v))
default:return B.lp(v,v,v,new B.ku(r,w,B.v9(4),A.hB,v),v,v,v,v)}},
hMV(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=d.c*e,j=d.d*a0,i=d.b,h=i===D.f_?0.4:12,g=A.k.D(d.e*e,h,e),f=A.k.D(d.f*a0,h,a0)
switch(i.a){case 0:w=C.hMT(d.as)
v=A.k.D(d.w*(e/960),3,96)
u=C.hN_(d)
t=C.bym(d.Q)
s=d.x.a>=700?A.ei:A.v8
r=d.y===A.cD?A.xx:A.ai2
q=d.z
p=new B.CE(w,l,l,B.f7(u,l,l,l,B.h2(l,t,1===q.a?A.aNg:A.aNf,l,l,l,l,l,l,A.dr,l,l,v,r,s,l,!0,l,l,l,l),C.hMZ(d.as)))
break
case 1:case 4:o=C.hMW(d.at)
n=i===D.lh&&d.c===0&&d.d===0&&d.e===1&&d.f===1
if(o==null){w=d.db
if(w.length===0)w="Image"
p=B.wE(B.f7(w,l,l,l,B.h2(l,A.rd,l,l,l,l,l,l,l,A.dr,l,l,10,l,l,l,!0,l,l,l,l),l))}else p=new B.Hd(o,n?A.a9V:A.UD,l,l)
break
case 3:w=new B.nk(A.HH,1,A.kx)
u=B.v9(6)
t=d.db
if(t.length===0)t="PDF document"
p=B.lp(A.ux,B.f7(t,l,l,l,B.h2(l,D.e40,l,l,l,l,l,l,l,A.dr,l,l,11,l,A.ei,l,!0,l,l,l,l),A.nd),l,new B.ku(E.aFH,new B.pm(w,w,w,w),u,A.hB,l),l,l,l,l)
break
case 2:p=C.hMX(d,e)
break
case 5:p=C.hMU(d)
break
default:p=l}w=d.cx
if(w!==0)p=B.h5S(-w,p)
w=i===D.cQ
if(w){m=A.o.aA(d.Q,24)&255
if(m<255)p=new B.ar9(m/255,p)}if(w)return new F.vK(k,l,j,l,new B.Ro(new B.kt(g,g,f,1/0),p))
if(i===D.kP){i=new B.nk(A.HH,1,A.kx)
i=B.lp(A.ux,p,l,new B.ku(A.oO,new B.pm(i,i,i,i),B.v9(4),A.hB,l),l,l,D.bsn,l)}else i=p
return new F.vK(k,l,j,l,new B.fO(g,f,i))},
hMY(d,e,f,g){var w,v=null,u=C.bym(d.e),t=d.f
t=B.a([F.h4u(t!=null?B.lp(v,v,v,new B.ku(v,v,v,A.hB,new B.aV3(E.Uh,A.a8F,B.a([u,C.bym(t)],x.cR),v)),v,v,v,v):B.lp(v,v,u,v,v,v,v,v))],x.eR)
w=d.z
A.d.v(t,new B.K(w,new C.fev(f,g),B.T(w).k("K<1,fd>")))
return F.coT(t)},
fUN(d){var w=0,v=B.j(x.E),u,t,s,r,q,p,o,n
var $async$fUN=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:n=B.a3h(null,"NGMY Slides",d.b)
for(t=d.r,s=t.length,r=n.c,q=0;q<t.length;t.length===s||(0,B.L)(t),++q){p=t[q]
o=new B.VE(A.vP,A.HE,D.btt,null,null,null,!1,null)
o=new B.Bf(o,new C.fz4(607,787,p,d))
o.M_(n,null)
r.push(o)}u=n.jS(0)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fUN,v)},
hMU(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=C.fTz(d.r),k=l==null,j=k?m:l.b,i=A.a.i(j==null?"":j),h=k?m:l.gaiq()
if(h==null)h=A.avu
j=B.te(4279308564)
w=B.v9(18)
v=new B.nk(B.te(4287531653),3,A.kx)
u=i.length===0?"My links":i
u=B.a([B.wE(B.f7(u,m,m,m,B.h2(m,A.oO,m,m,m,m,m,m,m,A.dr,m,m,12,m,A.ei,m,!0,m,m,m,m),m))],x.eR)
t=k?m:l.c
if(A.a.i(t==null?"":t).length!==0)u.push(B.wE(B.f7(A.a.i(l.c),m,m,m,D.eWI,m)))
u.push(new B.fO(m,8,m))
for(t=B.dc(h,0,B.dJ(8,"count",x.S),B.T(h).c),s=t.$ti,t=new B.bV(t,t.gM(0),s.k("bV<ai.E>")),s=s.k("ai.E");t.C();){r=t.d
if(r==null)r=s.a(r)
q=A.a.i(r.c)
p=B.te(4280690220)
o=new B.a8l(8,8)
n=A.a.i(r.b)
u.push(new B.nB(D.bmE,new C.avm(new C.ah2(q),B.lp(m,B.f7(n.length===0?A.a.i(r.c):n,m,m,m,D.eZ_,A.nd),m,new B.ku(p,m,new B.aht(o,o,o,o),A.hB,m),m,m,D.bsN,m))))}k=k?m:l.as
if(A.a.i(k==null?"":k).length!==0){k=A.a.i(l.as)
t=B.wE(B.f7(k,m,m,m,D.eYf,m))
u.push(new C.avm(C.hmH(k),t))}return B.lp(m,B.yp(u,A.L0,A.lf),m,new B.ku(j,new B.pm(v,v,v,v),w,A.hB,m),m,m,D.bnu,m)},
few:function few(){},
fev:function fev(d,e){this.a=d
this.b=e},
fz4:function fz4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
afN(d){var w,v
for(w=0;w<32;++w){v=D.Gj[w]
if(v.a===d)return v}return null},
h8t(d){var w,v,u=A.a.cJ(d,",")
if(!A.a.a0(d,"data:")||u<0)return null
try{w=A.cB.aJ(A.a.b0(d,u+1))
return w}catch(v){return null}},
cT(d,e){var w=d*374761393+e*668265263+1013904223&2147483647
w=(w^w>>>13)*1274126177&2147483647
return((w^w>>>16)&65535)/65535},
hhb(d,e){return B.a5(d,!1).ce(B.ej(new C.fFm(e),!0,null,x.fB))},
hha(d,e){return B.bW(A.K,null,new C.fFl(e),d,!0,!0,!0,null,!1,!1,x.fB)},
iV:function iV(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
E1:function E1(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ML:function ML(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bhJ:function bhJ(d,e,f){var _=this
_.d=d
_.e=$
_.bq$=e
_.a7$=f
_.c=_.a=null},
dQM:function dQM(d){this.a=d},
dQL:function dQL(d,e,f){this.a=d
this.b=e
this.c=f},
dQK:function dQK(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bpi:function bpi(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eS6:function eS6(d,e){this.a=d
this.b=e},
bcP:function bcP(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
aYq:function aYq(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
c6h:function c6h(){},
c6i:function c6i(d){this.a=d},
c6j:function c6j(d,e,f){this.a=d
this.b=e
this.c=f},
c6k:function c6k(d,e,f){this.a=d
this.b=e
this.c=f},
fFm:function fFm(d){this.a=d},
Yq:function Yq(d,e){this.c=d
this.a=e},
aym:function aym(){var _=this
_.f=_.e=_.d=$
_.r=0
_.c=_.a=null},
d50:function d50(d,e,f){this.a=d
this.b=e
this.c=f},
d55:function d55(d){this.a=d},
d56:function d56(d){this.a=d},
d54:function d54(d){this.a=d},
d57:function d57(d){this.a=d},
d53:function d53(d,e){this.a=d
this.b=e},
d58:function d58(d){this.a=d},
d52:function d52(d){this.a=d},
d59:function d59(d){this.a=d},
d51:function d51(d,e){this.a=d
this.b=e},
d5a:function d5a(d,e){this.a=d
this.b=e},
fFl:function fFl(d){this.a=d},
fFk:function fFk(d){this.a=d},
fFj:function fFj(d,e,f){this.a=d
this.b=e
this.c=f},
fFi:function fFi(d,e){this.a=d
this.b=e},
aK_:function aK_(){},
i2b(d){return B.bW(A.K,null,new C.fHI(),d,!0,!0,!0,null,!1,!1,x.N)},
fHI:function fHI(){},
YL:function YL(d){this.a=d},
bei:function bei(d){this.d=d
this.c=this.a=null},
dbM:function dbM(d){this.a=d},
dbN:function dbN(d,e){this.a=d
this.b=e},
dbO:function dbO(d){this.a=d},
hJn(d){var w,v=d.split("@")
if(v.length>1){w=B.c7(v[1],16)
if(w!=null)return B.b0(w)}return D.x0},
hXy(d){var w,v=A.d.gL(d.split("@"))
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
hXx(d,e,f,g){var w,v,u,t,s,r=null,q=A.d.gL(d.split("@")),p=C.hJn(d)
switch(q){case"shimmer":return B.nG(A.a96,g,new C.fvL(p,A.k.G(e,6.283185307179586)/6.283185307179586*1.8-0.4))
case"golddust":return new B.an(A.W,r,A.b_,A.q,B.a([g,B.e_(B.b3(r,r,r,new C.bdG(e,f,p,r),A.au),!0,r)],x.p),r)
case"spotlight":w=Math.sin(e)
v=Math.cos(e*0.7)
u=Math.sin(e*2)
t=Math.sin(e*3)
return B.dU(B.e9(A.A,B.db(C.fLM(g,B.a4a(40,40,r)),0.75+t*0.25),1+u*0.08,r,r),new B.u(w*60,v*26))
case"goldframe":return new B.an(A.W,r,A.b_,A.q,B.a([g,B.e_(B.b3(r,r,r,new C.bdn(e,p,r),A.au),!0,r)],x.p),r)
case"twinkle":s=Math.sin(e)
w=A.k.D(0.55+s*0.45,0,1)
return B.db(B.eA(A.A,e*0.5,B.e9(A.A,g,0.8+(s+1)*0.18,r,r),r),w)
case"orbit":w=Math.cos(e)
v=Math.sin(e)
u=B.dl()
t=u.a
t.$flags&2&&B.aj(t)
t[11]=0.002
u.fv(e)
u.mB(Math.sin(e)*0.3)
return B.dU(B.fr(A.A,g,r,u,!0),new B.u(w*22,v*12))
case"rays":return new B.an(A.W,r,A.b_,A.q,B.a([B.e_(B.b3(r,r,r,new C.bma(e,f,p,r),A.au),!0,r),g],x.p),r)
case"bokeh":return new B.an(A.W,r,A.b_,A.q,B.a([B.e_(B.b3(r,r,r,new C.b8l(e,f,p,r),A.au),!0,r),g],x.p),r)
case"aurora":return new B.an(A.W,r,A.b_,A.q,B.a([B.e_(B.b3(r,r,r,new C.b7Z(e,f,p,r),A.au),!0,r),g],x.p),r)
case"velvet":return new B.an(A.W,r,A.b_,A.q,B.a([g,B.e_(B.b3(r,r,r,new C.bt2(e,p,r),A.au),!0,r)],x.p),r)
case"sparkle":return new B.an(A.W,r,A.b_,A.q,B.a([g,B.e_(B.b3(r,r,r,new C.bq5(e,f,p,r),A.au),!0,r)],x.p),r)
case"sheen":return new B.an(A.W,r,A.b_,A.q,B.a([g,B.e_(B.b3(r,r,r,new C.bpe(e,p,r),A.au),!0,r)],x.p),r)
case"filigree":return new B.an(A.W,r,A.b_,A.q,B.a([g,B.e_(B.b3(r,r,r,new C.bcI(e,p,r),A.au),!0,r)],x.p),r)
case"crest":s=Math.sin(e)
return new B.an(A.A,r,A.aa,A.f,B.a([B.bY(0,B.e_(B.e9(A.A,B.bZ(r,new B.o(r,r,r,r,r,new B.bR(A.A,0.5,A.x,r,0,B.a([p.j(0.35+s*0.12),p.j(0)],x.O),r,r),A.a6),A.bd),1.6+s*0.15,r,r),!0,r),0,0,0),B.eA(A.A,s*0.06,B.e9(A.A,g,1+s*0.05,r,r),r)],x.p),r)}return g},
fvL:function fvL(d,e){this.a=d
this.b=e},
bdG:function bdG(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bdn:function bdn(d,e,f){this.b=d
this.c=e
this.a=f},
bma:function bma(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
b8l:function b8l(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
b7Z:function b7Z(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bt2:function bt2(d,e,f){this.b=d
this.c=e
this.a=f},
bq5:function bq5(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bpe:function bpe(d,e,f){this.b=d
this.c=e
this.a=f},
bcI:function bcI(d,e,f){this.b=d
this.d=e
this.a=f},
d4I:function d4I(d,e,f,g,h){var _=this
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
fvO(d){var w=d.db
return A.a.a0(w,"marriage_sign_")&&!A.a.a0(w,"marriage_sign_placed_")&&d.b!==D.kP},
hXD(d,e){var w,v,u,t,s,r,q,p,o,n,m,l="marriage_locked_box_",k="marriage_field_",j=B.a([],x.u)
for(w=d.z,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u){t=w[u]
if(A.a.a0(t.db,l))continue
if(Math.abs(t.d+t.f*0.5-e)<0.03)j.push(t)}if(j.length<2)return
A.d.b_(j,new C.fvP())
s=A.d.gL(j).c
for(w=j.length,u=0;u<j.length;j.length===w||(0,B.L)(j),++u){t=j[u]
r=s-t.c
if(Math.abs(r)>0.0001){t.c=s
v=t.db
if(A.a.a0(v,k)){q=A.d.gL(B.aOR(v,k,"",0).split(":"))
for(v=d.z,p=v.length,o=l+q,n=0;n<p;++n){m=v[n]
if(m.db===o)m.c+=r}}}s+=t.e+0.006}},
hXC(d,e){var w,v,u,t,s,r=d.db
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
afq(d,a0,a1,a2,a3,a4){var w=0,v=B.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$afq=B.e(function(a5,a6){if(a5===1)return B.f(a6,v)
for(;;)switch(w){case 0:f=B.T(a4).k("a2<1>")
e=B.B(new B.a2(a4,new C.fo9(),f),f.k("H.E"))
w=!a2&&e.length!==0?3:4
break
case 3:w=5
return B.b(B.bW(A.dD,null,new C.foa(e),d,!0,!0,!1,A.li,!1,!1,x.N),$async$afq)
case 5:t=a6
if(t==="continue"){a1.$1(A.d.gL(e).hA())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.fVo(d),$async$afq)
case 6:s=a6
if(s==null||d.e==null){w=1
break}r=A.a.i(a3==null?"":a3)
w=r.length!==0?7:9
break
case 7:a6=r
w=8
break
case 9:w=10
return B.b(B.Kx(d,"Search states\u2026","",A.jT,"Choose state"),$async$afq)
case 10:case 8:q=a6
if(q==null||d.e==null){w=1
break}p=C.fUk(s)
if(p==null)p=A.d.gL(D.PS)
f=C.cC()
o=A.a.i(q)
if(o.length===0)o=null
n=C.cC()
m=p.e
l=C.fvQ(p.d)
k=x.u
j=B.a([C.en(A.bg,!1,4279310375,A.aC,"marriage_locked_bg",4280640491,24,A.bk,A.a4,"",1,C.cC(),l,"","",0,!1,"",0,D.be,4280172719,2,"",0,0,"",D.cg,D.lh,1,0,0)],k)
i=p.f
h=x.F
k=B.B(B.a([C.Cd(i,0.016,D.kQ,4291404327,0.8,"ring_jewel",0.028,0.42544,0.008),C.Cd(0,0.058,D.eI,4291404327,2.4,"ring_l",0.058,0.39064,0.026),C.Cd(0,0.058,D.eI,4291404327,2.4,"ring_r",0.058,0.41963999999999996,0.026)],k),h)
k.push(C.JX("HATI YA NDOA",A.L,i,32,A.u,0.048,"title",0.78,0.11,0.086))
k.push(C.JX("Hati ya Makubaliano ya Ndoa",A.L,i,12,A.a4,0.018,"subtitle",0.78,0.11,0.134))
A.d.v(k,C.fRl(0.2,0.154,0.6,4291404327,i))
A.d.v(k,C.bxQ("TAARIFA ZA WANANDOA",0.176,0.2,0.6,i))
A.d.v(k,C.a0h("Jina la Mume:","groom_name",0.11,0.218,0.78,11,i,""))
A.d.v(k,C.a0h("Jina la Mke:","bride_name",0.11,0.25,0.78,11,i,""))
A.d.v(k,C.a0h("Tarehe ya Ndoa:","tarehe",0.11,0.282,0.78,11,i,""))
A.d.v(k,C.a0h("Mahali:","bride_house",0.11,0.314,0.78,11,i,""))
A.d.v(k,C.bxQ("TAMKO LA MAKUBALIANO",0.35,0.2,0.6,i))
k.push(C.Cd(m,0.082,D.be,4291404327,1.15,"intro_frame",0.792,0.104,0.384))
g=C.cC()
k.push(C.en(A.bg,!1,i,A.aC,"marriage_field_utangulizi:"+A.k.aa(0.78,3),4280640491,9.5,A.bk,A.cs,"",0.074,g,null,"","",0,!1,"",0,D.be,4280172719,2,y.O,0,0,"",D.cg,D.cQ,0.78,0.11,0.388))
A.d.v(k,C.fRl(0.22,0.47,0.56,4291404327,i))
A.d.v(k,C.bxQ("MASHAHIDI",0.49,0.26,0.48,i))
A.d.v(k,C.hat("Shahidi wa Mume",0.11,0.528,0.37,i,4294967295))
A.d.v(k,C.hat("Shahidi wa Mke",0.52,0.528,0.37,i,4294967295))
A.d.v(k,C.a0h("Jina:","witness_mume_1_name",0.11,0.564,0.37,10,i,""))
A.d.v(k,C.a0h("Jina:","witness_mke_1_name",0.52,0.564,0.37,10,i,""))
A.d.v(k,C.bxP("witness_mume_1",0.11,0.596,0.37,i))
A.d.v(k,C.bxP("witness_mke_1",0.52,0.596,0.37,i))
A.d.v(k,C.bxQ("SAHIHI ZA WANANDOA",0.64,0.2,0.6,i))
k.push(C.JX("Mume",A.L,i,11,A.u,0.016,"mume_h",0.37,0.11,0.678))
k.push(C.JX("Mke",A.L,i,11,A.u,0.016,"mke_h",0.37,0.52,0.678))
A.d.v(k,C.bxP("mchumba_mume",0.11,0.7,0.37,i))
A.d.v(k,C.bxP("mchumba_mke",0.52,0.7,0.37,i))
A.d.v(k,C.bxQ("MWANDISHI / MSIMAMIZI",0.744,0.18,0.64,i))
A.d.v(k,C.a0h("Jina:","mwandishi",0.11,0.784,0.26,10,i,""))
A.d.v(k,C.bxP("witness_mume_2",0.38,0.784,0.26,i))
A.d.v(k,C.a0h("Tarehe:","mchumba_mume_tarehe",0.65,0.784,0.24,10,i,""))
h=B.B(C.fRl(0.22,0.83,0.56,4291404327,i),h)
h.push(C.JX("NGMY",A.L,i,13,A.u,0.022,"ngmy_mark",0.6,0.2,0.846))
h.push(C.JX("Nakala ya Hati",A.L,4291404327,9,A.a4,0.016,"ngmy_sub",0.6,0.2,0.866))
A.d.v(k,h)
A.d.v(j,k)
a0.$1(C.B9(null,null,null,null,D.nW,5,!1,"marriage_agreement",null,null,null,null,f,null,!1,o,p.b,null,null,B.a([C.rf(m,null,0,0,j,n,D.pS,"","","Hati ya Ndoa",D.dd)],x.g),"marriage_"+p.a,null,!1,null))
case 1:return B.h(u,v)}})
return B.i($async$afq,v)},
fvP:function fvP(){},
fo9:function fo9(){},
foa:function foa(d){this.a=d},
fo7:function fo7(d){this.a=d},
fo8:function fo8(d){this.a=d},
hMo(d){var w=d.a
if(1===w)return"underline"
if(4===w)return"lineThrough"
return"none"},
hMn(d){var w=d==null?null:J.k(d)
switch(w==null?"none":w){case"underline":return A.mu
case"lineThrough":return A.za
default:return A.aC}},
en(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){return new C.eG(o,a7,a9,b0,a8,n,a2,j,l,k,g,f,d,p,w,i,a0,a1,v,e,h,s,a6,a3,r,q,m,u,a5,t,a4)},
hcx(d){var w,v,u=J.k(d==null?"fade":d)
for(w=0;w<22;++w){v=D.PE[w]
if(v.b===u)return v}return D.dd},
hIM(d){var w,v,u=J.k(d==null?"text":d)
for(w=0;w<6;++w){v=D.cM7[w]
if(v.b===u)return v}return D.cQ},
hP8(d){var w,v,u=J.k(d==null?"rectangle":d)
for(w=0;w<7;++w){v=D.d9l[w]
if(v.b===u)return v}return D.be},
rf(d,e,f,g,h,i,j,k,l,m,n){return new C.lA(i,m,k,j,d,e,n,g,l,f,h==null?B.a([],x.u):h)},
h3e(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=d.h(0,"id")
l=J.k(l==null?"":l)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"notes")
v=J.k(v==null?"":v)
u=C.hKM(d.h(0,"layout"))
t=B.aN(d.h(0,"background"))
t=t==null?m:A.k.O(t)
if(t==null)t=4294967295
s=B.aN(d.h(0,"backgroundEnd"))
s=s==null?m:A.k.O(s)
r=C.hcx(d.h(0,"transition"))
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
n=B.cD(n,new C.cbF(),n.$ti.k("H.E"),x.F)
n=B.B(n,B.a3(n).k("H.E"))}return C.rf(t,s,o,q,n==null?B.a([],x.u):n,l,u,v,p,w,r)},
hKM(d){var w,v,u=J.k(d==null?"titleContent":d)
for(w=0;w<9;++w){v=D.anm[w]
if(v.b===u)return v}return D.mp},
B9(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,a0,a1,a2,a3,a4){var w=a4==null?new B.S(Date.now(),0,!1):a4
return new C.hZ(p,t,a1,h,i,w,a0==null?B.a([C.rf(4294967295,null,0,0,null,C.cC(),D.pS,"","","",D.dd)],x.g):a0,k,s,a2,a3,d,v,u,q,j,r,f,g,e,m,o,n,l)},
V4(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4="deckKind",a5=a6.h(0,"id")
a5=J.k(a5==null?"":a5)
w=a6.h(0,"name")
w=J.k(w==null?"Untitled Presentation":w)
v=a6.h(0,"themeId")
v=J.k(v==null?"office_blue":v)
u=C.hGX(a6.h(0,"aspectRatio"))
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
j=J.y(a6.h(0,"cinematic"),!0)
i=J.y(a6.h(0,"loop"),!0)
h=a6.h(0,"aiOutlineJson")
h=h==null?a3:J.k(h)
g=x.c
f=g.a(a6.h(0,"aiSlideIds"))
if(f==null)f=a3
else{f=J.b6(f,new C.cbs(),x.N)
f=B.B(f,f.$ti.k("ai.E"))}e=g.a(a6.h(0,"aiExtras"))
if(e==null)e=a3
else{e=J.b6(e,new C.cbt(),x.N)
e=B.B(e,e.$ti.k("ai.E"))}d=a6.h(0,"finaleStyle")
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
g=B.cD(g,new C.cbu(),g.$ti.k("H.E"),x.bt)
g=B.B(g,B.a3(g).k("H.E"))}return C.B9(n,e,h,f,u,t,j,r,a2,d,a1,a0,a5,k,i,q,w,l,m,g==null?B.a([C.rf(4294967295,a3,0,0,a3,C.cC(),D.pS,"","","",D.dd)],x.g):g,v,p,o,s)},
kr(d){return d==="marriage_agreement"||d==="hati_kuhowa"||d==="hati_kuhoweya"||d==="hati_malipo_awamu"||d==="hati_kiapo_uongozi"},
hGX(d){var w,v,u=J.k(d==null?"landscape169":d)
for(w=0;w<2;++w){v=D.daa[w]
if(v.b===u)return v}return D.C8},
cC(){var w=Date.now(),v=$.iX
$.iX=v+1
return""+1000*w+"_"+v},
cbW(d,e,f){var w,v,u,t,s,r,q,p=null,o="Click to add title",n=4280640491,m=4280172719,l=4279310375
d.d=e
A.d.a8(d.z)
if(e!==D.C9){d.e=f.f.l()
w=f.r
d.f=w==null?p:w.l()}switch(e.a){case 0:break
case 1:w=d.z
v=C.cC()
v=C.en(A.L,!1,f.d.l(),A.aC,"",n,40,A.bk,A.u,"",0.2,v,p,"","",0,!1,"",0,D.be,m,2,o,0,0,"",D.cg,D.cQ,0.84,0.08,0.3)
u=C.cC()
A.d.v(w,B.a([v,C.en(A.L,!1,f.e.l(),A.aC,"",n,20,A.bk,A.cs,"",0.12,u,p,"","",0,!1,"",0,D.be,m,2,"Click to add subtitle",0,0,"",D.cg,D.cQ,0.76,0.12,0.58)],x.u))
break
case 2:w=d.z
v=C.cC()
v=C.en(A.bg,!1,f.d.l(),A.aC,"",n,32,A.bk,A.u,"",0.14,v,p,"","",0,!1,"",0,D.be,m,2,o,0,0,"",D.cg,D.cQ,0.88,0.06,0.06)
u=C.cC()
A.d.v(w,B.a([v,C.en(A.bg,!0,f.e.l(),A.aC,"",n,20,A.bk,A.cs,"",0.68,u,p,"","",0,!1,"",0,D.be,m,2,"\u2022 Tap text to select, then Edit to type\n\u2022 Use Format for size & color\n\u2022 Add images and shapes from Insert",0,0,"",D.cg,D.cQ,0.88,0.06,0.24)],x.u))
break
case 3:w=d.z
v=C.cC()
v=C.en(A.bg,!1,f.d.l(),A.aC,"",n,30,A.bk,A.u,"",0.12,v,p,"","",0,!1,"",0,D.be,m,2,"Two Column Slide",0,0,"",D.cg,D.cQ,0.88,0.06,0.06)
u=C.cC()
t=f.e
u=C.en(A.bg,!0,t.l(),A.aC,"",n,18,A.bk,A.a4,"",0.7,u,p,"","",0,!1,"",0,D.be,m,2,"Left column\n\n\u2022 Point A\n\u2022 Point B",0,0,"",D.cg,D.cQ,0.42,0.06,0.22)
s=C.cC()
A.d.v(w,B.a([v,u,C.en(A.bg,!0,t.l(),A.aC,"",n,18,A.bk,A.a4,"",0.7,s,p,"","",0,!1,"",0,D.be,m,2,"Right column\n\n\u2022 Point C\n\u2022 Point D",0,0,"",D.cg,D.cQ,0.42,0.52,0.22)],x.u))
break
case 4:w=f.c
d.e=w.l()
d.f=w.j(0.85).l()
A.d.K(d.z,C.en(A.L,!1,4294967295,A.aC,"",n,42,A.bk,A.u,"",0.2,C.cC(),p,"","",0,!1,"",0,D.be,m,2,"Section Header",0,0,"",D.cg,D.cQ,0.84,0.08,0.38))
break
case 5:w=d.z
v=C.cC()
v=C.en(A.bg,!1,f.d.l(),A.aC,"",n,30,A.bk,A.u,"",0.12,v,p,"","",0,!1,"",0,D.be,m,2,"Compare",0,0,"",D.cg,D.cQ,0.88,0.06,0.06)
u=C.cC()
t=f.c
u=C.en(A.bg,!1,l,A.aC,"",t.j(0.12).l(),24,A.bk,A.a4,"",0.68,u,p,"","",0,!1,"",0,D.be,t.l(),2,"",0,0,"",D.cg,D.f_,0.42,0.06,0.22)
s=C.cC()
r=f.e
s=C.en(A.bg,!1,r.l(),A.aC,"",n,20,A.bk,A.O,"",0.6,s,p,"","",0,!1,"",0,D.be,m,2,"Option A",0,0,"",D.cg,D.cQ,0.38,0.08,0.26)
q=C.cC()
t=C.en(A.bg,!1,l,A.aC,"",t.j(0.06).l(),24,A.bk,A.a4,"",0.68,q,p,"","",0,!1,"",0,D.be,t.j(0.5).l(),2,"",0,0,"",D.cg,D.f_,0.42,0.52,0.22)
q=C.cC()
A.d.v(w,B.a([v,u,s,t,C.en(A.bg,!1,r.l(),A.aC,"",n,20,A.bk,A.O,"",0.6,q,p,"","",0,!1,"",0,D.be,m,2,"Option B",0,0,"",D.cg,D.cQ,0.38,0.54,0.26)],x.u))
break
case 6:w=d.z
v=C.cC()
v=C.en(A.L,!1,f.d.l(),A.aC,"",n,36,A.bk,A.u,"",0.35,v,p,"","",0,!1,"",0,D.be,m,2,"TERM / QUESTION",0,0,"",D.cg,D.cQ,0.8,0.1,0.12)
u=C.cC()
A.d.v(w,B.a([v,C.en(A.L,!1,f.e.l(),A.aC,"",n,22,A.bk,A.cs,"",0.35,u,p,"","",0,!1,"",0,D.be,m,2,"Definition or answer \u2014 flip mentally when presenting",0,0,"",D.cg,D.cQ,0.8,0.1,0.52)],x.u))
break
case 7:w=d.z
v=C.cC()
v=C.en(A.bg,!1,f.d.l(),A.aC,"",n,28,A.bk,A.u,"",0.18,v,p,"","",0,!1,"",0,D.be,m,2,"Quiz Question",0,0,"",D.cg,D.cQ,0.88,0.06,0.06)
u=C.cC()
A.d.v(w,B.a([v,C.en(A.bg,!1,f.e.l(),A.aC,"",n,20,A.bk,A.a4,"",0.62,u,p,"","",0,!1,"",0,D.be,m,2,"A) Answer choice\nB) Answer choice\nC) Answer choice\nD) Answer choice",0,0,"",D.cg,D.cQ,0.84,0.08,0.28)],x.u))
break
case 8:w=d.z
v=C.cC()
v=C.en(A.bg,!1,f.d.l(),A.aC,"",n,26,A.bk,A.u,"",0.1,v,p,"","",0,!1,"",0,D.be,m,2,"Worksheet / Assignment",0,0,"",D.cg,D.cQ,0.88,0.06,0.04)
u=C.cC()
A.d.v(w,B.a([v,C.en(A.bg,!1,f.e.l(),A.aC,"",n,18,A.bk,A.a4,"",0.78,u,p,"","",0,!1,"",0,D.be,m,2,"Name: _______________\nDate: _______________\n\n1. _________________________________\n\n2. _________________________________\n\n3. _________________________________",0,0,"",D.cg,D.cQ,0.88,0.06,0.16)],x.u))
break}},
hyD(d){return A.d.dM(D.a1r,new C.cbX(d),new C.cbY())},
hyA(d){var w,v,u,t,s,r,q,p
if(A.a.i(d).length===0)return B.a([],x.D)
try{w=A.R.aH(0,d,null)
if(!x.j.b(w)){t=B.a([],x.D)
return t}v=B.a([],x.D)
for(t=J.aX(w),s=x.N,r=x.z,q=x.f;t.C();){u=t.gU(t)
if(!q.b(u))continue
try{J.cf(v,C.V4(B.a1(u,s,r)))}catch(p){}}return v}catch(p){t=B.a([],x.D)
return t}},
fNT(d,e){var w,v,u,t=B.V(x.N,x.I),s=new C.cbS(t)
for(w=J.aX(d);w.C();)s.$1(w.gU(w))
for(w=e.length,v=0;v<e.length;e.length===w||(0,B.L)(e),++v)s.$1(e[v])
w=t.$ti.k("bc<2>")
u=B.B(new B.bc(t,w),w.k("H.E"))
A.d.b_(u,new C.cbR())
return u},
h3h(d,e){var w,v,u=d.length
if(u===0)return e
w=e.length
if(w===0)return d
v=new C.cbN()
if(u!==w)return u>=w?d:e
return v.$1(d).ca(v.$1(e))?d:e},
apQ(d){return C.hyy(d)},
hyy(d){var w=0,v=B.j(x.R),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$apQ=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=A.a.i(d.toLowerCase())
l=new C.cbQ()
k=x.D
j=B.a([],k)
t=4
g=l
w=7
return B.b(B.a1u(m),$async$apQ)
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
return B.b(B.aA(),$async$apQ)
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
case 11:o=l.$1($.h3g.h(0,m))
n=C.fNT(C.fNT(j,r),o)
if(n.length===0){u=C.h3h(C.h3h(j,r),o)
w=1
break}u=n
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$apQ,v)},
cbM(d){return C.hyx(d)},
hyx(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o
var $async$cbM=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.aA(),$async$cbM)
case 7:r=f
q=r.rU("ngmy_slides_deleted_"+A.a.i(d.toLowerCase()))
if(q==null)q=A.T
q=B.kx(q,B.T(q).c)
u=q
w=1
break
t=2
w=6
break
case 4:t=3
o=s.pop()
u=B.aW(x.N)
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$cbM,v)},
b_C(d,e){return C.hyz(d,e)},
hyz(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m
var $async$b_C=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.aA(),$async$b_C)
case 6:s=g
q=s.rU("ngmy_slides_deleted_"+A.a.i(d.toLowerCase()))
if(q==null)q=B.a([],x.s)
A.d.K(q,e)
r=q
p=A.a.i(d.toLowerCase())
o=J.ad(r)>500?J.KG(r,J.ad(r)-500):r
w=7
return B.b(s.ar("StringList","ngmy_slides_deleted_"+p,o),$async$b_C)
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
return B.i($async$b_C,v)},
V5(d,e){return C.hyB(d,e)},
hyB(a3,a4){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$V5=B.e(function(a5,a6){if(a5===1){s.push(a6)
w=t}for(;;)switch(w){case 0:a0=A.a.i(a3.toLowerCase())
if(J.ad(a0)===0){w=1
break}p=$.h3f.h(0,a0)
w=p==null?3:4
break
case 3:w=5
return B.b(C.apQ(a3),$async$V5)
case 5:p=a6
case 4:w=6
return B.b(C.cbM(a3),$async$V5)
case 6:o=a6
n=B.V(x.N,x.I)
for(m=J.aX(p);m.C();){l=m.gU(m)
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
l=m.k("a2<H.E>")
e=B.B(new B.a2(new B.bc(n,m),new C.cbT(o),l),l.k("H.E"))
A.d.b_(e,new C.cbU())
$.h3f.n(0,a0,e)
n=B.T(e).k("K<1,a4<n,@>>")
n=B.B(new B.K(e,new C.cbV(),n),n.k("ai.E"))
r=A.R.ao(n,null)
$.h3g.n(0,a0,r)
t=8
w=11
return B.b(B.agd(a0,r),$async$V5)
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
return B.b(B.aA(),$async$V5)
case 16:q=a6
w=17
return B.b(q.ar("String","ngmy_slides_decks_"+A.a.i(a3.toLowerCase()),r),$async$V5)
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
return B.i($async$V5,v)},
I6:function I6(d,e){this.a=d
this.b=e},
apO:function apO(d,e){this.a=d
this.b=e},
us:function us(d,e){this.a=d
this.b=e},
mo:function mo(d,e){this.a=d
this.b=e},
hw:function hw(d,e){this.a=d
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
cbG:function cbG(){},
cbH:function cbH(){},
cbF:function cbF(){},
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
cbv:function cbv(){},
cbw:function cbw(){},
cbs:function cbs(){},
cbt:function cbt(){},
cbu:function cbu(){},
jA:function jA(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
cbX:function cbX(d){this.a=d},
cbY:function cbY(){},
cbS:function cbS(d){this.a=d},
cbR:function cbR(){},
cbN:function cbN(){},
cbO:function cbO(){},
cbP:function cbP(){},
cbQ:function cbQ(){},
cbT:function cbT(d){this.a=d},
cbU:function cbU(){},
cbV:function cbV(){},
hXO(d,e){var w=x.N,v=B.V(w,x.F)
w=new C.fwn(e,v,d,B.aW(w))
w.$1(new C.fwj())
w.$1(new C.fwk())
w.$1(new C.fwl())
w.$1(new C.fwm())
return v},
fwn:function fwn(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fwj:function fwj(){},
fwk:function fwk(){},
fwl:function fwl(){},
fwm:function fwm(){},
b_z:function b_z(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cbB:function cbB(d){this.a=d},
cbA:function cbA(){},
cbC:function cbC(){},
cbD:function cbD(d,e){this.a=d
this.b=e},
cbE:function cbE(d){this.a=d},
an0:function an0(d,e){this.c=d
this.a=e},
bhu:function bhu(d,e){var _=this
_.d=$
_.bq$=d
_.a7$=e
_.c=_.a=null},
dDo:function dDo(){},
aJL:function aJL(){},
cbJ(d,e,f){var w=0,v=B.j(x.y),u,t
var $async$cbJ=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:if(f){u=!0
w=1
break}t=A.a.i(e)
if(t.length===0){if(d.e!=null)d.I(x.q).f.R(D.eN1)
u=!1
w=1
break}u=B.kN(!1,d,t,!1,null,A.a4_,null)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$cbJ,v)},
hyv(d){var w=A.d.bc(D.Gs,new C.cbK(d))
if(w<0)return!0
return w>=4},
hyw(d){var w=A.d.bc($.bCg(),new C.cbL(d))
if(w<0)return!0
return w>=5},
cbK:function cbK(d){this.a=d},
cbL:function cbL(d){this.a=d},
hZt(d,e,f){var w,v=null,u=""+f,t="ngmy-pdf-"+A.a.gX(d)+"-"+u,s=f>0?d+"#page="+u:d
$.ye()
$.q1().pz(t,new C.fzb(s),!0)
u=B.a([B.Dn(v,A.pW,t)],x.p)
if(e.length!==0){w=B.m(4)
u.push(B.ao(v,B.p(v,B.d(e,v,v,v,v,v,v,D.eXb,v,v,v),A.f,v,v,new B.o(A.aX,v,v,w,v,v,A.n),v,v,v,v,A.mZ,v,v,v),v,v,4,v,4,v))}return new B.an(A.W,v,A.b_,A.q,u,v)},
fzb:function fzb(d){this.a=d},
hZ4(){return C.fUG()},
hW1(){return C.bAc()},
hY4(){return C.fUx()},
aNW(d,e,f){var w=0,v=B.j(x.H),u
var $async$aNW=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:w=e==="__ngmy_slides_pdf_staged__"?3:4
break
case 3:w=5
return B.b(C.fyh(d,f),$async$aNW)
case 5:w=1
break
case 4:if(d.e!=null)d.I(x.q).f.R(B.b2(null,null,null,null,null,A.q,null,B.d(e,null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$aNW,v)},
fyh(d,e){var w=0,v=B.j(x.H),u
var $async$fyh=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:u=$.byn
if(u==null)u=e+".pdf"
w=2
return B.b(B.bW(A.K,null,new C.fyi(u,e==="Invoice"),d,!0,!1,!0,null,!1,!1,x.H),$async$fyh)
case 2:return B.h(null,v)}})
return B.i($async$fyh,v)},
fyi:function fyi(d,e){this.a=d
this.b=e},
aci:function aci(d,e,f){this.c=d
this.d=e
this.a=f},
el4:function el4(d,e){this.a=d
this.b=e},
el5:function el5(d,e){this.a=d
this.b=e},
el6:function el6(d,e){this.a=d
this.b=e},
el7:function el7(d){this.a=d},
acA:function acA(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
b_y(d,e,f,g,h,i,j,k,l,m,n,o){return new C.b_x(g,m,f,d,e,h,l,k,j,o,i,null)},
hfs(d){return B.cm(new C.fwi(d))},
fUI(d){switch(d.a){case 0:return"\u23ed\ufe0f"
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
hZc(d){if(d===D.cg)return"None"
return C.fUI(d)},
byT(d,e,f,g){return C.hPf(d,e,f,g)},
hPf(d,e,f,g){var w=0,v=B.j(x.H),u,t,s
var $async$byT=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:s={}
if(d.e==null){w=1
break}t=B.a5(d,!0)
if($.fRE&&t.pi())t.eI()
$.fRE=!0
s.a=null
w=3
return B.b(B.hR(A.bh,!0,"Animation preview",d,new C.fh3(s,e,g,f),null,A.eE,!0,x.H),$async$byT)
case 3:s=s.a
if(s!=null)s.a9(0)
$.fRE=!1
case 1:return B.h(u,v)}})
return B.i($async$byT,v)},
fIw(d,e,f){var w=0,v=B.j(x.H),u,t,s,r
var $async$fIw=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:e.$0()
if(d.e==null){w=1
break}t=A.k.D(B.aI(d,A.bS,x.w).w.a.a*0.88,280,440)
s=f===D.cg
r=s?"\u23ed\ufe0f None \u2014 no slide transition":C.fUI(f)+" Slide transition preview"
s=s?Af.EK:A.uS
w=3
return B.b(C.byT(d,s,new B.a6(t,t*0.56,B.bw(B.m(14),new C.aHm(f,null),A.aq),null),r),$async$fIw)
case 3:case 1:return B.h(u,v)}})
return B.i($async$fIw,v)},
heL(d,e,f){var w,v,u=null,t=A.cq.av(0,A.k.D(e,0,1))
switch(d.a){case 0:return f
case 1:case 13:case 18:return B.db(f,t)
case 2:case 17:return B.dU(B.db(f,t),new B.u((1-t)*48,0))
case 3:return B.dU(B.db(f,t),new B.u(-(1-t)*48,0))
case 4:case 21:return B.dU(B.db(f,t),new B.u(0,(1-t)*36))
case 5:return B.dU(B.db(f,t),new B.u(0,-(1-t)*36))
case 6:case 16:return B.e9(A.A,B.db(f,t),0.5+t*0.5,u,u)
case 7:return B.e9(A.A,B.db(f,t),1.4-t*0.4,u,u)
case 8:w=B.dl()
v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
w.fv((1-t)*1.2)
return B.fr(A.A,B.db(f,t),u,w,!0)
case 9:w=B.dl()
v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
w.jN((1-t)*1.2)
return B.fr(A.A,B.db(f,t),u,w,!0)
case 10:case 19:w=B.dl()
v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.002
w.mB((1-t)*0.8)
v=0.6+t*0.4
w.jx(v,v,v,1)
return B.fr(A.A,B.db(f,t),u,w,!0)
case 11:case 12:case 14:case 15:case 20:return B.dU(B.db(f,t),new B.u((1-t)*24,0))}},
bBM(d,e,f){var w=0,v=B.j(x.H),u,t,s,r
var $async$bBM=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:e.$0()
if(d.e==null){w=1
break}t=A.k.D(B.aI(d,A.bS,x.w).w.a.a*0.88,300,440)
s=f===D.cg
r=s?"\u23ed\ufe0f None \u2014 no element animation":C.fUI(f)+" Element animation preview"
s=s?Af.EK:A.uS
w=3
return B.b(C.byT(d,s,new B.a6(t,t*0.62,B.bw(B.m(14),new C.ay6(f,null),A.aq),null),r),$async$bBM)
case 3:case 1:return B.h(u,v)}})
return B.i($async$bBM,v)},
hZb(d){var w,v,u,t,s=$.aeT.W(0,d)
if(s!=null){$.aeT.n(0,d,s)
return s}w=A.cB.aJ(A.a.b0(d,A.a.cJ(d,",")+1))
$.aeT.n(0,d,w)
v=$.fSr=$.fSr+w.length
u=B.a3($.aeT).k("cz<1>")
for(;;){if(!(v>41943040&&$.aeT.a>1))break
t=new B.cz($.aeT,u).gag(0)
if(!t.C())B.ba(B.fD())
v-=$.aeT.W(0,t.gU(0)).length
$.fSr=v}return w},
hYT(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=B.af("\\*([^*]+)\\*|\\^([^^]+)\\^|~([^~]+)~",!0,!1,!1,!1).kP(0,d),j=B.B(k,B.a3(k).k("H.E"))
if(j.length===0)return l
w=e.r
if(w==null)w=24
v=B.a([],x.aF)
for(k=j.length,u=w*0.62,t=w*2.4,s=w*1.6,r=0,q=0;q<j.length;j.length===k||(0,B.L)(j),++q){p=j[q].b
o=p.index
if(o>r){n=A.a.ap(d,r,o)
m=f.$1(e)
v.push(new B.eo(n,l,l,A.cO,l,l,l,l,l,l,m))}n=p[1]
if(n!=null){m=f.$1(e.RZ(s,A.u))
v.push(new B.eo(n,l,l,A.cO,l,l,l,l,l,l,m))}else{n=p[2]
if(n!=null){m=f.$1(e.RZ(t,A.u))
v.push(new B.eo(n,l,l,A.cO,l,l,l,l,l,l,m))}else{n=p[3]
m=f.$1(e.RZ(u,A.cs))
v.push(new B.eo(n,l,l,A.cO,l,l,l,l,l,l,m))}}r=o+p[0].length}if(r<d.length){k=A.a.b0(d,r)
v.push(B.dq(l,l,l,l,l,l,l,l,l,f.$1(e),k))}return v},
a1t(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=x.v
switch(d){case"circle":m=new B.aQ($.X().r,A.ap,n,n,B.a([],m))
m.E(new B.kG(e))
return m
case"rounded":m=new B.aQ($.X().r,A.ap,n,n,B.a([],m))
w=e.gee()*0.18
m.E(new B.iT(B.bz(e,new B.aV(w,w))))
return m
case"triangle":m=new B.aQ($.X().r,A.ap,n,n,B.a([],m))
m.E(new B.b5(e.gbQ().a,e.b))
w=e.d
m.E(new B.ap(e.c,w))
m.E(new B.ap(e.a,w))
m.E(new B.bE())
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
v.e=null}}v.E(new B.bE())
return v
case"diamond":m=new B.aQ($.X().r,A.ap,n,n,B.a([],m))
m.E(new B.b5(e.gbQ().a,e.b))
m.E(new B.ap(e.c,e.gbQ().b))
m.E(new B.ap(e.gbQ().a,e.d))
m.E(new B.ap(e.a,e.gbQ().b))
m.E(new B.bE())
return m
case"arch":m=new B.aQ($.X().r,A.ap,n,n,B.a([],m))
w=e.a
u=e.d
m.E(new B.b5(w,u))
t=e.c
s=(t-w)/2
p=e.b+s
m.E(new B.ap(w,p))
m.b7R(new B.u(t,p),new B.aV(s,s))
m.E(new B.ap(t,u))
m.E(new B.bE())
return m
default:m=new B.aQ($.X().r,A.ap,n,n,B.a([],m))
m.E(new B.nW(e))
return m}},
ftS(d,e,f){return B.cm(new C.ftT(D.eFI.t(0,d),d,f,e))},
b_x:function b_x(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
cbz:function cbz(d){this.a=d},
cby:function cby(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cbx:function cbx(){},
b_u:function b_u(d,e){this.b=d
this.a=e},
fwi:function fwi(d){this.a=d},
fwh:function fwh(d,e){this.a=d
this.b=e},
fh3:function fh3(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fh1:function fh1(d){this.a=d},
fh2:function fh2(d,e){this.a=d
this.b=e},
aHm:function aHm(d,e){this.c=d
this.a=e},
bsz:function bsz(d,e){var _=this
_.d=$
_.bq$=d
_.a7$=e
_.c=_.a=null},
f_q:function f_q(d,e,f){this.a=d
this.b=e
this.c=f},
aHZ:function aHZ(d,e){this.b=d
this.a=e},
U6:function U6(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bhG:function bhG(d,e){var _=this
_.d=$
_.bq$=d
_.a7$=e
_.c=_.a=null},
dOZ:function dOZ(d){this.a=d},
dOY:function dOY(d){this.a=d},
dOX:function dOX(d){this.a=d},
I5:function I5(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cbr:function cbr(d){this.a=d},
cbq:function cbq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ay6:function ay6(d,e){this.c=d
this.a=e},
bcc:function bcc(){this.d=0
this.c=this.a=null},
d1X:function d1X(d){this.a=d},
d1W:function d1W(d){this.a=d},
a6O:function a6O(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bik:function bik(d,e){var _=this
_.d=null
_.bq$=d
_.a7$=e
_.c=_.a=null},
e8H:function e8H(d,e,f){this.a=d
this.b=e
this.c=f},
aYt:function aYt(d,e,f,g){var _=this
_.c=d
_.e=e
_.f=f
_.a=g},
bdl:function bdl(d,e,f){this.b=d
this.c=e
this.a=f},
bob:function bob(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
ePK:function ePK(){},
ftT:function ftT(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bpb:function bpb(d,e,f){this.b=d
this.c=e
this.a=f},
aJZ:function aJZ(){},
aKu:function aKu(){},
aLP:function aLP(){},
fxi(){var w=0,v=B.j(x.a6),u,t,s,r
var $async$fxi=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.wN.c4().Lp(D.d7r,A.ts,!0),$async$fxi)
case 3:r=e
if(r==null||J.ck(r.a)){u=null
w=1
break}t=J.fn(r.a)
s=t.c
if(s==null)throw B.U("That file could not be opened. Try another file.")
if(s.length>8388608)throw B.U("That file is too big. Use a file under 8 MB.")
u=C.hYN(t.b,s)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fxi,v)},
hYN(d,e){var w,v=d.toLowerCase()
if(A.a.c9(v,".pdf"))return new C.a76(d,new B.a_6(A.cS.gcv().aJ(e),"application/pdf"),"")
if(A.a.c9(v,".docx")){w=C.hQR(e)
if(A.a.i(w).length===0)throw B.U("No readable words were found in that Word file.")
return new C.a76(d,null,w.length>6e4?A.a.ap(w,0,6e4):w)}w=A.c4.Kd(0,e,!0)
if(A.a.i(w).length===0)throw B.U("That file is empty.")
return new C.a76(d,null,w.length>6e4?A.a.ap(w,0,6e4):w)},
hQR(d){var w,v,u,t,s,r,q,p,o=null,n=new C.cur().cFW(B.r_(d,A.hS,o,o),o,o,!1).cHC(0,"word/document.xml")
if(n==null)return""
w=n.cPz()
v=A.c4.Kd(0,w==null?$.hhG():w,!0).split("</w:p>")
u=new B.fc("")
for(w=v.length,t=x.N,s=0;s<w;++s){r=v[s]
q=B.af("<w:t[^>]*>([^<]*)</w:t>",!0,!1,!1,!1).kP(0,r)
p=A.a.i(B.cD(q,new C.fjS(),B.a3(q).k("H.E"),t).fV(0))
if(p.length!==0){q=B.aJ(p,"&lt;","<")
q=B.aJ(q,"&gt;",">")
q=B.aJ(q,"&quot;",'"')
q=B.aJ(q,"&apos;","'")
q=B.aJ(q,"&amp;","&")+"\n"
u.a+=q}}w=u.a
return w.charCodeAt(0)==0?w:w},
a76:function a76(d,e,f){this.a=d
this.b=e
this.c=f},
fjS:function fjS(){},
hyC(d,e,f,g,h,i,j,k,l){return new C.Nb(l,e,d,g,f,i,h,j,k,null)},
Nb:function Nb(d,e,f,g,h,i,j,k,l,m){var _=this
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
aCY:function aCY(d,e,f,g,h,i,j,k,l){var _=this
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
eri:function eri(d){this.a=d},
erg:function erg(){},
erh:function erh(d){this.a=d},
enG:function enG(){},
enH:function enH(){},
enI:function enI(d,e){this.a=d
this.b=e},
epg:function epg(d){this.a=d},
ep4:function ep4(){},
ep5:function ep5(){},
en3:function en3(){},
eqo:function eqo(d){this.a=d},
ere:function ere(d,e){this.a=d
this.b=e},
epe:function epe(d,e){this.a=d
this.b=e},
er1:function er1(d){this.a=d},
er2:function er2(){},
er3:function er3(){},
er4:function er4(d){this.a=d},
er5:function er5(){},
ems:function ems(d){this.a=d},
erf:function erf(){},
eon:function eon(d,e){this.a=d
this.b=e},
emq:function emq(d){this.a=d},
emr:function emr(d){this.a=d},
eoK:function eoK(d){this.a=d},
eoL:function eoL(d,e,f){this.a=d
this.b=e
this.c=f},
eoM:function eoM(d){this.a=d},
eom:function eom(){},
eol:function eol(d){this.a=d},
eoj:function eoj(){},
eoi:function eoi(d){this.a=d},
eok:function eok(){},
enC:function enC(d){this.a=d},
enD:function enD(d){this.a=d},
eot:function eot(d){this.a=d},
eoo:function eoo(d){this.a=d},
eop:function eop(d){this.a=d},
eoq:function eoq(d){this.a=d},
eor:function eor(d){this.a=d},
eos:function eos(d){this.a=d},
eou:function eou(d,e){this.a=d
this.b=e},
emu:function emu(){},
emv:function emv(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eoF:function eoF(){},
eoG:function eoG(d,e){this.a=d
this.b=e},
eoD:function eoD(d,e,f){this.a=d
this.b=e
this.c=f},
eoE:function eoE(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eox:function eox(d,e,f){this.a=d
this.b=e
this.c=f},
eoy:function eoy(d,e,f){this.a=d
this.b=e
this.c=f},
eoz:function eoz(d){this.a=d},
eoA:function eoA(d,e){this.a=d
this.b=e},
eoB:function eoB(d,e){this.a=d
this.b=e},
eoC:function eoC(d,e){this.a=d
this.b=e},
eow:function eow(d,e){this.a=d
this.b=e},
eoI:function eoI(d){this.a=d},
eoJ:function eoJ(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eoH:function eoH(d){this.a=d},
ep_:function ep_(){},
ep0:function ep0(){},
ep1:function ep1(){},
ep2:function ep2(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eoX:function eoX(d){this.a=d},
eoZ:function eoZ(){},
eoY:function eoY(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
eoV:function eoV(d,e,f){this.a=d
this.b=e
this.c=f},
eoW:function eoW(d,e){this.a=d
this.b=e},
ep3:function ep3(){},
eov:function eov(d,e){this.a=d
this.b=e},
emL:function emL(){},
emM:function emM(d,e,f){this.a=d
this.b=e
this.c=f},
emN:function emN(d){this.a=d},
emO:function emO(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
emK:function emK(d){this.a=d},
ep9:function ep9(d){this.a=d},
ep8:function ep8(d,e){this.a=d
this.b=e},
ep7:function ep7(d,e){this.a=d
this.b=e},
ep6:function ep6(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
epa:function epa(d,e){this.a=d
this.b=e},
elp:function elp(d,e){this.a=d
this.b=e},
emJ:function emJ(d,e){this.a=d
this.b=e},
emH:function emH(d){this.a=d},
epi:function epi(d,e,f){this.a=d
this.b=e
this.c=f},
emD:function emD(d,e){this.a=d
this.b=e},
emC:function emC(d){this.a=d},
eph:function eph(d,e,f){this.a=d
this.b=e
this.c=f},
emt:function emt(d){this.a=d},
en4:function en4(){},
er_:function er_(d,e){this.a=d
this.b=e},
er0:function er0(d,e,f){this.a=d
this.b=e
this.c=f},
eqp:function eqp(d,e,f){this.a=d
this.b=e
this.c=f},
elq:function elq(d){this.a=d},
eln:function eln(d,e){this.a=d
this.b=e},
eld:function eld(d,e){this.a=d
this.b=e},
ela:function ela(d){this.a=d},
el9:function el9(d,e){this.a=d
this.b=e},
elb:function elb(d,e){this.a=d
this.b=e},
emF:function emF(d){this.a=d},
emG:function emG(d,e){this.a=d
this.b=e},
emE:function emE(d){this.a=d},
elS:function elS(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
elT:function elT(d,e){this.a=d
this.b=e},
elX:function elX(d,e){this.a=d
this.b=e},
elY:function elY(d){this.a=d},
elV:function elV(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
elW:function elW(d){this.a=d},
elU:function elU(){},
elR:function elR(d,e,f){this.a=d
this.b=e
this.c=f},
eoU:function eoU(d,e){this.a=d
this.b=e},
er8:function er8(d){this.a=d},
er9:function er9(d,e){this.a=d
this.b=e},
era:function era(d){this.a=d},
erb:function erb(d,e,f){this.a=d
this.b=e
this.c=f},
er7:function er7(d){this.a=d},
eqF:function eqF(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eqE:function eqE(d,e,f){this.a=d
this.b=e
this.c=f},
eqD:function eqD(){},
eqC:function eqC(d,e,f){this.a=d
this.b=e
this.c=f},
eqB:function eqB(d,e){this.a=d
this.b=e},
eqy:function eqy(d,e,f){this.a=d
this.b=e
this.c=f},
eqw:function eqw(d){this.a=d},
eqx:function eqx(d){this.a=d},
eqA:function eqA(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eqz:function eqz(d){this.a=d},
eny:function eny(d,e){this.a=d
this.b=e},
enx:function enx(d,e){this.a=d
this.b=e},
eqq:function eqq(){},
eqZ:function eqZ(d,e){this.a=d
this.b=e},
eqX:function eqX(d){this.a=d},
eqY:function eqY(d){this.a=d},
eli:function eli(d,e){this.a=d
this.b=e},
elg:function elg(d){this.a=d},
elh:function elh(d){this.a=d},
elj:function elj(d,e){this.a=d
this.b=e},
elk:function elk(d,e,f){this.a=d
this.b=e
this.c=f},
elo:function elo(d,e){this.a=d
this.b=e},
elf:function elf(d,e,f){this.a=d
this.b=e
this.c=f},
ele:function ele(d){this.a=d},
epf:function epf(d,e,f){this.a=d
this.b=e
this.c=f},
er6:function er6(d,e,f){this.a=d
this.b=e
this.c=f},
enB:function enB(d,e,f){this.a=d
this.b=e
this.c=f},
enA:function enA(){},
em0:function em0(d,e,f){this.a=d
this.b=e
this.c=f},
em1:function em1(d){this.a=d},
elc:function elc(d,e){this.a=d
this.b=e},
en2:function en2(d,e){this.a=d
this.b=e},
ell:function ell(d,e){this.a=d
this.b=e},
elu:function elu(d){this.a=d},
elv:function elv(d,e){this.a=d
this.b=e},
elw:function elw(d,e){this.a=d
this.b=e},
elt:function elt(d){this.a=d},
elH:function elH(d,e){this.a=d
this.b=e},
els:function els(d){this.a=d},
elK:function elK(d){this.a=d},
elL:function elL(d){this.a=d},
elM:function elM(d){this.a=d},
elN:function elN(d){this.a=d},
elO:function elO(d){this.a=d},
elP:function elP(){},
elQ:function elQ(){},
elx:function elx(d){this.a=d},
ely:function ely(d){this.a=d},
elz:function elz(d){this.a=d},
elA:function elA(d){this.a=d},
elB:function elB(d){this.a=d},
elC:function elC(d){this.a=d},
elD:function elD(d){this.a=d},
elE:function elE(d){this.a=d},
elF:function elF(d){this.a=d},
elG:function elG(d){this.a=d},
elI:function elI(d){this.a=d},
elJ:function elJ(d,e){this.a=d
this.b=e},
en1:function en1(d,e,f){this.a=d
this.b=e
this.c=f},
en0:function en0(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
en_:function en_(d,e,f){this.a=d
this.b=e
this.c=f},
emZ:function emZ(d,e){this.a=d
this.b=e},
elm:function elm(d,e){this.a=d
this.b=e},
em4:function em4(d){this.a=d},
em3:function em3(d){this.a=d},
em2:function em2(d,e){this.a=d
this.b=e},
em5:function em5(d){this.a=d},
em6:function em6(d){this.a=d},
em7:function em7(d,e){this.a=d
this.b=e},
emI:function emI(d){this.a=d},
eoT:function eoT(d,e){this.a=d
this.b=e},
eoS:function eoS(d,e){this.a=d
this.b=e},
eoR:function eoR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eoP:function eoP(d){this.a=d},
eoQ:function eoQ(d,e){this.a=d
this.b=e},
eoN:function eoN(){},
eoO:function eoO(){},
eqr:function eqr(){},
eqs:function eqs(d,e){this.a=d
this.b=e},
eqt:function eqt(){},
equ:function equ(d){this.a=d},
eqv:function eqv(d,e){this.a=d
this.b=e},
elr:function elr(d,e){this.a=d
this.b=e},
emw:function emw(){},
emx:function emx(){},
emy:function emy(){},
emB:function emB(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
emA:function emA(d,e){this.a=d
this.b=e},
emz:function emz(d,e,f){this.a=d
this.b=e
this.c=f},
eo1:function eo1(d){this.a=d},
eo0:function eo0(){},
eo2:function eo2(d,e){this.a=d
this.b=e},
eo3:function eo3(d,e){this.a=d
this.b=e},
eo_:function eo_(d){this.a=d},
eo4:function eo4(d,e){this.a=d
this.b=e},
enZ:function enZ(d){this.a=d},
eo5:function eo5(d,e){this.a=d
this.b=e},
enY:function enY(d){this.a=d},
eo6:function eo6(d,e){this.a=d
this.b=e},
enX:function enX(d){this.a=d},
eo7:function eo7(d,e){this.a=d
this.b=e},
enW:function enW(d,e){this.a=d
this.b=e},
eo8:function eo8(d,e){this.a=d
this.b=e},
enV:function enV(d){this.a=d},
eo9:function eo9(d,e){this.a=d
this.b=e},
enU:function enU(d){this.a=d},
enN:function enN(d,e){this.a=d
this.b=e},
enO:function enO(d){this.a=d},
enP:function enP(d){this.a=d},
enM:function enM(d){this.a=d},
enQ:function enQ(d,e){this.a=d
this.b=e},
enL:function enL(d){this.a=d},
enR:function enR(d,e){this.a=d
this.b=e},
enK:function enK(d){this.a=d},
enS:function enS(d,e){this.a=d
this.b=e},
enJ:function enJ(d){this.a=d},
enT:function enT(d){this.a=d},
emV:function emV(d){this.a=d},
emW:function emW(d){this.a=d},
emY:function emY(d){this.a=d},
emQ:function emQ(d){this.a=d},
emP:function emP(d,e){this.a=d
this.b=e},
emR:function emR(d,e){this.a=d
this.b=e},
emS:function emS(d){this.a=d},
emT:function emT(d){this.a=d},
emU:function emU(d,e){this.a=d
this.b=e},
emX:function emX(d){this.a=d},
erc:function erc(d){this.a=d},
erd:function erd(d){this.a=d},
eoc:function eoc(d,e){this.a=d
this.b=e},
eob:function eob(d,e){this.a=d
this.b=e},
eoa:function eoa(d,e){this.a=d
this.b=e},
eod:function eod(d){this.a=d},
eoe:function eoe(d){this.a=d},
epB:function epB(d,e){this.a=d
this.b=e},
epC:function epC(d){this.a=d},
epD:function epD(d){this.a=d},
epO:function epO(d){this.a=d},
epZ:function epZ(d){this.a=d},
eq9:function eq9(d){this.a=d},
eqg:function eqg(d){this.a=d},
eqh:function eqh(d){this.a=d},
eqi:function eqi(d){this.a=d},
eqj:function eqj(d){this.a=d},
eqk:function eqk(d,e){this.a=d
this.b=e},
epE:function epE(d){this.a=d},
epF:function epF(d){this.a=d},
epG:function epG(d){this.a=d},
epH:function epH(d){this.a=d},
epI:function epI(d){this.a=d},
epJ:function epJ(d){this.a=d},
epK:function epK(d){this.a=d},
epL:function epL(d){this.a=d},
epM:function epM(d){this.a=d},
epN:function epN(d){this.a=d},
epP:function epP(d){this.a=d},
epQ:function epQ(d){this.a=d},
epR:function epR(d){this.a=d},
epS:function epS(d){this.a=d},
epT:function epT(d){this.a=d},
epU:function epU(d){this.a=d},
epV:function epV(d){this.a=d},
epW:function epW(d){this.a=d},
epX:function epX(d){this.a=d},
epr:function epr(d){this.a=d},
epY:function epY(d){this.a=d},
epz:function epz(d){this.a=d},
eq_:function eq_(d){this.a=d},
epy:function epy(d,e){this.a=d
this.b=e},
eq0:function eq0(d,e){this.a=d
this.b=e},
eq1:function eq1(d,e){this.a=d
this.b=e},
epx:function epx(d,e,f){this.a=d
this.b=e
this.c=f},
epn:function epn(d,e){this.a=d
this.b=e},
epA:function epA(d){this.a=d},
eql:function eql(d,e){this.a=d
this.b=e},
eqn:function eqn(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eqm:function eqm(d,e){this.a=d
this.b=e},
eq2:function eq2(d,e,f){this.a=d
this.b=e
this.c=f},
epw:function epw(d,e,f){this.a=d
this.b=e
this.c=f},
epm:function epm(d,e,f){this.a=d
this.b=e
this.c=f},
epk:function epk(d,e){this.a=d
this.b=e},
eq3:function eq3(d,e){this.a=d
this.b=e},
epv:function epv(d,e){this.a=d
this.b=e},
epl:function epl(d,e){this.a=d
this.b=e},
epj:function epj(d,e){this.a=d
this.b=e},
eq4:function eq4(d){this.a=d},
epu:function epu(d){this.a=d},
eq5:function eq5(d){this.a=d},
eq6:function eq6(d){this.a=d},
eq7:function eq7(d){this.a=d},
eq8:function eq8(d){this.a=d},
ept:function ept(d){this.a=d},
eqa:function eqa(d){this.a=d},
eqb:function eqb(d){this.a=d},
eqc:function eqc(d,e){this.a=d
this.b=e},
eps:function eps(d){this.a=d},
eqd:function eqd(d,e){this.a=d
this.b=e},
epq:function epq(d){this.a=d},
eqe:function eqe(d,e){this.a=d
this.b=e},
epp:function epp(d){this.a=d},
eqf:function eqf(d,e){this.a=d
this.b=e},
epo:function epo(d){this.a=d},
em_:function em_(d,e,f){this.a=d
this.b=e
this.c=f},
elZ:function elZ(d,e){this.a=d
this.b=e},
eqI:function eqI(d,e){this.a=d
this.b=e},
eqH:function eqH(d,e){this.a=d
this.b=e},
eqJ:function eqJ(d,e){this.a=d
this.b=e},
eqG:function eqG(d,e){this.a=d
this.b=e},
en7:function en7(d,e){this.a=d
this.b=e},
en6:function en6(d){this.a=d},
en8:function en8(d,e){this.a=d
this.b=e},
en5:function en5(d){this.a=d},
enF:function enF(){},
enE:function enE(){},
eqV:function eqV(d){this.a=d},
eqU:function eqU(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eqT:function eqT(d,e){this.a=d
this.b=e},
eqO:function eqO(d,e){this.a=d
this.b=e},
eqS:function eqS(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eqP:function eqP(d,e){this.a=d
this.b=e},
eqK:function eqK(d){this.a=d},
eqL:function eqL(d){this.a=d},
eqM:function eqM(d){this.a=d},
eqN:function eqN(d){this.a=d},
eqQ:function eqQ(d,e){this.a=d
this.b=e},
eqR:function eqR(d,e){this.a=d
this.b=e},
eqW:function eqW(d){this.a=d},
emp:function emp(d){this.a=d},
emo:function emo(d,e,f){this.a=d
this.b=e
this.c=f},
emn:function emn(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
emc:function emc(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
emd:function emd(d,e){this.a=d
this.b=e},
eme:function eme(d,e){this.a=d
this.b=e},
emf:function emf(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
emb:function emb(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
emg:function emg(d,e){this.a=d
this.b=e},
emi:function emi(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
emh:function emh(d,e){this.a=d
this.b=e},
emj:function emj(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ema:function ema(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
emk:function emk(d,e){this.a=d
this.b=e},
em9:function em9(d,e){this.a=d
this.b=e},
eml:function eml(d,e){this.a=d
this.b=e},
em8:function em8(d){this.a=d},
emm:function emm(d,e){this.a=d
this.b=e},
eog:function eog(d){this.a=d},
eof:function eof(d){this.a=d},
eoh:function eoh(d,e){this.a=d
this.b=e},
enl:function enl(d,e){this.a=d
this.b=e},
enm:function enm(d,e){this.a=d
this.b=e},
enk:function enk(d,e){this.a=d
this.b=e},
enn:function enn(d,e){this.a=d
this.b=e},
enj:function enj(d,e){this.a=d
this.b=e},
eno:function eno(d,e){this.a=d
this.b=e},
eni:function eni(d,e){this.a=d
this.b=e},
enp:function enp(d,e){this.a=d
this.b=e},
enh:function enh(d,e){this.a=d
this.b=e},
enq:function enq(d,e){this.a=d
this.b=e},
eng:function eng(d,e){this.a=d
this.b=e},
enr:function enr(d,e,f){this.a=d
this.b=e
this.c=f},
enf:function enf(d,e){this.a=d
this.b=e},
ens:function ens(d,e,f){this.a=d
this.b=e
this.c=f},
ene:function ene(d,e){this.a=d
this.b=e},
ent:function ent(d,e){this.a=d
this.b=e},
end:function end(d,e,f){this.a=d
this.b=e
this.c=f},
ena:function ena(d,e){this.a=d
this.b=e},
enu:function enu(d,e){this.a=d
this.b=e},
enc:function enc(d,e){this.a=d
this.b=e},
env:function env(d,e){this.a=d
this.b=e},
enb:function enb(d,e,f){this.a=d
this.b=e
this.c=f},
en9:function en9(d,e){this.a=d
this.b=e},
enw:function enw(d,e){this.a=d
this.b=e},
enz:function enz(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
el8:function el8(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
epd:function epd(d,e){this.a=d
this.b=e},
epb:function epb(d){this.a=d},
epc:function epc(d,e){this.a=d
this.b=e},
ae3:function ae3(d,e,f){this.a=d
this.b=e
this.c=f},
axt:function axt(d,e){this.c=d
this.a=e},
bb_:function bb_(d,e){var _=this
_.e=_.d=$
_.cS$=d
_.b2$=e
_.c=_.a=null},
cYZ:function cYZ(d){this.a=d},
cYY:function cYY(d){this.a=d},
bbd:function bbd(d,e){this.c=d
this.a=e},
cZk:function cZk(d){this.a=d},
cZl:function cZl(d){this.a=d},
J6:function J6(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
baZ:function baZ(){this.d=!1
this.c=this.a=null},
cYW:function cYW(d){this.a=d},
cYS:function cYS(d){this.a=d},
cYX:function cYX(d){this.a=d},
cYR:function cYR(d){this.a=d},
cYV:function cYV(d){this.a=d},
cYT:function cYT(d){this.a=d},
cYU:function cYU(d,e){this.a=d
this.b=e},
OO:function OO(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
ZC:function ZC(d,e,f){this.c=d
this.d=e
this.a=f},
aD0:function aD0(d,e,f){var _=this
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
erT:function erT(){},
erJ:function erJ(d){this.a=d},
erS:function erS(d){this.a=d},
erK:function erK(d){this.a=d},
erL:function erL(d){this.a=d},
erF:function erF(d){this.a=d},
erG:function erG(d,e){this.a=d
this.b=e},
erH:function erH(d){this.a=d},
erI:function erI(d,e,f){this.a=d
this.b=e
this.c=f},
erQ:function erQ(){},
erR:function erR(d){this.a=d},
erM:function erM(d){this.a=d},
erN:function erN(d){this.a=d},
erO:function erO(d){this.a=d},
erP:function erP(d){this.a=d},
erU:function erU(d,e,f){this.a=d
this.b=e
this.c=f},
erW:function erW(d,e){this.a=d
this.b=e},
erV:function erV(d){this.a=d},
Je:function Je(d,e){this.c=d
this.a=e},
bpG:function bpG(d,e){this.b=d
this.a=e},
bfP:function bfP(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bfO:function bfO(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aIG:function aIG(){},
aKI:function aKI(){},
bvn:function bvn(){},
aKJ:function aKJ(){},
fzc(){var w=0,v=B.j(x.bZ),u,t,s,r,q
var $async$fzc=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.wN.c4().Lp(B.a(["pdf"],x.s),A.ts,!0),$async$fzc)
case 3:q=e
if(q==null||J.ck(q.a)){u=null
w=1
break}t=J.fn(q.a)
s=t.c
if(s==null||s.length===0){u=null
w=1
break}r=A.a.i(t.b)
if(r.length===0)r="document.pdf"
u=new B.bmX(s,"data:application/pdf;base64,"+A.cS.gcv().aJ(s),r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fzc,v)},
hZn(d){var w,v,u,t,s,r
try{w=B.jl(d,0,null)
v=B.af("/Type\\s*/Pages[^>]*?/Count\\s+(\\d+)",!0,!0,!1,!1).cD(w)
if(v!=null){s=v.b[1]
s.toString
u=B.c7(s,null)
if(u!=null&&u>0){s=A.o.D(u,1,200)
return s}}t=B.af("/Type\\s*/Page\\b",!0,!1,!1,!1).kP(0,w).gM(0)
if(t>0){s=J.aPi(t,1,200)
return s}}catch(r){}return 1},
fz3(d){return C.hZm(d)},
hZm(d){var w=0,v=B.j(x.T),u
var $async$fz3=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(!A.a.a0(d,"data:image")){u=d
w=1
break}u=d
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fz3,v)},
bAY(d,e,f,g){return C.hZw(d,e,f,g)},
hZw(b6,b7,b8,b9){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$bAY=B.e(function(c0,c1){if(c0===1){s.push(c1)
w=t}for(;;)switch(w){case 0:if(!new B.e6(b6,x.co).gag(0).C()){u=null
w=1
break}t=4
r=A.k.D(b7.a,80,2400)
q=A.k.D(b7.b,80,2400)
p=B.hg2(b9,new B.at(r,q))
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
g=new B.rR()
f=B.Gy(g,null)
a7=B.M()
a7.r=A.qt.gp(0)
f.aY(new B.aa(0,0,800,0+h),a7)
e=800/(j*r)
b1=B.M()
b1.r=b8.gp(b8)
b1.c=p*e
b1.d=A.bO
b1.e=A.fz
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
b2.delete()}a0=a2}a3=g.qg()
w=7
return B.b(a3.z_(800,h),$async$bAY)
case 7:a4=c1
a3.q()
w=8
return B.b(a4.ho(A.fT),$async$bAY)
case 8:a5=c1
a4.q()
if(a5==null){u=null
w=1
break}a7=J.fa(A.dG.gaP(a5))
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
return B.i($async$bAY,v)},
aOv(d,e,f){return C.hZk(d,e,f)},
hZk(d,e,f){var w=0,v=B.j(x.go),u,t,s,r,q
var $async$aOv=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:r={}
q=B.a([],x.bA)
r.a=null
r.b=e==null?A.aA:e
r.c=f==null?5.2:f
w=3
return B.b(B.agr(d,e,f,new C.fz1(r,q),q,"Sign document"),$async$aOv)
case 3:if(!new B.e6(q,x.co).gag(0).C()||r.a==null){u=null
w=1
break}t=r.a
t.toString
w=4
return B.b(C.bAY(q,t,r.b,r.c),$async$aOv)
case 4:s=h
if(s==null){u=null
w=1
break}u=new C.b_B(s,r.c,r.b)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aOv,v)},
hZu(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h="&amp;",g="&lt;",f="&gt;",e="&quot;",d='<!DOCTYPE html><html><head><meta charset="utf-8"><title>'+C.h9f(a0.b)+'</title>\n<style>\n  @page { size: 210mm 297mm; margin: 1.7mm; }\n  * { box-sizing: border-box; }\n  body { font-family: system-ui, sans-serif; background: #fff; color: #111; margin: 0; }\n  h1 { font-size: 14px; margin: 6px 10mm; }\n  .slide { page-break-after: always; width: 100%; height: 293.6mm; border: 1px solid #ddd; position: relative; overflow: hidden; margin: 0 auto 24px; }\n  /* Requested after the margin was already trimmed to near zero: a real\n     zoom-in on the whole slide (frame included), not just less border.\n     `.slide` keeps overflow:hidden so whatever spills past the edge at\n     this scale gets cropped instead of pushing the page layout around.\n     Width and height scale independently \u2014 a separate "wider on the\n     left and right only" request on top of the overall zoom. */\n  .zoom { position: absolute; inset: 0; transform: scaleX(1.0375) scaleY(1.01875); transform-origin: center center; }\n  .el { position: absolute; overflow: hidden; }\n  .txt { white-space: pre-wrap; word-break: break-word; }\n  img { max-width: 100%; max-height: 100%; object-fit: contain; }\n  .pdf { display:flex; flex-direction:column; align-items:center; justify-content:center; height:100%; background:#f8fafc; }\n</style></head><body>\n<h1>'+C.h9f(a0.b)+"</h1>\n"
for(w=a0.r,v=0;v<w.length;++v){u=w[v]
d=d+('<div class="slide" style="background:#'+A.a.b0(A.a.aT(A.o.fP(u.e,16),8,"0"),2)+'">\n')+'<div class="zoom">\n'
for(t=u.z,s=t.length,r=0;r<t.length;t.length===s||(0,B.L)(t),++r){q=t[r]
d+='<div class="el" style="left:'+A.k.aa(q.c*100,2)+"%;top:"+A.k.aa(q.d*100,2)+"%;width:"+A.k.aa(q.e*100,2)+"%;height:"+A.k.aa(q.f*100,2)+'%">'
p=q.b
switch(p.a){case 0:o=A.a.b0(A.a.aT(A.o.fP(q.Q,16),8,"0"),2)
p=q.w
n=q.r
n=B.aJ(n,"&",h)
n=B.aJ(n,"<",g)
n=B.aJ(n,">",f)
d+='<div class="txt" style="font-size:'+B.t(p)+"px;color:#"+o+'">'+B.aJ(n,'"',e)+"</div>"
break
case 1:case 4:n=q.at
if(n!=null&&A.a.a0(n,"data:image")){m=p===D.lh&&q.c===0&&q.d===0&&q.e===1&&q.f===1?' style="object-fit:fill"':""
d+='<img src="'+n+'" alt=""'+m+" />"}break
case 3:p=q.db
if(p.length===0)p="PDF document"
p=B.aJ(p,"&",h)
p=B.aJ(p,"<",g)
p=B.aJ(p,">",f)
d+='<div class="pdf"><div>\ud83d\udcc4 '+B.aJ(p,'"',e)+"</div></div>"
break
case 2:d+='<div style="width:100%;height:100%;background:'+C.h8S(q.ay)+";border:2px solid "+C.h8S(q.ch)+'"></div>'
break
case 5:l=C.fTz(q.r)
p=l==null
n=p?null:l.b
n=A.a.i(n==null?"":n).length===0?"My links":A.a.i(l.b)
n=B.aJ(n,"&",h)
n=B.aJ(n,"<",g)
n=B.aJ(n,">",f)
d=d+'<div style="width:100%;height:100%;box-sizing:border-box;background:#111114;border:4px solid #8E8A85;border-radius:18px;padding:18px 8px 8px;color:#fff;font-family:sans-serif;text-align:center;overflow:hidden">'+('<div style="font-weight:700;font-size:13px">'+B.aJ(n,'"',e)+"</div>")
p=p?null:l.gaiq()
if(p==null)p=A.avu
n=B.T(p)
k=n.k("pN<1>")
j=new B.pN(p,0,8,k)
j.GJ(p,0,8,n.c)
j=new B.bV(j,j.gM(0),k.k("bV<ai.E>"))
k=k.k("ai.E")
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
h8S(d){var w=A.o.aA(d,24)
return"rgba("+(A.o.aA(d,16)&255)+","+(A.o.aA(d,8)&255)+","+(d&255)+","+A.k.aa((w&255)/255,3)+")"},
h9f(d){var w=B.aJ(d,"&","&amp;")
w=B.aJ(w,"<","&lt;")
w=B.aJ(w,">","&gt;")
return B.aJ(w,'"',"&quot;")},
bAW(d,e){var w=0,v=B.j(x.H)
var $async$bAW=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b(B.c9(null,null,!0,null,new C.fza(e,C.hZu(e),d),d,null,!0,!0,x.H),$async$bAW)
case 2:return B.h(null,v)}})
return B.i($async$bAW,v)},
bAX(){var w=0,v=B.j(x.T),u,t,s
var $async$bAX=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A4.G4(92,2400),$async$bAX)
case 3:s=e
if(s==null){u=null
w=1
break}w=4
return B.b(C.fz3(s),$async$bAX)
case 4:t=e
u=t==null?s:t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bAX,v)},
aOw(d){var w=0,v=B.j(x.N),u,t,s,r,q
var $async$aOw=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.fUN(d),$async$aOw)
case 3:t=f
s=A.a.i(d.b)
r=B.af("[^\\w\\-. ]+",!0,!1,!1,!1)
q=A.a.i(B.aJ(s,r,"_"))
u=Z.fBr(t,q.length===0?"presentation":q)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aOw,v)},
h3d(d,e){var w
if(e<0||e>=d.r.length)return A.o.D(d.e,1,120)
w=d.r[e].w
return A.o.D(w>0?w:d.e,1,120)},
b_B:function b_B(d,e,f){this.a=d
this.b=e
this.c=f},
fz1:function fz1(d,e){this.a=d
this.b=e},
fza:function fza(d,e,f){this.a=d
this.b=e
this.c=f},
fz7:function fz7(d){this.a=d},
fz8:function fz8(d,e,f){this.a=d
this.b=e
this.c=f},
fz9:function fz9(d,e,f){this.a=d
this.b=e
this.c=f},
hZl(d){return C.kr(d.w)},
hZs(d){var w,v,u,t
if(d.length===0||!A.d.d9(d,C.i0a()))return null
for(w=d.length,v=0;v<w;++v){u=d[v].x
t=A.a.i(u==null?"":u)
if(t.length!==0)return t}return""},
yc(d){var w=A.a.i(d),v=B.af("[^A-Z0-9]",!0,!1,!1,!1),u=B.aJ(w.toUpperCase(),v,"")
w=$.hlH()
if(w.b.test(u))return u
return null},
hg4(d,e,f){var w,v,u=C.huf(d),t=$.ph()
for(w=0;w<80;++w){v=u+A.a.aT(A.o.u(t.aB(1000)),3,"0")
if(!f.t(0,v))return v}return u+A.a.aT(A.o.u(Date.now()%1000),3,"0")},
hZy(d){var w,v,u,t,s=B.aW(x.N)
for(w=J.aX(d.a),v=new B.fx(w,d.b);v.C();){u=w.gU(w).y
t=C.yc(u==null?"":u)
if(t!=null)s.K(0,t)}return s},
fz_(d,e){var w,v=d.y,u=C.yc(v==null?"":v)
if(u!=null)return d.y=u
w=C.hZy(new B.a2(e,new C.fz0(d),B.T(e).k("a2<1>")))
v=d.x
return d.y=C.hg4(v==null?"":v,null,w)},
hZx(d){var w,v
if(d.length!==1)return null
w=A.d.gL(d)
if(!C.kr(w.w))return null
v=w.y
return C.yc(v==null?"":v)},
hyE(){var w,v=$.ph(),u=J.e1(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aB(32)]
return"SL"+A.d.fV(u)},
V8(){var w=0,v=B.j(x.P),u,t=2,s=[],r,q,p,o,n,m
var $async$V8=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return B.b(B.c1(),$async$V8)
case 3:if(!e){u=B.V(x.N,x.z)
w=1
break}t=5
w=8
return B.b(B.f0("ngmy_slides_transfer_qr_stashes_v1",null,!1,A.bG),$async$V8)
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
return B.i($async$V8,v)},
V9(d){return C.hyF(d)},
hyF(d){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p
var $async$V9=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return B.b(B.c1(),$async$V9)
case 3:if(!f){w=1
break}t=5
w=8
return B.b(B.hB("ngmy_slides_transfer_qr_stashes_v1",B.E(["stashes",d,"savedAt",new B.S(Date.now(),0,!1).a5().ac()],x.N,x.z),!1,!1,A.cF,null),$async$V9)
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
return B.i($async$V9,v)},
a78(a0,a1,a2,a3,a4){var w=0,v=B.j(x.gl),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$a78=B.e(function(a5,a6){if(a5===1)return B.f(a6,v)
for(;;)switch(w){case 0:w=3
return B.b(B.c1(),$async$a78)
case 3:if(!a6){u=null
w=1
break}t=A.a.i(a0)
if(t.length===0){u=null
w=1
break}w=4
return B.b(C.V8(),$async$a78)
case 4:s=a6
r=C.yc(a2==null?"":a2)
if(r==null)r=a3!=null?C.hg4(a3,null,A.I4):null
q=x.N
p=B.aW(q)
for(o=J.dj(s),n=J.aX(o.ghY(s)),m=x.f;n.C();){l=n.gU(n)
if(!m.b(l))continue
k=J.q(l,"claimCode")
j=C.yc(J.k(k==null?"":k))
if(j!=null)p.K(0,j)}n=o.gdL(s),n=n.gag(n),k=x.z
case 5:if(!n.C()){w=6
break}i=n.gU(n)
h=i.b
if(!m.b(h)){w=5
break}g=B.a1(h,q,k)
h=g.h(0,"bundleId")
if(J.k(h==null?"":h)!==a1){w=5
break}q=A.dI.aJ(t)
g.n(0,"payload",A.cS.gcv().aJ(q))
g.n(0,"ownerEmail",A.a.i(a4))
g.n(0,"updatedAt",new B.S(Date.now(),0,!1).a5().ac())
if(D.RZ.t(0,A.a.i(a4.toLowerCase())))g.n(0,"sharedByAdmin",!0)
if(r!=null){g.n(0,"kind","marriage")
g.n(0,"usesRemaining",2)
f=r}else{q=g.h(0,"claimCode")
f=C.yc(J.k(q==null?"":q))
if(f==null)f=C.h3i(p)
g.n(0,"usesRemaining",25)}g.n(0,"claimCode",f)
q=i.a
o.n(s,q,g)
w=7
return B.b(C.V9(s),$async$a78)
case 7:u=new B.aEq(f,"NGMYSLIDESYNC2|"+q,q)
w=1
break
w=5
break
case 6:e=C.hyE()
n=r==null
d=n?C.h3i(p):r
q=B.V(q,x.C)
q.n(0,"ownerEmail",A.a.i(a4))
q.n(0,"bundleId",a1)
m=A.dI.aJ(t)
q.n(0,"payload",A.cS.gcv().aJ(m))
n=!n
q.n(0,"usesRemaining",n?2:25)
q.n(0,"createdAt",new B.S(Date.now(),0,!1).a5().ac())
if(D.RZ.t(0,A.a.i(a4.toLowerCase())))q.n(0,"sharedByAdmin",!0)
q.n(0,"claimCode",d)
if(n)q.n(0,"kind","marriage")
o.n(s,e,q)
w=8
return B.b(C.V9(s),$async$a78)
case 8:u=new B.aEq(d,"NGMYSLIDESYNC2|"+e,e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a78,v)},
h3i(d){var w,v,u=$.ph()
for(w=0;w<200;++w){v="SL"+A.a.aT(A.o.u(u.aB(1000)),3,"0")
if(d.K(0,v))return v}return"SL"+A.a.aT(A.o.u(Date.now()%1000),3,"0")},
apS(d){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$apS=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=A.a.i(d)
p=q.length===0
if(p)f=p
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.c1(),$async$apS)
case 5:f=!f
case 4:if(f){w=1
break}w=6
return B.b(C.V8(),$async$apS)
case 6:t=f
s=J.a8(t)
r=s.gM(t)
s.bn(t,new C.cbZ(q))
w=s.gM(t)!==r?7:8
break
case 7:w=9
return B.b(C.V9(t),$async$apS)
case 9:case 8:case 1:return B.h(u,v)}})
return B.i($async$apS,v)},
apR(d){var w=0,v=B.j(x.T),u,t,s,r,q,p,o
var $async$apR=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:p=C.yc(d)
o=p==null
if(o)f=o
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.c1(),$async$apR)
case 5:f=!f
case 4:if(f){u=null
w=1
break}o=J
w=6
return B.b(C.V8(),$async$apR)
case 6:t=o.jr(f),t=t.gag(t),s=x.f
case 7:if(!t.C()){w=8
break}r=t.gU(t)
q=r.b
if(!s.b(q)){w=7
break}q=J.q(q,"claimCode")
if(C.yc(J.k(q==null?"":q))===p){u=C.a77(r.a)
w=1
break}w=7
break
case 8:u=null
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$apR,v)},
a77(d){var w=0,v=B.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$a77=B.e(function(a0,a1){if(a0===1)return B.f(a1,v)
for(;;)switch(w){case 0:g=A.a.i(d)
f=g.length===0
if(f)a1=f
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.c1(),$async$a77)
case 5:a1=!a1
case 4:if(a1){u=null
w=1
break}w=6
return B.b(C.V8(),$async$a77)
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
try{s=A.c4.c8(0,A.cB.aJ(t))}catch(e){u=null
w=1
break}if(A.a.i(s).length===0){u=null
w=1
break}k=l.h(n,"ownerEmail")
if(D.RZ.t(0,A.a.i(J.k(k==null?"":k).toLowerCase()))||J.y(l.h(n,"sharedByAdmin"),!0))try{r=A.R.aH(0,s,null)
if(m.b(r)){q=B.a1(r,x.N,x.z)
J.aG(q,"sharedByAdmin",!0)
s=A.R.ao(q,null)}}catch(e){}h=j-1
m=l.h(n,"kind")
m=J.k(m==null?"":m)
if(h<=0&&m!=="marriage")o.W(p,g)
else{m=x.N
l=x.z
l=B.dW(B.a1(n,m,l),m,l)
l.n(0,"usesRemaining",h)
l.n(0,"lastUsedAt",new B.S(Date.now(),0,!1).a5().ac())
o.n(p,g,l)}w=7
return B.b(C.V9(p),$async$a77)
case 7:u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a77,v)},
hZr(d,e,f){var w,v=B.V(x.N,x.z)
v.n(0,"type","ngmy_slides_library_v1")
v.n(0,"ownerEmail",A.a.i(e))
v.n(0,"exportedAt",new B.S(Date.now(),0,!1).a5().ac())
if(f)v.n(0,"sharedByAdmin",!0)
w=B.T(d).k("K<1,a4<n,@>>")
w=B.B(new B.K(d,new C.fz6(),w),w.k("ai.E"))
v.n(0,"decks",w)
return v},
fze(d,e,f,g){var w
if(e!=null){w=B.V(x.N,x.z)
w.n(0,"type","ngmy_slides_deck_v1")
w.n(0,"ownerEmail",A.a.i(f))
w.n(0,"exportedAt",new B.S(Date.now(),0,!1).a5().ac())
if(g)w.n(0,"sharedByAdmin",!0)
w.n(0,"deck",e.ae())
return A.R.ao(w,null)}return A.R.ao(C.hZr(d==null?B.a([],x.D):d,f,g),null)},
fzd(d,e,f,g,h){var w=0,v=B.j(x.eb),u,t,s,r
var $async$fzd=B.e(function(i,j){if(i===1)return B.f(j,v)
for(;;)switch(w){case 0:w=3
return B.b(C.a78(h,d,e,f,g),$async$fzd)
case 3:r=j
if(r!=null){t=r.b
s=r.a
if(s==null)s=C.yc(e==null?"":e)
u=new B.aEd(s,t)
w=1
break}t=A.dI.aJ(h)
t=A.k3.gcv().aJ(t)
u=new B.aEd(C.yc(e==null?"":e),"NGMY_SL:"+t)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fzd,v)},
fUP(d){var w,v,u,t,s="ngmy_slides_deck_v1",r="ngmy_slides_library_v1",q=A.a.i(d)
if(J.ad(q)===0)return!1
if(J.cZ(q,"NGMYSLIDESYNC2|"))return!0
if(J.cZ(q,"NGMYSLIDECODE|"))return!0
if(J.cZ(q,"NGMY_SL:"))return!0
if(J.eY(q,s)||J.eY(q,r))return!0
if(J.cZ(q,"{"))try{w=A.R.aH(0,q,null)
if(x.f.b(w)){u=J.q(w,"type")
v=J.k(u==null?"":u)
u=J.y(v,s)||J.y(v,r)
return u}}catch(t){}return!1},
hZv(d){var w,v,u,t,s,r=d.z,q=r==null?null:A.a.i(r)
r=d.d
for(r=[q,r==null?null:A.a.i(r)],w=0;w<2;++w){v=r[w]
if(v==null||v.length===0)continue
if(C.fUP(v))return v
u=A.a.cJ(v,"NGMYSLIDESYNC2|")
if(u>=0){t=A.a.i(A.a.b0(v,u))
if(C.fUP(t))return t}s=A.a.cJ(v,"NGMY_SL:")
if(s>=0){t=A.a.i(A.a.b0(v,s))
if(C.fUP(t))return t}}return null},
fz2(d){var w,v,u,t=A.a.i(d)
if(J.ad(t)===0||J.cZ(t,"NGMYSLIDESYNC2|"))return B.a([],x.D)
try{w=null
v=x.P
if(J.cZ(t,"NGMY_SL:"))w=v.a(A.R.aH(0,A.c4.c8(0,A.cB.aJ(J.my(t,8))),null))
else w=v.a(A.R.aH(0,t,null))
v=C.hIj(w)
return v}catch(u){v=B.a([],x.D)
return v}},
agc(d){var w=0,v=B.j(x.R),u,t,s,r,q
var $async$agc=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=A.a.i(d)
w=A.a.a0(q,"NGMYSLIDECODE|")?3:4
break
case 3:t=q.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return B.b(C.apR(t[1]),$async$agc)
case 7:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fz2(s)
w=1
break}case 6:u=B.a([],x.D)
w=1
break
case 4:r=C.yc(q)
w=r!=null&&!A.a.t(q,"|")&&!A.a.a0(q,"{")?8:9
break
case 8:w=10
return B.b(C.apR(r),$async$agc)
case 10:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fz2(s)
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
return B.b(C.a77(t[1]),$async$agc)
case 15:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fz2(s)
w=1
break}case 14:u=B.a([],x.D)
w=1
break
case 12:u=C.fz2(q)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$agc,v)},
hIj(d){var w,v,u,t=J.a8(d),s=t.h(d,"type"),r=J.k(s==null?"":s)
if(!J.y(t.h(d,"sharedByAdmin"),!0)){s=t.h(d,"ownerEmail")
w=D.RZ.t(0,A.a.i(J.k(s==null?"":s).toLowerCase()))}else w=!0
if(r==="ngmy_slides_deck_v1"){v=t.h(d,"deck")
if(!x.f.b(v))return B.a([],x.D)
return B.a([C.fUM(C.V4(B.a1(v,x.N,x.z)),w)],x.D)}if(r==="ngmy_slides_library_v1"){u=t.h(d,"decks")
if(!x.j.b(u))return B.a([],x.D)
t=J.d8(u,x.f)
t=B.cD(t,new C.f7v(w),t.$ti.k("H.E"),x.I)
t=B.B(t,B.a3(t).k("H.E"))
return t}return B.a([],x.D)},
fUM(d,e){var w,v,u,t,s,r,q,p,o=d.ae()
o.n(0,"id",C.cC())
w=A.a.i(d.b)
o.n(0,"name",w.length===0?"Shared presentation":w)
o.n(0,"transferReceived",!0)
o.W(0,"transferClaimCode")
o.W(0,"adminShareEditUntil")
v=o.h(0,"slides")
if(x.j.b(v))for(u=J.aX(v),t=x.f;u.C();){s=u.gU(u)
if(t.b(s)){r=Date.now()
q=$.iX
$.iX=q+1
J.aG(s,"id",""+1000*r+"_"+q)}}p=C.V4(B.a1(o,x.N,x.z))
if(e&&C.kr(p.w))p.Q=new B.S(Date.now(),0,!1).a5().bN(144e8).ac()
return p},
bAH(){var w=0,v=B.j(x.aT),u,t,s
var $async$bAH=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.G3(),$async$bAH)
case 3:s=e
if(s==null||A.a.i(s).length===0){u=null
w=1
break}w=4
return B.b(C.agc(s),$async$bAH)
case 4:t=e
u=J.ck(t)?null:t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bAH,v)},
fHL(d){var w=0,v=B.j(x.T),u,t
var $async$fHL=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.hR(D.VK,!0,"Dismiss",d,new C.fHM(),new C.fHN(),A.EI,!0,x.N),$async$fHL)
case 3:t=f
if(t==null){u=null
w=1
break}if(t.length===0){if(d.e!=null)d.I(x.q).f.R(D.eLe)
u=null
w=1
break}u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fHL,v)},
i2e(d,e,f,g,h){return B.a5(d,!1).ce(B.ej(new C.fHO(h,e,g,f),!0,null,x.H))},
fz0:function fz0(d){this.a=d},
cbZ:function cbZ(d){this.a=d},
fz6:function fz6(){},
f7v:function f7v(d){this.a=d},
fHM:function fHM(){},
fHN:function fHN(){},
fHO:function fHO(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
V6:function V6(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aCZ:function aCZ(){var _=this
_.d="one"
_.e=null
_.r=_.f=!1
_.c=_.a=null},
erp:function erp(){},
erl:function erl(d,e){this.a=d
this.b=e},
ero:function ero(d,e){this.a=d
this.b=e},
erm:function erm(d){this.a=d},
ern:function ern(d){this.a=d},
erq:function erq(d){this.a=d},
err:function err(d){this.a=d},
eru:function eru(d){this.a=d},
erv:function erv(d){this.a=d},
ert:function ert(d){this.a=d},
erw:function erw(d){this.a=d},
ers:function ers(d){this.a=d},
erx:function erx(d,e){this.a=d
this.b=e},
erk:function erk(d,e){this.a=d
this.b=e},
erj:function erj(d,e){this.a=d
this.b=e},
V7:function V7(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
biG:function biG(){var _=this
_.c=_.a=_.f=_.e=_.d=null},
ery:function ery(d,e){this.a=d
this.b=e},
erz:function erz(d){this.a=d},
erA:function erA(){},
erB:function erB(d){this.a=d},
erC:function erC(d,e){this.a=d
this.b=e},
aCW:function aCW(d){this.a=d},
aCX:function aCX(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
el2:function el2(d){this.a=d},
el1:function el1(){},
el3:function el3(d){this.a=d},
ekZ:function ekZ(d){this.a=d},
ekY:function ekY(){},
el_:function el_(d){this.a=d},
el0:function el0(d){this.a=d},
bsU:function bsU(){},
apT:function apT(d){this.a=d},
aD_:function aD_(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
erE:function erE(d){this.a=d},
erD:function erD(d){this.a=d},
hNr(){var w,v,u,t
for(v=0;v<4;++v){w=D.cXW[v]
try{if(Ac.bUD(w)){u=w
return u}}catch(t){}}return null},
Ql(d,e){return C.hWc(d,e)},
hWc(c6,c7){var w=0,v=B.j(x.T),u,t=2,s=[],r=[],q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5
var $async$Ql=B.e(function(c9,d0){if(c9===1){s.push(d0)
w=t}for(;;)switch(w){case 0:c2={}
c3=c7.r
if(c3.length===0){u="This presentation has no slides."
w=1
break}q=C.hNr()
if(q==null){u="This browser cannot record video. Try Chrome, Edge, or a recent Safari."
w=1
break}b2=c7.d===D.nW?0.5625:1.7777777777777777
b3=b2>=1
b4=c2.a=A.k.V(b3?1280:1280*b2)
b5=c2.b=A.k.V(b3?1280/b2:1280)
c2.a=b4-A.o.G(b4,2)
c2.b=b5-A.o.G(b5,2)
b6=B.ql(c6,!0)
b6.toString
p=B.a5(c6,!0)
b7=new B.cp(null,x.A)
b8=A.d.gL(c3)
b9=$.aw()
o=new B.eL(b8,b9)
n=new B.eL("Getting ready\u2026",b9)
m=new B.eL(0,b9)
l=B.ob(new C.ftl(c2,b7,o),!1,!1)
b6.lH(0,l)
b9=x.H
B.c9(null,A.db,!1,null,new C.ftm(n,m),c6,null,!0,!0,b9)
k=new C.ftq(b7)
j=new C.ftr()
i=null
t=4
b3=c2.a
h=Aj.aQN(c2.b,b3)
b3=h.getContext("2d")
b3.toString
g=b3
f=J.fKm(h,30)
e=B.a([],x.aK)
b3=x.z
i=Ac.aVD(f,B.E(["mimeType",q,"videoBitsPerSecond",8e6],b3,b3))
A.H4.y_(i,"dataavailable",new C.ftn(e))
d=new B.bS(new B.bg($.bx,x.dT),x.b2)
A.H4.y_(i,"stop",new C.fto(d))
J.agL(n,"Drawing slide 1 of "+c3.length+"\u2026")
c5=j
w=8
return B.b(k.$0(),$async$Ql)
case 8:w=7
return B.b(c5.$1(d0),$async$Ql)
case 7:a0=d0
J.fKo(g,a0,0,0,c2.a,c2.b)
i.start(200)
a1=0
case 9:if(!(b3=a1,b8=c3.length,b3<b8)){w=11
break}a2=c3[a1]
w=a1>0?12:13
break
case 12:J.agL(n,"Drawing slide "+B.t(a1+1)+" of "+b8+"\u2026")
J.agL(o,a2)
c5=j
w=15
return B.b(k.$0(),$async$Ql)
case 15:w=14
return B.b(c5.$1(d0),$async$Ql)
case 14:a0=d0
case 13:J.fKo(g,a0,0,0,c2.a,c2.b)
a3=A.o.D(a2.w>0?a2.w:c7.e,1,120)
J.agL(n,"Recording slide "+B.t(a1+1)+" of "+c3.length+" \xb7 "+B.t(a3)+" s")
a4=new B.S(Date.now(),0,!1).bN(1e6*a3)
case 16:b3=Date.now()
b8=a4
if(b3>=b8.gbo())b3=b3===b8.gbo()&&0<b8.gcw()
else b3=!0
if(!b3){w=17
break}J.fKo(g,a0,0,0,c2.a,c2.b)
w=18
return B.b(B.bN(A.fw,null,b9),$async$Ql)
case 18:w=16
break
case 17:J.agL(m,(a1+1)/c3.length)
case 10:++a1
w=9
break
case 11:J.agL(n,"Saving your video\u2026")
i.stop()
w=19
return B.b(d.a.cM(0,A.nF),$async$Ql)
case 19:a5=A.d.gL(q.split(";"))
a6=B.hL(e,a5)
c3=(self.URL||self.webkitURL).createObjectURL(a6)
c3.toString
a7=c3
a8=J.y(a5,"video/mp4")?"mp4":"webm"
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
J.KD(b0)
J.lP(b0)
B.bN(A.nE,new C.ftp(a7),b9)
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
c3.shQ(b3)
J.aPn(c3,0)
c3=n
c3.shQ(b3)
J.aPn(c3,0)
c3=m
c3.shQ(b3)
J.aPn(c3,0)
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Ql,v)},
ftl:function ftl(d,e,f){this.a=d
this.b=e
this.c=f},
ftk:function ftk(){},
ftm:function ftm(d,e){this.a=d
this.b=e},
ftq:function ftq(d){this.a=d},
ftr:function ftr(){},
ftn:function ftn(d){this.a=d},
fto:function fto(d){this.a=d},
ftp:function ftp(d){this.a=d},
bt5:function bt5(d,e,f){this.c=d
this.d=e
this.a=f},
f1S:function f1S(){},
f1T:function f1T(){},
ccl(d){var w=0,v=B.j(x.at),u,t,s
var $async$ccl=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.aq2(d,A.yS),$async$ccl)
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
return B.i($async$ccl,v)},
cck(d){if(d==null)return!1
return d==="marriage_agreement"||d==="hati_kuhowa"||d==="hati_kuhoweya"||d==="hati_malipo_awamu"},
a6P:function a6P(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bip:function bip(d){var _=this
_.d=null
_.e=d
_.f=!1
_.c=_.a=null},
e9y:function e9y(d){this.a=d},
e9w:function e9w(d){this.a=d},
e9x:function e9x(d,e){this.a=d
this.b=e},
a7H:function a7H(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.cx=d
_.cy=e
_.x=f
_.y=!0
_.a=g
_.b=h
_.c=i
_.d=j
_.oc$=k
_.od$=l
_.oe$=m
_.nB$=n},
a7I:function a7I(d,e){this.a=d
this.b=e},
b1e:function b1e(){},
cex:function cex(){},
cey:function cey(){},
cez:function cez(d,e,f,g,h,i,j,k,l){var _=this
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
hmH(d){return new C.ah2(d)},
a1X:function a1X(){},
ah2:function ah2(d){this.a=d},
aPI:function aPI(){},
avm:function avm(d,e){this.d=d
this.b=e
this.a=null},
aRb:function aRb(d){this.b=d
this.a=null},
fou(d,e){var w=0,v=B.j(x.H)
var $async$fou=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b($.X().gxd().L8(d,e),$async$fou)
case 2:B.fBx()
return B.h(null,v)}})
return B.i($async$fou,v)},
hdl(d,e){return(A.r_[(d^e)&255]^A.o.aA(d,8))>>>0},
fm5(d,e,f,g,h,i){var w=C.hSy(d,A.d9,f,null,A.cW,g,h,i)
return w},
hfd(d){var w=F.hfW(d)
if(w==null)return""
return"- WRITE EVERYTHING THE READER SEES IN "+w+" \u2014 every title, subtitle, sentence and note, with natural, correct grammar. Do not mix in English (JSON keys stay as given)."},
huf(d){var w,v,u,t,s,r=A.a.i(d)
if(r.length===0)return"XX"
w=r.toLowerCase()
v=A.oL.h(0,w)
if(v!=null)return v
for(u=A.oL.gdL(A.oL),u=u.gag(u);u.C();){t=u.gU(u).b
if(t.toLowerCase()===w)return t}u=B.af("[^A-Z]",!0,!1,!1,!1)
s=B.aJ(r.toUpperCase(),u,"")
if(s.length>=2)return A.a.ap(s,0,2)
return A.a.ap(s+"XX",0,2)},
hfl(){var w,v
for(w=0,v='=== EVERYTHING YOU KNOW ABOUT NGMY (use only this; never invent features, numbers, prices, names or dates) ===\nTHE FOUNDER: NGMY stands for New Global Movement for Youth. It was created by KB PABLO QR (always written in capital letters), the Founder, President and CEO of NGMY. The "QR" in his name comes from QR codes, which NGMY and his business use a lot, and it is part of his brand. He built NGMY as one app (ngmy.org) that gives young people and families tools for work, money, learning, community and creativity. When a story is about the CEO, call him KB PABLO QR, Founder, President and CEO of NGMY. Do not give him a different name, age, birthplace, degrees, awards or family details, and do not make up quotes from him.\n\nFEATURES:\n';w<33;++w)v+="- "+D.d1T[w]+"\n"
v=v+"\nABOUT THE COMMUNITY AND THE SYSTEM (facts you can use; do not invent numbers, names or dates):\n- The community is M'MBONDO (also written MBONDO). Its motto is \"EMO 'YA M'MBONDO\". Members live in different US states.\n- The Civic Registry \u2014 people also just call it \"the system\" \u2014 was built inside the NGMY app for the M'MBONDO community.\n- Why it was built: a big problem in the community was not seeing where contribution money went. People gave but were unsure what happened to their money, so trust and giving went down. The system brings light: every contribution gets a receipt, members can see where the money is going and how much has been contributed, and that transparency builds trust and the confidence to keep contributing \u2014 when you know where your money goes, you give.\n- What it does:\n  \u2022 Registers community members with their details and a member ID card (Registry ID), kept safely as the community's records.\n  \u2022 Lets each state know how many members it has (state totals, nationwide totals).\n  \u2022 Records contributions with receipts and contribution reports, so everyone sees the money trail.\n  \u2022 Authorized Registrars enroll members and help them; there is a help mode for assisted sign-up.\n  \u2022 Civic Voting for community decisions, and a Civic State Wallet that shows each state's funds.\n- How NGMY helps members beyond the registry: help finding jobs and applying for them, fixing their houses, helping them get houses, sending money, and NGMY Advisors (AI advisors) who help people apply for jobs, food stamps and other benefits and fill out applications for them.\n- Tone for this community: warm, proud, hopeful and trustworthy; it is about unity, transparency and helping each other.\n\n\nHOW MEMBERS USE THE APP:\n"+"WHAT NGMY IS: NGMY stands for New Global Movement for Youth \u2014 multi-hub app by KB PABLO QR (Founder/CEO). Live site ngmy.org. Wallet balance in USD. Gmail login (@gmail.com), password 6+ chars, also Google/GitHub sign-in.\n\nBOTTOM NAV (7 tabs):\n1) Home \u2014 brand, Helper AI entry, loans, tech frames (Neural/Signal/Core/Vault Channel games).\n2) Tool Hub \u2014 Business Card Creator, Menu Studio (+ Bio Studio), Business Essentials.\n3) Slides \u2014 presentations + Marriage/Hati documents.\n4) NGMY Hub (center) \u2014 Civic Registry, NGMY Store, Help Center, Document Scanner; center star may open App Builder when enabled.\n5) Advisors \u2014 AI advisor chat (this hub).\n6) Creator Hub \u2014 Doc Share, Quote Calc, QR Generator, Play Zone, Kiswahili School, Recorder, Video Studio, Phone Unlock.\n7) Profile \u2014 theme, logout, legal, Worksheets (Projects / Cashier IOUs / Family Tree).\n\nMENU STUDIO (Tool Hub \u2192 Menu Studio):\n- Menus tab: design restaurant/business menus, publish public link https://ngmy.org/?m={slug}\n- First menu free; more menus need Menu Studio subscription (paywall shows price).\n- Bios tab (same studio): link-in-bio pages, publish https://ngmy.org/?b={slug}\n- First Bio free with starter template; more Bios/templates need Bio Studio subscription.\n- Extra Bio photo/header changes may need a photo pack after free changes.\n- Local Menu / Local Bio: Home Essentials hub \u2192 device-local publish at /local-menu/ and /local-bio/\n\nBUSINESS CARD: Tool Hub \u2192 create/edit/download. Paid unlock for edit+download window (paywall).\n\nSLIDES: Slides tab. Free blank + some class templates/designs. Slides Pro unlocks more. Marriage documents are a separate short session unlock.\n\nADVISORS: 30 free minutes, then Advisors subscription for unlimited chat (admins unlimited).\n\nCIVIC REGISTRY (NGMY Hub): community ID, PIN gate, enrollment, registrars (AR), civic registrar roles. Guest enroll can use ?civic=enroll. Georgia stays free. Every other state gets a 2-month free Civic Registry trial for Authorized Registrars, then $50/mo State Registrar sponsorship starting month 3.\n\nVAULT GAMES (Home \u2192 Vault Channel): arcade games. Need an active Growth Income investment for full access; otherwise one free play total. Free trial does not unlock games.\n\nGROWTH INCOME / INVEST: purchase a plan, daily clock-in for ROI over work days; min withdraw typically $10. Plans are $5, $20, $30, $50 and $100 (the most expensive is $100). Plan availability is admin-controlled.\n\nCREATOR TOOLS:\n- Doc Share \u2014 share docs; free individual creations then paid / org license.\n- QR Generator \u2014 free saves then paid access window.\n- Transfer \u2014 receive free; limited free sends then monthly unlock.\n- Kiswahili School \u2014 Basics free; other levels one-time unlock.\n- Document Scanner \u2014 trial then monthly.\n- Message Translator \u2014 paid unlimited.\n- Phone Unlock \u2014 short access window.\n- Video Studio / Recorder / Play Zone \u2014 Creator Hub tools.\n- Worksheets \u2192 Cashier (IOUs/receipts), Family Tree (create/photos may be paid).\n- Invoices \u2014 free standard tier with limited free premium saves; paid templates via paywall.\n- App Builder \u2014 Hub center (if enabled); cloud + Bolt AI may be paid.\n- Music Studio \u2014 AI songs may cost wallet credits when enabled.\n\nSTORE / JOBS / LOANS / HELP: Store in NGMY Hub; loans from Home; jobs/helpers need approval; Help Center + NGMY Helper AI for support.\n\nGUEST LINKS (no full login): /bio/, /local-bio/, /menu/, /local-menu/, /invoice/, /app/{slug}.\n\nHOW TO HELP MEMBERS: Give clear tap-by-tap steps. Stay in character. If unsure of a live price, send them to the feature paywall rather than guessing.\n"
return A.a.i(v.charCodeAt(0)==0?v:v)},
byQ(d,e){return C.hPa(d,e)},
hPa(d,e){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l
var $async$byQ=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
if(d.length===0){u=!1
w=1
break}r=B.hL([d],"application/pdf")
n=x.z
q=B.aSN(B.a([r],x.e3),e,B.E(["type","application/pdf"],n,n))
p=B.cA(B.E(["files",B.a([q],x.fA),"title",e],x.N,x.C))
n=window.navigator
n.toString
o=n
w=7
return B.b(B.ef(B.jT(o,"share",[p]),x.H),$async$byQ)
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
return B.i($async$byQ,v)},
fUG(){var w=0,v=B.j(x.y),u,t,s
var $async$fUG=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=$.fex
s=$.byn
if(s==null)s="presentation.pdf"
if(t==null||t.length===0){u=!1
w=1
break}u=C.byQ(t,s)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fUG,v)},
bAc(){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$bAc=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=$.fex
l=$.byn
k=l==null?"presentation.pdf":l
if(m==null||m.length===0){u=!1
w=1
break}w=Z.h9X()?3:4
break
case 3:w=5
return B.b(C.byQ(m,k),$async$bAc)
case 5:if(e){u=!0
w=1
break}case 4:r=$.byo
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
J.KD(q)
w=10
return B.b(B.bN(A.a1,null,x.H),$async$bAc)
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
return B.i($async$bAc,v)},
fUx(){var w=0,v=B.j(x.y),u,t,s,r
var $async$fUx=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=$.byo
if(r==null||r.length===0){u=!1
w=1
break}try{t=window
t.toString
A.lm.ur(t,r,"_blank")
u=!0
w=1
break}catch(q){u=!1
w=1
break}case 1:return B.h(u,v)}})
return B.i($async$fUx,v)},
fUO(d,e){var w=0,v=B.j(x.H),u,t
var $async$fUO=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:t=(self.URL||self.webkitURL).createObjectURL(B.hL([d],"text/html"))
t.toString
u=window
u.toString
A.lm.ur(u,t,"_blank")
return B.h(null,v)}})
return B.i($async$fUO,v)},
b0b(d,e){var w=0,v=B.j(x.y),u
var $async$b0b=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(B.b0d(d,e),$async$b0b)
case 3:if(g){u=!0
w=1
break}w=4
return B.b(B.b0c(d),$async$b0b)
case 4:u=g<2
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$b0b,v)}},D,P,H,Am,A8,Y,V,An,G,F,E,W,Q,Z,A_,Ao,Ap,A9,K,Aq,A0,N,X,Aa,L,Ab,Ar,O,A1,As,At,Ac,Ad,Au,Ae,Af,Ag,Av,Aw,R,Ax,I,Ay,Az,S,T,M,A2,A3,A4
J=c[1]
B=c[0]
A=c[2]
Ah=c[189]
A5=c[66]
A6=c[154]
Ai=c[49]
Aj=c[57]
U=c[204]
A7=c[52]
Ak=c[130]
Al=c[214]
C=a.updateHolder(c[4],C)
D=c[202]
P=c[91]
H=c[116]
Am=c[36]
A8=c[206]
Y=c[203]
V=c[192]
An=c[121]
G=c[173]
F=c[31]
E=c[205]
W=c[112]
Q=c[132]
Z=c[29]
A_=c[161]
Ao=c[216]
Ap=c[169]
A9=c[135]
K=c[207]
Aq=c[108]
A0=c[60]
N=c[183]
X=c[75]
Aa=c[109]
L=c[142]
Ab=c[104]
Ar=c[209]
O=c[103]
A1=c[119]
As=c[86]
At=c[114]
Ac=c[53]
Ad=c[179]
Au=c[35]
Ae=c[73]
Af=c[131]
Ag=c[213]
Av=c[215]
Aw=c[212]
R=c[67]
Ax=c[210]
I=c[158]
Ay=c[170]
Az=c[217]
S=c[47]
T=c[208]
M=c[190]
A2=c[211]
A3=c[96]
A4=c[56]
C.nK.prototype={
uL(d){var w,v,u=this,t=u.c
if(t===0)return u
w=!u.a
v=u.b
t=C.tw(t,v)
return new C.nK(t===0?!1:w,v,t)},
bIV(d){var w,v,u,t,s,r,q=this.c
if(q===0)return $.Cy()
w=q+d
v=this.b
u=new Uint16Array(w)
for(t=q-1;t>=0;--t)u[t+d]=v[t]
s=this.a
r=C.tw(w,u)
return new C.nK(r===0?!1:s,u,r)},
bJo(d){var w,v,u,t,s,r,q,p=this,o=p.c
if(o===0)return $.Cy()
w=o-d
if(w<=0)return p.a?$.fW9():$.Cy()
v=p.b
u=new Uint16Array(w)
for(t=d;t<o;++t)u[t-d]=v[t]
s=p.a
r=C.tw(w,u)
q=new C.nK(r===0?!1:s,u,r)
if(s)for(t=0;t<d;++t)if(v[t]!==0)return q.aC(0,$.a1J())
return q},
dU(d,e){var w,v,u,t,s,r=this
if(e<0)throw B.U(B.dI("shift-amount must be posititve "+e,null))
w=r.c
if(w===0)return r
v=A.o.an(e,16)
if(A.o.G(e,16)===0)return r.bIV(v)
u=w+v+1
t=new Uint16Array(u)
C.h6y(r.b,w,e,t)
w=r.a
s=C.tw(u,t)
return new C.nK(s===0?!1:w,t,s)},
mh(d,e){var w,v,u,t,s,r,q,p,o,n=this
if(e<0)throw B.U(B.dI("shift-amount must be posititve "+e,null))
w=n.c
if(w===0)return n
v=A.o.an(e,16)
u=A.o.G(e,16)
if(u===0)return n.bJo(v)
t=w-v
if(t<=0)return n.a?$.fW9():$.Cy()
s=n.b
r=new Uint16Array(t)
C.hEh(s,w,e,r)
w=n.a
q=C.tw(t,r)
p=new C.nK(q===0?!1:w,r,q)
if(w){if((s[v]&A.o.dU(1,u)-1)!==0)return p.aC(0,$.a1J())
for(o=0;o<v;++o)if(s[o]!==0)return p.aC(0,$.a1J())}return p},
aL(d,e){var w,v=this.a
if(v===e.a){w=C.cCh(this.b,this.c,e.b,e.c)
return v?0-w:w}return v?-1:1},
a70(d,e){var w,v,u,t=this,s=t.c,r=d.c
if(s<r)return d.a70(t,e)
if(s===0)return $.Cy()
if(r===0)return t.a===e?t:t.uL(0)
w=s+1
v=new Uint16Array(w)
C.hEf(t.b,s,d.b,r,v)
u=C.tw(w,v)
return new C.nK(u===0?!1:e,v,u)},
GK(d,e){var w,v,u,t=this,s=t.c
if(s===0)return $.Cy()
w=d.c
if(w===0)return t.a===e?t:t.uL(0)
v=new Uint16Array(s)
C.b8e(t.b,s,d.b,w,v)
u=C.tw(s,v)
return new C.nK(u===0?!1:e,v,u)},
bw0(d,e){var w,v,u,t,s,r=this.c,q=d.c
r=r<q?r:q
w=this.b
v=d.b
u=new Uint16Array(r)
for(t=0;t<r;++t)u[t]=w[t]&v[t]
s=C.tw(r,u)
return new C.nK(!1,u,s)},
bw_(d,e){var w,v,u=this.c,t=this.b,s=d.b,r=new Uint16Array(u),q=d.c
if(u<q)q=u
for(w=0;w<q;++w)r[w]=t[w]&~s[w]
for(w=q;w<u;++w)r[w]=t[w]
v=C.tw(u,r)
return new C.nK(!1,r,v)},
bw1(d,e){var w,v,u,t,s,r=this.c,q=d.c,p=r>q?r:q,o=this.b,n=d.b,m=new Uint16Array(p)
if(r<q){w=r
v=d}else{w=q
v=this}for(u=0;u<w;++u)m[u]=o[u]|n[u]
t=v.b
for(u=w;u<p;++u)m[u]=t[u]
s=C.tw(p,m)
return new C.nK(s!==0,m,s)},
TX(d,e){var w,v,u,t=this
if(t.c===0||e.c===0)return $.Cy()
w=t.a
if(w===e.a){if(w){w=$.a1J()
return t.GK(w,!0).bw1(e.GK(w,!0),!0).a70(w,!0)}return t.bw0(e,!1)}if(w){v=t
u=e}else{v=e
u=t}return u.bw_(v.GK($.a1J(),!1),!1)},
ad(d,e){var w,v,u=this,t=u.c
if(t===0)return e
w=e.c
if(w===0)return u
v=u.a
if(v===e.a)return u.a70(e,v)
if(C.cCh(u.b,t,e.b,w)>=0)return u.GK(e,v)
return e.GK(u,!v)},
aC(d,e){var w,v,u=this,t=u.c
if(t===0)return e.uL(0)
w=e.c
if(w===0)return u
v=u.a
if(v!==e.a)return u.a70(e,v)
if(C.cCh(u.b,t,e.b,w)>=0)return u.GK(e,v)
return e.GK(u,!v)},
aF(d,e){var w,v,u,t,s,r,q,p=this.c,o=e.c
if(p===0||o===0)return $.Cy()
w=p+o
v=this.b
u=e.b
t=new Uint16Array(w)
for(s=0;s<o;){C.h6z(u[s],v,0,t,s,p);++s}r=this.a!==e.a
q=C.tw(w,t)
return new C.nK(q===0?!1:r,t,q)},
bIU(d){var w,v,u,t
if(this.c<d.c)return $.Cy()
this.aPz(d)
w=$.fPL.c4()-$.aw5.c4()
v=C.fPN($.fPK.c4(),$.aw5.c4(),$.fPL.c4(),w)
u=C.tw(w,v)
t=new C.nK(!1,v,u)
return this.a!==d.a&&u>0?t.uL(0):t},
ck2(d){var w,v,u,t=this
if(t.c<d.c)return t
t.aPz(d)
w=C.fPN($.fPK.c4(),0,$.aw5.c4(),$.aw5.c4())
v=C.tw($.aw5.c4(),w)
u=new C.nK(!1,w,v)
if($.fPM.c4()>0)u=u.mh(0,$.fPM.c4())
return t.a&&u.c>0?u.uL(0):u},
aPz(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.c
if(f===$.h6v&&d.c===$.h6x&&g.b===$.h6u&&d.b===$.h6w)return
w=d.b
v=d.c
u=16-A.o.gaiQ(w[v-1])
if(u>0){t=new Uint16Array(v+5)
s=C.h6t(w,v,u,t)
r=new Uint16Array(f+5)
q=C.h6t(g.b,f,u,r)}else{r=C.fPN(g.b,0,f,f+2)
s=v
t=w
q=f}p=t[s-1]
o=q-s
n=new Uint16Array(q)
m=C.fPO(t,s,o,n)
l=q+1
k=r.$flags|0
if(C.cCh(r,q,n,m)>=0){k&2&&B.aj(r)
r[q]=1
C.b8e(r,l,n,m,r)}else{k&2&&B.aj(r)
r[q]=0}j=new Uint16Array(s+2)
j[s]=1
C.b8e(j,s+1,t,s,j)
i=q-1
while(o>0){h=C.hEg(p,r,i);--o
C.h6z(h,j,0,r,o,s)
if(r[i]<h){m=C.fPO(j,s,o,n)
C.b8e(r,l,n,m,r)
while(--h,r[i]<h)C.b8e(r,l,n,m,r)}--i}$.h6u=g.b
$.h6v=f
$.h6w=w
$.h6x=v
$.fPK.b=r
$.fPL.b=l
$.aw5.b=s
$.fPM.b=u},
gX(d){var w,v,u,t=new C.cCi(),s=this.c
if(s===0)return 6707
w=this.a?83585:429689
for(v=this.b,u=0;u<s;++u)w=t.$2(w,v[u])
return new C.cCj().$1(w)},
A(d,e){if(e==null)return!1
return e instanceof C.nK&&this.aL(0,e)===0},
rV(d,e){return this.aL(0,e)>0},
O(d){var w,v,u
for(w=this.c-1,v=this.b,u=0;w>=0;--w)u=u*65536+v[w]
return this.a?-u:u},
uF(d){var w,v,u,t,s,r,q,p=this,o={},n=p.c
if(n===0)return 0
w=new Uint8Array(8);--n
v=p.b
u=16*n+A.o.gaiQ(v[n])
if(u>1024)return p.a?-1/0:1/0
if(p.a)w[7]=128
t=u-53+1075
w[6]=(t&15)<<4
w[7]=(w[7]|A.o.aA(t,4))>>>0
o.a=o.b=0
o.c=n
s=new C.cCk(o,p)
n=s.$1(5)
w[6]=w[6]|n&15
for(r=5;r>=0;--r)w[r]=s.$1(8)
q=new C.cCl(w)
if(J.y(s.$1(1),1))if((w[0]&1)===1)q.$0()
else if(o.b!==0)q.$0()
else for(r=o.c;r>=0;--r)if(v[r]!==0){q.$0()
break}return J.l1(A.aG.gaP(w)).getFloat64(0,!0)},
u(d){var w,v,u,t,s,r=this,q=r.c
if(q===0)return"0"
if(q===1){if(r.a)return A.o.u(-r.b[0])
return A.o.u(r.b[0])}w=B.a([],x.s)
q=r.a
v=q?r.uL(0):r
while(v.c>1){u=$.hjD()
if(u.c===0)B.ba(D.b0B)
t=v.ck2(u).u(0)
w.push(t)
s=t.length
if(s===1)w.push("000")
if(s===2)w.push("00")
if(s===3)w.push("0")
v=v.bIU(u)}w.push(A.o.u(v.b[0]))
if(q)w.push("-")
return new B.dw(w,x.bJ).fV(0)},
$iaQr:1,
$ihE:1}
C.aPS.prototype={
K(d,e){var w,v=this.b,u=e.a,t=v.h(0,u)
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
cHC(d,e){var w=this.b.h(0,e)
return w!=null?this.a[w]:null},
gL(d){return A.d.gL(this.a)},
gal(d){return A.d.gal(this.a)},
gam(d){return this.a.length===0},
gcl(d){return this.a.length!==0},
gag(d){var w=this.a
return new J.jW(w,w.length,B.T(w).k("jW<1>"))}}
C.QZ.prototype={
cPz(){var w,v
if(this.as==null)this.baf()
w=this.as
v=w==null?null:w.anv()
return v==null?null:v.eD()},
baf(){var w,v
if(this.as!=null)return
w=this.Q
if(w!=null){v=w.anv().eD()
this.as=new C.bLO(v)}},
gY(d){return this.at}}
C.a2U.prototype={
a4(){return"CompressionType."+this.b}}
C.bFO.prototype={
eq(d){var w,v,u,t,s=this
if(d===0)return 0
if(s.c===0){s.c=8
s.b=s.a.co()}for(w=s.a,v=0;u=s.c,d>u;){v=A.o.dU(v,u)+(s.b&A.yr[u])
d-=u
s.c=8
u=w.b
u.toString
s.b=u[w.c++]}if(d>0){if(u===0){s.c=8
s.b=w.co()}w=A.o.dU(v,d)
u=s.b
t=s.c-d
v=w+(A.o.fz(u,t)&A.yr[d])
s.c=t}return v}}
C.bE9.prototype={
cFV(d,e){var w,v,u,t,s,r=this,q=new C.bFO(d)
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
t=r.cil(q)
if(t<0)return!1
if(t===0){q.eq(8)
q.eq(8)
q.eq(8)
q.eq(8)
s=r.cio(q,e)
if(s<0)return!1
v=(v<<1|v>>>31)^s^4294967295}else if(t===2){q.eq(8)
q.eq(8)
q.eq(8)
q.eq(8)
return!0}}return!0},
cil(d){var w,v,u,t
for(w=!0,v=!0,u=0;u<6;++u){t=d.eq(8)
if(t!==D.dcr[u])v=!1
if(t!==D.cRP[u])w=!1
if(!w&&!v)return-1}return v?0:2},
cio(d3,d4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9=this,d0=4294967295,d1=d3.eq(1),d2=((d3.eq(8)<<8|d3.eq(8))<<8|d3.eq(8))>>>0
c9.c=new Uint8Array(16)
for(w=0;w<16;++w){v=c9.c
u=d3.eq(1)
v.$flags&2&&B.aj(v)
v[w]=u}c9.d=new Uint8Array(256)
for(w=0,t=0;w<16;++w,t+=16)if(c9.c[w]!==0)for(s=0;s<16;++s){v=c9.d
u=d3.eq(1)
v.$flags&2&&B.aj(v)
v[t+s]=u}c9.bZ2()
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
v.$flags&2&&B.aj(v)
v[w]=s}p=new Uint8Array(6)
for(w=0;w<q;++w)p[w]=w
for(u=c9.x,o=c9.w,n=u.$flags|0,w=0;w<v;++w){m=o[w]
l=p[m]
for(;m>0;m=k){k=m-1
p[m]=p[k]}p[0]=l
n&2&&B.aj(u)
u[w]=l}c9.fr=B.c2(6,$.hhK(),!1,x.E)
for(j=0;j<q;++j){v=c9.fr
v[j]=new Uint8Array(258)
i=d3.eq(5)
for(w=0;w<r;++w){for(;;){if(i<1||i>20)return-1
if(d3.eq(1)===0)break
i=d3.eq(1)===0?i+1:i-1}v=c9.fr[j]
v.$flags&2&&B.aj(v)
v[w]=i}}v=$.hhJ()
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
if(f<h)h=f}c9.bUD(v[j],u[j],o[j],n[j],h,g,r)
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
a3=c9.asj(d3)
if(a3<0)return-1
for(a4=0;;){if(a3===e)break
if(a3===0||a3===1){a5=-1
a6=1
do{if(a6>=2097152)return-1
if(a3===0)a5+=a6
else if(a3===1)a5+=2*a6
a6*=2
a3=c9.asj(d3)}while(a3===0||a3===1);++a5
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
u[a9]=a7}else{b1=A.o.an(a8,16)
b2=A.o.G(a8,16)
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
a3=c9.asj(d3)
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
d4.bF(c3)
c1=(c1<<8^D.Gz[c1>>>24&255^v])>>>0;--c2}if(c4===c0)return c1
if(c4>c0)return-1
v=c9.b
b5=v[b5]
b6=b5>>>8
if(b8===0){b8=D.GB[b9];++b9
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
if(b8===0){b8=D.GB[b9];++b9
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
if(b8===0){b8=D.GB[b9];++b9
if(b9===512)b9=0}u=b8===1?1:0
c5=b5&255^u;++c4
if(c4===c0){c6=b7
b5=b6
c2=3
continue}if(c5!==b7){c6=c5
b5=b6
c2=3
continue}b5=v[b6]
if(b8===0){b8=D.GB[b9];++b9
if(b9===512)b9=0}u=b8===1?1:0
c2=(b5&255^u)+4
b5=v[b5>>>8]
b6=b5>>>8
if(b8===0){b8=D.GB[b9];++b9
if(b9===512)b9=0}v=b8===1?1:0
c6=b5&255^v
c4=c4+1+1
b5=b6}else for(c7=b7,c2=0,c3=0,c4=1;;c3=c7,c7=c8){if(c2>0){for(v=c3&255;;){if(c2===1)break
d4.bF(c3)
c1=c1<<8^D.Gz[c1>>>24&255^v];--c2}d4.bF(c3)
c1=(c1<<8^D.Gz[c1>>>24&255^v])>>>0}if(c4>c0)return-1
if(c4===c0)return c1
v=1e5*c9.a
if(b5>=v)return-1
u=c9.b
b5=u[b5]
c5=b5&255
b5=b5>>>8;++c4
c2=0
if(c5!==c7){d4.bF(c7)
c1=(c1<<8^D.Gz[c1>>>24&255^c7&255])>>>0
c8=c5
continue}if(c4===c0){d4.bF(c7)
c1=(c1<<8^D.Gz[c1>>>24&255^c7&255])>>>0
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
asj(d){var w,v,u,t,s=this,r=s.ay
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
bUD(d,e,f,g,h,i,j){var w,v,u,t,s,r,q,p
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
bZ2(){var w,v,u,t=this
t.fx=0
t.e=new Uint8Array(256)
for(w=0;w<256;++w){v=t.d
v===$&&B.c()
if(v[w]!==0){v=t.e
u=t.fx++
v.$flags&2&&B.aj(v)
v[u]=w}}}}
C.cus.prototype={
aG4(d,e,f){var w,v,u,t,s,r=this,q=r.a=r.bM3(e)
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
if(w>0)e.aG7(w,!1)
r.ciJ(e)
q=r.r
v=r.f
u=e.aJ5(Math.min(v,1024),v,q)
q=r.x
for(;;){v=u.c
t=u.d
t===$&&B.c()
if(!(v<t))break
if(u.aK()!==33639248)break
s=new C.b6V()
s.cPy(0,u,e,f)
q.push(s)}},
ciJ(d){var w,v,u,t,s=d.c,r=this.a-20
if(r<0)return
w=d.a6E(20,r)
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
bM3(d){var w,v,u,t,s,r,q,p,o,n
if(d.gM(0)<=4)return-1
w=d.c
v=d.gM(0)-4
u=Math.min(v,1024)
t=v-u
for(s=u-4;t>=0;){d.c=t
r=d.a6E(u,t)
q=d.c
p=r.b
d.c=q+(p==null?0:p.length-r.c)
o=new B.akA(A.hS)
o.aKm(r.eD(),A.hS,null,null)
for(n=s;n>=0;--n){o.c=n
if(o.aK()===101010256){d.c=w
return t+n}}t=t>0&&t<u?0:t-u}return-1}}
C.cuq.prototype={}
C.avK.prototype={
a4(){return"ZipEncryptionMode."+this.b}}
C.cut.prototype={
aG4(d,e,f){var w,v,u,t,s,r,q,p,o=this
if(e.aK()!==67324752)return
e.aU()
o.b=e.aU()
w=D.aBS.h(0,e.aU())
o.c=w==null?D.KV:w
o.d=e.aU()
o.e=e.aU()
o.f=e.aK()
o.r=e.aK()
o.w=e.aK()
v=e.aU()
u=e.aU()
o.x=e.amj(v)
o.y=e.h8(u).eD()
w=o.z
t=w.w
o.r=t
w=w.x
o.w=w
o.at=(o.b&1)!==0?D.aRH:D.D1
o.ay=f
o.Q=e.h8(t)
if(o.at!==D.D1&&u>2){w=o.y
w.toString
s=B.r_(w,A.hS,null,null)
for(;;){w=s.c
t=s.d
t===$&&B.c()
if(!(w<t))break
if(s.aU()===39169){s.aU()
s.aU()
s.amj(2)
w=s.b
w.toString
r=w[s.c++]
q=s.aU()
o.at=D.aRI
o.ax=new C.cuq(r,q)
w=D.aBS.h(0,q)
o.c=w==null?D.KV:w}}}if((o.b&8)!==0){p=e.aK()
if(p===134695760)o.f=e.aK()
else o.f=p
o.r=e.aK()
o.w=e.aK()}},
gM(d){return this.bjH().length},
anv(){var w,v,u,t,s,r=this,q=null,p=r.Q
if(p==null)return B.r_(new Uint8Array(0),A.hS,q,q)
w=r.at
if(w!==D.D1)if(p.gM(0)<=0)r.at=D.D1
else{if(w===D.aRH){p=r.bHe(p)
r.Q=p}else if(w===D.aRI){p=r.bGS(p)
r.Q=p}r.at=D.D1}w=r.c
if(w===D.aeI){v=p.c
u=B.df()
p=r.Q
if(p.gM(0)<=524288e3)u.b=A.p7.B6(p.eD(),!0,!1)
else{t=B.a7w(A.hS,r.w)
p=r.Q
p.toString
A.p7.a2T(p,t,!0,!1)
u.b=t.Gi()}r.Q.c=v
return B.r_(u.bd(),A.hS,q,q)}else if(w===D.aeJ){s=B.a7w(A.hS,32768)
p=r.Q
v=p.c
C.hmS().cFV(p,s)
u=s.Gi()
r.Q.c=v
return B.r_(u,A.hS,q,q)}else return B.r_(p.eD(),A.hS,q,q)},
bjH(){var w=this.Q
if(w==null)return new Uint8Array(0)
return w.eD()},
u(d){return this.x},
b6a(d){var w=this.ch,v=C.J2(C.hdl(w[0].O(0),d))
w[0]=v
v=w[1].ad(0,v.TX(0,C.J2(255)))
w[1]=v
w[1]=v.aF(0,C.J2(134775813)).ad(0,C.J2(1)).TX(0,C.J2(4294967295))
w[2]=C.J2(C.hdl(w[2].O(0),w[1].mh(0,24).O(0)))},
aP_(){var w=(this.ch[2].TX(0,C.J2(65535)).O(0)|2)>>>0
return w*((w^1)>>>0)>>>8&255},
bHe(d){var w,v,u,t,s,r=this,q=null
if(r.Q==null)return B.r_(new Uint8Array(0),A.hS,q,q)
for(w=0;w<12;++w){v=r.Q
u=v.b
u.toString
r.b6a(u[v.c++]^r.aP_())}t=r.Q.eD()
for(v=t.length,u=t.$flags|0,w=0;w<v;++w){s=t[w]^r.aP_()
r.b6a(s)
u&2&&B.aj(t)
t[w]=s}return B.r_(t,A.hS,q,q)},
bGS(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this.ax.c
if(k===1){w=d.h8(8).eD()
v=16}else if(k===2){w=d.h8(12).eD()
v=24}else{w=d.h8(16).eD()
v=32}u=d.h8(2).eD()
t=d.h8(d.gM(0)-10)
s=d.h8(10)
r=t.eD()
k=this.ay
k.toString
q=C.hDX(k,w,v)
p=new Uint8Array(B.cr(A.aG.dn(q,0,v)))
k=v*2
o=new Uint8Array(B.cr(A.aG.dn(q,v,k)))
if(!C.h5Z(A.aG.dn(q,k,k+2),u))throw B.U(B.fk("password error"))
k=new Uint8Array(16)
n=new C.bCK(k,new Uint8Array(16),p)
k=x.S
m=J.a4i(0,k)
m=n.r=new C.cem(m)
m.c=!0
m.b=m.bj0(!0,new C.arq(p))
if(m.c)m.d=B.bl(D.nU,!0,k)
else m.d=B.bl(D.yk,!0,k)
l=C.h4b(C.h4d(),64)
l.bcy(new C.arq(o))
n.w=l
n.cP6(r,0,r.length)
k=s.eD()
m=n.x
m===$&&B.c()
if(!C.h5Z(k,m))throw B.U(B.fk("macs don't match"))
return B.r_(r,A.hS,null,null)}}
C.b6V.prototype={
cPy(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=this
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
if(w>0)n.at=e.amj(w)
if(v>0){t=e.h8(v).eD()
n.ax=t
if(v>=4){s=B.r_(t,A.hS,null,null)
for(;;){t=s.c
r=s.d
r===$&&B.c()
if(!(t<r))break
q=s.aU()
p=s.aU()
o=s.a6E(p,s.c)
t=s.c
r=o.b
s.c=t+(r==null?0:r.length-o.c)
if(q===1){if(p>=8&&n.x===4294967295){n.x=o.rJ()
p-=8}if(p>=8&&n.w===4294967295){n.w=o.rJ()
p-=8}if(p>=8&&n.as===4294967295){n.as=o.rJ()
p-=8}if(p>=4&&n.y===65535)n.y=o.aK()}}}}if(u>0)e.amj(u)
f.c=n.as
t=new C.cut(D.KV,n,D.D1,B.a([C.J2(0),C.J2(0),C.J2(0)],x.f3))
n.ch=t
t.aG4(0,f,g)},
u(d){return this.at}}
C.cur.prototype={
cFW(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=new C.cus(B.a([],x.fT))
this.a=g
g.aG4(0,d,f)
g=B.a([],x.bm)
w=B.V(x.N,x.S)
v=new C.aPS(g,w)
for(u=this.a.x,t=u.length,s=0;s<u.length;u.length===t||(0,B.L)(u),++s){r=u[s]
q=r.ch
p=r.Q>>>16
o=q.x
n=A.a.c9(o,"/")||A.a.c9(o,"\\")
m=w.h(0,o)
l=m!=null?g[m]:h
if(l==null){l=n?new C.QZ(o,A.o.an(Date.now(),1000),0):C.fXw(o,q.w,q)
v.K(0,l)}l.b=p
if(r.a>>>8===3)if((p&61440)===40960){k=C.fXw(o,q.w,q)
if(k.as==null)k.baf()
o=k.as
if(o==null)j=h
else{o=o.a
j=new B.akA(A.hS)
j.aKm(o,A.hS,h,h)}i=j==null?h:j.eD()
if(i!=null)new B.JJ(!1).Hl(i,0,h,!0)}}return v}}
C.bCK.prototype={
cP6(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.w
l===$&&B.c()
l.a.C1(0,d,0,f)
for(l=e+f,w=m.c,v=d.$flags|0,u=m.b,t=e;t<l;t=s){s=t+16
r=s<=l?16:l-t
C.hmB(u,m.a)
q=m.r
if(16>u.byteLength)B.ba(B.dI("Input buffer too short",null))
if(16>w.byteLength)B.ba(B.dI("Output buffer too short",null))
p=q.c
o=q.b
if(p){o===$&&B.c()
q.bKt(u,0,w,0,o)}else{o===$&&B.c()
q.bHi(u,0,w,0,o)}for(n=0;n<r;++n){q=t+n
p=d[q]
o=w[n]
v&2&&B.aj(d)
d[q]=p^o}++m.a}l=m.w
w=l.b
w===$&&B.c()
w=new Uint8Array(w)
m.x=w
l.Ku(w,0)
m.x=A.aG.dn(m.x,0,10)
w=m.w
l=w.a
l.lq(0)
w=w.d
w===$&&B.c()
l.C1(0,w,0,w.length)
return f}}
C.cer.prototype={}
C.cev.prototype={}
C.cep.prototype={}
C.arq.prototype={}
C.ceu.prototype={
cGa(d,e,f,g){var w,v,u,t,s,r,q,p,o=this,n=o.a
n===$&&B.c()
w=n.c
n=o.b
v=n.b
v===$&&B.c()
u=A.o.e3(w+v-1,v)
t=new Uint8Array(4)
s=new Uint8Array(u*v)
n.bcy(new C.arq(A.aG.fI(d,e)))
for(r=0,q=1;q<=u;++q){for(p=3;;--p){t[p]=t[p]+1
if(t[p]!==0)break}n=o.a
o.bLr(n.a,n.b,t,s,r)
r+=v}A.aG.hj(f,g,g+w,s)
return o.a.c},
bLr(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m=this
if(e<=0)throw B.U(B.dI("Iteration count must be at least 1.",null))
w=m.b
v=w.a
v.C1(0,d,0,d.length)
v.C1(0,f,0,4)
u=m.c
u===$&&B.c()
w.Ku(u,0)
u=m.c
A.aG.hj(g,h,h+u.length,u)
for(u=g.$flags|0,t=1;t<e;++t){s=m.c
v.C1(0,s,0,s.length)
w.Ku(m.c,0)
for(s=m.c,r=s.length,q=0;q!==r;++q){p=h+q
o=g[p]
n=s[q]
u&2&&B.aj(g)
g[p]=o^n}}}}
C.ceq.prototype={}
C.ceo.prototype={}
C.arr.prototype={
A(d,e){var w,v,u
if(e==null)return!1
w=!1
if(e instanceof C.arr){v=this.a
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
w=A.o.rV(w,e.gbUU())
if(!w)e.gbUU()
return w},
aIy(d,e){this.a=0
this.b=d},
rZ(d){return this.aIy(d,null)},
aJ8(d){var w,v=this,u=v.b
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
w.aZ8(v,u)
u=w.b
u===$&&B.c()
w.aZ8(v,u)
u=v.a
return u.charCodeAt(0)==0?u:u},
aZ8(d,e){var w,v=A.o.fP(e,16)
for(w=8-v.length;w>0;--w)d.a+="0"
d.a+=v},
gX(d){var w,v=this.a
v===$&&B.c()
w=this.b
w===$&&B.c()
return B.bs(v,w,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h)}}
C.cet.prototype={
lq(d){var w,v=this
v.a.rZ(0)
v.c=0
A.aG.hc(v.b,0,4,0)
v.w=0
w=v.r
A.d.hc(w,0,w.length,0)
w=v.f
w[0]=1732584193
w[1]=4023233417
w[2]=2562383102
w[3]=271733878
w[4]=3285377520},
an_(d){var w,v=this,u=v.b,t=v.c
t===$&&B.c()
w=t+1
v.c=w
u.$flags&2&&B.aj(u)
u[t]=d&255
if(w===4){v.b_D(u,0)
v.c=0}v.a.aJ8(1)},
C1(d,e,f,g){var w=this.chd(e,f,g)
f+=w
g-=w
w=this.che(e,f,g)
this.ch4(e,f+w,g-w)},
Ku(d,e){var w,v=this,u=C.h4c(v.a),t=u.a
t===$&&B.c()
t=C.fVh(t,3)
u.a=t
w=u.b
w===$&&B.c()
u.a=(t|w>>>29)>>>0
u.b=C.fVh(w,3)
v.ch8()
v.ch5(u)
v.ar8()
v.cbk(d,e)
v.lq(0)
return 20},
b_D(d,e){var w=this,v=w.w
v===$&&B.c()
w.w=v+1
w.r[v]=J.nU(A.aG.gaP(d),d.byteOffset,d.length).getUint32(e,A.i2===w.d)
if(w.w===16)w.ar8()},
ar8(){this.cP5()
this.w=0
A.d.hc(this.r,0,16,0)},
ch4(d,e,f){while(f>0){this.an_(d[e]);++e;--f}},
che(d,e,f){var w,v
for(w=this.a,v=0;f>4;){this.b_D(d,e)
e+=4
f-=4
w.aJ8(4)
v+=4}return v},
chd(d,e,f){var w,v=0
for(;;){w=this.c
w===$&&B.c()
if(!(w!==0&&f>0))break
this.an_(d[e]);++e;--f;++v}return v},
ch8(){this.an_(128)
for(;;){var w=this.c
w===$&&B.c()
if(!(w!==0))break
this.an_(0)}},
ch5(d){var w,v=this,u=v.w
u===$&&B.c()
if(u>14)v.ar8()
u=v.d
switch(u){case A.i2:u=v.r
w=d.b
w===$&&B.c()
u[14]=w
w=d.a
w===$&&B.c()
u[15]=w
break
case A.Ds:u=v.r
w=d.a
w===$&&B.c()
u[14]=w
w=d.b
w===$&&B.c()
u[15]=w
break
default:throw B.U(B.bd("Invalid endianness: "+u.u(0)))}},
cbk(d,e){var w,v,u,t,s,r,q
for(w=this.e,v=this.f,u=d.length,t=A.i2===this.d,s=0;s<w;++s){r=v[s]
q=J.nU(A.aG.gaP(d),d.byteOffset,u)
q.$flags&2&&B.aj(q,11)
q.setUint32(e+s*4,r,t)}},
gda(d){return this.f}}
C.cew.prototype={
cP5(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
for(w=this.r,v=16;v<80;++v){u=w[v-3]^w[v-8]^w[v-14]^w[v-16]
w[v]=((u&$.pW[1])<<1|u>>>31)>>>0}t=this.f
s=t[0]
r=t[1]
q=t[2]
p=t[3]
o=t[4]
for(n=s,m=0,l=0;l<4;++l,m=j){k=$.pW[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r&q|~r&p)>>>0)+w[m]+1518500249>>>0
i=$.pW[30]
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
q=((q&i)<<30|q>>>2)>>>0}for(l=0;l<4;++l,m=j){k=$.pW[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r^q^p)>>>0)+w[m]+1859775393>>>0
i=$.pW[30]
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
q=((q&i)<<30|q>>>2)>>>0}for(l=0;l<4;++l,m=j){k=$.pW[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r&q|r&p|q&p)>>>0)+w[m]+2400959708>>>0
i=$.pW[30]
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
q=((q&i)<<30|q>>>2)>>>0}for(l=0;l<4;++l,m=j){k=$.pW[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r^q^p)>>>0)+w[m]+3395469782>>>0
i=$.pW[30]
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
C.ces.prototype={
bcy(d){var w,v,u,t,s=this,r=s.a
r.lq(0)
w=d.a
w===$&&B.c()
v=w.length
u=s.c
u===$&&B.c()
if(v>u){r.C1(0,w,0,v)
w=s.d
w===$&&B.c()
r.Ku(w,0)
w=s.b
w===$&&B.c()
v=w}else{t=s.d
t===$&&B.c()
A.aG.hj(t,0,v,w)}w=s.d
w===$&&B.c()
A.aG.hc(w,v,w.length,0)
w=s.e
w===$&&B.c()
A.aG.hj(w,0,u,s.d)
s.b7j(s.d,u,54)
s.b7j(s.e,u,92)
u=s.d
r.C1(0,u,0,u.length)},
Ku(d,e){var w,v,u=this,t=u.a,s=u.e
s===$&&B.c()
w=u.c
w===$&&B.c()
t.Ku(s,w)
s=u.e
t.C1(0,s,0,s.length)
v=t.Ku(d,e)
s=u.e
A.aG.hc(s,w,s.length,0)
s=u.d
s===$&&B.c()
t.C1(0,s,0,s.length)
return v},
b7j(d,e,f){var w,v,u
for(w=d.$flags|0,v=0;v<e;++v){u=d[v]
w&2&&B.aj(d)
d[v]=u^f}}}
C.cen.prototype={}
C.cem.prototype={
a1g(d){return(D.nU[d&255]&255|(D.nU[d>>>8&255]&255)<<8|(D.nU[d>>>16&255]&255)<<16|D.nU[d>>>24&255]<<24)>>>0},
bj0(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=a0.a
e===$&&B.c()
w=e.length
if(w<16||w>32||(w&7)!==0)throw B.U(B.dI("Key length not 128/192/256 bits.",null))
v=w>>>2
u=v+6
f.a=u
t=u+1
s=J.e1(t,x.bW)
for(u=x.S,r=0;r<t;++r)s[r]=B.c2(4,0,!1,u)
switch(v){case 4:q=J.nU(A.aG.gaP(e),e.byteOffset,w)
p=q.getUint32(0,!0)
e=s[0]
e[0]=p
o=q.getUint32(4,!0)
e[1]=o
n=q.getUint32(8,!0)
e[2]=n
m=q.getUint32(12,!0)
e[3]=m
for(r=1;r<=10;++r){p=(p^f.a1g((m>>>8|(m&$.pW[24])<<24)>>>0)^D.cur[r-1])>>>0
e=s[r]
e[0]=p
o=(o^p)>>>0
e[1]=o
n=(n^o)>>>0
e[2]=n
m=(m^n)>>>0
e[3]=m}break
case 6:q=J.nU(A.aG.gaP(e),e.byteOffset,w)
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
p=(p^f.a1g((k>>>8|(k&$.pW[24])<<24)>>>0)^j)>>>0
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
p=(p^f.a1g((k>>>8|(k&$.pW[24])<<24)>>>0)^i)>>>0
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
case 8:q=J.nU(A.aG.gaP(e),e.byteOffset,w)
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
p=(p^f.a1g((g>>>8|(g&$.pW[24])<<24)>>>0)^j)>>>0
e=s[r]
e[0]=p
o=(o^p)>>>0
e[1]=o
n=(n^o)>>>0
e[2]=n
m=(m^n)>>>0
e[3]=m;++r
if(r>=15)break
l=(l^f.a1g(m))>>>0
e=s[r]
e[0]=l
k=(k^l)>>>0
e[1]=k
h=(h^k)>>>0
e[2]=h
g=(g^h)>>>0
e[3]=g;++r}break
default:throw B.U(B.bd("Should never get here"))}return s},
bKt(b2,b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=J.nU(A.aG.gaP(b2),b2.byteOffset,16),a3=a2.getUint32(b3,!0),a4=a2.getUint32(b3+4,!0),a5=a2.getUint32(b3+8,!0),a6=a2.getUint32(b3+12,!0),a7=b6[0],a8=a3^a7[0],a9=a4^a7[1],b0=a5^a7[2],b1=a6^a7[3]
for(a7=this.a-1,w=1;w<a7;){v=D.e6[a8&255]
u=D.e6[a9>>>8&255]
t=$.pW[8]
s=D.e6[b0>>>16&255]
r=$.pW[16]
q=D.e6[b1>>>24&255]
p=$.pW[24]
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
b1=u^(o>>>24|(o&t)<<8)^(s>>>16|(s&r)<<16)^(v>>>8|(v&p)<<24)^q[3]}n=D.e6[a8&255]^C.nh(D.e6[a9>>>8&255],24)^C.nh(D.e6[b0>>>16&255],16)^C.nh(D.e6[b1>>>24&255],8)^b6[w][0]
m=D.e6[a9&255]^C.nh(D.e6[b0>>>8&255],24)^C.nh(D.e6[b1>>>16&255],16)^C.nh(D.e6[a8>>>24&255],8)^b6[w][1]
l=D.e6[b0&255]^C.nh(D.e6[b1>>>8&255],24)^C.nh(D.e6[a8>>>16&255],16)^C.nh(D.e6[a9>>>24&255],8)^b6[w][2]
b1=D.e6[b1&255]^C.nh(D.e6[a8>>>8&255],24)^C.nh(D.e6[a9>>>16&255],16)^C.nh(D.e6[b0>>>24&255],8)^b6[w][3]
a7=D.nU[n&255]
b0=D.nU[m>>>8&255]
v=this.d
u=v[l>>>16&255]
t=v[b1>>>24&255]
s=b6[w+1]
r=s[0]
q=v[m&255]
p=D.nU[l>>>8&255]
a9=D.nU[b1>>>16&255]
o=v[n>>>24&255]
k=s[1]
j=v[l&255]
i=D.nU[b1>>>8&255]
h=D.nU[n>>>16&255]
g=D.nU[m>>>24&255]
f=s[2]
e=v[b1&255]
d=v[n>>>8&255]
v=v[m>>>16&255]
a0=D.nU[l>>>24&255]
s=s[3]
a1=J.nU(A.aG.gaP(b4),b4.byteOffset,16)
a1.$flags&2&&B.aj(a1,11)
a1.setUint32(b5,(a7&255^(b0&255)<<8^(u&255)<<16^t<<24^r)>>>0,!0)
r=J.nU(A.aG.gaP(b4),b4.byteOffset,16)
r.$flags&2&&B.aj(r,11)
r.setUint32(b5+4,(q&255^(p&255)<<8^(a9&255)<<16^o<<24^k)>>>0,!0)
k=J.nU(A.aG.gaP(b4),b4.byteOffset,16)
k.$flags&2&&B.aj(k,11)
k.setUint32(b5+8,(j&255^(i&255)<<8^(h&255)<<16^g<<24^f)>>>0,!0)
f=J.nU(A.aG.gaP(b4),b4.byteOffset,16)
f.$flags&2&&B.aj(f,11)
f.setUint32(b5+12,(e&255^(d&255)<<8^(v&255)<<16^a0<<24^s)>>>0,!0)},
bHi(b1,b2,b3,b4,b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=J.nU(A.aG.gaP(b1),b1.byteOffset,16).getUint32(b2,!0),a1=J.nU(A.aG.gaP(b1),b1.byteOffset,16).getUint32(b2+4,!0),a2=J.nU(A.aG.gaP(b1),b1.byteOffset,16).getUint32(b2+8,!0),a3=J.nU(A.aG.gaP(b1),b1.byteOffset,16).getUint32(b2+12,!0),a4=this.a,a5=b5[a4],a6=a0^a5[0],a7=a1^a5[1],a8=a2^a5[2],a9=a4-1,b0=a3^a5[3]
for(a5=a8,a4=a7;a9>1;){w=D.e5[a6&255]
v=D.e5[b0>>>8&255]
u=$.pW[8]
t=D.e5[a5>>>16&255]
s=$.pW[16]
r=D.e5[a4>>>24&255]
q=$.pW[24]
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
b0=v^(a7>>>24|(a7&u)<<8)^(t>>>16|(t&s)<<16)^(w>>>8|(w&q)<<24)^r[3]}p=D.e5[a6&255]^C.nh(D.e5[b0>>>8&255],24)^C.nh(D.e5[a5>>>16&255],16)^C.nh(D.e5[a4>>>24&255],8)^b5[a9][0]
o=D.e5[a4&255]^C.nh(D.e5[a6>>>8&255],24)^C.nh(D.e5[b0>>>16&255],16)^C.nh(D.e5[a5>>>24&255],8)^b5[a9][1]
n=D.e5[a5&255]^C.nh(D.e5[a4>>>8&255],24)^C.nh(D.e5[a6>>>16&255],16)^C.nh(D.e5[b0>>>24&255],8)^b5[a9][2]
b0=D.e5[b0&255]^C.nh(D.e5[a5>>>8&255],24)^C.nh(D.e5[a4>>>16&255],16)^C.nh(D.e5[a6>>>24&255],8)^b5[a9][3]
a4=D.yk[p&255]
a5=this.d
w=a5[b0>>>8&255]
v=a5[n>>>16&255]
u=D.yk[o>>>24&255]
t=b5[0]
s=t[0]
r=a5[o&255]
q=a5[p>>>8&255]
a7=D.yk[b0>>>16&255]
m=a5[n>>>24&255]
l=t[1]
k=a5[n&255]
j=D.yk[o>>>8&255]
i=D.yk[p>>>16&255]
h=a5[b0>>>24&255]
g=t[2]
f=D.yk[b0&255]
e=a5[n>>>8&255]
a8=a5[o>>>16&255]
a5=a5[p>>>24&255]
t=t[3]
d=J.nU(A.aG.gaP(b3),b3.byteOffset,16)
d.$flags&2&&B.aj(d,11)
d.setUint32(b4,(a4&255^(w&255)<<8^(v&255)<<16^u<<24^s)>>>0,!0)
d.setUint32(b4+4,(r&255^(q&255)<<8^(a7&255)<<16^m<<24^l)>>>0,!0)
d.setUint32(b4+8,(k&255^(j&255)<<8^(i&255)<<16^h<<24^g)>>>0,!0)
d.setUint32(b4+12,(f&255^(e&255)<<8^(a8&255)<<16^a5<<24^t)>>>0,!0)}}
C.bLN.prototype={}
C.bLO.prototype={
gM(d){var w=this.a.length
return w},
anv(){return B.r_(this.a,A.hS,null,null)}}
C.b8t.prototype={
uH(d){return C.hH9(d)}}
C.coq.prototype={
M3(d){var w=d.w,v=Math.max(1,A.k.dw(w/186)),u=Math.max(0,w-16*(v-1))/v,t=u/0.52
return new B.a94(v,t+20,u+16,t,u,B.tG(d.x))},
nc(d){return!1}}
C.bMG.prototype={
cAm(d){if(this.b)throw B.U(B.bd("FontLoader is already loaded"))
this.c.push(d.bz(new C.bMH(),x.E))},
mx(d){var w=0,v=B.j(x.H),u=this,t,s,r,q,p
var $async$mx=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(u.b)throw B.U(B.bd("FontLoader is already loaded"))
u.b=!0
t=u.c,s=t.length,r=u.a,q=0
case 2:if(!(q<t.length)){w=4
break}p=C
w=6
return B.b(t[q],$async$mx)
case 6:w=5
return B.b(p.fou(f,r),$async$mx)
case 5:case 3:t.length===s||(0,B.L)(t),++q
w=2
break
case 4:return B.h(null,v)}})
return B.i($async$mx,v)}}
C.aur.prototype={
a4(){return"SystemUiMode."+this.b}}
C.a7u.prototype={
A(d,e){if(e==null)return!1
if(J.bL(e)!==B.b_(this))return!1
return e instanceof C.a7u&&e.a===this.a},
gX(d){return B.bs(B.b_(this),B.wr(this.a),A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h)},
u(d){var w="<optimized out>#"
if(B.b_(this)===D.ftD)return"["+(w+B.e3(this.a))+"]"
return"[ObjectKey "+(w+B.e3(this.a))+"]"}}
C.aUf.prototype={
c_(d){var w=new C.azh(!0,this.e,null,new B.dd(),B.cg())
w.bY()
w.scC(null)
return w},
c7(d,e){var w
x.cQ.a(e)
e.syj(0,!0)
w=this.e
if(!w.A(0,e.ak)){e.ak=w
e.aEH()}}}
C.azh.prototype={
syj(d,e){return},
gpf(){var w=this.ab$
return w!=null},
gkX(){var w=this.ab$
return w!=null},
LT(d){var w=d==null?B.fZU(null):d
w.sa3N(this.ak)
return w}}
C.a_W.prototype={
T(){return new C.aHF(B.aW(x.N))},
cNi(d){return this.d.$1(d)},
cL5(){return this.e.$0()}}
C.aHF.prototype={
a_(){this.a1()
this.Oq()},
Oq(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Oq=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.a.cL5(),$async$Oq)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.f0k(t,s))
case 1:return B.h(u,v)}})
return B.i($async$Oq,v)},
Y5(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$Y5=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.a.c
q=B.T(r).k("a2<1>")
p=B.B(new B.a2(r,new C.f0o(t),q),q.k("H.E"))
if(p.length===0||t.r){w=1
break}t.m(new C.f0p(t))
w=3
return B.b(C.amk(p),$async$Y5)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.f0q(t,s,p))
w=4
return B.b(t.Oq(),$async$Y5)
case 4:case 1:return B.h(u,v)}})
return B.i($async$Y5,v)},
a0e(d){return this.clf(d)},
clf(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a0e=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}t.m(new C.f0l(t))
s=J.q(d,"id")
w=3
return B.b(C.bX8(J.k(s==null?"":s)),$async$a0e)
case 3:r=f
if(r==null){if(t.c==null){w=1
break}t.m(new C.f0m(t))
w=1
break}q=C.fUM(r,!1)
q.z=!1
s=t.a
s.toString
w=4
return B.b(s.cNi(B.a([q],x.D)),$async$a0e)
case 4:if(t.c==null){w=1
break}t.m(new C.f0n(t,r))
case 1:return B.h(u,v)}})
return B.i($async$a0e,v)},
Op(d,e){return this.bHH(0,e)},
bHH(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$Op=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}s=J.a8(e)
r=s.h(e,"name")
q=J.k(r==null?"this presentation":r)
r=t.c
r.toString
w=3
return B.b(B.c9(null,null,!0,null,new C.f0f(q),r,null,!0,!0,x.y),$async$Op)
case 3:if(g!==!0||t.c==null){w=1
break}t.m(new C.f0g(t))
s=s.h(e,"id")
w=4
return B.b(C.amj(J.k(s==null?"":s)),$async$Op)
case 4:if(t.c==null){w=1
break}t.m(new C.f0h(t))
w=5
return B.b(t.Oq(),$async$Op)
case 5:case 1:return B.h(u,v)}})
return B.i($async$Op,v)},
czp(d){var w=B.bi(d),v=w==null?null:w.bR()
if(v==null)return""
return A.i9[B.bG(v)-1]+" "+B.bQ(v)},
aOR(d,e){var w=null,v=B.m(e*0.3)
return B.p(w,B.W(d,A.c,w,w,w,e*0.5),A.f,w,w,new B.o(w,w,w,v,w,D.Nq,A.n),w,e,w,w,w,w,w,e)},
aOQ(d){return this.aOR(d,44)},
b4y(d,e,f,g){var w,v,u=null,t=this.w===d,s=t?D.Nq:u,r=B.m(14),q=B.W(e,t?A.c:A.az,u,u,u,17),p=x.p
q=B.a([q,L.Ih,B.d(f,u,u,u,u,u,u,B.l(u,u,t?A.c:A.az,u,u,u,u,u,u,u,u,13.5,u,u,A.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],p)
if(g>0){w=A.c.j(t?0.25:0.1)
v=B.m(10)
A.d.v(q,B.a([L.Ih,B.p(u,B.d(""+g,u,u,u,u,u,u,B.l(u,u,t?A.c:A.aR,u,u,u,u,u,u,u,u,11,u,u,A.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.f,u,u,new B.o(w,u,u,v,u,u,A.n),u,u,u,u,D.btv,u,u,u)],p))}return B.D(B.aE(A.c5,B.dg(u,B.A(q,A.m,u,A.ba,A.j,0,u,u),u,u,A.bb,new B.o(u,u,u,r,u,s,A.n),A.hW,u,u,u,A.uW,u,u,u),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.f0u(this,d),u,u,u,u,u,u,!1,A.a8),1)},
cfb(d){var w,v,u,t,s,r,q=null,p=this.d.t(0,d.a),o=p?A.d7.j(0.14):D.WE,n=B.m(18),m=p?A.d7:A.dq
m=B.I(m,A.r,p?1.8:1)
w=this.aOQ(A.pG)
v=B.d(d.b,q,1,A.a2,q,q,q,D.aOQ,q,q,q)
u=d.r.length
t=u===1?"":"s"
s=x.p
t=B.D(B.v(B.a([v,A.cZ,B.d(""+u+" slide"+t,q,q,q,q,q,q,D.aOS,q,q,q)],s),A.F,q,A.e,A.j,0,A.p),1)
v=p?D.Nq:q
u=p?q:B.I(A.b5,A.r,1.6)
r=p?D.bJ5:q
return B.aE(q,B.dg(q,B.A(B.a([w,A.bf,t,B.dg(q,r,q,q,A.bb,new B.o(q,q,u,q,q,v,A.a6),A.fF,q,26,q,q,q,q,26)],s),A.m,q,A.e,A.j,0,q,q),q,q,A.bb,new B.o(o,q,m,n,q,q,A.n),A.fF,q,q,A.dc,A.bm,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.f0j(this,p,d),q,q,q,q,q,q,!1,A.a8)},
cmN(d){var w,v,u,t,s,r=this,q=null,p=J.a8(d),o=p.h(d,"savedAt"),n=r.czp(J.k(o==null?"":o))
o=B.m(18)
w=B.I(A.dq,A.r,1)
v=r.aOQ(A.ME)
u=p.h(d,"name")
u=B.d(J.k(u==null?"Presentation":u),q,1,A.a2,q,q,q,D.aOQ,q,q,q)
p=p.h(d,"slides")
p=B.t(p==null?"?":p)
t=n.length===0?"":" \xb7 saved "+n
s=x.p
t=B.D(B.v(B.a([u,A.cZ,B.d(p+" slides"+t,q,q,q,q,q,q,D.aOS,q,q,q)],s),A.F,q,A.e,A.j,0,A.p),1)
p=r.b1g(A.hy,A.bs,"Bring it back",r.r?q:new C.f0r(r,d))
return B.p(q,B.A(B.a([v,A.bf,t,p,A.bp,r.b1g(A.e4,A.cr,"Delete",r.r?q:new C.f0s(r,d))],s),A.m,q,A.e,A.j,0,q,q),A.f,q,q,new B.o(D.WE,q,w,o,q,q,A.n),q,q,q,A.dc,D.bo3,q,q,q)},
b1g(d,e,f,g){var w=null,v=g==null,u=e.j(v?0.06:0.14)
return B.hp(B.aE(w,B.p(w,B.W(d,v?A.b5:e,w,w,w,19),A.f,w,w,new B.o(u,w,w,w,w,w,A.a6),w,38,w,w,w,w,w,38),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a8),w,f,w,w)},
arp(d,e,f){var w=null
return new B.C(D.bn5,B.v(B.a([B.W(d,A.b5,w,w,w,46),A.ac,B.d(e,w,w,w,w,w,w,D.f13,w,w,w),A.at,B.d(f,w,w,w,w,w,w,D.eUG,A.L,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),w)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.e
if(h==null)h=A.c6
w=j.a.c.length
v=w!==0&&j.d.a===w
w=B.aI(d,A.bS,x.w).w
u=B.p(i,i,A.f,i,i,new B.o(A.b5,i,i,B.m(3),i,i,A.n),i,4,i,i,i,i,i,42)
t=x.p
s=B.a([j.aOR(A.y7,46),A.bf,D.buj],t)
if(j.r)s.push(D.e2v)
s.push(B.aH(i,i,i,i,A.Nb,i,i,i,new C.f0x(d),i,i,i,i,i,i))
s=B.A(s,A.m,i,A.e,A.j,0,i,i)
r=A.c.j(0.05)
q=B.m(18)
p=B.I(A.dq,A.r,1)
o=J.a8(h)
q=B.a([A.S,u,new B.C(D.bqC,s,i),B.p(i,B.A(B.a([j.b4y(0,A.xH,"Save",j.a.c.length),j.b4y(1,A.MT,"Saved",o.gM(h))],t),A.m,i,A.e,A.j,0,i,i),A.f,i,i,new B.o(r,i,p,q,i,i,A.n),i,i,i,D.bpG,A.en,i,i,i)],t)
if(j.x!=null){u=(j.y?A.cr:A.bs).j(0.12)
s=B.m(14)
r=B.I((j.y?A.cr:A.bs).j(0.4),A.r,1)
p=j.y
n=p?A.MF:A.ee
n=B.W(n,p?A.cr:A.bs,i,i,i,18)
m=j.x
m.toString
q.push(B.p(i,B.A(B.a([n,A.ab,B.D(B.d(m,i,i,i,i,i,i,A.a6z,i,i,i),1)],t),A.m,i,A.e,A.j,0,i,i),A.f,i,i,new B.o(u,i,r,s,i,i,A.n),i,i,i,D.bpC,A.iO,i,i,1/0))}u=B.a([],t)
if(j.w===0){s=j.d.a
s=B.a([B.D(B.d(s===0?"Tap the ones to save":""+s+" picked",i,i,i,i,i,i,D.eYb,i,i,i),1)],t)
if(j.a.c.length!==0)s.push(B.aE(i,B.d(v?"Clear":"Pick all",i,i,i,i,i,i,D.f0a,i,i,i),A.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new C.f0y(j,v),i,i,i,i,i,i,!1,A.a8))
s=B.a([B.A(s,A.m,i,A.e,A.j,0,i,i),A.S],t)
if(j.a.c.length===0)s.push(j.arp(A.pG,"No presentations yet","Make one first, then save it here."))
for(r=j.a.c,p=r.length,l=0;l<r.length;r.length===p||(0,B.L)(r),++l)s.push(j.cfb(r[l]))
A.d.v(u,s)}else{s=B.a([],t)
if(j.f)s.push(D.e23)
else if(j.e==null)s.push(j.arp(A.ajl,"Could not reach the database","Check the connection, then open this again."))
else if(o.gam(h))s.push(j.arp(A.ov,"Nothing saved yet","Save some presentations and they will show up here."))
for(r=o.gag(h);r.C();)s.push(j.cmN(r.gU(r)))
A.d.v(u,s)}q.push(new B.dm(1,A.ci,B.cB(u,i,Y.agt,i,i,A.ai,!0),i))
if(j.w===0){u=j.d
s=u.a===0
r=s||j.r?i:j.gc0w()
p=s?i:D.Nq
s=s?A.c.j(0.07):i
o=B.m(18)
n=u.a===0?i:B.a([new B.ac(0,A.G,A.b4.j(0.4),A.cx,18)],x.V)
u=u.a
m=u===0
k=B.W(A.xH,m?A.j4:A.c,i,i,i,21)
u=m?"Pick presentations to save":"Save "+u+" to the database"
q.push(new B.C(D.bqe,B.aE(i,B.dg(i,B.A(B.a([k,A.a60,new B.dm(1,A.ci,B.f1(A.A,B.d(u,i,i,i,i,i,i,B.l(i,i,m?A.j4:A.c,i,i,i,i,i,i,i,i,15,i,i,A.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),A.f,A.eg),i)],t),A.m,i,A.ba,A.j,0,i,i),i,i,A.bb,new B.o(s,i,i,o,n,p,A.n),A.hW,i,54,i,i,i,i,i),A.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,r,i,i,i,i,i,i,!1,A.a8),i))}else q.push(A.S)
return B.p(i,B.bn(!0,B.v(q,A.m,i,A.e,A.Q,0,A.p),!0,!1,A.ag,!0,!1),A.f,i,new B.aY(0,1/0,0,w.a.b*0.9),D.aYz,i,i,i,i,i,i,i,i)}}
C.oa.prototype={
ae(){return B.E(["id",this.a,"doc",this.b.ae(),"updatedAt",this.c.a5().ac()],x.N,x.z)}}
C.XJ.prototype={
T(){return new C.awh(B.a([],x.k),B.fe(null,x.H))},
gdX(){return this.c}}
C.awh.prototype={
a_(){this.a1()
this.Ox()},
Ox(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Ox=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(C.a0V(t.a.c),$async$Ox)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.cDG(t,s))
case 1:return B.h(u,v)}})
return B.i($async$Ox,v)},
csN(d){var w,v,u,t=this
d.c=new B.S(Date.now(),0,!1)
w=J.q3(t.d,new C.cDJ(d))
v=w<0
if(v&&C.hEj(d))return t.f
u=t.d
if(v)J.pl(u,0,d)
else J.aG(u,w,d)
v=x.a
B.fLC(new C.cDK(t),v)
return t.f=t.f.bz(new C.cDL(t,d),v).eU(new C.cDM())},
I5(d,e,f){return this.c8S(0,e,f)},
aWl(d,e){return this.I5(0,e,!1)},
c8S(d,e,f){var w=0,v=B.j(x.H),u,t=this,s
var $async$I5=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.a5(s,!1).ce(B.ej(new C.cDF(t,e),!1,null,x.H)),$async$I5)
case 3:w=4
return B.b(t.f,$async$I5)
case 4:w=5
return B.b(t.Ox(),$async$I5)
case 5:case 1:return B.h(u,v)}})
return B.i($async$I5,v)},
aVC(d){var w=A.o.u(1000*Date.now()),v=d==null?D.doK:d
this.I5(0,new C.oa(w,v,new B.S(Date.now(),0,!1)),!0)},
c01(){return this.aVC(null)},
ac8(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$ac8=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.bW(A.K,null,new C.cDN(),r,!1,!1,!0,null,!1,!1,x.g2),$async$ac8)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.aVC(s)
case 1:return B.h(u,v)}})
return B.i($async$ac8,v)},
I4(d,e){return this.bHz(0,e)},
bHz(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$I4=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return B.b(B.c9(null,null,!0,null,new C.cDA(e),s,null,!0,!0,x.y),$async$I4)
case 3:if(g!==!0){w=1
break}t.m(new C.cDB(t,e))
w=4
return B.b(t.f,$async$I4)
case 4:w=5
return B.b(C.afa(t.a.c,e.a),$async$I4)
case 5:w=6
return B.b(t.Ox(),$async$I4)
case 6:case 1:return B.h(u,v)}})
return B.i($async$I4,v)},
CL(d){return this.bzQ(d)},
bzQ(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$CL=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.bW(A.K,null,new C.cDw(d),r,!0,!0,!1,null,!1,!1,x.N),$async$CL)
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
return B.b(t.aWl(0,d),$async$CL)
case 9:w=5
break
case 7:w=10
return B.b(F.fVj(r,d.b,null),$async$CL)
case 10:w=5
break
case 8:w=11
return B.b(t.I4(0,d),$async$CL)
case 11:w=5
break
case 5:case 1:return B.h(u,v)}})
return B.i($async$CL,v)},
bUR(){var w,v,u=null,t=[D.doN,D.doL,D.doM],s=new C.cDD(),r=B.m(26),q=x.V,p=B.a([new B.ac(0,A.G,A.da.j(0.4),A.eT,24)],q),o=x.p,n=B.a([],o)
for(w=0;w<3;++w){v=new B.aV(999,999)
n.push(B.p(u,new B.x(D.d9i[w],u,A.o4,u,u,u,u,u,u,u,u,u),A.f,u,u,new B.o(A.c.j(0.18),u,u,new B.bp(v,v,v,v),u,u,A.n),u,u,u,u,A.nL,u,u,u))}return B.p(u,B.A(B.a([B.D(B.v(B.a([D.fpb,A.P,B.c_(A.bD,n,A.bt,6,6),A.aO,B.aE(u,B.p(u,D.eDS,A.f,u,u,new B.o(A.c,u,u,B.m(999),B.a([new B.ac(0,A.G,A.w.j(0.2),A.cJ,10)],q),u,A.n),u,u,u,u,U.agR,u,u,u),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.cDC(this),u,u,u,u,u,u,!1,A.a8)],o),A.F,u,A.e,A.j,0,A.p),1),new B.a6(130,110,new B.an(A.A,u,A.aa,A.q,B.a([s.$3(t[0],-0.22,-30),s.$3(t[2],0.22,30),s.$3(t[1],0,0)],o),u),u)],o),A.m,u,A.e,A.j,0,u,u),A.f,u,u,new B.o(u,u,u,r,p,D.bR_,A.n),u,u,u,u,D.bqM,u,u,u)},
bzO(d){var w,v=null,u=d.b.d.length,t=B.m(6),s=B.a([new B.ac(0,A.G,A.w.j(0.5),A.cx,14)],x.V),r=x.p
s=B.p(v,B.bw(B.m(6),new B.an(A.W,v,A.b_,A.q,B.a([B.f1(A.A,F.amS(d.b),A.f,A.bQ),D.e7O,B.ao(v,B.aE(v,B.p(v,D.bJS,A.f,v,v,D.aZu,v,26,v,v,v,v,v,26),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.cDr(this,d),v,v,v,v,v,v,!1,A.a8),v,v,v,4,4,v)],r),v),A.aq),A.f,v,v,new B.o(v,v,v,t,s,v,A.n),v,v,v,v,v,v,v,v)
t=A.a.i(d.b.a)
t=B.d(t.length===0?"Untitled Book":t,v,1,A.a2,v,v,v,D.eS6,v,v,v)
w=u===1?"":"s"
return B.aE(v,B.v(B.a([new B.fG(0.6470588235294118,s,v),A.P,t,B.d(""+u+" page"+w,v,v,v,v,v,v,D.eYl,v,v,v)],r),A.F,v,A.e,A.j,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,new C.cDs(this,d),v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.cDt(this,d),v,v,v,v,v,v,!1,A.a8)},
B(d){var w,v,u,t=this,s=null,r=x.p,q=B.eD(B.a([new B.C(H.afp,B.hp(B.aE(s,B.p(s,A.am5,A.f,s,s,new B.o(s,s,s,s,B.a([new B.ac(0,A.G,A.b4.j(0.5),A.J,12)],x.V),E.vw,A.a6),s,36,s,s,s,s,s,36),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.gc1h(),s,s,s,s,s,s,!1,A.a8),s,"Write with AI",s,s),s)],r),s,s,!0,!0,A.K,s,1,!0,s,0,!1,s,!1,E.mO,s,s,s,!0,s,s,s,s,s,D.fpf,s,s,s,1,s,!0)
if(t.e)r=D.b1T
else{w=t.bUR()
v=B.a([D.fbj,A.ab],r)
if(J.cx(t.d)){u=B.m(999)
v.push(B.p(s,B.d(""+J.ad(t.d),s,s,s,s,s,s,D.eRy,s,s,s),A.f,s,s,new B.o(D.b6u,s,s,u,s,s,A.n),s,s,s,s,A.xp,s,s,s))}r=B.a([new B.nH(A5.XN,new B.m_(w,s),s),new B.nH(D.bq8,new B.m_(B.A(v,A.m,s,A.e,A.j,0,s,s),s),s)],r)
if(J.ck(t.d))r.push(D.eJS)
else r.push(new B.nH(D.bpE,B.O9(new B.of(new C.cDO(t),J.ad(t.d),!0,!0,!0,0,B.rG(),s),D.b1a),s))
r=B.ve(0,s,A.q,s,A.y,s,s,s,s,s,!1,s,A.ai,!1,r)}return B.cb(q,D.b5i,r,s,!1,!1,s,s)}}
C.XH.prototype={
T(){return new C.awd(B.a([],x.bx))},
Td(d){return this.d.$1(d)}}
C.aDz.prototype={}
C.awd.prototype={
aZa(d,e,f){var w=$.aw(),v=new B.ar(new B.bb(d,A.b2,A.aN),w),u=this.gaWk()
v.aM(0,u)
w=new B.ar(new B.bb(e,A.b2,A.aN),w)
w.aM(0,u)
return new C.aDz(v,w,f)},
DA(){var w,v=this
v.y=!0
w=v.x
if(w!=null)w.a9(0)
v.x=B.cM(A.pu,new C.cCV(v))},
a_(){var w,v,u,t,s,r,q,p,o,n,m=this
m.a1()
w=m.a.c.b
v=$.aw()
u=new B.ar(new B.bb(w.a,A.b2,A.aN),v)
t=m.gaWk()
u.aM(0,t)
m.d!==$&&B.aO()
m.d=u
u=new B.ar(new B.bb(w.b,A.b2,A.aN),v)
u.aM(0,t)
m.e!==$&&B.aO()
m.e=u
u=new B.ar(new B.bb(w.c,A.b2,A.aN),v)
u.aM(0,t)
m.f!==$&&B.aO()
m.f=u
m.r=w.e
for(u=w.d,s=u.length,r=m.w,q=0;q<u.length;u.length===s||(0,B.L)(u),++q){p=u[q]
o=new B.ar(new B.bb(p.a,A.b2,A.aN),v)
o.aM(0,t)
n=new B.ar(new B.bb(p.b,A.b2,A.aN),v)
n.aM(0,t)
r.push(new C.aDz(o,n,p.c))}if(r.length===0)r.push(m.aZa("Page 1","",""))},
q(){var w,v,u,t,s,r=this,q=r.x
if(q!=null)q.a9(0)
if(r.y){r.a.c.b=r.goR()
q=r.a
q.Td(q.c)}q=r.d
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
t.push(new F.mk(A.a.i(p.a.a.a),p.b.a.a,p.c,""))}return new F.r4(n,w,v,t,u)},
Ap(){var w=0,v=B.j(x.H),u=this,t
var $async$Ap=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.x
if(t!=null)t.a9(0)
u.y=!1
u.a.c.b=u.goR()
t=u.a
w=2
return B.b(t.Td(t.c),$async$Ap)
case 2:return B.h(null,v)}})
return B.i($async$Ap,v)},
c1f(){this.m(new C.cCU(this))
this.DA()},
aVj(d,e){var w=this,v=d+e
if(v<0||v>=w.w.length)return
w.m(new C.cCX(w,d,v))
w.DA()},
c1g(d,e){var w=A.d.cA(this.w,e)
this.m(new C.cD4())
this.DA()
$.aT.x1$.push(new C.cD5(w))},
PI(d){return this.cf1(d)},
cf1(d){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$PI=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hW().l_(80,1400,A.eG),$async$PI)
case 7:q=f
if(q==null){w=1
break}w=8
return B.b(q.fe(),$async$PI)
case 8:p=f
o=q.b.toLowerCase()
n=J.agH(o,".png")?"image/png":"image/jpeg"
r.m(new C.cCY(d,n,p))
r.DA()
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
return B.i($async$PI,v)},
xl(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$xl=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(F.hgZ(r,t.goR()),$async$xl)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.cCW(t,s))
t.DA()
case 1:return B.h(u,v)}})
return B.i($async$xl,v)},
cfj(d){var w,v=this,u=null,t=F.fsC(d.c)
if(t==null)return new B.bI(A.a3,u,u,B.hc(D.bDf,D.fdI,new C.cD_(v,d),u),u)
w=x.p
return new B.C(A.cG,new B.an(A.W,u,A.aa,A.q,B.a([B.bw(B.m(12),B.fL(t,A.A,u,u,A.cm,A.bQ,!0,140,!1,u,1/0),A.aq),B.ao(u,B.A(B.a([v.b1h(A.kK,new C.cD0(v,d)),A.bp,v.b1h(A.cy,new C.cD1(v,d))],w),A.m,u,A.e,A.j,0,u,u),u,u,u,6,6,u)],w),u),u)},
b1h(d,e){var w=null
return B.aF(!1,A.a1,!0,w,B.aK(!1,w,!0,new B.C(A.hv,B.W(d,A.c,w,w,w,18),w),A.cL,!0,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,w),A.f,A.aX,0,w,w,A.cL,w,w,A.af)},
I6(){var w=0,v=B.j(x.H),u,t=this,s
var $async$I6=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.Ap(),$async$I6)
case 3:s=t.c
if(s==null){w=1
break}w=4
return B.b(F.fVj(s,t.goR(),new C.cD3(t)),$async$I6)
case 4:case 1:return B.h(u,v)}})
return B.i($async$I6,v)},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=x.p,k=B.eD(B.a([new B.C(A.qG,B.hc(D.bHR,D.fjz,n.gav3(),B.fu(m,m,m,m,m,m,m,m,m,m,m,A.bJ,m,m,m,m,m,m,m,m,m,m,m,m,m,m)),m),B.aH(m,m,m,m,A.am4,m,m,m,new C.cD6(n,d),m,m,m,m,"Save",m)],l),m,m,!0,!0,E.VR,m,1,m,m,m,!1,m,!1,E.mO,m,m,m,!0,m,m,m,m,m,D.fez,m,m,m,1,m,!0),j=Au.aSY(N.l1,A.c,Ae.UL,A.nP,D.ffi,n.gc1e()),i=B.m(18),h=n.gav2(),g=B.a([new B.ac(0,A.G,A.w.j(0.4),A.jf,12)],x.V)
g=B.aE(m,B.p(m,new B.a6(92,142.1818181818182,B.f1(A.A,F.amS(n.goR()),A.f,A.dt),m),A.f,m,m,new B.o(m,m,m,m,g,m,A.n),m,m,m,m,m,m,m,m),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,h,m,m,m,m,m,m,!1,A.a8)
w=n.r
w===$&&B.c()
i=B.p(m,B.A(B.a([g,A.eB,B.D(B.v(B.a([D.fqJ,A.at,B.d(F.fTQ(w.a).b+" template \xb7 pick from 10, change colours, add your picture.",m,m,m,m,m,m,D.f2M,m,m,m),A.S,B.dp(E.alm,E.aPB,h,B.bk(A.da,m,m,m,m,m,m,m,m,m,m,m))],l),A.F,m,A.e,A.j,0,A.p),1)],l),A.m,m,A.e,A.j,0,m,m),A.f,m,m,new B.o(E.VR,m,m,i,m,m,A.n),m,m,m,m,A.bm,m,m,m)
h=n.d
h===$&&B.c()
h=B.aL(m,A.T,!1,m,!0,A.q,m,B.aM(),h,m,m,m,m,m,2,B.br(m,new B.b4(4,B.m(12),A.dg),m,m,m,m,m,m,!0,m,m,m,m,m,m,A.c,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,"Book title",!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.ah,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,A.o3,!0,A.a5,m,A.am,m,m,m,m)
w=n.e
w===$&&B.c()
w=B.aL(m,A.T,!1,m,!0,A.q,m,B.aM(),w,m,m,m,m,m,2,B.br(m,new B.b4(4,B.m(12),A.dg),m,m,m,m,m,m,!0,m,m,m,m,m,m,A.c,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,"Subtitle (optional)",!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.ah,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.a5,m,A.am,m,m,m,m)
g=n.f
g===$&&B.c()
g=B.a([i,A.ay,h,A.P,w,A.P,B.aL(m,A.T,!1,m,!0,A.q,m,B.aM(),g,m,m,m,m,m,2,B.br(m,new B.b4(4,B.m(12),A.dg),m,m,m,m,m,m,!0,m,m,m,m,m,m,A.c,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,"Author (optional)",!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.ah,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.a5,m,A.am,m,m,m,m),A.aO],l)
for(i=n.w,v=0;v<i.length;v=t){h=i[v]
w=new B.aV(16,16)
u=new B.az(N.l1.j(0.18),1,A.r,-1)
t=v+1
s=B.aH(m,m,m,m,D.bGB,m,m,m,v===0?m:new C.cD7(n,v),m,m,m,m,"Move up",A.c7)
r=i.length
q=B.aH(m,m,m,m,D.bMO,m,m,m,v===r-1?m:new C.cD8(n,v),m,m,m,m,"Move down",A.c7)
r=r===1?m:new C.cD9(n,v)
p=new B.aV(12,12)
o=new B.aV(12,12)
g.push(B.p(m,B.v(B.a([new B.co(A.aQ,A.e,A.j,A.m,m,A.p,m,0,B.a([new B.x("Page "+t,m,D.f3j,m,m,m,m,m,m,m,m,m),A.b3,s,q,B.aH(m,m,m,m,B.W(A.e4,A.on,m,m,m,18),m,m,m,r,m,m,m,m,"Remove page",A.c7)],l),m),B.aL(m,A.T,!1,m,!0,A.q,m,B.aM(),i[v].a,m,m,m,m,m,2,new B.e0(m,m,m,"Title",m,m,m,m,m,m,m,m,m,m,m,m,!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.c,m,m,m,m,m,m,m,new B.b4(4,new B.bp(p,p,p,p),A.dg),!0,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.ah,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,A.cc,!0,A.a5,m,A.am,m,m,m,m),A.ao,n.cfj(i[v]),B.aL(m,A.T,!1,m,!0,A.q,m,B.aM(),i[v].b,m,m,m,m,m,2,new B.e0(m,m,m,"Write here\u2026 long pages flow onto the next paper page",m,m,m,m,m,m,m,m,m,m,m,m,!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.c,m,m,m,m,m,m,m,new B.b4(4,new B.bp(o,o,o,o),A.dg),!0,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.ah,m,m,m,m,m,m,m,m,m,m,5,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.a5,m,A.am,m,m,m,m)],l),A.m,m,A.e,A.j,0,A.p),A.f,m,m,new B.o(E.mO,m,new B.bP(u,u,u,u),new B.bp(w,w,w,w),m,m,A.n),m,m,new C.a7u(h),A.e3,D.boi,m,m,m))}return B.oc(!0,B.cb(k,E.adC,B.cB(g,m,D.boK,m,m,A.ai,!1),m,!1,!1,j,m),new C.cDa(n),x.C)}}
C.awf.prototype={
B(d){var w,v,u=this,t=null,s=u.r,r=s?A.cr:E.mO,q=B.m(16),p=B.m(16),o=s?A.aB.j(0.08):A.c.j(0.04)
s=s?A.aB.j(0.16):A.da.j(0.22)
w=B.m(12)
v=x.p
return new B.C(A.eO,B.aF(!1,A.a1,!0,t,B.aK(!1,q,!0,B.p(t,B.A(B.a([B.p(t,B.W(u.c,r,t,t,t,20),A.f,t,t,new B.o(s,t,t,w,t,t,A.n),t,40,t,t,t,t,t,40),A.bf,B.D(B.v(B.a([B.d(u.d,t,t,t,t,t,t,B.l(t,t,r,t,t,t,t,t,t,t,t,15,t,t,A.I,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),A.bA,B.d(u.e,t,t,t,t,t,t,D.aOd,t,t,t)],v),A.F,t,A.e,A.j,0,A.p),1),B.W(A.eu,r.j(0.6),t,t,t,t)],v),A.m,t,A.e,A.j,0,t,t),A.f,t,t,new B.o(o,t,t,p,t,t,A.n),t,t,t,t,A.bm,t,t,t),t,!0,t,t,t,t,t,t,t,t,t,t,t,u.f,t,t,t,t,t,t,t),A.f,A.K,0,t,t,t,t,t,A.af),t)}}
C.ap_.prototype={
T(){return new C.aCl()}}
C.aCl.prototype={
a_(){this.a1()
this.YH()},
br(d){this.bE(d)
if(d.c!=this.a.c)this.a03()},
a03(){var w=0,v=B.j(x.H),u=this,t
var $async$a03=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.d
t=t==null?null:t.q()
w=2
return B.b(x.bq.b(t)?t:B.dP(t,x.H),$async$a03)
case 2:u.d=null
if(u.c!=null)u.m(new C.e4m(u))
w=3
return B.b(u.YH(),$async$a03)
case 3:return B.h(null,v)}})
return B.i($async$a03,v)},
YH(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$YH=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:o=r.a.c
n=A.a.i(o==null?"":o)
if(J.ad(n)===0){w=1
break}t=4
if(J.cZ(n,"http://")||J.cZ(n,"https://")||J.cZ(n,"data:")){o=B.Xj(B.cv(n,0,null),new B.Ox(!0))
r.d=o}else{o=B.fk("unsupported video ref")
throw B.U(o)}w=7
return B.b(o.i5(0).cM(0,A.pq),$async$YH)
case 7:if(r.c==null){w=1
break}r.d.t0(!1)
r.m(new C.e4k(r))
t=2
w=6
break
case 4:t=3
m=s.pop()
q=B.a9(m)
$.am.$1("[kiapo video] "+B.t(q))
if(r.c!=null)r.m(new C.e4l(r))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$YH,v)},
q(){var w=this.d
if(w!=null)w.q()
this.a2()},
c3M(){var w=this,v=w.d
if(v==null||!w.e)return
if(v.a.f){v.h_(0)
w.m(new C.e4n(w))}else{v.py(0)
w.m(new C.e4o(w))}},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.a,m=n.c
if(A.a.i(m==null?"":m).length===0){if(!n.e)return A.bH
n=B.m(8*n.d)
m=B.a([D.j0.j(0.92),D.K3.j(0.95)],x.O)
w=B.I(A.bU.j(0.55),A.r,1)
v=p.a
u=v.d
t=B.W(A.pJ,A.bU,o,o,o,28*u)
v=v.f?"Tap to add president video":"Video ya kiapo"
return B.bZ(B.av(B.v(B.a([t,new B.a6(o,6*u,o,o),B.d(v,o,o,o,o,o,o,B.l(o,o,A.c.j(0.85),o,o,o,o,o,o,o,o,11*p.a.d,o,o,A.O,o,o,!0,o,o,o,o,o,o,o,o),A.L,o,o)],x.p),A.m,o,A.e,A.Q,0,A.p),o,o,o),new B.o(o,o,w,n,o,new B.a7(A.ax,A.aD,A.x,m,o,o),A.n),A.bd)}if(p.f)return B.av(B.W(A.akE,A.az,o,o,o,28*n.d),o,o,o)
if(!p.e||p.d==null)return D.b2H
s=p.d
m=s.a.as
r=m.a
r=r>0?r:16
q=m.b
q=q>0?q:9
n=B.m(6*n.d)
m=B.a([B.f1(A.A,new B.a6(r,q,new B.zF(s,o),o),A.q,A.bQ)],x.p)
if(!p.r){w=8*p.a.d
v=A.w.j(0.45)
m.push(B.av(B.p(o,B.W(A.iP,A.c,o,o,o,28*p.a.d),A.f,o,o,new B.o(v,o,o,o,o,o,A.a6),o,o,o,o,new B.Q(w,w,w,w),o,o,o),o,o,o))}return B.aE(o,B.bw(n,new B.an(A.W,o,A.b_,A.q,m,o),A.aq),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gc3L(),o,o,o,o,o,o,!1,A.a8)}}
C.xa.prototype={
a4(){return"NgmyHatiLayoutKind."+this.b}}
C.jh.prototype={}
C.acc.prototype={
B(d){return B.oF(new C.dV1(this,B.O(d).ax.a===A.H,d),!0,0.72,0.9,0.5,!1,null)}}
C.abC.prototype={
B(d){var w,v,u=null,t=B.O(d).ax.a===A.H,s=B.m(18),r=B.m(18),q=B.I(D.j0.j(t?0.35:0.4),A.r,1),p=t?D.Kw:A.c,o=x.V,n=B.a([new B.ac(0,A.G,A.w.j(t?0.3:0.08),A.cx,14)],o),m=B.m(10),l=B.I(A.bU.j(0.5),A.r,1)
o=B.a([new B.ac(0,A.G,A.w.j(0.14),A.dB,6)],o)
w=this.c
o=B.D(B.p(u,new B.fG(0.5625,C.hWx(w),u),A.aq,u,u,new B.o(u,u,l,m,o,u,A.n),u,u,u,D.ahj,u,u,u,u),1)
m=D.j0.j(t?0.18:0.16)
l=B.d(w.b,u,u,u,u,u,u,B.l(u,u,t?A.c:D.j0,u,u,u,u,u,u,u,u,12.5,u,u,A.u,u,u,!0,u,0.1,u,u,u,u,u,u),u,u,u)
v=x.p
return B.aF(!1,A.a1,!0,u,B.aK(!1,s,!0,B.p(u,B.v(B.a([o,B.p(u,B.v(B.a([l,A.cZ,B.d(w.c,u,2,A.a2,u,u,u,B.l(u,u,t?A.az:D.bch,u,u,u,u,u,u,u,u,9.5,u,u,u,u,1.32,!0,u,u,u,u,u,u,u,u),u,u,u)],v),A.F,u,A.e,A.j,0,A.p),A.f,u,u,new B.o(u,u,new B.bP(new B.az(m,1,A.r,-1),A.Y,A.Y,A.Y),u,u,u,A.n),u,u,u,u,D.afE,u,u,u)],v),A.aj,u,A.e,A.j,0,A.p),A.f,u,u,new B.o(p,u,q,r,n,u,A.n),u,u,u,u,u,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,this.d,u,u,u,u,u,u,u),A.f,A.K,0,u,u,u,u,u,A.af)}}
C.xd.prototype={
a4(){return"NgmyMarriageLayoutKind."+this.b}}
C.nw.prototype={}
C.bhs.prototype={
Ve(d){var w=null
return new B.bI(A.a3,w,w,B.Dm(A.A,B.p(w,w,A.f,w,w,new B.o(this.d.j(0.14),w,w,B.m(3),w,w,A.n),w,5,w,w,w,w,w,w),w,d),w)},
bzu(){return this.Ve(1)},
avJ(d){var w=null,v=B.m(8),u=B.I(A.hU,A.r,0.9)
return B.p(A.A,B.d(d,w,w,w,w,w,w,B.l(w,w,this.d,w,w,w,w,w,w,w,w,6.5,w,w,A.u,w,w,!0,w,0.3,w,w,w,w,w,w),w,w,w),A.f,w,w,new B.o(D.abN,w,u,v,w,w,A.n),w,13,w,w,w,w,w,w)},
B(d){var w=this,v=null,u=x.p,t=w.d
return B.v(B.a([B.A(B.a([B.p(v,v,A.f,v,v,new B.o(v,v,B.I(A.hU,A.r,1.6),v,v,v,A.a6),v,22,v,v,v,v,v,22),B.dU(B.p(v,v,A.f,v,v,new B.o(v,v,B.I(A.hU,A.r,1.6),v,v,v,A.a6),v,22,v,v,v,v,v,22),new B.u(-8.36,0))],u),A.m,v,A.ba,A.j,0,v,v),A.at,B.d("HATI YA NDOA",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,12,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v),B.d("Hati ya Makubaliano ya Ndoa",v,v,v,v,v,v,B.l(v,v,t.j(0.7),v,v,v,v,v,v,v,v,7,v,v,A.a4,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v),A.ao,w.avJ("TAARIFA ZA WANANDOA"),A.ao,w.bzu(),A.cZ,w.Ve(0.9),A.cZ,w.Ve(0.7),A.P,w.avJ("TAMKO LA MAKUBALIANO"),A.fW,w.Ve(1),A.cZ,w.Ve(0.95),A.P,w.avJ("MASHAHIDI"),A.b3,B.d("NGMY",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,8,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.d(w.c.b,v,v,v,v,v,v,B.l(v,v,w.e,v,v,v,v,v,v,v,v,7,v,v,A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],u),A.m,v,A.e,A.j,0,A.p)}}
C.acf.prototype={
B(d){return B.oF(new C.e9B(B.O(d).ax.a===A.H,d),!0,0.92,0.96,0.5,!1,null)}}
C.adU.prototype={
B(d){var w,v,u,t,s,r=null,q=B.O(d).ax.a===A.H,p=B.m(18),o=B.m(18),n=B.I(A.av.j(q?0.35:0.4),A.r,1),m=q?D.bbT:A.c,l=x.V,k=B.a([new B.ac(0,A.G,A.w.j(q?0.3:0.08),A.cx,14)],l),j=B.m(10),i=B.I(A.av.j(0.5),A.r,1)
l=B.a([new B.ac(0,A.G,A.w.j(0.14),A.dB,6)],l)
w=this.c
v=C.fUk(w.a)
if(v==null)v=A.d.gL(D.PS)
u=B.b0(v.f)
t=B.b0(v.r)
s=x.p
l=B.D(B.p(r,new B.fG(0.5625,new B.an(A.W,r,A.b_,A.q,B.a([B.bY(0,B.fL(C.fUj(v.d),A.A,r,r,A.cm,A.bQ,!0,r,!1,r,r),0,0,0),new B.C(A.agk,new C.bhs(v,u,t,r),r)],s),r),r),A.aq,r,r,new B.o(r,r,i,j,l,r,A.n),r,r,r,D.ahj,r,r,r,r),1)
j=A.av.j(q?0.18:0.16)
i=B.d(w.b,r,r,r,r,r,r,B.l(r,r,q?A.c:A_.Kx,r,r,r,r,r,r,r,r,12.5,r,r,A.u,r,r,!0,r,0.1,r,r,r,r,r,r),r,r,r)
return B.aF(!1,A.a1,!0,r,B.aK(!1,p,!0,B.p(r,B.v(B.a([l,B.p(r,B.v(B.a([i,A.cZ,B.d(w.c,r,2,A.a2,r,r,r,B.l(r,r,q?A.az:D.b5O,r,r,r,r,r,r,r,r,9.5,r,r,r,r,1.32,!0,r,r,r,r,r,r,r,r),r,r,r)],s),A.F,r,A.e,A.j,0,A.p),A.f,r,r,new B.o(r,r,new B.bP(new B.az(j,1,A.r,-1),A.Y,A.Y,A.Y),r,r,r,A.n),r,r,r,r,D.afE,r,r,r)],s),A.aj,r,A.e,A.j,0,A.p),A.f,r,r,new B.o(m,r,n,o,k,r,A.n),r,r,r,r,r,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,this.d,r,r,r,r,r,r,r),A.f,A.K,0,r,r,r,r,r,A.af)}}
C.kL.prototype={
a4(){return"NgmyMarriagePaperStyle."+this.b}}
C.a6Y.prototype={}
C.US.prototype={
T(){var w=$.aw()
return new C.aCE(new B.cp(null,x.A),new B.ar(A.as,w),new B.ar(A.as,w),B.ms(0,null,null),A.d.gL(D.a1G),D.dz2,B.a([],x.L),B.a([],x.gE))}}
C.aCE.prototype={
a_(){var w,v=this
v.a1()
v.w=v.a.c
v.z=new C.z2(C.fwv(v.y),"NGMY NEWS","","","By the NGMY Newsroom","",A.T,"","","")
w=x.a
C.fvr().bz(new C.ecT(v),w)
$.tR().ke(0,"assets/images/ngmy_logo.png").bz(new C.ecU(v),w).eU(new C.ecV())},
q(){var w=this,v=w.e,u=$.aw()
v.S$=u
v.P$=0
v=w.f
v.S$=u
v.P$=0
w.r.q()
w.a2()},
ag_(d){var w=null,v=this.c
if(v!=null)v.I(x.q).f.R(B.b2(w,w,w,w,w,A.q,w,B.d(d,w,w,w,w,w,w,w,w,w,w),w,A.U,w,w,w,w,w,w,w,w,w,w))},
Io(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k
var $async$Io=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hW().l_(88,1600,A.eG),$async$Io)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fe(),$async$Io)
case 8:p=e
m=r.c
if(m==null){w=1
break}w=9
return B.b(C.hhf(m,p),$async$Io)
case 9:o=e
if(o==null||r.c==null){w=1
break}m=r.c
m.toString
w=10
return B.b(F.bBl(new B.pz(o,1),m),$async$Io)
case 10:if(r.c!=null)r.m(new C.ecv(r,o))
t=2
w=6
break
case 4:t=3
k=s.pop()
n=B.a9(k)
r.ag_("Could not open that picture. "+B.t(n))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Io,v)},
VY(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$VY=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.w
if(q==null||t.as){w=1
break}s=t.c
s.toString
w=3
return B.b(C.hhf(s,q),$async$VY)
case 3:r=e
if(r==null||t.c==null){w=1
break}s=t.c
s.toString
w=4
return B.b(F.bBl(new B.pz(r,1),s),$async$VY)
case 4:if(t.c!=null)t.m(new C.ecr(t,r))
case 1:return B.h(u,v)}})
return B.i($async$VY,v)},
acV(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$acV=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.as){w=1
break}q.m(new C.ecC(q))
t=4
q.a.toString
p=C.i_X()
l=q.Q
k=q.e.a
o=l==="sw"?A.a.i(A.a.i(k.a)+" Write the whole newspaper in Swahili (Kiswahili)."):k.a
k=q.y
w=7
return B.b(p.$4$paper$photo$request$template(null,q.w,o,k),$async$acV)
case 7:n=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.ecD(q,n))
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
m=B.a9(i)
q.ag_(B.t(m))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.ecE(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$acV,v)},
YU(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h,g
var $async$YU=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i=A.a.i(q.f.a.a)
h=!0
if(J.ad(i)!==0)if(!q.as){h=q.z
h=A.a.i(h.c).length===0&&h.r.length===0}if(h){w=1
break}q.m(new C.ecx(q,i))
t=4
q.a.toString
p=C.i_W()
h=q.z
m=q.y
l=q.w
k=B.B(q.ax,x.fz)
w=7
return B.b(p.$5$doc$history$instruction$photo$template(h,k,i,l,m),$async$YU)
case 7:o=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.ecy(q,o))
r.push(6)
w=5
break
case 4:t=3
g=s.pop()
n=B.a9(g)
if(q.c!=null)q.m(new C.ecz(q,n))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.ecA(q))
$.aT.x1$.push(new C.ecB(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$YU,v)},
c4s(d){this.m(new C.ecw(this,d))},
DS(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$DS=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(!q.as){k=q.z
k=A.a.i(k.c).length===0&&k.r.length===0}else k=!0
if(k){w=1
break}q.m(new C.ect(q))
t=4
w=7
return B.b($.aT.gmr(),$async$DS)
case 7:w=8
return B.b(B.bN(A.mU,null,x.H),$async$DS)
case 8:k=$.aT.ak$.x.h(0,q.d)
p=k==null?null:k.gb7()
if(!(p instanceof B.pK))throw B.U("The page is not ready yet.")
w=9
return B.b(p.lP(1800/p.gY(0).a),$async$DS)
case 9:o=e
w=10
return B.b(o.ho(A.fT),$async$DS)
case 10:n=e
if(n==null)throw B.U("Could not make the picture.")
w=11
return B.b(A7.afd(J.fa(A.dG.gaP(n)),"ngmy_news.png","image/png"),$async$DS)
case 11:m=e
q.ag_(m?"Your newspaper picture is ready. Check your downloads.":"Downloading is not available here.")
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
l=B.a9(i)
q.ag_(B.t(l))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.ecu(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$DS,v)},
B(a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=a1.z,a4=!(A.a.i(a3.c).length===0&&a3.r.length===0)
a3=B.aH(a2,a2,a2,a2,A.kM,a2,a2,a2,new C.ecK(a5),a2,a2,a2,a2,a2,a2)
w=x.p
v=B.a([],w)
if(a1.ay.length!==0)v.push(B.aH(a2,a2,a2,a2,D.bIm,a2,a2,a2,new C.ecL(a1),a2,a2,a2,a2,"Undo the last change",a2))
v.push(B.aH(a2,a2,a2,a2,A.oD,a2,a2,a2,a4?a1.gaXo():a2,a2,a2,a2,a2,"Download",a2))
a3=B.eD(v,a2,a2,!0,!0,A.Am,a2,1,!0,a2,0,!1,a2,!1,a2,a2,a3,a2,!0,a2,a2,a2,a2,a2,D.eE0,a2,a2,a2,1,a2,!0)
v=x.V
u=B.a([new B.ac(0,A.G,A.w.j(0.6),A.eT,24)],v)
t=a1.z
s=a1.y
r=a1.w
u=B.p(a2,new B.fG(0.7142857142857143,B.f1(A.A,new B.es(new C.b_c(t,s,r,a1.x,a2),a1.d),A.f,A.dt),a2),A.f,a2,a2,new B.o(a2,a2,a2,a2,u,a2,A.n),a2,a2,a2,a2,a2,a2,a2,a2)
s=B.d("1  YOUR PICTURE",a2,a2,a2,a2,a2,a2,D.SQ,a2,a2,a2)
t=a1.as?a2:a1.gc4r()
t=B.a([B.D(B.dp(D.bJ6,B.d(r==null?"Add a picture":"Change the picture",a2,a2,a2,a2,a2,a2,A.cc,a2,a2,a2),t,B.bk(D.rZ,a2,a2,a2,A.c,A.fL,a2,a2,new B.b7(B.m(14),O.uz),a2,a2,a2)),1)],w)
r=a1.w
if(r!=null){r=B.bw(B.m(10),B.fL(r,A.A,a2,a2,A.cm,A.bQ,!1,48,!1,a2,48),A.aq)
A.d.v(t,B.a([A.aw,r,B.aH(a2,a2,a2,a2,D.bFU,a2,a2,a2,a1.as?a2:a1.gbGc(),a2,a2,a2,a2,"Crop the picture",a2)],w))}t=B.A(t,A.m,a2,A.e,A.j,0,a2,a2)
r=B.d("2  WHAT SHOULD IT BE ABOUT?  (optional)",a2,a2,a2,a2,a2,a2,D.SQ,a2,a2,a2)
q=B.aL(a2,A.T,!1,a2,!0,A.q,a2,B.aM(),a1.e,a2,a2,a2,a2,a2,2,a1.aQB("Leave it empty and the AI picks a story about NGMY"),A.y,!0,a2,!0,a2,!1,a2,A.ah,a2,a2,a2,a2,a2,a2,a2,a2,a2,3,1,a2,!1,"\u2022",a2,a2,a2,a2,a2,!1,a2,a2,!1,a2,!0,a2,A.a9,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,A.dl,!0,A.a5,a2,A.am,a2,a2,a2,a2)
p=B.a([],w)
for(o=0;o<7;++o){n=D.d46[o]
p.push(B.mA(a2,D.rZ,new B.x(n.a,a2,A.oY,a2,a2,a2,a2,a2,a2,a2,a2,a2),A.hA,new C.ecM(a1,n),a2,a2,O.uz,a2))}p=B.c_(A.bD,p,A.bt,6,8)
m=a1.Q
m=B.c_(A.bD,B.a([D.fpo,A.bf,B.jH(a2,a2,a2,D.faa,a2,new C.ecN(a1),m==="en",a2,a2,a2,a2),A.ab,B.jH(a2,a2,a2,D.fa5,a2,new C.ecO(a1),m==="sw",a2,a2,a2,a2)],w),A.rw,0,8)
l=B.d("3  PICK A DESIGN",a2,a2,a2,a2,a2,a2,D.SQ,a2,a2,a2)
k=B.a([],w)
for(j=x.dt,i=B.dc(D.a1G,0,B.dJ(10,"count",x.S),j),h=i.$ti,i=new B.bV(i,i.gM(0),h.k("bV<ai.E>")),h=h.k("ai.E");i.C();){g=i.d
k.push(a1.aP9(g==null?h.a(g):g))}k=B.cB(k,a2,a2,a2,a2,A.aQ,!1)
i=B.a([],w)
for(j=B.dc(D.a1G,10,a2,j),h=j.$ti,j=new B.bV(j,j.gM(0),h.k("bV<ai.E>")),h=h.k("ai.E");j.C();){g=j.d
i.push(a1.aP9(g==null?h.a(g):g))}j=B.cB(i,a2,a2,a2,a2,A.aQ,!1)
i=a1.as?a2:a1.gc4u()
h=B.m(18)
v=B.a([new B.ac(0,A.G,A.bz.j(0.4),A.J,18)],v)
v=B.a([u,A.ay,new B.C(A.cG,s,a2),t,A.ay,new B.C(A.cG,r,a2),q,A.P,p,A.S,m,A.ay,new B.C(A.cG,l,a2),new B.a6(a2,78,k,a2),A.P,new B.a6(a2,78,j,a2),A.aO,B.aE(a2,B.p(A.A,B.A(B.a([D.bJ0,A.ab,B.d(a4?"Write it again":"Write my newspaper",a2,a2,a2,a2,a2,a2,A.fX,a2,a2,a2)],w),A.m,a2,A.e,A.Q,0,a2,a2),A.f,a2,a2,new B.o(a2,a2,a2,h,v,G.tL,A.n),a2,54,a2,a2,a2,a2,a2,a2),A.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,i,a2,a2,a2,a2,a2,a2,!1,A.a8)],w)
if(a4){u=B.a([A.e0,B.A(B.a([D.djC,A.aw,D.buB],w),A.m,a2,A.e,A.j,0,a2,a2),A.P],w)
for(t=a1.ax,s=t.length,o=0;o<t.length;t.length===s||(0,B.L)(t),++o){f=t[o]
e=f.a==="you"
r=e?A.a7:A.a3
q=e?A.b4.j(0.35):D.rZ
p=new B.aV(16,16)
d=new B.az(A.bF,1,A.r,-1)
u.push(new B.bI(r,a2,a2,B.p(a2,new B.x(f.b,a2,D.f0Q,a2,a2,a2,a2,a2,a2,a2,a2,a2),A.f,a2,A8.Uz,new B.o(q,a2,new B.bP(d,d,d,d),new B.bp(p,p,p,p),a2,a2,A.n),a2,a2,a2,A.cG,A.iO,a2,a2,a2),a2))}u.push(A.ao)
t=B.a([],w)
for(o=0;o<4;++o){a0=D.cSd[o]
t.push(B.mA(a2,D.rZ,new B.x(a0,a2,A.Ir,a2,a2,a2,a2,a2,a2,a2,a2,a2),A.hA,new C.ecP(a1,a0),a2,a2,O.uz,a2))}u.push(B.c_(A.bD,t,A.bt,6,8))
u.push(A.S)
t=B.D(B.aL(a2,A.T,!1,a2,!0,A.q,a2,B.aM(),a1.f,a2,a2,a2,a2,a2,2,a1.aQB("Ask for a change, or ask a question\u2026"),A.y,!0,a2,!0,a2,!1,a2,A.ah,a2,a2,a2,a2,a2,a2,a2,a2,a2,4,1,a2,!1,"\u2022",a2,a2,a2,new C.ecQ(a1),a2,!1,a2,a2,!1,a2,!0,a2,A.a9,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,A.dl,!0,A.a5,a2,A.am,a2,a2,a2,a2),1)
s=a1.as?a2:a1.gc4t()
u.push(B.A(B.a([t,A.ab,B.H7(A.yc,s,B.nq(a2,A.b4,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2)],w),A.m,a2,A.e,A.j,0,a2,a2))
u.push(A.ay)
t=a1.as?a2:a1.gaXo()
u.push(B.dp(A.oD,D.fl4,t,B.bk(A.d_,a2,a2,a2,a2,A.If,a2,a2,new B.b7(B.m(16),A.Y),a2,a2,a2)))
A.d.v(v,u)}v=B.a([B.cB(v,a1.r,A.ag6,a2,a2,A.ai,!1)],w)
if(a1.as){u=A.w.j(0.55)
t=B.m(20)
s=B.I(E.jG.j(0.5),A.r,1)
v.push(B.bY(0,B.ei(B.av(B.p(a2,B.A(B.a([E.a61,A.eB,B.d(a1.at,a2,a2,a2,a2,a2,a2,A.iD,a2,a2,a2)],w),A.m,a2,A.e,A.Q,0,a2,a2),A.f,a2,a2,new B.o(E.Ad,a2,s,t,a2,a2,A.n),a2,a2,a2,a2,D.br2,a2,a2,a2),a2,a2,a2),u,!0),0,0,0))}return B.cb(a3,A.Am,new B.an(A.W,a2,A.aa,A.q,v,a2),a2,!1,!1,a2,a2)},
aQB(d){var w=null
return B.br(w,new B.b4(4,B.m(14),A.Y),w,A.eP,w,w,w,w,!0,w,w,w,w,w,w,D.rZ,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,X.In,d,w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
aP9(d){var w,v,u,t=null,s=d.a===this.y.a,r=B.m(12),q=B.b0(d.f),p=s?A.bz:A.bF
p=B.I(p,A.r,s?2.4:1)
w=B.a([B.p(t,t,A.f,B.b0(d.x),t,t,t,5,t,A.l4,t,t,t,t),A.fW],x.p)
for(v=d.w,u=0;u<4;++u)w.push(B.p(t,t,A.f,B.b0(v).j(0.5),t,t,t,2,t,D.bnj,t,t,t,t))
w.push(A.cZ)
w.push(new B.C(A.jr,B.d(d.b,t,1,A.a2,t,t,t,B.l(t,t,B.b0(v),t,t,t,t,t,t,t,t,9,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t))
return B.aE(t,B.p(t,B.v(w,A.m,t,A.ba,A.j,0,A.p),A.f,t,t,new B.o(q,t,p,r,t,t,A.n),t,t,t,A.j7,t,t,t,72),A.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.ecs(this,d),t,t,t,t,t,t,!1,A.a8)}}
C.z2.prototype={
b9q(d,e,f,g,h,i,j,k,l,m){var w=this,v=g==null?w.b:g,u=i==null?w.a:i,t=h==null?w.c:h,s=m==null?w.d:m,r=e==null?w.e:e,q=f==null?w.f:f,p=d==null?w.r:d,o=j==null?w.w:j,n=l==null?w.x:l
return new C.z2(u,v,t,s,r,q,p,o,n,k==null?w.y:k)},
cDI(d){var w=null
return this.b9q(w,w,w,w,w,d,w,w,w,w)},
ae(){var w=this
return B.E(["paper",w.a,"headline",w.c,"subhead",w.d,"byline",w.e,"caption",w.f,"body",w.r,"pullQuote",w.w,"sidebarTitle",w.x,"sidebarText",w.y,"category",w.b],x.N,x.z)},
aB_(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j="headline",i="category",h=new C.cal(d),g=d.h(0,"body")
if(x.j.b(g)){w=B.a([],x.s)
for(v=J.aX(g);v.C();){u=v.gU(v)
if(A.a.i(B.t(u)).length!==0)w.push(A.a.i(B.t(u)))}t=w}else if(typeof g=="string"&&A.a.i(g).length!==0){w=A.a.fw(g,B.af("\\n\\s*\\n",!0,!1,!1,!1))
w=new B.K(w,new C.caj(),B.T(w).k("K<1,n>")).bZ(0,new C.cak())
t=B.B(w,w.$ti.k("H.E"))}else t=k
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
return this.b9q(p,r,q,J.ad(l==null?"":l)===0?k:h.$1(i).toUpperCase(),v,w,o,m,n,s)},
gF1(d){return this.f}}
C.t1.prototype={
a4(){return"NewsLayout."+this.b}}
C.AX.prototype={
a4(){return"NewsFrame."+this.b}}
C.l9.prototype={}
C.b_c.prototype={
r0(d,e,f,g,h,i,j){var w=null
return B.l(w,w,f==null?B.b0(this.d.w):f,w,w,w,w,w,d,w,w,e,i,w,j,w,g,!0,w,h,w,w,w,w,w,w)},
aXq(d,e,f,g){return this.r0(d,e,null,1.25,f,A.bk,g)},
P3(d,e,f,g,h){return this.r0(d,e,f,1.25,g,A.bk,h)},
avP(d,e,f,g,h){return this.r0(d,e,null,f,g,A.bk,h)},
avO(d,e,f,g,h){return this.r0(d,e,f,g,0,A.bk,h)},
aXs(d,e,f,g,h){return this.r0(d,e,null,f,0,g,h)},
c4y(d,e,f,g,h,i){return this.r0(d,e,f,g,0,h,i)},
avN(d,e,f,g){return this.r0(d,e,null,f,0,A.bk,g)},
acY(d,e,f){return this.r0(d,e,null,f,0,A.bk,A.cN)},
aXr(d,e,f,g,h){return this.r0(d,e,f,g,0,h,A.cN)},
c4x(d,e,f,g){return this.r0(d,e,null,f,0,g,A.cN)},
c4w(d,e,f,g){return this.r0(d,e,f,g,0,A.bk,A.cN)},
acZ(d,e,f,g,h,i){return this.r0(d,e,f,g,h,A.bk,i)},
aXp(d,e,f,g,h,i,j,k,l){var w,v,u=null
for(w=i;w>j;){v=new B.ko(new B.eo(d,u,u,A.cO,u,u,u,u,u,u,new B.F(!0,u,u,e,u,u,w,f,l,u,u,u,k,u,u,u,u,u,u,u,u,u,u,u,u,u)),A.a5,A.ch,new B.jn(1),u,u,h,u,A.cd,u)
v.Bv(g)
if(!v.b.a.c.gaCE())return w
w-=2}return j},
acW(d,e,f,g,h,i,j,k){return this.aXp(d,e,f,g,h,i,j,k,A.bk)},
axT(d,e,f){var w=null,v=d==null?B.b0(this.d.w):d,u=x.p,t=B.a([B.p(w,w,A.f,v,w,w,w,f,w,w,w,w,w,w)],u)
if(e)A.d.v(t,B.a([new B.a6(w,3,w,w),B.p(w,w,A.f,v,w,w,w,0.8,w,w,w,w,w,w)],u))
return B.v(t,A.m,w,A.e,A.j,0,A.p)},
axS(d){return this.axT(null,!1,d)},
afO(d,e){return this.axT(null,d,e)},
clV(d,e){return this.axT(d,!1,e)},
gaZy(){var w=A.a.i(this.c.a)
return w.length===0?"The NGMY Times":w},
gaT9(){var w=A.a.i(this.c.c)
if(w.length===0)w="Your headline appears here"
return this.d.CW?w.toUpperCase():w},
NW(d,e,f,g,h,i){var w=this,v=null,u=w.d.Q,t=w.acW(w.gaT9(),u,A.O,d,g,h,i,1.02)
return B.d(w.gaT9(),v,g,A.a2,v,v,v,w.avO(u,t,f,1.02,A.O),e,v,v)},
aTe(d){return this.NW(d,A.L,null,2,78,30)},
aar(d,e,f,g,h){return this.NW(d,e,null,f,g,h)},
bUJ(d,e,f,g,h){return this.NW(d,A.L,e,f,g,h)},
bUI(d,e,f){return this.NW(d,A.L,null,e,f,30)},
QZ(d,e,f,g,h){var w,v=this,u=null,t=v.c.d,s=A.a.i(t)
if(s.length===0)return A.bH
w=v.d.as
return new B.C(A.ke,B.d(s,u,g,A.a2,u,u,u,v.aXr(w,v.aXp(t,w,A.cN,d,g,h,15,1.2,A.cD),f,1.2,A.cD),e,u,u),u)},
b4e(d){return this.QZ(d,A.L,null,3,24)},
azl(d,e,f,g){return this.QZ(d,e,null,f,g)},
ctg(d,e,f){return this.QZ(d,A.L,e,3,f)},
b4f(d,e){return this.QZ(d,e,null,3,24)},
cte(d,e){return this.QZ(d,A.L,null,3,e)},
ctf(d,e,f){return this.QZ(d,e,null,3,f)},
apr(d,e){var w=this,v=null,u=A.a.i(w.c.e),t=new B.C(A.fQ,B.d(u.toUpperCase(),v,v,v,v,v,v,w.P3("Roboto",12,d==null?B.b0(w.d.x):d,1.4,A.I),v,v,v),v)
if(!e)return t
u=w.d.w
return B.A(B.a([B.D(B.p(v,v,A.f,B.b0(u),v,v,v,1.2,v,v,v,v,v,v),1),t,B.D(B.p(v,v,A.f,B.b0(u),v,v,v,1.2,v,v,v,v,v,v),1)],x.p),A.m,v,A.e,A.j,0,v,v)},
MT(){return this.apr(null,!0)},
apq(d){return this.apr(null,d)},
bC8(d,e){var w=null,v=A.a.i(this.c.f)
if(v.length===0)return A.bH
return new B.C(A.i8,new B.a6(d,w,B.d(v,w,2,A.a2,w,w,w,this.c4x(this.d.as,13.5,1.2,A.cD),e,w,w),w),w)},
vd(d,a0){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Roboto",j=new B.S(Date.now(),0,!1),i=m.gaZy(),h=A.o.an(j.by(B.c0(B.by(j),1,1,0,0,0,0,0)).a,864e8),g="VOL. "+C.hOA(Math.max(1,B.by(j)-2021))+"  \xb7  NO. "+(h+1+3000),f=m.aXq(k,12,1.2,A.O),e=a0?0.62:1
h=m.d
w=h.y
v=h.z
if(w==="blackletter")u=m.acW(i,v,A.O,d,1,96*e,36,1)
else{t=w==="bar"?76:72
u=m.acW(i.toUpperCase(),v,A.O,d,1,t*e,30,1)}switch(w){case"bar":w=a0?6:10
t=B.b0(h.x)
h=h.ch?B.b0(h.f):A.c
s=x.p
return B.v(B.a([B.p(l,B.A(B.a([B.D(B.d(i.toUpperCase(),l,1,A.eC,l,l,l,m.acZ(v,u*0.84,h,1,1,A.O),l,l,l),1)],s),A.m,l,A.e,A.j,0,l,l),A.f,t,l,l,l,l,l,l,new B.Q(18,w,18,w),l,l,l),A.P,B.A(B.a([B.d(C.bAB(j).toUpperCase(),l,l,l,l,l,l,f,l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("FREE \xb7 NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],s),A.m,l,A.hL,A.j,0,l,l),A.ao,m.afO(!0,3)],s),A.m,l,A.e,A.j,0,A.p)
case"split":h=h.x
w=x.p
return B.v(B.a([B.A(B.a([B.p(l,l,A.f,B.b0(h),l,l,l,u*0.8,l,l,l,l,l,14),A.eB,B.D(B.d(i,l,1,A.eC,l,l,l,m.avN(v,u*0.9,1,A.O),l,l,l),1)],w),A.m,l,A.e,A.j,0,l,l),A.S,B.A(B.a([B.d(C.bAB(j),l,l,l,l,l,l,m.P3(k,13,B.b0(h),0.6,A.O),l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l)],w),A.m,l,A.hL,A.j,0,l,l),A.P,m.clV(B.b0(h),3)],w),A.m,l,A.e,A.j,0,A.p)
case"logo":r=a0?52:64
w=m.gaZy()
v=B.d("NGMY",l,l,l,l,l,l,m.avP(k,r,1,-1.5,A.u),l,l,l)
t=r*0.2
s=r*0.04
q=B.b0(h.x)
p=B.m(r*0.16)
o=h.ch&&h.a==="midnight"||h.a==="gold"?A.w:A.c
h=h.w
n=x.p
return B.v(B.a([B.A(B.a([v,A.ab,B.eA(A.A,-0.03,B.p(l,B.d("NEWS",l,l,l,l,l,l,m.r0(k,r*0.72,o,1.05,-0.5,A.cD,A.u),l,l,l),A.f,l,l,new B.o(q,l,l,p,l,l,A.n),l,l,l,l,new B.Q(t,s,t,s),l,l,l),l),A.b3,new B.dm(1,A.ci,B.d(w.toUpperCase(),l,2,A.a2,l,l,l,m.acZ(k,12.5,B.b0(h).j(0.85),1.3,1.2,A.O),A.dK,l,l),l)],n),A.m,l,A.e,A.j,0,l,l),A.P,B.p(l,l,A.f,B.b0(h).j(0.25),l,l,l,1.4,l,l,l,l,l,l)],n),A.m,l,A.e,A.j,0,A.p)
case"blackletter":h=x.p
w=B.A(B.a([B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("PRICE: FREE \xb7 NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],h),A.m,l,A.hL,A.j,0,l,l)
t=m.afO(!0,1.4)
s=a0?4:10
v=B.d(i,l,1,l,l,l,l,m.avN(v,u,1,A.O),A.L,l,l)
q=a0?4:8
return B.v(B.a([w,A.at,t,new B.a6(l,s,l,l),v,new B.a6(l,q,l,l),m.afO(!0,1.4),A.at,B.d(C.bAB(j).toUpperCase(),l,l,l,l,l,l,f,A.L,l,l),A.at,m.axS(3)],h),A.m,l,A.e,A.j,0,A.p)
default:h=x.p
return B.v(B.a([B.d(i.toUpperCase(),l,1,l,l,l,l,m.avP(v,u,1,3,A.O),A.L,l,l),A.P,m.afO(!0,1.2),A.at,B.A(B.a([B.d(C.bAB(j).toUpperCase(),l,l,l,l,l,l,f,l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],h),A.m,l,A.hL,A.j,0,l,l),A.at,m.axS(3)],h),A.m,l,A.e,A.j,0,A.p)}},
abx(d){return this.vd(d,!1)},
acX(d,e,f,g){var w=null,v=f*0.9,u=f*0.45,t=e==null?B.b0(this.d.x):e,s=B.m(f)
return B.p(w,B.d(d,w,w,w,w,w,w,this.acZ("Roboto",f,g==null?A.c:g,1,0.4,A.u),w,w,w),A.f,w,w,new B.o(t,w,w,s,w,w,A.n),w,w,w,w,new B.Q(v,u,v,u),w,w,w)},
c4v(d,e){return this.acX(d,null,e,null)},
aVb(d){var w=null,v=new B.S(Date.now(),0,!1),u=A.o.G(B.dh(v),12)===0?12:A.o.G(B.dh(v),12),t=B.b0(this.d.w).j(0.75),s=this.avO("Roboto",15,t,1,A.cs),r=B.W(E.aiI,t,w,w,w,18),q=A.a.ap(A.oH[B.bG(v)-1],0,3),p=A.a.aT(A.o.u(B.fY(v)),2,"0"),o=B.dh(v)>=12?"PM":"AM"
return B.A(B.a([r,A.ab,B.d(q+" "+B.bQ(v)+", "+B.by(v)+"  \xb7  "+u+":"+p+" "+o,w,w,w,w,w,w,s,w,w,w),B.p(w,w,A.f,t.j(0.4),w,w,w,20,w,A.fH,w,w,w,1),B.W(d,t,w,w,w,19),A.ab,B.d("NGMY News",w,w,w,w,w,w,s,w,w,w)],x.p),A.m,w,A.e,A.j,0,w,w)},
aux(){return this.aVb(A.mg)},
b1v(d,e,f,g){var w=null,v=A.a.i(this.c.c)
if(v.length===0)v="Your headline appears here"
return B.d(v,w,e,A.a2,w,w,w,this.acZ("Roboto",this.acW(v,"Roboto",A.I,d,e,f,g,1.08),w,1.08,-0.8,A.I),w,w,w)},
axW(d,e,f){return this.b1v(d,e,f,30)},
azo(d,e,f){var w=null,v=A.a.i(this.c.d)
if(v.length===0)return A.bH
return new B.C(A.uV,B.d(v,w,e,A.a2,w,w,w,this.c4w("Roboto",f,B.b0(this.d.w).j(0.88),1.35),w,w,w),w)},
b4j(d){return this.azo(d,3,22)},
cts(d,e){return this.azo(d,e,22)},
th(d,e){var w,v,u,t,s=null,r=this.e
if(r!=null){w=B.fL(r,A.A,s,s,A.cm,A.bQ,!0,e,!1,s,d)
r=this.d
v=r.ay
if(v==="bw")w=new B.CV(D.btM,w,s)
if(v==="sepia")w=new B.CV(D.btL,w,s)}else{r=this.d
v=r.w
u=B.b0(v).j(0.1)
t=Math.min(d,e)
w=B.p(s,B.av(B.W(A.xC,B.b0(v).j(0.35),s,s,s,t*0.25),s,s,s),A.f,u,s,s,s,e,s,s,s,s,s,d)}v=B.a([w],x.p)
if(r.ax)v.push(B.bZ(s,new B.o(s,s,s,s,s,new B.bR(A.A,0.95,A.x,s,0,B.a([A.K,A.VM.j(0.38)],x.O),s,s),A.n),A.bd))
return new B.a6(d,e,new B.an(A.W,s,A.b_,A.q,v,s),s)},
q4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.d
switch(j.e.a){case 1:j=j.w
w=B.I(B.b0(j),A.r,3)
j=B.I(B.b0(j),A.r,1)
return B.p(k,B.p(k,l.th(d-24,e-24),A.f,k,k,new B.o(k,k,j,k,k,k,A.n),k,k,k,k,A.en,k,k,k),A.f,k,k,new B.o(k,k,w,k,k,k,A.n),k,e,k,k,A.lC,k,k,d)
case 2:w=B.a([new B.ac(0,A.G,A.w.j(0.35),D.dZC,14)],x.V)
v=l.th(d-28,e-28-58)
u=A.a.i(l.c.f)
if(u.length===0)u="NGMY"
return B.eA(A.A,-0.035,B.p(k,B.v(B.a([v,B.D(B.av(B.d(u,k,2,A.a2,k,k,k,l.aXr(j.as,13.5,D.b7h,1.1,A.cD),A.L,k,k),k,k,k),1)],x.p),A.m,k,A.e,A.j,0,A.p),A.f,k,k,new B.o(D.bag,k,k,k,w,k,A.n),k,e,k,k,D.boF,k,k,d),k)
case 3:w=B.m(30)
j=B.I(B.b0(j.x),A.r,5)
return B.p(k,B.bw(B.m(25),l.th(d-10,e-10),A.aq),A.f,k,k,new B.o(k,k,j,w,k,k,A.n),k,e,k,k,k,k,k,d)
case 4:t=Math.min(d,e)
w=B.I(B.b0(j.x),A.r,6)
j=B.b0(j.f)
v=t-10
return new B.a6(d,e,B.av(B.p(k,B.hS(l.th(v,v),A.aq),A.f,k,k,new B.o(j,k,w,k,k,k,A.a6),k,t,k,k,A.lC,k,k,t),k,k,k),k)
case 5:j=B.a([new B.ac(0,A.G,A.w.j(0.3),D.dZs,10)],x.V)
return B.eA(A.A,0.025,new B.a6(d,e,new B.an(A.W,k,A.aa,A.f,B.a([B.bY(0,B.p(k,l.th(d-18,e-18),A.f,k,k,new B.o(A.c,k,k,k,j,k,A.n),k,k,k,k,A.qJ,k,k,k),0,0,0),B.ao(k,B.eA(A.A,-0.6,B.p(k,k,A.f,A.bJ.j(0.85),k,k,k,26,k,k,k,k,k,90),k),k,k,-18,k,-10,k),B.ao(-10,B.eA(A.A,-0.6,B.p(k,k,A.f,A.bJ.j(0.85),k,k,k,26,k,k,k,k,k,90),k),k,k,k,-18,k,k)],x.p),k),k),k)
case 6:j=B.b0(j.x)
return new B.a6(d,e,B.b3(B.nl(l.th(d,e),A.aq,D.fGV),new C.baF(j,k),k,k,A.au),k)
case 7:j=x.p
w=B.a([l.th(d-16,e-44)],j)
for(v=[!0,!1],u=d/34,s=0;s<2;++s){r=v[s]
q=r?-18:k
p=r?k:-18
o=B.a([],j)
for(n=0;n<Math.max(6,A.k.bw(u));++n){m=new B.aV(2,2)
o.push(B.p(k,k,A.f,k,k,new B.o(A.bV,k,k,new B.bp(m,m,m,m),k,k,A.n),k,10,k,k,k,k,k,14))}w.push(new B.cK(0,q,0,p,k,k,new B.co(A.aQ,A.pN,A.j,A.m,k,A.p,k,0,o,k),k))}return B.p(k,new B.an(A.W,k,A.b_,A.q,w,k),A.f,A.e8,k,k,k,e,k,k,D.bt2,k,k,d)
case 8:w=d/2
v=B.wA(A.ha,new B.aV(w,w))
j=B.I(B.b0(j.x),A.r,5)
w-=5
return B.p(k,B.bw(B.wA(A.hz,new B.aV(w,w)),l.th(d-10,e-10),A.aq),A.f,k,k,new B.o(k,k,j,v,k,k,A.n),k,e,k,k,k,k,k,d)
case 9:j=B.a([new B.ac(0,A.G,A.w.j(0.35),A.fK,22)],x.V)
return B.p(k,l.th(d-20,e-20),A.f,k,k,new B.o(A.c,k,k,k,j,k,A.n),k,e,k,k,A.bR,k,k,d)
case 10:return new B.a6(d,e,B.nl(l.th(d,e),A.aq,D.fMX),k)
case 0:j=B.I(B.b0(j.w),A.r,2.4)
return B.p(k,l.th(d-14,e-14),A.f,k,k,new B.o(k,k,j,k,k,k,A.n),k,e,k,k,A.en,k,k,d)}},
aMM(d,e){return this.d.e===D.Qv?A.bH:this.bC8(d,e)},
Vw(d){return this.aMM(d,A.L)},
gayH(){var w=this.c
return A.a.i(w.y).length!==0||A.a.i(w.w).length!==0},
ayG(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.c,l=A.a.i(m.x)
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
if(m.length!==0&&w.length===0)q.push(B.D(B.av(B.d("\u201c"+m+"\u201d",n,7,A.a2,n,n,n,o.aXs(v.Q,19,1.15,A.cD,A.O),A.L,n,n),n,n,n),1))
else{r=B.a([],r)
p=l.length!==0
if(p)r.push(B.d(l.toUpperCase(),n,1,A.a2,n,n,n,o.P3("Roboto",12.5,B.b0(t),1.2,A.u),n,n,n))
if(p)r.push(A.at)
m=w.length===0?m:w
r.push(B.D(B.d(m,n,9,A.a2,n,n,n,o.acY(v.as,13,1.25),n,n,n),1))
A.d.v(q,r)}return B.p(n,B.js(B.v(q,A.F,n,A.e,A.j,0,A.p),A.q,n),A.f,n,n,new B.o(s,n,u,n,n,n,A.n),n,e,n,n,A.bm,n,n,d)},
gccz(){var w=this.c.r
return w.length===0?B.a([y.g],x.s):w},
a8b(d,e,f,g){return B.cm(new C.cam(this,e,d,f,g))},
a8a(d){return this.a8b(d,22,!0,18)},
VH(d,e){return this.a8b(d,22,!0,e)},
aNO(d,e,f){return this.a8b(d,22,e,f)},
bE7(d,e,f){return this.a8b(d,e,!0,f)},
b79(d,e,f,g){return B.cm(new C.can(this,e,d,g,!0,f))},
cbo(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i="Roboto",h=k.d
switch(h.d.a){case 0:return B.v(B.a([k.abx(824),A.ay,k.aTe(824),k.b4e(824),A.P,k.MT(),A.ac,B.av(k.q4(824,360),j,j,j),k.Vw(824),A.ac,B.D(k.a8a(3),1)],x.p),A.aj,j,A.e,A.j,0,A.p)
case 1:w=x.p
return B.v(B.a([k.abx(824),A.aO,new B.a6(j,350,B.A(B.a([new B.a6(440,j,B.v(B.a([k.aar(440,A.bg,3,62,26),k.azl(440,A.bg,2,20),A.b3,k.apr(B.b0(h.x),!1)],w),A.F,j,A.e,A.j,0,A.p),j),A.Ig,B.v(B.a([k.q4(362,310),k.Vw(362)],w),A.m,j,A.e,A.j,0,A.p)],w),A.F,j,A.e,A.j,0,j,j),j),A.S,k.axS(2),A.ac,B.D(k.a8a(3),1)],w),A.aj,j,A.e,A.j,0,A.p)
case 2:w=k.vd(824,!0)
v=B.b0(h.x)
u=h.ch
t=x.p
s=B.a([k.bUJ(788,u?B.b0(h.f):A.c,3,92,34)],t)
r=k.c
if(A.a.i(r.d).length!==0)s.push(k.ctg(788,u?B.b0(h.f):A.c,22))
v=B.p(j,B.v(s,A.m,j,A.e,A.j,0,A.p),A.f,v,j,j,j,j,j,j,A.AI,j,j,j)
u=B.a([B.av(k.q4(824,390),j,j,j)],t)
s=A.a.i(r.f)
if(s.length!==0&&h.e!==D.Qv){h=A.w.j(0.65)
u.push(B.ao(0,B.p(j,B.d(s,j,2,A.a2,j,j,j,k.avO(i,14,A.c,1.15,A.O),j,j,j),A.f,h,j,j,j,j,j,j,A.lA,j,j,j),j,j,0,0,j,j))}return B.v(B.a([w,A.ac,v,A.ac,new B.an(A.W,j,A.aa,A.q,u,j),A.P,k.MT(),A.S,B.D(k.VH(2,21),1)],t),A.aj,j,A.e,A.j,0,A.p)
case 3:h=k.vd(824,!0)
w=k.q4(824,560)
v=B.a([A.K,A.w.j(0.85)],x.O)
u=x.p
return B.v(B.a([h,A.ac,new B.an(A.b6,j,A.aa,A.q,B.a([w,B.ao(0,B.p(j,k.NW(780,A.bg,A.c,3,74,30),A.f,j,j,new B.o(j,j,j,j,j,new B.a7(A.b0,A.b6,A.x,v,j,j),A.n),j,j,j,j,D.brl,j,j,j),j,j,0,0,j,j)],u),j),k.b4f(824,A.bg),A.P,k.MT(),A.S,B.D(k.a8a(3),1)],u),A.aj,j,A.e,A.j,0,A.p)
case 4:h=x.p
return B.v(B.a([k.abx(824),A.ay,k.aTe(824),k.b4e(824),A.P,k.MT(),A.ac,B.D(k.b79(3,300,B.v(B.a([k.q4(300,300),k.Vw(300)],h),A.m,j,A.e,A.j,0,A.p),360),1)],h),A.aj,j,A.e,A.j,0,A.p)
case 5:w=k.vd(824,!0)
v=x.p
u=B.v(B.a([k.aar(440,A.bg,3,62,26),k.azl(440,A.bg,2,20),A.b3,k.apq(!1)],v),A.F,j,A.e,A.j,0,A.p)
return B.v(B.a([w,A.bv,new B.a6(j,400,B.A(B.a([new B.a6(440,j,u,j),A.aMg,new B.C(A.i8,k.q4(364,h.e===D.Qv?400:330),j)],v),A.F,j,A.e,A.j,0,j,j),j),A.ay,B.D(k.VH(2,21),1)],v),A.aj,j,A.e,A.j,0,A.p)
case 6:return B.v(B.a([k.abx(824),A.ac,k.bUI(824,2,70),k.cte(824,21),A.P,k.MT(),A.ac,B.D(k.b79(3,340,B.av(k.q4(340,340),j,j,j),350),1)],x.p),A.aj,j,A.e,A.j,0,A.p)
case 7:w=k.vd(824,!0)
v=B.b0(h.x)
u=Date.now()
u=C.bAB(new B.S(u,0,!1))
t=x.p
v=B.a([B.p(j,B.d(u.toUpperCase(),j,j,j,j,j,j,k.P3(i,13,h.ch?B.b0(h.f):A.c,1.2,A.u),A.L,j,j),A.f,v,j,j,j,j,j,j,A.bm,j,j,j),A.ay],t)
u=A.a.i(k.c.w)
if(u.length!==0)v.push(B.d("\u201c"+u+"\u201d",j,j,j,j,j,j,k.aXs(h.Q,24,1.15,A.cD,A.O),j,j,j))
v.push(A.b3)
if(k.gayH())v.push(k.ayG(230,250))
return B.v(B.a([w,A.ay,B.D(B.A(B.a([new B.a6(230,j,B.v(v,A.aj,j,A.e,A.j,0,A.p),j),B.p(j,j,A.f,B.b0(h.w),j,j,j,j,j,A.afD,j,j,j,1.2),new B.a6(570,j,B.v(B.a([k.aar(570,A.bg,3,62,28),k.ctf(570,A.bg,20),A.P,k.apq(!1),A.P,B.av(k.q4(570,330),j,j,j),k.Vw(570),A.S,B.D(k.aNO(2,!1,17),1)],t),A.aj,j,A.e,A.j,0,A.p),j)],t),A.F,j,A.e,A.j,0,j,j),1)],t),A.aj,j,A.e,A.j,0,A.p)
case 8:w=k.vd(824,!0)
v=h.ch
u=v?B.b0(h.x):B.b0(h.w)
t=B.d("\u2605  SPECIAL REPORT  \u2605",j,j,j,j,j,j,k.P3(i,13,v?A.w:B.b0(h.x),3,A.u),j,j,j)
s=x.p
return B.v(B.a([w,A.ac,B.p(j,B.v(B.a([t,A.ao,k.NW(788,A.bg,v?A.w:B.b0(h.f),2,72,30)],s),A.F,j,A.e,A.j,0,A.p),A.f,u,j,j,j,j,j,j,D.bpH,j,j,j),k.b4f(824,A.bg),A.S,B.av(k.q4(824,310),j,j,j),k.Vw(824),A.P,k.MT(),A.S,B.D(k.a8a(3),1)],s),A.aj,j,A.e,A.j,0,A.p)
case 10:w=x.p
return B.v(B.a([k.vd(824,!0),A.aO,new B.an(A.W,j,A.aa,A.q,B.a([k.q4(824,430),B.ao(18,k.c4v(k.c.b,17),j,j,18,j,j,j)],w),j),A.bv,k.axW(824,3,66),k.b4j(824),A.ac,B.p(j,j,A.f,B.b0(h.w).j(0.25),j,j,j,1,j,j,j,j,j,j),A.ac,k.aux(),A.ay,B.D(k.VH(2,18),1)],w),A.aj,j,A.e,A.j,0,A.p)
case 11:h=h.x
w=x.p
return B.v(B.a([k.vd(824,!0),A.bv,new B.a6(j,500,B.A(B.a([new B.a6(410,j,B.v(B.a([k.acX(k.c.b,B.b0(h).j(0.14),15,B.b0(h)),A.aO,k.b1v(410,4,58,28),k.azo(410,6,20),A.b3],w),A.F,j,A.e,A.j,0,A.p),j),U.aMh,k.q4(390,500)],w),A.F,j,A.e,A.j,0,j,j),j),A.ay,k.aux(),A.aO,B.D(k.VH(2,18),1)],w),A.aj,j,A.e,A.j,0,A.p)
case 12:w=k.vd(824,!0)
v=k.q4(824,420)
u=B.hrq(-0.25)
t=B.b0(h.x)
s=B.a([new B.ac(0,A.G,A.w.j(0.4),A.J,10)],x.V)
r=x.p
return B.v(B.a([w,A.aO,new B.an(A.W,j,A.aa,A.q,B.a([v,B.ao(22,B.fr(j,B.p(j,B.d("BREAKING NEWS",j,j,j,j,j,j,k.c4y(i,30,A.c,1,A.cD,A.u),j,j,j),A.f,j,j,new B.o(t,j,j,j,s,j,A.n),j,j,j,j,D.brB,j,j,j),j,u,!0),j,j,0,j,j,j)],r),j),A.bv,k.axW(824,3,62),k.b4j(824),A.ac,B.p(j,j,A.f,B.b0(h.w).j(0.25),j,j,j,1,j,j,j,j,j,j),A.ac,k.aVb(A.lb),A.ay,B.D(k.VH(2,18),1)],r),A.aj,j,A.e,A.j,0,A.p)
case 13:w=k.c
q=A.a.i(w.x)
if(!(q.length!==0)){v=A.a.i(w.w)
q=v.length!==0?v:"More from NGMY News"}v=k.vd(824,!0)
u=h.w
t=x.p
w=B.a([k.q4(824,380),B.ao(j,k.acX(w.b,B.b0(u).j(0.85),15,B.b0(h.f)),j,j,16,j,16,j)],t)
s=k.axW(824,2,60)
r=k.cts(824,2)
p=k.aux()
o=B.D(k.aNO(2,!1,18),1)
n=B.I(B.b0(u).j(0.18),A.r,1)
m=B.m(18)
h=h.x
l=B.b0(h).j(0.05)
return B.v(B.a([v,A.aO,new B.an(A.W,j,A.aa,A.q,w,j),A.aO,s,r,A.S,p,A.ay,o,A.ac,B.p(j,B.A(B.a([B.bw(B.m(14),k.th(150,104),A.aq),A.o1,B.D(B.v(B.a([k.acX("RELATED",B.b0(h).j(0.14),12,B.b0(h)),A.P,B.d(q,j,2,A.a2,j,j,j,k.avN(i,19,1.15,A.I),j,j,j)],t),A.F,j,A.e,A.Q,0,A.p),1),B.W(A.eu,B.b0(u).j(0.6),j,j,j,30)],t),A.m,j,A.e,A.j,0,j,j),A.f,j,j,new B.o(l,j,n,m,j,j,A.n),j,j,j,j,A.bm,j,j,j)],t),A.aj,j,A.e,A.j,0,A.p)
case 9:return B.v(B.a([k.vd(824,!0),A.bv,k.aar(824,A.bg,3,62,30),k.azl(824,A.bg,2,22),A.S,k.apq(!1),A.S,B.av(k.q4(824,330),j,j,j),k.aMM(824,A.bg),A.aO,B.D(k.bE7(2,40,21),1)],x.p),A.aj,j,A.e,A.j,0,A.p)}},
B(d){var w,v,u,t=this,s=null,r="Roboto",q=t.d,p=q.f,o=x.p,n=B.a([B.bY(0,B.bZ(s,new B.o(s,s,s,s,s,new B.a7(A.ax,A.aD,A.x,B.a([B.b0(p),B.b0(q.r)],x.O),s,s),A.n),A.bd),0,0,0)],o)
if(q.ax)n.push(B.bY(0,B.b3(s,s,s,new C.b7c(B.b0(q.w),s),A.au),0,0,0))
w=q.w
n.push(new B.C(D.bs6,B.v(B.a([B.D(t.cbo(),1),A.P,B.p(s,s,A.f,B.b0(w),s,s,s,1.4,s,s,s,s,s,s),A.fW,B.A(B.a([B.d("PRINTED WITH NGMY NEWS",s,s,s,s,s,s,t.aXq(r,11,1.4,A.I),s,s,s),B.d("CREATED BY NGMY.ORG",s,s,s,s,s,s,t.P3(r,11,B.b0(q.x),1.4,A.u),s,s,s)],o),A.m,s,A.hL,A.j,0,s,s)],o),A.aj,s,A.e,A.j,0,A.p),s))
v=B.b0(w)
n.push(B.bY(0,B.e_(B.b3(s,s,s,new C.bpD(v.j(q.ch?0.07:0.06),s),A.au),!0,s),0,0,0))
p=B.b0(p).j(0.75)
v=B.I(B.b0(w).j(0.5),A.r,1.2)
u=B.m(40)
o=B.a([],o)
q=t.f
if(q!=null)o.push(B.hS(B.fL(q,A.A,s,s,A.cm,A.bQ,!1,30,!1,s,30),A.aq))
else o.push(B.W(A.mg,B.b0(w),s,s,s,28))
o.push(A.ab)
o.push(B.d("NGMY.ORG",s,s,s,s,s,s,t.avP(r,15,1,1.6,A.u),s,s,s))
n.push(B.ao(52,B.e_(B.db(B.p(s,B.A(o,A.m,s,A.e,A.Q,0,s,s),A.f,s,s,new B.o(p,s,v,u,s,s,A.n),s,s,s,s,D.btb,s,s,s),0.6),!0,s),s,s,s,40,s,s))
return new B.a6(900,1260,B.js(new B.an(A.W,s,A.aa,A.q,n,s),A.q,s),s)}}
C.baG.prototype={
iV(d){return C.h6F(d)},
jA(d){return!1}}
C.baF.prototype={
a6(d,e){var w,v=C.h6F(e)
$.X()
w=B.M()
w.r=this.b.gp(0)
w.b=A.ae
w.c=6
return d.aO(v,w)},
aq(d){return!d.b.A(0,this.b)}}
C.bs6.prototype={
iV(d){var w,v,u,t,s,r,q,p,o=new B.eT()
o.dI(3)
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
u.E(new B.bE())
return u},
jA(d){return!1}}
C.b7c.prototype={
a6(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=new B.eT()
k.dI(7)
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
w.sau(new B.bR(A.A,0.5,A.x,l,0,B.a([A.K4.j(0.13),A.K],v),l,l).aw(0,B.bU(new B.u(q,p),m)))
n=w.H()
s.drawCircle(q,p,m,n)
n.delete()}w.sau(l)},
aq(d){return!1}}
C.bpD.prototype={
a6(d,e){var w,v,u=null,t=e.a,s=B.ii(u,u,u,u,B.dq(u,u,u,u,u,u,u,u,u,B.l(u,u,this.b,u,u,u,u,u,"Roboto",u,u,t*0.34,u,u,A.u,u,u,!0,u,10,u,u,u,u,u,u),"NGMY"),A.a5,A.ch,u,A.eq,A.cd)
s.eP()
w=d.a
J.bA(w.save())
w.translate(t/2,e.b*0.52)
d.j9(0,-0.5)
t=s.b
v=t.c
t=t.a.c
s.a6(d,new B.u(-v/2,-t.gbb(t)/2))
w.restore()},
aq(d){return!d.b.A(0,this.b)}}
C.UV.prototype={
T(){return new C.aCI()}}
C.aCI.prototype={
a_(){var w=this
w.a1()
B.hdw(w.a.c,null).bz(new C.ee3(),x.g7).bz(new C.ee4(w),x.a)
w.a.toString},
gaLB(){var w=D.atl[this.e].b
if(w==null){w=this.d
w=w==null?1:w.c/w.d}return w},
gavQ(){var w,v,u,t,s,r=this,q=r.d,p=q.c,o=q.d
q=r.gaLB()
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
YW(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f
var $async$YW=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:g=r.d
if(g==null||r.y){w=1
break}r.m(new C.edR(r))
t=4
q=r.gavQ()
j=q
p=Math.min(1600,j.c-j.a)
j=q
i=q
o=p*(j.d-j.b)/(i.c-i.a)
$.X()
n=new B.rR()
m=B.Gy(n,null)
i=B.M()
i.Q=A.fR
m.Bd(g,q,new B.aa(0,0,0+p,0+o),i)
w=7
return B.b(n.qg().z_(J.fXg(p),J.fXg(o)),$async$YW)
case 7:l=e
w=8
return B.b(l.ho(A.fT),$async$YW)
case 8:k=e
j=r.c
if(j!=null){j=B.a5(j,!1)
i=k
i.toString
j.N(J.fa(J.wv(i)))}t=2
w=6
break
case 4:t=3
f=s.pop()
if(r.c!=null){r.m(new C.edS(r))
r.c.I(x.q).f.R(D.eMs)}w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$YW,v)},
B(d){var w,v,u,t=this,s=null,r=t.d,q=B.aH(s,s,s,s,A.kM,s,s,s,new C.edY(d),s,s,s,s,s,s),p=x.p
q=B.eD(B.a([B.bK(!1,D.fnt,s,s,!0,s,s,t.y||r==null?s:t.gc4z(),s,s)],p),s,s,!0,!0,A.Am,s,1,!0,s,0,!1,s,!1,s,s,q,s,!0,s,s,s,s,s,D.frk,s,s,s,1,s,!0)
if(r==null)p=A.m_
else{w=B.D(new B.C(A.bW,B.av(new B.fG(t.gaLB(),B.cm(new C.edZ(t,r)),s),s,s,s),s),1)
v=B.a([],p)
for(u=0;u<6;++u)v.push(new B.C(A.j7,B.jH(s,s,s,new B.x(D.atl[u].a,s,E.aO1,s,s,s,s,s,s,s,s,s),s,new C.ee_(t,u),t.e===u,s,s,s,s),s))
p=B.v(B.a([w,B.p(s,B.bn(!0,B.v(B.a([new B.a6(s,40,B.cB(v,s,s,s,s,A.aQ,!1),s),B.A(B.a([D.bJJ,B.D(B.kT(s,s,s,6,1,new C.ee0(t),t.f),1),D.bJl],p),A.m,s,A.e,A.j,0,s,s),D.fkZ,A.ao,B.bK(!1,D.fkJ,s,s,!0,s,s,new C.ee1(t,d),s,s)],p),A.m,s,A.e,A.Q,0,A.p),!0,!1,A.ag,!0,!1),A.f,D.W1,s,s,s,s,s,s,D.bp2,s,s,s)],p),A.m,s,A.e,A.j,0,A.p)}return B.cb(q,A.Am,p,s,!1,!1,s,s)}}
C.bac.prototype={
a6(d,e){var w
$.X()
w=B.M()
w.Q=A.cm
return d.Bd(this.b,this.c,new B.aa(0,0,0+e.a,0+e.b),w)},
aq(d){return!d.c.A(0,this.c)||d.b!==this.b}}
C.a__.prototype={
T(){var w=$.aw(),v=x.A
return new C.aE4(new B.ar(A.as,w),new B.ar(new B.bb("NGMY",A.b2,A.aN),w),new B.cp(null,v),new B.cp(null,v),A.d.gL(D.a2d),"quote"+1000*Date.now(),B.a([],x.t),B.aW(x.S),A.L)}}
C.om.prototype={}
C.aE4.prototype={
gaTm(){var w,v,u=this
if(u.p1)w=new B.wQ(1,u.p2,0.9,u.p3).iE().l()&16777215
else{v=u.k4
w=v==null?null:v&16777215}if(w==null)return 0
return(A.o.D(A.k.V(u.ok*255),0,255)<<24|w)>>>0},
a_(){var w=this
w.a1()
w.a.toString
w.p4=null
$.aT.x1$.push(new C.eNi(w))},
q(){var w=this.d,v=$.aw()
w.S$=v
w.P$=0
w=this.e
w.S$=v
w.P$=0
this.a2()},
XD(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$XD=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b($.tR().ke(0,"assets/images/ngmy_logo.png"),$async$XD)
case 7:q=e
p=J.fa(J.wv(q))
o=r.c
w=o!=null?8:9
break
case 8:w=10
return B.b(F.bBl(new B.pz(p,1),o),$async$XD)
case 10:case 9:if(r.c==null){w=1
break}r.m(new C.eMa(r,p))
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
return B.i($async$XD,v)},
P6(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$P6=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hW().l_(92,1800,A.eG),$async$P6)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fe(),$async$P6)
case 8:p=e
n=r.c
if(n==null){w=1
break}w=9
return B.b(F.bBl(new B.pz(p,1),n),$async$P6)
case 9:if(r.c==null){w=1
break}r.m(new C.eMy(r,p))
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
return B.i($async$P6,v)},
b0T(){var w=this
w.RG=w.R8=0
w.ry=w.rx=1
w.xr=w.x2=w.x1=w.to=0
w.y1=!1
w.aG=w.aN=w.aE=w.az=w.Z=w.b5=w.bi=w.y2=0
w.b3=null
w.b1=0.25
w.ba=null
w.bJ=0.5
w.aR=1
w.c6=w.bS=w.bj=0
w.cW=w.cT=!1},
aUW(d,e,f,g,h,i,j,a0,a1){var w,v,u,t,s,r,q,p,o,n=1-g,m=n*0.2126,l=n*0.7152,k=n*0.0722
n=x.x
w=C.by1(B.a([m+g,l,k,0,0,m,l+g,k,0,0,m,l,k+g,0,0,0,0,0,1,0],n),D.d6C)
if(Math.abs(j)>0.5){v=j*3.141592653589793/180
u=Math.cos(v)
t=Math.sin(v)
s=0.715-u*0.715
r=t*0.715
q=0.072-u*0.072
p=0.213-u*0.213
w=C.by1(B.a([0.213+u*0.787-t*0.213,s-r,q+t*0.928,0,0,p+t*0.143,0.715+u*0.285+t*0.14,q-t*0.283,0,0,p-t*0.787,s+r,0.072+u*0.928+t*0.072,0,0,0,0,0,1,0],n),w)}o=128*(1-f)+d*255
n=h*25
w=C.by1(C.fSm(Math.pow(2,e)*f,o+n,o-i*25,o-n+i*12),w)
if(a0>0){n=a0*255*0.25
w=C.by1(C.fSm(1-a0*0.5,n,n,n),w)}return a1?C.by1(C.fSm(-1,255,255,255),w):w},
azu(){var w,v,u=B.af("\\S+",!0,!1,!1,!1).kP(0,this.d.a.a),t=B.B(u,B.a3(u).k("H.E"))
for(u=this.db;w=u.length,v=t.length,w<v;)u.push(0)
if(w>v)A.d.yT(u,v,w)
this.dx.pW(new C.eMI(t),!0)
return t},
b3n(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.w
e.azu()
w=C.hYG(e.d.a.a,e.db)
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
return C.hVa(d,k,v,a0,j,e.gaTm(),e.ax,i,u,q,p,r,t,s,w,g,h,f,n,l,o,m)},
cre(){return this.b3n(null)},
CK(){var w=0,v=B.j(x.dd),u,t=this,s,r,q
var $async$CK=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.p4==null){u=null
w=1
break}w=3
return B.b($.aT.gmr(),$async$CK)
case 3:w=4
return B.b(B.bN(A.eN,null,x.H),$async$CK)
case 4:w=5
return B.b($.aT.gmr(),$async$CK)
case 5:s=$.aT.ak$.x.h(0,t.r)
r=s==null?null:s.gb7()
if(!(r instanceof B.pK)){u=null
w=1
break}w=7
return B.b(r.lP(1080/r.gY(0).a),$async$CK)
case 7:w=6
return B.b(e.ho(A.fT),$async$CK)
case 6:q=e
u=q==null?null:J.fa(A.dG.gaP(q))
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$CK,v)},
a92(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$a92=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.Q){w=1
break}q.m(new C.eLU(q))
t=4
w=7
return B.b(q.CK(),$async$a92)
case 7:p=e
o=p==null?null:"data:image/png;base64,"+A.cS.gcv().aJ(p)
n=C.B9(null,null,null,null,D.nW,6,!1,null,null,null,null,null,C.cC(),null,!1,null,"NGMY Quote",null,null,B.a([q.b3n(o)],x.g),"office_blue",null,!1,null)
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
if(q.c!=null)q.m(new C.eLV(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a92,v)},
A7(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$A7=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.Q){w=1
break}q.m(new C.eLS(q))
t=4
w=7
return B.b($.aT.gmr(),$async$A7)
case 7:w=8
return B.b(B.bN(A.oq,null,x.H),$async$A7)
case 8:w=9
return B.b($.aT.gmr(),$async$A7)
case 9:k=$.aT.ak$.x.h(0,q.f)
p=k==null?null:k.gb7()
if(!(p instanceof B.pK))throw B.U("The picture is not ready yet.")
w=10
return B.b(p.lP(1080/p.gY(0).a),$async$A7)
case 10:o=e
w=11
return B.b(o.ho(A.fT),$async$A7)
case 11:n=e
if(n==null)throw B.U("Could not make the picture.")
w=12
return B.b(A7.afd(J.fa(A.dG.gaP(n)),"ngmy_quote.png","image/png"),$async$A7)
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
if(q.c!=null)q.m(new C.eLT(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$A7,v)},
cet(){var w=this.p4
w.toString
return B.cm(new C.eMr(this,w))},
aXz(d,e){var w=null
return B.br(w,w,w,w,w,D.eWu,w,w,!0,new B.b4(4,B.m(16),O.uz),w,w,w,w,w,D.rZ,!0,w,w,w,w,new B.b4(4,B.m(16),D.aWd),w,w,w,w,w,w,w,w,A1.CU,e,w,w,w,w,w,w,w,D.f0H,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
xu(d,e){var w=null,v=x.p,u=B.a([],v)
A.d.v(u,B.a([B.W(e,A.b4,w,w,w,15),A.bp],v))
u.push(B.d(d,w,w,w,w,w,w,D.aON,w,w,w))
return new B.C(D.bmY,B.A(u,A.m,w,A.e,A.j,0,w,w),w)},
aXy(d,e){var w=null,v=B.m(18),u=B.I(A.bF,A.r,1)
return B.p(w,B.aF(!1,A.a1,!0,w,d,A.f,w,0,w,w,w,w,w,A.jv),A.f,w,w,new B.o(D.rZ,w,u,v,w,w,A.n),w,w,w,w,e,w,w,1/0)},
vj(d){return this.aXy(d,A.bB)},
nV(d,e,f,g){var w,v,u,t,s,r=null,q=g!=null,p=f?G.tL:r
if(f)w=r
else w=A.c.j(q?0.07:0.03)
v=B.m(30)
u=B.I(f?A.K:A.bF,A.r,1)
t=x.p
s=B.a([],t)
if(e!=null)A.d.v(s,B.a([B.W(e,q?A.c:A.j4,r,r,r,16),A.bp],t))
s.push(B.d(d,r,r,r,r,r,r,B.l(r,r,q?A.c:A.j4,r,r,r,r,r,r,r,r,12.5,r,r,A.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r))
return B.aE(r,B.dg(r,B.A(s,A.m,r,A.e,A.Q,0,r,r),r,r,A.bb,new B.o(w,r,u,v,r,p,A.n),A.hW,r,r,r,A.EP,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,g,r,r,r,r,r,r,!1,A.a8)},
aeO(d,e,f){return this.nV(d,null,e,f)},
avU(d,e,f,g,h,i,j){var w=null,v=B.m(12),u=g?A.b4.j(0.28):A.c.j(0.05),t=g?A.ey:A.bF,s=x.p
v=B.a([B.dg(w,d,w,w,A.bb,new B.o(u,w,B.I(t,A.r,g?2:1),v,w,w,A.n),A.hW,w,e,w,new B.Q(i,i,i,i),w,w,j)],s)
u=g?A.c:A.az
A.d.v(v,B.a([A.at,B.d(f,w,1,A.a2,w,w,w,B.l(w,w,u,w,w,w,w,w,w,w,w,j<54?8.5:10.5,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],s))
return B.aE(w,new B.a6(j,w,B.v(v,A.m,w,A.e,A.Q,0,A.p),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,h,w,w,w,w,w,w,!1,A.a8)},
aXC(d,e,f,g,h,i){return this.avU(d,e,f,g,h,5,i)},
k6(d,e,f,g,h,i,j){var w,v,u=null,t=x.p,s=B.a([B.D(B.d(d,u,u,u,u,u,u,D.eTz,u,u,u),1)],t)
if(i!=null&&Math.abs(e-i)>0.001)s.push(B.aE(u,D.e27,A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.eME(this,h,i),u,u,u,u,u,u,!1,A.a8))
w=A.c.j(0.08)
v=B.m(20)
s.push(B.p(u,B.d(j,u,u,u,u,u,u,A.aNT,u,u,u),A.f,u,u,new B.o(w,u,u,v,u,u,A.n),u,u,u,u,A.Yc,u,u,u))
s=B.A(s,A.m,u,A.e,A.j,0,u,u)
w=this.c
w.toString
w=B.atR(w).cF4(A.b4,A.bF,A.b4.j(0.2),A.c,D.eDl,4)
return new B.C(A.xb,B.v(B.a([s,B.a90(B.kT(u,u,u,g,f,new C.eMF(this,h),A.k.D(e,f,g)),w)],t),A.m,u,A.e,A.j,0,A.p),u)},
agO(d,e,f,g,h,i){return this.k6(d,e,f,g,h,null,i)},
ahd(d,e,f){var w,v,u,t,s,r,q,p,o=null,n=B.a([],x.p)
for(w=f.length,v=0;v<f.length;f.length===w||(0,B.L)(f),++v){u=f[v]
t=u==null
s=t?A.dq:B.b0(u)
r=d==u
q=r?A.c:A.b5
p=new B.az(q,r?3:1,A.r,-1)
t=t?D.bCS:o
n.push(B.aE(o,B.p(o,t,A.f,o,o,new B.o(s,o,new B.bP(p,p,p,p),o,o,o,A.a6),o,34,o,o,o,o,o,34),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new C.eMH(this,e,u),o,o,o,o,o,o,!1,A.a8))}return B.c_(A.bD,n,A.bt,10,10)},
bIe(){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.x==="All")w=D.a2d
else{v=x.a8
w=B.B(new B.a2(D.a2d,new C.eLK(o),v),v.k("H.E"))}v=B.aL(n,A.T,!1,n,!0,A.q,n,B.aM(),o.d,n,n,n,n,n,2,o.aXz("Your quote",o.w.y),A.y,!0,n,!0,n,!1,n,A.ah,n,n,n,n,n,n,n,280,n,4,2,n,!1,"\u2022",n,new C.eLL(o),n,n,n,!1,n,n,!1,n,!0,n,A.a9,n,n,n,n,n,n,n,n,n,n,n,A.a7_,!0,A.a5,n,A.am,n,n,n,n)
u=B.aL(n,A.T,!1,n,!0,A.q,n,B.aM(),o.e,n,n,n,n,n,2,o.aXz("Who said it","NGMY"),A.y,!0,n,!0,n,!1,n,A.ah,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,new C.eLM(o),n,n,n,!1,n,n,!1,n,!0,n,A.a9,n,n,n,n,n,n,n,n,n,n,n,A.dl,!0,A.a5,n,A.am,n,n,n,n)
t=o.xu("DESIGNS",A.tz)
s=x.p
r=B.a([],s)
for(q=0;q<6;++q){p=D.cK8[q]
r.push(new B.C(A.j7,o.aeO(p,o.x===p,new C.eLN(o,p)),n))}return B.v(B.a([v,A.S,u,t,B.cd(B.A(r,A.m,n,A.e,A.j,0,n,n),A.q,n,A.y,n,n,n,n,A.aQ),A.ac,new B.a6(n,118,B.hF(n,new C.eLO(o,w),w.length,n,n,A.aQ,new C.eLP(),!1),n),A.P,o.aXy(B.v(B.a([B.iD(A.b4,n,n,A.ag,!0,new C.eLQ(o),n,D.fcm,n,D.f8V,o.k3),B.iD(A.b4,n,n,A.ag,!0,new C.eLR(o),n,n,n,D.f6c,o.k2)],s),A.m,n,A.e,A.j,0,A.p),A.ag5)],s),A.F,n,A.e,A.j,0,A.p)},
czF(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=null,a7=a5.azu()
if(a7.length===0)return a5.vj(B.d("Type your quote on the Design tab. Every word will show up here so you can make it bigger, normal or smaller.",a6,a6,a6,a6,a6,a6,D.Iy,a6,a6,a6))
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
m=B.B(u,B.a3(u).k("cl.E"))
A.d.fg(m)
l=m.length!==0&&A.d.d9(m,new C.eN7(a5,m))?a5.db[A.d.gL(m)]:a6
k=new C.eNe(a5)
j=new C.eNg()
q=B.d("Tap the words you want to change, then choose a size. One sentence can have big, normal and small words.",a6,a6,a6,a6,a6,a6,D.Iy,a6,a6,a6)
p=x.p
o=B.a([],p)
for(i=a5.db,h=0;h<a7.length;++h){g=new B.aV(11,11)
f=u.t(0,h)?A.b4.j(0.38):A.c.j(0.06)
e=u.t(0,h)?A.ey:A.bF
d=new B.az(e,u.t(0,h)?2:1,A.r,-1)
e=a7[h].b
a0=e.index
e=A.a.ap(w,a0,a0+e[0].length)
a0=B.af("[*~^]",!0,!1,!1,!1)
e=B.aJ(e,a0,"")
a0=j.$1(i[h])
a1=i[h]>0?A.u:A.a4
o.push(B.aE(a6,B.p(a6,new B.x(e,a6,new B.F(!0,A.c,a6,a6,a6,a6,a0,a1,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),a6,a6,a6,a6,a6,a6,a6,a6,a6),A.f,a6,a6,new B.o(f,a6,new B.bP(d,d,d,d),new B.bp(g,g,g,g),a6,a6,A.n),a6,a6,a6,a6,A.LP,a6,a6,a6),A.y,!1,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,new C.eN8(a5,h),a6,a6,a6,a6,a6,a6,!1,A.a8))}o=a5.vj(B.c_(A.bD,o,A.rw,6,6))
i=B.a([a5.nV("All words",K.akk,!1,new C.eN9(a5,a7))],p)
if(n>1){a2=0
for(;;){if(!(a2<n&&a2<8))break
a3=a2+1
i.push(a5.aeO("Sentence "+a3,!1,new C.eNa(a5,a7,v,a2)))
a2=a3}}i.push(a5.aeO("Clear picks",!1,new C.eNb(a5)))
i=B.c_(A.bD,i,A.bt,8,8)
g=a5.xu("SIZE OF THE PICKED WORDS",D.ajK)
f=B.a([],p)
for(s=0;s<4;++s){e={}
a0=D.dc1[s]
a1=e.a=null
a4=a0.a
e.a=a4
e=u.a===0?a1:new C.eNc(e,k)
f.push(a5.aeO(a0.b,l===a4,e))}return B.v(B.a([q,A.S,o,A.S,i,g,B.c_(A.bD,f,A.bt,8,8),A.S,a5.nV("Make every word normal",A.la,!1,new C.eNd(a5))],p),A.F,a6,A.e,A.j,0,A.p)},
cuW(){var w,v,u,t,s,r,q=this,p=null,o=x.p,n=B.A(B.a([D.bug,B.d(A.d.iA(D.av1,new C.eMR(q)).b,p,p,p,p,p,p,D.eV0,p,p,p)],o),A.m,p,A.e,A.j,0,p,p),m=B.cm(new C.eMS(q)),l=q.xu("HIGHLIGHT BEHIND THE WORDS",A.a_5),k=q.p1?-1:q.k4
k=q.ahd(k,new C.eMT(q),D.cU4)
w=q.p1
v=w?A.c:A.b5
n=B.a([n,A.S,m,l,B.c_(A.bD,B.a([k,B.aE(p,B.p(p,D.bFO,A.f,p,p,new B.o(p,p,B.I(v,A.r,w?3:1),p,p,D.eP3,A.a6),p,34,p,p,p,p,p,34),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.eMW(q),p,p,p,p,p,p,!1,A.a8)],o),A.rw,10,10),A.ao,B.d("Add a coloured band behind the words, with any word design. The first circle turns it off.",p,p,p,p,p,p,D.Iy,p,p,p)],o)
if(q.gaTm()!==0){m=B.a([],o)
if(q.p1){l=q.p2
l=q.agO("Colour",l,0,360,new C.eMX(q),""+A.k.V(l)+"\xb0")
k=q.p3
A.d.v(m,B.a([l,q.agO("Shade",k,0.15,0.9,new C.eMY(q),""+A.k.V(k*100))],o))}l=q.ok
m.push(q.k6("Strength",l,0.15,1,new C.eMZ(q),1,""+A.k.V(l*100)+"%"))
A.d.v(n,B.a([A.S,q.vj(B.v(m,A.m,p,A.e,A.j,0,A.p))],o))}n.push(q.xu("LOOK",A.y0))
m=B.a([q.nV("Bold",I.ajI,q.fy,new C.eN_(q)),q.nV("Italic",I.ajJ,q.go,new C.eN0(q))],o)
for(u=0;u<3;++u){l={}
k=D.cLh[u]
l.a=null
t=k.a
l.a=t
w=q.id===t
v=w?G.tL:p
w=w?p:A.c.j(0.07)
s=new B.aV(14,14)
r=new B.az(q.id===l.a?A.K:A.bF,1,A.r,-1)
m.push(B.aE(p,B.p(p,B.W(k.b,A.c,p,p,p,20),A.f,p,p,new B.o(w,p,new B.bP(r,r,r,r),new B.bp(s,s,s,s),p,v,A.n),p,38,p,p,p,p,p,42),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.eN1(l,q),p,p,p,p,p,p,!1,A.a8))}n.push(B.c_(A.bD,m,A.rw,8,8))
n.push(q.xu("COLOUR",A.n1))
n.push(q.ahd(q.fx,new C.eN2(q),D.d3C))
n.push(A.ao)
n.push(B.d("The first circle keeps the colour that comes with the design.",p,p,p,p,p,p,D.Iy,p,p,p))
n.push(q.xu("SIZE AND PLACE",A.FL))
m=q.fr
m=q.k6("Text size",m,0.5,1.6,new C.eMU(q),1,""+A.k.V(m*100)+"%")
l=q.k1
n.push(q.vj(B.v(B.a([m,q.k6("Up / down",l,0.12,0.5,new C.eMV(q),0.3,""+A.k.V(l*100))],o),A.m,p,A.e,A.j,0,A.p)))
return B.v(n,A.F,p,A.e,A.j,0,A.p)},
ceu(){var w,v,u,t,s,r,q=this,p=null,o=q.p4
if(o==null){w=B.m(22)
v=B.I(A.b4.j(0.6),A.r,1.6)
u=B.a([A.b4.j(0.18),A.bz.j(0.12)],x.O)
return B.aE(p,B.p(p,B.v(B.a([B.p(p,D.bL8,A.f,p,p,D.aZb,p,62,p,p,p,p,p,62),A.ay,D.fa3,A.ao,D.fex],x.p),A.m,p,A.e,A.j,0,A.p),A.f,p,p,new B.o(D.rZ,p,v,w,p,new B.a7(A.a3,A.a7,A.x,u,p,p),A.n),p,p,p,p,D.bqd,p,p,1/0),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,q.gaXB(),p,p,p,p,p,p,!1,A.a8)}w=x.p
v=B.A(B.a([B.bw(B.m(12),new B.a6(46,62,B.fL(o,A.A,120,p,A.cm,A.bQ,!1,p,!1,p,p),p),A.aq),A.bf,B.D(B.v(B.a([D.f9E,A.P,B.c_(A.bD,B.a([q.nV("Change",A.kK,!1,q.gaXB()),q.nV("Remove",A.e4,!1,new C.eMv(q))],w),A.bt,6,6)],w),A.F,p,A.e,A.j,0,A.p),1)],w),A.m,p,A.e,A.j,0,p,p)
u=B.a([],w)
for(t=0;t<5;++t){s=D.d0e[t]
u.push(q.nV(s.b,s.a,q.at===t,new C.eMw(q,t)))}u=B.c_(A.bD,u,A.bt,8,8)
r=q.at
A:{if(0===r){s=q.bYx(o)
break A}if(1===r){s=q.bXB()
break A}if(2===r){s=q.bE6()
break A}if(3===r){s=q.bKk()
break A}s=q.bGd()
break A}return B.v(B.a([v,A.ac,u,A.ay,s,A.S,new B.bI(A.a3,p,p,q.nV("Reset the whole picture",A.la,!1,new C.eMx(q)),p)],w),A.F,p,A.e,A.j,0,A.p)},
bYx(d){var w=this,v=x.p
return B.v(B.a([B.c_(A.bD,B.a([w.nV("Auto enhance",E.ZK,!1,new C.eMn(w)),w.nV("Make words easy to read",A.oA,!1,new C.eMo(w))],v),A.bt,8,8),A.ay,B.cm(new C.eMp(w,d))],v),A.F,null,A.e,A.j,0,A.p)},
bXB(){var w,v,u,t,s,r,q,p,o=this,n=o.R8
n=o.k6("Exposure",n,-1.5,1.5,new C.eM1(o),0,A.k.aa(n,1))
w=o.RG
w=o.k6("Brightness",w,-0.5,0.5,new C.eM2(o),0,""+A.k.V(w*100))
v=o.rx
v=o.k6("Contrast",v,0.4,2,new C.eM3(o),1,""+A.k.V(v*100))
u=o.xr
u=o.k6("Fade",u,0,1,new C.eM4(o),0,""+A.k.V(u*100))
t=o.aE
t=o.k6("Spotlight",t,0,1,new C.eM5(o),0,""+A.k.V(t*100))
s=o.Z
s=o.k6("Darken",s,0,0.85,new C.eM6(o),0,""+A.k.V(s*100))
r=o.b5
r=o.k6("Vignette",r,0,0.9,new C.eM7(o),0,""+A.k.V(r*100))
q=o.aG
q=o.k6("Shade behind words",q,0,0.85,new C.eM8(o),0,""+A.k.V(q*100))
p=o.aN
return o.vj(B.v(B.a([n,w,v,u,t,s,r,q,o.k6("Shade top & bottom",p,0,0.85,new C.eM9(o),0,""+A.k.V(p*100))],x.p),A.m,null,A.e,A.j,0,A.p))},
bE6(){var w,v,u,t,s=this,r=null,q=s.ry
q=s.k6("Colour strength",q,0,2.2,new C.eLn(s),1,""+A.k.V(q*100))
w=s.to
w=s.k6("Warmth",w,-1,1,new C.eLo(s),0,""+A.k.V(w*100))
v=s.x1
v=s.k6("Tint",v,-1,1,new C.eLp(s),0,""+A.k.V(v*100))
u=s.x2
t=x.p
u=s.vj(B.v(B.a([q,w,v,s.k6("Shift colours",u,-180,180,new C.eLq(s),0,""+A.k.V(u)+"\xb0"),new B.bI(A.a3,r,r,s.nV("Negative",D.bAS,s.y1,new C.eLr(s)),r)],t),A.m,r,A.e,A.j,0,A.p))
v=s.xu("COLOUR WASH",A.MO)
w=s.b3
q=B.a([null],x.Z)
A.d.v(q,D.atL)
t=B.a([u,v,s.ahd(w,new C.eLs(s),q),A.P],t)
if(s.b3!=null){q=s.b1
t.push(s.vj(s.agO("Wash strength",q,0,0.9,new C.eLt(s),""+A.k.V(q*100))))}return B.v(t,A.F,r,A.e,A.j,0,A.p)},
bKk(){var w,v,u,t,s,r=this,q=r.y2
q=r.k6("Blur",q,0,24,new C.eLW(r),0,A.o.u(A.k.V(q)))
w=r.bi
w=r.k6("Soft focus",w,0,1,new C.eLX(r),0,""+A.k.V(w*100))
v=r.az
u=x.p
v=r.vj(B.v(B.a([q,w,r.k6("Film grain",v,0,1,new C.eLY(r),0,""+A.k.V(v*100))],u),A.m,null,A.e,A.j,0,A.p))
w=r.xu("LIGHT LEAK",H.ajE)
q=r.ba
t=B.a([null],x.Z)
s=x.S
A.d.v(t,B.dc(D.atL,0,B.dJ(8,"count",s),s))
u=B.a([v,w,r.ahd(q,new C.eLZ(r),t),A.P],u)
if(r.ba!=null){q=r.bJ
u.push(r.vj(r.agO("Leak strength",q,0,1,new C.eM_(r),""+A.k.V(q*100))))}return B.v(u,A.F,null,A.e,A.j,0,A.p)},
bGd(){var w,v,u,t,s=this,r=s.aR
r=s.k6("Zoom",r,1,3,new C.eLx(s),1,""+A.k.V(r*100)+"%")
w=s.bj
w=s.k6("Left / right",w,-1,1,new C.eLy(s),0,""+A.k.V(w*100))
v=s.bS
v=s.k6("Up / down",v,-1,1,new C.eLz(s),0,""+A.k.V(v*100))
u=s.c6
t=x.p
return B.v(B.a([s.vj(B.v(B.a([r,w,v,s.k6("Turn",u,-180,180,new C.eLA(s),0,""+A.k.V(u)+"\xb0")],t),A.m,null,A.e,A.j,0,A.p)),A.S,B.c_(A.bD,B.a([s.nV("Turn 90\xb0",P.akS,!1,new C.eLB(s)),s.nV("Flip sideways",A.Fz,s.cT,new C.eLC(s)),s.nV("Flip upside down",A.Fz,s.cW,new C.eLD(s))],t),A.bt,8,8)],t),A.F,null,A.e,A.j,0,A.p)},
c0a(){var w=null,v=B.m(22),u=B.I(A.bF,A.r,1)
return B.p(w,B.v(B.a([D.eDx,A.S,D.fbq,A.ay,B.aE(w,B.p(A.A,D.eDK,A.f,w,w,new B.o(w,w,w,B.m(16),w,G.tL,A.n),w,52,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eMq(this),w,w,w,w,w,w,!1,A.a8)],x.p),A.F,w,A.e,A.j,0,A.p),A.f,w,w,new B.o(D.rZ,w,u,v,w,w,A.n),w,w,w,w,A.bW,w,w,w)},
bYp(){var w,v,u,t,s,r,q,p=this,o=null,n=new C.eMi(p),m=x.p,l=B.A(B.a([D.bum,p.nV("Reset",A.la,!1,new C.eMe(p))],m),A.m,o,A.e,A.j,0,o,o),k=B.d("Drag it on the quote to move it. It stays on every quote.",o,o,o,o,o,o,D.Iy,o,o,o),j=p.xu("SHAPE",A.akO),i=B.a([],m)
for(w=0;w<7;++w){v={}
u=D.BB[w]
v.a=null
t=v.a=u.a
if(t.length!==0){s=p.cx
i.push(p.aXC(n.$2(t,p.cy),62,u.b,s===t,new C.eMf(v,p),62))}}i=B.c_(A.bD,i,A.bt,8,8)
v=p.xu("RING",A.qL)
u=B.a([],m)
for(w=0;w<11;++w){s={}
r=D.Bw[w]
s.a=null
t=s.a=r.a
q=p.cy
u.push(p.aXC(n.$2(p.cx,t),62,r.b,q===t,new C.eMg(s,p),62))}u=B.c_(A.bD,u,A.bt,8,8)
s=p.CW
return B.v(B.a([l,A.at,k,j,i,v,u,A.ac,p.vj(p.k6("Size",s,0.12,0.4,new C.eMh(p),0.22,""+A.k.V(s*100)))],m),A.F,o,A.e,A.j,0,A.p)},
b_w(d){return new B.a6(null,d,new B.fG(0.5625,B.cm(new C.eMB(this)),null),null)},
cud(){var w,v,u,t,s,r,q=null,p=A.c.j(0.05),o=B.m(18),n=B.I(A.bF,A.r,1),m=x.p,l=B.a([],m)
for(w=0;w<6;++w){v=this.as===w
u=v?G.tL:q
t=new B.aV(14,14)
s=D.d2g[w]
r=v?A.c:A.az
r=B.W(s.a,r,q,q,q,19)
v=v?A.c:A.az
l.push(new B.bF(1,A.bj,B.aE(A.c5,B.dg(q,B.v(B.a([r,A.cZ,new B.q8(A.eg,A.A,A.f,new B.x(s.b,q,new B.F(!0,v,q,q,q,q,10.5,A.I,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q),q,q,q,q,q,q,q,q,q),q)],m),A.m,q,A.e,A.Q,0,A.p),q,q,A.bb,new B.o(q,q,q,new B.bp(t,t,t,t),q,u,A.n),D.blU,q,q,q,A.hH,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.eMK(this,w),q,q,q,q,q,q,!1,A.a8),q))}return B.p(q,B.A(l,A.m,q,A.e,A.j,0,q,q),A.f,q,q,new B.o(p,q,n,o,q,q,A.n),q,q,q,D.bo0,A.lC,q,q,q)},
aOj(){var w,v,u=this,t=null,s=u.cud(),r=u.as
A:{if(0===r){w=u.bIe()
break A}if(1===r){w=u.czF()
break A}if(2===r){w=u.cuW()
break A}if(3===r){w=u.ceu()
break A}if(4===r){w=u.bYp()
break A}w=u.c0a()
break A}v=x.p
return B.bw(A.rC,B.ei(B.v(B.a([s,B.D(B.cB(B.a([w],v),t,D.bp3,t,t,A.ai,!1),1)],v),A.m,t,A.e,A.j,0,A.p),D.W1,!0),A.aq)},
aKz(){var w,v,u,t,s=this,r=null,q=s.Q?r:s.gc5_(),p=B.m(16)
q=B.D(B.aE(r,B.p(r,D.eDT,A.f,r,r,new B.o(A.c.j(0.08),r,B.I(A.b5,A.r,1),p,r,r,A.n),r,50,r,r,r,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,!1,A.a8),1)
p=s.Q?r:s.gbJV()
w=B.m(16)
v=B.a([new B.ac(0,A.G,A.bz.j(0.35),A.cx,16)],x.V)
u=x.p
t=B.a([],u)
if(s.Q)t.push(D.eIM)
else t.push(D.bEV)
t.push(A.ab)
t.push(D.bw5)
return B.p(r,B.A(B.a([q,A.aw,B.D(B.aE(r,B.p(r,B.A(t,A.m,r,A.ba,A.j,0,r,r),A.f,r,r,new B.o(r,r,r,w,v,G.tL,A.n),r,50,r,r,r,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,p,r,r,r,r,r,r,!1,A.a8),1)],u),A.m,r,A.e,A.j,0,r,r),A.f,r,r,D.aYj,r,r,r,r,G.afU,r,r,r)},
aXA(){var w=null
return new B.C(T.Y8,B.A(B.a([B.aH(w,w,w,w,A.mk,w,w,w,new C.eM0(this),w,w,w,w,w,w),D.fqi,A.b3,D.bNp],x.p),A.m,w,A.e,A.j,0,w,w),w)},
B(d){var w=null
return B.cb(w,A.Am,B.bn(!0,B.cm(new C.eNh(this)),!0,!1,A.ag,!0,!0),w,!1,!1,w,w)}}
C.bdJ.prototype={
a6(d,e){var w,v,u,t,s,r,q,p,o,n,m=new B.eT()
m.dI(7)
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
C.re.prototype={
a4(){return"NgmyQuoteDeco."+this.b}}
C.lX.prototype={}
C.z4.prototype={
ae(){var w=this
return B.E(["at",w.a.a5().ac(),"outline",w.b,"extras",w.c,"request",w.d],x.N,x.z)}}
C.nA.prototype={}
C.vE.prototype={
a4(){return"NgmySlidesAiExtra."+this.b}}
C.a75.prototype={}
C.apP.prototype={}
C.a_u.prototype={
T(){return new C.aFZ(new B.ar(A.as,$.aw()),B.kh(!0,null,!0,!0,null,null,!1),D.drN,B.a([],x.s),B.eu([D.Hq],x.Q))}}
C.aFZ.prototype={
q(){var w=this.d
w.S$=$.aw()
w.P$=0
this.f.q()
this.a2()},
a_g(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$a_g=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hW().BH(90,700,700,A.eG),$async$a_g)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fe(),$async$a_g)
case 8:p=e
if(r.c!=null)r.m(new C.eTj(r,p,q))
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
return B.i($async$a_g,v)},
a_j(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a_j=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i=20-r.y.length
if(i<=0){w=1
break}t=4
n=i>1?i:null
w=7
return B.b(new B.hW().aFN(78,n,1100,1100),$async$a_j)
case 7:q=e
if(J.ck(q)){w=1
break}p=B.bl(r.y,!0,x.N)
n=J.aX(q)
case 8:if(!n.C()){w=9
break}o=n.gU(n)
if(J.ad(p)>=20){w=9
break}w=10
return B.b(o.fe(),$async$a_j)
case 10:m=e
l=o.b.toLowerCase()
if(A.a.c9(l,".png"))k="image/png"
else k=A.a.c9(l,".webp")?"image/webp":"image/jpeg"
J.cf(p,"data:"+k+";base64,"+A.cS.gcv().aJ(m))
w=8
break
case 9:if(r.c!=null)r.m(new C.eTk(r,p))
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
return B.i($async$a_j,v)},
b1u(d){var w,v,u=null
if(d!=null&&A.a.t(d,","))try{w=B.fL(A.cB.aJ(A.d.gal(d.split(","))),A.A,u,u,A.cm,A.bQ,!0,u,!1,u,u)
return w}catch(v){}return D.bkb},
bYv(d,e,f,g){var w=e.length===0&&f.length===0?"rounded":e
return B.coe(C.ftS(w,this.b1u(d),f),g)},
abi(d,e,f,g,h){var w=null,v=new C.eTh(f,e),u=new C.eTi(f,e),t=A.c.j(0.05),s=B.m(12),r=B.m(12),q=B.m(12),p=h==null,o=B.I(p?A.bF:A.b4.j(0.6),A.r,1)
if(p)p=new B.a6(34,30,new B.an(A.W,w,A.aa,A.f,B.a([B.av(B.W(f?A.Bg:A.MD,A.c_,w,w,w,26),w,w,w),D.e7C],x.p),w),w)
else p=this.bYv(g,v.$1(h),u.$1(h),34)
return B.aF(!1,A.a1,!0,s,B.aK(!1,r,!0,B.p(w,B.A(B.a([B.D(B.av(p,w,w,w),1),D.bEC],x.p),A.m,w,A.e,A.j,0,w,w),A.f,w,w,new B.o(w,w,o,q,w,w,A.n),w,44,w,w,A.mc,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eTg(this,f,h,g,v,u,d),w,w,w,w,w,w,w),A.f,t,0,w,w,w,w,w,A.af)},
aV1(d,e,f,g,h){var w,v,u,t,s,r,q,p=null,o=null,n=h==null
if(!n&&A.a.t(h,","))try{o=B.bw(B.m(8),B.fL(A.cB.aJ(A.d.gal(h.split(","))),A.A,p,p,A.cm,A.bQ,!1,30,!1,p,30),A.aq)}catch(w){}v=A.c.j(0.05)
u=B.m(14)
t=B.m(14)
s=B.m(14)
r=B.I(n?A.bF:A.bn.j(0.6),A.r,1)
q=o
n=q==null?B.W(d,A.ex,p,p,p,20):q
n=B.a([n,A.ab,B.D(B.d(e,p,1,A.a2,p,p,p,A.T3,p,p,p),1)],x.p)
if(f!=null)n.push(B.aE(p,D.a00,A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,!1,A.a8))
return B.aF(!1,A.a1,!0,u,B.aK(!1,t,!0,B.p(p,B.A(n,A.m,p,A.e,A.j,0,p,p),A.f,p,p,new B.o(p,p,r,s,p,p,A.n),p,50,p,p,A.l4,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,g,p,p,p,p,p,p,p),A.f,v,0,p,p,p,p,p,A.af)},
a7v(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$a7v=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(C.fxi(),$async$a7v)
case 7:q=e
if(q==null||r.c==null){w=1
break}r.m(new C.eT_(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
p=B.a9(n)
if(r.c!=null)r.m(new C.eT0(r,p))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a7v,v)},
ad6(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$ad6=B.e(function(d,a0){if(d===1){s.push(a0)
w=t}for(;;)switch(w){case 0:f=A.a.i(r.d.a.a)
if(f.length<6&&r.e==null){r.m(new C.eT2(r))
w=1
break}if(r.x==null){m=B.af("\\blogo\\b",!1,!1,!1,!1)
m=m.b.test(f)}else m=!1
if(m){r.m(new C.eT3(r))
w=1
break}m=r.e
l=m==null?null:m.c
if(l==null)l=""
q=l.length===0?f:f+"\n\nSOURCE DOCUMENT ("+m.a+"):\n"+l
r.m(new C.eT4(r))
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
return B.b(C.fsA(q,r.cx,j,new C.b_A(r.z,r.Q,r.as,r.at),new C.eT5(r),i,m,p,k),$async$ad6)
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
if(r.c!=null)r.m(new C.eT6(r,n))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$ad6,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=x.w,f=B.aI(d,A.eD,g).w
g=B.aI(d,A.bS,g).w
w=B.av(B.p(h,h,A.f,h,h,new B.o(A.b5,h,h,B.m(99),h,h,A.n),h,4,h,h,h,h,h,40),h,h,h)
v=x.V
u=B.av(B.aE(h,B.p(h,D.bHM,A.f,h,h,new B.o(h,h,B.I(A.c.j(0.35),A.r,2),h,B.a([new B.ac(2,A.G,A.bn.j(0.5),A.J,24)],v),D.bR9,A.a6),h,84,h,h,h,h,h,84),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.eTx(i),h,h,h,h,h,h,!1,A.a8),h,h,h)
t=x.p
s=B.a([],t)
if(i.e!=null)s.push(B.aH(h,h,h,h,D.a00,h,h,h,i.ax?h:new C.eTy(i),h,h,h,h,"Remove document",h))
r=i.e
r=r==null?"Attach a PDF, Word or text file":r.a
q=i.ax?h:i.gbzb()
v=B.a([new B.ac(0,A.G,A.b4.j(0.45),A.J,10)],v)
s.push(B.hp(B.aF(!1,A.a1,!0,h,B.aK(!1,h,!0,B.p(h,B.W(i.e==null?A.vh:A.hx,A.c,h,h,h,20),A.f,h,h,new B.o(h,h,h,h,v,E.vw,A.a6),h,40,h,h,h,h,h,40),A.cL,!0,h,h,h,h,h,h,h,h,h,h,h,q,h,h,h,h,h,h,h),A.f,A.K,0,h,h,A.cL,h,h,A.af),h,r,h,h))
v=B.A(s,A.m,h,A.e,A.Q,0,h,h)
s=A.c.j(0.05)
v=B.aL(h,A.T,!1,h,!0,A.q,h,B.aM(),i.d,h,h,h,h,h,2,B.br(h,h,h,h,h,h,h,h,!0,new B.b4(4,B.m(16),new B.az(A.c.j(0.1),1,A.r,-1)),h,h,h,h,h,s,!0,h,h,h,h,new B.b4(4,B.m(16),D.aVL),h,h,h,h,h,h,h,h,X.In,"Type your idea here\u2026",h,h,h,h,h,h,h,h,h,!0,!0,!1,h,h,h,h,h,h,h,h,new B.C(A.j7,v,h),h,h,h,h,h),A.y,!0,h,!0,h,!1,i.f,A.ah,h,h,h,h,h,h,h,h,h,6,3,h,!1,"\u2022",h,h,h,h,h,!1,h,h,!1,h,!0,h,A.a9,h,h,h,h,h,h,h,h,h,h,h,D.aOf,!0,A.a5,h,A.am,h,h,h,h)
s=i.x
r=s==null
q=r?"Add your logo":"Logo added"
r=r?h:new C.eTz(i)
s=i.aV1(A.lc,q,r,i.gceV(),s)
r=i.z
r=B.D(i.abi(new C.eTB(i),i.Q,!1,i.x,r),1)
q=i.Q
q=B.D(B.v(B.a([s,A.ao,B.A(B.a([r,A.bp,B.D(i.abi(new C.eTC(i),i.z,!0,i.x,q),1)],t),A.m,h,A.e,A.j,0,h,h)],t),A.m,h,A.e,A.j,0,A.p),1)
s=i.y
r=s.length
p=r===0
if(p)r="Add your pictures"
else{o=r===1?"":"s"
o=""+r+" picture"+o
r=o}s=p?h:A.d.gL(s)
p=i.y.length===0?h:new C.eTD(i)
s=i.aV1(A.ve,r,p,i.gcf2(),s)
p=i.as
r=i.at
o=i.y
o=o.length===0?h:A.d.gL(o)
p=B.D(i.abi(new C.eTE(i),r,!1,o,p),1)
o=i.at
r=i.as
n=i.y
n=n.length===0?h:A.d.gL(n)
o=B.a([w,A.ay,D.ffL,A.at,D.fix,A.bv,u,A.P,D.fh0,A.ay,v,A.bv,B.A(B.a([q,A.aw,B.D(B.v(B.a([s,A.ao,B.A(B.a([p,A.bp,B.D(i.abi(new C.eTF(i),r,!0,n,o),1)],t),A.m,h,A.e,A.j,0,h,h)],t),A.m,h,A.e,A.j,0,A.p),1)],t),A.F,h,A.e,A.j,0,h,h),A.ao,D.fkb],t)
w=i.w.a
if(w.length!==0){v=B.m(999)
u=B.I(D.bd4,A.r,1)
w=C.afN(w)
w=w==null?h:w.b
A.d.v(o,B.a([A.S,new B.bI(A.a3,h,h,B.p(h,B.A(B.a([D.bIR,A.bp,B.d("Ending: "+(w==null?"":w),h,h,h,h,h,h,D.f_s,h,h,h),B.aK(!1,h,!0,D.e2n,h,!0,h,h,h,h,h,h,h,h,h,h,h,new C.eTG(i),h,h,h,h,h,h,h)],t),A.m,h,A.e,A.Q,0,h,h),A.f,h,h,new B.o(D.b6z,h,u,v,h,h,A.n),h,h,h,h,D.bnG,h,h,h),h)],t))}o.push(A.bv)
o.push(D.f6U)
o.push(A.P)
w=B.a([],t)
for(m=0;m<6;++m){l=D.cW4[m]
v=i.ch===l?A.b4:A.c.j(0.06)
u=i.ch===l
k=new B.az(u?A.az:A.bF,1,A.r,-1)
u=u?A.u:A.O
w.push(new B.bF(1,A.bj,new B.C(A.jr,B.aE(h,B.dg(A.A,new B.x(""+l,h,new B.F(!0,A.c,h,h,h,h,h,u,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h),h,h,h,h,h,h,h,h,h),h,h,A.bb,new B.o(v,h,new B.bP(k,k,k,k),h,h,h,A.a6),A.eE,h,42,h,h,h,h,h),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.eTH(i,l),h,h,h,h,h,h,!1,A.a8),h),h))}o.push(B.A(w,A.m,h,A.e,A.j,0,h,h))
o.push(A.bv)
o.push(D.foA)
o.push(A.P)
o.push(B.cm(new C.eTI(i)))
o.push(A.bv)
o.push(D.fdU)
o.push(A.P)
w=B.a([i.b4c("auto","Let AI choose",A.dW,A.Pj)],t)
for(v=x.O,m=0;m<11;++m){j=D.vC[m]
u=j.d
w.push(i.b4c(j.a,j.b,j.c,B.a([B.b0(A.d.gL(u).a),B.b0(A.d.gL(u).b)],v)))}o.push(B.c_(A.bD,w,A.bt,8,8))
o.push(A.aO)
w=A.c.j(0.04)
v=B.m(16)
u=B.I(i.r?A.bn.j(0.5):A.bF,A.r,1)
o.push(B.p(h,B.iD(h,A.bn,h,h,h,new C.eTA(i),D.bE3,D.fnP,h,D.f97,i.r),A.f,h,h,new B.o(w,h,u,v,h,h,A.n),h,h,h,h,h,h,h,h))
w=i.cy
if(w!=null)A.d.v(o,B.a([A.ay,B.d(w,h,h,h,h,h,h,D.aNv,h,h,h)],t))
o.push(A.bv)
w=i.ax?h:i.gc53()
v=B.fl(h,h,A.b4,A.b4.j(0.5),h,h,h,h,h,A.c,h,h,h,h,new B.b7(B.m(18),A.Y),h,h,h,h,h)
u=i.ax
t=u?D.eIC:A.FZ
o.push(new B.a6(h,54,B.lq(t,B.d(u?i.ay:"Create my presentation",h,h,h,h,h,h,A.oX,h,h,h),w,v),h))
return new B.C(new B.Q(0,0,0,f.f.d),B.p(h,B.bn(!0,B.cd(B.v(o,A.aj,h,A.e,A.j,0,A.p),A.q,h,A.y,h,A.v6,h,h,A.ai),!0,!1,A.ag,!0,!1),A.f,h,new B.aY(0,680,0,g.a.b*0.92),D.a9O,h,h,h,h,h,h,h,h),h)},
bLo(d){var w,v,u,t,s,r,q=null,p=this.cx.t(0,d),o=new C.eT7(this,p,d)
if(d===D.Cc)return new C.aCx(p,o,q)
w=B.m(16)
v=p?E.vw:q
u=p?q:A.c.j(0.05)
t=B.I(p?A.az:A.bF,A.r,1)
s=B.W(p?A.ee:C.hyr(d),A.c,q,q,q,20)
r=C.hys(d)
return B.aE(q,B.dg(q,B.v(B.a([s,A.at,B.f1(A.A,B.d(r,q,q,q,q,q,q,B.l(q,q,A.c,q,q,q,q,q,q,q,q,12,q,q,p?A.u:A.a4,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),A.f,A.eg)],x.p),A.m,q,A.ba,A.j,0,A.p),q,q,A.bb,new B.o(u,q,t,w,q,v,A.n),A.hW,q,64,q,A.hv,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,o,q,q,q,q,q,q,!1,A.a8)},
b4c(d,e,f,g){var w,v=null,u=this.CW===d,t=B.m(99),s=u?A.c.j(0.12):A.c.j(0.04),r=u?A.ad:A.bF
r=B.I(r,A.r,u?1.6:1)
w=B.p(v,B.W(f,A.c,v,v,v,14),A.f,v,v,new B.o(v,v,v,v,v,new B.a7(A.a3,A.a7,A.x,g,v,v),A.a6),v,26,v,v,v,v,v,26)
return B.aE(v,B.dg(v,B.A(B.a([w,L.Ih,B.d(e,v,v,v,v,v,v,B.l(v,v,A.c,v,v,v,v,v,v,v,v,12.5,v,v,u?A.u:A.a4,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.Q,0,v,v),v,v,A.bb,new B.o(s,v,r,t,v,v,A.n),A.eE,v,v,v,L.ahb,v,v,v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.eTm(this,d),v,v,v,v,v,v,!1,A.a8)}}
C.a_t.prototype={
T(){return new C.aFY(new B.ar(A.as,$.aw()))}}
C.aFY.prototype={
q(){var w=this.d
w.S$=$.aw()
w.P$=0
this.a2()},
ad7(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$ad7=B.e(function(a2,a3){if(a2===1){s.push(a3)
w=t}for(;;)switch(w){case 0:a0=A.a.i(r.d.a.a)
if(J.ad(a0)<3){r.m(new C.eST(r))
w=1
break}B.eP()
r.m(new C.eSU(r))
t=4
q=C.hZz(a0)
if(q!=null){k=r.a
j=k.c
k=k.d
i=B.af("\\b(all|every|whole|entire)\\b.{0,30}\\b(slides?|presentation|deck|pages?)\\b|\\b(slides?|presentation|deck)\\b.{0,20}\\b(all|every|whole|entire)\\b",!0,!1,!1,!1)
h=a0.toLowerCase()
p=C.hZj(j,k-1,q,i.b.test(h))
if(!p){r.m(new C.eSV(r,q))
w=1
break}k=r.c
if(k!=null)B.a5(k,!1).N(r.a.c)
w=1
break}g=a0.toLowerCase()
k=B.af("\\b(undo|un-do|bring (it |them |the .{0,30}?)?back|brings? back|put (it |them |the .{0,30}?)?back|restore|revert|go back|change (it|that|them) back|back the way|what it was|the way it was|previous version|before (you|the ai) (changed|change))\\b",!0,!1,!1,!1)
if(k.b.test(g)){k=r.a.c
C.fS2()
f=$.Ca.h(0,k.a)
o=f==null||J.ck(f)?null:J.fn(f)
if(o==null){r.m(new C.eSW(r))
w=1
break}n=C.hZh(o,r.a.c)
C.hZd(r.a.c.a)
$.fRj=!0
k=r.c
if(k!=null)B.a5(k,!1).N(n)
w=1
break}k=r.a
j=k.c
i=j.CW
if(i==null)i=""
k=k.d
j=C.fUJ(j)
h=C.fUK(r.a.c)
e=C.fUL(r.a.c)
w=7
return B.b(C.bAf(k,r.a.c.a,j,h,new C.eSX(r),i,e,a0),$async$ad7)
case 7:m=a3
k=r.c
if(k!=null)B.a5(k,!1).N(m)
t=2
w=6
break
case 4:t=3
a1=s.pop()
l=B.a9(a1)
if(r.c!=null)r.m(new C.eSY(r,l))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$ad7,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=x.w,h=B.aI(d,A.eD,i).w
i=B.aI(d,A.bS,i).w
w=B.av(B.p(j,j,A.f,j,j,new B.o(A.b5,j,j,B.m(99),j,j,A.n),j,4,j,j,j,j,j,40),j,j,j)
v=x.p
u=B.A(B.a([B.p(j,D.al6,A.f,j,j,D.aXZ,j,34,j,j,j,j,j,34),A.aw,D.buV],v),A.m,j,A.e,A.j,0,j,j)
t=B.d("You're on slide "+k.a.d+". Ask for new slides, changes to any slide, a different style or another language.",j,j,j,j,j,j,X.aNX,j,j,j)
s=A.c.j(0.05)
s=B.aL(j,A.T,!0,j,!0,A.q,j,B.aM(),k.d,j,j,j,j,j,2,B.br(j,j,j,j,j,j,j,j,!0,new B.b4(4,B.m(16),new B.az(A.c.j(0.1),1,A.r,-1)),j,j,j,j,j,s,!0,j,j,j,j,new B.b4(4,B.m(16),Ar.a9j),j,j,j,j,j,j,j,j,X.In,"e.g. Add a slide after this one about how to sign up, and make the title slide more exciting.",j,j,j,j,j,j,j,j,j,!0,!0,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j),A.y,!0,j,!0,j,!1,j,A.ah,j,j,j,j,j,j,j,j,j,5,2,j,!1,"\u2022",j,j,j,j,j,!1,j,j,!1,j,!0,j,A.a9,j,j,j,j,j,j,j,j,j,j,j,D.aOf,!0,A.a5,j,A.am,j,j,j,j)
r=B.a([],v)
for(q=0;q<6;++q){p=D.cSC[q]
o=A.c.j(0.06)
n=k.e?j:new C.eSZ(k,p)
r.push(B.mA(j,o,new B.x(p,j,Ax.Sy,j,j,j,j,j,j,j,j,j),j,n,j,j,O.uz,j))}w=B.a([w,A.ay,u,A.ao,t,A.ay,s,A.S,B.c_(A.bD,r,A.bt,8,8)],v)
u=k.r
if(u!=null)A.d.v(w,B.a([A.ac,B.d(u,j,j,j,j,j,j,D.aNv,j,j,j)],v))
w.push(A.aO)
u=k.e
t=u?j:k.gc54()
s=B.m(18)
r=B.m(18)
u=u?B.a([A.bn.j(0.5),A.ff.j(0.5)],x.O):D.crd
o=B.a([new B.ac(0,A.G,A.bn.j(0.35),A.cx,16)],x.V)
n=A.c.j(0.22)
m=k.e
l=m?D.e2j:D.bIq
n=B.p(j,l,A.f,j,j,new B.o(n,j,j,j,j,j,A.a6),j,30,j,j,j,j,j,30)
w.push(B.aF(!1,A.a1,!0,j,B.aK(!1,s,!0,B.ex(B.A(B.a([n,A.aw,B.d(m?k.f:"Make the change",j,j,j,j,j,j,A.jh,j,j,j)],v),A.m,j,A.ba,A.j,0,j,j),j,new B.o(j,j,j,r,o,new B.a7(A.a3,A.a7,A.x,u,j,j),A.n),54,j,j),j,!0,j,j,j,j,j,j,j,j,j,j,j,t,j,j,j,j,j,j,j),A.f,A.K,0,j,j,j,j,j,A.af))
return new B.C(new B.Q(0,0,0,h.f.d),B.p(j,B.bn(!0,B.cd(B.v(w,A.aj,j,A.e,A.j,0,A.p),A.q,j,A.y,j,A.v6,j,j,A.ai),!0,!1,A.ag,!0,!1),A.f,j,new B.aY(0,680,0,i.a.b*0.85),D.a9O,j,j,j,j,j,j,j,j),j)}}
C.b_A.prototype={}
C.aCx.prototype={
T(){return new C.bim(null,null)}}
C.bim.prototype={
gavV(){var w,v=this,u=v.d
if(u===$){w=B.bj(null,A.ps,null,1,null,v)
w.cH(0)
v.d!==$&&B.bM()
v.d=w
u=w}return u},
q(){this.gavV().q()
this.bt8()},
B(d){var w=null,v=this.a.d
return B.aE(w,B.c6(this.gavV(),new C.e90(this),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,!1,A.a8)}}
C.bfV.prototype={
a6(d,e){var w,v,u,t,s,r,q,p,o,n,m
for(w=this.b*2,v=e.a,u=e.b,t=d.a,s=0;s<7;++s){r=0.5+0.5*Math.sin(w+s*1.7)
q=D.cY9[s]
p=q.a*v
q=q.b*u
$.X()
o=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
o.r=D.x0.j(0.25+r*0.6).gp(0)
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
C.aqo.prototype={
a4(){return"NgmyTextCommand."+this.b}}
C.YS.prototype={
T(){return new C.azZ()}}
C.azZ.prototype={
gaha(){var w,v="colorful",u=this.d
if(u===$){w=this.a.c.CW
w=C.ag_(w==null?"":w,v)
u=w==null?null:w.b
u=this.d=u==null?v:u}return u},
gzS(){var w=this.e
return w===$?this.e=C.fUJ(this.a.c).t(0,D.Cc):w},
a7i(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$a7i=B.e(function(a0,a1){if(a0===1){t.push(a1)
w=u}for(;;)switch(w){case 0:s.m(new C.dfM(s))
u=3
r=A.d.iA(D.vC,new C.dfN(s))
q=B.da(C.fUJ(s.a.c),x.Q)
l=q
J.hK(l,D.Cc)
p=l
if(s.gzS())J.cf(p,D.Cc)
q=s.a.c.CW
if(q==null)q=""
k=r.a
j=s.gzS()?" with Luxury FX":""
i=s.a
h=i.d
i=C.fUK(i.c)
g=C.fUL(s.a.c)
w=6
return B.b(C.bAf(h,s.a.c.a,p,i,null,q,g,'Change the look: use the style "'+k+'"'+j+". Keep every word, slide, bullet, picture and the logo exactly as they are."),$async$a7i)
case 6:o=a1
j=o.CW
q=j==null?"":j
q=C.ag_(q,s.gaha())
f=q==null?null:q.b
n=f==null?s.gaha():f
if(!J.y(n,r.a)&&!s.gzS())throw B.U("The AI did not change the look. Try again.")
q=s.c
if(q!=null)B.a5(q,!1).N(o)
u=1
w=5
break
case 3:u=2
d=t.pop()
m=B.a9(d)
if(s.c!=null)s.m(new C.dfO(s,m))
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$a7i,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=B.O(d).ax.a===A.H,l=m?A.c:A.M,k=m?A.aR:A.ak,j=m?A.M:A.c,i=B.m(28),h=B.I(m?A.bF:A.aL,A.r,1),g=x.p,f=B.D(B.v(B.a([B.d("Look and feel",n,n,n,n,n,n,B.l(n,n,l,n,n,n,n,n,n,n,n,20,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),A.bA,B.d("Your words, pictures and logo stay the same.",n,n,n,n,n,n,B.l(n,n,k,n,n,n,n,n,n,n,n,12.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],g),A.F,n,A.e,A.j,0,A.p),1),e=o.f?n:new C.dfR(d)
e=B.A(B.a([f,B.aH(n,n,n,n,B.W(A.cy,k,n,n,n,n),n,n,n,e,n,n,n,n,n,n)],g),A.m,n,A.e,A.j,0,n,n)
f=B.a([],g)
for(w=0;w<11;++w){v=D.vC[w]
u=o.gaha()
t=o.f?n:new C.dfS(o,v)
f.push(new C.bqI(v,u===v.a,t,n))}f=B.lT(1.25,f,3,10,10,n,A.dQ,!0)
u=B.m(18)
t=o.gzS()?D.bTQ:n
if(o.gzS())s=n
else s=m?A.bl:A.bN
r=B.W(A.dW,o.gzS()?A.c:k,n,n,n,n)
q=B.d("Luxury FX",n,n,n,n,n,n,B.l(n,n,o.gzS()?A.c:l,n,n,n,n,n,n,n,n,n,n,n,A.I,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
q=B.D(B.v(B.a([q,B.d("Moving light and ornaments, a new royal look each time",n,n,n,n,n,n,B.l(n,n,o.gzS()?A.ad:k,n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],g),A.F,n,A.e,A.j,0,A.p),1)
p=o.gzS()
f=B.a([f,A.ay,B.p(n,B.A(B.a([r,A.aw,q,B.aum(n,A.c,n,A.bJ,!1,A.y,n,n,n,n,n,n,o.f?n:new C.dfT(o),n,n,n,n,n,n,n,n,p)],g),A.m,n,A.e,A.j,0,n,n),A.f,n,n,new B.o(s,n,n,u,n,t,A.n),n,n,n,n,H.afX,n,n,n)],g)
u=o.r
if(u!=null)A.d.v(f,B.a([A.S,B.d(u,n,n,n,n,n,n,D.f_L,n,n,n)],g))
f=B.cd(B.v(f,A.F,n,A.e,A.j,0,A.p),A.q,n,A.y,n,A.EX,n,n,A.ai)
u=o.f?n:o.gbya()
t=B.bk(A.K,n,n,n,n,n,A.ag,n,new B.b7(B.m(16),A.Y),n,n,n)
s=B.m(16)
return B.bn(!0,B.p(n,B.v(B.a([new B.C(D.bqH,e,n),new B.dm(1,A.ci,f,n),new B.C(A.EW,new B.a6(1/0,50,B.bJ(B.ex(B.av(o.f?A.rn:D.fgd,n,n,n),n,new B.o(n,n,n,s,n,D.bSq,A.n),n,n,n),u,t),n),n)],g),A.m,n,A.e,A.Q,0,A.p),A.f,n,n,new B.o(j,n,h,i,n,n,A.n),n,n,n,A.tk,n,n,n,n),!0,!1,A.ag,!0,!0)}}
C.bqI.prototype={
B(d){var w=null,v=this.c,u=A.d.gL(v.d),t=B.m(16),s=u.a,r=B.a([B.b0(s),B.b0(u.b)],x.O),q=this.d,p=B.I(q?A.c:A.K,A.r,2.5)
s=q?B.a([new B.ac(0,A.G,B.b0(s).j(0.5),A.J,12)],x.V):w
v=B.a([new B.bI(A.kX,w,w,B.W(v.c,A.ad,w,w,w,18),w),new B.bI(A.lo,w,w,B.d(v.b,w,w,w,w,w,w,D.f_J,w,w,w),w)],x.p)
if(q)v.push(D.aTR)
return B.aE(w,B.dg(w,new B.an(A.W,w,A.aa,A.q,v,w),w,w,A.bb,new B.o(w,w,p,t,s,new B.a7(A.ax,A.aD,A.x,r,w,w),A.n),A.eE,w,w,w,A.cj,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,this.e,w,w,w,w,w,w,!1,A.a8)}}
C.e8Y.prototype={
aDp(d,e,f){return e+"@"+A.a.aT(A.o.fP(f==null?this.a.c:f,16),8,"0").toUpperCase()},
wd(d,e){return this.aDp(0,e,null)}}
C.aKw.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bv()}}
C.b_w.prototype={
B(d){var w,v,u=null,t=C.fTz(this.c)
if(t==null)w=D.biY
else{w=B.aI(d,u,x.w).w.cEx(D.bnc,D.eHR)
v=this.d
w=B.uf(B.e_(B.amL(!1,t,!1,v,!1,390),!v,u),w)}return B.f1(A.A,new B.a6(416,870,new C.bk_(w,u),u),A.f,A.dt)}}
C.bk_.prototype={
B(d){var w,v,u,t=null,s=B.a([],x.p)
for(w=0;w<3;++w){v=D.d8f[w]
u=new B.aV(3,3)
s.push(new B.cK(v.a,v.b,t,t,t,t,B.p(t,t,A.f,t,t,new B.o(t,t,t,new B.bp(u,u,u,u),t,D.an0,A.n),t,v.c,t,t,t,t,t,5),t))}for(w=0;w<2;++w){v=D.d9q[w]
u=new B.aV(3,3)
s.push(new B.cK(t,v.a,-3,t,t,t,B.p(t,t,A.f,t,t,new B.o(t,t,t,new B.bp(u,u,u,u),t,D.an0,A.n),t,v.b,t,t,t,t,t,5),t))}s.push(B.bY(0,B.bZ(t,new B.o(t,t,t,B.m(64),D.cIW,D.bQS,A.n),A.bd),0,0,0))
s.push(B.bY(3,B.bZ(t,new B.o(A.w,t,t,B.m(61),t,t,A.n),A.bd),3,3,3))
s.push(B.bY(13,B.bw(B.m(51),B.ei(this.c,A.w,!0),A.aq),13,13,13))
u=B.m(20)
s.push(B.ao(t,B.av(B.p(D.aU2,B.p(t,t,A.f,t,t,D.aYh,t,11,t,t,t,t,t,11),A.f,t,t,new B.o(A.w,t,t,u,t,t,A.n),t,36,t,t,t,t,t,122),t,t,t),t,t,0,0,25,t))
s.push(B.bY(13,B.e_(B.bw(B.m(51),D.bkh,A.aq),!0,t),13,13,13))
s.push(B.ao(22,B.e_(B.av(B.p(t,t,A.f,t,t,new B.o(A.ad,t,t,B.m(3),t,t,A.n),t,5,t,t,t,t,t,134),t,t,t),!0,t),t,t,0,0,t,t))
return new B.an(A.W,t,A.aa,A.f,s,t)}}
C.l6.prototype={
ph(){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=4280640491,j=4280172719,i=4294967295,h="Thank You",g=C.cC(),f=C.cC(),e=m.r
f=C.en(A.L,!1,e.l(),A.aC,"",k,42,A.bk,A.u,"",0.22,f,l,"","",0,!1,"",0,D.be,j,2,"Your Presentation Title",0,0,"",D.mq,D.cQ,0.84,0.08,0.26)
w=C.cC()
v=m.w
w=C.en(A.L,!1,v.l(),A.aC,"",k,20,A.bk,A.a4,"",0.12,w,l,"","",0,!1,"",0,D.be,j,2,"Class \xb7 Subject \xb7 Date",0,0,"",D.dd,D.cQ,0.76,0.12,0.56)
u=C.cC()
t=m.d
s=x.u
t=C.rf(i,l,0,0,B.a([f,w,C.en(A.bg,!1,4279310375,A.aC,"",t.j(0.8).l(),24,A.bk,A.a4,"",0.006,u,l,"","",0,!1,"",0,D.fp,t.l(),3,"",0,0,"",D.cg,D.f_,0.3,0.35,0.72)],s),C.cC(),D.mp,"","","Welcome",D.dd)
u=C.cC()
u=C.en(A.bg,!1,e.l(),A.aC,"",k,34,A.bk,A.u,"",0.14,u,l,"","",0,!1,"",0,D.be,j,2,"Agenda",0,0,"",D.cg,D.cQ,0.84,0.08,0.08)
w=C.cC()
w=C.rf(i,l,0,0,B.a([u,C.en(A.bg,!0,v.l(),A.aC,"",k,22,A.bk,A.a4,"",0.6,w,l,"","",0,!1,"",0,D.be,j,2,"1. Introduction\n2. Core concepts\n3. Case study\n4. Discussion\n5. Summary & Q&A",0,0,"",D.u0,D.cQ,0.8,0.1,0.26)],s),C.cC(),D.mp,"","","Agenda",D.dd)
u=C.cC()
u=C.en(A.bg,!1,e.l(),A.aC,"",k,32,A.bk,A.u,"",0.14,u,l,"","",0,!1,"",0,D.be,j,2,"Main Idea",0,0,"",D.cg,D.cQ,0.84,0.08,0.08)
f=C.cC()
f=C.rf(i,l,0,0,B.a([u,C.en(A.bg,!0,v.l(),A.aC,"",k,21,A.bk,A.a4,"",0.62,f,l,"","",0,!1,"",0,D.be,j,2,"\u2022 Supporting detail\n\u2022 Evidence or example\n\u2022 Why it matters",0,0,"",D.cg,D.cQ,0.8,0.1,0.26)],s),C.cC(),D.mp,"","","Key Point 1",D.dd)
u=C.cC()
u=C.en(A.bg,!1,e.l(),A.aC,"",k,30,A.bk,A.u,"",0.12,u,l,"","",0,!1,"",0,D.be,j,2,"Compare & Contrast",0,0,"",D.cg,D.cQ,0.84,0.08,0.08)
r=C.cC()
r=C.en(A.bg,!0,v.l(),A.aC,"",k,18,A.bk,A.a4,"",0.62,r,l,"","",0,!1,"",0,D.be,j,2,"Option A\n\n\u2022 Strength\n\u2022 Example",0,0,"",D.cg,D.cQ,0.4,0.08,0.24)
q=C.cC()
q=C.rf(i,l,0,0,B.a([u,r,C.en(A.bg,!0,v.l(),A.aC,"",k,18,A.bk,A.a4,"",0.62,q,l,"","",0,!1,"",0,D.be,j,2,"Option B\n\n\u2022 Strength\n\u2022 Example",0,0,"",D.cg,D.cQ,0.4,0.52,0.24)],s),C.cC(),D.mp,"","","Key Point 2",D.dd)
r=C.cC()
r=C.en(A.L,!1,e.l(),A.aC,"",k,48,A.bk,A.u,"",0.2,r,l,"","",0,!1,"",0,D.be,j,2,h,0,0,"",D.dd,D.cQ,0.8,0.1,0.32)
e=C.cC()
p=C.B9(l,l,l,l,D.C8,5,!1,l,l,l,l,l,g,l,!1,l,m.b,l,l,B.a([t,w,f,q,C.rf(i,l,0,0,B.a([r,C.en(A.L,!1,v.l(),A.aC,"",k,22,A.bk,A.a4,"",0.1,e,l,"","",0,!1,"",0,D.be,j,2,"Questions?",0,0,"",D.cg,D.cQ,0.7,0.15,0.58)],s),C.cC(),D.mp,"","",h,D.dd)],x.g),"class_"+m.a,l,!1,l)
for(g=p.r,f=g.length,e=m.e,w=m.f,o=0;o<g.length;g.length===f||(0,B.L)(g),++o){n=g[o]
n.e=e.l()
n.f=w.l()}return p}}
C.Ea.prototype={
bx(d){return this.e.$1(d)}}
C.er.prototype={}
C.iV.prototype={}
C.E1.prototype={
gaJ7(){var w=this.c
if(!(A.a.i(w).length!==0)){w=C.afN(this.a)
w=w==null?null:w.c
if(w==null)w=""}return w},
a2z(d,e,f,g){var w=this,v=e==null?w.a:e,u=g==null?w.b:g,t=f==null?w.c:f
return new C.E1(v,u,t,d==null?w.d:d)},
F8(d){return this.a2z(null,d,null,null)},
aC7(d){return this.a2z(null,null,null,d)},
cEv(d,e){return this.a2z(d,e,null,null)},
b9h(d){return this.a2z(d,null,null,null)},
b9o(d){return this.a2z(null,null,d,null)}}
C.ML.prototype={
T(){return new C.bhJ(new B.eL(0,$.aw()),null,null)}}
C.bhJ.prototype={
a_(){var w,v=this
v.a1()
w=v.qe(new C.dQM(v))
v.e!==$&&B.aO()
v.e=w
if(v.a.e)w.iZ(0)
else v.d.sp(0,3.2)},
q(){var w=this.e
w===$&&B.c()
w.q()
w=this.d
w.S$=$.aw()
w.P$=0
this.bsB()},
B(d){var w=C.afN(this.a.c.a)
if(w==null)w=A.d.gL(D.Gj)
return B.cm(new C.dQL(this,w,C.h8t(this.a.c.d)))}}
C.bpi.prototype={
B(d){return B.nG(A.Up,this.e,new C.eS6(this,A.k.G(this.d*0.35,1.6)-0.3))}}
C.bcP.prototype={
a6(d,e){var w=this,v=w.c.a
switch(w.b){case"fireworks":w.aQQ(d,e,v)
break
case"confetti":w.bEC(d,e,v)
break
case"crown":w.bGe(d,e,v)
break
case"aurora":w.bzf(d,e,v)
break
case"champagne":w.bCt(d,e,v)
break
case"diamonds":w.bIn(d,e,v)
break
case"starburst":w.crW(d,e,v)
break
case"balloons":w.bzt(d,e,v)
break
case"galaxy":w.bN6(d,e,v)
break
case"redcarpet":w.cj6(d,e,v)
break
case"coins":w.bDZ(d,e,v)
break
case"lanterns":w.bX7(d,e,v)
break
case"hearts":w.bUN(d,e,v)
break
case"petals":w.cem(d,e,v)
break
case"butterflies":w.bBv(d,e,v)
break
case"neon":w.c_V(d,e,v)
break
case"disco":w.bIy(d,e,v)
break
case"sunrise":w.ctu(d,e,v)
break
case"pearls":w.cdq(d,e,v)
break
case"snow":w.crB(d,e,v)
break
case"laurel":w.bXd(d,e,v)
break
case"ribbons":w.clB(d,e,v)
break
case"kente":w.bWW(d,e,v)
break
case"trophy":w.cx6(d,e,v)
break
case"shooting":w.cpu(d,e,v)
break
case"bokeh":w.bzN(d,e,v)
break
case"orbits":w.cb6(d,e,v)
break
case"flowers":w.bMo(d,e,v)
break
case"music":w.c_F(d,e,v)
break
case"mandala":w.bZ6(d,e,v)
break
case"sparklers":w.crK(d,e,v)
break
case"city":w.bDi(d,e,v)
break}},
rf(d,e,f,g,h){var w,v,u,t,s
if(h<=0.01)return
w=$.X()
v=B.M()
v.r=g.j(A.k.D(h,0,1)).gp(0)
v.a=A.nm
u=new B.aQ(w.r,A.ap,null,null,B.a([],x.v))
w=e.a
t=e.b
s=t-f
u.E(new B.b5(w,s))
u.E(new B.cS(w,t,w+f,t))
u.E(new B.cS(w,t,w,t+f))
u.E(new B.cS(w,t,w-f,t))
u.E(new B.cS(w,t,w,s))
u.E(new B.bE())
d.aO(u,v)
d.ai(e,f*0.18,v)},
lB(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o=e.a,n=e.b,m=Math.min(o,n)
for(w=Math.max(4,A.k.V(g*this.d)),v=i+3,u=i+4,t=i+1,s=i+2,r=i+5,q=0;q<w;++q){p=(Math.sin(f*(1.2+C.cT(q,v)*2.5)+C.cT(q,u)*6.28)+1)/2
this.rf(d,new B.u(C.cT(q,t)*o,C.cT(q,s)*n),m*(0.006+0.014*C.cT(q,r))*(0.5+p),h,p*p)}},
aQQ(c3,c4,c5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0=c4.a,c1=c4.b,c2=Math.min(c0,c1)
this.lB(c3,c4,c5,40,A.c,10)
w=x.O
v=[B.a([A.bJ,A.aI],w),B.a([A.il,A.bz],w),B.a([A.er,A.aW],w),B.a([A.c,A.av],w)]
for(u=c2*0.005,t=c3.a,s=c2*0.012,r=c5*30,q=46*this.d,p=c2*0.08,o=c2*0.04,n=c2*0.006,m=c2*0.008,l=0;l<7;++l){k=c5+l*2.8/7
j=A.k.bw(k/2.8)
i=A.k.G(k,2.8)/2.8
h=l*97+j*13
g=c0*(0.15+0.7*C.cT(h,1))
f=g+c0*(C.cT(h,2)-0.5)*0.15
e=c1*(0.12+0.35*C.cT(h,3))
d=v[Math.abs(A.o.G(h,4))]
if(i<0.22){a0=B.lc(new B.u(g,c1),new B.u(f,e),A.cq.av(0,i/0.22))
a0.toString
$.X()
a1=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
a1.sau(new B.a7(A.a3,A.a7,A.x,B.a([d[0].j(0),d[0]],w),null,null).aw(0,B.rh(new B.u(g,c1),a0)))
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
a6=A.cq.av(0,a5)
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
b9.a=A.nm
a3=b9.H()
t.drawLine.apply(t,[f+b6*b3*0.82,e+b7*b3*0.82+b0,b4,b5,a3])
a3.delete()
if(a4&&C.cT(h,b1+120)>0.5)this.rf(c3,new B.u(b4,b5),s,A.c,a7*(0.5+0.5*Math.sin(r+b1)))}}}},
bEC(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=a2.a,i=a2.b,h=Math.min(j,i),g=A.k.G(a3*0.25,1.6)-0.3,f=0+j,e=0+i,d=$.X(),a0=B.M()
a0.sau(new B.a7(A.ax,A.aD,A.x,D.d3h,B.a([A.k.D(g-0.15,0,1),A.k.D(g,0,1),A.k.D(g+0.15,0,1)],x.x),null).aw(0,new B.aa(0,0,f,e)))
a1.aY(new B.aa(0,0,f,e),a0)
a0=Math.max(4,A.k.V(150*this.d))
for(f=a1.a,w=i+h*0.1,i=h*0.05,e=a3*4,v=x.v,u=0;u<a0;++u){t=A.k.G(a3*(h*(0.08+0.12*C.cT(u,1)))+C.cT(u,2)*w,w)
s=C.cT(u,3)
r=Math.sin(a3*(0.8+C.cT(u,4))+u)
q=h*(0.012+0.012*C.cT(u,5))
p=Math.cos(a3*(2+3*C.cT(u,6))+u)
o=D.ON[A.o.D(A.k.bw(C.cT(u,7)*5),0,4)]
J.bA(f.save())
f.translate(s*j+r*h*0.04,t-i)
f.rotate((a3*(0.6+C.cT(u,8)*2)+u)*180/3.141592653589793,0,0)
n=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
t=Math.abs(p)
n.r=B.aq(o,A.c,t*0.4).j(0.95).gp(0)
if(A.o.G(u,5)===0){t=B.a([],v)
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
k.delete()}else{t=B.cu(A.J,q*1.8*A.k.D(t,0.15,1),q)
k=n.H()
f.drawRect(B.c4(t),k)
k.delete()}f.restore()}this.lB(a1,a2,a3,25,A.bJ,30)},
bGe(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=a9.a,a6=a9.b,a7=Math.min(a5,a6)
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
n.push(new B.bE())
o=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
o.sau(new B.bR(A.A,0.5,A.x,a4,0,B.a([A.bJ.j(0.22),D.b8g],v),a4,a4).aw(0,B.bU(w,u)))
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
i.E(new B.bE())
h=A.k.D(b0/1.8,0,1)
s=h>=1
if(s){n=B.M()
n.sau(new B.a7(A.b0,A.b6,A.x,D.d2b,a4,a4).aw(0,new B.aa(a5,a6,o,v)))
a8.aO(i,n)
for(v=[D.egt,D.eaG,D.epo],o=a6+j*0.78,n=a7*0.016,g=a7*0.005,f=o-g,e=0;e<3;++e){d=v[e]
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
l.delete()}}for(v=B.wL(i),u=B.a([],x.X),o=new B.vh(v,!1,u),n=v.a,g=a7*0.008;o.C();){f=o.c
if(f===0||o.f)B.ba(B.jQ(y.M));--f
o.ji()
d=u[f].b
d===$&&B.c()
d=d.a.length()
d=new B.aQ(n,v.b,a4,new B.cL([new B.GR(o,f),0,d*h,!0]),B.a([],r))
f=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
f.b=A.ae
f.c=g
f.e=A.fz
f.r=A.bJ.gp(0)
l=f.H()
f=d.gbI().a.snapshot()
t.drawPath((d.e=new B.cF(f)).a,l)
l.delete()}if(s){a3=A.k.G(b0*0.5,1)
this.rf(a8,new B.u(a5+k*a3,a6+j*0.5),a7*0.04,A.c,Math.sin(a3*3.141592653589793))}this.lB(a8,a9,b0,45,A.bJ,40)},
bzf(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=a9.a,a6=a9.b,a7=Math.min(a5,a6)
this.lB(a8,a9,b0,60,A.c,50)
w=[D.ezu,D.ezc,D.ez7,D.eAp]
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
n.a=A.nm
n.z=new B.ht(A.G,s)
a2=n.H()
n=h.e
u.drawPath((n==null?h.e=new B.cF(h.gbI().a.snapshot()):n).a,a2)
a2.delete()
n=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
n.b=A.ae
n.c=v
n.r=m.j(0.55).gp(0)
n.a=A.nm
n.z=new B.ht(A.G,v)
a2=n.H()
n=h.e
u.drawPath((n==null?h.e=new B.cF(h.gbI().a.snapshot()):n).a,a2)
a2.delete()}for(v=Math.max(4,A.k.V(40*this.d)),a3=a6+20,t=b0*a7,a4=0;a4<v;++a4){s=A.k.G(t*(0.05+0.06*C.cT(a4,1))+C.cT(a4,2)*a3,a3)
r=C.cT(a4,3)
q=Math.sin(b0+a4)
p=C.cT(a4,4)
$.X()
n=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
n.r=A.x_.j(0.4+0.5*C.cT(a4,5)).gp(0)
n.a=A.nm
a2=n.H()
u.drawCircle(r*a5+q*a7*0.02,a6-s,a7*(0.003+0.004*p),a2)
a2.delete()}},
bCt(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=a2.a,j=a2.b,i=Math.min(k,j),h=Math.sin(a3*1.5),g=k/2,f=j*0.5,e=i*0.55,d=$.X(),a0=B.M()
a0.sau(new B.bR(A.A,0.5,A.x,l,0,B.a([A.hD.j(0.25+0.1*h),D.Wb],x.O),l,l).aw(0,B.bU(new B.u(g,f),e)))
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
a0.r=D.ON[A.o.G(w,4)].j(0.7).gp(0)
p=a0.H()
a0=u.e
g.drawPath((a0==null?u.e=new B.cF(u.gbI().a.snapshot()):a0).a,p)
p.delete()}for(h=Math.max(4,A.k.V(110*this.d)),f=j*0.08,o=j*1.1,e=a3*2,w=0;w<h;++w){n=j-A.k.G(a3*(i*(0.07+0.12*C.cT(w,1)))+C.cT(w,2)*o,o)
r=k*(0.1+0.8*C.cT(w,3))+Math.sin(e+w)*i*0.015
m=i*(0.004+0.012*C.cT(w,4))
if(n<f){this.rf(a1,new B.u(r,n),m*2.4,A.bJ,A.k.D(n/f,0,1))
continue}$.X()
d=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
d.b=A.ae
a0=m*0.25
d.c=Math.max(0.8,a0)
d.r=A.A7.j(0.75).gp(0)
p=d.H()
g.drawCircle(r,n,m,p)
p.delete()
d=m*0.35
t=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
t.r=A.c.j(0.8).gp(0)
p=t.H()
g.drawCircle(r-d,n-d,a0,p)
p.delete()}},
bIn(a9,b0,b1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=null,a6=b0.a,a7=b0.b,a8=Math.min(a6,a7)
this.lB(a9,b0,b1,30,A.kZ,60)
for(w=Math.max(4,A.k.V(42*this.d)),v=a9.a,u=b1*2.2,t=b1*a8,s=b1*0.7,r=b1*0.8,q=x.v,p=0;p<w;++p){o=a8*(0.025+0.035*C.cT(p,1))
n=a7+o*4
m=A.k.G(t*(0.04+0.06*C.cT(p,2))+C.cT(p,3)*n,n)-o*2
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
g.push(new B.bE())
g=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
g.sau(new B.a7(A.ax,A.aD,A.x,D.cZ8,a5,a5).aw(0,B.cu(A.J,k*1.2,o)))
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
if(a4>0.85)this.rf(a9,new B.u(l+o*0.2,m-o*0.3),o*0.9,A.c,(a4-0.85)/0.15)}},
crW(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=e.a,g=e.b,f=Math.min(h,g)
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
o.push(new B.bE())
p=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
p.r=A.bJ.j(r?0.12:0.07).gp(0)
m=p.H()
r=n.gbI().a.snapshot()
w.drawPath((n.e=new B.cF(r)).a,m)
m.delete()}for(v=f*0.008,l=0;l<3;++l){k=A.k.G(a0+l*0.6,1.8)/1.8
$.X()
u=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
u.b=A.ae
r=1-k
u.c=v*r
u.r=A.bJ.j(r*0.6).gp(0)
m=u.H()
w.drawCircle(h,g,f*(0.15+0.6*k),m)
m.delete()}j=A.k.bw(a0/2.4)
k=A.k.G(a0,2.4)/2.4
for(w=Math.max(4,A.k.V(70*this.d)),v=j+1,u=(1-k)*1.2,t=0;t<w;++t){s=C.cT(t,j)*3.141592653589793*2
i=f*(0.1+0.55*D.bjE.av(0,k)*(0.5+0.5*C.cT(t,v)))
this.rf(d,new B.u(h+Math.cos(s)*i,g+Math.sin(s)*i),f*(0.01+0.012*C.cT(t,3)),D.ON[A.o.D(A.k.bw(C.cT(t,4)*5),0,4)],u)}},
bzt(a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=a8.a,a5=a8.b,a6=Math.min(a4,a5)
for(w=this.d,v=Math.max(4,A.k.V(22*w)),u=a7.a,t=x.O,s=x.v,r=a9*2,q=a9*a6,p=a9*0.9,o=0;o<v;++o){n=a6*(0.045+0.035*C.cT(o,1))
m=a5+n*6
l=n*2
k=a5+l-A.k.G(q*(0.05+0.05*C.cT(o,2))+C.cT(o,3)*m,m)
j=C.cT(o,4)*a4+Math.sin(p+o*1.3)*a6*0.03
i=D.au9[A.o.G(o,6)]
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
a2=B.cu(new B.u(j,k),n*2.3,l)
l=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
d=B.aq(i,A.w,0.35)
d.toString
l.sau(new B.bR(D.aU5,0.9,A.x,a3,0,B.a([A.c,i,d],t),V.au0,a3).aw(0,a2))
a1=l.H()
u.drawOval(B.c4(a2),a1)
a1.delete()
l=B.a([],s)
g=new B.aQ(g.r,A.ap,a3,a3,l)
d=n*0.12
l.push(new B.b5(j-d,h))
l.push(new B.ap(j+d,h))
l.push(new B.ap(j,k+n))
l.push(new B.bE())
l=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
l.r=B.aq(i,A.w,0.3).gp(0)
a1=l.H()
l=g.gbI().a.snapshot()
u.drawPath((g.e=new B.cF(l)).a,a1)
a1.delete()}for(w=Math.max(4,A.k.V(60*w)),m=a5+20,a5=a9*3,v=a6*0.012,t=a6*0.02,o=0;o<w;++o){s=A.k.G(q*(0.1+0.1*C.cT(o,11))+C.cT(o,12)*m,m)
r=C.cT(o,13)
J.bA(u.save())
u.translate(r*a4,s-10)
u.rotate((a5+o)*180/3.141592653589793,0,0)
s=B.cu(A.J,t,v)
$.X()
r=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
r.r=D.au9[A.o.G(o,6)].j(0.85).gp(0)
a1=r.H()
u.drawRect(B.c4(s),a1)
a1.delete()
u.restore()}},
bN6(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=b2.a,a6=b2.b,a7=Math.min(a5,a6),a8=a5/2,a9=a6/2,b0=new B.u(a8,a9)
this.lB(b1,b2,b3,50,A.c,70)
for(w=[D.ezC,D.ezi,D.ezo],v=b3*0.3,u=x.O,t=b1.a,s=0;s<3;++s){r=w[s].a
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
for(v=a7*0.6,r=b3*0.18,i=0;i<w;++i){h=A.o.G(i,3)
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
a0.a=A.nm
j=a0.H()
t.drawCircle(a8+m*f,a9+l*f*0.62,a7*(0.0025+0.004*d),j)
j.delete()}a8=a7*0.12
$.X()
a9=B.M()
a9.sau(new B.bR(A.A,0.5,A.x,a4,0,B.a([A.A7.j(0.55),D.adE],u),a4,a4).aw(0,B.bU(b0,a8)))
b1.ai(b0,a8,a9)
a1=A.k.G(b3,3.5)/3.5
if(a1<0.25){a2=A.k.bw(b3/3.5)
a3=new B.u(a5*(0.1+0.5*C.cT(a2,9)),a6*0.1*C.cT(a2,8))
a5=B.lc(a3,a3.ad(0,new B.u(v,a7*0.3)),a1/0.25)
a5.toString
a6=B.lc(a3,a5,0.6)
a6.toString
a8=B.M()
a8.sau(new B.a7(A.a3,A.a7,A.x,B.a([A.c.j(0),A.c],u),a4,a4).aw(0,B.rh(a3,a5)))
a8.c=a7*0.005
a8.d=A.bO
b1.bA(a6,a5,a8)}},
cj6(b9,c0,c1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=null,b6=c0.a,b7=c0.b,b8=Math.min(b6,b7)
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
n.push(new B.bE())
o=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
o.sau(new B.bR(A.A,0.5,A.x,b5,0,B.a([A.A7.j(0.28),D.adE],w),b5,b5).aw(0,B.bU(new B.u(q,u),t)))
o.a=A.nm
l=o.H()
q=m.gbI().a.snapshot()
v.drawPath((m.e=new B.cF(q)).a,l)
l.delete()}for(u=[!0,!1],q=b7*0.52,o=b8*0.012,n=b7*0.5,k=b7*0.55,j=0+b7,i=b6*0.16,h=i*0.55,g=i*0.9,f=i*0.62,e=i*0.95,d=b6-e,a0=b6-f,a1=b6-g,a2=b6-h,a3=b6-i,a4=0;a4<2;++a4){a5=u[a4]
a6=a5?0:a3
a7=B.a([],w)
for(a8=0;a8<7;++a8)a7.push((a8&1)===0?A.ew:A.eM)
a9=$.X()
b0=B.a([],s)
m=new B.aQ(a9.r,A.ap,b5,b5,b0)
b0.push(new B.b5(a5?0:b6,0))
b0.push(new B.ap(a5?i:a3,0))
a9=a5?h:a2
b0.push(new B.cS(a9,k,a5?g:a1,b7))
b0.push(new B.ap(a5?0:b6,b7))
b0.push(new B.bE())
a9=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
a9.sau(new B.a7(A.a3,A.a7,A.x,a7,b5,b5).aw(0,new B.aa(a6,0,a6+i,j)))
l=a9.H()
a9=m.gbI().a.snapshot()
v.drawPath((m.e=new B.cF(a9)).a,l)
l.delete()
a9=a5?f:a0
b0=a5?e:d
b1=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
b1.r=A.hD.gp(0)
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
b2.E(new B.bE())
v=B.M()
v.sau(D.bSk.aw(0,new B.aa(0,w,0+b6,w+b7*0.22)))
b9.aO(b2,v)
for(w=Math.max(4,A.k.V(80*this.d)),b3=b7+10,b7=c1*b8,v=c1*5,r=0;r<w;++r){b4=A.k.G(b7*(0.05+0.07*C.cT(r,1))+C.cT(r,2)*b3,b3)
u=C.cT(r,3)
s=Math.sin(c1+r)
q=Math.sin(v+r)
this.rf(b9,new B.u(b6*(0.15+0.7*u)+s*b8*0.01,b4),b8*(0.006+0.008*C.cT(r,4)),A.bJ,0.3+0.7*((q+1)/2))}},
bDZ(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=e.a,h=e.b,g=Math.min(i,h)
for(w=Math.max(4,A.k.V(55*this.d)),v=d.a,u=f*g,t=0;t<w;++t){s=g*(0.02+0.02*C.cT(t,1))
r=h+s*4
q=s*2
p=A.k.G(u*(0.12+0.12*C.cT(t,2))+C.cT(t,3)*r,r)-q
o=C.cT(t,4)*i
n=Math.cos(f*(2+3*C.cT(t,5))+t)
m=Math.abs(n)
l=B.cu(new B.u(o,p),q,q*A.k.D(m,0.12,1))
$.X()
q=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
q.sau(new B.a7(A.ax,A.aD,A.x,n>0?D.dcy:D.cwQ,null,null).aw(0,l))
k=q.H()
v.drawOval(B.c4(l),k)
k.delete()
q=-(s*0.22)
j=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
j.b=A.ae
j.c=Math.max(0.6,s*0.08)
j.r=D.bgW.gp(0)
k=j.H()
v.drawOval(B.c4(new B.aa(l.a-q,l.b-q,l.c+q,l.d+q)),k)
k.delete()
if(m>0.97)this.rf(d,new B.u(o+s*0.3,p-s*0.4),s*0.9,A.c,0.9)}this.lB(d,e,f,30,A.bJ,110)},
bX7(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
this.lB(a3,a4,a5,50,A.c,120)
for(w=Math.max(4,A.k.V(26*this.d)),v=a3.a,u=x.O,t=a5*a2,s=a5*0.6,r=a5*9,q=x.v,p=0;p<w;++p){o=a2*(0.035+0.035*C.cT(p,1))
n=a1+o*4
m=a1+o*2-A.k.G(t*(0.03+0.04*C.cT(p,2))+C.cT(p,3)*n,n)
l=C.cT(p,4)*a0+Math.sin(s+p)*a2*0.03
k=0.8+0.2*Math.sin(r+p*3)
j=o*2.2
i=$.X()
h=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
h.sau(new B.bR(A.A,0.5,A.x,d,0,B.a([W.Wn.j(0.45*k),D.acz],u),d,d).aw(0,B.bU(new B.u(l,m),j)))
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
j.push(new B.bE())
j=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
i=B.aq(D.b8r,A.c,0.2*k)
i.toString
j.sau(new B.a7(A.b0,A.b6,A.x,B.a([D.bcI,i],u),d,d).aw(0,B.cu(new B.u(l,m),o*1.4,o)))
g=j.H()
j=f.gbI().a.snapshot()
v.drawPath((f.e=new B.cF(j)).a,g)
g.delete()
j=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
j.r=A.c.j(k).gp(0)
g=j.H()
v.drawCircle(l,m+o*0.55,o*0.12,g)
g.delete()}},
bUN(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
for(w=Math.max(4,A.k.V(40*this.d)),v=a3.a,u=x.O,t=x.v,s=a5*a2,r=a5*1.3,q=a5*6,p=0;p<w;++p){o=a2*(0.02+0.03*C.cT(p,1))
n=a1+o*4
m=A.k.G(s*(0.05+0.06*C.cT(p,2))+C.cT(p,3)*n,n)
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
l.push(new B.pq(k*1.8,h,k*0.9,g,0,k*0.55))
l.push(new B.pq(m,g,o*1.8,h,0,m))
l.push(new B.bE())
f=D.cQC[A.o.G(p,5)]
m=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
l=B.aq(f,A.w,0.25)
l.toString
m.sau(new B.bR(A.rz,0.5,A.x,d,0,B.a([A.c,f,l],u),H.a19,d).aw(0,B.bU(A.J,o*1.4)))
e=m.H()
m=i.gbI().a.snapshot()
v.drawPath((i.e=new B.cF(m)).a,e)
e.delete()
v.restore()}this.lB(a3,a4,a5,30,A.il,130)},
cem(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=e.a,g=e.b,f=Math.min(h,g)
for(w=Math.max(4,A.k.V(70*this.d)),v=d.a,u=x.v,t=a0*f,s=a0*0.9,r=a0*2,q=0;q<w;++q){p=f*(0.015+0.02*C.cT(q,1))
o=g+p*4
n=A.k.G(t*(0.05+0.06*C.cT(q,2))+C.cT(q,3)*o,o)
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
m.push(new B.bE())
n=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
m=(q&1)===0?D.crc:D.d_m
n.sau(new B.a7(A.a3,A.a7,A.x,m,i,i).aw(0,B.bU(A.J,p)))
j=n.H()
n=k.gbI().a.snapshot()
v.drawPath((k.e=new B.cF(n)).a,j)
j.delete()
v.restore()}this.lB(d,e,a0,25,A.bJ,140)},
bBv(b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=null,a7=b1.a,a8=b1.b,a9=Math.min(a7,a8)
this.lB(b0,b1,b2,40,A.bJ,150)
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
a3.push(new B.pq(f,e,l,d,h,0))
a3.push(new B.pq(q,h,g,q,0,h))
a3.push(new B.bE())
a2=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
a2.sau(new B.a7(A.a3,A.a7,A.x,i?D.d_6:D.d1F,a6,a6).aw(0,new B.aa(0,m,k,j)))
a5=a2.H()
a2=a4.gbI().a.snapshot()
v.drawPath((a4.e=new B.cF(a2)).a,a5)
a5.delete()
a2=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
a2.b=A.ae
a2.c=Math.max(0.6,o)
a2.r=D.Af.gp(0)
a5=a2.H()
a2=a4.e
v.drawPath((a2==null?a4.e=new B.cF(a4.gbI().a.snapshot()):a2).a,a5)
a5.delete()
v.restore()}$.X()
p=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
p.r=D.bgf.gp(0)
p.c=q*0.1
p.d=A.bO
a5=p.H()
v.drawLine.apply(v,[0,m*0.3,0,q*0.4,a5])
a5.delete()
v.restore()}},
c_V(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=a0.a,g=a0.b,f=Math.min(h,g),e=new B.u(h/2,g/2)
for(w=a1*0.45,v=f*0.012,u=d.a,t=0;t<4;++t){s=A.k.G(w+t/4,1)
r=f*(0.2+0.7*s)
$.X()
q=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
q.b=A.ae
q.c=v
q.r=D.avb[t].j((1-s)*0.9).gp(0)
q.z=new B.ht(A.G,v)
p=r*0.3
p=B.bz(B.cu(e,r,r*1.6),new B.aV(p,p))
o=q.H()
u.drawRRect(B.ep(p),o)
o.delete()}n=h/28
for(h=n*0.15,w=n*0.7,v=n*0.3,p=f*0.01,m=0;m<28;++m){l=g*(0.05+0.18*(0.5+0.5*Math.sin(a1*(3+C.cT(m,1)*4)+m)))
k=D.avb[A.o.G(m,4)]
j=m*n+h
i=g-l
i=B.bz(new B.aa(j,i,j+w,i+l),new B.aV(v,v))
$.X()
j=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
j.r=k.j(0.85).gp(0)
j.z=new B.ht(A.a97,p)
o=j.H()
u.drawRRect(B.ep(i),o)
o.delete()}},
bIy(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
a0/=2
w=a2*0.12
v=new B.u(a0,w)
u=a2*0.09
for(t=Math.max(4,A.k.V(60*this.d)),s=a5*0.6,a1*=0.55,r=a2*0.004,q=a3.a,p=0;p<t;++p){o=C.cT(p,1)*3.141592653589793*2+s
n=a2*(0.2+0.8*C.cT(p,2))
m=Math.cos(o)
l=Math.sin(o)
k=[A.c,A.bJ,A.oc,A.dy][A.o.G(p,4)]
j=C.cT(p,3)
$.X()
i=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
i.r=k.j(0.75).gp(0)
i.a=A.nm
i.z=new B.ht(A.G,r)
h=i.H()
q.drawCircle(a0+m*n*1.4,a1+l*n*0.5,a2*(0.008+0.01*j),h)
h.delete()}a1=$.X()
t=B.M()
t.r=A.az.gp(0)
t.c=1.2
a3.bA(new B.u(a0,0),new B.u(a0,w-u),t)
t=B.M()
t.r=A.dL.gp(0)
a3.ai(v,u,t)
J.bA(q.save())
a1=new B.aQ(a1.r,A.ap,null,null,B.a([],x.v))
a1.E(new B.kG(B.bU(v,u)))
a3.tR(0,a1)
g=u/4
for(a1=a5*g*2,t=g*0.9,s=a5*4,f=-4;f<4;++f)for(r=w+f*g,m=r+t,l=f*2.3,e=-6;e<6;++e){j=a0+e*g+A.k.G(a1,g)
i=Math.sin(e*1.7+l+s)
$.X()
d=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
d.r=B.aq(A.bo,A.c,0.4+0.6*((i+1)/2)).gp(0)
h=d.H()
q.drawRect(B.c4(new B.aa(j,r,j+t,m)),h)
h.delete()}q.restore()
a0=-u*0.4
this.rf(a3,v.ad(0,new B.u(a0,a0)),u*0.6,A.c,0.6+0.4*Math.sin(a5*5))},
ctu(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=a3.a,f=a3.b,e=Math.min(g,f),d=g/2,a0=f*(1.05-0.25*A.cq.av(0,A.k.D(a4/3,0,1))),a1=new B.u(d,a0)
for(w=a2.a,v=a4*0.3,u=x.v,t=0;t<20;++t){s=3.141592653589793+t/19*3.141592653589793+Math.sin(v)*0.03
r=$.X()
q=B.a([],u)
p=new B.aQ(r.r,A.ap,h,h,q)
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
w.drawPath((p.e=new B.cF(r)).a,o)
o.delete()}d=e*0.5
$.X()
a0=B.M()
a0.sau(new B.bR(A.A,0.5,A.x,h,0,B.a([D.b4B.j(0.6),D.acz],x.O),h,h).aw(0,B.bU(a1,d)))
a2.ai(a1,d,a0)
a0=e*0.2
d=B.M()
d.sau(D.e8s.aw(0,B.bU(a1,a0)))
a2.ai(a1,a0,d)
for(d=a4*e*0.03,a0=g*1.4,v=g*0.2,u=e*0.35,r=e*0.07,q=e*0.06,n=e*0.03,m=e*0.18,t=0;t<5;++t){l=A.k.G(d*(1+t*0.3)+C.cT(t,1)*g*1.4,a0)-v
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
o.delete()}this.lB(a2,a3,a4,20,A.hT,180)},
cdq(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a2.a,d=a2.b,a0=Math.min(e,d)
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
r=new B.bE()
q.push(r)
q=p.f
if(q!=null)r.bx(q)
r=p.e
if(r!=null)r.a.delete()
p.e=null
$.X()
r=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
r.r=B.aq(A.cw,A.iZ,s/3).j(0.55).gp(0)
k=r.H()
r=p.e
w.drawPath((r==null?p.e=new B.cF(p.gbI().a.snapshot()):r).a,k)
k.delete()}for(v=Math.max(4,A.k.V(45*this.d)),j=d*0.95,d*=0.9,u=a3*a0,i=0;i<v;++i){h=a0*(0.012+0.02*C.cT(i,1))
g=d-A.k.G(u*(0.04+0.05*C.cT(i,2))+C.cT(i,3)*j,j)
n=C.cT(i,4)*e+Math.sin(a3+i)*a0*0.02
$.X()
t=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
t.sau(new B.bR(An.qf,0.5,A.x,f,0,D.d4Q,f,f).aw(0,B.bU(new B.u(n,g),h)))
k=t.H()
w.drawCircle(n,g,h,k)
k.delete()}this.lB(a1,a2,a3,25,A.c,190)},
crB(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=a0.a,f=a0.b,e=Math.min(g,f)
for(w=Math.max(4,A.k.V(70*this.d)),v=d.a,u=a1*e,t=a1*0.7,s=a1*0.4,r=0;r<w;++r){q=e*(0.01+0.025*C.cT(r,1))
p=f+q*4
o=A.k.G(u*(0.03+0.05*C.cT(r,2))+C.cT(r,3)*p,p)
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
h.delete()}v.restore()}this.lB(d,a0,a1,40,A.er,200)},
bXd(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
a0/=2
a1/=2
w=new B.u(a0,a1)
v=a2*0.4
for(u=[-1,1],t=13*A.k.D(a5/2,0,1),s=a3.a,r=a2*0.05,q=a2*0.02,p=r/2,o=-q,n=0+r,m=o+q*2,l=0;l<2;++l){k=u[l]
for(j=k>0,i=0;i<A.k.dw(t);++i){h=1.5707963267948966+k*(0.35+i/13*2.2)
g=Math.cos(h)
f=Math.sin(h)
J.bA(s.save())
s.translate(a0+g*v,a1+f*v)
s.rotate((h+(j?0.6:2.541592653589793))*180/3.141592653589793,0,0)
g=B.cu(new B.u(p,0),q,r)
$.X()
f=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
f.sau(D.bS7.aw(0,new B.aa(0,o,n,m)))
e=f.H()
s.drawOval(B.c4(g),e)
e.delete()
s.restore()}}$.X()
a0=B.M()
a0.b=A.ae
a0.c=a2*0.003
a0.r=D.b8E.gp(0)
a3.ai(w,v*1.08,a0)
d=a5*0.8
this.rf(a3,w.ad(0,new B.u(Math.cos(d)*v*1.08,Math.sin(d)*v*1.08)),a2*0.03,A.c,0.9)
this.lB(a3,a4,a5,40,A.bJ,210)},
clB(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=a9.a,a4=a9.b,a5=Math.min(a3,a4),a6=x.O,a7=[B.a([A.hD,A.hT],a6),B.a([A.oj,A.il],a6),B.a([A.aE,A.ey],a6)]
for(w=b0*0.3,v=0+a3,u=0+a4,t=a8.a,s=x.dB,r=s.k("bV<ai.E>"),q=s.k("ai.E"),p=b0*1.5,o=x.v,n=x.dN,m=0;m<3;++m){l=$.X()
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
j.e=null}i.push(new B.u(e,d+a0))}for(l=new B.dw(i,s),l=new B.bV(l,l.gM(0),r);l.C();){h=l.d
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
$.X()
l=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
k=a7[m]
h=k[0]
l.sau(new B.a7(A.a3,A.a7,A.x,B.a([h,k[1],h],a6),H.auQ,new B.me(w)).aw(0,new B.aa(0,0,v,u)))
l.r=A.c.j(0.85).gp(0)
a2=l.H()
l=j.e
t.drawPath((l==null?j.e=new B.cF(j.gbI().a.snapshot()):l).a,a2)
a2.delete()}this.lB(a8,a9,b0,40,A.c,220)},
bWW(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=b2.a,a8=b2.b,a9=Math.min(a7,a8),b0=a9*0.09
for(w=[!0,!1],v=b0*2,u=a7+v,t=b0*0.5,s=b1.a,r=b0*0.1,q=b0*0.35,p=b0*0.3,o=-b0*2,n=b3*a9,m=n*0.08,l=a8-b0,k=0;k<2;++k){j=w[k]
i=j?0:l
h=A.k.G(m,v)
g=o+(j?h:-h)
f=i+b0
e=i+q
d=e+p
for(;g<u;g=a1){a0=A.o.G(A.k.bw(g/t),5)
a1=g+t
$.X()
a2=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
a3=Math.abs(a0)
a2.r=D.a1c[a3].gp(0)
a4=a2.H()
s.drawRect(B.c4(new B.aa(g,i,a1,f)),a4)
a4.delete()
a2=g+r
a5=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
a5.r=D.a1c[A.o.G(a3+2,5)].gp(0)
a4=a5.H()
s.drawRect(B.c4(new B.aa(a2,e,a2+p,d)),a4)
a4.delete()}}for(w=Math.max(4,A.k.V(36*this.d)),u=b3*3,a6=a8-v,a0=0;a0<w;++a0){a8=A.k.G(n*(0.04+0.05*C.cT(a0,1))+C.cT(a0,2)*a6,a6)
v=C.cT(a0,3)
t=C.cT(a0,4)
this.rf(b1,new B.u(v*a7,l-a8),a9*(0.01+0.012*t),D.a1c[A.o.G(a0,3)===0?0:4],0.5+0.5*Math.sin(u+a0))}},
cx6(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=a5.a,a2=a5.b,a3=Math.min(a1,a2)
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
l.E(new B.bE())
r=v+n
for(w=[-1,1],q=a3*0.012,p=a2+m*0.25,k=n*0.4,i=m*0.35,h=0;h<2;++h){g=w[h]
f=B.cu(new B.u(a1+g*n*0.5,p),i,k)
e=g<0?1.5707963267948966:-1.5707963267948966
d=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
d.b=A.ae
d.c=q
d.r=A.av.gp(0)
o=d.H()
u.drawArc.apply(u,[B.c4(f),e*57.29577951308232,180,!1,o])
o.delete()}a1=B.M()
a1.sau(new B.a7(A.a3,A.a7,A.x,D.d72,A.aug,null).aw(0,new B.aa(v,a2,r,j)))
a4.aO(l,a1)
a0=A.k.G(a6*0.6,1.4)
if(a0<1)this.rf(a4,new B.u(v+(r-v)*a0,a2+(j-a2)*0.3),a3*0.035,A.c,Math.sin(a0*3.141592653589793))
this.bED(a4,a5,a6,60)},
bED(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m,l=e.a,k=e.b,j=Math.min(l,k)
for(w=Math.max(4,A.k.V(g*this.d)),v=k+20,k=f*j,u=d.a,t=f*3,s=j*0.012,r=j*0.02,q=f*4,p=0;p<w;++p){o=A.k.G(k*(0.1+0.1*C.cT(p,31))+C.cT(p,32)*v,v)
n=C.cT(p,33)
J.bA(u.save())
u.translate(n*l,o-10)
u.rotate((t+p)*180/3.141592653589793,0,0)
o=B.cu(A.J,r*A.k.D(Math.abs(Math.cos(q+p)),0.2,1),s)
$.X()
n=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
n.r=D.ON[A.o.G(p,5)].gp(0)
m=n.H()
u.drawRect(B.c4(o),m)
m.delete()
u.restore()}},
cpu(a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a1.a,d=Math.min(e,a1.b)
this.lB(a0,a1,a2,70,A.c,250)
for(w=Math.max(4,A.k.V(12*this.d)),v=-d*0.1,u=d*1.4,t=-0.6*u,s=x.O,r=d*0.006,q=a0.a,p=d*0.018,o=0;o<w;++o){n=1.6+C.cT(o,1)*1.6
m=A.k.G(a2+C.cT(o,2)*n,n)/n
l=e*(C.cT(o*7+A.k.bw((a2+C.cT(o,2)*n)/n),3)*1.2-0.1)
k=l+t*m
j=v+u*m
i=new B.u(k,j)
h=Math.max(0,m-0.18)
l+=t*h
h=v+u*h
$.X()
g=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
g.sau(new B.a7(A.a3,A.a7,A.x,B.a([A.c.j(0),A.bJ],s),null,null).aw(0,B.rh(new B.u(l,h),i)))
g.c=r
g.d=A.bO
f=g.H()
q.drawLine.apply(q,[l,h,k,j,f])
f.delete()
this.rf(a0,i,p,A.c,1-m)}},
bzN(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=e.a,i=e.b,h=Math.min(j,i)
for(w=Math.max(4,A.k.V(36*this.d)),v=f*0.2,u=f*0.17,t=f*0.8,s=d.a,r=0;r<w;++r){q=h*(0.03+0.09*C.cT(r,1))
p=A.k.G(C.cT(r,2)*j+Math.sin(v+r)*h*0.12,j)
o=A.k.G(C.cT(r,3)*i+Math.cos(u+r*1.3)*h*0.1,i)
n=0.12+0.18*(0.5+0.5*Math.sin(t+r))
$.X()
m=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
l=A.o.G(r,5)
m.r=D.awA[l].j(n).gp(0)
m.a=A.nm
m.z=new B.ht(A.G,q*0.12)
k=m.H()
s.drawCircle(p,o,q,k)
k.delete()
m=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
m.b=A.ae
m.c=Math.max(0.6,q*0.05)
m.r=D.awA[l].j(n*1.4).gp(0)
k=m.H()
s.drawCircle(p,o,q,k)
k.delete()}},
cb6(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=e.a,i=e.b,h=Math.min(j,i)
j/=2
i/=2
for(w=d.a,v=f*0.05,u=h*0.003,t=h*0.012,s=h*0.03,r=h*0.02,q=0;q<4;++q){J.bA(w.save())
w.translate(j,i)
w.rotate((q*3.141592653589793/4+v)*180/3.141592653589793,0,0)
p=B.cu(A.J,h*(0.28+q*0.05),h*(0.8+q*0.12))
$.X()
o=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
o.b=A.ae
o.c=u
o.r=A.bJ.j(0.45).gp(0)
n=o.H()
w.drawOval(B.c4(p),n)
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
k.r=A.hD.j(0.4).gp(0)
k.z=new B.ht(A.G,r)
n=k.H()
w.drawCircle(o,l,s,n)
n.delete()
w.restore()}this.lB(d,e,f,45,A.bJ,270)},
bMo(a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=a6.a,a3=a6.b,a4=Math.min(a2,a3)
for(w=Math.max(4,A.k.V(22*this.d)),v=a5.a,u=x.O,t=a7*0.3,s=a2*0.94,r=a2*0.06,q=a3*0.92,p=a3*0.08,o=0;o<w;++o){n=A.o.G(o,4)
m=C.cT(o,1)
A:{if(0===n){l=new B.u(m*a2,p)
break A}if(1===n){l=new B.u(m*a2,q)
break A}if(2===n){l=new B.u(r,m*a3)
break A}l=new B.u(s,m*a3)
break A}k=A.k.G(a7+C.cT(o,2)*4,4)/4
j=A.et.av(0,A.k.D(k/0.4,0,1))
i=k>0.85?1-(k-0.85)/0.15:1
h=a4*(0.03+0.03*C.cT(o,3))*(j*i)
if(h<=0.5)continue
g=D.cXo[A.o.G(o,5)]
J.bA(v.save())
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
l.r=A.hD.gp(0)
a1=l.H()
v.drawCircle(0,0,h*0.3,a1)
a1.delete()
v.restore()}this.lB(a5,a6,a7,30,A.hT,280)},
c_F(a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=a6.a,a3=a6.b,a4=Math.min(a2,a3)
for(w=[0,1],v=a4*0.008,u=a5.a,t=a7*0.6,s=a3/2,r=0;r<2;++r){q=w[r]
for(p=q===0,o=a2*q,n=0;n<4;++n){m=A.k.G(t+n/4,1)
l=B.bU(new B.u(o,s),a4*(0.1+0.6*m))
k=p?-1.0471975511965976:2.0943951023931953
$.X()
j=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
j.b=A.ae
j.c=v
j.r=D.atm[n].j((1-m)*0.8).gp(0)
i=j.H()
u.drawArc.apply(u,[B.c4(l),k*57.29577951308232,119.99999999999999,!1,i])
i.delete()}}for(w=Math.max(4,A.k.V(26*this.d)),h=a3+30,v=a7*a4,t=a7*1.5,g=0;g<w;++g){f=a3-A.k.G(v*(0.06+0.06*C.cT(g,1))+C.cT(g,2)*h,h)
e=C.cT(g,3)*a2+Math.sin(t+g)*a4*0.04
d=a4*(0.015+0.012*C.cT(g,4))
a0=D.atm[A.o.G(g,4)]
$.X()
a1=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
a1.r=a0.gp(0)
J.bA(u.save())
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
bZ6(a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=a8.a,a5=a8.b,a6=Math.min(a4,a5)
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
d.r=B.aq(A.bJ,A.oc,k).j(0.7).gp(0)
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
a5=B.M()
a5.sau(new B.bR(A.A,0.5,A.x,a3,0,B.a([A.hD.j(0.25),D.Wb],x.O),a3,a3).aw(0,B.bU(w,a4)))
a7.ai(w,a4,a5)
this.lB(a7,a8,a9,30,A.bJ,300)},
crK(b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=b1.a,a8=b1.b,a9=Math.min(a7,a8)
for(w=[-1,1],v=70*this.d,u=a9*0.003,t=b0.a,s=a7/2,a8*=0.95,r=b2*1.3,q=a9*0.008,p=a9*0.06,o=x.O,n=0;n<2;++n){m=w[n]
l=s+m*a7*0.34
k=Math.sin(r+m)*0.12
j=l+(Math.sin(k)*a9*0.45-m*a9*0.08)
i=a8+-Math.cos(k)*a9*0.45
$.X()
h=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
h.r=A.bo.gp(0)
h.c=q
h.d=A.bO
g=h.H()
t.drawLine.apply(t,[l,a8,j,i,g])
g.delete()
l=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
l.sau(new B.bR(A.A,0.5,A.x,null,0,B.a([A.hT,A.hD.j(0.6),D.Wb],o),null,null).aw(0,B.bU(new B.u(j,i),p)))
g=l.H()
t.drawCircle(j,i,p,g)
g.delete()
for(l=Math.max(4,A.k.V(v)),f=0;f<l;++f){e=0.5+0.4*C.cT(f,1)
d=A.k.G(b2+C.cT(f,2)*e,e)/e
a0=A.k.bw((b2+C.cT(f,2)*e)/e)
a1=C.cT(f*31+a0,3)*3.141592653589793*2
a2=a9*(0.06+0.16*C.cT(f*17+a0,4))
h=Math.cos(a1)
a3=Math.sin(a1)
a4=j+Math.cos(a1)*a2*d
a5=i+Math.sin(a1)*a2*d
a6=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
a6.r=B.aq(A.hT,A.aI,d).j(1-d).gp(0)
a6.c=Math.max(0.8,u)
a6.d=A.bO
a6.a=A.nm
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
g.delete()}}}this.lB(b0,b1,b2,35,A.bJ,310)},
bDi(a9,b0,b1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=b0.a,a8=b0.b
this.aQQ(a9,new B.at(a7,a8*0.75),b1*0.9)
w=Math.min(a7,a8)
for(v=w*0.01,u=w*0.008,t=w*0.012,s=w*0.016,r=a9.a,q=w*0.025,p=w*0.035,o=0,n=0;o<a7;){m=w*(0.08+0.1*C.cT(n,1))
l=a8*(0.14+0.24*C.cT(n,2))
k=a8-l
j=new B.aa(o,k,o+m,k+l)
$.X()
i=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
i.sau(D.bT2.aw(0,j))
h=i.H()
r.drawRect(B.c4(j),h)
h.delete()
g=A.k.bw(m/q)
f=A.k.bw(l/p)
for(i=o+u,k+=t,e=n*50,d=0;d<g;++d)for(a0=i+d*w*0.025,a1=a0+t,a2=e+d,a3=d*1.7,a4=0;a4<f;++a4){if(!(Math.sin(b1*(0.3+C.cT(a2,a4))+a3+a4*2.3+n)>0.2))continue
a5=k+a4*w*0.035
$.X()
a6=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
a6.r=A.bJ.j(0.85).gp(0)
h=a6.H()
r.drawRect(B.c4(new B.aa(a0,a5,a1,a5+s)),h)
h.delete()}o+=m+v;++n}},
aq(d){return d.b!==this.b||d.d!==this.d}}
C.aYq.prototype={
B(d){var w,v=null,u=new C.c6h(),t=new C.c6j(this,u,d),s=B.a([u.$4$child$label$onTap$selected(B.p(v,D.am9,A.f,A.c.j(0.05),v,v,v,v,v,v,v,v,v,v),"None",new C.c6i(this),this.c.a.length===0)],x.p)
for(w=0;w<32;++w)s.push(t.$1(D.Gj[w]))
return B.c_(A.bD,s,A.bt,12,10)}}
C.Yq.prototype={
T(){return new C.aym()}}
C.aym.prototype={
gvk(){var w=this.d
return w===$?this.d=this.a.c:w},
gaXF(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new B.ar(new B.bb(w.b,A.b2,A.aN),$.aw())}return v},
gavW(){var w,v,u=this,t=u.f
if(t===$){w=u.a.c.gaJ7()
v=$.aw()
u.f!==$&&B.bM()
t=u.f=new B.ar(new B.bb(w,A.b2,A.aN),v)}return t},
q(){var w=this.gaXF(0),v=$.aw()
w.S$=v
w.P$=0
w=this.gavW()
w.S$=v
w.P$=0
this.a2()},
Z6(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Z6=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hW().BH(90,700,700,A.eG),$async$Z6)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fe(),$async$Z6)
case 8:p=e
o=q.b.toLowerCase()
n=J.agH(o,".png")?"image/png":"image/jpeg"
r.m(new C.d50(r,n,p))
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
return B.i($async$Z6,v)},
aXE(d){var w=null,v=A.c.j(0.07)
return B.br(w,new B.b4(4,B.m(12),A.Y),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,A.aOk,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=C.afN(p.gvk().a)
if(n==null)n=A.d.gL(D.Gj)
w=p.gvk()
v=p.r
u=x.p
v=B.D(new B.an(A.W,o,A.aa,A.q,B.a([B.bY(0,new C.ML(p.gvk(),!1,!0,new B.cw(w.a+v,x.W)),0,0,0),B.ao(o,B.H7(A.mk,new C.d55(d),B.nq(o,A.aX,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o),o,o,8,o,8,o),B.ao(o,B.H7(D.bCZ,new C.d56(p),B.nq(o,A.aX,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),"Play again"),o,o,o,8,8,o)],u),o),1)
w=B.d(n.b,o,o,o,o,o,o,E.aOe,o,o,o)
t=B.D(B.aL(o,A.T,!1,o,!0,A.q,o,B.aM(),p.gaXF(0),o,o,o,o,o,2,p.aXE("Big words"),A.y,!0,o,!0,o,!1,o,A.ah,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.d57(p),o,o,o,!1,o,o,!1,o,!0,o,A.a9,o,o,o,o,o,o,o,o,o,o,o,A.hn,!0,A.a5,o,A.am,o,o,o,o),1)
s=A.c.j(0.07)
r=B.I(A.hD.j(0.6),A.r,1)
if(p.gvk().d.length===0)q=D.bGh
else{q=C.h8t(p.gvk().d)
if(q==null)q=new Uint8Array(0)
q=B.hS(B.fL(q,A.A,o,o,A.cm,A.bQ,!1,o,!1,o,o),A.aq)}r=B.a([t,A.ab,B.aE(o,B.p(o,q,A.f,o,o,new B.o(s,o,r,o,o,o,A.a6),o,48,o,o,o,o,o,48),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gc55(),o,o,o,o,o,o,!1,A.a8)],u)
if(p.gvk().d.length!==0)r.push(B.aH(o,o,o,o,D.a00,o,o,o,new C.d58(p),o,o,o,o,"Remove logo",o))
return B.cb(o,A.w,B.bn(!0,B.v(B.a([v,B.p(o,B.v(B.a([w,A.S,B.A(r,A.m,o,A.e,A.j,0,o,o),A.P,B.aL(o,A.T,!1,o,!0,A.q,o,B.aM(),p.gavW(),o,o,o,o,o,2,p.aXE("Line under it"),A.y,!0,o,!0,o,!1,o,A.ah,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.d59(p),o,o,o,!1,o,o,!1,o,!0,o,A.a9,o,o,o,o,o,o,o,o,o,o,o,A.dl,!0,A.a5,o,A.am,o,o,o,o),A.ac,B.dp(D.bFc,D.fpv,new C.d5a(p,d),B.bk(A.av,o,o,o,A.w,o,A.cf,o,new B.b7(B.m(14),A.Y),o,o,o))],u),A.aj,o,A.e,A.Q,0,A.p),A.f,o,o,D.aYs,o,o,o,o,A.ET,o,o,o)],u),A.m,o,A.e,A.j,0,A.p),!0,!1,A.ag,!0,!0),o,!1,!1,o,o)}}
C.aK_.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bv()}}
C.YL.prototype={
T(){return new C.bei(new B.ar(A.as,$.aw()))}}
C.bei.prototype={
q(){var w=this.d
w.S$=$.aw()
w.P$=0
this.a2()},
B(d){var w,v,u,t,s,r,q,p,o=null,n=B.O(d).ax.a===A.H,m=n?A.c:A.M,l=n?A.aR:A.ak,k=B.aI(d,A.bS,x.w).w,j=n?A.M:A.c,i=B.m(28),h=B.I(n?A.bF:A.aL,A.r,1),g=x.p,f=B.A(B.a([B.D(B.d("Choose an icon",o,o,o,o,o,o,B.l(o,o,m,o,o,o,o,o,o,o,o,19,o,o,A.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),1),B.aH(o,o,o,o,B.W(A.cy,l,o,o,o,o),o,o,o,new C.dbM(d),o,o,o,o,o,o)],g),A.m,o,A.e,A.j,0,o,o),e=B.a([],g)
for(w=0;w<5;++w){v=D.cIm[w]
u=B.a([],g)
for(t=J.aX(v.b);t.C();){s=t.gU(t)
r=new B.aV(12,12)
q=new B.aV(12,12)
p=n?A.c.j(0.06):A.bN
u.push(B.aK(!1,new B.bp(r,r,r,r),!0,B.p(A.A,new B.x(s,o,A.um,o,o,o,o,o,o,o,o,o),A.f,o,o,new B.o(p,o,o,new B.bp(q,q,q,q),o,o,A.n),o,44,o,o,o,o,o,44),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.dbN(this,s),o,o,o,o,o,o,o))}A.d.v(e,B.a([new B.C(A.hH,new B.x(v.a.toUpperCase(),o,new B.F(!0,l,o,o,o,o,10.5,A.u,o,1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o,o,o,o,o,o,o),o),new B.F_(A.bD,6,6,A.bt,u,o)],g))}e.push(A.ay)
e.push(B.d("YOUR OWN",o,o,o,o,o,o,B.l(o,o,l,o,o,o,o,o,o,o,o,10.5,o,o,A.u,o,o,!0,o,1,o,o,o,o,o,o),o,o,o))
e.push(A.P)
v=B.l(o,o,m,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
u=n?A.bl:A.aP
e.push(B.A(B.a([B.D(B.aL(o,A.T,!1,o,!0,A.q,o,B.aM(),this.d,o,o,o,o,o,2,B.br(o,new B.b4(4,B.m(14),A.Y),o,o,o,o,o,o,!0,o,o,o,o,o,o,u,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,"Type or paste any icon",o,o,o,o,o,!0,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),A.y,!0,o,!0,o,!1,o,A.ah,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,A.a9,o,o,o,o,o,o,o,o,o,o,o,v,!0,A.a5,o,A.am,o,o,o,o),1),A.ab,B.bJ(A.aP9,new C.dbO(this),o)],g),A.m,o,A.e,A.j,0,o,o))
e.push(A.P)
return B.bn(!0,B.p(o,B.v(B.a([f,new B.dm(1,A.ci,B.cB(e,o,o,o,o,A.ai,!0),o)],g),A.F,o,A.e,A.Q,0,A.p),A.f,o,new B.aY(0,1/0,0,k.a.b*0.8),new B.o(j,o,h,i,o,o,A.n),o,o,o,A.tk,A.XQ,o,o,o),!0,!1,A.ag,!0,!0)}}
C.bdG.prototype={
a6(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=new B.eT()
a2.dI(this.c)
w=this.b
v=w/6.283185307179586
$.X()
u=B.M()
u.z=A.Ql
t=B.M()
for(s=a3.a,r=this.d,q=w*2,p=a4.a,o=a4.b,n=0;n<46;++n){m=a2.aj()
l=a2.aj()
k=a2.aj()
j=0.8+a2.aj()*2.2
i=Math.sin(w*(3+a2.aB(4))+n)
h=A.k.G(l-v*(0.4+k*0.9),1)
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
C.bdn.prototype={
a6(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null,a1=B.bz(new B.aa(0,0,0+a7.a,0+a7.b),A.kn),a2=this.b,a3=Math.sin(a2*2),a4=$.X(),a5=B.M()
a5.b=A.ae
a5.c=6
w=this.c
a5.r=w.j(0.12+(0.5+a3*0.5)*0.18).gp(0)
a5.z=A.lg
a6.aD(a1,a5)
a5=x.v
a4=new B.aQ(a4.r,A.ap,a0,a0,B.a([],a5))
a4.E(new B.iT(a1))
v=new B.RJ(new B.vh(B.wL(a4),!1,B.a([],x.X))).gL(0)
a4=v.a
a3=v.b
a4.ji()
u=a4.e
t=u[a3].b
t===$&&B.c()
t=t.a.length()
s=a2/6.283185307179586*t
w=B.aq(w,A.c,0.8)
w.toString
for(a2=a4.a,r=a2.a,q=a6.a,p=t*0.14,o=0;o<2;++o){n=A.k.G(s+o*t/2,t)
for(m=0;m<10;m=l){l=m+1
k=l/10
$.X()
j=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
j.b=A.ae
j.d=A.bO
j.c=1.5+2*m/10
j.r=w.j(k).gp(0)
i=A.k.G(n-p*(1-m/10),t)
h=A.k.G(n-p*(1-k),t)
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
g.delete()}}a4.ji()
e=u[a3].M8(n).a
$.X()
k=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
k.r=w.gp(0)
k.z=A1.mo
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
C.bma.prototype={
a6(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=new B.eT()
e.dI(this.c)
w=a0.a*(0.2+e.aj()*0.6)
v=e.hg()?-0.1:1.1
v=a0.b*v
u=new B.u(w,v)
t=a0.galb()*1.4
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
i.push(new B.bE())
j=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
j.sau(B.aTw(u,t,B.a([s.j(0.16),s.j(0)],r),f,A.x,f,f,0))
j.z=A.je
g=j.H()
j=h.gbI().a.snapshot()
q.drawPath((h.e=new B.cF(j)).a,g)
g.delete()}},
aq(d){return d.b!==this.b}}
C.b8l.prototype={
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
C.b7Z.prototype={
a6(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=new B.eT()
a0.dI(this.c+11)
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
t.drawPath((i==null?g.e=new B.cF(g.gbI().a.snapshot()):i).a,d)
d.delete()}},
aq(d){return d.b!==this.b}}
C.bt2.prototype={
a6(d,e){var w,v,u=new B.aa(0,0,0+e.a,0+e.b),t=Math.sin(this.b)
$.X()
w=B.M()
t=(0.5+0.5*t)*0.12
w.sau(new B.bR(A.A,0.95,A.x,null,0,B.a([A.K,A.w.j(0.28+t)],x.O),D.cPr,null).aw(0,u))
d.aY(u,w)
w=u.cG(-3)
v=B.M()
v.b=A.ae
v.c=2
v.r=this.c.j(0.1+t).gp(0)
v.z=A.je
d.aY(w,v)},
aq(d){return d.b!==this.b}}
C.bq5.prototype={
a6(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this.b/6.283185307179586*3
for(w=a1.a,v=Math.abs(w),u=a1.b,t=Math.abs(u),s=this.d,r=a0.a,q=this.c*31+A.k.bw(d)*7,p=0;p<7;++p){o=new B.eT()
o.dI(q+p)
n=o.aj()*w
m=o.aj()*u
l=Math.sin(A.k.G(A.k.G(d,1)+p/7,1)*3.141592653589793)
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
C.bpe.prototype={
a6(d,e){var w,v,u=this.b/6.283185307179586*2.2-0.6
if(u<-0.3||u>1.3)return
w=new B.aa(0,0,0+e.a,0+e.b)
$.X()
v=B.M()
v.a=A.nm
v.sau(new B.a7(A.ax,A.aD,A.x,B.a([A.K,B.aq(this.c,A.c,0.6).j(0.16),A.K],x.O),B.a([A.k.D(u-0.15,0,1),A.k.D(u,0,1),A.k.D(u+0.15,0,1)],x.x),null).aw(0,w))
d.aY(w,v)},
aq(d){return d.b!==this.b}}
C.bcI.prototype={
a6(d,e){var w,v,u,t,s,r=e.gee(),q=0.55+0.45*Math.sin(this.b)
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
u.z=A.r3
r=new C.d4I(this,r*0.16,d,u,w)
t=e.gee()*0.045
r.$3(new B.u(t,t),1,1)
v=e.a-t
r.$3(new B.u(v,t),-1,1)
s=e.b-t
r.$3(new B.u(t,s),1,-1)
r.$3(new B.u(v,s),-1,-1)},
aq(d){return d.b!==this.b}}
C.xc.prototype={}
C.I6.prototype={
a4(){return"NgmySlideElementType."+this.b}}
C.apO.prototype={
a4(){return"NgmySlideAspectRatio."+this.b}}
C.us.prototype={
a4(){return"NgmySlideShapeKind."+this.b}}
C.mo.prototype={
a4(){return"NgmySlideLayout."+this.b}}
C.hw.prototype={
a4(){return"NgmySlideTransition."+this.b}}
C.eG.prototype={
hA(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=w.Q,l=w.as,k=w.at,j=w.ay,i=w.ch,h=w.cx,g=w.cy,f=w.db,e=w.dy,d=w.fy
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
u.n(0,"fontWeight",v.x.gdH(0))
u.n(0,"fontStyle",v.y.a)
u.n(0,"decoration",C.hMo(v.z))
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
hA(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=B.T(n).k("K<1,eG>")
n=B.B(new B.K(n,new C.cbG(),m),m.k("ai.E"))
return C.rf(t,s,o,q,n,w.a,u,v,p,w.b,r)},
ae(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=B.T(n).k("K<1,a4<n,@>>")
n=B.B(new B.K(n,new C.cbH(),m),m.k("ai.E"))
return B.E(["id",w.a,"title",w.b,"notes",v,"layout",u.b,"background",t,"backgroundEnd",s,"transition",r.b,"durationSeconds",q,"slideDesignId",p,"designRevision",o,"elements",n],x.N,x.z)}}
C.hZ.prototype={
gb7D(){var w=this.Q,v=w==null?null:A.a.i(w)
if(v==null)v=""
if(v.length===0)return null
return B.bi(v)},
gRw(){if(!C.kr(this.w))return!1
var w=this.gb7D()
if(w==null)return!1
return new B.S(Date.now(),0,!1).cY(w.bR())},
hA(){var w,v,u,t,s,r,q,p=this,o=p.b,n=p.c,m=p.d,l=p.e,k=p.f,j=p.w,i=p.y,h=p.z,g=p.Q,f=p.as,e=p.at,d=p.ax,a0=p.ay,a1=p.ch,a2=p.CW,a3=p.cx
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
r=B.B(new B.K(r,new C.cbv(),q),q.k("ai.E"))
return C.B9(g,w,a2,a3,m,l,a0,j,s,v,t,u,p.a,d,a1,p.x,o,e,f,r,n,i,h,k)},
ae(){var w,v,u=this,t=B.V(x.N,x.z)
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
v=B.T(w).k("K<1,a4<n,@>>")
w=B.B(new B.K(w,new C.cbw(),v),v.k("ai.E"))
t.n(0,"slides",w)
return t}}
C.jA.prototype={}
C.b_z.prototype={
B(d){return B.cm(new C.cbB(this))}}
C.an0.prototype={
T(){return new C.bhu(null,null)}}
C.bhu.prototype={
gaXG(){var w,v=this,u=v.d
if(u===$){w=B.bj(null,A.hg,null,1,null,v)
w.cH(0)
v.d!==$&&B.bM()
v.d=w
u=w}return u},
q(){this.gaXG().q()
this.bsl()},
B(d){return B.c6(this.gaXG(),new C.dDo(),this.a.c)}}
C.aJL.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bv()}}
C.aci.prototype={
P9(d,e,f,g){return this.bM5(d,e,f,g)},
bM5(d,e,f,g){var w=0,v=B.j(x.H),u,t,s
var $async$P9=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:w=3
return B.b(e.$0(),$async$P9)
case 3:s=i
if(d.e==null){w=1
break}B.a5(d,!1).N(null)
t=d.I(x.q).f
t.R(B.b2(null,null,null,null,null,A.q,null,B.d(s?f:g,null,null,null,null,null,null,null,null,null,null),null,A.ed,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$P9,v)},
B(d){var w=this,v=null,u=B.m(22),t=B.I(A.c.j(0.08),A.r,1),s=B.a([new B.ac(0,A.G,A.w.j(0.35),A.dk,24)],x.V),r=B.av(B.p(v,v,A.f,v,v,new B.o(A.b5,v,v,B.m(99),v,v,A.n),v,4,v,v,v,v,v,40),v,v,v),q=w.d,p=B.d(q?"Print your invoice":"Save your PDF",v,v,v,v,v,v,A.du,A.L,v,v),o=q?"One full letter page \u2014 tap Share then Print, or open in Safari.":w.c,n=q?3:2,m=x.p
n=B.a([r,A.aO,p,A.ao,B.d(o,v,n,A.a2,v,v,v,B.l(v,v,A.c.j(0.55),v,v,v,v,v,v,v,v,12,v,v,A.a4,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v)],m)
if(!q)A.d.v(n,B.a([A.at,B.d(w.c,v,2,A.a2,v,v,v,B.l(v,v,A.c.j(0.45),v,v,v,v,v,v,v,v,11,v,v,A.a4,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v)],m))
n.push(A.d5)
n.push(B.A(B.a([B.D(new C.acA(A.hy,"Download",A.bU,new C.el4(w,d),!0,v),1),A.aw,B.D(new C.acA(A.vj,"Share",A.bi,new C.el5(w,d),!1,v),1),A.aw,B.D(new C.acA(A.hi,"Safari",A.aZ,new C.el6(w,d),!1,v),1)],m),A.m,v,A.e,A.j,0,v,v))
n.push(A.ay)
n.push(B.bK(!1,B.d("Cancel",v,v,v,v,v,v,B.l(v,v,A.c.j(0.6),v,v,v,v,v,v,v,v,v,v,v,A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,!0,v,v,new C.el7(d),v,v))
return B.bn(!0,new B.C(A.pv,B.v(B.a([B.p(v,B.v(n,A.aj,v,A.e,A.j,0,A.p),A.f,v,v,new B.o(A.iK,v,t,u,s,v,A.n),v,v,v,v,A.F_,v,v,1/0)],m),A.m,v,A.e,A.Q,0,A.p),v),!0,!1,A.ag,!0,!0)}}
C.acA.prototype={
B(d){var w=this,v=null,u=B.m(16),t=w.r,s=t?w.e.j(0.22):A.c.j(0.06),r=B.m(16),q=B.I(t?w.e.j(0.55):A.c.j(0.1),A.r,1),p=t?w.e:A.c
p=B.W(w.c,p,v,v,v,26)
return B.aF(!1,A.a1,!0,v,B.aK(!1,u,!0,B.ex(B.v(B.a([p,A.P,B.d(w.d,v,v,v,v,v,v,B.l(v,v,A.c,v,v,v,v,v,v,v,v,12,v,v,t?A.u:A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.Q,0,A.p),v,new B.o(s,v,q,r,v,v,A.n),v,D.bt1,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),A.f,A.K,0,v,v,v,v,v,A.af)}}
C.b_x.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.c,f=g.db
if(f==="__kiapo_video__"||A.a.a0(f,"__kiapo_video___"))return new C.ap_(g.at,i.d,i.as,i.at,h)
switch(g.b.a){case 0:f=i.r
w=i.d
if(f){v=2*w
u=new B.Q(v,w,v,w)}else{v=6*w
u=new B.Q(v,10*w,v,12*w)}t=i.c56().ajo(1.35)
s=B.aug(h,h,h,g.w*w,h,h,!0,1.35,h,h,h)
v=g.as
r=i.bxL(v)
if(i.e&&i.w!=null)q=B.aL(h,A.T,!1,h,!0,A.q,h,B.aM(),i.w,A.bi,h,h,h,h,2,D.bOc,A.y,!0,h,!0,h,!1,i.x,A.ah,h,h,h,new B.cw("slide_tf_"+g.a,x.W),h,A.vY,h,h,h,h,1,h,!1,"\u2022",h,i.y,h,h,h,!1,h,h,!1,h,!0,h,A.a9,h,h,h,h,h,h,h,h,h,h,s,t,!0,v,A.z9,A.am,h,A.Sp,h,h)
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
w=n?t.cEi(B.b0(g.Q).j(0.45),A.cD):t
p=g.as
l=m?1:h
k=m?A.eC:A.CK
p=B.d(f,new B.cw("slide_txt_"+g.a+"_"+v,x.W),l,k,h,!m,s,w,p,h,h)
g=p}else{f=A.a.gX(v)
v=g.k1
p=g.r
if(v==="outline"){l=g.k2
k=l?A.Sg:s
$.X()
j=B.M()
j.b=A.ae
j.c=3*w
j.e=A.fz
j.r=A.aA.gp(0)
j=i.clE(p,t,k,j)
k=g.r
w=new B.an(A.W,h,A.aa,A.q,B.a([j,i.clC(k,t,l?A.Sg:s)],x.p),h)}else w=i.clD(p,t,g.k2?A.Sg:s,m)
v=new B.n7(w,new B.cw("slide_txt_"+g.a+"_"+f+"_"+v,x.W))
g=v}q=B.aE(A.c5,g,A.y,!1,h,i.Q,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,i.z,h,h,h,h,h,h,!1,A.a8)}return new B.C(u,new B.bI(r,h,h,q,h),h)
case 1:case 4:return i.bVq()
case 3:return i.cdp()
case 2:return B.b3(h,h,h,new C.b_u(g,h),A.f0)
case 5:g=g.r
return new C.b_w(g,!i.e&&i.z==null,h)}},
c56(){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.c,l=B.b0(m.Q),k=m.x,j=m.y,i=m.z,h=n,g=n,f=n,e=n
switch(m.k1){case"caps":h=3*o.d
w=l
k=A.u
break
case"elegant":h=1.2*o.d
w=l
k=A.jP
j=A.cD
break
case"shadow":v=o.d
e=B.a([new B.cP(D.acx,new B.u(0,4*v),8*v)],x.r)
w=l
break
case"neon":v=o.d
e=B.a([new B.cP(l,A.J,6*v),new B.cP(l,A.J,16*v),new B.cP(l.j(0.8),A.J,30*v)],x.r)
w=l
break
case"marker":k=A.u
g=A.cp
w=A.aA
break
case"stamp":h=6*o.d
w=l
k=A.u
i=A.mu
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
e=B.a([new B.cP(A.b7,new B.u(-3*v,0),0),new B.cP(A.aB,new B.u(3*v,0),0)],x.r)
w=l
k=A.u
break
case"fire":v=o.d
e=B.a([new B.cP(A.cv,A.J,8*v),new B.cP(A.aB,new B.u(0,-3*v),18*v)],x.r)
k=A.u
w=W.Vf
break
case"ice":v=o.d
e=B.a([new B.cP(A.aW,A.J,10*v),new B.cP(A.cw,A.J,22*v)],x.r)
k=A.O
w=A.er
break
case"chalk":h=o.d
e=B.a([new B.cP(l.j(0.45),A.J,3*h)],x.r)
w=l
k=A.jP
break
case"comic":v=B.aq(l,A.w,0.85)
v.toString
u=B.a([],x.r)
for(t=o.d,q=0;q<8;++q){p=D.cRm[q]
u.push(new B.cP(v,new B.u(p.a*t,p.b*t),0))}u.push(new B.cP(v,new B.u(5*t,6*t),0))
e=u
w=l
k=A.u
break
case"gold":$.X()
f=B.M()
v=o.d
f.sau(D.bQz.aw(0,new B.aa(0,0,0+900*v,0+m.w*v*1.6)))
e=B.a([new B.cP(A.JT,new B.u(0,3*v),5*v)],x.r)
w=l
k=A.u
break
case"sunset":$.X()
f=B.M()
v=o.d
f.sau(D.bQU.aw(0,new B.aa(0,0,0+900*v,0+m.w*v*1.6)))
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
k=A.jP
break
default:w=l}v=m.w
u=f==null?w:n
m=m.k3
m=m!==0?B.b0(m):g
return B.l(n,m,u,n,i,n,n,n,n,n,n,v*o.d,j,n,k,f,1.25,!0,n,h,n,n,n,e,n,n)},
axP(d,e,f,g,h){var w,v,u,t,s=null,r=this.c,q=r.k1
if(D.eFl.t(0,q))w=d.toUpperCase()
else w=q==="lowercase"?d.toLowerCase():d
q=new C.cbz(h)
v=r.k2?C.hYT(w,e,q):s
if(v==null){q=q.$1(e)
r=r.as
u=g?1:s
t=g?A.eC:A.CK
return B.d(w,s,u,t,s,!g,f,q,r,s,s)}return B.WW(B.dq(v,s,s,s,s,s,s,s,s,s,s),s,s,q.$1(e),r.as)},
clE(d,e,f,g){return this.axP(d,e,f,!1,g)},
clC(d,e,f){return this.axP(d,e,f,!1,null)},
clD(d,e,f,g){return this.axP(d,e,f,g,null)},
bxL(d){switch(d.a){case 2:return A.A
case 1:case 5:return A.a7
default:return A.a3}},
bVq(){var w,v,u=this,t=null,s=u.c,r=s.at
if(r==null||!A.a.a0(r,"data:image")){if(!u.as)return A.bH
return B.av(B.W(s.b===D.kP?A.FU:A.B2,A.az,t,t,t,32),t,t,t)}w=u.bAJ(r)
if(s.b===D.kP){s=B.m(6)
v=2*u.d
return B.p(t,w,A.f,t,t,new B.o(A.c,t,B.I(A.cn,A.r,1),s,B.a([new B.ac(0,A.G,A.w.j(0.08),A.dB,6)],x.V),t,A.n),t,1/0,t,t,new B.Q(v,v,v,v),t,t,1/0)}if(s.go.length!==0||s.id.length!==0){v=u.aMf(r,!0)
return C.ftS(s.go,v,s.id)}return w},
aMf(d,e){var w,v,u,t
try{w=C.hZb(d)
u=this.c.db
v=u==="marriage_locked_bg"||A.a.c9(u,"_bg")
u=B.cm(new C.cby(this,w,v,e))
return u}catch(t){return D.aat}},
bAJ(d){return this.aMf(d,!1)},
cdp(){var w=this.c,v=w.at
if(v==null||v.length===0)return D.b2I
return C.hZt(v,w.db,w.dx)}}
C.b_u.prototype={
a6(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=$.X(),g=B.M(),f=this.b
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
case 1:d.i2(s,g)
d.i2(s,w)
break
case 2:r=new B.aQ(h.r,A.ap,i,i,B.a([],x.v))
r.E(new B.b5(u/2,0))
r.E(new B.ap(u,t))
r.E(new B.ap(0,t))
r.E(new B.bE())
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
r.E(new B.bE())
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
r.E(new B.bE())
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
r.e=null}}r.E(new B.bE())
d.aO(r,g)
d.aO(r,w)
break}},
aq(d){return d.b!==this.b}}
C.aHm.prototype={
T(){return new C.bsz(null,null)}}
C.bsz.prototype={
a_(){var w,v=this
v.a1()
w=B.bj(null,A.i7,null,1,null,v)
w.cH(0)
v.d!==$&&B.aO()
v.d=w},
q(){var w=this.d
w===$&&B.c()
w.q()
this.buB()},
aMq(d,e){var w=null,v=B.a([e,e.j(0.7)],x.O),u=B.m(8)
return B.bZ(B.av(B.d(d,w,w,w,w,w,w,A.du,w,w,w),w,w,w),new B.o(w,w,w,u,w,new B.a7(A.a3,A.a7,A.x,v,w,w),A.n),A.bd)},
bxZ(){var w,v=this,u=null,t=v.aMq("Slide A",A.bi),s=v.aMq("Slide B",A.aZ)
if(v.a.c===D.cg)return new B.an(A.W,u,A.b_,A.q,B.a([t,B.av(B.d("No transition",u,u,u,u,u,u,B.l(u,u,A.c.j(0.7),u,u,u,u,u,u,u,u,16,u,u,A.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,u)],x.p),u)
w=v.d
w===$&&B.c()
return B.c6(w,new C.f_q(v,s,t),u)},
B(d){return this.bxZ()}}
C.aHZ.prototype={
iV(d){return new B.aa(0,0,0+d.a*A.k.D(this.b,0,1),0+d.b)},
jA(d){return d.b!==this.b}}
C.U6.prototype={
T(){return new C.bhG(null,null)}}
C.bhG.prototype={
a_(){var w,v,u=this
u.a1()
w=B.bj(null,A.Av,null,1,null,u)
u.d!==$&&B.aO()
u.d=w
v=u.a
if(!v.e||v.c.dy===D.cg){w.sp(0,1)
return}B.bN(B.dB(0,0,0,v.c.fr+v.f*120,0,0),new C.dOZ(u),x.a)},
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
else B.bN(B.dB(0,0,0,v.c.fr+v.f*120,0,0),new C.dOY(t),x.a)}},
q(){var w=this.d
w===$&&B.c()
w.q()
this.bsA()},
B(d){var w,v=this.a
if(v.c.dy===D.cg||!v.e)return v.d
w=this.d
w===$&&B.c()
return B.c6(w,new C.dOX(this),v.d)}}
C.I5.prototype={
B(d){return B.cm(new C.cbr(this))}}
C.ay6.prototype={
T(){return new C.bcc()}}
C.bcc.prototype={
a_(){this.a1()
if(this.a.c!==D.cg)B.bN(A.La,new C.d1X(this),x.a)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=4280172719,n=q.a.c
if(n===D.cg)n=B.av(B.d("No animation on elements",p,p,p,p,p,p,B.l(p,p,A.c.j(0.75),p,p,p,p,p,p,p,p,16,p,p,A.O,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p)
else{n=n.u(0)
w=q.d
v=x.W
u=q.a.c
w=B.ao(p,new C.U6(C.en(A.bg,!1,4279310375,A.aC,"",4294538006,24,A.bk,A.a4,"",0.2,"preview_shape",p,"","",0,!1,"",0,D.be,o,2,"",0,0,"",u,D.f_,0.84,0.08,0.12),B.p(p,p,A.f,p,p,new B.o(A.cb,p,p,B.m(14),p,p,A.n),p,72,p,p,p,p,p,72),!0,0,new B.cw("shape_"+n+"_"+w,v)),p,p,24,p,28,p)
u=u.u(0)
n=q.d
t=C.en(A.bg,!1,4294967295,A.aC,"",4280640491,22,A.bk,A.a4,"",0.2,"preview_text",p,"","",0,!1,"",0,D.be,o,2,"Element flies in",0,0,"",q.a.c,D.cQ,0.84,0.08,0.12)
s=A.c.j(0.14)
r=B.m(14)
v=new B.an(A.W,p,A.aa,A.q,B.a([w,B.ao(32,new C.U6(t,B.p(p,D.fbB,A.f,p,p,new B.o(s,p,B.I(A.b5,A.r,1),r,p,p,A.n),p,p,p,p,A.j8,p,p,1/0),!0,1,new B.cw("text_"+u+"_"+n,v)),p,p,24,24,p,p)],x.p),p)
n=v}return B.bZ(n,D.aZ1,A.bd)}}
C.a6O.prototype={
T(){return new C.bik(null,null)}}
C.bik.prototype={
gaYc(){var w=this.a
if(w.e)w=D.eFs.t(0,w.c)||D.aLu.t(0,A.d.gL(this.a.c.split("@")))
else w=!1
return w},
a_(){var w,v=this
v.a1()
if(v.gaYc()){w=C.hXy(v.a.c)
if(w==null){w=v.a.c
if(w==="drift")w=9000
else w=w==="pulse"?2600:4200}w=B.bj(null,B.dB(0,0,0,w,0,0),null,1,null,v)
w.cH(0)
v.d=w}},
q(){var w=this.d
if(w!=null)w.q()
this.bt6()},
B(d){var w,v=this,u=v.d
if(!v.gaYc()||u==null)return v.a.d
w=v.a
return B.c6(u,new C.e8H(v,u,A.o.G(w.f,7)/7*3.141592653589793*2),w.d)}}
C.aYt.prototype={
B(d){var w=null
return B.av(C.b_y(!0,w,!1,C.en(A.L,!1,this.e.l(),A.aC,"",4280640491,this.f,A.bk,A.a4,"",0.2,"fx",w,"","",0,!1,"",0,D.be,4280172719,2,"Aa",0,0,this.c,D.cg,D.cQ,0.84,0.08,0.12),w,!1,w,w,w,1,!1,!0),w,w,w)},
gY(d){return this.f}}
C.bdl.prototype={
iV(d){return C.a1t(this.b,new B.aa(0,0,0+d.a,0+d.b).cG(-this.c))},
jA(d){return d.b!==this.b||d.c!==this.c}}
C.bob.prototype={
a6(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=new B.aa(0,0,0+a1.a,0+a1.b).cG(-this.d),g=this.b,f=C.a1t(g,h),e=a1.gee(),d=new C.ePK()
switch(this.c){case"gold":w=d.$1(e*0.045)
w.sau(D.aN_.aw(0,h))
a0.aO(f,w)
g=C.a1t(g,h.cG(-(e*0.03)))
w=d.$1(e*0.006)
w.r=D.bgI.gp(0)
a0.aO(g,w)
break
case"platinum":g=d.$1(e*0.04)
g.sau(D.eP0.aw(0,h))
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
g.sau(D.eOZ.aw(0,h))
a0.aO(f,g)
break
case"double":w=d.$1(e*0.012)
w.r=A.c.gp(0)
a0.aO(f,w)
g=C.a1t(g,h.cG(e*0.03))
w=d.$1(e*0.008)
w.r=A.c.j(0.75).gp(0)
a0.aO(g,w)
break
case"neon":g=d.$1(e*0.06)
g.r=A.b7.j(0.7).gp(0)
g.z=new B.ht(A.G,e*0.035)
a0.aO(f,g)
g=d.$1(e*0.016)
g.r=A.ol.gp(0)
a0.aO(f,g)
break
case"rosegold":w=d.$1(e*0.05)
w.sau(D.eOU.aw(0,h))
a0.aO(f,w)
w=C.a1t(g,h.cG(-(e*0.032)))
v=d.$1(e*0.006)
v.r=D.b64.gp(0)
a0.aO(w,v)
g=C.a1t(g,h.cG(e*0.03))
v=d.$1(e*0.004)
v.r=D.b8u.gp(0)
a0.aO(g,v)
break
case"jewels":g=d.$1(e*0.055)
g.sau(D.aN_.aw(0,h))
a0.aO(f,g)
for(g=B.wL(f),w=B.a([],x.X),g=new B.vh(g,!1,w),v=e*0.018,u=a0.a,t=-e*0.006,s=e*0.006,r=e*0.09;g.C();){q=g.c
if(q===0||g.f)B.ba(B.jQ(y.M));--q
g.ji()
p=w[q].b
p===$&&B.c()
o=A.o.D(A.k.bw(p.a.length()/r),8,40)
for(n=0;n<o;++n){g.ji()
p=w[q].b
p===$&&B.c()
p=p.a.length()
g.ji()
m=w[q].M8(p*n/o).a
l=D.cOL[A.o.G(n,4)]
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
g.sau(D.eP2.aw(0,h))
g.z=new B.ht(A.G,e*0.03)
a0.aO(f,g)
g=d.$1(e*0.018)
g.sau(D.eP_.aw(0,h))
a0.aO(f,g)
break
case"framed":w=d.$1(e*0.07)
w.r=A.c.gp(0)
a0.aO(f,w)
g=C.a1t(g,h.cG(-(e*0.035)))
w=d.$1(e*0.004)
w.r=A.ns.gp(0)
a0.aO(g,w)
break}},
aq(d){return d.b!==this.b||d.c!==this.c||d.d!==this.d}}
C.bpb.prototype={
a6(d,e){d.Fn(C.a1t(this.b,new B.aa(0,0,0+e.a,0+e.b).cG(-this.c)),A.w,e.gee()*0.05,!1)},
aq(d){return d.b!==this.b||d.c!==this.c}}
C.aJZ.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bv()}}
C.aKu.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bv()}}
C.aLP.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bv()}}
C.a76.prototype={}
C.Nb.prototype={
T(){var w=x.gz,v=x.N,u=x.bO
return new C.aCY(B.a([],x.D),B.a([],w),B.a([],w),B.V(v,u),B.V(v,x.bo),B.V(v,u),B.aW(v),null,null)},
gdX(){return this.c},
gSS(){return this.r},
gST(){return this.w},
gL_(){return this.x}}
C.aCY.prototype={
a_(){var w,v=this
v.a1()
$.aT.c1$.push(v)
C.fyO()
$.hg5=new C.eri(v)
w=B.bj(null,A.At,null,1,null,v)
w.f8(0,!0)
v.fy!==$&&B.aO()
v.fy=w
v.HT()},
br(d){var w,v,u=this
u.bE(d)
w=A.a.i(d.y)
v=u.a
if(w.toLowerCase()!==A.a.i(v.y).toLowerCase()||A.a.i(d.z).toLowerCase()!==A.a.i(v.z).toLowerCase()||d.c!==v.c){w=d.c
u.NN(w)
if(w!==u.a.c){u.e=null
u.db=!1
u.w=u.r=null}u.x=!0
u.HT()}},
iQ(d){if(d===A.zy||d===A.rB||d===A.rA||d===A.p5)this.te()},
q(){var w,v,u,t=this
$.aT.hD(t)
w=t.at
if(w!=null)w.a9(0)
t.te()
w=t.fy
w===$&&B.c()
w.q()
for(w=t.ch,w=new B.dt(w,w.r,w.e);w.C();){v=w.d
v.S$=$.aw()
v.P$=0}for(w=t.CW,w=new B.dt(w,w.r,w.e);w.C();){v=w.d
u=v.ax
if(u!=null)u.bK(0)
v.h0()}for(w=t.cx,w=new B.dt(w,w.r,w.e);w.C();){v=w.d
v.S$=$.aw()
v.P$=0}t.btk()},
gaal(){var w=this.a
return w.f||w.r||w.w||w.x||w.d},
gO6(){var w,v=this.a
if(v.d||v.w||v.x){w=A.a.i(v.y)
if(w.length!==0)return w}if(v.r&&A.a.i(v.z).length!==0)return A.a.i(v.z)
return A.a.i(v.y)},
aaP(d){var w=d==null?this.e:d
if((w==null?null:w.z)!==!0)return!1
if(w.gRw())return!1
return!0},
jZ(){return this.aaP(null)},
ahs(){var w=this.c
if(w==null)return
w.I(x.q).f.R(D.eNi)},
pY(){if(!this.jZ())return!1
this.ahs()
return!0},
apw(d){var w,v,u,t,s,r=this
if(r.aaP(d))return!1
w=d==null?r.e:d
v=w==null
if((v?null:w.w)!=="hati_kiapo_uongozi")return!0
if(r.a.d)return!0
if(!v&&!C.hfc(w))return!1
u=r.a
if(u.w||u.x)return!0
if(!u.r)return!1
v=v?null:w.x
t=A.a.i(v==null?"":v).toLowerCase()
s=A.a.i(u.z).toLowerCase()
return t.length!==0&&s.length!==0&&t===s},
zx(){return this.apw(null)},
HT(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$HT=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=++t.dx
k=t.a.c
w=3
return B.b(C.apQ(k),$async$HT)
case 3:j=e
w=4
return B.b(C.aor(k),$async$HT)
case 4:t.dy=e
if(t.c==null||l!==t.dx){w=1
break}s=C.fNT(j,t.bYg())
w=t.gaal()?5:7
break
case 5:r=t.gO6()
w=r.length!==0?8:9
break
case 8:w=10
return B.b(C.aYH(r),$async$HT)
case 10:q=e
if(t.c==null||l!==t.dx){w=1
break}if(q!=null){A.d.bn(s,new C.enG())
if(!t.dy.t(0,A.a.i(r).toLowerCase()))A.d.cn(s,0,q)}case 9:w=6
break
case 7:A.d.bn(s,new C.enH())
case 6:for(l=s.length,p=!1,o=0;o<s.length;s.length===l||(0,B.L)(s),++o){n=s[o]
m=n.w
if(!(m==="marriage_agreement"||m==="hati_kuhowa"||m==="hati_kuhoweya"||m==="hati_malipo_awamu"||m==="hati_kiapo_uongozi"))continue
m=n.y
if(C.yc(m==null?"":m)!=null)continue
C.fz_(n,s)
p=!0}t.m(new C.enI(t,s))
if(p||s.length>J.ad(j))t.te()
case 1:return B.h(u,v)}})
return B.i($async$HT,v)},
bYg(){var w,v,u,t,s,r,q="hati_kiapo_uongozi",p=B.a([],x.D)
for(w=this.d,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u){t=w[u]
s=t.w
if((s==="marriage_agreement"||s==="hati_kuhowa"||s==="hati_kuhoweya"||s==="hati_malipo_awamu"||s===q)&&s!==q)p.push(t)}r=this.e
w=!1
if(!this.db)if(r!=null){w=r.w
w=C.kr(w)&&w!==q}if(w)p.push(r)
return p},
ck4(d){var w,v=this,u=d.w
if(!C.kr(u)||u==="hati_kiapo_uongozi")return
v.a9c(d)
w=A.d.bc(v.d,new C.epg(d))
u=v.d
if(w>=0){u[w]=d.hA()
v.d[w].f=new B.S(Date.now(),0,!1)}else A.d.cn(u,0,d.hA())
v.db=!1},
cel(){var w,v,u=this,t=u.e,s=!1
if(!u.db)if(t!=null){s=t.w
s=C.kr(s)&&s!=="hati_kiapo_uongozi"}if(s)u.ck4(t)
s=u.d
w=B.T(s)
v=w.k("cQ<1,hZ>")
s=B.B(new B.cQ(new B.a2(s,new C.ep4(),w.k("a2<1>")),new C.ep5(),v),v.k("H.E"))
return s},
NN(d){return this.bMs(d)},
te(){return this.NN(null)},
bMs(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$NN=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.x&&d==null){w=1
break}s=t.cel()
w=3
return B.b(C.V5(d==null?t.a.c:d,s),$async$NN)
case 3:r=t.e
w=r!=null&&r.w==="hati_kiapo_uongozi"&&t.apw(r)?4:5
break
case 4:w=6
return B.b(C.a6k(r),$async$NN)
case 6:q=r.x
p=A.a.i(q==null?t.gO6():q)
if(t.dy.t(0,A.a.i(p).toLowerCase())){w=1
break}o=A.d.bc(t.d,new C.en3())
q=t.d
if(o>=0)q[o]=r.hA()
else A.d.cn(q,0,r.hA())
case 5:case 1:return B.h(u,v)}})
return B.i($async$NN,v)},
p0(){var w,v=this,u=v.at
if(u!=null)u.a9(0)
u=v.e
w=(u==null?null:C.kr(u.w))===!0?A.hW:A.lz
v.at=B.cM(w,new C.eqo(v))},
aXH(){var w,v=this,u=v.e
if(u==null)return
w=v.ax
w.push(new C.ae3(u.hA(),v.f,v.r))
if(w.length>40)A.d.cA(w,0)
A.d.a8(v.ay)},
cxk(){var w=this,v=w.ax
if(v.length===0||w.e==null)return
w.ay.push(new C.ae3(w.e.hA(),w.f,w.r))
w.m(new C.ere(w,v.pop()))
w.p0()},
cjb(){var w=this,v=w.ay
if(v.length===0||w.e==null)return
w.ax.push(new C.ae3(w.e.hA(),w.f,w.r))
w.m(new C.epe(w,v.pop()))
w.p0()},
nZ(){var w,v,u=this
if(u.e==null)return
w=A.d.bc(u.d,new C.er1(u))
if(w>=0){u.d[w]=u.e.hA()
u.d[w].f=new B.S(Date.now(),0,!1)}v=u.e
v.toString
v.f=new B.S(Date.now(),0,!1)},
WL(d){var w,v,u,t,s=this.gdq()
if(s==null)return null
for(w=s.z,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t}return null},
x7(){var w,v,u,t
for(w=this.ch,v=new B.dt(w,w.r,w.e);v.C();){u=v.d
u.S$=$.aw()
u.P$=0}w.a8(0)
for(w=this.CW,v=new B.dt(w,w.r,w.e);v.C();){u=v.d
t=u.ax
if(t!=null)t.bK(0)
u.h0()}w.a8(0)},
Jy(){var w,v,u,t,s,r,q,p,o,n,m,l=this.gdq()
if(l==null)return
w=l.z
v=B.T(w)
u=v.k("cQ<1,n>")
t=B.da(new B.cQ(new B.a2(w,new C.er2(),v.k("a2<1>")),new C.er3(),u),u.k("H.E"))
w=this.ch
v=B.a3(w).k("cz<1>")
v=B.B(new B.cz(w,v),v.k("H.E"))
u=v.length
s=this.CW
r=0
for(;r<v.length;v.length===u||(0,B.L)(v),++r){q=v[r]
if(!t.t(0,q)){p=w.W(0,q)
if(p!=null){p.S$=$.aw()
p.P$=0}p=s.W(0,q)
if(p!=null){o=p.ax
if(o!=null)o.bK(0)
p.h0()}}}for(v=l.z,u=v.length,r=0;r<v.length;v.length===u||(0,B.L)(v),++r){n=v[r]
if(n.b!==D.cQ)continue
p=n.a
m=w.ci(0,p,new C.er4(n))
s.ci(0,p,new C.er5())
p=m.a.a
o=n.r
if(p!==o)m.saV(0,o)}},
Hd(){var w,v,u=this
if(!u.db||u.e==null)return
w=u.db=!1
if(!A.d.b8(u.d,new C.ems(u))){v=u.e
if(v.w==="hati_kiapo_uongozi"){v=v.x
if(v==null)v=u.gO6()
w=u.dy.t(0,A.a.i(v).toLowerCase())}if(!w)A.d.cn(u.d,0,u.e.hA())}u.nZ()
u.p0()},
ahO(d,e){var w,v,u,t,s=this
if(s.jZ())return
w=s.WL(d)
if(w==null||w.r===e)return
w.r=e
v=s.e
u=(v==null?null:C.kr(v.w))===!0
if(u){C.hXC(w,e)
v=s.e
if((v==null?null:v.w==="marriage_agreement")===!0){t=s.gdq()
if(t!=null)C.hXD(t,w.d+w.f*0.5)}}s.Hd()
s.nZ()
s.p0()
if(u&&s.c!=null)s.m(new C.erf())},
cyn(d,e){var w=this,v=w.gdq()
if(v==null||v.a!==d||v.c===e)return
v.c=e
w.Hd()
w.nZ()
w.p0()},
gdq(){var w,v=this.e
if(v==null||v.r.length===0)return null
w=v.r
return w[A.o.D(this.f,0,w.length-1)]},
gq1(){var w,v,u,t,s,r,q=this,p=q.e,o=p==null?null:p.c
if(o==null)o="office_blue"
w=C.hVE(o)
if(w!=null)return w
v=q.gdq()
if(v==null){p=q.e
v=p!=null&&p.r.length!==0?A.d.gL(p.r):null}if(v!=null&&A.a.a0(o,"class_")){p=v.f
p=B.b0(p==null?v.e:p)
u=q.bVF(v)
t=q.bVE(v)
s=B.b0(v.e)
r=v.f
return new C.jA(o,"Class template",p,u,t,s,r==null?null:B.b0(r))}return C.hyD(o)},
bVF(d){var w,v,u,t,s
for(w=d.z,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u){t=w[u]
if(t.b===D.cQ)s=t.w>=28||A.o.D(A.o.an(t.x.a,100)-1,0,8)>=A.o.D(7,0,8)
else s=!1
if(s)return B.b0(t.Q)}return A.M},
bVE(d){var w,v,u,t
for(w=d.z,v=w.length,u=0;u<v;++u){t=w[u]
if(t.b===D.cQ&&t.w<28)return B.b0(t.Q)}return A.aK},
adN(d){var w=this,v=d.w
if(v==="hati_kiapo_uongozi"){if(!w.gaal()){w.c.I(x.q).f.R(D.eLV)
return}w.a9c(d)
w.aYT(C.bAg(d))
return}if(C.cck(v)){w.a9c(d)
w.aYT(d)
return}w.m(new C.eon(w,d))},
aq4(){var w,v,u,t,s,r,q=this
q.a1a(!0)
if(q.db){w=q.e
v=w==null
u=v?null:w.w
t=v?null:w.x
s=A.a.i(t==null?"":t)
r=!v&&C.kr(w.w)&&u!=="hati_kiapo_uongozi"&&s.length!==0
q.m(new C.emq(q))
if(r&&q.c!=null){u.toString
q.J8(u,s)}return}q.te()
q.m(new C.emr(q))},
aYS(d){this.a9c(d)
this.ZH(d,!0)},
a9c(d){if(!C.kr(d.w))return
C.fz_(d,this.d)},
ZH(d,e){return this.cai(d,e)},
aYT(d){return this.ZH(d,!1)},
cai(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$ZH=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:l={}
l.a=d
if(d.w==="hati_kiapo_uongozi"){s=l.a=C.bAg(d)
if(e){r=s.x
q=A.a.i(r==null?t.gO6():r)
t.dy.W(0,q.toLowerCase())
C.aos(t.a.c,q)}r=s}else r=d
w=C.cck(r.w)?3:4
break
case 3:w=5
return B.b(t.a9d(r),$async$ZH)
case 5:if(!g||t.c==null){w=1
break}case 4:p=A.d.b8(t.d,new C.eoK(l))
o=l.a.hA()
n=C.kr(o.w)&&C.hYO(o)
t.m(new C.eoL(t,o,p))
if(n){m=A.d.bc(t.d,new C.eoM(o))
if(m>=0){t.d[m]=o.hA()
t.te()}}if(!t.aaP(l.a))t.XT()
r=!1
if(t.c!=null)if(!t.aaP(l.a)){r=l.a
l=r.w==="hati_kiapo_uongozi"&&!t.apw(r)&&C.fv2(l.a)}else l=r
else l=r
if(l)t.c.I(x.q).f.R(D.eMu)
case 1:return B.h(u,v)}})
return B.i($async$ZH,v)},
a9d(d){return this.bKJ(d)},
bKJ(d){var w=0,v=B.j(x.y),u,t=this,s,r
var $async$a9d=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.a
if(r.d){u=!0
w=1
break}s=d.z
if(s===!0){u=!0
w=1
break}w=3
return B.b(B.la(r.c,A.yS),$async$a9d)
case 3:if(f){u=!0
w=1
break}r=t.c
r.toString
s=t.a
u=B.kN(!1,r,s.c,s.d,null,A.yS,null)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a9d,v)},
nR(){var w=0,v=B.j(x.y),u,t=this,s,r
var $async$nR=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.e
r=s==null
if(C.cck(r?null:s.w)){u=!0
w=1
break}if((r?null:s.w)==="hati_kiapo_uongozi"){u=!0
w=1
break}s=t.c
s.toString
r=t.a
u=C.cbJ(s,r.c,r.d)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$nR,v)},
adu(){var w=0,v=B.j(x.H),u,t=this,s
var $async$adu=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.c9(null,null,!1,null,new C.eom(),s,null,!0,!0,x.H),$async$adu)
case 3:if(t.c==null){w=1
break}t.aq4()
case 1:return B.h(u,v)}})
return B.i($async$adu,v)},
adt(){var w=0,v=B.j(x.H),u,t=this,s
var $async$adt=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.c9(null,null,!1,null,new C.eoj(),s,null,!0,!0,x.H),$async$adt)
case 3:if(t.c==null){w=1
break}t.m(new C.eok())
t.aq4()
case 1:return B.h(u,v)}})
return B.i($async$adt,v)},
XT(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$XT=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.aA(),$async$XT)
case 3:r=e
if(B.kb(J.q(r.a,"ngmy_marriage_hint_seen"))===!0){w=1
break}w=4
return B.b(r.ar("Bool","ngmy_marriage_hint_seen",!0),$async$XT)
case 4:s=t.c
if(s==null){w=1
break}s.I(x.q).f.R(D.eKy)
case 1:return B.h(u,v)}})
return B.i($async$XT,v)},
J8(d,e){return this.ckv(d,e)},
ckv(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$J8=B.e(function(f,g){if(f===1)return B.f(g,v)
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
return B.b(C.afn(s,t.gDZ(),t.gDY(),!0,e,t.d),$async$J8)
case 9:w=4
break
case 6:w=10
return B.b(C.afo(s,t.gDZ(),t.gDY(),!0,e,t.d),$async$J8)
case 10:w=4
break
case 7:w=11
return B.b(C.afp(s,t.gDZ(),t.gDY(),!0,e,t.d),$async$J8)
case 11:w=4
break
case 8:w=12
return B.b(C.afq(s,t.gDZ(),t.gDY(),!0,e,t.d),$async$J8)
case 12:w=4
break
case 4:case 1:return B.h(u,v)}})
return B.i($async$J8,v)},
bXb(){var w,v,u,t,s=this
if(!s.gaal()){s.c.I(x.q).f.R(D.eKL)
return}w=s.gO6()
v=s.a
u=v.d
t=!0
if(!u)if(!v.w){if(!v.x)if(v.r){v=A.a.i(v.z)
v=v.length!==0&&v.toLowerCase()===w.toLowerCase()}else v=!1
else v=t
t=v}v=s.c
v.toString
C.afm(u,t,v,new C.enC(s),new C.enD(s),w)},
adO(){var w=0,v=B.j(x.H),u=this,t,s
var $async$adO=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return B.b(B.bW(A.dD,null,new C.eot(u),s,!0,!0,!1,A.li,!1,!1,x.N),$async$adO)
case 2:t=e
if(t==="marriage_agreement"){s=u.c
s.toString
C.afq(s,u.gDZ(),u.gDY(),!1,null,u.d)}else if(t==="hati_kuhowa"){s=u.c
s.toString
C.afn(s,u.gDZ(),u.gDY(),!1,null,u.d)}else if(t==="hati_kuhoweya"){s=u.c
s.toString
C.afo(s,u.gDZ(),u.gDY(),!1,null,u.d)}else if(t==="hati_malipo_awamu"){s=u.c
s.toString
C.afp(s,u.gDZ(),u.gDY(),!1,null,u.d)}else if(t==="hati_kiapo_uongozi")u.bXb()
return B.h(null,v)}})
return B.i($async$adO,v)},
c9p(d,e){var w,v,u=this,t=null
if(u.e!=null)u.aXH()
w=C.cC()
v=C.B9(t,t,t,t,D.C8,5,!1,t,t,t,t,t,w,t,!1,t,d==null?"Untitled Presentation":d,t,t,t,"office_blue",t,!1,t)
u.m(new C.eou(u,v))},
a8E(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$a8E=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e==null||t.pY()){w=1
break}s=t.c
s.toString
w=3
return B.b(C.i2d(s),$async$a8E)
case 3:r=e
if(r==null||t.c==null||t.e==null){w=1
break}q=t.e
p=A.d.d9(q.r,new C.emu())
t.d1(new C.emv(t,p,q,r))
s=t.c.I(x.q).f
o=r.r.length
s.R(B.b2(null,null,null,null,null,A.q,null,B.d(p?"Your "+o+"-slide presentation is ready. The mic is green now \u2014 tap it to tell the AI what to change.":"Added "+o+" AI slides after this one. Tap the green mic to change them.",null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a8E,v)},
afL(d,e,f,g){var w=null,v=g?A.dq:A.bN,u=B.I(g?A.b5:A.cn,A.r,1)
return B.hp(B.aE(w,B.p(w,B.W(d,g?A.c:A.aK,w,w,w,18),A.f,w,w,new B.o(v,w,u,w,w,w,A.a6),w,34,w,w,w,w,w,34),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,A.a8),w,e,w,w)},
ZG(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$ZG=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:n=t.e
if(n==null||t.pY()){w=1
break}s=t.jD()
r=n.r
q=r.length
if(q===0||t.f>=q)p=B.a([],x.u)
else{r=r[t.f].z
q=B.T(r).k("a2<1>")
p=B.B(new B.a2(r,new C.eoF(),q),q.k("H.E"))}o=s!=null&&s.b===D.lh?B.a([s],x.u):p
if(o.length===0){t.c.I(x.q).f.R(D.eMF)
w=1
break}r=t.c
r.toString
w=3
return B.b(B.bW(A.K,null,new C.eoG(t,o),r,!0,!0,!0,null,!1,!1,x.H),$async$ZG)
case 3:case 1:return B.h(u,v)}})
return B.i($async$ZG,v)},
ae4(){return this.cah()},
cah(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$ae4=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p={}
o=t.e
if(o!=null){s=o.CW
s=(s==null?"":s).length===0||t.pY()}else s=!0
if(s){w=1
break}s=t.c
s.toString
w=3
return B.b(C.i2_(s,t.f+1,o),$async$ae4)
case 3:r=e
if(r==null||t.c==null||t.e!==o){w=1
break}s=o.cx
if(s==null)s=A.T
q=B.kx(s,B.T(s).c)
p.a=A.d.bc(o.r,new C.eoI(q))
t.d1(new C.eoJ(p,t,o,q,r))
t.c.I(x.q).f.R(D.eN3)
case 1:return B.h(u,v)}})
return B.i($async$ae4,v)},
aeb(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$aeb=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e==null||t.pY()||!t.zx()){w=1
break}s=t.gdq()
if(s==null){w=1
break}r=s.z
q=B.T(r).k("a2<1>")
p=B.B(new B.a2(r,new C.ep_(),q),q.k("H.E"))
if(p.length===0){t.c.I(x.q).f.R(D.eKj)
w=1
break}o=new B.K(p,new C.ep0(),B.T(p).k("K<1,N>")).fE(0,new C.ep1())
r=B.V(x.N,x.bO)
for(q=p.length,n=0;n<p.length;p.length===q||(0,B.L)(p),++n){m=p[n]
l=m.r
r.n(0,m.a,new B.ar(new B.bb(l,A.b2,A.aN),$.aw()))}q=t.c
q.toString
w=3
return B.b(B.bW(A.K,null,new C.ep2(t,p,o,r),q,!0,!0,!0,null,!1,!1,x.H),$async$aeb)
case 3:for(r=new B.dt(r,r.r,r.e);r.C();){q=r.d
q.S$=$.aw()
q.P$=0}if(t.c!=null)t.m(new C.ep3())
case 1:return B.h(u,v)}})
return B.i($async$aeb,v)},
adR(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$adR=B.e(function(d,e){if(d===1)return B.f(e,v)
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
return B.b(C.hha(s,new C.E1(r,q,p,o==null?"":o)),$async$adR)
case 3:n=e
if(n==null||t.c==null){w=1
break}t.d1(new C.eov(m,n))
s=t.c.I(x.q).f
r=n.a
if(r.length===0)r="No ending celebration."
else{r=C.afN(r)
r=B.t(r==null?null:r.b)+" will play after your last slide."}s.R(B.b2(null,null,null,null,null,A.q,null,B.d(r,null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$adR,v)},
a96(){return this.bK5()},
bK5(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$a96=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:m={}
l=t.e
if(l!=null){s=l.CW
s=(s==null?"":s).length===0||t.pY()}else s=!0
if(s){w=1
break}s=t.c
s.toString
w=3
return B.b(C.i2c(s,t.f+1,l),$async$a96)
case 3:r=e
q=$.fRj
$.fRj=!1
if(r==null||t.c==null||t.e!==l){w=1
break}if(r===l){t.d1(new C.emL())
t.c.I(x.q).f.R(D.eKa)
w=1
break}if(!q){s=r.CW
s=C.hg3(l,s==null?"":s,!1)}else s=!1
if(s){t.d1(new C.emM(t,l,r))
t.c.I(x.q).f.R(D.eNx)
w=1
break}s=l.cx
if(s==null)s=A.T
p=B.kx(s,B.T(s).c)
s=l.r
m.a=A.d.bc(s,new C.emN(p))
o=s.length
t.d1(new C.emO(m,t,l,p,r))
n=s.length-o
s=t.c.I(x.q).f
if(n>0){m=n===1?"":"s"
m="Done \u2014 added "+n+" slide"+m+". Undo brings back the old version."}else m="Done \u2014 your slides are updated. Undo brings back the old version."
s.R(B.b2(null,null,null,null,null,A.q,null,B.d(m,null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a96,v)},
aOv(d,e){if(e){this.aeE()
return}this.c9p(d,!1)},
bFP(){return this.aOv(null,!1)},
aeE(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$aeE=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.bW(A.bX,null,new C.ep9(t),r,!0,!0,!0,A.oR,!1,!1,x.N),$async$aeE)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.epa(t,C.hVD(s).ph()))
case 1:return B.h(u,v)}})
return B.i($async$aeE,v)},
d1(d){var w=this
if(w.pY())return
w.Hd()
w.aXH()
w.m(d)
w.Jy()
w.nZ()
w.p0()},
a77(){this.d1(new C.elp(this,D.mp))},
aPT(){var w=this.gdq()
if(w==null)return
this.d1(new C.emJ(this,w))},
aP5(){var w=this.e
if(w==null||w.r.length<=1)return
this.d1(new C.emH(this))},
b0N(d,e){if(this.e==null||d===e)return
this.d1(new C.epi(this,d,e))},
Nk(d){return this.bHN(d)},
bHN(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$Nk=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=d.w==="hati_kiapo_uongozi"?3:4
break
case 3:s=d.x
r=A.a.i(s==null?t.gO6():s)
w=5
return B.b(C.aoq(t.a.c,r),$async$Nk)
case 5:t.dy.K(0,r.toLowerCase())
case 4:s=d.a
C.apS(s)
w=6
return B.b(C.b_C(t.a.c,s),$async$Nk)
case 6:if(t.c==null){w=1
break}t.m(new C.emD(t,d))
w=7
return B.b(t.te(),$async$Nk)
case 7:case 1:return B.h(u,v)}})
return B.i($async$Nk,v)},
cks(d,e){var w=this
if(d.z){w.ahs()
return}w.m(new C.eph(w,d,e))
w.p0()},
jD(){var w,v,u,t,s,r=this.gdq()
if(r==null||this.r==null)return null
for(w=r.z,v=w.length,u=this.r,t=0;t<v;++t){s=w[t]
if(s.a===u)return s}return null},
VM(d){return this.ch.ci(0,d.a,new C.emt(d))},
arV(d){return this.CW.ci(0,d.a,new C.en4())},
a1a(d){var w,v,u,t=this,s=t.w
if(s!=null){w=t.WL(s)
v=t.ch.h(0,s)
if(w!=null&&v!=null&&v.a.a!==w.r)w.r=v.a.a}t.w=null
u=$.aT.ak$.d.c
if(u!=null)u.ju()},
b46(){return this.a1a(!0)},
a18(d){var w,v,u=this
if(u.pY())return
if(!u.zx())return
w=u.WL(d)
if(w==null||w.b!==D.cQ)return
v=A.a.i(w.r).toLowerCase()
if(v==="click to edit text"||v==="tap to edit text"||v==="double-tap to edit"){w.r=""
u.VM(w).saV(0,"")}u.m(new C.er_(u,d))
$.aT.x1$.push(new C.er0(u,d,w))},
b4C(d){var w=this
if(d.b===D.cQ&&!w.jZ()&&w.zx()){w.a18(d.a)
return}w.aye(d.a)},
aye(d){var w,v,u,t,s,r=this
if(r.jZ())return
w=r.r
if(w!=null&&w!==d){v=r.WL(w)
if(v!=null&&v.b===D.cQ){u=r.ch.h(0,w)
if(u!=null&&u.a.a!==v.r)v.r=u.a.a}}t=r.w
s=t!=null&&t!==d
r.m(new C.eqp(r,s,d))
if(s||d==null){t=$.aT.ak$.d.c
if(t!=null)t.ju()}},
aKO(){this.d1(new C.elq(this))},
oL(d){return this.bx0(d)},
bx0(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$oL=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(t.nR(),$async$oL)
case 3:s=f
if(!s){w=1
break}if(t.c==null){w=1
break}t.d1(new C.eln(t,d))
case 1:return B.h(u,v)}})
return B.i($async$oL,v)},
UV(){var w=0,v=B.j(x.H),u,t=this,s
var $async$UV=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A4.G4(78,1920),$async$UV)
case 3:s=e
if(s==null||t.gdq()==null){w=1
break}t.d1(new C.eld(t,s))
case 1:return B.h(u,v)}})
return B.i($async$UV,v)},
UP(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$UP=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.gdq()==null){w=1
break}w=3
return B.b(S.Cn(t.a.c),$async$UP)
case 3:s=e
if(t.c==null){w=1
break}r=J.a8(s)
if(r.gam(s)){t.c.I(x.q).f.R(D.eO6)
w=1
break}w=r.gM(s)===1?4:6
break
case 4:q=r.gL(s)
w=5
break
case 6:r=t.c
r.toString
w=7
return B.b(B.bW(null,null,new C.ela(s),r,!0,!0,!1,null,!1,!1,x.ei),$async$UP)
case 7:q=e
case 5:if(q==null||t.c==null||t.gdq()==null){w=1
break}t.d1(new C.elb(t,q))
case 1:return B.h(u,v)}})
return B.i($async$UP,v)},
aqU(){var w=this,v=w.r
if(v==null||w.gdq()==null)return
if(A.d.b8(w.gdq().z,new C.emF(v))){w.c.I(x.q).f.R(D.eN7)
return}if(w.w===v)w.a1a(!0)
w.d1(new C.emG(w,v))},
bE4(){var w=this.jD(),v=w==null
if((v?null:w.b)===D.f_)return"Tap a design shape, then pick a color to fill it."
if((v?null:w.b)===D.cQ)return"Selected text \u2014 color applies to this text box."
return"No selection \u2014 color applies to the slide background."},
aLv(d,e){var w=this,v=w.jD(),u=w.gdq(),t=w.e
if(t==null)return
w.d1(new C.elS(w,v,d,e,t,u))},
byC(d){return this.aLv(d,null)},
a7p(d){return this.byK(d)},
byK(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a7p=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=D.a5C.t(0,A.a.i(d.a))||t.Q
if(q){w=3
break}else f=q
w=4
break
case 3:w=5
return B.b(t.nR(),$async$a7p)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}s=t.jD()
if(s!=null){r=s.b
if(r===D.cQ)t.byC(s.w>=28||s.x.gdH(0)>=A.I.gdH(0)?d.d:d.e)
else if(r===D.f_){r=d.c
t.aLv(r.j(0.88),r)}w=1
break}t.d1(new C.elX(t,d))
case 1:return B.h(u,v)}})
return B.i($async$a7p,v)},
a7o(d){return this.byI(d)},
byI(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a7o=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=t.jD()
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
return B.b(t.nR(),$async$a7o)
case 7:f=!f
case 6:case 4:if(f){w=1
break}if(t.c==null){w=1
break}t.d1(new C.elV(t,s,d,q,r))
case 1:return B.h(u,v)}})
return B.i($async$a7o,v)},
bys(d){var w=this.gdq()
if(w==null)return
this.d1(new C.elR(this,w,d))},
ZM(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$ZM=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(C.i28(r),$async$ZM)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.nZ()
t.m(new C.eoU(t,s))
w=4
return B.b(t.te(),$async$ZM)
case 4:if(t.c!=null)t.adN(s)
case 1:return B.h(u,v)}})
return B.i($async$ZM,v)},
a8Z(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a8Z=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.e
if(q==null){w=1
break}t.a1a(!0)
t.nZ()
s=t.c
s.toString
w=3
return B.b(C.Ql(s,q),$async$a8Z)
case 3:r=e
s=t.c
if(s==null){w=1
break}s=s.I(x.q).f
s.R(B.b2(null,null,null,null,null,A.q,null,B.d(r==null?"Your video is ready. Check your downloads.":r,null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a8Z,v)},
D7(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$D7=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=r.e
if(m==null){w=1
break}r.nZ()
t=4
w=7
return B.b(C.aOw(m),$async$D7)
case 7:q=e
o=r.c
if(o==null){w=1
break}w=8
return B.b(C.aNW(o,q,m.b),$async$D7)
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
return B.i($async$D7,v)},
EM(d,e){return this.cwO(d,e)},
cwO(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$EM=B.e(function(f,a0){if(f===1)return B.f(a0,v)
for(;;)switch(w){case 0:h={}
if(t.pY()){w=1
break}s=d.w
if(!(s==="hati_kuhowa"||s==="hati_kuhoweya")){w=1
break}h.a=d
if(e){s=t.e
s=s!=null&&s.a===d.a}else s=!1
if(s){t.a1a(!0)
t.nZ()
s=h.a=t.e.hA()}else{r=A.d.bc(t.d,new C.er8(d))
s=h.a=r>=0?t.d[r].hA():d.hA()}s=s.w
q=s==null
p=C.hWB(q?"":s)
o=C.hf_(q?"":s)
if(p.length===0){w=1
break}s=t.d
q=B.T(s).k("a2<1>")
n=B.B(new B.a2(s,new C.er9(h,p),q),q.k("H.E"))
s=h.a.b
w=3
return B.b(t.cqa(n.length,o,s),$async$EM)
case 3:m=a0
if(m==null||t.c==null){w=1
break}h.b=null
h.c=!1
w=m==="new"?4:6
break
case 4:s=h.b=C.hWv(h.a)
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
return B.b(t.cq9(n,o),$async$EM)
case 10:a0=g.a=a0
w=8
break
case 9:a0=l
case 8:if(a0==null||t.c==null){w=1
break}k=A.d.iA(t.d,new C.era(s))
s=h.a.b
w=11
return B.b(t.cq7(k.b,s),$async$EM)
case 11:if(a0!==!0||t.c==null){w=1
break}s=h.b=k.hA()
case 5:j=C.hWA(s,h.a)
s=j.b
if(s===0&&j.a===0&&j.c===0){h=t.c
if(h==null){w=1
break}h.I(x.q).f.R(D.eOh)
w=1
break}w=12
return B.b(t.cq8(j.a,s,o,j.c),$async$EM)
case 12:i=a0
if(t.c==null){w=1
break}t.m(new C.erb(h,t,i))
t.p0()
case 1:return B.h(u,v)}})
return B.i($async$EM,v)},
cqa(d,e,f){var w=this.c
w.toString
return B.bW(A.K,null,new C.eqF(this,e,f,d),w,!0,!0,!0,null,!1,!1,x.N)},
cq9(d,e){var w=this.c
w.toString
return B.bW(A.K,null,new C.eqE(this,e,d),w,!0,!0,!0,null,!1,!1,x.N)},
cq7(d,e){var w=this.c
w.toString
return B.bW(A.K,null,new C.eqy(this,e,d),w,!0,!0,!0,null,!1,!1,x.y)},
cq8(d,e,f,g){var w=this.c
w.toString
return B.bW(A.K,null,new C.eqA(this,f,e,d,g),w,!0,!0,!0,null,!1,!1,x.y)},
aap(){var w=null
return B.av(B.p(w,w,A.f,w,w,new B.o(A.b5,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w)},
aaq(d,e,f,g){var w,v,u=null,t=B.m(16),s=B.aq(d,A.bX,0.35)
s.toString
s=B.a([d,s],x.O)
w=B.a([new B.ac(0,A.G,d.j(0.28),A.dk,18)],x.V)
v=x.p
return B.A(B.a([B.p(u,B.W(e,A.c,u,u,u,28),A.f,u,u,new B.o(u,u,u,t,w,new B.a7(A.ax,A.aD,A.x,s,u,u),A.n),u,54,u,u,u,u,u,54),A.eB,B.D(B.v(B.a([B.d(g,u,u,u,u,u,u,D.eYm,u,u,u),A.ao,B.d(f,u,u,u,u,u,u,B.l(u,u,A.c.j(0.58),u,u,u,u,u,u,u,u,13.5,u,u,A.a4,u,1.35,!0,u,u,u,u,u,u,u,u),u,u,u)],v),A.F,u,A.e,A.j,0,A.p),1)],v),A.F,u,A.e,A.j,0,u,u)},
aT5(d,e){var w=null,v=e.j(0.14),u=B.m(12),t=B.I(e.j(0.22),A.r,1)
return B.p(w,B.d(d,w,2,A.a2,w,w,w,A.T0,A.L,w,w),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.bR,w,w,w)},
aT8(d,e,f,g,h,i,j){var w=null,v=B.m(16),u=B.m(16),t=g?new B.a7(A.ax,A.aD,A.x,B.a([d.j(0.22),d.j(0.08)],x.O),w,w):w,s=g?w:A.c.j(0.05),r=B.I(g?d.j(0.45):A.c.j(0.08),A.r,1),q=d.j(g?0.22:0.14),p=B.m(13),o=x.p
return B.aF(!1,A.a1,!0,w,B.aK(!1,v,!0,B.p(w,B.A(B.a([B.p(w,B.W(f,d,w,w,w,22),A.f,w,w,new B.o(q,w,w,p,w,w,A.n),w,44,w,w,w,w,w,44),A.bf,B.D(B.v(B.a([B.d(i,w,w,w,w,w,w,A.nh,w,w,w),A.cZ,B.d(h,w,w,w,w,w,w,B.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,12.5,w,w,A.a4,w,1.25,!0,w,w,w,w,w,w,w,w),w,w,w)],o),A.F,w,A.e,A.j,0,A.p),1),B.W(A.B5,A.c.j(0.35),w,w,w,14)],o),A.m,w,A.e,A.j,0,w,w),A.f,w,w,new B.o(s,w,r,u,w,t,A.n),w,w,w,w,A.bB,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eny(e,j),w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.af)},
bUC(d,e,f,g,h,i){return this.aT8(d,e,f,!1,g,h,i)},
atf(d,e){var w=null,v=A.c.j(0.05),u=B.m(14),t=B.I(A.c.j(0.08),A.r,1)
return B.p(w,B.v(B.a([B.d(e,w,w,w,w,w,w,A.du,w,w,w),A.bA,B.d(d,w,w,w,w,w,w,B.l(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,11,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.Ya,w,w,w)},
aT7(d,e,f){var w=null,v=B.bk(A.c.j(0.08),w,w,w,A.c,w,A.cf,w,new B.b7(B.m(14),A.Y),w,w,w)
return B.bJ(B.d(e,w,w,w,w,w,w,A.nf,w,w,w),new C.enx(d,f),v)},
aT6(d,e){return this.aT7(d,e,null)},
Jp(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$Jp=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
s=t.a
w=3
return B.b(B.oW(l,s.c,s.d),$async$Jp)
case 3:if(!e||t.c==null){w=1
break}r=t.e
if(r==null){w=1
break}l=r.b
l=l+"\n"+A.a.aF("=",l.length)+"\n\n"
q=new B.fc(l)
for(s=r.r,p=0;p<s.length;){o=s[p];++p
n=o.b
if(n.length===0)n="(untitled)"
q.a=l+("Slide "+p+": "+n+"\n")
for(l=A.d.gag(o.z),n=new B.fx(l,new C.eqq());n.C();){m=l.gU(0).r
if(A.a.i(m).length!==0){m="  \u2022 "+B.aJ(m,"\n"," ")+"\n"
q.a+=m}}l=o.c
if(A.a.i(l).length!==0)q.a+="  Notes: "+l+"\n"
l=q.a+="\n"}w=4
return B.b(B.a8U(l.charCodeAt(0)==0?l:l,r.b),$async$Jp)
case 4:l=t.a
w=5
return B.b(B.oV(l.c,l.d),$async$Jp)
case 5:case 1:return B.h(u,v)}})
return B.i($async$Jp,v)},
Hz(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$Hz=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.c
q.toString
s=t.a
w=3
return B.b(B.oW(q,s.c,s.d),$async$Hz)
case 3:if(!e||t.c==null){w=1
break}r=t.e
if(r==null){w=1
break}w=4
return B.b(B.a8U(A.R.ao(r.ae(),null),r.b+".json"),$async$Hz)
case 4:q=t.a
w=5
return B.b(B.oV(q.c,q.d),$async$Hz)
case 5:case 1:return B.h(u,v)}})
return B.i($async$Hz,v)},
b3U(){var w,v,u=this,t=u.e
if(t==null||t.r.length===0)return
u.nZ()
u.te()
w=u.c
w.toString
v=B.ej(new C.eqZ(u,t),!1,null,x.z)
B.a5(w,!1).ce(v)},
GM(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$GM=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.nR(),$async$GM)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}w=4
return B.b(C.fzc(),$async$GM)
case 4:s=e
if(s==null||t.e==null||t.c==null){w=1
break}r=C.hZn(s.a)
q=t.c
q.toString
w=5
return B.b(B.bW(A.aA,null,new C.eli(s,r),q,!0,!0,!1,null,!1,!1,x.N),$async$GM)
case 5:p=e
if(p==null){w=1
break}if(p==="scroll"){t.d1(new C.elj(t,s))
w=1
break}if(p==="split")t.d1(new C.elk(t,r,s))
case 1:return B.h(u,v)}})
return B.i($async$GM,v)},
MG(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$MG=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.pY()){w=1
break}w=3
return B.b(t.nR(),$async$MG)
case 3:if(!e){w=1
break}s=t.c
if(s==null){w=1
break}w=4
return B.b(C.aOv(s,null,null),$async$MG)
case 4:r=e
if(r==null||t.gdq()==null){w=1
break}t.d1(new C.elo(t,r))
case 1:return B.h(u,v)}})
return B.i($async$MG,v)},
b0A(d){var w=this.e
if(w==null||!C.kr(w.w)||w.as!=null)return
w.as=d.b
w.at=d.c.l()},
aMN(){var w,v,u,t,s=this.c
s.toString
w=this.e
v=w==null
u=v?null:w.as
t=v?null:w.at
return C.aOv(s,t==null?null:B.b0(t),u)},
a75(d){return this.bwS(d)},
bwS(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a75=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.pY()){w=1
break}if(!t.zx()){s=t.c
if(s==null){w=1
break}s.I(x.q).f.R(D.eOw)
w=1
break}w=3
return B.b(t.aMN(),$async$a75)
case 3:r=f
if(r==null||t.gdq()==null){w=1
break}t.d1(new C.elf(t,r,d))
case 1:return B.h(u,v)}})
return B.i($async$a75,v)},
afo(d){return this.cje(d)},
cje(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$afo=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.pY()){w=1
break}if(!t.zx()){s=t.c
if(s==null){w=1
break}s.I(x.q).f.R(D.eNF)
w=1
break}w=3
return B.b(t.aMN(),$async$afo)
case 3:r=f
if(r==null||t.gdq()==null){w=1
break}t.d1(new C.epf(t,r,d))
case 1:return B.h(u,v)}})
return B.i($async$afo,v)},
c66(){var w,v,u=this
if(u.jZ())return
w=new B.S(Date.now(),0,!1)
v=u.fx
v=v!=null&&w.by(v).a<=5e5?++u.fr:u.fr=1
u.fx=w
if(v>=3){u.fr=0
u.fx=null
u.cvQ()}},
cvQ(){var w,v,u,t,s,r=this.gdq()
if(r==null)return
v=r.z
u=v.length
t=0
for(;;){if(!(t<u)){w=null
break}s=v[t]
if(s.db==="marriage_locked_nim_akuna_deni"){w=s
break}++t}if(w==null)return
this.d1(new C.er6(this,r,(A.o.aA(w.Q,24)&255)===0||A.a.i(w.r).length===0))},
bUX(){var w,v,u,t,s,r=this.gdq()
if(r==null)return
for(w=r.z,v=w.length,u=null,t=0;t<v;++t){s=w[t]
if(s.db==="marriage_locked_nim_n_4")u=s}if(u==null)return
this.d1(new C.enB(this,r,u.d))},
bZs(d){var w
if(this.jZ())return!1
w=this.e
if((w==null?null:C.kr(w.w))!==!0)return!0
w=d.db
if(w==="marriage_locked"||A.a.a0(w,"marriage_locked_"))return!1
if(A.a.a0(w,"marriage_field_"))return!1
if(C.fvO(d))return!1
w=d.db
if(w==="__kiapo_video__"||A.a.a0(w,"__kiapo_video___"))return!1
if(d.b===D.kP&&A.a.a0(w,"marriage_sign_"))return!1
return!1},
bZt(d){var w
if(this.jZ())return!1
w=this.e
if((w==null?null:C.kr(w.w))!==!0)return!0
if(!this.zx())return!1
w=d.db
if(w==="marriage_locked"||A.a.a0(w,"marriage_locked_"))return!1
if(C.fvO(d))return!1
w=d.db
if(w==="__kiapo_video__"||A.a.a0(w,"__kiapo_video___"))return!1
if(d.b===D.kP&&A.a.a0(w,"marriage_sign_"))return!1
return A.a.a0(w,"marriage_field_")},
MP(d){return this.bz9(d)},
bz9(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$MP=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.pY()){w=1
break}if(!t.zx()){s=t.c
if(s==null){w=1
break}s.I(x.q).f.R(D.eMv)
w=1
break}r=t.e
s=r==null
q=s?null:r.x
p=A.a.i(q==null?"":q)
if(s||p.length===0){w=1
break}w=3
return B.b(C.aou(p),$async$MP)
case 3:o=f
s=t.c
if(s==null){w=1
break}if(o==null||A.a.i(o).length===0){s.I(x.q).f.R(D.eN9)
w=1
break}s=t.e
if(s!==r){s=s==null?null:s.a
s=s!==r.a}else s=!1
if(s){s=r.r
n=s.length===0?null:A.d.gL(s)
if(n!=null)for(s=n.z,q=s.length,m=0;m<q;++m){l=s[m]
k=l.db
if(k==="__kiapo_video__"||A.a.a0(k,"__kiapo_video___")){l.at=o
l.db="__kiapo_video__"}}C.a6k(r)
w=1
break}t.m(new C.em0(t,d,o))
t.nZ()
$.aT.x1$.push(new C.em1(t))
case 1:return B.h(u,v)}})
return B.i($async$MP,v)},
UT(){var w=0,v=B.j(x.H),u,t=this,s
var $async$UT=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.nR(),$async$UT)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}w=4
return B.b(C.bAX(),$async$UT)
case 4:s=e
if(s==null||t.gdq()==null){w=1
break}t.d1(new C.elc(t,s))
case 1:return B.h(u,v)}})
return B.i($async$UT,v)},
Ny(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$Ny=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.nR(),$async$Ny)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}s=t.jD()
if(s==null||s.at==null){w=1
break}r=s.at
r.toString
w=4
return B.b(C.fz3(r),$async$Ny)
case 4:q=e
if(q==null){w=1
break}t.d1(new C.en2(s,q))
case 1:return B.h(u,v)}})
return B.i($async$Ny,v)},
iL(d){this.d1(new C.ell(this,d))},
pN(d){return this.byl(d)},
byl(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$pN=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)A:switch(w){case 0:if(d!=="print"&&d!=="present"&&t.pY()){w=1
break}m=!D.aLw.t(0,A.a.i(d))
if(m){w=3
break}else f=m
w=4
break
case 3:w=5
return B.b(t.nR(),$async$pN)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}switch(d){case"upload_pdf":t.GM()
w=1
break A
case"sign_paper":t.MG()
w=1
break A
case"hd_photo":t.UT()
w=1
break A
case"sharpen":t.Ny()
w=1
break A
case"print":t.D7()
w=1
break A
case"rotate":s=t.jD()
if(s!=null)t.d1(new C.elu(s))
w=1
break A
case"text_box":t.aKO()
w=1
break A
case"picture":t.UV()
w=1
break A
case"present":t.b3U()
w=1
break A
case"new_slide":t.a77()
w=1
break A
case"export_json":t.Hz()
w=1
break A
case"outline_share":t.Jp()
w=1
break A
case"flashcard_tool":t.uU(D.Hl)
w=1
break A
case"quiz_tool":t.uU(D.Hm)
w=1
break A
case"worksheet_tool":t.uU(D.Hn)
w=1
break A
case"duplicate_el":s=t.jD()
if(s==null){w=1
break A}t.d1(new C.elv(t,s))
w=1
break A
case"delete_el":t.aqU()
w=1
break A
case"bring_fwd":s=t.jD()
if(s==null||t.gdq()==null){w=1
break A}t.d1(new C.elw(t,s))
w=1
break A
case"send_back":s=t.jD()
if(s==null||t.gdq()==null){w=1
break A}t.d1(new C.elH(t,s))
w=1
break A
case"align_left":s=t.jD()
if(s!=null)t.d1(new C.elK(s))
w=1
break A
case"align_center":s=t.jD()
if(s!=null)t.d1(new C.elL(s))
w=1
break A
case"align_right":s=t.jD()
if(s!=null)t.d1(new C.elM(s))
w=1
break A
case"grayscale":case"brighten":t.Ny()
w=1
break A
case"flip_h":s=t.jD()
if(s!=null)t.d1(new C.elN(s))
w=1
break A
case"flip_v":s=t.jD()
if(s!=null)t.d1(new C.elO(s))
w=1
break A
case"rectangle":t.oL(D.be)
w=1
break A
case"circle":t.oL(D.eI)
w=1
break A
case"triangle":t.oL(D.jy)
w=1
break A
case"arrow":t.oL(D.Ca)
w=1
break A
case"line":case"divider":t.oL(D.fp)
w=1
break A
case"word_count":r=t.gdq()
if(r==null){w=1
break A}for(q=A.d.gag(r.z),p=new B.fx(q,new C.elP()),o=0;p.C();){n=A.a.fw(A.a.i(q.gU(0).r),B.af("\\s+",!0,!1,!1,!1))
o+=new B.a2(n,new C.elQ(),B.T(n).k("a2<1>")).gM(0)}t.c.I(x.q).f.R(B.b2(null,null,null,null,null,A.q,null,B.d(""+o+" words on this slide",null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
w=1
break A
case"title":q=C.cC()
t.iL(C.iR(A.L,!1,t.gq1().d.l(),A.aC,40,A.bk,A.u,0.18,q,"Presentation Title",0,D.mq,0.8,0.1,0.28))
w=1
break A
case"subtitle":q=C.cC()
t.iL(C.iR(A.L,!1,t.gq1().e.l(),A.aC,22,A.bk,A.a4,0.12,q,"Subtitle goes here",0,D.dd,0.8,0.1,0.48))
w=1
break A
case"bullets":t.iL(C.iR(A.bg,!0,4279310375,A.aC,20,A.bk,A.a4,0.5,C.cC(),"\u2022 First point\n\u2022 Second point\n\u2022 Third point",0,D.u0,0.8,0.1,0.22))
w=1
break A
case"numbered":t.iL(C.iR(A.bg,!1,4279310375,A.aC,20,A.bk,A.a4,0.5,C.cC(),"1. First item\n2. Second item\n3. Third item",0,D.u_,0.8,0.1,0.22))
w=1
break A
case"quote":t.iL(C.iR(A.L,!1,4279310375,A.aC,24,A.cD,A.a4,0.25,C.cC(),'"Insert meaningful quote here."',0,D.dd,0.8,0.1,0.3))
w=1
break A
case"citation":t.iL(C.iR(A.bg,!1,4284773515,A.aC,14,A.bk,A.a4,0.1,C.cC(),"Author, Title (Year). Publisher.",0,D.u0,0.8,0.1,0.78))
w=1
break A
case"date_stamp":t.iL(C.iR(A.dK,!1,4279310375,A.aC,14,A.bk,A.a4,0.08,C.cC(),C.bAZ(),0,D.dd,0.24,0.72,0.04))
w=1
break A
case"page_number":t.iL(C.iR(A.dK,!1,4279310375,A.aC,13,A.bk,A.a4,0.06,C.cC(),"Page "+(t.f+1),0,D.dd,0.18,0.78,0.9))
w=1
break A
case"header_bar":t.d1(new C.elx(t))
w=1
break A
case"footer_bar":t.d1(new C.ely(t))
w=1
break A
case"highlight":t.d1(new C.elz(t))
w=1
break A
case"redact":t.d1(new C.elA(t))
w=1
break A
case"callout":t.d1(new C.elB(t))
w=1
break A
case"checkboxes":t.iL(C.iR(A.bg,!1,4279310375,A.aC,20,A.bk,A.a4,0.45,C.cC(),"\u2610 Task one\n\u2610 Task two\n\u2610 Task three",0,D.dd,0.8,0.1,0.2))
w=1
break A
case"table":t.iL(C.iR(A.bg,!1,4279310375,A.aC,16,A.bk,A.a4,0.55,C.cC(),"Column A\tColumn B\tColumn C\nRow 1\tData\tData\nRow 2\tData\tData",0,D.dd,0.8,0.1,0.18))
w=1
break A
case"memo":t.d1(new C.elC(t))
w=1
break A
case"letter":t.iL(C.iR(A.bg,!1,4279179050,A.aC,17,A.bk,A.a4,0.82,C.cC(),C.bAZ()+"\n\nDear [Name],\n\n[Letter body]\n\nSincerely,\n[Your name]",0,D.dd,0.8,0.1,0.08))
w=1
break A
case"agenda":t.iL(C.iR(A.bg,!1,4279310375,A.aC,22,A.bk,A.O,0.76,C.cC(),"AGENDA\n\n1. Welcome\n2. Updates\n3. Discussion\n4. Action items\n5. Next steps",0,D.u0,0.8,0.1,0.12))
w=1
break A
case"toc":t.iL(C.iR(A.bg,!1,4279310375,A.aC,18,A.bk,A.a4,0.76,C.cC(),"TABLE OF CONTENTS\n\n1. Introduction .......... 1\n2. Main topic .......... 3\n3. Conclusion .......... 8",0,D.dd,0.8,0.1,0.12))
w=1
break A
case"sig_line":t.iL(C.iR(A.bg,!1,4279310375,A.aC,16,A.bk,A.a4,0.08,C.cC(),"Signature: _________________________",0,D.dd,0.8,0.1,0.78))
w=1
break A
case"initial_line":t.iL(C.iR(A.bg,!1,4279310375,A.aC,16,A.bk,A.a4,0.08,C.cC(),"Initials: ______",0,D.dd,0.3,0.65,0.78))
w=1
break A
case"approved":t.iL(C.iR(A.L,!1,4278556265,A.aC,28,A.bk,A.u,0.12,C.cC(),"APPROVED",0,D.mq,0.32,0.62,0.08))
w=1
break A
case"draft":t.iL(C.iR(A.L,!1,4292617766,A.aC,28,A.bk,A.u,0.12,C.cC(),"DRAFT",0,D.dd,0.32,0.62,0.08))
w=1
break A
case"confidential":t.iL(C.iR(A.L,!1,871318596,A.aC,36,A.bk,A.u,0.12,C.cC(),"CONFIDENTIAL",0,D.dd,0.8,0.1,0.42))
w=1
break A
case"sticky":t.d1(new C.elD(t))
w=1
break A
case"progress":t.d1(new C.elE(t))
w=1
break A
case"stars":t.iL(C.iR(A.L,!1,4279310375,A.aC,36,A.bk,A.a4,0.12,C.cC(),"\u2605\u2605\u2605\u2605\u2606",0,D.pT,0.8,0.1,0.4))
w=1
break A
case"equation":t.iL(C.iR(A.L,!1,4279310375,A.aC,32,A.bk,A.O,0.14,C.cC(),"y = mx + b",0,D.dd,0.8,0.1,0.38))
w=1
break A
case"timeline":t.iL(C.iR(A.L,!1,4279310375,A.aC,18,A.bk,A.a4,0.2,C.cC(),"2024 \u2500\u2500\u25ba 2025 \u2500\u2500\u25ba 2026\nPhase 1    Phase 2    Phase 3",0,D.u_,0.8,0.1,0.35))
w=1
break A
case"two_col":t.d1(new C.elF(t))
w=1
break A
case"compare":t.d1(new C.elG(t))
w=1
break A
case"link_text":t.iL(C.iR(A.bg,!1,4280640491,A.mu,16,A.bk,A.a4,0.1,C.cC(),"https://example.com",0,D.dd,0.8,0.1,0.5))
w=1
break A
case"phone":t.iL(C.iR(A.bg,!1,4279310375,A.aC,18,A.bk,A.a4,0.1,C.cC(),"(555) 123-4567",0,D.dd,0.8,0.1,0.5))
w=1
break A
case"email":t.iL(C.iR(A.bg,!1,4280640491,A.aC,18,A.bk,A.a4,0.1,C.cC(),"name@email.com",0,D.dd,0.8,0.1,0.5))
w=1
break A
case"qr_placeholder":t.d1(new C.elI(t))
w=1
break A
case"cover_page":r=t.gdq()
if(r==null){w=1
break A}t.d1(new C.elJ(t,r))
w=1
break A
case"invoice":t.iL(C.iR(A.bg,!1,4279179050,A.aC,16,A.bk,A.a4,0.84,C.cC(),"INVOICE #001\n\nBill To:\nItem\tQty\tPrice\nService A\t1\t$100\nTOTAL\t\t$100",0,D.dd,0.8,0.1,0.08))
w=1
break A
case"resume":t.iL(C.iR(A.bg,!1,4279179050,A.aC,17,A.bk,A.a4,0.84,C.cC(),"YOUR NAME\nJob Title\n\nExperience\n\u2022 Role at Company\n\nEducation\n\u2022 Degree",0,D.dd,0.8,0.1,0.08))
w=1
break A
case"minutes":t.iL(C.iR(A.bg,!1,4279310375,A.aC,16,A.bk,A.a4,0.88,C.cC(),"MEETING MINUTES\nDate: "+C.bAZ()+"\nAttendees:\n\nDiscussion:\n\nDecisions:\n\nAction items:",0,D.dd,0.8,0.1,0.06))
w=1
break A
case"lab_report":t.iL(C.iR(A.bg,!1,4279310375,A.aC,17,A.bk,A.a4,0.88,C.cC(),"LAB REPORT\n\nHypothesis:\n\nProcedure:\n\nResults:\n\nConclusion:",0,D.dd,0.8,0.1,0.06))
w=1
break A
case"rubric":t.iL(C.iR(A.bg,!1,4279310375,A.aC,15,A.bk,A.a4,0.8,C.cC(),"RUBRIC\nCriteria\tExcellent\tGood\tNeeds work\nContent\t4\t3\t2\nOrganization\t4\t3\t2",0,D.dd,0.8,0.1,0.1))
w=1
break A}case 1:return B.h(u,v)}})
return B.i($async$pN,v)},
cpC(d){if(!this.y)return!1
if(this.w!=null)return!1
if(!d)return!0
return!D.eFp.t(0,this.z)},
cpB(d){if(this.jD()==null)return!1
if(this.w!=null)return!1
if(d)return!1
return this.as},
b5r(d,e,f,g,h,i){var w,v,u,t,s,r,q,p=null,o=d===D.cg,n=o?12:10
if(e)w=f.j(0.25)
else w=g?A.c.j(0.06):A.w.j(0.04)
v=B.m(12)
u=e?f:A.bF
u=B.I(u,A.r,o&&e?2:1)
t=C.hZc(d)
s=o?12:18
r=o?A.I:A.cN
if(o)if(e)q=f
else q=g?A.ad:A.ak
else q=p
n=B.a([B.p(p,B.d(t,p,p,p,p,p,p,B.l(p,p,q,p,p,p,p,p,p,p,p,s,p,p,r,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),A.f,p,p,new B.o(w,p,u,v,p,p,A.n),p,p,p,p,new B.Q(n,8,n,8),p,p,p)],x.p)
if(i)n.push(B.ao(p,B.p(p,D.Nc,A.f,p,p,D.Dq,p,12,p,p,p,p,p,12),p,p,p,-2,-2,p))
return new B.C(A.fx,B.aE(p,new B.an(A.W,p,A.aa,A.f,n,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,h,p,p,p,p,p,p,!1,A.a8),p)},
bKl(d){var w,v=null,u=this.jD()
if(u==null)return A.bH
w=B.a([A.ab,B.d("Anim:",v,v,v,v,v,v,B.l(v,v,d?A.az:A.ak,v,v,v,v,v,v,v,v,10,v,v,A.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.bp],x.p)
A.d.v(w,new B.K(D.PE,new C.en1(this,u,d),x.bR))
return B.A(w,A.m,v,A.e,A.j,0,v,v)},
uU(d){return this.bx_(d)},
bx_(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$uU=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=D.aLr.t(0,d)
if(s){w=3
break}else f=s
w=4
break
case 3:w=5
return B.b(t.nR(),$async$uU)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}t.d1(new C.elm(t,d))
case 1:return B.h(u,v)}})
return B.i($async$uU,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
if(h.x)return D.eEb
w=h.e
if(w==null)return h.bAP()
v=h.gdq()
v.toString
u=h.c
u.toString
t=B.O(u).ax.a===A.H
u=h.c
u.toString
s=x.w
r=B.aI(u,A.bS,s).w.a.a<900
q=!r
u=h.c
u.toString
p=B.aI(u,A.eD,s).w.f.d>40
s=h.w==null
o=!s
u=!p
n=!u||o
m=t?A.bX:D.b7Z
l=x.p
k=B.a([],l)
if(s){j=h.e
j=j!=null&&j.gRw()}else j=!1
if(j)k.push(new C.a6P(h.a.c,!1,h.e.gb7D(),h.gc63(),g))
else if(s&&h.e!=null&&!h.jZ()&&C.cck(h.e.w)){j=h.a
k.push(new C.a6P(j.c,j.d,g,h.gc7c(),g))}if(s)k.push(h.bKh(w,t,r))
if(s&&h.jZ()){w=t?A.fm:A.kb
j=B.m(14)
i=B.I(A.bi.j(0.35),A.r,1)
k.push(B.p(g,B.A(B.a([D.bI1,A.ab,B.D(B.d("Received copy \u2014 view, print, or download only. Editing is turned off.",g,g,g,g,g,g,B.l(g,g,t?A.c:A.fm,g,g,g,g,g,g,g,g,12,g,g,A.O,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),1)],l),A.m,g,A.e,A.j,0,g,g),A.f,g,g,new B.o(w,g,i,j,g,g,A.n),g,g,g,A.AA,A.iO,g,g,g))}w=!n
if(w&&!h.jZ())k.push(h.c_o(t,r))
if(w&&h.jZ())k.push(h.cwP(t))
if(r&&h.jD()!=null&&w&&!h.jZ())k.push(h.c_k(t))
j=B.a([],l)
if(q&&w)j.push(new B.a6(132,g,h.b3p(t,!0),g))
i=B.a([],l)
if(r&&w)i.push(new B.a6(g,72,h.b3p(t,!1),g))
i.push(B.D(new B.bI(A.b0,g,g,h.bC5(v,t,!s||p),g),1))
if(h.cpC(r)&&u&&s&&!h.jZ())i.push(h.c5S(v,t,r))
j.push(B.D(B.v(i,A.m,g,A.e,A.j,0,A.p),1))
if(q&&!h.jZ()&&h.cpB(!1))j.push(new B.a6(240,g,h.bMQ(t),g))
k.push(B.D(B.A(j,A.aj,g,A.e,A.j,0,g,g),1))
if(u&&s)k.push(new B.a6(g,r?72:h.a.e,g,g))
w=B.a([B.v(k,A.m,g,A.e,A.j,0,A.p)],l)
if(o&&r)w.push(h.c_l(t))
return B.cb(g,m,B.bn(!1,new B.an(A.W,g,A.aa,A.q,w,g),!0,!1,A.ag,!0,!0),g,!1,!1,g,!1)},
bAP(){var w,v,u,t,s,r=this,q=null,p=r.c
p.toString
w=B.O(p).ax.a===A.H
p=w?A.bX:A.bN
v=r.a.e
u=r.c57(A.bi,A.pz,new C.em4(r),r.gc9m(),"School & document toolkit \u2014 edit PDFs, photos, sign papers, present, and build class decks","NGMY SLIDES")
t=x.p
s=B.A(B.a([B.D(r.aKx(A.bi,A.hw,"Blank Presentation",new C.em5(r)),1),A.aw,B.D(r.aKx(A.aZ,A.xY,"Class Template",new C.em6(r)),1)],t),A.m,q,A.e,A.j,0,q,q)
u=B.a([u,A.bv,s,A.mt,B.d("YOUR PRESENTATIONS",q,q,q,q,q,q,B.l(q,q,w?A.az:A.ak,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1.2,q,q,q,q,q,q),q,q,q),A.ac],t)
t=r.d
if(t.length===0)u.push(r.bxO(w))
else{t=new B.hX(t,B.T(t).k("hX<1>"))
A.d.v(u,t.gdL(t).dt(0,new C.em7(r,w),x.l))}return B.cb(q,p,B.bn(!1,B.cB(u,q,new B.Q(18,12,18,v),q,q,A.ai,!1),!0,!1,A.ag,!0,!0),q,!1,!1,q,q)},
bIB(){this.m(new C.emI(this))
var w=this.c
w.toString
if(B.aI(w,A.bS,x.w).w.a.a<900){w=$.aT.ak$.d.c
if(w!=null)w.ju()}},
ae5(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$ae5=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.jD()==null){w=1
break}s=t.c
s.toString
s=B.O(s)
r=t.c
r.toString
w=3
return B.b(B.bW(A.K,null,new C.eoT(t,s.ax.a===A.H),r,!0,!0,!0,null,!1,!1,x.H),$async$ae5)
case 3:case 1:return B.h(u,v)}})
return B.i($async$ae5,v)},
Au(d,e){return this.cpY(d,e)},
cpY(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$Au=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:j=r.c
j.toString
w=3
return B.b(B.hR(D.VK,!0,"Dismiss",j,new C.eqr(),new C.eqs(d,e),A.it,!0,x.N),$async$Au)
case 3:o=g
if(o==null||r.c==null){w=1
break}j=o==="rename"
if(j||o==="duplicate")if(d.z){r.ahs()
w=1
break}n=o==="transfer_hati"
if(n&&d.z&&!d.gRw()){r.ahs()
w=1
break}w=o==="pdf"?4:6
break
case 4:t=8
w=11
return B.b(C.aOw(d),$async$Au)
case 11:q=g
j=r.c
if(j==null){w=1
break}w=12
return B.b(C.aNW(j,q,d.b),$async$Au)
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
return B.b(r.EM(d,!1),$async$Au)
case 16:w=14
break
case 15:w=o==="delete"?17:19
break
case 17:j=r.c
j.toString
w=20
return B.b(B.hR(D.VK,!0,"Dismiss",j,new C.eqt(),new C.equ(d),A.a1,!0,x.y),$async$Au)
case 20:if(g===!0)r.Nk(d)
w=18
break
case 19:w=j?21:23
break
case 21:w=24
return B.b(r.af8("Rename presentation",d.b),$async$Au)
case 24:l=g
if(l!=null)r.cks(d,l)
w=22
break
case 23:if(o==="duplicate"){k=d.ae()
k.n(0,"id",C.cC())
k.n(0,"name",d.b+" (Copy)")
r.m(new C.eqv(r,k))
r.p0()}case 22:case 18:case 14:case 5:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Au,v)},
aZx(d,e){var w=null
return B.bK(!1,D.flm,w,w,!0,w,w,e,w,B.fu(w,w,w,w,w,w,w,w,w,w,w,A.bi,w,w,w,A.au,w,A.lA,w,w,w,w,w,A.kj,w,w))},
bxO(d){var w=this.fy
w===$&&B.c()
return B.c6(w,new C.elr(this,d),null)},
bGJ(d,e,f){var w=new B.K(B.a(d.split(" \u2022 "),x.s),new C.emw(),x.dv).bZ(0,new C.emx()),v=B.B(w,w.$ti.k("H.E"))
return new B.C(G.afx,this.aL5(v,e,new C.emy(),f),null)},
aL5(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=x.p,l=B.a([],m)
for(w=f!=null,v=0;v<d.length;++v){u=B.a([],m)
if(v>0)u.push(A.ea)
t=e.j(g?0.14:0.1)
s=new B.aV(6,6)
r=new B.az(e.j(g?0.55:0.45),1,A.r,-1)
q=B.a([],m)
if(w){p=f.$1(d[v])
A.d.v(q,B.a([B.W(p,g?A.ad:A.bw,n,n,n,10),A.q0],m))}p=d[v]
o=g?A.c.j(0.85):A.aK
q.push(new B.x(p,n,new B.F(!0,o,n,n,n,n,9.5,A.I,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n,n,n,n,1,n,n))
u.push(B.p(n,new B.co(A.aQ,A.e,A.Q,A.m,n,A.p,n,0,q,n),A.f,n,n,new B.o(t,n,new B.bP(r,r,r,r),new B.bp(s,s,s,s),n,n,A.n),n,n,n,n,A.mZ,n,n,n))
A.d.v(l,u)}return B.f1(A.a3,B.A(l,A.m,n,A.e,A.Q,0,n,n),A.f,A.eg)},
bxM(d,e,f){return this.aL5(d,e,null,f)},
bGL(d,e,f){var w,v=d.w
if(v==="hati_kuhowa")w=D.d7i
else if(v==="hati_kuhoweya")w=D.cUS
else{if(v==="hati_kiapo_uongozi")v=D.cIg
else v=C.kr(v)?D.cP5:A.Pf
w=v}v=this.fy
v===$&&B.c()
return B.c6(v,new C.emB(this,f,d,e,w),null)},
c_l(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.jD()
if(i==null||i.b!==D.cQ)return A.bH
w=k.VM(i)
v=k.arV(i)
u=A.w.j(0.55)
t=x.p
s=B.bn(!1,new B.C(A.AC,B.A(B.a([B.d("Edit text",j,j,j,j,j,j,B.l(j,j,A.c.j(0.9),j,j,j,j,j,j,j,j,15,j,j,A.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),A.b3,B.bK(!1,D.fhc,j,j,!0,j,j,new C.eo1(k),j,j)],t),A.m,j,A.e,A.j,0,j,j),j),!0,!1,A.ag,!0,!0)
r=d?A.aA:A.c
q=B.m(18)
p=B.I(A.bi.j(0.45),A.r,1)
o=B.a([new B.ac(0,A.G,A.w.j(0.25),A.J,20)],x.V)
n=i.x
m=i.y
l=i.z
r=B.D(new B.C(A.h3,B.bZ(new B.C(A.eP,B.aL(j,A.T,!0,j,!0,A.q,j,B.aM(),w,A.bi,j,j,j,j,2,D.bNV,A.y,!0,j,!0,j,!0,v,A.ah,j,j,j,j,j,A.vY,j,j,j,j,j,j,!1,"\u2022",j,new C.eo2(k,i),j,j,j,!1,j,j,!1,j,!0,j,A.a9,j,j,j,j,j,j,j,j,j,j,j,B.l(j,j,d?A.c:A.M,j,l,j,j,j,j,j,j,18,m,j,n,j,1.35,!0,j,j,j,j,j,j,j,j),!0,A.a5,A.z9,A.am,j,A.Sp,j,j),j),new B.o(r,j,p,q,o,j,A.n),A.bd),j),1)
q=B.m(16)
p=d?A.bl:A.c
o=B.I(d?A.aK:A.aL,A.r,1)
n=B.D(B.cd(B.A(B.a([k.tD(G.Mc,j,new C.eo3(k,i),d),k.tD(G.Zk,j,new C.eo4(k,i),d),k.tD(I.ajL,j,new C.eo5(k,i),d),k.tD(I.a_0,j,new C.eo6(k,i),d),k.tD(k.bxK(i.as),j,new C.eo7(k,i),d),k.tD(D.akX,j,new C.eo8(k,i),d),k.tD(D.akW,j,new C.eo9(k,i),d)],t),A.m,j,A.e,A.j,0,j,j),A.q,j,A.y,j,j,j,j,A.aQ),1)
m=A.k.O(i.w)
return B.bY(0,B.aF(!1,A.a1,!0,j,B.v(B.a([s,r,new B.C(D.bnO,B.p(j,B.A(B.a([n,A.ab,B.d(""+m+" pt",j,j,j,j,j,j,B.l(j,j,d?A.az:A.ak,j,j,j,j,j,j,j,j,11,j,j,A.I,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),A.d8],t),A.m,j,A.e,A.j,0,j,j),A.f,j,j,new B.o(p,j,o,q,j,j,A.n),j,j,j,j,A.l6,j,j,j),j)],t),A.m,j,A.e,A.j,0,A.p),A.f,u,0,j,j,j,j,j,A.af),0,0,0)},
c_k(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.jD()
if(m==null)return A.bH
w=m.b
v=w===D.cQ
u=B.m(18)
t=x.O
t=d?B.a([A.bl,A.M],t):B.a([A.c,A.aP],t)
s=B.I(d?A.aK:A.aL,A.r,1)
r=B.a([new B.ac(0,A.G,A.w.j(0.12),A.cx,16)],x.V)
q=x.p
p=B.a([],q)
if(v)p.push(o.b24(A.ja,"Edit",new C.enN(o,m),d,!0))
if(w===D.lh)p.push(o.b24(A.FO,"Shape & ring",new C.enO(o),d,!0))
p.push(o.tD(A.Bl,"Format",new C.enP(o),d))
if(v)A.d.v(p,B.a([o.tD(G.Mc,n,new C.enQ(o,m),d),o.tD(D.akX,n,new C.enR(o,m),d),o.tD(D.akW,n,new C.enS(o,m),d)],q))
p.push(A.b3)
p.push(o.cnS(A.e4,n,o.gaP3(),d,!0))
p.push(o.tD(A.hx,"Done",new C.enT(o),d))
return B.p(n,B.A(p,A.m,n,A.e,A.j,0,n,n),A.f,n,n,new B.o(n,n,s,u,r,new B.a7(A.a3,A.a7,A.x,t,n,n),A.n),n,n,n,A.EM,A.l6,n,n,n)},
bxK(d){switch(d.a){case 2:return D.ZY
case 1:case 5:return D.a__
default:return D.ZZ}},
c0b(d){switch(d.a){case 0:case 4:return A.L
case 2:return A.dK
default:return A.bg}},
ayd(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o,n=null
if(i)w=A.aB
else if(h)w=A.c
else{v=g?A.ad:A.aK
w=v}v=B.m(12)
u=B.m(12)
t=h?K.G8:n
if(h)s=n
else s=g?A.c.j(0.06):A.bN
r=e==null
q=r?10:12
p=x.p
o=B.a([B.W(d,w,n,n,n,16)],p)
if(!r)A.d.v(o,B.a([A.ea,B.d(e,n,n,n,n,n,n,B.l(n,n,w,n,n,n,n,n,n,n,n,12,n,n,A.I,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],p))
return new B.C(A.qG,B.aF(!1,A.a1,!0,n,B.aK(!1,v,!1,B.ex(new B.C(new B.Q(q,8,q,8),B.A(o,A.m,n,A.e,A.Q,0,n,n),n),n,new B.o(s,n,n,u,n,t,A.n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,f,n,n,n,n,n,n,n),A.f,A.K,0,n,n,n,n,n,A.af),n)},
tD(d,e,f,g){return this.ayd(d,e,f,g,!1,!1)},
b24(d,e,f,g,h){return this.ayd(d,e,f,g,h,!1)},
cnS(d,e,f,g,h){return this.ayd(d,e,f,g,!1,h)},
bKh(d,e,f){var w,v,u,t,s,r,q,p=this,o=null,n=B.m(20),m=x.O
m=e?B.a([A.bl,A.M],m):B.a([A.c,A.mG],m)
w=B.I(e?A.aK:A.p9,A.r,1.2)
v=B.a([new B.ac(0,A.G,A.bi.j(e?0.18:0.1),A.cx,18)],x.V)
u=p.a1B(A.eA,"Back",p.gbDP(),e)
t=d.b
s=f?14:15
t=B.d(t,o,1,A.a2,o,o,o,B.l(o,o,e?A.c:A.M,o,o,o,o,o,o,o,o,s,o,o,A.u,o,o,!0,o,-0.2,o,o,o,o,o,o),o,o,o)
s=p.f
r=d.r.length
q=x.p
r=B.a([u,A.d8,B.D(B.A(B.a([new B.dm(1,A.ci,t,o),A.ab,B.d(""+(s+1)+" of "+r,o,1,o,o,o,o,B.l(o,o,e?A.c_:A.ak,o,o,o,o,o,o,o,o,11,o,o,A.O,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],q),A.ta,o,A.e,A.j,0,A.cV,o),1)],q)
if(!p.jZ()){u=p.a1B(A.qU,"Undo",p.ax.length===0?o:p.gcxj(),e)
A.d.v(r,B.a([u,p.a1B(D.bBD,"Redo",p.ay.length===0?o:p.gcja(),e)],q))}r.push(p.a1B(A.xE,"PDF",new C.emV(p),e))
r.push(p.a1B(A.hy,"Download as video",new C.emW(p),e))
if(!p.jZ())r.push(B.Bn(o,o,B.W(A.nN,e?A.ad:A.bw,o,o,o,o),new C.emX(p),A.J,new C.emY(p),A.ag,"More",x.N))
r.push(A.d8)
r.push(B.aF(!1,A.a1,!0,o,B.aK(!1,B.m(14),!0,B.ex(D.e2q,o,new B.o(o,o,o,B.m(14),o,K.G8,A.n),o,o,o),o,!0,o,o,o,o,o,o,o,o,o,o,o,p.gaz2(),o,o,o,o,o,o,o),A.f,A.K,0,o,o,o,o,o,A.af))
return B.p(o,B.A(r,A.m,o,A.e,A.j,0,o,o),A.f,o,o,new B.o(o,o,w,n,v,new B.a7(A.ax,A.aD,A.x,m,o,o),A.n),o,o,o,D.bnJ,D.bsR,o,o,o)},
cwP(d){var w=this,v=null,u=B.m(18),t=d?A.aA.j(0.92):A.c.j(0.96),s=B.I(d?A.cC:A.aL,A.r,1)
return B.p(v,B.cd(B.A(B.a([w.iu(A.tF,"Print",new C.erc(w),d),w.iu(A.xE,"Download PDF",new C.erd(w),d),w.iu(A.pG,"Present",w.gaz2(),d)],x.p),A.m,v,A.e,A.j,0,v,v),A.q,v,A.y,v,v,v,v,A.aQ),A.f,v,v,new B.o(t,v,s,u,v,v,A.n),v,v,v,A.AA,G.ahh,v,v,v)},
a1B(d,e,f,g){var w,v=null
if(f==null)w=g?A.b5:A.dn
else w=g?A.ad:A.aK
return B.aH(v,v,v,v,B.W(d,w,v,v,v,20),v,v,v,f,v,v,v,v,e,A.c7)},
c_o(d,e){var w,v,u,t,s,r=this,q=null,p=B.a(["Home","Insert","School","Tools","Design","Transitions","View"],x.s),o=r.e
if(o==null)o=q
else{o=o.CW
o=(o==null?"":o).length!==0}w=o===!0
o=B.m(18)
v=d?A.aA.j(0.92):A.c.j(0.96)
u=B.I(d?A.cC:A.aL,A.r,1)
t=x.f0
t=B.B(new B.K(p,new C.eoc(r,d),t),t.k("ai.E"))
t.push(new B.C(Y.agY,new B.fj(new C.eod(r),q),q))
A.d.v(t,w?B.a([new B.C(R.v7,r.afL(A.l7,"Ending celebration",r.gc9z(),d),q),new B.C(R.v7,r.afL(A.FO,"Logo ring & frame",r.gcaf(),d),q)],x.p):A.h6)
A.d.v(t,w?B.a([new B.C(R.v7,r.afL(A.n1,"Look and feel",r.gcag(),d),q),new B.C(R.v7,r.afL(A.oC,"Edit this slide's text",r.gcaN(),d),q)],x.p):A.h6)
t.push(new B.C(R.v7,B.hp(B.aE(q,B.p(q,D.eDF,A.f,q,q,new B.o(q,q,q,B.m(999),B.a([new B.ac(0,A.G,N.l1.j(0.4),A.J,10)],x.V),D.amV,A.n),q,34,q,q,A.fQ,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.eoe(r),q,q,q,q,q,q,!1,A.a8),q,"Books \u2014 write and print a fold & staple book",q,q),q))
t=B.cd(B.A(t,A.m,q,A.e,A.j,0,q,q),A.q,q,A.y,q,D.btk,q,q,A.aQ)
s=e?8:10
return B.p(q,B.v(B.a([t,B.cd(r.clA(d),A.q,q,A.y,q,new B.Q(8,2,8,s),q,q,A.aQ)],x.p),A.aj,q,A.e,A.j,0,A.p),A.f,q,q,new B.o(v,q,u,o,q,q,A.n),q,q,q,A.AA,q,q,q,q)},
clA(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0="Text Box",a1="New Slide",a2="Delete Slide"
switch(e.z){case"School":w=B.a([],x.p)
for(v=0;v<5;++v){u={}
t=D.d1t[v]
u.a=null
s=u.a=t.b
w.push(e.ly(e.cnh(s),t.a,new C.epB(u,e),a3,D.aLr.t(0,s)))}w.push(e.iu(A.kI,"Notes Slide",new C.epC(e),a3))
w.push(e.ly(A.FN,"Quiz",new C.epD(e),a3,!0))
w.push(e.ly(L.Fq,"Worksheet",new C.epO(e),a3,!0))
w.push(e.ly(V.FQ,"Flashcard",new C.epZ(e),a3,!0))
w.push(e.ly(A.N2,"Lab Report",new C.eq9(e),a3,!0))
w.push(e.ly(A.xK,"Rubric",new C.eqg(e),a3,!0))
w.push(e.ly(A.ow,"Minutes",new C.eqh(e),a3,!0))
w.push(e.ly(A.pE,"Syllabus",new C.eqi(e),a3,!0))
w.push(e.ly(A.N6,"Timeline",new C.eqj(e),a3,!0))
return B.A(w,A.m,d,A.e,A.j,0,d,d)
case"Tools":w=B.a([],x.p)
for(v=0;v<74;++v){r=D.d2G[v]
w.push(e.ly(r.b,r.c,new C.eqk(e,r),a3,!D.aLw.t(0,A.a.i(r.a))))}return B.A(w,A.m,d,A.e,A.j,0,d,d)
case"Insert":return B.A(B.a([e.iu(A.y0,a0,e.gaKN(),a3),e.iu(A.tC,"Picture",new C.epE(e),a3),e.iu(A.xU,"Bio link",new C.epF(e),a3),e.iu(A.a_v,"Table",new C.epG(e),a3),e.iu(A.N5,"Sticky",new C.epH(e),a3),e.iu(A.tB,"Divider",new C.epI(e),a3),e.iu(A.Bm,"Header",new C.epJ(e),a3),e.ly(A3.vg,"Rectangle",new C.epK(e),a3,!0),e.ly(A.qL,"Circle",new C.epL(e),a3,!0),e.ly(A.ZQ,"Triangle",new C.epM(e),a3,!0),e.ly(A.j9,"Arrow",new C.epN(e),a3,!0),e.ly(D.bA7,"Parallelogram",new C.epP(e),a3,!0),e.ly(D.bCA,"Hexagon",new C.epQ(e),a3,!0),e.ly(A.tB,"Line",new C.epR(e),a3,!0),e.ly(A.xE,"PDF",new C.epS(e),a3,!0),e.ly(N.a_E,"Signature",new C.epT(e),a3,!0),e.iu(A2.Bc,"Quote",new C.epU(e),a3),e.iu(D.Zs,a1,new C.epV(e),a3)],x.p),A.m,d,A.e,A.j,0,d,d)
case"Design":w=e.c
w.toString
w=B.aI(w,A.bS,x.w).w
u=x.p
t=B.A(B.a([e.aLC("Wide 16:9",D.C8,a3),e.aLC("Short 9:16",D.nW,a3),new B.C(A.fx,B.mA(D.bEI,d,D.fdA,d,new C.epW(e),d,d,d,d),d)],u),A.m,d,A.e,A.j,0,d,d)
q=B.A(B.a([e.bE3("This slide",!e.Q,a3,new C.epX(e)),A.bp,e.aNN("All slides",e.Q,a3,new C.epY(e),!0)],u),A.m,d,A.e,A.j,0,d,d)
p=e.bE4()
p=B.d(p,d,d,d,d,d,d,B.l(d,d,a3?A.c_:A.bI,d,d,d,d,d,d,d,d,10,d,d,A.a4,d,d,!0,d,d,d,d,d,d,d,d),d,d,d)
o=B.d("COLORS",d,d,d,d,d,d,B.l(d,d,a3?A.az:A.ak,d,d,d,d,d,d,d,d,10,d,d,A.I,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
n=x.cT
n=B.B(new B.K(D.a1r,new C.eq_(e),n),n.k("ai.E"))
n=B.cd(B.A(n,A.m,d,A.e,A.j,0,d,d),A.q,d,A.y,d,d,d,d,A.aQ)
m=B.d("TEXT COLORS",d,d,d,d,d,d,B.l(d,d,a3?A.az:A.ak,d,d,d,d,d,d,d,d,10,d,d,A.I,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
l=B.a([],u)
for(v=0;v<10;++v){k=D.d3y[v]
j=B.b0(k)
i=new B.az(k===4294967295?A.dn:A.b5,1.5,A.r,-1)
l.push(new B.C(A.fx,B.aE(d,B.p(d,d,A.f,d,d,new B.o(j,d,new B.bP(i,i,i,i),d,d,d,A.a6),d,24,d,d,d,d,d,24),A.y,!1,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,new C.eq0(e,k),d,d,d,d,d,d,!1,A.a8),d))}l=B.cd(B.A(l,A.m,d,A.e,A.j,0,d,d),A.q,d,A.y,d,d,d,d,A.aQ)
j=B.d("SLIDE DESIGNS \xb7 first 5 free",d,d,d,d,d,d,B.l(d,d,a3?A.az:A.ak,d,d,d,d,d,d,d,d,10,d,d,A.I,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
h=$.bCg()
g=B.T(h).k("K<1,C>")
h=B.B(new B.K(h,new C.eq1(e,a3),g),g.k("ai.E"))
return new B.a6(w.a.a-20,d,B.v(B.a([t,A.P,q,A.ao,p,A.P,o,A.at,n,A.P,m,A.at,l,A.P,j,A.at,B.cd(B.A(h,A.m,d,A.e,A.j,0,d,d),A.q,d,A.y,d,d,d,d,A.aQ),A.ao,e.bXi(a3)],u),A.F,d,A.e,A.Q,0,A.p),d)
case"Transitions":f=e.jD()
w=e.c
w.toString
w=B.aI(w,A.bS,x.w).w
u=new C.epA(e)
t=new C.eql(e,a3)
q=x.p
p=B.a([],q)
if(f!=null){o=B.d("ELEMENT ANIMATION",d,d,d,d,d,d,B.l(d,d,a3?A.az:A.ak,d,d,d,d,d,d,d,d,10,d,d,A.I,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
n=t.$4(D.PE,f.dy,new C.eq2(e,u,f),A.aZ)
A.d.v(p,B.a([o,A.at,n,A.P,B.d("SLIDE TRANSITION",d,d,d,d,d,d,B.l(d,d,a3?A.az:A.ak,d,d,d,d,d,d,d,d,10,d,d,A.I,d,d,!0,d,1,d,d,d,d,d,d),d,d,d),A.at],q))}q=e.gdq()
q=q==null?d:q.r
p.push(t.$4(D.PE,q,new C.eq3(e,u),A.bi))
return new B.a6(w.a.a-20,d,B.v(p,A.F,d,A.e,A.Q,0,A.p),d)
case"View":w=e.y?"Hide Notes":"Show Notes"
return B.A(B.a([e.iu(A.kI,w,new C.eq4(e),a3),e.iu(A.tF,"Print deck",new C.eq5(e),a3),e.ly(D.aiP,"Export JSON",new C.eq6(e),a3,!0),e.iu(A.fJ,"Duplicate Slide",e.gaPS(),a3),e.iu(A.e4,a2,e.gaP4(),a3),e.crf(a3)],x.p),A.m,d,A.e,A.j,0,d,d)
case"Home":default:f=e.jD()
w=x.p
u=B.a([e.iu(D.Zs,a1,new C.eq7(e),a3),e.iu(A.fJ,"Duplicate",e.gaPS(),a3),e.iu(A.e4,a2,e.gaP4(),a3),e.iu(A.pG,"Present",e.gaz2(),a3),e.iu(A.Bk,a0,e.gaKN(),a3),e.iu(A.Bf,"Fit Text",new C.eq8(e),a3),e.iu(A.xE,"Download PDF",new C.eqa(e),a3)],w)
t=e.e
if(t!=null){t=t.w
t=t==="hati_kuhowa"||t==="hati_kuhoweya"}else t=!1
if(t)u.push(e.iu(A.kK,"Transfer",new C.eqb(e),a3))
if(f!=null){w=B.a([A.ab,e.iu(G.Mc,"Bold",new C.eqc(e,f),a3),e.iu(G.Zk,"Italic",new C.eqd(e,f),a3),e.iu(G.aiq,"Underline",new C.eqe(e,f),a3),e.iu(Ae.Md,"Bullets",new C.eqf(e,f),a3),e.bMz(f,a3)],w)
if(!A.a.a0(f.db,"__design__"))w.push(e.bKl(a3))
w.push(e.iu(D.byO,"Delete",e.gaP3(),a3))
A.d.v(u,w)}return B.A(u,A.m,d,A.e,A.j,0,d,d)}},
aLC(d,e,f){var w,v,u,t=null,s=this.e
s=s==null?t:s.d
w=e===D.nW
v=x.p
u=B.a([B.d(d,t,t,t,t,t,t,G.a77,t,t,t)],v)
if(w)A.d.v(u,B.a([A.d8,D.bDU],v))
return new B.C(A.fx,B.jH(t,t,t,B.A(u,A.m,t,A.e,A.Q,0,t,t),t,new C.em_(this,w,e),s===e,A.bi.j(0.25),t,t,t),t)},
crf(d){var w,v,u,t,s,r=this,q=null,p=r.gdq()
if(p==null)return A.bH
w=p.w
if(!(w>0)){v=r.e
v=v==null?q:v.e
w=v==null?5:v}v=B.I(d?A.b5:A.cn,A.r,1)
u=B.m(8)
t=B.W(A.Fo,d?A.az:A.ak,q,q,q,14)
s=B.aH(q,q,q,q,D.alV,q,q,q,new C.eqI(r,p),q,q,q,q,q,A.c7)
return B.p(q,B.A(B.a([t,s,B.d(""+w+"s",q,q,q,q,q,q,B.l(q,q,d?A.c:A.bh,q,q,q,q,q,q,q,q,11,q,q,A.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.aH(q,q,q,q,D.alM,q,q,q,new C.eqJ(r,p),q,q,q,q,q,A.c7)],x.p),A.m,q,A.e,A.Q,0,q,q),A.f,q,q,new B.o(q,q,v,u,q,q,A.n),q,q,q,A.F4,A.mc,q,q,q)},
cnh(d){switch(d.a){case 6:return V.FQ
case 7:return A.FN
case 8:return L.Fq
case 4:return A.Bm
default:return A.kI}},
bMz(d,e){var w=null,v=B.I(e?A.b5:A.cn,A.r,1),u=B.m(8),t=B.aH(w,w,w,w,D.alV,w,w,w,new C.en7(this,d),w,w,w,w,w,A.c7),s=A.k.O(d.w)
return B.p(w,B.A(B.a([t,B.d(""+s,w,w,w,w,w,w,B.l(w,w,e?A.c:A.bh,w,w,w,w,w,w,w,w,w,w,w,A.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aH(w,w,w,w,D.alM,w,w,w,new C.en8(this,d),w,w,w,w,w,A.c7)],x.p),A.m,w,A.e,A.Q,0,w,w),A.f,w,w,new B.o(w,w,v,u,w,w,A.n),w,w,w,A.xn,A.mc,w,w,w)},
bXi(d){var w=null
return B.Bn(B.CT(B.W(A5.Zv,d?A.ad:A.bw,w,w,w,16),w,w,D.fiZ,w,w,w),w,w,new C.enF(),A.J,this.gbyr(),A.cj,"Slide layout",x.fO)},
ly(d,e,f,g,h){var w=null,v=B.m(14),u=B.m(14),t=g?A.c.j(0.06):A.bN,s=B.I(g?A.dq:A.aL,A.r,1),r=x.p,q=B.a([B.W(d,g?A.dy:A.bi,w,w,w,18)],r)
if(h)q.push(B.ao(w,B.p(w,D.Nc,A.f,w,w,D.Dq,w,12,w,w,w,w,w,12),w,w,w,-6,-4,w))
return new B.C(A.fx,B.aF(!1,A.a1,!0,w,B.aK(!1,v,!0,B.ex(new B.C(A.h3,B.v(B.a([new B.an(A.W,w,A.aa,A.f,q,w),A.cZ,B.d(e,w,w,w,w,w,w,B.l(w,w,g?A.aR:A.bw,w,w,w,w,w,w,w,w,9,w,w,A.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],r),A.m,w,A.e,A.Q,0,A.p),w),w,new B.o(t,w,s,u,w,w,A.n),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.af),w)},
iu(d,e,f,g){return this.ly(d,e,f,g,!1)},
b3p(d,e){var w,v,u=this,t=null,s=u.e
s.toString
w=e?A.ai:A.aQ
v=B.hF(t,new C.eqU(u,s,e,d),s.r.length,A.cj,t,w,new C.eqV(e),!1)
s=d?A.aA:A.bN
w=B.a([],x.p)
if(e&&!u.jZ())w.push(new B.C(A.cj,B.H7(E.am7,new C.eqW(u),B.nq(t,A.bi,t,t,t,t,t,t,t,t,t,t,E.aM9,t,t,t,t),"Add slide"),t))
w.push(B.D(v,1))
return B.p(t,B.v(w,A.m,t,A.e,A.j,0,A.p),A.f,s,t,t,t,t,t,t,t,t,t,t)},
bC5(d,e,f){var w,v=null,u=this.e
if(u==null)w=v
else{u=u.d===D.nW?0.5625:1.7777777777777777
w=u}if(w==null)w=1.7777777777777777
u=f?8:16
return new B.C(new B.Q(u,u,u,u),new B.bI(A.b0,v,v,new B.fG(w,B.aE(v,B.cm(new C.emo(this,d,e)),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.emp(this),v,v,v,v,v,v,!1,A.a8),v),v),v)},
bC7(b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=a7.e,b0=(a9==null?a8:C.kr(a9.w))===!0,b1=b0&&C.fvO(b3),b2=b0&&b3.b===D.kP&&A.a.a0(b3.db,"marriage_sign_placed_")
if(b0){a9=b3.db
w=a9==="__kiapo_video__"||A.a.a0(a9,"__kiapo_video___")}else w=!1
if(!a7.jZ())v=!b0||a7.bZt(b3)
else v=!1
if(!a7.jZ())u=!b0||a7.bZs(b3)
else u=!1
t=v&&a7.r===b3.a
s=b4/960
a9=b3.db
r=A.a.a0(a9,"__design__")||A.a.a0(b3.a,"design_")?A.cb:A.bi
q=b0&&A.a.a0(a9,"marriage_field_")
if(b0)p=a9==="marriage_locked_nim_akuna_deni"||a9==="marriage_locked_nim_akuna_box"||a9==="marriage_locked_nim_akuna_tick"||a9==="marriage_locked_nim_akuna_hit"
else p=!1
if(w&&C.fU9(b3))o=a8
else if(p&&!a7.jZ())o=a7.gc65()
else o=a7.jZ()?a8:new C.emc(a7,w,b3,b1,b2,v)
a9=b3.a
n=b3.c
m=b3.d
l=b3.e
k=b3.f
j=p?A.c5:A.js
i=w&&C.fU9(b3)&&a7.zx()?new C.emd(a7,b3):a8
h=v&&b3.b===D.cQ?new C.eme(a7,b3):a8
g=u?new C.emf(a7,b3,b4,b5):a8
f=b3.cx
if(t)if(a7.w===a9)e=A.bn
else e=q?A.bU:r
else e=A.K
e=B.I(e,A.r,t?2:0)
d=B.m(t?6:0)
if(b1)a0=A.bU.j(0.08)
else a0=b3.b===D.kP?A.K:a8
if(b1){a1=a7.jZ()?"":"Tap to sign"
a1=B.av(B.d(a1,a8,a8,a8,a8,a8,a8,B.l(a8,a8,A.bU.j(0.7),a8,a8,a8,a8,a8,a8,a8,a8,10*s,a8,a8,A.O,a8,a8,!0,a8,a8,a8,a8,a8,a8,a8,a8),a8,a8,a8),a8,a8,a8)}else{if(a7.w===a9){a1=a7.c
a1.toString
a1=!(B.aI(a1,A.bS,x.w).w.a.a<900)}else a1=!1
a2=w&&a7.zx()
a3=b3.b===D.cQ
a4=a3?a7.VM(b3):a8
a5=a3?a7.arV(b3):a8
if(a7.w===a9){a6=a7.c
a6.toString
a6=!(B.aI(a6,A.bS,x.w).w.a.a<900)}else a6=!1
a6=a6?new C.emg(a7,b3):a8
a3=v&&a3?new C.emh(a7,b3):a8
a6=C.b_y(q,a4,a1,b3,a5,a2,a3,new C.emi(a7,w,b3,v),a6,s,t,!0)
a1=a6}d=B.a([B.p(a8,a1,A.f,a8,a8,new B.o(a0,a8,e,d,a8,a8,A.n),a8,a8,a8,a8,a8,a8,a8,a8)],x.p)
if(t&&u&&a7.w!==a9){e=B.m(6)
d.push(B.ao(-4,B.aE(a8,B.p(a8,D.bGH,A.f,a8,a8,new B.o(r,a8,B.I(A.c,A.r,1.5),e,a8,a8,A.n),a8,22,a8,a8,a8,a8,a8,22),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.emj(a7,b3,b4,b5),a8,a8,new C.emk(a7,b3),a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,!1,A.a8),a8,a8,a8,-4,a8,a8))}if(b0&&!a7.jZ()&&b3.db==="marriage_locked_nim_n_4")d.push(B.ao(a8,B.aE(a8,B.p(a8,D.bHl,A.f,a8,a8,new B.o(A.dL,a8,B.I(A.c,A.r,1.2),a8,B.a([new B.ac(0,A.G,A.w.j(0.25),A.J,4)],x.V),a8,A.a6),a8,20,a8,a8,a8,a8,a8,20),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a7.gbUW(),a8,a8,a8,a8,a8,a8,!1,A.a8),a8,a8,a8,-6,-6,a8))
if(b0&&!a7.jZ()&&A.a.a0(b3.db,"marriage_field_tarehe:"))d.push(B.ao(a8,B.aE(a8,B.p(a8,D.bIT,A.f,a8,a8,new B.o(A.bU,a8,B.I(A.c,A.r,1.2),a8,B.a([new B.ac(0,A.G,A.w.j(0.25),A.J,4)],x.V),a8,A.a6),a8,20,a8,a8,a8,a8,a8,20),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.eml(a7,b3),a8,a8,a8,a8,a8,a8,!1,A.a8),a8,a8,a8,-6,-6,a8))
e=!1
if(t)if(b3.b===D.cQ)if(a7.w!==a9){e=a7.c
e.toString
e=B.aI(e,A.bS,x.w).w.a.a<900}if(e)d.push(B.ao(-28,B.av(B.aE(a8,B.p(a8,D.frq,A.f,a8,a8,new B.o(A.bi,a8,a8,B.m(999),B.a([new B.ac(0,A.G,A.w.j(0.2),A.J,8)],x.V),a8,A.n),a8,a8,a8,a8,A.kG,a8,a8,a8),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.emm(a7,b3),a8,a8,a8,a8,a8,a8,!1,A.a8),a8,a8,a8),a8,a8,0,0,a8,a8))
return B.ao(a8,B.aE(j,B.eA(A.A,f,new B.an(A.W,a8,A.aa,A.f,d,a8),a8),A.y,!1,a8,h,a8,a8,a8,a8,a8,a8,i,a8,a8,a8,a8,a8,a8,g,a8,a8,a8,a8,a8,a8,a8,o,a8,a8,a8,a8,a8,a8,!1,A.a8),k*b5,new B.cw("el_"+a9,x.W),n*b4,a8,m*b5,l*b4)},
aNN(d,e,f,g,h){var w,v,u,t,s,r=null
if(e)w=A.bi.j(0.25)
else w=f?A.c.j(0.06):A.w.j(0.04)
v=B.m(10)
u=B.I(e?A.bi:A.bF,A.r,1)
if(e)t=A.bi
else t=f?A.az:A.ak
s=x.p
t=B.a([B.d(d,r,r,r,r,r,r,B.l(r,r,t,r,r,r,r,r,r,r,r,10,r,r,A.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],s)
if(h)A.d.v(t,B.a([A.d8,B.p(r,D.Nc,A.f,r,r,D.Dq,r,12,r,r,r,r,r,12)],s))
return B.aE(r,B.p(r,B.A(t,A.m,r,A.e,A.Q,0,r,r),A.f,r,r,new B.o(w,r,u,v,r,r,A.n),r,r,r,r,A.h2,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,g,r,r,r,r,r,r,!1,A.a8)},
bE3(d,e,f,g){return this.aNN(d,e,f,g,!1)},
c5S(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=d.a
if(m.cy!==k){m.cy=k
w=m.cx
v=w.h(0,k)
if(v!=null){v.S$=$.aw()
v.P$=0}v=d.c
w.n(0,k,new B.ar(new B.bb(v,A.b2,A.aN),$.aw()))}k=m.cx.h(0,k)
k.toString
w=f?8:10
v=f?8:10
u=e?A.aA:A.aP
t=f?A.wq:l
if(f)s=new B.bP(new B.az(e?A.bF:A.aL,1,A.r,-1),A.Y,A.Y,A.Y)
else s=l
r=f?B.a([new B.ac(0,A.G,A.w.j(0.12),A.rc,16)],x.V):l
q=x.p
p=B.A(B.a([B.d("Speaker Notes",l,l,l,l,l,l,B.l(l,l,e?A.ad:A.bw,l,l,l,l,l,l,l,l,12,l,l,A.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),A.b3,m.aZx(e,new C.eog(m))],q),A.m,l,A.e,A.j,0,l,l)
o=B.l(l,l,e?A.c:A.aK,l,l,l,l,l,l,l,l,12,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
n=B.l(l,l,e?A.c_:A.bI,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
return B.p(l,B.v(B.a([p,A.ao,B.D(B.aL(l,A.T,!1,l,!0,A.q,l,B.aM(),k,l,l,l,l,l,2,B.br(l,new B.b4(4,B.m(10),A.dg),l,A.bR,l,l,l,l,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,n,"Speaker notes for this slide\u2026",l,l,l,l,l,!0,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ah,l,l,l,l,l,l,l,l,l,2,l,l,!1,"\u2022",l,new C.eoh(m,d),l,l,l,!1,l,l,!1,l,!0,l,A.a9,l,l,l,l,l,l,l,l,l,l,l,o,!0,A.a5,l,A.am,l,l,l,l),1)],q),A.aj,l,A.e,A.j,0,A.p),A.f,l,l,new B.o(u,l,s,t,r,l,A.n),l,96,l,l,new B.Q(12,w,12,v),l,l,l)},
aR8(a3,a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=null,a2=a0.jD()
if(a2==null)return A.bH
w=new C.enl(a0,a6)
v=B.a([4279310375,4294967295,4280640491,4278556265,4292617766,4286331629,4293548044,4281549141],x.t)
u=A.k.D(1-a2.c,0.06,1)
t=A.k.D(1-a2.d,0.06,1)
s=A.k.D(1-a2.e,0.01,1)
r=A.k.D(1-a2.f,0.01,1)
q=a5?A.dQ:a1
p=x.p
o=B.a([],p)
n=!a5
if(n)o.push(B.A(B.a([B.d("Format",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.c:A.M,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,A.u,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),A.b3,a0.aZx(a3,a0.gbIA())],p),A.m,a1,A.e,A.j,0,a1,a1))
if(n)o.push(A.S)
o.push(B.d("Size",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.az:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1))
o.push(B.A(B.a([D.fe4,B.D(B.kT(a1,a1,a1,u,0.05,new C.enm(w,a2),A.k.D(a2.e,0.05,u)),1)],p),A.m,a1,A.e,A.j,0,a1,a1))
o.push(B.A(B.a([D.fpV,B.D(B.kT(a1,a1,a1,t,0.05,new C.enn(w,a2),A.k.D(a2.f,0.05,t)),1)],p),A.m,a1,A.e,A.j,0,a1,a1))
n=a2.b
m=n===D.cQ
if(m)o.push(B.A(B.a([D.f86,B.D(B.kT(a1,a1,a1,96,10,new C.eno(w,a2),A.k.D(a2.w,10,96)),1)],p),A.m,a1,A.e,A.j,0,a1,a1))
l=n===D.lh
if(l||n===D.kP||n===D.QX)A.d.v(o,B.a([B.d("Crop / position",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.az:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),B.A(B.a([D.fjD,B.D(B.kT(a1,a1,a1,s,0,new C.enp(w,a2),A.k.D(a2.c,0,s)),1)],p),A.m,a1,A.e,A.j,0,a1,a1),B.A(B.a([D.fr9,B.D(B.kT(a1,a1,a1,r,0,new C.enq(w,a2),A.k.D(a2.d,0,r)),1)],p),A.m,a1,A.e,A.j,0,a1,a1)],p))
if(l){l=B.d("Shape (frame)",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.az:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
k=B.a([],p)
for(j=0;j<7;++j){i={}
h=D.BB[j]
i.a=null
g=h.a
i.a=g
k.push(B.jH(a1,a1,a1,new B.x(h.b,a1,A.q5,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,new C.enr(i,w,a2),a2.go===g,a1,a1,a1,a1))}k=B.c_(A.bD,k,A.bt,6,6)
i=B.d("Ring",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.az:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
h=B.a([],p)
for(j=0;j<11;++j){f={}
e=D.Bw[j]
f.a=null
g=e.a
f.a=g
h.push(B.jH(a1,a1,a1,new B.x(e.b,a1,A.q5,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,new C.ens(f,w,a2),a2.id===g,a1,a1,a1,a1))}A.d.v(o,B.a([A.P,l,A.ao,k,A.P,i,A.ao,B.c_(A.bD,h,A.bt,6,6)],p))}o.push(A.P)
if(m){m=B.d("Text color",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.az:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
l=x.gN
l=B.B(new B.K(v,new C.ent(w,a2),l),l.k("ai.E"))
k=x.fw
A.d.v(o,B.a([m,A.ao,B.c_(A.bD,l,A.bt,6,6),A.ac,B.h53(new C.enu(w,a2),D.cjE,B.eu([a2.as],k),!0,a1,k)],p))}if(n===D.f_){n=B.d("Fill",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.az:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
m=x.gN
m=B.B(new B.K(v,new C.env(w,a2),m),m.k("ai.E"))
A.d.v(o,B.a([n,B.c_(A.bD,m,A.bt,0,6)],p))}o.push(A.ac)
o.push(B.dp(D.bIF,D.flx,new C.enw(a0,a5),B.bk(A.bL,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1)))
d=B.cB(o,a1,a1,q,a1,A.ai,a5)
if(a5)return d
q=a3?A.cC:A.c
p=a4?A.wq:a1
if(a4)o=new B.bP(new B.az(a3?A.bF:A.aL,1,A.r,-1),A.Y,A.Y,A.Y)
else o=a1
return B.p(a1,d,A.f,a1,a1,new B.o(q,a1,o,p,a4?B.a([new B.ac(0,A.G,A.w.j(0.12),A.rc,16)],x.V):a1,a1,A.n),a1,a1,a1,a1,A.EN,a1,a1,a1)},
bMQ(d){return this.aR8(d,!1,!1,null)},
c57(d,e,f,g,h,i){var w,v,u,t,s,r=this,q=null,p=r.fy
p===$&&B.c()
p=B.c6(p,new C.enz(r,f,d,e),q)
w=B.d(i,q,q,q,q,q,q,D.eZg,q,q,q)
v=r.c
v.toString
u=x.p
v=B.a([p,A.bf,B.D(B.v(B.a([w,A.bA,A.cZ,r.bxM(D.cMJ,d,B.O(v).ax.a===A.H)],u),A.F,q,A.e,A.j,0,A.p),1)],u)
p=x.V
A.d.v(v,B.a([A.ab,B.dU(B.hp(B.aF(!1,A.a1,!0,q,B.aK(!1,q,!0,B.ex(D.eIX,q,new B.o(q,q,B.I(A.c.j(0.55),A.r,1.3),q,B.a([new B.ac(0,A.G,A.bU.j(0.4),A.ej,8)],p),D.an_,A.a6),q,q,q),A.cL,!0,q,q,q,q,q,q,q,q,q,q,q,g,q,q,q,q,q,q,q),A.f,A.K,0,q,q,q,q,q,A.af),q,"Documents (Hati)",q,q),A.J)],u))
t=B.A(v,A.m,q,A.e,A.j,0,q,q)
w=r.c
w.toString
s=B.O(w).ax.a===A.H
w=B.m(20)
v=x.O
v=s?B.a([D.b4O,D.b5c],v):B.a([A.c,A.kb],v)
u=B.I(d.j(s?0.45:0.25),A.r,1.2)
return B.p(q,t,A.f,q,q,new B.o(q,q,u,w,B.a([new B.ac(0,A.G,d.j(s?0.18:0.1),A.cx,14)],p),new B.a7(A.ax,A.aD,A.x,v,q,q),A.n),q,q,q,q,A.bR,q,q,q)},
aKx(d,e,f,g){var w=this.fy
w===$&&B.c()
return B.c6(w,new C.el8(this,g,d,e,f),null)},
af8(d,e){return this.chx(d,e)},
chx(d,e){var w=0,v=B.j(x.T),u,t=this,s,r,q,p
var $async$af8=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:r=$.aw()
q=new B.ar(new B.bb(e,A.b2,A.aN),r)
p=t.c
p.toString
w=3
return B.b(B.c9(null,null,!0,null,new C.epd(d,q),p,null,!0,!0,x.N),$async$af8)
case 3:s=g
q.S$=r
q.P$=0
u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$af8,v)},
Pa(d){var w=d.bR()
return""+B.bG(w)+"/"+B.bQ(w)+"/"+B.by(w)}}
C.ae3.prototype={}
C.axt.prototype={
T(){return new C.bb_(null,null)}}
C.bb_.prototype={
gctr(){var w,v=this.a.c,u=v.f.bR(),t=""+B.bG(u)+"/"+B.bQ(u)+"/"+B.by(u),s=v.w
if(s==="marriage_agreement")return"Hati ya Kuhowesha \xb7 "+t
if(s==="hati_kuhowa")return"Hati ya Kuhowa \xb7 "+t
if(s==="hati_kuhoweya")return"Hati ya Kuhoweya \xb7 "+t
if(s==="hati_kiapo_uongozi"){v=v.x
w=A.a.i(v==null?"":v)
return w.length===0?"Hati ya Kiapo cha Uongozi \xb7 "+t:"Kiapo cha Uongozi \xb7 "+w+" \xb7 "+t}return""+v.r.length+" slides \xb7 "+t},
a_(){var w,v=this,u=null
v.a1()
w=B.bj(u,A.ps,u,1,u,v)
w.f8(0,!0)
v.d!==$&&B.aO()
v.d=w
w=B.bj(u,D.bmd,u,1,u,v)
w.cp(0)
v.e!==$&&B.aO()
v.e=w},
q(){var w=this.d
w===$&&B.c()
w.q()
w=this.e
w===$&&B.c()
w.q()
this.brd()},
Ir(d){var w=0.12+d*0.09,v=A.k.D(w+0.55,0,1),u=this.e
u===$&&B.c()
u=u.x
u===$&&B.c()
return A.cq.av(0,new B.hM(w,v,A.cq).av(0,u))},
B(d){var w,v=null,u=this.d
u===$&&B.c()
w=this.e
w===$&&B.c()
return B.av(new B.C(D.brI,B.c6(new B.h3(B.a([u,w],x.dS)),new C.cYZ(this),v),v),v,v,v)}}
C.bbd.prototype={
B(d){var w=null,v=B.m(22),u=B.I(A.aK,A.r,1),t=x.p
return B.av(new B.C(D.brZ,B.aF(!1,A.a1,!0,w,B.p(w,B.bw(B.m(22),B.v(B.a([new B.C(D.bra,B.v(B.a([B.p(w,D.bHr,A.f,w,w,new B.o(A.aB.j(0.12),w,w,B.m(16),w,w,A.n),w,52,w,w,w,w,w,52),A.aO,D.fny,A.S,B.d('"'+this.c+'" will be permanently removed. This cannot be undone.',w,w,w,w,w,w,D.f_p,A.L,w,w)],t),A.m,w,A.e,A.j,0,A.p),w),A.e0,D.blh,B.A(B.a([B.D(B.bK(!1,D.fck,w,w,!0,w,w,new C.cZk(d),w,B.fu(w,w,w,w,w,w,w,w,w,w,w,A.bI,w,w,w,w,w,A.mW,w,A.o_,w,w,w,w,w,w)),1),B.p(w,w,A.f,A.bl,w,w,w,48,w,w,w,w,w,1),B.D(B.bK(!1,D.fhw,w,w,!0,w,w,new C.cZl(d),w,B.fu(w,w,w,w,w,w,w,w,w,w,w,A.aB,w,w,w,w,w,A.mW,w,A.o_,w,w,w,w,w,w)),1)],t),A.m,w,A.e,A.j,0,w,w)],t),A.m,w,A.e,A.Q,0,A.p),A.aq),A.f,w,A8.Uz,new B.o(A.aA,w,u,v,D.cN2,w,A.n),w,w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.af),w),w,w,w)}}
C.J6.prototype={
T(){return new C.baZ()}}
C.baZ.prototype={
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.a,m=n.f,l=n.w,k=n.r
n=p.d
w=n?0.96:1
v=B.m(12)
if(l){u=0.1+(n?0.06:0)
n=u}else{u=0.08+(n?0.05:0)
n=u}n=m.j(n)
u=B.I(m.j(l?0.34:0.28),A.r,1)
t=x.V
t=p.d?B.a([],t):B.a([new B.ac(0,A.G,m.j(0.08),A.dB,8)],t)
s=m.j(l?0.16:0.14)
r=B.m(9)
q=p.a
r=B.p(o,B.W(q.c,m,o,o,o,18),A.f,o,o,new B.o(s,o,o,r,o,o,A.n),o,32,o,o,o,o,o,32)
q=q.d
return B.dU(B.db(B.aE(o,B.v7(B.dg(o,B.A(B.a([r,A.aw,new B.dm(1,A.ci,B.d(q,o,2,A.a2,o,o,o,B.l(o,o,l?A.f9:A.c,o,o,o,o,o,o,o,o,13,o,o,A.O,o,1.2,!0,o,o,o,o,o,o,o,o),A.L,o,o),o)],x.p),A.m,o,A.ba,A.Q,0,o,o),o,o,A.bb,new B.o(n,o,u,v,t,o,A.n),A.eE,o,o,o,A.or,o,o,1/0),A.cq,A.j5,w),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new C.cYU(p,d),new C.cYV(p),new C.cYW(p),new C.cYX(p),o,o,o,!1,A.a8),k),new B.u(0,(1-k)*16))}}
C.OO.prototype={
B(d){var w=this,v=null,u=A.c.j(0.04),t=B.m(16),s=B.m(16),r=B.m(14),q=B.I(A.c.j(0.5),A.r,1.2),p=x.p
return B.aF(!1,A.a1,!0,t,B.aK(!1,s,!0,new B.C(A.eP,B.A(B.a([B.p(v,B.W(w.c,A.c,v,v,v,22),A.f,v,v,new B.o(v,v,q,r,v,new B.a7(A.ax,A.aD,A.x,w.d,v,v),A.n),v,46,v,v,v,v,v,46),A.eB,B.D(B.v(B.a([B.d(w.e,v,v,v,v,v,v,A.nh,v,v,v),A.bA,B.d(w.f,v,v,v,v,v,v,B.l(v,v,A.c.j(0.55),v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],p),A.F,v,A.e,A.j,0,A.p),1),B.W(A.eu,A.c.j(0.4),v,v,v,v)],p),A.m,v,A.e,A.j,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.r,v,v,v,v,v,v,v),A.f,u,0,v,v,v,v,v,A.af)}}
C.ZC.prototype={
T(){return new C.aD0(D.dd,null,null)}}
C.aD0.prototype={
gXZ(){var w,v=this,u=v.w
if(u===$){w=B.bj(null,D.blO,null,1,null,v)
v.w!==$&&B.bM()
v.w=w
u=w}return u},
b3P(d){if(!this.a.c.ay)return
this.x=d
this.gXZ().iq(0,0)},
a_(){var w,v=this
v.a1()
w=v.a
v.d=A.o.D(w.d,0,w.c.r.length-1)
C.auo(D.ePi)
C.hW8()
v.Qz()},
q(){var w=this,v=w.f
if(v!=null)v.a9(0)
w.gXZ().q()
v=w.z
if(v!=null)v.a9(0)
C.auo(D.ePj)
C.hWb()
w.btl()},
cwc(){B.je()
this.m(new C.erT())
var w=this.c.I(x.q).f
w.a3H()
if($.biH)w.R(D.eMa)},
Qz(){var w,v=this,u=v.f
if(u!=null)u.a9(0)
if(!v.r||v.y)return
u=v.a.c
w=v.d
w===$&&B.c()
v.f=B.cM(B.dB(0,0,0,0,0,A.o.D(C.h3d(u,w),1,120)),new C.erJ(v))},
cvS(){var w,v=this
v.m(new C.erS(v))
if(v.r)v.Qz()
else{w=v.f
if(w!=null)w.a9(0)}},
gaSZ(){var w=this.a.c.db
return(w==null?"":w).length!==0},
cq3(){var w=this,v=w.f
if(v!=null)v.a9(0)
w.m(new C.erK(w))
v=w.z
if(v!=null)v.a9(0)
if(w.a.c.ch&&w.r)w.z=B.cM(A.l3,new C.erL(w))},
auL(){var w,v,u=this,t=u.a.c,s=t.r.length
if(u.y){t=u.z
if(t!=null)t.a9(0)
if(u.a.c.ch){u.m(new C.erF(u))
u.Qz()}return}w=u.d
w===$&&B.c()
v=s-1
if(w===v&&u.gaSZ()){u.cq3()
return}if(w>=v)t=t.ch&&s>1
else t=!0
if(t){u.m(new C.erG(u,A.o.G(w+1,s)))
u.b3P(w)
u.Qz()}},
cgb(){var w,v=this,u=v.a.c,t=u.r.length
if(v.y){if(!u.ch)return
u=v.z
if(u!=null)u.a9(0)
v.m(new C.erH(v))
v.Qz()
return}w=v.d
w===$&&B.c()
if(w<=0)u=u.ch&&t>1
else u=!0
if(u){v.m(new C.erI(v,w,t))
v.b3P(w)
v.Qz()}},
crr(d){var w,v=this,u=v.e
if(u===D.cg){u=v.d
u===$&&B.c()
return new B.n7(d,new B.cw(u,x.ac))}w=v.crs(u)
u=v.d
u===$&&B.c()
return B.q5(new B.n7(d,new B.cw(u,x.ac)),w,new C.erQ(),A.bb,A.bb,new C.erR(v))},
crs(d){switch(d.a){case 8:case 9:case 10:case 11:case 19:return D.bm9
case 16:return A.kd
case 18:return A.mU
default:return A.mV}},
crq(d,e,f){var w,v,u,t=null,s=B.cI(A.cq,f,t)
switch(d.a){case 0:return e
case 1:case 13:case 18:return new B.cX(s,!1,e,t)
case 2:case 17:w=x.K
return B.jk(e,new B.bf(s,new B.bm(A.u8,A.J,w),w.k("bf<bH.T>")),t,!0)
case 3:w=x.K
return B.jk(e,new B.bf(s,new B.bm(A.Rc,A.J,w),w.k("bf<bH.T>")),t,!0)
case 4:case 21:w=x.K
return B.jk(e,new B.bf(s,new B.bm(A.id,A.J,w),w.k("bf<bH.T>")),t,!0)
case 5:w=x.K
return B.jk(e,new B.bf(s,new B.bm(A.u7,A.J,w),w.k("bf<bH.T>")),t,!0)
case 6:case 16:w=x.b
return B.ih(A.A,new B.cX(s,!1,e,t),t,new B.bf(s,new B.bm(0.82,1,w),w.k("bf<bH.T>")))
case 7:w=x.b
return B.ih(A.A,new B.cX(s,!1,e,t),t,new B.bf(s,new B.bm(1.18,1,w),w.k("bf<bH.T>")))
case 8:return B.c6(s,new C.erM(s),e)
case 9:return B.c6(s,new C.erN(s),e)
case 10:return B.c6(s,new C.erO(s),e)
case 11:return B.c6(s,new C.erP(s),e)
case 12:w=x.b
return new B.cX(s,!1,B.ih(A.A,e,t,new B.bf(s,new B.bm(1.03,1,w),w.k("bf<bH.T>"))),t)
case 14:w=s.gp(0)
v=x.K
return B.js(B.jk(e,new B.bf(s,new B.bm(A.u8,A.J,v),v.k("bf<bH.T>")),t,!0),A.q,new C.bpG(w,t))
case 15:w=x.K
return B.jk(e,new B.bf(s,new B.bm(A.Rc,A.J,w),w.k("bf<bH.T>")),t,!0)
case 19:w=B.dl()
w.mB((1-s.gp(0))*2)
v=s.gp(0)
u=s.gp(0)
w.jx(v,u,v,1)
return B.fr(A.A,B.db(e,s.gp(0)),t,w,!0)
case 20:return B.eA(A.A,(1-s.gp(0))*0.2,new B.cX(s,!1,e,t),t)}},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.a.c,k=n.d
k===$&&B.c()
w=l.r[k]
if(l.ay){v=n.x
u=B.js(new C.an0(B.c6(n.gXZ(),new C.erU(n,v,w),m),m),A.q,m)}else{t=B.rj(new C.I5(w,!0,!1,m))
l=B.b0(w.e)
u=n.crr(B.ei(B.js(t,A.q,m),l,!0))}l=B.m(20)
k=x.p
s=B.p(m,B.A(B.a([B.d(n.r?"Auto "+C.h3d(n.a.c,n.d)+"s":"Manual",m,m,m,m,m,m,A.o4,m,m,m),A.bp,D.bJH],k),A.m,m,A.e,A.Q,0,m,m),A.f,m,m,new B.o(A.aX,m,m,l,m,m,A.n),m,m,m,m,A.fG,m,m,m)
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
l.push(B.bY(0,new C.ML(new C.E1(q,p,o,r==null?"":r),!1,!0,m),0,0,0))}else{r=q.c.d===D.nW?0.5625:1.7777777777777777
l.push(B.av(new B.fG(r,B.js(B.ub(A.ag,u,!0,4,1,!0,!0,m),A.q,m),m),m,m,m))}if(!$.biH){r=B.H7(A.kM,new C.erV(d),B.nq(m,A.aX,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m)
k=B.a([B.ao(m,B.bn(!0,B.A(B.a([r,A.ab,B.H7(B.W(n.r?Ak.xS:A.iP,m,m,m,m,m),n.gcvR(),B.nq(m,A.aX,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m)],k),A.m,m,A.e,A.j,0,m,m),!0,!1,A.ag,!0,!0),m,m,12,m,12,m)],k)
if(!n.y){r=B.m(20)
k.push(B.ao(16,B.bn(!0,B.p(m,B.d(""+(n.d+1)+" / "+n.a.c.r.length,m,m,m,m,m,m,A.hn,m,m,m),A.f,m,m,new B.o(A.aX,m,m,r,m,m,A.n),m,m,m,m,A.fG,m,m,m),!0,!1,A.ag,!0,!0),m,m,m,16,m,m))}A.d.v(l,k)}l.push(B.ao(m,B.bn(!0,B.aE(A.c5,B.p(A.kX,$.biH?A.bH:s,A.f,m,m,m,m,64,m,m,D.bmV,m,m,150),A.y,!1,m,n.gcwb(),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!1,A.a8),!0,!1,A.ag,!0,!0),m,m,m,0,0,m))
return B.cb(m,A.w,B.aE(m,new B.an(A.W,m,A.b_,A.q,l,m),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.erW(n,d),m,m,m,!1,A.a8),m,!1,!1,m,m)}}
C.Je.prototype={
B(d){var w=null
return B.p(w,B.bn(!0,new B.C(E.agK,this.c,w),!0,!1,A.ag,!0,!1),A.f,w,w,D.aYK,w,w,w,w,w,w,w,w)}}
C.bpG.prototype={
iV(d){return new B.aa(0,0,0+d.a*A.k.D(this.b,0,1),0+d.b)},
jA(d){return d.b!==this.b}}
C.bfP.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.c
A:{if("circle"===q){w=B.m(999)
break A}if("rounded"===q){w=B.m(18)
break A}if("arch"===q){w=D.aVx
break A}w=B.m(6)
break A}v=s.e
u=B.I(v?A.aE:A.K,A.r,2.5)
if(q==="circle")t=B.m(999)
else t=B.m(q==="rounded"?9:3)
w=B.dg(r,B.av(B.p(r,r,A.f,r,r,new B.o(r,r,r,t,r,E.vw,A.n),r,30,r,r,r,r,r,30),r,r,r),r,r,A.bb,new B.o(s.f,r,u,w,r,r,A.n),A.hW,r,64,r,r,r,r,64)
return B.aE(r,new B.a6(78,r,B.v(B.a([w,A.ao,B.d(s.d,r,1,A.a2,r,r,r,B.l(r,r,v?A.aE:s.r,r,r,r,r,r,r,r,r,11.5,r,r,A.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),A.m,r,A.e,A.j,0,A.p),r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,s.w,r,r,r,r,r,r,!1,A.a8)}}
C.bfO.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=r.c,o=D.dfB.h(0,p)
if(o==null)o=D.d2O
p=p==="none"
w=p?q:new B.a7(A.a3,A.a7,A.x,o,q,q)
p=p?A.cU.j(0.25):q
v=r.e
u=v?B.I(A.aE,A.r,2.5):q
t=r.r.j(0.15)
s=v?I.al8:q
w=B.p(q,B.p(q,s,A.f,q,q,new B.o(t,q,q,q,q,q,A.a6),q,q,q,q,q,q,q,q),A.f,q,q,new B.o(p,q,u,q,q,w,A.a6),q,52,q,q,A.en,q,q,52)
return B.aE(q,new B.a6(66,q,B.v(B.a([w,A.ao,B.d(r.d,q,1,A.a2,q,q,q,B.l(q,q,v?A.aE:r.f,q,q,q,q,q,q,q,q,10.5,q,q,A.I,q,q,!0,q,q,q,q,q,q,q,q),A.L,q,q)],x.p),A.m,q,A.e,A.j,0,A.p),q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.w,q,q,q,q,q,q,!1,A.a8)}}
C.aIG.prototype={
aQ(){this.aX()
this.aW()
this.dJ()},
q(){var w=this,v=w.b2$
if(v!=null)v.a3(0,w.gdG())
w.b2$=null
w.a2()}}
C.aKI.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bv()}}
C.bvn.prototype={}
C.aKJ.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bv()}}
C.b_B.prototype={}
C.V6.prototype={
T(){return new C.aCZ()},
bed(d){return this.e.$1(d)}}
C.aCZ.prototype={
gb2a(){var w,v,u,t,s=this.e
if(s==null)return null
for(w=this.a.d,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===s)return t}return null},
ga9m(){var w,v
if(this.d==="all")return B.bl(this.a.d,!0,x.I)
w=this.gb2a()
v=x.D
return w==null?B.a([],v):B.a([w],v)},
gaMs(){if(this.d==="all")return"All presentations ("+this.a.d.length+")"
var w=this.gb2a()
w=w==null?null:w.b
return w==null?"Pick a presentation":w},
gb3o(){return A.d.cI(this.ga9m(),0,new C.erp())},
a_(){var w,v=this
v.a1()
w=v.a.d
if(w.length!==0)v.e=A.d.gL(w).a
v.Qa()},
Qa(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Qa=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return B.b(C.b0b(s.c,s.f),$async$Qa)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.erl(t,!s))
case 1:return B.h(u,v)}})
return B.i($async$Qa,v)},
It(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$It=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p=t.ga9m()
o=p.length
if(o===0){w=1
break}for(s=0;s<p.length;p.length===o||(0,B.L)(p),++s){r=p[s]
q=r.w
if(q==="marriage_agreement"||q==="hati_kuhowa"||q==="hati_kuhoweya"||q==="hati_malipo_awamu"||q==="hati_kiapo_uongozi")C.fz_(r,t.a.d)}o=t.c
o.toString
q=t.a
w=3
return B.b(B.oW(o,q.c,q.f),$async$It)
case 3:if(!e||t.c==null){w=1
break}o=t.c
o.toString
q=B.ej(new C.ero(t,p),!1,null,x.H)
w=4
return B.b(B.a5(o,!1).ce(q),$async$It)
case 4:q=t.a
w=5
return B.b(B.oV(q.c,q.f),$async$It)
case 5:w=6
return B.b(t.Qa(),$async$It)
case 6:case 1:return B.h(u,v)}})
return B.i($async$It,v)},
Qx(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$Qx=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:o=t.c
o.toString
w=3
return B.b(B.hv(o,D.dSG,!0,"NgmySlidesTransferScan",x.N),$async$Qx)
case 3:s=e
if(s==null||A.a.i(s).length===0){w=1
break}t.m(new C.erm(t))
w=4
return B.b(C.agc(s),$async$Qx)
case 4:r=e
t.m(new C.ern(t))
o=J.a8(r)
if(o.gam(r)){o=t.c
if(o==null){w=1
break}o.I(x.q).f.R(D.eL3)
w=1
break}w=5
return B.b(t.a.bed(r),$async$Qx)
case 5:q=t.c
if(q==null){w=1
break}B.a5(q,!1).N(null)
q=t.c.I(x.q).f
p=o.gM(r)
o=o.gM(r)===1?"":"s"
q.R(B.b2(null,null,null,null,null,A.q,null,B.d("Imported "+p+" presentation"+o,null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$Qx,v)},
Is(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Is=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:n=t.ga9m()
if(n.length===0){w=1
break}s=t.c
s.toString
r=t.a
w=3
return B.b(B.oW(s,r.c,r.f),$async$Is)
case 3:if(!e||t.c==null){w=1
break}s=n.length
r=t.a
if(s===1){s=r.c
q=C.fze(null,A.d.gL(n),s,t.a.f)}else q=C.fze(n,null,r.c,r.f)
if(n.length===1){s=A.d.gL(n).b
r=B.af("[^\\w\\-.]+",!0,!1,!1,!1)
p=B.aJ(s,r,"_")}else p="ngmy_slides_library"
w=4
return B.b(B.FT(q,"ngmy_slides_"+p,!1),$async$Is)
case 4:o=e
s=t.a
w=5
return B.b(B.oV(s.c,s.f),$async$Is)
case 5:w=6
return B.b(t.Qa(),$async$Is)
case 6:s=t.c
if(s==null){w=1
break}s.I(x.q).f.R(B.b2(null,null,null,null,null,A.q,null,B.d(o,null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$Is,v)},
a1M(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a1M=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t.m(new C.erq(t))
w=3
return B.b(C.bAH(),$async$a1M)
case 3:s=e
t.m(new C.err(t))
if(s==null||J.ck(s)){w=1
break}w=4
return B.b(t.a.bed(s),$async$a1M)
case 4:r=t.c
if(r==null){w=1
break}B.a5(r,!1).N(null)
r=t.c.I(x.q).f
q=J.a8(s)
p=q.gM(s)
q=q.gM(s)===1?"":"s"
r.R(B.b2(null,null,null,null,null,A.q,null,B.d("Imported "+p+" presentation"+q+" from file",null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a1M,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=B.O(d).ax.a===A.H,l=m?A.db:A.bN,k=o.ga9m().length!==0,j=B.ao(n,B.p(n,n,A.f,n,n,new B.o(n,n,n,n,n,new B.bR(A.A,0.5,A.x,n,0,B.a([A.bi.j(0.22),A.K],x.O),n,n),A.a6),n,220,n,n,n,n,n,220),n,n,n,-60,-80,n),i=B.aH(n,n,n,n,B.W(A.cy,m?A.ad:A.ak,n,n,n,n),n,n,n,new C.eru(d),n,n,n,n,n,n),h=x.p
i=B.A(B.a([i,B.D(B.d("Transfer presentations",n,n,n,n,n,n,B.l(n,n,m?A.c:A.M,n,n,n,n,n,n,n,n,17,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),A.L,n,n),1),A.z6],h),A.m,n,A.e,A.j,0,n,n)
w=B.m(24)
v=B.a([new B.ac(0,A.G,A.bi.j(0.35),A.eT,24)],x.V)
u=B.ao(n,B.W(A.pz,A.c.j(0.1),n,n,n,100),n,n,n,-12,-8,n)
t=A.c.j(0.18)
s=B.m(16)
s=B.a([u,B.A(B.a([B.p(n,D.bKc,A.f,n,n,new B.o(t,n,B.I(A.c.j(0.35),A.r,1),s,n,n,A.n),n,56,n,n,n,n,n,56),A.eB,B.D(B.v(B.a([B.d("NGMY Slides Transfer",n,n,n,n,n,n,B.l(n,n,A.c.j(0.85),n,n,n,n,n,n,n,n,11,n,n,A.I,n,n,!0,n,1.1,n,n,n,n,n,n),n,n,n),A.at,D.bvQ],h),A.F,n,A.e,A.j,0,A.p),1)],h),A.m,n,A.e,A.j,0,n,n)],h)
if(o.a.f)s.push(B.ao(n,B.hp(B.aE(A.c5,D.eIZ,A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gcaZ(),n,n,n,n,n,n,!1,A.a8),n,"Save presentations to the database",n,n),n,n,n,-17,-19,n))
w=B.a([B.p(n,new B.an(A.W,n,A.aa,A.f,s,n),A.aq,n,n,new B.o(n,n,n,w,v,D.a08,A.n),n,n,n,n,E.XZ,n,n,1/0),A.e0,o.avX(m,"What to transfer"),A.ac,B.A(B.a([B.D(o.aVc(A.pG,m,new C.erv(o),o.d==="one","Pick a single deck","One presentation"),1),A.aw,B.D(o.aVc(D.bA_,m,new C.erw(o),o.d==="all",""+o.a.d.length+" saved","All presentations"),1)],h),A.m,n,A.e,A.j,0,n,n)],h)
if(o.d==="one"){v=B.a([A.d5,o.avX(m,"Choose presentation"),A.S],h)
u=o.a.d
if(u.length===0){u=m?A.aA:A.c
t=B.m(16)
s=B.I(m?A.bF:A.aL,A.r,1)
v.push(B.p(n,B.d("Create a presentation first, then come back to transfer it.",n,n,n,n,n,n,B.l(n,n,m?A.az:A.ak,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),A.f,n,n,new B.o(u,n,s,t,n,n,A.n),n,n,n,n,A.bW,n,n,n))}else A.d.v(v,new B.K(u,new C.erx(o,m),B.T(u).k("K<1,r>")))
A.d.v(w,v)}w.push(A.mt)
w.push(o.avX(m,"Transfer options"))
w.push(A.ac)
w.push(B.A(B.a([B.D(o.aoG(A.aW,k,!0,A.jd,m,o.r,o.gc5b(),"Scan on another device","Show QR"),1),A.aw,B.D(o.aKy(A.jH,!0,A.iQ,m,o.gcmS(),"Receive presentations","Scan QR"),1)],h),A.m,n,A.e,A.j,0,n,n))
w.push(A.S)
w.push(B.A(B.a([B.D(o.bwf(A.aU,k,A.hy,m,o.r,o.gc58(),"Download .json","Backup file"),1),A.aw,B.D(o.aKy(A.aI,!0,Aw.y2,m,o.gcyy(),"Import backup","Upload file"),1)],h),A.m,n,A.e,A.j,0,n,n))
if(k){v=A.bi.j(m?0.12:0.08)
u=B.m(16)
t=B.I(A.bi.j(0.28),A.r,1)
s=B.W(A.l9,A.bi.j(0.9),n,n,n,18)
r=o.gaMs()
q=o.gb3o()
p=o.gb3o()===1?"":"s"
A.d.v(w,B.a([A.bv,B.p(n,B.A(B.a([s,A.aw,B.D(B.d("Ready to share "+r+" \xb7 "+q+" slide"+p,n,n,n,n,n,n,B.l(n,n,m?A.ad:A.bw,n,n,n,n,n,n,n,n,12,n,n,A.a4,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)],h),A.m,n,A.e,A.j,0,n,n),A.f,n,n,new B.o(v,n,t,u,n,n,A.n),n,n,n,n,A.bB,n,n,n)],h))}j=B.a([j,B.bn(!0,B.v(B.a([new B.C(Ag.LO,i,n),B.D(B.cB(w,n,D.bqk,n,n,A.ai,!1),1)],h),A.m,n,A.e,A.j,0,A.p),!0,!1,A.ag,!0,!0)],h)
if(o.f)j.push(B.p(n,T.US,A.f,A.dz,n,n,n,n,n,n,n,n,n,n))
return B.cb(n,l,new B.an(A.W,n,A.aa,A.q,j,n),n,!1,!1,n,n)},
aei(){var w=0,v=B.j(x.H),u=this,t,s
var $async$aei=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
t=u.a
w=2
return B.b(C.i1p(s,t.d,t.e),$async$aei)
case 2:return B.h(null,v)}})
return B.i($async$aei,v)},
avX(d,e){var w=null,v=B.p(w,w,A.f,w,w,new B.o(A.bi,w,w,B.m(2),w,w,A.n),w,14,w,w,w,w,w,3)
return B.A(B.a([v,A.ab,B.d(e.toUpperCase(),w,w,w,w,w,w,B.l(w,w,d?A.az:A.ak,w,w,w,w,w,w,w,w,11,w,w,A.u,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,w,w)},
aVc(d,e,f,g,h,i){var w,v,u,t,s=null,r=B.m(18),q=B.m(18),p=e?A.aA:A.c
if(g)w=A.bi
else w=e?A.bF:A.aL
w=B.I(w,A.r,g?2:1)
v=g?B.a([new B.ac(0,A.G,A.bi.j(0.2),A.cx,14)],x.V):s
u=A.bi.j(g?0.2:0.1)
t=B.m(12)
t=B.p(s,B.W(d,A.bi,s,s,s,22),A.f,s,s,new B.o(u,s,s,t,s,s,A.n),s,s,s,s,A.cj,s,s,s)
u=B.d(i,s,s,s,s,s,s,B.l(s,s,e?A.c:A.M,s,s,s,s,s,s,s,s,13,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
return B.aF(!1,A.a1,!0,s,B.aK(!1,r,!0,B.ex(new B.C(A.bB,B.v(B.a([t,A.S,u,A.bA,B.d(h,s,s,s,s,s,s,B.l(s,s,e?A.az:A.ak,s,s,s,s,s,s,s,s,11,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),A.F,s,A.e,A.j,0,A.p),s),s,new B.o(p,s,w,q,v,s,A.n),s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,f,s,s,s,s,s,s,s),A.f,A.K,0,s,s,s,s,s,A.af)},
bGK(d,e){var w,v,u,t,s,r,q=null,p=d.a===this.e,o=B.m(16),n=e?A.aA:A.c,m=B.m(16)
if(p)w=A.bi
else w=e?A.bF:A.aL
w=B.I(w,A.r,p?2:1)
v=B.p(q,D.bKn,A.f,q,q,new B.o(q,q,q,B.m(12),q,new B.a7(A.a3,A.a7,A.x,B.a([A.bi,A.bi.j(0.7)],x.O),q,q),A.n),q,44,q,q,q,q,q,44)
u=d.b
u=B.d(u,q,1,A.a2,q,q,q,B.l(q,q,e?A.c:A.M,q,q,q,q,q,q,q,q,q,q,q,A.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=d.r.length
s=x.p
t=B.D(B.v(B.a([u,B.d(""+t+" slides",q,q,q,q,q,q,B.l(q,q,e?A.az:A.ak,q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),A.F,q,A.e,A.j,0,A.p),1)
u=p?A.ee:A.qL
if(p)r=A.bi
else r=e?A.b5:A.dn
return new B.C(A.cG,B.aF(!1,A.a1,!0,q,B.aK(!1,o,!0,B.p(q,B.A(B.a([v,A.bf,t,B.W(u,r,q,q,q,q)],s),A.m,q,A.e,A.j,0,q,q),A.f,q,q,new B.o(n,q,w,m,q,q,A.n),q,q,q,q,A.bB,q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,new C.erk(this,d),q,q,q,q,q,q,q),A.f,A.K,0,q,q,q,q,q,A.af),q)},
aoG(d,e,f,g,h,i,j,k,l){var w,v,u,t,s=null,r=e?1:0.45,q=e?j:s,p=B.m(18),o=B.m(18),n=h?A.aA:A.c
if(f)w=d.j(0.45)
else w=h?A.bF:A.aL
w=B.I(w,A.r,f?1.5:1)
v=d.j(0.14)
u=B.m(12)
t=x.p
u=B.a([B.p(s,B.W(g,d,s,s,s,22),A.f,s,s,new B.o(v,s,s,u,s,s,A.n),s,s,s,s,A.qJ,s,s,s)],t)
if(i)u.push(B.ao(s,B.p(s,D.alG,A.f,s,s,D.aYw,s,14,s,s,s,s,s,14),s,s,s,-4,-4,s))
v=B.d(l,s,s,s,s,s,s,B.l(s,s,h?A.c:A.M,s,s,s,s,s,s,s,s,14,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
return B.db(B.aF(!1,A.a1,!0,s,B.aK(!1,p,!0,B.ex(new B.C(E.XE,B.v(B.a([new B.an(A.W,s,A.aa,A.f,u,s),A.ac,v,A.bA,B.d(k,s,s,s,s,s,s,B.l(s,s,h?A.az:A.ak,s,s,s,s,s,s,s,s,11,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),A.F,s,A.e,A.j,0,A.p),s),s,new B.o(n,s,w,o,s,s,A.n),s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,q,s,s,s,s,s,s,s),A.f,A.K,0,s,s,s,s,s,A.af),r)},
aKy(d,e,f,g,h,i,j){return this.aoG(d,e,!1,f,g,!1,h,i,j)},
bwf(d,e,f,g,h,i,j,k){return this.aoG(d,e,!1,f,g,h,i,j,k)}}
C.V7.prototype={
T(){return new C.biG()}}
C.biG.prototype={
a_(){this.a1()
this.ad8()},
ad8(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$ad8=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
n=r.a
m=n.d
l=m.length
k=n.c
q=l===1?C.fze(null,A.d.gL(m),k,r.a.f):C.fze(m,null,k,n.f)
n=r.a.d
m=n.length
p=m===1?A.d.gL(n).a:"library_"+m
n=r.a.d
if(n.length===1&&C.kr(A.d.gL(n).w))C.fz_(A.d.gL(r.a.d),D.d0R)
n=r.a
m=n.c
n=C.hZs(n.d)
w=7
return B.b(C.fzd(p,C.hZx(r.a.d),n,m,q),$async$ad8)
case 7:o=e
if(r.c==null){w=1
break}r.m(new C.ery(r,o))
t=2
w=6
break
case 4:t=3
i=s.pop()
if(r.c==null){w=1
break}r.m(new C.erz(r))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$ad8,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=B.O(d).ax.a===A.H,h=i?A.db:A.bN,g=k.d
g=g==null?j:A.a.a0(g,"NGMYSLIDESYNC2|")
w=A.d.cI(k.a.d,0,new C.erA())
v=B.aH(j,j,j,j,B.W(A.eA,i?A.ad:A.ak,j,j,j,18),j,j,j,new C.erB(d),j,j,j,j,j,j)
u=x.p
v=B.A(B.a([v,B.D(B.d("Presentation QR",j,j,j,j,j,j,B.l(j,j,i?A.c:A.M,j,j,j,j,j,j,j,j,17,j,j,A.u,j,j,!0,j,j,j,j,j,j,j,j),A.L,j,j),1),A.z6],u),A.m,j,A.e,A.j,0,j,j)
t=B.m(24)
s=k.a
r=B.d(s.e,j,j,j,j,j,j,A.du,A.L,j,j)
s=s.d.length
q=s===1?"":"s"
t=B.p(j,B.v(B.a([r,A.P,B.d(""+s+" presentation"+q+" \xb7 "+w+" slides",j,j,j,j,j,j,B.l(j,j,A.c.j(0.85),j,j,j,j,j,j,j,j,12,j,j,A.O,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],u),A.m,j,A.e,A.j,0,A.p),A.f,j,j,new B.o(j,j,j,t,j,D.a08,A.n),j,j,j,j,E.XZ,j,j,1/0)
q=B.m(24)
s=B.I(A.aW.j(0.35),A.r,1)
r=B.a([],u)
p=k.f
if(p!=null)r.push(B.d(p,j,j,j,j,j,j,A.a6u,A.L,j,j))
else if(k.d==null)r.push(D.e2_)
else{p=B.a([],u)
o=k.e
if((o==null?"":o).length!==0){o=B.m(16)
n=B.a([new B.ac(0,A.G,A.aE.j(0.35),A.cx,18)],x.V)
m=k.e
m.toString
A.d.v(p,B.a([D.fcN,A.ao,B.aE(j,B.p(j,B.A(B.a([D.bLV,A.aw,B.d(m,j,j,j,j,j,j,D.f_N,j,j,j)],u),A.m,j,A.e,A.Q,0,j,j),A.f,j,j,new B.o(j,j,j,o,n,D.bQn,A.n),j,j,j,j,A0.agw,j,j,j),A.y,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new C.erC(k,d),j,j,j,j,j,j,!1,A.a8),A.P,D.fh3,A.ay],u))}o=A.c.j(0.04)
n=B.m(22)
m=B.I(A.bF,A.r,1)
l=k.d
l.toString
p.push(B.p(j,B.pB(j,j,!1,l,j,!0,!0,j,!1,D.bhZ),A.f,j,j,new B.o(o,j,m,n,j,j,A.n),j,j,j,j,A.cj,j,j,j))
A.d.v(r,p)}r.push(A.ay)
r.push(B.d(g===!0?"Cloud QR \u2014 scan on another phone with NGMY Slides open.":"Offline QR \u2014 keep both devices on the same network if scan fails.",j,j,j,j,j,j,A.ho,A.L,j,j))
return B.cb(j,h,B.bn(!0,B.v(B.a([new B.C(Ag.LO,v,j),B.D(B.cd(B.v(B.a([t,A.aO,B.p(j,B.v(r,A.m,j,A.e,A.j,0,A.p),A.f,j,j,new B.o(j,j,s,q,j,D.bSg,A.n),j,j,j,j,A.tp,j,j,1/0)],u),A.m,j,A.e,A.j,0,A.p),A.q,j,A.y,j,E.agP,j,j,A.ai),1)],u),A.m,j,A.e,A.j,0,A.p),!0,!1,A.ag,!0,!0),j,!1,!1,j,j)}}
C.aCW.prototype={
T(){return new C.aCX(new B.ar(A.as,$.aw()),B.kh(!0,null,!0,!0,null,null,!1))}}
C.aCX.prototype={
a_(){var w=this
w.a1()
w.e.aM(0,new C.el2(w))
$.aT.x1$.push(new C.el3(w))},
q(){var w=this.d
w.S$=$.aw()
w.P$=0
this.e.q()
this.a2()},
aXJ(){var w,v=this.c
v.toString
w=C.yc(this.d.a.a.toUpperCase())
if(w==null)w=""
B.a5(v,!1).N(w)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=B.aI(a2,A.eD,x.w).w,i=B.m(28),h=B.I(A.bi.j(0.4),A.r,1.2),g=x.V,f=B.a([new B.ac(0,A.G,A.bi.j(0.28),A.u6,36),D.a9Y],g),e=B.m(28),d=A.c.j(0.16),a0=B.m(16),a1=x.p
a0=B.p(k,B.v(B.a([B.p(k,D.bHu,A.f,k,k,new B.o(d,k,B.I(A.c.j(0.28),A.r,1),a0,k,k,A.n),k,52,k,k,k,k,k,52),A.ac,D.fa4,A.ao,B.d("Type the 5-character code shown with the QR.",k,k,k,k,k,k,B.l(k,k,A.c.j(0.82),k,k,k,k,k,k,k,k,13,k,k,A.a4,k,1.35,!0,k,k,k,k,k,k,k,k),A.L,k,k)],a1),A.m,k,A.e,A.j,0,A.p),A.f,k,k,D.aYX,k,k,k,k,A.xm,k,k,1/0)
d=B.a([],a1)
for(w=l.d,v=l.e,u=0;u<5;++u){t=B.a([],a1)
if(u===2)t.push(A.aw)
s=w.a.a
r=u<s.toUpperCase().length
q=u===s.toUpperCase().length&&v.ge6()
p=r?w.a.a.toUpperCase()[u]:""
s=r||q?A.aA:A.M
o=new B.aV(14,14)
if(q)n=A.bi
else n=r?A.bi.j(0.55):A.aK
m=new B.az(n,q?2:1.2,A.r,-1)
n=q?B.a([new B.ac(0,A.G,A.bi.j(0.28),A.J,12)],g):k
t.push(new B.bF(1,A.bj,B.dg(A.A,new B.x(p,k,D.eUx,k,k,k,k,k,k,k,k,k),k,k,A.bb,new B.o(s,k,new B.bP(m,m,m,m),new B.bp(o,o,o,o),n,k,A.n),A.hW,k,56,k,k,k,k,k),k))
if(u!==4&&u!==1)t.push(L.Ih)
A.d.v(d,t)}g=B.a([B.A(d,A.m,k,A.e,A.j,0,k,k),B.bY(0,B.db(B.aL(k,A.T,!0,k,!0,A.q,k,B.aM(),w,k,k,k,k,k,2,D.bOD,A.y,!0,k,!0,k,!1,v,A.ah,k,k,B.a([new B.u2(B.af("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.AS(5,k),new C.bsU()],x.aS),k,k,A.aNn,k,5,k,1,k,k,!1,"\u2022",k,new C.ekZ(l),k,new C.el_(l),k,!1,k,k,!1,k,!0,k,A.a9,k,k,k,k,k,k,k,k,k,k,k,k,!0,A.a5,k,A.lR,k,k,k,k),0),0,0,0)],a1)
d=C.yc(w.a.a.toUpperCase())==null?k:l.gc5c()
return B.av(new B.C(new B.Q(24,24,24,24+j.f.d),B.aF(!1,A.a1,!0,k,new B.cU(Ad.JC,B.p(k,B.bw(e,B.v(B.a([a0,new B.C(D.bqP,B.v(B.a([new B.an(A.W,k,A.aa,A.q,g,k),A.S,D.f8v,A.bv,new B.a6(1/0,50,B.bJ(D.foo,d,B.bk(A.bi,A.bl,A.ak,k,A.c,k,k,k,new B.b7(B.m(16),A.Y),k,k,k)),k),A.ao,B.bK(!1,A.ni,k,k,!0,k,k,new C.el0(a2),k,B.fu(k,k,k,k,k,k,k,k,k,k,k,A.bI,k,k,k,k,k,k,k,k,k,k,k,k,k,k))],a1),A.m,k,A.e,A.j,0,A.p),k)],a1),A.m,k,A.e,A.Q,0,A.p),A.aq),A.f,k,k,new B.o(A.db,k,h,i,f,k,A.n),k,k,k,k,k,k,k,k),k),A.f,A.K,0,k,k,k,k,k,A.af),k),k,k,k)}}
C.bsU.prototype={
oi(d,e){var w=e.a.toUpperCase()
return e.cEA(B.h8(A.bu,w.length),w)}}
C.apT.prototype={
T(){return new C.aD_(B.yM(A.L5,A.np,A.tO))}}
C.aD_.prototype={
q(){this.d.q()
this.a2()},
aXI(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
B.iL(w,d)},
a9g(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a9g=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e){w=1
break}s=t.c
s.toString
w=3
return B.b(C.fHL(s),$async$a9g)
case 3:r=e
if(r==null||t.c==null){w=1
break}t.aXI("NGMYSLIDECODE|"+r)
case 1:return B.h(u,v)}})
return B.i($async$a9g,v)},
c5a(d){var w,v,u,t
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u){t=C.hZv(w[u])
if(t!=null){this.aXI(t)
return}}},
B(d){var w,v,u,t=this,s=null,r=B.aH(s,s,s,s,A.vt,s,s,s,t.gbKQ(),s,s,s,s,"Enter document code",s),q=t.f,p=q?"Flash off":"Flash on",o=x.p
p=B.eD(B.a([r,B.aH(s,s,s,s,B.W(q?A.qP:Al.MK,s,s,s,s,s),s,s,s,new C.erE(t),s,s,s,s,p,s)],o),s,s,!0,!0,A.db,s,1,s,s,s,!1,s,!1,A.c,s,s,s,!0,s,s,s,s,s,D.fpD,s,s,s,1,s,!0)
r=B.yL(t.d,A.bQ,t.gc59())
w=B.m(28)
w=B.av(B.p(s,s,A.f,s,s,new B.o(s,s,B.I(A.bi,A.r,3),w,B.a([new B.ac(2,A.G,A.bi.j(0.35),A.J,24)],x.V),s,A.n),s,260,s,s,s,s,s,260),s,s,s)
v=A.w.j(0.72)
u=B.m(16)
return B.cb(p,A.w,new B.an(A.W,s,A.b_,A.q,B.a([r,w,B.ao(32,B.p(s,D.fdQ,A.f,s,s,new B.o(v,s,B.I(A.bi.j(0.45),A.r,1),u,s,s,A.n),s,s,s,s,A.j8,s,s,s),s,s,20,20,s,s)],o),s),s,!1,!1,s,s)}}
C.bt5.prototype={
B(d){var w=null,v=B.m(24),u=B.I(A.aK,A.r,1)
return B.aF(!1,A.a1,!0,w,B.p(w,B.v(B.a([B.p(w,D.bFF,A.f,w,w,D.aYG,w,56,w,w,w,w,w,56),A.aO,D.fpj,A.ao,new B.ka(this.c,new C.f1S(),w,w,x.cI),A.aO,new B.ka(this.d,new C.f1T(),w,w,x.cl),A.ac,D.fpg],x.p),A.m,w,A.e,A.Q,0,A.p),A.f,w,Ad.JC,new B.o(A.aA,w,u,v,w,w,A.n),w,w,w,K.Y5,D.brr,w,w,w),A.f,A.K,0,w,w,w,w,w,A.af)}}
C.a6P.prototype={
T(){return new C.bip(A.bx)},
gdc(){return this.c}}
C.bip.prototype={
a_(){var w=this
w.a1()
if(w.a.d)return
w.Z7()
w.d=B.dC(A.hg,new C.e9y(w))},
q(){var w=this.d
if(w!=null)w.a9(0)
this.a2()},
Z7(){return this.cjh()},
cjh(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$Z7=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q={}
p=t.a
if(p.d){if(t.c!=null)t.m(new C.e9w(t))
w=1
break}s=p.e
q.a=null
w=s!=null?3:5
break
case 3:q.a=s.by(new B.S(Date.now(),0,!1))
w=4
break
case 5:w=6
return B.b(C.ccl(p.c),$async$Z7)
case 6:r=e
q.a=r==null?A.bx:r
case 4:if(t.c==null){w=1
break}t.m(new C.e9x(q,t))
if(q.a.a<=0&&!t.f){t.f=!0
t.a.f.$0()}case 1:return B.h(u,v)}})
return B.i($async$Z7,v)},
bMH(d){var w,v,u=d.a,t=A.o.an(u,36e8)
if(t>=999)return"Admin \u2014 unlimited"
w=A.o.an(u,6e7)%60
v=A.o.an(u,1e6)%60
if(t>0)return""+t+"h "+A.a.aT(A.o.u(w),2,"0")+"m "+A.a.aT(A.o.u(v),2,"0")+"s left"
return A.a.aT(A.o.u(w),2,"0")+":"+A.a.aT(A.o.u(v),2,"0")+" left"},
B(d){var w,v,u,t,s=this,r=null
if(s.a.d)return A.bH
w=s.e.a
v=A.o.an(w,6e7)<30&&A.o.an(w,36e8)<999?A.aB:A.bU
w=v.j(0.14)
u=B.m(14)
t=B.I(v.j(0.55),A.r,1)
return B.p(r,B.A(B.a([B.W(A.Fo,v,r,r,r,20),A.aw,B.D(B.d("Marriage document session \xb7 "+s.bMH(s.e),r,r,r,r,r,r,B.l(r,r,v,r,r,r,r,r,r,r,r,13,r,r,A.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),1)],x.p),A.m,r,A.e,A.j,0,r,r),A.f,r,r,new B.o(w,r,t,u,r,r,A.n),r,r,r,W.afB,A.iO,r,r,1/0)}}
C.a7H.prototype={
n2(){var w,v,u,t=this
t.wR()
w=t.cx
v=t.c
w.bnS(t.cy,t,v)
u=x.Y
v.a.n(0,"/A",B.pI(B.E(["/S",D.e5F,"/URI",new B.rg(B.VF(w.as),A.u9,!0)],x.N,u),u))}}
C.a7I.prototype={
a4(){return"PdfAnnotFlags."+this.b}}
C.b1e.prototype={
bvj(d,e,f,g,h,i,j,k,l,m){var w=B.eu([D.e3Y],x.di)
this.w!==$&&B.aO()
this.w=w},
gcHO(){var w=this.w
w===$&&B.c()
if(w.a===0)return 0
return new B.jJ(w,new C.cex(),B.a3(w).k("jJ<cl.E,G>")).fE(0,new C.cey())},
aBg(d,e,f){var w,v,u,t=this,s=f.a
s.n(0,"/Subtype",new B.h6(t.a))
w=t.b
v=w.a
u=w.b
s.n(0,"/Rect",B.td(B.a([v,u,v+w.c,u+w.d],x.cA)))
s.n(0,"/P",new B.j8(d.a,d.b))
s.n(0,"/Border",B.td(D.bUg))
w=t.w
w===$&&B.c()
if(w.a!==0)s.n(0,"/F",new B.fX(t.gcHO()))
w=t.z
if(w.a!==0)s.n(0,"/AP",B.pI(w,x.Y))}}
C.cez.prototype={}
C.a1X.prototype={}
C.ah2.prototype={}
C.aPI.prototype={
fW(d){var w,v,u,t,s,r,q=this,p=null
q.l8(d)
q.Ll(d)
w=q.a
v=d.a
v.toString
w.toString
w=d.bdA(w)
u=x.N
t=x.Y
s=new C.cez(q.d.a,"/Link",w,p,p,p,p,p,B.V(u,t))
s.bvj(p,p,p,p,p,p,p,w,p,"/Link")
w=v.x
t=B.pI(B.E(["/Type",D.e5D],u,t),t)
u=w.b++
r=w.e
r===$&&B.c()
r=new C.a7H(s,v,w,u,0,t,r,B.a([],x.s),p,p,0)
w.c.K(0,r)
v.dx.push(r)}}
C.avm.prototype={}
C.aRb.prototype={
fW(d){var w,v,u,t,s=this
s.l8(d)
w=s.b
if(w!=null){v=B.dl()
u=s.a
v.e2(u.a,u.b,0,1)
u=d.b
u.i_()
t=s.a
t.toString
u.Kv(t)
u.RN(0)
u.oE(0,v)
w.fW(d)
u.n5(0)}}}
var z=a.updateTypes(["ay<~>()","~(lA)","R(hZ)","~()","R(eG)","R(oa)","R(lA)","~(hZ)","R(eG,eG)","Je(Y)","R(nA)","R(l6)","ay<R>()","G(G,hZ)","a4<n,@>(hZ)","ak<z4>()","n(nA)","R(a75)","n(lA)","n(vE)","R(Ea)","G(hZ,hZ)","n(eG)","r(eG)","cK(eG)","r(hw)","~(hw)","eG(us,N,N,N,N,G{fx:n,key:n,rotation:N})","eG(n,N,G)","G(oa,oa)","R(z4)","R(n,ak<z4>)","a4<n,@>(oa)","nA()","XJ(Y)","eG(n,N,N,N,N,N{align:pP,anim:hw,bullets:R,color:G?,delay:G,fx:n,key:n,style:H3,weight:qa})","a_W(Y)","eG(n,N,N,N,N{anim:hw,delay:G,fx:n,key:n})","ay<~>(oa)","R(mk)","XH(Y)","a_u(Y)","a_t(Y)","OE(Y)","YS(Y)","eG(us,N,N,N,N,G,n,n{anim:hw,delay:G,rotation:N,stroke:G,strokeWidth:N})","eG(n,N,N,N,N,N,n,n,G)","eG(N,N,n,G{size:N})","r(r4,N,N)","l6()","oa(a4<@,@>)","~(ui)","Ea()","fd(eG)","r(iV)","Yq(Y)","~(E1)","YL(Y)","G(eG,eG)","eG(eG)","a4<n,@>(eG)","eG(a4<@,@>)","lA(lA)","a4<n,@>(lA)","lA(a4<@,@>)","R(jA)","jA()","n(hZ)","~(ak<oa>)","S(ak<hZ>)","S(hZ)","ak<hZ>(n?)","abC(Y,G)","~(R(eG,eG))","acf(Y)","adU(Y,G)","w(lA,R)","US(Y)","aci(Y)","UV(Y)","~(mo)","hZ(hZ)","N(eG)","a__(Y)","ZC(Y)","hZ()","ak<Ew>()","ay<~>(ak<hZ>)","r(bu<G,hZ>)","C(jA)","C(Ea)","ay<~>(hw,~())","r(ak<hw>,hw?,~(hw),w)","R(lX)","ak<jj<mo>>(Y)","jj<mo>(mo)","hZ(a4<@,@>)","V6(Y)","eG(n,N,N,N,N,N,G{align:pP,style:H3,weight:qa})","V7(Y)","r(hZ)","~(lR)","I5(Y,lA,r?)","G(a7I)","ay<ak<a4<n,@>>?>()","n(n)","ay<z2>({paper:n?,photo:dD?,request:n,template!l9})","ay<a6Y>({doc!z2,history:ak<+(n,n)>,instruction!n,photo:dD?,template!l9})","acc(Y)"])
C.cCi.prototype={
$2(d,e){d=d+e&536870911
d=d+((d&524287)<<10)&536870911
return d^d>>>6},
$S:74}
C.cCj.prototype={
$1(d){d=d+((d&67108863)<<3)&536870911
d^=d>>>11
return d+((d&16383)<<15)&536870911},
$S:73}
C.cCk.prototype={
$1(d){var w,v,u,t,s,r,q
for(w=this.a,v=this.b,u=v.c-1,v=v.b;t=w.a,t<d;){t=w.c
if(t<0){w.c=t-1
s=0
r=16}else{s=v[t]
r=t===u?A.o.gaiQ(s):16;--w.c}w.b=A.o.dU(w.b,r)+s
w.a+=r}v=w.b
t-=d
q=A.o.mh(v,t)
w.b=v-A.o.dU(q,t)
w.a=t
return q},
$S:73}
C.cCl.prototype={
$0(){var w,v,u,t,s
for(w=this.a,v=w.$flags|0,u=1,t=0;t<8;++t){if(u===0)break
s=w[t]+u
v&2&&B.aj(w)
w[t]=s&255
u=s>>>8}},
$S:0}
C.bMH.prototype={
$1(d){return J.eW(A.dG.gaP(d),d.byteOffset,d.byteLength)},
$S:1666}
C.fm4.prototype={
$5(d,e,f,g,h){var w=this,v=w.a
if((v&8)!==0)B.iG(w.b,d+f,e+g,w.c,h,w.d,!1,w.e,w.f)
if((v&4)!==0)B.iG(w.b,d-f,e+g,w.c,h,w.d,!1,w.e,w.f)
if((v&2)!==0)B.iG(w.b,d+f,e-g,w.c,h,w.d,!1,w.e,w.f)
if((v&1)!==0)B.iG(w.b,d-f,e-g,w.c,h,w.d,!1,w.e,w.f)},
$S:1667}
C.bX6.prototype={
$1(d){return B.a1(d,x.N,x.z)},
$S:26}
C.bX7.prototype={
$2(d,e){var w,v=J.q(e,"savedAt")
v=J.k(v==null?"":v)
w=J.q(d,"savedAt")
return A.a.aL(v,J.k(w==null?"":w))},
$S:42}
C.bX9.prototype={
$1(d){var w=J.q(d,"id")
return J.k(w==null?"":w)===this.a},
$S:4}
C.fBP.prototype={
$1(d){return new C.a_W(this.a,this.b,C.i_n(),null)},
$S:z+36}
C.f0k.prototype={
$0(){var w=this.a
w.e=this.b
w.f=!1},
$S:0}
C.f0o.prototype={
$1(d){return this.a.d.t(0,d.a)},
$S:z+2}
C.f0p.prototype={
$0(){var w=this.a
w.r=!0
w.x=null},
$S:0}
C.f0q.prototype={
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
C.f0l.prototype={
$0(){var w=this.a
w.r=!0
w.x=null},
$S:0}
C.f0m.prototype={
$0(){var w=this.a
w.r=!1
w.x="Could not open that saved presentation."
w.y=!0},
$S:0}
C.f0n.prototype={
$0(){var w=this.a
w.r=!1
w.x='"'+this.b.b+'" is back in your presentations.'
w.y=!1},
$S:0}
C.f0f.prototype={
$1(d){var w=null,v=B.d('"'+this.a+'" will be removed from the database. Your own copy stays in your presentations.',w,w,w,w,w,w,A.hA,w,w,w)
return B.eh(B.a([B.bK(!1,D.fcg,w,w,!0,w,w,new C.f0d(d),w,w),B.bK(!1,D.fbo,w,w,!0,w,w,new C.f0e(d),w,w)],x.p),w,w,D.WE,v,w,w,w,w,D.fpU,w)},
$S:19}
C.f0d.prototype={
$0(){B.a5(this.a,!1).N(!1)
return null},
$S:0}
C.f0e.prototype={
$0(){B.a5(this.a,!1).N(!0)
return null},
$S:0}
C.f0g.prototype={
$0(){return this.a.r=!0},
$S:0}
C.f0h.prototype={
$0(){return this.a.r=!1},
$S:0}
C.f0u.prototype={
$0(){var w=this.a
return w.m(new C.f0t(w,this.b))},
$S:0}
C.f0t.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.f0j.prototype={
$0(){var w=this.a
return w.m(new C.f0i(w,this.b,this.c))},
$S:0}
C.f0i.prototype={
$0(){var w=this.a.d,v=this.c.a
return this.b?w.W(0,v):w.K(0,v)},
$S:0}
C.f0r.prototype={
$0(){return this.a.a0e(this.b)},
$S:0}
C.f0s.prototype={
$0(){return this.a.Op(0,this.b)},
$S:0}
C.f0x.prototype={
$0(){B.a5(this.a,!1).N(null)
return null},
$S:0}
C.f0y.prototype={
$0(){var w=this.a
return w.m(new C.f0w(w,this.b))},
$S:0}
C.f0w.prototype={
$0(){var w=this.a,v=w.d
if(this.b)v.a8(0)
else{w=w.a.c
v.v(0,new B.K(w,new C.f0v(),B.T(w).k("K<1,n>")))}},
$S:0}
C.f0v.prototype={
$1(d){return d.a},
$S:z+67}
C.f7w.prototype={
$1(d){var w,v=x.N,u=x.z,t=B.a1(d,v,u),s=t.h(0,"id")
s=J.k(s==null?"":s)
w=x.f
v=F.h0t(w.b(t.h(0,"doc"))?B.a1(w.a(t.h(0,"doc")),v,u):A.cz)
t=t.h(0,"updatedAt")
u=B.bi(J.k(t==null?"":t))
return new C.oa(s,v,u==null?new B.S(Date.now(),0,!1):u)},
$S:z+50}
C.f7x.prototype={
$1(d){return d.a.length!==0},
$S:z+5}
C.foz.prototype={
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
C.fox.prototype={
$1(d){return!this.a.t(0,d.a)},
$S:z+5}
C.foy.prototype={
$2(d,e){return e.c.aL(0,d.c)},
$S:z+29}
C.fBj.prototype={
$1(d){return d.ae()},
$S:z+32}
C.flL.prototype={
$1(d){return d.a===this.a},
$S:z+5}
C.fCa.prototype={
$1(d){return new C.XJ(this.a,null)},
$S:z+34}
C.cDE.prototype={
$1(d){return A.a.i(d.b).length===0},
$S:z+39}
C.cDG.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.cDJ.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cDK.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.cDI())},
$S:11}
C.cDI.prototype={
$0(){},
$S:0}
C.cDL.prototype={
$1(d){var w=0,v=B.j(x.a),u=this,t,s,r,q,p
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(C.a0V(t.a.c),$async$$1)
case 2:s=f
r=u.b
q=J.cE(s)
p=q.bc(s,new C.cDH(r))
if(p<0)q.cn(s,0,r)
else q.n(s,p,r)
w=3
return B.b(C.agl(t.a.c,s),$async$$1)
case 3:return B.h(null,v)}})
return B.i($async$$1,v)},
$S:327}
C.cDH.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cDM.prototype={
$1(d){},
$S:30}
C.cDF.prototype={
$1(d){return new C.XH(this.b,this.a.gcsM(),null)},
$S:z+40}
C.cDN.prototype={
$1(d){return D.fFP},
$S:z+43}
C.cDA.prototype={
$1(d){var w=null,v=B.m(24),u=B.I(D.Wl,A.r,1),t=x.p
return B.av(B.aF(!1,A.a1,!0,w,B.p(w,B.v(B.a([new B.C(D.brd,B.v(B.a([B.p(w,D.bEJ,A.f,w,w,new B.o(A.aB.j(0.14),w,w,w,w,w,A.a6),w,56,w,w,w,w,w,56),A.aO,D.fas,A.S,B.d("\u201c"+this.a.b.a+"\u201d is removed from this device. This cannot be undone.",w,w,w,w,w,w,D.eZP,A.L,w,w)],t),A.m,w,A.e,A.j,0,A.p),w),A.e0,new B.C(A.pv,B.A(B.a([B.D(B.dT(D.fh5,new C.cDy(d),B.de(w,w,w,w,w,w,w,w,w,E.mO,w,w,A.cf,w,new B.b7(B.m(14),A.Y),D.aVX,w,w,w,w)),1),A.aw,B.D(B.bJ(D.fmK,new C.cDz(d),B.bk(A.bL,w,w,w,w,w,A.cf,w,new B.b7(B.m(14),A.Y),w,w,w)),1)],t),A.m,w,A.e,A.j,0,w,w),w)],t),A.m,w,A.e,A.Q,0,A.p),A.f,w,A.wt,new B.o(D.abz,w,u,v,D.cRj,w,A.n),w,w,w,K.Y5,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.af),w,w,w)},
$S:1668}
C.cDy.prototype={
$0(){B.a5(this.a,!1).N(!1)
return null},
$S:0}
C.cDz.prototype={
$0(){B.a5(this.a,!1).N(!0)
return null},
$S:0}
C.cDB.prototype={
$0(){return J.ni(this.a.d,new C.cDx(this.b))},
$S:0}
C.cDx.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cDw.prototype={
$1(d){var w,v,u,t=null,s=B.m(28),r=B.I(D.Wl,A.r,1),q=x.p
q=B.a([B.A(B.a([B.p(t,D.bJA,A.f,t,t,new B.o(t,t,t,B.m(14),t,D.amV,A.n),t,44,t,t,t,t,t,44),A.bf,B.D(B.v(B.a([B.d(this.a.b.a,t,1,A.a2,t,t,t,D.aP_,t,t,t),A.bA,D.fmH],q),A.F,t,A.e,A.j,0,A.p),1)],q),A.m,t,A.e,A.j,0,t,t),A.ay],q)
for(w=0;w<2;++w){v={}
u=D.daU[w]
v.a=null
u=u.a
v.a=u[0]
q.push(new C.awf(u[1],u[2],u[3],new C.cDu(v,d),!1,t))}q.push(A.ao)
q.push(D.blk)
q.push(A.ao)
q.push(new C.awf(A.e4,"Delete book","Remove it from this device",new C.cDv(d),!0,t))
return B.bn(!0,B.p(t,B.v(q,A.F,t,A.e,A.Q,0,A.p),A.f,t,t,new B.o(D.abz,t,r,s,t,t,A.n),t,t,t,A.tk,E.XK,t,t,t),!0,!1,A.ag,!0,!0)},
$S:27}
C.cDu.prototype={
$0(){var w=this.a.a
B.a5(this.b,!1).N(w)
return null},
$S:0}
C.cDv.prototype={
$0(){B.a5(this.a,!1).N("delete")
return null},
$S:0}
C.cDD.prototype={
$3(d,e,f){var w=null,v=B.m(4),u=B.a([new B.ac(0,A.G,A.w.j(0.45),A.aEZ,12)],x.V)
return B.dU(B.eA(A.A,e,B.p(w,B.bw(B.m(4),new B.a6(62,95.81818181818181,B.f1(A.A,F.amS(d),A.f,A.dt),w),A.aq),A.f,w,w,new B.o(w,w,w,v,u,w,A.n),w,w,w,w,w,w,w,w),w),new B.u(f,0))},
$S:z+48}
C.cDC.prototype={
$0(){return this.a.c01()},
$S:0}
C.cDt.prototype={
$0(){return this.a.aWl(0,this.b)},
$S:0}
C.cDs.prototype={
$0(){return this.a.CL(this.b)},
$S:0}
C.cDr.prototype={
$0(){return this.a.CL(this.b)},
$S:0}
C.cDO.prototype={
$2(d,e){var w=this.a
return w.bzO(J.q(w.d,e))},
$S:39}
C.cCV.prototype={
$0(){var w=this.a
if(w.c!=null)w.Ap()},
$S:0}
C.cCU.prototype={
$0(){var w=this.a,v=w.w
return v.push(w.aZa("Page "+(v.length+1),"",""))},
$S:0}
C.cCX.prototype={
$0(){var w=this.a.w,v=this.b,u=w[v],t=this.c
w[v]=w[t]
w[t]=u},
$S:0}
C.cD4.prototype={
$0(){},
$S:0}
C.cD5.prototype={
$1(d){var w=this.a,v=w.a,u=$.aw()
v.S$=u
v.P$=0
w=w.b
w.S$=u
w.P$=0
return null},
$S:8}
C.cCY.prototype={
$0(){return this.a.c="data:"+this.b+";base64,"+A.cS.gcv().aJ(this.c)},
$S:0}
C.cCW.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.cD_.prototype={
$0(){return this.a.PI(this.b)},
$S:0}
C.cD0.prototype={
$0(){return this.a.PI(this.b)},
$S:0}
C.cD1.prototype={
$0(){var w=this.a
w.m(new C.cCZ(this.b))
w.DA()},
$S:0}
C.cCZ.prototype={
$0(){return this.a.c=""},
$S:0}
C.cD3.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new C.cD2(w,d))
w.DA()},
$S:z+51}
C.cD2.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.cDa.prototype={
$2(d,e){if(d)this.a.Ap()},
$S:121}
C.cD6.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=2
return B.b(u.a.Ap(),$async$$0)
case 2:t=u.b
if(t.e!=null)t.I(x.q).f.R(D.eNz)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.cD7.prototype={
$0(){return this.a.aVj(this.b,-1)},
$S:0}
C.cD8.prototype={
$0(){return this.a.aVj(this.b,1)},
$S:0}
C.cD9.prototype={
$0(){return this.a.c1g(0,this.b)},
$S:0}
C.ft5.prototype={
$1(d){return C.hap()},
$S:44}
C.ft6.prototype={
$1(d){return null},
$S:30}
C.fbV.prototype={
$1(d){return null},
$S:30}
C.fu4.prototype={
$1(d){var w=d.b[0]
w.toString
return w},
$S:299}
C.fu3.prototype={
$2(d,e){return A.o.aL(e.length,d.length)},
$S:253}
C.fua.prototype={
$1(d){var w=this.a
return C.fU1(d)===w||C.heW(d)===w},
$S:z+4}
C.faY.prototype={
$1(d){return A.a.aT(A.o.u(d),2,"0")},
$S:78}
C.c6G.prototype={
$1(d){return d.length!==0},
$S:3}
C.ft3.prototype={
$1(d){return d.a===this.a.a.a},
$S:z+4}
C.ft4.prototype={
$1(d){return C.fvO(d)&&A.a.t(d.db,"rais")},
$S:z+4}
C.fnU.prototype={
$1(d){var w=null
return B.bn(!0,new B.C(E.xl,B.v(B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.b5,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bv,D.fhF,A.P,B.d("Hati ya jimbo: "+this.a,w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aO,B.dp(D.G_,D.fbZ,new C.fnS(d),B.bk(A.bU,w,w,w,A.w,w,A.cf,w,w,w,w,w)),A.S,B.ez(A.vs,D.fiT,new C.fnT(d),B.de(w,w,w,w,w,w,w,w,w,A.ad,w,w,A.cf,w,w,Q.wr,w,w,w,w))],x.p),A.aj,w,A.e,A.Q,0,A.p),w),!0,!1,A.ag,!0,!0)},
$S:27}
C.fnS.prototype={
$0(){B.a5(this.a,!1).N("continue")
return null},
$S:0}
C.fnT.prototype={
$0(){B.a5(this.a,!1).N("new")
return null},
$S:0}
C.fnV.prototype={
$1(d){var w=null
return B.eh(B.a([B.bK(!1,D.f8n,w,w,!0,w,w,new C.fnQ(d),w,w),B.bJ(D.foX,new C.fnR(d),w)],x.p),w,w,w,D.fqN,w,w,w,w,D.f8h,w)},
$S:19}
C.fnQ.prototype={
$0(){B.a5(this.a,!1).N(!1)
return null},
$S:0}
C.fnR.prototype={
$0(){B.a5(this.a,!1).N(!0)
return null},
$S:0}
C.e4m.prototype={
$0(){var w=this.a
w.r=w.f=w.e=!1},
$S:0}
C.e4k.prototype={
$0(){return this.a.e=!0},
$S:0}
C.e4l.prototype={
$0(){return this.a.f=!0},
$S:0}
C.e4n.prototype={
$0(){return this.a.r=!1},
$S:0}
C.e4o.prototype={
$0(){return this.a.r=!0},
$S:0}
C.fu9.prototype={
$1(d){return A.a.aT(A.o.u(d),2,"0")},
$S:78}
C.fu5.prototype={
$2$h$w(d,e){var w=null
return new B.bI(A.a3,w,w,B.Dm(A.A,B.p(w,w,A.f,w,w,new B.o(this.a.j(0.14),w,w,B.m(3),w,w,A.n),w,d,w,w,w,w,w,w),w,e),w)},
$0(){return this.$2$h$w(5,1)},
$1$w(d){return this.$2$h$w(5,d)},
$1$h(d){return this.$2$h$w(d,1)},
$S:1669}
C.fu7.prototype={
$1(d){var w=null,v=B.m(3)
return B.p(A.A,B.d(d,w,w,w,w,w,w,D.f0_,w,w,w),A.f,w,w,new B.o(this.a,w,w,v,w,w,A.n),w,12,w,w,w,w,w,w)},
$S:188}
C.fu8.prototype={
$1$size(d){var w=null
return B.A(B.a([B.p(w,w,A.f,w,w,new B.o(w,w,B.I(A.hU,A.r,1.5),w,w,w,A.a6),w,d,w,w,w,w,w,d),B.dU(B.p(w,w,A.f,w,w,new B.o(w,w,B.I(A.hU,A.r,1.5),w,w,w,A.a6),w,d,w,w,w,w,w,d),new B.u(-d*0.38,0))],x.p),A.m,w,A.ba,A.j,0,w,w)},
$0(){return this.$1$size(18)},
$S:1670}
C.fu6.prototype={
$2$female$size(d,e){var w=null,v=d?D.adg:this.a,u=B.I(A.hU,A.r,1),t=e*0.32,s=B.ao(w,B.p(w,w,A.f,w,w,new B.o(v,w,w,w,w,w,A.a6),w,t,w,w,w,w,w,t),w,w,w,w,e*0.16,w),r=d?0.62:0.5
return B.p(w,new B.an(A.A,w,A.aa,A.q,B.a([s,B.ao(e*0.06,B.p(w,w,A.f,w,w,new B.o(v,w,w,B.m(7),w,w,A.n),w,t,w,w,w,w,w,e*r),w,w,w,w,w,w)],x.p),w),A.f,w,w,new B.o(D.abN,w,u,w,w,w,A.a6),w,e,w,w,w,w,w,e)},
$1$female(d){return this.$2$female$size(d,18)},
$S:1671}
C.fFC.prototype={
$1(d){return new C.acc(this.a,this.b,null)},
$S:z+108}
C.dV1.prototype={
$2(d,e){var w,v,u,t=null,s=this.b,r=s?D.biq:A.KA,q=B.I(D.j0.j(0.25),A.r,1),p=B.av(B.p(t,t,A.f,t,t,new B.o(A.bU.j(0.45),t,t,B.m(2),t,t,A.n),t,4,t,t,t,t,t,40),t,t,t),o=B.m(15)
o=B.p(t,D.alF,A.f,t,t,new B.o(t,t,B.I(A.c.j(0.5),A.r,1.2),o,B.a([new B.ac(0,A.G,D.j0.j(0.35),A.ej,10)],x.V),D.bSS,A.n),t,t,t,t,A.Lp,t,t,t)
w=this.a
v=w.d.length
u=x.p
return B.p(t,B.v(B.a([new B.C(H.XV,B.v(B.a([p,A.ay,B.A(B.a([o,A.bf,B.D(B.v(B.a([B.d("Chagua muundo wa hati",t,t,t,t,t,t,B.l(t,t,s?A.c:D.j0,t,t,t,t,t,t,t,t,17,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),A.bA,B.d(w.c+" \xb7 "+v+" miundo",t,t,t,t,t,t,D.f_h,t,t,t)],u),A.F,t,A.e,A.j,0,A.p),1)],u),A.m,t,A.e,A.j,0,t,t)],u),A.m,t,A.e,A.j,0,A.p),t),B.D(B.ic(!0,t,e,A.y,D.aMq,new C.dV0(w,this.c),v,D.agr,t,A.ai,!1),1)],u),A.m,t,A.e,A.j,0,A.p),A.f,t,t,new B.o(r,t,q,A.lX,t,t,A.n),t,t,t,t,t,t,t,t)},
$S:110}
C.dV0.prototype={
$2(d,e){var w=this.a.d[e]
return new C.abC(w,new C.dV_(this.b,w),null)},
$S:z+72}
C.dV_.prototype={
$0(){B.a5(this.a,!1).N(this.b.a)
return null},
$S:0}
C.fnY.prototype={
$1(d){return d.w==="hati_kuhowa"},
$S:z+2}
C.fnZ.prototype={
$1(d){var w=null,v=this.a
return B.bn(!0,new B.C(E.xl,B.v(B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.b5,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bv,D.fkV,A.P,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aO,B.dp(D.G_,B.d('Endelea na "'+A.d.gL(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fnW(d),B.bk(D.j0,w,w,w,A.c,w,A.cf,w,w,w,w,w)),A.S,B.ez(A.nP,D.T7,new C.fnX(d),B.de(w,w,w,w,w,w,w,w,w,A.ad,w,w,A.cf,w,w,Q.wr,w,w,w,w))],x.p),A.aj,w,A.e,A.Q,0,A.p),w),!0,!1,A.ag,!0,!0)},
$S:27}
C.fnW.prototype={
$0(){B.a5(this.a,!1).N("continue")
return null},
$S:0}
C.fnX.prototype={
$0(){B.a5(this.a,!1).N("new")
return null},
$S:0}
C.fo1.prototype={
$1(d){return d.w==="hati_kuhoweya"},
$S:z+2}
C.fo2.prototype={
$1(d){var w=null,v=this.a
return B.bn(!0,new B.C(E.xl,B.v(B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.b5,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bv,D.f9l,A.P,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aO,B.dp(D.G_,B.d('Endelea na "'+A.d.gL(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fo_(d),B.bk(D.j0,w,w,w,A.c,w,A.cf,w,w,w,w,w)),A.S,B.ez(A.nP,D.T7,new C.fo0(d),B.de(w,w,w,w,w,w,w,w,w,A.ad,w,w,A.cf,w,w,Q.wr,w,w,w,w))],x.p),A.aj,w,A.e,A.Q,0,A.p),w),!0,!1,A.ag,!0,!0)},
$S:27}
C.fo_.prototype={
$0(){B.a5(this.a,!1).N("continue")
return null},
$S:0}
C.fo0.prototype={
$0(){B.a5(this.a,!1).N("new")
return null},
$S:0}
C.fo5.prototype={
$1(d){return d.w==="hati_malipo_awamu"},
$S:z+2}
C.fo6.prototype={
$1(d){var w=null,v=this.a
return B.bn(!0,new B.C(E.xl,B.v(B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.b5,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bv,D.ffw,A.P,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aO,B.dp(D.G_,B.d('Endelea na "'+A.d.gL(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fo3(d),B.bk(D.j0,w,w,w,A.c,w,A.cf,w,w,w,w,w)),A.S,B.ez(A.nP,D.T7,new C.fo4(d),B.de(w,w,w,w,w,w,w,w,w,A.ad,w,w,A.cf,w,w,Q.wr,w,w,w,w))],x.p),A.aj,w,A.e,A.Q,0,A.p),w),!0,!1,A.ag,!0,!0)},
$S:27}
C.fo3.prototype={
$0(){B.a5(this.a,!1).N("continue")
return null},
$S:0}
C.fo4.prototype={
$0(){B.a5(this.a,!1).N("new")
return null},
$S:0}
C.fH4.prototype={
$1(d){return D.fJB},
$S:z+74}
C.e9B.prototype={
$2(d,e){var w,v=null,u=this.a,t=u?D.bau:A.KA,s=B.I(A.av.j(0.25),A.r,1),r=B.av(B.p(v,v,A.f,v,v,new B.o(A.av.j(0.45),v,v,B.m(2),v,v,A.n),v,4,v,v,v,v,v,40),v,v,v),q=B.m(15)
q=B.p(v,D.bLR,A.f,v,v,new B.o(v,v,B.I(A.c.j(0.5),A.r,1.2),q,B.a([new B.ac(0,A.G,A.bU.j(0.35),A.ej,10)],x.V),D.an_,A.n),v,v,v,v,A.Lp,v,v,v)
w=x.p
return B.p(v,B.v(B.a([new B.C(H.XV,B.v(B.a([r,A.ay,B.A(B.a([q,A.bf,B.D(B.v(B.a([B.d("Chagua muundo wa hati",v,v,v,v,v,v,B.l(v,v,u?A.c:A_.Kx,v,v,v,v,v,v,v,v,17,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.bA,B.d("Hati ya Ndoa \xb7 19 miundo",v,v,v,v,v,v,D.eXO,v,v,v)],w),A.F,v,A.e,A.j,0,A.p),1)],w),A.m,v,A.e,A.j,0,v,v)],w),A.m,v,A.e,A.j,0,A.p),v),B.D(B.ic(!0,v,e,A.y,D.aMq,new C.e9A(this.b),19,D.agr,v,A.ai,!1),1)],w),A.m,v,A.e,A.j,0,A.p),A.f,v,v,new B.o(t,v,s,A.lX,v,v,A.n),v,v,v,v,v,v,v,v)},
$S:110}
C.e9A.prototype={
$2(d,e){var w=D.PS[e]
return new C.adU(w,new C.e9z(this.a,w),null)},
$S:z+75}
C.e9z.prototype={
$0(){B.a5(this.a,!1).N(this.b.a)
return null},
$S:0}
C.fvS.prototype={
$0(){return B.fT2(C.hNX(this.a))},
$S:316}
C.fvR.prototype={
$0(){var w=C.fUj(this.a)
return"data:image/png;base64,"+A.cS.gcv().aJ(w)},
$S:23}
C.f93.prototype={
$4(d,e,f,g){var w=d+f*7,v=g*3
v=B.a([new B.j9(d,e),new B.j9(w,e+v),new B.j9(d+f*14,e),new B.j9(w,e-v)],x.J)
B.a0S(this.a,C.fy(4291404327),v)},
$S:665}
C.fHf.prototype={
$1(d){return new C.US(this.a,null)},
$S:z+77}
C.ecT.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.ecS())},
$S:29}
C.ecS.prototype={
$0(){},
$S:0}
C.ecU.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.ecR(w,d))},
$S:1673}
C.ecR.prototype={
$0(){return this.a.x=J.fa(A.dG.gaP(this.b))},
$S:0}
C.ecV.prototype={
$1(d){},
$S:30}
C.ecv.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.ecr.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.ecC.prototype={
$0(){var w=this.a
w.as=!0
w.at="The editor is writing your newspaper\u2026"},
$S:0}
C.ecD.prototype={
$0(){var w=this.a
A.d.a8(w.ay)
w.z=this.b
w=w.ax
A.d.a8(w)
w.push(D.eeu)},
$S:0}
C.ecE.prototype={
$0(){return this.a.as=!1},
$S:0}
C.ecx.prototype={
$0(){var w=this.a
w.as=!0
w.at="Working on it\u2026"
w.ax.push(new B.z("you",this.b))
w.f.bM(0,A.c3)},
$S:0}
C.ecy.prototype={
$0(){var w,v=this.b
if(v.c){w=this.a
w.ay.push(w.z)
w.z=v.b}this.a.ax.push(new B.z("ai",v.a))},
$S:0}
C.ecz.prototype={
$0(){return this.a.ax.push(new B.z("ai",B.t(this.b)))},
$S:0}
C.ecA.prototype={
$0(){return this.a.as=!1},
$S:0}
C.ecB.prototype={
$1(d){var w=this.a.r,v=w.f
if(v.length!==0){v=A.d.gcZ(v).Q
v.toString
w.m0(v,A.dV,A.i6)}},
$S:8}
C.ecw.prototype={
$0(){var w=this.a,v=w.z,u=C.fwv(w.y),t=this.b
w.y=t
if(v.a===u)w.z=v.cDI(C.fwv(t))},
$S:0}
C.ect.prototype={
$0(){var w=this.a
w.as=!0
w.at="Making your picture\u2026"},
$S:0}
C.ecu.prototype={
$0(){return this.a.as=!1},
$S:0}
C.ecK.prototype={
$0(){return B.a5(this.a,!1).m7()},
$S:0}
C.ecL.prototype={
$0(){var w=this.a
return w.m(new C.ecJ(w))},
$S:0}
C.ecJ.prototype={
$0(){var w=this.a
return w.z=w.ay.pop()},
$S:0}
C.ecM.prototype={
$0(){var w=this.a
return w.m(new C.ecI(w,this.b))},
$S:0}
C.ecI.prototype={
$0(){var w=this.b.b
this.a.e.saV(0,w)
return w},
$S:0}
C.ecN.prototype={
$1(d){var w=this.a
return w.m(new C.ecH(w))},
$S:9}
C.ecH.prototype={
$0(){return this.a.Q="en"},
$S:0}
C.ecO.prototype={
$1(d){var w=this.a
return w.m(new C.ecG(w))},
$S:9}
C.ecG.prototype={
$0(){return this.a.Q="sw"},
$S:0}
C.ecP.prototype={
$0(){var w=this.a
return w.m(new C.ecF(w,this.b))},
$S:0}
C.ecF.prototype={
$0(){var w=this.b
this.a.f.saV(0,w)
return w},
$S:0}
C.ecQ.prototype={
$1(d){return this.a.YU()},
$S:2}
C.ecs.prototype={
$0(){return this.a.c4s(this.b)},
$S:0}
C.cal.prototype={
$1(d){var w=this.a
return typeof w.h(0,d)=="string"?A.a.i(B.cO(w.h(0,d))):null},
$S:387}
C.caj.prototype={
$1(d){return A.a.i(d)},
$S:13}
C.cak.prototype={
$1(d){return d.length!==0},
$S:3}
C.fvs.prototype={
biE(d,e){var w=0,v=B.j(x.H),u,t,s,r
var $async$$2=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:r=new C.bMG(d,B.a([],x.bH))
for(u=e.length,t=0;t<e.length;e.length===u||(0,B.L)(e),++t){s=e[t]
r.cAm($.tR().ke(0,"assets/news_fonts/"+s))}w=2
return B.b(r.mx(0),$async$$2)
case 2:return B.h(null,v)}})
return B.i($async$$2,v)},
$2(d,e){return this.biE(d,e)},
$S:1674}
C.ftK.prototype={
$1(d){return d.length!==0},
$S:3}
C.ftM.prototype={
$1(d){var w=this.a.a
w=A.d.aI(A.d.dn(this.b,w,w+d)," ")
w=B.aJ(w," \n\n ","\n\n")
w=B.aJ(w," \n\n","\n\n")
return B.aJ(w,"\n\n ","\n\n")},
$S:78}
C.ftL.prototype={
$1(d){var w,v,u,t=null
if(d===0)return!0
w=B.ii(t,t,t,t,B.dq(t,t,t,t,t,t,t,t,t,this.c,this.b.$1(d)),A.q3,A.ch,t,A.eq,A.cd)
v=this.a
w.Bv(v.b)
u=w.b.a.c
return u.gbb(u)<=v.a},
$S:33}
C.f8F.prototype={
$1(d){var w=A.a.fw(d,B.af("\\s+",!0,!1,!1,!1))
return new B.a2(w,new C.f8G(),B.T(w).k("a2<1>")).gM(0)},
$S:254}
C.f8G.prototype={
$1(d){return d.length!==0},
$S:3}
C.f8D.prototype={
$2(d,e){return d+this.a.$1(e)},
$S:215}
C.f8E.prototype={
$2(d,e){return d+this.a.$1(e)},
$S:215}
C.cam.prototype={
$2(a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=null,a7=y.g,a8=b0.b
a8=isFinite(a8)?a8:824
w=b0.d
w=isFinite(w)?w:340
v=a5.b
u=a5.c
t=u-1
s=(a8-v*t)/u
r=a5.d&&a5.a.gayH()?Math.min(150,w*0.42):0
q=a5.e
p=x.s
o=B.a([],p)
for(n=a5.a,m=x.G,l=n.d,k=l.as;q>=10.5;q-=0.5){j=n.c.r
i=j.length===0?B.a([a7],p):j
h=B.b0(l.w)
g=B.a([],m)
for(f=0;f<u;++f)g.push(new B.z(s,w-(f===t?r:0)))
o=C.fU0(i,new B.F(!0,h,a6,k,a6,a6,q,A.cN,A.bk,0,a6,a6,1.28,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),g)
if(C.fQZ(j.length===0?B.a([a7],p):j,o))break}e=q*1.28
j=A.d.aI(n.gccz(),"\n\n")
d=B.ii(a6,a6,a6,a6,B.dq(a6,a6,a6,a6,a6,a6,a6,a6,a6,n.acY(k,q,1.28),j),A.q3,A.ch,a6,A.eq,A.cd)
d.Bv(s)
for(a0=1;a0<40;++a0){j=d.b.a.c
a1=Math.min(w,j.gbb(j)/u+e*a0)
j=n.c.r
i=j.length===0?B.a([a7],p):j
h=B.b0(l.w)
g=B.a([],m)
for(f=0;f<u;++f)g.push(new B.z(s,Math.min(a1,w-(f===t?r:0))))
a2=C.fU0(i,new B.F(!0,h,a6,k,a6,a6,q,A.cN,A.bk,0,a6,a6,1.28,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),g)
if(C.fQZ(j.length===0?B.a([a7],p):j,a2)){o=a2
break}}a3=n.acY(k,q,1.28)
p=x.p
m=B.a([],p)
for(k=r>0,v=v/2-0.5,l=l.w,j=r-12,a4=0;a4<u;++a4){i=B.a([],p)
if(a4>0)i.push(new B.C(new B.Q(v,0,v,0),B.p(a6,a6,A.f,B.b0(l).j(0.5),a6,a6,a6,a6,a6,a6,a6,a6,a6,1),a6))
h=B.a([new B.bF(1,A.bj,new B.x(o.length>a4?o[a4]:"",a6,a3,a6,A.q3,a6,a6,a6,a6,a6,a6,a6),a6)],p)
if(k&&a4===t)h.push(n.ayG(s,j))
i.push(new B.a6(s,a6,B.v(h,A.F,a6,A.e,A.j,0,A.p),a6))
A.d.v(m,i)}return B.A(m,A.F,a6,A.e,A.j,0,a6,a6)},
$S:456}
C.can.prototype={
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
n=o.gayH()
m=n?Math.min(140,p*0.4):0
n=x.s
l=B.a([],n)
for(k=x.G,j=o.d,i=j.as,h=17;h>=10.5;h-=0.5){g=o.c.r
f=g.length===0?B.a([a6],n):g
e=B.b0(j.w)
d=B.a([new B.z(u,q),new B.z(u,q)],k)
for(a0=0;a0<t;++a0)d.push(new B.z(r,p-(a0===s?m:0)))
l=C.fU0(f,new B.F(!0,e,a5,i,a5,a5,h,A.cN,A.bk,0,a5,a5,1.28,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5),d)
if(C.fQZ(g.length===0?B.a([a6],n):g,l))break}a1=o.acY(i,h,1.28)
a2=new C.cao(a1)
n=x.p
v=B.A(B.a([a2.$2(l[0],u),A.Ig,new B.a6(v,a5,a4.f,a5),A.Ig,a2.$2(l[1],u)],n),A.F,a5,A.e,A.j,0,a5,a5)
k=B.a([],n)
for(i=m>0,j=j.w,g=m-12,a3=0;a3<t;++a3){f=B.a([],n)
if(a3>0)f.push(new B.C(D.btu,B.p(a5,a5,A.f,B.b0(j).j(0.5),a5,a5,a5,a5,a5,a5,a5,a5,a5,1),a5))
e=B.a([new B.bF(1,A.bj,new B.x(l[2+a3],a5,a1,a5,A.q3,a5,a5,a5,a5,a5,a5,a5),a5)],n)
if(i&&a3===s)e.push(o.ayG(r,g))
f.push(new B.a6(r,a5,B.v(e,A.F,a5,A.e,A.j,0,A.p),a5))
A.d.v(k,f)}return B.v(B.a([new B.a6(a5,q,v,a5),A.ac,B.D(B.A(k,A.F,a5,A.e,A.j,0,a5,a5),1)],n),A.m,a5,A.e,A.j,0,A.p)},
$S:154}
C.cao.prototype={
$2(d,e){var w=null
return new B.a6(e,w,B.d(d,w,w,w,w,w,w,this.a,A.q3,w,w),w)},
$S:1675}
C.fHi.prototype={
$1(d){return new C.UV(this.a,this.b,null)},
$S:z+79}
C.ee3.prototype={
$1(d){return d.me()},
$S:1676}
C.ee4.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.ee2(w,d))},
$S:1677}
C.ee2.prototype={
$0(){var w=this.b
return this.a.d=w.gfm(w)},
$S:0}
C.edR.prototype={
$0(){return this.a.y=!0},
$S:0}
C.edS.prototype={
$0(){return this.a.y=!1},
$S:0}
C.edY.prototype={
$0(){return B.a5(this.a,!1).eI()},
$S:0}
C.edZ.prototype={
$2(d,e){var w=null,v=this.a,u=this.b,t=B.I(A.bz,A.r,2.5)
return B.aE(w,B.p(w,B.b3(w,w,w,new C.bac(u,v.gavQ(),w),A.f0),A.f,w,w,new B.o(w,w,t,w,w,w,A.n),w,w,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.edW(v),new C.edX(v,e,u),w,w,w,w,w,w,w,w,w,w,w,!1,A.a8)},
$S:35}
C.edW.prototype={
$1(d){var w=this.a
return w.x=w.f},
$S:246}
C.edX.prototype={
$1(d){var w=this.a
w.m(new C.edT(w,d,this.b,this.c))},
$S:233}
C.edT.prototype={
$0(){var w,v,u,t=this,s=t.a,r=t.b
s.f=A.k.D(s.x*r.d,1,6)
w=s.gavQ()
r=r.a
v=t.c
u=t.d
s.r=A.k.D(s.r-r.a/v.b*(w.c-w.a)/u.c,0,1)
s.w=A.k.D(s.w-r.b/v.d*(w.d-w.b)/u.d,0,1)},
$S:0}
C.ee_.prototype={
$1(d){var w=this.a
return w.m(new C.edV(w,this.b))},
$S:9}
C.edV.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.ee0.prototype={
$1(d){var w=this.a
return w.m(new C.edU(w,d))},
$S:6}
C.edU.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.ee1.prototype={
$0(){return B.a5(this.b,!1).N(this.a.a.c)},
$S:0}
C.fHy.prototype={
$1(d){return D.fMo},
$S:z+83}
C.eNi.prototype={
$1(d){return this.a.XD()},
$S:8}
C.eMa.prototype={
$0(){var w=this.a,v=this.b
w.z=v
w.y="data:image/png;base64,"+A.cS.gcv().aJ(v)},
$S:0}
C.eMy.prototype={
$0(){var w=this.a
w.p4=this.b
w.as=3},
$S:0}
C.eMI.prototype={
$1(d){return d>=this.a.length},
$S:33}
C.eLU.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.eLV.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.eLS.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.eLT.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.eMr.prototype={
$2(d,e){var w,v,u=null,t=e.d,s=this.a,r=new C.eMs(s,this.b,t,e.b),q=r.$1(!0),p=s.y2
p=B.a([B.js(B.rj(p>0.2?C.fLM(q,B.a4a(p,p,A.x)):q),A.q,u)],x.p)
w=s.bi
if(w>0.02){v=B.a4a(12,12,A.x)
p.push(B.js(B.db(B.rj(C.fLM(r.$1(!0),v)),w*0.75),A.q,u))}r=s.b3
if(r!=null&&s.b1>0)p.push(B.ei(u,B.b0(r).j(s.b1),!0))
r=s.ba
if(r!=null&&s.bJ>0){r=B.b0(r).j(s.bJ)
w=s.ba
w.toString
p.push(B.bZ(u,new B.o(u,u,u,u,u,new B.bR(D.aUf,1.15,A.x,u,0,B.a([r,B.b0(w).j(0)],x.O),u,u),A.n),A.bd))}r=s.aE
if(r>0)p.push(B.bZ(u,new B.o(u,u,u,u,u,new B.bR(D.aU0,0.8,A.x,u,0,B.a([A.c.j(r*0.55),A.c.j(0)],x.O),u,u),A.n),A.bd))
r=s.aN
if(r>0)p.push(B.bZ(u,new B.o(u,u,u,u,u,new B.a7(A.b0,A.b6,A.x,B.a([A.w.j(r),A.K,A.K,A.w.j(s.aN)],x.O),D.cQ_,u),A.n),A.bd))
if(s.aG>0){r=s.k1
p.push(B.ao(u,B.bZ(u,new B.o(u,u,u,u,u,new B.a7(A.b0,A.b6,A.x,B.a([A.w.j(0),A.w.j(s.aG),A.w.j(s.aG),A.w.j(0)],x.O),D.d_k,u),A.n),A.bd),0.48*t,u,0,0,(r-0.06)*t,u))}r=s.Z
if(r>0)p.push(B.ei(u,A.w.j(r),!0))
r=s.b5
if(r>0)p.push(B.bZ(u,new B.o(u,u,u,u,u,new B.bR(A.A,0.95,A.x,u,0,B.a([A.K,A.w.j(r)],x.O),D.cXA,u),A.n),A.bd))
s=s.az
if(s>0)p.push(B.b3(u,u,u,new C.bdJ(s,u),A.au))
return new B.an(A.W,u,A.b_,A.q,p,u)},
$S:64}
C.eMs.prototype={
$1(d){var w,v,u,t,s,r=this,q=null,p=B.fL(r.b,A.A,q,q,A.cm,A.bQ,!0,q,!1,q,q),o=r.a,n=o.aUW(o.RG,o.R8,o.rx,o.ry,o.to,o.x1,o.x2,o.xr,o.y1),m=o.c6,l=m*3.141592653589793/180
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
t=o.bS
s=o.cT?-1:1
return B.dU(B.e9(A.A,B.eA(A.A,l,B.fr(A.A,new B.CV(new B.ys(q,q,n,A.zU),p,q),q,B.vr(s,o.cW?-1:1,1),!0),q),v*w,q,q),new B.u(-m*r.d*u/2,-t*r.c*u/2))},
$S:483}
C.eME.prototype={
$0(){return this.a.m(new C.eMD(this.b,this.c))},
$S:0}
C.eMD.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eMF.prototype={
$1(d){return this.a.m(new C.eMC(this.b,d))},
$S:6}
C.eMC.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eMH.prototype={
$0(){return this.a.m(new C.eMG(this.b,this.c))},
$S:0}
C.eMG.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eLK.prototype={
$1(d){return d.c===this.a.x},
$S:z+93}
C.eLL.prototype={
$1(d){var w=this.a
return w.m(w.gcub())},
$S:2}
C.eLM.prototype={
$1(d){return this.a.m(new C.eLJ())},
$S:2}
C.eLJ.prototype={
$0(){},
$S:0}
C.eLN.prototype={
$0(){var w=this.a
return w.m(new C.eLI(w,this.b))},
$S:0}
C.eLI.prototype={
$0(){return this.a.x=this.b},
$S:0}
C.eLP.prototype={
$2(d,e){return A.aw},
$S:36}
C.eLO.prototype={
$2(d,e){var w=null,v=this.b[e],u=this.a,t=v.a===u.w.a,s=B.m(14),r=B.a([B.b0(v.e),B.b0(v.f)],x.O),q=t?A.c:A.bF
q=B.I(q,A.r,t?2.5:1)
r=B.dg(w,B.av(B.d("\u201c",w,w,w,w,w,w,B.l(w,w,B.b0(v.r),w,w,w,w,w,w,w,w,40,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,w),w,w,A.bb,new B.o(w,w,q,s,w,new B.a7(A.b0,A.b6,A.x,r,w,w),A.n),A.hW,w,94,w,w,w,w,70)
return B.aE(w,new B.a6(70,w,B.v(B.a([r,A.fW,B.d(v.b,w,1,A.a2,w,w,w,B.l(w,w,t?A.c:A.az,w,w,w,w,w,w,w,w,10.5,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eLH(u,v),w,w,w,w,w,w,!1,A.a8)},
$S:76}
C.eLH.prototype={
$0(){var w=this.a
return w.m(new C.eLE(w,this.b))},
$S:0}
C.eLE.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.eLQ.prototype={
$1(d){var w=this.a
return w.m(new C.eLG(w,d))},
$S:9}
C.eLG.prototype={
$0(){return this.a.k3=this.b},
$S:0}
C.eLR.prototype={
$1(d){var w=this.a
return w.m(new C.eLF(w,d))},
$S:9}
C.eLF.prototype={
$0(){return this.a.k2=this.b},
$S:0}
C.eN7.prototype={
$1(d){var w=this.a.db
return w[d]===w[A.d.gL(this.b)]},
$S:33}
C.eNe.prototype={
$1(d){var w=this.a
return w.m(new C.eNf(w,d))},
$S:28}
C.eNf.prototype={
$0(){var w,v,u,t,s
for(w=this.a,v=w.dx,v=B.ea(v,v.r,B.a3(v).c),w=w.db,u=this.b,t=v.$ti.c;v.C();){s=v.d
w[s==null?t.a(s):s]=u}},
$S:0}
C.eNg.prototype={
$1(d){var w
A:{if(1===d){w=20
break A}if(2===d){w=28
break A}if(-1===d){w=11
break A}w=15
break A}return w},
$S:244}
C.eN8.prototype={
$0(){var w=this.a
return w.m(new C.eN6(w,this.b))},
$S:0}
C.eN6.prototype={
$0(){var w=this.a.dx,v=this.b
return w.t(0,v)?w.W(0,v):w.K(0,v)},
$S:0}
C.eN9.prototype={
$0(){var w=this.a
return w.m(new C.eN5(w,this.b))},
$S:0}
C.eN5.prototype={
$0(){var w,v=this.b.length,u=J.e1(v,x.S)
for(w=0;w<v;++w)u[w]=w
return this.a.dx.v(0,u)},
$S:0}
C.eNa.prototype={
$0(){var w=this,v=w.a
return v.m(new C.eN4(v,w.b,w.c,w.d))},
$S:0}
C.eN4.prototype={
$0(){var w,v,u,t,s,r=this,q=r.a.dx
q.a8(0)
w=B.a([],x.t)
for(v=r.b,u=r.c,t=r.d,s=0;s<v.length;++s)if(u[s]===t)w.push(s)
q.v(0,w)},
$S:0}
C.eNb.prototype={
$0(){var w=this.a,v=w.dx
return w.m(v.grj(v))},
$S:0}
C.eNc.prototype={
$0(){return this.b.$1(this.a.a)},
$S:0}
C.eNd.prototype={
$0(){var w=this.a
return w.m(new C.eN3(w))},
$S:0}
C.eN3.prototype={
$0(){var w=this.a.db
return A.d.hc(w,0,w.length,0)},
$S:0}
C.eMR.prototype={
$1(d){return d.a===this.a.dy},
$S:216}
C.eMS.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=(e.b-42)/7,h=B.a([],x.p)
for(w=i*0.42,v=this.a,u=i*0.95,t=x.O,s=0;s<21;++s){r={}
q=D.av1[s]
r.a=null
p=q.a
r.a=p
o=v.dy
n=new B.aV(9,9)
m=B.a([B.b0(v.w.e),B.b0(v.w.f)],t)
l=r.a
k=v.fx
h.push(v.avU(new B.nZ(new B.bp(n,n,n,n),A.aq,new B.kI(new B.o(j,j,j,j,j,new B.a7(A.a3,A.a7,A.x,m,j,j),A.n),A.bd,new C.aYt(l,B.b0(k==null?v.w.x:k),A.k.D(w,12,26),j),j),j),u,q.b,o===p,new C.eMQ(r,v),2,i))}return B.c_(A.bD,h,A.bt,7,7)},
$S:168}
C.eMQ.prototype={
$0(){var w=this.b
return w.m(new C.eML(this.a,w))},
$S:0}
C.eML.prototype={
$0(){return this.b.dy=this.a.a},
$S:0}
C.eMT.prototype={
$1(d){var w=this.a
w.p1=!1
w.k4=d},
$S:243}
C.eMW.prototype={
$0(){var w=this.a
return w.m(new C.eMP(w))},
$S:0}
C.eMP.prototype={
$0(){return this.a.p1=!0},
$S:0}
C.eMX.prototype={
$1(d){return this.a.p2=d},
$S:6}
C.eMY.prototype={
$1(d){return this.a.p3=d},
$S:6}
C.eMZ.prototype={
$1(d){return this.a.ok=d},
$S:6}
C.eN_.prototype={
$0(){var w=this.a
return w.m(new C.eMO(w))},
$S:0}
C.eMO.prototype={
$0(){var w=this.a
return w.fy=!w.fy},
$S:0}
C.eN0.prototype={
$0(){var w=this.a
return w.m(new C.eMN(w))},
$S:0}
C.eMN.prototype={
$0(){var w=this.a
return w.go=!w.go},
$S:0}
C.eN1.prototype={
$0(){var w=this.b
return w.m(new C.eMM(this.a,w))},
$S:0}
C.eMM.prototype={
$0(){return this.b.id=this.a.a},
$S:0}
C.eN2.prototype={
$1(d){return this.a.fx=d},
$S:243}
C.eMU.prototype={
$1(d){return this.a.fr=d},
$S:6}
C.eMV.prototype={
$1(d){return this.a.k1=d},
$S:6}
C.eMv.prototype={
$0(){var w=this.a
return w.m(new C.eMu(w))},
$S:0}
C.eMu.prototype={
$0(){var w=this.a
w.p4=null
w.b0T()},
$S:0}
C.eMw.prototype={
$0(){var w=this.a
return w.m(new C.eMt(w,this.b))},
$S:0}
C.eMt.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.eMx.prototype={
$0(){var w=this.a
return w.m(w.gckU())},
$S:0}
C.eMn.prototype={
$0(){var w=this.a
return w.m(new C.eMm(w))},
$S:0}
C.eMm.prototype={
$0(){var w=this.a
w.RG=0.03
w.rx=1.12
w.ry=1.15
w.R8=w.xr=0},
$S:0}
C.eMo.prototype={
$0(){var w=this.a
return w.m(new C.eMl(w))},
$S:0}
C.eMl.prototype={
$0(){var w=this.a
w.aG=0.55
w.Z=Math.max(w.Z,0.12)},
$S:0}
C.eMp.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=null,n=(e.b-24)/4,m=B.a([],x.p)
for(w=n*1.25,v=this.a,u=this.b,t=0;t<18;++t){s=D.cXX[t]
r=s.b
q=Math.abs(v.RG-r)<0.001&&Math.abs(v.rx-s.c)<0.001&&Math.abs(v.ry-s.d)<0.001&&Math.abs(v.to-s.e)<0.001&&Math.abs(v.x1-s.f)<0.001&&Math.abs(v.xr-s.r)<0.001&&Math.abs(v.x2)<0.5&&Math.abs(v.R8)<0.001&&!v.y1
p=new B.aV(9,9)
m.push(v.avU(new B.nZ(new B.bp(p,p,p,p),A.aq,new B.a6(1/0,1/0,new B.CV(new B.ys(o,o,v.aUW(r,0,s.c,s.d,s.e,s.f,0,s.r,!1),A.zU),B.fL(u,A.A,140,o,A.cm,A.bQ,!1,o,!1,o,o),o),o),o),w,s.a,q,new C.eMk(v,s),3,n))}return B.c_(A.bD,m,A.bt,10,8)},
$S:168}
C.eMk.prototype={
$0(){var w=this.a
return w.m(new C.eMj(w,this.b))},
$S:0}
C.eMj.prototype={
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
C.eM1.prototype={
$1(d){return this.a.R8=d},
$S:6}
C.eM2.prototype={
$1(d){return this.a.RG=d},
$S:6}
C.eM3.prototype={
$1(d){return this.a.rx=d},
$S:6}
C.eM4.prototype={
$1(d){return this.a.xr=d},
$S:6}
C.eM5.prototype={
$1(d){return this.a.aE=d},
$S:6}
C.eM6.prototype={
$1(d){return this.a.Z=d},
$S:6}
C.eM7.prototype={
$1(d){return this.a.b5=d},
$S:6}
C.eM8.prototype={
$1(d){return this.a.aG=d},
$S:6}
C.eM9.prototype={
$1(d){return this.a.aN=d},
$S:6}
C.eLn.prototype={
$1(d){return this.a.ry=d},
$S:6}
C.eLo.prototype={
$1(d){return this.a.to=d},
$S:6}
C.eLp.prototype={
$1(d){return this.a.x1=d},
$S:6}
C.eLq.prototype={
$1(d){return this.a.x2=d},
$S:6}
C.eLr.prototype={
$0(){var w=this.a
return w.m(new C.eLm(w))},
$S:0}
C.eLm.prototype={
$0(){var w=this.a
return w.y1=!w.y1},
$S:0}
C.eLs.prototype={
$1(d){return this.a.b3=d},
$S:243}
C.eLt.prototype={
$1(d){return this.a.b1=d},
$S:6}
C.eLW.prototype={
$1(d){return this.a.y2=d},
$S:6}
C.eLX.prototype={
$1(d){return this.a.bi=d},
$S:6}
C.eLY.prototype={
$1(d){return this.a.az=d},
$S:6}
C.eLZ.prototype={
$1(d){return this.a.ba=d},
$S:243}
C.eM_.prototype={
$1(d){return this.a.bJ=d},
$S:6}
C.eLx.prototype={
$1(d){return this.a.aR=d},
$S:6}
C.eLy.prototype={
$1(d){return this.a.bj=d},
$S:6}
C.eLz.prototype={
$1(d){return this.a.bS=d},
$S:6}
C.eLA.prototype={
$1(d){return this.a.c6=d},
$S:6}
C.eLB.prototype={
$0(){var w=this.a
return w.m(new C.eLw(w))},
$S:0}
C.eLw.prototype={
$0(){var w=this.a
return w.c6=A.k.G(w.c6+90+180,360)-180},
$S:0}
C.eLC.prototype={
$0(){var w=this.a
return w.m(new C.eLv(w))},
$S:0}
C.eLv.prototype={
$0(){var w=this.a
return w.cT=!w.cT},
$S:0}
C.eLD.prototype={
$0(){var w=this.a
return w.m(new C.eLu(w))},
$S:0}
C.eLu.prototype={
$0(){var w=this.a
return w.cW=!w.cW},
$S:0}
C.eMq.prototype={
$0(){var w=this.a,v=w.c
v.toString
return C.i22(v,w.p4)},
$S:0}
C.eMi.prototype={
$2(d,e){var w=null,v=this.a.z,u=v==null?D.biI:B.fL(v,A.A,w,w,A.cm,A.bQ,!1,w,!1,w,w)
return C.ftS(d.length===0?"rounded":d,u,e)},
$S:130}
C.eMe.prototype={
$0(){var w=this.a
return w.m(new C.eMd(w))},
$S:0}
C.eMd.prototype={
$0(){var w=this.a
w.ay=0.39
w.ch=0.8
w.CW=0.22
w.cx="circle"
w.cy="gold"},
$S:0}
C.eMf.prototype={
$0(){var w=this.b
return w.m(new C.eMc(this.a,w))},
$S:0}
C.eMc.prototype={
$0(){return this.b.cx=this.a.a},
$S:0}
C.eMg.prototype={
$0(){var w=this.b
return w.m(new C.eMb(this.a,w))},
$S:0}
C.eMb.prototype={
$0(){return this.b.cy=this.a.a},
$S:0}
C.eMh.prototype={
$1(d){var w=this.a
w.CW=d
w.ay=A.k.D(w.ay,0,1-d)
w.ch=A.k.D(w.ch,0,0.95)},
$S:6}
C.eMB.prototype={
$2(d,e){var w,v,u,t=null,s=e.b,r=e.d,q=B.m(20),p=B.a([new B.ac(-4,A.G,A.b4.j(0.35),A.J,30)],x.V),o=B.m(20),n=this.a,m=x.p,l=B.a([],m)
if(n.p4!=null)l.push(new B.es(n.cet(),n.r))
l.push(new C.I5(n.cre(),!1,!1,t))
o=B.bY(0,B.bw(o,new B.es(new B.an(A.W,t,A.b_,A.q,l,t),n.f),A.aq),0,0,0)
l=n.ay
w=n.ch
v=n.CW*s
u=B.m(8)
return B.p(t,new B.an(A.W,t,A.aa,A.q,B.a([o,B.ao(t,B.aE(A.c5,B.bZ(t,new B.o(t,t,B.I(A.c.j(0.3),A.r,1),u,t,t,A.n),A.bd),A.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.eMA(n,s,r),t,t,t,t,t,t,t,t,t,t,t,t,t,t,!1,A.a8),v,t,l*s,t,w*r,v)],m),t),A.f,t,t,new B.o(t,t,t,q,p,t,A.n),t,t,t,t,t,t,t,t)},
$S:210}
C.eMA.prototype={
$1(d){var w=this.a
return w.m(new C.eMz(w,d,this.b,this.c))},
$S:18}
C.eMz.prototype={
$0(){var w,v=this,u=v.a,t=v.b.d,s=v.c
u.ay=A.k.D(u.ay+t.a/s,0,1-u.CW)
w=v.d
u.ch=A.k.D(u.ch+t.b/w,0,1-u.CW*s/w)},
$S:0}
C.eMK.prototype={
$0(){var w=this.a
return w.m(new C.eMJ(w,this.b))},
$S:0}
C.eMJ.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.eM0.prototype={
$0(){var w=this.a.c
w.toString
return B.a5(w,!1).m7()},
$S:0}
C.eNh.prototype={
$2(d,e){var w,v,u,t=null,s=e.b
if(s>=860){w=this.a
v=x.p
return B.A(B.a([new B.a6(Math.min(s*0.4,460),t,B.v(B.a([w.aXA(),B.D(B.av(w.b_w(Math.max(240,e.d-110)),t,t,t),1)],v),A.m,t,A.e,A.j,0,A.p),t),B.D(B.v(B.a([B.D(w.aOj(),1),w.aKz()],v),A.m,t,A.e,A.j,0,A.p),1)],v),A.m,t,A.e,A.j,0,t,t)}u=A.k.D(e.d*0.36,190,360)
s=this.a
return B.v(B.a([s.aXA(),new B.C(A.hH,B.av(s.b_w(u),t,t,t),t),B.D(s.aOj(),1),s.aKz()],x.p),A.m,t,A.e,A.j,0,A.p)},
$S:630}
C.fr8.prototype={
$10$align$style$weight(d,e,f,g,h,i,j,k,l,m){return C.en(k,!1,j,A.aC,"",4280640491,i,l,m,"",h,C.byC(),null,"","",0,!1,"",0,D.be,4280172719,2,d,0,0,"",D.cg,D.cQ,g,e,f)},
$9$align$weight(d,e,f,g,h,i,j,k,l){return this.$10$align$style$weight(d,e,f,g,h,i,j,k,A.bk,l)},
$8$weight(d,e,f,g,h,i,j,k){return this.$10$align$style$weight(d,e,f,g,h,i,j,A.L,A.bk,k)},
$7(d,e,f,g,h,i,j){return this.$10$align$style$weight(d,e,f,g,h,i,j,A.L,A.bk,A.O)},
$S:z+98}
C.fr7.prototype={
$3(d,e,f){var w=this,v=C.byC(),u=w.b?A.I:A.cs,t=w.c?A.cD:A.bk
return C.en(w.d,!1,f,A.aC,"",4280640491,e,t,u,"",0.36,v,null,"","",0,!0,"",0,D.be,4280172719,2,d,0,w.f,w.e,D.cg,D.cQ,0.82,0.09,w.a)},
$S:z+28}
C.cbI.prototype={
$1(d){return B.t(d)},
$S:17}
C.fyP.prototype={
$0(){return this.a},
$S:z+15}
C.ffI.prototype={
$1(d){return d.a.cY(this.a)},
$S:z+30}
C.ffJ.prototype={
$2(d,e){return J.ck(e)},
$S:z+31}
C.fyR.prototype={
$0(){return B.a([],x.o)},
$S:z+15}
C.fyU.prototype={
$1(d){return d.a===A.a.i(this.a).toLowerCase()},
$S:z+10}
C.fyV.prototype={
$0(){return A.d.gL(D.vC)},
$S:z+33}
C.fyN.prototype={
$1(d){return d.a},
$S:z+16}
C.fyQ.prototype={
$1(d){return d.a},
$S:z+16}
C.fwN.prototype={
$1(d){return A.a.i(B.t(d))},
$S:17}
C.fwO.prototype={
$1(d){return d.length!==0},
$S:3}
C.fwP.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.frc.prototype={
$0(){return C.cC()},
$S:23}
C.frf.prototype={
$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var w=this.a.$0(),v=m==null?this.b.e:m,u=this.c,t=u?k:D.cg,s=u?n:0
return C.en(j,l,v,A.aC,"",4280640491,i,q,r,"",h,w,null,u?o:"",p,0,!1,"",0,D.be,4280172719,2,d,s,0,"",t,D.cQ,g,e,f)},
$6(d,e,f,g,h,i){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bg,D.dd,!1,null,0,"","",A.bk,A.a4)},
$7$key(d,e,f,g,h,i,j){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bg,D.dd,!1,null,0,"",j,A.bk,A.a4)},
$8$fx$key(d,e,f,g,h,i,j,k){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bg,D.dd,!1,null,0,j,k,A.bk,A.a4)},
$11$align$anim$delay$fx$key(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,!1,null,l,m,n,A.bk,A.a4)},
$10$align$anim$key$weight(d,e,f,g,h,i,j,k,l,m){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,!1,null,0,"",l,A.bk,m)},
$10$align$color$delay$key(d,e,f,g,h,i,j,k,l,m){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,D.dd,!1,k,l,"",m,A.bk,A.a4)},
$9$anim$key$weight(d,e,f,g,h,i,j,k,l){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bg,j,!1,null,0,"",k,A.bk,l)},
$9$color$delay$key(d,e,f,g,h,i,j,k,l){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bg,D.dd,!1,j,k,"",l,A.bk,A.a4)},
$11$anim$color$fx$key$weight(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bg,j,!1,k,0,l,m,A.bk,n)},
$11$align$anim$key$style$weight(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,!1,null,0,"",l,m,n)},
$11$anim$bullets$color$delay$key(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bg,j,k,l,m,"",n,A.bk,A.a4)},
$S:z+35}
C.fre.prototype={
$9$fx$key$rotation(d,e,f,g,h,i,j,k,l){var w=this.a.$0()
return C.en(A.bg,!1,4279310375,A.aC,"",i,24,A.bk,A.a4,"",h,w,null,this.b?j:"",k,0,!1,"",l,d,i,0,"",0,0,"",D.cg,D.f_,g,e,f)},
$6(d,e,f,g,h,i){return this.$9$fx$key$rotation(d,e,f,g,h,i,"","",0)},
$7$key(d,e,f,g,h,i,j){return this.$9$fx$key$rotation(d,e,f,g,h,i,"",j,0)},
$8$fx$key(d,e,f,g,h,i,j,k){return this.$9$fx$key$rotation(d,e,f,g,h,i,j,k,0)},
$S:z+27}
C.frd.prototype={
$9$anim$delay$fx$key(d,e,f,g,h,i,j,k,l){var w=this.a.$0(),v=this.b,u=v?i:D.cg,t=v?j:0
return C.en(A.bg,!1,4279310375,A.aC,"",4280640491,24,A.bk,A.a4,"",h,w,d,v?k:"",l,0,!1,"",0,D.be,4280172719,2,"",t,0,"",u,D.lh,g,e,f)},
$5(d,e,f,g,h){return this.$9$anim$delay$fx$key(d,e,f,g,h,D.pT,350,"","")},
$8$anim$delay$key(d,e,f,g,h,i,j,k){return this.$9$anim$delay$fx$key(d,e,f,g,h,i,j,"",k)},
$8$anim$fx$key(d,e,f,g,h,i,j,k){return this.$9$anim$delay$fx$key(d,e,f,g,h,i,350,j,k)},
$S:z+37}
C.frb.prototype={
$1(d){var w=d.x
return w>0&&w<=this.a.length},
$S:z+17}
C.ftD.prototype={
$0(){var w=0,v=B.j(x.e),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.a){s=t.b
r=s.a
s=(r==="bullets"||r==="section")&&s.w.length!==0}else s=!1
w=s?3:5
break
case 3:s=t.b
w=6
return B.b($.hbs.ci(0,A.a.i(s.w).toLowerCase(),new C.ftB(s)),$async$$0)
case 6:q=e
w=4
break
case 5:q=null
case 4:w=t.c&&t.b.r.length!==0?7:9
break
case 7:s=t.b
w=10
return B.b(t.d.ci(0,s.r,new C.ftC(s)),$async$$0)
case 10:p=e
w=8
break
case 9:p=null
case 8:u=new B.bu(t.e,new B.bmC(p,q),x.e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1681}
C.ftB.prototype={
$0(){return F.aMf(this.a.w)},
$S:183}
C.ftC.prototype={
$0(){var w=this.a.r,v=B.aJ(w.toLowerCase()," ","_")
return F.bxw("https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji@main/assets/"+B.hA(2,w,A.c4,!1)+"/3D/"+v+"_3d.png","image/png")},
$S:183}
C.f8A.prototype={
$1(d){return d.a==="bio"},
$S:z+17}
C.f8B.prototype={
$1(d){return d.a},
$S:z+18}
C.f8C.prototype={
$1(d){return d.b},
$S:z+19}
C.fHK.prototype={
$1(d){return D.fME},
$S:z+41}
C.eTj.prototype={
$0(){return this.a.x=C.hFH(this.b,this.c.b)},
$S:0}
C.eTk.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.eTh.prototype={
$1(d){var w
if(this.a){w=this.b
if(w==null)w="circle"}else w=d
return w},
$S:400}
C.eTi.prototype={
$1(d){var w
if(this.a)w=d
else{w=this.b
if(w==null)w=""}return w},
$S:400}
C.eTg.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:o=t.b
n=t.a
m=n.c
m.toString
w=3
return B.b(B.bW(A.aA,null,new C.eTb(n,t.c,o,t.d,t.e,t.f),m,!0,!0,o,A.lO,!1,!1,x.N),$async$$0)
case 3:s=e
if(s==null){w=1
break}w=A.a.a0(s,"finale:")?4:5
break
case 4:r=A.a.b0(s,7)
if(r.length===0){n.m(new C.eTc(n))
w=1
break}o=n.c
if(o==null){w=1
break}m=n.w
q=m.d
if(q.length===0){q=n.x
if(q==null)q=""}w=6
return B.b(C.hhb(o,m.cEv(q,r)),$async$$0)
case 6:p=e
if(p!=null&&n.c!=null)n.m(new C.eTd(n,p))
w=1
break
case 5:o=s==="__auto"?null:s
t.r.$1(o)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eTb.prototype={
$1(d){var w,v,u,t,s,r,q=this,p=null,o=new C.eTf(q.b,d),n=x.p,m=B.a([o.$2("__auto",B.p(p,D.b2l,A.f,p,p,D.aYq,p,p,p,p,p,p,p,p))],n),l=q.c,k=l?D.Bw:D.BB,j=k.length,i=q.a,h=q.d,g=q.e,f=q.f,e=0
for(;e<j;++e){w=k[e].a
v=g.$1(w)
u=f.$1(w)
if(v.length===0&&u.length===0)v="rounded"
m.push(o.$2(w,new B.a6(64,64,C.ftS(v,i.b1u(h),u),p)))}t=B.lT(1,m,4,10,10,p,A.dQ,!0)
if(!l)return B.bn(!0,new B.C(A9.AG,t,p),!0,!1,A.ag,!0,!0)
s=new C.eTe(i,d)
m=B.aI(d,A.bS,x.w).w
l=B.a([s.$2("","None")],n)
for(e=0;e<32;++e){r=D.Gj[e]
l.push(s.$2(r.a,r.b))}return B.bn(!0,new B.cU(new B.aY(0,1/0,0,m.a.b*0.85),B.cd(B.v(B.a([D.fdZ,A.S,t,A.e0,D.eDN,A.at,D.foh,A.S,B.lT(1.15,l,3,10,10,p,A.dQ,!0)],n),A.F,p,A.e,A.j,0,A.p),A.q,p,A.y,p,A9.AG,p,p,A.ai),p),!0,!1,A.ag,!0,!0)},
$S:27}
C.eTf.prototype={
$2(d,e){var w=null,v=d==="__auto"&&this.a==null||d===this.a,u=B.m(16),t=v?A.b4.j(0.22):A.c.j(0.04),s=v?A.by:A.dq
return B.aE(w,B.p(w,e,A.f,w,w,new B.o(t,w,B.I(s,A.r,v?2:1),u,w,w,A.n),w,w,w,w,A.hv,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eTa(this.b,d),w,w,w,w,w,w,!1,A.a8)},
$S:1682}
C.eTa.prototype={
$0(){B.a5(this.a,!1).N(this.b)
return null},
$S:0}
C.eTe.prototype={
$2(d,e){var w,v=null,u=this.a.w,t=u.a===d,s=B.m(12),r=t?A.bJ:A.bF
r=B.I(r,A.r,t?2.5:1)
w=B.m(10)
u=B.D(B.p(v,B.bw(w,d.length===0?B.p(v,D.am9,A.f,A.c.j(0.05),v,v,v,v,v,v,v,v,v,v):B.e_(new C.ML(u.F8(d),!0,!1,v),!0,v),A.aq),A.f,v,v,new B.o(v,v,r,s,v,v,A.n),v,v,v,v,v,v,v,v),1)
return B.aE(v,B.v(B.a([u,A.at,B.d(e,v,1,A.a2,v,v,v,B.l(v,v,t?A.bJ:A.ad,v,v,v,v,v,v,v,v,10.5,v,v,A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.j,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.eT9(this.b,d),v,v,v,v,v,v,!1,A.a8)},
$S:130}
C.eT9.prototype={
$0(){B.a5(this.a,!1).N("finale:"+this.b)
return null},
$S:0}
C.eTc.prototype={
$0(){var w=this.a
return w.w=w.w.F8("")},
$S:0}
C.eTd.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.eT_.prototype={
$0(){var w=this.a
w.e=this.b
w.cy=null},
$S:0}
C.eT0.prototype={
$0(){return this.a.cy=J.k(this.b)},
$S:0}
C.eT2.prototype={
$0(){return this.a.cy="Type a little about the presentation first, or attach a document."},
$S:0}
C.eT3.prototype={
$0(){return this.a.cy='You mentioned your logo \u2014 tap "Add your logo" below to upload it, so the AI puts the real one in.'},
$S:0}
C.eT4.prototype={
$0(){var w=this.a
w.ax=!0
w.cy=null
w.ay="Writing your "+w.ch+" slides\u2026"},
$S:0}
C.eT5.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.eT1(w,d))},
$S:2}
C.eT1.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.eT6.prototype={
$0(){var w=this.a
w.ax=!1
w.cy=B.t(this.b)},
$S:0}
C.eTx.prototype={
$0(){return this.a.f.fF()},
$S:0}
C.eTy.prototype={
$0(){var w=this.a
return w.m(new C.eTw(w))},
$S:0}
C.eTw.prototype={
$0(){return this.a.e=null},
$S:0}
C.eTz.prototype={
$0(){var w=this.a
return w.m(new C.eTv(w))},
$S:0}
C.eTv.prototype={
$0(){return this.a.x=null},
$S:0}
C.eTB.prototype={
$1(d){var w=this.a
return w.m(new C.eTu(w,d))},
$S:34}
C.eTu.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.eTC.prototype={
$1(d){var w=this.a
return w.m(new C.eTt(w,d))},
$S:34}
C.eTt.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.eTD.prototype={
$0(){var w=this.a
return w.m(new C.eTs(w))},
$S:0}
C.eTs.prototype={
$0(){return this.a.y=B.a([],x.s)},
$S:0}
C.eTE.prototype={
$1(d){var w=this.a
return w.m(new C.eTr(w,d))},
$S:34}
C.eTr.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.eTF.prototype={
$1(d){var w=this.a
return w.m(new C.eTq(w,d))},
$S:34}
C.eTq.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.eTG.prototype={
$0(){var w=this.a
return w.m(new C.eTp(w))},
$S:0}
C.eTp.prototype={
$0(){var w=this.a
return w.w=w.w.F8("")},
$S:0}
C.eTH.prototype={
$0(){var w=this.a
return w.m(new C.eTo(w,this.b))},
$S:0}
C.eTo.prototype={
$0(){return this.a.ch=this.b},
$S:0}
C.eTI.prototype={
$2(d,e){var w,v,u=(e.b-16)/3,t=B.a([],x.p)
for(w=this.a,v=0;v<6;++v)t.push(new B.a6(u,null,w.bLo(D.a1N[v]),null))
return B.c_(A.bD,t,A.bt,8,8)},
$S:168}
C.eTA.prototype={
$1(d){var w=this.a
return w.m(new C.eTn(w,d))},
$S:9}
C.eTn.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.eT7.prototype={
$0(){var w=this.a
return w.m(new C.eT8(w,this.b,this.c))},
$S:0}
C.eT8.prototype={
$0(){var w=this.c,v=this.a.cx
return this.b?v.W(0,w):v.K(0,w)},
$S:0}
C.eTm.prototype={
$0(){var w=this.a
return w.m(new C.eTl(w,this.b))},
$S:0}
C.eTl.prototype={
$0(){return this.a.CW=this.b},
$S:0}
C.fHJ.prototype={
$1(d){return new C.a_t(this.a,this.b,null)},
$S:z+42}
C.eST.prototype={
$0(){return this.a.r="Type what you want changed or added."},
$S:0}
C.eSU.prototype={
$0(){var w=this.a
w.e=!0
w.r=null
w.f="Making your changes\u2026"},
$S:0}
C.eSV.prototype={
$0(){var w=this.a
w.e=!1
w.r=this.b===D.aEp?"The text already fits inside its frame.":"The text is already at its limit."},
$S:0}
C.eSW.prototype={
$0(){var w=this.a
w.e=!1
w.r="Nothing to bring back. Changes are kept for 20 minutes."},
$S:0}
C.eSX.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.eSS(w,d))},
$S:2}
C.eSS.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eSY.prototype={
$0(){var w=this.a
w.e=!1
w.r=B.t(this.b)},
$S:0}
C.eSZ.prototype={
$0(){var w=this.b
if(A.a.c9(w,"\u2026"))w=A.a.ap(w,0,w.length-1)
this.a.d.bM(0,new B.bb(w,B.h8(A.bu,w.length),A.aN))},
$S:0}
C.feY.prototype={
$1(d){return d.a===this.a},
$S:216}
C.e90.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=p.gavV(),n=o.x
n===$&&B.c()
w=B.m(16)
v=p.a.c
u=v?D.cKj:D.d_5
t=D.x0.j(v?1:0.55)
v=p.a.c
t=B.I(t,A.r,v?1.8:1.2)
s=D.x0.j(v?0.35+0.15*o.x:0.12)
v=B.a([new B.ac(0,A.G,s,A.J,p.a.c?16:8)],x.V)
s=B.m(15)
n=B.bY(0,B.b3(q,q,q,new C.bfV(n*6.283,q),A.au),0,0,0)
o=o.x
o=B.bY(0,B.bMX(B.eA(A.A,0.5,B.p(q,q,A.f,q,q,new B.o(q,q,q,q,q,new B.a7(A.a3,A.a7,A.x,B.a([A.K,D.b8Y.j(0.28),A.K],x.O),q,q),A.n),q,q,q,q,q,q,q,q),q),!0,new B.u(o*2.4-1.2,0)),0,0,0)
r=x.p
return B.p(q,B.bw(s,new B.an(A.W,q,A.aa,A.q,B.a([n,o,B.av(B.v(B.a([B.W(p.a.c?A.ee:A.lF,D.x0,q,q,q,20),A.at,B.f1(A.A,B.nG(A.jk,D.f7L,new C.e9_()),A.f,A.eg)],r),A.m,q,A.e,A.Q,0,A.p),q,q,q),B.ao(q,B.p(q,D.f4v,A.f,q,q,new B.o(D.x0,q,q,B.m(6),q,q,A.n),q,q,q,q,L.ah6,q,q,q),q,q,q,4,4,q)],r),q),A.aq),A.f,q,q,new B.o(q,q,t,w,v,new B.a7(A.ax,A.aD,A.x,u,q,q),A.n),q,64,q,q,q,q,q,q)},
$S:95}
C.e9_.prototype={
$1(d){return D.bR8.aw(0,d)},
$S:65}
C.fyW.prototype={
$1(d){return d.a===this.a},
$S:z+6}
C.fyX.prototype={
$1(d){var w=d.a
return A.a.i(w).length!==0&&w!==d.b},
$S:216}
C.fyY.prototype={
$2(d,e){return A.o.aL(e.a.length,d.a.length)},
$S:1683}
C.fyZ.prototype={
$1(d){var w,v,u,t,s,r,q,p
for(w=this.a,v=w.length,u=d,t=0;t<w.length;w.length===v||(0,B.L)(w),++t){s=w[t]
r=s.a
q=s.b
u=B.aJ(u,r,q)
p=r.toUpperCase()
if(p!==r)u=B.aJ(u,p,q.toUpperCase())}return u},
$S:13}
C.fyS.prototype={
$1(d){return d.a},
$S:z+18}
C.fyT.prototype={
$1(d){return d.b},
$S:z+19}
C.fGX.prototype={
$1(d){return new C.YS(this.a,this.b,null)},
$S:z+44}
C.dfM.prototype={
$0(){var w=this.a
w.f=!0
w.r=null},
$S:0}
C.dfN.prototype={
$1(d){return d.a===this.a.gaha()},
$S:z+10}
C.dfO.prototype={
$0(){var w=this.a
w.f=!1
w.r=J.k(this.b)},
$S:0}
C.dfR.prototype={
$0(){B.a5(this.a,!1).N(null)
return null},
$S:0}
C.dfS.prototype={
$0(){var w=this.a
return w.m(new C.dfQ(w,this.b))},
$S:0}
C.dfQ.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.dfT.prototype={
$1(d){var w=this.a
return w.m(new C.dfP(w,d))},
$S:9}
C.dfP.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.e8Z.prototype={
$1$2(d,e,f){var w=B.bl(d,!0,f)
A.d.fq(w,this.a)
return B.dc(w,0,B.dJ(e,"count",x.S),B.T(w).c).dF(0)},
$2(d,e){return this.$1$2(d,e,x.z)},
$S:1684}
C.f56.prototype={
$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,n,o,p){return C.en(A.bg,!1,4279310375,A.aC,"",i,24,A.bk,A.a4,"",h,this.a.$0(),null,k,j,0,!1,"",n,d,o,p,"",m,0,"",l,D.f_,g,e,f)},
$8(d,e,f,g,h,i,j,k){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,D.cg,0,0,0,0)},
$12$anim$delay$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,n,o){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,0,n,o)},
$10$anim$delay(d,e,f,g,h,i,j,k,l,m){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,0,0,0)},
$S:z+45}
C.f58.prototype={
$9(d,e,f,g,h,i,j,k,l){return C.en(A.L,!1,this.b.d,A.aC,"",4280640491,i,A.bk,A.cN,"",h,this.a.$0(),null,k,j,0,!1,"",0,D.be,4280172719,2,d,l,0,"",D.mq,D.cQ,g,e,f)},
$S:z+46}
C.f57.prototype={
$5$size(d,e,f,g,h){var w,v=this,u=v.b,t=u.c
u=u.wd(0,"twinkle")
w=t===D.be?0.785:0
return v.a.$13$anim$delay$rotation$stroke$strokeWidth(t,d-h/2,e-h*0.89,h,h*1.78,v.c,f,u,D.mq,g,w,v.d.d,1.2)},
$4(d,e,f,g){return this.$5$size(d,e,f,g,0.022)},
$S:z+47}
C.f55.prototype={
$1(d){var w=d.fx
return w==="sub"||w==="body"},
$S:z+4}
C.fsj.prototype={
$1(d){return d.a===this.a},
$S:z+11}
C.fsk.prototype={
$0(){return A.d.gL(D.Gs)},
$S:z+49}
C.fsl.prototype={
$1(d){return d.a===this.a},
$S:z+11}
C.f75.prototype={
$1(d){return!(A.a.a0(d.db,"__design__")||A.a.a0(d.a,"design_"))},
$S:z+4}
C.fyo.prototype={
$1(d){var w=2450411,v=4281908728
C.du(d,C.dv(4280171146,1,0,D.be,w,0,0.52,0,0))
C.du(d,C.dv(v,1,0,D.be,w,0,0.04,0.48,0))
C.du(d,C.dv(4294047225,0.38,0,D.be,w,0,0.48,0.52,0.62))
C.du(d,C.dv(v,0.006,0,D.fp,v,3,0.32,0.08,0.14))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fyp.prototype={
$1(d){var w=2450411,v=4280640491,u=4291548641
C.du(d,C.dv(4280172719,0.8,0,D.be,w,0,0.36,0.58,0.1))
C.du(d,C.dv(v,0.64,0,D.be,w,0,0.28,0.64,0.18))
C.du(d,C.dv(4282090230,0.44,0,D.be,w,0,0.2,0.7,0.28))
C.du(d,C.dv(v,0.006,0,D.fp,v,3,0.22,0.08,0.12))
C.du(d,C.dv(u,0.004,0,D.fp,u,2,0.38,0.08,0.18))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fyq.prototype={
$1(d){var w=2450411,v=4279548070
C.du(d,C.dv(4279080072,0.11,0,D.be,w,0,1,0,0))
C.du(d,C.dv(4279310375,0.11,0,D.be,w,0,1,0,0.89))
C.du(d,C.dv(856528008,0.72,0,D.jz,w,0,0.28,0.72,0.14))
C.du(d,C.dv(1426953352,0.2,0,D.jz,w,0,0.2,0.78,0.22))
C.du(d,C.dv(v,0.004,0,D.fp,v,2,1,0,0.105))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fyB.prototype={
$1(d){var w=2450411
C.du(d,C.dv(4279203438,0.55,0,D.jz,w,0,0.5,0.55,-0.05))
C.du(d,C.dv(4280171146,0.5,0,D.jz,w,0,0.45,0.62,0.35))
C.du(d,C.dv(4280640491,0.4,0.3,D.jy,w,0,0.35,0.68,0.55))
C.du(d,C.dv(571438702,0.12,0,D.be,w,0,0.12,0.08,0.08))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fyG.prototype={
$1(d){var w=4280472558
C.du(d,C.dv(4279310375,0.75,-0.4,D.jy,2450411,0,0.75,-0.15,0.35))
C.du(d,C.dv(w,0.55,0,D.be,2450411,0,0.06,0.42,0.38))
C.du(d,C.dv(w,0.006,0,D.fp,w,3,0.35,0.08,0.08))
C.du(d,C.dv(2282478,0.12,0,D.be,w,2,0.2,0.75,0.82))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fyH.prototype={
$1(d){var w=2450411,v=4280640491
C.du(d,C.dv(3423541034,0.48,0,D.be,w,0,1,0,0))
C.du(d,C.dv(v,0.12,-0.08,D.jz,w,0,1.1,-0.05,0.38))
C.du(d,C.dv(858088427,0.35,0,D.be,w,0,0.42,0.55,0.05))
C.du(d,C.dv(v,0.006,0,D.fp,v,3,0.25,0.08,0.52))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fyI.prototype={
$1(d){var w,v,u,t,s=4280171146
for(w=0;w<4;++w){v=D.cJn[w]
u=Date.now()
t=$.iX
$.iX=t+1
v=new C.eG("design_"+(""+1000*u+"_"+t),D.f_,0.04+w*0.235,0.72,0.21,0.22,"",24,A.a4,A.bk,A.aC,4279310375,A.bg,null,D.be,v,4294967295,2,0,!1,"",0,D.cg,0,"","","","","",!1,0)
u=$.JM
v.db="__design__:"+(u.length===0?"layer":u)
A.d.cn(d.z,0,v)}C.du(d,C.dv(s,0.006,0,D.fp,s,3,0.3,0.04,0.08))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fyJ.prototype={
$1(d){var w,v,u,t,s=4280172719
for(w=0;w<4;++w){v=B.aq(A.m5,A.dy,w/3).l()
u=Date.now()
t=$.iX
$.iX=t+1
v=new C.eG("design_"+(""+1000*u+"_"+t),D.f_,0.58+w*0.08,0.15+w*0.05,0.32,0.7,"",24,A.a4,A.bk,A.aC,4279310375,A.bg,null,D.Ca,v,2450411,0,0,!1,"",0,D.cg,0,"","","","","",!1,0)
u=$.JM
v.db="__design__:"+(u.length===0?"layer":u)
A.d.cn(d.z,0,v)}C.du(d,C.dv(s,0.006,0,D.fp,s,3,0.4,0.06,0.1))
d.e=4294967295
d.f=4292602622},
$S:z+1}
C.fyK.prototype={
$1(d){var w=4294967295
C.du(d,C.dv(4280640491,1,0,D.be,2450411,0,0.42,0,0))
C.du(d,C.dv(4280110808,1.1,1.57,D.jy,2450411,0,0.18,0.35,-0.05))
C.du(d,C.dv(w,0.006,0,D.fp,w,2,0.25,0.08,0.85))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fyL.prototype={
$1(d){var w=4278982953,v=2450411,u=4282090230
C.du(d,C.dv(w,0.1,0,D.be,v,0,1,0,0))
C.du(d,C.dv(u,0.012,0,D.be,v,0,1,0,0.1))
C.du(d,C.dv(u,0.006,0,D.fp,u,3,0.42,0.06,0.14))
C.du(d,C.dv(403446057,0.68,0,D.jz,v,0,0.22,0.72,0.18))
C.du(d,C.dv(w,0.1,0,D.be,v,0,1,0,0.9))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fyM.prototype={
$1(d){var w=4278630100
C.du(d,C.dv(4279310375,1.2,0.15,D.jz,2450411,0,0.55,-0.2,-0.1))
C.du(d,C.dv(w,1.1,0.15,D.be,2450411,0,0.08,0.15,-0.05))
C.du(d,C.dv(1120295,0.18,0,D.be,w,3,0.38,0.55,0.75))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fyr.prototype={
$1(d){var w=4292617766
C.du(d,C.dv(4282714634,0.65,-0.2,D.jy,2450411,0,0.65,-0.1,0.45))
C.du(d,C.dv(w,0.5,-0.15,D.jy,2450411,0,0.5,0.05,0.55))
C.du(d,C.dv(w,0.006,0,D.fp,w,3,0.38,0.55,0.08))
d.e=4294967295
d.f=4294898418},
$S:z+1}
C.fys.prototype={
$1(d){var w=2450411
C.du(d,C.dv(4278413729,0.35,3.14,D.jy,w,0,0.45,-0.05,0.7))
C.du(d,C.dv(4278355143,0.3,3.14,D.jy,w,0,0.4,0.25,0.75))
C.du(d,C.dv(4279150057,0.32,3.14,D.jy,w,0,0.5,0.55,0.72))
C.du(d,C.dv(863884284,0.22,0,D.eI,w,0,0.22,0.08,0.12))
d.e=4293982719
d.f=4294967295},
$S:z+1}
C.fyt.prototype={
$1(d){var w=4279310375,v=2450411,u=4280472558
C.du(d,C.dv(w,0.14,0,D.be,v,0,0.14,0.02,0.02))
C.du(d,C.dv(2282478,0.14,0,D.be,u,3,0.14,0.84,0.02))
C.du(d,C.dv(w,0.28,0,D.jz,v,0,0.35,-0.08,0.78))
C.du(d,C.dv(u,0.22,0.5,D.jy,v,0,0.3,0.72,0.78))
C.du(d,C.dv(w,0.006,0,D.fp,w,3,0.2,0.08,0.22))
d.e=4294967295
d.f=null},
$S:z+1}
C.fyu.prototype={
$1(d){var w=4293571336,v=1156231944
C.du(d,C.dv(1841431,0.92,0,D.be,w,3,0.92,0.04,0.04))
C.du(d,C.dv(v,0.15,0,D.jy,2450411,0,0.15,0.02,0.02))
C.du(d,C.dv(v,0.15,3.14,D.jy,2450411,0,0.15,0.83,0.83))
C.du(d,C.dv(w,0.004,0,D.fp,w,2,0.7,0.15,0.88))
d.e=4280031511
d.f=4282523654},
$S:z+1}
C.fyv.prototype={
$1(d){var w=4279080072,v=2450411
C.du(d,C.dv(w,0.14,0,D.kQ,v,0,0.14,0.68,0.18))
C.du(d,C.dv(4279548070,0.14,0,D.kQ,v,0,0.14,0.78,0.28))
C.du(d,C.dv(4281193663,0.14,0,D.kQ,v,0,0.14,0.68,0.38))
C.du(d,C.dv(4284410580,0.14,0,D.kQ,v,0,0.14,0.78,0.48))
C.du(d,C.dv(4279203438,0.14,0,D.kQ,v,0,0.14,0.68,0.58))
C.du(d,C.dv(w,0.006,0,D.fp,w,3,0.22,0.06,0.1))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fyw.prototype={
$1(d){var w=2450411,v=4280640491
C.du(d,C.dv(3708753706,0.42,0,D.be,w,0,1,0,0))
C.du(d,C.dv(v,0.06,-0.05,D.jz,w,0,1,0,0.38))
C.du(d,C.dv(859356664,0.25,0,D.eI,w,0,0.25,0.7,0.08))
C.du(d,C.dv(v,0.006,0,D.fp,v,3,0.3,0.08,0.48))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fyx.prototype={
$1(d){var w,v,u,t,s=4280640491
for(w=0;w<4;++w){v=B.aq(A.m5,A.dy,w/3).l()
u=Date.now()
t=$.iX
$.iX=t+1
v=new C.eG("design_"+(""+1000*u+"_"+t),D.f_,0.06+w*0.23,0.78,0.2,0.14,"",24,A.a4,A.bk,A.aC,4279310375,A.bg,null,D.Ca,v,2450411,0,0,!1,"",0,D.cg,0,"","","","","",!1,0)
u=$.JM
v.db="__design__:"+(u.length===0?"layer":u)
A.d.cn(d.z,0,v)}C.du(d,C.dv(4280172719,0.08,0,D.be,2450411,0,1,0,0))
C.du(d,C.dv(s,0.006,0,D.fp,s,3,0.35,0.06,0.14))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fyy.prototype={
$1(d){var w,v,u,t=4291548641,s=4279310375
for(w=1;w<6;++w){v=Date.now()
u=$.iX
$.iX=u+1
u=new C.eG("design_"+(""+1000*v+"_"+u),D.f_,0.08,0.15+w*0.12,0.55,0.002,"",24,A.a4,A.bk,A.aC,s,A.bg,null,D.fp,t,t,0,0,!1,"",0,D.cg,0,"","","","","",!1,0)
v=$.JM
u.db="__design__:"+(v.length===0?"layer":v)
A.d.cn(d.z,0,u)}C.du(d,C.dv(s,0.75,0,D.be,2450411,0,0.22,0.72,0.1))
C.du(d,C.dv(872415231,0.16,0,D.be,2450411,0,0.16,0.75,0.15))
C.du(d,C.dv(s,0.006,0,D.fp,s,3,0.2,0.08,0.1))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fyz.prototype={
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
C.fyA.prototype={
$1(d){var w,v,u,t,s,r=4279310375,q=2450411
for(w=0;w<3;++w){v=w*0.24
u=Date.now()
t=$.iX
$.iX=t+1
t=new C.eG("design_"+(""+1000*u+"_"+t),D.f_,0.55,0.14+v,0.38,0.18,"",24,A.a4,A.bk,A.aC,r,A.bg,null,D.be,4294967295,4280640491,2,0,!1,"",0,D.cg,0,"","","","","",!1,0)
u=$.JM
t.db="__design__:"+(u.length===0?"layer":u)
A.d.cn(d.z,0,t)
u=B.aq(A.dp,A.ct,w/2).l()
t=Date.now()
s=$.iX
$.iX=s+1
u=new C.eG("design_"+(""+1000*t+"_"+s),D.f_,0.57,0.16+v,0.06,0.14,"",24,A.a4,A.bk,A.aC,r,A.bg,null,D.be,u,q,0,0,!1,"",0,D.cg,0,"","","","","",!1,0)
v=$.JM
u.db="__design__:"+(v.length===0?"layer":v)
A.d.cn(d.z,0,u)}C.du(d,C.dv(4280171146,1,0,D.be,q,0,0.48,0,0))
C.du(d,C.dv(4280172719,1.1,1.57,D.jy,q,0,0.12,0.42,-0.05))
d.e=4294967295
d.f=4292602622},
$S:z+1}
C.fyC.prototype={
$1(d){var w=2450411
C.du(d,C.dv(870995980,0.55,0.45,D.jz,w,0,0.55,-0.12,-0.08))
C.du(d,C.dv(856996006,0.45,0.45,D.jz,w,0,0.45,0.62,-0.05))
C.du(d,C.dv(16777215,0.38,0.45,D.jz,4293548044,5,0.38,0.52,0.12))
C.du(d,C.dv(585783308,0.3,0.45,D.jz,w,0,0.3,0.56,0.16))
C.du(d,C.dv(4279548070,0.06,0,D.be,w,0,0.16,0.38,0.04))
C.du(d,C.dv(1156208652,0.28,0,D.eI,w,0,0.28,0.66,0.52))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fyD.prototype={
$1(d){var w=4279080072,v=2450411,u=4294047225,t=4291548641,s=4293548044
C.du(d,C.dv(w,1,0,D.be,v,0,0.07,0,0))
C.du(d,C.dv(u,0.1,0,D.be,t,1,0.46,0.48,0.14))
C.du(d,C.dv(u,0.1,0,D.be,t,1,0.46,0.48,0.28))
C.du(d,C.dv(u,0.1,0,D.be,t,1,0.46,0.48,0.42))
C.du(d,C.dv(s,0.08,0,D.eI,v,0,0.08,0.5,0.16))
C.du(d,C.dv(w,0.08,0,D.eI,v,0,0.08,0.5,0.3))
C.du(d,C.dv(4279548070,0.08,0,D.eI,v,0,0.08,0.5,0.44))
C.du(d,C.dv(16777215,0.32,0.45,D.jz,s,4,0.32,0.1,0.18))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fyE.prototype={
$1(d){var w,v,u,t=4279548070,s=4293548044,r=4279179050
C.du(d,C.dv(4294047225,0.08,0,D.be,t,2,0.1,0.02,0.06))
C.du(d,C.dv(s,0.42,0,D.be,2450411,0,0.36,0.58,0.18))
C.du(d,C.dv(872415231,0.12,0,D.be,2450411,0,0.28,0.62,0.24))
C.du(d,C.dv(16777215,0.28,0,D.eI,s,4,0.32,0,0.72))
C.du(d,C.dv(r,0.006,0,D.fp,r,3,0.42,0.08,0.22))
for(w=0;w<3;++w){v=Date.now()
u=$.iX
$.iX=u+1
u=new C.eG("design_"+(""+1000*v+"_"+u),D.f_,0.08,0.58+w*0.1,0.04,0.04,"",24,A.a4,A.bk,A.aC,4279310375,A.bg,null,D.eI,16777215,t,2,0,!1,"",0,D.cg,0,"","","","","",!1,0)
v=$.JM
u.db="__design__:"+(v.length===0?"layer":v)
A.d.cn(d.z,0,u)}d.e=4294967295
d.f=4294965229},
$S:z+1}
C.fyF.prototype={
$1(d){var w=2450411,v=4279548070
C.du(d,C.dv(3423541034,0.55,0,D.be,w,0,1,0,0))
C.du(d,C.dv(4009754623,0.56,0.45,D.jz,w,0,0.56,0.22,0.18))
C.du(d,C.dv(3439329279,0.44,0.45,D.jz,w,0,0.44,0.28,0.24))
C.du(d,C.dv(v,0.07,0,D.be,w,0,0.22,0.34,0.62))
C.du(d,C.dv(v,1,0,D.be,w,0,0.07,0,0))
d.e=4280166715
d.f=4279179050},
$S:z+1}
C.fq9.prototype={
$1(d){return d.a===this.a},
$S:z+20}
C.fqa.prototype={
$0(){return A.d.gL($.bCg())},
$S:z+52}
C.few.prototype={
$1(d){var w=A.a.i(d)
if(w.length===0)return""
return A.a.a0(w,"\u2022")?w:"\u2022 "+w},
$S:13}
C.fev.prototype={
$1(d){return C.hMV(d,this.a,this.b)},
$S:z+53}
C.fz4.prototype={
$1(d){var w=this,v=w.a,u=w.b,t=B.vr(1.0375,1.01875,1)
return new B.fO(v,u,new C.aRb(B.hCJ(A.ux,C.hMY(w.c,w.d,v,u),t)))},
$S:398}
C.dQM.prototype={
$1(d){var w=d.a/1e6
this.a.d.sp(0,w)
return w},
$S:8}
C.dQL.prototype={
$2(d,e){var w=null,v=Math.min(e.b,e.d),u=this.b,t=B.bZ(w,new B.o(w,w,w,w,w,new B.bR(A.Jh,1.2,A.x,w,0,u.d,w,w),A.n),A.bd),s=this.a,r=s.d,q=s.a.d?0.45:1
return B.js(new B.an(A.W,w,A.b_,A.q,B.a([t,new B.es(B.b3(w,w,w,new C.bcP(u.a,r,q,r),A.au),w),B.av(new B.ka(r,new C.dQK(s,v,this.c,u),w,w,x.cl),w,w,w)],x.p),w),A.q,w)},
$S:370}
C.dQK.prototype={
$3(d,e,f){var w,v,u,t,s=this,r=null,q=A.et.av(0,A.k.D(e/1.4,0,1)),p=A.k.D(e/0.9,0,1),o=A.k.D((e-0.8)/0.9,0,1),n=Math.sin(e*1.6),m=s.b,l=m*0.08,k=x.p,j=B.a([],k),i=s.c
if(i!=null){w=m*0.22
v=m*0.008
u=s.d.e
t=B.B(u,x.bz)
t.push(A.d.gL(u))
u=B.a([new B.ac(0,A.G,u[1].j(0.55),A.J,l)],x.V)
A.d.v(j,B.a([B.p(r,B.hS(B.fL(i,A.A,r,r,A.cm,A.bQ,!0,r,!1,r,r),A.aq),A.f,r,r,new B.o(r,r,r,r,u,new B.fS(A.A,0,6.283185307179586,A.x,t,r,new B.me(e*0.8)),A.a6),r,w,r,r,new B.Q(v,v,v,v),r,r,w),new B.a6(r,m*0.04,r,r)],k))}i=s.d.e
w=s.a
v=A.a.i(w.a.c.b)
u=v.length
if(u===0)v="NGMY"
u=u>12?0.1:0.17
t=m*0.05
j.push(new C.bpi(i,e,B.d(v,r,r,r,r,r,r,B.l(r,r,A.c,r,r,r,r,r,r,r,r,m*u,r,r,A.u,r,1.05,!0,r,m*0.012,r,r,r,B.a([new B.cP(i[1].j(0.6),A.J,t)],x.r),r,r),A.L,r,r),r))
j.push(new B.a6(r,m*0.025,r,r))
u=Math.max(1.5,m*0.004)
j.push(B.db(B.dU(B.v(B.a([B.p(r,r,A.f,r,r,new B.o(r,r,r,r,r,new B.a7(A.a3,A.a7,A.x,B.a([A.K,i[1],A.K],x.O),r,r),A.n),r,u,r,r,r,r,r,m*0.22),new B.a6(r,m*0.022,r,r),B.d(w.a.c.gaJ7(),r,r,r,r,r,r,B.l(r,r,A.c.j(0.92),r,r,r,r,r,r,r,r,t,r,r,A.a4,r,r,!0,r,m*0.003,r,r,r,r,r,r),A.L,r,r)],k),A.m,r,A.e,A.Q,0,A.p),new B.u(0,(1-o)*m*0.03)),o))
return B.db(B.e9(A.A,new B.C(new B.Q(l,0,l,0),B.v(j,A.m,r,A.e,A.Q,0,A.p),r),(0.6+0.4*q)*(1+n*0.012),r,r),p)},
$S:105}
C.eS6.prototype={
$1(d){var w=this.b
return new B.a7(A.ax,A.aD,A.x,this.a.c,B.a([0,A.k.D(w-0.1,0,1),A.k.D(w,0,1),A.k.D(w+0.1,0,1),1],x.x),null).aw(0,d)},
$S:65}
C.c6h.prototype={
$4$child$label$onTap$selected(d,e,f,g){var w,v=null,u=B.m(14),t=g?A.bJ:A.bF
t=B.I(t,A.r,g?2.5:1)
w=g?B.a([new B.ac(0,A.G,A.hD.j(0.4),A.J,14)],x.V):v
w=B.dg(v,B.bw(B.m(12),d,A.aq),v,v,A.bb,new B.o(v,v,t,u,w,v,A.n),A.eE,v,72,v,v,v,v,v)
return B.aE(v,new B.a6(112,v,B.v(B.a([w,A.fW,B.d(e,v,1,A.a2,v,v,v,B.l(v,v,g?A.bJ:A.ad,v,v,v,v,v,v,v,v,11,v,v,A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.j,0,A.p),v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,f,v,v,v,v,v,v,!1,A.a8)},
$S:1685}
C.c6i.prototype={
$0(){var w=this.a
return w.d.$1(w.c.F8(""))},
$S:0}
C.c6j.prototype={
$1(d){var w=this.a,v=w.c,u=d.a
return this.b.$4$child$label$onTap$selected(B.e_(new C.ML(v.F8(u),!0,!1,null),!0,null),d.b,new C.c6k(w,this.c,d),v.a===u)},
$S:z+54}
C.c6k.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(C.hhb(u.b,t.c.F8(u.c.a)),$async$$0)
case 2:s=e
if(s!=null)t.d.$1(s)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fFm.prototype={
$1(d){return new C.Yq(this.a,null)},
$S:z+55}
C.d50.prototype={
$0(){var w=this.a
w.d=w.gvk().b9h("data:"+this.b+";base64,"+A.cS.gcv().aJ(this.c));++w.r},
$S:0}
C.d55.prototype={
$0(){B.a5(this.a,!1).N(null)
return null},
$S:0}
C.d56.prototype={
$0(){var w=this.a
return w.m(new C.d54(w))},
$S:0}
C.d54.prototype={
$0(){return this.a.r++},
$S:0}
C.d57.prototype={
$1(d){var w=this.a
return w.m(new C.d53(w,d))},
$S:2}
C.d53.prototype={
$0(){var w=this.a
return w.d=w.gvk().aC7(this.b)},
$S:0}
C.d58.prototype={
$0(){var w=this.a
return w.m(new C.d52(w))},
$S:0}
C.d52.prototype={
$0(){var w=this.a
return w.d=w.gvk().b9h("")},
$S:0}
C.d59.prototype={
$1(d){var w=this.a
return w.m(new C.d51(w,d))},
$S:2}
C.d51.prototype={
$0(){var w=this.a
return w.d=w.gvk().b9o(this.b)},
$S:0}
C.d5a.prototype={
$0(){var w=this.a
w=w.gvk().b9o(w.gavW().a.a)
B.a5(this.b,!1).N(w)
return null},
$S:0}
C.fFl.prototype={
$1(d){var w={}
w.a=this.a
return new B.e2(new C.fFk(w),null)},
$S:20}
C.fFk.prototype={
$2(d,e){var w=null,v=this.a
return B.p(w,B.bn(!0,new B.cU(new B.aY(0,1/0,0,B.aI(d,A.bS,x.w).w.a.b*0.85),B.cd(B.v(B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.b5,w,w,B.m(9),w,w,A.n),w,4,w,w,w,w,w,40),w,w,w),A.ay,D.flw,A.at,D.flM,A.ay,new C.aYq(v.a,new C.fFj(v,e,d),!0,w)],x.p),A.F,w,A.e,A.Q,0,A.p),A.q,w,A.y,w,w,w,w,A.ai),w),!0,!1,A.ag,!0,!1),A.f,w,w,D.aYY,w,w,w,w,A.Ly,w,w,w)},
$S:180}
C.fFj.prototype={
$1(d){this.b.$1(new C.fFi(this.a,d))
B.a5(this.c,!1).N(d)},
$S:z+56}
C.fFi.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.fHI.prototype={
$1(d){return D.fI1},
$S:z+57}
C.dbM.prototype={
$0(){B.a5(this.a,!1).N(null)
return null},
$S:0}
C.dbN.prototype={
$0(){var w=this.a.c
w.toString
B.a5(w,!1).N(this.b)
return null},
$S:0}
C.dbO.prototype={
$0(){var w=this.a,v=A.a.i(w.d.a.a)
if(v.length!==0){w=w.c
w.toString
B.a5(w,!1).N(v)}},
$S:0}
C.fvL.prototype={
$1(d){var w=this.b
return new B.a7(A.ax,A.aD,A.x,B.a([A.K,B.aq(this.a,A.c,0.75).j(0.9),A.K],x.O),B.a([A.k.D(w-0.12,0,1),A.k.D(w,0,1),A.k.D(w+0.12,0,1)],x.x),null).aw(0,d)},
$S:65}
C.d4I.prototype={
$3(d,e,f){var w,v=this,u=new B.aQ($.X().r,A.ap,null,null,B.a([],x.v)),t=d.a,s=v.b,r=e*s,q=d.b,p=f*s,o=q+p*0.12
u.E(new B.b5(t+r*1.2,o))
u.E(new B.cS(t+r*0.25,o,t+r*0.18,q+p*0.5))
w=t+r*0.12
u.E(new B.cS(w,q+p,w,q+p*1.2))
u.E(new B.CD(B.bU(new B.u(t+r*0.42,q+p*0.42),s*0.14),0,5.026548245743669))
s=v.c
s.aO(u,v.d)
s.aO(u,v.e)
p=B.M()
p.r=B.aq(v.a.d,A.c,0.6).gp(0)
s.ai(new B.u(w,o),2.2,p)},
$S:669}
C.fvP.prototype={
$2(d,e){return A.k.aL(d.c,e.c)},
$S:z+58}
C.fo9.prototype={
$1(d){return d.w==="marriage_agreement"},
$S:z+2}
C.foa.prototype={
$1(d){var w=null,v=this.a
return B.bn(!0,new B.C(E.xl,B.v(B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.b5,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bv,D.f4L,A.P,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aO,B.dp(D.G_,B.d('Endelea na "'+A.d.gL(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fo7(d),B.bk(A.bU,w,w,w,A.c,w,A.cf,w,w,w,w,w)),A.S,B.ez(A.nP,D.T7,new C.fo8(d),B.de(w,w,w,w,w,w,w,w,w,A.ad,w,w,A.cf,w,w,Q.wr,w,w,w,w))],x.p),A.aj,w,A.e,A.Q,0,A.p),w),!0,!1,A.ag,!0,!0)},
$S:27}
C.fo7.prototype={
$0(){B.a5(this.a,!1).N("continue")
return null},
$S:0}
C.fo8.prototype={
$0(){B.a5(this.a,!1).N("new")
return null},
$S:0}
C.cbG.prototype={
$1(d){return d.hA()},
$S:z+59}
C.cbH.prototype={
$1(d){return d.ae()},
$S:z+60}
C.cbF.prototype={
$1(b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=null,b2=B.a1(b5,x.N,x.z),b3=B.aN(b2.h(0,"fontWeight")),b4=b3==null?b1:A.k.O(b3)
if(b4==null)b4=A.a4.gdH(0)
b3=B.aN(b2.h(0,"fontStyle"))
w=b3==null?b1:A.k.O(b3)
if(w==null)w=0
b3=B.aN(b2.h(0,"align"))
v=b3==null?b1:A.k.O(b3)
if(v==null)v=0
b3=b2.h(0,"id")
b3=J.k(b3==null?"":b3)
u=C.hIM(b2.h(0,"type"))
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
n=A.awI[A.o.D(b4,0,8)]
m=D.cM8[A.o.D(w,0,1)]
l=C.hMn(b2.h(0,"decoration"))
k=B.aN(b2.h(0,"color"))
k=k==null?b1:A.k.O(k)
if(k==null)k=4279310375
j=A.aty[A.o.D(v,0,5)]
i=b2.h(0,"imageRef")
i=i==null?b1:J.k(i)
h=C.hP8(b2.h(0,"shape"))
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
a3=C.hcx(b2.h(0,"textTransition"))
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
C.cbv.prototype={
$1(d){return d.hA()},
$S:z+62}
C.cbw.prototype={
$1(d){return d.ae()},
$S:z+63}
C.cbs.prototype={
$1(d){return B.t(d)},
$S:17}
C.cbt.prototype={
$1(d){return B.t(d)},
$S:17}
C.cbu.prototype={
$1(d){return C.h3e(B.a1(d,x.N,x.z))},
$S:z+64}
C.cbX.prototype={
$1(d){return d.a===this.a},
$S:z+65}
C.cbY.prototype={
$0(){return A.d.gL(D.a1r)},
$S:z+66}
C.cbS.prototype={
$1(d){var w,v,u=d.a
if(A.a.i(u).length===0)return
w=this.a
v=w.h(0,u)
if(v==null||!v.f.ca(d.f))w.n(0,u,d.hA())},
$S:z+7}
C.cbR.prototype={
$2(d,e){return e.f.aL(0,d.f)},
$S:z+21}
C.cbN.prototype={
$1(d){return new B.K(d,new C.cbO(),B.T(d).k("K<1,S>")).fE(0,new C.cbP())},
$S:z+69}
C.cbO.prototype={
$1(d){return d.f},
$S:z+70}
C.cbP.prototype={
$2(d,e){return d.ca(e)?d:e},
$S:670}
C.cbQ.prototype={
$1(d){if(d==null||A.a.i(d).length===0)return B.a([],x.D)
return C.hyA(d)},
$S:z+71}
C.cbT.prototype={
$1(d){return!this.a.t(0,d.a)},
$S:z+2}
C.cbU.prototype={
$2(d,e){return e.f.aL(0,d.f)},
$S:z+21}
C.cbV.prototype={
$1(d){return d.ae()},
$S:z+14}
C.fwn.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this
for(w=i.a.z,v=w.length,u=i.c,t=i.d,s=i.b,r=0;r<w.length;w.length===v||(0,B.L)(w),++r){q=w[r]
p=q.a
if(s.ah(0,p))continue
for(o=u.z,n=o.length,m=q.b,l=0;l<o.length;o.length===n||(0,B.L)(o),++l){k=o[l]
j=k.a
if(t.t(0,j)||k.b!==m)continue
if(d.$2(k,q)){s.n(0,p,k)
t.K(0,j)
break}}}},
$S:z+73}
C.fwj.prototype={
$2(d,e){var w=d.fx
return w.length!==0&&w===e.fx},
$S:z+8}
C.fwk.prototype={
$2(d,e){var w=d.at
return(w==null?"":w).length!==0&&w==e.at},
$S:z+8}
C.fwl.prototype={
$2(d,e){var w
if(d.b===D.cQ){w=A.a.i(d.r)
w=w.length!==0&&w===A.a.i(e.r)}else w=!1
return w},
$S:z+8}
C.fwm.prototype={
$2(d,e){return d.b===D.f_&&d.ax===e.ax&&d.fx.length===0&&e.fx.length===0},
$S:z+8}
C.cbB.prototype={
$2(b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=null,a9=b7.b,b0=a9/960,b1=this.a,b2=b1.c,b3=b1.d,b4=C.hXO(b2,b3),b5=B.a3(b4).k("bc<2>")
b5=B.cD(new B.bc(b4,b5),new C.cbA(),b5.k("H.E"),x.N)
w=B.da(b5,B.a3(b5).k("H.E"))
b1=b1.e
v=A.po.av(0,A.k.D(b1,0,1))
u=new C.cbC()
b5=B.aq(u.$2(b2,!1),u.$2(b3,!1),v)
b5.toString
t=B.aq(u.$2(b2,!0),u.$2(b3,!0),v)
t.toString
s=new C.cbD(a9,b7.d)
r=new C.cbE(b0)
q=x.p
p=B.a([],q)
for(b2=b2.z,o=b2.length,n=b1/0.55,m=0;m<b2.length;b2.length===o||(0,B.L)(b2),++m){l=b2[m]
if(w.t(0,l.a))continue
k=A.jK.av(0,A.k.D(n,0,1))
p.push(s.$5(l.c,l.d,l.e,l.f,new B.kP(A.k.D(1-k,0,1),B.dU(B.e9(A.A,r.$1(l),1-k*0.06,a8,a8),new B.u(-k*30*b0,0)),a8)))}for(b2=b3.z,b3=b2.length,o=1-v,j=0,m=0;m<b2.length;b2.length===b3||(0,B.L)(b2),++m){i=b2[m]
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
if(a2===D.f_){a4=i.hA()
a4.ay=B.aq(B.b0(l.ay),B.b0(i.ay),v).l()
a4.ch=B.aq(B.b0(l.ch),B.b0(i.ch),v).l()
a4.cx=0
a5=r.$1(a4)}else a5=a2===D.lh&&l.at==i.at?r.$1(i):new B.an(A.W,a8,A.b_,A.q,B.a([new B.kP(A.k.D(o,0,1),r.$1(l),a8),new B.kP(A.k.D(v,0,1),r.$1(i),a8)],q),a8)
a2=a3===0?a5:new B.iE(B.vW(a3),a8,A.A,!0,a8,a5,a8)
p.push(s.$5(n+(h-n)*v,g+(f-g)*v,e+(d-e)*v,a0+(a1-a0)*v,a2))}else{a6=A.k.D((b1-(0.35+j*0.07))/0.5,0,1);++j
a7=i.dy
if(a7===D.cg)a7=D.mq
p.push(s.$5(i.c,i.d,i.e,i.f,C.heL(a7,a6,r.$1(i))))}}return B.bZ(new B.an(A.W,a8,A.aa,A.q,p,a8),new B.o(a8,a8,a8,a8,a8,new B.a7(A.a3,A.a7,A.x,B.a([b5,t],x.O),a8,a8),A.n),A.bd)},
$S:382}
C.cbA.prototype={
$1(d){return d.a},
$S:z+22}
C.cbC.prototype={
$2(d,e){var w
if(e){w=d.f
if(w==null)w=d.e}else w=d.e
return B.b0(w)},
$S:z+76}
C.cbD.prototype={
$5(d,e,f,g,h){var w=this.a,v=this.b
return B.ao(null,h,g*v,null,d*w,null,e*v,f*w)},
$S:1689}
C.cbE.prototype={
$1(d){var w=null,v=d.fy,u=A.a.gX(d.a)
return new C.a6O(v,C.b_y(!1,w,!1,d,w,!1,w,w,w,this.a,!1,!1),!0,u,w)},
$S:z+23}
C.dDo.prototype={
$2(d,e){var w=Date.now()/1000*2*3.141592653589793,v=Math.sin(w/18)
return B.e9(new B.d9(Math.sin(w/23)*0.6,Math.cos(w/29)*0.5),e,1.035+v*0.03,null,null)},
$S:45}
C.cbK.prototype={
$1(d){return d.a===this.a.a},
$S:z+11}
C.cbL.prototype={
$1(d){return d.a===this.a.a},
$S:z+20}
C.fzb.prototype={
$1(d){var w,v=document.createElement("iframe")
v.src=this.a
w=v.style
w.border="none"
w=v.style
w.width="100%"
w=v.style
w.height="100%"
return v},
$S:300}
C.fyi.prototype={
$1(d){return new C.aci(this.a,this.b,null)},
$S:z+78}
C.el4.prototype={
$0(){return this.a.P9(this.b,C.i07(),"Tap Save to Files on the next screen.","Download did not start \u2014 try Share.")},
$S:0}
C.el5.prototype={
$0(){var w=this.a,v=w.d?"Choose Print from the share menu for one full page.":"Pick Save to Files or send from the share menu."
return w.P9(this.b,C.i09(),v,"Share unavailable \u2014 try Safari.")},
$S:0}
C.el6.prototype={
$0(){var w=this.a,v=w.d?"PDF opened \u2014 tap Share \u2197 then Print.":"PDF opened \u2014 use Share \u2197 at the bottom of Safari."
return w.P9(this.b,C.i08(),v,"Could not open Safari \u2014 try Share.")},
$S:0}
C.el7.prototype={
$0(){Z.hev()
B.a5(this.a,!1).N(null)},
$S:0}
C.cbz.prototype={
$1(d){var w=null,v=this.a
return v==null?d:B.l(w,w,w,w,w,w,w,w,w,w,w,d.r,d.x,w,d.w,v,d.as,!0,w,d.y,w,w,w,w,w,w)},
$S:1690}
C.cby.prototype={
$2(d,e){var w,v=this,u=null,t=B.dL(d,A.nk),s=t==null?u:t.b,r=s==null?2:s,q=e.b,p=isFinite(q)?q:0,o=p<=0?u:A.k.V(A.k.D(p*Math.max(B.lJ(r),5),96,1500))
t=v.b
w=v.c||v.d?A.bQ:A.dt
return B.fL(t,A.A,o,new C.cbx(),A.cm,w,!0,u,!1,new B.cw("img_"+v.a.c.a+"_"+t.length,x.W),u)},
$S:1691}
C.cbx.prototype={
$3(d,e,f){return D.aat},
$S:224}
C.fwi.prototype={
$2(d,e){var w,v,u,t=null,s=B.m(6),r=this.a
if(r.f!=null){w=B.b0(r.e)
v=r.f
v.toString
v=new B.a7(A.ax,A.aD,A.x,B.a([w,B.b0(v)],x.O),t,t)
w=v}else w=t
v=r.f==null?B.b0(r.e):t
r=r.z
r=B.dc(r,0,B.dJ(6,"count",x.S),B.T(r).c)
u=r.$ti.k("K<ai.E,cK>")
r=B.B(new B.K(r,new C.fwh(e.b,e.d),u),u.k("ai.E"))
return B.bw(s,B.bZ(new B.an(A.W,t,A.aa,A.q,r,t),new B.o(v,t,t,t,t,w,A.n),A.bd),A.aq)},
$S:1692}
C.fwh.prototype={
$1(d){var w=null,v=d.c,u=this.a,t=d.d,s=this.b,r=d.e,q=d.f
return B.ao(w,C.b_y(!1,w,!1,d,w,!1,w,w,w,u/960,!1,!0),q*s,w,v*u,w,t*s,r*u)},
$S:z+24}
C.fh3.prototype={
$3(d,e,f){var w,v,u,t,s,r=this,q=null,p=r.a
p.a=B.cM(r.b,new C.fh1(d))
w=B.aI(d,A.bS,x.w).w
v=B.m(22)
u=B.I(A.bF,A.r,1)
t=B.a([new B.ac(0,A.G,A.w.j(0.45),A.fK,28)],x.V)
s=x.p
return new B.cX(e,!1,B.av(B.aF(!1,A.a1,!0,q,B.p(q,B.v(B.a([B.A(B.a([B.D(B.v(B.a([B.d(r.c,q,q,q,q,q,q,A.kU,q,q,q),A.at,B.d("Applied \u2014 tap Done or wait 1.5 seconds",q,q,q,q,q,q,B.l(q,q,A.c.j(0.45),q,q,q,q,q,q,q,q,11,q,q,A.a4,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),A.F,q,A.e,A.j,0,A.p),1),B.bK(!1,A.zh,q,q,!0,q,q,new C.fh2(p,d),q,B.fu(q,q,A.bi,q,q,q,q,q,q,q,q,A.c,q,q,q,q,q,A.EQ,q,new B.b7(B.m(12),A.Y),q,q,q,q,q,q))],s),A.m,q,A.e,A.j,0,q,q),A.ay,r.d],s),A.m,q,A.e,A.Q,0,A.p),A.f,q,new B.aY(0,w.a.a*0.94,0,1/0),new B.o(A.aA,q,u,v,t,q,A.n),q,q,q,A.fH,A.EZ,q,q,q),A.f,A.K,0,q,q,q,q,q,A.af),q,q,q),q)},
$C:"$3",
$R:3,
$S:236}
C.fh1.prototype={
$0(){var w=this.a
if(w.e!=null&&B.a5(w,!0).pi())B.a5(w,!0).eI()},
$S:0}
C.fh2.prototype={
$0(){var w=this.a.a
if(w!=null)w.a9(0)
B.a5(this.b,!0).eI()},
$S:0}
C.f_q.prototype={
$2(d,e){var w,v,u=this,t=null,s=u.a,r=s.d
r===$&&B.c()
r=r.x
r===$&&B.c()
switch(s.a.c.a){case 0:return u.b
case 1:case 13:return new B.an(A.W,t,A.b_,A.q,B.a([u.c,B.db(u.b,r)],x.p),t)
case 2:case 17:return new B.an(A.W,t,A.b_,A.q,B.a([u.c,B.dU(u.b,new B.u((1-r)*220,0))],x.p),t)
case 3:return new B.an(A.W,t,A.b_,A.q,B.a([u.c,B.dU(u.b,new B.u(-(1-r)*220,0))],x.p),t)
case 4:case 21:return new B.an(A.W,t,A.b_,A.q,B.a([u.c,B.dU(u.b,new B.u(0,(1-r)*140))],x.p),t)
case 5:return new B.an(A.W,t,A.b_,A.q,B.a([u.c,B.dU(u.b,new B.u(0,-(1-r)*140))],x.p),t)
case 6:return new B.an(A.W,t,A.b_,A.q,B.a([u.c,B.e9(A.A,B.db(u.b,r),0.6+r*0.4,t,t)],x.p),t)
case 7:return new B.an(A.W,t,A.b_,A.q,B.a([u.c,B.e9(A.A,B.db(u.b,r),1.3-r*0.3,t,t)],x.p),t)
case 8:s=B.dl()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.001
s.fv(r*3.14159)
return B.fr(A.A,r<0.5?u.c:u.b,t,s,!0)
case 9:s=B.dl()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.001
s.jN(r*3.14159)
return B.fr(A.A,r<0.5?u.c:u.b,t,s,!0)
case 10:s=B.dl()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.002
s.fv(r*1.2)
s.jN(r*0.5)
return B.fr(A.A,B.db(u.b,0.4+r*0.6),t,s,!0)
case 11:s=B.dl()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.002
s.fv(-r*1.4)
return B.fr(A.a7,B.db(u.b,r),t,s,!0)
case 12:return new B.an(A.W,t,A.b_,A.q,B.a([u.c,B.db(B.e9(A.A,u.b,1.02-r*0.02,t,t),r)],x.p),t)
case 14:return new B.an(A.W,t,A.b_,A.q,B.a([u.c,B.js(u.b,A.q,new C.aHZ(r,t))],x.p),t)
case 15:return new B.an(A.W,t,A.b_,A.q,B.a([u.c,B.js(u.b,A.q,new C.aHZ(1-r,t))],x.p),t)
case 16:v=D.b1m.av(0,r)
return new B.an(A.W,t,A.b_,A.q,B.a([u.c,B.e9(A.A,B.db(u.b,r),0.5+v*0.5,t,t)],x.p),t)
case 18:s=r<0.15
if(s)r=1
return new B.an(A.W,t,A.b_,A.q,B.a([u.c,B.db(B.ei(u.b,A.c.j(s?0.9:0),!0),r)],x.p),t)
case 19:s=B.dl()
s.mB(r*6.28)
s.jx(r,r,r,1)
return B.fr(A.A,u.b,t,s,!0)
case 20:return B.eA(A.A,(r-0.5)*0.35,new B.an(A.W,t,A.b_,A.q,B.a([u.c,B.db(u.b,r)],x.p),t),t)}},
$S:60}
C.dOZ.prototype={
$0(){var w=this.a
if(w.c!=null){w=w.d
w===$&&B.c()
w.cp(0)}},
$S:11}
C.dOY.prototype={
$0(){var w=this.a
if(w.c!=null){w=w.d
w===$&&B.c()
w.cp(0)}},
$S:11}
C.dOX.prototype={
$2(d,e){var w,v=this.a
e.toString
w=v.d
w===$&&B.c()
v=v.a.c.dy
w=w.x
w===$&&B.c()
return C.heL(v,w,e)},
$S:60}
C.cbr.prototype={
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
q=B.B(new B.K(v,new C.cbq(q,w,e.b,e.d),s),s.k("ai.E"))
return B.bZ(new B.an(A.W,r,A.aa,A.f,q,r),new B.o(t,r,r,r,r,u,A.n),A.bd)},
$S:382}
C.cbq.prototype={
$1(d){var w,v=this,u=null,t=d.dy!==D.cg?v.a.a++:0,s=d.c,r=v.c,q=d.d,p=v.d,o=d.e,n=d.f,m=d.fy,l=v.b,k=l.d
l=k||l.e
w=A.a.gX(d.a)
return B.ao(u,new C.a6O(m,new C.U6(d,C.b_y(!1,u,!1,d,u,!1,u,u,u,r/960,!1,!1),k,t,u),l,w,u),n*p,u,s*r,u,q*p,o*r)},
$S:z+24}
C.d1X.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.d1W(w))},
$S:11}
C.d1W.prototype={
$0(){return this.a.d++},
$S:0}
C.e8H.prototype={
$2(d,e){var w,v=null,u=A.o.an(this.b.e.a,1000),t=A.o.G(Date.now(),u)/u*3.141592653589793*2+this.c,s=this.a
if(D.aLu.t(0,A.d.gL(s.a.c.split("@")))){s=s.a
w=s.c
s=s.f
e.toString
return C.hXx(w,t,s,e)}switch(s.a.c){case"float3d":s=B.dl()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.0016
w=Math.sin(t)
s.e2(0,w*7,0,1)
s.fv(Math.sin(t)*0.32)
s.jN(Math.cos(t)*0.12)
w=1+Math.sin(t*2)*0.025
s.jx(w,w,w,1)
return B.fr(A.A,e,v,s,!0)
case"drift":s=Math.sin(t)
w=Math.cos(t*0.8)
return B.dU(B.e9(A.A,e,1+Math.sin(t*0.5)*0.05,v,v),new B.u(s*14,w*10))
default:s=Math.sin(t)
return B.db(B.e9(A.A,e,1+Math.sin(t)*0.04,v,v),0.82+s*0.18)}},
$S:60}
C.ePK.prototype={
$1(d){var w
$.X()
w=B.M()
w.b=A.ae
w.c=d
w.e=A.fz
return w},
$S:1693}
C.ftT.prototype={
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
if(q==="framed"||q==="gold")w.push(B.b3(r,r,r,new C.bpb(u,t,r),A.au))
w.push(B.nl(s.d,A.aq,new C.bdl(u,t,r)))
if(!p)w.push(B.b3(r,r,r,new C.bob(u,q,t,r),A.au))
return B.av(new B.a6(v.a,v.b,new B.an(A.W,r,A.b_,A.q,w,r),r),r,r,r)},
$S:247}
C.fjS.prototype={
$1(d){var w=d.b[1]
return w==null?"":w},
$S:299}
C.eri.prototype={
$0(){var w=0,v=B.j(x.aP),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(S.Cn(t.a.a.c),$async$$0)
case 3:s=e
r=J.a8(s)
if(r.gam(s)){u=null
w=1
break}u=r.dM(s,new C.erg(),new C.erh(s))
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1694}
C.erg.prototype={
$1(d){return d.at==="published"&&d.Q.length!==0},
$S:193}
C.erh.prototype={
$0(){return J.fn(this.a)},
$S:1696}
C.enG.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.enH.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.enI.prototype={
$0(){var w=this.a
w.d=this.b
w.x=!1},
$S:0}
C.epg.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.ep4.prototype={
$1(d){return d.w!=="hati_kiapo_uongozi"},
$S:z+2}
C.ep5.prototype={
$1(d){return d.hA()},
$S:z+81}
C.en3.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.eqo.prototype={
$0(){this.a.te()},
$S:0}
C.ere.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.e=u
w.f=A.o.D(v.b,0,u.r.length-1)
w.r=v.c
w.nZ()
w.Jy()},
$S:0}
C.epe.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.e=u
w.f=A.o.D(v.b,0,u.r.length-1)
w.r=v.c
w.nZ()
w.Jy()},
$S:0}
C.er1.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+2}
C.er2.prototype={
$1(d){return d.b===D.cQ},
$S:z+4}
C.er3.prototype={
$1(d){return d.a},
$S:z+22}
C.er4.prototype={
$0(){var w=this.a.r
return new B.ar(new B.bb(w,A.b2,A.aN),$.aw())},
$S:235}
C.er5.prototype={
$0(){return B.kh(!0,null,!0,!0,null,null,!1)},
$S:673}
C.ems.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+2}
C.erf.prototype={
$0(){},
$S:0}
C.eon.prototype={
$0(){var w=this.a
w.e=this.b.hA()
w.f=0
w.r=null
w.db=!1
A.d.a8(w.ax)
A.d.a8(w.ay)
w.x7()
w.Jy()},
$S:0}
C.emq.prototype={
$0(){var w=this.a
w.e=null
w.db=!1
w.w=w.r=null
w.x7()},
$S:0}
C.emr.prototype={
$0(){var w=this.a
w.w=w.r=w.e=null
w.x7()},
$S:0}
C.eoK.prototype={
$1(d){return d.a===this.a.a.a},
$S:z+2}
C.eoL.prototype={
$0(){var w=this.a
w.e=this.b
w.f=0
w.r=null
w.db=!this.c
A.d.a8(w.ax)
A.d.a8(w.ay)
w.x7()
w.Jy()
w.z="Home"},
$S:0}
C.eoM.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eom.prototype={
$1(d){var w=null
return B.eh(B.a([B.bK(!1,A.T6,w,w,!0,w,w,new C.eol(d),w,w)],x.p),w,w,w,D.fnd,w,w,w,w,D.f5c,w)},
$S:19}
C.eol.prototype={
$0(){B.a5(this.a,!1).N(null)
return null},
$S:0}
C.eoj.prototype={
$1(d){var w=null
return B.eh(B.a([B.bK(!1,A.T6,w,w,!0,w,w,new C.eoi(d),w,w)],x.p),w,w,w,D.f93,w,w,w,w,D.f6S,w)},
$S:19}
C.eoi.prototype={
$0(){B.a5(this.a,!1).N(null)
return null},
$S:0}
C.eok.prototype={
$0(){},
$S:0}
C.enC.prototype={
$1(d){return this.a.aYS(C.bAg(d))},
$S:z+7}
C.enD.prototype={
$1(d){return this.a.adN(C.bAg(d))},
$S:z+7}
C.eot.prototype={
$1(d){var w=null,v=x.p,u=B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.b5,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bv,D.fnh,A.at,B.d("Chagua aina ya hati",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.bv,new C.OO(A.vh,D.auU,"HATI YA KUHOWA","Hati ya mahari",new C.eoo(d),w),A.S,new C.OO(A.h5,D.cXY,"HATI YA KUHOWESHA","Hati ya kupokea",new C.eop(d),w),A.S,new C.OO(A.hY,D.cKp,"HATI YA NDOA","Makubaliano \xb7 pete \xb7 picha za wanandoa",new C.eoq(d),w),A.S,new C.OO(A.hJ,D.cIK,"MALIPO YA AWAMU YA MAHARI","Makubaliano ya mahari iliyosalia",new C.eor(d),w)],v)
if(this.a.gaal())A.d.v(u,B.a([A.S,new C.OO(A.iR,D.ctU,"HATI YA KIAPO CHA UONGOZI","Kiapo cha Rais \xb7 Civic Registry",new C.eos(d),w)],v))
return B.bn(!0,B.cd(B.v(u,A.aj,w,A.e,A.Q,0,A.p),A.q,w,A.y,w,E.xl,w,w,A.ai),!0,!1,A.ag,!0,!0)},
$S:27}
C.eoo.prototype={
$0(){B.a5(this.a,!1).N("hati_kuhowa")
return null},
$S:0}
C.eop.prototype={
$0(){B.a5(this.a,!1).N("hati_kuhoweya")
return null},
$S:0}
C.eoq.prototype={
$0(){B.a5(this.a,!1).N("marriage_agreement")
return null},
$S:0}
C.eor.prototype={
$0(){B.a5(this.a,!1).N("hati_malipo_awamu")
return null},
$S:0}
C.eos.prototype={
$0(){B.a5(this.a,!1).N("hati_kiapo_uongozi")
return null},
$S:0}
C.eou.prototype={
$0(){var w=this.a
w.e=this.b.hA()
w.f=0
w.r=null
w.db=!0
A.d.a8(w.ax)
A.d.a8(w.ay)
w.x7()},
$S:0}
C.emu.prototype={
$1(d){return d.z.length===0},
$S:z+6}
C.emv.prototype={
$0(){var w,v,u=this,t=u.c,s=u.d,r=t.r,q=s.r
if(u.b){A.d.a8(r)
A.d.v(r,q)
w=A.a.i(t.b).toLowerCase()
if(w.length===0||A.a.a0(w,"untitled"))t.b=s.b
r=u.a
r.f=0}else{v=u.a
A.d.n1(r,v.f+1,q);++v.f
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
C.eoF.prototype={
$1(d){return d.b===D.lh},
$S:z+4}
C.eoG.prototype={
$1(d){var w={},v=this.b
w.a=A.d.gL(v).go
w.b=A.d.gL(v).id
return new B.e2(new C.eoD(w,this.a,v),null)},
$S:20}
C.eoD.prototype={
$2(a2,a3){var w,v,u,t,s,r,q=null,p=this.a,o=this.b,n=this.c,m=new C.eoE(p,o,a3,n),l=B.O(a2).ax.a===A.H,k=l?A.c:A.M,j=l?A.aR:A.ak,i=l?A.bl:A.bN,h=l?A.M:A.c,g=B.m(28),f=B.I(l?A.bF:A.aL,A.r,1),e=x.p,d=B.A(B.a([B.D(B.v(B.a([B.d("Logo and pictures",q,q,q,q,q,q,B.l(q,q,k,q,q,q,q,q,q,q,q,20,q,q,A.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),A.bA,B.d("Tap a shape or a ring to change it.",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,12.5,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],e),A.F,q,A.e,A.j,0,A.p),1),B.aH(q,q,q,q,B.W(A.cy,j,q,q,q,q),q,q,q,new C.eoz(a2),q,q,q,q,q,q)],e),A.m,q,A.e,A.j,0,q,q),a0=B.d("SHAPE",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q),a1=B.a([],e)
for(w=0;w<7;++w){v={}
u=D.BB[w]
v.a=null
t=v.a=u.a
a1.push(new C.bfP(t,u.b,p.a===t,i,k,new C.eoA(v,m),q))}a1=B.c_(A.bD,a1,A.bt,10,10)
v=B.d("RING",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q)
u=B.a([],e)
for(w=0;w<11;++w){s={}
r=D.Bw[w]
s.a=null
t=s.a=r.a
u.push(new C.bfO(t,r.b,p.b===t,k,j,new C.eoB(s,m),q))}return B.bn(!0,B.p(q,B.cd(B.v(B.a([d,A.aO,a0,A.S,a1,A.bv,v,A.S,B.c_(A.bD,u,A.bt,12,12),A.bv,new B.a6(1/0,48,B.ez(D.bNv,D.fpE,new C.eoC(o,n),B.de(q,q,q,q,q,q,q,q,q,A.aE,q,q,q,q,new B.b7(B.m(16),A.Y),D.aWt,q,q,q,q)),q)],e),A.F,q,A.e,A.Q,0,A.p),A.q,q,A.y,q,q,q,q,A.ai),A.f,q,q,new B.o(h,q,f,g,q,q,A.n),q,q,q,A.tk,D.bpY,q,q,q),!0,!1,A.ag,!0,!0)},
$S:88}
C.eoE.prototype={
$2$f$r(d,e){var w=this
w.c.$1(new C.eox(w.a,d,e))
w.b.d1(new C.eoy(w.d,d,e))},
$0(){return this.$2$f$r(null,null)},
$1$r(d){return this.$2$f$r(null,d)},
$1$f(d){return this.$2$f$r(d,null)},
$S:1699}
C.eox.prototype={
$0(){var w=this,v=w.b
if(v!=null)w.a.a=v
v=w.c
if(v!=null)w.a.b=v},
$S:0}
C.eoy.prototype={
$0(){var w,v,u,t,s,r,q,p
for(w=this.a,v=w.length,u=this.c,t=u!=null,s=this.b,r=s!=null,q=0;q<v;++q){p=w[q]
if(r)p.go=s
if(t)p.id=u}},
$S:0}
C.eoz.prototype={
$0(){B.a5(this.a,!1).N(null)
return null},
$S:0}
C.eoA.prototype={
$0(){return this.b.$1$f(this.a.a)},
$S:0}
C.eoB.prototype={
$0(){return this.b.$1$r(this.a.a)},
$S:0}
C.eoC.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A4.G4(78,1920),$async$$0)
case 3:s=e
if(s==null){w=1
break}t.a.d1(new C.eow(t.b,s))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eow.prototype={
$0(){var w,v,u,t
for(w=this.a,v=w.length,u=this.b,t=0;t<v;++t)w[t].at=u},
$S:0}
C.eoI.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+6}
C.eoJ.prototype={
$0(){var w,v,u,t=this,s=t.a
if(s.a<0)s.a=t.c.r.length
w=t.c
v=w.r
A.d.bn(v,new C.eoH(t.d))
u=A.o.D(s.a,0,v.length)
s.a=u
s=t.e
A.d.n1(v,u,s.r)
w.CW=s.CW
w.cx=s.cx
w.cy=s.cy
w.ay=s.ay
s=t.b
s.f=A.o.D(s.f,0,v.length-1)
s.r=null
s.x7()},
$S:0}
C.eoH.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+6}
C.ep_.prototype={
$1(d){return d.b===D.cQ},
$S:z+4}
C.ep0.prototype={
$1(d){return d.w},
$S:z+82}
C.ep1.prototype={
$2(d,e){return d>e?d:e},
$S:87}
C.ep2.prototype={
$1(d){var w=this,v=null,u=B.O(d).ax.a===A.H,t=u?A.c:A.M,s=u?A.aR:A.ak,r=u?A.bl:A.aP,q=u?A.M:A.c,p=B.m(28),o=B.I(u?A.bF:A.aL,A.r,1),n=B.aI(d,A.bS,x.w).w,m=w.a,l=x.p,k=w.b
return B.bn(!0,B.p(v,B.v(B.a([B.A(B.a([B.p(v,D.bHh,A.f,v,v,D.aXR,v,38,v,v,v,v,v,38),A.bf,B.D(B.v(B.a([B.d("Edit this slide",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,19,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.d("Slide "+(m.f+1)+" \xb7 changes save as you type",v,v,v,v,v,v,B.l(v,v,s,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],l),A.F,v,A.e,A.j,0,A.p),1),B.aH(v,v,v,v,B.W(A.cy,s,v,v,v,v),v,v,v,new C.eoX(d),v,v,v,v,v,v)],l),A.m,v,A.e,A.j,0,v,v),A.ay,new B.dm(1,A.ci,B.hF(v,new C.eoY(m,k,w.c,s,w.d,t,r),k.length,A.fx,v,A.ai,new C.eoZ(),!0),v)],l),A.F,v,A.e,A.Q,0,A.p),A.f,v,new B.aY(0,1/0,0,n.a.b*0.8),new B.o(q,v,o,p,v,v,A.n),v,v,v,A.tk,A.XQ,v,v,v),!0,!1,A.ag,!0,!0)},
$S:27}
C.eoX.prototype={
$0(){B.a5(this.a,!1).N(null)
return null},
$S:0}
C.eoZ.prototype={
$2(d,e){return A.ac},
$S:36}
C.eoY.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=null,p=r.b[e],o=p.w===r.c,n=o?"TITLE":"TEXT "+(e+1)
n=B.d(n,q,q,q,q,q,q,B.l(q,q,o?A.aE:r.d,q,q,q,q,q,q,q,q,10.5,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q)
w=r.e
v=w.h(0,p.a)
u=o?1:2
t=o?A.I:A.cs
t=B.l(q,q,r.f,q,q,q,q,q,q,q,q,15,q,q,t,q,q,!0,q,q,q,q,q,q,q,q)
s=r.a
w=B.aH(q,q,q,q,D.bKm,q,q,q,new C.eoV(s,w,p),q,q,q,q,"Add an icon",q)
return B.v(B.a([new B.C(D.bsb,n,q),B.aL(q,A.T,!1,q,!0,A.q,q,B.aM(),v,q,q,q,q,q,2,B.br(q,new B.b4(4,B.m(16),A.Y),q,A.eP,q,q,q,q,!0,q,q,q,q,q,q,r.r,!0,q,q,q,q,new B.b4(4,B.m(16),D.aW8),q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,!0,!0,!1,q,q,q,q,q,q,q,q,w,q,q,q,q,q),A.y,!0,q,!0,q,!1,q,A.ah,q,q,q,q,q,q,q,q,q,q,u,q,!1,"\u2022",q,new C.eoW(s,p),q,q,q,!1,q,q,!1,q,!0,q,A.a9,q,q,q,q,q,q,q,q,q,q,q,t,!0,A.a5,q,A.am,q,q,q,q)],x.p),A.F,q,A.e,A.j,0,A.p)},
$S:674}
C.eoV.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=t.a
k=l.c
k.toString
w=3
return B.b(C.i2b(k),$async$$0)
case 3:s=e
if(s==null||l.c==null){w=1
break}k=t.c.a
r=t.b.h(0,k)
q=r.a
p=q.b
o=p.geu()?p.a:q.a.length
n=p.geu()?p.b:q.a.length
m=A.a.ov(q.a,o,n,s)
r.bM(0,new B.bb(m,B.h8(A.bu,o+s.length),A.aN))
l.ahO(k,m)
l.p0()
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eoW.prototype={
$1(d){var w=this.a
w.ahO(this.b.a,d)
w.p0()},
$S:2}
C.ep3.prototype={
$0(){},
$S:0}
C.eov.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.db=u.length===0?null:u
w.dx=v.b
w.dy=v.c
v=v.d
w.fr=v.length===0?null:v},
$S:0}
C.emL.prototype={
$0(){},
$S:0}
C.emM.prototype={
$0(){var w=this.c.CW
if(w==null)w=""
C.hg3(this.b,w,!0)
w=this.a
w.r=null
w.x7()},
$S:0}
C.emN.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+6}
C.emO.prototype={
$0(){var w,v,u,t=this,s=t.a
if(s.a<0)s.a=t.c.r.length
w=t.c
v=w.r
A.d.bn(v,new C.emK(t.d))
u=A.o.D(s.a,0,v.length)
s.a=u
s=t.e
A.d.n1(v,u,s.r)
w.CW=s.CW
w.cx=s.cx
s=t.b
s.f=A.o.D(s.f,0,v.length-1)
s.r=null
s.x7()},
$S:0}
C.emK.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+6}
C.ep9.prototype={
$1(d){return B.oF(new C.ep8(this.a,d),!1,0.82,0.95,0.45,!1,null)},
$S:138}
C.ep8.prototype={
$2(d,e){var w=null,v=x.p
return B.v(B.a([new B.C(E.agN,B.v(B.a([D.fkX,A.ao,B.d("Top 4 templates are free \xb7 lock icon means Slides Pro",w,w,w,w,w,w,B.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],v),A.F,w,A.e,A.j,0,A.p),w),B.D(B.ic(!0,w,e,A.y,D.eJx,new C.ep7(this.a,this.b),20,A.tn,w,A.ai,!1),1)],v),A.aj,w,A.e,A.j,0,A.p)},
$S:440}
C.ep7.prototype={
$2(d,e){var w=null,v=D.Gs[e],u=C.hyv(v),t=B.m(16),s=B.m(16),r=B.a([v.e,v.f],x.O),q=v.d,p=B.I(q.j(0.45),A.r,1),o=q.j(0.2),n=B.m(8),m=x.p
n=B.a([B.p(w,B.d(v.c,w,w,w,w,w,w,B.l(w,w,q,w,w,w,w,w,w,w,w,9,w,w,A.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.f,w,w,new B.o(o,w,w,n,w,w,A.n),w,w,w,w,A.fI,w,w,w)],m)
if(u)A.d.v(n,B.a([A.bp,B.p(w,D.eDJ,A.f,w,w,new B.o(A.dS.j(0.85),w,w,B.m(8),w,w,A.n),w,w,w,w,A.mZ,w,w,w)],m))
return B.aF(!1,A.a1,!0,w,B.aK(!1,t,!0,B.p(w,B.v(B.a([B.A(n,A.m,w,A.e,A.j,0,w,w),A.b3,B.d(v.b,w,w,w,w,w,w,B.l(w,w,v.r,w,w,w,w,w,w,w,w,14,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.d("5 slides",w,w,w,w,w,w,B.l(w,w,v.w.j(0.8),w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],m),A.F,w,A.e,A.j,0,A.p),A.f,w,w,new B.o(w,w,p,s,w,new B.a7(A.a3,A.a7,A.x,r,w,w),A.n),w,w,w,w,A.bm,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.ep6(this.a,u,this.b,v),w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.af)},
$S:77}
C.ep6.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=t.b?3:4
break
case 3:s=t.c
r=t.a.a
w=5
return B.b(C.cbJ(s,r.c,r.d),$async$$0)
case 5:if(!e||s.e==null){w=1
break}case 4:s=t.c
if(s.e!=null)B.a5(s,!1).N(t.d.a)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.epa.prototype={
$0(){var w=this.a
w.e=this.b.hA()
w.f=0
w.r=null
w.db=!0
A.d.a8(w.ax)
A.d.a8(w.ay)
w.x7()},
$S:0}
C.elp.prototype={
$0(){var w,v=this.a,u=v.gq1(),t=C.rf(4294967295,null,0,0,null,C.cC(),D.mp,"","","",D.dd),s=this.b
C.cbW(t,s,u)
w=v.gdq()
if(w!=null&&s!==D.C9){t.e=w.e
t.f=w.f}A.d.cn(v.e.r,v.f+1,t);++v.f
v.r=null},
$S:0}
C.emJ.prototype={
$0(){var w,v,u,t,s,r,q=this.b.ae()
q.n(0,"id",C.cC())
w=x.c.a(q.h(0,"elements"))
if(w!=null)for(v=J.aX(w),u=x.f;v.C();){t=v.gU(v)
if(u.b(t)){s=Date.now()
r=$.iX
$.iX=r+1
J.aG(t,"id",""+1000*s+"_"+r)}}v=this.a
A.d.cn(v.e.r,v.f+1,C.h3e(q));++v.f},
$S:0}
C.emH.prototype={
$0(){var w=this.a
A.d.cA(w.e.r,w.f)
w.f=A.o.D(w.f,0,w.e.r.length-1)
w.r=null},
$S:0}
C.epi.prototype={
$0(){var w,v=this.a,u=this.b,t=A.d.cA(v.e.r,u),s=this.c
A.d.cn(v.e.r,s,t)
w=v.f
if(w===u)v.f=s
else if(u<w&&s>=w)v.f=w-1
else if(u>w&&s<=w)v.f=w+1},
$S:0}
C.emD.prototype={
$0(){var w,v=this.a,u=this.b
A.d.bn(v.d,new C.emC(u))
w=v.e
w=w==null?null:w.a
if(w===u.a){v.e=null
v.db=!1}},
$S:0}
C.emC.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eph.prototype={
$0(){var w,v=this.b,u=A.a.i(this.c)
v.b=u.length===0?"Untitled Presentation":u
v.f=new B.S(Date.now(),0,!1)
u=this.a.e
w=u==null?null:u.a
if(w===v.a)u.b=v.b},
$S:0}
C.emt.prototype={
$0(){var w=this.a.r
return new B.ar(new B.bb(w,A.b2,A.aN),$.aw())},
$S:235}
C.en4.prototype={
$0(){return B.kh(!0,null,!0,!0,null,null,!1)},
$S:673}
C.er_.prototype={
$0(){var w=this.a
w.w=w.r=this.b
w.y=!1},
$S:0}
C.er0.prototype={
$1(d){var w,v,u=this.a
if(u.c==null||u.w!==this.b)return
w=this.c
u.arV(w).fF()
v=u.VM(w)
v.srY(B.h8(A.bu,v.a.a.length))},
$S:8}
C.eqp.prototype={
$0(){var w,v,u,t=this
if(t.b)t.a.w=null
w=t.a
v=w.r=t.c
if(v!=null){w.as=!0
u=w.WL(v)
if(u!=null&&u.b===D.cQ)w.VM(u).saV(0,u.r)}else w.w=null},
$S:0}
C.elq.prototype={
$0(){var w=C.cC(),v=this.a,u=C.en(A.bg,!1,v.gq1().e.l(),A.aC,"",4280640491,24,A.bk,A.a4,"",0.22,w,null,"","",0,!1,"",0,D.be,4280172719,2,"Tap to edit text",0,0,"",D.cg,D.cQ,0.7,0.15,0.2)
A.d.K(v.gdq().z,u)
v.r=u.a},
$S:0}
C.eln.prototype={
$0(){var w=C.cC(),v=this.a,u=C.en(A.bg,!1,4279310375,A.aC,"",v.gq1().c.j(0.25).l(),24,A.bk,A.a4,"",0.25,w,null,"","",0,!1,"",0,this.b,v.gq1().c.l(),2,"",0,0,"",D.cg,D.f_,0.25,0.3,0.3)
A.d.K(v.gdq().z,u)
v.r=u.a},
$S:0}
C.eld.prototype={
$0(){var w=C.en(A.bg,!1,4279310375,A.aC,"",4280640491,24,A.bk,A.a4,"",0.55,C.cC(),this.b,"","",0,!1,"",0,D.be,4280172719,2,"",0,0,"",D.cg,D.lh,0.6,0.2,0.18),v=this.a
A.d.K(v.gdq().z,w)
v.r=w.a},
$S:0}
C.ela.prototype={
$1(d){var w,v,u,t,s,r=null,q=B.a([D.bU0],x.p)
for(w=J.aX(this.a);w.C();){v=w.gU(w)
u=A.a.i(v.b)
if(u.length===0)u="My Bio"
t=v.gaiq().length
s=v.at==="published"&&v.Q.length!==0?" \xb7 "+v.as:""
q.push(B.dN(!1,r,r,r,!0,r,r,r,!0,r,D.bF1,r,r,r,r,new C.el9(d,v),!1,r,r,r,r,r,new B.x(""+t+" links"+s,r,r,r,r,r,r,A.a2,r,1,r,r),r,new B.x(u,r,r,r,r,r,r,r,r,r,r,r),r,r,r))}return B.bn(!0,B.cB(q,r,r,r,r,A.ai,!0),!0,!1,A.ag,!0,!0)},
$S:27}
C.el9.prototype={
$0(){B.a5(this.a,!1).N(this.b)
return null},
$S:0}
C.elb.prototype={
$0(){var w=A.k.D(0.23131034482758622,0.12,0.5),v=C.cC(),u=this.b,t=A.R.ao(u.ae(),null),s=C.en(A.bg,!1,4279310375,A.aC,u.b,4280640491,24,A.bk,A.a4,"",0.86,v,null,"","",0,!1,"",0,D.be,4280172719,2,t,0,0,"",D.cg,D.a3W,w,0.5-w/2,0.07)
t=this.a
A.d.K(t.gdq().z,s)
t.r=s.a},
$S:0}
C.emF.prototype={
$1(d){return d.a===this.a&&d.db==="ngmy_quote_logo"},
$S:z+4}
C.emG.prototype={
$0(){var w,v=this.a,u=this.b
A.d.bn(v.gdq().z,new C.emE(u))
v.w=v.r=null
w=v.ch.W(0,u)
if(w!=null){w.S$=$.aw()
w.P$=0}v=v.CW.W(0,u)
if(v!=null)v.q()},
$S:0}
C.emE.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.elS.prototype={
$0(){var w,v,u,t=this,s=t.b
if(s!=null){w=s.b
if(w===D.cQ)s.Q=t.c.l()
else if(w===D.f_){s.ay=t.c.l()
w=t.d
if(w!=null)s.ch=w.l()}return}v=new C.elT(t.c,t.d)
if(t.a.Q)for(s=t.e.r,w=s.length,u=0;u<s.length;s.length===w||(0,B.L)(s),++u)v.$1(s[u])
else{s=t.f
if(s!=null)v.$1(s)}},
$S:0}
C.elT.prototype={
$1(d){var w
d.e=this.a.l()
w=this.b
d.f=w==null?null:w.l()},
$S:z+1}
C.elX.prototype={
$0(){var w,v,u,t,s=this.a,r=s.e
r.toString
w=this.b
v=new C.elY(w)
if(s.Q){r.c=w.a
for(s=r.r,r=s.length,u=0;u<s.length;s.length===r||(0,B.L)(s),++u)v.$1(s[u])}else{t=s.gdq()
if(t!=null)v.$1(t)}},
$S:0}
C.elY.prototype={
$1(d){var w=this.a
d.e=w.f.l()
w=w.r
d.f=w==null?null:w.l()},
$S:z+1}
C.elV.prototype={
$0(){var w,v,u,t=this,s=t.b
if(s!=null&&s.b===D.cQ){s.Q=t.c
return}w=new C.elW(t.c)
if(t.a.Q)for(s=t.d.r,v=s.length,u=0;u<s.length;s.length===v||(0,B.L)(s),++u)w.$1(s[u])
else{s=t.e
if(s!=null)w.$1(s)}},
$S:0}
C.elW.prototype={
$1(d){var w,v,u
for(w=A.d.gag(d.z),v=new B.fx(w,new C.elU()),u=this.a;v.C();)w.gU(0).Q=u},
$S:z+1}
C.elU.prototype={
$1(d){return d.b===D.cQ},
$S:z+4}
C.elR.prototype={
$0(){return C.cbW(this.b,this.c,this.a.gq1())},
$S:0}
C.eoU.prototype={
$0(){return A.d.cn(this.a.d,0,this.b)},
$S:0}
C.er8.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.er9.prototype={
$1(d){return d.w===this.b&&d.a!==this.a.a.a},
$S:z+2}
C.era.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.erb.prototype={
$0(){var w,v=this.a,u=v.c,t=this.b,s=t.d
if(u)A.d.cn(s,0,v.b)
else{w=A.d.bc(s,new C.er7(v))
if(w>=0)t.d[w]=v.b}if(v.a.gRw()){u=v.b
u.Q=v.a.Q
u.z=!0}if(this.c===!0){t.e=v.b.hA()
t.f=0
t.r=null
t.db=!1
A.d.a8(t.ax)
A.d.a8(t.ay)
t.x7()
t.Jy()}},
$S:0}
C.er7.prototype={
$1(d){return d.a===this.a.b.a},
$S:z+2}
C.eqF.prototype={
$1(d){var w=this,v=null,u=w.a,t=u.aap(),s=w.b,r=u.aaq(A.f6,A.kK,"Copy filled names, date, mahari, witnesses, and signatures into "+s+".","Transfer details"),q=B.m(18),p=B.a([A.c.j(0.07),A.c.j(0.03)],x.O),o=B.I(A.c.j(0.08),A.r,1),n=x.p
p=B.a([t,A.P,r,A.bv,B.p(v,B.A(B.a([B.D(u.aT5(w.c,A.ak),1),new B.C(A.fo,B.p(v,D.bF7,A.f,v,v,new B.o(A.f6.j(0.18),v,v,v,v,v,A.a6),v,34,v,v,v,v,v,34),v),B.D(u.aT5(s,A.f6),1)],n),A.m,v,A.e,A.j,0,v,v),A.f,v,v,new B.o(v,v,o,q,v,new B.a7(A.ax,A.aD,A.x,p,v,v),A.n),v,v,v,v,A.bB,v,v,v),A.bv,u.aT8(A.f6,d,D.bBf,!0,"Make a fresh "+s+" and fill it automatically","Create new & transfer","new")],n)
t=w.d
if(t>0)A.d.v(p,B.a([A.S,u.bUC(A.aW,d,A.tA,t===1?"Update your saved "+s:"Choose among "+t+" saved documents","Use existing","existing")],n))
p.push(A.ay)
p.push(u.aT6(d,"Not now"))
return new C.Je(B.v(p,A.aj,v,A.e,A.Q,0,A.p),v)},
$S:z+9}
C.eqE.prototype={
$1(d){var w=null,v=this.a,u=this.c
return new C.Je(B.v(B.a([v.aap(),A.P,v.aaq(A.aW,D.bAV,"Pick which saved document should receive the details.","Choose "+this.b),A.aO,new B.cU(new B.aY(0,1/0,0,B.aI(d,A.bS,x.w).w.a.b*0.42),B.hF(w,new C.eqC(v,u,d),u.length,w,w,A.ai,new C.eqD(),!0),w),A.ay,v.aT6(d,"Cancel")],x.p),A.aj,w,A.e,A.Q,0,A.p),w)},
$S:z+9}
C.eqD.prototype={
$2(d,e){return A.S},
$S:36}
C.eqC.prototype={
$2(d,e){var w=null,v=this.b[e],u=B.m(16),t=A.c.j(0.05),s=B.m(16),r=B.I(A.c.j(0.08),A.r,1),q=x.p
return B.aF(!1,A.a1,!0,w,B.aK(!1,u,!0,B.p(w,B.A(B.a([B.p(w,D.alF,A.f,w,w,new B.o(w,w,w,B.m(12),w,D.bR3,A.n),w,42,w,w,w,w,w,42),A.bf,B.D(B.v(B.a([B.d(v.b,w,1,A.a2,w,w,w,A.nh,w,w,w),A.cZ,B.d("Updated "+this.a.Pa(v.f),w,w,w,w,w,w,B.l(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,12,w,w,A.a4,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],q),A.F,w,A.e,A.j,0,A.p),1),B.W(A.eu,A.c.j(0.35),w,w,w,w)],q),A.m,w,A.e,A.j,0,w,w),A.f,w,w,new B.o(t,w,r,s,w,w,A.n),w,w,w,w,A.bB,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eqB(this.c,v),w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.af)},
$S:77}
C.eqB.prototype={
$0(){B.a5(this.a,!1).N(this.b.a)
return null},
$S:0}
C.eqy.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.aap()
t=t.aaq(A.aI,A.tJ,"Names and shared details from \u201c"+this.b+"\u201d will fill matching spots on \u201c"+this.c+"\u201d.","Replace matching fields?")
w=A.c.j(0.14)
v=x.p
return new C.Je(B.v(B.a([s,A.P,t,A.bv,B.A(B.a([B.D(B.dT(A.a7f,new C.eqw(d),B.de(u,u,u,u,u,u,u,u,u,A.c,u,u,A.cf,u,new B.b7(B.m(14),A.Y),new B.az(w,1,A.r,-1),u,u,u,u)),1),A.aw,B.D(B.bJ(D.f7r,new C.eqx(d),B.bk(A.f6,u,u,u,A.c,u,A.cf,u,new B.b7(B.m(14),A.Y),u,u,u)),1)],v),A.m,u,A.e,A.j,0,u,u)],v),A.aj,u,A.e,A.Q,0,A.p),u)},
$S:z+9}
C.eqw.prototype={
$0(){B.a5(this.a,!1).N(!1)
return null},
$S:0}
C.eqx.prototype={
$0(){B.a5(this.a,!1).N(!0)
return null},
$S:0}
C.eqA.prototype={
$1(d){var w=this,v=null,u=w.a,t=u.aap(),s=w.b,r=u.aaq(A.aU,A.ee,"Everything that could be matched is now on "+s+".","Transfer complete"),q=x.p,p=B.A(B.a([B.D(u.atf("Names",""+w.c),1),A.ab,B.D(u.atf("Fields",""+w.d),1),A.ab,B.D(u.atf("Signatures",""+w.e),1)],q),A.m,v,A.e,A.j,0,v,v),o=B.bk(A.bi,v,v,v,A.c,v,A.xc,v,new B.b7(B.m(14),A.Y),v,v,v)
return new C.Je(B.v(B.a([t,A.P,r,A.aO,p,A.bv,B.bJ(B.d("Open "+s,v,v,v,v,v,v,A.nf,v,v,v),new C.eqz(d),o),A.S,u.aT7(d,"Stay here",!1)],q),A.aj,v,A.e,A.Q,0,A.p),v)},
$S:z+9}
C.eqz.prototype={
$0(){B.a5(this.a,!1).N(!0)
return null},
$S:0}
C.eny.prototype={
$0(){B.a5(this.a,!1).N(this.b)
return null},
$S:0}
C.enx.prototype={
$0(){B.a5(this.a,!1).N(this.b)
return null},
$S:0}
C.eqq.prototype={
$1(d){return d.b===D.cQ},
$S:z+4}
C.eqZ.prototype={
$1(d){var w=this.a,v=this.b
return new C.ZC(A.d.dM(w.d,new C.eqX(v),new C.eqY(v)).hA(),w.f,null)},
$S:z+84}
C.eqX.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eqY.prototype={
$0(){return this.a},
$S:z+85}
C.eli.prototype={
$1(d){var w=null,v=this.b,u=""+v,t=v===1?"":"s"
t=B.a([new B.C(A.bB,B.d("Import "+this.a.c+" ("+u+" page"+t+")",w,w,w,w,w,w,A.hn,w,w,w),w),B.dN(!1,w,w,w,!0,w,w,w,!0,w,D.bGS,w,w,w,w,new C.elg(d),!1,w,w,w,w,w,B.d("Scroll through all "+u+" pages inside the slide",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,D.f5w,w,w,w)],x.p)
if(v>1)t.push(B.dN(!1,w,w,w,!0,w,w,w,!0,w,D.bI0,w,w,w,w,new C.elh(d),!1,w,w,w,w,w,D.fqO,w,B.d("One slide per page ("+u+" slides)",w,w,w,w,w,w,A.dl,w,w,w),w,w,w))
return B.bn(!0,B.v(t,A.m,w,A.e,A.Q,0,A.p),!0,!1,A.ag,!0,!0)},
$S:27}
C.elg.prototype={
$0(){B.a5(this.a,!1).N("scroll")
return null},
$S:0}
C.elh.prototype={
$0(){B.a5(this.a,!1).N("split")
return null},
$S:0}
C.elj.prototype={
$0(){var w=this.b,v=w.c,u=C.en(A.bg,!1,4279310375,A.aC,v,4280640491,24,A.bk,A.a4,"",0.84,C.cC(),w.b,"","",0,!1,"",0,D.be,4280172719,2,v,0,0,"",D.cg,D.QX,0.88,0.06,0.08)
v=this.a
A.d.K(v.gdq().z,u)
v.r=u.a},
$S:0}
C.elk.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this.a,i=j.f+1
for(w=this.b,v=this.c,u=v.b,t=w,v=v.c,s=x.u,r=v+" \u2014 page ",q=1;q<=w;++q){p=Date.now()
o=$.iX
$.iX=o+1
n=""+q
m=B.a([],s)
l=Date.now()
k=$.iX
$.iX=k+1
m.push(new C.eG(""+1000*l+"_"+k,D.QX,0.04,0.06,0.92,0.88,v,24,A.a4,A.bk,A.aC,4279310375,A.bg,u,D.be,4280640491,4280172719,2,0,!1,n+" / "+t,q,D.cg,0,"","","","","",!1,0))
A.d.cn(j.e.r,i+q-1,new C.lA(""+1000*p+"_"+o,r+n,"",D.pS,4294967295,null,D.dd,0,"",0,m))}j.f=i
j.r=null},
$S:0}
C.elo.prototype={
$0(){var w,v=C.cC(),u=this.a,t=u.e
t=(t==null?null:C.kr(t.w))===!0?"marriage_sign_placed":"Signature"
w=C.en(A.bg,!1,4279310375,A.aC,t,4280640491,24,A.bk,A.a4,"",0.22,v,this.b.a,"","",0,!1,"",0,D.be,4280172719,2,"",0,0,"",D.cg,D.kP,0.35,0.55,0.62)
A.d.K(u.gdq().z,w)
u.r=w.a},
$S:0}
C.elf.prototype={
$0(){var w,v,u,t,s,r,q,p=this.a,o=this.b
p.b0A(o)
w=C.cC()
v=this.c
u=v.c
t=v.d
s=v.e
r=v.f
q=C.en(A.bg,!1,4279310375,A.aC,"marriage_sign_placed_"+A.a.e9(v.db,"marriage_sign_",""),4280640491,24,A.bk,A.a4,"",r,w,o.a,"","",0,!1,"",0,D.be,4280172719,2,"",0,0,"",D.cg,D.kP,s,u,t)
A.d.K(p.gdq().z,q)
A.d.bn(p.gdq().z,new C.ele(v))
p.r=null
p=p.e
if((p==null?null:p.w)==="hati_kiapo_uongozi"&&A.a.t(v.db,"rais")){p.toString
C.hXg(p)}},
$S:0}
C.ele.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.epf.prototype={
$0(){var w=this.a,v=this.b
w.b0A(v)
this.c.at=v.a
w.r=null},
$S:0}
C.er6.prototype={
$0(){var w,v,u,t,s,r,q=4279673674,p=1483594
for(w=this.b.z,v=w.length,u=this.c,t=0;t<v;++t){s=w[t]
r=s.db
if(r==="marriage_locked_nim_akuna_deni"){s.r="AKUNA DENI"
s.Q=u?q:p}else if(r==="marriage_locked_nim_akuna_box")s.ch=u?q:p
else if(r==="marriage_locked_nim_akuna_tick"){s.r="\u2713"
s.Q=u?q:p}}this.a.r=null},
$S:0}
C.enB.prototype={
$0(){var w,v,u,t,s,r=this.b
A.d.bn(r.z,new C.enA())
for(r=r.z,w=r.length,v=this.c+0.001,u=0;u<w;++u){t=r[u]
s=t.d
if(s>v)t.d=s-0.043}this.a.r=null},
$S:0}
C.enA.prototype={
$1(d){var w=d.db
return w==="marriage_locked_nim_n_4"||w==="marriage_locked_nim_ul_4"||A.a.a0(w,"marriage_field_mahari_4:")},
$S:z+4}
C.em0.prototype={
$0(){var w=this.b
w.at=this.c
w.db="__kiapo_video__"
w=this.a
w.r=null
w.db=!1},
$S:0}
C.em1.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.te()},
$S:8}
C.elc.prototype={
$0(){var w=C.en(A.bg,!1,4279310375,A.aC,"HD Photo",4280640491,24,A.bk,A.a4,"",0.8,C.cC(),this.b,"","",0,!1,"",0,D.be,4280172719,2,"",0,0,"",D.cg,D.lh,0.8,0.1,0.1),v=this.a
A.d.K(v.gdq().z,w)
v.r=w.a},
$S:0}
C.en2.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.ell.prototype={
$0(){var w=this.a,v=this.b
A.d.K(w.gdq().z,v)
w.r=v.a},
$S:0}
C.elu.prototype={
$0(){return this.a.cx+=0.785398},
$S:0}
C.elv.prototype={
$0(){var w=this.b.hA(),v=C.cC(),u=A.k.D(w.c+0.04,0,0.92),t=A.k.D(w.d+0.04,0,0.92),s=w.e,r=w.f,q=w.r,p=w.w,o=w.x,n=w.y,m=w.z,l=w.Q,k=w.as,j=w.at,i=w.ay,h=w.ch,g=w.cx,f=C.en(k,w.cy,l,m,w.db,i,p,n,o,"",r,v,j,"","",w.dx,!1,"",g,w.ax,h,w.CW,q,w.fr,0,"",w.dy,w.b,s,u,t)
t=this.a
A.d.K(t.gdq().z,f)
t.r=f.a},
$S:0}
C.elw.prototype={
$0(){var w=this.a.gdq().z,v=this.b,u=A.d.bc(w,new C.elt(v))
if(u>=0&&u<w.length-1){A.d.cA(w,u)
A.d.cn(w,u+1,v)}},
$S:0}
C.elt.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.elH.prototype={
$0(){var w=this.a.gdq().z,v=this.b,u=A.d.bc(w,new C.els(v))
if(u>0){A.d.cA(w,u)
A.d.cn(w,u-1,v)}},
$S:0}
C.els.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.elK.prototype={
$0(){return this.a.as=A.bg},
$S:0}
C.elL.prototype={
$0(){return this.a.as=A.L},
$S:0}
C.elM.prototype={
$0(){return this.a.as=A.dK},
$S:0}
C.elN.prototype={
$0(){return this.a.cx+=3.14159},
$S:0}
C.elO.prototype={
$0(){return this.a.cx-=3.14159},
$S:0}
C.elP.prototype={
$1(d){return d.b===D.cQ},
$S:z+4}
C.elQ.prototype={
$1(d){return d.length!==0},
$S:3}
C.elx.prototype={
$0(){var w=this.a,v=w.gdq().z,u=C.cC()
A.d.K(v,C.Cs(w.gq1().c.j(0.18).l(),0.1,u,D.be,0,2,1,0,0))
u=w.gdq().z
v=C.cC()
A.d.K(u,C.iR(A.bg,!1,w.gq1().d.l(),A.aC,18,A.bk,A.I,0.07,v,"Document Header",0,D.dd,0.9,0.05,0.02))},
$S:0}
C.ely.prototype={
$0(){var w,v=this.a,u=v.gdq().z,t=C.cC()
A.d.K(u,C.Cs(v.gq1().c.j(0.12).l(),0.1,t,D.be,0,2,1,0,0.9))
t=v.gdq().z
u=C.cC()
w=C.bAZ()
A.d.K(t,C.iR(A.L,!1,v.gq1().e.l(),A.aC,12,A.bk,A.a4,0.06,u,"Footer \xb7 "+w,0,D.dd,0.9,0.05,0.92))},
$S:0}
C.elz.prototype={
$0(){A.d.K(this.a.gdq().z,C.Cs(1727914055,0.12,C.cC(),D.be,4294626325,2,0.76,0.12,0.35))},
$S:0}
C.elA.prototype={
$0(){var w=4279310375
A.d.K(this.a.gdq().z,C.Cs(w,0.08,C.cC(),D.be,w,2,0.5,0.2,0.4))},
$S:0}
C.elB.prototype={
$0(){var w=this.a,v=w.gdq().z,u=C.cC()
A.d.K(v,C.Cs(w.gq1().c.j(0.35).l(),0.12,u,D.Ca,4280640491,2,0.2,0.15,0.55))
A.d.K(w.gdq().z,C.iR(A.bg,!1,4279310375,A.aC,18,A.bk,A.a4,0.15,C.cC(),"Important note",0,D.pT,0.5,0.38,0.52))},
$S:0}
C.elC.prototype={
$0(){var w=this.a
A.d.K(w.gdq().z,C.Cs(4294507260,0.78,C.cC(),D.be,4291548641,1.5,0.84,0.08,0.1))
A.d.K(w.gdq().z,C.iR(A.bg,!1,4279179050,A.aC,16,A.bk,A.a4,0.7,C.cC(),"MEMO\n\nTo:\nFrom:\nDate: "+C.bAZ()+"\n\nSubject:\n\nBody text\u2026",0,D.dd,0.76,0.12,0.14))},
$S:0}
C.elD.prototype={
$0(){var w=this.a
A.d.K(w.gdq().z,C.Cs(4294897802,0.28,C.cC(),D.be,4294626325,2,0.3,0.62,0.12))
A.d.K(w.gdq().z,C.iR(A.bg,!1,4285611794,A.aC,15,A.bk,A.a4,0.24,C.cC(),"Sticky note",0,D.aEe,0.26,0.64,0.14))},
$S:0}
C.elE.prototype={
$0(){var w=4280640491,v=this.a
A.d.K(v.gdq().z,C.Cs(4293060848,0.04,C.cC(),D.be,4291548641,2,0.8,0.1,0.48))
A.d.K(v.gdq().z,C.Cs(w,0.04,C.cC(),D.be,w,2,0.55,0.1,0.48))},
$S:0}
C.elF.prototype={
$0(){var w=4279310375,v=this.a
A.d.K(v.gdq().z,C.iR(A.bg,!1,w,A.aC,18,A.bk,A.a4,0.62,C.cC(),"Left column\n\n\u2022 Point A\n\u2022 Point B",0,D.Ho,0.42,0.06,0.18))
A.d.K(v.gdq().z,C.iR(A.bg,!1,w,A.aC,18,A.bk,A.a4,0.62,C.cC(),"Right column\n\n\u2022 Point C\n\u2022 Point D",200,D.u_,0.42,0.52,0.18))},
$S:0}
C.elG.prototype={
$0(){var w=4279310375,v=this.a
A.d.K(v.gdq().z,C.Cs(858088427,0.62,C.cC(),D.be,4280640491,2,0.42,0.05,0.18))
A.d.K(v.gdq().z,C.Cs(856004201,0.62,C.cC(),D.be,4278556265,2,0.42,0.53,0.18))
A.d.K(v.gdq().z,C.iR(A.bg,!1,w,A.aC,20,A.bk,A.I,0.1,C.cC(),"Option A",0,D.dd,0.36,0.08,0.2))
A.d.K(v.gdq().z,C.iR(A.bg,!1,w,A.aC,20,A.bk,A.I,0.1,C.cC(),"Option B",0,D.dd,0.36,0.56,0.2))},
$S:0}
C.elI.prototype={
$0(){var w=4279310375,v=this.a
A.d.K(v.gdq().z,C.Cs(4294967295,0.36,C.cC(),D.be,w,2,0.24,0.38,0.28))
A.d.K(v.gdq().z,C.iR(A.L,!1,w,A.aC,14,A.bk,A.a4,0.12,C.cC(),"[ QR CODE ]",0,D.dd,0.24,0.38,0.4))},
$S:0}
C.elJ.prototype={
$0(){return C.cbW(this.b,D.QY,this.a.gq1())},
$S:0}
C.en1.prototype={
$1(d){var w=this.b,v=w.dy,u=!D.a5B.t(0,d),t=this.a
return t.b5r(d,v===d,A.aZ,this.c,new C.en0(t,u,d,w),u)},
$S:z+25}
C.en0.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p=t.b
if(p){w=3
break}else e=p
w=4
break
case 3:w=5
return B.b(t.a.nR(),$async$$0)
case 5:e=!e
case 4:if(e){w=1
break}s=t.a
r=s.c
if(r==null){w=1
break}q=t.c
C.bBM(r,new C.en_(s,t.d,q),q)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.en_.prototype={
$0(){return this.a.d1(new C.emZ(this.b,this.c))},
$S:0}
C.emZ.prototype={
$0(){return this.a.dy=this.b},
$S:0}
C.elm.prototype={
$0(){var w,v=this.a,u=v.gq1(),t=C.rf(4294967295,null,0,0,null,C.cC(),D.mp,"","","",D.dd),s=this.b
C.cbW(t,s,u)
w=v.gdq()
if(w!=null&&s!==D.C9){t.e=w.e
t.f=w.f}A.d.cn(v.e.r,v.f+1,t);++v.f
v.r=null},
$S:0}
C.em4.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.a
p=q.c
if(p==null){w=1
break}s=q.a
r=s.c
s=s.d
w=3
return B.b(C.i2e(p,q.d,s,new C.em3(q),r),$async$$0)
case 3:w=q.c!=null?4:5
break
case 4:w=6
return B.b(q.te(),$async$$0)
case 6:case 5:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.em3.prototype={
$1(d){return this.bi2(d)},
bi2(d){var w=0,v=B.j(x.H),u=this,t
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.a
t.m(new C.em2(t,d))
w=2
return B.b(t.te(),$async$$1)
case 2:return B.h(null,v)}})
return B.i($async$$1,v)},
$S:z+87}
C.em2.prototype={
$0(){var w,v,u
for(w=J.aX(this.b),v=this.a;w.C();){u=w.gU(w)
A.d.cn(v.d,0,u)}},
$S:0}
C.em5.prototype={
$0(){return this.a.bFP()},
$S:0}
C.em6.prototype={
$0(){return this.a.aOv("Class Presentation",!0)},
$S:0}
C.em7.prototype={
$1(d){return this.a.bGL(d.b,this.b,d.a)},
$S:z+88}
C.emI.prototype={
$0(){var w,v=this.a
v.as=!1
w=v.c
w.toString
if(B.aI(w,A.bS,x.w).w.a.a<900)v.w=v.r=null},
$S:0}
C.eoT.prototype={
$1(d){return new B.C(new B.Q(0,0,0,B.aI(d,A.eD,x.w).w.f.d),new B.e2(new C.eoS(this.a,this.b),null),null)},
$S:58}
C.eoS.prototype={
$2(d,e){return B.oF(new C.eoR(this.a,this.b,d,e),!1,0.52,0.9,0.34,!1,null)},
$S:592}
C.eoR.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u?A.aA:A.c,s=B.I(u?A.bF:A.aL,A.r,1),r=B.p(v,v,A.f,v,v,new B.o(A.b5,v,v,B.m(99),v,v,A.n),v,4,v,v,v,v,v,40),q=x.p,p=w.a
return B.p(v,B.v(B.a([A.S,r,new B.C(A.age,B.A(B.a([B.d("Format",v,v,v,v,v,v,B.l(v,v,u?A.c:A.M,v,v,v,v,v,v,v,v,17,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.b3,B.bK(!1,A.zh,v,v,!0,v,v,new C.eoP(w.c),v,v)],q),A.m,v,A.e,A.j,0,v,v),v),B.D(B.cB(B.a([p.aR8(u,!0,!0,new C.eoQ(p,w.d))],q),e,D.bnP,v,v,A.ai,!1),1)],q),A.m,v,A.e,A.j,0,A.p),A.f,v,v,new B.o(t,v,s,A.kw,v,v,A.n),v,v,v,v,v,v,v,v)},
$S:110}
C.eoP.prototype={
$0(){B.a5(this.a,!1).N(null)
return null},
$S:0}
C.eoQ.prototype={
$0(){this.b.$1(new C.eoN())
var w=this.a
if(w.c!=null)w.m(new C.eoO())},
$S:0}
C.eoN.prototype={
$0(){},
$S:0}
C.eoO.prototype={
$0(){},
$S:0}
C.eqr.prototype={
$3(d,e,f){return A.bH},
$C:"$3",
$R:3,
$S:90}
C.eqs.prototype={
$4(d,e,f,g){var w=A.cq.av(0,e.gp(0))
return B.db(B.e9(A.A,new C.axt(this.a,null),0.94+w*0.06,null,null),w)},
$S:439}
C.eqt.prototype={
$3(d,e,f){return A.bH},
$C:"$3",
$R:3,
$S:90}
C.equ.prototype={
$4(d,e,f,g){var w=A.cq.av(0,e.gp(0))
return B.db(B.e9(A.A,new C.bbd(this.a.b,null),0.94+w*0.06,null,null),w)},
$S:439}
C.eqv.prototype={
$0(){return A.d.cn(this.a.d,0,C.V4(this.b))},
$S:0}
C.elr.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a.fy
o===$&&B.c()
o=o.x
o===$&&B.c()
w=A.dA.av(0,o)
o=B.m(22)
v=B.m(22)
u=this.b
t=x.O
s=u?B.a([A.c.j(0.1+w*0.04),A.aA.j(0.72)],t):B.a([A.c.j(0.88),A.pd.j(0.75)],t)
r=B.I(A.b1.j(0.28+w*0.22),A.r,1.3)
q=w*0.2
t=B.a([A.b1.j(0.35+q),A.c8.j(0.18),A.K],t)
q=B.I(A.b1.j(0.45+q),A.r,1)
t=B.p(p,B.W(A0.ZE,u?A.ad:A.M,p,p,p,28),A.f,p,p,new B.o(p,p,q,p,p,new B.bR(A.A,0.5,A.x,p,0,t,p,p),A.a6),p,58,p,p,p,p,p,58)
q=B.d("No presentations yet",p,p,p,p,p,p,B.l(p,p,u?A.c:A.M,p,p,p,p,p,p,p,p,p,p,p,A.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
return B.bw(o,B.tJ(A.ft,B.p(p,B.v(B.a([t,A.ay,q,A.ao,B.d("Open Blank or Class Template to start \u2014 nothing is saved until you edit.",p,p,p,p,p,p,B.l(p,p,u?A.az:A.ak,p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),A.L,p,p)],x.p),A.m,p,A.e,A.j,0,A.p),A.f,p,p,new B.o(p,p,r,v,p,new B.a7(A.ax,A.aD,A.x,s,p,p),A.n),p,p,p,p,A.ez,p,p,1/0),14,!1),A.aq)},
$S:283}
C.emw.prototype={
$1(d){return A.a.i(d)},
$S:13}
C.emx.prototype={
$1(d){return d.length!==0},
$S:3}
C.emy.prototype={
$1(d){var w
if(A.a.a0(d,"Updated"))w=A.kg
else{w=B.af("^\\d+ slides?$",!0,!1,!1,!1)
w=w.b.test(d)?A.a_9:A.B0}return w},
$S:677}
C.emB.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.a,j=k.fy
j===$&&B.c()
j=j.x
j===$&&B.c()
w=A.dA.av(0,A.k.G(j+m.b*0.12,1))
j=B.m(20)
v=m.c
u=B.m(20)
t=m.d
s=x.O
s=t?B.a([A.c.j(0.1+w*0.04),A.aA.j(0.78)],s):B.a([A.c.j(0.92),A.mG.j(0.82)],s)
r=m.e
q=A.d.gL(r)
p=t?0.34:0.26
p=B.I(q.j(p+w*0.22),A.r,1.25)
q=B.m(10)
q=B.p(l,B.W(C.kr(v.w)?A.vh:A.pG,A.c,l,l,l,22),A.f,l,l,new B.o(l,l,l,q,l,new B.a7(A.a3,A.a7,A.x,r,l,l),A.n),l,36,l,l,l,l,l,52)
o=v.b
o=B.d(o.toUpperCase(),l,l,l,l,l,l,B.l(l,l,t?A.c:A.M,l,l,l,l,l,l,l,l,l,l,l,A.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
n=v.w
if(n==="marriage_agreement")n="Hati ya Kuhowesha \u2022 Updated "+k.Pa(v.f)
else if(n==="hati_kuhowa")n="Hati ya Kuhowa \u2022 Updated "+k.Pa(v.f)
else if(n==="hati_kuhoweya")n="Hati ya Kuhoweya \u2022 Updated "+k.Pa(v.f)
else if(n==="hati_kiapo_uongozi"){n=v.x
if(A.a.i(n==null?"":n).length===0)n="Civic Registry"
n="Kiapo cha Uongozi \u2022 "+B.t(n)+" \u2022 Updated "+k.Pa(v.f)}else n=""+v.r.length+" slides \u2022 Updated "+k.Pa(v.f)
r=k.bGJ(n,A.d.gL(r),t)
return B.p(l,B.bw(j,new B.a6Z(B.aF(!1,A.a1,!0,l,B.aK(!1,l,!0,B.p(l,B.dN(!1,A.Lv,l,l,!0,l,l,l,!0,l,q,l,l,l,l,l,!1,l,l,l,l,l,r,l,o,l,B.aH(l,l,l,l,B.W(A.nN,t?A.az:A.bI,l,l,l,l),l,l,l,new C.emz(k,v,t),l,l,l,l,"Project options",l),l),A.f,l,l,new B.o(l,l,p,u,l,new B.a7(A.ax,A.aD,A.x,s,l,l),A.n),l,l,l,l,l,l,l,l),l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.emA(k,v),l,l,l,l,l,l,l),A.f,A.K,0,l,l,l,l,l,A.af),l),A.aq),A.f,l,l,l,l,l,l,A.dc,l,l,l,l)},
$S:95}
C.emA.prototype={
$0(){return this.a.adN(this.b)},
$S:0}
C.emz.prototype={
$0(){return this.a.Au(this.b,this.c)},
$S:0}
C.eo1.prototype={
$0(){var w=this.a
w.b46()
w.m(new C.eo0())},
$S:0}
C.eo0.prototype={
$0(){},
$S:0}
C.eo2.prototype={
$1(d){return this.a.ahO(this.b.a,d)},
$S:2}
C.eo3.prototype={
$0(){this.a.d1(new C.eo_(this.b))},
$S:0}
C.eo_.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.O)?A.cs:A.O},
$S:0}
C.eo4.prototype={
$0(){this.a.d1(new C.enZ(this.b))},
$S:0}
C.enZ.prototype={
$0(){var w=this.a
return w.y=w.y===A.cD?A.bk:A.cD},
$S:0}
C.eo5.prototype={
$0(){this.a.d1(new C.enY(this.b))},
$S:0}
C.enY.prototype={
$0(){var w=this.a,v=w.z
return w.z=1===v.a?A.aC:A.mu},
$S:0}
C.eo6.prototype={
$0(){this.a.d1(new C.enX(this.b))},
$S:0}
C.enX.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
C.eo7.prototype={
$0(){var w=this.a
w.d1(new C.enW(w,this.b))},
$S:0}
C.enW.prototype={
$0(){var w=this.b
return w.as=this.a.c0b(w.as)},
$S:0}
C.eo8.prototype={
$0(){return this.a.d1(new C.enV(this.b))},
$S:0}
C.enV.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w+2,10,96)},
$S:0}
C.eo9.prototype={
$0(){return this.a.d1(new C.enU(this.b))},
$S:0}
C.enU.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w-2,10,96)},
$S:0}
C.enN.prototype={
$0(){return this.a.a18(this.b.a)},
$S:0}
C.enO.prototype={
$0(){this.a.ZG()
return null},
$S:0}
C.enP.prototype={
$0(){var w=this.a,v=w.c
v.toString
if(B.aI(v,A.bS,x.w).w.a.a<900)w.ae5()
else w.m(new C.enM(w))},
$S:0}
C.enM.prototype={
$0(){return this.a.as=!0},
$S:0}
C.enQ.prototype={
$0(){this.a.d1(new C.enL(this.b))},
$S:0}
C.enL.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.O)?A.cs:A.O},
$S:0}
C.enR.prototype={
$0(){return this.a.d1(new C.enK(this.b))},
$S:0}
C.enK.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w+2,10,96)},
$S:0}
C.enS.prototype={
$0(){return this.a.d1(new C.enJ(this.b))},
$S:0}
C.enJ.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w-2,10,96)},
$S:0}
C.enT.prototype={
$0(){return this.a.aye(null)},
$S:0}
C.emV.prototype={
$0(){this.a.D7()
return null},
$S:0}
C.emW.prototype={
$0(){this.a.a8Z()
return null},
$S:0}
C.emY.prototype={
$1(d){return this.bi3(d)},
bi3(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
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
return B.b(t.a.Jp(),$async$$1)
case 10:w=4
break
case 6:s=t.a
r=s.e
if(r==null){w=1
break}q=s.c
q.toString
w=11
return B.b(B.bW(A.aA,null,new C.emQ(r),q,!0,!0,!1,null,!1,!1,x.S),$async$$1)
case 11:p=f
if(p!=null)s.d1(new C.emR(r,p))
w=4
break
case 7:s=t.a
r=s.e
if(r==null){w=1
break}s.d1(new C.emS(r))
s=s.c.I(x.q).f
s.R(B.b2(null,null,null,null,null,A.q,null,B.d(r.ay?"Video motion on \u2014 press Play to watch it like a video.":"Video motion off.",null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
w=4
break
case 8:s=t.a
r=s.e
if(r==null){w=1
break}s.d1(new C.emT(r))
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
return B.b(C.hha(q,new C.E1(o,n,m,l==null?"":l)),$async$$1)
case 12:p=f
if(p==null||s.c==null){w=1
break}s.d1(new C.emU(r,p))
s=s.c.I(x.q).f
q=p.a
if(q.length===0)q="No ending celebration."
else{q=C.afN(q)
q=B.t(q==null?null:q.b)+" will play after your last slide."}s.R(B.b2(null,null,null,null,null,A.q,null,B.d(q,null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
w=4
break
case 4:case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:93}
C.emQ.prototype={
$1(d){var w,v,u,t,s,r=null,q=B.a([D.e2D],x.p)
for(w=[3,5,8,10,15,20,30,60],v=this.a,u=0;u<8;++u){t=w[u]
s=v.e===t?D.bGZ:r
q.push(B.dN(!1,r,r,r,!0,r,r,r,!0,r,r,r,r,r,r,new C.emP(d,t),!1,r,r,r,r,r,r,r,new B.x(""+t+" seconds",r,A.dl,r,r,r,r,r,r,r,r,r),r,s,r))}return B.bn(!0,B.v(q,A.m,r,A.e,A.Q,0,A.p),!0,!1,A.ag,!0,!0)},
$S:27}
C.emP.prototype={
$0(){B.a5(this.a,!1).N(this.b)
return null},
$S:0}
C.emR.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.emS.prototype={
$0(){var w=this.a
return w.ay=!w.ay},
$S:0}
C.emT.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
C.emU.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.db=u.length===0?null:u
w.dx=v.b
w.dy=v.c
v=v.d
w.fr=v.length===0?null:v},
$S:0}
C.emX.prototype={
$1(d){var w,v,u,t=null,s=this.a.e,r=s==null,q=r?t:s.e,p=x.N
q=B.zf(B.d("Timer: "+(q==null?5:q)+"s",t,t,t,t,t,t,t,t,t,t),48,"timer",p)
w=r?t:s.ay
v=B.zf(B.d("Video motion: "+(w===!0?"On":"Off"),t,t,t,t,t,t,t,t,t,t),48,"motion",p)
w=r?t:s.ch
u=B.zf(B.d("Non-stop loop: "+(w===!0?"On":"Off"),t,t,t,t,t,t,t,t,t,t),48,"loop",p)
s=C.afN(r?t:s.db)
s=s==null?t:s.b
return B.a([D.e7t,q,v,u,B.zf(B.d("Ending celebration: "+(s==null?"None":s),t,t,t,t,t,t,t,t,t,t),48,"finale",p)],x.gx)},
$S:133}
C.erc.prototype={
$0(){var w=this.a,v=w.e
if(v!=null){w=w.c
w.toString
C.bAW(w,v)}},
$S:0}
C.erd.prototype={
$0(){this.a.D7()
return null},
$S:0}
C.eoc.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.z===d,r=B.m(999),q=s?D.bQY:u
if(s)w=u
else w=this.b?A.c.j(0.05):A.bN
if(s)v=A.c
else v=this.b?A.aR:A.bw
return new B.C(A.fx,B.aE(u,B.dg(u,B.d(d,u,u,u,u,u,u,B.l(u,u,v,u,u,u,u,u,u,u,u,12,u,u,A.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,A.bb,new B.o(w,u,u,r,u,q,A.n),A.eE,u,u,u,A.lA,u,u,u),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.eob(t,d),u,u,u,u,u,u,!1,A.a8),u)},
$S:137}
C.eob.prototype={
$0(){var w=this.a
return w.m(new C.eoa(w,this.b))},
$S:0}
C.eoa.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.eod.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.e
if(s==null)s=u
else{s=s.CW
s=(s==null?"":s).length!==0}w=s===!0
v=w?G.a1Y:E.av_
s=w?"Tell the AI what to change or add":"Type it \u2014 AI creates the slides"
t=w?t.gbK4():t.gbG9()
return B.hp(B.aE(u,B.p(u,D.al6,A.f,u,u,new B.o(u,u,u,u,B.a([new B.ac(0,A.G,A.d.gL(v).j(0.45),A.J,10)],x.V),new B.a7(A.a3,A.a7,A.x,v,u,u),A.a6),u,34,u,u,u,u,u,34),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,t,u,u,u,u,u,u,!1,A.a8),u,s,u,u)},
$S:1704}
C.eoe.prototype={
$0(){var w=this.a,v=w.c
v.toString
return C.i1u(v,w.a.c)},
$S:0}
C.epB.prototype={
$0(){return this.b.uU(this.a.a)},
$S:0}
C.epC.prototype={
$0(){return this.a.uU(D.mp)},
$S:0}
C.epD.prototype={
$0(){return this.a.uU(D.Hm)},
$S:0}
C.epO.prototype={
$0(){return this.a.uU(D.Hn)},
$S:0}
C.epZ.prototype={
$0(){return this.a.uU(D.Hl)},
$S:0}
C.eq9.prototype={
$0(){return this.a.pN("lab_report")},
$S:0}
C.eqg.prototype={
$0(){return this.a.pN("rubric")},
$S:0}
C.eqh.prototype={
$0(){return this.a.pN("minutes")},
$S:0}
C.eqi.prototype={
$0(){return this.a.pN("agenda")},
$S:0}
C.eqj.prototype={
$0(){return this.a.pN("timeline")},
$S:0}
C.eqk.prototype={
$0(){return this.a.pN(this.b.a)},
$S:0}
C.epE.prototype={
$0(){this.a.UV()
return null},
$S:0}
C.epF.prototype={
$0(){this.a.UP()
return null},
$S:0}
C.epG.prototype={
$0(){return this.a.pN("table")},
$S:0}
C.epH.prototype={
$0(){return this.a.pN("sticky")},
$S:0}
C.epI.prototype={
$0(){return this.a.pN("divider")},
$S:0}
C.epJ.prototype={
$0(){return this.a.pN("header_bar")},
$S:0}
C.epK.prototype={
$0(){return this.a.oL(D.be)},
$S:0}
C.epL.prototype={
$0(){return this.a.oL(D.eI)},
$S:0}
C.epM.prototype={
$0(){return this.a.oL(D.jy)},
$S:0}
C.epN.prototype={
$0(){return this.a.oL(D.Ca)},
$S:0}
C.epP.prototype={
$0(){return this.a.oL(D.jz)},
$S:0}
C.epQ.prototype={
$0(){return this.a.oL(D.kQ)},
$S:0}
C.epR.prototype={
$0(){return this.a.oL(D.fp)},
$S:0}
C.epS.prototype={
$0(){this.a.GM()
return null},
$S:0}
C.epT.prototype={
$0(){this.a.MG()
return null},
$S:0}
C.epU.prototype={
$0(){return this.a.pN("quote")},
$S:0}
C.epV.prototype={
$0(){return this.a.a77()},
$S:0}
C.epW.prototype={
$0(){this.a.ZM()
return null},
$S:0}
C.epX.prototype={
$0(){var w=this.a
return w.m(new C.epr(w))},
$S:0}
C.epr.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.epY.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return B.b(s.nR(),$async$$0)
case 3:if(!e){w=1
break}if(s.c==null){w=1
break}s.m(new C.epz(s))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.epz.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.eq_.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=r.e
q=q==null?s:q.c
w=d.a
v=q===w&&r.jD()==null&&!r.Q
q=A.a.i(w)
w=d.b
if(D.a5C.t(0,q))w+=" (Pro)"
u=d.r
if(u==null)u=d.c
u=B.a([d.f,u],x.O)
t=v?d.c:A.b5
u=B.a([B.p(s,s,A.f,s,s,new B.o(s,s,B.I(t,A.r,v?2.5:1),s,s,new B.a7(A.a3,A.a7,A.x,u,s,s),A.a6),s,26,s,s,s,s,s,26)],x.p)
if(D.a5C.t(0,q))u.push(B.ao(s,B.p(s,D.Nc,A.f,s,s,D.Dq,s,12,s,s,s,s,s,12),s,s,s,-2,-2,s))
return new B.C(A.fx,B.aE(s,B.hp(new B.an(A.W,s,A.aa,A.f,u,s),s,w,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.epy(r,d),s,s,s,s,s,s,!1,A.a8),s)},
$S:z+89}
C.epy.prototype={
$0(){this.a.a7p(this.b)
return null},
$S:0}
C.eq0.prototype={
$0(){this.a.a7o(this.b)
return null},
$S:0}
C.eq1.prototype={
$1(d){var w,v,u,t,s,r=null,q=C.hyw(d),p=this.a,o=B.m(8),n=p.gdq()
n=n==null?r:n.x
w=d.a
n=n===w?A.bi:A.b5
v=p.gdq()
n=B.I(n,A.r,(v==null?r:v.x)===w?2.5:1)
u=B.m(8)
t=B.m(7)
s=C.rf(4294967295,r,0,0,r,"preview_"+w,D.pS,"","","",D.dd)
C.he8(s,w)
w=x.p
u=B.a([B.bw(o,B.p(r,B.bw(t,C.hfs(s),A.aq),A.f,r,r,new B.o(r,r,n,u,r,r,A.n),r,44,r,r,r,r,r,72),A.aq)],w)
if(q)u.push(B.ao(r,B.p(r,D.alG,A.f,r,r,D.Dq,r,14,r,r,r,r,r,14),r,r,r,2,2,r))
return new B.C(A.j7,B.aE(r,B.v(B.a([new B.an(A.W,r,A.aa,A.q,u,r),A.cZ,B.d(d.b,r,r,r,r,r,r,B.l(r,r,this.b?A.az:A.ak,r,r,r,r,r,r,r,r,9,r,r,A.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],w),A.m,r,A.e,A.j,0,A.p),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.epx(p,q,d),r,r,r,r,r,r,!1,A.a8),r)},
$S:z+90}
C.epx.prototype={
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
return B.b(s.nR(),$async$$0)
case 5:e=!e
case 4:if(e){w=1
break}if(s.c==null){w=1
break}s.d1(new C.epn(r,t.c))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.epn.prototype={
$0(){return C.he8(this.a,this.b.a)},
$S:0}
C.epA.prototype={
bi4(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$$2=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=!D.a5B.t(0,d)
if(s){w=3
break}else g=s
w=4
break
case 3:w=5
return B.b(t.a.nR(),$async$$2)
case 5:g=!g
case 4:if(g){w=1
break}if(t.a.c==null){w=1
break}e.$0()
case 1:return B.h(u,v)}})
return B.i($async$$2,v)},
$2(d,e){return this.bi4(d,e)},
$S:z+91}
C.eql.prototype={
$4(d,e,f,g){var w=null,v=B.T(d).k("K<1,r>")
v=B.B(new B.K(d,new C.eqn(this.a,e,g,this.b,f),v),v.k("ai.E"))
return B.cd(B.A(v,A.m,w,A.e,A.j,0,w,w),A.q,w,A.y,w,w,w,w,A.aQ)},
$S:z+92}
C.eqn.prototype={
$1(d){var w=this
return w.a.b5r(d,w.b===d,w.c,w.d,new C.eqm(w.e,d),!D.a5B.t(0,d))},
$S:z+25}
C.eqm.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eq2.prototype={
$1(d){this.b.$2(d,new C.epw(this.a,d,this.c))
return null},
$S:z+26}
C.epw.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.bBM(u,new C.epm(v,this.c,w),w)},
$S:0}
C.epm.prototype={
$0(){return this.a.d1(new C.epk(this.b,this.c))},
$S:0}
C.epk.prototype={
$0(){return this.a.dy=this.b},
$S:0}
C.eq3.prototype={
$1(d){this.b.$2(d,new C.epv(this.a,d))
return null},
$S:z+26}
C.epv.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.fIw(u,new C.epl(v,w),w)},
$S:0}
C.epl.prototype={
$0(){var w=this.a
return w.d1(new C.epj(w,this.b))},
$S:0}
C.epj.prototype={
$0(){return this.a.gdq().r=this.b},
$S:0}
C.eq4.prototype={
$0(){var w=this.a
return w.m(new C.epu(w))},
$S:0}
C.epu.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
C.eq5.prototype={
$0(){var w=this.a,v=w.e
if(v!=null){w=w.c
w.toString
C.bAW(w,v)}},
$S:0}
C.eq6.prototype={
$0(){this.a.Hz()
return null},
$S:0}
C.eq7.prototype={
$0(){return this.a.a77()},
$S:0}
C.eq8.prototype={
$0(){var w=this.a,v=w.jD()
if(v!=null&&v.b===D.cQ)w.d1(new C.ept(v))},
$S:0}
C.ept.prototype={
$0(){var w=this.a
w.f=A.k.D(w.f*1.25,0.08,1.8)
w.e=A.k.D(w.e*1.1,0.08,1.8)},
$S:0}
C.eqa.prototype={
$0(){this.a.D7()
return null},
$S:0}
C.eqb.prototype={
$0(){var w=this.a,v=w.e
v.toString
w.EM(v,!0)
return null},
$S:0}
C.eqc.prototype={
$0(){this.a.d1(new C.eps(this.b))},
$S:0}
C.eps.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.O)?A.cs:A.O},
$S:0}
C.eqd.prototype={
$0(){this.a.d1(new C.epq(this.b))},
$S:0}
C.epq.prototype={
$0(){var w=this.a
return w.y=w.y===A.cD?A.bk:A.cD},
$S:0}
C.eqe.prototype={
$0(){this.a.d1(new C.epp(this.b))},
$S:0}
C.epp.prototype={
$0(){var w=this.a,v=w.z
return w.z=1===v.a?A.aC:A.mu},
$S:0}
C.eqf.prototype={
$0(){this.a.d1(new C.epo(this.b))},
$S:0}
C.epo.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
C.em_.prototype={
$1(d){return this.bi1(d)},
bi1(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.b
if(r){w=3
break}else f=r
w=4
break
case 3:w=5
return B.b(t.a.nR(),$async$$1)
case 5:f=!f
case 4:if(f){w=1
break}s=t.a
if(s.c==null){w=1
break}s.d1(new C.elZ(s,t.c))
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:181}
C.elZ.prototype={
$0(){return this.a.e.d=this.b},
$S:0}
C.eqI.prototype={
$0(){var w=this.a
return w.d1(new C.eqH(w,this.b))},
$S:0}
C.eqH.prototype={
$0(){var w,v=this.b,u=v.w
if(!(u>0)){w=this.a.e
w=w==null?null:w.e
u=w==null?5:w}v.w=A.o.D(u-1,1,120)},
$S:0}
C.eqJ.prototype={
$0(){var w=this.a
return w.d1(new C.eqG(w,this.b))},
$S:0}
C.eqG.prototype={
$0(){var w,v=this.b,u=v.w
if(!(u>0)){w=this.a.e
w=w==null?null:w.e
u=w==null?5:w}v.w=A.o.D(u+1,1,120)},
$S:0}
C.en7.prototype={
$0(){return this.a.d1(new C.en6(this.b))},
$S:0}
C.en6.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w-2,10,96)},
$S:0}
C.en8.prototype={
$0(){return this.a.d1(new C.en5(this.b))},
$S:0}
C.en5.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w+2,10,96)},
$S:0}
C.enF.prototype={
$1(d){var w=x.gh
w=B.B(new B.K(D.anm,new C.enE(),w),w.k("ai.E"))
return w},
$S:z+94}
C.enE.prototype={
$1(d){var w=null
return B.zf(B.d(d.b,w,w,w,w,w,w,A.mx,w,w,w),48,d,x.fO)},
$S:z+95}
C.eqV.prototype={
$2(d,e){var w=this.a,v=w?0:8
return new B.a6(v,w?8:0,null,null)},
$S:36}
C.eqU.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=null,p=r.a,o=e===p.f,n=p.jZ()?q:new C.eqS(p,r.b,d,e),m=r.c,l=m?1/0:112
m=m?72:64
w=B.m(8)
if(o)v=A.bi
else v=r.d?A.b5:A.cn
v=B.I(v,A.r,o?2:1)
u=r.d?A.cC:A.c
t=B.bY(0,C.hfs(r.b.r[e]),0,0,0)
s=B.m(4)
return B.aE(q,B.p(q,new B.an(A.W,q,A.aa,A.q,B.a([t,B.ao(4,B.p(q,B.d(""+(e+1),q,q,q,q,q,q,A.ne,q,q,q),A.f,q,q,new B.o(A.aX,q,q,s,q,q,A.n),q,q,q,q,A.ah7,q,q,q),q,q,4,q,q,q)],x.p),q),A.f,q,q,new B.o(u,q,v,w,q,q,A.n),q,m,q,q,q,q,q,l),A.y,!1,q,q,q,q,q,q,q,q,n,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.eqT(p,e),q,q,q,q,q,q,!1,A.a8)},
$S:76}
C.eqT.prototype={
$0(){var w=this.a
return w.m(new C.eqO(w,this.b))},
$S:0}
C.eqO.prototype={
$0(){var w=this.a
w.f=this.b
w.r=null
w.Jy()},
$S:0}
C.eqS.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.b
if(q.r.length<=1){w=1
break}s=t.d
w=3
return B.b(B.bW(null,null,new C.eqP(s,q),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:r=e
if(r==="dup"){q=t.a
q.m(new C.eqQ(q,s))
q.aPT()}else if(r==="del"){q=t.a
q.m(new C.eqR(q,s))
q.aP5()}else if(r==="up")t.a.b0N(s,s-1)
else if(r==="down")t.a.b0N(s,s+1)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eqP.prototype={
$1(d){var w=null,v=B.a([B.dN(!1,w,w,w,!0,w,w,w,!0,w,D.bIC,w,w,w,w,new C.eqK(d),!1,w,w,w,w,w,w,w,D.f6q,w,w,w),B.dN(!1,w,w,w,!0,w,w,w,!0,w,D.bIv,w,w,w,w,new C.eqL(d),!1,w,w,w,w,w,w,w,A.w4,w,w,w)],x.p),u=this.a
if(u>0)v.push(B.dN(!1,w,w,w,!0,w,w,w,!0,w,D.bHN,w,w,w,w,new C.eqM(d),!1,w,w,w,w,w,w,w,D.fee,w,w,w))
if(u<this.b.r.length-1)v.push(B.dN(!1,w,w,w,!0,w,w,w,!0,w,D.bJO,w,w,w,w,new C.eqN(d),!1,w,w,w,w,w,w,w,D.f6f,w,w,w))
return B.bn(!0,B.v(v,A.m,w,A.e,A.Q,0,A.p),!0,!1,A.ag,!0,!0)},
$S:27}
C.eqK.prototype={
$0(){B.a5(this.a,!1).N("dup")
return null},
$S:0}
C.eqL.prototype={
$0(){B.a5(this.a,!1).N("del")
return null},
$S:0}
C.eqM.prototype={
$0(){B.a5(this.a,!1).N("up")
return null},
$S:0}
C.eqN.prototype={
$0(){B.a5(this.a,!1).N("down")
return null},
$S:0}
C.eqQ.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eqR.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eqW.prototype={
$0(){return this.a.a77()},
$S:0}
C.emp.prototype={
$0(){var w=this.a
w.b46()
w.aye(null)},
$S:0}
C.emo.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=B.m(4),n=B.a([new B.ac(0,A.G,A.w.j(0.35),A.dk,24)],x.V),m=this.b
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
s=B.a([B.bw(s,B.bZ(A.kp,new B.o(m.f==null?B.b0(m.e):p,p,p,p,p,r,A.n),A.bd),A.aq)],x.p)
r=m.z
q=this.c
A.d.v(s,new B.K(r,new C.emn(this.a,e.b,e.d,q),B.T(r).k("K<1,r>")))
if(m.z.length===0)s.push(B.av(B.d("Use Insert \u2192 Text Box, Picture, or Shapes",p,p,p,p,p,p,B.l(p,p,q?A.az:A.bI,p,p,p,p,p,p,p,p,p,p,p,A.a4,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p))
return B.bZ(new B.an(A.W,p,A.aa,A.f,s,new B.cw("canvas_"+m.a+"_"+u+"_"+t,x.W)),new B.o(v,p,p,o,n,w,A.n),A.bd)},
$S:382}
C.emn.prototype={
$1(d){var w=this
return w.a.bC7(d,w.b,w.c,w.d)},
$S:z+23}
C.emc.prototype={
$0(){var w=this
if(w.b){w.a.MP(w.c)
return}if(w.d){w.a.a75(w.c)
return}if(w.e){w.a.afo(w.c)
return}if(w.f)w.a.b4C(w.c)},
$S:0}
C.emd.prototype={
$0(){this.a.MP(this.b)
return null},
$S:0}
C.eme.prototype={
$0(){return this.a.a18(this.b.a)},
$S:0}
C.emf.prototype={
$1(d){var w=this,v=w.a,u=w.b
if(v.w===u.a)return
v.m(new C.emb(u,d,w.c,w.d))
v.Hd()
v.nZ()
v.p0()},
$S:18}
C.emb.prototype={
$0(){var w=this,v=w.a,u=w.b.d
v.c=A.k.D(v.c+u.a/w.c,-0.3,1.2)
v.d=A.k.D(v.d+u.b/w.d,-0.3,1.2)},
$S:0}
C.emg.prototype={
$1(d){return this.a.ahO(this.b.a,d)},
$S:2}
C.emi.prototype={
$0(){var w,v,u=this
if(u.b){w=u.c
if(!C.fU9(w))u.a.MP(w)
return}if(!u.d)return
w=u.a
v=u.c
if(w.w===v.a)return
w.b4C(v)},
$S:0}
C.emh.prototype={
$0(){return this.a.a18(this.b.a)},
$S:0}
C.emj.prototype={
$1(d){var w=this,v=w.a
v.m(new C.ema(w.b,d,w.c,w.d))
v.Hd()
v.nZ()
v.p0()},
$S:18}
C.ema.prototype={
$0(){var w=this,v=w.a,u=w.b.d
v.e=A.k.D(v.e+u.a/w.c,0.04,1.8)
u=u.b
v.f=A.k.D(v.f+u/w.d,0.04,1.8)
if(v.b===D.cQ)v.w=A.k.D(v.w+u*0.15,10,120)},
$S:0}
C.emk.prototype={
$1(d){var w=this.a
w.m(new C.em9(this.b,d))
w.Hd()
w.nZ()
w.p0()},
$S:233}
C.em9.prototype={
$0(){var w=this.a,v=this.b.d
w.e=A.k.D(w.e*v,0.04,1.8)
w.f=A.k.D(w.f*v,0.04,1.8)
if(w.b===D.cQ)w.w=A.k.D(w.w*v,10,120)},
$S:0}
C.eml.prototype={
$0(){var w=this.a
w.m(new C.em8(this.b))
w.Hd()
w.nZ()
w.p0()},
$S:0}
C.em8.prototype={
$0(){this.a.r=C.heY()},
$S:0}
C.emm.prototype={
$0(){return this.a.a18(this.b.a)},
$S:0}
C.eog.prototype={
$0(){var w=this.a
return w.m(new C.eof(w))},
$S:0}
C.eof.prototype={
$0(){return this.a.y=!1},
$S:0}
C.eoh.prototype={
$1(d){return this.a.cyn(this.b.a,d)},
$S:2}
C.enl.prototype={
$1(d){var w
this.a.d1(d)
w=this.b
if(w!=null)w.$0()},
$S:170}
C.enm.prototype={
$1(d){return this.a.$1(new C.enk(this.b,d))},
$S:6}
C.enk.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.enn.prototype={
$1(d){return this.a.$1(new C.enj(this.b,d))},
$S:6}
C.enj.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eno.prototype={
$1(d){return this.a.$1(new C.eni(this.b,d))},
$S:6}
C.eni.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.enp.prototype={
$1(d){return this.a.$1(new C.enh(this.b,d))},
$S:6}
C.enh.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.enq.prototype={
$1(d){return this.a.$1(new C.eng(this.b,d))},
$S:6}
C.eng.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.enr.prototype={
$1(d){return this.b.$1(new C.enf(this.a,this.c))},
$S:9}
C.enf.prototype={
$0(){return this.b.go=this.a.a},
$S:0}
C.ens.prototype={
$1(d){return this.b.$1(new C.ene(this.a,this.c))},
$S:9}
C.ene.prototype={
$0(){return this.b.id=this.a.a},
$S:0}
C.ent.prototype={
$1(d){var w=null,v=this.b,u=B.b0(d),t=v.Q===d,s=t?A.bi:A.cU
return B.aE(w,B.p(w,w,A.f,w,w,new B.o(u,w,B.I(s,A.r,t?2:1),w,w,w,A.a6),w,24,w,w,w,w,w,24),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.end(this.a,v,d),w,w,w,w,w,w,!1,A.a8)},
$S:450}
C.end.prototype={
$0(){return this.a.$1(new C.ena(this.b,this.c))},
$S:0}
C.ena.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.enu.prototype={
$1(d){return this.a.$1(new C.enc(this.b,d))},
$S:1705}
C.enc.prototype={
$0(){var w=this.b
return this.a.as=w.gL(w)},
$S:0}
C.env.prototype={
$1(d){var w=null
return B.aE(w,B.p(w,w,A.f,w,w,new B.o(B.b0(d),w,w,w,w,w,A.a6),w,22,w,w,w,w,w,22),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.enb(this.a,this.b,d),w,w,w,w,w,w,!1,A.a8)},
$S:450}
C.enb.prototype={
$0(){return this.a.$1(new C.en9(this.b,this.c))},
$S:0}
C.en9.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.enw.prototype={
$0(){var w,v=this
if(v.b){w=v.a.c
w.toString
w=B.a5(w,!1).pi()}else w=!1
if(w){w=v.a.c
w.toString
B.a5(w,!1).eI()}v.a.aqU()},
$S:0}
C.enz.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.fy
m===$&&B.c()
m=m.x
m===$&&B.c()
w=A.dA.av(0,m)
m=B.m(16)
v=B.m(16)
u=o.c
t=B.aq(u,A.b1,0.35+w*0.15)
t.toString
t=B.a([u,t],x.O)
s=B.I(A.c.j(0.3+w*0.2),A.r,1.2)
r=B.a([B.W(o.d,A.c,n,n,n,26)],x.p)
q=B.m(6)
p=B.I(u,A.r,1.2)
r.push(B.ao(2,B.p(n,B.W(A.tJ,u,n,n,n,10),A.f,n,n,new B.o(A.c,n,p,q,n,n,A.n),n,n,n,n,A.mY,n,n,n),n,n,n,2,n,n))
return B.aF(!1,A.a1,!0,n,B.aK(!1,m,!0,B.ex(new B.a6(48,48,new B.an(A.A,n,A.aa,A.q,r,n),n),n,new B.o(n,n,s,v,n,new B.a7(A.ax,A.aD,A.x,t,n,n),A.n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.b,n,n,n,n,n,n,n),A.f,A.K,0,n,A.K,n,n,n,A.af)},
$S:126}
C.el8.prototype={
$2(d,e){var w,v,u,t,s,r,q=this,p=null,o=q.a.fy
o===$&&B.c()
o=o.x
o===$&&B.c()
w=A.dA.av(0,o)
o=B.m(22)
v=B.m(22)
u=q.c
t=B.aq(u,A.b1,0.22+w*0.12)
t.toString
u=B.a([u,t,u.j(0.9)],x.O)
t=B.I(A.c.j(0.28+w*0.22),A.r,1.35)
s=A.c.j(0.14+w*0.08)
r=B.I(A.c.j(0.4+w*0.15),A.r,1)
return B.aF(!1,A.a1,!0,p,B.aK(!1,o,!0,B.ex(B.v(B.a([B.e9(A.A,B.p(p,B.W(q.d,A.c,p,p,p,26),A.f,p,p,new B.o(s,p,r,p,p,p,A.a6),p,48,p,p,p,p,p,48),1+w*0.06,p,p),A.ac,B.d(q.e,p,p,p,p,p,p,A.ji,A.L,p,p)],x.p),A.m,p,A.ba,A.j,0,A.p),p,new B.o(p,p,t,v,p,new B.a7(A.ax,A.aD,A.x,u,p,p),A.n),p,A.EU,1/0),p,!0,p,p,p,p,p,p,p,p,p,p,p,q.b,p,p,p,p,p,p,p),A.f,A.K,0,p,A.K,p,p,p,A.af)},
$S:126}
C.epd.prototype={
$1(d){var w=null,v=B.d(this.a,w,w,w,w,w,w,w,w,w,w),u=this.b,t=B.aL(w,A.T,!0,w,!0,A.q,w,B.aM(),u,w,w,w,w,w,2,A.amw,A.y,!0,w,!0,w,!1,w,A.ah,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,A.a9,w,w,w,w,w,w,w,w,w,w,w,w,!0,A.a5,w,A.am,w,w,w,w)
return B.eh(B.a([B.bK(!1,A.de,w,w,!0,w,w,new C.epb(d),w,w),B.bJ(A.p_,new C.epc(d,u),w)],x.p),w,w,w,t,w,w,w,w,v,w)},
$S:19}
C.epb.prototype={
$0(){B.a5(this.a,!1).N(null)
return null},
$S:0}
C.epc.prototype={
$0(){var w=this.b.a.a
B.a5(this.a,!1).N(w)
return null},
$S:0}
C.cYZ.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.a,i=j.d
i===$&&B.c()
i=i.x
i===$&&B.c()
w=A.dA.av(0,i)
i=j.e
i===$&&B.c()
v=i.x
v===$&&B.c()
u=A.et.av(0,A.k.D(v,0,1))
i=i.x
i===$&&B.c()
i=A.dV.av(0,i)
v=B.m(22)
t=B.aq(A.aK,A.d.gL(C.kr(j.a.c.w)?D.tR:M.n5),w*0.35)
t.toString
t=B.I(t,A.r,1.2)
s=x.V
r=B.a([new B.ac(w*2,A.G,A.d.gL(C.kr(j.a.c.w)?D.tR:M.n5).j(0.18+w*0.12),A.J,32+w*10),D.a9Y],s)
q=B.m(22)
p=x.O
o=B.ao(k,B.p(k,k,A.f,k,k,new B.o(k,k,k,k,k,new B.bR(A.b0,0.9,A.x,k,0,B.a([A.d.gL(C.kr(j.a.c.w)?D.tR:M.n5).j(0.22+w*0.1),A.K],p),k,k),A.n),k,80,k,k,k,k,k,k),k,k,0,0,-28,k)
n=64+w*6
m=A.d.gL(C.kr(j.a.c.w)?D.tR:M.n5).j(0.28+w*0.14)
p=B.p(k,k,A.f,k,k,new B.o(k,k,k,k,k,new B.bR(A.A,0.5,A.x,k,0,B.a([m,A.d.gal(C.kr(j.a.c.w)?D.tR:M.n5).j(0.08),A.K],p),k,k),A.a6),k,n,k,k,k,k,k,n)
n=B.m(14)
m=j.a.c.w
l=C.kr(m)?D.tR:M.n5
s=B.a([new B.ac(0,A.G,A.d.gL(C.kr(m)?D.tR:M.n5).j(0.45+w*0.2),A.cx,18)],s)
m=x.p
l=B.a([p,B.e9(A.A,B.p(k,B.W(C.kr(j.a.c.w)?A.vh:A.pG,A.c,k,k,k,22),A.f,k,k,new B.o(k,k,k,n,s,new B.a7(A.ax,A.aD,A.x,l,k,k),A.n),k,46,k,k,k,k,k,46),1+w*0.04,k,k)],m)
s=B.a([new B.an(A.A,k,A.aa,A.q,l,k),A.S,B.d("PRESENTATION",k,k,k,k,k,k,B.l(k,k,A.d.gL(C.kr(j.a.c.w)?D.tR:M.n5).j(0.85+w*0.15),k,k,k,k,k,k,k,k,10,k,k,A.I,k,k,!0,k,1.4,k,k,k,k,k,k),A.L,k,k),A.fW,B.d(j.a.c.b,k,2,A.a2,k,k,k,D.eZN,A.L,k,k),A.at,B.d(j.gctr(),k,k,k,k,k,k,D.f3g,A.L,k,k),A.ay],m)
p=j.a.c
if(p.z){p=p.gRw()?"Shared by admin \xb7 editable for 4 hours":"Received copy \xb7 print or download only"
A.d.v(s,B.a([B.d(p,k,k,k,k,k,k,B.l(k,k,A.d.gL(C.kr(j.a.c.w)?D.tR:M.n5).j(0.9),k,k,k,k,k,k,k,k,11,k,k,A.O,k,k,!0,k,k,k,k,k,k,k,k),A.L,k,k),A.ac],m))}s.push(new C.J6(A.xE,"Download PDF","pdf",A.d7,j.Ir(0),!1,k))
p=j.a.c
if(!p.z||p.gRw()){p=j.a.c.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"}else p=!1
if(p){p=j.a.c.w
A.d.v(s,B.a([A.ao,new C.J6(A.kK,"Transfer to "+C.hf_(p==null?"":p),"transfer_hati",A.aU,j.Ir(1),!1,k)],m))}p=j.a.c
if(!p.z){p=p.w
n=j.Ir(p==="hati_kuhowa"||p==="hati_kuhoweya"?2:1)
p=j.a.c.w
A.d.v(s,B.a([A.ao,new C.J6(D.bAi,"Rename presentation","rename",A.c8,n,!1,k),A.ao,new C.J6(A.aiL,"Duplicate","duplicate",A.b4,j.Ir(p==="hati_kuhowa"||p==="hati_kuhoweya"?3:2),!1,k)],m))}s.push(A.P)
p=j.a.c
if(p.z)p=1
else{p=p.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"?4:3}s.push(new C.J6(A.e4,"Delete presentation","delete",A.aB,j.Ir(p),!0,k))
s.push(A.at)
p=j.a.c
if(p.z)p=2
else{p=p.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"?5:4}p=j.Ir(p)
n=j.a.c
if(n.z)n=2
else{n=n.w
n=n==="hati_kuhowa"||n==="hati_kuhoweya"?5:4}n=j.Ir(n)
s.push(B.dU(B.db(B.bK(!1,E.aP6,k,k,!0,k,k,new C.cYY(d),k,B.fu(k,k,k,k,k,k,k,k,k,k,k,A.bI,k,k,k,A.au,k,D.bqU,k,k,k,k,k,A.kj,k,k)),n),new B.u(0,(1-p)*8)))
return B.e9(A.A,B.db(B.aF(!1,A.a1,!0,k,B.p(k,B.bw(q,new B.an(A.W,k,A.aa,A.q,B.a([o,new B.C(D.bq2,B.v(s,A.m,k,A.e,A.Q,0,A.p),k)],m),k),A.aq),A.f,k,A.Uy,new B.o(A.aA,k,t,v,r,k,A.n),k,k,k,k,k,k,k,k),A.f,A.K,0,k,k,k,k,k,A.af),i),0.88+u*0.12,k,k)},
$S:45}
C.cYY.prototype={
$0(){B.a5(this.a,!1).N(null)
return null},
$S:0}
C.cZk.prototype={
$0(){B.a5(this.a,!1).N(!1)
return null},
$S:0}
C.cZl.prototype={
$0(){B.a5(this.a,!1).N(!0)
return null},
$S:0}
C.cYW.prototype={
$1(d){var w=this.a
return w.m(new C.cYS(w))},
$S:22}
C.cYS.prototype={
$0(){return this.a.d=!0},
$S:0}
C.cYX.prototype={
$1(d){var w=this.a
return w.m(new C.cYR(w))},
$S:49}
C.cYR.prototype={
$0(){return this.a.d=!1},
$S:0}
C.cYV.prototype={
$0(){var w=this.a
return w.m(new C.cYT(w))},
$S:0}
C.cYT.prototype={
$0(){return this.a.d=!1},
$S:0}
C.cYU.prototype={
$0(){var w=this.a.a.e
B.a5(this.b,!1).N(w)
return null},
$S:0}
C.erT.prototype={
$0(){return $.biH=!$.biH},
$S:0}
C.erJ.prototype={
$0(){var w,v,u=this.a
if(u.c==null||!u.r)return
w=u.d
w===$&&B.c()
v=u.a.c
if(w<v.r.length-1||v.ch||u.gaSZ())u.auL()},
$S:0}
C.erS.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.erK.prototype={
$0(){return this.a.y=!0},
$S:0}
C.erL.prototype={
$0(){var w=this.a
if(w.c!=null&&w.y)w.auL()},
$S:0}
C.erF.prototype={
$0(){var w=this.a
w.y=!1
w.e=A.d.gL(w.a.c.r).r
w.d=0},
$S:0}
C.erG.prototype={
$0(){var w=this.a,v=this.b
w.e=w.a.c.r[v].r
w.d=v},
$S:0}
C.erH.prototype={
$0(){return this.a.y=!1},
$S:0}
C.erI.prototype={
$0(){var w,v,u=this.a
u.e=u.a.c.r[this.b].r
w=u.d
w===$&&B.c()
v=this.c
u.d=A.o.G(w-1+v,v)},
$S:0}
C.erQ.prototype={
$2(d,e){var w=B.B(e,x.l)
if(d!=null)w.push(d)
return new B.an(A.A,null,A.b_,A.q,w,null)},
$S:1706}
C.erR.prototype={
$2(d,e){var w
if(e.gc2(e)===A.hR)return new B.cX(e,!1,d,null)
w=this.a
return w.crq(w.e,d,e)},
$S:431}
C.erM.prototype={
$2(d,e){var w=B.dl(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
v=this.a
w.fv((1-v.gp(0))*1.5708)
return B.fr(A.A,B.db(e,v.gp(0)),null,w,!0)},
$S:45}
C.erN.prototype={
$2(d,e){var w=B.dl(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
v=this.a
w.jN((1-v.gp(0))*1.5708)
return B.fr(A.A,B.db(e,v.gp(0)),null,w,!0)},
$S:45}
C.erO.prototype={
$2(d,e){var w=B.dl(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.002
v=this.a
w.fv(v.gp(0)*0.8)
w.jN(v.gp(0)*0.35)
return B.fr(A.A,B.db(e,v.gp(0)),null,w,!0)},
$S:45}
C.erP.prototype={
$2(d,e){var w=B.dl(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.0025
v=this.a
w.fv(-v.gp(0)*1.2)
return B.fr(A.a7,B.db(e,v.gp(0)),null,w,!0)},
$S:45}
C.erU.prototype={
$2(d,e){var w,v=this,u=v.b,t=u==null
if(!t){w=v.a.gXZ().r
w=w!=null&&w.a!=null}else w=!1
if(w){t=v.a
u=t.a.c.r[u]
t=t.gXZ().x
t===$&&B.c()
return new C.b_z(u,v.c,t,null)}u=v.a.d
u===$&&B.c()
return new C.I5(v.c,t,!0,new B.cw("cine"+u,x.W))},
$S:658}
C.erW.prototype={
$1(d){var w=this.a
if(d.b.a>B.aI(this.b,A.bS,x.w).w.a.a*0.55)w.auL()
else w.cgb()},
$S:49}
C.erV.prototype={
$0(){B.a5(this.a,!1).N(null)
return null},
$S:0}
C.fz1.prototype={
$4(d,e,f,g){var w=this.b
A.d.a8(w)
A.d.v(w,d)
w=this.a
w.a=e
w.b=f
w.c=g},
$S:428}
C.fza.prototype={
$1(d){var w=null,v=this.a,u=v.r.length,t=u===1?"":"s"
t=B.d("Download a PDF that looks like your slides ("+u+" page"+t+"), or open the print view in your browser.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.75),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return B.eh(B.a([B.bK(!1,A.de,w,w,!0,w,w,new C.fz7(d),w,w),B.bK(!1,D.flf,w,w,!0,w,w,new C.fz8(d,this.b,v),w,w),B.bJ(A.aPn,new C.fz9(d,v,this.c),w)],x.p),w,w,L.t1,new B.a6(320,w,t,w),w,w,w,w,D.fmG,w)},
$S:19}
C.fz7.prototype={
$0(){B.a5(this.a,!1).N(null)
return null},
$S:0}
C.fz8.prototype={
$0(){var w=0,v=B.j(x.H),u=this
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:B.a5(u.a,!1).N(null)
C.fUO(u.b,u.c.b)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fz9.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:B.a5(u.a,!1).N(null)
t=u.b
w=2
return B.b(C.aOw(t),$async$$0)
case 2:s=e
r=u.c
w=r.e!=null?3:4
break
case 3:w=5
return B.b(C.aNW(r,s,t.b),$async$$0)
case 5:case 4:return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fz0.prototype={
$1(d){return d.a!==this.a.a},
$S:z+2}
C.cbZ.prototype={
$2(d,e){var w
if(x.f.b(e)){w=J.q(e,"bundleId")
w=J.k(w==null?"":w)===this.a}else w=!1
return w},
$S:537}
C.fz6.prototype={
$1(d){return d.ae()},
$S:z+14}
C.f7v.prototype={
$1(d){return C.fUM(C.V4(B.a1(d,x.N,x.z)),this.a)},
$S:z+96}
C.fHM.prototype={
$3(d,e,f){return A.bH},
$C:"$3",
$R:3,
$S:90}
C.fHN.prototype={
$4(d,e,f,g){var w=A.cq.av(0,e.gp(0))
return B.db(B.e9(A.A,D.fJD,0.94+w*0.06,null,null),w)},
$S:439}
C.fHO.prototype={
$1(d){var w=this
return new C.V6(w.a,w.b,w.c,w.d,null)},
$S:z+97}
C.erp.prototype={
$2(d,e){return d+e.r.length},
$S:z+13}
C.erl.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.ero.prototype={
$1(d){var w=this.a,v=w.a,u=v.c
v=v.f
return new C.V7(u,this.b,w.gaMs(),v,null)},
$S:z+99}
C.erm.prototype={
$0(){return this.a.f=!0},
$S:0}
C.ern.prototype={
$0(){return this.a.f=!1},
$S:0}
C.erq.prototype={
$0(){return this.a.f=!0},
$S:0}
C.err.prototype={
$0(){return this.a.f=!1},
$S:0}
C.eru.prototype={
$0(){B.a5(this.a,!1).N(null)
return null},
$S:0}
C.erv.prototype={
$0(){var w=this.a
return w.m(new C.ert(w))},
$S:0}
C.ert.prototype={
$0(){return this.a.d="one"},
$S:0}
C.erw.prototype={
$0(){var w=this.a
return w.m(new C.ers(w))},
$S:0}
C.ers.prototype={
$0(){return this.a.d="all"},
$S:0}
C.erx.prototype={
$1(d){return this.a.bGK(d,this.b)},
$S:z+100}
C.erk.prototype={
$0(){var w=this.a
return w.m(new C.erj(w,this.b))},
$S:0}
C.erj.prototype={
$0(){return this.a.e=this.b.a},
$S:0}
C.ery.prototype={
$0(){var w=this.a,v=this.b
w.d=v.b
w.e=v.a},
$S:0}
C.erz.prototype={
$0(){return this.a.f="Could not create QR. Check your connection and try again."},
$S:0}
C.erA.prototype={
$2(d,e){return d+e.r.length},
$S:z+13}
C.erB.prototype={
$0(){B.a5(this.a,!1).N(null)
return null},
$S:0}
C.erC.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a.e
s.toString
w=3
return B.b(B.fI(new B.fB(s)),$async$$0)
case 3:s=t.b
if(s.e==null){w=1
break}s.I(x.q).f.R(D.eMw)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.el2.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.el1())},
$S:0}
C.el1.prototype={
$0(){},
$S:0}
C.el3.prototype={
$1(d){var w=this.a
if(w.c!=null)w.e.fF()},
$S:8}
C.ekZ.prototype={
$1(d){return this.a.m(new C.ekY())},
$S:2}
C.ekY.prototype={
$0(){},
$S:0}
C.el_.prototype={
$1(d){return this.a.aXJ()},
$S:2}
C.el0.prototype={
$0(){B.a5(this.a,!1).N(null)
return null},
$S:0}
C.erE.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(t.d.pC(),$async$$0)
case 2:if(t.c!=null)t.m(new C.erD(t))
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.erD.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.ftl.prototype={
$1(d){var w=null,v=this.a,u=v.a
return B.ao(w,new B.es(new B.ka(this.c,new C.ftk(),w,w,x.ex),this.b),v.b,w,0,w,0,u)},
$S:213}
C.ftk.prototype={
$3(d,e,f){return new C.I5(e,!1,!1,new B.cw(e.a,x.W))},
$S:z+102}
C.ftm.prototype={
$1(d){var w=null
return B.oc(!1,B.av(new C.bt5(this.a,this.b,w),w,w,w),w,x.z)},
$S:339}
C.ftq.prototype={
$0(){var w=0,v=B.j(x.cc),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.aT.gmr(),$async$$0)
case 3:w=4
return B.b(B.bN(A.mV,null,x.H),$async$$0)
case 4:w=5
return B.b($.aT.gmr(),$async$$0)
case 5:s=$.aT.ak$.x.h(0,t.a)
r=s==null?null:s.gb7()
if(!(r instanceof B.pK))throw B.U("Could not draw the slide.")
u=r.lP(1)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1709}
C.ftr.prototype={
biB(d){var w=0,v=B.j(x.fS),u,t,s,r
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(d.ho(A.fT),$async$$1)
case 3:r=f
if(r==null)throw B.U("Could not read the slide picture.")
t=(self.URL||self.webkitURL).createObjectURL(B.hL([J.fa(A.dG.gaP(r))],"image/png"))
t.toString
s=Am.fLK(t)
w=4
return B.b(new B.pQ(s,"load",!1,x.ev).gL(0).cM(0,A.jp),$async$$1)
case 4:(self.URL||self.webkitURL).revokeObjectURL(t)
u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$1(d){return this.biB(d)},
$S:1710}
C.ftn.prototype={
$1(d){var w,v=x.bu.a(d).data
if(v!=null){w=v.size
w.toString
w=w>0}else w=!1
if(w)this.a.push(v)},
$S:143}
C.fto.prototype={
$1(d){var w=this.a
if((w.a.a&30)===0)w.fM(0)},
$S:143}
C.ftp.prototype={
$0(){return(self.URL||self.webkitURL).revokeObjectURL(this.a)},
$S:0}
C.f1S.prototype={
$3(d,e,f){var w=null
return B.d(e,w,w,w,w,w,w,D.eWl,A.L,w,w)},
$S:1711}
C.f1T.prototype={
$3(d,e,f){var w=null,v=B.m(99)
return B.bw(v,B.mh(A.bl,w,A.dO,8,w,e===0?w:e,w),A.aq)},
$S:566}
C.e9y.prototype={
$1(d){this.a.Z7()
return null},
$S:14}
C.e9w.prototype={
$0(){return this.a.e=D.bm3},
$S:0}
C.e9x.prototype={
$0(){var w=this.a.a
if(w.a<0)w=A.bx
return this.b.e=w},
$S:0}
C.cex.prototype={
$1(d){return A.o.dv(1,d.a)},
$S:z+103}
C.cey.prototype={
$2(d,e){return(d|e)>>>0},
$S:74};(function aliases(){var w=C.aKw.prototype
w.bt8=w.q
w=C.aK_.prototype
w.bsB=w.q
w=C.aJL.prototype
w.bsl=w.q
w=C.aJZ.prototype
w.bsA=w.q
w=C.aKu.prototype
w.bt6=w.q
w=C.aLP.prototype
w.buB=w.q
w=C.aIG.prototype
w.brd=w.q
w=C.aKI.prototype
w.btk=w.q
w=C.aKJ.prototype
w.btl=w.q
w=C.b1e.prototype
w.bnS=w.aBg})();(function installTearOffs(){var w=a._static_0,v=a._instance_0u,u=a._instance_1u,t=a._static_1,s=a.installStaticTearOff
w(C,"i_n","ami",104)
v(C.aHF.prototype,"gc0w","Y5",0)
var r
u(r=C.awh.prototype,"gcsM","csN",38)
v(r,"gc1h","ac8",0)
v(r=C.awd.prototype,"gaWk","DA",3)
v(r,"gc1e","c1f",3)
v(r,"gav2","xl",0)
v(r,"gav3","I6",0)
t(C,"i_M","hwh",105)
v(C.aCl.prototype,"gc3L","c3M",3)
s(C,"i_X",0,null,["$4$paper$photo$request$template"],["fAq"],106,0)
s(C,"i_W",0,null,["$5$doc$history$instruction$photo$template"],["bAe"],107,0)
v(r=C.aCE.prototype,"gc4r","Io",0)
v(r,"gbGc","VY",0)
v(r,"gc4u","acV",0)
v(r,"gc4t","YU",0)
v(r,"gaXo","DS",0)
v(C.aCI.prototype,"gc4z","YW",0)
v(r=C.aE4.prototype,"gaXB","P6",0)
v(r,"gckU","b0T",3)
v(r,"gcub","azu",86)
v(r,"gbJV","a92",0)
v(r,"gc5_","A7",0)
v(r=C.aFZ.prototype,"gceV","a_g",0)
v(r,"gcf2","a_j",0)
v(r,"gbzb","a7v",0)
v(r,"gc53","ad6",0)
v(C.aFY.prototype,"gc54","ad7",0)
v(C.azZ.prototype,"gbya","a7i",0)
v(C.aym.prototype,"gc55","Z6",0)
w(C,"i09","hZ4",12)
w(C,"i07","hW1",12)
w(C,"i08","hY4",12)
v(r=C.aCY.prototype,"gcxj","cxk",3)
v(r,"gcja","cjb",3)
u(r,"gDY","adN",7)
v(r,"gbDP","aq4",3)
u(r,"gDZ","aYS",7)
v(r,"gc7c","adu",0)
v(r,"gc63","adt",0)
v(r,"gc9m","adO",0)
v(r,"gbG9","a8E",0)
v(r,"gcaf","ZG",0)
v(r,"gcag","ae4",0)
v(r,"gcaN","aeb",0)
v(r,"gc9z","adR",0)
v(r,"gbK4","a96",0)
v(r,"gaPS","aPT",3)
v(r,"gaP4","aP5",3)
v(r,"gaKN","aKO",3)
v(r,"gaP3","aqU",3)
u(r,"gbyr","bys",80)
v(r,"gaz2","b3U",3)
v(r,"gc65","c66",3)
v(r,"gbUW","bUX",3)
v(r,"gbIA","bIB",3)
v(r=C.aD0.prototype,"gcwb","cwc",3)
v(r,"gcvR","cvS",3)
t(C,"i0a","hZl",2)
v(r=C.aCZ.prototype,"gc5b","It",0)
v(r,"gcmS","Qx",0)
v(r,"gc58","Is",0)
v(r,"gcyy","a1M",0)
v(r,"gcaZ","aei",0)
v(C.aCX.prototype,"gc5c","aXJ",3)
v(r=C.aD_.prototype,"gbKQ","a9g",0)
u(r,"gc59","c5a",101)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(B.aC,[C.nK,C.QZ,C.bFO,C.bE9,C.cus,C.cuq,C.bLN,C.b6V,C.cur,C.bCK,C.cer,C.cep,C.ceq,C.ceo,C.arr,C.cen,C.bMG,C.oa,C.aDz,C.jh,C.nw,C.a6Y,C.z2,C.l9,C.om,C.lX,C.z4,C.nA,C.a75,C.apP,C.b_A,C.e8Y,C.l6,C.Ea,C.er,C.iV,C.E1,C.xc,C.eG,C.lA,C.hZ,C.jA,C.a76,C.ae3,C.b_B,C.b1e,C.a1X])
u(B.kd,[C.cCi,C.bX7,C.foy,C.cDO,C.cDa,C.fu3,C.dV1,C.dV0,C.e9B,C.e9A,C.fvs,C.f8D,C.f8E,C.cam,C.can,C.cao,C.edZ,C.eMr,C.eLP,C.eLO,C.eMS,C.eMp,C.eMi,C.eMB,C.eNh,C.ffJ,C.eTf,C.eTe,C.eTI,C.e90,C.fyY,C.dQL,C.fFk,C.fvP,C.cbR,C.cbP,C.cbU,C.fwj,C.fwk,C.fwl,C.fwm,C.cbB,C.cbC,C.dDo,C.cby,C.fwi,C.f_q,C.dOX,C.cbr,C.e8H,C.ftT,C.eoD,C.ep1,C.eoZ,C.eoY,C.ep8,C.ep7,C.eqD,C.eqC,C.eoS,C.eoR,C.elr,C.emB,C.epA,C.eqV,C.eqU,C.emo,C.enz,C.el8,C.cYZ,C.erQ,C.erR,C.erM,C.erN,C.erO,C.erP,C.erU,C.cbZ,C.erp,C.erA,C.cey])
u(B.hT,[C.cCj,C.cCk,C.bMH,C.fm4,C.bX6,C.bX9,C.fBP,C.f0o,C.f0f,C.f0v,C.f7w,C.f7x,C.foz,C.fox,C.fBj,C.flL,C.fCa,C.cDE,C.cDJ,C.cDL,C.cDH,C.cDM,C.cDF,C.cDN,C.cDA,C.cDx,C.cDw,C.cDD,C.cD5,C.cD3,C.ft5,C.ft6,C.fbV,C.fu4,C.fua,C.faY,C.c6G,C.ft3,C.ft4,C.fnU,C.fnV,C.fu9,C.fu5,C.fu7,C.fu8,C.fu6,C.fFC,C.fnY,C.fnZ,C.fo1,C.fo2,C.fo5,C.fo6,C.fH4,C.f93,C.fHf,C.ecT,C.ecU,C.ecV,C.ecB,C.ecN,C.ecO,C.ecQ,C.cal,C.caj,C.cak,C.ftK,C.ftM,C.ftL,C.f8F,C.f8G,C.fHi,C.ee3,C.ee4,C.edW,C.edX,C.ee_,C.ee0,C.fHy,C.eNi,C.eMI,C.eMs,C.eMF,C.eLK,C.eLL,C.eLM,C.eLQ,C.eLR,C.eN7,C.eNe,C.eNg,C.eMR,C.eMT,C.eMX,C.eMY,C.eMZ,C.eN2,C.eMU,C.eMV,C.eM1,C.eM2,C.eM3,C.eM4,C.eM5,C.eM6,C.eM7,C.eM8,C.eM9,C.eLn,C.eLo,C.eLp,C.eLq,C.eLs,C.eLt,C.eLW,C.eLX,C.eLY,C.eLZ,C.eM_,C.eLx,C.eLy,C.eLz,C.eLA,C.eMh,C.eMA,C.fr8,C.fr7,C.cbI,C.ffI,C.fyU,C.fyN,C.fyQ,C.fwN,C.fwO,C.fwP,C.frf,C.fre,C.frd,C.frb,C.f8A,C.f8B,C.f8C,C.fHK,C.eTh,C.eTi,C.eTb,C.eT5,C.eTB,C.eTC,C.eTE,C.eTF,C.eTA,C.fHJ,C.eSX,C.feY,C.e9_,C.fyW,C.fyX,C.fyZ,C.fyS,C.fyT,C.fGX,C.dfN,C.dfT,C.e8Z,C.f56,C.f58,C.f57,C.f55,C.fsj,C.fsl,C.f75,C.fyo,C.fyp,C.fyq,C.fyB,C.fyG,C.fyH,C.fyI,C.fyJ,C.fyK,C.fyL,C.fyM,C.fyr,C.fys,C.fyt,C.fyu,C.fyv,C.fyw,C.fyx,C.fyy,C.fyz,C.fyA,C.fyC,C.fyD,C.fyE,C.fyF,C.fq9,C.few,C.fev,C.fz4,C.dQM,C.dQK,C.eS6,C.c6h,C.c6j,C.fFm,C.d57,C.d59,C.fFl,C.fFj,C.fHI,C.fvL,C.d4I,C.fo9,C.foa,C.cbG,C.cbH,C.cbF,C.cbv,C.cbw,C.cbs,C.cbt,C.cbu,C.cbX,C.cbS,C.cbN,C.cbO,C.cbQ,C.cbT,C.cbV,C.fwn,C.cbA,C.cbD,C.cbE,C.cbK,C.cbL,C.fzb,C.fyi,C.cbz,C.cbx,C.fwh,C.fh3,C.cbq,C.ePK,C.fjS,C.erg,C.enG,C.enH,C.epg,C.ep4,C.ep5,C.en3,C.er1,C.er2,C.er3,C.ems,C.eoK,C.eoM,C.eom,C.eoj,C.enC,C.enD,C.eot,C.emu,C.eoF,C.eoG,C.eoE,C.eoI,C.eoH,C.ep_,C.ep0,C.ep2,C.eoW,C.emN,C.emK,C.ep9,C.emC,C.er0,C.ela,C.emF,C.emE,C.elT,C.elY,C.elW,C.elU,C.er8,C.er9,C.era,C.er7,C.eqF,C.eqE,C.eqy,C.eqA,C.eqq,C.eqZ,C.eqX,C.eli,C.ele,C.enA,C.em1,C.elt,C.els,C.elP,C.elQ,C.en1,C.em3,C.em7,C.eoT,C.eqr,C.eqs,C.eqt,C.equ,C.emw,C.emx,C.emy,C.eo2,C.emY,C.emQ,C.emX,C.eoc,C.eod,C.eq_,C.eq1,C.eql,C.eqn,C.eq2,C.eq3,C.em_,C.enF,C.enE,C.eqP,C.emn,C.emf,C.emg,C.emj,C.emk,C.eoh,C.enl,C.enm,C.enn,C.eno,C.enp,C.enq,C.enr,C.ens,C.ent,C.enu,C.env,C.epd,C.cYW,C.cYX,C.erW,C.fz1,C.fza,C.fz0,C.fz6,C.f7v,C.fHM,C.fHN,C.fHO,C.ero,C.erx,C.el3,C.ekZ,C.el_,C.ftl,C.ftk,C.ftm,C.ftr,C.ftn,C.fto,C.f1S,C.f1T,C.e9y,C.cex])
u(B.j3,[C.cCl,C.f0k,C.f0p,C.f0q,C.f0l,C.f0m,C.f0n,C.f0d,C.f0e,C.f0g,C.f0h,C.f0u,C.f0t,C.f0j,C.f0i,C.f0r,C.f0s,C.f0x,C.f0y,C.f0w,C.cDG,C.cDK,C.cDI,C.cDy,C.cDz,C.cDB,C.cDu,C.cDv,C.cDC,C.cDt,C.cDs,C.cDr,C.cCV,C.cCU,C.cCX,C.cD4,C.cCY,C.cCW,C.cD_,C.cD0,C.cD1,C.cCZ,C.cD2,C.cD6,C.cD7,C.cD8,C.cD9,C.fnS,C.fnT,C.fnQ,C.fnR,C.e4m,C.e4k,C.e4l,C.e4n,C.e4o,C.dV_,C.fnW,C.fnX,C.fo_,C.fo0,C.fo3,C.fo4,C.e9z,C.fvS,C.fvR,C.ecS,C.ecR,C.ecv,C.ecr,C.ecC,C.ecD,C.ecE,C.ecx,C.ecy,C.ecz,C.ecA,C.ecw,C.ect,C.ecu,C.ecK,C.ecL,C.ecJ,C.ecM,C.ecI,C.ecH,C.ecG,C.ecP,C.ecF,C.ecs,C.ee2,C.edR,C.edS,C.edY,C.edT,C.edV,C.edU,C.ee1,C.eMa,C.eMy,C.eLU,C.eLV,C.eLS,C.eLT,C.eME,C.eMD,C.eMC,C.eMH,C.eMG,C.eLJ,C.eLN,C.eLI,C.eLH,C.eLE,C.eLG,C.eLF,C.eNf,C.eN8,C.eN6,C.eN9,C.eN5,C.eNa,C.eN4,C.eNb,C.eNc,C.eNd,C.eN3,C.eMQ,C.eML,C.eMW,C.eMP,C.eN_,C.eMO,C.eN0,C.eMN,C.eN1,C.eMM,C.eMv,C.eMu,C.eMw,C.eMt,C.eMx,C.eMn,C.eMm,C.eMo,C.eMl,C.eMk,C.eMj,C.eLr,C.eLm,C.eLB,C.eLw,C.eLC,C.eLv,C.eLD,C.eLu,C.eMq,C.eMe,C.eMd,C.eMf,C.eMc,C.eMg,C.eMb,C.eMz,C.eMK,C.eMJ,C.eM0,C.fyP,C.fyR,C.fyV,C.frc,C.ftD,C.ftB,C.ftC,C.eTj,C.eTk,C.eTg,C.eTa,C.eT9,C.eTc,C.eTd,C.eT_,C.eT0,C.eT2,C.eT3,C.eT4,C.eT1,C.eT6,C.eTx,C.eTy,C.eTw,C.eTz,C.eTv,C.eTu,C.eTt,C.eTD,C.eTs,C.eTr,C.eTq,C.eTG,C.eTp,C.eTH,C.eTo,C.eTn,C.eT7,C.eT8,C.eTm,C.eTl,C.eST,C.eSU,C.eSV,C.eSW,C.eSS,C.eSY,C.eSZ,C.dfM,C.dfO,C.dfR,C.dfS,C.dfQ,C.dfP,C.fsk,C.fqa,C.c6i,C.c6k,C.d50,C.d55,C.d56,C.d54,C.d53,C.d58,C.d52,C.d51,C.d5a,C.fFi,C.dbM,C.dbN,C.dbO,C.fo7,C.fo8,C.cbY,C.el4,C.el5,C.el6,C.el7,C.fh1,C.fh2,C.dOZ,C.dOY,C.d1X,C.d1W,C.eri,C.erh,C.enI,C.eqo,C.ere,C.epe,C.er4,C.er5,C.erf,C.eon,C.emq,C.emr,C.eoL,C.eol,C.eoi,C.eok,C.eoo,C.eop,C.eoq,C.eor,C.eos,C.eou,C.emv,C.eox,C.eoy,C.eoz,C.eoA,C.eoB,C.eoC,C.eow,C.eoJ,C.eoX,C.eoV,C.ep3,C.eov,C.emL,C.emM,C.emO,C.ep6,C.epa,C.elp,C.emJ,C.emH,C.epi,C.emD,C.eph,C.emt,C.en4,C.er_,C.eqp,C.elq,C.eln,C.eld,C.el9,C.elb,C.emG,C.elS,C.elX,C.elV,C.elR,C.eoU,C.erb,C.eqB,C.eqw,C.eqx,C.eqz,C.eny,C.enx,C.eqY,C.elg,C.elh,C.elj,C.elk,C.elo,C.elf,C.epf,C.er6,C.enB,C.em0,C.elc,C.en2,C.ell,C.elu,C.elv,C.elw,C.elH,C.elK,C.elL,C.elM,C.elN,C.elO,C.elx,C.ely,C.elz,C.elA,C.elB,C.elC,C.elD,C.elE,C.elF,C.elG,C.elI,C.elJ,C.en0,C.en_,C.emZ,C.elm,C.em4,C.em2,C.em5,C.em6,C.emI,C.eoP,C.eoQ,C.eoN,C.eoO,C.eqv,C.emA,C.emz,C.eo1,C.eo0,C.eo3,C.eo_,C.eo4,C.enZ,C.eo5,C.enY,C.eo6,C.enX,C.eo7,C.enW,C.eo8,C.enV,C.eo9,C.enU,C.enN,C.enO,C.enP,C.enM,C.enQ,C.enL,C.enR,C.enK,C.enS,C.enJ,C.enT,C.emV,C.emW,C.emP,C.emR,C.emS,C.emT,C.emU,C.erc,C.erd,C.eob,C.eoa,C.eoe,C.epB,C.epC,C.epD,C.epO,C.epZ,C.eq9,C.eqg,C.eqh,C.eqi,C.eqj,C.eqk,C.epE,C.epF,C.epG,C.epH,C.epI,C.epJ,C.epK,C.epL,C.epM,C.epN,C.epP,C.epQ,C.epR,C.epS,C.epT,C.epU,C.epV,C.epW,C.epX,C.epr,C.epY,C.epz,C.epy,C.eq0,C.epx,C.epn,C.eqm,C.epw,C.epm,C.epk,C.epv,C.epl,C.epj,C.eq4,C.epu,C.eq5,C.eq6,C.eq7,C.eq8,C.ept,C.eqa,C.eqb,C.eqc,C.eps,C.eqd,C.epq,C.eqe,C.epp,C.eqf,C.epo,C.elZ,C.eqI,C.eqH,C.eqJ,C.eqG,C.en7,C.en6,C.en8,C.en5,C.eqT,C.eqO,C.eqS,C.eqK,C.eqL,C.eqM,C.eqN,C.eqQ,C.eqR,C.eqW,C.emp,C.emc,C.emd,C.eme,C.emb,C.emi,C.emh,C.ema,C.em9,C.eml,C.em8,C.emm,C.eog,C.eof,C.enk,C.enj,C.eni,C.enh,C.eng,C.enf,C.ene,C.end,C.ena,C.enc,C.enb,C.en9,C.enw,C.epb,C.epc,C.cYY,C.cZk,C.cZl,C.cYS,C.cYR,C.cYV,C.cYT,C.cYU,C.erT,C.erJ,C.erS,C.erK,C.erL,C.erF,C.erG,C.erH,C.erI,C.erV,C.fz7,C.fz8,C.fz9,C.erl,C.erm,C.ern,C.erq,C.err,C.eru,C.erv,C.ert,C.erw,C.ers,C.erk,C.erj,C.ery,C.erz,C.erB,C.erC,C.el2,C.el1,C.ekY,C.el0,C.erE,C.erD,C.ftq,C.ftp,C.e9w,C.e9x])
t(C.aPS,B.H)
u(B.m1,[C.a2U,C.avK,C.aur,C.xa,C.xd,C.kL,C.t1,C.AX,C.re,C.vE,C.aqo,C.I6,C.apO,C.us,C.mo,C.hw,C.a7I])
u(C.bLN,[C.cut,C.bLO])
u(C.cer,[C.cev,C.arq])
t(C.ceu,C.cep)
t(C.cet,C.ceo)
t(C.cew,C.cet)
t(C.ces,C.ceq)
t(C.cem,C.cen)
t(C.b8t,B.oD)
t(C.coq,B.atT)
t(C.a7u,B.wY)
t(C.aUf,B.dG)
t(C.azh,B.asM)
u(B.ag,[C.a_W,C.XJ,C.XH,C.ap_,C.US,C.UV,C.a__,C.a_u,C.a_t,C.aCx,C.YS,C.ML,C.Yq,C.YL,C.an0,C.aHm,C.U6,C.ay6,C.a6O,C.Nb,C.axt,C.J6,C.ZC,C.V6,C.V7,C.aCW,C.apT,C.a6P])
u(B.ah,[C.aHF,C.awh,C.awd,C.aCl,C.aCE,C.aCI,C.aE4,C.aFZ,C.aFY,C.aKw,C.azZ,C.aK_,C.aym,C.bei,C.aJL,C.aLP,C.aJZ,C.bcc,C.aKu,C.aKI,C.aIG,C.baZ,C.aKJ,C.aCZ,C.biG,C.aCX,C.aD_,C.bip])
u(B.au,[C.awf,C.acc,C.abC,C.bhs,C.acf,C.adU,C.b_c,C.bqI,C.b_w,C.bk_,C.bpi,C.aYq,C.b_z,C.aci,C.acA,C.b_x,C.I5,C.aYt,C.bbd,C.OO,C.Je,C.bfP,C.bfO,C.bt5])
u(B.GE,[C.baG,C.bs6,C.aHZ,C.bdl,C.bpG])
u(B.mG,[C.baF,C.b7c,C.bpD,C.bac,C.bdJ,C.bfV,C.bcP,C.bdG,C.bdn,C.bma,C.b8l,C.b7Z,C.bt2,C.bq5,C.bpe,C.bcI,C.b_u,C.bob,C.bpb])
t(C.bim,C.aKw)
t(C.bhJ,C.aK_)
t(C.bhu,C.aJL)
t(C.bsz,C.aLP)
t(C.bhG,C.aJZ)
t(C.bik,C.aKu)
t(C.bvn,C.aKI)
t(C.aCY,C.bvn)
t(C.bb_,C.aIG)
t(C.aD0,C.aKJ)
t(C.bsU,B.iO)
t(C.a7H,B.km)
t(C.cez,C.b1e)
t(C.ah2,C.a1X)
u(B.WJ,[C.aPI,C.aRb])
t(C.avm,C.aPI)
w(C.aKw,B.c8)
w(C.aK_,B.c8)
w(C.aJL,B.c8)
w(C.aJZ,B.c8)
w(C.aKu,B.c8)
w(C.aLP,B.c8)
w(C.aIG,B.eR)
w(C.aKI,B.c8)
v(C.bvn,B.ev)
w(C.aKJ,B.c8)})()
B.jS(b.typeUniverse,JSON.parse('{"aQr":{"hE":["aQr"]},"nK":{"aQr":[],"hE":["aQr"]},"aPS":{"H":["QZ"],"H.E":"QZ"},"b8t":{"oD":[]},"a7u":{"wY":[],"o4":[]},"aUf":{"dG":[],"cy":[],"r":[]},"azh":{"aS":[],"d5":["aS"],"aR":[],"ct":[]},"a_W":{"ag":[],"r":[]},"aHF":{"ah":["a_W"]},"XJ":{"ag":[],"r":[]},"XH":{"ag":[],"r":[]},"awh":{"ah":["XJ"]},"awd":{"ah":["XH"]},"awf":{"au":[],"r":[]},"ap_":{"ag":[],"r":[]},"aCl":{"ah":["ap_"]},"acc":{"au":[],"r":[]},"abC":{"au":[],"r":[]},"acf":{"au":[],"r":[]},"adU":{"au":[],"r":[]},"bhs":{"au":[],"r":[]},"US":{"ag":[],"r":[]},"aCE":{"ah":["US"]},"b_c":{"au":[],"r":[]},"baG":{"aB":[]},"baF":{"aB":[]},"bs6":{"aB":[]},"b7c":{"aB":[]},"bpD":{"aB":[]},"UV":{"ag":[],"r":[]},"aCI":{"ah":["UV"]},"bac":{"aB":[]},"a__":{"ag":[],"r":[]},"aE4":{"ah":["a__"]},"bdJ":{"aB":[]},"a_u":{"ag":[],"r":[]},"a_t":{"ag":[],"r":[]},"aCx":{"ag":[],"r":[]},"YS":{"ag":[],"r":[]},"aFZ":{"ah":["a_u"]},"aFY":{"ah":["a_t"]},"bim":{"ah":["aCx"]},"bfV":{"aB":[]},"azZ":{"ah":["YS"]},"bqI":{"au":[],"r":[]},"b_w":{"au":[],"r":[]},"bk_":{"au":[],"r":[]},"ML":{"ag":[],"r":[]},"Yq":{"ag":[],"r":[]},"bhJ":{"ah":["ML"]},"bpi":{"au":[],"r":[]},"bcP":{"aB":[]},"aYq":{"au":[],"r":[]},"aym":{"ah":["Yq"]},"YL":{"ag":[],"r":[]},"bei":{"ah":["YL"]},"bdG":{"aB":[]},"bdn":{"aB":[]},"bma":{"aB":[]},"b8l":{"aB":[]},"b7Z":{"aB":[]},"bt2":{"aB":[]},"bq5":{"aB":[]},"bpe":{"aB":[]},"bcI":{"aB":[]},"an0":{"ag":[],"r":[]},"b_z":{"au":[],"r":[]},"bhu":{"ah":["an0"]},"aci":{"au":[],"r":[]},"acA":{"au":[],"r":[]},"aHm":{"ag":[],"r":[]},"U6":{"ag":[],"r":[]},"I5":{"au":[],"r":[]},"ay6":{"ag":[],"r":[]},"a6O":{"ag":[],"r":[]},"b_x":{"au":[],"r":[]},"b_u":{"aB":[]},"bsz":{"ah":["aHm"]},"aHZ":{"aB":[]},"bhG":{"ah":["U6"]},"bcc":{"ah":["ay6"]},"bik":{"ah":["a6O"]},"aYt":{"au":[],"r":[]},"bdl":{"aB":[]},"bob":{"aB":[]},"bpb":{"aB":[]},"axt":{"ag":[],"r":[]},"J6":{"ag":[],"r":[]},"ZC":{"ag":[],"r":[]},"Je":{"au":[],"r":[]},"Nb":{"ag":[],"r":[]},"aCY":{"ah":["Nb"],"ev":[]},"bb_":{"ah":["axt"]},"bbd":{"au":[],"r":[]},"baZ":{"ah":["J6"]},"OO":{"au":[],"r":[]},"aD0":{"ah":["ZC"]},"bpG":{"aB":[]},"bfP":{"au":[],"r":[]},"bfO":{"au":[],"r":[]},"V6":{"ag":[],"r":[]},"V7":{"ag":[],"r":[]},"aCW":{"ag":[],"r":[]},"apT":{"ag":[],"r":[]},"aCZ":{"ah":["V6"]},"biG":{"ah":["V7"]},"aCX":{"ah":["aCW"]},"bsU":{"iO":[]},"aD_":{"ah":["apT"]},"bt5":{"au":[],"r":[]},"a6P":{"ag":[],"r":[]},"bip":{"ah":["a6P"]},"a7H":{"km":["fq<eJ>"],"k7":["fq<eJ>"]},"ah2":{"a1X":[]},"aPI":{"iZ":[],"fd":[]},"avm":{"iZ":[],"fd":[]},"aRb":{"iZ":[],"fd":[]}}'))
var y={z:"Amri ya kifalme \xb7 bendi za muhuri juu na chini.",L:"Kichwa cha Mtu: Dollar elfu ishirini ($20,000)",f:"Mimi [Jina la Baba wa Binti], wa jamaa ya [Jina la Jamii ya Binti], Nyumba ya [Jina la Nyumba ya Binti]. Nimehowesha binti wangu aitwaye [Jina la Binti], na ndugu [Jina la Kijana], wa jamaa ya [Jina la Jamii ya Mume], Nyumba ya [Jina la Nyumba ya Mume], kijana wa [Jina la Baba wa Mume]. Makubaliano haya yanathibitishwa rasmi na pande zote mbili ili kuweka kumbukumbu na kuimarisha uhusiano mwema kati ya familia zote mbili.",O:"Mimi [Jina la Baba wa Mume], wa jamaa ya [Jina la Jamii ya Mume], Nyumba ya [Jina la Nyumba ya Mume]. Nimetowa mahali ya kuhoweya kijana wangu aitwaye [Jina la Kijana] na [Jina la Binti], binti wa [Jina la Baba wa Binti], wa jamaa ya [Jina la Jamii ya Binti], Nyumba ya [Jina la Nyumba ya Binti]. Makubaliano haya yanathibitishwa rasmi na pande zote mbili ili kuweka kumbukumbu na kuimarisha uhusiano mwema kati ya familia zote mbili.",s:"Mpaka mwembamba wa dhahabu \xb7 vichwa vya bluu ya kifalme.",Q:"Mpaka mwembamba wa dhahabu \xb7 vichwa vya dhahabu.",H:"Nguo ya kente yenye dirisha la karatasi katikati.",n:"Nguo ya udongo yenye alama \xb7 karatasi ndani.",M:'PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".',S:"The AI sent something I could not read. Try again.",g:"Your story appears here. Add a picture, then ask the AI to write it."}
var x=(function rtii(){var w=B.ax
return{bu:w("KZ"),U:w("va<pP>"),bz:w("w"),M:w("eV<n>"),bo:w("ju"),g7:w("Lu"),gc:w("ay<it?>"),bq:w("ay<~>"),cc:w("LG"),fS:w("Ds"),an:w("akC"),bm:w("P<QZ>"),X:w("P<a24>"),f3:w("P<aQr>"),aK:w("P<n1>"),V:w("P<ac>"),O:w("P<w>"),fA:w("P<ls>"),d5:w("P<ay<bu<G,+icon3d,picture(n?,n?)>>>"),bH:w("P<ay<dD>>"),fG:w("P<ay<~>>"),aF:w("P<n6>"),cd:w("P<ak<jh>>"),ez:w("P<a4<n,aC>>"),d:w("P<a4<n,@>>"),B:w("P<mk>"),h:w("P<jh>"),gE:w("P<z2>"),k:w("P<oa>"),g:w("P<lA>"),D:w("P<hZ>"),u:w("P<eG>"),m:w("P<us>"),i:w("P<hw>"),aC:w("P<a75>"),o:w("P<z4>"),e3:w("P<aC>"),dN:w("P<u>"),v:w("P<hn>"),cR:w("P<iM>"),J:w("P<j9>"),gx:w("P<oY<n>>"),f2:w("P<+(a0,n)>"),L:w("P<+(n,n)>"),aD:w("P<+data,mimeType(n,n)>"),G:w("P<+(N,N)>"),ek:w("P<+(G,n)>"),n:w("P<+(G,G)>"),r:w("P<cP>"),s:w("P<n>"),aS:w("P<iO>"),p:w("P<r>"),eR:w("P<fd>"),fT:w("P<b6V>"),bx:w("P<aDz>"),gz:w("P<ae3>"),x:w("P<N>"),t:w("P<G>"),dS:w("P<aB?>"),bA:w("P<u?>"),Z:w("P<G?>"),cA:w("P<cj>"),A:w("cp<ah<ag>>"),gL:w("ak<oa>"),R:w("ak<hZ>"),j:w("ak<@>"),bW:w("ak<G>"),e:w("bu<G,+icon3d,picture(n?,n?)>"),P:w("a4<n,@>"),f:w("a4<@,@>"),gI:w("a4<G,+icon3d,picture(n?,n?)>"),bR:w("K<hw,r>"),eC:w("K<nA,n>"),cT:w("K<jA,C>"),dv:w("K<n,n>"),f0:w("K<n,r>"),gN:w("K<G,ps>"),gh:w("K<mo,jj<mo>>"),w:w("iz"),ei:w("it"),g2:w("r4"),fB:w("E1"),b6:w("z2"),gX:w("a6Y"),dt:w("l9"),ea:w("oa"),bt:w("lA"),I:w("hZ"),F:w("eG"),fO:w("mo"),ff:w("us"),fP:w("hw"),Q:w("vE"),dO:w("apP"),a:w("cn"),C:w("aC"),dw:w("arr"),di:w("a7I"),Y:w("eJ"),fz:w("+(n,n)"),dL:w("+(G,G)"),eb:w("+claimCode,qrPayload(n?,n)"),aH:w("+icon3d,picture(n?,n?)"),cz:w("Ew"),dB:w("dw<u>"),bJ:w("dw<n>"),_:w("dZ<n>"),N:w("n"),fw:w("pP"),bO:w("ar"),K:w("bm<u>"),b:w("bm<N>"),E:w("dD"),W:w("cw<n>"),ac:w("cw<G>"),ex:w("ka<lA>"),cI:w("ka<n>"),cl:w("ka<N>"),b4:w("a2<l6>"),a8:w("a2<lX>"),fR:w("a2<+(n,n)>"),co:w("e6<u>"),l:w("r"),b2:w("bS<~>"),ev:w("pQ<dV>"),dT:w("bg<~>"),cQ:w("azh"),q:w("mU"),y:w("R"),gR:w("N"),z:w("@"),S:w("G"),at:w("b9?"),gw:w("ak<a4<n,@>>?"),aT:w("ak<hZ>?"),c:w("ak<@>?"),aP:w("it?"),af:w("hZ?"),go:w("b_B?"),a6:w("a76?"),cK:w("aC?"),bZ:w("+bytes,dataUrl,fileName(dD,n,n)?"),gl:w("+claimCode,qrPayload,token(n?,n,n)?"),T:w("n?"),dd:w("dD?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.aTR=new B.bI(A.ax,null,null,P.amg,null)
D.aU0=new B.d9(0,-0.15)
D.aU2=new B.d9(0.62,0)
D.aU5=new B.d9(-0.35,-0.45)
D.aUf=new B.d9(0.9,-0.85)
D.aK9=new B.aV(30,30)
D.aVx=new B.bp(D.aK9,D.aK9,A.ha,A.ha)
D.aVL=new B.az(A.b4,1,A.r,-1)
D.bdV=new B.w(1,0.4196078431372549,0.2901960784313726,0.2,A.t)
D.aVX=new B.az(D.bdV,1,A.r,-1)
D.aW8=new B.az(A.aE,1.5,A.r,-1)
D.aWd=new B.az(A.b4,1.6,A.r,-1)
D.aWt=new B.az(A.aE,1.4,A.r,-1)
D.aXR=new B.o(null,null,null,null,null,K.G8,A.a6)
D.bS6=new B.a7(A.a3,A.a7,A.x,G.a1Y,null,null)
D.aXZ=new B.o(null,null,null,null,null,D.bS6,A.a6)
D.a9O=new B.o(A.aA,null,null,A.rC,null,null,A.n)
D.b89=new B.w(1,0.16862745098039217,0.22745098039215686,0.3333333333333333,A.t)
D.bdT=new B.w(1,0.0392156862745098,0.058823529411764705,0.10196078431372549,A.t)
D.cOI=w([D.b89,D.bdT],x.O)
D.e8R=new B.bR(A.A,0.5,A.x,null,0,D.cOI,null,null)
D.aYh=new B.o(null,null,null,null,null,D.e8R,A.a6)
D.W1=new B.w(1,0.054901960784313725,0.08235294117647059,0.14901960784313725,A.t)
D.aWJ=new B.bP(O.uz,A.Y,A.Y,A.Y)
D.aYj=new B.o(D.W1,null,D.aWJ,null,null,null,A.n)
D.bTO=new B.a7(A.a3,A.a7,A.x,A.Pj,null,null)
D.aYq=new B.o(null,null,null,null,null,D.bTO,A.a6)
D.abg=new B.w(1,0.058823529411764705,0.058823529411764705,0.0784313725490196,A.t)
D.aYs=new B.o(D.abg,null,null,A.rD,null,null,A.n)
D.aYw=new B.o(A.k9,null,null,null,null,null,A.a6)
D.aWQ=new B.bP(A.zH,A.Y,A.Y,A.Y)
D.aYz=new B.o(A_.ach,null,D.aWQ,A.lX,null,null,A.n)
D.Dq=new B.o(A.dS,null,null,null,null,null,A.a6)
D.aYG=new B.o(null,null,null,null,null,E.vw,A.a6)
D.cTo=w([E.ad4,A.bX],x.O)
D.bTq=new B.a7(A.b0,A.b6,A.x,D.cTo,null,null)
D.aYK=new B.o(null,null,null,A.lX,null,D.bTq,A.n)
D.d2A=w([A.bi,A.dS,A.jH],x.O)
D.a08=new B.a7(A.ax,A.aD,A.x,D.d2A,null,null)
D.aYX=new B.o(null,null,null,null,null,D.a08,A.n)
D.aYY=new B.o(D.abg,null,null,A.kw,null,null,A.n)
D.cjQ=w([A.dp,A.bi],x.O)
D.bTi=new B.a7(A.ax,A.aD,A.x,D.cjQ,null,null)
D.aZ1=new B.o(null,null,null,null,null,D.bTi,A.n)
D.aZb=new B.o(null,null,null,null,null,G.tL,A.a6)
D.aZu=new B.o(A.ad5,null,null,null,null,null,A.a6)
D.b8T=new B.w(0.5647058823529412,0,0,0,A.t)
D.a9Y=new B.ac(0,A.G,D.b8T,A.R8,28)
D.b0B=new B.aUs()
D.b1a=new C.coq()
D.b1m=new C.b8t()
D.aat=new B.cq(A.A,null,null,A.a_Y,null)
D.b3P=new B.fh(null,null,null,null,null,E.mO,null,null,null,null)
D.b1T=new B.cq(A.A,null,null,D.b3P,null)
D.bDe=new B.ae(A.dW,28,A.c,null,null,null)
D.b2l=new B.cq(A.A,null,null,D.bDe,null)
D.b3M=new B.fh(2,null,null,null,null,A.bU,null,null,null,null)
D.b2H=new B.cq(A.A,null,null,D.b3M,null)
D.bDy=new B.ae(K.N_,40,A.bL,null,null,null)
D.b2I=new B.cq(A.A,null,null,D.bDy,null)
D.b4B=new B.w(1,1,0.9019607843137255,0.6549019607843137,A.t)
D.b4O=new B.w(1,0.10588235294117647,0.13333333333333333,0.19607843137254902,A.t)
D.b5c=new B.w(1,0.08235294117647059,0.10196078431372549,0.14901960784313725,A.t)
D.b5i=new B.w(1,0.10980392156862745,0.07450980392156863,0.054901960784313725,A.t)
D.b5O=new B.w(1,0.47843137254901963,0.41568627450980394,0.27058823529411763,A.t)
D.b64=new B.w(0.8,1,0.9450980392156862,0.9490196078431372,A.t)
D.b65=new B.w(0.0784313725490196,0.788235294117647,0.6352941176470588,0.15294117647058825,A.t)
D.K3=new B.w(1,0.0392156862745098,0.08235294117647059,0.14901960784313725,A.t)
D.b6u=new B.w(0.2,0.9607843137254902,0.6196078431372549,0.043137254901960784,A.t)
D.b6z=new B.w(0.13333333333333333,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.t)
D.abz=new B.w(1,0.1411764705882353,0.09411764705882353,0.07058823529411765,A.t)
D.b7h=new B.w(1,0.22745098039215686,0.16470588235294117,0.10196078431372549,A.t)
D.b7Z=new B.w(1,0.9098039215686274,0.9333333333333333,0.9647058823529412,A.t)
D.abN=new B.w(1,1,1,0.9725490196078431,A.t)
D.b8g=new B.w(0,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.t)
D.b8r=new B.w(1,1,0.5490196078431373,0.10196078431372549,A.t)
D.b8u=new B.w(0.6,0.9098039215686274,0.7058823529411765,0.7215686274509804,A.t)
D.b8E=new B.w(0.4,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.t)
D.b8Y=new B.w(1,1,0.9568627450980393,0.8392156862745098,A.t)
D.bag=new B.w(1,1,0.996078431372549,0.9725490196078431,A.t)
D.VK=new B.w(0.8509803921568627,0,0,0,A.t)
D.bao=new B.w(1,0.0784313725490196,0.06666666666666667,0.047058823529411764,A.t)
D.bau=new B.w(1,0.0784313725490196,0.06666666666666667,0.0392156862745098,A.t)
D.acx=new B.w(0.6,0,0,0,A.t)
D.acz=new B.w(0,1,0.7019607843137254,0.2784313725490196,A.t)
D.bbT=new B.w(1,0.12156862745098039,0.10196078431372549,0.058823529411764705,A.t)
D.rZ=new B.w(1,0.08235294117647059,0.12156862745098039,0.21176470588235294,A.t)
D.bch=new B.w(1,0.35294117647058826,0.41568627450980394,0.5215686274509804,A.t)
D.bcI=new B.w(1,1,0.8784313725490196,0.6392156862745098,A.t)
D.bd4=new B.w(0.4,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.t)
D.adg=new B.w(1,0.47843137254901963,0.23137254901960785,0.2901960784313726,A.t)
D.Wb=new B.w(0,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.t)
D.Af=new B.w(1,0.5411764705882353,0.39215686274509803,0.09019607843137255,A.t)
D.Kw=new B.w(1,0.0784313725490196,0.09803921568627451,0.16470588235294117,A.t)
D.j0=new B.w(1,0.07058823529411765,0.12941176470588237,0.23921568627450981,A.t)
D.adE=new B.w(0,1,0.9686274509803922,0.8392156862745098,A.t)
D.Wl=new B.w(1,0.2901960784313726,0.17254901960784313,0.10588235294117647,A.t)
D.bgf=new B.w(1,0.24705882352941178,0.16470588235294117,0.0392156862745098,A.t)
D.bgI=new B.w(0.6,1,0.9686274509803922,0.9019607843137255,A.t)
D.bgW=new B.w(0.6,1,0.984313725490196,0.9215686274509803,A.t)
D.WE=new B.w(1,0.07450980392156863,0.10980392156862745,0.2,A.t)
D.bhZ=new B.w(1,0.8627450980392157,0.9215686274509803,0.9803921568627451,A.t)
D.x0=new B.w(1,0.9137254901960784,0.7686274509803922,0.41568627450980394,A.t)
D.biq=new B.w(1,0.058823529411764705,0.0784313725490196,0.12549019607843137,A.t)
D.biI=new B.hD(A.b5,!0,null,null)
D.f1x=new B.F(!0,A.az,null,null,null,null,22,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqG=new B.x("Bio link",null,D.f1x,null,null,null,null,null,null,null,null,null)
D.b2B=new B.cq(A.A,null,null,D.fqG,null)
D.biY=new B.hD(A.V7,!0,D.b2B,null)
D.KV=new C.a2U(0,"none")
D.aeI=new C.a2U(1,"deflate")
D.aeJ=new C.a2U(2,"bzip2")
D.bjE=new B.kf(0.165,0.84,0.44,1)
D.cTH=w([A.cb,A.dO,A.aE],x.O)
D.bSz=new B.a7(A.ax,A.aD,A.x,D.cTH,null,null)
D.aXW=new B.o(null,null,null,null,null,D.bSz,A.n)
D.bMj=new B.ae(A.eR,null,A.ad,null,null,null)
D.b3c=new B.cq(A.A,null,null,D.bMj,null)
D.bkb=new B.kI(D.aXW,A.bd,D.b3c,null)
D.bgv=new B.w(0.058823529411764705,1,1,1,A.t)
D.cWJ=w([A.bF,A.qt,A.qt,D.bgv],x.O)
D.cAQ=w([0,0.32,0.7,1],x.x)
D.bT7=new B.a7(A.ax,A.aD,A.x,D.cWJ,D.cAQ,null)
D.aXL=new B.o(null,null,null,null,null,D.bT7,A.n)
D.bkh=new B.kI(D.aXL,A.bd,null,null)
D.blh=new B.mb(1,1,null,null,null,A.bl,null)
D.blk=new B.mb(1,null,null,null,null,D.Wl,null)
D.blO=new B.b9(125e4)
D.blU=new B.b9(17e4)
D.bm3=new B.b9(35964e8)
D.bm9=new B.b9(55e4)
D.bmd=new B.b9(68e4)
D.bmE=new B.i9(0,0,0,5)
D.bmV=new B.Q(0,16,16,0)
D.bmY=new B.Q(0,18,0,8)
D.bn5=new B.Q(0,36,0,36)
D.bnc=new B.Q(0,54,0,0)
D.bnj=new B.Q(10,0,10,3)
D.bnu=new B.i9(10,16,10,10)
D.bnG=new B.Q(10,6,4,6)
D.bnJ=new B.Q(10,8,10,6)
D.afE=new B.Q(11,8,11,11)
D.bnO=new B.Q(12,0,12,10)
D.bnP=new B.Q(12,0,12,24)
D.bo0=new B.Q(12,12,12,4)
D.bo3=new B.Q(12,12,8,12)
D.boi=new B.Q(12,8,8,12)
D.boF=new B.Q(14,14,14,0)
D.boK=new B.Q(14,14,14,90)
D.bp2=new B.Q(16,10,16,16)
D.bp3=new B.Q(16,10,16,20)
D.agr=new B.Q(16,6,16,28)
D.bpC=new B.Q(18,0,18,10)
D.bpE=new B.Q(18,0,18,30)
D.bpG=new B.Q(18,10,18,12)
D.bpH=new B.Q(18,10,18,14)
D.bpY=new B.Q(18,16,14,18)
D.bq2=new B.Q(18,18,18,12)
D.bq8=new B.Q(18,26,18,12)
D.bqd=new B.Q(18,34,18,34)
D.bqe=new B.Q(18,4,18,14)
D.bqk=new B.Q(18,8,18,24)
D.bqC=new B.Q(20,16,14,4)
D.bqH=new B.Q(20,18,12,4)
D.bqM=new B.Q(20,20,12,20)
D.bqP=new B.Q(20,22,20,20)
D.bqU=new B.Q(20,6,20,6)
D.br2=new B.Q(22,18,22,18)
D.bra=new B.Q(22,24,22,0)
D.brd=new B.Q(22,24,22,4)
D.brl=new B.Q(22,60,22,22)
D.brr=new B.Q(24,24,24,22)
D.brB=new B.Q(26,10,60,10)
D.brI=new B.Q(28,44,28,44)
D.brZ=new B.Q(32,44,32,44)
D.bs6=new B.Q(38,30,38,20)
D.bsb=new B.Q(4,0,0,6)
D.bsn=new B.i9(4,4,4,4)
D.bsN=new B.i9(6,5,6,5)
D.bsR=new B.Q(6,6,8,6)
D.bt1=new B.Q(8,14,8,14)
D.bt2=new B.Q(8,22,8,22)
D.btb=new B.Q(8,6,12,6)
D.btk=new B.Q(8,8,8,4)
D.ahj=new B.Q(9,9,9,6)
D.btt=new B.i9(2.5,2.5,2.5,2.5)
D.btu=new B.Q(10.5,0,10.5,0)
D.btv=new B.Q(7,1.5,7,1.5)
D.cLZ=w([0.393,0.769,0.189,0,0,0.349,0.686,0.168,0,0,0.272,0.534,0.131,0,0,0,0,0,1,0],x.x)
D.btL=new B.ys(null,null,D.cLZ,A.zU)
D.cJa=w([0.2126,0.7152,0.0722,0,0,0.2126,0.7152,0.0722,0,0,0.2126,0.7152,0.0722,0,0,0,0,0,1,0],x.x)
D.btM=new B.ys(null,null,D.cJa,A.zU)
D.aON=new B.F(!0,A.az,null,null,null,null,11,A.u,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fq0=new B.x("WORD DESIGN",null,D.aON,null,null,null,null,null,null,null,null,null)
D.bug=new B.bF(1,A.bj,D.fq0,null)
D.fpH=new B.x("Slides database",null,Ab.vZ,null,null,null,null,null,null,null,null,null)
D.fn0=new B.x("Admin only \xb7 keep as many as you like",null,U.aOi,null,null,null,null,null,null,null,null,null)
D.da9=w([D.fpH,A.bA,D.fn0],x.p)
D.bjm=new B.fp(A.ai,A.e,A.j,A.F,null,A.p,null,0,D.da9,null)
D.buj=new B.bF(1,A.bj,D.bjm,null)
D.fhK=new B.x("NGMY logo",null,A.fX,null,null,null,null,null,null,null,null,null)
D.bum=new B.bF(1,A.bj,D.fhK,null)
D.f_r=new B.F(!0,A.ad,null,null,null,null,12,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frU=new B.x("TALK TO THE EDITOR",null,D.f_r,null,null,null,null,null,null,null,null,null)
D.buB=new B.bF(1,A.bj,D.frU,null)
D.fbH=new B.x("Tell the AI what to change",null,Ab.vZ,null,null,null,null,null,null,null,null,null)
D.buV=new B.bF(1,A.bj,D.fbH,null)
D.bvM=new B.Dh(!0,"video/mp4")
D.eYK=new B.F(!0,A.c,null,null,null,null,16,A.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f9U=new B.x("Move presentations between devices",null,D.eYK,null,null,null,!1,null,null,1,null,null)
D.bvQ=new B.q8(A.eg,A.a3,A.f,D.f9U,null)
D.faX=new B.x("Edit in Slides",null,A.ji,null,null,null,null,null,null,null,null,null)
D.bvR=new B.q8(A.eg,A.A,A.f,D.faX,null)
D.bw5=new B.dm(1,A.ci,D.bvR,null)
D.Zs=new B.a0(60988,"MaterialIcons",!1)
D.byO=new B.a0(61352,"MaterialIcons",!1)
D.aiP=new B.a0(61531,"MaterialIcons",!1)
D.bA_=new B.a0(63062,"MaterialIcons",!1)
D.bA7=new B.a0(63109,"MaterialIcons",!1)
D.bAi=new B.a0(63206,"MaterialIcons",!1)
D.ajy=new B.a0(63238,"MaterialIcons",!1)
D.ZY=new B.a0(63365,"MaterialIcons",!1)
D.ZZ=new B.a0(63367,"MaterialIcons",!1)
D.a__=new B.a0(63368,"MaterialIcons",!1)
D.ajK=new B.a0(63384,"MaterialIcons",!1)
D.bAS=new B.a0(63525,"MaterialIcons",!1)
D.bAV=new B.a0(63568,"MaterialIcons",!1)
D.bBf=new B.a0(983072,"MaterialIcons",!1)
D.bBD=new B.a0(983271,"MaterialIcons",!0)
D.akW=new B.a0(983965,"MaterialIcons",!1)
D.akX=new B.a0(983966,"MaterialIcons",!1)
D.bCA=new B.a0(984592,"MaterialIcons",!1)
D.bCS=new B.ae(A.tx,16,A.az,null,null,null)
D.bCZ=new B.ae(A.mh,null,A.c,null,null,null)
D.al6=new B.ae(A.pF,18,A.c,null,null,null)
D.bDf=new B.ae(A.B_,18,N.l1,null,null,null)
D.bDU=new B.ae(A.jb,11,null,null,null,null)
D.bE3=new B.ae(A.ZI,null,A.ex,null,null,null)
D.bEC=new B.ae(A.qO,18,A.az,null,null,null)
D.bEI=new B.ae(A2.Bc,14,null,null,null,null)
D.bEJ=new B.ae(A.e4,28,A.cr,null,null,null)
D.bEV=new B.ae(A.pG,20,A.c,null,null,null)
D.bF1=new B.ae(A.xU,null,null,null,null,null)
D.bF7=new B.ae(A.j9,18,A.hu,null,null,null)
D.bFc=new B.ae(A.l7,null,null,null,null,null)
D.bFF=new B.ae(A.a_e,28,A.c,null,null,null)
D.bA2=new B.a0(63065,"MaterialIcons",!1)
D.bFO=new B.ae(D.bA2,15,A.c,null,null,null)
D.bA8=new B.a0(63113,"MaterialIcons",!1)
D.bFU=new B.ae(D.bA8,null,A.ad,null,null,null)
D.bGh=new B.ae(A.ve,22,A.bJ,null,null,null)
D.bGB=new B.ae(A.vf,18,null,null,null,null)
D.bGH=new B.ae(A.Bf,12,A.c,null,null,null)
D.bCc=new B.a0(983687,"MaterialIcons",!1)
D.bGS=new B.ae(D.bCc,null,A.bi,null,null,null)
D.bGZ=new B.ae(A.hx,null,A.bi,null,null,null)
D.bHh=new B.ae(A.oC,22,A.c,null,null,null)
D.bHl=new B.ae(A.cy,13,A.c,null,null,null)
D.bHr=new B.ae(A.e4,26,A.aB,null,null,null)
D.bHu=new B.ae(A.qT,26,A.c,null,null,null)
D.Nc=new B.ae(A.jb,8,A.c,null,null,null)
D.bHM=new B.ae(A.pF,40,A.c,null,null,null)
D.bHN=new B.ae(A.bxL,null,null,null,null,null)
D.bHR=new B.ae(A.tF,20,null,null,null,null)
D.bCb=new B.a0(983683,"MaterialIcons",!1)
D.bI0=new B.ae(D.bCb,null,A.aZ,null,null,null)
D.bI1=new B.ae(A.jb,16,A.bi,null,null,null)
D.bIm=new B.ae(A.qU,null,null,null,null,null)
D.alF=new B.ae(A.vh,22,A.c,null,null,null)
D.bIq=new B.ae(A.dW,17,A.c,null,null,null)
D.alG=new B.ae(A.jb,9,A.c,null,null,null)
D.bIv=new B.ae(A.vb,null,null,null,null,null)
D.by1=new B.a0(57744,"MaterialIcons",!1)
D.bIC=new B.ae(D.by1,null,null,null,null,null)
D.bIF=new B.ae(A.vb,16,null,null,null,null)
D.bCJ=new B.a0(985181,"MaterialIcons",!1)
D.G_=new B.ae(D.bCJ,null,null,null,null,null)
D.bIR=new B.ae(A.l7,16,A.bJ,null,null,null)
D.bC4=new B.a0(983615,"MaterialIcons",!1)
D.bIT=new B.ae(D.bC4,12,A.c,null,null,null)
D.alM=new B.ae(A.xB,16,null,null,null,null)
D.bJ0=new B.ae(A.dW,21,A.c,null,null,null)
D.bJ5=new B.ae(A.hx,17,A.c,null,null,null)
D.bJ6=new B.ae(A.ve,null,null,null,null,null)
D.bJl=new B.ae(A.a_C,20,A.az,null,null,null)
D.bJA=new B.ae(A.pE,22,E.mO,null,null,null)
D.bJH=new B.ae(A.pD,13,A.ad,null,null,null)
D.bJJ=new B.ae(A.akI,20,A.az,null,null,null)
D.bxJ=new B.a0(57495,"MaterialIcons",!1)
D.bJO=new B.ae(D.bxJ,null,null,null,null,null)
D.bJS=new B.ae(A.nN,18,A.c,null,null,null)
D.bKc=new B.ae(A.tJ,28,A.c,null,null,null)
D.bKm=new B.ae(D.ajy,null,A.aE,null,null,null)
D.bKn=new B.ae(A.pG,22,A.c,null,null,null)
D.alV=new B.ae(A.Zo,16,null,null,null,null)
D.bL8=new B.ae(A.ve,32,A.c,null,null,null)
D.bLR=new B.ae(A.iR,22,A.c,null,null,null)
D.bLV=new B.ae(A.qT,22,A.ad,null,null,null)
D.am9=new B.ae(A.tx,null,A.c_,null,null,null)
D.bMO=new B.ae(A.tw,18,null,null,null,null)
D.bNp=new B.ae(A.dW,18,A.cp,null,null,null)
D.a00=new B.ae(A.cy,18,A.az,null,null,null)
D.bNv=new B.ae(A.akC,null,null,null,null,null)
D.bNV=new B.e0(null,null,null,null,null,null,null,null,null,null,"Type here\u2026",null,A.aOA,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.ev,!0,null,null,null,null)
D.eR6=new B.F(!0,A.bI,null,null,null,null,null,A.cs,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bOc=new B.e0(null,null,null,null,null,null,null,null,null,null,"Type here\u2026",null,D.eR6,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,A.ag,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.ev,!0,null,null,null,null)
D.bOD=new B.e0(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"",null,null,null,null,null,null,null,null,null,null,null,A.ev,!0,null,null,null,null)
D.cPE=w([A.dS,A.aE],x.O)
D.bQn=new B.a7(A.a3,A.a7,A.x,D.cPE,null,null)
D.bQz=new B.a7(A.b0,A.b6,A.Te,A.atd,null,null)
D.b52=new B.w(1,0.5568627450980392,0.5411764705882353,0.5215686274509804,A.t)
D.b90=new B.w(1,0.23529411764705882,0.22745098039215686,0.21568627450980393,A.t)
D.bbU=new B.w(1,0.7254901960784313,0.7058823529411765,0.6784313725490196,A.t)
D.b79=new B.w(1,0.1803921568627451,0.17254901960784313,0.16470588235294117,A.t)
D.cAS=w([D.b52,D.b90,D.bbU,D.b79],x.O)
D.bQS=new B.a7(A.ax,A.aD,A.x,D.cAS,A.Gy,null)
D.dag=w([A.cv,A.bz,A.b4],x.O)
D.bQU=new B.a7(A.b0,A.b6,A.Te,D.dag,null,null)
D.dbz=w([A.bi,A.c8],x.O)
D.bQY=new B.a7(A.a3,A.a7,A.x,D.dbz,null,null)
D.d6P=w([A.ht,A.da,A.aI],x.O)
D.bR_=new B.a7(A.ax,A.aD,A.x,D.d6P,null,null)
D.cVf=w([A.cY,A.f6],x.O)
D.bR3=new B.a7(A.a3,A.a7,A.x,D.cVf,null,null)
D.dab=w([N.l1,A.da],x.O)
D.amV=new B.a7(A.a3,A.a7,A.x,D.dab,null,null)
D.b9y=new B.w(1,0.9686274509803922,0.8901960784313725,0.6313725490196078,A.t)
D.da8=w([D.b9y,D.x0,A.bU],x.O)
D.bR8=new B.a7(A.a3,A.a7,A.x,D.da8,null,null)
D.cRe=w([A.bc,A.d_,A.ff],x.O)
D.bR9=new B.a7(A.ax,A.aD,A.x,D.cRe,null,null)
D.Nq=new B.a7(A.a3,A.a7,A.x,A.GM,null,null)
D.bhh=new B.w(1,0.9019607843137255,0.7568627450980392,0.3607843137254902,A.t)
D.ctZ=w([D.bhh,A.bU,A.j2],x.O)
D.an_=new B.a7(A.ax,A.aD,A.x,D.ctZ,null,null)
D.d_f=w([A.wP,A.av,D.Af],x.O)
D.bS7=new B.a7(A.a3,A.a7,A.x,D.d_f,null,null)
D.bir=new B.w(1,0.43137254901960786,0.41568627450980394,0.396078431372549,A.t)
D.b7Y=new B.w(1,0.6627450980392157,0.6431372549019608,0.615686274509804,A.t)
D.bcV=new B.w(1,0.3333333333333333,0.3215686274509804,0.3058823529411765,A.t)
D.cQo=w([D.bir,D.b7Y,D.bcV],x.O)
D.an0=new B.a7(A.a3,A.a7,A.x,D.cQo,null,null)
D.b9A=new B.w(1,0.0392156862745098,0.06666666666666667,0.13333333333333333,A.t)
D.bU3=w([Av.aeq,D.b9A],x.O)
D.bSg=new B.a7(A.b0,A.b6,A.x,D.bU3,null,null)
D.cOw=w([A.mM,A.bL],x.O)
D.bSk=new B.a7(A.b0,A.b6,A.x,D.cOw,null,null)
D.d40=w([A.aE,A.dO],x.O)
D.bSq=new B.a7(A.a3,A.a7,A.x,D.d40,null,null)
D.adq=new B.w(1,0.1803921568627451,0.25882352941176473,0.4392156862745098,A.t)
D.auU=w([D.adq,D.j0,D.K3],x.O)
D.bSS=new B.a7(A.ax,A.aD,A.x,D.auU,null,null)
D.ctR=w([A.dv,A.dJ],x.O)
D.bT2=new B.a7(A.b0,A.b6,A.x,D.ctR,null,null)
D.d1h=w([A.uE,Ay.E3],x.O)
D.bTQ=new B.a7(A.a3,A.a7,A.x,D.d1h,null,null)
D.fje=new B.x("Which Bio link?",null,A.cu,null,null,null,null,null,null,null,null,null)
D.bU0=new B.py(null,D.fje,null,null,null,null,null,null,null,null,!0,null,null,!1,null,null,null,!1,null,null,null,null,null,null,null,null,!0,null,null)
D.yk=w([82,9,106,213,48,54,165,56,191,64,163,158,129,243,215,251,124,227,57,130,155,47,255,135,52,142,67,68,196,222,233,203,84,123,148,50,166,194,35,61,238,76,149,11,66,250,195,78,8,46,161,102,40,217,36,178,118,91,162,73,109,139,209,37,114,248,246,100,134,104,152,22,212,164,92,204,93,101,182,146,108,112,72,80,253,237,185,218,94,21,70,87,167,141,157,132,144,216,171,0,140,188,211,10,247,228,88,5,184,179,69,6,208,44,30,143,202,63,15,2,193,175,189,3,1,19,138,107,58,145,17,65,79,103,220,234,151,242,207,206,240,180,230,115,150,172,116,34,231,173,53,133,226,249,55,232,28,117,223,110,71,241,26,113,29,41,197,137,111,183,98,14,170,24,190,27,252,86,62,75,198,210,121,32,154,219,192,254,120,205,90,244,31,221,168,51,136,7,199,49,177,18,16,89,39,128,236,95,96,81,127,169,25,181,74,13,45,229,122,159,147,201,156,239,160,224,59,77,174,42,245,176,200,235,187,60,131,83,153,97,23,43,4,126,186,119,214,38,225,105,20,99,85,33,12,125],x.t)
D.a3P=new C.kL(2,"elegantNavy")
D.fQa=w([A.W9,D.j0,A.bU],x.O)
D.jx=new C.xa(0,"classic")
D.a3C=new C.jh("kuhowa_elegant_navy","Kuhowa \u2014 Bluu ya Kifalme",y.s,D.a3P,4294967035,4279378237,4290283019,D.jx)
D.aDV=new C.kL(3,"elegantGold")
D.b4A=new B.w(1,1,0.9882352941176471,0.9529411764705882,A.t)
D.b5x=new B.w(1,0.6509803921568628,0.5176470588235295,0.22745098039215686,A.t)
D.ac7=new B.w(1,0.4196078431372549,0.2901960784313726,0.07058823529411765,A.t)
D.fPD=w([D.b4A,D.b5x,D.ac7],x.O)
D.a3A=new C.jh("kuhowa_elegant_gold","Kuhowa \u2014 Dhahabu",y.Q,D.aDV,4294966515,4281016592,4289102906,D.jx)
D.dwd=new C.kL(22,"goldRibbon")
D.fPz=w([A.W9,D.j0,A.hU],x.O)
D.a3t=new C.jh("kuhowa_gold_ribbon","Utepe wa Dhahabu","Pembe za bluu na dhahabu \xb7 almasi kati ya kila upande.",D.dwd,4294967035,4279378237,4291404327,D.jx)
D.dwe=new C.kL(23,"goldBaroque")
D.acG=new B.w(1,1,0.9647058823529412,0.8941176470588236,A.t)
D.fPF=w([D.acG,A.av,A.j2],x.O)
D.a3u=new C.jh("kuhowa_gold_baroque","Ukanda wa Dhahabu","Ukanda mzito wa dhahabu \xb7 rosette kwenye pembe.",D.dwe,4294964964,4283053072,4292128567,D.jx)
D.dwg=new C.kL(4,"elegantEmerald")
D.b6F=new B.w(1,0.9647058823529412,0.984313725490196,0.9725490196078431,A.t)
D.b7w=new B.w(1,0.054901960784313725,0.23137254901960785,0.1803921568627451,A.t)
D.fPL=w([D.b6F,D.b7w,A.hU],x.O)
D.a3v=new C.jh("kuhowa_elegant_emerald","Kuhowa \u2014 Zumaridi","Mpaka mwembamba wa dhahabu \xb7 vichwa vya kijani ya zumaridi.",D.dwg,4294376440,4279122734,4291404327,D.jx)
D.dwh=new C.kL(5,"elegantBurgundy")
D.baU=new B.w(1,1,0.9686274509803922,0.9647058823529412,A.t)
D.fPS=w([D.baU,A.abr,A.hU],x.O)
D.a3y=new C.jh("kuhowa_elegant_burgundy","Kuhowa \u2014 Mvinyo","Mpaka mwembamba wa dhahabu \xb7 vichwa vya rangi ya mvinyo.",D.dwh,4294965238,4283043359,4291404327,D.jx)
D.dwa=new C.kL(19,"goldFiligree")
D.KD=new B.w(1,1,0.984313725490196,0.9529411764705882,A.t)
D.fPG=w([D.KD,A.av,A.j2],x.O)
D.a3w=new C.jh("kuhowa_gold_filigree","Dhahabu ya Filigree","Mpaka wa dhahabu mara tatu \xb7 pembe za mapambo.",D.dwa,4294966259,4279378237,4292128567,D.jx)
D.dwb=new C.kL(20,"goldLaurel")
D.bh7=new B.w(1,0.47843137254901963,0.3607843137254902,0.0784313725490196,A.t)
D.fPT=w([A.JX,A.hU,D.bh7],x.O)
D.a3x=new C.jh("kuhowa_gold_laurel","Taji ya Dhahabu","Majani ya dhahabu kando \xb7 almasi kwenye pembe.",D.dwb,4294966776,4282000405,4291404327,D.jx)
D.dwc=new C.kL(21,"goldCrest")
D.abj=new B.w(1,1,0.9725490196078431,0.9254901960784314,A.t)
D.bhe=new B.w(1,0.4196078431372549,0.30980392156862746,0.07058823529411765,A.t)
D.fPI=w([D.abj,A.av,D.bhe],x.O)
D.a3B=new C.jh("kuhowa_gold_crest","Muhuri wa Dhahabu","Medali za dhahabu kwenye pembe \xb7 shanga za lulu.",D.dwc,4294965484,4283053072,4292128567,D.jx)
D.dwf=new C.kL(24,"goldStar")
D.bil=new B.w(1,1,0.9882352941176471,0.9647058823529412,A.t)
D.fPM=w([D.bil,A.av,D.j0],x.O)
D.a3z=new C.jh("kuhowa_gold_star","Nyota ya Dhahabu","Nyota za dhahabu kwenye pembe \xb7 mstari wa bluu ndani.",D.dwf,4294966518,4279378237,4292128567,D.jx)
D.Ga=w([D.a3C,D.a3A,D.a3t,D.a3u,D.a3v,D.a3y,D.a3w,D.a3x,D.a3B,D.a3z],x.h)
D.pS=new C.mo(0,"blank")
D.QY=new C.mo(1,"title")
D.mp=new C.mo(2,"titleContent")
D.dQQ=new C.mo(3,"twoColumn")
D.C9=new C.mo(4,"section")
D.dQR=new C.mo(5,"comparison")
D.Hl=new C.mo(6,"flashcard")
D.Hm=new C.mo(7,"quiz")
D.Hn=new C.mo(8,"worksheet")
D.anm=w([D.pS,D.QY,D.mp,D.dQQ,D.C9,D.dQR,D.Hl,D.Hm,D.Hn],B.ax("P<mo>"))
D.bUg=w([0,0,0],x.cA)
D.avR=w([Ao.Vu,A.dJ],x.O)
D.ki=w([A.bU,A.bJ,A.hT,A.hD,D.Af],x.O)
D.ds7=new C.iV("fireworks","Royal Fireworks","Thank you for celebrating with us",D.avR,D.ki)
D.bhp=new B.w(1,0.2901960784313726,0.050980392156862744,0.11764705882352941,A.t)
D.baS=new B.w(1,0.07058823529411765,0.011764705882352941,0.0392156862745098,A.t)
D.cOJ=w([D.bhp,D.baS],x.O)
D.drZ=new C.iV("confetti","Golden Confetti","Together we rise",D.cOJ,D.ki)
D.cM3=w([A.nq,A.Va],x.O)
D.ds_=new C.iV("crown","Crown of Glory","Built for our community",D.cM3,D.ki)
D.b7P=new B.w(1,0.011764705882352941,0.10588235294117647,0.1803921568627451,A.t)
D.baw=new B.w(1,0.00392156862745098,0.023529411764705882,0.058823529411764705,A.t)
D.cSv=w([D.b7P,D.baw],x.O)
D.tN=w([A.bI,A.aP,A.c,A.aL,A.ak],x.O)
D.drU=new C.iV("aurora","Aurora Gala","A brighter future, together",D.cSv,D.tN)
D.bbW=new B.w(1,0.027450980392156862,0.01568627450980392,0.00392156862745098,A.t)
D.d1n=w([G.aaY,D.bbW],x.O)
D.dsa=new C.iV("champagne","Champagne Toast","Cheers to every member",D.d1n,D.ki)
D.dsb=new C.iV("diamonds","Diamond Rain","Every member is a jewel",Y.awp,D.tN)
D.b5o=new B.w(1,0.3568627450980392,0.16470588235294117,0.023529411764705882,A.t)
D.ba2=new B.w(1,0.10196078431372549,0.043137254901960784,0.00784313725490196,A.t)
D.d68=w([D.b5o,D.ba2],x.O)
D.drP=new C.iV("starburst","Golden Starburst","Thank you!",D.d68,D.ki)
D.bU9=w([A.f5,A.wT],x.O)
D.ab5=new B.w(1,0.615686274509804,0.3058823529411765,0.3607843137254902,A.t)
D.OY=w([A.oj,A.il,A.uQ,A.oc,D.ab5],x.O)
D.dsi=new C.iV("balloons","Luxury Balloons","Let's celebrate",D.bU9,D.OY)
D.cLn=w([A.Vi,A.w],x.O)
D.ds6=new C.iV("galaxy","Galaxy Spiral","The sky is not the limit",D.cLn,D.tN)
D.bfA=new B.w(1,0.047058823529411764,0.00392156862745098,0.00392156862745098,A.t)
D.cZ5=w([A.k8,D.bfA],x.O)
D.ds1=new C.iV("redcarpet","Red Carpet","Tonight we shine",D.cZ5,D.ki)
D.bdx=new B.w(1,0.10980392156862745,0.0784313725490196,0.0196078431372549,A.t)
D.bbJ=new B.w(1,0.0196078431372549,0.011764705882352941,0.00392156862745098,A.t)
D.d2i=w([D.bdx,D.bbJ],x.O)
D.drR=new C.iV("coins","Gold Coin Rain","Every contribution counts",D.d2i,D.ki)
D.d8H=w([A.dv,A.hC],x.O)
D.drX=new C.iV("lanterns","Sky Lanterns","Lighting the way together",D.d8H,D.ki)
D.b8I=new B.w(1,0.0784313725490196,0.00784313725490196,0.0392156862745098,A.t)
D.cJr=w([A.wV,D.b8I],x.O)
D.drT=new C.iV("hearts","Floating Hearts","Made with love",D.cJr,D.OY)
D.b5Y=new B.w(1,0.23137254901960785,0.0392156862745098,0.10980392156862745,A.t)
D.b6L=new B.w(1,0.058823529411764705,0.00784313725490196,0.027450980392156862,A.t)
D.da6=w([D.b5Y,D.b6L],x.O)
D.dsh=new C.iV("petals","Rose Petals","Thank you, from our hearts",D.da6,D.OY)
D.bgt=new B.w(1,0.00784313725490196,0.06274509803921569,0.0392156862745098,A.t)
D.d6s=w([A.l0,D.bgt],x.O)
D.drO=new C.iV("butterflies","Golden Butterflies","New beginnings",D.d6s,D.ki)
D.bcS=new B.w(1,0.0392156862745098,0.0392156862745098,0.12156862745098039,A.t)
D.cKm=w([D.bcS,A.w],x.O)
D.ds9=new C.iV("neon","Neon Night","Let's go!",D.cKm,D.tN)
D.b9M=new B.w(1,0.0196078431372549,0.00392156862745098,0.050980392156862744,A.t)
D.d4a=w([A.Kk,D.b9M],x.O)
D.dsc=new C.iV("disco","Disco Ball","Party time",D.d4a,D.tN)
D.bdn=new B.w(1,0.11764705882352941,0.0392156862745098,0.1803921568627451,A.t)
D.d3J=w([A.ht,D.bdn],x.O)
D.drS=new C.iV("sunrise","Golden Sunrise","A new day for our community",D.d3J,D.ki)
D.d3m=w([A.qx,A.dJ],x.O)
D.dsd=new C.iV("pearls","Ocean Pearls","Deep roots, bright future",D.d3m,D.tN)
D.b7U=new B.w(1,0.047058823529411764,0.11764705882352941,0.22745098039215686,A.t)
D.d3A=w([D.b7U,A.dJ],x.O)
D.dsg=new C.iV("snow","Winter Gala","Warm wishes to all",D.d3A,D.tN)
D.b4K=new B.w(1,0.0784313725490196,0.13725490196078433,0.10196078431372549,A.t)
D.b5I=new B.w(1,0.01568627450980392,0.03137254901960784,0.0196078431372549,A.t)
D.d94=w([D.b4K,D.b5I],x.O)
D.ds5=new C.iV("laurel","Laurel Victory","We did it together",D.d94,D.ki)
D.b4z=new B.w(1,0.12156862745098039,0.06274509803921569,0.2,A.t)
D.bas=new B.w(1,0.027450980392156862,0.011764705882352941,0.050980392156862744,A.t)
D.cIz=w([D.b4z,D.bas],x.O)
D.dsf=new C.iV("ribbons","Silk Ribbons","Elegance in every step",D.cIz,D.ki)
D.bbs=new B.w(1,0.023529411764705882,0.01568627450980392,0.00784313725490196,A.t)
D.ctO=w([G.Ae,D.bbs],x.O)
D.ds2=new C.iV("kente","Kente Pride","Proud of our roots",D.ctO,D.ki)
D.be3=new B.w(1,0.1411764705882353,0.10196078431372549,0.0196078431372549,A.t)
D.bgM=new B.w(1,0.027450980392156862,0.0196078431372549,0.00392156862745098,A.t)
D.cU0=w([D.be3,D.bgM],x.O)
D.drY=new C.iV("trophy","Trophy Shine","Winners together",D.cU0,D.ki)
D.d3G=w([Ap.K9,A.w],x.O)
D.drQ=new C.iV("shooting","Shooting Stars","Make a wish",D.d3G,D.tN)
D.b4R=new B.w(1,0.10980392156862745,0.07058823529411765,0.023529411764705882,A.t)
D.aee=new B.w(1,0.0196078431372549,0.011764705882352941,0.00784313725490196,A.t)
D.d9k=w([D.b4R,D.aee],x.O)
D.ds3=new C.iV("bokeh","Golden Bokeh","Shine bright",D.d9k,D.ki)
D.b5d=new B.w(1,0.0392156862745098,0.058823529411764705,0.1411764705882353,A.t)
D.cZU=w([D.b5d,A.w],x.O)
D.drW=new C.iV("orbits","Golden Orbits","Always moving forward",D.cZU,D.ki)
D.bgu=new B.w(1,0.0392156862745098,0.011764705882352941,0.047058823529411764,A.t)
D.cWC=w([A.ac5,D.bgu],x.O)
D.ds0=new C.iV("flowers","Blooming Garden","Growing together",D.cWC,D.OY)
D.b50=new B.w(1,0.07450980392156863,0.027450980392156862,0.1803921568627451,A.t)
D.b5C=new B.w(1,0.00784313725490196,0.00392156862745098,0.03137254901960784,A.t)
D.d8a=w([D.b50,D.b5C],x.O)
D.drV=new C.iV("music","Music Party","Celebrate with us",D.d8a,D.tN)
D.b6v=new B.w(1,0.16470588235294117,0.0392156862745098,0.22745098039215686,A.t)
D.bha=new B.w(1,0.027450980392156862,0.00784313725490196,0.047058823529411764,A.t)
D.cJD=w([D.b6v,D.bha],x.O)
D.dse=new C.iV("mandala","Royal Mandala","Harmony and unity",D.cJD,D.ki)
D.cWH=w([G.Ae,D.aee],x.O)
D.ds8=new C.iV("sparklers","Golden Sparklers","Light up the night",D.cWH,D.ki)
D.ds4=new C.iV("city","City Lights","The whole city celebrates",D.avR,D.ki)
D.Gj=w([D.ds7,D.drZ,D.ds_,D.drU,D.dsa,D.dsb,D.drP,D.dsi,D.ds6,D.ds1,D.drR,D.drX,D.drT,D.dsh,D.drO,D.ds9,D.dsc,D.drS,D.dsd,D.dsg,D.ds5,D.dsf,D.ds2,D.drY,D.drQ,D.ds3,D.drW,D.ds0,D.drV,D.dse,D.ds8,D.ds4],B.ax("P<iV>"))
D.edP=new B.z("","No ring")
D.esa=new B.z("platinum","Platinum")
D.epc=new B.z("glow","Glow")
D.eh7=new B.z("double","Double line")
D.eg3=new B.z("framed","Gallery frame")
D.eds=new B.z("rosegold","Rose gold")
D.epW=new B.z("jewels","Jeweled")
D.emH=new B.z("aurora","Aurora")
D.Bw=w([D.edP,A.a56,D.esa,D.epc,H.aKn,D.eh7,A.a58,D.eg3,D.eds,D.epW,D.emH],x.L)
D.cdu=w([D.a3w,D.a3x,D.a3B,D.a3t,D.a3u,D.a3z],x.h)
D.bJe=new B.ae(G.aip,16,null,null,null,null)
D.b_X=new B.va(A.bg,D.bJe,null,x.U)
D.bya=new B.a0(58027,"MaterialIcons",!1)
D.bCY=new B.ae(D.bya,16,null,null,null,null)
D.b_V=new B.va(A.L,D.bCY,null,x.U)
D.byb=new B.a0(58030,"MaterialIcons",!1)
D.bGY=new B.ae(D.byb,16,null,null,null,null)
D.b_Y=new B.va(A.dK,D.bGY,null,x.U)
D.cjE=w([D.b_X,D.b_V,D.b_Y],B.ax("P<va<pP>>"))
D.crc=w([A.Aj,A.hd],x.O)
D.crd=w([A.bc,A.bn,A.ff],x.O)
D.ON=w([A.bJ,A.hD,A.hT,A.av,A.oc],x.O)
D.ctU=w([A.bU,D.j0,D.K3],x.O)
D.cur=w([1,2,4,8,16,32,64,128,27,54,108,216,171,77,154,47,94,188,99,198,151,53,106,212,179,125,250,239,197,145],x.t)
D.ebx=new B.z(4278913286,4280030216)
D.ebP=new B.z(4279373061,4278518787)
D.ebW=new B.z(4279898630,4278847235)
D.cTs=w([D.ebx,D.ebP,D.ebW],x.n)
D.cPo=w(["\u265b","\u269c","\u2726"],x.s)
D.dw8=new C.xc("Royal Onyx & Gold",D.cTs,4292128567,4294370209,4294965479,3874020544,D.cPo)
D.ebk=new B.z(4278326799,4278598442)
D.ebm=new B.z(4278395929,4278258953)
D.ebt=new B.z(4278599728,4278327826)
D.d8y=w([D.ebk,D.ebm,D.ebt],x.n)
D.cKe=w(["\u269c","\u2756","\u2727"],x.s)
D.dw5=new C.xc("Imperial Emerald",D.d8y,4293050997,4294699968,4294180856,3872254170,D.cKe)
D.ebn=new B.z(4278455076,4278918747)
D.ebs=new B.z(4278587439,4278322714)
D.ebG=new B.z(4279051376,4278455076)
D.d6L=w([D.ebn,D.ebs,D.ebG],x.n)
D.d_u=w(["\u2654","\u2726","\u2748"],x.s)
D.dw_=new C.xc("Sapphire Crown",D.d6L,4291417834,4294967295,4294310143,3871986666,D.d_u)
D.ebU=new B.z(4279894534,4283041554)
D.ec5=new B.z(4281008906,4279042307)
D.ecd=new B.z(4284221976,4279894534)
D.dc7=w([D.ebU,D.ec5,D.ecd],x.n)
D.cLv=w(["\u265b","\u2766","\u2726"],x.s)
D.dw1=new C.xc("Ruby Throne",D.dc7,4293378685,4294963145,4294964466,3874213833,D.cLv)
D.ebO=new B.z(4279371039,4281995100)
D.ebY=new B.z(4280092723,4278714896)
D.eca=new B.z(4283045242,4279371039)
D.d8V=w([D.ebO,D.ebY,D.eca],x.n)
D.d76=w(["\u2655","\u2756","\u2727"],x.s)
D.dw6=new C.xc("Amethyst Palace",D.d8V,4293314984,4294963421,4294702591,3873229802,D.d76)
D.ebp=new B.z(4278519045,4280032287)
D.ebH=new B.z(4279111184,4278321666)
D.ec2=new B.z(4280492839,4278716426)
D.d5G=w([D.ebp,D.ebH,D.ec2],x.n)
D.cYT=w(["\u2726","\u25c6","\u2742"],x.s)
D.dw3=new C.xc("Obsidian & Platinum",D.d5G,4293256418,4294967295,4294638330,3872378836,D.cYT)
D.ebV=new B.z(4279896588,4282194463)
D.ec3=new B.z(4280553487,4279043334)
D.ecb=new B.z(4283048488,4279896588)
D.cYo=w([D.ebV,D.ec3,D.ecb],x.n)
D.dau=w(["\u2766","\u273f","\u2727"],x.s)
D.dw0=new C.xc("Rose Gold Velvet",D.cYo,4293440672,4294960345,4294964979,3874214602,D.dau)
D.ebq=new B.z(4278520340,4279180595)
D.ebv=new B.z(4278718495,4278322443)
D.ebS=new B.z(4279510591,4278520340)
D.cAA=w([D.ebq,D.ebv,D.ebS],x.n)
D.cZy=w(["\u269c","\u2736","\u2756"],x.s)
D.dw4=new C.xc("Midnight Brass",D.cAA,4291405148,4293975208,4294439914,3872837564,D.cZy)
D.ecq=new B.z(4294703086,4293780428)
D.ecm=new B.z(4294307549,4293187253)
D.ecr=new B.z(4294966517,4293977807)
D.cNx=w([D.ecq,D.ecm,D.ecr],x.n)
D.cZX=w(["\u269c","\u265b","\u2726"],x.s)
D.dw7=new C.xc("Ivory Marble & Gold",D.cNx,4289760572,4286209048,4280951062,3863625518,D.cZX)
D.ebB=new B.z(4278978566,4280555024)
D.ebR=new B.z(4279504137,4278518530)
D.ec7=new B.z(4281211923,4278978566)
D.cLm=w([D.ebB,D.ebR,D.ec7],x.n)
D.d7O=w(["\u2742","\u2726","\u265c"],x.s)
D.dw2=new C.xc("Onyx & Copper",D.cLm,4291856987,4294365880,4294964718,3873885630,D.d7O)
D.cuz=w([D.dw8,D.dw5,D.dw_,D.dw1,D.dw6,D.dw3,D.dw0,D.dw4,D.dw7,D.dw2],B.ax("P<xc>"))
D.cwQ=w([A.av,D.Af,A.hD],x.O)
D.ej9=new B.z("Original",null)
D.ejh=new B.z("Wide 16:9",1.7777777777777777)
D.elt=new B.z("Landscape 3:2",1.5)
D.eiE=new B.z("Photo 4:3",1.3333333333333333)
D.ekj=new B.z("Square",1)
D.evH=new B.z("Portrait 3:4",0.75)
D.atl=w([D.ej9,D.ejh,D.elt,D.eiE,D.ekj,D.evH],B.ax("P<+(n,N?)>"))
D.atm=w([A.hD,A.bZ,A.b7,A.by],x.O)
D.elD=new B.z("","Original")
D.enp=new B.z("circle","Circle")
D.esV=new B.z("rounded","Rounded")
D.etP=new B.z("triangle","Triangle")
D.epq=new B.z("hexagon","Hexagon")
D.enO=new B.z("diamond","Diamond")
D.emG=new B.z("arch","Arch")
D.BB=w([D.elD,D.enp,D.esV,D.etP,D.epq,D.enO,D.emG],x.L)
D.dre=new C.l6("classic_blue","Classic Blue","Normal",A.bi,A.c,A.kb,A.dp,A.aK)
D.dru=new C.l6("campus_green","Campus Green","Normal",A.aZ,A.mK,A.rV,A.h1,A.es)
D.drl=new C.l6("warm_sand","Warm Sand","Normal",A.dT,A.hT,A.bJ,A.ir,A.nu)
D.drs=new C.l6("slate_minimal","Slate Minimal","Normal",A.bw,A.aP,A.aL,A.M,A.aK)
D.drd=new C.l6("coral_fresh","Coral Fresh","Normal",A.cb,A.io,A.qp,A.jJ,A.rP)
D.drt=new C.l6("lavender_calm","Lavender Calm","Normal",A.b4,A.pb,A.A3,A.pe,A.jm)
D.drf=new C.l6("ocean_breeze","Ocean Breeze","Normal",A.f6,A.qA,A.rK,A.uG,A.nv)
D.adw=new B.w(1,0.9803921568627451,0.9607843137254902,1,A.t)
D.drq=new C.l6("berry_pop","Berry Pop","Normal",A.fg,D.adw,A.k5,G.WC,A.Er)
D.drg=new C.l6("midnight_pro","Midnight Pro","Professional",A.aE,A.M,A.dv,A.k5,A.cn)
D.drp=new C.l6("executive_navy","Executive Navy","Professional",A.d7,A.acT,A.dp,A.kZ,A.bI)
D.drn=new C.l6("boardroom_charcoal","Boardroom Charcoal","Professional",A.ak,A.bl,A.M,A.aP,A.cn)
D.drh=new C.l6("corporate_steel","Corporate Steel","Professional",A.mI,A.M,A.m5,A.fh,A.bI)
D.drk=new C.l6("gold_luxe","Gold Luxe","Luxury",A.og,A.dD,A.oh,A.lu,A.bJ)
D.bds=new B.w(1,0.10196078431372549,0.0392156862745098,0.058823529411764705,A.t)
D.dro=new C.l6("rose_gold_elite","Rose Gold Elite","Luxury",A.hd,D.bds,A.Ws,A.il,A.oc)
D.drr=new C.l6("platinum_night","Platinum Night","Luxury",A.cn,A.dJ,A.bl,A.aP,A.aL)
D.drv=new C.l6("emerald_prestige","Emerald Prestige","Luxury",A.aU,A.ph,A.eX,A.pn,A.jn)
D.drc=new C.l6("royal_purple","Royal Purple","Luxury",A.mJ,A.VB,A.jm,A.k5,A.JW)
D.drm=new C.l6("neon_pitch","Neon Pitch","Bold",A.b7,A.dJ,A.M,A.b1,A.aL)
D.drj=new C.l6("crimson_impact","Crimson Impact","Bold",A.bL,A.k8,A.ew,A.t7,A.f9)
D.dri=new C.l6("sunset_gallery","Sunset Gallery","Bold",A.fC,A.rP,A.jJ,A.qp,A.ok)
D.Gs=w([D.dre,D.dru,D.drl,D.drs,D.drd,D.drt,D.drf,D.drq,D.drg,D.drp,D.drn,D.drh,D.drk,D.dro,D.drr,D.drv,D.drc,D.drm,D.drj,D.dri],B.ax("P<l6>"))
D.cIg=w([A.bU,D.j0],x.O)
D.cYE=w(["\ud83d\ude00","\ud83d\ude03","\ud83d\ude04","\ud83d\ude01","\ud83d\ude0a","\ud83d\ude0e","\ud83e\udd29","\ud83e\udd73","\ud83d\ude07","\ud83e\udd17","\ud83d\ude4c","\ud83d\udc4f","\ud83e\udd1d","\ud83d\udc4d","\ud83d\udc4b","\ud83d\udcaa","\ud83d\ude4f","\u2728"],x.s)
D.ems=new B.z("Faces & people",D.cYE)
D.cwU=w(["\ud83d\udca1","\ud83c\udfaf","\ud83d\ude80","\ud83d\udcc8","\ud83d\udcca","\ud83d\udccc","\ud83d\udccd","\ud83d\udce3","\ud83d\udd14","\ud83e\udded","\ud83d\udee0\ufe0f","\ud83d\udd27","\u2699\ufe0f","\ud83e\udde0","\ud83d\udcda","\ud83d\udcdd","\u270f\ufe0f","\ud83d\udcd6","\ud83d\uddc2\ufe0f","\ud83d\udcc5","\u23f0","\u2705","\u274c","\u26a0\ufe0f","\u2753","\u2757"],x.s)
D.eaq=new B.z("Ideas & work",D.cwU)
D.cPS=w(["\ud83c\udf3f","\ud83c\udf31","\ud83c\udf33","\ud83c\udf38","\ud83c\udf3c","\ud83c\udf3b","\ud83c\udf1e","\ud83c\udf08","\ud83c\udf0a","\ud83d\udd25","\ud83d\udca7","\u2744\ufe0f","\ud83c\udf19","\u2b50","\ud83c\udf1f","\u2600\ufe0f","\ud83c\udf40"],x.s)
D.epv=new B.z("Nature",D.cPS)
D.cYM=w(["\ud83c\udfe0","\ud83c\udfeb","\ud83c\udfe5","\ud83c\udfe6","\ud83c\udfea","\ud83d\ude97","\ud83d\ude8c","\u2708\ufe0f","\ud83c\udf81","\ud83d\udcb0","\ud83d\udcb5","\ud83d\udcb3","\ud83d\uded2","\ud83c\udfc6","\ud83e\udd47","\ud83c\udf89","\ud83c\udf88","\ud83c\udfb6","\ud83c\udfb5","\ud83c\udfa4","\ud83d\udcf7","\ud83c\udfac","\ud83d\uddbc\ufe0f","\ud83d\udcbb","\ud83d\udcf1"],x.s)
D.ej7=new B.z("Places & things",D.cYM)
D.cT2=w(["\u2764\ufe0f","\ud83d\udc9a","\ud83d\udc99","\ud83d\udc9c","\ud83e\udde1","\ud83d\udc9b","\ud83d\udda4","\ud83e\udd0d","\u2b06\ufe0f","\u27a1\ufe0f","\ud83d\udd36","\ud83d\udd37","\ud83d\udd34","\ud83d\udfe2","\ud83d\udd35","\ud83d\udfe1"],x.s)
D.emL=new B.z("Symbols",D.cT2)
D.cIm=w([D.ems,D.eaq,D.epv,D.ej7,D.emL],B.ax("P<+(n,ak<n>)>"))
D.b55=new B.w(1,0.22745098039215686,0.15294117647058825,0.03137254901960784,A.t)
D.cIK=w([A.bU,D.ac7,D.b55],x.O)
D.b_i=new B.ac(0,A.G,A.JT,A.aEJ,40)
D.b__=new B.ac(0,A.G,A.ns,A.ej,8)
D.cIW=w([D.b_i,D.b__],x.V)
D.cJn=w([4280171146,4280640491,4279080072,4278556265],x.t)
D.atL=w([4294677052,4294626325,4293870660,4294210230,4287323382,4282090230,4280472558,4283096704,4294967295,4279310375],x.t)
D.a1c=w([A.hD,A.ff,A.bL,A.aA,A.cb],x.O)
D.cK8=w(["All","Robotic","Nature","Warm","Bold","Clean"],x.s)
D.acl=new B.w(1,0.043137254901960784,0.0392156862745098,0.03137254901960784,A.t)
D.cKj=w([A.Wi,D.acl,A.Wi],x.O)
D.cKp=w([A.hU,D.j0,D.K3],x.O)
D.eiX=new B.z(A.bg,D.ZZ)
D.eke=new B.z(A.L,D.ZY)
D.eer=new B.z(A.dK,D.a__)
D.cLh=w([D.eiX,D.eke,D.eer],B.ax("P<+(pP,a0)>"))
D.cQ=new C.I6(0,"text")
D.lh=new C.I6(1,"image")
D.f_=new C.I6(2,"shape")
D.QX=new C.I6(3,"pdf")
D.kP=new C.I6(4,"signature")
D.a3W=new C.I6(5,"bio")
D.cM7=w([D.cQ,D.lh,D.f_,D.QX,D.kP,D.a3W],B.ax("P<I6>"))
D.cM8=w([A.bk,A.cD],B.ax("P<H3>"))
D.cMJ=w(["School","Documents","Sign & present"],x.s)
D.b_n=new B.ac(0,A.G,A.ae4,A.u6,28)
D.cN2=w([D.b_n],x.V)
D.cNk=w([4292128567,4279983648,4290190364,4279898632,4293436183,4279060385],x.t)
D.P5=w(["Rocket","Trophy","Party popper","Confetti ball","Balloon","Wrapped gift","Birthday cake","Sparkles","Star","Glowing star","Fire","Light bulb","Gem stone","Crown","Money bag","Dollar banknote","Chart increasing","Bar chart","Bullseye","Globe showing americas","Globe showing europe-africa","Sun","Rainbow","Cloud","High voltage","Red heart","Handshake","Graduation cap","Books","Open book","Pencil","Laptop","Mobile phone","Microphone","Musical notes","Camera","Video camera","Megaphone","Bell","Calendar","Alarm clock","Hourglass done","Key","Locked","Shield","Gear","Hammer and wrench","Magnifying glass tilted left","Package","Shopping cart","House","Office building","Hospital","Ballot box with ballot","Automobile","Airplane","Seedling","Deciduous tree","Evergreen tree","Palm tree","Sunflower","Cherry blossom","Herb","Four leaf clover","Water wave","Mountain","Lion","Tiger face","Dog face","Cat face","Elephant","Unicorn","Butterfly","Honeybee","Owl","Eagle","Dolphin","Turtle","Panda","Fox","Rabbit face","Monkey face","Penguin","Horse","Bird","Peacock","Parrot","Red apple","Pizza","Hot beverage","Soccer ball","Basketball","Artist palette","Clapper board","Robot","Brain","Check mark button","Red question mark","Speech balloon","Compass","Crystal ball","Puzzle piece","1st place medal","Smiling face with sunglasses","Grinning face with big eyes","Star-struck","Partying face","Thinking face","Hundred points"],x.s)
D.au9=w([A.hD,A.Eq,A.aL,A.c,A.oj,A.av],x.O)
D.ev4=new B.z(0.1,0.08)
D.ept=new B.z(0.3,0.05)
D.edZ=new B.z(0.55,0.1)
D.ehY=new B.z(0.8,0.06)
D.ekX=new B.z(0.92,0.16)
D.ekt=new B.z(0.2,0.2)
D.eiq=new B.z(0.7,0.22)
D.eoa=new B.z(0.05,0.4)
D.ell=new B.z(0.95,0.45)
D.eeE=new B.z(0.12,0.7)
D.egM=new B.z(0.88,0.75)
D.egU=new B.z(0.4,0.9)
D.ecF=new B.z(0.65,0.93)
D.ehB=new B.z(0.25,0.97)
D.eiU=new B.z(0.85,0.9)
D.eft=new B.z(0.5,0.04)
D.cOE=w([D.ev4,D.ept,D.edZ,D.ehY,D.ekX,D.ekt,D.eiq,D.eoa,D.ell,D.eeE,D.egM,D.egU,D.ecF,D.ehB,D.eiU,D.eft],x.G)
D.cOL=w([A.c,A.hd,A.aW,A.aU],x.O)
D.dSs=new C.jA("office_blue","Office Blue",A.bi,A.dp,A.aK,A.c,A.kb)
D.dSD=new C.jA("campus_green","Campus Green",A.aZ,A.h1,A.es,A.mK,A.rV)
D.dSt=new C.jA("sunset","Sunset",A.fC,A.jJ,A.nu,A.io,A.qp)
D.dSu=new C.jA("midnight","Midnight",A.aE,A.k5,A.cn,A.M,A.dv)
D.dSF=new C.jA("classic","Classic",A.da,A.dD,A.lv,A.hT,A.h_)
D.dSC=new C.jA("rose_gold","Rose Gold",A.hd,A.wW,A.wV,A.uQ,A.Aj)
D.dSn=new C.jA("ocean_teal","Ocean Teal",A.f6,A.uG,A.nv,A.qA,A.rK)
D.dSm=new C.jA("slate_pro","Slate Pro",A.bw,A.M,A.aK,A.aP,A.aL)
D.dSl=new C.jA("neon_night","Neon Night",A.b7,A.b1,A.aL,A.dJ,A.M)
D.dSx=new C.jA("lavender","Lavender",A.b4,A.pe,A.jm,A.pb,A.A3)
D.dSz=new C.jA("coral","Coral",A.cb,A.jJ,A.rP,A.io,A.ok)
D.dSo=new C.jA("forest","Forest",A.he,A.ec,A.cC,A.lw,A.ex)
D.dSp=new C.jA("berry","Berry",A.fg,G.WC,A.Er,D.adw,A.k5)
D.dSw=new C.jA("sand","Sand",A.dT,A.ir,A.nu,A.hT,A.bJ)
D.dSB=new C.jA("ice","Ice",A.mI,A.Kl,A.aK,A.mG,A.fh)
D.dSr=new C.jA("charcoal","Charcoal",A.ak,A.aP,A.cn,A.bl,A.M)
D.dSk=new C.jA("mint","Mint",A.aU,A.fu,A.h1,A.lw,A.pn)
D.dSA=new C.jA("crimson","Crimson",A.bL,A.mM,A.k8,A.Eo,A.t7)
D.b7v=new B.w(1,0.996078431372549,0.9882352941176471,0.9098039215686274,A.t)
D.dSv=new C.jA("gold","Gold",A.og,A.uE,A.oh,D.b7v,A.lu)
D.dSy=new C.jA("aqua","Aqua",A.bM,A.Ec,A.oe,A.pd,A.ol)
D.dSq=new C.jA("plum","Plum",A.mJ,A.wT,A.Er,A.E_,A.t2)
D.dSE=new C.jA("steel","Steel",A.d7,A.dp,A.bl,A.kb,A.kZ)
D.a1r=w([D.dSs,D.dSD,D.dSt,D.dSu,D.dSF,D.dSC,D.dSn,D.dSm,D.dSl,D.dSx,D.dSz,D.dSo,D.dSp,D.dSw,D.dSB,D.dSr,D.dSk,D.dSA,D.dSv,D.dSy,D.dSq,D.dSE],B.ax("P<jA>"))
D.cP5=w([A.bU,A.j2],x.O)
D.QZ=new C.hw(10,"rotate3d")
D.Hp=new C.hw(8,"flip")
D.aEd=new C.hw(19,"spiral")
D.pT=new C.hw(16,"bounce")
D.aEg=new C.hw(9,"flipVertical")
D.cP6=w([D.QZ,D.Hp,D.aEd,D.pT,D.aEg],x.i)
D.e5=w([1353184337,1399144830,3282310938,2522752826,3412831035,4047871263,2874735276,2466505547,1442459680,4134368941,2440481928,625738485,4242007375,3620416197,2151953702,2409849525,1230680542,1729870373,2551114309,3787521629,41234371,317738113,2744600205,3338261355,3881799427,2510066197,3950669247,3663286933,763608788,3542185048,694804553,1154009486,1787413109,2021232372,1799248025,3715217703,3058688446,397248752,1722556617,3023752829,407560035,2184256229,1613975959,1165972322,3765920945,2226023355,480281086,2485848313,1483229296,436028815,2272059028,3086515026,601060267,3791801202,1468997603,715871590,120122290,63092015,2591802758,2768779219,4068943920,2997206819,3127509762,1552029421,723308426,2461301159,4042393587,2715969870,3455375973,3586000134,526529745,2331944644,2639474228,2689987490,853641733,1978398372,971801355,2867814464,111112542,1360031421,4186579262,1023860118,2919579357,1186850381,3045938321,90031217,1876166148,4279586912,620468249,2548678102,3426959497,2006899047,3175278768,2290845959,945494503,3689859193,1191869601,3910091388,3374220536,0,2206629897,1223502642,2893025566,1316117100,4227796733,1446544655,517320253,658058550,1691946762,564550760,3511966619,976107044,2976320012,266819475,3533106868,2660342555,1338359936,2720062561,1766553434,370807324,179999714,3844776128,1138762300,488053522,185403662,2915535858,3114841645,3366526484,2233069911,1275557295,3151862254,4250959779,2670068215,3170202204,3309004356,880737115,1982415755,3703972811,1761406390,1676797112,3403428311,277177154,1076008723,538035844,2099530373,4164795346,288553390,1839278535,1261411869,4080055004,3964831245,3504587127,1813426987,2579067049,4199060497,577038663,3297574056,440397984,3626794326,4019204898,3343796615,3251714265,4272081548,906744984,3481400742,685669029,646887386,2764025151,3835509292,227702864,2613862250,1648787028,3256061430,3904428176,1593260334,4121936770,3196083615,2090061929,2838353263,3004310991,999926984,2809993232,1852021992,2075868123,158869197,4095236462,28809964,2828685187,1701746150,2129067946,147831841,3873969647,3650873274,3459673930,3557400554,3598495785,2947720241,824393514,815048134,3227951669,935087732,2798289660,2966458592,366520115,1251476721,4158319681,240176511,804688151,2379631990,1303441219,1414376140,3741619940,3820343710,461924940,3089050817,2136040774,82468509,1563790337,1937016826,776014843,1511876531,1389550482,861278441,323475053,2355222426,2047648055,2383738969,2302415851,3995576782,902390199,3991215329,1018251130,1507840668,1064563285,2043548696,3208103795,3939366739,1537932639,342834655,2262516856,2180231114,1053059257,741614648,1598071746,1925389590,203809468,2336832552,1100287487,1895934009,3736275976,2632234200,2428589668,1636092795,1890988757,1952214088,1113045200],x.t)
D.cPr=w([0.62,1],x.x)
D.cQ_=w([0,0.32,0.68,1],x.x)
D.mq=new C.hw(6,"zoom")
D.u0=new C.hw(4,"slideUp")
D.u_=new C.hw(2,"slideLeft")
D.cQ8=w([D.mq,D.Hp,D.u0,D.QZ,D.u_],x.i)
D.cQC=w([A.bZ,A.hd,A.il,A.hD,A.c],x.O)
D.b_d=new B.ac(0,A.G,D.acx,A.u6,30)
D.cRj=w([D.b_d],x.V)
D.e0X=new B.u(0,-2.5)
D.e0N=new B.u(-2.5,0)
D.e_v=new B.u(2.5,0)
D.cRm=w([A.Re,A.a4i,A.aFe,A.a4h,D.e0X,H.aFa,D.e0N,D.e_v],x.dN)
D.Gz=w([0,79764919,159529838,222504665,319059676,398814059,445009330,507990021,638119352,583659535,797628118,726387553,890018660,835552979,1015980042,944750013,1276238704,1221641927,1167319070,1095957929,1595256236,1540665371,1452775106,1381403509,1780037320,1859660671,1671105958,1733955601,2031960084,2111593891,1889500026,1952343757,2552477408,2632100695,2443283854,2506133561,2334638140,2414271883,2191915858,2254759653,3190512472,3135915759,3081330742,3009969537,2905550212,2850959411,2762807018,2691435357,3560074640,3505614887,3719321342,3648080713,3342211916,3287746299,3467911202,3396681109,4063920168,4143685023,4223187782,4286162673,3779000052,3858754371,3904687514,3967668269,881225847,809987520,1023691545,969234094,662832811,591600412,771767749,717299826,311336399,374308984,453813921,533576470,25881363,88864420,134795389,214552010,2023205639,2086057648,1897238633,1976864222,1804852699,1867694188,1645340341,1724971778,1587496639,1516133128,1461550545,1406951526,1302016099,1230646740,1142491917,1087903418,2896545431,2825181984,2770861561,2716262478,3215044683,3143675388,3055782693,3001194130,2326604591,2389456536,2200899649,2280525302,2578013683,2640855108,2418763421,2498394922,3769900519,3832873040,3912640137,3992402750,4088425275,4151408268,4197601365,4277358050,3334271071,3263032808,3476998961,3422541446,3585640067,3514407732,3694837229,3640369242,1762451694,1842216281,1619975040,1682949687,2047383090,2127137669,1938468188,2001449195,1325665622,1271206113,1183200824,1111960463,1543535498,1489069629,1434599652,1363369299,622672798,568075817,748617968,677256519,907627842,853037301,1067152940,995781531,51762726,131386257,177728840,240578815,269590778,349224269,429104020,491947555,4046411278,4126034873,4172115296,4234965207,3794477266,3874110821,3953728444,4016571915,3609705398,3555108353,3735388376,3664026991,3290680682,3236090077,3449943556,3378572211,3174993278,3120533705,3032266256,2961025959,2923101090,2868635157,2813903052,2742672763,2604032198,2683796849,2461293480,2524268063,2284983834,2364738477,2175806836,2238787779,1569362073,1498123566,1409854455,1355396672,1317987909,1246755826,1192025387,1137557660,2072149281,2135122070,1912620623,1992383480,1753615357,1816598090,1627664531,1707420964,295390185,358241886,404320391,483945776,43990325,106832002,186451547,266083308,932423249,861060070,1041341759,986742920,613929101,542559546,756411363,701822548,3316196985,3244833742,3425377559,3370778784,3601682597,3530312978,3744426955,3689838204,3819031489,3881883254,3928223919,4007849240,4037393693,4100235434,4180117107,4259748804,2310601993,2373574846,2151335527,2231098320,2596047829,2659030626,2470359227,2550115596,2947551409,2876312838,2788305887,2733848168,3165939309,3094707162,3040238851,2985771188],x.t)
D.cRP=w([23,114,69,56,80,144],x.t)
D.cSd=w(["Make the headline shorter","Add a paragraph about the Civic Registry","Write the whole thing in Swahili","Change the newspaper name"],x.s)
D.cSC=w(["Add a slide about\u2026","Make this slide shorter","Translate everything to Swahili","Add a slide with our contact details","Change the style to luxury","Remove the last slide"],x.s)
D.cU4=w([null,4294626325,4294828103,4283096704,4280472558,4294210230,4294677052,4293870660,4287323382,4282090230,4294967295,4279310375],x.Z)
D.cU8=w(["Kichwa cha Mtu: [Kiasi kilichosalia au thamani]","Mbuzi Mbili","Ngyoka","Mmoko"],x.s)
D.be=new C.us(0,"rectangle")
D.eI=new C.us(1,"circle")
D.kQ=new C.us(6,"hexagon")
D.cUk=w([D.be,D.eI,D.kQ],x.m)
D.nU=w([99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22],x.t)
D.adD=new B.w(1,0.24313725490196078,0.47843137254901963,0.30980392156862746,A.t)
D.cUS=w([D.adD,A.ec],x.O)
D.ee9=new B.z("","Classic")
D.ecS=new B.z("caps","Bold caps")
D.eod=new B.z("elegant","Elegant")
D.etd=new B.z("shadow","Shadow")
D.eij=new B.z("neon","Neon glow")
D.erR=new B.z("outline","Outline")
D.er4=new B.z("marker","Highlighter")
D.eto=new B.z("stamp","Stamp")
D.esQ=new B.z("retro","Retro")
D.ehi=new B.z("threed","3D")
D.eoJ=new B.z("fire","Fire")
D.epF=new B.z("ice","Ice")
D.eno=new B.z("chalk","Chalk")
D.ent=new B.z("comic","Comic")
D.etq=new B.z("sunset","Sunset")
D.euw=new B.z("softglow","Soft glow")
D.eqD=new B.z("lowercase","Lowercase")
D.enV=new B.z("double","Echo")
D.euD=new B.z("whisper","Whisper")
D.av1=w([D.ee9,D.ecS,D.eod,D.etd,D.eij,D.erR,D.er4,D.eto,D.esQ,D.ehi,H.aKl,D.eoJ,D.epF,D.eno,D.ent,A.a56,D.etq,D.euw,D.eqD,D.enV,D.euD],x.L)
D.cW4=w([3,5,7,10,12,15],x.t)
D.cXo=w([A.bZ,A.bJ,A.c,A.ey,A.cv],x.O)
D.diT=new C.t1(10,"cardWorld")
D.C1=new C.AX(3,"rounded")
D.dz9=new C.l9("world","NGMY World",D.diT,D.C1,4278918980,4278521378,4294967295,4280118271,"logo","Roboto","Roboto","Roboto","a modern digital news site: clear, confident and direct, a strong plain headline and a one-sentence summary",!1,"none",!0,!1)
D.diU=new C.t1(11,"cardSplit")
D.dz5=new C.l9("business","Business Wire",D.diU,D.C1,4294967295,4294507260,4279179050,4292943150,"logo","Roboto","Roboto","Roboto","a clean business news site: precise, informative and professional, with a plain, strong headline",!1,"none",!1,!1)
D.diV=new C.t1(12,"cardBreaking")
D.dzi=new C.l9("breaking","Breaking Red",D.diV,D.C1,4278913807,4280944139,4294967295,4292943150,"logo","Roboto","Roboto","Roboto","a breaking-news broadcast: urgent, factual and clear, a punchy headline and a tight summary",!1,"none",!0,!1)
D.diW=new C.t1(13,"cardFeature")
D.dzb=new C.l9("feature","Tech Feature",D.diW,D.C1,4294967295,4294047225,4279179050,4280640491,"logo","Roboto","Roboto","Roboto","a modern feature article: informative, engaging and well explained",!1,"none",!1,!1)
D.aCL=new C.t1(6,"circle")
D.aCF=new C.AX(4,"circle")
D.dzf=new C.l9("parchment","Royal Circle",D.aCL,D.aCF,4294241234,4293450160,4281278992,4285211048,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a stately royal edition: dignified, noble and ceremonial",!0,"sepia",!1,!1)
D.dz4=new C.l9("ocean","Blue Ocean",D.aCL,D.aCF,4293916415,4292602622,4278984254,4278413729,"centered","NgmyAbril","NgmyAbril","NgmyOldStandard","a calm, trustworthy paper: clear, steady and reassuring",!1,"none",!1,!1)
D.diZ=new C.t1(7,"rail")
D.aCE=new C.AX(1,"double")
D.dz6=new C.l9("forest","Green Leaf",D.diZ,D.aCE,4293983732,4292672743,4278529558,4279599165,"centered","NgmyAbril","NgmyAbril","NgmyOldStandard","a calm community paper about growth and togetherness: gentle, hopeful and clear",!1,"none",!1,!1)
D.aCI=new C.t1(1,"sideBySide")
D.dzk=new C.l9("herald","NGMY Herald",D.aCI,D.C1,4294967295,4294308863,4280163147,4286331629,"split","NgmyAbril","NgmyAbril","NgmyOldStandard","the proud NGMY Herald: warm, hopeful and community-minded, in NGMY purple",!1,"none",!1,!1)
D.aCH=new C.t1(0,"classic")
D.a38=new C.AX(9,"shadow")
D.dzj=new C.l9("daily","The Daily",D.aCH,D.a38,4294967295,4294243570,4279308561,4292225064,"bar","NgmyAbril","NgmyAbril","NgmyOldStandard","a modern daily newspaper: crisp, clear and energetic, with a punchy headline",!1,"none",!1,!0)
D.diX=new C.t1(2,"splash")
D.aCG=new C.AX(6,"cutCorner")
D.dz3=new C.l9("tabloid","Big Tabloid",D.diX,D.aCG,4294967295,4294965216,4279308561,4292943176,"bar","Roboto","NgmyAbril","Roboto","a bold tabloid: exciting, short punchy sentences and a loud, attention-grabbing headline (still truthful)",!1,"none",!1,!0)
D.aCM=new C.t1(9,"minimal")
D.dze=new C.l9("modern","Modern Digest",D.aCM,D.C1,4294507260,4293060848,4279179050,4279080072,"logo","Roboto","Roboto","Roboto","a clean modern digest: simple words, short paragraphs, friendly and clear",!1,"none",!1,!1)
D.aCJ=new C.t1(3,"magazine")
D.aCD=new C.AX(0,"plain")
D.dza=new C.l9("midnight","Midnight Edition",D.aCJ,D.aCD,4279310375,4278915104,4294047225,4294626325,"logo","Roboto","NgmyAbril","NgmyOldStandard","a dramatic late-night edition: confident, cinematic and polished",!1,"none",!0,!0)
D.dj_=new C.t1(8,"banner")
D.dzc=new C.l9("metro","Metro Wire",D.dj_,D.aCG,4294047225,4293060848,4278915616,4280640491,"logo","Roboto","Roboto","Roboto","a modern news wire: fast, factual and direct, like breaking news",!1,"none",!1,!0)
D.diS=new C.AX(8,"arch")
D.dzd=new C.l9("sunrise","Sunrise Post",D.aCJ,D.diS,4294965229,4294962645,4282064136,4293548044,"split","NgmyAbril","NgmyAbril","NgmyOldStandard","a cheerful morning paper: bright, optimistic and welcoming",!1,"none",!1,!1)
D.aCK=new C.t1(5,"scrapbook")
D.diR=new C.AX(5,"tape")
D.dz8=new C.l9("neon","Neon Beat",D.aCK,D.diR,4280163147,4279175726,4294308863,4293675161,"split","NgmyAbril","NgmyAbril","Roboto","a youthful neon culture paper: fresh, bold, energetic and fun",!1,"none",!0,!1)
D.diY=new C.t1(4,"wrap")
D.dzl=new C.l9("gold","Golden Press",D.diY,D.a38,4279505162,4278847748,4294898631,4294626325,"logo","Roboto","NgmyAbril","NgmyOldStandard","a luxurious golden press edition: grand, elegant and prestigious",!1,"none",!0,!0)
D.dzm=new C.l9("minimal","Paper White",D.aCM,D.a38,4294967295,4294638330,4279769115,4279769115,"split","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a quiet, elegant long-read: thoughtful, simple and beautifully written",!1,"none",!1,!1)
D.dz7=new C.l9("gazette","Fresh Gazette",D.aCH,D.aCE,4294373341,4293582786,4280949518,4288295954,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a refined town gazette: formal, dignified and warm, with a strong headline",!1,"none",!1,!0)
D.dzh=new C.l9("times","Classic Times",D.aCI,D.aCD,4294637810,4293913565,4279636750,4280171146,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a serious classic broadsheet: calm, factual, authoritative, with a strong headline and a clear subhead",!1,"bw",!1,!1)
D.Qv=new C.AX(2,"polaroid")
D.dzg=new C.l9("scrapbook","Memory Scrapbook",D.aCK,D.Qv,4294437835,4293580710,4282001946,4290007817,"split","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a warm scrapbook clipping: personal, nostalgic and heartfelt",!1,"sepia",!1,!1)
D.a1G=w([D.dz9,D.dz5,D.dzi,D.dzb,D.dzf,D.dz4,D.dz6,D.dzk,D.dzj,D.dz3,D.dze,D.dza,D.dzc,D.dzd,D.dz8,D.dzl,D.dzm,D.dz7,D.dzh,D.dzg],B.ax("P<l9>"))
D.cXA=w([0.45,1],x.x)
D.GB=w([619,720,127,481,931,816,813,233,566,247,985,724,205,454,863,491,741,242,949,214,733,859,335,708,621,574,73,654,730,472,419,436,278,496,867,210,399,680,480,51,878,465,811,169,869,675,611,697,867,561,862,687,507,283,482,129,807,591,733,623,150,238,59,379,684,877,625,169,643,105,170,607,520,932,727,476,693,425,174,647,73,122,335,530,442,853,695,249,445,515,909,545,703,919,874,474,882,500,594,612,641,801,220,162,819,984,589,513,495,799,161,604,958,533,221,400,386,867,600,782,382,596,414,171,516,375,682,485,911,276,98,553,163,354,666,933,424,341,533,870,227,730,475,186,263,647,537,686,600,224,469,68,770,919,190,373,294,822,808,206,184,943,795,384,383,461,404,758,839,887,715,67,618,276,204,918,873,777,604,560,951,160,578,722,79,804,96,409,713,940,652,934,970,447,318,353,859,672,112,785,645,863,803,350,139,93,354,99,820,908,609,772,154,274,580,184,79,626,630,742,653,282,762,623,680,81,927,626,789,125,411,521,938,300,821,78,343,175,128,250,170,774,972,275,999,639,495,78,352,126,857,956,358,619,580,124,737,594,701,612,669,112,134,694,363,992,809,743,168,974,944,375,748,52,600,747,642,182,862,81,344,805,988,739,511,655,814,334,249,515,897,955,664,981,649,113,974,459,893,228,433,837,553,268,926,240,102,654,459,51,686,754,806,760,493,403,415,394,687,700,946,670,656,610,738,392,760,799,887,653,978,321,576,617,626,502,894,679,243,440,680,879,194,572,640,724,926,56,204,700,707,151,457,449,797,195,791,558,945,679,297,59,87,824,713,663,412,693,342,606,134,108,571,364,631,212,174,643,304,329,343,97,430,751,497,314,983,374,822,928,140,206,73,263,980,736,876,478,430,305,170,514,364,692,829,82,855,953,676,246,369,970,294,750,807,827,150,790,288,923,804,378,215,828,592,281,565,555,710,82,896,831,547,261,524,462,293,465,502,56,661,821,976,991,658,869,905,758,745,193,768,550,608,933,378,286,215,979,792,961,61,688,793,644,986,403,106,366,905,644,372,567,466,434,645,210,389,550,919,135,780,773,635,389,707,100,626,958,165,504,920,176,193,713,857,265,203,50,668,108,645,990,626,197,510,357,358,850,858,364,936,638],x.t)
D.cXW=w(["video/webm;codecs=vp9","video/webm;codecs=vp8","video/webm","video/mp4"],x.s)
D.fLl=new C.om("Original",0,1,1,0,0,0)
D.fLp=new C.om("Black & white",0,1.1,0,0,0,0)
D.fLc=new C.om("Noir",-0.05,1.55,0,0,0,0)
D.fLg=new C.om("Sepia",0,1,0.25,0.9,0,0)
D.fLf=new C.om("Vivid",0,1.15,1.6,0,0,0)
D.fL8=new C.om("Pop",0,1.3,1.9,0,0,0)
D.fLa=new C.om("Faded",0.06,0.85,0.8,0.1,0,0.4)
D.fLm=new C.om("Matte",0,0.9,0.85,0,0,0.55)
D.fLh=new C.om("Cool",0,1.05,1,-0.8,0,0)
D.fLo=new C.om("Warm",0.03,1.05,1.1,0.8,0,0)
D.fL9=new C.om("Golden hour",0.04,1,1.25,1,0,0)
D.fLe=new C.om("Moonlight",-0.08,1.1,0.8,-0.8,-0.1,0)
D.fLn=new C.om("Dreamy",0.08,0.85,1.1,0.2,0,0.25)
D.fLd=new C.om("Dramatic",-0.05,1.5,1.2,0,0,0)
D.fLj=new C.om("Retro",0,0.9,0.7,0.4,0,0.35)
D.fLi=new C.om("Forest",0,1,1.2,-0.1,-0.45,0)
D.fLk=new C.om("Rose",0,1,1.1,0.3,0.4,0)
D.fLb=new C.om("Ocean",0,1,1.2,-0.5,-0.2,0)
D.cXX=w([D.fLl,D.fLp,D.fLc,D.fLg,D.fLf,D.fL8,D.fLa,D.fLm,D.fLh,D.fLo,D.fL9,D.fLe,D.fLn,D.fLd,D.fLj,D.fLi,D.fLk,D.fLb],B.ax("P<om>"))
D.b4v=new B.w(1,0.0392156862745098,0.1803921568627451,0.09019607843137255,A.t)
D.cXY=w([D.adD,A.ec,D.b4v],x.O)
D.eaj=new B.z(0.12,0.3)
D.epQ=new B.z(0.26,0.75)
D.eo9=new B.z(0.8,0.22)
D.ety=new B.z(0.9,0.7)
D.eqC=new B.z(0.5,0.15)
D.erT=new B.z(0.65,0.85)
D.efX=new B.z(0.08,0.85)
D.cY9=w([D.eaj,D.epQ,D.eo9,D.ety,D.eqC,D.erT,D.efX],x.G)
D.avb=w([A.b7,A.bZ,A.by,A.bc],x.O)
D.cYX=w([y.L,"Mbuzi Wawili","Ngyoka","Mmoko"],x.s)
D.cZ8=w([A.c,A.fh,A.dy,A.uH],x.O)
D.b7I=new B.w(1,0.10980392156862745,0.09019607843137255,0.06274509803921569,A.t)
D.d_5=w([D.b7I,D.acl],x.O)
D.d_6=w([A.wP,A.av],x.O)
D.d_k=w([0,0.25,0.75,1],x.x)
D.d_m=w([A.wL,A.oj],x.O)
D.aDO=new C.kL(10,"kenteSunset")
D.fPB=w([D.acG,A.jF,A.av],x.O)
D.dur=new C.jh("kuhowa_kente_sunset","Kente ya Jua",y.H,D.aDO,4294964964,4282000405,4279983648,D.jx)
D.aDP=new C.kL(11,"indigoMudcloth")
D.b5t=new B.w(1,0.9686274509803922,0.9411764705882353,0.8941176470588236,A.t)
D.fPP=w([D.b5t,A.aci,A.hU],x.O)
D.duz=new C.jh("kuhowa_indigo_mudcloth","Nguo ya Indigo",y.n,D.aDP,4294439140,4279903102,4279903102,D.jx)
D.aDQ=new C.kL(12,"adinkraRoyal")
D.bhP=new B.w(1,0.4196078431372549,0.24705882352941178,0.12156862745098039,A.t)
D.fPQ=w([D.abj,D.bhP,A.av],x.O)
D.duB=new C.jh("kuhowa_adinkra_royal","Muhuri wa Adinkra",y.z,D.aDQ,4294965484,4285218591,4287322667,D.jx)
D.aDR=new C.kL(13,"nileLotus")
D.bei=new B.w(1,0.9568627450980393,0.9686274509803922,0.9568627450980393,A.t)
D.bb7=new B.w(1,0.058823529411764705,0.3607843137254902,0.3607843137254902,A.t)
D.fPV=w([D.bei,D.bb7,A.hU],x.O)
D.duA=new C.jh("kuhowa_nile_lotus","Lotus ya Nile","Nguzo za papyrus na ua la lotus juu.",D.aDR,4294244340,4279196764,4279196764,D.jx)
D.aDS=new C.kL(14,"shweshweIvory")
D.b9q=new B.w(1,0.9725490196078431,0.9568627450980393,0.9333333333333333,A.t)
D.b8k=new B.w(1,0.10588235294117647,0.16470588235294117,0.2901960784313726,A.t)
D.b5X=new B.w(1,0.7686274509803922,0.3607843137254902,0.24313725490196078,A.t)
D.fPC=w([D.b9q,D.b8k,D.b5X],x.O)
D.duw=new C.jh("kuhowa_shweshwe_ivory","Shweshwe","Nguo ya shweshwe \xb7 kadi ya pembe ndani.",D.aDS,4294505710,4279970378,4291058750,D.jx)
D.r8=new C.kL(15,"certIvoryNavy")
D.fPA=w([D.KD,D.j0,A.hU],x.O)
D.aDk=new C.xa(1,"ringsNdoa")
D.dut=new C.jh("kuhowa_rings_ndoa","Hati ya Ndoa","Pete mbili \xb7 vichwa vya kidonge \xb7 hati rasmi.",D.r8,4294966259,4279378237,4291404327,D.aDk)
D.a3E=new C.xa(2,"coupleCards")
D.duo=new C.jh("kuhowa_couple_taarifa","Taarifa za Wanandoa","Picha ya mwanamume na mwanamke kila upande.",D.r8,4294966259,4279378237,4291404327,D.a3E)
D.C4=new C.kL(18,"certIvoryNavyBar")
D.abi=new B.w(1,1,0.9882352941176471,0.9686274509803922,A.t)
D.fPO=w([D.abi,D.j0,A.hU],x.O)
D.aDl=new C.xa(3,"kuhoweshaForm")
D.dum=new C.jh("kuhowa_barua","Barua ya Kuhowesha","Barua rasmi \xb7 pete \xb7 orodha ya vitu.",D.C4,4294966519,4279378237,4291404327,D.aDl)
D.acv=new B.w(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,A.t)
D.fQ7=w([D.KD,D.acv,A.hU],x.O)
D.a3F=new C.xa(4,"mahariPande")
D.dup=new C.jh("kuhowa_mahari_pande","Mahari ya Pande","Masharti ya mahari \xb7 pande mbili.",D.r8,4294966259,4279904068,4291404327,D.a3F)
D.aDT=new C.kL(16,"certIvoryGreen")
D.b8R=new B.w(1,0.12156862745098039,0.30196078431372547,0.22745098039215686,A.t)
D.fPE=w([A.JX,D.b8R,A.hU],x.O)
D.aDm=new C.xa(5,"familiaMti")
D.duv=new C.jh("kuhowa_sheria_familia","Sheria za Familia","Mti wa familia \xb7 sheria za pamoja.",D.aDT,4294966776,4280241466,4291404327,D.aDm)
D.a3G=new C.xa(6,"ndoaSafi")
D.dun=new C.jh("kuhowa_ndoa_pamoja","Ndoa ya Pamoja","Safu mbili \xb7 mume na mke.",D.C4,4294966519,4279378237,4291404327,D.a3G)
D.bcR=new B.w(1,0.22745098039215686,0.16470588235294117,0.06274509803921569,A.t)
D.fPH=w([D.KD,A.hU,D.bcR],x.O)
D.a3H=new C.xa(7,"peteWide")
D.dus=new C.jh("kuhowa_pete_pana","Pete Pana","Pete kubwa za dhahabu \xb7 nafasi wazi.",D.r8,4294966259,4282001936,4291404327,D.a3H)
D.duC=new C.xa(8,"muhuriCrest")
D.dul=new C.jh("kuhowa_muhuri","Muhuri wa Familia","Muhuri mkubwa juu \xb7 fomu rasmi.",D.r8,4294966259,4279378237,4291404327,D.duC)
D.fPR=w([D.abi,D.acv,A.hU],x.O)
D.duD=new C.xa(9,"fomuWazi")
D.duy=new C.jh("kuhowa_fomu","Fomu ya Ndoa","Fomu yenye mistari \xb7 sehemu wazi.",D.C4,4294966519,4279904068,4291404327,D.duD)
D.aDU=new C.kL(17,"certIvoryRose")
D.b9s=new B.w(1,1,0.9725490196078431,0.9607843137254902,A.t)
D.fPU=w([D.b9s,D.adg,A.hU],x.O)
D.a3D=new C.xa(10,"upendoOrnate")
D.duu=new C.jh("kuhowa_upendo","Upendo wa Dhahabu","Mapambo ya dhahabu \xb7 picha za wanandoa.",D.aDU,4294965493,4286200650,4291404327,D.a3D)
D.d_K=w([D.dur,D.duz,D.duB,D.duA,D.duw,D.dut,D.duo,D.dum,D.dup,D.duv,D.dun,D.dus,D.dul,D.duy,D.duu],x.h)
D.e6=w([2774754246,2222750968,2574743534,2373680118,234025727,3177933782,2976870366,1422247313,1345335392,50397442,2842126286,2099981142,436141799,1658312629,3870010189,2591454956,1170918031,2642575903,1086966153,2273148410,368769775,3948501426,3376891790,200339707,3970805057,1742001331,4255294047,3937382213,3214711843,4154762323,2524082916,1539358875,3266819957,486407649,2928907069,1780885068,1513502316,1094664062,49805301,1338821763,1546925160,4104496465,887481809,150073849,2473685474,1943591083,1395732834,1058346282,201589768,1388824469,1696801606,1589887901,672667696,2711000631,251987210,3046808111,151455502,907153956,2608889883,1038279391,652995533,1764173646,3451040383,2675275242,453576978,2659418909,1949051992,773462580,756751158,2993581788,3998898868,4221608027,4132590244,1295727478,1641469623,3467883389,2066295122,1055122397,1898917726,2542044179,4115878822,1758581177,0,753790401,1612718144,536673507,3367088505,3982187446,3194645204,1187761037,3653156455,1262041458,3729410708,3561770136,3898103984,1255133061,1808847035,720367557,3853167183,385612781,3309519750,3612167578,1429418854,2491778321,3477423498,284817897,100794884,2172616702,4031795360,1144798328,3131023141,3819481163,4082192802,4272137053,3225436288,2324664069,2912064063,3164445985,1211644016,83228145,3753688163,3249976951,1977277103,1663115586,806359072,452984805,250868733,1842533055,1288555905,336333848,890442534,804056259,3781124030,2727843637,3427026056,957814574,1472513171,4071073621,2189328124,1195195770,2892260552,3881655738,723065138,2507371494,2690670784,2558624025,3511635870,2145180835,1713513028,2116692564,2878378043,2206763019,3393603212,703524551,3552098411,1007948840,2044649127,3797835452,487262998,1994120109,1004593371,1446130276,1312438900,503974420,3679013266,168166924,1814307912,3831258296,1573044895,1859376061,4021070915,2791465668,2828112185,2761266481,937747667,2339994098,854058965,1137232011,1496790894,3077402074,2358086913,1691735473,3528347292,3769215305,3027004632,4199962284,133494003,636152527,2942657994,2390391540,3920539207,403179536,3585784431,2289596656,1864705354,1915629148,605822008,4054230615,3350508659,1371981463,602466507,2094914977,2624877800,555687742,3712699286,3703422305,2257292045,2240449039,2423288032,1111375484,3300242801,2858837708,3628615824,84083462,32962295,302911004,2741068226,1597322602,4183250862,3501832553,2441512471,1489093017,656219450,3114180135,954327513,335083755,3013122091,856756514,3144247762,1893325225,2307821063,2811532339,3063651117,572399164,2458355477,552200649,1238290055,4283782570,2015897680,2061492133,2408352771,4171342169,2156497161,386731290,3669999461,837215959,3326231172,3093850320,3275833730,2962856233,1999449434,286199582,3417354363,4233385128,3602627437,974525996],x.t)
D.Hq=new C.vE(0,"emojis")
D.Cb=new C.vE(1,"pictures")
D.Hr=new C.vE(2,"icons3d")
D.a3Y=new C.vE(3,"animations")
D.R0=new C.vE(4,"videoMotion")
D.Cc=new C.vE(5,"luxe")
D.a1N=w([D.Hq,D.Cb,D.Hr,D.a3Y,D.R0,D.Cc],B.ax("P<vE>"))
D.est=new B.z(A.dW,"Looks")
D.ehR=new B.z(A.y6,"Light")
D.ehN=new B.z(A.n1,"Colour")
D.efY=new B.z(A.xG,"Effects")
D.ajt=new B.a0(63112,"MaterialIcons",!1)
D.ed4=new B.z(D.ajt,"Crop")
D.d0e=w([D.est,D.ehR,D.ehN,D.efY,D.ed4],x.f2)
D.d0R=w([],x.D)
D.fQ4=w([],x.L)
D.eg8=new B.z("Flashcard",D.Hl)
D.ejI=new B.z("Quiz",D.Hm)
D.ely=new B.z("Worksheet",D.Hn)
D.eiP=new B.z("Notes",D.mp)
D.ekc=new B.z("Section",D.C9)
D.d1t=w([D.eg8,D.ejI,D.ely,D.eiP,D.ekc],B.ax("P<+(n,mo)>"))
D.dwi=new C.kL(6,"beadedPearl")
D.bbM=new B.w(1,0.47843137254901963,0.3607843137254902,0.1803921568627451,A.t)
D.fQ8=w([P.Wr,D.bbM,A.hU],x.O)
D.aDi=new C.jh("malipo_beaded_pearl","Malipo \u2014 Lulu","Mpaka wa shanga za lulu kuzunguka pembeni \xb7 dhahabu na shaba.",D.dwi,4294966774,4286209070,4291404327,D.jx)
D.dwj=new C.kL(7,"artDeco")
D.bfu=new B.w(1,0.9686274509803922,0.9607843137254902,0.9490196078431372,A.t)
D.bi4=new B.w(1,0.12156862745098039,0.10588235294117647,0.08627450980392157,A.t)
D.fQ6=w([D.bfu,D.bi4,A.bU],x.O)
D.aDj=new C.jh("malipo_art_deco","Malipo \u2014 Art Deco","Pembe za ngazi za kisasa \xb7 mng'ao wa dhahabu juu.",D.dwj,4294440434,4280228630,4290283019,D.jx)
D.dwk=new C.kL(8,"rosetteCorners")
D.bhk=new B.w(1,0.984313725490196,0.9647058823529412,0.9372549019607843,A.t)
D.b7K=new B.w(1,0.4196078431372549,0.24705882352941178,0.16470588235294117,A.t)
D.bbH=new B.w(1,0.788235294117647,0.4823529411764706,0.23921568627450981,A.t)
D.fPK=w([D.bhk,D.b7K,D.bbH],x.O)
D.aDh=new C.jh("malipo_rosette","Malipo \u2014 Duara","Medali ya duara kila pembe \xb7 shaba na mahogany.",D.dwk,4294702831,4285218602,4291394365,D.jx)
D.dwl=new C.kL(9,"modernLedger")
D.fPJ=w([A.c,D.j0,D.j0],x.O)
D.aDg=new C.jh("malipo_modern_ledger","Malipo \u2014 Kisasa","Ukanda thabiti wa bluu upande wa kushoto \xb7 mstari mwembamba.",D.dwl,4294967295,4279378237,4279378237,D.jx)
D.d1x=w([D.aDi,D.aDj,D.aDh,D.aDg],x.h)
D.d1F=w([A.il,A.oj],x.O)
D.cg=new C.hw(0,"none")
D.dd=new C.hw(1,"fade")
D.Ho=new C.hw(3,"slideRight")
D.aEf=new C.hw(5,"slideDown")
D.dQX=new C.hw(7,"zoomOut")
D.a3X=new C.hw(11,"cube")
D.dQS=new C.hw(12,"blur")
D.aEc=new C.hw(13,"dissolve")
D.dQT=new C.hw(14,"wipeLeft")
D.dQU=new C.hw(15,"wipeRight")
D.R_=new C.hw(17,"push")
D.dQV=new C.hw(18,"flash")
D.aEe=new C.hw(20,"swing")
D.dQW=new C.hw(21,"curtain")
D.PE=w([D.cg,D.dd,D.u_,D.Ho,D.u0,D.aEf,D.mq,D.dQX,D.Hp,D.aEg,D.QZ,D.a3X,D.dQS,D.aEc,D.dQT,D.dQU,D.pT,D.R_,D.dQV,D.aEd,D.aEe,D.dQW],x.i)
D.d1T=w(["HOME: the first tab. It has the NGMY brand, the Helper AI, loans, and the tech frames: Neural Link, Signal Grid, Core Protocol and the Vault Channel arcade.","TOOL HUB: the second tab. It holds the Business Card Creator, Menu Studio (restaurant menus and Bio link pages) and Business Essentials (invoices, receipts, flyers and other business papers).","SLIDES: the third tab. Presentations with many designs, an AI that makes decks, and Marriage documents.","NGMY HUB: the centre tab. Civic Registry, NGMY Store, Help Center and Insurance, Document Scanner, and the App Builder when it is switched on.","ADVISORS: the fifth tab. AI advisors you can chat with like real people. They help with jobs, applications, benefits and everyday questions, and they can answer in Swahili when you write Swahili.","CREATOR HUB: the sixth tab. Doc Share, Quote Calc, QR Generator, Play Zone, Kiswahili School, Recorder Studio, Video Studio and Phone Unlock.","PROFILE: the seventh tab. Theme, logout, legal pages and Worksheets (Projects, Cashier IOUs and receipts, and the Family Tree).","GROWTH INCOME: For now the Growth Income button (the wifi icon, top right of Home) works only for the admin: everyone else sees the same icon but it does not open. members buy an investment plan and earn daily by clocking in, on work days only (Monday to Friday, there is no clock-in on Saturday and Sunday). The wallet shows the balance, deposits, withdrawals and a history of the last two months, with the balance before and after each move. Missing 3 work days in a month removes the investment plan (a new plan must be bought), and the count starts again each month; a warning shows after the 2nd missed day. Clocking in 30 minutes late or more takes 30 percent off the earnings for that day. The investment plans are $5, $20, $30, $50 and $100; $100 is the most expensive plan and nothing above it is offered.","KING AND QUEEN CROWN: a crown badge for special members. A King or Queen receives a daily crown reward of one dollar, and the receipt shows in the wallet history.","WALLET: one balance everywhere in the app. The server keeps the balance so every phone shows the same number.","LOANS: Loan Services is a community help service: it helps members when they need help, for example funerals, buying a car, car repairs or family emergencies. For now the Loan Service button (top left of Home) works only for the admin: everyone else sees the same icon but it cannot be opened. The loan calculator (amount, interest rate and repayment period to try, the whole cost and every payment, and a button to make the tried terms the real loan terms) is for the admin only. The How it works frame is a five-step timeline (Apply, Review, Funds, Repay, Released). A loan is applied for with collateral, repaid in weekly payments, and the collateral is released back to the member when the loan is fully repaid. The admin sets the interest rate, the biggest loan and the repayment period in Loan Center, Loan terms; nothing is written into the screens. Before applying, the member sees the full cost (amount, interest, total to repay, number of payments, each payment, repayment period) and must tap I agree; the agreement is saved with the application. The application asks what the member needs help with (Funeral or Burial, Buy a car, Car repair, Family emergency, Other need), the date needed, the collateral with its estimated value and photos, and an optional family or guarantor contact. A loan shows as Pending, Approved, Paid Out, In Repayment, Repaid, Overdue or Declined, and the member sees a gentle reminder about the next payment.","NGMY STORE: buy and sell items inside the app. Approved members can open a store.","CIVIC REGISTRY: the community system for the M'MBONDO community. It registers members with a Registry ID card, counts members by state, records contributions with receipts, and lets Authorized Registrars enroll families. Registrars can print the community roster as a PDF.","CIVIC BIRTHDAYS AND FAMILY: the registry records children and their ages, shows a birthday reminder two days before, and congratulates a child on turning 18. Members can have a nickname that others search for, while registrars see the real name.","CIVIC VOTING AND STATE WALLET: the community votes on decisions inside the app, and each state has a wallet showing its funds, spending and trust deposits so the money is visible to everyone.","LIGHTNING GROUPS: groups inside the Civic Registry where people give together. A person asks to join with a name, phone number, state and address, and the group owner approves. The group shows named contribution rounds, receipts, who gave, who missed and how many times.","JOBS AND HELP: help finding jobs, house repairs and house workers, a Help Center with insurance, and the Helper AI for support.","CORE PROTOCOL: a collection of studios for curious minds: Universe, Electronics Lab (the AI Inventor now lives inside it as the AI button at the top), Construction Lab (real 3D wiring, plumbing and a house), Discovery Lab (Body Explorer, a real 3D human you can turn and look inside), Toolbox, Molecule Maker, DNA Lab, Ecosystem Lab, Balance Lab, Gear Lab, Laser Maze, Light Mixer, Cipher Lab, Reaction Lab, Spark Painter, Rocket Lander, Orbit Studio, Swarm Studio, Chain Burst, Title Animator, Circuit Lab, Marble Music and Orbit Sequencer.","CONSTRUCTION LAB: a trade school in real looking 3D, MY HOUSE (top card of the Construction Lab): a finished furnished house with 5 bedrooms, 3 bathrooms, a kitchen, a living room and a hall, each drawn as a cut-away 3D room. A little map in the corner shows where you are, tap a room to go there, or use the door buttons; red marks a room whose wiring needs work and blue one whose plumbing does. Signals in the room (a red No power sign, a blue Needs plumbing sign, bare pipe stubs) show what is wrong; the Wiring and Plumbing buttons, or a tap on the outlet, light, toilet or sink, open the same hands-on jobs and the room is finished when the job is. Furniture, walls, floor, ceiling and doors only react while their own edit button is on: Furniture (add, move with arrows, turn, change colour, remove), Walls (paint one wall or all), Floor (wood, carpet or tile), Ceiling, Doors (open and close). A Learn button opens short beginner cards on safety, wiring, plumbing, framing and tools. In My House you are inside the room by default (a low view, like standing in the doorway) and a button switches to a view of the whole room from above. A \ud83c\udfac Tour button plays a life-like person (an adult with a face, hair, arms, legs and a real stride) who comes in through the front door and walks through the whole house like a film, in the time you choose (30 seconds, 1, 2, 3 or 5 minutes), after every TV is switched on. The walk is planned round the furniture and fixtures, so the person never goes through a wall, a chair or a table; in the living room and the bedrooms the person picks up the remote and switches the ad on the TV, in the kitchen they take a drink from the fridge, in the bathrooms they wash their hands, and between rooms they open the door and walk through into the hall. The doors really swing open and show the next room behind them; when the person opens a door the camera moves in towards it, then the picture dissolves into the next room (the hall, a bedroom, a bathroom) where the camera starts on the door they come out of, and the door closes behind them as they walk on. TVs on the wall go from 100 inches to 150, 200 and a whole-wall TV: each is as big as the free stretch of wall allows, never over a door, with nothing in front of it, and the person on the tour stands beside the TV and not in front of it. The hall is wider and deeper, has all ten doors on its back wall and a big TV on each end wall. A \ud83d\udd04 Look all round (360) button puts you in the middle of a closed room (solid ceiling and four walls) to turn all the way round by dragging; a double tap on the floor walks you to that spot, and from above or in the garden a double tap takes the view closer to where you tapped. The view can never go under the floor. The garden is a big lawn you can walk all the way round, and the house outside has windows and doors on all four sides, a porch, a chimney and a roof; with the Furniture button you can add and move trees, pines, bushes, flowers, fences, street lamps, benches, cars, roads, ponds, swings, sheds and dog houses. The cards on the Construction Lab home screen are centred, with a glowing round icon and a soft colour. Inside a room the view stays inside the house: you can look about a little but you cannot swing round behind the walls, and a Go outside button (and Go inside in the garden) is the only way out. Everything in a room is drawn in layers (the floor and walls first, then what is fixed to them like the TV, the plates, the frames and the doors, then the furniture and the person), so the edges of a TV or a door never disappear when you turn to the side and the person never shows through a door, a wall or their own body. The person is built from rounded parts with real joints (a head with a face and hair, shoulders, elbows, knees, hands and shoes), the foot that is down always stands on the floor, and the walk keeps a body-width away from furniture and walls. A TV button puts a wall TV (five models, the big ones up to 77 inches) in a room, or in every room, and turns TVs on and off. An Add button adds outlets, GFCI outlets and light switches to a room that you wire yourself with the wiring bench, a Map button shows or hides the little map (which shrinks to fit the screen), and the Start from a bare house button makes every room need its wiring and plumbing so you can wire the whole house first. The ceiling of a room can hold a light or a fan. All the lessons on the lab home screen (Wall outlet, Light switch, GFCI outlet, Ceiling fan, Sink drain, Faucet supply lines, Build and fix a house, Learn the trades: eight tiles, four on each side) play inside a furnished room with a big TV on the wall showing the NGMY Jobs ad; the ceiling light is already in and only the thing being taught is waiting (red), and once it is done you can use it: flip the switch, plug in a lamp, TV or hair dryer, watch the fan spin. The house also has a Garden (a view of the house from outside with a tree, a path and a mailbox): the front door of the living room leads out to it and the front door there leads back in. Tap a door in a room to open it and walk through it into the next room or the hall, like in a game. Every room can be fixed, even the ones shown as finished: a finished room opens finished and you can pull devices out and wire them again. In a wired room tap an outlet to plug something in (five big TVs from Beovision to Apple TV that play NGMY ads, a lamp, a toaster or a hair dryer) or unplug it, tap the wall switch (or the light) to turn the light or the ceiling fan on and off, and tap a TV to watch it full screen with its own brand home screen. Bedrooms have ceiling fans. Wire a room, Plumb a room and Fix a house on the lab home screen all open My House at a room that needs that job. In the wiring jobs a wrong wire can be fastened just like for real and it burns or trips the breaker when the power goes on, touching a live wire shocks (in Learn mode it hurts nothing but the shock still happens, in Practice mode it costs a life), the wire buttons that are already fastened disappear, the screw labels are kept away from the wires, finished devices have a bright frame so they are easy to find from far, finished rooms have a painted ceiling with crown moulding and no bare beams, and a TV in the room job opens full screen when tapped. The Construction Lab downloads on its own when its button is pressed, so the Core Protocol opens quickly. A TV that is plugged in and on plays the real NGMY ads right on its screen, flat on the glass like a normal TV, without opening it (tap it to watch full screen). There is a Voltage tester: in My House pick the Tester button and tap an outlet, the switch or the light (it glows and beeps when there is power and stays dark when there is none), and in the wiring jobs it is the Voltage tester right after Look in the devices tray. The Construction Lab menus are now at the top like in the Electronics Lab, the home screen of the lab is a short list of tiles with a Learn mode and Practice mode switch, a device already put in can be tapped again to open it or pull it out, and a tap that misses never moves the view. opened from the construction helmet button next to the AI button at the top of the Electronics Lab, and also as a tile in the Core Protocol. Every model can be turned with a finger, zoomed by pinching or with the zoom buttons, and any part can be tapped to zoom in and read what it is. Lessons: Wall outlet (black hot wire to the brass screw, white neutral to the silver screw, bare copper ground to the green screw), Light switch (two black wires on the two brass screws, white wires joined with a wire nut), GFCI outlet (power in on the LINE screws, the LOAD screws are covered with yellow tape, press RESET then TEST), Sink drain (build the tailpiece, P-trap and trap arm, tighten the slip nuts, run the water and see the water seal that blocks sewer gas), Faucet supply lines (hot red hose on the left, cold blue hose on the right, then open the shut-off valves) and a whole house cut open at the front that can be built stage by stage (slab, framing, plumbing rough-in, electrical rough-in, drywall, fixtures, roof), where a tripped breaker and a leaking slip nut can be fixed and each fixture opens its own lesson. The electrical lessons start with the breaker ON and refuse any wire until it is turned OFF, and every wrong connection is explained in plain words. BUILD A WHOLE ROOM (also WIRE A ROOM quick start, and a Skip to the wiring button in the tray, which do the framing, cable and drywall for you so you start straight at wiring the outlets, switches, light and fan with coloured labelled screws, the tester, the TV and the switch test; the room has a window wall, a door wall and the working wall): a project with three phases (rough-in, drywall, devices). Rough-in: mount wall boxes, ceiling boxes and a fan box on the studs with the drill, and unroll the cable through the studs and ceiling (a wrong route gives an error). Drywall: hang the sheets, cut holes with the drywall saw, screw them to the studs, then tape, mud, sand and paint. Devices: wire outlets, several switches, a ceiling light and a ceiling fan, each with a switch to test, then plug in a TV and other appliances. The screw terminals have different colours (brass gold hot, silver neutral, green ground) and show a label when tapped. A Behind the wall / In front button lets you choose which side of the wall you look from instead of the camera turning by itself. Learn mode tells you what to do next and explains every wrong move; Practice mode only speaks up when something is done wrong, and real wiring mistakes shock (three lives) or burn. SERVICE CALLS (Fix a house, learn and practice): a customer rings with four problems chosen from twelve kinds (tripped breaker, no hot water, leaking slip nut, leaking crimped joint, dead outlet, flickering light, burnt outlet, tripped GFCI, running toilet, dripping faucet, hole in the wall, clogged sink), a different mix every time; use Look and test, then the right tool from the toolbox (hand, screwdriver, pliers, wrench, crimp tool, plunger, new flapper, new outlet, drywall patch); wires must have their breaker switched off first. PLUMBING JOBS (learn and practice): fit out a bathroom (flange, wax ring, toilet, bolts, shut-off valve, supply hose, then the sink) or a kitchen sink piece by piece, with the order checked (the app says why a piece cannot go there yet), the main water valve turned off before cutting into pipes, joints tightened with the wrench, and finally the water turned on to find leaks.","ELECTRONICS LAB: build real circuits with 56 parts in two tool rows, both at the top above the board (swipe sideways), under a redesigned top bar with the lab name, a live count of working and burnt parts, buttons for ready-made circuits, repair, clear and help, and a challenge card with a progress bar: batteries, solar panel, hand crank, wind turbine, switch, fuse, bulb, LED, motor, radio, TV, fan, speaker, clock, calculator, phone charger, WiFi router, siren, toy car, kettle, desk lamp, party lights, voltmeter and ammeter, step-down converter (brings big battery volts down to 3 to 9 V so a phone, tablet, headphones or smart watch is safe), 5 V regulator (gets hot), diode (one way, 0.7 V drop), light sensor, LED strip, water pump, hair dryer, headphones, smart watch, tablet, fridge, washing machine, blender, drone, power drill, torch, neon sign, microwave, doorbell, security camera, game console, heart monitor, aquarium, lighthouse, disco ball, robot and toaster. Each gadget needs the right volts and the right way round: the lab explains why something is not working (not connected, only one end wired, plugged in backwards, flat battery, switch open, too few volts, burnt out and why). A 1.5 volt battery starts flat and must be charged by a solar panel first. The TV shows NGMY animation channels: it opens on the big screen by itself for a minute when it first switches on, and tapping it 3 times quickly opens the big screen. Each TV brand shows its apps in its own design: Samsung with a Smart Hub bar along the bottom, LG with webOS wide launcher cards, Sony with Google TV rows and a picture card, Apple TV with big rounded icons that rise when selected, and Bang and Olufsen with a quiet warm text menu. The TV has 10 NGMY animation channels, a remote control at the top middle of the big screen (CH minus, CH plus, TV, Apps, Ads) and 8 apps inside the TV screen (there is no Growth Income ad or app on the TVs): NGMY Ads (every promotion as cartoons), Civic Registry, Jobs, NGMY Store (African and traditional food, supporting the Congolese and African community), Kiswahili, Doc Scanner, Invoices and Calendar. Each ad is a little cartoon with a kid character. Premium devices with screens play the NGMY cartoon ads on their own screens: TVs (Samsung Neo QLED 8K, LG OLED evo G5, Sony Bravia 9, Apple TV 4K, Bang and Olufsen Beovision), phones (iPhone 18 Pro Max with a Dynamic Island, iPhone Fold, Galaxy S26 Ultra, Galaxy Z Fold7, Pixel 10 Pro XL, Xiaomi 16 Ultra, Huawei Mate 80 Pro Max, OPPO Find X9 Ultra, Honor Magic V5, vivo X300 Pro), tablets and readers (iPad Pro, Kindle Scribe), computers (MacBook Pro, iMac, Pro Display XDR monitor, Sony laser projector, luxury car touchscreen, Apple Vision Pro). Tapping a screen 3 times opens its big screen (a phone opens like an iPhone, a computer shows a desktop with a dock and app windows). Tapping it 4 times opens a size sheet so the screen can be made bigger (never smaller than normal). Sample circuit: Phone and TV on one battery, using a step-down converter. The AI button at the top of the lab opens the AI Inventor, which builds what you describe on the lab board.  Every battery and solar panel can only give so many amps: when the gadgets connected ask for more, a red warning triangle appears on the power source, its volts sag, gadgets switch off and the lab explains why. The lab saves your board and your challenges by itself, so nothing disappears when you leave. The challenges sit behind a flag button in the top bar (with a number on it for how many are left), next to the dark glowing AI button and the help button.","BODY EXPLORER: a real 3D human body built from medical anatomy data. You can turn it, zoom in, switch layers (skin, muscles, organs, skeleton, blood vessels), tap any part to learn about it, hear the heart beat, and take a quiz.","KISWAHILI SCHOOL: learn English and Swahili with pictures and the teacher Mwalimu Amina.","FAMILY TREE AND FAMILY BOOK: build a family tree, then keep a Family Book library of up to six books. The AI can write a whole new book from the tree, in English or Swahili, and the cover can be designed. The look of the top of each book can be chosen from eight header designs (classic leather, ornate gold, parchment, clean paper, midnight, emerald, rose vintage, modern) with the Header button, and the book title also shows as a small running title on every page.","NOTES: business notes with search, photos and cards.","NGMY QUOTES: make a picture quote with many designs, word sizes, text styles, your own photo and the NGMY logo. It also makes NEWS: a newspaper page with a headline, article and your picture, written by an AI that knows NGMY.","BIO STUDIO: link-in-bio pages with designs such as Neural Core, Quantum Grid and Mech Terminal, and visitors can react to a page.","MENU STUDIO: restaurant menus published as a link.","BUSINESS CARD CREATOR: design and download business cards.","INVOICES AND QUOTE CALC: invoices, receipts and estimates with NGMY watermarks.","DOC SHARE, QR GENERATOR, RECORDER STUDIO, VIDEO STUDIO, PLAY ZONE AND PHONE UNLOCK: tools in the Creator Hub.","APP BUILDER: describe an app and the AI builds it, including real web apps you can publish.","DOCUMENT SCANNER: scan papers with the phone camera.","GAME CENTER AND VAULT ARCADE: arcade games you can play. Game bets and wins have their own receipts and do not appear in the wallet history. Games played offline are saved on the phone and counted on the balance, then applied to the account in order as soon as the phone is online again, and every device updates."],x.s)
D.PF=w([D.a3C,D.a3A,D.a3t,D.a3u,D.a3v,D.a3y,D.a3w,D.a3x,D.a3B,D.a3z,D.aDi,D.aDj,D.aDh,D.aDg],x.h)
D.d27=w([y.L,"Mbuzi Mbili","Ngyoka","Mmoko"],x.s)
D.d2b=w([A.A7,A.hD,A.bU],x.O)
D.ehd=new B.z(A.tz,"Design")
D.etY=new B.z(D.ajK,"Word sizes")
D.eqm=new B.z(A.Bk,"Text")
D.bBu=new B.a0(983182,"MaterialIcons",!1)
D.eqq=new B.z(D.bBu,"Photo")
D.ecH=new B.z(A.lc,"Logo")
D.ev2=new B.z(A.FX,"News")
D.d2g=w([D.ehd,D.etY,D.eqm,D.eqq,D.ecH,D.ev2],x.f2)
D.d2h=w(["golddust","sparkle","sheen"],x.s)
D.dSj=new C.er("upload_pdf",K.N_,"Upload PDF")
D.dRt=new C.er("sign_paper",A.FU,"Sign Paper")
D.bAL=new B.a0(63438,"MaterialIcons",!1)
D.dSf=new C.er("hd_photo",D.bAL,"HD Photo")
D.dRl=new C.er("sharpen",E.ZK,"Sharpen")
D.dRv=new C.er("print",K.N_,"Download PDF")
D.dRX=new C.er("rotate",D.ajt,"Rotate")
D.dRE=new C.er("text_box",A.Bk,"Text Box")
D.dRG=new C.er("picture",A.tC,"Picture")
D.dRC=new C.er("title",A.y0,"Title")
D.dRy=new C.er("subtitle",T.akm,"Subtitle")
D.dS5=new C.er("bullets",I.a_0,"Bullet List")
D.dRz=new C.er("numbered",A.MP,"Numbered")
D.dS8=new C.er("quote",A2.Bc,"Quote")
D.dRL=new C.er("citation",A.pE,"Citation")
D.dSb=new C.er("date_stamp",Ah.ZP,"Date Stamp")
D.dRZ=new C.er("page_number",A.y_,"Page #")
D.dS2=new C.er("header_bar",A.Bm,"Header")
D.dRF=new C.er("footer_bar",Aq.a_x,"Footer")
D.dRu=new C.er("divider",A.tB,"Divider")
D.dRq=new C.er("highlight",A.a_5,"Highlight")
D.dS4=new C.er("redact",A.y3,"Redact")
D.dRS=new C.er("callout",A.B8,"Callout")
D.dSd=new C.er("checkboxes",I.aiJ,"Checklist")
D.dRP=new C.er("table",A.a_v,"Table")
D.dRJ=new C.er("memo",I.a_h,"Memo")
D.dRT=new C.er("letter",A.FJ,"Letter")
D.bAn=new B.a0(63259,"MaterialIcons",!0)
D.dRk=new C.er("agenda",D.bAn,"Agenda")
D.dRw=new C.er("toc",Az.ajX,"Contents")
D.bAH=new B.a0(63406,"MaterialIcons",!1)
D.dRQ=new C.er("sig_line",D.bAH,"Sign Line")
D.dRd=new C.er("initial_line",A.ja,"Initials")
D.dRg=new C.er("approved",A.lc,"APPROVED")
D.dRV=new C.er("draft",A.oC,"DRAFT")
D.dS0=new C.er("confidential",A.jb,"Confidential")
D.dS3=new C.er("sticky",A.N5,"Sticky Note")
D.dSc=new C.er("progress",A.ajW,"Progress")
D.bBX=new B.a0(983507,"MaterialIcons",!1)
D.dRr=new C.er("stars",D.bBX,"Star Rating")
D.dRb=new C.er("equation",A.ajN,"Equation")
D.dRm=new C.er("timeline",A.N6,"Timeline")
D.dRK=new C.er("two_col",A.a_y,"Two Columns")
D.dRo=new C.er("compare",A1.ZS,"Compare")
D.dR9=new C.er("duplicate_el",A.fJ,"Duplicate")
D.dSh=new C.er("delete_el",A.e4,"Delete")
D.dS7=new C.er("bring_fwd",P.ajG,"Bring Front")
D.dRe=new C.er("send_back",P.ajF,"Send Back")
D.dRU=new C.er("align_left",D.ZZ,"Align L")
D.dS_=new C.er("align_center",D.ZY,"Align C")
D.dSg=new C.er("align_right",D.a__,"Align R")
D.dRD=new C.er("word_count",A0.Zt,"Word Count")
D.dRA=new C.er("link_text",A.hj,"Link")
D.dRY=new C.er("phone",A.ix,"Phone")
D.dRp=new C.er("email",A.Ba,"Email")
D.dSi=new C.er("qr_placeholder",A.jd,"QR Placeholder")
D.dRj=new C.er("rectangle",A3.vg,"Rectangle")
D.dRO=new C.er("circle",A.qL,"Circle")
D.dRf=new C.er("arrow",A.j9,"Arrow")
D.dS6=new C.er("line",A.tB,"Line")
D.dRs=new C.er("triangle",A.ZQ,"Triangle")
D.bAv=new B.a0(63318,"MaterialIcons",!1)
D.dRx=new C.er("grayscale",D.bAv,"Grayscale")
D.dRH=new C.er("brighten",I.aj2,"Brighten")
D.dRM=new C.er("flip_h",A.Fz,"Flip H")
D.bAC=new B.a0(63348,"MaterialIcons",!1)
D.dSe=new C.er("flip_v",D.bAC,"Flip V")
D.dS1=new C.er("cover_page",A.pz,"Cover Page")
D.dRc=new C.er("invoice",A.h5,"Invoice")
D.dRn=new C.er("resume",A.md,"Resume")
D.dRB=new C.er("minutes",A.ow,"Minutes")
D.dRh=new C.er("lab_report",A.N2,"Lab Report")
D.dRi=new C.er("rubric",A.xK,"Rubric")
D.dRN=new C.er("flashcard_tool",V.FQ,"Flashcard")
D.dS9=new C.er("quiz_tool",A.FN,"Quiz Block")
D.dRR=new C.er("worksheet_tool",L.Fq,"Worksheet")
D.dRW=new C.er("outline_share",A.N3,"Share Outline")
D.dSa=new C.er("export_json",D.aiP,"Export JSON")
D.dRa=new C.er("new_slide",D.Zs,"New Slide")
D.dRI=new C.er("present",A.pG,"Present")
D.d2G=w([D.dSj,D.dRt,D.dSf,D.dRl,D.dRv,D.dRX,D.dRE,D.dRG,D.dRC,D.dRy,D.dS5,D.dRz,D.dS8,D.dRL,D.dSb,D.dRZ,D.dS2,D.dRF,D.dRu,D.dRq,D.dS4,D.dRS,D.dSd,D.dRP,D.dRJ,D.dRT,D.dRk,D.dRw,D.dRQ,D.dRd,D.dRg,D.dRV,D.dS0,D.dS3,D.dSc,D.dRr,D.dRb,D.dRm,D.dRK,D.dRo,D.dR9,D.dSh,D.dS7,D.dRe,D.dRU,D.dS_,D.dSg,D.dRD,D.dRA,D.dRY,D.dRp,D.dSi,D.dRj,D.dRO,D.dRf,D.dS6,D.dRs,D.dRx,D.dRH,D.dRM,D.dSe,D.dS1,D.dRc,D.dRn,D.dRB,D.dRh,D.dRi,D.dRN,D.dS9,D.dRR,D.dRW,D.dSa,D.dRa,D.dRI],B.ax("P<er>"))
D.d2O=w([A.cn,A.ak],x.O)
D.ech=new B.z(4286331629,4292552567)
D.ec4=new B.z(4280640491,4278630100)
D.ecp=new B.z(4294538006,4292943176)
D.ebr=new B.z(4278556265,4280640491)
D.cYj=w([D.ech,D.ec4,D.ecp,D.ebr],x.n)
D.cnk=w([4294626325,4280472558,4294210230],x.t)
D.dR4=new C.nA("colorful","Colorful",A.n1,D.cYj,4294967295,3875536895,D.cnk,D.mq)
D.ebT=new B.z(4279522093,4279657780)
D.ec8=new B.z(4281750292,4283268111)
D.ebu=new B.z(4278603323,4279203438)
D.ec9=new B.z(4282343954,4279599165)
D.cy6=w([D.ebT,D.ec8,D.ebu,D.ec9],x.n)
D.cn2=w([4288931381,4294829706,4287033260],x.t)
D.dR0=new C.nA("nature","Nature",A.FV,D.cy6,4294442727,3874290891,D.cn2,D.dd)
D.ebN=new B.z(4279369771,4283178389)
D.ebK=new B.z(4279179050,4286456526)
D.ec0=new B.z(4280163147,4290648157)
D.ebj=new B.z(4278322711,4285343961)
D.cPj=w([D.ebN,D.ebK,D.ec0,D.ebj],x.n)
D.cng=w([4294210230,4280472558,4289170426],x.t)
D.dQZ=new C.nA("vibe","Vibe",A.a_3,D.cPj,4294967295,3874869502,D.cng,D.u_)
D.ecl=new B.z(4290007817,4292552567)
D.ecf=new B.z(4286328082,4294286859)
D.eck=new B.z(4288485197,4294538006)
D.ece=new B.z(4285343961,4293675161)
D.bUz=w([D.ecl,D.ecf,D.eck,D.ece],x.n)
D.cnl=w([4294829706,4294967295,4284999929],x.t)
D.dR_=new C.nA("celebration","Celebration",A.l7,D.bUz,4294967295,4009752557,D.cnl,D.pT)
D.ebI=new B.z(4279179050,4280171146)
D.ebM=new B.z(4279310375,4280232247)
D.ebA=new B.z(4278916151,4280172719)
D.ebJ=new B.z(4279179050,4281549141)
D.cID=w([D.ebI,D.ebM,D.ebA,D.ebJ],x.n)
D.cmY=w([4281908728,4294626325,4287931320],x.t)
D.dR3=new C.nA("professional","Professional",A.B6,D.cID,4294967295,3872118241,D.cmY,D.R_)
D.ebE=new B.z(4278995566,4278413729)
D.ebw=new B.z(4278727492,4279137424)
D.ec1=new B.z(4280171146,4278751666)
D.ebF=new B.z(4278995566,4279590517)
D.cr5=w([D.ebE,D.ebw,D.ec1,D.ebF],x.n)
D.cn0=w([4286436348,4284410580,4294829706],x.t)
D.dR5=new C.nA("ocean","Ocean",I.a_A,D.cr5,4294967295,3873501950,D.cn0,D.u0)
D.ecg=new B.z(4286328082,4294538006)
D.eci=new B.z(4286781507,4294677052)
D.ecc=new B.z(4283178389,4294197086)
D.ecj=new B.z(4288295954,4294688548)
D.cEQ=w([D.ecg,D.eci,D.ecc,D.ecj],x.n)
D.cnm=w([4294829706,4294967295,4294747557],x.t)
D.dR6=new C.nA("sunset","Sunset",A.N8,D.cEQ,4294967295,4009749973,D.cnm,D.dd)
D.ect=new B.z(4294967295,4294047225)
D.eco=new B.z(4294507260,4294967295)
D.ecs=new B.z(4294967295,4293060848)
D.ecn=new B.z(4294507260,4294047225)
D.cSj=w([D.ect,D.eco,D.ecs,D.ecn],x.n)
D.cmW=w([4280640491,4279179050,4287931320],x.t)
D.dR2=new C.nA("minimal","Minimal",A3.vg,D.cSj,4279179050,4282865001,D.cmW,D.dd)
D.ebD=new B.z(4278979081,4280886564)
D.ebX=new B.z(4280031511,4278979081)
D.ebL=new B.z(4279308561,4281148438)
D.ebC=new B.z(4278979081,4280031511)
D.d4E=w([D.ebD,D.ebX,D.ebL,D.ebC],x.n)
D.cn9=w([4292128567,4294829706,4289241758],x.t)
D.dR7=new C.nA("elegant","Elegant",A.lF,D.d4E,4294898631,3873957348,D.cn9,D.aEc)
D.ebZ=new B.z(4280159034,4282058596)
D.ebz=new B.z(4278916151,4280163147)
D.ec6=new B.z(4281208933,4278916151)
D.ebQ=new B.z(4279502891,4283178389)
D.db3=w([D.ebZ,D.ebz,D.ec6,D.ebQ],x.n)
D.cni=w([4294296657,4292128567,4291081725],x.t)
D.dR1=new C.nA("royal","Royal Gold",A.iR,D.db3,4294965222,3874084351,D.cni,D.mq)
D.ebo=new B.z(4278464302,4280163147)
D.eby=new B.z(4278916151,4279455306)
D.ec_=new B.z(4280163147,4283040846)
D.ebl=new B.z(4278332450,4281413249)
D.cY0=w([D.ebo,D.eby,D.ec_,D.ebl],x.n)
D.cmX=w([4281193663,4289170426,4294210230],x.t)
D.dR8=new C.nA("aurora","Aurora Glow",A.dW,D.cY0,4293983738,3869766608,D.cmX,D.dd)
D.vC=w([D.dR4,D.dR0,D.dQZ,D.dR_,D.dR3,D.dR5,D.dR6,D.dR2,D.dR7,D.dR1,D.dR8],B.ax("P<nA>"))
D.bcf=new B.w(0.13333333333333333,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.t)
D.d3h=w([A.qt,D.bcf,A.qt],x.O)
D.d3y=w([4279179050,4281549141,4280640491,4278556265,4292617766,4286331629,4293548044,4278751666,4294967295,4294688548],x.t)
D.d3C=w([null,4294967295,4279310375,4294626325,4280472558,4294210230,4283096704,4293870660,4282090230,4294677052],x.Z)
D.eqe=new B.z("The NGMY app","Write the front-page story about the NGMY app and everything it offers.")
D.egO=new B.z("KB PABLO QR, our CEO","Write a respectful story about KB PABLO QR, Founder, President and CEO of NGMY, and what he built.")
D.el9=new B.z("Civic Registry","Write about the Civic Registry: why it was built, receipts, registrars and trust in the community.")
D.e9q=new B.z("NGMY Advisors","Write about the NGMY Advisors, the AI advisors who help members.")
D.ejS=new B.z("Growth Income","Write about Growth Income, the wallet and how members earn on work days.")
D.eib=new B.z("Core Protocol studios","Write about the Core Protocol studios, the Body Explorer and the learning labs.")
D.emh=new B.z("Surprise me","")
D.d46=w([D.eqe,D.egO,D.el9,D.e9q,D.ejS,D.eib,D.emh],x.L)
D.b5Z=new B.w(1,0.9450980392156862,0.9294117647058824,0.8941176470588236,A.t)
D.bfX=new B.w(1,0.796078431372549,0.7647058823529411,0.7019607843137254,A.t)
D.d4Q=w([A.c,D.b5Z,D.bfX],x.O)
D.d6C=w([1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0],x.x)
D.aDM=new C.kL(0,"heritageGold")
D.baX=new B.w(1,0.9764705882352941,0.9450980392156862,0.8666666666666667,A.t)
D.fQ9=w([D.baX,W.acD,A.av],x.O)
D.dux=new C.jh("kuhowa_heritage_gold","Kuhowa \u2014 Hazina ya Dhahabu","Mpaka mzito wa kikabila \xb7 dhahabu na hudhurungi.",D.aDM,4294570461,4284234270,4292128567,D.jx)
D.aDN=new C.kL(1,"heritageCrimson")
D.b4r=new B.w(1,0.9803921568627451,0.9411764705882353,0.9019607843137255,A.t)
D.b9r=new B.w(1,0.4196078431372549,0.16470588235294117,0.11764705882352941,A.t)
D.bfN=new B.w(1,0.8784313725490196,0.6431372549019608,0.34509803921568627,A.t)
D.fPN=w([D.b4r,D.b9r,D.bfN],x.O)
D.duq=new C.jh("kuhowa_heritage_crimson","Kuhowa \u2014 Hazina Nyekundu","Mpaka mzito wa kikabila \xb7 nyekundu na dhahabu.",D.aDN,4294635750,4285213214,4292912216,D.jx)
D.d6G=w([D.a3C,D.a3A,D.dux,D.duq,D.a3v,D.a3y],x.h)
D.dAp=new C.re(1,"circuit")
D.dAS=new C.lX("neural","Neural Link","Robotic",D.dAp,4278322711,4279179050,4280472558,4284704497,4292932350,"One link at a time, NGMY connects young people everywhere.")
D.dAo=new C.re(0,"grid")
D.dAP=new C.lX("signal","Signal Grid","Robotic",D.dAo,4280163147,4278322711,4289222135,4293675161,4294308863,"A strong signal starts with one voice. Make yours heard.")
D.dAu=new C.re(2,"hexes")
D.dAA=new C.lX("core","Core Protocol","Robotic",D.dAu,4278464302,4278322711,4281193663,4281908728,4291623921,"Our core is simple: help each other grow.")
D.aE9=new C.re(11,"diagonal")
D.dAL=new C.lX("steel","Steel Tech","Robotic",D.aE9,4281549141,4279179050,4287931320,4281908728,4294047225,"Build with your hands, lead with your heart.")
D.aEa=new C.re(3,"rings")
D.dAz=new C.lX("vault","Vault Gold","Robotic",D.aEa,4280031511,4278190080,4294626325,4294286859,4294898631,"What you build together is worth more than gold.")
D.dAs=new C.re(13,"leaves")
D.dAC=new C.lX("forest","Forest Morning","Nature",D.dAs,4279522093,4278529558,4283096704,4288931381,4293983732,"Like a forest, a community grows strongest together.")
D.aEb=new C.re(5,"waves")
D.dAJ=new C.lX("ocean","Ocean Calm","Nature",D.aEb,4278413729,4278995566,4281908728,4284999929,4293982719,"Small waves become a movement. Keep going.")
D.dAv=new C.re(6,"sunset")
D.dAO=new C.lX("sunset","Sunset Glow","Nature",D.dAv,4294538006,4290648157,4294829706,4294668677,4294967295,"Every sunset is a promise that tomorrow can be better.")
D.dAw=new C.re(7,"mountains")
D.dAB=new C.lX("mountain","Mountain Air","Nature",D.dAw,4282595530,4280171146,4291285758,4286680312,4293849855,"Climb together. The view is better with friends.")
D.dAx=new C.re(8,"stars")
D.dAI=new C.lX("night","Night Sky","Nature",D.dAx,4280163147,4278190080,4294829706,4291081725,4294308863,"Dream big. NGMY is built by people who looked up.")
D.a3V=new C.re(4,"orbs")
D.dAG=new C.lX("aurora","Aurora","Nature",D.a3V,4278603323,4283178389,4281652121,4289170426,4294967295,"Light shows up when people choose to shine together.")
D.dAQ=new C.lX("sand","Sand Dune","Nature",D.aEb,4294829706,4292441862,4290007817,4294966251,4282718723,"Patience builds a legacy, one grain at a time.")
D.dAy=new C.re(9,"rays")
D.dAF=new C.lX("golden","Golden Hour","Warm",D.dAy,4294286859,4290321436,4294897802,4294967295,4294967295,"Your hour is now. Start where you are.")
D.dAD=new C.lX("royal","Royal Purple","Warm",D.aE9,4286456526,4290648157,4293962748,4294829706,4294967295,"Lead with respect, and people will follow with joy.")
D.dAE=new C.lX("rose","Rose Petal","Warm",D.a3V,4294668677,4292943176,4294960358,4294812847,4294967295,"Kindness is the strongest thing a community can grow.")
D.dAr=new C.re(12,"blocks")
D.dAH=new C.lX("electric","Electric Blue","Bold",D.dAr,4280640491,4278751666,4290438909,4294967295,4294967295,"Energy is contagious. Bring yours to NGMY.")
D.dAR=new C.lX("mint","Fresh Mint","Bold",D.a3V,4281652121,4278630100,4294967295,4289197008,4278603323,"Fresh ideas grow when young people lead.")
D.dAt=new C.re(14,"minimal")
D.dAN=new C.lX("white","Clean White","Clean",D.dAt,4294967295,4294047225,4280640491,4287931320,4279179050,"Simple words, strong purpose. That is NGMY.")
D.dAq=new C.re(10,"frame")
D.dAK=new C.lX("midnight","Midnight Gold","Clean",D.dAq,4279179050,4278322711,4294626325,4294829706,4294966251,"Quiet work in the dark makes the morning shine.")
D.dAM=new C.lX("community","Community Green","Clean",D.aEa,4278556265,4280640491,4289197008,4290763774,4294967295,"The New Global Movement for Youth starts with you.")
D.a2d=w([D.dAS,D.dAP,D.dAA,D.dAL,D.dAz,D.dAC,D.dAJ,D.dAO,D.dAB,D.dAI,D.dAG,D.dAQ,D.dAF,D.dAD,D.dAE,D.dAH,D.dAR,D.dAN,D.dAK,D.dAM],B.ax("P<lX>"))
D.d72=w([D.Af,A.wP,A.hD,A.bU],x.O)
D.d7i=w([D.adq,D.j0],x.O)
D.d7r=w(["pdf","docx","txt","md"],x.s)
D.eyl=new B.bv(-3,150,34)
D.eym=new B.bv(-3,214,62)
D.eyn=new B.bv(-3,288,62)
D.d8f=w([D.eyl,D.eym,D.eyn],B.ax("P<+(N,N,N)>"))
D.d8J=w(["rays","bokeh","aurora","spotlight"],x.s)
D.d9i=w(["Write","Design","Print & fold"],x.s)
D.jy=new C.us(2,"triangle")
D.Ca=new C.us(3,"arrow")
D.fp=new C.us(4,"line")
D.jz=new C.us(5,"parallelogram")
D.d9l=w([D.be,D.eI,D.jy,D.Ca,D.fp,D.jz,D.kQ],x.m)
D.eax=new B.z(240,96)
D.ecY=new B.z(560,46)
D.d9q=w([D.eax,D.ecY],x.G)
D.fQk=new C.xd(0,"classic")
D.dwo=new C.nw("heritage_gold","Urithi wa Dhahabu","Mpaka wa kitamaduni \xb7 rangi ya dhahabu na kahawia.",D.aDM,4294570461,4282000405,4284234270)
D.dwA=new C.nw("heritage_crimson","Urithi wa Nyekundu","Mpaka wa kitamaduni \xb7 rangi ya nyekundu na shaba.",D.aDN,4294635750,4281999378,4285213214)
D.dwp=new C.nw("elegant_navy","Umoja Mzuri",y.s,D.a3P,4294967035,4279378237,4290283019)
D.dwC=new C.nw("elegant_gold","Umoja wa Dhahabu",y.Q,D.aDV,4294966515,4281016592,4289102906)
D.dwE=new C.nw("kente_sunset","Kente ya Jua",y.H,D.aDO,4294964964,4282000405,4279983648)
D.dwm=new C.nw("indigo_mudcloth","Nguo ya Indigo",y.n,D.aDP,4294439140,4279903102,4279903102)
D.dwr=new C.nw("adinkra_royal","Muhuri wa Adinkra",y.z,D.aDQ,4294965484,4285218591,4287322667)
D.dww=new C.nw("nile_lotus","Lotus ya Nile","Nguzo za papyrus na ua la lotus juu.",D.aDR,4294244340,4279196764,4279196764)
D.dwy=new C.nw("shweshwe_ivory","Shweshwe","Nguo ya shweshwe \xb7 kadi ya pembe ndani.",D.aDS,4294505710,4279970378,4291058750)
D.fQl=new C.xd(1,"ringsNdoa")
D.dwq=new C.nw("rings_ndoa","Hati ya Ndoa","Pete mbili \xb7 vichwa vya kidonge \xb7 hati rasmi ya ndoa.",D.r8,4294966259,4279378237,4291404327)
D.fQn=new C.xd(2,"coupleCards")
D.dwB=new C.nw("couple_taarifa","Taarifa za Wanandoa","Picha ya mwanamume na mwanamke \xb7 kadi mbili za taarifa.",D.r8,4294966259,4279378237,4291404327)
D.fQo=new C.xd(3,"kuhoweshaForm")
D.dwx=new C.nw("barua_kuhowesha","Barua ya Kuhowesha","Barua rasmi \xb7 orodha ya NIMETOWEA \xb7 mashahidi.",D.C4,4294966519,4279378237,4291404327)
D.fQp=new C.xd(4,"mahariPande")
D.dwn=new C.nw("mahari_pande","Mahari ya Pande","Masharti ya mahari \xb7 pande mbili za sahihi.",D.r8,4294966259,4279904068,4291404327)
D.fQq=new C.xd(5,"familiaMti")
D.dwD=new C.nw("sheria_familia","Sheria za Familia","Mti wa familia \xb7 sheria za pamoja \xb7 kijani.",D.aDT,4294966776,4280241466,4291404327)
D.fQr=new C.xd(6,"ndoaSafi")
D.dwu=new C.nw("ndoa_safi","Ndoa ya Pamoja","Safu mbili \xb7 mume na mke \xb7 masharti ya ndoa.",D.C4,4294966519,4279378237,4291404327)
D.fQs=new C.xd(7,"peteWide")
D.dwt=new C.nw("pete_pana","Pete Pana","Pete kubwa za dhahabu \xb7 nafasi wazi \xb7 hati ya heshima.",D.r8,4294966259,4282001936,4291404327)
D.fQt=new C.xd(8,"muhuriCrest")
D.dws=new C.nw("muhuri_familia","Muhuri wa Familia","Muhuri mkubwa juu \xb7 fomu rasmi ya familia.",D.r8,4294966259,4279378237,4291404327)
D.fQu=new C.xd(9,"fomuWazi")
D.dwv=new C.nw("fomu_wazi","Fomu ya Ndoa","Fomu yenye mistari \xb7 namba \xb7 sehemu wazi za kujaza.",D.C4,4294966519,4279904068,4291404327)
D.fQm=new C.xd(10,"upendoOrnate")
D.dwz=new C.nw("upendo_dhahabu","Upendo wa Dhahabu","Mapambo ya dhahabu \xb7 picha za wanandoa \xb7 rangi ya waridi.",D.aDU,4294965493,4286200650,4291404327)
D.PS=w([D.dwo,D.dwA,D.dwp,D.dwC,D.dwE,D.dwm,D.dwr,D.dww,D.dwy,D.dwq,D.dwB,D.dwx,D.dwn,D.dwD,D.dwu,D.dwt,D.dws,D.dwv,D.dwz],B.ax("P<nw>"))
D.C8=new C.apO(0,"landscape169")
D.nW=new C.apO(1,"portrait916")
D.daa=w([D.C8,D.nW],B.ax("P<apO>"))
D.awA=w([A.hD,A.bJ,A.cv,A.il,A.c],x.O)
D.tR=w([A.bU,A.ir],x.O)
D.e9N=new B.z(1000,"M")
D.ee0=new B.z(900,"CM")
D.ecT=new B.z(500,"D")
D.ebh=new B.z(400,"CD")
D.e9O=new B.z(100,"C")
D.ee1=new B.z(90,"XC")
D.ecU=new B.z(50,"L")
D.ebi=new B.z(40,"XL")
D.e9S=new B.z(10,"X")
D.eeb=new B.z(9,"IX")
D.ed7=new B.z(5,"V")
D.ecG=new B.z(4,"IV")
D.eae=new B.z(1,"I")
D.daK=w([D.e9N,D.ee0,D.ecT,D.ebh,D.e9O,D.ee1,D.ecU,D.ebi,D.e9S,D.eeb,D.ed7,D.ecG,D.eae],x.ek)
D.ezg=new B.cL(["open",A.ja,"Open & write","Keep writing this book"])
D.ezG=new B.cL(["print",A.tF,"Print as a book","Fold and staple it"])
D.daU=w([D.ezg,D.ezG],B.ax("P<+(n,a0,n,n)>"))
D.dby=w([D.a3X,D.mq,D.Hp,D.R_,D.dd,D.QZ],x.i)
D.eqN=new B.z(-1,"Small")
D.e9A=new B.z(0,"Normal")
D.ead=new B.z(1,"Big")
D.eaN=new B.z(2,"Huge")
D.dc1=w([D.eqN,D.e9A,D.ead,D.eaN],x.ek)
D.dcr=w([49,65,89,38,83,89],x.t)
D.dcy=w([A.wP,A.hD,A.bU],x.O)
D.dcZ=w([D.dd,D.mq,D.u_,D.a3X,D.Hp,D.R_],x.i)
D.aBS=new B.dR([0,D.KV,8,D.aeI,12,D.aeJ],B.ax("dR<G,a2U>"))
D.dX3={gold:0,platinum:1,glow:2,rainbow:3,double:4,neon:5,framed:6,rosegold:7,jewels:8,aurora:9}
D.bfG=new B.w(1,0.8313725490196079,0.6274509803921569,0.09019607843137255,A.t)
D.cIN=w([A.bJ,D.bfG],x.O)
D.d1f=w([A.b1,A.bi],x.O)
D.cXa=w([A.bZ,A.aW,A.cp],x.O)
D.daV=w([A.cn,A.bw],x.O)
D.cQb=w([A.b7,A.fg],x.O)
D.cZL=w([A.b4,A.f5],x.O)
D.b9b=new B.w(1,0.9529411764705882,0.7764705882352941,0.7098039215686275,A.t)
D.cZ3=w([D.b9b,A.oj],x.O)
D.cTS=w([A.fY,A.wQ],x.O)
D.cQ0=w([A.bs,A.c8],x.O)
D.dfB=new B.bq(D.dX3,[D.cIN,H.ani,D.d1f,D.cXa,D.daV,D.cQb,D.cZL,D.cZ3,D.cTS,D.cQ0],B.ax("bq<n,ak<w>>"))
D.dWd={"[Jina la Baba wa Mume]":0,"[Jina la Jamii ya Mume]":1,"[Jina la Nyumba ya Mume]":2,"[Jina la Kijana]":3,"[Jina la Binti]":4,"[Jina la Baba wa Binti]":5,"[Jina la Jamii ya Binti]":6,"[Jina la Nyumba ya Binti]":7}
D.a2P=new B.bq(D.dWd,["[Jina la Baba wa Mume]","[Jina la Jamii ya Mume]","[Jina la Nyumba ya Mume]","[Jina la Kijana]","[Jina la Binti]","[Jina la Baba wa Binti]","[Jina la Jamii ya Binti]","[Jina la Nyumba ya Binti]"],B.ax("bq<n,n>"))
D.a2V=new B.bq(A.ic,[],B.ax("bq<G,+icon3d,picture(n?,n?)>"))
D.djC=new F.Me(30,null)
D.doG=new F.mk("Chapter 1","","","")
D.d9X=w([D.doG],x.B)
D.doK=new F.r4("My Book","","",D.d9X,E.aD6)
D.doI=new F.ui("starry",null,null,null,null,"","","")
D.doL=new F.r4("Dream Big","","",E.a1W,D.doI)
D.doJ=new F.ui("story",null,null,null,null,"","","")
D.doM=new F.r4("Little Lion","","",E.a1W,D.doJ)
D.doH=new F.ui("vintage",null,null,null,null,"","","")
D.doN=new F.r4("Our Story","","",E.a1W,D.doH)
D.drN=new C.E1("","NGMY","","")
D.dz2=new C.z2("The NGMY Times","NGMY NEWS","","","By the NGMY Newsroom","",A.T,"","","")
D.dQY=new C.b_A(null,null,null,null)
D.dSG=new C.apT(null)
D.dST=new C.aqo(0,"smaller")
D.dSU=new C.aqo(1,"bigger")
D.aEp=new C.aqo(2,"fit")
D.dZs=new B.u(3,6)
D.dZC=new B.u(4,8)
D.e2_=new B.C(E.afw,T.aaJ,null)
D.e23=new B.C(A.Xo,A.m_,null)
D.bDd=new B.ae(A.la,16,A.c_,null,null,null)
D.e27=new B.C(A.j7,D.bDd,null)
D.b3U=new B.fh(2.2,null,null,null,null,A.c,null,null,null,null)
D.e2j=new B.C(A.F3,D.b3U,null)
D.bNn=new B.ae(A.cy,16,A.az,null,null,null)
D.e2n=new B.C(A.en,D.bNn,null)
D.fd1=new B.x("Play",null,A.ng,null,null,null,null,null,null,null,null,null)
D.d1u=w([U.alN,A.rl,D.fd1],x.p)
D.eDD=new B.co(A.aQ,A.e,A.Q,A.m,null,A.p,null,0,D.d1u,null)
D.e2q=new B.C(A.or,D.eDD,null)
D.b42=new B.fh(2.4,null,null,null,null,null,null,null,null,null)
D.eIS=new B.a6(20,20,D.b42,null)
D.e2v=new B.C(A.j7,D.eIS,null)
D.flP=new B.x("Seconds per slide",null,A.hn,null,null,null,null,null,null,null,null,null)
D.e2D=new B.C(A.bm,D.flP,null)
D.e3Y=new C.a7I(2,"print")
D.e40=new B.iM(1,0.7764705882352941,0.1568627450980392,0.1568627450980392)
D.e5D=new B.h6("/Annot")
D.e5F=new B.h6("/URI")
D.f7A=new B.x("Share text outline",null,null,null,null,null,null,null,null,null,null,null)
D.e7t=new B.jj("share",48,D.f7A,null,B.ax("jj<n>"))
D.bNh=new B.ae(A.dW,14,A.ey,null,null,null)
D.e7C=new B.cK(null,-2,-2,null,null,null,D.bNh,null)
D.bcG=new B.w(0.3333333333333333,0,0,0,A.t)
D.cKJ=w([D.bcG,A.K],x.O)
D.bTp=new B.a7(A.a3,A.a7,A.x,D.cKJ,null,null)
D.aXO=new B.o(null,null,null,null,null,D.bTp,A.n)
D.bk8=new B.kI(D.aXO,A.bd,null,null)
D.e7O=new B.cK(0,0,null,0,8,null,D.bk8,null)
D.d5H=w([A.hT,A.ok,A.cb],x.O)
D.e8s=new B.bR(A.A,0.5,A.x,null,0,D.d5H,null,null)
D.eaG=new B.z(0.22,A.bi)
D.eeu=new B.z("ai","Your newspaper is ready. Tell me anything you want changed, or ask me a question about NGMY.")
D.egt=new B.z(0.5,A.hd)
D.epo=new B.z(0.78,A.aU)
D.ez7=new B.cL([A.by,0.22,0.7,2.6])
D.ezc=new B.cL([A.b7,0.36,1.2,1.3])
D.ezi=new B.cL([A.dO,0.28,0.2,0.4])
D.ezo=new B.cL([A.cw,0.05,0.3,0.35])
D.ezu=new B.cL([A.bs,0.28,0.9,0])
D.ezC=new B.cL([A.aE,-0.25,-0.15,0.45])
D.eAp=new B.cL([A.bZ,0.42,1,4.1])
D.eDl=new B.a8B(9)
D.bEj=new B.ae(A.FX,28,A.cp,null,null,null)
D.fml=new B.x("NGMY News",null,A.du,null,null,null,null,null,null,null,null,null)
D.btT=new B.bF(1,A.bj,D.fml,null)
D.d8M=w([D.bEj,A.aw,D.btT],x.p)
D.eDx=new B.co(A.aQ,A.e,A.j,A.m,null,A.p,null,0,D.d8M,null)
D.bEu=new B.ae(A.pE,16,A.c,null,null,null)
D.fnL=new B.x("Book",null,A.o2,null,null,null,null,null,null,null,null,null)
D.dcx=w([D.bEu,A.ea,D.fnL],x.p)
D.eDF=new B.co(A.aQ,A.e,A.Q,A.m,null,A.p,null,0,D.dcx,null)
D.bKU=new B.ae(A.jb,10,A.c,null,null,null)
D.fbb=new B.x("Pro",null,A.ne,null,null,null,null,null,null,null,null,null)
D.d1z=w([D.bKU,A.q0,D.fbb],x.p)
D.eDJ=new B.co(A.aQ,A.e,A.Q,A.m,null,A.p,null,0,D.d1z,null)
D.flO=new B.x("Make a newspaper",null,At.SX,null,null,null,null,null,null,null,null,null)
D.bUx=w([E.a_V,A.ab,D.flO],x.p)
D.eDK=new B.co(A.aQ,A.e,A.Q,A.m,null,A.p,null,0,D.bUx,null)
D.bJs=new B.ae(A.l7,18,A.bJ,null,null,null)
D.fdf=new B.x("Ending celebration",null,A.jh,null,null,null,null,null,null,null,null,null)
D.d7R=w([D.bJs,A.bp,D.fdf],x.p)
D.eDN=new B.co(A.aQ,A.e,A.j,A.m,null,A.p,null,0,D.d7R,null)
D.bKG=new B.ae(A.ja,18,A.jJ,null,null,null)
D.eTi=new B.F(!0,A.jJ,null,null,null,null,15,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fo1=new B.x("Write",null,D.eTi,null,null,null,null,null,null,null,null,null)
D.cS8=w([D.bKG,A.ab,D.fo1],x.p)
D.eDS=new B.co(A.aQ,A.e,A.Q,A.m,null,A.p,null,0,D.cS8,null)
D.fb9=new B.x("Download picture",null,A.q4,null,null,null,null,null,null,null,null,null)
D.bvT=new B.q8(A.eg,A.A,A.f,D.fb9,null)
D.bw3=new B.dm(1,A.ci,D.bvT,null)
D.d1X=w([K.alD,A.ab,D.bw3],x.p)
D.eDT=new B.co(A.aQ,A.ba,A.j,A.m,null,A.p,null,0,D.d1X,null)
D.bGf=new B.ae(A.FX,22,A.cp,null,null,null)
D.fku=new B.x("NGMY NEWS",null,H.a6x,null,null,null,null,null,null,null,null,null)
D.cKb=w([D.bGf,A.ab,D.fku],x.p)
D.eE0=new B.co(A.aQ,A.e,A.Q,A.m,null,A.p,null,0,D.cKb,null)
D.eEb=new B.oZ(!1,!1,null,T.US,null,A.bX,null,null,null)
D.a5B=new B.jK([D.cg,D.dd,D.u_,D.Ho,D.u0,D.aEf],B.ax("jK<hw>"))
D.dYg={title:0,quote:1,closing:2,bio:3}
D.eFj=new B.eV(D.dYg,4,x.M)
D.dWv={caps:0,stamp:1,retro:2,glitch:3,whisper:4}
D.eFl=new B.eV(D.dWv,5,x.M)
D.dXO={midnight:0,rose_gold:1,slate_pro:2,neon_night:3,charcoal:4,crimson:5,gold:6,plum:7}
D.a5C=new B.eV(D.dXO,8,x.M)
D.dXb={Design:0,Transitions:1,Insert:2}
D.eFp=new B.eV(D.dXb,3,x.M)
D.fQC=new B.jK([D.a3Y],B.ax("jK<vE>"))
D.dXi={float3d:0,drift:1,pulse:2}
D.eFs=new B.eV(D.dXi,3,x.M)
D.aLr=new B.jK([D.Hl,D.Hm,D.Hn],B.ax("jK<mo>"))
D.dWs={shimmer:0,golddust:1,spotlight:2,goldframe:3,twinkle:4,orbit:5,rays:6,bokeh:7,aurora:8,sparkle:9,sheen:10,velvet:11,crest:12,filigree:13}
D.aLu=new B.eV(D.dWs,14,x.M)
D.fQD=new B.eV(A.ic,0,B.ax("eV<vE>"))
D.dXf={"kbpabloqr@gmail.com":0,"ngumoyaking@gmail.com":1,"appbusiness321@gmail.com":2,"appbusiness84@gmail.com":3}
D.RZ=new B.eV(D.dXf,4,x.M)
D.dWl={print:0,rotate:1,text_box:2,picture:3,title:4,subtitle:5,bullets:6,numbered:7,quote:8,citation:9,date_stamp:10,page_number:11,header_bar:12,footer_bar:13,divider:14,table:15,sticky:16,duplicate_el:17,delete_el:18,bring_fwd:19,send_back:20,align_left:21,align_center:22,align_right:23,word_count:24,link_text:25,phone:26,email:27,new_slide:28,present:29}
D.aLw=new B.eV(D.dWl,30,x.M)
D.dXn={circle:0,triangle:1,hexagon:2,diamond:3}
D.eFI=new B.eV(D.dXn,4,x.M)
D.eHR=new B.at(390,844)
D.eIC=new B.a6(20,20,A6.JP,null)
D.aMi=new B.a6(null,2.5,null,null)
D.eIM=new B.a6(18,18,A6.JP,null)
D.bKK=new B.ae(A.iR,19,A.c,null,null,null)
D.eIX=new B.a6(38,38,D.bKK,null)
D.bJ2=new B.ae(A.y7,22,A.c,null,null,null)
D.eIZ=new B.a6(40,40,D.bJ2,null)
D.eJx=new B.hI(2,10,10,1.15,null)
D.aMq=new B.hI(2,16,14,0.62,null)
D.brY=new B.Q(32,30,32,40)
D.b5k=new B.w(0.3333333333333333,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.t)
D.bEg=new B.ae(A.pz,56,D.b5k,null,null,null)
D.adW=new B.w(0.6,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.t)
D.eVe=new B.F(!0,D.adW,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fhD=new B.x("Your books will live here.",null,D.eVe,null,A.L,null,null,null,null,null,null,null)
D.cUJ=w([D.bEg,A.S,D.fhD],x.p)
D.bjl=new B.fp(A.ai,A.e,A.j,A.m,null,A.p,null,0,D.cUJ,null)
D.e2B=new B.C(D.brY,D.bjl,null)
D.eJS=new B.m_(D.e2B,null)
D.fhA=new B.x("Chagua jimbo la Civic Registry kwanza.",null,null,null,null,null,null,null,null,null,null,null)
D.eK9=new B.b1(D.fhA,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.q,null)
D.ffK=new B.x("Done \u2014 only the text size was changed. Undo brings back the old size.",null,null,null,null,null,null,null,null,null,null,null)
D.eKa=new B.b1(D.ffK,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.q,null)
D.fkx=new B.x("This slide has no text boxes.",null,null,null,null,null,null,null,null,null,null,null)
D.eKj=new B.b1(D.fkx,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.q,null)
D.fl2=new B.x("Tap fields to edit names. Tap signature boxes to sign or re-sign. Print from the View tab.",null,null,null,null,null,null,null,null,null,null,null)
D.eKy=new B.b1(D.fl2,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.q,null)
D.fer=new B.x("Sign in to Civic Registry to view Hati ya Kiapo cha Uongozi.",null,null,null,null,null,null,null,null,null,null,null)
D.eKL=new B.b1(D.fer,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.q,null)
D.frR=new B.x("Could not read that presentation QR or document code.",null,null,null,null,null,null,null,null,null,null,null)
D.eL3=new B.b1(D.frR,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.q,null)
D.fp5=new B.x("Use the 5-character code on the document QR, like GA847.",null,null,null,null,null,null,null,null,null,null,null)
D.eLe=new B.b1(D.fp5,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.q,null)
D.fla=new B.x("Sign in to Civic Registry to view this document.",null,null,null,null,null,null,null,null,null,null,null)
D.eLV=new B.b1(D.fla,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.q,null)
D.f9x=new B.x("Buttons hidden. Double-tap the top-right corner to show them again.",null,null,null,null,null,null,null,null,null,null,null)
D.eMa=new B.b1(D.f9x,null,null,null,null,null,null,null,A.ih,null,null,null,null,A.pp,!1,null,null,null,A.q,null)
D.fbh=new B.x("Could not crop that picture.",null,null,null,null,null,null,null,null,null,null,null)
D.eMs=new B.b1(D.fbh,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.q,null)
D.fhi=new B.x("This oath is locked for editing (5 hours after the president signed). You can still view and play the video.",null,null,null,null,null,null,null,null,null,null,null)
D.eMu=new B.b1(D.fhi,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.q,null)
D.fgZ=new B.x("Only the authorized registrar for this state can add the oath video.",null,null,null,null,null,null,null,null,null,null,null)
D.eMv=new B.b1(D.fgZ,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.q,null)
D.fn5=new B.x("Document code copied.",null,null,null,null,null,null,null,null,null,null,null)
D.eMw=new B.b1(D.fn5,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.q,null)
D.f5O=new B.x("Tap the logo or a picture on this slide first.",null,null,null,null,null,null,null,null,null,null,null)
D.eMF=new B.b1(D.f5O,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.q,null)
D.fcn=new B.x("Sign in to unlock Slides Pro features.",null,null,null,null,null,null,null,null,null,null,null)
D.eN1=new B.b1(D.fcn,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.q,null)
D.fqE=new B.x("Done \u2014 the look is changed. Undo brings back the old one.",null,null,null,null,null,null,null,null,null,null,null)
D.eN3=new B.b1(D.fqE,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.q,null)
D.fqc=new B.x("The NGMY logo stays on every quote. You can move it or change its frame.",null,null,null,null,null,null,null,null,null,null,null)
D.eN7=new B.b1(D.fqc,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.q,null)
D.f4Q=new B.x("Video upload failed. Check your connection and try again.",null,null,null,null,null,null,null,null,null,null,null)
D.eN9=new B.b1(D.f4Q,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.q,null)
D.fmg=new B.x("This transferred document is view only. You can print or download it.",null,null,null,null,null,null,null,null,null,null,null)
D.eNi=new B.b1(D.fmg,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.q,null)
D.fpO=new B.x("Done \u2014 the words are changed and the design is kept. Undo brings back the old version.",null,null,null,null,null,null,null,null,null,null,null)
D.eNx=new B.b1(D.fpO,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.q,null)
D.fpF=new B.x("Book saved on this device.",null,null,null,null,null,null,null,null,null,null,null)
D.eNz=new B.b1(D.fpF,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.q,null)
D.f4I=new B.x("Only the authorized registrar for this state can update this signature.",null,null,null,null,null,null,null,null,null,null,null)
D.eNF=new B.b1(D.f4I,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.q,null)
D.f8y=new B.x("You don't have a Bio link yet \u2014 create one in Bio first.",null,null,null,null,null,null,null,null,null,null,null)
D.eO6=new B.b1(D.f8y,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.q,null)
D.foT=new B.x("Nothing to transfer yet \u2014 fill names or details on this document first.",null,null,null,null,null,null,null,null,null,null,null)
D.eOh=new B.b1(D.foT,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.q,null)
D.f8m=new B.x("Only the authorized registrar for this state can sign this document.",null,null,null,null,null,null,null,null,null,null,null)
D.eOw=new B.b1(D.f8m,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.q,null)
D.bbY=new B.w(1,0.9764705882352941,0.8352941176470589,0.8274509803921568,A.t)
D.cJ0=w([A.il,A.oj,D.bbY,D.ab5,A.il],x.O)
D.eOU=new B.fS(A.A,0,6.283185307179586,A.x,D.cJ0,null,null)
D.cRn=w([A.bJ,A.bU,A.hD,D.Af,A.bJ],x.O)
D.aN_=new B.fS(A.A,0,6.283185307179586,A.x,D.cRn,null,null)
D.d3w=w([A.bZ,A.by,A.b7,A.bc,A.cp,A.bZ],x.O)
D.eOZ=new B.fS(A.A,0,6.283185307179586,A.x,D.d3w,null,null)
D.cKX=w([A.pn,A.ol,A.A3,A.il,A.pn],x.O)
D.eP_=new B.fS(A.A,0,6.283185307179586,A.x,D.cKX,null,null)
D.d3q=w([A.aP,A.bI,A.aL,A.ak,A.aP],x.O)
D.eP0=new B.fS(A.A,0,6.283185307179586,A.x,D.d3q,null,null)
D.daB=w([A.bs,A.b7,A.by,A.bZ,A.bs],x.O)
D.eP2=new B.fS(A.A,0,6.283185307179586,A.x,D.daB,null,null)
D.bce=new B.w(1,0,1,1,A.t)
D.b6x=new B.w(1,1,0,1,A.t)
D.d6V=w([A.DP,A.acO,H.abS,D.bce,H.acd,D.b6x,A.DP],x.O)
D.eP3=new B.fS(A.A,0,6.283185307179586,A.x,D.d6V,null,null)
D.ePi=new C.aur(2,"immersiveSticky")
D.ePj=new C.aur(3,"edgeToEdge")
D.ePk=new C.aur(4,"manual")
D.eRy=new B.F(!0,A.od,null,null,null,null,12,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aNv=new B.F(!0,A.f9,null,null,null,null,12.5,A.O,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eS6=new B.F(!0,E.mO,null,null,null,null,13,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eTz=new B.F(!0,A.ad,null,null,null,null,13,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eUx=new B.F(!0,A.c,null,null,null,null,22,A.u,null,0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eUG=new B.F(!0,A.c_,null,null,null,null,12.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eV0=new B.F(!0,A.ey,null,null,null,null,12,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eWl=new B.F(!0,A.bI,null,null,null,null,13.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eWu=new B.F(!0,A.j4,null,null,null,null,11,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eWI=new B.rn(!0,A.HH,null,null,null,null,A.dr,8,null,null,null,null,null,null,null,null,null,null,null,null)
D.eXb=new B.F(!0,A.c,null,null,null,null,8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eXO=new B.F(!0,A.j2,null,null,null,null,11.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eYb=new B.F(!0,A.az,null,null,null,null,12.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.e43=new B.iM(1,1,0.7568627450980392,0.027450980392156862)
D.eYf=new B.rn(!0,D.e43,null,null,null,null,A.dr,7,null,null,null,null,null,null,null,null,null,null,null,null)
D.acV=new B.w(1,0.8392156862745098,0.7254901960784313,0.6039215686274509,A.t)
D.aOd=new B.F(!0,D.acV,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eYl=new B.F(!0,D.adW,null,null,null,null,11.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eYm=new B.F(!0,A.c,null,null,null,null,20,A.u,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aOf=new B.F(!0,A.c,null,null,null,null,null,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZ_=new B.rn(!0,A.oO,null,null,null,null,A.dr,9,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZg=new B.F(!0,null,null,null,null,null,20,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.SQ=new B.F(!0,A.az,null,null,null,null,11.5,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZN=new B.F(!0,A.c,null,null,null,null,16,A.I,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZP=new B.F(!0,D.acV,null,null,null,null,14,null,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.Iy=new B.F(!0,A.az,null,null,null,null,12.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f_h=new B.F(!0,A.bU,null,null,null,null,11.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f_p=new B.F(!0,A.bI,null,null,null,null,14,A.a4,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f_s=new B.F(!0,A.bJ,null,null,null,null,12,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f_J=new B.F(!0,A.c,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.aut,null,null,null)
D.f_L=new B.F(!0,A.cr,null,null,null,null,null,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f_N=new B.F(!0,A.c,null,null,null,null,30,A.u,null,5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f0_=new B.F(!0,A.c,null,null,null,null,6.5,A.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f0a=new B.F(!0,A.dy,null,null,null,null,13,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f0H=new B.F(!0,A.aR,null,null,null,null,null,A.a4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f0Q=new B.F(!0,A.c,null,null,null,null,13.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f13=new B.F(!0,A.ad,null,null,null,null,15,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aOQ=new B.F(!0,A.c,null,null,null,null,14.5,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aOS=new B.F(!0,A.c_,null,null,null,null,11.5,A.a4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bh9=new B.w(0.7019607843137254,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.t)
D.f2M=new B.F(!0,D.bh9,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aP_=new B.F(!0,E.mO,null,null,null,null,16,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f3g=new B.F(!0,A.bI,null,null,null,null,11,A.a4,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f3j=new B.F(!0,N.l1,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eXp=new B.F(!0,A.w,null,null,null,null,8,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f4v=new B.x("NEW",null,D.eXp,null,null,null,null,null,null,null,null,null)
D.f4L=new B.x("Hati ya Kuhowesha",null,A.hp,null,null,null,null,null,null,null,null,null)
D.f5c=new B.x("Session ended",null,null,null,null,null,null,null,null,null,null,null)
D.f5w=new B.x("Scrollable PDF on this slide",null,A.dl,null,null,null,null,null,null,null,null,null)
D.f6c=new B.x("Big quote mark",null,A.iD,null,null,null,null,null,null,null,null,null)
D.f6f=new B.x("Move down",null,null,null,null,null,null,null,null,null,null,null)
D.f6q=new B.x("Duplicate",null,null,null,null,null,null,null,null,null,null,null)
D.f6S=new B.x("Edit window ended",null,null,null,null,null,null,null,null,null,null,null)
D.f6U=new B.x("How many slides?",null,A.hn,null,null,null,null,null,null,null,null,null)
D.f7r=new B.x("Transfer",null,A.cc,null,null,null,null,null,null,null,null,null)
D.eTl=new B.F(!0,A.c,null,null,null,null,12,A.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f7L=new B.x("Luxury FX",null,D.eTl,null,null,null,null,null,null,null,null,null)
D.f86=new B.x("Font",null,A.rq,null,null,null,null,null,null,null,null,null)
D.f8h=new B.x("Anza hati mpya?",null,null,null,null,null,null,null,null,null,null,null)
D.f8n=new B.x("Ghairi",null,null,null,null,null,null,null,null,null,null,null)
D.f2j=new B.F(!0,A.bI,null,null,null,null,12,A.O,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f8v=new B.x("Example  GA847",null,D.f2j,null,null,null,null,null,null,null,null,null)
D.f8V=new B.x("Design shapes",null,A.iD,null,null,null,null,null,null,null,null,null)
D.f93=new B.x("Your 4-hour window to edit this admin-shared document has ended. You can still view, print, or download it.",null,null,null,null,null,null,null,null,null,null,null)
D.f97=new B.x("Non-stop (loop)",null,A.hn,null,null,null,null,null,null,null,null,null)
D.f9l=new B.x("Hati ya Kuhoweya",null,A.hp,null,null,null,null,null,null,null,null,null)
D.f9E=new B.x("Photo studio",null,A.fX,null,null,null,null,null,null,null,null,null)
D.fa3=new B.x("Add your picture",null,A.kU,null,null,null,null,null,null,null,null,null)
D.eWJ=new B.F(!0,A.c,null,null,null,null,20,A.u,null,-0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fa4=new B.x("Enter document code",null,D.eWJ,null,A.L,null,null,null,null,null,null,null)
D.fa5=new B.x("Kiswahili",null,null,null,null,null,null,null,null,null,null,null)
D.faa=new B.x("English",null,null,null,null,null,null,null,null,null,null,null)
D.eUn=new B.F(!0,E.mO,null,null,null,null,19,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fas=new B.x("Delete this book?",null,D.eUn,null,A.L,null,null,null,null,null,null,null)
D.eYP=new B.F(!0,E.mO,null,null,null,null,18,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fbj=new B.x("Your library",null,D.eYP,null,null,null,null,null,null,null,null,null)
D.fbo=new B.x("Delete",null,A.aO6,null,null,null,null,null,null,null,null,null)
D.fbq=new B.x("Add a picture and the AI writes a whole newspaper page about NGMY around it: the headline, the story and the caption. It knows the app, the Civic Registry, the Advisors and KB PABLO QR, the CEO. Pick old or modern designs, then tell the AI what to change.",null,As.Iw,null,null,null,null,null,null,null,null,null)
D.fbB=new B.x("Element flies in",null,A.aOj,null,null,null,null,null,null,null,null,null)
D.T7=new B.x("Hati mpya (chagua muundo)",null,null,null,null,null,null,null,null,null,null,null)
D.fbZ=new B.x("Fungua / hariri hati",null,null,null,null,null,null,null,null,null,null,null)
D.fcg=new B.x("Keep it",null,null,null,null,null,null,null,null,null,null,null)
D.fck=new B.x("Cancel",null,E.aOt,null,null,null,null,null,null,null,null,null)
D.fcm=new B.x("The lines and circles that come with the design",null,A.ho,null,null,null,null,null,null,null,null,null)
D.f1b=new B.F(!0,A.hf,null,null,null,null,11,A.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fcN=new B.x("DOCUMENT CODE",null,D.f1b,null,null,null,null,null,null,null,null,null)
D.fdA=new B.x("Quotes",null,G.a77,null,null,null,null,null,null,null,null,null)
D.eW8=new B.F(!0,N.l1,null,null,null,null,null,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fdI=new B.x("Add a picture",null,D.eW8,null,null,null,null,null,null,null,null,null)
D.fdQ=new B.x("Point at a NGMY Slides transfer QR, or tap search to enter the document code",null,A.a6N,null,A.L,null,null,null,null,null,null,null)
D.fdU=new B.x("Look & feel",null,A.hn,null,null,null,null,null,null,null,null,null)
D.fdZ=new B.x("Rings",null,A.jh,null,null,null,null,null,null,null,null,null)
D.fe4=new B.x("W",null,A.rq,null,null,null,null,null,null,null,null,null)
D.fee=new B.x("Move up",null,null,null,null,null,null,null,null,null,null,null)
D.fex=new B.x("It goes behind your words. Then the photo studio opens: looks, light, colour, effects and crop.",null,A.ST,null,A.L,null,null,null,null,null,null,null)
D.fez=new B.x("Write your book",null,A.cu,null,null,null,null,null,null,null,null,null)
D.ffi=new B.x("Add page",null,A.cc,null,null,null,null,null,null,null,null,null)
D.ffw=new B.x("Malipo ya Awamu ya Mahari",null,A.hp,null,null,null,null,null,null,null,null,null)
D.eWy=new B.F(!0,A.c,null,null,null,null,24,A.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ffL=new B.x("Create with AI",null,D.eWy,null,A.L,null,null,null,null,null,null,null)
D.fgd=new B.x("Apply look",null,A.jh,null,null,null,null,null,null,null,null,null)
D.eXg=new B.F(!0,A.ex,null,null,null,null,12,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fh0=new B.x("Type your presentation below",null,D.eXg,null,A.L,null,null,null,null,null,null,null)
D.fh3=new B.x("Tap the code to copy it. Share the code or the QR: the other phone types the code or scans the QR.",null,H.aP1,null,A.L,null,null,null,null,null,null,null)
D.fh5=new B.x("Keep it",null,A.cc,null,null,null,null,null,null,null,null,null)
D.eSn=new B.F(!0,A.ct,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fhc=new B.x("Done",null,D.eSn,null,null,null,null,null,null,null,null,null)
D.fhw=new B.x("Delete",null,A.nf,null,null,null,null,null,null,null,null,null)
D.fhF=new B.x("Hati ya Kiapo cha Uongozi",null,A.hp,null,null,null,null,null,null,null,null,null)
D.eVw=new B.F(!0,A.aR,null,null,null,null,13,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fix=new B.x("Write your idea in any language \u2014 the AI makes the slides.",null,D.eVw,null,A.L,null,null,null,null,null,null,null)
D.fiT=new B.x("Anza upya (hati mpya)",null,null,null,null,null,null,null,null,null,null,null)
D.fiZ=new B.x("Layout",null,A.SZ,null,null,null,null,null,null,null,null,null)
D.fjz=new B.x("Print",null,A.cu,null,null,null,null,null,null,null,null,null)
D.fjD=new B.x("X",null,A.rq,null,null,null,null,null,null,null,null,null)
D.fkb=new B.x("Your logo goes on every slide and your pictures replace stock photos. The ring button also has the ending celebrations.",null,Aa.SK,null,null,null,null,null,null,null,null,null)
D.fkJ=new B.x("Use the whole picture",null,null,null,null,null,null,null,null,null,null,null)
D.fkV=new B.x("Hati ya Kuhowa",null,A.hp,null,null,null,null,null,null,null,null,null)
D.fkX=new B.x("Choose a class template",null,A.hp,null,null,null,null,null,null,null,null,null)
D.fkZ=new B.x("Drag the picture to move it. Pinch or use the slider to zoom.",null,A.ho,null,null,null,null,null,null,null,null,null)
D.fl4=new B.x("Download the newspaper picture",null,A.cu,null,null,null,null,null,null,null,null,null)
D.flf=new B.x("Print view",null,null,null,null,null,null,null,null,null,null,null)
D.flm=new B.x("Done",null,A.aOP,null,null,null,null,null,null,null,null,null)
D.flw=new B.x("Ending celebration",null,A.du,null,null,null,null,null,null,null,null,null)
D.flx=new B.x("Delete element",null,null,null,null,null,null,null,null,null,null,null)
D.flM=new B.x("Plays after your last slide. Tap one to watch it and change its words or logo.",null,Aa.SB,null,null,null,null,null,null,null,null,null)
D.fmG=new B.x("Export presentation",null,A.dl,null,null,null,null,null,null,null,null,null)
D.fmH=new B.x("What would you like to do?",null,D.aOd,null,null,null,null,null,null,null,null,null)
D.fmK=new B.x("Delete",null,A.cu,null,null,null,null,null,null,null,null,null)
D.fnd=new B.x("Your 4-hour marriage document session has ended. Pay again to keep editing.",null,null,null,null,null,null,null,null,null,null,null)
D.fnh=new B.x("Hati (Documents)",null,A.hp,null,null,null,null,null,null,null,null,null)
D.fnt=new B.x("Done",null,A.kV,null,null,null,null,null,null,null,null,null)
D.f2a=new B.F(!0,A.c,null,null,null,null,18,A.I,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fny=new B.x("Delete presentation?",null,D.f2a,null,A.L,null,null,null,null,null,null,null)
D.fnP=new B.x("After the last slide it starts again from the first",null,A.ho,null,null,null,null,null,null,null,null,null)
D.fo_=new B.x("\ud83c\udf33",null,A.It,null,A.L,null,null,null,null,null,null,null)
D.foh=new B.x("Plays big after your last slide. Tap one to watch it, change the words or add your logo.",null,A.ho,null,null,null,null,null,null,null,null,null)
D.foo=new B.x("Transfer document",null,A.oX,null,null,null,null,null,null,null,null,null)
D.foA=new B.x("Add to the slides",null,A.hn,null,null,null,null,null,null,null,null,null)
D.foX=new B.x("Endelea",null,null,null,null,null,null,null,null,null,null,null)
D.fpb=new B.x("Make a book",null,I.aNL,null,null,null,null,null,null,null,null,null)
D.fpf=new B.x("Books",null,A.cu,null,null,null,null,null,null,null,null,null)
D.eW1=new B.F(!0,A.ak,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpg=new B.x("Keep this page open until it finishes.",null,D.eW1,null,null,null,null,null,null,null,null,null)
D.fpj=new B.x("Making your video",null,A.du,null,null,null,null,null,null,null,null,null)
D.fpo=new B.x("LANGUAGE",null,D.SQ,null,null,null,null,null,null,null,null,null)
D.fpv=new B.x("Use this ending",null,A.cu,null,null,null,null,null,null,null,null,null)
D.fpD=new B.x("Scan presentation QR",null,null,null,null,null,null,null,null,null,null,null)
D.fpE=new B.x("Upload a different logo",null,A.cc,null,null,null,null,null,null,null,null,null)
D.fpU=new B.x("Delete from the database?",null,A.kU,null,null,null,null,null,null,null,null,null)
D.fpV=new B.x("H",null,A.rq,null,null,null,null,null,null,null,null,null)
D.fqi=new B.x("NGMY Quotes",null,A.du,null,null,null,null,null,null,null,null,null)
D.fqJ=new B.x("Cover",null,D.aP_,null,null,null,null,null,null,null,null,null)
D.fqN=new B.x("Hati iliyopo ya jimbo hili itabadilishwa.",null,null,null,null,null,null,null,null,null,null,null)
D.fqO=new B.x("Each page becomes its own slide you can present",null,A.ho,null,null,null,null,null,null,null,null,null)
D.fr9=new B.x("Y",null,A.rq,null,null,null,null,null,null,null,null,null)
D.frk=new B.x("Crop the picture",null,A.kV,null,null,null,null,null,null,null,null,null)
D.frq=new B.x("Edit text",null,A.Iu,null,null,null,null,null,null,null,null,null)
D.ftD=B.dQ("a7u")
D.D1=new C.avK(0,"none")
D.aRH=new C.avK(1,"zipCrypto")
D.aRI=new C.avK(2,"aes")
D.fFP=new F.OE("","",null)
D.fGV=new C.baG(null)
D.fI1=new C.YL(null)
D.fJB=new C.acf(null)
D.fJD=new C.aCW(null)
D.fMo=new C.a__(null)
D.fME=new C.a_u(null)
D.fMX=new C.bs6(null)})();(function staticFields(){$.h6u=null
$.h6v=null
$.h6w=null
$.h6x=null
$.fPK=B.uP("_lastQuoRemDigits")
$.fPL=B.uP("_lastQuoRemUsed")
$.aw5=B.uP("_lastRemUsed")
$.fPM=B.uP("_lastRem_nsh")
$.pW=B.a([4294967295,2147483647,1073741823,536870911,268435455,134217727,67108863,33554431,16777215,8388607,4194303,2097151,1048575,524287,262143,131071,65535,32767,16383,8191,4095,2047,1023,511,255,127,63,31,15,7,3,1,0],x.t)
$.a6j=B.V(x.N,x.I)
$.fNg=!1
$.hbh=B.V(B.ax("kL"),x.N)
$.hbv=B.V(B.ax("kL"),x.E)
$.h9t=!1
$.bxK="q"
$.PB=0
$.Ca=B.V(x.N,B.ax("ak<z4>"))
$.h9R=!1
$.fRj=!1
$.hg5=null
$.hK4=B.V(x.N,B.ax("ay<n?>"))
$.JM=""
$.iX=0
$.h3g=function(){var w=x.N
return B.V(w,w)}()
$.h3f=B.V(x.N,x.R)
$.fRE=!1
$.aeT=B.V(x.N,x.E)
$.fSr=0
$.biH=!1})();(function lazyInitializers(){var w=a.lazyFinal
w($,"i86","Cy",()=>C.b8d(0))
w($,"i84","a1J",()=>C.b8d(1))
w($,"i85","hjF",()=>C.b8d(2))
w($,"i83","fW9",()=>$.a1J().uL(0))
w($,"i81","hjD",()=>C.b8d(1e4))
w($,"i82","hjE",()=>B.DK(8))
w($,"i3U","hhG",()=>B.DK(0))
w($,"i41","hhK",()=>B.DK(0))
w($,"i40","hhJ",()=>B.bW2(0))
w($,"ibL","hlF",()=>{var v,u,t=x.N
t=B.V(t,t)
for(v=D.a2P.gdL(D.a2P),v=v.gag(v);v.C();){u=v.gU(v)
t.n(0,u.b,u.a)}return t})
w($,"icb","bCg",()=>{var v="Corporate",u=4280171146,t=4294967295,s=4280640491,r=4279080072,q="Modern",p="Bold",o=4278190080,n=4280472558,m=4279179050,l=4284773515,k=4287874557,j=4293548044,i=4279548070,h=x.O
return B.a([C.mN(new C.fyo(),v,"biz_plan_blue","Business Plan",B.a([B.b0(u),B.b0(t)],h)),C.mN(new C.fyp(),v,"exec_summary","Executive",B.a([B.b0(s),B.b0(t)],h)),C.mN(new C.fyq(),v,"teal_corporate","Teal Corp",B.a([B.b0(r),B.b0(4279310375)],h)),C.mN(new C.fyB(),q,"geometric_overlap","Geometric",B.a([B.b0(4279203438),B.b0(u)],h)),C.mN(new C.fyG(),p,"midnight_cyan","Midnight Cyan",B.a([B.b0(o),B.b0(n)],h)),C.mN(new C.fyH(),q,"diagonal_hero","Diagonal Hero",B.a([B.b0(m),B.b0(l)],h)),C.mN(new C.fyI(),v,"swot_grid","SWOT Grid",B.a([B.b0(u),B.b0(4278556265)],h)),C.mN(new C.fyJ(),v,"layered_chevrons","Chevrons",B.a([B.b0(4280172719),B.b0(k)],h)),C.mN(new C.fyK(),q,"split_triangle","Split Panel",B.a([B.b0(s),B.b0(t)],h)),C.mN(new C.fyL(),v,"corporate_navy","Navy Pro",B.a([B.b0(4278982953),B.b0(4282090230)],h)),C.mN(new C.fyM(),p,"cyan_slash","Cyan Slash",B.a([B.b0(o),B.b0(4278630100)],h)),C.mN(new C.fyr(),p,"crimson_impact","Crimson",B.a([B.b0(4282714634),B.b0(4292617766)],h)),C.mN(new C.fys(),q,"ocean_waves","Ocean Waves",B.a([B.b0(4278413729),B.b0(4286436348)],h)),C.mN(new C.fyt(),p,"mono_geometric","Mono Geo",B.a([B.b0(o),B.b0(n)],h)),C.mN(new C.fyu(),"Luxury","luxury_gold","Gold Luxe",B.a([B.b0(4280031511),B.b0(4293571336)],h)),C.mN(new C.fyv(),q,"hex_infographic","Hex Stack",B.a([B.b0(r),B.b0(4284410580)],h)),C.mN(new C.fyw(),q,"photo_banner","Photo Banner",B.a([B.b0(m),B.b0(4281908728)],h)),C.mN(new C.fyx(),v,"process_steps","Process",B.a([B.b0(s),B.b0(k)],h)),C.mN(new C.fyy(),"Minimal","grid_modern","Grid Modern",B.a([B.b0(l),B.b0(t)],h)),C.mN(new C.fyz(),"Luxury","platinum_frame","Platinum",B.a([B.b0(4282865001),B.b0(4293060848)],h)),C.mN(new C.fyA(),v,"agenda_cards","Agenda Cards",B.a([B.b0(u),B.b0(4292602622)],h)),C.mN(new C.fyC(),q,"headline_orange","Headline Orange",B.a([B.b0(j),B.b0(i)],h)),C.mN(new C.fyD(),q,"infographic_teal","Infographic",B.a([B.b0(r),B.b0(j)],h)),C.mN(new C.fyE(),q,"content_year","Year Feature",B.a([B.b0(j),B.b0(t)],h)),C.mN(new C.fyF(),q,"photo_cta","Photo CTA",B.a([B.b0(m),B.b0(i)],h))],B.ax("P<Ea>"))})
w($,"ibO","hlH",()=>B.af("^[A-Z]{2}\\d{3}$",!0,!1,!1,!1))})()};
(a=>{a["DxTqZI9hYn2FU2Xsfka5tkoJZKc="]=a.current})($__dart_deferred_initializers__);