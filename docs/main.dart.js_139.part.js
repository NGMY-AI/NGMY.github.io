((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,Ah,A5,Ai,A6,Aj,U,A7,Ak,Al,C={
tz(d,e){for(;;){if(!(d>0&&e[d-1]===0))break;--d}return d},
fRo(d,e,f,g){var w,v=new Uint16Array(g),u=f-e
for(w=0;w<u;++w)v[w]=d[e+w]
return v},
Jb(d){var w
if(d===0)return $.CC()
if(d===1)return $.a1X()
if(d===2)return $.hlk()
if(Math.abs(d)<4294967296)return C.b8r(A.o.N(d))
w=C.hFY(d)
return w},
b8r(d){var w,v,u,t,s=d<0
if(s){if(d===-9223372036854776e3){w=new Uint16Array(4)
w[3]=32768
v=C.tz(4,w)
return new C.nM(v!==0,w,v)}d=-d}if(d<65536){w=new Uint16Array(1)
w[0]=d
v=C.tz(1,w)
return new C.nM(v===0?!1:s,w,v)}if(d<=4294967295){w=new Uint16Array(2)
w[0]=d&65535
w[1]=A.o.aA(d,16)
v=C.tz(2,w)
return new C.nM(v===0?!1:s,w,v)}v=A.o.an(A.o.gaj7(d)-1,16)+1
w=new Uint16Array(v)
for(u=0;d!==0;u=t){t=u+1
w[u]=d&65535
d=A.o.an(d,65536)}v=C.tz(v,w)
return new C.nM(v===0?!1:s,w,v)},
hFY(d){var w,v,u,t,s,r,q,p
if(isNaN(d)||d==1/0||d==-1/0)throw B.V(B.dI("Value must be finite: "+d,null))
d=Math.floor(d)
if(d===0)return $.CC()
w=$.hlj()
for(v=w.$flags|0,u=0;u<8;++u){v&2&&B.ai(w)
w[u]=0}v=J.l3(A.aG.gaO(w))
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
q=new C.nM(!1,r,4)
if(s<0)p=q.mi(0,-s)
else p=s>0?q.dU(0,s):q
return p},
fRp(d,e,f,g){var w,v,u
if(e===0)return 0
if(f===0&&g===d)return e
for(w=e-1,v=g.$flags|0;w>=0;--w){u=d[w]
v&2&&B.ai(g)
g[w+f]=u}for(w=f-1;w>=0;--w){v&2&&B.ai(g)
g[w]=0}return e+f},
h8d(d,e,f,g){var w,v,u,t,s,r=A.o.an(f,16),q=A.o.F(f,16),p=16-q,o=A.o.dU(1,p)-1
for(w=e-1,v=g.$flags|0,u=0;w>=0;--w){t=d[w]
s=A.o.fA(t,p)
v&2&&B.ai(g)
g[w+r+1]=(s|u)>>>0
u=A.o.dU(t&o,q)}v&2&&B.ai(g)
g[r]=u},
h88(d,e,f,g){var w,v,u,t,s=A.o.an(f,16)
if(A.o.F(f,16)===0)return C.fRp(d,e,s,g)
w=e+s+1
C.h8d(d,e,f,g)
for(v=g.$flags|0,u=s;--u,u>=0;){v&2&&B.ai(g)
g[u]=0}t=w-1
return g[t]===0?t:w},
hG0(d,e,f,g){var w,v,u,t,s=A.o.an(f,16),r=A.o.F(f,16),q=16-r,p=A.o.dU(1,r)-1,o=A.o.fA(d[s],r),n=e-s-1
for(w=g.$flags|0,v=0;v<n;++v){u=d[v+s+1]
t=A.o.dU(u&p,q)
w&2&&B.ai(g)
g[v]=(t|o)>>>0
o=A.o.fA(u,r)}w&2&&B.ai(g)
g[n]=o},
cCX(d,e,f,g){var w,v=e-g
if(v===0)for(w=e-1;w>=0;--w){v=d[w]-f[w]
if(v!==0)return v}return v},
hFZ(d,e,f,g,h){var w,v,u
for(w=h.$flags|0,v=0,u=0;u<g;++u){v+=d[u]+f[u]
w&2&&B.ai(h)
h[u]=v&65535
v=v>>>16}for(u=g;u<e;++u){v+=d[u]
w&2&&B.ai(h)
h[u]=v&65535
v=v>>>16}w&2&&B.ai(h)
h[e]=v},
b8s(d,e,f,g,h){var w,v,u
for(w=h.$flags|0,v=0,u=0;u<g;++u){v+=d[u]-f[u]
w&2&&B.ai(h)
h[u]=v&65535
v=0-(A.o.aA(v,16)&1)}for(u=g;u<e;++u){v+=d[u]
w&2&&B.ai(h)
h[u]=v&65535
v=0-(A.o.aA(v,16)&1)}},
h8e(d,e,f,g,h,i){var w,v,u,t,s,r
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
hG_(d,e,f){var w,v=e[f]
if(v===d)return 65535
w=A.o.e3((v<<16|e[f-1])>>>0,d)
if(w>65535)return 65535
return w},
nM:function nM(d,e,f){this.a=d
this.b=e
this.c=f},
cCY:function cCY(){},
cCZ:function cCZ(){},
cD_:function cD_(d,e){this.a=d
this.b=e},
cD0:function cD0(d){this.a=d},
aQ3:function aQ3(d,e){this.a=d
this.b=e},
fZ8(d,e,f){var w=new C.Rc(d,A.o.an(Date.now(),1000),e)
w.Q=f
return w},
Rc:function Rc(d,e,f){var _=this
_.a=d
_.b=420
_.e=e
_.as=_.Q=null
_.at=f},
a36:function a36(d,e){this.a=d
this.b=e},
bG6:function bG6(d){this.a=d
this.c=this.b=0},
hox(){return new C.bEt()},
bEt:function bEt(){var _=this
_.ax=_.at=_.as=_.Q=_.z=_.y=_.x=_.w=_.r=_.f=_.e=_.d=_.c=_.b=_.a=$
_.ay=0
_.ch=-1
_.cx=_.CW=0
_.fr=_.dy=_.dx=_.db=_.cy=$
_.fx=0},
cv7:function cv7(d){var _=this
_.a=-1
_.r=_.f=0
_.x=d},
hFG(d,e,f){var w,v,u,t,s
if(d.gam(d))return new Uint8Array(0)
w=new Uint8Array(B.cf(d.gcTz(d)))
v=f*2+2
u=C.h5Q(C.h5S(),64)
t=new C.cf9(u)
u=u.b
u===$&&B.c()
t.c=new Uint8Array(u)
t.a=new C.cfa(e,1000,v)
s=new Uint8Array(v)
return A.aG.dn(s,0,t.cH6(w,0,s,0))},
cv5:function cv5(d,e){this.c=d
this.d=e},
avX:function avX(d,e){this.a=d
this.b=e},
cv8:function cv8(d,e,f,g){var _=this
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
b78:function b78(){var _=this
_.as=_.Q=_.y=_.x=_.w=_.a=0
_.at=""
_.ch=_.ax=null},
cv6:function cv6(){this.a=$},
h7D(d,e){var w,v,u=d.length
if(u!==e.length)return!1
for(w=0,v=0;v<u;++v)w|=d[v]^e[v]
return w===0},
hog(d,e){var w
d.$flags&2&&B.ai(d)
d[0]=e&255
d[1]=e>>>8&255
d[2]=e>>>16&255
d[3]=e>>>24&255
for(w=4;w<=15;++w)d[w]=0},
bD3:function bD3(d,e,f){var _=this
_.a=1
_.b=d
_.c=e
_.d=f
_.r=null
_.x=_.w=$},
fWU(d,e){e&=31
return(d&$.pX[e])<<e>>>0},
nk(d,e){e&=31
return(d>>>e|C.fWU(d,32-e))>>>0},
h5R(d){var w,v=new C.arF()
if(B.iF(d))v.aIW(d,null)
else{x.dw.a(d)
w=d.a
w===$&&B.c()
v.a=w
w=d.b
w===$&&B.c()
v.b=w}return v},
h5S(){var w=C.h5R(0),v=new Uint8Array(4),u=x.S
u=new C.cfb(w,v,A.DE,5,B.c1(5,0,!1,u),B.c1(80,0,!1,u))
u.lt(0)
return u},
h5Q(d,e){var w=new C.cf7(d,e)
w.b=20
w.d=new Uint8Array(e)
w.e=new Uint8Array(e+20)
return w},
cf6:function cf6(){},
cfa:function cfa(d,e,f){this.a=d
this.b=e
this.c=f},
cf4:function cf4(){},
arE:function arE(d){this.a=d},
cf9:function cf9(d){this.a=$
this.b=d
this.c=$},
cf5:function cf5(){},
cf3:function cf3(){},
arF:function arF(){this.b=this.a=$},
cf8:function cf8(){},
cfb:function cfb(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=$
_.d=f
_.e=g
_.f=h
_.r=i
_.w=$},
cf7:function cf7(d,e){var _=this
_.a=d
_.b=$
_.c=e
_.e=_.d=$},
cf2:function cf2(){},
cf1:function cf1(d){var _=this
_.a=0
_.b=$
_.c=!1
_.d=d},
bMf:function bMf(){},
bMg:function bMg(d){this.a=d},
hIT(d){if(d<0.36363636363636365)return 7.5625*d*d
else if(d<0.7272727272727273){d-=0.5454545454545454
return 7.5625*d*d+0.75}else if(d<0.9090909090909091){d-=0.8181818181818182
return 7.5625*d*d+0.9375}d-=0.9545454545454546
return 7.5625*d*d+0.984375},
b8H:function b8H(){},
cp4:function cp4(){},
bN8:function bN8(d,e){this.a=d
this.b=!1
this.c=e},
bN9:function bN9(){},
hRJ(d){var w,v,u=B.a([],x.s)
for(w=d.length,v=0;v<w;++v)u.push(d[v].u(0))
return u},
auB(d){var w=0,v=B.j(x.H),u
var $async$auB=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:u=x.H
w=d!==D.eRe?2:4
break
case 2:w=5
return B.b(A.k1.fV("SystemChrome.setEnabledSystemUIMode",d.a4(),u),$async$auB)
case 5:w=3
break
case 4:null.toString
w=6
return B.b(A.k1.fV("SystemChrome.setEnabledSystemUIOverlays",C.hRJ(null),u),$async$auB)
case 6:case 3:return B.h(null,v)}})
return B.i($async$auB,v)},
auE:function auE(d,e){this.a=d
this.b=e},
a7I:function a7I(d){this.a=d},
fNn(d,e){return new C.aUt(e,d,null)},
aUt:function aUt(d,e,f){this.e=d
this.c=e
this.a=f},
azu:function azu(d,e,f,g,h){var _=this
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
hUk(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p=new C.fnA(15,d,f,e,g,h),o=i*i,n=A.k.V(i/1.4142135623730951)
for(w=0;w<=n;++w){v=Math.sqrt(o-w*w)
u=v-Math.floor(v)
t=u*(w===n?0.25:1)
s=A.k.bu(v)
r=1-u
p.$5(j,k,w,s,r)
q=s+1
p.$5(j,k,w,q,t)
p.$5(j,k,s,w,r)
p.$5(j,k,q,w,t)}return d},
fnA:function fnA(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
amx(){var w=0,v=B.j(x.gw),u,t,s,r,q
var $async$amx=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(S.ag0("ngmy_menu_lib_v1_zzslides_index",A.bG),$async$amx)
case 3:q=e
if(!q.a){u=null
w=1
break}t=q.b
s=t==null?null:J.q(t,"items")
if(x.j.b(s)){t=J.d8(s,x.f)
t=B.cD(t,new C.bXM(),t.$ti.k("J.E"),x.P)
r=B.B(t,B.a3(t).k("J.E"))}else r=B.a([],x.d)
A.d.b_(r,new C.bXN())
u=r
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$amx,v)},
amz(d){var w=0,v=B.j(x.S),u,t,s,r,q,p,o,n,m,l,k,j
var $async$amz=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.amx(),$async$amz)
case 3:j=f
if(j==null){u=0
w=1
break}t=x.N
s=B.T(t,x.P)
for(r=J.aV(j);r.C();){q=r.gU(r)
p=J.q(q,"id")
s.n(0,J.k(p==null?"":p),q)}r=d.length,q=x.z,o=0,n=0
case 4:if(!(n<d.length)){w=6
break}m=d[n]
l=new B.S(Date.now(),0,!1).a6().ac()
p=m.a
k=B.af("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(B.nj("ngmy_menu_lib_v1_zzslide_"+B.aK(p,k,""),B.F(["deck",m.ae(),"savedAt",l],t,q),null),$async$amz)
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
return B.b(B.nj("ngmy_menu_lib_v1_zzslides_index",B.F(["items",s,"savedAt",new B.S(Date.now(),0,!1).a6().ac()],t,q),null),$async$amz)
case 10:if(!f){u=0
w=1
break}case 9:u=o
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$amz,v)},
bXO(d){return C.hu_(d)},
hu_(d){var w=0,v=B.j(x.af),u,t=2,s=[],r,q,p,o,n,m
var $async$bXO=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
o=B.af("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(S.ag0("ngmy_menu_lib_v1_zzslide_"+B.aK(d,o,""),A.hH),$async$bXO)
case 7:r=f
o=r.b
q=o==null?null:J.q(o,"deck")
if(!x.f.b(q)){u=null
w=1
break}o=C.Vi(B.a1(q,x.N,x.z))
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
return B.i($async$bXO,v)},
amy(d){var w=0,v=B.j(x.y),u,t,s,r
var $async$amy=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.amx(),$async$amy)
case 3:r=f
if(r==null){u=!1
w=1
break}J.nl(r,new C.bXP(d))
w=4
return B.b(B.nj("ngmy_menu_lib_v1_zzslides_index",B.F(["items",r,"savedAt",new B.S(Date.now(),0,!1).a6().ac()],x.N,x.z),null),$async$amy)
case 4:t=f
w=t?5:6
break
case 5:s=B.af("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(S.aO5("ngmy_menu_lib_v1_zzslide_"+B.aK(d,s,"")),$async$amy)
case 7:case 6:u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$amy,v)},
bXM:function bXM(){},
bXN:function bXN(){},
bXP:function bXP(d){this.a=d},
i3b(d,e,f){return B.bX(A.K,null,new C.fDm(e,f,null),d,!0,!0,!0,null,!1,!1,x.H)},
fDm:function fDm(d,e,f){this.a=d
this.b=e
this.c=f},
a0a:function a0a(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aHS:function aHS(d){var _=this
_.d=d
_.e=null
_.f=!0
_.r=!1
_.w=0
_.x=null
_.y=!1
_.c=_.a=null},
f1N:function f1N(d,e){this.a=d
this.b=e},
f1R:function f1R(d){this.a=d},
f1S:function f1S(d){this.a=d},
f1T:function f1T(d,e,f){this.a=d
this.b=e
this.c=f},
f1O:function f1O(d){this.a=d},
f1P:function f1P(d){this.a=d},
f1Q:function f1Q(d,e){this.a=d
this.b=e},
f1I:function f1I(d){this.a=d},
f1G:function f1G(d){this.a=d},
f1H:function f1H(d){this.a=d},
f1J:function f1J(d){this.a=d},
f1K:function f1K(d){this.a=d},
f1X:function f1X(d,e){this.a=d
this.b=e},
f1W:function f1W(d,e){this.a=d
this.b=e},
f1M:function f1M(d,e,f){this.a=d
this.b=e
this.c=f},
f1L:function f1L(d,e,f){this.a=d
this.b=e
this.c=f},
f1U:function f1U(d,e){this.a=d
this.b=e},
f1V:function f1V(d,e){this.a=d
this.b=e},
f2_:function f2_(d){this.a=d},
f20:function f20(d,e){this.a=d
this.b=e},
f1Z:function f1Z(d,e){this.a=d
this.b=e},
f1Y:function f1Y(){},
haC(d){var w,v,u,t
if(d==null||d.length===0)return B.a([],x.k)
try{w=A.R.aG(0,d,null)
if(!x.j.b(w)){v=B.a([],x.k)
return v}v=J.d8(w,x.f)
v=B.cD(v,new C.f9_(),v.$ti.k("J.E"),x.ea)
u=B.a3(v).k("a2<J.E>")
v=B.B(new B.a2(v,new C.f90(),u),u.k("J.E"))
return v}catch(t){v=B.a([],x.k)
return v}},
a18(d){return C.hVA(d)},
hVA(d){var w=0,v=B.j(x.gL),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$a18=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:n=B.T(x.N,x.ea)
m=new C.fq6(n)
t=4
j=m
i=C
w=7
return B.b(B.a1I("ngmy_books_v1_"+A.a.i(d.toLowerCase())),$async$a18)
case 7:j.$1(i.haC(f))
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
return B.b(B.az(),$async$a18)
case 12:r=f
p=A.a.i(d.toLowerCase())
m.$1(C.haC(B.aT(J.q(r.a,"ngmy_books_v1_"+p))))
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
return B.b(C.f98(d),$async$a18)
case 13:p=j.B(new i.a2(h,new g.fq4(f),o),o.k("J.E"))
A.d.b_(p,new C.fq5())
u=p
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a18,v)},
agA(d,e){return C.i2R(d,e)},
i2R(d,e){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l
var $async$agA=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:n=J.b6(e,new C.fCR(),x.P)
n=B.B(n,n.$ti.k("ak.E"))
r=A.R.ao(n,null)
q=!1
t=4
w=7
return B.b(B.ags("ngmy_books_v1_"+A.a.i(d.toLowerCase()),r),$async$agA)
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
return B.b(B.az(),$async$agA)
case 12:p=g
w=13
return B.b(p.ar("String","ngmy_books_v1_"+A.a.i(d.toLowerCase()),r),$async$agA)
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
return B.i($async$agA,v)},
f98(d){return C.hKh(d)},
hKh(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o
var $async$f98=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.az(),$async$f98)
case 7:r=f
q=r.rU("ngmy_books_deleted_v1_"+A.a.i(d.toLowerCase()))
if(q==null)q=A.T
q=B.kz(q,B.U(q).c)
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
return B.i($async$f98,v)},
afp(d,e){return C.hUc(d,e)},
hUc(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m
var $async$afp=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$afp)
case 6:s=g
r=B.aX(x.N)
q=s.rU("ngmy_books_deleted_v1_"+A.a.i(d.toLowerCase()))
if(q!=null)J.h_(r,q)
J.ch(r,e)
p=r
r=A.a.i(d.toLowerCase())
q=p
q=B.B(q,B.a3(q).k("cn.E"))
w=7
return B.b(s.ar("StringList","ngmy_books_deleted_v1_"+r,q),$async$afp)
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
return B.b(C.a18(d),$async$afp)
case 8:n=g
J.nl(n,new C.fng(e))
w=9
return B.b(C.agA(d,n),$async$afp)
case 9:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$afp,v)},
i3g(d,e){return B.a6(d,!1).c6(B.e7(new C.fDI(e),!0,null,x.H))},
hG2(d){var w=d.b
return A.a.i(w.a)==="My Book"&&A.d.d9(w.d,new C.cEj())},
oc:function oc(d,e,f){this.a=d
this.b=e
this.c=f},
f9_:function f9_(){},
f90:function f90(){},
fq6:function fq6(d){this.a=d},
fq4:function fq4(d){this.a=d},
fq5:function fq5(){},
fCR:function fCR(){},
fng:function fng(d){this.a=d},
fDI:function fDI(d){this.a=d},
XY:function XY(d,e){this.c=d
this.a=e},
awu:function awu(d,e){var _=this
_.d=d
_.e=!0
_.f=e
_.c=_.a=null},
cEj:function cEj(){},
cEl:function cEl(d,e){this.a=d
this.b=e},
cEo:function cEo(d){this.a=d},
cEp:function cEp(d){this.a=d},
cEn:function cEn(){},
cEq:function cEq(d,e){this.a=d
this.b=e},
cEm:function cEm(d){this.a=d},
cEr:function cEr(){},
cEk:function cEk(d,e){this.a=d
this.b=e},
cEs:function cEs(){},
cEf:function cEf(d){this.a=d},
cEd:function cEd(d){this.a=d},
cEe:function cEe(d){this.a=d},
cEg:function cEg(d,e){this.a=d
this.b=e},
cEc:function cEc(d){this.a=d},
cEb:function cEb(d){this.a=d},
cE9:function cE9(d,e){this.a=d
this.b=e},
cEa:function cEa(d){this.a=d},
cEi:function cEi(){},
cEh:function cEh(d){this.a=d},
cE8:function cE8(d,e){this.a=d
this.b=e},
cE7:function cE7(d,e){this.a=d
this.b=e},
cE6:function cE6(d,e){this.a=d
this.b=e},
cEt:function cEt(d){this.a=d},
XW:function XW(d,e,f){this.c=d
this.d=e
this.a=f},
aDM:function aDM(d,e,f){this.a=d
this.b=e
this.c=f},
awq:function awq(d){var _=this
_.r=_.f=_.e=_.d=$
_.w=d
_.x=null
_.y=!1
_.c=_.a=null},
cDA:function cDA(d){this.a=d},
cDz:function cDz(d){this.a=d},
cDC:function cDC(d,e,f){this.a=d
this.b=e
this.c=f},
cDK:function cDK(){},
cDL:function cDL(d){this.a=d},
cDD:function cDD(d,e,f){this.a=d
this.b=e
this.c=f},
cDB:function cDB(d,e){this.a=d
this.b=e},
cDF:function cDF(d,e){this.a=d
this.b=e},
cDG:function cDG(d,e){this.a=d
this.b=e},
cDH:function cDH(d,e){this.a=d
this.b=e},
cDE:function cDE(d){this.a=d},
cDJ:function cDJ(d){this.a=d},
cDI:function cDI(d,e){this.a=d
this.b=e},
cDQ:function cDQ(d){this.a=d},
cDM:function cDM(d,e){this.a=d
this.b=e},
cDN:function cDN(d,e){this.a=d
this.b=e},
cDO:function cDO(d,e){this.a=d
this.b=e},
cDP:function cDP(d,e){this.a=d
this.b=e},
aws:function aws(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
hXV(){var w,v,u,t,s=!1
try{u=document
if(u.fullscreenElement==null){w=u.documentElement
if(w!=null){v=w.requestFullscreen()
if(s&&v!=null)B.eh(v,x.cK).bz(new C.fuD(),x.H).eU(new C.fuE())}}else if(s)C.hc5()}catch(t){}},
hc5(){var w,v,u
try{w=window.screen.orientation
if(w==null)return
v=w.lock("landscape")
if(v!=null)B.eh(v,x.cK).eU(new C.fdp())}catch(u){}},
hXY(){var w,v,u
try{w=window.screen.orientation
if(w!=null)w.unlock()}catch(v){}try{u=document
if(u.fullscreenElement!=null)u.webkitExitFullscreen()}catch(v){}},
fuD:function fuD(){},
fuE:function fuE(){},
fdp:function fdp(){},
hgE(d){var w="marriage_field_",v=d.db
if(!A.a.a0(v,w))return null
return A.d.gK(A.a.e9(v,w,"").split(":"))},
hgB(d){var w=d.db
if(!A.a.a0(w,"marriage_sign_"))return null
if(A.a.a0(w,"marriage_sign_placed_"))return null
if(d.b===D.kS)return null
return A.a.b0(w,14)},
fVD(d){var w
if(d.b!==D.kS)return null
w=d.db
if(!A.a.a0(w,"marriage_sign_placed_"))return null
return A.a.b0(w,21)},
hYn(d){if(d==="hati_kuhowa")return"hati_kuhoweya"
if(d==="hati_kuhoweya")return"hati_kuhowa"
return""},
hgF(d){if(d==="hati_kuhowa")return"Hati ya Kuhoweya"
if(d==="hati_kuhoweya")return"Hati ya Kuhowa"
return"partner document"},
hYi(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=B.af("\\s+",!0,!1,!1,!1),f=A.a.i(B.aK(d,g," "))
g=B.af("\\s+",!0,!1,!1,!1)
w=A.a.i(B.aK(e,g," "))
g=f.length
if(g===0||w.length===0){g=x.N
return B.T(g,g)}v=B.af("\\[[^\\]]+\\]",!0,!1,!1,!1)
u=v.kR(0,f)
t=x.N
u=B.cD(u,new C.fvC(),B.a3(u).k("J.E"),t)
s=B.B(u,B.a3(u).k("J.E"))
if(s.length===0)return B.T(t,t)
for(u=v.kR(0,f),u=new B.Ja(u.a,u.b,u.c),r=x.cz,q=0,p="^";u.C();){o=u.d
n=(o==null?r.a(o):o).b
m=n.index
p=(m>q?p+B.QT(A.a.ap(f,q,m)):p)+"(.*?)"
q=m+n[0].length}u=(q<g?p+B.QT(A.a.b0(f,q)):p)+"\\.?$"
l=B.af(u.charCodeAt(0)==0?u:u,!1,!1,!1,!1).cD(w)
if(l==null)return B.T(t,t)
k=B.T(t,t)
for(g=l.b,j=0;j<s.length;j=i){i=j+1
u=g[i]
h=A.a.i(u==null?"":u)
if(h.length===0)continue
k.n(0,s[j],h)}return k},
hYg(d,e){var w,v,u,t,s,r=B.a3(e).k("ct<1>"),q=B.B(new B.ct(e,r),r.k("J.E"))
A.d.b_(q,new C.fvB())
for(r=q.length,w=d,v=0;v<q.length;q.length===r||(0,B.L)(q),++v){u=q[v]
t=e.h(0,u)
s=t==null?null:A.a.i(t)
if(s==null)s=""
if(s.length===0)continue
if(A.a.a0(s,"[")&&A.a.cb(s,"]"))continue
w=B.aP3(w,u,s,0)}return w},
hYk(d,e){var w,v,u,t=d==="hati_kuhowa"?D.a2Y:$.hnk(),s=x.N,r=B.T(s,s)
for(s=t.gdK(t),s=s.gaf(s);s.C();){w=s.gU(s)
v=e.h(0,w.a)
u=v==null?null:A.a.i(v)
if(u==null)u=""
if(u.length===0)continue
if(A.a.a0(u,"[")&&A.a.cb(u,"]"))continue
r.n(0,w.b,u)}return r},
hgC(d){if(d==="hati_kuhowa")return y.O
if(d==="hati_kuhoweya")return y.f
return""},
fa2(d,e){var w,v,u,t,s,r,q
for(w=d.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u)for(t=w[u].z,s=t.length,r=0;r<t.length;t.length===s||(0,B.L)(t),++r){q=t[r]
if(C.hgE(q)===e)return q}return null},
hYl(d){var w,v=A.a.i(d.c),u=d.w
if(u==="hati_kuhowa")w="hati_kuhowa_"
else w=u==="hati_kuhoweya"?"hati_kuhoweya_":""
u=w.length
if(u!==0&&A.a.a0(v,w))return A.a.b0(v,u)
return A.d.gK(D.Gj).a},
hYm(b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0="utangulizi",b1=b6.w,b2=b1==null?"":b1,b3=b5.w,b4=b3==null?"":b3
if(b1==="hati_kuhowa"||b1==="hati_kuhoweya")w=!(b3==="hati_kuhowa"||b3==="hati_kuhoweya")
else w=!0
if(w)return new B.adk(0,0,0)
if(b2.length===0||b4.length===0||b2===b4)return new B.adk(0,0,0)
v=C.fa2(b6,b0)
u=C.fa2(b5,b0)
t=0
if(v!=null&&u!=null){s=C.hYk(b2,C.hYi(C.hgC(b2),v.r))
if(s.a!==0){u.r=C.hYg(C.hgC(b4),s)
t=s.a}}r=B.aX(x.N)
for(w=b6.r,q=w.length,p=0;p<w.length;w.length===q||(0,B.L)(w),++p)for(o=w[p].z,n=o.length,m=0;m<o.length;o.length===n||(0,B.L)(o),++m){l=C.hgE(o[m])
if(l==null||l==="utangulizi")continue
r.L(0,l)}for(q=B.ec(r,r.r,r.$ti.c),o=q.$ti.c,k=0;q.C();){n=q.d
if(n==null)n=o.a(n)
j=C.fa2(b6,n)
i=C.fa2(b5,n)
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
a0=C.fVD(d)
if(a0==null)continue
a1=d.at
if(A.a.i(a1==null?"":a1).length===0)continue
a2=d.c
a3=d.d
a4=d.e
a5=d.f
for(a1=f.z,a6=a1.length,a7=0;a7<a1.length;a1.length===a6||(0,B.L)(a1),++a7){a8=a1[a7]
if(C.hgB(a8)===a0||C.fVD(a8)===a0){a2=a8.c
a3=a8.d
a4=a8.e
a5=a8.f
break}}a1=f.z
a1.$flags&1&&B.ai(a1,16)
A.d.Qp(a1,new C.fvI(a0),!0)
a1=f.z
a6=Date.now()
a9=$.iX
$.iX=a9+1
A.d.L(a1,new C.eI(""+1000*a6+"_"+a9,D.kS,a2,a3,a4,a5,"",24,A.a4,A.bl,A.aD,4279310375,A.bg,d.at,D.be,4280640491,4280172719,2,0,!1,"marriage_sign_placed_"+a0,0,D.cg,0,"","","","","",!1,0));++e}b5.f=new B.S(Date.now(),0,!1)
return new B.adk(k,t,e)},
hYh(d){var w=C.hYl(d)
if(d.w==="hati_kuhowa")return C.hfZ("",w)
return C.hfY("",w)},
fvC:function fvC(){},
fvB:function fvB(){},
fvI:function fvI(d){this.a=d},
hbP(){var w=new B.S(Date.now(),0,!1),v=new C.fcs()
return B.t(v.$1(B.bQ(w)))+"/"+B.t(v.$1(B.bG(w)))+"/"+B.by(w)},
fVL(d){var w=d.at,v=A.a.i(w==null?"":w)
w=d.db
return(w==="__kiapo_video__"||A.a.a0(w,"__kiapo_video___"))&&v.length!==0},
fwA(d){var w,v,u,t,s,r,q=d.ax
if(A.a.i(q==null?"":q).length!==0)return!0
for(q=d.r,w=q.length,v=0;v<w;++v)for(u=q[v].z,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===D.kS&&A.a.a0(r.db,"marriage_sign_placed_rais"))return!0}return!1},
hgS(d){var w,v=d.ax,u=A.a.i(v==null?"":v)
if(u.length===0)return!C.fwA(d)
w=B.bi(u)
if(w==null)return!C.fwA(d)
return new B.S(Date.now(),0,!1).a6().cY(w.a6().bP(18e9))},
hZ2(d){var w=d.ax
if(A.a.i(w==null?"":w).length!==0)return
d.ax=new B.S(Date.now(),0,!1).a6().ac()},
hy0(d){return A.a.i(d).toLowerCase()},
aoG(d){return C.hy2(d)},
hy2(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o,n,m
var $async$aoG=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.az(),$async$aoG)
case 7:r=f
p=r.rU("ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase())
q=p==null?A.T:p
o=q
o=new B.K(o,C.i1y(),B.U(o).k("K<1,n>")).c_(0,new C.c7l())
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
return B.i($async$aoG,v)},
aoF(d,e){return C.hy1(d,e)},
hy1(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n
var $async$aoF=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:o=A.a.i(e).toLowerCase()
if(o.length===0||A.a.i(d).length===0){w=1
break}w=3
return B.b(C.aoG(d),$async$aoF)
case 3:r=g
if(!J.ch(r,o)){w=1
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
aoH(d,e){return C.hy3(d,e)},
hy3(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n
var $async$aoH=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:o=A.a.i(e).toLowerCase()
if(o.length===0||A.a.i(d).length===0){w=1
break}w=3
return B.b(C.aoG(d),$async$aoH)
case 3:r=g
if(!J.hC(r,o)){w=1
break}t=5
w=8
return B.b(B.az(),$async$aoH)
case 8:q=g
w=9
return B.b(q.ar("StringList","ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase(),J.q5(r)),$async$aoH)
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
return B.i($async$aoH,v)},
UA(a5){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$UA=B.e(function(a6,a7){if(a6===1){s.push(a7)
w=t}for(;;)switch(w){case 0:if($.fOS&&!a5){w=1
break}t=4
w=7
return B.b(B.az(),$async$UA)
case 7:r=a7
q=B.aT(J.q(r.a,"ngmy_civic_hati_kiapo_uongozi_v1"))
if(q!=null&&A.a.i(q).length!==0){p=A.R.aG(0,q,null)
f=x.f
if(f.b(p)){e=x.N
o=B.T(e,x.I)
for(d=J.js(p),d=d.gaf(d),a0=x.z;d.C();){n=d.gU(d)
if(f.b(n.b))J.aF(o,J.k(n.a),C.Vi(B.a1(f.a(n.b),e,a0)))}$.a6x=o}}t=2
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
return B.b(B.c2(),$async$UA)
case 12:case 11:w=a7?8:9
break
case 8:t=14
w=17
return B.b(B.tM("civic_hati_kiapo_uongozi",null,A.ed),$async$UA)
case 17:l=a7
w=l!=null&&x.f.b(J.q(l,"byState"))?18:19
break
case 18:o=x.N
k=B.T(o,x.I)
for(f=x.f,e=J.js(f.a(J.q(l,"byState"))),e=e.gaf(e),d=x.z;e.C();){j=e.gU(e)
if(!f.b(j.b))continue
J.aF(k,J.k(j.a),C.Vi(B.a1(f.a(j.b),o,d)))}for(o=k,o=new B.cJ(o,B.a3(o).k("cJ<1,2>")).gaf(0);o.C();){f=o.d
f.toString
i=f
h=$.a6x.h(0,i.a)
if(h!=null){f=i.b.f
e=h.f
d=f.a
if(d>=e.gbo())f=d===e.gbo()&&f.b<e.gcw()
else f=!0
f=!f}else f=!0
if(f)$.a6x.n(0,i.a,i.b)}w=20
return B.b(C.aoI(),$async$UA)
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
case 16:case 9:$.fOS=!0
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$UA,v)},
aoI(){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m,l
var $async$aoI=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$aoI)
case 6:s=e
r=B.T(x.N,x.P)
for(o=$.a6x,o=new B.cJ(o,B.a3(o).k("cJ<1,2>")).gaf(0);o.C();){n=o.d
n.toString
q=n
J.aF(r,q.a,q.b.ae())}w=7
return B.b(s.ar("String","ngmy_civic_hati_kiapo_uongozi_v1",A.R.ao(r,null)),$async$aoI)
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
return B.i($async$aoI,v)},
aYV(d){var w=0,v=B.j(x.af),u,t,s,r
var $async$aYV=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.UA(!1),$async$aYV)
case 3:t=A.a.i(d).toLowerCase()
if(t.length===0){u=null
w=1
break}s=$.a6x.h(0,t)
r=s==null?null:s.hA()
if(r==null){u=null
w=1
break}u=C.bAz(r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aYV,v)},
a6y(a1){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$a6y=B.e(function(a2,a3){if(a2===1){s.push(a3)
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
if((h==="__kiapo_video__"||A.a.a0(h,"__kiapo_video___"))&&A.a.a0(g,"data:"))i.at=null}$.a6x.n(0,d,o)
$.fOS=!0
w=3
return B.b(C.aoI(),$async$a6y)
case 3:w=4
return B.b(B.c2(),$async$a6y)
case 4:if(!a3){u=!1
w=1
break}t=6
e=x.N
r=B.T(e,x.P)
for(n=$.a6x,n=new B.cJ(n,B.a3(n).k("cJ<1,2>")).gaf(0);n.C();){l=n.d
l.toString
q=l
J.aF(r,q.a,q.b.ae())}w=9
return B.b(B.nj("civic_hati_kiapo_uongozi",B.F(["byState",r,"updatedAt",new B.S(Date.now(),0,!1).a6().ac()],e,x.z),null),$async$a6y)
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
return B.i($async$a6y,v)},
aoJ(d){var w=0,v=B.j(x.T),u,t,s
var $async$aoJ=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(new B.hW().a4R(A.eG),$async$aoJ)
case 3:s=f
if(s==null){u=null
w=1
break}w=4
return B.b(s.ff(),$async$aoJ)
case 4:t=f
if(t.length===0){u=null
w=1
break}w=5
return B.b(C.aYU(t,d),$async$aoJ)
case 5:u=f
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aoJ,v)},
aYU(d,e){return C.hy4(d,e)},
hy4(d,e){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$aYU=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.c2(),$async$aYU)
case 7:if(!g){u=null
w=1
break}n=A.a.i(e)
m=B.af("[^a-z0-9]+",!0,!1,!1,!1)
r=B.aK(n.toLowerCase(),m,"_")
q="civic_kiapo/"+B.t(r)+"/"+1000*Date.now()+".mp4"
n=$.eW().b
n===$&&B.c()
n=n.at
n===$&&B.c()
p=n.i4("media")
w=8
return B.b(p.wE(q,new Uint8Array(B.cf(d)),D.bwF),$async$aYU)
case 8:n=p.Cg(q)
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
return B.i($async$aYU,v)},
K1(d,e,f,g,h,i,j,k,l,m,n){var w=C.cC()
return C.eo(e,!1,f,A.aD,k.length===0?"marriage_locked":"marriage_locked_"+k,4280640491,g,h,i,"",j,w,null,"","",0,!1,"",0,D.be,4280172719,2,d,0,0,"",D.cg,D.cQ,l,m,n)},
fbI(d,e,f,g,h,i,j,k,l){var w=C.cC()
return C.eo(A.bg,!1,4279310375,A.aD,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bl,A.a4,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.cg,D.f_,j,k,l)},
fSS(d,e,f,g,h,i,j,k){var w=C.cC(),v=A.k.D(i*0.0017,0.02,0.06)
return C.eo(h,!1,j,A.aD,"marriage_field_"+d+":"+A.k.aa(g,3),4280640491,i,A.cD,A.O,"",v,w,null,"","",0,!1,"",0,D.be,4280172719,2,k,0,0,"",D.cg,D.cQ,g,e,f)},
fbg(d,e,f,g){return C.fbI(0,0.002,D.fp,g,0.8,"ul_"+B.t(d)+"_"+B.t(e),f,d,e+0.002)},
fST(d,e,f,g,h,i,j,k){var w=C.cC()
return C.eo(A.qa,!1,j,A.aD,"marriage_field_"+d+":"+A.k.aa(g,3),4280640491,i,A.bl,A.a4,"",h,w,null,"","",0,!1,"",0,D.be,4280172719,2,k,0,0,"",D.cg,D.cQ,g,e,f)},
hbO(d){var w="marriage_field_",v=d.db
if(!A.a.a0(v,w))return null
return A.d.gK(A.a.e9(v,w,"").split(":"))},
bAz(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4="hati_kiapo_uongozi",a5="__kiapo_video___"
if(a6.w!==a4)return a6
w=a6.x
v=w==null
u=A.a.i(v?"":w)
t=a6.r
s=t.length===0?a3:A.d.gK(t)
t=x.N
r=B.T(t,t)
q=a3
p=a3
if(s!=null)for(t=s.z,o=t.length,n=0;n<t.length;t.length===o||(0,B.L)(t),++n){m=t[n]
l=C.hbO(m)
if(l!=null&&A.a.i(m.r).length!==0)r.n(0,l,m.r)
k=m.at
j=A.a.i(k==null?"":k)
i=m.db
if((i==="__kiapo_video__"||A.a.a0(i,a5))&&j.length!==0)q=k
if(m.b===D.kS&&A.a.a0(i,"marriage_sign_placed_rais"))p=m.hA()}h=C.fVh(u)
t=a6.b
o=h.c
i=h.d
if(v)w=u
v=a6.y
g=a6.z
f=a6.Q
e=a6.as
d=a6.at
a0=C.Bd(f,a3,a3,a3,i,5,!1,a4,a3,a3,a3,a3,a6.a,a6.ax,!1,w,t,d,e,h.r,o,v,g,a6.f)
a1=A.d.gK(a0.r)
for(w=a1.z,v=w.length,t=q!=null,n=0;n<w.length;w.length===v||(0,B.L)(w),++n){m=w[n]
l=C.hbO(m)
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
A.d.bm(a1.z,new C.fuB(a2))}else A.d.bm(a1.z,new C.fuC())
A.d.L(a1.z,p)}w=a0.ax
if(A.a.i(w==null?"":w).length===0&&C.fwA(a0))a0.ax=a6.f.a6().ac()
return a0},
fVh(d){var w,v,u="Hati ya Kiapo cha Uongozi",t=null,s=4279310375,r=4280640491,q=4280172719,p=4279378237,o=4290283019,n=4293056712,m=C.fxn(D.a3Z),l=C.cC(),k=x.u,j=B.a([C.eo(A.bg,!1,s,A.aD,"marriage_locked_bg",r,24,A.bl,A.a4,"",1,C.cC(),m,"","",0,!1,"",0,D.be,q,2,"",0,0,"",D.cg,D.lk,1,0,0)],k),i=B.a([],k)
i.push(C.K1("NGMY",A.L,236069181,52,A.bl,A.u,0.08,"watermark",0.45,-0.08,0.02))
i.push(C.K1("TAREHE:",A.bg,o,16,A.bl,A.H,A.k.D(0.0272,0.02,0.06),"tarehe_lbl",0.1,0.7,0.026))
i.push(C.fSS("tarehe",0.8059999999999999,0.026,0.18,A.bg,16,p,C.hbP()))
i.push(C.fbg(0.8099999999999999,0.026+A.k.D(0.0272,0.02,0.06)*0.8,0.12,o))
i.push(C.K1("HATI YA KIAPO CHA UONGOZI",A.L,p,26,A.bl,A.u,0.048,"title",0.83,0.085,0.055))
i.push(C.K1("Kiapo cha Rais \xb7 Presidential Oath of Leadership",A.L,o,11,A.cD,A.a4,0.024,"subtitle",0.83,0.085,0.1))
i.push(C.fbI(0,0.002,D.fp,o,1.6,"title_rule",0.5312,0.2344,0.128))
i.push(C.fST("body_p1",0.085,0.145,0.83,0.105,12,p,"Mimi [Jina Kamili la Rais], nikiwa Rais wa jamii yetu ya Kikongo, ninasimama mbele ya wanajamii wote kuapa kwamba nitawaongoza kwa haki, amani, na heshima kubwa, huku nikihakikisha tunashirikiana kwa pamoja kujenga jamii yetu na kuchangia maendeleo kwa njia bora na ya kistaarabu."))
i.push(C.fST("body_p2",0.085,0.255,0.83,0.092,12,p,"Ninajwika jukumu kamili la kusimamia rasilimali na fedha za wananchi kwa uaminifu mkubwa. Endapo itatokea kiasi chochote cha fedha cha mwanachama yeyote hakikurekodiwa vizuri, au fedha ya jumuiya ikipotea bila maelezo, nitawajibika kulipa mara tatu (triple) ya kiasi kilichopotea."))
i.push(C.fST("body_p3",0.085,0.352,0.83,0.095,12,p,"Kama nikishindwa kulipa au nikakataa kufanya hivyo, wanajamii wote wanaruhusiwa na wako huru kuchukua hatua za kisheria kwenda kuripoti kwa maofisa wa serikali (state officers) au polisi, au kumfungulia mashitaka mahakamani, na niko tayari kukabiliwa na sheria hizo bila pingamizi."))
i.push(C.fbI(268435456,0.175,D.be,o,1.6,"video_frame",0.83,0.085,0.46))
i.push(C.K1("VIDEO YA KIAPO",A.bg,o,10,A.bl,A.H,0.02,"video_lbl",0.7899999999999999,0.10500000000000001,0.468))
i.push(C.eo(A.bg,!1,s,A.aD,"__kiapo_video__",r,24,A.bl,A.a4,"",0.131,C.cC(),t,"","",0,!1,"",0,D.be,q,2,"",0,0,"",D.cg,D.lk,0.77,0.115,0.492))
i.push(C.K1("Rais Anayeapa:",A.bg,p,15,A.bl,A.u,0.028,"rais_hdr",0.83,0.085,0.655))
i.push(C.K1("Jina:",A.bg,p,13,A.bl,A.O,0.026,"jina_lbl",0.1,0.085,0.6930000000000001))
i.push(C.fSS("rais_jina",0.195,0.6930000000000001,0.62,A.bg,13,p,""))
i.push(C.fbg(0.195,0.7130000000000001,0.62,n))
i.push(C.K1("Sahihi:",A.bg,p,13,A.bl,A.O,0.026,"sahihi_lbl",0.12,0.085,0.74))
i.push(C.eo(A.bg,!1,s,A.aD,"marriage_sign_rais",0,24,A.bl,A.a4,"",0.07,C.cC(),t,"","",0,!1,"",0,D.be,0,2,"",0,0,"",D.cg,D.f_,0.38,0.21500000000000002,0.73))
i.push(C.fbg(0.21500000000000002,0.795,0.38,n))
i.push(C.K1("Tarehe:",A.bg,p,13,A.bl,A.O,0.026,"tarehe2_lbl",0.12,0.625,0.74))
i.push(C.fSS("rais_tarehe",0.745,0.74,0.2,A.bg,12,p,C.hbP()))
i.push(C.fbg(0.745,0.76,0.2,n))
w=A.a.i(d)
if(w.length!==0)A.d.v(i,B.a([C.fbI(0,0.032,D.be,o,1,"state_box",0.72,0.14,0.875),C.K1("EMO 'YA M'MBONDO "+w,A.L,p,14,A.bl,A.O,0.026000000000000002,"state_text",0.72,0.14,0.878)],k))
A.d.v(j,i)
v=C.rh(4294967035,t,0,0,j,l,D.q_,"","",u,D.dd)
return C.Bd(t,t,t,t,D.o2,5,!1,"hati_kiapo_uongozi",t,t,t,t,C.cC(),t,!1,w,u,t,t,B.a([v],x.g),"hati_kiapo_elegant_navy",t,!1,t)},
afB(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$afB=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:p=A.a.i(i)
if(p.length===0){if(f.e!=null)f.I(x.q).f.R(D.eM3)
w=1
break}w=3
return B.b(C.UA(!0),$async$afB)
case 3:w=4
return B.b(C.aYV(p),$async$afB)
case 4:t=k
if(f.e==null){w=1
break}if(e)s=d||t==null||C.hgS(t)
else s=!1
w=t!=null?5:6
break
case 5:w=s?7:8
break
case 7:w=9
return B.b(B.bX(D.bb8,null,new C.fps(p),f,!0,!0,!1,A.ln,!1,!1,x.N),$async$afB)
case 9:r=k
if(r==="continue"){h.$1(t)
w=1
break}if(r!=="new"){w=1
break}if(f.e==null){w=1
break}w=10
return B.b(B.ca(null,null,!0,null,new C.fpt(),f,null,!0,!0,x.y),$async$afB)
case 10:if(k!==!0||f.e==null){w=1
break}g.$1(C.fVh(p))
w=1
break
case 8:h.$1(t)
w=1
break
case 6:if(!s){if(f.e!=null){q=f.I(x.q).f
q.R(B.b2(null,null,null,null,null,A.r,null,B.d("Registrar wa "+p+" bado hajachapisha Hati ya Kiapo cha Uongozi.",null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))}w=1
break}if(f.e==null){w=1
break}g.$1(C.fVh(p))
case 1:return B.h(u,v)}})
return B.i($async$afB,v)},
fcs:function fcs(){},
c7l:function c7l(){},
fuB:function fuB(d){this.a=d},
fuC:function fuC(){},
fps:function fps(d){this.a=d},
fpq:function fpq(d){this.a=d},
fpr:function fpr(d){this.a=d},
fpt:function fpt(){},
fpo:function fpo(d){this.a=d},
fpp:function fpp(d){this.a=d},
apd:function apd(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aCy:function aCy(){var _=this
_.d=null
_.r=_.f=_.e=!1
_.c=_.a=null},
e5P:function e5P(d){this.a=d},
e5N:function e5N(d){this.a=d},
e5O:function e5O(d){this.a=d},
e5Q:function e5Q(d){this.a=d},
e5R:function e5R(d){this.a=d},
wf(d,e,f,g,h,i,j,k,l,m,n){var w=C.cC()
return C.eo(e,!1,f,A.aD,k.length===0?"marriage_locked":"marriage_locked_"+k,4280640491,g,A.bl,h,"",i,w,null,"","",0,!1,"",j,D.be,4280172719,2,d,0,0,"",D.cg,D.cQ,l,m,n)},
hbs(d,e,f){var w=4291404327
return B.a([C.pW(0,f,D.eI,w,2,"ring_l",f,d-f*0.42,e),C.pW(0,f,D.eI,w,2,"ring_r",f,d+f*0.06,e)],x.u)},
faH(d,e,f,g,h){var w,v,u="ps_"+g,t=C.pW(4294967288,f,D.eI,4291404327,1.3,u+"_ring",f,d,e),s=f*0.36
s=C.pW(h,s,D.eI,h,0,u+"_head",s,d+f*0.32,e+f*0.16)
w=g?0.12:0.18
v=g?0.76:0.64
return B.a([t,s,C.pW(h,f*0.46,D.eI,h,0,u+"_body",f*v,d+f*w,e+f*0.5)],x.u)},
pW(d,e,f,g,h,i,j,k,l){var w=C.cC()
return C.eo(A.bg,!1,4279310375,A.aD,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bl,A.a4,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.cg,D.f_,j,k,l)},
faG(d,e,f,g,h,i,j,k,l){var w=C.cC(),v=A.k.D(j*0.0017,0.02,0.06),u="marriage_field_"+d+":"
return C.eo(h,!1,k,A.aD,i?u+A.k.aa(g,3)+":"+A.o.aa(j,1):u+A.k.aa(g,3),4280640491,j,A.cD,A.O,"",v,w,null,"","",0,!1,"",0,D.be,4280172719,2,l,0,0,"",D.cg,D.cQ,g,e,f)},
bxZ(d,e,f,g){return C.pW(0,0.002,D.fp,g,0.8,"ul_"+B.t(d)+"_"+B.t(e),f,d,e+0.002)},
hbr(d,e,f,g,h){var w=A.k.D(d.length*30*0.00058+0.08,0.2,0.5),v=f+(g-w)/2
return B.a([C.pW(0,0.036,D.be,h,1.4,"banner_box_"+d,w,v,e),C.wf(d,A.L,h,30,A.u,0.025199999999999997,0,"banner_t_"+d,w,v,e+0.00612)],x.u)},
hgD(){var w=new B.S(Date.now(),0,!1),v=new C.fvH()
return B.t(v.$1(B.bQ(w)))+"/"+B.t(v.$1(B.bG(w)))+"/"+B.by(w)},
hbt(d,e,f,g,h,i,j){var w=4293056712,v=h*0.56,u=f+v+0.01,t=u+0.08,s=f+h-t,r=""+e,q=f+0.026,p=v-0.026
return B.a([C.wf(r+".",A.bg,i,13,A.H,0.024,0,"wln_"+d+"_"+r,0.026,f,g),C.faG("witness_"+d+"_"+r+"_name",q,g,p,A.bg,!0,16,j,"[Jina la Shahidi]"),C.bxZ(q,g+A.k.D(0.0272,0.02,0.06),p,w),C.wf("Sahihi:",A.bg,j,15,A.a4,0.028,0,"wls_"+d+"_"+r,0.077,u,g),C.eo(A.bg,!1,4279310375,A.aD,"marriage_sign_"+d+"_witness_"+r,0,24,A.bl,A.a4,"",0.05,C.cC(),null,"","",0,!1,"",0,D.be,0,2,"",0,0,"",D.cg,D.f_,s,t,g-0.004),C.bxZ(t,g+0.044,s,w)],x.u)},
ag2(d,e){var w,v,u,t=x.cd,s=e!=null?B.a([e],t):B.a([D.d7Q,D.cer,D.d0O,D.d2E],t)
for(t=s.length,w=0;w<s.length;s.length===t||(0,B.L)(s),++w)for(v=A.d.gaf(s[w]);v.C();){u=v.gU(0)
if(u.a===d)return u}return null},
fSb(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var w=C.fxn(d.d),v=B.a([C.eo(A.bg,!1,4279310375,A.aD,"marriage_locked_bg",4280640491,24,A.bl,A.a4,"",1,C.cC(),w,"","",0,!1,"",0,D.be,4280172719,2,"",0,0,"",D.cg,D.lk,1,0,0)],x.u)
A.d.v(v,C.hMG(d,e,f,g,h,i,j,k,l,m,n,o,p,q))
return v},
hMG(c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=null,b0=4286200650,b1=4291404327,b2=4280640491,b3=4280172719,b4="marriage_locked",b5=4293056712,b6=4279310375,b7=4279673674,b8="marriage_locked_",b9=c3.f,c0=c3.r,c1=x.u,c2=B.a([],c1)
c2.push(C.wf("NGMY",A.L,b9&16777215|251658240,60,A.u,0.09,-0.52,"watermark",0.5,-0.11,0.025))
w=c3.z
switch(w.a){case 1:case 3:A.d.v(c2,C.hbs(0.42,0.016,0.048))
v=0.066
break
case 7:A.d.v(c2,C.hbs(0.38,0.012,0.072))
v=0.082
break
case 2:case 6:case 10:A.d.v(c2,C.faH(0.16,0.018,0.052,!1,b9))
A.d.v(c2,C.faH(0.79,0.018,0.052,!0,b0))
v=0.072
break
case 5:c2.push(C.wf("\ud83c\udf33",A.L,4279898632,22,A.a4,0.04,0,"tree",0.16,0.42,0.014))
v=0.056
break
case 8:A.d.v(c2,B.a([C.pW(0,0.062,D.eI,b1,1.6,"crest_o",0.11,0.445,0.012),C.pW(0,0.046,D.eI,b1,1,"crest_i",0.084,0.458,0.02),C.wf("MUHURI",A.L,b9,9,A.u,0.028,0,"crest_t",0.11,0.445,0.028)],c1))
v=0.078
break
case 4:case 9:A.d.v(c2,B.a([C.pW(0,0.002,D.fp,b1,1,"orn_l_0.018",0.24,0.2,0.024),C.pW(b9,0.016,D.kT,b1,0.9,"orn_c_0.018",0.024,0.488,0.018),C.pW(0,0.002,D.fp,b1,1,"orn_r_0.018",0.24,0.518,0.024)],c1))
v=0.04
break
case 0:v=d5
break
default:v=d5}A.d.v(c2,B.a([C.wf("TAREHE:",A.bg,c0,20,A.H,A.k.D(0.033999999999999996,0.02,0.06),0,"tarehe_lbl",0.1,0.7,0.026),C.faG("tarehe",0.8059999999999999,0.026,0.14400000000000002,A.bg,!1,21,b9,C.hgD()),C.bxZ(0.814,0.026+A.k.D(0.035699999999999996,0.02,0.06)*0.8,0.12,c0)],c1))
c2.push(C.wf(d2,A.L,b9,d3,A.u,0.06,0,"title",0.82,0.09,v))
u=v+0.054
c2.push(C.pW(c0,0.0026,D.be,c0,0,"title_rule_1",0.82*d4,0.09+0.82*(1-d4)/2,u))
t=u+0.028
c2.push(C.pW(c3.e,0.138,D.be,c0,1.15,"intro_frame",0.832,0.08399999999999999,t-0.004))
s=C.cC()
c2.push(C.eo(A.bg,!1,b9,A.aD,"marriage_field_utangulizi:"+A.k.aa(0.82,3),b2,19,A.bl,A.cv,"",0.128,s,a9,"","",0,!1,"",0,D.be,b3,2,c5,0,0,"",D.cg,D.cQ,0.82,0.09,t))
t+=c4
if(c8){r=A.k.D(c7.length*30*0.00058+0.08,0.2,0.5)
q=0.09+(0.82-r)/2
s=C.pW(0,0.036,D.be,c0,1.4,"banner_box_nimetowe_label",r,q,t)
p=C.cC()
A.d.v(c2,B.a([s,C.eo(A.L,!1,c0,A.aD,"marriage_field_nimetowe_label:"+A.k.aa(r,3),b2,30,A.bl,A.u,"",0.025199999999999997,p,a9,"","",0,!1,"",0,D.be,b3,2,c7,0,0,"",D.cg,D.cQ,r,q,t+0.00612)],c1))}else A.d.v(c2,C.hbr(c7,t,0.09,0.82,c0))
t+=0.048
c2.push(C.wf(c9,A.bg,b9,d0,A.O,0.03,0,"nimetowe_sub",0.82,0.09,t))
t+=0.03
for(o=1;o<=4;++o){s=c6[o-1]
n=o===1
m=A.k.D(0.7779999999999999-(n?0.328:0),0.22,1)
l=n?A.k.D(0.037399999999999996,0.02,0.06):A.k.D(0.0272,0.02,0.06)
p=""+o
k=t+0.002
j=C.faG("mahari_"+p,0.132,k,m,A.bg,!1,16,b9,s)
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
d=B.a([new C.eI(""+1000*i+"_"+h,D.cQ,0.09,t+0.004,0.032,0.022,p+".",13,A.H,A.bl,A.aD,c0,A.bg,a9,D.be,b2,b3,2,0,!1,s,0,D.cg,0,"","","","","",!1,0),j,new C.eI(""+1000*f+"_"+e,D.f_,0.132,k+l+0.002,0.7779999999999999,0.002,"",24,A.a4,A.bl,A.aD,b6,A.bg,a9,D.fp,0,b5,0.8,0,!1,g,0,D.cg,0,"","","","","",!1,0)],c1)
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
A.d.v(c2,C.hbr("MASHAHIDI",t,0.09,0.82,c0))
t+=0.046
if(w===D.a3O||w===D.a3Q||w===D.a3N||w===D.a3P){w=t-0.008
A.d.v(c2,C.faH(0.21,w,0.044,!0,b0))
A.d.v(c2,C.faH(0.7459999999999999,w,0.044,!1,b9))
t+=0.012}a4=0.05+d6*0.056+0.011
w=t+0.05
s=t+0.012
A.d.v(c2,B.a([C.pW(0,a4,D.be,c0,1.3,"wit_table_border",0.82,0.09,t),C.pW(c0,a4,D.be,c0,0,"wit_table_divider",0.0024,0.4988,t),C.pW(0,0.0022,D.fp,c0,1.1,"wit_table_hdrline",0.82,0.09,w),C.wf("UPANDE WA MKE",A.L,c0,20,A.u,0.03,0,"wit_h_mke_t",0.41,0.09,s),C.wf("UPANDE WA MUME",A.L,c0,20,A.u,0.03,0,"wit_h_mume_t",0.41,0.5,s)],c1))
a5=w+0.01
for(a6=1;a6<=d6;++a6){A.d.v(c2,C.hbt("mke",a6,0.106,a5,0.378,c0,b9))
A.d.v(c2,C.hbt("mume",a6,0.516,a5,0.378,c0,b9))
a5+=0.056}t=t+a4+0.012
w=t+0.056
s=t+0.09
p=s-0.002
A.d.v(c2,B.a([C.pW(0,0.11,D.be,c0,1.2,"mw_box",0.82,0.09,t),C.wf("MWANDISHI",A.bg,c0,15,A.H,0.026,0,"mw_hdr",0.7759999999999999,0.11199999999999999,t+0.016),C.wf("Jina:",A.bg,b9,15,A.a4,0.028,0,"mw_jl",0.09,0.11199999999999999,w),C.faG("mwandishi_jina",0.215,w,0.3116,A.bg,!0,15,b9,""),C.bxZ(0.215,p,0.3116,b5),C.wf("Sahihi:",A.bg,b9,15,A.a4,0.028,0,"mw_sl",0.09,0.5,w),C.eo(A.bg,!1,b6,A.aD,"marriage_sign_mwandishi",0,24,A.bl,A.a4,"",0.044,C.cC(),a9,"","",0,!1,"",0,D.be,0,2,"",0,0,"",D.cg,D.f_,0.3161999999999999,0.5738,s-0.044),C.bxZ(0.5738,p,0.3161999999999999,b5)],c1))
a7=A.a.i(d1)
if(a7.length!==0){a8=t+0.11+0.006
A.d.v(c2,B.a([C.pW(0,0.032,D.be,c0,1,"state_box",0.7,0.15,a8),C.wf("EMO 'YA M'MBONDO "+a7,A.L,b9,26,A.O,0.026000000000000002,0,"state_text",0.7,0.15,a8+0.003)],c1))}return c2},
hYj(d){var w,v,u,t=null,s=B.b0(d.f),r=B.b0(d.r),q=C.fVV(d.d),p=new C.fvD(s),o=new C.fvE(s),n=d.z,m=n===D.a3O||n===D.a3Q||n===D.a3N||n===D.a3P,l=n===D.aDO||n===D.a3R||n===D.aDP,k=B.bY(0,B.fL(q,A.A,t,t,A.co,A.bQ,!0,t,!1,t,t),0,0,0),j=x.p,i=B.a([],j)
if(l){w=n===D.a3R?26:16
i.push(new C.fvG().$1$size(w))}if(n===D.aDQ)i.push(D.fqc)
if(m)i.push(B.A(B.a([o.$1$female(!1),o.$1$female(!0)],j),A.m,t,A.hM,A.j,0,t,t))
i.push(B.d("HATI YA KUHOWA",t,t,t,t,t,t,B.l(t,t,s,t,t,t,t,t,t,t,t,9,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),A.L,t,t))
i.push(A.an)
n=B.I(r,A.q,1.1)
w=B.m(4)
i.push(B.p(t,B.v(B.a([p.$0(),D.aMP,p.$1$w(0.9),D.aMP,p.$1$w(0.75)],j),A.m,t,A.e,A.j,0,A.p),A.f,t,t,new B.o(D.b6M,t,n,w,t,t,A.n),t,t,t,t,A.ahz,t,t,t))
i.push(A.an)
i.push(new C.fvF(r).$1("NIMETOWE"))
i.push(A.fZ)
v=J.e3(3,x.l)
for(u=0;u<3;++u)v[u]=new B.C(A.Lq,new B.cm(A.aO,A.e,A.j,A.m,t,A.p,t,0,B.a([B.p(t,t,A.f,t,t,new B.o(r,t,t,t,t,t,A.a6),t,7,t,t,t,t,t,7),A.d8,new B.bD(1,A.bi,p.$1$h(4),t)],j),t),t)
A.d.v(i,v)
i.push(A.b4)
i.push(B.d(d.b,t,t,t,t,t,t,B.l(t,t,s.j(0.85),t,t,t,t,t,t,t,t,8,t,t,A.H,t,t,!0,t,t,t,t,t,t,t,t),A.L,t,t))
return new B.an(A.W,t,A.b_,A.r,B.a([k,new B.C(A.ag9,B.v(i,A.aj,t,A.e,A.j,0,A.p),t)],j),t)},
hfY(d,e){var w,v,u,t=null,s="Hati ya Kuhowa",r=C.ag2(e,t)
if(r==null)r=A.d.gK(D.Gj)
w=C.cC()
v=C.rh(r.e,t,0,0,C.fSb(r,0.165,y.O,D.d3d,"NIMETOWA",!1,"Vitu vifuatavyo vimetolewa:",20,d,"HATI YA KUHOWA",40,0.55,0.036,3),w,D.q_,"","",s,D.dd)
w=C.cC()
u=A.a.i(d)
if(u.length===0)u=t
return C.Bd(t,t,t,t,D.o2,5,!1,"hati_kuhowa",t,t,t,t,w,t,!1,u,s,t,t,B.a([v],x.g),"hati_kuhowa_"+r.a,t,!1,t)},
hfZ(d,e){var w,v,u,t=null,s="Hati ya Kuhoweya",r=C.ag2(e,t)
if(r==null)r=A.d.gK(D.Gj)
w=C.cC()
v=C.rh(r.e,t,0,0,C.fSb(r,0.165,y.f,D.d_0,"NIMEPOKEYA CASH",!0,"Vitu vifuatavyo vimetolewa:",20,d,"HATI YA KUHOWESHA",40,0.55,0.036,3),w,D.q_,"","",s,D.dd)
w=C.cC()
u=A.a.i(d)
if(u.length===0)u=t
return C.Bd(t,t,t,t,D.o2,5,!1,"hati_kuhoweya",t,t,t,t,w,t,!1,u,s,t,t,B.a([v],x.g),"hati_kuhoweya_"+r.a,t,!1,t)},
bBX(d,e,f){var w=0,v=B.j(x.T),u
var $async$bBX=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:u=B.bX(A.K,null,new C.fH9(e,f),d,!0,!0,!0,null,!1,!1,x.N)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bBX,v)},
afC(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$afC=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:q=B.U(i).k("a2<1>")
p=B.B(new B.a2(i,new C.fpw(),q),q.k("J.E"))
w=!g&&p.length!==0?3:4
break
case 3:w=5
return B.b(B.bX(D.KE,null,new C.fpx(p),d,!0,!0,!1,A.ln,!1,!1,x.N),$async$afC)
case 5:t=k
if(t==="continue"){f.$1(A.d.gK(p).hA())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bBX(d,"Hati ya Kuhowa",D.Gj),$async$afC)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.KF(d,"Tafuta jimbo\u2026","",A.jY,"Chagua jimbo"),$async$afC)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}e.$1(C.hfY(r,s))
case 1:return B.h(u,v)}})
return B.i($async$afC,v)},
afD(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$afD=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:q=B.U(i).k("a2<1>")
p=B.B(new B.a2(i,new C.fpA(),q),q.k("J.E"))
w=!g&&p.length!==0?3:4
break
case 3:w=5
return B.b(B.bX(D.KE,null,new C.fpB(p),d,!0,!0,!1,A.ln,!1,!1,x.N),$async$afD)
case 5:t=k
if(t==="continue"){f.$1(A.d.gK(p).hA())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bBX(d,"Hati ya Kuhoweya",D.Gj),$async$afD)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.KF(d,"Tafuta jimbo\u2026","",A.jY,"Chagua jimbo"),$async$afD)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}e.$1(C.hfZ(r,s))
case 1:return B.h(u,v)}})
return B.i($async$afD,v)},
afE(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p,o,n,m
var $async$afE=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:n=B.U(i).k("a2<1>")
m=B.B(new B.a2(i,new C.fpE(),n),n.k("J.E"))
w=!g&&m.length!==0?3:4
break
case 3:w=5
return B.b(B.bX(D.KE,null,new C.fpF(m),d,!0,!0,!1,A.ln,!1,!1,x.N),$async$afE)
case 5:t=k
if(t==="continue"){f.$1(A.d.gK(m).hA())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bBX(d,"Malipo ya Awamu ya Mahari",D.PQ),$async$afE)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.KF(d,"Tafuta jimbo\u2026","",A.jY,"Chagua jimbo"),$async$afE)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}q=C.ag2(s,D.PQ)
if(q==null)q=A.d.gK(D.PQ)
n=C.cC()
p=C.rh(q.e,null,0,0,C.fSb(q,0.21,"Mimi [Jina la Baba wa Mume], nikiwa kama baba na mkuu wa familia ya upande wa mume kutoka jamii ya [Jina la Jamii ya Mume], nyumba ya [Jina la Nyumba ya Mume], ninafanya makubaliano haya rasmi na familia ya [Jina la Baba wa Binti], wa jamii ya [Jina la Jamii ya Binti], nyumba ya [Jina la Nyumba ya Binti]. Kwa kuwa malipo kamili ya mahari ya mke wa mwanangu hayajakamilika kwa sasa, tumefikia makubaliano ya kulipa kwa awamu. Kiasi kilichosalia cha mahari kitakamilishwa kikamilifu na familia yetu ifikapo tarehe [Tarehe ya Kurudi Kulipa Mahari]. Siku hiyo, pande zote mbili zitakutana tena kwa ajili ya kukamilisha taratibu zote zilizosalia, kupokea baraka kamili za ndoa, na kukabidhiwa Cheti cha Ndoa ya Kimila. Makubaliano haya yanafanyika kwa hiari, kwa ridhaa ya familia zote mbili, na kwa kufuata misingi ya heshima, mila, desturi na maelewano mema kati ya familia zetu.",D.cVb,"MALIPO YALIYOSALIA",!1,"Mambo ya Cash na Mali (Yaliyosalia / Yatakayokamilishwa):",18,r,"HATI YA MAKUBALIANO YA MALIPO YA AWAMU YA MAHARI",24,0.85,0.048,2),n,D.q_,"","","Hati ya Makubaliano ya Malipo ya Awamu",D.dd)
n=C.cC()
o=A.a.i(r)
if(o.length===0)o=null
e.$1(C.Bd(null,null,null,null,D.o2,5,!1,"hati_malipo_awamu",null,null,null,null,n,null,!1,o,"Hati ya Makubaliano ya Malipo ya Awamu",null,null,B.a([p],x.g),"hati_malipo_awamu_"+q.a,null,!1,null))
case 1:return B.h(u,v)}})
return B.i($async$afE,v)},
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
fvH:function fvH(){},
fvD:function fvD(d){this.a=d},
fvF:function fvF(d){this.a=d},
fvG:function fvG(){},
fvE:function fvE(d){this.a=d},
fH9:function fH9(d,e){this.a=d
this.b=e},
acr:function acr(d,e,f){this.c=d
this.d=e
this.a=f},
dW9:function dW9(d,e,f){this.a=d
this.b=e
this.c=f},
dW8:function dW8(d,e){this.a=d
this.b=e},
dW7:function dW7(d,e){this.a=d
this.b=e},
abR:function abR(d,e,f){this.c=d
this.d=e
this.a=f},
fpw:function fpw(){},
fpx:function fpx(d){this.a=d},
fpu:function fpu(d){this.a=d},
fpv:function fpv(d){this.a=d},
fpA:function fpA(){},
fpB:function fpB(d){this.a=d},
fpy:function fpy(d){this.a=d},
fpz:function fpz(d){this.a=d},
fpE:function fpE(){},
fpF:function fpF(d){this.a=d},
fpC:function fpC(d){this.a=d},
fpD:function fpD(d){this.a=d},
K4(d,e,f,g,h,i,j,k,l,m){var w=C.cC()
return C.eo(e,!1,f,A.aD,j.length===0?"marriage_locked":"marriage_locked_"+j,4280640491,g,A.bl,h,"",i,w,null,"","",0,!1,"",0,D.be,4280172719,2,d,0,0,"",D.cg,D.cQ,k,l,m)},
Ch(d,e,f,g,h,i,j,k,l){var w=C.cC()
return C.eo(A.bg,!1,4279310375,A.aD,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bl,A.a4,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.cg,D.f_,j,k,l)},
hc8(d,e,f){return C.Ch(0,0.002,D.fp,4293056712,0.8,"ul_"+B.t(d)+"_"+B.t(e),f,d,e+0.022)},
by8(d,e,f,g,h){return B.a([C.Ch(4294967288,0.032,D.be,4291404327,1.15,"pill_"+d,g,f,e),C.K4(d,A.L,h,11,A.u,0.024,"pill_t_"+d,g,f,e+0.005)],x.u)},
fSX(d,e,f,g,h){var w=d+f/2,v=e+0.006,u=f*0.4,t=B.t(e)
return B.a([C.Ch(0,0.002,D.fp,g,1,"orn_l_"+t,u,d,v),C.Ch(h,0.016,D.kT,g,0.9,"orn_c_"+t,0.024,w-0.012,e),C.Ch(0,0.002,D.fp,g,1,"orn_r_"+t,u,w+0.018,v)],x.u)},
a0w(d,e,f,g,h,i,j,k){var w=d.length*i*0.0027+0.006,v=C.K4(d,A.bg,j,i,A.O,0.022,"ll_"+e,w,f,g),u=f+w,t=h-w,s=C.cC()
return B.a([v,C.eo(A.L,!1,j,A.aD,"marriage_field_"+e+":"+A.k.aa(t,3),4280640491,i,A.cD,A.O,"",0.02,s,null,"","",0,!1,"",0,D.be,4280172719,2,k,0,0,"",D.cg,D.cQ,t,u,g-0.002),C.hc8(u,g+0.018,t)],x.u)},
hc9(d,e,f,g,h,i){var w=4291404327,v=f+0.002
return B.a([C.Ch(h,0.028,D.be,h,0,"chv_"+d,g,e,f),C.Ch(w,0.024,D.kT,w,0,"chv_l_"+d,0.024,e-0.008,v),C.Ch(w,0.024,D.kT,w,0,"chv_r_"+d,0.024,e+g-0.016,v),C.K4(d,A.L,i,9.5,A.u,0.02,"chv_t_"+d,g,e,f+0.004)],x.u)},
by7(d,e,f,g,h){var w=e+0.12,v=g-0.12
return B.a([C.K4("Sahihi:",A.bg,h,10,A.O,0.02,"is_"+d,0.12,e,f),C.eo(A.bg,!1,4279310375,A.aD,"marriage_sign_"+d,0,24,A.bl,A.a4,"",0.032,C.cC(),null,"","",0,!1,"",0,D.be,0,2,"",0,0,"",D.cg,D.f_,v,w,f-0.006),C.hc8(w,f+0.016,v)],x.u)},
fVW(d){var w,v
for(w=0;w<19;++w){v=D.Q2[w]
if(v.a===d)return v}return null},
i_A(d){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=d.c
if(A.a.a0(k,"hati_kuhowa_")){w=C.ag2(A.a.b0(k,12),l)
v=w==null?l:w.d}else if(A.a.a0(k,"hati_kuhoweya_")){w=C.ag2(A.a.b0(k,14),l)
v=w==null?l:w.d}else if(A.a.a0(k,"hati_malipo_awamu_")){u=A.a.b0(k,18)
w=C.ag2(u,D.PQ)
v=w==null?l:w.d
if(v==null){w=C.ag2(u,l)
v=w==null?l:w.d}}else if(A.a.a0(k,"marriage_")){w=C.fVW(A.a.b0(k,9))
v=w==null?l:w.d}else v=l
if(v==null)return!1
$.hcY.a9(0)
$.hda.a9(0)
t=C.fxn(v)
for(w=d.r,s=w.length,r=!1,q=0;q<w.length;w.length===s||(0,B.L)(w),++q)for(p=w[q].z,o=p.length,n=0;n<o;++n){m=p[n]
if(m.db==="marriage_locked_bg"&&m.at!==t){m.at=t
r=!0}}return r},
fX0(d){var w=0,v=B.j(x.T),u
var $async$fX0=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:u=B.bX(A.K,null,new C.fIC(),d,!0,!0,!0,null,!1,!1,x.N)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fX0,v)},
xg:function xg(d,e){this.a=d
this.b=e},
nz:function nz(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bhK:function bhK(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
fIC:function fIC(){},
acu:function acu(d){this.a=d},
eb3:function eb3(d,e){this.a=d
this.b=e},
eb2:function eb2(d){this.a=d},
eb1:function eb1(d,e){this.a=d
this.b=e},
ae8:function ae8(d,e,f){this.c=d
this.d=e
this.a=f},
fVV(d){return $.hda.cg(0,d,new C.fxp(d))},
fxn(d){return $.hcY.cg(0,d,new C.fxo(d))},
fy(d){return B.fMs(d>>>16&255,d>>>8&255,d&255,255)},
hPI(d){var w,v,u=4292128567,t=4285213214,s=4294967035,r=4290283019,q=null,p=4279378237,o=4291404327,n=4294966774,m=4294702831,l=4285218602,k=4291394365,j=4294967295,i=4294964964,h=4294965484,g=4280241466,f=4287326484,e=4294966518
switch(d.a){case 0:return C.hee(4294570461,4293910718,4284234270,u)
case 1:return C.hee(4294635750,4293975240,t,4292912216)
case 2:w=C.f9g(s,4294505966,r)
C.bxT(w,14,16,p)
C.kp(w,8,9,464,836,u,1.2)
C.Cd(w,2,2,1,1,u,10)
C.Cd(w,478,2,-1,1,u,10)
C.Cd(w,2,852,1,-1,u,10)
C.Cd(w,478,852,-1,-1,u,10)
return w
case 3:return C.f9g(4294966515,4294373082,4289102906)
case 4:return C.hKv(C.f9g(4294376440,4293653998,4290287194))
case 5:w=C.f9g(4294965238,4294437098,4288444980)
C.bxT(w,14,16,4283043359)
C.kp(w,6,7,468,840,u,1)
C.kp(w,9,10,462,834,o,0.7)
return w
case 6:v=B.hl(q,q,A.c9,0,A.e0,854,q,0,3,q,A.c9,480,!1)
C.y5(v,n,4294175448)
C.rB(v,n)
C.kp(v,24,24,432,806,4286209070,1)
C.a0k(v,12,12,468,12,o,3,20)
C.a0k(v,12,842,468,842,o,3,20)
C.a0k(v,12,12,12,842,o,3,20)
C.a0k(v,468,12,468,842,o,3,20)
return v
case 7:return C.hIz(4294440434,4293518297,4280228630,r)
case 8:v=B.hl(q,q,A.c9,0,A.e0,854,q,0,3,q,A.c9,480,!1)
C.y5(v,m,4293911504)
C.rB(v,m)
C.kp(v,28,28,424,798,l,1)
C.fi_(v,28,28,l,k)
C.fi_(v,452,28,l,k)
C.fi_(v,28,826,l,k)
C.fi_(v,452,826,l,k)
return v
case 9:v=B.hl(q,q,A.c9,0,A.e0,854,q,0,3,q,A.c9,480,!1)
C.y5(v,j,4294111986)
C.rB(v,j)
C.kp(v,18,18,444,818,4292401368,0.7)
B.iH(v,!0,C.fy(p),0,13,0,853)
return v
case 10:return C.hMs(i,4294173372)
case 11:return C.hNx(4294439140,4293449662)
case 12:return C.hIr(h,4294239432)
case 13:return C.hMZ(4294244340,4293193448)
case 14:return C.hRg(4294505710,4293780694)
case 15:return C.f8g(4294966259,4294439138,o,p,q)
case 16:return C.f8g(4294966776,4294178544,o,g,g)
case 17:return C.f8g(4294965493,4294504170,o,4286200650,q)
case 18:return C.f8g(4294966519,4294373862,o,p,p)
case 19:return C.hLA()
case 20:return C.hLB()
case 21:v=B.hl(q,q,A.c9,0,A.e0,854,q,0,3,q,A.c9,480,!1)
C.y5(v,h,4293976768)
C.rB(v,h)
C.bxT(v,14,16,p)
B.iH(v,!0,C.fy(u),4,475,4,9)
B.iH(v,!0,C.fy(u),4,475,844,849)
B.iH(v,!0,C.fy(u),4,9,4,849)
B.iH(v,!0,C.fy(u),470,475,4,849)
C.a0k(v,10,12,470,12,u,2,16)
C.a0k(v,10,842,470,842,u,2,16)
C.a0k(v,10,12,10,842,u,2,18)
C.a0k(v,470,12,470,842,u,2,18)
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
C.fUe(v,!1,!1,o,p,p,36,14,16)
C.kE(v,240,20,7,o,!0)
C.kE(v,240,834,7,o,!0)
C.kE(v,18,427,7,o,!0)
C.kE(v,462,427,7,o,!0)
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
C.bxT(v,14,16,p)
B.iH(v,!0,C.fy(u),3,476,3,8)
B.iH(v,!0,C.fy(u),3,476,845,850)
B.iH(v,!0,C.fy(u),3,8,3,850)
B.iH(v,!0,C.fy(u),471,476,3,850)
C.kp(v,9,10,462,834,t,1)
C.kp(v,14,16,452,822,u,1.8)
C.kE(v,240,8,4,u,!0)
C.kE(v,240,846,4,u,!0)
C.kE(v,8,427,4,u,!0)
C.kE(v,472,427,4,u,!0)
C.kE(v,8,8,3,t,!0)
C.kE(v,472,8,3,t,!0)
C.kE(v,8,846,3,t,!0)
C.kE(v,472,846,3,t,!0)
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
B.kG(d,!1,A.da,new B.Rv(s),r,A.cW,1,0,w-1,k,k);++k}},
rB(d,e){var w,v,u,t,s,r,q,p,o=null,n=new B.eP()
n.dG(e)
for(w=0;w<900;++w){v=d.a
v=v==null?o:v.a
u=n.aB(v==null?0:v)
v=d.a
v=v==null?o:v.b
t=n.aB(v==null?0:v)
v=d.a
s=v==null?o:v.dQ(u,t,o)
if(s==null)s=new B.iC()
v=A.o.D(A.k.N(s.gb6(s))-3,0,255)
r=A.o.D(A.k.N(s.gbf())-3,0,255)
q=A.o.D(A.k.N(s.gbg(s))-2,0,255)
p=d.a
if(p!=null)p.jB(u,t,v,r,q,255)}},
kp(d,e,f,g,h,i,j){var w,v=null,u=C.fy(i),t=e+g
B.kG(d,!0,A.da,u,v,A.cW,j,e,t,f,f)
w=f+h
B.kG(d,!0,A.da,u,v,A.cW,j,e,t,w,w)
B.kG(d,!0,A.da,u,v,A.cW,j,e,e,f,w)
B.kG(d,!0,A.da,u,v,A.cW,j,t,t,f,w)},
Cd(d,e,f,g,h,i,j){var w,v,u=null,t=A.o.D(A.k.V(j*0.72),8,j-2)
B.kG(d,!0,A.da,C.fy(i),u,A.cW,2,e,e+g*j,f,f)
B.kG(d,!0,A.da,C.fy(i),u,A.cW,2,e,e,f,f+h*j)
w=e+g*3
v=f+h*3
B.kG(d,!0,A.da,C.fy(i),u,A.cW,1,w,e+g*t,v,v)
B.kG(d,!0,A.da,C.fy(i),u,A.cW,1,w,w,v,f+h*t)},
hee(d,e,f,g){var w=null,v=B.hl(w,w,A.c9,0,A.e0,854,w,0,3,w,A.c9,480,!1)
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
f9g(d,e,f){var w=null,v=B.hl(w,w,A.c9,0,A.e0,854,w,0,3,w,A.c9,480,!1)
C.y5(v,d,e)
C.rB(v,d)
C.kp(v,14,16,452,822,f,1.6)
C.kp(v,20,22,440,810,f,0.8)
return v},
bxT(d,e,f,g){var w,v=C.fy(g)
B.iH(d,!0,v,0,479,0,f-1)
w=854-f
B.iH(d,!0,v,0,479,w,853);--w
B.iH(d,!0,v,0,e-1,f,w)
B.iH(d,!0,v,480-e,479,f,w)},
hKv(d){var w,v,u=4291404327
C.bxT(d,14,16,4279122734)
for(w=10;w<470;w+=14){C.kE(d,w,8,3,u,!0)
C.kE(d,w,846,3,u,!0)}for(v=18;v<836;v+=16){C.kE(d,7,v,3,u,!0)
C.kE(d,473,v,3,u,!0)}return d},
fkZ(d,e,f,g,h,i,j,k,l,m,n){var w,v,u,t=x.J,s=B.a([new B.j9(e,f),new B.j9(e+g*n,f),new B.j9(e,f+h*n)],t)
B.a15(d,C.fy(m),s)
w=A.o.D(A.k.V(n*0.17),5,8)
v=A.k.V(n*0.78)
s=e+g*w
u=f+h*w
t=B.a([new B.j9(s,u),new B.j9(e+g*v,u),new B.j9(s,f+h*v)],t)
B.a15(d,C.fy(k),t)
t=A.k.V(n*0.39)
C.kE(d,e+g*t,f+h*t,6,l,!0)
if(i){t=n-7
C.kE(d,e+g*t,f+h*3,4,k,!0)
C.kE(d,e+g*3,f+h*t,4,k,!0)}if(j){t=n-4
C.kE(d,e+g*t,f,5,k,!0)
C.kE(d,e,f+h*t,5,k,!0)}},
fUe(d,e,f,g,h,i,j,k,l){var w,v
C.fkZ(d,k,l,1,1,e,f,g,h,i,j)
w=480-k
C.fkZ(d,w,l,-1,1,e,f,g,h,i,j)
v=854-l
C.fkZ(d,k,v,1,-1,e,f,g,h,i,j)
C.fkZ(d,w,v,-1,-1,e,f,g,h,i,j)},
a0k(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p,o=g-e,n=h-f,m=Math.max(1,A.k.V(Math.sqrt(o*o+n*n)/k))
for(w=i>>>16&255,v=i>>>8&255,u=i&255,t=0;t<=m;++t){s=t/m
r=A.k.V(e+o*s)
q=A.k.V(f+n*s)
p=new Uint8Array(4)
p[0]=w
p[1]=v
p[2]=u
p[3]=255
B.kY(d,!0,A.da,new B.qO(p),null,A.cW,j,r,q)}},
fk7(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o
for(w=i>>>16&255,v=i>>>8&255,u=i&255,t=0;t<3;++t){s=34+t*12
r=26-t*6
q=e+g*s
p=f+h*s
o=new Uint8Array(4)
o[0]=w
o[1]=v
o[2]=u
o[3]=255
B.kG(d,!0,A.da,new B.qO(o),null,A.cW,1.4,q,q+g*r,p,p)
o=new Uint8Array(4)
o[0]=w
o[1]=v
o[2]=u
o[3]=255
B.kG(d,!0,A.da,new B.qO(o),null,A.cW,1.4,q,q,p,p+h*r)}},
hIz(d,e,f,g){var w,v,u,t,s,r,q,p,o=null,n=B.hl(o,o,A.c9,0,A.e0,854,o,0,3,o,A.c9,480,!1)
C.y5(n,d,e)
C.rB(n,d)
C.kp(n,20,20,440,814,f,1.2)
C.fk7(n,0,0,1,1,g)
C.fk7(n,480,0,-1,1,g)
C.fk7(n,0,854,1,-1,g)
C.fk7(n,480,854,-1,-1,g)
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
B.kG(n,!0,A.da,new B.qO(p),o,A.cW,1.2,240,r,60,q)}return n},
fi_(d,e,f,g,h){var w
C.fnB(d,!0,C.fy(g),13,e,f)
C.fnB(d,!0,C.fy(g),9,e,f)
w=B.a([new B.j9(e,f-4),new B.j9(e+4,f),new B.j9(e,f+4),new B.j9(e-4,f)],x.J)
B.a15(d,C.fy(h),w)},
kE(d,e,f,g,h,i){var w=null,v=f-g,u=e+g,t=f+g,s=e-g,r=B.a([new B.j9(e,v),new B.j9(u,f),new B.j9(e,t),new B.j9(s,f)],x.J)
if(i){B.a15(d,C.fy(h),r)
return}B.kG(d,!0,A.da,C.fy(h),w,A.cW,1,e,u,v,f)
B.kG(d,!0,A.da,C.fy(h),w,A.cW,1,u,e,f,t)
B.kG(d,!0,A.da,C.fy(h),w,A.cW,1,e,s,t,f)
B.kG(d,!0,A.da,C.fy(h),w,A.cW,1,s,e,f,v)},
f8f(d,e,f,g,h,i,j){var w,v=B.a([new B.j9(e,f),new B.j9(e+g*28,f),new B.j9(e,f+h*28)],x.J)
B.a15(d,C.fy(i),v)
v=e+g*14
w=f+h*14
C.kE(d,v,w,6,j,!0)
C.kE(d,v,w,3,i,!0)},
f8g(d,e,f,g,h){var w=null,v=B.hl(w,w,A.c9,0,A.e0,854,w,0,3,w,A.c9,480,!1)
C.y5(v,d,e)
C.rB(v,d)
C.kp(v,18,18,444,818,f,2)
C.kp(v,26,26,428,802,f,0.9)
if(h!=null)B.iH(v,!0,C.fy(h),28,451,28,34)
C.f8f(v,18,18,1,1,g,f)
C.f8f(v,462,18,-1,1,g,f)
C.f8f(v,18,836,1,-1,g,f)
C.f8f(v,462,836,-1,-1,g,f)
return v},
hLA(){var w,v=null,u=4294966259,t=4292128567,s=4287326484,r=B.hl(v,v,A.c9,0,A.e0,854,v,0,3,v,A.c9,480,!1)
C.y5(r,u,4294240980)
C.rB(r,u)
C.kp(r,10,12,460,830,t,3.2)
C.kp(r,18,20,444,814,s,1.2)
C.kp(r,24,26,432,802,t,1.8)
C.fUe(r,!0,!1,t,s,4279378237,38,10,12)
for(w=56;w<424;w+=18){C.kE(r,w,16,3,t,!0)
C.kE(r,w,838,3,t,!0)}for(w=56;w<798;w+=22){C.kE(r,16,w,3,t,!0)
C.kE(r,464,w,3,t,!0)}return r},
hLB(){var w,v,u,t=null,s=4294966776,r=4291404327,q=4282000405,p=B.hl(t,t,A.c9,0,A.e0,854,t,0,3,t,A.c9,480,!1)
C.y5(p,s,4294373080)
C.rB(p,s)
C.kp(p,16,18,448,818,r,2.4)
C.kp(p,24,26,432,802,4286209044,1)
w=new C.fay(p)
for(v=40;v<440;v+=16){w.$4(v,22,1,1)
w.$4(v,832,1,1)}for(u=44;u<810;u+=18){w.$4(22,u,1,1)
w.$4(458,u,-1,1)}C.fUe(p,!1,!0,r,q,q,34,16,18)
return p},
byz(d,e,f,g,h,i){B.iH(d,!0,C.fy(i),e,e+g,f,f+h)},
bzo(d,e,f,g,h,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
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
B.kG(d,!1,A.da,new B.Rv(i),null,A.cW,1,e,w,l,l)}},
hMr(d,e,f,g,h,i){var w,v,u,t,s,r,q
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
B.kG(d,!1,A.da,new B.qO(r),null,A.cW,1,e,s,t,t);++v}return}w=f+g-1
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
B.kG(d,!1,A.da,new B.qO(r),null,A.cW,1,t,t,f,s);++q}},
hMs(d,e){var w,v,u=null,t=B.hl(u,u,A.c9,0,A.e0,854,u,0,3,u,A.c9,480,!1)
for(w=0;w<854;w+=30)for(v=0;v<480;v+=30)C.hMr(t,v,w,30,D.cOj,(A.o.an(v,30)+A.o.an(w,30)&1)===0)
C.byz(t,44,44,392,766,d)
C.bzo(t,44,44,392,766,d,e)
C.rB(t,d)
C.kp(t,44,44,392,766,4292128567,2.2)
C.kp(t,50,50,380,754,4279898632,0.8)
return t},
hNw(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=null
switch(A.o.F(g,4)){case 0:C.kE(d,e,f,7,h,!0)
C.kE(d,e,f,3,h,!1)
break
case 1:w=e-7
v=f-7
u=e+7
t=f+7
B.kG(d,!0,A.da,C.fy(h),o,A.cW,1.6,w,u,v,t)
B.kG(d,!0,A.da,C.fy(h),o,A.cW,1.6,u,w,v,t)
break
case 2:for(w=e-8,v=e+8,u=h>>>16&255,t=h>>>8&255,s=h&255,r=-2;r<=2;++r){q=f+r*3
p=new Uint8Array(4)
p[0]=u
p[1]=t
p[2]=s
p[3]=255
B.kG(d,!0,A.da,new B.qO(p),o,A.cW,1.2,w,v,q,q)}break
default:B.kG(d,!0,A.da,C.fy(h),o,A.cW,1.5,e-8,e+8,f,f)
B.kG(d,!0,A.da,C.fy(h),o,A.cW,1.5,e,e,f-8,f+8)
B.kY(d,!0,A.da,C.fy(h),o,A.cW,2,e,f)}},
hNx(d,e){var w,v,u,t,s=null,r=B.hl(s,s,A.c9,0,A.e0,854,s,0,3,s,A.c9,480,!1)
B.iH(r,!0,C.fy(4284103196),0,479,0,853)
for(w=0,v=18;v<854;v+=32)for(u=18;u<480;u+=32,w=t){t=w+1
C.hNw(r,u,v,w,4292391514)}C.byz(r,46,46,388,762,d)
C.bzo(r,46,46,388,762,d,e)
C.rB(r,d)
C.kp(r,46,46,388,762,4291404327,1.8)
return r},
h9F(d,e,f,g){C.fnB(d,!0,C.fy(g),16,e,f)
C.fnB(d,!0,C.fy(g),11,e,f)
C.kE(d,e,f,6,g,!0)
B.kG(d,!0,A.da,C.fy(g),null,A.cW,1.3,e-14,e+14,f,f)
B.kG(d,!0,A.da,C.fy(g),null,A.cW,1.3,e,e,f-14,f+14)},
hIr(d,e){var w,v=null,u=4283051028,t=4292128567,s=B.hl(v,v,A.c9,0,A.e0,854,v,0,3,v,A.c9,480,!1)
B.iH(s,!0,C.fy(4280948752),0,479,0,853)
B.iH(s,!0,C.fy(u),0,479,0,78)
B.iH(s,!0,C.fy(u),0,479,776,853)
for(w=28;w<460;w+=44){C.h9F(s,w,39,t)
C.h9F(s,w,815,t)}C.byz(s,38,92,404,670,d)
C.bzo(s,38,92,404,670,d,e)
C.rB(s,d)
C.kp(s,38,92,404,670,t,1.8)
C.kp(s,45,99,390,656,4287322667,0.8)
return s},
hMY(d,e,f,g){var w,v,u,t,s,r,q,p,o
for(w=f-4,v=x.J,u=g>>>16&255,t=g>>>8&255,s=g&255,r=-2;r<=2;++r){q=e+r*9
p=B.a([new B.j9(e,f),new B.j9(q-5,w),new B.j9(q,f-(18-Math.abs(r)*3)),new B.j9(q+5,w)],v)
o=new Uint8Array(4)
o[0]=u
o[1]=t
o[2]=s
o[3]=255
B.a15(d,new B.qO(o),p)}B.kY(d,!0,A.da,C.fy(4292128567),null,A.cW,3,e,f)},
hMZ(d,e){var w,v,u,t,s=null,r=4279196764,q=B.hl(s,s,A.c9,0,A.e0,854,s,0,3,s,A.c9,480,!1)
C.y5(q,4278931279,4292330394)
for(w=8;w<=34;w+=4){v=new Uint8Array(4)
v[0]=8
v[1]=56
v[2]=56
v[3]=255
B.kG(q,!0,A.da,new B.qO(v),s,A.cW,1.1,w,w,0,853)
v=479-w
u=new Uint8Array(4)
u[0]=8
u[1]=56
u[2]=56
u[3]=255
B.kG(q,!0,A.da,new B.qO(u),s,A.cW,1.1,v,v,0,853)}B.iH(q,!0,C.fy(r),0,479,0,70)
B.iH(q,!0,C.fy(r),0,479,798,853)
for(t=0;t<5;++t)C.hMY(q,70+t*85,48,4292128567)
C.byz(q,48,78,384,712,d)
C.bzo(q,48,78,384,712,d,e)
C.rB(q,d)
C.kp(q,48,78,384,712,4291404327,1.6)
return q},
hRg(d,e){var w,v,u,t=null,s=4279970378,r=B.hl(t,t,A.c9,0,A.e0,854,t,0,3,t,A.c9,480,!1)
B.iH(r,!0,C.fy(s),0,479,0,853)
for(w=10;w<854;w+=18)for(v=10;v<480;v+=18){C.kE(r,v,w,6,4293449648,!1)
u=new Uint8Array(4)
u[0]=232
u[1]=215
u[2]=176
u[3]=255
B.kY(r,!0,A.da,new B.qO(u),t,A.cW,1,v,w)}C.byz(r,40,40,400,774,d)
C.bzo(r,40,40,400,774,d,e)
C.rB(r,d)
C.kp(r,40,40,400,774,4291058750,2)
C.kp(r,48,48,384,758,s,0.8)
return r},
kN:function kN(d,e){this.a=d
this.b=e},
fxp:function fxp(d){this.a=d},
fxo:function fxo(d){this.a=d},
fay:function fay(d){this.a=d},
fy2(d){var w,v=d.a
A:{if("gazette"===v){w="The NGMY Gazette"
break A}if("chronicle"===v){w="The NGMY Chronicle"
break A}if("times"===v){w="The NGMY Times"
break A}if("daily"===v){w="The NGMY Daily"
break A}if("tabloid"===v){w="The Big NGMY"
break A}if("modern"===v){w="NGMY Digest"
break A}if("midnight"===v){w="The Midnight NGMY"
break A}w="The NGMY Herald"
break A}return w},
hNq(d){var w=d.length
if(w>3&&d[0]===137&&d[1]===80)return"image/png"
if(w>11&&d[8]===87&&d[9]===69)return"image/webp"
return"image/jpeg"},
fSQ(d){var w,v,u,t=null,s=A.a.cJ(d,"{"),r=A.a.oo(d,"}")
if(s<0||r<=s)return t
try{w=A.R.aG(0,Ai.afZ(A.a.ap(d,s,r+1)),t)
v=x.f.b(w)?B.a1(w,x.N,x.z):t
return v}catch(u){return t}},
aeu(d,e){var w=0,v=B.j(x.N),u,t,s,r,q,p,o,n
var $async$aeu=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(B.v5(null,""),$async$aeu)
case 3:n=g
if(A.a.i(n).length===0)throw B.V("AI is not available right now. Please try again later.")
t=B.n_(n)
if(e==null)s=A.hl
else{r=C.hNq(e)
s=B.a([new B.a_l(A.cS.gcv().aJ(e),r)],x.aD)}q=null,p=0
case 4:if(!(p<2)){w=6
break}w=7
return B.b(B.qF(t,d,s,E.ER),$async$aeu)
case 7:o=g
r=o.b
if(r!=null&&A.a.i(r).length!==0){u=r
w=1
break}q=o.a
case 5:++p
w=4
break
case 6:throw B.V(q!=null&&B.Ku(q)?"No internet connection. Try again when you are online.":"The AI could not do that just now. Try again.")
case 1:return B.h(u,v)}})
return B.i($async$aeu,v)},
bB3(d){return C.i_g(d)},
i_g(d){var w=0,v=B.j(x.b6),u,t=2,s=[],r,q,p,o,n,m
var $async$bB3=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
r='You are a professional Swahili newspaper editor and journalist: a native speaker from Tanzania or Kenya whose writing every Swahili reader finds natural, warm and correct.\nThe newspaper page below was written or translated by a machine, so it may sound stiff, foreign or word-for-word. Rewrite EVERY field so it reads as if a skilled native Swahili journalist wrote it first: natural, clear, correct and professional. Fix wrong grammar (noun classes, verb agreement, tenses), odd or invented words and any English sentence structure. Keep every fact, name and number and do not add facts. Keep the same fields and the same number of paragraphs. Write people\'s names with normal capitals, except KB PABLO QR.\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n\nPage: '+A.R.ao(d.ae(),null)+'\nReply with JSON only, with exactly the same fields: {"paper":"newspaper name","category":"ONE of COMMUNITY, TECHNOLOGY, BUSINESS, EDUCATION, WORLD NEWS, FEATURE","headline":"...","subhead":"...","byline":"By ...","caption":"one sentence about the picture","body":["paragraph 1","paragraph 2","paragraph 3","paragraph 4"],"pullQuote":"a short line from the story","sidebarTitle":"Did you know?","sidebarText":"two short sentences"}\n'
w=7
return B.b(C.aeu(r,null),$async$bB3)
case 7:q=f
p=C.fSQ(q)
if(p==null){u=d
w=1
break}o=d.aBk(p)
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
return B.i($async$bB3,v)},
hdy(d){var w,v=F.fVd(d)
v=B.aK(v,"book","newspaper")
if(F.a1o(d)!=="sw"){w=B.af("swahili|kiswahili",!1,!1,!1,!1)
w=w.b.test(d)}else w=!0
w=w?'SWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n':""
return"- Write like a real newspaper: a strong headline (max 12 words), a subhead (max 25 words), a byline, then 4 or 5 paragraphs, about 330 to 400 words in all. Plain text only: no markdown, no emojis, no lists.\n- Use ONLY the facts in the knowledge above. Never invent numbers, prices, dates, awards, places or quotes. Do not put made-up words in anyone's mouth.\n- KB PABLO QR is the Founder, President and CEO of NGMY. Always write his name in capital letters.\n- Never mention secret or admin details, passwords or the price list.\n- STYLE: write like an experienced human newspaper journalist in the style of a quality wire service (Associated Press, Reuters): polished, precise, natural and professional. Open with the most important fact. Use the active voice, concrete nouns and strong verbs. Mix short and longer sentences. Plain, grown-up words.\n- NEVER sound like an AI. Do not use: delve, tapestry, testament, beacon, realm, landscape, journey, game-changer, groundbreaking, revolutionize, unlock, empower, seamless, vibrant, bustling, in today's fast-paced world, it is worth noting, not just X but Y, whether you are X or Y. No exclamation marks, no rhetorical questions, no lists of three adjectives, no filler, no hype, no dashes for drama. Every sentence must say something real.\n- Check spelling, grammar and punctuation. Names are written with normal capitals, except KB PABLO QR.\n"+v+w},
fBY(d,e,f,g){return C.i17(d,e,f,g)},
i17(d,e,f,g){var w=0,v=B.j(x.b6),u,t,s,r,q,p,o,n,m
var $async$fBY=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:o=C.fy2(g)
n=A.a.i(f)
if(n.length===0)n="Choose the most interesting true story about NGMY from what you know, and write it. Vary it: it can be about the app, the Civic Registry, the Advisors, the studios, or the CEO."
t=C.hh0()
s=e==null?"There is no picture yet: write the caption as a short line about the story.":"A PICTURE IS ATTACHED. Look at it. Mention what is really visible in the caption and weave it into the story. Do not say who the people in it are unless the owner told you."
m=C
w=3
return B.b(C.aeu('You are the editor-in-chief of a newspaper called "'+o+'". Write its front-page story in the voice of '+g.at+".\n"+t+'\n\nWHAT THE OWNER ASKED FOR: """'+n+'"""\n'+s+"\nRules:\n"+C.hdy(n)+'\nReply with JSON only, in exactly this shape: {"paper":"newspaper name","category":"ONE of COMMUNITY, TECHNOLOGY, BUSINESS, EDUCATION, WORLD NEWS, FEATURE","headline":"...","subhead":"...","byline":"By ...","caption":"one sentence about the picture","body":["paragraph 1","paragraph 2","paragraph 3","paragraph 4"],"pullQuote":"a short line from the story","sidebarTitle":"Did you know?","sidebarText":"two short sentences"}\n',e),$async$fBY)
case 3:r=m.fSQ(i)
if(r==null)throw B.V(y.S)
q=new C.z5(o,"NGMY NEWS","","","By the NGMY Newsroom","",A.T,"","","").aBk(r)
t=q.r
if(t.length===0)throw B.V("The AI did not write a story. Try again.")
s=n+" "+A.d.aI(t," ")
if(F.a1o(s)!=="sw"){p=B.af("swahili|kiswahili",!1,!1,!1,!1)
s=p.b.test(s)}else s=!0
u=s&&F.a1o(A.d.aI(t," "))==="sw"?C.bB3(q):q
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fBY,v)},
bAx(d,e,f,g,h){return C.hXT(d,e,f,g,h)},
hXT(d,e,f,g,h){var w=0,v=B.j(x.gX),u,t,s,r,q,p,o,n,m,l,k,j
var $async$bAx=B.e(function(i,a0){if(i===1)return B.f(a0,v)
for(;;)switch(w){case 0:l=B.a([],x.s)
k=e.length
k=k>6?A.d.fJ(e,k-6):e
t=k.length
s=0
for(;s<k.length;k.length===t||(0,B.L)(k),++s){r=k[s]
l.push(r.a+": "+r.b)}q=A.d.aI(l,"\n")
l=C.hh0()
k=A.R.ao(d.ae(),null)
t=q.length===0?"":"EARLIER IN THIS CONVERSATION:\n"+q+"\n"
j=C
w=3
return B.b(C.aeu('You are the editor-in-chief of the newspaper "'+d.a+'", written in the voice of '+h.at+". The owner is talking to you about the page below. They may ask a question about NGMY or the page (just answer it), or ask you to change, add, shorten, rewrite or fix something (change ONLY that).\n"+l+"\n\nTHE PAGE NOW: "+k+"\n"+t+'\nTHE OWNER SAYS: """'+f+'"""\nRules:\n'+C.hdy(f)+'\n- Keep every part they did not mention exactly as it is. Keep the story about 330 to 400 words unless they ask for another length.\nReply with JSON only: {"message":"one or two friendly sentences: your answer, or what you changed","changes":{ ...only the fields you change, using the same names as the page... }}. For a pure question leave "changes" empty.\n',g),$async$bAx)
case 3:p=j.fSQ(a0)
if(p==null)throw B.V(y.S)
o=p.h(0,"changes")
if(x.f.b(o)&&J.cy(o)){n=d.aBk(B.a1(o,x.N,x.z))
m=A.R.ao(n.ae(),null)!==A.R.ao(d.ae(),null)}else{n=d
m=!1}w=m&&F.a1o(A.d.aI(n.r," "))==="sw"?4:5
break
case 4:w=6
return B.b(C.bB3(n),$async$bAx)
case 6:n=a0
case 5:l=p.h(0,"message")
if(l==null)l=m?"Done.":"Okay."
u=new C.a7b(A.a.i(B.t(l)),n,m)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bAx,v)},
a7b:function a7b(d,e,f){this.a=d
this.b=e
this.c=f},
i3P(d,e){return B.a6(d,!1).c6(B.e7(new C.fIN(e),!0,null,x.H))},
fIN:function fIN(d){this.a=d},
V5:function V5(d,e){this.c=d
this.a=e},
aCR:function aCR(d,e,f,g,h,i,j,k){var _=this
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
eel:function eel(d){this.a=d},
eek:function eek(){},
eem:function eem(d){this.a=d},
eej:function eej(d,e){this.a=d
this.b=e},
een:function een(){},
edY:function edY(d,e){this.a=d
this.b=e},
edU:function edU(d,e){this.a=d
this.b=e},
ee4:function ee4(d){this.a=d},
ee5:function ee5(d,e){this.a=d
this.b=e},
ee6:function ee6(d){this.a=d},
ee_:function ee_(d,e){this.a=d
this.b=e},
ee0:function ee0(d,e){this.a=d
this.b=e},
ee1:function ee1(d,e){this.a=d
this.b=e},
ee2:function ee2(d){this.a=d},
ee3:function ee3(d){this.a=d},
edZ:function edZ(d,e){this.a=d
this.b=e},
edW:function edW(d){this.a=d},
edX:function edX(d){this.a=d},
eec:function eec(d){this.a=d},
eed:function eed(d){this.a=d},
eeb:function eeb(d){this.a=d},
eee:function eee(d,e){this.a=d
this.b=e},
eea:function eea(d,e){this.a=d
this.b=e},
eef:function eef(d){this.a=d},
ee9:function ee9(d){this.a=d},
eeg:function eeg(d){this.a=d},
ee8:function ee8(d){this.a=d},
eeh:function eeh(d,e){this.a=d
this.b=e},
ee7:function ee7(d,e){this.a=d
this.b=e},
eei:function eei(d){this.a=d},
edV:function edV(d,e){this.a=d
this.b=e},
fwZ(){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o
var $async$fwZ=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if($.hb9){w=1
break}r=new C.fx_()
t=4
q=x.s
w=7
return B.b(B.iJ(B.a([r.$2("NgmyBlackletter",B.a(["UnifrakturCook-Bold.ttf"],q)),r.$2("NgmyOldStandard",B.a(["OldStandard-Regular.ttf","OldStandard-Bold.ttf","OldStandard-Italic.ttf"],q)),r.$2("NgmyAbril",B.a(["AbrilFatface-Regular.ttf"],q))],x.fG),x.H),$async$fwZ)
case 7:$.hb9=!0
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
return B.i($async$fwZ,v)},
bAU(d){return A.GE[B.ms(d)-1]+", "+A.oM[B.bG(d)-1]+" "+B.bQ(d)+", "+B.by(d)},
hQm(d){var w,v,u,t,s
for(w="",v=0;v<13;++v){u=D.dbU[v]
t=u.a
s=u.b
while(d>=t){w+=s
d-=t}}return w},
fVC(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j={},i=x.s,h=B.a([],i)
for(w=0;w<d.length;++w){v=A.a.fz(d[w],B.af("[ \\t]+",!0,!1,!1,!1))
A.d.v(h,new B.a2(v,new C.fvh(),B.U(v).k("a2<1>")))
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
continue}o=new C.fvj(j,h)
n=new C.fvi(s,o,e)
m=p-v
for(l=0;l<m;){k=A.o.an(l+m+1,2)
if(n.$1(k))l=k
else m=k-1}u.push(l===0?"":J.iS(o.$1(l)))
j.a+=l}return u},
fSA(d,e){var w=new C.fa9()
return A.d.cI(e,0,new C.fa7(w))>=A.d.cI(d,0,new C.fa8(w))},
h8k(d){var w,v,u=new B.aQ($.X().r,A.ap,null,null,B.a([],x.v))
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
cb0:function cb0(d){this.a=d},
caZ:function caZ(){},
cb_:function cb_(){},
t4:function t4(d,e){this.a=d
this.b=e},
B0:function B0(d,e){this.a=d
this.b=e},
lb:function lb(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var _=this
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
fx_:function fx_(){},
fvh:function fvh(){},
fvj:function fvj(d,e){this.a=d
this.b=e},
fvi:function fvi(d,e,f){this.a=d
this.b=e
this.c=f},
fa9:function fa9(){},
faa:function faa(){},
fa7:function fa7(d){this.a=d},
fa8:function fa8(d){this.a=d},
b_q:function b_q(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cb1:function cb1(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cb2:function cb2(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
cb3:function cb3(d){this.a=d},
baW:function baW(d){this.a=d},
baV:function baV(d,e){this.b=d
this.a=e},
bsp:function bsp(d){this.a=d},
b7q:function b7q(d,e){this.b=d
this.a=e},
bpW:function bpW(d,e){this.b=d
this.a=e},
hiV(d,e){return B.a6(d,!1).c6(B.e7(new C.fIQ(e,null),!0,null,x.E))},
fIQ:function fIQ(d,e){this.a=d
this.b=e},
V8:function V8(d,e,f){this.c=d
this.d=e
this.a=f},
aCV:function aCV(){var _=this
_.d=null
_.e=0
_.f=1
_.w=_.r=0.5
_.x=1
_.y=!1
_.c=_.a=null},
efw:function efw(){},
efx:function efx(d){this.a=d},
efv:function efv(d,e){this.a=d
this.b=e},
efj:function efj(d){this.a=d},
efk:function efk(d){this.a=d},
efq:function efq(d){this.a=d},
efr:function efr(d,e){this.a=d
this.b=e},
efo:function efo(d){this.a=d},
efp:function efp(d,e,f){this.a=d
this.b=e
this.c=f},
efl:function efl(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
efs:function efs(d,e){this.a=d
this.b=e},
efn:function efn(d,e){this.a=d
this.b=e},
eft:function eft(d){this.a=d},
efm:function efm(d,e){this.a=d
this.b=e},
efu:function efu(d,e){this.a=d
this.b=e},
bas:function bas(d,e,f){this.b=d
this.c=e
this.a=f},
i3V(d){return B.a6(d,!1).c6(B.e7(new C.fJ5(),!0,null,x.I))},
byk(d,e){var w,v,u,t,s,r,q=B.c1(20,0,!1,x.gR)
for(w=0;w<4;++w)for(v=w*5,u=v+4,t=0;t<5;++t){for(s=0,r=0;r<4;++r)s+=d[v+r]*e[r*5+t]
if(t===4)s+=d[u]
q[v+t]=s}return q},
fTY(d,e,f,g){return B.a([d,0,0,0,e,0,d,0,0,f,0,0,d,0,g,0,0,0,1,0],x.x)},
fJ5:function fJ5(){},
a_e:function a_e(d){this.a=d},
oo:function oo(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
aEh:function aEh(d,e,f,g,h,i,j,k,l){var _=this
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
_.aH=_.aN=_.aE=_.az=_.Z=_.b5=_.bi=_.y2=0
_.b3=null
_.b1=0.25
_.bb=null
_.bK=0.5
_.aR=1
_.c8=_.bT=_.bj=0
_.cW=_.cT=!1
_.c=_.a=null},
eOL:function eOL(d){this.a=d},
eND:function eND(d,e){this.a=d
this.b=e},
eO0:function eO0(d,e){this.a=d
this.b=e},
eOa:function eOa(d){this.a=d},
eNm:function eNm(d){this.a=d},
eNn:function eNn(d){this.a=d},
eNk:function eNk(d){this.a=d},
eNl:function eNl(d){this.a=d},
eNU:function eNU(d,e){this.a=d
this.b=e},
eNV:function eNV(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eO6:function eO6(d,e,f){this.a=d
this.b=e
this.c=f},
eO5:function eO5(d,e){this.a=d
this.b=e},
eO7:function eO7(d,e){this.a=d
this.b=e},
eO4:function eO4(d,e){this.a=d
this.b=e},
eO9:function eO9(d,e,f){this.a=d
this.b=e
this.c=f},
eO8:function eO8(d,e){this.a=d
this.b=e},
eNc:function eNc(d){this.a=d},
eNd:function eNd(d){this.a=d},
eNe:function eNe(d){this.a=d},
eNb:function eNb(){},
eNf:function eNf(d,e){this.a=d
this.b=e},
eNa:function eNa(d,e){this.a=d
this.b=e},
eNh:function eNh(){},
eNg:function eNg(d,e){this.a=d
this.b=e},
eN9:function eN9(d,e){this.a=d
this.b=e},
eN6:function eN6(d,e){this.a=d
this.b=e},
eNi:function eNi(d){this.a=d},
eN8:function eN8(d,e){this.a=d
this.b=e},
eNj:function eNj(d){this.a=d},
eN7:function eN7(d,e){this.a=d
this.b=e},
eOA:function eOA(d,e){this.a=d
this.b=e},
eOH:function eOH(d){this.a=d},
eOI:function eOI(d,e){this.a=d
this.b=e},
eOJ:function eOJ(){},
eOB:function eOB(d,e){this.a=d
this.b=e},
eOz:function eOz(d,e){this.a=d
this.b=e},
eOC:function eOC(d,e){this.a=d
this.b=e},
eOy:function eOy(d,e){this.a=d
this.b=e},
eOD:function eOD(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eOx:function eOx(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eOE:function eOE(d){this.a=d},
eOF:function eOF(d,e){this.a=d
this.b=e},
eOG:function eOG(d){this.a=d},
eOw:function eOw(d){this.a=d},
eOj:function eOj(d){this.a=d},
eOk:function eOk(d){this.a=d},
eOi:function eOi(d,e){this.a=d
this.b=e},
eOd:function eOd(d,e){this.a=d
this.b=e},
eOl:function eOl(d){this.a=d},
eOo:function eOo(d){this.a=d},
eOh:function eOh(d){this.a=d},
eOp:function eOp(d){this.a=d},
eOq:function eOq(d){this.a=d},
eOr:function eOr(d){this.a=d},
eOs:function eOs(d){this.a=d},
eOg:function eOg(d){this.a=d},
eOt:function eOt(d){this.a=d},
eOf:function eOf(d){this.a=d},
eOu:function eOu(d,e){this.a=d
this.b=e},
eOe:function eOe(d,e){this.a=d
this.b=e},
eOv:function eOv(d){this.a=d},
eOm:function eOm(d){this.a=d},
eOn:function eOn(d){this.a=d},
eNY:function eNY(d){this.a=d},
eNX:function eNX(d){this.a=d},
eNZ:function eNZ(d,e){this.a=d
this.b=e},
eNW:function eNW(d,e){this.a=d
this.b=e},
eO_:function eO_(d){this.a=d},
eNQ:function eNQ(d){this.a=d},
eNP:function eNP(d){this.a=d},
eNR:function eNR(d){this.a=d},
eNO:function eNO(d){this.a=d},
eNS:function eNS(d,e){this.a=d
this.b=e},
eNN:function eNN(d,e){this.a=d
this.b=e},
eNM:function eNM(d,e){this.a=d
this.b=e},
eNu:function eNu(d){this.a=d},
eNv:function eNv(d){this.a=d},
eNw:function eNw(d){this.a=d},
eNx:function eNx(d){this.a=d},
eNy:function eNy(d){this.a=d},
eNz:function eNz(d){this.a=d},
eNA:function eNA(d){this.a=d},
eNB:function eNB(d){this.a=d},
eNC:function eNC(d){this.a=d},
eMQ:function eMQ(d){this.a=d},
eMR:function eMR(d){this.a=d},
eMS:function eMS(d){this.a=d},
eMT:function eMT(d){this.a=d},
eMU:function eMU(d){this.a=d},
eMP:function eMP(d){this.a=d},
eMV:function eMV(d){this.a=d},
eMW:function eMW(d){this.a=d},
eNo:function eNo(d){this.a=d},
eNp:function eNp(d){this.a=d},
eNq:function eNq(d){this.a=d},
eNr:function eNr(d){this.a=d},
eNs:function eNs(d){this.a=d},
eN_:function eN_(d){this.a=d},
eN0:function eN0(d){this.a=d},
eN1:function eN1(d){this.a=d},
eN2:function eN2(d){this.a=d},
eN3:function eN3(d){this.a=d},
eMZ:function eMZ(d){this.a=d},
eN4:function eN4(d){this.a=d},
eMY:function eMY(d){this.a=d},
eN5:function eN5(d){this.a=d},
eMX:function eMX(d){this.a=d},
eNT:function eNT(d){this.a=d},
eNL:function eNL(d){this.a=d},
eNH:function eNH(d){this.a=d},
eNG:function eNG(d){this.a=d},
eNI:function eNI(d,e){this.a=d
this.b=e},
eNF:function eNF(d,e){this.a=d
this.b=e},
eNJ:function eNJ(d,e){this.a=d
this.b=e},
eNE:function eNE(d,e){this.a=d
this.b=e},
eNK:function eNK(d){this.a=d},
eO3:function eO3(d){this.a=d},
eO2:function eO2(d,e,f){this.a=d
this.b=e
this.c=f},
eO1:function eO1(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eOc:function eOc(d,e){this.a=d
this.b=e},
eOb:function eOb(d,e){this.a=d
this.b=e},
eNt:function eNt(d){this.a=d},
eOK:function eOK(d){this.a=d},
be_:function be_(d,e){this.b=d
this.a=e},
i_r(d){var w=A.a.i(d).length
if(w<=40)return 66
if(w<=80)return 54
if(w<=140)return 44
if(w<=220)return 36
return 30},
i_s(d,e){var w,v,u,t,s,r,q,p,o,n=B.af("\\S+",!0,!1,!1,!1).kR(0,d),m=B.B(n,B.a3(n).k("J.E"))
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
o=B.aK(p,n,"")
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
byV(){var w=$.by2,v=$.PP
$.PP=v+1
return w+"_"+v},
i6(d,e,f,g,h,i,j){return C.eo(A.bg,!1,4279310375,A.aD,"",i,24,A.bl,A.a4,"",h,C.byV(),null,"","",0,!1,"",j,d,i,0,"",0,0,"",D.cg,D.f_,g,e,f)},
nP(d,e,f,g){var w=f*9
return C.i6(D.eI,d-f/2,e-w/32,f,w/16,g,0)},
hK6(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=4279310375
switch(d.a){case 0:w=B.a([],x.u)
for(v=[0.12,0.26,0.4,0.54,0.68,0.82,0.94],u=e&16777215,t=u|855638016,s=0;s<7;++s){r=v[s]
q=$.by2
p=$.PP
$.PP=p+1
w.push(new C.eI(q+"_"+p,D.f_,0,r,1,0.0016,"",24,A.a4,A.bl,A.aD,k,A.bg,null,D.be,t,t,0,0,!1,"",0,D.cg,0,"","","","","",!1,0))}for(v=[0.18,0.5,0.82],t=u|570425344,s=0;s<3;++s){o=v[s]
q=$.by2
p=$.PP
$.PP=p+1
w.push(new C.eI(q+"_"+p,D.f_,o,0,0.004,1,"",24,A.a4,A.bl,A.aD,k,A.bg,null,D.be,t,t,0,0,!1,"",0,D.cg,0,"","","","","",!1,0))}w.push(C.nP(0.88,0.1,0.5,f&16777215|855638016))
w.push(C.nP(0.1,0.92,0.6,u|704643072))
return w
case 1:w=e&16777215
v=(w|2852126720)>>>0
u=f&16777215
t=(u|2852126720)>>>0
return B.a([C.i6(D.be,0.08,0.08,0.5,0.003,v,0),C.i6(D.be,0.58,0.08,0.004,0.06,v,0),C.i6(D.be,0.58,0.14,0.34,0.003,v,0),C.i6(D.be,0.92,0.14,0.004,0.08,(w|2281701376)>>>0,0),C.i6(D.be,0.08,0.8,0.004,0.14,t,0),C.i6(D.be,0.08,0.94,0.6,0.003,t,0),C.nP(0.58,0.08,0.05,e),C.nP(0.92,0.22,0.05,e),C.nP(0.08,0.8,0.05,f),C.nP(0.68,0.94,0.05,f),C.nP(0.9,0.9,0.55,u|570425344)],x.u)
case 2:w=e&16777215
v=f&16777215
return B.a([C.i6(D.kT,0.62,0.04,0.34,0.2,w|855638016,0.2),C.i6(D.kT,0.02,0.74,0.42,0.24,v|771751936,-0.15),C.i6(D.kT,0.7,0.8,0.22,0.12,w|1140850688,0),C.i6(D.kT,0.05,0.05,0.16,0.09,v|1426063360,0)],x.u)
case 3:w=e&16777215
v=f&16777215
return B.a([C.nP(0.5,0.5,1.5,w|335544320),C.nP(0.5,0.5,1.15,w|402653184),C.nP(0.5,0.5,0.8,v|436207616),C.nP(0.95,0.05,0.4,v|855638016),C.nP(0.05,0.97,0.5,w|704643072)],x.u)
case 4:w=e&16777215
v=f&16777215
return B.a([C.nP(0.85,0.08,0.7,w|1140850688),C.nP(0.1,0.35,0.5,v|855638016),C.nP(0.9,0.62,0.55,v|771751936),C.nP(0.15,0.95,0.8,w|939524096)],x.u)
case 5:w=e&16777215
v=f&16777215
return B.a([C.i6(D.be,-0.1,0.7,1.2,0.06,w|671088640,-0.04),C.i6(D.be,-0.1,0.78,1.2,0.07,v|872415232,0.035),C.i6(D.be,-0.1,0.86,1.2,0.08,w|1073741824,-0.03),C.i6(D.be,-0.1,0.94,1.2,0.1,v|1426063360,0.02),C.nP(0.85,0.12,0.3,v|855638016)],x.u)
case 6:w=e&16777215
return B.a([C.nP(0.5,0.2,0.65,(w|3422552064)>>>0),C.nP(0.5,0.2,0.95,w|855638016),C.i6(D.be,-0.05,0.84,1.1,0.2,2570782564,-0.02),C.i6(D.be,-0.05,0.9,1.1,0.14,3139312459,0.02)],x.u)
case 7:w=e&16777215
return B.a([C.i6(D.jE,-0.1,0.78,0.7,0.2,w|1426063360,0),C.i6(D.jE,0.35,0.74,0.8,0.24,f&16777215|1711276032,0),C.i6(D.jE,0.15,0.86,0.6,0.14,1712265002,0),C.nP(0.82,0.1,0.22,(w|2852126720)>>>0)],x.u)
case 8:w=B.a([],x.u)
for(n=0;n<16;++n){v=D.cPE[n]
u=A.o.F(n,3)===0
t=u?0.035:0.02
q=(n&1)===0?e:f
q=((u?255:170)<<24|q&16777215)>>>0
p=t*9
m=$.by2
l=$.PP
$.PP=l+1
w.push(new C.eI(m+"_"+l,D.f_,v.a-t/2,v.b-p/32,t,p/16,"",24,A.a4,A.bl,A.aD,k,A.bg,null,D.eI,q,q,0,0,!1,"",0,D.cg,0,"","","","","",!1,0))}w.push(C.nP(0.85,0.12,0.35,f&16777215|570425344))
return w
case 9:w=e&16777215
v=f&16777215|570425344
return B.a([C.i6(D.jE,0.35,-0.1,0.3,0.62,w|855638016,0),C.i6(D.jE,0.05,-0.1,0.3,0.55,v,-0.5),C.i6(D.jE,0.65,-0.1,0.3,0.55,v,0.5),C.nP(0.5,0.04,0.45,w|1711276032)],x.u)
case 10:w=(f&16777215|2281701376)>>>0
return B.a([C.i6(D.be,0.06,0.04,0.88,0.002,e,0),C.i6(D.be,0.06,0.96,0.88,0.002,e,0),C.i6(D.be,0.06,0.04,0.004,0.92,e,0),C.i6(D.be,0.936,0.04,0.004,0.92,e,0),C.i6(D.be,0.09,0.07,0.82,0.001,w,0),C.i6(D.be,0.09,0.93,0.82,0.001,w,0)],x.u)
case 11:w=e&16777215
return B.a([C.i6(D.jF,-0.1,0.05,0.7,0.12,w|855638016,-0.1),C.i6(D.jF,0.45,0.78,0.7,0.1,f&16777215|1073741824,-0.1),C.i6(D.jF,-0.1,0.9,0.6,0.06,w|1426063360,-0.1)],x.u)
case 12:w=f&16777215
v=e&16777215
return B.a([C.i6(D.be,0,0,0.3,0.09,w|1140850688,0),C.i6(D.be,0.7,0.9,0.3,0.1,v|1426063360,0),C.i6(D.be,0.82,0.04,0.12,0.07,w|771751936,0),C.i6(D.be,0.04,0.82,0.18,0.08,v|855638016,0)],x.u)
case 13:w=e&16777215
v=w|1140850688
u=f&16777215|1140850688
return B.a([C.i6(D.eI,0.62,0.02,0.5,0.16,v,0.6),C.i6(D.eI,0.78,0.12,0.4,0.12,u,0.9),C.i6(D.eI,-0.12,0.8,0.5,0.16,u,-0.6),C.i6(D.eI,-0.05,0.9,0.4,0.12,v,-0.9),C.nP(0.9,0.9,0.3,w|855638016)],x.u)
case 14:w=f&16777215|1711276032
return B.a([C.i6(D.be,0.09,0.12,0.16,0.006,e,0),C.i6(D.be,0.05,0.03,0.9,0.001,w,0),C.i6(D.be,0.05,0.97,0.9,0.001,w,0)],x.u)}},
hWX(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3){var w,v,u,t,s,r,q,p,o,n=4279310375,m=4280640491,l=4280172719
$.by2=j
$.PP=0
w=A.a.i(a6)
if(w.length===0)w=d.y
v=A.a.i(f)
u=b1==null?d.x:b1
t=new C.fsG()
s=b3?0:d.e
r=b3?0:d.f
q=B.a([],x.u)
if(g!=null&&g.length!==0)q.push(C.eo(A.bg,!1,n,A.aD,"ngmy_quote_background",m,24,A.bl,A.a4,"",1,C.byV(),g,"","",0,!1,"",0,D.be,l,2,"",0,0,"",D.cg,D.lk,1,0,0))
if(a9)A.d.v(q,C.hK6(d.d,d.r,d.w))
if(a7)q.push(t.$9$align$weight("\u201c",0.08,A.k.D(a8-0.13,0,1),0.84,0.1,200,d.r,e,A.u))
p=B.af("[*~^]",!0,!1,!1,!1)
p=C.i_r(B.aK(w,p,""))
o=A.a.t(w,B.af("[*^]",!0,!1,!1,!1))?0.85:1
q.push(new C.fsF(a8,h,k,e,b2,i).$3(w,p*b0*o,u))
if(v.length!==0)q.push(t.$10$align$style$weight("\u2014 "+v,0.09,A.k.D(a8+0.39,0,0.9),0.82,0.05,30,(u&16777215|3707764736)>>>0,e,A.cD,A.a4))
p=u&16777215
q.push(t.$8$weight("NGMY",0.3,0.925,0.4,0.028,22,(p|3003121664)>>>0,A.u))
q.push(t.$8$weight("New Global Movement for Youth",0.1,0.96,0.8,0.025,14,(p|2566914048)>>>0,A.a4))
if(a0!=null&&a0.length!==0)q.push(C.eo(A.bg,!1,n,A.aD,"ngmy_quote_logo",m,24,A.bl,A.a4,a1,a3*9/16,C.byV(),a0,"","",0,!1,a2,0,D.be,l,2,"",0,0,"",D.cg,D.lk,a3,a4,a5))
return C.rh(s,r,0,0,q,j+"_slide",D.q_,"","","",D.dd)},
rg:function rg(d,e){this.a=d
this.b=e},
m_:function m_(d,e,f,g,h,i,j,k,l,m){var _=this
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
fsG:function fsG(){},
fsF:function fsF(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
hAd(d){var w,v,u,t,s
if(!x.f.b(d))return null
w=J.a5(d)
v=B.bi(B.t(w.h(d,"at")))
u=w.h(d,"outline")
t=B.t(u==null?"":u)
if(v==null||t.length===0)return null
u=x.j
if(u.b(w.h(d,"extras"))){u=J.b6(u.a(w.h(d,"extras")),new C.ccn(),x.N)
s=B.B(u,u.$ti.k("ak.E"))}else s=B.a([],x.s)
u=v.bS()
w=w.h(d,"request")
return new C.z7(u,t,s,B.t(w==null?"":w))},
fAl(){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$fAl=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if($.hbx){w=1
break}$.hbx=!0
t=4
w=7
return B.b(B.az(),$async$fAl)
case 7:r=e
q=B.aT(J.q(r.a,"ngmy_slides_ai_history_v1"))
if(q==null||q.length===0){w=1
break}p=A.R.aG(0,q,null)
if(!x.f.b(p)){w=1
break}for(k=J.js(p),k=k.gaf(k),j=x.j,i=x.o;k.C();){o=k.gU(k)
n=B.a([],i)
if(j.b(o.b))for(h=J.aV(j.a(o.b));h.C();){m=h.gU(h)
l=C.hAd(m)
if(l!=null)J.ch(n,l)}$.Ce.cg(0,B.t(o.a),new C.fAm(n))}C.fTE()
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
return B.i($async$fAl,v)},
fTE(){var w,v=new B.S(Date.now(),0,!1).bP(-12e8)
for(w=new B.dt($.Ce,$.Ce.r,$.Ce.e);w.C();)J.nl(w.d,new C.fhc(v))
$.Ce.bm($.Ce,new C.fhd())},
aMP(){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$aMP=B.e(function(d,a0){if(d===1){t.push(a0)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$aMP)
case 6:s=a0
m=x.N
l=x.z
r=B.T(m,l)
for(k=new B.cJ($.Ce,B.a3($.Ce).k("cJ<1,2>")).gaf(0),j=x.d;k.C();){i=k.d
i.toString
q=i
i=q.a
p=B.a([],j)
for(h=J.aV(q.b);h.C();){o=h.gU(h)
g=o
J.ch(p,B.F(["at",g.a.a6().ac(),"outline",g.b,"extras",g.c,"request",g.d],m,l))}J.aF(r,i,p)}n=r
w=7
return B.b(s.ar("String","ngmy_slides_ai_history_v1",A.R.ao(n,null)),$async$aMP)
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
return B.i($async$aMP,v)},
i02(d,e,f,g){var w,v,u
if(d.length===0||A.a.i(f).length===0)return
C.fTE()
w=$.Ce.cg(0,d,new C.fAo())
v=Date.now()
u=B.B(e,B.a3(e).k("cn.E"))
J.pm(w,0,new C.z7(new B.S(v,0,!1),f,u,g))
C.aMP()},
i0_(d){var w,v=$.Ce.h(0,d)
if(v==null||J.cl(v))return
w=J.cE(v)
w.cA(v,0)
if(w.gam(v))$.Ce.W(0,d)
C.aMP()},
z7:function z7(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ccn:function ccn(){},
fAm:function fAm(d){this.a=d},
fhc:function fhc(d){this.a=d},
fhd:function fhd(){},
fAo:function fAo(){},
i04(d){return A.d.dL(D.vJ,new C.fAr(d),new C.fAs())},
hAb(d){var w
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
hAa(d){var w
switch(d.a){case 0:w=D.ajY
break
case 1:w=A.y_
break
case 2:w=A.al5
break
case 3:w=I.ajB
break
case 4:w=A.akt
break
case 5:w=A.lM
break
default:w=null}return w},
hN3(d){var w,v,u,t=A.a.i(d).toLowerCase()
if(t.length===0)return null
for(w=0;w<109;++w){v=D.Pg[w]
if(v.toLowerCase()===t)return v}for(w=0;w<109;++w){v=D.Pg[w]
if(!B.dp(v.toLowerCase(),t,0))u=B.dp(t,v.toLowerCase(),0)
else u=!0
if(u)return v}return null},
hAc(d){var w,v,u,t,s,r,q,p,o=B.a([],x.ez)
for(w=d.c,v=w.length,u=x.N,t=x.C,s=0;s<w.length;w.length===v||(0,B.L)(w),++s){r=w[s]
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
o.push(q)}return A.R.ao(B.F(["title",d.a,"style",d.b,"logo_frame",d.d,"logo_ring",d.e,"photo_frame",d.f,"photo_ring",d.r,"slides",o],u,t),null)},
i00(d,e,f,g,h){var w=new B.K(D.vJ,new C.fAk(),x.eC).aI(0,", "),v=""+d,u=C.hgT(h),t=F.fu4(h),s=C.hd8(g),r=e.t(0,D.Hz)?'- New slides get an "emoji".\n':"",q=e.t(0,D.HA)?'- New slides get an "icon3d" from: '+A.d.aI(D.Pg,", ")+".\n":"",p=e.t(0,D.Cj)?'- New content slides get an "image_query" (2-3 English words).\n':""
return"You edit an existing presentation. Here it is as JSON:\n"+f+"\n\nThe presenter is looking at slide "+v+'.\n\nWHAT THEY WANT CHANGED (may be informal):\n"""'+h+'"""\n\nRules:\n- Do exactly what they ask: add, remove, move, shorten, lengthen or rewrite slides, change the tone, the language or the style ('+w+'). "This slide" / "here" means slide '+v+". New slides go where they say (or right after slide "+v+').\n- Keep every slide they did not ask about exactly as it is.\n- Same limits as before: titles max 7 words, 3 to 5 bullets of max 12 words, never invent prices, dates or statistics.\n- LANGUAGE: keep the presentation\'s current language unless they ask for another one; if they do, translate EVERY slide. JSON keys and the "kind", "style", "icon3d" and "image_query" values stay in English.\n- TRANSLATING OR REWORDING: change only the words. Keep "style", "kind", "emoji", "icon3d", "image_query", "picture" and the frame/ring values exactly as they are, with the same number of slides and bullets.\n- VOICE: write the way a real, friendly person talks and writes to someone they respect. Short plain sentences. Everyday words that people really use today. No corporate or robotic phrasing ("leverage", "synergy", "empower the ecosystem", "in today\'s dynamic landscape"), no made-up or rare words, no stacked jargon, no lecture tone. Explain the Civic registry, the AI, and any other topic the way you would explain it to a neighbour. If the language is Swahili, use the Swahili people speak and write every day in Kenya and Tanzania: real common words, natural word order, and never an English word forced into Swahili grammar or an invented Swahili word. Check that each word is one an ordinary speaker would understand.\n'+u+"\n"+t+'\n- Keep "logo_frame", "logo_ring", "photo_frame" and "photo_ring" unless they ask to change how the logo or pictures look.\n- PICTURE LOOK: "logo_frame" and "photo_frame" are one of: circle, rounded, triangle, hexagon, diamond, arch, or "" (as is). "logo_ring" and "photo_ring" are one of: gold, platinum, glow, rainbow, double, neon, framed, rosegold, jewels, aurora, or "" (none). Follow what the request says (e.g. "my picture in a circle with a gold ring"); if it says nothing, choose what suits the look (luxury \u2192 gold, neon/night \u2192 neon, clean \u2192 rounded with no ring).\n- BIO LINK: if they ask to put their bio link / link page / socials / "my links" in the presentation, add ONE slide with kind "bio" (title like "Connect with me", a one-line inviting subtitle) \u2014 usually just before the closing slide, or where they say. Their real Bio page (with clickable links) is shown on a phone on that slide.\n'+s+"\n"+r+q+p+'- Reply with the WHOLE presentation as JSON only, no markdown, same shape:\n{"title":"...","style":"...","logo_frame":"","logo_ring":"","photo_frame":"","photo_ring":"","slides":[{"kind":"...","title":"...","subtitle":"...","bullets":[],"notes":"...","emoji":"","icon3d":"","image_query":""}]}\n'},
i01(d,e,f,g,h,i){var w,v,u,t,s='- "emoji": ONE emoji that fits the slide (e.g. \ud83c\udf89 \ud83d\ude80 \ud83c\udf3f \ud83d\udca1).\n',r=f?"- A document is attached (read it all). Rewrite its content as the slides in the same language: keep its facts, names, numbers, dates and the order of its sections, and never invent facts it does not contain.\n":"",q=new B.K(D.vJ,new C.fAn(),x.eC).aI(0,", "),p=new B.fd("")
if(e.t(0,D.Hz)){p.a=s
w=s}else w=""
if(e.t(0,D.HA))w=p.a=w+('- "icon3d": ONE name copied exactly from this list that fits the slide: '+A.d.aI(D.Pg,", ")+".\n")
if(e.t(0,D.Cj))p.a=w+'- "image_query": 2-3 simple English words for a real photo that fits the slide (e.g. "city skyline", "students classroom").\n'
w=C.hgT(d)
v=F.fu4(d)
u=C.hd8(g)
t=i==="auto"?"pick the best of: "+q+" (match the mood they describe: nature, vibe, celebration, colorful, professional...)":'use "'+i+'"'
return'You design presentation slides. Write a presentation from the user\'s request.\n\nUSER REQUEST (spoken, may be informal):\n"""'+d+'"""\n\nRules:\n'+r+"- Exactly "+h+' slides.\n- Slide 1 has kind "title". The last slide has kind "closing" (thank-you / call to action).\n- Middle slides mostly kind "bullets" (3 to 5 short bullets, max 12 words each). You may use one "section" divider and one "quote" slide when it fits.\n- Titles are short and punchy (max 7 words). Use the user\'s own names, facts and details; never invent prices, dates or statistics they did not give.\n- "notes": 1-2 sentences the presenter can say.\n- LANGUAGE: if the request names a language (e.g. "in Swahili", "en fran\xe7ais", "en espa\xf1ol", "in Arabic"), write EVERY title, subtitle, bullet and note in that language, with correct spelling and accents. If no language is named, write in the language the request itself is written in. Keep the JSON keys and the "kind", "style", "icon3d" and "image_query" values in English.\n- VOICE: write the way a real, friendly person talks and writes to someone they respect. Short plain sentences. Everyday words that people really use today. No corporate or robotic phrasing ("leverage", "synergy", "empower the ecosystem", "in today\'s dynamic landscape"), no made-up or rare words, no stacked jargon, no lecture tone. Explain the Civic registry, the AI, and any other topic the way you would explain it to a neighbour. If the language is Swahili, use the Swahili people speak and write every day in Kenya and Tanzania: real common words, natural word order, and never an English word forced into Swahili grammar or an invented Swahili word. Check that each word is one an ordinary speaker would understand.\n'+w+"\n"+v+'\n- PICTURE LOOK: "logo_frame" and "photo_frame" are one of: circle, rounded, triangle, hexagon, diamond, arch, or "" (as is). "logo_ring" and "photo_ring" are one of: gold, platinum, glow, rainbow, double, neon, framed, rosegold, jewels, aurora, or "" (none). Follow what the request says (e.g. "my picture in a circle with a gold ring"); if it says nothing, choose what suits the look (luxury \u2192 gold, neon/night \u2192 neon, clean \u2192 rounded with no ring).\n- BIO LINK: if they ask to put their bio link / link page / socials / "my links" in the presentation, add ONE slide with kind "bio" (title like "Connect with me", a one-line inviting subtitle) \u2014 usually just before the closing slide, or where they say. Their real Bio page (with clickable links) is shown on a phone on that slide.\n'+u+'\n- "style": '+t+".\n"+p.u(0)+'- Reply with JSON only, no markdown, in this shape:\n{"title":"...","style":"...","logo_frame":"","logo_ring":"","photo_frame":"","photo_ring":"","slides":[{"kind":"title","title":"...","subtitle":"...","bullets":[],"notes":"...","emoji":"","icon3d":"","image_query":""}]}\n'},
age(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=null,a2="bullets",a3=A.a.i(a6),a4=J.CF(a3,"{"),a5=J.fM2(a3,"}")
if(a4<0||a5<=a4)return a1
a3=J.KQ(a3,a4,a5+1)
try{w=A.R.aG(0,a3,a1)
q=x.f
if(!q.b(w))return a1
v=J.q(w,"slides")
p=x.j
if(!p.b(v)||J.cl(v))return a1
u=B.a([],x.aC)
for(o=J.aV(v),n=x.s,m=x.N;o.C();){t=o.gU(o)
if(!q.b(t))continue
if(p.b(J.q(t,a2))){l=J.b6(p.a(J.q(t,a2)),new C.fyk(),m).c_(0,new C.fyl())
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
f=C.hN3(B.t(f==null?"":f))
if(f==null)f=""
e=J.q(t,"image_query")
if(e==null)e=J.q(t,"imageQuery")
e=A.a.i(B.t(e==null?"":e))
d=J.q(t,"picture")
d=B.c7(B.t(d==null?0:d),a1)
if(d==null)d=0
J.ch(u,new C.a7j(l.toLowerCase(),j,i,s,h,g,f,e,d))}if(J.ad(u)===0)return a1
q=J.q(w,"style")
r=A.a.i(B.t(q==null?a7:q)).toLowerCase()
q=J.q(w,"title")
q=A.a.i(B.t(q==null?J.fo(u).b:q))
p=A.d.b7(D.vJ,new C.fym(r))?r:a7
o=C.fgr(J.q(w,"logo_frame"),D.BJ)
n=C.fgr(J.q(w,"logo_ring"),D.BE)
m=C.fgr(J.q(w,"photo_frame"),D.BJ)
l=C.fgr(J.q(w,"photo_ring"),D.BE)
return new C.aq2(q,p,u,o,n,m,l)}catch(a0){return a1}},
a0V(d,e){return(A.o.D(e,0,255)<<24|d&16777215)>>>0},
hg0(f9,g0,g1,g2,g3,g4,g5,g6,g7,g8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4=null,e5="title",e6="orb1",e7="drift",e8="orb2",e9="logo",f0="hero",f1="photo",f2="float3d",f3="bar",f4="pulse",f5="sub",f6=g2.t(0,D.Ck),f7=f6?C.hGP():e4,f8=f7==null
if(f8)w=e4
else{v=new B.eP()
v.dG(f7.w+1)
u=f7.a
t=B.bl(u.b,!0,x.dL)
A.d.fq(t,v)
s=u.c
s=new C.nD("luxe",u.a,A.lM,t,u.e,u.f,B.a([s,u.d,s],x.t),D.dd)
w=s}if(w==null)w=C.i04(f9.b)
r=g2.t(0,D.a47)||f6
q=g2.t(0,D.Hz)
p=g2.t(0,D.Rb)
o=new C.fsK()
n=B.a([],x.g)
m=new C.fsN(o,w,r)
l=new C.fsM(o,r)
k=new C.fsL(o,r)
j=(g3==null?"":g3).length!==0
u=f9.c
for(s=w.w,f8=!f8,i=g7==null,h=g6==null,g=f9.f,f=f9.r,e=g5==null,d=g4==null,a0=f9.d,a1=f9.e,a2=w.f,a3=w.d,a4=w.r,a5=x.u,a6=J.a5(g0),a7=!A.d.b7(u,new C.fsJ(g8)),a8=g1==null,a9=x.s,b0=0,b1=0;b1<u.length;b1=b6){b2=u[b1]
b3=a3[A.o.F(b1,a3.length)]
b4=A.o.F(b1,3)
b5=a4[b4]
b6=b1+1
b7=a4[b6%3]
b8=A.o.F(b1,5)
b9=D.cR9[b8]
c0=D.cQ6[b8]
c1=B.a([],a5)
c2=a6.h(g0,b1)
c3=c2==null
c4=c3?e4:c2.a
c5=c3?e4:c2.b
c3=b2.x
c6=c3>0&&c3<=g8.length
if(c6)c5=g8[c3-1]
else if(g8.length!==0&&a7&&!D.eHc.t(0,b2.a)){c7=b0+1
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
c1.push(k.$9$anim$delay$fx$key(d0,0.42,0.04,0.16,0.28,c0,500,d1?f2:"",b4))}else if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,0.4,0.04,0.2,0.24,64,A.L,D.q0,500,f2,f0))
c1.push(l.$8$fx$key(D.be,0.4,0.66,0.2,0.012,b5,f4,f3))
c1.push(m.$10$align$anim$key$weight(b2.b,0.08,0.33,0.84,0.3,54,A.L,b9,e5,A.u))
c1.push(m.$10$align$color$delay$key(b2.c,0.12,0.7,0.76,0.14,24,A.L,a2,300,f5))
d3=D.R8
break A}if("section"===d2){c1.push(l.$8$fx$key(D.eI,0.64,0.46,0.42,0.75,(A.o.D(42,0,255)<<24|b5&16777215)>>>0,e7,e6))
if(d0!=null){b4=!c3&&!d1?f1:f0
c1.push(k.$8$anim$fx$key(d0,0.7,0.2,0.24,0.44,c0,d1?f2:"",b4))}else c1.push(l.$9$fx$key$rotation(D.kT,0.78,0.1,0.18,0.32,(A.o.D(64,0,255)<<24|b7&16777215)>>>0,e7,e8,0.3))
c1.push(l.$8$fx$key(D.be,0.08,0.6,0.14,0.014,b5,f4,f3))
b4=b2.b
c1.push(m.$9$anim$key$weight(c8.length===0?b4:c8+"  "+b4,0.08,0.34,0.62,0.24,46,b9,e5,A.u))
c1.push(m.$9$color$delay$key(b2.c,0.08,0.64,0.6,0.14,22,a2,250,f5))
d3=D.Ch
break A}if("quote"===d2){b4=b5&16777215
c1.push(l.$8$fx$key(D.eI,-0.12,-0.2,0.36,0.64,(A.o.D(36,0,255)<<24|b4)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.eI,0.82,0.66,0.26,0.46,(A.o.D(38,0,255)<<24|b7&16777215)>>>0,e7,e8))
c1.push(m.$11$anim$color$fx$key$weight("\u201c",0.06,0.02,0.2,0.36,140,D.mv,(A.o.D(204,0,255)<<24|b4)>>>0,f4,"quote",A.u))
c1.push(m.$11$align$anim$key$style$weight(b2.b,0.12,0.3,0.76,0.34,36,A.L,b9,e5,A.cD,A.O))
b4=b2.c
c1.push(m.$10$align$color$delay$key(b4.length===0?"":"\u2014 "+b4,0.12,0.68,0.76,0.12,22,A.L,a2,300,f5))
if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,j?0.72:0.82,0.06,0.12,0.2,52,A.L,D.q0,500,f2,f0))
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
c1.push(new C.eI(b4,D.a45,0.64,0.05,0.27,0.9,g1,24,A.a4,A.bl,A.aD,4279310375,A.bg,e4,D.be,4280640491,4280172719,2,0,!1,"",0,b8,r?350:0,"bio","","","","",!1,0))
d3=D.mu
break A}if("closing"===d2){c1.push(l.$8$fx$key(D.eI,-0.15,-0.3,0.5,0.9,(A.o.D(46,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.eI,0.78,0.62,0.3,0.54,(A.o.D(51,0,255)<<24|b7&16777215)>>>0,e7,e8))
if(j){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.41,0.05,0.18,0.27,D.mv,400,e9))}else if(d0!=null){b4=d1?f0:f1
c1.push(k.$9$anim$delay$fx$key(d0,0.42,0.05,0.16,0.28,c0,450,d1?f2:"",b4))}else if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,0.4,0.05,0.2,0.24,64,A.L,D.q0,450,f2,f0))
c1.push(l.$8$fx$key(D.be,0.42,0.61,0.16,0.012,b5,f4,f3))
c1.push(m.$10$align$anim$key$weight(b2.b,0.1,0.34,0.8,0.26,52,A.L,b9,e5,A.u))
c1.push(m.$10$align$color$delay$key(b2.c,0.14,0.65,0.72,0.16,24,A.L,a2,300,f5))
d3=D.R8
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
c1.push(m.$11$anim$bullets$color$delay$key(b4,d7,0.31,b8,0.6,d4.length>4?21:24,D.Hx,!0,a2,250,f5))
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
e2.id=i?f:g7}}if(f8)C.hIq(c1,b1,o,f7)
b4=o.$0()
if(f8){b8=f7.r
b8=b8[A.o.F(b1,b8.length)]}else b8=r?D.de8[A.o.F(b1,6)]:s
n.push(new C.lB(b4,b2.b,b2.e,d3,b3.a,b3.b,b8,0,"",0,c1))}e3=A.a.i(f9.a)
if(e3.length===0)e3="AI Presentation"
f8=o.$0()
return C.Bd(e4,e4,e4,e4,D.Cg,5,!1,e4,e4,e4,e4,e4,f8,e4,!1,e4,e3.length>60?A.a.ap(e3,0,60):e3,e4,e4,n,"office_blue",e4,!1,e4)},
fv7(d,e){var w=0,v=B.j(x.gI),u,t,s,r,q,p,o,n,m
var $async$fv7=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:o=e.t(0,D.Cj)
n=e.t(0,D.HA)
if(!o&&!n){u=D.a34
w=1
break}t=B.a([],x.d5)
for(s=d.c,r=0;r<s.length;++r)t.push(new C.fva(o,s[r],n,$.hLP,r).$0())
s=B.T(x.S,x.aH)
m=J
w=3
return B.b(B.iJ(t,x.e),$async$fv7)
case 3:q=m.aV(g)
case 4:if(!q.C()){w=5
break}p=q.gU(q)
s.n(0,p.a,p.b)
w=4
break
case 5:u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fv7,v)},
fu7(d,e,f,g,h,i,j,k,l){var w=0,v=B.j(x.I),u,t,s
var $async$fu7=B.e(function(m,n){if(m===1)return B.f(n,v)
for(;;)switch(w){case 0:h.$1("Writing your "+j+" slides\u2026")
t=i.length
t=C.i01(d,e,k.length!==0,t,j,l)
s=C
w=3
return B.b(C.aMa(t,"The AI could not write the slides. Try describing it again.",l==="auto"?"colorful":l,k),$async$fu7)
case 3:u=s.aMv(n,e,h,f,g,i)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fu7,v)},
bAy(d,e,f,g,h,i,j,k){var w=0,v=B.j(x.I),u,t,s,r,q,p,o
var $async$bAy=B.e(function(l,m){if(l===1)return B.f(m,v)
for(;;)switch(w){case 0:if(e.length!==0){t=B.aX(x.N)
for(s=B.ec(f,f.r,B.a3(f).c),r=s.$ti.c;s.C();){q=s.d
t.L(0,(q==null?r.a(q):q).b)}C.i02(e,t,i,k)}if(h!=null)h.$1("Making your changes\u2026")
p=C.age(i,"colorful")
t=C.i00(d,f,i,j.length,k)
s=p==null?null:p.b
o=C
w=3
return B.b(C.aMa(t,"The AI could not make that change. Try saying it another way.",s==null?"colorful":s,A.hl),$async$bAy)
case 3:u=o.aMv(m,f,h,g,D.dS9,j)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bAy,v)},
aMa(d,e,f,g){var w=0,v=B.j(x.dO),u,t,s,r,q,p,o,n
var $async$aMa=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:w=3
return B.b(B.v5(null,""),$async$aMa)
case 3:n=i
if(A.a.i(n).length===0)throw B.V("AI is not set up yet. AI is not available right now. Please try again later.")
t=B.n_(n)
s=null,r=0
case 4:if(!(r<2)){w=6
break}w=7
return B.b(B.qF(t,d,g,null),$async$aMa)
case 7:q=i
p=q.b
if(p!=null){o=C.age(p,f)
if(o!=null){u=o
w=1
break}}else s=q.a
case 5:++r
w=4
break
case 6:throw B.V(s!=null&&B.Ku(s)?"No internet connection \u2014 try again when you are online.":e)
case 1:return B.h(u,v)}})
return B.i($async$aMa,v)},
aMv(d,e,f,g,h,i){var w=0,v=B.j(x.I),u,t,s,r,q,p,o,n,m,l
var $async$aMv=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:w=e.t(0,D.Cj)||e.t(0,D.HA)?3:5
break
case 3:if(f!=null)f.$1("Adding pictures and 3D art\u2026")
if(i.length===0)t=e
else{t=B.da(e,x.Q)
t.W(0,D.Cj)}w=6
return B.b(C.fv7(d,t),$async$aMv)
case 6:s=k
w=4
break
case 5:s=D.a34
case 4:t=d.c
w=A.d.b7(t,new C.fa4())?7:9
break
case 7:r=$.hhL
r=r==null?null:r.$0()
w=10
return B.b(x.gc.b(r)?r:B.dP(r,x.aP),$async$aMv)
case 10:q=k
p=q!=null?A.R.ao(q.ae(),null):null
w=8
break
case 9:p=null
case 8:r=h.a
o=h.b
n=h.c
m=h.d
l=C.hg0(d,s,p,e,g,r,o,n,m,i)
if(r==null)r=d.d
if(o==null)o=d.e
if(n==null)n=d.f
if(m==null)m=d.r
l.CW=C.hAc(new C.aq2(d.a,d.b,t,r,o,n,m))
m=l.r
n=B.U(m).k("K<1,n>")
t=B.B(new B.K(m,new C.fa5(),n),n.k("ak.E"))
l.cx=t
t=B.a3(e).k("jK<cn.E,n>")
t=B.B(new B.jK(e,new C.fa6(),t),t.k("J.E"))
l.cy=t
l.ay=e.t(0,D.Rb)
u=l
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aMv,v)},
fWk(d){var w,v,u,t=d.cy
if(t==null)t=A.T
w=B.aX(x.Q)
for(v=0;v<6;++v){u=D.a1W[v]
if(A.d.t(t,u.b))w.L(0,u)}return w},
i4_(d){return B.bX(A.K,null,new C.fJh(),d,!0,!0,!0,null,!1,!1,x.I)},
hHq(d,e){var w,v=e.toLowerCase()
if(A.a.cb(v,".png"))w="image/png"
else w=A.a.cb(v,".webp")?"image/webp":"image/jpeg"
return"data:"+w+";base64,"+A.cS.gcv().aJ(d)},
i3Z(d,e,f){return B.bX(A.K,null,new C.fJg(f,e),d,!0,!0,!0,null,!1,!1,x.I)},
fWl(d){var w,v,u,t,s,r,q,p
for(w=d.r,v=w.length,u=0;u<v;++u)for(t=w[u].z,s=t.length,r=0;r<s;++r){q=t[r]
if(q.fx==="logo"){p=q.at
p=(p==null?"":p).length!==0}else p=!1
if(p)return q.at}return null},
fWm(d){var w,v,u,t,s,r,q,p,o=B.a([],x.s)
for(w=d.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u)for(t=w[u].z,s=t.length,r=0;r<t.length;t.length===s||(0,B.L)(t),++r){q=t[r]
p=q.at
if(p==null)p=""
if(q.fx==="photo"&&p.length!==0&&!A.d.t(o,p))o.push(p)}return o},
fgr(d,e){var w=A.a.i(B.t(d==null?"":d)).toLowerCase()
return A.d.b7(e,new C.fgs(w))?w:""},
hd8(d){var w,v
if(d<=0)return""
w=""+d
v=d===1?"":"s"
return"- THEIR PICTURES: they uploaded "+w+" picture"+v+" of their own, numbered 1 to "+w+' in the order they picked them. Put "picture": <number> on each slide where one belongs, following exactly what they say (e.g. "picture 2 on the team slide", "first picture on the title"). If they don\'t say, spread them over the content slides in order. Use 0 where no picture is wanted.'},
hhJ(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0="colorful",a1=a4.CW,a2=C.age(a1==null?"":a1,a0),a3=C.age(a5,a0)
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
for(v=t.length,r=a4.r,q=B.U(r).k("a2<1>"),p=0;p<t.length;t.length===v||(0,B.L)(t),++p){o=B.r2(new B.a2(r,new C.fAt(t[p]),q))
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
g=B.B(new B.a2(k,new C.fAu(),v),r)
A.d.b_(g,new C.fAv())
if(g.length===0)continue
f=new C.fAw(g)
e=s[n]
for(k=e.z,j=k.length,p=0;p<k.length;k.length===j||(0,B.L)(k),++p){d=k[p]
i=d.r
if(i.length!==0)d.r=f.$1(i)}e.c=f.$1(e.c)}if(A.a.i(a4.b)===A.a.i(a2.a)&&A.a.i(a3.a).length!==0)a4.b=A.a.i(a3.a)
a4.CW=a5
return!0},
i0l(d){var w=d.toLowerCase(),v=B.af("\\b(fit|fits|fitting|overflow|overflowing|reframe|inside|too big|out of the|going under|under the slide|below the slide)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.aEU
v=B.af("\\b(smaller|shrink|reduce|decrease|make .{0,20}small|less big)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.dU4
v=B.af("\\b(bigger|larger|increase|enlarge|grow|make .{0,20}big)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.dU5
return null},
hcK(d,e,f,g){var w,v,u,t=d.e,s=d.f,r=Math.max(1,A.k.bu(t*f/(e*0.55)))
for(t=d.r.split("\n"),w=t.length,v=0,u=0;u<w;++u)v+=Math.max(1,A.k.dw(t[u].length/r))
return v*e*1.3<=s*g+0.5&&d.d+d.f<=1.001},
i05(a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a0.r,d=e.length
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
if(C.hcK(n,j,v,u))n.w=j
break
case 2:i=m
h=0
for(;;){g=!1
if(!C.hcK(n,i,v,u))if(n.w>10){f=h+1
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
i03(d,e){var w,v,u,t,s,r,q,p,o=d.b,n=C.age(o,"colorful")
if(n==null)throw B.V("That earlier version could not be read.")
w=B.aX(x.Q)
for(v=d.c,u=v.length,t=0;t<v.length;v.length===u||(0,B.L)(v),++t){s=v[t]
for(r=0;r<6;++r){q=D.a1W[r]
if(q.b===s)w.L(0,q)}}v=C.fWl(e)
u=C.fWm(e)
p=C.hg0(n,D.a34,null,w,v,n.d,n.e,n.f,n.r,u)
p.CW=o
o=p.r
u=B.U(o).k("K<1,n>")
o=B.B(new B.K(o,new C.fAp(),u),u.k("ak.E"))
p.cx=o
o=w.$ti.k("jK<cn.E,n>")
o=B.B(new B.jK(w,new C.fAq(),o),o.k("J.E"))
p.cy=o
p.ay=w.t(0,D.Rb)
return p},
i3M(d,e,f){return B.bX(A.K,null,new C.fIu(f,e),d,!0,!0,!0,null,!1,!1,x.I)},
hGP(){var w,v,u,t=1000*Date.now()&2147483647,s=new B.eP()
s.dG(t)
w=D.cvw[s.aB(10)]
v=new C.ear(s)
u=x.N
return new C.eaq(w,s.aB(4),J.fo(v.$1$2(D.cVn,1,x.ff)),w.r[s.aB(3)],v.$1$2(D.d9T,2+s.aB(2),u),v.$1$2(D.d3n,2,u),v.$1$2(D.dcI,4,x.fP),t)},
hIq(a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g="lux_frame",f="goldframe",e="lux_emblem",d=a5.a,a0=d.c,a1=new B.eP()
a1.dG(a5.w+a3*13)
w=new C.f6z(a4)
v=new C.f6B(a4,d)
u=new C.f6A(w,a5,a0,d)
for(t=a2.length,s=d.f,r=d.d,q=0;q<a2.length;a2.length===t||(0,B.L)(a2),++q){p=a2[q]
if(p.b===D.cQ){o=p.fx
if(o==="title"){p.Q=r
p.fy="shimmer@"+A.a.aT(A.o.fQ(r,16),8,"0").toUpperCase()}else if(o==="sub"||o==="body")p.Q=s}if(p.fx==="bar")p.fy="shimmer@"+A.a.aT(A.o.fQ(r,16),8,"0").toUpperCase()}t=a5.e
n=t[A.o.F(a3,t.length)]
if(n==="spotlight")A.d.ck(a2,0,w.$8(D.eI,0.1+a1.aj()*0.45,0.05+a1.aj()*0.3,0.45,0.75,C.a0V(a0,52),"lux_spot",a5.we(0,"spotlight")))
else A.d.ck(a2,0,w.$8(D.be,0,0,1,1,0,"lux_back",a5.we(0,n)))
m=t[(a3+1)%t.length]
t=a3&1
if(t===1&&m!==n&&m!=="spotlight")A.d.ck(a2,1,w.$8(D.be,0,0,1,1,0,"lux_back2",a5.aDL(0,m,r)))
switch(a5.b){case 0:a2.push(w.$12$anim$delay$stroke$strokeWidth(D.be,0.022,0.038,0.956,0.924,0,g,a5.we(0,f),D.dd,150,C.a0V(a0,176),1.6))
a2.push(u.$4(0.022,0.038,"lux_c1",300))
a2.push(u.$4(0.978,0.038,"lux_c2",380))
a2.push(u.$4(0.022,0.962,"lux_c3",460))
a2.push(u.$4(0.978,0.962,"lux_c4",540))
break
case 1:a2.push(w.$12$anim$delay$stroke$strokeWidth(D.be,0.018,0.032,0.964,0.936,0,g,a5.we(0,f),D.dd,120,C.a0V(a0,200),2))
a2.push(w.$12$anim$delay$stroke$strokeWidth(D.be,0.034,0.06,0.932,0.88,0,"lux_frame2","",D.dd,260,C.a0V(a0,112),0.8))
a2.push(u.$5$size(0.5,0.032,"lux_c1",420,0.026))
a2.push(u.$5$size(0.5,0.968,"lux_c2",480,0.026))
break
case 2:a2.push(w.$10$anim$delay(D.be,0,0,1,1,0,"lux_filigree",a5.we(0,"filigree"),D.dd,200))
break
default:a2.push(w.$10$anim$delay(D.be,0.08,0.06,0.84,0.004,C.a0V(a0,208),"lux_rule",a5.aDL(0,"shimmer",r),D.u7,150))
a2.push(w.$10$anim$delay(D.be,0.08,0.936,0.84,0.004,C.a0V(a0,144),"lux_rule2","",D.Hx,220))}l=!A.d.b7(a2,new C.f6y())||a3===0
s=a5.d
if(l)a2.push(v.$9(s,0.44,0.06,0.12,0.14,40,e,a5.we(0,"crest"),350))
else{o=a1.h9()?0.035:0.905
a2.push(v.$9(s,o,0.055,0.06,0.09,22,e,a5.we(0,"crest"),350))}s=a5.c
t=t===0
o=t?0.3:0.62
k=C.a0V(r,242)
j=a5.we(0,"orbit")
i=s===D.be?0.785:0
a2.push(w.$13$anim$delay$rotation$stroke$strokeWidth(s,o-0.008,0.024,0.016,0.028,k,"lux_g1",j,D.q0,600,i,4294967295,1))
t=t?0.66:0.34
a2.push(w.$10$anim$delay(D.eI,t-0.007,0.9495,0.014,0.025,C.a0V(r,242),"lux_g2",a5.we(0,"orbit"),D.q0,700))
for(t=a5.f,s=t.length,q=0;q<t.length;t.length===s||(0,B.L)(t),++q){h=t[q]
a2.push(w.$8(D.be,0,0,1,1,0,"lux_"+h,h+"@"+A.a.aT(A.o.fQ(a0,16),8,"0").toUpperCase()))}if((A.d.gK(d.b).a&16777215)<8421504)a2.push(w.$8(D.be,0,0,1,1,0,"lux_velvet",a5.we(0,"velvet")))},
nD:function nD(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fAr:function fAr(d){this.a=d},
fAs:function fAs(){},
vH:function vH(d,e){this.a=d
this.b=e},
a7j:function a7j(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
aq2:function aq2(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
fAk:function fAk(){},
fAn:function fAn(){},
fyk:function fyk(){},
fyl:function fyl(){},
fym:function fym(d){this.a=d},
fsK:function fsK(){},
fsN:function fsN(d,e,f){this.a=d
this.b=e
this.c=f},
fsM:function fsM(d,e){this.a=d
this.b=e},
fsL:function fsL(d,e){this.a=d
this.b=e},
fsJ:function fsJ(d){this.a=d},
fva:function fva(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fv8:function fv8(d){this.a=d},
fv9:function fv9(d){this.a=d},
fa4:function fa4(){},
fa5:function fa5(){},
fa6:function fa6(){},
fJh:function fJh(){},
a_J:function a_J(d){this.a=d},
aGb:function aGb(d,e,f,g,h){var _=this
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
eUM:function eUM(d,e,f){this.a=d
this.b=e
this.c=f},
eUN:function eUN(d,e){this.a=d
this.b=e},
eUK:function eUK(d,e){this.a=d
this.b=e},
eUL:function eUL(d,e){this.a=d
this.b=e},
eUJ:function eUJ(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
eUE:function eUE(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
eUI:function eUI(d,e){this.a=d
this.b=e},
eUD:function eUD(d,e){this.a=d
this.b=e},
eUH:function eUH(d,e){this.a=d
this.b=e},
eUC:function eUC(d,e){this.a=d
this.b=e},
eUF:function eUF(d){this.a=d},
eUG:function eUG(d,e){this.a=d
this.b=e},
eUs:function eUs(d,e){this.a=d
this.b=e},
eUt:function eUt(d,e){this.a=d
this.b=e},
eUv:function eUv(d){this.a=d},
eUw:function eUw(d){this.a=d},
eUx:function eUx(d){this.a=d},
eUy:function eUy(d){this.a=d},
eUu:function eUu(d,e){this.a=d
this.b=e},
eUz:function eUz(d,e){this.a=d
this.b=e},
eV_:function eV_(d){this.a=d},
eV0:function eV0(d){this.a=d},
eUZ:function eUZ(d){this.a=d},
eV1:function eV1(d){this.a=d},
eUY:function eUY(d){this.a=d},
eV3:function eV3(d){this.a=d},
eUX:function eUX(d,e){this.a=d
this.b=e},
eV4:function eV4(d){this.a=d},
eUW:function eUW(d,e){this.a=d
this.b=e},
eV5:function eV5(d){this.a=d},
eUV:function eUV(d){this.a=d},
eV6:function eV6(d){this.a=d},
eUU:function eUU(d,e){this.a=d
this.b=e},
eV7:function eV7(d){this.a=d},
eUT:function eUT(d,e){this.a=d
this.b=e},
eV8:function eV8(d){this.a=d},
eUS:function eUS(d){this.a=d},
eV9:function eV9(d,e){this.a=d
this.b=e},
eUR:function eUR(d,e){this.a=d
this.b=e},
eVa:function eVa(d){this.a=d},
eV2:function eV2(d){this.a=d},
eUQ:function eUQ(d,e){this.a=d
this.b=e},
eUA:function eUA(d,e,f){this.a=d
this.b=e
this.c=f},
eUB:function eUB(d,e,f){this.a=d
this.b=e
this.c=f},
eUP:function eUP(d,e){this.a=d
this.b=e},
eUO:function eUO(d,e){this.a=d
this.b=e},
fJg:function fJg(d,e){this.a=d
this.b=e},
a_I:function a_I(d,e,f){this.c=d
this.d=e
this.a=f},
aGa:function aGa(d){var _=this
_.d=d
_.e=!1
_.f=""
_.c=_.a=_.r=null},
eUl:function eUl(d){this.a=d},
eUm:function eUm(d){this.a=d},
eUn:function eUn(d,e){this.a=d
this.b=e},
eUo:function eUo(d){this.a=d},
eUp:function eUp(d){this.a=d},
eUk:function eUk(d,e){this.a=d
this.b=e},
eUq:function eUq(d,e){this.a=d
this.b=e},
eUr:function eUr(d,e){this.a=d
this.b=e},
fgs:function fgs(d){this.a=d},
b_O:function b_O(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aCK:function aCK(d,e,f){this.c=d
this.d=e
this.a=f},
biF:function biF(d,e){var _=this
_.d=$
_.bq$=d
_.a7$=e
_.c=_.a=null},
eat:function eat(d){this.a=d},
eas:function eas(){},
bgc:function bgc(d,e){this.b=d
this.a=e},
fAt:function fAt(d){this.a=d},
fAu:function fAu(){},
fAv:function fAv(){},
fAw:function fAw(d){this.a=d},
aqC:function aqC(d,e){this.a=d
this.b=e},
fAp:function fAp(){},
fAq:function fAq(){},
fIu:function fIu(d,e){this.a=d
this.b=e},
Z6:function Z6(d,e,f){this.c=d
this.d=e
this.a=f},
aAb:function aAb(){var _=this
_.e=_.d=$
_.f=!1
_.c=_.a=_.r=null},
dgt:function dgt(d){this.a=d},
dgu:function dgu(d){this.a=d},
dgv:function dgv(d,e){this.a=d
this.b=e},
dgy:function dgy(d){this.a=d},
dgz:function dgz(d,e){this.a=d
this.b=e},
dgx:function dgx(d,e){this.a=d
this.b=e},
dgA:function dgA(d){this.a=d},
dgw:function dgw(d,e){this.a=d
this.b=e},
br0:function br0(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eaq:function eaq(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
ear:function ear(d){this.a=d},
f6z:function f6z(d){this.a=d},
f6B:function f6B(d,e){this.a=d
this.b=e},
f6A:function f6A(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f6y:function f6y(){},
aKJ:function aKJ(){},
fVa(d){var w,v,u
try{w=A.R.aG(0,d,null)
if(x.f.b(w)){v=B.vz(B.a1(w,x.N,x.z))
return v}}catch(u){}return null},
b_K:function b_K(d,e,f){this.c=d
this.d=e
this.a=f},
bki:function bki(d,e){this.c=d
this.a=e},
hXp(d){return A.d.dL(D.GB,new C.ftR(d),new C.ftS())},
hXq(d){var w,v,u,t=A.a.i(d)
if(!A.a.a0(t,"class_"))return null
w=A.a.b0(t,6)
if(w.length===0)return null
v=new B.a2(D.GB,new C.ftT(w),x.b4)
if(!v.gaf(0).C())return null
u=v.gK(0)
return new C.jB("class_"+u.a,u.b,u.d,u.r,u.w,u.e,u.f)},
l8:function l8(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
ftR:function ftR(d){this.a=d},
ftS:function ftS(){},
ftT:function ftT(d){this.a=d},
mO(d,e,f,g,h){return new C.Ee(f,g,d)},
hJE(d){var w=d.z,v=B.U(w).k("a2<1>")
w=B.B(new B.a2(w,new C.f8z(),v),v.k("J.E"))
d.z=w
d.x=""},
du(d,e){var w=$.JU
e.db="__design__:"+(w.length===0?"layer":w)
A.d.ck(d.z,0,e)},
dv(d,e,f,g,h,i,j,k,l){return C.eo(A.bg,!1,4279310375,A.aD,"",d,24,A.bl,A.a4,"",e,"design_"+C.cC(),null,"","",0,!1,"",f,g,h,i,"",0,0,"",D.cg,D.f_,j,k,l)},
hfO(d,e){var w
C.hJE(d)
w=A.d.dL($.bCA(),new C.frH(e),new C.frI())
$.JU=w.a
d.x=w.a;++d.y
try{w.bx(d)}finally{$.JU=""}d.z=B.bl(d.z,!0,x.F)},
Ee:function Ee(d,e,f){this.a=d
this.b=e
this.e=f},
f8z:function f8z(){},
fzW:function fzW(){},
fzX:function fzX(){},
fzY:function fzY(){},
fA8:function fA8(){},
fAd:function fAd(){},
fAe:function fAe(){},
fAf:function fAf(){},
fAg:function fAg(){},
fAh:function fAh(){},
fAi:function fAi(){},
fAj:function fAj(){},
fzZ:function fzZ(){},
fA_:function fA_(){},
fA0:function fA0(){},
fA1:function fA1(){},
fA2:function fA2(){},
fA3:function fA3(){},
fA4:function fA4(){},
fA5:function fA5(){},
fA6:function fA6(){},
fA7:function fA7(){},
fA9:function fA9(){},
fAa:function fAa(){},
fAb:function fAb(){},
fAc:function fAc(){},
frH:function frH(d){this.a=d},
frI:function frI(){},
iR(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){return C.eo(d,e,f,g,"",4280640491,h,i,j,"",k,l,null,"","",0,!1,"",0,D.be,4280172719,2,m,n,0,"",o,D.cQ,p,q,r)},
Cw(d,e,f,g,h,i,j,k,l){return C.eo(A.bg,!1,4279310375,A.aD,"",d,24,A.bl,A.a4,"",e,f,null,"","",0,!1,"",0,g,h,i,"",0,0,"",D.cg,D.f_,j,k,l)},
bBi(){var w=new B.S(Date.now(),0,!1)
return A.ib[B.bG(w)-1]+" "+B.bQ(w)+", "+B.by(w)},
es:function es(d,e,f){this.a=d
this.b=e
this.c=f},
byF(d){return new B.iM((A.o.aA(d,24)&255)/255,(A.o.aA(d,16)&255)/255,(A.o.aA(d,8)&255)/255,(d&255)/255)},
hOG(d){var w,v
if(d==null||!A.a.a0(d,"data:image"))return null
try{w=B.alQ(A.cE.aJ(A.d.gal(d.split(","))))
return w}catch(v){return null}},
hOK(d){var w=d.r
if(!d.cy)return w
return new B.K(B.a(w.split("\n"),x.s),new C.fg0(),x.dv).aI(0,"\n")},
hOJ(d){switch(d.a){case 2:return A.nl
case 1:case 5:return A.eRy
default:return A.Sy}},
hOD(d){switch(d.a){case 2:return A.uG
case 1:case 5:return A.Uo
default:return A.a8V}},
hOH(d,e){var w,v=null,u=d.ay,t=A.o.aA(u,24),s=A.o.aA(d.ch,24),r=(t&255)===0?v:C.byF(u),q=(s&255)===0?v:C.byF(d.ch),p=A.k.D(d.CW*(e/960),0.35,6)
u=q==null
if(u)w=v
else{t=new B.nn(q,p,A.kA)
w=new B.pn(t,t,t,t)}switch(d.ax.a){case 1:return B.lq(v,v,v,new B.kw(r,w,v,A.aa8,v),v,v,v,v)
case 4:return u?new B.fO(v,v,v):B.wH(B.lq(v,v,q,v,p+0.4,v,v,v))
default:return B.lq(v,v,v,new B.kw(r,w,B.vc(4),A.hC,v),v,v,v,v)}},
hOF(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=d.c*e,j=d.d*a0,i=d.b,h=i===D.f_?0.4:12,g=A.k.D(d.e*e,h,e),f=A.k.D(d.f*a0,h,a0)
switch(i.a){case 0:w=C.hOD(d.as)
v=A.k.D(d.w*(e/960),3,96)
u=C.hOK(d)
t=C.byF(d.Q)
s=d.x.a>=700?A.ei:A.vg
r=d.y===A.cD?A.xC:A.ais
q=d.z
p=new B.CI(w,l,l,B.f9(u,l,l,l,B.h2(l,t,1===q.a?A.aNN:A.aNM,l,l,l,l,l,l,A.dr,l,l,v,r,s,l,!0,l,l,l,l),C.hOJ(d.as)))
break
case 1:case 4:o=C.hOG(d.at)
n=i===D.lk&&d.c===0&&d.d===0&&d.e===1&&d.f===1
if(o==null){w=d.db
if(w.length===0)w="Image"
p=B.wH(B.f9(w,l,l,l,B.h2(l,A.rm,l,l,l,l,l,l,l,A.dr,l,l,10,l,l,l,!0,l,l,l,l),l))}else p=new B.Hm(o,n?A.aa4:A.UL,l,l)
break
case 3:w=new B.nn(A.HQ,1,A.kA)
u=B.vc(6)
t=d.db
if(t.length===0)t="PDF document"
p=B.lq(A.uG,B.f9(t,l,l,l,B.h2(l,D.e5e,l,l,l,l,l,l,l,A.dr,l,l,11,l,A.ei,l,!0,l,l,l,l),A.nl),l,new B.kw(E.aGc,new B.pn(w,w,w,w),u,A.hC,l),l,l,l,l)
break
case 2:p=C.hOH(d,e)
break
case 5:p=C.hOE(d)
break
default:p=l}w=d.cx
if(w!==0)p=B.h7w(-w,p)
w=i===D.cQ
if(w){m=A.o.aA(d.Q,24)&255
if(m<255)p=new B.arn(m/255,p)}if(w)return new F.vN(k,l,j,l,new B.RC(new B.kv(g,g,f,1/0),p))
if(i===D.kS){i=new B.nn(A.HQ,1,A.kA)
i=B.lq(A.uG,p,l,new B.kw(A.oT,new B.pn(i,i,i,i),B.vc(4),A.hC,l),l,l,D.btc,l)}else i=p
return new F.vN(k,l,j,l,new B.fO(g,f,i))},
hOI(d,e,f,g){var w,v=null,u=C.byF(d.e),t=d.f
t=B.a([F.h68(t!=null?B.lq(v,v,v,new B.kw(v,v,v,A.hC,new B.aVh(E.Up,A.a8P,B.a([u,C.byF(t)],x.cR),v)),v,v,v,v):B.lq(v,v,u,v,v,v,v,v))],x.eR)
w=d.z
A.d.v(t,new B.K(w,new C.fg_(f,g),B.U(w).k("K<1,fe>")))
return F.cpx(t)},
fWo(d){var w=0,v=B.j(x.E),u,t,s,r,q,p,o,n
var $async$fWo=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:n=B.a3u(null,"NGMY Slides",d.b)
for(t=d.r,s=t.length,r=n.c,q=0;q<t.length;t.length===s||(0,B.L)(t),++q){p=t[q]
o=new B.VS(A.vV,A.HN,D.buj,null,null,null,!1,null)
o=new B.Bj(o,new C.fAC(607,787,p,d))
o.M7(n,null)
r.push(o)}u=n.jW(0)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fWo,v)},
hOE(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=C.fVa(d.r),k=l==null,j=k?m:l.b,i=A.a.i(j==null?"":j),h=k?m:l.gaiI()
if(h==null)h=A.avT
j=B.th(4279308564)
w=B.vc(18)
v=new B.nn(B.th(4287531653),3,A.kA)
u=i.length===0?"My links":i
u=B.a([B.wH(B.f9(u,m,m,m,B.h2(m,A.oT,m,m,m,m,m,m,m,A.dr,m,m,12,m,A.ei,m,!0,m,m,m,m),m))],x.eR)
t=k?m:l.c
if(A.a.i(t==null?"":t).length!==0)u.push(B.wH(B.f9(A.a.i(l.c),m,m,m,D.eYF,m)))
u.push(new B.fO(m,8,m))
for(t=B.dc(h,0,B.dJ(8,"count",x.S),B.U(h).c),s=t.$ti,t=new B.bR(t,t.gM(0),s.k("bR<ak.E>")),s=s.k("ak.E");t.C();){r=t.d
if(r==null)r=s.a(r)
q=A.a.i(r.c)
p=B.th(4280690220)
o=new B.a8z(8,8)
n=A.a.i(r.b)
u.push(new B.nE(D.bnv,new C.avz(new C.ahh(q),B.lq(m,B.f9(n.length===0?A.a.i(r.c):n,m,m,m,D.f_Y,A.nl),m,new B.kw(p,m,new B.ahI(o,o,o,o),A.hC,m),m,m,D.btD,m))))}k=k?m:l.as
if(A.a.i(k==null?"":k).length!==0){k=A.a.i(l.as)
t=B.wH(B.f9(k,m,m,m,D.f_c,m))
u.push(new C.avz(C.hom(k),t))}return B.lq(m,B.ys(u,A.L8,A.li),m,new B.kw(j,new B.pn(v,v,v,v),w,A.hC,m),m,m,D.bol,m)},
fg0:function fg0(){},
fg_:function fg_(d,e){this.a=d
this.b=e},
fAC:function fAC(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ag1(d){var w,v
for(w=0;w<32;++w){v=D.Gs[w]
if(v.a===d)return v}return null},
ha9(d){var w,v,u=A.a.cJ(d,",")
if(!A.a.a0(d,"data:")||u<0)return null
try{w=A.cE.aJ(A.a.b0(d,u+1))
return w}catch(v){return null}},
cT(d,e){var w=d*374761393+e*668265263+1013904223&2147483647
w=(w^w>>>13)*1274126177&2147483647
return((w^w>>>16)&65535)/65535},
hiR(d,e){return B.a6(d,!1).c6(B.e7(new C.fGU(e),!0,null,x.fB))},
hiQ(d,e){return B.bX(A.K,null,new C.fGT(e),d,!0,!0,!0,null,!1,!1,x.fB)},
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
MW:function MW(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bi1:function bi1(d,e,f){var _=this
_.d=d
_.e=$
_.bq$=e
_.a7$=f
_.c=_.a=null},
dRU:function dRU(d){this.a=d},
dRT:function dRT(d,e,f){this.a=d
this.b=e
this.c=f},
dRS:function dRS(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bpB:function bpB(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eTz:function eTz(d,e){this.a=d
this.b=e},
bd5:function bd5(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
aYE:function aYE(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
c6X:function c6X(){},
c6Y:function c6Y(d){this.a=d},
c6Z:function c6Z(d,e,f){this.a=d
this.b=e
this.c=f},
c7_:function c7_(d,e,f){this.a=d
this.b=e
this.c=f},
fGU:function fGU(d){this.a=d},
YF:function YF(d,e){this.c=d
this.a=e},
ayz:function ayz(){var _=this
_.f=_.e=_.d=$
_.r=0
_.c=_.a=null},
d5G:function d5G(d,e,f){this.a=d
this.b=e
this.c=f},
d5L:function d5L(d){this.a=d},
d5M:function d5M(d){this.a=d},
d5K:function d5K(d){this.a=d},
d5N:function d5N(d){this.a=d},
d5J:function d5J(d,e){this.a=d
this.b=e},
d5O:function d5O(d){this.a=d},
d5I:function d5I(d){this.a=d},
d5P:function d5P(d){this.a=d},
d5H:function d5H(d,e){this.a=d
this.b=e},
d5Q:function d5Q(d,e){this.a=d
this.b=e},
fGT:function fGT(d){this.a=d},
fGS:function fGS(d){this.a=d},
fGR:function fGR(d,e,f){this.a=d
this.b=e
this.c=f},
fGQ:function fGQ(d,e){this.a=d
this.b=e},
aKc:function aKc(){},
i3Y(d){return B.bX(A.K,null,new C.fJf(),d,!0,!0,!0,null,!1,!1,x.N)},
fJf:function fJf(){},
Z_:function Z_(d){this.a=d},
bez:function bez(d){this.d=d
this.c=this.a=null},
dcs:function dcs(d){this.a=d},
dct:function dct(d,e){this.a=d
this.b=e},
dcu:function dcu(d){this.a=d},
hL7(d){var w,v=d.split("@")
if(v.length>1){w=B.c7(v[1],16)
if(w!=null)return B.b0(w)}return D.x4},
hZk(d){var w,v=A.d.gK(d.split("@"))
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
hZj(d,e,f,g){var w,v,u,t,s,r=null,q=A.d.gK(d.split("@")),p=C.hL7(d)
switch(q){case"shimmer":return B.nI(A.a9g,g,new C.fxi(p,A.k.F(e,6.283185307179586)/6.283185307179586*1.8-0.4))
case"golddust":return new B.an(A.W,r,A.b_,A.r,B.a([g,B.e1(B.b3(r,r,r,new C.bdX(e,f,p,r),A.au),!0,r)],x.p),r)
case"spotlight":w=Math.sin(e)
v=Math.cos(e*0.7)
u=Math.sin(e*2)
t=Math.sin(e*3)
return B.dW(B.eb(A.A,B.db(C.fNn(g,B.a4o(40,40,r)),0.75+t*0.25),1+u*0.08,r,r),new B.u(w*60,v*26))
case"goldframe":return new B.an(A.W,r,A.b_,A.r,B.a([g,B.e1(B.b3(r,r,r,new C.bdE(e,p,r),A.au),!0,r)],x.p),r)
case"twinkle":s=Math.sin(e)
w=A.k.D(0.55+s*0.45,0,1)
return B.db(B.eC(A.A,e*0.5,B.eb(A.A,g,0.8+(s+1)*0.18,r,r),r),w)
case"orbit":w=Math.cos(e)
v=Math.sin(e)
u=B.dl()
t=u.a
t.$flags&2&&B.ai(t)
t[11]=0.002
u.fv(e)
u.mC(Math.sin(e)*0.3)
return B.dW(B.fs(A.A,g,r,u,!0),new B.u(w*22,v*12))
case"rays":return new B.an(A.W,r,A.b_,A.r,B.a([B.e1(B.b3(r,r,r,new C.bmt(e,f,p,r),A.au),!0,r),g],x.p),r)
case"bokeh":return new B.an(A.W,r,A.b_,A.r,B.a([B.e1(B.b3(r,r,r,new C.b8z(e,f,p,r),A.au),!0,r),g],x.p),r)
case"aurora":return new B.an(A.W,r,A.b_,A.r,B.a([B.e1(B.b3(r,r,r,new C.b8c(e,f,p,r),A.au),!0,r),g],x.p),r)
case"velvet":return new B.an(A.W,r,A.b_,A.r,B.a([g,B.e1(B.b3(r,r,r,new C.btl(e,p,r),A.au),!0,r)],x.p),r)
case"sparkle":return new B.an(A.W,r,A.b_,A.r,B.a([g,B.e1(B.b3(r,r,r,new C.bqo(e,f,p,r),A.au),!0,r)],x.p),r)
case"sheen":return new B.an(A.W,r,A.b_,A.r,B.a([g,B.e1(B.b3(r,r,r,new C.bpx(e,p,r),A.au),!0,r)],x.p),r)
case"filigree":return new B.an(A.W,r,A.b_,A.r,B.a([g,B.e1(B.b3(r,r,r,new C.bcZ(e,p,r),A.au),!0,r)],x.p),r)
case"crest":s=Math.sin(e)
return new B.an(A.A,r,A.aa,A.f,B.a([B.bY(0,B.e1(B.eb(A.A,B.c_(r,new B.o(r,r,r,r,r,new B.bT(A.A,0.5,A.x,r,0,B.a([p.j(0.35+s*0.12),p.j(0)],x.O),r,r),A.a6),A.bd),1.6+s*0.15,r,r),!0,r),0,0,0),B.eC(A.A,s*0.06,B.eb(A.A,g,1+s*0.05,r,r),r)],x.p),r)}return g},
fxi:function fxi(d,e){this.a=d
this.b=e},
bdX:function bdX(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bdE:function bdE(d,e,f){this.b=d
this.c=e
this.a=f},
bmt:function bmt(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
b8z:function b8z(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
b8c:function b8c(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
btl:function btl(d,e,f){this.b=d
this.c=e
this.a=f},
bqo:function bqo(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bpx:function bpx(d,e,f){this.b=d
this.c=e
this.a=f},
bcZ:function bcZ(d,e,f){this.b=d
this.d=e
this.a=f},
d5n:function d5n(d,e,f,g,h){var _=this
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
fxl(d){var w=d.db
return A.a.a0(w,"marriage_sign_")&&!A.a.a0(w,"marriage_sign_placed_")&&d.b!==D.kS},
hZp(d,e){var w,v,u,t,s,r,q,p,o,n,m,l="marriage_locked_box_",k="marriage_field_",j=B.a([],x.u)
for(w=d.z,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u){t=w[u]
if(A.a.a0(t.db,l))continue
if(Math.abs(t.d+t.f*0.5-e)<0.03)j.push(t)}if(j.length<2)return
A.d.b_(j,new C.fxm())
s=A.d.gK(j).c
for(w=j.length,u=0;u<j.length;j.length===w||(0,B.L)(j),++u){t=j[u]
r=s-t.c
if(Math.abs(r)>0.0001){t.c=s
v=t.db
if(A.a.a0(v,k)){q=A.d.gK(B.aP3(v,k,"",0).split(":"))
for(v=d.z,p=v.length,o=l+q,n=0;n<p;++n){m=v[n]
if(m.db===o)m.c+=r}}}s+=t.e+0.006}},
hZo(d,e){var w,v,u,t,s,r=d.db
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
afF(d,a0,a1,a2,a3,a4){var w=0,v=B.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$afF=B.e(function(a5,a6){if(a5===1)return B.f(a6,v)
for(;;)switch(w){case 0:f=B.U(a4).k("a2<1>")
e=B.B(new B.a2(a4,new C.fpI(),f),f.k("J.E"))
w=!a2&&e.length!==0?3:4
break
case 3:w=5
return B.b(B.bX(A.dF,null,new C.fpJ(e),d,!0,!0,!1,A.ln,!1,!1,x.N),$async$afF)
case 5:t=a6
if(t==="continue"){a1.$1(A.d.gK(e).hA())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.fX0(d),$async$afF)
case 6:s=a6
if(s==null||d.e==null){w=1
break}r=A.a.i(a3==null?"":a3)
w=r.length!==0?7:9
break
case 7:a6=r
w=8
break
case 9:w=10
return B.b(B.KF(d,"Search states\u2026","",A.jY,"Choose state"),$async$afF)
case 10:case 8:q=a6
if(q==null||d.e==null){w=1
break}p=C.fVW(s)
if(p==null)p=A.d.gK(D.Q2)
f=C.cC()
o=A.a.i(q)
if(o.length===0)o=null
n=C.cC()
m=p.e
l=C.fxn(p.d)
k=x.u
j=B.a([C.eo(A.bg,!1,4279310375,A.aD,"marriage_locked_bg",4280640491,24,A.bl,A.a4,"",1,C.cC(),l,"","",0,!1,"",0,D.be,4280172719,2,"",0,0,"",D.cg,D.lk,1,0,0)],k)
i=p.f
h=x.F
k=B.B(B.a([C.Ch(i,0.016,D.kT,4291404327,0.8,"ring_jewel",0.028,0.42544,0.008),C.Ch(0,0.058,D.eI,4291404327,2.4,"ring_l",0.058,0.39064,0.026),C.Ch(0,0.058,D.eI,4291404327,2.4,"ring_r",0.058,0.41963999999999996,0.026)],k),h)
k.push(C.K4("HATI YA NDOA",A.L,i,32,A.u,0.048,"title",0.78,0.11,0.086))
k.push(C.K4("Hati ya Makubaliano ya Ndoa",A.L,i,12,A.a4,0.018,"subtitle",0.78,0.11,0.134))
A.d.v(k,C.fSX(0.2,0.154,0.6,4291404327,i))
A.d.v(k,C.by8("TAARIFA ZA WANANDOA",0.176,0.2,0.6,i))
A.d.v(k,C.a0w("Jina la Mume:","groom_name",0.11,0.218,0.78,11,i,""))
A.d.v(k,C.a0w("Jina la Mke:","bride_name",0.11,0.25,0.78,11,i,""))
A.d.v(k,C.a0w("Tarehe ya Ndoa:","tarehe",0.11,0.282,0.78,11,i,""))
A.d.v(k,C.a0w("Mahali:","bride_house",0.11,0.314,0.78,11,i,""))
A.d.v(k,C.by8("TAMKO LA MAKUBALIANO",0.35,0.2,0.6,i))
k.push(C.Ch(m,0.082,D.be,4291404327,1.15,"intro_frame",0.792,0.104,0.384))
g=C.cC()
k.push(C.eo(A.bg,!1,i,A.aD,"marriage_field_utangulizi:"+A.k.aa(0.78,3),4280640491,9.5,A.bl,A.cv,"",0.074,g,null,"","",0,!1,"",0,D.be,4280172719,2,y.O,0,0,"",D.cg,D.cQ,0.78,0.11,0.388))
A.d.v(k,C.fSX(0.22,0.47,0.56,4291404327,i))
A.d.v(k,C.by8("MASHAHIDI",0.49,0.26,0.48,i))
A.d.v(k,C.hc9("Shahidi wa Mume",0.11,0.528,0.37,i,4294967295))
A.d.v(k,C.hc9("Shahidi wa Mke",0.52,0.528,0.37,i,4294967295))
A.d.v(k,C.a0w("Jina:","witness_mume_1_name",0.11,0.564,0.37,10,i,""))
A.d.v(k,C.a0w("Jina:","witness_mke_1_name",0.52,0.564,0.37,10,i,""))
A.d.v(k,C.by7("witness_mume_1",0.11,0.596,0.37,i))
A.d.v(k,C.by7("witness_mke_1",0.52,0.596,0.37,i))
A.d.v(k,C.by8("SAHIHI ZA WANANDOA",0.64,0.2,0.6,i))
k.push(C.K4("Mume",A.L,i,11,A.u,0.016,"mume_h",0.37,0.11,0.678))
k.push(C.K4("Mke",A.L,i,11,A.u,0.016,"mke_h",0.37,0.52,0.678))
A.d.v(k,C.by7("mchumba_mume",0.11,0.7,0.37,i))
A.d.v(k,C.by7("mchumba_mke",0.52,0.7,0.37,i))
A.d.v(k,C.by8("MWANDISHI / MSIMAMIZI",0.744,0.18,0.64,i))
A.d.v(k,C.a0w("Jina:","mwandishi",0.11,0.784,0.26,10,i,""))
A.d.v(k,C.by7("witness_mume_2",0.38,0.784,0.26,i))
A.d.v(k,C.a0w("Tarehe:","mchumba_mume_tarehe",0.65,0.784,0.24,10,i,""))
h=B.B(C.fSX(0.22,0.83,0.56,4291404327,i),h)
h.push(C.K4("NGMY",A.L,i,13,A.u,0.022,"ngmy_mark",0.6,0.2,0.846))
h.push(C.K4("Nakala ya Hati",A.L,4291404327,9,A.a4,0.016,"ngmy_sub",0.6,0.2,0.866))
A.d.v(k,h)
A.d.v(j,k)
a0.$1(C.Bd(null,null,null,null,D.o2,5,!1,"marriage_agreement",null,null,null,null,f,null,!1,o,p.b,null,null,B.a([C.rh(m,null,0,0,j,n,D.q_,"","","Hati ya Ndoa",D.dd)],x.g),"marriage_"+p.a,null,!1,null))
case 1:return B.h(u,v)}})
return B.i($async$afF,v)},
fxm:function fxm(){},
fpI:function fpI(){},
fpJ:function fpJ(d){this.a=d},
fpG:function fpG(d){this.a=d},
fpH:function fpH(d){this.a=d},
hO8(d){var w=d.a
if(1===w)return"underline"
if(4===w)return"lineThrough"
return"none"},
hO7(d){var w=d==null?null:J.k(d)
switch(w==null?"none":w){case"underline":return A.mA
case"lineThrough":return A.zf
default:return A.aD}},
eo(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){return new C.eI(o,a7,a9,b0,a8,n,a2,j,l,k,g,f,d,p,w,i,a0,a1,v,e,h,s,a6,a3,r,q,m,u,a5,t,a4)},
hec(d){var w,v,u=J.k(d==null?"fade":d)
for(w=0;w<22;++w){v=D.PP[w]
if(v.b===u)return v}return D.dd},
hKw(d){var w,v,u=J.k(d==null?"text":d)
for(w=0;w<6;++w){v=D.cN5[w]
if(v.b===u)return v}return D.cQ},
hQV(d){var w,v,u=J.k(d==null?"rectangle":d)
for(w=0;w<7;++w){v=D.dav[w]
if(v.b===u)return v}return D.be},
rh(d,e,f,g,h,i,j,k,l,m,n){return new C.lB(i,m,k,j,d,e,n,g,l,f,h==null?B.a([],x.u):h)},
h4T(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=d.h(0,"id")
l=J.k(l==null?"":l)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"notes")
v=J.k(v==null?"":v)
u=C.hMw(d.h(0,"layout"))
t=B.aJ(d.h(0,"background"))
t=t==null?m:A.k.N(t)
if(t==null)t=4294967295
s=B.aJ(d.h(0,"backgroundEnd"))
s=s==null?m:A.k.N(s)
r=C.hec(d.h(0,"transition"))
q=B.aJ(d.h(0,"durationSeconds"))
q=q==null?m:A.k.N(q)
if(q==null)q=0
p=d.h(0,"slideDesignId")
p=J.k(p==null?"":p)
o=B.aJ(d.h(0,"designRevision"))
o=o==null?m:A.k.N(o)
if(o==null)o=0
n=x.c.a(d.h(0,"elements"))
if(n==null)n=m
else{n=J.d8(n,x.f)
n=B.cD(n,new C.cck(),n.$ti.k("J.E"),x.F)
n=B.B(n,B.a3(n).k("J.E"))}return C.rh(t,s,o,q,n==null?B.a([],x.u):n,l,u,v,p,w,r)},
hMw(d){var w,v,u=J.k(d==null?"titleContent":d)
for(w=0;w<9;++w){v=D.anL[w]
if(v.b===u)return v}return D.mu},
Bd(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,a0,a1,a2,a3,a4){var w=a4==null?new B.S(Date.now(),0,!1):a4
return new C.hZ(p,t,a1,h,i,w,a0==null?B.a([C.rh(4294967295,null,0,0,null,C.cC(),D.q_,"","","",D.dd)],x.g):a0,k,s,a2,a3,d,v,u,q,j,r,f,g,e,m,o,n,l)},
Vi(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4="deckKind",a5=a6.h(0,"id")
a5=J.k(a5==null?"":a5)
w=a6.h(0,"name")
w=J.k(w==null?"Untitled Presentation":w)
v=a6.h(0,"themeId")
v=J.k(v==null?"office_blue":v)
u=C.hIG(a6.h(0,"aspectRatio"))
t=B.aJ(a6.h(0,"autoAdvanceSeconds"))
t=t==null?a3:A.o.D(A.k.N(t),1,120)
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
m=B.aJ(a6.h(0,"signatureStrokeWidth"))
if(m==null)m=a3
l=B.aJ(a6.h(0,"signatureInkColor"))
l=l==null?a3:A.k.N(l)
k=a6.h(0,"kiapoSignedAt")
k=k==null?a3:J.k(k)
j=J.z(a6.h(0,"cinematic"),!0)
i=J.z(a6.h(0,"loop"),!0)
h=a6.h(0,"aiOutlineJson")
h=h==null?a3:J.k(h)
g=x.c
f=g.a(a6.h(0,"aiSlideIds"))
if(f==null)f=a3
else{f=J.b6(f,new C.cc7(),x.N)
f=B.B(f,f.$ti.k("ak.E"))}e=g.a(a6.h(0,"aiExtras"))
if(e==null)e=a3
else{e=J.b6(e,new C.cc8(),x.N)
e=B.B(e,e.$ti.k("ak.E"))}d=a6.h(0,"finaleStyle")
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
g=B.cD(g,new C.cc9(),g.$ti.k("J.E"),x.bt)
g=B.B(g,B.a3(g).k("J.E"))}return C.Bd(n,e,h,f,u,t,j,r,a2,d,a1,a0,a5,k,i,q,w,l,m,g==null?B.a([C.rh(4294967295,a3,0,0,a3,C.cC(),D.q_,"","","",D.dd)],x.g):g,v,p,o,s)},
kr(d){return d==="marriage_agreement"||d==="hati_kuhowa"||d==="hati_kuhoweya"||d==="hati_malipo_awamu"||d==="hati_kiapo_uongozi"},
hIG(d){var w,v,u=J.k(d==null?"landscape169":d)
for(w=0;w<2;++w){v=D.dbk[w]
if(v.b===u)return v}return D.Cg},
cC(){var w=Date.now(),v=$.iX
$.iX=v+1
return""+1000*w+"_"+v},
ccB(d,e,f){var w,v,u,t,s,r,q,p=null,o="Click to add title",n=4280640491,m=4280172719,l=4279310375
d.d=e
A.d.a9(d.z)
if(e!==D.Ch){d.e=f.f.l()
w=f.r
d.f=w==null?p:w.l()}switch(e.a){case 0:break
case 1:w=d.z
v=C.cC()
v=C.eo(A.L,!1,f.d.l(),A.aD,"",n,40,A.bl,A.u,"",0.2,v,p,"","",0,!1,"",0,D.be,m,2,o,0,0,"",D.cg,D.cQ,0.84,0.08,0.3)
u=C.cC()
A.d.v(w,B.a([v,C.eo(A.L,!1,f.e.l(),A.aD,"",n,20,A.bl,A.cv,"",0.12,u,p,"","",0,!1,"",0,D.be,m,2,"Click to add subtitle",0,0,"",D.cg,D.cQ,0.76,0.12,0.58)],x.u))
break
case 2:w=d.z
v=C.cC()
v=C.eo(A.bg,!1,f.d.l(),A.aD,"",n,32,A.bl,A.u,"",0.14,v,p,"","",0,!1,"",0,D.be,m,2,o,0,0,"",D.cg,D.cQ,0.88,0.06,0.06)
u=C.cC()
A.d.v(w,B.a([v,C.eo(A.bg,!0,f.e.l(),A.aD,"",n,20,A.bl,A.cv,"",0.68,u,p,"","",0,!1,"",0,D.be,m,2,"\u2022 Tap text to select, then Edit to type\n\u2022 Use Format for size & color\n\u2022 Add images and shapes from Insert",0,0,"",D.cg,D.cQ,0.88,0.06,0.24)],x.u))
break
case 3:w=d.z
v=C.cC()
v=C.eo(A.bg,!1,f.d.l(),A.aD,"",n,30,A.bl,A.u,"",0.12,v,p,"","",0,!1,"",0,D.be,m,2,"Two Column Slide",0,0,"",D.cg,D.cQ,0.88,0.06,0.06)
u=C.cC()
t=f.e
u=C.eo(A.bg,!0,t.l(),A.aD,"",n,18,A.bl,A.a4,"",0.7,u,p,"","",0,!1,"",0,D.be,m,2,"Left column\n\n\u2022 Point A\n\u2022 Point B",0,0,"",D.cg,D.cQ,0.42,0.06,0.22)
s=C.cC()
A.d.v(w,B.a([v,u,C.eo(A.bg,!0,t.l(),A.aD,"",n,18,A.bl,A.a4,"",0.7,s,p,"","",0,!1,"",0,D.be,m,2,"Right column\n\n\u2022 Point C\n\u2022 Point D",0,0,"",D.cg,D.cQ,0.42,0.52,0.22)],x.u))
break
case 4:w=f.c
d.e=w.l()
d.f=w.j(0.85).l()
A.d.L(d.z,C.eo(A.L,!1,4294967295,A.aD,"",n,42,A.bl,A.u,"",0.2,C.cC(),p,"","",0,!1,"",0,D.be,m,2,"Section Header",0,0,"",D.cg,D.cQ,0.84,0.08,0.38))
break
case 5:w=d.z
v=C.cC()
v=C.eo(A.bg,!1,f.d.l(),A.aD,"",n,30,A.bl,A.u,"",0.12,v,p,"","",0,!1,"",0,D.be,m,2,"Compare",0,0,"",D.cg,D.cQ,0.88,0.06,0.06)
u=C.cC()
t=f.c
u=C.eo(A.bg,!1,l,A.aD,"",t.j(0.12).l(),24,A.bl,A.a4,"",0.68,u,p,"","",0,!1,"",0,D.be,t.l(),2,"",0,0,"",D.cg,D.f_,0.42,0.06,0.22)
s=C.cC()
r=f.e
s=C.eo(A.bg,!1,r.l(),A.aD,"",n,20,A.bl,A.O,"",0.6,s,p,"","",0,!1,"",0,D.be,m,2,"Option A",0,0,"",D.cg,D.cQ,0.38,0.08,0.26)
q=C.cC()
t=C.eo(A.bg,!1,l,A.aD,"",t.j(0.06).l(),24,A.bl,A.a4,"",0.68,q,p,"","",0,!1,"",0,D.be,t.j(0.5).l(),2,"",0,0,"",D.cg,D.f_,0.42,0.52,0.22)
q=C.cC()
A.d.v(w,B.a([v,u,s,t,C.eo(A.bg,!1,r.l(),A.aD,"",n,20,A.bl,A.O,"",0.6,q,p,"","",0,!1,"",0,D.be,m,2,"Option B",0,0,"",D.cg,D.cQ,0.38,0.54,0.26)],x.u))
break
case 6:w=d.z
v=C.cC()
v=C.eo(A.L,!1,f.d.l(),A.aD,"",n,36,A.bl,A.u,"",0.35,v,p,"","",0,!1,"",0,D.be,m,2,"TERM / QUESTION",0,0,"",D.cg,D.cQ,0.8,0.1,0.12)
u=C.cC()
A.d.v(w,B.a([v,C.eo(A.L,!1,f.e.l(),A.aD,"",n,22,A.bl,A.cv,"",0.35,u,p,"","",0,!1,"",0,D.be,m,2,"Definition or answer \u2014 flip mentally when presenting",0,0,"",D.cg,D.cQ,0.8,0.1,0.52)],x.u))
break
case 7:w=d.z
v=C.cC()
v=C.eo(A.bg,!1,f.d.l(),A.aD,"",n,28,A.bl,A.u,"",0.18,v,p,"","",0,!1,"",0,D.be,m,2,"Quiz Question",0,0,"",D.cg,D.cQ,0.88,0.06,0.06)
u=C.cC()
A.d.v(w,B.a([v,C.eo(A.bg,!1,f.e.l(),A.aD,"",n,20,A.bl,A.a4,"",0.62,u,p,"","",0,!1,"",0,D.be,m,2,"A) Answer choice\nB) Answer choice\nC) Answer choice\nD) Answer choice",0,0,"",D.cg,D.cQ,0.84,0.08,0.28)],x.u))
break
case 8:w=d.z
v=C.cC()
v=C.eo(A.bg,!1,f.d.l(),A.aD,"",n,26,A.bl,A.u,"",0.1,v,p,"","",0,!1,"",0,D.be,m,2,"Worksheet / Assignment",0,0,"",D.cg,D.cQ,0.88,0.06,0.04)
u=C.cC()
A.d.v(w,B.a([v,C.eo(A.bg,!1,f.e.l(),A.aD,"",n,18,A.bl,A.a4,"",0.78,u,p,"","",0,!1,"",0,D.be,m,2,"Name: _______________\nDate: _______________\n\n1. _________________________________\n\n2. _________________________________\n\n3. _________________________________",0,0,"",D.cg,D.cQ,0.88,0.06,0.16)],x.u))
break}},
hAm(d){return A.d.dL(D.a1z,new C.ccC(d),new C.ccD())},
hAj(d){var w,v,u,t,s,r,q,p
if(A.a.i(d).length===0)return B.a([],x.D)
try{w=A.R.aG(0,d,null)
if(!x.j.b(w)){t=B.a([],x.D)
return t}v=B.a([],x.D)
for(t=J.aV(w),s=x.N,r=x.z,q=x.f;t.C();){u=t.gU(t)
if(!q.b(u))continue
try{J.ch(v,C.Vi(B.a1(u,s,r)))}catch(p){}}return v}catch(p){t=B.a([],x.D)
return t}},
fPu(d,e){var w,v,u,t=B.T(x.N,x.I),s=new C.ccx(t)
for(w=J.aV(d);w.C();)s.$1(w.gU(w))
for(w=e.length,v=0;v<e.length;e.length===w||(0,B.L)(e),++v)s.$1(e[v])
w=t.$ti.k("bc<2>")
u=B.B(new B.bc(t,w),w.k("J.E"))
A.d.b_(u,new C.ccw())
return u},
h4W(d,e){var w,v,u=d.length
if(u===0)return e
w=e.length
if(w===0)return d
v=new C.ccs()
if(u!==w)return u>=w?d:e
return v.$1(d).cc(v.$1(e))?d:e},
aq3(d){return C.hAh(d)},
hAh(d){var w=0,v=B.j(x.R),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$aq3=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=A.a.i(d.toLowerCase())
l=new C.ccv()
k=x.D
j=B.a([],k)
t=4
g=l
w=7
return B.b(B.a1I(m),$async$aq3)
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
return B.b(B.az(),$async$aq3)
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
case 11:o=l.$1($.h4V.h(0,m))
n=C.fPu(C.fPu(j,r),o)
if(n.length===0){u=C.h4W(C.h4W(j,r),o)
w=1
break}u=n
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$aq3,v)},
ccr(d){return C.hAg(d)},
hAg(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o
var $async$ccr=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.az(),$async$ccr)
case 7:r=f
q=r.rU("ngmy_slides_deleted_"+A.a.i(d.toLowerCase()))
if(q==null)q=A.T
q=B.kz(q,B.U(q).c)
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
return B.i($async$ccr,v)},
b_Q(d,e){return C.hAi(d,e)},
hAi(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m
var $async$b_Q=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$b_Q)
case 6:s=g
q=s.rU("ngmy_slides_deleted_"+A.a.i(d.toLowerCase()))
if(q==null)q=B.a([],x.s)
A.d.L(q,e)
r=q
p=A.a.i(d.toLowerCase())
o=J.ad(r)>500?J.KP(r,J.ad(r)-500):r
w=7
return B.b(s.ar("StringList","ngmy_slides_deleted_"+p,o),$async$b_Q)
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
return B.i($async$b_Q,v)},
Vj(d,e){return C.hAk(d,e)},
hAk(a3,a4){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$Vj=B.e(function(a5,a6){if(a5===1){s.push(a6)
w=t}for(;;)switch(w){case 0:a0=A.a.i(a3.toLowerCase())
if(J.ad(a0)===0){w=1
break}p=$.h4U.h(0,a0)
w=p==null?3:4
break
case 3:w=5
return B.b(C.aq3(a3),$async$Vj)
case 5:p=a6
case 4:w=6
return B.b(C.ccr(a3),$async$Vj)
case 6:o=a6
n=B.T(x.N,x.I)
for(m=J.aV(p);m.C();){l=m.gU(m)
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
e=B.B(new B.a2(new B.bc(n,m),new C.ccy(o),l),l.k("J.E"))
A.d.b_(e,new C.ccz())
$.h4U.n(0,a0,e)
n=B.U(e).k("K<1,a4<n,@>>")
n=B.B(new B.K(e,new C.ccA(),n),n.k("ak.E"))
r=A.R.ao(n,null)
$.h4V.n(0,a0,r)
t=8
w=11
return B.b(B.ags(a0,r),$async$Vj)
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
return B.b(B.az(),$async$Vj)
case 16:q=a6
w=17
return B.b(q.ar("String","ngmy_slides_decks_"+A.a.i(a3.toLowerCase()),r),$async$Vj)
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
return B.i($async$Vj,v)},
If:function If(d,e){this.a=d
this.b=e},
aq1:function aq1(d,e){this.a=d
this.b=e},
uu:function uu(d,e){this.a=d
this.b=e},
mq:function mq(d,e){this.a=d
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
lB:function lB(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
ccl:function ccl(){},
ccm:function ccm(){},
cck:function cck(){},
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
cca:function cca(){},
ccb:function ccb(){},
cc7:function cc7(){},
cc8:function cc8(){},
cc9:function cc9(){},
jB:function jB(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
ccC:function ccC(d){this.a=d},
ccD:function ccD(){},
ccx:function ccx(d){this.a=d},
ccw:function ccw(){},
ccs:function ccs(){},
cct:function cct(){},
ccu:function ccu(){},
ccv:function ccv(){},
ccy:function ccy(d){this.a=d},
ccz:function ccz(){},
ccA:function ccA(){},
hZA(d,e){var w=x.N,v=B.T(w,x.F)
w=new C.fxV(e,v,d,B.aX(w))
w.$1(new C.fxR())
w.$1(new C.fxS())
w.$1(new C.fxT())
w.$1(new C.fxU())
return v},
fxV:function fxV(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fxR:function fxR(){},
fxS:function fxS(){},
fxT:function fxT(){},
fxU:function fxU(){},
b_N:function b_N(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ccg:function ccg(d){this.a=d},
ccf:function ccf(){},
cch:function cch(){},
cci:function cci(d,e){this.a=d
this.b=e},
ccj:function ccj(d){this.a=d},
anf:function anf(d,e){this.c=d
this.a=e},
bhM:function bhM(d,e){var _=this
_.d=$
_.bq$=d
_.a7$=e
_.c=_.a=null},
dE6:function dE6(){},
aJY:function aJY(){},
cco(d,e,f){var w=0,v=B.j(x.y),u,t
var $async$cco=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:if(f){u=!0
w=1
break}t=A.a.i(e)
if(t.length===0){if(d.e!=null)d.I(x.q).f.R(D.eOW)
u=!1
w=1
break}u=B.kP(!1,d,t,!1,null,A.a49,null)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$cco,v)},
hAe(d){var w=A.d.ba(D.GB,new C.ccp(d))
if(w<0)return!0
return w>=4},
hAf(d){var w=A.d.ba($.bCA(),new C.ccq(d))
if(w<0)return!0
return w>=5},
ccp:function ccp(d){this.a=d},
ccq:function ccq(d){this.a=d},
i0f(d,e,f){var w,v=null,u=""+f,t="ngmy-pdf-"+A.a.gX(d)+"-"+u,s=f>0?d+"#page="+u:d
$.yh()
$.q2().pA(t,new C.fAJ(s),!0)
u=B.a([B.Dr(v,A.q3,t)],x.p)
if(e.length!==0){w=B.m(4)
u.push(B.ao(v,B.p(v,B.d(e,v,v,v,v,v,v,D.eZ8,v,v,v),A.f,v,v,new B.o(A.aX,v,v,w,v,v,A.n),v,v,v,v,A.n6,v,v,v),v,v,4,v,4,v))}return new B.an(A.W,v,A.b_,A.r,u,v)},
fAJ:function fAJ(d){this.a=d},
i_R(){return C.fWh()},
hXO(){return C.bAv()},
hZR(){return C.fW8()},
aO8(d,e,f){var w=0,v=B.j(x.H),u
var $async$aO8=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:w=e==="__ngmy_slides_pdf_staged__"?3:4
break
case 3:w=5
return B.b(C.fzP(d,f),$async$aO8)
case 5:w=1
break
case 4:if(d.e!=null)d.I(x.q).f.R(B.b2(null,null,null,null,null,A.r,null,B.d(e,null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$aO8,v)},
fzP(d,e){var w=0,v=B.j(x.H),u
var $async$fzP=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:u=$.byG
if(u==null)u=e+".pdf"
w=2
return B.b(B.bX(A.K,null,new C.fzQ(u,e==="Invoice"),d,!0,!1,!0,null,!1,!1,x.H),$async$fzP)
case 2:return B.h(null,v)}})
return B.i($async$fzP,v)},
fzQ:function fzQ(d,e){this.a=d
this.b=e},
acx:function acx(d,e,f){this.c=d
this.d=e
this.a=f},
emx:function emx(d,e){this.a=d
this.b=e},
emy:function emy(d,e){this.a=d
this.b=e},
emz:function emz(d,e){this.a=d
this.b=e},
emA:function emA(d){this.a=d},
acP:function acP(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
b_M(d,e,f,g,h,i,j,k,l,m,n,o){return new C.b_L(g,m,f,d,e,h,l,k,j,o,i,null)},
hh7(d){return B.co(new C.fxQ(d))},
fWj(d){switch(d.a){case 0:return"\u23ed\ufe0f"
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
i_Z(d){if(d===D.cg)return"None"
return C.fWj(d)},
bzb(d,e,f,g){return C.hR1(d,e,f,g)},
hR1(d,e,f,g){var w=0,v=B.j(x.H),u,t,s
var $async$bzb=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:s={}
if(d.e==null){w=1
break}t=B.a6(d,!0)
if($.fTf&&t.pj())t.eI()
$.fTf=!0
s.a=null
w=3
return B.b(B.hR(A.bh,!0,"Animation preview",d,new C.fiy(s,e,g,f),null,A.eE,!0,x.H),$async$bzb)
case 3:s=s.a
if(s!=null)s.a8(0)
$.fTf=!1
case 1:return B.h(u,v)}})
return B.i($async$bzb,v)},
fK3(d,e,f){var w=0,v=B.j(x.H),u,t,s,r
var $async$fK3=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:e.$0()
if(d.e==null){w=1
break}t=A.k.D(B.aI(d,A.bT,x.w).w.a.a*0.88,280,440)
s=f===D.cg
r=s?"\u23ed\ufe0f None \u2014 no slide transition":C.fWj(f)+" Slide transition preview"
s=s?Af.EV:A.v0
w=3
return B.b(C.bzb(d,s,new B.a7(t,t*0.56,B.bw(B.m(14),new C.aHz(f,null),A.aq),null),r),$async$fK3)
case 3:case 1:return B.h(u,v)}})
return B.i($async$fK3,v)},
hgq(d,e,f){var w,v,u=null,t=A.cr.av(0,A.k.D(e,0,1))
switch(d.a){case 0:return f
case 1:case 13:case 18:return B.db(f,t)
case 2:case 17:return B.dW(B.db(f,t),new B.u((1-t)*48,0))
case 3:return B.dW(B.db(f,t),new B.u(-(1-t)*48,0))
case 4:case 21:return B.dW(B.db(f,t),new B.u(0,(1-t)*36))
case 5:return B.dW(B.db(f,t),new B.u(0,-(1-t)*36))
case 6:case 16:return B.eb(A.A,B.db(f,t),0.5+t*0.5,u,u)
case 7:return B.eb(A.A,B.db(f,t),1.4-t*0.4,u,u)
case 8:w=B.dl()
v=w.a
v.$flags&2&&B.ai(v)
v[11]=0.001
w.fv((1-t)*1.2)
return B.fs(A.A,B.db(f,t),u,w,!0)
case 9:w=B.dl()
v=w.a
v.$flags&2&&B.ai(v)
v[11]=0.001
w.jR((1-t)*1.2)
return B.fs(A.A,B.db(f,t),u,w,!0)
case 10:case 19:w=B.dl()
v=w.a
v.$flags&2&&B.ai(v)
v[11]=0.002
w.mC((1-t)*0.8)
v=0.6+t*0.4
w.jA(v,v,v,1)
return B.fs(A.A,B.db(f,t),u,w,!0)
case 11:case 12:case 14:case 15:case 20:return B.dW(B.db(f,t),new B.u((1-t)*24,0))}},
bC5(d,e,f){var w=0,v=B.j(x.H),u,t,s,r
var $async$bC5=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:e.$0()
if(d.e==null){w=1
break}t=A.k.D(B.aI(d,A.bT,x.w).w.a.a*0.88,300,440)
s=f===D.cg
r=s?"\u23ed\ufe0f None \u2014 no element animation":C.fWj(f)+" Element animation preview"
s=s?Af.EV:A.v0
w=3
return B.b(C.bzb(d,s,new B.a7(t,t*0.62,B.bw(B.m(14),new C.ayj(f,null),A.aq),null),r),$async$bC5)
case 3:case 1:return B.h(u,v)}})
return B.i($async$bC5,v)},
i_Y(d){var w,v,u,t,s=$.af7.W(0,d)
if(s!=null){$.af7.n(0,d,s)
return s}w=A.cE.aJ(A.a.b0(d,A.a.cJ(d,",")+1))
$.af7.n(0,d,w)
v=$.fU2=$.fU2+w.length
u=B.a3($.af7).k("ct<1>")
for(;;){if(!(v>41943040&&$.af7.a>1))break
t=new B.ct($.af7,u).gaf(0)
if(!t.C())B.ba(B.fA())
v-=$.af7.W(0,t.gU(0)).length
$.fU2=v}return w},
i_F(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=B.af("\\*([^*]+)\\*|\\^([^^]+)\\^|~([^~]+)~",!0,!1,!1,!1).kR(0,d),j=B.B(k,B.a3(k).k("J.E"))
if(j.length===0)return l
w=e.r
if(w==null)w=24
v=B.a([],x.aF)
for(k=j.length,u=w*0.62,t=w*2.4,s=w*1.6,r=0,q=0;q<j.length;j.length===k||(0,B.L)(j),++q){p=j[q].b
o=p.index
if(o>r){n=A.a.ap(d,r,o)
m=f.$1(e)
v.push(new B.ep(n,l,l,A.cO,l,l,l,l,l,l,m))}n=p[1]
if(n!=null){m=f.$1(e.S7(s,A.u))
v.push(new B.ep(n,l,l,A.cO,l,l,l,l,l,l,m))}else{n=p[2]
if(n!=null){m=f.$1(e.S7(t,A.u))
v.push(new B.ep(n,l,l,A.cO,l,l,l,l,l,l,m))}else{n=p[3]
m=f.$1(e.S7(u,A.cv))
v.push(new B.ep(n,l,l,A.cO,l,l,l,l,l,l,m))}}r=o+p[0].length}if(r<d.length){k=A.a.b0(d,r)
v.push(B.dr(l,l,l,l,l,l,l,l,l,f.$1(e),k))}return v},
a1H(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=x.v
switch(d){case"circle":m=new B.aQ($.X().r,A.ap,n,n,B.a([],m))
m.E(new B.ku(e))
return m
case"rounded":m=new B.aQ($.X().r,A.ap,n,n,B.a([],m))
w=e.gef()*0.18
m.E(new B.iT(B.bA(e,new B.aW(w,w))))
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
m.b8o(new B.u(t,p),new B.aW(s,s))
m.E(new B.ap(t,u))
m.E(new B.bF())
return m
default:m=new B.aQ($.X().r,A.ap,n,n,B.a([],m))
m.E(new B.nX(e))
return m}},
fvp(d,e,f){return B.co(new C.fvq(D.eHB.t(0,d),d,f,e))},
b_L:function b_L(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
cce:function cce(d){this.a=d},
ccd:function ccd(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ccc:function ccc(){},
b_I:function b_I(d,e){this.b=d
this.a=e},
fxQ:function fxQ(d){this.a=d},
fxP:function fxP(d,e){this.a=d
this.b=e},
fiy:function fiy(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fiw:function fiw(d){this.a=d},
fix:function fix(d,e){this.a=d
this.b=e},
aHz:function aHz(d,e){this.c=d
this.a=e},
bsS:function bsS(d,e){var _=this
_.d=$
_.bq$=d
_.a7$=e
_.c=_.a=null},
f0T:function f0T(d,e,f){this.a=d
this.b=e
this.c=f},
aIb:function aIb(d,e){this.b=d
this.a=e},
Uk:function Uk(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bhZ:function bhZ(d,e){var _=this
_.d=$
_.bq$=d
_.a7$=e
_.c=_.a=null},
dQ6:function dQ6(d){this.a=d},
dQ5:function dQ5(d){this.a=d},
dQ4:function dQ4(d){this.a=d},
Ie:function Ie(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cc6:function cc6(d){this.a=d},
cc5:function cc5(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ayj:function ayj(d,e){this.c=d
this.a=e},
bcs:function bcs(){this.d=0
this.c=this.a=null},
d2C:function d2C(d){this.a=d},
d2B:function d2B(d){this.a=d},
a71:function a71(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
biD:function biD(d,e){var _=this
_.d=null
_.bq$=d
_.a7$=e
_.c=_.a=null},
ea9:function ea9(d,e,f){this.a=d
this.b=e
this.c=f},
aYH:function aYH(d,e,f,g){var _=this
_.c=d
_.e=e
_.f=f
_.a=g},
bdC:function bdC(d,e,f){this.b=d
this.c=e
this.a=f},
bou:function bou(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
eRc:function eRc(){},
fvq:function fvq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bpu:function bpu(d,e,f){this.b=d
this.c=e
this.a=f},
aKb:function aKb(){},
aKH:function aKH(){},
aM1:function aM1(){},
fyQ(){var w=0,v=B.j(x.a6),u,t,s,r
var $async$fyQ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.wQ.c5().Lx(D.d8B,A.tC,!0),$async$fyQ)
case 3:r=e
if(r==null||J.cl(r.a)){u=null
w=1
break}t=J.fo(r.a)
s=t.c
if(s==null)throw B.V("That file could not be opened. Try another file.")
if(s.length>8388608)throw B.V("That file is too big. Use a file under 8 MB.")
u=C.i_z(t.b,s)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fyQ,v)},
i_z(d,e){var w,v=d.toLowerCase()
if(A.a.cb(v,".pdf"))return new C.a7k(d,new B.a_l(A.cS.gcv().aJ(e),"application/pdf"),"")
if(A.a.cb(v,".docx")){w=C.hSD(e)
if(A.a.i(w).length===0)throw B.V("No readable words were found in that Word file.")
return new C.a7k(d,null,w.length>6e4?A.a.ap(w,0,6e4):w)}w=A.c4.Km(0,e,!0)
if(A.a.i(w).length===0)throw B.V("That file is empty.")
return new C.a7k(d,null,w.length>6e4?A.a.ap(w,0,6e4):w)},
hSD(d){var w,v,u,t,s,r,q,p,o=null,n=new C.cv6().cGS(B.r1(d,A.hT,o,o),o,o,!1).cIz(0,"word/document.xml")
if(n==null)return""
w=n.cQz()
v=A.c4.Km(0,w==null?$.hjl():w,!0).split("</w:p>")
u=new B.fd("")
for(w=v.length,t=x.N,s=0;s<w;++s){r=v[s]
q=B.af("<w:t[^>]*>([^<]*)</w:t>",!0,!1,!1,!1).kR(0,r)
p=A.a.i(B.cD(q,new C.fln(),B.a3(q).k("J.E"),t).fW(0))
if(p.length!==0){q=B.aK(p,"&lt;","<")
q=B.aK(q,"&gt;",">")
q=B.aK(q,"&quot;",'"')
q=B.aK(q,"&apos;","'")
q=B.aK(q,"&amp;","&")+"\n"
u.a+=q}}w=u.a
return w.charCodeAt(0)==0?w:w},
a7k:function a7k(d,e,f){this.a=d
this.b=e
this.c=f},
fln:function fln(){},
hAl(d,e,f,g,h,i,j,k,l){return new C.Nn(l,e,d,g,f,i,h,j,k,null)},
Nn:function Nn(d,e,f,g,h,i,j,k,l,m){var _=this
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
aDa:function aDa(d,e,f,g,h,i,j,k,l){var _=this
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
esL:function esL(d){this.a=d},
esJ:function esJ(){},
esK:function esK(d){this.a=d},
ep8:function ep8(){},
ep9:function ep9(){},
epa:function epa(d,e){this.a=d
this.b=e},
eqJ:function eqJ(d){this.a=d},
eqx:function eqx(){},
eqy:function eqy(){},
eow:function eow(){},
erR:function erR(d){this.a=d},
esH:function esH(d,e){this.a=d
this.b=e},
eqH:function eqH(d,e){this.a=d
this.b=e},
esu:function esu(d){this.a=d},
esv:function esv(){},
esw:function esw(){},
esx:function esx(d){this.a=d},
esy:function esy(){},
enV:function enV(d){this.a=d},
esI:function esI(){},
epQ:function epQ(d,e){this.a=d
this.b=e},
enT:function enT(d){this.a=d},
enU:function enU(d){this.a=d},
eqc:function eqc(d){this.a=d},
eqd:function eqd(d,e,f){this.a=d
this.b=e
this.c=f},
eqe:function eqe(d){this.a=d},
epP:function epP(){},
epO:function epO(d){this.a=d},
epM:function epM(){},
epL:function epL(d){this.a=d},
epN:function epN(){},
ep4:function ep4(d){this.a=d},
ep5:function ep5(d){this.a=d},
epW:function epW(d){this.a=d},
epR:function epR(d){this.a=d},
epS:function epS(d){this.a=d},
epT:function epT(d){this.a=d},
epU:function epU(d){this.a=d},
epV:function epV(d){this.a=d},
epX:function epX(d,e){this.a=d
this.b=e},
enX:function enX(){},
enY:function enY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eq7:function eq7(){},
eq8:function eq8(d,e){this.a=d
this.b=e},
eq5:function eq5(d,e,f){this.a=d
this.b=e
this.c=f},
eq6:function eq6(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eq_:function eq_(d,e,f){this.a=d
this.b=e
this.c=f},
eq0:function eq0(d,e,f){this.a=d
this.b=e
this.c=f},
eq1:function eq1(d){this.a=d},
eq2:function eq2(d,e){this.a=d
this.b=e},
eq3:function eq3(d,e){this.a=d
this.b=e},
eq4:function eq4(d,e){this.a=d
this.b=e},
epZ:function epZ(d,e){this.a=d
this.b=e},
eqa:function eqa(d){this.a=d},
eqb:function eqb(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eq9:function eq9(d){this.a=d},
eqs:function eqs(){},
eqt:function eqt(){},
equ:function equ(){},
eqv:function eqv(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eqp:function eqp(d){this.a=d},
eqr:function eqr(){},
eqq:function eqq(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
eqn:function eqn(d,e,f){this.a=d
this.b=e
this.c=f},
eqo:function eqo(d,e){this.a=d
this.b=e},
eqw:function eqw(){},
epY:function epY(d,e){this.a=d
this.b=e},
eod:function eod(){},
eoe:function eoe(d,e,f){this.a=d
this.b=e
this.c=f},
eof:function eof(d){this.a=d},
eog:function eog(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eoc:function eoc(d){this.a=d},
eqC:function eqC(d){this.a=d},
eqB:function eqB(d,e){this.a=d
this.b=e},
eqA:function eqA(d,e){this.a=d
this.b=e},
eqz:function eqz(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eqD:function eqD(d,e){this.a=d
this.b=e},
emS:function emS(d,e){this.a=d
this.b=e},
eob:function eob(d,e){this.a=d
this.b=e},
eo9:function eo9(d){this.a=d},
eqL:function eqL(d,e,f){this.a=d
this.b=e
this.c=f},
eo5:function eo5(d,e){this.a=d
this.b=e},
eo4:function eo4(d){this.a=d},
eqK:function eqK(d,e,f){this.a=d
this.b=e
this.c=f},
enW:function enW(d){this.a=d},
eox:function eox(){},
ess:function ess(d,e){this.a=d
this.b=e},
est:function est(d,e,f){this.a=d
this.b=e
this.c=f},
erS:function erS(d,e,f){this.a=d
this.b=e
this.c=f},
emT:function emT(d){this.a=d},
emQ:function emQ(d,e){this.a=d
this.b=e},
emG:function emG(d,e){this.a=d
this.b=e},
emD:function emD(d){this.a=d},
emC:function emC(d,e){this.a=d
this.b=e},
emE:function emE(d,e){this.a=d
this.b=e},
eo7:function eo7(d){this.a=d},
eo8:function eo8(d,e){this.a=d
this.b=e},
eo6:function eo6(d){this.a=d},
enk:function enk(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
enl:function enl(d,e){this.a=d
this.b=e},
enp:function enp(d,e){this.a=d
this.b=e},
enq:function enq(d){this.a=d},
enn:function enn(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eno:function eno(d){this.a=d},
enm:function enm(){},
enj:function enj(d,e,f){this.a=d
this.b=e
this.c=f},
eqm:function eqm(d,e){this.a=d
this.b=e},
esB:function esB(d){this.a=d},
esC:function esC(d,e){this.a=d
this.b=e},
esD:function esD(d){this.a=d},
esE:function esE(d,e,f){this.a=d
this.b=e
this.c=f},
esA:function esA(d){this.a=d},
es7:function es7(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
es6:function es6(d,e,f){this.a=d
this.b=e
this.c=f},
es5:function es5(){},
es4:function es4(d,e,f){this.a=d
this.b=e
this.c=f},
es3:function es3(d,e){this.a=d
this.b=e},
es0:function es0(d,e,f){this.a=d
this.b=e
this.c=f},
erZ:function erZ(d){this.a=d},
es_:function es_(d){this.a=d},
es2:function es2(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
es1:function es1(d){this.a=d},
ep0:function ep0(d,e){this.a=d
this.b=e},
ep_:function ep_(d,e){this.a=d
this.b=e},
erT:function erT(){},
esr:function esr(d,e){this.a=d
this.b=e},
esp:function esp(d){this.a=d},
esq:function esq(d){this.a=d},
emL:function emL(d,e){this.a=d
this.b=e},
emJ:function emJ(d){this.a=d},
emK:function emK(d){this.a=d},
emM:function emM(d,e){this.a=d
this.b=e},
emN:function emN(d,e,f){this.a=d
this.b=e
this.c=f},
emR:function emR(d,e){this.a=d
this.b=e},
emI:function emI(d,e,f){this.a=d
this.b=e
this.c=f},
emH:function emH(d){this.a=d},
eqI:function eqI(d,e,f){this.a=d
this.b=e
this.c=f},
esz:function esz(d,e,f){this.a=d
this.b=e
this.c=f},
ep3:function ep3(d,e,f){this.a=d
this.b=e
this.c=f},
ep2:function ep2(){},
ent:function ent(d,e,f){this.a=d
this.b=e
this.c=f},
enu:function enu(d){this.a=d},
emF:function emF(d,e){this.a=d
this.b=e},
eov:function eov(d,e){this.a=d
this.b=e},
emO:function emO(d,e){this.a=d
this.b=e},
emX:function emX(d){this.a=d},
emY:function emY(d,e){this.a=d
this.b=e},
emZ:function emZ(d,e){this.a=d
this.b=e},
emW:function emW(d){this.a=d},
en9:function en9(d,e){this.a=d
this.b=e},
emV:function emV(d){this.a=d},
enc:function enc(d){this.a=d},
end:function end(d){this.a=d},
ene:function ene(d){this.a=d},
enf:function enf(d){this.a=d},
eng:function eng(d){this.a=d},
enh:function enh(){},
eni:function eni(){},
en_:function en_(d){this.a=d},
en0:function en0(d){this.a=d},
en1:function en1(d){this.a=d},
en2:function en2(d){this.a=d},
en3:function en3(d){this.a=d},
en4:function en4(d){this.a=d},
en5:function en5(d){this.a=d},
en6:function en6(d){this.a=d},
en7:function en7(d){this.a=d},
en8:function en8(d){this.a=d},
ena:function ena(d){this.a=d},
enb:function enb(d,e){this.a=d
this.b=e},
eou:function eou(d,e,f){this.a=d
this.b=e
this.c=f},
eot:function eot(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eos:function eos(d,e,f){this.a=d
this.b=e
this.c=f},
eor:function eor(d,e){this.a=d
this.b=e},
emP:function emP(d,e){this.a=d
this.b=e},
enx:function enx(d){this.a=d},
enw:function enw(d){this.a=d},
env:function env(d,e){this.a=d
this.b=e},
eny:function eny(d){this.a=d},
enz:function enz(d){this.a=d},
enA:function enA(d,e){this.a=d
this.b=e},
eoa:function eoa(d){this.a=d},
eql:function eql(d,e){this.a=d
this.b=e},
eqk:function eqk(d,e){this.a=d
this.b=e},
eqj:function eqj(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eqh:function eqh(d){this.a=d},
eqi:function eqi(d,e){this.a=d
this.b=e},
eqf:function eqf(){},
eqg:function eqg(){},
erU:function erU(){},
erV:function erV(d,e){this.a=d
this.b=e},
erW:function erW(){},
erX:function erX(d){this.a=d},
erY:function erY(d,e){this.a=d
this.b=e},
emU:function emU(d,e){this.a=d
this.b=e},
enZ:function enZ(){},
eo_:function eo_(){},
eo0:function eo0(){},
eo3:function eo3(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eo2:function eo2(d,e){this.a=d
this.b=e},
eo1:function eo1(d,e,f){this.a=d
this.b=e
this.c=f},
epu:function epu(d){this.a=d},
ept:function ept(){},
epv:function epv(d,e){this.a=d
this.b=e},
epw:function epw(d,e){this.a=d
this.b=e},
eps:function eps(d){this.a=d},
epx:function epx(d,e){this.a=d
this.b=e},
epr:function epr(d){this.a=d},
epy:function epy(d,e){this.a=d
this.b=e},
epq:function epq(d){this.a=d},
epz:function epz(d,e){this.a=d
this.b=e},
epp:function epp(d){this.a=d},
epA:function epA(d,e){this.a=d
this.b=e},
epo:function epo(d,e){this.a=d
this.b=e},
epB:function epB(d,e){this.a=d
this.b=e},
epn:function epn(d){this.a=d},
epC:function epC(d,e){this.a=d
this.b=e},
epm:function epm(d){this.a=d},
epf:function epf(d,e){this.a=d
this.b=e},
epg:function epg(d){this.a=d},
eph:function eph(d){this.a=d},
epe:function epe(d){this.a=d},
epi:function epi(d,e){this.a=d
this.b=e},
epd:function epd(d){this.a=d},
epj:function epj(d,e){this.a=d
this.b=e},
epc:function epc(d){this.a=d},
epk:function epk(d,e){this.a=d
this.b=e},
epb:function epb(d){this.a=d},
epl:function epl(d){this.a=d},
eon:function eon(d){this.a=d},
eoo:function eoo(d){this.a=d},
eoq:function eoq(d){this.a=d},
eoi:function eoi(d){this.a=d},
eoh:function eoh(d,e){this.a=d
this.b=e},
eoj:function eoj(d,e){this.a=d
this.b=e},
eok:function eok(d){this.a=d},
eol:function eol(d){this.a=d},
eom:function eom(d,e){this.a=d
this.b=e},
eop:function eop(d){this.a=d},
esF:function esF(d){this.a=d},
esG:function esG(d){this.a=d},
epF:function epF(d,e){this.a=d
this.b=e},
epE:function epE(d,e){this.a=d
this.b=e},
epD:function epD(d,e){this.a=d
this.b=e},
epG:function epG(d){this.a=d},
epH:function epH(d){this.a=d},
er3:function er3(d,e){this.a=d
this.b=e},
er4:function er4(d){this.a=d},
er5:function er5(d){this.a=d},
erg:function erg(d){this.a=d},
err:function err(d){this.a=d},
erC:function erC(d){this.a=d},
erJ:function erJ(d){this.a=d},
erK:function erK(d){this.a=d},
erL:function erL(d){this.a=d},
erM:function erM(d){this.a=d},
erN:function erN(d,e){this.a=d
this.b=e},
er6:function er6(d){this.a=d},
er7:function er7(d){this.a=d},
er8:function er8(d){this.a=d},
er9:function er9(d){this.a=d},
era:function era(d){this.a=d},
erb:function erb(d){this.a=d},
erc:function erc(d){this.a=d},
erd:function erd(d){this.a=d},
ere:function ere(d){this.a=d},
erf:function erf(d){this.a=d},
erh:function erh(d){this.a=d},
eri:function eri(d){this.a=d},
erj:function erj(d){this.a=d},
erk:function erk(d){this.a=d},
erl:function erl(d){this.a=d},
erm:function erm(d){this.a=d},
ern:function ern(d){this.a=d},
ero:function ero(d){this.a=d},
erp:function erp(d){this.a=d},
eqU:function eqU(d){this.a=d},
erq:function erq(d){this.a=d},
er1:function er1(d){this.a=d},
ers:function ers(d){this.a=d},
er0:function er0(d,e){this.a=d
this.b=e},
ert:function ert(d,e){this.a=d
this.b=e},
eru:function eru(d,e){this.a=d
this.b=e},
er_:function er_(d,e,f){this.a=d
this.b=e
this.c=f},
eqQ:function eqQ(d,e){this.a=d
this.b=e},
er2:function er2(d){this.a=d},
erO:function erO(d,e){this.a=d
this.b=e},
erQ:function erQ(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
erP:function erP(d,e){this.a=d
this.b=e},
erv:function erv(d,e,f){this.a=d
this.b=e
this.c=f},
eqZ:function eqZ(d,e,f){this.a=d
this.b=e
this.c=f},
eqP:function eqP(d,e,f){this.a=d
this.b=e
this.c=f},
eqN:function eqN(d,e){this.a=d
this.b=e},
erw:function erw(d,e){this.a=d
this.b=e},
eqY:function eqY(d,e){this.a=d
this.b=e},
eqO:function eqO(d,e){this.a=d
this.b=e},
eqM:function eqM(d,e){this.a=d
this.b=e},
erx:function erx(d){this.a=d},
eqX:function eqX(d){this.a=d},
ery:function ery(d){this.a=d},
erz:function erz(d){this.a=d},
erA:function erA(d){this.a=d},
erB:function erB(d){this.a=d},
eqW:function eqW(d){this.a=d},
erD:function erD(d){this.a=d},
erE:function erE(d){this.a=d},
erF:function erF(d,e){this.a=d
this.b=e},
eqV:function eqV(d){this.a=d},
erG:function erG(d,e){this.a=d
this.b=e},
eqT:function eqT(d){this.a=d},
erH:function erH(d,e){this.a=d
this.b=e},
eqS:function eqS(d){this.a=d},
erI:function erI(d,e){this.a=d
this.b=e},
eqR:function eqR(d){this.a=d},
ens:function ens(d,e,f){this.a=d
this.b=e
this.c=f},
enr:function enr(d,e){this.a=d
this.b=e},
esa:function esa(d,e){this.a=d
this.b=e},
es9:function es9(d,e){this.a=d
this.b=e},
esb:function esb(d,e){this.a=d
this.b=e},
es8:function es8(d,e){this.a=d
this.b=e},
eoA:function eoA(d,e){this.a=d
this.b=e},
eoz:function eoz(d){this.a=d},
eoB:function eoB(d,e){this.a=d
this.b=e},
eoy:function eoy(d){this.a=d},
ep7:function ep7(){},
ep6:function ep6(){},
esn:function esn(d){this.a=d},
esm:function esm(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
esl:function esl(d,e){this.a=d
this.b=e},
esg:function esg(d,e){this.a=d
this.b=e},
esk:function esk(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
esh:function esh(d,e){this.a=d
this.b=e},
esc:function esc(d){this.a=d},
esd:function esd(d){this.a=d},
ese:function ese(d){this.a=d},
esf:function esf(d){this.a=d},
esi:function esi(d,e){this.a=d
this.b=e},
esj:function esj(d,e){this.a=d
this.b=e},
eso:function eso(d){this.a=d},
enS:function enS(d){this.a=d},
enR:function enR(d,e,f){this.a=d
this.b=e
this.c=f},
enQ:function enQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
enF:function enF(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
enG:function enG(d,e){this.a=d
this.b=e},
enH:function enH(d,e){this.a=d
this.b=e},
enI:function enI(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
enE:function enE(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
enJ:function enJ(d,e){this.a=d
this.b=e},
enL:function enL(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
enK:function enK(d,e){this.a=d
this.b=e},
enM:function enM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
enD:function enD(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
enN:function enN(d,e){this.a=d
this.b=e},
enC:function enC(d,e){this.a=d
this.b=e},
enO:function enO(d,e){this.a=d
this.b=e},
enB:function enB(d){this.a=d},
enP:function enP(d,e){this.a=d
this.b=e},
epJ:function epJ(d){this.a=d},
epI:function epI(d){this.a=d},
epK:function epK(d,e){this.a=d
this.b=e},
eoO:function eoO(d,e){this.a=d
this.b=e},
eoP:function eoP(d,e){this.a=d
this.b=e},
eoN:function eoN(d,e){this.a=d
this.b=e},
eoQ:function eoQ(d,e){this.a=d
this.b=e},
eoM:function eoM(d,e){this.a=d
this.b=e},
eoR:function eoR(d,e){this.a=d
this.b=e},
eoL:function eoL(d,e){this.a=d
this.b=e},
eoS:function eoS(d,e){this.a=d
this.b=e},
eoK:function eoK(d,e){this.a=d
this.b=e},
eoT:function eoT(d,e){this.a=d
this.b=e},
eoJ:function eoJ(d,e){this.a=d
this.b=e},
eoU:function eoU(d,e,f){this.a=d
this.b=e
this.c=f},
eoI:function eoI(d,e){this.a=d
this.b=e},
eoV:function eoV(d,e,f){this.a=d
this.b=e
this.c=f},
eoH:function eoH(d,e){this.a=d
this.b=e},
eoW:function eoW(d,e){this.a=d
this.b=e},
eoG:function eoG(d,e,f){this.a=d
this.b=e
this.c=f},
eoD:function eoD(d,e){this.a=d
this.b=e},
eoX:function eoX(d,e){this.a=d
this.b=e},
eoF:function eoF(d,e){this.a=d
this.b=e},
eoY:function eoY(d,e){this.a=d
this.b=e},
eoE:function eoE(d,e,f){this.a=d
this.b=e
this.c=f},
eoC:function eoC(d,e){this.a=d
this.b=e},
eoZ:function eoZ(d,e){this.a=d
this.b=e},
ep1:function ep1(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
emB:function emB(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eqG:function eqG(d,e){this.a=d
this.b=e},
eqE:function eqE(d){this.a=d},
eqF:function eqF(d,e){this.a=d
this.b=e},
aei:function aei(d,e,f){this.a=d
this.b=e
this.c=f},
axG:function axG(d,e){this.c=d
this.a=e},
bbf:function bbf(d,e){var _=this
_.e=_.d=$
_.cS$=d
_.b2$=e
_.c=_.a=null},
cZE:function cZE(d){this.a=d},
cZD:function cZD(d){this.a=d},
bbt:function bbt(d,e){this.c=d
this.a=e},
d__:function d__(d){this.a=d},
d_0:function d_0(d){this.a=d},
Jf:function Jf(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bbe:function bbe(){this.d=!1
this.c=this.a=null},
cZB:function cZB(d){this.a=d},
cZx:function cZx(d){this.a=d},
cZC:function cZC(d){this.a=d},
cZw:function cZw(d){this.a=d},
cZA:function cZA(d){this.a=d},
cZy:function cZy(d){this.a=d},
cZz:function cZz(d,e){this.a=d
this.b=e},
P1:function P1(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
ZR:function ZR(d,e,f){this.c=d
this.d=e
this.a=f},
aDd:function aDd(d,e,f){var _=this
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
etl:function etl(){},
etb:function etb(d){this.a=d},
etk:function etk(d){this.a=d},
etc:function etc(d){this.a=d},
etd:function etd(d){this.a=d},
et7:function et7(d){this.a=d},
et8:function et8(d,e){this.a=d
this.b=e},
et9:function et9(d){this.a=d},
eta:function eta(d,e,f){this.a=d
this.b=e
this.c=f},
eti:function eti(){},
etj:function etj(d){this.a=d},
ete:function ete(d){this.a=d},
etf:function etf(d){this.a=d},
etg:function etg(d){this.a=d},
eth:function eth(d){this.a=d},
etm:function etm(d,e,f){this.a=d
this.b=e
this.c=f},
eto:function eto(d,e){this.a=d
this.b=e},
etn:function etn(d){this.a=d},
Jn:function Jn(d,e){this.c=d
this.a=e},
bpZ:function bpZ(d,e){this.b=d
this.a=e},
bg6:function bg6(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bg5:function bg5(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aIT:function aIT(){},
aKV:function aKV(){},
bvG:function bvG(){},
aKW:function aKW(){},
fAK(){var w=0,v=B.j(x.bZ),u,t,s,r,q
var $async$fAK=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.wQ.c5().Lx(B.a(["pdf"],x.s),A.tC,!0),$async$fAK)
case 3:q=e
if(q==null||J.cl(q.a)){u=null
w=1
break}t=J.fo(q.a)
s=t.c
if(s==null||s.length===0){u=null
w=1
break}r=A.a.i(t.b)
if(r.length===0)r="document.pdf"
u=new B.bnf(s,"data:application/pdf;base64,"+A.cS.gcv().aJ(s),r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fAK,v)},
i09(d){var w,v,u,t,s,r
try{w=B.jm(d,0,null)
v=B.af("/Type\\s*/Pages[^>]*?/Count\\s+(\\d+)",!0,!0,!1,!1).cD(w)
if(v!=null){s=v.b[1]
s.toString
u=B.c7(s,null)
if(u!=null&&u>0){s=A.o.D(u,1,200)
return s}}t=B.af("/Type\\s*/Page\\b",!0,!1,!1,!1).kR(0,w).gM(0)
if(t>0){s=J.aPv(t,1,200)
return s}}catch(r){}return 1},
fAB(d){return C.i08(d)},
i08(d){var w=0,v=B.j(x.T),u
var $async$fAB=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(!A.a.a0(d,"data:image")){u=d
w=1
break}u=d
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fAB,v)},
bBh(d,e,f,g){return C.i0i(d,e,f,g)},
i0i(b6,b7,b8,b9){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$bBh=B.e(function(c0,c1){if(c0===1){s.push(c1)
w=t}for(;;)switch(w){case 0:if(!new B.e8(b6,x.co).gaf(0).C()){u=null
w=1
break}t=4
r=A.k.D(b7.a,80,2400)
q=A.k.D(b7.b,80,2400)
p=B.hhI(b9,new B.at(r,q))
o=1
n=1
m=0
l=0
for(a7=b6.length,a8=0;a8<a7;++a8){k=b6[a8]
if(k==null)continue
a9=o
b0=k.a
o=Math.min(B.lK(a9),b0)
b0=n
a9=k.b
n=Math.min(B.lK(b0),a9)
a9=m
b0=k.a
m=Math.max(B.lK(a9),b0)
b0=l
a9=k.b
l=Math.max(B.lK(b0),a9)}o=A.k.D(o-0.04,0,1)
n=A.k.D(n-0.04,0,1)
m=A.k.D(m+0.04,0,1)
l=A.k.D(l+0.04,0,1)
j=A.k.D(m-o,0.12,1)
i=A.k.D(l-n,0.12,1)
h=A.o.D(A.k.V(800*(i/j)),180,420)
$.X()
g=new B.rU()
f=B.GE(g,null)
a7=B.M()
a7.r=A.qA.gp(0)
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
b2.delete()}a0=a2}a3=g.qh()
w=7
return B.b(a3.z0(800,h),$async$bBh)
case 7:a4=c1
a3.q()
w=8
return B.b(a4.hj(A.fW),$async$bBh)
case 8:a5=c1
a4.q()
if(a5==null){u=null
w=1
break}a7=J.fb(A.dz.gaO(a5))
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
return B.i($async$bBh,v)},
aOI(d,e,f){return C.i06(d,e,f)},
i06(d,e,f){var w=0,v=B.j(x.go),u,t,s,r,q
var $async$aOI=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:r={}
q=B.a([],x.bA)
r.a=null
r.b=e==null?A.aB:e
r.c=f==null?5.2:f
w=3
return B.b(B.agG(d,e,f,new C.fAz(r,q),q,"Sign document"),$async$aOI)
case 3:if(!new B.e8(q,x.co).gaf(0).C()||r.a==null){u=null
w=1
break}t=r.a
t.toString
w=4
return B.b(C.bBh(q,t,r.b,r.c),$async$aOI)
case 4:s=h
if(s==null){u=null
w=1
break}u=new C.b_P(s,r.c,r.b)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aOI,v)},
i0g(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h="&amp;",g="&lt;",f="&gt;",e="&quot;",d='<!DOCTYPE html><html><head><meta charset="utf-8"><title>'+C.haW(a0.b)+'</title>\n<style>\n  @page { size: 210mm 297mm; margin: 1.7mm; }\n  * { box-sizing: border-box; }\n  body { font-family: system-ui, sans-serif; background: #fff; color: #111; margin: 0; }\n  h1 { font-size: 14px; margin: 6px 10mm; }\n  .slide { page-break-after: always; width: 100%; height: 293.6mm; border: 1px solid #ddd; position: relative; overflow: hidden; margin: 0 auto 24px; }\n  /* Requested after the margin was already trimmed to near zero: a real\n     zoom-in on the whole slide (frame included), not just less border.\n     `.slide` keeps overflow:hidden so whatever spills past the edge at\n     this scale gets cropped instead of pushing the page layout around.\n     Width and height scale independently \u2014 a separate "wider on the\n     left and right only" request on top of the overall zoom. */\n  .zoom { position: absolute; inset: 0; transform: scaleX(1.0375) scaleY(1.01875); transform-origin: center center; }\n  .el { position: absolute; overflow: hidden; }\n  .txt { white-space: pre-wrap; word-break: break-word; }\n  img { max-width: 100%; max-height: 100%; object-fit: contain; }\n  .pdf { display:flex; flex-direction:column; align-items:center; justify-content:center; height:100%; background:#f8fafc; }\n</style></head><body>\n<h1>'+C.haW(a0.b)+"</h1>\n"
for(w=a0.r,v=0;v<w.length;++v){u=w[v]
d=d+('<div class="slide" style="background:#'+A.a.b0(A.a.aT(A.o.fQ(u.e,16),8,"0"),2)+'">\n')+'<div class="zoom">\n'
for(t=u.z,s=t.length,r=0;r<t.length;t.length===s||(0,B.L)(t),++r){q=t[r]
d+='<div class="el" style="left:'+A.k.aa(q.c*100,2)+"%;top:"+A.k.aa(q.d*100,2)+"%;width:"+A.k.aa(q.e*100,2)+"%;height:"+A.k.aa(q.f*100,2)+'%">'
p=q.b
switch(p.a){case 0:o=A.a.b0(A.a.aT(A.o.fQ(q.Q,16),8,"0"),2)
p=q.w
n=q.r
n=B.aK(n,"&",h)
n=B.aK(n,"<",g)
n=B.aK(n,">",f)
d+='<div class="txt" style="font-size:'+B.t(p)+"px;color:#"+o+'">'+B.aK(n,'"',e)+"</div>"
break
case 1:case 4:n=q.at
if(n!=null&&A.a.a0(n,"data:image")){m=p===D.lk&&q.c===0&&q.d===0&&q.e===1&&q.f===1?' style="object-fit:fill"':""
d+='<img src="'+n+'" alt=""'+m+" />"}break
case 3:p=q.db
if(p.length===0)p="PDF document"
p=B.aK(p,"&",h)
p=B.aK(p,"<",g)
p=B.aK(p,">",f)
d+='<div class="pdf"><div>\ud83d\udcc4 '+B.aK(p,'"',e)+"</div></div>"
break
case 2:d+='<div style="width:100%;height:100%;background:'+C.hay(q.ay)+";border:2px solid "+C.hay(q.ch)+'"></div>'
break
case 5:l=C.fVa(q.r)
p=l==null
n=p?null:l.b
n=A.a.i(n==null?"":n).length===0?"My links":A.a.i(l.b)
n=B.aK(n,"&",h)
n=B.aK(n,"<",g)
n=B.aK(n,">",f)
d=d+'<div style="width:100%;height:100%;box-sizing:border-box;background:#111114;border:4px solid #8E8A85;border-radius:18px;padding:18px 8px 8px;color:#fff;font-family:sans-serif;text-align:center;overflow:hidden">'+('<div style="font-weight:700;font-size:13px">'+B.aK(n,'"',e)+"</div>")
p=p?null:l.gaiI()
if(p==null)p=A.avT
n=B.U(p)
k=n.k("pO<1>")
j=new B.pO(p,0,8,k)
j.GQ(p,0,8,n.c)
j=new B.bR(j,j.gM(0),k.k("bR<ak.E>"))
k=k.k("ak.E")
while(j.C()){p=j.d
if(p==null)p=k.a(p)
i=A.a.i(p.b)
if(i.length===0)i=A.a.i(p.c)
p=A.a.i(p.c)
p=B.aK(p,"&",h)
p=B.aK(p,"<",g)
p=B.aK(p,">",f)
p=B.aK(p,'"',e)
n=B.aK(i,"&",h)
n=B.aK(n,"<",g)
n=B.aK(n,">",f)
d+='<a href="'+p+'" target="_blank" rel="noopener" style="display:block;margin-top:6px;padding:6px;border-radius:8px;background:#26262C;color:#fff;text-decoration:none;font-size:11px">'+B.aK(n,'"',e)+"</a>"}d+="</div>"
break}d+="</div>\n"}d+="</div>\n</div>\n"}d+="</body></html>\n"
return d.charCodeAt(0)==0?d:d},
hay(d){var w=A.o.aA(d,24)
return"rgba("+(A.o.aA(d,16)&255)+","+(A.o.aA(d,8)&255)+","+(d&255)+","+A.k.aa((w&255)/255,3)+")"},
haW(d){var w=B.aK(d,"&","&amp;")
w=B.aK(w,"<","&lt;")
w=B.aK(w,">","&gt;")
return B.aK(w,'"',"&quot;")},
bBf(d,e){var w=0,v=B.j(x.H)
var $async$bBf=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b(B.ca(null,null,!0,null,new C.fAI(e,C.i0g(e),d),d,null,!0,!0,x.H),$async$bBf)
case 2:return B.h(null,v)}})
return B.i($async$bBf,v)},
bBg(){var w=0,v=B.j(x.T),u,t,s
var $async$bBg=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A4.G9(92,2400),$async$bBg)
case 3:s=e
if(s==null){u=null
w=1
break}w=4
return B.b(C.fAB(s),$async$bBg)
case 4:t=e
u=t==null?s:t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bBg,v)},
aOJ(d){var w=0,v=B.j(x.N),u,t,s,r,q
var $async$aOJ=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.fWo(d),$async$aOJ)
case 3:t=f
s=A.a.i(d.b)
r=B.af("[^\\w\\-. ]+",!0,!1,!1,!1)
q=A.a.i(B.aK(s,r,"_"))
u=Z.fCZ(t,q.length===0?"presentation":q)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aOJ,v)},
h4S(d,e){var w
if(e<0||e>=d.r.length)return A.o.D(d.e,1,120)
w=d.r[e].w
return A.o.D(w>0?w:d.e,1,120)},
b_P:function b_P(d,e,f){this.a=d
this.b=e
this.c=f},
fAz:function fAz(d,e){this.a=d
this.b=e},
fAI:function fAI(d,e,f){this.a=d
this.b=e
this.c=f},
fAF:function fAF(d){this.a=d},
fAG:function fAG(d,e,f){this.a=d
this.b=e
this.c=f},
fAH:function fAH(d,e,f){this.a=d
this.b=e
this.c=f},
i07(d){return C.kr(d.w)},
i0e(d){var w,v,u,t
if(d.length===0||!A.d.d9(d,C.i1X()))return null
for(w=d.length,v=0;v<w;++v){u=d[v].x
t=A.a.i(u==null?"":u)
if(t.length!==0)return t}return""},
yf(d){var w=A.a.i(d),v=B.af("[^A-Z0-9]",!0,!1,!1,!1),u=B.aK(w.toUpperCase(),v,"")
w=$.hnm()
if(w.b.test(u))return u
return null},
hhK(d,e,f){var w,v,u=C.hvZ(d),t=$.pi()
for(w=0;w<80;++w){v=u+A.a.aT(A.o.u(t.aB(1000)),3,"0")
if(!f.t(0,v))return v}return u+A.a.aT(A.o.u(Date.now()%1000),3,"0")},
i0k(d){var w,v,u,t,s=B.aX(x.N)
for(w=J.aV(d.a),v=new B.fk(w,d.b);v.C();){u=w.gU(w).y
t=C.yf(u==null?"":u)
if(t!=null)s.L(0,t)}return s},
fAx(d,e){var w,v=d.y,u=C.yf(v==null?"":v)
if(u!=null)return d.y=u
w=C.i0k(new B.a2(e,new C.fAy(d),B.U(e).k("a2<1>")))
v=d.x
return d.y=C.hhK(v==null?"":v,null,w)},
i0j(d){var w,v
if(d.length!==1)return null
w=A.d.gK(d)
if(!C.kr(w.w))return null
v=w.y
return C.yf(v==null?"":v)},
hAn(){var w,v=$.pi(),u=J.e3(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aB(32)]
return"SL"+A.d.fW(u)},
Vm(){var w=0,v=B.j(x.P),u,t=2,s=[],r,q,p,o,n,m
var $async$Vm=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return B.b(B.c2(),$async$Vm)
case 3:if(!e){u=B.T(x.N,x.z)
w=1
break}t=5
w=8
return B.b(B.f1("ngmy_slides_transfer_qr_stashes_v1",null,!1,A.bG),$async$Vm)
case 8:r=e
if(r==null){u=B.T(x.N,x.z)
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
case 7:u=B.T(x.N,x.z)
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Vm,v)},
Vn(d){return C.hAo(d)},
hAo(d){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p
var $async$Vn=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return B.b(B.c2(),$async$Vn)
case 3:if(!f){w=1
break}t=5
w=8
return B.b(B.hB("ngmy_slides_transfer_qr_stashes_v1",B.F(["stashes",d,"savedAt",new B.S(Date.now(),0,!1).a6().ac()],x.N,x.z),!1,!1,A.cG,null),$async$Vn)
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
return B.i($async$Vn,v)},
a7m(a0,a1,a2,a3,a4){var w=0,v=B.j(x.gl),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$a7m=B.e(function(a5,a6){if(a5===1)return B.f(a6,v)
for(;;)switch(w){case 0:w=3
return B.b(B.c2(),$async$a7m)
case 3:if(!a6){u=null
w=1
break}t=A.a.i(a0)
if(t.length===0){u=null
w=1
break}w=4
return B.b(C.Vm(),$async$a7m)
case 4:s=a6
r=C.yf(a2==null?"":a2)
if(r==null)r=a3!=null?C.hhK(a3,null,A.Id):null
q=x.N
p=B.aX(q)
for(o=J.dj(s),n=J.aV(o.gi_(s)),m=x.f;n.C();){l=n.gU(n)
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
if(D.Sa.t(0,A.a.i(a4.toLowerCase())))g.n(0,"sharedByAdmin",!0)
if(r!=null){g.n(0,"kind","marriage")
g.n(0,"usesRemaining",2)
f=r}else{q=g.h(0,"claimCode")
f=C.yf(J.k(q==null?"":q))
if(f==null)f=C.h4X(p)
g.n(0,"usesRemaining",25)}g.n(0,"claimCode",f)
q=i.a
o.n(s,q,g)
w=7
return B.b(C.Vn(s),$async$a7m)
case 7:u=new B.aED(f,"NGMYSLIDESYNC2|"+q,q)
w=1
break
w=5
break
case 6:e=C.hAn()
n=r==null
d=n?C.h4X(p):r
q=B.T(q,x.C)
q.n(0,"ownerEmail",A.a.i(a4))
q.n(0,"bundleId",a1)
m=A.dJ.aJ(t)
q.n(0,"payload",A.cS.gcv().aJ(m))
n=!n
q.n(0,"usesRemaining",n?2:25)
q.n(0,"createdAt",new B.S(Date.now(),0,!1).a6().ac())
if(D.Sa.t(0,A.a.i(a4.toLowerCase())))q.n(0,"sharedByAdmin",!0)
q.n(0,"claimCode",d)
if(n)q.n(0,"kind","marriage")
o.n(s,e,q)
w=8
return B.b(C.Vn(s),$async$a7m)
case 8:u=new B.aED(d,"NGMYSLIDESYNC2|"+e,e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a7m,v)},
h4X(d){var w,v,u=$.pi()
for(w=0;w<200;++w){v="SL"+A.a.aT(A.o.u(u.aB(1000)),3,"0")
if(d.L(0,v))return v}return"SL"+A.a.aT(A.o.u(Date.now()%1000),3,"0")},
aq5(d){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$aq5=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=A.a.i(d)
p=q.length===0
if(p)f=p
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.c2(),$async$aq5)
case 5:f=!f
case 4:if(f){w=1
break}w=6
return B.b(C.Vm(),$async$aq5)
case 6:t=f
s=J.a5(t)
r=s.gM(t)
s.bm(t,new C.ccE(q))
w=s.gM(t)!==r?7:8
break
case 7:w=9
return B.b(C.Vn(t),$async$aq5)
case 9:case 8:case 1:return B.h(u,v)}})
return B.i($async$aq5,v)},
aq4(d){var w=0,v=B.j(x.T),u,t,s,r,q,p,o
var $async$aq4=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:p=C.yf(d)
o=p==null
if(o)f=o
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.c2(),$async$aq4)
case 5:f=!f
case 4:if(f){u=null
w=1
break}o=J
w=6
return B.b(C.Vm(),$async$aq4)
case 6:t=o.js(f),t=t.gaf(t),s=x.f
case 7:if(!t.C()){w=8
break}r=t.gU(t)
q=r.b
if(!s.b(q)){w=7
break}q=J.q(q,"claimCode")
if(C.yf(J.k(q==null?"":q))===p){u=C.a7l(r.a)
w=1
break}w=7
break
case 8:u=null
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aq4,v)},
a7l(d){var w=0,v=B.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$a7l=B.e(function(a0,a1){if(a0===1)return B.f(a1,v)
for(;;)switch(w){case 0:g=A.a.i(d)
f=g.length===0
if(f)a1=f
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.c2(),$async$a7l)
case 5:a1=!a1
case 4:if(a1){u=null
w=1
break}w=6
return B.b(C.Vm(),$async$a7l)
case 6:p=a1
o=J.a5(p)
n=o.h(p,g)
m=x.f
if(!m.b(n)){u=null
w=1
break}l=J.a5(n)
k=B.aJ(l.h(n,"usesRemaining"))
j=k==null?null:A.k.N(k)
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
if(D.Sa.t(0,A.a.i(J.k(k==null?"":k).toLowerCase()))||J.z(l.h(n,"sharedByAdmin"),!0))try{r=A.R.aG(0,s,null)
if(m.b(r)){q=B.a1(r,x.N,x.z)
J.aF(q,"sharedByAdmin",!0)
s=A.R.ao(q,null)}}catch(e){}h=j-1
m=l.h(n,"kind")
m=J.k(m==null?"":m)
if(h<=0&&m!=="marriage")o.W(p,g)
else{m=x.N
l=x.z
l=B.dU(B.a1(n,m,l),m,l)
l.n(0,"usesRemaining",h)
l.n(0,"lastUsedAt",new B.S(Date.now(),0,!1).a6().ac())
o.n(p,g,l)}w=7
return B.b(C.Vn(p),$async$a7l)
case 7:u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a7l,v)},
i0d(d,e,f){var w,v=B.T(x.N,x.z)
v.n(0,"type","ngmy_slides_library_v1")
v.n(0,"ownerEmail",A.a.i(e))
v.n(0,"exportedAt",new B.S(Date.now(),0,!1).a6().ac())
if(f)v.n(0,"sharedByAdmin",!0)
w=B.U(d).k("K<1,a4<n,@>>")
w=B.B(new B.K(d,new C.fAE(),w),w.k("ak.E"))
v.n(0,"decks",w)
return v},
fAM(d,e,f,g){var w
if(e!=null){w=B.T(x.N,x.z)
w.n(0,"type","ngmy_slides_deck_v1")
w.n(0,"ownerEmail",A.a.i(f))
w.n(0,"exportedAt",new B.S(Date.now(),0,!1).a6().ac())
if(g)w.n(0,"sharedByAdmin",!0)
w.n(0,"deck",e.ae())
return A.R.ao(w,null)}return A.R.ao(C.i0d(d==null?B.a([],x.D):d,f,g),null)},
fAL(d,e,f,g,h){var w=0,v=B.j(x.eb),u,t,s,r
var $async$fAL=B.e(function(i,j){if(i===1)return B.f(j,v)
for(;;)switch(w){case 0:w=3
return B.b(C.a7m(h,d,e,f,g),$async$fAL)
case 3:r=j
if(r!=null){t=r.b
s=r.a
if(s==null)s=C.yf(e==null?"":e)
u=new B.aEq(s,t)
w=1
break}t=A.dJ.aJ(h)
t=A.k7.gcv().aJ(t)
u=new B.aEq(C.yf(e==null?"":e),"NGMY_SL:"+t)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fAL,v)},
fWq(d){var w,v,u,t,s="ngmy_slides_deck_v1",r="ngmy_slides_library_v1",q=A.a.i(d)
if(J.ad(q)===0)return!1
if(J.cZ(q,"NGMYSLIDESYNC2|"))return!0
if(J.cZ(q,"NGMYSLIDECODE|"))return!0
if(J.cZ(q,"NGMY_SL:"))return!0
if(J.eZ(q,s)||J.eZ(q,r))return!0
if(J.cZ(q,"{"))try{w=A.R.aG(0,q,null)
if(x.f.b(w)){u=J.q(w,"type")
v=J.k(u==null?"":u)
u=J.z(v,s)||J.z(v,r)
return u}}catch(t){}return!1},
i0h(d){var w,v,u,t,s,r=d.z,q=r==null?null:A.a.i(r)
r=d.d
for(r=[q,r==null?null:A.a.i(r)],w=0;w<2;++w){v=r[w]
if(v==null||v.length===0)continue
if(C.fWq(v))return v
u=A.a.cJ(v,"NGMYSLIDESYNC2|")
if(u>=0){t=A.a.i(A.a.b0(v,u))
if(C.fWq(t))return t}s=A.a.cJ(v,"NGMY_SL:")
if(s>=0){t=A.a.i(A.a.b0(v,s))
if(C.fWq(t))return t}}return null},
fAA(d){var w,v,u,t=A.a.i(d)
if(J.ad(t)===0||J.cZ(t,"NGMYSLIDESYNC2|"))return B.a([],x.D)
try{w=null
v=x.P
if(J.cZ(t,"NGMY_SL:"))w=v.a(A.R.aG(0,A.c4.ca(0,A.cE.aJ(J.mA(t,8))),null))
else w=v.a(A.R.aG(0,t,null))
v=C.hK3(w)
return v}catch(u){v=B.a([],x.D)
return v}},
agr(d){var w=0,v=B.j(x.R),u,t,s,r,q
var $async$agr=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=A.a.i(d)
w=A.a.a0(q,"NGMYSLIDECODE|")?3:4
break
case 3:t=q.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return B.b(C.aq4(t[1]),$async$agr)
case 7:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fAA(s)
w=1
break}case 6:u=B.a([],x.D)
w=1
break
case 4:r=C.yf(q)
w=r!=null&&!A.a.t(q,"|")&&!A.a.a0(q,"{")?8:9
break
case 8:w=10
return B.b(C.aq4(r),$async$agr)
case 10:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fAA(s)
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
return B.b(C.a7l(t[1]),$async$agr)
case 15:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fAA(s)
w=1
break}case 14:u=B.a([],x.D)
w=1
break
case 12:u=C.fAA(q)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$agr,v)},
hK3(d){var w,v,u,t=J.a5(d),s=t.h(d,"type"),r=J.k(s==null?"":s)
if(!J.z(t.h(d,"sharedByAdmin"),!0)){s=t.h(d,"ownerEmail")
w=D.Sa.t(0,A.a.i(J.k(s==null?"":s).toLowerCase()))}else w=!0
if(r==="ngmy_slides_deck_v1"){v=t.h(d,"deck")
if(!x.f.b(v))return B.a([],x.D)
return B.a([C.fWn(C.Vi(B.a1(v,x.N,x.z)),w)],x.D)}if(r==="ngmy_slides_library_v1"){u=t.h(d,"decks")
if(!x.j.b(u))return B.a([],x.D)
t=J.d8(u,x.f)
t=B.cD(t,new C.f8Z(w),t.$ti.k("J.E"),x.I)
t=B.B(t,B.a3(t).k("J.E"))
return t}return B.a([],x.D)},
fWn(d,e){var w,v,u,t,s,r,q,p,o=d.ae()
o.n(0,"id",C.cC())
w=A.a.i(d.b)
o.n(0,"name",w.length===0?"Shared presentation":w)
o.n(0,"transferReceived",!0)
o.W(0,"transferClaimCode")
o.W(0,"adminShareEditUntil")
v=o.h(0,"slides")
if(x.j.b(v))for(u=J.aV(v),t=x.f;u.C();){s=u.gU(u)
if(t.b(s)){r=Date.now()
q=$.iX
$.iX=q+1
J.aF(s,"id",""+1000*r+"_"+q)}}p=C.Vi(B.a1(o,x.N,x.z))
if(e&&C.kr(p.w))p.Q=new B.S(Date.now(),0,!1).a6().bP(144e8).ac()
return p},
bB_(){var w=0,v=B.j(x.aT),u,t,s
var $async$bB_=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.G8(),$async$bB_)
case 3:s=e
if(s==null||A.a.i(s).length===0){u=null
w=1
break}w=4
return B.b(C.agr(s),$async$bB_)
case 4:t=e
u=J.cl(t)?null:t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bB_,v)},
fJi(d){var w=0,v=B.j(x.T),u,t
var $async$fJi=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.hR(D.VT,!0,"Dismiss",d,new C.fJj(),new C.fJk(),A.ET,!0,x.N),$async$fJi)
case 3:t=f
if(t==null){u=null
w=1
break}if(t.length===0){if(d.e!=null)d.I(x.q).f.R(D.eN8)
u=null
w=1
break}u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fJi,v)},
i40(d,e,f,g,h){return B.a6(d,!1).c6(B.e7(new C.fJl(h,e,g,f),!0,null,x.H))},
fAy:function fAy(d){this.a=d},
ccE:function ccE(d){this.a=d},
fAE:function fAE(){},
f8Z:function f8Z(d){this.a=d},
fJj:function fJj(){},
fJk:function fJk(){},
fJl:function fJl(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Vk:function Vk(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aDb:function aDb(){var _=this
_.d="one"
_.e=null
_.r=_.f=!1
_.c=_.a=null},
esS:function esS(){},
esO:function esO(d,e){this.a=d
this.b=e},
esR:function esR(d,e){this.a=d
this.b=e},
esP:function esP(d){this.a=d},
esQ:function esQ(d){this.a=d},
esT:function esT(d){this.a=d},
esU:function esU(d){this.a=d},
esX:function esX(d){this.a=d},
esY:function esY(d){this.a=d},
esW:function esW(d){this.a=d},
esZ:function esZ(d){this.a=d},
esV:function esV(d){this.a=d},
et_:function et_(d,e){this.a=d
this.b=e},
esN:function esN(d,e){this.a=d
this.b=e},
esM:function esM(d,e){this.a=d
this.b=e},
Vl:function Vl(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
biZ:function biZ(){var _=this
_.c=_.a=_.f=_.e=_.d=null},
et0:function et0(d,e){this.a=d
this.b=e},
et1:function et1(d){this.a=d},
et2:function et2(){},
et3:function et3(d){this.a=d},
et4:function et4(d,e){this.a=d
this.b=e},
aD8:function aD8(d){this.a=d},
aD9:function aD9(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
emv:function emv(d){this.a=d},
emu:function emu(){},
emw:function emw(d){this.a=d},
emr:function emr(d){this.a=d},
emq:function emq(){},
ems:function ems(d){this.a=d},
emt:function emt(d){this.a=d},
btc:function btc(){},
aq6:function aq6(d){this.a=d},
aDc:function aDc(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
et6:function et6(d){this.a=d},
et5:function et5(d){this.a=d},
hPc(){var w,v,u,t
for(v=0;v<4;++v){w=D.cZ_[v]
try{if(Ac.bVj(w)){u=w
return u}}catch(t){}}return null},
Qz(d,e){return C.hXZ(d,e)},
hXZ(c6,c7){var w=0,v=B.j(x.T),u,t=2,s=[],r=[],q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5
var $async$Qz=B.e(function(c9,d0){if(c9===1){s.push(d0)
w=t}for(;;)switch(w){case 0:c2={}
c3=c7.r
if(c3.length===0){u="This presentation has no slides."
w=1
break}q=C.hPc()
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
p=B.a6(c6,!0)
b7=new B.cr(null,x.A)
b8=A.d.gK(c3)
b9=$.aw()
o=new B.eN(b8,b9)
n=new B.eN("Getting ready\u2026",b9)
m=new B.eN(0,b9)
l=B.od(new C.fuT(c2,b7,o),!1,!1)
b6.lI(0,l)
b9=x.H
B.ca(null,A.db,!1,null,new C.fuU(n,m),c6,null,!0,!0,b9)
k=new C.fuY(b7)
j=new C.fuZ()
i=null
t=4
b3=c2.a
h=Aj.aR_(c2.b,b3)
b3=h.getContext("2d")
b3.toString
g=b3
f=J.fLU(h,30)
e=B.a([],x.aK)
b3=x.z
i=Ac.aVR(f,B.F(["mimeType",q,"videoBitsPerSecond",8e6],b3,b3))
A.Hd.y0(i,"dataavailable",new C.fuV(e))
d=new B.bU(new B.bg($.bx,x.dT),x.b2)
A.Hd.y0(i,"stop",new C.fuW(d))
J.ah_(n,"Drawing slide 1 of "+c3.length+"\u2026")
c5=j
w=8
return B.b(k.$0(),$async$Qz)
case 8:w=7
return B.b(c5.$1(d0),$async$Qz)
case 7:a0=d0
J.fLW(g,a0,0,0,c2.a,c2.b)
i.start(200)
a1=0
case 9:if(!(b3=a1,b8=c3.length,b3<b8)){w=11
break}a2=c3[a1]
w=a1>0?12:13
break
case 12:J.ah_(n,"Drawing slide "+B.t(a1+1)+" of "+b8+"\u2026")
J.ah_(o,a2)
c5=j
w=15
return B.b(k.$0(),$async$Qz)
case 15:w=14
return B.b(c5.$1(d0),$async$Qz)
case 14:a0=d0
case 13:J.fLW(g,a0,0,0,c2.a,c2.b)
a3=A.o.D(a2.w>0?a2.w:c7.e,1,120)
J.ah_(n,"Recording slide "+B.t(a1+1)+" of "+c3.length+" \xb7 "+B.t(a3)+" s")
a4=new B.S(Date.now(),0,!1).bP(1e6*a3)
case 16:b3=Date.now()
b8=a4
if(b3>=b8.gbo())b3=b3===b8.gbo()&&0<b8.gcw()
else b3=!0
if(!b3){w=17
break}J.fLW(g,a0,0,0,c2.a,c2.b)
w=18
return B.b(B.bN(A.fw,null,b9),$async$Qz)
case 18:w=16
break
case 17:J.ah_(m,(a1+1)/c3.length)
case 10:++a1
w=9
break
case 11:J.ah_(n,"Saving your video\u2026")
i.stop()
w=19
return B.b(d.a.cM(0,A.nM),$async$Qz)
case 19:a5=A.d.gK(q.split(";"))
a6=B.hM(e,a5)
c3=(self.URL||self.webkitURL).createObjectURL(a6)
c3.toString
a7=c3
a8=J.z(a5,"video/mp4")?"mp4":"webm"
c3=A.a.i(c7.b)
b3=B.af("[^\\w\\-. ]+",!0,!1,!1,!1)
a9=A.a.i(B.aK(c3,b3,"_"))
c0=B.n1(a7)
c0.download=B.t(J.ad(a9)===0?"presentation":a9)+"."+B.t(a8)
c3=c0.style
c3.display="none"
b0=c0
c3=document.body
if(c3!=null)c3.appendChild(b0).toString
J.KL(b0)
J.lQ(b0)
B.bN(A.nL,new C.fuX(a7),b9)
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
J.lQ(l)
if(p.pj())p.eI()
c3=o
b3=$.aw()
c3.shS(b3)
J.aPz(c3,0)
c3=n
c3.shS(b3)
J.aPz(c3,0)
c3=m
c3.shS(b3)
J.aPz(c3,0)
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Qz,v)},
fuT:function fuT(d,e,f){this.a=d
this.b=e
this.c=f},
fuS:function fuS(){},
fuU:function fuU(d,e){this.a=d
this.b=e},
fuY:function fuY(d){this.a=d},
fuZ:function fuZ(){},
fuV:function fuV(d){this.a=d},
fuW:function fuW(d){this.a=d},
fuX:function fuX(d){this.a=d},
bto:function bto(d,e,f){this.c=d
this.d=e
this.a=f},
f3k:function f3k(){},
f3l:function f3l(){},
cd0(d){var w=0,v=B.j(x.at),u,t,s
var $async$cd0=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.aqg(d,A.yX),$async$cd0)
case 3:s=f
if(s==null){u=null
w=1
break}t=s.by(new B.S(Date.now(),0,!1))
if(t.a<0){u=A.bw
w=1
break}u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$cd0,v)},
cd_(d){if(d==null)return!1
return d==="marriage_agreement"||d==="hati_kuhowa"||d==="hati_kuhoweya"||d==="hati_malipo_awamu"},
a72:function a72(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
biI:function biI(d){var _=this
_.d=null
_.e=d
_.f=!1
_.c=_.a=null},
eb0:function eb0(d){this.a=d},
eaZ:function eaZ(d){this.a=d},
eb_:function eb_(d,e){this.a=d
this.b=e},
a7V:function a7V(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
a7W:function a7W(d,e){this.a=d
this.b=e},
b1s:function b1s(){},
cfc:function cfc(){},
cfd:function cfd(){},
cfe:function cfe(d,e,f,g,h,i,j,k,l){var _=this
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
hom(d){return new C.ahh(d)},
a29:function a29(){},
ahh:function ahh(d){this.a=d},
aPU:function aPU(){},
avz:function avz(d,e){this.d=d
this.b=e
this.a=null},
aRo:function aRo(d){this.b=d
this.a=null},
fq1(d,e){var w=0,v=B.j(x.H)
var $async$fq1=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b($.X().gxd().Lg(d,e),$async$fq1)
case 2:B.fD4()
return B.h(null,v)}})
return B.i($async$fq1,v)},
hf0(d,e){return(A.r7[(d^e)&255]^A.o.aA(d,8))>>>0},
fnB(d,e,f,g,h,i){var w=C.hUk(d,A.da,f,null,A.cW,g,h,i)
return w},
hgT(d){var w=F.hhB(d)
if(w==null)return""
return"- WRITE EVERYTHING THE READER SEES IN "+w+" \u2014 every title, subtitle, sentence and note, with natural, correct grammar. Do not mix in English (JSON keys stay as given)."},
hvZ(d){var w,v,u,t,s,r=A.a.i(d)
if(r.length===0)return"XX"
w=r.toLowerCase()
v=A.oQ.h(0,w)
if(v!=null)return v
for(u=A.oQ.gdK(A.oQ),u=u.gaf(u);u.C();){t=u.gU(u).b
if(t.toLowerCase()===w)return t}u=B.af("[^A-Z]",!0,!1,!1,!1)
s=B.aK(r.toUpperCase(),u,"")
if(s.length>=2)return A.a.ap(s,0,2)
return A.a.ap(s+"XX",0,2)},
hh0(){var w,v
for(w=0,v='=== EVERYTHING YOU KNOW ABOUT NGMY (use only this; never invent features, numbers, prices, names or dates) ===\nTHE FOUNDER: NGMY stands for New Global Movement for Youth. It was created by KB PABLO QR (always written in capital letters), the Founder, President and CEO of NGMY. The "QR" in his name comes from QR codes, which NGMY and his business use a lot, and it is part of his brand. He built NGMY as one app (ngmy.org) that gives young people and families tools for work, money, learning, community and creativity. When a story is about the CEO, call him KB PABLO QR, Founder, President and CEO of NGMY. Do not give him a different name, age, birthplace, degrees, awards or family details, and do not make up quotes from him.\n\nFEATURES:\n';w<35;++w)v+="- "+D.cKL[w]+"\n"
v=v+"\nABOUT THE COMMUNITY AND THE SYSTEM (facts you can use; do not invent numbers, names or dates):\n- The community is M'MBONDO (also written MBONDO). Its motto is \"EMO 'YA M'MBONDO\". Members live in different US states.\n- The Civic Registry \u2014 people also just call it \"the system\" \u2014 was built inside the NGMY app for the M'MBONDO community.\n- Why it was built: a big problem in the community was not seeing where contribution money went. People gave but were unsure what happened to their money, so trust and giving went down. The system brings light: every contribution gets a receipt, members can see where the money is going and how much has been contributed, and that transparency builds trust and the confidence to keep contributing \u2014 when you know where your money goes, you give.\n- What it does:\n  \u2022 Registers community members with their details and a member ID card (Registry ID), kept safely as the community's records.\n  \u2022 Lets each state know how many members it has (state totals, nationwide totals).\n  \u2022 Records contributions with receipts and contribution reports, so everyone sees the money trail.\n  \u2022 Authorized Registrars enroll members and help them; there is a help mode for assisted sign-up.\n  \u2022 Civic Voting for community decisions, and a Civic State Wallet that shows each state's funds.\n- How NGMY helps members beyond the registry: help finding jobs and applying for them, fixing their houses, helping them get houses, sending money, and NGMY Advisors (AI advisors) who help people apply for jobs, food stamps and other benefits and fill out applications for them.\n- Tone for this community: warm, proud, hopeful and trustworthy; it is about unity, transparency and helping each other.\n\n\nHOW MEMBERS USE THE APP:\n"+"WHAT NGMY IS: NGMY stands for New Global Movement for Youth \u2014 multi-hub app by KB PABLO QR (Founder/CEO). Live site ngmy.org. Wallet balance in USD. Gmail login (@gmail.com), password 6+ chars, also Google/GitHub sign-in.\n\nBOTTOM NAV (7 tabs):\n1) Home \u2014 brand, Helper AI entry, loans, tech frames (Neural/Signal/Core/Vault Channel games).\n2) Tool Hub \u2014 Business Card Creator, Menu Studio (+ Bio Studio), Business Essentials.\n3) Slides \u2014 presentations + Marriage/Hati documents.\n4) NGMY Hub (center) \u2014 Civic Registry, NGMY Store, Help Center, Document Scanner; center star may open App Builder when enabled.\n5) Advisors \u2014 AI advisor chat (this hub).\n6) Creator Hub \u2014 Doc Share, Quote Calc, QR Generator, Play Zone, Kiswahili School, Recorder, Video Studio, Phone Unlock.\n7) Profile \u2014 theme, logout, legal, Worksheets (Projects / Cashier IOUs / Family Tree).\n\nMENU STUDIO (Tool Hub \u2192 Menu Studio):\n- Menus tab: design restaurant/business menus, publish public link https://ngmy.org/?m={slug}\n- First menu free; more menus need Menu Studio subscription (paywall shows price).\n- Bios tab (same studio): link-in-bio pages, publish https://ngmy.org/?b={slug}\n- First Bio free with starter template; more Bios/templates need Bio Studio subscription.\n- Extra Bio photo/header changes may need a photo pack after free changes.\n- Local Menu / Local Bio: Home Essentials hub \u2192 device-local publish at /local-menu/ and /local-bio/\n\nBUSINESS CARD: Tool Hub \u2192 create/edit/download. Paid unlock for edit+download window (paywall).\n\nSLIDES: Slides tab. Free blank + some class templates/designs. Slides Pro unlocks more. Marriage documents are a separate short session unlock.\n\nADVISORS: 30 free minutes, then Advisors subscription for unlimited chat (admins unlimited).\n\nCIVIC REGISTRY (NGMY Hub): community ID, PIN gate, enrollment, registrars (AR), civic registrar roles. Guest enroll can use ?civic=enroll. Georgia stays free. Every other state gets a 2-month free Civic Registry trial for Authorized Registrars, then $50/mo State Registrar sponsorship starting month 3.\n\nVAULT GAMES (Home \u2192 Vault Channel): arcade games. Need an active Growth Income investment for full access; otherwise one free play total. Free trial does not unlock games.\n\nGROWTH INCOME / INVEST: purchase a plan, daily clock-in for ROI over work days; min withdraw typically $10. Plans are $5, $20, $30, $50 and $100 (the most expensive is $100). Plan availability is admin-controlled.\n\nCREATOR TOOLS:\n- Doc Share \u2014 share docs; free individual creations then paid / org license.\n- QR Generator \u2014 free saves then paid access window.\n- Transfer \u2014 receive free; limited free sends then monthly unlock.\n- Kiswahili School \u2014 Basics free; other levels one-time unlock.\n- Document Scanner \u2014 trial then monthly.\n- Message Translator \u2014 paid unlimited.\n- Phone Unlock \u2014 short access window.\n- Video Studio / Recorder / Play Zone \u2014 Creator Hub tools.\n- Worksheets \u2192 Cashier (IOUs/receipts), Family Tree (create/photos may be paid).\n- Invoices \u2014 free standard tier with limited free premium saves; paid templates via paywall.\n- App Builder \u2014 Hub center (if enabled); cloud + Bolt AI may be paid.\n- Music Studio \u2014 AI songs may cost wallet credits when enabled.\n\nSTORE / JOBS / LOANS / HELP: Store in NGMY Hub; loans from Home; jobs/helpers need approval; Help Center + NGMY Helper AI for support.\n\nGUEST LINKS (no full login): /bio/, /local-bio/, /menu/, /local-menu/, /invoice/, /app/{slug}.\n\nHOW TO HELP MEMBERS: Give clear tap-by-tap steps. Stay in character. If unsure of a live price, send them to the feature paywall rather than guessing.\n"
return A.a.i(v.charCodeAt(0)==0?v:v)},
bz8(d,e){return C.hQX(d,e)},
hQX(d,e){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l
var $async$bz8=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
if(d.length===0){u=!1
w=1
break}r=B.hM([d],"application/pdf")
n=x.z
q=B.aT1(B.a([r],x.e3),e,B.F(["type","application/pdf"],n,n))
p=B.cA(B.F(["files",B.a([q],x.fA),"title",e],x.N,x.C))
n=window.navigator
n.toString
o=n
w=7
return B.b(B.eh(B.jU(o,"share",[p]),x.H),$async$bz8)
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
return B.i($async$bz8,v)},
fWh(){var w=0,v=B.j(x.y),u,t,s
var $async$fWh=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=$.fg1
s=$.byG
if(s==null)s="presentation.pdf"
if(t==null||t.length===0){u=!1
w=1
break}u=C.bz8(t,s)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fWh,v)},
bAv(){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$bAv=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=$.fg1
l=$.byG
k=l==null?"presentation.pdf":l
if(m==null||m.length===0){u=!1
w=1
break}w=Z.hbD()?3:4
break
case 3:w=5
return B.b(C.bz8(m,k),$async$bAv)
case 5:if(e){u=!0
w=1
break}case 4:r=$.byH
if(r==null||r.length===0){u=!1
w=1
break}t=7
p=B.n1(null)
p.href=r
p.download=k
o=p.style
o.display="none"
q=p
o=document.body
if(o!=null)o.appendChild(q).toString
J.KL(q)
w=10
return B.b(B.bN(A.a1,null,x.H),$async$bAv)
case 10:J.lQ(q)
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
return B.i($async$bAv,v)},
fW8(){var w=0,v=B.j(x.y),u,t,s,r
var $async$fW8=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=$.byH
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
return B.i($async$fW8,v)},
fWp(d,e){var w=0,v=B.j(x.H),u,t
var $async$fWp=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:t=(self.URL||self.webkitURL).createObjectURL(B.hM([d],"text/html"))
t.toString
u=window
u.toString
A.ls.us(u,t,"_blank")
return B.h(null,v)}})
return B.i($async$fWp,v)},
b0p(d,e){var w=0,v=B.j(x.y),u
var $async$b0p=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(B.b0r(d,e),$async$b0p)
case 3:if(g){u=!0
w=1
break}w=4
return B.b(B.b0q(d),$async$b0p)
case 4:u=g<2
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$b0p,v)}},D,O,H,Am,A8,Y,V,An,G,F,E,Ao,W,Q,Z,A_,Ap,Aq,A9,K,Ar,A0,N,X,Aa,L,Ab,As,P,A1,At,Au,Ac,Ad,Av,Ae,Af,Ag,Aw,Ax,R,Ay,I,Az,AA,S,T,M,A2,A3,A4
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
O=c[89]
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
C.nM.prototype={
uM(d){var w,v,u=this,t=u.c
if(t===0)return u
w=!u.a
v=u.b
t=C.tz(t,v)
return new C.nM(t===0?!1:w,v,t)},
bJv(d){var w,v,u,t,s,r,q=this.c
if(q===0)return $.CC()
w=q+d
v=this.b
u=new Uint16Array(w)
for(t=q-1;t>=0;--t)u[t+d]=v[t]
s=this.a
r=C.tz(w,u)
return new C.nM(r===0?!1:s,u,r)},
bJZ(d){var w,v,u,t,s,r,q,p=this,o=p.c
if(o===0)return $.CC()
w=o-d
if(w<=0)return p.a?$.fXM():$.CC()
v=p.b
u=new Uint16Array(w)
for(t=d;t<o;++t)u[t-d]=v[t]
s=p.a
r=C.tz(w,u)
q=new C.nM(r===0?!1:s,u,r)
if(s)for(t=0;t<d;++t)if(v[t]!==0)return q.aC(0,$.a1X())
return q},
dU(d,e){var w,v,u,t,s,r=this
if(e<0)throw B.V(B.dI("shift-amount must be posititve "+e,null))
w=r.c
if(w===0)return r
v=A.o.an(e,16)
if(A.o.F(e,16)===0)return r.bJv(v)
u=w+v+1
t=new Uint16Array(u)
C.h8d(r.b,w,e,t)
w=r.a
s=C.tz(u,t)
return new C.nM(s===0?!1:w,t,s)},
mi(d,e){var w,v,u,t,s,r,q,p,o,n=this
if(e<0)throw B.V(B.dI("shift-amount must be posititve "+e,null))
w=n.c
if(w===0)return n
v=A.o.an(e,16)
u=A.o.F(e,16)
if(u===0)return n.bJZ(v)
t=w-v
if(t<=0)return n.a?$.fXM():$.CC()
s=n.b
r=new Uint16Array(t)
C.hG0(s,w,e,r)
w=n.a
q=C.tz(t,r)
p=new C.nM(q===0?!1:w,r,q)
if(w){if((s[v]&A.o.dU(1,u)-1)!==0)return p.aC(0,$.a1X())
for(o=0;o<v;++o)if(s[o]!==0)return p.aC(0,$.a1X())}return p},
aL(d,e){var w,v=this.a
if(v===e.a){w=C.cCX(this.b,this.c,e.b,e.c)
return v?0-w:w}return v?-1:1},
a7f(d,e){var w,v,u,t=this,s=t.c,r=d.c
if(s<r)return d.a7f(t,e)
if(s===0)return $.CC()
if(r===0)return t.a===e?t:t.uM(0)
w=s+1
v=new Uint16Array(w)
C.hFZ(t.b,s,d.b,r,v)
u=C.tz(w,v)
return new C.nM(u===0?!1:e,v,u)},
GR(d,e){var w,v,u,t=this,s=t.c
if(s===0)return $.CC()
w=d.c
if(w===0)return t.a===e?t:t.uM(0)
v=new Uint16Array(s)
C.b8s(t.b,s,d.b,w,v)
u=C.tz(s,v)
return new C.nM(u===0?!1:e,v,u)},
bwB(d,e){var w,v,u,t,s,r=this.c,q=d.c
r=r<q?r:q
w=this.b
v=d.b
u=new Uint16Array(r)
for(t=0;t<r;++t)u[t]=w[t]&v[t]
s=C.tz(r,u)
return new C.nM(!1,u,s)},
bwA(d,e){var w,v,u=this.c,t=this.b,s=d.b,r=new Uint16Array(u),q=d.c
if(u<q)q=u
for(w=0;w<q;++w)r[w]=t[w]&~s[w]
for(w=q;w<u;++w)r[w]=t[w]
v=C.tz(u,r)
return new C.nM(!1,r,v)},
bwC(d,e){var w,v,u,t,s,r=this.c,q=d.c,p=r>q?r:q,o=this.b,n=d.b,m=new Uint16Array(p)
if(r<q){w=r
v=d}else{w=q
v=this}for(u=0;u<w;++u)m[u]=o[u]|n[u]
t=v.b
for(u=w;u<p;++u)m[u]=t[u]
s=C.tz(p,m)
return new C.nM(s!==0,m,s)},
U5(d,e){var w,v,u,t=this
if(t.c===0||e.c===0)return $.CC()
w=t.a
if(w===e.a){if(w){w=$.a1X()
return t.GR(w,!0).bwC(e.GR(w,!0),!0).a7f(w,!0)}return t.bwB(e,!1)}if(w){v=t
u=e}else{v=e
u=t}return u.bwA(v.GR($.a1X(),!1),!1)},
ad(d,e){var w,v,u=this,t=u.c
if(t===0)return e
w=e.c
if(w===0)return u
v=u.a
if(v===e.a)return u.a7f(e,v)
if(C.cCX(u.b,t,e.b,w)>=0)return u.GR(e,v)
return e.GR(u,!v)},
aC(d,e){var w,v,u=this,t=u.c
if(t===0)return e.uM(0)
w=e.c
if(w===0)return u
v=u.a
if(v!==e.a)return u.a7f(e,v)
if(C.cCX(u.b,t,e.b,w)>=0)return u.GR(e,v)
return e.GR(u,!v)},
aF(d,e){var w,v,u,t,s,r,q,p=this.c,o=e.c
if(p===0||o===0)return $.CC()
w=p+o
v=this.b
u=e.b
t=new Uint16Array(w)
for(s=0;s<o;){C.h8e(u[s],v,0,t,s,p);++s}r=this.a!==e.a
q=C.tz(w,t)
return new C.nM(q===0?!1:r,t,q)},
bJu(d){var w,v,u,t
if(this.c<d.c)return $.CC()
this.aPZ(d)
w=$.fRm.c5()-$.awi.c5()
v=C.fRo($.fRl.c5(),$.awi.c5(),$.fRm.c5(),w)
u=C.tz(w,v)
t=new C.nM(!1,v,u)
return this.a!==d.a&&u>0?t.uM(0):t},
ckO(d){var w,v,u,t=this
if(t.c<d.c)return t
t.aPZ(d)
w=C.fRo($.fRl.c5(),0,$.awi.c5(),$.awi.c5())
v=C.tz($.awi.c5(),w)
u=new C.nM(!1,w,v)
if($.fRn.c5()>0)u=u.mi(0,$.fRn.c5())
return t.a&&u.c>0?u.uM(0):u},
aPZ(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.c
if(f===$.h8a&&d.c===$.h8c&&g.b===$.h89&&d.b===$.h8b)return
w=d.b
v=d.c
u=16-A.o.gaj7(w[v-1])
if(u>0){t=new Uint16Array(v+5)
s=C.h88(w,v,u,t)
r=new Uint16Array(f+5)
q=C.h88(g.b,f,u,r)}else{r=C.fRo(g.b,0,f,f+2)
s=v
t=w
q=f}p=t[s-1]
o=q-s
n=new Uint16Array(q)
m=C.fRp(t,s,o,n)
l=q+1
k=r.$flags|0
if(C.cCX(r,q,n,m)>=0){k&2&&B.ai(r)
r[q]=1
C.b8s(r,l,n,m,r)}else{k&2&&B.ai(r)
r[q]=0}j=new Uint16Array(s+2)
j[s]=1
C.b8s(j,s+1,t,s,j)
i=q-1
while(o>0){h=C.hG_(p,r,i);--o
C.h8e(h,j,0,r,o,s)
if(r[i]<h){m=C.fRp(j,s,o,n)
C.b8s(r,l,n,m,r)
while(--h,r[i]<h)C.b8s(r,l,n,m,r)}--i}$.h89=g.b
$.h8a=f
$.h8b=w
$.h8c=v
$.fRl.b=r
$.fRm.b=l
$.awi.b=s
$.fRn.b=u},
gX(d){var w,v,u,t=new C.cCY(),s=this.c
if(s===0)return 6707
w=this.a?83585:429689
for(v=this.b,u=0;u<s;++u)w=t.$2(w,v[u])
return new C.cCZ().$1(w)},
A(d,e){if(e==null)return!1
return e instanceof C.nM&&this.aL(0,e)===0},
rV(d,e){return this.aL(0,e)>0},
N(d){var w,v,u
for(w=this.c-1,v=this.b,u=0;w>=0;--w)u=u*65536+v[w]
return this.a?-u:u},
uG(d){var w,v,u,t,s,r,q,p=this,o={},n=p.c
if(n===0)return 0
w=new Uint8Array(8);--n
v=p.b
u=16*n+A.o.gaj7(v[n])
if(u>1024)return p.a?-1/0:1/0
if(p.a)w[7]=128
t=u-53+1075
w[6]=(t&15)<<4
w[7]=(w[7]|A.o.aA(t,4))>>>0
o.a=o.b=0
o.c=n
s=new C.cD_(o,p)
n=s.$1(5)
w[6]=w[6]|n&15
for(r=5;r>=0;--r)w[r]=s.$1(8)
q=new C.cD0(w)
if(J.z(s.$1(1),1))if((w[0]&1)===1)q.$0()
else if(o.b!==0)q.$0()
else for(r=o.c;r>=0;--r)if(v[r]!==0){q.$0()
break}return J.l3(A.aG.gaO(w)).getFloat64(0,!0)},
u(d){var w,v,u,t,s,r=this,q=r.c
if(q===0)return"0"
if(q===1){if(r.a)return A.o.u(-r.b[0])
return A.o.u(r.b[0])}w=B.a([],x.s)
q=r.a
v=q?r.uM(0):r
while(v.c>1){u=$.hli()
if(u.c===0)B.ba(D.b1j)
t=v.ckO(u).u(0)
w.push(t)
s=t.length
if(s===1)w.push("000")
if(s===2)w.push("00")
if(s===3)w.push("0")
v=v.bJu(u)}w.push(A.o.u(v.b[0]))
if(q)w.push("-")
return new B.dw(w,x.bJ).fW(0)},
$iaQD:1,
$ihF:1}
C.aQ3.prototype={
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
cIz(d,e){var w=this.b.h(0,e)
return w!=null?this.a[w]:null},
gK(d){return A.d.gK(this.a)},
gal(d){return A.d.gal(this.a)},
gam(d){return this.a.length===0},
gcn(d){return this.a.length!==0},
gaf(d){var w=this.a
return new J.jX(w,w.length,B.U(w).k("jX<1>"))}}
C.Rc.prototype={
cQz(){var w,v
if(this.as==null)this.baO()
w=this.as
v=w==null?null:w.anP()
return v==null?null:v.eD()},
baO(){var w,v
if(this.as!=null)return
w=this.Q
if(w!=null){v=w.anP().eD()
this.as=new C.bMg(v)}},
gY(d){return this.at}}
C.a36.prototype={
a4(){return"CompressionType."+this.b}}
C.bG6.prototype={
eq(d){var w,v,u,t,s=this
if(d===0)return 0
if(s.c===0){s.c=8
s.b=s.a.cp()}for(w=s.a,v=0;u=s.c,d>u;){v=A.o.dU(v,u)+(s.b&A.yw[u])
d-=u
s.c=8
u=w.b
u.toString
s.b=u[w.c++]}if(d>0){if(u===0){s.c=8
s.b=w.cp()}w=A.o.dU(v,d)
u=s.b
t=s.c-d
v=w+(A.o.fA(u,t)&A.yw[d])
s.c=t}return v}}
C.bEt.prototype={
cGR(d,e){var w,v,u,t,s,r=this,q=new C.bG6(d)
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
t=r.cj6(q)
if(t<0)return!1
if(t===0){q.eq(8)
q.eq(8)
q.eq(8)
q.eq(8)
s=r.cj9(q,e)
if(s<0)return!1
v=(v<<1|v>>>31)^s^4294967295}else if(t===2){q.eq(8)
q.eq(8)
q.eq(8)
q.eq(8)
return!0}}return!0},
cj6(d){var w,v,u,t
for(w=!0,v=!0,u=0;u<6;++u){t=d.eq(8)
if(t!==D.ddB[u])v=!1
if(t!==D.cSR[u])w=!1
if(!w&&!v)return-1}return v?0:2},
cj9(d3,d4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9=this,d0=4294967295,d1=d3.eq(1),d2=((d3.eq(8)<<8|d3.eq(8))<<8|d3.eq(8))>>>0
c9.c=new Uint8Array(16)
for(w=0;w<16;++w){v=c9.c
u=d3.eq(1)
v.$flags&2&&B.ai(v)
v[w]=u}c9.d=new Uint8Array(256)
for(w=0,t=0;w<16;++w,t+=16)if(c9.c[w]!==0)for(s=0;s<16;++s){v=c9.d
u=d3.eq(1)
v.$flags&2&&B.ai(v)
v[t+s]=u}c9.bZI()
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
u[w]=l}c9.fr=B.c1(6,$.hjp(),!1,x.E)
for(j=0;j<q;++j){v=c9.fr
v[j]=new Uint8Array(258)
i=d3.eq(5)
for(w=0;w<r;++w){for(;;){if(i<1||i>20)return-1
if(d3.eq(1)===0)break
i=d3.eq(1)===0?i+1:i-1}v=c9.fr[j]
v.$flags&2&&B.ai(v)
v[w]=i}}v=$.hjo()
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
if(f<h)h=f}c9.bVg(v[j],u[j],o[j],n[j],h,g,r)
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
a3=c9.asC(d3)
if(a3<0)return-1
for(a4=0;;){if(a3===e)break
if(a3===0||a3===1){a5=-1
a6=1
do{if(a6>=2097152)return-1
if(a3===0)a5+=a6
else if(a3===1)a5+=2*a6
a6*=2
a3=c9.asC(d3)}while(a3===0||a3===1);++a5
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
a3=c9.asC(d3)
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
c1=(c1<<8^D.GI[c1>>>24&255^v])>>>0;--c2}if(c4===c0)return c1
if(c4>c0)return-1
v=c9.b
b5=v[b5]
b6=b5>>>8
if(b8===0){b8=D.GK[b9];++b9
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
if(b8===0){b8=D.GK[b9];++b9
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
if(b8===0){b8=D.GK[b9];++b9
if(b9===512)b9=0}u=b8===1?1:0
c5=b5&255^u;++c4
if(c4===c0){c6=b7
b5=b6
c2=3
continue}if(c5!==b7){c6=c5
b5=b6
c2=3
continue}b5=v[b6]
if(b8===0){b8=D.GK[b9];++b9
if(b9===512)b9=0}u=b8===1?1:0
c2=(b5&255^u)+4
b5=v[b5>>>8]
b6=b5>>>8
if(b8===0){b8=D.GK[b9];++b9
if(b9===512)b9=0}v=b8===1?1:0
c6=b5&255^v
c4=c4+1+1
b5=b6}else for(c7=b7,c2=0,c3=0,c4=1;;c3=c7,c7=c8){if(c2>0){for(v=c3&255;;){if(c2===1)break
d4.bF(c3)
c1=c1<<8^D.GI[c1>>>24&255^v];--c2}d4.bF(c3)
c1=(c1<<8^D.GI[c1>>>24&255^v])>>>0}if(c4>c0)return-1
if(c4===c0)return c1
v=1e5*c9.a
if(b5>=v)return-1
u=c9.b
b5=u[b5]
c5=b5&255
b5=b5>>>8;++c4
c2=0
if(c5!==c7){d4.bF(c7)
c1=(c1<<8^D.GI[c1>>>24&255^c7&255])>>>0
c8=c5
continue}if(c4===c0){d4.bF(c7)
c1=(c1<<8^D.GI[c1>>>24&255^c7&255])>>>0
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
asC(d){var w,v,u,t,s=this,r=s.ay
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
bVg(d,e,f,g,h,i,j){var w,v,u,t,s,r,q,p
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
bZI(){var w,v,u,t=this
t.fx=0
t.e=new Uint8Array(256)
for(w=0;w<256;++w){v=t.d
v===$&&B.c()
if(v[w]!==0){v=t.e
u=t.fx++
v.$flags&2&&B.ai(v)
v[u]=w}}}}
C.cv7.prototype={
aGq(d,e,f){var w,v,u,t,s,r=this,q=r.a=r.bMF(e)
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
if(w>0)e.aGt(w,!1)
r.cju(e)
q=r.r
v=r.f
u=e.aJu(Math.min(v,1024),v,q)
q=r.x
for(;;){v=u.c
t=u.d
t===$&&B.c()
if(!(v<t))break
if(u.aK()!==33639248)break
s=new C.b78()
s.cQy(0,u,e,f)
q.push(s)}},
cju(d){var w,v,u,t,s=d.c,r=this.a-20
if(r<0)return
w=d.a6T(20,r)
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
bMF(d){var w,v,u,t,s,r,q,p,o,n
if(d.gM(0)<=4)return-1
w=d.c
v=d.gM(0)-4
u=Math.min(v,1024)
t=v-u
for(s=u-4;t>=0;){d.c=t
r=d.a6T(u,t)
q=d.c
p=r.b
d.c=q+(p==null?0:p.length-r.c)
o=new B.akP(A.hT)
o.aKL(r.eD(),A.hT,null,null)
for(n=s;n>=0;--n){o.c=n
if(o.aK()===101010256){d.c=w
return t+n}}t=t>0&&t<u?0:t-u}return-1}}
C.cv5.prototype={}
C.avX.prototype={
a4(){return"ZipEncryptionMode."+this.b}}
C.cv8.prototype={
aGq(d,e,f){var w,v,u,t,s,r,q,p,o=this
if(e.aK()!==67324752)return
e.aU()
o.b=e.aU()
w=D.aCj.h(0,e.aU())
o.c=w==null?D.L2:w
o.d=e.aU()
o.e=e.aU()
o.f=e.aK()
o.r=e.aK()
o.w=e.aK()
v=e.aU()
u=e.aU()
o.x=e.amD(v)
o.y=e.hb(u).eD()
w=o.z
t=w.w
o.r=t
w=w.x
o.w=w
o.at=(o.b&1)!==0?D.aSp:D.Dd
o.ay=f
o.Q=e.hb(t)
if(o.at!==D.Dd&&u>2){w=o.y
w.toString
s=B.r1(w,A.hT,null,null)
for(;;){w=s.c
t=s.d
t===$&&B.c()
if(!(w<t))break
if(s.aU()===39169){s.aU()
s.aU()
s.amD(2)
w=s.b
w.toString
r=w[s.c++]
q=s.aU()
o.at=D.aSq
o.ax=new C.cv5(r,q)
w=D.aCj.h(0,q)
o.c=w==null?D.L2:w}}}if((o.b&8)!==0){p=e.aK()
if(p===134695760)o.f=e.aK()
else o.f=p
o.r=e.aK()
o.w=e.aK()}},
gM(d){return this.bkg().length},
anP(){var w,v,u,t,s,r=this,q=null,p=r.Q
if(p==null)return B.r1(new Uint8Array(0),A.hT,q,q)
w=r.at
if(w!==D.Dd)if(p.gM(0)<=0)r.at=D.Dd
else{if(w===D.aSp){p=r.bHP(p)
r.Q=p}else if(w===D.aSq){p=r.bHs(p)
r.Q=p}r.at=D.Dd}w=r.c
if(w===D.af5){v=p.c
u=B.df()
p=r.Q
if(p.gM(0)<=524288e3)u.b=A.pc.B8(p.eD(),!0,!1)
else{t=B.a7K(A.hT,r.w)
p=r.Q
p.toString
A.pc.a36(p,t,!0,!1)
u.b=t.Go()}r.Q.c=v
return B.r1(u.bd(),A.hT,q,q)}else if(w===D.af6){s=B.a7K(A.hT,32768)
p=r.Q
v=p.c
C.hox().cGR(p,s)
u=s.Go()
r.Q.c=v
return B.r1(u,A.hT,q,q)}else return B.r1(p.eD(),A.hT,q,q)},
bkg(){var w=this.Q
if(w==null)return new Uint8Array(0)
return w.eD()},
u(d){return this.x},
b6G(d){var w=this.ch,v=C.Jb(C.hf0(w[0].N(0),d))
w[0]=v
v=w[1].ad(0,v.U5(0,C.Jb(255)))
w[1]=v
w[1]=v.aF(0,C.Jb(134775813)).ad(0,C.Jb(1)).U5(0,C.Jb(4294967295))
w[2]=C.Jb(C.hf0(w[2].N(0),w[1].mi(0,24).N(0)))},
aPo(){var w=(this.ch[2].U5(0,C.Jb(65535)).N(0)|2)>>>0
return w*((w^1)>>>0)>>>8&255},
bHP(d){var w,v,u,t,s,r=this,q=null
if(r.Q==null)return B.r1(new Uint8Array(0),A.hT,q,q)
for(w=0;w<12;++w){v=r.Q
u=v.b
u.toString
r.b6G(u[v.c++]^r.aPo())}t=r.Q.eD()
for(v=t.length,u=t.$flags|0,w=0;w<v;++w){s=t[w]^r.aPo()
r.b6G(s)
u&2&&B.ai(t)
t[w]=s}return B.r1(t,A.hT,q,q)},
bHs(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this.ax.c
if(k===1){w=d.hb(8).eD()
v=16}else if(k===2){w=d.hb(12).eD()
v=24}else{w=d.hb(16).eD()
v=32}u=d.hb(2).eD()
t=d.hb(d.gM(0)-10)
s=d.hb(10)
r=t.eD()
k=this.ay
k.toString
q=C.hFG(k,w,v)
p=new Uint8Array(B.cf(A.aG.dn(q,0,v)))
k=v*2
o=new Uint8Array(B.cf(A.aG.dn(q,v,k)))
if(!C.h7D(A.aG.dn(q,k,k+2),u))throw B.V(B.fl("password error"))
k=new Uint8Array(16)
n=new C.bD3(k,new Uint8Array(16),p)
k=x.S
m=J.a4w(0,k)
m=n.r=new C.cf1(m)
m.c=!0
m.b=m.bjA(!0,new C.arE(p))
if(m.c)m.d=B.bl(D.o_,!0,k)
else m.d=B.bl(D.yp,!0,k)
l=C.h5Q(C.h5S(),64)
l.bd8(new C.arE(o))
n.w=l
n.cQ6(r,0,r.length)
k=s.eD()
m=n.x
m===$&&B.c()
if(!C.h7D(k,m))throw B.V(B.fl("macs don't match"))
return B.r1(r,A.hT,null,null)}}
C.b78.prototype={
cQy(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=this
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
if(w>0)n.at=e.amD(w)
if(v>0){t=e.hb(v).eD()
n.ax=t
if(v>=4){s=B.r1(t,A.hT,null,null)
for(;;){t=s.c
r=s.d
r===$&&B.c()
if(!(t<r))break
q=s.aU()
p=s.aU()
o=s.a6T(p,s.c)
t=s.c
r=o.b
s.c=t+(r==null?0:r.length-o.c)
if(q===1){if(p>=8&&n.x===4294967295){n.x=o.rJ()
p-=8}if(p>=8&&n.w===4294967295){n.w=o.rJ()
p-=8}if(p>=8&&n.as===4294967295){n.as=o.rJ()
p-=8}if(p>=4&&n.y===65535)n.y=o.aK()}}}}if(u>0)e.amD(u)
f.c=n.as
t=new C.cv8(D.L2,n,D.Dd,B.a([C.Jb(0),C.Jb(0),C.Jb(0)],x.f3))
n.ch=t
t.aGq(0,f,g)},
u(d){return this.at}}
C.cv6.prototype={
cGS(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=new C.cv7(B.a([],x.fT))
this.a=g
g.aGq(0,d,f)
g=B.a([],x.bm)
w=B.T(x.N,x.S)
v=new C.aQ3(g,w)
for(u=this.a.x,t=u.length,s=0;s<u.length;u.length===t||(0,B.L)(u),++s){r=u[s]
q=r.ch
p=r.Q>>>16
o=q.x
n=A.a.cb(o,"/")||A.a.cb(o,"\\")
m=w.h(0,o)
l=m!=null?g[m]:h
if(l==null){l=n?new C.Rc(o,A.o.an(Date.now(),1000),0):C.fZ8(o,q.w,q)
v.L(0,l)}l.b=p
if(r.a>>>8===3)if((p&61440)===40960){k=C.fZ8(o,q.w,q)
if(k.as==null)k.baO()
o=k.as
if(o==null)j=h
else{o=o.a
j=new B.akP(A.hT)
j.aKL(o,A.hT,h,h)}i=j==null?h:j.eD()
if(i!=null)new B.Fx(!1).D4(i,0,h,!0)}}return v}}
C.bD3.prototype={
cQ6(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.w
l===$&&B.c()
l.a.C3(0,d,0,f)
for(l=e+f,w=m.c,v=d.$flags|0,u=m.b,t=e;t<l;t=s){s=t+16
r=s<=l?16:l-t
C.hog(u,m.a)
q=m.r
if(16>u.byteLength)B.ba(B.dI("Input buffer too short",null))
if(16>w.byteLength)B.ba(B.dI("Output buffer too short",null))
p=q.c
o=q.b
if(p){o===$&&B.c()
q.bL3(u,0,w,0,o)}else{o===$&&B.c()
q.bHT(u,0,w,0,o)}for(n=0;n<r;++n){q=t+n
p=d[q]
o=w[n]
v&2&&B.ai(d)
d[q]=p^o}++m.a}l=m.w
w=l.b
w===$&&B.c()
w=new Uint8Array(w)
m.x=w
l.KD(w,0)
m.x=A.aG.dn(m.x,0,10)
w=m.w
l=w.a
l.lt(0)
w=w.d
w===$&&B.c()
l.C3(0,w,0,w.length)
return f}}
C.cf6.prototype={}
C.cfa.prototype={}
C.cf4.prototype={}
C.arE.prototype={}
C.cf9.prototype={
cH6(d,e,f,g){var w,v,u,t,s,r,q,p,o=this,n=o.a
n===$&&B.c()
w=n.c
n=o.b
v=n.b
v===$&&B.c()
u=A.o.e3(w+v-1,v)
t=new Uint8Array(4)
s=new Uint8Array(u*v)
n.bd8(new C.arE(A.aG.fJ(d,e)))
for(r=0,q=1;q<=u;++q){for(p=3;;--p){t[p]=t[p]+1
if(t[p]!==0)break}n=o.a
o.bM1(n.a,n.b,t,s,r)
r+=v}A.aG.hd(f,g,g+w,s)
return o.a.c},
bM1(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m=this
if(e<=0)throw B.V(B.dI("Iteration count must be at least 1.",null))
w=m.b
v=w.a
v.C3(0,d,0,d.length)
v.C3(0,f,0,4)
u=m.c
u===$&&B.c()
w.KD(u,0)
u=m.c
A.aG.hd(g,h,h+u.length,u)
for(u=g.$flags|0,t=1;t<e;++t){s=m.c
v.C3(0,s,0,s.length)
w.KD(m.c,0)
for(s=m.c,r=s.length,q=0;q!==r;++q){p=h+q
o=g[p]
n=s[q]
u&2&&B.ai(g)
g[p]=o^n}}}}
C.cf5.prototype={}
C.cf3.prototype={}
C.arF.prototype={
A(d,e){var w,v,u
if(e==null)return!1
w=!1
if(e instanceof C.arF){v=this.a
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
w=A.o.rV(w,e.gbVx())
if(!w)e.gbVx()
return w},
aIW(d,e){this.a=0
this.b=d},
rZ(d){return this.aIW(d,null)},
aJx(d){var w,v=this,u=v.b
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
w.aZA(v,u)
u=w.b
u===$&&B.c()
w.aZA(v,u)
u=v.a
return u.charCodeAt(0)==0?u:u},
aZA(d,e){var w,v=A.o.fQ(e,16)
for(w=8-v.length;w>0;--w)d.a+="0"
d.a+=v},
gX(d){var w,v=this.a
v===$&&B.c()
w=this.b
w===$&&B.c()
return B.bs(v,w,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h)}}
C.cf8.prototype={
lt(d){var w,v=this
v.a.rZ(0)
v.c=0
A.aG.fZ(v.b,0,4,0)
v.w=0
w=v.r
A.d.fZ(w,0,w.length,0)
w=v.f
w[0]=1732584193
w[1]=4023233417
w[2]=2562383102
w[3]=271733878
w[4]=3285377520},
anj(d){var w,v=this,u=v.b,t=v.c
t===$&&B.c()
w=t+1
v.c=w
u.$flags&2&&B.ai(u)
u[t]=d&255
if(w===4){v.b05(u,0)
v.c=0}v.a.aJx(1)},
C3(d,e,f,g){var w=this.chY(e,f,g)
f+=w
g-=w
w=this.chZ(e,f,g)
this.chP(e,f+w,g-w)},
KD(d,e){var w,v=this,u=C.h5R(v.a),t=u.a
t===$&&B.c()
t=C.fWU(t,3)
u.a=t
w=u.b
w===$&&B.c()
u.a=(t|w>>>29)>>>0
u.b=C.fWU(w,3)
v.chT()
v.chQ(u)
v.ars()
v.cc3(d,e)
v.lt(0)
return 20},
b05(d,e){var w=this,v=w.w
v===$&&B.c()
w.w=v+1
w.r[v]=J.nW(A.aG.gaO(d),d.byteOffset,d.length).getUint32(e,A.i4===w.d)
if(w.w===16)w.ars()},
ars(){this.cQ5()
this.w=0
A.d.fZ(this.r,0,16,0)},
chP(d,e,f){while(f>0){this.anj(d[e]);++e;--f}},
chZ(d,e,f){var w,v
for(w=this.a,v=0;f>4;){this.b05(d,e)
e+=4
f-=4
w.aJx(4)
v+=4}return v},
chY(d,e,f){var w,v=0
for(;;){w=this.c
w===$&&B.c()
if(!(w!==0&&f>0))break
this.anj(d[e]);++e;--f;++v}return v},
chT(){this.anj(128)
for(;;){var w=this.c
w===$&&B.c()
if(!(w!==0))break
this.anj(0)}},
chQ(d){var w,v=this,u=v.w
u===$&&B.c()
if(u>14)v.ars()
u=v.d
switch(u){case A.i4:u=v.r
w=d.b
w===$&&B.c()
u[14]=w
w=d.a
w===$&&B.c()
u[15]=w
break
case A.DE:u=v.r
w=d.a
w===$&&B.c()
u[14]=w
w=d.b
w===$&&B.c()
u[15]=w
break
default:throw B.V(B.bd("Invalid endianness: "+u.u(0)))}},
cc3(d,e){var w,v,u,t,s,r,q
for(w=this.e,v=this.f,u=d.length,t=A.i4===this.d,s=0;s<w;++s){r=v[s]
q=J.nW(A.aG.gaO(d),d.byteOffset,u)
q.$flags&2&&B.ai(q,11)
q.setUint32(e+s*4,r,t)}},
gda(d){return this.f}}
C.cfb.prototype={
cQ5(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
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
C.cf7.prototype={
bd8(d){var w,v,u,t,s=this,r=s.a
r.lt(0)
w=d.a
w===$&&B.c()
v=w.length
u=s.c
u===$&&B.c()
if(v>u){r.C3(0,w,0,v)
w=s.d
w===$&&B.c()
r.KD(w,0)
w=s.b
w===$&&B.c()
v=w}else{t=s.d
t===$&&B.c()
A.aG.hd(t,0,v,w)}w=s.d
w===$&&B.c()
A.aG.fZ(w,v,w.length,0)
w=s.e
w===$&&B.c()
A.aG.hd(w,0,u,s.d)
s.b7P(s.d,u,54)
s.b7P(s.e,u,92)
u=s.d
r.C3(0,u,0,u.length)},
KD(d,e){var w,v,u=this,t=u.a,s=u.e
s===$&&B.c()
w=u.c
w===$&&B.c()
t.KD(s,w)
s=u.e
t.C3(0,s,0,s.length)
v=t.KD(d,e)
s=u.e
A.aG.fZ(s,w,s.length,0)
s=u.d
s===$&&B.c()
t.C3(0,s,0,s.length)
return v},
b7P(d,e,f){var w,v,u
for(w=d.$flags|0,v=0;v<e;++v){u=d[v]
w&2&&B.ai(d)
d[v]=u^f}}}
C.cf2.prototype={}
C.cf1.prototype={
a1u(d){return(D.o_[d&255]&255|(D.o_[d>>>8&255]&255)<<8|(D.o_[d>>>16&255]&255)<<16|D.o_[d>>>24&255]<<24)>>>0},
bjA(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=a0.a
e===$&&B.c()
w=e.length
if(w<16||w>32||(w&7)!==0)throw B.V(B.dI("Key length not 128/192/256 bits.",null))
v=w>>>2
u=v+6
f.a=u
t=u+1
s=J.e3(t,x.bW)
for(u=x.S,r=0;r<t;++r)s[r]=B.c1(4,0,!1,u)
switch(v){case 4:q=J.nW(A.aG.gaO(e),e.byteOffset,w)
p=q.getUint32(0,!0)
e=s[0]
e[0]=p
o=q.getUint32(4,!0)
e[1]=o
n=q.getUint32(8,!0)
e[2]=n
m=q.getUint32(12,!0)
e[3]=m
for(r=1;r<=10;++r){p=(p^f.a1u((m>>>8|(m&$.pX[24])<<24)>>>0)^D.cvo[r-1])>>>0
e=s[r]
e[0]=p
o=(o^p)>>>0
e[1]=o
n=(n^o)>>>0
e[2]=n
m=(m^n)>>>0
e[3]=m}break
case 6:q=J.nW(A.aG.gaO(e),e.byteOffset,w)
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
p=(p^f.a1u((k>>>8|(k&$.pX[24])<<24)>>>0)^j)>>>0
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
p=(p^f.a1u((k>>>8|(k&$.pX[24])<<24)>>>0)^i)>>>0
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
case 8:q=J.nW(A.aG.gaO(e),e.byteOffset,w)
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
p=(p^f.a1u((g>>>8|(g&$.pX[24])<<24)>>>0)^j)>>>0
e=s[r]
e[0]=p
o=(o^p)>>>0
e[1]=o
n=(n^o)>>>0
e[2]=n
m=(m^n)>>>0
e[3]=m;++r
if(r>=15)break
l=(l^f.a1u(m))>>>0
e=s[r]
e[0]=l
k=(k^l)>>>0
e[1]=k
h=(h^k)>>>0
e[2]=h
g=(g^h)>>>0
e[3]=g;++r}break
default:throw B.V(B.bd("Should never get here"))}return s},
bL3(b2,b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=J.nW(A.aG.gaO(b2),b2.byteOffset,16),a3=a2.getUint32(b3,!0),a4=a2.getUint32(b3+4,!0),a5=a2.getUint32(b3+8,!0),a6=a2.getUint32(b3+12,!0),a7=b6[0],a8=a3^a7[0],a9=a4^a7[1],b0=a5^a7[2],b1=a6^a7[3]
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
b1=u^(o>>>24|(o&t)<<8)^(s>>>16|(s&r)<<16)^(v>>>8|(v&p)<<24)^q[3]}n=D.e6[a8&255]^C.nk(D.e6[a9>>>8&255],24)^C.nk(D.e6[b0>>>16&255],16)^C.nk(D.e6[b1>>>24&255],8)^b6[w][0]
m=D.e6[a9&255]^C.nk(D.e6[b0>>>8&255],24)^C.nk(D.e6[b1>>>16&255],16)^C.nk(D.e6[a8>>>24&255],8)^b6[w][1]
l=D.e6[b0&255]^C.nk(D.e6[b1>>>8&255],24)^C.nk(D.e6[a8>>>16&255],16)^C.nk(D.e6[a9>>>24&255],8)^b6[w][2]
b1=D.e6[b1&255]^C.nk(D.e6[a8>>>8&255],24)^C.nk(D.e6[a9>>>16&255],16)^C.nk(D.e6[b0>>>24&255],8)^b6[w][3]
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
a1=J.nW(A.aG.gaO(b4),b4.byteOffset,16)
a1.$flags&2&&B.ai(a1,11)
a1.setUint32(b5,(a7&255^(b0&255)<<8^(u&255)<<16^t<<24^r)>>>0,!0)
r=J.nW(A.aG.gaO(b4),b4.byteOffset,16)
r.$flags&2&&B.ai(r,11)
r.setUint32(b5+4,(q&255^(p&255)<<8^(a9&255)<<16^o<<24^k)>>>0,!0)
k=J.nW(A.aG.gaO(b4),b4.byteOffset,16)
k.$flags&2&&B.ai(k,11)
k.setUint32(b5+8,(j&255^(i&255)<<8^(h&255)<<16^g<<24^f)>>>0,!0)
f=J.nW(A.aG.gaO(b4),b4.byteOffset,16)
f.$flags&2&&B.ai(f,11)
f.setUint32(b5+12,(e&255^(d&255)<<8^(v&255)<<16^a0<<24^s)>>>0,!0)},
bHT(b1,b2,b3,b4,b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=J.nW(A.aG.gaO(b1),b1.byteOffset,16).getUint32(b2,!0),a1=J.nW(A.aG.gaO(b1),b1.byteOffset,16).getUint32(b2+4,!0),a2=J.nW(A.aG.gaO(b1),b1.byteOffset,16).getUint32(b2+8,!0),a3=J.nW(A.aG.gaO(b1),b1.byteOffset,16).getUint32(b2+12,!0),a4=this.a,a5=b5[a4],a6=a0^a5[0],a7=a1^a5[1],a8=a2^a5[2],a9=a4-1,b0=a3^a5[3]
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
b0=v^(a7>>>24|(a7&u)<<8)^(t>>>16|(t&s)<<16)^(w>>>8|(w&q)<<24)^r[3]}p=D.e5[a6&255]^C.nk(D.e5[b0>>>8&255],24)^C.nk(D.e5[a5>>>16&255],16)^C.nk(D.e5[a4>>>24&255],8)^b5[a9][0]
o=D.e5[a4&255]^C.nk(D.e5[a6>>>8&255],24)^C.nk(D.e5[b0>>>16&255],16)^C.nk(D.e5[a5>>>24&255],8)^b5[a9][1]
n=D.e5[a5&255]^C.nk(D.e5[a4>>>8&255],24)^C.nk(D.e5[a6>>>16&255],16)^C.nk(D.e5[b0>>>24&255],8)^b5[a9][2]
b0=D.e5[b0&255]^C.nk(D.e5[a5>>>8&255],24)^C.nk(D.e5[a4>>>16&255],16)^C.nk(D.e5[a6>>>24&255],8)^b5[a9][3]
a4=D.yp[p&255]
a5=this.d
w=a5[b0>>>8&255]
v=a5[n>>>16&255]
u=D.yp[o>>>24&255]
t=b5[0]
s=t[0]
r=a5[o&255]
q=a5[p>>>8&255]
a7=D.yp[b0>>>16&255]
m=a5[n>>>24&255]
l=t[1]
k=a5[n&255]
j=D.yp[o>>>8&255]
i=D.yp[p>>>16&255]
h=a5[b0>>>24&255]
g=t[2]
f=D.yp[b0&255]
e=a5[n>>>8&255]
a8=a5[o>>>16&255]
a5=a5[p>>>24&255]
t=t[3]
d=J.nW(A.aG.gaO(b3),b3.byteOffset,16)
d.$flags&2&&B.ai(d,11)
d.setUint32(b4,(a4&255^(w&255)<<8^(v&255)<<16^u<<24^s)>>>0,!0)
d.setUint32(b4+4,(r&255^(q&255)<<8^(a7&255)<<16^m<<24^l)>>>0,!0)
d.setUint32(b4+8,(k&255^(j&255)<<8^(i&255)<<16^h<<24^g)>>>0,!0)
d.setUint32(b4+12,(f&255^(e&255)<<8^(a8&255)<<16^a5<<24^t)>>>0,!0)}}
C.bMf.prototype={}
C.bMg.prototype={
gM(d){var w=this.a.length
return w},
anP(){return B.r1(this.a,A.hT,null,null)}}
C.b8H.prototype={
uI(d){return C.hIT(d)}}
C.cp4.prototype={
Mb(d){var w=d.w,v=Math.max(1,A.k.dw(w/186)),u=Math.max(0,w-16*(v-1))/v,t=u/0.52
return new B.a9i(v,t+20,u+16,t,u,B.tI(d.x))},
nd(d){return!1}}
C.bN8.prototype={
cBe(d){if(this.b)throw B.V(B.bd("FontLoader is already loaded"))
this.c.push(d.bz(new C.bN9(),x.E))},
my(d){var w=0,v=B.j(x.H),u=this,t,s,r,q,p
var $async$my=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(u.b)throw B.V(B.bd("FontLoader is already loaded"))
u.b=!0
t=u.c,s=t.length,r=u.a,q=0
case 2:if(!(q<t.length)){w=4
break}p=C
w=6
return B.b(t[q],$async$my)
case 6:w=5
return B.b(p.fq1(f,r),$async$my)
case 5:case 3:t.length===s||(0,B.L)(t),++q
w=2
break
case 4:return B.h(null,v)}})
return B.i($async$my,v)}}
C.auE.prototype={
a4(){return"SystemUiMode."+this.b}}
C.a7I.prototype={
A(d,e){if(e==null)return!1
if(J.bL(e)!==B.b_(this))return!1
return e instanceof C.a7I&&e.a===this.a},
gX(d){return B.bs(B.b_(this),B.wu(this.a),A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h)},
u(d){var w="<optimized out>#"
if(B.b_(this)===D.fvR)return"["+(w+B.e4(this.a))+"]"
return"[ObjectKey "+(w+B.e4(this.a))+"]"}}
C.aUt.prototype={
c0(d){var w=new C.azu(!0,this.e,null,new B.dd(),B.ci())
w.bZ()
w.scC(null)
return w},
c9(d,e){var w
x.cQ.a(e)
e.syk(0,!0)
w=this.e
if(!w.A(0,e.ak)){e.ak=w
e.aF2()}}}
C.azu.prototype={
syk(d,e){return},
gpg(){var w=this.ab$
return w!=null},
gkZ(){var w=this.ab$
return w!=null},
M0(d){var w=d==null?B.h0y(null):d
w.sa40(this.ak)
return w}}
C.a0a.prototype={
T(){return new C.aHS(B.aX(x.N))},
cOh(d){return this.d.$1(d)},
cM4(){return this.e.$0()}}
C.aHS.prototype={
a_(){this.a1()
this.Oy()},
Oy(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Oy=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.a.cM4(),$async$Oy)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.f1N(t,s))
case 1:return B.h(u,v)}})
return B.i($async$Oy,v)},
Yg(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$Yg=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.a.c
q=B.U(r).k("a2<1>")
p=B.B(new B.a2(r,new C.f1R(t),q),q.k("J.E"))
if(p.length===0||t.r){w=1
break}t.m(new C.f1S(t))
w=3
return B.b(C.amz(p),$async$Yg)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.f1T(t,s,p))
w=4
return B.b(t.Oy(),$async$Yg)
case 4:case 1:return B.h(u,v)}})
return B.i($async$Yg,v)},
a0s(d){return this.cm1(d)},
cm1(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a0s=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}t.m(new C.f1O(t))
s=J.q(d,"id")
w=3
return B.b(C.bXO(J.k(s==null?"":s)),$async$a0s)
case 3:r=f
if(r==null){if(t.c==null){w=1
break}t.m(new C.f1P(t))
w=1
break}q=C.fWn(r,!1)
q.z=!1
s=t.a
s.toString
w=4
return B.b(s.cOh(B.a([q],x.D)),$async$a0s)
case 4:if(t.c==null){w=1
break}t.m(new C.f1Q(t,r))
case 1:return B.h(u,v)}})
return B.i($async$a0s,v)},
Ox(d,e){return this.bIh(0,e)},
bIh(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$Ox=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}s=J.a5(e)
r=s.h(e,"name")
q=J.k(r==null?"this presentation":r)
r=t.c
r.toString
w=3
return B.b(B.ca(null,null,!0,null,new C.f1I(q),r,null,!0,!0,x.y),$async$Ox)
case 3:if(g!==!0||t.c==null){w=1
break}t.m(new C.f1J(t))
s=s.h(e,"id")
w=4
return B.b(C.amy(J.k(s==null?"":s)),$async$Ox)
case 4:if(t.c==null){w=1
break}t.m(new C.f1K(t))
w=5
return B.b(t.Oy(),$async$Ox)
case 5:case 1:return B.h(u,v)}})
return B.i($async$Ox,v)},
cAh(d){var w=B.bi(d),v=w==null?null:w.bS()
if(v==null)return""
return A.ib[B.bG(v)-1]+" "+B.bQ(v)},
aPf(d,e){var w=null,v=B.m(e*0.3)
return B.p(w,B.W(d,A.c,w,w,w,e*0.5),A.f,w,w,new B.o(w,w,w,v,w,D.NA,A.n),w,e,w,w,w,w,w,e)},
aPe(d){return this.aPf(d,44)},
b52(d,e,f,g){var w,v,u=null,t=this.w===d,s=t?D.NA:u,r=B.m(14),q=B.W(e,t?A.c:A.az,u,u,u,17),p=x.p
q=B.a([q,L.Iq,B.d(f,u,u,u,u,u,u,B.l(u,u,t?A.c:A.az,u,u,u,u,u,u,u,u,13.5,u,u,A.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],p)
if(g>0){w=A.c.j(t?0.25:0.1)
v=B.m(10)
A.d.v(q,B.a([L.Iq,B.p(u,B.d(""+g,u,u,u,u,u,u,B.l(u,u,t?A.c:A.aR,u,u,u,u,u,u,u,u,11,u,u,A.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.f,u,u,new B.o(w,u,u,v,u,u,A.n),u,u,u,u,D.bul,u,u,u)],p))}return B.D(B.aE(A.c5,B.dg(u,B.A(q,A.m,u,A.bb,A.j,0,u,u),u,u,A.bc,new B.o(u,u,u,r,u,s,A.n),A.hX,u,u,u,A.v3,u,u,u),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.f1X(this,d),u,u,u,u,u,u,!1,A.a8),1)},
cfW(d){var w,v,u,t,s,r,q=null,p=this.d.t(0,d.a),o=p?A.d6.j(0.14):D.WM,n=B.m(18),m=p?A.d6:A.dp
m=B.I(m,A.q,p?1.8:1)
w=this.aPe(A.pN)
v=B.d(d.b,q,1,A.a2,q,q,q,D.aPo,q,q,q)
u=d.r.length
t=u===1?"":"s"
s=x.p
t=B.D(B.v(B.a([v,A.cX,B.d(""+u+" slide"+t,q,q,q,q,q,q,D.aPq,q,q,q)],s),A.F,q,A.e,A.j,0,A.p),1)
v=p?D.NA:q
u=p?q:B.I(A.b2,A.q,1.6)
r=p?D.bJZ:q
return B.aE(q,B.dg(q,B.A(B.a([w,A.bf,t,B.dg(q,r,q,q,A.bc,new B.o(q,q,u,q,q,v,A.a6),A.fF,q,26,q,q,q,q,26)],s),A.m,q,A.e,A.j,0,q,q),q,q,A.bc,new B.o(o,q,m,n,q,q,A.n),A.fF,q,q,A.dc,A.bk,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.f1M(this,p,d),q,q,q,q,q,q,!1,A.a8)},
cnz(d){var w,v,u,t,s,r=this,q=null,p=J.a5(d),o=p.h(d,"savedAt"),n=r.cAh(J.k(o==null?"":o))
o=B.m(18)
w=B.I(A.dp,A.q,1)
v=r.aPe(A.MO)
u=p.h(d,"name")
u=B.d(J.k(u==null?"Presentation":u),q,1,A.a2,q,q,q,D.aPo,q,q,q)
p=p.h(d,"slides")
p=B.t(p==null?"?":p)
t=n.length===0?"":" \xb7 saved "+n
s=x.p
t=B.D(B.v(B.a([u,A.cX,B.d(p+" slides"+t,q,q,q,q,q,q,D.aPq,q,q,q)],s),A.F,q,A.e,A.j,0,A.p),1)
p=r.b1K(A.hz,A.bt,"Bring it back",r.r?q:new C.f1U(r,d))
return B.p(q,B.A(B.a([v,A.bf,t,p,A.bp,r.b1K(A.e4,A.cj,"Delete",r.r?q:new C.f1V(r,d))],s),A.m,q,A.e,A.j,0,q,q),A.f,q,q,new B.o(D.WM,q,w,o,q,q,A.n),q,q,q,A.dc,D.boT,q,q,q)},
b1K(d,e,f,g){var w=null,v=g==null,u=e.j(v?0.06:0.14)
return B.hp(B.aE(w,B.p(w,B.W(d,v?A.b2:e,w,w,w,19),A.f,w,w,new B.o(u,w,w,w,w,w,A.a6),w,38,w,w,w,w,w,38),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a8),w,f,w,w)},
arI(d,e,f){var w=null
return new B.C(D.bnX,B.v(B.a([B.W(d,A.b2,w,w,w,46),A.ac,B.d(e,w,w,w,w,w,w,D.f31,w,w,w),A.at,B.d(f,w,w,w,w,w,w,D.eWD,A.L,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),w)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.e
if(h==null)h=A.c6
w=j.a.c.length
v=w!==0&&j.d.a===w
w=B.aI(d,A.bT,x.w).w
u=B.p(i,i,A.f,i,i,new B.o(A.b2,i,i,B.m(3),i,i,A.n),i,4,i,i,i,i,i,42)
t=x.p
s=B.a([j.aPf(A.yc,46),A.bf,D.bvb],t)
if(j.r)s.push(D.e3J)
s.push(B.aH(i,i,i,i,A.Nl,i,i,i,new C.f2_(d),i,i,i,i,i,i))
s=B.A(s,A.m,i,A.e,A.j,0,i,i)
r=A.c.j(0.05)
q=B.m(18)
p=B.I(A.dp,A.q,1)
o=J.a5(h)
q=B.a([A.S,u,new B.C(D.brr,s,i),B.p(i,B.A(B.a([j.b52(0,A.xM,"Save",j.a.c.length),j.b52(1,A.N2,"Saved",o.gM(h))],t),A.m,i,A.e,A.j,0,i,i),A.f,i,i,new B.o(r,i,p,q,i,i,A.n),i,i,i,D.bqv,A.en,i,i,i)],t)
if(j.x!=null){u=(j.y?A.cj:A.bt).j(0.12)
s=B.m(14)
r=B.I((j.y?A.cj:A.bt).j(0.4),A.q,1)
p=j.y
n=p?A.MP:A.ee
n=B.W(n,p?A.cj:A.bt,i,i,i,18)
m=j.x
m.toString
q.push(B.p(i,B.A(B.a([n,A.ab,B.D(B.d(m,i,i,i,i,i,i,A.a6I,i,i,i),1)],t),A.m,i,A.e,A.j,0,i,i),A.f,i,i,new B.o(u,i,r,s,i,i,A.n),i,i,i,D.bqr,A.ix,i,i,1/0))}u=B.a([],t)
if(j.w===0){s=j.d.a
s=B.a([B.D(B.d(s===0?"Tap the ones to save":""+s+" picked",i,i,i,i,i,i,D.f_8,i,i,i),1)],t)
if(j.a.c.length!==0)s.push(B.aE(i,B.d(v?"Clear":"Pick all",i,i,i,i,i,i,D.f28,i,i,i),A.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new C.f20(j,v),i,i,i,i,i,i,!1,A.a8))
s=B.a([B.A(s,A.m,i,A.e,A.j,0,i,i),A.S],t)
if(j.a.c.length===0)s.push(j.arI(A.pN,"No presentations yet","Make one first, then save it here."))
for(r=j.a.c,p=r.length,l=0;l<r.length;r.length===p||(0,B.L)(r),++l)s.push(j.cfW(r[l]))
A.d.v(u,s)}else{s=B.a([],t)
if(j.f)s.push(D.e3h)
else if(j.e==null)s.push(j.arI(A.ajL,"Could not reach the database","Check the connection, then open this again."))
else if(o.gam(h))s.push(j.arI(A.oz,"Nothing saved yet","Save some presentations and they will show up here."))
for(r=o.gaf(h);r.C();)s.push(j.cnz(r.gU(r)))
A.d.v(u,s)}q.push(new B.dm(1,A.ci,B.cB(u,i,Y.agS,i,i,A.ah,!0),i))
if(j.w===0){u=j.d
s=u.a===0
r=s||j.r?i:j.gc1b()
p=s?i:D.NA
s=s?A.c.j(0.07):i
o=B.m(18)
n=u.a===0?i:B.a([new B.ac(0,A.G,A.b5.j(0.4),A.cw,18)],x.V)
u=u.a
m=u===0
k=B.W(A.xM,m?A.j9:A.c,i,i,i,21)
u=m?"Pick presentations to save":"Save "+u+" to the database"
q.push(new B.C(D.br3,B.aE(i,B.dg(i,B.A(B.a([k,A.a6b,new B.dm(1,A.ci,B.f2(A.A,B.d(u,i,i,i,i,i,i,B.l(i,i,m?A.j9:A.c,i,i,i,i,i,i,i,i,15,i,i,A.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),A.f,A.eg),i)],t),A.m,i,A.bb,A.j,0,i,i),i,i,A.bc,new B.o(s,i,i,o,n,p,A.n),A.hX,i,54,i,i,i,i,i),A.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,r,i,i,i,i,i,i,!1,A.a8),i))}else q.push(A.S)
return B.p(i,B.bm(!0,B.v(q,A.m,i,A.e,A.Q,0,A.p),!0,!1,A.af,!0,!1),A.f,i,new B.aY(0,1/0,0,w.a.b*0.9),D.aZh,i,i,i,i,i,i,i,i)}}
C.oc.prototype={
ae(){return B.F(["id",this.a,"doc",this.b.ae(),"updatedAt",this.c.a6().ac()],x.N,x.z)}}
C.XY.prototype={
T(){return new C.awu(B.a([],x.k),B.f6(null,x.H))},
gdX(){return this.c}}
C.awu.prototype={
a_(){this.a1()
this.OF()},
OF(){var w=0,v=B.j(x.H),u,t=this,s
var $async$OF=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(C.a18(t.a.c),$async$OF)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.cEl(t,s))
case 1:return B.h(u,v)}})
return B.i($async$OF,v)},
ctE(d){var w,v,u,t=this
d.c=new B.S(Date.now(),0,!1)
w=J.q4(t.d,new C.cEo(d))
v=w<0
if(v&&C.hG2(d))return t.f
u=t.d
if(v)J.pm(u,0,d)
else J.aF(u,w,d)
v=x.a
B.fNa(new C.cEp(t),v)
return t.f=t.f.bz(new C.cEq(t,d),v).eU(new C.cEr())},
Ib(d,e,f){return this.c9B(0,e,f)},
aWM(d,e){return this.Ib(0,e,!1)},
c9B(d,e,f){var w=0,v=B.j(x.H),u,t=this,s
var $async$Ib=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.a6(s,!1).c6(B.e7(new C.cEk(t,e),!1,null,x.H)),$async$Ib)
case 3:w=4
return B.b(t.f,$async$Ib)
case 4:w=5
return B.b(t.OF(),$async$Ib)
case 5:case 1:return B.h(u,v)}})
return B.i($async$Ib,v)},
aW2(d){var w=A.o.u(1000*Date.now()),v=d==null?D.dpW:d
this.Ib(0,new C.oc(w,v,new B.S(Date.now(),0,!1)),!0)},
c0H(){return this.aW2(null)},
aco(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$aco=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.bX(A.K,null,new C.cEs(),r,!1,!1,!0,null,!1,!1,x.g2),$async$aco)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.aW2(s)
case 1:return B.h(u,v)}})
return B.i($async$aco,v)},
Ia(d,e){return this.bI9(0,e)},
bI9(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$Ia=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return B.b(B.ca(null,null,!0,null,new C.cEf(e),s,null,!0,!0,x.y),$async$Ia)
case 3:if(g!==!0){w=1
break}t.m(new C.cEg(t,e))
w=4
return B.b(t.f,$async$Ia)
case 4:w=5
return B.b(C.afp(t.a.c,e.a),$async$Ia)
case 5:w=6
return B.b(t.OF(),$async$Ia)
case 6:case 1:return B.h(u,v)}})
return B.i($async$Ia,v)},
CN(d){return this.bAp(d)},
bAp(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$CN=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.bX(A.K,null,new C.cEb(d),r,!0,!0,!1,null,!1,!1,x.N),$async$CN)
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
return B.b(t.aWM(0,d),$async$CN)
case 9:w=5
break
case 7:w=10
return B.b(F.fWW(r,d.b,null),$async$CN)
case 10:w=5
break
case 8:w=11
return B.b(t.Ia(0,d),$async$CN)
case 11:w=5
break
case 5:case 1:return B.h(u,v)}})
return B.i($async$CN,v)},
bVu(){var w,v,u=null,t=[D.dpZ,D.dpX,D.dpY],s=new C.cEi(),r=B.m(26),q=x.V,p=B.a([new B.ac(0,A.G,A.d9.j(0.4),A.eT,24)],q),o=x.p,n=B.a([],o)
for(w=0;w<3;++w){v=new B.aW(999,999)
n.push(B.p(u,new B.x(D.das[w],u,A.ob,u,u,u,u,u,u,u,u,u),A.f,u,u,new B.o(A.c.j(0.18),u,u,new B.bq(v,v,v,v),u,u,A.n),u,u,u,u,A.nS,u,u,u))}return B.p(u,B.A(B.a([B.D(B.v(B.a([D.frn,A.P,B.bZ(A.bB,n,A.bs,6,6),A.aP,B.aE(u,B.p(u,D.eFL,A.f,u,u,new B.o(A.c,u,u,B.m(999),B.a([new B.ac(0,A.G,A.w.j(0.2),A.cJ,10)],q),u,A.n),u,u,u,u,U.ahf,u,u,u),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.cEh(this),u,u,u,u,u,u,!1,A.a8)],o),A.F,u,A.e,A.j,0,A.p),1),new B.a7(130,110,new B.an(A.A,u,A.aa,A.r,B.a([s.$3(t[0],-0.22,-30),s.$3(t[2],0.22,30),s.$3(t[1],0,0)],o),u),u)],o),A.m,u,A.e,A.j,0,u,u),A.f,u,u,new B.o(u,u,u,r,p,D.bRT,A.n),u,u,u,u,D.brB,u,u,u)},
bAn(d){var w,v=null,u=d.b.d.length,t=B.m(6),s=B.a([new B.ac(0,A.G,A.w.j(0.5),A.cw,14)],x.V),r=x.p
s=B.p(v,B.bw(B.m(6),new B.an(A.W,v,A.b_,A.r,B.a([B.f2(A.A,F.an6(d.b),A.f,A.bQ),D.e9b,B.ao(v,B.aE(v,B.p(v,D.bKL,A.f,v,v,D.b_c,v,26,v,v,v,v,v,26),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.cE6(this,d),v,v,v,v,v,v,!1,A.a8),v,v,v,4,4,v)],r),v),A.aq),A.f,v,v,new B.o(v,v,v,t,s,v,A.n),v,v,v,v,v,v,v,v)
t=A.a.i(d.b.a)
t=B.d(t.length===0?"Untitled Book":t,v,1,A.a2,v,v,v,D.eU1,v,v,v)
w=u===1?"":"s"
return B.aE(v,B.v(B.a([new B.fG(0.6470588235294118,s,v),A.P,t,B.d(""+u+" page"+w,v,v,v,v,v,v,D.f_j,v,v,v)],r),A.F,v,A.e,A.j,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,new C.cE7(this,d),v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.cE8(this,d),v,v,v,v,v,v,!1,A.a8)},
B(d){var w,v,u,t=this,s=null,r=x.p,q=B.eF(B.a([new B.C(H.afM,B.hp(B.aE(s,B.p(s,A.amv,A.f,s,s,new B.o(s,s,s,s,B.a([new B.ac(0,A.G,A.b5.j(0.5),A.J,12)],x.V),E.vD,A.a6),s,36,s,s,s,s,s,36),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.gc1X(),s,s,s,s,s,s,!1,A.a8),s,"Write with AI",s,s),s)],r),s,s,!0,!0,A.K,s,1,!0,s,0,!1,s,!1,E.mV,s,s,s,!0,s,s,s,s,s,D.frr,s,s,s,1,s,!0)
if(t.e)r=D.b2A
else{w=t.bVu()
v=B.a([D.fdm,A.ab],r)
if(J.cy(t.d)){u=B.m(999)
v.push(B.p(s,B.d(""+J.ad(t.d),s,s,s,s,s,s,D.eTt,s,s,s),A.f,s,s,new B.o(D.b7a,s,s,u,s,s,A.n),s,s,s,s,A.xu,s,s,s))}r=B.a([new B.nJ(A5.XT,new B.m2(w,s),s),new B.nJ(D.bqY,new B.m2(B.A(v,A.m,s,A.e,A.j,0,s,s),s),s)],r)
if(J.cl(t.d))r.push(D.eLM)
else r.push(new B.nJ(D.bqt,B.On(new B.oh(new C.cEt(t),J.ad(t.d),!0,!0,!0,0,B.rI(),s),D.b1S),s))
r=B.vh(0,s,A.r,s,A.y,s,s,s,s,s,!1,s,A.ah,!1,r)}return B.c8(q,D.b5Z,r,s,!1,!1,s,s)}}
C.XW.prototype={
T(){return new C.awq(B.a([],x.bx))},
Tm(d){return this.d.$1(d)}}
C.aDM.prototype={}
C.awq.prototype={
aZC(d,e,f){var w=$.aw(),v=new B.ar(new B.bb(d,A.b3,A.aN),w),u=this.gaWL()
v.aM(0,u)
w=new B.ar(new B.bb(e,A.b3,A.aN),w)
w.aM(0,u)
return new C.aDM(v,w,f)},
DD(){var w,v=this
v.y=!0
w=v.x
if(w!=null)w.a8(0)
v.x=B.cM(A.pC,new C.cDA(v))},
a_(){var w,v,u,t,s,r,q,p,o,n,m=this
m.a1()
w=m.a.c.b
v=$.aw()
u=new B.ar(new B.bb(w.a,A.b3,A.aN),v)
t=m.gaWL()
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
r.push(new C.aDM(o,n,p.c))}if(r.length===0)r.push(m.aZC("Page 1","",""))},
q(){var w,v,u,t,s,r=this,q=r.x
if(q!=null)q.a8(0)
if(r.y){r.a.c.b=r.goS()
q=r.a
q.Tm(q.c)}q=r.d
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
goS(){var w,v,u,t,s,r,q,p,o=this,n=o.d
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
t.push(new F.mm(A.a.i(p.a.a.a),p.b.a.a,p.c,""))}return new F.r6(n,w,v,t,u)},
Ar(){var w=0,v=B.j(x.H),u=this,t
var $async$Ar=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.x
if(t!=null)t.a8(0)
u.y=!1
u.a.c.b=u.goS()
t=u.a
w=2
return B.b(t.Tm(t.c),$async$Ar)
case 2:return B.h(null,v)}})
return B.i($async$Ar,v)},
c1V(){this.m(new C.cDz(this))
this.DD()},
aVK(d,e){var w=this,v=d+e
if(v<0||v>=w.w.length)return
w.m(new C.cDC(w,d,v))
w.DD()},
c1W(d,e){var w=A.d.cA(this.w,e)
this.m(new C.cDK())
this.DD()
$.aU.x1$.push(new C.cDL(w))},
PR(d){return this.cfM(d)},
cfM(d){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$PR=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hW().l1(80,1400,A.eG),$async$PR)
case 7:q=f
if(q==null){w=1
break}w=8
return B.b(q.ff(),$async$PR)
case 8:p=f
o=q.b.toLowerCase()
n=J.agW(o,".png")?"image/png":"image/jpeg"
r.m(new C.cDD(d,n,p))
r.DD()
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
return B.i($async$PR,v)},
xl(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$xl=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(F.hiE(r,t.goS()),$async$xl)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.cDB(t,s))
t.DD()
case 1:return B.h(u,v)}})
return B.i($async$xl,v)},
cg3(d){var w,v=this,u=null,t=F.fu9(d.c)
if(t==null)return new B.bH(A.a3,u,u,B.hc(D.bE8,D.ffL,new C.cDF(v,d),u),u)
w=x.p
return new B.C(A.cH,new B.an(A.W,u,A.aa,A.r,B.a([B.bw(B.m(12),B.fL(t,A.A,u,u,A.co,A.bQ,!0,140,!1,u,1/0),A.aq),B.ao(u,B.A(B.a([v.b1L(A.kN,new C.cDG(v,d)),A.bp,v.b1L(A.cA,new C.cDH(v,d))],w),A.m,u,A.e,A.j,0,u,u),u,u,u,6,6,u)],w),u),u)},
b1L(d,e){var w=null
return B.aG(!1,A.a1,!0,w,B.aL(!1,w,!0,new B.C(A.hw,B.W(d,A.c,w,w,w,18),w),A.cL,!0,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,w),A.f,A.aX,0,w,w,A.cL,w,w,A.ag)},
Ic(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Ic=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.Ar(),$async$Ic)
case 3:s=t.c
if(s==null){w=1
break}w=4
return B.b(F.fWW(s,t.goS(),new C.cDJ(t)),$async$Ic)
case 4:case 1:return B.h(u,v)}})
return B.i($async$Ic,v)},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=x.p,k=B.eF(B.a([new B.C(A.qN,B.hc(D.bIK,D.flF,n.gavn(),B.fv(m,m,m,m,m,m,m,m,m,m,m,A.bK,m,m,m,m,m,m,m,m,m,m,m,m,m,m)),m),B.aH(m,m,m,m,A.amu,m,m,m,new C.cDM(n,d),m,m,m,m,"Save",m)],l),m,m,!0,!0,E.VZ,m,1,m,m,m,!1,m,!1,E.mV,m,m,m,!0,m,m,m,m,m,D.fgC,m,m,m,1,m,!0),j=Av.aTc(N.l4,A.c,Ae.UT,A.nW,D.fhm,n.gc1U()),i=B.m(18),h=n.gavm(),g=B.a([new B.ac(0,A.G,A.w.j(0.4),A.jl,12)],x.V)
g=B.aE(m,B.p(m,new B.a7(92,142.1818181818182,B.f2(A.A,F.an6(n.goS()),A.f,A.dt),m),A.f,m,m,new B.o(m,m,m,m,g,m,A.n),m,m,m,m,m,m,m,m),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,h,m,m,m,m,m,m,!1,A.a8)
w=n.r
w===$&&B.c()
i=B.p(m,B.A(B.a([g,A.eB,B.D(B.v(B.a([D.fsV,A.at,B.d(F.fVr(w.a).b+" template \xb7 pick from 10, change colours, add your picture.",m,m,m,m,m,m,D.f4L,m,m,m),A.S,B.dq(E.alM,E.aQ9,h,B.bk(A.d9,m,m,m,m,m,m,m,m,m,m,m))],l),A.F,m,A.e,A.j,0,A.p),1)],l),A.m,m,A.e,A.j,0,m,m),A.f,m,m,new B.o(E.VZ,m,m,i,m,m,A.n),m,m,m,m,A.bk,m,m,m)
h=n.d
h===$&&B.c()
h=B.aM(m,A.T,!1,m,!0,A.r,m,B.aN(),h,m,m,m,m,m,2,B.br(m,new B.b4(4,B.m(12),A.dg),m,m,m,m,m,m,!0,m,m,m,m,m,m,A.c,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,"Book title",!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.ai,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,A.oa,!0,A.a5,m,A.am,m,m,m,m)
w=n.e
w===$&&B.c()
w=B.aM(m,A.T,!1,m,!0,A.r,m,B.aN(),w,m,m,m,m,m,2,B.br(m,new B.b4(4,B.m(12),A.dg),m,m,m,m,m,m,!0,m,m,m,m,m,m,A.c,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,"Subtitle (optional)",!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.ai,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.a5,m,A.am,m,m,m,m)
g=n.f
g===$&&B.c()
g=B.a([i,A.aA,h,A.P,w,A.P,B.aM(m,A.T,!1,m,!0,A.r,m,B.aN(),g,m,m,m,m,m,2,B.br(m,new B.b4(4,B.m(12),A.dg),m,m,m,m,m,m,!0,m,m,m,m,m,m,A.c,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,"Author (optional)",!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.ai,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.a5,m,A.am,m,m,m,m),A.aP],l)
for(i=n.w,v=0;v<i.length;v=t){h=i[v]
w=new B.aW(16,16)
u=new B.aA(N.l4.j(0.18),1,A.q,-1)
t=v+1
s=B.aH(m,m,m,m,D.bHu,m,m,m,v===0?m:new C.cDN(n,v),m,m,m,m,"Move up",A.c7)
r=i.length
q=B.aH(m,m,m,m,D.bNH,m,m,m,v===r-1?m:new C.cDO(n,v),m,m,m,m,"Move down",A.c7)
r=r===1?m:new C.cDP(n,v)
p=new B.aW(12,12)
o=new B.aW(12,12)
g.push(B.p(m,B.v(B.a([new B.cm(A.aO,A.e,A.j,A.m,m,A.p,m,0,B.a([new B.x("Page "+t,m,D.f5i,m,m,m,m,m,m,m,m,m),A.b4,s,q,B.aH(m,m,m,m,B.W(A.e4,A.os,m,m,m,18),m,m,m,r,m,m,m,m,"Remove page",A.c7)],l),m),B.aM(m,A.T,!1,m,!0,A.r,m,B.aN(),i[v].a,m,m,m,m,m,2,new B.e2(m,m,m,"Title",m,m,m,m,m,m,m,m,m,m,m,m,!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.c,m,m,m,m,m,m,m,new B.b4(4,new B.bq(p,p,p,p),A.dg),!0,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.ai,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,A.cc,!0,A.a5,m,A.am,m,m,m,m),A.an,n.cg3(i[v]),B.aM(m,A.T,!1,m,!0,A.r,m,B.aN(),i[v].b,m,m,m,m,m,2,new B.e2(m,m,m,"Write here\u2026 long pages flow onto the next paper page",m,m,m,m,m,m,m,m,m,m,m,m,!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.c,m,m,m,m,m,m,m,new B.b4(4,new B.bq(o,o,o,o),A.dg),!0,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.ai,m,m,m,m,m,m,m,m,m,m,5,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.a5,m,A.am,m,m,m,m)],l),A.m,m,A.e,A.j,0,A.p),A.f,m,m,new B.o(E.mV,m,new B.bP(u,u,u,u),new B.bq(w,w,w,w),m,m,A.n),m,m,new C.a7I(h),A.e3,D.bp7,m,m,m))}return B.oe(!0,B.c8(k,E.adX,B.cB(g,m,D.bpz,m,m,A.ah,!1),m,!1,!1,j,m),new C.cDQ(n),x.C)}}
C.aws.prototype={
B(d){var w,v,u=this,t=null,s=u.r,r=s?A.cj:E.mV,q=B.m(16),p=B.m(16),o=s?A.ay.j(0.08):A.c.j(0.04)
s=s?A.ay.j(0.16):A.d9.j(0.22)
w=B.m(12)
v=x.p
return new B.C(A.eO,B.aG(!1,A.a1,!0,t,B.aL(!1,q,!0,B.p(t,B.A(B.a([B.p(t,B.W(u.c,r,t,t,t,20),A.f,t,t,new B.o(s,t,t,w,t,t,A.n),t,40,t,t,t,t,t,40),A.bf,B.D(B.v(B.a([B.d(u.d,t,t,t,t,t,t,B.l(t,t,r,t,t,t,t,t,t,t,t,15,t,t,A.H,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),A.bA,B.d(u.e,t,t,t,t,t,t,D.aOL,t,t,t)],v),A.F,t,A.e,A.j,0,A.p),1),B.W(A.ex,r.j(0.6),t,t,t,t)],v),A.m,t,A.e,A.j,0,t,t),A.f,t,t,new B.o(o,t,t,p,t,t,A.n),t,t,t,t,A.bk,t,t,t),t,!0,t,t,t,t,t,t,t,t,t,t,t,u.f,t,t,t,t,t,t,t),A.f,A.K,0,t,t,t,t,t,A.ag),t)}}
C.apd.prototype={
T(){return new C.aCy()}}
C.aCy.prototype={
a_(){this.a1()
this.YU()},
br(d){this.bE(d)
if(d.c!=this.a.c)this.a0h()},
a0h(){var w=0,v=B.j(x.H),u=this,t
var $async$a0h=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.d
t=t==null?null:t.q()
w=2
return B.b(x.bq.b(t)?t:B.dP(t,x.H),$async$a0h)
case 2:u.d=null
if(u.c!=null)u.m(new C.e5P(u))
w=3
return B.b(u.YU(),$async$a0h)
case 3:return B.h(null,v)}})
return B.i($async$a0h,v)},
YU(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$YU=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:o=r.a.c
n=A.a.i(o==null?"":o)
if(J.ad(n)===0){w=1
break}t=4
if(J.cZ(n,"http://")||J.cZ(n,"https://")||J.cZ(n,"data:")){o=B.Xy(B.cw(n,0,null),new B.OL(!0))
r.d=o}else{o=B.fl("unsupported video ref")
throw B.V(o)}w=7
return B.b(o.i5(0).cM(0,A.py),$async$YU)
case 7:if(r.c==null){w=1
break}r.d.t0(!1)
r.m(new C.e5N(r))
t=2
w=6
break
case 4:t=3
m=s.pop()
q=B.a9(m)
$.am.$1("[kiapo video] "+B.t(q))
if(r.c!=null)r.m(new C.e5O(r))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$YU,v)},
q(){var w=this.d
if(w!=null)w.q()
this.a2()},
c4u(){var w=this,v=w.d
if(v==null||!w.e)return
if(v.a.f){v.h1(0)
w.m(new C.e5Q(w))}else{v.pz(0)
w.m(new C.e5R(w))}},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.a,m=n.c
if(A.a.i(m==null?"":m).length===0){if(!n.e)return A.bH
n=B.m(8*n.d)
m=B.a([D.j5.j(0.92),D.K9.j(0.95)],x.O)
w=B.I(A.bY.j(0.55),A.q,1)
v=p.a
u=v.d
t=B.W(A.pQ,A.bY,o,o,o,28*u)
v=v.f?"Tap to add president video":"Video ya kiapo"
return B.c_(B.av(B.v(B.a([t,new B.a7(o,6*u,o,o),B.d(v,o,o,o,o,o,o,B.l(o,o,A.c.j(0.85),o,o,o,o,o,o,o,o,11*p.a.d,o,o,A.O,o,o,!0,o,o,o,o,o,o,o,o),A.L,o,o)],x.p),A.m,o,A.e,A.Q,0,A.p),o,o,o),new B.o(o,o,w,n,o,new B.a8(A.ax,A.aC,A.x,m,o,o),A.n),A.bd)}if(p.f)return B.av(B.W(A.al3,A.az,o,o,o,28*n.d),o,o,o)
if(!p.e||p.d==null)return D.b3p
s=p.d
m=s.a.as
r=m.a
r=r>0?r:16
q=m.b
q=q>0?q:9
n=B.m(6*n.d)
m=B.a([B.f2(A.A,new B.a7(r,q,new B.zJ(s,o),o),A.r,A.bQ)],x.p)
if(!p.r){w=8*p.a.d
v=A.w.j(0.45)
m.push(B.av(B.p(o,B.W(A.iT,A.c,o,o,o,28*p.a.d),A.f,o,o,new B.o(v,o,o,o,o,o,A.a6),o,o,o,o,new B.Q(w,w,w,w),o,o,o),o,o,o))}return B.aE(o,B.bw(n,new B.an(A.W,o,A.b_,A.r,m,o),A.aq),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gc4t(),o,o,o,o,o,o,!1,A.a8)}}
C.xd.prototype={
a4(){return"NgmyHatiLayoutKind."+this.b}}
C.ji.prototype={}
C.acr.prototype={
B(d){return B.oH(new C.dW9(this,B.P(d).ax.a===A.I,d),!0,0.72,0.9,0.5,!1,null)}}
C.abR.prototype={
B(d){var w,v,u=null,t=B.P(d).ax.a===A.I,s=B.m(18),r=B.m(18),q=B.I(D.j5.j(t?0.35:0.4),A.q,1),p=t?D.KE:A.c,o=x.V,n=B.a([new B.ac(0,A.G,A.w.j(t?0.3:0.08),A.cw,14)],o),m=B.m(10),l=B.I(A.bY.j(0.5),A.q,1)
o=B.a([new B.ac(0,A.G,A.w.j(0.14),A.dD,6)],o)
w=this.c
o=B.D(B.p(u,new B.fG(0.5625,C.hYj(w),u),A.aq,u,u,new B.o(u,u,l,m,o,u,A.n),u,u,u,D.ahJ,u,u,u,u),1)
m=D.j5.j(t?0.18:0.16)
l=B.d(w.b,u,u,u,u,u,u,B.l(u,u,t?A.c:D.j5,u,u,u,u,u,u,u,u,12.5,u,u,A.u,u,u,!0,u,0.1,u,u,u,u,u,u),u,u,u)
v=x.p
return B.aG(!1,A.a1,!0,u,B.aL(!1,s,!0,B.p(u,B.v(B.a([o,B.p(u,B.v(B.a([l,A.cX,B.d(w.c,u,2,A.a2,u,u,u,B.l(u,u,t?A.az:D.bd0,u,u,u,u,u,u,u,u,9.5,u,u,u,u,1.32,!0,u,u,u,u,u,u,u,u),u,u,u)],v),A.F,u,A.e,A.j,0,A.p),A.f,u,u,new B.o(u,u,new B.bP(new B.aA(m,1,A.q,-1),A.Y,A.Y,A.Y),u,u,u,A.n),u,u,u,u,D.ag1,u,u,u)],v),A.aj,u,A.e,A.j,0,A.p),A.f,u,u,new B.o(p,u,q,r,n,u,A.n),u,u,u,u,u,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,this.d,u,u,u,u,u,u,u),A.f,A.K,0,u,u,u,u,u,A.ag)}}
C.xg.prototype={
a4(){return"NgmyMarriageLayoutKind."+this.b}}
C.nz.prototype={}
C.bhK.prototype={
Z2(d){var w=null
return new B.bH(A.a3,w,w,B.Dq(A.A,B.p(w,w,A.f,w,w,new B.o(this.d.j(0.14),w,w,B.m(3),w,w,A.n),w,5,w,w,w,w,w,w),w,d),w)},
c4W(){return this.Z2(1)},
aw2(d){var w=null,v=B.m(8),u=B.I(A.hV,A.q,0.9)
return B.p(A.A,B.d(d,w,w,w,w,w,w,B.l(w,w,this.d,w,w,w,w,w,w,w,w,6.5,w,w,A.u,w,w,!0,w,0.3,w,w,w,w,w,w),w,w,w),A.f,w,w,new B.o(D.ac1,w,u,v,w,w,A.n),w,13,w,w,w,w,w,w)},
B(d){var w=this,v=null,u=x.p,t=w.d
return B.v(B.a([B.A(B.a([B.p(v,v,A.f,v,v,new B.o(v,v,B.I(A.hV,A.q,1.6),v,v,v,A.a6),v,22,v,v,v,v,v,22),B.dW(B.p(v,v,A.f,v,v,new B.o(v,v,B.I(A.hV,A.q,1.6),v,v,v,A.a6),v,22,v,v,v,v,v,22),new B.u(-8.36,0))],u),A.m,v,A.bb,A.j,0,v,v),A.at,B.d("HATI YA NDOA",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,12,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v),B.d("Hati ya Makubaliano ya Ndoa",v,v,v,v,v,v,B.l(v,v,t.j(0.7),v,v,v,v,v,v,v,v,7,v,v,A.a4,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v),A.an,w.aw2("TAARIFA ZA WANANDOA"),A.an,w.c4W(),A.cX,w.Z2(0.9),A.cX,w.Z2(0.7),A.P,w.aw2("TAMKO LA MAKUBALIANO"),A.fZ,w.Z2(1),A.cX,w.Z2(0.95),A.P,w.aw2("MASHAHIDI"),A.b4,B.d("NGMY",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,8,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.d(w.c.b,v,v,v,v,v,v,B.l(v,v,w.e,v,v,v,v,v,v,v,v,7,v,v,A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],u),A.m,v,A.e,A.j,0,A.p)}}
C.acu.prototype={
B(d){return B.oH(new C.eb3(B.P(d).ax.a===A.I,d),!0,0.92,0.96,0.5,!1,null)}}
C.ae8.prototype={
B(d){var w,v,u,t,s,r=null,q=B.P(d).ax.a===A.I,p=B.m(18),o=B.m(18),n=B.I(A.aw.j(q?0.35:0.4),A.q,1),m=q?D.bcB:A.c,l=x.V,k=B.a([new B.ac(0,A.G,A.w.j(q?0.3:0.08),A.cw,14)],l),j=B.m(10),i=B.I(A.aw.j(0.5),A.q,1)
l=B.a([new B.ac(0,A.G,A.w.j(0.14),A.dD,6)],l)
w=this.c
v=C.fVW(w.a)
if(v==null)v=A.d.gK(D.Q2)
u=B.b0(v.f)
t=B.b0(v.r)
s=x.p
l=B.D(B.p(r,new B.fG(0.5625,new B.an(A.W,r,A.b_,A.r,B.a([B.bY(0,B.fL(C.fVV(v.d),A.A,r,r,A.co,A.bQ,!0,r,!1,r,r),0,0,0),new B.C(A.agJ,new C.bhK(v,u,t,r),r)],s),r),r),A.aq,r,r,new B.o(r,r,i,j,l,r,A.n),r,r,r,D.ahJ,r,r,r,r),1)
j=A.aw.j(q?0.18:0.16)
i=B.d(w.b,r,r,r,r,r,r,B.l(r,r,q?A.c:A_.KF,r,r,r,r,r,r,r,r,12.5,r,r,A.u,r,r,!0,r,0.1,r,r,r,r,r,r),r,r,r)
return B.aG(!1,A.a1,!0,r,B.aL(!1,p,!0,B.p(r,B.v(B.a([l,B.p(r,B.v(B.a([i,A.cX,B.d(w.c,r,2,A.a2,r,r,r,B.l(r,r,q?A.az:D.b6u,r,r,r,r,r,r,r,r,9.5,r,r,r,r,1.32,!0,r,r,r,r,r,r,r,r),r,r,r)],s),A.F,r,A.e,A.j,0,A.p),A.f,r,r,new B.o(r,r,new B.bP(new B.aA(j,1,A.q,-1),A.Y,A.Y,A.Y),r,r,r,A.n),r,r,r,r,D.ag1,r,r,r)],s),A.aj,r,A.e,A.j,0,A.p),A.f,r,r,new B.o(m,r,n,o,k,r,A.n),r,r,r,r,r,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,this.d,r,r,r,r,r,r,r),A.f,A.K,0,r,r,r,r,r,A.ag)}}
C.kN.prototype={
a4(){return"NgmyMarriagePaperStyle."+this.b}}
C.a7b.prototype={}
C.V5.prototype={
T(){var w=$.aw()
return new C.aCR(new B.cr(null,x.A),new B.ar(A.as,w),new B.ar(A.as,w),B.mu(0,null,null),A.d.gK(D.a1P),D.dAe,B.a([],x.L),B.a([],x.gE))}}
C.aCR.prototype={
a_(){var w,v=this
v.a1()
v.w=v.a.c
v.z=new C.z5(C.fy2(v.y),"NGMY NEWS","","","By the NGMY Newsroom","",A.T,"","","")
w=x.a
C.fwZ().bz(new C.eel(v),w)
$.rL().jN(0,"assets/images/ngmy_logo.png").bz(new C.eem(v),w).eU(new C.een())},
q(){var w=this,v=w.e,u=$.aw()
v.S$=u
v.P$=0
v=w.f
v.S$=u
v.P$=0
w.r.q()
w.a2()},
agg(d){var w=null,v=this.c
if(v!=null)v.I(x.q).f.R(B.b2(w,w,w,w,w,A.r,w,B.d(d,w,w,w,w,w,w,w,w,w,w),w,A.U,w,w,w,w,w,w,w,w,w,w))},
Iw(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k
var $async$Iw=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hW().l1(88,1600,A.eG),$async$Iw)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.ff(),$async$Iw)
case 8:p=e
m=r.c
if(m==null){w=1
break}w=9
return B.b(C.hiV(m,p),$async$Iw)
case 9:o=e
if(o==null||r.c==null){w=1
break}m=r.c
m.toString
w=10
return B.b(F.bBF(new B.pA(o,1),m),$async$Iw)
case 10:if(r.c!=null)r.m(new C.edY(r,o))
t=2
w=6
break
case 4:t=3
k=s.pop()
n=B.a9(k)
r.agg("Could not open that picture. "+B.t(n))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Iw,v)},
W8(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$W8=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.w
if(q==null||t.as){w=1
break}s=t.c
s.toString
w=3
return B.b(C.hiV(s,q),$async$W8)
case 3:r=e
if(r==null||t.c==null){w=1
break}s=t.c
s.toString
w=4
return B.b(F.bBF(new B.pA(r,1),s),$async$W8)
case 4:if(t.c!=null)t.m(new C.edU(t,r))
case 1:return B.h(u,v)}})
return B.i($async$W8,v)},
adb(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$adb=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.as){w=1
break}q.m(new C.ee4(q))
t=4
q.a.toString
p=C.i1J()
l=q.Q
k=q.e.a
o=l==="sw"?A.a.i(A.a.i(k.a)+" Write the whole newspaper in Swahili (Kiswahili)."):k.a
k=q.y
w=7
return B.b(p.$4$paper$photo$request$template(null,q.w,o,k),$async$adb)
case 7:n=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.ee5(q,n))
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
m=B.a9(i)
q.agg(B.t(m))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.ee6(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$adb,v)},
Z7(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h,g
var $async$Z7=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i=A.a.i(q.f.a.a)
h=!0
if(J.ad(i)!==0)if(!q.as){h=q.z
h=A.a.i(h.c).length===0&&h.r.length===0}if(h){w=1
break}q.m(new C.ee_(q,i))
t=4
q.a.toString
p=C.i1I()
h=q.z
m=q.y
l=q.w
k=B.B(q.ax,x.fz)
w=7
return B.b(p.$5$doc$history$instruction$photo$template(h,k,i,l,m),$async$Z7)
case 7:o=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.ee0(q,o))
r.push(6)
w=5
break
case 4:t=3
g=s.pop()
n=B.a9(g)
if(q.c!=null)q.m(new C.ee1(q,n))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.ee2(q))
$.aU.x1$.push(new C.ee3(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Z7,v)},
c5b(d){this.m(new C.edZ(this,d))},
DV(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$DV=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(!q.as){k=q.z
k=A.a.i(k.c).length===0&&k.r.length===0}else k=!0
if(k){w=1
break}q.m(new C.edW(q))
t=4
w=7
return B.b($.aU.gms(),$async$DV)
case 7:w=8
return B.b(B.bN(A.n0,null,x.H),$async$DV)
case 8:k=$.aU.ak$.x.h(0,q.d)
p=k==null?null:k.gb8()
if(!(p instanceof B.pL))throw B.V("The page is not ready yet.")
w=9
return B.b(p.lR(1800/p.gY(0).a),$async$DV)
case 9:o=e
w=10
return B.b(o.hj(A.fW),$async$DV)
case 10:n=e
if(n==null)throw B.V("Could not make the picture.")
w=11
return B.b(A7.afs(J.fb(A.dz.gaO(n)),"ngmy_news.png","image/png"),$async$DV)
case 11:m=e
q.agg(m?"Your newspaper picture is ready. Check your downloads.":"Downloading is not available here.")
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
l=B.a9(i)
q.agg(B.t(l))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.edX(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$DV,v)},
B(a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=a1.z,a4=!(A.a.i(a3.c).length===0&&a3.r.length===0)
a3=B.aH(a2,a2,a2,a2,A.kP,a2,a2,a2,new C.eec(a5),a2,a2,a2,a2,a2,a2)
w=x.p
v=B.a([],w)
if(a1.ay.length!==0)v.push(B.aH(a2,a2,a2,a2,D.bJf,a2,a2,a2,new C.eed(a1),a2,a2,a2,a2,"Undo the last change",a2))
v.push(B.aH(a2,a2,a2,a2,A.oI,a2,a2,a2,a4?a1.gaXQ():a2,a2,a2,a2,a2,"Download",a2))
a3=B.eF(v,a2,a2,!0,!0,A.At,a2,1,!0,a2,0,!1,a2,!1,a2,a2,a3,a2,!0,a2,a2,a2,a2,a2,D.eFU,a2,a2,a2,1,a2,!0)
v=x.V
u=B.a([new B.ac(0,A.G,A.w.j(0.6),A.eT,24)],v)
t=a1.z
s=a1.y
r=a1.w
u=B.p(a2,new B.fG(0.7142857142857143,B.f2(A.A,new B.et(new C.b_q(t,s,r,a1.x,a2),a1.d),A.f,A.dt),a2),A.f,a2,a2,new B.o(a2,a2,a2,a2,u,a2,A.n),a2,a2,a2,a2,a2,a2,a2,a2)
s=B.d("1  YOUR PICTURE",a2,a2,a2,a2,a2,a2,D.T3,a2,a2,a2)
t=a1.as?a2:a1.gc5a()
t=B.a([B.D(B.dq(D.bK_,B.d(r==null?"Add a picture":"Change the picture",a2,a2,a2,a2,a2,a2,A.cc,a2,a2,a2),t,B.bk(D.t8,a2,a2,a2,A.c,A.fM,a2,a2,new B.b7(B.m(14),P.uI),a2,a2,a2)),1)],w)
r=a1.w
if(r!=null){r=B.bw(B.m(10),B.fL(r,A.A,a2,a2,A.co,A.bQ,!1,48,!1,a2,48),A.aq)
A.d.v(t,B.a([A.av,r,B.aH(a2,a2,a2,a2,D.bGN,a2,a2,a2,a1.as?a2:a1.gbGN(),a2,a2,a2,a2,"Crop the picture",a2)],w))}t=B.A(t,A.m,a2,A.e,A.j,0,a2,a2)
r=B.d("2  WHAT SHOULD IT BE ABOUT?  (optional)",a2,a2,a2,a2,a2,a2,D.T3,a2,a2,a2)
q=B.aM(a2,A.T,!1,a2,!0,A.r,a2,B.aN(),a1.e,a2,a2,a2,a2,a2,2,a1.aR0("Leave it empty and the AI picks a story about NGMY"),A.y,!0,a2,!0,a2,!1,a2,A.ai,a2,a2,a2,a2,a2,a2,a2,a2,a2,3,1,a2,!1,"\u2022",a2,a2,a2,a2,a2,!1,a2,a2,!1,a2,!0,a2,A.a9,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,A.dl,!0,A.a5,a2,A.am,a2,a2,a2,a2)
p=B.a([],w)
for(o=0;o<7;++o){n=D.d5g[o]
p.push(B.mC(a2,D.t8,new B.x(n.a,a2,A.p2,a2,a2,a2,a2,a2,a2,a2,a2,a2),A.hB,new C.eee(a1,n),a2,a2,P.uI,a2))}p=B.bZ(A.bB,p,A.bs,6,8)
m=a1.Q
m=B.bZ(A.bB,B.a([D.frA,A.bf,B.jI(a2,a2,a2,D.fcc,a2,new C.eef(a1),m==="en",a2,a2,a2,a2),A.ab,B.jI(a2,a2,a2,D.fc7,a2,new C.eeg(a1),m==="sw",a2,a2,a2,a2)],w),A.rG,0,8)
l=B.d("3  PICK A DESIGN",a2,a2,a2,a2,a2,a2,D.T3,a2,a2,a2)
k=B.a([],w)
for(j=x.dt,i=B.dc(D.a1P,0,B.dJ(10,"count",x.S),j),h=i.$ti,i=new B.bR(i,i.gM(0),h.k("bR<ak.E>")),h=h.k("ak.E");i.C();){g=i.d
k.push(a1.aPy(g==null?h.a(g):g))}k=B.cB(k,a2,a2,a2,a2,A.aO,!1)
i=B.a([],w)
for(j=B.dc(D.a1P,10,a2,j),h=j.$ti,j=new B.bR(j,j.gM(0),h.k("bR<ak.E>")),h=h.k("ak.E");j.C();){g=j.d
i.push(a1.aPy(g==null?h.a(g):g))}j=B.cB(i,a2,a2,a2,a2,A.aO,!1)
i=a1.as?a2:a1.gc5d()
h=B.m(18)
v=B.a([new B.ac(0,A.G,A.bz.j(0.4),A.J,18)],v)
v=B.a([u,A.aA,new B.C(A.cH,s,a2),t,A.aA,new B.C(A.cH,r,a2),q,A.P,p,A.S,m,A.aA,new B.C(A.cH,l,a2),new B.a7(a2,78,k,a2),A.P,new B.a7(a2,78,j,a2),A.aP,B.aE(a2,B.p(A.A,B.A(B.a([D.bJU,A.ab,B.d(a4?"Write it again":"Write my newspaper",a2,a2,a2,a2,a2,a2,A.fN,a2,a2,a2)],w),A.m,a2,A.e,A.Q,0,a2,a2),A.f,a2,a2,new B.o(a2,a2,a2,h,v,G.tV,A.n),a2,54,a2,a2,a2,a2,a2,a2),A.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,i,a2,a2,a2,a2,a2,a2,!1,A.a8)],w)
if(a4){u=B.a([A.e1,B.A(B.a([D.dkO,A.av,D.bvu],w),A.m,a2,A.e,A.j,0,a2,a2),A.P],w)
for(t=a1.ax,s=t.length,o=0;o<t.length;t.length===s||(0,B.L)(t),++o){f=t[o]
e=f.a==="you"
r=e?A.a7:A.a3
q=e?A.b5.j(0.35):D.t8
p=new B.aW(16,16)
d=new B.aA(A.bF,1,A.q,-1)
u.push(new B.bH(r,a2,a2,B.p(a2,new B.x(f.b,a2,D.f2O,a2,a2,a2,a2,a2,a2,a2,a2,a2),A.f,a2,A8.UH,new B.o(q,a2,new B.bP(d,d,d,d),new B.bq(p,p,p,p),a2,a2,A.n),a2,a2,a2,A.cH,A.ix,a2,a2,a2),a2))}u.push(A.an)
t=B.a([],w)
for(o=0;o<4;++o){a0=D.cTg[o]
t.push(B.mC(a2,D.t8,new B.x(a0,a2,A.IA,a2,a2,a2,a2,a2,a2,a2,a2,a2),A.hB,new C.eeh(a1,a0),a2,a2,P.uI,a2))}u.push(B.bZ(A.bB,t,A.bs,6,8))
u.push(A.S)
t=B.D(B.aM(a2,A.T,!1,a2,!0,A.r,a2,B.aN(),a1.f,a2,a2,a2,a2,a2,2,a1.aR0("Ask for a change, or ask a question\u2026"),A.y,!0,a2,!0,a2,!1,a2,A.ai,a2,a2,a2,a2,a2,a2,a2,a2,a2,4,1,a2,!1,"\u2022",a2,a2,a2,new C.eei(a1),a2,!1,a2,a2,!1,a2,!0,a2,A.a9,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,A.dl,!0,A.a5,a2,A.am,a2,a2,a2,a2),1)
s=a1.as?a2:a1.gc5c()
u.push(B.A(B.a([t,A.ab,B.Hg(A.yh,s,B.nt(a2,A.b5,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2)],w),A.m,a2,A.e,A.j,0,a2,a2))
u.push(A.aA)
t=a1.as?a2:a1.gaXQ()
u.push(B.dq(A.oI,D.fnc,t,B.bk(A.d_,a2,a2,a2,a2,A.Io,a2,a2,new B.b7(B.m(16),A.Y),a2,a2,a2)))
A.d.v(v,u)}v=B.a([B.cB(v,a1.r,A.agv,a2,a2,A.ah,!1)],w)
if(a1.as){u=A.w.j(0.55)
t=B.m(20)
s=B.I(E.jM.j(0.5),A.q,1)
v.push(B.bY(0,B.ek(B.av(B.p(a2,B.A(B.a([E.a6c,A.eB,B.d(a1.at,a2,a2,a2,a2,a2,a2,A.iG,a2,a2,a2)],w),A.m,a2,A.e,A.Q,0,a2,a2),A.f,a2,a2,new B.o(E.Ak,a2,s,t,a2,a2,A.n),a2,a2,a2,a2,D.brS,a2,a2,a2),a2,a2,a2),u,!0),0,0,0))}return B.c8(a3,A.At,new B.an(A.W,a2,A.aa,A.r,v,a2),a2,!1,!1,a2,a2)},
aR0(d){var w=null
return B.br(w,new B.b4(4,B.m(14),A.Y),w,A.eP,w,w,w,w,!0,w,w,w,w,w,w,D.t8,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,X.Iw,d,w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
aPy(d){var w,v,u,t=null,s=d.a===this.y.a,r=B.m(12),q=B.b0(d.f),p=s?A.bz:A.bF
p=B.I(p,A.q,s?2.4:1)
w=B.a([B.p(t,t,A.f,B.b0(d.x),t,t,t,5,t,A.l7,t,t,t,t),A.fZ],x.p)
for(v=d.w,u=0;u<4;++u)w.push(B.p(t,t,A.f,B.b0(v).j(0.5),t,t,t,2,t,D.boa,t,t,t,t))
w.push(A.cX)
w.push(new B.C(A.je,B.d(d.b,t,1,A.a2,t,t,t,B.l(t,t,B.b0(v),t,t,t,t,t,t,t,t,9,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t))
return B.aE(t,B.p(t,B.v(w,A.m,t,A.bb,A.j,0,A.p),A.f,t,t,new B.o(q,t,p,r,t,t,A.n),t,t,t,A.jc,t,t,t,72),A.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.edV(this,d),t,t,t,t,t,t,!1,A.a8)}}
C.z5.prototype={
b9Z(d,e,f,g,h,i,j,k,l,m){var w=this,v=g==null?w.b:g,u=i==null?w.a:i,t=h==null?w.c:h,s=m==null?w.d:m,r=e==null?w.e:e,q=f==null?w.f:f,p=d==null?w.r:d,o=j==null?w.w:j,n=l==null?w.x:l
return new C.z5(u,v,t,s,r,q,p,o,n,k==null?w.y:k)},
cED(d){var w=null
return this.b9Z(w,w,w,w,w,d,w,w,w,w)},
ae(){var w=this
return B.F(["paper",w.a,"headline",w.c,"subhead",w.d,"byline",w.e,"caption",w.f,"body",w.r,"pullQuote",w.w,"sidebarTitle",w.x,"sidebarText",w.y,"category",w.b],x.N,x.z)},
aBk(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j="headline",i="category",h=new C.cb0(d),g=d.h(0,"body")
if(x.j.b(g)){w=B.a([],x.s)
for(v=J.aV(g);v.C();){u=v.gU(v)
if(A.a.i(B.t(u)).length!==0)w.push(A.a.i(B.t(u)))}t=w}else if(typeof g=="string"&&A.a.i(g).length!==0){w=A.a.fz(g,B.af("\\n\\s*\\n",!0,!1,!1,!1))
w=new B.K(w,new C.caZ(),B.U(w).k("K<1,n>")).c_(0,new C.cb_())
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
return this.b9Z(p,r,q,J.ad(l==null?"":l)===0?k:h.$1(i).toUpperCase(),v,w,o,m,n,s)},
gF5(d){return this.f}}
C.t4.prototype={
a4(){return"NewsLayout."+this.b}}
C.B0.prototype={
a4(){return"NewsFrame."+this.b}}
C.lb.prototype={}
C.b_q.prototype={
r_(d,e,f,g,h,i,j){var w=null
return B.l(w,w,f==null?B.b0(this.d.w):f,w,w,w,w,w,d,w,w,e,i,w,j,w,g,!0,w,h,w,w,w,w,w,w)},
aXS(d,e,f,g){return this.r_(d,e,null,1.25,f,A.bl,g)},
Pc(d,e,f,g,h){return this.r_(d,e,f,1.25,g,A.bl,h)},
aw8(d,e,f,g,h){return this.r_(d,e,null,f,g,A.bl,h)},
aw7(d,e,f,g,h){return this.r_(d,e,f,g,0,A.bl,h)},
aXU(d,e,f,g,h){return this.r_(d,e,null,f,0,g,h)},
c5h(d,e,f,g,h,i){return this.r_(d,e,f,g,0,h,i)},
aw6(d,e,f,g){return this.r_(d,e,null,f,0,A.bl,g)},
adf(d,e,f){return this.r_(d,e,null,f,0,A.bl,A.cN)},
aXT(d,e,f,g,h){return this.r_(d,e,f,g,0,h,A.cN)},
c5g(d,e,f,g){return this.r_(d,e,null,f,0,g,A.cN)},
c5f(d,e,f,g){return this.r_(d,e,f,g,0,A.bl,A.cN)},
adg(d,e,f,g,h,i){return this.r_(d,e,f,g,h,A.bl,i)},
aXR(d,e,f,g,h,i,j,k,l){var w,v,u=null
for(w=i;w>j;){v=new B.ko(new B.ep(d,u,u,A.cO,u,u,u,u,u,u,new B.G(!0,u,u,e,u,u,w,f,l,u,u,u,k,u,u,u,u,u,u,u,u,u,u,u,u,u)),A.a5,A.ch,new B.jo(1),u,u,h,u,A.cd,u)
v.Bx(g)
if(!v.b.a.c.gaD_())return w
w-=2}return j},
adc(d,e,f,g,h,i,j,k){return this.aXR(d,e,f,g,h,i,j,k,A.bl)},
ayc(d,e,f){var w=null,v=d==null?B.b0(this.d.w):d,u=x.p,t=B.a([B.p(w,w,A.f,v,w,w,w,f,w,w,w,w,w,w)],u)
if(e)A.d.v(t,B.a([new B.a7(w,3,w,w),B.p(w,w,A.f,v,w,w,w,0.8,w,w,w,w,w,w)],u))
return B.v(t,A.m,w,A.e,A.j,0,A.p)},
ayb(d){return this.ayc(null,!1,d)},
ag4(d,e){return this.ayc(null,d,e)},
cmI(d,e){return this.ayc(d,!1,e)},
gb__(){var w=A.a.i(this.c.a)
return w.length===0?"The NGMY Times":w},
gaTA(){var w=A.a.i(this.c.c)
if(w.length===0)w="Your headline appears here"
return this.d.CW?w.toUpperCase():w},
O3(d,e,f,g,h,i){var w=this,v=null,u=w.d.Q,t=w.adc(w.gaTA(),u,A.O,d,g,h,i,1.02)
return B.d(w.gaTA(),v,g,A.a2,v,v,v,w.aw7(u,t,f,1.02,A.O),e,v,v)},
aTF(d){return this.O3(d,A.L,null,2,78,30)},
aaH(d,e,f,g,h){return this.O3(d,e,null,f,g,h)},
bVm(d,e,f,g,h){return this.O3(d,A.L,e,f,g,h)},
bVl(d,e,f){return this.O3(d,A.L,null,e,f,30)},
R7(d,e,f,g,h){var w,v=this,u=null,t=v.c.d,s=A.a.i(t)
if(s.length===0)return A.bH
w=v.d.as
return new B.C(A.kh,B.d(s,u,g,A.a2,u,u,u,v.aXT(w,v.aXR(t,w,A.cN,d,g,h,15,1.2,A.cD),f,1.2,A.cD),e,u,u),u)},
b4J(d){return this.R7(d,A.L,null,3,24)},
azG(d,e,f,g){return this.R7(d,e,null,f,g)},
cu7(d,e,f){return this.R7(d,A.L,e,3,f)},
b4K(d,e){return this.R7(d,e,null,3,24)},
cu5(d,e){return this.R7(d,A.L,null,3,e)},
cu6(d,e,f){return this.R7(d,e,null,3,f)},
apK(d,e){var w=this,v=null,u=A.a.i(w.c.e),t=new B.C(A.fT,B.d(u.toUpperCase(),v,v,v,v,v,v,w.Pc("Roboto",12,d==null?B.b0(w.d.x):d,1.4,A.H),v,v,v),v)
if(!e)return t
u=w.d.w
return B.A(B.a([B.D(B.p(v,v,A.f,B.b0(u),v,v,v,1.2,v,v,v,v,v,v),1),t,B.D(B.p(v,v,A.f,B.b0(u),v,v,v,1.2,v,v,v,v,v,v),1)],x.p),A.m,v,A.e,A.j,0,v,v)},
N0(){return this.apK(null,!0)},
apJ(d){return this.apK(null,d)},
bCJ(d,e){var w=null,v=A.a.i(this.c.f)
if(v.length===0)return A.bH
return new B.C(A.ia,new B.a7(d,w,B.d(v,w,2,A.a2,w,w,w,this.c5g(this.d.as,13.5,1.2,A.cD),e,w,w),w),w)},
ve(d,a0){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Roboto",j=new B.S(Date.now(),0,!1),i=m.gb__(),h=A.o.an(j.by(B.c0(B.by(j),1,1,0,0,0,0,0)).a,864e8),g="VOL. "+C.hQm(Math.max(1,B.by(j)-2021))+"  \xb7  NO. "+(h+1+3000),f=m.aXS(k,12,1.2,A.O),e=a0?0.62:1
h=m.d
w=h.y
v=h.z
if(w==="blackletter")u=m.adc(i,v,A.O,d,1,96*e,36,1)
else{t=w==="bar"?76:72
u=m.adc(i.toUpperCase(),v,A.O,d,1,t*e,30,1)}switch(w){case"bar":w=a0?6:10
t=B.b0(h.x)
h=h.ch?B.b0(h.f):A.c
s=x.p
return B.v(B.a([B.p(l,B.A(B.a([B.D(B.d(i.toUpperCase(),l,1,A.eC,l,l,l,m.adg(v,u*0.84,h,1,1,A.O),l,l,l),1)],s),A.m,l,A.e,A.j,0,l,l),A.f,t,l,l,l,l,l,l,new B.Q(18,w,18,w),l,l,l),A.P,B.A(B.a([B.d(C.bAU(j).toUpperCase(),l,l,l,l,l,l,f,l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("FREE \xb7 NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],s),A.m,l,A.hM,A.j,0,l,l),A.an,m.ag4(!0,3)],s),A.m,l,A.e,A.j,0,A.p)
case"split":h=h.x
w=x.p
return B.v(B.a([B.A(B.a([B.p(l,l,A.f,B.b0(h),l,l,l,u*0.8,l,l,l,l,l,14),A.eB,B.D(B.d(i,l,1,A.eC,l,l,l,m.aw6(v,u*0.9,1,A.O),l,l,l),1)],w),A.m,l,A.e,A.j,0,l,l),A.S,B.A(B.a([B.d(C.bAU(j),l,l,l,l,l,l,m.Pc(k,13,B.b0(h),0.6,A.O),l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l)],w),A.m,l,A.hM,A.j,0,l,l),A.P,m.cmI(B.b0(h),3)],w),A.m,l,A.e,A.j,0,A.p)
case"logo":r=a0?52:64
w=m.gb__()
v=B.d("NGMY",l,l,l,l,l,l,m.aw8(k,r,1,-1.5,A.u),l,l,l)
t=r*0.2
s=r*0.04
q=B.b0(h.x)
p=B.m(r*0.16)
o=h.ch&&h.a==="midnight"||h.a==="gold"?A.w:A.c
h=h.w
n=x.p
return B.v(B.a([B.A(B.a([v,A.ab,B.eC(A.A,-0.03,B.p(l,B.d("NEWS",l,l,l,l,l,l,m.r_(k,r*0.72,o,1.05,-0.5,A.cD,A.u),l,l,l),A.f,l,l,new B.o(q,l,l,p,l,l,A.n),l,l,l,l,new B.Q(t,s,t,s),l,l,l),l),A.b4,new B.dm(1,A.ci,B.d(w.toUpperCase(),l,2,A.a2,l,l,l,m.adg(k,12.5,B.b0(h).j(0.85),1.3,1.2,A.O),A.dL,l,l),l)],n),A.m,l,A.e,A.j,0,l,l),A.P,B.p(l,l,A.f,B.b0(h).j(0.25),l,l,l,1.4,l,l,l,l,l,l)],n),A.m,l,A.e,A.j,0,A.p)
case"blackletter":h=x.p
w=B.A(B.a([B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("PRICE: FREE \xb7 NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],h),A.m,l,A.hM,A.j,0,l,l)
t=m.ag4(!0,1.4)
s=a0?4:10
v=B.d(i,l,1,l,l,l,l,m.aw6(v,u,1,A.O),A.L,l,l)
q=a0?4:8
return B.v(B.a([w,A.at,t,new B.a7(l,s,l,l),v,new B.a7(l,q,l,l),m.ag4(!0,1.4),A.at,B.d(C.bAU(j).toUpperCase(),l,l,l,l,l,l,f,A.L,l,l),A.at,m.ayb(3)],h),A.m,l,A.e,A.j,0,A.p)
default:h=x.p
return B.v(B.a([B.d(i.toUpperCase(),l,1,l,l,l,l,m.aw8(v,u,1,3,A.O),A.L,l,l),A.P,m.ag4(!0,1.2),A.at,B.A(B.a([B.d(C.bAU(j).toUpperCase(),l,l,l,l,l,l,f,l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],h),A.m,l,A.hM,A.j,0,l,l),A.at,m.ayb(3)],h),A.m,l,A.e,A.j,0,A.p)}},
abN(d){return this.ve(d,!1)},
ade(d,e,f,g){var w=null,v=f*0.9,u=f*0.45,t=e==null?B.b0(this.d.x):e,s=B.m(f)
return B.p(w,B.d(d,w,w,w,w,w,w,this.adg("Roboto",f,g==null?A.c:g,1,0.4,A.u),w,w,w),A.f,w,w,new B.o(t,w,w,s,w,w,A.n),w,w,w,w,new B.Q(v,u,v,u),w,w,w)},
c5e(d,e){return this.ade(d,null,e,null)},
aVC(d){var w=null,v=new B.S(Date.now(),0,!1),u=A.o.F(B.dh(v),12)===0?12:A.o.F(B.dh(v),12),t=B.b0(this.d.w).j(0.75),s=this.aw7("Roboto",15,t,1,A.cv),r=B.W(E.aj7,t,w,w,w,18),q=A.a.ap(A.oM[B.bG(v)-1],0,3),p=A.a.aT(A.o.u(B.fY(v)),2,"0"),o=B.dh(v)>=12?"PM":"AM"
return B.A(B.a([r,A.ab,B.d(q+" "+B.bQ(v)+", "+B.by(v)+"  \xb7  "+u+":"+p+" "+o,w,w,w,w,w,w,s,w,w,w),B.p(w,w,A.f,t.j(0.4),w,w,w,20,w,A.fI,w,w,w,1),B.W(d,t,w,w,w,19),A.ab,B.d("NGMY News",w,w,w,w,w,w,s,w,w,w)],x.p),A.m,w,A.e,A.j,0,w,w)},
auQ(){return this.aVC(A.ml)},
b1Z(d,e,f,g){var w=null,v=A.a.i(this.c.c)
if(v.length===0)v="Your headline appears here"
return B.d(v,w,e,A.a2,w,w,w,this.adg("Roboto",this.adc(v,"Roboto",A.H,d,e,f,g,1.08),w,1.08,-0.8,A.H),w,w,w)},
ayf(d,e,f){return this.b1Z(d,e,f,30)},
azJ(d,e,f){var w=null,v=A.a.i(this.c.d)
if(v.length===0)return A.bH
return new B.C(A.v2,B.d(v,w,e,A.a2,w,w,w,this.c5f("Roboto",f,B.b0(this.d.w).j(0.88),1.35),w,w,w),w)},
b4O(d){return this.azJ(d,3,22)},
cui(d,e){return this.azJ(d,e,22)},
ti(d,e){var w,v,u,t,s=null,r=this.e
if(r!=null){w=B.fL(r,A.A,s,s,A.co,A.bQ,!0,e,!1,s,d)
r=this.d
v=r.ay
if(v==="bw")w=new B.CZ(D.buC,w,s)
if(v==="sepia")w=new B.CZ(D.buB,w,s)}else{r=this.d
v=r.w
u=B.b0(v).j(0.1)
t=Math.min(d,e)
w=B.p(s,B.av(B.W(A.xH,B.b0(v).j(0.35),s,s,s,t*0.25),s,s,s),A.f,u,s,s,s,e,s,s,s,s,s,d)}v=B.a([w],x.p)
if(r.ax)v.push(B.c_(s,new B.o(s,s,s,s,s,new B.bT(A.A,0.95,A.x,s,0,B.a([A.K,A.VV.j(0.38)],x.O),s,s),A.n),A.bd))
return new B.a7(d,e,new B.an(A.W,s,A.b_,A.r,v,s),s)},
q5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.d
switch(j.e.a){case 1:j=j.w
w=B.I(B.b0(j),A.q,3)
j=B.I(B.b0(j),A.q,1)
return B.p(k,B.p(k,l.ti(d-24,e-24),A.f,k,k,new B.o(k,k,j,k,k,k,A.n),k,k,k,k,A.en,k,k,k),A.f,k,k,new B.o(k,k,w,k,k,k,A.n),k,e,k,k,A.lJ,k,k,d)
case 2:w=B.a([new B.ac(0,A.G,A.w.j(0.35),D.e_P,14)],x.V)
v=l.ti(d-28,e-28-58)
u=A.a.i(l.c.f)
if(u.length===0)u="NGMY"
return B.eC(A.A,-0.035,B.p(k,B.v(B.a([v,B.D(B.av(B.d(u,k,2,A.a2,k,k,k,l.aXT(j.as,13.5,D.b7Y,1.1,A.cD),A.L,k,k),k,k,k),1)],x.p),A.m,k,A.e,A.j,0,A.p),A.f,k,k,new B.o(D.bb0,k,k,k,w,k,A.n),k,e,k,k,D.bpu,k,k,d),k)
case 3:w=B.m(30)
j=B.I(B.b0(j.x),A.q,5)
return B.p(k,B.bw(B.m(25),l.ti(d-10,e-10),A.aq),A.f,k,k,new B.o(k,k,j,w,k,k,A.n),k,e,k,k,k,k,k,d)
case 4:t=Math.min(d,e)
w=B.I(B.b0(j.x),A.q,6)
j=B.b0(j.f)
v=t-10
return new B.a7(d,e,B.av(B.p(k,B.hS(l.ti(v,v),A.aq),A.f,k,k,new B.o(j,k,w,k,k,k,A.a6),k,t,k,k,A.lJ,k,k,t),k,k,k),k)
case 5:j=B.a([new B.ac(0,A.G,A.w.j(0.3),D.e_F,10)],x.V)
return B.eC(A.A,0.025,new B.a7(d,e,new B.an(A.W,k,A.aa,A.f,B.a([B.bY(0,B.p(k,l.ti(d-18,e-18),A.f,k,k,new B.o(A.c,k,k,k,j,k,A.n),k,k,k,k,A.qQ,k,k,k),0,0,0),B.ao(k,B.eC(A.A,-0.6,B.p(k,k,A.f,A.bK.j(0.85),k,k,k,26,k,k,k,k,k,90),k),k,k,-18,k,-10,k),B.ao(-10,B.eC(A.A,-0.6,B.p(k,k,A.f,A.bK.j(0.85),k,k,k,26,k,k,k,k,k,90),k),k,k,k,-18,k,k)],x.p),k),k),k)
case 6:j=B.b0(j.x)
return new B.a7(d,e,B.b3(B.no(l.ti(d,e),A.aq,D.fKj),new C.baV(j,k),k,k,A.au),k)
case 7:j=x.p
w=B.a([l.ti(d-16,e-44)],j)
for(v=[!0,!1],u=d/34,s=0;s<2;++s){r=v[s]
q=r?-18:k
p=r?k:-18
o=B.a([],j)
for(n=0;n<Math.max(6,A.k.bu(u));++n){m=new B.aW(2,2)
o.push(B.p(k,k,A.f,k,k,new B.o(A.bR,k,k,new B.bq(m,m,m,m),k,k,A.n),k,10,k,k,k,k,k,14))}w.push(new B.cK(0,q,0,p,k,k,new B.cm(A.aO,A.pU,A.j,A.m,k,A.p,k,0,o,k),k))}return B.p(k,new B.an(A.W,k,A.b_,A.r,w,k),A.f,A.e8,k,k,k,e,k,k,D.btT,k,k,d)
case 8:w=d/2
v=B.wD(A.he,new B.aW(w,w))
j=B.I(B.b0(j.x),A.q,5)
w-=5
return B.p(k,B.bw(B.wD(A.hA,new B.aW(w,w)),l.ti(d-10,e-10),A.aq),A.f,k,k,new B.o(k,k,j,v,k,k,A.n),k,e,k,k,k,k,k,d)
case 9:j=B.a([new B.ac(0,A.G,A.w.j(0.35),A.fL,22)],x.V)
return B.p(k,l.ti(d-20,e-20),A.f,k,k,new B.o(A.c,k,k,k,j,k,A.n),k,e,k,k,A.bS,k,k,d)
case 10:return new B.a7(d,e,B.no(l.ti(d,e),A.aq,D.fQl),k)
case 0:j=B.I(B.b0(j.w),A.q,2.4)
return B.p(k,l.ti(d-14,e-14),A.f,k,k,new B.o(k,k,j,k,k,k,A.n),k,e,k,k,A.en,k,k,d)}},
aNa(d,e){return this.d.e===D.QG?A.bH:this.bCJ(d,e)},
VH(d){return this.aNa(d,A.L)},
gaz0(){var w=this.c
return A.a.i(w.y).length!==0||A.a.i(w.w).length!==0},
az_(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.c,l=A.a.i(m.x)
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
if(m.length!==0&&w.length===0)q.push(B.D(B.av(B.d("\u201c"+m+"\u201d",n,7,A.a2,n,n,n,o.aXU(v.Q,19,1.15,A.cD,A.O),A.L,n,n),n,n,n),1))
else{r=B.a([],r)
p=l.length!==0
if(p)r.push(B.d(l.toUpperCase(),n,1,A.a2,n,n,n,o.Pc("Roboto",12.5,B.b0(t),1.2,A.u),n,n,n))
if(p)r.push(A.at)
m=w.length===0?m:w
r.push(B.D(B.d(m,n,9,A.a2,n,n,n,o.adf(v.as,13,1.25),n,n,n),1))
A.d.v(q,r)}return B.p(n,B.jt(B.v(q,A.F,n,A.e,A.j,0,A.p),A.r,n),A.f,n,n,new B.o(s,n,u,n,n,n,A.n),n,e,n,n,A.bk,n,n,d)},
gcdj(){var w=this.c.r
return w.length===0?B.a([y.g],x.s):w},
a8q(d,e,f,g){return B.co(new C.cb1(this,e,d,f,g))},
a8p(d){return this.a8q(d,22,!0,18)},
VS(d,e){return this.a8q(d,22,!0,e)},
aOc(d,e,f){return this.a8q(d,22,e,f)},
bEI(d,e,f){return this.a8q(d,e,!0,f)},
b7F(d,e,f,g){return B.co(new C.cb2(this,e,d,g,!0,f))},
cc8(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i="Roboto",h=k.d
switch(h.d.a){case 0:return B.v(B.a([k.abN(824),A.aA,k.aTF(824),k.b4J(824),A.P,k.N0(),A.ac,B.av(k.q5(824,360),j,j,j),k.VH(824),A.ac,B.D(k.a8p(3),1)],x.p),A.aj,j,A.e,A.j,0,A.p)
case 1:w=x.p
return B.v(B.a([k.abN(824),A.aP,new B.a7(j,350,B.A(B.a([new B.a7(440,j,B.v(B.a([k.aaH(440,A.bg,3,62,26),k.azG(440,A.bg,2,20),A.b4,k.apK(B.b0(h.x),!1)],w),A.F,j,A.e,A.j,0,A.p),j),A.Ip,B.v(B.a([k.q5(362,310),k.VH(362)],w),A.m,j,A.e,A.j,0,A.p)],w),A.F,j,A.e,A.j,0,j,j),j),A.S,k.ayb(2),A.ac,B.D(k.a8p(3),1)],w),A.aj,j,A.e,A.j,0,A.p)
case 2:w=k.ve(824,!0)
v=B.b0(h.x)
u=h.ch
t=x.p
s=B.a([k.bVm(788,u?B.b0(h.f):A.c,3,92,34)],t)
r=k.c
if(A.a.i(r.d).length!==0)s.push(k.cu7(788,u?B.b0(h.f):A.c,22))
v=B.p(j,B.v(s,A.m,j,A.e,A.j,0,A.p),A.f,v,j,j,j,j,j,j,A.AQ,j,j,j)
u=B.a([B.av(k.q5(824,390),j,j,j)],t)
s=A.a.i(r.f)
if(s.length!==0&&h.e!==D.QG){h=A.w.j(0.65)
u.push(B.ao(0,B.p(j,B.d(s,j,2,A.a2,j,j,j,k.aw7(i,14,A.c,1.15,A.O),j,j,j),A.f,h,j,j,j,j,j,j,A.lH,j,j,j),j,j,0,0,j,j))}return B.v(B.a([w,A.ac,v,A.ac,new B.an(A.W,j,A.aa,A.r,u,j),A.P,k.N0(),A.S,B.D(k.VS(2,21),1)],t),A.aj,j,A.e,A.j,0,A.p)
case 3:h=k.ve(824,!0)
w=k.q5(824,560)
v=B.a([A.K,A.w.j(0.85)],x.O)
u=x.p
return B.v(B.a([h,A.ac,new B.an(A.b6,j,A.aa,A.r,B.a([w,B.ao(0,B.p(j,k.O3(780,A.bg,A.c,3,74,30),A.f,j,j,new B.o(j,j,j,j,j,new B.a8(A.b0,A.b6,A.x,v,j,j),A.n),j,j,j,j,D.bsa,j,j,j),j,j,0,0,j,j)],u),j),k.b4K(824,A.bg),A.P,k.N0(),A.S,B.D(k.a8p(3),1)],u),A.aj,j,A.e,A.j,0,A.p)
case 4:h=x.p
return B.v(B.a([k.abN(824),A.aA,k.aTF(824),k.b4J(824),A.P,k.N0(),A.ac,B.D(k.b7F(3,300,B.v(B.a([k.q5(300,300),k.VH(300)],h),A.m,j,A.e,A.j,0,A.p),360),1)],h),A.aj,j,A.e,A.j,0,A.p)
case 5:w=k.ve(824,!0)
v=x.p
u=B.v(B.a([k.aaH(440,A.bg,3,62,26),k.azG(440,A.bg,2,20),A.b4,k.apJ(!1)],v),A.F,j,A.e,A.j,0,A.p)
return B.v(B.a([w,A.bx,new B.a7(j,400,B.A(B.a([new B.a7(440,j,u,j),A.aMN,new B.C(A.ia,k.q5(364,h.e===D.QG?400:330),j)],v),A.F,j,A.e,A.j,0,j,j),j),A.aA,B.D(k.VS(2,21),1)],v),A.aj,j,A.e,A.j,0,A.p)
case 6:return B.v(B.a([k.abN(824),A.ac,k.bVl(824,2,70),k.cu5(824,21),A.P,k.N0(),A.ac,B.D(k.b7F(3,340,B.av(k.q5(340,340),j,j,j),350),1)],x.p),A.aj,j,A.e,A.j,0,A.p)
case 7:w=k.ve(824,!0)
v=B.b0(h.x)
u=Date.now()
u=C.bAU(new B.S(u,0,!1))
t=x.p
v=B.a([B.p(j,B.d(u.toUpperCase(),j,j,j,j,j,j,k.Pc(i,13,h.ch?B.b0(h.f):A.c,1.2,A.u),A.L,j,j),A.f,v,j,j,j,j,j,j,A.bk,j,j,j),A.aA],t)
u=A.a.i(k.c.w)
if(u.length!==0)v.push(B.d("\u201c"+u+"\u201d",j,j,j,j,j,j,k.aXU(h.Q,24,1.15,A.cD,A.O),j,j,j))
v.push(A.b4)
if(k.gaz0())v.push(k.az_(230,250))
return B.v(B.a([w,A.aA,B.D(B.A(B.a([new B.a7(230,j,B.v(v,A.aj,j,A.e,A.j,0,A.p),j),B.p(j,j,A.f,B.b0(h.w),j,j,j,j,j,A.ag_,j,j,j,1.2),new B.a7(570,j,B.v(B.a([k.aaH(570,A.bg,3,62,28),k.cu6(570,A.bg,20),A.P,k.apJ(!1),A.P,B.av(k.q5(570,330),j,j,j),k.VH(570),A.S,B.D(k.aOc(2,!1,17),1)],t),A.aj,j,A.e,A.j,0,A.p),j)],t),A.F,j,A.e,A.j,0,j,j),1)],t),A.aj,j,A.e,A.j,0,A.p)
case 8:w=k.ve(824,!0)
v=h.ch
u=v?B.b0(h.x):B.b0(h.w)
t=B.d("\u2605  SPECIAL REPORT  \u2605",j,j,j,j,j,j,k.Pc(i,13,v?A.w:B.b0(h.x),3,A.u),j,j,j)
s=x.p
return B.v(B.a([w,A.ac,B.p(j,B.v(B.a([t,A.an,k.O3(788,A.bg,v?A.w:B.b0(h.f),2,72,30)],s),A.F,j,A.e,A.j,0,A.p),A.f,u,j,j,j,j,j,j,D.bqw,j,j,j),k.b4K(824,A.bg),A.S,B.av(k.q5(824,310),j,j,j),k.VH(824),A.P,k.N0(),A.S,B.D(k.a8p(3),1)],s),A.aj,j,A.e,A.j,0,A.p)
case 10:w=x.p
return B.v(B.a([k.ve(824,!0),A.aP,new B.an(A.W,j,A.aa,A.r,B.a([k.q5(824,430),B.ao(18,k.c5e(k.c.b,17),j,j,18,j,j,j)],w),j),A.bx,k.ayf(824,3,66),k.b4O(824),A.ac,B.p(j,j,A.f,B.b0(h.w).j(0.25),j,j,j,1,j,j,j,j,j,j),A.ac,k.auQ(),A.aA,B.D(k.VS(2,18),1)],w),A.aj,j,A.e,A.j,0,A.p)
case 11:h=h.x
w=x.p
return B.v(B.a([k.ve(824,!0),A.bx,new B.a7(j,500,B.A(B.a([new B.a7(410,j,B.v(B.a([k.ade(k.c.b,B.b0(h).j(0.14),15,B.b0(h)),A.aP,k.b1Z(410,4,58,28),k.azJ(410,6,20),A.b4],w),A.F,j,A.e,A.j,0,A.p),j),U.aMO,k.q5(390,500)],w),A.F,j,A.e,A.j,0,j,j),j),A.aA,k.auQ(),A.aP,B.D(k.VS(2,18),1)],w),A.aj,j,A.e,A.j,0,A.p)
case 12:w=k.ve(824,!0)
v=k.q5(824,420)
u=B.ht9(-0.25)
t=B.b0(h.x)
s=B.a([new B.ac(0,A.G,A.w.j(0.4),A.J,10)],x.V)
r=x.p
return B.v(B.a([w,A.aP,new B.an(A.W,j,A.aa,A.r,B.a([v,B.ao(22,B.fs(j,B.p(j,B.d("BREAKING NEWS",j,j,j,j,j,j,k.c5h(i,30,A.c,1,A.cD,A.u),j,j,j),A.f,j,j,new B.o(t,j,j,j,s,j,A.n),j,j,j,j,D.bsq,j,j,j),j,u,!0),j,j,0,j,j,j)],r),j),A.bx,k.ayf(824,3,62),k.b4O(824),A.ac,B.p(j,j,A.f,B.b0(h.w).j(0.25),j,j,j,1,j,j,j,j,j,j),A.ac,k.aVC(A.le),A.aA,B.D(k.VS(2,18),1)],r),A.aj,j,A.e,A.j,0,A.p)
case 13:w=k.c
q=A.a.i(w.x)
if(!(q.length!==0)){v=A.a.i(w.w)
q=v.length!==0?v:"More from NGMY News"}v=k.ve(824,!0)
u=h.w
t=x.p
w=B.a([k.q5(824,380),B.ao(j,k.ade(w.b,B.b0(u).j(0.85),15,B.b0(h.f)),j,j,16,j,16,j)],t)
s=k.ayf(824,2,60)
r=k.cui(824,2)
p=k.auQ()
o=B.D(k.aOc(2,!1,18),1)
n=B.I(B.b0(u).j(0.18),A.q,1)
m=B.m(18)
h=h.x
l=B.b0(h).j(0.05)
return B.v(B.a([v,A.aP,new B.an(A.W,j,A.aa,A.r,w,j),A.aP,s,r,A.S,p,A.aA,o,A.ac,B.p(j,B.A(B.a([B.bw(B.m(14),k.ti(150,104),A.aq),A.o8,B.D(B.v(B.a([k.ade("RELATED",B.b0(h).j(0.14),12,B.b0(h)),A.P,B.d(q,j,2,A.a2,j,j,j,k.aw6(i,19,1.15,A.H),j,j,j)],t),A.F,j,A.e,A.Q,0,A.p),1),B.W(A.ex,B.b0(u).j(0.6),j,j,j,30)],t),A.m,j,A.e,A.j,0,j,j),A.f,j,j,new B.o(l,j,n,m,j,j,A.n),j,j,j,j,A.bk,j,j,j)],t),A.aj,j,A.e,A.j,0,A.p)
case 9:return B.v(B.a([k.ve(824,!0),A.bx,k.aaH(824,A.bg,3,62,30),k.azG(824,A.bg,2,22),A.S,k.apJ(!1),A.S,B.av(k.q5(824,330),j,j,j),k.aNa(824,A.bg),A.aP,B.D(k.bEI(2,40,21),1)],x.p),A.aj,j,A.e,A.j,0,A.p)}},
B(d){var w,v,u,t=this,s=null,r="Roboto",q=t.d,p=q.f,o=x.p,n=B.a([B.bY(0,B.c_(s,new B.o(s,s,s,s,s,new B.a8(A.ax,A.aC,A.x,B.a([B.b0(p),B.b0(q.r)],x.O),s,s),A.n),A.bd),0,0,0)],o)
if(q.ax)n.push(B.bY(0,B.b3(s,s,s,new C.b7q(B.b0(q.w),s),A.au),0,0,0))
w=q.w
n.push(new B.C(D.bsW,B.v(B.a([B.D(t.cc8(),1),A.P,B.p(s,s,A.f,B.b0(w),s,s,s,1.4,s,s,s,s,s,s),A.fZ,B.A(B.a([B.d("PRINTED WITH NGMY NEWS",s,s,s,s,s,s,t.aXS(r,11,1.4,A.H),s,s,s),B.d("CREATED BY NGMY.ORG",s,s,s,s,s,s,t.Pc(r,11,B.b0(q.x),1.4,A.u),s,s,s)],o),A.m,s,A.hM,A.j,0,s,s)],o),A.aj,s,A.e,A.j,0,A.p),s))
v=B.b0(w)
n.push(B.bY(0,B.e1(B.b3(s,s,s,new C.bpW(v.j(q.ch?0.07:0.06),s),A.au),!0,s),0,0,0))
p=B.b0(p).j(0.75)
v=B.I(B.b0(w).j(0.5),A.q,1.2)
u=B.m(40)
o=B.a([],o)
q=t.f
if(q!=null)o.push(B.hS(B.fL(q,A.A,s,s,A.co,A.bQ,!1,30,!1,s,30),A.aq))
else o.push(B.W(A.ml,B.b0(w),s,s,s,28))
o.push(A.ab)
o.push(B.d("NGMY.ORG",s,s,s,s,s,s,t.aw8(r,15,1,1.6,A.u),s,s,s))
n.push(B.ao(52,B.e1(B.db(B.p(s,B.A(o,A.m,s,A.e,A.Q,0,s,s),A.f,s,s,new B.o(p,s,v,u,s,s,A.n),s,s,s,s,D.bu0,s,s,s),0.6),!0,s),s,s,s,40,s,s))
return new B.a7(900,1260,B.jt(new B.an(A.W,s,A.aa,A.r,n,s),A.r,s),s)}}
C.baW.prototype={
iX(d){return C.h8k(d)},
jD(d){return!1}}
C.baV.prototype={
a5(d,e){var w,v=C.h8k(e)
$.X()
w=B.M()
w.r=this.b.gp(0)
w.b=A.ae
w.c=6
return d.aP(v,w)},
aq(d){return!d.b.A(0,this.b)}}
C.bsp.prototype={
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
C.b7q.prototype={
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
w.sau(new B.bT(A.A,0.5,A.x,l,0,B.a([A.Ka.j(0.13),A.K],v),l,l).aw(0,B.bW(new B.u(q,p),m)))
n=w.H()
s.drawCircle(q,p,m,n)
n.delete()}w.sau(l)},
aq(d){return!1}}
C.bpW.prototype={
a5(d,e){var w,v,u=null,t=e.a,s=B.ij(u,u,u,u,B.dr(u,u,u,u,u,u,u,u,u,B.l(u,u,this.b,u,u,u,u,u,"Roboto",u,u,t*0.34,u,u,A.u,u,u,!0,u,10,u,u,u,u,u,u),"NGMY"),A.a5,A.ch,u,A.eq,A.cd)
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
C.V8.prototype={
T(){return new C.aCV()}}
C.aCV.prototype={
a_(){var w=this
w.a1()
B.hfb(w.a.c,null).bz(new C.efw(),x.g7).bz(new C.efx(w),x.a)
w.a.toString},
gaM_(){var w=D.atK[this.e].b
if(w==null){w=this.d
w=w==null?1:w.c/w.d}return w},
gaw9(){var w,v,u,t,s,r=this,q=r.d,p=q.c,o=q.d
q=r.gaM_()
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
Z9(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f
var $async$Z9=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:g=r.d
if(g==null||r.y){w=1
break}r.m(new C.efj(r))
t=4
q=r.gaw9()
j=q
p=Math.min(1600,j.c-j.a)
j=q
i=q
o=p*(j.d-j.b)/(i.c-i.a)
$.X()
n=new B.rU()
m=B.GE(n,null)
i=B.M()
i.Q=A.fU
m.Bf(g,q,new B.aa(0,0,0+p,0+o),i)
w=7
return B.b(n.qh().z0(J.fYT(p),J.fYT(o)),$async$Z9)
case 7:l=e
w=8
return B.b(l.hj(A.fW),$async$Z9)
case 8:k=e
j=r.c
if(j!=null){j=B.a6(j,!1)
i=k
i.toString
j.O(J.fb(J.wy(i)))}t=2
w=6
break
case 4:t=3
f=s.pop()
if(r.c!=null){r.m(new C.efk(r))
r.c.I(x.q).f.R(D.eOm)}w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Z9,v)},
B(d){var w,v,u,t=this,s=null,r=t.d,q=B.aH(s,s,s,s,A.kP,s,s,s,new C.efq(d),s,s,s,s,s,s),p=x.p
q=B.eF(B.a([B.bK(!1,D.fpG,s,s,!0,s,s,t.y||r==null?s:t.gc5i(),s,s)],p),s,s,!0,!0,A.At,s,1,!0,s,0,!1,s,!1,s,s,q,s,!0,s,s,s,s,s,D.ftx,s,s,s,1,s,!0)
if(r==null)p=A.lz
else{w=B.D(new B.C(A.bW,B.av(new B.fG(t.gaM_(),B.co(new C.efr(t,r)),s),s,s,s),s),1)
v=B.a([],p)
for(u=0;u<6;++u)v.push(new B.C(A.jc,B.jI(s,s,s,new B.x(D.atK[u].a,s,E.aOA,s,s,s,s,s,s,s,s,s),s,new C.efs(t,u),t.e===u,s,s,s,s),s))
p=B.v(B.a([w,B.p(s,B.bm(!0,B.v(B.a([new B.a7(s,40,B.cB(v,s,s,s,s,A.aO,!1),s),B.A(B.a([D.bKC,B.D(B.kU(s,s,s,6,1,new C.eft(t),t.f),1),D.bKe],p),A.m,s,A.e,A.j,0,s,s),D.fn6,A.an,B.bK(!1,D.fmR,s,s,!0,s,s,new C.efu(t,d),s,s)],p),A.m,s,A.e,A.Q,0,A.p),!0,!1,A.af,!0,!1),A.f,D.W8,s,s,s,s,s,s,D.bpS,s,s,s)],p),A.m,s,A.e,A.j,0,A.p)}return B.c8(q,A.At,p,s,!1,!1,s,s)}}
C.bas.prototype={
a5(d,e){var w
$.X()
w=B.M()
w.Q=A.co
return d.Bf(this.b,this.c,new B.aa(0,0,0+e.a,0+e.b),w)},
aq(d){return!d.c.A(0,this.c)||d.b!==this.b}}
C.a_e.prototype={
T(){var w=$.aw(),v=x.A
return new C.aEh(new B.ar(A.as,w),new B.ar(new B.bb("NGMY",A.b3,A.aN),w),new B.cr(null,v),new B.cr(null,v),A.d.gK(D.a2m),"quote"+1000*Date.now(),B.a([],x.t),B.aX(x.S),A.L)}}
C.oo.prototype={}
C.aEh.prototype={
gaTN(){var w,v,u=this
if(u.p1)w=new B.wT(1,u.p2,0.9,u.p3).iG().l()&16777215
else{v=u.k4
w=v==null?null:v&16777215}if(w==null)return 0
return(A.o.D(A.k.V(u.ok*255),0,255)<<24|w)>>>0},
a_(){var w=this
w.a1()
w.a.toString
w.p4=null
$.aU.x1$.push(new C.eOL(w))},
q(){var w=this.d,v=$.aw()
w.S$=v
w.P$=0
w=this.e
w.S$=v
w.P$=0
this.a2()},
XO(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$XO=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b($.rL().jN(0,"assets/images/ngmy_logo.png"),$async$XO)
case 7:q=e
p=J.fb(J.wy(q))
o=r.c
w=o!=null?8:9
break
case 8:w=10
return B.b(F.bBF(new B.pA(p,1),o),$async$XO)
case 10:case 9:if(r.c==null){w=1
break}r.m(new C.eND(r,p))
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
return B.i($async$XO,v)},
Pf(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Pf=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hW().l1(92,1800,A.eG),$async$Pf)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.ff(),$async$Pf)
case 8:p=e
n=r.c
if(n==null){w=1
break}w=9
return B.b(F.bBF(new B.pA(p,1),n),$async$Pf)
case 9:if(r.c==null){w=1
break}r.m(new C.eO0(r,p))
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
return B.i($async$Pf,v)},
b1m(){var w=this
w.RG=w.R8=0
w.ry=w.rx=1
w.xr=w.x2=w.x1=w.to=0
w.y1=!1
w.aH=w.aN=w.aE=w.az=w.Z=w.b5=w.bi=w.y2=0
w.b3=null
w.b1=0.25
w.bb=null
w.bK=0.5
w.aR=1
w.c8=w.bT=w.bj=0
w.cW=w.cT=!1},
aVm(d,e,f,g,h,i,j,a0,a1){var w,v,u,t,s,r,q,p,o,n=1-g,m=n*0.2126,l=n*0.7152,k=n*0.0722
n=x.x
w=C.byk(B.a([m+g,l,k,0,0,m,l+g,k,0,0,m,l,k+g,0,0,0,0,0,1,0],n),D.d7M)
if(Math.abs(j)>0.5){v=j*3.141592653589793/180
u=Math.cos(v)
t=Math.sin(v)
s=0.715-u*0.715
r=t*0.715
q=0.072-u*0.072
p=0.213-u*0.213
w=C.byk(B.a([0.213+u*0.787-t*0.213,s-r,q+t*0.928,0,0,p+t*0.143,0.715+u*0.285+t*0.14,q-t*0.283,0,0,p-t*0.787,s+r,0.072+u*0.928+t*0.072,0,0,0,0,0,1,0],n),w)}o=128*(1-f)+d*255
n=h*25
w=C.byk(C.fTY(Math.pow(2,e)*f,o+n,o-i*25,o-n+i*12),w)
if(a0>0){n=a0*255*0.25
w=C.byk(C.fTY(1-a0*0.5,n,n,n),w)}return a1?C.byk(C.fTY(-1,255,255,255),w):w},
azP(){var w,v,u=B.af("\\S+",!0,!1,!1,!1).kR(0,this.d.a.a),t=B.B(u,B.a3(u).k("J.E"))
for(u=this.db;w=u.length,v=t.length,w<v;)u.push(0)
if(w>v)A.d.yU(u,v,w)
this.dx.pW(new C.eOa(t),!0)
return t},
b3S(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.w
e.azP()
w=C.i_s(e.d.a.a,e.db)
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
return C.hWX(d,k,v,a0,j,e.gaTN(),e.ax,i,u,q,p,r,t,s,w,g,h,f,n,l,o,m)},
cs1(){return this.b3S(null)},
CM(){var w=0,v=B.j(x.dd),u,t=this,s,r,q
var $async$CM=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.p4==null){u=null
w=1
break}w=3
return B.b($.aU.gms(),$async$CM)
case 3:w=4
return B.b(B.bN(A.eN,null,x.H),$async$CM)
case 4:w=5
return B.b($.aU.gms(),$async$CM)
case 5:s=$.aU.ak$.x.h(0,t.r)
r=s==null?null:s.gb8()
if(!(r instanceof B.pL)){u=null
w=1
break}w=7
return B.b(r.lR(1080/r.gY(0).a),$async$CM)
case 7:w=6
return B.b(e.hj(A.fW),$async$CM)
case 6:q=e
u=q==null?null:J.fb(A.dz.gaO(q))
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$CM,v)},
a9h(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$a9h=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.Q){w=1
break}q.m(new C.eNm(q))
t=4
w=7
return B.b(q.CM(),$async$a9h)
case 7:p=e
o=p==null?null:"data:image/png;base64,"+A.cS.gcv().aJ(p)
n=C.Bd(null,null,null,null,D.o2,6,!1,null,null,null,null,null,C.cC(),null,!1,null,"NGMY Quote",null,null,B.a([q.b3S(o)],x.g),"office_blue",null,!1,null)
l=q.c
if(l!=null)B.a6(l,!1).O(n)
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
if(q.c!=null)q.m(new C.eNn(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a9h,v)},
A9(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$A9=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.Q){w=1
break}q.m(new C.eNk(q))
t=4
w=7
return B.b($.aU.gms(),$async$A9)
case 7:w=8
return B.b(B.bN(A.ov,null,x.H),$async$A9)
case 8:w=9
return B.b($.aU.gms(),$async$A9)
case 9:k=$.aU.ak$.x.h(0,q.f)
p=k==null?null:k.gb8()
if(!(p instanceof B.pL))throw B.V("The picture is not ready yet.")
w=10
return B.b(p.lR(1080/p.gY(0).a),$async$A9)
case 10:o=e
w=11
return B.b(o.hj(A.fW),$async$A9)
case 11:n=e
if(n==null)throw B.V("Could not make the picture.")
w=12
return B.b(A7.afs(J.fb(A.dz.gaO(n)),"ngmy_quote.png","image/png"),$async$A9)
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
if(q.c!=null)q.m(new C.eNl(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$A9,v)},
cfd(){var w=this.p4
w.toString
return B.co(new C.eNU(this,w))},
aY0(d,e){var w=null
return B.br(w,w,w,w,w,D.eYr,w,w,!0,new B.b4(4,B.m(16),P.uI),w,w,w,w,w,D.t8,!0,w,w,w,w,new B.b4(4,B.m(16),D.aWW),w,w,w,w,w,w,w,w,A1.D1,e,w,w,w,w,w,w,w,D.f2F,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
xv(d,e){var w=null,v=x.p,u=B.a([],v)
A.d.v(u,B.a([B.W(e,A.b5,w,w,w,15),A.bp],v))
u.push(B.d(d,w,w,w,w,w,w,D.aPl,w,w,w))
return new B.C(D.bnP,B.A(u,A.m,w,A.e,A.j,0,w,w),w)},
aY_(d,e){var w=null,v=B.m(18),u=B.I(A.bF,A.q,1)
return B.p(w,B.aG(!1,A.a1,!0,w,d,A.f,w,0,w,w,w,w,w,A.jA),A.f,w,w,new B.o(D.t8,w,u,v,w,w,A.n),w,w,w,w,e,w,w,1/0)},
vk(d){return this.aY_(d,A.bC)},
nW(d,e,f,g){var w,v,u,t,s,r=null,q=g!=null,p=f?G.tV:r
if(f)w=r
else w=A.c.j(q?0.07:0.03)
v=B.m(30)
u=B.I(f?A.K:A.bF,A.q,1)
t=x.p
s=B.a([],t)
if(e!=null)A.d.v(s,B.a([B.W(e,q?A.c:A.j9,r,r,r,16),A.bp],t))
s.push(B.d(d,r,r,r,r,r,r,B.l(r,r,q?A.c:A.j9,r,r,r,r,r,r,r,r,12.5,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r))
return B.aE(r,B.dg(r,B.A(s,A.m,r,A.e,A.Q,0,r,r),r,r,A.bc,new B.o(w,r,u,v,r,p,A.n),A.hX,r,r,r,A.EY,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,g,r,r,r,r,r,r,!1,A.a8)},
af4(d,e,f){return this.nW(d,null,e,f)},
awd(d,e,f,g,h,i,j){var w=null,v=B.m(12),u=g?A.b5.j(0.28):A.c.j(0.05),t=g?A.ez:A.bF,s=x.p
v=B.a([B.dg(w,d,w,w,A.bc,new B.o(u,w,B.I(t,A.q,g?2:1),v,w,w,A.n),A.hX,w,e,w,new B.Q(i,i,i,i),w,w,j)],s)
u=g?A.c:A.az
A.d.v(v,B.a([A.at,B.d(f,w,1,A.a2,w,w,w,B.l(w,w,u,w,w,w,w,w,w,w,w,j<54?8.5:10.5,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],s))
return B.aE(w,new B.a7(j,w,B.v(v,A.m,w,A.e,A.Q,0,A.p),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,h,w,w,w,w,w,w,!1,A.a8)},
aY3(d,e,f,g,h,i){return this.awd(d,e,f,g,h,5,i)},
kb(d,e,f,g,h,i,j){var w,v,u=null,t=x.p,s=B.a([B.D(B.d(d,u,u,u,u,u,u,D.eVv,u,u,u),1)],t)
if(i!=null&&Math.abs(e-i)>0.001)s.push(B.aE(u,D.e3l,A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.eO6(this,h,i),u,u,u,u,u,u,!1,A.a8))
w=A.c.j(0.08)
v=B.m(20)
s.push(B.p(u,B.d(j,u,u,u,u,u,u,A.aOq,u,u,u),A.f,u,u,new B.o(w,u,u,v,u,u,A.n),u,u,u,u,A.Yi,u,u,u))
s=B.A(s,A.m,u,A.e,A.j,0,u,u)
w=this.c
w.toString
w=B.au3(w).cG_(A.b5,A.bF,A.b5.j(0.2),A.c,D.eFe,4)
return new B.C(A.xg,B.v(B.a([s,B.a9e(B.kU(u,u,u,g,f,new C.eO7(this,h),A.k.D(e,f,g)),w)],t),A.m,u,A.e,A.j,0,A.p),u)},
ah4(d,e,f,g,h,i){return this.kb(d,e,f,g,h,null,i)},
ahu(d,e,f){var w,v,u,t,s,r,q,p,o=null,n=B.a([],x.p)
for(w=f.length,v=0;v<f.length;f.length===w||(0,B.L)(f),++v){u=f[v]
t=u==null
s=t?A.dp:B.b0(u)
r=d==u
q=r?A.c:A.b2
p=new B.aA(q,r?3:1,A.q,-1)
t=t?D.bDL:o
n.push(B.aE(o,B.p(o,t,A.f,o,o,new B.o(s,o,new B.bP(p,p,p,p),o,o,o,A.a6),o,34,o,o,o,o,o,34),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new C.eO9(this,e,u),o,o,o,o,o,o,!1,A.a8))}return B.bZ(A.bB,n,A.bs,10,10)},
bIP(){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.x==="All")w=D.a2m
else{v=x.a8
w=B.B(new B.a2(D.a2m,new C.eNc(o),v),v.k("J.E"))}v=B.aM(n,A.T,!1,n,!0,A.r,n,B.aN(),o.d,n,n,n,n,n,2,o.aY0("Your quote",o.w.y),A.y,!0,n,!0,n,!1,n,A.ai,n,n,n,n,n,n,n,280,n,4,2,n,!1,"\u2022",n,new C.eNd(o),n,n,n,!1,n,n,!1,n,!0,n,A.a9,n,n,n,n,n,n,n,n,n,n,n,A.a79,!0,A.a5,n,A.am,n,n,n,n)
u=B.aM(n,A.T,!1,n,!0,A.r,n,B.aN(),o.e,n,n,n,n,n,2,o.aY0("Who said it","NGMY"),A.y,!0,n,!0,n,!1,n,A.ai,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,new C.eNe(o),n,n,n,!1,n,n,!1,n,!0,n,A.a9,n,n,n,n,n,n,n,n,n,n,n,A.dl,!0,A.a5,n,A.am,n,n,n,n)
t=o.xv("DESIGNS",A.tJ)
s=x.p
r=B.a([],s)
for(q=0;q<6;++q){p=D.cL6[q]
r.push(new B.C(A.jc,o.af4(p,o.x===p,new C.eNf(o,p)),n))}return B.v(B.a([v,A.S,u,t,B.cd(B.A(r,A.m,n,A.e,A.j,0,n,n),A.r,n,A.y,n,n,n,n,A.aO),A.ac,new B.a7(n,118,B.hH(n,new C.eNg(o,w),w.length,n,n,A.aO,new C.eNh(),!1),n),A.P,o.aY_(B.v(B.a([B.iD(A.b5,n,n,A.af,!0,new C.eNi(o),n,D.fep,n,D.faX,o.k3),B.iD(A.b5,n,n,A.af,!0,new C.eNj(o),n,n,n,D.f8d,o.k2)],s),A.m,n,A.e,A.j,0,A.p),A.agu)],s),A.F,n,A.e,A.j,0,A.p)},
cAx(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=null,a7=a5.azP()
if(a7.length===0)return a5.vk(B.d("Type your quote on the Design tab. Every word will show up here so you can make it bigger, normal or smaller.",a6,a6,a6,a6,a6,a6,D.II,a6,a6,a6))
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
m=B.B(u,B.a3(u).k("cn.E"))
A.d.fh(m)
l=m.length!==0&&A.d.d9(m,new C.eOA(a5,m))?a5.db[A.d.gK(m)]:a6
k=new C.eOH(a5)
j=new C.eOJ()
q=B.d("Tap the words you want to change, then choose a size. One sentence can have big, normal and small words.",a6,a6,a6,a6,a6,a6,D.II,a6,a6,a6)
p=x.p
o=B.a([],p)
for(i=a5.db,h=0;h<a7.length;++h){g=new B.aW(11,11)
f=u.t(0,h)?A.b5.j(0.38):A.c.j(0.06)
e=u.t(0,h)?A.ez:A.bF
d=new B.aA(e,u.t(0,h)?2:1,A.q,-1)
e=a7[h].b
a0=e.index
e=A.a.ap(w,a0,a0+e[0].length)
a0=B.af("[*~^]",!0,!1,!1,!1)
e=B.aK(e,a0,"")
a0=j.$1(i[h])
a1=i[h]>0?A.u:A.a4
o.push(B.aE(a6,B.p(a6,new B.x(e,a6,new B.G(!0,A.c,a6,a6,a6,a6,a0,a1,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),a6,a6,a6,a6,a6,a6,a6,a6,a6),A.f,a6,a6,new B.o(f,a6,new B.bP(d,d,d,d),new B.bq(g,g,g,g),a6,a6,A.n),a6,a6,a6,a6,A.LZ,a6,a6,a6),A.y,!1,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,new C.eOB(a5,h),a6,a6,a6,a6,a6,a6,!1,A.a8))}o=a5.vk(B.bZ(A.bB,o,A.rG,6,6))
i=B.a([a5.nW("All words",K.akK,!1,new C.eOC(a5,a7))],p)
if(n>1){a2=0
for(;;){if(!(a2<n&&a2<8))break
a3=a2+1
i.push(a5.af4("Sentence "+a3,!1,new C.eOD(a5,a7,v,a2)))
a2=a3}}i.push(a5.af4("Clear picks",!1,new C.eOE(a5)))
i=B.bZ(A.bB,i,A.bs,8,8)
g=a5.xv("SIZE OF THE PICKED WORDS",D.ak9)
f=B.a([],p)
for(s=0;s<4;++s){e={}
a0=D.ddb[s]
a1=e.a=null
a4=a0.a
e.a=a4
e=u.a===0?a1:new C.eOF(e,k)
f.push(a5.af4(a0.b,l===a4,e))}return B.v(B.a([q,A.S,o,A.S,i,g,B.bZ(A.bB,f,A.bs,8,8),A.S,a5.nW("Make every word normal",A.ld,!1,new C.eOG(a5))],p),A.F,a6,A.e,A.j,0,A.p)},
cvM(){var w,v,u,t,s,r,q=this,p=null,o=x.p,n=B.A(B.a([D.bv8,B.d(A.d.iC(D.avq,new C.eOj(q)).b,p,p,p,p,p,p,D.eWY,p,p,p)],o),A.m,p,A.e,A.j,0,p,p),m=B.co(new C.eOk(q)),l=q.xv("HIGHLIGHT BEHIND THE WORDS",A.a_b),k=q.p1?-1:q.k4
k=q.ahu(k,new C.eOl(q),D.cV7)
w=q.p1
v=w?A.c:A.b2
n=B.a([n,A.S,m,l,B.bZ(A.bB,B.a([k,B.aE(p,B.p(p,D.bGH,A.f,p,p,new B.o(p,p,B.I(v,A.q,w?3:1),p,p,D.eQY,A.a6),p,34,p,p,p,p,p,34),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.eOo(q),p,p,p,p,p,p,!1,A.a8)],o),A.rG,10,10),A.an,B.d("Add a coloured band behind the words, with any word design. The first circle turns it off.",p,p,p,p,p,p,D.II,p,p,p)],o)
if(q.gaTN()!==0){m=B.a([],o)
if(q.p1){l=q.p2
l=q.ah4("Colour",l,0,360,new C.eOp(q),""+A.k.V(l)+"\xb0")
k=q.p3
A.d.v(m,B.a([l,q.ah4("Shade",k,0.15,0.9,new C.eOq(q),""+A.k.V(k*100))],o))}l=q.ok
m.push(q.kb("Strength",l,0.15,1,new C.eOr(q),1,""+A.k.V(l*100)+"%"))
A.d.v(n,B.a([A.S,q.vk(B.v(m,A.m,p,A.e,A.j,0,A.p))],o))}n.push(q.xv("LOOK",A.y5))
m=B.a([q.nW("Bold",I.ak7,q.fy,new C.eOs(q)),q.nW("Italic",I.ak8,q.go,new C.eOt(q))],o)
for(u=0;u<3;++u){l={}
k=D.cMf[u]
l.a=null
t=k.a
l.a=t
w=q.id===t
v=w?G.tV:p
w=w?p:A.c.j(0.07)
s=new B.aW(14,14)
r=new B.aA(q.id===l.a?A.K:A.bF,1,A.q,-1)
m.push(B.aE(p,B.p(p,B.W(k.b,A.c,p,p,p,20),A.f,p,p,new B.o(w,p,new B.bP(r,r,r,r),new B.bq(s,s,s,s),p,v,A.n),p,38,p,p,p,p,p,42),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.eOu(l,q),p,p,p,p,p,p,!1,A.a8))}n.push(B.bZ(A.bB,m,A.rG,8,8))
n.push(q.xv("COLOUR",A.n9))
n.push(q.ahu(q.fx,new C.eOv(q),D.d4M))
n.push(A.an)
n.push(B.d("The first circle keeps the colour that comes with the design.",p,p,p,p,p,p,D.II,p,p,p))
n.push(q.xv("SIZE AND PLACE",A.FU))
m=q.fr
m=q.kb("Text size",m,0.5,1.6,new C.eOm(q),1,""+A.k.V(m*100)+"%")
l=q.k1
n.push(q.vk(B.v(B.a([m,q.kb("Up / down",l,0.12,0.5,new C.eOn(q),0.3,""+A.k.V(l*100))],o),A.m,p,A.e,A.j,0,A.p)))
return B.v(n,A.F,p,A.e,A.j,0,A.p)},
cfe(){var w,v,u,t,s,r,q=this,p=null,o=q.p4
if(o==null){w=B.m(22)
v=B.I(A.b5.j(0.6),A.q,1.6)
u=B.a([A.b5.j(0.18),A.bz.j(0.12)],x.O)
return B.aE(p,B.p(p,B.v(B.a([B.p(p,D.bM1,A.f,p,p,D.aZU,p,62,p,p,p,p,p,62),A.aA,D.fc5,A.an,D.fgA],x.p),A.m,p,A.e,A.j,0,A.p),A.f,p,p,new B.o(D.t8,p,v,w,p,new B.a8(A.a3,A.a7,A.x,u,p,p),A.n),p,p,p,p,D.br2,p,p,1/0),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,q.gaY2(),p,p,p,p,p,p,!1,A.a8)}w=x.p
v=B.A(B.a([B.bw(B.m(12),new B.a7(46,62,B.fL(o,A.A,120,p,A.co,A.bQ,!1,p,!1,p,p),p),A.aq),A.bf,B.D(B.v(B.a([D.fbG,A.P,B.bZ(A.bB,B.a([q.nW("Change",A.kN,!1,q.gaY2()),q.nW("Remove",A.e4,!1,new C.eNY(q))],w),A.bs,6,6)],w),A.F,p,A.e,A.j,0,A.p),1)],w),A.m,p,A.e,A.j,0,p,p)
u=B.a([],w)
for(t=0;t<5;++t){s=D.d1j[t]
u.push(q.nW(s.b,s.a,q.at===t,new C.eNZ(q,t)))}u=B.bZ(A.bB,u,A.bs,8,8)
r=q.at
A:{if(0===r){s=q.bZc(o)
break A}if(1===r){s=q.bYf()
break A}if(2===r){s=q.bEH()
break A}if(3===r){s=q.bKV()
break A}s=q.bGO()
break A}return B.v(B.a([v,A.ac,u,A.aA,s,A.S,new B.bH(A.a3,p,p,q.nW("Reset the whole picture",A.ld,!1,new C.eO_(q)),p)],w),A.F,p,A.e,A.j,0,A.p)},
bZc(d){var w=this,v=x.p
return B.v(B.a([B.bZ(A.bB,B.a([w.nW("Auto enhance",E.ZQ,!1,new C.eNQ(w)),w.nW("Make words easy to read",A.oF,!1,new C.eNR(w))],v),A.bs,8,8),A.aA,B.co(new C.eNS(w,d))],v),A.F,null,A.e,A.j,0,A.p)},
bYf(){var w,v,u,t,s,r,q,p,o=this,n=o.R8
n=o.kb("Exposure",n,-1.5,1.5,new C.eNu(o),0,A.k.aa(n,1))
w=o.RG
w=o.kb("Brightness",w,-0.5,0.5,new C.eNv(o),0,""+A.k.V(w*100))
v=o.rx
v=o.kb("Contrast",v,0.4,2,new C.eNw(o),1,""+A.k.V(v*100))
u=o.xr
u=o.kb("Fade",u,0,1,new C.eNx(o),0,""+A.k.V(u*100))
t=o.aE
t=o.kb("Spotlight",t,0,1,new C.eNy(o),0,""+A.k.V(t*100))
s=o.Z
s=o.kb("Darken",s,0,0.85,new C.eNz(o),0,""+A.k.V(s*100))
r=o.b5
r=o.kb("Vignette",r,0,0.9,new C.eNA(o),0,""+A.k.V(r*100))
q=o.aH
q=o.kb("Shade behind words",q,0,0.85,new C.eNB(o),0,""+A.k.V(q*100))
p=o.aN
return o.vk(B.v(B.a([n,w,v,u,t,s,r,q,o.kb("Shade top & bottom",p,0,0.85,new C.eNC(o),0,""+A.k.V(p*100))],x.p),A.m,null,A.e,A.j,0,A.p))},
bEH(){var w,v,u,t,s=this,r=null,q=s.ry
q=s.kb("Colour strength",q,0,2.2,new C.eMQ(s),1,""+A.k.V(q*100))
w=s.to
w=s.kb("Warmth",w,-1,1,new C.eMR(s),0,""+A.k.V(w*100))
v=s.x1
v=s.kb("Tint",v,-1,1,new C.eMS(s),0,""+A.k.V(v*100))
u=s.x2
t=x.p
u=s.vk(B.v(B.a([q,w,v,s.kb("Shift colours",u,-180,180,new C.eMT(s),0,""+A.k.V(u)+"\xb0"),new B.bH(A.a3,r,r,s.nW("Negative",D.bBL,s.y1,new C.eMU(s)),r)],t),A.m,r,A.e,A.j,0,A.p))
v=s.xv("COLOUR WASH",A.MY)
w=s.b3
q=B.a([null],x.Z)
A.d.v(q,D.au9)
t=B.a([u,v,s.ahu(w,new C.eMV(s),q),A.P],t)
if(s.b3!=null){q=s.b1
t.push(s.vk(s.ah4("Wash strength",q,0,0.9,new C.eMW(s),""+A.k.V(q*100))))}return B.v(t,A.F,r,A.e,A.j,0,A.p)},
bKV(){var w,v,u,t,s,r=this,q=r.y2
q=r.kb("Blur",q,0,24,new C.eNo(r),0,A.o.u(A.k.V(q)))
w=r.bi
w=r.kb("Soft focus",w,0,1,new C.eNp(r),0,""+A.k.V(w*100))
v=r.az
u=x.p
v=r.vk(B.v(B.a([q,w,r.kb("Film grain",v,0,1,new C.eNq(r),0,""+A.k.V(v*100))],u),A.m,null,A.e,A.j,0,A.p))
w=r.xv("LIGHT LEAK",H.ak3)
q=r.bb
t=B.a([null],x.Z)
s=x.S
A.d.v(t,B.dc(D.au9,0,B.dJ(8,"count",s),s))
u=B.a([v,w,r.ahu(q,new C.eNr(r),t),A.P],u)
if(r.bb!=null){q=r.bK
u.push(r.vk(r.ah4("Leak strength",q,0,1,new C.eNs(r),""+A.k.V(q*100))))}return B.v(u,A.F,null,A.e,A.j,0,A.p)},
bGO(){var w,v,u,t,s=this,r=s.aR
r=s.kb("Zoom",r,1,3,new C.eN_(s),1,""+A.k.V(r*100)+"%")
w=s.bj
w=s.kb("Left / right",w,-1,1,new C.eN0(s),0,""+A.k.V(w*100))
v=s.bT
v=s.kb("Up / down",v,-1,1,new C.eN1(s),0,""+A.k.V(v*100))
u=s.c8
t=x.p
return B.v(B.a([s.vk(B.v(B.a([r,w,v,s.kb("Turn",u,-180,180,new C.eN2(s),0,""+A.k.V(u)+"\xb0")],t),A.m,null,A.e,A.j,0,A.p)),A.S,B.bZ(A.bB,B.a([s.nW("Turn 90\xb0",O.alh,!1,new C.eN3(s)),s.nW("Flip sideways",A.FI,s.cT,new C.eN4(s)),s.nW("Flip upside down",A.FI,s.cW,new C.eN5(s))],t),A.bs,8,8)],t),A.F,null,A.e,A.j,0,A.p)},
c0Q(){var w=null,v=B.m(22),u=B.I(A.bF,A.q,1)
return B.p(w,B.v(B.a([D.eFq,A.S,D.fdt,A.aA,B.aE(w,B.p(A.A,D.eFD,A.f,w,w,new B.o(w,w,w,B.m(16),w,G.tV,A.n),w,52,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eNT(this),w,w,w,w,w,w,!1,A.a8)],x.p),A.F,w,A.e,A.j,0,A.p),A.f,w,w,new B.o(D.t8,w,u,v,w,w,A.n),w,w,w,w,A.bW,w,w,w)},
bZ4(){var w,v,u,t,s,r,q,p=this,o=null,n=new C.eNL(p),m=x.p,l=B.A(B.a([D.bve,p.nW("Reset",A.ld,!1,new C.eNH(p))],m),A.m,o,A.e,A.j,0,o,o),k=B.d("Drag it on the quote to move it. It stays on every quote.",o,o,o,o,o,o,D.II,o,o,o),j=p.xv("SHAPE",A.ald),i=B.a([],m)
for(w=0;w<7;++w){v={}
u=D.BJ[w]
v.a=null
t=v.a=u.a
if(t.length!==0){s=p.cx
i.push(p.aY3(n.$2(t,p.cy),62,u.b,s===t,new C.eNI(v,p),62))}}i=B.bZ(A.bB,i,A.bs,8,8)
v=p.xv("RING",A.qS)
u=B.a([],m)
for(w=0;w<11;++w){s={}
r=D.BE[w]
s.a=null
t=s.a=r.a
q=p.cy
u.push(p.aY3(n.$2(p.cx,t),62,r.b,q===t,new C.eNJ(s,p),62))}u=B.bZ(A.bB,u,A.bs,8,8)
s=p.CW
return B.v(B.a([l,A.at,k,j,i,v,u,A.ac,p.vk(p.kb("Size",s,0.12,0.4,new C.eNK(p),0.22,""+A.k.V(s*100)))],m),A.F,o,A.e,A.j,0,A.p)},
b_Z(d){return new B.a7(null,d,new B.fG(0.5625,B.co(new C.eO3(this)),null),null)},
cv3(){var w,v,u,t,s,r,q=null,p=A.c.j(0.05),o=B.m(18),n=B.I(A.bF,A.q,1),m=x.p,l=B.a([],m)
for(w=0;w<6;++w){v=this.as===w
u=v?G.tV:q
t=new B.aW(14,14)
s=D.d3m[w]
r=v?A.c:A.az
r=B.W(s.a,r,q,q,q,19)
v=v?A.c:A.az
l.push(new B.bD(1,A.bi,B.aE(A.c5,B.dg(q,B.v(B.a([r,A.cX,new B.q9(A.eg,A.A,A.f,new B.x(s.b,q,new B.G(!0,v,q,q,q,q,10.5,A.H,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q),q,q,q,q,q,q,q,q,q),q)],m),A.m,q,A.e,A.Q,0,A.p),q,q,A.bc,new B.o(q,q,q,new B.bq(t,t,t,t),q,u,A.n),D.bmL,q,q,q,A.hI,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.eOc(this,w),q,q,q,q,q,q,!1,A.a8),q))}return B.p(q,B.A(l,A.m,q,A.e,A.j,0,q,q),A.f,q,q,new B.o(p,q,n,o,q,q,A.n),q,q,q,D.boQ,A.lJ,q,q,q)},
aOI(){var w,v,u=this,t=null,s=u.cv3(),r=u.as
A:{if(0===r){w=u.bIP()
break A}if(1===r){w=u.cAx()
break A}if(2===r){w=u.cvM()
break A}if(3===r){w=u.cfe()
break A}if(4===r){w=u.bZ4()
break A}w=u.c0Q()
break A}v=x.p
return B.bw(A.rM,B.ek(B.v(B.a([s,B.D(B.cB(B.a([w],v),t,D.bpT,t,t,A.ah,!1),1)],v),A.m,t,A.e,A.j,0,A.p),D.W8,!0),A.aq)},
aKY(){var w,v,u,t,s=this,r=null,q=s.Q?r:s.gc5J(),p=B.m(16)
q=B.D(B.aE(r,B.p(r,D.eFM,A.f,r,r,new B.o(A.c.j(0.08),r,B.I(A.b2,A.q,1),p,r,r,A.n),r,50,r,r,r,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,!1,A.a8),1)
p=s.Q?r:s.gbKv()
w=B.m(16)
v=B.a([new B.ac(0,A.G,A.bz.j(0.35),A.cw,16)],x.V)
u=x.p
t=B.a([],u)
if(s.Q)t.push(D.eKG)
else t.push(D.bFO)
t.push(A.ab)
t.push(D.bwZ)
return B.p(r,B.A(B.a([q,A.av,B.D(B.aE(r,B.p(r,B.A(t,A.m,r,A.bb,A.j,0,r,r),A.f,r,r,new B.o(r,r,r,w,v,G.tV,A.n),r,50,r,r,r,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,p,r,r,r,r,r,r,!1,A.a8),1)],u),A.m,r,A.e,A.j,0,r,r),A.f,r,r,D.aZ1,r,r,r,r,G.agi,r,r,r)},
aY1(){var w=null
return new B.C(T.Ye,B.A(B.a([B.aH(w,w,w,w,A.mp,w,w,w,new C.eNt(this),w,w,w,w,w,w),D.fsu,A.b4,D.bOi],x.p),A.m,w,A.e,A.j,0,w,w),w)},
B(d){var w=null
return B.c8(w,A.At,B.bm(!0,B.co(new C.eOK(this)),!0,!1,A.af,!0,!0),w,!1,!1,w,w)}}
C.be_.prototype={
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
C.m_.prototype={}
C.z7.prototype={
ae(){var w=this
return B.F(["at",w.a.a6().ac(),"outline",w.b,"extras",w.c,"request",w.d],x.N,x.z)}}
C.nD.prototype={}
C.vH.prototype={
a4(){return"NgmySlidesAiExtra."+this.b}}
C.a7j.prototype={}
C.aq2.prototype={}
C.a_J.prototype={
T(){return new C.aGb(new B.ar(A.as,$.aw()),B.ki(!0,null,!0,!0,null,null,!1),D.dsZ,B.a([],x.s),B.ew([D.Hz],x.Q))}}
C.aGb.prototype={
q(){var w=this.d
w.S$=$.aw()
w.P$=0
this.f.q()
this.a2()},
a_u(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$a_u=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hW().BJ(90,700,700,A.eG),$async$a_u)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.ff(),$async$a_u)
case 8:p=e
if(r.c!=null)r.m(new C.eUM(r,p,q))
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
return B.i($async$a_u,v)},
a_x(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a_x=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i=20-r.y.length
if(i<=0){w=1
break}t=4
n=i>1?i:null
w=7
return B.b(new B.hW().aG8(78,n,1100,1100),$async$a_x)
case 7:q=e
if(J.cl(q)){w=1
break}p=B.bl(r.y,!0,x.N)
n=J.aV(q)
case 8:if(!n.C()){w=9
break}o=n.gU(n)
if(J.ad(p)>=20){w=9
break}w=10
return B.b(o.ff(),$async$a_x)
case 10:m=e
l=o.b.toLowerCase()
if(A.a.cb(l,".png"))k="image/png"
else k=A.a.cb(l,".webp")?"image/webp":"image/jpeg"
J.ch(p,"data:"+k+";base64,"+A.cS.gcv().aJ(m))
w=8
break
case 9:if(r.c!=null)r.m(new C.eUN(r,p))
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
return B.i($async$a_x,v)},
b1Y(d){var w,v,u=null
if(d!=null&&A.a.t(d,","))try{w=B.fL(A.cE.aJ(A.d.gal(d.split(","))),A.A,u,u,A.co,A.bQ,!0,u,!1,u,u)
return w}catch(v){}return D.bl2},
bZa(d,e,f,g){var w=e.length===0&&f.length===0?"rounded":e
return B.coT(C.fvp(w,this.b1Y(d),f),g)},
aby(d,e,f,g,h){var w=null,v=new C.eUK(f,e),u=new C.eUL(f,e),t=A.c.j(0.05),s=B.m(12),r=B.m(12),q=B.m(12),p=h==null,o=B.I(p?A.bF:A.b5.j(0.6),A.q,1)
if(p)p=new B.a7(34,30,new B.an(A.W,w,A.aa,A.f,B.a([B.av(B.W(f?A.Bo:A.MN,A.c_,w,w,w,26),w,w,w),D.e9_],x.p),w),w)
else p=this.bZa(g,v.$1(h),u.$1(h),34)
return B.aG(!1,A.a1,!0,s,B.aL(!1,r,!0,B.p(w,B.A(B.a([B.D(B.av(p,w,w,w),1),D.bFv],x.p),A.m,w,A.e,A.j,0,w,w),A.f,w,w,new B.o(w,w,o,q,w,w,A.n),w,44,w,w,A.mh,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eUJ(this,f,h,g,v,u,d),w,w,w,w,w,w,w),A.f,t,0,w,w,w,w,w,A.ag)},
aVs(d,e,f,g,h){var w,v,u,t,s,r,q,p=null,o=null,n=h==null
if(!n&&A.a.t(h,","))try{o=B.bw(B.m(8),B.fL(A.cE.aJ(A.d.gal(h.split(","))),A.A,p,p,A.co,A.bQ,!1,30,!1,p,30),A.aq)}catch(w){}v=A.c.j(0.05)
u=B.m(14)
t=B.m(14)
s=B.m(14)
r=B.I(n?A.bF:A.bo.j(0.6),A.q,1)
q=o
n=q==null?B.W(d,A.es,p,p,p,20):q
n=B.a([n,A.ab,B.D(B.d(e,p,1,A.a2,p,p,p,A.Tf,p,p,p),1)],x.p)
if(f!=null)n.push(B.aE(p,D.a06,A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,!1,A.a8))
return B.aG(!1,A.a1,!0,u,B.aL(!1,t,!0,B.p(p,B.A(n,A.m,p,A.e,A.j,0,p,p),A.f,p,p,new B.o(p,p,r,s,p,p,A.n),p,50,p,p,A.l7,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,g,p,p,p,p,p,p,p),A.f,v,0,p,p,p,p,p,A.ag)},
a7K(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$a7K=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(C.fyQ(),$async$a7K)
case 7:q=e
if(q==null||r.c==null){w=1
break}r.m(new C.eUs(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
p=B.a9(n)
if(r.c!=null)r.m(new C.eUt(r,p))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a7K,v)},
ado(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$ado=B.e(function(d,a0){if(d===1){s.push(a0)
w=t}for(;;)switch(w){case 0:f=A.a.i(r.d.a.a)
if(f.length<6&&r.e==null){r.m(new C.eUv(r))
w=1
break}if(r.x==null){m=B.af("\\blogo\\b",!1,!1,!1,!1)
m=m.b.test(f)}else m=!1
if(m){r.m(new C.eUw(r))
w=1
break}m=r.e
l=m==null?null:m.c
if(l==null)l=""
q=l.length===0?f:f+"\n\nSOURCE DOCUMENT ("+m.a+"):\n"+l
r.m(new C.eUx(r))
t=4
m=r.ch
k=r.CW
j=r.x
i=r.y
p=B.a([],x.aD)
h=r.e
if((h==null?null:h.b)!=null){h=h.b
h.toString
J.ch(p,h)}w=7
return B.b(C.fu7(q,r.cx,j,new C.b_O(r.z,r.Q,r.as,r.at),new C.eUy(r),i,m,p,k),$async$ado)
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
n=B.a9(e)
if(r.c!=null)r.m(new C.eUz(r,n))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$ado,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=x.w,f=B.aI(d,A.eD,g).w
g=B.aI(d,A.bT,g).w
w=B.av(B.p(h,h,A.f,h,h,new B.o(A.b2,h,h,B.m(99),h,h,A.n),h,4,h,h,h,h,h,40),h,h,h)
v=x.V
u=B.av(B.aE(h,B.p(h,D.bIF,A.f,h,h,new B.o(h,h,B.I(A.c.j(0.35),A.q,2),h,B.a([new B.ac(2,A.G,A.bo.j(0.5),A.J,24)],v),D.bS2,A.a6),h,84,h,h,h,h,h,84),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.eV_(i),h,h,h,h,h,h,!1,A.a8),h,h,h)
t=x.p
s=B.a([],t)
if(i.e!=null)s.push(B.aH(h,h,h,h,D.a06,h,h,h,i.ax?h:new C.eV0(i),h,h,h,h,"Remove document",h))
r=i.e
r=r==null?"Attach a PDF, Word or text file":r.a
q=i.ax?h:i.gbzM()
v=B.a([new B.ac(0,A.G,A.b5.j(0.45),A.J,10)],v)
s.push(B.hp(B.aG(!1,A.a1,!0,h,B.aL(!1,h,!0,B.p(h,B.W(i.e==null?A.vo:A.hy,A.c,h,h,h,20),A.f,h,h,new B.o(h,h,h,h,v,E.vD,A.a6),h,40,h,h,h,h,h,40),A.cL,!0,h,h,h,h,h,h,h,h,h,h,h,q,h,h,h,h,h,h,h),A.f,A.K,0,h,h,A.cL,h,h,A.ag),h,r,h,h))
v=B.A(s,A.m,h,A.e,A.Q,0,h,h)
s=A.c.j(0.05)
v=B.aM(h,A.T,!1,h,!0,A.r,h,B.aN(),i.d,h,h,h,h,h,2,B.br(h,h,h,h,h,h,h,h,!0,new B.b4(4,B.m(16),new B.aA(A.c.j(0.1),1,A.q,-1)),h,h,h,h,h,s,!0,h,h,h,h,new B.b4(4,B.m(16),D.aWt),h,h,h,h,h,h,h,h,X.Iw,"Type your idea here\u2026",h,h,h,h,h,h,h,h,h,!0,!0,!1,h,h,h,h,h,h,h,h,new B.C(A.jc,v,h),h,h,h,h,h),A.y,!0,h,!0,h,!1,i.f,A.ai,h,h,h,h,h,h,h,h,h,6,3,h,!1,"\u2022",h,h,h,h,h,!1,h,h,!1,h,!0,h,A.a9,h,h,h,h,h,h,h,h,h,h,h,D.aON,!0,A.a5,h,A.am,h,h,h,h)
s=i.x
r=s==null
q=r?"Add your logo":"Logo added"
r=r?h:new C.eV1(i)
s=i.aVs(A.lf,q,r,i.gcfF(),s)
r=i.z
r=B.D(i.aby(new C.eV3(i),i.Q,!1,i.x,r),1)
q=i.Q
q=B.D(B.v(B.a([s,A.an,B.A(B.a([r,A.bp,B.D(i.aby(new C.eV4(i),i.z,!0,i.x,q),1)],t),A.m,h,A.e,A.j,0,h,h)],t),A.m,h,A.e,A.j,0,A.p),1)
s=i.y
r=s.length
p=r===0
if(p)r="Add your pictures"
else{o=r===1?"":"s"
o=""+r+" picture"+o
r=o}s=p?h:A.d.gK(s)
p=i.y.length===0?h:new C.eV5(i)
s=i.aVs(A.vm,r,p,i.gcfN(),s)
p=i.as
r=i.at
o=i.y
o=o.length===0?h:A.d.gK(o)
p=B.D(i.aby(new C.eV6(i),r,!1,o,p),1)
o=i.at
r=i.as
n=i.y
n=n.length===0?h:A.d.gK(n)
o=B.a([w,A.aA,D.fhP,A.at,D.fkC,A.bx,u,A.P,D.fj4,A.aA,v,A.bx,B.A(B.a([q,A.av,B.D(B.v(B.a([s,A.an,B.A(B.a([p,A.bp,B.D(i.aby(new C.eV7(i),r,!0,n,o),1)],t),A.m,h,A.e,A.j,0,h,h)],t),A.m,h,A.e,A.j,0,A.p),1)],t),A.F,h,A.e,A.j,0,h,h),A.an,D.fmj],t)
w=i.w.a
if(w.length!==0){v=B.m(999)
u=B.I(D.bdO,A.q,1)
w=C.ag1(w)
w=w==null?h:w.b
A.d.v(o,B.a([A.S,new B.bH(A.a3,h,h,B.p(h,B.A(B.a([D.bJK,A.bp,B.d("Ending: "+(w==null?"":w),h,h,h,h,h,h,D.f1q,h,h,h),B.aL(!1,h,!0,D.e3B,h,!0,h,h,h,h,h,h,h,h,h,h,h,new C.eV8(i),h,h,h,h,h,h,h)],t),A.m,h,A.e,A.Q,0,h,h),A.f,h,h,new B.o(D.b7f,h,u,v,h,h,A.n),h,h,h,h,D.box,h,h,h),h)],t))}o.push(A.bx)
o.push(D.f8V)
o.push(A.P)
w=B.a([],t)
for(m=0;m<6;++m){l=D.cX8[m]
v=i.ch===l?A.b5:A.c.j(0.06)
u=i.ch===l
k=new B.aA(u?A.az:A.bF,1,A.q,-1)
u=u?A.u:A.O
w.push(new B.bD(1,A.bi,new B.C(A.je,B.aE(h,B.dg(A.A,new B.x(""+l,h,new B.G(!0,A.c,h,h,h,h,h,u,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h),h,h,h,h,h,h,h,h,h),h,h,A.bc,new B.o(v,h,new B.bP(k,k,k,k),h,h,h,A.a6),A.eE,h,42,h,h,h,h,h),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.eV9(i,l),h,h,h,h,h,h,!1,A.a8),h),h))}o.push(B.A(w,A.m,h,A.e,A.j,0,h,h))
o.push(A.bx)
o.push(D.fqM)
o.push(A.P)
o.push(B.co(new C.eVa(i)))
o.push(A.bx)
o.push(D.ffX)
o.push(A.P)
w=B.a([i.b4H("auto","Let AI choose",A.dW,A.Pu)],t)
for(v=x.O,m=0;m<11;++m){j=D.vJ[m]
u=j.d
w.push(i.b4H(j.a,j.b,j.c,B.a([B.b0(A.d.gK(u).a),B.b0(A.d.gK(u).b)],v)))}o.push(B.bZ(A.bB,w,A.bs,8,8))
o.push(A.aP)
w=A.c.j(0.04)
v=B.m(16)
u=B.I(i.r?A.bo.j(0.5):A.bF,A.q,1)
o.push(B.p(h,B.iD(h,A.bo,h,h,h,new C.eV2(i),D.bEX,D.fq1,h,D.fb9,i.r),A.f,h,h,new B.o(w,h,u,v,h,h,A.n),h,h,h,h,h,h,h,h))
w=i.cy
if(w!=null)A.d.v(o,B.a([A.aA,B.d(w,h,h,h,h,h,h,D.aO1,h,h,h)],t))
o.push(A.bx)
w=i.ax?h:i.gc5N()
v=B.fm(h,h,A.b5,A.b5.j(0.5),h,h,h,h,h,A.c,h,h,h,h,new B.b7(B.m(18),A.Y),h,h,h,h,h)
u=i.ax
t=u?D.eKw:A.G7
o.push(new B.a7(h,54,B.lr(t,B.d(u?i.ay:"Create my presentation",h,h,h,h,h,h,A.p1,h,h,h),w,v),h))
return new B.C(new B.Q(0,0,0,f.f.d),B.p(h,B.bm(!0,B.cd(B.v(o,A.aj,h,A.e,A.j,0,A.p),A.r,h,A.y,h,A.ve,h,h,A.ah),!0,!1,A.af,!0,!1),A.f,h,new B.aY(0,680,0,g.a.b*0.92),D.a9Y,h,h,h,h,h,h,h,h),h)},
bLZ(d){var w,v,u,t,s,r,q=null,p=this.cx.t(0,d),o=new C.eUA(this,p,d)
if(d===D.Ck)return new C.aCK(p,o,q)
w=B.m(16)
v=p?E.vD:q
u=p?q:A.c.j(0.05)
t=B.I(p?A.az:A.bF,A.q,1)
s=B.W(p?A.ee:C.hAa(d),A.c,q,q,q,20)
r=C.hAb(d)
return B.aE(q,B.dg(q,B.v(B.a([s,A.at,B.f2(A.A,B.d(r,q,q,q,q,q,q,B.l(q,q,A.c,q,q,q,q,q,q,q,q,12,q,q,p?A.u:A.a4,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),A.f,A.eg)],x.p),A.m,q,A.bb,A.j,0,A.p),q,q,A.bc,new B.o(u,q,t,w,q,v,A.n),A.hX,q,64,q,A.hw,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,o,q,q,q,q,q,q,!1,A.a8)},
b4H(d,e,f,g){var w,v=null,u=this.CW===d,t=B.m(99),s=u?A.c.j(0.12):A.c.j(0.04),r=u?A.ad:A.bF
r=B.I(r,A.q,u?1.6:1)
w=B.p(v,B.W(f,A.c,v,v,v,14),A.f,v,v,new B.o(v,v,v,v,v,new B.a8(A.a3,A.a7,A.x,g,v,v),A.a6),v,26,v,v,v,v,v,26)
return B.aE(v,B.dg(v,B.A(B.a([w,L.Iq,B.d(e,v,v,v,v,v,v,B.l(v,v,A.c,v,v,v,v,v,v,v,v,12.5,v,v,u?A.u:A.a4,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.Q,0,v,v),v,v,A.bc,new B.o(s,v,r,t,v,v,A.n),A.eE,v,v,v,L.ahA,v,v,v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.eUP(this,d),v,v,v,v,v,v,!1,A.a8)}}
C.a_I.prototype={
T(){return new C.aGa(new B.ar(A.as,$.aw()))}}
C.aGa.prototype={
q(){var w=this.d
w.S$=$.aw()
w.P$=0
this.a2()},
adp(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$adp=B.e(function(a2,a3){if(a2===1){s.push(a3)
w=t}for(;;)switch(w){case 0:a0=A.a.i(r.d.a.a)
if(J.ad(a0)<3){r.m(new C.eUl(r))
w=1
break}B.eS()
r.m(new C.eUm(r))
t=4
q=C.i0l(a0)
if(q!=null){k=r.a
j=k.c
k=k.d
i=B.af("\\b(all|every|whole|entire)\\b.{0,30}\\b(slides?|presentation|deck|pages?)\\b|\\b(slides?|presentation|deck)\\b.{0,20}\\b(all|every|whole|entire)\\b",!0,!1,!1,!1)
h=a0.toLowerCase()
p=C.i05(j,k-1,q,i.b.test(h))
if(!p){r.m(new C.eUn(r,q))
w=1
break}k=r.c
if(k!=null)B.a6(k,!1).O(r.a.c)
w=1
break}g=a0.toLowerCase()
k=B.af("\\b(undo|un-do|bring (it |them |the .{0,30}?)?back|brings? back|put (it |them |the .{0,30}?)?back|restore|revert|go back|change (it|that|them) back|back the way|what it was|the way it was|previous version|before (you|the ai) (changed|change))\\b",!0,!1,!1,!1)
if(k.b.test(g)){k=r.a.c
C.fTE()
f=$.Ce.h(0,k.a)
o=f==null||J.cl(f)?null:J.fo(f)
if(o==null){r.m(new C.eUo(r))
w=1
break}n=C.i03(o,r.a.c)
C.i0_(r.a.c.a)
$.fSV=!0
k=r.c
if(k!=null)B.a6(k,!1).O(n)
w=1
break}k=r.a
j=k.c
i=j.CW
if(i==null)i=""
k=k.d
j=C.fWk(j)
h=C.fWl(r.a.c)
e=C.fWm(r.a.c)
w=7
return B.b(C.bAy(k,r.a.c.a,j,h,new C.eUp(r),i,e,a0),$async$adp)
case 7:m=a3
k=r.c
if(k!=null)B.a6(k,!1).O(m)
t=2
w=6
break
case 4:t=3
a1=s.pop()
l=B.a9(a1)
if(r.c!=null)r.m(new C.eUq(r,l))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$adp,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=x.w,h=B.aI(d,A.eD,i).w
i=B.aI(d,A.bT,i).w
w=B.av(B.p(j,j,A.f,j,j,new B.o(A.b2,j,j,B.m(99),j,j,A.n),j,4,j,j,j,j,j,40),j,j,j)
v=x.p
u=B.A(B.a([B.p(j,D.alw,A.f,j,j,D.aYH,j,34,j,j,j,j,j,34),A.av,D.bvO],v),A.m,j,A.e,A.j,0,j,j)
t=B.d("You're on slide "+k.a.d+". Ask for new slides, changes to any slide, a different style or another language.",j,j,j,j,j,j,X.aOu,j,j,j)
s=A.c.j(0.05)
s=B.aM(j,A.T,!0,j,!0,A.r,j,B.aN(),k.d,j,j,j,j,j,2,B.br(j,j,j,j,j,j,j,j,!0,new B.b4(4,B.m(16),new B.aA(A.c.j(0.1),1,A.q,-1)),j,j,j,j,j,s,!0,j,j,j,j,new B.b4(4,B.m(16),As.a9t),j,j,j,j,j,j,j,j,X.Iw,"e.g. Add a slide after this one about how to sign up, and make the title slide more exciting.",j,j,j,j,j,j,j,j,j,!0,!0,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j),A.y,!0,j,!0,j,!1,j,A.ai,j,j,j,j,j,j,j,j,j,5,2,j,!1,"\u2022",j,j,j,j,j,!1,j,j,!1,j,!0,j,A.a9,j,j,j,j,j,j,j,j,j,j,j,D.aON,!0,A.a5,j,A.am,j,j,j,j)
r=B.a([],v)
for(q=0;q<6;++q){p=D.cTF[q]
o=A.c.j(0.06)
n=k.e?j:new C.eUr(k,p)
r.push(B.mC(j,o,new B.x(p,j,Ay.SM,j,j,j,j,j,j,j,j,j),j,n,j,j,P.uI,j))}w=B.a([w,A.aA,u,A.an,t,A.aA,s,A.S,B.bZ(A.bB,r,A.bs,8,8)],v)
u=k.r
if(u!=null)A.d.v(w,B.a([A.ac,B.d(u,j,j,j,j,j,j,D.aO1,j,j,j)],v))
w.push(A.aP)
u=k.e
t=u?j:k.gc5O()
s=B.m(18)
r=B.m(18)
u=u?B.a([A.bo.j(0.5),A.ff.j(0.5)],x.O):D.csa
o=B.a([new B.ac(0,A.G,A.bo.j(0.35),A.cw,16)],x.V)
n=A.c.j(0.22)
m=k.e
l=m?D.e3x:D.bJj
n=B.p(j,l,A.f,j,j,new B.o(n,j,j,j,j,j,A.a6),j,30,j,j,j,j,j,30)
w.push(B.aG(!1,A.a1,!0,j,B.aL(!1,s,!0,B.ez(B.A(B.a([n,A.av,B.d(m?k.f:"Make the change",j,j,j,j,j,j,A.i3,j,j,j)],v),A.m,j,A.bb,A.j,0,j,j),j,new B.o(j,j,j,r,o,new B.a8(A.a3,A.a7,A.x,u,j,j),A.n),54,j,j),j,!0,j,j,j,j,j,j,j,j,j,j,j,t,j,j,j,j,j,j,j),A.f,A.K,0,j,j,j,j,j,A.ag))
return new B.C(new B.Q(0,0,0,h.f.d),B.p(j,B.bm(!0,B.cd(B.v(w,A.aj,j,A.e,A.j,0,A.p),A.r,j,A.y,j,A.ve,j,j,A.ah),!0,!1,A.af,!0,!1),A.f,j,new B.aY(0,680,0,i.a.b*0.85),D.a9Y,j,j,j,j,j,j,j,j),j)}}
C.b_O.prototype={}
C.aCK.prototype={
T(){return new C.biF(null,null)}}
C.biF.prototype={
gawe(){var w,v=this,u=v.d
if(u===$){w=B.bj(null,A.pA,null,1,null,v)
w.cH(0)
v.d!==$&&B.bM()
v.d=w
u=w}return u},
q(){this.gawe().q()
this.btI()},
B(d){var w=null,v=this.a.d
return B.aE(w,B.c6(this.gawe(),new C.eat(this),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,!1,A.a8)}}
C.bgc.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m
for(w=this.b*2,v=e.a,u=e.b,t=d.a,s=0;s<7;++s){r=0.5+0.5*Math.sin(w+s*1.7)
q=D.cZd[s]
p=q.a*v
q=q.b*u
$.X()
o=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
o.r=D.x4.j(0.25+r*0.6).gp(0)
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
C.aqC.prototype={
a4(){return"NgmyTextCommand."+this.b}}
C.Z6.prototype={
T(){return new C.aAb()}}
C.aAb.prototype={
gahr(){var w,v="colorful",u=this.d
if(u===$){w=this.a.c.CW
w=C.age(w==null?"":w,v)
u=w==null?null:w.b
u=this.d=u==null?v:u}return u},
gzT(){var w=this.e
return w===$?this.e=C.fWk(this.a.c).t(0,D.Ck):w},
a7x(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$a7x=B.e(function(a0,a1){if(a0===1){t.push(a1)
w=u}for(;;)switch(w){case 0:s.m(new C.dgt(s))
u=3
r=A.d.iC(D.vJ,new C.dgu(s))
q=B.da(C.fWk(s.a.c),x.Q)
l=q
J.hC(l,D.Ck)
p=l
if(s.gzT())J.ch(p,D.Ck)
q=s.a.c.CW
if(q==null)q=""
k=r.a
j=s.gzT()?" with Luxury FX":""
i=s.a
h=i.d
i=C.fWl(i.c)
g=C.fWm(s.a.c)
w=6
return B.b(C.bAy(h,s.a.c.a,p,i,null,q,g,'Change the look: use the style "'+k+'"'+j+". Keep every word, slide, bullet, picture and the logo exactly as they are."),$async$a7x)
case 6:o=a1
j=o.CW
q=j==null?"":j
q=C.age(q,s.gahr())
f=q==null?null:q.b
n=f==null?s.gahr():f
if(!J.z(n,r.a)&&!s.gzT())throw B.V("The AI did not change the look. Try again.")
q=s.c
if(q!=null)B.a6(q,!1).O(o)
u=1
w=5
break
case 3:u=2
d=t.pop()
m=B.a9(d)
if(s.c!=null)s.m(new C.dgv(s,m))
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$a7x,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=B.P(d).ax.a===A.I,l=m?A.c:A.M,k=m?A.aR:A.ak,j=m?A.M:A.c,i=B.m(28),h=B.I(m?A.bF:A.aL,A.q,1),g=x.p,f=B.D(B.v(B.a([B.d("Look and feel",n,n,n,n,n,n,B.l(n,n,l,n,n,n,n,n,n,n,n,20,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),A.bA,B.d("Your words, pictures and logo stay the same.",n,n,n,n,n,n,B.l(n,n,k,n,n,n,n,n,n,n,n,12.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],g),A.F,n,A.e,A.j,0,A.p),1),e=o.f?n:new C.dgy(d)
e=B.A(B.a([f,B.aH(n,n,n,n,B.W(A.cA,k,n,n,n,n),n,n,n,e,n,n,n,n,n,n)],g),A.m,n,A.e,A.j,0,n,n)
f=B.a([],g)
for(w=0;w<11;++w){v=D.vJ[w]
u=o.gahr()
t=o.f?n:new C.dgz(o,v)
f.push(new C.br0(v,u===v.a,t,n))}f=B.lV(1.25,f,3,10,10,n,A.dQ,!0)
u=B.m(18)
t=o.gzT()?D.bUK:n
if(o.gzT())s=n
else s=m?A.bm:A.bM
r=B.W(A.dW,o.gzT()?A.c:k,n,n,n,n)
q=B.d("Luxury FX",n,n,n,n,n,n,B.l(n,n,o.gzT()?A.c:l,n,n,n,n,n,n,n,n,n,n,n,A.H,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
q=B.D(B.v(B.a([q,B.d("Moving light and ornaments, a new royal look each time",n,n,n,n,n,n,B.l(n,n,o.gzT()?A.ad:k,n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],g),A.F,n,A.e,A.j,0,A.p),1)
p=o.gzT()
f=B.a([f,A.aA,B.p(n,B.A(B.a([r,A.av,q,B.auz(n,A.c,n,A.bK,!1,A.y,n,n,n,n,n,n,o.f?n:new C.dgA(o),n,n,n,n,n,n,n,n,p)],g),A.m,n,A.e,A.j,0,n,n),A.f,n,n,new B.o(s,n,n,u,n,t,A.n),n,n,n,n,H.agl,n,n,n)],g)
u=o.r
if(u!=null)A.d.v(f,B.a([A.S,B.d(u,n,n,n,n,n,n,D.f1J,n,n,n)],g))
f=B.cd(B.v(f,A.F,n,A.e,A.j,0,A.p),A.r,n,A.y,n,A.F5,n,n,A.ah)
u=o.f?n:o.gbyL()
t=B.bk(A.K,n,n,n,n,n,A.af,n,new B.b7(B.m(16),A.Y),n,n,n)
s=B.m(16)
return B.bm(!0,B.p(n,B.v(B.a([new B.C(D.brw,e,n),new B.dm(1,A.ci,f,n),new B.C(A.F4,new B.a7(1/0,50,B.bJ(B.ez(B.av(o.f?A.rw:D.fih,n,n,n),n,new B.o(n,n,n,s,n,D.bTk,A.n),n,n,n),u,t),n),n)],g),A.m,n,A.e,A.Q,0,A.p),A.f,n,n,new B.o(j,n,h,i,n,n,A.n),n,n,n,A.tu,n,n,n,n),!0,!1,A.af,!0,!0)}}
C.br0.prototype={
B(d){var w=null,v=this.c,u=A.d.gK(v.d),t=B.m(16),s=u.a,r=B.a([B.b0(s),B.b0(u.b)],x.O),q=this.d,p=B.I(q?A.c:A.K,A.q,2.5)
s=q?B.a([new B.ac(0,A.G,B.b0(s).j(0.5),A.J,12)],x.V):w
v=B.a([new B.bH(A.l_,w,w,B.W(v.c,A.ad,w,w,w,18),w),new B.bH(A.lu,w,w,B.d(v.b,w,w,w,w,w,w,D.f1H,w,w,w),w)],x.p)
if(q)v.push(D.aUz)
return B.aE(w,B.dg(w,new B.an(A.W,w,A.aa,A.r,v,w),w,w,A.bc,new B.o(w,w,p,t,s,new B.a8(A.ax,A.aC,A.x,r,w,w),A.n),A.eE,w,w,w,A.ck,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,this.e,w,w,w,w,w,w,!1,A.a8)}}
C.eaq.prototype={
aDL(d,e,f){return e+"@"+A.a.aT(A.o.fQ(f==null?this.a.c:f,16),8,"0").toUpperCase()},
we(d,e){return this.aDL(0,e,null)}}
C.aKJ.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbv())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bw()}}
C.b_K.prototype={
B(d){var w,v,u=null,t=C.fVa(this.c)
if(t==null)w=D.bjP
else{w=B.aI(d,u,x.w).w.cFs(D.bo3,D.eJK)
v=this.d
w=B.uh(B.e1(B.an_(!1,t,!1,v,!1,390),!v,u),w)}return B.f2(A.A,new B.a7(416,870,new C.bki(w,u),u),A.f,A.dt)}}
C.bki.prototype={
B(d){var w,v,u,t=null,s=B.a([],x.p)
for(w=0;w<3;++w){v=D.d9p[w]
u=new B.aW(3,3)
s.push(new B.cK(v.a,v.b,t,t,t,t,B.p(t,t,A.f,t,t,new B.o(t,t,t,new B.bq(u,u,u,u),t,D.anp,A.n),t,v.c,t,t,t,t,t,5),t))}for(w=0;w<2;++w){v=D.daA[w]
u=new B.aW(3,3)
s.push(new B.cK(t,v.a,-3,t,t,t,B.p(t,t,A.f,t,t,new B.o(t,t,t,new B.bq(u,u,u,u),t,D.anp,A.n),t,v.b,t,t,t,t,t,5),t))}s.push(B.bY(0,B.c_(t,new B.o(t,t,t,B.m(64),D.cJT,D.bRL,A.n),A.bd),0,0,0))
s.push(B.bY(3,B.c_(t,new B.o(A.w,t,t,B.m(61),t,t,A.n),A.bd),3,3,3))
s.push(B.bY(13,B.bw(B.m(51),B.ek(this.c,A.w,!0),A.aq),13,13,13))
u=B.m(20)
s.push(B.ao(t,B.av(B.p(D.aUL,B.p(t,t,A.f,t,t,D.aZ_,t,11,t,t,t,t,t,11),A.f,t,t,new B.o(A.w,t,t,u,t,t,A.n),t,36,t,t,t,t,t,122),t,t,t),t,t,0,0,25,t))
s.push(B.bY(13,B.e1(B.bw(B.m(51),D.bl8,A.aq),!0,t),13,13,13))
s.push(B.ao(22,B.e1(B.av(B.p(t,t,A.f,t,t,new B.o(A.ad,t,t,B.m(3),t,t,A.n),t,5,t,t,t,t,t,134),t,t,t),!0,t),t,t,0,0,t,t))
return new B.an(A.W,t,A.aa,A.f,s,t)}}
C.l8.prototype={
pi(){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=4280640491,j=4280172719,i=4294967295,h="Thank You",g=C.cC(),f=C.cC(),e=m.r
f=C.eo(A.L,!1,e.l(),A.aD,"",k,42,A.bl,A.u,"",0.22,f,l,"","",0,!1,"",0,D.be,j,2,"Your Presentation Title",0,0,"",D.mv,D.cQ,0.84,0.08,0.26)
w=C.cC()
v=m.w
w=C.eo(A.L,!1,v.l(),A.aD,"",k,20,A.bl,A.a4,"",0.12,w,l,"","",0,!1,"",0,D.be,j,2,"Class \xb7 Subject \xb7 Date",0,0,"",D.dd,D.cQ,0.76,0.12,0.56)
u=C.cC()
t=m.d
s=x.u
t=C.rh(i,l,0,0,B.a([f,w,C.eo(A.bg,!1,4279310375,A.aD,"",t.j(0.8).l(),24,A.bl,A.a4,"",0.006,u,l,"","",0,!1,"",0,D.fp,t.l(),3,"",0,0,"",D.cg,D.f_,0.3,0.35,0.72)],s),C.cC(),D.mu,"","","Welcome",D.dd)
u=C.cC()
u=C.eo(A.bg,!1,e.l(),A.aD,"",k,34,A.bl,A.u,"",0.14,u,l,"","",0,!1,"",0,D.be,j,2,"Agenda",0,0,"",D.cg,D.cQ,0.84,0.08,0.08)
w=C.cC()
w=C.rh(i,l,0,0,B.a([u,C.eo(A.bg,!0,v.l(),A.aD,"",k,22,A.bl,A.a4,"",0.6,w,l,"","",0,!1,"",0,D.be,j,2,"1. Introduction\n2. Core concepts\n3. Case study\n4. Discussion\n5. Summary & Q&A",0,0,"",D.u8,D.cQ,0.8,0.1,0.26)],s),C.cC(),D.mu,"","","Agenda",D.dd)
u=C.cC()
u=C.eo(A.bg,!1,e.l(),A.aD,"",k,32,A.bl,A.u,"",0.14,u,l,"","",0,!1,"",0,D.be,j,2,"Main Idea",0,0,"",D.cg,D.cQ,0.84,0.08,0.08)
f=C.cC()
f=C.rh(i,l,0,0,B.a([u,C.eo(A.bg,!0,v.l(),A.aD,"",k,21,A.bl,A.a4,"",0.62,f,l,"","",0,!1,"",0,D.be,j,2,"\u2022 Supporting detail\n\u2022 Evidence or example\n\u2022 Why it matters",0,0,"",D.cg,D.cQ,0.8,0.1,0.26)],s),C.cC(),D.mu,"","","Key Point 1",D.dd)
u=C.cC()
u=C.eo(A.bg,!1,e.l(),A.aD,"",k,30,A.bl,A.u,"",0.12,u,l,"","",0,!1,"",0,D.be,j,2,"Compare & Contrast",0,0,"",D.cg,D.cQ,0.84,0.08,0.08)
r=C.cC()
r=C.eo(A.bg,!0,v.l(),A.aD,"",k,18,A.bl,A.a4,"",0.62,r,l,"","",0,!1,"",0,D.be,j,2,"Option A\n\n\u2022 Strength\n\u2022 Example",0,0,"",D.cg,D.cQ,0.4,0.08,0.24)
q=C.cC()
q=C.rh(i,l,0,0,B.a([u,r,C.eo(A.bg,!0,v.l(),A.aD,"",k,18,A.bl,A.a4,"",0.62,q,l,"","",0,!1,"",0,D.be,j,2,"Option B\n\n\u2022 Strength\n\u2022 Example",0,0,"",D.cg,D.cQ,0.4,0.52,0.24)],s),C.cC(),D.mu,"","","Key Point 2",D.dd)
r=C.cC()
r=C.eo(A.L,!1,e.l(),A.aD,"",k,48,A.bl,A.u,"",0.2,r,l,"","",0,!1,"",0,D.be,j,2,h,0,0,"",D.dd,D.cQ,0.8,0.1,0.32)
e=C.cC()
p=C.Bd(l,l,l,l,D.Cg,5,!1,l,l,l,l,l,g,l,!1,l,m.b,l,l,B.a([t,w,f,q,C.rh(i,l,0,0,B.a([r,C.eo(A.L,!1,v.l(),A.aD,"",k,22,A.bl,A.a4,"",0.1,e,l,"","",0,!1,"",0,D.be,j,2,"Questions?",0,0,"",D.cg,D.cQ,0.7,0.15,0.58)],s),C.cC(),D.mu,"","",h,D.dd)],x.g),"class_"+m.a,l,!1,l)
for(g=p.r,f=g.length,e=m.e,w=m.f,o=0;o<g.length;g.length===f||(0,B.L)(g),++o){n=g[o]
n.e=e.l()
n.f=w.l()}return p}}
C.Ee.prototype={
bx(d){return this.e.$1(d)}}
C.es.prototype={}
C.iV.prototype={}
C.E5.prototype={
gaJw(){var w=this.c
if(!(A.a.i(w).length!==0)){w=C.ag1(this.a)
w=w==null?null:w.c
if(w==null)w=""}return w},
a2N(d,e,f,g){var w=this,v=e==null?w.a:e,u=g==null?w.b:g,t=f==null?w.c:f
return new C.E5(v,u,t,d==null?w.d:d)},
Fc(d){return this.a2N(null,d,null,null)},
aCu(d){return this.a2N(null,null,null,d)},
cFq(d,e){return this.a2N(d,e,null,null)},
b9Q(d){return this.a2N(d,null,null,null)},
b9X(d){return this.a2N(null,null,d,null)}}
C.MW.prototype={
T(){return new C.bi1(new B.eN(0,$.aw()),null,null)}}
C.bi1.prototype={
a_(){var w,v=this
v.a1()
w=v.qf(new C.dRU(v))
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
this.bta()},
B(d){var w=C.ag1(this.a.c.a)
if(w==null)w=A.d.gK(D.Gs)
return B.co(new C.dRT(this,w,C.ha9(this.a.c.d)))}}
C.bpB.prototype={
B(d){return B.nI(A.Ux,this.e,new C.eTz(this,A.k.F(this.d*0.35,1.6)-0.3))}}
C.bd5.prototype={
a5(d,e){var w=this,v=w.c.a
switch(w.b){case"fireworks":w.aRf(d,e,v)
break
case"confetti":w.bFc(d,e,v)
break
case"crown":w.bGP(d,e,v)
break
case"aurora":w.bzQ(d,e,v)
break
case"champagne":w.bD3(d,e,v)
break
case"diamonds":w.bIY(d,e,v)
break
case"starburst":w.csK(d,e,v)
break
case"balloons":w.bA3(d,e,v)
break
case"galaxy":w.bNI(d,e,v)
break
case"redcarpet":w.cjS(d,e,v)
break
case"coins":w.bEz(d,e,v)
break
case"lanterns":w.bXM(d,e,v)
break
case"hearts":w.bVq(d,e,v)
break
case"petals":w.cf6(d,e,v)
break
case"butterflies":w.bC4(d,e,v)
break
case"neon":w.c0A(d,e,v)
break
case"disco":w.bJ8(d,e,v)
break
case"sunrise":w.cuk(d,e,v)
break
case"pearls":w.cea(d,e,v)
break
case"snow":w.cso(d,e,v)
break
case"laurel":w.bXS(d,e,v)
break
case"ribbons":w.cmn(d,e,v)
break
case"kente":w.bXA(d,e,v)
break
case"trophy":w.cxX(d,e,v)
break
case"shooting":w.cqg(d,e,v)
break
case"bokeh":w.bAm(d,e,v)
break
case"orbits":w.cbQ(d,e,v)
break
case"flowers":w.bN_(d,e,v)
break
case"music":w.c0k(d,e,v)
break
case"mandala":w.bZM(d,e,v)
break
case"sparklers":w.csy(d,e,v)
break
case"city":w.bDT(d,e,v)
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
d.aP(u,v)
d.ai(e,f*0.18,v)},
lC(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o=e.a,n=e.b,m=Math.min(o,n)
for(w=Math.max(4,A.k.V(g*this.d)),v=i+3,u=i+4,t=i+1,s=i+2,r=i+5,q=0;q<w;++q){p=(Math.sin(f*(1.2+C.cT(q,v)*2.5)+C.cT(q,u)*6.28)+1)/2
this.re(d,new B.u(C.cT(q,t)*o,C.cT(q,s)*n),m*(0.006+0.014*C.cT(q,r))*(0.5+p),h,p*p)}},
aRf(c3,c4,c5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0=c4.a,c1=c4.b,c2=Math.min(c0,c1)
this.lC(c3,c4,c5,40,A.c,10)
w=x.O
v=[B.a([A.bK,A.aH],w),B.a([A.io,A.bz],w),B.a([A.et,A.aU],w),B.a([A.c,A.aw],w)]
for(u=c2*0.005,t=c3.a,s=c2*0.012,r=c5*30,q=46*this.d,p=c2*0.08,o=c2*0.04,n=c2*0.006,m=c2*0.008,l=0;l<7;++l){k=c5+l*2.8/7
j=A.k.bu(k/2.8)
i=A.k.F(k,2.8)/2.8
h=l*97+j*13
g=c0*(0.15+0.7*C.cT(h,1))
f=g+c0*(C.cT(h,2)-0.5)*0.15
e=c1*(0.12+0.35*C.cT(h,3))
d=v[Math.abs(A.o.F(h,4))]
if(i<0.22){a0=B.le(new B.u(g,c1),new B.u(f,e),A.cr.av(0,i/0.22))
a0.toString
$.X()
a1=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
a1.sau(new B.a8(A.a3,A.a7,A.x,B.a([d[0].j(0),d[0]],w),null,null).aw(0,B.rj(new B.u(g,c1),a0)))
a1.c=n
a1.d=A.bO
a2=B.le(new B.u(g,c1),a0,0.75)
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
bFc(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=a2.a,i=a2.b,h=Math.min(j,i),g=A.k.F(a3*0.25,1.6)-0.3,f=0+j,e=0+i,d=$.X(),a0=B.M()
a0.sau(new B.a8(A.ax,A.aC,A.x,D.d4r,B.a([A.k.D(g-0.15,0,1),A.k.D(g,0,1),A.k.D(g+0.15,0,1)],x.x),null).aw(0,new B.aa(0,0,f,e)))
a1.aY(new B.aa(0,0,f,e),a0)
a0=Math.max(4,A.k.V(150*this.d))
for(f=a1.a,w=i+h*0.1,i=h*0.05,e=a3*4,v=x.v,u=0;u<a0;++u){t=A.k.F(a3*(h*(0.08+0.12*C.cT(u,1)))+C.cT(u,2)*w,w)
s=C.cT(u,3)
r=Math.sin(a3*(0.8+C.cT(u,4))+u)
q=h*(0.012+0.012*C.cT(u,5))
p=Math.cos(a3*(2+3*C.cT(u,6))+u)
o=D.OY[A.o.D(A.k.bu(C.cT(u,7)*5),0,4)]
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
k.delete()}else{t=B.cv(A.J,q*1.8*A.k.D(t,0.15,1),q)
k=n.H()
f.drawRect(B.c4(t),k)
k.delete()}f.restore()}this.lC(a1,a2,a3,25,A.bK,30)},
bGP(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=a9.a,a6=a9.b,a7=Math.min(a5,a6)
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
o.sau(new B.bT(A.A,0.5,A.x,a4,0,B.a([A.bK.j(0.22),D.b8Y],v),a4,a4).aw(0,B.bW(w,u)))
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
n.sau(new B.a8(A.b0,A.b6,A.x,D.d3h,a4,a4).aw(0,new B.aa(a5,a6,o,v)))
a8.aP(i,n)
for(v=[D.ehY,D.ec3,D.er0],o=a6+j*0.78,n=a7*0.016,g=a7*0.005,f=o-g,e=0;e<3;++e){d=v[e]
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
l.delete()}}for(v=B.wO(i),u=B.a([],x.X),o=new B.vk(v,!1,u),n=v.a,g=a7*0.008;o.C();){f=o.c
if(f===0||o.f)B.ba(B.jR(y.M));--f
o.jj()
d=u[f].b
d===$&&B.c()
d=d.a.length()
d=new B.aQ(n,v.b,a4,new B.cL([new B.GX(o,f),0,d*h,!0]),B.a([],r))
f=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
f.b=A.ae
f.c=g
f.e=A.fz
f.r=A.bK.gp(0)
l=f.H()
f=d.gbJ().a.snapshot()
t.drawPath((d.e=new B.cF(f)).a,l)
l.delete()}if(s){a3=A.k.F(b0*0.5,1)
this.re(a8,new B.u(a5+k*a3,a6+j*0.5),a7*0.04,A.c,Math.sin(a3*3.141592653589793))}this.lC(a8,a9,b0,45,A.bK,40)},
bzQ(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=a9.a,a6=a9.b,a7=Math.min(a5,a6)
this.lC(a8,a9,b0,60,A.c,50)
w=[D.eBb,D.eAU,D.eAP,D.eC6]
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
n.r=A.x3.j(0.4+0.5*C.cT(a4,5)).gp(0)
n.a=A.nu
a2=n.H()
u.drawCircle(r*a5+q*a7*0.02,a6-s,a7*(0.003+0.004*p),a2)
a2.delete()}},
bD3(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=a2.a,j=a2.b,i=Math.min(k,j),h=Math.sin(a3*1.5),g=k/2,f=j*0.5,e=i*0.55,d=$.X(),a0=B.M()
a0.sau(new B.bT(A.A,0.5,A.x,l,0,B.a([A.hE.j(0.25+0.1*h),D.Wi],x.O),l,l).aw(0,B.bW(new B.u(g,f),e)))
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
d.r=A.Ae.j(0.75).gp(0)
p=d.H()
g.drawCircle(r,n,m,p)
p.delete()
d=m*0.35
t=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
t.r=A.c.j(0.8).gp(0)
p=t.H()
g.drawCircle(r-d,n-d,a0,p)
p.delete()}},
bIY(a9,b0,b1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=null,a6=b0.a,a7=b0.b,a8=Math.min(a6,a7)
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
g.sau(new B.a8(A.ax,A.aC,A.x,D.d_c,a5,a5).aw(0,B.cv(A.J,k*1.2,o)))
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
csK(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=e.a,g=e.b,f=Math.min(h,g)
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
m.delete()}j=A.k.bu(a0/2.4)
k=A.k.F(a0,2.4)/2.4
for(w=Math.max(4,A.k.V(70*this.d)),v=j+1,u=(1-k)*1.2,t=0;t<w;++t){s=C.cT(t,j)*3.141592653589793*2
i=f*(0.1+0.55*D.bkv.av(0,k)*(0.5+0.5*C.cT(t,v)))
this.re(d,new B.u(h+Math.cos(s)*i,g+Math.sin(s)*i),f*(0.01+0.012*C.cT(t,3)),D.OY[A.o.D(A.k.bu(C.cT(t,4)*5),0,4)],u)}},
bA3(a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=a8.a,a5=a8.b,a6=Math.min(a4,a5)
for(w=this.d,v=Math.max(4,A.k.V(22*w)),u=a7.a,t=x.O,s=x.v,r=a9*2,q=a9*a6,p=a9*0.9,o=0;o<v;++o){n=a6*(0.045+0.035*C.cT(o,1))
m=a5+n*6
l=n*2
k=a5+l-A.k.F(q*(0.05+0.05*C.cT(o,2))+C.cT(o,3)*m,m)
j=C.cT(o,4)*a4+Math.sin(p+o*1.3)*a6*0.03
i=D.auy[A.o.F(o,6)]
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
a2=B.cv(new B.u(j,k),n*2.3,l)
l=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
d=B.aq(i,A.w,0.35)
d.toString
l.sau(new B.bT(D.aUO,0.9,A.x,a3,0,B.a([A.c,i,d],t),V.aup,a3).aw(0,a2))
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
s=B.cv(A.J,t,v)
$.X()
r=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
r.r=D.auy[A.o.F(o,6)].j(0.85).gp(0)
a1=r.H()
u.drawRect(B.c4(s),a1)
a1.delete()
u.restore()}},
bNI(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=b2.a,a6=b2.b,a7=Math.min(a5,a6),a8=a5/2,a9=a6/2,b0=new B.u(a8,a9)
this.lC(b1,b2,b3,50,A.c,70)
for(w=[D.eBj,D.eB_,D.eB5],v=b3*0.3,u=x.O,t=b1.a,s=0;s<3;++s){r=w[s].a
q=r[0]
p=r[1]
o=r[2]
n=r[3]
r=a8+(p*a5+Math.sin(v)*a7*0.03)
m=a9+o*a6
l=a7*n
$.X()
k=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
k.sau(new B.bT(A.A,0.5,A.x,a4,0,B.a([q.j(0.32+0.08*Math.sin(b3)),q.j(0)],u),a4,a4).aw(0,B.bW(new B.u(r,m),l)))
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
a9.sau(new B.bT(A.A,0.5,A.x,a4,0,B.a([A.Ae.j(0.55),D.adZ],u),a4,a4).aw(0,B.bW(b0,a8)))
b1.ai(b0,a8,a9)
a1=A.k.F(b3,3.5)/3.5
if(a1<0.25){a2=A.k.bu(b3/3.5)
a3=new B.u(a5*(0.1+0.5*C.cT(a2,9)),a6*0.1*C.cT(a2,8))
a5=B.le(a3,a3.ad(0,new B.u(v,a7*0.3)),a1/0.25)
a5.toString
a6=B.le(a3,a5,0.6)
a6.toString
a8=B.M()
a8.sau(new B.a8(A.a3,A.a7,A.x,B.a([A.c.j(0),A.c],u),a4,a4).aw(0,B.rj(a3,a5)))
a8.c=a7*0.005
a8.d=A.bO
b1.bA(a6,a5,a8)}},
cjS(b9,c0,c1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=null,b6=c0.a,b7=c0.b,b8=Math.min(b6,b7)
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
o.sau(new B.bT(A.A,0.5,A.x,b5,0,B.a([A.Ae.j(0.28),D.adZ],w),b5,b5).aw(0,B.bW(new B.u(q,u),t)))
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
a9.sau(new B.a8(A.a3,A.a7,A.x,a7,b5,b5).aw(0,new B.aa(a6,0,a6+i,j)))
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
v.sau(D.bTe.aw(0,new B.aa(0,w,0+b6,w+b7*0.22)))
b9.aP(b2,v)
for(w=Math.max(4,A.k.V(80*this.d)),b3=b7+10,b7=c1*b8,v=c1*5,r=0;r<w;++r){b4=A.k.F(b7*(0.05+0.07*C.cT(r,1))+C.cT(r,2)*b3,b3)
u=C.cT(r,3)
s=Math.sin(c1+r)
q=Math.sin(v+r)
this.re(b9,new B.u(b6*(0.15+0.7*u)+s*b8*0.01,b4),b8*(0.006+0.008*C.cT(r,4)),A.bK,0.3+0.7*((q+1)/2))}},
bEz(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=e.a,h=e.b,g=Math.min(i,h)
for(w=Math.max(4,A.k.V(55*this.d)),v=d.a,u=f*g,t=0;t<w;++t){s=g*(0.02+0.02*C.cT(t,1))
r=h+s*4
q=s*2
p=A.k.F(u*(0.12+0.12*C.cT(t,2))+C.cT(t,3)*r,r)-q
o=C.cT(t,4)*i
n=Math.cos(f*(2+3*C.cT(t,5))+t)
m=Math.abs(n)
l=B.cv(new B.u(o,p),q,q*A.k.D(m,0.12,1))
$.X()
q=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
q.sau(new B.a8(A.ax,A.aC,A.x,n>0?D.ddI:D.cxN,null,null).aw(0,l))
k=q.H()
v.drawOval(B.c4(l),k)
k.delete()
q=-(s*0.22)
j=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
j.b=A.ae
j.c=Math.max(0.6,s*0.08)
j.r=D.bhI.gp(0)
k=j.H()
v.drawOval(B.c4(new B.aa(l.a-q,l.b-q,l.c+q,l.d+q)),k)
k.delete()
if(m>0.97)this.re(d,new B.u(o+s*0.3,p-s*0.4),s*0.9,A.c,0.9)}this.lC(d,e,f,30,A.bK,110)},
bXM(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
this.lC(a3,a4,a5,50,A.c,120)
for(w=Math.max(4,A.k.V(26*this.d)),v=a3.a,u=x.O,t=a5*a2,s=a5*0.6,r=a5*9,q=x.v,p=0;p<w;++p){o=a2*(0.035+0.035*C.cT(p,1))
n=a1+o*4
m=a1+o*2-A.k.F(t*(0.03+0.04*C.cT(p,2))+C.cT(p,3)*n,n)
l=C.cT(p,4)*a0+Math.sin(s+p)*a2*0.03
k=0.8+0.2*Math.sin(r+p*3)
j=o*2.2
i=$.X()
h=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
h.sau(new B.bT(A.A,0.5,A.x,d,0,B.a([W.Wv.j(0.45*k),D.acQ],u),d,d).aw(0,B.bW(new B.u(l,m),j)))
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
i=B.aq(D.b98,A.c,0.2*k)
i.toString
j.sau(new B.a8(A.b0,A.b6,A.x,B.a([D.bdr,i],u),d,d).aw(0,B.cv(new B.u(l,m),o*1.4,o)))
g=j.H()
j=f.gbJ().a.snapshot()
v.drawPath((f.e=new B.cF(j)).a,g)
g.delete()
j=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
j.r=A.c.j(k).gp(0)
g=j.H()
v.drawCircle(l,m+o*0.55,o*0.12,g)
g.delete()}},
bVq(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
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
f=D.cRE[A.o.F(p,5)]
m=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
l=B.aq(f,A.w,0.25)
l.toString
m.sau(new B.bT(A.rJ,0.5,A.x,d,0,B.a([A.c,f,l],u),H.a1h,d).aw(0,B.bW(A.J,o*1.4)))
e=m.H()
m=i.gbJ().a.snapshot()
v.drawPath((i.e=new B.cF(m)).a,e)
e.delete()
v.restore()}this.lC(a3,a4,a5,30,A.io,130)},
cf6(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=e.a,g=e.b,f=Math.min(h,g)
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
m=(q&1)===0?D.cs9:D.d0q
n.sau(new B.a8(A.a3,A.a7,A.x,m,i,i).aw(0,B.bW(A.J,p)))
j=n.H()
n=k.gbJ().a.snapshot()
v.drawPath((k.e=new B.cF(n)).a,j)
j.delete()
v.restore()}this.lC(d,e,a0,25,A.bK,140)},
bC4(b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=null,a7=b1.a,a8=b1.b,a9=Math.min(a7,a8)
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
a2.sau(new B.a8(A.a3,A.a7,A.x,i?D.d0a:D.d2M,a6,a6).aw(0,new B.aa(0,m,k,j)))
a5=a2.H()
a2=a4.gbJ().a.snapshot()
v.drawPath((a4.e=new B.cF(a2)).a,a5)
a5.delete()
a2=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
a2.b=A.ae
a2.c=Math.max(0.6,o)
a2.r=D.Am.gp(0)
a5=a2.H()
a2=a4.e
v.drawPath((a2==null?a4.e=new B.cF(a4.gbJ().a.snapshot()):a2).a,a5)
a5.delete()
v.restore()}$.X()
p=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
p.r=D.bh0.gp(0)
p.c=q*0.1
p.d=A.bO
a5=p.H()
v.drawLine.apply(v,[0,m*0.3,0,q*0.4,a5])
a5.delete()
v.restore()}},
c0A(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=a0.a,g=a0.b,f=Math.min(h,g),e=new B.u(h/2,g/2)
for(w=a1*0.45,v=f*0.012,u=d.a,t=0;t<4;++t){s=A.k.F(w+t/4,1)
r=f*(0.2+0.7*s)
$.X()
q=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
q.b=A.ae
q.c=v
q.r=D.avA[t].j((1-s)*0.9).gp(0)
q.z=new B.ht(A.G,v)
p=r*0.3
p=B.bA(B.cv(e,r,r*1.6),new B.aW(p,p))
o=q.H()
u.drawRRect(B.eq(p),o)
o.delete()}n=h/28
for(h=n*0.15,w=n*0.7,v=n*0.3,p=f*0.01,m=0;m<28;++m){l=g*(0.05+0.18*(0.5+0.5*Math.sin(a1*(3+C.cT(m,1)*4)+m)))
k=D.avA[A.o.F(m,4)]
j=m*n+h
i=g-l
i=B.bA(new B.aa(j,i,j+w,i+l),new B.aW(v,v))
$.X()
j=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
j.r=k.j(0.85).gp(0)
j.z=new B.ht(A.a9h,p)
o=j.H()
u.drawRRect(B.eq(i),o)
o.delete()}},
bJ8(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
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
t.r=A.dA.gp(0)
a3.ai(v,u,t)
J.bz(q.save())
a1=new B.aQ(a1.r,A.ap,null,null,B.a([],x.v))
a1.E(new B.ku(B.bW(v,u)))
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
cuk(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=a3.a,f=a3.b,e=Math.min(g,f),d=g/2,a0=f*(1.05-0.25*A.cr.av(0,A.k.D(a4/3,0,1))),a1=new B.u(d,a0)
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
a0.sau(new B.bT(A.A,0.5,A.x,h,0,B.a([D.b5j.j(0.6),D.acQ],x.O),h,h).aw(0,B.bW(a1,d)))
a2.ai(a1,d,a0)
a0=e*0.2
d=B.M()
d.sau(D.e9Q.aw(0,B.bW(a1,a0)))
a2.ai(a1,a0,d)
for(d=a4*e*0.03,a0=g*1.4,v=g*0.2,u=e*0.35,r=e*0.07,q=e*0.06,n=e*0.03,m=e*0.18,t=0;t<5;++t){l=A.k.F(d*(1+t*0.3)+C.cT(t,1)*g*1.4,a0)-v
k=f*(0.15+0.12*t)
j=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
j.r=A.c.j(0.18).gp(0)
i=B.cv(new B.u(l,k),r,u)
o=j.H()
w.drawOval(B.c4(i),o)
o.delete()
i=B.cv(new B.u(l+q,k-n),r,m)
o=j.H()
w.drawOval(B.c4(i),o)
o.delete()}this.lC(a2,a3,a4,20,A.hU,180)},
cea(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a2.a,d=a2.b,a0=Math.min(e,d)
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
r.r=B.aq(A.cy,A.j3,s/3).j(0.55).gp(0)
k=r.H()
r=p.e
w.drawPath((r==null?p.e=new B.cF(p.gbJ().a.snapshot()):r).a,k)
k.delete()}for(v=Math.max(4,A.k.V(45*this.d)),j=d*0.95,d*=0.9,u=a3*a0,i=0;i<v;++i){h=a0*(0.012+0.02*C.cT(i,1))
g=d-A.k.F(u*(0.04+0.05*C.cT(i,2))+C.cT(i,3)*j,j)
n=C.cT(i,4)*e+Math.sin(a3+i)*a0*0.02
$.X()
t=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
t.sau(new B.bT(An.qm,0.5,A.x,f,0,D.d60,f,f).aw(0,B.bW(new B.u(n,g),h)))
k=t.H()
w.drawCircle(n,g,h,k)
k.delete()}this.lC(a1,a2,a3,25,A.c,190)},
cso(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=a0.a,f=a0.b,e=Math.min(g,f)
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
bXS(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
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
g=B.cv(new B.u(p,0),q,r)
$.X()
f=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
f.sau(D.bT1.aw(0,new B.aa(0,o,n,m)))
e=f.H()
s.drawOval(B.c4(g),e)
e.delete()
s.restore()}}$.X()
a0=B.M()
a0.b=A.ae
a0.c=a2*0.003
a0.r=D.b9l.gp(0)
a3.ai(w,v*1.08,a0)
d=a5*0.8
this.re(a3,w.ad(0,new B.u(Math.cos(d)*v*1.08,Math.sin(d)*v*1.08)),a2*0.03,A.c,0.9)
this.lC(a3,a4,a5,40,A.bK,210)},
cmn(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=a9.a,a4=a9.b,a5=Math.min(a3,a4),a6=x.O,a7=[B.a([A.hE,A.hU],a6),B.a([A.oo,A.io],a6),B.a([A.aE,A.ez],a6)]
for(w=b0*0.3,v=0+a3,u=0+a4,t=a8.a,s=x.dB,r=s.k("bR<ak.E>"),q=s.k("ak.E"),p=b0*1.5,o=x.v,n=x.dN,m=0;m<3;++m){l=$.X()
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
j.e=null}i.push(new B.u(e,d+a0))}for(l=new B.dw(i,s),l=new B.bR(l,l.gM(0),r);l.C();){h=l.d
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
l.sau(new B.a8(A.a3,A.a7,A.x,B.a([h,k[1],h],a6),H.ave,new B.mh(w)).aw(0,new B.aa(0,0,v,u)))
l.r=A.c.j(0.85).gp(0)
a2=l.H()
l=j.e
t.drawPath((l==null?j.e=new B.cF(j.gbJ().a.snapshot()):l).a,a2)
a2.delete()}this.lC(a8,a9,b0,40,A.c,220)},
bXA(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=b2.a,a8=b2.b,a9=Math.min(a7,a8),b0=a9*0.09
for(w=[!0,!1],v=b0*2,u=a7+v,t=b0*0.5,s=b1.a,r=b0*0.1,q=b0*0.35,p=b0*0.3,o=-b0*2,n=b3*a9,m=n*0.08,l=a8-b0,k=0;k<2;++k){j=w[k]
i=j?0:l
h=A.k.F(m,v)
g=o+(j?h:-h)
f=i+b0
e=i+q
d=e+p
for(;g<u;g=a1){a0=A.o.F(A.k.bu(g/t),5)
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
cxX(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=a5.a,a2=a5.b,a3=Math.min(a1,a2)
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
f=B.cv(new B.u(a1+g*n*0.5,p),i,k)
e=g<0?1.5707963267948966:-1.5707963267948966
d=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
d.b=A.ae
d.c=q
d.r=A.aw.gp(0)
o=d.H()
u.drawArc.apply(u,[B.c4(f),e*57.29577951308232,180,!1,o])
o.delete()}a1=B.M()
a1.sau(new B.a8(A.a3,A.a7,A.x,D.d8c,A.auF,null).aw(0,new B.aa(v,a2,r,j)))
a4.aP(l,a1)
a0=A.k.F(a6*0.6,1.4)
if(a0<1)this.re(a4,new B.u(v+(r-v)*a0,a2+(j-a2)*0.3),a3*0.035,A.c,Math.sin(a0*3.141592653589793))
this.bFd(a4,a5,a6,60)},
bFd(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m,l=e.a,k=e.b,j=Math.min(l,k)
for(w=Math.max(4,A.k.V(g*this.d)),v=k+20,k=f*j,u=d.a,t=f*3,s=j*0.012,r=j*0.02,q=f*4,p=0;p<w;++p){o=A.k.F(k*(0.1+0.1*C.cT(p,31))+C.cT(p,32)*v,v)
n=C.cT(p,33)
J.bz(u.save())
u.translate(n*l,o-10)
u.rotate((t+p)*180/3.141592653589793,0,0)
o=B.cv(A.J,r*A.k.D(Math.abs(Math.cos(q+p)),0.2,1),s)
$.X()
n=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
n.r=D.OY[A.o.F(p,5)].gp(0)
m=n.H()
u.drawRect(B.c4(o),m)
m.delete()
u.restore()}},
cqg(a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a1.a,d=Math.min(e,a1.b)
this.lC(a0,a1,a2,70,A.c,250)
for(w=Math.max(4,A.k.V(12*this.d)),v=-d*0.1,u=d*1.4,t=-0.6*u,s=x.O,r=d*0.006,q=a0.a,p=d*0.018,o=0;o<w;++o){n=1.6+C.cT(o,1)*1.6
m=A.k.F(a2+C.cT(o,2)*n,n)/n
l=e*(C.cT(o*7+A.k.bu((a2+C.cT(o,2)*n)/n),3)*1.2-0.1)
k=l+t*m
j=v+u*m
i=new B.u(k,j)
h=Math.max(0,m-0.18)
l+=t*h
h=v+u*h
$.X()
g=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
g.sau(new B.a8(A.a3,A.a7,A.x,B.a([A.c.j(0),A.bK],s),null,null).aw(0,B.rj(new B.u(l,h),i)))
g.c=r
g.d=A.bO
f=g.H()
q.drawLine.apply(q,[l,h,k,j,f])
f.delete()
this.re(a0,i,p,A.c,1-m)}},
bAm(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=e.a,i=e.b,h=Math.min(j,i)
for(w=Math.max(4,A.k.V(36*this.d)),v=f*0.2,u=f*0.17,t=f*0.8,s=d.a,r=0;r<w;++r){q=h*(0.03+0.09*C.cT(r,1))
p=A.k.F(C.cT(r,2)*j+Math.sin(v+r)*h*0.12,j)
o=A.k.F(C.cT(r,3)*i+Math.cos(u+r*1.3)*h*0.1,i)
n=0.12+0.18*(0.5+0.5*Math.sin(t+r))
$.X()
m=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
l=A.o.F(r,5)
m.r=D.ax1[l].j(n).gp(0)
m.a=A.nu
m.z=new B.ht(A.G,q*0.12)
k=m.H()
s.drawCircle(p,o,q,k)
k.delete()
m=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
m.b=A.ae
m.c=Math.max(0.6,q*0.05)
m.r=D.ax1[l].j(n*1.4).gp(0)
k=m.H()
s.drawCircle(p,o,q,k)
k.delete()}},
cbQ(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=e.a,i=e.b,h=Math.min(j,i)
j/=2
i/=2
for(w=d.a,v=f*0.05,u=h*0.003,t=h*0.012,s=h*0.03,r=h*0.02,q=0;q<4;++q){J.bz(w.save())
w.translate(j,i)
w.rotate((q*3.141592653589793/4+v)*180/3.141592653589793,0,0)
p=B.cv(A.J,h*(0.28+q*0.05),h*(0.8+q*0.12))
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
bN_(a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=a6.a,a3=a6.b,a4=Math.min(a2,a3)
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
g=D.cYs[A.o.F(o,5)]
J.bz(v.save())
v.translate(l.a,l.b)
v.rotate((t+o)*180/3.141592653589793,0,0)
for(l=-h*0.7,j=h*0.7,i=h*1.3,f=h*1.4,e=0;e<6;++e){v.rotate(59.99999999999999,0,0)
d=B.cv(new B.u(0,l),i,j)
$.X()
a0=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
a0.sau(new B.a8(A.b0,A.b6,A.x,B.a([A.c,g],u),null,null).aw(0,B.cv(new B.u(0,l),f,h)))
a1=a0.H()
v.drawOval(B.c4(d),a1)
a1.delete()}$.X()
l=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
l.r=A.hE.gp(0)
a1=l.H()
v.drawCircle(0,0,h*0.3,a1)
a1.delete()
v.restore()}this.lC(a5,a6,a7,30,A.hU,280)},
c0k(a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=a6.a,a3=a6.b,a4=Math.min(a2,a3)
for(w=[0,1],v=a4*0.008,u=a5.a,t=a7*0.6,s=a3/2,r=0;r<2;++r){q=w[r]
for(p=q===0,o=a2*q,n=0;n<4;++n){m=A.k.F(t+n/4,1)
l=B.bW(new B.u(o,s),a4*(0.1+0.6*m))
k=p?-1.0471975511965976:2.0943951023931953
$.X()
j=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
j.b=A.ae
j.c=v
j.r=D.atL[n].j((1-m)*0.8).gp(0)
i=j.H()
u.drawArc.apply(u,[B.c4(l),k*57.29577951308232,119.99999999999999,!1,i])
i.delete()}}for(w=Math.max(4,A.k.V(26*this.d)),h=a3+30,v=a7*a4,t=a7*1.5,g=0;g<w;++g){f=a3-A.k.F(v*(0.06+0.06*C.cT(g,1))+C.cT(g,2)*h,h)
e=C.cT(g,3)*a2+Math.sin(t+g)*a4*0.04
d=a4*(0.015+0.012*C.cT(g,4))
a0=D.atL[A.o.F(g,4)]
$.X()
a1=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
a1.r=a0.gp(0)
J.bz(u.save())
u.translate(e,f)
u.rotate(-17.188733853924695,0,0)
s=B.cv(A.J,d,d*1.5)
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
bZM(a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=a8.a,a5=a8.b,a6=Math.min(a4,a5)
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
a5.sau(new B.bT(A.A,0.5,A.x,a3,0,B.a([A.hE.j(0.25),D.Wi],x.O),a3,a3).aw(0,B.bW(w,a4)))
a7.ai(w,a4,a5)
this.lC(a7,a8,a9,30,A.bK,300)},
csy(b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=b1.a,a8=b1.b,a9=Math.min(a7,a8)
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
l.sau(new B.bT(A.A,0.5,A.x,null,0,B.a([A.hU,A.hE.j(0.6),D.Wi],o),null,null).aw(0,B.bW(new B.u(j,i),p)))
g=l.H()
t.drawCircle(j,i,p,g)
g.delete()
for(l=Math.max(4,A.k.V(v)),f=0;f<l;++f){e=0.5+0.4*C.cT(f,1)
d=A.k.F(b2+C.cT(f,2)*e,e)/e
a0=A.k.bu((b2+C.cT(f,2)*e)/e)
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
bDT(a9,b0,b1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=b0.a,a8=b0.b
this.aRf(a9,new B.at(a7,a8*0.75),b1*0.9)
w=Math.min(a7,a8)
for(v=w*0.01,u=w*0.008,t=w*0.012,s=w*0.016,r=a9.a,q=w*0.025,p=w*0.035,o=0,n=0;o<a7;){m=w*(0.08+0.1*C.cT(n,1))
l=a8*(0.14+0.24*C.cT(n,2))
k=a8-l
j=new B.aa(o,k,o+m,k+l)
$.X()
i=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
i.sau(D.bTX.aw(0,j))
h=i.H()
r.drawRect(B.c4(j),h)
h.delete()
g=A.k.bu(m/q)
f=A.k.bu(l/p)
for(i=o+u,k+=t,e=n*50,d=0;d<g;++d)for(a0=i+d*w*0.025,a1=a0+t,a2=e+d,a3=d*1.7,a4=0;a4<f;++a4){if(!(Math.sin(b1*(0.3+C.cT(a2,a4))+a3+a4*2.3+n)>0.2))continue
a5=k+a4*w*0.035
$.X()
a6=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
a6.r=A.bK.j(0.85).gp(0)
h=a6.H()
r.drawRect(B.c4(new B.aa(a0,a5,a1,a5+s)),h)
h.delete()}o+=m+v;++n}},
aq(d){return d.b!==this.b||d.d!==this.d}}
C.aYE.prototype={
B(d){var w,v=null,u=new C.c6X(),t=new C.c6Z(this,u,d),s=B.a([u.$4$child$label$onTap$selected(B.p(v,D.amz,A.f,A.c.j(0.05),v,v,v,v,v,v,v,v,v,v),"None",new C.c6Y(this),this.c.a.length===0)],x.p)
for(w=0;w<32;++w)s.push(t.$1(D.Gs[w]))
return B.bZ(A.bB,s,A.bs,12,10)}}
C.YF.prototype={
T(){return new C.ayz()}}
C.ayz.prototype={
gvl(){var w=this.d
return w===$?this.d=this.a.c:w},
gaY6(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new B.ar(new B.bb(w.b,A.b3,A.aN),$.aw())}return v},
gawf(){var w,v,u=this,t=u.f
if(t===$){w=u.a.c.gaJw()
v=$.aw()
u.f!==$&&B.bM()
t=u.f=new B.ar(new B.bb(w,A.b3,A.aN),v)}return t},
q(){var w=this.gaY6(0),v=$.aw()
w.S$=v
w.P$=0
w=this.gawf()
w.S$=v
w.P$=0
this.a2()},
Zk(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Zk=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hW().BJ(90,700,700,A.eG),$async$Zk)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.ff(),$async$Zk)
case 8:p=e
o=q.b.toLowerCase()
n=J.agW(o,".png")?"image/png":"image/jpeg"
r.m(new C.d5G(r,n,p))
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
return B.i($async$Zk,v)},
aY5(d){var w=null,v=A.c.j(0.07)
return B.br(w,new B.b4(4,B.m(12),A.Y),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,A.aOS,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=C.ag1(p.gvl().a)
if(n==null)n=A.d.gK(D.Gs)
w=p.gvl()
v=p.r
u=x.p
v=B.D(new B.an(A.W,o,A.aa,A.r,B.a([B.bY(0,new C.MW(p.gvl(),!1,!0,new B.cx(w.a+v,x.W)),0,0,0),B.ao(o,B.Hg(A.mp,new C.d5L(d),B.nt(o,A.aX,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o),o,o,8,o,8,o),B.ao(o,B.Hg(D.bDS,new C.d5M(p),B.nt(o,A.aX,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),"Play again"),o,o,o,8,8,o)],u),o),1)
w=B.d(n.b,o,o,o,o,o,o,E.aOM,o,o,o)
t=B.D(B.aM(o,A.T,!1,o,!0,A.r,o,B.aN(),p.gaY6(0),o,o,o,o,o,2,p.aY5("Big words"),A.y,!0,o,!0,o,!1,o,A.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.d5N(p),o,o,o,!1,o,o,!1,o,!0,o,A.a9,o,o,o,o,o,o,o,o,o,o,o,A.ho,!0,A.a5,o,A.am,o,o,o,o),1)
s=A.c.j(0.07)
r=B.I(A.hE.j(0.6),A.q,1)
if(p.gvl().d.length===0)q=D.bHa
else{q=C.ha9(p.gvl().d)
if(q==null)q=new Uint8Array(0)
q=B.hS(B.fL(q,A.A,o,o,A.co,A.bQ,!1,o,!1,o,o),A.aq)}r=B.a([t,A.ab,B.aE(o,B.p(o,q,A.f,o,o,new B.o(s,o,r,o,o,o,A.a6),o,48,o,o,o,o,o,48),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gc5P(),o,o,o,o,o,o,!1,A.a8)],u)
if(p.gvl().d.length!==0)r.push(B.aH(o,o,o,o,D.a06,o,o,o,new C.d5O(p),o,o,o,o,"Remove logo",o))
return B.c8(o,A.w,B.bm(!0,B.v(B.a([v,B.p(o,B.v(B.a([w,A.S,B.A(r,A.m,o,A.e,A.j,0,o,o),A.P,B.aM(o,A.T,!1,o,!0,A.r,o,B.aN(),p.gawf(),o,o,o,o,o,2,p.aY5("Line under it"),A.y,!0,o,!0,o,!1,o,A.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.d5P(p),o,o,o,!1,o,o,!1,o,!0,o,A.a9,o,o,o,o,o,o,o,o,o,o,o,A.dl,!0,A.a5,o,A.am,o,o,o,o),A.ac,B.dq(D.bG5,D.frH,new C.d5Q(p,d),B.bk(A.aw,o,o,o,A.w,o,A.cf,o,new B.b7(B.m(14),A.Y),o,o,o))],u),A.aj,o,A.e,A.Q,0,A.p),A.f,o,o,D.aZa,o,o,o,o,A.F1,o,o,o)],u),A.m,o,A.e,A.j,0,A.p),!0,!1,A.af,!0,!0),o,!1,!1,o,o)}}
C.aKc.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbv())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bw()}}
C.Z_.prototype={
T(){return new C.bez(new B.ar(A.as,$.aw()))}}
C.bez.prototype={
q(){var w=this.d
w.S$=$.aw()
w.P$=0
this.a2()},
B(d){var w,v,u,t,s,r,q,p,o=null,n=B.P(d).ax.a===A.I,m=n?A.c:A.M,l=n?A.aR:A.ak,k=B.aI(d,A.bT,x.w).w,j=n?A.M:A.c,i=B.m(28),h=B.I(n?A.bF:A.aL,A.q,1),g=x.p,f=B.A(B.a([B.D(B.d("Choose an icon",o,o,o,o,o,o,B.l(o,o,m,o,o,o,o,o,o,o,o,19,o,o,A.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),1),B.aH(o,o,o,o,B.W(A.cA,l,o,o,o,o),o,o,o,new C.dcs(d),o,o,o,o,o,o)],g),A.m,o,A.e,A.j,0,o,o),e=B.a([],g)
for(w=0;w<5;++w){v=D.cJj[w]
u=B.a([],g)
for(t=J.aV(v.b);t.C();){s=t.gU(t)
r=new B.aW(12,12)
q=new B.aW(12,12)
p=n?A.c.j(0.06):A.bM
u.push(B.aL(!1,new B.bq(r,r,r,r),!0,B.p(A.A,new B.x(s,o,A.uv,o,o,o,o,o,o,o,o,o),A.f,o,o,new B.o(p,o,o,new B.bq(q,q,q,q),o,o,A.n),o,44,o,o,o,o,o,44),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.dct(this,s),o,o,o,o,o,o,o))}A.d.v(e,B.a([new B.C(A.hI,new B.x(v.a.toUpperCase(),o,new B.G(!0,l,o,o,o,o,10.5,A.u,o,1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o,o,o,o,o,o,o),o),new B.BQ(A.bB,6,6,A.bs,u,o)],g))}e.push(A.aA)
e.push(B.d("YOUR OWN",o,o,o,o,o,o,B.l(o,o,l,o,o,o,o,o,o,o,o,10.5,o,o,A.u,o,o,!0,o,1,o,o,o,o,o,o),o,o,o))
e.push(A.P)
v=B.l(o,o,m,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
u=n?A.bm:A.aQ
e.push(B.A(B.a([B.D(B.aM(o,A.T,!1,o,!0,A.r,o,B.aN(),this.d,o,o,o,o,o,2,B.br(o,new B.b4(4,B.m(14),A.Y),o,o,o,o,o,o,!0,o,o,o,o,o,o,u,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,"Type or paste any icon",o,o,o,o,o,!0,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),A.y,!0,o,!0,o,!1,o,A.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,A.a9,o,o,o,o,o,o,o,o,o,o,o,v,!0,A.a5,o,A.am,o,o,o,o),1),A.ab,B.bJ(A.aPI,new C.dcu(this),o)],g),A.m,o,A.e,A.j,0,o,o))
e.push(A.P)
return B.bm(!0,B.p(o,B.v(B.a([f,new B.dm(1,A.ci,B.cB(e,o,o,o,o,A.ah,!0),o)],g),A.F,o,A.e,A.Q,0,A.p),A.f,o,new B.aY(0,1/0,0,k.a.b*0.8),new B.o(j,o,h,i,o,o,A.n),o,o,o,A.tu,A.XW,o,o,o),!0,!1,A.af,!0,!0)}}
C.bdX.prototype={
a5(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=new B.eP()
a2.dG(this.c)
w=this.b
v=w/6.283185307179586
$.X()
u=B.M()
u.z=A.Qw
t=B.M()
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
C.bdE.prototype={
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
v=new B.RX(new B.vk(B.wO(a4),!1,B.a([],x.X))).gK(0)
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
e=u[a3].Mg(n).a
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
C.bmt.prototype={
a5(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=new B.eP()
e.dG(this.c)
w=a0.a*(0.2+e.aj()*0.6)
v=e.h9()?-0.1:1.1
v=a0.b*v
u=new B.u(w,v)
t=a0.galx()*1.4
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
j.sau(B.aTL(u,t,B.a([s.j(0.16),s.j(0)],r),f,A.x,f,f,0))
j.z=A.jk
g=j.H()
j=h.gbJ().a.snapshot()
q.drawPath((h.e=new B.cF(j)).a,g)
g.delete()}},
aq(d){return d.b!==this.b}}
C.b8z.prototype={
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
C.b8c.prototype={
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
C.btl.prototype={
a5(d,e){var w,v,u=new B.aa(0,0,0+e.a,0+e.b),t=Math.sin(this.b)
$.X()
w=B.M()
t=(0.5+0.5*t)*0.12
w.sau(new B.bT(A.A,0.95,A.x,null,0,B.a([A.K,A.w.j(0.28+t)],x.O),D.cQr,null).aw(0,u))
d.aY(u,w)
w=u.cG(-3)
v=B.M()
v.b=A.ae
v.c=2
v.r=this.c.j(0.1+t).gp(0)
v.z=A.jk
d.aY(w,v)},
aq(d){return d.b!==this.b}}
C.bqo.prototype={
a5(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this.b/6.283185307179586*3
for(w=a1.a,v=Math.abs(w),u=a1.b,t=Math.abs(u),s=this.d,r=a0.a,q=this.c*31+A.k.bu(d)*7,p=0;p<7;++p){o=new B.eP()
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
C.bpx.prototype={
a5(d,e){var w,v,u=this.b/6.283185307179586*2.2-0.6
if(u<-0.3||u>1.3)return
w=new B.aa(0,0,0+e.a,0+e.b)
$.X()
v=B.M()
v.a=A.nu
v.sau(new B.a8(A.ax,A.aC,A.x,B.a([A.K,B.aq(this.c,A.c,0.6).j(0.16),A.K],x.O),B.a([A.k.D(u-0.15,0,1),A.k.D(u,0,1),A.k.D(u+0.15,0,1)],x.x),null).aw(0,w))
d.aY(w,v)},
aq(d){return d.b!==this.b}}
C.bcZ.prototype={
a5(d,e){var w,v,u,t,s,r=e.gef(),q=0.55+0.45*Math.sin(this.b)
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
u.z=A.rc
r=new C.d5n(this,r*0.16,d,u,w)
t=e.gef()*0.045
r.$3(new B.u(t,t),1,1)
v=e.a-t
r.$3(new B.u(v,t),-1,1)
s=e.b-t
r.$3(new B.u(t,s),1,-1)
r.$3(new B.u(v,s),-1,-1)},
aq(d){return d.b!==this.b}}
C.xf.prototype={}
C.If.prototype={
a4(){return"NgmySlideElementType."+this.b}}
C.aq1.prototype={
a4(){return"NgmySlideAspectRatio."+this.b}}
C.uu.prototype={
a4(){return"NgmySlideShapeKind."+this.b}}
C.mq.prototype={
a4(){return"NgmySlideLayout."+this.b}}
C.hw.prototype={
a4(){return"NgmySlideTransition."+this.b}}
C.eI.prototype={
hA(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=w.Q,l=w.as,k=w.at,j=w.ay,i=w.ch,h=w.cx,g=w.cy,f=w.db,e=w.dy,d=w.fy
return C.eo(l,g,m,n,f,j,q,o,p,w.go,s,w.a,k,d,w.fx,w.dx,w.k2,w.id,h,w.ax,i,w.CW,r,w.fr,w.k3,w.k1,e,w.b,t,v,u)},
ae(){var w,v=this,u=B.T(x.N,x.z)
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
u.n(0,"decoration",C.hO8(v.z))
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
C.lB.prototype={
hA(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=B.U(n).k("K<1,eI>")
n=B.B(new B.K(n,new C.ccl(),m),m.k("ak.E"))
return C.rh(t,s,o,q,n,w.a,u,v,p,w.b,r)},
ae(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=B.U(n).k("K<1,a4<n,@>>")
n=B.B(new B.K(n,new C.ccm(),m),m.k("ak.E"))
return B.F(["id",w.a,"title",w.b,"notes",v,"layout",u.b,"background",t,"backgroundEnd",s,"transition",r.b,"durationSeconds",q,"slideDesignId",p,"designRevision",o,"elements",n],x.N,x.z)}}
C.hZ.prototype={
gb88(){var w=this.Q,v=w==null?null:A.a.i(w)
if(v==null)v=""
if(v.length===0)return null
return B.bi(v)},
gRF(){if(!C.kr(this.w))return!1
var w=this.gb88()
if(w==null)return!1
return new B.S(Date.now(),0,!1).cY(w.bS())},
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
q=B.U(r).k("K<1,lB>")
r=B.B(new B.K(r,new C.cca(),q),q.k("ak.E"))
return C.Bd(g,w,a2,a3,m,l,a0,j,s,v,t,u,p.a,d,a1,p.x,o,e,f,r,n,i,h,k)},
ae(){var w,v,u=this,t=B.T(x.N,x.z)
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
v=B.U(w).k("K<1,a4<n,@>>")
w=B.B(new B.K(w,new C.ccb(),v),v.k("ak.E"))
t.n(0,"slides",w)
return t}}
C.jB.prototype={}
C.b_N.prototype={
B(d){return B.co(new C.ccg(this))}}
C.anf.prototype={
T(){return new C.bhM(null,null)}}
C.bhM.prototype={
gaY7(){var w,v=this,u=v.d
if(u===$){w=B.bj(null,A.h4,null,1,null,v)
w.cH(0)
v.d!==$&&B.bM()
v.d=w
u=w}return u},
q(){this.gaY7().q()
this.bsV()},
B(d){return B.c6(this.gaY7(),new C.dE6(),this.a.c)}}
C.aJY.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbv())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bw()}}
C.acx.prototype={
Pi(d,e,f,g){return this.bMH(d,e,f,g)},
bMH(d,e,f,g){var w=0,v=B.j(x.H),u,t,s
var $async$Pi=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:w=3
return B.b(e.$0(),$async$Pi)
case 3:s=i
if(d.e==null){w=1
break}B.a6(d,!1).O(null)
t=d.I(x.q).f
t.R(B.b2(null,null,null,null,null,A.r,null,B.d(s?f:g,null,null,null,null,null,null,null,null,null,null),null,A.ed,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$Pi,v)},
B(d){var w=this,v=null,u=B.m(22),t=B.I(A.c.j(0.08),A.q,1),s=B.a([new B.ac(0,A.G,A.w.j(0.35),A.dk,24)],x.V),r=B.av(B.p(v,v,A.f,v,v,new B.o(A.b2,v,v,B.m(99),v,v,A.n),v,4,v,v,v,v,v,40),v,v,v),q=w.d,p=B.d(q?"Print your invoice":"Save your PDF",v,v,v,v,v,v,A.du,A.L,v,v),o=q?"One full letter page \u2014 tap Share then Print, or open in Safari.":w.c,n=q?3:2,m=x.p
n=B.a([r,A.aP,p,A.an,B.d(o,v,n,A.a2,v,v,v,B.l(v,v,A.c.j(0.55),v,v,v,v,v,v,v,v,12,v,v,A.a4,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v)],m)
if(!q)A.d.v(n,B.a([A.at,B.d(w.c,v,2,A.a2,v,v,v,B.l(v,v,A.c.j(0.45),v,v,v,v,v,v,v,v,11,v,v,A.a4,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v)],m))
n.push(A.d5)
n.push(B.A(B.a([B.D(new C.acP(A.hz,"Download",A.bY,new C.emx(w,d),!0,v),1),A.av,B.D(new C.acP(A.vq,"Share",A.bj,new C.emy(w,d),!1,v),1),A.av,B.D(new C.acP(A.hj,"Safari",A.aZ,new C.emz(w,d),!1,v),1)],m),A.m,v,A.e,A.j,0,v,v))
n.push(A.aA)
n.push(B.bK(!1,B.d("Cancel",v,v,v,v,v,v,B.l(v,v,A.c.j(0.6),v,v,v,v,v,v,v,v,v,v,v,A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,!0,v,v,new C.emA(d),v,v))
return B.bm(!0,new B.C(A.pD,B.v(B.a([B.p(v,B.v(n,A.aj,v,A.e,A.j,0,A.p),A.f,v,v,new B.o(A.iO,v,t,u,s,v,A.n),v,v,v,v,A.F8,v,v,1/0)],m),A.m,v,A.e,A.Q,0,A.p),v),!0,!1,A.af,!0,!0)}}
C.acP.prototype={
B(d){var w=this,v=null,u=B.m(16),t=w.r,s=t?w.e.j(0.22):A.c.j(0.06),r=B.m(16),q=B.I(t?w.e.j(0.55):A.c.j(0.1),A.q,1),p=t?w.e:A.c
p=B.W(w.c,p,v,v,v,26)
return B.aG(!1,A.a1,!0,v,B.aL(!1,u,!0,B.ez(B.v(B.a([p,A.P,B.d(w.d,v,v,v,v,v,v,B.l(v,v,A.c,v,v,v,v,v,v,v,v,12,v,v,t?A.u:A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.Q,0,A.p),v,new B.o(s,v,q,r,v,v,A.n),v,D.btS,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),A.f,A.K,0,v,v,v,v,v,A.ag)}}
C.b_L.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.c,f=g.db
if(f==="__kiapo_video__"||A.a.a0(f,"__kiapo_video___"))return new C.apd(g.at,i.d,i.as,i.at,h)
switch(g.b.a){case 0:f=i.r
w=i.d
if(f){v=2*w
u=new B.Q(v,w,v,w)}else{v=6*w
u=new B.Q(v,10*w,v,12*w)}t=i.c5Q().ajH(1.35)
s=B.aut(h,h,h,g.w*w,h,h,!0,1.35,h,h,h)
v=g.as
r=i.byl(v)
if(i.e&&i.w!=null)q=B.aM(h,A.T,!1,h,!0,A.r,h,B.aN(),i.w,A.bj,h,h,h,h,2,D.bP5,A.y,!0,h,!0,h,!1,i.x,A.ai,h,h,h,new B.cx("slide_tf_"+g.a,x.W),h,A.w3,h,h,h,h,1,h,!1,"\u2022",h,i.y,h,h,h,!1,h,h,!1,h,!0,h,A.a9,h,h,h,h,h,h,h,h,h,h,s,t,!0,v,A.ze,A.am,h,A.SB,h,h)
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
w=n?t.cFd(B.b0(g.Q).j(0.45),A.cD):t
p=g.as
l=m?1:h
k=m?A.eC:A.CS
p=B.d(f,new B.cx("slide_txt_"+g.a+"_"+v,x.W),l,k,h,!m,s,w,p,h,h)
g=p}else{f=A.a.gX(v)
v=g.k1
p=g.r
if(v==="outline"){l=g.k2
k=l?A.Ss:s
$.X()
j=B.M()
j.b=A.ae
j.c=3*w
j.e=A.fz
j.r=A.aB.gp(0)
j=i.cmr(p,t,k,j)
k=g.r
w=new B.an(A.W,h,A.aa,A.r,B.a([j,i.cmo(k,t,l?A.Ss:s)],x.p),h)}else w=i.cmq(p,t,g.k2?A.Ss:s,m)
v=new B.n8(w,new B.cx("slide_txt_"+g.a+"_"+f+"_"+v,x.W))
g=v}q=B.aE(A.c5,g,A.y,!1,h,i.Q,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,i.z,h,h,h,h,h,h,!1,A.a8)}return new B.C(u,new B.bH(r,h,h,q,h),h)
case 1:case 4:return i.bW4()
case 3:return i.ce9()
case 2:return B.b3(h,h,h,new C.b_I(g,h),A.f0)
case 5:g=g.r
return new C.b_K(g,!i.e&&i.z==null,h)}},
c5Q(){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.c,l=B.b0(m.Q),k=m.x,j=m.y,i=m.z,h=n,g=n,f=n,e=n
switch(m.k1){case"caps":h=3*o.d
w=l
k=A.u
break
case"elegant":h=1.2*o.d
w=l
k=A.jU
j=A.cD
break
case"shadow":v=o.d
e=B.a([new B.cP(D.acO,new B.u(0,4*v),8*v)],x.r)
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
w=W.Vo
break
case"ice":v=o.d
e=B.a([new B.cP(A.aU,A.J,10*v),new B.cP(A.cy,A.J,22*v)],x.r)
k=A.O
w=A.et
break
case"chalk":h=o.d
e=B.a([new B.cP(l.j(0.45),A.J,3*h)],x.r)
w=l
k=A.jU
break
case"comic":v=B.aq(l,A.w,0.85)
v.toString
u=B.a([],x.r)
for(t=o.d,q=0;q<8;++q){p=D.cSo[q]
u.push(new B.cP(v,new B.u(p.a*t,p.b*t),0))}u.push(new B.cP(v,new B.u(5*t,6*t),0))
e=u
w=l
k=A.u
break
case"gold":$.X()
f=B.M()
v=o.d
f.sau(D.bRs.aw(0,new B.aa(0,0,0+900*v,0+m.w*v*1.6)))
e=B.a([new B.cP(A.JZ,new B.u(0,3*v),5*v)],x.r)
w=l
k=A.u
break
case"sunset":$.X()
f=B.M()
v=o.d
f.sau(D.bRN.aw(0,new B.aa(0,0,0+900*v,0+m.w*v*1.6)))
w=l
k=A.u
break
case"softglow":e=B.a([new B.cP(l,A.J,14*o.d)],x.r)
w=l
k=A.a4
break
case"lowercase":h=2*o.d
w=l
k=A.cv
break
case"double":v=o.d
u=5*v
v=10*v
e=B.a([new B.cP(l.j(0.45),new B.u(u,u),0),new B.cP(l.j(0.2),new B.u(v,v),0)],x.r)
w=l
break
case"whisper":h=6*o.d
w=l
k=A.jU
break
default:w=l}v=m.w
u=f==null?w:n
m=m.k3
m=m!==0?B.b0(m):g
return B.l(n,m,u,n,i,n,n,n,n,n,n,v*o.d,j,n,k,f,1.25,!0,n,h,n,n,n,e,n,n)},
ay8(d,e,f,g,h){var w,v,u,t,s=null,r=this.c,q=r.k1
if(D.eHe.t(0,q))w=d.toUpperCase()
else w=q==="lowercase"?d.toLowerCase():d
q=new C.cce(h)
v=r.k2?C.i_F(w,e,q):s
if(v==null){q=q.$1(e)
r=r.as
u=g?1:s
t=g?A.eC:A.CS
return B.d(w,s,u,t,s,!g,f,q,r,s,s)}return B.Xa(B.dr(v,s,s,s,s,s,s,s,s,s,s),s,s,q.$1(e),r.as)},
cmr(d,e,f,g){return this.ay8(d,e,f,!1,g)},
cmo(d,e,f){return this.ay8(d,e,f,!1,null)},
cmq(d,e,f,g){return this.ay8(d,e,f,g,null)},
byl(d){switch(d.a){case 2:return A.A
case 1:case 5:return A.a7
default:return A.a3}},
bW4(){var w,v,u=this,t=null,s=u.c,r=s.at
if(r==null||!A.a.a0(r,"data:image")){if(!u.as)return A.bH
return B.av(B.W(s.b===D.kS?A.G2:A.Ba,A.az,t,t,t,32),t,t,t)}w=u.bBi(r)
if(s.b===D.kS){s=B.m(6)
v=2*u.d
return B.p(t,w,A.f,t,t,new B.o(A.c,t,B.I(A.cp,A.q,1),s,B.a([new B.ac(0,A.G,A.w.j(0.08),A.dD,6)],x.V),t,A.n),t,1/0,t,t,new B.Q(v,v,v,v),t,t,1/0)}if(s.go.length!==0||s.id.length!==0){v=u.aME(r,!0)
return C.fvp(s.go,v,s.id)}return w},
aME(d,e){var w,v,u,t
try{w=C.i_Y(d)
u=this.c.db
v=u==="marriage_locked_bg"||A.a.cb(u,"_bg")
u=B.co(new C.ccd(this,w,v,e))
return u}catch(t){return D.aaD}},
bBi(d){return this.aME(d,!1)},
ce9(){var w=this.c,v=w.at
if(v==null||v.length===0)return D.b3q
return C.i0f(v,w.db,w.dx)}}
C.b_I.prototype={
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
case 1:d.hM(s,g)
d.hM(s,w)
break
case 2:r=new B.aQ(h.r,A.ap,i,i,B.a([],x.v))
r.E(new B.b5(u/2,0))
r.E(new B.ap(u,t))
r.E(new B.ap(0,t))
r.E(new B.bF())
d.aP(r,g)
d.aP(r,w)
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
d.aP(r,g)
d.aP(r,w)
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
d.aP(r,g)
d.aP(r,w)
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
d.aP(r,g)
d.aP(r,w)
break}},
aq(d){return d.b!==this.b}}
C.aHz.prototype={
T(){return new C.bsS(null,null)}}
C.bsS.prototype={
a_(){var w,v=this
v.a1()
w=B.bj(null,A.i9,null,1,null,v)
w.cH(0)
v.d!==$&&B.aO()
v.d=w},
q(){var w=this.d
w===$&&B.c()
w.q()
this.bva()},
aMP(d,e){var w=null,v=B.a([e,e.j(0.7)],x.O),u=B.m(8)
return B.c_(B.av(B.d(d,w,w,w,w,w,w,A.du,w,w,w),w,w,w),new B.o(w,w,w,u,w,new B.a8(A.a3,A.a7,A.x,v,w,w),A.n),A.bd)},
byz(){var w,v=this,u=null,t=v.aMP("Slide A",A.bj),s=v.aMP("Slide B",A.aZ)
if(v.a.c===D.cg)return new B.an(A.W,u,A.b_,A.r,B.a([t,B.av(B.d("No transition",u,u,u,u,u,u,B.l(u,u,A.c.j(0.7),u,u,u,u,u,u,u,u,16,u,u,A.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,u)],x.p),u)
w=v.d
w===$&&B.c()
return B.c6(w,new C.f0T(v,s,t),u)},
B(d){return this.byz()}}
C.aIb.prototype={
iX(d){return new B.aa(0,0,0+d.a*A.k.D(this.b,0,1),0+d.b)},
jD(d){return d.b!==this.b}}
C.Uk.prototype={
T(){return new C.bhZ(null,null)}}
C.bhZ.prototype={
a_(){var w,v,u=this
u.a1()
w=B.bj(null,A.AB,null,1,null,u)
u.d!==$&&B.aO()
u.d=w
v=u.a
if(!v.e||v.c.dy===D.cg){w.sp(0,1)
return}B.bN(B.dC(0,0,0,v.c.fr+v.f*120,0,0),new C.dQ6(u),x.a)},
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
else B.bN(B.dC(0,0,0,v.c.fr+v.f*120,0,0),new C.dQ5(t),x.a)}},
q(){var w=this.d
w===$&&B.c()
w.q()
this.bt9()},
B(d){var w,v=this.a
if(v.c.dy===D.cg||!v.e)return v.d
w=this.d
w===$&&B.c()
return B.c6(w,new C.dQ4(this),v.d)}}
C.Ie.prototype={
B(d){return B.co(new C.cc6(this))}}
C.ayj.prototype={
T(){return new C.bcs()}}
C.bcs.prototype={
a_(){this.a1()
if(this.a.c!==D.cg)B.bN(A.Li,new C.d2C(this),x.a)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=4280172719,n=q.a.c
if(n===D.cg)n=B.av(B.d("No animation on elements",p,p,p,p,p,p,B.l(p,p,A.c.j(0.75),p,p,p,p,p,p,p,p,16,p,p,A.O,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p)
else{n=n.u(0)
w=q.d
v=x.W
u=q.a.c
w=B.ao(p,new C.Uk(C.eo(A.bg,!1,4279310375,A.aD,"",4294538006,24,A.bl,A.a4,"",0.2,"preview_shape",p,"","",0,!1,"",0,D.be,o,2,"",0,0,"",u,D.f_,0.84,0.08,0.12),B.p(p,p,A.f,p,p,new B.o(A.cb,p,p,B.m(14),p,p,A.n),p,72,p,p,p,p,p,72),!0,0,new B.cx("shape_"+n+"_"+w,v)),p,p,24,p,28,p)
u=u.u(0)
n=q.d
t=C.eo(A.bg,!1,4294967295,A.aD,"",4280640491,22,A.bl,A.a4,"",0.2,"preview_text",p,"","",0,!1,"",0,D.be,o,2,"Element flies in",0,0,"",q.a.c,D.cQ,0.84,0.08,0.12)
s=A.c.j(0.14)
r=B.m(14)
v=new B.an(A.W,p,A.aa,A.r,B.a([w,B.ao(32,new C.Uk(t,B.p(p,D.fdE,A.f,p,p,new B.o(s,p,B.I(A.b2,A.q,1),r,p,p,A.n),p,p,p,p,A.jd,p,p,1/0),!0,1,new B.cx("text_"+u+"_"+n,v)),p,p,24,24,p,p)],x.p),p)
n=v}return B.c_(n,D.aZK,A.bd)}}
C.a71.prototype={
T(){return new C.biD(null,null)}}
C.biD.prototype={
gaYE(){var w=this.a
if(w.e)w=D.eHl.t(0,w.c)||D.aM0.t(0,A.d.gK(this.a.c.split("@")))
else w=!1
return w},
a_(){var w,v=this
v.a1()
if(v.gaYE()){w=C.hZk(v.a.c)
if(w==null){w=v.a.c
if(w==="drift")w=9000
else w=w==="pulse"?2600:4200}w=B.bj(null,B.dC(0,0,0,w,0,0),null,1,null,v)
w.cH(0)
v.d=w}},
q(){var w=this.d
if(w!=null)w.q()
this.btG()},
B(d){var w,v=this,u=v.d
if(!v.gaYE()||u==null)return v.a.d
w=v.a
return B.c6(u,new C.ea9(v,u,A.o.F(w.f,7)/7*3.141592653589793*2),w.d)}}
C.aYH.prototype={
B(d){var w=null
return B.av(C.b_M(!0,w,!1,C.eo(A.L,!1,this.e.l(),A.aD,"",4280640491,this.f,A.bl,A.a4,"",0.2,"fx",w,"","",0,!1,"",0,D.be,4280172719,2,"Aa",0,0,this.c,D.cg,D.cQ,0.84,0.08,0.12),w,!1,w,w,w,1,!1,!0),w,w,w)},
gY(d){return this.f}}
C.bdC.prototype={
iX(d){return C.a1H(this.b,new B.aa(0,0,0+d.a,0+d.b).cG(-this.c))},
jD(d){return d.b!==this.b||d.c!==this.c}}
C.bou.prototype={
a5(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=new B.aa(0,0,0+a1.a,0+a1.b).cG(-this.d),g=this.b,f=C.a1H(g,h),e=a1.gef(),d=new C.eRc()
switch(this.c){case"gold":w=d.$1(e*0.045)
w.sau(D.aNw.aw(0,h))
a0.aP(f,w)
g=C.a1H(g,h.cG(-(e*0.03)))
w=d.$1(e*0.006)
w.r=D.bhu.gp(0)
a0.aP(g,w)
break
case"platinum":g=d.$1(e*0.04)
g.sau(D.eQV.aw(0,h))
a0.aP(f,g)
break
case"glow":g=d.$1(e*0.05)
g.r=A.c.j(0.55).gp(0)
g.z=new B.ht(A.G,e*0.04)
a0.aP(f,g)
g=d.$1(e*0.012)
g.r=A.c.gp(0)
a0.aP(f,g)
break
case"rainbow":g=d.$1(e*0.04)
g.sau(D.eQT.aw(0,h))
a0.aP(f,g)
break
case"double":w=d.$1(e*0.012)
w.r=A.c.gp(0)
a0.aP(f,w)
g=C.a1H(g,h.cG(e*0.03))
w=d.$1(e*0.008)
w.r=A.c.j(0.75).gp(0)
a0.aP(g,w)
break
case"neon":g=d.$1(e*0.06)
g.r=A.b7.j(0.7).gp(0)
g.z=new B.ht(A.G,e*0.035)
a0.aP(f,g)
g=d.$1(e*0.016)
g.r=A.oq.gp(0)
a0.aP(f,g)
break
case"rosegold":w=d.$1(e*0.05)
w.sau(D.eQO.aw(0,h))
a0.aP(f,w)
w=C.a1H(g,h.cG(-(e*0.032)))
v=d.$1(e*0.006)
v.r=D.b6L.gp(0)
a0.aP(w,v)
g=C.a1H(g,h.cG(e*0.03))
v=d.$1(e*0.004)
v.r=D.b9b.gp(0)
a0.aP(g,v)
break
case"jewels":g=d.$1(e*0.055)
g.sau(D.aNw.aw(0,h))
a0.aP(f,g)
for(g=B.wO(f),w=B.a([],x.X),g=new B.vk(g,!1,w),v=e*0.018,u=a0.a,t=-e*0.006,s=e*0.006,r=e*0.09;g.C();){q=g.c
if(q===0||g.f)B.ba(B.jR(y.M));--q
g.jj()
p=w[q].b
p===$&&B.c()
o=A.o.D(A.k.bu(p.a.length()/r),8,40)
for(n=0;n<o;++n){g.jj()
p=w[q].b
p===$&&B.c()
p=p.a.length()
g.jj()
m=w[q].Mg(p*n/o).a
l=D.cPL[A.o.F(n,4)]
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
g.sau(D.eQX.aw(0,h))
g.z=new B.ht(A.G,e*0.03)
a0.aP(f,g)
g=d.$1(e*0.018)
g.sau(D.eQU.aw(0,h))
a0.aP(f,g)
break
case"framed":w=d.$1(e*0.07)
w.r=A.c.gp(0)
a0.aP(f,w)
g=C.a1H(g,h.cG(-(e*0.035)))
w=d.$1(e*0.004)
w.r=A.nA.gp(0)
a0.aP(g,w)
break}},
aq(d){return d.b!==this.b||d.c!==this.c||d.d!==this.d}}
C.bpu.prototype={
a5(d,e){d.Fr(C.a1H(this.b,new B.aa(0,0,0+e.a,0+e.b).cG(-this.c)),A.w,e.gef()*0.05,!1)},
aq(d){return d.b!==this.b||d.c!==this.c}}
C.aKb.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbv())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bw()}}
C.aKH.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbv())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bw()}}
C.aM1.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbv())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bw()}}
C.a7k.prototype={}
C.Nn.prototype={
T(){var w=x.gz,v=x.N,u=x.bO
return new C.aDa(B.a([],x.D),B.a([],w),B.a([],w),B.T(v,u),B.T(v,x.bo),B.T(v,u),B.aX(v),null,null)},
gdX(){return this.c},
gT_(){return this.r},
gT0(){return this.w},
gL7(){return this.x}}
C.aDa.prototype={
a_(){var w,v=this
v.a1()
$.aU.c2$.push(v)
C.fAl()
$.hhL=new C.esL(v)
w=B.bj(null,A.Az,null,1,null,v)
w.f9(0,!0)
v.fy!==$&&B.aO()
v.fy=w
v.HZ()},
br(d){var w,v,u=this
u.bE(d)
w=A.a.i(d.y)
v=u.a
if(w.toLowerCase()!==A.a.i(v.y).toLowerCase()||A.a.i(d.z).toLowerCase()!==A.a.i(v.z).toLowerCase()||d.c!==v.c){w=d.c
u.NV(w)
if(w!==u.a.c){u.e=null
u.db=!1
u.w=u.r=null}u.x=!0
u.HZ()}},
iS(d){if(d===A.zF||d===A.rL||d===A.rK||d===A.pa)this.tf()},
q(){var w,v,u,t=this
$.aU.hE(t)
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
v.h2()}for(w=t.cx,w=new B.dt(w,w.r,w.e);w.C();){v=w.d
v.S$=$.aw()
v.P$=0}t.btU()},
gaaB(){var w=this.a
return w.f||w.r||w.w||w.x||w.d},
gOe(){var w,v=this.a
if(v.d||v.w||v.x){w=A.a.i(v.y)
if(w.length!==0)return w}if(v.r&&A.a.i(v.z).length!==0)return A.a.i(v.z)
return A.a.i(v.y)},
ab4(d){var w=d==null?this.e:d
if((w==null?null:w.z)!==!0)return!1
if(w.gRF())return!1
return!0},
k6(){return this.ab4(null)},
ahJ(){var w=this.c
if(w==null)return
w.I(x.q).f.R(D.ePc)},
pY(){if(!this.k6())return!1
this.ahJ()
return!0},
apP(d){var w,v,u,t,s,r=this
if(r.ab4(d))return!1
w=d==null?r.e:d
v=w==null
if((v?null:w.w)!=="hati_kiapo_uongozi")return!0
if(r.a.d)return!0
if(!v&&!C.hgS(w))return!1
u=r.a
if(u.w||u.x)return!0
if(!u.r)return!1
v=v?null:w.x
t=A.a.i(v==null?"":v).toLowerCase()
s=A.a.i(u.z).toLowerCase()
return t.length!==0&&s.length!==0&&t===s},
zy(){return this.apP(null)},
HZ(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$HZ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=++t.dx
k=t.a.c
w=3
return B.b(C.aq3(k),$async$HZ)
case 3:j=e
w=4
return B.b(C.aoG(k),$async$HZ)
case 4:t.dy=e
if(t.c==null||l!==t.dx){w=1
break}s=C.fPu(j,t.bYW())
w=t.gaaB()?5:7
break
case 5:r=t.gOe()
w=r.length!==0?8:9
break
case 8:w=10
return B.b(C.aYV(r),$async$HZ)
case 10:q=e
if(t.c==null||l!==t.dx){w=1
break}if(q!=null){A.d.bm(s,new C.ep8())
if(!t.dy.t(0,A.a.i(r).toLowerCase()))A.d.ck(s,0,q)}case 9:w=6
break
case 7:A.d.bm(s,new C.ep9())
case 6:for(l=s.length,p=!1,o=0;o<s.length;s.length===l||(0,B.L)(s),++o){n=s[o]
m=n.w
if(!(m==="marriage_agreement"||m==="hati_kuhowa"||m==="hati_kuhoweya"||m==="hati_malipo_awamu"||m==="hati_kiapo_uongozi"))continue
m=n.y
if(C.yf(m==null?"":m)!=null)continue
C.fAx(n,s)
p=!0}t.m(new C.epa(t,s))
if(p||s.length>J.ad(j))t.tf()
case 1:return B.h(u,v)}})
return B.i($async$HZ,v)},
bYW(){var w,v,u,t,s,r,q="hati_kiapo_uongozi",p=B.a([],x.D)
for(w=this.d,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u){t=w[u]
s=t.w
if((s==="marriage_agreement"||s==="hati_kuhowa"||s==="hati_kuhoweya"||s==="hati_malipo_awamu"||s===q)&&s!==q)p.push(t)}r=this.e
w=!1
if(!this.db)if(r!=null){w=r.w
w=C.kr(w)&&w!==q}if(w)p.push(r)
return p},
ckQ(d){var w,v=this,u=d.w
if(!C.kr(u)||u==="hati_kiapo_uongozi")return
v.a9r(d)
w=A.d.ba(v.d,new C.eqJ(d))
u=v.d
if(w>=0){u[w]=d.hA()
v.d[w].f=new B.S(Date.now(),0,!1)}else A.d.ck(u,0,d.hA())
v.db=!1},
cf5(){var w,v,u=this,t=u.e,s=!1
if(!u.db)if(t!=null){s=t.w
s=C.kr(s)&&s!=="hati_kiapo_uongozi"}if(s)u.ckQ(t)
s=u.d
w=B.U(s)
v=w.k("cQ<1,hZ>")
s=B.B(new B.cQ(new B.a2(s,new C.eqx(),w.k("a2<1>")),new C.eqy(),v),v.k("J.E"))
return s},
NV(d){return this.bN3(d)},
tf(){return this.NV(null)},
bN3(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$NV=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.x&&d==null){w=1
break}s=t.cf5()
w=3
return B.b(C.Vj(d==null?t.a.c:d,s),$async$NV)
case 3:r=t.e
w=r!=null&&r.w==="hati_kiapo_uongozi"&&t.apP(r)?4:5
break
case 4:w=6
return B.b(C.a6y(r),$async$NV)
case 6:q=r.x
p=A.a.i(q==null?t.gOe():q)
if(t.dy.t(0,A.a.i(p).toLowerCase())){w=1
break}o=A.d.ba(t.d,new C.eow())
q=t.d
if(o>=0)q[o]=r.hA()
else A.d.ck(q,0,r.hA())
case 5:case 1:return B.h(u,v)}})
return B.i($async$NV,v)},
p5(){var w,v=this,u=v.at
if(u!=null)u.a8(0)
u=v.e
w=(u==null?null:C.kr(u.w))===!0?A.hX:A.lG
v.at=B.cM(w,new C.erR(v))},
aY8(){var w,v=this,u=v.e
if(u==null)return
w=v.ax
w.push(new C.aei(u.hA(),v.f,v.r))
if(w.length>40)A.d.cA(w,0)
A.d.a9(v.ay)},
cya(){var w=this,v=w.ax
if(v.length===0||w.e==null)return
w.ay.push(new C.aei(w.e.hA(),w.f,w.r))
w.m(new C.esH(w,v.pop()))
w.p5()},
cjX(){var w=this,v=w.ay
if(v.length===0||w.e==null)return
w.ax.push(new C.aei(w.e.hA(),w.f,w.r))
w.m(new C.eqH(w,v.pop()))
w.p5()},
o_(){var w,v,u=this
if(u.e==null)return
w=A.d.ba(u.d,new C.esu(u))
if(w>=0){u.d[w]=u.e.hA()
u.d[w].f=new B.S(Date.now(),0,!1)}v=u.e
v.toString
v.f=new B.S(Date.now(),0,!1)},
WW(d){var w,v,u,t,s=this.gdq()
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
u.h2()}w.a9(0)},
JG(){var w,v,u,t,s,r,q,p,o,n,m,l=this.gdq()
if(l==null)return
w=l.z
v=B.U(w)
u=v.k("cQ<1,n>")
t=B.da(new B.cQ(new B.a2(w,new C.esv(),v.k("a2<1>")),new C.esw(),u),u.k("J.E"))
w=this.ch
v=B.a3(w).k("ct<1>")
v=B.B(new B.ct(w,v),v.k("J.E"))
u=v.length
s=this.CW
r=0
for(;r<v.length;v.length===u||(0,B.L)(v),++r){q=v[r]
if(!t.t(0,q)){p=w.W(0,q)
if(p!=null){p.S$=$.aw()
p.P$=0}p=s.W(0,q)
if(p!=null){o=p.ax
if(o!=null)o.bL(0)
p.h2()}}}for(v=l.z,u=v.length,r=0;r<v.length;v.length===u||(0,B.L)(v),++r){n=v[r]
if(n.b!==D.cQ)continue
p=n.a
m=w.cg(0,p,new C.esx(n))
s.cg(0,p,new C.esy())
p=m.a.a
o=n.r
if(p!==o)m.saV(0,o)}},
Hk(){var w,v,u=this
if(!u.db||u.e==null)return
w=u.db=!1
if(!A.d.b7(u.d,new C.enV(u))){v=u.e
if(v.w==="hati_kiapo_uongozi"){v=v.x
if(v==null)v=u.gOe()
w=u.dy.t(0,A.a.i(v).toLowerCase())}if(!w)A.d.ck(u.d,0,u.e.hA())}u.o_()
u.p5()},
ai4(d,e){var w,v,u,t,s=this
if(s.k6())return
w=s.WW(d)
if(w==null||w.r===e)return
w.r=e
v=s.e
u=(v==null?null:C.kr(v.w))===!0
if(u){C.hZo(w,e)
v=s.e
if((v==null?null:v.w==="marriage_agreement")===!0){t=s.gdq()
if(t!=null)C.hZp(t,w.d+w.f*0.5)}}s.Hk()
s.o_()
s.p5()
if(u&&s.c!=null)s.m(new C.esI())},
czd(d,e){var w=this,v=w.gdq()
if(v==null||v.a!==d||v.c===e)return
v.c=e
w.Hk()
w.o_()
w.p5()},
gdq(){var w,v=this.e
if(v==null||v.r.length===0)return null
w=v.r
return w[A.o.D(this.f,0,w.length-1)]},
gq2(){var w,v,u,t,s,r,q=this,p=q.e,o=p==null?null:p.c
if(o==null)o="office_blue"
w=C.hXq(o)
if(w!=null)return w
v=q.gdq()
if(v==null){p=q.e
v=p!=null&&p.r.length!==0?A.d.gK(p.r):null}if(v!=null&&A.a.a0(o,"class_")){p=v.f
p=B.b0(p==null?v.e:p)
u=q.bWj(v)
t=q.bWi(v)
s=B.b0(v.e)
r=v.f
return new C.jB(o,"Class template",p,u,t,s,r==null?null:B.b0(r))}return C.hAm(o)},
bWj(d){var w,v,u,t,s
for(w=d.z,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u){t=w[u]
if(t.b===D.cQ)s=t.w>=28||A.o.D(A.o.an(t.x.a,100)-1,0,8)>=A.o.D(7,0,8)
else s=!1
if(s)return B.b0(t.Q)}return A.M},
bWi(d){var w,v,u,t
for(w=d.z,v=w.length,u=0;u<v;++u){t=w[u]
if(t.b===D.cQ&&t.w<28)return B.b0(t.Q)}return A.aK},
ae3(d){var w=this,v=d.w
if(v==="hati_kiapo_uongozi"){if(!w.gaaB()){w.c.I(x.q).f.R(D.eNP)
return}w.a9r(d)
w.aZk(C.bAz(d))
return}if(C.cd_(v)){w.a9r(d)
w.aZk(d)
return}w.m(new C.epQ(w,d))},
aqn(){var w,v,u,t,s,r,q=this
q.a1o(!0)
if(q.db){w=q.e
v=w==null
u=v?null:w.w
t=v?null:w.x
s=A.a.i(t==null?"":t)
r=!v&&C.kr(w.w)&&u!=="hati_kiapo_uongozi"&&s.length!==0
q.m(new C.enT(q))
if(r&&q.c!=null){u.toString
q.Jg(u,s)}return}q.tf()
q.m(new C.enU(q))},
aZj(d){this.a9r(d)
this.ZV(d,!0)},
a9r(d){if(!C.kr(d.w))return
C.fAx(d,this.d)},
ZV(d,e){return this.cb1(d,e)},
aZk(d){return this.ZV(d,!1)},
cb1(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$ZV=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:l={}
l.a=d
if(d.w==="hati_kiapo_uongozi"){s=l.a=C.bAz(d)
if(e){r=s.x
q=A.a.i(r==null?t.gOe():r)
t.dy.W(0,q.toLowerCase())
C.aoH(t.a.c,q)}r=s}else r=d
w=C.cd_(r.w)?3:4
break
case 3:w=5
return B.b(t.a9s(r),$async$ZV)
case 5:if(!g||t.c==null){w=1
break}case 4:p=A.d.b7(t.d,new C.eqc(l))
o=l.a.hA()
n=C.kr(o.w)&&C.i_A(o)
t.m(new C.eqd(t,o,p))
if(n){m=A.d.ba(t.d,new C.eqe(o))
if(m>=0){t.d[m]=o.hA()
t.tf()}}if(!t.ab4(l.a))t.Y3()
r=!1
if(t.c!=null)if(!t.ab4(l.a)){r=l.a
l=r.w==="hati_kiapo_uongozi"&&!t.apP(r)&&C.fwA(l.a)}else l=r
else l=r
if(l)t.c.I(x.q).f.R(D.eOo)
case 1:return B.h(u,v)}})
return B.i($async$ZV,v)},
a9s(d){return this.bLj(d)},
bLj(d){var w=0,v=B.j(x.y),u,t=this,s,r
var $async$a9s=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.a
if(r.d){u=!0
w=1
break}s=d.z
if(s===!0){u=!0
w=1
break}w=3
return B.b(B.lc(r.c,A.yX),$async$a9s)
case 3:if(f){u=!0
w=1
break}r=t.c
r.toString
s=t.a
u=B.kP(!1,r,s.c,s.d,null,A.yX,null)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a9s,v)},
nS(){var w=0,v=B.j(x.y),u,t=this,s,r
var $async$nS=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.e
r=s==null
if(C.cd_(r?null:s.w)){u=!0
w=1
break}if((r?null:s.w)==="hati_kiapo_uongozi"){u=!0
w=1
break}s=t.c
s.toString
r=t.a
u=C.cco(s,r.c,r.d)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$nS,v)},
adL(){var w=0,v=B.j(x.H),u,t=this,s
var $async$adL=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.ca(null,null,!1,null,new C.epP(),s,null,!0,!0,x.H),$async$adL)
case 3:if(t.c==null){w=1
break}t.aqn()
case 1:return B.h(u,v)}})
return B.i($async$adL,v)},
adK(){var w=0,v=B.j(x.H),u,t=this,s
var $async$adK=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.ca(null,null,!1,null,new C.epM(),s,null,!0,!0,x.H),$async$adK)
case 3:if(t.c==null){w=1
break}t.m(new C.epN())
t.aqn()
case 1:return B.h(u,v)}})
return B.i($async$adK,v)},
Y3(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$Y3=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.az(),$async$Y3)
case 3:r=e
if(B.kc(J.q(r.a,"ngmy_marriage_hint_seen"))===!0){w=1
break}w=4
return B.b(r.ar("Bool","ngmy_marriage_hint_seen",!0),$async$Y3)
case 4:s=t.c
if(s==null){w=1
break}s.I(x.q).f.R(D.eMs)
case 1:return B.h(u,v)}})
return B.i($async$Y3,v)},
Jg(d,e){return this.clg(d,e)},
clg(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$Jg=B.e(function(f,g){if(f===1)return B.f(g,v)
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
return B.b(C.afC(s,t.gE1(),t.gE0(),!0,e,t.d),$async$Jg)
case 9:w=4
break
case 6:w=10
return B.b(C.afD(s,t.gE1(),t.gE0(),!0,e,t.d),$async$Jg)
case 10:w=4
break
case 7:w=11
return B.b(C.afE(s,t.gE1(),t.gE0(),!0,e,t.d),$async$Jg)
case 11:w=4
break
case 8:w=12
return B.b(C.afF(s,t.gE1(),t.gE0(),!0,e,t.d),$async$Jg)
case 12:w=4
break
case 4:case 1:return B.h(u,v)}})
return B.i($async$Jg,v)},
bXQ(){var w,v,u,t,s=this
if(!s.gaaB()){s.c.I(x.q).f.R(D.eMF)
return}w=s.gOe()
v=s.a
u=v.d
t=!0
if(!u)if(!v.w){if(!v.x)if(v.r){v=A.a.i(v.z)
v=v.length!==0&&v.toLowerCase()===w.toLowerCase()}else v=!1
else v=t
t=v}v=s.c
v.toString
C.afB(u,t,v,new C.ep4(s),new C.ep5(s),w)},
ae4(){var w=0,v=B.j(x.H),u=this,t,s
var $async$ae4=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return B.b(B.bX(A.dF,null,new C.epW(u),s,!0,!0,!1,A.ln,!1,!1,x.N),$async$ae4)
case 2:t=e
if(t==="marriage_agreement"){s=u.c
s.toString
C.afF(s,u.gE1(),u.gE0(),!1,null,u.d)}else if(t==="hati_kuhowa"){s=u.c
s.toString
C.afC(s,u.gE1(),u.gE0(),!1,null,u.d)}else if(t==="hati_kuhoweya"){s=u.c
s.toString
C.afD(s,u.gE1(),u.gE0(),!1,null,u.d)}else if(t==="hati_malipo_awamu"){s=u.c
s.toString
C.afE(s,u.gE1(),u.gE0(),!1,null,u.d)}else if(t==="hati_kiapo_uongozi")u.bXQ()
return B.h(null,v)}})
return B.i($async$ae4,v)},
ca8(d,e){var w,v,u=this,t=null
if(u.e!=null)u.aY8()
w=C.cC()
v=C.Bd(t,t,t,t,D.Cg,5,!1,t,t,t,t,t,w,t,!1,t,d==null?"Untitled Presentation":d,t,t,t,"office_blue",t,!1,t)
u.m(new C.epX(u,v))},
a8T(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$a8T=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e==null||t.pY()){w=1
break}s=t.c
s.toString
w=3
return B.b(C.i4_(s),$async$a8T)
case 3:r=e
if(r==null||t.c==null||t.e==null){w=1
break}q=t.e
p=A.d.d9(q.r,new C.enX())
t.d1(new C.enY(t,p,q,r))
s=t.c.I(x.q).f
o=r.r.length
s.R(B.b2(null,null,null,null,null,A.r,null,B.d(p?"Your "+o+"-slide presentation is ready. The mic is green now \u2014 tap it to tell the AI what to change.":"Added "+o+" AI slides after this one. Tap the green mic to change them.",null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a8T,v)},
ag1(d,e,f,g){var w=null,v=g?A.dp:A.bM,u=B.I(g?A.b2:A.cp,A.q,1)
return B.hp(B.aE(w,B.p(w,B.W(d,g?A.c:A.aK,w,w,w,18),A.f,w,w,new B.o(v,w,u,w,w,w,A.a6),w,34,w,w,w,w,w,34),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,A.a8),w,e,w,w)},
ZU(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$ZU=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:n=t.e
if(n==null||t.pY()){w=1
break}s=t.jG()
r=n.r
q=r.length
if(q===0||t.f>=q)p=B.a([],x.u)
else{r=r[t.f].z
q=B.U(r).k("a2<1>")
p=B.B(new B.a2(r,new C.eq7(),q),q.k("J.E"))}o=s!=null&&s.b===D.lk?B.a([s],x.u):p
if(o.length===0){t.c.I(x.q).f.R(D.eOz)
w=1
break}r=t.c
r.toString
w=3
return B.b(B.bX(A.K,null,new C.eq8(t,o),r,!0,!0,!0,null,!1,!1,x.H),$async$ZU)
case 3:case 1:return B.h(u,v)}})
return B.i($async$ZU,v)},
ael(){return this.cb0()},
cb0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$ael=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p={}
o=t.e
if(o!=null){s=o.CW
s=(s==null?"":s).length===0||t.pY()}else s=!0
if(s){w=1
break}s=t.c
s.toString
w=3
return B.b(C.i3M(s,t.f+1,o),$async$ael)
case 3:r=e
if(r==null||t.c==null||t.e!==o){w=1
break}s=o.cx
if(s==null)s=A.T
q=B.kz(s,B.U(s).c)
p.a=A.d.ba(o.r,new C.eqa(q))
t.d1(new C.eqb(p,t,o,q,r))
t.c.I(x.q).f.R(D.eOY)
case 1:return B.h(u,v)}})
return B.i($async$ael,v)},
aes(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$aes=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e==null||t.pY()||!t.zy()){w=1
break}s=t.gdq()
if(s==null){w=1
break}r=s.z
q=B.U(r).k("a2<1>")
p=B.B(new B.a2(r,new C.eqs(),q),q.k("J.E"))
if(p.length===0){t.c.I(x.q).f.R(D.eMd)
w=1
break}o=new B.K(p,new C.eqt(),B.U(p).k("K<1,N>")).fF(0,new C.equ())
r=B.T(x.N,x.bO)
for(q=p.length,n=0;n<p.length;p.length===q||(0,B.L)(p),++n){m=p[n]
l=m.r
r.n(0,m.a,new B.ar(new B.bb(l,A.b3,A.aN),$.aw()))}q=t.c
q.toString
w=3
return B.b(B.bX(A.K,null,new C.eqv(t,p,o,r),q,!0,!0,!0,null,!1,!1,x.H),$async$aes)
case 3:for(r=new B.dt(r,r.r,r.e);r.C();){q=r.d
q.S$=$.aw()
q.P$=0}if(t.c!=null)t.m(new C.eqw())
case 1:return B.h(u,v)}})
return B.i($async$aes,v)},
ae7(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$ae7=B.e(function(d,e){if(d===1)return B.f(e,v)
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
return B.b(C.hiQ(s,new C.E5(r,q,p,o==null?"":o)),$async$ae7)
case 3:n=e
if(n==null||t.c==null){w=1
break}t.d1(new C.epY(m,n))
s=t.c.I(x.q).f
r=n.a
if(r.length===0)r="No ending celebration."
else{r=C.ag1(r)
r=B.t(r==null?null:r.b)+" will play after your last slide."}s.R(B.b2(null,null,null,null,null,A.r,null,B.d(r,null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$ae7,v)},
a9l(){return this.bKG()},
bKG(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$a9l=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:m={}
l=t.e
if(l!=null){s=l.CW
s=(s==null?"":s).length===0||t.pY()}else s=!0
if(s){w=1
break}s=t.c
s.toString
w=3
return B.b(C.i3Z(s,t.f+1,l),$async$a9l)
case 3:r=e
q=$.fSV
$.fSV=!1
if(r==null||t.c==null||t.e!==l){w=1
break}if(r===l){t.d1(new C.eod())
t.c.I(x.q).f.R(D.eM4)
w=1
break}if(!q){s=r.CW
s=C.hhJ(l,s==null?"":s,!1)}else s=!1
if(s){t.d1(new C.eoe(t,l,r))
t.c.I(x.q).f.R(D.ePr)
w=1
break}s=l.cx
if(s==null)s=A.T
p=B.kz(s,B.U(s).c)
s=l.r
m.a=A.d.ba(s,new C.eof(p))
o=s.length
t.d1(new C.eog(m,t,l,p,r))
n=s.length-o
s=t.c.I(x.q).f
if(n>0){m=n===1?"":"s"
m="Done \u2014 added "+n+" slide"+m+". Undo brings back the old version."}else m="Done \u2014 your slides are updated. Undo brings back the old version."
s.R(B.b2(null,null,null,null,null,A.r,null,B.d(m,null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a9l,v)},
aOU(d,e){if(e){this.aeV()
return}this.ca8(d,!1)},
bGp(){return this.aOU(null,!1)},
aeV(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$aeV=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.bX(A.bX,null,new C.eqC(t),r,!0,!0,!0,A.oW,!1,!1,x.N),$async$aeV)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.eqD(t,C.hXp(s).pi()))
case 1:return B.h(u,v)}})
return B.i($async$aeV,v)},
d1(d){var w=this
if(w.pY())return
w.Hk()
w.aY8()
w.m(d)
w.JG()
w.o_()
w.p5()},
a7m(){this.d1(new C.emS(this,D.mu))},
aQi(){var w=this.gdq()
if(w==null)return
this.d1(new C.eob(this,w))},
aPu(){var w=this.e
if(w==null||w.r.length<=1)return
this.d1(new C.eo9(this))},
b1g(d,e){if(this.e==null||d===e)return
this.d1(new C.eqL(this,d,e))},
Ns(d){return this.bIn(d)},
bIn(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$Ns=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=d.w==="hati_kiapo_uongozi"?3:4
break
case 3:s=d.x
r=A.a.i(s==null?t.gOe():s)
w=5
return B.b(C.aoF(t.a.c,r),$async$Ns)
case 5:t.dy.L(0,r.toLowerCase())
case 4:s=d.a
C.aq5(s)
w=6
return B.b(C.b_Q(t.a.c,s),$async$Ns)
case 6:if(t.c==null){w=1
break}t.m(new C.eo5(t,d))
w=7
return B.b(t.tf(),$async$Ns)
case 7:case 1:return B.h(u,v)}})
return B.i($async$Ns,v)},
cld(d,e){var w=this
if(d.z){w.ahJ()
return}w.m(new C.eqK(w,d,e))
w.p5()},
jG(){var w,v,u,t,s,r=this.gdq()
if(r==null||this.r==null)return null
for(w=r.z,v=w.length,u=this.r,t=0;t<v;++t){s=w[t]
if(s.a===u)return s}return null},
VX(d){return this.ch.cg(0,d.a,new C.enW(d))},
asd(d){return this.CW.cg(0,d.a,new C.eox())},
a1o(d){var w,v,u,t=this,s=t.w
if(s!=null){w=t.WW(s)
v=t.ch.h(0,s)
if(w!=null&&v!=null&&v.a.a!==w.r)w.r=v.a.a}t.w=null
u=$.aU.ak$.d.c
if(u!=null)u.jw()},
b4B(){return this.a1o(!0)},
a1m(d){var w,v,u=this
if(u.pY())return
if(!u.zy())return
w=u.WW(d)
if(w==null||w.b!==D.cQ)return
v=A.a.i(w.r).toLowerCase()
if(v==="click to edit text"||v==="tap to edit text"||v==="double-tap to edit"){w.r=""
u.VX(w).saV(0,"")}u.m(new C.ess(u,d))
$.aU.x1$.push(new C.est(u,d,w))},
b56(d){var w=this
if(d.b===D.cQ&&!w.k6()&&w.zy()){w.a1m(d.a)
return}w.ayy(d.a)},
ayy(d){var w,v,u,t,s,r=this
if(r.k6())return
w=r.r
if(w!=null&&w!==d){v=r.WW(w)
if(v!=null&&v.b===D.cQ){u=r.ch.h(0,w)
if(u!=null&&u.a.a!==v.r)v.r=u.a.a}}t=r.w
s=t!=null&&t!==d
r.m(new C.erS(r,s,d))
if(s||d==null){t=$.aU.ak$.d.c
if(t!=null)t.jw()}},
aLc(){this.d1(new C.emT(this))},
oM(d){return this.bxB(d)},
bxB(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$oM=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(t.nS(),$async$oM)
case 3:s=f
if(!s){w=1
break}if(t.c==null){w=1
break}t.d1(new C.emQ(t,d))
case 1:return B.h(u,v)}})
return B.i($async$oM,v)},
V5(){var w=0,v=B.j(x.H),u,t=this,s
var $async$V5=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A4.G9(78,1920),$async$V5)
case 3:s=e
if(s==null||t.gdq()==null){w=1
break}t.d1(new C.emG(t,s))
case 1:return B.h(u,v)}})
return B.i($async$V5,v)},
V_(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$V_=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.gdq()==null){w=1
break}w=3
return B.b(S.Cr(t.a.c),$async$V_)
case 3:s=e
if(t.c==null){w=1
break}r=J.a5(s)
if(r.gam(s)){t.c.I(x.q).f.R(D.eQ0)
w=1
break}w=r.gM(s)===1?4:6
break
case 4:q=r.gK(s)
w=5
break
case 6:r=t.c
r.toString
w=7
return B.b(B.bX(null,null,new C.emD(s),r,!0,!0,!1,null,!1,!1,x.ei),$async$V_)
case 7:q=e
case 5:if(q==null||t.c==null||t.gdq()==null){w=1
break}t.d1(new C.emE(t,q))
case 1:return B.h(u,v)}})
return B.i($async$V_,v)},
ard(){var w=this,v=w.r
if(v==null||w.gdq()==null)return
if(A.d.b7(w.gdq().z,new C.eo7(v))){w.c.I(x.q).f.R(D.eP1)
return}if(w.w===v)w.a1o(!0)
w.d1(new C.eo8(w,v))},
bEF(){var w=this.jG(),v=w==null
if((v?null:w.b)===D.f_)return"Tap a design shape, then pick a color to fill it."
if((v?null:w.b)===D.cQ)return"Selected text \u2014 color applies to this text box."
return"No selection \u2014 color applies to the slide background."},
aLU(d,e){var w=this,v=w.jG(),u=w.gdq(),t=w.e
if(t==null)return
w.d1(new C.enk(w,v,d,e,t,u))},
bzc(d){return this.aLU(d,null)},
a7E(d){return this.bzk(d)},
bzk(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a7E=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=D.a5N.t(0,A.a.i(d.a))||t.Q
if(q){w=3
break}else f=q
w=4
break
case 3:w=5
return B.b(t.nS(),$async$a7E)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}s=t.jG()
if(s!=null){r=s.b
if(r===D.cQ)t.bzc(s.w>=28||s.x.gdI(0)>=A.H.gdI(0)?d.d:d.e)
else if(r===D.f_){r=d.c
t.aLU(r.j(0.88),r)}w=1
break}t.d1(new C.enp(t,d))
case 1:return B.h(u,v)}})
return B.i($async$a7E,v)},
a7D(d){return this.bzi(d)},
bzi(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a7D=B.e(function(e,f){if(e===1)return B.f(f,v)
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
return B.b(t.nS(),$async$a7D)
case 7:f=!f
case 6:case 4:if(f){w=1
break}if(t.c==null){w=1
break}t.d1(new C.enn(t,s,d,q,r))
case 1:return B.h(u,v)}})
return B.i($async$a7D,v)},
bz2(d){var w=this.gdq()
if(w==null)return
this.d1(new C.enj(this,w,d))},
a__(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a__=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(C.i3V(r),$async$a__)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.o_()
t.m(new C.eqm(t,s))
w=4
return B.b(t.tf(),$async$a__)
case 4:if(t.c!=null)t.ae3(s)
case 1:return B.h(u,v)}})
return B.i($async$a__,v)},
a9d(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a9d=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.e
if(q==null){w=1
break}t.a1o(!0)
t.o_()
s=t.c
s.toString
w=3
return B.b(C.Qz(s,q),$async$a9d)
case 3:r=e
s=t.c
if(s==null){w=1
break}s=s.I(x.q).f
s.R(B.b2(null,null,null,null,null,A.r,null,B.d(r==null?"Your video is ready. Check your downloads.":r,null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a9d,v)},
Da(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Da=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=r.e
if(m==null){w=1
break}r.o_()
t=4
w=7
return B.b(C.aOJ(m),$async$Da)
case 7:q=e
o=r.c
if(o==null){w=1
break}w=8
return B.b(C.aO8(o,q,m.b),$async$Da)
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
return B.i($async$Da,v)},
EP(d,e){return this.cxE(d,e)},
cxE(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$EP=B.e(function(f,a0){if(f===1)return B.f(a0,v)
for(;;)switch(w){case 0:h={}
if(t.pY()){w=1
break}s=d.w
if(!(s==="hati_kuhowa"||s==="hati_kuhoweya")){w=1
break}h.a=d
if(e){s=t.e
s=s!=null&&s.a===d.a}else s=!1
if(s){t.a1o(!0)
t.o_()
s=h.a=t.e.hA()}else{r=A.d.ba(t.d,new C.esB(d))
s=h.a=r>=0?t.d[r].hA():d.hA()}s=s.w
q=s==null
p=C.hYn(q?"":s)
o=C.hgF(q?"":s)
if(p.length===0){w=1
break}s=t.d
q=B.U(s).k("a2<1>")
n=B.B(new B.a2(s,new C.esC(h,p),q),q.k("J.E"))
s=h.a.b
w=3
return B.b(t.cqY(n.length,o,s),$async$EP)
case 3:m=a0
if(m==null||t.c==null){w=1
break}h.b=null
h.c=!1
w=m==="new"?4:6
break
case 4:s=h.b=C.hYh(h.a)
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
return B.b(t.cqX(n,o),$async$EP)
case 10:a0=g.a=a0
w=8
break
case 9:a0=l
case 8:if(a0==null||t.c==null){w=1
break}k=A.d.iC(t.d,new C.esD(s))
s=h.a.b
w=11
return B.b(t.cqV(k.b,s),$async$EP)
case 11:if(a0!==!0||t.c==null){w=1
break}s=h.b=k.hA()
case 5:j=C.hYm(s,h.a)
s=j.b
if(s===0&&j.a===0&&j.c===0){h=t.c
if(h==null){w=1
break}h.I(x.q).f.R(D.eQb)
w=1
break}w=12
return B.b(t.cqW(j.a,s,o,j.c),$async$EP)
case 12:i=a0
if(t.c==null){w=1
break}t.m(new C.esE(h,t,i))
t.p5()
case 1:return B.h(u,v)}})
return B.i($async$EP,v)},
cqY(d,e,f){var w=this.c
w.toString
return B.bX(A.K,null,new C.es7(this,e,f,d),w,!0,!0,!0,null,!1,!1,x.N)},
cqX(d,e){var w=this.c
w.toString
return B.bX(A.K,null,new C.es6(this,e,d),w,!0,!0,!0,null,!1,!1,x.N)},
cqV(d,e){var w=this.c
w.toString
return B.bX(A.K,null,new C.es0(this,e,d),w,!0,!0,!0,null,!1,!1,x.y)},
cqW(d,e,f,g){var w=this.c
w.toString
return B.bX(A.K,null,new C.es2(this,f,e,d,g),w,!0,!0,!0,null,!1,!1,x.y)},
aaF(){var w=null
return B.av(B.p(w,w,A.f,w,w,new B.o(A.b2,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w)},
aaG(d,e,f,g){var w,v,u=null,t=B.m(16),s=B.aq(d,A.bX,0.35)
s.toString
s=B.a([d,s],x.O)
w=B.a([new B.ac(0,A.G,d.j(0.28),A.dk,18)],x.V)
v=x.p
return B.A(B.a([B.p(u,B.W(e,A.c,u,u,u,28),A.f,u,u,new B.o(u,u,u,t,w,new B.a8(A.ax,A.aC,A.x,s,u,u),A.n),u,54,u,u,u,u,u,54),A.eB,B.D(B.v(B.a([B.d(g,u,u,u,u,u,u,D.f_k,u,u,u),A.an,B.d(f,u,u,u,u,u,u,B.l(u,u,A.c.j(0.58),u,u,u,u,u,u,u,u,13.5,u,u,A.a4,u,1.35,!0,u,u,u,u,u,u,u,u),u,u,u)],v),A.F,u,A.e,A.j,0,A.p),1)],v),A.F,u,A.e,A.j,0,u,u)},
aTw(d,e){var w=null,v=e.j(0.14),u=B.m(12),t=B.I(e.j(0.22),A.q,1)
return B.p(w,B.d(d,w,2,A.a2,w,w,w,A.Td,A.L,w,w),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.bS,w,w,w)},
aTz(d,e,f,g,h,i,j){var w=null,v=B.m(16),u=B.m(16),t=g?new B.a8(A.ax,A.aC,A.x,B.a([d.j(0.22),d.j(0.08)],x.O),w,w):w,s=g?w:A.c.j(0.05),r=B.I(g?d.j(0.45):A.c.j(0.08),A.q,1),q=d.j(g?0.22:0.14),p=B.m(13),o=x.p
return B.aG(!1,A.a1,!0,w,B.aL(!1,v,!0,B.p(w,B.A(B.a([B.p(w,B.W(f,d,w,w,w,22),A.f,w,w,new B.o(q,w,w,p,w,w,A.n),w,44,w,w,w,w,w,44),A.bf,B.D(B.v(B.a([B.d(i,w,w,w,w,w,w,A.np,w,w,w),A.cX,B.d(h,w,w,w,w,w,w,B.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,12.5,w,w,A.a4,w,1.25,!0,w,w,w,w,w,w,w,w),w,w,w)],o),A.F,w,A.e,A.j,0,A.p),1),B.W(A.Bd,A.c.j(0.35),w,w,w,14)],o),A.m,w,A.e,A.j,0,w,w),A.f,w,w,new B.o(s,w,r,u,w,t,A.n),w,w,w,w,A.bC,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.ep0(e,j),w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ag)},
bVf(d,e,f,g,h,i){return this.aTz(d,e,f,!1,g,h,i)},
aty(d,e){var w=null,v=A.c.j(0.05),u=B.m(14),t=B.I(A.c.j(0.08),A.q,1)
return B.p(w,B.v(B.a([B.d(e,w,w,w,w,w,w,A.du,w,w,w),A.bA,B.d(d,w,w,w,w,w,w,B.l(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,11,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.Yg,w,w,w)},
aTy(d,e,f){var w=null,v=B.bk(A.c.j(0.08),w,w,w,A.c,w,A.cf,w,new B.b7(B.m(14),A.Y),w,w,w)
return B.bJ(B.d(e,w,w,w,w,w,w,A.nn,w,w,w),new C.ep_(d,f),v)},
aTx(d,e){return this.aTy(d,e,null)},
Jx(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$Jx=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
s=t.a
w=3
return B.b(B.oX(l,s.c,s.d),$async$Jx)
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
for(l=A.d.gaf(o.z),n=new B.fk(l,new C.erT());n.C();){m=l.gU(0).r
if(A.a.i(m).length!==0){m="  \u2022 "+B.aK(m,"\n"," ")+"\n"
q.a+=m}}l=o.c
if(A.a.i(l).length!==0)q.a+="  Notes: "+l+"\n"
l=q.a+="\n"}w=4
return B.b(B.a97(l.charCodeAt(0)==0?l:l,r.b),$async$Jx)
case 4:l=t.a
w=5
return B.b(B.oW(l.c,l.d),$async$Jx)
case 5:case 1:return B.h(u,v)}})
return B.i($async$Jx,v)},
HF(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$HF=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.c
q.toString
s=t.a
w=3
return B.b(B.oX(q,s.c,s.d),$async$HF)
case 3:if(!e||t.c==null){w=1
break}r=t.e
if(r==null){w=1
break}w=4
return B.b(B.a97(A.R.ao(r.ae(),null),r.b+".json"),$async$HF)
case 4:q=t.a
w=5
return B.b(B.oW(q.c,q.d),$async$HF)
case 5:case 1:return B.h(u,v)}})
return B.i($async$HF,v)},
b4o(){var w,v,u=this,t=u.e
if(t==null||t.r.length===0)return
u.o_()
u.tf()
w=u.c
w.toString
v=B.e7(new C.esr(u,t),!1,null,x.z)
B.a6(w,!1).c6(v)},
GT(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$GT=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.nS(),$async$GT)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}w=4
return B.b(C.fAK(),$async$GT)
case 4:s=e
if(s==null||t.e==null||t.c==null){w=1
break}r=C.i09(s.a)
q=t.c
q.toString
w=5
return B.b(B.bX(A.aB,null,new C.emL(s,r),q,!0,!0,!1,null,!1,!1,x.N),$async$GT)
case 5:p=e
if(p==null){w=1
break}if(p==="scroll"){t.d1(new C.emM(t,s))
w=1
break}if(p==="split")t.d1(new C.emN(t,r,s))
case 1:return B.h(u,v)}})
return B.i($async$GT,v)},
MO(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$MO=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.pY()){w=1
break}w=3
return B.b(t.nS(),$async$MO)
case 3:if(!e){w=1
break}s=t.c
if(s==null){w=1
break}w=4
return B.b(C.aOI(s,null,null),$async$MO)
case 4:r=e
if(r==null||t.gdq()==null){w=1
break}t.d1(new C.emR(t,r))
case 1:return B.h(u,v)}})
return B.i($async$MO,v)},
b13(d){var w=this.e
if(w==null||!C.kr(w.w)||w.as!=null)return
w.as=d.b
w.at=d.c.l()},
aNb(){var w,v,u,t,s=this.c
s.toString
w=this.e
v=w==null
u=v?null:w.as
t=v?null:w.at
return C.aOI(s,t==null?null:B.b0(t),u)},
a7k(d){return this.bxs(d)},
bxs(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a7k=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.pY()){w=1
break}if(!t.zy()){s=t.c
if(s==null){w=1
break}s.I(x.q).f.R(D.eQq)
w=1
break}w=3
return B.b(t.aNb(),$async$a7k)
case 3:r=f
if(r==null||t.gdq()==null){w=1
break}t.d1(new C.emI(t,r,d))
case 1:return B.h(u,v)}})
return B.i($async$a7k,v)},
afF(d){return this.ck_(d)},
ck_(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$afF=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.pY()){w=1
break}if(!t.zy()){s=t.c
if(s==null){w=1
break}s.I(x.q).f.R(D.ePz)
w=1
break}w=3
return B.b(t.aNb(),$async$afF)
case 3:r=f
if(r==null||t.gdq()==null){w=1
break}t.d1(new C.eqI(t,r,d))
case 1:return B.h(u,v)}})
return B.i($async$afF,v)},
c6Q(){var w,v,u=this
if(u.k6())return
w=new B.S(Date.now(),0,!1)
v=u.fx
v=v!=null&&w.by(v).a<=5e5?++u.fr:u.fr=1
u.fx=w
if(v>=3){u.fr=0
u.fx=null
u.cwG()}},
cwG(){var w,v,u,t,s,r=this.gdq()
if(r==null)return
v=r.z
u=v.length
t=0
for(;;){if(!(t<u)){w=null
break}s=v[t]
if(s.db==="marriage_locked_nim_akuna_deni"){w=s
break}++t}if(w==null)return
this.d1(new C.esz(this,r,(A.o.aA(w.Q,24)&255)===0||A.a.i(w.r).length===0))},
bVA(){var w,v,u,t,s,r=this.gdq()
if(r==null)return
for(w=r.z,v=w.length,u=null,t=0;t<v;++t){s=w[t]
if(s.db==="marriage_locked_nim_n_4")u=s}if(u==null)return
this.d1(new C.ep3(this,r,u.d))},
c_7(d){var w
if(this.k6())return!1
w=this.e
if((w==null?null:C.kr(w.w))!==!0)return!0
w=d.db
if(w==="marriage_locked"||A.a.a0(w,"marriage_locked_"))return!1
if(A.a.a0(w,"marriage_field_"))return!1
if(C.fxl(d))return!1
w=d.db
if(w==="__kiapo_video__"||A.a.a0(w,"__kiapo_video___"))return!1
if(d.b===D.kS&&A.a.a0(w,"marriage_sign_"))return!1
return!1},
c_8(d){var w
if(this.k6())return!1
w=this.e
if((w==null?null:C.kr(w.w))!==!0)return!0
if(!this.zy())return!1
w=d.db
if(w==="marriage_locked"||A.a.a0(w,"marriage_locked_"))return!1
if(C.fxl(d))return!1
w=d.db
if(w==="__kiapo_video__"||A.a.a0(w,"__kiapo_video___"))return!1
if(d.b===D.kS&&A.a.a0(w,"marriage_sign_"))return!1
return A.a.a0(w,"marriage_field_")},
MX(d){return this.bzK(d)},
bzK(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$MX=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.pY()){w=1
break}if(!t.zy()){s=t.c
if(s==null){w=1
break}s.I(x.q).f.R(D.eOp)
w=1
break}r=t.e
s=r==null
q=s?null:r.x
p=A.a.i(q==null?"":q)
if(s||p.length===0){w=1
break}w=3
return B.b(C.aoJ(p),$async$MX)
case 3:o=f
s=t.c
if(s==null){w=1
break}if(o==null||A.a.i(o).length===0){s.I(x.q).f.R(D.eP3)
w=1
break}s=t.e
if(s!==r){s=s==null?null:s.a
s=s!==r.a}else s=!1
if(s){s=r.r
n=s.length===0?null:A.d.gK(s)
if(n!=null)for(s=n.z,q=s.length,m=0;m<q;++m){l=s[m]
k=l.db
if(k==="__kiapo_video__"||A.a.a0(k,"__kiapo_video___")){l.at=o
l.db="__kiapo_video__"}}C.a6y(r)
w=1
break}t.m(new C.ent(t,d,o))
t.o_()
$.aU.x1$.push(new C.enu(t))
case 1:return B.h(u,v)}})
return B.i($async$MX,v)},
V3(){var w=0,v=B.j(x.H),u,t=this,s
var $async$V3=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.nS(),$async$V3)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}w=4
return B.b(C.bBg(),$async$V3)
case 4:s=e
if(s==null||t.gdq()==null){w=1
break}t.d1(new C.emF(t,s))
case 1:return B.h(u,v)}})
return B.i($async$V3,v)},
NG(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$NG=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.nS(),$async$NG)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}s=t.jG()
if(s==null||s.at==null){w=1
break}r=s.at
r.toString
w=4
return B.b(C.fAB(r),$async$NG)
case 4:q=e
if(q==null){w=1
break}t.d1(new C.eov(s,q))
case 1:return B.h(u,v)}})
return B.i($async$NG,v)},
iO(d){this.d1(new C.emO(this,d))},
pN(d){return this.byW(d)},
byW(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
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
break}switch(d){case"upload_pdf":t.GT()
w=1
break A
case"sign_paper":t.MO()
w=1
break A
case"hd_photo":t.V3()
w=1
break A
case"sharpen":t.NG()
w=1
break A
case"print":t.Da()
w=1
break A
case"rotate":s=t.jG()
if(s!=null)t.d1(new C.emX(s))
w=1
break A
case"text_box":t.aLc()
w=1
break A
case"picture":t.V5()
w=1
break A
case"present":t.b4o()
w=1
break A
case"new_slide":t.a7m()
w=1
break A
case"export_json":t.HF()
w=1
break A
case"outline_share":t.Jx()
w=1
break A
case"flashcard_tool":t.uV(D.Hu)
w=1
break A
case"quiz_tool":t.uV(D.Hv)
w=1
break A
case"worksheet_tool":t.uV(D.Hw)
w=1
break A
case"duplicate_el":s=t.jG()
if(s==null){w=1
break A}t.d1(new C.emY(t,s))
w=1
break A
case"delete_el":t.ard()
w=1
break A
case"bring_fwd":s=t.jG()
if(s==null||t.gdq()==null){w=1
break A}t.d1(new C.emZ(t,s))
w=1
break A
case"send_back":s=t.jG()
if(s==null||t.gdq()==null){w=1
break A}t.d1(new C.en9(t,s))
w=1
break A
case"align_left":s=t.jG()
if(s!=null)t.d1(new C.enc(s))
w=1
break A
case"align_center":s=t.jG()
if(s!=null)t.d1(new C.end(s))
w=1
break A
case"align_right":s=t.jG()
if(s!=null)t.d1(new C.ene(s))
w=1
break A
case"grayscale":case"brighten":t.NG()
w=1
break A
case"flip_h":s=t.jG()
if(s!=null)t.d1(new C.enf(s))
w=1
break A
case"flip_v":s=t.jG()
if(s!=null)t.d1(new C.eng(s))
w=1
break A
case"rectangle":t.oM(D.be)
w=1
break A
case"circle":t.oM(D.eI)
w=1
break A
case"triangle":t.oM(D.jE)
w=1
break A
case"arrow":t.oM(D.Ci)
w=1
break A
case"line":case"divider":t.oM(D.fp)
w=1
break A
case"word_count":r=t.gdq()
if(r==null){w=1
break A}for(q=A.d.gaf(r.z),p=new B.fk(q,new C.enh()),o=0;p.C();){n=A.a.fz(A.a.i(q.gU(0).r),B.af("\\s+",!0,!1,!1,!1))
o+=new B.a2(n,new C.eni(),B.U(n).k("a2<1>")).gM(0)}t.c.I(x.q).f.R(B.b2(null,null,null,null,null,A.r,null,B.d(""+o+" words on this slide",null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
w=1
break A
case"title":q=C.cC()
t.iO(C.iR(A.L,!1,t.gq2().d.l(),A.aD,40,A.bl,A.u,0.18,q,"Presentation Title",0,D.mv,0.8,0.1,0.28))
w=1
break A
case"subtitle":q=C.cC()
t.iO(C.iR(A.L,!1,t.gq2().e.l(),A.aD,22,A.bl,A.a4,0.12,q,"Subtitle goes here",0,D.dd,0.8,0.1,0.48))
w=1
break A
case"bullets":t.iO(C.iR(A.bg,!0,4279310375,A.aD,20,A.bl,A.a4,0.5,C.cC(),"\u2022 First point\n\u2022 Second point\n\u2022 Third point",0,D.u8,0.8,0.1,0.22))
w=1
break A
case"numbered":t.iO(C.iR(A.bg,!1,4279310375,A.aD,20,A.bl,A.a4,0.5,C.cC(),"1. First item\n2. Second item\n3. Third item",0,D.u7,0.8,0.1,0.22))
w=1
break A
case"quote":t.iO(C.iR(A.L,!1,4279310375,A.aD,24,A.cD,A.a4,0.25,C.cC(),'"Insert meaningful quote here."',0,D.dd,0.8,0.1,0.3))
w=1
break A
case"citation":t.iO(C.iR(A.bg,!1,4284773515,A.aD,14,A.bl,A.a4,0.1,C.cC(),"Author, Title (Year). Publisher.",0,D.u8,0.8,0.1,0.78))
w=1
break A
case"date_stamp":t.iO(C.iR(A.dL,!1,4279310375,A.aD,14,A.bl,A.a4,0.08,C.cC(),C.bBi(),0,D.dd,0.24,0.72,0.04))
w=1
break A
case"page_number":t.iO(C.iR(A.dL,!1,4279310375,A.aD,13,A.bl,A.a4,0.06,C.cC(),"Page "+(t.f+1),0,D.dd,0.18,0.78,0.9))
w=1
break A
case"header_bar":t.d1(new C.en_(t))
w=1
break A
case"footer_bar":t.d1(new C.en0(t))
w=1
break A
case"highlight":t.d1(new C.en1(t))
w=1
break A
case"redact":t.d1(new C.en2(t))
w=1
break A
case"callout":t.d1(new C.en3(t))
w=1
break A
case"checkboxes":t.iO(C.iR(A.bg,!1,4279310375,A.aD,20,A.bl,A.a4,0.45,C.cC(),"\u2610 Task one\n\u2610 Task two\n\u2610 Task three",0,D.dd,0.8,0.1,0.2))
w=1
break A
case"table":t.iO(C.iR(A.bg,!1,4279310375,A.aD,16,A.bl,A.a4,0.55,C.cC(),"Column A\tColumn B\tColumn C\nRow 1\tData\tData\nRow 2\tData\tData",0,D.dd,0.8,0.1,0.18))
w=1
break A
case"memo":t.d1(new C.en4(t))
w=1
break A
case"letter":t.iO(C.iR(A.bg,!1,4279179050,A.aD,17,A.bl,A.a4,0.82,C.cC(),C.bBi()+"\n\nDear [Name],\n\n[Letter body]\n\nSincerely,\n[Your name]",0,D.dd,0.8,0.1,0.08))
w=1
break A
case"agenda":t.iO(C.iR(A.bg,!1,4279310375,A.aD,22,A.bl,A.O,0.76,C.cC(),"AGENDA\n\n1. Welcome\n2. Updates\n3. Discussion\n4. Action items\n5. Next steps",0,D.u8,0.8,0.1,0.12))
w=1
break A
case"toc":t.iO(C.iR(A.bg,!1,4279310375,A.aD,18,A.bl,A.a4,0.76,C.cC(),"TABLE OF CONTENTS\n\n1. Introduction .......... 1\n2. Main topic .......... 3\n3. Conclusion .......... 8",0,D.dd,0.8,0.1,0.12))
w=1
break A
case"sig_line":t.iO(C.iR(A.bg,!1,4279310375,A.aD,16,A.bl,A.a4,0.08,C.cC(),"Signature: _________________________",0,D.dd,0.8,0.1,0.78))
w=1
break A
case"initial_line":t.iO(C.iR(A.bg,!1,4279310375,A.aD,16,A.bl,A.a4,0.08,C.cC(),"Initials: ______",0,D.dd,0.3,0.65,0.78))
w=1
break A
case"approved":t.iO(C.iR(A.L,!1,4278556265,A.aD,28,A.bl,A.u,0.12,C.cC(),"APPROVED",0,D.mv,0.32,0.62,0.08))
w=1
break A
case"draft":t.iO(C.iR(A.L,!1,4292617766,A.aD,28,A.bl,A.u,0.12,C.cC(),"DRAFT",0,D.dd,0.32,0.62,0.08))
w=1
break A
case"confidential":t.iO(C.iR(A.L,!1,871318596,A.aD,36,A.bl,A.u,0.12,C.cC(),"CONFIDENTIAL",0,D.dd,0.8,0.1,0.42))
w=1
break A
case"sticky":t.d1(new C.en5(t))
w=1
break A
case"progress":t.d1(new C.en6(t))
w=1
break A
case"stars":t.iO(C.iR(A.L,!1,4279310375,A.aD,36,A.bl,A.a4,0.12,C.cC(),"\u2605\u2605\u2605\u2605\u2606",0,D.q0,0.8,0.1,0.4))
w=1
break A
case"equation":t.iO(C.iR(A.L,!1,4279310375,A.aD,32,A.bl,A.O,0.14,C.cC(),"y = mx + b",0,D.dd,0.8,0.1,0.38))
w=1
break A
case"timeline":t.iO(C.iR(A.L,!1,4279310375,A.aD,18,A.bl,A.a4,0.2,C.cC(),"2024 \u2500\u2500\u25ba 2025 \u2500\u2500\u25ba 2026\nPhase 1    Phase 2    Phase 3",0,D.u7,0.8,0.1,0.35))
w=1
break A
case"two_col":t.d1(new C.en7(t))
w=1
break A
case"compare":t.d1(new C.en8(t))
w=1
break A
case"link_text":t.iO(C.iR(A.bg,!1,4280640491,A.mA,16,A.bl,A.a4,0.1,C.cC(),"https://example.com",0,D.dd,0.8,0.1,0.5))
w=1
break A
case"phone":t.iO(C.iR(A.bg,!1,4279310375,A.aD,18,A.bl,A.a4,0.1,C.cC(),"(555) 123-4567",0,D.dd,0.8,0.1,0.5))
w=1
break A
case"email":t.iO(C.iR(A.bg,!1,4280640491,A.aD,18,A.bl,A.a4,0.1,C.cC(),"name@email.com",0,D.dd,0.8,0.1,0.5))
w=1
break A
case"qr_placeholder":t.d1(new C.ena(t))
w=1
break A
case"cover_page":r=t.gdq()
if(r==null){w=1
break A}t.d1(new C.enb(t,r))
w=1
break A
case"invoice":t.iO(C.iR(A.bg,!1,4279179050,A.aD,16,A.bl,A.a4,0.84,C.cC(),"INVOICE #001\n\nBill To:\nItem\tQty\tPrice\nService A\t1\t$100\nTOTAL\t\t$100",0,D.dd,0.8,0.1,0.08))
w=1
break A
case"resume":t.iO(C.iR(A.bg,!1,4279179050,A.aD,17,A.bl,A.a4,0.84,C.cC(),"YOUR NAME\nJob Title\n\nExperience\n\u2022 Role at Company\n\nEducation\n\u2022 Degree",0,D.dd,0.8,0.1,0.08))
w=1
break A
case"minutes":t.iO(C.iR(A.bg,!1,4279310375,A.aD,16,A.bl,A.a4,0.88,C.cC(),"MEETING MINUTES\nDate: "+C.bBi()+"\nAttendees:\n\nDiscussion:\n\nDecisions:\n\nAction items:",0,D.dd,0.8,0.1,0.06))
w=1
break A
case"lab_report":t.iO(C.iR(A.bg,!1,4279310375,A.aD,17,A.bl,A.a4,0.88,C.cC(),"LAB REPORT\n\nHypothesis:\n\nProcedure:\n\nResults:\n\nConclusion:",0,D.dd,0.8,0.1,0.06))
w=1
break A
case"rubric":t.iO(C.iR(A.bg,!1,4279310375,A.aD,15,A.bl,A.a4,0.8,C.cC(),"RUBRIC\nCriteria\tExcellent\tGood\tNeeds work\nContent\t4\t3\t2\nOrganization\t4\t3\t2",0,D.dd,0.8,0.1,0.1))
w=1
break A}case 1:return B.h(u,v)}})
return B.i($async$pN,v)},
cqp(d){if(!this.y)return!1
if(this.w!=null)return!1
if(!d)return!0
return!D.eHi.t(0,this.z)},
cqo(d){if(this.jG()==null)return!1
if(this.w!=null)return!1
if(d)return!1
return this.as},
b5X(d,e,f,g,h,i){var w,v,u,t,s,r,q,p=null,o=d===D.cg,n=o?12:10
if(e)w=f.j(0.25)
else w=g?A.c.j(0.06):A.w.j(0.04)
v=B.m(12)
u=e?f:A.bF
u=B.I(u,A.q,o&&e?2:1)
t=C.i_Z(d)
s=o?12:18
r=o?A.H:A.cN
if(o)if(e)q=f
else q=g?A.ad:A.ak
else q=p
n=B.a([B.p(p,B.d(t,p,p,p,p,p,p,B.l(p,p,q,p,p,p,p,p,p,p,p,s,p,p,r,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),A.f,p,p,new B.o(w,p,u,v,p,p,A.n),p,p,p,p,new B.Q(n,8,n,8),p,p,p)],x.p)
if(i)n.push(B.ao(p,B.p(p,D.Nm,A.f,p,p,D.DC,p,12,p,p,p,p,p,12),p,p,p,-2,-2,p))
return new B.C(A.fx,B.aE(p,new B.an(A.W,p,A.aa,A.f,n,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,h,p,p,p,p,p,p,!1,A.a8),p)},
bKW(d){var w,v=null,u=this.jG()
if(u==null)return A.bH
w=B.a([A.ab,B.d("Anim:",v,v,v,v,v,v,B.l(v,v,d?A.az:A.ak,v,v,v,v,v,v,v,v,10,v,v,A.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.bp],x.p)
A.d.v(w,new B.K(D.PP,new C.eou(this,u,d),x.bR))
return B.A(w,A.m,v,A.e,A.j,0,v,v)},
uV(d){return this.bxA(d)},
bxA(d){var w=0,v=B.j(x.H),u,t=this,s
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
break}t.d1(new C.emP(t,d))
case 1:return B.h(u,v)}})
return B.i($async$uV,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
if(h.x)return D.eG4
w=h.e
if(w==null)return h.bBo()
v=h.gdq()
v.toString
u=h.c
u.toString
t=B.P(u).ax.a===A.I
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
m=t?A.bX:D.b8G
l=x.p
k=B.a([],l)
if(s){j=h.e
j=j!=null&&j.gRF()}else j=!1
if(j)k.push(new C.a72(h.a.c,!1,h.e.gb88(),h.gc6N(),g))
else if(s&&h.e!=null&&!h.k6()&&C.cd_(h.e.w)){j=h.a
k.push(new C.a72(j.c,j.d,g,h.gc7W(),g))}if(s)k.push(h.bKS(w,t,r))
if(s&&h.k6()){w=t?A.fm:A.ke
j=B.m(14)
i=B.I(A.bj.j(0.35),A.q,1)
k.push(B.p(g,B.A(B.a([D.bIV,A.ab,B.D(B.d("Received copy \u2014 view, print, or download only. Editing is turned off.",g,g,g,g,g,g,B.l(g,g,t?A.c:A.fm,g,g,g,g,g,g,g,g,12,g,g,A.O,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),1)],l),A.m,g,A.e,A.j,0,g,g),A.f,g,g,new B.o(w,g,i,j,g,g,A.n),g,g,g,A.AG,A.ix,g,g,g))}w=!n
if(w&&!h.k6())k.push(h.c03(t,r))
if(w&&h.k6())k.push(h.cxF(t))
if(r&&h.jG()!=null&&w&&!h.k6())k.push(h.c0_(t))
j=B.a([],l)
if(q&&w)j.push(new B.a7(132,g,h.b3U(t,!0),g))
i=B.a([],l)
if(r&&w)i.push(new B.a7(g,72,h.b3U(t,!1),g))
i.push(B.D(new B.bH(A.b0,g,g,h.bCG(v,t,!s||p),g),1))
if(h.cqp(r)&&u&&s&&!h.k6())i.push(h.c6B(v,t,r))
j.push(B.D(B.v(i,A.m,g,A.e,A.j,0,A.p),1))
if(q&&!h.k6()&&h.cqo(!1))j.push(new B.a7(240,g,h.bNr(t),g))
k.push(B.D(B.A(j,A.aj,g,A.e,A.j,0,g,g),1))
if(u&&s)k.push(new B.a7(g,r?72:h.a.e,g,g))
w=B.a([B.v(k,A.m,g,A.e,A.j,0,A.p)],l)
if(o&&r)w.push(h.c00(t))
return B.c8(g,m,B.bm(!1,new B.an(A.W,g,A.aa,A.r,w,g),!0,!1,A.af,!0,!0),g,!1,!1,g,!1)},
bBo(){var w,v,u,t,s,r=this,q=null,p=r.c
p.toString
w=B.P(p).ax.a===A.I
p=w?A.bX:A.bM
v=r.a.e
u=r.c5R(A.bj,A.pG,new C.enx(r),r.gca5(),"School & document toolkit \u2014 edit PDFs, photos, sign papers, present, and build class decks","NGMY SLIDES")
t=x.p
s=B.A(B.a([B.D(r.aKW(A.bj,A.hx,"Blank Presentation",new C.eny(r)),1),A.av,B.D(r.aKW(A.aZ,A.y2,"Class Template",new C.enz(r)),1)],t),A.m,q,A.e,A.j,0,q,q)
u=B.a([u,A.bx,s,A.mz,B.d("YOUR PRESENTATIONS",q,q,q,q,q,q,B.l(q,q,w?A.az:A.ak,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1.2,q,q,q,q,q,q),q,q,q),A.ac],t)
t=r.d
if(t.length===0)u.push(r.byo(w))
else{t=new B.hX(t,B.U(t).k("hX<1>"))
A.d.v(u,t.gdK(t).dt(0,new C.enA(r,w),x.l))}return B.c8(q,p,B.bm(!1,B.cB(u,q,new B.Q(18,12,18,v),q,q,A.ah,!1),!0,!1,A.af,!0,!0),q,!1,!1,q,q)},
bJb(){this.m(new C.eoa(this))
var w=this.c
w.toString
if(B.aI(w,A.bT,x.w).w.a.a<900){w=$.aU.ak$.d.c
if(w!=null)w.jw()}},
aem(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$aem=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.jG()==null){w=1
break}s=t.c
s.toString
s=B.P(s)
r=t.c
r.toString
w=3
return B.b(B.bX(A.K,null,new C.eql(t,s.ax.a===A.I),r,!0,!0,!0,null,!1,!1,x.H),$async$aem)
case 3:case 1:return B.h(u,v)}})
return B.i($async$aem,v)},
Aw(d,e){return this.cqL(d,e)},
cqL(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$Aw=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:j=r.c
j.toString
w=3
return B.b(B.hR(D.VT,!0,"Dismiss",j,new C.erU(),new C.erV(d,e),A.iv,!0,x.N),$async$Aw)
case 3:o=g
if(o==null||r.c==null){w=1
break}j=o==="rename"
if(j||o==="duplicate")if(d.z){r.ahJ()
w=1
break}n=o==="transfer_hati"
if(n&&d.z&&!d.gRF()){r.ahJ()
w=1
break}w=o==="pdf"?4:6
break
case 4:t=8
w=11
return B.b(C.aOJ(d),$async$Aw)
case 11:q=g
j=r.c
if(j==null){w=1
break}w=12
return B.b(C.aO8(j,q,d.b),$async$Aw)
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
return B.b(r.EP(d,!1),$async$Aw)
case 16:w=14
break
case 15:w=o==="delete"?17:19
break
case 17:j=r.c
j.toString
w=20
return B.b(B.hR(D.VT,!0,"Dismiss",j,new C.erW(),new C.erX(d),A.a1,!0,x.y),$async$Aw)
case 20:if(g===!0)r.Ns(d)
w=18
break
case 19:w=j?21:23
break
case 21:w=24
return B.b(r.afp("Rename presentation",d.b),$async$Aw)
case 24:l=g
if(l!=null)r.cld(d,l)
w=22
break
case 23:if(o==="duplicate"){k=d.ae()
k.n(0,"id",C.cC())
k.n(0,"name",d.b+" (Copy)")
r.m(new C.erY(r,k))
r.p5()}case 22:case 18:case 14:case 5:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Aw,v)},
aZZ(d,e){var w=null
return B.bK(!1,D.fnv,w,w,!0,w,w,e,w,B.fv(w,w,w,w,w,w,w,w,w,w,w,A.bj,w,w,w,A.au,w,A.lH,w,w,w,w,w,A.km,w,w))},
byo(d){var w=this.fy
w===$&&B.c()
return B.c6(w,new C.emU(this,d),null)},
bHj(d,e,f){var w=new B.K(B.a(d.split(" \u2022 "),x.s),new C.enZ(),x.dv).c_(0,new C.eo_()),v=B.B(w,w.$ti.k("J.E"))
return new B.C(G.afU,this.aLu(v,e,new C.eo0(),f),null)},
aLu(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=x.p,l=B.a([],m)
for(w=f!=null,v=0;v<d.length;++v){u=B.a([],m)
if(v>0)u.push(A.eb)
t=e.j(g?0.14:0.1)
s=new B.aW(6,6)
r=new B.aA(e.j(g?0.55:0.45),1,A.q,-1)
q=B.a([],m)
if(w){p=f.$1(d[v])
A.d.v(q,B.a([B.W(p,g?A.ad:A.bv,n,n,n,10),A.q7],m))}p=d[v]
o=g?A.c.j(0.85):A.aK
q.push(new B.x(p,n,new B.G(!0,o,n,n,n,n,9.5,A.H,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n,n,n,n,1,n,n))
u.push(B.p(n,new B.cm(A.aO,A.e,A.Q,A.m,n,A.p,n,0,q,n),A.f,n,n,new B.o(t,n,new B.bP(r,r,r,r),new B.bq(s,s,s,s),n,n,A.n),n,n,n,n,A.n6,n,n,n))
A.d.v(l,u)}return B.f2(A.a3,B.A(l,A.m,n,A.e,A.Q,0,n,n),A.f,A.eg)},
bym(d,e,f){return this.aLu(d,e,null,f)},
bHl(d,e,f){var w,v=d.w
if(v==="hati_kuhowa")w=D.d8s
else if(v==="hati_kuhoweya")w=D.cVV
else{if(v==="hati_kiapo_uongozi")v=D.cJd
else v=C.kr(v)?D.cQ5:A.Pq
w=v}v=this.fy
v===$&&B.c()
return B.c6(v,new C.eo3(this,f,d,e,w),null)},
c00(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.jG()
if(i==null||i.b!==D.cQ)return A.bH
w=k.VX(i)
v=k.asd(i)
u=A.w.j(0.55)
t=x.p
s=B.bm(!1,new B.C(A.AJ,B.A(B.a([B.d("Edit text",j,j,j,j,j,j,B.l(j,j,A.c.j(0.9),j,j,j,j,j,j,j,j,15,j,j,A.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),A.b4,B.bK(!1,D.fjg,j,j,!0,j,j,new C.epu(k),j,j)],t),A.m,j,A.e,A.j,0,j,j),j),!0,!1,A.af,!0,!0)
r=d?A.aB:A.c
q=B.m(18)
p=B.I(A.bj.j(0.45),A.q,1)
o=B.a([new B.ac(0,A.G,A.w.j(0.25),A.J,20)],x.V)
n=i.x
m=i.y
l=i.z
r=B.D(new B.C(A.h6,B.c_(new B.C(A.eP,B.aM(j,A.T,!0,j,!0,A.r,j,B.aN(),w,A.bj,j,j,j,j,2,D.bOO,A.y,!0,j,!0,j,!0,v,A.ai,j,j,j,j,j,A.w3,j,j,j,j,j,j,!1,"\u2022",j,new C.epv(k,i),j,j,j,!1,j,j,!1,j,!0,j,A.a9,j,j,j,j,j,j,j,j,j,j,j,B.l(j,j,d?A.c:A.M,j,l,j,j,j,j,j,j,18,m,j,n,j,1.35,!0,j,j,j,j,j,j,j,j),!0,A.a5,A.ze,A.am,j,A.SB,j,j),j),new B.o(r,j,p,q,o,j,A.n),A.bd),j),1)
q=B.m(16)
p=d?A.bm:A.c
o=B.I(d?A.aK:A.aL,A.q,1)
n=B.D(B.cd(B.A(B.a([k.tE(G.Mm,j,new C.epw(k,i),d),k.tE(G.Zq,j,new C.epx(k,i),d),k.tE(I.aka,j,new C.epy(k,i),d),k.tE(I.a_6,j,new C.epz(k,i),d),k.tE(k.byk(i.as),j,new C.epA(k,i),d),k.tE(D.alm,j,new C.epB(k,i),d),k.tE(D.all,j,new C.epC(k,i),d)],t),A.m,j,A.e,A.j,0,j,j),A.r,j,A.y,j,j,j,j,A.aO),1)
m=A.k.N(i.w)
return B.bY(0,B.aG(!1,A.a1,!0,j,B.v(B.a([s,r,new B.C(O.ag2,B.p(j,B.A(B.a([n,A.ab,B.d(""+m+" pt",j,j,j,j,j,j,B.l(j,j,d?A.az:A.ak,j,j,j,j,j,j,j,j,11,j,j,A.H,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),A.d8],t),A.m,j,A.e,A.j,0,j,j),A.f,j,j,new B.o(p,j,o,q,j,j,A.n),j,j,j,j,A.l9,j,j,j),j)],t),A.m,j,A.e,A.j,0,A.p),A.f,u,0,j,j,j,j,j,A.ag),0,0,0)},
c0_(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.jG()
if(m==null)return A.bH
w=m.b
v=w===D.cQ
u=B.m(18)
t=x.O
t=d?B.a([A.bm,A.M],t):B.a([A.c,A.aQ],t)
s=B.I(d?A.aK:A.aL,A.q,1)
r=B.a([new B.ac(0,A.G,A.w.j(0.12),A.cw,16)],x.V)
q=x.p
p=B.a([],q)
if(v)p.push(o.b2y(A.jg,"Edit",new C.epf(o,m),d,!0))
if(w===D.lk)p.push(o.b2y(A.FX,"Shape & ring",new C.epg(o),d,!0))
p.push(o.tE(A.Bt,"Format",new C.eph(o),d))
if(v)A.d.v(p,B.a([o.tE(G.Mm,n,new C.epi(o,m),d),o.tE(D.alm,n,new C.epj(o,m),d),o.tE(D.all,n,new C.epk(o,m),d)],q))
p.push(A.b4)
p.push(o.coE(A.e4,n,o.gaPs(),d,!0))
p.push(o.tE(A.hy,"Done",new C.epl(o),d))
return B.p(n,B.A(p,A.m,n,A.e,A.j,0,n,n),A.f,n,n,new B.o(n,n,s,u,r,new B.a8(A.a3,A.a7,A.x,t,n,n),A.n),n,n,n,A.AH,A.l9,n,n,n)},
byk(d){switch(d.a){case 2:return D.a_3
case 1:case 5:return D.a_5
default:return D.a_4}},
c0R(d){switch(d.a){case 0:case 4:return A.L
case 2:return A.dL
default:return A.bg}},
ayx(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o,n=null
if(i)w=A.ay
else if(h)w=A.c
else{v=g?A.ad:A.aK
w=v}v=B.m(12)
u=B.m(12)
t=h?K.Gh:n
if(h)s=n
else s=g?A.c.j(0.06):A.bM
r=e==null
q=r?10:12
p=x.p
o=B.a([B.W(d,w,n,n,n,16)],p)
if(!r)A.d.v(o,B.a([A.eb,B.d(e,n,n,n,n,n,n,B.l(n,n,w,n,n,n,n,n,n,n,n,12,n,n,A.H,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],p))
return new B.C(A.qN,B.aG(!1,A.a1,!0,n,B.aL(!1,v,!1,B.ez(new B.C(new B.Q(q,8,q,8),B.A(o,A.m,n,A.e,A.Q,0,n,n),n),n,new B.o(s,n,n,u,n,t,A.n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,f,n,n,n,n,n,n,n),A.f,A.K,0,n,n,n,n,n,A.ag),n)},
tE(d,e,f,g){return this.ayx(d,e,f,g,!1,!1)},
b2y(d,e,f,g,h){return this.ayx(d,e,f,g,h,!1)},
coE(d,e,f,g,h){return this.ayx(d,e,f,g,!1,h)},
bKS(d,e,f){var w,v,u,t,s,r,q,p=this,o=null,n=B.m(20),m=x.O
m=e?B.a([A.bm,A.M],m):B.a([A.c,A.mM],m)
w=B.I(e?A.aK:A.pe,A.q,1.2)
v=B.a([new B.ac(0,A.G,A.bj.j(e?0.18:0.1),A.cw,18)],x.V)
u=p.a1P(A.eA,"Back",p.gbEp(),e)
t=d.b
s=f?14:15
t=B.d(t,o,1,A.a2,o,o,o,B.l(o,o,e?A.c:A.M,o,o,o,o,o,o,o,o,s,o,o,A.u,o,o,!0,o,-0.2,o,o,o,o,o,o),o,o,o)
s=p.f
r=d.r.length
q=x.p
r=B.a([u,A.d8,B.D(B.A(B.a([new B.dm(1,A.ci,t,o),A.ab,B.d(""+(s+1)+" of "+r,o,1,o,o,o,o,B.l(o,o,e?A.c_:A.ak,o,o,o,o,o,o,o,o,11,o,o,A.O,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],q),A.tj,o,A.e,A.j,0,A.cV,o),1)],q)
if(!p.k6()){u=p.a1P(A.r1,"Undo",p.ax.length===0?o:p.gcy9(),e)
A.d.v(r,B.a([u,p.a1P(D.bCw,"Redo",p.ay.length===0?o:p.gcjW(),e)],q))}r.push(p.a1P(A.xJ,"PDF",new C.eon(p),e))
r.push(p.a1P(A.hz,"Download as video",new C.eoo(p),e))
if(!p.k6())r.push(B.Br(o,o,B.W(A.nU,e?A.ad:A.bv,o,o,o,o),new C.eop(p),A.J,new C.eoq(p),A.af,"More",x.N))
r.push(A.d8)
r.push(B.aG(!1,A.a1,!0,o,B.aL(!1,B.m(14),!0,B.ez(D.e3E,o,new B.o(o,o,o,B.m(14),o,K.Gh,A.n),o,o,o),o,!0,o,o,o,o,o,o,o,o,o,o,o,p.gazm(),o,o,o,o,o,o,o),A.f,A.K,0,o,o,o,o,o,A.ag))
return B.p(o,B.A(r,A.m,o,A.e,A.j,0,o,o),A.f,o,o,new B.o(o,o,w,n,v,new B.a8(A.ax,A.aC,A.x,m,o,o),A.n),o,o,o,D.boA,D.btH,o,o,o)},
cxF(d){var w=this,v=null,u=B.m(18),t=d?A.aB.j(0.92):A.c.j(0.96),s=B.I(d?A.cC:A.aL,A.q,1)
return B.p(v,B.cd(B.A(B.a([w.iv(A.tP,"Print",new C.esF(w),d),w.iv(A.xJ,"Download PDF",new C.esG(w),d),w.iv(A.pN,"Present",w.gazm(),d)],x.p),A.m,v,A.e,A.j,0,v,v),A.r,v,A.y,v,v,v,v,A.aO),A.f,v,v,new B.o(t,v,s,u,v,v,A.n),v,v,v,A.AG,G.ahH,v,v,v)},
a1P(d,e,f,g){var w,v=null
if(f==null)w=g?A.b2:A.dn
else w=g?A.ad:A.aK
return B.aH(v,v,v,v,B.W(d,w,v,v,v,20),v,v,v,f,v,v,v,v,e,A.c7)},
c03(d,e){var w,v,u,t,s,r=this,q=null,p=B.a(["Home","Insert","School","Tools","Design","Transitions","View"],x.s),o=r.e
if(o==null)o=q
else{o=o.CW
o=(o==null?"":o).length!==0}w=o===!0
o=B.m(18)
v=d?A.aB.j(0.92):A.c.j(0.96)
u=B.I(d?A.cC:A.aL,A.q,1)
t=x.f0
t=B.B(new B.K(p,new C.epF(r,d),t),t.k("ak.E"))
t.push(new B.C(Y.ahm,new B.fh(new C.epG(r),q),q))
A.d.v(t,w?B.a([new B.C(R.vf,r.ag1(A.la,"Ending celebration",r.gcai(),d),q),new B.C(R.vf,r.ag1(A.FX,"Logo ring & frame",r.gcaZ(),d),q)],x.p):A.ha)
A.d.v(t,w?B.a([new B.C(R.vf,r.ag1(A.n9,"Look and feel",r.gcb_(),d),q),new B.C(R.vf,r.ag1(A.oH,"Edit this slide's text",r.gcbw(),d),q)],x.p):A.ha)
t.push(new B.C(R.vf,B.hp(B.aE(q,B.p(q,D.eFy,A.f,q,q,new B.o(q,q,q,B.m(999),B.a([new B.ac(0,A.G,N.l4.j(0.4),A.J,10)],x.V),D.anj,A.n),q,34,q,q,A.fT,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.epH(r),q,q,q,q,q,q,!1,A.a8),q,"Books \u2014 write and print a fold & staple book",q,q),q))
t=B.cd(B.A(t,A.m,q,A.e,A.j,0,q,q),A.r,q,A.y,q,D.bu9,q,q,A.aO)
s=e?8:10
return B.p(q,B.v(B.a([t,B.cd(r.cmm(d),A.r,q,A.y,q,new B.Q(8,2,8,s),q,q,A.aO)],x.p),A.aj,q,A.e,A.j,0,A.p),A.f,q,q,new B.o(v,q,u,o,q,q,A.n),q,q,q,A.AG,q,q,q,q)},
cmm(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0="Text Box",a1="New Slide",a2="Delete Slide"
switch(e.z){case"School":w=B.a([],x.p)
for(v=0;v<5;++v){u={}
t=D.d2A[v]
u.a=null
s=u.a=t.b
w.push(e.lz(e.co3(s),t.a,new C.er3(u,e),a3,D.aLY.t(0,s)))}w.push(e.iv(A.kL,"Notes Slide",new C.er4(e),a3))
w.push(e.lz(A.FW,"Quiz",new C.er5(e),a3,!0))
w.push(e.lz(L.Fz,"Worksheet",new C.erg(e),a3,!0))
w.push(e.lz(V.FZ,"Flashcard",new C.err(e),a3,!0))
w.push(e.lz(A.Nc,"Lab Report",new C.erC(e),a3,!0))
w.push(e.lz(A.xP,"Rubric",new C.erJ(e),a3,!0))
w.push(e.lz(A.oB,"Minutes",new C.erK(e),a3,!0))
w.push(e.lz(A.pL,"Syllabus",new C.erL(e),a3,!0))
w.push(e.lz(A.Ng,"Timeline",new C.erM(e),a3,!0))
return B.A(w,A.m,d,A.e,A.j,0,d,d)
case"Tools":w=B.a([],x.p)
for(v=0;v<74;++v){r=D.d3N[v]
w.push(e.lz(r.b,r.c,new C.erN(e,r),a3,!D.aM2.t(0,A.a.i(r.a))))}return B.A(w,A.m,d,A.e,A.j,0,d,d)
case"Insert":return B.A(B.a([e.iv(A.y5,a0,e.gaLb(),a3),e.iv(A.tM,"Picture",new C.er6(e),a3),e.iv(A.xZ,"Bio link",new C.er7(e),a3),e.iv(A.a_B,"Table",new C.er8(e),a3),e.iv(A.Nf,"Sticky",new C.er9(e),a3),e.iv(A.tL,"Divider",new C.era(e),a3),e.iv(A.Bu,"Header",new C.erb(e),a3),e.lz(A3.vn,"Rectangle",new C.erc(e),a3,!0),e.lz(A.qS,"Circle",new C.erd(e),a3,!0),e.lz(A.ZW,"Triangle",new C.ere(e),a3,!0),e.lz(A.iS,"Arrow",new C.erf(e),a3,!0),e.lz(D.bB0,"Parallelogram",new C.erh(e),a3,!0),e.lz(D.bDt,"Hexagon",new C.eri(e),a3,!0),e.lz(A.tL,"Line",new C.erj(e),a3,!0),e.lz(A.xJ,"PDF",new C.erk(e),a3,!0),e.lz(N.a_K,"Signature",new C.erl(e),a3,!0),e.iv(A2.Bk,"Quote",new C.erm(e),a3),e.iv(D.Zy,a1,new C.ern(e),a3)],x.p),A.m,d,A.e,A.j,0,d,d)
case"Design":w=e.c
w.toString
w=B.aI(w,A.bT,x.w).w
u=x.p
t=B.A(B.a([e.aM0("Wide 16:9",D.Cg,a3),e.aM0("Short 9:16",D.o2,a3),new B.C(A.fx,B.mC(D.bFB,d,D.ffD,d,new C.ero(e),d,d,d,d),d)],u),A.m,d,A.e,A.j,0,d,d)
q=B.A(B.a([e.bEE("This slide",!e.Q,a3,new C.erp(e)),A.bp,e.aOb("All slides",e.Q,a3,new C.erq(e),!0)],u),A.m,d,A.e,A.j,0,d,d)
p=e.bEF()
p=B.d(p,d,d,d,d,d,d,B.l(d,d,a3?A.c_:A.bJ,d,d,d,d,d,d,d,d,10,d,d,A.a4,d,d,!0,d,d,d,d,d,d,d,d),d,d,d)
o=B.d("COLORS",d,d,d,d,d,d,B.l(d,d,a3?A.az:A.ak,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
n=x.cT
n=B.B(new B.K(D.a1z,new C.ers(e),n),n.k("ak.E"))
n=B.cd(B.A(n,A.m,d,A.e,A.j,0,d,d),A.r,d,A.y,d,d,d,d,A.aO)
m=B.d("TEXT COLORS",d,d,d,d,d,d,B.l(d,d,a3?A.az:A.ak,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
l=B.a([],u)
for(v=0;v<10;++v){k=D.d4I[v]
j=B.b0(k)
i=new B.aA(k===4294967295?A.dn:A.b2,1.5,A.q,-1)
l.push(new B.C(A.fx,B.aE(d,B.p(d,d,A.f,d,d,new B.o(j,d,new B.bP(i,i,i,i),d,d,d,A.a6),d,24,d,d,d,d,d,24),A.y,!1,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,new C.ert(e,k),d,d,d,d,d,d,!1,A.a8),d))}l=B.cd(B.A(l,A.m,d,A.e,A.j,0,d,d),A.r,d,A.y,d,d,d,d,A.aO)
j=B.d("SLIDE DESIGNS \xb7 first 5 free",d,d,d,d,d,d,B.l(d,d,a3?A.az:A.ak,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
h=$.bCA()
g=B.U(h).k("K<1,C>")
h=B.B(new B.K(h,new C.eru(e,a3),g),g.k("ak.E"))
return new B.a7(w.a.a-20,d,B.v(B.a([t,A.P,q,A.an,p,A.P,o,A.at,n,A.P,m,A.at,l,A.P,j,A.at,B.cd(B.A(h,A.m,d,A.e,A.j,0,d,d),A.r,d,A.y,d,d,d,d,A.aO),A.an,e.bXX(a3)],u),A.F,d,A.e,A.Q,0,A.p),d)
case"Transitions":f=e.jG()
w=e.c
w.toString
w=B.aI(w,A.bT,x.w).w
u=new C.er2(e)
t=new C.erO(e,a3)
q=x.p
p=B.a([],q)
if(f!=null){o=B.d("ELEMENT ANIMATION",d,d,d,d,d,d,B.l(d,d,a3?A.az:A.ak,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
n=t.$4(D.PP,f.dy,new C.erv(e,u,f),A.aZ)
A.d.v(p,B.a([o,A.at,n,A.P,B.d("SLIDE TRANSITION",d,d,d,d,d,d,B.l(d,d,a3?A.az:A.ak,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d),A.at],q))}q=e.gdq()
q=q==null?d:q.r
p.push(t.$4(D.PP,q,new C.erw(e,u),A.bj))
return new B.a7(w.a.a-20,d,B.v(p,A.F,d,A.e,A.Q,0,A.p),d)
case"View":w=e.y?"Hide Notes":"Show Notes"
return B.A(B.a([e.iv(A.kL,w,new C.erx(e),a3),e.iv(A.tP,"Print deck",new C.ery(e),a3),e.lz(D.aje,"Export JSON",new C.erz(e),a3,!0),e.iv(A.fK,"Duplicate Slide",e.gaQh(),a3),e.iv(A.e4,a2,e.gaPt(),a3),e.cs2(a3)],x.p),A.m,d,A.e,A.j,0,d,d)
case"Home":default:f=e.jG()
w=x.p
u=B.a([e.iv(D.Zy,a1,new C.erA(e),a3),e.iv(A.fK,"Duplicate",e.gaQh(),a3),e.iv(A.e4,a2,e.gaPt(),a3),e.iv(A.pN,"Present",e.gazm(),a3),e.iv(A.Bs,a0,e.gaLb(),a3),e.iv(A.Bn,"Fit Text",new C.erB(e),a3),e.iv(A.xJ,"Download PDF",new C.erD(e),a3)],w)
t=e.e
if(t!=null){t=t.w
t=t==="hati_kuhowa"||t==="hati_kuhoweya"}else t=!1
if(t)u.push(e.iv(A.kN,"Transfer",new C.erE(e),a3))
if(f!=null){w=B.a([A.ab,e.iv(G.Mm,"Bold",new C.erF(e,f),a3),e.iv(G.Zq,"Italic",new C.erG(e,f),a3),e.iv(G.aiQ,"Underline",new C.erH(e,f),a3),e.iv(Ae.Mn,"Bullets",new C.erI(e,f),a3),e.bNa(f,a3)],w)
if(!A.a.a0(f.db,"__design__"))w.push(e.bKW(a3))
w.push(e.iv(D.bzH,"Delete",e.gaPs(),a3))
A.d.v(u,w)}return B.A(u,A.m,d,A.e,A.j,0,d,d)}},
aM0(d,e,f){var w,v,u,t=null,s=this.e
s=s==null?t:s.d
w=e===D.o2
v=x.p
u=B.a([B.d(d,t,t,t,t,t,t,G.a7h,t,t,t)],v)
if(w)A.d.v(u,B.a([A.d8,D.bEN],v))
return new B.C(A.fx,B.jI(t,t,t,B.A(u,A.m,t,A.e,A.Q,0,t,t),t,new C.ens(this,w,e),s===e,A.bj.j(0.25),t,t,t),t)},
cs2(d){var w,v,u,t,s,r=this,q=null,p=r.gdq()
if(p==null)return A.bH
w=p.w
if(!(w>0)){v=r.e
v=v==null?q:v.e
w=v==null?5:v}v=B.I(d?A.b2:A.cp,A.q,1)
u=B.m(8)
t=B.W(A.Fx,d?A.az:A.ak,q,q,q,14)
s=B.aH(q,q,q,q,D.amk,q,q,q,new C.esa(r,p),q,q,q,q,q,A.c7)
return B.p(q,B.A(B.a([t,s,B.d(""+w+"s",q,q,q,q,q,q,B.l(q,q,d?A.c:A.bh,q,q,q,q,q,q,q,q,11,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.aH(q,q,q,q,D.amb,q,q,q,new C.esb(r,p),q,q,q,q,q,A.c7)],x.p),A.m,q,A.e,A.Q,0,q,q),A.f,q,q,new B.o(q,q,v,u,q,q,A.n),q,q,q,A.Fd,A.mh,q,q,q)},
co3(d){switch(d.a){case 6:return V.FZ
case 7:return A.FW
case 8:return L.Fz
case 4:return A.Bu
default:return A.kL}},
bNa(d,e){var w=null,v=B.I(e?A.b2:A.cp,A.q,1),u=B.m(8),t=B.aH(w,w,w,w,D.amk,w,w,w,new C.eoA(this,d),w,w,w,w,w,A.c7),s=A.k.N(d.w)
return B.p(w,B.A(B.a([t,B.d(""+s,w,w,w,w,w,w,B.l(w,w,e?A.c:A.bh,w,w,w,w,w,w,w,w,w,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aH(w,w,w,w,D.amb,w,w,w,new C.eoB(this,d),w,w,w,w,w,A.c7)],x.p),A.m,w,A.e,A.Q,0,w,w),A.f,w,w,new B.o(w,w,v,u,w,w,A.n),w,w,w,A.xs,A.mh,w,w,w)},
bXX(d){var w=null
return B.Br(B.CX(B.W(A5.ZB,d?A.ad:A.bv,w,w,w,16),w,w,D.fl3,w,w,w),w,w,new C.ep7(),A.J,this.gbz1(),A.ck,"Slide layout",x.fO)},
lz(d,e,f,g,h){var w=null,v=B.m(14),u=B.m(14),t=g?A.c.j(0.06):A.bM,s=B.I(g?A.dp:A.aL,A.q,1),r=x.p,q=B.a([B.W(d,g?A.dy:A.bj,w,w,w,18)],r)
if(h)q.push(B.ao(w,B.p(w,D.Nm,A.f,w,w,D.DC,w,12,w,w,w,w,w,12),w,w,w,-6,-4,w))
return new B.C(A.fx,B.aG(!1,A.a1,!0,w,B.aL(!1,v,!0,B.ez(new B.C(A.h6,B.v(B.a([new B.an(A.W,w,A.aa,A.f,q,w),A.cX,B.d(e,w,w,w,w,w,w,B.l(w,w,g?A.aR:A.bv,w,w,w,w,w,w,w,w,9,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],r),A.m,w,A.e,A.Q,0,A.p),w),w,new B.o(t,w,s,u,w,w,A.n),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ag),w)},
iv(d,e,f,g){return this.lz(d,e,f,g,!1)},
b3U(d,e){var w,v,u=this,t=null,s=u.e
s.toString
w=e?A.ah:A.aO
v=B.hH(t,new C.esm(u,s,e,d),s.r.length,A.ck,t,w,new C.esn(e),!1)
s=d?A.aB:A.bM
w=B.a([],x.p)
if(e&&!u.k6())w.push(new B.C(A.ck,B.Hg(E.amx,new C.eso(u),B.nt(t,A.bj,t,t,t,t,t,t,t,t,t,t,E.aMG,t,t,t,t),"Add slide"),t))
w.push(B.D(v,1))
return B.p(t,B.v(w,A.m,t,A.e,A.j,0,A.p),A.f,s,t,t,t,t,t,t,t,t,t,t)},
bCG(d,e,f){var w,v=null,u=this.e
if(u==null)w=v
else{u=u.d===D.o2?0.5625:1.7777777777777777
w=u}if(w==null)w=1.7777777777777777
u=f?8:16
return new B.C(new B.Q(u,u,u,u),new B.bH(A.b0,v,v,new B.fG(w,B.aE(v,B.co(new C.enR(this,d,e)),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.enS(this),v,v,v,v,v,v,!1,A.a8),v),v),v)},
bCI(b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=a7.e,b0=(a9==null?a8:C.kr(a9.w))===!0,b1=b0&&C.fxl(b3),b2=b0&&b3.b===D.kS&&A.a.a0(b3.db,"marriage_sign_placed_")
if(b0){a9=b3.db
w=a9==="__kiapo_video__"||A.a.a0(a9,"__kiapo_video___")}else w=!1
if(!a7.k6())v=!b0||a7.c_8(b3)
else v=!1
if(!a7.k6())u=!b0||a7.c_7(b3)
else u=!1
t=v&&a7.r===b3.a
s=b4/960
a9=b3.db
r=A.a.a0(a9,"__design__")||A.a.a0(b3.a,"design_")?A.cb:A.bj
q=b0&&A.a.a0(a9,"marriage_field_")
if(b0)p=a9==="marriage_locked_nim_akuna_deni"||a9==="marriage_locked_nim_akuna_box"||a9==="marriage_locked_nim_akuna_tick"||a9==="marriage_locked_nim_akuna_hit"
else p=!1
if(w&&C.fVL(b3))o=a8
else if(p&&!a7.k6())o=a7.gc6P()
else o=a7.k6()?a8:new C.enF(a7,w,b3,b1,b2,v)
a9=b3.a
n=b3.c
m=b3.d
l=b3.e
k=b3.f
j=p?A.c5:A.jf
i=w&&C.fVL(b3)&&a7.zy()?new C.enG(a7,b3):a8
h=v&&b3.b===D.cQ?new C.enH(a7,b3):a8
g=u?new C.enI(a7,b3,b4,b5):a8
f=b3.cx
if(t)if(a7.w===a9)e=A.bo
else e=q?A.bY:r
else e=A.K
e=B.I(e,A.q,t?2:0)
d=B.m(t?6:0)
if(b1)a0=A.bY.j(0.08)
else a0=b3.b===D.kS?A.K:a8
if(b1){a1=a7.k6()?"":"Tap to sign"
a1=B.av(B.d(a1,a8,a8,a8,a8,a8,a8,B.l(a8,a8,A.bY.j(0.7),a8,a8,a8,a8,a8,a8,a8,a8,10*s,a8,a8,A.O,a8,a8,!0,a8,a8,a8,a8,a8,a8,a8,a8),a8,a8,a8),a8,a8,a8)}else{if(a7.w===a9){a1=a7.c
a1.toString
a1=!(B.aI(a1,A.bT,x.w).w.a.a<900)}else a1=!1
a2=w&&a7.zy()
a3=b3.b===D.cQ
a4=a3?a7.VX(b3):a8
a5=a3?a7.asd(b3):a8
if(a7.w===a9){a6=a7.c
a6.toString
a6=!(B.aI(a6,A.bT,x.w).w.a.a<900)}else a6=!1
a6=a6?new C.enJ(a7,b3):a8
a3=v&&a3?new C.enK(a7,b3):a8
a6=C.b_M(q,a4,a1,b3,a5,a2,a3,new C.enL(a7,w,b3,v),a6,s,t,!0)
a1=a6}d=B.a([B.p(a8,a1,A.f,a8,a8,new B.o(a0,a8,e,d,a8,a8,A.n),a8,a8,a8,a8,a8,a8,a8,a8)],x.p)
if(t&&u&&a7.w!==a9){e=B.m(6)
d.push(B.ao(-4,B.aE(a8,B.p(a8,D.bHA,A.f,a8,a8,new B.o(r,a8,B.I(A.c,A.q,1.5),e,a8,a8,A.n),a8,22,a8,a8,a8,a8,a8,22),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.enM(a7,b3,b4,b5),a8,a8,new C.enN(a7,b3),a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,!1,A.a8),a8,a8,a8,-4,a8,a8))}if(b0&&!a7.k6()&&b3.db==="marriage_locked_nim_n_4")d.push(B.ao(a8,B.aE(a8,B.p(a8,D.bIe,A.f,a8,a8,new B.o(A.dA,a8,B.I(A.c,A.q,1.2),a8,B.a([new B.ac(0,A.G,A.w.j(0.25),A.J,4)],x.V),a8,A.a6),a8,20,a8,a8,a8,a8,a8,20),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a7.gbVz(),a8,a8,a8,a8,a8,a8,!1,A.a8),a8,a8,a8,-6,-6,a8))
if(b0&&!a7.k6()&&A.a.a0(b3.db,"marriage_field_tarehe:"))d.push(B.ao(a8,B.aE(a8,B.p(a8,D.bJM,A.f,a8,a8,new B.o(A.bY,a8,B.I(A.c,A.q,1.2),a8,B.a([new B.ac(0,A.G,A.w.j(0.25),A.J,4)],x.V),a8,A.a6),a8,20,a8,a8,a8,a8,a8,20),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.enO(a7,b3),a8,a8,a8,a8,a8,a8,!1,A.a8),a8,a8,a8,-6,-6,a8))
e=!1
if(t)if(b3.b===D.cQ)if(a7.w!==a9){e=a7.c
e.toString
e=B.aI(e,A.bT,x.w).w.a.a<900}if(e)d.push(B.ao(-28,B.av(B.aE(a8,B.p(a8,D.ftD,A.f,a8,a8,new B.o(A.bj,a8,a8,B.m(999),B.a([new B.ac(0,A.G,A.w.j(0.2),A.J,8)],x.V),a8,A.n),a8,a8,a8,a8,A.kJ,a8,a8,a8),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.enP(a7,b3),a8,a8,a8,a8,a8,a8,!1,A.a8),a8,a8,a8),a8,a8,0,0,a8,a8))
return B.ao(a8,B.aE(j,B.eC(A.A,f,new B.an(A.W,a8,A.aa,A.f,d,a8),a8),A.y,!1,a8,h,a8,a8,a8,a8,a8,a8,i,a8,a8,a8,a8,a8,a8,g,a8,a8,a8,a8,a8,a8,a8,o,a8,a8,a8,a8,a8,a8,!1,A.a8),k*b5,new B.cx("el_"+a9,x.W),n*b4,a8,m*b5,l*b4)},
aOb(d,e,f,g,h){var w,v,u,t,s,r=null
if(e)w=A.bj.j(0.25)
else w=f?A.c.j(0.06):A.w.j(0.04)
v=B.m(10)
u=B.I(e?A.bj:A.bF,A.q,1)
if(e)t=A.bj
else t=f?A.az:A.ak
s=x.p
t=B.a([B.d(d,r,r,r,r,r,r,B.l(r,r,t,r,r,r,r,r,r,r,r,10,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],s)
if(h)A.d.v(t,B.a([A.d8,B.p(r,D.Nm,A.f,r,r,D.DC,r,12,r,r,r,r,r,12)],s))
return B.aE(r,B.p(r,B.A(t,A.m,r,A.e,A.Q,0,r,r),A.f,r,r,new B.o(w,r,u,v,r,r,A.n),r,r,r,r,A.h5,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,g,r,r,r,r,r,r,!1,A.a8)},
bEE(d,e,f,g){return this.aOb(d,e,f,g,!1)},
c6B(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=d.a
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
t=f?A.wu:l
if(f)s=new B.bP(new B.aA(e?A.bF:A.aL,1,A.q,-1),A.Y,A.Y,A.Y)
else s=l
r=f?B.a([new B.ac(0,A.G,A.w.j(0.12),A.rl,16)],x.V):l
q=x.p
p=B.A(B.a([B.d("Speaker Notes",l,l,l,l,l,l,B.l(l,l,e?A.ad:A.bv,l,l,l,l,l,l,l,l,12,l,l,A.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),A.b4,m.aZZ(e,new C.epJ(m))],q),A.m,l,A.e,A.j,0,l,l)
o=B.l(l,l,e?A.c:A.aK,l,l,l,l,l,l,l,l,12,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
n=B.l(l,l,e?A.c_:A.bJ,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
return B.p(l,B.v(B.a([p,A.an,B.D(B.aM(l,A.T,!1,l,!0,A.r,l,B.aN(),k,l,l,l,l,l,2,B.br(l,new B.b4(4,B.m(10),A.dg),l,A.bS,l,l,l,l,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,n,"Speaker notes for this slide\u2026",l,l,l,l,l,!0,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ai,l,l,l,l,l,l,l,l,l,2,l,l,!1,"\u2022",l,new C.epK(m,d),l,l,l,!1,l,l,!1,l,!0,l,A.a9,l,l,l,l,l,l,l,l,l,l,l,o,!0,A.a5,l,A.am,l,l,l,l),1)],q),A.aj,l,A.e,A.j,0,A.p),A.f,l,l,new B.o(u,l,s,t,r,l,A.n),l,96,l,l,new B.Q(12,w,12,v),l,l,l)},
aRy(a3,a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=null,a2=a0.jG()
if(a2==null)return A.bH
w=new C.eoO(a0,a6)
v=B.a([4279310375,4294967295,4280640491,4278556265,4292617766,4286331629,4293548044,4281549141],x.t)
u=A.k.D(1-a2.c,0.06,1)
t=A.k.D(1-a2.d,0.06,1)
s=A.k.D(1-a2.e,0.01,1)
r=A.k.D(1-a2.f,0.01,1)
q=a5?A.dQ:a1
p=x.p
o=B.a([],p)
n=!a5
if(n)o.push(B.A(B.a([B.d("Format",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.c:A.M,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,A.u,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),A.b4,a0.aZZ(a3,a0.gbJa())],p),A.m,a1,A.e,A.j,0,a1,a1))
if(n)o.push(A.S)
o.push(B.d("Size",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.az:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1))
o.push(B.A(B.a([D.fg7,B.D(B.kU(a1,a1,a1,u,0.05,new C.eoP(w,a2),A.k.D(a2.e,0.05,u)),1)],p),A.m,a1,A.e,A.j,0,a1,a1))
o.push(B.A(B.a([D.fs6,B.D(B.kU(a1,a1,a1,t,0.05,new C.eoQ(w,a2),A.k.D(a2.f,0.05,t)),1)],p),A.m,a1,A.e,A.j,0,a1,a1))
n=a2.b
m=n===D.cQ
if(m)o.push(B.A(B.a([D.fa8,B.D(B.kU(a1,a1,a1,96,10,new C.eoR(w,a2),A.k.D(a2.w,10,96)),1)],p),A.m,a1,A.e,A.j,0,a1,a1))
l=n===D.lk
if(l||n===D.kS||n===D.R7)A.d.v(o,B.a([B.d("Crop / position",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.az:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),B.A(B.a([D.flK,B.D(B.kU(a1,a1,a1,s,0,new C.eoS(w,a2),A.k.D(a2.c,0,s)),1)],p),A.m,a1,A.e,A.j,0,a1,a1),B.A(B.a([D.ftm,B.D(B.kU(a1,a1,a1,r,0,new C.eoT(w,a2),A.k.D(a2.d,0,r)),1)],p),A.m,a1,A.e,A.j,0,a1,a1)],p))
if(l){l=B.d("Shape (frame)",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.az:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
k=B.a([],p)
for(j=0;j<7;++j){i={}
h=D.BJ[j]
i.a=null
g=h.a
i.a=g
k.push(B.jI(a1,a1,a1,new B.x(h.b,a1,A.qc,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,new C.eoU(i,w,a2),a2.go===g,a1,a1,a1,a1))}k=B.bZ(A.bB,k,A.bs,6,6)
i=B.d("Ring",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.az:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
h=B.a([],p)
for(j=0;j<11;++j){f={}
e=D.BE[j]
f.a=null
g=e.a
f.a=g
h.push(B.jI(a1,a1,a1,new B.x(e.b,a1,A.qc,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,new C.eoV(f,w,a2),a2.id===g,a1,a1,a1,a1))}A.d.v(o,B.a([A.P,l,A.an,k,A.P,i,A.an,B.bZ(A.bB,h,A.bs,6,6)],p))}o.push(A.P)
if(m){m=B.d("Text color",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.az:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
l=x.gN
l=B.B(new B.K(v,new C.eoW(w,a2),l),l.k("ak.E"))
k=x.fw
A.d.v(o,B.a([m,A.an,B.bZ(A.bB,l,A.bs,6,6),A.ac,B.h6I(new C.eoX(w,a2),D.ckB,B.ew([a2.as],k),!0,a1,k)],p))}if(n===D.f_){n=B.d("Fill",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.az:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
m=x.gN
m=B.B(new B.K(v,new C.eoY(w,a2),m),m.k("ak.E"))
A.d.v(o,B.a([n,B.bZ(A.bB,m,A.bs,0,6)],p))}o.push(A.ac)
o.push(B.dq(D.bJy,D.fnG,new C.eoZ(a0,a5),B.bk(A.bI,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1)))
d=B.cB(o,a1,a1,q,a1,A.ah,a5)
if(a5)return d
q=a3?A.cC:A.c
p=a4?A.wu:a1
if(a4)o=new B.bP(new B.aA(a3?A.bF:A.aL,1,A.q,-1),A.Y,A.Y,A.Y)
else o=a1
return B.p(a1,d,A.f,a1,a1,new B.o(q,a1,o,p,a4?B.a([new B.ac(0,A.G,A.w.j(0.12),A.rl,16)],x.V):a1,a1,A.n),a1,a1,a1,a1,A.EX,a1,a1,a1)},
bNr(d){return this.aRy(d,!1,!1,null)},
c5R(d,e,f,g,h,i){var w,v,u,t,s,r=this,q=null,p=r.fy
p===$&&B.c()
p=B.c6(p,new C.ep1(r,f,d,e),q)
w=B.d(i,q,q,q,q,q,q,D.f0e,q,q,q)
v=r.c
v.toString
u=x.p
v=B.a([p,A.bf,B.D(B.v(B.a([w,A.bA,A.cX,r.bym(D.cNH,d,B.P(v).ax.a===A.I)],u),A.F,q,A.e,A.j,0,A.p),1)],u)
p=x.V
A.d.v(v,B.a([A.ab,B.dW(B.hp(B.aG(!1,A.a1,!0,q,B.aL(!1,q,!0,B.ez(D.eKR,q,new B.o(q,q,B.I(A.c.j(0.55),A.q,1.3),q,B.a([new B.ac(0,A.G,A.bY.j(0.4),A.ej,8)],p),D.ano,A.a6),q,q,q),A.cL,!0,q,q,q,q,q,q,q,q,q,q,q,g,q,q,q,q,q,q,q),A.f,A.K,0,q,q,q,q,q,A.ag),q,"Documents (Hati)",q,q),A.J)],u))
t=B.A(v,A.m,q,A.e,A.j,0,q,q)
w=r.c
w.toString
s=B.P(w).ax.a===A.I
w=B.m(20)
v=x.O
v=s?B.a([D.b5v,D.b5T],v):B.a([A.c,A.ke],v)
u=B.I(d.j(s?0.45:0.25),A.q,1.2)
return B.p(q,t,A.f,q,q,new B.o(q,q,u,w,B.a([new B.ac(0,A.G,d.j(s?0.18:0.1),A.cw,14)],p),new B.a8(A.ax,A.aC,A.x,v,q,q),A.n),q,q,q,q,A.bS,q,q,q)},
aKW(d,e,f,g){var w=this.fy
w===$&&B.c()
return B.c6(w,new C.emB(this,g,d,e,f),null)},
afp(d,e){return this.cih(d,e)},
cih(d,e){var w=0,v=B.j(x.T),u,t=this,s,r,q,p
var $async$afp=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:r=$.aw()
q=new B.ar(new B.bb(e,A.b3,A.aN),r)
p=t.c
p.toString
w=3
return B.b(B.ca(null,null,!0,null,new C.eqG(d,q),p,null,!0,!0,x.N),$async$afp)
case 3:s=g
q.S$=r
q.P$=0
u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$afp,v)},
Pj(d){var w=d.bS()
return""+B.bG(w)+"/"+B.bQ(w)+"/"+B.by(w)}}
C.aei.prototype={}
C.axG.prototype={
T(){return new C.bbf(null,null)}}
C.bbf.prototype={
gcuh(){var w,v=this.a.c,u=v.f.bS(),t=""+B.bG(u)+"/"+B.bQ(u)+"/"+B.by(u),s=v.w
if(s==="marriage_agreement")return"Hati ya Kuhowesha \xb7 "+t
if(s==="hati_kuhowa")return"Hati ya Kuhowa \xb7 "+t
if(s==="hati_kuhoweya")return"Hati ya Kuhoweya \xb7 "+t
if(s==="hati_kiapo_uongozi"){v=v.x
w=A.a.i(v==null?"":v)
return w.length===0?"Hati ya Kiapo cha Uongozi \xb7 "+t:"Kiapo cha Uongozi \xb7 "+w+" \xb7 "+t}return""+v.r.length+" slides \xb7 "+t},
a_(){var w,v=this,u=null
v.a1()
w=B.bj(u,A.pA,u,1,u,v)
w.f9(0,!0)
v.d!==$&&B.aO()
v.d=w
w=B.bj(u,D.bn4,u,1,u,v)
w.cq(0)
v.e!==$&&B.aO()
v.e=w},
q(){var w=this.d
w===$&&B.c()
w.q()
w=this.e
w===$&&B.c()
w.q()
this.brN()},
Iz(d){var w=0.12+d*0.09,v=A.k.D(w+0.55,0,1),u=this.e
u===$&&B.c()
u=u.x
u===$&&B.c()
return A.cr.av(0,new B.hN(w,v,A.cr).av(0,u))},
B(d){var w,v=null,u=this.d
u===$&&B.c()
w=this.e
w===$&&B.c()
return B.av(new B.C(D.bsx,B.c6(new B.h3(B.a([u,w],x.dS)),new C.cZE(this),v),v),v,v,v)}}
C.bbt.prototype={
B(d){var w=null,v=B.m(22),u=B.I(A.aK,A.q,1),t=x.p
return B.av(new B.C(D.bsO,B.aG(!1,A.a1,!0,w,B.p(w,B.bw(B.m(22),B.v(B.a([new B.C(D.bs_,B.v(B.a([B.p(w,D.bIk,A.f,w,w,new B.o(A.ay.j(0.12),w,w,B.m(16),w,w,A.n),w,52,w,w,w,w,w,52),A.aP,D.fpL,A.S,B.d('"'+this.c+'" will be permanently removed. This cannot be undone.',w,w,w,w,w,w,D.f1n,A.L,w,w)],t),A.m,w,A.e,A.j,0,A.p),w),A.e1,D.bm8,B.A(B.a([B.D(B.bK(!1,D.fen,w,w,!0,w,w,new C.d__(d),w,B.fv(w,w,w,w,w,w,w,w,w,w,w,A.bJ,w,w,w,w,w,A.n3,w,A.o6,w,w,w,w,w,w)),1),B.p(w,w,A.f,A.bm,w,w,w,48,w,w,w,w,w,1),B.D(B.bK(!1,D.fjB,w,w,!0,w,w,new C.d_0(d),w,B.fv(w,w,w,w,w,w,w,w,w,w,w,A.ay,w,w,w,w,w,A.n3,w,A.o6,w,w,w,w,w,w)),1)],t),A.m,w,A.e,A.j,0,w,w)],t),A.m,w,A.e,A.Q,0,A.p),A.aq),A.f,w,A8.UH,new B.o(A.aB,w,u,v,D.cO0,w,A.n),w,w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ag),w),w,w,w)}}
C.Jf.prototype={
T(){return new C.bbe()}}
C.bbe.prototype={
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.a,m=n.f,l=n.w,k=n.r
n=p.d
w=n?0.96:1
v=B.m(12)
if(l){u=0.1+(n?0.06:0)
n=u}else{u=0.08+(n?0.05:0)
n=u}n=m.j(n)
u=B.I(m.j(l?0.34:0.28),A.q,1)
t=x.V
t=p.d?B.a([],t):B.a([new B.ac(0,A.G,m.j(0.08),A.dD,8)],t)
s=m.j(l?0.16:0.14)
r=B.m(9)
q=p.a
r=B.p(o,B.W(q.c,m,o,o,o,18),A.f,o,o,new B.o(s,o,o,r,o,o,A.n),o,32,o,o,o,o,o,32)
q=q.d
return B.dW(B.db(B.aE(o,B.va(B.dg(o,B.A(B.a([r,A.av,new B.dm(1,A.ci,B.d(q,o,2,A.a2,o,o,o,B.l(o,o,l?A.f3:A.c,o,o,o,o,o,o,o,o,13,o,o,A.O,o,1.2,!0,o,o,o,o,o,o,o,o),A.L,o,o),o)],x.p),A.m,o,A.bb,A.Q,0,o,o),o,o,A.bc,new B.o(n,o,u,v,t,o,A.n),A.eE,o,o,o,A.nQ,o,o,1/0),A.cr,A.ja,w),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new C.cZz(p,d),new C.cZA(p),new C.cZB(p),new C.cZC(p),o,o,o,!1,A.a8),k),new B.u(0,(1-k)*16))}}
C.P1.prototype={
B(d){var w=this,v=null,u=A.c.j(0.04),t=B.m(16),s=B.m(16),r=B.m(14),q=B.I(A.c.j(0.5),A.q,1.2),p=x.p
return B.aG(!1,A.a1,!0,t,B.aL(!1,s,!0,new B.C(A.eP,B.A(B.a([B.p(v,B.W(w.c,A.c,v,v,v,22),A.f,v,v,new B.o(v,v,q,r,v,new B.a8(A.ax,A.aC,A.x,w.d,v,v),A.n),v,46,v,v,v,v,v,46),A.eB,B.D(B.v(B.a([B.d(w.e,v,v,v,v,v,v,A.np,v,v,v),A.bA,B.d(w.f,v,v,v,v,v,v,B.l(v,v,A.c.j(0.55),v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],p),A.F,v,A.e,A.j,0,A.p),1),B.W(A.ex,A.c.j(0.4),v,v,v,v)],p),A.m,v,A.e,A.j,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.r,v,v,v,v,v,v,v),A.f,u,0,v,v,v,v,v,A.ag)}}
C.ZR.prototype={
T(){return new C.aDd(D.dd,null,null)}}
C.aDd.prototype={
gY9(){var w,v=this,u=v.w
if(u===$){w=B.bj(null,D.bmF,null,1,null,v)
v.w!==$&&B.bM()
v.w=w
u=w}return u},
b4j(d){if(!this.a.c.ay)return
this.x=d
this.gY9().ir(0,0)},
a_(){var w,v=this
v.a1()
w=v.a
v.d=A.o.D(w.d,0,w.c.r.length-1)
C.auB(D.eRc)
C.hXV()
v.QI()},
q(){var w=this,v=w.f
if(v!=null)v.a8(0)
w.gY9().q()
v=w.z
if(v!=null)v.a8(0)
C.auB(D.eRd)
C.hXY()
w.btV()},
cx2(){B.je()
this.m(new C.etl())
var w=this.c.I(x.q).f
w.a3V()
if($.bj_)w.R(D.eO4)},
QI(){var w,v=this,u=v.f
if(u!=null)u.a8(0)
if(!v.r||v.y)return
u=v.a.c
w=v.d
w===$&&B.c()
v.f=B.cM(B.dC(0,0,0,0,0,A.o.D(C.h4S(u,w),1,120)),new C.etb(v))},
cwI(){var w,v=this
v.m(new C.etk(v))
if(v.r)v.QI()
else{w=v.f
if(w!=null)w.a8(0)}},
gaTp(){var w=this.a.c.db
return(w==null?"":w).length!==0},
cqR(){var w=this,v=w.f
if(v!=null)v.a8(0)
w.m(new C.etc(w))
v=w.z
if(v!=null)v.a8(0)
if(w.a.c.ch&&w.r)w.z=B.cM(A.l6,new C.etd(w))},
av3(){var w,v,u=this,t=u.a.c,s=t.r.length
if(u.y){t=u.z
if(t!=null)t.a8(0)
if(u.a.c.ch){u.m(new C.et7(u))
u.QI()}return}w=u.d
w===$&&B.c()
v=s-1
if(w===v&&u.gaTp()){u.cqR()
return}if(w>=v)t=t.ch&&s>1
else t=!0
if(t){u.m(new C.et8(u,A.o.F(w+1,s)))
u.b4j(w)
u.QI()}},
cgW(){var w,v=this,u=v.a.c,t=u.r.length
if(v.y){if(!u.ch)return
u=v.z
if(u!=null)u.a8(0)
v.m(new C.et9(v))
v.QI()
return}w=v.d
w===$&&B.c()
if(w<=0)u=u.ch&&t>1
else u=!0
if(u){v.m(new C.eta(v,w,t))
v.b4j(w)
v.QI()}},
cse(d){var w,v=this,u=v.e
if(u===D.cg){u=v.d
u===$&&B.c()
return new B.n8(d,new B.cx(u,x.ac))}w=v.csf(u)
u=v.d
u===$&&B.c()
return B.q6(new B.n8(d,new B.cx(u,x.ac)),w,new C.eti(),A.bc,A.bc,new C.etj(v))},
csf(d){switch(d.a){case 8:case 9:case 10:case 11:case 19:return D.bn0
case 16:return A.kg
case 18:return A.n0
default:return A.n1}},
csd(d,e,f){var w,v,u,t=null,s=B.cI(A.cr,f,t)
switch(d.a){case 0:return e
case 1:case 13:case 18:return new B.cX(s,!1,e,t)
case 2:case 17:w=x.K
return B.jl(e,new B.bf(s,new B.bn(A.ug,A.J,w),w.k("bf<bI.T>")),t,!0)
case 3:w=x.K
return B.jl(e,new B.bf(s,new B.bn(A.Rn,A.J,w),w.k("bf<bI.T>")),t,!0)
case 4:case 21:w=x.K
return B.jl(e,new B.bf(s,new B.bn(A.ig,A.J,w),w.k("bf<bI.T>")),t,!0)
case 5:w=x.K
return B.jl(e,new B.bf(s,new B.bn(A.uf,A.J,w),w.k("bf<bI.T>")),t,!0)
case 6:case 16:w=x.b
return B.ii(A.A,new B.cX(s,!1,e,t),t,new B.bf(s,new B.bn(0.82,1,w),w.k("bf<bI.T>")))
case 7:w=x.b
return B.ii(A.A,new B.cX(s,!1,e,t),t,new B.bf(s,new B.bn(1.18,1,w),w.k("bf<bI.T>")))
case 8:return B.c6(s,new C.ete(s),e)
case 9:return B.c6(s,new C.etf(s),e)
case 10:return B.c6(s,new C.etg(s),e)
case 11:return B.c6(s,new C.eth(s),e)
case 12:w=x.b
return new B.cX(s,!1,B.ii(A.A,e,t,new B.bf(s,new B.bn(1.03,1,w),w.k("bf<bI.T>"))),t)
case 14:w=s.gp(0)
v=x.K
return B.jt(B.jl(e,new B.bf(s,new B.bn(A.ug,A.J,v),v.k("bf<bI.T>")),t,!0),A.r,new C.bpZ(w,t))
case 15:w=x.K
return B.jl(e,new B.bf(s,new B.bn(A.Rn,A.J,w),w.k("bf<bI.T>")),t,!0)
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
u=B.jt(new C.anf(B.c6(n.gY9(),new C.etm(n,v,w),m),m),A.r,m)}else{t=B.rl(new C.Ie(w,!0,!1,m))
l=B.b0(w.e)
u=n.cse(B.ek(B.jt(t,A.r,m),l,!0))}l=B.m(20)
k=x.p
s=B.p(m,B.A(B.a([B.d(n.r?"Auto "+C.h4S(n.a.c,n.d)+"s":"Manual",m,m,m,m,m,m,A.ob,m,m,m),A.bp,D.bKA],k),A.m,m,A.e,A.Q,0,m,m),A.f,m,m,new B.o(A.aX,m,m,l,m,m,A.n),m,m,m,m,A.fH,m,m,m)
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
l.push(B.bY(0,new C.MW(new C.E5(q,p,o,r==null?"":r),!1,!0,m),0,0,0))}else{r=q.c.d===D.o2?0.5625:1.7777777777777777
l.push(B.av(new B.fG(r,B.jt(B.ud(A.af,u,!0,4,1,!0,!0,m),A.r,m),m),m,m,m))}if(!$.bj_){r=B.Hg(A.kP,new C.etn(d),B.nt(m,A.aX,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m)
k=B.a([B.ao(m,B.bm(!0,B.A(B.a([r,A.ab,B.Hg(B.W(n.r?Ak.xX:A.iT,m,m,m,m,m),n.gcwH(),B.nt(m,A.aX,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m)],k),A.m,m,A.e,A.j,0,m,m),!0,!1,A.af,!0,!0),m,m,12,m,12,m)],k)
if(!n.y){r=B.m(20)
k.push(B.ao(16,B.bm(!0,B.p(m,B.d(""+(n.d+1)+" / "+n.a.c.r.length,m,m,m,m,m,m,A.ho,m,m,m),A.f,m,m,new B.o(A.aX,m,m,r,m,m,A.n),m,m,m,m,A.fH,m,m,m),!0,!1,A.af,!0,!0),m,m,m,16,m,m))}A.d.v(l,k)}l.push(B.ao(m,B.bm(!0,B.aE(A.c5,B.p(A.l_,$.bj_?A.bH:s,A.f,m,m,m,m,64,m,m,D.bnM,m,m,150),A.y,!1,m,n.gcx1(),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!1,A.a8),!0,!1,A.af,!0,!0),m,m,m,0,0,m))
return B.c8(m,A.w,B.aE(m,new B.an(A.W,m,A.b_,A.r,l,m),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.eto(n,d),m,m,m,!1,A.a8),m,!1,!1,m,m)}}
C.Jn.prototype={
B(d){var w=null
return B.p(w,B.bm(!0,new B.C(E.ah8,this.c,w),!0,!1,A.af,!0,!1),A.f,w,w,D.aZs,w,w,w,w,w,w,w,w)}}
C.bpZ.prototype={
iX(d){return new B.aa(0,0,0+d.a*A.k.D(this.b,0,1),0+d.b)},
jD(d){return d.b!==this.b}}
C.bg6.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.c
A:{if("circle"===q){w=B.m(999)
break A}if("rounded"===q){w=B.m(18)
break A}if("arch"===q){w=D.aWf
break A}w=B.m(6)
break A}v=s.e
u=B.I(v?A.aE:A.K,A.q,2.5)
if(q==="circle")t=B.m(999)
else t=B.m(q==="rounded"?9:3)
w=B.dg(r,B.av(B.p(r,r,A.f,r,r,new B.o(r,r,r,t,r,E.vD,A.n),r,30,r,r,r,r,r,30),r,r,r),r,r,A.bc,new B.o(s.f,r,u,w,r,r,A.n),A.hX,r,64,r,r,r,r,64)
return B.aE(r,new B.a7(78,r,B.v(B.a([w,A.an,B.d(s.d,r,1,A.a2,r,r,r,B.l(r,r,v?A.aE:s.r,r,r,r,r,r,r,r,r,11.5,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),A.m,r,A.e,A.j,0,A.p),r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,s.w,r,r,r,r,r,r,!1,A.a8)}}
C.bg5.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=r.c,o=D.dgL.h(0,p)
if(o==null)o=D.d3W
p=p==="none"
w=p?q:new B.a8(A.a3,A.a7,A.x,o,q,q)
p=p?A.cU.j(0.25):q
v=r.e
u=v?B.I(A.aE,A.q,2.5):q
t=r.r.j(0.15)
s=v?I.aly:q
w=B.p(q,B.p(q,s,A.f,q,q,new B.o(t,q,q,q,q,q,A.a6),q,q,q,q,q,q,q,q),A.f,q,q,new B.o(p,q,u,q,q,w,A.a6),q,52,q,q,A.en,q,q,52)
return B.aE(q,new B.a7(66,q,B.v(B.a([w,A.an,B.d(r.d,q,1,A.a2,q,q,q,B.l(q,q,v?A.aE:r.f,q,q,q,q,q,q,q,q,10.5,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),A.L,q,q)],x.p),A.m,q,A.e,A.j,0,A.p),q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.w,q,q,q,q,q,q,!1,A.a8)}}
C.aIT.prototype={
aQ(){this.aX()
this.aW()
this.dJ()},
q(){var w=this,v=w.b2$
if(v!=null)v.a3(0,w.gdH())
w.b2$=null
w.a2()}}
C.aKV.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbv())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bw()}}
C.bvG.prototype={}
C.aKW.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbv())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bw()}}
C.b_P.prototype={}
C.Vk.prototype={
T(){return new C.aDb()},
beP(d){return this.e.$1(d)}}
C.aDb.prototype={
gb2E(){var w,v,u,t,s=this.e
if(s==null)return null
for(w=this.a.d,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===s)return t}return null},
ga9B(){var w,v
if(this.d==="all")return B.bl(this.a.d,!0,x.I)
w=this.gb2E()
v=x.D
return w==null?B.a([],v):B.a([w],v)},
gaMR(){if(this.d==="all")return"All presentations ("+this.a.d.length+")"
var w=this.gb2E()
w=w==null?null:w.b
return w==null?"Pick a presentation":w},
gb3T(){return A.d.cI(this.ga9B(),0,new C.esS())},
a_(){var w,v=this
v.a1()
w=v.a.d
if(w.length!==0)v.e=A.d.gK(w).a
v.Qj()},
Qj(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Qj=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return B.b(C.b0p(s.c,s.f),$async$Qj)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.esO(t,!s))
case 1:return B.h(u,v)}})
return B.i($async$Qj,v)},
IB(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$IB=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p=t.ga9B()
o=p.length
if(o===0){w=1
break}for(s=0;s<p.length;p.length===o||(0,B.L)(p),++s){r=p[s]
q=r.w
if(q==="marriage_agreement"||q==="hati_kuhowa"||q==="hati_kuhoweya"||q==="hati_malipo_awamu"||q==="hati_kiapo_uongozi")C.fAx(r,t.a.d)}o=t.c
o.toString
q=t.a
w=3
return B.b(B.oX(o,q.c,q.f),$async$IB)
case 3:if(!e||t.c==null){w=1
break}o=t.c
o.toString
q=B.e7(new C.esR(t,p),!1,null,x.H)
w=4
return B.b(B.a6(o,!1).c6(q),$async$IB)
case 4:q=t.a
w=5
return B.b(B.oW(q.c,q.f),$async$IB)
case 5:w=6
return B.b(t.Qj(),$async$IB)
case 6:case 1:return B.h(u,v)}})
return B.i($async$IB,v)},
QG(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$QG=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:o=t.c
o.toString
w=3
return B.b(B.hv(o,D.dTS,!0,"NgmySlidesTransferScan",x.N),$async$QG)
case 3:s=e
if(s==null||A.a.i(s).length===0){w=1
break}t.m(new C.esP(t))
w=4
return B.b(C.agr(s),$async$QG)
case 4:r=e
t.m(new C.esQ(t))
o=J.a5(r)
if(o.gam(r)){o=t.c
if(o==null){w=1
break}o.I(x.q).f.R(D.eMY)
w=1
break}w=5
return B.b(t.a.beP(r),$async$QG)
case 5:q=t.c
if(q==null){w=1
break}B.a6(q,!1).O(null)
q=t.c.I(x.q).f
p=o.gM(r)
o=o.gM(r)===1?"":"s"
q.R(B.b2(null,null,null,null,null,A.r,null,B.d("Imported "+p+" presentation"+o,null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$QG,v)},
IA(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$IA=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:n=t.ga9B()
if(n.length===0){w=1
break}s=t.c
s.toString
r=t.a
w=3
return B.b(B.oX(s,r.c,r.f),$async$IA)
case 3:if(!e||t.c==null){w=1
break}s=n.length
r=t.a
if(s===1){s=r.c
q=C.fAM(null,A.d.gK(n),s,t.a.f)}else q=C.fAM(n,null,r.c,r.f)
if(n.length===1){s=A.d.gK(n).b
r=B.af("[^\\w\\-.]+",!0,!1,!1,!1)
p=B.aK(s,r,"_")}else p="ngmy_slides_library"
w=4
return B.b(B.FY(q,"ngmy_slides_"+p,!1),$async$IA)
case 4:o=e
s=t.a
w=5
return B.b(B.oW(s.c,s.f),$async$IA)
case 5:w=6
return B.b(t.Qj(),$async$IA)
case 6:s=t.c
if(s==null){w=1
break}s.I(x.q).f.R(B.b2(null,null,null,null,null,A.r,null,B.d(o,null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$IA,v)},
a2_(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a2_=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t.m(new C.esT(t))
w=3
return B.b(C.bB_(),$async$a2_)
case 3:s=e
t.m(new C.esU(t))
if(s==null||J.cl(s)){w=1
break}w=4
return B.b(t.a.beP(s),$async$a2_)
case 4:r=t.c
if(r==null){w=1
break}B.a6(r,!1).O(null)
r=t.c.I(x.q).f
q=J.a5(s)
p=q.gM(s)
q=q.gM(s)===1?"":"s"
r.R(B.b2(null,null,null,null,null,A.r,null,B.d("Imported "+p+" presentation"+q+" from file",null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a2_,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=B.P(d).ax.a===A.I,l=m?A.db:A.bM,k=o.ga9B().length!==0,j=B.ao(n,B.p(n,n,A.f,n,n,new B.o(n,n,n,n,n,new B.bT(A.A,0.5,A.x,n,0,B.a([A.bj.j(0.22),A.K],x.O),n,n),A.a6),n,220,n,n,n,n,n,220),n,n,n,-60,-80,n),i=B.aH(n,n,n,n,B.W(A.cA,m?A.ad:A.ak,n,n,n,n),n,n,n,new C.esX(d),n,n,n,n,n,n),h=x.p
i=B.A(B.a([i,B.D(B.d("Transfer presentations",n,n,n,n,n,n,B.l(n,n,m?A.c:A.M,n,n,n,n,n,n,n,n,17,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),A.L,n,n),1),A.zb],h),A.m,n,A.e,A.j,0,n,n)
w=B.m(24)
v=B.a([new B.ac(0,A.G,A.bj.j(0.35),A.eT,24)],x.V)
u=B.ao(n,B.W(A.pG,A.c.j(0.1),n,n,n,100),n,n,n,-12,-8,n)
t=A.c.j(0.18)
s=B.m(16)
s=B.a([u,B.A(B.a([B.p(n,D.bL5,A.f,n,n,new B.o(t,n,B.I(A.c.j(0.35),A.q,1),s,n,n,A.n),n,56,n,n,n,n,n,56),A.eB,B.D(B.v(B.a([B.d("NGMY Slides Transfer",n,n,n,n,n,n,B.l(n,n,A.c.j(0.85),n,n,n,n,n,n,n,n,11,n,n,A.H,n,n,!0,n,1.1,n,n,n,n,n,n),n,n,n),A.at,D.bwJ],h),A.F,n,A.e,A.j,0,A.p),1)],h),A.m,n,A.e,A.j,0,n,n)],h)
if(o.a.f)s.push(B.ao(n,B.hp(B.aE(A.c5,D.eKT,A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gcbI(),n,n,n,n,n,n,!1,A.a8),n,"Save presentations to the database",n,n),n,n,n,-17,-19,n))
w=B.a([B.p(n,new B.an(A.W,n,A.aa,A.f,s,n),A.aq,n,n,new B.o(n,n,n,w,v,D.a0f,A.n),n,n,n,n,E.Y4,n,n,1/0),A.e1,o.awg(m,"What to transfer"),A.ac,B.A(B.a([B.D(o.aVD(A.pN,m,new C.esY(o),o.d==="one","Pick a single deck","One presentation"),1),A.av,B.D(o.aVD(D.bAT,m,new C.esZ(o),o.d==="all",""+o.a.d.length+" saved","All presentations"),1)],h),A.m,n,A.e,A.j,0,n,n)],h)
if(o.d==="one"){v=B.a([A.d5,o.awg(m,"Choose presentation"),A.S],h)
u=o.a.d
if(u.length===0){u=m?A.aB:A.c
t=B.m(16)
s=B.I(m?A.bF:A.aL,A.q,1)
v.push(B.p(n,B.d("Create a presentation first, then come back to transfer it.",n,n,n,n,n,n,B.l(n,n,m?A.az:A.ak,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),A.f,n,n,new B.o(u,n,s,t,n,n,A.n),n,n,n,n,A.bW,n,n,n))}else A.d.v(v,new B.K(u,new C.et_(o,m),B.U(u).k("K<1,r>")))
A.d.v(w,v)}w.push(A.mz)
w.push(o.awg(m,"Transfer options"))
w.push(A.ac)
w.push(B.A(B.a([B.D(o.aoZ(A.aU,k,!0,A.jj,m,o.r,o.gc5V(),"Scan on another device","Show QR"),1),A.av,B.D(o.aKX(A.jN,!0,A.iU,m,o.gcnE(),"Receive presentations","Scan QR"),1)],h),A.m,n,A.e,A.j,0,n,n))
w.push(A.S)
w.push(B.A(B.a([B.D(o.bwQ(A.aV,k,A.hz,m,o.r,o.gc5S(),"Download .json","Backup file"),1),A.av,B.D(o.aKX(A.aH,!0,Ax.y7,m,o.gczo(),"Import backup","Upload file"),1)],h),A.m,n,A.e,A.j,0,n,n))
if(k){v=A.bj.j(m?0.12:0.08)
u=B.m(16)
t=B.I(A.bj.j(0.28),A.q,1)
s=B.W(A.lc,A.bj.j(0.9),n,n,n,18)
r=o.gaMR()
q=o.gb3T()
p=o.gb3T()===1?"":"s"
A.d.v(w,B.a([A.bx,B.p(n,B.A(B.a([s,A.av,B.D(B.d("Ready to share "+r+" \xb7 "+q+" slide"+p,n,n,n,n,n,n,B.l(n,n,m?A.ad:A.bv,n,n,n,n,n,n,n,n,12,n,n,A.a4,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)],h),A.m,n,A.e,A.j,0,n,n),A.f,n,n,new B.o(v,n,t,u,n,n,A.n),n,n,n,n,A.bC,n,n,n)],h))}j=B.a([j,B.bm(!0,B.v(B.a([new B.C(Ag.LY,i,n),B.D(B.cB(w,n,D.br9,n,n,A.ah,!1),1)],h),A.m,n,A.e,A.j,0,A.p),!0,!1,A.af,!0,!0)],h)
if(o.f)j.push(B.p(n,T.V_,A.f,A.dB,n,n,n,n,n,n,n,n,n,n))
return B.c8(n,l,new B.an(A.W,n,A.aa,A.r,j,n),n,!1,!1,n,n)},
aez(){var w=0,v=B.j(x.H),u=this,t,s
var $async$aez=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
t=u.a
w=2
return B.b(C.i3b(s,t.d,t.e),$async$aez)
case 2:return B.h(null,v)}})
return B.i($async$aez,v)},
awg(d,e){var w=null,v=B.p(w,w,A.f,w,w,new B.o(A.bj,w,w,B.m(2),w,w,A.n),w,14,w,w,w,w,w,3)
return B.A(B.a([v,A.ab,B.d(e.toUpperCase(),w,w,w,w,w,w,B.l(w,w,d?A.az:A.ak,w,w,w,w,w,w,w,w,11,w,w,A.u,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,w,w)},
aVD(d,e,f,g,h,i){var w,v,u,t,s=null,r=B.m(18),q=B.m(18),p=e?A.aB:A.c
if(g)w=A.bj
else w=e?A.bF:A.aL
w=B.I(w,A.q,g?2:1)
v=g?B.a([new B.ac(0,A.G,A.bj.j(0.2),A.cw,14)],x.V):s
u=A.bj.j(g?0.2:0.1)
t=B.m(12)
t=B.p(s,B.W(d,A.bj,s,s,s,22),A.f,s,s,new B.o(u,s,s,t,s,s,A.n),s,s,s,s,A.ck,s,s,s)
u=B.d(i,s,s,s,s,s,s,B.l(s,s,e?A.c:A.M,s,s,s,s,s,s,s,s,13,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
return B.aG(!1,A.a1,!0,s,B.aL(!1,r,!0,B.ez(new B.C(A.bC,B.v(B.a([t,A.S,u,A.bA,B.d(h,s,s,s,s,s,s,B.l(s,s,e?A.az:A.ak,s,s,s,s,s,s,s,s,11,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),A.F,s,A.e,A.j,0,A.p),s),s,new B.o(p,s,w,q,v,s,A.n),s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,f,s,s,s,s,s,s,s),A.f,A.K,0,s,s,s,s,s,A.ag)},
bHk(d,e){var w,v,u,t,s,r,q=null,p=d.a===this.e,o=B.m(16),n=e?A.aB:A.c,m=B.m(16)
if(p)w=A.bj
else w=e?A.bF:A.aL
w=B.I(w,A.q,p?2:1)
v=B.p(q,D.bLg,A.f,q,q,new B.o(q,q,q,B.m(12),q,new B.a8(A.a3,A.a7,A.x,B.a([A.bj,A.bj.j(0.7)],x.O),q,q),A.n),q,44,q,q,q,q,q,44)
u=d.b
u=B.d(u,q,1,A.a2,q,q,q,B.l(q,q,e?A.c:A.M,q,q,q,q,q,q,q,q,q,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=d.r.length
s=x.p
t=B.D(B.v(B.a([u,B.d(""+t+" slides",q,q,q,q,q,q,B.l(q,q,e?A.az:A.ak,q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),A.F,q,A.e,A.j,0,A.p),1)
u=p?A.ee:A.qS
if(p)r=A.bj
else r=e?A.b2:A.dn
return new B.C(A.cH,B.aG(!1,A.a1,!0,q,B.aL(!1,o,!0,B.p(q,B.A(B.a([v,A.bf,t,B.W(u,r,q,q,q,q)],s),A.m,q,A.e,A.j,0,q,q),A.f,q,q,new B.o(n,q,w,m,q,q,A.n),q,q,q,q,A.bC,q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,new C.esN(this,d),q,q,q,q,q,q,q),A.f,A.K,0,q,q,q,q,q,A.ag),q)},
aoZ(d,e,f,g,h,i,j,k,l){var w,v,u,t,s=null,r=e?1:0.45,q=e?j:s,p=B.m(18),o=B.m(18),n=h?A.aB:A.c
if(f)w=d.j(0.45)
else w=h?A.bF:A.aL
w=B.I(w,A.q,f?1.5:1)
v=d.j(0.14)
u=B.m(12)
t=x.p
u=B.a([B.p(s,B.W(g,d,s,s,s,22),A.f,s,s,new B.o(v,s,s,u,s,s,A.n),s,s,s,s,A.qQ,s,s,s)],t)
if(i)u.push(B.ao(s,B.p(s,D.am5,A.f,s,s,D.aZe,s,14,s,s,s,s,s,14),s,s,s,-4,-4,s))
v=B.d(l,s,s,s,s,s,s,B.l(s,s,h?A.c:A.M,s,s,s,s,s,s,s,s,14,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
return B.db(B.aG(!1,A.a1,!0,s,B.aL(!1,p,!0,B.ez(new B.C(E.XL,B.v(B.a([new B.an(A.W,s,A.aa,A.f,u,s),A.ac,v,A.bA,B.d(k,s,s,s,s,s,s,B.l(s,s,h?A.az:A.ak,s,s,s,s,s,s,s,s,11,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),A.F,s,A.e,A.j,0,A.p),s),s,new B.o(n,s,w,o,s,s,A.n),s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,q,s,s,s,s,s,s,s),A.f,A.K,0,s,s,s,s,s,A.ag),r)},
aKX(d,e,f,g,h,i,j){return this.aoZ(d,e,!1,f,g,!1,h,i,j)},
bwQ(d,e,f,g,h,i,j,k){return this.aoZ(d,e,!1,f,g,h,i,j,k)}}
C.Vl.prototype={
T(){return new C.biZ()}}
C.biZ.prototype={
a_(){this.a1()
this.adq()},
adq(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$adq=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
n=r.a
m=n.d
l=m.length
k=n.c
q=l===1?C.fAM(null,A.d.gK(m),k,r.a.f):C.fAM(m,null,k,n.f)
n=r.a.d
m=n.length
p=m===1?A.d.gK(n).a:"library_"+m
n=r.a.d
if(n.length===1&&C.kr(A.d.gK(n).w))C.fAx(A.d.gK(r.a.d),D.d1W)
n=r.a
m=n.c
n=C.i0e(n.d)
w=7
return B.b(C.fAL(p,C.i0j(r.a.d),n,m,q),$async$adq)
case 7:o=e
if(r.c==null){w=1
break}r.m(new C.et0(r,o))
t=2
w=6
break
case 4:t=3
i=s.pop()
if(r.c==null){w=1
break}r.m(new C.et1(r))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$adq,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=B.P(d).ax.a===A.I,h=i?A.db:A.bM,g=k.d
g=g==null?j:A.a.a0(g,"NGMYSLIDESYNC2|")
w=A.d.cI(k.a.d,0,new C.et2())
v=B.aH(j,j,j,j,B.W(A.eA,i?A.ad:A.ak,j,j,j,18),j,j,j,new C.et3(d),j,j,j,j,j,j)
u=x.p
v=B.A(B.a([v,B.D(B.d("Presentation QR",j,j,j,j,j,j,B.l(j,j,i?A.c:A.M,j,j,j,j,j,j,j,j,17,j,j,A.u,j,j,!0,j,j,j,j,j,j,j,j),A.L,j,j),1),A.zb],u),A.m,j,A.e,A.j,0,j,j)
t=B.m(24)
s=k.a
r=B.d(s.e,j,j,j,j,j,j,A.du,A.L,j,j)
s=s.d.length
q=s===1?"":"s"
t=B.p(j,B.v(B.a([r,A.P,B.d(""+s+" presentation"+q+" \xb7 "+w+" slides",j,j,j,j,j,j,B.l(j,j,A.c.j(0.85),j,j,j,j,j,j,j,j,12,j,j,A.O,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],u),A.m,j,A.e,A.j,0,A.p),A.f,j,j,new B.o(j,j,j,t,j,D.a0f,A.n),j,j,j,j,E.Y4,j,j,1/0)
q=B.m(24)
s=B.I(A.aU.j(0.35),A.q,1)
r=B.a([],u)
p=k.f
if(p!=null)r.push(B.d(p,j,j,j,j,j,j,A.a6F,A.L,j,j))
else if(k.d==null)r.push(D.e3d)
else{p=B.a([],u)
o=k.e
if((o==null?"":o).length!==0){o=B.m(16)
n=B.a([new B.ac(0,A.G,A.aE.j(0.35),A.cw,18)],x.V)
m=k.e
m.toString
A.d.v(p,B.a([D.feQ,A.an,B.aE(j,B.p(j,B.A(B.a([D.bMO,A.av,B.d(m,j,j,j,j,j,j,D.f1L,j,j,j)],u),A.m,j,A.e,A.Q,0,j,j),A.f,j,j,new B.o(j,j,j,o,n,D.bRg,A.n),j,j,j,j,A0.agV,j,j,j),A.y,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new C.et4(k,d),j,j,j,j,j,j,!1,A.a8),A.P,D.fj7,A.aA],u))}o=A.c.j(0.04)
n=B.m(22)
m=B.I(A.bF,A.q,1)
l=k.d
l.toString
p.push(B.p(j,B.pC(j,j,!1,l,j,!0,!0,j,!1,D.biO),A.f,j,j,new B.o(o,j,m,n,j,j,A.n),j,j,j,j,A.ck,j,j,j))
A.d.v(r,p)}r.push(A.aA)
r.push(B.d(g===!0?"Cloud QR \u2014 scan on another phone with NGMY Slides open.":"Offline QR \u2014 keep both devices on the same network if scan fails.",j,j,j,j,j,j,A.hp,A.L,j,j))
return B.c8(j,h,B.bm(!0,B.v(B.a([new B.C(Ag.LY,v,j),B.D(B.cd(B.v(B.a([t,A.aP,B.p(j,B.v(r,A.m,j,A.e,A.j,0,A.p),A.f,j,j,new B.o(j,j,s,q,j,D.bTa,A.n),j,j,j,j,A.tz,j,j,1/0)],u),A.m,j,A.e,A.j,0,A.p),A.r,j,A.y,j,E.ahd,j,j,A.ah),1)],u),A.m,j,A.e,A.j,0,A.p),!0,!1,A.af,!0,!0),j,!1,!1,j,j)}}
C.aD8.prototype={
T(){return new C.aD9(new B.ar(A.as,$.aw()),B.ki(!0,null,!0,!0,null,null,!1))}}
C.aD9.prototype={
a_(){var w=this
w.a1()
w.e.aM(0,new C.emv(w))
$.aU.x1$.push(new C.emw(w))},
q(){var w=this.d
w.S$=$.aw()
w.P$=0
this.e.q()
this.a2()},
aYa(){var w,v=this.c
v.toString
w=C.yf(this.d.a.a.toUpperCase())
if(w==null)w=""
B.a6(v,!1).O(w)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=B.aI(a2,A.eD,x.w).w,i=B.m(28),h=B.I(A.bj.j(0.4),A.q,1.2),g=x.V,f=B.a([new B.ac(0,A.G,A.bj.j(0.28),A.ue,36),D.aa7],g),e=B.m(28),d=A.c.j(0.16),a0=B.m(16),a1=x.p
a0=B.p(k,B.v(B.a([B.p(k,D.bIn,A.f,k,k,new B.o(d,k,B.I(A.c.j(0.28),A.q,1),a0,k,k,A.n),k,52,k,k,k,k,k,52),A.ac,D.fc6,A.an,B.d("Type the 5-character code shown with the QR.",k,k,k,k,k,k,B.l(k,k,A.c.j(0.82),k,k,k,k,k,k,k,k,13,k,k,A.a4,k,1.35,!0,k,k,k,k,k,k,k,k),A.L,k,k)],a1),A.m,k,A.e,A.j,0,A.p),A.f,k,k,D.aZF,k,k,k,k,A.xr,k,k,1/0)
d=B.a([],a1)
for(w=l.d,v=l.e,u=0;u<5;++u){t=B.a([],a1)
if(u===2)t.push(A.av)
s=w.a.a
r=u<s.toUpperCase().length
q=u===s.toUpperCase().length&&v.ge6()
p=r?w.a.a.toUpperCase()[u]:""
s=r||q?A.aB:A.M
o=new B.aW(14,14)
if(q)n=A.bj
else n=r?A.bj.j(0.55):A.aK
m=new B.aA(n,q?2:1.2,A.q,-1)
n=q?B.a([new B.ac(0,A.G,A.bj.j(0.28),A.J,12)],g):k
t.push(new B.bD(1,A.bi,B.dg(A.A,new B.x(p,k,D.eWt,k,k,k,k,k,k,k,k,k),k,k,A.bc,new B.o(s,k,new B.bP(m,m,m,m),new B.bq(o,o,o,o),n,k,A.n),A.hX,k,56,k,k,k,k,k),k))
if(u!==4&&u!==1)t.push(L.Iq)
A.d.v(d,t)}g=B.a([B.A(d,A.m,k,A.e,A.j,0,k,k),B.bY(0,B.db(B.aM(k,A.T,!0,k,!0,A.r,k,B.aN(),w,k,k,k,k,k,2,D.bPw,A.y,!0,k,!0,k,!1,v,A.ai,k,k,B.a([new B.u4(B.af("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.AV(5,k),new C.btc()],x.aS),k,k,A.aNU,k,5,k,1,k,k,!1,"\u2022",k,new C.emr(l),k,new C.ems(l),k,!1,k,k,!1,k,!0,k,A.a9,k,k,k,k,k,k,k,k,k,k,k,k,!0,A.a5,k,A.lX,k,k,k,k),0),0,0,0)],a1)
d=C.yf(w.a.a.toUpperCase())==null?k:l.gc5W()
return B.av(new B.C(new B.Q(24,24,24,24+j.f.d),B.aG(!1,A.a1,!0,k,new B.cU(Ad.JK,B.p(k,B.bw(e,B.v(B.a([a0,new B.C(D.brE,B.v(B.a([new B.an(A.W,k,A.aa,A.r,g,k),A.S,D.fax,A.bx,new B.a7(1/0,50,B.bJ(D.fqB,d,B.bk(A.bj,A.bm,A.ak,k,A.c,k,k,k,new B.b7(B.m(16),A.Y),k,k,k)),k),A.an,B.bK(!1,A.nq,k,k,!0,k,k,new C.emt(a2),k,B.fv(k,k,k,k,k,k,k,k,k,k,k,A.bJ,k,k,k,k,k,k,k,k,k,k,k,k,k,k))],a1),A.m,k,A.e,A.j,0,A.p),k)],a1),A.m,k,A.e,A.Q,0,A.p),A.aq),A.f,k,k,new B.o(A.db,k,h,i,f,k,A.n),k,k,k,k,k,k,k,k),k),A.f,A.K,0,k,k,k,k,k,A.ag),k),k,k,k)}}
C.btc.prototype={
oj(d,e){var w=e.a.toUpperCase()
return e.cFv(B.h8(A.bu,w.length),w)}}
C.aq6.prototype={
T(){return new C.aDc(B.yP(A.Ld,A.nx,A.tY))}}
C.aDc.prototype={
q(){this.d.q()
this.a2()},
aY9(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
B.iL(w,d)},
a9v(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a9v=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e){w=1
break}s=t.c
s.toString
w=3
return B.b(C.fJi(s),$async$a9v)
case 3:r=e
if(r==null||t.c==null){w=1
break}t.aY9("NGMYSLIDECODE|"+r)
case 1:return B.h(u,v)}})
return B.i($async$a9v,v)},
c5U(d){var w,v,u,t
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u){t=C.i0h(w[u])
if(t!=null){this.aY9(t)
return}}},
B(d){var w,v,u,t=this,s=null,r=B.aH(s,s,s,s,A.vA,s,s,s,t.gbLq(),s,s,s,s,"Enter document code",s),q=t.f,p=q?"Flash off":"Flash on",o=x.p
p=B.eF(B.a([r,B.aH(s,s,s,s,B.W(q?A.qX:Al.MU,s,s,s,s,s),s,s,s,new C.et6(t),s,s,s,s,p,s)],o),s,s,!0,!0,A.db,s,1,s,s,s,!1,s,!1,A.c,s,s,s,!0,s,s,s,s,s,D.frP,s,s,s,1,s,!0)
r=B.yO(t.d,A.bQ,t.gc5T())
w=B.m(28)
w=B.av(B.p(s,s,A.f,s,s,new B.o(s,s,B.I(A.bj,A.q,3),w,B.a([new B.ac(2,A.G,A.bj.j(0.35),A.J,24)],x.V),s,A.n),s,260,s,s,s,s,s,260),s,s,s)
v=A.w.j(0.72)
u=B.m(16)
return B.c8(p,A.w,new B.an(A.W,s,A.b_,A.r,B.a([r,w,B.ao(32,B.p(s,D.ffT,A.f,s,s,new B.o(v,s,B.I(A.bj.j(0.45),A.q,1),u,s,s,A.n),s,s,s,s,A.jd,s,s,s),s,s,20,20,s,s)],o),s),s,!1,!1,s,s)}}
C.bto.prototype={
B(d){var w=null,v=B.m(24),u=B.I(A.aK,A.q,1)
return B.aG(!1,A.a1,!0,w,B.p(w,B.v(B.a([B.p(w,D.bGy,A.f,w,w,D.aZo,w,56,w,w,w,w,w,56),A.aP,D.frv,A.an,new B.kb(this.c,new C.f3k(),w,w,x.cI),A.aP,new B.kb(this.d,new C.f3l(),w,w,x.cl),A.ac,D.frs],x.p),A.m,w,A.e,A.Q,0,A.p),A.f,w,Ad.JK,new B.o(A.aB,w,u,v,w,w,A.n),w,w,w,K.Yb,D.bsg,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ag)}}
C.a72.prototype={
T(){return new C.biI(A.bw)},
gdc(){return this.c}}
C.biI.prototype={
a_(){var w=this
w.a1()
if(w.a.d)return
w.Zl()
w.d=B.dA(A.h4,new C.eb0(w))},
q(){var w=this.d
if(w!=null)w.a8(0)
this.a2()},
Zl(){return this.ck2()},
ck2(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$Zl=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q={}
p=t.a
if(p.d){if(t.c!=null)t.m(new C.eaZ(t))
w=1
break}s=p.e
q.a=null
w=s!=null?3:5
break
case 3:q.a=s.by(new B.S(Date.now(),0,!1))
w=4
break
case 5:w=6
return B.b(C.cd0(p.c),$async$Zl)
case 6:r=e
q.a=r==null?A.bw:r
case 4:if(t.c==null){w=1
break}t.m(new C.eb_(q,t))
if(q.a.a<=0&&!t.f){t.f=!0
t.a.f.$0()}case 1:return B.h(u,v)}})
return B.i($async$Zl,v)},
bNi(d){var w,v,u=d.a,t=A.o.an(u,36e8)
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
return B.p(r,B.A(B.a([B.W(A.Fx,v,r,r,r,20),A.av,B.D(B.d("Marriage document session \xb7 "+s.bNi(s.e),r,r,r,r,r,r,B.l(r,r,v,r,r,r,r,r,r,r,r,13,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),1)],x.p),A.m,r,A.e,A.j,0,r,r),A.f,r,r,new B.o(w,r,t,u,r,r,A.n),r,r,r,W.afY,A.ix,r,r,1/0)}}
C.a7V.prototype={
n3(){var w,v,u,t=this
t.wR()
w=t.cx
v=t.c
w.bor(t.cy,t,v)
u=x.Y
v.a.n(0,"/A",B.pJ(B.F(["/S",D.e6T,"/URI",new B.ri(B.VT(w.as),A.uh,!0)],x.N,u),u))}}
C.a7W.prototype={
a4(){return"PdfAnnotFlags."+this.b}}
C.b1s.prototype={
bvU(d,e,f,g,h,i,j,k,l,m){var w=B.ew([D.e5b],x.di)
this.w!==$&&B.aO()
this.w=w},
gcIL(){var w=this.w
w===$&&B.c()
if(w.a===0)return 0
return new B.jK(w,new C.cfc(),B.a3(w).k("jK<cn.E,H>")).fF(0,new C.cfd())},
aBD(d,e,f){var w,v,u,t=this,s=f.a
s.n(0,"/Subtype",new B.h6(t.a))
w=t.b
v=w.a
u=w.b
s.n(0,"/Rect",B.tg(B.a([v,u,v+w.c,u+w.d],x.cA)))
s.n(0,"/P",new B.j8(d.a,d.b))
s.n(0,"/Border",B.tg(O.anN))
w=t.w
w===$&&B.c()
if(w.a!==0)s.n(0,"/F",new B.fX(t.gcIL()))
w=t.z
if(w.a!==0)s.n(0,"/AP",B.pJ(w,x.Y))}}
C.cfe.prototype={}
C.a29.prototype={}
C.ahh.prototype={}
C.aPU.prototype={
fX(d){var w,v,u,t,s,r,q=this,p=null
q.lb(d)
q.Lt(d)
w=q.a
v=d.a
v.toString
w.toString
w=d.beb(w)
u=x.N
t=x.Y
s=new C.cfe(q.d.a,"/Link",w,p,p,p,p,p,B.T(u,t))
s.bvU(p,p,p,p,p,p,p,w,p,"/Link")
w=v.x
t=B.pJ(B.F(["/Type",D.e6R],u,t),t)
u=w.b++
r=w.e
r===$&&B.c()
r=new C.a7V(s,v,w,u,0,t,r,B.a([],x.s),p,p,0)
w.c.L(0,r)
v.dx.push(r)}}
C.avz.prototype={}
C.aRo.prototype={
fX(d){var w,v,u,t,s=this
s.lb(d)
w=s.b
if(w!=null){v=B.dl()
u=s.a
v.e2(u.a,u.b,0,1)
u=d.b
u.i0()
t=s.a
t.toString
u.KE(t)
u.RW(0)
u.oF(0,v)
w.fX(d)
u.n6(0)}}}
var z=a.updateTypes(["ay<~>()","~(lB)","R(hZ)","~()","R(eI)","R(oc)","R(lB)","~(hZ)","R(eI,eI)","Jn(Y)","R(nD)","R(l8)","ay<R>()","H(H,hZ)","a4<n,@>(hZ)","aj<z7>()","n(nD)","R(a7j)","n(lB)","n(vH)","R(Ee)","H(hZ,hZ)","n(eI)","r(eI)","cK(eI)","r(hw)","~(hw)","eI(uu,N,N,N,N,H{fx:n,key:n,rotation:N})","eI(n,N,H)","H(oc,oc)","R(z7)","R(n,aj<z7>)","a4<n,@>(oc)","nD()","XY(Y)","eI(n,N,N,N,N,N{align:pQ,anim:hw,bullets:R,color:H?,delay:H,fx:n,key:n,style:Ha,weight:qb})","a0a(Y)","eI(n,N,N,N,N{anim:hw,delay:H,fx:n,key:n})","ay<~>(oc)","R(mm)","XW(Y)","a_J(Y)","a_I(Y)","OS(Y)","Z6(Y)","eI(uu,N,N,N,N,H,n,n{anim:hw,delay:H,rotation:N,stroke:H,strokeWidth:N})","eI(n,N,N,N,N,N,n,n,H)","eI(N,N,n,H{size:N})","r(r6,N,N)","l8()","oc(a4<@,@>)","~(uk)","Ee()","fe(eI)","r(iV)","YF(Y)","~(E5)","Z_(Y)","H(eI,eI)","eI(eI)","a4<n,@>(eI)","eI(a4<@,@>)","lB(lB)","a4<n,@>(lB)","lB(a4<@,@>)","R(jB)","jB()","n(hZ)","~(aj<oc>)","S(aj<hZ>)","S(hZ)","aj<hZ>(n?)","abR(Y,H)","~(R(eI,eI))","acu(Y)","ae8(Y,H)","w(lB,R)","V5(Y)","acx(Y)","V8(Y)","~(mq)","hZ(hZ)","N(eI)","a_e(Y)","ZR(Y)","hZ()","aj<EA>()","ay<~>(aj<hZ>)","r(bu<H,hZ>)","C(jB)","C(Ee)","ay<~>(hw,~())","r(aj<hw>,hw?,~(hw),w)","R(m_)","aj<jk<mq>>(Y)","jk<mq>(mq)","hZ(a4<@,@>)","Vk(Y)","eI(n,N,N,N,N,N,H{align:pQ,style:Ha,weight:qb})","Vl(Y)","r(hZ)","~(lT)","Ie(Y,lB,r?)","H(a7W)","ay<aj<a4<n,@>>?>()","n(n)","ay<z5>({paper:n?,photo:dD?,request:n,template!lb})","ay<a7b>({doc!z5,history:aj<+(n,n)>,instruction!n,photo:dD?,template!lb})","acr(Y)"])
C.cCY.prototype={
$2(d,e){d=d+e&536870911
d=d+((d&524287)<<10)&536870911
return d^d>>>6},
$S:78}
C.cCZ.prototype={
$1(d){d=d+((d&67108863)<<3)&536870911
d^=d>>>11
return d+((d&16383)<<15)&536870911},
$S:74}
C.cD_.prototype={
$1(d){var w,v,u,t,s,r,q
for(w=this.a,v=this.b,u=v.c-1,v=v.b;t=w.a,t<d;){t=w.c
if(t<0){w.c=t-1
s=0
r=16}else{s=v[t]
r=t===u?A.o.gaj7(s):16;--w.c}w.b=A.o.dU(w.b,r)+s
w.a+=r}v=w.b
t-=d
q=A.o.mi(v,t)
w.b=v-A.o.dU(q,t)
w.a=t
return q},
$S:74}
C.cD0.prototype={
$0(){var w,v,u,t,s
for(w=this.a,v=w.$flags|0,u=1,t=0;t<8;++t){if(u===0)break
s=w[t]+u
v&2&&B.ai(w)
w[t]=s&255
u=s>>>8}},
$S:0}
C.bN9.prototype={
$1(d){return J.eQ(A.dz.gaO(d),d.byteOffset,d.byteLength)},
$S:1666}
C.fnA.prototype={
$5(d,e,f,g,h){var w=this,v=w.a
if((v&8)!==0)B.iG(w.b,d+f,e+g,w.c,h,w.d,!1,w.e,w.f)
if((v&4)!==0)B.iG(w.b,d-f,e+g,w.c,h,w.d,!1,w.e,w.f)
if((v&2)!==0)B.iG(w.b,d+f,e-g,w.c,h,w.d,!1,w.e,w.f)
if((v&1)!==0)B.iG(w.b,d-f,e-g,w.c,h,w.d,!1,w.e,w.f)},
$S:1667}
C.bXM.prototype={
$1(d){return B.a1(d,x.N,x.z)},
$S:27}
C.bXN.prototype={
$2(d,e){var w,v=J.q(e,"savedAt")
v=J.k(v==null?"":v)
w=J.q(d,"savedAt")
return A.a.aL(v,J.k(w==null?"":w))},
$S:43}
C.bXP.prototype={
$1(d){var w=J.q(d,"id")
return J.k(w==null?"":w)===this.a},
$S:4}
C.fDm.prototype={
$1(d){return new C.a0a(this.a,this.b,C.i19(),null)},
$S:z+36}
C.f1N.prototype={
$0(){var w=this.a
w.e=this.b
w.f=!1},
$S:0}
C.f1R.prototype={
$1(d){return this.a.d.t(0,d.a)},
$S:z+2}
C.f1S.prototype={
$0(){var w=this.a
w.r=!0
w.x=null},
$S:0}
C.f1T.prototype={
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
C.f1O.prototype={
$0(){var w=this.a
w.r=!0
w.x=null},
$S:0}
C.f1P.prototype={
$0(){var w=this.a
w.r=!1
w.x="Could not open that saved presentation."
w.y=!0},
$S:0}
C.f1Q.prototype={
$0(){var w=this.a
w.r=!1
w.x='"'+this.b.b+'" is back in your presentations.'
w.y=!1},
$S:0}
C.f1I.prototype={
$1(d){var w=null,v=B.d('"'+this.a+'" will be removed from the database. Your own copy stays in your presentations.',w,w,w,w,w,w,A.hB,w,w,w)
return B.ej(B.a([B.bK(!1,D.fej,w,w,!0,w,w,new C.f1G(d),w,w),B.bK(!1,D.fdr,w,w,!0,w,w,new C.f1H(d),w,w)],x.p),w,w,D.WM,v,w,w,w,w,D.fs5,w)},
$S:19}
C.f1G.prototype={
$0(){B.a6(this.a,!1).O(!1)
return null},
$S:0}
C.f1H.prototype={
$0(){B.a6(this.a,!1).O(!0)
return null},
$S:0}
C.f1J.prototype={
$0(){return this.a.r=!0},
$S:0}
C.f1K.prototype={
$0(){return this.a.r=!1},
$S:0}
C.f1X.prototype={
$0(){var w=this.a
return w.m(new C.f1W(w,this.b))},
$S:0}
C.f1W.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.f1M.prototype={
$0(){var w=this.a
return w.m(new C.f1L(w,this.b,this.c))},
$S:0}
C.f1L.prototype={
$0(){var w=this.a.d,v=this.c.a
return this.b?w.W(0,v):w.L(0,v)},
$S:0}
C.f1U.prototype={
$0(){return this.a.a0s(this.b)},
$S:0}
C.f1V.prototype={
$0(){return this.a.Ox(0,this.b)},
$S:0}
C.f2_.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.f20.prototype={
$0(){var w=this.a
return w.m(new C.f1Z(w,this.b))},
$S:0}
C.f1Z.prototype={
$0(){var w=this.a,v=w.d
if(this.b)v.a9(0)
else{w=w.a.c
v.v(0,new B.K(w,new C.f1Y(),B.U(w).k("K<1,n>")))}},
$S:0}
C.f1Y.prototype={
$1(d){return d.a},
$S:z+67}
C.f9_.prototype={
$1(d){var w,v=x.N,u=x.z,t=B.a1(d,v,u),s=t.h(0,"id")
s=J.k(s==null?"":s)
w=x.f
v=F.h27(w.b(t.h(0,"doc"))?B.a1(w.a(t.h(0,"doc")),v,u):A.cz)
t=t.h(0,"updatedAt")
u=B.bi(J.k(t==null?"":t))
return new C.oc(s,v,u==null?new B.S(Date.now(),0,!1):u)},
$S:z+50}
C.f90.prototype={
$1(d){return d.a.length!==0},
$S:z+5}
C.fq6.prototype={
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
C.fq4.prototype={
$1(d){return!this.a.t(0,d.a)},
$S:z+5}
C.fq5.prototype={
$2(d,e){return e.c.aL(0,d.c)},
$S:z+29}
C.fCR.prototype={
$1(d){return d.ae()},
$S:z+32}
C.fng.prototype={
$1(d){return d.a===this.a},
$S:z+5}
C.fDI.prototype={
$1(d){return new C.XY(this.a,null)},
$S:z+34}
C.cEj.prototype={
$1(d){return A.a.i(d.b).length===0},
$S:z+39}
C.cEl.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.cEo.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cEp.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.cEn())},
$S:11}
C.cEn.prototype={
$0(){},
$S:0}
C.cEq.prototype={
$1(d){var w=0,v=B.j(x.a),u=this,t,s,r,q,p
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(C.a18(t.a.c),$async$$1)
case 2:s=f
r=u.b
q=J.cE(s)
p=q.ba(s,new C.cEm(r))
if(p<0)q.ck(s,0,r)
else q.n(s,p,r)
w=3
return B.b(C.agA(t.a.c,s),$async$$1)
case 3:return B.h(null,v)}})
return B.i($async$$1,v)},
$S:320}
C.cEm.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cEr.prototype={
$1(d){},
$S:31}
C.cEk.prototype={
$1(d){return new C.XW(this.b,this.a.gctD(),null)},
$S:z+40}
C.cEs.prototype={
$1(d){return D.fJd},
$S:z+43}
C.cEf.prototype={
$1(d){var w=null,v=B.m(24),u=B.I(D.Wt,A.q,1),t=x.p
return B.av(B.aG(!1,A.a1,!0,w,B.p(w,B.v(B.a([new B.C(D.bs2,B.v(B.a([B.p(w,D.bFC,A.f,w,w,new B.o(A.ay.j(0.14),w,w,w,w,w,A.a6),w,56,w,w,w,w,w,56),A.aP,D.fcv,A.S,B.d("\u201c"+this.a.b.a+"\u201d is removed from this device. This cannot be undone.",w,w,w,w,w,w,D.f0N,A.L,w,w)],t),A.m,w,A.e,A.j,0,A.p),w),A.e1,new B.C(A.pD,B.A(B.a([B.D(B.dV(D.fj9,new C.cEd(d),B.de(w,w,w,w,w,w,w,w,w,E.mV,w,w,A.cf,w,new B.b7(B.m(14),A.Y),D.aWF,w,w,w,w)),1),A.av,B.D(B.bJ(D.foW,new C.cEe(d),B.bk(A.bI,w,w,w,w,w,A.cf,w,new B.b7(B.m(14),A.Y),w,w,w)),1)],t),A.m,w,A.e,A.j,0,w,w),w)],t),A.m,w,A.e,A.Q,0,A.p),A.f,w,A.wx,new B.o(D.abO,w,u,v,D.cSl,w,A.n),w,w,w,K.Yb,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ag),w,w,w)},
$S:1668}
C.cEd.prototype={
$0(){B.a6(this.a,!1).O(!1)
return null},
$S:0}
C.cEe.prototype={
$0(){B.a6(this.a,!1).O(!0)
return null},
$S:0}
C.cEg.prototype={
$0(){return J.nl(this.a.d,new C.cEc(this.b))},
$S:0}
C.cEc.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cEb.prototype={
$1(d){var w,v,u,t=null,s=B.m(28),r=B.I(D.Wt,A.q,1),q=x.p
q=B.a([B.A(B.a([B.p(t,D.bKt,A.f,t,t,new B.o(t,t,t,B.m(14),t,D.anj,A.n),t,44,t,t,t,t,t,44),A.bf,B.D(B.v(B.a([B.d(this.a.b.a,t,1,A.a2,t,t,t,D.aPy,t,t,t),A.bA,D.foT],q),A.F,t,A.e,A.j,0,A.p),1)],q),A.m,t,A.e,A.j,0,t,t),A.aA],q)
for(w=0;w<2;++w){v={}
u=D.dc3[w]
v.a=null
u=u.a
v.a=u[0]
q.push(new C.aws(u[1],u[2],u[3],new C.cE9(v,d),!1,t))}q.push(A.an)
q.push(D.bmb)
q.push(A.an)
q.push(new C.aws(A.e4,"Delete book","Remove it from this device",new C.cEa(d),!0,t))
return B.bm(!0,B.p(t,B.v(q,A.F,t,A.e,A.Q,0,A.p),A.f,t,t,new B.o(D.abO,t,r,s,t,t,A.n),t,t,t,A.tu,Ao.LJ,t,t,t),!0,!1,A.af,!0,!0)},
$S:28}
C.cE9.prototype={
$0(){var w=this.a.a
B.a6(this.b,!1).O(w)
return null},
$S:0}
C.cEa.prototype={
$0(){B.a6(this.a,!1).O("delete")
return null},
$S:0}
C.cEi.prototype={
$3(d,e,f){var w=null,v=B.m(4),u=B.a([new B.ac(0,A.G,A.w.j(0.45),A.aFu,12)],x.V)
return B.dW(B.eC(A.A,e,B.p(w,B.bw(B.m(4),new B.a7(62,95.81818181818181,B.f2(A.A,F.an6(d),A.f,A.dt),w),A.aq),A.f,w,w,new B.o(w,w,w,v,u,w,A.n),w,w,w,w,w,w,w,w),w),new B.u(f,0))},
$S:z+48}
C.cEh.prototype={
$0(){return this.a.c0H()},
$S:0}
C.cE8.prototype={
$0(){return this.a.aWM(0,this.b)},
$S:0}
C.cE7.prototype={
$0(){return this.a.CN(this.b)},
$S:0}
C.cE6.prototype={
$0(){return this.a.CN(this.b)},
$S:0}
C.cEt.prototype={
$2(d,e){var w=this.a
return w.bAn(J.q(w.d,e))},
$S:41}
C.cDA.prototype={
$0(){var w=this.a
if(w.c!=null)w.Ar()},
$S:0}
C.cDz.prototype={
$0(){var w=this.a,v=w.w
return v.push(w.aZC("Page "+(v.length+1),"",""))},
$S:0}
C.cDC.prototype={
$0(){var w=this.a.w,v=this.b,u=w[v],t=this.c
w[v]=w[t]
w[t]=u},
$S:0}
C.cDK.prototype={
$0(){},
$S:0}
C.cDL.prototype={
$1(d){var w=this.a,v=w.a,u=$.aw()
v.S$=u
v.P$=0
w=w.b
w.S$=u
w.P$=0
return null},
$S:8}
C.cDD.prototype={
$0(){return this.a.c="data:"+this.b+";base64,"+A.cS.gcv().aJ(this.c)},
$S:0}
C.cDB.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.cDF.prototype={
$0(){return this.a.PR(this.b)},
$S:0}
C.cDG.prototype={
$0(){return this.a.PR(this.b)},
$S:0}
C.cDH.prototype={
$0(){var w=this.a
w.m(new C.cDE(this.b))
w.DD()},
$S:0}
C.cDE.prototype={
$0(){return this.a.c=""},
$S:0}
C.cDJ.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new C.cDI(w,d))
w.DD()},
$S:z+51}
C.cDI.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.cDQ.prototype={
$2(d,e){if(d)this.a.Ar()},
$S:120}
C.cDM.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=2
return B.b(u.a.Ar(),$async$$0)
case 2:t=u.b
if(t.e!=null)t.I(x.q).f.R(D.ePt)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.cDN.prototype={
$0(){return this.a.aVK(this.b,-1)},
$S:0}
C.cDO.prototype={
$0(){return this.a.aVK(this.b,1)},
$S:0}
C.cDP.prototype={
$0(){return this.a.c1W(0,this.b)},
$S:0}
C.fuD.prototype={
$1(d){return C.hc5()},
$S:44}
C.fuE.prototype={
$1(d){return null},
$S:31}
C.fdp.prototype={
$1(d){return null},
$S:31}
C.fvC.prototype={
$1(d){var w=d.b[0]
w.toString
return w},
$S:318}
C.fvB.prototype={
$2(d,e){return A.o.aL(e.length,d.length)},
$S:242}
C.fvI.prototype={
$1(d){var w=this.a
return C.fVD(d)===w||C.hgB(d)===w},
$S:z+4}
C.fcs.prototype={
$1(d){return A.a.aT(A.o.u(d),2,"0")},
$S:73}
C.c7l.prototype={
$1(d){return d.length!==0},
$S:3}
C.fuB.prototype={
$1(d){return d.a===this.a.a.a},
$S:z+4}
C.fuC.prototype={
$1(d){return C.fxl(d)&&A.a.t(d.db,"rais")},
$S:z+4}
C.fps.prototype={
$1(d){var w=null
return B.bm(!0,new B.C(E.xq,B.v(B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.b2,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bx,D.fjK,A.P,B.d("Hati ya jimbo: "+this.a,w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aP,B.dq(D.G8,D.fe1,new C.fpq(d),B.bk(A.bY,w,w,w,A.w,w,A.cf,w,w,w,w,w)),A.S,B.eB(A.vz,D.fkY,new C.fpr(d),B.de(w,w,w,w,w,w,w,w,w,A.ad,w,w,A.cf,w,w,Q.wv,w,w,w,w))],x.p),A.aj,w,A.e,A.Q,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:28}
C.fpq.prototype={
$0(){B.a6(this.a,!1).O("continue")
return null},
$S:0}
C.fpr.prototype={
$0(){B.a6(this.a,!1).O("new")
return null},
$S:0}
C.fpt.prototype={
$1(d){var w=null
return B.ej(B.a([B.bK(!1,D.fap,w,w,!0,w,w,new C.fpo(d),w,w),B.bJ(D.fr8,new C.fpp(d),w)],x.p),w,w,w,D.fsZ,w,w,w,w,D.faj,w)},
$S:19}
C.fpo.prototype={
$0(){B.a6(this.a,!1).O(!1)
return null},
$S:0}
C.fpp.prototype={
$0(){B.a6(this.a,!1).O(!0)
return null},
$S:0}
C.e5P.prototype={
$0(){var w=this.a
w.r=w.f=w.e=!1},
$S:0}
C.e5N.prototype={
$0(){return this.a.e=!0},
$S:0}
C.e5O.prototype={
$0(){return this.a.f=!0},
$S:0}
C.e5Q.prototype={
$0(){return this.a.r=!1},
$S:0}
C.e5R.prototype={
$0(){return this.a.r=!0},
$S:0}
C.fvH.prototype={
$1(d){return A.a.aT(A.o.u(d),2,"0")},
$S:73}
C.fvD.prototype={
$2$h$w(d,e){var w=null
return new B.bH(A.a3,w,w,B.Dq(A.A,B.p(w,w,A.f,w,w,new B.o(this.a.j(0.14),w,w,B.m(3),w,w,A.n),w,d,w,w,w,w,w,w),w,e),w)},
$0(){return this.$2$h$w(5,1)},
$1$w(d){return this.$2$h$w(5,d)},
$1$h(d){return this.$2$h$w(d,1)},
$S:1669}
C.fvF.prototype={
$1(d){var w=null,v=B.m(3)
return B.p(A.A,B.d(d,w,w,w,w,w,w,D.f1Y,w,w,w),A.f,w,w,new B.o(this.a,w,w,v,w,w,A.n),w,12,w,w,w,w,w,w)},
$S:187}
C.fvG.prototype={
$1$size(d){var w=null
return B.A(B.a([B.p(w,w,A.f,w,w,new B.o(w,w,B.I(A.hV,A.q,1.5),w,w,w,A.a6),w,d,w,w,w,w,w,d),B.dW(B.p(w,w,A.f,w,w,new B.o(w,w,B.I(A.hV,A.q,1.5),w,w,w,A.a6),w,d,w,w,w,w,w,d),new B.u(-d*0.38,0))],x.p),A.m,w,A.bb,A.j,0,w,w)},
$0(){return this.$1$size(18)},
$S:1670}
C.fvE.prototype={
$2$female$size(d,e){var w=null,v=d?D.adA:this.a,u=B.I(A.hV,A.q,1),t=e*0.32,s=B.ao(w,B.p(w,w,A.f,w,w,new B.o(v,w,w,w,w,w,A.a6),w,t,w,w,w,w,w,t),w,w,w,w,e*0.16,w),r=d?0.62:0.5
return B.p(w,new B.an(A.A,w,A.aa,A.r,B.a([s,B.ao(e*0.06,B.p(w,w,A.f,w,w,new B.o(v,w,w,B.m(7),w,w,A.n),w,t,w,w,w,w,w,e*r),w,w,w,w,w,w)],x.p),w),A.f,w,w,new B.o(D.ac1,w,u,w,w,w,A.a6),w,e,w,w,w,w,w,e)},
$1$female(d){return this.$2$female$size(d,18)},
$S:1671}
C.fH9.prototype={
$1(d){return new C.acr(this.a,this.b,null)},
$S:z+108}
C.dW9.prototype={
$2(d,e){var w,v,u,t=null,s=this.b,r=s?D.bjh:A.KI,q=B.I(D.j5.j(0.25),A.q,1),p=B.av(B.p(t,t,A.f,t,t,new B.o(A.bY.j(0.45),t,t,B.m(2),t,t,A.n),t,4,t,t,t,t,t,40),t,t,t),o=B.m(15)
o=B.p(t,D.am4,A.f,t,t,new B.o(t,t,B.I(A.c.j(0.5),A.q,1.2),o,B.a([new B.ac(0,A.G,D.j5.j(0.35),A.ej,10)],x.V),D.bTM,A.n),t,t,t,t,A.Lx,t,t,t)
w=this.a
v=w.d.length
u=x.p
return B.p(t,B.v(B.a([new B.C(H.Y0,B.v(B.a([p,A.aA,B.A(B.a([o,A.bf,B.D(B.v(B.a([B.d("Chagua muundo wa hati",t,t,t,t,t,t,B.l(t,t,s?A.c:D.j5,t,t,t,t,t,t,t,t,17,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),A.bA,B.d(w.c+" \xb7 "+v+" miundo",t,t,t,t,t,t,D.f1f,t,t,t)],u),A.F,t,A.e,A.j,0,A.p),1)],u),A.m,t,A.e,A.j,0,t,t)],u),A.m,t,A.e,A.j,0,A.p),t),B.D(B.ic(!0,t,e,A.y,D.aMX,new C.dW8(w,this.c),v,D.agQ,t,A.ah,!1),1)],u),A.m,t,A.e,A.j,0,A.p),A.f,t,t,new B.o(r,t,q,A.m1,t,t,A.n),t,t,t,t,t,t,t,t)},
$S:115}
C.dW8.prototype={
$2(d,e){var w=this.a.d[e]
return new C.abR(w,new C.dW7(this.b,w),null)},
$S:z+72}
C.dW7.prototype={
$0(){B.a6(this.a,!1).O(this.b.a)
return null},
$S:0}
C.fpw.prototype={
$1(d){return d.w==="hati_kuhowa"},
$S:z+2}
C.fpx.prototype={
$1(d){var w=null,v=this.a
return B.bm(!0,new B.C(E.xq,B.v(B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.b2,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bx,D.fn2,A.P,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aP,B.dq(D.G8,B.d('Endelea na "'+A.d.gK(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fpu(d),B.bk(D.j5,w,w,w,A.c,w,A.cf,w,w,w,w,w)),A.S,B.eB(A.nW,D.Tj,new C.fpv(d),B.de(w,w,w,w,w,w,w,w,w,A.ad,w,w,A.cf,w,w,Q.wv,w,w,w,w))],x.p),A.aj,w,A.e,A.Q,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:28}
C.fpu.prototype={
$0(){B.a6(this.a,!1).O("continue")
return null},
$S:0}
C.fpv.prototype={
$0(){B.a6(this.a,!1).O("new")
return null},
$S:0}
C.fpA.prototype={
$1(d){return d.w==="hati_kuhoweya"},
$S:z+2}
C.fpB.prototype={
$1(d){var w=null,v=this.a
return B.bm(!0,new B.C(E.xq,B.v(B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.b2,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bx,D.fbn,A.P,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aP,B.dq(D.G8,B.d('Endelea na "'+A.d.gK(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fpy(d),B.bk(D.j5,w,w,w,A.c,w,A.cf,w,w,w,w,w)),A.S,B.eB(A.nW,D.Tj,new C.fpz(d),B.de(w,w,w,w,w,w,w,w,w,A.ad,w,w,A.cf,w,w,Q.wv,w,w,w,w))],x.p),A.aj,w,A.e,A.Q,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:28}
C.fpy.prototype={
$0(){B.a6(this.a,!1).O("continue")
return null},
$S:0}
C.fpz.prototype={
$0(){B.a6(this.a,!1).O("new")
return null},
$S:0}
C.fpE.prototype={
$1(d){return d.w==="hati_malipo_awamu"},
$S:z+2}
C.fpF.prototype={
$1(d){var w=null,v=this.a
return B.bm(!0,new B.C(E.xq,B.v(B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.b2,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bx,D.fhA,A.P,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aP,B.dq(D.G8,B.d('Endelea na "'+A.d.gK(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fpC(d),B.bk(D.j5,w,w,w,A.c,w,A.cf,w,w,w,w,w)),A.S,B.eB(A.nW,D.Tj,new C.fpD(d),B.de(w,w,w,w,w,w,w,w,w,A.ad,w,w,A.cf,w,w,Q.wv,w,w,w,w))],x.p),A.aj,w,A.e,A.Q,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:28}
C.fpC.prototype={
$0(){B.a6(this.a,!1).O("continue")
return null},
$S:0}
C.fpD.prototype={
$0(){B.a6(this.a,!1).O("new")
return null},
$S:0}
C.fIC.prototype={
$1(d){return D.fN_},
$S:z+74}
C.eb3.prototype={
$2(d,e){var w,v=null,u=this.a,t=u?D.bbe:A.KI,s=B.I(A.aw.j(0.25),A.q,1),r=B.av(B.p(v,v,A.f,v,v,new B.o(A.aw.j(0.45),v,v,B.m(2),v,v,A.n),v,4,v,v,v,v,v,40),v,v,v),q=B.m(15)
q=B.p(v,D.bMK,A.f,v,v,new B.o(v,v,B.I(A.c.j(0.5),A.q,1.2),q,B.a([new B.ac(0,A.G,A.bY.j(0.35),A.ej,10)],x.V),D.ano,A.n),v,v,v,v,A.Lx,v,v,v)
w=x.p
return B.p(v,B.v(B.a([new B.C(H.Y0,B.v(B.a([r,A.aA,B.A(B.a([q,A.bf,B.D(B.v(B.a([B.d("Chagua muundo wa hati",v,v,v,v,v,v,B.l(v,v,u?A.c:A_.KF,v,v,v,v,v,v,v,v,17,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.bA,B.d("Hati ya Ndoa \xb7 19 miundo",v,v,v,v,v,v,D.eZL,v,v,v)],w),A.F,v,A.e,A.j,0,A.p),1)],w),A.m,v,A.e,A.j,0,v,v)],w),A.m,v,A.e,A.j,0,A.p),v),B.D(B.ic(!0,v,e,A.y,D.aMX,new C.eb2(this.b),19,D.agQ,v,A.ah,!1),1)],w),A.m,v,A.e,A.j,0,A.p),A.f,v,v,new B.o(t,v,s,A.m1,v,v,A.n),v,v,v,v,v,v,v,v)},
$S:115}
C.eb2.prototype={
$2(d,e){var w=D.Q2[e]
return new C.ae8(w,new C.eb1(this.a,w),null)},
$S:z+75}
C.eb1.prototype={
$0(){B.a6(this.a,!1).O(this.b.a)
return null},
$S:0}
C.fxp.prototype={
$0(){return B.fUE(C.hPI(this.a))},
$S:302}
C.fxo.prototype={
$0(){var w=C.fVV(this.a)
return"data:image/png;base64,"+A.cS.gcv().aJ(w)},
$S:22}
C.fay.prototype={
$4(d,e,f,g){var w=d+f*7,v=g*3
v=B.a([new B.j9(d,e),new B.j9(w,e+v),new B.j9(d+f*14,e),new B.j9(w,e-v)],x.J)
B.a15(this.a,C.fy(4291404327),v)},
$S:664}
C.fIN.prototype={
$1(d){return new C.V5(this.a,null)},
$S:z+77}
C.eel.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.eek())},
$S:29}
C.eek.prototype={
$0(){},
$S:0}
C.eem.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.eej(w,d))},
$S:1673}
C.eej.prototype={
$0(){return this.a.x=J.fb(A.dz.gaO(this.b))},
$S:0}
C.een.prototype={
$1(d){},
$S:31}
C.edY.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.edU.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.ee4.prototype={
$0(){var w=this.a
w.as=!0
w.at="The editor is writing your newspaper\u2026"},
$S:0}
C.ee5.prototype={
$0(){var w=this.a
A.d.a9(w.ay)
w.z=this.b
w=w.ax
A.d.a9(w)
w.push(D.efW)},
$S:0}
C.ee6.prototype={
$0(){return this.a.as=!1},
$S:0}
C.ee_.prototype={
$0(){var w=this.a
w.as=!0
w.at="Working on it\u2026"
w.ax.push(new B.y("you",this.b))
w.f.bN(0,A.c3)},
$S:0}
C.ee0.prototype={
$0(){var w,v=this.b
if(v.c){w=this.a
w.ay.push(w.z)
w.z=v.b}this.a.ax.push(new B.y("ai",v.a))},
$S:0}
C.ee1.prototype={
$0(){return this.a.ax.push(new B.y("ai",B.t(this.b)))},
$S:0}
C.ee2.prototype={
$0(){return this.a.as=!1},
$S:0}
C.ee3.prototype={
$1(d){var w=this.a.r,v=w.f
if(v.length!==0){v=A.d.gcZ(v).Q
v.toString
w.m3(v,A.dV,A.i8)}},
$S:8}
C.edZ.prototype={
$0(){var w=this.a,v=w.z,u=C.fy2(w.y),t=this.b
w.y=t
if(v.a===u)w.z=v.cED(C.fy2(t))},
$S:0}
C.edW.prototype={
$0(){var w=this.a
w.as=!0
w.at="Making your picture\u2026"},
$S:0}
C.edX.prototype={
$0(){return this.a.as=!1},
$S:0}
C.eec.prototype={
$0(){return B.a6(this.a,!1).lL()},
$S:0}
C.eed.prototype={
$0(){var w=this.a
return w.m(new C.eeb(w))},
$S:0}
C.eeb.prototype={
$0(){var w=this.a
return w.z=w.ay.pop()},
$S:0}
C.eee.prototype={
$0(){var w=this.a
return w.m(new C.eea(w,this.b))},
$S:0}
C.eea.prototype={
$0(){var w=this.b.b
this.a.e.saV(0,w)
return w},
$S:0}
C.eef.prototype={
$1(d){var w=this.a
return w.m(new C.ee9(w))},
$S:9}
C.ee9.prototype={
$0(){return this.a.Q="en"},
$S:0}
C.eeg.prototype={
$1(d){var w=this.a
return w.m(new C.ee8(w))},
$S:9}
C.ee8.prototype={
$0(){return this.a.Q="sw"},
$S:0}
C.eeh.prototype={
$0(){var w=this.a
return w.m(new C.ee7(w,this.b))},
$S:0}
C.ee7.prototype={
$0(){var w=this.b
this.a.f.saV(0,w)
return w},
$S:0}
C.eei.prototype={
$1(d){return this.a.Z7()},
$S:2}
C.edV.prototype={
$0(){return this.a.c5b(this.b)},
$S:0}
C.cb0.prototype={
$1(d){var w=this.a
return typeof w.h(0,d)=="string"?A.a.i(B.cO(w.h(0,d))):null},
$S:275}
C.caZ.prototype={
$1(d){return A.a.i(d)},
$S:14}
C.cb_.prototype={
$1(d){return d.length!==0},
$S:3}
C.fx_.prototype={
bjd(d,e){var w=0,v=B.j(x.H),u,t,s,r
var $async$$2=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:r=new C.bN8(d,B.a([],x.bH))
for(u=e.length,t=0;t<e.length;e.length===u||(0,B.L)(e),++t){s=e[t]
r.cBe($.rL().jN(0,"assets/news_fonts/"+s))}w=2
return B.b(r.my(0),$async$$2)
case 2:return B.h(null,v)}})
return B.i($async$$2,v)},
$2(d,e){return this.bjd(d,e)},
$S:1674}
C.fvh.prototype={
$1(d){return d.length!==0},
$S:3}
C.fvj.prototype={
$1(d){var w=this.a.a
w=A.d.aI(A.d.dn(this.b,w,w+d)," ")
w=B.aK(w," \n\n ","\n\n")
w=B.aK(w," \n\n","\n\n")
return B.aK(w,"\n\n ","\n\n")},
$S:73}
C.fvi.prototype={
$1(d){var w,v,u,t=null
if(d===0)return!0
w=B.ij(t,t,t,t,B.dr(t,t,t,t,t,t,t,t,t,this.c,this.b.$1(d)),A.qa,A.ch,t,A.eq,A.cd)
v=this.a
w.Bx(v.b)
u=w.b.a.c
return u.gbc(u)<=v.a},
$S:33}
C.fa9.prototype={
$1(d){var w=A.a.fz(d,B.af("\\s+",!0,!1,!1,!1))
return new B.a2(w,new C.faa(),B.U(w).k("a2<1>")).gM(0)},
$S:269}
C.faa.prototype={
$1(d){return d.length!==0},
$S:3}
C.fa7.prototype={
$2(d,e){return d+this.a.$1(e)},
$S:222}
C.fa8.prototype={
$2(d,e){return d+this.a.$1(e)},
$S:222}
C.cb1.prototype={
$2(a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=null,a7=y.g,a8=b0.b
a8=isFinite(a8)?a8:824
w=b0.d
w=isFinite(w)?w:340
v=a5.b
u=a5.c
t=u-1
s=(a8-v*t)/u
r=a5.d&&a5.a.gaz0()?Math.min(150,w*0.42):0
q=a5.e
p=x.s
o=B.a([],p)
for(n=a5.a,m=x.G,l=n.d,k=l.as;q>=10.5;q-=0.5){j=n.c.r
i=j.length===0?B.a([a7],p):j
h=B.b0(l.w)
g=B.a([],m)
for(f=0;f<u;++f)g.push(new B.y(s,w-(f===t?r:0)))
o=C.fVC(i,new B.G(!0,h,a6,k,a6,a6,q,A.cN,A.bl,0,a6,a6,1.28,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),g)
if(C.fSA(j.length===0?B.a([a7],p):j,o))break}e=q*1.28
j=A.d.aI(n.gcdj(),"\n\n")
d=B.ij(a6,a6,a6,a6,B.dr(a6,a6,a6,a6,a6,a6,a6,a6,a6,n.adf(k,q,1.28),j),A.qa,A.ch,a6,A.eq,A.cd)
d.Bx(s)
for(a0=1;a0<40;++a0){j=d.b.a.c
a1=Math.min(w,j.gbc(j)/u+e*a0)
j=n.c.r
i=j.length===0?B.a([a7],p):j
h=B.b0(l.w)
g=B.a([],m)
for(f=0;f<u;++f)g.push(new B.y(s,Math.min(a1,w-(f===t?r:0))))
a2=C.fVC(i,new B.G(!0,h,a6,k,a6,a6,q,A.cN,A.bl,0,a6,a6,1.28,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),g)
if(C.fSA(j.length===0?B.a([a7],p):j,a2)){o=a2
break}}a3=n.adf(k,q,1.28)
p=x.p
m=B.a([],p)
for(k=r>0,v=v/2-0.5,l=l.w,j=r-12,a4=0;a4<u;++a4){i=B.a([],p)
if(a4>0)i.push(new B.C(new B.Q(v,0,v,0),B.p(a6,a6,A.f,B.b0(l).j(0.5),a6,a6,a6,a6,a6,a6,a6,a6,a6,1),a6))
h=B.a([new B.bD(1,A.bi,new B.x(o.length>a4?o[a4]:"",a6,a3,a6,A.qa,a6,a6,a6,a6,a6,a6,a6),a6)],p)
if(k&&a4===t)h.push(n.az_(s,j))
i.push(new B.a7(s,a6,B.v(h,A.F,a6,A.e,A.j,0,A.p),a6))
A.d.v(m,i)}return B.A(m,A.F,a6,A.e,A.j,0,a6,a6)},
$S:397}
C.cb2.prototype={
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
n=o.gaz0()
m=n?Math.min(140,p*0.4):0
n=x.s
l=B.a([],n)
for(k=x.G,j=o.d,i=j.as,h=17;h>=10.5;h-=0.5){g=o.c.r
f=g.length===0?B.a([a6],n):g
e=B.b0(j.w)
d=B.a([new B.y(u,q),new B.y(u,q)],k)
for(a0=0;a0<t;++a0)d.push(new B.y(r,p-(a0===s?m:0)))
l=C.fVC(f,new B.G(!0,e,a5,i,a5,a5,h,A.cN,A.bl,0,a5,a5,1.28,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5),d)
if(C.fSA(g.length===0?B.a([a6],n):g,l))break}a1=o.adf(i,h,1.28)
a2=new C.cb3(a1)
n=x.p
v=B.A(B.a([a2.$2(l[0],u),A.Ip,new B.a7(v,a5,a4.f,a5),A.Ip,a2.$2(l[1],u)],n),A.F,a5,A.e,A.j,0,a5,a5)
k=B.a([],n)
for(i=m>0,j=j.w,g=m-12,a3=0;a3<t;++a3){f=B.a([],n)
if(a3>0)f.push(new B.C(D.buk,B.p(a5,a5,A.f,B.b0(j).j(0.5),a5,a5,a5,a5,a5,a5,a5,a5,a5,1),a5))
e=B.a([new B.bD(1,A.bi,new B.x(l[2+a3],a5,a1,a5,A.qa,a5,a5,a5,a5,a5,a5,a5),a5)],n)
if(i&&a3===s)e.push(o.az_(r,g))
f.push(new B.a7(r,a5,B.v(e,A.F,a5,A.e,A.j,0,A.p),a5))
A.d.v(k,f)}return B.v(B.a([new B.a7(a5,q,v,a5),A.ac,B.D(B.A(k,A.F,a5,A.e,A.j,0,a5,a5),1)],n),A.m,a5,A.e,A.j,0,A.p)},
$S:149}
C.cb3.prototype={
$2(d,e){var w=null
return new B.a7(e,w,B.d(d,w,w,w,w,w,w,this.a,A.qa,w,w),w)},
$S:1675}
C.fIQ.prototype={
$1(d){return new C.V8(this.a,this.b,null)},
$S:z+79}
C.efw.prototype={
$1(d){return d.lT()},
$S:1676}
C.efx.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.efv(w,d))},
$S:1677}
C.efv.prototype={
$0(){var w=this.b
return this.a.d=w.gfm(w)},
$S:0}
C.efj.prototype={
$0(){return this.a.y=!0},
$S:0}
C.efk.prototype={
$0(){return this.a.y=!1},
$S:0}
C.efq.prototype={
$0(){return B.a6(this.a,!1).eI()},
$S:0}
C.efr.prototype={
$2(d,e){var w=null,v=this.a,u=this.b,t=B.I(A.bz,A.q,2.5)
return B.aE(w,B.p(w,B.b3(w,w,w,new C.bas(u,v.gaw9(),w),A.f0),A.f,w,w,new B.o(w,w,t,w,w,w,A.n),w,w,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.efo(v),new C.efp(v,e,u),w,w,w,w,w,w,w,w,w,w,w,!1,A.a8)},
$S:35}
C.efo.prototype={
$1(d){var w=this.a
return w.x=w.f},
$S:235}
C.efp.prototype={
$1(d){var w=this.a
w.m(new C.efl(w,d,this.b,this.c))},
$S:214}
C.efl.prototype={
$0(){var w,v,u,t=this,s=t.a,r=t.b
s.f=A.k.D(s.x*r.d,1,6)
w=s.gaw9()
r=r.a
v=t.c
u=t.d
s.r=A.k.D(s.r-r.a/v.b*(w.c-w.a)/u.c,0,1)
s.w=A.k.D(s.w-r.b/v.d*(w.d-w.b)/u.d,0,1)},
$S:0}
C.efs.prototype={
$1(d){var w=this.a
return w.m(new C.efn(w,this.b))},
$S:9}
C.efn.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eft.prototype={
$1(d){var w=this.a
return w.m(new C.efm(w,d))},
$S:6}
C.efm.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.efu.prototype={
$0(){return B.a6(this.b,!1).O(this.a.a.c)},
$S:0}
C.fJ5.prototype={
$1(d){return D.fPN},
$S:z+83}
C.eOL.prototype={
$1(d){return this.a.XO()},
$S:8}
C.eND.prototype={
$0(){var w=this.a,v=this.b
w.z=v
w.y="data:image/png;base64,"+A.cS.gcv().aJ(v)},
$S:0}
C.eO0.prototype={
$0(){var w=this.a
w.p4=this.b
w.as=3},
$S:0}
C.eOa.prototype={
$1(d){return d>=this.a.length},
$S:33}
C.eNm.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.eNn.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.eNk.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.eNl.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.eNU.prototype={
$2(d,e){var w,v,u=null,t=e.d,s=this.a,r=new C.eNV(s,this.b,t,e.b),q=r.$1(!0),p=s.y2
p=B.a([B.jt(B.rl(p>0.2?C.fNn(q,B.a4o(p,p,A.x)):q),A.r,u)],x.p)
w=s.bi
if(w>0.02){v=B.a4o(12,12,A.x)
p.push(B.jt(B.db(B.rl(C.fNn(r.$1(!0),v)),w*0.75),A.r,u))}r=s.b3
if(r!=null&&s.b1>0)p.push(B.ek(u,B.b0(r).j(s.b1),!0))
r=s.bb
if(r!=null&&s.bK>0){r=B.b0(r).j(s.bK)
w=s.bb
w.toString
p.push(B.c_(u,new B.o(u,u,u,u,u,new B.bT(D.aUY,1.15,A.x,u,0,B.a([r,B.b0(w).j(0)],x.O),u,u),A.n),A.bd))}r=s.aE
if(r>0)p.push(B.c_(u,new B.o(u,u,u,u,u,new B.bT(D.aUJ,0.8,A.x,u,0,B.a([A.c.j(r*0.55),A.c.j(0)],x.O),u,u),A.n),A.bd))
r=s.aN
if(r>0)p.push(B.c_(u,new B.o(u,u,u,u,u,new B.a8(A.b0,A.b6,A.x,B.a([A.w.j(r),A.K,A.K,A.w.j(s.aN)],x.O),D.cR0,u),A.n),A.bd))
if(s.aH>0){r=s.k1
p.push(B.ao(u,B.c_(u,new B.o(u,u,u,u,u,new B.a8(A.b0,A.b6,A.x,B.a([A.w.j(0),A.w.j(s.aH),A.w.j(s.aH),A.w.j(0)],x.O),D.d0o,u),A.n),A.bd),0.48*t,u,0,0,(r-0.06)*t,u))}r=s.Z
if(r>0)p.push(B.ek(u,A.w.j(r),!0))
r=s.b5
if(r>0)p.push(B.c_(u,new B.o(u,u,u,u,u,new B.bT(A.A,0.95,A.x,u,0,B.a([A.K,A.w.j(r)],x.O),D.cYE,u),A.n),A.bd))
s=s.az
if(s>0)p.push(B.b3(u,u,u,new C.be_(s,u),A.au))
return new B.an(A.W,u,A.b_,A.r,p,u)},
$S:62}
C.eNV.prototype={
$1(d){var w,v,u,t,s,r=this,q=null,p=B.fL(r.b,A.A,q,q,A.co,A.bQ,!0,q,!1,q,q),o=r.a,n=o.aVm(o.RG,o.R8,o.rx,o.ry,o.to,o.x1,o.x2,o.xr,o.y1),m=o.c8,l=m*3.141592653589793/180
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
return B.dW(B.eb(A.A,B.eC(A.A,l,B.fs(A.A,new B.CZ(new B.yv(q,q,n,A.A0),p,q),q,B.vu(s,o.cW?-1:1,1),!0),q),v*w,q,q),new B.u(-m*r.d*u/2,-t*r.c*u/2))},
$S:483}
C.eO6.prototype={
$0(){return this.a.m(new C.eO5(this.b,this.c))},
$S:0}
C.eO5.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eO7.prototype={
$1(d){return this.a.m(new C.eO4(this.b,d))},
$S:6}
C.eO4.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eO9.prototype={
$0(){return this.a.m(new C.eO8(this.b,this.c))},
$S:0}
C.eO8.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eNc.prototype={
$1(d){return d.c===this.a.x},
$S:z+93}
C.eNd.prototype={
$1(d){var w=this.a
return w.m(w.gcv1())},
$S:2}
C.eNe.prototype={
$1(d){return this.a.m(new C.eNb())},
$S:2}
C.eNb.prototype={
$0(){},
$S:0}
C.eNf.prototype={
$0(){var w=this.a
return w.m(new C.eNa(w,this.b))},
$S:0}
C.eNa.prototype={
$0(){return this.a.x=this.b},
$S:0}
C.eNh.prototype={
$2(d,e){return A.av},
$S:36}
C.eNg.prototype={
$2(d,e){var w=null,v=this.b[e],u=this.a,t=v.a===u.w.a,s=B.m(14),r=B.a([B.b0(v.e),B.b0(v.f)],x.O),q=t?A.c:A.bF
q=B.I(q,A.q,t?2.5:1)
r=B.dg(w,B.av(B.d("\u201c",w,w,w,w,w,w,B.l(w,w,B.b0(v.r),w,w,w,w,w,w,w,w,40,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,w),w,w,A.bc,new B.o(w,w,q,s,w,new B.a8(A.b0,A.b6,A.x,r,w,w),A.n),A.hX,w,94,w,w,w,w,70)
return B.aE(w,new B.a7(70,w,B.v(B.a([r,A.fZ,B.d(v.b,w,1,A.a2,w,w,w,B.l(w,w,t?A.c:A.az,w,w,w,w,w,w,w,w,10.5,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eN9(u,v),w,w,w,w,w,w,!1,A.a8)},
$S:76}
C.eN9.prototype={
$0(){var w=this.a
return w.m(new C.eN6(w,this.b))},
$S:0}
C.eN6.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.eNi.prototype={
$1(d){var w=this.a
return w.m(new C.eN8(w,d))},
$S:9}
C.eN8.prototype={
$0(){return this.a.k3=this.b},
$S:0}
C.eNj.prototype={
$1(d){var w=this.a
return w.m(new C.eN7(w,d))},
$S:9}
C.eN7.prototype={
$0(){return this.a.k2=this.b},
$S:0}
C.eOA.prototype={
$1(d){var w=this.a.db
return w[d]===w[A.d.gK(this.b)]},
$S:33}
C.eOH.prototype={
$1(d){var w=this.a
return w.m(new C.eOI(w,d))},
$S:26}
C.eOI.prototype={
$0(){var w,v,u,t,s
for(w=this.a,v=w.dx,v=B.ec(v,v.r,B.a3(v).c),w=w.db,u=this.b,t=v.$ti.c;v.C();){s=v.d
w[s==null?t.a(s):s]=u}},
$S:0}
C.eOJ.prototype={
$1(d){var w
A:{if(1===d){w=20
break A}if(2===d){w=28
break A}if(-1===d){w=11
break A}w=15
break A}return w},
$S:258}
C.eOB.prototype={
$0(){var w=this.a
return w.m(new C.eOz(w,this.b))},
$S:0}
C.eOz.prototype={
$0(){var w=this.a.dx,v=this.b
return w.t(0,v)?w.W(0,v):w.L(0,v)},
$S:0}
C.eOC.prototype={
$0(){var w=this.a
return w.m(new C.eOy(w,this.b))},
$S:0}
C.eOy.prototype={
$0(){var w,v=this.b.length,u=J.e3(v,x.S)
for(w=0;w<v;++w)u[w]=w
return this.a.dx.v(0,u)},
$S:0}
C.eOD.prototype={
$0(){var w=this,v=w.a
return v.m(new C.eOx(v,w.b,w.c,w.d))},
$S:0}
C.eOx.prototype={
$0(){var w,v,u,t,s,r=this,q=r.a.dx
q.a9(0)
w=B.a([],x.t)
for(v=r.b,u=r.c,t=r.d,s=0;s<v.length;++s)if(u[s]===t)w.push(s)
q.v(0,w)},
$S:0}
C.eOE.prototype={
$0(){var w=this.a,v=w.dx
return w.m(v.gri(v))},
$S:0}
C.eOF.prototype={
$0(){return this.b.$1(this.a.a)},
$S:0}
C.eOG.prototype={
$0(){var w=this.a
return w.m(new C.eOw(w))},
$S:0}
C.eOw.prototype={
$0(){var w=this.a.db
return A.d.fZ(w,0,w.length,0)},
$S:0}
C.eOj.prototype={
$1(d){return d.a===this.a.dy},
$S:204}
C.eOk.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=(e.b-42)/7,h=B.a([],x.p)
for(w=i*0.42,v=this.a,u=i*0.95,t=x.O,s=0;s<21;++s){r={}
q=D.avq[s]
r.a=null
p=q.a
r.a=p
o=v.dy
n=new B.aW(9,9)
m=B.a([B.b0(v.w.e),B.b0(v.w.f)],t)
l=r.a
k=v.fx
h.push(v.awd(new B.o_(new B.bq(n,n,n,n),A.aq,new B.kK(new B.o(j,j,j,j,j,new B.a8(A.a3,A.a7,A.x,m,j,j),A.n),A.bd,new C.aYH(l,B.b0(k==null?v.w.x:k),A.k.D(w,12,26),j),j),j),u,q.b,o===p,new C.eOi(r,v),2,i))}return B.bZ(A.bB,h,A.bs,7,7)},
$S:165}
C.eOi.prototype={
$0(){var w=this.b
return w.m(new C.eOd(this.a,w))},
$S:0}
C.eOd.prototype={
$0(){return this.b.dy=this.a.a},
$S:0}
C.eOl.prototype={
$1(d){var w=this.a
w.p1=!1
w.k4=d},
$S:259}
C.eOo.prototype={
$0(){var w=this.a
return w.m(new C.eOh(w))},
$S:0}
C.eOh.prototype={
$0(){return this.a.p1=!0},
$S:0}
C.eOp.prototype={
$1(d){return this.a.p2=d},
$S:6}
C.eOq.prototype={
$1(d){return this.a.p3=d},
$S:6}
C.eOr.prototype={
$1(d){return this.a.ok=d},
$S:6}
C.eOs.prototype={
$0(){var w=this.a
return w.m(new C.eOg(w))},
$S:0}
C.eOg.prototype={
$0(){var w=this.a
return w.fy=!w.fy},
$S:0}
C.eOt.prototype={
$0(){var w=this.a
return w.m(new C.eOf(w))},
$S:0}
C.eOf.prototype={
$0(){var w=this.a
return w.go=!w.go},
$S:0}
C.eOu.prototype={
$0(){var w=this.b
return w.m(new C.eOe(this.a,w))},
$S:0}
C.eOe.prototype={
$0(){return this.b.id=this.a.a},
$S:0}
C.eOv.prototype={
$1(d){return this.a.fx=d},
$S:259}
C.eOm.prototype={
$1(d){return this.a.fr=d},
$S:6}
C.eOn.prototype={
$1(d){return this.a.k1=d},
$S:6}
C.eNY.prototype={
$0(){var w=this.a
return w.m(new C.eNX(w))},
$S:0}
C.eNX.prototype={
$0(){var w=this.a
w.p4=null
w.b1m()},
$S:0}
C.eNZ.prototype={
$0(){var w=this.a
return w.m(new C.eNW(w,this.b))},
$S:0}
C.eNW.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.eO_.prototype={
$0(){var w=this.a
return w.m(w.gclF())},
$S:0}
C.eNQ.prototype={
$0(){var w=this.a
return w.m(new C.eNP(w))},
$S:0}
C.eNP.prototype={
$0(){var w=this.a
w.RG=0.03
w.rx=1.12
w.ry=1.15
w.R8=w.xr=0},
$S:0}
C.eNR.prototype={
$0(){var w=this.a
return w.m(new C.eNO(w))},
$S:0}
C.eNO.prototype={
$0(){var w=this.a
w.aH=0.55
w.Z=Math.max(w.Z,0.12)},
$S:0}
C.eNS.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=null,n=(e.b-24)/4,m=B.a([],x.p)
for(w=n*1.25,v=this.a,u=this.b,t=0;t<18;++t){s=D.cZ0[t]
r=s.b
q=Math.abs(v.RG-r)<0.001&&Math.abs(v.rx-s.c)<0.001&&Math.abs(v.ry-s.d)<0.001&&Math.abs(v.to-s.e)<0.001&&Math.abs(v.x1-s.f)<0.001&&Math.abs(v.xr-s.r)<0.001&&Math.abs(v.x2)<0.5&&Math.abs(v.R8)<0.001&&!v.y1
p=new B.aW(9,9)
m.push(v.awd(new B.o_(new B.bq(p,p,p,p),A.aq,new B.a7(1/0,1/0,new B.CZ(new B.yv(o,o,v.aVm(r,0,s.c,s.d,s.e,s.f,0,s.r,!1),A.A0),B.fL(u,A.A,140,o,A.co,A.bQ,!1,o,!1,o,o),o),o),o),w,s.a,q,new C.eNN(v,s),3,n))}return B.bZ(A.bB,m,A.bs,10,8)},
$S:165}
C.eNN.prototype={
$0(){var w=this.a
return w.m(new C.eNM(w,this.b))},
$S:0}
C.eNM.prototype={
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
C.eNu.prototype={
$1(d){return this.a.R8=d},
$S:6}
C.eNv.prototype={
$1(d){return this.a.RG=d},
$S:6}
C.eNw.prototype={
$1(d){return this.a.rx=d},
$S:6}
C.eNx.prototype={
$1(d){return this.a.xr=d},
$S:6}
C.eNy.prototype={
$1(d){return this.a.aE=d},
$S:6}
C.eNz.prototype={
$1(d){return this.a.Z=d},
$S:6}
C.eNA.prototype={
$1(d){return this.a.b5=d},
$S:6}
C.eNB.prototype={
$1(d){return this.a.aH=d},
$S:6}
C.eNC.prototype={
$1(d){return this.a.aN=d},
$S:6}
C.eMQ.prototype={
$1(d){return this.a.ry=d},
$S:6}
C.eMR.prototype={
$1(d){return this.a.to=d},
$S:6}
C.eMS.prototype={
$1(d){return this.a.x1=d},
$S:6}
C.eMT.prototype={
$1(d){return this.a.x2=d},
$S:6}
C.eMU.prototype={
$0(){var w=this.a
return w.m(new C.eMP(w))},
$S:0}
C.eMP.prototype={
$0(){var w=this.a
return w.y1=!w.y1},
$S:0}
C.eMV.prototype={
$1(d){return this.a.b3=d},
$S:259}
C.eMW.prototype={
$1(d){return this.a.b1=d},
$S:6}
C.eNo.prototype={
$1(d){return this.a.y2=d},
$S:6}
C.eNp.prototype={
$1(d){return this.a.bi=d},
$S:6}
C.eNq.prototype={
$1(d){return this.a.az=d},
$S:6}
C.eNr.prototype={
$1(d){return this.a.bb=d},
$S:259}
C.eNs.prototype={
$1(d){return this.a.bK=d},
$S:6}
C.eN_.prototype={
$1(d){return this.a.aR=d},
$S:6}
C.eN0.prototype={
$1(d){return this.a.bj=d},
$S:6}
C.eN1.prototype={
$1(d){return this.a.bT=d},
$S:6}
C.eN2.prototype={
$1(d){return this.a.c8=d},
$S:6}
C.eN3.prototype={
$0(){var w=this.a
return w.m(new C.eMZ(w))},
$S:0}
C.eMZ.prototype={
$0(){var w=this.a
return w.c8=A.k.F(w.c8+90+180,360)-180},
$S:0}
C.eN4.prototype={
$0(){var w=this.a
return w.m(new C.eMY(w))},
$S:0}
C.eMY.prototype={
$0(){var w=this.a
return w.cT=!w.cT},
$S:0}
C.eN5.prototype={
$0(){var w=this.a
return w.m(new C.eMX(w))},
$S:0}
C.eMX.prototype={
$0(){var w=this.a
return w.cW=!w.cW},
$S:0}
C.eNT.prototype={
$0(){var w=this.a,v=w.c
v.toString
return C.i3P(v,w.p4)},
$S:0}
C.eNL.prototype={
$2(d,e){var w=null,v=this.a.z,u=v==null?D.bjz:B.fL(v,A.A,w,w,A.co,A.bQ,!1,w,!1,w,w)
return C.fvp(d.length===0?"rounded":d,u,e)},
$S:138}
C.eNH.prototype={
$0(){var w=this.a
return w.m(new C.eNG(w))},
$S:0}
C.eNG.prototype={
$0(){var w=this.a
w.ay=0.39
w.ch=0.8
w.CW=0.22
w.cx="circle"
w.cy="gold"},
$S:0}
C.eNI.prototype={
$0(){var w=this.b
return w.m(new C.eNF(this.a,w))},
$S:0}
C.eNF.prototype={
$0(){return this.b.cx=this.a.a},
$S:0}
C.eNJ.prototype={
$0(){var w=this.b
return w.m(new C.eNE(this.a,w))},
$S:0}
C.eNE.prototype={
$0(){return this.b.cy=this.a.a},
$S:0}
C.eNK.prototype={
$1(d){var w=this.a
w.CW=d
w.ay=A.k.D(w.ay,0,1-d)
w.ch=A.k.D(w.ch,0,0.95)},
$S:6}
C.eO3.prototype={
$2(d,e){var w,v,u,t=null,s=e.b,r=e.d,q=B.m(20),p=B.a([new B.ac(-4,A.G,A.b5.j(0.35),A.J,30)],x.V),o=B.m(20),n=this.a,m=x.p,l=B.a([],m)
if(n.p4!=null)l.push(new B.et(n.cfd(),n.r))
l.push(new C.Ie(n.cs1(),!1,!1,t))
o=B.bY(0,B.bw(o,new B.et(new B.an(A.W,t,A.b_,A.r,l,t),n.f),A.aq),0,0,0)
l=n.ay
w=n.ch
v=n.CW*s
u=B.m(8)
return B.p(t,new B.an(A.W,t,A.aa,A.r,B.a([o,B.ao(t,B.aE(A.c5,B.c_(t,new B.o(t,t,B.I(A.c.j(0.3),A.q,1),u,t,t,A.n),A.bd),A.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.eO2(n,s,r),t,t,t,t,t,t,t,t,t,t,t,t,t,t,!1,A.a8),v,t,l*s,t,w*r,v)],m),t),A.f,t,t,new B.o(t,t,t,q,p,t,A.n),t,t,t,t,t,t,t,t)},
$S:215}
C.eO2.prototype={
$1(d){var w=this.a
return w.m(new C.eO1(w,d,this.b,this.c))},
$S:18}
C.eO1.prototype={
$0(){var w,v=this,u=v.a,t=v.b.d,s=v.c
u.ay=A.k.D(u.ay+t.a/s,0,1-u.CW)
w=v.d
u.ch=A.k.D(u.ch+t.b/w,0,1-u.CW*s/w)},
$S:0}
C.eOc.prototype={
$0(){var w=this.a
return w.m(new C.eOb(w,this.b))},
$S:0}
C.eOb.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.eNt.prototype={
$0(){var w=this.a.c
w.toString
return B.a6(w,!1).lL()},
$S:0}
C.eOK.prototype={
$2(d,e){var w,v,u,t=null,s=e.b
if(s>=860){w=this.a
v=x.p
return B.A(B.a([new B.a7(Math.min(s*0.4,460),t,B.v(B.a([w.aY1(),B.D(B.av(w.b_Z(Math.max(240,e.d-110)),t,t,t),1)],v),A.m,t,A.e,A.j,0,A.p),t),B.D(B.v(B.a([B.D(w.aOI(),1),w.aKY()],v),A.m,t,A.e,A.j,0,A.p),1)],v),A.m,t,A.e,A.j,0,t,t)}u=A.k.D(e.d*0.36,190,360)
s=this.a
return B.v(B.a([s.aY1(),new B.C(A.hI,B.av(s.b_Z(u),t,t,t),t),B.D(s.aOI(),1),s.aKY()],x.p),A.m,t,A.e,A.j,0,A.p)},
$S:699}
C.fsG.prototype={
$10$align$style$weight(d,e,f,g,h,i,j,k,l,m){return C.eo(k,!1,j,A.aD,"",4280640491,i,l,m,"",h,C.byV(),null,"","",0,!1,"",0,D.be,4280172719,2,d,0,0,"",D.cg,D.cQ,g,e,f)},
$9$align$weight(d,e,f,g,h,i,j,k,l){return this.$10$align$style$weight(d,e,f,g,h,i,j,k,A.bl,l)},
$8$weight(d,e,f,g,h,i,j,k){return this.$10$align$style$weight(d,e,f,g,h,i,j,A.L,A.bl,k)},
$7(d,e,f,g,h,i,j){return this.$10$align$style$weight(d,e,f,g,h,i,j,A.L,A.bl,A.O)},
$S:z+98}
C.fsF.prototype={
$3(d,e,f){var w=this,v=C.byV(),u=w.b?A.H:A.cv,t=w.c?A.cD:A.bl
return C.eo(w.d,!1,f,A.aD,"",4280640491,e,t,u,"",0.36,v,null,"","",0,!0,"",0,D.be,4280172719,2,d,0,w.f,w.e,D.cg,D.cQ,0.82,0.09,w.a)},
$S:z+28}
C.ccn.prototype={
$1(d){return B.t(d)},
$S:17}
C.fAm.prototype={
$0(){return this.a},
$S:z+15}
C.fhc.prototype={
$1(d){return d.a.cY(this.a)},
$S:z+30}
C.fhd.prototype={
$2(d,e){return J.cl(e)},
$S:z+31}
C.fAo.prototype={
$0(){return B.a([],x.o)},
$S:z+15}
C.fAr.prototype={
$1(d){return d.a===A.a.i(this.a).toLowerCase()},
$S:z+10}
C.fAs.prototype={
$0(){return A.d.gK(D.vJ)},
$S:z+33}
C.fAk.prototype={
$1(d){return d.a},
$S:z+16}
C.fAn.prototype={
$1(d){return d.a},
$S:z+16}
C.fyk.prototype={
$1(d){return A.a.i(B.t(d))},
$S:17}
C.fyl.prototype={
$1(d){return d.length!==0},
$S:3}
C.fym.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.fsK.prototype={
$0(){return C.cC()},
$S:22}
C.fsN.prototype={
$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var w=this.a.$0(),v=m==null?this.b.e:m,u=this.c,t=u?k:D.cg,s=u?n:0
return C.eo(j,l,v,A.aD,"",4280640491,i,q,r,"",h,w,null,u?o:"",p,0,!1,"",0,D.be,4280172719,2,d,s,0,"",t,D.cQ,g,e,f)},
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
C.fsM.prototype={
$9$fx$key$rotation(d,e,f,g,h,i,j,k,l){var w=this.a.$0()
return C.eo(A.bg,!1,4279310375,A.aD,"",i,24,A.bl,A.a4,"",h,w,null,this.b?j:"",k,0,!1,"",l,d,i,0,"",0,0,"",D.cg,D.f_,g,e,f)},
$6(d,e,f,g,h,i){return this.$9$fx$key$rotation(d,e,f,g,h,i,"","",0)},
$7$key(d,e,f,g,h,i,j){return this.$9$fx$key$rotation(d,e,f,g,h,i,"",j,0)},
$8$fx$key(d,e,f,g,h,i,j,k){return this.$9$fx$key$rotation(d,e,f,g,h,i,j,k,0)},
$S:z+27}
C.fsL.prototype={
$9$anim$delay$fx$key(d,e,f,g,h,i,j,k,l){var w=this.a.$0(),v=this.b,u=v?i:D.cg,t=v?j:0
return C.eo(A.bg,!1,4279310375,A.aD,"",4280640491,24,A.bl,A.a4,"",h,w,d,v?k:"",l,0,!1,"",0,D.be,4280172719,2,"",t,0,"",u,D.lk,g,e,f)},
$5(d,e,f,g,h){return this.$9$anim$delay$fx$key(d,e,f,g,h,D.q0,350,"","")},
$8$anim$delay$key(d,e,f,g,h,i,j,k){return this.$9$anim$delay$fx$key(d,e,f,g,h,i,j,"",k)},
$8$anim$fx$key(d,e,f,g,h,i,j,k){return this.$9$anim$delay$fx$key(d,e,f,g,h,i,350,j,k)},
$S:z+37}
C.fsJ.prototype={
$1(d){var w=d.x
return w>0&&w<=this.a.length},
$S:z+17}
C.fva.prototype={
$0(){var w=0,v=B.j(x.e),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.a){s=t.b
r=s.a
s=(r==="bullets"||r==="section")&&s.w.length!==0}else s=!1
w=s?3:5
break
case 3:s=t.b
w=6
return B.b($.hd7.cg(0,A.a.i(s.w).toLowerCase(),new C.fv8(s)),$async$$0)
case 6:q=e
w=4
break
case 5:q=null
case 4:w=t.c&&t.b.r.length!==0?7:9
break
case 7:s=t.b
w=10
return B.b(t.d.cg(0,s.r,new C.fv9(s)),$async$$0)
case 10:p=e
w=8
break
case 9:p=null
case 8:u=new B.bu(t.e,new B.bmV(p,q),x.e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1681}
C.fv8.prototype={
$0(){return F.aMs(this.a.w)},
$S:178}
C.fv9.prototype={
$0(){var w=this.a.r,v=B.aK(w.toLowerCase()," ","_")
return F.bxP("https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji@main/assets/"+B.hA(2,w,A.c4,!1)+"/3D/"+v+"_3d.png","image/png")},
$S:178}
C.fa4.prototype={
$1(d){return d.a==="bio"},
$S:z+17}
C.fa5.prototype={
$1(d){return d.a},
$S:z+18}
C.fa6.prototype={
$1(d){return d.b},
$S:z+19}
C.fJh.prototype={
$1(d){return D.fQ2},
$S:z+41}
C.eUM.prototype={
$0(){return this.a.x=C.hHq(this.b,this.c.b)},
$S:0}
C.eUN.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.eUK.prototype={
$1(d){var w
if(this.a){w=this.b
if(w==null)w="circle"}else w=d
return w},
$S:444}
C.eUL.prototype={
$1(d){var w
if(this.a)w=d
else{w=this.b
if(w==null)w=""}return w},
$S:444}
C.eUJ.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:o=t.b
n=t.a
m=n.c
m.toString
w=3
return B.b(B.bX(A.aB,null,new C.eUE(n,t.c,o,t.d,t.e,t.f),m,!0,!0,o,A.lm,!1,!1,x.N),$async$$0)
case 3:s=e
if(s==null){w=1
break}w=A.a.a0(s,"finale:")?4:5
break
case 4:r=A.a.b0(s,7)
if(r.length===0){n.m(new C.eUF(n))
w=1
break}o=n.c
if(o==null){w=1
break}m=n.w
q=m.d
if(q.length===0){q=n.x
if(q==null)q=""}w=6
return B.b(C.hiR(o,m.cFq(q,r)),$async$$0)
case 6:p=e
if(p!=null&&n.c!=null)n.m(new C.eUG(n,p))
w=1
break
case 5:o=s==="__auto"?null:s
t.r.$1(o)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eUE.prototype={
$1(d){var w,v,u,t,s,r,q=this,p=null,o=new C.eUI(q.b,d),n=x.p,m=B.a([o.$2("__auto",B.p(p,D.b33,A.f,p,p,D.aZ8,p,p,p,p,p,p,p,p))],n),l=q.c,k=l?D.BE:D.BJ,j=k.length,i=q.a,h=q.d,g=q.e,f=q.f,e=0
for(;e<j;++e){w=k[e].a
v=g.$1(w)
u=f.$1(w)
if(v.length===0&&u.length===0)v="rounded"
m.push(o.$2(w,new B.a7(64,64,C.fvp(v,i.b1Y(h),u),p)))}t=B.lV(1,m,4,10,10,p,A.dQ,!0)
if(!l)return B.bm(!0,new B.C(A9.AO,t,p),!0,!1,A.af,!0,!0)
s=new C.eUH(i,d)
m=B.aI(d,A.bT,x.w).w
l=B.a([s.$2("","None")],n)
for(e=0;e<32;++e){r=D.Gs[e]
l.push(s.$2(r.a,r.b))}return B.bm(!0,new B.cU(new B.aY(0,1/0,0,m.a.b*0.85),B.cd(B.v(B.a([D.fg1,A.S,t,A.e1,D.eFG,A.at,D.fqu,A.S,B.lV(1.15,l,3,10,10,p,A.dQ,!0)],n),A.F,p,A.e,A.j,0,A.p),A.r,p,A.y,p,A9.AO,p,p,A.ah),p),!0,!1,A.af,!0,!0)},
$S:28}
C.eUI.prototype={
$2(d,e){var w=null,v=d==="__auto"&&this.a==null||d===this.a,u=B.m(16),t=v?A.b5.j(0.22):A.c.j(0.04),s=v?A.by:A.dp
return B.aE(w,B.p(w,e,A.f,w,w,new B.o(t,w,B.I(s,A.q,v?2:1),u,w,w,A.n),w,w,w,w,A.hw,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eUD(this.b,d),w,w,w,w,w,w,!1,A.a8)},
$S:1682}
C.eUD.prototype={
$0(){B.a6(this.a,!1).O(this.b)
return null},
$S:0}
C.eUH.prototype={
$2(d,e){var w,v=null,u=this.a.w,t=u.a===d,s=B.m(12),r=t?A.bK:A.bF
r=B.I(r,A.q,t?2.5:1)
w=B.m(10)
u=B.D(B.p(v,B.bw(w,d.length===0?B.p(v,D.amz,A.f,A.c.j(0.05),v,v,v,v,v,v,v,v,v,v):B.e1(new C.MW(u.Fc(d),!0,!1,v),!0,v),A.aq),A.f,v,v,new B.o(v,v,r,s,v,v,A.n),v,v,v,v,v,v,v,v),1)
return B.aE(v,B.v(B.a([u,A.at,B.d(e,v,1,A.a2,v,v,v,B.l(v,v,t?A.bK:A.ad,v,v,v,v,v,v,v,v,10.5,v,v,A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.j,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.eUC(this.b,d),v,v,v,v,v,v,!1,A.a8)},
$S:138}
C.eUC.prototype={
$0(){B.a6(this.a,!1).O("finale:"+this.b)
return null},
$S:0}
C.eUF.prototype={
$0(){var w=this.a
return w.w=w.w.Fc("")},
$S:0}
C.eUG.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.eUs.prototype={
$0(){var w=this.a
w.e=this.b
w.cy=null},
$S:0}
C.eUt.prototype={
$0(){return this.a.cy=J.k(this.b)},
$S:0}
C.eUv.prototype={
$0(){return this.a.cy="Type a little about the presentation first, or attach a document."},
$S:0}
C.eUw.prototype={
$0(){return this.a.cy='You mentioned your logo \u2014 tap "Add your logo" below to upload it, so the AI puts the real one in.'},
$S:0}
C.eUx.prototype={
$0(){var w=this.a
w.ax=!0
w.cy=null
w.ay="Writing your "+w.ch+" slides\u2026"},
$S:0}
C.eUy.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.eUu(w,d))},
$S:2}
C.eUu.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.eUz.prototype={
$0(){var w=this.a
w.ax=!1
w.cy=B.t(this.b)},
$S:0}
C.eV_.prototype={
$0(){return this.a.f.fG()},
$S:0}
C.eV0.prototype={
$0(){var w=this.a
return w.m(new C.eUZ(w))},
$S:0}
C.eUZ.prototype={
$0(){return this.a.e=null},
$S:0}
C.eV1.prototype={
$0(){var w=this.a
return w.m(new C.eUY(w))},
$S:0}
C.eUY.prototype={
$0(){return this.a.x=null},
$S:0}
C.eV3.prototype={
$1(d){var w=this.a
return w.m(new C.eUX(w,d))},
$S:34}
C.eUX.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.eV4.prototype={
$1(d){var w=this.a
return w.m(new C.eUW(w,d))},
$S:34}
C.eUW.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.eV5.prototype={
$0(){var w=this.a
return w.m(new C.eUV(w))},
$S:0}
C.eUV.prototype={
$0(){return this.a.y=B.a([],x.s)},
$S:0}
C.eV6.prototype={
$1(d){var w=this.a
return w.m(new C.eUU(w,d))},
$S:34}
C.eUU.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.eV7.prototype={
$1(d){var w=this.a
return w.m(new C.eUT(w,d))},
$S:34}
C.eUT.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.eV8.prototype={
$0(){var w=this.a
return w.m(new C.eUS(w))},
$S:0}
C.eUS.prototype={
$0(){var w=this.a
return w.w=w.w.Fc("")},
$S:0}
C.eV9.prototype={
$0(){var w=this.a
return w.m(new C.eUR(w,this.b))},
$S:0}
C.eUR.prototype={
$0(){return this.a.ch=this.b},
$S:0}
C.eVa.prototype={
$2(d,e){var w,v,u=(e.b-16)/3,t=B.a([],x.p)
for(w=this.a,v=0;v<6;++v)t.push(new B.a7(u,null,w.bLZ(D.a1W[v]),null))
return B.bZ(A.bB,t,A.bs,8,8)},
$S:165}
C.eV2.prototype={
$1(d){var w=this.a
return w.m(new C.eUQ(w,d))},
$S:9}
C.eUQ.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.eUA.prototype={
$0(){var w=this.a
return w.m(new C.eUB(w,this.b,this.c))},
$S:0}
C.eUB.prototype={
$0(){var w=this.c,v=this.a.cx
return this.b?v.W(0,w):v.L(0,w)},
$S:0}
C.eUP.prototype={
$0(){var w=this.a
return w.m(new C.eUO(w,this.b))},
$S:0}
C.eUO.prototype={
$0(){return this.a.CW=this.b},
$S:0}
C.fJg.prototype={
$1(d){return new C.a_I(this.a,this.b,null)},
$S:z+42}
C.eUl.prototype={
$0(){return this.a.r="Type what you want changed or added."},
$S:0}
C.eUm.prototype={
$0(){var w=this.a
w.e=!0
w.r=null
w.f="Making your changes\u2026"},
$S:0}
C.eUn.prototype={
$0(){var w=this.a
w.e=!1
w.r=this.b===D.aEU?"The text already fits inside its frame.":"The text is already at its limit."},
$S:0}
C.eUo.prototype={
$0(){var w=this.a
w.e=!1
w.r="Nothing to bring back. Changes are kept for 20 minutes."},
$S:0}
C.eUp.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.eUk(w,d))},
$S:2}
C.eUk.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eUq.prototype={
$0(){var w=this.a
w.e=!1
w.r=B.t(this.b)},
$S:0}
C.eUr.prototype={
$0(){var w=this.b
if(A.a.cb(w,"\u2026"))w=A.a.ap(w,0,w.length-1)
this.a.d.bN(0,new B.bb(w,B.h8(A.bu,w.length),A.aN))},
$S:0}
C.fgs.prototype={
$1(d){return d.a===this.a},
$S:204}
C.eat.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=p.gawe(),n=o.x
n===$&&B.c()
w=B.m(16)
v=p.a.c
u=v?D.cLh:D.d09
t=D.x4.j(v?1:0.55)
v=p.a.c
t=B.I(t,A.q,v?1.8:1.2)
s=D.x4.j(v?0.35+0.15*o.x:0.12)
v=B.a([new B.ac(0,A.G,s,A.J,p.a.c?16:8)],x.V)
s=B.m(15)
n=B.bY(0,B.b3(q,q,q,new C.bgc(n*6.283,q),A.au),0,0,0)
o=o.x
o=B.bY(0,B.bNp(B.eC(A.A,0.5,B.p(q,q,A.f,q,q,new B.o(q,q,q,q,q,new B.a8(A.a3,A.a7,A.x,B.a([A.K,D.b9G.j(0.28),A.K],x.O),q,q),A.n),q,q,q,q,q,q,q,q),q),!0,new B.u(o*2.4-1.2,0)),0,0,0)
r=x.p
return B.p(q,B.bw(s,new B.an(A.W,q,A.aa,A.r,B.a([n,o,B.av(B.v(B.a([B.W(p.a.c?A.ee:A.lM,D.x4,q,q,q,20),A.at,B.f2(A.A,B.nI(A.jp,D.f9N,new C.eas()),A.f,A.eg)],r),A.m,q,A.e,A.Q,0,A.p),q,q,q),B.ao(q,B.p(q,D.f6u,A.f,q,q,new B.o(D.x4,q,q,B.m(6),q,q,A.n),q,q,q,q,L.ahv,q,q,q),q,q,q,4,4,q)],r),q),A.aq),A.f,q,q,new B.o(q,q,t,w,v,new B.a8(A.ax,A.aC,A.x,u,q,q),A.n),q,64,q,q,q,q,q,q)},
$S:96}
C.eas.prototype={
$1(d){return D.bS1.aw(0,d)},
$S:66}
C.fAt.prototype={
$1(d){return d.a===this.a},
$S:z+6}
C.fAu.prototype={
$1(d){var w=d.a
return A.a.i(w).length!==0&&w!==d.b},
$S:204}
C.fAv.prototype={
$2(d,e){return A.o.aL(e.a.length,d.a.length)},
$S:1683}
C.fAw.prototype={
$1(d){var w,v,u,t,s,r,q,p
for(w=this.a,v=w.length,u=d,t=0;t<w.length;w.length===v||(0,B.L)(w),++t){s=w[t]
r=s.a
q=s.b
u=B.aK(u,r,q)
p=r.toUpperCase()
if(p!==r)u=B.aK(u,p,q.toUpperCase())}return u},
$S:14}
C.fAp.prototype={
$1(d){return d.a},
$S:z+18}
C.fAq.prototype={
$1(d){return d.b},
$S:z+19}
C.fIu.prototype={
$1(d){return new C.Z6(this.a,this.b,null)},
$S:z+44}
C.dgt.prototype={
$0(){var w=this.a
w.f=!0
w.r=null},
$S:0}
C.dgu.prototype={
$1(d){return d.a===this.a.gahr()},
$S:z+10}
C.dgv.prototype={
$0(){var w=this.a
w.f=!1
w.r=J.k(this.b)},
$S:0}
C.dgy.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.dgz.prototype={
$0(){var w=this.a
return w.m(new C.dgx(w,this.b))},
$S:0}
C.dgx.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.dgA.prototype={
$1(d){var w=this.a
return w.m(new C.dgw(w,d))},
$S:9}
C.dgw.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.ear.prototype={
$1$2(d,e,f){var w=B.bl(d,!0,f)
A.d.fq(w,this.a)
return B.dc(w,0,B.dJ(e,"count",x.S),B.U(w).c).dF(0)},
$2(d,e){return this.$1$2(d,e,x.z)},
$S:1684}
C.f6z.prototype={
$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,n,o,p){return C.eo(A.bg,!1,4279310375,A.aD,"",i,24,A.bl,A.a4,"",h,this.a.$0(),null,k,j,0,!1,"",n,d,o,p,"",m,0,"",l,D.f_,g,e,f)},
$8(d,e,f,g,h,i,j,k){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,D.cg,0,0,0,0)},
$12$anim$delay$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,n,o){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,0,n,o)},
$10$anim$delay(d,e,f,g,h,i,j,k,l,m){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,0,0,0)},
$S:z+45}
C.f6B.prototype={
$9(d,e,f,g,h,i,j,k,l){return C.eo(A.L,!1,this.b.d,A.aD,"",4280640491,i,A.bl,A.cN,"",h,this.a.$0(),null,k,j,0,!1,"",0,D.be,4280172719,2,d,l,0,"",D.mv,D.cQ,g,e,f)},
$S:z+46}
C.f6A.prototype={
$5$size(d,e,f,g,h){var w,v=this,u=v.b,t=u.c
u=u.we(0,"twinkle")
w=t===D.be?0.785:0
return v.a.$13$anim$delay$rotation$stroke$strokeWidth(t,d-h/2,e-h*0.89,h,h*1.78,v.c,f,u,D.mv,g,w,v.d.d,1.2)},
$4(d,e,f,g){return this.$5$size(d,e,f,g,0.022)},
$S:z+47}
C.f6y.prototype={
$1(d){var w=d.fx
return w==="sub"||w==="body"},
$S:z+4}
C.ftR.prototype={
$1(d){return d.a===this.a},
$S:z+11}
C.ftS.prototype={
$0(){return A.d.gK(D.GB)},
$S:z+49}
C.ftT.prototype={
$1(d){return d.a===this.a},
$S:z+11}
C.f8z.prototype={
$1(d){return!(A.a.a0(d.db,"__design__")||A.a.a0(d.a,"design_"))},
$S:z+4}
C.fzW.prototype={
$1(d){var w=2450411,v=4281908728
C.du(d,C.dv(4280171146,1,0,D.be,w,0,0.52,0,0))
C.du(d,C.dv(v,1,0,D.be,w,0,0.04,0.48,0))
C.du(d,C.dv(4294047225,0.38,0,D.be,w,0,0.48,0.52,0.62))
C.du(d,C.dv(v,0.006,0,D.fp,v,3,0.32,0.08,0.14))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fzX.prototype={
$1(d){var w=2450411,v=4280640491,u=4291548641
C.du(d,C.dv(4280172719,0.8,0,D.be,w,0,0.36,0.58,0.1))
C.du(d,C.dv(v,0.64,0,D.be,w,0,0.28,0.64,0.18))
C.du(d,C.dv(4282090230,0.44,0,D.be,w,0,0.2,0.7,0.28))
C.du(d,C.dv(v,0.006,0,D.fp,v,3,0.22,0.08,0.12))
C.du(d,C.dv(u,0.004,0,D.fp,u,2,0.38,0.08,0.18))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fzY.prototype={
$1(d){var w=2450411,v=4279548070
C.du(d,C.dv(4279080072,0.11,0,D.be,w,0,1,0,0))
C.du(d,C.dv(4279310375,0.11,0,D.be,w,0,1,0,0.89))
C.du(d,C.dv(856528008,0.72,0,D.jF,w,0,0.28,0.72,0.14))
C.du(d,C.dv(1426953352,0.2,0,D.jF,w,0,0.2,0.78,0.22))
C.du(d,C.dv(v,0.004,0,D.fp,v,2,1,0,0.105))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fA8.prototype={
$1(d){var w=2450411
C.du(d,C.dv(4279203438,0.55,0,D.jF,w,0,0.5,0.55,-0.05))
C.du(d,C.dv(4280171146,0.5,0,D.jF,w,0,0.45,0.62,0.35))
C.du(d,C.dv(4280640491,0.4,0.3,D.jE,w,0,0.35,0.68,0.55))
C.du(d,C.dv(571438702,0.12,0,D.be,w,0,0.12,0.08,0.08))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fAd.prototype={
$1(d){var w=4280472558
C.du(d,C.dv(4279310375,0.75,-0.4,D.jE,2450411,0,0.75,-0.15,0.35))
C.du(d,C.dv(w,0.55,0,D.be,2450411,0,0.06,0.42,0.38))
C.du(d,C.dv(w,0.006,0,D.fp,w,3,0.35,0.08,0.08))
C.du(d,C.dv(2282478,0.12,0,D.be,w,2,0.2,0.75,0.82))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fAe.prototype={
$1(d){var w=2450411,v=4280640491
C.du(d,C.dv(3423541034,0.48,0,D.be,w,0,1,0,0))
C.du(d,C.dv(v,0.12,-0.08,D.jF,w,0,1.1,-0.05,0.38))
C.du(d,C.dv(858088427,0.35,0,D.be,w,0,0.42,0.55,0.05))
C.du(d,C.dv(v,0.006,0,D.fp,v,3,0.25,0.08,0.52))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fAf.prototype={
$1(d){var w,v,u,t,s=4280171146
for(w=0;w<4;++w){v=D.cKk[w]
u=Date.now()
t=$.iX
$.iX=t+1
v=new C.eI("design_"+(""+1000*u+"_"+t),D.f_,0.04+w*0.235,0.72,0.21,0.22,"",24,A.a4,A.bl,A.aD,4279310375,A.bg,null,D.be,v,4294967295,2,0,!1,"",0,D.cg,0,"","","","","",!1,0)
u=$.JU
v.db="__design__:"+(u.length===0?"layer":u)
A.d.ck(d.z,0,v)}C.du(d,C.dv(s,0.006,0,D.fp,s,3,0.3,0.04,0.08))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fAg.prototype={
$1(d){var w,v,u,t,s=4280172719
for(w=0;w<4;++w){v=B.aq(A.ma,A.dy,w/3).l()
u=Date.now()
t=$.iX
$.iX=t+1
v=new C.eI("design_"+(""+1000*u+"_"+t),D.f_,0.58+w*0.08,0.15+w*0.05,0.32,0.7,"",24,A.a4,A.bl,A.aD,4279310375,A.bg,null,D.Ci,v,2450411,0,0,!1,"",0,D.cg,0,"","","","","",!1,0)
u=$.JU
v.db="__design__:"+(u.length===0?"layer":u)
A.d.ck(d.z,0,v)}C.du(d,C.dv(s,0.006,0,D.fp,s,3,0.4,0.06,0.1))
d.e=4294967295
d.f=4292602622},
$S:z+1}
C.fAh.prototype={
$1(d){var w=4294967295
C.du(d,C.dv(4280640491,1,0,D.be,2450411,0,0.42,0,0))
C.du(d,C.dv(4280110808,1.1,1.57,D.jE,2450411,0,0.18,0.35,-0.05))
C.du(d,C.dv(w,0.006,0,D.fp,w,2,0.25,0.08,0.85))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fAi.prototype={
$1(d){var w=4278982953,v=2450411,u=4282090230
C.du(d,C.dv(w,0.1,0,D.be,v,0,1,0,0))
C.du(d,C.dv(u,0.012,0,D.be,v,0,1,0,0.1))
C.du(d,C.dv(u,0.006,0,D.fp,u,3,0.42,0.06,0.14))
C.du(d,C.dv(403446057,0.68,0,D.jF,v,0,0.22,0.72,0.18))
C.du(d,C.dv(w,0.1,0,D.be,v,0,1,0,0.9))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fAj.prototype={
$1(d){var w=4278630100
C.du(d,C.dv(4279310375,1.2,0.15,D.jF,2450411,0,0.55,-0.2,-0.1))
C.du(d,C.dv(w,1.1,0.15,D.be,2450411,0,0.08,0.15,-0.05))
C.du(d,C.dv(1120295,0.18,0,D.be,w,3,0.38,0.55,0.75))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fzZ.prototype={
$1(d){var w=4292617766
C.du(d,C.dv(4282714634,0.65,-0.2,D.jE,2450411,0,0.65,-0.1,0.45))
C.du(d,C.dv(w,0.5,-0.15,D.jE,2450411,0,0.5,0.05,0.55))
C.du(d,C.dv(w,0.006,0,D.fp,w,3,0.38,0.55,0.08))
d.e=4294967295
d.f=4294898418},
$S:z+1}
C.fA_.prototype={
$1(d){var w=2450411
C.du(d,C.dv(4278413729,0.35,3.14,D.jE,w,0,0.45,-0.05,0.7))
C.du(d,C.dv(4278355143,0.3,3.14,D.jE,w,0,0.4,0.25,0.75))
C.du(d,C.dv(4279150057,0.32,3.14,D.jE,w,0,0.5,0.55,0.72))
C.du(d,C.dv(863884284,0.22,0,D.eI,w,0,0.22,0.08,0.12))
d.e=4293982719
d.f=4294967295},
$S:z+1}
C.fA0.prototype={
$1(d){var w=4279310375,v=2450411,u=4280472558
C.du(d,C.dv(w,0.14,0,D.be,v,0,0.14,0.02,0.02))
C.du(d,C.dv(2282478,0.14,0,D.be,u,3,0.14,0.84,0.02))
C.du(d,C.dv(w,0.28,0,D.jF,v,0,0.35,-0.08,0.78))
C.du(d,C.dv(u,0.22,0.5,D.jE,v,0,0.3,0.72,0.78))
C.du(d,C.dv(w,0.006,0,D.fp,w,3,0.2,0.08,0.22))
d.e=4294967295
d.f=null},
$S:z+1}
C.fA1.prototype={
$1(d){var w=4293571336,v=1156231944
C.du(d,C.dv(1841431,0.92,0,D.be,w,3,0.92,0.04,0.04))
C.du(d,C.dv(v,0.15,0,D.jE,2450411,0,0.15,0.02,0.02))
C.du(d,C.dv(v,0.15,3.14,D.jE,2450411,0,0.15,0.83,0.83))
C.du(d,C.dv(w,0.004,0,D.fp,w,2,0.7,0.15,0.88))
d.e=4280031511
d.f=4282523654},
$S:z+1}
C.fA2.prototype={
$1(d){var w=4279080072,v=2450411
C.du(d,C.dv(w,0.14,0,D.kT,v,0,0.14,0.68,0.18))
C.du(d,C.dv(4279548070,0.14,0,D.kT,v,0,0.14,0.78,0.28))
C.du(d,C.dv(4281193663,0.14,0,D.kT,v,0,0.14,0.68,0.38))
C.du(d,C.dv(4284410580,0.14,0,D.kT,v,0,0.14,0.78,0.48))
C.du(d,C.dv(4279203438,0.14,0,D.kT,v,0,0.14,0.68,0.58))
C.du(d,C.dv(w,0.006,0,D.fp,w,3,0.22,0.06,0.1))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fA3.prototype={
$1(d){var w=2450411,v=4280640491
C.du(d,C.dv(3708753706,0.42,0,D.be,w,0,1,0,0))
C.du(d,C.dv(v,0.06,-0.05,D.jF,w,0,1,0,0.38))
C.du(d,C.dv(859356664,0.25,0,D.eI,w,0,0.25,0.7,0.08))
C.du(d,C.dv(v,0.006,0,D.fp,v,3,0.3,0.08,0.48))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fA4.prototype={
$1(d){var w,v,u,t,s=4280640491
for(w=0;w<4;++w){v=B.aq(A.ma,A.dy,w/3).l()
u=Date.now()
t=$.iX
$.iX=t+1
v=new C.eI("design_"+(""+1000*u+"_"+t),D.f_,0.06+w*0.23,0.78,0.2,0.14,"",24,A.a4,A.bl,A.aD,4279310375,A.bg,null,D.Ci,v,2450411,0,0,!1,"",0,D.cg,0,"","","","","",!1,0)
u=$.JU
v.db="__design__:"+(u.length===0?"layer":u)
A.d.ck(d.z,0,v)}C.du(d,C.dv(4280172719,0.08,0,D.be,2450411,0,1,0,0))
C.du(d,C.dv(s,0.006,0,D.fp,s,3,0.35,0.06,0.14))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fA5.prototype={
$1(d){var w,v,u,t=4291548641,s=4279310375
for(w=1;w<6;++w){v=Date.now()
u=$.iX
$.iX=u+1
u=new C.eI("design_"+(""+1000*v+"_"+u),D.f_,0.08,0.15+w*0.12,0.55,0.002,"",24,A.a4,A.bl,A.aD,s,A.bg,null,D.fp,t,t,0,0,!1,"",0,D.cg,0,"","","","","",!1,0)
v=$.JU
u.db="__design__:"+(v.length===0?"layer":v)
A.d.ck(d.z,0,u)}C.du(d,C.dv(s,0.75,0,D.be,2450411,0,0.22,0.72,0.1))
C.du(d,C.dv(872415231,0.16,0,D.be,2450411,0,0.16,0.75,0.15))
C.du(d,C.dv(s,0.006,0,D.fp,s,3,0.2,0.08,0.1))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fA6.prototype={
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
C.fA7.prototype={
$1(d){var w,v,u,t,s,r=4279310375,q=2450411
for(w=0;w<3;++w){v=w*0.24
u=Date.now()
t=$.iX
$.iX=t+1
t=new C.eI("design_"+(""+1000*u+"_"+t),D.f_,0.55,0.14+v,0.38,0.18,"",24,A.a4,A.bl,A.aD,r,A.bg,null,D.be,4294967295,4280640491,2,0,!1,"",0,D.cg,0,"","","","","",!1,0)
u=$.JU
t.db="__design__:"+(u.length===0?"layer":u)
A.d.ck(d.z,0,t)
u=B.aq(A.dq,A.cs,w/2).l()
t=Date.now()
s=$.iX
$.iX=s+1
u=new C.eI("design_"+(""+1000*t+"_"+s),D.f_,0.57,0.16+v,0.06,0.14,"",24,A.a4,A.bl,A.aD,r,A.bg,null,D.be,u,q,0,0,!1,"",0,D.cg,0,"","","","","",!1,0)
v=$.JU
u.db="__design__:"+(v.length===0?"layer":v)
A.d.ck(d.z,0,u)}C.du(d,C.dv(4280171146,1,0,D.be,q,0,0.48,0,0))
C.du(d,C.dv(4280172719,1.1,1.57,D.jE,q,0,0.12,0.42,-0.05))
d.e=4294967295
d.f=4292602622},
$S:z+1}
C.fA9.prototype={
$1(d){var w=2450411
C.du(d,C.dv(870995980,0.55,0.45,D.jF,w,0,0.55,-0.12,-0.08))
C.du(d,C.dv(856996006,0.45,0.45,D.jF,w,0,0.45,0.62,-0.05))
C.du(d,C.dv(16777215,0.38,0.45,D.jF,4293548044,5,0.38,0.52,0.12))
C.du(d,C.dv(585783308,0.3,0.45,D.jF,w,0,0.3,0.56,0.16))
C.du(d,C.dv(4279548070,0.06,0,D.be,w,0,0.16,0.38,0.04))
C.du(d,C.dv(1156208652,0.28,0,D.eI,w,0,0.28,0.66,0.52))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fAa.prototype={
$1(d){var w=4279080072,v=2450411,u=4294047225,t=4291548641,s=4293548044
C.du(d,C.dv(w,1,0,D.be,v,0,0.07,0,0))
C.du(d,C.dv(u,0.1,0,D.be,t,1,0.46,0.48,0.14))
C.du(d,C.dv(u,0.1,0,D.be,t,1,0.46,0.48,0.28))
C.du(d,C.dv(u,0.1,0,D.be,t,1,0.46,0.48,0.42))
C.du(d,C.dv(s,0.08,0,D.eI,v,0,0.08,0.5,0.16))
C.du(d,C.dv(w,0.08,0,D.eI,v,0,0.08,0.5,0.3))
C.du(d,C.dv(4279548070,0.08,0,D.eI,v,0,0.08,0.5,0.44))
C.du(d,C.dv(16777215,0.32,0.45,D.jF,s,4,0.32,0.1,0.18))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fAb.prototype={
$1(d){var w,v,u,t=4279548070,s=4293548044,r=4279179050
C.du(d,C.dv(4294047225,0.08,0,D.be,t,2,0.1,0.02,0.06))
C.du(d,C.dv(s,0.42,0,D.be,2450411,0,0.36,0.58,0.18))
C.du(d,C.dv(872415231,0.12,0,D.be,2450411,0,0.28,0.62,0.24))
C.du(d,C.dv(16777215,0.28,0,D.eI,s,4,0.32,0,0.72))
C.du(d,C.dv(r,0.006,0,D.fp,r,3,0.42,0.08,0.22))
for(w=0;w<3;++w){v=Date.now()
u=$.iX
$.iX=u+1
u=new C.eI("design_"+(""+1000*v+"_"+u),D.f_,0.08,0.58+w*0.1,0.04,0.04,"",24,A.a4,A.bl,A.aD,4279310375,A.bg,null,D.eI,16777215,t,2,0,!1,"",0,D.cg,0,"","","","","",!1,0)
v=$.JU
u.db="__design__:"+(v.length===0?"layer":v)
A.d.ck(d.z,0,u)}d.e=4294967295
d.f=4294965229},
$S:z+1}
C.fAc.prototype={
$1(d){var w=2450411,v=4279548070
C.du(d,C.dv(3423541034,0.55,0,D.be,w,0,1,0,0))
C.du(d,C.dv(4009754623,0.56,0.45,D.jF,w,0,0.56,0.22,0.18))
C.du(d,C.dv(3439329279,0.44,0.45,D.jF,w,0,0.44,0.28,0.24))
C.du(d,C.dv(v,0.07,0,D.be,w,0,0.22,0.34,0.62))
C.du(d,C.dv(v,1,0,D.be,w,0,0.07,0,0))
d.e=4280166715
d.f=4279179050},
$S:z+1}
C.frH.prototype={
$1(d){return d.a===this.a},
$S:z+20}
C.frI.prototype={
$0(){return A.d.gK($.bCA())},
$S:z+52}
C.fg0.prototype={
$1(d){var w=A.a.i(d)
if(w.length===0)return""
return A.a.a0(w,"\u2022")?w:"\u2022 "+w},
$S:14}
C.fg_.prototype={
$1(d){return C.hOF(d,this.a,this.b)},
$S:z+53}
C.fAC.prototype={
$1(d){var w=this,v=w.a,u=w.b,t=B.vu(1.0375,1.01875,1)
return new B.fO(v,u,new C.aRo(B.hEs(A.uG,C.hOI(w.c,w.d,v,u),t)))},
$S:436}
C.dRU.prototype={
$1(d){var w=d.a/1e6
this.a.d.sp(0,w)
return w},
$S:8}
C.dRT.prototype={
$2(d,e){var w=null,v=Math.min(e.b,e.d),u=this.b,t=B.c_(w,new B.o(w,w,w,w,w,new B.bT(A.Jp,1.2,A.x,w,0,u.d,w,w),A.n),A.bd),s=this.a,r=s.d,q=s.a.d?0.45:1
return B.jt(new B.an(A.W,w,A.b_,A.r,B.a([t,new B.et(B.b3(w,w,w,new C.bd5(u.a,r,q,r),A.au),w),B.av(new B.kb(r,new C.dRS(s,v,this.c,u),w,w,x.cl),w,w,w)],x.p),w),A.r,w)},
$S:350}
C.dRS.prototype={
$3(d,e,f){var w,v,u,t,s=this,r=null,q=A.ev.av(0,A.k.D(e/1.4,0,1)),p=A.k.D(e/0.9,0,1),o=A.k.D((e-0.8)/0.9,0,1),n=Math.sin(e*1.6),m=s.b,l=m*0.08,k=x.p,j=B.a([],k),i=s.c
if(i!=null){w=m*0.22
v=m*0.008
u=s.d.e
t=B.B(u,x.bz)
t.push(A.d.gK(u))
u=B.a([new B.ac(0,A.G,u[1].j(0.55),A.J,l)],x.V)
A.d.v(j,B.a([B.p(r,B.hS(B.fL(i,A.A,r,r,A.co,A.bQ,!0,r,!1,r,r),A.aq),A.f,r,r,new B.o(r,r,r,r,u,new B.fS(A.A,0,6.283185307179586,A.x,t,r,new B.mh(e*0.8)),A.a6),r,w,r,r,new B.Q(v,v,v,v),r,r,w),new B.a7(r,m*0.04,r,r)],k))}i=s.d.e
w=s.a
v=A.a.i(w.a.c.b)
u=v.length
if(u===0)v="NGMY"
u=u>12?0.1:0.17
t=m*0.05
j.push(new C.bpB(i,e,B.d(v,r,r,r,r,r,r,B.l(r,r,A.c,r,r,r,r,r,r,r,r,m*u,r,r,A.u,r,1.05,!0,r,m*0.012,r,r,r,B.a([new B.cP(i[1].j(0.6),A.J,t)],x.r),r,r),A.L,r,r),r))
j.push(new B.a7(r,m*0.025,r,r))
u=Math.max(1.5,m*0.004)
j.push(B.db(B.dW(B.v(B.a([B.p(r,r,A.f,r,r,new B.o(r,r,r,r,r,new B.a8(A.a3,A.a7,A.x,B.a([A.K,i[1],A.K],x.O),r,r),A.n),r,u,r,r,r,r,r,m*0.22),new B.a7(r,m*0.022,r,r),B.d(w.a.c.gaJw(),r,r,r,r,r,r,B.l(r,r,A.c.j(0.92),r,r,r,r,r,r,r,r,t,r,r,A.a4,r,r,!0,r,m*0.003,r,r,r,r,r,r),A.L,r,r)],k),A.m,r,A.e,A.Q,0,A.p),new B.u(0,(1-o)*m*0.03)),o))
return B.db(B.eb(A.A,new B.C(new B.Q(l,0,l,0),B.v(j,A.m,r,A.e,A.Q,0,A.p),r),(0.6+0.4*q)*(1+n*0.012),r,r),p)},
$S:102}
C.eTz.prototype={
$1(d){var w=this.b
return new B.a8(A.ax,A.aC,A.x,this.a.c,B.a([0,A.k.D(w-0.1,0,1),A.k.D(w,0,1),A.k.D(w+0.1,0,1),1],x.x),null).aw(0,d)},
$S:66}
C.c6X.prototype={
$4$child$label$onTap$selected(d,e,f,g){var w,v=null,u=B.m(14),t=g?A.bK:A.bF
t=B.I(t,A.q,g?2.5:1)
w=g?B.a([new B.ac(0,A.G,A.hE.j(0.4),A.J,14)],x.V):v
w=B.dg(v,B.bw(B.m(12),d,A.aq),v,v,A.bc,new B.o(v,v,t,u,w,v,A.n),A.eE,v,72,v,v,v,v,v)
return B.aE(v,new B.a7(112,v,B.v(B.a([w,A.fZ,B.d(e,v,1,A.a2,v,v,v,B.l(v,v,g?A.bK:A.ad,v,v,v,v,v,v,v,v,11,v,v,A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.j,0,A.p),v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,f,v,v,v,v,v,v,!1,A.a8)},
$S:1685}
C.c6Y.prototype={
$0(){var w=this.a
return w.d.$1(w.c.Fc(""))},
$S:0}
C.c6Z.prototype={
$1(d){var w=this.a,v=w.c,u=d.a
return this.b.$4$child$label$onTap$selected(B.e1(new C.MW(v.Fc(u),!0,!1,null),!0,null),d.b,new C.c7_(w,this.c,d),v.a===u)},
$S:z+54}
C.c7_.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(C.hiR(u.b,t.c.Fc(u.c.a)),$async$$0)
case 2:s=e
if(s!=null)t.d.$1(s)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fGU.prototype={
$1(d){return new C.YF(this.a,null)},
$S:z+55}
C.d5G.prototype={
$0(){var w=this.a
w.d=w.gvl().b9Q("data:"+this.b+";base64,"+A.cS.gcv().aJ(this.c));++w.r},
$S:0}
C.d5L.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.d5M.prototype={
$0(){var w=this.a
return w.m(new C.d5K(w))},
$S:0}
C.d5K.prototype={
$0(){return this.a.r++},
$S:0}
C.d5N.prototype={
$1(d){var w=this.a
return w.m(new C.d5J(w,d))},
$S:2}
C.d5J.prototype={
$0(){var w=this.a
return w.d=w.gvl().aCu(this.b)},
$S:0}
C.d5O.prototype={
$0(){var w=this.a
return w.m(new C.d5I(w))},
$S:0}
C.d5I.prototype={
$0(){var w=this.a
return w.d=w.gvl().b9Q("")},
$S:0}
C.d5P.prototype={
$1(d){var w=this.a
return w.m(new C.d5H(w,d))},
$S:2}
C.d5H.prototype={
$0(){var w=this.a
return w.d=w.gvl().b9X(this.b)},
$S:0}
C.d5Q.prototype={
$0(){var w=this.a
w=w.gvl().b9X(w.gawf().a.a)
B.a6(this.b,!1).O(w)
return null},
$S:0}
C.fGT.prototype={
$1(d){var w={}
w.a=this.a
return new B.e0(new C.fGS(w),null)},
$S:20}
C.fGS.prototype={
$2(d,e){var w=null,v=this.a
return B.p(w,B.bm(!0,new B.cU(new B.aY(0,1/0,0,B.aI(d,A.bT,x.w).w.a.b*0.85),B.cd(B.v(B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.b2,w,w,B.m(9),w,w,A.n),w,4,w,w,w,w,w,40),w,w,w),A.aA,D.fnF,A.at,D.fnV,A.aA,new C.aYE(v.a,new C.fGR(v,e,d),!0,w)],x.p),A.F,w,A.e,A.Q,0,A.p),A.r,w,A.y,w,w,w,w,A.ah),w),!0,!1,A.af,!0,!1),A.f,w,w,D.aZG,w,w,w,w,A.LH,w,w,w)},
$S:185}
C.fGR.prototype={
$1(d){this.b.$1(new C.fGQ(this.a,d))
B.a6(this.c,!1).O(d)},
$S:z+56}
C.fGQ.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.fJf.prototype={
$1(d){return D.fLq},
$S:z+57}
C.dcs.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.dct.prototype={
$0(){var w=this.a.c
w.toString
B.a6(w,!1).O(this.b)
return null},
$S:0}
C.dcu.prototype={
$0(){var w=this.a,v=A.a.i(w.d.a.a)
if(v.length!==0){w=w.c
w.toString
B.a6(w,!1).O(v)}},
$S:0}
C.fxi.prototype={
$1(d){var w=this.b
return new B.a8(A.ax,A.aC,A.x,B.a([A.K,B.aq(this.a,A.c,0.75).j(0.9),A.K],x.O),B.a([A.k.D(w-0.12,0,1),A.k.D(w,0,1),A.k.D(w+0.12,0,1)],x.x),null).aw(0,d)},
$S:66}
C.d5n.prototype={
$3(d,e,f){var w,v=this,u=new B.aQ($.X().r,A.ap,null,null,B.a([],x.v)),t=d.a,s=v.b,r=e*s,q=d.b,p=f*s,o=q+p*0.12
u.E(new B.b5(t+r*1.2,o))
u.E(new B.cS(t+r*0.25,o,t+r*0.18,q+p*0.5))
w=t+r*0.12
u.E(new B.cS(w,q+p,w,q+p*1.2))
u.E(new B.CH(B.bW(new B.u(t+r*0.42,q+p*0.42),s*0.14),0,5.026548245743669))
s=v.c
s.aP(u,v.d)
s.aP(u,v.e)
p=B.M()
p.r=B.aq(v.a.d,A.c,0.6).gp(0)
s.ai(new B.u(w,o),2.2,p)},
$S:668}
C.fxm.prototype={
$2(d,e){return A.k.aL(d.c,e.c)},
$S:z+58}
C.fpI.prototype={
$1(d){return d.w==="marriage_agreement"},
$S:z+2}
C.fpJ.prototype={
$1(d){var w=null,v=this.a
return B.bm(!0,new B.C(E.xq,B.v(B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.b2,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bx,D.f6K,A.P,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aP,B.dq(D.G8,B.d('Endelea na "'+A.d.gK(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fpG(d),B.bk(A.bY,w,w,w,A.c,w,A.cf,w,w,w,w,w)),A.S,B.eB(A.nW,D.Tj,new C.fpH(d),B.de(w,w,w,w,w,w,w,w,w,A.ad,w,w,A.cf,w,w,Q.wv,w,w,w,w))],x.p),A.aj,w,A.e,A.Q,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:28}
C.fpG.prototype={
$0(){B.a6(this.a,!1).O("continue")
return null},
$S:0}
C.fpH.prototype={
$0(){B.a6(this.a,!1).O("new")
return null},
$S:0}
C.ccl.prototype={
$1(d){return d.hA()},
$S:z+59}
C.ccm.prototype={
$1(d){return d.ae()},
$S:z+60}
C.cck.prototype={
$1(b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=null,b2=B.a1(b5,x.N,x.z),b3=B.aJ(b2.h(0,"fontWeight")),b4=b3==null?b1:A.k.N(b3)
if(b4==null)b4=A.a4.gdI(0)
b3=B.aJ(b2.h(0,"fontStyle"))
w=b3==null?b1:A.k.N(b3)
if(w==null)w=0
b3=B.aJ(b2.h(0,"align"))
v=b3==null?b1:A.k.N(b3)
if(v==null)v=0
b3=b2.h(0,"id")
b3=J.k(b3==null?"":b3)
u=C.hKw(b2.h(0,"type"))
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
n=A.ax9[A.o.D(b4,0,8)]
m=D.cN6[A.o.D(w,0,1)]
l=C.hO7(b2.h(0,"decoration"))
k=B.aJ(b2.h(0,"color"))
k=k==null?b1:A.k.N(k)
if(k==null)k=4279310375
j=A.atX[A.o.D(v,0,5)]
i=b2.h(0,"imageRef")
i=i==null?b1:J.k(i)
h=C.hQV(b2.h(0,"shape"))
g=B.aJ(b2.h(0,"fillColor"))
g=g==null?b1:A.k.N(g)
if(g==null)g=4280640491
f=B.aJ(b2.h(0,"strokeColor"))
f=f==null?b1:A.k.N(f)
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
a2=a2==null?b1:A.k.N(a2)
if(a2==null)a2=0
a3=C.hec(b2.h(0,"textTransition"))
a4=B.aJ(b2.h(0,"textAnimDelayMs"))
a4=a4==null?b1:A.k.N(a4)
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
b2=b2==null?b1:A.k.N(b2)
return C.eo(j,a0,k,l,a1,g,o,m,n,a7,q,b3,i,a6,a5,a2,b0,a8,d,h,f,e,p,a4,b2==null?0:b2,a9,a3,u,r,t,s)},
$S:z+61}
C.cca.prototype={
$1(d){return d.hA()},
$S:z+62}
C.ccb.prototype={
$1(d){return d.ae()},
$S:z+63}
C.cc7.prototype={
$1(d){return B.t(d)},
$S:17}
C.cc8.prototype={
$1(d){return B.t(d)},
$S:17}
C.cc9.prototype={
$1(d){return C.h4T(B.a1(d,x.N,x.z))},
$S:z+64}
C.ccC.prototype={
$1(d){return d.a===this.a},
$S:z+65}
C.ccD.prototype={
$0(){return A.d.gK(D.a1z)},
$S:z+66}
C.ccx.prototype={
$1(d){var w,v,u=d.a
if(A.a.i(u).length===0)return
w=this.a
v=w.h(0,u)
if(v==null||!v.f.cc(d.f))w.n(0,u,d.hA())},
$S:z+7}
C.ccw.prototype={
$2(d,e){return e.f.aL(0,d.f)},
$S:z+21}
C.ccs.prototype={
$1(d){return new B.K(d,new C.cct(),B.U(d).k("K<1,S>")).fF(0,new C.ccu())},
$S:z+69}
C.cct.prototype={
$1(d){return d.f},
$S:z+70}
C.ccu.prototype={
$2(d,e){return d.cc(e)?d:e},
$S:669}
C.ccv.prototype={
$1(d){if(d==null||A.a.i(d).length===0)return B.a([],x.D)
return C.hAj(d)},
$S:z+71}
C.ccy.prototype={
$1(d){return!this.a.t(0,d.a)},
$S:z+2}
C.ccz.prototype={
$2(d,e){return e.f.aL(0,d.f)},
$S:z+21}
C.ccA.prototype={
$1(d){return d.ae()},
$S:z+14}
C.fxV.prototype={
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
C.fxR.prototype={
$2(d,e){var w=d.fx
return w.length!==0&&w===e.fx},
$S:z+8}
C.fxS.prototype={
$2(d,e){var w=d.at
return(w==null?"":w).length!==0&&w==e.at},
$S:z+8}
C.fxT.prototype={
$2(d,e){var w
if(d.b===D.cQ){w=A.a.i(d.r)
w=w.length!==0&&w===A.a.i(e.r)}else w=!1
return w},
$S:z+8}
C.fxU.prototype={
$2(d,e){return d.b===D.f_&&d.ax===e.ax&&d.fx.length===0&&e.fx.length===0},
$S:z+8}
C.ccg.prototype={
$2(b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=null,a9=b7.b,b0=a9/960,b1=this.a,b2=b1.c,b3=b1.d,b4=C.hZA(b2,b3),b5=B.a3(b4).k("bc<2>")
b5=B.cD(new B.bc(b4,b5),new C.ccf(),b5.k("J.E"),x.N)
w=B.da(b5,B.a3(b5).k("J.E"))
b1=b1.e
v=A.pw.av(0,A.k.D(b1,0,1))
u=new C.cch()
b5=B.aq(u.$2(b2,!1),u.$2(b3,!1),v)
b5.toString
t=B.aq(u.$2(b2,!0),u.$2(b3,!0),v)
t.toString
s=new C.cci(a9,b7.d)
r=new C.ccj(b0)
q=x.p
p=B.a([],q)
for(b2=b2.z,o=b2.length,n=b1/0.55,m=0;m<b2.length;b2.length===o||(0,B.L)(b2),++m){l=b2[m]
if(w.t(0,l.a))continue
k=A.jQ.av(0,A.k.D(n,0,1))
p.push(s.$5(l.c,l.d,l.e,l.f,new B.kA(A.k.D(1-k,0,1),B.dW(B.eb(A.A,r.$1(l),1-k*0.06,a8,a8),new B.u(-k*30*b0,0)),a8)))}for(b2=b3.z,b3=b2.length,o=1-v,j=0,m=0;m<b2.length;b2.length===b3||(0,B.L)(b2),++m){i=b2[m]
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
a5=r.$1(a4)}else a5=a2===D.lk&&l.at==i.at?r.$1(i):new B.an(A.W,a8,A.b_,A.r,B.a([new B.kA(A.k.D(o,0,1),r.$1(l),a8),new B.kA(A.k.D(v,0,1),r.$1(i),a8)],q),a8)
a2=a3===0?a5:new B.iE(B.vZ(a3),a8,A.A,!0,a8,a5,a8)
p.push(s.$5(n+(h-n)*v,g+(f-g)*v,e+(d-e)*v,a0+(a1-a0)*v,a2))}else{a6=A.k.D((b1-(0.35+j*0.07))/0.5,0,1);++j
a7=i.dy
if(a7===D.cg)a7=D.mv
p.push(s.$5(i.c,i.d,i.e,i.f,C.hgq(a7,a6,r.$1(i))))}}return B.c_(new B.an(A.W,a8,A.aa,A.r,p,a8),new B.o(a8,a8,a8,a8,a8,new B.a8(A.a3,A.a7,A.x,B.a([b5,t],x.O),a8,a8),A.n),A.bd)},
$S:385}
C.ccf.prototype={
$1(d){return d.a},
$S:z+22}
C.cch.prototype={
$2(d,e){var w
if(e){w=d.f
if(w==null)w=d.e}else w=d.e
return B.b0(w)},
$S:z+76}
C.cci.prototype={
$5(d,e,f,g,h){var w=this.a,v=this.b
return B.ao(null,h,g*v,null,d*w,null,e*v,f*w)},
$S:1689}
C.ccj.prototype={
$1(d){var w=null,v=d.fy,u=A.a.gX(d.a)
return new C.a71(v,C.b_M(!1,w,!1,d,w,!1,w,w,w,this.a,!1,!1),!0,u,w)},
$S:z+23}
C.dE6.prototype={
$2(d,e){var w=Date.now()/1000*2*3.141592653589793,v=Math.sin(w/18)
return B.eb(new B.d9(Math.sin(w/23)*0.6,Math.cos(w/29)*0.5),e,1.035+v*0.03,null,null)},
$S:45}
C.ccp.prototype={
$1(d){return d.a===this.a.a},
$S:z+11}
C.ccq.prototype={
$1(d){return d.a===this.a.a},
$S:z+20}
C.fAJ.prototype={
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
C.fzQ.prototype={
$1(d){return new C.acx(this.a,this.b,null)},
$S:z+78}
C.emx.prototype={
$0(){return this.a.Pi(this.b,C.i1U(),"Tap Save to Files on the next screen.","Download did not start \u2014 try Share.")},
$S:0}
C.emy.prototype={
$0(){var w=this.a,v=w.d?"Choose Print from the share menu for one full page.":"Pick Save to Files or send from the share menu."
return w.Pi(this.b,C.i1W(),v,"Share unavailable \u2014 try Safari.")},
$S:0}
C.emz.prototype={
$0(){var w=this.a,v=w.d?"PDF opened \u2014 tap Share \u2197 then Print.":"PDF opened \u2014 use Share \u2197 at the bottom of Safari."
return w.Pi(this.b,C.i1V(),v,"Could not open Safari \u2014 try Share.")},
$S:0}
C.emA.prototype={
$0(){Z.hga()
B.a6(this.a,!1).O(null)},
$S:0}
C.cce.prototype={
$1(d){var w=null,v=this.a
return v==null?d:B.l(w,w,w,w,w,w,w,w,w,w,w,d.r,d.x,w,d.w,v,d.as,!0,w,d.y,w,w,w,w,w,w)},
$S:1690}
C.ccd.prototype={
$2(d,e){var w,v=this,u=null,t=B.dL(d,A.ns),s=t==null?u:t.b,r=s==null?2:s,q=e.b,p=isFinite(q)?q:0,o=p<=0?u:A.k.V(A.k.D(p*Math.max(B.lK(r),5),96,1500))
t=v.b
w=v.c||v.d?A.bQ:A.dt
return B.fL(t,A.A,o,new C.ccc(),A.co,w,!0,u,!1,new B.cx("img_"+v.a.c.a+"_"+t.length,x.W),u)},
$S:1691}
C.ccc.prototype={
$3(d,e,f){return D.aaD},
$S:232}
C.fxQ.prototype={
$2(d,e){var w,v,u,t=null,s=B.m(6),r=this.a
if(r.f!=null){w=B.b0(r.e)
v=r.f
v.toString
v=new B.a8(A.ax,A.aC,A.x,B.a([w,B.b0(v)],x.O),t,t)
w=v}else w=t
v=r.f==null?B.b0(r.e):t
r=r.z
r=B.dc(r,0,B.dJ(6,"count",x.S),B.U(r).c)
u=r.$ti.k("K<ak.E,cK>")
r=B.B(new B.K(r,new C.fxP(e.b,e.d),u),u.k("ak.E"))
return B.bw(s,B.c_(new B.an(A.W,t,A.aa,A.r,r,t),new B.o(v,t,t,t,t,w,A.n),A.bd),A.aq)},
$S:1692}
C.fxP.prototype={
$1(d){var w=null,v=d.c,u=this.a,t=d.d,s=this.b,r=d.e,q=d.f
return B.ao(w,C.b_M(!1,w,!1,d,w,!1,w,w,w,u/960,!1,!0),q*s,w,v*u,w,t*s,r*u)},
$S:z+24}
C.fiy.prototype={
$3(d,e,f){var w,v,u,t,s,r=this,q=null,p=r.a
p.a=B.cM(r.b,new C.fiw(d))
w=B.aI(d,A.bT,x.w).w
v=B.m(22)
u=B.I(A.bF,A.q,1)
t=B.a([new B.ac(0,A.G,A.w.j(0.45),A.fL,28)],x.V)
s=x.p
return new B.cX(e,!1,B.av(B.aG(!1,A.a1,!0,q,B.p(q,B.v(B.a([B.A(B.a([B.D(B.v(B.a([B.d(r.c,q,q,q,q,q,q,A.kX,q,q,q),A.at,B.d("Applied \u2014 tap Done or wait 1.5 seconds",q,q,q,q,q,q,B.l(q,q,A.c.j(0.45),q,q,q,q,q,q,q,q,11,q,q,A.a4,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),A.F,q,A.e,A.j,0,A.p),1),B.bK(!1,A.zm,q,q,!0,q,q,new C.fix(p,d),q,B.fv(q,q,A.bj,q,q,q,q,q,q,q,q,A.c,q,q,q,q,q,A.EZ,q,new B.b7(B.m(12),A.Y),q,q,q,q,q,q))],s),A.m,q,A.e,A.j,0,q,q),A.aA,r.d],s),A.m,q,A.e,A.Q,0,A.p),A.f,q,new B.aY(0,w.a.a*0.94,0,1/0),new B.o(A.aB,q,u,v,t,q,A.n),q,q,q,A.fI,A.F7,q,q,q),A.f,A.K,0,q,q,q,q,q,A.ag),q,q,q),q)},
$C:"$3",
$R:3,
$S:245}
C.fiw.prototype={
$0(){var w=this.a
if(w.e!=null&&B.a6(w,!0).pj())B.a6(w,!0).eI()},
$S:0}
C.fix.prototype={
$0(){var w=this.a.a
if(w!=null)w.a8(0)
B.a6(this.b,!0).eI()},
$S:0}
C.f0T.prototype={
$2(d,e){var w,v,u=this,t=null,s=u.a,r=s.d
r===$&&B.c()
r=r.x
r===$&&B.c()
switch(s.a.c.a){case 0:return u.b
case 1:case 13:return new B.an(A.W,t,A.b_,A.r,B.a([u.c,B.db(u.b,r)],x.p),t)
case 2:case 17:return new B.an(A.W,t,A.b_,A.r,B.a([u.c,B.dW(u.b,new B.u((1-r)*220,0))],x.p),t)
case 3:return new B.an(A.W,t,A.b_,A.r,B.a([u.c,B.dW(u.b,new B.u(-(1-r)*220,0))],x.p),t)
case 4:case 21:return new B.an(A.W,t,A.b_,A.r,B.a([u.c,B.dW(u.b,new B.u(0,(1-r)*140))],x.p),t)
case 5:return new B.an(A.W,t,A.b_,A.r,B.a([u.c,B.dW(u.b,new B.u(0,-(1-r)*140))],x.p),t)
case 6:return new B.an(A.W,t,A.b_,A.r,B.a([u.c,B.eb(A.A,B.db(u.b,r),0.6+r*0.4,t,t)],x.p),t)
case 7:return new B.an(A.W,t,A.b_,A.r,B.a([u.c,B.eb(A.A,B.db(u.b,r),1.3-r*0.3,t,t)],x.p),t)
case 8:s=B.dl()
w=s.a
w.$flags&2&&B.ai(w)
w[11]=0.001
s.fv(r*3.14159)
return B.fs(A.A,r<0.5?u.c:u.b,t,s,!0)
case 9:s=B.dl()
w=s.a
w.$flags&2&&B.ai(w)
w[11]=0.001
s.jR(r*3.14159)
return B.fs(A.A,r<0.5?u.c:u.b,t,s,!0)
case 10:s=B.dl()
w=s.a
w.$flags&2&&B.ai(w)
w[11]=0.002
s.fv(r*1.2)
s.jR(r*0.5)
return B.fs(A.A,B.db(u.b,0.4+r*0.6),t,s,!0)
case 11:s=B.dl()
w=s.a
w.$flags&2&&B.ai(w)
w[11]=0.002
s.fv(-r*1.4)
return B.fs(A.a7,B.db(u.b,r),t,s,!0)
case 12:return new B.an(A.W,t,A.b_,A.r,B.a([u.c,B.db(B.eb(A.A,u.b,1.02-r*0.02,t,t),r)],x.p),t)
case 14:return new B.an(A.W,t,A.b_,A.r,B.a([u.c,B.jt(u.b,A.r,new C.aIb(r,t))],x.p),t)
case 15:return new B.an(A.W,t,A.b_,A.r,B.a([u.c,B.jt(u.b,A.r,new C.aIb(1-r,t))],x.p),t)
case 16:v=D.b23.av(0,r)
return new B.an(A.W,t,A.b_,A.r,B.a([u.c,B.eb(A.A,B.db(u.b,r),0.5+v*0.5,t,t)],x.p),t)
case 18:s=r<0.15
if(s)r=1
return new B.an(A.W,t,A.b_,A.r,B.a([u.c,B.db(B.ek(u.b,A.c.j(s?0.9:0),!0),r)],x.p),t)
case 19:s=B.dl()
s.mC(r*6.28)
s.jA(r,r,r,1)
return B.fs(A.A,u.b,t,s,!0)
case 20:return B.eC(A.A,(r-0.5)*0.35,new B.an(A.W,t,A.b_,A.r,B.a([u.c,B.db(u.b,r)],x.p),t),t)}},
$S:60}
C.dQ6.prototype={
$0(){var w=this.a
if(w.c!=null){w=w.d
w===$&&B.c()
w.cq(0)}},
$S:11}
C.dQ5.prototype={
$0(){var w=this.a
if(w.c!=null){w=w.d
w===$&&B.c()
w.cq(0)}},
$S:11}
C.dQ4.prototype={
$2(d,e){var w,v=this.a
e.toString
w=v.d
w===$&&B.c()
v=v.a.c.dy
w=w.x
w===$&&B.c()
return C.hgq(v,w,e)},
$S:60}
C.cc6.prototype={
$2(d,e){var w,v,u,t,s,r=null,q={}
q.a=0
w=this.a
v=w.c
if(v.f!=null){u=B.b0(v.e)
t=v.f
t.toString
t=new B.a8(A.a3,A.a7,A.x,B.a([u,B.b0(t)],x.O),r,r)
u=t}else u=r
t=v.f==null?B.b0(v.e):r
v=v.z
s=B.U(v).k("K<1,cK>")
q=B.B(new B.K(v,new C.cc5(q,w,e.b,e.d),s),s.k("ak.E"))
return B.c_(new B.an(A.W,r,A.aa,A.f,q,r),new B.o(t,r,r,r,r,u,A.n),A.bd)},
$S:385}
C.cc5.prototype={
$1(d){var w,v=this,u=null,t=d.dy!==D.cg?v.a.a++:0,s=d.c,r=v.c,q=d.d,p=v.d,o=d.e,n=d.f,m=d.fy,l=v.b,k=l.d
l=k||l.e
w=A.a.gX(d.a)
return B.ao(u,new C.a71(m,new C.Uk(d,C.b_M(!1,u,!1,d,u,!1,u,u,u,r/960,!1,!1),k,t,u),l,w,u),n*p,u,s*r,u,q*p,o*r)},
$S:z+24}
C.d2C.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.d2B(w))},
$S:11}
C.d2B.prototype={
$0(){return this.a.d++},
$S:0}
C.ea9.prototype={
$2(d,e){var w,v=null,u=A.o.an(this.b.e.a,1000),t=A.o.F(Date.now(),u)/u*3.141592653589793*2+this.c,s=this.a
if(D.aM0.t(0,A.d.gK(s.a.c.split("@")))){s=s.a
w=s.c
s=s.f
e.toString
return C.hZj(w,t,s,e)}switch(s.a.c){case"float3d":s=B.dl()
w=s.a
w.$flags&2&&B.ai(w)
w[11]=0.0016
w=Math.sin(t)
s.e2(0,w*7,0,1)
s.fv(Math.sin(t)*0.32)
s.jR(Math.cos(t)*0.12)
w=1+Math.sin(t*2)*0.025
s.jA(w,w,w,1)
return B.fs(A.A,e,v,s,!0)
case"drift":s=Math.sin(t)
w=Math.cos(t*0.8)
return B.dW(B.eb(A.A,e,1+Math.sin(t*0.5)*0.05,v,v),new B.u(s*14,w*10))
default:s=Math.sin(t)
return B.db(B.eb(A.A,e,1+Math.sin(t)*0.04,v,v),0.82+s*0.18)}},
$S:60}
C.eRc.prototype={
$1(d){var w
$.X()
w=B.M()
w.b=A.ae
w.c=d
w.e=A.fz
return w},
$S:1693}
C.fvq.prototype={
$2(d,e){var w,v,u,t,s=this,r=null,q=e.b,p=e.d,o=Math.min(q,p)
if(!s.a)w=s.b.length===0&&s.c.length!==0
else w=!0
v=w?new B.at(o,o):new B.at(q,p)
u=s.b
if(u.length===0)u="rounded"
q=s.c
p=q.length===0
if(p)t=0
else{w=v.gef()
t=w*(q==="framed"?0.07:0.05)}w=B.a([],x.p)
if(q==="framed"||q==="gold")w.push(B.b3(r,r,r,new C.bpu(u,t,r),A.au))
w.push(B.no(s.d,A.aq,new C.bdC(u,t,r)))
if(!p)w.push(B.b3(r,r,r,new C.bou(u,q,t,r),A.au))
return B.av(new B.a7(v.a,v.b,new B.an(A.W,r,A.b_,A.r,w,r),r),r,r,r)},
$S:239}
C.fln.prototype={
$1(d){var w=d.b[1]
return w==null?"":w},
$S:318}
C.esL.prototype={
$0(){var w=0,v=B.j(x.aP),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(S.Cr(t.a.a.c),$async$$0)
case 3:s=e
r=J.a5(s)
if(r.gam(s)){u=null
w=1
break}u=r.dL(s,new C.esJ(),new C.esK(s))
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1694}
C.esJ.prototype={
$1(d){return d.at==="published"&&d.Q.length!==0},
$S:183}
C.esK.prototype={
$0(){return J.fo(this.a)},
$S:1696}
C.ep8.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.ep9.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.epa.prototype={
$0(){var w=this.a
w.d=this.b
w.x=!1},
$S:0}
C.eqJ.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eqx.prototype={
$1(d){return d.w!=="hati_kiapo_uongozi"},
$S:z+2}
C.eqy.prototype={
$1(d){return d.hA()},
$S:z+81}
C.eow.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.erR.prototype={
$0(){this.a.tf()},
$S:0}
C.esH.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.e=u
w.f=A.o.D(v.b,0,u.r.length-1)
w.r=v.c
w.o_()
w.JG()},
$S:0}
C.eqH.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.e=u
w.f=A.o.D(v.b,0,u.r.length-1)
w.r=v.c
w.o_()
w.JG()},
$S:0}
C.esu.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+2}
C.esv.prototype={
$1(d){return d.b===D.cQ},
$S:z+4}
C.esw.prototype={
$1(d){return d.a},
$S:z+22}
C.esx.prototype={
$0(){var w=this.a.r
return new B.ar(new B.bb(w,A.b3,A.aN),$.aw())},
$S:263}
C.esy.prototype={
$0(){return B.ki(!0,null,!0,!0,null,null,!1)},
$S:673}
C.enV.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+2}
C.esI.prototype={
$0(){},
$S:0}
C.epQ.prototype={
$0(){var w=this.a
w.e=this.b.hA()
w.f=0
w.r=null
w.db=!1
A.d.a9(w.ax)
A.d.a9(w.ay)
w.x7()
w.JG()},
$S:0}
C.enT.prototype={
$0(){var w=this.a
w.e=null
w.db=!1
w.w=w.r=null
w.x7()},
$S:0}
C.enU.prototype={
$0(){var w=this.a
w.w=w.r=w.e=null
w.x7()},
$S:0}
C.eqc.prototype={
$1(d){return d.a===this.a.a.a},
$S:z+2}
C.eqd.prototype={
$0(){var w=this.a
w.e=this.b
w.f=0
w.r=null
w.db=!this.c
A.d.a9(w.ax)
A.d.a9(w.ay)
w.x7()
w.JG()
w.z="Home"},
$S:0}
C.eqe.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.epP.prototype={
$1(d){var w=null
return B.ej(B.a([B.bK(!1,A.Ti,w,w,!0,w,w,new C.epO(d),w,w)],x.p),w,w,w,D.fpp,w,w,w,w,D.f7c,w)},
$S:19}
C.epO.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.epM.prototype={
$1(d){var w=null
return B.ej(B.a([B.bK(!1,A.Ti,w,w,!0,w,w,new C.epL(d),w,w)],x.p),w,w,w,D.fb5,w,w,w,w,D.f8T,w)},
$S:19}
C.epL.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.epN.prototype={
$0(){},
$S:0}
C.ep4.prototype={
$1(d){return this.a.aZj(C.bAz(d))},
$S:z+7}
C.ep5.prototype={
$1(d){return this.a.ae3(C.bAz(d))},
$S:z+7}
C.epW.prototype={
$1(d){var w=null,v=x.p,u=B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.b2,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bx,D.fpt,A.at,B.d("Chagua aina ya hati",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.bx,new C.P1(A.vo,D.avi,"HATI YA KUHOWA","Hati ya mahari",new C.epR(d),w),A.S,new C.P1(A.h9,D.cZ1,"HATI YA KUHOWESHA","Hati ya kupokea",new C.epS(d),w),A.S,new C.P1(A.hZ,D.cLn,"HATI YA NDOA","Makubaliano \xb7 pete \xb7 picha za wanandoa",new C.epT(d),w),A.S,new C.P1(A.hK,D.cJH,"MALIPO YA AWAMU YA MAHARI","Makubaliano ya mahari iliyosalia",new C.epU(d),w)],v)
if(this.a.gaaB())A.d.v(u,B.a([A.S,new C.P1(A.iV,D.cuR,"HATI YA KIAPO CHA UONGOZI","Kiapo cha Rais \xb7 Civic Registry",new C.epV(d),w)],v))
return B.bm(!0,B.cd(B.v(u,A.aj,w,A.e,A.Q,0,A.p),A.r,w,A.y,w,E.xq,w,w,A.ah),!0,!1,A.af,!0,!0)},
$S:28}
C.epR.prototype={
$0(){B.a6(this.a,!1).O("hati_kuhowa")
return null},
$S:0}
C.epS.prototype={
$0(){B.a6(this.a,!1).O("hati_kuhoweya")
return null},
$S:0}
C.epT.prototype={
$0(){B.a6(this.a,!1).O("marriage_agreement")
return null},
$S:0}
C.epU.prototype={
$0(){B.a6(this.a,!1).O("hati_malipo_awamu")
return null},
$S:0}
C.epV.prototype={
$0(){B.a6(this.a,!1).O("hati_kiapo_uongozi")
return null},
$S:0}
C.epX.prototype={
$0(){var w=this.a
w.e=this.b.hA()
w.f=0
w.r=null
w.db=!0
A.d.a9(w.ax)
A.d.a9(w.ay)
w.x7()},
$S:0}
C.enX.prototype={
$1(d){return d.z.length===0},
$S:z+6}
C.enY.prototype={
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
C.eq7.prototype={
$1(d){return d.b===D.lk},
$S:z+4}
C.eq8.prototype={
$1(d){var w={},v=this.b
w.a=A.d.gK(v).go
w.b=A.d.gK(v).id
return new B.e0(new C.eq5(w,this.a,v),null)},
$S:20}
C.eq5.prototype={
$2(a2,a3){var w,v,u,t,s,r,q=null,p=this.a,o=this.b,n=this.c,m=new C.eq6(p,o,a3,n),l=B.P(a2).ax.a===A.I,k=l?A.c:A.M,j=l?A.aR:A.ak,i=l?A.bm:A.bM,h=l?A.M:A.c,g=B.m(28),f=B.I(l?A.bF:A.aL,A.q,1),e=x.p,d=B.A(B.a([B.D(B.v(B.a([B.d("Logo and pictures",q,q,q,q,q,q,B.l(q,q,k,q,q,q,q,q,q,q,q,20,q,q,A.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),A.bA,B.d("Tap a shape or a ring to change it.",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,12.5,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],e),A.F,q,A.e,A.j,0,A.p),1),B.aH(q,q,q,q,B.W(A.cA,j,q,q,q,q),q,q,q,new C.eq1(a2),q,q,q,q,q,q)],e),A.m,q,A.e,A.j,0,q,q),a0=B.d("SHAPE",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q),a1=B.a([],e)
for(w=0;w<7;++w){v={}
u=D.BJ[w]
v.a=null
t=v.a=u.a
a1.push(new C.bg6(t,u.b,p.a===t,i,k,new C.eq2(v,m),q))}a1=B.bZ(A.bB,a1,A.bs,10,10)
v=B.d("RING",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q)
u=B.a([],e)
for(w=0;w<11;++w){s={}
r=D.BE[w]
s.a=null
t=s.a=r.a
u.push(new C.bg5(t,r.b,p.b===t,k,j,new C.eq3(s,m),q))}return B.bm(!0,B.p(q,B.cd(B.v(B.a([d,A.aP,a0,A.S,a1,A.bx,v,A.S,B.bZ(A.bB,u,A.bs,12,12),A.bx,new B.a7(1/0,48,B.eB(D.bOo,D.frQ,new C.eq4(o,n),B.de(q,q,q,q,q,q,q,q,q,A.aE,q,q,q,q,new B.b7(B.m(16),A.Y),D.aXb,q,q,q,q)),q)],e),A.F,q,A.e,A.Q,0,A.p),A.r,q,A.y,q,q,q,q,A.ah),A.f,q,q,new B.o(h,q,f,g,q,q,A.n),q,q,q,A.tu,D.bqN,q,q,q),!0,!1,A.af,!0,!0)},
$S:83}
C.eq6.prototype={
$2$f$r(d,e){var w=this
w.c.$1(new C.eq_(w.a,d,e))
w.b.d1(new C.eq0(w.d,d,e))},
$0(){return this.$2$f$r(null,null)},
$1$r(d){return this.$2$f$r(null,d)},
$1$f(d){return this.$2$f$r(d,null)},
$S:1699}
C.eq_.prototype={
$0(){var w=this,v=w.b
if(v!=null)w.a.a=v
v=w.c
if(v!=null)w.a.b=v},
$S:0}
C.eq0.prototype={
$0(){var w,v,u,t,s,r,q,p
for(w=this.a,v=w.length,u=this.c,t=u!=null,s=this.b,r=s!=null,q=0;q<v;++q){p=w[q]
if(r)p.go=s
if(t)p.id=u}},
$S:0}
C.eq1.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.eq2.prototype={
$0(){return this.b.$1$f(this.a.a)},
$S:0}
C.eq3.prototype={
$0(){return this.b.$1$r(this.a.a)},
$S:0}
C.eq4.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A4.G9(78,1920),$async$$0)
case 3:s=e
if(s==null){w=1
break}t.a.d1(new C.epZ(t.b,s))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.epZ.prototype={
$0(){var w,v,u,t
for(w=this.a,v=w.length,u=this.b,t=0;t<v;++t)w[t].at=u},
$S:0}
C.eqa.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+6}
C.eqb.prototype={
$0(){var w,v,u,t=this,s=t.a
if(s.a<0)s.a=t.c.r.length
w=t.c
v=w.r
A.d.bm(v,new C.eq9(t.d))
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
C.eq9.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+6}
C.eqs.prototype={
$1(d){return d.b===D.cQ},
$S:z+4}
C.eqt.prototype={
$1(d){return d.w},
$S:z+82}
C.equ.prototype={
$2(d,e){return d>e?d:e},
$S:88}
C.eqv.prototype={
$1(d){var w=this,v=null,u=B.P(d).ax.a===A.I,t=u?A.c:A.M,s=u?A.aR:A.ak,r=u?A.bm:A.aQ,q=u?A.M:A.c,p=B.m(28),o=B.I(u?A.bF:A.aL,A.q,1),n=B.aI(d,A.bT,x.w).w,m=w.a,l=x.p,k=w.b
return B.bm(!0,B.p(v,B.v(B.a([B.A(B.a([B.p(v,D.bIa,A.f,v,v,D.aYz,v,38,v,v,v,v,v,38),A.bf,B.D(B.v(B.a([B.d("Edit this slide",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,19,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.d("Slide "+(m.f+1)+" \xb7 changes save as you type",v,v,v,v,v,v,B.l(v,v,s,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],l),A.F,v,A.e,A.j,0,A.p),1),B.aH(v,v,v,v,B.W(A.cA,s,v,v,v,v),v,v,v,new C.eqp(d),v,v,v,v,v,v)],l),A.m,v,A.e,A.j,0,v,v),A.aA,new B.dm(1,A.ci,B.hH(v,new C.eqq(m,k,w.c,s,w.d,t,r),k.length,A.fx,v,A.ah,new C.eqr(),!0),v)],l),A.F,v,A.e,A.Q,0,A.p),A.f,v,new B.aY(0,1/0,0,n.a.b*0.8),new B.o(q,v,o,p,v,v,A.n),v,v,v,A.tu,A.XW,v,v,v),!0,!1,A.af,!0,!0)},
$S:28}
C.eqp.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.eqr.prototype={
$2(d,e){return A.ac},
$S:36}
C.eqq.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=null,p=r.b[e],o=p.w===r.c,n=o?"TITLE":"TEXT "+(e+1)
n=B.d(n,q,q,q,q,q,q,B.l(q,q,o?A.aE:r.d,q,q,q,q,q,q,q,q,10.5,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q)
w=r.e
v=w.h(0,p.a)
u=o?1:2
t=o?A.H:A.cv
t=B.l(q,q,r.f,q,q,q,q,q,q,q,q,15,q,q,t,q,q,!0,q,q,q,q,q,q,q,q)
s=r.a
w=B.aH(q,q,q,q,D.bLf,q,q,q,new C.eqn(s,w,p),q,q,q,q,"Add an icon",q)
return B.v(B.a([new B.C(D.bt0,n,q),B.aM(q,A.T,!1,q,!0,A.r,q,B.aN(),v,q,q,q,q,q,2,B.br(q,new B.b4(4,B.m(16),A.Y),q,A.eP,q,q,q,q,!0,q,q,q,q,q,q,r.r,!0,q,q,q,q,new B.b4(4,B.m(16),D.aWR),q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,!0,!0,!1,q,q,q,q,q,q,q,q,w,q,q,q,q,q),A.y,!0,q,!0,q,!1,q,A.ai,q,q,q,q,q,q,q,q,q,q,u,q,!1,"\u2022",q,new C.eqo(s,p),q,q,q,!1,q,q,!1,q,!0,q,A.a9,q,q,q,q,q,q,q,q,q,q,q,t,!0,A.a5,q,A.am,q,q,q,q)],x.p),A.F,q,A.e,A.j,0,A.p)},
$S:674}
C.eqn.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=t.a
k=l.c
k.toString
w=3
return B.b(C.i3Y(k),$async$$0)
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
l.ai4(k,m)
l.p5()
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eqo.prototype={
$1(d){var w=this.a
w.ai4(this.b.a,d)
w.p5()},
$S:2}
C.eqw.prototype={
$0(){},
$S:0}
C.epY.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.db=u.length===0?null:u
w.dx=v.b
w.dy=v.c
v=v.d
w.fr=v.length===0?null:v},
$S:0}
C.eod.prototype={
$0(){},
$S:0}
C.eoe.prototype={
$0(){var w=this.c.CW
if(w==null)w=""
C.hhJ(this.b,w,!0)
w=this.a
w.r=null
w.x7()},
$S:0}
C.eof.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+6}
C.eog.prototype={
$0(){var w,v,u,t=this,s=t.a
if(s.a<0)s.a=t.c.r.length
w=t.c
v=w.r
A.d.bm(v,new C.eoc(t.d))
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
C.eoc.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+6}
C.eqC.prototype={
$1(d){return B.oH(new C.eqB(this.a,d),!1,0.82,0.95,0.45,!1,null)},
$S:127}
C.eqB.prototype={
$2(d,e){var w=null,v=x.p
return B.v(B.a([new B.C(E.ahb,B.v(B.a([D.fn4,A.an,B.d("Top 4 templates are free \xb7 lock icon means Slides Pro",w,w,w,w,w,w,B.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],v),A.F,w,A.e,A.j,0,A.p),w),B.D(B.ic(!0,w,e,A.y,D.eLr,new C.eqA(this.a,this.b),20,A.tx,w,A.ah,!1),1)],v),A.aj,w,A.e,A.j,0,A.p)},
$S:373}
C.eqA.prototype={
$2(d,e){var w=null,v=D.GB[e],u=C.hAe(v),t=B.m(16),s=B.m(16),r=B.a([v.e,v.f],x.O),q=v.d,p=B.I(q.j(0.45),A.q,1),o=q.j(0.2),n=B.m(8),m=x.p
n=B.a([B.p(w,B.d(v.c,w,w,w,w,w,w,B.l(w,w,q,w,w,w,w,w,w,w,w,9,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.f,w,w,new B.o(o,w,w,n,w,w,A.n),w,w,w,w,A.fJ,w,w,w)],m)
if(u)A.d.v(n,B.a([A.bp,B.p(w,D.eFC,A.f,w,w,new B.o(A.dS.j(0.85),w,w,B.m(8),w,w,A.n),w,w,w,w,A.n6,w,w,w)],m))
return B.aG(!1,A.a1,!0,w,B.aL(!1,t,!0,B.p(w,B.v(B.a([B.A(n,A.m,w,A.e,A.j,0,w,w),A.b4,B.d(v.b,w,w,w,w,w,w,B.l(w,w,v.r,w,w,w,w,w,w,w,w,14,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.d("5 slides",w,w,w,w,w,w,B.l(w,w,v.w.j(0.8),w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],m),A.F,w,A.e,A.j,0,A.p),A.f,w,w,new B.o(w,w,p,s,w,new B.a8(A.a3,A.a7,A.x,r,w,w),A.n),w,w,w,w,A.bk,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eqz(this.a,u,this.b,v),w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ag)},
$S:75}
C.eqz.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=t.b?3:4
break
case 3:s=t.c
r=t.a.a
w=5
return B.b(C.cco(s,r.c,r.d),$async$$0)
case 5:if(!e||s.e==null){w=1
break}case 4:s=t.c
if(s.e!=null)B.a6(s,!1).O(t.d.a)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eqD.prototype={
$0(){var w=this.a
w.e=this.b.hA()
w.f=0
w.r=null
w.db=!0
A.d.a9(w.ax)
A.d.a9(w.ay)
w.x7()},
$S:0}
C.emS.prototype={
$0(){var w,v=this.a,u=v.gq2(),t=C.rh(4294967295,null,0,0,null,C.cC(),D.mu,"","","",D.dd),s=this.b
C.ccB(t,s,u)
w=v.gdq()
if(w!=null&&s!==D.Ch){t.e=w.e
t.f=w.f}A.d.ck(v.e.r,v.f+1,t);++v.f
v.r=null},
$S:0}
C.eob.prototype={
$0(){var w,v,u,t,s,r,q=this.b.ae()
q.n(0,"id",C.cC())
w=x.c.a(q.h(0,"elements"))
if(w!=null)for(v=J.aV(w),u=x.f;v.C();){t=v.gU(v)
if(u.b(t)){s=Date.now()
r=$.iX
$.iX=r+1
J.aF(t,"id",""+1000*s+"_"+r)}}v=this.a
A.d.ck(v.e.r,v.f+1,C.h4T(q));++v.f},
$S:0}
C.eo9.prototype={
$0(){var w=this.a
A.d.cA(w.e.r,w.f)
w.f=A.o.D(w.f,0,w.e.r.length-1)
w.r=null},
$S:0}
C.eqL.prototype={
$0(){var w,v=this.a,u=this.b,t=A.d.cA(v.e.r,u),s=this.c
A.d.ck(v.e.r,s,t)
w=v.f
if(w===u)v.f=s
else if(u<w&&s>=w)v.f=w-1
else if(u>w&&s<=w)v.f=w+1},
$S:0}
C.eo5.prototype={
$0(){var w,v=this.a,u=this.b
A.d.bm(v.d,new C.eo4(u))
w=v.e
w=w==null?null:w.a
if(w===u.a){v.e=null
v.db=!1}},
$S:0}
C.eo4.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eqK.prototype={
$0(){var w,v=this.b,u=A.a.i(this.c)
v.b=u.length===0?"Untitled Presentation":u
v.f=new B.S(Date.now(),0,!1)
u=this.a.e
w=u==null?null:u.a
if(w===v.a)u.b=v.b},
$S:0}
C.enW.prototype={
$0(){var w=this.a.r
return new B.ar(new B.bb(w,A.b3,A.aN),$.aw())},
$S:263}
C.eox.prototype={
$0(){return B.ki(!0,null,!0,!0,null,null,!1)},
$S:673}
C.ess.prototype={
$0(){var w=this.a
w.w=w.r=this.b
w.y=!1},
$S:0}
C.est.prototype={
$1(d){var w,v,u=this.a
if(u.c==null||u.w!==this.b)return
w=this.c
u.asd(w).fG()
v=u.VX(w)
v.srY(B.h8(A.bu,v.a.a.length))},
$S:8}
C.erS.prototype={
$0(){var w,v,u,t=this
if(t.b)t.a.w=null
w=t.a
v=w.r=t.c
if(v!=null){w.as=!0
u=w.WW(v)
if(u!=null&&u.b===D.cQ)w.VX(u).saV(0,u.r)}else w.w=null},
$S:0}
C.emT.prototype={
$0(){var w=C.cC(),v=this.a,u=C.eo(A.bg,!1,v.gq2().e.l(),A.aD,"",4280640491,24,A.bl,A.a4,"",0.22,w,null,"","",0,!1,"",0,D.be,4280172719,2,"Tap to edit text",0,0,"",D.cg,D.cQ,0.7,0.15,0.2)
A.d.L(v.gdq().z,u)
v.r=u.a},
$S:0}
C.emQ.prototype={
$0(){var w=C.cC(),v=this.a,u=C.eo(A.bg,!1,4279310375,A.aD,"",v.gq2().c.j(0.25).l(),24,A.bl,A.a4,"",0.25,w,null,"","",0,!1,"",0,this.b,v.gq2().c.l(),2,"",0,0,"",D.cg,D.f_,0.25,0.3,0.3)
A.d.L(v.gdq().z,u)
v.r=u.a},
$S:0}
C.emG.prototype={
$0(){var w=C.eo(A.bg,!1,4279310375,A.aD,"",4280640491,24,A.bl,A.a4,"",0.55,C.cC(),this.b,"","",0,!1,"",0,D.be,4280172719,2,"",0,0,"",D.cg,D.lk,0.6,0.2,0.18),v=this.a
A.d.L(v.gdq().z,w)
v.r=w.a},
$S:0}
C.emD.prototype={
$1(d){var w,v,u,t,s,r=null,q=B.a([D.bUV],x.p)
for(w=J.aV(this.a);w.C();){v=w.gU(w)
u=A.a.i(v.b)
if(u.length===0)u="My Bio"
t=v.gaiI().length
s=v.at==="published"&&v.Q.length!==0?" \xb7 "+v.as:""
q.push(B.dN(!1,r,r,r,!0,r,r,r,!0,r,D.bFV,r,r,r,r,new C.emC(d,v),!1,r,r,r,r,r,new B.x(""+t+" links"+s,r,r,r,r,r,r,A.a2,r,1,r,r),r,new B.x(u,r,r,r,r,r,r,r,r,r,r,r),r,r,r))}return B.bm(!0,B.cB(q,r,r,r,r,A.ah,!0),!0,!1,A.af,!0,!0)},
$S:28}
C.emC.prototype={
$0(){B.a6(this.a,!1).O(this.b)
return null},
$S:0}
C.emE.prototype={
$0(){var w=A.k.D(0.23131034482758622,0.12,0.5),v=C.cC(),u=this.b,t=A.R.ao(u.ae(),null),s=C.eo(A.bg,!1,4279310375,A.aD,u.b,4280640491,24,A.bl,A.a4,"",0.86,v,null,"","",0,!1,"",0,D.be,4280172719,2,t,0,0,"",D.cg,D.a45,w,0.5-w/2,0.07)
t=this.a
A.d.L(t.gdq().z,s)
t.r=s.a},
$S:0}
C.eo7.prototype={
$1(d){return d.a===this.a&&d.db==="ngmy_quote_logo"},
$S:z+4}
C.eo8.prototype={
$0(){var w,v=this.a,u=this.b
A.d.bm(v.gdq().z,new C.eo6(u))
v.w=v.r=null
w=v.ch.W(0,u)
if(w!=null){w.S$=$.aw()
w.P$=0}v=v.CW.W(0,u)
if(v!=null)v.q()},
$S:0}
C.eo6.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.enk.prototype={
$0(){var w,v,u,t=this,s=t.b
if(s!=null){w=s.b
if(w===D.cQ)s.Q=t.c.l()
else if(w===D.f_){s.ay=t.c.l()
w=t.d
if(w!=null)s.ch=w.l()}return}v=new C.enl(t.c,t.d)
if(t.a.Q)for(s=t.e.r,w=s.length,u=0;u<s.length;s.length===w||(0,B.L)(s),++u)v.$1(s[u])
else{s=t.f
if(s!=null)v.$1(s)}},
$S:0}
C.enl.prototype={
$1(d){var w
d.e=this.a.l()
w=this.b
d.f=w==null?null:w.l()},
$S:z+1}
C.enp.prototype={
$0(){var w,v,u,t,s=this.a,r=s.e
r.toString
w=this.b
v=new C.enq(w)
if(s.Q){r.c=w.a
for(s=r.r,r=s.length,u=0;u<s.length;s.length===r||(0,B.L)(s),++u)v.$1(s[u])}else{t=s.gdq()
if(t!=null)v.$1(t)}},
$S:0}
C.enq.prototype={
$1(d){var w=this.a
d.e=w.f.l()
w=w.r
d.f=w==null?null:w.l()},
$S:z+1}
C.enn.prototype={
$0(){var w,v,u,t=this,s=t.b
if(s!=null&&s.b===D.cQ){s.Q=t.c
return}w=new C.eno(t.c)
if(t.a.Q)for(s=t.d.r,v=s.length,u=0;u<s.length;s.length===v||(0,B.L)(s),++u)w.$1(s[u])
else{s=t.e
if(s!=null)w.$1(s)}},
$S:0}
C.eno.prototype={
$1(d){var w,v,u
for(w=A.d.gaf(d.z),v=new B.fk(w,new C.enm()),u=this.a;v.C();)w.gU(0).Q=u},
$S:z+1}
C.enm.prototype={
$1(d){return d.b===D.cQ},
$S:z+4}
C.enj.prototype={
$0(){return C.ccB(this.b,this.c,this.a.gq2())},
$S:0}
C.eqm.prototype={
$0(){return A.d.ck(this.a.d,0,this.b)},
$S:0}
C.esB.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.esC.prototype={
$1(d){return d.w===this.b&&d.a!==this.a.a.a},
$S:z+2}
C.esD.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.esE.prototype={
$0(){var w,v=this.a,u=v.c,t=this.b,s=t.d
if(u)A.d.ck(s,0,v.b)
else{w=A.d.ba(s,new C.esA(v))
if(w>=0)t.d[w]=v.b}if(v.a.gRF()){u=v.b
u.Q=v.a.Q
u.z=!0}if(this.c===!0){t.e=v.b.hA()
t.f=0
t.r=null
t.db=!1
A.d.a9(t.ax)
A.d.a9(t.ay)
t.x7()
t.JG()}},
$S:0}
C.esA.prototype={
$1(d){return d.a===this.a.b.a},
$S:z+2}
C.es7.prototype={
$1(d){var w=this,v=null,u=w.a,t=u.aaF(),s=w.b,r=u.aaG(A.f7,A.kN,"Copy filled names, date, mahari, witnesses, and signatures into "+s+".","Transfer details"),q=B.m(18),p=B.a([A.c.j(0.07),A.c.j(0.03)],x.O),o=B.I(A.c.j(0.08),A.q,1),n=x.p
p=B.a([t,A.P,r,A.bx,B.p(v,B.A(B.a([B.D(u.aTw(w.c,A.ak),1),new B.C(A.fo,B.p(v,D.bG0,A.f,v,v,new B.o(A.f7.j(0.18),v,v,v,v,v,A.a6),v,34,v,v,v,v,v,34),v),B.D(u.aTw(s,A.f7),1)],n),A.m,v,A.e,A.j,0,v,v),A.f,v,v,new B.o(v,v,o,q,v,new B.a8(A.ax,A.aC,A.x,p,v,v),A.n),v,v,v,v,A.bC,v,v,v),A.bx,u.aTz(A.f7,d,D.bC8,!0,"Make a fresh "+s+" and fill it automatically","Create new & transfer","new")],n)
t=w.d
if(t>0)A.d.v(p,B.a([A.S,u.bVf(A.aU,d,A.tK,t===1?"Update your saved "+s:"Choose among "+t+" saved documents","Use existing","existing")],n))
p.push(A.aA)
p.push(u.aTx(d,"Not now"))
return new C.Jn(B.v(p,A.aj,v,A.e,A.Q,0,A.p),v)},
$S:z+9}
C.es6.prototype={
$1(d){var w=null,v=this.a,u=this.c
return new C.Jn(B.v(B.a([v.aaF(),A.P,v.aaG(A.aU,D.bBO,"Pick which saved document should receive the details.","Choose "+this.b),A.aP,new B.cU(new B.aY(0,1/0,0,B.aI(d,A.bT,x.w).w.a.b*0.42),B.hH(w,new C.es4(v,u,d),u.length,w,w,A.ah,new C.es5(),!0),w),A.aA,v.aTx(d,"Cancel")],x.p),A.aj,w,A.e,A.Q,0,A.p),w)},
$S:z+9}
C.es5.prototype={
$2(d,e){return A.S},
$S:36}
C.es4.prototype={
$2(d,e){var w=null,v=this.b[e],u=B.m(16),t=A.c.j(0.05),s=B.m(16),r=B.I(A.c.j(0.08),A.q,1),q=x.p
return B.aG(!1,A.a1,!0,w,B.aL(!1,u,!0,B.p(w,B.A(B.a([B.p(w,D.am4,A.f,w,w,new B.o(w,w,w,B.m(12),w,D.bRX,A.n),w,42,w,w,w,w,w,42),A.bf,B.D(B.v(B.a([B.d(v.b,w,1,A.a2,w,w,w,A.np,w,w,w),A.cX,B.d("Updated "+this.a.Pj(v.f),w,w,w,w,w,w,B.l(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,12,w,w,A.a4,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],q),A.F,w,A.e,A.j,0,A.p),1),B.W(A.ex,A.c.j(0.35),w,w,w,w)],q),A.m,w,A.e,A.j,0,w,w),A.f,w,w,new B.o(t,w,r,s,w,w,A.n),w,w,w,w,A.bC,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.es3(this.c,v),w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ag)},
$S:75}
C.es3.prototype={
$0(){B.a6(this.a,!1).O(this.b.a)
return null},
$S:0}
C.es0.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.aaF()
t=t.aaG(A.aH,A.tT,"Names and shared details from \u201c"+this.b+"\u201d will fill matching spots on \u201c"+this.c+"\u201d.","Replace matching fields?")
w=A.c.j(0.14)
v=x.p
return new C.Jn(B.v(B.a([s,A.P,t,A.bx,B.A(B.a([B.D(B.dV(A.a7p,new C.erZ(d),B.de(u,u,u,u,u,u,u,u,u,A.c,u,u,A.cf,u,new B.b7(B.m(14),A.Y),new B.aA(w,1,A.q,-1),u,u,u,u)),1),A.av,B.D(B.bJ(D.f9s,new C.es_(d),B.bk(A.f7,u,u,u,A.c,u,A.cf,u,new B.b7(B.m(14),A.Y),u,u,u)),1)],v),A.m,u,A.e,A.j,0,u,u)],v),A.aj,u,A.e,A.Q,0,A.p),u)},
$S:z+9}
C.erZ.prototype={
$0(){B.a6(this.a,!1).O(!1)
return null},
$S:0}
C.es_.prototype={
$0(){B.a6(this.a,!1).O(!0)
return null},
$S:0}
C.es2.prototype={
$1(d){var w=this,v=null,u=w.a,t=u.aaF(),s=w.b,r=u.aaG(A.aV,A.ee,"Everything that could be matched is now on "+s+".","Transfer complete"),q=x.p,p=B.A(B.a([B.D(u.aty("Names",""+w.c),1),A.ab,B.D(u.aty("Fields",""+w.d),1),A.ab,B.D(u.aty("Signatures",""+w.e),1)],q),A.m,v,A.e,A.j,0,v,v),o=B.bk(A.bj,v,v,v,A.c,v,A.xh,v,new B.b7(B.m(14),A.Y),v,v,v)
return new C.Jn(B.v(B.a([t,A.P,r,A.aP,p,A.bx,B.bJ(B.d("Open "+s,v,v,v,v,v,v,A.nn,v,v,v),new C.es1(d),o),A.S,u.aTy(d,"Stay here",!1)],q),A.aj,v,A.e,A.Q,0,A.p),v)},
$S:z+9}
C.es1.prototype={
$0(){B.a6(this.a,!1).O(!0)
return null},
$S:0}
C.ep0.prototype={
$0(){B.a6(this.a,!1).O(this.b)
return null},
$S:0}
C.ep_.prototype={
$0(){B.a6(this.a,!1).O(this.b)
return null},
$S:0}
C.erT.prototype={
$1(d){return d.b===D.cQ},
$S:z+4}
C.esr.prototype={
$1(d){var w=this.a,v=this.b
return new C.ZR(A.d.dL(w.d,new C.esp(v),new C.esq(v)).hA(),w.f,null)},
$S:z+84}
C.esp.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.esq.prototype={
$0(){return this.a},
$S:z+85}
C.emL.prototype={
$1(d){var w=null,v=this.b,u=""+v,t=v===1?"":"s"
t=B.a([new B.C(A.bC,B.d("Import "+this.a.c+" ("+u+" page"+t+")",w,w,w,w,w,w,A.ho,w,w,w),w),B.dN(!1,w,w,w,!0,w,w,w,!0,w,D.bHL,w,w,w,w,new C.emJ(d),!1,w,w,w,w,w,B.d("Scroll through all "+u+" pages inside the slide",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,D.f7w,w,w,w)],x.p)
if(v>1)t.push(B.dN(!1,w,w,w,!0,w,w,w,!0,w,D.bIU,w,w,w,w,new C.emK(d),!1,w,w,w,w,w,D.ft_,w,B.d("One slide per page ("+u+" slides)",w,w,w,w,w,w,A.dl,w,w,w),w,w,w))
return B.bm(!0,B.v(t,A.m,w,A.e,A.Q,0,A.p),!0,!1,A.af,!0,!0)},
$S:28}
C.emJ.prototype={
$0(){B.a6(this.a,!1).O("scroll")
return null},
$S:0}
C.emK.prototype={
$0(){B.a6(this.a,!1).O("split")
return null},
$S:0}
C.emM.prototype={
$0(){var w=this.b,v=w.c,u=C.eo(A.bg,!1,4279310375,A.aD,v,4280640491,24,A.bl,A.a4,"",0.84,C.cC(),w.b,"","",0,!1,"",0,D.be,4280172719,2,v,0,0,"",D.cg,D.R7,0.88,0.06,0.08)
v=this.a
A.d.L(v.gdq().z,u)
v.r=u.a},
$S:0}
C.emN.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this.a,i=j.f+1
for(w=this.b,v=this.c,u=v.b,t=w,v=v.c,s=x.u,r=v+" \u2014 page ",q=1;q<=w;++q){p=Date.now()
o=$.iX
$.iX=o+1
n=""+q
m=B.a([],s)
l=Date.now()
k=$.iX
$.iX=k+1
m.push(new C.eI(""+1000*l+"_"+k,D.R7,0.04,0.06,0.92,0.88,v,24,A.a4,A.bl,A.aD,4279310375,A.bg,u,D.be,4280640491,4280172719,2,0,!1,n+" / "+t,q,D.cg,0,"","","","","",!1,0))
A.d.ck(j.e.r,i+q-1,new C.lB(""+1000*p+"_"+o,r+n,"",D.q_,4294967295,null,D.dd,0,"",0,m))}j.f=i
j.r=null},
$S:0}
C.emR.prototype={
$0(){var w,v=C.cC(),u=this.a,t=u.e
t=(t==null?null:C.kr(t.w))===!0?"marriage_sign_placed":"Signature"
w=C.eo(A.bg,!1,4279310375,A.aD,t,4280640491,24,A.bl,A.a4,"",0.22,v,this.b.a,"","",0,!1,"",0,D.be,4280172719,2,"",0,0,"",D.cg,D.kS,0.35,0.55,0.62)
A.d.L(u.gdq().z,w)
u.r=w.a},
$S:0}
C.emI.prototype={
$0(){var w,v,u,t,s,r,q,p=this.a,o=this.b
p.b13(o)
w=C.cC()
v=this.c
u=v.c
t=v.d
s=v.e
r=v.f
q=C.eo(A.bg,!1,4279310375,A.aD,"marriage_sign_placed_"+A.a.e9(v.db,"marriage_sign_",""),4280640491,24,A.bl,A.a4,"",r,w,o.a,"","",0,!1,"",0,D.be,4280172719,2,"",0,0,"",D.cg,D.kS,s,u,t)
A.d.L(p.gdq().z,q)
A.d.bm(p.gdq().z,new C.emH(v))
p.r=null
p=p.e
if((p==null?null:p.w)==="hati_kiapo_uongozi"&&A.a.t(v.db,"rais")){p.toString
C.hZ2(p)}},
$S:0}
C.emH.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.eqI.prototype={
$0(){var w=this.a,v=this.b
w.b13(v)
this.c.at=v.a
w.r=null},
$S:0}
C.esz.prototype={
$0(){var w,v,u,t,s,r,q=4279673674,p=1483594
for(w=this.b.z,v=w.length,u=this.c,t=0;t<v;++t){s=w[t]
r=s.db
if(r==="marriage_locked_nim_akuna_deni"){s.r="AKUNA DENI"
s.Q=u?q:p}else if(r==="marriage_locked_nim_akuna_box")s.ch=u?q:p
else if(r==="marriage_locked_nim_akuna_tick"){s.r="\u2713"
s.Q=u?q:p}}this.a.r=null},
$S:0}
C.ep3.prototype={
$0(){var w,v,u,t,s,r=this.b
A.d.bm(r.z,new C.ep2())
for(r=r.z,w=r.length,v=this.c+0.001,u=0;u<w;++u){t=r[u]
s=t.d
if(s>v)t.d=s-0.043}this.a.r=null},
$S:0}
C.ep2.prototype={
$1(d){var w=d.db
return w==="marriage_locked_nim_n_4"||w==="marriage_locked_nim_ul_4"||A.a.a0(w,"marriage_field_mahari_4:")},
$S:z+4}
C.ent.prototype={
$0(){var w=this.b
w.at=this.c
w.db="__kiapo_video__"
w=this.a
w.r=null
w.db=!1},
$S:0}
C.enu.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.tf()},
$S:8}
C.emF.prototype={
$0(){var w=C.eo(A.bg,!1,4279310375,A.aD,"HD Photo",4280640491,24,A.bl,A.a4,"",0.8,C.cC(),this.b,"","",0,!1,"",0,D.be,4280172719,2,"",0,0,"",D.cg,D.lk,0.8,0.1,0.1),v=this.a
A.d.L(v.gdq().z,w)
v.r=w.a},
$S:0}
C.eov.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.emO.prototype={
$0(){var w=this.a,v=this.b
A.d.L(w.gdq().z,v)
w.r=v.a},
$S:0}
C.emX.prototype={
$0(){return this.a.cx+=0.785398},
$S:0}
C.emY.prototype={
$0(){var w=this.b.hA(),v=C.cC(),u=A.k.D(w.c+0.04,0,0.92),t=A.k.D(w.d+0.04,0,0.92),s=w.e,r=w.f,q=w.r,p=w.w,o=w.x,n=w.y,m=w.z,l=w.Q,k=w.as,j=w.at,i=w.ay,h=w.ch,g=w.cx,f=C.eo(k,w.cy,l,m,w.db,i,p,n,o,"",r,v,j,"","",w.dx,!1,"",g,w.ax,h,w.CW,q,w.fr,0,"",w.dy,w.b,s,u,t)
t=this.a
A.d.L(t.gdq().z,f)
t.r=f.a},
$S:0}
C.emZ.prototype={
$0(){var w=this.a.gdq().z,v=this.b,u=A.d.ba(w,new C.emW(v))
if(u>=0&&u<w.length-1){A.d.cA(w,u)
A.d.ck(w,u+1,v)}},
$S:0}
C.emW.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.en9.prototype={
$0(){var w=this.a.gdq().z,v=this.b,u=A.d.ba(w,new C.emV(v))
if(u>0){A.d.cA(w,u)
A.d.ck(w,u-1,v)}},
$S:0}
C.emV.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.enc.prototype={
$0(){return this.a.as=A.bg},
$S:0}
C.end.prototype={
$0(){return this.a.as=A.L},
$S:0}
C.ene.prototype={
$0(){return this.a.as=A.dL},
$S:0}
C.enf.prototype={
$0(){return this.a.cx+=3.14159},
$S:0}
C.eng.prototype={
$0(){return this.a.cx-=3.14159},
$S:0}
C.enh.prototype={
$1(d){return d.b===D.cQ},
$S:z+4}
C.eni.prototype={
$1(d){return d.length!==0},
$S:3}
C.en_.prototype={
$0(){var w=this.a,v=w.gdq().z,u=C.cC()
A.d.L(v,C.Cw(w.gq2().c.j(0.18).l(),0.1,u,D.be,0,2,1,0,0))
u=w.gdq().z
v=C.cC()
A.d.L(u,C.iR(A.bg,!1,w.gq2().d.l(),A.aD,18,A.bl,A.H,0.07,v,"Document Header",0,D.dd,0.9,0.05,0.02))},
$S:0}
C.en0.prototype={
$0(){var w,v=this.a,u=v.gdq().z,t=C.cC()
A.d.L(u,C.Cw(v.gq2().c.j(0.12).l(),0.1,t,D.be,0,2,1,0,0.9))
t=v.gdq().z
u=C.cC()
w=C.bBi()
A.d.L(t,C.iR(A.L,!1,v.gq2().e.l(),A.aD,12,A.bl,A.a4,0.06,u,"Footer \xb7 "+w,0,D.dd,0.9,0.05,0.92))},
$S:0}
C.en1.prototype={
$0(){A.d.L(this.a.gdq().z,C.Cw(1727914055,0.12,C.cC(),D.be,4294626325,2,0.76,0.12,0.35))},
$S:0}
C.en2.prototype={
$0(){var w=4279310375
A.d.L(this.a.gdq().z,C.Cw(w,0.08,C.cC(),D.be,w,2,0.5,0.2,0.4))},
$S:0}
C.en3.prototype={
$0(){var w=this.a,v=w.gdq().z,u=C.cC()
A.d.L(v,C.Cw(w.gq2().c.j(0.35).l(),0.12,u,D.Ci,4280640491,2,0.2,0.15,0.55))
A.d.L(w.gdq().z,C.iR(A.bg,!1,4279310375,A.aD,18,A.bl,A.a4,0.15,C.cC(),"Important note",0,D.q0,0.5,0.38,0.52))},
$S:0}
C.en4.prototype={
$0(){var w=this.a
A.d.L(w.gdq().z,C.Cw(4294507260,0.78,C.cC(),D.be,4291548641,1.5,0.84,0.08,0.1))
A.d.L(w.gdq().z,C.iR(A.bg,!1,4279179050,A.aD,16,A.bl,A.a4,0.7,C.cC(),"MEMO\n\nTo:\nFrom:\nDate: "+C.bBi()+"\n\nSubject:\n\nBody text\u2026",0,D.dd,0.76,0.12,0.14))},
$S:0}
C.en5.prototype={
$0(){var w=this.a
A.d.L(w.gdq().z,C.Cw(4294897802,0.28,C.cC(),D.be,4294626325,2,0.3,0.62,0.12))
A.d.L(w.gdq().z,C.iR(A.bg,!1,4285611794,A.aD,15,A.bl,A.a4,0.24,C.cC(),"Sticky note",0,D.aEJ,0.26,0.64,0.14))},
$S:0}
C.en6.prototype={
$0(){var w=4280640491,v=this.a
A.d.L(v.gdq().z,C.Cw(4293060848,0.04,C.cC(),D.be,4291548641,2,0.8,0.1,0.48))
A.d.L(v.gdq().z,C.Cw(w,0.04,C.cC(),D.be,w,2,0.55,0.1,0.48))},
$S:0}
C.en7.prototype={
$0(){var w=4279310375,v=this.a
A.d.L(v.gdq().z,C.iR(A.bg,!1,w,A.aD,18,A.bl,A.a4,0.62,C.cC(),"Left column\n\n\u2022 Point A\n\u2022 Point B",0,D.Hx,0.42,0.06,0.18))
A.d.L(v.gdq().z,C.iR(A.bg,!1,w,A.aD,18,A.bl,A.a4,0.62,C.cC(),"Right column\n\n\u2022 Point C\n\u2022 Point D",200,D.u7,0.42,0.52,0.18))},
$S:0}
C.en8.prototype={
$0(){var w=4279310375,v=this.a
A.d.L(v.gdq().z,C.Cw(858088427,0.62,C.cC(),D.be,4280640491,2,0.42,0.05,0.18))
A.d.L(v.gdq().z,C.Cw(856004201,0.62,C.cC(),D.be,4278556265,2,0.42,0.53,0.18))
A.d.L(v.gdq().z,C.iR(A.bg,!1,w,A.aD,20,A.bl,A.H,0.1,C.cC(),"Option A",0,D.dd,0.36,0.08,0.2))
A.d.L(v.gdq().z,C.iR(A.bg,!1,w,A.aD,20,A.bl,A.H,0.1,C.cC(),"Option B",0,D.dd,0.36,0.56,0.2))},
$S:0}
C.ena.prototype={
$0(){var w=4279310375,v=this.a
A.d.L(v.gdq().z,C.Cw(4294967295,0.36,C.cC(),D.be,w,2,0.24,0.38,0.28))
A.d.L(v.gdq().z,C.iR(A.L,!1,w,A.aD,14,A.bl,A.a4,0.12,C.cC(),"[ QR CODE ]",0,D.dd,0.24,0.38,0.4))},
$S:0}
C.enb.prototype={
$0(){return C.ccB(this.b,D.R8,this.a.gq2())},
$S:0}
C.eou.prototype={
$1(d){var w=this.b,v=w.dy,u=!D.a5M.t(0,d),t=this.a
return t.b5X(d,v===d,A.aZ,this.c,new C.eot(t,u,d,w),u)},
$S:z+25}
C.eot.prototype={
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
C.bC5(r,new C.eos(s,t.d,q),q)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eos.prototype={
$0(){return this.a.d1(new C.eor(this.b,this.c))},
$S:0}
C.eor.prototype={
$0(){return this.a.dy=this.b},
$S:0}
C.emP.prototype={
$0(){var w,v=this.a,u=v.gq2(),t=C.rh(4294967295,null,0,0,null,C.cC(),D.mu,"","","",D.dd),s=this.b
C.ccB(t,s,u)
w=v.gdq()
if(w!=null&&s!==D.Ch){t.e=w.e
t.f=w.f}A.d.ck(v.e.r,v.f+1,t);++v.f
v.r=null},
$S:0}
C.enx.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.a
p=q.c
if(p==null){w=1
break}s=q.a
r=s.c
s=s.d
w=3
return B.b(C.i40(p,q.d,s,new C.enw(q),r),$async$$0)
case 3:w=q.c!=null?4:5
break
case 4:w=6
return B.b(q.tf(),$async$$0)
case 6:case 5:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.enw.prototype={
$1(d){return this.biD(d)},
biD(d){var w=0,v=B.j(x.H),u=this,t
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.a
t.m(new C.env(t,d))
w=2
return B.b(t.tf(),$async$$1)
case 2:return B.h(null,v)}})
return B.i($async$$1,v)},
$S:z+87}
C.env.prototype={
$0(){var w,v,u
for(w=J.aV(this.b),v=this.a;w.C();){u=w.gU(w)
A.d.ck(v.d,0,u)}},
$S:0}
C.eny.prototype={
$0(){return this.a.bGp()},
$S:0}
C.enz.prototype={
$0(){return this.a.aOU("Class Presentation",!0)},
$S:0}
C.enA.prototype={
$1(d){return this.a.bHl(d.b,this.b,d.a)},
$S:z+88}
C.eoa.prototype={
$0(){var w,v=this.a
v.as=!1
w=v.c
w.toString
if(B.aI(w,A.bT,x.w).w.a.a<900)v.w=v.r=null},
$S:0}
C.eql.prototype={
$1(d){return new B.C(new B.Q(0,0,0,B.aI(d,A.eD,x.w).w.f.d),new B.e0(new C.eqk(this.a,this.b),null),null)},
$S:58}
C.eqk.prototype={
$2(d,e){return B.oH(new C.eqj(this.a,this.b,d,e),!1,0.52,0.9,0.34,!1,null)},
$S:591}
C.eqj.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u?A.aB:A.c,s=B.I(u?A.bF:A.aL,A.q,1),r=B.p(v,v,A.f,v,v,new B.o(A.b2,v,v,B.m(99),v,v,A.n),v,4,v,v,v,v,v,40),q=x.p,p=w.a
return B.p(v,B.v(B.a([A.S,r,new B.C(A.agD,B.A(B.a([B.d("Format",v,v,v,v,v,v,B.l(v,v,u?A.c:A.M,v,v,v,v,v,v,v,v,17,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.b4,B.bK(!1,A.zm,v,v,!0,v,v,new C.eqh(w.c),v,v)],q),A.m,v,A.e,A.j,0,v,v),v),B.D(B.cB(B.a([p.aRy(u,!0,!0,new C.eqi(p,w.d))],q),e,D.boE,v,v,A.ah,!1),1)],q),A.m,v,A.e,A.j,0,A.p),A.f,v,v,new B.o(t,v,s,A.kz,v,v,A.n),v,v,v,v,v,v,v,v)},
$S:115}
C.eqh.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.eqi.prototype={
$0(){this.b.$1(new C.eqf())
var w=this.a
if(w.c!=null)w.m(new C.eqg())},
$S:0}
C.eqf.prototype={
$0(){},
$S:0}
C.eqg.prototype={
$0(){},
$S:0}
C.erU.prototype={
$3(d,e,f){return A.bH},
$C:"$3",
$R:3,
$S:91}
C.erV.prototype={
$4(d,e,f,g){var w=A.cr.av(0,e.gp(0))
return B.db(B.eb(A.A,new C.axG(this.a,null),0.94+w*0.06,null,null),w)},
$S:372}
C.erW.prototype={
$3(d,e,f){return A.bH},
$C:"$3",
$R:3,
$S:91}
C.erX.prototype={
$4(d,e,f,g){var w=A.cr.av(0,e.gp(0))
return B.db(B.eb(A.A,new C.bbt(this.a.b,null),0.94+w*0.06,null,null),w)},
$S:372}
C.erY.prototype={
$0(){return A.d.ck(this.a.d,0,C.Vi(this.b))},
$S:0}
C.emU.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a.fy
o===$&&B.c()
o=o.x
o===$&&B.c()
w=A.dC.av(0,o)
o=B.m(22)
v=B.m(22)
u=this.b
t=x.O
s=u?B.a([A.c.j(0.1+w*0.04),A.aB.j(0.72)],t):B.a([A.c.j(0.88),A.pi.j(0.75)],t)
r=B.I(A.b1.j(0.28+w*0.22),A.q,1.3)
q=w*0.2
t=B.a([A.b1.j(0.35+q),A.c8.j(0.18),A.K],t)
q=B.I(A.b1.j(0.45+q),A.q,1)
t=B.p(p,B.W(A0.ZK,u?A.ad:A.M,p,p,p,28),A.f,p,p,new B.o(p,p,q,p,p,new B.bT(A.A,0.5,A.x,p,0,t,p,p),A.a6),p,58,p,p,p,p,p,58)
q=B.d("No presentations yet",p,p,p,p,p,p,B.l(p,p,u?A.c:A.M,p,p,p,p,p,p,p,p,p,p,p,A.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
return B.bw(o,B.tL(A.ft,B.p(p,B.v(B.a([t,A.aA,q,A.an,B.d("Open Blank or Class Template to start \u2014 nothing is saved until you edit.",p,p,p,p,p,p,B.l(p,p,u?A.az:A.ak,p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),A.L,p,p)],x.p),A.m,p,A.e,A.j,0,A.p),A.f,p,p,new B.o(p,p,r,v,p,new B.a8(A.ax,A.aC,A.x,s,p,p),A.n),p,p,p,p,A.ew,p,p,1/0),14,!1),A.aq)},
$S:315}
C.enZ.prototype={
$1(d){return A.a.i(d)},
$S:14}
C.eo_.prototype={
$1(d){return d.length!==0},
$S:3}
C.eo0.prototype={
$1(d){var w
if(A.a.a0(d,"Updated"))w=A.kj
else{w=B.af("^\\d+ slides?$",!0,!1,!1,!1)
w=w.b.test(d)?A.a_f:A.B8}return w},
$S:677}
C.eo3.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.a,j=k.fy
j===$&&B.c()
j=j.x
j===$&&B.c()
w=A.dC.av(0,A.k.F(j+m.b*0.12,1))
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
q=B.p(l,B.W(C.kr(v.w)?A.vo:A.pN,A.c,l,l,l,22),A.f,l,l,new B.o(l,l,l,q,l,new B.a8(A.a3,A.a7,A.x,r,l,l),A.n),l,36,l,l,l,l,l,52)
o=v.b
o=B.d(o.toUpperCase(),l,l,l,l,l,l,B.l(l,l,t?A.c:A.M,l,l,l,l,l,l,l,l,l,l,l,A.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
n=v.w
if(n==="marriage_agreement")n="Hati ya Kuhowesha \u2022 Updated "+k.Pj(v.f)
else if(n==="hati_kuhowa")n="Hati ya Kuhowa \u2022 Updated "+k.Pj(v.f)
else if(n==="hati_kuhoweya")n="Hati ya Kuhoweya \u2022 Updated "+k.Pj(v.f)
else if(n==="hati_kiapo_uongozi"){n=v.x
if(A.a.i(n==null?"":n).length===0)n="Civic Registry"
n="Kiapo cha Uongozi \u2022 "+B.t(n)+" \u2022 Updated "+k.Pj(v.f)}else n=""+v.r.length+" slides \u2022 Updated "+k.Pj(v.f)
r=k.bHj(n,A.d.gK(r),t)
return B.p(l,B.bw(j,new B.a7c(B.aG(!1,A.a1,!0,l,B.aL(!1,l,!0,B.p(l,B.dN(!1,A.LE,l,l,!0,l,l,l,!0,l,q,l,l,l,l,l,!1,l,l,l,l,l,r,l,o,l,B.aH(l,l,l,l,B.W(A.nU,t?A.az:A.bJ,l,l,l,l),l,l,l,new C.eo1(k,v,t),l,l,l,l,"Project options",l),l),A.f,l,l,new B.o(l,l,p,u,l,new B.a8(A.ax,A.aC,A.x,s,l,l),A.n),l,l,l,l,l,l,l,l),l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.eo2(k,v),l,l,l,l,l,l,l),A.f,A.K,0,l,l,l,l,l,A.ag),l),A.aq),A.f,l,l,l,l,l,l,A.dc,l,l,l,l)},
$S:96}
C.eo2.prototype={
$0(){return this.a.ae3(this.b)},
$S:0}
C.eo1.prototype={
$0(){return this.a.Aw(this.b,this.c)},
$S:0}
C.epu.prototype={
$0(){var w=this.a
w.b4B()
w.m(new C.ept())},
$S:0}
C.ept.prototype={
$0(){},
$S:0}
C.epv.prototype={
$1(d){return this.a.ai4(this.b.a,d)},
$S:2}
C.epw.prototype={
$0(){this.a.d1(new C.eps(this.b))},
$S:0}
C.eps.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.O)?A.cv:A.O},
$S:0}
C.epx.prototype={
$0(){this.a.d1(new C.epr(this.b))},
$S:0}
C.epr.prototype={
$0(){var w=this.a
return w.y=w.y===A.cD?A.bl:A.cD},
$S:0}
C.epy.prototype={
$0(){this.a.d1(new C.epq(this.b))},
$S:0}
C.epq.prototype={
$0(){var w=this.a,v=w.z
return w.z=1===v.a?A.aD:A.mA},
$S:0}
C.epz.prototype={
$0(){this.a.d1(new C.epp(this.b))},
$S:0}
C.epp.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
C.epA.prototype={
$0(){var w=this.a
w.d1(new C.epo(w,this.b))},
$S:0}
C.epo.prototype={
$0(){var w=this.b
return w.as=this.a.c0R(w.as)},
$S:0}
C.epB.prototype={
$0(){return this.a.d1(new C.epn(this.b))},
$S:0}
C.epn.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w+2,10,96)},
$S:0}
C.epC.prototype={
$0(){return this.a.d1(new C.epm(this.b))},
$S:0}
C.epm.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w-2,10,96)},
$S:0}
C.epf.prototype={
$0(){return this.a.a1m(this.b.a)},
$S:0}
C.epg.prototype={
$0(){this.a.ZU()
return null},
$S:0}
C.eph.prototype={
$0(){var w=this.a,v=w.c
v.toString
if(B.aI(v,A.bT,x.w).w.a.a<900)w.aem()
else w.m(new C.epe(w))},
$S:0}
C.epe.prototype={
$0(){return this.a.as=!0},
$S:0}
C.epi.prototype={
$0(){this.a.d1(new C.epd(this.b))},
$S:0}
C.epd.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.O)?A.cv:A.O},
$S:0}
C.epj.prototype={
$0(){return this.a.d1(new C.epc(this.b))},
$S:0}
C.epc.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w+2,10,96)},
$S:0}
C.epk.prototype={
$0(){return this.a.d1(new C.epb(this.b))},
$S:0}
C.epb.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w-2,10,96)},
$S:0}
C.epl.prototype={
$0(){return this.a.ayy(null)},
$S:0}
C.eon.prototype={
$0(){this.a.Da()
return null},
$S:0}
C.eoo.prototype={
$0(){this.a.a9d()
return null},
$S:0}
C.eoq.prototype={
$1(d){return this.biE(d)},
biE(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
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
return B.b(t.a.Jx(),$async$$1)
case 10:w=4
break
case 6:s=t.a
r=s.e
if(r==null){w=1
break}q=s.c
q.toString
w=11
return B.b(B.bX(A.aB,null,new C.eoi(r),q,!0,!0,!1,null,!1,!1,x.S),$async$$1)
case 11:p=f
if(p!=null)s.d1(new C.eoj(r,p))
w=4
break
case 7:s=t.a
r=s.e
if(r==null){w=1
break}s.d1(new C.eok(r))
s=s.c.I(x.q).f
s.R(B.b2(null,null,null,null,null,A.r,null,B.d(r.ay?"Video motion on \u2014 press Play to watch it like a video.":"Video motion off.",null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
w=4
break
case 8:s=t.a
r=s.e
if(r==null){w=1
break}s.d1(new C.eol(r))
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
return B.b(C.hiQ(q,new C.E5(o,n,m,l==null?"":l)),$async$$1)
case 12:p=f
if(p==null||s.c==null){w=1
break}s.d1(new C.eom(r,p))
s=s.c.I(x.q).f
q=p.a
if(q.length===0)q="No ending celebration."
else{q=C.ag1(q)
q=B.t(q==null?null:q.b)+" will play after your last slide."}s.R(B.b2(null,null,null,null,null,A.r,null,B.d(q,null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
w=4
break
case 4:case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:94}
C.eoi.prototype={
$1(d){var w,v,u,t,s,r=null,q=B.a([D.e3R],x.p)
for(w=[3,5,8,10,15,20,30,60],v=this.a,u=0;u<8;++u){t=w[u]
s=v.e===t?D.bHS:r
q.push(B.dN(!1,r,r,r,!0,r,r,r,!0,r,r,r,r,r,r,new C.eoh(d,t),!1,r,r,r,r,r,r,r,new B.x(""+t+" seconds",r,A.dl,r,r,r,r,r,r,r,r,r),r,s,r))}return B.bm(!0,B.v(q,A.m,r,A.e,A.Q,0,A.p),!0,!1,A.af,!0,!0)},
$S:28}
C.eoh.prototype={
$0(){B.a6(this.a,!1).O(this.b)
return null},
$S:0}
C.eoj.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eok.prototype={
$0(){var w=this.a
return w.ay=!w.ay},
$S:0}
C.eol.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
C.eom.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.db=u.length===0?null:u
w.dx=v.b
w.dy=v.c
v=v.d
w.fr=v.length===0?null:v},
$S:0}
C.eop.prototype={
$1(d){var w,v,u,t=null,s=this.a.e,r=s==null,q=r?t:s.e,p=x.N
q=B.zi(B.d("Timer: "+(q==null?5:q)+"s",t,t,t,t,t,t,t,t,t,t),48,"timer",p)
w=r?t:s.ay
v=B.zi(B.d("Video motion: "+(w===!0?"On":"Off"),t,t,t,t,t,t,t,t,t,t),48,"motion",p)
w=r?t:s.ch
u=B.zi(B.d("Non-stop loop: "+(w===!0?"On":"Off"),t,t,t,t,t,t,t,t,t,t),48,"loop",p)
s=C.ag1(r?t:s.db)
s=s==null?t:s.b
return B.a([D.e8R,q,v,u,B.zi(B.d("Ending celebration: "+(s==null?"None":s),t,t,t,t,t,t,t,t,t,t),48,"finale",p)],x.gx)},
$S:130}
C.esF.prototype={
$0(){var w=this.a,v=w.e
if(v!=null){w=w.c
w.toString
C.bBf(w,v)}},
$S:0}
C.esG.prototype={
$0(){this.a.Da()
return null},
$S:0}
C.epF.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.z===d,r=B.m(999),q=s?D.bRR:u
if(s)w=u
else w=this.b?A.c.j(0.05):A.bM
if(s)v=A.c
else v=this.b?A.aR:A.bv
return new B.C(A.fx,B.aE(u,B.dg(u,B.d(d,u,u,u,u,u,u,B.l(u,u,v,u,u,u,u,u,u,u,u,12,u,u,A.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,A.bc,new B.o(w,u,u,r,u,q,A.n),A.eE,u,u,u,A.lH,u,u,u),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.epE(t,d),u,u,u,u,u,u,!1,A.a8),u)},
$S:128}
C.epE.prototype={
$0(){var w=this.a
return w.m(new C.epD(w,this.b))},
$S:0}
C.epD.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.epG.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.e
if(s==null)s=u
else{s=s.CW
s=(s==null?"":s).length!==0}w=s===!0
v=w?G.a26:E.avo
s=w?"Tell the AI what to change or add":"Type it \u2014 AI creates the slides"
t=w?t.gbKF():t.gbGK()
return B.hp(B.aE(u,B.p(u,D.alw,A.f,u,u,new B.o(u,u,u,u,B.a([new B.ac(0,A.G,A.d.gK(v).j(0.45),A.J,10)],x.V),new B.a8(A.a3,A.a7,A.x,v,u,u),A.a6),u,34,u,u,u,u,u,34),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,t,u,u,u,u,u,u,!1,A.a8),u,s,u,u)},
$S:1704}
C.epH.prototype={
$0(){var w=this.a,v=w.c
v.toString
return C.i3g(v,w.a.c)},
$S:0}
C.er3.prototype={
$0(){return this.b.uV(this.a.a)},
$S:0}
C.er4.prototype={
$0(){return this.a.uV(D.mu)},
$S:0}
C.er5.prototype={
$0(){return this.a.uV(D.Hv)},
$S:0}
C.erg.prototype={
$0(){return this.a.uV(D.Hw)},
$S:0}
C.err.prototype={
$0(){return this.a.uV(D.Hu)},
$S:0}
C.erC.prototype={
$0(){return this.a.pN("lab_report")},
$S:0}
C.erJ.prototype={
$0(){return this.a.pN("rubric")},
$S:0}
C.erK.prototype={
$0(){return this.a.pN("minutes")},
$S:0}
C.erL.prototype={
$0(){return this.a.pN("agenda")},
$S:0}
C.erM.prototype={
$0(){return this.a.pN("timeline")},
$S:0}
C.erN.prototype={
$0(){return this.a.pN(this.b.a)},
$S:0}
C.er6.prototype={
$0(){this.a.V5()
return null},
$S:0}
C.er7.prototype={
$0(){this.a.V_()
return null},
$S:0}
C.er8.prototype={
$0(){return this.a.pN("table")},
$S:0}
C.er9.prototype={
$0(){return this.a.pN("sticky")},
$S:0}
C.era.prototype={
$0(){return this.a.pN("divider")},
$S:0}
C.erb.prototype={
$0(){return this.a.pN("header_bar")},
$S:0}
C.erc.prototype={
$0(){return this.a.oM(D.be)},
$S:0}
C.erd.prototype={
$0(){return this.a.oM(D.eI)},
$S:0}
C.ere.prototype={
$0(){return this.a.oM(D.jE)},
$S:0}
C.erf.prototype={
$0(){return this.a.oM(D.Ci)},
$S:0}
C.erh.prototype={
$0(){return this.a.oM(D.jF)},
$S:0}
C.eri.prototype={
$0(){return this.a.oM(D.kT)},
$S:0}
C.erj.prototype={
$0(){return this.a.oM(D.fp)},
$S:0}
C.erk.prototype={
$0(){this.a.GT()
return null},
$S:0}
C.erl.prototype={
$0(){this.a.MO()
return null},
$S:0}
C.erm.prototype={
$0(){return this.a.pN("quote")},
$S:0}
C.ern.prototype={
$0(){return this.a.a7m()},
$S:0}
C.ero.prototype={
$0(){this.a.a__()
return null},
$S:0}
C.erp.prototype={
$0(){var w=this.a
return w.m(new C.eqU(w))},
$S:0}
C.eqU.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.erq.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return B.b(s.nS(),$async$$0)
case 3:if(!e){w=1
break}if(s.c==null){w=1
break}s.m(new C.er1(s))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.er1.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.ers.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=r.e
q=q==null?s:q.c
w=d.a
v=q===w&&r.jG()==null&&!r.Q
q=A.a.i(w)
w=d.b
if(D.a5N.t(0,q))w+=" (Pro)"
u=d.r
if(u==null)u=d.c
u=B.a([d.f,u],x.O)
t=v?d.c:A.b2
u=B.a([B.p(s,s,A.f,s,s,new B.o(s,s,B.I(t,A.q,v?2.5:1),s,s,new B.a8(A.a3,A.a7,A.x,u,s,s),A.a6),s,26,s,s,s,s,s,26)],x.p)
if(D.a5N.t(0,q))u.push(B.ao(s,B.p(s,D.Nm,A.f,s,s,D.DC,s,12,s,s,s,s,s,12),s,s,s,-2,-2,s))
return new B.C(A.fx,B.aE(s,B.hp(new B.an(A.W,s,A.aa,A.f,u,s),s,w,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.er0(r,d),s,s,s,s,s,s,!1,A.a8),s)},
$S:z+89}
C.er0.prototype={
$0(){this.a.a7E(this.b)
return null},
$S:0}
C.ert.prototype={
$0(){this.a.a7D(this.b)
return null},
$S:0}
C.eru.prototype={
$1(d){var w,v,u,t,s,r=null,q=C.hAf(d),p=this.a,o=B.m(8),n=p.gdq()
n=n==null?r:n.x
w=d.a
n=n===w?A.bj:A.b2
v=p.gdq()
n=B.I(n,A.q,(v==null?r:v.x)===w?2.5:1)
u=B.m(8)
t=B.m(7)
s=C.rh(4294967295,r,0,0,r,"preview_"+w,D.q_,"","","",D.dd)
C.hfO(s,w)
w=x.p
u=B.a([B.bw(o,B.p(r,B.bw(t,C.hh7(s),A.aq),A.f,r,r,new B.o(r,r,n,u,r,r,A.n),r,44,r,r,r,r,r,72),A.aq)],w)
if(q)u.push(B.ao(r,B.p(r,D.am5,A.f,r,r,D.DC,r,14,r,r,r,r,r,14),r,r,r,2,2,r))
return new B.C(A.jc,B.aE(r,B.v(B.a([new B.an(A.W,r,A.aa,A.r,u,r),A.cX,B.d(d.b,r,r,r,r,r,r,B.l(r,r,this.b?A.az:A.ak,r,r,r,r,r,r,r,r,9,r,r,A.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],w),A.m,r,A.e,A.j,0,A.p),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.er_(p,q,d),r,r,r,r,r,r,!1,A.a8),r)},
$S:z+90}
C.er_.prototype={
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
break}s.d1(new C.eqQ(r,t.c))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eqQ.prototype={
$0(){return C.hfO(this.a,this.b.a)},
$S:0}
C.er2.prototype={
biF(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$$2=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=!D.a5M.t(0,d)
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
$2(d,e){return this.biF(d,e)},
$S:z+91}
C.erO.prototype={
$4(d,e,f,g){var w=null,v=B.U(d).k("K<1,r>")
v=B.B(new B.K(d,new C.erQ(this.a,e,g,this.b,f),v),v.k("ak.E"))
return B.cd(B.A(v,A.m,w,A.e,A.j,0,w,w),A.r,w,A.y,w,w,w,w,A.aO)},
$S:z+92}
C.erQ.prototype={
$1(d){var w=this
return w.a.b5X(d,w.b===d,w.c,w.d,new C.erP(w.e,d),!D.a5M.t(0,d))},
$S:z+25}
C.erP.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.erv.prototype={
$1(d){this.b.$2(d,new C.eqZ(this.a,d,this.c))
return null},
$S:z+26}
C.eqZ.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.bC5(u,new C.eqP(v,this.c,w),w)},
$S:0}
C.eqP.prototype={
$0(){return this.a.d1(new C.eqN(this.b,this.c))},
$S:0}
C.eqN.prototype={
$0(){return this.a.dy=this.b},
$S:0}
C.erw.prototype={
$1(d){this.b.$2(d,new C.eqY(this.a,d))
return null},
$S:z+26}
C.eqY.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.fK3(u,new C.eqO(v,w),w)},
$S:0}
C.eqO.prototype={
$0(){var w=this.a
return w.d1(new C.eqM(w,this.b))},
$S:0}
C.eqM.prototype={
$0(){return this.a.gdq().r=this.b},
$S:0}
C.erx.prototype={
$0(){var w=this.a
return w.m(new C.eqX(w))},
$S:0}
C.eqX.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
C.ery.prototype={
$0(){var w=this.a,v=w.e
if(v!=null){w=w.c
w.toString
C.bBf(w,v)}},
$S:0}
C.erz.prototype={
$0(){this.a.HF()
return null},
$S:0}
C.erA.prototype={
$0(){return this.a.a7m()},
$S:0}
C.erB.prototype={
$0(){var w=this.a,v=w.jG()
if(v!=null&&v.b===D.cQ)w.d1(new C.eqW(v))},
$S:0}
C.eqW.prototype={
$0(){var w=this.a
w.f=A.k.D(w.f*1.25,0.08,1.8)
w.e=A.k.D(w.e*1.1,0.08,1.8)},
$S:0}
C.erD.prototype={
$0(){this.a.Da()
return null},
$S:0}
C.erE.prototype={
$0(){var w=this.a,v=w.e
v.toString
w.EP(v,!0)
return null},
$S:0}
C.erF.prototype={
$0(){this.a.d1(new C.eqV(this.b))},
$S:0}
C.eqV.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.O)?A.cv:A.O},
$S:0}
C.erG.prototype={
$0(){this.a.d1(new C.eqT(this.b))},
$S:0}
C.eqT.prototype={
$0(){var w=this.a
return w.y=w.y===A.cD?A.bl:A.cD},
$S:0}
C.erH.prototype={
$0(){this.a.d1(new C.eqS(this.b))},
$S:0}
C.eqS.prototype={
$0(){var w=this.a,v=w.z
return w.z=1===v.a?A.aD:A.mA},
$S:0}
C.erI.prototype={
$0(){this.a.d1(new C.eqR(this.b))},
$S:0}
C.eqR.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
C.ens.prototype={
$1(d){return this.biC(d)},
biC(d){var w=0,v=B.j(x.H),u,t=this,s,r
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
break}s.d1(new C.enr(s,t.c))
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:177}
C.enr.prototype={
$0(){return this.a.e.d=this.b},
$S:0}
C.esa.prototype={
$0(){var w=this.a
return w.d1(new C.es9(w,this.b))},
$S:0}
C.es9.prototype={
$0(){var w,v=this.b,u=v.w
if(!(u>0)){w=this.a.e
w=w==null?null:w.e
u=w==null?5:w}v.w=A.o.D(u-1,1,120)},
$S:0}
C.esb.prototype={
$0(){var w=this.a
return w.d1(new C.es8(w,this.b))},
$S:0}
C.es8.prototype={
$0(){var w,v=this.b,u=v.w
if(!(u>0)){w=this.a.e
w=w==null?null:w.e
u=w==null?5:w}v.w=A.o.D(u+1,1,120)},
$S:0}
C.eoA.prototype={
$0(){return this.a.d1(new C.eoz(this.b))},
$S:0}
C.eoz.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w-2,10,96)},
$S:0}
C.eoB.prototype={
$0(){return this.a.d1(new C.eoy(this.b))},
$S:0}
C.eoy.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w+2,10,96)},
$S:0}
C.ep7.prototype={
$1(d){var w=x.gh
w=B.B(new B.K(D.anL,new C.ep6(),w),w.k("ak.E"))
return w},
$S:z+94}
C.ep6.prototype={
$1(d){var w=null
return B.zi(B.d(d.b,w,w,w,w,w,w,A.mD,w,w,w),48,d,x.fO)},
$S:z+95}
C.esn.prototype={
$2(d,e){var w=this.a,v=w?0:8
return new B.a7(v,w?8:0,null,null)},
$S:36}
C.esm.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=null,p=r.a,o=e===p.f,n=p.k6()?q:new C.esk(p,r.b,d,e),m=r.c,l=m?1/0:112
m=m?72:64
w=B.m(8)
if(o)v=A.bj
else v=r.d?A.b2:A.cp
v=B.I(v,A.q,o?2:1)
u=r.d?A.cC:A.c
t=B.bY(0,C.hh7(r.b.r[e]),0,0,0)
s=B.m(4)
return B.aE(q,B.p(q,new B.an(A.W,q,A.aa,A.r,B.a([t,B.ao(4,B.p(q,B.d(""+(e+1),q,q,q,q,q,q,A.nm,q,q,q),A.f,q,q,new B.o(A.aX,q,q,s,q,q,A.n),q,q,q,q,A.ahw,q,q,q),q,q,4,q,q,q)],x.p),q),A.f,q,q,new B.o(u,q,v,w,q,q,A.n),q,m,q,q,q,q,q,l),A.y,!1,q,q,q,q,q,q,q,q,n,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.esl(p,e),q,q,q,q,q,q,!1,A.a8)},
$S:76}
C.esl.prototype={
$0(){var w=this.a
return w.m(new C.esg(w,this.b))},
$S:0}
C.esg.prototype={
$0(){var w=this.a
w.f=this.b
w.r=null
w.JG()},
$S:0}
C.esk.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.b
if(q.r.length<=1){w=1
break}s=t.d
w=3
return B.b(B.bX(null,null,new C.esh(s,q),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:r=e
if(r==="dup"){q=t.a
q.m(new C.esi(q,s))
q.aQi()}else if(r==="del"){q=t.a
q.m(new C.esj(q,s))
q.aPu()}else if(r==="up")t.a.b1g(s,s-1)
else if(r==="down")t.a.b1g(s,s+1)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.esh.prototype={
$1(d){var w=null,v=B.a([B.dN(!1,w,w,w,!0,w,w,w,!0,w,D.bJv,w,w,w,w,new C.esc(d),!1,w,w,w,w,w,w,w,D.f8r,w,w,w),B.dN(!1,w,w,w,!0,w,w,w,!0,w,D.bJo,w,w,w,w,new C.esd(d),!1,w,w,w,w,w,w,w,A.w8,w,w,w)],x.p),u=this.a
if(u>0)v.push(B.dN(!1,w,w,w,!0,w,w,w,!0,w,D.bIG,w,w,w,w,new C.ese(d),!1,w,w,w,w,w,w,w,D.fgh,w,w,w))
if(u<this.b.r.length-1)v.push(B.dN(!1,w,w,w,!0,w,w,w,!0,w,D.bKH,w,w,w,w,new C.esf(d),!1,w,w,w,w,w,w,w,D.f8g,w,w,w))
return B.bm(!0,B.v(v,A.m,w,A.e,A.Q,0,A.p),!0,!1,A.af,!0,!0)},
$S:28}
C.esc.prototype={
$0(){B.a6(this.a,!1).O("dup")
return null},
$S:0}
C.esd.prototype={
$0(){B.a6(this.a,!1).O("del")
return null},
$S:0}
C.ese.prototype={
$0(){B.a6(this.a,!1).O("up")
return null},
$S:0}
C.esf.prototype={
$0(){B.a6(this.a,!1).O("down")
return null},
$S:0}
C.esi.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.esj.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eso.prototype={
$0(){return this.a.a7m()},
$S:0}
C.enS.prototype={
$0(){var w=this.a
w.b4B()
w.ayy(null)},
$S:0}
C.enR.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=B.m(4),n=B.a([new B.ac(0,A.G,A.w.j(0.35),A.dk,24)],x.V),m=this.b
if(m.f!=null){w=B.b0(m.e)
v=m.f
v.toString
v=new B.a8(A.ax,A.aC,A.x,B.a([w,B.b0(v)],x.O),p,p)
w=v}else w=p
v=m.f==null?B.b0(m.e):p
u=m.x
t=m.y
s=B.m(4)
if(m.f!=null){r=B.b0(m.e)
q=m.f
q.toString
q=new B.a8(A.ax,A.aC,A.x,B.a([r,B.b0(q)],x.O),p,p)
r=q}else r=p
s=B.a([B.bw(s,B.c_(A.ks,new B.o(m.f==null?B.b0(m.e):p,p,p,p,p,r,A.n),A.bd),A.aq)],x.p)
r=m.z
q=this.c
A.d.v(s,new B.K(r,new C.enQ(this.a,e.b,e.d,q),B.U(r).k("K<1,r>")))
if(m.z.length===0)s.push(B.av(B.d("Use Insert \u2192 Text Box, Picture, or Shapes",p,p,p,p,p,p,B.l(p,p,q?A.az:A.bJ,p,p,p,p,p,p,p,p,p,p,p,A.a4,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p))
return B.c_(new B.an(A.W,p,A.aa,A.f,s,new B.cx("canvas_"+m.a+"_"+u+"_"+t,x.W)),new B.o(v,p,p,o,n,w,A.n),A.bd)},
$S:385}
C.enQ.prototype={
$1(d){var w=this
return w.a.bCI(d,w.b,w.c,w.d)},
$S:z+23}
C.enF.prototype={
$0(){var w=this
if(w.b){w.a.MX(w.c)
return}if(w.d){w.a.a7k(w.c)
return}if(w.e){w.a.afF(w.c)
return}if(w.f)w.a.b56(w.c)},
$S:0}
C.enG.prototype={
$0(){this.a.MX(this.b)
return null},
$S:0}
C.enH.prototype={
$0(){return this.a.a1m(this.b.a)},
$S:0}
C.enI.prototype={
$1(d){var w=this,v=w.a,u=w.b
if(v.w===u.a)return
v.m(new C.enE(u,d,w.c,w.d))
v.Hk()
v.o_()
v.p5()},
$S:18}
C.enE.prototype={
$0(){var w=this,v=w.a,u=w.b.d
v.c=A.k.D(v.c+u.a/w.c,-0.3,1.2)
v.d=A.k.D(v.d+u.b/w.d,-0.3,1.2)},
$S:0}
C.enJ.prototype={
$1(d){return this.a.ai4(this.b.a,d)},
$S:2}
C.enL.prototype={
$0(){var w,v,u=this
if(u.b){w=u.c
if(!C.fVL(w))u.a.MX(w)
return}if(!u.d)return
w=u.a
v=u.c
if(w.w===v.a)return
w.b56(v)},
$S:0}
C.enK.prototype={
$0(){return this.a.a1m(this.b.a)},
$S:0}
C.enM.prototype={
$1(d){var w=this,v=w.a
v.m(new C.enD(w.b,d,w.c,w.d))
v.Hk()
v.o_()
v.p5()},
$S:18}
C.enD.prototype={
$0(){var w=this,v=w.a,u=w.b.d
v.e=A.k.D(v.e+u.a/w.c,0.04,1.8)
u=u.b
v.f=A.k.D(v.f+u/w.d,0.04,1.8)
if(v.b===D.cQ)v.w=A.k.D(v.w+u*0.15,10,120)},
$S:0}
C.enN.prototype={
$1(d){var w=this.a
w.m(new C.enC(this.b,d))
w.Hk()
w.o_()
w.p5()},
$S:214}
C.enC.prototype={
$0(){var w=this.a,v=this.b.d
w.e=A.k.D(w.e*v,0.04,1.8)
w.f=A.k.D(w.f*v,0.04,1.8)
if(w.b===D.cQ)w.w=A.k.D(w.w*v,10,120)},
$S:0}
C.enO.prototype={
$0(){var w=this.a
w.m(new C.enB(this.b))
w.Hk()
w.o_()
w.p5()},
$S:0}
C.enB.prototype={
$0(){this.a.r=C.hgD()},
$S:0}
C.enP.prototype={
$0(){return this.a.a1m(this.b.a)},
$S:0}
C.epJ.prototype={
$0(){var w=this.a
return w.m(new C.epI(w))},
$S:0}
C.epI.prototype={
$0(){return this.a.y=!1},
$S:0}
C.epK.prototype={
$1(d){return this.a.czd(this.b.a,d)},
$S:2}
C.eoO.prototype={
$1(d){var w
this.a.d1(d)
w=this.b
if(w!=null)w.$0()},
$S:172}
C.eoP.prototype={
$1(d){return this.a.$1(new C.eoN(this.b,d))},
$S:6}
C.eoN.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eoQ.prototype={
$1(d){return this.a.$1(new C.eoM(this.b,d))},
$S:6}
C.eoM.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eoR.prototype={
$1(d){return this.a.$1(new C.eoL(this.b,d))},
$S:6}
C.eoL.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.eoS.prototype={
$1(d){return this.a.$1(new C.eoK(this.b,d))},
$S:6}
C.eoK.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.eoT.prototype={
$1(d){return this.a.$1(new C.eoJ(this.b,d))},
$S:6}
C.eoJ.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eoU.prototype={
$1(d){return this.b.$1(new C.eoI(this.a,this.c))},
$S:9}
C.eoI.prototype={
$0(){return this.b.go=this.a.a},
$S:0}
C.eoV.prototype={
$1(d){return this.b.$1(new C.eoH(this.a,this.c))},
$S:9}
C.eoH.prototype={
$0(){return this.b.id=this.a.a},
$S:0}
C.eoW.prototype={
$1(d){var w=null,v=this.b,u=B.b0(d),t=v.Q===d,s=t?A.bj:A.cU
return B.aE(w,B.p(w,w,A.f,w,w,new B.o(u,w,B.I(s,A.q,t?2:1),w,w,w,A.a6),w,24,w,w,w,w,w,24),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eoG(this.a,v,d),w,w,w,w,w,w,!1,A.a8)},
$S:401}
C.eoG.prototype={
$0(){return this.a.$1(new C.eoD(this.b,this.c))},
$S:0}
C.eoD.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.eoX.prototype={
$1(d){return this.a.$1(new C.eoF(this.b,d))},
$S:1705}
C.eoF.prototype={
$0(){var w=this.b
return this.a.as=w.gK(w)},
$S:0}
C.eoY.prototype={
$1(d){var w=null
return B.aE(w,B.p(w,w,A.f,w,w,new B.o(B.b0(d),w,w,w,w,w,A.a6),w,22,w,w,w,w,w,22),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eoE(this.a,this.b,d),w,w,w,w,w,w,!1,A.a8)},
$S:401}
C.eoE.prototype={
$0(){return this.a.$1(new C.eoC(this.b,this.c))},
$S:0}
C.eoC.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.eoZ.prototype={
$0(){var w,v=this
if(v.b){w=v.a.c
w.toString
w=B.a6(w,!1).pj()}else w=!1
if(w){w=v.a.c
w.toString
B.a6(w,!1).eI()}v.a.ard()},
$S:0}
C.ep1.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.fy
m===$&&B.c()
m=m.x
m===$&&B.c()
w=A.dC.av(0,m)
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
r.push(B.ao(2,B.p(n,B.W(A.tT,u,n,n,n,10),A.f,n,n,new B.o(A.c,n,p,q,n,n,A.n),n,n,n,n,A.n5,n,n,n),n,n,n,2,n,n))
return B.aG(!1,A.a1,!0,n,B.aL(!1,m,!0,B.ez(new B.a7(48,48,new B.an(A.A,n,A.aa,A.r,r,n),n),n,new B.o(n,n,s,v,n,new B.a8(A.ax,A.aC,A.x,t,n,n),A.n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.b,n,n,n,n,n,n,n),A.f,A.K,0,n,A.K,n,n,n,A.ag)},
$S:132}
C.emB.prototype={
$2(d,e){var w,v,u,t,s,r,q=this,p=null,o=q.a.fy
o===$&&B.c()
o=o.x
o===$&&B.c()
w=A.dC.av(0,o)
o=B.m(22)
v=B.m(22)
u=q.c
t=B.aq(u,A.b1,0.22+w*0.12)
t.toString
u=B.a([u,t,u.j(0.9)],x.O)
t=B.I(A.c.j(0.28+w*0.22),A.q,1.35)
s=A.c.j(0.14+w*0.08)
r=B.I(A.c.j(0.4+w*0.15),A.q,1)
return B.aG(!1,A.a1,!0,p,B.aL(!1,o,!0,B.ez(B.v(B.a([B.eb(A.A,B.p(p,B.W(q.d,A.c,p,p,p,26),A.f,p,p,new B.o(s,p,r,p,p,p,A.a6),p,48,p,p,p,p,p,48),1+w*0.06,p,p),A.ac,B.d(q.e,p,p,p,p,p,p,A.jn,A.L,p,p)],x.p),A.m,p,A.bb,A.j,0,A.p),p,new B.o(p,p,t,v,p,new B.a8(A.ax,A.aC,A.x,u,p,p),A.n),p,A.F2,1/0),p,!0,p,p,p,p,p,p,p,p,p,p,p,q.b,p,p,p,p,p,p,p),A.f,A.K,0,p,A.K,p,p,p,A.ag)},
$S:132}
C.eqG.prototype={
$1(d){var w=null,v=B.d(this.a,w,w,w,w,w,w,w,w,w,w),u=this.b,t=B.aM(w,A.T,!0,w,!0,A.r,w,B.aN(),u,w,w,w,w,w,2,A.amV,A.y,!0,w,!0,w,!1,w,A.ai,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,A.a9,w,w,w,w,w,w,w,w,w,w,w,w,!0,A.a5,w,A.am,w,w,w,w)
return B.ej(B.a([B.bK(!1,A.de,w,w,!0,w,w,new C.eqE(d),w,w),B.bJ(A.p4,new C.eqF(d,u),w)],x.p),w,w,w,t,w,w,w,w,v,w)},
$S:19}
C.eqE.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.eqF.prototype={
$0(){var w=this.b.a.a
B.a6(this.a,!1).O(w)
return null},
$S:0}
C.cZE.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.a,i=j.d
i===$&&B.c()
i=i.x
i===$&&B.c()
w=A.dC.av(0,i)
i=j.e
i===$&&B.c()
v=i.x
v===$&&B.c()
u=A.ev.av(0,A.k.D(v,0,1))
i=i.x
i===$&&B.c()
i=A.dV.av(0,i)
v=B.m(22)
t=B.aq(A.aK,A.d.gK(C.kr(j.a.c.w)?D.u0:M.ne),w*0.35)
t.toString
t=B.I(t,A.q,1.2)
s=x.V
r=B.a([new B.ac(w*2,A.G,A.d.gK(C.kr(j.a.c.w)?D.u0:M.ne).j(0.18+w*0.12),A.J,32+w*10),D.aa7],s)
q=B.m(22)
p=x.O
o=B.ao(k,B.p(k,k,A.f,k,k,new B.o(k,k,k,k,k,new B.bT(A.b0,0.9,A.x,k,0,B.a([A.d.gK(C.kr(j.a.c.w)?D.u0:M.ne).j(0.22+w*0.1),A.K],p),k,k),A.n),k,80,k,k,k,k,k,k),k,k,0,0,-28,k)
n=64+w*6
m=A.d.gK(C.kr(j.a.c.w)?D.u0:M.ne).j(0.28+w*0.14)
p=B.p(k,k,A.f,k,k,new B.o(k,k,k,k,k,new B.bT(A.A,0.5,A.x,k,0,B.a([m,A.d.gal(C.kr(j.a.c.w)?D.u0:M.ne).j(0.08),A.K],p),k,k),A.a6),k,n,k,k,k,k,k,n)
n=B.m(14)
m=j.a.c.w
l=C.kr(m)?D.u0:M.ne
s=B.a([new B.ac(0,A.G,A.d.gK(C.kr(m)?D.u0:M.ne).j(0.45+w*0.2),A.cw,18)],s)
m=x.p
l=B.a([p,B.eb(A.A,B.p(k,B.W(C.kr(j.a.c.w)?A.vo:A.pN,A.c,k,k,k,22),A.f,k,k,new B.o(k,k,k,n,s,new B.a8(A.ax,A.aC,A.x,l,k,k),A.n),k,46,k,k,k,k,k,46),1+w*0.04,k,k)],m)
s=B.a([new B.an(A.A,k,A.aa,A.r,l,k),A.S,B.d("PRESENTATION",k,k,k,k,k,k,B.l(k,k,A.d.gK(C.kr(j.a.c.w)?D.u0:M.ne).j(0.85+w*0.15),k,k,k,k,k,k,k,k,10,k,k,A.H,k,k,!0,k,1.4,k,k,k,k,k,k),A.L,k,k),A.fZ,B.d(j.a.c.b,k,2,A.a2,k,k,k,D.f0L,A.L,k,k),A.at,B.d(j.gcuh(),k,k,k,k,k,k,D.f5f,A.L,k,k),A.aA],m)
p=j.a.c
if(p.z){p=p.gRF()?"Shared by admin \xb7 editable for 4 hours":"Received copy \xb7 print or download only"
A.d.v(s,B.a([B.d(p,k,k,k,k,k,k,B.l(k,k,A.d.gK(C.kr(j.a.c.w)?D.u0:M.ne).j(0.9),k,k,k,k,k,k,k,k,11,k,k,A.O,k,k,!0,k,k,k,k,k,k,k,k),A.L,k,k),A.ac],m))}s.push(new C.Jf(A.xJ,"Download PDF","pdf",A.d6,j.Iz(0),!1,k))
p=j.a.c
if(!p.z||p.gRF()){p=j.a.c.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"}else p=!1
if(p){p=j.a.c.w
A.d.v(s,B.a([A.an,new C.Jf(A.kN,"Transfer to "+C.hgF(p==null?"":p),"transfer_hati",A.aV,j.Iz(1),!1,k)],m))}p=j.a.c
if(!p.z){p=p.w
n=j.Iz(p==="hati_kuhowa"||p==="hati_kuhoweya"?2:1)
p=j.a.c.w
A.d.v(s,B.a([A.an,new C.Jf(D.bBb,"Rename presentation","rename",A.c8,n,!1,k),A.an,new C.Jf(A.aja,"Duplicate","duplicate",A.b5,j.Iz(p==="hati_kuhowa"||p==="hati_kuhoweya"?3:2),!1,k)],m))}s.push(A.P)
p=j.a.c
if(p.z)p=1
else{p=p.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"?4:3}s.push(new C.Jf(A.e4,"Delete presentation","delete",A.ay,j.Iz(p),!0,k))
s.push(A.at)
p=j.a.c
if(p.z)p=2
else{p=p.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"?5:4}p=j.Iz(p)
n=j.a.c
if(n.z)n=2
else{n=n.w
n=n==="hati_kuhowa"||n==="hati_kuhoweya"?5:4}n=j.Iz(n)
s.push(B.dW(B.db(B.bK(!1,E.aPF,k,k,!0,k,k,new C.cZD(d),k,B.fv(k,k,k,k,k,k,k,k,k,k,k,A.bJ,k,k,k,A.au,k,D.brJ,k,k,k,k,k,A.km,k,k)),n),new B.u(0,(1-p)*8)))
return B.eb(A.A,B.db(B.aG(!1,A.a1,!0,k,B.p(k,B.bw(q,new B.an(A.W,k,A.aa,A.r,B.a([o,new B.C(D.bqS,B.v(s,A.m,k,A.e,A.Q,0,A.p),k)],m),k),A.aq),A.f,k,A.UG,new B.o(A.aB,k,t,v,r,k,A.n),k,k,k,k,k,k,k,k),A.f,A.K,0,k,k,k,k,k,A.ag),i),0.88+u*0.12,k,k)},
$S:45}
C.cZD.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.d__.prototype={
$0(){B.a6(this.a,!1).O(!1)
return null},
$S:0}
C.d_0.prototype={
$0(){B.a6(this.a,!1).O(!0)
return null},
$S:0}
C.cZB.prototype={
$1(d){var w=this.a
return w.m(new C.cZx(w))},
$S:23}
C.cZx.prototype={
$0(){return this.a.d=!0},
$S:0}
C.cZC.prototype={
$1(d){var w=this.a
return w.m(new C.cZw(w))},
$S:49}
C.cZw.prototype={
$0(){return this.a.d=!1},
$S:0}
C.cZA.prototype={
$0(){var w=this.a
return w.m(new C.cZy(w))},
$S:0}
C.cZy.prototype={
$0(){return this.a.d=!1},
$S:0}
C.cZz.prototype={
$0(){var w=this.a.a.e
B.a6(this.b,!1).O(w)
return null},
$S:0}
C.etl.prototype={
$0(){return $.bj_=!$.bj_},
$S:0}
C.etb.prototype={
$0(){var w,v,u=this.a
if(u.c==null||!u.r)return
w=u.d
w===$&&B.c()
v=u.a.c
if(w<v.r.length-1||v.ch||u.gaTp())u.av3()},
$S:0}
C.etk.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.etc.prototype={
$0(){return this.a.y=!0},
$S:0}
C.etd.prototype={
$0(){var w=this.a
if(w.c!=null&&w.y)w.av3()},
$S:0}
C.et7.prototype={
$0(){var w=this.a
w.y=!1
w.e=A.d.gK(w.a.c.r).r
w.d=0},
$S:0}
C.et8.prototype={
$0(){var w=this.a,v=this.b
w.e=w.a.c.r[v].r
w.d=v},
$S:0}
C.et9.prototype={
$0(){return this.a.y=!1},
$S:0}
C.eta.prototype={
$0(){var w,v,u=this.a
u.e=u.a.c.r[this.b].r
w=u.d
w===$&&B.c()
v=this.c
u.d=A.o.F(w-1+v,v)},
$S:0}
C.eti.prototype={
$2(d,e){var w=B.B(e,x.l)
if(d!=null)w.push(d)
return new B.an(A.A,null,A.b_,A.r,w,null)},
$S:1706}
C.etj.prototype={
$2(d,e){var w
if(e.gc3(e)===A.hS)return new B.cX(e,!1,d,null)
w=this.a
return w.csd(w.e,d,e)},
$S:371}
C.ete.prototype={
$2(d,e){var w=B.dl(),v=w.a
v.$flags&2&&B.ai(v)
v[11]=0.001
v=this.a
w.fv((1-v.gp(0))*1.5708)
return B.fs(A.A,B.db(e,v.gp(0)),null,w,!0)},
$S:45}
C.etf.prototype={
$2(d,e){var w=B.dl(),v=w.a
v.$flags&2&&B.ai(v)
v[11]=0.001
v=this.a
w.jR((1-v.gp(0))*1.5708)
return B.fs(A.A,B.db(e,v.gp(0)),null,w,!0)},
$S:45}
C.etg.prototype={
$2(d,e){var w=B.dl(),v=w.a
v.$flags&2&&B.ai(v)
v[11]=0.002
v=this.a
w.fv(v.gp(0)*0.8)
w.jR(v.gp(0)*0.35)
return B.fs(A.A,B.db(e,v.gp(0)),null,w,!0)},
$S:45}
C.eth.prototype={
$2(d,e){var w=B.dl(),v=w.a
v.$flags&2&&B.ai(v)
v[11]=0.0025
v=this.a
w.fv(-v.gp(0)*1.2)
return B.fs(A.a7,B.db(e,v.gp(0)),null,w,!0)},
$S:45}
C.etm.prototype={
$2(d,e){var w,v=this,u=v.b,t=u==null
if(!t){w=v.a.gY9().r
w=w!=null&&w.a!=null}else w=!1
if(w){t=v.a
u=t.a.c.r[u]
t=t.gY9().x
t===$&&B.c()
return new C.b_N(u,v.c,t,null)}u=v.a.d
u===$&&B.c()
return new C.Ie(v.c,t,!0,new B.cx("cine"+u,x.W))},
$S:657}
C.eto.prototype={
$1(d){var w=this.a
if(d.b.a>B.aI(this.b,A.bT,x.w).w.a.a*0.55)w.av3()
else w.cgW()},
$S:49}
C.etn.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.fAz.prototype={
$4(d,e,f,g){var w=this.b
A.d.a9(w)
A.d.v(w,d)
w=this.a
w.a=e
w.b=f
w.c=g},
$S:370}
C.fAI.prototype={
$1(d){var w=null,v=this.a,u=v.r.length,t=u===1?"":"s"
t=B.d("Download a PDF that looks like your slides ("+u+" page"+t+"), or open the print view in your browser.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.75),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return B.ej(B.a([B.bK(!1,A.de,w,w,!0,w,w,new C.fAF(d),w,w),B.bK(!1,D.fno,w,w,!0,w,w,new C.fAG(d,this.b,v),w,w),B.bJ(A.aPW,new C.fAH(d,v,this.c),w)],x.p),w,w,L.ta,new B.a7(320,w,t,w),w,w,w,w,D.foS,w)},
$S:19}
C.fAF.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.fAG.prototype={
$0(){var w=0,v=B.j(x.H),u=this
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:B.a6(u.a,!1).O(null)
C.fWp(u.b,u.c.b)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fAH.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:B.a6(u.a,!1).O(null)
t=u.b
w=2
return B.b(C.aOJ(t),$async$$0)
case 2:s=e
r=u.c
w=r.e!=null?3:4
break
case 3:w=5
return B.b(C.aO8(r,s,t.b),$async$$0)
case 5:case 4:return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fAy.prototype={
$1(d){return d.a!==this.a.a},
$S:z+2}
C.ccE.prototype={
$2(d,e){var w
if(x.f.b(e)){w=J.q(e,"bundleId")
w=J.k(w==null?"":w)===this.a}else w=!1
return w},
$S:537}
C.fAE.prototype={
$1(d){return d.ae()},
$S:z+14}
C.f8Z.prototype={
$1(d){return C.fWn(C.Vi(B.a1(d,x.N,x.z)),this.a)},
$S:z+96}
C.fJj.prototype={
$3(d,e,f){return A.bH},
$C:"$3",
$R:3,
$S:91}
C.fJk.prototype={
$4(d,e,f,g){var w=A.cr.av(0,e.gp(0))
return B.db(B.eb(A.A,D.fN1,0.94+w*0.06,null,null),w)},
$S:372}
C.fJl.prototype={
$1(d){var w=this
return new C.Vk(w.a,w.b,w.c,w.d,null)},
$S:z+97}
C.esS.prototype={
$2(d,e){return d+e.r.length},
$S:z+13}
C.esO.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.esR.prototype={
$1(d){var w=this.a,v=w.a,u=v.c
v=v.f
return new C.Vl(u,this.b,w.gaMR(),v,null)},
$S:z+99}
C.esP.prototype={
$0(){return this.a.f=!0},
$S:0}
C.esQ.prototype={
$0(){return this.a.f=!1},
$S:0}
C.esT.prototype={
$0(){return this.a.f=!0},
$S:0}
C.esU.prototype={
$0(){return this.a.f=!1},
$S:0}
C.esX.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.esY.prototype={
$0(){var w=this.a
return w.m(new C.esW(w))},
$S:0}
C.esW.prototype={
$0(){return this.a.d="one"},
$S:0}
C.esZ.prototype={
$0(){var w=this.a
return w.m(new C.esV(w))},
$S:0}
C.esV.prototype={
$0(){return this.a.d="all"},
$S:0}
C.et_.prototype={
$1(d){return this.a.bHk(d,this.b)},
$S:z+100}
C.esN.prototype={
$0(){var w=this.a
return w.m(new C.esM(w,this.b))},
$S:0}
C.esM.prototype={
$0(){return this.a.e=this.b.a},
$S:0}
C.et0.prototype={
$0(){var w=this.a,v=this.b
w.d=v.b
w.e=v.a},
$S:0}
C.et1.prototype={
$0(){return this.a.f="Could not create QR. Check your connection and try again."},
$S:0}
C.et2.prototype={
$2(d,e){return d+e.r.length},
$S:z+13}
C.et3.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.et4.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a.e
s.toString
w=3
return B.b(B.fI(new B.fC(s)),$async$$0)
case 3:s=t.b
if(s.e==null){w=1
break}s.I(x.q).f.R(D.eOq)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.emv.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.emu())},
$S:0}
C.emu.prototype={
$0(){},
$S:0}
C.emw.prototype={
$1(d){var w=this.a
if(w.c!=null)w.e.fG()},
$S:8}
C.emr.prototype={
$1(d){return this.a.m(new C.emq())},
$S:2}
C.emq.prototype={
$0(){},
$S:0}
C.ems.prototype={
$1(d){return this.a.aYa()},
$S:2}
C.emt.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.et6.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(t.d.pD(),$async$$0)
case 2:if(t.c!=null)t.m(new C.et5(t))
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.et5.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.fuT.prototype={
$1(d){var w=null,v=this.a,u=v.a
return B.ao(w,new B.et(new B.kb(this.c,new C.fuS(),w,w,x.ex),this.b),v.b,w,0,w,0,u)},
$S:219}
C.fuS.prototype={
$3(d,e,f){return new C.Ie(e,!1,!1,new B.cx(e.a,x.W))},
$S:z+102}
C.fuU.prototype={
$1(d){var w=null
return B.oe(!1,B.av(new C.bto(this.a,this.b,w),w,w,w),w,x.z)},
$S:300}
C.fuY.prototype={
$0(){var w=0,v=B.j(x.cc),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.aU.gms(),$async$$0)
case 3:w=4
return B.b(B.bN(A.n1,null,x.H),$async$$0)
case 4:w=5
return B.b($.aU.gms(),$async$$0)
case 5:s=$.aU.ak$.x.h(0,t.a)
r=s==null?null:s.gb8()
if(!(r instanceof B.pL))throw B.V("Could not draw the slide.")
u=r.lR(1)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1709}
C.fuZ.prototype={
bja(d){var w=0,v=B.j(x.fS),u,t,s,r
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(d.hj(A.fW),$async$$1)
case 3:r=f
if(r==null)throw B.V("Could not read the slide picture.")
t=(self.URL||self.webkitURL).createObjectURL(B.hM([J.fb(A.dz.gaO(r))],"image/png"))
t.toString
s=Am.fNl(t)
w=4
return B.b(new B.pR(s,"load",!1,x.ev).gK(0).cM(0,A.jv),$async$$1)
case 4:(self.URL||self.webkitURL).revokeObjectURL(t)
u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$1(d){return this.bja(d)},
$S:1710}
C.fuV.prototype={
$1(d){var w,v=x.bu.a(d).data
if(v!=null){w=v.size
w.toString
w=w>0}else w=!1
if(w)this.a.push(v)},
$S:144}
C.fuW.prototype={
$1(d){var w=this.a
if((w.a.a&30)===0)w.fN(0)},
$S:144}
C.fuX.prototype={
$0(){return(self.URL||self.webkitURL).revokeObjectURL(this.a)},
$S:0}
C.f3k.prototype={
$3(d,e,f){var w=null
return B.d(e,w,w,w,w,w,w,D.eYi,A.L,w,w)},
$S:1711}
C.f3l.prototype={
$3(d,e,f){var w=null,v=B.m(99)
return B.bw(v,B.lY(A.bm,w,A.dO,8,w,e===0?w:e,w),A.aq)},
$S:566}
C.eb0.prototype={
$1(d){this.a.Zl()
return null},
$S:12}
C.eaZ.prototype={
$0(){return this.a.e=D.bmV},
$S:0}
C.eb_.prototype={
$0(){var w=this.a.a
if(w.a<0)w=A.bw
return this.b.e=w},
$S:0}
C.cfc.prototype={
$1(d){return A.o.dv(1,d.a)},
$S:z+103}
C.cfd.prototype={
$2(d,e){return(d|e)>>>0},
$S:78};(function aliases(){var w=C.aKJ.prototype
w.btI=w.q
w=C.aKc.prototype
w.bta=w.q
w=C.aJY.prototype
w.bsV=w.q
w=C.aKb.prototype
w.bt9=w.q
w=C.aKH.prototype
w.btG=w.q
w=C.aM1.prototype
w.bva=w.q
w=C.aIT.prototype
w.brN=w.q
w=C.aKV.prototype
w.btU=w.q
w=C.aKW.prototype
w.btV=w.q
w=C.b1s.prototype
w.bor=w.aBD})();(function installTearOffs(){var w=a._static_0,v=a._instance_0u,u=a._instance_1u,t=a._static_1,s=a.installStaticTearOff
w(C,"i19","amx",104)
v(C.aHS.prototype,"gc1b","Yg",0)
var r
u(r=C.awu.prototype,"gctD","ctE",38)
v(r,"gc1X","aco",0)
v(r=C.awq.prototype,"gaWL","DD",3)
v(r,"gc1U","c1V",3)
v(r,"gavm","xl",0)
v(r,"gavn","Ic",0)
t(C,"i1y","hy0",105)
v(C.aCy.prototype,"gc4t","c4u",3)
s(C,"i1J",0,null,["$4$paper$photo$request$template"],["fBY"],106,0)
s(C,"i1I",0,null,["$5$doc$history$instruction$photo$template"],["bAx"],107,0)
v(r=C.aCR.prototype,"gc5a","Iw",0)
v(r,"gbGN","W8",0)
v(r,"gc5d","adb",0)
v(r,"gc5c","Z7",0)
v(r,"gaXQ","DV",0)
v(C.aCV.prototype,"gc5i","Z9",0)
v(r=C.aEh.prototype,"gaY2","Pf",0)
v(r,"gclF","b1m",3)
v(r,"gcv1","azP",86)
v(r,"gbKv","a9h",0)
v(r,"gc5J","A9",0)
v(r=C.aGb.prototype,"gcfF","a_u",0)
v(r,"gcfN","a_x",0)
v(r,"gbzM","a7K",0)
v(r,"gc5N","ado",0)
v(C.aGa.prototype,"gc5O","adp",0)
v(C.aAb.prototype,"gbyL","a7x",0)
v(C.ayz.prototype,"gc5P","Zk",0)
w(C,"i1W","i_R",12)
w(C,"i1U","hXO",12)
w(C,"i1V","hZR",12)
v(r=C.aDa.prototype,"gcy9","cya",3)
v(r,"gcjW","cjX",3)
u(r,"gE0","ae3",7)
v(r,"gbEp","aqn",3)
u(r,"gE1","aZj",7)
v(r,"gc7W","adL",0)
v(r,"gc6N","adK",0)
v(r,"gca5","ae4",0)
v(r,"gbGK","a8T",0)
v(r,"gcaZ","ZU",0)
v(r,"gcb_","ael",0)
v(r,"gcbw","aes",0)
v(r,"gcai","ae7",0)
v(r,"gbKF","a9l",0)
v(r,"gaQh","aQi",3)
v(r,"gaPt","aPu",3)
v(r,"gaLb","aLc",3)
v(r,"gaPs","ard",3)
u(r,"gbz1","bz2",80)
v(r,"gazm","b4o",3)
v(r,"gc6P","c6Q",3)
v(r,"gbVz","bVA",3)
v(r,"gbJa","bJb",3)
v(r=C.aDd.prototype,"gcx1","cx2",3)
v(r,"gcwH","cwI",3)
t(C,"i1X","i07",2)
v(r=C.aDb.prototype,"gc5V","IB",0)
v(r,"gcnE","QG",0)
v(r,"gc5S","IA",0)
v(r,"gczo","a2_",0)
v(r,"gcbI","aez",0)
v(C.aD9.prototype,"gc5W","aYa",3)
v(r=C.aDc.prototype,"gbLq","a9v",0)
u(r,"gc5T","c5U",101)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(B.aC,[C.nM,C.Rc,C.bG6,C.bEt,C.cv7,C.cv5,C.bMf,C.b78,C.cv6,C.bD3,C.cf6,C.cf4,C.cf5,C.cf3,C.arF,C.cf2,C.bN8,C.oc,C.aDM,C.ji,C.nz,C.a7b,C.z5,C.lb,C.oo,C.m_,C.z7,C.nD,C.a7j,C.aq2,C.b_O,C.eaq,C.l8,C.Ee,C.es,C.iV,C.E5,C.xf,C.eI,C.lB,C.hZ,C.jB,C.a7k,C.aei,C.b_P,C.b1s,C.a29])
u(B.ke,[C.cCY,C.bXN,C.fq5,C.cEt,C.cDQ,C.fvB,C.dW9,C.dW8,C.eb3,C.eb2,C.fx_,C.fa7,C.fa8,C.cb1,C.cb2,C.cb3,C.efr,C.eNU,C.eNh,C.eNg,C.eOk,C.eNS,C.eNL,C.eO3,C.eOK,C.fhd,C.eUI,C.eUH,C.eVa,C.eat,C.fAv,C.dRT,C.fGS,C.fxm,C.ccw,C.ccu,C.ccz,C.fxR,C.fxS,C.fxT,C.fxU,C.ccg,C.cch,C.dE6,C.ccd,C.fxQ,C.f0T,C.dQ4,C.cc6,C.ea9,C.fvq,C.eq5,C.equ,C.eqr,C.eqq,C.eqB,C.eqA,C.es5,C.es4,C.eqk,C.eqj,C.emU,C.eo3,C.er2,C.esn,C.esm,C.enR,C.ep1,C.emB,C.cZE,C.eti,C.etj,C.ete,C.etf,C.etg,C.eth,C.etm,C.ccE,C.esS,C.et2,C.cfd])
u(B.hT,[C.cCZ,C.cD_,C.bN9,C.fnA,C.bXM,C.bXP,C.fDm,C.f1R,C.f1I,C.f1Y,C.f9_,C.f90,C.fq6,C.fq4,C.fCR,C.fng,C.fDI,C.cEj,C.cEo,C.cEq,C.cEm,C.cEr,C.cEk,C.cEs,C.cEf,C.cEc,C.cEb,C.cEi,C.cDL,C.cDJ,C.fuD,C.fuE,C.fdp,C.fvC,C.fvI,C.fcs,C.c7l,C.fuB,C.fuC,C.fps,C.fpt,C.fvH,C.fvD,C.fvF,C.fvG,C.fvE,C.fH9,C.fpw,C.fpx,C.fpA,C.fpB,C.fpE,C.fpF,C.fIC,C.fay,C.fIN,C.eel,C.eem,C.een,C.ee3,C.eef,C.eeg,C.eei,C.cb0,C.caZ,C.cb_,C.fvh,C.fvj,C.fvi,C.fa9,C.faa,C.fIQ,C.efw,C.efx,C.efo,C.efp,C.efs,C.eft,C.fJ5,C.eOL,C.eOa,C.eNV,C.eO7,C.eNc,C.eNd,C.eNe,C.eNi,C.eNj,C.eOA,C.eOH,C.eOJ,C.eOj,C.eOl,C.eOp,C.eOq,C.eOr,C.eOv,C.eOm,C.eOn,C.eNu,C.eNv,C.eNw,C.eNx,C.eNy,C.eNz,C.eNA,C.eNB,C.eNC,C.eMQ,C.eMR,C.eMS,C.eMT,C.eMV,C.eMW,C.eNo,C.eNp,C.eNq,C.eNr,C.eNs,C.eN_,C.eN0,C.eN1,C.eN2,C.eNK,C.eO2,C.fsG,C.fsF,C.ccn,C.fhc,C.fAr,C.fAk,C.fAn,C.fyk,C.fyl,C.fym,C.fsN,C.fsM,C.fsL,C.fsJ,C.fa4,C.fa5,C.fa6,C.fJh,C.eUK,C.eUL,C.eUE,C.eUy,C.eV3,C.eV4,C.eV6,C.eV7,C.eV2,C.fJg,C.eUp,C.fgs,C.eas,C.fAt,C.fAu,C.fAw,C.fAp,C.fAq,C.fIu,C.dgu,C.dgA,C.ear,C.f6z,C.f6B,C.f6A,C.f6y,C.ftR,C.ftT,C.f8z,C.fzW,C.fzX,C.fzY,C.fA8,C.fAd,C.fAe,C.fAf,C.fAg,C.fAh,C.fAi,C.fAj,C.fzZ,C.fA_,C.fA0,C.fA1,C.fA2,C.fA3,C.fA4,C.fA5,C.fA6,C.fA7,C.fA9,C.fAa,C.fAb,C.fAc,C.frH,C.fg0,C.fg_,C.fAC,C.dRU,C.dRS,C.eTz,C.c6X,C.c6Z,C.fGU,C.d5N,C.d5P,C.fGT,C.fGR,C.fJf,C.fxi,C.d5n,C.fpI,C.fpJ,C.ccl,C.ccm,C.cck,C.cca,C.ccb,C.cc7,C.cc8,C.cc9,C.ccC,C.ccx,C.ccs,C.cct,C.ccv,C.ccy,C.ccA,C.fxV,C.ccf,C.cci,C.ccj,C.ccp,C.ccq,C.fAJ,C.fzQ,C.cce,C.ccc,C.fxP,C.fiy,C.cc5,C.eRc,C.fln,C.esJ,C.ep8,C.ep9,C.eqJ,C.eqx,C.eqy,C.eow,C.esu,C.esv,C.esw,C.enV,C.eqc,C.eqe,C.epP,C.epM,C.ep4,C.ep5,C.epW,C.enX,C.eq7,C.eq8,C.eq6,C.eqa,C.eq9,C.eqs,C.eqt,C.eqv,C.eqo,C.eof,C.eoc,C.eqC,C.eo4,C.est,C.emD,C.eo7,C.eo6,C.enl,C.enq,C.eno,C.enm,C.esB,C.esC,C.esD,C.esA,C.es7,C.es6,C.es0,C.es2,C.erT,C.esr,C.esp,C.emL,C.emH,C.ep2,C.enu,C.emW,C.emV,C.enh,C.eni,C.eou,C.enw,C.enA,C.eql,C.erU,C.erV,C.erW,C.erX,C.enZ,C.eo_,C.eo0,C.epv,C.eoq,C.eoi,C.eop,C.epF,C.epG,C.ers,C.eru,C.erO,C.erQ,C.erv,C.erw,C.ens,C.ep7,C.ep6,C.esh,C.enQ,C.enI,C.enJ,C.enM,C.enN,C.epK,C.eoO,C.eoP,C.eoQ,C.eoR,C.eoS,C.eoT,C.eoU,C.eoV,C.eoW,C.eoX,C.eoY,C.eqG,C.cZB,C.cZC,C.eto,C.fAz,C.fAI,C.fAy,C.fAE,C.f8Z,C.fJj,C.fJk,C.fJl,C.esR,C.et_,C.emw,C.emr,C.ems,C.fuT,C.fuS,C.fuU,C.fuZ,C.fuV,C.fuW,C.f3k,C.f3l,C.eb0,C.cfc])
u(B.j3,[C.cD0,C.f1N,C.f1S,C.f1T,C.f1O,C.f1P,C.f1Q,C.f1G,C.f1H,C.f1J,C.f1K,C.f1X,C.f1W,C.f1M,C.f1L,C.f1U,C.f1V,C.f2_,C.f20,C.f1Z,C.cEl,C.cEp,C.cEn,C.cEd,C.cEe,C.cEg,C.cE9,C.cEa,C.cEh,C.cE8,C.cE7,C.cE6,C.cDA,C.cDz,C.cDC,C.cDK,C.cDD,C.cDB,C.cDF,C.cDG,C.cDH,C.cDE,C.cDI,C.cDM,C.cDN,C.cDO,C.cDP,C.fpq,C.fpr,C.fpo,C.fpp,C.e5P,C.e5N,C.e5O,C.e5Q,C.e5R,C.dW7,C.fpu,C.fpv,C.fpy,C.fpz,C.fpC,C.fpD,C.eb1,C.fxp,C.fxo,C.eek,C.eej,C.edY,C.edU,C.ee4,C.ee5,C.ee6,C.ee_,C.ee0,C.ee1,C.ee2,C.edZ,C.edW,C.edX,C.eec,C.eed,C.eeb,C.eee,C.eea,C.ee9,C.ee8,C.eeh,C.ee7,C.edV,C.efv,C.efj,C.efk,C.efq,C.efl,C.efn,C.efm,C.efu,C.eND,C.eO0,C.eNm,C.eNn,C.eNk,C.eNl,C.eO6,C.eO5,C.eO4,C.eO9,C.eO8,C.eNb,C.eNf,C.eNa,C.eN9,C.eN6,C.eN8,C.eN7,C.eOI,C.eOB,C.eOz,C.eOC,C.eOy,C.eOD,C.eOx,C.eOE,C.eOF,C.eOG,C.eOw,C.eOi,C.eOd,C.eOo,C.eOh,C.eOs,C.eOg,C.eOt,C.eOf,C.eOu,C.eOe,C.eNY,C.eNX,C.eNZ,C.eNW,C.eO_,C.eNQ,C.eNP,C.eNR,C.eNO,C.eNN,C.eNM,C.eMU,C.eMP,C.eN3,C.eMZ,C.eN4,C.eMY,C.eN5,C.eMX,C.eNT,C.eNH,C.eNG,C.eNI,C.eNF,C.eNJ,C.eNE,C.eO1,C.eOc,C.eOb,C.eNt,C.fAm,C.fAo,C.fAs,C.fsK,C.fva,C.fv8,C.fv9,C.eUM,C.eUN,C.eUJ,C.eUD,C.eUC,C.eUF,C.eUG,C.eUs,C.eUt,C.eUv,C.eUw,C.eUx,C.eUu,C.eUz,C.eV_,C.eV0,C.eUZ,C.eV1,C.eUY,C.eUX,C.eUW,C.eV5,C.eUV,C.eUU,C.eUT,C.eV8,C.eUS,C.eV9,C.eUR,C.eUQ,C.eUA,C.eUB,C.eUP,C.eUO,C.eUl,C.eUm,C.eUn,C.eUo,C.eUk,C.eUq,C.eUr,C.dgt,C.dgv,C.dgy,C.dgz,C.dgx,C.dgw,C.ftS,C.frI,C.c6Y,C.c7_,C.d5G,C.d5L,C.d5M,C.d5K,C.d5J,C.d5O,C.d5I,C.d5H,C.d5Q,C.fGQ,C.dcs,C.dct,C.dcu,C.fpG,C.fpH,C.ccD,C.emx,C.emy,C.emz,C.emA,C.fiw,C.fix,C.dQ6,C.dQ5,C.d2C,C.d2B,C.esL,C.esK,C.epa,C.erR,C.esH,C.eqH,C.esx,C.esy,C.esI,C.epQ,C.enT,C.enU,C.eqd,C.epO,C.epL,C.epN,C.epR,C.epS,C.epT,C.epU,C.epV,C.epX,C.enY,C.eq_,C.eq0,C.eq1,C.eq2,C.eq3,C.eq4,C.epZ,C.eqb,C.eqp,C.eqn,C.eqw,C.epY,C.eod,C.eoe,C.eog,C.eqz,C.eqD,C.emS,C.eob,C.eo9,C.eqL,C.eo5,C.eqK,C.enW,C.eox,C.ess,C.erS,C.emT,C.emQ,C.emG,C.emC,C.emE,C.eo8,C.enk,C.enp,C.enn,C.enj,C.eqm,C.esE,C.es3,C.erZ,C.es_,C.es1,C.ep0,C.ep_,C.esq,C.emJ,C.emK,C.emM,C.emN,C.emR,C.emI,C.eqI,C.esz,C.ep3,C.ent,C.emF,C.eov,C.emO,C.emX,C.emY,C.emZ,C.en9,C.enc,C.end,C.ene,C.enf,C.eng,C.en_,C.en0,C.en1,C.en2,C.en3,C.en4,C.en5,C.en6,C.en7,C.en8,C.ena,C.enb,C.eot,C.eos,C.eor,C.emP,C.enx,C.env,C.eny,C.enz,C.eoa,C.eqh,C.eqi,C.eqf,C.eqg,C.erY,C.eo2,C.eo1,C.epu,C.ept,C.epw,C.eps,C.epx,C.epr,C.epy,C.epq,C.epz,C.epp,C.epA,C.epo,C.epB,C.epn,C.epC,C.epm,C.epf,C.epg,C.eph,C.epe,C.epi,C.epd,C.epj,C.epc,C.epk,C.epb,C.epl,C.eon,C.eoo,C.eoh,C.eoj,C.eok,C.eol,C.eom,C.esF,C.esG,C.epE,C.epD,C.epH,C.er3,C.er4,C.er5,C.erg,C.err,C.erC,C.erJ,C.erK,C.erL,C.erM,C.erN,C.er6,C.er7,C.er8,C.er9,C.era,C.erb,C.erc,C.erd,C.ere,C.erf,C.erh,C.eri,C.erj,C.erk,C.erl,C.erm,C.ern,C.ero,C.erp,C.eqU,C.erq,C.er1,C.er0,C.ert,C.er_,C.eqQ,C.erP,C.eqZ,C.eqP,C.eqN,C.eqY,C.eqO,C.eqM,C.erx,C.eqX,C.ery,C.erz,C.erA,C.erB,C.eqW,C.erD,C.erE,C.erF,C.eqV,C.erG,C.eqT,C.erH,C.eqS,C.erI,C.eqR,C.enr,C.esa,C.es9,C.esb,C.es8,C.eoA,C.eoz,C.eoB,C.eoy,C.esl,C.esg,C.esk,C.esc,C.esd,C.ese,C.esf,C.esi,C.esj,C.eso,C.enS,C.enF,C.enG,C.enH,C.enE,C.enL,C.enK,C.enD,C.enC,C.enO,C.enB,C.enP,C.epJ,C.epI,C.eoN,C.eoM,C.eoL,C.eoK,C.eoJ,C.eoI,C.eoH,C.eoG,C.eoD,C.eoF,C.eoE,C.eoC,C.eoZ,C.eqE,C.eqF,C.cZD,C.d__,C.d_0,C.cZx,C.cZw,C.cZA,C.cZy,C.cZz,C.etl,C.etb,C.etk,C.etc,C.etd,C.et7,C.et8,C.et9,C.eta,C.etn,C.fAF,C.fAG,C.fAH,C.esO,C.esP,C.esQ,C.esT,C.esU,C.esX,C.esY,C.esW,C.esZ,C.esV,C.esN,C.esM,C.et0,C.et1,C.et3,C.et4,C.emv,C.emu,C.emq,C.emt,C.et6,C.et5,C.fuY,C.fuX,C.eaZ,C.eb_])
t(C.aQ3,B.J)
u(B.m4,[C.a36,C.avX,C.auE,C.xd,C.xg,C.kN,C.t4,C.B0,C.rg,C.vH,C.aqC,C.If,C.aq1,C.uu,C.mq,C.hw,C.a7W])
u(C.bMf,[C.cv8,C.bMg])
u(C.cf6,[C.cfa,C.arE])
t(C.cf9,C.cf4)
t(C.cf8,C.cf3)
t(C.cfb,C.cf8)
t(C.cf7,C.cf5)
t(C.cf1,C.cf2)
t(C.b8H,B.oF)
t(C.cp4,B.au5)
t(C.a7I,B.x0)
t(C.aUt,B.dG)
t(C.azu,B.asZ)
u(B.ag,[C.a0a,C.XY,C.XW,C.apd,C.V5,C.V8,C.a_e,C.a_J,C.a_I,C.aCK,C.Z6,C.MW,C.YF,C.Z_,C.anf,C.aHz,C.Uk,C.ayj,C.a71,C.Nn,C.axG,C.Jf,C.ZR,C.Vk,C.Vl,C.aD8,C.aq6,C.a72])
u(B.ah,[C.aHS,C.awu,C.awq,C.aCy,C.aCR,C.aCV,C.aEh,C.aGb,C.aGa,C.aKJ,C.aAb,C.aKc,C.ayz,C.bez,C.aJY,C.aM1,C.aKb,C.bcs,C.aKH,C.aKV,C.aIT,C.bbe,C.aKW,C.aDb,C.biZ,C.aD9,C.aDc,C.biI])
u(B.au,[C.aws,C.acr,C.abR,C.bhK,C.acu,C.ae8,C.b_q,C.br0,C.b_K,C.bki,C.bpB,C.aYE,C.b_N,C.acx,C.acP,C.b_L,C.Ie,C.aYH,C.bbt,C.P1,C.Jn,C.bg6,C.bg5,C.bto])
u(B.GK,[C.baW,C.bsp,C.aIb,C.bdC,C.bpZ])
u(B.mH,[C.baV,C.b7q,C.bpW,C.bas,C.be_,C.bgc,C.bd5,C.bdX,C.bdE,C.bmt,C.b8z,C.b8c,C.btl,C.bqo,C.bpx,C.bcZ,C.b_I,C.bou,C.bpu])
t(C.biF,C.aKJ)
t(C.bi1,C.aKc)
t(C.bhM,C.aJY)
t(C.bsS,C.aM1)
t(C.bhZ,C.aKb)
t(C.biD,C.aKH)
t(C.bvG,C.aKV)
t(C.aDa,C.bvG)
t(C.bbf,C.aIT)
t(C.aDd,C.aKW)
t(C.btc,B.iO)
t(C.a7V,B.km)
t(C.cfe,C.b1s)
t(C.ahh,C.a29)
u(B.WY,[C.aPU,C.aRo])
t(C.avz,C.aPU)
w(C.aKJ,B.c9)
w(C.aKc,B.c9)
w(C.aJY,B.c9)
w(C.aKb,B.c9)
w(C.aKH,B.c9)
w(C.aM1,B.c9)
w(C.aIT,B.eU)
w(C.aKV,B.c9)
v(C.bvG,B.ex)
w(C.aKW,B.c9)})()
B.jT(b.typeUniverse,JSON.parse('{"aQD":{"hF":["aQD"]},"nM":{"aQD":[],"hF":["aQD"]},"aQ3":{"J":["Rc"],"J.E":"Rc"},"b8H":{"oF":[]},"a7I":{"x0":[],"o5":[]},"aUt":{"dG":[],"cz":[],"r":[]},"azu":{"aS":[],"d5":["aS"],"aR":[],"cu":[]},"a0a":{"ag":[],"r":[]},"aHS":{"ah":["a0a"]},"XY":{"ag":[],"r":[]},"XW":{"ag":[],"r":[]},"awu":{"ah":["XY"]},"awq":{"ah":["XW"]},"aws":{"au":[],"r":[]},"apd":{"ag":[],"r":[]},"aCy":{"ah":["apd"]},"acr":{"au":[],"r":[]},"abR":{"au":[],"r":[]},"acu":{"au":[],"r":[]},"ae8":{"au":[],"r":[]},"bhK":{"au":[],"r":[]},"V5":{"ag":[],"r":[]},"aCR":{"ah":["V5"]},"b_q":{"au":[],"r":[]},"baW":{"aB":[]},"baV":{"aB":[]},"bsp":{"aB":[]},"b7q":{"aB":[]},"bpW":{"aB":[]},"V8":{"ag":[],"r":[]},"aCV":{"ah":["V8"]},"bas":{"aB":[]},"a_e":{"ag":[],"r":[]},"aEh":{"ah":["a_e"]},"be_":{"aB":[]},"a_J":{"ag":[],"r":[]},"a_I":{"ag":[],"r":[]},"aCK":{"ag":[],"r":[]},"Z6":{"ag":[],"r":[]},"aGb":{"ah":["a_J"]},"aGa":{"ah":["a_I"]},"biF":{"ah":["aCK"]},"bgc":{"aB":[]},"aAb":{"ah":["Z6"]},"br0":{"au":[],"r":[]},"b_K":{"au":[],"r":[]},"bki":{"au":[],"r":[]},"MW":{"ag":[],"r":[]},"YF":{"ag":[],"r":[]},"bi1":{"ah":["MW"]},"bpB":{"au":[],"r":[]},"bd5":{"aB":[]},"aYE":{"au":[],"r":[]},"ayz":{"ah":["YF"]},"Z_":{"ag":[],"r":[]},"bez":{"ah":["Z_"]},"bdX":{"aB":[]},"bdE":{"aB":[]},"bmt":{"aB":[]},"b8z":{"aB":[]},"b8c":{"aB":[]},"btl":{"aB":[]},"bqo":{"aB":[]},"bpx":{"aB":[]},"bcZ":{"aB":[]},"anf":{"ag":[],"r":[]},"b_N":{"au":[],"r":[]},"bhM":{"ah":["anf"]},"acx":{"au":[],"r":[]},"acP":{"au":[],"r":[]},"aHz":{"ag":[],"r":[]},"Uk":{"ag":[],"r":[]},"Ie":{"au":[],"r":[]},"ayj":{"ag":[],"r":[]},"a71":{"ag":[],"r":[]},"b_L":{"au":[],"r":[]},"b_I":{"aB":[]},"bsS":{"ah":["aHz"]},"aIb":{"aB":[]},"bhZ":{"ah":["Uk"]},"bcs":{"ah":["ayj"]},"biD":{"ah":["a71"]},"aYH":{"au":[],"r":[]},"bdC":{"aB":[]},"bou":{"aB":[]},"bpu":{"aB":[]},"axG":{"ag":[],"r":[]},"Jf":{"ag":[],"r":[]},"ZR":{"ag":[],"r":[]},"Jn":{"au":[],"r":[]},"Nn":{"ag":[],"r":[]},"aDa":{"ah":["Nn"],"ex":[]},"bbf":{"ah":["axG"]},"bbt":{"au":[],"r":[]},"bbe":{"ah":["Jf"]},"P1":{"au":[],"r":[]},"aDd":{"ah":["ZR"]},"bpZ":{"aB":[]},"bg6":{"au":[],"r":[]},"bg5":{"au":[],"r":[]},"Vk":{"ag":[],"r":[]},"Vl":{"ag":[],"r":[]},"aD8":{"ag":[],"r":[]},"aq6":{"ag":[],"r":[]},"aDb":{"ah":["Vk"]},"biZ":{"ah":["Vl"]},"aD9":{"ah":["aD8"]},"btc":{"iO":[]},"aDc":{"ah":["aq6"]},"bto":{"au":[],"r":[]},"a72":{"ag":[],"r":[]},"biI":{"ah":["a72"]},"a7V":{"km":["fr<eL>"],"k8":["fr<eL>"]},"ahh":{"a29":[]},"aPU":{"iZ":[],"fe":[]},"avz":{"iZ":[],"fe":[]},"aRo":{"iZ":[],"fe":[]}}'))
var y={z:"Amri ya kifalme \xb7 bendi za muhuri juu na chini.",L:"Kichwa cha Mtu: Dollar elfu ishirini ($20,000)",f:"Mimi [Jina la Baba wa Binti], wa jamaa ya [Jina la Jamii ya Binti], Nyumba ya [Jina la Nyumba ya Binti]. Nimehowesha binti wangu aitwaye [Jina la Binti], na ndugu [Jina la Kijana], wa jamaa ya [Jina la Jamii ya Mume], Nyumba ya [Jina la Nyumba ya Mume], kijana wa [Jina la Baba wa Mume]. Makubaliano haya yanathibitishwa rasmi na pande zote mbili ili kuweka kumbukumbu na kuimarisha uhusiano mwema kati ya familia zote mbili.",O:"Mimi [Jina la Baba wa Mume], wa jamaa ya [Jina la Jamii ya Mume], Nyumba ya [Jina la Nyumba ya Mume]. Nimetowa mahali ya kuhoweya kijana wangu aitwaye [Jina la Kijana] na [Jina la Binti], binti wa [Jina la Baba wa Binti], wa jamaa ya [Jina la Jamii ya Binti], Nyumba ya [Jina la Nyumba ya Binti]. Makubaliano haya yanathibitishwa rasmi na pande zote mbili ili kuweka kumbukumbu na kuimarisha uhusiano mwema kati ya familia zote mbili.",s:"Mpaka mwembamba wa dhahabu \xb7 vichwa vya bluu ya kifalme.",Q:"Mpaka mwembamba wa dhahabu \xb7 vichwa vya dhahabu.",H:"Nguo ya kente yenye dirisha la karatasi katikati.",n:"Nguo ya udongo yenye alama \xb7 karatasi ndani.",M:'PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".',S:"The AI sent something I could not read. Try again.",g:"Your story appears here. Add a picture, then ask the AI to write it."}
var x=(function rtii(){var w=B.ax
return{bu:w("L8"),U:w("vd<pQ>"),bz:w("w"),M:w("eX<n>"),bo:w("jv"),g7:w("LE"),gc:w("ay<it?>"),bq:w("ay<~>"),cc:w("LR"),fS:w("Dw"),an:w("Hr"),bm:w("O<Rc>"),X:w("O<a2h>"),f3:w("O<aQD>"),aK:w("O<n2>"),V:w("O<ac>"),O:w("O<w>"),fA:w("O<lt>"),d5:w("O<ay<bu<H,+icon3d,picture(n?,n?)>>>"),bH:w("O<ay<dD>>"),fG:w("O<ay<~>>"),aF:w("O<n7>"),cd:w("O<aj<ji>>"),ez:w("O<a4<n,aC>>"),d:w("O<a4<n,@>>"),B:w("O<mm>"),h:w("O<ji>"),gE:w("O<z5>"),k:w("O<oc>"),g:w("O<lB>"),D:w("O<hZ>"),u:w("O<eI>"),m:w("O<uu>"),i:w("O<hw>"),aC:w("O<a7j>"),o:w("O<z7>"),e3:w("O<aC>"),dN:w("O<u>"),v:w("O<hn>"),cR:w("O<iM>"),J:w("O<j9>"),gx:w("O<oZ<n>>"),f2:w("O<+(a0,n)>"),L:w("O<+(n,n)>"),aD:w("O<+data,mimeType(n,n)>"),G:w("O<+(N,N)>"),ek:w("O<+(H,n)>"),n:w("O<+(H,H)>"),r:w("O<cP>"),s:w("O<n>"),aS:w("O<iO>"),p:w("O<r>"),eR:w("O<fe>"),fT:w("O<b78>"),bx:w("O<aDM>"),gz:w("O<aei>"),x:w("O<N>"),t:w("O<H>"),dS:w("O<aB?>"),bA:w("O<u?>"),Z:w("O<H?>"),cA:w("O<ce>"),A:w("cr<ah<ag>>"),gL:w("aj<oc>"),R:w("aj<hZ>"),j:w("aj<@>"),bW:w("aj<H>"),e:w("bu<H,+icon3d,picture(n?,n?)>"),P:w("a4<n,@>"),f:w("a4<@,@>"),gI:w("a4<H,+icon3d,picture(n?,n?)>"),bR:w("K<hw,r>"),eC:w("K<nD,n>"),cT:w("K<jB,C>"),dv:w("K<n,n>"),f0:w("K<n,r>"),gN:w("K<H,pt>"),gh:w("K<mq,jk<mq>>"),w:w("iz"),ei:w("it"),g2:w("r6"),fB:w("E5"),b6:w("z5"),gX:w("a7b"),dt:w("lb"),ea:w("oc"),bt:w("lB"),I:w("hZ"),F:w("eI"),fO:w("mq"),ff:w("uu"),fP:w("hw"),Q:w("vH"),dO:w("aq2"),a:w("cp"),C:w("aC"),dw:w("arF"),di:w("a7W"),Y:w("eL"),fz:w("+(n,n)"),dL:w("+(H,H)"),eb:w("+claimCode,qrPayload(n?,n)"),aH:w("+icon3d,picture(n?,n?)"),cz:w("EA"),dB:w("dw<u>"),bJ:w("dw<n>"),_:w("e_<n>"),N:w("n"),fw:w("pQ"),bO:w("ar"),K:w("bn<u>"),b:w("bn<N>"),E:w("dD"),W:w("cx<n>"),ac:w("cx<H>"),ex:w("kb<lB>"),cI:w("kb<n>"),cl:w("kb<N>"),b4:w("a2<l8>"),a8:w("a2<m_>"),fR:w("a2<+(n,n)>"),co:w("e8<u>"),l:w("r"),b2:w("bU<~>"),ev:w("pR<dX>"),dT:w("bg<~>"),cQ:w("azu"),q:w("mV"),y:w("R"),gR:w("N"),z:w("@"),S:w("H"),at:w("b9?"),gw:w("aj<a4<n,@>>?"),aT:w("aj<hZ>?"),c:w("aj<@>?"),aP:w("it?"),af:w("hZ?"),go:w("b_P?"),a6:w("a7k?"),cK:w("aC?"),bZ:w("+bytes,dataUrl,fileName(dD,n,n)?"),gl:w("+claimCode,qrPayload,token(n?,n,n)?"),T:w("n?"),dd:w("dD?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.aUz=new B.bH(A.ax,null,null,O.amG,null)
D.aUJ=new B.d9(0,-0.15)
D.aUL=new B.d9(0.62,0)
D.aUO=new B.d9(-0.35,-0.45)
D.aUY=new B.d9(0.9,-0.85)
D.aKF=new B.aW(30,30)
D.aWf=new B.bq(D.aKF,D.aKF,A.he,A.he)
D.aWt=new B.aA(A.b5,1,A.q,-1)
D.beE=new B.w(1,0.4196078431372549,0.2901960784313726,0.2,A.t)
D.aWF=new B.aA(D.beE,1,A.q,-1)
D.aWR=new B.aA(A.aE,1.5,A.q,-1)
D.aWW=new B.aA(A.b5,1.6,A.q,-1)
D.aXb=new B.aA(A.aE,1.4,A.q,-1)
D.aYz=new B.o(null,null,null,null,null,K.Gh,A.a6)
D.bT0=new B.a8(A.a3,A.a7,A.x,G.a26,null,null)
D.aYH=new B.o(null,null,null,null,null,D.bT0,A.a6)
D.a9Y=new B.o(A.aB,null,null,A.rM,null,null,A.n)
D.b8R=new B.w(1,0.16862745098039217,0.22745098039215686,0.3333333333333333,A.t)
D.beC=new B.w(1,0.0392156862745098,0.058823529411764705,0.10196078431372549,A.t)
D.cPI=w([D.b8R,D.beC],x.O)
D.eae=new B.bT(A.A,0.5,A.x,null,0,D.cPI,null,null)
D.aZ_=new B.o(null,null,null,null,null,D.eae,A.a6)
D.W8=new B.w(1,0.054901960784313725,0.08235294117647059,0.14901960784313725,A.t)
D.aXr=new B.bP(P.uI,A.Y,A.Y,A.Y)
D.aZ1=new B.o(D.W8,null,D.aXr,null,null,null,A.n)
D.bUI=new B.a8(A.a3,A.a7,A.x,A.Pu,null,null)
D.aZ8=new B.o(null,null,null,null,null,D.bUI,A.a6)
D.abu=new B.w(1,0.058823529411764705,0.058823529411764705,0.0784313725490196,A.t)
D.aZa=new B.o(D.abu,null,null,A.rN,null,null,A.n)
D.aZe=new B.o(A.kd,null,null,null,null,null,A.a6)
D.aXy=new B.bP(A.zO,A.Y,A.Y,A.Y)
D.aZh=new B.o(A_.acx,null,D.aXy,A.m1,null,null,A.n)
D.DC=new B.o(A.dS,null,null,null,null,null,A.a6)
D.aZo=new B.o(null,null,null,null,null,E.vD,A.a6)
D.cUr=w([E.adp,A.bX],x.O)
D.bUk=new B.a8(A.b0,A.b6,A.x,D.cUr,null,null)
D.aZs=new B.o(null,null,null,A.m1,null,D.bUk,A.n)
D.d3H=w([A.bj,A.dS,A.jN],x.O)
D.a0f=new B.a8(A.ax,A.aC,A.x,D.d3H,null,null)
D.aZF=new B.o(null,null,null,null,null,D.a0f,A.n)
D.aZG=new B.o(D.abu,null,null,A.kz,null,null,A.n)
D.ckN=w([A.dq,A.bj],x.O)
D.bUc=new B.a8(A.ax,A.aC,A.x,D.ckN,null,null)
D.aZK=new B.o(null,null,null,null,null,D.bUc,A.n)
D.aZU=new B.o(null,null,null,null,null,G.tV,A.a6)
D.b_c=new B.o(A.adq,null,null,null,null,null,A.a6)
D.b9B=new B.w(0.5647058823529412,0,0,0,A.t)
D.aa7=new B.ac(0,A.G,D.b9B,A.Rj,28)
D.b1j=new B.aUG()
D.b1S=new C.cp4()
D.b23=new C.b8H()
D.aaD=new B.cq(A.A,null,null,A.a03,null)
D.b4x=new B.fi(null,null,null,null,null,E.mV,null,null,null,null)
D.b2A=new B.cq(A.A,null,null,D.b4x,null)
D.bE7=new B.ae(A.dW,28,A.c,null,null,null)
D.b33=new B.cq(A.A,null,null,D.bE7,null)
D.b4u=new B.fi(2,null,null,null,null,A.bY,null,null,null,null)
D.b3p=new B.cq(A.A,null,null,D.b4u,null)
D.bEr=new B.ae(K.N9,40,A.bI,null,null,null)
D.b3q=new B.cq(A.A,null,null,D.bEr,null)
D.b5j=new B.w(1,1,0.9019607843137255,0.6549019607843137,A.t)
D.b5v=new B.w(1,0.10588235294117647,0.13333333333333333,0.19607843137254902,A.t)
D.b5T=new B.w(1,0.08235294117647059,0.10196078431372549,0.14901960784313725,A.t)
D.b5Z=new B.w(1,0.10980392156862745,0.07450980392156863,0.054901960784313725,A.t)
D.b6u=new B.w(1,0.47843137254901963,0.41568627450980394,0.27058823529411763,A.t)
D.b6L=new B.w(0.8,1,0.9450980392156862,0.9490196078431372,A.t)
D.b6M=new B.w(0.0784313725490196,0.788235294117647,0.6352941176470588,0.15294117647058825,A.t)
D.K9=new B.w(1,0.0392156862745098,0.08235294117647059,0.14901960784313725,A.t)
D.b7a=new B.w(0.2,0.9607843137254902,0.6196078431372549,0.043137254901960784,A.t)
D.b7f=new B.w(0.13333333333333333,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.t)
D.abO=new B.w(1,0.1411764705882353,0.09411764705882353,0.07058823529411765,A.t)
D.b7Y=new B.w(1,0.22745098039215686,0.16470588235294117,0.10196078431372549,A.t)
D.b8G=new B.w(1,0.9098039215686274,0.9333333333333333,0.9647058823529412,A.t)
D.ac1=new B.w(1,1,1,0.9725490196078431,A.t)
D.b8Y=new B.w(0,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.t)
D.b98=new B.w(1,1,0.5490196078431373,0.10196078431372549,A.t)
D.b9b=new B.w(0.6,0.9098039215686274,0.7058823529411765,0.7215686274509804,A.t)
D.b9l=new B.w(0.4,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.t)
D.b9G=new B.w(1,1,0.9568627450980393,0.8392156862745098,A.t)
D.bb0=new B.w(1,1,0.996078431372549,0.9725490196078431,A.t)
D.VT=new B.w(0.8509803921568627,0,0,0,A.t)
D.bb8=new B.w(1,0.0784313725490196,0.06666666666666667,0.047058823529411764,A.t)
D.bbe=new B.w(1,0.0784313725490196,0.06666666666666667,0.0392156862745098,A.t)
D.acO=new B.w(0.6,0,0,0,A.t)
D.acQ=new B.w(0,1,0.7019607843137254,0.2784313725490196,A.t)
D.bcB=new B.w(1,0.12156862745098039,0.10196078431372549,0.058823529411764705,A.t)
D.t8=new B.w(1,0.08235294117647059,0.12156862745098039,0.21176470588235294,A.t)
D.bd0=new B.w(1,0.35294117647058826,0.41568627450980394,0.5215686274509804,A.t)
D.bdr=new B.w(1,1,0.8784313725490196,0.6392156862745098,A.t)
D.bdO=new B.w(0.4,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.t)
D.adA=new B.w(1,0.47843137254901963,0.23137254901960785,0.2901960784313726,A.t)
D.Wi=new B.w(0,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.t)
D.Am=new B.w(1,0.5411764705882353,0.39215686274509803,0.09019607843137255,A.t)
D.KE=new B.w(1,0.0784313725490196,0.09803921568627451,0.16470588235294117,A.t)
D.j5=new B.w(1,0.07058823529411765,0.12941176470588237,0.23921568627450981,A.t)
D.adZ=new B.w(0,1,0.9686274509803922,0.8392156862745098,A.t)
D.Wt=new B.w(1,0.2901960784313726,0.17254901960784313,0.10588235294117647,A.t)
D.bh0=new B.w(1,0.24705882352941178,0.16470588235294117,0.0392156862745098,A.t)
D.bhu=new B.w(0.6,1,0.9686274509803922,0.9019607843137255,A.t)
D.bhI=new B.w(0.6,1,0.984313725490196,0.9215686274509803,A.t)
D.WM=new B.w(1,0.07450980392156863,0.10980392156862745,0.2,A.t)
D.biO=new B.w(1,0.8627450980392157,0.9215686274509803,0.9803921568627451,A.t)
D.x4=new B.w(1,0.9137254901960784,0.7686274509803922,0.41568627450980394,A.t)
D.bjh=new B.w(1,0.058823529411764705,0.0784313725490196,0.12549019607843137,A.t)
D.bjz=new B.hE(A.b2,!0,null,null)
D.f3v=new B.G(!0,A.az,null,null,null,null,22,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fsS=new B.x("Bio link",null,D.f3v,null,null,null,null,null,null,null,null,null)
D.b3j=new B.cq(A.A,null,null,D.fsS,null)
D.bjP=new B.hE(A.Vg,!0,D.b3j,null)
D.L2=new C.a36(0,"none")
D.af5=new C.a36(1,"deflate")
D.af6=new C.a36(2,"bzip2")
D.bkv=new B.kg(0.165,0.84,0.44,1)
D.cUK=w([A.cb,A.dO,A.aE],x.O)
D.bTt=new B.a8(A.ax,A.aC,A.x,D.cUK,null,null)
D.aYE=new B.o(null,null,null,null,null,D.bTt,A.n)
D.bNc=new B.ae(A.eR,null,A.ad,null,null,null)
D.b3V=new B.cq(A.A,null,null,D.bNc,null)
D.bl2=new B.kK(D.aYE,A.bd,D.b3V,null)
D.bhg=new B.w(0.058823529411764705,1,1,1,A.t)
D.cXN=w([A.bF,A.qA,A.qA,D.bhg],x.O)
D.cBN=w([0,0.32,0.7,1],x.x)
D.bU1=new B.a8(A.ax,A.aC,A.x,D.cXN,D.cBN,null)
D.aYt=new B.o(null,null,null,null,null,D.bU1,A.n)
D.bl8=new B.kK(D.aYt,A.bd,null,null)
D.bm8=new B.me(1,1,null,null,null,A.bm,null)
D.bmb=new B.me(1,null,null,null,null,D.Wt,null)
D.bmF=new B.b9(125e4)
D.bmL=new B.b9(17e4)
D.bmV=new B.b9(35964e8)
D.bn0=new B.b9(55e4)
D.bn4=new B.b9(68e4)
D.bnv=new B.i9(0,0,0,5)
D.bnM=new B.Q(0,16,16,0)
D.bnP=new B.Q(0,18,0,8)
D.bnX=new B.Q(0,36,0,36)
D.bo3=new B.Q(0,54,0,0)
D.boa=new B.Q(10,0,10,3)
D.bol=new B.i9(10,16,10,10)
D.box=new B.Q(10,6,4,6)
D.boA=new B.Q(10,8,10,6)
D.ag1=new B.Q(11,8,11,11)
D.boE=new B.Q(12,0,12,24)
D.boQ=new B.Q(12,12,12,4)
D.boT=new B.Q(12,12,8,12)
D.bp7=new B.Q(12,8,8,12)
D.bpu=new B.Q(14,14,14,0)
D.bpz=new B.Q(14,14,14,90)
D.bpS=new B.Q(16,10,16,16)
D.bpT=new B.Q(16,10,16,20)
D.agQ=new B.Q(16,6,16,28)
D.bqr=new B.Q(18,0,18,10)
D.bqt=new B.Q(18,0,18,30)
D.bqv=new B.Q(18,10,18,12)
D.bqw=new B.Q(18,10,18,14)
D.bqN=new B.Q(18,16,14,18)
D.bqS=new B.Q(18,18,18,12)
D.bqY=new B.Q(18,26,18,12)
D.br2=new B.Q(18,34,18,34)
D.br3=new B.Q(18,4,18,14)
D.br9=new B.Q(18,8,18,24)
D.brr=new B.Q(20,16,14,4)
D.brw=new B.Q(20,18,12,4)
D.brB=new B.Q(20,20,12,20)
D.brE=new B.Q(20,22,20,20)
D.brJ=new B.Q(20,6,20,6)
D.brS=new B.Q(22,18,22,18)
D.bs_=new B.Q(22,24,22,0)
D.bs2=new B.Q(22,24,22,4)
D.bsa=new B.Q(22,60,22,22)
D.bsg=new B.Q(24,24,24,22)
D.bsq=new B.Q(26,10,60,10)
D.bsx=new B.Q(28,44,28,44)
D.bsO=new B.Q(32,44,32,44)
D.bsW=new B.Q(38,30,38,20)
D.bt0=new B.Q(4,0,0,6)
D.btc=new B.i9(4,4,4,4)
D.btD=new B.i9(6,5,6,5)
D.btH=new B.Q(6,6,8,6)
D.btS=new B.Q(8,14,8,14)
D.btT=new B.Q(8,22,8,22)
D.bu0=new B.Q(8,6,12,6)
D.bu9=new B.Q(8,8,8,4)
D.ahJ=new B.Q(9,9,9,6)
D.buj=new B.i9(2.5,2.5,2.5,2.5)
D.buk=new B.Q(10.5,0,10.5,0)
D.bul=new B.Q(7,1.5,7,1.5)
D.cMX=w([0.393,0.769,0.189,0,0,0.349,0.686,0.168,0,0,0.272,0.534,0.131,0,0,0,0,0,1,0],x.x)
D.buB=new B.yv(null,null,D.cMX,A.A0)
D.cK7=w([0.2126,0.7152,0.0722,0,0,0.2126,0.7152,0.0722,0,0,0.2126,0.7152,0.0722,0,0,0,0,0,1,0],x.x)
D.buC=new B.yv(null,null,D.cK7,A.A0)
D.aPl=new B.G(!0,A.az,null,null,null,null,11,A.u,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fsc=new B.x("WORD DESIGN",null,D.aPl,null,null,null,null,null,null,null,null,null)
D.bv8=new B.bD(1,A.bi,D.fsc,null)
D.frT=new B.x("Slides database",null,Ab.ry,null,null,null,null,null,null,null,null,null)
D.fpc=new B.x("Admin only \xb7 keep as many as you like",null,U.aOQ,null,null,null,null,null,null,null,null,null)
D.dbj=w([D.frT,A.bA,D.fpc],x.p)
D.bkd=new B.fq(A.ah,A.e,A.j,A.F,null,A.p,null,0,D.dbj,null)
D.bvb=new B.bD(1,A.bi,D.bkd,null)
D.fjP=new B.x("NGMY logo",null,A.fN,null,null,null,null,null,null,null,null,null)
D.bve=new B.bD(1,A.bi,D.fjP,null)
D.f1p=new B.G(!0,A.ad,null,null,null,null,12,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fu7=new B.x("TALK TO THE EDITOR",null,D.f1p,null,null,null,null,null,null,null,null,null)
D.bvu=new B.bD(1,A.bi,D.fu7,null)
D.fdK=new B.x("Tell the AI what to change",null,Ab.ry,null,null,null,null,null,null,null,null,null)
D.bvO=new B.bD(1,A.bi,D.fdK,null)
D.bwF=new B.Dl(!0,"video/mp4")
D.f_I=new B.G(!0,A.c,null,null,null,null,16,A.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fbW=new B.x("Move presentations between devices",null,D.f_I,null,null,null,!1,null,null,1,null,null)
D.bwJ=new B.q9(A.eg,A.a3,A.f,D.fbW,null)
D.fd_=new B.x("Edit in Slides",null,A.jn,null,null,null,null,null,null,null,null,null)
D.bwK=new B.q9(A.eg,A.A,A.f,D.fd_,null)
D.bwZ=new B.dm(1,A.ci,D.bwK,null)
D.Zy=new B.a0(60988,"MaterialIcons",!1)
D.bzH=new B.a0(61352,"MaterialIcons",!1)
D.aje=new B.a0(61531,"MaterialIcons",!1)
D.bAT=new B.a0(63062,"MaterialIcons",!1)
D.bB0=new B.a0(63109,"MaterialIcons",!1)
D.bBb=new B.a0(63206,"MaterialIcons",!1)
D.ajY=new B.a0(63238,"MaterialIcons",!1)
D.a_3=new B.a0(63365,"MaterialIcons",!1)
D.a_4=new B.a0(63367,"MaterialIcons",!1)
D.a_5=new B.a0(63368,"MaterialIcons",!1)
D.ak9=new B.a0(63384,"MaterialIcons",!1)
D.bBL=new B.a0(63525,"MaterialIcons",!1)
D.bBO=new B.a0(63568,"MaterialIcons",!1)
D.bC8=new B.a0(983072,"MaterialIcons",!1)
D.bCw=new B.a0(983271,"MaterialIcons",!0)
D.all=new B.a0(983965,"MaterialIcons",!1)
D.alm=new B.a0(983966,"MaterialIcons",!1)
D.bDt=new B.a0(984592,"MaterialIcons",!1)
D.bDL=new B.ae(A.tH,16,A.az,null,null,null)
D.bDS=new B.ae(A.mm,null,A.c,null,null,null)
D.alw=new B.ae(A.pM,18,A.c,null,null,null)
D.bE8=new B.ae(A.B7,18,N.l4,null,null,null)
D.bEN=new B.ae(A.jh,11,null,null,null,null)
D.bEX=new B.ae(A.ZO,null,A.es,null,null,null)
D.bFv=new B.ae(A.qW,18,A.az,null,null,null)
D.bFB=new B.ae(A2.Bk,14,null,null,null,null)
D.bFC=new B.ae(A.e4,28,A.cj,null,null,null)
D.bFO=new B.ae(A.pN,20,A.c,null,null,null)
D.bFV=new B.ae(A.xZ,null,null,null,null,null)
D.bG0=new B.ae(A.iS,18,A.hv,null,null,null)
D.bG5=new B.ae(A.la,null,null,null,null,null)
D.bGy=new B.ae(A.a_k,28,A.c,null,null,null)
D.bAW=new B.a0(63065,"MaterialIcons",!1)
D.bGH=new B.ae(D.bAW,15,A.c,null,null,null)
D.bB1=new B.a0(63113,"MaterialIcons",!1)
D.bGN=new B.ae(D.bB1,null,A.ad,null,null,null)
D.bHa=new B.ae(A.vm,22,A.bK,null,null,null)
D.bHu=new B.ae(A.tG,18,null,null,null,null)
D.bHA=new B.ae(A.Bn,12,A.c,null,null,null)
D.bD5=new B.a0(983687,"MaterialIcons",!1)
D.bHL=new B.ae(D.bD5,null,A.bj,null,null,null)
D.bHS=new B.ae(A.hy,null,A.bj,null,null,null)
D.bIa=new B.ae(A.oH,22,A.c,null,null,null)
D.bIe=new B.ae(A.cA,13,A.c,null,null,null)
D.bIk=new B.ae(A.e4,26,A.ay,null,null,null)
D.bIn=new B.ae(A.r0,26,A.c,null,null,null)
D.Nm=new B.ae(A.jh,8,A.c,null,null,null)
D.bIF=new B.ae(A.pM,40,A.c,null,null,null)
D.bIG=new B.ae(A.byE,null,null,null,null,null)
D.bIK=new B.ae(A.tP,20,null,null,null,null)
D.bD4=new B.a0(983683,"MaterialIcons",!1)
D.bIU=new B.ae(D.bD4,null,A.aZ,null,null,null)
D.bIV=new B.ae(A.jh,16,A.bj,null,null,null)
D.bJf=new B.ae(A.r1,null,null,null,null,null)
D.am4=new B.ae(A.vo,22,A.c,null,null,null)
D.bJj=new B.ae(A.dW,17,A.c,null,null,null)
D.am5=new B.ae(A.jh,9,A.c,null,null,null)
D.bJo=new B.ae(A.vj,null,null,null,null,null)
D.byV=new B.a0(57744,"MaterialIcons",!1)
D.bJv=new B.ae(D.byV,null,null,null,null,null)
D.bJy=new B.ae(A.vj,16,null,null,null,null)
D.bDC=new B.a0(985181,"MaterialIcons",!1)
D.G8=new B.ae(D.bDC,null,null,null,null,null)
D.bJK=new B.ae(A.la,16,A.bK,null,null,null)
D.bCY=new B.a0(983615,"MaterialIcons",!1)
D.bJM=new B.ae(D.bCY,12,A.c,null,null,null)
D.amb=new B.ae(A.xG,16,null,null,null,null)
D.bJU=new B.ae(A.dW,21,A.c,null,null,null)
D.bJZ=new B.ae(A.hy,17,A.c,null,null,null)
D.bK_=new B.ae(A.vm,null,null,null,null,null)
D.bKe=new B.ae(A.a_I,20,A.az,null,null,null)
D.bKt=new B.ae(A.pL,22,E.mV,null,null,null)
D.bKA=new B.ae(A.pK,13,A.ad,null,null,null)
D.bKC=new B.ae(A.al7,20,A.az,null,null,null)
D.byC=new B.a0(57495,"MaterialIcons",!1)
D.bKH=new B.ae(D.byC,null,null,null,null,null)
D.bKL=new B.ae(A.nU,18,A.c,null,null,null)
D.bL5=new B.ae(A.tT,28,A.c,null,null,null)
D.bLf=new B.ae(D.ajY,null,A.aE,null,null,null)
D.bLg=new B.ae(A.pN,22,A.c,null,null,null)
D.amk=new B.ae(A.Zu,16,null,null,null,null)
D.bM1=new B.ae(A.vm,32,A.c,null,null,null)
D.bMK=new B.ae(A.iV,22,A.c,null,null,null)
D.bMO=new B.ae(A.r0,22,A.ad,null,null,null)
D.amz=new B.ae(A.tH,null,A.c_,null,null,null)
D.bNH=new B.ae(A.qT,18,null,null,null,null)
D.bOi=new B.ae(A.dW,18,A.cn,null,null,null)
D.a06=new B.ae(A.cA,18,A.az,null,null,null)
D.bOo=new B.ae(A.al1,null,null,null,null,null)
D.bOO=new B.e2(null,null,null,null,null,null,null,null,null,null,"Type here\u2026",null,A.aP8,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.ey,!0,null,null,null,null)
D.eT0=new B.G(!0,A.bJ,null,null,null,null,null,A.cv,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bP5=new B.e2(null,null,null,null,null,null,null,null,null,null,"Type here\u2026",null,D.eT0,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,A.af,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.ey,!0,null,null,null,null)
D.bPw=new B.e2(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"",null,null,null,null,null,null,null,null,null,null,null,A.ey,!0,null,null,null,null)
D.cQF=w([A.dS,A.aE],x.O)
D.bRg=new B.a8(A.a3,A.a7,A.x,D.cQF,null,null)
D.bRs=new B.a8(A.b0,A.b6,A.Tq,A.atC,null,null)
D.b5J=new B.w(1,0.5568627450980392,0.5411764705882353,0.5215686274509804,A.t)
D.b9J=new B.w(1,0.23529411764705882,0.22745098039215686,0.21568627450980393,A.t)
D.bcC=new B.w(1,0.7254901960784313,0.7058823529411765,0.6784313725490196,A.t)
D.b7Q=new B.w(1,0.1803921568627451,0.17254901960784313,0.16470588235294117,A.t)
D.cBP=w([D.b5J,D.b9J,D.bcC,D.b7Q],x.O)
D.bRL=new B.a8(A.ax,A.aC,A.x,D.cBP,A.GH,null)
D.dbq=w([A.ct,A.bz,A.b5],x.O)
D.bRN=new B.a8(A.b0,A.b6,A.Tq,D.dbq,null,null)
D.dcJ=w([A.bj,A.c8],x.O)
D.bRR=new B.a8(A.a3,A.a7,A.x,D.dcJ,null,null)
D.d7Z=w([A.hu,A.d9,A.aH],x.O)
D.bRT=new B.a8(A.ax,A.aC,A.x,D.d7Z,null,null)
D.cWj=w([A.cZ,A.f7],x.O)
D.bRX=new B.a8(A.a3,A.a7,A.x,D.cWj,null,null)
D.dbl=w([N.l4,A.d9],x.O)
D.anj=new B.a8(A.a3,A.a7,A.x,D.dbl,null,null)
D.bah=new B.w(1,0.9686274509803922,0.8901960784313725,0.6313725490196078,A.t)
D.dbi=w([D.bah,D.x4,A.bY],x.O)
D.bS1=new B.a8(A.a3,A.a7,A.x,D.dbi,null,null)
D.cSg=w([A.b8,A.d_,A.ff],x.O)
D.bS2=new B.a8(A.ax,A.aC,A.x,D.cSg,null,null)
D.NA=new B.a8(A.a3,A.a7,A.x,A.GV,null,null)
D.bi4=new B.w(1,0.9019607843137255,0.7568627450980392,0.3607843137254902,A.t)
D.cuW=w([D.bi4,A.bY,A.j7],x.O)
D.ano=new B.a8(A.ax,A.aC,A.x,D.cuW,null,null)
D.d0j=w([A.wT,A.aw,D.Am],x.O)
D.bT1=new B.a8(A.a3,A.a7,A.x,D.d0j,null,null)
D.bji=new B.w(1,0.43137254901960786,0.41568627450980394,0.396078431372549,A.t)
D.b8F=new B.w(1,0.6627450980392157,0.6431372549019608,0.615686274509804,A.t)
D.bdE=new B.w(1,0.3333333333333333,0.3215686274509804,0.3058823529411765,A.t)
D.cRq=w([D.bji,D.b8F,D.bdE],x.O)
D.anp=new B.a8(A.a3,A.a7,A.x,D.cRq,null,null)
D.baj=new B.w(1,0.0392156862745098,0.06666666666666667,0.13333333333333333,A.t)
D.bUY=w([Aw.aeN,D.baj],x.O)
D.bTa=new B.a8(A.b0,A.b6,A.x,D.bUY,null,null)
D.cPw=w([A.mS,A.bI],x.O)
D.bTe=new B.a8(A.b0,A.b6,A.x,D.cPw,null,null)
D.d5a=w([A.aE,A.dO],x.O)
D.bTk=new B.a8(A.a3,A.a7,A.x,D.d5a,null,null)
D.adL=new B.w(1,0.1803921568627451,0.25882352941176473,0.4392156862745098,A.t)
D.avi=w([D.adL,D.j5,D.K9],x.O)
D.bTM=new B.a8(A.ax,A.aC,A.x,D.avi,null,null)
D.cuO=w([A.dv,A.dK],x.O)
D.bTX=new B.a8(A.b0,A.b6,A.x,D.cuO,null,null)
D.d2o=w([A.uN,Az.Ef],x.O)
D.bUK=new B.a8(A.a3,A.a7,A.x,D.d2o,null,null)
D.flj=new B.x("Which Bio link?",null,A.cx,null,null,null,null,null,null,null,null,null)
D.bUV=new B.pz(null,D.flj,null,null,null,null,null,null,null,null,!0,null,null,!1,null,null,null,!1,null,null,null,null,null,null,null,null,!0,null,null)
D.yp=w([82,9,106,213,48,54,165,56,191,64,163,158,129,243,215,251,124,227,57,130,155,47,255,135,52,142,67,68,196,222,233,203,84,123,148,50,166,194,35,61,238,76,149,11,66,250,195,78,8,46,161,102,40,217,36,178,118,91,162,73,109,139,209,37,114,248,246,100,134,104,152,22,212,164,92,204,93,101,182,146,108,112,72,80,253,237,185,218,94,21,70,87,167,141,157,132,144,216,171,0,140,188,211,10,247,228,88,5,184,179,69,6,208,44,30,143,202,63,15,2,193,175,189,3,1,19,138,107,58,145,17,65,79,103,220,234,151,242,207,206,240,180,230,115,150,172,116,34,231,173,53,133,226,249,55,232,28,117,223,110,71,241,26,113,29,41,197,137,111,183,98,14,170,24,190,27,252,86,62,75,198,210,121,32,154,219,192,254,120,205,90,244,31,221,168,51,136,7,199,49,177,18,16,89,39,128,236,95,96,81,127,169,25,181,74,13,45,229,122,159,147,201,156,239,160,224,59,77,174,42,245,176,200,235,187,60,131,83,153,97,23,43,4,126,186,119,214,38,225,105,20,99,85,33,12,125],x.t)
D.a3Z=new C.kN(2,"elegantNavy")
D.fTz=w([A.Wg,D.j5,A.bY],x.O)
D.jD=new C.xd(0,"classic")
D.a3M=new C.ji("kuhowa_elegant_navy","Kuhowa \u2014 Bluu ya Kifalme",y.s,D.a3Z,4294967035,4279378237,4290283019,D.jD)
D.aEp=new C.kN(3,"elegantGold")
D.b5i=new B.w(1,1,0.9882352941176471,0.9529411764705882,A.t)
D.b6d=new B.w(1,0.6509803921568628,0.5176470588235295,0.22745098039215686,A.t)
D.acn=new B.w(1,0.4196078431372549,0.2901960784313726,0.07058823529411765,A.t)
D.fT1=w([D.b5i,D.b6d,D.acn],x.O)
D.a3K=new C.ji("kuhowa_elegant_gold","Kuhowa \u2014 Dhahabu",y.Q,D.aEp,4294966515,4281016592,4289102906,D.jD)
D.dxp=new C.kN(22,"goldRibbon")
D.fSY=w([A.Wg,D.j5,A.hV],x.O)
D.a3D=new C.ji("kuhowa_gold_ribbon","Utepe wa Dhahabu","Pembe za bluu na dhahabu \xb7 almasi kati ya kila upande.",D.dxp,4294967035,4279378237,4291404327,D.jD)
D.dxq=new C.kN(23,"goldBaroque")
D.acZ=new B.w(1,1,0.9647058823529412,0.8941176470588236,A.t)
D.fT3=w([D.acZ,A.aw,A.j7],x.O)
D.a3E=new C.ji("kuhowa_gold_baroque","Ukanda wa Dhahabu","Ukanda mzito wa dhahabu \xb7 rosette kwenye pembe.",D.dxq,4294964964,4283053072,4292128567,D.jD)
D.dxs=new C.kN(4,"elegantEmerald")
D.b7l=new B.w(1,0.9647058823529412,0.984313725490196,0.9725490196078431,A.t)
D.b8c=new B.w(1,0.054901960784313725,0.23137254901960785,0.1803921568627451,A.t)
D.fT9=w([D.b7l,D.b8c,A.hV],x.O)
D.a3F=new C.ji("kuhowa_elegant_emerald","Kuhowa \u2014 Zumaridi","Mpaka mwembamba wa dhahabu \xb7 vichwa vya kijani ya zumaridi.",D.dxs,4294376440,4279122734,4291404327,D.jD)
D.dxt=new C.kN(5,"elegantBurgundy")
D.bbD=new B.w(1,1,0.9686274509803922,0.9647058823529412,A.t)
D.fTg=w([D.bbD,A.abG,A.hV],x.O)
D.a3I=new C.ji("kuhowa_elegant_burgundy","Kuhowa \u2014 Mvinyo","Mpaka mwembamba wa dhahabu \xb7 vichwa vya rangi ya mvinyo.",D.dxt,4294965238,4283043359,4291404327,D.jD)
D.dxm=new C.kN(19,"goldFiligree")
D.KL=new B.w(1,1,0.984313725490196,0.9529411764705882,A.t)
D.fT4=w([D.KL,A.aw,A.j7],x.O)
D.a3G=new C.ji("kuhowa_gold_filigree","Dhahabu ya Filigree","Mpaka wa dhahabu mara tatu \xb7 pembe za mapambo.",D.dxm,4294966259,4279378237,4292128567,D.jD)
D.dxn=new C.kN(20,"goldLaurel")
D.bhV=new B.w(1,0.47843137254901963,0.3607843137254902,0.0784313725490196,A.t)
D.fTh=w([A.K2,A.hV,D.bhV],x.O)
D.a3H=new C.ji("kuhowa_gold_laurel","Taji ya Dhahabu","Majani ya dhahabu kando \xb7 almasi kwenye pembe.",D.dxn,4294966776,4282000405,4291404327,D.jD)
D.dxo=new C.kN(21,"goldCrest")
D.abx=new B.w(1,1,0.9725490196078431,0.9254901960784314,A.t)
D.bi1=new B.w(1,0.4196078431372549,0.30980392156862746,0.07058823529411765,A.t)
D.fT6=w([D.abx,A.aw,D.bi1],x.O)
D.a3L=new C.ji("kuhowa_gold_crest","Muhuri wa Dhahabu","Medali za dhahabu kwenye pembe \xb7 shanga za lulu.",D.dxo,4294965484,4283053072,4292128567,D.jD)
D.dxr=new C.kN(24,"goldStar")
D.bjc=new B.w(1,1,0.9882352941176471,0.9647058823529412,A.t)
D.fTa=w([D.bjc,A.aw,D.j5],x.O)
D.a3J=new C.ji("kuhowa_gold_star","Nyota ya Dhahabu","Nyota za dhahabu kwenye pembe \xb7 mstari wa bluu ndani.",D.dxr,4294966518,4279378237,4292128567,D.jD)
D.Gj=w([D.a3M,D.a3K,D.a3D,D.a3E,D.a3F,D.a3I,D.a3G,D.a3H,D.a3L,D.a3J],x.h)
D.q_=new C.mq(0,"blank")
D.R8=new C.mq(1,"title")
D.mu=new C.mq(2,"titleContent")
D.dS1=new C.mq(3,"twoColumn")
D.Ch=new C.mq(4,"section")
D.dS2=new C.mq(5,"comparison")
D.Hu=new C.mq(6,"flashcard")
D.Hv=new C.mq(7,"quiz")
D.Hw=new C.mq(8,"worksheet")
D.anL=w([D.q_,D.R8,D.mu,D.dS1,D.Ch,D.dS2,D.Hu,D.Hv,D.Hw],B.ax("O<mq>"))
D.awg=w([Ap.VD,A.dK],x.O)
D.kl=w([A.bY,A.bK,A.hU,A.hE,D.Am],x.O)
D.dtj=new C.iV("fireworks","Royal Fireworks","Thank you for celebrating with us",D.awg,D.kl)
D.bid=new B.w(1,0.2901960784313726,0.050980392156862744,0.11764705882352941,A.t)
D.bbB=new B.w(1,0.07058823529411765,0.011764705882352941,0.0392156862745098,A.t)
D.cPJ=w([D.bid,D.bbB],x.O)
D.dta=new C.iV("confetti","Golden Confetti","Together we rise",D.cPJ,D.kl)
D.cN1=w([A.ny,A.Vj],x.O)
D.dtb=new C.iV("crown","Crown of Glory","Built for our community",D.cN1,D.kl)
D.b8w=new B.w(1,0.011764705882352941,0.10588235294117647,0.1803921568627451,A.t)
D.bbg=new B.w(1,0.00392156862745098,0.023529411764705882,0.058823529411764705,A.t)
D.cTy=w([D.b8w,D.bbg],x.O)
D.tX=w([A.bJ,A.aQ,A.c,A.aL,A.ak],x.O)
D.dt5=new C.iV("aurora","Aurora Gala","A brighter future, together",D.cTy,D.tX)
D.bcE=new B.w(1,0.027450980392156862,0.01568627450980392,0.00392156862745098,A.t)
D.d2u=w([G.aba,D.bcE],x.O)
D.dtm=new C.iV("champagne","Champagne Toast","Cheers to every member",D.d2u,D.kl)
D.dtn=new C.iV("diamonds","Diamond Rain","Every member is a jewel",Y.awR,D.tX)
D.b64=new B.w(1,0.3568627450980392,0.16470588235294117,0.023529411764705882,A.t)
D.baO=new B.w(1,0.10196078431372549,0.043137254901960784,0.00784313725490196,A.t)
D.d7i=w([D.b64,D.baO],x.O)
D.dt0=new C.iV("starburst","Golden Starburst","Thank you!",D.d7i,D.kl)
D.bV3=w([A.f6,A.wX],x.O)
D.abj=new B.w(1,0.615686274509804,0.3058823529411765,0.3607843137254902,A.t)
D.P8=w([A.oo,A.io,A.uZ,A.mK,D.abj],x.O)
D.dtu=new C.iV("balloons","Luxury Balloons","Let's celebrate",D.bV3,D.P8)
D.cMl=w([A.Vr,A.w],x.O)
D.dti=new C.iV("galaxy","Galaxy Spiral","The sky is not the limit",D.cMl,D.tX)
D.bgk=new B.w(1,0.047058823529411764,0.00392156862745098,0.00392156862745098,A.t)
D.d_9=w([A.kc,D.bgk],x.O)
D.dtd=new C.iV("redcarpet","Red Carpet","Tonight we shine",D.d_9,D.kl)
D.bef=new B.w(1,0.10980392156862745,0.0784313725490196,0.0196078431372549,A.t)
D.bcr=new B.w(1,0.0196078431372549,0.011764705882352941,0.00392156862745098,A.t)
D.d3o=w([D.bef,D.bcr],x.O)
D.dt2=new C.iV("coins","Gold Coin Rain","Every contribution counts",D.d3o,D.kl)
D.d9R=w([A.dv,A.hD],x.O)
D.dt8=new C.iV("lanterns","Sky Lanterns","Lighting the way together",D.d9R,D.kl)
D.b9p=new B.w(1,0.0784313725490196,0.00784313725490196,0.0392156862745098,A.t)
D.cKo=w([A.wZ,D.b9p],x.O)
D.dt4=new C.iV("hearts","Floating Hearts","Made with love",D.cKo,D.P8)
D.b6E=new B.w(1,0.23137254901960785,0.0392156862745098,0.10980392156862745,A.t)
D.b7r=new B.w(1,0.058823529411764705,0.00784313725490196,0.027450980392156862,A.t)
D.dbg=w([D.b6E,D.b7r],x.O)
D.dtt=new C.iV("petals","Rose Petals","Thank you, from our hearts",D.dbg,D.P8)
D.bhe=new B.w(1,0.00784313725490196,0.06274509803921569,0.0392156862745098,A.t)
D.d7C=w([A.l3,D.bhe],x.O)
D.dt_=new C.iV("butterflies","Golden Butterflies","New beginnings",D.d7C,D.kl)
D.bdB=new B.w(1,0.0392156862745098,0.0392156862745098,0.12156862745098039,A.t)
D.cLk=w([D.bdB,A.w],x.O)
D.dtl=new C.iV("neon","Neon Night","Let's go!",D.cLk,D.tX)
D.baw=new B.w(1,0.0196078431372549,0.00392156862745098,0.050980392156862744,A.t)
D.d5k=w([A.Kq,D.baw],x.O)
D.dto=new C.iV("disco","Disco Ball","Party time",D.d5k,D.tX)
D.be7=new B.w(1,0.11764705882352941,0.0392156862745098,0.1803921568627451,A.t)
D.d4T=w([A.hu,D.be7],x.O)
D.dt3=new C.iV("sunrise","Golden Sunrise","A new day for our community",D.d4T,D.kl)
D.d4w=w([A.qE,A.dK],x.O)
D.dtp=new C.iV("pearls","Ocean Pearls","Deep roots, bright future",D.d4w,D.tX)
D.b8B=new B.w(1,0.047058823529411764,0.11764705882352941,0.22745098039215686,A.t)
D.d4K=w([D.b8B,A.dK],x.O)
D.dts=new C.iV("snow","Winter Gala","Warm wishes to all",D.d4K,D.tX)
D.b5r=new B.w(1,0.0784313725490196,0.13725490196078433,0.10196078431372549,A.t)
D.b6o=new B.w(1,0.01568627450980392,0.03137254901960784,0.0196078431372549,A.t)
D.dae=w([D.b5r,D.b6o],x.O)
D.dth=new C.iV("laurel","Laurel Victory","We did it together",D.dae,D.kl)
D.b5h=new B.w(1,0.12156862745098039,0.06274509803921569,0.2,A.t)
D.bbc=new B.w(1,0.027450980392156862,0.011764705882352941,0.050980392156862744,A.t)
D.cJw=w([D.b5h,D.bbc],x.O)
D.dtr=new C.iV("ribbons","Silk Ribbons","Elegance in every step",D.cJw,D.kl)
D.bcb=new B.w(1,0.023529411764705882,0.01568627450980392,0.00784313725490196,A.t)
D.cuL=w([G.Al,D.bcb],x.O)
D.dte=new C.iV("kente","Kente Pride","Proud of our roots",D.cuL,D.kl)
D.beN=new B.w(1,0.1411764705882353,0.10196078431372549,0.0196078431372549,A.t)
D.bhy=new B.w(1,0.027450980392156862,0.0196078431372549,0.00392156862745098,A.t)
D.cV3=w([D.beN,D.bhy],x.O)
D.dt9=new C.iV("trophy","Trophy Shine","Winners together",D.cV3,D.kl)
D.d4Q=w([Aq.Kf,A.w],x.O)
D.dt1=new C.iV("shooting","Shooting Stars","Make a wish",D.d4Q,D.tX)
D.b5y=new B.w(1,0.10980392156862745,0.07058823529411765,0.023529411764705882,A.t)
D.aeA=new B.w(1,0.0196078431372549,0.011764705882352941,0.00784313725490196,A.t)
D.dau=w([D.b5y,D.aeA],x.O)
D.dtf=new C.iV("bokeh","Golden Bokeh","Shine bright",D.dau,D.kl)
D.b5U=new B.w(1,0.0392156862745098,0.058823529411764705,0.1411764705882353,A.t)
D.d_Y=w([D.b5U,A.w],x.O)
D.dt7=new C.iV("orbits","Golden Orbits","Always moving forward",D.d_Y,D.kl)
D.bhf=new B.w(1,0.0392156862745098,0.011764705882352941,0.047058823529411764,A.t)
D.cXG=w([A.acl,D.bhf],x.O)
D.dtc=new C.iV("flowers","Blooming Garden","Growing together",D.cXG,D.P8)
D.b5H=new B.w(1,0.07450980392156863,0.027450980392156862,0.1803921568627451,A.t)
D.b6i=new B.w(1,0.00784313725490196,0.00392156862745098,0.03137254901960784,A.t)
D.d9k=w([D.b5H,D.b6i],x.O)
D.dt6=new C.iV("music","Music Party","Celebrate with us",D.d9k,D.tX)
D.b7b=new B.w(1,0.16470588235294117,0.0392156862745098,0.22745098039215686,A.t)
D.bhY=new B.w(1,0.027450980392156862,0.00784313725490196,0.047058823529411764,A.t)
D.cKA=w([D.b7b,D.bhY],x.O)
D.dtq=new C.iV("mandala","Royal Mandala","Harmony and unity",D.cKA,D.kl)
D.cXL=w([G.Al,D.aeA],x.O)
D.dtk=new C.iV("sparklers","Golden Sparklers","Light up the night",D.cXL,D.kl)
D.dtg=new C.iV("city","City Lights","The whole city celebrates",D.awg,D.kl)
D.Gs=w([D.dtj,D.dta,D.dtb,D.dt5,D.dtm,D.dtn,D.dt0,D.dtu,D.dti,D.dtd,D.dt2,D.dt8,D.dt4,D.dtt,D.dt_,D.dtl,D.dto,D.dt3,D.dtp,D.dts,D.dth,D.dtr,D.dte,D.dt9,D.dt1,D.dtf,D.dt7,D.dtc,D.dt6,D.dtq,D.dtk,D.dtg],B.ax("O<iV>"))
D.efe=new B.y("","No ring")
D.etP=new B.y("platinum","Platinum")
D.eqP=new B.y("glow","Glow")
D.eiC=new B.y("double","Double line")
D.ehx=new B.y("framed","Gallery frame")
D.eeS=new B.y("rosegold","Rose gold")
D.erz=new B.y("jewels","Jeweled")
D.eoi=new B.y("aurora","Aurora")
D.BE=w([D.efe,A.a5h,D.etP,D.eqP,H.aKU,D.eiC,A.a5j,D.ehx,D.eeS,D.erz,D.eoi],x.L)
D.cer=w([D.a3G,D.a3H,D.a3L,D.a3D,D.a3E,D.a3J],x.h)
D.bK7=new B.ae(G.aiP,16,null,null,null,null)
D.b0F=new B.vd(A.bg,D.bK7,null,x.U)
D.bz3=new B.a0(58027,"MaterialIcons",!1)
D.bDR=new B.ae(D.bz3,16,null,null,null,null)
D.b0D=new B.vd(A.L,D.bDR,null,x.U)
D.bz4=new B.a0(58030,"MaterialIcons",!1)
D.bHR=new B.ae(D.bz4,16,null,null,null,null)
D.b0G=new B.vd(A.dL,D.bHR,null,x.U)
D.ckB=w([D.b0F,D.b0D,D.b0G],B.ax("O<vd<pQ>>"))
D.cs9=w([A.Aq,A.hg],x.O)
D.csa=w([A.b8,A.bo,A.ff],x.O)
D.OY=w([A.bK,A.hE,A.hU,A.aw,A.mK],x.O)
D.cuR=w([A.bY,D.j5,D.K9],x.O)
D.cvo=w([1,2,4,8,16,32,64,128,27,54,108,216,171,77,154,47,94,188,99,198,151,53,106,212,179,125,250,239,197,145],x.t)
D.ecV=new B.y(4278913286,4280030216)
D.edc=new B.y(4279373061,4278518787)
D.edj=new B.y(4279898630,4278847235)
D.cUv=w([D.ecV,D.edc,D.edj],x.n)
D.cQo=w(["\u265b","\u269c","\u2726"],x.s)
D.dxk=new C.xf("Royal Onyx & Gold",D.cUv,4292128567,4294370209,4294965479,3874020544,D.cQo)
D.ecI=new B.y(4278326799,4278598442)
D.ecK=new B.y(4278395929,4278258953)
D.ecR=new B.y(4278599728,4278327826)
D.d9I=w([D.ecI,D.ecK,D.ecR],x.n)
D.cLc=w(["\u269c","\u2756","\u2727"],x.s)
D.dxh=new C.xf("Imperial Emerald",D.d9I,4293050997,4294699968,4294180856,3872254170,D.cLc)
D.ecL=new B.y(4278455076,4278918747)
D.ecQ=new B.y(4278587439,4278322714)
D.ed3=new B.y(4279051376,4278455076)
D.d7V=w([D.ecL,D.ecQ,D.ed3],x.n)
D.d0y=w(["\u2654","\u2726","\u2748"],x.s)
D.dxb=new C.xf("Sapphire Crown",D.d7V,4291417834,4294967295,4294310143,3871986666,D.d0y)
D.edh=new B.y(4279894534,4283041554)
D.edt=new B.y(4281008906,4279042307)
D.edB=new B.y(4284221976,4279894534)
D.ddh=w([D.edh,D.edt,D.edB],x.n)
D.cMt=w(["\u265b","\u2766","\u2726"],x.s)
D.dxd=new C.xf("Ruby Throne",D.ddh,4293378685,4294963145,4294964466,3874213833,D.cMt)
D.edb=new B.y(4279371039,4281995100)
D.edl=new B.y(4280092723,4278714896)
D.edy=new B.y(4283045242,4279371039)
D.da3=w([D.edb,D.edl,D.edy],x.n)
D.d8g=w(["\u2655","\u2756","\u2727"],x.s)
D.dxi=new C.xf("Amethyst Palace",D.da3,4293314984,4294963421,4294702591,3873229802,D.d8g)
D.ecN=new B.y(4278519045,4280032287)
D.ed4=new B.y(4279111184,4278321666)
D.edq=new B.y(4280492839,4278716426)
D.d6Q=w([D.ecN,D.ed4,D.edq],x.n)
D.cZX=w(["\u2726","\u25c6","\u2742"],x.s)
D.dxf=new C.xf("Obsidian & Platinum",D.d6Q,4293256418,4294967295,4294638330,3872378836,D.cZX)
D.edi=new B.y(4279896588,4282194463)
D.edr=new B.y(4280553487,4279043334)
D.edz=new B.y(4283048488,4279896588)
D.cZs=w([D.edi,D.edr,D.edz],x.n)
D.dbE=w(["\u2766","\u273f","\u2727"],x.s)
D.dxc=new C.xf("Rose Gold Velvet",D.cZs,4293440672,4294960345,4294964979,3874214602,D.dbE)
D.ecO=new B.y(4278520340,4279180595)
D.ecT=new B.y(4278718495,4278322443)
D.edf=new B.y(4279510591,4278520340)
D.cBx=w([D.ecO,D.ecT,D.edf],x.n)
D.d_C=w(["\u269c","\u2736","\u2756"],x.s)
D.dxg=new C.xf("Midnight Brass",D.cBx,4291405148,4293975208,4294439914,3872837564,D.d_C)
D.edO=new B.y(4294703086,4293780428)
D.edK=new B.y(4294307549,4293187253)
D.edP=new B.y(4294966517,4293977807)
D.cOw=w([D.edO,D.edK,D.edP],x.n)
D.d00=w(["\u269c","\u265b","\u2726"],x.s)
D.dxj=new C.xf("Ivory Marble & Gold",D.cOw,4289760572,4286209048,4280951062,3863625518,D.d00)
D.ecZ=new B.y(4278978566,4280555024)
D.ede=new B.y(4279504137,4278518530)
D.edv=new B.y(4281211923,4278978566)
D.cMk=w([D.ecZ,D.ede,D.edv],x.n)
D.d8Y=w(["\u2742","\u2726","\u265c"],x.s)
D.dxe=new C.xf("Onyx & Copper",D.cMk,4291856987,4294365880,4294964718,3873885630,D.d8Y)
D.cvw=w([D.dxk,D.dxh,D.dxb,D.dxd,D.dxi,D.dxf,D.dxc,D.dxg,D.dxj,D.dxe],B.ax("O<xf>"))
D.cxN=w([A.aw,D.Am,A.hE],x.O)
D.ekI=new B.y("Original",null)
D.ekQ=new B.y("Wide 16:9",1.7777777777777777)
D.en3=new B.y("Landscape 3:2",1.5)
D.ekb=new B.y("Photo 4:3",1.3333333333333333)
D.elT=new B.y("Square",1)
D.exo=new B.y("Portrait 3:4",0.75)
D.atK=w([D.ekI,D.ekQ,D.en3,D.ekb,D.elT,D.exo],B.ax("O<+(n,N?)>"))
D.atL=w([A.hE,A.bV,A.b7,A.by],x.O)
D.end=new B.y("","Original")
D.ep1=new B.y("circle","Circle")
D.euz=new B.y("rounded","Rounded")
D.evt=new B.y("triangle","Triangle")
D.er2=new B.y("hexagon","Hexagon")
D.epq=new B.y("diamond","Diamond")
D.eoh=new B.y("arch","Arch")
D.BJ=w([D.end,D.ep1,D.euz,D.evt,D.er2,D.epq,D.eoh],x.L)
D.dsq=new C.l8("classic_blue","Classic Blue","Normal",A.bj,A.c,A.ke,A.dq,A.aK)
D.dsG=new C.l8("campus_green","Campus Green","Normal",A.aZ,A.mQ,A.t4,A.h3,A.eu)
D.dsx=new C.l8("warm_sand","Warm Sand","Normal",A.dT,A.hU,A.bK,A.it,A.nC)
D.dsE=new C.l8("slate_minimal","Slate Minimal","Normal",A.bv,A.aQ,A.aL,A.M,A.aK)
D.dsp=new C.l8("coral_fresh","Coral Fresh","Normal",A.cb,A.iq,A.qw,A.jP,A.rZ)
D.dsF=new C.l8("lavender_calm","Lavender Calm","Normal",A.b5,A.pg,A.Aa,A.pj,A.jr)
D.dsr=new C.l8("ocean_breeze","Ocean Breeze","Normal",A.f7,A.qH,A.rU,A.uP,A.nD)
D.adR=new B.w(1,0.9803921568627451,0.9607843137254902,1,A.t)
D.dsC=new C.l8("berry_pop","Berry Pop","Normal",A.fg,D.adR,A.k9,G.WK,A.ED)
D.dss=new C.l8("midnight_pro","Midnight Pro","Professional",A.aE,A.M,A.dv,A.k9,A.cp)
D.dsB=new C.l8("executive_navy","Executive Navy","Professional",A.d6,A.add,A.dq,A.l1,A.bJ)
D.dsz=new C.l8("boardroom_charcoal","Boardroom Charcoal","Professional",A.ak,A.bm,A.M,A.aQ,A.cp)
D.dst=new C.l8("corporate_steel","Corporate Steel","Professional",A.mO,A.M,A.ma,A.fh,A.bJ)
D.dsw=new C.l8("gold_luxe","Gold Luxe","Luxury",A.om,A.dF,A.on,A.lB,A.bK)
D.beb=new B.w(1,0.10196078431372549,0.0392156862745098,0.058823529411764705,A.t)
D.dsA=new C.l8("rose_gold_elite","Rose Gold Elite","Luxury",A.hg,D.beb,A.WA,A.io,A.mK)
D.dsD=new C.l8("platinum_night","Platinum Night","Luxury",A.cp,A.dK,A.bm,A.aQ,A.aL)
D.dsH=new C.l8("emerald_prestige","Emerald Prestige","Luxury",A.aV,A.pm,A.eX,A.pu,A.js)
D.dso=new C.l8("royal_purple","Royal Purple","Luxury",A.mP,A.VK,A.jr,A.k9,A.K1)
D.dsy=new C.l8("neon_pitch","Neon Pitch","Bold",A.b7,A.dK,A.M,A.b1,A.aL)
D.dsv=new C.l8("crimson_impact","Crimson Impact","Bold",A.bI,A.kc,A.er,A.tg,A.f3)
D.dsu=new C.l8("sunset_gallery","Sunset Gallery","Bold",A.fC,A.rZ,A.jP,A.qw,A.op)
D.GB=w([D.dsq,D.dsG,D.dsx,D.dsE,D.dsp,D.dsF,D.dsr,D.dsC,D.dss,D.dsB,D.dsz,D.dst,D.dsw,D.dsA,D.dsD,D.dsH,D.dso,D.dsy,D.dsv,D.dsu],B.ax("O<l8>"))
D.cJd=w([A.bY,D.j5],x.O)
D.cZI=w(["\ud83d\ude00","\ud83d\ude03","\ud83d\ude04","\ud83d\ude01","\ud83d\ude0a","\ud83d\ude0e","\ud83e\udd29","\ud83e\udd73","\ud83d\ude07","\ud83e\udd17","\ud83d\ude4c","\ud83d\udc4f","\ud83e\udd1d","\ud83d\udc4d","\ud83d\udc4b","\ud83d\udcaa","\ud83d\ude4f","\u2728"],x.s)
D.eo3=new B.y("Faces & people",D.cZI)
D.cxR=w(["\ud83d\udca1","\ud83c\udfaf","\ud83d\ude80","\ud83d\udcc8","\ud83d\udcca","\ud83d\udccc","\ud83d\udccd","\ud83d\udce3","\ud83d\udd14","\ud83e\udded","\ud83d\udee0\ufe0f","\ud83d\udd27","\u2699\ufe0f","\ud83e\udde0","\ud83d\udcda","\ud83d\udcdd","\u270f\ufe0f","\ud83d\udcd6","\ud83d\uddc2\ufe0f","\ud83d\udcc5","\u23f0","\u2705","\u274c","\u26a0\ufe0f","\u2753","\u2757"],x.s)
D.ebO=new B.y("Ideas & work",D.cxR)
D.cQT=w(["\ud83c\udf3f","\ud83c\udf31","\ud83c\udf33","\ud83c\udf38","\ud83c\udf3c","\ud83c\udf3b","\ud83c\udf1e","\ud83c\udf08","\ud83c\udf0a","\ud83d\udd25","\ud83d\udca7","\u2744\ufe0f","\ud83c\udf19","\u2b50","\ud83c\udf1f","\u2600\ufe0f","\ud83c\udf40"],x.s)
D.er7=new B.y("Nature",D.cQT)
D.cZQ=w(["\ud83c\udfe0","\ud83c\udfeb","\ud83c\udfe5","\ud83c\udfe6","\ud83c\udfea","\ud83d\ude97","\ud83d\ude8c","\u2708\ufe0f","\ud83c\udf81","\ud83d\udcb0","\ud83d\udcb5","\ud83d\udcb3","\ud83d\uded2","\ud83c\udfc6","\ud83e\udd47","\ud83c\udf89","\ud83c\udf88","\ud83c\udfb6","\ud83c\udfb5","\ud83c\udfa4","\ud83d\udcf7","\ud83c\udfac","\ud83d\uddbc\ufe0f","\ud83d\udcbb","\ud83d\udcf1"],x.s)
D.ekG=new B.y("Places & things",D.cZQ)
D.cU5=w(["\u2764\ufe0f","\ud83d\udc9a","\ud83d\udc99","\ud83d\udc9c","\ud83e\udde1","\ud83d\udc9b","\ud83d\udda4","\ud83e\udd0d","\u2b06\ufe0f","\u27a1\ufe0f","\ud83d\udd36","\ud83d\udd37","\ud83d\udd34","\ud83d\udfe2","\ud83d\udd35","\ud83d\udfe1"],x.s)
D.eom=new B.y("Symbols",D.cU5)
D.cJj=w([D.eo3,D.ebO,D.er7,D.ekG,D.eom],B.ax("O<+(n,aj<n>)>"))
D.b5M=new B.w(1,0.22745098039215686,0.15294117647058825,0.03137254901960784,A.t)
D.cJH=w([A.bY,D.acn,D.b5M],x.O)
D.b00=new B.ac(0,A.G,A.JZ,A.aFe,40)
D.b_I=new B.ac(0,A.G,A.nA,A.ej,8)
D.cJT=w([D.b00,D.b_I],x.V)
D.cKk=w([4280171146,4280640491,4279080072,4278556265],x.t)
D.au9=w([4294677052,4294626325,4293870660,4294210230,4287323382,4282090230,4280472558,4283096704,4294967295,4279310375],x.t)
D.a1k=w([A.hE,A.ff,A.bI,A.aB,A.cb],x.O)
D.cKL=w(["HOME: the first tab. It has the NGMY brand, the Helper AI, loans, and the tech frames: Neural Link, Signal Grid, Core Protocol and the Vault Channel arcade.","TOOL HUB: the second tab. It holds the Business Card Creator, Menu Studio (restaurant menus and Bio link pages) and Business Essentials (invoices, receipts, flyers and other business papers).","SLIDES: the third tab. Presentations with many designs, an AI that makes decks, and Marriage documents.","NGMY HUB: the centre tab. Civic Registry, NGMY Store, Help Center and Insurance, Document Scanner, and the App Builder when it is switched on.","ADVISORS: the fifth tab. AI advisors you can chat with like real people. They help with jobs, applications, benefits and everyday questions, and they can answer in Swahili when you write Swahili.","CREATOR HUB: the sixth tab. Doc Share, Quote Calc, QR Generator, Play Zone, Kiswahili School, Recorder Studio, Video Studio and Phone Unlock.","PROFILE: the seventh tab. Theme, logout, legal pages and Worksheets (Projects, Cashier IOUs and receipts, and the Family Tree).","GROWTH INCOME: For now the Growth Income button (the wifi icon, top right of Home) works only for the admin: everyone else sees the same icon but it does not open. members buy an investment plan and earn daily by clocking in, on work days only (Monday to Friday, there is no clock-in on Saturday and Sunday). The wallet shows the balance, deposits, withdrawals and a history of the last two months, with the balance before and after each move. Missing 3 work days in a month removes the investment plan (a new plan must be bought), and the count starts again each month; a warning shows after the 2nd missed day. Clocking in 30 minutes late or more takes 30 percent off the earnings for that day. The investment plans are $5, $20, $30, $50 and $100; $100 is the most expensive plan and nothing above it is offered.","KING AND QUEEN CROWN: a crown badge for special members. A King or Queen receives a daily crown reward of one dollar, and the receipt shows in the wallet history.","WALLET: one balance everywhere in the app. The server keeps the balance so every phone shows the same number.","LOANS: Loan Services is a community help service: it helps members when they need help, for example funerals, buying a car, car repairs or family emergencies. For now the Loan Service button (top left of Home) works only for the admin: everyone else sees the same icon but it cannot be opened. The loan calculator (amount, interest rate and repayment period to try, the whole cost and every payment, and a button to make the tried terms the real loan terms) is for the admin only. The How it works frame is a five-step timeline (Apply, Review, Funds, Repay, Released). A loan is applied for with collateral, repaid in weekly payments, and the collateral is released back to the member when the loan is fully repaid. The admin sets the interest rate, the biggest loan and the repayment period in Loan Center, Loan terms; nothing is written into the screens. Before applying, the member sees the full cost (amount, interest, total to repay, number of payments, each payment, repayment period) and must tap I agree; the agreement is saved with the application. The application asks what the member needs help with (Funeral or Burial, Buy a car, Car repair, Family emergency, Other need), the date needed, the collateral with its estimated value and photos, and an optional family or guarantor contact. A loan shows as Pending, Approved, Paid Out, In Repayment, Repaid, Overdue or Declined, and the member sees a gentle reminder about the next payment.","NGMY STORE: buy and sell items inside the app. Approved members can open a store.","CIVIC REGISTRY: the community system for the M'MBONDO community. It registers members with a Registry ID card, counts members by state, records contributions with receipts, and lets Authorized Registrars enroll families. Registrars can print the community roster as a PDF.","CIVIC BIRTHDAYS AND FAMILY: the registry records children and their ages, shows a birthday reminder two days before, and congratulates a child on turning 18. Members can have a nickname that others search for, while registrars see the real name.","CIVIC VOTING AND STATE WALLET: the community votes on decisions inside the app, and each state has a wallet showing its funds, spending and trust deposits so the money is visible to everyone.","LIGHTNING GROUPS: groups inside the Civic Registry where people give together. A person asks to join with a name, phone number, state and address, and the group owner approves. The group shows named contribution rounds, receipts, who gave, who missed and how many times.","JOBS AND HELP: help finding jobs, house repairs and house workers, a Help Center with insurance, and the Helper AI for support.","CORE PROTOCOL: a collection of studios for curious minds: Universe, Electronics Lab (the AI Inventor now lives inside it as the AI button at the top), Construction Lab (real 3D wiring, plumbing and a house), Discovery Lab (Body Explorer, a real 3D human you can turn and look inside), Toolbox, Molecule Maker, DNA Lab, Ecosystem Lab, Balance Lab, Gear Lab, Laser Maze, Light Mixer, Cipher Lab, Reaction Lab, Spark Painter, Rocket Lander, Orbit Studio, Swarm Studio, Chain Burst, Title Animator, Circuit Lab, Marble Music and Orbit Sequencer.","CITY AVATARS: the people of My House are the real characters from the NGMY 3D viewer files (Xbot.glb the X Bot, Michelle.glb the Dancer, Soldier.glb the Soldier), kept in the app (assets/avatars) and drawn with their own skeletons and animations (the X Bot and Soldier stand and walk, the Dancer dances). Their skin pictures are painted onto the body faces, and the body is thinned to a few thousand faces so the game stays quick, so they look a little more faceted than in the viewer. The X Bot is the one who goes through the rooms on the house tour and that you steer outside; in the tour sheet (Play) a Who walks the house? choice switches the tour guide to the Dancer, the Soldier or a plain person. The residents are the three characters too: they stay in the house, some stroll out into the garden for a while and go back in, and a resident with an open call for help shows a phone icon in the name.",'CONSTRUCTION LAB: a trade school in real looking 3D, MY HOUSE (top card of the Construction Lab): a finished furnished house with 5 bedrooms, 3 bathrooms, a kitchen, a living room and a hall, each drawn as a cut-away 3D room. A little map in the corner shows where you are, tap a room to go there, or use the door buttons; red marks a room whose wiring needs work and blue one whose plumbing does. Signals in the room (a red No power sign, a blue Needs plumbing sign, bare pipe stubs) show what is wrong; the Wiring and Plumbing buttons, or a tap on the outlet, light, toilet or sink, open the same hands-on jobs and the room is finished when the job is. Furniture, walls, floor, ceiling and doors only react while their own edit button is on: Furniture (add, move with arrows, turn, change colour, remove), Walls (paint one wall or all), Floor (wood, carpet or tile), Ceiling, Doors (open and close). A Learn button opens short beginner cards on safety, wiring, plumbing, framing and tools. In My House you are inside the room by default (a low view, like standing in the doorway) and a button switches to a view of the whole room from above. A \ud83c\udfac Tour button plays a life-like person (an adult with a face, hair, arms, legs and a real stride) who comes in through the front door and walks through the whole house like a film, in the time you choose (30 seconds, 1, 2, 3 or 5 minutes), after every TV is switched on. The walk is planned round the furniture and fixtures, so the person never goes through a wall, a chair or a table; in the living room and the bedrooms the person picks up the remote and switches the ad on the TV, in the kitchen they take a drink from the fridge, in the bathrooms they wash their hands, and between rooms they open the door and walk through into the hall. The doors really swing open and show the next room behind them; when the person opens a door the camera moves in towards it, then the picture dissolves into the next room (the hall, a bedroom, a bathroom) where the camera starts on the door they come out of, and the door closes behind them as they walk on. TVs on the wall go from 100 inches to 150, 200 and a whole-wall TV: each is as big as the free stretch of wall allows, never over a door, with nothing in front of it, and the person on the tour stands beside the TV and not in front of it. The hall is wider and deeper, has all ten doors on its back wall and a big TV on each end wall. A \ud83d\udd04 Look all round (360) button puts you in the middle of a closed room (solid ceiling and four walls) to turn all the way round by dragging; a double tap on the floor walks you to that spot, and from above or in the garden a double tap takes the view closer to where you tapped. The view can never go under the floor. The garden is a big lawn you can walk all the way round, and the house outside has windows and doors on all four sides, a porch, a chimney and a roof; with the Furniture button you can add and move trees, pines, bushes, flowers, fences, street lamps, benches, cars, roads, ponds, swings, sheds and dog houses. The cards on the Construction Lab home screen are centred, with a glowing round icon and a soft colour. COMMUNITY (a card on the Construction Lab home screen and a Community button in My House): the seven people who live in the house (Ama, Joseph, Grace, Daniel, Fatima, Papa Moses and Mama Rose, each with their own look) get hungry over time, can fall sick, and become unhappy when their room has no power or their sink leaks; they stand in their rooms in the house as people you can tap, with a word over their head showing how they are. The player feeds them (food), gives medicine, sends the sick to the hospital (three beds: each patient needs treating before their care runs out and goes home better), and buys food and medicine in the shop with points. People who are starving, sick or unhappy for too long lose health and can die. Calls for help arrive in plain words ("My outlet is dead and it is dark in here", "The sink leaks"): Go and fix it opens the house on that room, the real wiring or plumbing job is done, and when it works the call finishes and earns 15 points; wiring and plumbing also break by themselves from time to time so there is always something to do. Hospital discharges, feeding and medicine earn points too. Everything is saved (the people, supplies, calls and which rooms are fixed or broken) and time passes only gently while the app is closed. Inside a room the view stays inside the house: you can look about a little but you cannot swing round behind the walls, and a Go outside button (and Go inside in the garden) is the only way out. Everything in a room is drawn in layers (the floor and walls first, then what is fixed to them like the TV, the plates, the frames and the doors, then the furniture and the person), so the edges of a TV or a door never disappear when you turn to the side and the person never shows through a door, a wall or their own body. The person is built from rounded parts with real joints (a head with a face and hair, shoulders, elbows, knees, hands and shoes), the foot that is down always stands on the floor, and the walk keeps a body-width away from furniture and walls. A TV button puts a wall TV (five models, the big ones up to 77 inches) in a room, or in every room, and turns TVs on and off. An Add button adds outlets, GFCI outlets and light switches to a room that you wire yourself with the wiring bench, a Map button shows or hides the little map (which shrinks to fit the screen), and the Start from a bare house button makes every room need its wiring and plumbing so you can wire the whole house first. The ceiling of a room can hold a light or a fan. All the lessons on the lab home screen (Wall outlet, Light switch, GFCI outlet, Ceiling fan, Sink drain, Faucet supply lines, Build and fix a house, Learn the trades: eight tiles, four on each side) play inside a furnished room with a big TV on the wall showing the NGMY Jobs ad; the ceiling light is already in and only the thing being taught is waiting (red), and once it is done you can use it: flip the switch, plug in a lamp, TV or hair dryer, watch the fan spin. The house also has a Garden (a view of the house from outside with a tree, a path and a mailbox): the front door of the living room leads out to it and the front door there leads back in. Tap a door in a room to open it and walk through it into the next room or the hall, like in a game. Every room can be fixed, even the ones shown as finished: a finished room opens finished and you can pull devices out and wire them again. In a wired room tap an outlet to plug something in (five big TVs from Beovision to Apple TV that play NGMY ads, a lamp, a toaster or a hair dryer) or unplug it, tap the wall switch (or the light) to turn the light or the ceiling fan on and off, and tap a TV to watch it full screen with its own brand home screen. Bedrooms have ceiling fans. Wire a room, Plumb a room and Fix a house on the lab home screen all open My House at a room that needs that job. In the wiring jobs a wrong wire can be fastened just like for real and it burns or trips the breaker when the power goes on, touching a live wire shocks (in Learn mode it hurts nothing but the shock still happens, in Practice mode it costs a life), the wire buttons that are already fastened disappear, the screw labels are kept away from the wires, finished devices have a bright frame so they are easy to find from far, finished rooms have a painted ceiling with crown moulding and no bare beams, and a TV in the room job opens full screen when tapped. The Construction Lab downloads on its own when its button is pressed, so the Core Protocol opens quickly. A TV that is plugged in and on plays the real NGMY ads right on its screen, flat on the glass like a normal TV, without opening it (tap it to watch full screen). There is a Voltage tester: in My House pick the Tester button and tap an outlet, the switch or the light (it glows and beeps when there is power and stays dark when there is none), and in the wiring jobs it is the Voltage tester right after Look in the devices tray. The Construction Lab menus are now at the top like in the Electronics Lab, the home screen of the lab is a short list of tiles with a Learn mode and Practice mode switch, a device already put in can be tapped again to open it or pull it out, and a tap that misses never moves the view. opened from the construction helmet button next to the AI button at the top of the Electronics Lab, and also as a tile in the Core Protocol. Every model can be turned with a finger, zoomed by pinching or with the zoom buttons, and any part can be tapped to zoom in and read what it is. Lessons: Wall outlet (black hot wire to the brass screw, white neutral to the silver screw, bare copper ground to the green screw), Light switch (two black wires on the two brass screws, white wires joined with a wire nut), GFCI outlet (power in on the LINE screws, the LOAD screws are covered with yellow tape, press RESET then TEST), Sink drain (build the tailpiece, P-trap and trap arm, tighten the slip nuts, run the water and see the water seal that blocks sewer gas), Faucet supply lines (hot red hose on the left, cold blue hose on the right, then open the shut-off valves) and a whole house cut open at the front that can be built stage by stage (slab, framing, plumbing rough-in, electrical rough-in, drywall, fixtures, roof), where a tripped breaker and a leaking slip nut can be fixed and each fixture opens its own lesson. The electrical lessons start with the breaker ON and refuse any wire until it is turned OFF, and every wrong connection is explained in plain words. BUILD A WHOLE ROOM (also WIRE A ROOM quick start, and a Skip to the wiring button in the tray, which do the framing, cable and drywall for you so you start straight at wiring the outlets, switches, light and fan with coloured labelled screws, the tester, the TV and the switch test; the room has a window wall, a door wall and the working wall): a project with three phases (rough-in, drywall, devices). Rough-in: mount wall boxes, ceiling boxes and a fan box on the studs with the drill, and unroll the cable through the studs and ceiling (a wrong route gives an error). Drywall: hang the sheets, cut holes with the drywall saw, screw them to the studs, then tape, mud, sand and paint. Devices: wire outlets, several switches, a ceiling light and a ceiling fan, each with a switch to test, then plug in a TV and other appliances. The screw terminals have different colours (brass gold hot, silver neutral, green ground) and show a label when tapped. A Behind the wall / In front button lets you choose which side of the wall you look from instead of the camera turning by itself. Learn mode tells you what to do next and explains every wrong move; Practice mode only speaks up when something is done wrong, and real wiring mistakes shock (three lives) or burn. SERVICE CALLS (Fix a house, learn and practice): a customer rings with four problems chosen from twelve kinds (tripped breaker, no hot water, leaking slip nut, leaking crimped joint, dead outlet, flickering light, burnt outlet, tripped GFCI, running toilet, dripping faucet, hole in the wall, clogged sink), a different mix every time; use Look and test, then the right tool from the toolbox (hand, screwdriver, pliers, wrench, crimp tool, plunger, new flapper, new outlet, drywall patch); wires must have their breaker switched off first. PLUMBING JOBS (learn and practice): fit out a bathroom (flange, wax ring, toilet, bolts, shut-off valve, supply hose, then the sink) or a kitchen sink piece by piece, with the order checked (the app says why a piece cannot go there yet), the main water valve turned off before cutting into pipes, joints tightened with the wrench, and finally the water turned on to find leaks.',"MY HOUSE, THE WORLD OUTSIDE: go outside from the living room (Go outside, or the front door) into a big garden town you can walk and decorate. It starts with a main street, a lane up to the house, a crossroads, a shop, a hospital with a red cross, a fire station with a fire truck, a school, a second house, an ambulance and a car, trees, a pond, lampposts, a bench and fenced animals. In Furniture mode the Add tray offers road pieces (straight, corner, T-junction, crossroads) that snap to a grid and jump a whole piece with the arrow buttons so they always join up, buildings (house, shop, hospital, fire station, school), cars, a fire truck, an ambulance, animals (dog, cat, cow, sheep, chicken, horse) that wander about, trees, bushes, flowers, fences, a bench, a swing, a shed and a doghouse. Everything can be moved, turned, recoloured and removed with the buttons, and nothing reacts to a tap unless the Furniture button is on. Walk about puts a person in the world: hold the arrows to walk (up is away from you), or double tap a spot to send them there; they walk round buildings, vehicles, trees and fences, and walking up to the front door takes them back into the living room. The camera never goes under the ground.","ELECTRONICS LAB: build real circuits with 56 parts in two tool rows, both at the top above the board (swipe sideways), under a redesigned top bar with the lab name, a live count of working and burnt parts, buttons for ready-made circuits, repair, clear and help, and a challenge card with a progress bar: batteries, solar panel, hand crank, wind turbine, switch, fuse, bulb, LED, motor, radio, TV, fan, speaker, clock, calculator, phone charger, WiFi router, siren, toy car, kettle, desk lamp, party lights, voltmeter and ammeter, step-down converter (brings big battery volts down to 3 to 9 V so a phone, tablet, headphones or smart watch is safe), 5 V regulator (gets hot), diode (one way, 0.7 V drop), light sensor, LED strip, water pump, hair dryer, headphones, smart watch, tablet, fridge, washing machine, blender, drone, power drill, torch, neon sign, microwave, doorbell, security camera, game console, heart monitor, aquarium, lighthouse, disco ball, robot and toaster. Each gadget needs the right volts and the right way round: the lab explains why something is not working (not connected, only one end wired, plugged in backwards, flat battery, switch open, too few volts, burnt out and why). A 1.5 volt battery starts flat and must be charged by a solar panel first. The TV shows NGMY animation channels: it opens on the big screen by itself for a minute when it first switches on, and tapping it 3 times quickly opens the big screen. Each TV brand shows its apps in its own design: Samsung with a Smart Hub bar along the bottom, LG with webOS wide launcher cards, Sony with Google TV rows and a picture card, Apple TV with big rounded icons that rise when selected, and Bang and Olufsen with a quiet warm text menu. The TV has 10 NGMY animation channels, a remote control at the top middle of the big screen (CH minus, CH plus, TV, Apps, Ads) and 8 apps inside the TV screen (there is no Growth Income ad or app on the TVs): NGMY Ads (every promotion as cartoons), Civic Registry, Jobs, NGMY Store (African and traditional food, supporting the Congolese and African community), Kiswahili, Doc Scanner, Invoices and Calendar. Each ad is a little cartoon with a kid character. Premium devices with screens play the NGMY cartoon ads on their own screens: TVs (Samsung Neo QLED 8K, LG OLED evo G5, Sony Bravia 9, Apple TV 4K, Bang and Olufsen Beovision), phones (iPhone 18 Pro Max with a Dynamic Island, iPhone Fold, Galaxy S26 Ultra, Galaxy Z Fold7, Pixel 10 Pro XL, Xiaomi 16 Ultra, Huawei Mate 80 Pro Max, OPPO Find X9 Ultra, Honor Magic V5, vivo X300 Pro), tablets and readers (iPad Pro, Kindle Scribe), computers (MacBook Pro, iMac, Pro Display XDR monitor, Sony laser projector, luxury car touchscreen, Apple Vision Pro). Tapping a screen 3 times opens its big screen (a phone opens like an iPhone, a computer shows a desktop with a dock and app windows). Tapping it 4 times opens a size sheet so the screen can be made bigger (never smaller than normal). Sample circuit: Phone and TV on one battery, using a step-down converter. The AI button at the top of the lab opens the AI Inventor, which builds what you describe on the lab board.  Every battery and solar panel can only give so many amps: when the gadgets connected ask for more, a red warning triangle appears on the power source, its volts sag, gadgets switch off and the lab explains why. The lab saves your board and your challenges by itself, so nothing disappears when you leave. The challenges sit behind a flag button in the top bar (with a number on it for how many are left), next to the dark glowing AI button and the help button.","BODY EXPLORER: a real 3D human body built from medical anatomy data. You can turn it, zoom in, switch layers (skin, muscles, organs, skeleton, blood vessels), tap any part to learn about it, hear the heart beat, and take a quiz.","KISWAHILI SCHOOL: learn English and Swahili with pictures and the teacher Mwalimu Amina.","FAMILY TREE AND FAMILY BOOK: build a family tree, then keep a Family Book library of up to six books. The AI can write a whole new book from the tree, in English or Swahili, and the cover can be designed. The look of the top of each book can be chosen from eight header designs (classic leather, ornate gold, parchment, clean paper, midnight, emerald, rose vintage, modern) with the Header button, and the book title also shows as a small running title on every page.","NOTES: business notes with search, photos and cards.","NGMY QUOTES: make a picture quote with many designs, word sizes, text styles, your own photo and the NGMY logo. It also makes NEWS: a newspaper page with a headline, article and your picture, written by an AI that knows NGMY.","BIO STUDIO: link-in-bio pages with designs such as Neural Core, Quantum Grid and Mech Terminal, and visitors can react to a page.","MENU STUDIO: restaurant menus published as a link.","BUSINESS CARD CREATOR: design and download business cards.","INVOICES AND QUOTE CALC: invoices, receipts and estimates with NGMY watermarks.","DOC SHARE, QR GENERATOR, RECORDER STUDIO, VIDEO STUDIO, PLAY ZONE AND PHONE UNLOCK: tools in the Creator Hub.","APP BUILDER: describe an app and the AI builds it, including real web apps you can publish.","DOCUMENT SCANNER: scan papers with the phone camera.","GAME CENTER AND VAULT ARCADE: arcade games you can play. Game bets and wins have their own receipts and do not appear in the wallet history. Games played offline are saved on the phone and counted on the balance, then applied to the account in order as soon as the phone is online again, and every device updates."],x.s)
D.cL6=w(["All","Robotic","Nature","Warm","Bold","Clean"],x.s)
D.acB=new B.w(1,0.043137254901960784,0.0392156862745098,0.03137254901960784,A.t)
D.cLh=w([A.Wq,D.acB,A.Wq],x.O)
D.cLn=w([A.hV,D.j5,D.K9],x.O)
D.eku=new B.y(A.bg,D.a_4)
D.elO=new B.y(A.L,D.a_3)
D.efR=new B.y(A.dL,D.a_5)
D.cMf=w([D.eku,D.elO,D.efR],B.ax("O<+(pQ,a0)>"))
D.cQ=new C.If(0,"text")
D.lk=new C.If(1,"image")
D.f_=new C.If(2,"shape")
D.R7=new C.If(3,"pdf")
D.kS=new C.If(4,"signature")
D.a45=new C.If(5,"bio")
D.cN5=w([D.cQ,D.lk,D.f_,D.R7,D.kS,D.a45],B.ax("O<If>"))
D.cN6=w([A.bl,A.cD],B.ax("O<Ha>"))
D.cNH=w(["School","Documents","Sign & present"],x.s)
D.b05=new B.ac(0,A.G,A.aeq,A.ue,28)
D.cO0=w([D.b05],x.V)
D.cOj=w([4292128567,4279983648,4290190364,4279898632,4293436183,4279060385],x.t)
D.Pg=w(["Rocket","Trophy","Party popper","Confetti ball","Balloon","Wrapped gift","Birthday cake","Sparkles","Star","Glowing star","Fire","Light bulb","Gem stone","Crown","Money bag","Dollar banknote","Chart increasing","Bar chart","Bullseye","Globe showing americas","Globe showing europe-africa","Sun","Rainbow","Cloud","High voltage","Red heart","Handshake","Graduation cap","Books","Open book","Pencil","Laptop","Mobile phone","Microphone","Musical notes","Camera","Video camera","Megaphone","Bell","Calendar","Alarm clock","Hourglass done","Key","Locked","Shield","Gear","Hammer and wrench","Magnifying glass tilted left","Package","Shopping cart","House","Office building","Hospital","Ballot box with ballot","Automobile","Airplane","Seedling","Deciduous tree","Evergreen tree","Palm tree","Sunflower","Cherry blossom","Herb","Four leaf clover","Water wave","Mountain","Lion","Tiger face","Dog face","Cat face","Elephant","Unicorn","Butterfly","Honeybee","Owl","Eagle","Dolphin","Turtle","Panda","Fox","Rabbit face","Monkey face","Penguin","Horse","Bird","Peacock","Parrot","Red apple","Pizza","Hot beverage","Soccer ball","Basketball","Artist palette","Clapper board","Robot","Brain","Check mark button","Red question mark","Speech balloon","Compass","Crystal ball","Puzzle piece","1st place medal","Smiling face with sunglasses","Grinning face with big eyes","Star-struck","Partying face","Thinking face","Hundred points"],x.s)
D.auy=w([A.hE,A.EC,A.aL,A.c,A.oo,A.aw],x.O)
D.ewM=new B.y(0.1,0.08)
D.er5=new B.y(0.3,0.05)
D.efo=new B.y(0.55,0.1)
D.eju=new B.y(0.8,0.06)
D.emx=new B.y(0.92,0.16)
D.em2=new B.y(0.2,0.2)
D.ejX=new B.y(0.7,0.22)
D.epN=new B.y(0.05,0.4)
D.emW=new B.y(0.95,0.45)
D.eg5=new B.y(0.12,0.7)
D.eig=new B.y(0.88,0.75)
D.eio=new B.y(0.4,0.9)
D.ee3=new B.y(0.65,0.93)
D.ej6=new B.y(0.25,0.97)
D.ekr=new B.y(0.85,0.9)
D.egV=new B.y(0.5,0.04)
D.cPE=w([D.ewM,D.er5,D.efo,D.eju,D.emx,D.em2,D.ejX,D.epN,D.emW,D.eg5,D.eig,D.eio,D.ee3,D.ej6,D.ekr,D.egV],x.G)
D.cPL=w([A.c,A.hg,A.aU,A.aV],x.O)
D.dTE=new C.jB("office_blue","Office Blue",A.bj,A.dq,A.aK,A.c,A.ke)
D.dTP=new C.jB("campus_green","Campus Green",A.aZ,A.h3,A.eu,A.mQ,A.t4)
D.dTF=new C.jB("sunset","Sunset",A.fC,A.jP,A.nC,A.iq,A.qw)
D.dTG=new C.jB("midnight","Midnight",A.aE,A.k9,A.cp,A.M,A.dv)
D.dTR=new C.jB("classic","Classic",A.d9,A.dF,A.lC,A.hU,A.h1)
D.dTO=new C.jB("rose_gold","Rose Gold",A.hg,A.x_,A.wZ,A.uZ,A.Aq)
D.dTz=new C.jB("ocean_teal","Ocean Teal",A.f7,A.uP,A.nD,A.qH,A.rU)
D.dTy=new C.jB("slate_pro","Slate Pro",A.bv,A.M,A.aK,A.aQ,A.aL)
D.dTx=new C.jB("neon_night","Neon Night",A.b7,A.b1,A.aL,A.dK,A.M)
D.dTJ=new C.jB("lavender","Lavender",A.b5,A.pj,A.jr,A.pg,A.Aa)
D.dTL=new C.jB("coral","Coral",A.cb,A.jP,A.rZ,A.iq,A.op)
D.dTA=new C.jB("forest","Forest",A.hh,A.e9,A.cC,A.lD,A.es)
D.dTB=new C.jB("berry","Berry",A.fg,G.WK,A.ED,D.adR,A.k9)
D.dTI=new C.jB("sand","Sand",A.dT,A.it,A.nC,A.hU,A.bK)
D.dTN=new C.jB("ice","Ice",A.mO,A.Kr,A.aK,A.mM,A.fh)
D.dTD=new C.jB("charcoal","Charcoal",A.ak,A.aQ,A.cp,A.bm,A.M)
D.dTw=new C.jB("mint","Mint",A.aV,A.fu,A.h3,A.lD,A.pu)
D.dTM=new C.jB("crimson","Crimson",A.bI,A.mS,A.kc,A.EA,A.tg)
D.b8b=new B.w(1,0.996078431372549,0.9882352941176471,0.9098039215686274,A.t)
D.dTH=new C.jB("gold","Gold",A.om,A.uN,A.on,D.b8b,A.lB)
D.dTK=new C.jB("aqua","Aqua",A.bN,A.Ep,A.ok,A.pi,A.oq)
D.dTC=new C.jB("plum","Plum",A.mP,A.wX,A.ED,A.Eb,A.tb)
D.dTQ=new C.jB("steel","Steel",A.d6,A.dq,A.bm,A.ke,A.l1)
D.a1z=w([D.dTE,D.dTP,D.dTF,D.dTG,D.dTR,D.dTO,D.dTz,D.dTy,D.dTx,D.dTJ,D.dTL,D.dTA,D.dTB,D.dTI,D.dTN,D.dTD,D.dTw,D.dTM,D.dTH,D.dTK,D.dTC,D.dTQ],B.ax("O<jB>"))
D.cQ5=w([A.bY,A.j7],x.O)
D.R9=new C.hw(10,"rotate3d")
D.Hy=new C.hw(8,"flip")
D.aEI=new C.hw(19,"spiral")
D.q0=new C.hw(16,"bounce")
D.aEL=new C.hw(9,"flipVertical")
D.cQ6=w([D.R9,D.Hy,D.aEI,D.q0,D.aEL],x.i)
D.e5=w([1353184337,1399144830,3282310938,2522752826,3412831035,4047871263,2874735276,2466505547,1442459680,4134368941,2440481928,625738485,4242007375,3620416197,2151953702,2409849525,1230680542,1729870373,2551114309,3787521629,41234371,317738113,2744600205,3338261355,3881799427,2510066197,3950669247,3663286933,763608788,3542185048,694804553,1154009486,1787413109,2021232372,1799248025,3715217703,3058688446,397248752,1722556617,3023752829,407560035,2184256229,1613975959,1165972322,3765920945,2226023355,480281086,2485848313,1483229296,436028815,2272059028,3086515026,601060267,3791801202,1468997603,715871590,120122290,63092015,2591802758,2768779219,4068943920,2997206819,3127509762,1552029421,723308426,2461301159,4042393587,2715969870,3455375973,3586000134,526529745,2331944644,2639474228,2689987490,853641733,1978398372,971801355,2867814464,111112542,1360031421,4186579262,1023860118,2919579357,1186850381,3045938321,90031217,1876166148,4279586912,620468249,2548678102,3426959497,2006899047,3175278768,2290845959,945494503,3689859193,1191869601,3910091388,3374220536,0,2206629897,1223502642,2893025566,1316117100,4227796733,1446544655,517320253,658058550,1691946762,564550760,3511966619,976107044,2976320012,266819475,3533106868,2660342555,1338359936,2720062561,1766553434,370807324,179999714,3844776128,1138762300,488053522,185403662,2915535858,3114841645,3366526484,2233069911,1275557295,3151862254,4250959779,2670068215,3170202204,3309004356,880737115,1982415755,3703972811,1761406390,1676797112,3403428311,277177154,1076008723,538035844,2099530373,4164795346,288553390,1839278535,1261411869,4080055004,3964831245,3504587127,1813426987,2579067049,4199060497,577038663,3297574056,440397984,3626794326,4019204898,3343796615,3251714265,4272081548,906744984,3481400742,685669029,646887386,2764025151,3835509292,227702864,2613862250,1648787028,3256061430,3904428176,1593260334,4121936770,3196083615,2090061929,2838353263,3004310991,999926984,2809993232,1852021992,2075868123,158869197,4095236462,28809964,2828685187,1701746150,2129067946,147831841,3873969647,3650873274,3459673930,3557400554,3598495785,2947720241,824393514,815048134,3227951669,935087732,2798289660,2966458592,366520115,1251476721,4158319681,240176511,804688151,2379631990,1303441219,1414376140,3741619940,3820343710,461924940,3089050817,2136040774,82468509,1563790337,1937016826,776014843,1511876531,1389550482,861278441,323475053,2355222426,2047648055,2383738969,2302415851,3995576782,902390199,3991215329,1018251130,1507840668,1064563285,2043548696,3208103795,3939366739,1537932639,342834655,2262516856,2180231114,1053059257,741614648,1598071746,1925389590,203809468,2336832552,1100287487,1895934009,3736275976,2632234200,2428589668,1636092795,1890988757,1952214088,1113045200],x.t)
D.cQr=w([0.62,1],x.x)
D.cR0=w([0,0.32,0.68,1],x.x)
D.mv=new C.hw(6,"zoom")
D.u8=new C.hw(4,"slideUp")
D.u7=new C.hw(2,"slideLeft")
D.cR9=w([D.mv,D.Hy,D.u8,D.R9,D.u7],x.i)
D.cRE=w([A.bV,A.hg,A.io,A.hE,A.c],x.O)
D.b_W=new B.ac(0,A.G,D.acO,A.ue,30)
D.cSl=w([D.b_W],x.V)
D.e29=new B.u(0,-2.5)
D.e2_=new B.u(-2.5,0)
D.e0I=new B.u(2.5,0)
D.cSo=w([A.Rp,A.a4s,A.aFK,A.a4r,D.e29,H.aFG,D.e2_,D.e0I],x.dN)
D.GI=w([0,79764919,159529838,222504665,319059676,398814059,445009330,507990021,638119352,583659535,797628118,726387553,890018660,835552979,1015980042,944750013,1276238704,1221641927,1167319070,1095957929,1595256236,1540665371,1452775106,1381403509,1780037320,1859660671,1671105958,1733955601,2031960084,2111593891,1889500026,1952343757,2552477408,2632100695,2443283854,2506133561,2334638140,2414271883,2191915858,2254759653,3190512472,3135915759,3081330742,3009969537,2905550212,2850959411,2762807018,2691435357,3560074640,3505614887,3719321342,3648080713,3342211916,3287746299,3467911202,3396681109,4063920168,4143685023,4223187782,4286162673,3779000052,3858754371,3904687514,3967668269,881225847,809987520,1023691545,969234094,662832811,591600412,771767749,717299826,311336399,374308984,453813921,533576470,25881363,88864420,134795389,214552010,2023205639,2086057648,1897238633,1976864222,1804852699,1867694188,1645340341,1724971778,1587496639,1516133128,1461550545,1406951526,1302016099,1230646740,1142491917,1087903418,2896545431,2825181984,2770861561,2716262478,3215044683,3143675388,3055782693,3001194130,2326604591,2389456536,2200899649,2280525302,2578013683,2640855108,2418763421,2498394922,3769900519,3832873040,3912640137,3992402750,4088425275,4151408268,4197601365,4277358050,3334271071,3263032808,3476998961,3422541446,3585640067,3514407732,3694837229,3640369242,1762451694,1842216281,1619975040,1682949687,2047383090,2127137669,1938468188,2001449195,1325665622,1271206113,1183200824,1111960463,1543535498,1489069629,1434599652,1363369299,622672798,568075817,748617968,677256519,907627842,853037301,1067152940,995781531,51762726,131386257,177728840,240578815,269590778,349224269,429104020,491947555,4046411278,4126034873,4172115296,4234965207,3794477266,3874110821,3953728444,4016571915,3609705398,3555108353,3735388376,3664026991,3290680682,3236090077,3449943556,3378572211,3174993278,3120533705,3032266256,2961025959,2923101090,2868635157,2813903052,2742672763,2604032198,2683796849,2461293480,2524268063,2284983834,2364738477,2175806836,2238787779,1569362073,1498123566,1409854455,1355396672,1317987909,1246755826,1192025387,1137557660,2072149281,2135122070,1912620623,1992383480,1753615357,1816598090,1627664531,1707420964,295390185,358241886,404320391,483945776,43990325,106832002,186451547,266083308,932423249,861060070,1041341759,986742920,613929101,542559546,756411363,701822548,3316196985,3244833742,3425377559,3370778784,3601682597,3530312978,3744426955,3689838204,3819031489,3881883254,3928223919,4007849240,4037393693,4100235434,4180117107,4259748804,2310601993,2373574846,2151335527,2231098320,2596047829,2659030626,2470359227,2550115596,2947551409,2876312838,2788305887,2733848168,3165939309,3094707162,3040238851,2985771188],x.t)
D.cSR=w([23,114,69,56,80,144],x.t)
D.cTg=w(["Make the headline shorter","Add a paragraph about the Civic Registry","Write the whole thing in Swahili","Change the newspaper name"],x.s)
D.cTF=w(["Add a slide about\u2026","Make this slide shorter","Translate everything to Swahili","Add a slide with our contact details","Change the style to luxury","Remove the last slide"],x.s)
D.cV7=w([null,4294626325,4294828103,4283096704,4280472558,4294210230,4294677052,4293870660,4287323382,4282090230,4294967295,4279310375],x.Z)
D.cVb=w(["Kichwa cha Mtu: [Kiasi kilichosalia au thamani]","Mbuzi Mbili","Ngyoka","Mmoko"],x.s)
D.be=new C.uu(0,"rectangle")
D.eI=new C.uu(1,"circle")
D.kT=new C.uu(6,"hexagon")
D.cVn=w([D.be,D.eI,D.kT],x.m)
D.o_=w([99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22],x.t)
D.adY=new B.w(1,0.24313725490196078,0.47843137254901963,0.30980392156862746,A.t)
D.cVV=w([D.adY,A.e9],x.O)
D.efz=new B.y("","Classic")
D.eeg=new B.y("caps","Bold caps")
D.epQ=new B.y("elegant","Elegant")
D.euS=new B.y("shadow","Shadow")
D.ejQ=new B.y("neon","Neon glow")
D.etv=new B.y("outline","Outline")
D.esH=new B.y("marker","Highlighter")
D.ev2=new B.y("stamp","Stamp")
D.euu=new B.y("retro","Retro")
D.eiO=new B.y("threed","3D")
D.eql=new B.y("fire","Fire")
D.erh=new B.y("ice","Ice")
D.ep0=new B.y("chalk","Chalk")
D.ep5=new B.y("comic","Comic")
D.ev4=new B.y("sunset","Sunset")
D.ewb=new B.y("softglow","Soft glow")
D.esg=new B.y("lowercase","Lowercase")
D.epx=new B.y("double","Echo")
D.ewk=new B.y("whisper","Whisper")
D.avq=w([D.efz,D.eeg,D.epQ,D.euS,D.ejQ,D.etv,D.esH,D.ev2,D.euu,D.eiO,H.aKS,D.eql,D.erh,D.ep0,D.ep5,A.a5h,D.ev4,D.ewb,D.esg,D.epx,D.ewk],x.L)
D.cX8=w([3,5,7,10,12,15],x.t)
D.cYs=w([A.bV,A.bK,A.c,A.ez,A.ct],x.O)
D.dk4=new C.t4(10,"cardWorld")
D.C9=new C.B0(3,"rounded")
D.dAl=new C.lb("world","NGMY World",D.dk4,D.C9,4278918980,4278521378,4294967295,4280118271,"logo","Roboto","Roboto","Roboto","a modern digital news site: clear, confident and direct, a strong plain headline and a one-sentence summary",!1,"none",!0,!1)
D.dk5=new C.t4(11,"cardSplit")
D.dAh=new C.lb("business","Business Wire",D.dk5,D.C9,4294967295,4294507260,4279179050,4292943150,"logo","Roboto","Roboto","Roboto","a clean business news site: precise, informative and professional, with a plain, strong headline",!1,"none",!1,!1)
D.dk6=new C.t4(12,"cardBreaking")
D.dAu=new C.lb("breaking","Breaking Red",D.dk6,D.C9,4278913807,4280944139,4294967295,4292943150,"logo","Roboto","Roboto","Roboto","a breaking-news broadcast: urgent, factual and clear, a punchy headline and a tight summary",!1,"none",!0,!1)
D.dk7=new C.t4(13,"cardFeature")
D.dAn=new C.lb("feature","Tech Feature",D.dk7,D.C9,4294967295,4294047225,4279179050,4280640491,"logo","Roboto","Roboto","Roboto","a modern feature article: informative, engaging and well explained",!1,"none",!1,!1)
D.aDd=new C.t4(6,"circle")
D.aD7=new C.B0(4,"circle")
D.dAr=new C.lb("parchment","Royal Circle",D.aDd,D.aD7,4294241234,4293450160,4281278992,4285211048,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a stately royal edition: dignified, noble and ceremonial",!0,"sepia",!1,!1)
D.dAg=new C.lb("ocean","Blue Ocean",D.aDd,D.aD7,4293916415,4292602622,4278984254,4278413729,"centered","NgmyAbril","NgmyAbril","NgmyOldStandard","a calm, trustworthy paper: clear, steady and reassuring",!1,"none",!1,!1)
D.dka=new C.t4(7,"rail")
D.aD6=new C.B0(1,"double")
D.dAi=new C.lb("forest","Green Leaf",D.dka,D.aD6,4293983732,4292672743,4278529558,4279599165,"centered","NgmyAbril","NgmyAbril","NgmyOldStandard","a calm community paper about growth and togetherness: gentle, hopeful and clear",!1,"none",!1,!1)
D.aDa=new C.t4(1,"sideBySide")
D.dAw=new C.lb("herald","NGMY Herald",D.aDa,D.C9,4294967295,4294308863,4280163147,4286331629,"split","NgmyAbril","NgmyAbril","NgmyOldStandard","the proud NGMY Herald: warm, hopeful and community-minded, in NGMY purple",!1,"none",!1,!1)
D.aD9=new C.t4(0,"classic")
D.a3i=new C.B0(9,"shadow")
D.dAv=new C.lb("daily","The Daily",D.aD9,D.a3i,4294967295,4294243570,4279308561,4292225064,"bar","NgmyAbril","NgmyAbril","NgmyOldStandard","a modern daily newspaper: crisp, clear and energetic, with a punchy headline",!1,"none",!1,!0)
D.dk8=new C.t4(2,"splash")
D.aD8=new C.B0(6,"cutCorner")
D.dAf=new C.lb("tabloid","Big Tabloid",D.dk8,D.aD8,4294967295,4294965216,4279308561,4292943176,"bar","Roboto","NgmyAbril","Roboto","a bold tabloid: exciting, short punchy sentences and a loud, attention-grabbing headline (still truthful)",!1,"none",!1,!0)
D.aDe=new C.t4(9,"minimal")
D.dAq=new C.lb("modern","Modern Digest",D.aDe,D.C9,4294507260,4293060848,4279179050,4279080072,"logo","Roboto","Roboto","Roboto","a clean modern digest: simple words, short paragraphs, friendly and clear",!1,"none",!1,!1)
D.aDb=new C.t4(3,"magazine")
D.aD5=new C.B0(0,"plain")
D.dAm=new C.lb("midnight","Midnight Edition",D.aDb,D.aD5,4279310375,4278915104,4294047225,4294626325,"logo","Roboto","NgmyAbril","NgmyOldStandard","a dramatic late-night edition: confident, cinematic and polished",!1,"none",!0,!0)
D.dkb=new C.t4(8,"banner")
D.dAo=new C.lb("metro","Metro Wire",D.dkb,D.aD8,4294047225,4293060848,4278915616,4280640491,"logo","Roboto","Roboto","Roboto","a modern news wire: fast, factual and direct, like breaking news",!1,"none",!1,!0)
D.dk3=new C.B0(8,"arch")
D.dAp=new C.lb("sunrise","Sunrise Post",D.aDb,D.dk3,4294965229,4294962645,4282064136,4293548044,"split","NgmyAbril","NgmyAbril","NgmyOldStandard","a cheerful morning paper: bright, optimistic and welcoming",!1,"none",!1,!1)
D.aDc=new C.t4(5,"scrapbook")
D.dk2=new C.B0(5,"tape")
D.dAk=new C.lb("neon","Neon Beat",D.aDc,D.dk2,4280163147,4279175726,4294308863,4293675161,"split","NgmyAbril","NgmyAbril","Roboto","a youthful neon culture paper: fresh, bold, energetic and fun",!1,"none",!0,!1)
D.dk9=new C.t4(4,"wrap")
D.dAx=new C.lb("gold","Golden Press",D.dk9,D.a3i,4279505162,4278847748,4294898631,4294626325,"logo","Roboto","NgmyAbril","NgmyOldStandard","a luxurious golden press edition: grand, elegant and prestigious",!1,"none",!0,!0)
D.dAy=new C.lb("minimal","Paper White",D.aDe,D.a3i,4294967295,4294638330,4279769115,4279769115,"split","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a quiet, elegant long-read: thoughtful, simple and beautifully written",!1,"none",!1,!1)
D.dAj=new C.lb("gazette","Fresh Gazette",D.aD9,D.aD6,4294373341,4293582786,4280949518,4288295954,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a refined town gazette: formal, dignified and warm, with a strong headline",!1,"none",!1,!0)
D.dAt=new C.lb("times","Classic Times",D.aDa,D.aD5,4294637810,4293913565,4279636750,4280171146,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a serious classic broadsheet: calm, factual, authoritative, with a strong headline and a clear subhead",!1,"bw",!1,!1)
D.QG=new C.B0(2,"polaroid")
D.dAs=new C.lb("scrapbook","Memory Scrapbook",D.aDc,D.QG,4294437835,4293580710,4282001946,4290007817,"split","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a warm scrapbook clipping: personal, nostalgic and heartfelt",!1,"sepia",!1,!1)
D.a1P=w([D.dAl,D.dAh,D.dAu,D.dAn,D.dAr,D.dAg,D.dAi,D.dAw,D.dAv,D.dAf,D.dAq,D.dAm,D.dAo,D.dAp,D.dAk,D.dAx,D.dAy,D.dAj,D.dAt,D.dAs],B.ax("O<lb>"))
D.cYE=w([0.45,1],x.x)
D.GK=w([619,720,127,481,931,816,813,233,566,247,985,724,205,454,863,491,741,242,949,214,733,859,335,708,621,574,73,654,730,472,419,436,278,496,867,210,399,680,480,51,878,465,811,169,869,675,611,697,867,561,862,687,507,283,482,129,807,591,733,623,150,238,59,379,684,877,625,169,643,105,170,607,520,932,727,476,693,425,174,647,73,122,335,530,442,853,695,249,445,515,909,545,703,919,874,474,882,500,594,612,641,801,220,162,819,984,589,513,495,799,161,604,958,533,221,400,386,867,600,782,382,596,414,171,516,375,682,485,911,276,98,553,163,354,666,933,424,341,533,870,227,730,475,186,263,647,537,686,600,224,469,68,770,919,190,373,294,822,808,206,184,943,795,384,383,461,404,758,839,887,715,67,618,276,204,918,873,777,604,560,951,160,578,722,79,804,96,409,713,940,652,934,970,447,318,353,859,672,112,785,645,863,803,350,139,93,354,99,820,908,609,772,154,274,580,184,79,626,630,742,653,282,762,623,680,81,927,626,789,125,411,521,938,300,821,78,343,175,128,250,170,774,972,275,999,639,495,78,352,126,857,956,358,619,580,124,737,594,701,612,669,112,134,694,363,992,809,743,168,974,944,375,748,52,600,747,642,182,862,81,344,805,988,739,511,655,814,334,249,515,897,955,664,981,649,113,974,459,893,228,433,837,553,268,926,240,102,654,459,51,686,754,806,760,493,403,415,394,687,700,946,670,656,610,738,392,760,799,887,653,978,321,576,617,626,502,894,679,243,440,680,879,194,572,640,724,926,56,204,700,707,151,457,449,797,195,791,558,945,679,297,59,87,824,713,663,412,693,342,606,134,108,571,364,631,212,174,643,304,329,343,97,430,751,497,314,983,374,822,928,140,206,73,263,980,736,876,478,430,305,170,514,364,692,829,82,855,953,676,246,369,970,294,750,807,827,150,790,288,923,804,378,215,828,592,281,565,555,710,82,896,831,547,261,524,462,293,465,502,56,661,821,976,991,658,869,905,758,745,193,768,550,608,933,378,286,215,979,792,961,61,688,793,644,986,403,106,366,905,644,372,567,466,434,645,210,389,550,919,135,780,773,635,389,707,100,626,958,165,504,920,176,193,713,857,265,203,50,668,108,645,990,626,197,510,357,358,850,858,364,936,638],x.t)
D.cZ_=w(["video/webm;codecs=vp9","video/webm;codecs=vp8","video/webm","video/mp4"],x.s)
D.fOK=new C.oo("Original",0,1,1,0,0,0)
D.fOO=new C.oo("Black & white",0,1.1,0,0,0,0)
D.fOB=new C.oo("Noir",-0.05,1.55,0,0,0,0)
D.fOF=new C.oo("Sepia",0,1,0.25,0.9,0,0)
D.fOE=new C.oo("Vivid",0,1.15,1.6,0,0,0)
D.fOx=new C.oo("Pop",0,1.3,1.9,0,0,0)
D.fOz=new C.oo("Faded",0.06,0.85,0.8,0.1,0,0.4)
D.fOL=new C.oo("Matte",0,0.9,0.85,0,0,0.55)
D.fOG=new C.oo("Cool",0,1.05,1,-0.8,0,0)
D.fON=new C.oo("Warm",0.03,1.05,1.1,0.8,0,0)
D.fOy=new C.oo("Golden hour",0.04,1,1.25,1,0,0)
D.fOD=new C.oo("Moonlight",-0.08,1.1,0.8,-0.8,-0.1,0)
D.fOM=new C.oo("Dreamy",0.08,0.85,1.1,0.2,0,0.25)
D.fOC=new C.oo("Dramatic",-0.05,1.5,1.2,0,0,0)
D.fOI=new C.oo("Retro",0,0.9,0.7,0.4,0,0.35)
D.fOH=new C.oo("Forest",0,1,1.2,-0.1,-0.45,0)
D.fOJ=new C.oo("Rose",0,1,1.1,0.3,0.4,0)
D.fOA=new C.oo("Ocean",0,1,1.2,-0.5,-0.2,0)
D.cZ0=w([D.fOK,D.fOO,D.fOB,D.fOF,D.fOE,D.fOx,D.fOz,D.fOL,D.fOG,D.fON,D.fOy,D.fOD,D.fOM,D.fOC,D.fOI,D.fOH,D.fOJ,D.fOA],B.ax("O<oo>"))
D.b5d=new B.w(1,0.0392156862745098,0.1803921568627451,0.09019607843137255,A.t)
D.cZ1=w([D.adY,A.e9,D.b5d],x.O)
D.ebH=new B.y(0.12,0.3)
D.ers=new B.y(0.26,0.75)
D.epM=new B.y(0.8,0.22)
D.evc=new B.y(0.9,0.7)
D.esf=new B.y(0.5,0.15)
D.etx=new B.y(0.65,0.85)
D.eho=new B.y(0.08,0.85)
D.cZd=w([D.ebH,D.ers,D.epM,D.evc,D.esf,D.etx,D.eho],x.G)
D.avA=w([A.b7,A.bV,A.by,A.b8],x.O)
D.d_0=w([y.L,"Mbuzi Wawili","Ngyoka","Mmoko"],x.s)
D.d_c=w([A.c,A.fh,A.dy,A.uQ],x.O)
D.b8o=new B.w(1,0.10980392156862745,0.09019607843137255,0.06274509803921569,A.t)
D.d09=w([D.b8o,D.acB],x.O)
D.d0a=w([A.wT,A.aw],x.O)
D.d0o=w([0,0.25,0.75,1],x.x)
D.d0q=w([A.wP,A.oo],x.O)
D.aEi=new C.kN(10,"kenteSunset")
D.fT_=w([D.acZ,A.jL,A.aw],x.O)
D.dvD=new C.ji("kuhowa_kente_sunset","Kente ya Jua",y.H,D.aEi,4294964964,4282000405,4279983648,D.jD)
D.aEj=new C.kN(11,"indigoMudcloth")
D.b69=new B.w(1,0.9686274509803922,0.9411764705882353,0.8941176470588236,A.t)
D.fTd=w([D.b69,A.acy,A.hV],x.O)
D.dvL=new C.ji("kuhowa_indigo_mudcloth","Nguo ya Indigo",y.n,D.aEj,4294439140,4279903102,4279903102,D.jD)
D.aEk=new C.kN(12,"adinkraRoyal")
D.biE=new B.w(1,0.4196078431372549,0.24705882352941178,0.12156862745098039,A.t)
D.fTe=w([D.abx,D.biE,A.aw],x.O)
D.dvN=new C.ji("kuhowa_adinkra_royal","Muhuri wa Adinkra",y.z,D.aEk,4294965484,4285218591,4287322667,D.jD)
D.aEl=new C.kN(13,"nileLotus")
D.bf2=new B.w(1,0.9568627450980393,0.9686274509803922,0.9568627450980393,A.t)
D.bbR=new B.w(1,0.058823529411764705,0.3607843137254902,0.3607843137254902,A.t)
D.fTj=w([D.bf2,D.bbR,A.hV],x.O)
D.dvM=new C.ji("kuhowa_nile_lotus","Lotus ya Nile","Nguzo za papyrus na ua la lotus juu.",D.aEl,4294244340,4279196764,4279196764,D.jD)
D.aEm=new C.kN(14,"shweshweIvory")
D.ba8=new B.w(1,0.9725490196078431,0.9568627450980393,0.9333333333333333,A.t)
D.b91=new B.w(1,0.10588235294117647,0.16470588235294117,0.2901960784313726,A.t)
D.b6D=new B.w(1,0.7686274509803922,0.3607843137254902,0.24313725490196078,A.t)
D.fT0=w([D.ba8,D.b91,D.b6D],x.O)
D.dvI=new C.ji("kuhowa_shweshwe_ivory","Shweshwe","Nguo ya shweshwe \xb7 kadi ya pembe ndani.",D.aEm,4294505710,4279970378,4291058750,D.jD)
D.rh=new C.kN(15,"certIvoryNavy")
D.fSZ=w([D.KL,D.j5,A.hV],x.O)
D.aDO=new C.xd(1,"ringsNdoa")
D.dvF=new C.ji("kuhowa_rings_ndoa","Hati ya Ndoa","Pete mbili \xb7 vichwa vya kidonge \xb7 hati rasmi.",D.rh,4294966259,4279378237,4291404327,D.aDO)
D.a3O=new C.xd(2,"coupleCards")
D.dvA=new C.ji("kuhowa_couple_taarifa","Taarifa za Wanandoa","Picha ya mwanamume na mwanamke kila upande.",D.rh,4294966259,4279378237,4291404327,D.a3O)
D.Cc=new C.kN(18,"certIvoryNavyBar")
D.abw=new B.w(1,1,0.9882352941176471,0.9686274509803922,A.t)
D.fTc=w([D.abw,D.j5,A.hV],x.O)
D.aDP=new C.xd(3,"kuhoweshaForm")
D.dvy=new C.ji("kuhowa_barua","Barua ya Kuhowesha","Barua rasmi \xb7 pete \xb7 orodha ya vitu.",D.Cc,4294966519,4279378237,4291404327,D.aDP)
D.acM=new B.w(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,A.t)
D.fTw=w([D.KL,D.acM,A.hV],x.O)
D.a3P=new C.xd(4,"mahariPande")
D.dvB=new C.ji("kuhowa_mahari_pande","Mahari ya Pande","Masharti ya mahari \xb7 pande mbili.",D.rh,4294966259,4279904068,4291404327,D.a3P)
D.aEn=new C.kN(16,"certIvoryGreen")
D.b9z=new B.w(1,0.12156862745098039,0.30196078431372547,0.22745098039215686,A.t)
D.fT2=w([A.K2,D.b9z,A.hV],x.O)
D.aDQ=new C.xd(5,"familiaMti")
D.dvH=new C.ji("kuhowa_sheria_familia","Sheria za Familia","Mti wa familia \xb7 sheria za pamoja.",D.aEn,4294966776,4280241466,4291404327,D.aDQ)
D.a3Q=new C.xd(6,"ndoaSafi")
D.dvz=new C.ji("kuhowa_ndoa_pamoja","Ndoa ya Pamoja","Safu mbili \xb7 mume na mke.",D.Cc,4294966519,4279378237,4291404327,D.a3Q)
D.bdA=new B.w(1,0.22745098039215686,0.16470588235294117,0.06274509803921569,A.t)
D.fT5=w([D.KL,A.hV,D.bdA],x.O)
D.a3R=new C.xd(7,"peteWide")
D.dvE=new C.ji("kuhowa_pete_pana","Pete Pana","Pete kubwa za dhahabu \xb7 nafasi wazi.",D.rh,4294966259,4282001936,4291404327,D.a3R)
D.dvO=new C.xd(8,"muhuriCrest")
D.dvx=new C.ji("kuhowa_muhuri","Muhuri wa Familia","Muhuri mkubwa juu \xb7 fomu rasmi.",D.rh,4294966259,4279378237,4291404327,D.dvO)
D.fTf=w([D.abw,D.acM,A.hV],x.O)
D.dvP=new C.xd(9,"fomuWazi")
D.dvK=new C.ji("kuhowa_fomu","Fomu ya Ndoa","Fomu yenye mistari \xb7 sehemu wazi.",D.Cc,4294966519,4279904068,4291404327,D.dvP)
D.aEo=new C.kN(17,"certIvoryRose")
D.bab=new B.w(1,1,0.9725490196078431,0.9607843137254902,A.t)
D.fTi=w([D.bab,D.adA,A.hV],x.O)
D.a3N=new C.xd(10,"upendoOrnate")
D.dvG=new C.ji("kuhowa_upendo","Upendo wa Dhahabu","Mapambo ya dhahabu \xb7 picha za wanandoa.",D.aEo,4294965493,4286200650,4291404327,D.a3N)
D.d0O=w([D.dvD,D.dvL,D.dvN,D.dvM,D.dvI,D.dvF,D.dvA,D.dvy,D.dvB,D.dvH,D.dvz,D.dvE,D.dvx,D.dvK,D.dvG],x.h)
D.e6=w([2774754246,2222750968,2574743534,2373680118,234025727,3177933782,2976870366,1422247313,1345335392,50397442,2842126286,2099981142,436141799,1658312629,3870010189,2591454956,1170918031,2642575903,1086966153,2273148410,368769775,3948501426,3376891790,200339707,3970805057,1742001331,4255294047,3937382213,3214711843,4154762323,2524082916,1539358875,3266819957,486407649,2928907069,1780885068,1513502316,1094664062,49805301,1338821763,1546925160,4104496465,887481809,150073849,2473685474,1943591083,1395732834,1058346282,201589768,1388824469,1696801606,1589887901,672667696,2711000631,251987210,3046808111,151455502,907153956,2608889883,1038279391,652995533,1764173646,3451040383,2675275242,453576978,2659418909,1949051992,773462580,756751158,2993581788,3998898868,4221608027,4132590244,1295727478,1641469623,3467883389,2066295122,1055122397,1898917726,2542044179,4115878822,1758581177,0,753790401,1612718144,536673507,3367088505,3982187446,3194645204,1187761037,3653156455,1262041458,3729410708,3561770136,3898103984,1255133061,1808847035,720367557,3853167183,385612781,3309519750,3612167578,1429418854,2491778321,3477423498,284817897,100794884,2172616702,4031795360,1144798328,3131023141,3819481163,4082192802,4272137053,3225436288,2324664069,2912064063,3164445985,1211644016,83228145,3753688163,3249976951,1977277103,1663115586,806359072,452984805,250868733,1842533055,1288555905,336333848,890442534,804056259,3781124030,2727843637,3427026056,957814574,1472513171,4071073621,2189328124,1195195770,2892260552,3881655738,723065138,2507371494,2690670784,2558624025,3511635870,2145180835,1713513028,2116692564,2878378043,2206763019,3393603212,703524551,3552098411,1007948840,2044649127,3797835452,487262998,1994120109,1004593371,1446130276,1312438900,503974420,3679013266,168166924,1814307912,3831258296,1573044895,1859376061,4021070915,2791465668,2828112185,2761266481,937747667,2339994098,854058965,1137232011,1496790894,3077402074,2358086913,1691735473,3528347292,3769215305,3027004632,4199962284,133494003,636152527,2942657994,2390391540,3920539207,403179536,3585784431,2289596656,1864705354,1915629148,605822008,4054230615,3350508659,1371981463,602466507,2094914977,2624877800,555687742,3712699286,3703422305,2257292045,2240449039,2423288032,1111375484,3300242801,2858837708,3628615824,84083462,32962295,302911004,2741068226,1597322602,4183250862,3501832553,2441512471,1489093017,656219450,3114180135,954327513,335083755,3013122091,856756514,3144247762,1893325225,2307821063,2811532339,3063651117,572399164,2458355477,552200649,1238290055,4283782570,2015897680,2061492133,2408352771,4171342169,2156497161,386731290,3669999461,837215959,3326231172,3093850320,3275833730,2962856233,1999449434,286199582,3417354363,4233385128,3602627437,974525996],x.t)
D.Hz=new C.vH(0,"emojis")
D.Cj=new C.vH(1,"pictures")
D.HA=new C.vH(2,"icons3d")
D.a47=new C.vH(3,"animations")
D.Rb=new C.vH(4,"videoMotion")
D.Ck=new C.vH(5,"luxe")
D.a1W=w([D.Hz,D.Cj,D.HA,D.a47,D.Rb,D.Ck],B.ax("O<vH>"))
D.eu7=new B.y(A.dW,"Looks")
D.ejn=new B.y(A.yb,"Light")
D.ejj=new B.y(A.n9,"Colour")
D.ehp=new B.y(A.xL,"Effects")
D.ajT=new B.a0(63112,"MaterialIcons",!1)
D.eet=new B.y(D.ajT,"Crop")
D.d1j=w([D.eu7,D.ejn,D.ejj,D.ehp,D.eet],x.f2)
D.d1W=w([],x.D)
D.fTt=w([],x.L)
D.ehC=new B.y("Flashcard",D.Hu)
D.elh=new B.y("Quiz",D.Hv)
D.en8=new B.y("Worksheet",D.Hw)
D.ekm=new B.y("Notes",D.mu)
D.elM=new B.y("Section",D.Ch)
D.d2A=w([D.ehC,D.elh,D.en8,D.ekm,D.elM],B.ax("O<+(n,mq)>"))
D.dxu=new C.kN(6,"beadedPearl")
D.bcu=new B.w(1,0.47843137254901963,0.3607843137254902,0.1803921568627451,A.t)
D.fTx=w([O.Wz,D.bcu,A.hV],x.O)
D.aDM=new C.ji("malipo_beaded_pearl","Malipo \u2014 Lulu","Mpaka wa shanga za lulu kuzunguka pembeni \xb7 dhahabu na shaba.",D.dxu,4294966774,4286209070,4291404327,D.jD)
D.dxv=new C.kN(7,"artDeco")
D.bge=new B.w(1,0.9686274509803922,0.9607843137254902,0.9490196078431372,A.t)
D.biV=new B.w(1,0.12156862745098039,0.10588235294117647,0.08627450980392157,A.t)
D.fTv=w([D.bge,D.biV,A.bY],x.O)
D.aDN=new C.ji("malipo_art_deco","Malipo \u2014 Art Deco","Pembe za ngazi za kisasa \xb7 mng'ao wa dhahabu juu.",D.dxv,4294440434,4280228630,4290283019,D.jD)
D.dxw=new C.kN(8,"rosetteCorners")
D.bi7=new B.w(1,0.984313725490196,0.9647058823529412,0.9372549019607843,A.t)
D.b8r=new B.w(1,0.4196078431372549,0.24705882352941178,0.16470588235294117,A.t)
D.bcp=new B.w(1,0.788235294117647,0.4823529411764706,0.23921568627450981,A.t)
D.fT8=w([D.bi7,D.b8r,D.bcp],x.O)
D.aDL=new C.ji("malipo_rosette","Malipo \u2014 Duara","Medali ya duara kila pembe \xb7 shaba na mahogany.",D.dxw,4294702831,4285218602,4291394365,D.jD)
D.dxx=new C.kN(9,"modernLedger")
D.fT7=w([A.c,D.j5,D.j5],x.O)
D.aDK=new C.ji("malipo_modern_ledger","Malipo \u2014 Kisasa","Ukanda thabiti wa bluu upande wa kushoto \xb7 mstari mwembamba.",D.dxx,4294967295,4279378237,4279378237,D.jD)
D.d2E=w([D.aDM,D.aDN,D.aDL,D.aDK],x.h)
D.d2M=w([A.io,A.oo],x.O)
D.cg=new C.hw(0,"none")
D.dd=new C.hw(1,"fade")
D.Hx=new C.hw(3,"slideRight")
D.aEK=new C.hw(5,"slideDown")
D.dS8=new C.hw(7,"zoomOut")
D.a46=new C.hw(11,"cube")
D.dS3=new C.hw(12,"blur")
D.aEH=new C.hw(13,"dissolve")
D.dS4=new C.hw(14,"wipeLeft")
D.dS5=new C.hw(15,"wipeRight")
D.Ra=new C.hw(17,"push")
D.dS6=new C.hw(18,"flash")
D.aEJ=new C.hw(20,"swing")
D.dS7=new C.hw(21,"curtain")
D.PP=w([D.cg,D.dd,D.u7,D.Hx,D.u8,D.aEK,D.mv,D.dS8,D.Hy,D.aEL,D.R9,D.a46,D.dS3,D.aEH,D.dS4,D.dS5,D.q0,D.Ra,D.dS6,D.aEI,D.aEJ,D.dS7],x.i)
D.PQ=w([D.a3M,D.a3K,D.a3D,D.a3E,D.a3F,D.a3I,D.a3G,D.a3H,D.a3L,D.a3J,D.aDM,D.aDN,D.aDL,D.aDK],x.h)
D.d3d=w([y.L,"Mbuzi Mbili","Ngyoka","Mmoko"],x.s)
D.d3h=w([A.Ae,A.hE,A.bY],x.O)
D.eiI=new B.y(A.tJ,"Design")
D.evC=new B.y(D.ak9,"Word sizes")
D.es_=new B.y(A.Bs,"Text")
D.bCn=new B.a0(983182,"MaterialIcons",!1)
D.es3=new B.y(D.bCn,"Photo")
D.ee5=new B.y(A.lf,"Logo")
D.ewK=new B.y(A.G5,"News")
D.d3m=w([D.eiI,D.evC,D.es_,D.es3,D.ee5,D.ewK],x.f2)
D.d3n=w(["golddust","sparkle","sheen"],x.s)
D.dTv=new C.es("upload_pdf",K.N9,"Upload PDF")
D.dSF=new C.es("sign_paper",A.G2,"Sign Paper")
D.bBE=new B.a0(63438,"MaterialIcons",!1)
D.dTr=new C.es("hd_photo",D.bBE,"HD Photo")
D.dSx=new C.es("sharpen",E.ZQ,"Sharpen")
D.dSH=new C.es("print",K.N9,"Download PDF")
D.dT8=new C.es("rotate",D.ajT,"Rotate")
D.dSQ=new C.es("text_box",A.Bs,"Text Box")
D.dSS=new C.es("picture",A.tM,"Picture")
D.dSO=new C.es("title",A.y5,"Title")
D.dSK=new C.es("subtitle",T.akM,"Subtitle")
D.dTh=new C.es("bullets",I.a_6,"Bullet List")
D.dSL=new C.es("numbered",A.MZ,"Numbered")
D.dTk=new C.es("quote",A2.Bk,"Quote")
D.dSX=new C.es("citation",A.pL,"Citation")
D.dTn=new C.es("date_stamp",Ah.ZV,"Date Stamp")
D.dTa=new C.es("page_number",A.y4,"Page #")
D.dTe=new C.es("header_bar",A.Bu,"Header")
D.dSR=new C.es("footer_bar",Ar.a_D,"Footer")
D.dSG=new C.es("divider",A.tL,"Divider")
D.dSC=new C.es("highlight",A.a_b,"Highlight")
D.dTg=new C.es("redact",A.y8,"Redact")
D.dT3=new C.es("callout",A.Bg,"Callout")
D.dTp=new C.es("checkboxes",I.aj8,"Checklist")
D.dT0=new C.es("table",A.a_B,"Table")
D.dSV=new C.es("memo",I.a_n,"Memo")
D.dT4=new C.es("letter",A.FS,"Letter")
D.bBg=new B.a0(63259,"MaterialIcons",!0)
D.dSw=new C.es("agenda",D.bBg,"Agenda")
D.dSI=new C.es("toc",AA.akm,"Contents")
D.bBA=new B.a0(63406,"MaterialIcons",!1)
D.dT1=new C.es("sig_line",D.bBA,"Sign Line")
D.dSp=new C.es("initial_line",A.jg,"Initials")
D.dSs=new C.es("approved",A.lf,"APPROVED")
D.dT6=new C.es("draft",A.oH,"DRAFT")
D.dTc=new C.es("confidential",A.jh,"Confidential")
D.dTf=new C.es("sticky",A.Nf,"Sticky Note")
D.dTo=new C.es("progress",A.akl,"Progress")
D.bCQ=new B.a0(983507,"MaterialIcons",!1)
D.dSD=new C.es("stars",D.bCQ,"Star Rating")
D.dSn=new C.es("equation",A.akc,"Equation")
D.dSy=new C.es("timeline",A.Ng,"Timeline")
D.dSW=new C.es("two_col",A.a_E,"Two Columns")
D.dSA=new C.es("compare",A1.ZY,"Compare")
D.dSl=new C.es("duplicate_el",A.fK,"Duplicate")
D.dTt=new C.es("delete_el",A.e4,"Delete")
D.dTj=new C.es("bring_fwd",O.ak5,"Bring Front")
D.dSq=new C.es("send_back",O.ak4,"Send Back")
D.dT5=new C.es("align_left",D.a_4,"Align L")
D.dTb=new C.es("align_center",D.a_3,"Align C")
D.dTs=new C.es("align_right",D.a_5,"Align R")
D.dSP=new C.es("word_count",A0.Zz,"Word Count")
D.dSM=new C.es("link_text",A.hk,"Link")
D.dT9=new C.es("phone",A.iA,"Phone")
D.dSB=new C.es("email",A.Bi,"Email")
D.dTu=new C.es("qr_placeholder",A.jj,"QR Placeholder")
D.dSv=new C.es("rectangle",A3.vn,"Rectangle")
D.dT_=new C.es("circle",A.qS,"Circle")
D.dSr=new C.es("arrow",A.iS,"Arrow")
D.dTi=new C.es("line",A.tL,"Line")
D.dSE=new C.es("triangle",A.ZW,"Triangle")
D.bBo=new B.a0(63318,"MaterialIcons",!1)
D.dSJ=new C.es("grayscale",D.bBo,"Grayscale")
D.dST=new C.es("brighten",I.ajs,"Brighten")
D.dSY=new C.es("flip_h",A.FI,"Flip H")
D.bBv=new B.a0(63348,"MaterialIcons",!1)
D.dTq=new C.es("flip_v",D.bBv,"Flip V")
D.dTd=new C.es("cover_page",A.pG,"Cover Page")
D.dSo=new C.es("invoice",A.h9,"Invoice")
D.dSz=new C.es("resume",A.mi,"Resume")
D.dSN=new C.es("minutes",A.oB,"Minutes")
D.dSt=new C.es("lab_report",A.Nc,"Lab Report")
D.dSu=new C.es("rubric",A.xP,"Rubric")
D.dSZ=new C.es("flashcard_tool",V.FZ,"Flashcard")
D.dTl=new C.es("quiz_tool",A.FW,"Quiz Block")
D.dT2=new C.es("worksheet_tool",L.Fz,"Worksheet")
D.dT7=new C.es("outline_share",A.Nd,"Share Outline")
D.dTm=new C.es("export_json",D.aje,"Export JSON")
D.dSm=new C.es("new_slide",D.Zy,"New Slide")
D.dSU=new C.es("present",A.pN,"Present")
D.d3N=w([D.dTv,D.dSF,D.dTr,D.dSx,D.dSH,D.dT8,D.dSQ,D.dSS,D.dSO,D.dSK,D.dTh,D.dSL,D.dTk,D.dSX,D.dTn,D.dTa,D.dTe,D.dSR,D.dSG,D.dSC,D.dTg,D.dT3,D.dTp,D.dT0,D.dSV,D.dT4,D.dSw,D.dSI,D.dT1,D.dSp,D.dSs,D.dT6,D.dTc,D.dTf,D.dTo,D.dSD,D.dSn,D.dSy,D.dSW,D.dSA,D.dSl,D.dTt,D.dTj,D.dSq,D.dT5,D.dTb,D.dTs,D.dSP,D.dSM,D.dT9,D.dSB,D.dTu,D.dSv,D.dT_,D.dSr,D.dTi,D.dSE,D.dSJ,D.dST,D.dSY,D.dTq,D.dTd,D.dSo,D.dSz,D.dSN,D.dSt,D.dSu,D.dSZ,D.dTl,D.dT2,D.dT7,D.dTm,D.dSm,D.dSU],B.ax("O<es>"))
D.d3W=w([A.cp,A.ak],x.O)
D.edF=new B.y(4286331629,4292552567)
D.eds=new B.y(4280640491,4278630100)
D.edN=new B.y(4294538006,4292943176)
D.ecP=new B.y(4278556265,4280640491)
D.cZn=w([D.edF,D.eds,D.edN,D.ecP],x.n)
D.coh=w([4294626325,4280472558,4294210230],x.t)
D.dSg=new C.nD("colorful","Colorful",A.n9,D.cZn,4294967295,3875536895,D.coh,D.mv)
D.edg=new B.y(4279522093,4279657780)
D.edw=new B.y(4281750292,4283268111)
D.ecS=new B.y(4278603323,4279203438)
D.edx=new B.y(4282343954,4279599165)
D.cz3=w([D.edg,D.edw,D.ecS,D.edx],x.n)
D.co_=w([4288931381,4294829706,4287033260],x.t)
D.dSc=new C.nD("nature","Nature",A.G3,D.cz3,4294442727,3874290891,D.co_,D.dd)
D.eda=new B.y(4279369771,4283178389)
D.ed7=new B.y(4279179050,4286456526)
D.edo=new B.y(4280163147,4290648157)
D.ecH=new B.y(4278322711,4285343961)
D.cQj=w([D.eda,D.ed7,D.edo,D.ecH],x.n)
D.cod=w([4294210230,4280472558,4289170426],x.t)
D.dSa=new C.nD("vibe","Vibe",A.a_9,D.cQj,4294967295,3874869502,D.cod,D.u7)
D.edJ=new B.y(4290007817,4292552567)
D.edD=new B.y(4286328082,4294286859)
D.edI=new B.y(4288485197,4294538006)
D.edC=new B.y(4285343961,4293675161)
D.bVt=w([D.edJ,D.edD,D.edI,D.edC],x.n)
D.coi=w([4294829706,4294967295,4284999929],x.t)
D.dSb=new C.nD("celebration","Celebration",A.la,D.bVt,4294967295,4009752557,D.coi,D.q0)
D.ed5=new B.y(4279179050,4280171146)
D.ed9=new B.y(4279310375,4280232247)
D.ecY=new B.y(4278916151,4280172719)
D.ed6=new B.y(4279179050,4281549141)
D.cJA=w([D.ed5,D.ed9,D.ecY,D.ed6],x.n)
D.cnV=w([4281908728,4294626325,4287931320],x.t)
D.dSf=new C.nD("professional","Professional",A.Be,D.cJA,4294967295,3872118241,D.cnV,D.Ra)
D.ed1=new B.y(4278995566,4278413729)
D.ecU=new B.y(4278727492,4279137424)
D.edp=new B.y(4280171146,4278751666)
D.ed2=new B.y(4278995566,4279590517)
D.cs2=w([D.ed1,D.ecU,D.edp,D.ed2],x.n)
D.cnY=w([4286436348,4284410580,4294829706],x.t)
D.dSh=new C.nD("ocean","Ocean",I.a_G,D.cs2,4294967295,3873501950,D.cnY,D.u8)
D.edE=new B.y(4286328082,4294538006)
D.edG=new B.y(4286781507,4294677052)
D.edA=new B.y(4283178389,4294197086)
D.edH=new B.y(4288295954,4294688548)
D.cFN=w([D.edE,D.edG,D.edA,D.edH],x.n)
D.coj=w([4294829706,4294967295,4294747557],x.t)
D.dSi=new C.nD("sunset","Sunset",A.Ni,D.cFN,4294967295,4009749973,D.coj,D.dd)
D.edR=new B.y(4294967295,4294047225)
D.edM=new B.y(4294507260,4294967295)
D.edQ=new B.y(4294967295,4293060848)
D.edL=new B.y(4294507260,4294047225)
D.cTm=w([D.edR,D.edM,D.edQ,D.edL],x.n)
D.cnT=w([4280640491,4279179050,4287931320],x.t)
D.dSe=new C.nD("minimal","Minimal",A3.vn,D.cTm,4279179050,4282865001,D.cnT,D.dd)
D.ed0=new B.y(4278979081,4280886564)
D.edk=new B.y(4280031511,4278979081)
D.ed8=new B.y(4279308561,4281148438)
D.ed_=new B.y(4278979081,4280031511)
D.d5P=w([D.ed0,D.edk,D.ed8,D.ed_],x.n)
D.co6=w([4292128567,4294829706,4289241758],x.t)
D.dSj=new C.nD("elegant","Elegant",A.lM,D.d5P,4294898631,3873957348,D.co6,D.aEH)
D.edm=new B.y(4280159034,4282058596)
D.ecX=new B.y(4278916151,4280163147)
D.edu=new B.y(4281208933,4278916151)
D.edd=new B.y(4279502891,4283178389)
D.dcd=w([D.edm,D.ecX,D.edu,D.edd],x.n)
D.cof=w([4294296657,4292128567,4291081725],x.t)
D.dSd=new C.nD("royal","Royal Gold",A.iV,D.dcd,4294965222,3874084351,D.cof,D.mv)
D.ecM=new B.y(4278464302,4280163147)
D.ecW=new B.y(4278916151,4279455306)
D.edn=new B.y(4280163147,4283040846)
D.ecJ=new B.y(4278332450,4281413249)
D.cZ4=w([D.ecM,D.ecW,D.edn,D.ecJ],x.n)
D.cnU=w([4281193663,4289170426,4294210230],x.t)
D.dSk=new C.nD("aurora","Aurora Glow",A.dW,D.cZ4,4293983738,3869766608,D.cnU,D.dd)
D.vJ=w([D.dSg,D.dSc,D.dSa,D.dSb,D.dSf,D.dSh,D.dSi,D.dSe,D.dSj,D.dSd,D.dSk],B.ax("O<nD>"))
D.bcZ=new B.w(0.13333333333333333,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.t)
D.d4r=w([A.qA,D.bcZ,A.qA],x.O)
D.d4I=w([4279179050,4281549141,4280640491,4278556265,4292617766,4286331629,4293548044,4278751666,4294967295,4294688548],x.t)
D.d4M=w([null,4294967295,4279310375,4294626325,4280472558,4294210230,4283096704,4293870660,4282090230,4294677052],x.Z)
D.erS=new B.y("The NGMY app","Write the front-page story about the NGMY app and everything it offers.")
D.eii=new B.y("KB PABLO QR, our CEO","Write a respectful story about KB PABLO QR, Founder, President and CEO of NGMY, and what he built.")
D.emK=new B.y("Civic Registry","Write about the Civic Registry: why it was built, receipts, registrars and trust in the community.")
D.eaO=new B.y("NGMY Advisors","Write about the NGMY Advisors, the AI advisors who help members.")
D.elr=new B.y("Growth Income","Write about Growth Income, the wallet and how members earn on work days.")
D.ejI=new B.y("Core Protocol studios","Write about the Core Protocol studios, the Body Explorer and the learning labs.")
D.enT=new B.y("Surprise me","")
D.d5g=w([D.erS,D.eii,D.emK,D.eaO,D.elr,D.ejI,D.enT],x.L)
D.b6F=new B.w(1,0.9450980392156862,0.9294117647058824,0.8941176470588236,A.t)
D.bgH=new B.w(1,0.796078431372549,0.7647058823529411,0.7019607843137254,A.t)
D.d60=w([A.c,D.b6F,D.bgH],x.O)
D.d7M=w([1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0],x.x)
D.aEg=new C.kN(0,"heritageGold")
D.bbG=new B.w(1,0.9764705882352941,0.9450980392156862,0.8666666666666667,A.t)
D.fTy=w([D.bbG,W.acW,A.aw],x.O)
D.dvJ=new C.ji("kuhowa_heritage_gold","Kuhowa \u2014 Hazina ya Dhahabu","Mpaka mzito wa kikabila \xb7 dhahabu na hudhurungi.",D.aEg,4294570461,4284234270,4292128567,D.jD)
D.aEh=new C.kN(1,"heritageCrimson")
D.b59=new B.w(1,0.9803921568627451,0.9411764705882353,0.9019607843137255,A.t)
D.ba9=new B.w(1,0.4196078431372549,0.16470588235294117,0.11764705882352941,A.t)
D.bgx=new B.w(1,0.8784313725490196,0.6431372549019608,0.34509803921568627,A.t)
D.fTb=w([D.b59,D.ba9,D.bgx],x.O)
D.dvC=new C.ji("kuhowa_heritage_crimson","Kuhowa \u2014 Hazina Nyekundu","Mpaka mzito wa kikabila \xb7 nyekundu na dhahabu.",D.aEh,4294635750,4285213214,4292912216,D.jD)
D.d7Q=w([D.a3M,D.a3K,D.dvJ,D.dvC,D.a3F,D.a3I],x.h)
D.dBB=new C.rg(1,"circuit")
D.dC3=new C.m_("neural","Neural Link","Robotic",D.dBB,4278322711,4279179050,4280472558,4284704497,4292932350,"One link at a time, NGMY connects young people everywhere.")
D.dBA=new C.rg(0,"grid")
D.dC0=new C.m_("signal","Signal Grid","Robotic",D.dBA,4280163147,4278322711,4289222135,4293675161,4294308863,"A strong signal starts with one voice. Make yours heard.")
D.dBG=new C.rg(2,"hexes")
D.dBM=new C.m_("core","Core Protocol","Robotic",D.dBG,4278464302,4278322711,4281193663,4281908728,4291623921,"Our core is simple: help each other grow.")
D.aEE=new C.rg(11,"diagonal")
D.dBX=new C.m_("steel","Steel Tech","Robotic",D.aEE,4281549141,4279179050,4287931320,4281908728,4294047225,"Build with your hands, lead with your heart.")
D.aEF=new C.rg(3,"rings")
D.dBL=new C.m_("vault","Vault Gold","Robotic",D.aEF,4280031511,4278190080,4294626325,4294286859,4294898631,"What you build together is worth more than gold.")
D.dBE=new C.rg(13,"leaves")
D.dBO=new C.m_("forest","Forest Morning","Nature",D.dBE,4279522093,4278529558,4283096704,4288931381,4293983732,"Like a forest, a community grows strongest together.")
D.aEG=new C.rg(5,"waves")
D.dBV=new C.m_("ocean","Ocean Calm","Nature",D.aEG,4278413729,4278995566,4281908728,4284999929,4293982719,"Small waves become a movement. Keep going.")
D.dBH=new C.rg(6,"sunset")
D.dC_=new C.m_("sunset","Sunset Glow","Nature",D.dBH,4294538006,4290648157,4294829706,4294668677,4294967295,"Every sunset is a promise that tomorrow can be better.")
D.dBI=new C.rg(7,"mountains")
D.dBN=new C.m_("mountain","Mountain Air","Nature",D.dBI,4282595530,4280171146,4291285758,4286680312,4293849855,"Climb together. The view is better with friends.")
D.dBJ=new C.rg(8,"stars")
D.dBU=new C.m_("night","Night Sky","Nature",D.dBJ,4280163147,4278190080,4294829706,4291081725,4294308863,"Dream big. NGMY is built by people who looked up.")
D.a44=new C.rg(4,"orbs")
D.dBS=new C.m_("aurora","Aurora","Nature",D.a44,4278603323,4283178389,4281652121,4289170426,4294967295,"Light shows up when people choose to shine together.")
D.dC1=new C.m_("sand","Sand Dune","Nature",D.aEG,4294829706,4292441862,4290007817,4294966251,4282718723,"Patience builds a legacy, one grain at a time.")
D.dBK=new C.rg(9,"rays")
D.dBR=new C.m_("golden","Golden Hour","Warm",D.dBK,4294286859,4290321436,4294897802,4294967295,4294967295,"Your hour is now. Start where you are.")
D.dBP=new C.m_("royal","Royal Purple","Warm",D.aEE,4286456526,4290648157,4293962748,4294829706,4294967295,"Lead with respect, and people will follow with joy.")
D.dBQ=new C.m_("rose","Rose Petal","Warm",D.a44,4294668677,4292943176,4294960358,4294812847,4294967295,"Kindness is the strongest thing a community can grow.")
D.dBD=new C.rg(12,"blocks")
D.dBT=new C.m_("electric","Electric Blue","Bold",D.dBD,4280640491,4278751666,4290438909,4294967295,4294967295,"Energy is contagious. Bring yours to NGMY.")
D.dC2=new C.m_("mint","Fresh Mint","Bold",D.a44,4281652121,4278630100,4294967295,4289197008,4278603323,"Fresh ideas grow when young people lead.")
D.dBF=new C.rg(14,"minimal")
D.dBZ=new C.m_("white","Clean White","Clean",D.dBF,4294967295,4294047225,4280640491,4287931320,4279179050,"Simple words, strong purpose. That is NGMY.")
D.dBC=new C.rg(10,"frame")
D.dBW=new C.m_("midnight","Midnight Gold","Clean",D.dBC,4279179050,4278322711,4294626325,4294829706,4294966251,"Quiet work in the dark makes the morning shine.")
D.dBY=new C.m_("community","Community Green","Clean",D.aEF,4278556265,4280640491,4289197008,4290763774,4294967295,"The New Global Movement for Youth starts with you.")
D.a2m=w([D.dC3,D.dC0,D.dBM,D.dBX,D.dBL,D.dBO,D.dBV,D.dC_,D.dBN,D.dBU,D.dBS,D.dC1,D.dBR,D.dBP,D.dBQ,D.dBT,D.dC2,D.dBZ,D.dBW,D.dBY],B.ax("O<m_>"))
D.d8c=w([D.Am,A.wT,A.hE,A.bY],x.O)
D.d8s=w([D.adL,D.j5],x.O)
D.d8B=w(["pdf","docx","txt","md"],x.s)
D.eA2=new B.bv(-3,150,34)
D.eA3=new B.bv(-3,214,62)
D.eA4=new B.bv(-3,288,62)
D.d9p=w([D.eA2,D.eA3,D.eA4],B.ax("O<+(N,N,N)>"))
D.d9T=w(["rays","bokeh","aurora","spotlight"],x.s)
D.das=w(["Write","Design","Print & fold"],x.s)
D.jE=new C.uu(2,"triangle")
D.Ci=new C.uu(3,"arrow")
D.fp=new C.uu(4,"line")
D.jF=new C.uu(5,"parallelogram")
D.dav=w([D.be,D.eI,D.jE,D.Ci,D.fp,D.jF,D.kT],x.m)
D.ebV=new B.y(240,96)
D.eem=new B.y(560,46)
D.daA=w([D.ebV,D.eem],x.G)
D.fTJ=new C.xg(0,"classic")
D.dxA=new C.nz("heritage_gold","Urithi wa Dhahabu","Mpaka wa kitamaduni \xb7 rangi ya dhahabu na kahawia.",D.aEg,4294570461,4282000405,4284234270)
D.dxM=new C.nz("heritage_crimson","Urithi wa Nyekundu","Mpaka wa kitamaduni \xb7 rangi ya nyekundu na shaba.",D.aEh,4294635750,4281999378,4285213214)
D.dxB=new C.nz("elegant_navy","Umoja Mzuri",y.s,D.a3Z,4294967035,4279378237,4290283019)
D.dxO=new C.nz("elegant_gold","Umoja wa Dhahabu",y.Q,D.aEp,4294966515,4281016592,4289102906)
D.dxQ=new C.nz("kente_sunset","Kente ya Jua",y.H,D.aEi,4294964964,4282000405,4279983648)
D.dxy=new C.nz("indigo_mudcloth","Nguo ya Indigo",y.n,D.aEj,4294439140,4279903102,4279903102)
D.dxD=new C.nz("adinkra_royal","Muhuri wa Adinkra",y.z,D.aEk,4294965484,4285218591,4287322667)
D.dxI=new C.nz("nile_lotus","Lotus ya Nile","Nguzo za papyrus na ua la lotus juu.",D.aEl,4294244340,4279196764,4279196764)
D.dxK=new C.nz("shweshwe_ivory","Shweshwe","Nguo ya shweshwe \xb7 kadi ya pembe ndani.",D.aEm,4294505710,4279970378,4291058750)
D.fTK=new C.xg(1,"ringsNdoa")
D.dxC=new C.nz("rings_ndoa","Hati ya Ndoa","Pete mbili \xb7 vichwa vya kidonge \xb7 hati rasmi ya ndoa.",D.rh,4294966259,4279378237,4291404327)
D.fTM=new C.xg(2,"coupleCards")
D.dxN=new C.nz("couple_taarifa","Taarifa za Wanandoa","Picha ya mwanamume na mwanamke \xb7 kadi mbili za taarifa.",D.rh,4294966259,4279378237,4291404327)
D.fTN=new C.xg(3,"kuhoweshaForm")
D.dxJ=new C.nz("barua_kuhowesha","Barua ya Kuhowesha","Barua rasmi \xb7 orodha ya NIMETOWEA \xb7 mashahidi.",D.Cc,4294966519,4279378237,4291404327)
D.fTO=new C.xg(4,"mahariPande")
D.dxz=new C.nz("mahari_pande","Mahari ya Pande","Masharti ya mahari \xb7 pande mbili za sahihi.",D.rh,4294966259,4279904068,4291404327)
D.fTP=new C.xg(5,"familiaMti")
D.dxP=new C.nz("sheria_familia","Sheria za Familia","Mti wa familia \xb7 sheria za pamoja \xb7 kijani.",D.aEn,4294966776,4280241466,4291404327)
D.fTQ=new C.xg(6,"ndoaSafi")
D.dxG=new C.nz("ndoa_safi","Ndoa ya Pamoja","Safu mbili \xb7 mume na mke \xb7 masharti ya ndoa.",D.Cc,4294966519,4279378237,4291404327)
D.fTR=new C.xg(7,"peteWide")
D.dxF=new C.nz("pete_pana","Pete Pana","Pete kubwa za dhahabu \xb7 nafasi wazi \xb7 hati ya heshima.",D.rh,4294966259,4282001936,4291404327)
D.fTS=new C.xg(8,"muhuriCrest")
D.dxE=new C.nz("muhuri_familia","Muhuri wa Familia","Muhuri mkubwa juu \xb7 fomu rasmi ya familia.",D.rh,4294966259,4279378237,4291404327)
D.fTT=new C.xg(9,"fomuWazi")
D.dxH=new C.nz("fomu_wazi","Fomu ya Ndoa","Fomu yenye mistari \xb7 namba \xb7 sehemu wazi za kujaza.",D.Cc,4294966519,4279904068,4291404327)
D.fTL=new C.xg(10,"upendoOrnate")
D.dxL=new C.nz("upendo_dhahabu","Upendo wa Dhahabu","Mapambo ya dhahabu \xb7 picha za wanandoa \xb7 rangi ya waridi.",D.aEo,4294965493,4286200650,4291404327)
D.Q2=w([D.dxA,D.dxM,D.dxB,D.dxO,D.dxQ,D.dxy,D.dxD,D.dxI,D.dxK,D.dxC,D.dxN,D.dxJ,D.dxz,D.dxP,D.dxG,D.dxF,D.dxE,D.dxH,D.dxL],B.ax("O<nz>"))
D.Cg=new C.aq1(0,"landscape169")
D.o2=new C.aq1(1,"portrait916")
D.dbk=w([D.Cg,D.o2],B.ax("O<aq1>"))
D.ax1=w([A.hE,A.bK,A.ct,A.io,A.c],x.O)
D.u0=w([A.bY,A.it],x.O)
D.eba=new B.y(1000,"M")
D.efq=new B.y(900,"CM")
D.eeh=new B.y(500,"D")
D.ecF=new B.y(400,"CD")
D.ebb=new B.y(100,"C")
D.efr=new B.y(90,"XC")
D.eei=new B.y(50,"L")
D.ecG=new B.y(40,"XL")
D.ebf=new B.y(10,"X")
D.efB=new B.y(9,"IX")
D.eew=new B.y(5,"V")
D.ee4=new B.y(4,"IV")
D.ebC=new B.y(1,"I")
D.dbU=w([D.eba,D.efq,D.eeh,D.ecF,D.ebb,D.efr,D.eei,D.ecG,D.ebf,D.efB,D.eew,D.ee4,D.ebC],x.ek)
D.eAY=new B.cL(["open",A.jg,"Open & write","Keep writing this book"])
D.eBn=new B.cL(["print",A.tP,"Print as a book","Fold and staple it"])
D.dc3=w([D.eAY,D.eBn],B.ax("O<+(n,a0,n,n)>"))
D.dcI=w([D.a46,D.mv,D.Hy,D.Ra,D.dd,D.R9],x.i)
D.esp=new B.y(-1,"Small")
D.eaZ=new B.y(0,"Normal")
D.ebB=new B.y(1,"Big")
D.eca=new B.y(2,"Huge")
D.ddb=w([D.esp,D.eaZ,D.ebB,D.eca],x.ek)
D.ddB=w([49,65,89,38,83,89],x.t)
D.ddI=w([A.wT,A.hE,A.bY],x.O)
D.de8=w([D.dd,D.mv,D.u7,D.a46,D.Hy,D.Ra],x.i)
D.aCj=new B.dS([0,D.L2,8,D.af5,12,D.af6],B.ax("dS<H,a36>"))
D.dYf={gold:0,platinum:1,glow:2,rainbow:3,double:4,neon:5,framed:6,rosegold:7,jewels:8,aurora:9}
D.bgq=new B.w(1,0.8313725490196079,0.6274509803921569,0.09019607843137255,A.t)
D.cJK=w([A.bK,D.bgq],x.O)
D.d2m=w([A.b1,A.bj],x.O)
D.cYe=w([A.bV,A.aU,A.cn],x.O)
D.dc4=w([A.cp,A.bv],x.O)
D.cRd=w([A.b7,A.fg],x.O)
D.d_P=w([A.b5,A.f6],x.O)
D.b9U=new B.w(1,0.9529411764705882,0.7764705882352941,0.7098039215686275,A.t)
D.d_7=w([D.b9U,A.oo],x.O)
D.cUV=w([A.h_,A.wU],x.O)
D.cR1=w([A.bt,A.c8],x.O)
D.dgL=new B.bo(D.dYf,[D.cJK,H.anH,D.d2m,D.cYe,D.dc4,D.cRd,D.d_P,D.d_7,D.cUV,D.cR1],B.ax("bo<n,aj<w>>"))
D.dXp={"[Jina la Baba wa Mume]":0,"[Jina la Jamii ya Mume]":1,"[Jina la Nyumba ya Mume]":2,"[Jina la Kijana]":3,"[Jina la Binti]":4,"[Jina la Baba wa Binti]":5,"[Jina la Jamii ya Binti]":6,"[Jina la Nyumba ya Binti]":7}
D.a2Y=new B.bo(D.dXp,["[Jina la Baba wa Mume]","[Jina la Jamii ya Mume]","[Jina la Nyumba ya Mume]","[Jina la Kijana]","[Jina la Binti]","[Jina la Baba wa Binti]","[Jina la Jamii ya Binti]","[Jina la Nyumba ya Binti]"],B.ax("bo<n,n>"))
D.a34=new B.bo(A.ie,[],B.ax("bo<H,+icon3d,picture(n?,n?)>"))
D.dkO=new F.Mp(30,null)
D.dpS=new F.mm("Chapter 1","","","")
D.db6=w([D.dpS],x.B)
D.dpW=new F.r6("My Book","","",D.db6,E.aDz)
D.dpU=new F.uk("starry",null,null,null,null,"","","")
D.dpX=new F.r6("Dream Big","","",E.a24,D.dpU)
D.dpV=new F.uk("story",null,null,null,null,"","","")
D.dpY=new F.r6("Little Lion","","",E.a24,D.dpV)
D.dpT=new F.uk("vintage",null,null,null,null,"","","")
D.dpZ=new F.r6("Our Story","","",E.a24,D.dpT)
D.dsZ=new C.E5("","NGMY","","")
D.dAe=new C.z5("The NGMY Times","NGMY NEWS","","","By the NGMY Newsroom","",A.T,"","","")
D.dS9=new C.b_O(null,null,null,null)
D.dTS=new C.aq6(null)
D.dU4=new C.aqC(0,"smaller")
D.dU5=new C.aqC(1,"bigger")
D.aEU=new C.aqC(2,"fit")
D.e_F=new B.u(3,6)
D.e_P=new B.u(4,8)
D.e3d=new B.C(E.afT,T.aaT,null)
D.e3h=new B.C(A.Xw,A.lz,null)
D.bE6=new B.ae(A.ld,16,A.c_,null,null,null)
D.e3l=new B.C(A.jc,D.bE6,null)
D.b4C=new B.fi(2.2,null,null,null,null,A.c,null,null,null,null)
D.e3x=new B.C(A.Fc,D.b4C,null)
D.bOg=new B.ae(A.cA,16,A.az,null,null,null)
D.e3B=new B.C(A.en,D.bOg,null)
D.ff4=new B.x("Play",null,A.no,null,null,null,null,null,null,null,null,null)
D.d2B=w([U.amc,A.ru,D.ff4],x.p)
D.eFw=new B.cm(A.aO,A.e,A.Q,A.m,null,A.p,null,0,D.d2B,null)
D.e3E=new B.C(A.nQ,D.eFw,null)
D.b4L=new B.fi(2.4,null,null,null,null,null,null,null,null,null)
D.eKM=new B.a7(20,20,D.b4L,null)
D.e3J=new B.C(A.jc,D.eKM,null)
D.fnY=new B.x("Seconds per slide",null,A.ho,null,null,null,null,null,null,null,null,null)
D.e3R=new B.C(A.bk,D.fnY,null)
D.e5b=new C.a7W(2,"print")
D.e5e=new B.iM(1,0.7764705882352941,0.1568627450980392,0.1568627450980392)
D.e6R=new B.h6("/Annot")
D.e6T=new B.h6("/URI")
D.f9B=new B.x("Share text outline",null,null,null,null,null,null,null,null,null,null,null)
D.e8R=new B.jk("share",48,D.f9B,null,B.ax("jk<n>"))
D.bOa=new B.ae(A.dW,14,A.ez,null,null,null)
D.e9_=new B.cK(null,-2,-2,null,null,null,D.bOa,null)
D.bdp=new B.w(0.3333333333333333,0,0,0,A.t)
D.cLH=w([D.bdp,A.K],x.O)
D.bUj=new B.a8(A.a3,A.a7,A.x,D.cLH,null,null)
D.aYw=new B.o(null,null,null,null,null,D.bUj,A.n)
D.bl_=new B.kK(D.aYw,A.bd,null,null)
D.e9b=new B.cK(0,0,null,0,8,null,D.bl_,null)
D.d6R=w([A.hU,A.op,A.cb],x.O)
D.e9Q=new B.bT(A.A,0.5,A.x,null,0,D.d6R,null,null)
D.ec3=new B.y(0.22,A.bj)
D.efW=new B.y("ai","Your newspaper is ready. Tell me anything you want changed, or ask me a question about NGMY.")
D.ehY=new B.y(0.5,A.hg)
D.er0=new B.y(0.78,A.aV)
D.eAP=new B.cL([A.by,0.22,0.7,2.6])
D.eAU=new B.cL([A.b7,0.36,1.2,1.3])
D.eB_=new B.cL([A.dO,0.28,0.2,0.4])
D.eB5=new B.cL([A.cy,0.05,0.3,0.35])
D.eBb=new B.cL([A.bt,0.28,0.9,0])
D.eBj=new B.cL([A.aE,-0.25,-0.15,0.45])
D.eC6=new B.cL([A.bV,0.42,1,4.1])
D.eFe=new B.a8P(9)
D.bFc=new B.ae(A.G5,28,A.cn,null,null,null)
D.fox=new B.x("NGMY News",null,A.du,null,null,null,null,null,null,null,null,null)
D.buJ=new B.bD(1,A.bi,D.fox,null)
D.d9W=w([D.bFc,A.av,D.buJ],x.p)
D.eFq=new B.cm(A.aO,A.e,A.j,A.m,null,A.p,null,0,D.d9W,null)
D.bFn=new B.ae(A.pL,16,A.c,null,null,null)
D.fpY=new B.x("Book",null,A.o9,null,null,null,null,null,null,null,null,null)
D.ddH=w([D.bFn,A.eb,D.fpY],x.p)
D.eFy=new B.cm(A.aO,A.e,A.Q,A.m,null,A.p,null,0,D.ddH,null)
D.bLN=new B.ae(A.jh,10,A.c,null,null,null)
D.fde=new B.x("Pro",null,A.nm,null,null,null,null,null,null,null,null,null)
D.d2G=w([D.bLN,A.q7,D.fde],x.p)
D.eFC=new B.cm(A.aO,A.e,A.Q,A.m,null,A.p,null,0,D.d2G,null)
D.fnX=new B.x("Make a newspaper",null,Au.T9,null,null,null,null,null,null,null,null,null)
D.bVr=w([E.a00,A.ab,D.fnX],x.p)
D.eFD=new B.cm(A.aO,A.e,A.Q,A.m,null,A.p,null,0,D.bVr,null)
D.bKl=new B.ae(A.la,18,A.bK,null,null,null)
D.ffi=new B.x("Ending celebration",null,A.i3,null,null,null,null,null,null,null,null,null)
D.d90=w([D.bKl,A.bp,D.ffi],x.p)
D.eFG=new B.cm(A.aO,A.e,A.j,A.m,null,A.p,null,0,D.d90,null)
D.bLz=new B.ae(A.jg,18,A.jP,null,null,null)
D.eVe=new B.G(!0,A.jP,null,null,null,null,15,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqe=new B.x("Write",null,D.eVe,null,null,null,null,null,null,null,null,null)
D.cTb=w([D.bLz,A.ab,D.fqe],x.p)
D.eFL=new B.cm(A.aO,A.e,A.Q,A.m,null,A.p,null,0,D.cTb,null)
D.fdc=new B.x("Download picture",null,A.qb,null,null,null,null,null,null,null,null,null)
D.bwM=new B.q9(A.eg,A.A,A.f,D.fdc,null)
D.bwX=new B.dm(1,A.ci,D.bwM,null)
D.d32=w([K.am2,A.ab,D.bwX],x.p)
D.eFM=new B.cm(A.aO,A.bb,A.j,A.m,null,A.p,null,0,D.d32,null)
D.bH8=new B.ae(A.G5,22,A.cn,null,null,null)
D.fmC=new B.x("NGMY NEWS",null,H.a6G,null,null,null,null,null,null,null,null,null)
D.cL9=w([D.bH8,A.ab,D.fmC],x.p)
D.eFU=new B.cm(A.aO,A.e,A.Q,A.m,null,A.p,null,0,D.cL9,null)
D.eG4=new B.p_(!1,!1,null,T.V_,null,A.bX,null,null,null)
D.a5M=new B.jL([D.cg,D.dd,D.u7,D.Hx,D.u8,D.aEK],B.ax("jL<hw>"))
D.dZt={title:0,quote:1,closing:2,bio:3}
D.eHc=new B.eX(D.dZt,4,x.M)
D.dXH={caps:0,stamp:1,retro:2,glitch:3,whisper:4}
D.eHe=new B.eX(D.dXH,5,x.M)
D.dZ0={midnight:0,rose_gold:1,slate_pro:2,neon_night:3,charcoal:4,crimson:5,gold:6,plum:7}
D.a5N=new B.eX(D.dZ0,8,x.M)
D.dYn={Design:0,Transitions:1,Insert:2}
D.eHi=new B.eX(D.dYn,3,x.M)
D.fU0=new B.jL([D.a47],B.ax("jL<vH>"))
D.dYv={float3d:0,drift:1,pulse:2}
D.eHl=new B.eX(D.dYv,3,x.M)
D.aLY=new B.jL([D.Hu,D.Hv,D.Hw],B.ax("jL<mq>"))
D.dXE={shimmer:0,golddust:1,spotlight:2,goldframe:3,twinkle:4,orbit:5,rays:6,bokeh:7,aurora:8,sparkle:9,sheen:10,velvet:11,crest:12,filigree:13}
D.aM0=new B.eX(D.dXE,14,x.M)
D.fU1=new B.eX(A.ie,0,B.ax("eX<vH>"))
D.dYs={"kbpabloqr@gmail.com":0,"ngumoyaking@gmail.com":1,"appbusiness321@gmail.com":2,"appbusiness84@gmail.com":3}
D.Sa=new B.eX(D.dYs,4,x.M)
D.dXx={print:0,rotate:1,text_box:2,picture:3,title:4,subtitle:5,bullets:6,numbered:7,quote:8,citation:9,date_stamp:10,page_number:11,header_bar:12,footer_bar:13,divider:14,table:15,sticky:16,duplicate_el:17,delete_el:18,bring_fwd:19,send_back:20,align_left:21,align_center:22,align_right:23,word_count:24,link_text:25,phone:26,email:27,new_slide:28,present:29}
D.aM2=new B.eX(D.dXx,30,x.M)
D.dYA={circle:0,triangle:1,hexagon:2,diamond:3}
D.eHB=new B.eX(D.dYA,4,x.M)
D.eJK=new B.at(390,844)
D.eKw=new B.a7(20,20,A6.JX,null)
D.aMP=new B.a7(null,2.5,null,null)
D.eKG=new B.a7(18,18,A6.JX,null)
D.bLD=new B.ae(A.iV,19,A.c,null,null,null)
D.eKR=new B.a7(38,38,D.bLD,null)
D.bJW=new B.ae(A.yc,22,A.c,null,null,null)
D.eKT=new B.a7(40,40,D.bJW,null)
D.eLr=new B.hK(2,10,10,1.15,null)
D.aMX=new B.hK(2,16,14,0.62,null)
D.bsN=new B.Q(32,30,32,40)
D.b60=new B.w(0.3333333333333333,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.t)
D.bF9=new B.ae(A.pG,56,D.b60,null,null,null)
D.aeh=new B.w(0.6,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.t)
D.eXb=new B.G(!0,D.aeh,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fjI=new B.x("Your books will live here.",null,D.eXb,null,A.L,null,null,null,null,null,null,null)
D.cVM=w([D.bF9,A.S,D.fjI],x.p)
D.bkc=new B.fq(A.ah,A.e,A.j,A.m,null,A.p,null,0,D.cVM,null)
D.e3P=new B.C(D.bsN,D.bkc,null)
D.eLM=new B.m2(D.e3P,null)
D.fjF=new B.x("Chagua jimbo la Civic Registry kwanza.",null,null,null,null,null,null,null,null,null,null,null)
D.eM3=new B.b1(D.fjF,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fhO=new B.x("Done \u2014 only the text size was changed. Undo brings back the old size.",null,null,null,null,null,null,null,null,null,null,null)
D.eM4=new B.b1(D.fhO,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fmF=new B.x("This slide has no text boxes.",null,null,null,null,null,null,null,null,null,null,null)
D.eMd=new B.b1(D.fmF,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fna=new B.x("Tap fields to edit names. Tap signature boxes to sign or re-sign. Print from the View tab.",null,null,null,null,null,null,null,null,null,null,null)
D.eMs=new B.b1(D.fna,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fgu=new B.x("Sign in to Civic Registry to view Hati ya Kiapo cha Uongozi.",null,null,null,null,null,null,null,null,null,null,null)
D.eMF=new B.b1(D.fgu,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fu4=new B.x("Could not read that presentation QR or document code.",null,null,null,null,null,null,null,null,null,null,null)
D.eMY=new B.b1(D.fu4,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.frh=new B.x("Use the 5-character code on the document QR, like GA847.",null,null,null,null,null,null,null,null,null,null,null)
D.eN8=new B.b1(D.frh,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fni=new B.x("Sign in to Civic Registry to view this document.",null,null,null,null,null,null,null,null,null,null,null)
D.eNP=new B.b1(D.fni,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fbz=new B.x("Buttons hidden. Double-tap the top-right corner to show them again.",null,null,null,null,null,null,null,null,null,null,null)
D.eO4=new B.b1(D.fbz,null,null,null,null,null,null,null,A.ij,null,null,null,null,A.px,!1,null,null,null,A.r,null)
D.fdk=new B.x("Could not crop that picture.",null,null,null,null,null,null,null,null,null,null,null)
D.eOm=new B.b1(D.fdk,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fjm=new B.x("This oath is locked for editing (5 hours after the president signed). You can still view and play the video.",null,null,null,null,null,null,null,null,null,null,null)
D.eOo=new B.b1(D.fjm,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fj2=new B.x("Only the authorized registrar for this state can add the oath video.",null,null,null,null,null,null,null,null,null,null,null)
D.eOp=new B.b1(D.fj2,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fph=new B.x("Document code copied.",null,null,null,null,null,null,null,null,null,null,null)
D.eOq=new B.b1(D.fph,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.f7P=new B.x("Tap the logo or a picture on this slide first.",null,null,null,null,null,null,null,null,null,null,null)
D.eOz=new B.b1(D.f7P,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.feq=new B.x("Sign in to unlock Slides Pro features.",null,null,null,null,null,null,null,null,null,null,null)
D.eOW=new B.b1(D.feq,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fsQ=new B.x("Done \u2014 the look is changed. Undo brings back the old one.",null,null,null,null,null,null,null,null,null,null,null)
D.eOY=new B.b1(D.fsQ,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fso=new B.x("The NGMY logo stays on every quote. You can move it or change its frame.",null,null,null,null,null,null,null,null,null,null,null)
D.eP1=new B.b1(D.fso,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.f6P=new B.x("Video upload failed. Check your connection and try again.",null,null,null,null,null,null,null,null,null,null,null)
D.eP3=new B.b1(D.f6P,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fos=new B.x("This transferred document is view only. You can print or download it.",null,null,null,null,null,null,null,null,null,null,null)
D.ePc=new B.b1(D.fos,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fs_=new B.x("Done \u2014 the words are changed and the design is kept. Undo brings back the old version.",null,null,null,null,null,null,null,null,null,null,null)
D.ePr=new B.b1(D.fs_,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.frR=new B.x("Book saved on this device.",null,null,null,null,null,null,null,null,null,null,null)
D.ePt=new B.b1(D.frR,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.f6H=new B.x("Only the authorized registrar for this state can update this signature.",null,null,null,null,null,null,null,null,null,null,null)
D.ePz=new B.b1(D.f6H,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.faA=new B.x("You don't have a Bio link yet \u2014 create one in Bio first.",null,null,null,null,null,null,null,null,null,null,null)
D.eQ0=new B.b1(D.faA,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fr4=new B.x("Nothing to transfer yet \u2014 fill names or details on this document first.",null,null,null,null,null,null,null,null,null,null,null)
D.eQb=new B.b1(D.fr4,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fao=new B.x("Only the authorized registrar for this state can sign this document.",null,null,null,null,null,null,null,null,null,null,null)
D.eQq=new B.b1(D.fao,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.bcG=new B.w(1,0.9764705882352941,0.8352941176470589,0.8274509803921568,A.t)
D.cJY=w([A.io,A.oo,D.bcG,D.abj,A.io],x.O)
D.eQO=new B.fS(A.A,0,6.283185307179586,A.x,D.cJY,null,null)
D.cSp=w([A.bK,A.bY,A.hE,D.Am,A.bK],x.O)
D.aNw=new B.fS(A.A,0,6.283185307179586,A.x,D.cSp,null,null)
D.d4G=w([A.bV,A.by,A.b7,A.b8,A.cn,A.bV],x.O)
D.eQT=new B.fS(A.A,0,6.283185307179586,A.x,D.d4G,null,null)
D.cLV=w([A.pu,A.oq,A.Aa,A.io,A.pu],x.O)
D.eQU=new B.fS(A.A,0,6.283185307179586,A.x,D.cLV,null,null)
D.d4A=w([A.aQ,A.bJ,A.aL,A.ak,A.aQ],x.O)
D.eQV=new B.fS(A.A,0,6.283185307179586,A.x,D.d4A,null,null)
D.dbL=w([A.bt,A.b7,A.by,A.bV,A.bt],x.O)
D.eQX=new B.fS(A.A,0,6.283185307179586,A.x,D.dbL,null,null)
D.bcY=new B.w(1,0,1,1,A.t)
D.b7d=new B.w(1,1,0,1,A.t)
D.d84=w([A.E0,A.ad8,H.ac6,D.bcY,H.act,D.b7d,A.E0],x.O)
D.eQY=new B.fS(A.A,0,6.283185307179586,A.x,D.d84,null,null)
D.eRc=new C.auE(2,"immersiveSticky")
D.eRd=new C.auE(3,"edgeToEdge")
D.eRe=new C.auE(4,"manual")
D.eTt=new B.G(!0,A.oj,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aO1=new B.G(!0,A.f3,null,null,null,null,12.5,A.O,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eU1=new B.G(!0,E.mV,null,null,null,null,13,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eVv=new B.G(!0,A.ad,null,null,null,null,13,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eWt=new B.G(!0,A.c,null,null,null,null,22,A.u,null,0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eWD=new B.G(!0,A.c_,null,null,null,null,12.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eWY=new B.G(!0,A.ez,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eYi=new B.G(!0,A.bJ,null,null,null,null,13.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eYr=new B.G(!0,A.j9,null,null,null,null,11,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eYF=new B.rp(!0,A.HQ,null,null,null,null,A.dr,8,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZ8=new B.G(!0,A.c,null,null,null,null,8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZL=new B.G(!0,A.j7,null,null,null,null,11.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f_8=new B.G(!0,A.az,null,null,null,null,12.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.e5h=new B.iM(1,1,0.7568627450980392,0.027450980392156862)
D.f_c=new B.rp(!0,D.e5h,null,null,null,null,A.dr,7,null,null,null,null,null,null,null,null,null,null,null,null)
D.adf=new B.w(1,0.8392156862745098,0.7254901960784313,0.6039215686274509,A.t)
D.aOL=new B.G(!0,D.adf,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f_j=new B.G(!0,D.aeh,null,null,null,null,11.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f_k=new B.G(!0,A.c,null,null,null,null,20,A.u,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aON=new B.G(!0,A.c,null,null,null,null,null,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f_Y=new B.rp(!0,A.oT,null,null,null,null,A.dr,9,null,null,null,null,null,null,null,null,null,null,null,null)
D.f0e=new B.G(!0,null,null,null,null,null,20,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.T3=new B.G(!0,A.az,null,null,null,null,11.5,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f0L=new B.G(!0,A.c,null,null,null,null,16,A.H,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f0N=new B.G(!0,D.adf,null,null,null,null,14,null,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.II=new B.G(!0,A.az,null,null,null,null,12.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f1f=new B.G(!0,A.bY,null,null,null,null,11.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f1n=new B.G(!0,A.bJ,null,null,null,null,14,A.a4,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f1q=new B.G(!0,A.bK,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f1H=new B.G(!0,A.c,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.auS,null,null,null)
D.f1J=new B.G(!0,A.cj,null,null,null,null,null,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f1L=new B.G(!0,A.c,null,null,null,null,30,A.u,null,5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f1Y=new B.G(!0,A.c,null,null,null,null,6.5,A.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f28=new B.G(!0,A.dy,null,null,null,null,13,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f2F=new B.G(!0,A.aR,null,null,null,null,null,A.a4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f2O=new B.G(!0,A.c,null,null,null,null,13.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f31=new B.G(!0,A.ad,null,null,null,null,15,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aPo=new B.G(!0,A.c,null,null,null,null,14.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aPq=new B.G(!0,A.c_,null,null,null,null,11.5,A.a4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bhX=new B.w(0.7019607843137254,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.t)
D.f4L=new B.G(!0,D.bhX,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aPy=new B.G(!0,E.mV,null,null,null,null,16,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5f=new B.G(!0,A.bJ,null,null,null,null,11,A.a4,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5i=new B.G(!0,N.l4,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZm=new B.G(!0,A.w,null,null,null,null,8,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f6u=new B.x("NEW",null,D.eZm,null,null,null,null,null,null,null,null,null)
D.f6K=new B.x("Hati ya Kuhowesha",null,A.hq,null,null,null,null,null,null,null,null,null)
D.f7c=new B.x("Session ended",null,null,null,null,null,null,null,null,null,null,null)
D.f7w=new B.x("Scrollable PDF on this slide",null,A.dl,null,null,null,null,null,null,null,null,null)
D.f8d=new B.x("Big quote mark",null,A.iG,null,null,null,null,null,null,null,null,null)
D.f8g=new B.x("Move down",null,null,null,null,null,null,null,null,null,null,null)
D.f8r=new B.x("Duplicate",null,null,null,null,null,null,null,null,null,null,null)
D.f8T=new B.x("Edit window ended",null,null,null,null,null,null,null,null,null,null,null)
D.f8V=new B.x("How many slides?",null,A.ho,null,null,null,null,null,null,null,null,null)
D.f9s=new B.x("Transfer",null,A.cc,null,null,null,null,null,null,null,null,null)
D.eVh=new B.G(!0,A.c,null,null,null,null,12,A.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f9N=new B.x("Luxury FX",null,D.eVh,null,null,null,null,null,null,null,null,null)
D.fa8=new B.x("Font",null,A.rA,null,null,null,null,null,null,null,null,null)
D.faj=new B.x("Anza hati mpya?",null,null,null,null,null,null,null,null,null,null,null)
D.fap=new B.x("Ghairi",null,null,null,null,null,null,null,null,null,null,null)
D.f4i=new B.G(!0,A.bJ,null,null,null,null,12,A.O,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fax=new B.x("Example  GA847",null,D.f4i,null,null,null,null,null,null,null,null,null)
D.faX=new B.x("Design shapes",null,A.iG,null,null,null,null,null,null,null,null,null)
D.fb5=new B.x("Your 4-hour window to edit this admin-shared document has ended. You can still view, print, or download it.",null,null,null,null,null,null,null,null,null,null,null)
D.fb9=new B.x("Non-stop (loop)",null,A.ho,null,null,null,null,null,null,null,null,null)
D.fbn=new B.x("Hati ya Kuhoweya",null,A.hq,null,null,null,null,null,null,null,null,null)
D.fbG=new B.x("Photo studio",null,A.fN,null,null,null,null,null,null,null,null,null)
D.fc5=new B.x("Add your picture",null,A.kX,null,null,null,null,null,null,null,null,null)
D.eYG=new B.G(!0,A.c,null,null,null,null,20,A.u,null,-0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fc6=new B.x("Enter document code",null,D.eYG,null,A.L,null,null,null,null,null,null,null)
D.fc7=new B.x("Kiswahili",null,null,null,null,null,null,null,null,null,null,null)
D.fcc=new B.x("English",null,null,null,null,null,null,null,null,null,null,null)
D.eWj=new B.G(!0,E.mV,null,null,null,null,19,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fcv=new B.x("Delete this book?",null,D.eWj,null,A.L,null,null,null,null,null,null,null)
D.f_N=new B.G(!0,E.mV,null,null,null,null,18,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fdm=new B.x("Your library",null,D.f_N,null,null,null,null,null,null,null,null,null)
D.fdr=new B.x("Delete",null,A.aOF,null,null,null,null,null,null,null,null,null)
D.fdt=new B.x("Add a picture and the AI writes a whole newspaper page about NGMY around it: the headline, the story and the caption. It knows the app, the Civic Registry, the Advisors and KB PABLO QR, the CEO. Pick old or modern designs, then tell the AI what to change.",null,At.IF,null,null,null,null,null,null,null,null,null)
D.fdE=new B.x("Element flies in",null,A.aOR,null,null,null,null,null,null,null,null,null)
D.Tj=new B.x("Hati mpya (chagua muundo)",null,null,null,null,null,null,null,null,null,null,null)
D.fe1=new B.x("Fungua / hariri hati",null,null,null,null,null,null,null,null,null,null,null)
D.fej=new B.x("Keep it",null,null,null,null,null,null,null,null,null,null,null)
D.fen=new B.x("Cancel",null,E.aP0,null,null,null,null,null,null,null,null,null)
D.fep=new B.x("The lines and circles that come with the design",null,A.hp,null,null,null,null,null,null,null,null,null)
D.f39=new B.G(!0,A.hi,null,null,null,null,11,A.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.feQ=new B.x("DOCUMENT CODE",null,D.f39,null,null,null,null,null,null,null,null,null)
D.ffD=new B.x("Quotes",null,G.a7h,null,null,null,null,null,null,null,null,null)
D.eY5=new B.G(!0,N.l4,null,null,null,null,null,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ffL=new B.x("Add a picture",null,D.eY5,null,null,null,null,null,null,null,null,null)
D.ffT=new B.x("Point at a NGMY Slides transfer QR, or tap search to enter the document code",null,A.a6X,null,A.L,null,null,null,null,null,null,null)
D.ffX=new B.x("Look & feel",null,A.ho,null,null,null,null,null,null,null,null,null)
D.fg1=new B.x("Rings",null,A.i3,null,null,null,null,null,null,null,null,null)
D.fg7=new B.x("W",null,A.rA,null,null,null,null,null,null,null,null,null)
D.fgh=new B.x("Move up",null,null,null,null,null,null,null,null,null,null,null)
D.fgA=new B.x("It goes behind your words. Then the photo studio opens: looks, light, colour, effects and crop.",null,A.IH,null,A.L,null,null,null,null,null,null,null)
D.fgC=new B.x("Write your book",null,A.cx,null,null,null,null,null,null,null,null,null)
D.fhm=new B.x("Add page",null,A.cc,null,null,null,null,null,null,null,null,null)
D.fhA=new B.x("Malipo ya Awamu ya Mahari",null,A.hq,null,null,null,null,null,null,null,null,null)
D.eYv=new B.G(!0,A.c,null,null,null,null,24,A.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fhP=new B.x("Create with AI",null,D.eYv,null,A.L,null,null,null,null,null,null,null)
D.fih=new B.x("Apply look",null,A.i3,null,null,null,null,null,null,null,null,null)
D.eZd=new B.G(!0,A.es,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fj4=new B.x("Type your presentation below",null,D.eZd,null,A.L,null,null,null,null,null,null,null)
D.fj7=new B.x("Tap the code to copy it. Share the code or the QR: the other phone types the code or scans the QR.",null,H.aPA,null,A.L,null,null,null,null,null,null,null)
D.fj9=new B.x("Keep it",null,A.cc,null,null,null,null,null,null,null,null,null)
D.eUi=new B.G(!0,A.cs,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fjg=new B.x("Done",null,D.eUi,null,null,null,null,null,null,null,null,null)
D.fjB=new B.x("Delete",null,A.nn,null,null,null,null,null,null,null,null,null)
D.fjK=new B.x("Hati ya Kiapo cha Uongozi",null,A.hq,null,null,null,null,null,null,null,null,null)
D.eXt=new B.G(!0,A.aR,null,null,null,null,13,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fkC=new B.x("Write your idea in any language \u2014 the AI makes the slides.",null,D.eXt,null,A.L,null,null,null,null,null,null,null)
D.fkY=new B.x("Anza upya (hati mpya)",null,null,null,null,null,null,null,null,null,null,null)
D.fl3=new B.x("Layout",null,A.Tb,null,null,null,null,null,null,null,null,null)
D.flF=new B.x("Print",null,A.cx,null,null,null,null,null,null,null,null,null)
D.flK=new B.x("X",null,A.rA,null,null,null,null,null,null,null,null,null)
D.fmj=new B.x("Your logo goes on every slide and your pictures replace stock photos. The ring button also has the ending celebrations.",null,Aa.SY,null,null,null,null,null,null,null,null,null)
D.fmR=new B.x("Use the whole picture",null,null,null,null,null,null,null,null,null,null,null)
D.fn2=new B.x("Hati ya Kuhowa",null,A.hq,null,null,null,null,null,null,null,null,null)
D.fn4=new B.x("Choose a class template",null,A.hq,null,null,null,null,null,null,null,null,null)
D.fn6=new B.x("Drag the picture to move it. Pinch or use the slider to zoom.",null,A.hp,null,null,null,null,null,null,null,null,null)
D.fnc=new B.x("Download the newspaper picture",null,A.cx,null,null,null,null,null,null,null,null,null)
D.fno=new B.x("Print view",null,null,null,null,null,null,null,null,null,null,null)
D.fnv=new B.x("Done",null,A.aPn,null,null,null,null,null,null,null,null,null)
D.fnF=new B.x("Ending celebration",null,A.du,null,null,null,null,null,null,null,null,null)
D.fnG=new B.x("Delete element",null,null,null,null,null,null,null,null,null,null,null)
D.fnV=new B.x("Plays after your last slide. Tap one to watch it and change its words or logo.",null,Aa.SP,null,null,null,null,null,null,null,null,null)
D.foS=new B.x("Export presentation",null,A.dl,null,null,null,null,null,null,null,null,null)
D.foT=new B.x("What would you like to do?",null,D.aOL,null,null,null,null,null,null,null,null,null)
D.foW=new B.x("Delete",null,A.cx,null,null,null,null,null,null,null,null,null)
D.fpp=new B.x("Your 4-hour marriage document session has ended. Pay again to keep editing.",null,null,null,null,null,null,null,null,null,null,null)
D.fpt=new B.x("Hati (Documents)",null,A.hq,null,null,null,null,null,null,null,null,null)
D.fpG=new B.x("Done",null,A.kY,null,null,null,null,null,null,null,null,null)
D.f48=new B.G(!0,A.c,null,null,null,null,18,A.H,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpL=new B.x("Delete presentation?",null,D.f48,null,A.L,null,null,null,null,null,null,null)
D.fq1=new B.x("After the last slide it starts again from the first",null,A.hp,null,null,null,null,null,null,null,null,null)
D.fqc=new B.x("\ud83c\udf33",null,A.IC,null,A.L,null,null,null,null,null,null,null)
D.fqu=new B.x("Plays big after your last slide. Tap one to watch it, change the words or add your logo.",null,A.hp,null,null,null,null,null,null,null,null,null)
D.fqB=new B.x("Transfer document",null,A.p1,null,null,null,null,null,null,null,null,null)
D.fqM=new B.x("Add to the slides",null,A.ho,null,null,null,null,null,null,null,null,null)
D.fr8=new B.x("Endelea",null,null,null,null,null,null,null,null,null,null,null)
D.frn=new B.x("Make a book",null,I.aOi,null,null,null,null,null,null,null,null,null)
D.frr=new B.x("Books",null,A.cx,null,null,null,null,null,null,null,null,null)
D.eXZ=new B.G(!0,A.ak,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frs=new B.x("Keep this page open until it finishes.",null,D.eXZ,null,null,null,null,null,null,null,null,null)
D.frv=new B.x("Making your video",null,A.du,null,null,null,null,null,null,null,null,null)
D.frA=new B.x("LANGUAGE",null,D.T3,null,null,null,null,null,null,null,null,null)
D.frH=new B.x("Use this ending",null,A.cx,null,null,null,null,null,null,null,null,null)
D.frP=new B.x("Scan presentation QR",null,null,null,null,null,null,null,null,null,null,null)
D.frQ=new B.x("Upload a different logo",null,A.cc,null,null,null,null,null,null,null,null,null)
D.fs5=new B.x("Delete from the database?",null,A.kX,null,null,null,null,null,null,null,null,null)
D.fs6=new B.x("H",null,A.rA,null,null,null,null,null,null,null,null,null)
D.fsu=new B.x("NGMY Quotes",null,A.du,null,null,null,null,null,null,null,null,null)
D.fsV=new B.x("Cover",null,D.aPy,null,null,null,null,null,null,null,null,null)
D.fsZ=new B.x("Hati iliyopo ya jimbo hili itabadilishwa.",null,null,null,null,null,null,null,null,null,null,null)
D.ft_=new B.x("Each page becomes its own slide you can present",null,A.hp,null,null,null,null,null,null,null,null,null)
D.ftm=new B.x("Y",null,A.rA,null,null,null,null,null,null,null,null,null)
D.ftx=new B.x("Crop the picture",null,A.kY,null,null,null,null,null,null,null,null,null)
D.ftD=new B.x("Edit text",null,A.ID,null,null,null,null,null,null,null,null,null)
D.fvR=B.dR("a7I")
D.Dd=new C.avX(0,"none")
D.aSp=new C.avX(1,"zipCrypto")
D.aSq=new C.avX(2,"aes")
D.fJd=new F.OS("","",null)
D.fKj=new C.baW(null)
D.fLq=new C.Z_(null)
D.fN_=new C.acu(null)
D.fN1=new C.aD8(null)
D.fPN=new C.a_e(null)
D.fQ2=new C.a_J(null)
D.fQl=new C.bsp(null)})();(function staticFields(){$.h89=null
$.h8a=null
$.h8b=null
$.h8c=null
$.fRl=B.uS("_lastQuoRemDigits")
$.fRm=B.uS("_lastQuoRemUsed")
$.awi=B.uS("_lastRemUsed")
$.fRn=B.uS("_lastRem_nsh")
$.pX=B.a([4294967295,2147483647,1073741823,536870911,268435455,134217727,67108863,33554431,16777215,8388607,4194303,2097151,1048575,524287,262143,131071,65535,32767,16383,8191,4095,2047,1023,511,255,127,63,31,15,7,3,1,0],x.t)
$.a6x=B.T(x.N,x.I)
$.fOS=!1
$.hcY=B.T(B.ax("kN"),x.N)
$.hda=B.T(B.ax("kN"),x.E)
$.hb9=!1
$.by2="q"
$.PP=0
$.Ce=B.T(x.N,B.ax("aj<z7>"))
$.hbx=!1
$.fSV=!1
$.hhL=null
$.hLP=B.T(x.N,B.ax("ay<n?>"))
$.JU=""
$.iX=0
$.h4V=function(){var w=x.N
return B.T(w,w)}()
$.h4U=B.T(x.N,x.R)
$.fTf=!1
$.af7=B.T(x.N,x.E)
$.fU2=0
$.bj_=!1})();(function lazyInitializers(){var w=a.lazyFinal
w($,"i9T","CC",()=>C.b8r(0))
w($,"i9R","a1X",()=>C.b8r(1))
w($,"i9S","hlk",()=>C.b8r(2))
w($,"i9Q","fXM",()=>$.a1X().uM(0))
w($,"i9O","hli",()=>C.b8r(1e4))
w($,"i9P","hlj",()=>B.DO(8))
w($,"i5G","hjl",()=>B.DO(0))
w($,"i5O","hjp",()=>B.DO(0))
w($,"i5N","hjo",()=>B.bWI(0))
w($,"idx","hnk",()=>{var v,u,t=x.N
t=B.T(t,t)
for(v=D.a2Y.gdK(D.a2Y),v=v.gaf(v);v.C();){u=v.gU(v)
t.n(0,u.b,u.a)}return t})
w($,"idY","bCA",()=>{var v="Corporate",u=4280171146,t=4294967295,s=4280640491,r=4279080072,q="Modern",p="Bold",o=4278190080,n=4280472558,m=4279179050,l=4284773515,k=4287874557,j=4293548044,i=4279548070,h=x.O
return B.a([C.mO(new C.fzW(),v,"biz_plan_blue","Business Plan",B.a([B.b0(u),B.b0(t)],h)),C.mO(new C.fzX(),v,"exec_summary","Executive",B.a([B.b0(s),B.b0(t)],h)),C.mO(new C.fzY(),v,"teal_corporate","Teal Corp",B.a([B.b0(r),B.b0(4279310375)],h)),C.mO(new C.fA8(),q,"geometric_overlap","Geometric",B.a([B.b0(4279203438),B.b0(u)],h)),C.mO(new C.fAd(),p,"midnight_cyan","Midnight Cyan",B.a([B.b0(o),B.b0(n)],h)),C.mO(new C.fAe(),q,"diagonal_hero","Diagonal Hero",B.a([B.b0(m),B.b0(l)],h)),C.mO(new C.fAf(),v,"swot_grid","SWOT Grid",B.a([B.b0(u),B.b0(4278556265)],h)),C.mO(new C.fAg(),v,"layered_chevrons","Chevrons",B.a([B.b0(4280172719),B.b0(k)],h)),C.mO(new C.fAh(),q,"split_triangle","Split Panel",B.a([B.b0(s),B.b0(t)],h)),C.mO(new C.fAi(),v,"corporate_navy","Navy Pro",B.a([B.b0(4278982953),B.b0(4282090230)],h)),C.mO(new C.fAj(),p,"cyan_slash","Cyan Slash",B.a([B.b0(o),B.b0(4278630100)],h)),C.mO(new C.fzZ(),p,"crimson_impact","Crimson",B.a([B.b0(4282714634),B.b0(4292617766)],h)),C.mO(new C.fA_(),q,"ocean_waves","Ocean Waves",B.a([B.b0(4278413729),B.b0(4286436348)],h)),C.mO(new C.fA0(),p,"mono_geometric","Mono Geo",B.a([B.b0(o),B.b0(n)],h)),C.mO(new C.fA1(),"Luxury","luxury_gold","Gold Luxe",B.a([B.b0(4280031511),B.b0(4293571336)],h)),C.mO(new C.fA2(),q,"hex_infographic","Hex Stack",B.a([B.b0(r),B.b0(4284410580)],h)),C.mO(new C.fA3(),q,"photo_banner","Photo Banner",B.a([B.b0(m),B.b0(4281908728)],h)),C.mO(new C.fA4(),v,"process_steps","Process",B.a([B.b0(s),B.b0(k)],h)),C.mO(new C.fA5(),"Minimal","grid_modern","Grid Modern",B.a([B.b0(l),B.b0(t)],h)),C.mO(new C.fA6(),"Luxury","platinum_frame","Platinum",B.a([B.b0(4282865001),B.b0(4293060848)],h)),C.mO(new C.fA7(),v,"agenda_cards","Agenda Cards",B.a([B.b0(u),B.b0(4292602622)],h)),C.mO(new C.fA9(),q,"headline_orange","Headline Orange",B.a([B.b0(j),B.b0(i)],h)),C.mO(new C.fAa(),q,"infographic_teal","Infographic",B.a([B.b0(r),B.b0(j)],h)),C.mO(new C.fAb(),q,"content_year","Year Feature",B.a([B.b0(j),B.b0(t)],h)),C.mO(new C.fAc(),q,"photo_cta","Photo CTA",B.a([B.b0(m),B.b0(i)],h))],B.ax("O<Ee>"))})
w($,"idA","hnm",()=>B.af("^[A-Z]{2}\\d{3}$",!0,!1,!1,!1))})()};
(a=>{a["MNh0nKubhnudaXPLLjUupxZyrJk="]=a.current})($__dart_deferred_initializers__);