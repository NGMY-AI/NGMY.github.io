((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,Ah,A6,Ai,Aj,U,A7,Ak,Al,C={
tW(d,e){for(;;){if(!(d>0&&e[d-1]===0))break;--d}return d},
h_c(d,e,f,g){var w,v=new Uint16Array(g),u=f-e
for(w=0;w<u;++w)v[w]=d[e+w]
return v},
JX(d){var w
if(d===0)return $.Dc()
if(d===1)return $.a2P()
if(d===2)return $.huU()
if(Math.abs(d)<4294967296)return C.bag(A.o.O(d))
w=C.hPJ(d)
return w},
bag(d){var w,v,u,t,s=d<0
if(s){if(d===-9223372036854776e3){w=new Uint16Array(4)
w[3]=32768
v=C.tW(4,w)
return new C.o0(v!==0,w,v)}d=-d}if(d<65536){w=new Uint16Array(1)
w[0]=d
v=C.tW(1,w)
return new C.o0(v===0?!1:s,w,v)}if(d<=4294967295){w=new Uint16Array(2)
w[0]=d&65535
w[1]=A.o.aC(d,16)
v=C.tW(2,w)
return new C.o0(v===0?!1:s,w,v)}v=A.o.an(A.o.gaks(d)-1,16)+1
w=new Uint16Array(v)
for(u=0;d!==0;u=t){t=u+1
w[u]=d&65535
d=A.o.an(d,65536)}v=C.tW(v,w)
return new C.o0(v===0?!1:s,w,v)},
hPJ(d){var w,v,u,t,s,r,q,p
if(isNaN(d)||d==1/0||d==-1/0)throw B.W(B.dI("Value must be finite: "+d,null))
d=Math.floor(d)
if(d===0)return $.Dc()
w=$.huT()
for(v=w.$flags|0,u=0;u<8;++u){v&2&&B.aj(w)
w[u]=0}v=J.le(A.aH.gaQ(w))
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
q=new C.o0(!1,r,4)
if(s<0)p=q.mt(0,-s)
else p=s>0?q.e0(0,s):q
return p},
h_d(d,e,f,g){var w,v,u
if(e===0)return 0
if(f===0&&g===d)return e
for(w=e-1,v=g.$flags|0;w>=0;--w){u=d[w]
v&2&&B.aj(g)
g[w+f]=u}for(w=f-1;w>=0;--w){v&2&&B.aj(g)
g[w]=0}return e+f},
hhu(d,e,f,g){var w,v,u,t,s,r=A.o.an(f,16),q=A.o.F(f,16),p=16-q,o=A.o.e0(1,p)-1
for(w=e-1,v=g.$flags|0,u=0;w>=0;--w){t=d[w]
s=A.o.fJ(t,p)
v&2&&B.aj(g)
g[w+r+1]=(s|u)>>>0
u=A.o.e0(t&o,q)}v&2&&B.aj(g)
g[r]=u},
hhp(d,e,f,g){var w,v,u,t,s=A.o.an(f,16)
if(A.o.F(f,16)===0)return C.h_d(d,e,s,g)
w=e+s+1
C.hhu(d,e,f,g)
for(v=g.$flags|0,u=s;--u,u>=0;){v&2&&B.aj(g)
g[u]=0}t=w-1
return g[t]===0?t:w},
hPM(d,e,f,g){var w,v,u,t,s=A.o.an(f,16),r=A.o.F(f,16),q=16-r,p=A.o.e0(1,r)-1,o=A.o.fJ(d[s],r),n=e-s-1
for(w=g.$flags|0,v=0;v<n;++v){u=d[v+s+1]
t=A.o.e0(u&p,q)
w&2&&B.aj(g)
g[v]=(t|o)>>>0
o=A.o.fJ(u,r)}w&2&&B.aj(g)
g[n]=o},
cIi(d,e,f,g){var w,v=e-g
if(v===0)for(w=e-1;w>=0;--w){v=d[w]-f[w]
if(v!==0)return v}return v},
hPK(d,e,f,g,h){var w,v,u
for(w=h.$flags|0,v=0,u=0;u<g;++u){v+=d[u]+f[u]
w&2&&B.aj(h)
h[u]=v&65535
v=v>>>16}for(u=g;u<e;++u){v+=d[u]
w&2&&B.aj(h)
h[u]=v&65535
v=v>>>16}w&2&&B.aj(h)
h[e]=v},
bah(d,e,f,g,h){var w,v,u
for(w=h.$flags|0,v=0,u=0;u<g;++u){v+=d[u]-f[u]
w&2&&B.aj(h)
h[u]=v&65535
v=0-(A.o.aC(v,16)&1)}for(u=g;u<e;++u){v+=d[u]
w&2&&B.aj(h)
h[u]=v&65535
v=0-(A.o.aC(v,16)&1)}},
hhv(d,e,f,g,h,i){var w,v,u,t,s,r
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
hPL(d,e,f){var w,v=e[f]
if(v===d)return 65535
w=A.o.e9((v<<16|e[f-1])>>>0,d)
if(w>65535)return 65535
return w},
o0:function o0(d,e,f){this.a=d
this.b=e
this.c=f},
cIj:function cIj(){},
cIk:function cIk(){},
cIl:function cIl(d,e){this.a=d
this.b=e},
cIm:function cIm(d){this.a=d},
aRD:function aRD(d,e){this.a=d
this.b=e},
h7f(d,e,f){var w=new C.S1(d,A.o.an(Date.now(),1000),e)
w.Q=f
return w},
S1:function S1(d,e,f){var _=this
_.a=d
_.b=420
_.e=e
_.as=_.Q=null
_.at=f},
a4_:function a4_(d,e){this.a=d
this.b=e},
bHR:function bHR(d){this.a=d
this.c=this.b=0},
hy7(){return new C.bGb()},
bGb:function bGb(){var _=this
_.ax=_.at=_.as=_.Q=_.z=_.y=_.x=_.w=_.r=_.f=_.e=_.d=_.c=_.b=_.a=$
_.ay=0
_.ch=-1
_.cx=_.CW=0
_.fr=_.dy=_.dx=_.db=_.cy=$
_.fx=0},
cAs:function cAs(d){var _=this
_.a=-1
_.r=_.f=0
_.x=d},
hPr(d,e,f){var w,v,u,t,s
if(d.gam(d))return new Uint8Array(0)
w=new Uint8Array(B.ch(d.gcYi(d)))
v=f*2+2
u=C.hf7(C.hf9(),64)
t=new C.cjK(u)
u=u.b
u===$&&B.c()
t.c=new Uint8Array(u)
t.a=new C.cjL(e,1000,v)
s=new Uint8Array(v)
return A.aH.ds(s,0,t.cLD(w,0,s,0))},
cAq:function cAq(d,e){this.c=d
this.d=e},
axv:function axv(d,e){this.a=d
this.b=e},
cAt:function cAt(d,e,f,g){var _=this
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
b9_:function b9_(){var _=this
_.as=_.Q=_.y=_.x=_.w=_.a=0
_.at=""
_.ch=_.ax=null},
cAr:function cAr(){this.a=$},
hgV(d,e){var w,v,u=d.length
if(u!==e.length)return!1
for(w=0,v=0;v<u;++v)w|=d[v]^e[v]
return w===0},
hxR(d,e){var w
d.$flags&2&&B.aj(d)
d[0]=e&255
d[1]=e>>>8&255
d[2]=e>>>16&255
d[3]=e>>>24&255
for(w=4;w<=15;++w)d[w]=0},
bEM:function bEM(d,e,f){var _=this
_.a=1
_.b=d
_.c=e
_.d=f
_.r=null
_.x=_.w=$},
h4V(d,e){e&=31
return(d&$.qh[e])<<e>>>0},
nw(d,e){e&=31
return(d>>>e|C.h4V(d,32-e))>>>0},
hf8(d){var w,v=new C.at7()
if(B.iK(d))v.aKE(d,null)
else{x.dw.a(d)
w=d.a
w===$&&B.c()
v.a=w
w=d.b
w===$&&B.c()
v.b=w}return v},
hf9(){var w=C.hf8(0),v=new Uint8Array(4),u=x.S
u=new C.cjM(w,v,A.Et,5,B.c2(5,0,!1,u),B.c2(80,0,!1,u))
u.jP(0)
return u},
hf7(d,e){var w=new C.cjI(d,e)
w.b=20
w.d=new Uint8Array(e)
w.e=new Uint8Array(e+20)
return w},
cjH:function cjH(){},
cjL:function cjL(d,e,f){this.a=d
this.b=e
this.c=f},
cjF:function cjF(){},
at6:function at6(d){this.a=d},
cjK:function cjK(d){this.a=$
this.b=d
this.c=$},
cjG:function cjG(){},
cjE:function cjE(){},
at7:function at7(){this.b=this.a=$},
cjJ:function cjJ(){},
cjM:function cjM(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=$
_.d=f
_.e=g
_.f=h
_.r=i
_.w=$},
cjI:function cjI(d,e){var _=this
_.a=d
_.b=$
_.c=e
_.e=_.d=$},
cjD:function cjD(){},
cjC:function cjC(d){var _=this
_.a=0
_.b=$
_.c=!1
_.d=d},
bPB:function bPB(){},
bPC:function bPC(d){this.a=d},
hSH(d){if(d<0.36363636363636365)return 7.5625*d*d
else if(d<0.7272727272727273){d-=0.5454545454545454
return 7.5625*d*d+0.75}else if(d<0.9090909090909091){d-=0.8181818181818182
return 7.5625*d*d+0.9375}d-=0.9545454545454546
return 7.5625*d*d+0.984375},
baw:function baw(){},
cu0:function cu0(){},
bQF:function bQF(d,e){this.a=d
this.b=!1
this.c=e},
bQG:function bQG(){},
i0H(d){var w,v,u=B.a([],x.s)
for(w=d.length,v=0;v<w;++v)u.push(d[v].u(0))
return u},
aw7(d){var w=0,v=B.j(x.H),u
var $async$aw7=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:u=x.H
w=d!==D.f7H?2:4
break
case 2:w=5
return B.b(A.kn.h0("SystemChrome.setEnabledSystemUIMode",d.a4(),u),$async$aw7)
case 5:w=3
break
case 4:null.toString
w=6
return B.b(A.kn.h0("SystemChrome.setEnabledSystemUIOverlays",C.i0H(null),u),$async$aw7)
case 6:case 3:return B.h(null,v)}})
return B.i($async$aw7,v)},
awa:function awa(d,e){this.a=d
this.b=e},
a8B:function a8B(d){this.a=d},
i3o(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p=new C.fvf(15,d,f,e,g,h),o=i*i,n=A.k.V(i/1.4142135623730951)
for(w=0;w<=n;++w){v=Math.sqrt(o-w*w)
u=v-Math.floor(v)
t=u*(w===n?0.25:1)
s=A.k.bm(v)
r=1-u
p.$5(j,k,w,s,r)
q=s+1
p.$5(j,k,w,q,t)
p.$5(j,k,s,w,r)
p.$5(j,k,q,w,t)}return d},
fvf:function fvf(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
anS(){var w=0,v=B.j(x.gw),u,t,s,r,q
var $async$anS=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(S.ah5("ngmy_menu_lib_v1_zzslides_index",A.bK),$async$anS)
case 3:q=e
if(!q.a){u=null
w=1
break}t=q.b
s=t==null?null:J.q(t,"items")
if(x.j.b(s)){t=J.dc(s,x.f)
t=B.cF(t,new C.c0C(),t.$ti.k("J.E"),x.P)
r=B.C(t,B.a6(t).k("J.E"))}else r=B.a([],x.d)
A.d.aV(r,new C.c0D())
u=r
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$anS,v)},
anU(d){var w=0,v=B.j(x.S),u,t,s,r,q,p,o,n,m,l,k,j
var $async$anU=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.anS(),$async$anU)
case 3:j=f
if(j==null){u=0
w=1
break}t=x.N
s=B.T(t,x.P)
for(r=J.aV(j);r.C();){q=r.gR(r)
p=J.q(q,"id")
s.n(0,J.k(p==null?"":p),q)}r=d.length,q=x.z,o=0,n=0
case 4:if(!(n<d.length)){w=6
break}m=d[n]
l=new B.U(Date.now(),0,!1).a7().ad()
p=m.a
k=B.af("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(B.nv("ngmy_menu_lib_v1_zzslide_"+B.aL(p,k,""),B.G(["deck",m.ag(),"savedAt",l],t,q),null),$async$anU)
case 7:if(!f){w=5
break}s.n(0,p,B.G(["id",p,"name",m.b,"slides",m.r.length,"savedAt",l],t,q));++o
case 5:d.length===r||(0,B.M)(d),++n
w=4
break
case 6:w=o>0?8:9
break
case 8:r=s.$ti.k("bc<2>")
s=B.C(new B.bc(s,r),r.k("J.E"))
w=10
return B.b(B.nv("ngmy_menu_lib_v1_zzslides_index",B.G(["items",s,"savedAt",new B.U(Date.now(),0,!1).a7().ad()],t,q),null),$async$anU)
case 10:if(!f){u=0
w=1
break}case 9:u=o
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$anU,v)},
c0E(d){return C.hDH(d)},
hDH(d){var w=0,v=B.j(x.af),u,t=2,s=[],r,q,p,o,n,m
var $async$c0E=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
o=B.af("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(S.ah5("ngmy_menu_lib_v1_zzslide_"+B.aL(d,o,""),A.hT),$async$c0E)
case 7:r=f
o=r.b
q=o==null?null:J.q(o,"deck")
if(!x.f.b(q)){u=null
w=1
break}o=C.W9(B.a2(q,x.N,x.z))
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
return B.i($async$c0E,v)},
anT(d){var w=0,v=B.j(x.y),u,t,s,r
var $async$anT=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.anS(),$async$anT)
case 3:r=f
if(r==null){u=!1
w=1
break}J.nx(r,new C.c0F(d))
w=4
return B.b(B.nv("ngmy_menu_lib_v1_zzslides_index",B.G(["items",r,"savedAt",new B.U(Date.now(),0,!1).a7().ad()],x.N,x.z),null),$async$anT)
case 4:t=f
w=t?5:6
break
case 5:s=B.af("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(S.aPF("ngmy_menu_lib_v1_zzslide_"+B.aL(d,s,"")),$async$anT)
case 7:case 6:u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$anT,v)},
c0C:function c0C(){},
c0D:function c0D(){},
c0F:function c0F(d){this.a=d},
idr(d,e,f){return B.bT(A.K,null,new C.fLE(e,f,null),d,!0,!0,!0,null,!1,!1,x.H)},
fLE:function fLE(d,e,f){this.a=d
this.b=e
this.c=f},
a14:function a14(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aJu:function aJu(d){var _=this
_.d=d
_.e=null
_.f=!0
_.r=!1
_.w=0
_.x=null
_.y=!1
_.c=_.a=null},
f7W:function f7W(d,e){this.a=d
this.b=e},
f8_:function f8_(d){this.a=d},
f80:function f80(d){this.a=d},
f81:function f81(d,e,f){this.a=d
this.b=e
this.c=f},
f7X:function f7X(d){this.a=d},
f7Y:function f7Y(d){this.a=d},
f7Z:function f7Z(d,e){this.a=d
this.b=e},
f7R:function f7R(d){this.a=d},
f7P:function f7P(d){this.a=d},
f7Q:function f7Q(d){this.a=d},
f7S:function f7S(d){this.a=d},
f7T:function f7T(d){this.a=d},
f85:function f85(d,e){this.a=d
this.b=e},
f84:function f84(d,e){this.a=d
this.b=e},
f7V:function f7V(d,e,f){this.a=d
this.b=e
this.c=f},
f7U:function f7U(d,e,f){this.a=d
this.b=e
this.c=f},
f82:function f82(d,e){this.a=d
this.b=e},
f83:function f83(d,e){this.a=d
this.b=e},
f88:function f88(d){this.a=d},
f89:function f89(d,e){this.a=d
this.b=e},
f87:function f87(d,e){this.a=d
this.b=e},
f86:function f86(){},
hjV(d){var w,v,u,t
if(d==null||d.length===0)return B.a([],x.k)
try{w=A.T.aN(0,d,null)
if(!x.j.b(w)){v=B.a([],x.k)
return v}v=J.dc(w,x.f)
v=B.cF(v,new C.ffk(),v.$ti.k("J.E"),x.ea)
u=B.a6(v).k("Z<J.E>")
v=B.C(new B.Z(v,new C.ffl(),u),u.k("J.E"))
return v}catch(t){v=B.a([],x.k)
return v}},
a22(d){return C.i4E(d)},
i4E(d){var w=0,v=B.j(x.gL),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$a22=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:n=B.T(x.N,x.ea)
m=new C.fy6(n)
t=4
j=m
i=C
w=7
return B.b(B.a2C("ngmy_books_v1_"+A.a.i(d.toLowerCase())),$async$a22)
case 7:j.$1(i.hjV(f))
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
return B.b(B.az(),$async$a22)
case 12:r=f
p=A.a.i(d.toLowerCase())
m.$1(C.hjV(B.aU(J.q(r.a,"ngmy_books_v1_"+p))))
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
o=p.k("Z<J.E>")
j=B
i=B
h=new B.bc(n,p)
g=C
w=13
return B.b(C.fft(d),$async$a22)
case 13:p=j.C(new i.Z(h,new g.fy4(f),o),o.k("J.E"))
A.d.aV(p,new C.fy5())
u=p
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a22,v)},
ahG(d,e){return C.id6(d,e)},
id6(d,e){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l
var $async$ahG=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:n=J.b6(e,new C.fL8(),x.P)
n=B.C(n,n.$ti.k("ak.E"))
r=A.T.ao(n,null)
q=!1
t=4
w=7
return B.b(B.ahy("ngmy_books_v1_"+A.a.i(d.toLowerCase()),r),$async$ahG)
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
return B.b(B.az(),$async$ahG)
case 12:p=g
w=13
return B.b(p.aq("String","ngmy_books_v1_"+A.a.i(d.toLowerCase()),r),$async$ahG)
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
return B.i($async$ahG,v)},
fft(d){return C.hU2(d)},
hU2(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o
var $async$fft=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.az(),$async$fft)
case 7:r=f
q=r.tq("ngmy_books_deleted_v1_"+A.a.i(d.toLowerCase()))
if(q==null)q=A.X
q=B.k_(q,B.S(q).c)
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
return B.i($async$fft,v)},
agv(d,e){return C.i3h(d,e)},
i3h(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m
var $async$agv=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$agv)
case 6:s=g
r=B.aX(x.N)
q=s.tq("ngmy_books_deleted_v1_"+A.a.i(d.toLowerCase()))
if(q!=null)J.h6(r,q)
J.cc(r,e)
p=r
r=A.a.i(d.toLowerCase())
q=p
q=B.C(q,B.a6(q).k("cr.E"))
w=7
return B.b(s.aq("StringList","ngmy_books_deleted_v1_"+r,q),$async$agv)
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
return B.b(C.a22(d),$async$agv)
case 8:n=g
J.nx(n,new C.fuU(e))
w=9
return B.b(C.ahG(d,n),$async$agv)
case 9:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$agv,v)},
idw(d,e){return B.a3(d,!1).cg(B.e_(new C.fM_(e),!0,null,x.H))},
hPO(d){var w=d.b
return A.a.i(w.a)==="My Book"&&A.d.d9(w.d,new C.cJF())},
or:function or(d,e,f){this.a=d
this.b=e
this.c=f},
ffk:function ffk(){},
ffl:function ffl(){},
fy6:function fy6(d){this.a=d},
fy4:function fy4(d){this.a=d},
fy5:function fy5(){},
fL8:function fL8(){},
fuU:function fuU(d){this.a=d},
fM_:function fM_(d){this.a=d},
YN:function YN(d,e){this.c=d
this.a=e},
ay2:function ay2(d,e){var _=this
_.d=d
_.e=!0
_.f=e
_.c=_.a=null},
cJF:function cJF(){},
cJH:function cJH(d,e){this.a=d
this.b=e},
cJK:function cJK(d){this.a=d},
cJL:function cJL(d){this.a=d},
cJJ:function cJJ(){},
cJM:function cJM(d,e){this.a=d
this.b=e},
cJI:function cJI(d){this.a=d},
cJN:function cJN(){},
cJG:function cJG(d,e){this.a=d
this.b=e},
cJO:function cJO(){},
cJB:function cJB(d){this.a=d},
cJz:function cJz(d){this.a=d},
cJA:function cJA(d){this.a=d},
cJC:function cJC(d,e){this.a=d
this.b=e},
cJy:function cJy(d){this.a=d},
cJx:function cJx(d){this.a=d},
cJv:function cJv(d,e){this.a=d
this.b=e},
cJw:function cJw(d){this.a=d},
cJE:function cJE(){},
cJD:function cJD(d){this.a=d},
cJu:function cJu(d,e){this.a=d
this.b=e},
cJt:function cJt(d,e){this.a=d
this.b=e},
cJs:function cJs(d,e){this.a=d
this.b=e},
cJP:function cJP(d){this.a=d},
YL:function YL(d,e,f){this.c=d
this.d=e
this.a=f},
aFk:function aFk(d,e,f){this.a=d
this.b=e
this.c=f},
axZ:function axZ(d){var _=this
_.r=_.f=_.e=_.d=$
_.w=d
_.x=null
_.y=!1
_.c=_.a=null},
cIW:function cIW(d){this.a=d},
cIV:function cIV(d){this.a=d},
cIY:function cIY(d,e,f){this.a=d
this.b=e
this.c=f},
cJ5:function cJ5(){},
cJ6:function cJ6(d){this.a=d},
cIZ:function cIZ(d,e,f){this.a=d
this.b=e
this.c=f},
cIX:function cIX(d,e){this.a=d
this.b=e},
cJ0:function cJ0(d,e){this.a=d
this.b=e},
cJ1:function cJ1(d,e){this.a=d
this.b=e},
cJ2:function cJ2(d,e){this.a=d
this.b=e},
cJ_:function cJ_(d){this.a=d},
cJ4:function cJ4(d){this.a=d},
cJ3:function cJ3(d,e){this.a=d
this.b=e},
cJb:function cJb(d){this.a=d},
cJ7:function cJ7(d,e){this.a=d
this.b=e},
cJ8:function cJ8(d,e){this.a=d
this.b=e},
cJ9:function cJ9(d,e){this.a=d
this.b=e},
cJa:function cJa(d,e){this.a=d
this.b=e},
ay0:function ay0(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
i70(){var w,v,u,t,s=!1
try{u=document
if(u.fullscreenElement==null){w=u.documentElement
if(w!=null){v=w.requestFullscreen()
if(s&&v!=null)B.eh(v,x.cK).bL(new C.fCD(),x.H).eW(new C.fCE())}}else if(s)C.hlp()}catch(t){}},
hlp(){var w,v,u
try{w=window.screen.orientation
if(w==null)return
v=w.lock("landscape")
if(v!=null)B.eh(v,x.cK).eW(new C.fjz())}catch(u){}},
i73(){var w,v,u
try{w=window.screen.orientation
if(w!=null)w.unlock()}catch(v){}try{u=document
if(u.fullscreenElement!=null)u.webkitExitFullscreen()}catch(v){}},
fCD:function fCD(){},
fCE:function fCE(){},
fjz:function fjz(){},
hq2(d){var w="marriage_field_",v=d.db
if(!A.a.a0(v,w))return null
return A.d.gI(A.a.ej(v,w,"").split(":"))},
hq_(d){var w=d.db
if(!A.a.a0(w,"marriage_sign_"))return null
if(A.a.a0(w,"marriage_sign_placed_"))return null
if(d.b===D.lf)return null
return A.a.b4(w,14)},
h3D(d){var w
if(d.b!==D.lf)return null
w=d.db
if(!A.a.a0(w,"marriage_sign_placed_"))return null
return A.a.b4(w,21)},
i7t(d){if(d==="hati_kuhowa")return"hati_kuhoweya"
if(d==="hati_kuhoweya")return"hati_kuhowa"
return""},
hq3(d){if(d==="hati_kuhowa")return"Hati ya Kuhoweya"
if(d==="hati_kuhoweya")return"Hati ya Kuhowa"
return"partner document"},
i7o(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=B.af("\\s+",!0,!1,!1,!1),f=A.a.i(B.aL(d,g," "))
g=B.af("\\s+",!0,!1,!1,!1)
w=A.a.i(B.aL(e,g," "))
g=f.length
if(g===0||w.length===0){g=x.N
return B.T(g,g)}v=B.af("\\[[^\\]]+\\]",!0,!1,!1,!1)
u=v.l5(0,f)
t=x.N
u=B.cF(u,new C.fDC(),B.a6(u).k("J.E"),t)
s=B.C(u,B.a6(u).k("J.E"))
if(s.length===0)return B.T(t,t)
for(u=v.l5(0,f),u=new B.JW(u.a,u.b,u.c),r=x.cz,q=0,p="^";u.C();){o=u.d
n=(o==null?r.a(o):o).b
m=n.index
p=(m>q?p+B.RJ(A.a.ap(f,q,m)):p)+"(.*?)"
q=m+n[0].length}u=(q<g?p+B.RJ(A.a.b4(f,q)):p)+"\\.?$"
l=B.af(u.charCodeAt(0)==0?u:u,!1,!1,!1,!1).cA(w)
if(l==null)return B.T(t,t)
k=B.T(t,t)
for(g=l.b,j=0;j<s.length;j=i){i=j+1
u=g[i]
h=A.a.i(u==null?"":u)
if(h.length===0)continue
k.n(0,s[j],h)}return k},
i7m(d,e){var w,v,u,t,s,r=B.a6(e).k("cu<1>"),q=B.C(new B.cu(e,r),r.k("J.E"))
A.d.aV(q,new C.fDB())
for(r=q.length,w=d,v=0;v<q.length;q.length===r||(0,B.M)(q),++v){u=q[v]
t=e.h(0,u)
s=t==null?null:A.a.i(t)
if(s==null)s=""
if(s.length===0)continue
if(A.a.a0(s,"[")&&A.a.cc(s,"]"))continue
w=B.aQC(w,u,s,0)}return w},
i7q(d,e){var w,v,u,t=d==="hati_kuhowa"?D.a4R:$.hwV(),s=x.N,r=B.T(s,s)
for(s=t.gdT(t),s=s.gaf(s);s.C();){w=s.gR(s)
v=e.h(0,w.a)
u=v==null?null:A.a.i(v)
if(u==null)u=""
if(u.length===0)continue
if(A.a.a0(u,"[")&&A.a.cc(u,"]"))continue
r.n(0,w.b,u)}return r},
hq0(d){if(d==="hati_kuhowa")return y.O
if(d==="hati_kuhoweya")return y.f
return""},
fgm(d,e){var w,v,u,t,s,r,q
for(w=d.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.M)(w),++u)for(t=w[u].z,s=t.length,r=0;r<t.length;t.length===s||(0,B.M)(t),++r){q=t[r]
if(C.hq2(q)===e)return q}return null},
i7r(d){var w,v=A.a.i(d.c),u=d.w
if(u==="hati_kuhowa")w="hati_kuhowa_"
else w=u==="hati_kuhoweya"?"hati_kuhoweya_":""
u=w.length
if(u!==0&&A.a.a0(v,w))return A.a.b4(v,u)
return A.d.gI(D.H8).a},
i7s(b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0="utangulizi",b1=b6.w,b2=b1==null?"":b1,b3=b5.w,b4=b3==null?"":b3
if(b1==="hati_kuhowa"||b1==="hati_kuhoweya")w=!(b3==="hati_kuhowa"||b3==="hati_kuhoweya")
else w=!0
if(w)return new B.aei(0,0,0)
if(b2.length===0||b4.length===0||b2===b4)return new B.aei(0,0,0)
v=C.fgm(b6,b0)
u=C.fgm(b5,b0)
t=0
if(v!=null&&u!=null){s=C.i7q(b2,C.i7o(C.hq0(b2),v.r))
if(s.a!==0){u.r=C.i7m(C.hq0(b4),s)
t=s.a}}r=B.aX(x.N)
for(w=b6.r,q=w.length,p=0;p<w.length;w.length===q||(0,B.M)(w),++p)for(o=w[p].z,n=o.length,m=0;m<o.length;o.length===n||(0,B.M)(o),++m){l=C.hq2(o[m])
if(l==null||l==="utangulizi")continue
r.M(0,l)}for(q=B.en(r,r.r,r.$ti.c),o=q.$ti.c,k=0;q.C();){n=q.d
if(n==null)n=o.a(n)
j=C.fgm(b6,n)
i=C.fgm(b5,n)
if(j==null||i==null)continue
h=j.r
if(A.a.a0(n,"witness_")){g=A.a.i(h)
n=g.length===0||g==="[Jina la Shahidi]"}else n=!1
if(n)continue
if(A.a.i(h).length===0)continue
i.r=h;++k}q=b5.r
f=q.length===0?null:A.d.gI(q)
e=0
if(f!=null)for(q=w.length,p=0;p<w.length;w.length===q||(0,B.M)(w),++p)for(o=w[p].z,n=o.length,m=0;m<o.length;o.length===n||(0,B.M)(o),++m){d=o[m]
a0=C.h3D(d)
if(a0==null)continue
a1=d.at
if(A.a.i(a1==null?"":a1).length===0)continue
a2=d.c
a3=d.d
a4=d.e
a5=d.f
for(a1=f.z,a6=a1.length,a7=0;a7<a1.length;a1.length===a6||(0,B.M)(a1),++a7){a8=a1[a7]
if(C.hq_(a8)===a0||C.h3D(a8)===a0){a2=a8.c
a3=a8.d
a4=a8.e
a5=a8.f
break}}a1=f.z
a1.$flags&1&&B.aj(a1,16)
A.d.Rc(a1,new C.fDI(a0),!0)
a1=f.z
a6=Date.now()
a9=$.j3
$.j3=a9+1
A.d.M(a1,new C.eM(""+1000*a6+"_"+a9,D.lf,a2,a3,a4,a5,"",24,A.a7,A.bp,A.aF,4279310375,A.bi,d.at,D.bg,4280640491,4280172719,2,0,!1,"marriage_sign_placed_"+a0,0,D.cl,0,"","","","","",!1,0));++e}b5.f=new B.U(Date.now(),0,!1)
return new B.aei(k,t,e)},
i7n(d){var w=C.i7r(d)
if(d.w==="hati_kuhowa")return C.hpn("",w)
return C.hpm("",w)},
fDC:function fDC(){},
fDB:function fDB(){},
fDI:function fDI(d){this.a=d},
hl8(){var w=new B.U(Date.now(),0,!1),v=new C.fiC()
return B.w(v.$1(B.bV(w)))+"/"+B.w(v.$1(B.bJ(w)))+"/"+B.bC(w)},
h3M(d){var w=d.at,v=A.a.i(w==null?"":w)
w=d.db
return(w==="__kiapo_video__"||A.a.a0(w,"__kiapo_video___"))&&v.length!==0},
fEA(d){var w,v,u,t,s,r,q=d.ax
if(A.a.i(q==null?"":q).length!==0)return!0
for(q=d.r,w=q.length,v=0;v<w;++v)for(u=q[v].z,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===D.lf&&A.a.a0(r.db,"marriage_sign_placed_rais"))return!0}return!1},
hqh(d){var w,v=d.ax,u=A.a.i(v==null?"":v)
if(u.length===0)return!C.fEA(d)
w=B.bi(u)
if(w==null)return!C.fEA(d)
return new B.U(Date.now(),0,!1).a7().d0(w.a7().bS(18e9))},
i88(d){var w=d.ax
if(A.a.i(w==null?"":w).length!==0)return
d.ax=new B.U(Date.now(),0,!1).a7().ad()},
hHK(d){return A.a.i(d).toLowerCase()},
aq9(d){return C.hHM(d)},
hHM(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o,n,m
var $async$aq9=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.az(),$async$aq9)
case 7:r=f
p=r.tq("ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase())
q=p==null?A.X:p
o=q
o=new B.N(o,C.ibJ(),B.S(o).k("N<1,n>")).c0(0,new C.cbV())
o=B.de(o,o.$ti.k("J.E"))
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
return B.i($async$aq9,v)},
aq8(d,e){return C.hHL(d,e)},
hHL(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n
var $async$aq8=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:o=A.a.i(e).toLowerCase()
if(o.length===0||A.a.i(d).length===0){w=1
break}w=3
return B.b(C.aq9(d),$async$aq8)
case 3:r=g
if(!J.cc(r,o)){w=1
break}t=5
w=8
return B.b(B.az(),$async$aq8)
case 8:q=g
w=9
return B.b(q.aq("StringList","ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase(),J.qq(r)),$async$aq8)
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
return B.i($async$aq8,v)},
aqa(d,e){return C.hHN(d,e)},
hHN(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n
var $async$aqa=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:o=A.a.i(e).toLowerCase()
if(o.length===0||A.a.i(d).length===0){w=1
break}w=3
return B.b(C.aq9(d),$async$aqa)
case 3:r=g
if(!J.hy(r,o)){w=1
break}t=5
w=8
return B.b(B.az(),$async$aqa)
case 8:q=g
w=9
return B.b(q.aq("StringList","ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase(),J.qq(r)),$async$aqa)
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
return B.i($async$aqa,v)},
Vx(a5){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$Vx=B.e(function(a6,a7){if(a6===1){s.push(a7)
w=t}for(;;)switch(w){case 0:if($.fXA&&!a5){w=1
break}t=4
w=7
return B.b(B.az(),$async$Vx)
case 7:r=a7
q=B.aU(J.q(r.a,"ngmy_civic_hati_kiapo_uongozi_v1"))
if(q!=null&&A.a.i(q).length!==0){p=A.T.aN(0,q,null)
f=x.f
if(f.b(p)){e=x.N
o=B.T(e,x.I)
for(d=J.jV(p),d=d.gaf(d),a0=x.z;d.C();){n=d.gR(d)
if(f.b(n.b))J.aG(o,J.k(n.a),C.W9(B.a2(f.a(n.b),e,a0)))}$.a7o=o}}t=2
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
return B.b(B.c6(),$async$Vx)
case 12:case 11:w=a7?8:9
break
case 8:t=14
w=17
return B.b(B.u9("civic_hati_kiapo_uongozi",null,A.em),$async$Vx)
case 17:l=a7
w=l!=null&&x.f.b(J.q(l,"byState"))?18:19
break
case 18:o=x.N
k=B.T(o,x.I)
for(f=x.f,e=J.jV(f.a(J.q(l,"byState"))),e=e.gaf(e),d=x.z;e.C();){j=e.gR(e)
if(!f.b(j.b))continue
J.aG(k,J.k(j.a),C.W9(B.a2(f.a(j.b),o,d)))}for(o=k,o=new B.cH(o,B.a6(o).k("cH<1,2>")).gaf(0);o.C();){f=o.d
f.toString
i=f
h=$.a7o.h(0,i.a)
if(h!=null){f=i.b.f
e=h.f
d=f.a
if(d>=e.gbq())f=d===e.gbq()&&f.b<e.gcB()
else f=!0
f=!f}else f=!0
if(f)$.a7o.n(0,i.a,i.b)}w=20
return B.b(C.aqb(),$async$Vx)
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
case 16:case 9:$.fXA=!0
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Vx,v)},
aqb(){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m,l
var $async$aqb=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$aqb)
case 6:s=e
r=B.T(x.N,x.P)
for(o=$.a7o,o=new B.cH(o,B.a6(o).k("cH<1,2>")).gaf(0);o.C();){n=o.d
n.toString
q=n
J.aG(r,q.a,q.b.ag())}w=7
return B.b(s.aq("String","ngmy_civic_hati_kiapo_uongozi_v1",A.T.ao(r,null)),$async$aqb)
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
return B.i($async$aqb,v)},
b_E(d){var w=0,v=B.j(x.af),u,t,s,r
var $async$b_E=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.Vx(!1),$async$b_E)
case 3:t=A.a.i(d).toLowerCase()
if(t.length===0){u=null
w=1
break}s=$.a7o.h(0,t)
r=s==null?null:s.hI()
if(r==null){u=null
w=1
break}u=C.bCi(r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$b_E,v)},
a7p(a1){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$a7p=B.e(function(a2,a3){if(a2===1){s.push(a3)
w=t}for(;;)switch(w){case 0:e=a1.x
d=A.a.i(A.a.i(e==null?"":e)).toLowerCase()
if(d.length===0){u=!1
w=1
break}a1.w="hati_kiapo_uongozi"
a1.f=new B.U(Date.now(),0,!1)
o=a1.hI()
for(e=o.r,n=e.length,m=0;m<e.length;e.length===n||(0,B.M)(e),++m)for(l=e[m].z,k=l.length,j=0;j<k;++j){i=l[j]
h=i.at
g=A.a.i(h==null?"":h)
h=i.db
if((h==="__kiapo_video__"||A.a.a0(h,"__kiapo_video___"))&&A.a.a0(g,"data:"))i.at=null}$.a7o.n(0,d,o)
$.fXA=!0
w=3
return B.b(C.aqb(),$async$a7p)
case 3:w=4
return B.b(B.c6(),$async$a7p)
case 4:if(!a3){u=!1
w=1
break}t=6
e=x.N
r=B.T(e,x.P)
for(n=$.a7o,n=new B.cH(n,B.a6(n).k("cH<1,2>")).gaf(0);n.C();){l=n.d
l.toString
q=l
J.aG(r,q.a,q.b.ag())}w=9
return B.b(B.nv("civic_hati_kiapo_uongozi",B.G(["byState",r,"updatedAt",new B.U(Date.now(),0,!1).a7().ad()],e,x.z),null),$async$a7p)
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
return B.i($async$a7p,v)},
aqc(d){var w=0,v=B.j(x.T),u,t,s
var $async$aqc=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(new B.hV().a5Y(A.eJ),$async$aqc)
case 3:s=f
if(s==null){u=null
w=1
break}w=4
return B.b(s.fj(),$async$aqc)
case 4:t=f
if(t.length===0){u=null
w=1
break}w=5
return B.b(C.b_D(t,d),$async$aqc)
case 5:u=f
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aqc,v)},
b_D(d,e){return C.hHO(d,e)},
hHO(d,e){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$b_D=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.c6(),$async$b_D)
case 7:if(!g){u=null
w=1
break}n=A.a.i(e)
m=B.af("[^a-z0-9]+",!0,!1,!1,!1)
r=B.aL(n.toLowerCase(),m,"_")
q="civic_kiapo/"+B.w(r)+"/"+1000*Date.now()+".mp4"
n=$.eY().b
n===$&&B.c()
n=n.at
n===$&&B.c()
p=n.im("media")
w=8
return B.b(p.x7(q,new Uint8Array(B.ch(d)),D.bEo),$async$b_D)
case 8:n=p.CJ(q)
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
return B.i($async$b_D,v)},
KL(d,e,f,g,h,i,j,k,l,m,n){var w=C.cE()
return C.er(e,!1,f,A.aF,k.length===0?"marriage_locked":"marriage_locked_"+k,4280640491,g,h,i,"",j,w,null,"","",0,!1,"",0,D.bg,4280172719,2,d,0,0,"",D.cl,D.cQ,l,m,n)},
fi3(d,e,f,g,h,i,j,k,l){var w=C.cE()
return C.er(A.bi,!1,4279310375,A.aF,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bp,A.a7,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.cl,D.f8,j,k,l)},
h0J(d,e,f,g,h,i,j,k){var w=C.cE(),v=A.k.E(i*0.0017,0.02,0.06)
return C.er(h,!1,j,A.aF,"marriage_field_"+d+":"+A.k.ac(g,3),4280640491,i,A.cE,A.O,"",v,w,null,"","",0,!1,"",0,D.bg,4280172719,2,k,0,0,"",D.cl,D.cQ,g,e,f)},
fhC(d,e,f,g){return C.fi3(0,0.002,D.fy,g,0.8,"ul_"+B.w(d)+"_"+B.w(e),f,d,e+0.002)},
h0K(d,e,f,g,h,i,j,k){var w=C.cE()
return C.er(A.qC,!1,j,A.aF,"marriage_field_"+d+":"+A.k.ac(g,3),4280640491,i,A.bp,A.a7,"",h,w,null,"","",0,!1,"",0,D.bg,4280172719,2,k,0,0,"",D.cl,D.cQ,g,e,f)},
hl7(d){var w="marriage_field_",v=d.db
if(!A.a.a0(v,w))return null
return A.d.gI(A.a.ej(v,w,"").split(":"))},
bCi(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4="hati_kiapo_uongozi",a5="__kiapo_video___"
if(a6.w!==a4)return a6
w=a6.x
v=w==null
u=A.a.i(v?"":w)
t=a6.r
s=t.length===0?a3:A.d.gI(t)
t=x.N
r=B.T(t,t)
q=a3
p=a3
if(s!=null)for(t=s.z,o=t.length,n=0;n<t.length;t.length===o||(0,B.M)(t),++n){m=t[n]
l=C.hl7(m)
if(l!=null&&A.a.i(m.r).length!==0)r.n(0,l,m.r)
k=m.at
j=A.a.i(k==null?"":k)
i=m.db
if((i==="__kiapo_video__"||A.a.a0(i,a5))&&j.length!==0)q=k
if(m.b===D.lf&&A.a.a0(i,"marriage_sign_placed_rais"))p=m.hI()}h=C.h3h(u)
t=a6.b
o=h.c
i=h.d
if(v)w=u
v=a6.y
g=a6.z
f=a6.Q
e=a6.as
d=a6.at
a0=C.BW(f,a3,a3,a3,i,5,!1,a4,a3,a3,a3,a3,a6.a,a6.ax,!1,w,t,d,e,h.r,o,v,g,a6.f)
a1=A.d.gI(a0.r)
for(w=a1.z,v=w.length,t=q!=null,n=0;n<w.length;w.length===v||(0,B.M)(w),++n){m=w[n]
l=C.hl7(m)
if(l!=null&&r.ai(0,l)){o=r.h(0,l)
o.toString
m.r=o}o=m.db
if((o==="__kiapo_video__"||A.a.a0(o,a5))&&t)m.at=q}if(p!=null){a2={}
a2.a=null
for(w=a1.z,v=w.length,n=0;n<v;++n){m=w[n]
t=m.db
if(A.a.a0(t,"marriage_sign_")&&!A.a.a0(t,"marriage_sign_placed_")&&m.b!==D.lf&&A.a.cc(t,"rais")){a2.a=m
break}}w=a2.a
if(w!=null){p.c=w.c
p.d=w.d
p.e=w.e
p.f=w.f
A.d.bt(a1.z,new C.fCB(a2))}else A.d.bt(a1.z,new C.fCC())
A.d.M(a1.z,p)}w=a0.ax
if(A.a.i(w==null?"":w).length===0&&C.fEA(a0))a0.ax=a6.f.a7().ad()
return a0},
h3h(d){var w,v,u="Hati ya Kiapo cha Uongozi",t=null,s=4279310375,r=4280640491,q=4280172719,p=4279378237,o=4290283019,n=4293056712,m=C.fFn(D.a5S),l=C.cE(),k=x.u,j=B.a([C.er(A.bi,!1,s,A.aF,"marriage_locked_bg",r,24,A.bp,A.a7,"",1,C.cE(),m,"","",0,!1,"",0,D.bg,q,2,"",0,0,"",D.cl,D.lJ,1,0,0)],k),i=B.a([],k)
i.push(C.KL("NGMY",A.L,236069181,52,A.bp,A.u,0.08,"watermark",0.45,-0.08,0.02))
i.push(C.KL("TAREHE:",A.bi,o,16,A.bp,A.H,A.k.E(0.0272,0.02,0.06),"tarehe_lbl",0.1,0.7,0.026))
i.push(C.h0J("tarehe",0.8059999999999999,0.026,0.18,A.bi,16,p,C.hl8()))
i.push(C.fhC(0.8099999999999999,0.026+A.k.E(0.0272,0.02,0.06)*0.8,0.12,o))
i.push(C.KL("HATI YA KIAPO CHA UONGOZI",A.L,p,26,A.bp,A.u,0.048,"title",0.83,0.085,0.055))
i.push(C.KL("Kiapo cha Rais \xb7 Presidential Oath of Leadership",A.L,o,11,A.cE,A.a7,0.024,"subtitle",0.83,0.085,0.1))
i.push(C.fi3(0,0.002,D.fy,o,1.6,"title_rule",0.5312,0.2344,0.128))
i.push(C.h0K("body_p1",0.085,0.145,0.83,0.105,12,p,"Mimi [Jina Kamili la Rais], nikiwa Rais wa jamii yetu ya Kikongo, ninasimama mbele ya wanajamii wote kuapa kwamba nitawaongoza kwa haki, amani, na heshima kubwa, huku nikihakikisha tunashirikiana kwa pamoja kujenga jamii yetu na kuchangia maendeleo kwa njia bora na ya kistaarabu."))
i.push(C.h0K("body_p2",0.085,0.255,0.83,0.092,12,p,"Ninajwika jukumu kamili la kusimamia rasilimali na fedha za wananchi kwa uaminifu mkubwa. Endapo itatokea kiasi chochote cha fedha cha mwanachama yeyote hakikurekodiwa vizuri, au fedha ya jumuiya ikipotea bila maelezo, nitawajibika kulipa mara tatu (triple) ya kiasi kilichopotea."))
i.push(C.h0K("body_p3",0.085,0.352,0.83,0.095,12,p,"Kama nikishindwa kulipa au nikakataa kufanya hivyo, wanajamii wote wanaruhusiwa na wako huru kuchukua hatua za kisheria kwenda kuripoti kwa maofisa wa serikali (state officers) au polisi, au kumfungulia mashitaka mahakamani, na niko tayari kukabiliwa na sheria hizo bila pingamizi."))
i.push(C.fi3(268435456,0.175,D.bg,o,1.6,"video_frame",0.83,0.085,0.46))
i.push(C.KL("VIDEO YA KIAPO",A.bi,o,10,A.bp,A.H,0.02,"video_lbl",0.7899999999999999,0.10500000000000001,0.468))
i.push(C.er(A.bi,!1,s,A.aF,"__kiapo_video__",r,24,A.bp,A.a7,"",0.131,C.cE(),t,"","",0,!1,"",0,D.bg,q,2,"",0,0,"",D.cl,D.lJ,0.77,0.115,0.492))
i.push(C.KL("Rais Anayeapa:",A.bi,p,15,A.bp,A.u,0.028,"rais_hdr",0.83,0.085,0.655))
i.push(C.KL("Jina:",A.bi,p,13,A.bp,A.O,0.026,"jina_lbl",0.1,0.085,0.6930000000000001))
i.push(C.h0J("rais_jina",0.195,0.6930000000000001,0.62,A.bi,13,p,""))
i.push(C.fhC(0.195,0.7130000000000001,0.62,n))
i.push(C.KL("Sahihi:",A.bi,p,13,A.bp,A.O,0.026,"sahihi_lbl",0.12,0.085,0.74))
i.push(C.er(A.bi,!1,s,A.aF,"marriage_sign_rais",0,24,A.bp,A.a7,"",0.07,C.cE(),t,"","",0,!1,"",0,D.bg,0,2,"",0,0,"",D.cl,D.f8,0.38,0.21500000000000002,0.73))
i.push(C.fhC(0.21500000000000002,0.795,0.38,n))
i.push(C.KL("Tarehe:",A.bi,p,13,A.bp,A.O,0.026,"tarehe2_lbl",0.12,0.625,0.74))
i.push(C.h0J("rais_tarehe",0.745,0.74,0.2,A.bi,12,p,C.hl8()))
i.push(C.fhC(0.745,0.76,0.2,n))
w=A.a.i(d)
if(w.length!==0)A.d.v(i,B.a([C.fi3(0,0.032,D.bg,o,1,"state_box",0.72,0.14,0.875),C.KL("EMO 'YA M'MBONDO "+w,A.L,p,14,A.bp,A.O,0.026000000000000002,"state_text",0.72,0.14,0.878)],k))
A.d.v(j,i)
v=C.rD(4294967035,t,0,0,j,l,D.qr,"","",u,D.dh)
return C.BW(t,t,t,t,D.on,5,!1,"hati_kiapo_uongozi",t,t,t,t,C.cE(),t,!1,w,u,t,t,B.a([v],x.g),"hati_kiapo_elegant_navy",t,!1,t)},
agH(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$agH=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:p=A.a.i(i)
if(p.length===0){if(f.e!=null)f.J(x.q).f.S(D.f2r)
w=1
break}w=3
return B.b(C.Vx(!0),$async$agH)
case 3:w=4
return B.b(C.b_E(p),$async$agH)
case 4:t=k
if(f.e==null){w=1
break}if(e)s=d||t==null||C.hqh(t)
else s=!1
w=t!=null?5:6
break
case 5:w=s?7:8
break
case 7:w=9
return B.b(B.bT(D.bgV,null,new C.fxs(p),f,!0,!0,!1,A.lK,!1,!1,x.N),$async$agH)
case 9:r=k
if(r==="continue"){h.$1(t)
w=1
break}if(r!=="new"){w=1
break}if(f.e==null){w=1
break}w=10
return B.b(B.cf(null,null,!0,null,new C.fxt(),f,null,!0,!0,x.y),$async$agH)
case 10:if(k!==!0||f.e==null){w=1
break}g.$1(C.h3h(p))
w=1
break
case 8:h.$1(t)
w=1
break
case 6:if(!s){if(f.e!=null){q=f.J(x.q).f
q.S(B.b3(null,null,null,null,null,A.t,null,B.d("Registrar wa "+p+" bado hajachapisha Hati ya Kiapo cha Uongozi.",null,null,null,null,null,null,null,null,null,null),null,A.V,null,null,null,null,null,null,null,null,null,null))}w=1
break}if(f.e==null){w=1
break}g.$1(C.h3h(p))
case 1:return B.h(u,v)}})
return B.i($async$agH,v)},
fiC:function fiC(){},
cbV:function cbV(){},
fCB:function fCB(d){this.a=d},
fCC:function fCC(){},
fxs:function fxs(d){this.a=d},
fxq:function fxq(d){this.a=d},
fxr:function fxr(d){this.a=d},
fxt:function fxt(){},
fxo:function fxo(d){this.a=d},
fxp:function fxp(d){this.a=d},
aqH:function aqH(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aEa:function aEa(){var _=this
_.d=null
_.r=_.f=_.e=!1
_.c=_.a=null},
edr:function edr(d){this.a=d},
edp:function edp(d){this.a=d},
edq:function edq(d){this.a=d},
eds:function eds(d){this.a=d},
edt:function edt(d){this.a=d},
wE(d,e,f,g,h,i,j,k,l,m,n){var w=C.cE()
return C.er(e,!1,f,A.aF,k.length===0?"marriage_locked":"marriage_locked_"+k,4280640491,g,A.bp,h,"",i,w,null,"","",0,!1,"",j,D.bg,4280172719,2,d,0,0,"",D.cl,D.cQ,l,m,n)},
hkL(d,e,f){var w=4291404327
return B.a([C.qg(0,f,D.eQ,w,2,"ring_l",f,d-f*0.42,e),C.qg(0,f,D.eQ,w,2,"ring_r",f,d+f*0.06,e)],x.u)},
fh2(d,e,f,g,h){var w,v,u="ps_"+g,t=C.qg(4294967288,f,D.eQ,4291404327,1.3,u+"_ring",f,d,e),s=f*0.36
s=C.qg(h,s,D.eQ,h,0,u+"_head",s,d+f*0.32,e+f*0.16)
w=g?0.12:0.18
v=g?0.76:0.64
return B.a([t,s,C.qg(h,f*0.46,D.eQ,h,0,u+"_body",f*v,d+f*w,e+f*0.5)],x.u)},
qg(d,e,f,g,h,i,j,k,l){var w=C.cE()
return C.er(A.bi,!1,4279310375,A.aF,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bp,A.a7,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.cl,D.f8,j,k,l)},
fh1(d,e,f,g,h,i,j,k,l){var w=C.cE(),v=A.k.E(j*0.0017,0.02,0.06),u="marriage_field_"+d+":"
return C.er(h,!1,k,A.aF,i?u+A.k.ac(g,3)+":"+A.o.ac(j,1):u+A.k.ac(g,3),4280640491,j,A.cE,A.O,"",v,w,null,"","",0,!1,"",0,D.bg,4280172719,2,l,0,0,"",D.cl,D.cQ,g,e,f)},
bzK(d,e,f,g){return C.qg(0,0.002,D.fy,g,0.8,"ul_"+B.w(d)+"_"+B.w(e),f,d,e+0.002)},
hkK(d,e,f,g,h){var w=A.k.E(d.length*30*0.00058+0.08,0.2,0.5),v=f+(g-w)/2
return B.a([C.qg(0,0.036,D.bg,h,1.4,"banner_box_"+d,w,v,e),C.wE(d,A.L,h,30,A.u,0.025199999999999997,0,"banner_t_"+d,w,v,e+0.00612)],x.u)},
hq1(){var w=new B.U(Date.now(),0,!1),v=new C.fDH()
return B.w(v.$1(B.bV(w)))+"/"+B.w(v.$1(B.bJ(w)))+"/"+B.bC(w)},
hkM(d,e,f,g,h,i,j){var w=4293056712,v=h*0.56,u=f+v+0.01,t=u+0.08,s=f+h-t,r=""+e,q=f+0.026,p=v-0.026
return B.a([C.wE(r+".",A.bi,i,13,A.H,0.024,0,"wln_"+d+"_"+r,0.026,f,g),C.fh1("witness_"+d+"_"+r+"_name",q,g,p,A.bi,!0,16,j,"[Jina la Shahidi]"),C.bzK(q,g+A.k.E(0.0272,0.02,0.06),p,w),C.wE("Sahihi:",A.bi,j,15,A.a7,0.028,0,"wls_"+d+"_"+r,0.077,u,g),C.er(A.bi,!1,4279310375,A.aF,"marriage_sign_"+d+"_witness_"+r,0,24,A.bp,A.a7,"",0.05,C.cE(),null,"","",0,!1,"",0,D.bg,0,2,"",0,0,"",D.cl,D.f8,s,t,g-0.004),C.bzK(t,g+0.044,s,w)],x.u)},
ah7(d,e){var w,v,u,t=x.cd,s=e!=null?B.a([e],t):B.a([D.djA,D.cnG,D.dbQ,D.ddI],t)
for(t=s.length,w=0;w<s.length;s.length===t||(0,B.M)(s),++w)for(v=A.d.gaf(s[w]);v.C();){u=v.gR(0)
if(u.a===d)return u}return null},
h0_(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var w=C.fFn(d.d),v=B.a([C.er(A.bi,!1,4279310375,A.aF,"marriage_locked_bg",4280640491,24,A.bp,A.a7,"",1,C.cE(),w,"","",0,!1,"",0,D.bg,4280172719,2,"",0,0,"",D.cl,D.lJ,1,0,0)],x.u)
A.d.v(v,C.hWx(d,e,f,g,h,i,j,k,l,m,n,o,p,q))
return v},
hWx(c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=null,b0=4286200650,b1=4291404327,b2=4280640491,b3=4280172719,b4="marriage_locked",b5=4293056712,b6=4279310375,b7=4279673674,b8="marriage_locked_",b9=c3.f,c0=c3.r,c1=x.u,c2=B.a([],c1)
c2.push(C.wE("NGMY",A.L,b9&16777215|251658240,60,A.u,0.09,-0.52,"watermark",0.5,-0.11,0.025))
w=c3.z
switch(w.a){case 1:case 3:A.d.v(c2,C.hkL(0.42,0.016,0.048))
v=0.066
break
case 7:A.d.v(c2,C.hkL(0.38,0.012,0.072))
v=0.082
break
case 2:case 6:case 10:A.d.v(c2,C.fh2(0.16,0.018,0.052,!1,b9))
A.d.v(c2,C.fh2(0.79,0.018,0.052,!0,b0))
v=0.072
break
case 5:c2.push(C.wE("\ud83c\udf33",A.L,4279898632,22,A.a7,0.04,0,"tree",0.16,0.42,0.014))
v=0.056
break
case 8:A.d.v(c2,B.a([C.qg(0,0.062,D.eQ,b1,1.6,"crest_o",0.11,0.445,0.012),C.qg(0,0.046,D.eQ,b1,1,"crest_i",0.084,0.458,0.02),C.wE("MUHURI",A.L,b9,9,A.u,0.028,0,"crest_t",0.11,0.445,0.028)],c1))
v=0.078
break
case 4:case 9:A.d.v(c2,B.a([C.qg(0,0.002,D.fy,b1,1,"orn_l_0.018",0.24,0.2,0.024),C.qg(b9,0.016,D.lg,b1,0.9,"orn_c_0.018",0.024,0.488,0.018),C.qg(0,0.002,D.fy,b1,1,"orn_r_0.018",0.24,0.518,0.024)],c1))
v=0.04
break
case 0:v=d5
break
default:v=d5}A.d.v(c2,B.a([C.wE("TAREHE:",A.bi,c0,20,A.H,A.k.E(0.033999999999999996,0.02,0.06),0,"tarehe_lbl",0.1,0.7,0.026),C.fh1("tarehe",0.8059999999999999,0.026,0.14400000000000002,A.bi,!1,21,b9,C.hq1()),C.bzK(0.814,0.026+A.k.E(0.035699999999999996,0.02,0.06)*0.8,0.12,c0)],c1))
c2.push(C.wE(d2,A.L,b9,d3,A.u,0.06,0,"title",0.82,0.09,v))
u=v+0.054
c2.push(C.qg(c0,0.0026,D.bg,c0,0,"title_rule_1",0.82*d4,0.09+0.82*(1-d4)/2,u))
t=u+0.028
c2.push(C.qg(c3.e,0.138,D.bg,c0,1.15,"intro_frame",0.832,0.08399999999999999,t-0.004))
s=C.cE()
c2.push(C.er(A.bi,!1,b9,A.aF,"marriage_field_utangulizi:"+A.k.ac(0.82,3),b2,19,A.bp,A.cw,"",0.128,s,a9,"","",0,!1,"",0,D.bg,b3,2,c5,0,0,"",D.cl,D.cQ,0.82,0.09,t))
t+=c4
if(c8){r=A.k.E(c7.length*30*0.00058+0.08,0.2,0.5)
q=0.09+(0.82-r)/2
s=C.qg(0,0.036,D.bg,c0,1.4,"banner_box_nimetowe_label",r,q,t)
p=C.cE()
A.d.v(c2,B.a([s,C.er(A.L,!1,c0,A.aF,"marriage_field_nimetowe_label:"+A.k.ac(r,3),b2,30,A.bp,A.u,"",0.025199999999999997,p,a9,"","",0,!1,"",0,D.bg,b3,2,c7,0,0,"",D.cl,D.cQ,r,q,t+0.00612)],c1))}else A.d.v(c2,C.hkK(c7,t,0.09,0.82,c0))
t+=0.048
c2.push(C.wE(c9,A.bi,b9,d0,A.O,0.03,0,"nimetowe_sub",0.82,0.09,t))
t+=0.03
for(o=1;o<=4;++o){s=c6[o-1]
n=o===1
m=A.k.E(0.7779999999999999-(n?0.328:0),0.22,1)
l=n?A.k.E(0.037399999999999996,0.02,0.06):A.k.E(0.0272,0.02,0.06)
p=""+o
k=t+0.002
j=C.fh1("mahari_"+p,0.132,k,m,A.bi,!1,16,b9,s)
if(n)j.f=l
s="nim_n_"+p
i=Date.now()
h=$.j3
$.j3=h+1
s=s.length===0?b4:b8+s
g="nim_ul_"+p
f=Date.now()
e=$.j3
$.j3=e+1
g=g.length===0?b4:b8+g
d=B.a([new C.eM(""+1000*i+"_"+h,D.cQ,0.09,t+0.004,0.032,0.022,p+".",13,A.H,A.bp,A.aF,c0,A.bi,a9,D.bg,b2,b3,2,0,!1,s,0,D.cl,0,"","","","","",!1,0),j,new C.eM(""+1000*f+"_"+e,D.f8,0.132,k+l+0.002,0.7779999999999999,0.002,"",24,A.a7,A.bp,A.aF,b6,A.bi,a9,D.fy,0,b5,0.8,0,!1,g,0,D.cl,0,"","","","","",!1,0)],c1)
if(n){a0=0.132+m+0.008
a1=a0+0.268+0.004
a2=k+(l-0.025875)/2
s=Date.now()
p=$.j3
$.j3=p+1
i=Date.now()
h=$.j3
$.j3=h+1
g=Date.now()
f=$.j3
$.j3=f+1
e=Date.now()
a3=$.j3
$.j3=a3+1
A.d.v(d,B.a([new C.eM(""+1000*s+"_"+p,D.cQ,a0,k,0.268,l,"AKUNA DENI",22,A.u,A.bp,A.aF,b7,A.dT,a9,D.bg,b2,b3,2,0,!1,"marriage_locked_nim_akuna_deni",0,D.cl,0,"","","","","",!1,0),new C.eM(""+1000*i+"_"+h,D.f8,a1,a2,0.046,0.025875,"",24,A.a7,A.bp,A.aF,b6,A.bi,a9,D.bg,0,b7,2,0,!1,"marriage_locked_nim_akuna_box",0,D.cl,0,"","","","","",!1,0),new C.eM(""+1000*g+"_"+f,D.cQ,a1,a2-0.002,0.046,0.029875,"\u2713",18,A.u,A.bp,A.aF,b7,A.L,a9,D.bg,b2,b3,2,0,!1,"marriage_locked_nim_akuna_tick",0,D.cl,0,"","","","","",!1,0),new C.eM(""+1000*e+"_"+a3,D.f8,a0,k,a1+0.046-a0,l,"",24,A.a7,A.bp,A.aF,b6,A.bi,a9,D.bg,0,0,0,0,!1,"marriage_locked_nim_akuna_hit",0,D.cl,0,"","","","","",!1,0)],c1))}A.d.v(c2,d)
t+=0.04}t+=0.006
A.d.v(c2,C.hkK("MASHAHIDI",t,0.09,0.82,c0))
t+=0.046
if(w===D.a5H||w===D.a5J||w===D.a5G||w===D.a5I){w=t-0.008
A.d.v(c2,C.fh2(0.21,w,0.044,!0,b0))
A.d.v(c2,C.fh2(0.7459999999999999,w,0.044,!1,b9))
t+=0.012}a4=0.05+d6*0.056+0.011
w=t+0.05
s=t+0.012
A.d.v(c2,B.a([C.qg(0,a4,D.bg,c0,1.3,"wit_table_border",0.82,0.09,t),C.qg(c0,a4,D.bg,c0,0,"wit_table_divider",0.0024,0.4988,t),C.qg(0,0.0022,D.fy,c0,1.1,"wit_table_hdrline",0.82,0.09,w),C.wE("UPANDE WA MKE",A.L,c0,20,A.u,0.03,0,"wit_h_mke_t",0.41,0.09,s),C.wE("UPANDE WA MUME",A.L,c0,20,A.u,0.03,0,"wit_h_mume_t",0.41,0.5,s)],c1))
a5=w+0.01
for(a6=1;a6<=d6;++a6){A.d.v(c2,C.hkM("mke",a6,0.106,a5,0.378,c0,b9))
A.d.v(c2,C.hkM("mume",a6,0.516,a5,0.378,c0,b9))
a5+=0.056}t=t+a4+0.012
w=t+0.056
s=t+0.09
p=s-0.002
A.d.v(c2,B.a([C.qg(0,0.11,D.bg,c0,1.2,"mw_box",0.82,0.09,t),C.wE("MWANDISHI",A.bi,c0,15,A.H,0.026,0,"mw_hdr",0.7759999999999999,0.11199999999999999,t+0.016),C.wE("Jina:",A.bi,b9,15,A.a7,0.028,0,"mw_jl",0.09,0.11199999999999999,w),C.fh1("mwandishi_jina",0.215,w,0.3116,A.bi,!0,15,b9,""),C.bzK(0.215,p,0.3116,b5),C.wE("Sahihi:",A.bi,b9,15,A.a7,0.028,0,"mw_sl",0.09,0.5,w),C.er(A.bi,!1,b6,A.aF,"marriage_sign_mwandishi",0,24,A.bp,A.a7,"",0.044,C.cE(),a9,"","",0,!1,"",0,D.bg,0,2,"",0,0,"",D.cl,D.f8,0.3161999999999999,0.5738,s-0.044),C.bzK(0.5738,p,0.3161999999999999,b5)],c1))
a7=A.a.i(d1)
if(a7.length!==0){a8=t+0.11+0.006
A.d.v(c2,B.a([C.qg(0,0.032,D.bg,c0,1,"state_box",0.7,0.15,a8),C.wE("EMO 'YA M'MBONDO "+a7,A.L,b9,26,A.O,0.026000000000000002,0,"state_text",0.7,0.15,a8+0.003)],c1))}return c2},
i7p(d){var w,v,u,t=null,s=B.b1(d.f),r=B.b1(d.r),q=C.h3W(d.d),p=new C.fDD(s),o=new C.fDE(s),n=d.z,m=n===D.a5H||n===D.a5J||n===D.a5G||n===D.a5I,l=n===D.aGx||n===D.a5K||n===D.aGy,k=B.bU(0,B.fO(q,A.A,t,t,A.cf,A.bW,!0,t,!1,t,t),0,0,0),j=x.p,i=B.a([],j)
if(l){w=n===D.a5K?26:16
i.push(new C.fDG().$1$size(w))}if(n===D.aGz)i.push(D.fJz)
if(m)i.push(B.B(B.a([o.$1$female(!1),o.$1$female(!0)],j),A.m,t,A.iy,A.j,0,t,t))
i.push(B.d("HATI YA KUHOWA",t,t,t,t,t,t,B.l(t,t,s,t,t,t,t,t,t,t,t,9,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),A.L,t,t))
i.push(A.am)
n=B.I(r,A.r,1.1)
w=B.m(4)
i.push(B.p(t,B.x(B.a([p.$0(),D.aPP,p.$1$w(0.9),D.aPP,p.$1$w(0.75)],j),A.m,t,A.e,A.j,0,A.p),A.f,t,t,new B.o(D.bbI,t,n,w,t,t,A.n),t,t,t,t,A.ak4,t,t,t))
i.push(A.am)
i.push(new C.fDF(r).$1("NIMETOWE"))
i.push(A.fM)
v=J.e4(3,x.l)
for(u=0;u<3;++u)v[u]=new B.D(A.MH,new B.cb(A.aN,A.e,A.j,A.m,t,A.p,t,0,B.a([B.p(t,t,A.f,t,t,new B.o(r,t,t,t,t,t,A.a5),t,7,t,t,t,t,t,7),A.dc,new B.bA(1,A.bd,p.$1$h(4),t)],j),t),t)
A.d.v(i,v)
i.push(A.b0)
i.push(B.d(d.b,t,t,t,t,t,t,B.l(t,t,s.j(0.85),t,t,t,t,t,t,t,t,8,t,t,A.H,t,t,!0,t,t,t,t,t,t,t,t),A.L,t,t))
return new B.an(A.a_,t,A.b1,A.t,B.a([k,new B.D(A.aiG,B.x(i,A.aj,t,A.e,A.j,0,A.p),t)],j),t)},
hpm(d,e){var w,v,u,t=null,s="Hati ya Kuhowa",r=C.ah7(e,t)
if(r==null)r=A.d.gI(D.H8)
w=C.cE()
v=C.rD(r.e,t,0,0,C.h0_(r,0.165,y.O,D.dej,"NIMETOWA",!1,"Vitu vifuatavyo vimetolewa:",20,d,"HATI YA KUHOWA",40,0.55,0.036,3),w,D.qr,"","",s,D.dh)
w=C.cE()
u=A.a.i(d)
if(u.length===0)u=t
return C.BW(t,t,t,t,D.on,5,!1,"hati_kuhowa",t,t,t,t,w,t,!1,u,s,t,t,B.a([v],x.g),"hati_kuhowa_"+r.a,t,!1,t)},
hpn(d,e){var w,v,u,t=null,s="Hati ya Kuhoweya",r=C.ah7(e,t)
if(r==null)r=A.d.gI(D.H8)
w=C.cE()
v=C.rD(r.e,t,0,0,C.h0_(r,0.165,y.f,D.d9U,"NIMEPOKEYA CASH",!0,"Vitu vifuatavyo vimetolewa:",20,d,"HATI YA KUHOWESHA",40,0.55,0.036,3),w,D.qr,"","",s,D.dh)
w=C.cE()
u=A.a.i(d)
if(u.length===0)u=t
return C.BW(t,t,t,t,D.on,5,!1,"hati_kuhoweya",t,t,t,t,w,t,!1,u,s,t,t,B.a([v],x.g),"hati_kuhoweya_"+r.a,t,!1,t)},
bDE(d,e,f){var w=0,v=B.j(x.T),u
var $async$bDE=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:u=B.bT(A.K,null,new C.fPs(e,f),d,!0,!0,!0,null,!1,!1,x.N)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bDE,v)},
agI(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$agI=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:q=B.S(i).k("Z<1>")
p=B.C(new B.Z(i,new C.fxw(),q),q.k("J.E"))
w=!g&&p.length!==0?3:4
break
case 3:w=5
return B.b(B.bT(D.LS,null,new C.fxx(p),d,!0,!0,!1,A.lK,!1,!1,x.N),$async$agI)
case 5:t=k
if(t==="continue"){f.$1(A.d.gI(p).hI())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bDE(d,"Hati ya Kuhowa",D.H8),$async$agI)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.Lp(d,"Tafuta jimbo\u2026","",A.kh,"Chagua jimbo"),$async$agI)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}e.$1(C.hpm(r,s))
case 1:return B.h(u,v)}})
return B.i($async$agI,v)},
agJ(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$agJ=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:q=B.S(i).k("Z<1>")
p=B.C(new B.Z(i,new C.fxA(),q),q.k("J.E"))
w=!g&&p.length!==0?3:4
break
case 3:w=5
return B.b(B.bT(D.LS,null,new C.fxB(p),d,!0,!0,!1,A.lK,!1,!1,x.N),$async$agJ)
case 5:t=k
if(t==="continue"){f.$1(A.d.gI(p).hI())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bDE(d,"Hati ya Kuhoweya",D.H8),$async$agJ)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.Lp(d,"Tafuta jimbo\u2026","",A.kh,"Chagua jimbo"),$async$agJ)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}e.$1(C.hpn(r,s))
case 1:return B.h(u,v)}})
return B.i($async$agJ,v)},
agK(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p,o,n,m
var $async$agK=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:n=B.S(i).k("Z<1>")
m=B.C(new B.Z(i,new C.fxE(),n),n.k("J.E"))
w=!g&&m.length!==0?3:4
break
case 3:w=5
return B.b(B.bT(D.LS,null,new C.fxF(m),d,!0,!0,!1,A.lK,!1,!1,x.N),$async$agK)
case 5:t=k
if(t==="continue"){f.$1(A.d.gI(m).hI())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bDE(d,"Malipo ya Awamu ya Mahari",D.R3),$async$agK)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.Lp(d,"Tafuta jimbo\u2026","",A.kh,"Chagua jimbo"),$async$agK)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}q=C.ah7(s,D.R3)
if(q==null)q=A.d.gI(D.R3)
n=C.cE()
p=C.rD(q.e,null,0,0,C.h0_(q,0.21,"Mimi [Jina la Baba wa Mume], nikiwa kama baba na mkuu wa familia ya upande wa mume kutoka jamii ya [Jina la Jamii ya Mume], nyumba ya [Jina la Nyumba ya Mume], ninafanya makubaliano haya rasmi na familia ya [Jina la Baba wa Binti], wa jamii ya [Jina la Jamii ya Binti], nyumba ya [Jina la Nyumba ya Binti]. Kwa kuwa malipo kamili ya mahari ya mke wa mwanangu hayajakamilika kwa sasa, tumefikia makubaliano ya kulipa kwa awamu. Kiasi kilichosalia cha mahari kitakamilishwa kikamilifu na familia yetu ifikapo tarehe [Tarehe ya Kurudi Kulipa Mahari]. Siku hiyo, pande zote mbili zitakutana tena kwa ajili ya kukamilisha taratibu zote zilizosalia, kupokea baraka kamili za ndoa, na kukabidhiwa Cheti cha Ndoa ya Kimila. Makubaliano haya yanafanyika kwa hiari, kwa ridhaa ya familia zote mbili, na kwa kufuata misingi ya heshima, mila, desturi na maelewano mema kati ya familia zetu.",D.d4L,"MALIPO YALIYOSALIA",!1,"Mambo ya Cash na Mali (Yaliyosalia / Yatakayokamilishwa):",18,r,"HATI YA MAKUBALIANO YA MALIPO YA AWAMU YA MAHARI",24,0.85,0.048,2),n,D.qr,"","","Hati ya Makubaliano ya Malipo ya Awamu",D.dh)
n=C.cE()
o=A.a.i(r)
if(o.length===0)o=null
e.$1(C.BW(null,null,null,null,D.on,5,!1,"hati_malipo_awamu",null,null,null,null,n,null,!1,o,"Hati ya Makubaliano ya Malipo ya Awamu",null,null,B.a([p],x.g),"hati_malipo_awamu_"+q.a,null,!1,null))
case 1:return B.h(u,v)}})
return B.i($async$agK,v)},
xH:function xH(d,e){this.a=d
this.b=e},
jq:function jq(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.z=k},
fDH:function fDH(){},
fDD:function fDD(d){this.a=d},
fDF:function fDF(d){this.a=d},
fDG:function fDG(){},
fDE:function fDE(d){this.a=d},
fPs:function fPs(d,e){this.a=d
this.b=e},
adq:function adq(d,e,f){this.c=d
this.d=e
this.a=f},
e00:function e00(d,e,f){this.a=d
this.b=e
this.c=f},
e0_:function e0_(d,e){this.a=d
this.b=e},
e_Z:function e_Z(d,e){this.a=d
this.b=e},
acP:function acP(d,e,f){this.c=d
this.d=e
this.a=f},
fxw:function fxw(){},
fxx:function fxx(d){this.a=d},
fxu:function fxu(d){this.a=d},
fxv:function fxv(d){this.a=d},
fxA:function fxA(){},
fxB:function fxB(d){this.a=d},
fxy:function fxy(d){this.a=d},
fxz:function fxz(d){this.a=d},
fxE:function fxE(){},
fxF:function fxF(d){this.a=d},
fxC:function fxC(d){this.a=d},
fxD:function fxD(d){this.a=d},
KO(d,e,f,g,h,i,j,k,l,m){var w=C.cE()
return C.er(e,!1,f,A.aF,j.length===0?"marriage_locked":"marriage_locked_"+j,4280640491,g,A.bp,h,"",i,w,null,"","",0,!1,"",0,D.bg,4280172719,2,d,0,0,"",D.cl,D.cQ,k,l,m)},
CW(d,e,f,g,h,i,j,k,l){var w=C.cE()
return C.er(A.bi,!1,4279310375,A.aF,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bp,A.a7,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.cl,D.f8,j,k,l)},
hls(d,e,f){return C.CW(0,0.002,D.fy,4293056712,0.8,"ul_"+B.w(d)+"_"+B.w(e),f,d,e+0.022)},
bzU(d,e,f,g,h){return B.a([C.CW(4294967288,0.032,D.bg,4291404327,1.15,"pill_"+d,g,f,e),C.KO(d,A.L,h,11,A.u,0.024,"pill_t_"+d,g,f,e+0.005)],x.u)},
h0O(d,e,f,g,h){var w=d+f/2,v=e+0.006,u=f*0.4,t=B.w(e)
return B.a([C.CW(0,0.002,D.fy,g,1,"orn_l_"+t,u,d,v),C.CW(h,0.016,D.lg,g,0.9,"orn_c_"+t,0.024,w-0.012,e),C.CW(0,0.002,D.fy,g,1,"orn_r_"+t,u,w+0.018,v)],x.u)},
a1r(d,e,f,g,h,i,j,k){var w=d.length*i*0.0027+0.006,v=C.KO(d,A.bi,j,i,A.O,0.022,"ll_"+e,w,f,g),u=f+w,t=h-w,s=C.cE()
return B.a([v,C.er(A.L,!1,j,A.aF,"marriage_field_"+e+":"+A.k.ac(t,3),4280640491,i,A.cE,A.O,"",0.02,s,null,"","",0,!1,"",0,D.bg,4280172719,2,k,0,0,"",D.cl,D.cQ,t,u,g-0.002),C.hls(u,g+0.018,t)],x.u)},
hlt(d,e,f,g,h,i){var w=4291404327,v=f+0.002
return B.a([C.CW(h,0.028,D.bg,h,0,"chv_"+d,g,e,f),C.CW(w,0.024,D.lg,w,0,"chv_l_"+d,0.024,e-0.008,v),C.CW(w,0.024,D.lg,w,0,"chv_r_"+d,0.024,e+g-0.016,v),C.KO(d,A.L,i,9.5,A.u,0.02,"chv_t_"+d,g,e,f+0.004)],x.u)},
bzT(d,e,f,g,h){var w=e+0.12,v=g-0.12
return B.a([C.KO("Sahihi:",A.bi,h,10,A.O,0.02,"is_"+d,0.12,e,f),C.er(A.bi,!1,4279310375,A.aF,"marriage_sign_"+d,0,24,A.bp,A.a7,"",0.032,C.cE(),null,"","",0,!1,"",0,D.bg,0,2,"",0,0,"",D.cl,D.f8,v,w,f-0.006),C.hls(w,f+0.016,v)],x.u)},
h3X(d){var w,v
for(w=0;w<19;++w){v=D.Ri[w]
if(v.a===d)return v}return null},
i9I(d){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=d.c
if(A.a.a0(k,"hati_kuhowa_")){w=C.ah7(A.a.b4(k,12),l)
v=w==null?l:w.d}else if(A.a.a0(k,"hati_kuhoweya_")){w=C.ah7(A.a.b4(k,14),l)
v=w==null?l:w.d}else if(A.a.a0(k,"hati_malipo_awamu_")){u=A.a.b4(k,18)
w=C.ah7(u,D.R3)
v=w==null?l:w.d
if(v==null){w=C.ah7(u,l)
v=w==null?l:w.d}}else if(A.a.a0(k,"marriage_")){w=C.h3X(A.a.b4(k,9))
v=w==null?l:w.d}else v=l
if(v==null)return!1
$.hmh.a8(0)
$.hmu.a8(0)
t=C.fFn(v)
for(w=d.r,s=w.length,r=!1,q=0;q<w.length;w.length===s||(0,B.M)(w),++q)for(p=w[q].z,o=p.length,n=0;n<o;++n){m=p[n]
if(m.db==="marriage_locked_bg"&&m.at!==t){m.at=t
r=!0}}return r},
h52(d){var w=0,v=B.j(x.T),u
var $async$h52=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:u=B.bT(A.K,null,new C.fQV(),d,!0,!0,!0,null,!1,!1,x.N)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$h52,v)},
xK:function xK(d,e){this.a=d
this.b=e},
nN:function nN(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bjy:function bjy(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
fQV:function fQV(){},
adt:function adt(d){this.a=d},
ehO:function ehO(d,e){this.a=d
this.b=e},
ehN:function ehN(d){this.a=d},
ehM:function ehM(d,e){this.a=d
this.b=e},
af8:function af8(d,e,f){this.c=d
this.d=e
this.a=f},
h3W(d){return $.hmu.c4(0,d,new C.fFp(d))},
fFn(d){return $.hmh.c4(0,d,new C.fFo(d))},
fB(d){return B.fV7(d>>>16&255,d>>>8&255,d&255,255)},
hZE(d){var w,v,u=4292128567,t=4285213214,s=4294967035,r=4290283019,q=null,p=4279378237,o=4291404327,n=4294966774,m=4294702831,l=4285218602,k=4291394365,j=4294967295,i=4294964964,h=4294965484,g=4280241466,f=4287326484,e=4294966518
switch(d.a){case 0:return C.hnB(4294570461,4293910718,4284234270,u)
case 1:return C.hnB(4294635750,4293975240,t,4292912216)
case 2:w=C.ffB(s,4294505966,r)
C.bzE(w,14,16,p)
C.kA(w,8,9,464,836,u,1.2)
C.CS(w,2,2,1,1,u,10)
C.CS(w,478,2,-1,1,u,10)
C.CS(w,2,852,1,-1,u,10)
C.CS(w,478,852,-1,-1,u,10)
return w
case 3:return C.ffB(4294966515,4294373082,4289102906)
case 4:return C.hUj(C.ffB(4294376440,4293653998,4290287194))
case 5:w=C.ffB(4294965238,4294437098,4288444980)
C.bzE(w,14,16,4283043359)
C.kA(w,6,7,468,840,u,1)
C.kA(w,9,10,462,834,o,0.7)
return w
case 6:v=B.hv(q,q,A.cb,0,A.e7,854,q,0,3,q,A.cb,480,!1)
C.yD(v,n,4294175448)
C.rZ(v,n)
C.kA(v,24,24,432,806,4286209070,1)
C.a1e(v,12,12,468,12,o,3,20)
C.a1e(v,12,842,468,842,o,3,20)
C.a1e(v,12,12,12,842,o,3,20)
C.a1e(v,468,12,468,842,o,3,20)
return v
case 7:return C.hSm(4294440434,4293518297,4280228630,r)
case 8:v=B.hv(q,q,A.cb,0,A.e7,854,q,0,3,q,A.cb,480,!1)
C.yD(v,m,4293911504)
C.rZ(v,m)
C.kA(v,28,28,424,798,l,1)
C.foN(v,28,28,l,k)
C.foN(v,452,28,l,k)
C.foN(v,28,826,l,k)
C.foN(v,452,826,l,k)
return v
case 9:v=B.hv(q,q,A.cb,0,A.e7,854,q,0,3,q,A.cb,480,!1)
C.yD(v,j,4294111986)
C.rZ(v,j)
C.kA(v,18,18,444,818,4292401368,0.7)
B.iM(v,!0,C.fB(p),0,13,0,853)
return v
case 10:return C.hWj(i,4294173372)
case 11:return C.hXq(4294439140,4293449662)
case 12:return C.hSe(h,4294239432)
case 13:return C.hWS(4294244340,4293193448)
case 14:return C.i0e(4294505710,4293780694)
case 15:return C.fex(4294966259,4294439138,o,p,q)
case 16:return C.fex(4294966776,4294178544,o,g,g)
case 17:return C.fex(4294965493,4294504170,o,4286200650,q)
case 18:return C.fex(4294966519,4294373862,o,p,p)
case 19:return C.hVp()
case 20:return C.hVq()
case 21:v=B.hv(q,q,A.cb,0,A.e7,854,q,0,3,q,A.cb,480,!1)
C.yD(v,h,4293976768)
C.rZ(v,h)
C.bzE(v,14,16,p)
B.iM(v,!0,C.fB(u),4,475,4,9)
B.iM(v,!0,C.fB(u),4,475,844,849)
B.iM(v,!0,C.fB(u),4,9,4,849)
B.iM(v,!0,C.fB(u),470,475,4,849)
C.a1e(v,10,12,470,12,u,2,16)
C.a1e(v,10,842,470,842,u,2,16)
C.a1e(v,10,12,10,842,u,2,18)
C.a1e(v,470,12,470,842,u,2,18)
C.CS(v,2,2,1,1,t,10)
C.CS(v,478,2,-1,1,t,10)
C.CS(v,2,852,1,-1,t,10)
C.CS(v,478,852,-1,-1,t,10)
C.kA(v,14,16,452,822,u,1.8)
return v
case 22:v=B.hv(q,q,A.cb,0,A.e7,854,q,0,3,q,A.cb,480,!1)
C.yD(v,s,4294438872)
C.rZ(v,s)
C.kA(v,14,16,452,822,o,2.2)
C.kA(v,22,24,436,806,o,1)
C.h28(v,!1,!1,o,p,p,36,14,16)
C.kO(v,240,20,7,o,!0)
C.kO(v,240,834,7,o,!0)
C.kO(v,18,427,7,o,!0)
C.kO(v,462,427,7,o,!0)
return v
case 23:v=B.hv(q,q,A.cb,0,A.e7,854,q,0,3,q,A.cb,480,!1)
C.yD(v,i,4293910712)
C.rZ(v,i)
B.iM(v,!0,C.fB(u),0,479,0,20)
B.iM(v,!0,C.fB(u),0,479,834,853)
B.iM(v,!0,C.fB(u),0,20,0,853)
B.iM(v,!0,C.fB(u),460,479,0,853)
B.iM(v,!0,C.fB(f),5,474,5,9)
B.iM(v,!0,C.fB(f),5,474,844,848)
B.iM(v,!0,C.fB(f),5,9,5,848)
B.iM(v,!0,C.fB(f),470,474,5,848)
C.kA(v,28,28,424,798,f,1.4)
return v
case 24:v=B.hv(q,q,A.cb,0,A.e7,854,q,0,3,q,A.cb,480,!1)
C.yD(v,e,4294174404)
C.rZ(v,e)
C.bzE(v,14,16,p)
B.iM(v,!0,C.fB(u),3,476,3,8)
B.iM(v,!0,C.fB(u),3,476,845,850)
B.iM(v,!0,C.fB(u),3,8,3,850)
B.iM(v,!0,C.fB(u),471,476,3,850)
C.kA(v,9,10,462,834,t,1)
C.kA(v,14,16,452,822,u,1.8)
C.kO(v,240,8,4,u,!0)
C.kO(v,240,846,4,u,!0)
C.kO(v,8,427,4,u,!0)
C.kO(v,472,427,4,u,!0)
C.kO(v,8,8,3,t,!0)
C.kO(v,472,8,3,t,!0)
C.kO(v,8,846,3,t,!0)
C.kO(v,472,846,3,t,!0)
return v}},
yD(d,e,f){var w,v,u,t,s,r=null,q=e>>>16&255,p=f>>>16&255,o=e>>>8&255,n=f>>>8&255,m=e&255,l=f&255,k=0
for(;;){w=d.a
v=w==null
u=v?r:w.b
if(!(k<(u==null?0:u)))break
w=v?r:w.b
t=k/((w==null?0:w)-1)
w=1-t
v=A.o.E(A.k.V(q*w+p*t),0,255)
u=A.o.E(A.k.V(o*w+n*t),0,255)
w=A.o.E(A.k.V(m*w+l*t),0,255)
s=new Uint8Array(3)
s[0]=v
s[1]=u
s[2]=w
w=d.a
w=w==null?r:w.a
if(w==null)w=0
B.kQ(d,!1,A.dg,new B.Sm(s),r,A.cX,1,0,w-1,k,k);++k}},
rZ(d,e){var w,v,u,t,s,r,q,p,o=null,n=new B.eb()
n.d5(e)
for(w=0;w<900;++w){v=d.a
v=v==null?o:v.a
u=n.au(v==null?0:v)
v=d.a
v=v==null?o:v.b
t=n.au(v==null?0:v)
v=d.a
s=v==null?o:v.dW(u,t,o)
if(s==null)s=new B.iH()
v=A.o.E(A.k.O(s.gb7(s))-3,0,255)
r=A.o.E(A.k.O(s.gbf())-3,0,255)
q=A.o.E(A.k.O(s.gbd(s))-2,0,255)
p=d.a
if(p!=null)p.jV(u,t,v,r,q,255)}},
kA(d,e,f,g,h,i,j){var w,v=null,u=C.fB(i),t=e+g
B.kQ(d,!0,A.dg,u,v,A.cX,j,e,t,f,f)
w=f+h
B.kQ(d,!0,A.dg,u,v,A.cX,j,e,t,w,w)
B.kQ(d,!0,A.dg,u,v,A.cX,j,e,e,f,w)
B.kQ(d,!0,A.dg,u,v,A.cX,j,t,t,f,w)},
CS(d,e,f,g,h,i,j){var w,v,u=null,t=A.o.E(A.k.V(j*0.72),8,j-2)
B.kQ(d,!0,A.dg,C.fB(i),u,A.cX,2,e,e+g*j,f,f)
B.kQ(d,!0,A.dg,C.fB(i),u,A.cX,2,e,e,f,f+h*j)
w=e+g*3
v=f+h*3
B.kQ(d,!0,A.dg,C.fB(i),u,A.cX,1,w,e+g*t,v,v)
B.kQ(d,!0,A.dg,C.fB(i),u,A.cX,1,w,w,v,f+h*t)},
hnB(d,e,f,g){var w=null,v=B.hv(w,w,A.cb,0,A.e7,854,w,0,3,w,A.cb,480,!1)
C.yD(v,d,e)
C.rZ(v,d)
B.iM(v,!0,C.fB(f),0,479,0,28)
B.iM(v,!0,C.fB(f),0,479,826,853)
B.iM(v,!0,C.fB(f),0,28,0,853)
B.iM(v,!0,C.fB(f),452,479,0,853)
C.kA(v,5,5,470,844,g,1.1)
C.kA(v,28,28,424,798,g,1.6)
C.CS(v,2,2,1,1,g,11)
C.CS(v,478,2,-1,1,g,11)
C.CS(v,2,852,1,-1,g,11)
C.CS(v,478,852,-1,-1,g,11)
return v},
ffB(d,e,f){var w=null,v=B.hv(w,w,A.cb,0,A.e7,854,w,0,3,w,A.cb,480,!1)
C.yD(v,d,e)
C.rZ(v,d)
C.kA(v,14,16,452,822,f,1.6)
C.kA(v,20,22,440,810,f,0.8)
return v},
bzE(d,e,f,g){var w,v=C.fB(g)
B.iM(d,!0,v,0,479,0,f-1)
w=854-f
B.iM(d,!0,v,0,479,w,853);--w
B.iM(d,!0,v,0,e-1,f,w)
B.iM(d,!0,v,480-e,479,f,w)},
hUj(d){var w,v,u=4291404327
C.bzE(d,14,16,4279122734)
for(w=10;w<470;w+=14){C.kO(d,w,8,3,u,!0)
C.kO(d,w,846,3,u,!0)}for(v=18;v<836;v+=16){C.kO(d,7,v,3,u,!0)
C.kO(d,473,v,3,u,!0)}return d},
frX(d,e,f,g,h,i,j,k,l,m,n){var w,v,u,t=x.J,s=B.a([new B.ji(e,f),new B.ji(e+g*n,f),new B.ji(e,f+h*n)],t)
B.a2_(d,C.fB(m),s)
w=A.o.E(A.k.V(n*0.17),5,8)
v=A.k.V(n*0.78)
s=e+g*w
u=f+h*w
t=B.a([new B.ji(s,u),new B.ji(e+g*v,u),new B.ji(s,f+h*v)],t)
B.a2_(d,C.fB(k),t)
t=A.k.V(n*0.39)
C.kO(d,e+g*t,f+h*t,6,l,!0)
if(i){t=n-7
C.kO(d,e+g*t,f+h*3,4,k,!0)
C.kO(d,e+g*3,f+h*t,4,k,!0)}if(j){t=n-4
C.kO(d,e+g*t,f,5,k,!0)
C.kO(d,e,f+h*t,5,k,!0)}},
h28(d,e,f,g,h,i,j,k,l){var w,v
C.frX(d,k,l,1,1,e,f,g,h,i,j)
w=480-k
C.frX(d,w,l,-1,1,e,f,g,h,i,j)
v=854-l
C.frX(d,k,v,1,-1,e,f,g,h,i,j)
C.frX(d,w,v,-1,-1,e,f,g,h,i,j)},
a1e(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p,o=g-e,n=h-f,m=Math.max(1,A.k.V(Math.sqrt(o*o+n*n)/k))
for(w=i>>>16&255,v=i>>>8&255,u=i&255,t=0;t<=m;++t){s=t/m
r=A.k.V(e+o*s)
q=A.k.V(f+n*s)
p=new Uint8Array(4)
p[0]=w
p[1]=v
p[2]=u
p[3]=255
B.l8(d,!0,A.dg,new B.r9(p),null,A.cX,j,r,q)}},
fqV(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o
for(w=i>>>16&255,v=i>>>8&255,u=i&255,t=0;t<3;++t){s=34+t*12
r=26-t*6
q=e+g*s
p=f+h*s
o=new Uint8Array(4)
o[0]=w
o[1]=v
o[2]=u
o[3]=255
B.kQ(d,!0,A.dg,new B.r9(o),null,A.cX,1.4,q,q+g*r,p,p)
o=new Uint8Array(4)
o[0]=w
o[1]=v
o[2]=u
o[3]=255
B.kQ(d,!0,A.dg,new B.r9(o),null,A.cX,1.4,q,q,p,p+h*r)}},
hSm(d,e,f,g){var w,v,u,t,s,r,q,p,o=null,n=B.hv(o,o,A.cb,0,A.e7,854,o,0,3,o,A.cb,480,!1)
C.yD(n,d,e)
C.rZ(n,d)
C.kA(n,20,20,440,814,f,1.2)
C.fqV(n,0,0,1,1,g)
C.fqV(n,480,0,-1,1,g)
C.fqV(n,0,854,1,-1,g)
C.fqV(n,480,854,-1,-1,g)
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
B.kQ(n,!0,A.dg,new B.r9(p),o,A.cX,1.2,240,r,60,q)}return n},
foN(d,e,f,g,h){var w
C.fvg(d,!0,C.fB(g),13,e,f)
C.fvg(d,!0,C.fB(g),9,e,f)
w=B.a([new B.ji(e,f-4),new B.ji(e+4,f),new B.ji(e,f+4),new B.ji(e-4,f)],x.J)
B.a2_(d,C.fB(h),w)},
kO(d,e,f,g,h,i){var w=null,v=f-g,u=e+g,t=f+g,s=e-g,r=B.a([new B.ji(e,v),new B.ji(u,f),new B.ji(e,t),new B.ji(s,f)],x.J)
if(i){B.a2_(d,C.fB(h),r)
return}B.kQ(d,!0,A.dg,C.fB(h),w,A.cX,1,e,u,v,f)
B.kQ(d,!0,A.dg,C.fB(h),w,A.cX,1,u,e,f,t)
B.kQ(d,!0,A.dg,C.fB(h),w,A.cX,1,e,s,t,f)
B.kQ(d,!0,A.dg,C.fB(h),w,A.cX,1,s,e,f,v)},
few(d,e,f,g,h,i,j){var w,v=B.a([new B.ji(e,f),new B.ji(e+g*28,f),new B.ji(e,f+h*28)],x.J)
B.a2_(d,C.fB(i),v)
v=e+g*14
w=f+h*14
C.kO(d,v,w,6,j,!0)
C.kO(d,v,w,3,i,!0)},
fex(d,e,f,g,h){var w=null,v=B.hv(w,w,A.cb,0,A.e7,854,w,0,3,w,A.cb,480,!1)
C.yD(v,d,e)
C.rZ(v,d)
C.kA(v,18,18,444,818,f,2)
C.kA(v,26,26,428,802,f,0.9)
if(h!=null)B.iM(v,!0,C.fB(h),28,451,28,34)
C.few(v,18,18,1,1,g,f)
C.few(v,462,18,-1,1,g,f)
C.few(v,18,836,1,-1,g,f)
C.few(v,462,836,-1,-1,g,f)
return v},
hVp(){var w,v=null,u=4294966259,t=4292128567,s=4287326484,r=B.hv(v,v,A.cb,0,A.e7,854,v,0,3,v,A.cb,480,!1)
C.yD(r,u,4294240980)
C.rZ(r,u)
C.kA(r,10,12,460,830,t,3.2)
C.kA(r,18,20,444,814,s,1.2)
C.kA(r,24,26,432,802,t,1.8)
C.h28(r,!0,!1,t,s,4279378237,38,10,12)
for(w=56;w<424;w+=18){C.kO(r,w,16,3,t,!0)
C.kO(r,w,838,3,t,!0)}for(w=56;w<798;w+=22){C.kO(r,16,w,3,t,!0)
C.kO(r,464,w,3,t,!0)}return r},
hVq(){var w,v,u,t=null,s=4294966776,r=4291404327,q=4282000405,p=B.hv(t,t,A.cb,0,A.e7,854,t,0,3,t,A.cb,480,!1)
C.yD(p,s,4294373080)
C.rZ(p,s)
C.kA(p,16,18,448,818,r,2.4)
C.kA(p,24,26,432,802,4286209044,1)
w=new C.fgU(p)
for(v=40;v<440;v+=16){w.$4(v,22,1,1)
w.$4(v,832,1,1)}for(u=44;u<810;u+=18){w.$4(22,u,1,1)
w.$4(458,u,-1,1)}C.h28(p,!1,!0,r,q,q,34,16,18)
return p},
bAk(d,e,f,g,h,i){B.iM(d,!0,C.fB(i),e,e+g,f,f+h)},
bBa(d,e,f,g,h,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
for(w=e+g,v=a0>>>16&255,u=a1>>>16&255,t=a0>>>8&255,s=a1>>>8&255,r=a0&255,q=a1&255,p=h-1,o=h<=1,n=0;n<h;++n){m=o?0:n/p
l=1-m
k=A.o.E(A.k.V(v*l+u*m),0,255)
j=A.o.E(A.k.V(t*l+s*m),0,255)
l=A.o.E(A.k.V(r*l+q*m),0,255)
i=new Uint8Array(3)
i[0]=k
i[1]=j
i[2]=l
l=f+n
B.kQ(d,!1,A.dg,new B.Sm(i),null,A.cX,1,e,w,l,l)}},
hWi(d,e,f,g,h,i){var w,v,u,t,s,r,q
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
B.kQ(d,!1,A.dg,new B.r9(r),null,A.cX,1,e,s,t,t);++v}return}w=f+g-1
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
B.kQ(d,!1,A.dg,new B.r9(r),null,A.cX,1,t,t,f,s);++q}},
hWj(d,e){var w,v,u=null,t=B.hv(u,u,A.cb,0,A.e7,854,u,0,3,u,A.cb,480,!1)
for(w=0;w<854;w+=30)for(v=0;v<480;v+=30)C.hWi(t,v,w,30,D.cYl,(A.o.an(v,30)+A.o.an(w,30)&1)===0)
C.bAk(t,44,44,392,766,d)
C.bBa(t,44,44,392,766,d,e)
C.rZ(t,d)
C.kA(t,44,44,392,766,4292128567,2.2)
C.kA(t,50,50,380,754,4279898632,0.8)
return t},
hXp(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=null
switch(A.o.F(g,4)){case 0:C.kO(d,e,f,7,h,!0)
C.kO(d,e,f,3,h,!1)
break
case 1:w=e-7
v=f-7
u=e+7
t=f+7
B.kQ(d,!0,A.dg,C.fB(h),o,A.cX,1.6,w,u,v,t)
B.kQ(d,!0,A.dg,C.fB(h),o,A.cX,1.6,u,w,v,t)
break
case 2:for(w=e-8,v=e+8,u=h>>>16&255,t=h>>>8&255,s=h&255,r=-2;r<=2;++r){q=f+r*3
p=new Uint8Array(4)
p[0]=u
p[1]=t
p[2]=s
p[3]=255
B.kQ(d,!0,A.dg,new B.r9(p),o,A.cX,1.2,w,v,q,q)}break
default:B.kQ(d,!0,A.dg,C.fB(h),o,A.cX,1.5,e-8,e+8,f,f)
B.kQ(d,!0,A.dg,C.fB(h),o,A.cX,1.5,e,e,f-8,f+8)
B.l8(d,!0,A.dg,C.fB(h),o,A.cX,2,e,f)}},
hXq(d,e){var w,v,u,t,s=null,r=B.hv(s,s,A.cb,0,A.e7,854,s,0,3,s,A.cb,480,!1)
B.iM(r,!0,C.fB(4284103196),0,479,0,853)
for(w=0,v=18;v<854;v+=32)for(u=18;u<480;u+=32,w=t){t=w+1
C.hXp(r,u,v,w,4292391514)}C.bAk(r,46,46,388,762,d)
C.bBa(r,46,46,388,762,d,e)
C.rZ(r,d)
C.kA(r,46,46,388,762,4291404327,1.8)
return r},
hiX(d,e,f,g){C.fvg(d,!0,C.fB(g),16,e,f)
C.fvg(d,!0,C.fB(g),11,e,f)
C.kO(d,e,f,6,g,!0)
B.kQ(d,!0,A.dg,C.fB(g),null,A.cX,1.3,e-14,e+14,f,f)
B.kQ(d,!0,A.dg,C.fB(g),null,A.cX,1.3,e,e,f-14,f+14)},
hSe(d,e){var w,v=null,u=4283051028,t=4292128567,s=B.hv(v,v,A.cb,0,A.e7,854,v,0,3,v,A.cb,480,!1)
B.iM(s,!0,C.fB(4280948752),0,479,0,853)
B.iM(s,!0,C.fB(u),0,479,0,78)
B.iM(s,!0,C.fB(u),0,479,776,853)
for(w=28;w<460;w+=44){C.hiX(s,w,39,t)
C.hiX(s,w,815,t)}C.bAk(s,38,92,404,670,d)
C.bBa(s,38,92,404,670,d,e)
C.rZ(s,d)
C.kA(s,38,92,404,670,t,1.8)
C.kA(s,45,99,390,656,4287322667,0.8)
return s},
hWR(d,e,f,g){var w,v,u,t,s,r,q,p,o
for(w=f-4,v=x.J,u=g>>>16&255,t=g>>>8&255,s=g&255,r=-2;r<=2;++r){q=e+r*9
p=B.a([new B.ji(e,f),new B.ji(q-5,w),new B.ji(q,f-(18-Math.abs(r)*3)),new B.ji(q+5,w)],v)
o=new Uint8Array(4)
o[0]=u
o[1]=t
o[2]=s
o[3]=255
B.a2_(d,new B.r9(o),p)}B.l8(d,!0,A.dg,C.fB(4292128567),null,A.cX,3,e,f)},
hWS(d,e){var w,v,u,t,s=null,r=4279196764,q=B.hv(s,s,A.cb,0,A.e7,854,s,0,3,s,A.cb,480,!1)
C.yD(q,4278931279,4292330394)
for(w=8;w<=34;w+=4){v=new Uint8Array(4)
v[0]=8
v[1]=56
v[2]=56
v[3]=255
B.kQ(q,!0,A.dg,new B.r9(v),s,A.cX,1.1,w,w,0,853)
v=479-w
u=new Uint8Array(4)
u[0]=8
u[1]=56
u[2]=56
u[3]=255
B.kQ(q,!0,A.dg,new B.r9(u),s,A.cX,1.1,v,v,0,853)}B.iM(q,!0,C.fB(r),0,479,0,70)
B.iM(q,!0,C.fB(r),0,479,798,853)
for(t=0;t<5;++t)C.hWR(q,70+t*85,48,4292128567)
C.bAk(q,48,78,384,712,d)
C.bBa(q,48,78,384,712,d,e)
C.rZ(q,d)
C.kA(q,48,78,384,712,4291404327,1.6)
return q},
i0e(d,e){var w,v,u,t=null,s=4279970378,r=B.hv(t,t,A.cb,0,A.e7,854,t,0,3,t,A.cb,480,!1)
B.iM(r,!0,C.fB(s),0,479,0,853)
for(w=10;w<854;w+=18)for(v=10;v<480;v+=18){C.kO(r,v,w,6,4293449648,!1)
u=new Uint8Array(4)
u[0]=232
u[1]=215
u[2]=176
u[3]=255
B.l8(r,!0,A.dg,new B.r9(u),t,A.cX,1,v,w)}C.bAk(r,40,40,400,774,d)
C.bBa(r,40,40,400,774,d,e)
C.rZ(r,d)
C.kA(r,40,40,400,774,4291058750,2)
C.kA(r,48,48,384,758,s,0.8)
return r},
kX:function kX(d,e){this.a=d
this.b=e},
fFp:function fFp(d){this.a=d},
fFo:function fFo(d){this.a=d},
fgU:function fgU(d){this.a=d},
fG2(d){var w,v=d.a
A:{if("gazette"===v){w="The NGMY Gazette"
break A}if("chronicle"===v){w="The NGMY Chronicle"
break A}if("times"===v){w="The NGMY Times"
break A}if("daily"===v){w="The NGMY Daily"
break A}if("tabloid"===v){w="The Big NGMY"
break A}if("modern"===v){w="NGMY Digest"
break A}if("midnight"===v){w="The Midnight NGMY"
break A}w="The NGMY Herald"
break A}return w},
hXj(d){var w=d.length
if(w>3&&d[0]===137&&d[1]===80)return"image/png"
if(w>11&&d[8]===87&&d[9]===69)return"image/webp"
return"image/jpeg"},
h0H(d){var w,v,u,t=null,s=A.a.cD(d,"{"),r=A.a.oL(d,"}")
if(s<0||r<=s)return t
try{w=A.T.aN(0,Ai.ah3(A.a.ap(d,s,r+1)),t)
v=x.f.b(w)?B.a2(w,x.N,x.z):t
return v}catch(u){return t}},
afx(d,e){var w=0,v=B.j(x.N),u,t,s,r,q,p,o,n
var $async$afx=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(B.vr(null,""),$async$afx)
case 3:n=g
if(A.a.i(n).length===0)throw B.W("AI is not available right now. Please try again later.")
t=B.n9(n)
if(e==null)s=A.hK
else{r=C.hXj(e)
s=B.a([new B.a0d(A.cI.gcs().aM(e),r)],x.aD)}q=null,p=0
case 4:if(!(p<2)){w=6
break}w=7
return B.b(B.r0(t,d,s,"news",E.FD),$async$afx)
case 7:o=g
r=o.b
if(r!=null&&A.a.i(r).length!==0){u=r
w=1
break}q=o.a
case 5:++p
w=4
break
case 6:throw B.W(q!=null&&B.Le(q)?"No internet connection. Try again when you are online.":"The AI could not do that just now. Try again.")
case 1:return B.h(u,v)}})
return B.i($async$afx,v)},
bCM(d){return C.i9o(d)},
i9o(d){var w=0,v=B.j(x.b6),u,t=2,s=[],r,q,p,o,n,m
var $async$bCM=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
r='You are a professional Swahili newspaper editor and journalist: a native speaker from Tanzania or Kenya whose writing every Swahili reader finds natural, warm and correct.\nThe newspaper page below was written or translated by a machine, so it may sound stiff, foreign or word-for-word. Rewrite EVERY field so it reads as if a skilled native Swahili journalist wrote it first: natural, clear, correct and professional. Fix wrong grammar (noun classes, verb agreement, tenses), odd or invented words and any English sentence structure. Keep every fact, name and number and do not add facts. Keep the same fields and the same number of paragraphs. Write people\'s names with normal capitals, except KB PABLO QR.\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n\nPage: '+A.T.ao(d.ag(),null)+'\nReply with JSON only, with exactly the same fields: {"paper":"newspaper name","category":"ONE of COMMUNITY, TECHNOLOGY, BUSINESS, EDUCATION, WORLD NEWS, FEATURE","headline":"...","subhead":"...","byline":"By ...","caption":"one sentence about the picture","body":["paragraph 1","paragraph 2","paragraph 3","paragraph 4"],"pullQuote":"a short line from the story","sidebarTitle":"Did you know?","sidebarText":"two short sentences"}\n'
w=7
return B.b(C.afx(r,null),$async$bCM)
case 7:q=f
p=C.h0H(q)
if(p==null){u=d
w=1
break}o=d.aD0(p)
if(o.r.length===0||A.d.aG(o.r," ").length<A.d.aG(d.r," ").length*0.5){u=d
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
return B.i($async$bCM,v)},
hmS(d){var w,v=F.h3d(d)
v=B.aL(v,"book","newspaper")
if(F.a2i(d)!=="sw"){w=B.af("swahili|kiswahili",!1,!1,!1,!1)
w=w.b.test(d)}else w=!0
w=w?'SWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n':""
return"- Write like a real newspaper: a strong headline (max 12 words), a subhead (max 25 words), a byline, then 4 or 5 paragraphs, about 330 to 400 words in all. Plain text only: no markdown, no emojis, no lists.\n- Use ONLY the facts in the knowledge above. Never invent numbers, prices, dates, awards, places or quotes. Do not put made-up words in anyone's mouth.\n- KB PABLO QR is the Founder, President and CEO of NGMY. Always write his name in capital letters.\n- Never mention secret or admin details, passwords or the price list.\n- STYLE: write like an experienced human newspaper journalist in the style of a quality wire service (Associated Press, Reuters): polished, precise, natural and professional. Open with the most important fact. Use the active voice, concrete nouns and strong verbs. Mix short and longer sentences. Plain, grown-up words.\n- NEVER sound like an AI. Do not use: delve, tapestry, testament, beacon, realm, landscape, journey, game-changer, groundbreaking, revolutionize, unlock, empower, seamless, vibrant, bustling, in today's fast-paced world, it is worth noting, not just X but Y, whether you are X or Y. No exclamation marks, no rhetorical questions, no lists of three adjectives, no filler, no hype, no dashes for drama. Every sentence must say something real.\n- Check spelling, grammar and punctuation. Names are written with normal capitals, except KB PABLO QR.\n"+v+w},
fK0(d,e,f,g){return C.ibg(d,e,f,g)},
ibg(d,e,f,g){var w=0,v=B.j(x.b6),u,t,s,r,q,p,o,n,m
var $async$fK0=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:o=C.fG2(g)
n=A.a.i(f)
if(n.length===0)n="Choose the most interesting true story about NGMY from what you know, and write it. Vary it: it can be about the app, the Civic Registry, the Advisors, the studios, or the CEO."
t=C.hqq()
s=e==null?"There is no picture yet: write the caption as a short line about the story.":"A PICTURE IS ATTACHED. Look at it. Mention what is really visible in the caption and weave it into the story. Do not say who the people in it are unless the owner told you."
m=C
w=3
return B.b(C.afx('You are the editor-in-chief of a newspaper called "'+o+'". Write its front-page story in the voice of '+g.at+".\n"+t+'\n\nWHAT THE OWNER ASKED FOR: """'+n+'"""\n'+s+"\nRules:\n"+C.hmS(n)+'\nReply with JSON only, in exactly this shape: {"paper":"newspaper name","category":"ONE of COMMUNITY, TECHNOLOGY, BUSINESS, EDUCATION, WORLD NEWS, FEATURE","headline":"...","subhead":"...","byline":"By ...","caption":"one sentence about the picture","body":["paragraph 1","paragraph 2","paragraph 3","paragraph 4"],"pullQuote":"a short line from the story","sidebarTitle":"Did you know?","sidebarText":"two short sentences"}\n',e),$async$fK0)
case 3:r=m.h0H(i)
if(r==null)throw B.W(y.S)
q=new C.zK(o,"NGMY NEWS","","","By the NGMY Newsroom","",A.X,"","","").aD0(r)
t=q.r
if(t.length===0)throw B.W("The AI did not write a story. Try again.")
s=n+" "+A.d.aG(t," ")
if(F.a2i(s)!=="sw"){p=B.af("swahili|kiswahili",!1,!1,!1,!1)
s=p.b.test(s)}else s=!0
u=s&&F.a2i(A.d.aG(t," "))==="sw"?C.bCM(q):q
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fK0,v)},
bCg(d,e,f,g,h){return C.i6Z(d,e,f,g,h)},
i6Z(d,e,f,g,h){var w=0,v=B.j(x.gX),u,t,s,r,q,p,o,n,m,l,k,j
var $async$bCg=B.e(function(i,a0){if(i===1)return B.f(a0,v)
for(;;)switch(w){case 0:l=B.a([],x.s)
k=e.length
k=k>6?A.d.fP(e,k-6):e
t=k.length
s=0
for(;s<k.length;k.length===t||(0,B.M)(k),++s){r=k[s]
l.push(r.a+": "+r.b)}q=A.d.aG(l,"\n")
l=C.hqq()
k=A.T.ao(d.ag(),null)
t=q.length===0?"":"EARLIER IN THIS CONVERSATION:\n"+q+"\n"
j=C
w=3
return B.b(C.afx('You are the editor-in-chief of the newspaper "'+d.a+'", written in the voice of '+h.at+". The owner is talking to you about the page below. They may ask a question about NGMY or the page (just answer it), or ask you to change, add, shorten, rewrite or fix something (change ONLY that).\n"+l+"\n\nTHE PAGE NOW: "+k+"\n"+t+'\nTHE OWNER SAYS: """'+f+'"""\nRules:\n'+C.hmS(f)+'\n- Keep every part they did not mention exactly as it is. Keep the story about 330 to 400 words unless they ask for another length.\nReply with JSON only: {"message":"one or two friendly sentences: your answer, or what you changed","changes":{ ...only the fields you change, using the same names as the page... }}. For a pure question leave "changes" empty.\n',g),$async$bCg)
case 3:p=j.h0H(a0)
if(p==null)throw B.W(y.S)
o=p.h(0,"changes")
if(x.f.b(o)&&J.cK(o)){n=d.aD0(B.a2(o,x.N,x.z))
m=A.T.ao(n.ag(),null)!==A.T.ao(d.ag(),null)}else{n=d
m=!1}w=m&&F.a2i(A.d.aG(n.r," "))==="sw"?4:5
break
case 4:w=6
return B.b(C.bCM(n),$async$bCg)
case 6:n=a0
case 5:l=p.h(0,"message")
if(l==null)l=m?"Done.":"Okay."
u=new C.a82(A.a.i(B.w(l)),n,m)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bCg,v)},
a82:function a82(d,e,f){this.a=d
this.b=e
this.c=f},
ie4(d,e){return B.a3(d,!1).cg(B.e_(new C.fR5(e),!0,null,x.H))},
fR5:function fR5(d){this.a=d},
W_:function W_(d,e){this.c=d
this.a=e},
aEr:function aEr(d,e,f,g,h,i,j,k){var _=this
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
ekL:function ekL(d){this.a=d},
ekK:function ekK(){},
ekM:function ekM(d){this.a=d},
ekJ:function ekJ(d,e){this.a=d
this.b=e},
ekN:function ekN(){},
ekn:function ekn(d,e){this.a=d
this.b=e},
ekj:function ekj(d,e){this.a=d
this.b=e},
eku:function eku(d){this.a=d},
ekv:function ekv(d,e){this.a=d
this.b=e},
ekw:function ekw(d){this.a=d},
ekp:function ekp(d,e){this.a=d
this.b=e},
ekq:function ekq(d,e){this.a=d
this.b=e},
ekr:function ekr(d,e){this.a=d
this.b=e},
eks:function eks(d){this.a=d},
ekt:function ekt(d){this.a=d},
eko:function eko(d,e){this.a=d
this.b=e},
ekl:function ekl(d){this.a=d},
ekm:function ekm(d){this.a=d},
ekC:function ekC(d){this.a=d},
ekD:function ekD(d){this.a=d},
ekB:function ekB(d){this.a=d},
ekE:function ekE(d,e){this.a=d
this.b=e},
ekA:function ekA(d,e){this.a=d
this.b=e},
ekF:function ekF(d){this.a=d},
ekz:function ekz(d){this.a=d},
ekG:function ekG(d){this.a=d},
eky:function eky(d){this.a=d},
ekH:function ekH(d,e){this.a=d
this.b=e},
ekx:function ekx(d,e){this.a=d
this.b=e},
ekI:function ekI(d){this.a=d},
ekk:function ekk(d,e){this.a=d
this.b=e},
fEZ(){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o
var $async$fEZ=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if($.hkt){w=1
break}r=new C.fF_()
t=4
q=x.s
w=7
return B.b(B.iP(B.a([r.$2("NgmyBlackletter",B.a(["UnifrakturCook-Bold.ttf"],q)),r.$2("NgmyOldStandard",B.a(["OldStandard-Regular.ttf","OldStandard-Bold.ttf","OldStandard-Italic.ttf"],q)),r.$2("NgmyAbril",B.a(["AbrilFatface-Regular.ttf"],q))],x.fG),x.H),$async$fEZ)
case 7:$.hkt=!0
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
return B.i($async$fEZ,v)},
bCD(d){return A.Ht[B.mH(d)-1]+", "+A.pd[B.bJ(d)-1]+" "+B.bV(d)+", "+B.bC(d)},
i_i(d){var w,v,u,t,s
for(w="",v=0;v<13;++v){u=D.do0[v]
t=u.a
s=u.b
while(d>=t){w+=s
d-=t}}return w},
h3C(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j={},i=x.s,h=B.a([],i)
for(w=0;w<d.length;++w){v=A.a.fE(d[w],B.af("[ \\t]+",!0,!1,!1,!1))
A.d.v(h,new B.Z(v,new C.fDh(),B.S(v).k("Z<1>")))
if(w<d.length-1)h.push("\n\n")}u=B.a([],i)
j.a=0
for(i=f.length,t=0;t<f.length;f.length===i||(0,B.M)(f),++t){s={}
v=f[t]
s.a=s.b=null
r=v.a
s.b=r
q=v.b
s.a=q
v=j.a
p=h.length
if(v>=p||r<20||q<20){u.push("")
continue}o=new C.fDj(j,h)
n=new C.fDi(s,o,e)
m=p-v
for(l=0;l<m;){k=A.o.an(l+m+1,2)
if(n.$1(k))l=k
else m=k-1}u.push(l===0?"":J.iZ(o.$1(l)))
j.a+=l}return u},
h0q(d,e){var w=new C.fgu()
return A.d.cL(e,0,new C.fgs(w))>=A.d.cL(d,0,new C.fgt(w))},
hhB(d){var w,v,u=new B.aI($.V().r,A.ai,null,null,B.a([],x.v))
u.D(new B.b0(46,0))
w=d.a
u.D(new B.ap(w,0))
v=d.b
u.D(new B.ap(w,v-46))
u.D(new B.ap(w-46,v))
u.D(new B.ap(0,v))
u.D(new B.ap(0,46))
u.D(new B.bv())
return u},
zK:function zK(d,e,f,g,h,i,j,k,l,m){var _=this
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
cfA:function cfA(d){this.a=d},
cfy:function cfy(){},
cfz:function cfz(){},
tr:function tr(d,e){this.a=d
this.b=e},
BI:function BI(d,e){this.a=d
this.b=e},
lo:function lo(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var _=this
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
fF_:function fF_(){},
fDh:function fDh(){},
fDj:function fDj(d,e){this.a=d
this.b=e},
fDi:function fDi(d,e,f){this.a=d
this.b=e
this.c=f},
fgu:function fgu(){},
fgv:function fgv(){},
fgs:function fgs(d){this.a=d},
fgt:function fgt(d){this.a=d},
b18:function b18(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cfB:function cfB(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cfC:function cfC(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
cfD:function cfD(d){this.a=d},
bcM:function bcM(d){this.a=d},
bcL:function bcL(d,e){this.b=d
this.a=e},
bug:function bug(d){this.a=d},
b9h:function b9h(d,e){this.b=d
this.a=e},
brL:function brL(d,e){this.b=d
this.a=e},
hss(d,e){return B.a3(d,!1).cg(B.e_(new C.fR8(e,null),!0,null,x.E))},
fR8:function fR8(d,e){this.a=d
this.b=e},
W0:function W0(d,e,f){this.c=d
this.d=e
this.a=f},
aEt:function aEt(){var _=this
_.d=null
_.e=0
_.f=1
_.w=_.r=0.5
_.x=1
_.y=!1
_.c=_.a=null},
eli:function eli(){},
elj:function elj(d){this.a=d},
elh:function elh(d,e){this.a=d
this.b=e},
el5:function el5(d){this.a=d},
el6:function el6(d){this.a=d},
elc:function elc(d){this.a=d},
eld:function eld(d,e){this.a=d
this.b=e},
ela:function ela(d){this.a=d},
elb:function elb(d,e,f){this.a=d
this.b=e
this.c=f},
el7:function el7(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ele:function ele(d,e){this.a=d
this.b=e},
el9:function el9(d,e){this.a=d
this.b=e},
elf:function elf(d){this.a=d},
el8:function el8(d,e){this.a=d
this.b=e},
elg:function elg(d,e){this.a=d
this.b=e},
bci:function bci(d,e,f){this.b=d
this.c=e
this.a=f},
iea(d){return B.a3(d,!1).cg(B.e_(new C.fRo(),!0,null,x.I))},
bA5(d,e){var w,v,u,t,s,r,q=B.c2(20,0,!1,x.gR)
for(w=0;w<4;++w)for(v=w*5,u=v+4,t=0;t<5;++t){for(s=0,r=0;r<4;++r)s+=d[v+r]*e[r*5+t]
if(t===4)s+=d[u]
q[v+t]=s}return q},
h1Q(d,e,f,g){return B.a([d,0,0,0,e,0,d,0,0,f,0,0,d,0,g,0,0,0,1,0],x.x)},
fRo:function fRo(){},
a04:function a04(d){this.a=d},
oF:function oF(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
aFR:function aFR(d,e,f,g,h,i,j,k,l){var _=this
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
_.aB=_.aK=_.aE=_.az=_.Z=_.b8=_.bi=_.y2=0
_.b1=null
_.b0=0.25
_.bb=null
_.bK=0.5
_.aH=1
_.c7=_.bD=_.bh=0
_.cK=_.c5=!1
_.c=_.a=null},
eUu:function eUu(d){this.a=d},
eTm:function eTm(d,e){this.a=d
this.b=e},
eTK:function eTK(d,e){this.a=d
this.b=e},
eTU:function eTU(d){this.a=d},
eT5:function eT5(d){this.a=d},
eT6:function eT6(d){this.a=d},
eT3:function eT3(d){this.a=d},
eT4:function eT4(d){this.a=d},
eTD:function eTD(d,e){this.a=d
this.b=e},
eTE:function eTE(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eTQ:function eTQ(d,e,f){this.a=d
this.b=e
this.c=f},
eTP:function eTP(d,e){this.a=d
this.b=e},
eTR:function eTR(d,e){this.a=d
this.b=e},
eTO:function eTO(d,e){this.a=d
this.b=e},
eTT:function eTT(d,e,f){this.a=d
this.b=e
this.c=f},
eTS:function eTS(d,e){this.a=d
this.b=e},
eSW:function eSW(d){this.a=d},
eSX:function eSX(d){this.a=d},
eSY:function eSY(d){this.a=d},
eSV:function eSV(){},
eSZ:function eSZ(d,e){this.a=d
this.b=e},
eSU:function eSU(d,e){this.a=d
this.b=e},
eT0:function eT0(){},
eT_:function eT_(d,e){this.a=d
this.b=e},
eST:function eST(d,e){this.a=d
this.b=e},
eSQ:function eSQ(d,e){this.a=d
this.b=e},
eT1:function eT1(d){this.a=d},
eSS:function eSS(d,e){this.a=d
this.b=e},
eT2:function eT2(d){this.a=d},
eSR:function eSR(d,e){this.a=d
this.b=e},
eUj:function eUj(d,e){this.a=d
this.b=e},
eUq:function eUq(d){this.a=d},
eUr:function eUr(d,e){this.a=d
this.b=e},
eUs:function eUs(){},
eUk:function eUk(d,e){this.a=d
this.b=e},
eUi:function eUi(d,e){this.a=d
this.b=e},
eUl:function eUl(d,e){this.a=d
this.b=e},
eUh:function eUh(d,e){this.a=d
this.b=e},
eUm:function eUm(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eUg:function eUg(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eUn:function eUn(d){this.a=d},
eUo:function eUo(d,e){this.a=d
this.b=e},
eUp:function eUp(d){this.a=d},
eUf:function eUf(d){this.a=d},
eU2:function eU2(d){this.a=d},
eU3:function eU3(d){this.a=d},
eU1:function eU1(d,e){this.a=d
this.b=e},
eTX:function eTX(d,e){this.a=d
this.b=e},
eU4:function eU4(d){this.a=d},
eU7:function eU7(d){this.a=d},
eU0:function eU0(d){this.a=d},
eU8:function eU8(d){this.a=d},
eU9:function eU9(d){this.a=d},
eUa:function eUa(d){this.a=d},
eUb:function eUb(d){this.a=d},
eU_:function eU_(d){this.a=d},
eUc:function eUc(d){this.a=d},
eTZ:function eTZ(d){this.a=d},
eUd:function eUd(d,e){this.a=d
this.b=e},
eTY:function eTY(d,e){this.a=d
this.b=e},
eUe:function eUe(d){this.a=d},
eU5:function eU5(d){this.a=d},
eU6:function eU6(d){this.a=d},
eTH:function eTH(d){this.a=d},
eTG:function eTG(d){this.a=d},
eTI:function eTI(d,e){this.a=d
this.b=e},
eTF:function eTF(d,e){this.a=d
this.b=e},
eTJ:function eTJ(d){this.a=d},
eTz:function eTz(d){this.a=d},
eTy:function eTy(d){this.a=d},
eTA:function eTA(d){this.a=d},
eTx:function eTx(d){this.a=d},
eTB:function eTB(d,e){this.a=d
this.b=e},
eTw:function eTw(d,e){this.a=d
this.b=e},
eTv:function eTv(d,e){this.a=d
this.b=e},
eTd:function eTd(d){this.a=d},
eTe:function eTe(d){this.a=d},
eTf:function eTf(d){this.a=d},
eTg:function eTg(d){this.a=d},
eTh:function eTh(d){this.a=d},
eTi:function eTi(d){this.a=d},
eTj:function eTj(d){this.a=d},
eTk:function eTk(d){this.a=d},
eTl:function eTl(d){this.a=d},
eSz:function eSz(d){this.a=d},
eSA:function eSA(d){this.a=d},
eSB:function eSB(d){this.a=d},
eSC:function eSC(d){this.a=d},
eSD:function eSD(d){this.a=d},
eSy:function eSy(d){this.a=d},
eSE:function eSE(d){this.a=d},
eSF:function eSF(d){this.a=d},
eT7:function eT7(d){this.a=d},
eT8:function eT8(d){this.a=d},
eT9:function eT9(d){this.a=d},
eTa:function eTa(d){this.a=d},
eTb:function eTb(d){this.a=d},
eSJ:function eSJ(d){this.a=d},
eSK:function eSK(d){this.a=d},
eSL:function eSL(d){this.a=d},
eSM:function eSM(d){this.a=d},
eSN:function eSN(d){this.a=d},
eSI:function eSI(d){this.a=d},
eSO:function eSO(d){this.a=d},
eSH:function eSH(d){this.a=d},
eSP:function eSP(d){this.a=d},
eSG:function eSG(d){this.a=d},
eTC:function eTC(d){this.a=d},
eTu:function eTu(d){this.a=d},
eTq:function eTq(d){this.a=d},
eTp:function eTp(d){this.a=d},
eTr:function eTr(d,e){this.a=d
this.b=e},
eTo:function eTo(d,e){this.a=d
this.b=e},
eTs:function eTs(d,e){this.a=d
this.b=e},
eTn:function eTn(d,e){this.a=d
this.b=e},
eTt:function eTt(d){this.a=d},
eTN:function eTN(d){this.a=d},
eTM:function eTM(d,e,f){this.a=d
this.b=e
this.c=f},
eTL:function eTL(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eTW:function eTW(d,e){this.a=d
this.b=e},
eTV:function eTV(d,e){this.a=d
this.b=e},
eTc:function eTc(d){this.a=d},
eUt:function eUt(d){this.a=d},
bfR:function bfR(d,e){this.b=d
this.a=e},
i9z(d){var w=A.a.i(d).length
if(w<=40)return 66
if(w<=80)return 54
if(w<=140)return 44
if(w<=220)return 36
return 30},
i9A(d,e){var w,v,u,t,s,r,q,p,o,n=B.af("\\S+",!0,!1,!1,!1).l5(0,d),m=B.C(n,B.a6(n).k("J.E"))
if(m.length===0)return d
w=new B.ff("")
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
o=B.aL(p,n,"")
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
v=t.index+t[0].length}n=w.a=n+A.a.b4(d,v)
return n.charCodeAt(0)==0?n:n},
bAG(){var w=$.bzO,v=$.QF
$.QF=v+1
return w+"_"+v},
ig(d,e,f,g,h,i,j){return C.er(A.bi,!1,4279310375,A.aF,"",i,24,A.bp,A.a7,"",h,C.bAG(),null,"","",0,!1,"",j,d,i,0,"",0,0,"",D.cl,D.f8,g,e,f)},
o3(d,e,f,g){var w=f*9
return C.ig(D.eQ,d-f/2,e-w/32,f,w/16,g,0)},
hTS(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=4279310375
switch(d.a){case 0:w=B.a([],x.u)
for(v=[0.12,0.26,0.4,0.54,0.68,0.82,0.94],u=e&16777215,t=u|855638016,s=0;s<7;++s){r=v[s]
q=$.bzO
p=$.QF
$.QF=p+1
w.push(new C.eM(q+"_"+p,D.f8,0,r,1,0.0016,"",24,A.a7,A.bp,A.aF,k,A.bi,null,D.bg,t,t,0,0,!1,"",0,D.cl,0,"","","","","",!1,0))}for(v=[0.18,0.5,0.82],t=u|570425344,s=0;s<3;++s){o=v[s]
q=$.bzO
p=$.QF
$.QF=p+1
w.push(new C.eM(q+"_"+p,D.f8,o,0,0.004,1,"",24,A.a7,A.bp,A.aF,k,A.bi,null,D.bg,t,t,0,0,!1,"",0,D.cl,0,"","","","","",!1,0))}w.push(C.o3(0.88,0.1,0.5,f&16777215|855638016))
w.push(C.o3(0.1,0.92,0.6,u|704643072))
return w
case 1:w=e&16777215
v=(w|2852126720)>>>0
u=f&16777215
t=(u|2852126720)>>>0
return B.a([C.ig(D.bg,0.08,0.08,0.5,0.003,v,0),C.ig(D.bg,0.58,0.08,0.004,0.06,v,0),C.ig(D.bg,0.58,0.14,0.34,0.003,v,0),C.ig(D.bg,0.92,0.14,0.004,0.08,(w|2281701376)>>>0,0),C.ig(D.bg,0.08,0.8,0.004,0.14,t,0),C.ig(D.bg,0.08,0.94,0.6,0.003,t,0),C.o3(0.58,0.08,0.05,e),C.o3(0.92,0.22,0.05,e),C.o3(0.08,0.8,0.05,f),C.o3(0.68,0.94,0.05,f),C.o3(0.9,0.9,0.55,u|570425344)],x.u)
case 2:w=e&16777215
v=f&16777215
return B.a([C.ig(D.lg,0.62,0.04,0.34,0.2,w|855638016,0.2),C.ig(D.lg,0.02,0.74,0.42,0.24,v|771751936,-0.15),C.ig(D.lg,0.7,0.8,0.22,0.12,w|1140850688,0),C.ig(D.lg,0.05,0.05,0.16,0.09,v|1426063360,0)],x.u)
case 3:w=e&16777215
v=f&16777215
return B.a([C.o3(0.5,0.5,1.5,w|335544320),C.o3(0.5,0.5,1.15,w|402653184),C.o3(0.5,0.5,0.8,v|436207616),C.o3(0.95,0.05,0.4,v|855638016),C.o3(0.05,0.97,0.5,w|704643072)],x.u)
case 4:w=e&16777215
v=f&16777215
return B.a([C.o3(0.85,0.08,0.7,w|1140850688),C.o3(0.1,0.35,0.5,v|855638016),C.o3(0.9,0.62,0.55,v|771751936),C.o3(0.15,0.95,0.8,w|939524096)],x.u)
case 5:w=e&16777215
v=f&16777215
return B.a([C.ig(D.bg,-0.1,0.7,1.2,0.06,w|671088640,-0.04),C.ig(D.bg,-0.1,0.78,1.2,0.07,v|872415232,0.035),C.ig(D.bg,-0.1,0.86,1.2,0.08,w|1073741824,-0.03),C.ig(D.bg,-0.1,0.94,1.2,0.1,v|1426063360,0.02),C.o3(0.85,0.12,0.3,v|855638016)],x.u)
case 6:w=e&16777215
return B.a([C.o3(0.5,0.2,0.65,(w|3422552064)>>>0),C.o3(0.5,0.2,0.95,w|855638016),C.ig(D.bg,-0.05,0.84,1.1,0.2,2570782564,-0.02),C.ig(D.bg,-0.05,0.9,1.1,0.14,3139312459,0.02)],x.u)
case 7:w=e&16777215
return B.a([C.ig(D.jX,-0.1,0.78,0.7,0.2,w|1426063360,0),C.ig(D.jX,0.35,0.74,0.8,0.24,f&16777215|1711276032,0),C.ig(D.jX,0.15,0.86,0.6,0.14,1712265002,0),C.o3(0.82,0.1,0.22,(w|2852126720)>>>0)],x.u)
case 8:w=B.a([],x.u)
for(n=0;n<16;++n){v=D.cZO[n]
u=A.o.F(n,3)===0
t=u?0.035:0.02
q=(n&1)===0?e:f
q=((u?255:170)<<24|q&16777215)>>>0
p=t*9
m=$.bzO
l=$.QF
$.QF=l+1
w.push(new C.eM(m+"_"+l,D.f8,v.a-t/2,v.b-p/32,t,p/16,"",24,A.a7,A.bp,A.aF,k,A.bi,null,D.eQ,q,q,0,0,!1,"",0,D.cl,0,"","","","","",!1,0))}w.push(C.o3(0.85,0.12,0.35,f&16777215|570425344))
return w
case 9:w=e&16777215
v=f&16777215|570425344
return B.a([C.ig(D.jX,0.35,-0.1,0.3,0.62,w|855638016,0),C.ig(D.jX,0.05,-0.1,0.3,0.55,v,-0.5),C.ig(D.jX,0.65,-0.1,0.3,0.55,v,0.5),C.o3(0.5,0.04,0.45,w|1711276032)],x.u)
case 10:w=(f&16777215|2281701376)>>>0
return B.a([C.ig(D.bg,0.06,0.04,0.88,0.002,e,0),C.ig(D.bg,0.06,0.96,0.88,0.002,e,0),C.ig(D.bg,0.06,0.04,0.004,0.92,e,0),C.ig(D.bg,0.936,0.04,0.004,0.92,e,0),C.ig(D.bg,0.09,0.07,0.82,0.001,w,0),C.ig(D.bg,0.09,0.93,0.82,0.001,w,0)],x.u)
case 11:w=e&16777215
return B.a([C.ig(D.jY,-0.1,0.05,0.7,0.12,w|855638016,-0.1),C.ig(D.jY,0.45,0.78,0.7,0.1,f&16777215|1073741824,-0.1),C.ig(D.jY,-0.1,0.9,0.6,0.06,w|1426063360,-0.1)],x.u)
case 12:w=f&16777215
v=e&16777215
return B.a([C.ig(D.bg,0,0,0.3,0.09,w|1140850688,0),C.ig(D.bg,0.7,0.9,0.3,0.1,v|1426063360,0),C.ig(D.bg,0.82,0.04,0.12,0.07,w|771751936,0),C.ig(D.bg,0.04,0.82,0.18,0.08,v|855638016,0)],x.u)
case 13:w=e&16777215
v=w|1140850688
u=f&16777215|1140850688
return B.a([C.ig(D.eQ,0.62,0.02,0.5,0.16,v,0.6),C.ig(D.eQ,0.78,0.12,0.4,0.12,u,0.9),C.ig(D.eQ,-0.12,0.8,0.5,0.16,u,-0.6),C.ig(D.eQ,-0.05,0.9,0.4,0.12,v,-0.9),C.o3(0.9,0.9,0.3,w|855638016)],x.u)
case 14:w=f&16777215|1711276032
return B.a([C.ig(D.bg,0.09,0.12,0.16,0.006,e,0),C.ig(D.bg,0.05,0.03,0.9,0.001,w,0),C.ig(D.bg,0.05,0.97,0.9,0.001,w,0)],x.u)}},
i61(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3){var w,v,u,t,s,r,q,p,o,n=4279310375,m=4280640491,l=4280172719
$.bzO=j
$.QF=0
w=A.a.i(a6)
if(w.length===0)w=d.y
v=A.a.i(f)
u=b1==null?d.x:b1
t=new C.fAG()
s=b3?0:d.e
r=b3?0:d.f
q=B.a([],x.u)
if(g!=null&&g.length!==0)q.push(C.er(A.bi,!1,n,A.aF,"ngmy_quote_background",m,24,A.bp,A.a7,"",1,C.bAG(),g,"","",0,!1,"",0,D.bg,l,2,"",0,0,"",D.cl,D.lJ,1,0,0))
if(a9)A.d.v(q,C.hTS(d.d,d.r,d.w))
if(a7)q.push(t.$9$align$weight("\u201c",0.08,A.k.E(a8-0.13,0,1),0.84,0.1,200,d.r,e,A.u))
p=B.af("[*~^]",!0,!1,!1,!1)
p=C.i9z(B.aL(w,p,""))
o=A.a.q(w,B.af("[*^]",!0,!1,!1,!1))?0.85:1
q.push(new C.fAF(a8,h,k,e,b2,i).$3(w,p*b0*o,u))
if(v.length!==0)q.push(t.$10$align$style$weight("\u2014 "+v,0.09,A.k.E(a8+0.39,0,0.9),0.82,0.05,30,(u&16777215|3707764736)>>>0,e,A.cE,A.a7))
p=u&16777215
q.push(t.$8$weight("NGMY",0.3,0.925,0.4,0.028,22,(p|3003121664)>>>0,A.u))
q.push(t.$8$weight("New Global Movement for Youth",0.1,0.96,0.8,0.025,14,(p|2566914048)>>>0,A.a7))
if(a0!=null&&a0.length!==0)q.push(C.er(A.bi,!1,n,A.aF,"ngmy_quote_logo",m,24,A.bp,A.a7,a1,a3*9/16,C.bAG(),a0,"","",0,!1,a2,0,D.bg,l,2,"",0,0,"",D.cl,D.lJ,a3,a4,a5))
return C.rD(s,r,0,0,q,j+"_slide",D.qr,"","","",D.dh)},
rC:function rC(d,e){this.a=d
this.b=e},
mf:function mf(d,e,f,g,h,i,j,k,l,m){var _=this
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
fAG:function fAG(){},
fAF:function fAF(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
hJX(d){var w,v,u,t,s
if(!x.f.b(d))return null
w=J.a4(d)
v=B.bi(B.w(w.h(d,"at")))
u=w.h(d,"outline")
t=B.w(u==null?"":u)
if(v==null||t.length===0)return null
u=x.j
if(u.b(w.h(d,"extras"))){u=J.b6(u.a(w.h(d,"extras")),new C.cgZ(),x.N)
s=B.C(u,u.$ti.k("ak.E"))}else s=B.a([],x.s)
u=v.bU()
w=w.h(d,"request")
return new C.zL(u,t,s,B.w(w==null?"":w))},
fIn(){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$fIn=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if($.hkQ){w=1
break}$.hkQ=!0
t=4
w=7
return B.b(B.az(),$async$fIn)
case 7:r=e
q=B.aU(J.q(r.a,"ngmy_slides_ai_history_v1"))
if(q==null||q.length===0){w=1
break}p=A.T.aN(0,q,null)
if(!x.f.b(p)){w=1
break}for(k=J.jV(p),k=k.gaf(k),j=x.j,i=x.o;k.C();){o=k.gR(k)
n=B.a([],i)
if(j.b(o.b))for(h=J.aV(j.a(o.b));h.C();){m=h.gR(h)
l=C.hJX(m)
if(l!=null)J.cc(n,l)}$.CT.c4(0,B.w(o.a),new C.fIo(n))}C.h1v()
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
return B.i($async$fIn,v)},
h1v(){var w,v=new B.U(Date.now(),0,!1).bS(-12e8)
for(w=new B.dr($.CT,$.CT.r,$.CT.e);w.C();)J.nx(w.d,new C.fnZ(v))
$.CT.bt($.CT,new C.fo_())},
aOl(){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$aOl=B.e(function(d,a0){if(d===1){t.push(a0)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$aOl)
case 6:s=a0
m=x.N
l=x.z
r=B.T(m,l)
for(k=new B.cH($.CT,B.a6($.CT).k("cH<1,2>")).gaf(0),j=x.d;k.C();){i=k.d
i.toString
q=i
i=q.a
p=B.a([],j)
for(h=J.aV(q.b);h.C();){o=h.gR(h)
g=o
J.cc(p,B.G(["at",g.a.a7().ad(),"outline",g.b,"extras",g.c,"request",g.d],m,l))}J.aG(r,i,p)}n=r
w=7
return B.b(s.aq("String","ngmy_slides_ai_history_v1",A.T.ao(n,null)),$async$aOl)
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
return B.i($async$aOl,v)},
iab(d,e,f,g){var w,v,u
if(d.length===0||A.a.i(f).length===0)return
C.h1v()
w=$.CT.c4(0,d,new C.fIq())
v=Date.now()
u=B.C(e,B.a6(e).k("cr.E"))
J.pG(w,0,new C.zL(new B.U(v,0,!1),f,u,g))
C.aOl()},
ia8(d){var w,v=$.CT.h(0,d)
if(v==null||J.cp(v))return
w=J.cD(v)
w.cG(v,0)
if(w.gam(v))$.CT.W(0,d)
C.aOl()},
zL:function zL(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cgZ:function cgZ(){},
fIo:function fIo(d){this.a=d},
fnZ:function fnZ(d){this.a=d},
fo_:function fo_(){},
fIq:function fIq(){},
iad(d){return A.d.dM(D.wt,new C.fIt(d),new C.fIu())},
hJV(d){var w
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
hJU(d){var w
switch(d.a){case 0:w=D.amw
break
case 1:w=A.yL
break
case 2:w=A.anA
break
case 3:w=I.am8
break
case 4:w=A.an1
break
case 5:w=A.m5
break
default:w=null}return w},
hWX(d){var w,v,u,t=A.a.i(d).toLowerCase()
if(t.length===0)return null
for(w=0;w<109;++w){v=D.Qs[w]
if(v.toLowerCase()===t)return v}for(w=0;w<109;++w){v=D.Qs[w]
if(!B.cU(v.toLowerCase(),t,0))u=B.cU(t,v.toLowerCase(),0)
else u=!0
if(u)return v}return null},
hJW(d){var w,v,u,t,s,r,q,p,o=B.a([],x.ez)
for(w=d.c,v=w.length,u=x.N,t=x.C,s=0;s<w.length;w.length===v||(0,B.M)(w),++s){r=w[s]
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
o.push(q)}return A.T.ao(B.G(["title",d.a,"style",d.b,"logo_frame",d.d,"logo_ring",d.e,"photo_frame",d.f,"photo_ring",d.r,"slides",o],u,t),null)},
ia9(d,e,f,g,h){var w=new B.N(D.wt,new C.fIm(),x.eC).aG(0,", "),v=""+d,u=C.hqi(h),t=F.fC4(h),s=C.hms(g),r=e.q(0,D.Io)?'- New slides get an "emoji".\n':"",q=e.q(0,D.Ip)?'- New slides get an "icon3d" from: '+A.d.aG(D.Qs,", ")+".\n":"",p=e.q(0,D.Dc)?'- New content slides get an "image_query" (2-3 English words).\n':""
return"You edit an existing presentation. Here it is as JSON:\n"+f+"\n\nThe presenter is looking at slide "+v+'.\n\nWHAT THEY WANT CHANGED (may be informal):\n"""'+h+'"""\n\nRules:\n- Do exactly what they ask: add, remove, move, shorten, lengthen or rewrite slides, change the tone, the language or the style ('+w+'). "This slide" / "here" means slide '+v+". New slides go where they say (or right after slide "+v+').\n- Keep every slide they did not ask about exactly as it is.\n- Same limits as before: titles max 7 words, 3 to 5 bullets of max 12 words, never invent prices, dates or statistics.\n- LANGUAGE: keep the presentation\'s current language unless they ask for another one; if they do, translate EVERY slide. JSON keys and the "kind", "style", "icon3d" and "image_query" values stay in English.\n- TRANSLATING OR REWORDING: change only the words. Keep "style", "kind", "emoji", "icon3d", "image_query", "picture" and the frame/ring values exactly as they are, with the same number of slides and bullets.\n- VOICE: write the way a real, friendly person talks and writes to someone they respect. Short plain sentences. Everyday words that people really use today. No corporate or robotic phrasing ("leverage", "synergy", "empower the ecosystem", "in today\'s dynamic landscape"), no made-up or rare words, no stacked jargon, no lecture tone. Explain the Civic registry, the AI, and any other topic the way you would explain it to a neighbour. If the language is Swahili, use the Swahili people speak and write every day in Kenya and Tanzania: real common words, natural word order, and never an English word forced into Swahili grammar or an invented Swahili word. Check that each word is one an ordinary speaker would understand.\n'+u+"\n"+t+'\n- Keep "logo_frame", "logo_ring", "photo_frame" and "photo_ring" unless they ask to change how the logo or pictures look.\n- PICTURE LOOK: "logo_frame" and "photo_frame" are one of: circle, rounded, triangle, hexagon, diamond, arch, or "" (as is). "logo_ring" and "photo_ring" are one of: gold, platinum, glow, rainbow, double, neon, framed, rosegold, jewels, aurora, or "" (none). Follow what the request says (e.g. "my picture in a circle with a gold ring"); if it says nothing, choose what suits the look (luxury \u2192 gold, neon/night \u2192 neon, clean \u2192 rounded with no ring).\n- BIO LINK: if they ask to put their bio link / link page / socials / "my links" in the presentation, add ONE slide with kind "bio" (title like "Connect with me", a one-line inviting subtitle) \u2014 usually just before the closing slide, or where they say. Their real Bio page (with clickable links) is shown on a phone on that slide.\n'+s+"\n"+r+q+p+'- Reply with the WHOLE presentation as JSON only, no markdown, same shape:\n{"title":"...","style":"...","logo_frame":"","logo_ring":"","photo_frame":"","photo_ring":"","slides":[{"kind":"...","title":"...","subtitle":"...","bullets":[],"notes":"...","emoji":"","icon3d":"","image_query":""}]}\n'},
iaa(d,e,f,g,h,i){var w,v,u,t,s='- "emoji": ONE emoji that fits the slide (e.g. \ud83c\udf89 \ud83d\ude80 \ud83c\udf3f \ud83d\udca1).\n',r=f?"- A document is attached (read it all). Rewrite its content as the slides in the same language: keep its facts, names, numbers, dates and the order of its sections, and never invent facts it does not contain.\n":"",q=new B.N(D.wt,new C.fIp(),x.eC).aG(0,", "),p=new B.ff("")
if(e.q(0,D.Io)){p.a=s
w=s}else w=""
if(e.q(0,D.Ip))w=p.a=w+('- "icon3d": ONE name copied exactly from this list that fits the slide: '+A.d.aG(D.Qs,", ")+".\n")
if(e.q(0,D.Dc))p.a=w+'- "image_query": 2-3 simple English words for a real photo that fits the slide (e.g. "city skyline", "students classroom").\n'
w=C.hqi(d)
v=F.fC4(d)
u=C.hms(g)
t=i==="auto"?"pick the best of: "+q+" (match the mood they describe: nature, vibe, celebration, colorful, professional...)":'use "'+i+'"'
return'You design presentation slides. Write a presentation from the user\'s request.\n\nUSER REQUEST (spoken, may be informal):\n"""'+d+'"""\n\nRules:\n'+r+"- Exactly "+h+' slides.\n- Slide 1 has kind "title". The last slide has kind "closing" (thank-you / call to action).\n- Middle slides mostly kind "bullets" (3 to 5 short bullets, max 12 words each). You may use one "section" divider and one "quote" slide when it fits.\n- Titles are short and punchy (max 7 words). Use the user\'s own names, facts and details; never invent prices, dates or statistics they did not give.\n- "notes": 1-2 sentences the presenter can say.\n- LANGUAGE: if the request names a language (e.g. "in Swahili", "en fran\xe7ais", "en espa\xf1ol", "in Arabic"), write EVERY title, subtitle, bullet and note in that language, with correct spelling and accents. If no language is named, write in the language the request itself is written in. Keep the JSON keys and the "kind", "style", "icon3d" and "image_query" values in English.\n- VOICE: write the way a real, friendly person talks and writes to someone they respect. Short plain sentences. Everyday words that people really use today. No corporate or robotic phrasing ("leverage", "synergy", "empower the ecosystem", "in today\'s dynamic landscape"), no made-up or rare words, no stacked jargon, no lecture tone. Explain the Civic registry, the AI, and any other topic the way you would explain it to a neighbour. If the language is Swahili, use the Swahili people speak and write every day in Kenya and Tanzania: real common words, natural word order, and never an English word forced into Swahili grammar or an invented Swahili word. Check that each word is one an ordinary speaker would understand.\n'+w+"\n"+v+'\n- PICTURE LOOK: "logo_frame" and "photo_frame" are one of: circle, rounded, triangle, hexagon, diamond, arch, or "" (as is). "logo_ring" and "photo_ring" are one of: gold, platinum, glow, rainbow, double, neon, framed, rosegold, jewels, aurora, or "" (none). Follow what the request says (e.g. "my picture in a circle with a gold ring"); if it says nothing, choose what suits the look (luxury \u2192 gold, neon/night \u2192 neon, clean \u2192 rounded with no ring).\n- BIO LINK: if they ask to put their bio link / link page / socials / "my links" in the presentation, add ONE slide with kind "bio" (title like "Connect with me", a one-line inviting subtitle) \u2014 usually just before the closing slide, or where they say. Their real Bio page (with clickable links) is shown on a phone on that slide.\n'+u+'\n- "style": '+t+".\n"+p.u(0)+'- Reply with JSON only, no markdown, in this shape:\n{"title":"...","style":"...","logo_frame":"","logo_ring":"","photo_frame":"","photo_ring":"","slides":[{"kind":"title","title":"...","subtitle":"...","bullets":[],"notes":"...","emoji":"","icon3d":"","image_query":""}]}\n'},
ahj(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=null,a2="bullets",a3=A.a.i(a6),a4=J.De(a3,"{"),a5=J.fUG(a3,"}")
if(a4<0||a5<=a4)return a1
a3=J.Ly(a3,a4,a5+1)
try{w=A.T.aN(0,a3,a1)
q=x.f
if(!q.b(w))return a1
v=J.q(w,"slides")
p=x.j
if(!p.b(v)||J.cp(v))return a1
u=B.a([],x.aC)
for(o=J.aV(v),n=x.s,m=x.N;o.C();){t=o.gR(o)
if(!q.b(t))continue
if(p.b(J.q(t,a2))){l=J.b6(p.a(J.q(t,a2)),new C.fGl(),m).c0(0,new C.fGm())
k=B.C(l,l.$ti.k("J.E"))}else k=B.a([],n)
s=k
l=J.q(t,"kind")
l=A.a.i(B.w(l==null?a2:l))
j=J.q(t,"title")
j=A.a.i(B.w(j==null?"":j))
i=J.q(t,"subtitle")
i=A.a.i(B.w(i==null?"":i))
h=J.q(t,"notes")
h=A.a.i(B.w(h==null?"":h))
g=J.q(t,"emoji")
g=A.a.i(B.w(g==null?"":g))
f=J.q(t,"icon3d")
f=C.hWX(B.w(f==null?"":f))
if(f==null)f=""
e=J.q(t,"image_query")
if(e==null)e=J.q(t,"imageQuery")
e=A.a.i(B.w(e==null?"":e))
d=J.q(t,"picture")
d=B.ca(B.w(d==null?0:d),a1)
if(d==null)d=0
J.cc(u,new C.a8a(l.toLowerCase(),j,i,s,h,g,f,e,d))}if(J.ad(u)===0)return a1
q=J.q(w,"style")
r=A.a.i(B.w(q==null?a7:q)).toLowerCase()
q=J.q(w,"title")
q=A.a.i(B.w(q==null?J.fr(u).b:q))
p=A.d.b3(D.wt,new C.fGn(r))?r:a7
o=C.fnd(J.q(w,"logo_frame"),D.CB)
n=C.fnd(J.q(w,"logo_ring"),D.Cw)
m=C.fnd(J.q(w,"photo_frame"),D.CB)
l=C.fnd(J.q(w,"photo_ring"),D.Cw)
return new C.arw(q,p,u,o,n,m,l)}catch(a0){return a1}},
a1Q(d,e){return(A.o.E(e,0,255)<<24|d&16777215)>>>0},
hpp(f9,g0,g1,g2,g3,g4,g5,g6,g7,g8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4=null,e5="title",e6="orb1",e7="drift",e8="orb2",e9="logo",f0="hero",f1="photo",f2="float3d",f3="bar",f4="pulse",f5="sub",f6=g2.q(0,D.Dd),f7=f6?C.hQA():e4,f8=f7==null
if(f8)w=e4
else{v=new B.eb()
v.d5(f7.w+1)
u=f7.a
t=B.bo(u.b,!0,x.dL)
A.d.dO(t,v)
s=u.c
s=new C.nR("luxe",u.a,A.m5,t,u.e,u.f,B.a([s,u.d,s],x.t),D.dh)
w=s}if(w==null)w=C.iad(f9.b)
r=g2.q(0,D.a60)||f6
q=g2.q(0,D.Io)
p=g2.q(0,D.St)
o=new C.fAK()
n=B.a([],x.g)
m=new C.fAN(o,w,r)
l=new C.fAM(o,r)
k=new C.fAL(o,r)
j=(g3==null?"":g3).length!==0
u=f9.c
for(s=w.w,f8=!f8,i=g7==null,h=g6==null,g=f9.f,f=f9.r,e=g5==null,d=g4==null,a0=f9.d,a1=f9.e,a2=w.f,a3=w.d,a4=w.r,a5=x.u,a6=J.a4(g0),a7=!A.d.b3(u,new C.fAJ(g8)),a8=g1==null,a9=x.s,b0=0,b1=0;b1<u.length;b1=b6){b2=u[b1]
b3=a3[A.o.F(b1,a3.length)]
b4=A.o.F(b1,3)
b5=a4[b4]
b6=b1+1
b7=a4[b6%3]
b8=A.o.F(b1,5)
b9=D.d0m[b8]
c0=D.d_g[b8]
c1=B.a([],a5)
c2=a6.h(g0,b1)
c3=c2==null
c4=c3?e4:c2.a
c5=c3?e4:c2.b
c3=b2.x
c6=c3>0&&c3<=g8.length
if(c6)c5=g8[c3-1]
else if(g8.length!==0&&a7&&!D.eY6.q(0,b2.a)){c7=b0+1
c5=g8[A.o.F(b0,g8.length)]
b0=c7}c8=q?b2.f:""
c3=c5==null
c9=c3?c4:c5
if(c6)d0=c5
else d0=c4==null?c5:c4
d1=!c6&&c4!=null
if(p)c1.push(l.$7$key(D.eQ,0.62-b8*0.36,-0.55+b4*0.18,1.15,2,(A.o.E(31,0,255)<<24|b5&16777215)>>>0,"pano"))
A:{d2=b2.a
if("title"===d2){c1.push(l.$8$fx$key(D.eQ,0.7,-0.25,0.46,0.82,(A.o.E(51,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.eQ,-0.08,0.68,0.24,0.43,(A.o.E(46,0,255)<<24|b7&16777215)>>>0,e7,e8))
if(j){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.41,0.04,0.18,0.27,D.mS,450,e9))}else if(d0!=null){b4=d1?f0:f1
c1.push(k.$9$anim$delay$fx$key(d0,0.42,0.04,0.16,0.28,c0,500,d1?f2:"",b4))}else if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,0.4,0.04,0.2,0.24,64,A.L,D.qs,500,f2,f0))
c1.push(l.$8$fx$key(D.bg,0.4,0.66,0.2,0.012,b5,f4,f3))
c1.push(m.$10$align$anim$key$weight(b2.b,0.08,0.33,0.84,0.3,54,A.L,b9,e5,A.u))
c1.push(m.$10$align$color$delay$key(b2.c,0.12,0.7,0.76,0.14,24,A.L,a2,300,f5))
d3=D.Sq
break A}if("section"===d2){c1.push(l.$8$fx$key(D.eQ,0.64,0.46,0.42,0.75,(A.o.E(42,0,255)<<24|b5&16777215)>>>0,e7,e6))
if(d0!=null){b4=!c3&&!d1?f1:f0
c1.push(k.$8$anim$fx$key(d0,0.7,0.2,0.24,0.44,c0,d1?f2:"",b4))}else c1.push(l.$9$fx$key$rotation(D.lg,0.78,0.1,0.18,0.32,(A.o.E(64,0,255)<<24|b7&16777215)>>>0,e7,e8,0.3))
c1.push(l.$8$fx$key(D.bg,0.08,0.6,0.14,0.014,b5,f4,f3))
b4=b2.b
c1.push(m.$9$anim$key$weight(c8.length===0?b4:c8+"  "+b4,0.08,0.34,0.62,0.24,46,b9,e5,A.u))
c1.push(m.$9$color$delay$key(b2.c,0.08,0.64,0.6,0.14,22,a2,250,f5))
d3=D.Da
break A}if("quote"===d2){b4=b5&16777215
c1.push(l.$8$fx$key(D.eQ,-0.12,-0.2,0.36,0.64,(A.o.E(36,0,255)<<24|b4)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.eQ,0.82,0.66,0.26,0.46,(A.o.E(38,0,255)<<24|b7&16777215)>>>0,e7,e8))
c1.push(m.$11$anim$color$fx$key$weight("\u201c",0.06,0.02,0.2,0.36,140,D.mS,(A.o.E(204,0,255)<<24|b4)>>>0,f4,"quote",A.u))
c1.push(m.$11$align$anim$key$style$weight(b2.b,0.12,0.3,0.76,0.34,36,A.L,b9,e5,A.cE,A.O))
b4=b2.c
c1.push(m.$10$align$color$delay$key(b4.length===0?"":"\u2014 "+b4,0.12,0.68,0.76,0.12,22,A.L,a2,300,f5))
if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,j?0.72:0.82,0.06,0.12,0.2,52,A.L,D.qs,500,f2,f0))
d3=D.mR
break A}if("bio"===d2)b4=(a8?"":g1).length!==0
else b4=!1
if(b4){c1.push(l.$8$fx$key(D.eQ,0.58,0.04,0.44,0.8,(A.o.E(42,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.bg,0.08,0.62,0.14,0.014,b5,f4,f3))
b4=b2.b
c1.push(m.$9$anim$key$weight(c8.length===0?b4:c8+"  "+b4,0.07,0.3,0.52,0.28,46,b9,e5,A.u))
c1.push(m.$9$color$delay$key(b2.c,0.07,0.66,0.5,0.16,22,a2,250,f5))
b4=o.$0()
g1.toString
b8=r?D.uL:D.cl
c1.push(new C.eM(b4,D.a5Z,0.64,0.05,0.27,0.9,g1,24,A.a7,A.bp,A.aF,4279310375,A.bi,e4,D.bg,4280640491,4280172719,2,0,!1,"",0,b8,r?350:0,"bio","","","","",!1,0))
d3=D.mR
break A}if("closing"===d2){c1.push(l.$8$fx$key(D.eQ,-0.15,-0.3,0.5,0.9,(A.o.E(46,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.eQ,0.78,0.62,0.3,0.54,(A.o.E(51,0,255)<<24|b7&16777215)>>>0,e7,e8))
if(j){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.41,0.05,0.18,0.27,D.mS,400,e9))}else if(d0!=null){b4=d1?f0:f1
c1.push(k.$9$anim$delay$fx$key(d0,0.42,0.05,0.16,0.28,c0,450,d1?f2:"",b4))}else if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,0.4,0.05,0.2,0.24,64,A.L,D.qs,450,f2,f0))
c1.push(l.$8$fx$key(D.bg,0.42,0.61,0.16,0.012,b5,f4,f3))
c1.push(m.$10$align$anim$key$weight(b2.b,0.1,0.34,0.8,0.26,52,A.L,b9,e5,A.u))
c1.push(m.$10$align$color$delay$key(b2.c,0.14,0.65,0.72,0.16,24,A.L,a2,300,f5))
d3=D.Sq
break A}d4=b2.d
if(d4.length===0&&b2.c.length!==0)d4=B.a([b2.c],a9)
d5=c9!=null
d6=(b1&1)===1&&d5
d7=d6?0.4:0.07
b4=d6?-0.1:0.8
c1.push(l.$8$fx$key(D.eQ,b4,0.52,0.3,0.54,(A.o.E(36,0,255)<<24|b7&16777215)>>>0,e7,e8))
b4=d6?0.86:-0.12
c1.push(l.$8$fx$key(D.eQ,b4,-0.18,0.26,0.46,(A.o.E(30,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$7$key(D.bg,d6?0.988:0,0,0.012,1,b5,"rail"))
b4=b2.b
b4=c8.length===0?b4:c8+"  "+b4
c1.push(m.$9$anim$key$weight(b4,d7,0.08,d5?0.53:0.86,0.16,38,b9,e5,A.u))
c1.push(l.$8$fx$key(D.bg,d7,0.25,0.12,0.012,b5,f4,f3))
b4=A.d.aG(d4,"\n")
b8=d5?0.53:0.7
c1.push(m.$11$anim$bullets$color$delay$key(b4,d7,0.31,b8,0.6,d4.length>4?21:24,D.Im,!0,a2,250,f5))
if(d5){d8=!c3
d9=d8?0.29:0.24
if(d6)e0=0.06
else e0=d8?0.67:0.7
b4=d8?0.22:0.26
b8=d8?0.56:0.44
c3=d8?f1:f0
c1.push(k.$9$anim$delay$fx$key(c9,e0,b4,d9,b8,c0,400,d8?"":f2,c3))}d3=D.mR}if(j&&d2!=="title"&&d2!=="closing"){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.885,0.035,0.085,0.13,D.dh,200,e9))}for(b4=c1.length,e1=0;e1<b4;++e1){e2=c1[e1]
b8=e2.fx
if(b8==="logo"){e2.go=d?a0:g4
e2.id=e?a1:g5}else if(b8==="photo"){e2.go=h?g:g6
e2.id=i?f:g7}}if(f8)C.hSd(c1,b1,o,f7)
b4=o.$0()
if(f8){b8=f7.r
b8=b8[A.o.F(b1,b8.length)]}else b8=r?D.dqo[A.o.F(b1,6)]:s
n.push(new C.lO(b4,b2.b,b2.e,d3,b3.a,b3.b,b8,0,"",0,c1))}e3=A.a.i(f9.a)
if(e3.length===0)e3="AI Presentation"
f8=o.$0()
return C.BW(e4,e4,e4,e4,D.D9,5,!1,e4,e4,e4,e4,e4,f8,e4,!1,e4,e3.length>60?A.a.ap(e3,0,60):e3,e4,e4,n,"office_blue",e4,!1,e4)},
fD7(d,e){var w=0,v=B.j(x.gI),u,t,s,r,q,p,o,n,m
var $async$fD7=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:o=e.q(0,D.Dc)
n=e.q(0,D.Ip)
if(!o&&!n){u=D.a4Y
w=1
break}t=B.a([],x.d5)
for(s=d.c,r=0;r<s.length;++r)t.push(new C.fDa(o,s[r],n,$.hVG,r).$0())
s=B.T(x.S,x.aH)
m=J
w=3
return B.b(B.iP(t,x.e),$async$fD7)
case 3:q=m.aV(g)
case 4:if(!q.C()){w=5
break}p=q.gR(q)
s.n(0,p.a,p.b)
w=4
break
case 5:u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fD7,v)},
fC7(d,e,f,g,h,i,j,k,l){var w=0,v=B.j(x.I),u,t,s
var $async$fC7=B.e(function(m,n){if(m===1)return B.f(n,v)
for(;;)switch(w){case 0:h.$1("Writing your "+j+" slides\u2026")
t=i.length
t=C.iaa(d,e,k.length!==0,t,j,l)
s=C
w=3
return B.b(C.aNF(t,"The AI could not write the slides. Try describing it again.",l==="auto"?"colorful":l,k),$async$fC7)
case 3:u=s.aO0(n,e,h,f,g,i)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fC7,v)},
bCh(d,e,f,g,h,i,j,k){var w=0,v=B.j(x.I),u,t,s,r,q,p,o
var $async$bCh=B.e(function(l,m){if(l===1)return B.f(m,v)
for(;;)switch(w){case 0:if(e.length!==0){t=B.aX(x.N)
for(s=B.en(f,f.r,B.a6(f).c),r=s.$ti.c;s.C();){q=s.d
t.M(0,(q==null?r.a(q):q).b)}C.iab(e,t,i,k)}if(h!=null)h.$1("Making your changes\u2026")
p=C.ahj(i,"colorful")
t=C.ia9(d,f,i,j.length,k)
s=p==null?null:p.b
o=C
w=3
return B.b(C.aNF(t,"The AI could not make that change. Try saying it another way.",s==null?"colorful":s,A.hK),$async$bCh)
case 3:u=o.aO0(m,f,h,g,D.e3A,j)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bCh,v)},
aNF(d,e,f,g){var w=0,v=B.j(x.dO),u,t,s,r,q,p,o,n
var $async$aNF=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:w=3
return B.b(B.vr(null,""),$async$aNF)
case 3:n=i
if(A.a.i(n).length===0)throw B.W("AI is not set up yet. AI is not available right now. Please try again later.")
t=B.n9(n)
s=null,r=0
case 4:if(!(r<2)){w=6
break}w=7
return B.b(B.r0(t,d,g,"slides",null),$async$aNF)
case 7:q=i
p=q.b
if(p!=null){o=C.ahj(p,f)
if(o!=null){u=o
w=1
break}}else s=q.a
case 5:++r
w=4
break
case 6:throw B.W(s!=null&&B.Le(s)?"No internet connection \u2014 try again when you are online.":e)
case 1:return B.h(u,v)}})
return B.i($async$aNF,v)},
aO0(d,e,f,g,h,i){var w=0,v=B.j(x.I),u,t,s,r,q,p,o,n,m,l
var $async$aO0=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:w=e.q(0,D.Dc)||e.q(0,D.Ip)?3:5
break
case 3:if(f!=null)f.$1("Adding pictures and 3D art\u2026")
if(i.length===0)t=e
else{t=B.de(e,x.Q)
t.W(0,D.Dc)}w=6
return B.b(C.fD7(d,t),$async$aO0)
case 6:s=k
w=4
break
case 5:s=D.a4Y
case 4:t=d.c
w=A.d.b3(t,new C.fgo())?7:9
break
case 7:r=$.hra
r=r==null?null:r.$0()
w=10
return B.b(x.gc.b(r)?r:B.dT(r,x.aP),$async$aO0)
case 10:q=k
p=q!=null?A.T.ao(q.ag(),null):null
w=8
break
case 9:p=null
case 8:r=h.a
o=h.b
n=h.c
m=h.d
l=C.hpp(d,s,p,e,g,r,o,n,m,i)
if(r==null)r=d.d
if(o==null)o=d.e
if(n==null)n=d.f
if(m==null)m=d.r
l.CW=C.hJW(new C.arw(d.a,d.b,t,r,o,n,m))
m=l.r
n=B.S(m).k("N<1,n>")
t=B.C(new B.N(m,new C.fgp(),n),n.k("ak.E"))
l.cx=t
t=B.a6(e).k("jY<cr.E,n>")
t=B.C(new B.jY(e,new C.fgq(),t),t.k("J.E"))
l.cy=t
l.ay=e.q(0,D.St)
u=l
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aO0,v)},
h4l(d){var w,v,u,t=d.cy
if(t==null)t=A.X
w=B.aX(x.Q)
for(v=0;v<6;++v){u=D.a3N[v]
if(A.d.q(t,u.b))w.M(0,u)}return w},
ief(d){return B.bT(A.K,null,new C.fRA(),d,!0,!0,!0,null,!1,!1,x.I)},
hRc(d,e){var w,v=e.toLowerCase()
if(A.a.cc(v,".png"))w="image/png"
else w=A.a.cc(v,".webp")?"image/webp":"image/jpeg"
return"data:"+w+";base64,"+A.cI.gcs().aM(d)},
iee(d,e,f){return B.bT(A.K,null,new C.fRz(f,e),d,!0,!0,!0,null,!1,!1,x.I)},
h4m(d){var w,v,u,t,s,r,q,p
for(w=d.r,v=w.length,u=0;u<v;++u)for(t=w[u].z,s=t.length,r=0;r<s;++r){q=t[r]
if(q.fx==="logo"){p=q.at
p=(p==null?"":p).length!==0}else p=!1
if(p)return q.at}return null},
h4n(d){var w,v,u,t,s,r,q,p,o=B.a([],x.s)
for(w=d.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.M)(w),++u)for(t=w[u].z,s=t.length,r=0;r<t.length;t.length===s||(0,B.M)(t),++r){q=t[r]
p=q.at
if(p==null)p=""
if(q.fx==="photo"&&p.length!==0&&!A.d.q(o,p))o.push(p)}return o},
fnd(d,e){var w=A.a.i(B.w(d==null?"":d)).toLowerCase()
return A.d.b3(e,new C.fne(w))?w:""},
hms(d){var w,v
if(d<=0)return""
w=""+d
v=d===1?"":"s"
return"- THEIR PICTURES: they uploaded "+w+" picture"+v+" of their own, numbered 1 to "+w+' in the order they picked them. Put "picture": <number> on each slide where one belongs, following exactly what they say (e.g. "picture 2 on the team slide", "first picture on the title"). If they don\'t say, spread them over the content slides in order. Use 0 where no picture is wanted.'},
hr8(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0="colorful",a1=a4.CW,a2=C.ahj(a1==null?"":a1,a0),a3=C.ahj(a5,a0)
if(a2==null||a3==null)return!1
w=a2.c
v=w.length
u=a3.c
if(v!==u.length||a2.b!==a3.b)return!1
if(a2.d!==a3.d||a2.e!==a3.e||a2.f!==a3.f||a2.r!==a3.r)return!1
t=a4.cx
if(t==null)t=A.X
if(t.length!==v)return!1
s=B.a([],x.g)
for(v=t.length,r=a4.r,q=B.S(r).k("Z<1>"),p=0;p<t.length;t.length===v||(0,B.M)(t),++p){o=B.p_(new B.Z(r,new C.fIv(t[p]),q))
if(o==null)return!1
s.push(o)}for(v=w.length,n=0;n<v;++n){m=w[n]
l=u[n]
if(m.a!==l.a||m.f!==l.f||m.r!==l.r||m.w!==l.w||m.x!==l.x)return!1
if(m.d.length!==l.d.length)return!1}if(!a6)return!0
for(v=x.fR,r=v.k("J.E"),q=x.L,n=0;n<w.length;++n){m=w[n]
l=u[n]
k=B.a([new B.z(m.b,l.b),new B.z(m.c,l.c)],q)
for(j=m.d,i=l.d,h=0;h<j.length;++h)k.push(new B.z(j[h],i[h]))
k.push(new B.z(m.e,l.e))
g=B.C(new B.Z(k,new C.fIw(),v),r)
A.d.aV(g,new C.fIx())
if(g.length===0)continue
f=new C.fIy(g)
e=s[n]
for(k=e.z,j=k.length,p=0;p<k.length;k.length===j||(0,B.M)(k),++p){d=k[p]
i=d.r
if(i.length!==0)d.r=f.$1(i)}e.c=f.$1(e.c)}if(A.a.i(a4.b)===A.a.i(a2.a)&&A.a.i(a3.a).length!==0)a4.b=A.a.i(a3.a)
a4.CW=a5
return!0},
iau(d){var w=d.toLowerCase(),v=B.af("\\b(fit|fits|fitting|overflow|overflowing|reframe|inside|too big|out of the|going under|under the slide|below the slide)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.aHD
v=B.af("\\b(smaller|shrink|reduce|decrease|make .{0,20}small|less big)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.e5u
v=B.af("\\b(bigger|larger|increase|enlarge|grow|make .{0,20}big)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.e5v
return null},
hm3(d,e,f,g){var w,v,u,t=d.e,s=d.f,r=Math.max(1,A.k.bm(t*f/(e*0.55)))
for(t=d.r.split("\n"),w=t.length,v=0,u=0;u<w;++u)v+=Math.max(1,A.k.dk(t[u].length/r))
return v*e*1.3<=s*g+0.5&&d.d+d.f<=1.001},
iae(a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a0.r,d=e.length
if(d===0)return!1
e=a3?e:B.a([e[A.o.E(a1,0,d-1)]],x.g)
w=a0.d===D.on
v=w?540:960
u=w?960:540
for(d=e.length,t=a2.a,s=!1,r=0;r<e.length;e.length===d||(0,B.M)(e),++r)for(q=e[r].z,p=q.length,o=0;o<q.length;q.length===p||(0,B.M)(q),++o){n=q[o]
if(n.b!==D.cQ)continue
m=n.w
l=n.c
k=n.d
switch(t){case 0:n.w=A.k.E(m*0.85,10,120)
break
case 1:j=A.k.E(m*1.15,10,120)
if(C.hm3(n,j,v,u))n.w=j
break
case 2:i=m
h=0
for(;;){g=!1
if(!C.hm3(n,i,v,u))if(n.w>10){f=h+1
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
iac(d,e){var w,v,u,t,s,r,q,p,o=d.b,n=C.ahj(o,"colorful")
if(n==null)throw B.W("That earlier version could not be read.")
w=B.aX(x.Q)
for(v=d.c,u=v.length,t=0;t<v.length;v.length===u||(0,B.M)(v),++t){s=v[t]
for(r=0;r<6;++r){q=D.a3N[r]
if(q.b===s)w.M(0,q)}}v=C.h4m(e)
u=C.h4n(e)
p=C.hpp(n,D.a4Y,null,w,v,n.d,n.e,n.f,n.r,u)
p.CW=o
o=p.r
u=B.S(o).k("N<1,n>")
o=B.C(new B.N(o,new C.fIr(),u),u.k("ak.E"))
p.cx=o
o=w.$ti.k("jY<cr.E,n>")
o=B.C(new B.jY(w,new C.fIs(),o),o.k("J.E"))
p.cy=o
p.ay=w.q(0,D.St)
return p},
ie1(d,e,f){return B.bT(A.K,null,new C.fQN(f,e),d,!0,!0,!0,null,!1,!1,x.I)},
hQA(){var w,v,u,t=1000*Date.now()&2147483647,s=new B.eb()
s.d5(t)
w=D.cF4[s.au(10)]
v=new C.ehB(s)
u=x.N
return new C.ehA(w,s.au(4),J.fr(v.$1$2(D.d4Z,1,x.ff)),w.r[s.au(3)],v.$1$2(D.dlJ,2+s.au(2),u),v.$1$2(D.det,2,u),v.$1$2(D.doS,4,x.fP),t)},
hSd(a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g="lux_frame",f="goldframe",e="lux_emblem",d=a5.a,a0=d.c,a1=new B.eb()
a1.d5(a5.w+a3*13)
w=new C.fcR(a4)
v=new C.fcT(a4,d)
u=new C.fcS(w,a5,a0,d)
for(t=a2.length,s=d.f,r=d.d,q=0;q<a2.length;a2.length===t||(0,B.M)(a2),++q){p=a2[q]
if(p.b===D.cQ){o=p.fx
if(o==="title"){p.Q=r
p.fy="shimmer@"+A.a.aZ(A.o.fW(r,16),8,"0").toUpperCase()}else if(o==="sub"||o==="body")p.Q=s}if(p.fx==="bar")p.fy="shimmer@"+A.a.aZ(A.o.fW(r,16),8,"0").toUpperCase()}t=a5.e
n=t[A.o.F(a3,t.length)]
if(n==="spotlight")A.d.c8(a2,0,w.$8(D.eQ,0.1+a1.aj()*0.45,0.05+a1.aj()*0.3,0.45,0.75,C.a1Q(a0,52),"lux_spot",a5.wF(0,"spotlight")))
else A.d.c8(a2,0,w.$8(D.bg,0,0,1,1,0,"lux_back",a5.wF(0,n)))
m=t[(a3+1)%t.length]
t=a3&1
if(t===1&&m!==n&&m!=="spotlight")A.d.c8(a2,1,w.$8(D.bg,0,0,1,1,0,"lux_back2",a5.aFt(0,m,r)))
switch(a5.b){case 0:a2.push(w.$12$anim$delay$stroke$strokeWidth(D.bg,0.022,0.038,0.956,0.924,0,g,a5.wF(0,f),D.dh,150,C.a1Q(a0,176),1.6))
a2.push(u.$4(0.022,0.038,"lux_c1",300))
a2.push(u.$4(0.978,0.038,"lux_c2",380))
a2.push(u.$4(0.022,0.962,"lux_c3",460))
a2.push(u.$4(0.978,0.962,"lux_c4",540))
break
case 1:a2.push(w.$12$anim$delay$stroke$strokeWidth(D.bg,0.018,0.032,0.964,0.936,0,g,a5.wF(0,f),D.dh,120,C.a1Q(a0,200),2))
a2.push(w.$12$anim$delay$stroke$strokeWidth(D.bg,0.034,0.06,0.932,0.88,0,"lux_frame2","",D.dh,260,C.a1Q(a0,112),0.8))
a2.push(u.$5$size(0.5,0.032,"lux_c1",420,0.026))
a2.push(u.$5$size(0.5,0.968,"lux_c2",480,0.026))
break
case 2:a2.push(w.$10$anim$delay(D.bg,0,0,1,1,0,"lux_filigree",a5.wF(0,"filigree"),D.dh,200))
break
default:a2.push(w.$10$anim$delay(D.bg,0.08,0.06,0.84,0.004,C.a1Q(a0,208),"lux_rule",a5.aFt(0,"shimmer",r),D.uK,150))
a2.push(w.$10$anim$delay(D.bg,0.08,0.936,0.84,0.004,C.a1Q(a0,144),"lux_rule2","",D.Im,220))}l=!A.d.b3(a2,new C.fcQ())||a3===0
s=a5.d
if(l)a2.push(v.$9(s,0.44,0.06,0.12,0.14,40,e,a5.wF(0,"crest"),350))
else{o=a1.he()?0.035:0.905
a2.push(v.$9(s,o,0.055,0.06,0.09,22,e,a5.wF(0,"crest"),350))}s=a5.c
t=t===0
o=t?0.3:0.62
k=C.a1Q(r,242)
j=a5.wF(0,"orbit")
i=s===D.bg?0.785:0
a2.push(w.$13$anim$delay$rotation$stroke$strokeWidth(s,o-0.008,0.024,0.016,0.028,k,"lux_g1",j,D.qs,600,i,4294967295,1))
t=t?0.66:0.34
a2.push(w.$10$anim$delay(D.eQ,t-0.007,0.9495,0.014,0.025,C.a1Q(r,242),"lux_g2",a5.wF(0,"orbit"),D.qs,700))
for(t=a5.f,s=t.length,q=0;q<t.length;t.length===s||(0,B.M)(t),++q){h=t[q]
a2.push(w.$8(D.bg,0,0,1,1,0,"lux_"+h,h+"@"+A.a.aZ(A.o.fW(a0,16),8,"0").toUpperCase()))}if((A.d.gI(d.b).a&16777215)<8421504)a2.push(w.$8(D.bg,0,0,1,1,0,"lux_velvet",a5.wF(0,"velvet")))},
nR:function nR(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fIt:function fIt(d){this.a=d},
fIu:function fIu(){},
w5:function w5(d,e){this.a=d
this.b=e},
a8a:function a8a(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
arw:function arw(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
fIm:function fIm(){},
fIp:function fIp(){},
fGl:function fGl(){},
fGm:function fGm(){},
fGn:function fGn(d){this.a=d},
fAK:function fAK(){},
fAN:function fAN(d,e,f){this.a=d
this.b=e
this.c=f},
fAM:function fAM(d,e){this.a=d
this.b=e},
fAL:function fAL(d,e){this.a=d
this.b=e},
fAJ:function fAJ(d){this.a=d},
fDa:function fDa(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fD8:function fD8(d){this.a=d},
fD9:function fD9(d){this.a=d},
fgo:function fgo(){},
fgp:function fgp(){},
fgq:function fgq(){},
fRA:function fRA(){},
a0B:function a0B(d){this.a=d},
aHN:function aHN(d,e,f,g,h){var _=this
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
f_H:function f_H(d,e,f){this.a=d
this.b=e
this.c=f},
f_I:function f_I(d,e){this.a=d
this.b=e},
f_F:function f_F(d,e){this.a=d
this.b=e},
f_G:function f_G(d,e){this.a=d
this.b=e},
f_E:function f_E(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
f_z:function f_z(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
f_D:function f_D(d,e){this.a=d
this.b=e},
f_y:function f_y(d,e){this.a=d
this.b=e},
f_C:function f_C(d,e){this.a=d
this.b=e},
f_x:function f_x(d,e){this.a=d
this.b=e},
f_A:function f_A(d){this.a=d},
f_B:function f_B(d,e){this.a=d
this.b=e},
f_n:function f_n(d,e){this.a=d
this.b=e},
f_o:function f_o(d,e){this.a=d
this.b=e},
f_q:function f_q(d){this.a=d},
f_r:function f_r(d){this.a=d},
f_s:function f_s(d){this.a=d},
f_t:function f_t(d){this.a=d},
f_p:function f_p(d,e){this.a=d
this.b=e},
f_u:function f_u(d,e){this.a=d
this.b=e},
f_V:function f_V(d){this.a=d},
f_W:function f_W(d){this.a=d},
f_U:function f_U(d){this.a=d},
f_X:function f_X(d){this.a=d},
f_T:function f_T(d){this.a=d},
f_Z:function f_Z(d){this.a=d},
f_S:function f_S(d,e){this.a=d
this.b=e},
f0_:function f0_(d){this.a=d},
f_R:function f_R(d,e){this.a=d
this.b=e},
f00:function f00(d){this.a=d},
f_Q:function f_Q(d){this.a=d},
f01:function f01(d){this.a=d},
f_P:function f_P(d,e){this.a=d
this.b=e},
f02:function f02(d){this.a=d},
f_O:function f_O(d,e){this.a=d
this.b=e},
f03:function f03(d){this.a=d},
f_N:function f_N(d){this.a=d},
f04:function f04(d,e){this.a=d
this.b=e},
f_M:function f_M(d,e){this.a=d
this.b=e},
f05:function f05(d){this.a=d},
f_Y:function f_Y(d){this.a=d},
f_L:function f_L(d,e){this.a=d
this.b=e},
f_v:function f_v(d,e,f){this.a=d
this.b=e
this.c=f},
f_w:function f_w(d,e,f){this.a=d
this.b=e
this.c=f},
f_K:function f_K(d,e){this.a=d
this.b=e},
f_J:function f_J(d,e){this.a=d
this.b=e},
fRz:function fRz(d,e){this.a=d
this.b=e},
a0A:function a0A(d,e,f){this.c=d
this.d=e
this.a=f},
aHM:function aHM(d){var _=this
_.d=d
_.e=!1
_.f=""
_.c=_.a=_.r=null},
f_g:function f_g(d){this.a=d},
f_h:function f_h(d){this.a=d},
f_i:function f_i(d,e){this.a=d
this.b=e},
f_j:function f_j(d){this.a=d},
f_k:function f_k(d){this.a=d},
f_f:function f_f(d,e){this.a=d
this.b=e},
f_l:function f_l(d,e){this.a=d
this.b=e},
f_m:function f_m(d,e){this.a=d
this.b=e},
fne:function fne(d){this.a=d},
b1x:function b1x(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aEl:function aEl(d,e,f){this.c=d
this.d=e
this.a=f},
bkq:function bkq(d,e){var _=this
_.d=$
_.bx$=d
_.aa$=e
_.c=_.a=null},
ehD:function ehD(d){this.a=d},
ehC:function ehC(){},
bi3:function bi3(d,e){this.b=d
this.a=e},
fIv:function fIv(d){this.a=d},
fIw:function fIw(){},
fIx:function fIx(){},
fIy:function fIy(d){this.a=d},
as3:function as3(d,e){this.a=d
this.b=e},
fIr:function fIr(){},
fIs:function fIs(){},
fQN:function fQN(d,e){this.a=d
this.b=e},
ZY:function ZY(d,e,f){this.c=d
this.d=e
this.a=f},
aBR:function aBR(){var _=this
_.e=_.d=$
_.f=!1
_.c=_.a=_.r=null},
dmh:function dmh(d){this.a=d},
dmi:function dmi(d){this.a=d},
dmj:function dmj(d,e){this.a=d
this.b=e},
dmm:function dmm(d){this.a=d},
dmn:function dmn(d,e){this.a=d
this.b=e},
dml:function dml(d,e){this.a=d
this.b=e},
dmo:function dmo(d){this.a=d},
dmk:function dmk(d,e){this.a=d
this.b=e},
bsS:function bsS(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ehA:function ehA(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
ehB:function ehB(d){this.a=d},
fcR:function fcR(d){this.a=d},
fcT:function fcT(d,e){this.a=d
this.b=e},
fcS:function fcS(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fcQ:function fcQ(){},
aMf:function aMf(){},
h3a(d){var w,v,u
try{w=A.T.aN(0,d,null)
if(x.f.b(w)){v=B.vZ(B.a2(w,x.N,x.z))
return v}}catch(u){}return null},
b1t:function b1t(d,e,f){this.c=d
this.d=e
this.a=f},
bm_:function bm_(d,e){this.c=d
this.a=e},
i6v(d){return A.d.dM(D.Hq,new C.fBR(d),new C.fBS())},
i6w(d){var w,v,u,t=A.a.i(d)
if(!A.a.a0(t,"class_"))return null
w=A.a.b4(t,6)
if(w.length===0)return null
v=new B.Z(D.Hq,new C.fBT(w),x.b4)
if(!v.gaf(0).C())return null
u=v.gI(0)
return new C.jL("class_"+u.a,u.b,u.d,u.r,u.w,u.e,u.f)},
ll:function ll(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fBR:function fBR(d){this.a=d},
fBS:function fBS(){},
fBT:function fBT(d){this.a=d},
mZ(d,e,f,g,h){return new C.ER(f,g,d)},
hTn(d){var w=d.z,v=B.S(w).k("Z<1>")
w=B.C(new B.Z(w,new C.feQ(),v),v.k("J.E"))
d.z=w
d.x=""},
dy(d,e){var w=$.KD
e.db="__design__:"+(w.length===0?"layer":w)
A.d.c8(d.z,0,e)},
dz(d,e,f,g,h,i,j,k,l){return C.er(A.bi,!1,4279310375,A.aF,"",d,24,A.bp,A.a7,"",e,"design_"+C.cE(),null,"","",0,!1,"",f,g,h,i,"",0,0,"",D.cl,D.f8,j,k,l)},
hpc(d,e){var w
C.hTn(d)
w=A.d.dM($.bEi(),new C.fzH(e),new C.fzI())
$.KD=w.a
d.x=w.a;++d.y
try{w.by(d)}finally{$.KD=""}d.z=B.bo(d.z,!0,x.F)},
ER:function ER(d,e,f){this.a=d
this.b=e
this.e=f},
feQ:function feQ(){},
fHY:function fHY(){},
fHZ:function fHZ(){},
fI_:function fI_(){},
fIa:function fIa(){},
fIf:function fIf(){},
fIg:function fIg(){},
fIh:function fIh(){},
fIi:function fIi(){},
fIj:function fIj(){},
fIk:function fIk(){},
fIl:function fIl(){},
fI0:function fI0(){},
fI1:function fI1(){},
fI2:function fI2(){},
fI3:function fI3(){},
fI4:function fI4(){},
fI5:function fI5(){},
fI6:function fI6(){},
fI7:function fI7(){},
fI8:function fI8(){},
fI9:function fI9(){},
fIb:function fIb(){},
fIc:function fIc(){},
fId:function fId(){},
fIe:function fIe(){},
fzH:function fzH(d){this.a=d},
fzI:function fzI(){},
iY(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){return C.er(d,e,f,g,"",4280640491,h,i,j,"",k,l,null,"","",0,!1,"",0,D.bg,4280172719,2,m,n,0,"",o,D.cQ,p,q,r)},
D7(d,e,f,g,h,i,j,k,l){return C.er(A.bi,!1,4279310375,A.aF,"",d,24,A.bp,A.a7,"",e,f,null,"","",0,!1,"",0,g,h,i,"",0,0,"",D.cl,D.f8,j,k,l)},
bD0(){var w=new B.U(Date.now(),0,!1)
return A.iw[B.bJ(w)-1]+" "+B.bV(w)+", "+B.bC(w)},
eu:function eu(d,e,f){this.a=d
this.b=e
this.c=f},
bAq(d){return new B.iS((A.o.aC(d,24)&255)/255,(A.o.aC(d,16)&255)/255,(A.o.aC(d,8)&255)/255,(d&255)/255)},
hYA(d){var w,v
if(d==null||!A.a.a0(d,"data:image"))return null
try{w=B.anc(A.cF.aM(A.d.gal(d.split(","))))
return w}catch(v){return null}},
hYE(d){var w=d.r
if(!d.cy)return w
return new B.N(B.a(w.split("\n"),x.s),new C.fmN(),x.dv).aG(0,"\n")},
hYD(d){switch(d.a){case 2:return A.nA
case 1:case 5:return A.f8b
default:return A.TW}},
hYx(d){switch(d.a){case 2:return A.vo
case 1:case 5:return A.VN
default:return A.ab1}},
hYB(d,e){var w,v=null,u=d.ay,t=A.o.aC(u,24),s=A.o.aC(d.ch,24),r=(t&255)===0?v:C.bAq(u),q=(s&255)===0?v:C.bAq(d.ch),p=A.k.E(d.CW*(e/960),0.35,6)
u=q==null
if(u)w=v
else{t=new B.nz(q,p,A.kT)
w=new B.pH(t,t,t,t)}switch(d.ax.a){case 1:return B.lC(v,v,v,new B.kH(r,w,v,A.ach,v),v,v,v,v)
case 4:return u?new B.fR(v,v,v):B.x9(B.lC(v,v,q,v,p+0.4,v,v,v))
default:return B.lC(v,v,v,new B.kH(r,w,B.vA(4),A.hN,v),v,v,v,v)}},
hYz(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=d.c*e,j=d.d*a0,i=d.b,h=i===D.f8?0.4:12,g=A.k.E(d.e*e,h,e),f=A.k.E(d.f*a0,h,a0)
switch(i.a){case 0:w=C.hYx(d.as)
v=A.k.E(d.w*(e/960),3,96)
u=C.hYE(d)
t=C.bAq(d.Q)
s=d.x.a>=700?A.ep:A.vZ
r=d.y===A.cE?A.yp:A.akX
q=d.z
p=new B.Dh(w,l,l,B.fb(u,l,l,l,B.hb(l,t,1===q.a?A.aQN:A.aQM,l,l,l,l,l,l,A.dw,l,l,v,r,s,l,!0,l,l,l,l),C.hYD(d.as)))
break
case 1:case 4:o=C.hYA(d.at)
n=i===D.lJ&&d.c===0&&d.d===0&&d.e===1&&d.f===1
if(o==null){w=d.db
if(w.length===0)w="Image"
p=B.x9(B.fb(w,l,l,l,B.hb(l,A.rO,l,l,l,l,l,l,l,A.dw,l,l,10,l,l,l,!0,l,l,l,l),l))}else p=new B.I5(o,n?A.acd:A.Wa,l,l)
break
case 3:w=new B.nz(A.II,1,A.kT)
u=B.vA(6)
t=d.db
if(t.length===0)t="PDF document"
p=B.lC(A.vo,B.fb(t,l,l,l,B.hb(l,D.ej8,l,l,l,l,l,l,l,A.dw,l,l,11,l,A.ep,l,!0,l,l,l,l),A.nA),l,new B.kH(E.aJ1,new B.pH(w,w,w,w),u,A.hN,l),l,l,l,l)
break
case 2:p=C.hYB(d,e)
break
case 5:p=C.hYy(d)
break
default:p=l}w=d.cx
if(w!==0)p=B.hgO(-w,p)
w=i===D.cQ
if(w){m=A.o.aC(d.Q,24)&255
if(m<255)p=new B.asP(m/255,p)}if(w)return new F.wa(k,l,j,l,new B.St(new B.kG(g,g,f,1/0),p))
if(i===D.lf){i=new B.nz(A.II,1,A.kT)
i=B.lC(A.vo,p,l,new B.kH(A.pk,new B.pH(i,i,i,i),B.vA(4),A.hN,l),l,l,D.bAs,l)}else i=p
return new F.wa(k,l,j,l,new B.fR(g,f,i))},
hYC(d,e,f,g){var w,v=null,u=C.bAq(d.e),t=d.f
t=B.a([F.hfq(t!=null?B.lC(v,v,v,new B.kH(v,v,v,A.hN,new B.aWX(E.VP,A.aaW,B.a([u,C.bAq(t)],x.cR),v)),v,v,v,v):B.lC(v,v,u,v,v,v,v,v))],x.eR)
w=d.z
A.d.v(t,new B.N(w,new C.fmM(f,g),B.S(w).k("N<1,fg>")))
return F.cut(t)},
h4p(d){var w=0,v=B.j(x.E),u,t,s,r,q,p,o,n
var $async$h4p=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:n=B.a4s(null,"NGMY Slides",d.b)
for(t=d.r,s=t.length,r=n.c,q=0;q<t.length;t.length===s||(0,B.M)(t),++q){p=t[q]
o=new B.WI(A.wC,A.IF,D.bBB,null,null,null,!1,null)
o=new B.C0(o,new C.fIE(607,787,p,d))
o.MP(n,null)
r.push(o)}u=n.ju(0)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$h4p,v)},
hYy(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=C.h3a(d.r),k=l==null,j=k?m:l.b,i=A.a.i(j==null?"":j),h=k?m:l.gak3()
if(h==null)h=A.ayt
j=B.tD(4279308564)
w=B.vA(18)
v=new B.nz(B.tD(4287531653),3,A.kT)
u=i.length===0?"My links":i
u=B.a([B.x9(B.fb(u,m,m,m,B.hb(m,A.pk,m,m,m,m,m,m,m,A.dw,m,m,12,m,A.ep,m,!0,m,m,m,m),m))],x.eR)
t=k?m:l.c
if(A.a.i(t==null?"":t).length!==0)u.push(B.x9(B.fb(A.a.i(l.c),m,m,m,D.ffI,m)))
u.push(new B.fR(m,8,m))
for(t=B.d1(h,0,B.dB(8,"count",x.S),B.S(h).c),s=t.$ti,t=new B.bS(t,t.gL(0),s.k("bS<ak.E>")),s=s.k("ak.E");t.C();){r=t.d
if(r==null)r=s.a(r)
q=A.a.i(r.c)
p=B.tD(4280690220)
o=new B.a9w(8,8)
n=A.a.i(r.b)
u.push(new B.nS(D.buD,new C.ax5(new C.aio(q),B.lC(m,B.fb(n.length===0?A.a.i(r.c):n,m,m,m,D.fi2,A.nA),m,new B.kH(p,m,new B.aiP(o,o,o,o),A.hN,m),m,m,D.bAT,m))))}k=k?m:l.as
if(A.a.i(k==null?"":k).length!==0){k=A.a.i(l.as)
t=B.x9(B.fb(k,m,m,m,D.fhh,m))
u.push(new C.ax5(C.hxX(k),t))}return B.lC(m,B.z2(u,A.Mo,A.lH),m,new B.kH(j,new B.pH(v,v,v,v),w,A.hN,m),m,m,D.bvs,m)},
fmN:function fmN(){},
fmM:function fmM(d,e){this.a=d
this.b=e},
fIE:function fIE(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ah6(d){var w,v
for(w=0;w<32;++w){v=D.Hh[w]
if(v.a===d)return v}return null},
hjt(d){var w,v,u=A.a.cD(d,",")
if(!A.a.a0(d,"data:")||u<0)return null
try{w=A.cF.aM(A.a.b4(d,u+1))
return w}catch(v){return null}},
cZ(d,e){var w=d*374761393+e*668265263+1013904223&2147483647
w=(w^w>>>13)*1274126177&2147483647
return((w^w>>>16)&65535)/65535},
hso(d,e){return B.a3(d,!1).cg(B.e_(new C.fPc(e),!0,null,x.fB))},
hsn(d,e){return B.bT(A.K,null,new C.fPb(e),d,!0,!0,!0,null,!1,!1,x.fB)},
j2:function j2(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
EI:function EI(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
NF:function NF(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bjP:function bjP(d,e,f){var _=this
_.d=d
_.e=$
_.bx$=e
_.aa$=f
_.c=_.a=null},
dWX:function dWX(d){this.a=d},
dWW:function dWW(d,e,f){this.a=d
this.b=e
this.c=f},
dWV:function dWV(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
brq:function brq(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eZu:function eZu(d,e){this.a=d
this.b=e},
beX:function beX(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
b_n:function b_n(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cbw:function cbw(){},
cbx:function cbx(d){this.a=d},
cby:function cby(d,e,f){this.a=d
this.b=e
this.c=f},
cbz:function cbz(d,e,f){this.a=d
this.b=e
this.c=f},
fPc:function fPc(d){this.a=d},
Zv:function Zv(d,e){this.c=d
this.a=e},
aAe:function aAe(){var _=this
_.f=_.e=_.d=$
_.r=0
_.c=_.a=null},
dbz:function dbz(d,e,f){this.a=d
this.b=e
this.c=f},
dbE:function dbE(d){this.a=d},
dbF:function dbF(d){this.a=d},
dbD:function dbD(d){this.a=d},
dbG:function dbG(d){this.a=d},
dbC:function dbC(d,e){this.a=d
this.b=e},
dbH:function dbH(d){this.a=d},
dbB:function dbB(d){this.a=d},
dbI:function dbI(d){this.a=d},
dbA:function dbA(d,e){this.a=d
this.b=e},
dbJ:function dbJ(d,e){this.a=d
this.b=e},
fPb:function fPb(d){this.a=d},
fPa:function fPa(d){this.a=d},
fP9:function fP9(d,e,f){this.a=d
this.b=e
this.c=f},
fP8:function fP8(d,e){this.a=d
this.b=e},
aLM:function aLM(){},
ied(d){return B.bT(A.K,null,new C.fRy(),d,!0,!0,!0,null,!1,!1,x.N)},
fRy:function fRy(){},
ZQ:function ZQ(d){this.a=d},
bgr:function bgr(d){this.d=d
this.c=this.a=null},
dik:function dik(d){this.a=d},
dil:function dil(d,e){this.a=d
this.b=e},
dim:function dim(d){this.a=d},
hUX(d){var w,v=d.split("@")
if(v.length>1){w=B.ca(v[1],16)
if(w!=null)return B.b1(w)}return D.xP},
i8q(d){var w,v=A.d.gI(d.split("@"))
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
i8p(d,e,f,g){var w,v,u,t,s,r=null,q=A.d.gI(d.split("@")),p=C.hUX(d)
switch(q){case"shimmer":return B.nW(A.KN,g,new C.fFi(p,A.k.F(e,6.283185307179586)/6.283185307179586*1.8-0.4))
case"golddust":return new B.an(A.a_,r,A.b1,A.t,B.a([g,B.e2(B.b4(r,r,r,new C.bfN(e,f,p,r),A.ax),!0,r)],x.p),r)
case"spotlight":w=Math.sin(e)
v=Math.cos(e*0.7)
u=Math.sin(e*2)
t=Math.sin(e*3)
return B.dJ(B.ea(A.A,B.d6(F.bU0(g,B.Tv(40,40,r)),0.75+t*0.25),1+u*0.08,r,r),new B.t(w*60,v*26))
case"goldframe":return new B.an(A.a_,r,A.b1,A.t,B.a([g,B.e2(B.b4(r,r,r,new C.bfv(e,p,r),A.ax),!0,r)],x.p),r)
case"twinkle":s=Math.sin(e)
w=A.k.E(0.55+s*0.45,0,1)
return B.d6(B.eI(A.A,e*0.5,B.ea(A.A,g,0.8+(s+1)*0.18,r,r),r),w)
case"orbit":w=Math.cos(e)
v=Math.sin(e)
u=B.dk()
t=u.a
t.$flags&2&&B.aj(t)
t[11]=0.002
u.fB(e)
u.mO(Math.sin(e)*0.3)
return B.dJ(B.fo(A.A,g,r,u,!0),new B.t(w*22,v*12))
case"rays":return new B.an(A.a_,r,A.b1,A.t,B.a([B.e2(B.b4(r,r,r,new C.boh(e,f,p,r),A.ax),!0,r),g],x.p),r)
case"bokeh":return new B.an(A.a_,r,A.b1,A.t,B.a([B.e2(B.b4(r,r,r,new C.bao(e,f,p,r),A.ax),!0,r),g],x.p),r)
case"aurora":return new B.an(A.a_,r,A.b1,A.t,B.a([B.e2(B.b4(r,r,r,new C.ba2(e,f,p,r),A.ax),!0,r),g],x.p),r)
case"velvet":return new B.an(A.a_,r,A.b1,A.t,B.a([g,B.e2(B.b4(r,r,r,new C.bvc(e,p,r),A.ax),!0,r)],x.p),r)
case"sparkle":return new B.an(A.a_,r,A.b1,A.t,B.a([g,B.e2(B.b4(r,r,r,new C.bsd(e,f,p,r),A.ax),!0,r)],x.p),r)
case"sheen":return new B.an(A.a_,r,A.b1,A.t,B.a([g,B.e2(B.b4(r,r,r,new C.brm(e,p,r),A.ax),!0,r)],x.p),r)
case"filigree":return new B.an(A.a_,r,A.b1,A.t,B.a([g,B.e2(B.b4(r,r,r,new C.beQ(e,p,r),A.ax),!0,r)],x.p),r)
case"crest":s=Math.sin(e)
return new B.an(A.A,r,A.aa,A.f,B.a([B.bU(0,B.e2(B.ea(A.A,B.c1(r,new B.o(r,r,r,r,r,new B.c0(A.A,0.5,A.x,r,0,B.a([p.j(0.35+s*0.12),p.j(0)],x.O),r,r),A.a5),A.bf),1.6+s*0.15,r,r),!0,r),0,0,0),B.eI(A.A,s*0.06,B.ea(A.A,g,1+s*0.05,r,r),r)],x.p),r)}return g},
fFi:function fFi(d,e){this.a=d
this.b=e},
bfN:function bfN(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bfv:function bfv(d,e,f){this.b=d
this.c=e
this.a=f},
boh:function boh(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bao:function bao(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
ba2:function ba2(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bvc:function bvc(d,e,f){this.b=d
this.c=e
this.a=f},
bsd:function bsd(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
brm:function brm(d,e,f){this.b=d
this.c=e
this.a=f},
beQ:function beQ(d,e,f){this.b=d
this.d=e
this.a=f},
dbg:function dbg(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
xJ:function xJ(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
fFl(d){var w=d.db
return A.a.a0(w,"marriage_sign_")&&!A.a.a0(w,"marriage_sign_placed_")&&d.b!==D.lf},
i8v(d,e){var w,v,u,t,s,r,q,p,o,n,m,l="marriage_locked_box_",k="marriage_field_",j=B.a([],x.u)
for(w=d.z,v=w.length,u=0;u<w.length;w.length===v||(0,B.M)(w),++u){t=w[u]
if(A.a.a0(t.db,l))continue
if(Math.abs(t.d+t.f*0.5-e)<0.03)j.push(t)}if(j.length<2)return
A.d.aV(j,new C.fFm())
s=A.d.gI(j).c
for(w=j.length,u=0;u<j.length;j.length===w||(0,B.M)(j),++u){t=j[u]
r=s-t.c
if(Math.abs(r)>0.0001){t.c=s
v=t.db
if(A.a.a0(v,k)){q=A.d.gI(B.aQC(v,k,"",0).split(":"))
for(v=d.z,p=v.length,o=l+q,n=0;n<p;++n){m=v[n]
if(m.db===o)m.c+=r}}}s+=t.e+0.006}},
i8u(d,e){var w,v,u,t,s,r=d.db
if(!A.a.a0(r,"marriage_field_"))return
w=r.split(":")
r=w.length
if(r>1){v=B.d7(w[1])
u=v==null?d.e:v}else u=d.e
t=r>2?B.d7(w[2]):null
r=A.a.i(e).length
if(r===0){d.e=u
if(t!=null)d.w=t
return}if(t!=null){s=r*(t*0.001)+0.028
if(s<=u){d.w=t
d.e=A.k.E(s,0.06,u)}else{d.w=A.k.E((u-0.028)/(r*0.001),12,t)
d.e=u}return}d.e=A.k.E(r*(d.w*0.001)+0.028,0.06,u)},
agL(d,a0,a1,a2,a3,a4){var w=0,v=B.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$agL=B.e(function(a5,a6){if(a5===1)return B.f(a6,v)
for(;;)switch(w){case 0:f=B.S(a4).k("Z<1>")
e=B.C(new B.Z(a4,new C.fxI(),f),f.k("J.E"))
w=!a2&&e.length!==0?3:4
break
case 3:w=5
return B.b(B.bT(A.dJ,null,new C.fxJ(e),d,!0,!0,!1,A.lK,!1,!1,x.N),$async$agL)
case 5:t=a6
if(t==="continue"){a1.$1(A.d.gI(e).hI())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.h52(d),$async$agL)
case 6:s=a6
if(s==null||d.e==null){w=1
break}r=A.a.i(a3==null?"":a3)
w=r.length!==0?7:9
break
case 7:a6=r
w=8
break
case 9:w=10
return B.b(B.Lp(d,"Search states\u2026","",A.kh,"Choose state"),$async$agL)
case 10:case 8:q=a6
if(q==null||d.e==null){w=1
break}p=C.h3X(s)
if(p==null)p=A.d.gI(D.Ri)
f=C.cE()
o=A.a.i(q)
if(o.length===0)o=null
n=C.cE()
m=p.e
l=C.fFn(p.d)
k=x.u
j=B.a([C.er(A.bi,!1,4279310375,A.aF,"marriage_locked_bg",4280640491,24,A.bp,A.a7,"",1,C.cE(),l,"","",0,!1,"",0,D.bg,4280172719,2,"",0,0,"",D.cl,D.lJ,1,0,0)],k)
i=p.f
h=x.F
k=B.C(B.a([C.CW(i,0.016,D.lg,4291404327,0.8,"ring_jewel",0.028,0.42544,0.008),C.CW(0,0.058,D.eQ,4291404327,2.4,"ring_l",0.058,0.39064,0.026),C.CW(0,0.058,D.eQ,4291404327,2.4,"ring_r",0.058,0.41963999999999996,0.026)],k),h)
k.push(C.KO("HATI YA NDOA",A.L,i,32,A.u,0.048,"title",0.78,0.11,0.086))
k.push(C.KO("Hati ya Makubaliano ya Ndoa",A.L,i,12,A.a7,0.018,"subtitle",0.78,0.11,0.134))
A.d.v(k,C.h0O(0.2,0.154,0.6,4291404327,i))
A.d.v(k,C.bzU("TAARIFA ZA WANANDOA",0.176,0.2,0.6,i))
A.d.v(k,C.a1r("Jina la Mume:","groom_name",0.11,0.218,0.78,11,i,""))
A.d.v(k,C.a1r("Jina la Mke:","bride_name",0.11,0.25,0.78,11,i,""))
A.d.v(k,C.a1r("Tarehe ya Ndoa:","tarehe",0.11,0.282,0.78,11,i,""))
A.d.v(k,C.a1r("Mahali:","bride_house",0.11,0.314,0.78,11,i,""))
A.d.v(k,C.bzU("TAMKO LA MAKUBALIANO",0.35,0.2,0.6,i))
k.push(C.CW(m,0.082,D.bg,4291404327,1.15,"intro_frame",0.792,0.104,0.384))
g=C.cE()
k.push(C.er(A.bi,!1,i,A.aF,"marriage_field_utangulizi:"+A.k.ac(0.78,3),4280640491,9.5,A.bp,A.cw,"",0.074,g,null,"","",0,!1,"",0,D.bg,4280172719,2,y.O,0,0,"",D.cl,D.cQ,0.78,0.11,0.388))
A.d.v(k,C.h0O(0.22,0.47,0.56,4291404327,i))
A.d.v(k,C.bzU("MASHAHIDI",0.49,0.26,0.48,i))
A.d.v(k,C.hlt("Shahidi wa Mume",0.11,0.528,0.37,i,4294967295))
A.d.v(k,C.hlt("Shahidi wa Mke",0.52,0.528,0.37,i,4294967295))
A.d.v(k,C.a1r("Jina:","witness_mume_1_name",0.11,0.564,0.37,10,i,""))
A.d.v(k,C.a1r("Jina:","witness_mke_1_name",0.52,0.564,0.37,10,i,""))
A.d.v(k,C.bzT("witness_mume_1",0.11,0.596,0.37,i))
A.d.v(k,C.bzT("witness_mke_1",0.52,0.596,0.37,i))
A.d.v(k,C.bzU("SAHIHI ZA WANANDOA",0.64,0.2,0.6,i))
k.push(C.KO("Mume",A.L,i,11,A.u,0.016,"mume_h",0.37,0.11,0.678))
k.push(C.KO("Mke",A.L,i,11,A.u,0.016,"mke_h",0.37,0.52,0.678))
A.d.v(k,C.bzT("mchumba_mume",0.11,0.7,0.37,i))
A.d.v(k,C.bzT("mchumba_mke",0.52,0.7,0.37,i))
A.d.v(k,C.bzU("MWANDISHI / MSIMAMIZI",0.744,0.18,0.64,i))
A.d.v(k,C.a1r("Jina:","mwandishi",0.11,0.784,0.26,10,i,""))
A.d.v(k,C.bzT("witness_mume_2",0.38,0.784,0.26,i))
A.d.v(k,C.a1r("Tarehe:","mchumba_mume_tarehe",0.65,0.784,0.24,10,i,""))
h=B.C(C.h0O(0.22,0.83,0.56,4291404327,i),h)
h.push(C.KO("NGMY",A.L,i,13,A.u,0.022,"ngmy_mark",0.6,0.2,0.846))
h.push(C.KO("Nakala ya Hati",A.L,4291404327,9,A.a7,0.016,"ngmy_sub",0.6,0.2,0.866))
A.d.v(k,h)
A.d.v(j,k)
a0.$1(C.BW(null,null,null,null,D.on,5,!1,"marriage_agreement",null,null,null,null,f,null,!1,o,p.b,null,null,B.a([C.rD(m,null,0,0,j,n,D.qr,"","","Hati ya Ndoa",D.dh)],x.g),"marriage_"+p.a,null,!1,null))
case 1:return B.h(u,v)}})
return B.i($async$agL,v)},
fFm:function fFm(){},
fxI:function fxI(){},
fxJ:function fxJ(d){this.a=d},
fxG:function fxG(d){this.a=d},
fxH:function fxH(d){this.a=d},
hY1(d){var w=d.a
if(1===w)return"underline"
if(4===w)return"lineThrough"
return"none"},
hY0(d){var w=d==null?null:J.k(d)
switch(w==null?"none":w){case"underline":return A.mW
case"lineThrough":return A.wM
default:return A.aF}},
er(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){return new C.eM(o,a7,a9,b0,a8,n,a2,j,l,k,g,f,d,p,w,i,a0,a1,v,e,h,s,a6,a3,r,q,m,u,a5,t,a4)},
hnz(d){var w,v,u=J.k(d==null?"fade":d)
for(w=0;w<22;++w){v=D.R2[w]
if(v.b===u)return v}return D.dh},
hUk(d){var w,v,u=J.k(d==null?"text":d)
for(w=0;w<6;++w){v=D.cX5[w]
if(v.b===u)return v}return D.cQ},
i_S(d){var w,v,u=J.k(d==null?"rectangle":d)
for(w=0;w<7;++w){v=D.dmp[w]
if(v.b===u)return v}return D.bg},
rD(d,e,f,g,h,i,j,k,l,m,n){return new C.lO(i,m,k,j,d,e,n,g,l,f,h==null?B.a([],x.u):h)},
heb(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=d.h(0,"id")
l=J.k(l==null?"":l)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"notes")
v=J.k(v==null?"":v)
u=C.hWn(d.h(0,"layout"))
t=B.aK(d.h(0,"background"))
t=t==null?m:A.k.O(t)
if(t==null)t=4294967295
s=B.aK(d.h(0,"backgroundEnd"))
s=s==null?m:A.k.O(s)
r=C.hnz(d.h(0,"transition"))
q=B.aK(d.h(0,"durationSeconds"))
q=q==null?m:A.k.O(q)
if(q==null)q=0
p=d.h(0,"slideDesignId")
p=J.k(p==null?"":p)
o=B.aK(d.h(0,"designRevision"))
o=o==null?m:A.k.O(o)
if(o==null)o=0
n=x.c.a(d.h(0,"elements"))
if(n==null)n=m
else{n=J.dc(n,x.f)
n=B.cF(n,new C.cgW(),n.$ti.k("J.E"),x.F)
n=B.C(n,B.a6(n).k("J.E"))}return C.rD(t,s,o,q,n==null?B.a([],x.u):n,l,u,v,p,w,r)},
hWn(d){var w,v,u=J.k(d==null?"titleContent":d)
for(w=0;w<9;++w){v=D.aqd[w]
if(v.b===u)return v}return D.mR},
BW(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,a0,a1,a2,a3,a4){var w=a4==null?new B.U(Date.now(),0,!1):a4
return new C.i4(p,t,a1,h,i,w,a0==null?B.a([C.rD(4294967295,null,0,0,null,C.cE(),D.qr,"","","",D.dh)],x.g):a0,k,s,a2,a3,d,v,u,q,j,r,f,g,e,m,o,n,l)},
W9(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4="deckKind",a5=a6.h(0,"id")
a5=J.k(a5==null?"":a5)
w=a6.h(0,"name")
w=J.k(w==null?"Untitled Presentation":w)
v=a6.h(0,"themeId")
v=J.k(v==null?"office_blue":v)
u=C.hSt(a6.h(0,"aspectRatio"))
t=B.aK(a6.h(0,"autoAdvanceSeconds"))
t=t==null?a3:A.o.E(A.k.O(t),1,120)
if(t==null)t=5
s=a6.h(0,"updatedAt")
s=B.bi(J.k(s==null?"":s))
if(s==null)s=new B.U(Date.now(),0,!1)
r=a6.h(0,a4)
r=r==null?a3:J.k(r)
q=a6.h(0,"marriageState")
q=q==null?a3:J.k(q)
p=a6.h(0,"transferClaimCode")
p=p==null?a3:J.k(p)
if(J.A(a6.h(0,"transferReceived"),!0)){o=a6.h(0,a4)
o=C.kC(o==null?a3:J.k(o))}else o=!1
n=a6.h(0,a4)
if(C.kC(n==null?a3:J.k(n))){n=a6.h(0,"adminShareEditUntil")
n=n==null?a3:J.k(n)}else n=a3
m=B.aK(a6.h(0,"signatureStrokeWidth"))
if(m==null)m=a3
l=B.aK(a6.h(0,"signatureInkColor"))
l=l==null?a3:A.k.O(l)
k=a6.h(0,"kiapoSignedAt")
k=k==null?a3:J.k(k)
j=J.A(a6.h(0,"cinematic"),!0)
i=J.A(a6.h(0,"loop"),!0)
h=a6.h(0,"aiOutlineJson")
h=h==null?a3:J.k(h)
g=x.c
f=g.a(a6.h(0,"aiSlideIds"))
if(f==null)f=a3
else{f=J.b6(f,new C.cgJ(),x.N)
f=B.C(f,f.$ti.k("ak.E"))}e=g.a(a6.h(0,"aiExtras"))
if(e==null)e=a3
else{e=J.b6(e,new C.cgK(),x.N)
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
else{g=J.dc(g,x.f)
g=B.cF(g,new C.cgL(),g.$ti.k("J.E"),x.bt)
g=B.C(g,B.a6(g).k("J.E"))}return C.BW(n,e,h,f,u,t,j,r,a2,d,a1,a0,a5,k,i,q,w,l,m,g==null?B.a([C.rD(4294967295,a3,0,0,a3,C.cE(),D.qr,"","","",D.dh)],x.g):g,v,p,o,s)},
kC(d){return d==="marriage_agreement"||d==="hati_kuhowa"||d==="hati_kuhoweya"||d==="hati_malipo_awamu"||d==="hati_kiapo_uongozi"},
hSt(d){var w,v,u=J.k(d==null?"landscape169":d)
for(w=0;w<2;++w){v=D.dni[w]
if(v.b===u)return v}return D.D9},
cE(){var w=Date.now(),v=$.j3
$.j3=v+1
return""+1000*w+"_"+v},
chc(d,e,f){var w,v,u,t,s,r,q,p=null,o="Click to add title",n=4280640491,m=4280172719,l=4279310375
d.d=e
A.d.a8(d.z)
if(e!==D.Da){d.e=f.f.l()
w=f.r
d.f=w==null?p:w.l()}switch(e.a){case 0:break
case 1:w=d.z
v=C.cE()
v=C.er(A.L,!1,f.d.l(),A.aF,"",n,40,A.bp,A.u,"",0.2,v,p,"","",0,!1,"",0,D.bg,m,2,o,0,0,"",D.cl,D.cQ,0.84,0.08,0.3)
u=C.cE()
A.d.v(w,B.a([v,C.er(A.L,!1,f.e.l(),A.aF,"",n,20,A.bp,A.cw,"",0.12,u,p,"","",0,!1,"",0,D.bg,m,2,"Click to add subtitle",0,0,"",D.cl,D.cQ,0.76,0.12,0.58)],x.u))
break
case 2:w=d.z
v=C.cE()
v=C.er(A.bi,!1,f.d.l(),A.aF,"",n,32,A.bp,A.u,"",0.14,v,p,"","",0,!1,"",0,D.bg,m,2,o,0,0,"",D.cl,D.cQ,0.88,0.06,0.06)
u=C.cE()
A.d.v(w,B.a([v,C.er(A.bi,!0,f.e.l(),A.aF,"",n,20,A.bp,A.cw,"",0.68,u,p,"","",0,!1,"",0,D.bg,m,2,"\u2022 Tap text to select, then Edit to type\n\u2022 Use Format for size & color\n\u2022 Add images and shapes from Insert",0,0,"",D.cl,D.cQ,0.88,0.06,0.24)],x.u))
break
case 3:w=d.z
v=C.cE()
v=C.er(A.bi,!1,f.d.l(),A.aF,"",n,30,A.bp,A.u,"",0.12,v,p,"","",0,!1,"",0,D.bg,m,2,"Two Column Slide",0,0,"",D.cl,D.cQ,0.88,0.06,0.06)
u=C.cE()
t=f.e
u=C.er(A.bi,!0,t.l(),A.aF,"",n,18,A.bp,A.a7,"",0.7,u,p,"","",0,!1,"",0,D.bg,m,2,"Left column\n\n\u2022 Point A\n\u2022 Point B",0,0,"",D.cl,D.cQ,0.42,0.06,0.22)
s=C.cE()
A.d.v(w,B.a([v,u,C.er(A.bi,!0,t.l(),A.aF,"",n,18,A.bp,A.a7,"",0.7,s,p,"","",0,!1,"",0,D.bg,m,2,"Right column\n\n\u2022 Point C\n\u2022 Point D",0,0,"",D.cl,D.cQ,0.42,0.52,0.22)],x.u))
break
case 4:w=f.c
d.e=w.l()
d.f=w.j(0.85).l()
A.d.M(d.z,C.er(A.L,!1,4294967295,A.aF,"",n,42,A.bp,A.u,"",0.2,C.cE(),p,"","",0,!1,"",0,D.bg,m,2,"Section Header",0,0,"",D.cl,D.cQ,0.84,0.08,0.38))
break
case 5:w=d.z
v=C.cE()
v=C.er(A.bi,!1,f.d.l(),A.aF,"",n,30,A.bp,A.u,"",0.12,v,p,"","",0,!1,"",0,D.bg,m,2,"Compare",0,0,"",D.cl,D.cQ,0.88,0.06,0.06)
u=C.cE()
t=f.c
u=C.er(A.bi,!1,l,A.aF,"",t.j(0.12).l(),24,A.bp,A.a7,"",0.68,u,p,"","",0,!1,"",0,D.bg,t.l(),2,"",0,0,"",D.cl,D.f8,0.42,0.06,0.22)
s=C.cE()
r=f.e
s=C.er(A.bi,!1,r.l(),A.aF,"",n,20,A.bp,A.O,"",0.6,s,p,"","",0,!1,"",0,D.bg,m,2,"Option A",0,0,"",D.cl,D.cQ,0.38,0.08,0.26)
q=C.cE()
t=C.er(A.bi,!1,l,A.aF,"",t.j(0.06).l(),24,A.bp,A.a7,"",0.68,q,p,"","",0,!1,"",0,D.bg,t.j(0.5).l(),2,"",0,0,"",D.cl,D.f8,0.42,0.52,0.22)
q=C.cE()
A.d.v(w,B.a([v,u,s,t,C.er(A.bi,!1,r.l(),A.aF,"",n,20,A.bp,A.O,"",0.6,q,p,"","",0,!1,"",0,D.bg,m,2,"Option B",0,0,"",D.cl,D.cQ,0.38,0.54,0.26)],x.u))
break
case 6:w=d.z
v=C.cE()
v=C.er(A.L,!1,f.d.l(),A.aF,"",n,36,A.bp,A.u,"",0.35,v,p,"","",0,!1,"",0,D.bg,m,2,"TERM / QUESTION",0,0,"",D.cl,D.cQ,0.8,0.1,0.12)
u=C.cE()
A.d.v(w,B.a([v,C.er(A.L,!1,f.e.l(),A.aF,"",n,22,A.bp,A.cw,"",0.35,u,p,"","",0,!1,"",0,D.bg,m,2,"Definition or answer \u2014 flip mentally when presenting",0,0,"",D.cl,D.cQ,0.8,0.1,0.52)],x.u))
break
case 7:w=d.z
v=C.cE()
v=C.er(A.bi,!1,f.d.l(),A.aF,"",n,28,A.bp,A.u,"",0.18,v,p,"","",0,!1,"",0,D.bg,m,2,"Quiz Question",0,0,"",D.cl,D.cQ,0.88,0.06,0.06)
u=C.cE()
A.d.v(w,B.a([v,C.er(A.bi,!1,f.e.l(),A.aF,"",n,20,A.bp,A.a7,"",0.62,u,p,"","",0,!1,"",0,D.bg,m,2,"A) Answer choice\nB) Answer choice\nC) Answer choice\nD) Answer choice",0,0,"",D.cl,D.cQ,0.84,0.08,0.28)],x.u))
break
case 8:w=d.z
v=C.cE()
v=C.er(A.bi,!1,f.d.l(),A.aF,"",n,26,A.bp,A.u,"",0.1,v,p,"","",0,!1,"",0,D.bg,m,2,"Worksheet / Assignment",0,0,"",D.cl,D.cQ,0.88,0.06,0.04)
u=C.cE()
A.d.v(w,B.a([v,C.er(A.bi,!1,f.e.l(),A.aF,"",n,18,A.bp,A.a7,"",0.78,u,p,"","",0,!1,"",0,D.bg,m,2,"Name: _______________\nDate: _______________\n\n1. _________________________________\n\n2. _________________________________\n\n3. _________________________________",0,0,"",D.cl,D.cQ,0.88,0.06,0.16)],x.u))
break}},
hK5(d){return A.d.dM(D.a3r,new C.chd(d),new C.che())},
hK2(d){var w,v,u,t,s,r,q,p
if(A.a.i(d).length===0)return B.a([],x.D)
try{w=A.T.aN(0,d,null)
if(!x.j.b(w)){t=B.a([],x.D)
return t}v=B.a([],x.D)
for(t=J.aV(w),s=x.N,r=x.z,q=x.f;t.C();){u=t.gR(t)
if(!q.b(u))continue
try{J.cc(v,C.W9(B.a2(u,s,r)))}catch(p){}}return v}catch(p){t=B.a([],x.D)
return t}},
fYb(d,e){var w,v,u,t=B.T(x.N,x.I),s=new C.ch8(t)
for(w=J.aV(d);w.C();)s.$1(w.gR(w))
for(w=e.length,v=0;v<e.length;e.length===w||(0,B.M)(e),++v)s.$1(e[v])
w=t.$ti.k("bc<2>")
u=B.C(new B.bc(t,w),w.k("J.E"))
A.d.aV(u,new C.ch7())
return u},
hee(d,e){var w,v,u=d.length
if(u===0)return e
w=e.length
if(w===0)return d
v=new C.ch3()
if(u!==w)return u>=w?d:e
return v.$1(d).cd(v.$1(e))?d:e},
arx(d){return C.hK0(d)},
hK0(d){var w=0,v=B.j(x.R),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$arx=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=A.a.i(d.toLowerCase())
l=new C.ch6()
k=x.D
j=B.a([],k)
t=4
g=l
w=7
return B.b(B.a2C(m),$async$arx)
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
return B.b(B.az(),$async$arx)
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
case 11:o=l.$1($.hed.h(0,m))
n=C.fYb(C.fYb(j,r),o)
if(n.length===0){u=C.hee(C.hee(j,r),o)
w=1
break}u=n
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$arx,v)},
ch2(d){return C.hK_(d)},
hK_(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o
var $async$ch2=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.az(),$async$ch2)
case 7:r=f
q=r.tq("ngmy_slides_deleted_"+A.a.i(d.toLowerCase()))
if(q==null)q=A.X
q=B.k_(q,B.S(q).c)
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
return B.i($async$ch2,v)},
b1z(d,e){return C.hK1(d,e)},
hK1(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m
var $async$b1z=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$b1z)
case 6:s=g
q=s.tq("ngmy_slides_deleted_"+A.a.i(d.toLowerCase()))
if(q==null)q=B.a([],x.s)
A.d.M(q,e)
r=q
p=A.a.i(d.toLowerCase())
o=J.ad(r)>500?J.Lx(r,J.ad(r)-500):r
w=7
return B.b(s.aq("StringList","ngmy_slides_deleted_"+p,o),$async$b1z)
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
return B.i($async$b1z,v)},
Wa(d,e){return C.hK3(d,e)},
hK3(a3,a4){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$Wa=B.e(function(a5,a6){if(a5===1){s.push(a6)
w=t}for(;;)switch(w){case 0:a0=A.a.i(a3.toLowerCase())
if(J.ad(a0)===0){w=1
break}p=$.hec.h(0,a0)
w=p==null?3:4
break
case 3:w=5
return B.b(C.arx(a3),$async$Wa)
case 5:p=a6
case 4:w=6
return B.b(C.ch2(a3),$async$Wa)
case 6:o=a6
n=B.T(x.N,x.I)
for(m=J.aV(p);m.C();){l=m.gR(m)
k=l.a
if(A.a.i(k).length!==0)n.n(0,k,l)}for(m=a4.length,j=0;j<a4.length;a4.length===m||(0,B.M)(a4),++j){i=a4[j]
l=i.a
if(A.a.i(l).length===0)continue
h=n.h(0,l)
if(h!=null){k=h.f
g=i.f
f=k.a
if(f<=g.gbq())k=f===g.gbq()&&k.b>g.gcB()
else k=!0
k=!k}else k=!0
if(k)n.n(0,l,i)}m=n.$ti.k("bc<2>")
l=m.k("Z<J.E>")
e=B.C(new B.Z(new B.bc(n,m),new C.ch9(o),l),l.k("J.E"))
A.d.aV(e,new C.cha())
$.hec.n(0,a0,e)
n=B.S(e).k("N<1,a8<n,@>>")
n=B.C(new B.N(e,new C.chb(),n),n.k("ak.E"))
r=A.T.ao(n,null)
$.hed.n(0,a0,r)
t=8
w=11
return B.b(B.ahy(a0,r),$async$Wa)
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
return B.b(B.az(),$async$Wa)
case 16:q=a6
w=17
return B.b(q.aq("String","ngmy_slides_decks_"+A.a.i(a3.toLowerCase()),r),$async$Wa)
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
return B.i($async$Wa,v)},
J_:function J_(d,e){this.a=d
this.b=e},
arv:function arv(d,e){this.a=d
this.b=e},
uP:function uP(d,e){this.a=d
this.b=e},
mE:function mE(d,e){this.a=d
this.b=e},
hF:function hF(d,e){this.a=d
this.b=e},
eM:function eM(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){var _=this
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
lO:function lO(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
cgX:function cgX(){},
cgY:function cgY(){},
cgW:function cgW(){},
i4:function i4(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3){var _=this
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
cgM:function cgM(){},
cgN:function cgN(){},
cgJ:function cgJ(){},
cgK:function cgK(){},
cgL:function cgL(){},
jL:function jL(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
chd:function chd(d){this.a=d},
che:function che(){},
ch8:function ch8(d){this.a=d},
ch7:function ch7(){},
ch3:function ch3(){},
ch4:function ch4(){},
ch5:function ch5(){},
ch6:function ch6(){},
ch9:function ch9(d){this.a=d},
cha:function cha(){},
chb:function chb(){},
i8G(d,e){var w=x.N,v=B.T(w,x.F)
w=new C.fFV(e,v,d,B.aX(w))
w.$1(new C.fFR())
w.$1(new C.fFS())
w.$1(new C.fFT())
w.$1(new C.fFU())
return v},
fFV:function fFV(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fFR:function fFR(){},
fFS:function fFS(){},
fFT:function fFT(){},
fFU:function fFU(){},
b1w:function b1w(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cgS:function cgS(d){this.a=d},
cgR:function cgR(){},
cgT:function cgT(){},
cgU:function cgU(d,e){this.a=d
this.b=e},
cgV:function cgV(d){this.a=d},
aoH:function aoH(d,e){this.c=d
this.a=e},
bjA:function bjA(d,e){var _=this
_.d=$
_.bx$=d
_.aa$=e
_.c=_.a=null},
dJs:function dJs(){},
aLy:function aLy(){},
ch_(d,e,f){var w=0,v=B.j(x.y),u,t
var $async$ch_=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:if(f){u=!0
w=1
break}t=A.a.i(e)
if(t.length===0){if(d.e!=null)d.J(x.q).f.S(D.f5n)
u=!1
w=1
break}u=B.kZ(!1,d,t,!1,null,A.a62,null)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ch_,v)},
hJY(d){var w=A.d.bg(D.Hq,new C.ch0(d))
if(w<0)return!0
return w>=4},
hJZ(d){var w=A.d.bg($.bEi(),new C.ch1(d))
if(w<0)return!0
return w>=5},
ch0:function ch0(d){this.a=d},
ch1:function ch1(d){this.a=d},
iao(d,e,f){var w,v=null,u=""+f,t="ngmy-pdf-"+A.a.gX(d)+"-"+u,s=f>0?d+"#page="+u:d
$.yR()
$.qn().q5(t,new C.fIL(s),!0)
u=B.a([B.E1(v,A.qv,t)],x.p)
if(e.length!==0){w=B.m(4)
u.push(B.ao(v,B.p(v,B.d(e,v,v,v,v,v,v,D.fga,v,v,v),A.f,v,v,new B.o(A.aW,v,v,w,v,v,A.n),v,v,v,v,A.mF,v,v,v),v,v,4,v,4,v))}return new B.an(A.a_,v,A.b1,A.t,u,v)},
fIL:function fIL(d){this.a=d},
ia_(){return C.h4i()},
i6U(){return C.bCe()},
i8Z(){return C.h49()},
aPI(d,e,f){var w=0,v=B.j(x.H),u
var $async$aPI=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:w=e==="__ngmy_slides_pdf_staged__"?3:4
break
case 3:w=5
return B.b(C.fHR(d,f),$async$aPI)
case 5:w=1
break
case 4:if(d.e!=null)d.J(x.q).f.S(B.b3(null,null,null,null,null,A.t,null,B.d(e,null,null,null,null,null,null,null,null,null,null),null,A.V,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$aPI,v)},
fHR(d,e){var w=0,v=B.j(x.H),u
var $async$fHR=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:u=$.bAr
if(u==null)u=e+".pdf"
w=2
return B.b(B.bT(A.K,null,new C.fHS(u,e==="Invoice"),d,!0,!1,!0,null,!1,!1,x.H),$async$fHR)
case 2:return B.h(null,v)}})
return B.i($async$fHR,v)},
fHS:function fHS(d,e){this.a=d
this.b=e},
adw:function adw(d,e,f){this.c=d
this.d=e
this.a=f},
esG:function esG(d,e){this.a=d
this.b=e},
esH:function esH(d,e){this.a=d
this.b=e},
esI:function esI(d,e){this.a=d
this.b=e},
esJ:function esJ(d){this.a=d},
adN:function adN(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
b1v(d,e,f,g,h,i,j,k,l,m,n,o){return new C.b1u(g,m,f,d,e,h,l,k,j,o,i,null)},
hqx(d){return B.cC(new C.fFQ(d))},
h4k(d){switch(d.a){case 0:return"\u23ed\ufe0f"
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
ia7(d){if(d===D.cl)return"None"
return C.h4k(d)},
bAX(d,e,f,g){return C.i_Z(d,e,f,g)},
i_Z(d,e,f,g){var w=0,v=B.j(x.H),u,t,s
var $async$bAX=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:s={}
if(d.e==null){w=1
break}t=B.a3(d,!0)
if($.h16&&t.pJ())t.eJ()
$.h16=!0
s.a=null
w=3
return B.b(B.i0(A.bk,!0,"Animation preview",d,new C.fpl(s,e,g,f),null,A.eM,!0,x.H),$async$bAX)
case 3:s=s.a
if(s!=null)s.a3(0)
$.h16=!1
case 1:return B.h(u,v)}})
return B.i($async$bAX,v)},
fSm(d,e,f){var w=0,v=B.j(x.H),u,t,s,r
var $async$fSm=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:e.$0()
if(d.e==null){w=1
break}t=A.k.E(B.aH(d,A.bX,x.w).w.a.a*0.88,280,440)
s=f===D.cl
r=s?"\u23ed\ufe0f None \u2014 no slide transition":C.h4k(f)+" Slide transition preview"
s=s?Af.FH:A.vN
w=3
return B.b(C.bAX(d,s,new B.a7(t,t*0.56,B.bx(B.m(14),new C.aJb(f,null),A.aq),null),r),$async$fSm)
case 3:case 1:return B.h(u,v)}})
return B.i($async$fSm,v)},
hpP(d,e,f){var w,v,u=null,t=A.cu.aw(0,A.k.E(e,0,1))
switch(d.a){case 0:return f
case 1:case 13:case 18:return B.d6(f,t)
case 2:case 17:return B.dJ(B.d6(f,t),new B.t((1-t)*48,0))
case 3:return B.dJ(B.d6(f,t),new B.t(-(1-t)*48,0))
case 4:case 21:return B.dJ(B.d6(f,t),new B.t(0,(1-t)*36))
case 5:return B.dJ(B.d6(f,t),new B.t(0,-(1-t)*36))
case 6:case 16:return B.ea(A.A,B.d6(f,t),0.5+t*0.5,u,u)
case 7:return B.ea(A.A,B.d6(f,t),1.4-t*0.4,u,u)
case 8:w=B.dk()
v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
w.fB((1-t)*1.2)
return B.fo(A.A,B.d6(f,t),u,w,!0)
case 9:w=B.dk()
v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
w.kd((1-t)*1.2)
return B.fo(A.A,B.d6(f,t),u,w,!0)
case 10:case 19:w=B.dk()
v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.002
w.mO((1-t)*0.8)
v=0.6+t*0.4
w.jU(v,v,v,1)
return B.fo(A.A,B.d6(f,t),u,w,!0)
case 11:case 12:case 14:case 15:case 20:return B.dJ(B.d6(f,t),new B.t((1-t)*24,0))}},
bDN(d,e,f){var w=0,v=B.j(x.H),u,t,s,r
var $async$bDN=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:e.$0()
if(d.e==null){w=1
break}t=A.k.E(B.aH(d,A.bX,x.w).w.a.a*0.88,300,440)
s=f===D.cl
r=s?"\u23ed\ufe0f None \u2014 no element animation":C.h4k(f)+" Element animation preview"
s=s?Af.FH:A.vN
w=3
return B.b(C.bAX(d,s,new B.a7(t,t*0.62,B.bx(B.m(14),new C.azX(f,null),A.aq),null),r),$async$bDN)
case 3:case 1:return B.h(u,v)}})
return B.i($async$bDN,v)},
ia6(d){var w,v,u,t,s=$.agc.W(0,d)
if(s!=null){$.agc.n(0,d,s)
return s}w=A.cF.aM(A.a.b4(d,A.a.cD(d,",")+1))
$.agc.n(0,d,w)
v=$.h1V=$.h1V+w.length
u=B.a6($.agc).k("cu<1>")
for(;;){if(!(v>41943040&&$.agc.a>1))break
t=new B.cu($.agc,u).gaf(0)
if(!t.C())B.b8(B.ft())
v-=$.agc.W(0,t.gR(0)).length
$.h1V=v}return w},
i9N(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=B.af("\\*([^*]+)\\*|\\^([^^]+)\\^|~([^~]+)~",!0,!1,!1,!1).l5(0,d),j=B.C(k,B.a6(k).k("J.E"))
if(j.length===0)return l
w=e.r
if(w==null)w=24
v=B.a([],x.aF)
for(k=j.length,u=w*0.62,t=w*2.4,s=w*1.6,r=0,q=0;q<j.length;j.length===k||(0,B.M)(j),++q){p=j[q].b
o=p.index
if(o>r){n=A.a.ap(d,r,o)
m=f.$1(e)
v.push(new B.eH(n,l,l,A.cY,l,l,l,l,l,l,m))}n=p[1]
if(n!=null){m=f.$1(e.SV(s,A.u))
v.push(new B.eH(n,l,l,A.cY,l,l,l,l,l,l,m))}else{n=p[2]
if(n!=null){m=f.$1(e.SV(t,A.u))
v.push(new B.eH(n,l,l,A.cY,l,l,l,l,l,l,m))}else{n=p[3]
m=f.$1(e.SV(u,A.cw))
v.push(new B.eH(n,l,l,A.cY,l,l,l,l,l,l,m))}}r=o+p[0].length}if(r<d.length){k=A.a.b4(d,r)
v.push(B.cX(l,l,l,l,l,l,l,l,l,f.$1(e),k))}return v},
a2B(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=x.v
switch(d){case"circle":m=new B.aI($.V().r,A.ai,n,n,B.a([],m))
m.D(new B.jC(e))
return m
case"rounded":m=new B.aI($.V().r,A.ai,n,n,B.a([],m))
w=e.gdB()*0.18
m.D(new B.iN(B.bz(e,new B.aQ(w,w))))
return m
case"triangle":m=new B.aI($.V().r,A.ai,n,n,B.a([],m))
m.D(new B.b0(e.gbN().a,e.b))
w=e.d
m.D(new B.ap(e.c,w))
m.D(new B.ap(e.a,w))
m.D(new B.bv())
return m
case"hexagon":w=$.V()
m=B.a([],m)
v=new B.aI(w.r,A.ai,n,n,m)
for(w=e.a,u=e.c-w,w+=u/2,t=e.b,s=e.d-t,t+=s/2,r=0;r<6;++r){q=0.5235987755982988+r*3.141592653589793/3
p=w+Math.cos(q)*u/2
o=t+Math.sin(q)*s/2
if(r===0){p=new B.b0(p,o)
m.push(p)
o=v.f
if(o!=null)p.by(o)
p=v.e
if(p!=null)p.a.delete()
v.e=null}else{p=new B.ap(p,o)
m.push(p)
o=v.f
if(o!=null)p.by(o)
p=v.e
if(p!=null)p.a.delete()
v.e=null}}v.D(new B.bv())
return v
case"diamond":m=new B.aI($.V().r,A.ai,n,n,B.a([],m))
m.D(new B.b0(e.gbN().a,e.b))
m.D(new B.ap(e.c,e.gbN().b))
m.D(new B.ap(e.gbN().a,e.d))
m.D(new B.ap(e.a,e.gbN().b))
m.D(new B.bv())
return m
case"arch":m=new B.aI($.V().r,A.ai,n,n,B.a([],m))
w=e.a
u=e.d
m.D(new B.b0(w,u))
t=e.c
s=(t-w)/2
p=e.b+s
m.D(new B.ap(w,p))
m.baF(new B.t(t,p),new B.aQ(s,s))
m.D(new B.ap(t,u))
m.D(new B.bv())
return m
default:m=new B.aI($.V().r,A.ai,n,n,B.a([],m))
m.D(new B.oc(e))
return m}},
fDp(d,e,f){return B.cC(new C.fDq(D.eYF.q(0,d),d,f,e))},
b1u:function b1u(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
cgQ:function cgQ(d){this.a=d},
cgP:function cgP(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cgO:function cgO(){},
b1r:function b1r(d,e){this.b=d
this.a=e},
fFQ:function fFQ(d){this.a=d},
fFP:function fFP(d,e){this.a=d
this.b=e},
fpl:function fpl(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fpj:function fpj(d){this.a=d},
fpk:function fpk(d,e){this.a=d
this.b=e},
aJb:function aJb(d,e){this.c=d
this.a=e},
buJ:function buJ(d,e){var _=this
_.d=$
_.bx$=d
_.aa$=e
_.c=_.a=null},
f71:function f71(d,e,f){this.a=d
this.b=e
this.c=f},
aJO:function aJO(d,e){this.b=d
this.a=e},
Vh:function Vh(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bjL:function bjL(d,e){var _=this
_.d=$
_.bx$=d
_.aa$=e
_.c=_.a=null},
dUG:function dUG(d){this.a=d},
dUF:function dUF(d){this.a=d},
dUE:function dUE(d){this.a=d},
IZ:function IZ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cgI:function cgI(d){this.a=d},
cgH:function cgH(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
azX:function azX(d,e){this.c=d
this.a=e},
bej:function bej(){this.d=0
this.c=this.a=null},
d8v:function d8v(d){this.a=d},
d8u:function d8u(d){this.a=d},
a7T:function a7T(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bko:function bko(d,e){var _=this
_.d=null
_.bx$=d
_.aa$=e
_.c=_.a=null},
ehj:function ehj(d,e,f){this.a=d
this.b=e
this.c=f},
b_q:function b_q(d,e,f,g){var _=this
_.c=d
_.e=e
_.f=f
_.a=g},
bft:function bft(d,e,f){this.b=d
this.c=e
this.a=f},
bqj:function bqj(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
eX7:function eX7(){},
fDq:function fDq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
brj:function brj(d,e,f){this.b=d
this.c=e
this.a=f},
aLL:function aLL(){},
aMd:function aMd(){},
aNw:function aNw(){},
fGR(){var w=0,v=B.j(x.a6),u,t,s,r
var $async$fGR=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.xk.c9().Mb(D.dko,A.u5,!0),$async$fGR)
case 3:r=e
if(r==null||J.cp(r.a)){u=null
w=1
break}t=J.fr(r.a)
s=t.c
if(s==null)throw B.W("That file could not be opened. Try another file.")
if(s.length>8388608)throw B.W("That file is too big. Use a file under 8 MB.")
u=C.i9H(t.b,s)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fGR,v)},
i9H(d,e){var w,v=d.toLowerCase()
if(A.a.cc(v,".pdf"))return new C.a8b(d,new B.a0d(A.cI.gcs().aM(e),"application/pdf"),"")
if(A.a.cc(v,".docx")){w=C.i1F(e)
if(A.a.i(w).length===0)throw B.W("No readable words were found in that Word file.")
return new C.a8b(d,null,w.length>6e4?A.a.ap(w,0,6e4):w)}w=A.cg.KZ(0,e,!0)
if(A.a.i(w).length===0)throw B.W("That file is empty.")
return new C.a8b(d,null,w.length>6e4?A.a.ap(w,0,6e4):w)},
i1F(d){var w,v,u,t,s,r,q,p,o=null,n=new C.cAr().cLo(B.rn(d,A.i6,o,o),o,o,!1).cN8(0,"word/document.xml")
if(n==null)return""
w=n.cVd()
v=A.cg.KZ(0,w==null?$.hsU():w,!0).split("</w:p>")
u=new B.ff("")
for(w=v.length,t=x.N,s=0;s<w;++s){r=v[s]
q=B.af("<w:t[^>]*>([^<]*)</w:t>",!0,!1,!1,!1).l5(0,r)
p=A.a.i(B.cF(q,new C.fsl(),B.a6(q).k("J.E"),t).hv(0))
if(p.length!==0){q=B.aL(p,"&lt;","<")
q=B.aL(q,"&gt;",">")
q=B.aL(q,"&quot;",'"')
q=B.aL(q,"&apos;","'")
q=B.aL(q,"&amp;","&")+"\n"
u.a+=q}}w=u.a
return w.charCodeAt(0)==0?w:w},
a8b:function a8b(d,e,f){this.a=d
this.b=e
this.c=f},
fsl:function fsl(){},
hK4(d,e,f,g,h,i,j,k,l){return new C.O8(l,e,d,g,f,i,h,j,k,null)},
O8:function O8(d,e,f,g,h,i,j,k,l,m){var _=this
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
aEJ:function aEJ(d,e,f,g,h,i,j,k,l){var _=this
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
_.bx$=k
_.aa$=l
_.c=_.a=null},
eyU:function eyU(d){this.a=d},
eyS:function eyS(){},
eyT:function eyT(d){this.a=d},
evh:function evh(){},
evi:function evi(){},
evj:function evj(d,e){this.a=d
this.b=e},
ewS:function ewS(d){this.a=d},
ewG:function ewG(){},
ewH:function ewH(){},
euF:function euF(){},
ey_:function ey_(d){this.a=d},
eyQ:function eyQ(d,e){this.a=d
this.b=e},
ewQ:function ewQ(d,e){this.a=d
this.b=e},
eyD:function eyD(d){this.a=d},
eyE:function eyE(){},
eyF:function eyF(){},
eyG:function eyG(d){this.a=d},
eyH:function eyH(){},
eu3:function eu3(d){this.a=d},
eyR:function eyR(){},
evZ:function evZ(d,e){this.a=d
this.b=e},
eu1:function eu1(d){this.a=d},
eu2:function eu2(d){this.a=d},
ewl:function ewl(d){this.a=d},
ewm:function ewm(d,e,f){this.a=d
this.b=e
this.c=f},
ewn:function ewn(d){this.a=d},
evY:function evY(){},
evX:function evX(d){this.a=d},
evV:function evV(){},
evU:function evU(d){this.a=d},
evW:function evW(){},
evd:function evd(d){this.a=d},
eve:function eve(d){this.a=d},
ew4:function ew4(d){this.a=d},
ew_:function ew_(d){this.a=d},
ew0:function ew0(d){this.a=d},
ew1:function ew1(d){this.a=d},
ew2:function ew2(d){this.a=d},
ew3:function ew3(d){this.a=d},
ew5:function ew5(d,e){this.a=d
this.b=e},
eu5:function eu5(){},
eu6:function eu6(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ewg:function ewg(){},
ewh:function ewh(d,e){this.a=d
this.b=e},
ewe:function ewe(d,e,f){this.a=d
this.b=e
this.c=f},
ewf:function ewf(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ew8:function ew8(d,e,f){this.a=d
this.b=e
this.c=f},
ew9:function ew9(d,e,f){this.a=d
this.b=e
this.c=f},
ewa:function ewa(d){this.a=d},
ewb:function ewb(d,e){this.a=d
this.b=e},
ewc:function ewc(d,e){this.a=d
this.b=e},
ewd:function ewd(d,e){this.a=d
this.b=e},
ew7:function ew7(d,e){this.a=d
this.b=e},
ewj:function ewj(d){this.a=d},
ewk:function ewk(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ewi:function ewi(d){this.a=d},
ewB:function ewB(){},
ewC:function ewC(){},
ewD:function ewD(){},
ewE:function ewE(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ewy:function ewy(d){this.a=d},
ewA:function ewA(){},
ewz:function ewz(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
eww:function eww(d,e,f){this.a=d
this.b=e
this.c=f},
ewx:function ewx(d,e){this.a=d
this.b=e},
ewF:function ewF(){},
ew6:function ew6(d,e){this.a=d
this.b=e},
eum:function eum(){},
eun:function eun(d,e,f){this.a=d
this.b=e
this.c=f},
euo:function euo(d){this.a=d},
eup:function eup(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eul:function eul(d){this.a=d},
ewL:function ewL(d){this.a=d},
ewK:function ewK(d,e){this.a=d
this.b=e},
ewJ:function ewJ(d,e){this.a=d
this.b=e},
ewI:function ewI(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ewM:function ewM(d,e){this.a=d
this.b=e},
et0:function et0(d,e){this.a=d
this.b=e},
euk:function euk(d,e){this.a=d
this.b=e},
eui:function eui(d){this.a=d},
ewU:function ewU(d,e,f){this.a=d
this.b=e
this.c=f},
eue:function eue(d,e){this.a=d
this.b=e},
eud:function eud(d){this.a=d},
ewT:function ewT(d,e,f){this.a=d
this.b=e
this.c=f},
eu4:function eu4(d){this.a=d},
euG:function euG(){},
eyB:function eyB(d,e){this.a=d
this.b=e},
eyC:function eyC(d,e,f){this.a=d
this.b=e
this.c=f},
ey0:function ey0(d,e,f){this.a=d
this.b=e
this.c=f},
et1:function et1(d){this.a=d},
esZ:function esZ(d,e){this.a=d
this.b=e},
esP:function esP(d,e){this.a=d
this.b=e},
esM:function esM(d){this.a=d},
esL:function esL(d,e){this.a=d
this.b=e},
esN:function esN(d,e){this.a=d
this.b=e},
eug:function eug(d){this.a=d},
euh:function euh(d,e){this.a=d
this.b=e},
euf:function euf(d){this.a=d},
ett:function ett(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
etu:function etu(d,e){this.a=d
this.b=e},
ety:function ety(d,e){this.a=d
this.b=e},
etz:function etz(d){this.a=d},
etw:function etw(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
etx:function etx(d){this.a=d},
etv:function etv(){},
ets:function ets(d,e,f){this.a=d
this.b=e
this.c=f},
ewv:function ewv(d,e){this.a=d
this.b=e},
eyK:function eyK(d){this.a=d},
eyL:function eyL(d,e){this.a=d
this.b=e},
eyM:function eyM(d){this.a=d},
eyN:function eyN(d,e,f){this.a=d
this.b=e
this.c=f},
eyJ:function eyJ(d){this.a=d},
eyg:function eyg(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eyf:function eyf(d,e,f){this.a=d
this.b=e
this.c=f},
eye:function eye(){},
eyd:function eyd(d,e,f){this.a=d
this.b=e
this.c=f},
eyc:function eyc(d,e){this.a=d
this.b=e},
ey9:function ey9(d,e,f){this.a=d
this.b=e
this.c=f},
ey7:function ey7(d){this.a=d},
ey8:function ey8(d){this.a=d},
eyb:function eyb(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eya:function eya(d){this.a=d},
ev9:function ev9(d,e){this.a=d
this.b=e},
ev8:function ev8(d,e){this.a=d
this.b=e},
ey1:function ey1(){},
eyA:function eyA(d,e){this.a=d
this.b=e},
eyy:function eyy(d){this.a=d},
eyz:function eyz(d){this.a=d},
esU:function esU(d,e){this.a=d
this.b=e},
esS:function esS(d){this.a=d},
esT:function esT(d){this.a=d},
esV:function esV(d,e){this.a=d
this.b=e},
esW:function esW(d,e,f){this.a=d
this.b=e
this.c=f},
et_:function et_(d,e){this.a=d
this.b=e},
esR:function esR(d,e,f){this.a=d
this.b=e
this.c=f},
esQ:function esQ(d){this.a=d},
ewR:function ewR(d,e,f){this.a=d
this.b=e
this.c=f},
eyI:function eyI(d,e,f){this.a=d
this.b=e
this.c=f},
evc:function evc(d,e,f){this.a=d
this.b=e
this.c=f},
evb:function evb(){},
etC:function etC(d,e,f){this.a=d
this.b=e
this.c=f},
etD:function etD(d){this.a=d},
esO:function esO(d,e){this.a=d
this.b=e},
euE:function euE(d,e){this.a=d
this.b=e},
esX:function esX(d,e){this.a=d
this.b=e},
et5:function et5(d){this.a=d},
et6:function et6(d,e){this.a=d
this.b=e},
et7:function et7(d,e){this.a=d
this.b=e},
et4:function et4(d){this.a=d},
eti:function eti(d,e){this.a=d
this.b=e},
et3:function et3(d){this.a=d},
etl:function etl(d){this.a=d},
etm:function etm(d){this.a=d},
etn:function etn(d){this.a=d},
eto:function eto(d){this.a=d},
etp:function etp(d){this.a=d},
etq:function etq(){},
etr:function etr(){},
et8:function et8(d){this.a=d},
et9:function et9(d){this.a=d},
eta:function eta(d){this.a=d},
etb:function etb(d){this.a=d},
etc:function etc(d){this.a=d},
etd:function etd(d){this.a=d},
ete:function ete(d){this.a=d},
etf:function etf(d){this.a=d},
etg:function etg(d){this.a=d},
eth:function eth(d){this.a=d},
etj:function etj(d){this.a=d},
etk:function etk(d,e){this.a=d
this.b=e},
euD:function euD(d,e,f){this.a=d
this.b=e
this.c=f},
euC:function euC(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
euB:function euB(d,e,f){this.a=d
this.b=e
this.c=f},
euA:function euA(d,e){this.a=d
this.b=e},
esY:function esY(d,e){this.a=d
this.b=e},
etG:function etG(d){this.a=d},
etF:function etF(d){this.a=d},
etE:function etE(d,e){this.a=d
this.b=e},
etH:function etH(d){this.a=d},
etI:function etI(d){this.a=d},
etJ:function etJ(d,e){this.a=d
this.b=e},
euj:function euj(d){this.a=d},
ewu:function ewu(d,e){this.a=d
this.b=e},
ewt:function ewt(d,e){this.a=d
this.b=e},
ews:function ews(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ewq:function ewq(d){this.a=d},
ewr:function ewr(d,e){this.a=d
this.b=e},
ewo:function ewo(){},
ewp:function ewp(){},
ey2:function ey2(){},
ey3:function ey3(d,e){this.a=d
this.b=e},
ey4:function ey4(){},
ey5:function ey5(d){this.a=d},
ey6:function ey6(d,e){this.a=d
this.b=e},
et2:function et2(d,e){this.a=d
this.b=e},
eu7:function eu7(){},
eu8:function eu8(){},
eu9:function eu9(){},
euc:function euc(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eub:function eub(d,e){this.a=d
this.b=e},
eua:function eua(d,e,f){this.a=d
this.b=e
this.c=f},
evD:function evD(d){this.a=d},
evC:function evC(){},
evE:function evE(d,e){this.a=d
this.b=e},
evF:function evF(d,e){this.a=d
this.b=e},
evB:function evB(d){this.a=d},
evG:function evG(d,e){this.a=d
this.b=e},
evA:function evA(d){this.a=d},
evH:function evH(d,e){this.a=d
this.b=e},
evz:function evz(d){this.a=d},
evI:function evI(d,e){this.a=d
this.b=e},
evy:function evy(d){this.a=d},
evJ:function evJ(d,e){this.a=d
this.b=e},
evx:function evx(d,e){this.a=d
this.b=e},
evK:function evK(d,e){this.a=d
this.b=e},
evw:function evw(d){this.a=d},
evL:function evL(d,e){this.a=d
this.b=e},
evv:function evv(d){this.a=d},
evo:function evo(d,e){this.a=d
this.b=e},
evp:function evp(d){this.a=d},
evq:function evq(d){this.a=d},
evn:function evn(d){this.a=d},
evr:function evr(d,e){this.a=d
this.b=e},
evm:function evm(d){this.a=d},
evs:function evs(d,e){this.a=d
this.b=e},
evl:function evl(d){this.a=d},
evt:function evt(d,e){this.a=d
this.b=e},
evk:function evk(d){this.a=d},
evu:function evu(d){this.a=d},
euw:function euw(d){this.a=d},
eux:function eux(d){this.a=d},
euz:function euz(d){this.a=d},
eur:function eur(d){this.a=d},
euq:function euq(d,e){this.a=d
this.b=e},
eus:function eus(d,e){this.a=d
this.b=e},
eut:function eut(d){this.a=d},
euu:function euu(d){this.a=d},
euv:function euv(d,e){this.a=d
this.b=e},
euy:function euy(d){this.a=d},
eyO:function eyO(d){this.a=d},
eyP:function eyP(d){this.a=d},
evO:function evO(d,e){this.a=d
this.b=e},
evN:function evN(d,e){this.a=d
this.b=e},
evM:function evM(d,e){this.a=d
this.b=e},
evP:function evP(d){this.a=d},
evQ:function evQ(d){this.a=d},
exc:function exc(d,e){this.a=d
this.b=e},
exd:function exd(d){this.a=d},
exe:function exe(d){this.a=d},
exp:function exp(d){this.a=d},
exA:function exA(d){this.a=d},
exL:function exL(d){this.a=d},
exS:function exS(d){this.a=d},
exT:function exT(d){this.a=d},
exU:function exU(d){this.a=d},
exV:function exV(d){this.a=d},
exW:function exW(d,e){this.a=d
this.b=e},
exf:function exf(d){this.a=d},
exg:function exg(d){this.a=d},
exh:function exh(d){this.a=d},
exi:function exi(d){this.a=d},
exj:function exj(d){this.a=d},
exk:function exk(d){this.a=d},
exl:function exl(d){this.a=d},
exm:function exm(d){this.a=d},
exn:function exn(d){this.a=d},
exo:function exo(d){this.a=d},
exq:function exq(d){this.a=d},
exr:function exr(d){this.a=d},
exs:function exs(d){this.a=d},
ext:function ext(d){this.a=d},
exu:function exu(d){this.a=d},
exv:function exv(d){this.a=d},
exw:function exw(d){this.a=d},
exx:function exx(d){this.a=d},
exy:function exy(d){this.a=d},
ex2:function ex2(d){this.a=d},
exz:function exz(d){this.a=d},
exa:function exa(d){this.a=d},
exB:function exB(d){this.a=d},
ex9:function ex9(d,e){this.a=d
this.b=e},
exC:function exC(d,e){this.a=d
this.b=e},
exD:function exD(d,e){this.a=d
this.b=e},
ex8:function ex8(d,e,f){this.a=d
this.b=e
this.c=f},
ewZ:function ewZ(d,e){this.a=d
this.b=e},
exb:function exb(d){this.a=d},
exX:function exX(d,e){this.a=d
this.b=e},
exZ:function exZ(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
exY:function exY(d,e){this.a=d
this.b=e},
exE:function exE(d,e,f){this.a=d
this.b=e
this.c=f},
ex7:function ex7(d,e,f){this.a=d
this.b=e
this.c=f},
ewY:function ewY(d,e,f){this.a=d
this.b=e
this.c=f},
ewW:function ewW(d,e){this.a=d
this.b=e},
exF:function exF(d,e){this.a=d
this.b=e},
ex6:function ex6(d,e){this.a=d
this.b=e},
ewX:function ewX(d,e){this.a=d
this.b=e},
ewV:function ewV(d,e){this.a=d
this.b=e},
exG:function exG(d){this.a=d},
ex5:function ex5(d){this.a=d},
exH:function exH(d){this.a=d},
exI:function exI(d){this.a=d},
exJ:function exJ(d){this.a=d},
exK:function exK(d){this.a=d},
ex4:function ex4(d){this.a=d},
exM:function exM(d){this.a=d},
exN:function exN(d){this.a=d},
exO:function exO(d,e){this.a=d
this.b=e},
ex3:function ex3(d){this.a=d},
exP:function exP(d,e){this.a=d
this.b=e},
ex1:function ex1(d){this.a=d},
exQ:function exQ(d,e){this.a=d
this.b=e},
ex0:function ex0(d){this.a=d},
exR:function exR(d,e){this.a=d
this.b=e},
ex_:function ex_(d){this.a=d},
etB:function etB(d,e,f){this.a=d
this.b=e
this.c=f},
etA:function etA(d,e){this.a=d
this.b=e},
eyj:function eyj(d,e){this.a=d
this.b=e},
eyi:function eyi(d,e){this.a=d
this.b=e},
eyk:function eyk(d,e){this.a=d
this.b=e},
eyh:function eyh(d,e){this.a=d
this.b=e},
euJ:function euJ(d,e){this.a=d
this.b=e},
euI:function euI(d){this.a=d},
euK:function euK(d,e){this.a=d
this.b=e},
euH:function euH(d){this.a=d},
evg:function evg(){},
evf:function evf(){},
eyw:function eyw(d){this.a=d},
eyv:function eyv(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eyu:function eyu(d,e){this.a=d
this.b=e},
eyp:function eyp(d,e){this.a=d
this.b=e},
eyt:function eyt(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eyq:function eyq(d,e){this.a=d
this.b=e},
eyl:function eyl(d){this.a=d},
eym:function eym(d){this.a=d},
eyn:function eyn(d){this.a=d},
eyo:function eyo(d){this.a=d},
eyr:function eyr(d,e){this.a=d
this.b=e},
eys:function eys(d,e){this.a=d
this.b=e},
eyx:function eyx(d){this.a=d},
eu0:function eu0(d){this.a=d},
eu_:function eu_(d,e,f){this.a=d
this.b=e
this.c=f},
etZ:function etZ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
etO:function etO(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
etP:function etP(d,e){this.a=d
this.b=e},
etQ:function etQ(d,e){this.a=d
this.b=e},
etR:function etR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
etN:function etN(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
etS:function etS(d,e){this.a=d
this.b=e},
etU:function etU(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
etT:function etT(d,e){this.a=d
this.b=e},
etV:function etV(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
etM:function etM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
etW:function etW(d,e){this.a=d
this.b=e},
etL:function etL(d,e){this.a=d
this.b=e},
etX:function etX(d,e){this.a=d
this.b=e},
etK:function etK(d){this.a=d},
etY:function etY(d,e){this.a=d
this.b=e},
evS:function evS(d){this.a=d},
evR:function evR(d){this.a=d},
evT:function evT(d,e){this.a=d
this.b=e},
euX:function euX(d,e){this.a=d
this.b=e},
euY:function euY(d,e){this.a=d
this.b=e},
euW:function euW(d,e){this.a=d
this.b=e},
euZ:function euZ(d,e){this.a=d
this.b=e},
euV:function euV(d,e){this.a=d
this.b=e},
ev_:function ev_(d,e){this.a=d
this.b=e},
euU:function euU(d,e){this.a=d
this.b=e},
ev0:function ev0(d,e){this.a=d
this.b=e},
euT:function euT(d,e){this.a=d
this.b=e},
ev1:function ev1(d,e){this.a=d
this.b=e},
euS:function euS(d,e){this.a=d
this.b=e},
ev2:function ev2(d,e,f){this.a=d
this.b=e
this.c=f},
euR:function euR(d,e){this.a=d
this.b=e},
ev3:function ev3(d,e,f){this.a=d
this.b=e
this.c=f},
euQ:function euQ(d,e){this.a=d
this.b=e},
ev4:function ev4(d,e){this.a=d
this.b=e},
euP:function euP(d,e,f){this.a=d
this.b=e
this.c=f},
euM:function euM(d,e){this.a=d
this.b=e},
ev5:function ev5(d,e){this.a=d
this.b=e},
euO:function euO(d,e){this.a=d
this.b=e},
ev6:function ev6(d,e){this.a=d
this.b=e},
euN:function euN(d,e,f){this.a=d
this.b=e
this.c=f},
euL:function euL(d,e){this.a=d
this.b=e},
ev7:function ev7(d,e){this.a=d
this.b=e},
eva:function eva(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
esK:function esK(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ewP:function ewP(d,e){this.a=d
this.b=e},
ewN:function ewN(d){this.a=d},
ewO:function ewO(d,e){this.a=d
this.b=e},
afi:function afi(d,e,f){this.a=d
this.b=e
this.c=f},
azi:function azi(d,e){this.c=d
this.a=e},
bd5:function bd5(d,e){var _=this
_.e=_.d=$
_.cO$=d
_.b2$=e
_.c=_.a=null},
d49:function d49(d){this.a=d},
d48:function d48(d){this.a=d},
bdj:function bdj(d,e){this.c=d
this.a=e},
d4v:function d4v(d){this.a=d},
d4w:function d4w(d){this.a=d},
K0:function K0(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bd4:function bd4(){this.d=!1
this.c=this.a=null},
d46:function d46(d){this.a=d},
d42:function d42(d){this.a=d},
d47:function d47(d){this.a=d},
d41:function d41(d){this.a=d},
d45:function d45(d){this.a=d},
d43:function d43(d){this.a=d},
d44:function d44(d,e){this.a=d
this.b=e},
PO:function PO(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
a_I:function a_I(d,e,f){this.c=d
this.d=e
this.a=f},
aEM:function aEM(d,e,f){var _=this
_.d=$
_.e=d
_.f=null
_.r=!0
_.w=$
_.x=null
_.y=!1
_.z=null
_.bx$=e
_.aa$=f
_.c=_.a=null},
ezu:function ezu(){},
ezk:function ezk(d){this.a=d},
ezt:function ezt(d){this.a=d},
ezl:function ezl(d){this.a=d},
ezm:function ezm(d){this.a=d},
ezg:function ezg(d){this.a=d},
ezh:function ezh(d,e){this.a=d
this.b=e},
ezi:function ezi(d){this.a=d},
ezj:function ezj(d,e,f){this.a=d
this.b=e
this.c=f},
ezr:function ezr(){},
ezs:function ezs(d){this.a=d},
ezn:function ezn(d){this.a=d},
ezo:function ezo(d){this.a=d},
ezp:function ezp(d){this.a=d},
ezq:function ezq(d){this.a=d},
ezv:function ezv(d,e,f){this.a=d
this.b=e
this.c=f},
ezx:function ezx(d,e){this.a=d
this.b=e},
ezw:function ezw(d){this.a=d},
K6:function K6(d,e){this.c=d
this.a=e},
brO:function brO(d,e){this.b=d
this.a=e},
bhY:function bhY(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bhX:function bhX(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aKv:function aKv(){},
aMo:function aMo(){},
bxu:function bxu(){},
aMp:function aMp(){},
fIM(){var w=0,v=B.j(x.bZ),u,t,s,r,q
var $async$fIM=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.xk.c9().Mb(B.a(["pdf"],x.s),A.u5,!0),$async$fIM)
case 3:q=e
if(q==null||J.cp(q.a)){u=null
w=1
break}t=J.fr(q.a)
s=t.c
if(s==null||s.length===0){u=null
w=1
break}r=A.a.i(t.b)
if(r.length===0)r="document.pdf"
u=new B.bp2(s,"data:application/pdf;base64,"+A.cI.gcs().aM(s),r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fIM,v)},
iai(d){var w,v,u,t,s,r
try{w=B.jv(d,0,null)
v=B.af("/Type\\s*/Pages[^>]*?/Count\\s+(\\d+)",!0,!0,!1,!1).cA(w)
if(v!=null){s=v.b[1]
s.toString
u=B.ca(s,null)
if(u!=null&&u>0){s=A.o.E(u,1,200)
return s}}t=B.af("/Type\\s*/Page\\b",!0,!1,!1,!1).l5(0,w).gL(0)
if(t>0){s=J.aR4(t,1,200)
return s}}catch(r){}return 1},
fID(d){return C.iah(d)},
iah(d){var w=0,v=B.j(x.T),u
var $async$fID=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(!A.a.a0(d,"data:image")){u=d
w=1
break}u=d
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fID,v)},
bD_(d,e,f,g){return C.iar(d,e,f,g)},
iar(b6,b7,b8,b9){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$bD_=B.e(function(c0,c1){if(c0===1){s.push(c1)
w=t}for(;;)switch(w){case 0:if(!new B.ec(b6,x.co).gaf(0).C()){u=null
w=1
break}t=4
r=A.k.E(b7.a,80,2400)
q=A.k.E(b7.b,80,2400)
p=B.hr7(b9,new B.au(r,q))
o=1
n=1
m=0
l=0
for(a7=b6.length,a8=0;a8<a7;++a8){k=b6[a8]
if(k==null)continue
a9=o
b0=k.a
o=Math.min(B.jR(a9),b0)
b0=n
a9=k.b
n=Math.min(B.jR(b0),a9)
a9=m
b0=k.a
m=Math.max(B.jR(a9),b0)
b0=l
a9=k.b
l=Math.max(B.jR(b0),a9)}o=A.k.E(o-0.04,0,1)
n=A.k.E(n-0.04,0,1)
m=A.k.E(m+0.04,0,1)
l=A.k.E(l+0.04,0,1)
j=A.k.E(m-o,0.12,1)
i=A.k.E(l-n,0.12,1)
h=A.o.E(A.k.V(800*(i/j)),180,420)
$.V()
g=new B.pI()
f=B.z1(g,null)
a7=B.K()
a7.r=A.qZ.gp(0)
f.aU(new B.a5(0,0,800,0+h),a7)
e=800/(j*r)
b1=B.K()
b1.r=b8.gp(b8)
b1.c=p*e
b1.d=A.bG
b1.e=A.dS
b1.b=A.ac
b1.f=!0
d=b1
a0=null
for(a7=b6.length,a8=0;a8<b6.length;b6.length===a7||(0,B.M)(b6),++a8){a1=b6[a8]
if(a1==null){a0=null
continue}a2=new B.t((a1.a-o)/j*800,(a1.b-n)/i*h)
if(a0!=null){a9=a0
b0=a2
b2=d.H()
b3=f.a
b3.drawLine.apply(b3,[a9.a,a9.b,b0.a,b0.b,b2])
b2.delete()}a0=a2}a3=g.nS()
w=7
return B.b(a3.zp(800,h),$async$bD_)
case 7:a4=c1
a3.t()
w=8
return B.b(a4.hw(A.h7),$async$bD_)
case 8:a5=c1
a4.t()
if(a5==null){u=null
w=1
break}a7=J.eV(A.dF.gaQ(a5))
a7=A.cI.gcs().aM(a7)
u="data:image/png;base64,"+a7
w=1
break
t=2
w=6
break
case 4:t=3
b5=s.pop()
a6=B.ab(b5)
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
return B.i($async$bD_,v)},
aQg(d,e,f){return C.iaf(d,e,f)},
iaf(d,e,f){var w=0,v=B.j(x.go),u,t,s,r,q
var $async$aQg=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:r={}
q=B.a([],x.bA)
r.a=null
r.b=e==null?A.au:e
r.c=f==null?5.2:f
w=3
return B.b(B.ahM(d,e,f,new C.fIB(r,q),q,"Sign document"),$async$aQg)
case 3:if(!new B.ec(q,x.co).gaf(0).C()||r.a==null){u=null
w=1
break}t=r.a
t.toString
w=4
return B.b(C.bD_(q,t,r.b,r.c),$async$aQg)
case 4:s=h
if(s==null){u=null
w=1
break}u=new C.b1y(s,r.c,r.b)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aQg,v)},
iap(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h="&amp;",g="&lt;",f="&gt;",e="&quot;",d='<!DOCTYPE html><html><head><meta charset="utf-8"><title>'+C.hkf(a0.b)+'</title>\n<style>\n  @page { size: 210mm 297mm; margin: 1.7mm; }\n  * { box-sizing: border-box; }\n  body { font-family: system-ui, sans-serif; background: #fff; color: #111; margin: 0; }\n  h1 { font-size: 14px; margin: 6px 10mm; }\n  .slide { page-break-after: always; width: 100%; height: 293.6mm; border: 1px solid #ddd; position: relative; overflow: hidden; margin: 0 auto 24px; }\n  /* Requested after the margin was already trimmed to near zero: a real\n     zoom-in on the whole slide (frame included), not just less border.\n     `.slide` keeps overflow:hidden so whatever spills past the edge at\n     this scale gets cropped instead of pushing the page layout around.\n     Width and height scale independently \u2014 a separate "wider on the\n     left and right only" request on top of the overall zoom. */\n  .zoom { position: absolute; inset: 0; transform: scaleX(1.0375) scaleY(1.01875); transform-origin: center center; }\n  .el { position: absolute; overflow: hidden; }\n  .txt { white-space: pre-wrap; word-break: break-word; }\n  img { max-width: 100%; max-height: 100%; object-fit: contain; }\n  .pdf { display:flex; flex-direction:column; align-items:center; justify-content:center; height:100%; background:#f8fafc; }\n</style></head><body>\n<h1>'+C.hkf(a0.b)+"</h1>\n"
for(w=a0.r,v=0;v<w.length;++v){u=w[v]
d=d+('<div class="slide" style="background:#'+A.a.b4(A.a.aZ(A.o.fW(u.e,16),8,"0"),2)+'">\n')+'<div class="zoom">\n'
for(t=u.z,s=t.length,r=0;r<t.length;t.length===s||(0,B.M)(t),++r){q=t[r]
d+='<div class="el" style="left:'+A.k.ac(q.c*100,2)+"%;top:"+A.k.ac(q.d*100,2)+"%;width:"+A.k.ac(q.e*100,2)+"%;height:"+A.k.ac(q.f*100,2)+'%">'
p=q.b
switch(p.a){case 0:o=A.a.b4(A.a.aZ(A.o.fW(q.Q,16),8,"0"),2)
p=q.w
n=q.r
n=B.aL(n,"&",h)
n=B.aL(n,"<",g)
n=B.aL(n,">",f)
d+='<div class="txt" style="font-size:'+B.w(p)+"px;color:#"+o+'">'+B.aL(n,'"',e)+"</div>"
break
case 1:case 4:n=q.at
if(n!=null&&A.a.a0(n,"data:image")){m=p===D.lJ&&q.c===0&&q.d===0&&q.e===1&&q.f===1?' style="object-fit:fill"':""
d+='<img src="'+n+'" alt=""'+m+" />"}break
case 3:p=q.db
if(p.length===0)p="PDF document"
p=B.aL(p,"&",h)
p=B.aL(p,"<",g)
p=B.aL(p,">",f)
d+='<div class="pdf"><div>\ud83d\udcc4 '+B.aL(p,'"',e)+"</div></div>"
break
case 2:d+='<div style="width:100%;height:100%;background:'+C.hjR(q.ay)+";border:2px solid "+C.hjR(q.ch)+'"></div>'
break
case 5:l=C.h3a(q.r)
p=l==null
n=p?null:l.b
n=A.a.i(n==null?"":n).length===0?"My links":A.a.i(l.b)
n=B.aL(n,"&",h)
n=B.aL(n,"<",g)
n=B.aL(n,">",f)
d=d+'<div style="width:100%;height:100%;box-sizing:border-box;background:#111114;border:4px solid #8E8A85;border-radius:18px;padding:18px 8px 8px;color:#fff;font-family:sans-serif;text-align:center;overflow:hidden">'+('<div style="font-weight:700;font-size:13px">'+B.aL(n,'"',e)+"</div>")
p=p?null:l.gak3()
if(p==null)p=A.ayt
n=B.S(p)
k=n.k("jw<1>")
j=new B.jw(p,0,8,k)
j.pd(p,0,8,n.c)
j=new B.bS(j,j.gL(0),k.k("bS<ak.E>"))
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
hjR(d){var w=A.o.aC(d,24)
return"rgba("+(A.o.aC(d,16)&255)+","+(A.o.aC(d,8)&255)+","+(d&255)+","+A.k.ac((w&255)/255,3)+")"},
hkf(d){var w=B.aL(d,"&","&amp;")
w=B.aL(w,"<","&lt;")
w=B.aL(w,">","&gt;")
return B.aL(w,'"',"&quot;")},
bCY(d,e){var w=0,v=B.j(x.H)
var $async$bCY=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b(B.cf(null,null,!0,null,new C.fIK(e,C.iap(e),d),d,null,!0,!0,x.H),$async$bCY)
case 2:return B.h(null,v)}})
return B.i($async$bCY,v)},
bCZ(){var w=0,v=B.j(x.T),u,t,s
var $async$bCZ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A5.GS(92,2400),$async$bCZ)
case 3:s=e
if(s==null){u=null
w=1
break}w=4
return B.b(C.fID(s),$async$bCZ)
case 4:t=e
u=t==null?s:t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bCZ,v)},
aQh(d){var w=0,v=B.j(x.N),u,t,s,r,q
var $async$aQh=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.h4p(d),$async$aQh)
case 3:t=f
s=A.a.i(d.b)
r=B.af("[^\\w\\-. ]+",!0,!1,!1,!1)
q=A.a.i(B.aL(s,r,"_"))
u=Z.fLg(t,q.length===0?"presentation":q)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aQh,v)},
hea(d,e){var w
if(e<0||e>=d.r.length)return A.o.E(d.e,1,120)
w=d.r[e].w
return A.o.E(w>0?w:d.e,1,120)},
b1y:function b1y(d,e,f){this.a=d
this.b=e
this.c=f},
fIB:function fIB(d,e){this.a=d
this.b=e},
fIK:function fIK(d,e,f){this.a=d
this.b=e
this.c=f},
fIH:function fIH(d){this.a=d},
fII:function fII(d,e,f){this.a=d
this.b=e
this.c=f},
fIJ:function fIJ(d,e,f){this.a=d
this.b=e
this.c=f},
iag(d){return C.kC(d.w)},
ian(d){var w,v,u,t
if(d.length===0||!A.d.d9(d,C.ic7()))return null
for(w=d.length,v=0;v<w;++v){u=d[v].x
t=A.a.i(u==null?"":u)
if(t.length!==0)return t}return""},
yN(d){var w=A.a.i(d),v=B.af("[^A-Z0-9]",!0,!1,!1,!1),u=B.aL(w.toUpperCase(),v,"")
w=$.hwX()
if(w.b.test(u))return u
return null},
hr9(d,e,f){var w,v,u=C.hFI(d),t=$.pD()
for(w=0;w<80;++w){v=u+A.a.aZ(A.o.u(t.au(1000)),3,"0")
if(!f.q(0,v))return v}return u+A.a.aZ(A.o.u(Date.now()%1000),3,"0")},
iat(d){var w,v,u,t,s=B.aX(x.N)
for(w=J.aV(d.a),v=new B.f5(w,d.b);v.C();){u=w.gR(w).y
t=C.yN(u==null?"":u)
if(t!=null)s.M(0,t)}return s},
fIz(d,e){var w,v=d.y,u=C.yN(v==null?"":v)
if(u!=null)return d.y=u
w=C.iat(new B.Z(e,new C.fIA(d),B.S(e).k("Z<1>")))
v=d.x
return d.y=C.hr9(v==null?"":v,null,w)},
ias(d){var w,v
if(d.length!==1)return null
w=A.d.gI(d)
if(!C.kC(w.w))return null
v=w.y
return C.yN(v==null?"":v)},
hK6(){var w,v=$.pD(),u=J.e4(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.au(32)]
return"SL"+A.d.hv(u)},
Wd(){var w=0,v=B.j(x.P),u,t=2,s=[],r,q,p,o,n,m
var $async$Wd=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return B.b(B.c6(),$async$Wd)
case 3:if(!e){u=B.T(x.N,x.z)
w=1
break}t=5
w=8
return B.b(B.f6("ngmy_slides_transfer_qr_stashes_v1",null,!1,A.bK),$async$Wd)
case 8:r=e
if(r==null){u=B.T(x.N,x.z)
w=1
break}q=J.q(r,"stashes")
if(x.f.b(q)){o=B.a2(q,x.N,x.z)
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
return B.i($async$Wd,v)},
We(d){return C.hK7(d)},
hK7(d){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p
var $async$We=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return B.b(B.c6(),$async$We)
case 3:if(!f){w=1
break}t=5
w=8
return B.b(B.hI("ngmy_slides_transfer_qr_stashes_v1",B.G(["stashes",d,"savedAt",new B.U(Date.now(),0,!1).a7().ad()],x.N,x.z),!1,!1,A.cG,null),$async$We)
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
return B.i($async$We,v)},
a8d(a0,a1,a2,a3,a4){var w=0,v=B.j(x.gl),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$a8d=B.e(function(a5,a6){if(a5===1)return B.f(a6,v)
for(;;)switch(w){case 0:w=3
return B.b(B.c6(),$async$a8d)
case 3:if(!a6){u=null
w=1
break}t=A.a.i(a0)
if(t.length===0){u=null
w=1
break}w=4
return B.b(C.Wd(),$async$a8d)
case 4:s=a6
r=C.yN(a2==null?"":a2)
if(r==null)r=a3!=null?C.hr9(a3,null,A.v3):null
q=x.N
p=B.aX(q)
for(o=J.dn(s),n=J.aV(o.gi_(s)),m=x.f;n.C();){l=n.gR(n)
if(!m.b(l))continue
k=J.q(l,"claimCode")
j=C.yN(J.k(k==null?"":k))
if(j!=null)p.M(0,j)}n=o.gdT(s),n=n.gaf(n),k=x.z
case 5:if(!n.C()){w=6
break}i=n.gR(n)
h=i.b
if(!m.b(h)){w=5
break}g=B.a2(h,q,k)
h=g.h(0,"bundleId")
if(J.k(h==null?"":h)!==a1){w=5
break}q=A.dI.aM(t)
g.n(0,"payload",A.cI.gcs().aM(q))
g.n(0,"ownerEmail",A.a.i(a4))
g.n(0,"updatedAt",new B.U(Date.now(),0,!1).a7().ad())
if(D.Ty.q(0,A.a.i(a4.toLowerCase())))g.n(0,"sharedByAdmin",!0)
if(r!=null){g.n(0,"kind","marriage")
g.n(0,"usesRemaining",2)
f=r}else{q=g.h(0,"claimCode")
f=C.yN(J.k(q==null?"":q))
if(f==null)f=C.hef(p)
g.n(0,"usesRemaining",25)}g.n(0,"claimCode",f)
q=i.a
o.n(s,q,g)
w=7
return B.b(C.We(s),$async$a8d)
case 7:u=new B.aGe(f,"NGMYSLIDESYNC2|"+q,q)
w=1
break
w=5
break
case 6:e=C.hK6()
n=r==null
d=n?C.hef(p):r
q=B.T(q,x.C)
q.n(0,"ownerEmail",A.a.i(a4))
q.n(0,"bundleId",a1)
m=A.dI.aM(t)
q.n(0,"payload",A.cI.gcs().aM(m))
n=!n
q.n(0,"usesRemaining",n?2:25)
q.n(0,"createdAt",new B.U(Date.now(),0,!1).a7().ad())
if(D.Ty.q(0,A.a.i(a4.toLowerCase())))q.n(0,"sharedByAdmin",!0)
q.n(0,"claimCode",d)
if(n)q.n(0,"kind","marriage")
o.n(s,e,q)
w=8
return B.b(C.We(s),$async$a8d)
case 8:u=new B.aGe(d,"NGMYSLIDESYNC2|"+e,e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a8d,v)},
hef(d){var w,v,u=$.pD()
for(w=0;w<200;++w){v="SL"+A.a.aZ(A.o.u(u.au(1000)),3,"0")
if(d.M(0,v))return v}return"SL"+A.a.aZ(A.o.u(Date.now()%1000),3,"0")},
arz(d){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$arz=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=A.a.i(d)
p=q.length===0
if(p)f=p
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.c6(),$async$arz)
case 5:f=!f
case 4:if(f){w=1
break}w=6
return B.b(C.Wd(),$async$arz)
case 6:t=f
s=J.a4(t)
r=s.gL(t)
s.bt(t,new C.chf(q))
w=s.gL(t)!==r?7:8
break
case 7:w=9
return B.b(C.We(t),$async$arz)
case 9:case 8:case 1:return B.h(u,v)}})
return B.i($async$arz,v)},
ary(d){var w=0,v=B.j(x.T),u,t,s,r,q,p,o
var $async$ary=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:p=C.yN(d)
o=p==null
if(o)f=o
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.c6(),$async$ary)
case 5:f=!f
case 4:if(f){u=null
w=1
break}o=J
w=6
return B.b(C.Wd(),$async$ary)
case 6:t=o.jV(f),t=t.gaf(t),s=x.f
case 7:if(!t.C()){w=8
break}r=t.gR(t)
q=r.b
if(!s.b(q)){w=7
break}q=J.q(q,"claimCode")
if(C.yN(J.k(q==null?"":q))===p){u=C.a8c(r.a)
w=1
break}w=7
break
case 8:u=null
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ary,v)},
a8c(d){var w=0,v=B.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$a8c=B.e(function(a0,a1){if(a0===1)return B.f(a1,v)
for(;;)switch(w){case 0:g=A.a.i(d)
f=g.length===0
if(f)a1=f
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.c6(),$async$a8c)
case 5:a1=!a1
case 4:if(a1){u=null
w=1
break}w=6
return B.b(C.Wd(),$async$a8c)
case 6:p=a1
o=J.a4(p)
n=o.h(p,g)
m=x.f
if(!m.b(n)){u=null
w=1
break}l=J.a4(n)
k=B.aK(l.h(n,"usesRemaining"))
j=k==null?null:A.k.O(k)
if(j==null)j=0
if(j<=0){u=null
w=1
break}k=l.h(n,"payload")
t=J.k(k==null?"":k)
if(J.ad(t)===0){u=null
w=1
break}s=null
try{s=A.cg.cz(0,A.cF.aM(t))}catch(e){u=null
w=1
break}if(A.a.i(s).length===0){u=null
w=1
break}k=l.h(n,"ownerEmail")
if(D.Ty.q(0,A.a.i(J.k(k==null?"":k).toLowerCase()))||J.A(l.h(n,"sharedByAdmin"),!0))try{r=A.T.aN(0,s,null)
if(m.b(r)){q=B.a2(r,x.N,x.z)
J.aG(q,"sharedByAdmin",!0)
s=A.T.ao(q,null)}}catch(e){}h=j-1
m=l.h(n,"kind")
m=J.k(m==null?"":m)
if(h<=0&&m!=="marriage")o.W(p,g)
else{m=x.N
l=x.z
l=B.dP(B.a2(n,m,l),m,l)
l.n(0,"usesRemaining",h)
l.n(0,"lastUsedAt",new B.U(Date.now(),0,!1).a7().ad())
o.n(p,g,l)}w=7
return B.b(C.We(p),$async$a8c)
case 7:u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a8c,v)},
iam(d,e,f){var w,v=B.T(x.N,x.z)
v.n(0,"type","ngmy_slides_library_v1")
v.n(0,"ownerEmail",A.a.i(e))
v.n(0,"exportedAt",new B.U(Date.now(),0,!1).a7().ad())
if(f)v.n(0,"sharedByAdmin",!0)
w=B.S(d).k("N<1,a8<n,@>>")
w=B.C(new B.N(d,new C.fIG(),w),w.k("ak.E"))
v.n(0,"decks",w)
return v},
fIO(d,e,f,g){var w
if(e!=null){w=B.T(x.N,x.z)
w.n(0,"type","ngmy_slides_deck_v1")
w.n(0,"ownerEmail",A.a.i(f))
w.n(0,"exportedAt",new B.U(Date.now(),0,!1).a7().ad())
if(g)w.n(0,"sharedByAdmin",!0)
w.n(0,"deck",e.ag())
return A.T.ao(w,null)}return A.T.ao(C.iam(d==null?B.a([],x.D):d,f,g),null)},
fIN(d,e,f,g,h){var w=0,v=B.j(x.eb),u,t,s,r
var $async$fIN=B.e(function(i,j){if(i===1)return B.f(j,v)
for(;;)switch(w){case 0:w=3
return B.b(C.a8d(h,d,e,f,g),$async$fIN)
case 3:r=j
if(r!=null){t=r.b
s=r.a
if(s==null)s=C.yN(e==null?"":e)
u=new B.aG0(s,t)
w=1
break}t=A.dI.aM(h)
t=A.ks.gcs().aM(t)
u=new B.aG0(C.yN(e==null?"":e),"NGMY_SL:"+t)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fIN,v)},
h4r(d){var w,v,u,t,s="ngmy_slides_deck_v1",r="ngmy_slides_library_v1",q=A.a.i(d)
if(J.ad(q)===0)return!1
if(J.d2(q,"NGMYSLIDESYNC2|"))return!0
if(J.d2(q,"NGMYSLIDECODE|"))return!0
if(J.d2(q,"NGMY_SL:"))return!0
if(J.f_(q,s)||J.f_(q,r))return!0
if(J.d2(q,"{"))try{w=A.T.aN(0,q,null)
if(x.f.b(w)){u=J.q(w,"type")
v=J.k(u==null?"":u)
u=J.A(v,s)||J.A(v,r)
return u}}catch(t){}return!1},
iaq(d){var w,v,u,t,s,r=d.z,q=r==null?null:A.a.i(r)
r=d.d
for(r=[q,r==null?null:A.a.i(r)],w=0;w<2;++w){v=r[w]
if(v==null||v.length===0)continue
if(C.h4r(v))return v
u=A.a.cD(v,"NGMYSLIDESYNC2|")
if(u>=0){t=A.a.i(A.a.b4(v,u))
if(C.h4r(t))return t}s=A.a.cD(v,"NGMY_SL:")
if(s>=0){t=A.a.i(A.a.b4(v,s))
if(C.h4r(t))return t}}return null},
fIC(d){var w,v,u,t=A.a.i(d)
if(J.ad(t)===0||J.d2(t,"NGMYSLIDESYNC2|"))return B.a([],x.D)
try{w=null
v=x.P
if(J.d2(t,"NGMY_SL:"))w=v.a(A.T.aN(0,A.cg.cz(0,A.cF.aM(J.nd(t,8))),null))
else w=v.a(A.T.aN(0,t,null))
v=C.hTO(w)
return v}catch(u){v=B.a([],x.D)
return v}},
ahx(d){var w=0,v=B.j(x.R),u,t,s,r,q
var $async$ahx=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=A.a.i(d)
w=A.a.a0(q,"NGMYSLIDECODE|")?3:4
break
case 3:t=q.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return B.b(C.ary(t[1]),$async$ahx)
case 7:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fIC(s)
w=1
break}case 6:u=B.a([],x.D)
w=1
break
case 4:r=C.yN(q)
w=r!=null&&!A.a.q(q,"|")&&!A.a.a0(q,"{")?8:9
break
case 8:w=10
return B.b(C.ary(r),$async$ahx)
case 10:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fIC(s)
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
return B.b(C.a8c(t[1]),$async$ahx)
case 15:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fIC(s)
w=1
break}case 14:u=B.a([],x.D)
w=1
break
case 12:u=C.fIC(q)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ahx,v)},
hTO(d){var w,v,u,t=J.a4(d),s=t.h(d,"type"),r=J.k(s==null?"":s)
if(!J.A(t.h(d,"sharedByAdmin"),!0)){s=t.h(d,"ownerEmail")
w=D.Ty.q(0,A.a.i(J.k(s==null?"":s).toLowerCase()))}else w=!0
if(r==="ngmy_slides_deck_v1"){v=t.h(d,"deck")
if(!x.f.b(v))return B.a([],x.D)
return B.a([C.h4o(C.W9(B.a2(v,x.N,x.z)),w)],x.D)}if(r==="ngmy_slides_library_v1"){u=t.h(d,"decks")
if(!x.j.b(u))return B.a([],x.D)
t=J.dc(u,x.f)
t=B.cF(t,new C.ffj(w),t.$ti.k("J.E"),x.I)
t=B.C(t,B.a6(t).k("J.E"))
return t}return B.a([],x.D)},
h4o(d,e){var w,v,u,t,s,r,q,p,o=d.ag()
o.n(0,"id",C.cE())
w=A.a.i(d.b)
o.n(0,"name",w.length===0?"Shared presentation":w)
o.n(0,"transferReceived",!0)
o.W(0,"transferClaimCode")
o.W(0,"adminShareEditUntil")
v=o.h(0,"slides")
if(x.j.b(v))for(u=J.aV(v),t=x.f;u.C();){s=u.gR(u)
if(t.b(s)){r=Date.now()
q=$.j3
$.j3=q+1
J.aG(s,"id",""+1000*r+"_"+q)}}p=C.W9(B.a2(o,x.N,x.z))
if(e&&C.kC(p.w))p.Q=new B.U(Date.now(),0,!1).a7().bS(144e8).ad()
return p},
bCJ(){var w=0,v=B.j(x.aT),u,t,s
var $async$bCJ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.GR(),$async$bCJ)
case 3:s=e
if(s==null||A.a.i(s).length===0){u=null
w=1
break}w=4
return B.b(C.ahx(s),$async$bCJ)
case 4:t=e
u=J.cp(t)?null:t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bCJ,v)},
fRB(d){var w=0,v=B.j(x.T),u,t
var $async$fRB=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.i0(D.Xn,!0,"Dismiss",d,new C.fRC(),new C.fRD(),A.FF,!0,x.N),$async$fRB)
case 3:t=f
if(t==null){u=null
w=1
break}if(t.length===0){if(d.e!=null)d.J(x.q).f.S(D.f3w)
u=null
w=1
break}u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fRB,v)},
ieg(d,e,f,g,h){return B.a3(d,!1).cg(B.e_(new C.fRE(h,e,g,f),!0,null,x.H))},
fIA:function fIA(d){this.a=d},
chf:function chf(d){this.a=d},
fIG:function fIG(){},
ffj:function ffj(d){this.a=d},
fRC:function fRC(){},
fRD:function fRD(){},
fRE:function fRE(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Wb:function Wb(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aEK:function aEK(){var _=this
_.d="one"
_.e=null
_.r=_.f=!1
_.c=_.a=null},
ez0:function ez0(){},
eyX:function eyX(d,e){this.a=d
this.b=e},
ez_:function ez_(d,e){this.a=d
this.b=e},
eyY:function eyY(d){this.a=d},
eyZ:function eyZ(d){this.a=d},
ez1:function ez1(d){this.a=d},
ez2:function ez2(d){this.a=d},
ez5:function ez5(d){this.a=d},
ez6:function ez6(d){this.a=d},
ez4:function ez4(d){this.a=d},
ez7:function ez7(d){this.a=d},
ez3:function ez3(d){this.a=d},
ez8:function ez8(d,e){this.a=d
this.b=e},
eyW:function eyW(d,e){this.a=d
this.b=e},
eyV:function eyV(d,e){this.a=d
this.b=e},
Wc:function Wc(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bkJ:function bkJ(){var _=this
_.c=_.a=_.f=_.e=_.d=null},
ez9:function ez9(d,e){this.a=d
this.b=e},
eza:function eza(d){this.a=d},
ezb:function ezb(){},
ezc:function ezc(d){this.a=d},
ezd:function ezd(d,e){this.a=d
this.b=e},
aEH:function aEH(d){this.a=d},
aEI:function aEI(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
esE:function esE(d){this.a=d},
esD:function esD(){},
esF:function esF(d){this.a=d},
esA:function esA(d){this.a=d},
esz:function esz(){},
esB:function esB(d){this.a=d},
esC:function esC(d){this.a=d},
bv3:function bv3(){},
arA:function arA(d){this.a=d},
aEL:function aEL(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
ezf:function ezf(d){this.a=d},
eze:function eze(d){this.a=d},
hZ6(){var w,v,u,t
for(v=0;v<4;++v){w=D.d8N[v]
try{if(Ac.bZ_(w)){u=w
return u}}catch(t){}}return null},
Ro(d,e){return C.i74(d,e)},
i74(c6,c7){var w=0,v=B.j(x.T),u,t=2,s=[],r=[],q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5
var $async$Ro=B.e(function(c9,d0){if(c9===1){s.push(d0)
w=t}for(;;)switch(w){case 0:c2={}
c3=c7.r
if(c3.length===0){u="This presentation has no slides."
w=1
break}q=C.hZ6()
if(q==null){u="This browser cannot record video. Try Chrome, Edge, or a recent Safari."
w=1
break}b2=c7.d===D.on?0.5625:1.7777777777777777
b3=b2>=1
b4=c2.a=A.k.V(b3?1280:1280*b2)
b5=c2.b=A.k.V(b3?1280/b2:1280)
c2.a=b4-A.o.F(b4,2)
c2.b=b5-A.o.F(b5,2)
b6=B.qF(c6,!0)
b6.toString
p=B.a3(c6,!0)
b7=new B.cz(null,x.A)
b8=A.d.gI(c3)
b9=$.ax()
o=new B.eJ(b8,b9)
n=new B.eJ("Getting ready\u2026",b9)
m=new B.eJ(0,b9)
l=B.ot(new C.fCT(c2,b7,o),!1,!1)
b6.lT(0,l)
b9=x.H
B.cf(null,A.dd,!1,null,new C.fCU(n,m),c6,null,!0,!0,b9)
k=new C.fCY(b7)
j=new C.fCZ()
i=null
t=4
b3=c2.a
h=Aj.aSz(c2.b,b3)
b3=h.getContext("2d")
b3.toString
g=b3
f=J.fUx(h,30)
e=B.a([],x.aK)
b3=x.z
i=Ac.aXv(f,B.G(["mimeType",q,"videoBitsPerSecond",8e6],b3,b3))
A.I2.yw(i,"dataavailable",new C.fCV(e))
d=new B.bY(new B.bg($.bB,x.dT),x.b2)
A.I2.yw(i,"stop",new C.fCW(d))
J.ai6(n,"Drawing slide 1 of "+c3.length+"\u2026")
c5=j
w=8
return B.b(k.$0(),$async$Ro)
case 8:w=7
return B.b(c5.$1(d0),$async$Ro)
case 7:a0=d0
J.fUz(g,a0,0,0,c2.a,c2.b)
i.start(200)
a1=0
case 9:if(!(b3=a1,b8=c3.length,b3<b8)){w=11
break}a2=c3[a1]
w=a1>0?12:13
break
case 12:J.ai6(n,"Drawing slide "+B.w(a1+1)+" of "+b8+"\u2026")
J.ai6(o,a2)
c5=j
w=15
return B.b(k.$0(),$async$Ro)
case 15:w=14
return B.b(c5.$1(d0),$async$Ro)
case 14:a0=d0
case 13:J.fUz(g,a0,0,0,c2.a,c2.b)
a3=A.o.E(a2.w>0?a2.w:c7.e,1,120)
J.ai6(n,"Recording slide "+B.w(a1+1)+" of "+c3.length+" \xb7 "+B.w(a3)+" s")
a4=new B.U(Date.now(),0,!1).bS(1e6*a3)
case 16:b3=Date.now()
b8=a4
if(b3>=b8.gbq())b3=b3===b8.gbq()&&0<b8.gcB()
else b3=!0
if(!b3){w=17
break}J.fUz(g,a0,0,0,c2.a,c2.b)
w=18
return B.b(B.bO(A.fp,null,b9),$async$Ro)
case 18:w=16
break
case 17:J.ai6(m,(a1+1)/c3.length)
case 10:++a1
w=9
break
case 11:J.ai6(n,"Saving your video\u2026")
i.stop()
w=19
return B.b(d.a.da(0,A.o4),$async$Ro)
case 19:a5=A.d.gI(q.split(";"))
a6=B.hS(e,a5)
c3=(self.URL||self.webkitURL).createObjectURL(a6)
c3.toString
a7=c3
a8=J.A(a5,"video/mp4")?"mp4":"webm"
c3=A.a.i(c7.b)
b3=B.af("[^\\w\\-. ]+",!0,!1,!1,!1)
a9=A.a.i(B.aL(c3,b3,"_"))
c0=B.ne(a7)
c0.download=B.w(J.ad(a9)===0?"presentation":a9)+"."+B.w(a8)
c3=c0.style
c3.display="none"
b0=c0
c3=document.body
if(c3!=null)c3.appendChild(b0).toString
J.Lu(b0)
J.m4(b0)
B.bO(A.pZ,new C.fCX(a7),b9)
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
J.m4(l)
if(p.pJ())p.eJ()
c3=o
b3=$.ax()
c3.si3(b3)
J.aR8(c3,0)
c3=n
c3.si3(b3)
J.aR8(c3,0)
c3=m
c3.si3(b3)
J.aR8(c3,0)
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Ro,v)},
fCT:function fCT(d,e,f){this.a=d
this.b=e
this.c=f},
fCS:function fCS(){},
fCU:function fCU(d,e){this.a=d
this.b=e},
fCY:function fCY(d){this.a=d},
fCZ:function fCZ(){},
fCV:function fCV(d){this.a=d},
fCW:function fCW(d){this.a=d},
fCX:function fCX(d){this.a=d},
bvg:function bvg(d,e,f){this.c=d
this.d=e
this.a=f},
f9t:function f9t(){},
f9u:function f9u(){},
chB(d){var w=0,v=B.j(x.at),u,t,s
var $async$chB=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.arI(d,A.zH),$async$chB)
case 3:s=f
if(s==null){u=null
w=1
break}t=s.bC(new B.U(Date.now(),0,!1))
if(t.a<0){u=A.bE
w=1
break}u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$chB,v)},
chA(d){if(d==null)return!1
return d==="marriage_agreement"||d==="hati_kuhowa"||d==="hati_kuhoweya"||d==="hati_malipo_awamu"},
a7U:function a7U(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bks:function bks(d){var _=this
_.d=null
_.e=d
_.f=!1
_.c=_.a=null},
ehL:function ehL(d){this.a=d},
ehJ:function ehJ(d){this.a=d},
ehK:function ehK(d,e){this.a=d
this.b=e},
a8O:function a8O(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.cx=d
_.cy=e
_.x=f
_.y=!0
_.a=g
_.b=h
_.c=i
_.d=j
_.oB$=k
_.oC$=l
_.oD$=m
_.nV$=n},
a8P:function a8P(d,e){this.a=d
this.b=e},
b3c:function b3c(){},
cjN:function cjN(){},
cjO:function cjO(){},
cjP:function cjP(d,e,f,g,h,i,j,k,l){var _=this
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
hxX(d){return new C.aio(d)},
a31:function a31(){},
aio:function aio(d){this.a=d},
aRt:function aRt(){},
ax5:function ax5(d,e){this.d=d
this.b=e
this.a=null},
aT_:function aT_(d){this.b=d
this.a=null},
fy1(d,e){var w=0,v=B.j(x.H)
var $async$fy1=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b($.V().gxH().LV(d,e),$async$fy1)
case 2:B.fLm()
return B.h(null,v)}})
return B.i($async$fy1,v)},
hoq(d,e){return(A.rz[(d^e)&255]^A.o.aC(d,8))>>>0},
fvg(d,e,f,g,h,i){var w=C.i3o(d,A.dg,f,null,A.cX,g,h,i)
return w},
hqi(d){var w=F.hr0(d)
if(w==null)return""
return"- WRITE EVERYTHING THE READER SEES IN "+w+" \u2014 every title, subtitle, sentence and note, with natural, correct grammar. Do not mix in English (JSON keys stay as given)."},
hFI(d){var w,v,u,t,s,r=A.a.i(d)
if(r.length===0)return"XX"
w=r.toLowerCase()
v=A.pg.h(0,w)
if(v!=null)return v
for(u=A.pg.gdT(A.pg),u=u.gaf(u);u.C();){t=u.gR(u).b
if(t.toLowerCase()===w)return t}u=B.af("[^A-Z]",!0,!1,!1,!1)
s=B.aL(r.toUpperCase(),u,"")
if(s.length>=2)return A.a.ap(s,0,2)
return A.a.ap(s+"XX",0,2)},
hqq(){var w,v
for(w=0,v='=== EVERYTHING YOU KNOW ABOUT NGMY (use only this; never invent features, numbers, prices, names or dates) ===\nTHE FOUNDER: NGMY stands for New Global Movement for Youth. It was created by KB PABLO QR (always written in capital letters), the Founder, President and CEO of NGMY. The "QR" in his name comes from QR codes, which NGMY and his business use a lot, and it is part of his brand. He built NGMY as one app (ngmy.org) that gives young people and families tools for work, money, learning, community and creativity. When a story is about the CEO, call him KB PABLO QR, Founder, President and CEO of NGMY. Do not give him a different name, age, birthplace, degrees, awards or family details, and do not make up quotes from him.\n\nFEATURES:\n';w<45;++w)v+="- "+D.ddD[w]+"\n"
v=v+"\nABOUT THE COMMUNITY AND THE SYSTEM (facts you can use; do not invent numbers, names or dates):\n- The community is M'MBONDO (also written MBONDO). Its motto is \"EMO 'YA M'MBONDO\". Members live in different US states.\n- The Civic Registry \u2014 people also just call it \"the system\" \u2014 was built inside the NGMY app for the M'MBONDO community.\n- Why it was built: a big problem in the community was not seeing where contribution money went. People gave but were unsure what happened to their money, so trust and giving went down. The system brings light: every contribution gets a receipt, members can see where the money is going and how much has been contributed, and that transparency builds trust and the confidence to keep contributing \u2014 when you know where your money goes, you give.\n- What it does:\n  \u2022 Registers community members with their details and a member ID card (Registry ID), kept safely as the community's records.\n  \u2022 Lets each state know how many members it has (state totals, nationwide totals).\n  \u2022 Records contributions with receipts and contribution reports, so everyone sees the money trail.\n  \u2022 Authorized Registrars enroll members and help them; there is a help mode for assisted sign-up.\n  \u2022 Civic Voting for community decisions, and a Civic State Wallet that shows each state's funds.\n- How NGMY helps members beyond the registry: help finding jobs and applying for them, fixing their houses, helping them get houses, sending money, and NGMY Advisors (AI advisors) who help people apply for jobs, food stamps and other benefits and fill out applications for them.\n- Tone for this community: warm, proud, hopeful and trustworthy; it is about unity, transparency and helping each other.\n\n\nHOW MEMBERS USE THE APP:\n"+"WHAT NGMY IS: NGMY stands for New Global Movement for Youth \u2014 multi-hub app by KB PABLO QR (Founder/CEO). Live site ngmy.org. Wallet balance in USD. Gmail login (@gmail.com), password 6+ chars, also Google/GitHub sign-in.\n\nBOTTOM NAV (7 tabs):\n1) Home \u2014 brand, Helper AI entry, loans, tech frames (Neural/Signal/Core/Vault Channel games).\n2) Tool Hub \u2014 Business Card Creator, Menu Studio (+ Bio Studio), Business Essentials.\n3) Slides \u2014 presentations + Marriage/Hati documents.\n4) NGMY Hub (center) \u2014 Civic Registry, NGMY Store, Help Center, Document Scanner; center star may open App Builder when enabled.\n5) Advisors \u2014 AI advisor chat (this hub).\n6) Creator Hub \u2014 Doc Share, Quote Calc, QR Generator, Play Zone, Kiswahili School, Recorder, Video Studio, Phone Unlock.\n7) Profile \u2014 theme, logout, legal, Worksheets (Projects / Cashier IOUs / Family Tree).\n\nMENU STUDIO (Tool Hub \u2192 Menu Studio):\n- Menus tab: design restaurant/business menus, publish public link https://ngmy.org/?m={slug}\n- First menu free; more menus need Menu Studio subscription (paywall shows price).\n- Bios tab (same studio): link-in-bio pages, publish https://ngmy.org/?b={slug}\n- First Bio free with starter template; more Bios/templates need Bio Studio subscription.\n- Extra Bio photo/header changes may need a photo pack after free changes.\n- Local Menu / Local Bio: Home Essentials hub \u2192 device-local publish at /local-menu/ and /local-bio/\n\nBUSINESS CARD: Tool Hub \u2192 create/edit/download. Paid unlock for edit+download window (paywall).\n\nSLIDES: Slides tab. Free blank + some class templates/designs. Slides Pro unlocks more. Marriage documents are a separate short session unlock.\n\nADVISORS: 10 free minutes, then Advisors subscription for unlimited chat (admins unlimited). ADVISOR BROWSER: the live browser is free for 10 minutes, then $5.99 buys 2 hours (Stripe or Cash App with a screenshot approved by an admin) to use within a week; it only counts while the browser is open.\n\nCIVIC REGISTRY (NGMY Hub): community ID, PIN gate, enrollment, registrars (AR), civic registrar roles. Guest enroll can use ?civic=enroll. Georgia stays free. Every other state gets a 2-month free Civic Registry trial for Authorized Registrars, then $50/mo State Registrar sponsorship starting month 3.\n\nVAULT GAMES (Home \u2192 Vault Channel): arcade games. Need an active Growth Income investment for full access; otherwise one free play total. Free trial does not unlock games.\n\nGROWTH INCOME / INVEST: purchase a plan, daily clock-in for ROI over work days; min withdraw typically $10. Plans are $5, $20, $30, $50 and $100 (the most expensive is $100). Plan availability is admin-controlled.\n\nCREATOR TOOLS:\n- Doc Share \u2014 share docs; free individual creations then paid / org license.\n- QR Generator \u2014 free saves then paid access window.\n- Transfer \u2014 receive free; limited free sends then monthly unlock.\n- Kiswahili School \u2014 Basics free; other levels one-time unlock.\n- Document Scanner \u2014 trial then monthly.\n- Message Translator \u2014 paid unlimited.\n- Phone Unlock \u2014 short access window.\n- Video Studio / Recorder / Play Zone \u2014 Creator Hub tools.\n- Worksheets \u2192 Cashier (IOUs/receipts), Family Tree (create/photos may be paid).\n- Invoices \u2014 free standard tier with limited free premium saves; paid templates via paywall.\n- App Builder \u2014 Hub center (if enabled); cloud + Bolt AI may be paid.\n- Music Studio \u2014 AI songs may cost wallet credits when enabled.\n\nSTORE / JOBS / LOANS / HELP: Store in NGMY Hub; loans from Home; jobs/helpers need approval; Help Center + NGMY Helper AI for support.\n\nGUEST LINKS (no full login): /bio/, /local-bio/, /menu/, /local-menu/, /invoice/, /app/{slug}.\n\nHOW TO HELP MEMBERS: Give clear tap-by-tap steps. Stay in character. If unsure of a live price, send them to the feature paywall rather than guessing.\n"
return A.a.i(v.charCodeAt(0)==0?v:v)},
bAU(d,e){return C.i_U(d,e)},
i_U(d,e){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l
var $async$bAU=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
if(d.length===0){u=!1
w=1
break}r=B.hS([d],"application/pdf")
n=x.z
q=B.aUE(B.a([r],x.e3),e,B.G(["type","application/pdf"],n,n))
p=B.cA(B.G(["files",B.a([q],x.fA),"title",e],x.N,x.C))
n=window.navigator
n.toString
o=n
w=7
return B.b(B.eh(B.jQ(o,"share",[p]),x.H),$async$bAU)
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
return B.i($async$bAU,v)},
h4i(){var w=0,v=B.j(x.y),u,t,s
var $async$h4i=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=$.fmO
s=$.bAr
if(s==null)s="presentation.pdf"
if(t==null||t.length===0){u=!1
w=1
break}u=C.bAU(t,s)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$h4i,v)},
bCe(){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$bCe=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=$.fmO
l=$.bAr
k=l==null?"presentation.pdf":l
if(m==null||m.length===0){u=!1
w=1
break}w=Z.hkW()?3:4
break
case 3:w=5
return B.b(C.bAU(m,k),$async$bCe)
case 5:if(e){u=!0
w=1
break}case 4:r=$.bAs
if(r==null||r.length===0){u=!1
w=1
break}t=7
p=B.ne(null)
p.href=r
p.download=k
o=p.style
o.display="none"
q=p
o=document.body
if(o!=null)o.appendChild(q).toString
J.Lu(q)
w=10
return B.b(B.bO(A.a1,null,x.H),$async$bCe)
case 10:J.m4(q)
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
return B.i($async$bCe,v)},
h49(){var w=0,v=B.j(x.y),u,t,s,r
var $async$h49=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=$.bAs
if(r==null||r.length===0){u=!1
w=1
break}try{t=window
t.toString
A.lP.qV(t,r,"_blank")
u=!0
w=1
break}catch(q){u=!1
w=1
break}case 1:return B.h(u,v)}})
return B.i($async$h49,v)},
h4q(d,e){var w=0,v=B.j(x.H),u,t
var $async$h4q=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:t=(self.URL||self.webkitURL).createObjectURL(B.hS([d],"text/html"))
t.toString
u=window
u.toString
A.lP.qV(u,t,"_blank")
return B.h(null,v)}})
return B.i($async$h4q,v)},
b29(d,e){var w=0,v=B.j(x.y),u
var $async$b29=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(B.b2b(d,e),$async$b29)
case 3:if(g){u=!0
w=1
break}w=4
return B.b(B.b2a(d),$async$b29)
case 4:u=g<2
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$b29,v)}},D,H,K,Am,A8,Y,A9,V,An,G,F,E,W,Q,Z,A_,Ao,Ap,X,Aa,L,Aq,A0,O,A1,M,Ab,Ar,As,P,A2,At,Ac,Ad,Au,Ae,Af,Ag,Av,Aw,R,Ax,I,Ay,S,T,Az,N,A3,A4,A5
J=c[1]
B=c[0]
A=c[2]
Ah=c[198]
A6=c[70]
Ai=c[51]
Aj=c[61]
U=c[214]
A7=c[54]
Ak=c[140]
Al=c[224]
C=a.updateHolder(c[4],C)
D=c[212]
H=c[95]
K=c[132]
Am=c[37]
A8=c[216]
Y=c[213]
A9=c[225]
V=c[202]
An=c[128]
G=c[182]
F=c[32]
E=c[215]
W=c[117]
Q=c[142]
Z=c[29]
A_=c[170]
Ao=c[227]
Ap=c[178]
X=c[105]
Aa=c[114]
L=c[217]
Aq=c[127]
A0=c[64]
O=c[192]
A1=c[79]
M=c[152]
Ab=c[115]
Ar=c[93]
As=c[219]
P=c[119]
A2=c[135]
At=c[92]
Ac=c[55]
Ad=c[188]
Au=c[36]
Ae=c[77]
Af=c[141]
Ag=c[223]
Av=c[226]
Aw=c[222]
R=c[71]
Ax=c[220]
I=c[167]
Ay=c[179]
S=c[49]
T=c[218]
Az=c[228]
N=c[199]
A3=c[221]
A4=c[110]
A5=c[60]
C.o0.prototype={
vc(d){var w,v,u=this,t=u.c
if(t===0)return u
w=!u.a
v=u.b
t=C.tW(t,v)
return new C.o0(t===0?!1:w,v,t)},
bMg(d){var w,v,u,t,s,r,q=this.c
if(q===0)return $.Dc()
w=q+d
v=this.b
u=new Uint16Array(w)
for(t=q-1;t>=0;--t)u[t+d]=v[t]
s=this.a
r=C.tW(w,u)
return new C.o0(r===0?!1:s,u,r)},
bMN(d){var w,v,u,t,s,r,q,p=this,o=p.c
if(o===0)return $.Dc()
w=o-d
if(w<=0)return p.a?$.h5Q():$.Dc()
v=p.b
u=new Uint16Array(w)
for(t=d;t<o;++t)u[t-d]=v[t]
s=p.a
r=C.tW(w,u)
q=new C.o0(r===0?!1:s,u,r)
if(s)for(t=0;t<d;++t)if(v[t]!==0)return q.aF(0,$.a2P())
return q},
e0(d,e){var w,v,u,t,s,r=this
if(e<0)throw B.W(B.dI("shift-amount must be posititve "+e,null))
w=r.c
if(w===0)return r
v=A.o.an(e,16)
if(A.o.F(e,16)===0)return r.bMg(v)
u=w+v+1
t=new Uint16Array(u)
C.hhu(r.b,w,e,t)
w=r.a
s=C.tW(u,t)
return new C.o0(s===0?!1:w,t,s)},
mt(d,e){var w,v,u,t,s,r,q,p,o,n=this
if(e<0)throw B.W(B.dI("shift-amount must be posititve "+e,null))
w=n.c
if(w===0)return n
v=A.o.an(e,16)
u=A.o.F(e,16)
if(u===0)return n.bMN(v)
t=w-v
if(t<=0)return n.a?$.h5Q():$.Dc()
s=n.b
r=new Uint16Array(t)
C.hPM(s,w,e,r)
w=n.a
q=C.tW(t,r)
p=new C.o0(q===0?!1:w,r,q)
if(w){if((s[v]&A.o.e0(1,u)-1)!==0)return p.aF(0,$.a2P())
for(o=0;o<v;++o)if(s[o]!==0)return p.aF(0,$.a2P())}return p},
aL(d,e){var w,v=this.a
if(v===e.a){w=C.cIi(this.b,this.c,e.b,e.c)
return v?0-w:w}return v?-1:1},
a8r(d,e){var w,v,u,t=this,s=t.c,r=d.c
if(s<r)return d.a8r(t,e)
if(s===0)return $.Dc()
if(r===0)return t.a===e?t:t.vc(0)
w=s+1
v=new Uint16Array(w)
C.hPK(t.b,s,d.b,r,v)
u=C.tW(w,v)
return new C.o0(u===0?!1:e,v,u)},
Hp(d,e){var w,v,u,t=this,s=t.c
if(s===0)return $.Dc()
w=d.c
if(w===0)return t.a===e?t:t.vc(0)
v=new Uint16Array(s)
C.bah(t.b,s,d.b,w,v)
u=C.tW(s,v)
return new C.o0(u===0?!1:e,v,u)},
bzf(d,e){var w,v,u,t,s,r=this.c,q=d.c
r=r<q?r:q
w=this.b
v=d.b
u=new Uint16Array(r)
for(t=0;t<r;++t)u[t]=w[t]&v[t]
s=C.tW(r,u)
return new C.o0(!1,u,s)},
bze(d,e){var w,v,u=this.c,t=this.b,s=d.b,r=new Uint16Array(u),q=d.c
if(u<q)q=u
for(w=0;w<q;++w)r[w]=t[w]&~s[w]
for(w=q;w<u;++w)r[w]=t[w]
v=C.tW(u,r)
return new C.o0(!1,r,v)},
bzg(d,e){var w,v,u,t,s,r=this.c,q=d.c,p=r>q?r:q,o=this.b,n=d.b,m=new Uint16Array(p)
if(r<q){w=r
v=d}else{w=q
v=this}for(u=0;u<w;++u)m[u]=o[u]|n[u]
t=v.b
for(u=w;u<p;++u)m[u]=t[u]
s=C.tW(p,m)
return new C.o0(s!==0,m,s)},
UX(d,e){var w,v,u,t=this
if(t.c===0||e.c===0)return $.Dc()
w=t.a
if(w===e.a){if(w){w=$.a2P()
return t.Hp(w,!0).bzg(e.Hp(w,!0),!0).a8r(w,!0)}return t.bzf(e,!1)}if(w){v=t
u=e}else{v=e
u=t}return u.bze(v.Hp($.a2P(),!1),!1)},
a9(d,e){var w,v,u=this,t=u.c
if(t===0)return e
w=e.c
if(w===0)return u
v=u.a
if(v===e.a)return u.a8r(e,v)
if(C.cIi(u.b,t,e.b,w)>=0)return u.Hp(e,v)
return e.Hp(u,!v)},
aF(d,e){var w,v,u=this,t=u.c
if(t===0)return e.vc(0)
w=e.c
if(w===0)return u
v=u.a
if(v!==e.a)return u.a8r(e,v)
if(C.cIi(u.b,t,e.b,w)>=0)return u.Hp(e,v)
return e.Hp(u,!v)},
aI(d,e){var w,v,u,t,s,r,q,p=this.c,o=e.c
if(p===0||o===0)return $.Dc()
w=p+o
v=this.b
u=e.b
t=new Uint16Array(w)
for(s=0;s<o;){C.hhv(u[s],v,0,t,s,p);++s}r=this.a!==e.a
q=C.tW(w,t)
return new C.o0(q===0?!1:r,t,q)},
bMf(d){var w,v,u,t
if(this.c<d.c)return $.Dc()
this.aRN(d)
w=$.h_a.c9()-$.axR.c9()
v=C.h_c($.h_9.c9(),$.axR.c9(),$.h_a.c9(),w)
u=C.tW(w,v)
t=new C.o0(!1,v,u)
return this.a!==d.a&&u>0?t.vc(0):t},
coL(d){var w,v,u,t=this
if(t.c<d.c)return t
t.aRN(d)
w=C.h_c($.h_9.c9(),0,$.axR.c9(),$.axR.c9())
v=C.tW($.axR.c9(),w)
u=new C.o0(!1,w,v)
if($.h_b.c9()>0)u=u.mt(0,$.h_b.c9())
return t.a&&u.c>0?u.vc(0):u},
aRN(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.c
if(f===$.hhr&&d.c===$.hht&&g.b===$.hhq&&d.b===$.hhs)return
w=d.b
v=d.c
u=16-A.o.gaks(w[v-1])
if(u>0){t=new Uint16Array(v+5)
s=C.hhp(w,v,u,t)
r=new Uint16Array(f+5)
q=C.hhp(g.b,f,u,r)}else{r=C.h_c(g.b,0,f,f+2)
s=v
t=w
q=f}p=t[s-1]
o=q-s
n=new Uint16Array(q)
m=C.h_d(t,s,o,n)
l=q+1
k=r.$flags|0
if(C.cIi(r,q,n,m)>=0){k&2&&B.aj(r)
r[q]=1
C.bah(r,l,n,m,r)}else{k&2&&B.aj(r)
r[q]=0}j=new Uint16Array(s+2)
j[s]=1
C.bah(j,s+1,t,s,j)
i=q-1
while(o>0){h=C.hPL(p,r,i);--o
C.hhv(h,j,0,r,o,s)
if(r[i]<h){m=C.h_d(j,s,o,n)
C.bah(r,l,n,m,r)
while(--h,r[i]<h)C.bah(r,l,n,m,r)}--i}$.hhq=g.b
$.hhr=f
$.hhs=w
$.hht=v
$.h_9.b=r
$.h_a.b=l
$.axR.b=s
$.h_b.b=u},
gX(d){var w,v,u,t=new C.cIj(),s=this.c
if(s===0)return 6707
w=this.a?83585:429689
for(v=this.b,u=0;u<s;++u)w=t.$2(w,v[u])
return new C.cIk().$1(w)},
A(d,e){if(e==null)return!1
return e instanceof C.o0&&this.aL(0,e)===0},
tr(d,e){return this.aL(0,e)>0},
O(d){var w,v,u
for(w=this.c-1,v=this.b,u=0;w>=0;--w)u=u*65536+v[w]
return this.a?-u:u},
v7(d){var w,v,u,t,s,r,q,p=this,o={},n=p.c
if(n===0)return 0
w=new Uint8Array(8);--n
v=p.b
u=16*n+A.o.gaks(v[n])
if(u>1024)return p.a?-1/0:1/0
if(p.a)w[7]=128
t=u-53+1075
w[6]=(t&15)<<4
w[7]=(w[7]|A.o.aC(t,4))>>>0
o.a=o.b=0
o.c=n
s=new C.cIl(o,p)
n=s.$1(5)
w[6]=w[6]|n&15
for(r=5;r>=0;--r)w[r]=s.$1(8)
q=new C.cIm(w)
if(J.A(s.$1(1),1))if((w[0]&1)===1)q.$0()
else if(o.b!==0)q.$0()
else for(r=o.c;r>=0;--r)if(v[r]!==0){q.$0()
break}return J.le(A.aH.gaQ(w)).getFloat64(0,!0)},
u(d){var w,v,u,t,s,r=this,q=r.c
if(q===0)return"0"
if(q===1){if(r.a)return A.o.u(-r.b[0])
return A.o.u(r.b[0])}w=B.a([],x.s)
q=r.a
v=q?r.vc(0):r
while(v.c>1){u=$.huS()
if(u.c===0)B.b8(D.b5R)
t=v.coL(u).u(0)
w.push(t)
s=t.length
if(s===1)w.push("000")
if(s===2)w.push("00")
if(s===3)w.push("0")
v=v.bMf(u)}w.push(A.o.u(v.b[0]))
if(q)w.push("-")
return new B.dx(w,x.bJ).hv(0)},
$iaSc:1,
$ihM:1}
C.aRD.prototype={
M(d,e){var w,v=this.b,u=e.a,t=v.h(0,u)
if(t!=null){this.a[t]=e
return}w=this.a
w.push(e)
v.n(0,u,w.length-1)},
gL(d){return this.a.length},
h(d,e){return this.a[e]},
n(d,e,f){var w,v
if(e<0||e>=this.a.length)return
w=this.b
v=this.a
w.W(0,v[e].a)
v[e]=f
w.n(0,f.a,e)},
cN8(d,e){var w=this.b.h(0,e)
return w!=null?this.a[w]:null},
gI(d){return A.d.gI(this.a)},
gal(d){return A.d.gal(this.a)},
gam(d){return this.a.length===0},
gcm(d){return this.a.length!==0},
gaf(d){var w=this.a
return new J.k8(w,w.length,B.S(w).k("k8<1>"))}}
C.S1.prototype={
cVd(){var w,v
if(this.as==null)this.bd4()
w=this.as
v=w==null?null:w.apj()
return v==null?null:v.eP()},
bd4(){var w,v
if(this.as!=null)return
w=this.Q
if(w!=null){v=w.apj().eP()
this.as=new C.bPC(v)}},
gY(d){return this.at}}
C.a4_.prototype={
a4(){return"CompressionType."+this.b}}
C.bHR.prototype={
eB(d){var w,v,u,t,s=this
if(d===0)return 0
if(s.c===0){s.c=8
s.b=s.a.cq()}for(w=s.a,v=0;u=s.c,d>u;){v=A.o.e0(v,u)+(s.b&A.zg[u])
d-=u
s.c=8
u=w.b
u.toString
s.b=u[w.c++]}if(d>0){if(u===0){s.c=8
s.b=w.cq()}w=A.o.e0(v,d)
u=s.b
t=s.c-d
v=w+(A.o.fJ(u,t)&A.zg[d])
s.c=t}return v}}
C.bGb.prototype={
cLn(d,e){var w,v,u,t,s,r=this,q=new C.bHR(d)
r.cx=r.CW=r.ch=r.ay=0
if(q.eB(8)!==66||q.eB(8)!==90||q.eB(8)!==104)return!1
w=r.a=q.eB(8)-48
if(w<0||w>9)return!1
r.b=new Uint32Array(w*1e5)
v=0
for(;;){w=d.c
u=d.d
u===$&&B.c()
if(!(w<u))break
t=r.cn2(q)
if(t<0)return!1
if(t===0){q.eB(8)
q.eB(8)
q.eB(8)
q.eB(8)
s=r.cn5(q,e)
if(s<0)return!1
v=(v<<1|v>>>31)^s^4294967295}else if(t===2){q.eB(8)
q.eB(8)
q.eB(8)
q.eB(8)
return!0}}return!0},
cn2(d){var w,v,u,t
for(w=!0,v=!0,u=0;u<6;++u){t=d.eB(8)
if(t!==D.dpQ[u])v=!1
if(t!==D.d27[u])w=!1
if(!w&&!v)return-1}return v?0:2},
cn5(d3,d4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9=this,d0=4294967295,d1=d3.eB(1),d2=((d3.eB(8)<<8|d3.eB(8))<<8|d3.eB(8))>>>0
c9.c=new Uint8Array(16)
for(w=0;w<16;++w){v=c9.c
u=d3.eB(1)
v.$flags&2&&B.aj(v)
v[w]=u}c9.d=new Uint8Array(256)
for(w=0,t=0;w<16;++w,t+=16)if(c9.c[w]!==0)for(s=0;s<16;++s){v=c9.d
u=d3.eB(1)
v.$flags&2&&B.aj(v)
v[t+s]=u}c9.c27()
v=c9.fx
if(v===0)return-1
r=v+2
q=d3.eB(3)
if(q<2||q>6)return-1
v=d3.eB(15)
c9.ax=v
if(v<1)return-1
c9.w=new Uint8Array(18002)
c9.x=new Uint8Array(18002)
for(w=0;v=c9.ax,w<v;++w){for(s=0;;){if(d3.eB(1)===0)break;++s
if(s>=q)return-1}v=c9.w
v.$flags&2&&B.aj(v)
v[w]=s}p=new Uint8Array(6)
for(w=0;w<q;++w)p[w]=w
for(u=c9.x,o=c9.w,n=u.$flags|0,w=0;w<v;++w){m=o[w]
l=p[m]
for(;m>0;m=k){k=m-1
p[m]=p[k]}p[0]=l
n&2&&B.aj(u)
u[w]=l}c9.fr=B.c2(6,$.hsY(),!1,x.E)
for(j=0;j<q;++j){v=c9.fr
v[j]=new Uint8Array(258)
i=d3.eB(5)
for(w=0;w<r;++w){for(;;){if(i<1||i>20)return-1
if(d3.eB(1)===0)break
i=d3.eB(1)===0?i+1:i-1}v=c9.fr[j]
v.$flags&2&&B.aj(v)
v[w]=i}}v=$.hsX()
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
if(f<h)h=f}c9.bYx(v[j],u[j],o[j],n[j],h,g,r)
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
a3=c9.auc(d3)
if(a3<0)return-1
for(a4=0;;){if(a3===e)break
if(a3===0||a3===1){a5=-1
a6=1
do{if(a6>=2097152)return-1
if(a3===0)a5+=a6
else if(a3===1)a5+=2*a6
a6*=2
a3=c9.auc(d3)}while(a3===0||a3===1);++a5
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
a3=c9.auc(d3)
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
d4.bJ(c3)
c1=(c1<<8^D.Hx[c1>>>24&255^v])>>>0;--c2}if(c4===c0)return c1
if(c4>c0)return-1
v=c9.b
b5=v[b5]
b6=b5>>>8
if(b8===0){b8=D.Hz[b9];++b9
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
if(b8===0){b8=D.Hz[b9];++b9
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
if(b8===0){b8=D.Hz[b9];++b9
if(b9===512)b9=0}u=b8===1?1:0
c5=b5&255^u;++c4
if(c4===c0){c6=b7
b5=b6
c2=3
continue}if(c5!==b7){c6=c5
b5=b6
c2=3
continue}b5=v[b6]
if(b8===0){b8=D.Hz[b9];++b9
if(b9===512)b9=0}u=b8===1?1:0
c2=(b5&255^u)+4
b5=v[b5>>>8]
b6=b5>>>8
if(b8===0){b8=D.Hz[b9];++b9
if(b9===512)b9=0}v=b8===1?1:0
c6=b5&255^v
c4=c4+1+1
b5=b6}else for(c7=b7,c2=0,c3=0,c4=1;;c3=c7,c7=c8){if(c2>0){for(v=c3&255;;){if(c2===1)break
d4.bJ(c3)
c1=c1<<8^D.Hx[c1>>>24&255^v];--c2}d4.bJ(c3)
c1=(c1<<8^D.Hx[c1>>>24&255^v])>>>0}if(c4>c0)return-1
if(c4===c0)return c1
v=1e5*c9.a
if(b5>=v)return-1
u=c9.b
b5=u[b5]
c5=b5&255
b5=b5>>>8;++c4
c2=0
if(c5!==c7){d4.bJ(c7)
c1=(c1<<8^D.Hx[c1>>>24&255^c7&255])>>>0
c8=c5
continue}if(c4===c0){d4.bJ(c7)
c1=(c1<<8^D.Hx[c1>>>24&255^c7&255])>>>0
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
auc(d){var w,v,u,t,s=this,r=s.ay
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
t=d.eB(u)
for(;;){if(u>20)return-1
r=s.cy
r===$&&B.c()
if(t<=r[u])break;++u
t=(t<<1|d.eB(1))>>>0}r=s.dx
r===$&&B.c()
r=t-r[u]
if(r<0||r>=258)return-1
w=s.db
w===$&&B.c()
return w[r]},
bYx(d,e,f,g,h,i,j){var w,v,u,t,s,r,q,p
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
c27(){var w,v,u,t=this
t.fx=0
t.e=new Uint8Array(256)
for(w=0;w<256;++w){v=t.d
v===$&&B.c()
if(v[w]!==0){v=t.e
u=t.fx++
v.$flags&2&&B.aj(v)
v[u]=w}}}}
C.cAs.prototype={
aIb(d,e,f){var w,v,u,t,s,r=this,q=r.a=r.bPK(e)
if(q<0)return
e.c=q
if(e.aP()!==101010256)return
e.b_()
e.b_()
e.b_()
e.b_()
r.f=e.aP()
r.r=e.aP()
w=e.b_()
if(w>0)e.aIe(w,!1)
r.cnq(e)
q=r.r
v=r.f
u=e.aLd(Math.min(v,1024),v,q)
q=r.x
for(;;){v=u.c
t=u.d
t===$&&B.c()
if(!(v<t))break
if(u.aP()!==33639248)break
s=new C.b9_()
s.cVc(0,u,e,f)
q.push(s)}},
cnq(d){var w,v,u,t,s=d.c,r=this.a-20
if(r<0)return
w=d.a84(20,r)
if(w.aP()!==117853008){d.c=s
return}w.aP()
v=w.te()
w.aP()
d.c=v
if(d.aP()!==101075792){d.c=s
return}d.te()
d.b_()
d.b_()
d.aP()
d.aP()
d.te()
d.te()
u=d.te()
t=d.te()
this.f=u
this.r=t
d.c=s},
bPK(d){var w,v,u,t,s,r,q,p,o,n
if(d.gL(0)<=4)return-1
w=d.c
v=d.gL(0)-4
u=Math.min(v,1024)
t=v-u
for(s=u-4;t>=0;){d.c=t
r=d.a84(u,t)
q=d.c
p=r.b
d.c=q+(p==null?0:p.length-r.c)
o=new B.am9(A.i6)
o.aMu(r.eP(),A.i6,null,null)
for(n=s;n>=0;--n){o.c=n
if(o.aP()===101010256){d.c=w
return t+n}}t=t>0&&t<u?0:t-u}return-1}}
C.cAq.prototype={}
C.axv.prototype={
a4(){return"ZipEncryptionMode."+this.b}}
C.cAt.prototype={
aIb(d,e,f){var w,v,u,t,s,r,q,p,o=this
if(e.aP()!==67324752)return
e.b_()
o.b=e.b_()
w=D.aF1.h(0,e.b_())
o.c=w==null?D.Mi:w
o.d=e.b_()
o.e=e.b_()
o.f=e.aP()
o.r=e.aP()
o.w=e.aP()
v=e.b_()
u=e.b_()
o.x=e.ao3(v)
o.y=e.hg(u).eP()
w=o.z
t=w.w
o.r=t
w=w.x
o.w=w
o.at=(o.b&1)!==0?D.aW7:D.E2
o.ay=f
o.Q=e.hg(t)
if(o.at!==D.E2&&u>2){w=o.y
w.toString
s=B.rn(w,A.i6,null,null)
for(;;){w=s.c
t=s.d
t===$&&B.c()
if(!(w<t))break
if(s.b_()===39169){s.b_()
s.b_()
s.ao3(2)
w=s.b
w.toString
r=w[s.c++]
q=s.b_()
o.at=D.aW8
o.ax=new C.cAq(r,q)
w=D.aF1.h(0,q)
o.c=w==null?D.Mi:w}}}if((o.b&8)!==0){p=e.aP()
if(p===134695760)o.f=e.aP()
else o.f=p
o.r=e.aP()
o.w=e.aP()}},
gL(d){return this.bmI().length},
apj(){var w,v,u,t,s,r=this,q=null,p=r.Q
if(p==null)return B.rn(new Uint8Array(0),A.i6,q,q)
w=r.at
if(w!==D.E2)if(p.gL(0)<=0)r.at=D.E2
else{if(w===D.aW7){p=r.bKy(p)
r.Q=p}else if(w===D.aW8){p=r.bKb(p)
r.Q=p}r.at=D.E2}w=r.c
if(w===D.ahy){v=p.c
u=B.dj()
p=r.Q
if(p.gL(0)<=524288e3)u.b=A.pD.Bz(p.eP(),!0,!1)
else{t=B.a8D(A.i6,r.w)
p=r.Q
p.toString
A.pD.a4c(p,t,!0,!1)
u.b=t.GX()}r.Q.c=v
return B.rn(u.bj(),A.i6,q,q)}else if(w===D.ahz){s=B.a8D(A.i6,32768)
p=r.Q
v=p.c
C.hy7().cLn(p,s)
u=s.GX()
r.Q.c=v
return B.rn(u,A.i6,q,q)}else return B.rn(p.eP(),A.i6,q,q)},
bmI(){var w=this.Q
if(w==null)return new Uint8Array(0)
return w.eP()},
u(d){return this.x},
b8Z(d){var w=this.ch,v=C.JX(C.hoq(w[0].O(0),d))
w[0]=v
v=w[1].a9(0,v.UX(0,C.JX(255)))
w[1]=v
w[1]=v.aI(0,C.JX(134775813)).a9(0,C.JX(1)).UX(0,C.JX(4294967295))
w[2]=C.JX(C.hoq(w[2].O(0),w[1].mt(0,24).O(0)))},
aRb(){var w=(this.ch[2].UX(0,C.JX(65535)).O(0)|2)>>>0
return w*((w^1)>>>0)>>>8&255},
bKy(d){var w,v,u,t,s,r=this,q=null
if(r.Q==null)return B.rn(new Uint8Array(0),A.i6,q,q)
for(w=0;w<12;++w){v=r.Q
u=v.b
u.toString
r.b8Z(u[v.c++]^r.aRb())}t=r.Q.eP()
for(v=t.length,u=t.$flags|0,w=0;w<v;++w){s=t[w]^r.aRb()
r.b8Z(s)
u&2&&B.aj(t)
t[w]=s}return B.rn(t,A.i6,q,q)},
bKb(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this.ax.c
if(k===1){w=d.hg(8).eP()
v=16}else if(k===2){w=d.hg(12).eP()
v=24}else{w=d.hg(16).eP()
v=32}u=d.hg(2).eP()
t=d.hg(d.gL(0)-10)
s=d.hg(10)
r=t.eP()
k=this.ay
k.toString
q=C.hPr(k,w,v)
p=new Uint8Array(B.ch(A.aH.ds(q,0,v)))
k=v*2
o=new Uint8Array(B.ch(A.aH.ds(q,v,k)))
if(!C.hgV(A.aH.ds(q,k,k+2),u))throw B.W(B.fm("password error"))
k=new Uint8Array(16)
n=new C.bEM(k,new Uint8Array(16),p)
k=x.S
m=J.a5o(0,k)
m=n.r=new C.cjC(m)
m.c=!0
m.b=m.bm0(!0,new C.at6(p))
if(m.c)m.d=B.bo(D.ok,!0,k)
else m.d=B.bo(D.z5,!0,k)
l=C.hf7(C.hf9(),64)
l.bfr(new C.at6(o))
n.w=l
n.cUN(r,0,r.length)
k=s.eP()
m=n.x
m===$&&B.c()
if(!C.hgV(k,m))throw B.W(B.fm("macs don't match"))
return B.rn(r,A.i6,null,null)}}
C.b9_.prototype={
cVc(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=this
n.a=e.b_()
e.b_()
e.b_()
e.b_()
e.b_()
e.b_()
e.aP()
n.w=e.aP()
n.x=e.aP()
w=e.b_()
v=e.b_()
u=e.b_()
n.y=e.b_()
e.b_()
n.Q=e.aP()
n.as=e.aP()
if(w>0)n.at=e.ao3(w)
if(v>0){t=e.hg(v).eP()
n.ax=t
if(v>=4){s=B.rn(t,A.i6,null,null)
for(;;){t=s.c
r=s.d
r===$&&B.c()
if(!(t<r))break
q=s.b_()
p=s.b_()
o=s.a84(p,s.c)
t=s.c
r=o.b
s.c=t+(r==null?0:r.length-o.c)
if(q===1){if(p>=8&&n.x===4294967295){n.x=o.te()
p-=8}if(p>=8&&n.w===4294967295){n.w=o.te()
p-=8}if(p>=8&&n.as===4294967295){n.as=o.te()
p-=8}if(p>=4&&n.y===65535)n.y=o.aP()}}}}if(u>0)e.ao3(u)
f.c=n.as
t=new C.cAt(D.Mi,n,D.E2,B.a([C.JX(0),C.JX(0),C.JX(0)],x.f3))
n.ch=t
t.aIb(0,f,g)},
u(d){return this.at}}
C.cAr.prototype={
cLo(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=new C.cAs(B.a([],x.fT))
this.a=g
g.aIb(0,d,f)
g=B.a([],x.bm)
w=B.T(x.N,x.S)
v=new C.aRD(g,w)
for(u=this.a.x,t=u.length,s=0;s<u.length;u.length===t||(0,B.M)(u),++s){r=u[s]
q=r.ch
p=r.Q>>>16
o=q.x
n=A.a.cc(o,"/")||A.a.cc(o,"\\")
m=w.h(0,o)
l=m!=null?g[m]:h
if(l==null){l=n?new C.S1(o,A.o.an(Date.now(),1000),0):C.h7f(o,q.w,q)
v.M(0,l)}l.b=p
if(r.a>>>8===3)if((p&61440)===40960){k=C.h7f(o,q.w,q)
if(k.as==null)k.bd4()
o=k.as
if(o==null)j=h
else{o=o.a
j=new B.am9(A.i6)
j.aMu(o,A.i6,h,h)}i=j==null?h:j.eP()
if(i!=null)new B.Gf(!1).DA(i,0,h,!0)}}return v}}
C.bEM.prototype={
cUN(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.w
l===$&&B.c()
l.a.Cv(0,d,0,f)
for(l=e+f,w=m.c,v=d.$flags|0,u=m.b,t=e;t<l;t=s){s=t+16
r=s<=l?16:l-t
C.hxR(u,m.a)
q=m.r
if(16>u.byteLength)B.b8(B.dI("Input buffer too short",null))
if(16>w.byteLength)B.b8(B.dI("Output buffer too short",null))
p=q.c
o=q.b
if(p){o===$&&B.c()
q.bO1(u,0,w,0,o)}else{o===$&&B.c()
q.bKC(u,0,w,0,o)}for(n=0;n<r;++n){q=t+n
p=d[q]
o=w[n]
v&2&&B.aj(d)
d[q]=p^o}++m.a}l=m.w
w=l.b
w===$&&B.c()
w=new Uint8Array(w)
m.x=w
l.Lf(w,0)
m.x=A.aH.ds(m.x,0,10)
w=m.w
l=w.a
l.jP(0)
w=w.d
w===$&&B.c()
l.Cv(0,w,0,w.length)
return f}}
C.cjH.prototype={}
C.cjL.prototype={}
C.cjF.prototype={}
C.at6.prototype={}
C.cjK.prototype={
cLD(d,e,f,g){var w,v,u,t,s,r,q,p,o=this,n=o.a
n===$&&B.c()
w=n.c
n=o.b
v=n.b
v===$&&B.c()
u=A.o.e9(w+v-1,v)
t=new Uint8Array(4)
s=new Uint8Array(u*v)
n.bfr(new C.at6(A.aH.fP(d,e)))
for(r=0,q=1;q<=u;++q){for(p=3;;--p){t[p]=t[p]+1
if(t[p]!==0)break}n=o.a
o.bP5(n.a,n.b,t,s,r)
r+=v}A.aH.hi(f,g,g+w,s)
return o.a.c},
bP5(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m=this
if(e<=0)throw B.W(B.dI("Iteration count must be at least 1.",null))
w=m.b
v=w.a
v.Cv(0,d,0,d.length)
v.Cv(0,f,0,4)
u=m.c
u===$&&B.c()
w.Lf(u,0)
u=m.c
A.aH.hi(g,h,h+u.length,u)
for(u=g.$flags|0,t=1;t<e;++t){s=m.c
v.Cv(0,s,0,s.length)
w.Lf(m.c,0)
for(s=m.c,r=s.length,q=0;q!==r;++q){p=h+q
o=g[p]
n=s[q]
u&2&&B.aj(g)
g[p]=o^n}}}}
C.cjG.prototype={}
C.cjE.prototype={}
C.at7.prototype={
A(d,e){var w,v,u
if(e==null)return!1
w=!1
if(e instanceof C.at7){v=this.a
v===$&&B.c()
u=e.a
u===$&&B.c()
if(v===u){w=this.b
w===$&&B.c()
v=e.b
v===$&&B.c()
v=w===v
w=v}}return w},
tr(d,e){var w=this.a
w===$&&B.c()
w=A.o.tr(w,e.gbYO())
if(!w)e.gbYO()
return w},
aKE(d,e){this.a=0
this.b=d},
tu(d){return this.aKE(d,null)},
aLg(d){var w,v=this,u=v.b
u===$&&B.c()
w=u+d
u=w>>>0
v.b=u
if(w!==u){u=v.a
u===$&&B.c();++u
v.a=u
v.a=u>>>0}},
u(d){var w=this,v=new B.ff(""),u=w.a
u===$&&B.c()
w.b0E(v,u)
u=w.b
u===$&&B.c()
w.b0E(v,u)
u=v.a
return u.charCodeAt(0)==0?u:u},
b0E(d,e){var w,v=A.o.fW(e,16)
for(w=8-v.length;w>0;--w)d.a+="0"
d.a+=v},
gX(d){var w,v=this.a
v===$&&B.c()
w=this.b
w===$&&B.c()
return B.bt(v,w,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h)}}
C.cjJ.prototype={
jP(d){var w,v=this
v.a.tu(0)
v.c=0
A.aH.ht(v.b,0,4,0)
v.w=0
w=v.r
A.d.ht(w,0,w.length,0)
w=v.f
w[0]=1732584193
w[1]=4023233417
w[2]=2562383102
w[3]=271733878
w[4]=3285377520},
aoN(d){var w,v=this,u=v.b,t=v.c
t===$&&B.c()
w=t+1
v.c=w
u.$flags&2&&B.aj(u)
u[t]=d&255
if(w===4){v.b27(u,0)
v.c=0}v.a.aLg(1)},
Cv(d,e,f,g){var w=this.clM(e,f,g)
f+=w
g-=w
w=this.clN(e,f,g)
this.clD(e,f+w,g-w)},
Lf(d,e){var w,v=this,u=C.hf8(v.a),t=u.a
t===$&&B.c()
t=C.h4V(t,3)
u.a=t
w=u.b
w===$&&B.c()
u.a=(t|w>>>29)>>>0
u.b=C.h4V(w,3)
v.clH()
v.clE(u)
v.at1()
v.cfP(d,e)
v.jP(0)
return 20},
b27(d,e){var w=this,v=w.w
v===$&&B.c()
w.w=v+1
w.r[v]=J.ob(A.aH.gaQ(d),d.byteOffset,d.length).getUint32(e,A.ik===w.d)
if(w.w===16)w.at1()},
at1(){this.cUM()
this.w=0
A.d.ht(this.r,0,16,0)},
clD(d,e,f){while(f>0){this.aoN(d[e]);++e;--f}},
clN(d,e,f){var w,v
for(w=this.a,v=0;f>4;){this.b27(d,e)
e+=4
f-=4
w.aLg(4)
v+=4}return v},
clM(d,e,f){var w,v=0
for(;;){w=this.c
w===$&&B.c()
if(!(w!==0&&f>0))break
this.aoN(d[e]);++e;--f;++v}return v},
clH(){this.aoN(128)
for(;;){var w=this.c
w===$&&B.c()
if(!(w!==0))break
this.aoN(0)}},
clE(d){var w,v=this,u=v.w
u===$&&B.c()
if(u>14)v.at1()
u=v.d
switch(u){case A.ik:u=v.r
w=d.b
w===$&&B.c()
u[14]=w
w=d.a
w===$&&B.c()
u[15]=w
break
case A.Et:u=v.r
w=d.a
w===$&&B.c()
u[14]=w
w=d.b
w===$&&B.c()
u[15]=w
break
default:throw B.W(B.bd("Invalid endianness: "+u.u(0)))}},
cfP(d,e){var w,v,u,t,s,r,q
for(w=this.e,v=this.f,u=d.length,t=A.ik===this.d,s=0;s<w;++s){r=v[s]
q=J.ob(A.aH.gaQ(d),d.byteOffset,u)
q.$flags&2&&B.aj(q,11)
q.setUint32(e+s*4,r,t)}},
gdc(d){return this.f}}
C.cjM.prototype={
cUM(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
for(w=this.r,v=16;v<80;++v){u=w[v-3]^w[v-8]^w[v-14]^w[v-16]
w[v]=((u&$.qh[1])<<1|u>>>31)>>>0}t=this.f
s=t[0]
r=t[1]
q=t[2]
p=t[3]
o=t[4]
for(n=s,m=0,l=0;l<4;++l,m=j){k=$.qh[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r&q|~r&p)>>>0)+w[m]+1518500249>>>0
i=$.qh[30]
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
q=((q&i)<<30|q>>>2)>>>0}for(l=0;l<4;++l,m=j){k=$.qh[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r^q^p)>>>0)+w[m]+1859775393>>>0
i=$.qh[30]
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
q=((q&i)<<30|q>>>2)>>>0}for(l=0;l<4;++l,m=j){k=$.qh[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r&q|r&p|q&p)>>>0)+w[m]+2400959708>>>0
i=$.qh[30]
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
q=((q&i)<<30|q>>>2)>>>0}for(l=0;l<4;++l,m=j){k=$.qh[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r^q^p)>>>0)+w[m]+3395469782>>>0
i=$.qh[30]
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
C.cjI.prototype={
bfr(d){var w,v,u,t,s=this,r=s.a
r.jP(0)
w=d.a
w===$&&B.c()
v=w.length
u=s.c
u===$&&B.c()
if(v>u){r.Cv(0,w,0,v)
w=s.d
w===$&&B.c()
r.Lf(w,0)
w=s.b
w===$&&B.c()
v=w}else{t=s.d
t===$&&B.c()
A.aH.hi(t,0,v,w)}w=s.d
w===$&&B.c()
A.aH.ht(w,v,w.length,0)
w=s.e
w===$&&B.c()
A.aH.hi(w,0,u,s.d)
s.ba8(s.d,u,54)
s.ba8(s.e,u,92)
u=s.d
r.Cv(0,u,0,u.length)},
Lf(d,e){var w,v,u=this,t=u.a,s=u.e
s===$&&B.c()
w=u.c
w===$&&B.c()
t.Lf(s,w)
s=u.e
t.Cv(0,s,0,s.length)
v=t.Lf(d,e)
s=u.e
A.aH.ht(s,w,s.length,0)
s=u.d
s===$&&B.c()
t.Cv(0,s,0,s.length)
return v},
ba8(d,e,f){var w,v,u
for(w=d.$flags|0,v=0;v<e;++v){u=d[v]
w&2&&B.aj(d)
d[v]=u^f}}}
C.cjD.prototype={}
C.cjC.prototype={
a2u(d){return(D.ok[d&255]&255|(D.ok[d>>>8&255]&255)<<8|(D.ok[d>>>16&255]&255)<<16|D.ok[d>>>24&255]<<24)>>>0},
bm0(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=a0.a
e===$&&B.c()
w=e.length
if(w<16||w>32||(w&7)!==0)throw B.W(B.dI("Key length not 128/192/256 bits.",null))
v=w>>>2
u=v+6
f.a=u
t=u+1
s=J.e4(t,x.bW)
for(u=x.S,r=0;r<t;++r)s[r]=B.c2(4,0,!1,u)
switch(v){case 4:q=J.ob(A.aH.gaQ(e),e.byteOffset,w)
p=q.getUint32(0,!0)
e=s[0]
e[0]=p
o=q.getUint32(4,!0)
e[1]=o
n=q.getUint32(8,!0)
e[2]=n
m=q.getUint32(12,!0)
e[3]=m
for(r=1;r<=10;++r){p=(p^f.a2u((m>>>8|(m&$.qh[24])<<24)>>>0)^D.cEX[r-1])>>>0
e=s[r]
e[0]=p
o=(o^p)>>>0
e[1]=o
n=(n^o)>>>0
e[2]=n
m=(m^n)>>>0
e[3]=m}break
case 6:q=J.ob(A.aH.gaQ(e),e.byteOffset,w)
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
p=(p^f.a2u((k>>>8|(k&$.qh[24])<<24)>>>0)^j)>>>0
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
p=(p^f.a2u((k>>>8|(k&$.qh[24])<<24)>>>0)^i)>>>0
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
case 8:q=J.ob(A.aH.gaQ(e),e.byteOffset,w)
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
p=(p^f.a2u((g>>>8|(g&$.qh[24])<<24)>>>0)^j)>>>0
e=s[r]
e[0]=p
o=(o^p)>>>0
e[1]=o
n=(n^o)>>>0
e[2]=n
m=(m^n)>>>0
e[3]=m;++r
if(r>=15)break
l=(l^f.a2u(m))>>>0
e=s[r]
e[0]=l
k=(k^l)>>>0
e[1]=k
h=(h^k)>>>0
e[2]=h
g=(g^h)>>>0
e[3]=g;++r}break
default:throw B.W(B.bd("Should never get here"))}return s},
bO1(b2,b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=J.ob(A.aH.gaQ(b2),b2.byteOffset,16),a3=a2.getUint32(b3,!0),a4=a2.getUint32(b3+4,!0),a5=a2.getUint32(b3+8,!0),a6=a2.getUint32(b3+12,!0),a7=b6[0],a8=a3^a7[0],a9=a4^a7[1],b0=a5^a7[2],b1=a6^a7[3]
for(a7=this.a-1,w=1;w<a7;){v=D.ee[a8&255]
u=D.ee[a9>>>8&255]
t=$.qh[8]
s=D.ee[b0>>>16&255]
r=$.qh[16]
q=D.ee[b1>>>24&255]
p=$.qh[24]
o=b6[w]
n=v^(u>>>24|(u&t)<<8)^(s>>>16|(s&r)<<16)^(q>>>8|(q&p)<<24)^o[0]
q=D.ee[a9&255]
s=D.ee[b0>>>8&255]
u=D.ee[b1>>>16&255]
v=D.ee[a8>>>24&255]
m=q^(s>>>24|(s&t)<<8)^(u>>>16|(u&r)<<16)^(v>>>8|(v&p)<<24)^o[1]
v=D.ee[b0&255]
u=D.ee[b1>>>8&255]
s=D.ee[a8>>>16&255]
q=D.ee[a9>>>24&255]
l=v^(u>>>24|(u&t)<<8)^(s>>>16|(s&r)<<16)^(q>>>8|(q&p)<<24)^o[2]
q=D.ee[b1&255]
a8=D.ee[a8>>>8&255]
a9=D.ee[a9>>>16&255]
b0=D.ee[b0>>>24&255];++w
b1=q^(a8>>>24|(a8&t)<<8)^(a9>>>16|(a9&r)<<16)^(b0>>>8|(b0&p)<<24)^o[3]
o=D.ee[n&255]
b0=D.ee[m>>>8&255]
a9=D.ee[l>>>16&255]
a8=D.ee[b1>>>24&255]
q=b6[w]
a8=o^(b0>>>24|(b0&t)<<8)^(a9>>>16|(a9&r)<<16)^(a8>>>8|(a8&p)<<24)^q[0]
a9=D.ee[m&255]
b0=D.ee[l>>>8&255]
o=D.ee[b1>>>16&255]
s=D.ee[n>>>24&255]
a9=a9^(b0>>>24|(b0&t)<<8)^(o>>>16|(o&r)<<16)^(s>>>8|(s&p)<<24)^q[1]
s=D.ee[l&255]
o=D.ee[b1>>>8&255]
b0=D.ee[n>>>16&255]
u=D.ee[m>>>24&255]
b0=s^(o>>>24|(o&t)<<8)^(b0>>>16|(b0&r)<<16)^(u>>>8|(u&p)<<24)^q[2]
u=D.ee[b1&255]
o=D.ee[n>>>8&255]
s=D.ee[m>>>16&255]
v=D.ee[l>>>24&255];++w
b1=u^(o>>>24|(o&t)<<8)^(s>>>16|(s&r)<<16)^(v>>>8|(v&p)<<24)^q[3]}n=D.ee[a8&255]^C.nw(D.ee[a9>>>8&255],24)^C.nw(D.ee[b0>>>16&255],16)^C.nw(D.ee[b1>>>24&255],8)^b6[w][0]
m=D.ee[a9&255]^C.nw(D.ee[b0>>>8&255],24)^C.nw(D.ee[b1>>>16&255],16)^C.nw(D.ee[a8>>>24&255],8)^b6[w][1]
l=D.ee[b0&255]^C.nw(D.ee[b1>>>8&255],24)^C.nw(D.ee[a8>>>16&255],16)^C.nw(D.ee[a9>>>24&255],8)^b6[w][2]
b1=D.ee[b1&255]^C.nw(D.ee[a8>>>8&255],24)^C.nw(D.ee[a9>>>16&255],16)^C.nw(D.ee[b0>>>24&255],8)^b6[w][3]
a7=D.ok[n&255]
b0=D.ok[m>>>8&255]
v=this.d
u=v[l>>>16&255]
t=v[b1>>>24&255]
s=b6[w+1]
r=s[0]
q=v[m&255]
p=D.ok[l>>>8&255]
a9=D.ok[b1>>>16&255]
o=v[n>>>24&255]
k=s[1]
j=v[l&255]
i=D.ok[b1>>>8&255]
h=D.ok[n>>>16&255]
g=D.ok[m>>>24&255]
f=s[2]
e=v[b1&255]
d=v[n>>>8&255]
v=v[m>>>16&255]
a0=D.ok[l>>>24&255]
s=s[3]
a1=J.ob(A.aH.gaQ(b4),b4.byteOffset,16)
a1.$flags&2&&B.aj(a1,11)
a1.setUint32(b5,(a7&255^(b0&255)<<8^(u&255)<<16^t<<24^r)>>>0,!0)
r=J.ob(A.aH.gaQ(b4),b4.byteOffset,16)
r.$flags&2&&B.aj(r,11)
r.setUint32(b5+4,(q&255^(p&255)<<8^(a9&255)<<16^o<<24^k)>>>0,!0)
k=J.ob(A.aH.gaQ(b4),b4.byteOffset,16)
k.$flags&2&&B.aj(k,11)
k.setUint32(b5+8,(j&255^(i&255)<<8^(h&255)<<16^g<<24^f)>>>0,!0)
f=J.ob(A.aH.gaQ(b4),b4.byteOffset,16)
f.$flags&2&&B.aj(f,11)
f.setUint32(b5+12,(e&255^(d&255)<<8^(v&255)<<16^a0<<24^s)>>>0,!0)},
bKC(b1,b2,b3,b4,b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=J.ob(A.aH.gaQ(b1),b1.byteOffset,16).getUint32(b2,!0),a1=J.ob(A.aH.gaQ(b1),b1.byteOffset,16).getUint32(b2+4,!0),a2=J.ob(A.aH.gaQ(b1),b1.byteOffset,16).getUint32(b2+8,!0),a3=J.ob(A.aH.gaQ(b1),b1.byteOffset,16).getUint32(b2+12,!0),a4=this.a,a5=b5[a4],a6=a0^a5[0],a7=a1^a5[1],a8=a2^a5[2],a9=a4-1,b0=a3^a5[3]
for(a5=a8,a4=a7;a9>1;){w=D.ed[a6&255]
v=D.ed[b0>>>8&255]
u=$.qh[8]
t=D.ed[a5>>>16&255]
s=$.qh[16]
r=D.ed[a4>>>24&255]
q=$.qh[24]
a7=b5[a9]
p=w^(v>>>24|(v&u)<<8)^(t>>>16|(t&s)<<16)^(r>>>8|(r&q)<<24)^a7[0]
r=D.ed[a4&255]
t=D.ed[a6>>>8&255]
v=D.ed[b0>>>16&255]
w=D.ed[a5>>>24&255]
o=r^(t>>>24|(t&u)<<8)^(v>>>16|(v&s)<<16)^(w>>>8|(w&q)<<24)^a7[1]
w=D.ed[a5&255]
v=D.ed[a4>>>8&255]
t=D.ed[a6>>>16&255]
r=D.ed[b0>>>24&255]
n=w^(v>>>24|(v&u)<<8)^(t>>>16|(t&s)<<16)^(r>>>8|(r&q)<<24)^a7[2]
r=D.ed[b0&255]
a5=D.ed[a5>>>8&255]
a4=D.ed[a4>>>16&255]
a6=D.ed[a6>>>24&255];--a9
b0=r^(a5>>>24|(a5&u)<<8)^(a4>>>16|(a4&s)<<16)^(a6>>>8|(a6&q)<<24)^a7[3]
a7=D.ed[p&255]
a6=D.ed[b0>>>8&255]
a4=D.ed[n>>>16&255]
a5=D.ed[o>>>24&255]
r=b5[a9]
a6=a7^(a6>>>24|(a6&u)<<8)^(a4>>>16|(a4&s)<<16)^(a5>>>8|(a5&q)<<24)^r[0]
a5=D.ed[o&255]
a4=D.ed[p>>>8&255]
a7=D.ed[b0>>>16&255]
t=D.ed[n>>>24&255]
a4=a5^(a4>>>24|(a4&u)<<8)^(a7>>>16|(a7&s)<<16)^(t>>>8|(t&q)<<24)^r[1]
t=D.ed[n&255]
a7=D.ed[o>>>8&255]
a5=D.ed[p>>>16&255]
v=D.ed[b0>>>24&255]
a5=t^(a7>>>24|(a7&u)<<8)^(a5>>>16|(a5&s)<<16)^(v>>>8|(v&q)<<24)^r[2]
v=D.ed[b0&255]
a7=D.ed[n>>>8&255]
t=D.ed[o>>>16&255]
w=D.ed[p>>>24&255];--a9
b0=v^(a7>>>24|(a7&u)<<8)^(t>>>16|(t&s)<<16)^(w>>>8|(w&q)<<24)^r[3]}p=D.ed[a6&255]^C.nw(D.ed[b0>>>8&255],24)^C.nw(D.ed[a5>>>16&255],16)^C.nw(D.ed[a4>>>24&255],8)^b5[a9][0]
o=D.ed[a4&255]^C.nw(D.ed[a6>>>8&255],24)^C.nw(D.ed[b0>>>16&255],16)^C.nw(D.ed[a5>>>24&255],8)^b5[a9][1]
n=D.ed[a5&255]^C.nw(D.ed[a4>>>8&255],24)^C.nw(D.ed[a6>>>16&255],16)^C.nw(D.ed[b0>>>24&255],8)^b5[a9][2]
b0=D.ed[b0&255]^C.nw(D.ed[a5>>>8&255],24)^C.nw(D.ed[a4>>>16&255],16)^C.nw(D.ed[a6>>>24&255],8)^b5[a9][3]
a4=D.z5[p&255]
a5=this.d
w=a5[b0>>>8&255]
v=a5[n>>>16&255]
u=D.z5[o>>>24&255]
t=b5[0]
s=t[0]
r=a5[o&255]
q=a5[p>>>8&255]
a7=D.z5[b0>>>16&255]
m=a5[n>>>24&255]
l=t[1]
k=a5[n&255]
j=D.z5[o>>>8&255]
i=D.z5[p>>>16&255]
h=a5[b0>>>24&255]
g=t[2]
f=D.z5[b0&255]
e=a5[n>>>8&255]
a8=a5[o>>>16&255]
a5=a5[p>>>24&255]
t=t[3]
d=J.ob(A.aH.gaQ(b3),b3.byteOffset,16)
d.$flags&2&&B.aj(d,11)
d.setUint32(b4,(a4&255^(w&255)<<8^(v&255)<<16^u<<24^s)>>>0,!0)
d.setUint32(b4+4,(r&255^(q&255)<<8^(a7&255)<<16^m<<24^l)>>>0,!0)
d.setUint32(b4+8,(k&255^(j&255)<<8^(i&255)<<16^h<<24^g)>>>0,!0)
d.setUint32(b4+12,(f&255^(e&255)<<8^(a8&255)<<16^a5<<24^t)>>>0,!0)}}
C.bPB.prototype={}
C.bPC.prototype={
gL(d){var w=this.a.length
return w},
apj(){return B.rn(this.a,A.i6,null,null)}}
C.baw.prototype={
v8(d){return C.hSH(d)}}
C.cu0.prototype={
MT(d){var w=d.w,v=Math.max(1,A.k.dk(w/186)),u=Math.max(0,w-16*(v-1))/v,t=u/0.52
return new B.aag(v,t+20,u+16,t,u,B.u4(d.x))},
ns(d){return!1}}
C.bQF.prototype={
cFz(d){if(this.b)throw B.W(B.bd("FontLoader is already loaded"))
this.c.push(d.bL(new C.bQG(),x.E))},
mK(d){var w=0,v=B.j(x.H),u=this,t,s,r,q,p
var $async$mK=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(u.b)throw B.W(B.bd("FontLoader is already loaded"))
u.b=!0
t=u.c,s=t.length,r=u.a,q=0
case 2:if(!(q<t.length)){w=4
break}p=C
w=6
return B.b(t[q],$async$mK)
case 6:w=5
return B.b(p.fy1(f,r),$async$mK)
case 5:case 3:t.length===s||(0,B.M)(t),++q
w=2
break
case 4:return B.h(null,v)}})
return B.i($async$mK,v)}}
C.awa.prototype={
a4(){return"SystemUiMode."+this.b}}
C.a8B.prototype={
A(d,e){if(e==null)return!1
if(J.bP(e)!==B.b_(this))return!1
return e instanceof C.a8B&&e.a===this.a},
gX(d){return B.bt(B.b_(this),B.wV(this.a),A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h)},
u(d){var w="<optimized out>#"
if(B.b_(this)===D.fPn)return"["+(w+B.e6(this.a))+"]"
return"[ObjectKey "+(w+B.e6(this.a))+"]"}}
C.a14.prototype={
U(){return new C.aJu(B.aX(x.N))},
cSU(d){return this.d.$1(d)},
cQF(){return this.e.$0()}}
C.aJu.prototype={
a_(){this.a2()
this.Pf()},
Pf(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Pf=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.a.cQF(),$async$Pf)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.f7W(t,s))
case 1:return B.h(u,v)}})
return B.i($async$Pf,v)},
Zb(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$Zb=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.a.c
q=B.S(r).k("Z<1>")
p=B.C(new B.Z(r,new C.f8_(t),q),q.k("J.E"))
if(p.length===0||t.r){w=1
break}t.m(new C.f80(t))
w=3
return B.b(C.anU(p),$async$Zb)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.f81(t,s,p))
w=4
return B.b(t.Pf(),$async$Zb)
case 4:case 1:return B.h(u,v)}})
return B.i($async$Zb,v)},
a1o(d){return this.cpX(d)},
cpX(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a1o=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}t.m(new C.f7X(t))
s=J.q(d,"id")
w=3
return B.b(C.c0E(J.k(s==null?"":s)),$async$a1o)
case 3:r=f
if(r==null){if(t.c==null){w=1
break}t.m(new C.f7Y(t))
w=1
break}q=C.h4o(r,!1)
q.z=!1
s=t.a
s.toString
w=4
return B.b(s.cSU(B.a([q],x.D)),$async$a1o)
case 4:if(t.c==null){w=1
break}t.m(new C.f7Z(t,r))
case 1:return B.h(u,v)}})
return B.i($async$a1o,v)},
Pe(d,e){return this.bL3(0,e)},
bL3(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$Pe=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}s=J.a4(e)
r=s.h(e,"name")
q=J.k(r==null?"this presentation":r)
r=t.c
r.toString
w=3
return B.b(B.cf(null,null,!0,null,new C.f7R(q),r,null,!0,!0,x.y),$async$Pe)
case 3:if(g!==!0||t.c==null){w=1
break}t.m(new C.f7S(t))
s=s.h(e,"id")
w=4
return B.b(C.anT(J.k(s==null?"":s)),$async$Pe)
case 4:if(t.c==null){w=1
break}t.m(new C.f7T(t))
w=5
return B.b(t.Pf(),$async$Pe)
case 5:case 1:return B.h(u,v)}})
return B.i($async$Pe,v)},
cEz(d){var w=B.bi(d),v=w==null?null:w.bU()
if(v==null)return""
return A.iw[B.bJ(v)-1]+" "+B.bV(v)},
aR2(d,e){var w=null,v=B.m(e*0.3)
return B.p(w,B.X(d,A.c,w,w,w,e*0.5),A.f,w,w,new B.o(w,w,w,v,w,D.ON,A.n),w,e,w,w,w,w,w,e)},
aR1(d){return this.aR2(d,44)},
b7i(d,e,f,g){var w,v,u=null,t=this.w===d,s=t?D.ON:u,r=B.m(14),q=B.X(e,t?A.c:A.aB,u,u,u,17),p=x.p
q=B.a([q,M.Jl,B.d(f,u,u,u,u,u,u,B.l(u,u,t?A.c:A.aB,u,u,u,u,u,u,u,u,13.5,u,u,A.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],p)
if(g>0){w=A.c.j(t?0.25:0.1)
v=B.m(10)
A.d.v(q,B.a([M.Jl,B.p(u,B.d(""+g,u,u,u,u,u,u,B.l(u,u,t?A.c:A.aQ,u,u,u,u,u,u,u,u,11,u,u,A.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.f,u,u,new B.o(w,u,u,v,u,u,A.n),u,u,u,u,D.bBD,u,u,u)],p))}return B.E(B.aB(A.cc,B.d9(u,B.B(q,A.m,u,A.b8,A.j,0,u,u),u,u,A.b7,new B.o(u,u,u,r,u,s,A.n),A.ho,u,u,u,A.tV,u,u,u),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.f85(this,d),u,u,u,u,u,u,!1,A.a4),1)},
cjL(d){var w,v,u,t,s,r,q=null,p=this.d.q(0,d.a),o=p?A.d0.j(0.14):D.Yl,n=B.m(18),m=p?A.d0:A.ds
m=B.I(m,A.r,p?1.8:1)
w=this.aR1(A.qf)
v=B.d(d.b,q,1,A.a2,q,q,q,D.aSs,q,q,q)
u=d.r.length
t=u===1?"":"s"
s=x.p
t=B.E(B.x(B.a([v,A.cK,B.d(""+u+" slide"+t,q,q,q,q,q,q,D.aSu,q,q,q)],s),A.E,q,A.e,A.j,0,A.p),1)
v=p?D.ON:q
u=p?q:B.I(A.aZ,A.r,1.6)
r=p?D.bSt:q
return B.aB(q,B.d9(q,B.B(B.a([w,A.ba,t,B.d9(q,r,q,q,A.b7,new B.o(q,q,u,q,q,v,A.a5),A.fH,q,26,q,q,q,q,26)],s),A.m,q,A.e,A.j,0,q,q),q,q,A.b7,new B.o(o,q,m,n,q,q,A.n),A.fH,q,q,A.d1,A.bh,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.f7V(this,p,d),q,q,q,q,q,q,!1,A.a4)},
crz(d){var w,v,u,t,s,r=this,q=null,p=J.a4(d),o=p.h(d,"savedAt"),n=r.cEz(J.k(o==null?"":o))
o=B.m(18)
w=B.I(A.ds,A.r,1)
v=r.aR1(A.O1)
u=p.h(d,"name")
u=B.d(J.k(u==null?"Presentation":u),q,1,A.a2,q,q,q,D.aSs,q,q,q)
p=p.h(d,"slides")
p=B.w(p==null?"?":p)
t=n.length===0?"":" \xb7 saved "+n
s=x.p
t=B.E(B.x(B.a([u,A.cK,B.d(p+" slides"+t,q,q,q,q,q,q,D.aSu,q,q,q)],s),A.E,q,A.e,A.j,0,A.p),1)
p=r.b3P(A.hJ,A.bu,"Bring it back",r.r?q:new C.f82(r,d))
return B.p(q,B.B(B.a([v,A.ba,t,p,A.bo,r.b3P(A.ec,A.cs,"Delete",r.r?q:new C.f83(r,d))],s),A.m,q,A.e,A.j,0,q,q),A.f,q,q,new B.o(D.Yl,q,w,o,q,q,A.n),q,q,q,A.d1,D.bw0,q,q,q)},
b3P(d,e,f,g){var w=null,v=g==null,u=e.j(v?0.06:0.14)
return B.hc(B.aB(w,B.p(w,B.X(d,v?A.aZ:e,w,w,w,19),A.f,w,w,new B.o(u,w,w,w,w,w,A.a5),w,38,w,w,w,w,w,38),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a4),w,f,w,w)},
ath(d,e,f){var w=null
return new B.D(D.bv2,B.x(B.a([B.X(d,A.aZ,w,w,w,46),A.ad,B.d(e,w,w,w,w,w,w,D.fli,w,w,w),A.av,B.d(f,w,w,w,w,w,w,D.fdx,A.L,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),w)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.e
if(h==null)h=A.c6
w=j.a.c.length
v=w!==0&&j.d.a===w
w=B.aH(d,A.bX,x.w).w
u=B.p(i,i,A.f,i,i,new B.o(A.aZ,i,i,B.m(3),i,i,A.n),i,4,i,i,i,i,i,42)
t=x.p
s=B.a([j.aR2(A.yT,46),A.ba,D.bCw],t)
if(j.r)s.push(D.ehD)
s.push(B.aJ(i,i,i,i,A.ru,i,i,i,new C.f88(d),i,i,i,i,i,i))
s=B.B(s,A.m,i,A.e,A.j,0,i,i)
r=A.c.j(0.05)
q=B.m(18)
p=B.I(A.ds,A.r,1)
o=J.a4(h)
q=B.a([A.R,u,new B.D(D.byF,s,i),B.p(i,B.B(B.a([j.b7i(0,A.yA,"Save",j.a.c.length),j.b7i(1,A.Oe,"Saved",o.gL(h))],t),A.m,i,A.e,A.j,0,i,i),A.f,i,i,new B.o(r,i,p,q,i,i,A.n),i,i,i,D.bxG,A.ez,i,i,i)],t)
if(j.x!=null){u=(j.y?A.cs:A.bu).j(0.12)
s=B.m(14)
r=B.I((j.y?A.cs:A.bu).j(0.4),A.r,1)
p=j.y
n=p?A.O3:A.eb
n=B.X(n,p?A.cs:A.bu,i,i,i,18)
m=j.x
m.toString
q.push(B.p(i,B.B(B.a([n,A.ab,B.E(B.d(m,i,i,i,i,i,i,A.Ua,i,i,i),1)],t),A.m,i,A.e,A.j,0,i,i),A.f,i,i,new B.o(u,i,r,s,i,i,A.n),i,i,i,D.bxC,A.iQ,i,i,1/0))}u=B.a([],t)
if(j.w===0){s=j.d.a
s=B.a([B.E(B.d(s===0?"Tap the ones to save":""+s+" picked",i,i,i,i,i,i,D.fhd,i,i,i),1)],t)
if(j.a.c.length!==0)s.push(B.aB(i,B.d(v?"Clear":"Pick all",i,i,i,i,i,i,D.fkk,i,i,i),A.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new C.f89(j,v),i,i,i,i,i,i,!1,A.a4))
s=B.a([B.B(s,A.m,i,A.e,A.j,0,i,i),A.R],t)
if(j.a.c.length===0)s.push(j.ath(A.qf,"No presentations yet","Make one first, then save it here."))
for(r=j.a.c,p=r.length,l=0;l<r.length;r.length===p||(0,B.M)(r),++l)s.push(j.cjL(r[l]))
A.d.v(u,s)}else{s=B.a([],t)
if(j.f)s.push(D.eha)
else if(j.e==null)s.push(j.ath(A.ami,"Could not reach the database","Check the connection, then open this again."))
else if(o.gam(h))s.push(j.ath(A.p0,"Nothing saved yet","Save some presentations and they will show up here."))
for(r=o.gaf(h);r.C();)s.push(j.crz(r.gR(r)))
A.d.v(u,s)}q.push(new B.ds(1,A.cn,B.cq(u,i,Y.ajm,i,i,A.ag,!0),i))
if(j.w===0){u=j.d
s=u.a===0
r=s||j.r?i:j.gc4H()
p=s?i:D.ON
s=s?A.c.j(0.07):i
o=B.m(18)
n=u.a===0?i:B.a([new B.ac(0,A.G,A.b5.j(0.4),A.cv,18)],x.V)
u=u.a
m=u===0
k=B.X(A.yA,m?A.jK:A.c,i,i,i,21)
u=m?"Pick presentations to save":"Save "+u+" to the database"
q.push(new B.D(D.byh,B.aB(i,B.d9(i,B.B(B.a([k,A.a8a,new B.ds(1,A.cn,B.eQ(A.A,B.d(u,i,i,i,i,i,i,B.l(i,i,m?A.jK:A.c,i,i,i,i,i,i,i,i,15,i,i,A.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),A.f,A.e0),i)],t),A.m,i,A.b8,A.j,0,i,i),i,i,A.b7,new B.o(s,i,i,o,n,p,A.n),A.ho,i,54,i,i,i,i,i),A.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,r,i,i,i,i,i,i,!1,A.a4),i))}else q.push(A.R)
return B.p(i,B.bm(!0,B.x(q,A.m,i,A.e,A.P,0,A.p),!0,!1,A.af,!0,!1),A.f,i,new B.aY(0,1/0,0,w.a.b*0.9),D.b2L,i,i,i,i,i,i,i,i)}}
C.or.prototype={
ag(){return B.G(["id",this.a,"doc",this.b.ag(),"updatedAt",this.c.a7().ad()],x.N,x.z)}}
C.YN.prototype={
U(){return new C.ay2(B.a([],x.k),B.f8(null,x.H))},
ge_(){return this.c}}
C.ay2.prototype={
a_(){this.a2()
this.Pp()},
Pp(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Pp=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(C.a22(t.a.c),$async$Pp)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.cJH(t,s))
case 1:return B.h(u,v)}})
return B.i($async$Pp,v)},
cxS(d){var w,v,u,t=this
d.c=new B.U(Date.now(),0,!1)
w=J.qp(t.d,new C.cJK(d))
v=w<0
if(v&&C.hPO(d))return t.f
u=t.d
if(v)J.pG(u,0,d)
else J.aG(u,w,d)
v=x.a
B.fVT(new C.cJL(t),v)
return t.f=t.f.bL(new C.cJM(t,d),v).eW(new C.cJN())},
IN(d,e,f){return this.cdk(0,e,f)},
aYM(d,e){return this.IN(0,e,!1)},
cdk(d,e,f){var w=0,v=B.j(x.H),u,t=this,s
var $async$IN=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.a3(s,!1).cg(B.e_(new C.cJG(t,e),!1,null,x.H)),$async$IN)
case 3:w=4
return B.b(t.f,$async$IN)
case 4:w=5
return B.b(t.Pp(),$async$IN)
case 5:case 1:return B.h(u,v)}})
return B.i($async$IN,v)},
aY2(d){var w=A.o.u(1000*Date.now()),v=d==null?D.dCu:d
this.IN(0,new C.or(w,v,new B.U(Date.now(),0,!1)),!0)},
c49(){return this.aY2(null)},
adI(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$adI=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.bT(A.K,null,new C.cJO(),r,!1,!1,!0,null,!1,!1,x.g2),$async$adI)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.aY2(s)
case 1:return B.h(u,v)}})
return B.i($async$adI,v)},
IM(d,e){return this.bKV(0,e)},
bKV(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$IM=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return B.b(B.cf(null,null,!0,null,new C.cJB(e),s,null,!0,!0,x.y),$async$IM)
case 3:if(g!==!0){w=1
break}t.m(new C.cJC(t,e))
w=4
return B.b(t.f,$async$IM)
case 4:w=5
return B.b(C.agv(t.a.c,e.a),$async$IM)
case 5:w=6
return B.b(t.Pp(),$async$IM)
case 6:case 1:return B.h(u,v)}})
return B.i($async$IM,v)},
Di(d){return this.bD4(d)},
bD4(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$Di=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.bT(A.K,null,new C.cJx(d),r,!0,!0,!1,null,!1,!1,x.N),$async$Di)
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
return B.b(t.aYM(0,d),$async$Di)
case 9:w=5
break
case 7:w=10
return B.b(F.h4X(r,d.b,null),$async$Di)
case 10:w=5
break
case 8:w=11
return B.b(t.IM(0,d),$async$Di)
case 11:w=5
break
case 5:case 1:return B.h(u,v)}})
return B.i($async$Di,v)},
bYL(){var w,v,u=null,t=[D.dCx,D.dCv,D.dCw],s=new C.cJE(),r=B.m(26),q=x.V,p=B.a([new B.ac(0,A.G,A.d9.j(0.4),A.eX,24)],q),o=x.p,n=B.a([],o)
for(w=0;w<3;++w){v=new B.aQ(999,999)
n.push(B.p(u,new B.y(D.dmm[w],u,A.oA,u,u,u,u,u,u,u,u,u),A.f,u,u,new B.o(A.c.j(0.18),u,u,new B.bk(v,v,v,v),u,u,A.n),u,u,u,u,A.o7,u,u,u))}return B.p(u,B.B(B.a([B.E(B.x(B.a([D.fKK,A.N,B.bW(A.bD,n,A.bq,6,6),A.aL,B.aB(u,B.p(u,D.eWA,A.f,u,u,new B.o(A.c,u,u,B.m(999),B.a([new B.ac(0,A.G,A.w.j(0.2),A.cH,10)],q),u,A.n),u,u,u,u,U.ajL,u,u,u),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.cJD(this),u,u,u,u,u,u,!1,A.a4)],o),A.E,u,A.e,A.j,0,A.p),1),new B.a7(130,110,new B.an(A.A,u,A.aa,A.t,B.a([s.$3(t[0],-0.22,-30),s.$3(t[2],0.22,30),s.$3(t[1],0,0)],o),u),u)],o),A.m,u,A.e,A.j,0,u,u),A.f,u,u,new B.o(u,u,u,r,p,D.c_R,A.n),u,u,u,u,D.byP,u,u,u)},
bD2(d){var w,v=null,u=d.b.d.length,t=B.m(6),s=B.a([new B.ac(0,A.G,A.w.j(0.5),A.cv,14)],x.V),r=x.p
s=B.p(v,B.bx(B.m(6),new B.an(A.a_,v,A.b1,A.t,B.a([B.eQ(A.A,F.aot(d.b),A.f,A.bW),D.en9,B.ao(v,B.aB(v,B.p(v,D.bTh,A.f,v,v,D.b3I,v,26,v,v,v,v,v,26),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.cJs(this,d),v,v,v,v,v,v,!1,A.a4),v,v,v,4,4,v)],r),v),A.aq),A.f,v,v,new B.o(v,v,v,t,s,v,A.n),v,v,v,v,v,v,v,v)
t=A.a.i(d.b.a)
t=B.d(t.length===0?"Untitled Book":t,v,1,A.a2,v,v,v,D.faI,v,v,v)
w=u===1?"":"s"
return B.aB(v,B.x(B.a([new B.fL(0.6470588235294118,s,v),A.N,t,B.d(""+u+" page"+w,v,v,v,v,v,v,D.fhp,v,v,v)],r),A.E,v,A.e,A.j,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,new C.cJt(this,d),v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.cJu(this,d),v,v,v,v,v,v,!1,A.a4)},
B(d){var w,v,u,t=this,s=null,r=x.p,q=B.eD(B.a([new B.D(K.aig,B.hc(B.aB(s,B.p(s,A.aoY,A.f,s,s,new B.o(s,s,s,s,B.a([new B.ac(0,A.G,A.b5.j(0.5),A.J,12)],x.V),E.wn,A.a5),s,36,s,s,s,s,s,36),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.gc5w(),s,s,s,s,s,s,!1,A.a4),s,"Write with AI",s,s),s)],r),s,s,!0,!0,A.K,s,1,!0,s,0,!1,s,!1,E.na,s,s,s,!0,s,s,s,s,s,D.fKO,s,s,s,1,s,!0)
if(t.e)r=D.b78
else{w=t.bYL()
v=B.a([D.fw8,A.ab],r)
if(J.cK(t.d)){u=B.m(999)
v.push(B.p(s,B.d(""+J.ad(t.d),s,s,s,s,s,s,D.fa7,s,s,s),A.f,s,s,new B.o(D.bca,s,s,u,s,s,A.n),s,s,s,s,A.yh,s,s,s))}r=B.a([new B.nX(A6.ZD,new B.mi(w,s),s),new B.nX(D.byb,new B.mi(B.B(v,A.m,s,A.e,A.j,0,s,s),s),s)],r)
if(J.cp(t.d))r.push(D.f29)
else r.push(new B.nX(D.bxE,B.P8(new B.ox(new C.cJP(t),J.ad(t.d),!0,!0,!0,0,B.t5(),s),D.b6p),s))
r=B.vF(0,s,A.t,s,A.y,s,s,s,s,s,!1,s,A.ag,!1,r)}return B.c5(q,D.baT,r,s,!1,!1,s,s)}}
C.YL.prototype={
U(){return new C.axZ(B.a([],x.bx))},
U9(d){return this.d.$1(d)}}
C.aFk.prototype={}
C.axZ.prototype={
b0G(d,e,f){var w=$.ax(),v=new B.as(new B.bb(d,A.b4,A.aO),w),u=this.gaYL()
v.aR(0,u)
w=new B.as(new B.bb(e,A.b4,A.aO),w)
w.aR(0,u)
return new C.aFk(v,w,f)},
E9(){var w,v=this
v.y=!0
w=v.x
if(w!=null)w.a3(0)
v.x=B.cL(A.q5,new C.cIW(v))},
a_(){var w,v,u,t,s,r,q,p,o,n,m=this
m.a2()
w=m.a.c.b
v=$.ax()
u=new B.as(new B.bb(w.a,A.b4,A.aO),v)
t=m.gaYL()
u.aR(0,t)
m.d!==$&&B.aP()
m.d=u
u=new B.as(new B.bb(w.b,A.b4,A.aO),v)
u.aR(0,t)
m.e!==$&&B.aP()
m.e=u
u=new B.as(new B.bb(w.c,A.b4,A.aO),v)
u.aR(0,t)
m.f!==$&&B.aP()
m.f=u
m.r=w.e
for(u=w.d,s=u.length,r=m.w,q=0;q<u.length;u.length===s||(0,B.M)(u),++q){p=u[q]
o=new B.as(new B.bb(p.a,A.b4,A.aO),v)
o.aR(0,t)
n=new B.as(new B.bb(p.b,A.b4,A.aO),v)
n.aR(0,t)
r.push(new C.aFk(o,n,p.c))}if(r.length===0)r.push(m.b0G("Page 1","",""))},
t(){var w,v,u,t,s,r=this,q=r.x
if(q!=null)q.a3(0)
if(r.y){r.a.c.b=r.gpl()
q=r.a
q.U9(q.c)}q=r.d
q===$&&B.c()
w=q.T$=$.ax()
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
s.P$=0}r.a1()},
gpl(){var w,v,u,t,s,r,q,p,o=this,n=o.d
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
for(s=o.w,r=s.length,q=0;q<s.length;s.length===r||(0,B.M)(s),++q){p=s[q]
t.push(new F.mA(A.a.i(p.a.a.a),p.b.a.a,p.c,""))}return new F.rs(n,w,v,t,u)},
AO(){var w=0,v=B.j(x.H),u=this,t
var $async$AO=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.x
if(t!=null)t.a3(0)
u.y=!1
u.a.c.b=u.gpl()
t=u.a
w=2
return B.b(t.U9(t.c),$async$AO)
case 2:return B.h(null,v)}})
return B.i($async$AO,v)},
c5u(){this.m(new C.cIV(this))
this.E9()},
aXK(d,e){var w=this,v=d+e
if(v<0||v>=w.w.length)return
w.m(new C.cIY(w,d,v))
w.E9()},
c5v(d,e){var w=A.d.cG(this.w,e)
this.m(new C.cJ5())
this.E9()
$.aW.x1$.push(new C.cJ6(w))},
QD(d){return this.cjB(d)},
cjB(d){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$QD=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hV().kW(80,1400,A.eJ),$async$QD)
case 7:q=f
if(q==null){w=1
break}w=8
return B.b(q.fj(),$async$QD)
case 8:p=f
o=q.b.toLowerCase()
n=J.ai2(o,".png")?"image/png":"image/jpeg"
r.m(new C.cIZ(d,n,p))
r.E9()
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
return B.i($async$QD,v)},
xP(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$xP=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(F.hsb(r,t.gpl()),$async$xP)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.cIX(t,s))
t.E9()
case 1:return B.h(u,v)}})
return B.i($async$xP,v)},
cjT(d){var w,v=this,u=null,t=F.fC9(d.c)
if(t==null)return new B.bL(A.a3,u,u,B.hp(D.bMu,D.fyD,new C.cJ0(v,d),u),u)
w=x.p
return new B.D(A.ct,new B.an(A.a_,u,A.aa,A.t,B.a([B.bx(B.m(12),B.fO(t,A.A,u,u,A.cf,A.bW,!0,140,!1,u,1/0),A.aq),B.ao(u,B.B(B.a([v.b3Q(A.kg,new C.cJ1(v,d)),A.bo,v.b3Q(A.cx,new C.cJ2(v,d))],w),A.m,u,A.e,A.j,0,u,u),u,u,u,6,6,u)],w),u),u)},
b3Q(d,e){var w=null
return B.aF(!1,A.a1,!0,w,B.aM(!1,w,!0,new B.D(A.hG,B.X(d,A.c,w,w,w,18),w),A.cL,!0,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,w),A.f,A.aW,0,w,w,A.cL,w,w,A.ah)},
IO(){var w=0,v=B.j(x.H),u,t=this,s
var $async$IO=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.AO(),$async$IO)
case 3:s=t.c
if(s==null){w=1
break}w=4
return B.b(F.h4X(s,t.gpl(),new C.cJ4(t)),$async$IO)
case 4:case 1:return B.h(u,v)}})
return B.i($async$IO,v)},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=x.p,k=B.eD(B.a([new B.D(A.q6,B.hp(D.bRd,D.fEJ,n.gax_(),B.fx(m,m,m,m,m,m,m,m,m,m,m,A.bM,m,m,m,m,m,m,m,m,m,m,m,m,m,m)),m),B.aJ(m,m,m,m,A.aoX,m,m,m,new C.cJ7(n,d),m,m,m,m,"Save",m)],l),m,m,!0,!0,E.Xt,m,1,m,m,m,!1,m,!1,E.na,m,m,m,!0,m,m,m,m,m,D.fzw,m,m,m,1,m,!0),j=Au.aUQ(O.lu,A.c,Ae.Wi,A.og,D.fAg,n.gc5t()),i=B.m(18),h=n.gawZ(),g=B.a([new B.ac(0,A.G,A.w.j(0.4),A.iW,12)],x.V)
g=B.aB(m,B.p(m,new B.a7(92,142.1818181818182,B.eQ(A.A,F.aot(n.gpl()),A.f,A.dy),m),A.f,m,m,new B.o(m,m,m,m,g,m,A.n),m,m,m,m,m,m,m,m),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,h,m,m,m,m,m,m,!1,A.a4)
w=n.r
w===$&&B.c()
i=B.p(m,B.B(B.a([g,A.es,B.E(B.x(B.a([D.fMm,A.av,B.d(F.h3r(w.a).b+" template \xb7 pick from 10, change colours, add your picture.",m,m,m,m,m,m,D.fn3,m,m,m),A.R,B.dq(E.aog,E.aTh,h,B.bp(A.d9,m,m,m,m,m,m,m,m,m,m,m))],l),A.E,m,A.e,A.j,0,A.p),1)],l),A.m,m,A.e,A.j,0,m,m),A.f,m,m,new B.o(E.Xt,m,m,i,m,m,A.n),m,m,m,m,A.bh,m,m,m)
h=n.d
h===$&&B.c()
h=B.aN(m,A.X,!1,m,!0,A.t,m,B.aO(),h,m,m,m,m,m,2,B.bs(m,new B.b5(4,B.m(12),A.dk),m,m,m,m,m,m,!0,m,m,m,m,m,m,A.c,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,"Book title",!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.ak,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,A.ox,!0,A.a6,m,A.ao,m,m,m,m)
w=n.e
w===$&&B.c()
w=B.aN(m,A.X,!1,m,!0,A.t,m,B.aO(),w,m,m,m,m,m,2,B.bs(m,new B.b5(4,B.m(12),A.dk),m,m,m,m,m,m,!0,m,m,m,m,m,m,A.c,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,"Subtitle (optional)",!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.ak,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.a6,m,A.ao,m,m,m,m)
g=n.f
g===$&&B.c()
g=B.a([i,A.aA,h,A.N,w,A.N,B.aN(m,A.X,!1,m,!0,A.t,m,B.aO(),g,m,m,m,m,m,2,B.bs(m,new B.b5(4,B.m(12),A.dk),m,m,m,m,m,m,!0,m,m,m,m,m,m,A.c,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,"Author (optional)",!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.ak,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.a6,m,A.ao,m,m,m,m),A.aL],l)
for(i=n.w,v=0;v<i.length;v=t){h=i[v]
w=new B.aQ(16,16)
u=new B.ay(O.lu.j(0.18),1,A.r,-1)
t=v+1
s=B.aJ(m,m,m,m,D.bPU,m,m,m,v===0?m:new C.cJ8(n,v),m,m,m,m,"Move up",A.cd)
r=i.length
q=B.aJ(m,m,m,m,D.bWh,m,m,m,v===r-1?m:new C.cJ9(n,v),m,m,m,m,"Move down",A.cd)
r=r===1?m:new C.cJa(n,v)
p=new B.aQ(12,12)
o=new B.aQ(12,12)
g.push(B.p(m,B.x(B.a([new B.cb(A.aN,A.e,A.j,A.m,m,A.p,m,0,B.a([new B.y("Page "+t,m,D.fnB,m,m,m,m,m,m,m,m,m),A.b0,s,q,B.aJ(m,m,m,m,B.X(A.ec,A.oV,m,m,m,18),m,m,m,r,m,m,m,m,"Remove page",A.cd)],l),m),B.aN(m,A.X,!1,m,!0,A.t,m,B.aO(),i[v].a,m,m,m,m,m,2,new B.e3(m,m,m,"Title",m,m,m,m,m,m,m,m,m,m,m,m,!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.c,m,m,m,m,m,m,m,new B.b5(4,new B.bk(p,p,p,p),A.dk),!0,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.ak,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,A.ck,!0,A.a6,m,A.ao,m,m,m,m),A.am,n.cjT(i[v]),B.aN(m,A.X,!1,m,!0,A.t,m,B.aO(),i[v].b,m,m,m,m,m,2,new B.e3(m,m,m,"Write here\u2026 long pages flow onto the next paper page",m,m,m,m,m,m,m,m,m,m,m,m,!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.c,m,m,m,m,m,m,m,new B.b5(4,new B.bk(o,o,o,o),A.dk),!0,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.ak,m,m,m,m,m,m,m,m,m,m,5,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.a6,m,A.ao,m,m,m,m)],l),A.m,m,A.e,A.j,0,A.p),A.f,m,m,new B.o(E.na,m,new B.bI(u,u,u,u),new B.bk(w,w,w,w),m,m,A.n),m,m,new C.a8B(h),A.ea,D.bwf,m,m,m))}return B.ou(!0,B.c5(k,E.ago,B.cq(g,m,D.bwI,m,m,A.ag,!1),m,!1,!1,j,m),new C.cJb(n),x.C)}}
C.ay0.prototype={
B(d){var w,v,u=this,t=null,s=u.r,r=s?A.cs:E.na,q=B.m(16),p=B.m(16),o=s?A.aw.j(0.08):A.c.j(0.04)
s=s?A.aw.j(0.16):A.d9.j(0.22)
w=B.m(12)
v=x.p
return new B.D(A.eG,B.aF(!1,A.a1,!0,t,B.aM(!1,q,!0,B.p(t,B.B(B.a([B.p(t,B.X(u.c,r,t,t,t,20),A.f,t,t,new B.o(s,t,t,w,t,t,A.n),t,40,t,t,t,t,t,40),A.ba,B.E(B.x(B.a([B.d(u.d,t,t,t,t,t,t,B.l(t,t,r,t,t,t,t,t,t,t,t,15,t,t,A.H,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),A.bC,B.d(u.e,t,t,t,t,t,t,D.aRQ,t,t,t)],v),A.E,t,A.e,A.j,0,A.p),1),B.X(A.eD,r.j(0.6),t,t,t,t)],v),A.m,t,A.e,A.j,0,t,t),A.f,t,t,new B.o(o,t,t,p,t,t,A.n),t,t,t,t,A.bh,t,t,t),t,!0,t,t,t,t,t,t,t,t,t,t,t,u.f,t,t,t,t,t,t,t),A.f,A.K,0,t,t,t,t,t,A.ah),t)}}
C.aqH.prototype={
U(){return new C.aEa()}}
C.aEa.prototype={
a_(){this.a2()
this.ZR()},
bv(d){this.bG(d)
if(d.c!=this.a.c)this.a1d()},
a1d(){var w=0,v=B.j(x.H),u=this,t
var $async$a1d=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.d
t=t==null?null:t.t()
w=2
return B.b(x.bq.b(t)?t:B.dT(t,x.H),$async$a1d)
case 2:u.d=null
if(u.c!=null)u.m(new C.edr(u))
w=3
return B.b(u.ZR(),$async$a1d)
case 3:return B.h(null,v)}})
return B.i($async$a1d,v)},
ZR(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$ZR=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:o=r.a.c
n=A.a.i(o==null?"":o)
if(J.ad(n)===0){w=1
break}t=4
if(J.d2(n,"http://")||J.d2(n,"https://")||J.d2(n,"data:")){o=B.Yp(B.cG(n,0,null),new B.Pv(!0))
r.d=o}else{o=B.fm("unsupported video ref")
throw B.W(o)}w=7
return B.b(o.io(0).da(0,A.q0),$async$ZR)
case 7:if(r.c==null){w=1
break}r.d.tw(!1)
r.m(new C.edp(r))
t=2
w=6
break
case 4:t=3
m=s.pop()
q=B.ab(m)
$.am.$1("[kiapo video] "+B.w(q))
if(r.c!=null)r.m(new C.edq(r))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$ZR,v)},
t(){var w=this.d
if(w!=null)w.t()
this.a1()},
c89(){var w=this,v=w.d
if(v==null||!w.e)return
if(v.a.f){v.h6(0)
w.m(new C.eds(w))}else{v.q4(0)
w.m(new C.edt(w))}},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.a,m=n.c
if(A.a.i(m==null?"":m).length===0){if(!n.e)return A.bJ
n=B.m(8*n.d)
m=B.a([D.jq.j(0.92),D.Li.j(0.95)],x.O)
w=B.I(A.c_.j(0.55),A.r,1)
v=p.a
u=v.d
t=B.X(A.qi,A.c_,o,o,o,28*u)
v=v.f?"Tap to add president video":"Video ya kiapo"
return B.c1(B.at(B.x(B.a([t,new B.a7(o,6*u,o,o),B.d(v,o,o,o,o,o,o,B.l(o,o,A.c.j(0.85),o,o,o,o,o,o,o,o,11*p.a.d,o,o,A.O,o,o,!0,o,o,o,o,o,o,o,o),A.L,o,o)],x.p),A.m,o,A.e,A.P,0,A.p),o,o,o),new B.o(o,o,w,n,o,new B.a9(A.ay,A.aD,A.x,m,o,o),A.n),A.bf)}if(p.f)return B.at(B.X(A.any,A.aB,o,o,o,28*n.d),o,o,o)
if(!p.e||p.d==null)return D.b80
s=p.d
m=s.a.as
r=m.a
r=r>0?r:16
q=m.b
q=q>0?q:9
n=B.m(6*n.d)
m=B.a([B.eQ(A.A,new B.a7(r,q,new B.Aj(s,o),o),A.t,A.bW)],x.p)
if(!p.r){w=8*p.a.d
v=A.w.j(0.45)
m.push(B.at(B.p(o,B.X(A.id,A.c,o,o,o,28*p.a.d),A.f,o,o,new B.o(v,o,o,o,o,o,A.a5),o,o,o,o,new B.Q(w,w,w,w),o,o,o),o,o,o))}return B.aB(o,B.bx(n,new B.an(A.a_,o,A.b1,A.t,m,o),A.aq),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gc88(),o,o,o,o,o,o,!1,A.a4)}}
C.xH.prototype={
a4(){return"NgmyHatiLayoutKind."+this.b}}
C.jq.prototype={}
C.adq.prototype={
B(d){return B.oZ(new C.e00(this,B.P(d).ax.a===A.I,d),!0,0.72,0.9,0.5,!1,null)}}
C.acP.prototype={
B(d){var w,v,u=null,t=B.P(d).ax.a===A.I,s=B.m(18),r=B.m(18),q=B.I(D.jq.j(t?0.35:0.4),A.r,1),p=t?D.LS:A.c,o=x.V,n=B.a([new B.ac(0,A.G,A.w.j(t?0.3:0.08),A.cv,14)],o),m=B.m(10),l=B.I(A.c_.j(0.5),A.r,1)
o=B.a([new B.ac(0,A.G,A.w.j(0.14),A.dz,6)],o)
w=this.c
o=B.E(B.p(u,new B.fL(0.5625,C.i7p(w),u),A.aq,u,u,new B.o(u,u,l,m,o,u,A.n),u,u,u,D.ake,u,u,u,u),1)
m=D.jq.j(t?0.18:0.16)
l=B.d(w.b,u,u,u,u,u,u,B.l(u,u,t?A.c:D.jq,u,u,u,u,u,u,u,u,12.5,u,u,A.u,u,u,!0,u,0.1,u,u,u,u,u,u),u,u,u)
v=x.p
return B.aF(!1,A.a1,!0,u,B.aM(!1,s,!0,B.p(u,B.x(B.a([o,B.p(u,B.x(B.a([l,A.cK,B.d(w.c,u,2,A.a2,u,u,u,B.l(u,u,t?A.aB:D.bj2,u,u,u,u,u,u,u,u,9.5,u,u,u,u,1.32,!0,u,u,u,u,u,u,u,u),u,u,u)],v),A.E,u,A.e,A.j,0,A.p),A.f,u,u,new B.o(u,u,new B.bI(new B.ay(m,1,A.r,-1),A.a0,A.a0,A.a0),u,u,u,A.n),u,u,u,u,D.aix,u,u,u)],v),A.aj,u,A.e,A.j,0,A.p),A.f,u,u,new B.o(p,u,q,r,n,u,A.n),u,u,u,u,u,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,this.d,u,u,u,u,u,u,u),A.f,A.K,0,u,u,u,u,u,A.ah)}}
C.xK.prototype={
a4(){return"NgmyMarriageLayoutKind."+this.b}}
C.nN.prototype={}
C.bjy.prototype={
a__(d){var w=null
return new B.bL(A.a3,w,w,B.Bt(A.A,B.p(w,w,A.f,w,w,new B.o(this.d.j(0.14),w,w,B.m(3),w,w,A.n),w,5,w,w,w,w,w,w),w,d),w)},
c8C(){return this.a__(1)},
axB(d){var w=null,v=B.m(8),u=B.I(A.i9,A.r,0.9)
return B.p(A.A,B.d(d,w,w,w,w,w,w,B.l(w,w,this.d,w,w,w,w,w,w,w,w,6.5,w,w,A.u,w,w,!0,w,0.3,w,w,w,w,w,w),w,w,w),A.f,w,w,new B.o(D.aef,w,u,v,w,w,A.n),w,13,w,w,w,w,w,w)},
B(d){var w=this,v=null,u=x.p,t=w.d
return B.x(B.a([B.B(B.a([B.p(v,v,A.f,v,v,new B.o(v,v,B.I(A.i9,A.r,1.6),v,v,v,A.a5),v,22,v,v,v,v,v,22),B.dJ(B.p(v,v,A.f,v,v,new B.o(v,v,B.I(A.i9,A.r,1.6),v,v,v,A.a5),v,22,v,v,v,v,v,22),new B.t(-8.36,0))],u),A.m,v,A.b8,A.j,0,v,v),A.av,B.d("HATI YA NDOA",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,12,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v),B.d("Hati ya Makubaliano ya Ndoa",v,v,v,v,v,v,B.l(v,v,t.j(0.7),v,v,v,v,v,v,v,v,7,v,v,A.a7,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v),A.am,w.axB("TAARIFA ZA WANANDOA"),A.am,w.c8C(),A.cK,w.a__(0.9),A.cK,w.a__(0.7),A.N,w.axB("TAMKO LA MAKUBALIANO"),A.fM,w.a__(1),A.cK,w.a__(0.95),A.N,w.axB("MASHAHIDI"),A.b0,B.d("NGMY",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,8,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.d(w.c.b,v,v,v,v,v,v,B.l(v,v,w.e,v,v,v,v,v,v,v,v,7,v,v,A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],u),A.m,v,A.e,A.j,0,A.p)}}
C.adt.prototype={
B(d){return B.oZ(new C.ehO(B.P(d).ax.a===A.I,d),!0,0.92,0.96,0.5,!1,null)}}
C.af8.prototype={
B(d){var w,v,u,t,s,r=null,q=B.P(d).ax.a===A.I,p=B.m(18),o=B.m(18),n=B.I(A.az.j(q?0.35:0.4),A.r,1),m=q?D.biC:A.c,l=x.V,k=B.a([new B.ac(0,A.G,A.w.j(q?0.3:0.08),A.cv,14)],l),j=B.m(10),i=B.I(A.az.j(0.5),A.r,1)
l=B.a([new B.ac(0,A.G,A.w.j(0.14),A.dz,6)],l)
w=this.c
v=C.h3X(w.a)
if(v==null)v=A.d.gI(D.Ri)
u=B.b1(v.f)
t=B.b1(v.r)
s=x.p
l=B.E(B.p(r,new B.fL(0.5625,new B.an(A.a_,r,A.b1,A.t,B.a([B.bU(0,B.fO(C.h3W(v.d),A.A,r,r,A.cf,A.bW,!0,r,!1,r,r),0,0,0),new B.D(A.ajd,new C.bjy(v,u,t,r),r)],s),r),r),A.aq,r,r,new B.o(r,r,i,j,l,r,A.n),r,r,r,D.ake,r,r,r,r),1)
j=A.az.j(q?0.18:0.16)
i=B.d(w.b,r,r,r,r,r,r,B.l(r,r,q?A.c:A_.LT,r,r,r,r,r,r,r,r,12.5,r,r,A.u,r,r,!0,r,0.1,r,r,r,r,r,r),r,r,r)
return B.aF(!1,A.a1,!0,r,B.aM(!1,p,!0,B.p(r,B.x(B.a([l,B.p(r,B.x(B.a([i,A.cK,B.d(w.c,r,2,A.a2,r,r,r,B.l(r,r,q?A.aB:D.bbp,r,r,r,r,r,r,r,r,9.5,r,r,r,r,1.32,!0,r,r,r,r,r,r,r,r),r,r,r)],s),A.E,r,A.e,A.j,0,A.p),A.f,r,r,new B.o(r,r,new B.bI(new B.ay(j,1,A.r,-1),A.a0,A.a0,A.a0),r,r,r,A.n),r,r,r,r,D.aix,r,r,r)],s),A.aj,r,A.e,A.j,0,A.p),A.f,r,r,new B.o(m,r,n,o,k,r,A.n),r,r,r,r,r,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,this.d,r,r,r,r,r,r,r),A.f,A.K,0,r,r,r,r,r,A.ah)}}
C.kX.prototype={
a4(){return"NgmyMarriagePaperStyle."+this.b}}
C.a82.prototype={}
C.W_.prototype={
U(){var w=$.ax()
return new C.aEr(new B.cz(null,x.A),new B.as(A.at,w),new B.as(A.at,w),B.mJ(0,null,null),A.d.gI(D.a3G),D.dMG,B.a([],x.L),B.a([],x.gE))}}
C.aEr.prototype={
a_(){var w,v=this
v.a2()
v.w=v.a.c
v.z=new C.zK(C.fG2(v.y),"NGMY NEWS","","","By the NGMY Newsroom","",A.X,"","","")
w=x.a
C.fEZ().bL(new C.ekL(v),w)
$.r2().jJ(0,"assets/images/ngmy_logo.png").bL(new C.ekM(v),w).eW(new C.ekN())},
t(){var w=this,v=w.e,u=$.ax()
v.T$=u
v.P$=0
v=w.f
v.T$=u
v.P$=0
w.r.t()
w.a1()},
aew(d){var w=null,v=this.c
if(v!=null)v.J(x.q).f.S(B.b3(w,w,w,w,w,A.t,w,B.d(d,w,w,w,w,w,w,w,w,w,w),w,A.V,w,w,w,w,w,w,w,w,w,w))},
J6(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k
var $async$J6=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hV().kW(88,1600,A.eJ),$async$J6)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fj(),$async$J6)
case 8:p=e
m=r.c
if(m==null){w=1
break}w=9
return B.b(C.hss(m,p),$async$J6)
case 9:o=e
if(o==null||r.c==null){w=1
break}m=r.c
m.toString
w=10
return B.b(F.bDo(new B.pU(o,1),m),$async$J6)
case 10:if(r.c!=null)r.m(new C.ekn(r,o))
t=2
w=6
break
case 4:t=3
k=s.pop()
n=B.ab(k)
r.aew("Could not open that picture. "+B.w(n))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$J6,v)},
X0(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$X0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.w
if(q==null||t.as){w=1
break}s=t.c
s.toString
w=3
return B.b(C.hss(s,q),$async$X0)
case 3:r=e
if(r==null||t.c==null){w=1
break}s=t.c
s.toString
w=4
return B.b(F.bDo(new B.pU(r,1),s),$async$X0)
case 4:if(t.c!=null)t.m(new C.ekj(t,r))
case 1:return B.h(u,v)}})
return B.i($async$X0,v)},
aex(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$aex=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.as){w=1
break}q.m(new C.eku(q))
t=4
q.a.toString
p=C.ibU()
l=q.Q
k=q.e.a
o=l==="sw"?A.a.i(A.a.i(k.a)+" Write the whole newspaper in Swahili (Kiswahili)."):k.a
k=q.y
w=7
return B.b(p.$4$paper$photo$request$template(null,q.w,o,k),$async$aex)
case 7:n=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.ekv(q,n))
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
m=B.ab(i)
q.aew(B.w(m))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.ekw(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$aex,v)},
a_4(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h,g
var $async$a_4=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i=A.a.i(q.f.a.a)
h=!0
if(J.ad(i)!==0)if(!q.as){h=q.z
h=A.a.i(h.c).length===0&&h.r.length===0}if(h){w=1
break}q.m(new C.ekp(q,i))
t=4
q.a.toString
p=C.ibT()
h=q.z
m=q.y
l=q.w
k=B.C(q.ax,x.fz)
w=7
return B.b(p.$5$doc$history$instruction$photo$template(h,k,i,l,m),$async$a_4)
case 7:o=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.ekq(q,o))
r.push(6)
w=5
break
case 4:t=3
g=s.pop()
n=B.ab(g)
if(q.c!=null)q.m(new C.ekr(q,n))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.eks(q))
$.aW.x1$.push(new C.ekt(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a_4,v)},
c8S(d){this.m(new C.eko(this,d))},
Eq(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$Eq=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(!q.as){k=q.z
k=A.a.i(k.c).length===0&&k.r.length===0}else k=!0
if(k){w=1
break}q.m(new C.ekl(q))
t=4
w=7
return B.b($.aW.gmF(),$async$Eq)
case 7:w=8
return B.b(B.bO(A.ni,null,x.H),$async$Eq)
case 8:k=$.aW.ak$.x.h(0,q.d)
p=k==null?null:k.gba()
if(!(p instanceof B.q4))throw B.W("The page is not ready yet.")
w=9
return B.b(p.m2(1800/p.gY(0).a),$async$Eq)
case 9:o=e
w=10
return B.b(o.hw(A.h7),$async$Eq)
case 10:n=e
if(n==null)throw B.W("Could not make the picture.")
w=11
return B.b(A7.agz(J.eV(A.dF.gaQ(n)),"ngmy_news.png","image/png"),$async$Eq)
case 11:m=e
q.aew(m?"Your newspaper picture is ready. Check your downloads.":"Downloading is not available here.")
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
l=B.ab(i)
q.aew(B.w(l))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.ekm(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Eq,v)},
B(a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=a1.z,a4=!(A.a.i(a3.c).length===0&&a3.r.length===0)
a3=B.aJ(a2,a2,a2,a2,A.lb,a2,a2,a2,new C.ekC(a5),a2,a2,a2,a2,a2,a2)
w=x.p
v=B.a([],w)
if(a1.ay.length!==0)v.push(B.aJ(a2,a2,a2,a2,D.bRJ,a2,a2,a2,new C.ekD(a1),a2,a2,a2,a2,"Undo the last change",a2))
v.push(B.aJ(a2,a2,a2,a2,A.p9,a2,a2,a2,a4?a1.gaZS():a2,a2,a2,a2,a2,"Download",a2))
a3=B.eD(v,a2,a2,!0,!0,A.Be,a2,1,!0,a2,0,!1,a2,!1,a2,a2,a3,a2,!0,a2,a2,a2,a2,a2,D.eWK,a2,a2,a2,1,a2,!0)
v=x.V
u=B.a([new B.ac(0,A.G,A.w.j(0.6),A.eX,24)],v)
t=a1.z
s=a1.y
r=a1.w
u=B.p(a2,new B.fL(0.7142857142857143,B.eQ(A.A,new B.eG(new C.b18(t,s,r,a1.x,a2),a1.d),A.f,A.dy),a2),A.f,a2,a2,new B.o(a2,a2,a2,a2,u,a2,A.n),a2,a2,a2,a2,a2,a2,a2,a2)
s=B.d("1  YOUR PICTURE",a2,a2,a2,a2,a2,a2,W.t3,a2,a2,a2)
t=a1.as?a2:a1.gc8R()
t=B.a([B.E(B.dq(D.bSu,B.d(r==null?"Add a picture":"Change the picture",a2,a2,a2,a2,a2,a2,A.ck,a2,a2,a2),t,B.bp(D.tC,a2,a2,a2,A.c,A.fX,a2,a2,new B.b7(B.m(14),P.vq),a2,a2,a2)),1)],w)
r=a1.w
if(r!=null){r=B.bx(B.m(10),B.fO(r,A.A,a2,a2,A.cf,A.bW,!1,48,!1,a2,48),A.aq)
A.d.v(t,B.a([A.as,r,B.aJ(a2,a2,a2,a2,D.bPc,a2,a2,a2,a1.as?a2:a1.gbJw(),a2,a2,a2,a2,"Crop the picture",a2)],w))}t=B.B(t,A.m,a2,A.e,A.j,0,a2,a2)
r=B.d("2  WHAT SHOULD IT BE ABOUT?  (optional)",a2,a2,a2,a2,a2,a2,W.t3,a2,a2,a2)
q=B.aN(a2,A.X,!1,a2,!0,A.t,a2,B.aO(),a1.e,a2,a2,a2,a2,a2,2,a1.aSS("Leave it empty and the AI picks a story about NGMY"),A.y,!0,a2,!0,a2,!1,a2,A.ak,a2,a2,a2,a2,a2,a2,a2,a2,a2,3,1,a2,!1,"\u2022",a2,a2,a2,a2,a2,!1,a2,a2,!1,a2,!0,a2,A.a9,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,A.df,!0,A.a6,a2,A.ao,a2,a2,a2,a2)
p=B.a([],w)
for(o=0;o<7;++o){n=D.dgB[o]
p.push(B.mP(a2,D.tC,new B.y(n.a,a2,A.pr,a2,a2,a2,a2,a2,a2,a2,a2,a2),A.h9,new C.ekE(a1,n),a2,a2,P.vq,a2))}p=B.bW(A.bD,p,A.bq,6,8)
m=a1.Q
m=B.bW(A.bD,B.a([D.fKW,A.ba,B.j0(a2,a2,a2,D.fuR,a2,new C.ekF(a1),m==="en",a2,a2,a2,a2),A.ab,B.j0(a2,a2,a2,D.fuM,a2,new C.ekG(a1),m==="sw",a2,a2,a2,a2)],w),A.tc,0,8)
l=B.d("3  PICK A DESIGN",a2,a2,a2,a2,a2,a2,W.t3,a2,a2,a2)
k=B.a([],w)
for(j=x.dt,i=B.d1(D.a3G,0,B.dB(10,"count",x.S),j),h=i.$ti,i=new B.bS(i,i.gL(0),h.k("bS<ak.E>")),h=h.k("ak.E");i.C();){g=i.d
k.push(a1.aRm(g==null?h.a(g):g))}k=B.cq(k,a2,a2,a2,a2,A.aN,!1)
i=B.a([],w)
for(j=B.d1(D.a3G,10,a2,j),h=j.$ti,j=new B.bS(j,j.gL(0),h.k("bS<ak.E>")),h=h.k("ak.E");j.C();){g=j.d
i.push(a1.aRm(g==null?h.a(g):g))}j=B.cq(i,a2,a2,a2,a2,A.aN,!1)
i=a1.as?a2:a1.gc8U()
h=B.m(18)
v=B.a([new B.ac(0,A.G,A.bA.j(0.4),A.J,18)],v)
v=B.a([u,A.aA,new B.D(A.ct,s,a2),t,A.aA,new B.D(A.ct,r,a2),q,A.N,p,A.R,m,A.aA,new B.D(A.ct,l,a2),new B.a7(a2,78,k,a2),A.N,new B.a7(a2,78,j,a2),A.aL,B.aB(a2,B.p(A.A,B.B(B.a([D.bSo,A.ab,B.d(a4?"Write it again":"Write my newspaper",a2,a2,a2,a2,a2,a2,A.fY,a2,a2,a2)],w),A.m,a2,A.e,A.P,0,a2,a2),A.f,a2,a2,new B.o(a2,a2,a2,h,v,G.uv,A.n),a2,54,a2,a2,a2,a2,a2,a2),A.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,i,a2,a2,a2,a2,a2,a2,!1,A.a4)],w)
if(a4){u=B.a([A.dW,B.B(B.a([D.dxm,A.as,D.bCS],w),A.m,a2,A.e,A.j,0,a2,a2),A.N],w)
for(t=a1.ax,s=t.length,o=0;o<t.length;t.length===s||(0,B.M)(t),++o){f=t[o]
e=f.a==="you"
r=e?A.a8:A.a3
q=e?A.b5.j(0.35):D.tC
p=new B.aQ(16,16)
d=new B.ay(A.bz,1,A.r,-1)
u.push(new B.bL(r,a2,a2,B.p(a2,new B.y(f.b,a2,D.fl3,a2,a2,a2,a2,a2,a2,a2,a2,a2),A.f,a2,A8.W6,new B.o(q,a2,new B.bI(d,d,d,d),new B.bk(p,p,p,p),a2,a2,A.n),a2,a2,a2,A.ct,A.iQ,a2,a2,a2),a2))}u.push(A.am)
t=B.a([],w)
for(o=0;o<4;++o){a0=D.d2A[o]
t.push(B.mP(a2,D.tC,new B.y(a0,a2,A.JA,a2,a2,a2,a2,a2,a2,a2,a2,a2),A.h9,new C.ekH(a1,a0),a2,a2,P.vq,a2))}u.push(B.bW(A.bD,t,A.bq,6,8))
u.push(A.R)
t=B.E(B.aN(a2,A.X,!1,a2,!0,A.t,a2,B.aO(),a1.f,a2,a2,a2,a2,a2,2,a1.aSS("Ask for a change, or ask a question\u2026"),A.y,!0,a2,!0,a2,!1,a2,A.ak,a2,a2,a2,a2,a2,a2,a2,a2,a2,4,1,a2,!1,"\u2022",a2,a2,a2,new C.ekI(a1),a2,!1,a2,a2,!1,a2,!0,a2,A.a9,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,A.df,!0,A.a6,a2,A.ao,a2,a2,a2,a2),1)
s=a1.as?a2:a1.gc8T()
u.push(B.B(B.a([t,A.ab,B.I_(A.yX,s,B.nG(a2,A.b5,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2)],w),A.m,a2,A.e,A.j,0,a2,a2))
u.push(A.aA)
t=a1.as?a2:a1.gaZS()
u.push(B.dq(A.p9,D.fGp,t,B.bp(A.cS,a2,a2,a2,a2,A.Jj,a2,a2,new B.b7(B.m(16),A.a0),a2,a2,a2)))
A.d.v(v,u)}v=B.a([B.cq(v,a1.r,A.aiZ,a2,a2,A.ag,!1)],w)
if(a1.as){u=A.w.j(0.55)
t=B.m(20)
s=B.I(E.k6.j(0.5),A.r,1)
v.push(B.bU(0,B.em(B.at(B.p(a2,B.B(B.a([E.a8b,A.es,B.d(a1.at,a2,a2,a2,a2,a2,a2,A.jj,a2,a2,a2)],w),A.m,a2,A.e,A.P,0,a2,a2),A.f,a2,a2,new B.o(E.B5,a2,s,t,a2,a2,A.n),a2,a2,a2,a2,D.bz6,a2,a2,a2),a2,a2,a2),u,!0),0,0,0))}return B.c5(a3,A.Be,new B.an(A.a_,a2,A.aa,A.t,v,a2),a2,!1,!1,a2,a2)},
aSS(d){var w=null
return B.bs(w,new B.b5(4,B.m(14),A.a0),w,A.eP,w,w,w,w,!0,w,w,w,w,w,w,D.tC,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,A1.Ju,d,w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
aRm(d){var w,v,u,t=null,s=d.a===this.y.a,r=B.m(12),q=B.b1(d.f),p=s?A.bA:A.bz
p=B.I(p,A.r,s?2.4:1)
w=B.a([B.p(t,t,A.f,B.b1(d.x),t,t,t,5,t,A.l1,t,t,t,t),A.fM],x.p)
for(v=d.w,u=0;u<4;++u)w.push(B.p(t,t,A.f,B.b1(v).j(0.5),t,t,t,2,t,D.bvh,t,t,t,t))
w.push(A.cK)
w.push(new B.D(A.jy,B.d(d.b,t,1,A.a2,t,t,t,B.l(t,t,B.b1(v),t,t,t,t,t,t,t,t,9,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t))
return B.aB(t,B.p(t,B.x(w,A.m,t,A.b8,A.j,0,A.p),A.f,t,t,new B.o(q,t,p,r,t,t,A.n),t,t,t,A.it,t,t,t,72),A.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.ekk(this,d),t,t,t,t,t,t,!1,A.a4)}}
C.zK.prototype={
bcf(d,e,f,g,h,i,j,k,l,m){var w=this,v=g==null?w.b:g,u=i==null?w.a:i,t=h==null?w.c:h,s=m==null?w.d:m,r=e==null?w.e:e,q=f==null?w.f:f,p=d==null?w.r:d,o=j==null?w.w:j,n=l==null?w.x:l
return new C.zK(u,v,t,s,r,q,p,o,n,k==null?w.y:k)},
cJ9(d){var w=null
return this.bcf(w,w,w,w,w,d,w,w,w,w)},
ag(){var w=this
return B.G(["paper",w.a,"headline",w.c,"subhead",w.d,"byline",w.e,"caption",w.f,"body",w.r,"pullQuote",w.w,"sidebarTitle",w.x,"sidebarText",w.y,"category",w.b],x.N,x.z)},
aD0(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j="headline",i="category",h=new C.cfA(d),g=d.h(0,"body")
if(x.j.b(g)){w=B.a([],x.s)
for(v=J.aV(g);v.C();){u=v.gR(v)
if(A.a.i(B.w(u)).length!==0)w.push(A.a.i(B.w(u)))}t=w}else if(typeof g=="string"&&A.a.i(g).length!==0){w=A.a.fE(g,B.af("\\n\\s*\\n",!0,!1,!1,!1))
w=new B.N(w,new C.cfy(),B.S(w).k("N<1,n>")).c0(0,new C.cfz())
t=B.C(w,w.$ti.k("J.E"))}else t=k
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
return this.bcf(p,r,q,J.ad(l==null?"":l)===0?k:h.$1(i).toUpperCase(),v,w,o,m,n,s)},
gFD(d){return this.f}}
C.tr.prototype={
a4(){return"NewsLayout."+this.b}}
C.BI.prototype={
a4(){return"NewsFrame."+this.b}}
C.lo.prototype={}
C.b18.prototype={
rw(d,e,f,g,h,i,j){var w=null
return B.l(w,w,f==null?B.b1(this.d.w):f,w,w,w,w,w,d,w,w,e,i,w,j,w,g,!0,w,h,w,w,w,w,w,w)},
aZU(d,e,f,g){return this.rw(d,e,null,1.25,f,A.bp,g)},
PY(d,e,f,g,h){return this.rw(d,e,f,1.25,g,A.bp,h)},
axH(d,e,f,g,h){return this.rw(d,e,null,f,g,A.bp,h)},
axG(d,e,f,g,h){return this.rw(d,e,f,g,0,A.bp,h)},
aZW(d,e,f,g,h){return this.rw(d,e,null,f,0,g,h)},
c8Y(d,e,f,g,h,i){return this.rw(d,e,f,g,0,h,i)},
axF(d,e,f,g){return this.rw(d,e,null,f,0,A.bp,g)},
aeA(d,e,f){return this.rw(d,e,null,f,0,A.bp,A.cO)},
aZV(d,e,f,g,h){return this.rw(d,e,f,g,0,h,A.cO)},
c8X(d,e,f,g){return this.rw(d,e,null,f,0,g,A.cO)},
c8W(d,e,f,g){return this.rw(d,e,f,g,0,A.bp,A.cO)},
aeB(d,e,f,g,h,i){return this.rw(d,e,f,g,h,A.bp,i)},
aZT(d,e,f,g,h,i,j,k,l){var w,v,u=null
for(w=i;w>j;){v=new B.kz(new B.eH(d,u,u,A.cY,u,u,u,u,u,u,new B.F(!0,u,u,e,u,u,w,f,l,u,u,u,k,u,u,u,u,u,u,u,u,u,u,u,u,u)),A.a6,A.c5,new B.km(1),u,u,h,u,A.c4,u)
v.qR(g)
if(!v.b.a.c.gaEI())return w
w-=2}return j},
aey(d,e,f,g,h,i,j,k){return this.aZT(d,e,f,g,h,i,j,k,A.bp)},
azO(d,e,f){var w=null,v=d==null?B.b1(this.d.w):d,u=x.p,t=B.a([B.p(w,w,A.f,v,w,w,w,f,w,w,w,w,w,w)],u)
if(e)A.d.v(t,B.a([new B.a7(w,3,w,w),B.p(w,w,A.f,v,w,w,w,0.8,w,w,w,w,w,w)],u))
return B.x(t,A.m,w,A.e,A.j,0,A.p)},
azN(d){return this.azO(null,!1,d)},
ahq(d,e){return this.azO(null,d,e)},
cqH(d,e){return this.azO(d,!1,e)},
gb13(){var w=A.a.i(this.c.a)
return w.length===0?"The NGMY Times":w},
gaVv(){var w=A.a.i(this.c.c)
if(w.length===0)w="Your headline appears here"
return this.d.CW?w.toUpperCase():w},
OK(d,e,f,g,h,i){var w=this,v=null,u=w.d.Q,t=w.aey(w.gaVv(),u,A.O,d,g,h,i,1.02)
return B.d(w.gaVv(),v,g,A.a2,v,v,v,w.axG(u,t,f,1.02,A.O),e,v,v)},
aVA(d){return this.OK(d,A.L,null,2,78,30)},
abV(d,e,f,g,h){return this.OK(d,e,null,f,g,h)},
bYD(d,e,f,g,h){return this.OK(d,A.L,e,f,g,h)},
bYC(d,e,f){return this.OK(d,A.L,null,e,f,30)},
RU(d,e,f,g,h){var w,v=this,u=null,t=v.c.d,s=A.a.i(t)
if(s.length===0)return A.bJ
w=v.d.as
return new B.D(A.jN,B.d(s,u,g,A.a2,u,u,u,v.aZV(w,v.aZT(t,w,A.cO,d,g,h,15,1.2,A.cE),f,1.2,A.cE),e,u,u),u)},
b6X(d){return this.RU(d,A.L,null,3,24)},
aBh(d,e,f,g){return this.RU(d,e,null,f,g)},
cyl(d,e,f){return this.RU(d,A.L,e,3,f)},
b6Y(d,e){return this.RU(d,e,null,3,24)},
cyj(d,e){return this.RU(d,A.L,null,3,e)},
cyk(d,e,f){return this.RU(d,e,null,3,f)},
ark(d,e){var w=this,v=null,u=A.a.i(w.c.e),t=new B.D(A.fI,B.d(u.toUpperCase(),v,v,v,v,v,v,w.PY("Roboto",12,d==null?B.b1(w.d.x):d,1.4,A.H),v,v,v),v)
if(!e)return t
u=w.d.w
return B.B(B.a([B.E(B.p(v,v,A.f,B.b1(u),v,v,v,1.2,v,v,v,v,v,v),1),t,B.E(B.p(v,v,A.f,B.b1(u),v,v,v,1.2,v,v,v,v,v,v),1)],x.p),A.m,v,A.e,A.j,0,v,v)},
NG(){return this.ark(null,!0)},
arj(d){return this.ark(null,d)},
bFt(d,e){var w=null,v=A.a.i(this.c.f)
if(v.length===0)return A.bJ
return new B.D(A.ic,new B.a7(d,w,B.d(v,w,2,A.a2,w,w,w,this.c8X(this.d.as,13.5,1.2,A.cE),e,w,w),w),w)},
vD(d,a0){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Roboto",j=new B.U(Date.now(),0,!1),i=m.gb13(),h=A.o.an(j.bC(B.c3(B.bC(j),1,1,0,0,0,0,0)).a,864e8),g="VOL. "+C.i_i(Math.max(1,B.bC(j)-2021))+"  \xb7  NO. "+(h+1+3000),f=m.aZU(k,12,1.2,A.O),e=a0?0.62:1
h=m.d
w=h.y
v=h.z
if(w==="blackletter")u=m.aey(i,v,A.O,d,1,96*e,36,1)
else{t=w==="bar"?76:72
u=m.aey(i.toUpperCase(),v,A.O,d,1,t*e,30,1)}switch(w){case"bar":w=a0?6:10
t=B.b1(h.x)
h=h.ch?B.b1(h.f):A.c
s=x.p
return B.x(B.a([B.p(l,B.B(B.a([B.E(B.d(i.toUpperCase(),l,1,A.eK,l,l,l,m.aeB(v,u*0.84,h,1,1,A.O),l,l,l),1)],s),A.m,l,A.e,A.j,0,l,l),A.f,t,l,l,l,l,l,l,new B.Q(18,w,18,w),l,l,l),A.N,B.B(B.a([B.d(C.bCD(j).toUpperCase(),l,l,l,l,l,l,f,l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("FREE \xb7 NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],s),A.m,l,A.iy,A.j,0,l,l),A.am,m.ahq(!0,3)],s),A.m,l,A.e,A.j,0,A.p)
case"split":h=h.x
w=x.p
return B.x(B.a([B.B(B.a([B.p(l,l,A.f,B.b1(h),l,l,l,u*0.8,l,l,l,l,l,14),A.es,B.E(B.d(i,l,1,A.eK,l,l,l,m.axF(v,u*0.9,1,A.O),l,l,l),1)],w),A.m,l,A.e,A.j,0,l,l),A.R,B.B(B.a([B.d(C.bCD(j),l,l,l,l,l,l,m.PY(k,13,B.b1(h),0.6,A.O),l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l)],w),A.m,l,A.iy,A.j,0,l,l),A.N,m.cqH(B.b1(h),3)],w),A.m,l,A.e,A.j,0,A.p)
case"logo":r=a0?52:64
w=m.gb13()
v=B.d("NGMY",l,l,l,l,l,l,m.axH(k,r,1,-1.5,A.u),l,l,l)
t=r*0.2
s=r*0.04
q=B.b1(h.x)
p=B.m(r*0.16)
o=h.ch&&h.a==="midnight"||h.a==="gold"?A.w:A.c
h=h.w
n=x.p
return B.x(B.a([B.B(B.a([v,A.ab,B.eI(A.A,-0.03,B.p(l,B.d("NEWS",l,l,l,l,l,l,m.rw(k,r*0.72,o,1.05,-0.5,A.cE,A.u),l,l,l),A.f,l,l,new B.o(q,l,l,p,l,l,A.n),l,l,l,l,new B.Q(t,s,t,s),l,l,l),l),A.b0,new B.ds(1,A.cn,B.d(w.toUpperCase(),l,2,A.a2,l,l,l,m.aeB(k,12.5,B.b1(h).j(0.85),1.3,1.2,A.O),A.dT,l,l),l)],n),A.m,l,A.e,A.j,0,l,l),A.N,B.p(l,l,A.f,B.b1(h).j(0.25),l,l,l,1.4,l,l,l,l,l,l)],n),A.m,l,A.e,A.j,0,A.p)
case"blackletter":h=x.p
w=B.B(B.a([B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("PRICE: FREE \xb7 NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],h),A.m,l,A.iy,A.j,0,l,l)
t=m.ahq(!0,1.4)
s=a0?4:10
v=B.d(i,l,1,l,l,l,l,m.axF(v,u,1,A.O),A.L,l,l)
q=a0?4:8
return B.x(B.a([w,A.av,t,new B.a7(l,s,l,l),v,new B.a7(l,q,l,l),m.ahq(!0,1.4),A.av,B.d(C.bCD(j).toUpperCase(),l,l,l,l,l,l,f,A.L,l,l),A.av,m.azN(3)],h),A.m,l,A.e,A.j,0,A.p)
default:h=x.p
return B.x(B.a([B.d(i.toUpperCase(),l,1,l,l,l,l,m.axH(v,u,1,3,A.O),A.L,l,l),A.N,m.ahq(!0,1.2),A.av,B.B(B.a([B.d(C.bCD(j).toUpperCase(),l,l,l,l,l,l,f,l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],h),A.m,l,A.iy,A.j,0,l,l),A.av,m.azN(3)],h),A.m,l,A.e,A.j,0,A.p)}},
ad3(d){return this.vD(d,!1)},
aez(d,e,f,g){var w=null,v=f*0.9,u=f*0.45,t=e==null?B.b1(this.d.x):e,s=B.m(f)
return B.p(w,B.d(d,w,w,w,w,w,w,this.aeB("Roboto",f,g==null?A.c:g,1,0.4,A.u),w,w,w),A.f,w,w,new B.o(t,w,w,s,w,w,A.n),w,w,w,w,new B.Q(v,u,v,u),w,w,w)},
c8V(d,e){return this.aez(d,null,e,null)},
aXC(d){var w=null,v=new B.U(Date.now(),0,!1),u=A.o.F(B.dl(v),12)===0?12:A.o.F(B.dl(v),12),t=B.b1(this.d.w).j(0.75),s=this.axG("Roboto",15,t,1,A.cw),r=B.X(E.alF,t,w,w,w,18),q=A.a.ap(A.pd[B.bJ(v)-1],0,3),p=A.a.aZ(A.o.u(B.h3(v)),2,"0"),o=B.dl(v)>=12?"PM":"AM"
return B.B(B.a([r,A.ab,B.d(q+" "+B.bV(v)+", "+B.bC(v)+"  \xb7  "+u+":"+p+" "+o,w,w,w,w,w,w,s,w,w,w),B.p(w,w,A.f,t.j(0.4),w,w,w,20,w,A.fU,w,w,w,1),B.X(d,t,w,w,w,19),A.ab,B.d("NGMY News",w,w,w,w,w,w,s,w,w,w)],x.p),A.m,w,A.e,A.j,0,w,w)},
awr(){return this.aXC(A.ob)},
b43(d,e,f,g){var w=null,v=A.a.i(this.c.c)
if(v.length===0)v="Your headline appears here"
return B.d(v,w,e,A.a2,w,w,w,this.aeB("Roboto",this.aey(v,"Roboto",A.H,d,e,f,g,1.08),w,1.08,-0.8,A.H),w,w,w)},
azR(d,e,f){return this.b43(d,e,f,30)},
aBk(d,e,f){var w=null,v=A.a.i(this.c.d)
if(v.length===0)return A.bJ
return new B.D(A.vO,B.d(v,w,e,A.a2,w,w,w,this.c8W("Roboto",f,B.b1(this.d.w).j(0.88),1.35),w,w,w),w)},
b71(d){return this.aBk(d,3,22)},
cyw(d,e){return this.aBk(d,e,22)},
tM(d,e){var w,v,u,t,s=null,r=this.e
if(r!=null){w=B.fO(r,A.A,s,s,A.cf,A.bW,!0,e,!1,s,d)
r=this.d
v=r.ay
if(v==="bw")w=new B.Bg(D.bBU,w,s)
if(v==="sepia")w=new B.Bg(D.bBT,w,s)}else{r=this.d
v=r.w
u=B.b1(v).j(0.1)
t=Math.min(d,e)
w=B.p(s,B.at(B.X(A.yu,B.b1(v).j(0.35),s,s,s,t*0.25),s,s,s),A.f,u,s,s,s,e,s,s,s,s,s,d)}v=B.a([w],x.p)
if(r.ax)v.push(B.c1(s,new B.o(s,s,s,s,s,new B.c0(A.A,0.95,A.x,s,0,B.a([A.K,A.Xp.j(0.38)],x.O),s,s),A.n),A.bf))
return new B.a7(d,e,new B.an(A.a_,s,A.b1,A.t,v,s),s)},
qB(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.d
switch(j.e.a){case 1:j=j.w
w=B.I(B.b1(j),A.r,3)
j=B.I(B.b1(j),A.r,1)
return B.p(k,B.p(k,l.tM(d-24,e-24),A.f,k,k,new B.o(k,k,j,k,k,k,A.n),k,k,k,k,A.ez,k,k,k),A.f,k,k,new B.o(k,k,w,k,k,k,A.n),k,e,k,k,A.m1,k,k,d)
case 2:w=B.a([new B.ac(0,A.G,A.w.j(0.35),D.ed4,14)],x.V)
v=l.tM(d-28,e-28-58)
u=A.a.i(l.c.f)
if(u.length===0)u="NGMY"
return B.eI(A.A,-0.035,B.p(k,B.x(B.a([v,B.E(B.at(B.d(u,k,2,A.a2,k,k,k,l.aZV(j.as,13.5,D.bd6,1.1,A.cE),A.L,k,k),k,k,k),1)],x.p),A.m,k,A.e,A.j,0,A.p),A.f,k,k,new B.o(D.bgL,k,k,k,w,k,A.n),k,e,k,k,D.bwD,k,k,d),k)
case 3:w=B.m(30)
j=B.I(B.b1(j.x),A.r,5)
return B.p(k,B.bx(B.m(25),l.tM(d-10,e-10),A.aq),A.f,k,k,new B.o(k,k,j,w,k,k,A.n),k,e,k,k,k,k,k,d)
case 4:t=Math.min(d,e)
w=B.I(B.b1(j.x),A.r,6)
j=B.b1(j.f)
v=t-10
return new B.a7(d,e,B.at(B.p(k,B.hT(l.tM(v,v),A.aq),A.f,k,k,new B.o(j,k,w,k,k,k,A.a5),k,t,k,k,A.m1,k,k,t),k,k,k),k)
case 5:j=B.a([new B.ac(0,A.G,A.w.j(0.3),D.ecM,10)],x.V)
return B.eI(A.A,0.025,new B.a7(d,e,new B.an(A.a_,k,A.aa,A.f,B.a([B.bU(0,B.p(k,l.tM(d-18,e-18),A.f,k,k,new B.o(A.c,k,k,k,j,k,A.n),k,k,k,k,A.ri,k,k,k),0,0,0),B.ao(k,B.eI(A.A,-0.6,B.p(k,k,A.f,A.bM.j(0.85),k,k,k,26,k,k,k,k,k,90),k),k,k,-18,k,-10,k),B.ao(-10,B.eI(A.A,-0.6,B.p(k,k,A.f,A.bM.j(0.85),k,k,k,26,k,k,k,k,k,90),k),k,k,k,-18,k,k)],x.p),k),k),k)
case 6:j=B.b1(j.x)
return new B.a7(d,e,B.b4(B.nA(l.tM(d,e),A.aq,D.haF),new C.bcL(j,k),k,k,A.ax),k)
case 7:j=x.p
w=B.a([l.tM(d-16,e-44)],j)
for(v=[!0,!1],u=d/34,s=0;s<2;++s){r=v[s]
q=r?-18:k
p=r?k:-18
o=B.a([],j)
for(n=0;n<Math.max(6,A.k.bm(u));++n){m=new B.aQ(2,2)
o.push(B.p(k,k,A.f,k,k,new B.o(A.bO,k,k,new B.bk(m,m,m,m),k,k,A.n),k,10,k,k,k,k,k,14))}w.push(new B.cN(0,q,0,p,k,k,new B.cb(A.aN,A.rD,A.j,A.m,k,A.p,k,0,o,k),k))}return B.p(k,new B.an(A.a_,k,A.b1,A.t,w,k),A.f,A.eg,k,k,k,e,k,k,D.bB9,k,k,d)
case 8:w=d/2
v=B.x3(A.hu,new B.aQ(w,w))
j=B.I(B.b1(j.x),A.r,5)
w-=5
return B.p(k,B.bx(B.x3(A.hM,new B.aQ(w,w)),l.tM(d-10,e-10),A.aq),A.f,k,k,new B.o(k,k,j,v,k,k,A.n),k,e,k,k,k,k,k,d)
case 9:j=B.a([new B.ac(0,A.G,A.w.j(0.35),A.fW,22)],x.V)
return B.p(k,l.tM(d-20,e-20),A.f,k,k,new B.o(A.c,k,k,k,j,k,A.n),k,e,k,k,A.bT,k,k,d)
case 10:return new B.a7(d,e,B.nA(l.tM(d,e),A.aq,D.hhW),k)
case 0:j=B.I(B.b1(j.w),A.r,2.4)
return B.p(k,l.tM(d-14,e-14),A.f,k,k,new B.o(k,k,j,k,k,k,A.n),k,e,k,k,A.ez,k,k,d)}},
aOW(d,e){return this.d.e===D.RX?A.bJ:this.bFt(d,e)},
Wx(d){return this.aOW(d,A.L)},
gaAB(){var w=this.c
return A.a.i(w.y).length!==0||A.a.i(w.w).length!==0},
aAA(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.c,l=A.a.i(m.x)
if(l.length===0)l=A.a.i(m.w).length!==0?"":"NGMY NOTES"
w=A.a.i(m.y)
v=o.d
u=B.I(B.b1(v.w),A.r,1.6)
t=v.x
s=B.b1(t)
s=s.j(v.ch?0.14:0.07)
r=x.p
q=B.a([],r)
m=A.a.i(m.w)
if(m.length!==0&&w.length===0)q.push(B.E(B.at(B.d("\u201c"+m+"\u201d",n,7,A.a2,n,n,n,o.aZW(v.Q,19,1.15,A.cE,A.O),A.L,n,n),n,n,n),1))
else{r=B.a([],r)
p=l.length!==0
if(p)r.push(B.d(l.toUpperCase(),n,1,A.a2,n,n,n,o.PY("Roboto",12.5,B.b1(t),1.2,A.u),n,n,n))
if(p)r.push(A.av)
m=w.length===0?m:w
r.push(B.E(B.d(m,n,9,A.a2,n,n,n,o.aeA(v.as,13,1.25),n,n,n),1))
A.d.v(q,r)}return B.p(n,B.jD(B.x(q,A.E,n,A.e,A.j,0,A.p),A.t,n),A.f,n,n,new B.o(s,n,u,n,n,n,A.n),n,e,n,n,A.bh,n,n,d)},
gch6(){var w=this.c.r
return w.length===0?B.a([y.g],x.s):w},
a9C(d,e,f,g){return B.cC(new C.cfB(this,e,d,f,g))},
a9B(d){return this.a9C(d,22,!0,18)},
WK(d,e){return this.a9C(d,22,!0,e)},
aPY(d,e,f){return this.a9C(d,22,e,f)},
bHt(d,e,f){return this.a9C(d,e,!0,f)},
b9Z(d,e,f,g){return B.cC(new C.cfC(this,e,d,g,!0,f))},
cfU(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i="Roboto",h=k.d
switch(h.d.a){case 0:return B.x(B.a([k.ad3(824),A.aA,k.aVA(824),k.b6X(824),A.N,k.NG(),A.ad,B.at(k.qB(824,360),j,j,j),k.Wx(824),A.ad,B.E(k.a9B(3),1)],x.p),A.aj,j,A.e,A.j,0,A.p)
case 1:w=x.p
return B.x(B.a([k.ad3(824),A.aL,new B.a7(j,350,B.B(B.a([new B.a7(440,j,B.x(B.a([k.abV(440,A.bi,3,62,26),k.aBh(440,A.bi,2,20),A.b0,k.ark(B.b1(h.x),!1)],w),A.E,j,A.e,A.j,0,A.p),j),A.Jk,B.x(B.a([k.qB(362,310),k.Wx(362)],w),A.m,j,A.e,A.j,0,A.p)],w),A.E,j,A.e,A.j,0,j,j),j),A.R,k.azN(2),A.ad,B.E(k.a9B(3),1)],w),A.aj,j,A.e,A.j,0,A.p)
case 2:w=k.vD(824,!0)
v=B.b1(h.x)
u=h.ch
t=x.p
s=B.a([k.bYD(788,u?B.b1(h.f):A.c,3,92,34)],t)
r=k.c
if(A.a.i(r.d).length!==0)s.push(k.cyl(788,u?B.b1(h.f):A.c,22))
v=B.p(j,B.x(s,A.m,j,A.e,A.j,0,A.p),A.f,v,j,j,j,j,j,j,A.yb,j,j,j)
u=B.a([B.at(k.qB(824,390),j,j,j)],t)
s=A.a.i(r.f)
if(s.length!==0&&h.e!==D.RX){h=A.w.j(0.65)
u.push(B.ao(0,B.p(j,B.d(s,j,2,A.a2,j,j,j,k.axG(i,14,A.c,1.15,A.O),j,j,j),A.f,h,j,j,j,j,j,j,A.lz,j,j,j),j,j,0,0,j,j))}return B.x(B.a([w,A.ad,v,A.ad,new B.an(A.a_,j,A.aa,A.t,u,j),A.N,k.NG(),A.R,B.E(k.WK(2,21),1)],t),A.aj,j,A.e,A.j,0,A.p)
case 3:h=k.vD(824,!0)
w=k.qB(824,560)
v=B.a([A.K,A.w.j(0.85)],x.O)
u=x.p
return B.x(B.a([h,A.ad,new B.an(A.b6,j,A.aa,A.t,B.a([w,B.ao(0,B.p(j,k.OK(780,A.bi,A.c,3,74,30),A.f,j,j,new B.o(j,j,j,j,j,new B.a9(A.b3,A.b6,A.x,v,j,j),A.n),j,j,j,j,D.bzp,j,j,j),j,j,0,0,j,j)],u),j),k.b6Y(824,A.bi),A.N,k.NG(),A.R,B.E(k.a9B(3),1)],u),A.aj,j,A.e,A.j,0,A.p)
case 4:h=x.p
return B.x(B.a([k.ad3(824),A.aA,k.aVA(824),k.b6X(824),A.N,k.NG(),A.ad,B.E(k.b9Z(3,300,B.x(B.a([k.qB(300,300),k.Wx(300)],h),A.m,j,A.e,A.j,0,A.p),360),1)],h),A.aj,j,A.e,A.j,0,A.p)
case 5:w=k.vD(824,!0)
v=x.p
u=B.x(B.a([k.abV(440,A.bi,3,62,26),k.aBh(440,A.bi,2,20),A.b0,k.arj(!1)],v),A.E,j,A.e,A.j,0,A.p)
return B.x(B.a([w,A.bv,new B.a7(j,400,B.B(B.a([new B.a7(440,j,u,j),A.aPN,new B.D(A.ic,k.qB(364,h.e===D.RX?400:330),j)],v),A.E,j,A.e,A.j,0,j,j),j),A.aA,B.E(k.WK(2,21),1)],v),A.aj,j,A.e,A.j,0,A.p)
case 6:return B.x(B.a([k.ad3(824),A.ad,k.bYC(824,2,70),k.cyj(824,21),A.N,k.NG(),A.ad,B.E(k.b9Z(3,340,B.at(k.qB(340,340),j,j,j),350),1)],x.p),A.aj,j,A.e,A.j,0,A.p)
case 7:w=k.vD(824,!0)
v=B.b1(h.x)
u=Date.now()
u=C.bCD(new B.U(u,0,!1))
t=x.p
v=B.a([B.p(j,B.d(u.toUpperCase(),j,j,j,j,j,j,k.PY(i,13,h.ch?B.b1(h.f):A.c,1.2,A.u),A.L,j,j),A.f,v,j,j,j,j,j,j,A.bh,j,j,j),A.aA],t)
u=A.a.i(k.c.w)
if(u.length!==0)v.push(B.d("\u201c"+u+"\u201d",j,j,j,j,j,j,k.aZW(h.Q,24,1.15,A.cE,A.O),j,j,j))
v.push(A.b0)
if(k.gaAB())v.push(k.aAA(230,250))
return B.x(B.a([w,A.aA,B.E(B.B(B.a([new B.a7(230,j,B.x(v,A.aj,j,A.e,A.j,0,A.p),j),B.p(j,j,A.f,B.b1(h.w),j,j,j,j,j,A.aiv,j,j,j,1.2),new B.a7(570,j,B.x(B.a([k.abV(570,A.bi,3,62,28),k.cyk(570,A.bi,20),A.N,k.arj(!1),A.N,B.at(k.qB(570,330),j,j,j),k.Wx(570),A.R,B.E(k.aPY(2,!1,17),1)],t),A.aj,j,A.e,A.j,0,A.p),j)],t),A.E,j,A.e,A.j,0,j,j),1)],t),A.aj,j,A.e,A.j,0,A.p)
case 8:w=k.vD(824,!0)
v=h.ch
u=v?B.b1(h.x):B.b1(h.w)
t=B.d("\u2605  SPECIAL REPORT  \u2605",j,j,j,j,j,j,k.PY(i,13,v?A.w:B.b1(h.x),3,A.u),j,j,j)
s=x.p
return B.x(B.a([w,A.ad,B.p(j,B.x(B.a([t,A.am,k.OK(788,A.bi,v?A.w:B.b1(h.f),2,72,30)],s),A.E,j,A.e,A.j,0,A.p),A.f,u,j,j,j,j,j,j,D.bxH,j,j,j),k.b6Y(824,A.bi),A.R,B.at(k.qB(824,310),j,j,j),k.Wx(824),A.N,k.NG(),A.R,B.E(k.a9B(3),1)],s),A.aj,j,A.e,A.j,0,A.p)
case 10:w=x.p
return B.x(B.a([k.vD(824,!0),A.aL,new B.an(A.a_,j,A.aa,A.t,B.a([k.qB(824,430),B.ao(18,k.c8V(k.c.b,17),j,j,18,j,j,j)],w),j),A.bv,k.azR(824,3,66),k.b71(824),A.ad,B.p(j,j,A.f,B.b1(h.w).j(0.25),j,j,j,1,j,j,j,j,j,j),A.ad,k.awr(),A.aA,B.E(k.WK(2,18),1)],w),A.aj,j,A.e,A.j,0,A.p)
case 11:h=h.x
w=x.p
return B.x(B.a([k.vD(824,!0),A.bv,new B.a7(j,500,B.B(B.a([new B.a7(410,j,B.x(B.a([k.aez(k.c.b,B.b1(h).j(0.14),15,B.b1(h)),A.aL,k.b43(410,4,58,28),k.aBk(410,6,20),A.b0],w),A.E,j,A.e,A.j,0,A.p),j),U.aPO,k.qB(390,500)],w),A.E,j,A.e,A.j,0,j,j),j),A.aA,k.awr(),A.aL,B.E(k.WK(2,18),1)],w),A.aj,j,A.e,A.j,0,A.p)
case 12:w=k.vD(824,!0)
v=k.qB(824,420)
u=B.hCR(-0.25)
t=B.b1(h.x)
s=B.a([new B.ac(0,A.G,A.w.j(0.4),A.J,10)],x.V)
r=x.p
return B.x(B.a([w,A.aL,new B.an(A.a_,j,A.aa,A.t,B.a([v,B.ao(22,B.fo(j,B.p(j,B.d("BREAKING NEWS",j,j,j,j,j,j,k.c8Y(i,30,A.c,1,A.cE,A.u),j,j,j),A.f,j,j,new B.o(t,j,j,j,s,j,A.n),j,j,j,j,D.bzF,j,j,j),j,u,!0),j,j,0,j,j,j)],r),j),A.bv,k.azR(824,3,62),k.b71(824),A.ad,B.p(j,j,A.f,B.b1(h.w).j(0.25),j,j,j,1,j,j,j,j,j,j),A.ad,k.aXC(A.lD),A.aA,B.E(k.WK(2,18),1)],r),A.aj,j,A.e,A.j,0,A.p)
case 13:w=k.c
q=A.a.i(w.x)
if(!(q.length!==0)){v=A.a.i(w.w)
q=v.length!==0?v:"More from NGMY News"}v=k.vD(824,!0)
u=h.w
t=x.p
w=B.a([k.qB(824,380),B.ao(j,k.aez(w.b,B.b1(u).j(0.85),15,B.b1(h.f)),j,j,16,j,16,j)],t)
s=k.azR(824,2,60)
r=k.cyw(824,2)
p=k.awr()
o=B.E(k.aPY(2,!1,18),1)
n=B.I(B.b1(u).j(0.18),A.r,1)
m=B.m(18)
h=h.x
l=B.b1(h).j(0.05)
return B.x(B.a([v,A.aL,new B.an(A.a_,j,A.aa,A.t,w,j),A.aL,s,r,A.R,p,A.aA,o,A.ad,B.p(j,B.B(B.a([B.bx(B.m(14),k.tM(150,104),A.aq),A.ot,B.E(B.x(B.a([k.aez("RELATED",B.b1(h).j(0.14),12,B.b1(h)),A.N,B.d(q,j,2,A.a2,j,j,j,k.axF(i,19,1.15,A.H),j,j,j)],t),A.E,j,A.e,A.P,0,A.p),1),B.X(A.eD,B.b1(u).j(0.6),j,j,j,30)],t),A.m,j,A.e,A.j,0,j,j),A.f,j,j,new B.o(l,j,n,m,j,j,A.n),j,j,j,j,A.bh,j,j,j)],t),A.aj,j,A.e,A.j,0,A.p)
case 9:return B.x(B.a([k.vD(824,!0),A.bv,k.abV(824,A.bi,3,62,30),k.aBh(824,A.bi,2,22),A.R,k.arj(!1),A.R,B.at(k.qB(824,330),j,j,j),k.aOW(824,A.bi),A.aL,B.E(k.bHt(2,40,21),1)],x.p),A.aj,j,A.e,A.j,0,A.p)}},
B(d){var w,v,u,t=this,s=null,r="Roboto",q=t.d,p=q.f,o=x.p,n=B.a([B.bU(0,B.c1(s,new B.o(s,s,s,s,s,new B.a9(A.ay,A.aD,A.x,B.a([B.b1(p),B.b1(q.r)],x.O),s,s),A.n),A.bf),0,0,0)],o)
if(q.ax)n.push(B.bU(0,B.b4(s,s,s,new C.b9h(B.b1(q.w),s),A.ax),0,0,0))
w=q.w
n.push(new B.D(D.bAb,B.x(B.a([B.E(t.cfU(),1),A.N,B.p(s,s,A.f,B.b1(w),s,s,s,1.4,s,s,s,s,s,s),A.fM,B.B(B.a([B.d("PRINTED WITH NGMY NEWS",s,s,s,s,s,s,t.aZU(r,11,1.4,A.H),s,s,s),B.d("CREATED BY NGMY.ORG",s,s,s,s,s,s,t.PY(r,11,B.b1(q.x),1.4,A.u),s,s,s)],o),A.m,s,A.iy,A.j,0,s,s)],o),A.aj,s,A.e,A.j,0,A.p),s))
v=B.b1(w)
n.push(B.bU(0,B.e2(B.b4(s,s,s,new C.brL(v.j(q.ch?0.07:0.06),s),A.ax),!0,s),0,0,0))
p=B.b1(p).j(0.75)
v=B.I(B.b1(w).j(0.5),A.r,1.2)
u=B.m(40)
o=B.a([],o)
q=t.f
if(q!=null)o.push(B.hT(B.fO(q,A.A,s,s,A.cf,A.bW,!1,30,!1,s,30),A.aq))
else o.push(B.X(A.ob,B.b1(w),s,s,s,28))
o.push(A.ab)
o.push(B.d("NGMY.ORG",s,s,s,s,s,s,t.axH(r,15,1,1.6,A.u),s,s,s))
n.push(B.ao(52,B.e2(B.d6(B.p(s,B.B(o,A.m,s,A.e,A.P,0,s,s),A.f,s,s,new B.o(p,s,v,u,s,s,A.n),s,s,s,s,D.bBh,s,s,s),0.6),!0,s),s,s,s,40,s,s))
return new B.a7(900,1260,B.jD(new B.an(A.a_,s,A.aa,A.t,n,s),A.t,s),s)}}
C.bcM.prototype={
jh(d){return C.hhB(d)},
jX(d){return!1}}
C.bcL.prototype={
a5(d,e){var w,v=C.hhB(e)
$.V()
w=B.K()
w.r=this.b.gp(0)
w.b=A.ac
w.c=6
return d.aJ(v,w)},
av(d){return!d.b.A(0,this.b)}}
C.bug.prototype={
jh(d){var w,v,u,t,s,r,q,p,o=new B.eb()
o.d5(3)
w=$.V()
v=B.a([],x.v)
u=new B.aI(w.r,A.ai,null,null,v)
u.D(new B.b0(0,8))
for(t=d.a,s=0;s<t;s+=14){w=new B.ap(s,o.aj()*14)
v.push(w)
r=u.f
if(r!=null)w.by(r)
w=u.e
if(w!=null)w.a.delete()
u.e=null}u.D(new B.ap(t,8))
w=d.b
r=w-8
u.D(new B.ap(t,r))
for(;t>0;t-=14){q=new B.ap(t,w-o.aj()*14)
v.push(q)
p=u.f
if(p!=null)q.by(p)
q=u.e
if(q!=null)q.a.delete()
u.e=null}u.D(new B.ap(0,r))
u.D(new B.bv())
return u},
jX(d){return!1}}
C.b9h.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=new B.eb()
k.d5(7)
$.V()
w=B.K()
for(v=this.b,u=e.a,t=e.b,s=d.a,r=0;r<700;++r){w.r=v.j(0.03+k.aj()*0.07).gp(0)
q=k.aj()
p=k.aj()
o=k.aj()
n=w.H()
s.drawCircle(q*u,p*t,0.4+o*1.4,n)
n.delete()}for(v=x.O,r=0;r<5;++r){q=k.aj()*u
p=k.aj()*t
m=50+k.aj()*90
w.sar(new B.c0(A.A,0.5,A.x,l,0,B.a([A.WS.j(0.13),A.K],v),l,l).aA(0,B.bX(new B.t(q,p),m)))
n=w.H()
s.drawCircle(q,p,m,n)
n.delete()}w.sar(l)},
av(d){return!1}}
C.brL.prototype={
a5(d,e){var w,v,u=null,t=e.a,s=B.fS(u,u,u,u,B.cX(u,u,u,u,u,u,u,u,u,B.l(u,u,this.b,u,u,u,u,u,"Roboto",u,u,t*0.34,u,u,A.u,u,u,!0,u,10,u,u,u,u,u,u),"NGMY"),A.a6,A.c5,u,A.dP,A.c4)
s.eI()
w=d.a
J.bq(w.save())
w.translate(t/2,e.b*0.52)
d.j_(0,-0.5)
t=s.b
v=t.c
t=t.a.c
s.a5(d,new B.t(-v/2,-t.gbc(t)/2))
w.restore()},
av(d){return!d.b.A(0,this.b)}}
C.W0.prototype={
U(){return new C.aEt()}}
C.aEt.prototype={
a_(){var w=this
w.a2()
B.fwy(w.a.c,null).bL(new C.eli(),x.g7).bL(new C.elj(w),x.a)
w.a.toString},
gaNK(){var w=D.awe[this.e].b
if(w==null){w=this.d
w=w==null?1:w.c/w.d}return w},
gaxI(){var w,v,u,t,s,r=this,q=r.d,p=q.c,o=q.d
q=r.gaNK()
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
q=A.k.E(v*p,q,p-q)-q
w=A.k.E(u*o,w,o-w)-w
return new B.a5(q,w,q+s,w+t)},
a_6(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f
var $async$a_6=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:g=r.d
if(g==null||r.y){w=1
break}r.m(new C.el5(r))
t=4
q=r.gaxI()
j=q
p=Math.min(1600,j.c-j.a)
j=q
i=q
o=p*(j.d-j.b)/(i.c-i.a)
$.V()
n=new B.pI()
m=B.z1(n,null)
i=B.K()
i.Q=A.h5
m.ow(g,q,new B.a5(0,0,0+p,0+o),i)
w=7
return B.b(n.nS().zp(J.h6Z(p),J.h6Z(o)),$async$a_6)
case 7:l=e
w=8
return B.b(l.hw(A.h7),$async$a_6)
case 8:k=e
j=r.c
if(j!=null){j=B.a3(j,!1)
i=k
i.toString
j.N(J.eV(J.vw(i)))}t=2
w=6
break
case 4:t=3
f=s.pop()
if(r.c!=null){r.m(new C.el6(r))
r.c.J(x.q).f.S(D.f4O)}w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a_6,v)},
B(d){var w,v,u,t=this,s=null,r=t.d,q=B.aJ(s,s,s,s,A.lb,s,s,s,new C.elc(d),s,s,s,s,s,s),p=x.p
q=B.eD(B.a([B.bK(!1,D.fIZ,s,s,!0,s,s,t.y||r==null?s:t.gc8Z(),s,s)],p),s,s,!0,!0,A.Be,s,1,!0,s,0,!1,s,!1,s,s,q,s,!0,s,s,s,s,s,D.fMZ,s,s,s,1,s,!0)
if(r==null)p=A.mp
else{w=B.E(new B.D(A.bQ,B.at(new B.fL(t.gaNK(),B.cC(new C.eld(t,r)),s),s,s,s),s),1)
v=B.a([],p)
for(u=0;u<6;++u)v.push(new B.D(A.it,B.j0(s,s,s,new B.y(D.awe[u].a,s,E.aRD,s,s,s,s,s,s,s,s,s),s,new C.ele(t,u),t.e===u,s,s,s,s),s))
p=B.x(B.a([w,B.p(s,B.bm(!0,B.x(B.a([new B.a7(s,40,B.cq(v,s,s,s,s,A.aN,!1),s),B.B(B.a([D.bT8,B.E(B.l4(s,s,s,6,1,new C.elf(t),t.f),1),D.bSL],p),A.m,s,A.e,A.j,0,s,s),D.fGi,A.am,B.bK(!1,D.fG0,s,s,!0,s,s,new C.elg(t,d),s,s)],p),A.m,s,A.e,A.P,0,A.p),!0,!1,A.af,!0,!1),A.f,D.XD,s,s,s,s,s,s,D.bx1,s,s,s)],p),A.m,s,A.e,A.j,0,A.p)}return B.c5(q,A.Be,p,s,!1,!1,s,s)}}
C.bci.prototype={
a5(d,e){var w
$.V()
w=B.K()
w.Q=A.cf
return d.ow(this.b,this.c,new B.a5(0,0,0+e.a,0+e.b),w)},
av(d){return!d.c.A(0,this.c)||d.b!==this.b}}
C.a04.prototype={
U(){var w=$.ax(),v=x.A
return new C.aFR(new B.as(A.at,w),new B.as(new B.bb("NGMY",A.b4,A.aO),w),new B.cz(null,v),new B.cz(null,v),A.d.gI(D.a4e),"quote"+1000*Date.now(),B.a([],x.t),B.aX(x.S),A.L)}}
C.oF.prototype={}
C.aFR.prototype={
gaVI(){var w,v,u=this
if(u.p1)w=new B.vM(1,u.p2,0.9,u.p3).m1().l()&16777215
else{v=u.k4
w=v==null?null:v&16777215}if(w==null)return 0
return(A.o.E(A.k.V(u.ok*255),0,255)<<24|w)>>>0},
a_(){var w=this
w.a2()
w.a.toString
w.p4=null
$.aW.x1$.push(new C.eUu(w))},
t(){var w=this.d,v=$.ax()
w.T$=v
w.P$=0
w=this.e
w.T$=v
w.P$=0
this.a1()},
YI(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$YI=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b($.r2().jJ(0,"assets/images/ngmy_logo.png"),$async$YI)
case 7:q=e
p=J.eV(J.vw(q))
o=r.c
w=o!=null?8:9
break
case 8:w=10
return B.b(F.bDo(new B.pU(p,1),o),$async$YI)
case 10:case 9:if(r.c==null){w=1
break}r.m(new C.eTm(r,p))
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
return B.i($async$YI,v)},
Q0(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Q0=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hV().kW(92,1800,A.eJ),$async$Q0)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fj(),$async$Q0)
case 8:p=e
n=r.c
if(n==null){w=1
break}w=9
return B.b(F.bDo(new B.pU(p,1),n),$async$Q0)
case 9:if(r.c==null){w=1
break}r.m(new C.eTK(r,p))
t=2
w=6
break
case 4:t=3
l=s.pop()
o=B.ab(l)
n=r.c
if(n!=null)n.J(x.q).f.S(B.b3(null,null,null,null,null,A.t,null,B.d("Could not open that picture. "+B.w(o),null,null,null,null,null,null,null,null,null,null),null,A.V,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Q0,v)},
b3p(){var w=this
w.RG=w.R8=0
w.ry=w.rx=1
w.xr=w.x2=w.x1=w.to=0
w.y1=!1
w.aB=w.aK=w.aE=w.az=w.Z=w.b8=w.bi=w.y2=0
w.b1=null
w.b0=0.25
w.bb=null
w.bK=0.5
w.aH=1
w.c7=w.bD=w.bh=0
w.cK=w.c5=!1},
aXm(d,e,f,g,h,i,j,a0,a1){var w,v,u,t,s,r,q,p,o,n=1-g,m=n*0.2126,l=n*0.7152,k=n*0.0722
n=x.x
w=C.bA5(B.a([m+g,l,k,0,0,m,l+g,k,0,0,m,l,k+g,0,0,0,0,0,1,0],n),D.djw)
if(Math.abs(j)>0.5){v=j*3.141592653589793/180
u=Math.cos(v)
t=Math.sin(v)
s=0.715-u*0.715
r=t*0.715
q=0.072-u*0.072
p=0.213-u*0.213
w=C.bA5(B.a([0.213+u*0.787-t*0.213,s-r,q+t*0.928,0,0,p+t*0.143,0.715+u*0.285+t*0.14,q-t*0.283,0,0,p-t*0.787,s+r,0.072+u*0.928+t*0.072,0,0,0,0,0,1,0],n),w)}o=128*(1-f)+d*255
n=h*25
w=C.bA5(C.h1Q(Math.pow(2,e)*f,o+n,o-i*25,o-n+i*12),w)
if(a0>0){n=a0*255*0.25
w=C.bA5(C.h1Q(1-a0*0.5,n,n,n),w)}return a1?C.bA5(C.h1Q(-1,255,255,255),w):w},
aBq(){var w,v,u=B.af("\\S+",!0,!1,!1,!1).l5(0,this.d.a.a),t=B.C(u,B.a6(u).k("J.E"))
for(u=this.db;w=u.length,v=t.length,w<v;)u.push(0)
if(w>v)A.d.zi(u,v,w)
this.dx.pm(new C.eTU(t),!0)
return t},
b5Y(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.w
e.aBq()
w=C.i9A(e.d.a.a,e.db)
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
return C.i61(d,k,v,a0,j,e.gaVI(),e.ax,i,u,q,p,r,t,s,w,g,h,f,n,l,o,m)},
cwb(){return this.b5Y(null)},
Dh(){var w=0,v=B.j(x.dd),u,t=this,s,r,q
var $async$Dh=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.p4==null){u=null
w=1
break}w=3
return B.b($.aW.gmF(),$async$Dh)
case 3:w=4
return B.b(B.bO(A.eO,null,x.H),$async$Dh)
case 4:w=5
return B.b($.aW.gmF(),$async$Dh)
case 5:s=$.aW.ak$.x.h(0,t.r)
r=s==null?null:s.gba()
if(!(r instanceof B.q4)){u=null
w=1
break}w=7
return B.b(r.m2(1080/r.gY(0).a),$async$Dh)
case 7:w=6
return B.b(e.hw(A.h7),$async$Dh)
case 6:q=e
u=q==null?null:J.eV(A.dF.gaQ(q))
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$Dh,v)},
aat(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$aat=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.Q){w=1
break}q.m(new C.eT5(q))
t=4
w=7
return B.b(q.Dh(),$async$aat)
case 7:p=e
o=p==null?null:"data:image/png;base64,"+A.cI.gcs().aM(p)
n=C.BW(null,null,null,null,D.on,6,!1,null,null,null,null,null,C.cE(),null,!1,null,"NGMY Quote",null,null,B.a([q.b5Y(o)],x.g),"office_blue",null,!1,null)
l=q.c
if(l!=null)B.a3(l,!1).N(n)
r.push(6)
w=5
break
case 4:t=3
j=s.pop()
m=B.ab(j)
l=q.c
if(l!=null)l.J(x.q).f.S(B.b3(null,null,null,null,null,A.t,null,B.d(B.w(m),null,null,null,null,null,null,null,null,null,null),null,A.V,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.eT6(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$aat,v)},
Aw(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$Aw=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.Q){w=1
break}q.m(new C.eT3(q))
t=4
w=7
return B.b($.aW.gmF(),$async$Aw)
case 7:w=8
return B.b(B.bO(A.nj,null,x.H),$async$Aw)
case 8:w=9
return B.b($.aW.gmF(),$async$Aw)
case 9:k=$.aW.ak$.x.h(0,q.f)
p=k==null?null:k.gba()
if(!(p instanceof B.q4))throw B.W("The picture is not ready yet.")
w=10
return B.b(p.m2(1080/p.gY(0).a),$async$Aw)
case 10:o=e
w=11
return B.b(o.hw(A.h7),$async$Aw)
case 11:n=e
if(n==null)throw B.W("Could not make the picture.")
w=12
return B.b(A7.agz(J.eV(A.dF.gaQ(n)),"ngmy_quote.png","image/png"),$async$Aw)
case 12:m=e
k=q.c
if(k==null){r=[1]
w=5
break}k=k.J(x.q).f
k.S(B.b3(null,null,null,null,null,A.t,null,B.d(m?"Your quote picture is ready. Check your downloads.":"Downloading is not available here. Use Edit in Slides, then PDF.",null,null,null,null,null,null,null,null,null,null),null,A.V,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
l=B.ab(i)
k=q.c
if(k!=null)k.J(x.q).f.S(B.b3(null,null,null,null,null,A.t,null,B.d(B.w(l),null,null,null,null,null,null,null,null,null,null),null,A.V,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.eT4(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Aw,v)},
cj1(){var w=this.p4
w.toString
return B.cC(new C.eTD(this,w))},
b_2(d,e){var w=null
return B.bs(w,w,w,w,w,D.fft,w,w,!0,new B.b5(4,B.m(16),P.vq),w,w,w,w,w,D.tC,!0,w,w,w,w,new B.b5(4,B.m(16),D.b0n),w,w,w,w,w,w,w,w,A2.DV,e,w,w,w,w,w,w,w,D.fkV,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
xY(d,e){var w=null,v=x.p,u=B.a([],v)
A.d.v(u,B.a([B.X(e,A.b5,w,w,w,15),A.bo],v))
u.push(B.d(d,w,w,w,w,w,w,D.aSp,w,w,w))
return new B.D(H.ail,B.B(u,A.m,w,A.e,A.j,0,w,w),w)},
b_1(d,e){var w=null,v=B.m(18),u=B.I(A.bz,A.r,1)
return B.p(w,B.aF(!1,A.a1,!0,w,d,A.f,w,0,w,w,w,w,w,A.jT),A.f,w,w,new B.o(D.tC,w,u,v,w,w,A.n),w,w,w,w,e,w,w,1/0)},
vK(d){return this.b_1(d,A.bB)},
oh(d,e,f,g){var w,v,u,t,s,r=null,q=g!=null,p=f?G.uv:r
if(f)w=r
else w=A.c.j(q?0.07:0.03)
v=B.m(30)
u=B.I(f?A.K:A.bz,A.r,1)
t=x.p
s=B.a([],t)
if(e!=null)A.d.v(s,B.a([B.X(e,q?A.c:A.jK,r,r,r,16),A.bo],t))
s.push(B.d(d,r,r,r,r,r,r,B.l(r,r,q?A.c:A.jK,r,r,r,r,r,r,r,r,12.5,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r))
return B.aB(r,B.d9(r,B.B(s,A.m,r,A.e,A.P,0,r,r),r,r,A.b7,new B.o(w,r,u,v,r,p,A.n),A.ho,r,r,r,A.FL,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,g,r,r,r,r,r,r,!1,A.a4)},
agq(d,e,f){return this.oh(d,null,e,f)},
axN(d,e,f,g,h,i,j){var w=null,v=B.m(12),u=g?A.b5.j(0.28):A.c.j(0.05),t=g?A.eF:A.bz,s=x.p
v=B.a([B.d9(w,d,w,w,A.b7,new B.o(u,w,B.I(t,A.r,g?2:1),v,w,w,A.n),A.ho,w,e,w,new B.Q(i,i,i,i),w,w,j)],s)
u=g?A.c:A.aB
A.d.v(v,B.a([A.av,B.d(f,w,1,A.a2,w,w,w,B.l(w,w,u,w,w,w,w,w,w,w,w,j<54?8.5:10.5,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],s))
return B.aB(w,new B.a7(j,w,B.x(v,A.m,w,A.e,A.P,0,A.p),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,h,w,w,w,w,w,w,!1,A.a4)},
b_5(d,e,f,g,h,i){return this.axN(d,e,f,g,h,5,i)},
kp(d,e,f,g,h,i,j){var w,v,u=null,t=x.p,s=B.a([B.E(B.d(d,u,u,u,u,u,u,E.aRi,u,u,u),1)],t)
if(i!=null&&Math.abs(e-i)>0.001)s.push(B.aB(u,D.ehe,A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.eTQ(this,h,i),u,u,u,u,u,u,!1,A.a4))
w=A.c.j(0.08)
v=B.m(20)
s.push(B.p(u,B.d(j,u,u,u,u,u,u,A.aRw,u,u,u),A.f,u,u,new B.o(w,u,u,v,u,u,A.n),u,u,u,u,A.a_4,u,u,u))
s=B.B(s,A.m,u,A.e,A.j,0,u,u)
w=this.c
w.toString
w=B.avB(w).cKw(A.b5,A.bz,A.b5.j(0.2),A.c,D.eW1,4)
return new B.D(A.y_,B.x(B.a([s,B.aac(B.l4(u,u,u,g,f,new C.eTR(this,h),A.k.E(e,f,g)),w)],t),A.m,u,A.e,A.j,0,A.p),u)},
aiq(d,e,f,g,h,i){return this.kp(d,e,f,g,h,null,i)},
aiQ(d,e,f){var w,v,u,t,s,r,q,p,o=null,n=B.a([],x.p)
for(w=f.length,v=0;v<f.length;f.length===w||(0,B.M)(f),++v){u=f[v]
t=u==null
s=t?A.ds:B.b1(u)
r=d==u
q=r?A.c:A.aZ
p=new B.ay(q,r?3:1,A.r,-1)
t=t?D.bM5:o
n.push(B.aB(o,B.p(o,t,A.f,o,o,new B.o(s,o,new B.bI(p,p,p,p),o,o,o,A.a5),o,34,o,o,o,o,o,34),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new C.eTT(this,e,u),o,o,o,o,o,o,!1,A.a4))}return B.bW(A.bD,n,A.bq,10,10)},
bLA(){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.x==="All")w=D.a4e
else{v=x.a8
w=B.C(new B.Z(D.a4e,new C.eSW(o),v),v.k("J.E"))}v=B.aN(n,A.X,!1,n,!0,A.t,n,B.aO(),o.d,n,n,n,n,n,2,o.b_2("Your quote",o.w.y),A.y,!0,n,!0,n,!1,n,A.ak,n,n,n,n,n,n,n,280,n,4,2,n,!1,"\u2022",n,new C.eSX(o),n,n,n,!1,n,n,!1,n,!0,n,A.a9,n,n,n,n,n,n,n,n,n,n,n,A.a94,!0,A.a6,n,A.ao,n,n,n,n)
u=B.aN(n,A.X,!1,n,!0,A.t,n,B.aO(),o.e,n,n,n,n,n,2,o.b_2("Who said it","NGMY"),A.y,!0,n,!0,n,!1,n,A.ak,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,new C.eSY(o),n,n,n,!1,n,n,!1,n,!0,n,A.a9,n,n,n,n,n,n,n,n,n,n,n,A.df,!0,A.a6,n,A.ao,n,n,n,n)
t=o.xY("DESIGNS",A.ud)
s=x.p
r=B.a([],s)
for(q=0;q<6;++q){p=D.cUZ[q]
r.push(new B.D(A.it,o.agq(p,o.x===p,new C.eSZ(o,p)),n))}return B.x(B.a([v,A.R,u,t,B.cd(B.B(r,A.m,n,A.e,A.j,0,n,n),A.t,n,A.y,n,n,n,n,A.aN),A.ad,new B.a7(n,118,B.hN(n,new C.eT_(o,w),w.length,n,n,A.aN,new C.eT0(),!1),n),A.N,o.b_1(B.x(B.a([B.iI(A.b5,n,n,A.af,!0,new C.eT1(o),n,D.fxf,n,D.ftv,o.k3),B.iI(A.b5,n,n,A.af,!0,new C.eT2(o),n,n,n,D.fqL,o.k2)],s),A.m,n,A.e,A.j,0,A.p),A.aiY)],s),A.E,n,A.e,A.j,0,A.p)},
cER(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=null,a7=a5.aBq()
if(a7.length===0)return a5.vK(B.d("Type your quote on the Design tab. Every word will show up here so you can make it bigger, normal or smaller.",a6,a6,a6,a6,a6,a6,D.JK,a6,a6,a6))
w=a5.d.a.a
v=B.a([],x.t)
for(u=a7.length,t=0,s=0;s<a7.length;a7.length===u||(0,B.M)(a7),++s){r=a7[s]
v.push(t)
q=B.af('[.!?]["\u201d\u2019)]*$',!0,!1,!1,!1)
p=r.b
o=p.index
p=A.a.ap(w,o,o+p[0].length)
if(q.b.test(p))++t}n=v.length===0?0:A.d.gal(v)+1
u=a5.dx
m=B.C(u,B.a6(u).k("cr.E"))
A.d.fc(m)
l=m.length!==0&&A.d.d9(m,new C.eUj(a5,m))?a5.db[A.d.gI(m)]:a6
k=new C.eUq(a5)
j=new C.eUs()
q=B.d("Tap the words you want to change, then choose a size. One sentence can have big, normal and small words.",a6,a6,a6,a6,a6,a6,D.JK,a6,a6,a6)
p=x.p
o=B.a([],p)
for(i=a5.db,h=0;h<a7.length;++h){g=new B.aQ(11,11)
f=u.q(0,h)?A.b5.j(0.38):A.c.j(0.06)
e=u.q(0,h)?A.eF:A.bz
d=new B.ay(e,u.q(0,h)?2:1,A.r,-1)
e=a7[h].b
a0=e.index
e=A.a.ap(w,a0,a0+e[0].length)
a0=B.af("[*~^]",!0,!1,!1,!1)
e=B.aL(e,a0,"")
a0=j.$1(i[h])
a1=i[h]>0?A.u:A.a7
o.push(B.aB(a6,B.p(a6,new B.y(e,a6,new B.F(!0,A.c,a6,a6,a6,a6,a0,a1,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),a6,a6,a6,a6,a6,a6,a6,a6,a6),A.f,a6,a6,new B.o(f,a6,new B.bI(d,d,d,d),new B.bk(g,g,g,g),a6,a6,A.n),a6,a6,a6,a6,A.Ne,a6,a6,a6),A.y,!1,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,new C.eUk(a5,h),a6,a6,a6,a6,a6,a6,!1,A.a4))}o=a5.vK(B.bW(A.bD,o,A.tc,6,6))
i=B.a([a5.oh("All words",L.anf,!1,new C.eUl(a5,a7))],p)
if(n>1){a2=0
for(;;){if(!(a2<n&&a2<8))break
a3=a2+1
i.push(a5.agq("Sentence "+a3,!1,new C.eUm(a5,a7,v,a2)))
a2=a3}}i.push(a5.agq("Clear picks",!1,new C.eUn(a5)))
i=B.bW(A.bD,i,A.bq,8,8)
g=a5.xY("SIZE OF THE PICKED WORDS",D.amH)
f=B.a([],p)
for(s=0;s<4;++s){e={}
a0=D.dpq[s]
a1=e.a=null
a4=a0.a
e.a=a4
e=u.a===0?a1:new C.eUo(e,k)
f.push(a5.agq(a0.b,l===a4,e))}return B.x(B.a([q,A.R,o,A.R,i,g,B.bW(A.bD,f,A.bq,8,8),A.R,a5.oh("Make every word normal",A.l8,!1,new C.eUp(a5))],p),A.E,a6,A.e,A.j,0,A.p)},
cA_(){var w,v,u,t,s,r,q=this,p=null,o=x.p,n=B.B(B.a([D.bCt,B.d(A.d.h_(D.axX,new C.eU2(q)).b,p,p,p,p,p,p,D.fdS,p,p,p)],o),A.m,p,A.e,A.j,0,p,p),m=B.cC(new C.eU3(q)),l=q.xY("HIGHLIGHT BEHIND THE WORDS",A.a1_),k=q.p1?-1:q.k4
k=q.aiQ(k,new C.eU4(q),D.d4H)
w=q.p1
v=w?A.c:A.aZ
n=B.a([n,A.R,m,l,B.bW(A.bD,B.a([k,B.aB(p,B.p(p,D.bP6,A.f,p,p,new B.o(p,p,B.I(v,A.r,w?3:1),p,p,D.f7q,A.a5),p,34,p,p,p,p,p,34),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.eU7(q),p,p,p,p,p,p,!1,A.a4)],o),A.tc,10,10),A.am,B.d("Add a coloured band behind the words, with any word design. The first circle turns it off.",p,p,p,p,p,p,D.JK,p,p,p)],o)
if(q.gaVI()!==0){m=B.a([],o)
if(q.p1){l=q.p2
l=q.aiq("Colour",l,0,360,new C.eU8(q),""+A.k.V(l)+"\xb0")
k=q.p3
A.d.v(m,B.a([l,q.aiq("Shade",k,0.15,0.9,new C.eU9(q),""+A.k.V(k*100))],o))}l=q.ok
m.push(q.kp("Strength",l,0.15,1,new C.eUa(q),1,""+A.k.V(l*100)+"%"))
A.d.v(n,B.a([A.R,q.vK(B.x(m,A.m,p,A.e,A.j,0,A.p))],o))}n.push(q.xY("LOOK",A.yQ))
m=B.a([q.oh("Bold",I.amF,q.fy,new C.eUb(q)),q.oh("Italic",I.amG,q.go,new C.eUc(q))],o)
for(u=0;u<3;++u){l={}
k=D.cWb[u]
l.a=null
t=k.a
l.a=t
w=q.id===t
v=w?G.uv:p
w=w?p:A.c.j(0.07)
s=new B.aQ(14,14)
r=new B.ay(q.id===l.a?A.K:A.bz,1,A.r,-1)
m.push(B.aB(p,B.p(p,B.X(k.b,A.c,p,p,p,20),A.f,p,p,new B.o(w,p,new B.bI(r,r,r,r),new B.bk(s,s,s,s),p,v,A.n),p,38,p,p,p,p,p,42),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.eUd(l,q),p,p,p,p,p,p,!1,A.a4))}n.push(B.bW(A.bD,m,A.tc,8,8))
n.push(q.xY("COLOUR",A.nq))
n.push(q.aiQ(q.fx,new C.eUe(q),D.dg2))
n.push(A.am)
n.push(B.d("The first circle keeps the colour that comes with the design.",p,p,p,p,p,p,D.JK,p,p,p))
n.push(q.xY("SIZE AND PLACE",A.GI))
m=q.fr
m=q.kp("Text size",m,0.5,1.6,new C.eU5(q),1,""+A.k.V(m*100)+"%")
l=q.k1
n.push(q.vK(B.x(B.a([m,q.kp("Up / down",l,0.12,0.5,new C.eU6(q),0.3,""+A.k.V(l*100))],o),A.m,p,A.e,A.j,0,A.p)))
return B.x(n,A.E,p,A.e,A.j,0,A.p)},
cj2(){var w,v,u,t,s,r,q=this,p=null,o=q.p4
if(o==null){w=B.m(22)
v=B.I(A.b5.j(0.6),A.r,1.6)
u=B.a([A.b5.j(0.18),A.bA.j(0.12)],x.O)
return B.aB(p,B.p(p,B.x(B.a([B.p(p,D.bUB,A.f,p,p,D.b3n,p,62,p,p,p,p,p,62),A.aA,D.fuK,A.am,D.fzu],x.p),A.m,p,A.e,A.j,0,A.p),A.f,p,p,new B.o(D.tC,p,v,w,p,new B.a9(A.a3,A.a8,A.x,u,p,p),A.n),p,p,p,p,D.byg,p,p,1/0),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,q.gb_4(),p,p,p,p,p,p,!1,A.a4)}w=x.p
v=B.B(B.a([B.bx(B.m(12),new B.a7(46,62,B.fO(o,A.A,120,p,A.cf,A.bW,!1,p,!1,p,p),p),A.aq),A.ba,B.E(B.x(B.a([D.fug,A.N,B.bW(A.bD,B.a([q.oh("Change",A.kg,!1,q.gb_4()),q.oh("Remove",A.ec,!1,new C.eTH(q))],w),A.bq,6,6)],w),A.E,p,A.e,A.j,0,A.p),1)],w),A.m,p,A.e,A.j,0,p,p)
u=B.a([],w)
for(t=0;t<5;++t){s=D.dcj[t]
u.push(q.oh(s.b,s.a,q.at===t,new C.eTI(q,t)))}u=B.bW(A.bD,u,A.bq,8,8)
r=q.at
A:{if(0===r){s=q.c1B(o)
break A}if(1===r){s=q.c0z()
break A}if(2===r){s=q.bHs()
break A}if(3===r){s=q.bNR()
break A}s=q.bJx()
break A}return B.x(B.a([v,A.ad,u,A.aA,s,A.R,new B.bL(A.a3,p,p,q.oh("Reset the whole picture",A.l8,!1,new C.eTJ(q)),p)],w),A.E,p,A.e,A.j,0,A.p)},
c1B(d){var w=this,v=x.p
return B.x(B.a([B.bW(A.bD,B.a([w.oh("Auto enhance",E.a0C,!1,new C.eTz(w)),w.oh("Make words easy to read",A.p6,!1,new C.eTA(w))],v),A.bq,8,8),A.aA,B.cC(new C.eTB(w,d))],v),A.E,null,A.e,A.j,0,A.p)},
c0z(){var w,v,u,t,s,r,q,p,o=this,n=o.R8
n=o.kp("Exposure",n,-1.5,1.5,new C.eTd(o),0,A.k.ac(n,1))
w=o.RG
w=o.kp("Brightness",w,-0.5,0.5,new C.eTe(o),0,""+A.k.V(w*100))
v=o.rx
v=o.kp("Contrast",v,0.4,2,new C.eTf(o),1,""+A.k.V(v*100))
u=o.xr
u=o.kp("Fade",u,0,1,new C.eTg(o),0,""+A.k.V(u*100))
t=o.aE
t=o.kp("Spotlight",t,0,1,new C.eTh(o),0,""+A.k.V(t*100))
s=o.Z
s=o.kp("Darken",s,0,0.85,new C.eTi(o),0,""+A.k.V(s*100))
r=o.b8
r=o.kp("Vignette",r,0,0.9,new C.eTj(o),0,""+A.k.V(r*100))
q=o.aB
q=o.kp("Shade behind words",q,0,0.85,new C.eTk(o),0,""+A.k.V(q*100))
p=o.aK
return o.vK(B.x(B.a([n,w,v,u,t,s,r,q,o.kp("Shade top & bottom",p,0,0.85,new C.eTl(o),0,""+A.k.V(p*100))],x.p),A.m,null,A.e,A.j,0,A.p))},
bHs(){var w,v,u,t,s=this,r=null,q=s.ry
q=s.kp("Colour strength",q,0,2.2,new C.eSz(s),1,""+A.k.V(q*100))
w=s.to
w=s.kp("Warmth",w,-1,1,new C.eSA(s),0,""+A.k.V(w*100))
v=s.x1
v=s.kp("Tint",v,-1,1,new C.eSB(s),0,""+A.k.V(v*100))
u=s.x2
t=x.p
u=s.vK(B.x(B.a([q,w,v,s.kp("Shift colours",u,-180,180,new C.eSC(s),0,""+A.k.V(u)+"\xb0"),new B.bL(A.a3,r,r,s.oh("Negative",D.bKa,s.y1,new C.eSD(s)),r)],t),A.m,r,A.e,A.j,0,A.p))
v=s.xY("COLOUR WASH",A.Oa)
w=s.b1
q=B.a([null],x.Z)
A.d.v(q,D.awD)
t=B.a([u,v,s.aiQ(w,new C.eSE(s),q),A.N],t)
if(s.b1!=null){q=s.b0
t.push(s.vK(s.aiq("Wash strength",q,0,0.9,new C.eSF(s),""+A.k.V(q*100))))}return B.x(t,A.E,r,A.e,A.j,0,A.p)},
bNR(){var w,v,u,t,s,r=this,q=r.y2
q=r.kp("Blur",q,0,24,new C.eT7(r),0,A.o.u(A.k.V(q)))
w=r.bi
w=r.kp("Soft focus",w,0,1,new C.eT8(r),0,""+A.k.V(w*100))
v=r.az
u=x.p
v=r.vK(B.x(B.a([q,w,r.kp("Film grain",v,0,1,new C.eT9(r),0,""+A.k.V(v*100))],u),A.m,null,A.e,A.j,0,A.p))
w=r.xY("LIGHT LEAK",D.bJU)
q=r.bb
t=B.a([null],x.Z)
s=x.S
A.d.v(t,B.d1(D.awD,0,B.dB(8,"count",s),s))
u=B.a([v,w,r.aiQ(q,new C.eTa(r),t),A.N],u)
if(r.bb!=null){q=r.bK
u.push(r.vK(r.aiq("Leak strength",q,0,1,new C.eTb(r),""+A.k.V(q*100))))}return B.x(u,A.E,null,A.e,A.j,0,A.p)},
bJx(){var w,v,u,t,s=this,r=s.aH
r=s.kp("Zoom",r,1,3,new C.eSJ(s),1,""+A.k.V(r*100)+"%")
w=s.bh
w=s.kp("Left / right",w,-1,1,new C.eSK(s),0,""+A.k.V(w*100))
v=s.bD
v=s.kp("Up / down",v,-1,1,new C.eSL(s),0,""+A.k.V(v*100))
u=s.c7
t=x.p
return B.x(B.a([s.vK(B.x(B.a([r,w,v,s.kp("Turn",u,-180,180,new C.eSM(s),0,""+A.k.V(u)+"\xb0")],t),A.m,null,A.e,A.j,0,A.p)),A.R,B.bW(A.bD,B.a([s.oh("Turn 90\xb0",H.anM,!1,new C.eSN(s)),s.oh("Flip sideways",A.Gv,s.c5,new C.eSO(s)),s.oh("Flip upside down",A.Gv,s.cK,new C.eSP(s))],t),A.bq,8,8)],t),A.E,null,A.e,A.j,0,A.p)},
c4i(){var w=null,v=B.m(22),u=B.I(A.bz,A.r,1)
return B.p(w,B.x(B.a([D.eWd,A.R,D.fwh,A.aA,B.aB(w,B.p(A.A,D.eWq,A.f,w,w,new B.o(w,w,w,B.m(16),w,G.uv,A.n),w,52,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eTC(this),w,w,w,w,w,w,!1,A.a4)],x.p),A.E,w,A.e,A.j,0,A.p),A.f,w,w,new B.o(D.tC,w,u,v,w,w,A.n),w,w,w,w,A.bQ,w,w,w)},
c1o(){var w,v,u,t,s,r,q,p=this,o=null,n=new C.eTu(p),m=x.p,l=B.B(B.a([D.bCz,p.oh("Reset",A.l8,!1,new C.eTq(p))],m),A.m,o,A.e,A.j,0,o,o),k=B.d("Drag it on the quote to move it. It stays on every quote.",o,o,o,o,o,o,D.JK,o,o,o),j=p.xY("SHAPE",A.anI),i=B.a([],m)
for(w=0;w<7;++w){v={}
u=D.CB[w]
v.a=null
t=v.a=u.a
if(t.length!==0){s=p.cx
i.push(p.b_5(n.$2(t,p.cy),62,u.b,s===t,new C.eTr(v,p),62))}}i=B.bW(A.bD,i,A.bq,8,8)
v=p.xY("RING",A.rl)
u=B.a([],m)
for(w=0;w<11;++w){s={}
r=D.Cw[w]
s.a=null
t=s.a=r.a
q=p.cy
u.push(p.b_5(n.$2(p.cx,t),62,r.b,q===t,new C.eTs(s,p),62))}u=B.bW(A.bD,u,A.bq,8,8)
s=p.CW
return B.x(B.a([l,A.av,k,j,i,v,u,A.ad,p.vK(p.kp("Size",s,0.12,0.4,new C.eTt(p),0.22,""+A.k.V(s*100)))],m),A.E,o,A.e,A.j,0,A.p)},
b20(d){return new B.a7(null,d,new B.fL(0.5625,B.cC(new C.eTN(this)),null),null)},
czg(){var w,v,u,t,s,r,q=null,p=A.c.j(0.05),o=B.m(18),n=B.I(A.bz,A.r,1),m=x.p,l=B.a([],m)
for(w=0;w<6;++w){v=this.as===w
u=v?G.uv:q
t=new B.aQ(14,14)
s=D.des[w]
r=v?A.c:A.aB
r=B.X(s.a,r,q,q,q,19)
v=v?A.c:A.aB
l.push(new B.bA(1,A.bd,B.aB(A.cc,B.d9(q,B.x(B.a([r,A.cK,new B.qv(A.e0,A.A,A.f,new B.y(s.b,q,new B.F(!0,v,q,q,q,q,10.5,A.H,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q),q,q,q,q,q,q,q,q,q),q)],m),A.m,q,A.e,A.P,0,A.p),q,q,A.b7,new B.o(q,q,q,new B.bk(t,t,t,t),q,u,A.n),D.btS,q,q,q,A.hE,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.eTW(this,w),q,q,q,q,q,q,!1,A.a4),q))}return B.p(q,B.B(l,A.m,q,A.e,A.j,0,q,q),A.f,q,q,new B.o(p,q,n,o,q,q,A.n),q,q,q,D.bvY,A.m1,q,q,q)},
aQu(){var w,v,u=this,t=null,s=u.czg(),r=u.as
A:{if(0===r){w=u.bLA()
break A}if(1===r){w=u.cER()
break A}if(2===r){w=u.cA_()
break A}if(3===r){w=u.cj2()
break A}if(4===r){w=u.c1o()
break A}w=u.c4i()
break A}v=x.p
return B.bx(A.ti,B.em(B.x(B.a([s,B.E(B.cq(B.a([w],v),t,D.bx2,t,t,A.ag,!1),1)],v),A.m,t,A.e,A.j,0,A.p),D.XD,!0),A.aq)},
aMH(){var w,v,u,t,s=this,r=null,q=s.Q?r:s.gc9q(),p=B.m(16)
q=B.E(B.aB(r,B.p(r,D.eWB,A.f,r,r,new B.o(A.c.j(0.08),r,B.I(A.aZ,A.r,1),p,r,r,A.n),r,50,r,r,r,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,!1,A.a4),1)
p=s.Q?r:s.gbNp()
w=B.m(16)
v=B.a([new B.ac(0,A.G,A.bA.j(0.35),A.cv,16)],x.V)
u=x.p
t=B.a([],u)
if(s.Q)t.push(D.f12)
else t.push(D.bOb)
t.push(A.ab)
t.push(D.bEI)
return B.p(r,B.B(B.a([q,A.as,B.E(B.aB(r,B.p(r,B.B(t,A.m,r,A.b8,A.j,0,r,r),A.f,r,r,new B.o(r,r,r,w,v,G.uv,A.n),r,50,r,r,r,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,p,r,r,r,r,r,r,!1,A.a4),1)],u),A.m,r,A.e,A.j,0,r,r),A.f,r,r,D.b2u,r,r,r,r,G.aiN,r,r,r)},
b_3(){var w=null
return new B.D(T.a__,B.B(B.a([B.aJ(w,w,w,w,A.mM,w,w,w,new C.eTc(this),w,w,w,w,w,w),D.fLU,A.b0,D.bWT],x.p),A.m,w,A.e,A.j,0,w,w),w)},
B(d){var w=null
return B.c5(w,A.Be,B.bm(!0,B.cC(new C.eUt(this)),!0,!1,A.af,!0,!0),w,!1,!1,w,w)}}
C.bfR.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m=new B.eb()
m.d5(7)
w=e.a
v=e.b
u=A.k.V(w*v/55)
$.V()
t=B.K()
s=this.b
t.r=A.c.j(0.16*s).gp(0)
r=B.K()
r.r=A.w.j(0.2*s).gp(0)
for(s=d.a,q=0;q<u;++q){p=m.aj()*w
o=m.aj()*v
n=((q&1)===0?t:r).H()
s.drawRect(B.bQ(new B.a5(p,o,p+1.1,o+1.1)),n)
n.delete()}},
av(d){return d.b!==this.b}}
C.rC.prototype={
a4(){return"NgmyQuoteDeco."+this.b}}
C.mf.prototype={}
C.zL.prototype={
ag(){var w=this
return B.G(["at",w.a.a7().ad(),"outline",w.b,"extras",w.c,"request",w.d],x.N,x.z)}}
C.nR.prototype={}
C.w5.prototype={
a4(){return"NgmySlidesAiExtra."+this.b}}
C.a8a.prototype={}
C.arw.prototype={}
C.a0B.prototype={
U(){return new C.aHN(new B.as(A.at,$.ax()),B.jZ(!0,null,!0,!0,null,null,!1),D.dFu,B.a([],x.s),B.ey([D.Io],x.Q))}}
C.aHN.prototype={
t(){var w=this.d
w.T$=$.ax()
w.P$=0
this.f.t()
this.a1()},
a0r(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$a0r=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hV().Ca(90,700,700,A.eJ),$async$a0r)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fj(),$async$a0r)
case 8:p=e
if(r.c!=null)r.m(new C.f_H(r,p,q))
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
return B.i($async$a0r,v)},
a0u(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a0u=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i=20-r.y.length
if(i<=0){w=1
break}t=4
n=i>1?i:null
w=7
return B.b(new B.hV().aHU(78,n,1100,1100),$async$a0u)
case 7:q=e
if(J.cp(q)){w=1
break}p=B.bo(r.y,!0,x.N)
n=J.aV(q)
case 8:if(!n.C()){w=9
break}o=n.gR(n)
if(J.ad(p)>=20){w=9
break}w=10
return B.b(o.fj(),$async$a0u)
case 10:m=e
l=o.b.toLowerCase()
if(A.a.cc(l,".png"))k="image/png"
else k=A.a.cc(l,".webp")?"image/webp":"image/jpeg"
J.cc(p,"data:"+k+";base64,"+A.cI.gcs().aM(m))
w=8
break
case 9:if(r.c!=null)r.m(new C.f_I(r,p))
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
return B.i($async$a0u,v)},
b42(d){var w,v,u=null
if(d!=null&&A.a.q(d,","))try{w=B.fO(A.cF.aM(A.d.gal(d.split(","))),A.A,u,u,A.cf,A.bW,!0,u,!1,u,u)
return w}catch(v){}return D.bs1},
c1v(d,e,f,g){var w=e.length===0&&f.length===0?"rounded":e
return B.ctP(C.fDp(w,this.b42(d),f),g)},
acO(d,e,f,g,h){var w=null,v=new C.f_F(f,e),u=new C.f_G(f,e),t=A.c.j(0.05),s=B.m(12),r=B.m(12),q=B.m(12),p=h==null,o=B.I(p?A.bz:A.b5.j(0.6),A.r,1)
if(p)p=new B.a7(34,30,new B.an(A.a_,w,A.aa,A.f,B.a([B.at(B.X(f?A.Cb:A.O0,A.bU,w,w,w,26),w,w,w),D.emY],x.p),w),w)
else p=this.c1v(g,v.$1(h),u.$1(h),34)
return B.aF(!1,A.a1,!0,s,B.aM(!1,r,!0,B.p(w,B.B(B.a([B.E(B.at(p,w,w,w),1),D.bNT],x.p),A.m,w,A.e,A.j,0,w,w),A.f,w,w,new B.o(w,w,o,q,w,w,A.n),w,44,w,w,A.mE,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.f_E(this,f,h,g,v,u,d),w,w,w,w,w,w,w),A.f,t,0,w,w,w,w,w,A.ah)},
aXs(d,e,f,g,h){var w,v,u,t,s,r,q,p=null,o=null,n=h==null
if(!n&&A.a.q(h,","))try{o=B.bx(B.m(8),B.fO(A.cF.aM(A.d.gal(h.split(","))),A.A,p,p,A.cf,A.bW,!1,30,!1,p,30),A.aq)}catch(w){}v=A.c.j(0.05)
u=B.m(14)
t=B.m(14)
s=B.m(14)
r=B.I(n?A.bz:A.be.j(0.6),A.r,1)
q=o
n=q==null?B.X(d,A.eo,p,p,p,20):q
n=B.a([n,A.ab,B.E(B.d(e,p,1,A.a2,p,p,p,A.JR,p,p,p),1)],x.p)
if(f!=null)n.push(B.aB(p,D.a1W,A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,!1,A.a4))
return B.aF(!1,A.a1,!0,u,B.aM(!1,t,!0,B.p(p,B.B(n,A.m,p,A.e,A.j,0,p,p),A.f,p,p,new B.o(p,p,r,s,p,p,A.n),p,50,p,p,A.l1,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,g,p,p,p,p,p,p,p),A.f,v,0,p,p,p,p,p,A.ah)},
a8W(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$a8W=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(C.fGR(),$async$a8W)
case 7:q=e
if(q==null||r.c==null){w=1
break}r.m(new C.f_n(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
p=B.ab(n)
if(r.c!=null)r.m(new C.f_o(r,p))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a8W,v)},
aeJ(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$aeJ=B.e(function(d,a0){if(d===1){s.push(a0)
w=t}for(;;)switch(w){case 0:f=A.a.i(r.d.a.a)
if(f.length<6&&r.e==null){r.m(new C.f_q(r))
w=1
break}if(r.x==null){m=B.af("\\blogo\\b",!1,!1,!1,!1)
m=m.b.test(f)}else m=!1
if(m){r.m(new C.f_r(r))
w=1
break}m=r.e
l=m==null?null:m.c
if(l==null)l=""
q=l.length===0?f:f+"\n\nSOURCE DOCUMENT ("+m.a+"):\n"+l
r.m(new C.f_s(r))
t=4
m=r.ch
k=r.CW
j=r.x
i=r.y
p=B.a([],x.aD)
h=r.e
if((h==null?null:h.b)!=null){h=h.b
h.toString
J.cc(p,h)}w=7
return B.b(C.fC7(q,r.cx,j,new C.b1x(r.z,r.Q,r.as,r.at),new C.f_t(r),i,m,p,k),$async$aeJ)
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
if(p!=null)B.a3(p,!1).N(o)
t=2
w=6
break
case 4:t=3
e=s.pop()
n=B.ab(e)
if(r.c!=null)r.m(new C.f_u(r,n))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$aeJ,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=x.w,f=B.aH(d,A.eL,g).w
g=B.aH(d,A.bX,g).w
w=B.at(B.p(h,h,A.f,h,h,new B.o(A.aZ,h,h,B.m(99),h,h,A.n),h,4,h,h,h,h,h,40),h,h,h)
v=x.V
u=B.at(B.aB(h,B.p(h,D.bR8,A.f,h,h,new B.o(h,h,B.I(A.c.j(0.35),A.r,2),h,B.a([new B.ac(2,A.G,A.be.j(0.5),A.J,24)],v),D.c00,A.a5),h,84,h,h,h,h,h,84),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.f_V(i),h,h,h,h,h,h,!1,A.a4),h,h,h)
t=x.p
s=B.a([],t)
if(i.e!=null)s.push(B.aJ(h,h,h,h,D.a1W,h,h,h,i.ax?h:new C.f_W(i),h,h,h,h,"Remove document",h))
r=i.e
r=r==null?"Attach a PDF, Word or text file":r.a
q=i.ax?h:i.gbCp()
v=B.a([new B.ac(0,A.G,A.b5.j(0.45),A.J,10)],v)
s.push(B.hc(B.aF(!1,A.a1,!0,h,B.aM(!1,h,!0,B.p(h,B.X(i.e==null?A.w7:A.hI,A.c,h,h,h,20),A.f,h,h,new B.o(h,h,h,h,v,E.wn,A.a5),h,40,h,h,h,h,h,40),A.cL,!0,h,h,h,h,h,h,h,h,h,h,h,q,h,h,h,h,h,h,h),A.f,A.K,0,h,h,A.cL,h,h,A.ah),h,r,h,h))
v=B.B(s,A.m,h,A.e,A.P,0,h,h)
s=A.c.j(0.05)
v=B.aN(h,A.X,!1,h,!0,A.t,h,B.aO(),i.d,h,h,h,h,h,2,B.bs(h,h,h,h,h,h,h,h,!0,new B.b5(4,B.m(16),new B.ay(A.c.j(0.1),1,A.r,-1)),h,h,h,h,h,s,!0,h,h,h,h,new B.b5(4,B.m(16),D.b_V),h,h,h,h,h,h,h,h,A1.Ju,"Type your idea here\u2026",h,h,h,h,h,h,h,h,h,!0,!0,!1,h,h,h,h,h,h,h,h,new B.D(A.it,v,h),h,h,h,h,h),A.y,!0,h,!0,h,!1,i.f,A.ak,h,h,h,h,h,h,h,h,h,6,3,h,!1,"\u2022",h,h,h,h,h,!1,h,h,!1,h,!0,h,A.a9,h,h,h,h,h,h,h,h,h,h,h,D.aRS,!0,A.a6,h,A.ao,h,h,h,h)
s=i.x
r=s==null
q=r?"Add your logo":"Logo added"
r=r?h:new C.f_X(i)
s=i.aXs(A.lE,q,r,i.gcju(),s)
r=i.z
r=B.E(i.acO(new C.f_Z(i),i.Q,!1,i.x,r),1)
q=i.Q
q=B.E(B.x(B.a([s,A.am,B.B(B.a([r,A.bo,B.E(i.acO(new C.f0_(i),i.z,!0,i.x,q),1)],t),A.m,h,A.e,A.j,0,h,h)],t),A.m,h,A.e,A.j,0,A.p),1)
s=i.y
r=s.length
p=r===0
if(p)r="Add your pictures"
else{o=r===1?"":"s"
o=""+r+" picture"+o
r=o}s=p?h:A.d.gI(s)
p=i.y.length===0?h:new C.f00(i)
s=i.aXs(A.u8,r,p,i.gcjC(),s)
p=i.as
r=i.at
o=i.y
o=o.length===0?h:A.d.gI(o)
p=B.E(i.acO(new C.f01(i),r,!1,o,p),1)
o=i.at
r=i.as
n=i.y
n=n.length===0?h:A.d.gI(n)
o=B.a([w,A.aA,D.fAL,A.av,D.fDC,A.bv,u,A.N,D.fC1,A.aA,v,A.bv,B.B(B.a([q,A.as,B.E(B.x(B.a([s,A.am,B.B(B.a([p,A.bo,B.E(i.acO(new C.f02(i),r,!0,n,o),1)],t),A.m,h,A.e,A.j,0,h,h)],t),A.m,h,A.e,A.j,0,A.p),1)],t),A.E,h,A.e,A.j,0,h,h),A.am,D.fFr],t)
w=i.w.a
if(w.length!==0){v=B.m(999)
u=B.I(D.bjT,A.r,1)
w=C.ah6(w)
w=w==null?h:w.b
A.d.v(o,B.a([A.R,new B.bL(A.a3,h,h,B.p(h,B.B(B.a([D.bSe,A.bo,B.d("Ending: "+(w==null?"":w),h,h,h,h,h,h,D.fjA,h,h,h),B.aM(!1,h,!0,D.ehu,h,!0,h,h,h,h,h,h,h,h,h,h,h,new C.f03(i),h,h,h,h,h,h,h)],t),A.m,h,A.e,A.P,0,h,h),A.f,h,h,new B.o(D.bch,h,u,v,h,h,A.n),h,h,h,h,D.bvE,h,h,h),h)],t))}o.push(A.bv)
o.push(D.frs)
o.push(A.N)
w=B.a([],t)
for(m=0;m<6;++m){l=D.d6P[m]
v=i.ch===l?A.b5:A.c.j(0.06)
u=i.ch===l
k=new B.ay(u?A.aB:A.bz,1,A.r,-1)
u=u?A.u:A.O
w.push(new B.bA(1,A.bd,new B.D(A.jy,B.aB(h,B.d9(A.A,new B.y(""+l,h,new B.F(!0,A.c,h,h,h,h,h,u,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h),h,h,h,h,h,h,h,h,h),h,h,A.b7,new B.o(v,h,new B.bI(k,k,k,k),h,h,h,A.a5),A.eM,h,42,h,h,h,h,h),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.f04(i,l),h,h,h,h,h,h,!1,A.a4),h),h))}o.push(B.B(w,A.m,h,A.e,A.j,0,h,h))
o.push(A.bv)
o.push(D.fK8)
o.push(A.N)
o.push(B.cC(new C.f05(i)))
o.push(A.bv)
o.push(D.fyP)
o.push(A.N)
w=B.a([i.b6V("auto","Let AI choose",A.e3,A.QI)],t)
for(v=x.O,m=0;m<11;++m){j=D.wt[m]
u=j.d
w.push(i.b6V(j.a,j.b,j.c,B.a([B.b1(A.d.gI(u).a),B.b1(A.d.gI(u).b)],v)))}o.push(B.bW(A.bD,w,A.bq,8,8))
o.push(A.aL)
w=A.c.j(0.04)
v=B.m(16)
u=B.I(i.r?A.be.j(0.5):A.bz,A.r,1)
o.push(B.p(h,B.iI(h,A.be,h,h,h,new C.f_Y(i),D.bNl,D.fJn,h,D.ftK,i.r),A.f,h,h,new B.o(w,h,u,v,h,h,A.n),h,h,h,h,h,h,h,h))
w=i.cy
if(w!=null)A.d.v(o,B.a([A.aA,B.d(w,h,h,h,h,h,h,D.aR3,h,h,h)],t))
o.push(A.bv)
w=i.ax?h:i.gc9u()
v=B.fp(h,h,A.b5,A.b5.j(0.5),h,h,h,h,h,A.c,h,h,h,h,new B.b7(B.m(18),A.a0),h,h,h,h,h)
u=i.ax
t=u?D.f0T:A.GX
o.push(new B.a7(h,54,B.lE(t,B.d(u?i.ay:"Create my presentation",h,h,h,h,h,h,A.oy,h,h,h),w,v),h))
return new B.D(new B.Q(0,0,0,f.f.d),B.p(h,B.bm(!0,B.cd(B.x(o,A.aj,h,A.e,A.j,0,A.p),A.t,h,A.y,h,A.vW,h,h,A.ag),!0,!1,A.af,!0,!1),A.f,h,new B.aY(0,680,0,g.a.b*0.92),D.ac6,h,h,h,h,h,h,h,h),h)},
bP2(d){var w,v,u,t,s,r,q=null,p=this.cx.q(0,d),o=new C.f_v(this,p,d)
if(d===D.Dd)return new C.aEl(p,o,q)
w=B.m(16)
v=p?E.wn:q
u=p?q:A.c.j(0.05)
t=B.I(p?A.aB:A.bz,A.r,1)
s=B.X(p?A.eb:C.hJU(d),A.c,q,q,q,20)
r=C.hJV(d)
return B.aB(q,B.d9(q,B.x(B.a([s,A.av,B.eQ(A.A,B.d(r,q,q,q,q,q,q,B.l(q,q,A.c,q,q,q,q,q,q,q,q,12,q,q,p?A.u:A.a7,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),A.f,A.e0)],x.p),A.m,q,A.b8,A.j,0,A.p),q,q,A.b7,new B.o(u,q,t,w,q,v,A.n),A.ho,q,64,q,A.hG,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,o,q,q,q,q,q,q,!1,A.a4)},
b6V(d,e,f,g){var w,v=null,u=this.CW===d,t=B.m(99),s=u?A.c.j(0.12):A.c.j(0.04),r=u?A.ae:A.bz
r=B.I(r,A.r,u?1.6:1)
w=B.p(v,B.X(f,A.c,v,v,v,14),A.f,v,v,new B.o(v,v,v,v,v,new B.a9(A.a3,A.a8,A.x,g,v,v),A.a5),v,26,v,v,v,v,v,26)
return B.aB(v,B.d9(v,B.B(B.a([w,M.Jl,B.d(e,v,v,v,v,v,v,B.l(v,v,A.c,v,v,v,v,v,v,v,v,12.5,v,v,u?A.u:A.a7,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.P,0,v,v),v,v,A.b7,new B.o(s,v,r,t,v,v,A.n),A.eM,v,v,v,M.ak5,v,v,v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.f_K(this,d),v,v,v,v,v,v,!1,A.a4)}}
C.a0A.prototype={
U(){return new C.aHM(new B.as(A.at,$.ax()))}}
C.aHM.prototype={
t(){var w=this.d
w.T$=$.ax()
w.P$=0
this.a1()},
aeK(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$aeK=B.e(function(a2,a3){if(a2===1){s.push(a3)
w=t}for(;;)switch(w){case 0:a0=A.a.i(r.d.a.a)
if(J.ad(a0)<3){r.m(new C.f_g(r))
w=1
break}B.f0()
r.m(new C.f_h(r))
t=4
q=C.iau(a0)
if(q!=null){k=r.a
j=k.c
k=k.d
i=B.af("\\b(all|every|whole|entire)\\b.{0,30}\\b(slides?|presentation|deck|pages?)\\b|\\b(slides?|presentation|deck)\\b.{0,20}\\b(all|every|whole|entire)\\b",!0,!1,!1,!1)
h=a0.toLowerCase()
p=C.iae(j,k-1,q,i.b.test(h))
if(!p){r.m(new C.f_i(r,q))
w=1
break}k=r.c
if(k!=null)B.a3(k,!1).N(r.a.c)
w=1
break}g=a0.toLowerCase()
k=B.af("\\b(undo|un-do|bring (it |them |the .{0,30}?)?back|brings? back|put (it |them |the .{0,30}?)?back|restore|revert|go back|change (it|that|them) back|back the way|what it was|the way it was|previous version|before (you|the ai) (changed|change))\\b",!0,!1,!1,!1)
if(k.b.test(g)){k=r.a.c
C.h1v()
f=$.CT.h(0,k.a)
o=f==null||J.cp(f)?null:J.fr(f)
if(o==null){r.m(new C.f_j(r))
w=1
break}n=C.iac(o,r.a.c)
C.ia8(r.a.c.a)
$.h0M=!0
k=r.c
if(k!=null)B.a3(k,!1).N(n)
w=1
break}k=r.a
j=k.c
i=j.CW
if(i==null)i=""
k=k.d
j=C.h4l(j)
h=C.h4m(r.a.c)
e=C.h4n(r.a.c)
w=7
return B.b(C.bCh(k,r.a.c.a,j,h,new C.f_k(r),i,e,a0),$async$aeK)
case 7:m=a3
k=r.c
if(k!=null)B.a3(k,!1).N(m)
t=2
w=6
break
case 4:t=3
a1=s.pop()
l=B.ab(a1)
if(r.c!=null)r.m(new C.f_l(r,l))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$aeK,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=x.w,h=B.aH(d,A.eL,i).w
i=B.aH(d,A.bX,i).w
w=B.at(B.p(j,j,A.f,j,j,new B.o(A.aZ,j,j,B.m(99),j,j,A.n),j,4,j,j,j,j,j,40),j,j,j)
v=x.p
u=B.B(B.a([B.p(j,D.ao_,A.f,j,j,D.b29,j,34,j,j,j,j,j,34),A.as,D.bDc],v),A.m,j,A.e,A.j,0,j,j)
t=B.d("You're on slide "+k.a.d+". Ask for new slides, changes to any slide, a different style or another language.",j,j,j,j,j,j,Ar.a8K,j,j,j)
s=A.c.j(0.05)
s=B.aN(j,A.X,!0,j,!0,A.t,j,B.aO(),k.d,j,j,j,j,j,2,B.bs(j,j,j,j,j,j,j,j,!0,new B.b5(4,B.m(16),new B.ay(A.c.j(0.1),1,A.r,-1)),j,j,j,j,j,s,!0,j,j,j,j,new B.b5(4,B.m(16),As.abA),j,j,j,j,j,j,j,j,A1.Ju,"e.g. Add a slide after this one about how to sign up, and make the title slide more exciting.",j,j,j,j,j,j,j,j,j,!0,!0,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j),A.y,!0,j,!0,j,!1,j,A.ak,j,j,j,j,j,j,j,j,j,5,2,j,!1,"\u2022",j,j,j,j,j,!1,j,j,!1,j,!0,j,A.a9,j,j,j,j,j,j,j,j,j,j,j,D.aRS,!0,A.a6,j,A.ao,j,j,j,j)
r=B.a([],v)
for(q=0;q<6;++q){p=D.d31[q]
o=A.c.j(0.06)
n=k.e?j:new C.f_m(k,p)
r.push(B.mP(j,o,new B.y(p,j,Ax.U9,j,j,j,j,j,j,j,j,j),j,n,j,j,P.vq,j))}w=B.a([w,A.aA,u,A.am,t,A.aA,s,A.R,B.bW(A.bD,r,A.bq,8,8)],v)
u=k.r
if(u!=null)A.d.v(w,B.a([A.ad,B.d(u,j,j,j,j,j,j,D.aR3,j,j,j)],v))
w.push(A.aL)
u=k.e
t=u?j:k.gc9v()
s=B.m(18)
r=B.m(18)
u=u?B.a([A.be.j(0.5),A.eh.j(0.5)],x.O):D.cBE
o=B.a([new B.ac(0,A.G,A.be.j(0.35),A.cv,16)],x.V)
n=A.c.j(0.22)
m=k.e
l=m?D.ehq:D.bRO
n=B.p(j,l,A.f,j,j,new B.o(n,j,j,j,j,j,A.a5),j,30,j,j,j,j,j,30)
w.push(B.aF(!1,A.a1,!0,j,B.aM(!1,s,!0,B.eF(B.B(B.a([n,A.as,B.d(m?k.f:"Make the change",j,j,j,j,j,j,A.hx,j,j,j)],v),A.m,j,A.b8,A.j,0,j,j),j,new B.o(j,j,j,r,o,new B.a9(A.a3,A.a8,A.x,u,j,j),A.n),54,j,j),j,!0,j,j,j,j,j,j,j,j,j,j,j,t,j,j,j,j,j,j,j),A.f,A.K,0,j,j,j,j,j,A.ah))
return new B.D(new B.Q(0,0,0,h.f.d),B.p(j,B.bm(!0,B.cd(B.x(w,A.aj,j,A.e,A.j,0,A.p),A.t,j,A.y,j,A.vW,j,j,A.ag),!0,!1,A.af,!0,!1),A.f,j,new B.aY(0,680,0,i.a.b*0.85),D.ac6,j,j,j,j,j,j,j,j),j)}}
C.b1x.prototype={}
C.aEl.prototype={
U(){return new C.bkq(null,null)}}
C.bkq.prototype={
gaxO(){var w,v=this,u=v.d
if(u===$){w=B.bl(null,A.q2,null,1,null,v)
w.cM(0)
v.d!==$&&B.bF()
v.d=w
u=w}return u},
t(){this.gaxO().t()
this.bwj()},
B(d){var w=null,v=this.a.d
return B.aB(w,B.c9(this.gaxO(),new C.ehD(this),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,!1,A.a4)}}
C.bi3.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m
for(w=this.b*2,v=e.a,u=e.b,t=d.a,s=0;s<7;++s){r=0.5+0.5*Math.sin(w+s*1.7)
q=D.d93[s]
p=q.a*v
q=q.b*u
$.V()
o=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
o.r=D.xP.j(0.25+r*0.6).gp(0)
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
av(d){return d.b!==this.b}}
C.as3.prototype={
a4(){return"NgmyTextCommand."+this.b}}
C.ZY.prototype={
U(){return new C.aBR()}}
C.aBR.prototype={
gaiN(){var w,v="colorful",u=this.d
if(u===$){w=this.a.c.CW
w=C.ahj(w==null?"":w,v)
u=w==null?null:w.b
u=this.d=u==null?v:u}return u},
gAh(){var w=this.e
return w===$?this.e=C.h4l(this.a.c).q(0,D.Dd):w},
a8J(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$a8J=B.e(function(a0,a1){if(a0===1){t.push(a1)
w=u}for(;;)switch(w){case 0:s.m(new C.dmh(s))
u=3
r=A.d.h_(D.wt,new C.dmi(s))
q=B.de(C.h4l(s.a.c),x.Q)
l=q
J.hy(l,D.Dd)
p=l
if(s.gAh())J.cc(p,D.Dd)
q=s.a.c.CW
if(q==null)q=""
k=r.a
j=s.gAh()?" with Luxury FX":""
i=s.a
h=i.d
i=C.h4m(i.c)
g=C.h4n(s.a.c)
w=6
return B.b(C.bCh(h,s.a.c.a,p,i,null,q,g,'Change the look: use the style "'+k+'"'+j+". Keep every word, slide, bullet, picture and the logo exactly as they are."),$async$a8J)
case 6:o=a1
j=o.CW
q=j==null?"":j
q=C.ahj(q,s.gaiN())
f=q==null?null:q.b
n=f==null?s.gaiN():f
if(!J.A(n,r.a)&&!s.gAh())throw B.W("The AI did not change the look. Try again.")
q=s.c
if(q!=null)B.a3(q,!1).N(o)
u=1
w=5
break
case 3:u=2
d=t.pop()
m=B.ab(d)
if(s.c!=null)s.m(new C.dmj(s,m))
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$a8J,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=B.P(d).ax.a===A.I,l=m?A.c:A.M,k=m?A.aQ:A.al,j=m?A.M:A.c,i=B.m(28),h=B.I(m?A.bz:A.aM,A.r,1),g=x.p,f=B.E(B.x(B.a([B.d("Look and feel",n,n,n,n,n,n,B.l(n,n,l,n,n,n,n,n,n,n,n,20,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),A.bC,B.d("Your words, pictures and logo stay the same.",n,n,n,n,n,n,B.l(n,n,k,n,n,n,n,n,n,n,n,12.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],g),A.E,n,A.e,A.j,0,A.p),1),e=o.f?n:new C.dmm(d)
e=B.B(B.a([f,B.aJ(n,n,n,n,B.X(A.cx,k,n,n,n,n),n,n,n,e,n,n,n,n,n,n)],g),A.m,n,A.e,A.j,0,n,n)
f=B.a([],g)
for(w=0;w<11;++w){v=D.wt[w]
u=o.gaiN()
t=o.f?n:new C.dmn(o,v)
f.push(new C.bsS(v,u===v.a,t,n))}f=B.kK(1.25,f,3,10,10,n,A.dQ,!0)
u=B.m(18)
t=o.gAh()?D.c2N:n
if(o.gAh())s=n
else s=m?A.bn:A.bN
r=B.X(A.e3,o.gAh()?A.c:k,n,n,n,n)
q=B.d("Luxury FX",n,n,n,n,n,n,B.l(n,n,o.gAh()?A.c:l,n,n,n,n,n,n,n,n,n,n,n,A.H,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
q=B.E(B.x(B.a([q,B.d("Moving light and ornaments, a new royal look each time",n,n,n,n,n,n,B.l(n,n,o.gAh()?A.ae:k,n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],g),A.E,n,A.e,A.j,0,A.p),1)
p=o.gAh()
f=B.a([f,A.aA,B.p(n,B.B(B.a([r,A.as,q,B.XX(n,A.c,n,A.bM,!1,A.y,n,n,n,n,n,n,o.f?n:new C.dmo(o),n,n,n,n,n,n,n,n,p)],g),A.m,n,A.e,A.j,0,n,n),A.f,n,n,new B.o(s,n,n,u,n,t,A.n),n,n,n,n,K.aiQ,n,n,n)],g)
u=o.r
if(u!=null)A.d.v(f,B.a([A.R,B.d(u,n,n,n,n,n,n,D.fjU,n,n,n)],g))
f=B.cd(B.x(f,A.E,n,A.e,A.j,0,A.p),A.t,n,A.y,n,A.FS,n,n,A.ag)
u=o.f?n:o.gbBo()
t=B.bp(A.K,n,n,n,n,n,A.af,n,new B.b7(B.m(16),A.a0),n,n,n)
s=B.m(16)
return B.bm(!0,B.p(n,B.x(B.a([new B.D(D.byK,e,n),new B.ds(1,A.cn,f,n),new B.D(A.FR,new B.a7(1/0,50,B.bH(B.eF(B.at(o.f?A.t_:D.fBe,n,n,n),n,new B.o(n,n,n,s,n,D.c1m,A.n),n,n,n),u,t),n),n)],g),A.m,n,A.e,A.P,0,A.p),A.f,n,n,new B.o(j,n,h,i,n,n,A.n),n,n,n,A.tY,n,n,n,n),!0,!1,A.af,!0,!0)}}
C.bsS.prototype={
B(d){var w=null,v=this.c,u=A.d.gI(v.d),t=B.m(16),s=u.a,r=B.a([B.b1(s),B.b1(u.b)],x.O),q=this.d,p=B.I(q?A.c:A.K,A.r,2.5)
s=q?B.a([new B.ac(0,A.G,B.b1(s).j(0.5),A.J,12)],x.V):w
v=B.a([new B.bL(A.ln,w,w,B.X(v.c,A.ae,w,w,w,18),w),new B.bL(A.lR,w,w,B.d(v.b,w,w,w,w,w,w,D.fjR,w,w,w),w)],x.p)
if(q)v.push(D.aYo)
return B.aB(w,B.d9(w,new B.an(A.a_,w,A.aa,A.t,v,w),w,w,A.b7,new B.o(w,w,p,t,s,new B.a9(A.ay,A.aD,A.x,r,w,w),A.n),A.eM,w,w,w,A.cm,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,this.e,w,w,w,w,w,w,!1,A.a4)}}
C.ehA.prototype={
aFt(d,e,f){return e+"@"+A.a.aZ(A.o.fW(f==null?this.a.c:f,16),8,"0").toUpperCase()},
wF(d,e){return this.aFt(0,e,null)}}
C.aMf.prototype={
t(){var w=this,v=w.aa$
if(v!=null)v.a6(0,w.gbE())
w.aa$=null
w.a1()},
aW(){this.b6()
this.b5()
this.bF()}}
C.b1t.prototype={
B(d){var w,v,u=null,t=C.h3a(this.c)
if(t==null)w=D.bqx
else{w=B.aH(d,u,x.w).w.cJZ(D.bva,D.f03)
v=this.d
w=B.rp(B.e2(B.aom(!1,t,!1,v,!1,390),!v,u),w)}return B.eQ(A.A,new B.a7(416,870,new C.bm_(w,u),u),A.f,A.dy)}}
C.bm_.prototype={
B(d){var w,v,u,t=null,s=B.a([],x.p)
for(w=0;w<3;++w){v=D.dle[w]
u=new B.aQ(3,3)
s.push(new B.cN(v.a,v.b,t,t,t,t,B.p(t,t,A.f,t,t,new B.o(t,t,t,new B.bk(u,u,u,u),t,D.apT,A.n),t,v.c,t,t,t,t,t,5),t))}for(w=0;w<2;++w){v=D.dmv[w]
u=new B.aQ(3,3)
s.push(new B.cN(t,v.a,-3,t,t,t,B.p(t,t,A.f,t,t,new B.o(t,t,t,new B.bk(u,u,u,u),t,D.apT,A.n),t,v.b,t,t,t,t,t,5),t))}s.push(B.bU(0,B.c1(t,new B.o(t,t,t,B.m(64),D.cTC,D.c_I,A.n),A.bf),0,0,0))
s.push(B.bU(3,B.c1(t,new B.o(A.w,t,t,B.m(61),t,t,A.n),A.bf),3,3,3))
s.push(B.bU(13,B.bx(B.m(51),B.em(this.c,A.w,!0),A.aq),13,13,13))
u=B.m(20)
s.push(B.ao(t,B.at(B.p(D.aYz,B.p(t,t,A.f,t,t,D.b2s,t,11,t,t,t,t,t,11),A.f,t,t,new B.o(A.w,t,t,u,t,t,A.n),t,36,t,t,t,t,t,122),t,t,t),t,t,0,0,25,t))
s.push(B.bU(13,B.e2(B.bx(B.m(51),D.bs7,A.aq),!0,t),13,13,13))
s.push(B.ao(22,B.e2(B.at(B.p(t,t,A.f,t,t,new B.o(A.ae,t,t,B.m(3),t,t,A.n),t,5,t,t,t,t,t,134),t,t,t),!0,t),t,t,0,0,t,t))
return new B.an(A.a_,t,A.aa,A.f,s,t)}}
C.ll.prototype={
pI(){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=4280640491,j=4280172719,i=4294967295,h="Thank You",g=C.cE(),f=C.cE(),e=m.r
f=C.er(A.L,!1,e.l(),A.aF,"",k,42,A.bp,A.u,"",0.22,f,l,"","",0,!1,"",0,D.bg,j,2,"Your Presentation Title",0,0,"",D.mS,D.cQ,0.84,0.08,0.26)
w=C.cE()
v=m.w
w=C.er(A.L,!1,v.l(),A.aF,"",k,20,A.bp,A.a7,"",0.12,w,l,"","",0,!1,"",0,D.bg,j,2,"Class \xb7 Subject \xb7 Date",0,0,"",D.dh,D.cQ,0.76,0.12,0.56)
u=C.cE()
t=m.d
s=x.u
t=C.rD(i,l,0,0,B.a([f,w,C.er(A.bi,!1,4279310375,A.aF,"",t.j(0.8).l(),24,A.bp,A.a7,"",0.006,u,l,"","",0,!1,"",0,D.fy,t.l(),3,"",0,0,"",D.cl,D.f8,0.3,0.35,0.72)],s),C.cE(),D.mR,"","","Welcome",D.dh)
u=C.cE()
u=C.er(A.bi,!1,e.l(),A.aF,"",k,34,A.bp,A.u,"",0.14,u,l,"","",0,!1,"",0,D.bg,j,2,"Agenda",0,0,"",D.cl,D.cQ,0.84,0.08,0.08)
w=C.cE()
w=C.rD(i,l,0,0,B.a([u,C.er(A.bi,!0,v.l(),A.aF,"",k,22,A.bp,A.a7,"",0.6,w,l,"","",0,!1,"",0,D.bg,j,2,"1. Introduction\n2. Core concepts\n3. Case study\n4. Discussion\n5. Summary & Q&A",0,0,"",D.uL,D.cQ,0.8,0.1,0.26)],s),C.cE(),D.mR,"","","Agenda",D.dh)
u=C.cE()
u=C.er(A.bi,!1,e.l(),A.aF,"",k,32,A.bp,A.u,"",0.14,u,l,"","",0,!1,"",0,D.bg,j,2,"Main Idea",0,0,"",D.cl,D.cQ,0.84,0.08,0.08)
f=C.cE()
f=C.rD(i,l,0,0,B.a([u,C.er(A.bi,!0,v.l(),A.aF,"",k,21,A.bp,A.a7,"",0.62,f,l,"","",0,!1,"",0,D.bg,j,2,"\u2022 Supporting detail\n\u2022 Evidence or example\n\u2022 Why it matters",0,0,"",D.cl,D.cQ,0.8,0.1,0.26)],s),C.cE(),D.mR,"","","Key Point 1",D.dh)
u=C.cE()
u=C.er(A.bi,!1,e.l(),A.aF,"",k,30,A.bp,A.u,"",0.12,u,l,"","",0,!1,"",0,D.bg,j,2,"Compare & Contrast",0,0,"",D.cl,D.cQ,0.84,0.08,0.08)
r=C.cE()
r=C.er(A.bi,!0,v.l(),A.aF,"",k,18,A.bp,A.a7,"",0.62,r,l,"","",0,!1,"",0,D.bg,j,2,"Option A\n\n\u2022 Strength\n\u2022 Example",0,0,"",D.cl,D.cQ,0.4,0.08,0.24)
q=C.cE()
q=C.rD(i,l,0,0,B.a([u,r,C.er(A.bi,!0,v.l(),A.aF,"",k,18,A.bp,A.a7,"",0.62,q,l,"","",0,!1,"",0,D.bg,j,2,"Option B\n\n\u2022 Strength\n\u2022 Example",0,0,"",D.cl,D.cQ,0.4,0.52,0.24)],s),C.cE(),D.mR,"","","Key Point 2",D.dh)
r=C.cE()
r=C.er(A.L,!1,e.l(),A.aF,"",k,48,A.bp,A.u,"",0.2,r,l,"","",0,!1,"",0,D.bg,j,2,h,0,0,"",D.dh,D.cQ,0.8,0.1,0.32)
e=C.cE()
p=C.BW(l,l,l,l,D.D9,5,!1,l,l,l,l,l,g,l,!1,l,m.b,l,l,B.a([t,w,f,q,C.rD(i,l,0,0,B.a([r,C.er(A.L,!1,v.l(),A.aF,"",k,22,A.bp,A.a7,"",0.1,e,l,"","",0,!1,"",0,D.bg,j,2,"Questions?",0,0,"",D.cl,D.cQ,0.7,0.15,0.58)],s),C.cE(),D.mR,"","",h,D.dh)],x.g),"class_"+m.a,l,!1,l)
for(g=p.r,f=g.length,e=m.e,w=m.f,o=0;o<g.length;g.length===f||(0,B.M)(g),++o){n=g[o]
n.e=e.l()
n.f=w.l()}return p}}
C.ER.prototype={
by(d){return this.e.$1(d)}}
C.eu.prototype={}
C.j2.prototype={}
C.EI.prototype={
gaLf(){var w=this.c
if(!(A.a.i(w).length!==0)){w=C.ah6(this.a)
w=w==null?null:w.c
if(w==null)w=""}return w},
a3S(d,e,f,g){var w=this,v=e==null?w.a:e,u=g==null?w.b:g,t=f==null?w.c:f
return new C.EI(v,u,t,d==null?w.d:d)},
FK(d){return this.a3S(null,d,null,null)},
aEc(d){return this.a3S(null,null,null,d)},
cJX(d,e){return this.a3S(d,e,null,null)},
bc6(d){return this.a3S(d,null,null,null)},
bcd(d){return this.a3S(null,null,d,null)}}
C.NF.prototype={
U(){return new C.bjP(new B.eJ(0,$.ax()),null,null)}}
C.bjP.prototype={
a_(){var w,v=this
v.a2()
w=v.rU(new C.dWX(v))
v.e!==$&&B.aP()
v.e=w
if(v.a.e)w.hj(0)
else v.d.sp(0,3.2)},
t(){var w=this.e
w===$&&B.c()
w.t()
w=this.d
w.T$=$.ax()
w.P$=0
this.bvP()},
B(d){var w=C.ah6(this.a.c.a)
if(w==null)w=A.d.gI(D.Hh)
return B.cC(new C.dWW(this,w,C.hjt(this.a.c.d)))}}
C.brq.prototype={
B(d){return B.nW(A.VX,this.e,new C.eZu(this,A.k.F(this.d*0.35,1.6)-0.3))}}
C.beX.prototype={
a5(d,e){var w=this,v=w.c.a
switch(w.b){case"fireworks":w.aT6(d,e,v)
break
case"confetti":w.bHW(d,e,v)
break
case"crown":w.bJy(d,e,v)
break
case"aurora":w.bCt(d,e,v)
break
case"champagne":w.bFO(d,e,v)
break
case"diamonds":w.bLJ(d,e,v)
break
case"starburst":w.cwV(d,e,v)
break
case"balloons":w.bCH(d,e,v)
break
case"galaxy":w.bQS(d,e,v)
break
case"redcarpet":w.cnO(d,e,v)
break
case"coins":w.bHk(d,e,v)
break
case"lanterns":w.c04(d,e,v)
break
case"hearts":w.bYH(d,e,v)
break
case"petals":w.ciU(d,e,v)
break
case"butterflies":w.bEN(d,e,v)
break
case"neon":w.c42(d,e,v)
break
case"disco":w.bLU(d,e,v)
break
case"sunrise":w.cyy(d,e,v)
break
case"pearls":w.chY(d,e,v)
break
case"snow":w.cwC(d,e,v)
break
case"laurel":w.c0a(d,e,v)
break
case"ribbons":w.cqj(d,e,v)
break
case"kente":w.c_T(d,e,v)
break
case"trophy":w.cC9(d,e,v)
break
case"shooting":w.cum(d,e,v)
break
case"bokeh":w.bD1(d,e,v)
break
case"orbits":w.cfA(d,e,v)
break
case"flowers":w.bQ7(d,e,v)
break
case"music":w.c3L(d,e,v)
break
case"mandala":w.c2b(d,e,v)
break
case"sparklers":w.cwJ(d,e,v)
break
case"city":w.bGB(d,e,v)
break}},
rN(d,e,f,g,h){var w,v,u,t,s
if(h<=0.01)return
w=$.V()
v=B.K()
v.r=g.j(A.k.E(h,0,1)).gp(0)
v.a=A.oH
u=new B.aI(w.r,A.ai,null,null,B.a([],x.v))
w=e.a
t=e.b
s=t-f
u.D(new B.b0(w,s))
u.D(new B.c8(w,t,w+f,t))
u.D(new B.c8(w,t,w,t+f))
u.D(new B.c8(w,t,w-f,t))
u.D(new B.c8(w,t,w,s))
u.D(new B.bv())
d.aJ(u,v)
d.ae(e,f*0.18,v)},
lN(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o=e.a,n=e.b,m=Math.min(o,n)
for(w=Math.max(4,A.k.V(g*this.d)),v=i+3,u=i+4,t=i+1,s=i+2,r=i+5,q=0;q<w;++q){p=(Math.sin(f*(1.2+C.cZ(q,v)*2.5)+C.cZ(q,u)*6.28)+1)/2
this.rN(d,new B.t(C.cZ(q,t)*o,C.cZ(q,s)*n),m*(0.006+0.014*C.cZ(q,r))*(0.5+p),h,p*p)}},
aT6(c3,c4,c5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0=c4.a,c1=c4.b,c2=Math.min(c0,c1)
this.lN(c3,c4,c5,40,A.c,10)
w=x.O
v=[B.a([A.bM,A.aE],w),B.a([A.i7,A.bA],w),B.a([A.eC,A.aR],w),B.a([A.c,A.az],w)]
for(u=c2*0.005,t=c3.a,s=c2*0.012,r=c5*30,q=46*this.d,p=c2*0.08,o=c2*0.04,n=c2*0.006,m=c2*0.008,l=0;l<7;++l){k=c5+l*2.8/7
j=A.k.bm(k/2.8)
i=A.k.F(k,2.8)/2.8
h=l*97+j*13
g=c0*(0.15+0.7*C.cZ(h,1))
f=g+c0*(C.cZ(h,2)-0.5)*0.15
e=c1*(0.12+0.35*C.cZ(h,3))
d=v[Math.abs(A.o.F(h,4))]
if(i<0.22){a0=B.kv(new B.t(g,c1),new B.t(f,e),A.cu.aw(0,i/0.22))
a0.toString
$.V()
a1=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
a1.sar(new B.a9(A.a3,A.a8,A.x,B.a([d[0].j(0),d[0]],w),null,null).aA(0,B.rG(new B.t(g,c1),a0)))
a1.c=n
a1.d=A.bG
a2=B.kv(new B.t(g,c1),a0,0.75)
a2.toString
a3=a1.H()
a4=a0.a
a0=a0.b
t.drawLine.apply(t,[a2.a,a2.b,a4,a0,a3])
a3.delete()
a2=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
a2.r=A.c.gp(0)
a3=a2.H()
t.drawCircle(a4,a0,m,a3)
a3.delete()}else{a5=(i-0.22)/0.78
a6=A.cu.aw(0,a5)
a0=1-a5
a7=a0*a0
a0=Math.max(4,A.k.V(q))
a2=C.cZ(h,4)
if(a5<0.15){a4=1-a5/0.15
$.V()
a8=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
a8.r=d[0].j(0.5*a4).gp(0)
a8.z=new B.hC(A.G,o)
a3=a8.H()
t.drawCircle(f,e,p*a4,a3)
a3.delete()}for(a4=a5>0.45,a8=a7*0.8,a2=c2*(0.16+0.1*a2)*a6,a9=a5*a5*c2*0.12,b0=a9*0.8,b1=0;b1<a0;++b1){b2=b1/a0*3.141592653589793*2+C.cZ(h,b1+10)*0.2
b3=a2*(0.75+0.25*C.cZ(h,b1+60))
b4=f+Math.cos(b2)*b3
b5=e+Math.sin(b2)*b3+a9
b6=Math.cos(b2)
b7=Math.sin(b2)
b8=(b1&1)===0?d[0]:d[1]
$.V()
b9=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
b9.r=b8.j(a8).gp(0)
b9.c=u
b9.d=A.bG
b9.a=A.oH
a3=b9.H()
t.drawLine.apply(t,[f+b6*b3*0.82,e+b7*b3*0.82+b0,b4,b5,a3])
a3.delete()
if(a4&&C.cZ(h,b1+120)>0.5)this.rN(c3,new B.t(b4,b5),s,A.c,a7*(0.5+0.5*Math.sin(r+b1)))}}}},
bHW(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=a2.a,i=a2.b,h=Math.min(j,i),g=A.k.F(a3*0.25,1.6)-0.3,f=0+j,e=0+i,d=$.V(),a0=B.K()
a0.sar(new B.a9(A.ay,A.aD,A.x,D.dfI,B.a([A.k.E(g-0.15,0,1),A.k.E(g,0,1),A.k.E(g+0.15,0,1)],x.x),null).aA(0,new B.a5(0,0,f,e)))
a1.aU(new B.a5(0,0,f,e),a0)
a0=Math.max(4,A.k.V(150*this.d))
for(f=a1.a,w=i+h*0.1,i=h*0.05,e=a3*4,v=x.v,u=0;u<a0;++u){t=A.k.F(a3*(h*(0.08+0.12*C.cZ(u,1)))+C.cZ(u,2)*w,w)
s=C.cZ(u,3)
r=Math.sin(a3*(0.8+C.cZ(u,4))+u)
q=h*(0.012+0.012*C.cZ(u,5))
p=Math.cos(a3*(2+3*C.cZ(u,6))+u)
o=D.Q9[A.o.E(A.k.bm(C.cZ(u,7)*5),0,4)]
J.bq(f.save())
f.translate(s*j+r*h*0.04,t-i)
f.rotate((a3*(0.6+C.cZ(u,8)*2)+u)*180/3.141592653589793,0,0)
n=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
t=Math.abs(p)
n.r=B.ar(o,A.c,t*0.4).j(0.95).gp(0)
if(A.o.F(u,5)===0){t=B.a([],v)
m=new B.aI(d.r,A.ai,null,null,t)
d=-q*2
t.push(new B.b0(d,0))
for(l=1;l<=8;++l){s=new B.ap(d+l*q*0.5,Math.sin(l*1.2+e)*q*0.5)
t.push(s)
r=m.f
if(r!=null)s.by(r)
s=m.e
if(s!=null)s.a.delete()
m.e=null}d=$.V()
t=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
t.r=B.b1(n.r).gp(0)
t.b=A.ac
t.c=q*0.35
k=t.H()
t=m.e
f.drawPath((t==null?m.e=new B.cv(m.gbB().a.snapshot()):t).a,k)
k.delete()}else{t=B.bN(A.J,q*1.8*A.k.E(t,0.15,1),q)
k=n.H()
f.drawRect(B.bQ(t),k)
k.delete()}f.restore()}this.lN(a1,a2,a3,25,A.bM,30)},
bJy(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=a9.a,a6=a9.b,a7=Math.min(a5,a6)
a5/=2
a6*=0.5
w=new B.t(a5,a6)
for(v=x.O,u=a7*1.2,t=a8.a,s=b0*0.12,r=x.v,q=0;q<16;++q){p=q/16*3.141592653589793*2+s
o=$.V()
n=B.a([],r)
m=new B.aI(o.r,A.ai,a4,a4,n)
n.push(new B.b0(a5,a6))
o=p-0.07
n.push(new B.ap(a5+Math.cos(o)*a7*1.2,a6+Math.sin(o)*a7*1.2))
o=p+0.07
n.push(new B.ap(a5+Math.cos(o)*a7*1.2,a6+Math.sin(o)*a7*1.2))
n.push(new B.bv())
o=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
o.sar(new B.c0(A.A,0.5,A.x,a4,0,B.a([A.bM.j(0.22),D.beh],v),a4,a4).aA(0,B.bX(w,u)))
l=o.H()
o=m.gbB().a.snapshot()
t.drawPath((m.e=new B.cv(o)).a,l)
l.delete()}k=a7*0.28
j=a7*0.16
a5-=k/2
a6=a6-a7*0.15-j
i=new B.aI($.V().r,A.ai,a4,a4,B.a([],r))
v=a6+j
i.D(new B.b0(a5,v))
u=j*0.3
s=a6+u
i.D(new B.ap(a5,s))
o=a6+j*0.6
i.D(new B.ap(a5+k*0.22,o))
i.D(new B.ap(a5+k*0.5,a6))
i.D(new B.ap(a5+k*0.78,o))
o=a5+k
i.D(new B.ap(o,s))
i.D(new B.ap(o,v))
i.D(new B.bv())
h=A.k.E(b0/1.8,0,1)
s=h>=1
if(s){n=B.K()
n.sar(new B.a9(A.b3,A.b6,A.x,D.den,a4,a4).aA(0,new B.a5(a5,a6,o,v)))
a8.aJ(i,n)
for(v=[D.ewY,D.eqj,D.eGf],o=a6+j*0.78,n=a7*0.016,g=a7*0.005,f=o-g,e=0;e<3;++e){d=v[e]
a0=d.b
d=a5+k*d.a
a1=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
a1.r=a0.gp(a0)
l=a1.H()
t.drawCircle(d,o,n,l)
l.delete()
a1=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
a1.r=A.ae.gp(0)
l=a1.H()
t.drawCircle(d-g,f,g,l)
l.delete()}for(v=[0,0.5,1],o=a7*0.014,e=0;e<3;++e){a2=v[e]
n=a2===0.5?0:u
g=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
g.r=A.hQ.gp(0)
l=g.H()
t.drawCircle(a5+k*a2,a6+n,o,l)
l.delete()}}for(v=B.xi(i),u=B.a([],x.X),o=new B.tk(v,!1,u),n=v.a,g=a7*0.008;o.C();){f=o.c
if(f===0||o.f)B.b8(B.jt(y.M));--f
o.ii()
d=u[f].b
d===$&&B.c()
d=d.a.length()
d=new B.aI(n,v.b,a4,new B.cw([new B.Bo(o,f),0,d*h,!0]),B.a([],r))
f=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
f.b=A.ac
f.c=g
f.e=A.dS
f.r=A.bM.gp(0)
l=f.H()
f=d.gbB().a.snapshot()
t.drawPath((d.e=new B.cv(f)).a,l)
l.delete()}if(s){a3=A.k.F(b0*0.5,1)
this.rN(a8,new B.t(a5+k*a3,a6+j*0.5),a7*0.04,A.c,Math.sin(a3*3.141592653589793))}this.lN(a8,a9,b0,45,A.bM,40)},
bCt(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=a9.a,a6=a9.b,a7=Math.min(a5,a6)
this.lN(a8,a9,b0,60,A.c,50)
w=[D.eRB,D.eRj,D.eRd,D.eSz]
for(v=a7*0.01,u=a8.a,t=a7*0.14,s=a7*0.06,r=a5+10,q=a5/40,p=x.v,o=0;o<4;++o){n=w[o].a
m=n[0]
l=n[1]
k=n[2]
j=n[3]
n=$.V()
i=B.a([],p)
h=new B.aI(n.r,A.ai,null,null,i)
for(n=a6*l,g=b0*k,f=g*1.4,e=0;e<=r;e+=q){d=e/a5
a0=n+Math.sin(d*4+g+j)*a7*0.07+Math.sin(d*9-f+j)*a7*0.025
if(e===0){d=new B.b0(e,a0)
i.push(d)
a1=h.f
if(a1!=null)d.by(a1)
d=h.e
if(d!=null)d.a.delete()
h.e=null}else{d=new B.ap(e,a0)
i.push(d)
a1=h.f
if(a1!=null)d.by(a1)
d=h.e
if(d!=null)d.a.delete()
h.e=null}}$.V()
n=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
n.b=A.ac
n.c=t
n.r=m.j(0.28).gp(0)
n.a=A.oH
n.z=new B.hC(A.G,s)
a2=n.H()
n=h.e
u.drawPath((n==null?h.e=new B.cv(h.gbB().a.snapshot()):n).a,a2)
a2.delete()
n=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
n.b=A.ac
n.c=v
n.r=m.j(0.55).gp(0)
n.a=A.oH
n.z=new B.hC(A.G,v)
a2=n.H()
n=h.e
u.drawPath((n==null?h.e=new B.cv(h.gbB().a.snapshot()):n).a,a2)
a2.delete()}for(v=Math.max(4,A.k.V(40*this.d)),a3=a6+20,t=b0*a7,a4=0;a4<v;++a4){s=A.k.F(t*(0.05+0.06*C.cZ(a4,1))+C.cZ(a4,2)*a3,a3)
r=C.cZ(a4,3)
q=Math.sin(b0+a4)
p=C.cZ(a4,4)
$.V()
n=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
n.r=A.vK.j(0.4+0.5*C.cZ(a4,5)).gp(0)
n.a=A.oH
a2=n.H()
u.drawCircle(r*a5+q*a7*0.02,a6-s,a7*(0.003+0.004*p),a2)
a2.delete()}},
bFO(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=a2.a,j=a2.b,i=Math.min(k,j),h=Math.sin(a3*1.5),g=k/2,f=j*0.5,e=i*0.55,d=$.V(),a0=B.K()
a0.sar(new B.c0(A.A,0.5,A.x,l,0,B.a([A.hP.j(0.25+0.1*h),D.XN],x.O),l,l).aA(0,B.bX(new B.t(g,f),e)))
a1.ae(new B.t(g,f),e,a0)
for(h=i*0.008,g=a1.a,f=a3*3,e=x.v,w=0;w<6;++w){v=(w&1)===0
a0=B.a([],e)
u=new B.aI(d.r,A.ai,l,l,a0)
d=v?0:k
t=j*(0.05+w*0.07)
a0.push(new B.b0(d,t))
for(s=1;s<=20;++s){d=s/20*k
r=v?d*0.45:k-d*0.45
d=new B.ap(r,t+s*i*0.012+Math.sin(s*0.8+f+w)*i*0.02)
a0.push(d)
q=u.f
if(q!=null)d.by(q)
d=u.e
if(d!=null)d.a.delete()
u.e=null}d=$.V()
a0=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
a0.b=A.ac
a0.c=h
a0.r=D.Q9[A.o.F(w,4)].j(0.7).gp(0)
p=a0.H()
a0=u.e
g.drawPath((a0==null?u.e=new B.cv(u.gbB().a.snapshot()):a0).a,p)
p.delete()}for(h=Math.max(4,A.k.V(110*this.d)),f=j*0.08,o=j*1.1,e=a3*2,w=0;w<h;++w){n=j-A.k.F(a3*(i*(0.07+0.12*C.cZ(w,1)))+C.cZ(w,2)*o,o)
r=k*(0.1+0.8*C.cZ(w,3))+Math.sin(e+w)*i*0.015
m=i*(0.004+0.012*C.cZ(w,4))
if(n<f){this.rN(a1,new B.t(r,n),m*2.4,A.bM,A.k.E(n/f,0,1))
continue}$.V()
d=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
d.b=A.ac
a0=m*0.25
d.c=Math.max(0.8,a0)
d.r=A.xF.j(0.75).gp(0)
p=d.H()
g.drawCircle(r,n,m,p)
p.delete()
d=m*0.35
t=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
t.r=A.c.j(0.8).gp(0)
p=t.H()
g.drawCircle(r-d,n-d,a0,p)
p.delete()}},
bLJ(a9,b0,b1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=null,a6=b0.a,a7=b0.b,a8=Math.min(a6,a7)
this.lN(a9,b0,b1,30,A.kY,60)
for(w=Math.max(4,A.k.V(42*this.d)),v=a9.a,u=b1*2.2,t=b1*a8,s=b1*0.7,r=b1*0.8,q=x.v,p=0;p<w;++p){o=a8*(0.025+0.035*C.cZ(p,1))
n=a7+o*4
m=A.k.F(t*(0.04+0.06*C.cZ(p,2))+C.cZ(p,3)*n,n)-o*2
l=C.cZ(p,4)*a6+Math.sin(s+p)*a8*0.02
J.bq(v.save())
v.translate(l,m)
v.rotate(Math.sin(r+p)*0.5*180/3.141592653589793,0,0)
k=o*1.2
j=-k
i=j*0.35
h=$.V()
g=B.a([],q)
f=new B.aI(h.r,A.ai,a5,a5,g)
h=-o
e=h*0.5
g.push(new B.b0(e,i))
h*=0.28
j*=0.6
g.push(new B.ap(h,j))
d=o*0.28
g.push(new B.ap(d,j))
a0=o*0.5
g.push(new B.ap(a0,i))
a1=k*0.6
g.push(new B.ap(0,a1))
g.push(new B.bv())
g=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
g.sar(new B.a9(A.ay,A.aD,A.x,D.da5,a5,a5).aA(0,B.bN(A.J,k*1.2,o)))
a2=g.H()
g=f.gbB().a.snapshot()
v.drawPath((f.e=new B.cv(g)).a,a2)
a2.delete()
a3=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
a3.b=A.ac
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
if(a4>0.85)this.rN(a9,new B.t(l+o*0.2,m-o*0.3),o*0.9,A.c,(a4-0.85)/0.15)}},
cwV(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=e.a,g=e.b,f=Math.min(h,g)
h/=2
g/=2
for(w=d.a,v=x.v,u=a0*0.15,t=0;t<28;++t){s=t/28*3.141592653589793*2-u
r=(t&1)===0
q=r?0.05:0.025
p=$.V()
o=B.a([],v)
n=new B.aI(p.r,A.ai,null,null,o)
o.push(new B.b0(h,g))
p=s-q
o.push(new B.ap(h+Math.cos(p)*f*1.3,g+Math.sin(p)*f*1.3))
p=s+q
o.push(new B.ap(h+Math.cos(p)*f*1.3,g+Math.sin(p)*f*1.3))
o.push(new B.bv())
p=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
p.r=A.bM.j(r?0.12:0.07).gp(0)
m=p.H()
r=n.gbB().a.snapshot()
w.drawPath((n.e=new B.cv(r)).a,m)
m.delete()}for(v=f*0.008,l=0;l<3;++l){k=A.k.F(a0+l*0.6,1.8)/1.8
$.V()
u=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
u.b=A.ac
r=1-k
u.c=v*r
u.r=A.bM.j(r*0.6).gp(0)
m=u.H()
w.drawCircle(h,g,f*(0.15+0.6*k),m)
m.delete()}j=A.k.bm(a0/2.4)
k=A.k.F(a0,2.4)/2.4
for(w=Math.max(4,A.k.V(70*this.d)),v=j+1,u=(1-k)*1.2,t=0;t<w;++t){s=C.cZ(t,j)*3.141592653589793*2
i=f*(0.1+0.55*D.brv.aw(0,k)*(0.5+0.5*C.cZ(t,v)))
this.rN(d,new B.t(h+Math.cos(s)*i,g+Math.sin(s)*i),f*(0.01+0.012*C.cZ(t,3)),D.Q9[A.o.E(A.k.bm(C.cZ(t,4)*5),0,4)],u)}},
bCH(a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=a8.a,a5=a8.b,a6=Math.min(a4,a5)
for(w=this.d,v=Math.max(4,A.k.V(22*w)),u=a7.a,t=x.O,s=x.v,r=a9*2,q=a9*a6,p=a9*0.9,o=0;o<v;++o){n=a6*(0.045+0.035*C.cZ(o,1))
m=a5+n*6
l=n*2
k=a5+l-A.k.F(q*(0.05+0.05*C.cZ(o,2))+C.cZ(o,3)*m,m)
j=C.cZ(o,4)*a4+Math.sin(p+o*1.3)*a6*0.03
i=D.ax2[A.o.F(o,6)]
h=$.V()
g=B.a([],s)
f=new B.aI(h.r,A.ai,a3,a3,g)
h=k+n*1.15
g.push(new B.b0(j,h))
for(e=1;e<=6;++e){d=new B.ap(j+Math.sin(e*1.4+r+o)*n*0.15,h+e*n*0.35)
g.push(d)
a0=f.f
if(a0!=null)d.by(a0)
d=f.e
if(d!=null)d.a.delete()
f.e=null}g=$.V()
d=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
d.b=A.ac
d.c=Math.max(0.7,n*0.03)
d.r=A.c.j(0.6).gp(0)
a1=d.H()
d=f.e
u.drawPath((d==null?f.e=new B.cv(f.gbB().a.snapshot()):d).a,a1)
a1.delete()
a2=B.bN(new B.t(j,k),n*2.3,l)
l=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
d=B.ar(i,A.w,0.35)
d.toString
l.sar(new B.c0(D.aYC,0.9,A.x,a3,0,B.a([A.c,i,d],t),V.awT,a3).aA(0,a2))
a1=l.H()
u.drawOval(B.bQ(a2),a1)
a1.delete()
l=B.a([],s)
g=new B.aI(g.r,A.ai,a3,a3,l)
d=n*0.12
l.push(new B.b0(j-d,h))
l.push(new B.ap(j+d,h))
l.push(new B.ap(j,k+n))
l.push(new B.bv())
l=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
l.r=B.ar(i,A.w,0.3).gp(0)
a1=l.H()
l=g.gbB().a.snapshot()
u.drawPath((g.e=new B.cv(l)).a,a1)
a1.delete()}for(w=Math.max(4,A.k.V(60*w)),m=a5+20,a5=a9*3,v=a6*0.012,t=a6*0.02,o=0;o<w;++o){s=A.k.F(q*(0.1+0.1*C.cZ(o,11))+C.cZ(o,12)*m,m)
r=C.cZ(o,13)
J.bq(u.save())
u.translate(r*a4,s-10)
u.rotate((a5+o)*180/3.141592653589793,0,0)
s=B.bN(A.J,t,v)
$.V()
r=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
r.r=D.ax2[A.o.F(o,6)].j(0.85).gp(0)
a1=r.H()
u.drawRect(B.bQ(s),a1)
a1.delete()
u.restore()}},
bQS(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=b2.a,a6=b2.b,a7=Math.min(a5,a6),a8=a5/2,a9=a6/2,b0=new B.t(a8,a9)
this.lN(b1,b2,b3,50,A.c,70)
for(w=[D.eRJ,D.eRp,D.eRv],v=b3*0.3,u=x.O,t=b1.a,s=0;s<3;++s){r=w[s].a
q=r[0]
p=r[1]
o=r[2]
n=r[3]
r=a8+(p*a5+Math.sin(v)*a7*0.03)
m=a9+o*a6
l=a7*n
$.V()
k=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
k.sar(new B.c0(A.A,0.5,A.x,a4,0,B.a([q.j(0.32+0.08*Math.sin(b3)),q.j(0)],u),a4,a4).aA(0,B.bX(new B.t(r,m),l)))
j=k.H()
t.drawCircle(r,m,l,j)
j.delete()}w=Math.max(4,A.k.V(420*this.d))
for(v=a7*0.6,r=b3*0.18,i=0;i<w;++i){h=A.o.F(i,3)
g=C.cZ(i,1)
f=v*Math.pow(g,0.8)
e=h*3.141592653589793*2/3+g*5.5+r+(C.cZ(i,2)-0.5)*0.5
m=Math.cos(e)
l=Math.sin(e)
k=B.ar(A.bM,A.eF,g)
k.toString
d=C.cZ(i,3)
$.V()
a0=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
a0.r=k.j(0.5+0.5*C.cZ(i,4)).gp(0)
a0.a=A.oH
j=a0.H()
t.drawCircle(a8+m*f,a9+l*f*0.62,a7*(0.0025+0.004*d),j)
j.delete()}a8=a7*0.12
$.V()
a9=B.K()
a9.sar(new B.c0(A.A,0.5,A.x,a4,0,B.a([A.xF.j(0.55),D.agq],u),a4,a4).aA(0,B.bX(b0,a8)))
b1.ae(b0,a8,a9)
a1=A.k.F(b3,3.5)/3.5
if(a1<0.25){a2=A.k.bm(b3/3.5)
a3=new B.t(a5*(0.1+0.5*C.cZ(a2,9)),a6*0.1*C.cZ(a2,8))
a5=B.kv(a3,a3.a9(0,new B.t(v,a7*0.3)),a1/0.25)
a5.toString
a6=B.kv(a3,a5,0.6)
a6.toString
a8=B.K()
a8.sar(new B.a9(A.a3,A.a8,A.x,B.a([A.c.j(0),A.c],u),a4,a4).aA(0,B.rG(a3,a5)))
a8.c=a7*0.005
a8.d=A.bG
b1.br(a6,a5,a8)}},
cnO(b9,c0,c1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=null,b6=c0.a,b7=c0.b,b8=Math.min(b6,b7)
for(w=x.O,v=b9.a,u=-b8*0.05,t=b7*1.3,s=x.v,r=0;r<3;++r){q=b6*(0.2+r*0.3)
p=1.5707963267948966+Math.sin(c1*(0.5+r*0.15)+r*2)*0.45
o=$.V()
n=B.a([],s)
m=new B.aI(o.r,A.ai,b5,b5,n)
n.push(new B.b0(q,u))
o=p-0.16
n.push(new B.ap(q+Math.cos(o)*t,u+Math.sin(o)*t))
o=p+0.16
n.push(new B.ap(q+Math.cos(o)*t,u+Math.sin(o)*t))
n.push(new B.bv())
o=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
o.sar(new B.c0(A.A,0.5,A.x,b5,0,B.a([A.xF.j(0.28),D.agq],w),b5,b5).aA(0,B.bX(new B.t(q,u),t)))
o.a=A.oH
l=o.H()
q=m.gbB().a.snapshot()
v.drawPath((m.e=new B.cv(q)).a,l)
l.delete()}for(u=[!0,!1],q=b7*0.52,o=b8*0.012,n=b7*0.5,k=b7*0.55,j=0+b7,i=b6*0.16,h=i*0.55,g=i*0.9,f=i*0.62,e=i*0.95,d=b6-e,a0=b6-f,a1=b6-g,a2=b6-h,a3=b6-i,a4=0;a4<2;++a4){a5=u[a4]
a6=a5?0:a3
a7=B.a([],w)
for(a8=0;a8<7;++a8)a7.push((a8&1)===0?A.ev:A.el)
a9=$.V()
b0=B.a([],s)
m=new B.aI(a9.r,A.ai,b5,b5,b0)
b0.push(new B.b0(a5?0:b6,0))
b0.push(new B.ap(a5?i:a3,0))
a9=a5?h:a2
b0.push(new B.c8(a9,k,a5?g:a1,b7))
b0.push(new B.ap(a5?0:b6,b7))
b0.push(new B.bv())
a9=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
a9.sar(new B.a9(A.a3,A.a8,A.x,a7,b5,b5).aA(0,new B.a5(a6,0,a6+i,j)))
l=a9.H()
a9=m.gbB().a.snapshot()
v.drawPath((m.e=new B.cv(a9)).a,l)
l.delete()
a9=a5?f:a0
b0=a5?e:d
b1=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
b1.r=A.hP.gp(0)
b1.c=o
b1.d=A.bG
l=b1.H()
v.drawLine.apply(v,[a9,n,b0,q,l])
l.delete()}b2=new B.aI($.V().r,A.ai,b5,b5,B.a([],s))
w=b7*0.78
b2.D(new B.b0(b6*0.42,w))
b2.D(new B.ap(b6*0.58,w))
b2.D(new B.ap(b6*0.8,b7))
b2.D(new B.ap(b6*0.2,b7))
b2.D(new B.bv())
v=B.K()
v.sar(D.c1f.aA(0,new B.a5(0,w,0+b6,w+b7*0.22)))
b9.aJ(b2,v)
for(w=Math.max(4,A.k.V(80*this.d)),b3=b7+10,b7=c1*b8,v=c1*5,r=0;r<w;++r){b4=A.k.F(b7*(0.05+0.07*C.cZ(r,1))+C.cZ(r,2)*b3,b3)
u=C.cZ(r,3)
s=Math.sin(c1+r)
q=Math.sin(v+r)
this.rN(b9,new B.t(b6*(0.15+0.7*u)+s*b8*0.01,b4),b8*(0.006+0.008*C.cZ(r,4)),A.bM,0.3+0.7*((q+1)/2))}},
bHk(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=e.a,h=e.b,g=Math.min(i,h)
for(w=Math.max(4,A.k.V(55*this.d)),v=d.a,u=f*g,t=0;t<w;++t){s=g*(0.02+0.02*C.cZ(t,1))
r=h+s*4
q=s*2
p=A.k.F(u*(0.12+0.12*C.cZ(t,2))+C.cZ(t,3)*r,r)-q
o=C.cZ(t,4)*i
n=Math.cos(f*(2+3*C.cZ(t,5))+t)
m=Math.abs(n)
l=B.bN(new B.t(o,p),q,q*A.k.E(m,0.12,1))
$.V()
q=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
q.sar(new B.a9(A.ay,A.aD,A.x,n>0?D.dpX:D.cHr,null,null).aA(0,l))
k=q.H()
v.drawOval(B.bQ(l),k)
k.delete()
q=-(s*0.22)
j=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
j.b=A.ac
j.c=Math.max(0.6,s*0.08)
j.r=D.bof.gp(0)
k=j.H()
v.drawOval(B.bQ(new B.a5(l.a-q,l.b-q,l.c+q,l.d+q)),k)
k.delete()
if(m>0.97)this.rN(d,new B.t(o+s*0.3,p-s*0.4),s*0.9,A.c,0.9)}this.lN(d,e,f,30,A.bM,110)},
c04(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
this.lN(a3,a4,a5,50,A.c,120)
for(w=Math.max(4,A.k.V(26*this.d)),v=a3.a,u=x.O,t=a5*a2,s=a5*0.6,r=a5*9,q=x.v,p=0;p<w;++p){o=a2*(0.035+0.035*C.cZ(p,1))
n=a1+o*4
m=a1+o*2-A.k.F(t*(0.03+0.04*C.cZ(p,2))+C.cZ(p,3)*n,n)
l=C.cZ(p,4)*a0+Math.sin(s+p)*a2*0.03
k=0.8+0.2*Math.sin(r+p*3)
j=o*2.2
i=$.V()
h=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
h.sar(new B.c0(A.A,0.5,A.x,d,0,B.a([X.M2.j(0.45*k),D.afb],u),d,d).aA(0,B.bX(new B.t(l,m),j)))
g=h.H()
v.drawCircle(l,m,j,g)
g.delete()
j=B.a([],q)
f=new B.aI(i.r,A.ai,d,d,j)
i=o*0.5
h=o*0.7
e=m-h
j.push(new B.b0(l-i,e))
j.push(new B.ap(l+i,e))
i=o*0.38
h=m+h
j.push(new B.ap(l+i,h))
j.push(new B.ap(l-i,h))
j.push(new B.bv())
j=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
i=B.ar(D.beu,A.c,0.2*k)
i.toString
j.sar(new B.a9(A.b3,A.b6,A.x,B.a([D.bjv,i],u),d,d).aA(0,B.bN(new B.t(l,m),o*1.4,o)))
g=j.H()
j=f.gbB().a.snapshot()
v.drawPath((f.e=new B.cv(j)).a,g)
g.delete()
j=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
j.r=A.c.j(k).gp(0)
g=j.H()
v.drawCircle(l,m+o*0.55,o*0.12,g)
g.delete()}},
bYH(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
for(w=Math.max(4,A.k.V(40*this.d)),v=a3.a,u=x.O,t=x.v,s=a5*a2,r=a5*1.3,q=a5*6,p=0;p<w;++p){o=a2*(0.02+0.03*C.cZ(p,1))
n=a1+o*4
m=A.k.F(s*(0.05+0.06*C.cZ(p,2))+C.cZ(p,3)*n,n)
l=C.cZ(p,4)
k=Math.sin(r+p)
j=1+0.12*Math.max(0,Math.sin(q+p))
J.bq(v.save())
v.translate(l*a0+k*a2*0.03,a1+o*2-m)
v.rotate(Math.sin(a5+p)*0.3*180/3.141592653589793,0,0)
v.scale(j,j)
m=$.V()
l=B.a([],t)
i=new B.aI(m.r,A.ai,d,d,l)
m=o*0.9
l.push(new B.b0(0,m))
k=-o
h=k*0.2
g=k*1.6
l.push(new B.lD(k*1.8,h,k*0.9,g,0,k*0.55))
l.push(new B.lD(m,g,o*1.8,h,0,m))
l.push(new B.bv())
f=D.d0R[A.o.F(p,5)]
m=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
l=B.ar(f,A.w,0.25)
l.toString
m.sar(new B.c0(A.tf,0.5,A.x,d,0,B.a([A.c,f,l],u),K.a37,d).aA(0,B.bX(A.J,o*1.4)))
e=m.H()
m=i.gbB().a.snapshot()
v.drawPath((i.e=new B.cv(m)).a,e)
e.delete()
v.restore()}this.lN(a3,a4,a5,30,A.i7,130)},
ciU(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=e.a,g=e.b,f=Math.min(h,g)
for(w=Math.max(4,A.k.V(70*this.d)),v=d.a,u=x.v,t=a0*f,s=a0*0.9,r=a0*2,q=0;q<w;++q){p=f*(0.015+0.02*C.cZ(q,1))
o=g+p*4
n=A.k.F(t*(0.05+0.06*C.cZ(q,2))+C.cZ(q,3)*o,o)
m=C.cZ(q,4)
l=Math.sin(s+q*0.7)
J.bq(v.save())
v.translate(m*h+l*f*0.06,n-p*2)
v.rotate((a0*(0.5+C.cZ(q,5))+q)*180/3.141592653589793,0,0)
n=Math.cos(r+q)
v.scale(1,0.4+0.6*Math.abs(n))
n=$.V()
m=B.a([],u)
k=new B.aI(n.r,A.ai,i,i,m)
n=-p
m.push(new B.b0(0,n))
l=n*0.2
m.push(new B.c8(p,l,0,p))
m.push(new B.c8(n,l,0,n))
m.push(new B.bv())
n=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
m=(q&1)===0?D.cBD:D.dbp
n.sar(new B.a9(A.a3,A.a8,A.x,m,i,i).aA(0,B.bX(A.J,p)))
j=n.H()
n=k.gbB().a.snapshot()
v.drawPath((k.e=new B.cv(n)).a,j)
j.delete()
v.restore()}this.lN(d,e,a0,25,A.bM,140)},
bEN(b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=null,a7=b1.a,a8=b1.b,a9=Math.min(a7,a8)
this.lN(b0,b1,b2,40,A.bM,150)
for(w=Math.max(4,A.k.V(16*this.d)),v=b0.a,u=x.v,t=b2*9,s=b2*0.5,r=0;r<w;++r){q=a9*(0.035+0.025*C.cZ(r,1))
p=Math.sin(b2*(0.15+0.1*C.cZ(r,2))+r*2.1)
o=Math.sin(b2*(0.21+0.1*C.cZ(r,3))+r*1.3)
n=0.25+0.75*Math.abs(Math.cos(t+r))
J.bq(v.save())
v.translate(a7*(0.5+0.45*p),a8*(0.5+0.42*o))
v.rotate(Math.sin(s+r)*0.4*180/3.141592653589793,0,0)
for(p=[-1,1],o=q*0.04,m=-q,l=q*1.4,k=0+l,j=m+q*2,i=(r&1)===0,h=q*0.2,g=q*0.8,f=q*1.2,e=m*1.3,d=m*0.1,a0=0;a0<2;++a0){a1=p[a0]
J.bq(v.save())
v.scale(a1*n,1)
a2=$.V()
a3=B.a([],u)
a4=new B.aI(a2.r,A.ai,a6,a6,a3)
a3.push(new B.b0(0,0))
a3.push(new B.lD(f,e,l,d,h,0))
a3.push(new B.lD(q,h,g,q,0,h))
a3.push(new B.bv())
a2=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
a2.sar(new B.a9(A.a3,A.a8,A.x,i?D.db8:D.ddR,a6,a6).aA(0,new B.a5(0,m,k,j)))
a5=a2.H()
a2=a4.gbB().a.snapshot()
v.drawPath((a4.e=new B.cv(a2)).a,a5)
a5.delete()
a2=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
a2.b=A.ac
a2.c=Math.max(0.6,o)
a2.r=D.B7.gp(0)
a5=a2.H()
a2=a4.e
v.drawPath((a2==null?a4.e=new B.cv(a4.gbB().a.snapshot()):a2).a,a5)
a5.delete()
v.restore()}$.V()
p=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
p.r=D.bnv.gp(0)
p.c=q*0.1
p.d=A.bG
a5=p.H()
v.drawLine.apply(v,[0,m*0.3,0,q*0.4,a5])
a5.delete()
v.restore()}},
c42(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=a0.a,g=a0.b,f=Math.min(h,g),e=new B.t(h/2,g/2)
for(w=a1*0.45,v=f*0.012,u=d.a,t=0;t<4;++t){s=A.k.F(w+t/4,1)
r=f*(0.2+0.7*s)
$.V()
q=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
q.b=A.ac
q.c=v
q.r=D.ay8[t].j((1-s)*0.9).gp(0)
q.z=new B.hC(A.G,v)
p=r*0.3
p=B.bz(B.bN(e,r,r*1.6),new B.aQ(p,p))
o=q.H()
u.drawRRect(B.eL(p),o)
o.delete()}n=h/28
for(h=n*0.15,w=n*0.7,v=n*0.3,p=f*0.01,m=0;m<28;++m){l=g*(0.05+0.18*(0.5+0.5*Math.sin(a1*(3+C.cZ(m,1)*4)+m)))
k=D.ay8[A.o.F(m,4)]
j=m*n+h
i=g-l
i=B.bz(new B.a5(j,i,j+w,i+l),new B.aQ(v,v))
$.V()
j=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
j.r=k.j(0.85).gp(0)
j.z=new B.hC(A.abo,p)
o=j.H()
u.drawRRect(B.eL(i),o)
o.delete()}},
bLU(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
a0/=2
w=a2*0.12
v=new B.t(a0,w)
u=a2*0.09
for(t=Math.max(4,A.k.V(60*this.d)),s=a5*0.6,a1*=0.55,r=a2*0.004,q=a3.a,p=0;p<t;++p){o=C.cZ(p,1)*3.141592653589793*2+s
n=a2*(0.2+0.8*C.cZ(p,2))
m=Math.cos(o)
l=Math.sin(o)
k=[A.c,A.bM,A.nO,A.dt][A.o.F(p,4)]
j=C.cZ(p,3)
$.V()
i=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
i.r=k.j(0.75).gp(0)
i.a=A.oH
i.z=new B.hC(A.G,r)
h=i.H()
q.drawCircle(a0+m*n*1.4,a1+l*n*0.5,a2*(0.008+0.01*j),h)
h.delete()}a1=$.V()
t=B.K()
t.r=A.aB.gp(0)
t.c=1.2
a3.br(new B.t(a0,0),new B.t(a0,w-u),t)
t=B.K()
t.r=A.dv.gp(0)
a3.ae(v,u,t)
J.bq(q.save())
a1=new B.aI(a1.r,A.ai,null,null,B.a([],x.v))
a1.D(new B.jC(B.bX(v,u)))
a3.mE(0,a1)
g=u/4
for(a1=a5*g*2,t=g*0.9,s=a5*4,f=-4;f<4;++f)for(r=w+f*g,m=r+t,l=f*2.3,e=-6;e<6;++e){j=a0+e*g+A.k.F(a1,g)
i=Math.sin(e*1.7+l+s)
$.V()
d=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
d.r=B.ar(A.bl,A.c,0.4+0.6*((i+1)/2)).gp(0)
h=d.H()
q.drawRect(B.bQ(new B.a5(j,r,j+t,m)),h)
h.delete()}q.restore()
a0=-u*0.4
this.rN(a3,v.a9(0,new B.t(a0,a0)),u*0.6,A.c,0.6+0.4*Math.sin(a5*5))},
cyy(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=a3.a,f=a3.b,e=Math.min(g,f),d=g/2,a0=f*(1.05-0.25*A.cu.aw(0,A.k.E(a4/3,0,1))),a1=new B.t(d,a0)
for(w=a2.a,v=a4*0.3,u=x.v,t=0;t<20;++t){s=3.141592653589793+t/19*3.141592653589793+Math.sin(v)*0.03
r=$.V()
q=B.a([],u)
p=new B.aI(r.r,A.ai,h,h,q)
q.push(new B.b0(d,a0))
r=s-0.04
q.push(new B.ap(d+Math.cos(r)*e*1.5,a0+Math.sin(r)*e*1.5))
r=s+0.04
q.push(new B.ap(d+Math.cos(r)*e*1.5,a0+Math.sin(r)*e*1.5))
q.push(new B.bv())
r=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
r.r=A.bM.j(0.1).gp(0)
o=r.H()
r=p.gbB().a.snapshot()
w.drawPath((p.e=new B.cv(r)).a,o)
o.delete()}d=e*0.5
$.V()
a0=B.K()
a0.sar(new B.c0(A.A,0.5,A.x,h,0,B.a([D.ba7.j(0.6),D.afb],x.O),h,h).aA(0,B.bX(a1,d)))
a2.ae(a1,d,a0)
a0=e*0.2
d=B.K()
d.sar(D.enN.aA(0,B.bX(a1,a0)))
a2.ae(a1,a0,d)
for(d=a4*e*0.03,a0=g*1.4,v=g*0.2,u=e*0.35,r=e*0.07,q=e*0.06,n=e*0.03,m=e*0.18,t=0;t<5;++t){l=A.k.F(d*(1+t*0.3)+C.cZ(t,1)*g*1.4,a0)-v
k=f*(0.15+0.12*t)
j=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
j.r=A.c.j(0.18).gp(0)
i=B.bN(new B.t(l,k),r,u)
o=j.H()
w.drawOval(B.bQ(i),o)
o.delete()
i=B.bN(new B.t(l+q,k-n),r,m)
o=j.H()
w.drawOval(B.bQ(i),o)
o.delete()}this.lN(a2,a3,a4,20,A.hQ,180)},
chY(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a2.a,d=a2.b,a0=Math.min(e,d)
for(w=a1.a,v=e+10,u=e/30,t=x.v,s=0;s<4;++s){r=$.V()
q=B.a([],t)
p=new B.aI(r.r,A.ai,f,f,q)
q.push(new B.b0(0,d))
for(r=d*(0.72+s*0.07),o=a3*(1+s*0.3),n=0;n<=v;n+=u){m=new B.ap(n,r+Math.sin(n/e*6+o+s)*a0*0.03)
q.push(m)
l=p.f
if(l!=null)m.by(l)
m=p.e
if(m!=null)m.a.delete()
p.e=null}r=new B.ap(e,d)
q.push(r)
o=p.f
if(o!=null)r.by(o)
r=p.e
if(r!=null)r.a.delete()
p.e=null
r=new B.bv()
q.push(r)
q=p.f
if(q!=null)r.by(q)
r=p.e
if(r!=null)r.a.delete()
p.e=null
$.V()
r=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
r.r=B.ar(A.cC,A.jn,s/3).j(0.55).gp(0)
k=r.H()
r=p.e
w.drawPath((r==null?p.e=new B.cv(p.gbB().a.snapshot()):r).a,k)
k.delete()}for(v=Math.max(4,A.k.V(45*this.d)),j=d*0.95,d*=0.9,u=a3*a0,i=0;i<v;++i){h=a0*(0.012+0.02*C.cZ(i,1))
g=d-A.k.F(u*(0.04+0.05*C.cZ(i,2))+C.cZ(i,3)*j,j)
n=C.cZ(i,4)*e+Math.sin(a3+i)*a0*0.02
$.V()
t=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
t.sar(new B.c0(An.xd,0.5,A.x,f,0,D.dho,f,f).aA(0,B.bX(new B.t(n,g),h)))
k=t.H()
w.drawCircle(n,g,h,k)
k.delete()}this.lN(a1,a2,a3,25,A.c,190)},
cwC(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=a0.a,f=a0.b,e=Math.min(g,f)
for(w=Math.max(4,A.k.V(70*this.d)),v=d.a,u=a1*e,t=a1*0.7,s=a1*0.4,r=0;r<w;++r){q=e*(0.01+0.025*C.cZ(r,1))
p=f+q*4
o=A.k.F(u*(0.03+0.05*C.cZ(r,2))+C.cZ(r,3)*p,p)
n=C.cZ(r,4)
m=Math.sin(t+r)
$.V()
l=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
l.r=A.c.j(0.6+0.4*C.cZ(r,5)).gp(0)
l.c=Math.max(0.8,q*0.12)
l.d=A.bG
J.bq(v.save())
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
h.delete()}v.restore()}this.lN(d,a0,a1,40,A.eC,200)},
c0a(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
a0/=2
a1/=2
w=new B.t(a0,a1)
v=a2*0.4
for(u=[-1,1],t=13*A.k.E(a5/2,0,1),s=a3.a,r=a2*0.05,q=a2*0.02,p=r/2,o=-q,n=0+r,m=o+q*2,l=0;l<2;++l){k=u[l]
for(j=k>0,i=0;i<A.k.dk(t);++i){h=1.5707963267948966+k*(0.35+i/13*2.2)
g=Math.cos(h)
f=Math.sin(h)
J.bq(s.save())
s.translate(a0+g*v,a1+f*v)
s.rotate((h+(j?0.6:2.541592653589793))*180/3.141592653589793,0,0)
g=B.bN(new B.t(p,0),q,r)
$.V()
f=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
f.sar(D.c12.aA(0,new B.a5(0,o,n,m)))
e=f.H()
s.drawOval(B.bQ(g),e)
e.delete()
s.restore()}}$.V()
a0=B.K()
a0.b=A.ac
a0.c=a2*0.003
a0.r=D.beN.gp(0)
a3.ae(w,v*1.08,a0)
d=a5*0.8
this.rN(a3,w.a9(0,new B.t(Math.cos(d)*v*1.08,Math.sin(d)*v*1.08)),a2*0.03,A.c,0.9)
this.lN(a3,a4,a5,40,A.bM,210)},
cqj(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=a9.a,a4=a9.b,a5=Math.min(a3,a4),a6=x.O,a7=[B.a([A.hP,A.hQ],a6),B.a([A.oR,A.i7],a6),B.a([A.aC,A.eF],a6)]
for(w=b0*0.3,v=0+a3,u=0+a4,t=a8.a,s=x.dB,r=s.k("bS<ak.E>"),q=s.k("ak.E"),p=b0*1.5,o=x.v,n=x.dN,m=0;m<3;++m){l=$.V()
k=B.a([],o)
j=new B.aI(l.r,A.ai,null,null,k)
i=B.a([],n)
for(l=m*0.2,h=a4*(0.3+l),l=b0*(0.8+l),g=0;g<=40;++g){f=g/40
e=f*a3
d=h+Math.sin(f*5+l+m)*a5*0.1
a0=a5*(0.03+0.03*(0.5+0.5*Math.sin(f*7+p+m)))
f=d-a0
if(g===0){f=new B.b0(e,f)
k.push(f)
a1=j.f
if(a1!=null)f.by(a1)
f=j.e
if(f!=null)f.a.delete()
j.e=null}else{f=new B.ap(e,f)
k.push(f)
a1=j.f
if(a1!=null)f.by(a1)
f=j.e
if(f!=null)f.a.delete()
j.e=null}i.push(new B.t(e,d+a0))}for(l=new B.dx(i,s),l=new B.bS(l,l.gL(0),r);l.C();){h=l.d
if(h==null)h=q.a(h)
h=new B.ap(h.a,h.b)
k.push(h)
f=j.f
if(f!=null)h.by(f)
h=j.e
if(h!=null)h.a.delete()
j.e=null}l=new B.bv()
k.push(l)
k=j.f
if(k!=null)l.by(k)
l=j.e
if(l!=null)l.a.delete()
j.e=null
$.V()
l=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
k=a7[m]
h=k[0]
l.sar(new B.a9(A.a3,A.a8,A.x,B.a([h,k[1],h],a6),E.QA,new B.mw(w)).aA(0,new B.a5(0,0,v,u)))
l.r=A.c.j(0.85).gp(0)
a2=l.H()
l=j.e
t.drawPath((l==null?j.e=new B.cv(j.gbB().a.snapshot()):l).a,a2)
a2.delete()}this.lN(a8,a9,b0,40,A.c,220)},
c_T(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=b2.a,a8=b2.b,a9=Math.min(a7,a8),b0=a9*0.09
for(w=[!0,!1],v=b0*2,u=a7+v,t=b0*0.5,s=b1.a,r=b0*0.1,q=b0*0.35,p=b0*0.3,o=-b0*2,n=b3*a9,m=n*0.08,l=a8-b0,k=0;k<2;++k){j=w[k]
i=j?0:l
h=A.k.F(m,v)
g=o+(j?h:-h)
f=i+b0
e=i+q
d=e+p
for(;g<u;g=a1){a0=A.o.F(A.k.bm(g/t),5)
a1=g+t
$.V()
a2=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
a3=Math.abs(a0)
a2.r=D.a3b[a3].gp(0)
a4=a2.H()
s.drawRect(B.bQ(new B.a5(g,i,a1,f)),a4)
a4.delete()
a2=g+r
a5=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
a5.r=D.a3b[A.o.F(a3+2,5)].gp(0)
a4=a5.H()
s.drawRect(B.bQ(new B.a5(a2,e,a2+p,d)),a4)
a4.delete()}}for(w=Math.max(4,A.k.V(36*this.d)),u=b3*3,a6=a8-v,a0=0;a0<w;++a0){a8=A.k.F(n*(0.04+0.05*C.cZ(a0,1))+C.cZ(a0,2)*a6,a6)
v=C.cZ(a0,3)
t=C.cZ(a0,4)
this.rN(b1,new B.t(v*a7,l-a8),a9*(0.01+0.012*t),D.a3b[A.o.F(a0,3)===0?0:4],0.5+0.5*Math.sin(u+a0))}},
cC9(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=a5.a,a2=a5.b,a3=Math.min(a1,a2)
a1/=2
a2/=2
for(w=a6*0.2,v=a3*0.03,u=a4.a,t=0;t<18;++t){s=t/18*3.141592653589793*2+w
r=Math.cos(s)
q=Math.sin(s)
$.V()
p=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
p.c=v
p.r=A.bM.j(0.06).gp(0)
o=p.H()
u.drawLine.apply(u,[a1,a2,a1+r*a3*1.2,a2+q*a3*1.2,o])
o.delete()}n=a3*0.16
m=a3*0.17
a2=a2-m-m
l=new B.aI($.V().r,A.ai,null,null,B.a([],x.v))
w=n/2
v=a1-w
l.D(new B.b0(v,a2))
w=a1+w
l.D(new B.ap(w,a2))
r=a2+m*0.75
q=n*0.1
p=a1+q
k=a2+m*0.8
l.D(new B.c8(w,r,p,k))
w=a2+m*0.95
l.D(new B.ap(p,w))
p=n*0.3
j=a2+m
l.D(new B.ap(a1+p,j))
l.D(new B.ap(a1-p,j))
q=a1-q
l.D(new B.ap(q,w))
l.D(new B.ap(q,k))
l.D(new B.c8(v,r,v,a2))
l.D(new B.bv())
r=v+n
for(w=[-1,1],q=a3*0.012,p=a2+m*0.25,k=n*0.4,i=m*0.35,h=0;h<2;++h){g=w[h]
f=B.bN(new B.t(a1+g*n*0.5,p),i,k)
e=g<0?1.5707963267948966:-1.5707963267948966
d=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
d.b=A.ac
d.c=q
d.r=A.az.gp(0)
o=d.H()
u.drawArc.apply(u,[B.bQ(f),e*57.29577951308232,180,!1,o])
o.delete()}a1=B.K()
a1.sar(new B.a9(A.a3,A.a8,A.x,D.djX,A.ax9,null).aA(0,new B.a5(v,a2,r,j)))
a4.aJ(l,a1)
a0=A.k.F(a6*0.6,1.4)
if(a0<1)this.rN(a4,new B.t(v+(r-v)*a0,a2+(j-a2)*0.3),a3*0.035,A.c,Math.sin(a0*3.141592653589793))
this.bHX(a4,a5,a6,60)},
bHX(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m,l=e.a,k=e.b,j=Math.min(l,k)
for(w=Math.max(4,A.k.V(g*this.d)),v=k+20,k=f*j,u=d.a,t=f*3,s=j*0.012,r=j*0.02,q=f*4,p=0;p<w;++p){o=A.k.F(k*(0.1+0.1*C.cZ(p,31))+C.cZ(p,32)*v,v)
n=C.cZ(p,33)
J.bq(u.save())
u.translate(n*l,o-10)
u.rotate((t+p)*180/3.141592653589793,0,0)
o=B.bN(A.J,r*A.k.E(Math.abs(Math.cos(q+p)),0.2,1),s)
$.V()
n=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
n.r=D.Q9[A.o.F(p,5)].gp(0)
m=n.H()
u.drawRect(B.bQ(o),m)
m.delete()
u.restore()}},
cum(a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a1.a,d=Math.min(e,a1.b)
this.lN(a0,a1,a2,70,A.c,250)
for(w=Math.max(4,A.k.V(12*this.d)),v=-d*0.1,u=d*1.4,t=-0.6*u,s=x.O,r=d*0.006,q=a0.a,p=d*0.018,o=0;o<w;++o){n=1.6+C.cZ(o,1)*1.6
m=A.k.F(a2+C.cZ(o,2)*n,n)/n
l=e*(C.cZ(o*7+A.k.bm((a2+C.cZ(o,2)*n)/n),3)*1.2-0.1)
k=l+t*m
j=v+u*m
i=new B.t(k,j)
h=Math.max(0,m-0.18)
l+=t*h
h=v+u*h
$.V()
g=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
g.sar(new B.a9(A.a3,A.a8,A.x,B.a([A.c.j(0),A.bM],s),null,null).aA(0,B.rG(new B.t(l,h),i)))
g.c=r
g.d=A.bG
f=g.H()
q.drawLine.apply(q,[l,h,k,j,f])
f.delete()
this.rN(a0,i,p,A.c,1-m)}},
bD1(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=e.a,i=e.b,h=Math.min(j,i)
for(w=Math.max(4,A.k.V(36*this.d)),v=f*0.2,u=f*0.17,t=f*0.8,s=d.a,r=0;r<w;++r){q=h*(0.03+0.09*C.cZ(r,1))
p=A.k.F(C.cZ(r,2)*j+Math.sin(v+r)*h*0.12,j)
o=A.k.F(C.cZ(r,3)*i+Math.cos(u+r*1.3)*h*0.1,i)
n=0.12+0.18*(0.5+0.5*Math.sin(t+r))
$.V()
m=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
l=A.o.F(r,5)
m.r=D.azL[l].j(n).gp(0)
m.a=A.oH
m.z=new B.hC(A.G,q*0.12)
k=m.H()
s.drawCircle(p,o,q,k)
k.delete()
m=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
m.b=A.ac
m.c=Math.max(0.6,q*0.05)
m.r=D.azL[l].j(n*1.4).gp(0)
k=m.H()
s.drawCircle(p,o,q,k)
k.delete()}},
cfA(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=e.a,i=e.b,h=Math.min(j,i)
j/=2
i/=2
for(w=d.a,v=f*0.05,u=h*0.003,t=h*0.012,s=h*0.03,r=h*0.02,q=0;q<4;++q){J.bq(w.save())
w.translate(j,i)
w.rotate((q*3.141592653589793/4+v)*180/3.141592653589793,0,0)
p=B.bN(A.J,h*(0.28+q*0.05),h*(0.8+q*0.12))
$.V()
o=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
o.b=A.ac
o.c=u
o.r=A.bM.j(0.45).gp(0)
n=o.H()
w.drawOval(B.bQ(p),n)
n.delete()
m=f*(0.9+q*0.25)+q
o=Math.cos(m)*(p.c-p.a)/2
l=Math.sin(m)*(p.d-p.b)/2
k=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
k.r=A.hQ.gp(0)
n=k.H()
w.drawCircle(o,l,t,n)
n.delete()
k=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
k.r=A.hP.j(0.4).gp(0)
k.z=new B.hC(A.G,r)
n=k.H()
w.drawCircle(o,l,s,n)
n.delete()
w.restore()}this.lN(d,e,f,45,A.bM,270)},
bQ7(a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=a6.a,a3=a6.b,a4=Math.min(a2,a3)
for(w=Math.max(4,A.k.V(22*this.d)),v=a5.a,u=x.O,t=a7*0.3,s=a2*0.94,r=a2*0.06,q=a3*0.92,p=a3*0.08,o=0;o<w;++o){n=A.o.F(o,4)
m=C.cZ(o,1)
A:{if(0===n){l=new B.t(m*a2,p)
break A}if(1===n){l=new B.t(m*a2,q)
break A}if(2===n){l=new B.t(r,m*a3)
break A}l=new B.t(s,m*a3)
break A}k=A.k.F(a7+C.cZ(o,2)*4,4)/4
j=A.ew.aw(0,A.k.E(k/0.4,0,1))
i=k>0.85?1-(k-0.85)/0.15:1
h=a4*(0.03+0.03*C.cZ(o,3))*(j*i)
if(h<=0.5)continue
g=D.d8d[A.o.F(o,5)]
J.bq(v.save())
v.translate(l.a,l.b)
v.rotate((t+o)*180/3.141592653589793,0,0)
for(l=-h*0.7,j=h*0.7,i=h*1.3,f=h*1.4,e=0;e<6;++e){v.rotate(59.99999999999999,0,0)
d=B.bN(new B.t(0,l),i,j)
$.V()
a0=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
a0.sar(new B.a9(A.b3,A.b6,A.x,B.a([A.c,g],u),null,null).aA(0,B.bN(new B.t(0,l),f,h)))
a1=a0.H()
v.drawOval(B.bQ(d),a1)
a1.delete()}$.V()
l=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
l.r=A.hP.gp(0)
a1=l.H()
v.drawCircle(0,0,h*0.3,a1)
a1.delete()
v.restore()}this.lN(a5,a6,a7,30,A.hQ,280)},
c3L(a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=a6.a,a3=a6.b,a4=Math.min(a2,a3)
for(w=[0,1],v=a4*0.008,u=a5.a,t=a7*0.6,s=a3/2,r=0;r<2;++r){q=w[r]
for(p=q===0,o=a2*q,n=0;n<4;++n){m=A.k.F(t+n/4,1)
l=B.bX(new B.t(o,s),a4*(0.1+0.6*m))
k=p?-1.0471975511965976:2.0943951023931953
$.V()
j=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
j.b=A.ac
j.c=v
j.r=D.awf[n].j((1-m)*0.8).gp(0)
i=j.H()
u.drawArc.apply(u,[B.bQ(l),k*57.29577951308232,119.99999999999999,!1,i])
i.delete()}}for(w=Math.max(4,A.k.V(26*this.d)),h=a3+30,v=a7*a4,t=a7*1.5,g=0;g<w;++g){f=a3-A.k.F(v*(0.06+0.06*C.cZ(g,1))+C.cZ(g,2)*h,h)
e=C.cZ(g,3)*a2+Math.sin(t+g)*a4*0.04
d=a4*(0.015+0.012*C.cZ(g,4))
a0=D.awf[A.o.F(g,4)]
$.V()
a1=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
a1.r=a0.gp(0)
J.bq(u.save())
u.translate(e,f)
u.rotate(-17.188733853924695,0,0)
s=B.bN(A.J,d,d*1.5)
i=a1.H()
u.drawOval(B.bQ(s),i)
i.delete()
u.restore()
s=e+d*0.65
p=f-d*2.6
o=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
o.r=a0.gp(0)
o.c=Math.max(1,d*0.18)
i=o.H()
u.drawLine.apply(u,[s,f,s,p,i])
i.delete()
if((g&1)===0){o=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
o.r=a0.gp(0)
o.c=Math.max(1,d*0.3)
i=o.H()
u.drawLine.apply(u,[s,p,e+d*1.6,f-d*2,i])
i.delete()}}},
c2b(a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=a8.a,a5=a8.b,a6=Math.min(a4,a5)
a4/=2
a5/=2
w=new B.t(a4,a5)
for(v=a7.a,u=a6*0.004,t=a6*0.003,s=x.v,r=a9*0.08,q=0;q<4;++q){p=8+q*4
o=a6*(0.2+q*0.11)
n=(q&1)===0?1:-1
J.bq(v.save())
v.translate(a4,a5)
v.rotate(r*n*(1+q*0.3)*180/3.141592653589793,0,0)
for(m=-o,l=m*1.16,k=q/3,j=m*0.12,i=m*0.82,h=o*0.12,g=m*1.12,f=6.283185307179586/p*180/3.141592653589793,e=0;e<p;++e){v.rotate(f,0,0)
d=$.V()
a0=B.a([],s)
a1=new B.aI(d.r,A.ai,a3,a3,a0)
a0.push(new B.b0(0,i))
a0.push(new B.c8(h,m,0,g))
a0.push(new B.c8(j,m,0,i))
d=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
d.b=A.ac
d.c=t
d.r=B.ar(A.bM,A.nO,k).j(0.7).gp(0)
a2=d.H()
d=a1.gbB().a.snapshot()
v.drawPath((a1.e=new B.cv(d)).a,a2)
a2.delete()
d=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
d.r=A.hQ.j(0.8).gp(0)
a2=d.H()
v.drawCircle(0,l,u,a2)
a2.delete()}v.restore()}a4=a6*0.17
$.V()
a5=B.K()
a5.sar(new B.c0(A.A,0.5,A.x,a3,0,B.a([A.hP.j(0.25),D.XN],x.O),a3,a3).aA(0,B.bX(w,a4)))
a7.ae(w,a4,a5)
this.lN(a7,a8,a9,30,A.bM,300)},
cwJ(b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=b1.a,a8=b1.b,a9=Math.min(a7,a8)
for(w=[-1,1],v=70*this.d,u=a9*0.003,t=b0.a,s=a7/2,a8*=0.95,r=b2*1.3,q=a9*0.008,p=a9*0.06,o=x.O,n=0;n<2;++n){m=w[n]
l=s+m*a7*0.34
k=Math.sin(r+m)*0.12
j=l+(Math.sin(k)*a9*0.45-m*a9*0.08)
i=a8+-Math.cos(k)*a9*0.45
$.V()
h=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
h.r=A.bl.gp(0)
h.c=q
h.d=A.bG
g=h.H()
t.drawLine.apply(t,[l,a8,j,i,g])
g.delete()
l=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
l.sar(new B.c0(A.A,0.5,A.x,null,0,B.a([A.hQ,A.hP.j(0.6),D.XN],o),null,null).aA(0,B.bX(new B.t(j,i),p)))
g=l.H()
t.drawCircle(j,i,p,g)
g.delete()
for(l=Math.max(4,A.k.V(v)),f=0;f<l;++f){e=0.5+0.4*C.cZ(f,1)
d=A.k.F(b2+C.cZ(f,2)*e,e)/e
a0=A.k.bm((b2+C.cZ(f,2)*e)/e)
a1=C.cZ(f*31+a0,3)*3.141592653589793*2
a2=a9*(0.06+0.16*C.cZ(f*17+a0,4))
h=Math.cos(a1)
a3=Math.sin(a1)
a4=j+Math.cos(a1)*a2*d
a5=i+Math.sin(a1)*a2*d
a6=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
a6.r=B.ar(A.hQ,A.aE,d).j(1-d).gp(0)
a6.c=Math.max(0.8,u)
a6.d=A.bG
a6.a=A.oH
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
g.delete()}}}this.lN(b0,b1,b2,35,A.bM,310)},
bGB(a9,b0,b1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=b0.a,a8=b0.b
this.aT6(a9,new B.au(a7,a8*0.75),b1*0.9)
w=Math.min(a7,a8)
for(v=w*0.01,u=w*0.008,t=w*0.012,s=w*0.016,r=a9.a,q=w*0.025,p=w*0.035,o=0,n=0;o<a7;){m=w*(0.08+0.1*C.cZ(n,1))
l=a8*(0.14+0.24*C.cZ(n,2))
k=a8-l
j=new B.a5(o,k,o+m,k+l)
$.V()
i=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
i.sar(D.c1Z.aA(0,j))
h=i.H()
r.drawRect(B.bQ(j),h)
h.delete()
g=A.k.bm(m/q)
f=A.k.bm(l/p)
for(i=o+u,k+=t,e=n*50,d=0;d<g;++d)for(a0=i+d*w*0.025,a1=a0+t,a2=e+d,a3=d*1.7,a4=0;a4<f;++a4){if(!(Math.sin(b1*(0.3+C.cZ(a2,a4))+a3+a4*2.3+n)>0.2))continue
a5=k+a4*w*0.035
$.V()
a6=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
a6.r=A.bM.j(0.85).gp(0)
h=a6.H()
r.drawRect(B.bQ(new B.a5(a0,a5,a1,a5+s)),h)
h.delete()}o+=m+v;++n}},
av(d){return d.b!==this.b||d.d!==this.d}}
C.b_n.prototype={
B(d){var w,v=null,u=new C.cbw(),t=new C.cby(this,u,d),s=B.a([u.$4$child$label$onTap$selected(B.p(v,D.ap1,A.f,A.c.j(0.05),v,v,v,v,v,v,v,v,v,v),"None",new C.cbx(this),this.c.a.length===0)],x.p)
for(w=0;w<32;++w)s.push(t.$1(D.Hh[w]))
return B.bW(A.bD,s,A.bq,12,10)}}
C.Zv.prototype={
U(){return new C.aAe()}}
C.aAe.prototype={
gvL(){var w=this.d
return w===$?this.d=this.a.c:w},
gb_8(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new B.as(new B.bb(w.b,A.b4,A.aO),$.ax())}return v},
gaxP(){var w,v,u=this,t=u.f
if(t===$){w=u.a.c.gaLf()
v=$.ax()
u.f!==$&&B.bF()
t=u.f=new B.as(new B.bb(w,A.b4,A.aO),v)}return t},
t(){var w=this.gb_8(0),v=$.ax()
w.T$=v
w.P$=0
w=this.gaxP()
w.T$=v
w.P$=0
this.a1()},
a_h(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$a_h=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hV().Ca(90,700,700,A.eJ),$async$a_h)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fj(),$async$a_h)
case 8:p=e
o=q.b.toLowerCase()
n=J.ai2(o,".png")?"image/png":"image/jpeg"
r.m(new C.dbz(r,n,p))
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
return B.i($async$a_h,v)},
b_7(d){var w=null,v=A.c.j(0.07)
return B.bs(w,new B.b5(4,B.m(12),A.a0),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,A.Ui,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=C.ah6(p.gvL().a)
if(n==null)n=A.d.gI(D.Hh)
w=p.gvL()
v=p.r
u=x.p
v=B.E(new B.an(A.a_,o,A.aa,A.t,B.a([B.bU(0,new C.NF(p.gvL(),!1,!0,new B.cs(w.a+v,x.W)),0,0,0),B.ao(o,B.I_(A.mM,new C.dbE(d),B.nG(o,A.aW,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o),o,o,8,o,8,o),B.ao(o,B.I_(D.bMc,new C.dbF(p),B.nG(o,A.aW,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),"Play again"),o,o,o,8,8,o)],u),o),1)
w=B.d(n.b,o,o,o,o,o,o,E.aRR,o,o,o)
t=B.E(B.aN(o,A.X,!1,o,!0,A.t,o,B.aO(),p.gb_8(0),o,o,o,o,o,2,p.b_7("Big words"),A.y,!0,o,!0,o,!1,o,A.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.dbG(p),o,o,o,!1,o,o,!1,o,!0,o,A.a9,o,o,o,o,o,o,o,o,o,o,o,A.fO,!0,A.a6,o,A.ao,o,o,o,o),1)
s=A.c.j(0.07)
r=B.I(A.hP.j(0.6),A.r,1)
if(p.gvL().d.length===0)q=D.bPA
else{q=C.hjt(p.gvL().d)
if(q==null)q=new Uint8Array(0)
q=B.hT(B.fO(q,A.A,o,o,A.cf,A.bW,!1,o,!1,o,o),A.aq)}r=B.a([t,A.ab,B.aB(o,B.p(o,q,A.f,o,o,new B.o(s,o,r,o,o,o,A.a5),o,48,o,o,o,o,o,48),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gc9w(),o,o,o,o,o,o,!1,A.a4)],u)
if(p.gvL().d.length!==0)r.push(B.aJ(o,o,o,o,D.a1W,o,o,o,new C.dbH(p),o,o,o,o,"Remove logo",o))
return B.c5(o,A.w,B.bm(!0,B.x(B.a([v,B.p(o,B.x(B.a([w,A.R,B.B(r,A.m,o,A.e,A.j,0,o,o),A.N,B.aN(o,A.X,!1,o,!0,A.t,o,B.aO(),p.gaxP(),o,o,o,o,o,2,p.b_7("Line under it"),A.y,!0,o,!0,o,!1,o,A.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.dbI(p),o,o,o,!1,o,o,!1,o,!0,o,A.a9,o,o,o,o,o,o,o,o,o,o,o,A.df,!0,A.a6,o,A.ao,o,o,o,o),A.ad,B.dq(D.bOt,D.fL2,new C.dbJ(p,d),B.bp(A.az,o,o,o,A.w,o,A.cj,o,new B.b7(B.m(14),A.a0),o,o,o))],u),A.aj,o,A.e,A.P,0,A.p),A.f,o,o,D.b2E,o,o,o,o,A.FO,o,o,o)],u),A.m,o,A.e,A.j,0,A.p),!0,!1,A.af,!0,!0),o,!1,!1,o,o)}}
C.aLM.prototype={
t(){var w=this,v=w.aa$
if(v!=null)v.a6(0,w.gbE())
w.aa$=null
w.a1()},
aW(){this.b6()
this.b5()
this.bF()}}
C.ZQ.prototype={
U(){return new C.bgr(new B.as(A.at,$.ax()))}}
C.bgr.prototype={
t(){var w=this.d
w.T$=$.ax()
w.P$=0
this.a1()},
B(d){var w,v,u,t,s,r,q,p,o=null,n=B.P(d).ax.a===A.I,m=n?A.c:A.M,l=n?A.aQ:A.al,k=B.aH(d,A.bX,x.w).w,j=n?A.M:A.c,i=B.m(28),h=B.I(n?A.bz:A.aM,A.r,1),g=x.p,f=B.B(B.a([B.E(B.d("Choose an icon",o,o,o,o,o,o,B.l(o,o,m,o,o,o,o,o,o,o,o,19,o,o,A.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),1),B.aJ(o,o,o,o,B.X(A.cx,l,o,o,o,o),o,o,o,new C.dik(d),o,o,o,o,o,o)],g),A.m,o,A.e,A.j,0,o,o),e=B.a([],g)
for(w=0;w<5;++w){v=D.cT2[w]
u=B.a([],g)
for(t=J.aV(v.b);t.C();){s=t.gR(t)
r=new B.aQ(12,12)
q=new B.aQ(12,12)
p=n?A.c.j(0.06):A.bN
u.push(B.aM(!1,new B.bk(r,r,r,r),!0,B.p(A.A,new B.y(s,o,A.pt,o,o,o,o,o,o,o,o,o),A.f,o,o,new B.o(p,o,o,new B.bk(q,q,q,q),o,o,A.n),o,44,o,o,o,o,o,44),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.dil(this,s),o,o,o,o,o,o,o))}A.d.v(e,B.a([new B.D(A.hE,new B.y(v.a.toUpperCase(),o,new B.F(!0,l,o,o,o,o,10.5,A.u,o,1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o,o,o,o,o,o,o),o),new B.Cv(A.bD,6,6,A.bq,u,o)],g))}e.push(A.aA)
e.push(B.d("YOUR OWN",o,o,o,o,o,o,B.l(o,o,l,o,o,o,o,o,o,o,o,10.5,o,o,A.u,o,o,!0,o,1,o,o,o,o,o,o),o,o,o))
e.push(A.N)
v=B.l(o,o,m,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
u=n?A.bn:A.aP
e.push(B.B(B.a([B.E(B.aN(o,A.X,!1,o,!0,A.t,o,B.aO(),this.d,o,o,o,o,o,2,B.bs(o,new B.b5(4,B.m(14),A.a0),o,o,o,o,o,o,!0,o,o,o,o,o,o,u,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,"Type or paste any icon",o,o,o,o,o,!0,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),A.y,!0,o,!0,o,!1,o,A.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,A.a9,o,o,o,o,o,o,o,o,o,o,o,v,!0,A.a6,o,A.ao,o,o,o,o),1),A.ab,B.bH(A.aSP,new C.dim(this),o)],g),A.m,o,A.e,A.j,0,o,o))
e.push(A.N)
return B.bm(!0,B.p(o,B.x(B.a([f,new B.ds(1,A.cn,B.cq(e,o,o,o,o,A.ag,!0),o)],g),A.E,o,A.e,A.P,0,A.p),A.f,o,new B.aY(0,1/0,0,k.a.b*0.8),new B.o(j,o,h,i,o,o,A.n),o,o,o,A.tY,A.ZG,o,o,o),!0,!1,A.af,!0,!0)}}
C.bfN.prototype={
a5(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=new B.eb()
a2.d5(this.c)
w=this.b
v=w/6.283185307179586
$.V()
u=B.K()
u.z=A.RN
t=B.K()
for(s=a3.a,r=this.d,q=w*2,p=a4.a,o=a4.b,n=0;n<46;++n){m=a2.aj()
l=a2.aj()
k=a2.aj()
j=0.8+a2.aj()*2.2
i=Math.sin(w*(3+a2.au(4))+n)
h=A.k.F(l-v*(0.4+k*0.9),1)
k=(m+Math.sin(q+n)*0.012)*p
g=h*o
if(a2.aj()<0.25){f=B.ar(r,A.c,0.85)
f.toString}else f=r
e=f.j(A.k.E(0.35+i*0.35,0.05,0.85))
u.r=e.j(e.a*0.5).gp(0)
d=u.H()
s.drawCircle(k,g,j*2.4,d)
d.delete()
t.r=e.gp(0)
d=t.H()
s.drawCircle(k,g,j,d)
d.delete()
if(i>0.85&&j>2){a0=j*4*(i-0.85)/0.15
$.V()
a1=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
a1.r=e.gp(0)
a1.c=1
d=a1.H()
s.drawLine.apply(s,[k-a0,g,k+a0,g+0,d])
d.delete()
d=a1.H()
s.drawLine.apply(s,[k,g-a0,k+0,g+a0,d])
d.delete()}}},
av(d){return d.b!==this.b}}
C.bfv.prototype={
a5(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null,a1=B.bz(new B.a5(0,0,0+a7.a,0+a7.b),A.kK),a2=this.b,a3=Math.sin(a2*2),a4=$.V(),a5=B.K()
a5.b=A.ac
a5.c=6
w=this.c
a5.r=w.j(0.12+(0.5+a3*0.5)*0.18).gp(0)
a5.z=A.mQ
a6.aD(a1,a5)
a5=x.v
a4=new B.aI(a4.r,A.ai,a0,a0,B.a([],a5))
a4.D(new B.iN(a1))
v=new B.SQ(new B.tk(B.xi(a4),!1,B.a([],x.X))).gI(0)
a4=v.a
a3=v.b
a4.ii()
u=a4.e
t=u[a3].b
t===$&&B.c()
t=t.a.length()
s=a2/6.283185307179586*t
w=B.ar(w,A.c,0.8)
w.toString
for(a2=a4.a,r=a2.a,q=a6.a,p=t*0.14,o=0;o<2;++o){n=A.k.F(s+o*t/2,t)
for(m=0;m<10;m=l){l=m+1
k=l/10
$.V()
j=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
j.b=A.ac
j.d=A.bG
j.c=1.5+2*m/10
j.r=w.j(k).gp(0)
i=A.k.F(n-p*(1-m/10),t)
h=A.k.F(n-p*(1-k),t)
k=a2.b
if(i<=h){k=new B.aI(r,k,a0,new B.cw([v,i,h,!0]),B.a([],a5))
g=j.H()
f=k.gbB().a.snapshot()
q.drawPath((k.e=new B.cv(f)).a,g)
g.delete()}else{k=new B.aI(r,k,a0,new B.cw([v,i,t,!0]),B.a([],a5))
g=j.H()
f=k.gbB().a.snapshot()
q.drawPath((k.e=new B.cv(f)).a,g)
g.delete()
k=new B.aI(r,a2.b,a0,new B.cw([v,0,h,!0]),B.a([],a5))
g=j.H()
f=k.gbB().a.snapshot()
q.drawPath((k.e=new B.cv(f)).a,g)
g.delete()}}a4.ii()
e=u[a3].H2(n).a
$.V()
k=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
k.r=w.gp(0)
k.z=A2.ph
g=k.H()
k=e.a
f=e.b
q.drawCircle(k,f,5,g)
g.delete()
d=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
d.r=A.c.gp(0)
g=d.H()
q.drawCircle(k,f,2,g)
g.delete()}},
av(d){return d.b!==this.b}}
C.boh.prototype={
a5(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=new B.eb()
e.d5(this.c)
w=a0.a*(0.2+e.aj()*0.6)
v=e.he()?-0.1:1.1
v=a0.b*v
u=new B.t(w,v)
t=a0.gamV()*1.4
for(s=this.d,r=x.O,q=d.a,p=this.b,o=p*0.25,p*=2,n=x.v,m=0;m<14;++m){l=o+m*3.141592653589793*2/14
k=0.06+0.04*Math.sin(p+m)
j=$.V()
i=B.a([],n)
h=new B.aI(j.r,A.ai,f,f,i)
i.push(new B.b0(w,v))
j=l-k
i.push(new B.ap(w+Math.cos(j)*t,v+Math.sin(j)*t))
j=l+k
i.push(new B.ap(w+Math.cos(j)*t,v+Math.sin(j)*t))
i.push(new B.bv())
j=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
j.sar(B.Bv(u,t,B.a([s.j(0.16),s.j(0)],r),f,A.x,f,f,0))
j.z=A.lI
g=j.H()
j=h.gbB().a.snapshot()
q.drawPath((h.e=new B.cv(j)).a,g)
g.delete()}},
av(d){return d.b!==this.b}}
C.bao.prototype={
a5(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=new B.eb()
a0.d5(this.c*7+3)
for(w=a1.a,v=this.d,u=a2.a,t=Math.abs(u),s=a2.b,r=Math.abs(s),q=this.b,p=q*0.8,o=q*2,n=0;n<16;++n){m=a0.aj()
l=a0.aj()
k=Math.min(t,r)*(0.03+a0.aj()*0.09)
j=a0.aj()*3.141592653589793*2
i=(m+Math.sin(q+j)*0.04)*u
h=(l+Math.cos(p+j)*0.05)*s
g=0.08+0.1*(0.5+0.5*Math.sin(o+j))
if((n&1)===0)f=v
else{e=B.ar(v,A.c,0.6)
e.toString
f=e}$.V()
e=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
e.r=f.j(g).gp(0)
e.z=new B.hC(A.G,k*0.35)
d=e.H()
w.drawCircle(i,h,k,d)
d.delete()
e=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
e.b=A.ac
e.c=1
e.r=B.ar(f,A.c,0.5).j(g*0.9).gp(0)
d=e.H()
w.drawCircle(i,h,k,d)
d.delete()}},
av(d){return d.b!==this.b}}
C.ba2.prototype={
a5(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=new B.eb()
a0.d5(this.c+11)
for(w=this.b,v=a2.b,u=v*0.04,t=a1.a,s=this.d,r=v*0.08,q=a2.a,p=q/24,o=w*2,n=x.v,m=0;m<3;++m){l=v*(0.25+m*0.25+(a0.aj()-0.5)*0.1)
k=v*(0.06+a0.aj()*0.05)
j=a0.aj()*3.141592653589793*2
i=$.V()
h=B.a([],n)
g=new B.aI(i.r,A.ai,null,null,h)
h.push(new B.b0(0,l))
for(f=0;f<=q;f+=p){i=f/q
i=new B.ap(f,l+Math.sin(i*3.141592653589793*2+w+j)*k+Math.sin(i*7+o)*k*0.25)
h.push(i)
e=g.f
if(e!=null)i.by(e)
i=g.e
if(i!=null)i.a.delete()
g.e=null}$.V()
i=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
i.b=A.ac
i.c=r
i.d=A.bG
if(m===1){h=B.ar(s,A.c,0.5)
h.toString}else h=s
i.r=h.j(0.07+0.04*Math.sin(w+m)).gp(0)
i.z=new B.hC(A.G,u)
d=i.H()
i=g.e
t.drawPath((i==null?g.e=new B.cv(g.gbB().a.snapshot()):i).a,d)
d.delete()}},
av(d){return d.b!==this.b}}
C.bvc.prototype={
a5(d,e){var w,v,u=new B.a5(0,0,0+e.a,0+e.b),t=Math.sin(this.b)
$.V()
w=B.K()
t=(0.5+0.5*t)*0.12
w.sar(new B.c0(A.A,0.95,A.x,null,0,B.a([A.K,A.w.j(0.28+t)],x.O),D.d_C,null).aA(0,u))
d.aU(u,w)
w=u.ct(-3)
v=B.K()
v.b=A.ac
v.c=2
v.r=this.c.j(0.1+t).gp(0)
v.z=A.lI
d.aU(w,v)},
av(d){return d.b!==this.b}}
C.bsd.prototype={
a5(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this.b/6.283185307179586*3
for(w=a1.a,v=Math.abs(w),u=a1.b,t=Math.abs(u),s=this.d,r=a0.a,q=this.c*31+A.k.bm(d)*7,p=0;p<7;++p){o=new B.eb()
o.d5(q+p)
n=o.aj()*w
m=o.aj()*u
l=Math.sin(A.k.F(A.k.F(d,1)+p/7,1)*3.141592653589793)
if(l<0.05)continue
k=Math.min(v,t)*(0.02+o.aj()*0.025)*l
j=B.ar(s,A.c,0.7).j(l)
$.V()
i=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
i.r=j.gp(0)
i.c=1.4
i.d=A.bG
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
g=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
g.r=A.c.j(l*0.9).gp(0)
g.z=new B.hC(A.G,k*0.3)
h=g.H()
r.drawCircle(n,m,k*0.35,h)
h.delete()}},
av(d){return d.b!==this.b}}
C.brm.prototype={
a5(d,e){var w,v,u=this.b/6.283185307179586*2.2-0.6
if(u<-0.3||u>1.3)return
w=new B.a5(0,0,0+e.a,0+e.b)
$.V()
v=B.K()
v.a=A.oH
v.sar(new B.a9(A.ay,A.aD,A.x,B.a([A.K,B.ar(this.c,A.c,0.6).j(0.16),A.K],x.O),B.a([A.k.E(u-0.15,0,1),A.k.E(u,0,1),A.k.E(u+0.15,0,1)],x.x),null).aA(0,w))
d.aU(w,v)},
av(d){return d.b!==this.b}}
C.beQ.prototype={
a5(d,e){var w,v,u,t,s,r=e.gdB(),q=0.55+0.45*Math.sin(this.b)
$.V()
w=B.K()
w.b=A.ac
w.c=1.4
w.d=A.bG
v=this.d
w.r=v.j(0.55+q*0.35).gp(0)
u=B.K()
u.b=A.ac
u.c=4
u.r=v.j(0.12*q).gp(0)
u.z=A.uE
r=new C.dbg(this,r*0.16,d,u,w)
t=e.gdB()*0.045
r.$3(new B.t(t,t),1,1)
v=e.a-t
r.$3(new B.t(v,t),-1,1)
s=e.b-t
r.$3(new B.t(t,s),1,-1)
r.$3(new B.t(v,s),-1,-1)},
av(d){return d.b!==this.b}}
C.xJ.prototype={}
C.J_.prototype={
a4(){return"NgmySlideElementType."+this.b}}
C.arv.prototype={
a4(){return"NgmySlideAspectRatio."+this.b}}
C.uP.prototype={
a4(){return"NgmySlideShapeKind."+this.b}}
C.mE.prototype={
a4(){return"NgmySlideLayout."+this.b}}
C.hF.prototype={
a4(){return"NgmySlideTransition."+this.b}}
C.eM.prototype={
hI(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=w.Q,l=w.as,k=w.at,j=w.ay,i=w.ch,h=w.cx,g=w.cy,f=w.db,e=w.dy,d=w.fy
return C.er(l,g,m,n,f,j,q,o,p,w.go,s,w.a,k,d,w.fx,w.dx,w.k2,w.id,h,w.ax,i,w.CW,r,w.fr,w.k3,w.k1,e,w.b,t,v,u)},
ag(){var w,v=this,u=B.T(x.N,x.z)
u.n(0,"id",v.a)
u.n(0,"type",v.b.b)
u.n(0,"x",v.c)
u.n(0,"y",v.d)
u.n(0,"w",v.e)
u.n(0,"h",v.f)
u.n(0,"text",v.r)
u.n(0,"fontSize",v.w)
u.n(0,"fontWeight",v.x.gdN(0))
u.n(0,"fontStyle",v.y.a)
u.n(0,"decoration",C.hY1(v.z))
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
C.lO.prototype={
hI(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=B.S(n).k("N<1,eM>")
n=B.C(new B.N(n,new C.cgX(),m),m.k("ak.E"))
return C.rD(t,s,o,q,n,w.a,u,v,p,w.b,r)},
ag(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=B.S(n).k("N<1,a8<n,@>>")
n=B.C(new B.N(n,new C.cgY(),m),m.k("ak.E"))
return B.G(["id",w.a,"title",w.b,"notes",v,"layout",u.b,"background",t,"backgroundEnd",s,"transition",r.b,"durationSeconds",q,"slideDesignId",p,"designRevision",o,"elements",n],x.N,x.z)}}
C.i4.prototype={
gbar(){var w=this.Q,v=w==null?null:A.a.i(w)
if(v==null)v=""
if(v.length===0)return null
return B.bi(v)},
gSt(){if(!C.kC(this.w))return!1
var w=this.gbar()
if(w==null)return!1
return new B.U(Date.now(),0,!1).d0(w.bU())},
hI(){var w,v,u,t,s,r,q,p=this,o=p.b,n=p.c,m=p.d,l=p.e,k=p.f,j=p.w,i=p.y,h=p.z,g=p.Q,f=p.as,e=p.at,d=p.ax,a0=p.ay,a1=p.ch,a2=p.CW,a3=p.cx
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
q=B.S(r).k("N<1,lO>")
r=B.C(new B.N(r,new C.cgM(),q),q.k("ak.E"))
return C.BW(g,w,a2,a3,m,l,a0,j,s,v,t,u,p.a,d,a1,p.x,o,e,f,r,n,i,h,k)},
ag(){var w,v,u=this,t=B.T(x.N,x.z)
t.n(0,"id",u.a)
t.n(0,"name",u.b)
t.n(0,"themeId",u.c)
t.n(0,"aspectRatio",u.d.b)
t.n(0,"autoAdvanceSeconds",u.e)
t.n(0,"updatedAt",u.f.a7().ad())
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
v=B.S(w).k("N<1,a8<n,@>>")
w=B.C(new B.N(w,new C.cgN(),v),v.k("ak.E"))
t.n(0,"slides",w)
return t}}
C.jL.prototype={}
C.b1w.prototype={
B(d){return B.cC(new C.cgS(this))}}
C.aoH.prototype={
U(){return new C.bjA(null,null)}}
C.bjA.prototype={
gb_9(){var w,v=this,u=v.d
if(u===$){w=B.bl(null,A.fS,null,1,null,v)
w.cM(0)
v.d!==$&&B.bF()
v.d=w
u=w}return u},
t(){this.gb_9().t()
this.bvA()},
B(d){return B.c9(this.gb_9(),new C.dJs(),this.a.c)}}
C.aLy.prototype={
t(){var w=this,v=w.aa$
if(v!=null)v.a6(0,w.gbE())
w.aa$=null
w.a1()},
aW(){this.b6()
this.b5()
this.bF()}}
C.adw.prototype={
Q3(d,e,f,g){return this.bPM(d,e,f,g)},
bPM(d,e,f,g){var w=0,v=B.j(x.H),u,t,s
var $async$Q3=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:w=3
return B.b(e.$0(),$async$Q3)
case 3:s=i
if(d.e==null){w=1
break}B.a3(d,!1).N(null)
t=d.J(x.q).f
t.S(B.b3(null,null,null,null,null,A.t,null,B.d(s?f:g,null,null,null,null,null,null,null,null,null,null),null,A.em,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$Q3,v)},
B(d){var w=this,v=null,u=B.m(22),t=B.I(A.c.j(0.08),A.r,1),s=B.a([new B.ac(0,A.G,A.w.j(0.35),A.dq,24)],x.V),r=B.at(B.p(v,v,A.f,v,v,new B.o(A.aZ,v,v,B.m(99),v,v,A.n),v,4,v,v,v,v,v,40),v,v,v),q=w.d,p=B.d(q?"Print your invoice":"Save your PDF",v,v,v,v,v,v,A.de,A.L,v,v),o=q?"One full letter page \u2014 tap Share then Print, or open in Safari.":w.c,n=q?3:2,m=x.p
n=B.a([r,A.aL,p,A.am,B.d(o,v,n,A.a2,v,v,v,B.l(v,v,A.c.j(0.55),v,v,v,v,v,v,v,v,12,v,v,A.a7,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v)],m)
if(!q)A.d.v(n,B.a([A.av,B.d(w.c,v,2,A.a2,v,v,v,B.l(v,v,A.c.j(0.45),v,v,v,v,v,v,v,v,11,v,v,A.a7,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v)],m))
n.push(A.d6)
n.push(B.B(B.a([B.E(new C.adN(A.hJ,"Download",A.c_,new C.esG(w,d),!0,v),1),A.as,B.E(new C.adN(A.uk,"Share",A.bj,new C.esH(w,d),!1,v),1),A.as,B.E(new C.adN(A.hr,"Safari",A.b_,new C.esI(w,d),!1,v),1)],m),A.m,v,A.e,A.j,0,v,v))
n.push(A.aA)
n.push(B.bK(!1,B.d("Cancel",v,v,v,v,v,v,B.l(v,v,A.c.j(0.6),v,v,v,v,v,v,v,v,v,v,v,A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,!0,v,v,new C.esJ(d),v,v))
return B.bm(!0,new B.D(A.q7,B.x(B.a([B.p(v,B.x(n,A.aj,v,A.e,A.j,0,A.p),A.f,v,v,new B.o(A.j3,v,t,u,s,v,A.n),v,v,v,v,A.FV,v,v,1/0)],m),A.m,v,A.e,A.P,0,A.p),v),!0,!1,A.af,!0,!0)}}
C.adN.prototype={
B(d){var w=this,v=null,u=B.m(16),t=w.r,s=t?w.e.j(0.22):A.c.j(0.06),r=B.m(16),q=B.I(t?w.e.j(0.55):A.c.j(0.1),A.r,1),p=t?w.e:A.c
p=B.X(w.c,p,v,v,v,26)
return B.aF(!1,A.a1,!0,v,B.aM(!1,u,!0,B.eF(B.x(B.a([p,A.N,B.d(w.d,v,v,v,v,v,v,B.l(v,v,A.c,v,v,v,v,v,v,v,v,12,v,v,t?A.u:A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.P,0,A.p),v,new B.o(s,v,q,r,v,v,A.n),v,D.bB8,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),A.f,A.K,0,v,v,v,v,v,A.ah)}}
C.b1u.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.c,f=g.db
if(f==="__kiapo_video__"||A.a.a0(f,"__kiapo_video___"))return new C.aqH(g.at,i.d,i.as,i.at,h)
switch(g.b.a){case 0:f=i.r
w=i.d
if(f){v=2*w
u=new B.Q(v,w,v,w)}else{v=6*w
u=new B.Q(v,10*w,v,12*w)}t=i.c9x().al_(1.35)
s=B.aw1(h,h,h,g.w*w,h,h,!0,1.35,h,h,h)
v=g.as
r=i.bAZ(v)
if(i.e&&i.w!=null)q=B.aN(h,A.X,!1,h,!0,A.t,h,B.aO(),i.w,A.bj,h,h,h,h,2,D.bXH,A.y,!0,h,!0,h,!1,i.x,A.ak,h,h,h,new B.cs("slide_tf_"+g.a,x.W),h,A.wN,h,h,h,h,1,h,!1,"\u2022",h,i.y,h,h,h,!1,h,h,!1,h,!0,h,A.a9,h,h,h,h,h,h,h,h,h,h,s,t,!0,v,A.zZ,A.ao,h,A.TZ,h,h)
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
w=n?t.cJK(B.b1(g.Q).j(0.45),A.cE):t
p=g.as
l=m?1:h
k=m?A.eK:A.DK
p=B.d(f,new B.cs("slide_txt_"+g.a+"_"+v,x.W),l,k,h,!m,s,w,p,h,h)
g=p}else{f=A.a.gX(v)
v=g.k1
p=g.r
if(v==="outline"){l=g.k2
k=l?A.TQ:s
$.V()
j=B.K()
j.b=A.ac
j.c=3*w
j.e=A.dS
j.r=A.au.gp(0)
j=i.cqm(p,t,k,j)
k=g.r
w=new B.an(A.a_,h,A.aa,A.t,B.a([j,i.cqk(k,t,l?A.TQ:s)],x.p),h)}else w=i.cql(p,t,g.k2?A.TQ:s,m)
v=new B.nm(w,new B.cs("slide_txt_"+g.a+"_"+f+"_"+v,x.W))
g=v}q=B.aB(A.cc,g,A.y,!1,h,i.Q,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,i.z,h,h,h,h,h,h,!1,A.a4)}return new B.D(u,new B.bL(r,h,h,q,h),h)
case 1:case 4:return i.bZl()
case 3:return i.chX()
case 2:return B.b4(h,h,h,new C.b1r(g,h),A.fL)
case 5:g=g.r
return new C.b1t(g,!i.e&&i.z==null,h)}},
c9x(){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.c,l=B.b1(m.Q),k=m.x,j=m.y,i=m.z,h=n,g=n,f=n,e=n
switch(m.k1){case"caps":h=3*o.d
w=l
k=A.u
break
case"elegant":h=1.2*o.d
w=l
k=A.kd
j=A.cE
break
case"shadow":v=o.d
e=B.a([new B.cS(D.af9,new B.t(0,4*v),8*v)],x.r)
w=l
break
case"neon":v=o.d
e=B.a([new B.cS(l,A.J,6*v),new B.cS(l,A.J,16*v),new B.cS(l.j(0.8),A.J,30*v)],x.r)
w=l
break
case"marker":k=A.u
g=A.bI
w=A.au
break
case"stamp":h=6*o.d
w=l
k=A.u
i=A.mW
break
case"retro":v=o.d
h=2*v
v=4*v
e=B.a([new B.cS(A.bA,new B.t(v,v),0)],x.r)
w=l
k=A.u
break
case"threed":v=B.ar(l,A.w,0.65)
v.toString
u=B.a([],x.r)
for(t=o.d,s=1;s<=6;++s){r=s*t
u.push(new B.cS(v,new B.t(r,r),0))}e=u
w=l
k=A.u
break
case"glitch":v=o.d
h=2*v
e=B.a([new B.cS(A.bc,new B.t(-3*v,0),0),new B.cS(A.aw,new B.t(3*v,0),0)],x.r)
w=l
k=A.u
break
case"fire":v=o.d
e=B.a([new B.cS(A.cZ,A.J,8*v),new B.cS(A.aw,new B.t(0,-3*v),18*v)],x.r)
k=A.u
w=X.AR
break
case"ice":v=o.d
e=B.a([new B.cS(A.aR,A.J,10*v),new B.cS(A.cC,A.J,22*v)],x.r)
k=A.O
w=A.eC
break
case"chalk":h=o.d
e=B.a([new B.cS(l.j(0.45),A.J,3*h)],x.r)
w=l
k=A.kd
break
case"comic":v=B.ar(l,A.w,0.85)
v.toString
u=B.a([],x.r)
for(t=o.d,q=0;q<8;++q){p=D.d1E[q]
u.push(new B.cS(v,new B.t(p.a*t,p.b*t),0))}u.push(new B.cS(v,new B.t(5*t,6*t),0))
e=u
w=l
k=A.u
break
case"gold":$.V()
f=B.K()
v=o.d
f.sar(D.c_p.aA(0,new B.a5(0,0,0+900*v,0+m.w*v*1.6)))
e=B.a([new B.cS(A.L7,new B.t(0,3*v),5*v)],x.r)
w=l
k=A.u
break
case"sunset":$.V()
f=B.K()
v=o.d
f.sar(D.c_K.aA(0,new B.a5(0,0,0+900*v,0+m.w*v*1.6)))
w=l
k=A.u
break
case"softglow":e=B.a([new B.cS(l,A.J,14*o.d)],x.r)
w=l
k=A.a7
break
case"lowercase":h=2*o.d
w=l
k=A.cw
break
case"double":v=o.d
u=5*v
v=10*v
e=B.a([new B.cS(l.j(0.45),new B.t(u,u),0),new B.cS(l.j(0.2),new B.t(v,v),0)],x.r)
w=l
break
case"whisper":h=6*o.d
w=l
k=A.kd
break
default:w=l}v=m.w
u=f==null?w:n
m=m.k3
m=m!==0?B.b1(m):g
return B.l(n,m,u,n,i,n,n,n,n,n,n,v*o.d,j,n,k,f,1.25,!0,n,h,n,n,n,e,n,n)},
azK(d,e,f,g,h){var w,v,u,t,s=null,r=this.c,q=r.k1
if(D.eY9.q(0,q))w=d.toUpperCase()
else w=q==="lowercase"?d.toLowerCase():d
q=new C.cgQ(h)
v=r.k2?C.i9N(w,e,q):s
if(v==null){q=q.$1(e)
r=r.as
u=g?1:s
t=g?A.eK:A.DK
return B.d(w,s,u,t,s,!g,f,q,r,s,s)}return B.Y0(B.cX(v,s,s,s,s,s,s,s,s,s,s),s,s,q.$1(e),r.as)},
cqm(d,e,f,g){return this.azK(d,e,f,!1,g)},
cqk(d,e,f){return this.azK(d,e,f,!1,null)},
cql(d,e,f,g){return this.azK(d,e,f,g,null)},
bAZ(d){switch(d.a){case 2:return A.A
case 1:case 5:return A.a8
default:return A.a3}},
bZl(){var w,v,u=this,t=null,s=u.c,r=s.at
if(r==null||!A.a.a0(r,"data:image")){if(!u.as)return A.bJ
return B.at(B.X(s.b===D.lf?A.GS:A.BV,A.aB,t,t,t,32),t,t,t)}w=u.bE1(r)
if(s.b===D.lf){s=B.m(6)
v=2*u.d
return B.p(t,w,A.f,t,t,new B.o(A.c,t,B.I(A.cr,A.r,1),s,B.a([new B.ac(0,A.G,A.w.j(0.08),A.dz,6)],x.V),t,A.n),t,1/0,t,t,new B.Q(v,v,v,v),t,t,1/0)}if(s.go.length!==0||s.id.length!==0){v=u.aOo(r,!0)
return C.fDp(s.go,v,s.id)}return w},
aOo(d,e){var w,v,u,t
try{w=C.ia6(d)
u=this.c.db
v=u==="marriage_locked_bg"||A.a.cc(u,"_bg")
u=B.cC(new C.cgP(this,w,v,e))
return u}catch(t){return D.acM}},
bE1(d){return this.aOo(d,!1)},
chX(){var w=this.c,v=w.at
if(v==null||v.length===0)return D.b81
return C.iao(v,w.db,w.dx)}}
C.b1r.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=$.V(),g=B.K(),f=this.b
g.r=B.b1(f.ay).gp(0)
w=B.K()
w.r=B.b1(f.ch).gp(0)
w.b=A.ac
v=f.CW
w.c=v
u=e.a
t=e.b
s=new B.a5(0,0,0+u,0+t)
switch(f.ax.a){case 0:d.aU(s,g)
d.aU(s,w)
break
case 1:d.dX(s,g)
d.dX(s,w)
break
case 2:r=new B.aI(h.r,A.ai,i,i,B.a([],x.v))
r.D(new B.b0(u/2,0))
r.D(new B.ap(u,t))
r.D(new B.ap(0,t))
r.D(new B.bv())
d.aJ(r,g)
d.aJ(r,w)
break
case 3:r=new B.aI(h.r,A.ai,i,i,B.a([],x.v))
h=t*0.45
r.D(new B.b0(0,h))
f=u*0.65
r.D(new B.ap(f,h))
r.D(new B.ap(f,t*0.2))
r.D(new B.ap(u,t*0.5))
r.D(new B.ap(f,t*0.8))
t*=0.55
r.D(new B.ap(f,t))
r.D(new B.ap(0,t))
r.D(new B.bv())
d.aJ(r,g)
d.aJ(r,w)
break
case 4:h=t/2
w.c=v+2
d.br(new B.t(0,h),new B.t(u,h),w)
break
case 5:q=u*0.22
r=new B.aI(h.r,A.ai,i,i,B.a([],x.v))
r.D(new B.b0(q,0))
r.D(new B.ap(u,0))
r.D(new B.ap(u-q,t))
r.D(new B.ap(0,t))
r.D(new B.bv())
d.aJ(r,g)
d.aJ(r,w)
break
case 6:p=u/2
o=t/2
n=Math.min(u,t)/2
f=B.a([],x.v)
r=new B.aI(h.r,A.ai,i,i,f)
for(m=0;m<6;++m){l=1.0471975511965976*m-0.5235987755982988
k=p+n*Math.cos(l)
j=o+n*Math.sin(l)
if(m===0){h=new B.b0(k,j)
f.push(h)
v=r.f
if(v!=null)h.by(v)
h=r.e
if(h!=null)h.a.delete()
r.e=null}else{h=new B.ap(k,j)
f.push(h)
v=r.f
if(v!=null)h.by(v)
h=r.e
if(h!=null)h.a.delete()
r.e=null}}r.D(new B.bv())
d.aJ(r,g)
d.aJ(r,w)
break}},
av(d){return d.b!==this.b}}
C.aJb.prototype={
U(){return new C.buJ(null,null)}}
C.buJ.prototype={
a_(){var w,v=this
v.a2()
w=B.bl(null,A.hD,null,1,null,v)
w.cM(0)
v.d!==$&&B.aP()
v.d=w},
t(){var w=this.d
w===$&&B.c()
w.t()
this.bxL()},
aOz(d,e){var w=null,v=B.a([e,e.j(0.7)],x.O),u=B.m(8)
return B.c1(B.at(B.d(d,w,w,w,w,w,w,A.de,w,w,w),w,w,w),new B.o(w,w,w,u,w,new B.a9(A.a3,A.a8,A.x,v,w,w),A.n),A.bf)},
bBc(){var w,v=this,u=null,t=v.aOz("Slide A",A.bj),s=v.aOz("Slide B",A.b_)
if(v.a.c===D.cl)return new B.an(A.a_,u,A.b1,A.t,B.a([t,B.at(B.d("No transition",u,u,u,u,u,u,B.l(u,u,A.c.j(0.7),u,u,u,u,u,u,u,u,16,u,u,A.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,u)],x.p),u)
w=v.d
w===$&&B.c()
return B.c9(w,new C.f71(v,s,t),u)},
B(d){return this.bBc()}}
C.aJO.prototype={
jh(d){return new B.a5(0,0,0+d.a*A.k.E(this.b,0,1),0+d.b)},
jX(d){return d.b!==this.b}}
C.Vh.prototype={
U(){return new C.bjL(null,null)}}
C.bjL.prototype={
a_(){var w,v,u=this
u.a2()
w=B.bl(null,A.Bn,null,1,null,u)
u.d!==$&&B.aP()
u.d=w
v=u.a
if(!v.e||v.c.dy===D.cl){w.sp(0,1)
return}B.bO(B.dE(0,0,0,v.c.fr+v.f*120,0,0),new C.dUG(u),x.a)},
bv(d){var w,v,u,t=this
t.bG(d)
w=d.c
v=t.a
u=v.c
if(w.a!==u.a||w.dy!==u.dy||d.f!==v.f){w=t.d
w===$&&B.c()
w.sp(0,w.a)
v=t.a
if(!v.e||v.c.dy===D.cl)w.sp(0,1)
else B.bO(B.dE(0,0,0,v.c.fr+v.f*120,0,0),new C.dUF(t),x.a)}},
t(){var w=this.d
w===$&&B.c()
w.t()
this.bvO()},
B(d){var w,v=this.a
if(v.c.dy===D.cl||!v.e)return v.d
w=this.d
w===$&&B.c()
return B.c9(w,new C.dUE(this),v.d)}}
C.IZ.prototype={
B(d){return B.cC(new C.cgI(this))}}
C.azX.prototype={
U(){return new C.bej()}}
C.bej.prototype={
a_(){this.a2()
if(this.a.c!==D.cl)B.bO(A.Mz,new C.d8v(this),x.a)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=4280172719,n=q.a.c
if(n===D.cl)n=B.at(B.d("No animation on elements",p,p,p,p,p,p,B.l(p,p,A.c.j(0.75),p,p,p,p,p,p,p,p,16,p,p,A.O,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p)
else{n=n.u(0)
w=q.d
v=x.W
u=q.a.c
w=B.ao(p,new C.Vh(C.er(A.bi,!1,4279310375,A.aF,"",4294538006,24,A.bp,A.a7,"",0.2,"preview_shape",p,"","",0,!1,"",0,D.bg,o,2,"",0,0,"",u,D.f8,0.84,0.08,0.12),B.p(p,p,A.f,p,p,new B.o(A.ca,p,p,B.m(14),p,p,A.n),p,72,p,p,p,p,p,72),!0,0,new B.cs("shape_"+n+"_"+w,v)),p,p,24,p,28,p)
u=u.u(0)
n=q.d
t=C.er(A.bi,!1,4294967295,A.aF,"",4280640491,22,A.bp,A.a7,"",0.2,"preview_text",p,"","",0,!1,"",0,D.bg,o,2,"Element flies in",0,0,"",q.a.c,D.cQ,0.84,0.08,0.12)
s=A.c.j(0.14)
r=B.m(14)
v=new B.an(A.a_,p,A.aa,A.t,B.a([w,B.ao(32,new C.Vh(t,B.p(p,D.fwt,A.f,p,p,new B.o(s,p,B.I(A.aZ,A.r,1),r,p,p,A.n),p,p,p,p,A.ja,p,p,1/0),!0,1,new B.cs("text_"+u+"_"+n,v)),p,p,24,24,p,p)],x.p),p)
n=v}return B.c1(n,D.b3d,A.bf)}}
C.a7T.prototype={
U(){return new C.bko(null,null)}}
C.bko.prototype={
gb_H(){var w=this.a
if(w.e)w=D.eYi.q(0,w.c)||D.aP_.q(0,A.d.gI(this.a.c.split("@")))
else w=!1
return w},
a_(){var w,v=this
v.a2()
if(v.gb_H()){w=C.i8q(v.a.c)
if(w==null){w=v.a.c
if(w==="drift")w=9000
else w=w==="pulse"?2600:4200}w=B.bl(null,B.dE(0,0,0,w,0,0),null,1,null,v)
w.cM(0)
v.d=w}},
t(){var w=this.d
if(w!=null)w.t()
this.bwh()},
B(d){var w,v=this,u=v.d
if(!v.gb_H()||u==null)return v.a.d
w=v.a
return B.c9(u,new C.ehj(v,u,A.o.F(w.f,7)/7*3.141592653589793*2),w.d)}}
C.b_q.prototype={
B(d){var w=null
return B.at(C.b1v(!0,w,!1,C.er(A.L,!1,this.e.l(),A.aF,"",4280640491,this.f,A.bp,A.a7,"",0.2,"fx",w,"","",0,!1,"",0,D.bg,4280172719,2,"Aa",0,0,this.c,D.cl,D.cQ,0.84,0.08,0.12),w,!1,w,w,w,1,!1,!0),w,w,w)},
gY(d){return this.f}}
C.bft.prototype={
jh(d){return C.a2B(this.b,new B.a5(0,0,0+d.a,0+d.b).ct(-this.c))},
jX(d){return d.b!==this.b||d.c!==this.c}}
C.bqj.prototype={
a5(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=new B.a5(0,0,0+a1.a,0+a1.b).ct(-this.d),g=this.b,f=C.a2B(g,h),e=a1.gdB(),d=new C.eX7()
switch(this.c){case"gold":w=d.$1(e*0.045)
w.sar(D.aQv.aA(0,h))
a0.aJ(f,w)
g=C.a2B(g,h.ct(-(e*0.03)))
w=d.$1(e*0.006)
w.r=D.bo1.gp(0)
a0.aJ(g,w)
break
case"platinum":g=d.$1(e*0.04)
g.sar(D.f7n.aA(0,h))
a0.aJ(f,g)
break
case"glow":g=d.$1(e*0.05)
g.r=A.c.j(0.55).gp(0)
g.z=new B.hC(A.G,e*0.04)
a0.aJ(f,g)
g=d.$1(e*0.012)
g.r=A.c.gp(0)
a0.aJ(f,g)
break
case"rainbow":g=d.$1(e*0.04)
g.sar(D.f7l.aA(0,h))
a0.aJ(f,g)
break
case"double":w=d.$1(e*0.012)
w.r=A.c.gp(0)
a0.aJ(f,w)
g=C.a2B(g,h.ct(e*0.03))
w=d.$1(e*0.008)
w.r=A.c.j(0.75).gp(0)
a0.aJ(g,w)
break
case"neon":g=d.$1(e*0.06)
g.r=A.bc.j(0.7).gp(0)
g.z=new B.hC(A.G,e*0.035)
a0.aJ(f,g)
g=d.$1(e*0.016)
g.r=A.oT.gp(0)
a0.aJ(f,g)
break
case"rosegold":w=d.$1(e*0.05)
w.sar(D.f7g.aA(0,h))
a0.aJ(f,w)
w=C.a2B(g,h.ct(-(e*0.032)))
v=d.$1(e*0.006)
v.r=D.bbG.gp(0)
a0.aJ(w,v)
g=C.a2B(g,h.ct(e*0.03))
v=d.$1(e*0.004)
v.r=D.bey.gp(0)
a0.aJ(g,v)
break
case"jewels":g=d.$1(e*0.055)
g.sar(D.aQv.aA(0,h))
a0.aJ(f,g)
for(g=B.xi(f),w=B.a([],x.X),g=new B.tk(g,!1,w),v=e*0.018,u=a0.a,t=-e*0.006,s=e*0.006,r=e*0.09;g.C();){q=g.c
if(q===0||g.f)B.b8(B.jt(y.M));--q
g.ii()
p=w[q].b
p===$&&B.c()
o=A.o.E(A.k.bm(p.a.length()/r),8,40)
for(n=0;n<o;++n){g.ii()
p=w[q].b
p===$&&B.c()
p=p.a.length()
g.ii()
m=w[q].H2(p*n/o).a
l=D.cZV[A.o.F(n,4)]
$.V()
p=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
p.r=l.gp(0)
k=p.H()
p=m.a
j=m.b
u.drawCircle(p,j,v,k)
k.delete()
i=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
i.r=A.c.j(0.9).gp(0)
k=i.H()
u.drawCircle(p+t,j+t,s,k)
k.delete()}}break
case"aurora":g=d.$1(e*0.08)
g.sar(D.f7p.aA(0,h))
g.z=new B.hC(A.G,e*0.03)
a0.aJ(f,g)
g=d.$1(e*0.018)
g.sar(D.f7m.aA(0,h))
a0.aJ(f,g)
break
case"framed":w=d.$1(e*0.07)
w.r=A.c.gp(0)
a0.aJ(f,w)
g=C.a2B(g,h.ct(-(e*0.035)))
w=d.$1(e*0.004)
w.r=A.nS.gp(0)
a0.aJ(g,w)
break}},
av(d){return d.b!==this.b||d.c!==this.c||d.d!==this.d}}
C.brj.prototype={
a5(d,e){d.G_(C.a2B(this.b,new B.a5(0,0,0+e.a,0+e.b).ct(-this.c)),A.w,e.gdB()*0.05,!1)},
av(d){return d.b!==this.b||d.c!==this.c}}
C.aLL.prototype={
t(){var w=this,v=w.aa$
if(v!=null)v.a6(0,w.gbE())
w.aa$=null
w.a1()},
aW(){this.b6()
this.b5()
this.bF()}}
C.aMd.prototype={
t(){var w=this,v=w.aa$
if(v!=null)v.a6(0,w.gbE())
w.aa$=null
w.a1()},
aW(){this.b6()
this.b5()
this.bF()}}
C.aNw.prototype={
t(){var w=this,v=w.aa$
if(v!=null)v.a6(0,w.gbE())
w.aa$=null
w.a1()},
aW(){this.b6()
this.b5()
this.bF()}}
C.a8b.prototype={}
C.O8.prototype={
U(){var w=x.gz,v=x.N,u=x.bO
return new C.aEJ(B.a([],x.D),B.a([],w),B.a([],w),B.T(v,u),B.T(v,x.bo),B.T(v,u),B.aX(v),null,null)},
ge_(){return this.c},
gTP(){return this.r},
gTQ(){return this.w},
gLL(){return this.x}}
C.aEJ.prototype={
a_(){var w,v=this
v.a2()
$.aW.bZ$.push(v)
C.fIn()
$.hra=new C.eyU(v)
w=B.bl(null,A.Bk,null,1,null,v)
w.fl(0,!0)
v.fy!==$&&B.aP()
v.fy=w
v.Iy()},
bv(d){var w,v,u=this
u.bG(d)
w=A.a.i(d.y)
v=u.a
if(w.toLowerCase()!==A.a.i(v.y).toLowerCase()||A.a.i(d.z).toLowerCase()!==A.a.i(v.z).toLowerCase()||d.c!==v.c){w=d.c
u.OB(w)
if(w!==u.a.c){u.e=null
u.db=!1
u.w=u.r=null}u.x=!0
u.Iy()}},
j9(d){if(d===A.Aq||d===A.th||d===A.tg||d===A.pA)this.tJ()},
t(){var w,v,u,t=this
$.aW.hN(t)
w=t.at
if(w!=null)w.a3(0)
t.tJ()
w=t.fy
w===$&&B.c()
w.t()
for(w=t.ch,w=new B.dr(w,w.r,w.e);w.C();){v=w.d
v.T$=$.ax()
v.P$=0}for(w=t.CW,w=new B.dr(w,w.r,w.e);w.C();){v=w.d
u=v.ax
if(u!=null)u.bO(0)
v.h7()}for(w=t.cx,w=new B.dr(w,w.r,w.e);w.C();){v=w.d
v.T$=$.ax()
v.P$=0}t.bws()},
gabP(){var w=this.a
return w.f||w.r||w.w||w.x||w.d},
gOV(){var w,v=this.a
if(v.d||v.w||v.x){w=A.a.i(v.y)
if(w.length!==0)return w}if(v.r&&A.a.i(v.z).length!==0)return A.a.i(v.z)
return A.a.i(v.y)},
acj(d){var w=d==null?this.e:d
if((w==null?null:w.z)!==!0)return!1
if(w.gSt())return!1
return!0},
km(){return this.acj(null)},
aj4(){var w=this.c
if(w==null)return
w.J(x.q).f.S(D.f5E)},
qt(){if(!this.km())return!1
this.aj4()
return!0},
arp(d){var w,v,u,t,s,r=this
if(r.acj(d))return!1
w=d==null?r.e:d
v=w==null
if((v?null:w.w)!=="hati_kiapo_uongozi")return!0
if(r.a.d)return!0
if(!v&&!C.hqh(w))return!1
u=r.a
if(u.w||u.x)return!0
if(!u.r)return!1
v=v?null:w.x
t=A.a.i(v==null?"":v).toLowerCase()
s=A.a.i(u.z).toLowerCase()
return t.length!==0&&s.length!==0&&t===s},
zW(){return this.arp(null)},
Iy(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$Iy=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=++t.dx
k=t.a.c
w=3
return B.b(C.arx(k),$async$Iy)
case 3:j=e
w=4
return B.b(C.aq9(k),$async$Iy)
case 4:t.dy=e
if(t.c==null||l!==t.dx){w=1
break}s=C.fYb(j,t.c1f())
w=t.gabP()?5:7
break
case 5:r=t.gOV()
w=r.length!==0?8:9
break
case 8:w=10
return B.b(C.b_E(r),$async$Iy)
case 10:q=e
if(t.c==null||l!==t.dx){w=1
break}if(q!=null){A.d.bt(s,new C.evh())
if(!t.dy.q(0,A.a.i(r).toLowerCase()))A.d.c8(s,0,q)}case 9:w=6
break
case 7:A.d.bt(s,new C.evi())
case 6:for(l=s.length,p=!1,o=0;o<s.length;s.length===l||(0,B.M)(s),++o){n=s[o]
m=n.w
if(!(m==="marriage_agreement"||m==="hati_kuhowa"||m==="hati_kuhoweya"||m==="hati_malipo_awamu"||m==="hati_kiapo_uongozi"))continue
m=n.y
if(C.yN(m==null?"":m)!=null)continue
C.fIz(n,s)
p=!0}t.m(new C.evj(t,s))
if(p||s.length>J.ad(j))t.tJ()
case 1:return B.h(u,v)}})
return B.i($async$Iy,v)},
c1f(){var w,v,u,t,s,r,q="hati_kiapo_uongozi",p=B.a([],x.D)
for(w=this.d,v=w.length,u=0;u<w.length;w.length===v||(0,B.M)(w),++u){t=w[u]
s=t.w
if((s==="marriage_agreement"||s==="hati_kuhowa"||s==="hati_kuhoweya"||s==="hati_malipo_awamu"||s===q)&&s!==q)p.push(t)}r=this.e
w=!1
if(!this.db)if(r!=null){w=r.w
w=C.kC(w)&&w!==q}if(w)p.push(r)
return p},
coN(d){var w,v=this,u=d.w
if(!C.kC(u)||u==="hati_kiapo_uongozi")return
v.aaD(d)
w=A.d.bg(v.d,new C.ewS(d))
u=v.d
if(w>=0){u[w]=d.hI()
v.d[w].f=new B.U(Date.now(),0,!1)}else A.d.c8(u,0,d.hI())
v.db=!1},
ciT(){var w,v,u=this,t=u.e,s=!1
if(!u.db)if(t!=null){s=t.w
s=C.kC(s)&&s!=="hati_kiapo_uongozi"}if(s)u.coN(t)
s=u.d
w=B.S(s)
v=w.k("cQ<1,i4>")
s=B.C(new B.cQ(new B.Z(s,new C.ewG(),w.k("Z<1>")),new C.ewH(),v),v.k("J.E"))
return s},
OB(d){return this.bQb(d)},
tJ(){return this.OB(null)},
bQb(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$OB=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.x&&d==null){w=1
break}s=t.ciT()
w=3
return B.b(C.Wa(d==null?t.a.c:d,s),$async$OB)
case 3:r=t.e
w=r!=null&&r.w==="hati_kiapo_uongozi"&&t.arp(r)?4:5
break
case 4:w=6
return B.b(C.a7p(r),$async$OB)
case 6:q=r.x
p=A.a.i(q==null?t.gOV():q)
if(t.dy.q(0,A.a.i(p).toLowerCase())){w=1
break}o=A.d.bg(t.d,new C.euF())
q=t.d
if(o>=0)q[o]=r.hI()
else A.d.c8(q,0,r.hI())
case 5:case 1:return B.h(u,v)}})
return B.i($async$OB,v)},
pv(){var w,v=this,u=v.at
if(u!=null)u.a3(0)
u=v.e
w=(u==null?null:C.kC(u.w))===!0?A.ho:A.lx
v.at=B.cL(w,new C.ey_(v))},
b_a(){var w,v=this,u=v.e
if(u==null)return
w=v.ax
w.push(new C.afi(u.hI(),v.f,v.r))
if(w.length>40)A.d.cG(w,0)
A.d.a8(v.ay)},
cCq(){var w=this,v=w.ax
if(v.length===0||w.e==null)return
w.ay.push(new C.afi(w.e.hI(),w.f,w.r))
w.m(new C.eyQ(w,v.pop()))
w.pv()},
cnT(){var w=this,v=w.ay
if(v.length===0||w.e==null)return
w.ax.push(new C.afi(w.e.hI(),w.f,w.r))
w.m(new C.ewQ(w,v.pop()))
w.pv()},
on(){var w,v,u=this
if(u.e==null)return
w=A.d.bg(u.d,new C.eyD(u))
if(w>=0){u.d[w]=u.e.hI()
u.d[w].f=new B.U(Date.now(),0,!1)}v=u.e
v.toString
v.f=new B.U(Date.now(),0,!1)},
XO(d){var w,v,u,t,s=this.gdv()
if(s==null)return null
for(w=s.z,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t}return null},
xB(){var w,v,u,t
for(w=this.ch,v=new B.dr(w,w.r,w.e);v.C();){u=v.d
u.T$=$.ax()
u.P$=0}w.a8(0)
for(w=this.CW,v=new B.dr(w,w.r,w.e);v.C();){u=v.d
t=u.ax
if(t!=null)t.bO(0)
u.h7()}w.a8(0)},
Kh(){var w,v,u,t,s,r,q,p,o,n,m,l=this.gdv()
if(l==null)return
w=l.z
v=B.S(w)
u=v.k("cQ<1,n>")
t=B.de(new B.cQ(new B.Z(w,new C.eyE(),v.k("Z<1>")),new C.eyF(),u),u.k("J.E"))
w=this.ch
v=B.a6(w).k("cu<1>")
v=B.C(new B.cu(w,v),v.k("J.E"))
u=v.length
s=this.CW
r=0
for(;r<v.length;v.length===u||(0,B.M)(v),++r){q=v[r]
if(!t.q(0,q)){p=w.W(0,q)
if(p!=null){p.T$=$.ax()
p.P$=0}p=s.W(0,q)
if(p!=null){o=p.ax
if(o!=null)o.bO(0)
p.h7()}}}for(v=l.z,u=v.length,r=0;r<v.length;v.length===u||(0,B.M)(v),++r){n=v[r]
if(n.b!==D.cQ)continue
p=n.a
m=w.c4(0,p,new C.eyG(n))
s.c4(0,p,new C.eyH())
p=m.a.a
o=n.r
if(p!==o)m.saX(0,o)}},
HS(){var w,v,u=this
if(!u.db||u.e==null)return
w=u.db=!1
if(!A.d.b3(u.d,new C.eu3(u))){v=u.e
if(v.w==="hati_kiapo_uongozi"){v=v.x
if(v==null)v=u.gOV()
w=u.dy.q(0,A.a.i(v).toLowerCase())}if(!w)A.d.c8(u.d,0,u.e.hI())}u.on()
u.pv()},
ajq(d,e){var w,v,u,t,s=this
if(s.km())return
w=s.XO(d)
if(w==null||w.r===e)return
w.r=e
v=s.e
u=(v==null?null:C.kC(v.w))===!0
if(u){C.i8u(w,e)
v=s.e
if((v==null?null:v.w==="marriage_agreement")===!0){t=s.gdv()
if(t!=null)C.i8v(t,w.d+w.f*0.5)}}s.HS()
s.on()
s.pv()
if(u&&s.c!=null)s.m(new C.eyR())},
cDu(d,e){var w=this,v=w.gdv()
if(v==null||v.a!==d||v.c===e)return
v.c=e
w.HS()
w.on()
w.pv()},
gdv(){var w,v=this.e
if(v==null||v.r.length===0)return null
w=v.r
return w[A.o.E(this.f,0,w.length-1)]},
gqz(){var w,v,u,t,s,r,q=this,p=q.e,o=p==null?null:p.c
if(o==null)o="office_blue"
w=C.i6w(o)
if(w!=null)return w
v=q.gdv()
if(v==null){p=q.e
v=p!=null&&p.r.length!==0?A.d.gI(p.r):null}if(v!=null&&A.a.a0(o,"class_")){p=v.f
p=B.b1(p==null?v.e:p)
u=q.bZA(v)
t=q.bZz(v)
s=B.b1(v.e)
r=v.f
return new C.jL(o,"Class template",p,u,t,s,r==null?null:B.b1(r))}return C.hK5(o)},
bZA(d){var w,v,u,t,s
for(w=d.z,v=w.length,u=0;u<w.length;w.length===v||(0,B.M)(w),++u){t=w[u]
if(t.b===D.cQ)s=t.w>=28||A.o.E(A.o.an(t.x.a,100)-1,0,8)>=A.o.E(7,0,8)
else s=!1
if(s)return B.b1(t.Q)}return A.M},
bZz(d){var w,v,u,t
for(w=d.z,v=w.length,u=0;u<v;++u){t=w[u]
if(t.b===D.cQ&&t.w<28)return B.b1(t.Q)}return A.aJ},
afp(d){var w=this,v=d.w
if(v==="hati_kiapo_uongozi"){if(!w.gabP()){w.c.J(x.q).f.S(D.f4f)
return}w.aaD(d)
w.b0o(C.bCi(d))
return}if(C.chA(v)){w.aaD(d)
w.b0o(d)
return}w.m(new C.evZ(w,d))},
arY(){var w,v,u,t,s,r,q=this
q.a2p(!0)
if(q.db){w=q.e
v=w==null
u=v?null:w.w
t=v?null:w.x
s=A.a.i(t==null?"":t)
r=!v&&C.kC(w.w)&&u!=="hati_kiapo_uongozi"&&s.length!==0
q.m(new C.eu1(q))
if(r&&q.c!=null){u.toString
q.JR(u,s)}return}q.tJ()
q.m(new C.eu2(q))},
b0n(d){this.aaD(d)
this.a_S(d,!0)},
aaD(d){if(!C.kC(d.w))return
C.fIz(d,this.d)},
a_S(d,e){return this.ceM(d,e)},
b0o(d){return this.a_S(d,!1)},
ceM(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$a_S=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:l={}
l.a=d
if(d.w==="hati_kiapo_uongozi"){s=l.a=C.bCi(d)
if(e){r=s.x
q=A.a.i(r==null?t.gOV():r)
t.dy.W(0,q.toLowerCase())
C.aqa(t.a.c,q)}r=s}else r=d
w=C.chA(r.w)?3:4
break
case 3:w=5
return B.b(t.aaE(r),$async$a_S)
case 5:if(!g||t.c==null){w=1
break}case 4:p=A.d.b3(t.d,new C.ewl(l))
o=l.a.hI()
n=C.kC(o.w)&&C.i9I(o)
t.m(new C.ewm(t,o,p))
if(n){m=A.d.bg(t.d,new C.ewn(o))
if(m>=0){t.d[m]=o.hI()
t.tJ()}}if(!t.acj(l.a))t.YY()
r=!1
if(t.c!=null)if(!t.acj(l.a)){r=l.a
l=r.w==="hati_kiapo_uongozi"&&!t.arp(r)&&C.fEA(l.a)}else l=r
else l=r
if(l)t.c.J(x.q).f.S(D.f4Q)
case 1:return B.h(u,v)}})
return B.i($async$a_S,v)},
aaE(d){return this.bOh(d)},
bOh(d){var w=0,v=B.j(x.y),u,t=this,s,r
var $async$aaE=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.a
if(r.d){u=!0
w=1
break}s=d.z
if(s===!0){u=!0
w=1
break}w=3
return B.b(B.lp(r.c,A.zH),$async$aaE)
case 3:if(f){u=!0
w=1
break}r=t.c
r.toString
s=t.a
u=B.kZ(!1,r,s.c,s.d,null,A.zH,null)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aaE,v)},
oc(){var w=0,v=B.j(x.y),u,t=this,s,r
var $async$oc=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.e
r=s==null
if(C.chA(r?null:s.w)){u=!0
w=1
break}if((r?null:s.w)==="hati_kiapo_uongozi"){u=!0
w=1
break}s=t.c
s.toString
r=t.a
u=C.ch_(s,r.c,r.d)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$oc,v)},
af6(){var w=0,v=B.j(x.H),u,t=this,s
var $async$af6=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.cf(null,null,!1,null,new C.evY(),s,null,!0,!0,x.H),$async$af6)
case 3:if(t.c==null){w=1
break}t.arY()
case 1:return B.h(u,v)}})
return B.i($async$af6,v)},
af5(){var w=0,v=B.j(x.H),u,t=this,s
var $async$af5=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.cf(null,null,!1,null,new C.evV(),s,null,!0,!0,x.H),$async$af5)
case 3:if(t.c==null){w=1
break}t.m(new C.evW())
t.arY()
case 1:return B.h(u,v)}})
return B.i($async$af5,v)},
YY(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$YY=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.az(),$async$YY)
case 3:r=e
if(B.jP(J.q(r.a,"ngmy_marriage_hint_seen"))===!0){w=1
break}w=4
return B.b(r.aq("Bool","ngmy_marriage_hint_seen",!0),$async$YY)
case 4:s=t.c
if(s==null){w=1
break}s.J(x.q).f.S(D.f2Q)
case 1:return B.h(u,v)}})
return B.i($async$YY,v)},
JR(d,e){return this.cpb(d,e)},
cpb(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$JR=B.e(function(f,g){if(f===1)return B.f(g,v)
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
return B.b(C.agI(s,t.gEx(),t.gEw(),!0,e,t.d),$async$JR)
case 9:w=4
break
case 6:w=10
return B.b(C.agJ(s,t.gEx(),t.gEw(),!0,e,t.d),$async$JR)
case 10:w=4
break
case 7:w=11
return B.b(C.agK(s,t.gEx(),t.gEw(),!0,e,t.d),$async$JR)
case 11:w=4
break
case 8:w=12
return B.b(C.agL(s,t.gEx(),t.gEw(),!0,e,t.d),$async$JR)
case 12:w=4
break
case 4:case 1:return B.h(u,v)}})
return B.i($async$JR,v)},
c08(){var w,v,u,t,s=this
if(!s.gabP()){s.c.J(x.q).f.S(D.f32)
return}w=s.gOV()
v=s.a
u=v.d
t=!0
if(!u)if(!v.w){if(!v.x)if(v.r){v=A.a.i(v.z)
v=v.length!==0&&v.toLowerCase()===w.toLowerCase()}else v=!1
else v=t
t=v}v=s.c
v.toString
C.agH(u,t,v,new C.evd(s),new C.eve(s),w)},
afq(){var w=0,v=B.j(x.H),u=this,t,s
var $async$afq=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return B.b(B.bT(A.dJ,null,new C.ew4(u),s,!0,!0,!1,A.lK,!1,!1,x.N),$async$afq)
case 2:t=e
if(t==="marriage_agreement"){s=u.c
s.toString
C.agL(s,u.gEx(),u.gEw(),!1,null,u.d)}else if(t==="hati_kuhowa"){s=u.c
s.toString
C.agI(s,u.gEx(),u.gEw(),!1,null,u.d)}else if(t==="hati_kuhoweya"){s=u.c
s.toString
C.agJ(s,u.gEx(),u.gEw(),!1,null,u.d)}else if(t==="hati_malipo_awamu"){s=u.c
s.toString
C.agK(s,u.gEx(),u.gEw(),!1,null,u.d)}else if(t==="hati_kiapo_uongozi")u.c08()
return B.h(null,v)}})
return B.i($async$afq,v)},
cdS(d,e){var w,v,u=this,t=null
if(u.e!=null)u.b_a()
w=C.cE()
v=C.BW(t,t,t,t,D.D9,5,!1,t,t,t,t,t,w,t,!1,t,d==null?"Untitled Presentation":d,t,t,t,"office_blue",t,!1,t)
u.m(new C.ew5(u,v))},
aa3(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$aa3=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e==null||t.qt()){w=1
break}s=t.c
s.toString
w=3
return B.b(C.ief(s),$async$aa3)
case 3:r=e
if(r==null||t.c==null||t.e==null){w=1
break}q=t.e
p=A.d.d9(q.r,new C.eu5())
t.d6(new C.eu6(t,p,q,r))
s=t.c.J(x.q).f
o=r.r.length
s.S(B.b3(null,null,null,null,null,A.t,null,B.d(p?"Your "+o+"-slide presentation is ready. The mic is green now \u2014 tap it to tell the AI what to change.":"Added "+o+" AI slides after this one. Tap the green mic to change them.",null,null,null,null,null,null,null,null,null,null),null,A.V,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$aa3,v)},
ahn(d,e,f,g){var w=null,v=g?A.ds:A.bN,u=B.I(g?A.aZ:A.cr,A.r,1)
return B.hc(B.aB(w,B.p(w,B.X(d,g?A.c:A.aJ,w,w,w,18),A.f,w,w,new B.o(v,w,u,w,w,w,A.a5),w,34,w,w,w,w,w,34),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,A.a4),w,e,w,w)},
a_R(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a_R=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:n=t.e
if(n==null||t.qt()){w=1
break}s=t.k_()
r=n.r
q=r.length
if(q===0||t.f>=q)p=B.a([],x.u)
else{r=r[t.f].z
q=B.S(r).k("Z<1>")
p=B.C(new B.Z(r,new C.ewg(),q),q.k("J.E"))}o=s!=null&&s.b===D.lJ?B.a([s],x.u):p
if(o.length===0){t.c.J(x.q).f.S(D.f50)
w=1
break}r=t.c
r.toString
w=3
return B.b(B.bT(A.K,null,new C.ewh(t,o),r,!0,!0,!0,null,!1,!1,x.H),$async$a_R)
case 3:case 1:return B.h(u,v)}})
return B.i($async$a_R,v)},
afH(){return this.ceL()},
ceL(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$afH=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p={}
o=t.e
if(o!=null){s=o.CW
s=(s==null?"":s).length===0||t.qt()}else s=!0
if(s){w=1
break}s=t.c
s.toString
w=3
return B.b(C.ie1(s,t.f+1,o),$async$afH)
case 3:r=e
if(r==null||t.c==null||t.e!==o){w=1
break}s=o.cx
if(s==null)s=A.X
q=B.k_(s,B.S(s).c)
p.a=A.d.bg(o.r,new C.ewj(q))
t.d6(new C.ewk(p,t,o,q,r))
t.c.J(x.q).f.S(D.f5p)
case 1:return B.h(u,v)}})
return B.i($async$afH,v)},
afO(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$afO=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e==null||t.qt()||!t.zW()){w=1
break}s=t.gdv()
if(s==null){w=1
break}r=s.z
q=B.S(r).k("Z<1>")
p=B.C(new B.Z(r,new C.ewB(),q),q.k("J.E"))
if(p.length===0){t.c.J(x.q).f.S(D.f2B)
w=1
break}o=new B.N(p,new C.ewC(),B.S(p).k("N<1,L>")).f9(0,new C.ewD())
r=B.T(x.N,x.bO)
for(q=p.length,n=0;n<p.length;p.length===q||(0,B.M)(p),++n){m=p[n]
l=m.r
r.n(0,m.a,new B.as(new B.bb(l,A.b4,A.aO),$.ax()))}q=t.c
q.toString
w=3
return B.b(B.bT(A.K,null,new C.ewE(t,p,o,r),q,!0,!0,!0,null,!1,!1,x.H),$async$afO)
case 3:for(r=new B.dr(r,r.r,r.e);r.C();){q=r.d
q.T$=$.ax()
q.P$=0}if(t.c!=null)t.m(new C.ewF())
case 1:return B.h(u,v)}})
return B.i($async$afO,v)},
aft(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$aft=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:m=t.e
if(m==null||t.qt()){w=1
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
return B.b(C.hsn(s,new C.EI(r,q,p,o==null?"":o)),$async$aft)
case 3:n=e
if(n==null||t.c==null){w=1
break}t.d6(new C.ew6(m,n))
s=t.c.J(x.q).f
r=n.a
if(r.length===0)r="No ending celebration."
else{r=C.ah6(r)
r=B.w(r==null?null:r.b)+" will play after your last slide."}s.S(B.b3(null,null,null,null,null,A.t,null,B.d(r,null,null,null,null,null,null,null,null,null,null),null,A.V,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$aft,v)},
aax(){return this.bNC()},
bNC(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$aax=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:m={}
l=t.e
if(l!=null){s=l.CW
s=(s==null?"":s).length===0||t.qt()}else s=!0
if(s){w=1
break}s=t.c
s.toString
w=3
return B.b(C.iee(s,t.f+1,l),$async$aax)
case 3:r=e
q=$.h0M
$.h0M=!1
if(r==null||t.c==null||t.e!==l){w=1
break}if(r===l){t.d6(new C.eum())
t.c.J(x.q).f.S(D.f2s)
w=1
break}if(!q){s=r.CW
s=C.hr8(l,s==null?"":s,!1)}else s=!1
if(s){t.d6(new C.eun(t,l,r))
t.c.J(x.q).f.S(D.f5T)
w=1
break}s=l.cx
if(s==null)s=A.X
p=B.k_(s,B.S(s).c)
s=l.r
m.a=A.d.bg(s,new C.euo(p))
o=s.length
t.d6(new C.eup(m,t,l,p,r))
n=s.length-o
s=t.c.J(x.q).f
if(n>0){m=n===1?"":"s"
m="Done \u2014 added "+n+" slide"+m+". Undo brings back the old version."}else m="Done \u2014 your slides are updated. Undo brings back the old version."
s.S(B.b3(null,null,null,null,null,A.t,null,B.d(m,null,null,null,null,null,null,null,null,null,null),null,A.V,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$aax,v)},
aQH(d,e){if(e){this.agg()
return}this.cdS(d,!1)},
bJ8(){return this.aQH(null,!1)},
agg(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$agg=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.bT(A.bZ,null,new C.ewL(t),r,!0,!0,!0,A.pn,!1,!1,x.N),$async$agg)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.ewM(t,C.i6v(s).pI()))
case 1:return B.h(u,v)}})
return B.i($async$agg,v)},
d6(d){var w=this
if(w.qt())return
w.HS()
w.b_a()
w.m(d)
w.Kh()
w.on()
w.pv()},
a8y(){this.d6(new C.et0(this,D.mR))},
aS9(){var w=this.gdv()
if(w==null)return
this.d6(new C.euk(this,w))},
aRi(){var w=this.e
if(w==null||w.r.length<=1)return
this.d6(new C.eui(this))},
b3j(d,e){if(this.e==null||d===e)return
this.d6(new C.ewU(this,d,e))},
O7(d){return this.bL9(d)},
bL9(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$O7=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=d.w==="hati_kiapo_uongozi"?3:4
break
case 3:s=d.x
r=A.a.i(s==null?t.gOV():s)
w=5
return B.b(C.aq8(t.a.c,r),$async$O7)
case 5:t.dy.M(0,r.toLowerCase())
case 4:s=d.a
C.arz(s)
w=6
return B.b(C.b1z(t.a.c,s),$async$O7)
case 6:if(t.c==null){w=1
break}t.m(new C.eue(t,d))
w=7
return B.b(t.tJ(),$async$O7)
case 7:case 1:return B.h(u,v)}})
return B.i($async$O7,v)},
cp8(d,e){var w=this
if(d.z){w.aj4()
return}w.m(new C.ewT(w,d,e))
w.pv()},
k_(){var w,v,u,t,s,r=this.gdv()
if(r==null||this.r==null)return null
for(w=r.z,v=w.length,u=this.r,t=0;t<v;++t){s=w[t]
if(s.a===u)return s}return null},
WP(d){return this.ch.c4(0,d.a,new C.eu4(d))},
atP(d){return this.CW.c4(0,d.a,new C.euG())},
a2p(d){var w,v,u,t=this,s=t.w
if(s!=null){w=t.XO(s)
v=t.ch.h(0,s)
if(w!=null&&v!=null&&v.a.a!==w.r)w.r=v.a.a}t.w=null
u=$.aW.ak$.d.c
if(u!=null)u.jR()},
b6P(){return this.a2p(!0)},
a2l(d){var w,v,u=this
if(u.qt())return
if(!u.zW())return
w=u.XO(d)
if(w==null||w.b!==D.cQ)return
v=A.a.i(w.r).toLowerCase()
if(v==="click to edit text"||v==="tap to edit text"||v==="double-tap to edit"){w.r=""
u.WP(w).saX(0,"")}u.m(new C.eyB(u,d))
$.aW.x1$.push(new C.eyC(u,d,w))},
b7n(d){var w=this
if(d.b===D.cQ&&!w.km()&&w.zW()){w.a2l(d.a)
return}w.aA9(d.a)},
aA9(d){var w,v,u,t,s,r=this
if(r.km())return
w=r.r
if(w!=null&&w!==d){v=r.XO(w)
if(v!=null&&v.b===D.cQ){u=r.ch.h(0,w)
if(u!=null&&u.a.a!==v.r)v.r=u.a.a}}t=r.w
s=t!=null&&t!==d
r.m(new C.ey0(r,s,d))
if(s||d==null){t=$.aW.ak$.d.c
if(t!=null)t.jR()}},
aMX(){this.d6(new C.et1(this))},
pe(d){return this.bAf(d)},
bAf(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$pe=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(t.oc(),$async$pe)
case 3:s=f
if(!s){w=1
break}if(t.c==null){w=1
break}t.d6(new C.esZ(t,d))
case 1:return B.h(u,v)}})
return B.i($async$pe,v)},
VW(){var w=0,v=B.j(x.H),u,t=this,s
var $async$VW=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A5.GS(78,1920),$async$VW)
case 3:s=e
if(s==null||t.gdv()==null){w=1
break}t.d6(new C.esP(t,s))
case 1:return B.h(u,v)}})
return B.i($async$VW,v)},
VQ(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$VQ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.gdv()==null){w=1
break}w=3
return B.b(S.D2(t.a.c),$async$VQ)
case 3:s=e
if(t.c==null){w=1
break}r=J.a4(s)
if(r.gam(s)){t.c.J(x.q).f.S(D.f6s)
w=1
break}w=r.gL(s)===1?4:6
break
case 4:q=r.gI(s)
w=5
break
case 6:r=t.c
r.toString
w=7
return B.b(B.bT(null,null,new C.esM(s),r,!0,!0,!1,null,!1,!1,x.ei),$async$VQ)
case 7:q=e
case 5:if(q==null||t.c==null||t.gdv()==null){w=1
break}t.d6(new C.esN(t,q))
case 1:return B.h(u,v)}})
return B.i($async$VQ,v)},
asN(){var w=this,v=w.r
if(v==null||w.gdv()==null)return
if(A.d.b3(w.gdv().z,new C.eug(v))){w.c.J(x.q).f.S(D.f5t)
return}if(w.w===v)w.a2p(!0)
w.d6(new C.euh(w,v))},
bHq(){var w=this.k_(),v=w==null
if((v?null:w.b)===D.f8)return"Tap a design shape, then pick a color to fill it."
if((v?null:w.b)===D.cQ)return"Selected text \u2014 color applies to this text box."
return"No selection \u2014 color applies to the slide background."},
aND(d,e){var w=this,v=w.k_(),u=w.gdv(),t=w.e
if(t==null)return
w.d6(new C.ett(w,v,d,e,t,u))},
bBQ(d){return this.aND(d,null)},
a8Q(d){return this.bBY(d)},
bBY(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a8Q=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=D.a7K.q(0,A.a.i(d.a))||t.Q
if(q){w=3
break}else f=q
w=4
break
case 3:w=5
return B.b(t.oc(),$async$a8Q)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}s=t.k_()
if(s!=null){r=s.b
if(r===D.cQ)t.bBQ(s.w>=28||s.x.gdN(0)>=A.H.gdN(0)?d.d:d.e)
else if(r===D.f8){r=d.c
t.aND(r.j(0.88),r)}w=1
break}t.d6(new C.ety(t,d))
case 1:return B.h(u,v)}})
return B.i($async$a8Q,v)},
a8P(d){return this.bBW(d)},
bBW(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a8P=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=t.k_()
r=t.gdv()
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
return B.b(t.oc(),$async$a8P)
case 7:f=!f
case 6:case 4:if(f){w=1
break}if(t.c==null){w=1
break}t.d6(new C.etw(t,s,d,q,r))
case 1:return B.h(u,v)}})
return B.i($async$a8P,v)},
bBG(d){var w=this.gdv()
if(w==null)return
this.d6(new C.ets(this,w,d))},
a_X(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a_X=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(C.iea(r),$async$a_X)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.on()
t.m(new C.ewv(t,s))
w=4
return B.b(t.tJ(),$async$a_X)
case 4:if(t.c!=null)t.afp(s)
case 1:return B.h(u,v)}})
return B.i($async$a_X,v)},
aap(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$aap=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.e
if(q==null){w=1
break}t.a2p(!0)
t.on()
s=t.c
s.toString
w=3
return B.b(C.Ro(s,q),$async$aap)
case 3:r=e
s=t.c
if(s==null){w=1
break}s=s.J(x.q).f
s.S(B.b3(null,null,null,null,null,A.t,null,B.d(r==null?"Your video is ready. Check your downloads.":r,null,null,null,null,null,null,null,null,null,null),null,A.V,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$aap,v)},
DG(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$DG=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=r.e
if(m==null){w=1
break}r.on()
t=4
w=7
return B.b(C.aQh(m),$async$DG)
case 7:q=e
o=r.c
if(o==null){w=1
break}w=8
return B.b(C.aPI(o,q,m.b),$async$DG)
case 8:t=2
w=6
break
case 4:t=3
l=s.pop()
p=B.ab(l)
o=r.c
if(o==null){w=1
break}o.J(x.q).f.S(B.b3(null,null,null,null,null,A.t,null,B.d("Could not create PDF: "+B.w(p),null,null,null,null,null,null,null,null,null,null),null,A.V,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$DG,v)},
Fk(d,e){return this.cBQ(d,e)},
cBQ(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Fk=B.e(function(f,a0){if(f===1)return B.f(a0,v)
for(;;)switch(w){case 0:h={}
if(t.qt()){w=1
break}s=d.w
if(!(s==="hati_kuhowa"||s==="hati_kuhoweya")){w=1
break}h.a=d
if(e){s=t.e
s=s!=null&&s.a===d.a}else s=!1
if(s){t.a2p(!0)
t.on()
s=h.a=t.e.hI()}else{r=A.d.bg(t.d,new C.eyK(d))
s=h.a=r>=0?t.d[r].hI():d.hI()}s=s.w
q=s==null
p=C.i7t(q?"":s)
o=C.hq3(q?"":s)
if(p.length===0){w=1
break}s=t.d
q=B.S(s).k("Z<1>")
n=B.C(new B.Z(s,new C.eyL(h,p),q),q.k("J.E"))
s=h.a.b
w=3
return B.b(t.cv3(n.length,o,s),$async$Fk)
case 3:m=a0
if(m==null||t.c==null){w=1
break}h.b=null
h.c=!1
w=m==="new"?4:6
break
case 4:s=h.b=C.i7n(h.a)
h.c=!0
w=5
break
case 6:s={}
l=n.length===1?A.d.gI(n).a:null
s.a=l
w=l==null?7:9
break
case 7:g=s
w=10
return B.b(t.cv2(n,o),$async$Fk)
case 10:a0=g.a=a0
w=8
break
case 9:a0=l
case 8:if(a0==null||t.c==null){w=1
break}k=A.d.h_(t.d,new C.eyM(s))
s=h.a.b
w=11
return B.b(t.cv0(k.b,s),$async$Fk)
case 11:if(a0!==!0||t.c==null){w=1
break}s=h.b=k.hI()
case 5:j=C.i7s(s,h.a)
s=j.b
if(s===0&&j.a===0&&j.c===0){h=t.c
if(h==null){w=1
break}h.J(x.q).f.S(D.f6E)
w=1
break}w=12
return B.b(t.cv1(j.a,s,o,j.c),$async$Fk)
case 12:i=a0
if(t.c==null){w=1
break}t.m(new C.eyN(h,t,i))
t.pv()
case 1:return B.h(u,v)}})
return B.i($async$Fk,v)},
cv3(d,e,f){var w=this.c
w.toString
return B.bT(A.K,null,new C.eyg(this,e,f,d),w,!0,!0,!0,null,!1,!1,x.N)},
cv2(d,e){var w=this.c
w.toString
return B.bT(A.K,null,new C.eyf(this,e,d),w,!0,!0,!0,null,!1,!1,x.N)},
cv0(d,e){var w=this.c
w.toString
return B.bT(A.K,null,new C.ey9(this,e,d),w,!0,!0,!0,null,!1,!1,x.y)},
cv1(d,e,f,g){var w=this.c
w.toString
return B.bT(A.K,null,new C.eyb(this,f,e,d,g),w,!0,!0,!0,null,!1,!1,x.y)},
abT(){var w=null
return B.at(B.p(w,w,A.f,w,w,new B.o(A.aZ,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w)},
abU(d,e,f,g){var w,v,u=null,t=B.m(16),s=B.ar(d,A.bZ,0.35)
s.toString
s=B.a([d,s],x.O)
w=B.a([new B.ac(0,A.G,d.j(0.28),A.dq,18)],x.V)
v=x.p
return B.B(B.a([B.p(u,B.X(e,A.c,u,u,u,28),A.f,u,u,new B.o(u,u,u,t,w,new B.a9(A.ay,A.aD,A.x,s,u,u),A.n),u,54,u,u,u,u,u,54),A.es,B.E(B.x(B.a([B.d(g,u,u,u,u,u,u,D.fhq,u,u,u),A.am,B.d(f,u,u,u,u,u,u,B.l(u,u,A.c.j(0.58),u,u,u,u,u,u,u,u,13.5,u,u,A.a7,u,1.35,!0,u,u,u,u,u,u,u,u),u,u,u)],v),A.E,u,A.e,A.j,0,A.p),1)],v),A.E,u,A.e,A.j,0,u,u)},
aVr(d,e){var w=null,v=e.j(0.14),u=B.m(12),t=B.I(e.j(0.22),A.r,1)
return B.p(w,B.d(d,w,2,A.a2,w,w,w,A.Uv,A.L,w,w),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.bT,w,w,w)},
aVu(d,e,f,g,h,i,j){var w=null,v=B.m(16),u=B.m(16),t=g?new B.a9(A.ay,A.aD,A.x,B.a([d.j(0.22),d.j(0.08)],x.O),w,w):w,s=g?w:A.c.j(0.05),r=B.I(g?d.j(0.45):A.c.j(0.08),A.r,1),q=d.j(g?0.22:0.14),p=B.m(13),o=x.p
return B.aF(!1,A.a1,!0,w,B.aM(!1,v,!0,B.p(w,B.B(B.a([B.p(w,B.X(f,d,w,w,w,22),A.f,w,w,new B.o(q,w,w,p,w,w,A.n),w,44,w,w,w,w,w,44),A.ba,B.E(B.x(B.a([B.d(i,w,w,w,w,w,w,A.nF,w,w,w),A.cK,B.d(h,w,w,w,w,w,w,B.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,12.5,w,w,A.a7,w,1.25,!0,w,w,w,w,w,w,w,w),w,w,w)],o),A.E,w,A.e,A.j,0,A.p),1),B.X(A.yy,A.c.j(0.35),w,w,w,14)],o),A.m,w,A.e,A.j,0,w,w),A.f,w,w,new B.o(s,w,r,u,w,t,A.n),w,w,w,w,A.bB,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.ev9(e,j),w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ah)},
bYw(d,e,f,g,h,i){return this.aVu(d,e,f,!1,g,h,i)},
av8(d,e){var w=null,v=A.c.j(0.05),u=B.m(14),t=B.I(A.c.j(0.08),A.r,1)
return B.p(w,B.x(B.a([B.d(e,w,w,w,w,w,w,A.de,w,w,w),A.bC,B.d(d,w,w,w,w,w,w,B.l(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,11,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.a_2,w,w,w)},
aVt(d,e,f){var w=null,v=B.bp(A.c.j(0.08),w,w,w,A.c,w,A.cj,w,new B.b7(B.m(14),A.a0),w,w,w)
return B.bH(B.d(e,w,w,w,w,w,w,A.nC,w,w,w),new C.ev8(d,f),v)},
aVs(d,e){return this.aVt(d,e,null)},
K8(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$K8=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
s=t.a
w=3
return B.b(B.pf(l,s.c,s.d),$async$K8)
case 3:if(!e||t.c==null){w=1
break}r=t.e
if(r==null){w=1
break}l=r.b
l=l+"\n"+A.a.aI("=",l.length)+"\n\n"
q=new B.ff(l)
for(s=r.r,p=0;p<s.length;){o=s[p];++p
n=o.b
if(n.length===0)n="(untitled)"
q.a=l+("Slide "+p+": "+n+"\n")
for(l=A.d.gaf(o.z),n=new B.f5(l,new C.ey1());n.C();){m=l.gR(0).r
if(A.a.i(m).length!==0){m="  \u2022 "+B.aL(m,"\n"," ")+"\n"
q.a+=m}}l=o.c
if(A.a.i(l).length!==0)q.a+="  Notes: "+l+"\n"
l=q.a+="\n"}w=4
return B.b(B.aa5(l.charCodeAt(0)==0?l:l,r.b),$async$K8)
case 4:l=t.a
w=5
return B.b(B.pe(l.c,l.d),$async$K8)
case 5:case 1:return B.h(u,v)}})
return B.i($async$K8,v)},
Id(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$Id=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.c
q.toString
s=t.a
w=3
return B.b(B.pf(q,s.c,s.d),$async$Id)
case 3:if(!e||t.c==null){w=1
break}r=t.e
if(r==null){w=1
break}w=4
return B.b(B.aa5(A.T.ao(r.ag(),null),r.b+".json"),$async$Id)
case 4:q=t.a
w=5
return B.b(B.pe(q.c,q.d),$async$Id)
case 5:case 1:return B.h(u,v)}})
return B.i($async$Id,v)},
b6y(){var w,v,u=this,t=u.e
if(t==null||t.r.length===0)return
u.on()
u.tJ()
w=u.c
w.toString
v=B.e_(new C.eyA(u,t),!1,null,x.z)
B.a3(w,!1).cg(v)},
Hr(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$Hr=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.oc(),$async$Hr)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}w=4
return B.b(C.fIM(),$async$Hr)
case 4:s=e
if(s==null||t.e==null||t.c==null){w=1
break}r=C.iai(s.a)
q=t.c
q.toString
w=5
return B.b(B.bT(A.au,null,new C.esU(s,r),q,!0,!0,!1,null,!1,!1,x.N),$async$Hr)
case 5:p=e
if(p==null){w=1
break}if(p==="scroll"){t.d6(new C.esV(t,s))
w=1
break}if(p==="split")t.d6(new C.esW(t,r,s))
case 1:return B.h(u,v)}})
return B.i($async$Hr,v)},
Nu(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$Nu=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.qt()){w=1
break}w=3
return B.b(t.oc(),$async$Nu)
case 3:if(!e){w=1
break}s=t.c
if(s==null){w=1
break}w=4
return B.b(C.aQg(s,null,null),$async$Nu)
case 4:r=e
if(r==null||t.gdv()==null){w=1
break}t.d6(new C.et_(t,r))
case 1:return B.h(u,v)}})
return B.i($async$Nu,v)},
b36(d){var w=this.e
if(w==null||!C.kC(w.w)||w.as!=null)return
w.as=d.b
w.at=d.c.l()},
aOX(){var w,v,u,t,s=this.c
s.toString
w=this.e
v=w==null
u=v?null:w.as
t=v?null:w.at
return C.aQg(s,t==null?null:B.b1(t),u)},
a8w(d){return this.bA6(d)},
bA6(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a8w=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.qt()){w=1
break}if(!t.zW()){s=t.c
if(s==null){w=1
break}s.J(x.q).f.S(D.f6T)
w=1
break}w=3
return B.b(t.aOX(),$async$a8w)
case 3:r=f
if(r==null||t.gdv()==null){w=1
break}t.d6(new C.esR(t,r,d))
case 1:return B.h(u,v)}})
return B.i($async$a8w,v)},
ah_(d){return this.cnW(d)},
cnW(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$ah_=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.qt()){w=1
break}if(!t.zW()){s=t.c
if(s==null){w=1
break}s.J(x.q).f.S(D.f60)
w=1
break}w=3
return B.b(t.aOX(),$async$ah_)
case 3:r=f
if(r==null||t.gdv()==null){w=1
break}t.d6(new C.ewR(t,r,d))
case 1:return B.h(u,v)}})
return B.i($async$ah_,v)},
caz(){var w,v,u=this
if(u.km())return
w=new B.U(Date.now(),0,!1)
v=u.fx
v=v!=null&&w.bC(v).a<=5e5?++u.fr:u.fr=1
u.fx=w
if(v>=3){u.fr=0
u.fx=null
u.cAU()}},
cAU(){var w,v,u,t,s,r=this.gdv()
if(r==null)return
v=r.z
u=v.length
t=0
for(;;){if(!(t<u)){w=null
break}s=v[t]
if(s.db==="marriage_locked_nim_akuna_deni"){w=s
break}++t}if(w==null)return
this.d6(new C.eyI(this,r,(A.o.aC(w.Q,24)&255)===0||A.a.i(w.r).length===0))},
bYR(){var w,v,u,t,s,r=this.gdv()
if(r==null)return
for(w=r.z,v=w.length,u=null,t=0;t<v;++t){s=w[t]
if(s.db==="marriage_locked_nim_n_4")u=s}if(u==null)return
this.d6(new C.evc(this,r,u.d))},
c2x(d){var w
if(this.km())return!1
w=this.e
if((w==null?null:C.kC(w.w))!==!0)return!0
w=d.db
if(w==="marriage_locked"||A.a.a0(w,"marriage_locked_"))return!1
if(A.a.a0(w,"marriage_field_"))return!1
if(C.fFl(d))return!1
w=d.db
if(w==="__kiapo_video__"||A.a.a0(w,"__kiapo_video___"))return!1
if(d.b===D.lf&&A.a.a0(w,"marriage_sign_"))return!1
return!1},
c2y(d){var w
if(this.km())return!1
w=this.e
if((w==null?null:C.kC(w.w))!==!0)return!0
if(!this.zW())return!1
w=d.db
if(w==="marriage_locked"||A.a.a0(w,"marriage_locked_"))return!1
if(C.fFl(d))return!1
w=d.db
if(w==="__kiapo_video__"||A.a.a0(w,"__kiapo_video___"))return!1
if(d.b===D.lf&&A.a.a0(w,"marriage_sign_"))return!1
return A.a.a0(w,"marriage_field_")},
NC(d){return this.bCn(d)},
bCn(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$NC=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.qt()){w=1
break}if(!t.zW()){s=t.c
if(s==null){w=1
break}s.J(x.q).f.S(D.f4R)
w=1
break}r=t.e
s=r==null
q=s?null:r.x
p=A.a.i(q==null?"":q)
if(s||p.length===0){w=1
break}w=3
return B.b(C.aqc(p),$async$NC)
case 3:o=f
s=t.c
if(s==null){w=1
break}if(o==null||A.a.i(o).length===0){s.J(x.q).f.S(D.f5v)
w=1
break}s=t.e
if(s!==r){s=s==null?null:s.a
s=s!==r.a}else s=!1
if(s){s=r.r
n=s.length===0?null:A.d.gI(s)
if(n!=null)for(s=n.z,q=s.length,m=0;m<q;++m){l=s[m]
k=l.db
if(k==="__kiapo_video__"||A.a.a0(k,"__kiapo_video___")){l.at=o
l.db="__kiapo_video__"}}C.a7p(r)
w=1
break}t.m(new C.etC(t,d,o))
t.on()
$.aW.x1$.push(new C.etD(t))
case 1:return B.h(u,v)}})
return B.i($async$NC,v)},
VU(){var w=0,v=B.j(x.H),u,t=this,s
var $async$VU=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.oc(),$async$VU)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}w=4
return B.b(C.bCZ(),$async$VU)
case 4:s=e
if(s==null||t.gdv()==null){w=1
break}t.d6(new C.esO(t,s))
case 1:return B.h(u,v)}})
return B.i($async$VU,v)},
Om(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$Om=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.oc(),$async$Om)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}s=t.k_()
if(s==null||s.at==null){w=1
break}r=s.at
r.toString
w=4
return B.b(C.fID(r),$async$Om)
case 4:q=e
if(q==null){w=1
break}t.d6(new C.euE(s,q))
case 1:return B.h(u,v)}})
return B.i($async$Om,v)},
j6(d){this.d6(new C.esX(this,d))},
qj(d){return this.bBz(d)},
bBz(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$qj=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)A:switch(w){case 0:if(d!=="print"&&d!=="present"&&t.qt()){w=1
break}m=!D.aP2.q(0,A.a.i(d))
if(m){w=3
break}else f=m
w=4
break
case 3:w=5
return B.b(t.oc(),$async$qj)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}switch(d){case"upload_pdf":t.Hr()
w=1
break A
case"sign_paper":t.Nu()
w=1
break A
case"hd_photo":t.VU()
w=1
break A
case"sharpen":t.Om()
w=1
break A
case"print":t.DG()
w=1
break A
case"rotate":s=t.k_()
if(s!=null)t.d6(new C.et5(s))
w=1
break A
case"text_box":t.aMX()
w=1
break A
case"picture":t.VW()
w=1
break A
case"present":t.b6y()
w=1
break A
case"new_slide":t.a8y()
w=1
break A
case"export_json":t.Id()
w=1
break A
case"outline_share":t.K8()
w=1
break A
case"flashcard_tool":t.vl(D.Ij)
w=1
break A
case"quiz_tool":t.vl(D.Ik)
w=1
break A
case"worksheet_tool":t.vl(D.Il)
w=1
break A
case"duplicate_el":s=t.k_()
if(s==null){w=1
break A}t.d6(new C.et6(t,s))
w=1
break A
case"delete_el":t.asN()
w=1
break A
case"bring_fwd":s=t.k_()
if(s==null||t.gdv()==null){w=1
break A}t.d6(new C.et7(t,s))
w=1
break A
case"send_back":s=t.k_()
if(s==null||t.gdv()==null){w=1
break A}t.d6(new C.eti(t,s))
w=1
break A
case"align_left":s=t.k_()
if(s!=null)t.d6(new C.etl(s))
w=1
break A
case"align_center":s=t.k_()
if(s!=null)t.d6(new C.etm(s))
w=1
break A
case"align_right":s=t.k_()
if(s!=null)t.d6(new C.etn(s))
w=1
break A
case"grayscale":case"brighten":t.Om()
w=1
break A
case"flip_h":s=t.k_()
if(s!=null)t.d6(new C.eto(s))
w=1
break A
case"flip_v":s=t.k_()
if(s!=null)t.d6(new C.etp(s))
w=1
break A
case"rectangle":t.pe(D.bg)
w=1
break A
case"circle":t.pe(D.eQ)
w=1
break A
case"triangle":t.pe(D.jX)
w=1
break A
case"arrow":t.pe(D.Db)
w=1
break A
case"line":case"divider":t.pe(D.fy)
w=1
break A
case"word_count":r=t.gdv()
if(r==null){w=1
break A}for(q=A.d.gaf(r.z),p=new B.f5(q,new C.etq()),o=0;p.C();){n=A.a.fE(A.a.i(q.gR(0).r),B.af("\\s+",!0,!1,!1,!1))
o+=new B.Z(n,new C.etr(),B.S(n).k("Z<1>")).gL(0)}t.c.J(x.q).f.S(B.b3(null,null,null,null,null,A.t,null,B.d(""+o+" words on this slide",null,null,null,null,null,null,null,null,null,null),null,A.V,null,null,null,null,null,null,null,null,null,null))
w=1
break A
case"title":q=C.cE()
t.j6(C.iY(A.L,!1,t.gqz().d.l(),A.aF,40,A.bp,A.u,0.18,q,"Presentation Title",0,D.mS,0.8,0.1,0.28))
w=1
break A
case"subtitle":q=C.cE()
t.j6(C.iY(A.L,!1,t.gqz().e.l(),A.aF,22,A.bp,A.a7,0.12,q,"Subtitle goes here",0,D.dh,0.8,0.1,0.48))
w=1
break A
case"bullets":t.j6(C.iY(A.bi,!0,4279310375,A.aF,20,A.bp,A.a7,0.5,C.cE(),"\u2022 First point\n\u2022 Second point\n\u2022 Third point",0,D.uL,0.8,0.1,0.22))
w=1
break A
case"numbered":t.j6(C.iY(A.bi,!1,4279310375,A.aF,20,A.bp,A.a7,0.5,C.cE(),"1. First item\n2. Second item\n3. Third item",0,D.uK,0.8,0.1,0.22))
w=1
break A
case"quote":t.j6(C.iY(A.L,!1,4279310375,A.aF,24,A.cE,A.a7,0.25,C.cE(),'"Insert meaningful quote here."',0,D.dh,0.8,0.1,0.3))
w=1
break A
case"citation":t.j6(C.iY(A.bi,!1,4284773515,A.aF,14,A.bp,A.a7,0.1,C.cE(),"Author, Title (Year). Publisher.",0,D.uL,0.8,0.1,0.78))
w=1
break A
case"date_stamp":t.j6(C.iY(A.dT,!1,4279310375,A.aF,14,A.bp,A.a7,0.08,C.cE(),C.bD0(),0,D.dh,0.24,0.72,0.04))
w=1
break A
case"page_number":t.j6(C.iY(A.dT,!1,4279310375,A.aF,13,A.bp,A.a7,0.06,C.cE(),"Page "+(t.f+1),0,D.dh,0.18,0.78,0.9))
w=1
break A
case"header_bar":t.d6(new C.et8(t))
w=1
break A
case"footer_bar":t.d6(new C.et9(t))
w=1
break A
case"highlight":t.d6(new C.eta(t))
w=1
break A
case"redact":t.d6(new C.etb(t))
w=1
break A
case"callout":t.d6(new C.etc(t))
w=1
break A
case"checkboxes":t.j6(C.iY(A.bi,!1,4279310375,A.aF,20,A.bp,A.a7,0.45,C.cE(),"\u2610 Task one\n\u2610 Task two\n\u2610 Task three",0,D.dh,0.8,0.1,0.2))
w=1
break A
case"table":t.j6(C.iY(A.bi,!1,4279310375,A.aF,16,A.bp,A.a7,0.55,C.cE(),"Column A\tColumn B\tColumn C\nRow 1\tData\tData\nRow 2\tData\tData",0,D.dh,0.8,0.1,0.18))
w=1
break A
case"memo":t.d6(new C.etd(t))
w=1
break A
case"letter":t.j6(C.iY(A.bi,!1,4279179050,A.aF,17,A.bp,A.a7,0.82,C.cE(),C.bD0()+"\n\nDear [Name],\n\n[Letter body]\n\nSincerely,\n[Your name]",0,D.dh,0.8,0.1,0.08))
w=1
break A
case"agenda":t.j6(C.iY(A.bi,!1,4279310375,A.aF,22,A.bp,A.O,0.76,C.cE(),"AGENDA\n\n1. Welcome\n2. Updates\n3. Discussion\n4. Action items\n5. Next steps",0,D.uL,0.8,0.1,0.12))
w=1
break A
case"toc":t.j6(C.iY(A.bi,!1,4279310375,A.aF,18,A.bp,A.a7,0.76,C.cE(),"TABLE OF CONTENTS\n\n1. Introduction .......... 1\n2. Main topic .......... 3\n3. Conclusion .......... 8",0,D.dh,0.8,0.1,0.12))
w=1
break A
case"sig_line":t.j6(C.iY(A.bi,!1,4279310375,A.aF,16,A.bp,A.a7,0.08,C.cE(),"Signature: _________________________",0,D.dh,0.8,0.1,0.78))
w=1
break A
case"initial_line":t.j6(C.iY(A.bi,!1,4279310375,A.aF,16,A.bp,A.a7,0.08,C.cE(),"Initials: ______",0,D.dh,0.3,0.65,0.78))
w=1
break A
case"approved":t.j6(C.iY(A.L,!1,4278556265,A.aF,28,A.bp,A.u,0.12,C.cE(),"APPROVED",0,D.mS,0.32,0.62,0.08))
w=1
break A
case"draft":t.j6(C.iY(A.L,!1,4292617766,A.aF,28,A.bp,A.u,0.12,C.cE(),"DRAFT",0,D.dh,0.32,0.62,0.08))
w=1
break A
case"confidential":t.j6(C.iY(A.L,!1,871318596,A.aF,36,A.bp,A.u,0.12,C.cE(),"CONFIDENTIAL",0,D.dh,0.8,0.1,0.42))
w=1
break A
case"sticky":t.d6(new C.ete(t))
w=1
break A
case"progress":t.d6(new C.etf(t))
w=1
break A
case"stars":t.j6(C.iY(A.L,!1,4279310375,A.aF,36,A.bp,A.a7,0.12,C.cE(),"\u2605\u2605\u2605\u2605\u2606",0,D.qs,0.8,0.1,0.4))
w=1
break A
case"equation":t.j6(C.iY(A.L,!1,4279310375,A.aF,32,A.bp,A.O,0.14,C.cE(),"y = mx + b",0,D.dh,0.8,0.1,0.38))
w=1
break A
case"timeline":t.j6(C.iY(A.L,!1,4279310375,A.aF,18,A.bp,A.a7,0.2,C.cE(),"2024 \u2500\u2500\u25ba 2025 \u2500\u2500\u25ba 2026\nPhase 1    Phase 2    Phase 3",0,D.uK,0.8,0.1,0.35))
w=1
break A
case"two_col":t.d6(new C.etg(t))
w=1
break A
case"compare":t.d6(new C.eth(t))
w=1
break A
case"link_text":t.j6(C.iY(A.bi,!1,4280640491,A.mW,16,A.bp,A.a7,0.1,C.cE(),"https://example.com",0,D.dh,0.8,0.1,0.5))
w=1
break A
case"phone":t.j6(C.iY(A.bi,!1,4279310375,A.aF,18,A.bp,A.a7,0.1,C.cE(),"(555) 123-4567",0,D.dh,0.8,0.1,0.5))
w=1
break A
case"email":t.j6(C.iY(A.bi,!1,4280640491,A.aF,18,A.bp,A.a7,0.1,C.cE(),"name@email.com",0,D.dh,0.8,0.1,0.5))
w=1
break A
case"qr_placeholder":t.d6(new C.etj(t))
w=1
break A
case"cover_page":r=t.gdv()
if(r==null){w=1
break A}t.d6(new C.etk(t,r))
w=1
break A
case"invoice":t.j6(C.iY(A.bi,!1,4279179050,A.aF,16,A.bp,A.a7,0.84,C.cE(),"INVOICE #001\n\nBill To:\nItem\tQty\tPrice\nService A\t1\t$100\nTOTAL\t\t$100",0,D.dh,0.8,0.1,0.08))
w=1
break A
case"resume":t.j6(C.iY(A.bi,!1,4279179050,A.aF,17,A.bp,A.a7,0.84,C.cE(),"YOUR NAME\nJob Title\n\nExperience\n\u2022 Role at Company\n\nEducation\n\u2022 Degree",0,D.dh,0.8,0.1,0.08))
w=1
break A
case"minutes":t.j6(C.iY(A.bi,!1,4279310375,A.aF,16,A.bp,A.a7,0.88,C.cE(),"MEETING MINUTES\nDate: "+C.bD0()+"\nAttendees:\n\nDiscussion:\n\nDecisions:\n\nAction items:",0,D.dh,0.8,0.1,0.06))
w=1
break A
case"lab_report":t.j6(C.iY(A.bi,!1,4279310375,A.aF,17,A.bp,A.a7,0.88,C.cE(),"LAB REPORT\n\nHypothesis:\n\nProcedure:\n\nResults:\n\nConclusion:",0,D.dh,0.8,0.1,0.06))
w=1
break A
case"rubric":t.j6(C.iY(A.bi,!1,4279310375,A.aF,15,A.bp,A.a7,0.8,C.cE(),"RUBRIC\nCriteria\tExcellent\tGood\tNeeds work\nContent\t4\t3\t2\nOrganization\t4\t3\t2",0,D.dh,0.8,0.1,0.1))
w=1
break A}case 1:return B.h(u,v)}})
return B.i($async$qj,v)},
cuv(d){if(!this.y)return!1
if(this.w!=null)return!1
if(!d)return!0
return!D.eYe.q(0,this.z)},
cuu(d){if(this.k_()==null)return!1
if(this.w!=null)return!1
if(d)return!1
return this.as},
b8f(d,e,f,g,h,i){var w,v,u,t,s,r,q,p=null,o=d===D.cl,n=o?12:10
if(e)w=f.j(0.25)
else w=g?A.c.j(0.06):A.w.j(0.04)
v=B.m(12)
u=e?f:A.bz
u=B.I(u,A.r,o&&e?2:1)
t=C.ia7(d)
s=o?12:18
r=o?A.H:A.cO
if(o)if(e)q=f
else q=g?A.ae:A.al
else q=p
n=B.a([B.p(p,B.d(t,p,p,p,p,p,p,B.l(p,p,q,p,p,p,p,p,p,p,p,s,p,p,r,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),A.f,p,p,new B.o(w,p,u,v,p,p,A.n),p,p,p,p,new B.Q(n,8,n,8),p,p,p)],x.p)
if(i)n.push(B.ao(p,B.p(p,D.Ox,A.f,p,p,D.Er,p,12,p,p,p,p,p,12),p,p,p,-2,-2,p))
return new B.D(A.fw,B.aB(p,new B.an(A.a_,p,A.aa,A.f,n,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,h,p,p,p,p,p,p,!1,A.a4),p)},
bNT(d){var w,v=null,u=this.k_()
if(u==null)return A.bJ
w=B.a([A.ab,B.d("Anim:",v,v,v,v,v,v,B.l(v,v,d?A.aB:A.al,v,v,v,v,v,v,v,v,10,v,v,A.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.bo],x.p)
A.d.v(w,new B.N(D.R2,new C.euD(this,u,d),x.bR))
return B.B(w,A.m,v,A.e,A.j,0,v,v)},
vl(d){return this.bAe(d)},
bAe(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$vl=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=D.aOX.q(0,d)
if(s){w=3
break}else f=s
w=4
break
case 3:w=5
return B.b(t.oc(),$async$vl)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}t.d6(new C.esY(t,d))
case 1:return B.h(u,v)}})
return B.i($async$vl,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
if(h.x)return D.eWW
w=h.e
if(w==null)return h.bE7()
v=h.gdv()
v.toString
u=h.c
u.toString
t=B.P(u).ax.a===A.I
u=h.c
u.toString
s=x.w
r=B.aH(u,A.bX,s).w.a.a<900
q=!r
u=h.c
u.toString
p=B.aH(u,A.eL,s).w.f.d>40
s=h.w==null
o=!s
u=!p
n=!u||o
m=t?A.bZ:D.bdY
l=x.p
k=B.a([],l)
if(s){j=h.e
j=j!=null&&j.gSt()}else j=!1
if(j)k.push(new C.a7U(h.a.c,!1,h.e.gbar(),h.gcaw(),g))
else if(s&&h.e!=null&&!h.km()&&C.chA(h.e.w)){j=h.a
k.push(new C.a7U(j.c,j.d,g,h.gcbF(),g))}if(s)k.push(h.bNO(w,t,r))
if(s&&h.km()){w=t?A.fF:A.kA
j=B.m(14)
i=B.I(A.bj.j(0.35),A.r,1)
k.push(B.p(g,B.B(B.a([D.bRo,A.ab,B.E(B.d("Received copy \u2014 view, print, or download only. Editing is turned off.",g,g,g,g,g,g,B.l(g,g,t?A.c:A.fF,g,g,g,g,g,g,g,g,12,g,g,A.O,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),1)],l),A.m,g,A.e,A.j,0,g,g),A.f,g,g,new B.o(w,g,i,j,g,g,A.n),g,g,g,A.Bt,A.iQ,g,g,g))}w=!n
if(w&&!h.km())k.push(h.c3u(t,r))
if(w&&h.km())k.push(h.cBR(t))
if(r&&h.k_()!=null&&w&&!h.km())k.push(h.c3p(t))
j=B.a([],l)
if(q&&w)j.push(new B.a7(132,g,h.b6_(t,!0),g))
i=B.a([],l)
if(r&&w)i.push(new B.a7(g,72,h.b6_(t,!1),g))
i.push(B.E(new B.bL(A.b3,g,g,h.bFq(v,t,!s||p),g),1))
if(h.cuv(r)&&u&&s&&!h.km())i.push(h.cai(v,t,r))
j.push(B.E(B.x(i,A.m,g,A.e,A.j,0,A.p),1))
if(q&&!h.km()&&h.cuu(!1))j.push(new B.a7(240,g,h.bQz(t),g))
k.push(B.E(B.B(j,A.aj,g,A.e,A.j,0,g,g),1))
if(u&&s)k.push(new B.a7(g,r?72:h.a.e,g,g))
w=B.a([B.x(k,A.m,g,A.e,A.j,0,A.p)],l)
if(o&&r)w.push(h.c3q(t))
return B.c5(g,m,B.bm(!1,new B.an(A.a_,g,A.aa,A.t,w,g),!0,!1,A.af,!0,!0),g,!1,!1,g,!1)},
bE7(){var w,v,u,t,s,r=this,q=null,p=r.c
p.toString
w=B.P(p).ax.a===A.I
p=w?A.bZ:A.bN
v=r.a.e
u=r.c9y(A.bj,A.qa,new C.etG(r),r.gcdP(),"School & document toolkit \u2014 edit PDFs, photos, sign papers, present, and build class decks","NGMY SLIDES")
t=x.p
s=B.B(B.a([B.E(r.aMF(A.bj,A.hH,"Blank Presentation",new C.etH(r)),1),A.as,B.E(r.aMF(A.b_,A.wg,"Class Template",new C.etI(r)),1)],t),A.m,q,A.e,A.j,0,q,q)
u=B.a([u,A.bv,s,A.mV,B.d("YOUR PRESENTATIONS",q,q,q,q,q,q,B.l(q,q,w?A.aB:A.al,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1.2,q,q,q,q,q,q),q,q,q),A.ad],t)
t=r.d
if(t.length===0)u.push(r.bB1(w))
else{t=new B.i2(t,B.S(t).k("i2<1>"))
A.d.v(u,t.gdT(t).dF(0,new C.etJ(r,w),x.l))}return B.c5(q,p,B.bm(!1,B.cq(u,q,new B.Q(18,12,18,v),q,q,A.ag,!1),!0,!1,A.af,!0,!0),q,!1,!1,q,q)},
bLX(){this.m(new C.euj(this))
var w=this.c
w.toString
if(B.aH(w,A.bX,x.w).w.a.a<900){w=$.aW.ak$.d.c
if(w!=null)w.jR()}},
afI(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$afI=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.k_()==null){w=1
break}s=t.c
s.toString
s=B.P(s)
r=t.c
r.toString
w=3
return B.b(B.bT(A.K,null,new C.ewu(t,s.ax.a===A.I),r,!0,!0,!0,null,!1,!1,x.H),$async$afI)
case 3:case 1:return B.h(u,v)}})
return B.i($async$afI,v)},
AT(d,e){return this.cuR(d,e)},
cuR(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$AT=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:j=r.c
j.toString
w=3
return B.b(B.i0(D.Xn,!0,"Dismiss",j,new C.ey2(),new C.ey3(d,e),A.iO,!0,x.N),$async$AT)
case 3:o=g
if(o==null||r.c==null){w=1
break}j=o==="rename"
if(j||o==="duplicate")if(d.z){r.aj4()
w=1
break}n=o==="transfer_hati"
if(n&&d.z&&!d.gSt()){r.aj4()
w=1
break}w=o==="pdf"?4:6
break
case 4:t=8
w=11
return B.b(C.aQh(d),$async$AT)
case 11:q=g
j=r.c
if(j==null){w=1
break}w=12
return B.b(C.aPI(j,q,d.b),$async$AT)
case 12:t=2
w=10
break
case 8:t=7
i=s.pop()
p=B.ab(i)
j=r.c
if(j==null){w=1
break}j.J(x.q).f.S(B.b3(null,null,null,null,null,A.t,null,B.d("Could not create PDF: "+B.w(p),null,null,null,null,null,null,null,null,null,null),null,A.V,null,null,null,null,null,null,null,null,null,null))
w=10
break
case 7:w=2
break
case 10:w=5
break
case 6:w=n?13:15
break
case 13:w=16
return B.b(r.Fk(d,!1),$async$AT)
case 16:w=14
break
case 15:w=o==="delete"?17:19
break
case 17:j=r.c
j.toString
w=20
return B.b(B.i0(D.Xn,!0,"Dismiss",j,new C.ey4(),new C.ey5(d),A.a1,!0,x.y),$async$AT)
case 20:if(g===!0)r.O7(d)
w=18
break
case 19:w=j?21:23
break
case 21:w=24
return B.b(r.agK("Rename presentation",d.b),$async$AT)
case 24:l=g
if(l!=null)r.cp8(d,l)
w=22
break
case 23:if(o==="duplicate"){k=d.ag()
k.n(0,"id",C.cE())
k.n(0,"name",d.b+" (Copy)")
r.m(new C.ey6(r,k))
r.pv()}case 22:case 18:case 14:case 5:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$AT,v)},
b12(d,e){var w=null
return B.bK(!1,D.fGJ,w,w,!0,w,w,e,w,B.fx(w,w,w,w,w,w,w,w,w,w,w,A.bj,w,w,w,A.ax,w,A.lz,w,w,w,w,w,A.kk,w,w))},
bB1(d){var w=this.fy
w===$&&B.c()
return B.c9(w,new C.et2(this,d),null)},
bK2(d,e,f){var w=new B.N(B.a(d.split(" \u2022 "),x.s),new C.eu7(),x.dv).c0(0,new C.eu8()),v=B.C(w,w.$ti.k("J.E"))
return new B.D(G.aiq,this.aNe(v,e,new C.eu9(),f),null)},
aNe(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=x.p,l=B.a([],m)
for(w=f!=null,v=0;v<d.length;++v){u=B.a([],m)
if(v>0)u.push(A.ej)
t=e.j(g?0.14:0.1)
s=new B.aQ(6,6)
r=new B.ay(e.j(g?0.55:0.45),1,A.r,-1)
q=B.a([],m)
if(w){p=f.$1(d[v])
A.d.v(q,B.a([B.X(p,g?A.ae:A.bs,n,n,n,10),A.qz],m))}p=d[v]
o=g?A.c.j(0.85):A.aJ
q.push(new B.y(p,n,new B.F(!0,o,n,n,n,n,9.5,A.H,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n,n,n,n,1,n,n))
u.push(B.p(n,new B.cb(A.aN,A.e,A.P,A.m,n,A.p,n,0,q,n),A.f,n,n,new B.o(t,n,new B.bI(r,r,r,r),new B.bk(s,s,s,s),n,n,A.n),n,n,n,n,A.mF,n,n,n))
A.d.v(l,u)}return B.eQ(A.a3,B.B(l,A.m,n,A.e,A.P,0,n,n),A.f,A.e0)},
bB_(d,e,f){return this.aNe(d,e,null,f)},
bK4(d,e,f){var w,v=d.w
if(v==="hati_kuhowa")w=D.dke
else if(v==="hati_kuhoweya")w=D.d5w
else{if(v==="hati_kiapo_uongozi")v=D.cSX
else v=C.kC(v)?D.d_f:A.QE
w=v}v=this.fy
v===$&&B.c()
return B.c9(v,new C.euc(this,f,d,e,w),null)},
c3q(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.k_()
if(i==null||i.b!==D.cQ)return A.bJ
w=k.WP(i)
v=k.atP(i)
u=A.w.j(0.55)
t=x.p
s=B.bm(!1,new B.D(A.Bv,B.B(B.a([B.d("Edit text",j,j,j,j,j,j,B.l(j,j,A.c.j(0.9),j,j,j,j,j,j,j,j,15,j,j,A.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),A.b0,B.bK(!1,D.fCd,j,j,!0,j,j,new C.evD(k),j,j)],t),A.m,j,A.e,A.j,0,j,j),j),!0,!1,A.af,!0,!0)
r=d?A.au:A.c
q=B.m(18)
p=B.I(A.bj.j(0.45),A.r,1)
o=B.a([new B.ac(0,A.G,A.w.j(0.25),A.J,20)],x.V)
n=i.x
m=i.y
l=i.z
r=B.E(new B.D(A.hf,B.c1(new B.D(A.eP,B.aN(j,A.X,!0,j,!0,A.t,j,B.aO(),w,A.bj,j,j,j,j,2,D.bXp,A.y,!0,j,!0,j,!0,v,A.ak,j,j,j,j,j,A.wN,j,j,j,j,j,j,!1,"\u2022",j,new C.evE(k,i),j,j,j,!1,j,j,!1,j,!0,j,A.a9,j,j,j,j,j,j,j,j,j,j,j,B.l(j,j,d?A.c:A.M,j,l,j,j,j,j,j,j,18,m,j,n,j,1.35,!0,j,j,j,j,j,j,j,j),!0,A.a6,A.zZ,A.ao,j,A.TZ,j,j),j),new B.o(r,j,p,q,o,j,A.n),A.bf),j),1)
q=B.m(16)
p=d?A.bn:A.c
o=B.I(d?A.aJ:A.aM,A.r,1)
n=B.E(B.cd(B.B(B.a([k.u8(G.NC,j,new C.evF(k,i),d),k.u8(G.a0b,j,new C.evG(k,i),d),k.u8(I.amI,j,new C.evH(k,i),d),k.u8(I.a0T,j,new C.evI(k,i),d),k.u8(k.bAY(i.as),j,new C.evJ(k,i),d),k.u8(D.anR,j,new C.evK(k,i),d),k.u8(D.anQ,j,new C.evL(k,i),d)],t),A.m,j,A.e,A.j,0,j,j),A.t,j,A.y,j,j,j,j,A.aN),1)
m=A.k.O(i.w)
return B.bU(0,B.aF(!1,A.a1,!0,j,B.x(B.a([s,r,new B.D(H.aiz,B.p(j,B.B(B.a([n,A.ab,B.d(""+m+" pt",j,j,j,j,j,j,B.l(j,j,d?A.aB:A.al,j,j,j,j,j,j,j,j,11,j,j,A.H,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),A.dc],t),A.m,j,A.e,A.j,0,j,j),A.f,j,j,new B.o(p,j,o,q,j,j,A.n),j,j,j,j,A.lA,j,j,j),j)],t),A.m,j,A.e,A.j,0,A.p),A.f,u,0,j,j,j,j,j,A.ah),0,0,0)},
c3p(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.k_()
if(m==null)return A.bJ
w=m.b
v=w===D.cQ
u=B.m(18)
t=x.O
t=d?B.a([A.bn,A.M],t):B.a([A.c,A.aP],t)
s=B.I(d?A.aJ:A.aM,A.r,1)
r=B.a([new B.ac(0,A.G,A.w.j(0.12),A.cv,16)],x.V)
q=x.p
p=B.a([],q)
if(v)p.push(o.b4D(A.jb,"Edit",new C.evo(o,m),d,!0))
if(w===D.lJ)p.push(o.b4D(A.GL,"Shape & ring",new C.evp(o),d,!0))
p.push(o.u8(A.Ch,"Format",new C.evq(o),d))
if(v)A.d.v(p,B.a([o.u8(G.NC,n,new C.evr(o,m),d),o.u8(D.anR,n,new C.evs(o,m),d),o.u8(D.anQ,n,new C.evt(o,m),d)],q))
p.push(A.b0)
p.push(o.csG(A.ec,n,o.gaRg(),d,!0))
p.push(o.u8(A.hI,"Done",new C.evu(o),d))
return B.p(n,B.B(p,A.m,n,A.e,A.j,0,n,n),A.f,n,n,new B.o(n,n,s,u,r,new B.a9(A.a3,A.a8,A.x,t,n,n),A.n),n,n,n,A.Bu,A.lA,n,n,n)},
bAY(d){switch(d.a){case 2:return D.a0Q
case 1:case 5:return D.a0S
default:return D.a0R}},
c4k(d){switch(d.a){case 0:case 4:return A.L
case 2:return A.dT
default:return A.bi}},
aA8(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o,n=null
if(i)w=A.aw
else if(h)w=A.c
else{v=g?A.ae:A.aJ
w=v}v=B.m(12)
u=B.m(12)
t=h?L.H6:n
if(h)s=n
else s=g?A.c.j(0.06):A.bN
r=e==null
q=r?10:12
p=x.p
o=B.a([B.X(d,w,n,n,n,16)],p)
if(!r)A.d.v(o,B.a([A.ej,B.d(e,n,n,n,n,n,n,B.l(n,n,w,n,n,n,n,n,n,n,n,12,n,n,A.H,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],p))
return new B.D(A.q6,B.aF(!1,A.a1,!0,n,B.aM(!1,v,!1,B.eF(new B.D(new B.Q(q,8,q,8),B.B(o,A.m,n,A.e,A.P,0,n,n),n),n,new B.o(s,n,n,u,n,t,A.n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,f,n,n,n,n,n,n,n),A.f,A.K,0,n,n,n,n,n,A.ah),n)},
u8(d,e,f,g){return this.aA8(d,e,f,g,!1,!1)},
b4D(d,e,f,g,h){return this.aA8(d,e,f,g,h,!1)},
csG(d,e,f,g,h){return this.aA8(d,e,f,g,!1,h)},
bNO(d,e,f){var w,v,u,t,s,r,q,p=this,o=null,n=B.m(20),m=x.O
m=e?B.a([A.bn,A.M],m):B.a([A.c,A.n2],m)
w=B.I(e?A.aJ:A.nR,A.r,1.2)
v=B.a([new B.ac(0,A.G,A.bj.j(e?0.18:0.1),A.cv,18)],x.V)
u=p.a2Q(A.eI,"Back",p.gbHa(),e)
t=d.b
s=f?14:15
t=B.d(t,o,1,A.a2,o,o,o,B.l(o,o,e?A.c:A.M,o,o,o,o,o,o,o,o,s,o,o,A.u,o,o,!0,o,-0.2,o,o,o,o,o,o),o,o,o)
s=p.f
r=d.r.length
q=x.p
r=B.a([u,A.dc,B.E(B.B(B.a([new B.ds(1,A.cn,t,o),A.ab,B.d(""+(s+1)+" of "+r,o,1,o,o,o,o,B.l(o,o,e?A.bU:A.al,o,o,o,o,o,o,o,o,11,o,o,A.O,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],q),A.tM,o,A.e,A.j,0,A.cV,o),1)],q)
if(!p.km()){u=p.a2Q(A.rs,"Undo",p.ax.length===0?o:p.gcCp(),e)
A.d.v(r,B.a([u,p.a2Q(D.bKW,"Redo",p.ay.length===0?o:p.gcnS(),e)],q))}r.push(p.a2Q(A.yw,"PDF",new C.euw(p),e))
r.push(p.a2Q(A.hJ,"Download as video",new C.eux(p),e))
if(!p.km())r.push(B.C8(o,o,B.X(A.oa,e?A.ae:A.bs,o,o,o,o),new C.euy(p),A.J,new C.euz(p),A.af,"More",x.N))
r.push(A.dc)
r.push(B.aF(!1,A.a1,!0,o,B.aM(!1,B.m(14),!0,B.eF(D.ehx,o,new B.o(o,o,o,B.m(14),o,L.H6,A.n),o,o,o),o,!0,o,o,o,o,o,o,o,o,o,o,o,p.gaAX(),o,o,o,o,o,o,o),A.f,A.K,0,o,o,o,o,o,A.ah))
return B.p(o,B.B(r,A.m,o,A.e,A.j,0,o,o),A.f,o,o,new B.o(o,o,w,n,v,new B.a9(A.ay,A.aD,A.x,m,o,o),A.n),o,o,o,D.bvH,D.bAY,o,o,o)},
cBR(d){var w=this,v=null,u=B.m(18),t=d?A.au.j(0.92):A.c.j(0.96),s=B.I(d?A.cp:A.aM,A.r,1)
return B.p(v,B.cd(B.B(B.a([w.iS(A.un,"Print",new C.eyO(w),d),w.iS(A.yw,"Download PDF",new C.eyP(w),d),w.iS(A.qf,"Present",w.gaAX(),d)],x.p),A.m,v,A.e,A.j,0,v,v),A.t,v,A.y,v,v,v,v,A.aN),A.f,v,v,new B.o(t,v,s,u,v,v,A.n),v,v,v,A.Bt,G.akc,v,v,v)},
a2Q(d,e,f,g){var w,v=null
if(f==null)w=g?A.aZ:A.dp
else w=g?A.ae:A.aJ
return B.aJ(v,v,v,v,B.X(d,w,v,v,v,20),v,v,v,f,v,v,v,v,e,A.cd)},
c3u(d,e){var w,v,u,t,s,r=this,q=null,p=B.a(["Home","Insert","School","Tools","Design","Transitions","View"],x.s),o=r.e
if(o==null)o=q
else{o=o.CW
o=(o==null?"":o).length!==0}w=o===!0
o=B.m(18)
v=d?A.au.j(0.92):A.c.j(0.96)
u=B.I(d?A.cp:A.aM,A.r,1)
t=x.f0
t=B.C(new B.N(p,new C.evO(r,d),t),t.k("ak.E"))
t.push(new B.D(Y.ajS,new B.fd(new C.evP(r),q),q))
A.d.v(t,w?B.a([new B.D(R.vY,r.ahn(A.l5,"Ending celebration",r.gce1(),d),q),new B.D(R.vY,r.ahn(A.GL,"Logo ring & frame",r.gceJ(),d),q)],x.p):A.fV)
A.d.v(t,w?B.a([new B.D(R.vY,r.ahn(A.nq,"Look and feel",r.gceK(),d),q),new B.D(R.vY,r.ahn(A.p8,"Edit this slide's text",r.gcfg(),d),q)],x.p):A.fV)
t.push(new B.D(R.vY,B.hc(B.aB(q,B.p(q,D.eWl,A.f,q,q,new B.o(q,q,q,B.m(999),B.a([new B.ac(0,A.G,O.lu.j(0.4),A.J,10)],x.V),D.apN,A.n),q,34,q,q,A.fI,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.evQ(r),q,q,q,q,q,q,!1,A.a4),q,"Books \u2014 write and print a fold & staple book",q,q),q))
t=B.cd(B.B(t,A.m,q,A.e,A.j,0,q,q),A.t,q,A.y,q,D.bBq,q,q,A.aN)
s=e?8:10
return B.p(q,B.x(B.a([t,B.cd(r.cqi(d),A.t,q,A.y,q,new B.Q(8,2,8,s),q,q,A.aN)],x.p),A.aj,q,A.e,A.j,0,A.p),A.f,q,q,new B.o(v,q,u,o,q,q,A.n),q,q,q,A.Bt,q,q,q,q)},
cqi(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0="Text Box",a1="New Slide",a2="Delete Slide"
switch(e.z){case"School":w=B.a([],x.p)
for(v=0;v<5;++v){u={}
t=D.ddE[v]
u.a=null
s=u.a=t.b
w.push(e.lK(e.cs4(s),t.a,new C.exc(u,e),a3,D.aOX.q(0,s)))}w.push(e.iS(A.l7,"Notes Slide",new C.exd(e),a3))
w.push(e.lK(A.GK,"Quiz",new C.exe(e),a3,!0))
w.push(e.lK(M.Gl,"Worksheet",new C.exp(e),a3,!0))
w.push(e.lK(V.GQ,"Flashcard",new C.exA(e),a3,!0))
w.push(e.lK(A.Oo,"Lab Report",new C.exL(e),a3,!0))
w.push(e.lK(A.ue,"Rubric",new C.exS(e),a3,!0))
w.push(e.lK(A.p3,"Minutes",new C.exT(e),a3,!0))
w.push(e.lK(A.o9,"Syllabus",new C.exU(e),a3,!0))
w.push(e.lK(A.a1p,"Timeline",new C.exV(e),a3,!0))
return B.B(w,A.m,d,A.e,A.j,0,d,d)
case"Tools":w=B.a([],x.p)
for(v=0;v<74;++v){r=D.deY[v]
w.push(e.lK(r.b,r.c,new C.exW(e,r),a3,!D.aP2.q(0,A.a.i(r.a))))}return B.B(w,A.m,d,A.e,A.j,0,d,d)
case"Insert":return B.B(B.a([e.iS(A.yQ,a0,e.gaMW(),a3),e.iS(A.uj,"Picture",new C.exf(e),a3),e.iS(A.yK,"Bio link",new C.exg(e),a3),e.iS(A.a1o,"Table",new C.exh(e),a3),e.iS(A.Os,"Sticky",new C.exi(e),a3),e.iS(A.ui,"Divider",new C.exj(e),a3),e.iS(A.Ci,"Header",new C.exk(e),a3),e.lK(A4.w6,"Rectangle",new C.exl(e),a3,!0),e.lK(A.rl,"Circle",new C.exm(e),a3,!0),e.lK(A.a0J,"Triangle",new C.exn(e),a3,!0),e.lK(A.jP,"Arrow",new C.exo(e),a3,!0),e.lK(D.bJq,"Parallelogram",new C.exq(e),a3,!0),e.lK(D.bLO,"Hexagon",new C.exr(e),a3,!0),e.lK(A.ui,"Line",new C.exs(e),a3,!0),e.lK(A.yw,"PDF",new C.ext(e),a3,!0),e.lK(O.a1y,"Signature",new C.exu(e),a3,!0),e.iS(A3.C5,"Quote",new C.exv(e),a3),e.iS(D.a0j,a1,new C.exw(e),a3)],x.p),A.m,d,A.e,A.j,0,d,d)
case"Design":w=e.c
w.toString
w=B.aH(w,A.bX,x.w).w
u=x.p
t=B.B(B.a([e.aNL("Wide 16:9",D.D9,a3),e.aNL("Short 9:16",D.on,a3),new B.D(A.fw,B.mP(D.bNZ,d,D.fyv,d,new C.exx(e),d,d,d,d),d)],u),A.m,d,A.e,A.j,0,d,d)
q=B.B(B.a([e.bHp("This slide",!e.Q,a3,new C.exy(e)),A.bo,e.aPX("All slides",e.Q,a3,new C.exz(e),!0)],u),A.m,d,A.e,A.j,0,d,d)
p=e.bHq()
p=B.d(p,d,d,d,d,d,d,B.l(d,d,a3?A.bU:A.bL,d,d,d,d,d,d,d,d,10,d,d,A.a7,d,d,!0,d,d,d,d,d,d,d,d),d,d,d)
o=B.d("COLORS",d,d,d,d,d,d,B.l(d,d,a3?A.aB:A.al,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
n=x.cT
n=B.C(new B.N(D.a3r,new C.exB(e),n),n.k("ak.E"))
n=B.cd(B.B(n,A.m,d,A.e,A.j,0,d,d),A.t,d,A.y,d,d,d,d,A.aN)
m=B.d("TEXT COLORS",d,d,d,d,d,d,B.l(d,d,a3?A.aB:A.al,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
l=B.a([],u)
for(v=0;v<10;++v){k=D.dfZ[v]
j=B.b1(k)
i=new B.ay(k===4294967295?A.dp:A.aZ,1.5,A.r,-1)
l.push(new B.D(A.fw,B.aB(d,B.p(d,d,A.f,d,d,new B.o(j,d,new B.bI(i,i,i,i),d,d,d,A.a5),d,24,d,d,d,d,d,24),A.y,!1,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,new C.exC(e,k),d,d,d,d,d,d,!1,A.a4),d))}l=B.cd(B.B(l,A.m,d,A.e,A.j,0,d,d),A.t,d,A.y,d,d,d,d,A.aN)
j=B.d("SLIDE DESIGNS \xb7 first 5 free",d,d,d,d,d,d,B.l(d,d,a3?A.aB:A.al,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
h=$.bEi()
g=B.S(h).k("N<1,D>")
h=B.C(new B.N(h,new C.exD(e,a3),g),g.k("ak.E"))
return new B.a7(w.a.a-20,d,B.x(B.a([t,A.N,q,A.am,p,A.N,o,A.av,n,A.N,m,A.av,l,A.N,j,A.av,B.cd(B.B(h,A.m,d,A.e,A.j,0,d,d),A.t,d,A.y,d,d,d,d,A.aN),A.am,e.c0f(a3)],u),A.E,d,A.e,A.P,0,A.p),d)
case"Transitions":f=e.k_()
w=e.c
w.toString
w=B.aH(w,A.bX,x.w).w
u=new C.exb(e)
t=new C.exX(e,a3)
q=x.p
p=B.a([],q)
if(f!=null){o=B.d("ELEMENT ANIMATION",d,d,d,d,d,d,B.l(d,d,a3?A.aB:A.al,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
n=t.$4(D.R2,f.dy,new C.exE(e,u,f),A.b_)
A.d.v(p,B.a([o,A.av,n,A.N,B.d("SLIDE TRANSITION",d,d,d,d,d,d,B.l(d,d,a3?A.aB:A.al,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d),A.av],q))}q=e.gdv()
q=q==null?d:q.r
p.push(t.$4(D.R2,q,new C.exF(e,u),A.bj))
return new B.a7(w.a.a-20,d,B.x(p,A.E,d,A.e,A.P,0,A.p),d)
case"View":w=e.y?"Hide Notes":"Show Notes"
return B.B(B.a([e.iS(A.l7,w,new C.exG(e),a3),e.iS(A.un,"Print deck",new C.exH(e),a3),e.lK(D.alM,"Export JSON",new C.exI(e),a3,!0),e.iS(A.fK,"Duplicate Slide",e.gaS8(),a3),e.iS(A.ec,a2,e.gaRh(),a3),e.cwc(a3)],x.p),A.m,d,A.e,A.j,0,d,d)
case"Home":default:f=e.k_()
w=x.p
u=B.a([e.iS(D.a0j,a1,new C.exJ(e),a3),e.iS(A.fK,"Duplicate",e.gaS8(),a3),e.iS(A.ec,a2,e.gaRh(),a3),e.iS(A.qf,"Present",e.gaAX(),a3),e.iS(A.Cf,a0,e.gaMW(),a3),e.iS(A.C9,"Fit Text",new C.exK(e),a3),e.iS(A.yw,"Download PDF",new C.exM(e),a3)],w)
t=e.e
if(t!=null){t=t.w
t=t==="hati_kuhowa"||t==="hati_kuhoweya"}else t=!1
if(t)u.push(e.iS(A.kg,"Transfer",new C.exN(e),a3))
if(f!=null){w=B.a([A.ab,e.iS(G.NC,"Bold",new C.exO(e,f),a3),e.iS(G.a0b,"Italic",new C.exP(e,f),a3),e.iS(G.aln,"Underline",new C.exQ(e,f),a3),e.iS(Ae.ND,"Bullets",new C.exR(e,f),a3),e.bQi(f,a3)],w)
if(!A.a.a0(f.db,"__design__"))w.push(e.bNT(a3))
w.push(e.iS(D.bI6,"Delete",e.gaRg(),a3))
A.d.v(u,w)}return B.B(u,A.m,d,A.e,A.j,0,d,d)}},
aNL(d,e,f){var w,v,u,t=null,s=this.e
s=s==null?t:s.d
w=e===D.on
v=x.p
u=B.a([B.d(d,t,t,t,t,t,t,G.a9c,t,t,t)],v)
if(w)A.d.v(u,B.a([A.dc,D.bNa],v))
return new B.D(A.fw,B.j0(t,t,t,B.B(u,A.m,t,A.e,A.P,0,t,t),t,new C.etB(this,w,e),s===e,A.bj.j(0.25),t,t,t),t)},
cwc(d){var w,v,u,t,s,r=this,q=null,p=r.gdv()
if(p==null)return A.bJ
w=p.w
if(!(w>0)){v=r.e
v=v==null?q:v.e
w=v==null?5:v}v=B.I(d?A.aZ:A.cr,A.r,1)
u=B.m(8)
t=B.X(A.Gj,d?A.aB:A.al,q,q,q,14)
s=B.aJ(q,q,q,q,D.aoN,q,q,q,new C.eyj(r,p),q,q,q,q,q,A.cd)
return B.p(q,B.B(B.a([t,s,B.d(""+w+"s",q,q,q,q,q,q,B.l(q,q,d?A.c:A.bk,q,q,q,q,q,q,q,q,11,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.aJ(q,q,q,q,D.aoE,q,q,q,new C.eyk(r,p),q,q,q,q,q,A.cd)],x.p),A.m,q,A.e,A.P,0,q,q),A.f,q,q,new B.o(q,q,v,u,q,q,A.n),q,q,q,A.G_,A.mE,q,q,q)},
cs4(d){switch(d.a){case 6:return V.GQ
case 7:return A.GK
case 8:return M.Gl
case 4:return A.Ci
default:return A.l7}},
bQi(d,e){var w=null,v=B.I(e?A.aZ:A.cr,A.r,1),u=B.m(8),t=B.aJ(w,w,w,w,D.aoN,w,w,w,new C.euJ(this,d),w,w,w,w,w,A.cd),s=A.k.O(d.w)
return B.p(w,B.B(B.a([t,B.d(""+s,w,w,w,w,w,w,B.l(w,w,e?A.c:A.bk,w,w,w,w,w,w,w,w,w,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aJ(w,w,w,w,D.aoE,w,w,w,new C.euK(this,d),w,w,w,w,w,A.cd)],x.p),A.m,w,A.e,A.P,0,w,w),A.f,w,w,new B.o(w,w,v,u,w,w,A.n),w,w,w,A.vX,A.mE,w,w,w)},
c0f(d){var w=null
return B.C8(B.Dw(B.X(A6.a0m,d?A.ae:A.bs,w,w,w,16),w,w,D.fE5,w,w,w),w,w,new C.evg(),A.J,this.gbBF(),A.cm,"Slide layout",x.fO)},
lK(d,e,f,g,h){var w=null,v=B.m(14),u=B.m(14),t=g?A.c.j(0.06):A.bN,s=B.I(g?A.ds:A.aM,A.r,1),r=x.p,q=B.a([B.X(d,g?A.dt:A.bj,w,w,w,18)],r)
if(h)q.push(B.ao(w,B.p(w,D.Ox,A.f,w,w,D.Er,w,12,w,w,w,w,w,12),w,w,w,-6,-4,w))
return new B.D(A.fw,B.aF(!1,A.a1,!0,w,B.aM(!1,v,!0,B.eF(new B.D(A.hf,B.x(B.a([new B.an(A.a_,w,A.aa,A.f,q,w),A.cK,B.d(e,w,w,w,w,w,w,B.l(w,w,g?A.aQ:A.bs,w,w,w,w,w,w,w,w,9,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],r),A.m,w,A.e,A.P,0,A.p),w),w,new B.o(t,w,s,u,w,w,A.n),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ah),w)},
iS(d,e,f,g){return this.lK(d,e,f,g,!1)},
b6_(d,e){var w,v,u=this,t=null,s=u.e
s.toString
w=e?A.ag:A.aN
v=B.hN(t,new C.eyv(u,s,e,d),s.r.length,A.cm,t,w,new C.eyw(e),!1)
s=d?A.au:A.bN
w=B.a([],x.p)
if(e&&!u.km())w.push(new B.D(A.cm,B.I_(E.ap_,new C.eyx(u),B.nG(t,A.bj,t,t,t,t,t,t,t,t,t,t,E.aPG,t,t,t,t),"Add slide"),t))
w.push(B.E(v,1))
return B.p(t,B.x(w,A.m,t,A.e,A.j,0,A.p),A.f,s,t,t,t,t,t,t,t,t,t,t)},
bFq(d,e,f){var w,v=null,u=this.e
if(u==null)w=v
else{u=u.d===D.on?0.5625:1.7777777777777777
w=u}if(w==null)w=1.7777777777777777
u=f?8:16
return new B.D(new B.Q(u,u,u,u),new B.bL(A.b3,v,v,new B.fL(w,B.aB(v,B.cC(new C.eu_(this,d,e)),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.eu0(this),v,v,v,v,v,v,!1,A.a4),v),v),v)},
bFs(b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=a7.e,b0=(a9==null?a8:C.kC(a9.w))===!0,b1=b0&&C.fFl(b3),b2=b0&&b3.b===D.lf&&A.a.a0(b3.db,"marriage_sign_placed_")
if(b0){a9=b3.db
w=a9==="__kiapo_video__"||A.a.a0(a9,"__kiapo_video___")}else w=!1
if(!a7.km())v=!b0||a7.c2y(b3)
else v=!1
if(!a7.km())u=!b0||a7.c2x(b3)
else u=!1
t=v&&a7.r===b3.a
s=b4/960
a9=b3.db
r=A.a.a0(a9,"__design__")||A.a.a0(b3.a,"design_")?A.ca:A.bj
q=b0&&A.a.a0(a9,"marriage_field_")
if(b0)p=a9==="marriage_locked_nim_akuna_deni"||a9==="marriage_locked_nim_akuna_box"||a9==="marriage_locked_nim_akuna_tick"||a9==="marriage_locked_nim_akuna_hit"
else p=!1
if(w&&C.h3M(b3))o=a8
else if(p&&!a7.km())o=a7.gcay()
else o=a7.km()?a8:new C.etO(a7,w,b3,b1,b2,v)
a9=b3.a
n=b3.c
m=b3.d
l=b3.e
k=b3.f
j=p?A.cc:A.jz
i=w&&C.h3M(b3)&&a7.zW()?new C.etP(a7,b3):a8
h=v&&b3.b===D.cQ?new C.etQ(a7,b3):a8
g=u?new C.etR(a7,b3,b4,b5):a8
f=b3.cx
if(t)if(a7.w===a9)e=A.be
else e=q?A.c_:r
else e=A.K
e=B.I(e,A.r,t?2:0)
d=B.m(t?6:0)
if(b1)a0=A.c_.j(0.08)
else a0=b3.b===D.lf?A.K:a8
if(b1){a1=a7.km()?"":"Tap to sign"
a1=B.at(B.d(a1,a8,a8,a8,a8,a8,a8,B.l(a8,a8,A.c_.j(0.7),a8,a8,a8,a8,a8,a8,a8,a8,10*s,a8,a8,A.O,a8,a8,!0,a8,a8,a8,a8,a8,a8,a8,a8),a8,a8,a8),a8,a8,a8)}else{if(a7.w===a9){a1=a7.c
a1.toString
a1=!(B.aH(a1,A.bX,x.w).w.a.a<900)}else a1=!1
a2=w&&a7.zW()
a3=b3.b===D.cQ
a4=a3?a7.WP(b3):a8
a5=a3?a7.atP(b3):a8
if(a7.w===a9){a6=a7.c
a6.toString
a6=!(B.aH(a6,A.bX,x.w).w.a.a<900)}else a6=!1
a6=a6?new C.etS(a7,b3):a8
a3=v&&a3?new C.etT(a7,b3):a8
a6=C.b1v(q,a4,a1,b3,a5,a2,a3,new C.etU(a7,w,b3,v),a6,s,t,!0)
a1=a6}d=B.a([B.p(a8,a1,A.f,a8,a8,new B.o(a0,a8,e,d,a8,a8,A.n),a8,a8,a8,a8,a8,a8,a8,a8)],x.p)
if(t&&u&&a7.w!==a9){e=B.m(6)
d.push(B.ao(-4,B.aB(a8,B.p(a8,D.bQ_,A.f,a8,a8,new B.o(r,a8,B.I(A.c,A.r,1.5),e,a8,a8,A.n),a8,22,a8,a8,a8,a8,a8,22),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.etV(a7,b3,b4,b5),a8,a8,new C.etW(a7,b3),a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,!1,A.a4),a8,a8,a8,-4,a8,a8))}if(b0&&!a7.km()&&b3.db==="marriage_locked_nim_n_4")d.push(B.ao(a8,B.aB(a8,B.p(a8,D.bQG,A.f,a8,a8,new B.o(A.dv,a8,B.I(A.c,A.r,1.2),a8,B.a([new B.ac(0,A.G,A.w.j(0.25),A.J,4)],x.V),a8,A.a5),a8,20,a8,a8,a8,a8,a8,20),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a7.gbYQ(),a8,a8,a8,a8,a8,a8,!1,A.a4),a8,a8,a8,-6,-6,a8))
if(b0&&!a7.km()&&A.a.a0(b3.db,"marriage_field_tarehe:"))d.push(B.ao(a8,B.aB(a8,B.p(a8,D.bSg,A.f,a8,a8,new B.o(A.c_,a8,B.I(A.c,A.r,1.2),a8,B.a([new B.ac(0,A.G,A.w.j(0.25),A.J,4)],x.V),a8,A.a5),a8,20,a8,a8,a8,a8,a8,20),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.etX(a7,b3),a8,a8,a8,a8,a8,a8,!1,A.a4),a8,a8,a8,-6,-6,a8))
e=!1
if(t)if(b3.b===D.cQ)if(a7.w!==a9){e=a7.c
e.toString
e=B.aH(e,A.bX,x.w).w.a.a<900}if(e)d.push(B.ao(-28,B.at(B.aB(a8,B.p(a8,D.fN5,A.f,a8,a8,new B.o(A.bj,a8,a8,B.m(999),B.a([new B.ac(0,A.G,A.w.j(0.2),A.J,8)],x.V),a8,A.n),a8,a8,a8,a8,A.l2,a8,a8,a8),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.etY(a7,b3),a8,a8,a8,a8,a8,a8,!1,A.a4),a8,a8,a8),a8,a8,0,0,a8,a8))
return B.ao(a8,B.aB(j,B.eI(A.A,f,new B.an(A.a_,a8,A.aa,A.f,d,a8),a8),A.y,!1,a8,h,a8,a8,a8,a8,a8,a8,i,a8,a8,a8,a8,a8,a8,g,a8,a8,a8,a8,a8,a8,a8,o,a8,a8,a8,a8,a8,a8,!1,A.a4),k*b5,new B.cs("el_"+a9,x.W),n*b4,a8,m*b5,l*b4)},
aPX(d,e,f,g,h){var w,v,u,t,s,r=null
if(e)w=A.bj.j(0.25)
else w=f?A.c.j(0.06):A.w.j(0.04)
v=B.m(10)
u=B.I(e?A.bj:A.bz,A.r,1)
if(e)t=A.bj
else t=f?A.aB:A.al
s=x.p
t=B.a([B.d(d,r,r,r,r,r,r,B.l(r,r,t,r,r,r,r,r,r,r,r,10,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],s)
if(h)A.d.v(t,B.a([A.dc,B.p(r,D.Ox,A.f,r,r,D.Er,r,12,r,r,r,r,r,12)],s))
return B.aB(r,B.p(r,B.B(t,A.m,r,A.e,A.P,0,r,r),A.f,r,r,new B.o(w,r,u,v,r,r,A.n),r,r,r,r,A.h3,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,g,r,r,r,r,r,r,!1,A.a4)},
bHp(d,e,f,g){return this.aPX(d,e,f,g,!1)},
cai(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=d.a
if(m.cy!==k){m.cy=k
w=m.cx
v=w.h(0,k)
if(v!=null){v.T$=$.ax()
v.P$=0}v=d.c
w.n(0,k,new B.as(new B.bb(v,A.b4,A.aO),$.ax()))}k=m.cx.h(0,k)
k.toString
w=f?8:10
v=f?8:10
u=e?A.au:A.aP
t=f?A.xg:l
if(f)s=new B.bI(new B.ay(e?A.bz:A.aM,1,A.r,-1),A.a0,A.a0,A.a0)
else s=l
r=f?B.a([new B.ac(0,A.G,A.w.j(0.12),A.rN,16)],x.V):l
q=x.p
p=B.B(B.a([B.d("Speaker Notes",l,l,l,l,l,l,B.l(l,l,e?A.ae:A.bs,l,l,l,l,l,l,l,l,12,l,l,A.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),A.b0,m.b12(e,new C.evS(m))],q),A.m,l,A.e,A.j,0,l,l)
o=B.l(l,l,e?A.c:A.aJ,l,l,l,l,l,l,l,l,12,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
n=B.l(l,l,e?A.bU:A.bL,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
return B.p(l,B.x(B.a([p,A.am,B.E(B.aN(l,A.X,!1,l,!0,A.t,l,B.aO(),k,l,l,l,l,l,2,B.bs(l,new B.b5(4,B.m(10),A.dk),l,A.bT,l,l,l,l,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,n,"Speaker notes for this slide\u2026",l,l,l,l,l,!0,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ak,l,l,l,l,l,l,l,l,l,2,l,l,!1,"\u2022",l,new C.evT(m,d),l,l,l,!1,l,l,!1,l,!0,l,A.a9,l,l,l,l,l,l,l,l,l,l,l,o,!0,A.a6,l,A.ao,l,l,l,l),1)],q),A.aj,l,A.e,A.j,0,A.p),A.f,l,l,new B.o(u,l,s,t,r,l,A.n),l,96,l,l,new B.Q(12,w,12,v),l,l,l)},
aTq(a3,a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=null,a2=a0.k_()
if(a2==null)return A.bJ
w=new C.euX(a0,a6)
v=B.a([4279310375,4294967295,4280640491,4278556265,4292617766,4286331629,4293548044,4281549141],x.t)
u=A.k.E(1-a2.c,0.06,1)
t=A.k.E(1-a2.d,0.06,1)
s=A.k.E(1-a2.e,0.01,1)
r=A.k.E(1-a2.f,0.01,1)
q=a5?A.dQ:a1
p=x.p
o=B.a([],p)
n=!a5
if(n)o.push(B.B(B.a([B.d("Format",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.c:A.M,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,A.u,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),A.b0,a0.b12(a3,a0.gbLW())],p),A.m,a1,A.e,A.j,0,a1,a1))
if(n)o.push(A.R)
o.push(B.d("Size",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aB:A.al,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1))
o.push(B.B(B.a([D.fz0,B.E(B.l4(a1,a1,a1,u,0.05,new C.euY(w,a2),A.k.E(a2.e,0.05,u)),1)],p),A.m,a1,A.e,A.j,0,a1,a1))
o.push(B.B(B.a([D.fLu,B.E(B.l4(a1,a1,a1,t,0.05,new C.euZ(w,a2),A.k.E(a2.f,0.05,t)),1)],p),A.m,a1,A.e,A.j,0,a1,a1))
n=a2.b
m=n===D.cQ
if(m)o.push(B.B(B.a([D.fsF,B.E(B.l4(a1,a1,a1,96,10,new C.ev_(w,a2),A.k.E(a2.w,10,96)),1)],p),A.m,a1,A.e,A.j,0,a1,a1))
l=n===D.lJ
if(l||n===D.lf||n===D.Sp)A.d.v(o,B.a([B.d("Crop / position",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aB:A.al,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),B.B(B.a([D.fER,B.E(B.l4(a1,a1,a1,s,0,new C.ev0(w,a2),A.k.E(a2.c,0,s)),1)],p),A.m,a1,A.e,A.j,0,a1,a1),B.B(B.a([D.fMN,B.E(B.l4(a1,a1,a1,r,0,new C.ev1(w,a2),A.k.E(a2.d,0,r)),1)],p),A.m,a1,A.e,A.j,0,a1,a1)],p))
if(l){l=B.d("Shape (frame)",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aB:A.al,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
k=B.a([],p)
for(j=0;j<7;++j){i={}
h=D.CB[j]
i.a=null
g=h.a
i.a=g
k.push(B.j0(a1,a1,a1,new B.y(h.b,a1,A.ps,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,new C.ev2(i,w,a2),a2.go===g,a1,a1,a1,a1))}k=B.bW(A.bD,k,A.bq,6,6)
i=B.d("Ring",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aB:A.al,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
h=B.a([],p)
for(j=0;j<11;++j){f={}
e=D.Cw[j]
f.a=null
g=e.a
f.a=g
h.push(B.j0(a1,a1,a1,new B.y(e.b,a1,A.ps,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,new C.ev3(f,w,a2),a2.id===g,a1,a1,a1,a1))}A.d.v(o,B.a([A.N,l,A.am,k,A.N,i,A.am,B.bW(A.bD,h,A.bq,6,6)],p))}o.push(A.N)
if(m){m=B.d("Text color",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aB:A.al,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
l=x.gN
l=B.C(new B.N(v,new C.ev4(w,a2),l),l.k("ak.E"))
k=x.fw
A.d.v(o,B.a([m,A.am,B.bW(A.bD,l,A.bq,6,6),A.ad,B.hg_(new C.ev5(w,a2),D.ctX,B.ey([a2.as],k),!0,a1,k)],p))}if(n===D.f8){n=B.d("Fill",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aB:A.al,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
m=x.gN
m=B.C(new B.N(v,new C.ev6(w,a2),m),m.k("ak.E"))
A.d.v(o,B.a([n,B.bW(A.bD,m,A.bq,0,6)],p))}o.push(A.ad)
o.push(B.dq(D.bS2,D.fGU,new C.ev7(a0,a5),B.bp(A.bx,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1)))
d=B.cq(o,a1,a1,q,a1,A.ag,a5)
if(a5)return d
q=a3?A.cp:A.c
p=a4?A.xg:a1
if(a4)o=new B.bI(new B.ay(a3?A.bz:A.aM,1,A.r,-1),A.a0,A.a0,A.a0)
else o=a1
return B.p(a1,d,A.f,a1,a1,new B.o(q,a1,o,p,a4?B.a([new B.ac(0,A.G,A.w.j(0.12),A.rN,16)],x.V):a1,a1,A.n),a1,a1,a1,a1,A.FJ,a1,a1,a1)},
bQz(d){return this.aTq(d,!1,!1,null)},
c9y(d,e,f,g,h,i){var w,v,u,t,s,r=this,q=null,p=r.fy
p===$&&B.c()
p=B.c9(p,new C.eva(r,f,d,e),q)
w=B.d(i,q,q,q,q,q,q,D.fik,q,q,q)
v=r.c
v.toString
u=x.p
v=B.a([p,A.ba,B.E(B.x(B.a([w,A.bC,A.cK,r.bB_(D.cXI,d,B.P(v).ax.a===A.I)],u),A.E,q,A.e,A.j,0,A.p),1)],u)
p=x.V
A.d.v(v,B.a([A.ab,B.dJ(B.hc(B.aF(!1,A.a1,!0,q,B.aM(!1,q,!0,B.eF(D.f1d,q,new B.o(q,q,B.I(A.c.j(0.55),A.r,1.3),q,B.a([new B.ac(0,A.G,A.c_.j(0.4),A.eq,8)],p),D.apS,A.a5),q,q,q),A.cL,!0,q,q,q,q,q,q,q,q,q,q,q,g,q,q,q,q,q,q,q),A.f,A.K,0,q,q,q,q,q,A.ah),q,"Documents (Hati)",q,q),A.J)],u))
t=B.B(v,A.m,q,A.e,A.j,0,q,q)
w=r.c
w.toString
s=B.P(w).ax.a===A.I
w=B.m(20)
v=x.O
v=s?B.a([D.baj,D.baL],v):B.a([A.c,A.kA],v)
u=B.I(d.j(s?0.45:0.25),A.r,1.2)
return B.p(q,t,A.f,q,q,new B.o(q,q,u,w,B.a([new B.ac(0,A.G,d.j(s?0.18:0.1),A.cv,14)],p),new B.a9(A.ay,A.aD,A.x,v,q,q),A.n),q,q,q,q,A.bT,q,q,q)},
aMF(d,e,f,g){var w=this.fy
w===$&&B.c()
return B.c9(w,new C.esK(this,g,d,e,f),null)},
agK(d,e){return this.cm5(d,e)},
cm5(d,e){var w=0,v=B.j(x.T),u,t=this,s,r,q,p
var $async$agK=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:r=$.ax()
q=new B.as(new B.bb(e,A.b4,A.aO),r)
p=t.c
p.toString
w=3
return B.b(B.cf(null,null,!0,null,new C.ewP(d,q),p,null,!0,!0,x.N),$async$agK)
case 3:s=g
q.T$=r
q.P$=0
u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$agK,v)},
Q4(d){var w=d.bU()
return""+B.bJ(w)+"/"+B.bV(w)+"/"+B.bC(w)}}
C.afi.prototype={}
C.azi.prototype={
U(){return new C.bd5(null,null)}}
C.bd5.prototype={
gcyv(){var w,v=this.a.c,u=v.f.bU(),t=""+B.bJ(u)+"/"+B.bV(u)+"/"+B.bC(u),s=v.w
if(s==="marriage_agreement")return"Hati ya Kuhowesha \xb7 "+t
if(s==="hati_kuhowa")return"Hati ya Kuhowa \xb7 "+t
if(s==="hati_kuhoweya")return"Hati ya Kuhoweya \xb7 "+t
if(s==="hati_kiapo_uongozi"){v=v.x
w=A.a.i(v==null?"":v)
return w.length===0?"Hati ya Kiapo cha Uongozi \xb7 "+t:"Kiapo cha Uongozi \xb7 "+w+" \xb7 "+t}return""+v.r.length+" slides \xb7 "+t},
a_(){var w,v=this,u=null
v.a2()
w=B.bl(u,A.q2,u,1,u,v)
w.fl(0,!0)
v.d!==$&&B.aP()
v.d=w
w=B.bl(u,D.bud,u,1,u,v)
w.cp(0)
v.e!==$&&B.aP()
v.e=w},
t(){var w=this.d
w===$&&B.c()
w.t()
w=this.e
w===$&&B.c()
w.t()
this.buu()},
J9(d){var w=0.12+d*0.09,v=A.k.E(w+0.55,0,1),u=this.e
u===$&&B.c()
u=u.x
u===$&&B.c()
return A.cu.aw(0,new B.hW(w,v,A.cu).aw(0,u))},
B(d){var w,v=null,u=this.d
u===$&&B.c()
w=this.e
w===$&&B.c()
return B.at(new B.D(D.bzN,B.c9(new B.h5(B.a([u,w],x.dS)),new C.d49(this),v),v),v,v,v)}}
C.bdj.prototype={
B(d){var w=null,v=B.m(22),u=B.I(A.aJ,A.r,1),t=x.p
return B.at(new B.D(D.bA3,B.aF(!1,A.a1,!0,w,B.p(w,B.bx(B.m(22),B.x(B.a([new B.D(D.bze,B.x(B.a([B.p(w,D.bQM,A.f,w,w,new B.o(A.aw.j(0.12),w,w,B.m(16),w,w,A.n),w,52,w,w,w,w,w,52),A.aL,D.fJ3,A.R,B.d('"'+this.c+'" will be permanently removed. This cannot be undone.',w,w,w,w,w,w,D.fjw,A.L,w,w)],t),A.m,w,A.e,A.j,0,A.p),w),A.dW,D.btf,B.B(B.a([B.E(B.bK(!1,D.fxd,w,w,!0,w,w,new C.d4v(d),w,B.fx(w,w,w,w,w,w,w,w,w,w,w,A.bL,w,w,w,w,w,A.nl,w,A.or,w,w,w,w,w,w)),1),B.p(w,w,A.f,A.bn,w,w,w,48,w,w,w,w,w,1),B.E(B.bK(!1,D.fCy,w,w,!0,w,w,new C.d4w(d),w,B.fx(w,w,w,w,w,w,w,w,w,w,w,A.aw,w,w,w,w,w,A.nl,w,A.or,w,w,w,w,w,w)),1)],t),A.m,w,A.e,A.j,0,w,w)],t),A.m,w,A.e,A.P,0,A.p),A.aq),A.f,w,A8.W6,new B.o(A.au,w,u,v,D.cY2,w,A.n),w,w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ah),w),w,w,w)}}
C.K0.prototype={
U(){return new C.bd4()}}
C.bd4.prototype={
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
r=B.p(o,B.X(q.c,m,o,o,o,18),A.f,o,o,new B.o(s,o,o,r,o,o,A.n),o,32,o,o,o,o,o,32)
q=q.d
return B.dJ(B.d6(B.aB(o,B.vy(B.d9(o,B.B(B.a([r,A.as,new B.ds(1,A.cn,B.d(q,o,2,A.a2,o,o,o,B.l(o,o,l?A.f3:A.c,o,o,o,o,o,o,o,o,13,o,o,A.O,o,1.2,!0,o,o,o,o,o,o,o,o),A.L,o,o),o)],x.p),A.m,o,A.b8,A.P,0,o,o),o,o,A.b7,new B.o(n,o,u,v,t,o,A.n),A.eM,o,o,o,A.nm,o,o,1/0),A.cu,A.jv,w),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new C.d44(p,d),new C.d45(p),new C.d46(p),new C.d47(p),o,o,o,!1,A.a4),k),new B.t(0,(1-k)*16))}}
C.PO.prototype={
B(d){var w=this,v=null,u=A.c.j(0.04),t=B.m(16),s=B.m(16),r=B.m(14),q=B.I(A.c.j(0.5),A.r,1.2),p=x.p
return B.aF(!1,A.a1,!0,t,B.aM(!1,s,!0,new B.D(A.eP,B.B(B.a([B.p(v,B.X(w.c,A.c,v,v,v,22),A.f,v,v,new B.o(v,v,q,r,v,new B.a9(A.ay,A.aD,A.x,w.d,v,v),A.n),v,46,v,v,v,v,v,46),A.es,B.E(B.x(B.a([B.d(w.e,v,v,v,v,v,v,A.nF,v,v,v),A.bC,B.d(w.f,v,v,v,v,v,v,B.l(v,v,A.c.j(0.55),v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],p),A.E,v,A.e,A.j,0,A.p),1),B.X(A.eD,A.c.j(0.4),v,v,v,v)],p),A.m,v,A.e,A.j,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.r,v,v,v,v,v,v,v),A.f,u,0,v,v,v,v,v,A.ah)}}
C.a_I.prototype={
U(){return new C.aEM(D.dh,null,null)}}
C.aEM.prototype={
gZ4(){var w,v=this,u=v.w
if(u===$){w=B.bl(null,D.btM,null,1,null,v)
v.w!==$&&B.bF()
v.w=w
u=w}return u},
b6s(d){if(!this.a.c.ay)return
this.x=d
this.gZ4().iM(0,0)},
a_(){var w,v=this
v.a2()
w=v.a
v.d=A.o.E(w.d,0,w.c.r.length-1)
C.aw7(D.f7F)
C.i70()
v.Rt()},
t(){var w=this,v=w.f
if(v!=null)v.a3(0)
w.gZ4().t()
v=w.z
if(v!=null)v.a3(0)
C.aw7(D.f7G)
C.i73()
w.bwt()},
cBg(){B.jH()
this.m(new C.ezu())
var w=this.c.J(x.q).f
w.a50()
if($.bkK)w.S(D.f4w)},
Rt(){var w,v=this,u=v.f
if(u!=null)u.a3(0)
if(!v.r||v.y)return
u=v.a.c
w=v.d
w===$&&B.c()
v.f=B.cL(B.dE(0,0,0,0,0,A.o.E(C.hea(u,w),1,120)),new C.ezk(v))},
cAW(){var w,v=this
v.m(new C.ezt(v))
if(v.r)v.Rt()
else{w=v.f
if(w!=null)w.a3(0)}},
gaVk(){var w=this.a.c.db
return(w==null?"":w).length!==0},
cuX(){var w=this,v=w.f
if(v!=null)v.a3(0)
w.m(new C.ezl(w))
v=w.z
if(v!=null)v.a3(0)
if(w.a.c.ch&&w.r)w.z=B.cL(A.ly,new C.ezm(w))},
axQ(){var w,v,u=this,t=u.a.c,s=t.r.length
if(u.y){t=u.z
if(t!=null)t.a3(0)
if(u.a.c.ch){u.m(new C.ezg(u))
u.Rt()}return}w=u.d
w===$&&B.c()
v=s-1
if(w===v&&u.gaVk()){u.cuX()
return}if(w>=v)t=t.ch&&s>1
else t=!0
if(t){u.m(new C.ezh(u,A.o.F(w+1,s)))
u.b6s(w)
u.Rt()}},
ckK(){var w,v=this,u=v.a.c,t=u.r.length
if(v.y){if(!u.ch)return
u=v.z
if(u!=null)u.a3(0)
v.m(new C.ezi(v))
v.Rt()
return}w=v.d
w===$&&B.c()
if(w<=0)u=u.ch&&t>1
else u=!0
if(u){v.m(new C.ezj(v,w,t))
v.b6s(w)
v.Rt()}},
cws(d){var w,v=this,u=v.e
if(u===D.cl){u=v.d
u===$&&B.c()
return new B.nm(d,new B.cs(u,x.ac))}w=v.cwt(u)
u=v.d
u===$&&B.c()
return B.qr(new B.nm(d,new B.cs(u,x.ac)),w,new C.ezr(),A.b7,A.b7,new C.ezs(v))},
cwt(d){switch(d.a){case 8:case 9:case 10:case 11:case 19:return D.bu9
case 16:return A.j9
case 18:return A.ni
default:return A.mz}},
cwr(d,e,f){var w,v,u,t=null,s=B.cJ(A.cu,f,t)
switch(d.a){case 0:return e
case 1:case 13:case 18:return new B.d0(s,!1,e,t)
case 2:case 17:w=x.K
return B.ju(e,new B.bf(s,new B.bn(A.uU,A.J,w),w.k("bf<bM.T>")),t,!0)
case 3:w=x.K
return B.ju(e,new B.bf(s,new B.bn(A.SD,A.J,w),w.k("bf<bM.T>")),t,!0)
case 4:case 21:w=x.K
return B.ju(e,new B.bf(s,new B.bn(A.i0,A.J,w),w.k("bf<bM.T>")),t,!0)
case 5:w=x.K
return B.ju(e,new B.bf(s,new B.bn(A.rM,A.J,w),w.k("bf<bM.T>")),t,!0)
case 6:case 16:w=x.b
return B.iq(A.A,new B.d0(s,!1,e,t),t,new B.bf(s,new B.bn(0.82,1,w),w.k("bf<bM.T>")))
case 7:w=x.b
return B.iq(A.A,new B.d0(s,!1,e,t),t,new B.bf(s,new B.bn(1.18,1,w),w.k("bf<bM.T>")))
case 8:return B.c9(s,new C.ezn(s),e)
case 9:return B.c9(s,new C.ezo(s),e)
case 10:return B.c9(s,new C.ezp(s),e)
case 11:return B.c9(s,new C.ezq(s),e)
case 12:w=x.b
return new B.d0(s,!1,B.iq(A.A,e,t,new B.bf(s,new B.bn(1.03,1,w),w.k("bf<bM.T>"))),t)
case 14:w=s.gp(0)
v=x.K
return B.jD(B.ju(e,new B.bf(s,new B.bn(A.uU,A.J,v),v.k("bf<bM.T>")),t,!0),A.t,new C.brO(w,t))
case 15:w=x.K
return B.ju(e,new B.bf(s,new B.bn(A.SD,A.J,w),w.k("bf<bM.T>")),t,!0)
case 19:w=B.dk()
w.mO((1-s.gp(0))*2)
v=s.gp(0)
u=s.gp(0)
w.jU(v,u,v,1)
return B.fo(A.A,B.d6(e,s.gp(0)),t,w,!0)
case 20:return B.eI(A.A,(1-s.gp(0))*0.2,new B.d0(s,!1,e,t),t)}},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.a.c,k=n.d
k===$&&B.c()
w=l.r[k]
if(l.ay){v=n.x
u=B.jD(new C.aoH(B.c9(n.gZ4(),new C.ezv(n,v,w),m),m),A.t,m)}else{t=B.rK(new C.IZ(w,!0,!1,m))
l=B.b1(w.e)
u=n.cws(B.em(B.jD(t,A.t,m),l,!0))}l=B.m(20)
k=x.p
s=B.p(m,B.B(B.a([B.d(n.r?"Auto "+C.hea(n.a.c,n.d)+"s":"Manual",m,m,m,m,m,m,A.oA,m,m,m),A.bo,D.bT6],k),A.m,m,A.e,A.P,0,m,m),A.f,m,m,new B.o(A.aW,m,m,l,m,m,A.n),m,m,m,m,A.h4,m,m,m)
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
l.push(B.bU(0,new C.NF(new C.EI(q,p,o,r==null?"":r),!1,!0,m),0,0,0))}else{r=q.c.d===D.on?0.5625:1.7777777777777777
l.push(B.at(new B.fL(r,B.jD(B.uA(A.af,u,!0,4,1,!0,!0,m),A.t,m),m),m,m,m))}if(!$.bkK){r=B.I_(A.lb,new C.ezw(d),B.nG(m,A.aW,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m)
k=B.a([B.ao(m,B.bm(!0,B.B(B.a([r,A.ab,B.I_(B.X(n.r?Ak.yJ:A.id,m,m,m,m,m),n.gcAV(),B.nG(m,A.aW,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m)],k),A.m,m,A.e,A.j,0,m,m),!0,!1,A.af,!0,!0),m,m,12,m,12,m)],k)
if(!n.y){r=B.m(20)
k.push(B.ao(16,B.bm(!0,B.p(m,B.d(""+(n.d+1)+" / "+n.a.c.r.length,m,m,m,m,m,m,A.fO,m,m,m),A.f,m,m,new B.o(A.aW,m,m,r,m,m,A.n),m,m,m,m,A.h4,m,m,m),!0,!1,A.af,!0,!0),m,m,m,16,m,m))}A.d.v(l,k)}l.push(B.ao(m,B.bm(!0,B.aB(A.cc,B.p(A.ln,$.bkK?A.bJ:s,A.f,m,m,m,m,64,m,m,D.buT,m,m,150),A.y,!1,m,n.gcBf(),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!1,A.a4),!0,!1,A.af,!0,!0),m,m,m,0,0,m))
return B.c5(m,A.w,B.aB(m,new B.an(A.a_,m,A.b1,A.t,l,m),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.ezx(n,d),m,m,m,!1,A.a4),m,!1,!1,m,m)}}
C.K6.prototype={
B(d){var w=null
return B.p(w,B.bm(!0,new B.D(E.ajE,this.c,w),!0,!1,A.af,!0,!1),A.f,w,w,D.b2W,w,w,w,w,w,w,w,w)}}
C.brO.prototype={
jh(d){return new B.a5(0,0,0+d.a*A.k.E(this.b,0,1),0+d.b)},
jX(d){return d.b!==this.b}}
C.bhY.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.c
A:{if("circle"===q){w=B.m(999)
break A}if("rounded"===q){w=B.m(18)
break A}if("arch"===q){w=D.b_G
break A}w=B.m(6)
break A}v=s.e
u=B.I(v?A.aC:A.K,A.r,2.5)
if(q==="circle")t=B.m(999)
else t=B.m(q==="rounded"?9:3)
w=B.d9(r,B.at(B.p(r,r,A.f,r,r,new B.o(r,r,r,t,r,E.wn,A.n),r,30,r,r,r,r,r,30),r,r,r),r,r,A.b7,new B.o(s.f,r,u,w,r,r,A.n),A.ho,r,64,r,r,r,r,64)
return B.aB(r,new B.a7(78,r,B.x(B.a([w,A.am,B.d(s.d,r,1,A.a2,r,r,r,B.l(r,r,v?A.aC:s.r,r,r,r,r,r,r,r,r,11.5,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),A.m,r,A.e,A.j,0,A.p),r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,s.w,r,r,r,r,r,r,!1,A.a4)}}
C.bhX.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=r.c,o=D.dt3.h(0,p)
if(o==null)o=D.df7
p=p==="none"
w=p?q:new B.a9(A.a3,A.a8,A.x,o,q,q)
p=p?A.cU.j(0.25):q
v=r.e
u=v?B.I(A.aC,A.r,2.5):q
t=r.r.j(0.15)
s=v?I.ao0:q
w=B.p(q,B.p(q,s,A.f,q,q,new B.o(t,q,q,q,q,q,A.a5),q,q,q,q,q,q,q,q),A.f,q,q,new B.o(p,q,u,q,q,w,A.a5),q,52,q,q,A.ez,q,q,52)
return B.aB(q,new B.a7(66,q,B.x(B.a([w,A.am,B.d(r.d,q,1,A.a2,q,q,q,B.l(q,q,v?A.aC:r.f,q,q,q,q,q,q,q,q,10.5,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),A.L,q,q)],x.p),A.m,q,A.e,A.j,0,A.p),q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.w,q,q,q,q,q,q,!1,A.a4)}}
C.aKv.prototype={
aW(){this.b6()
this.b5()
this.dH()},
t(){var w=this,v=w.b2$
if(v!=null)v.a6(0,w.gdD())
w.b2$=null
w.a1()}}
C.aMo.prototype={
t(){var w=this,v=w.aa$
if(v!=null)v.a6(0,w.gbE())
w.aa$=null
w.a1()},
aW(){this.b6()
this.b5()
this.bF()}}
C.bxu.prototype={}
C.aMp.prototype={
t(){var w=this,v=w.aa$
if(v!=null)v.a6(0,w.gbE())
w.aa$=null
w.a1()},
aW(){this.b6()
this.b5()
this.bF()}}
C.b1y.prototype={}
C.Wb.prototype={
U(){return new C.aEK()},
bh4(d){return this.e.$1(d)}}
C.aEK.prototype={
gb4J(){var w,v,u,t,s=this.e
if(s==null)return null
for(w=this.a.d,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===s)return t}return null},
gaaN(){var w,v
if(this.d==="all")return B.bo(this.a.d,!0,x.I)
w=this.gb4J()
v=x.D
return w==null?B.a([],v):B.a([w],v)},
gaOB(){if(this.d==="all")return"All presentations ("+this.a.d.length+")"
var w=this.gb4J()
w=w==null?null:w.b
return w==null?"Pick a presentation":w},
gb5Z(){return A.d.cL(this.gaaN(),0,new C.ez0())},
a_(){var w,v=this
v.a2()
w=v.a.d
if(w.length!==0)v.e=A.d.gI(w).a
v.R5()},
R5(){var w=0,v=B.j(x.H),u,t=this,s
var $async$R5=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return B.b(C.b29(s.c,s.f),$async$R5)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.eyX(t,!s))
case 1:return B.h(u,v)}})
return B.i($async$R5,v)},
Jb(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$Jb=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p=t.gaaN()
o=p.length
if(o===0){w=1
break}for(s=0;s<p.length;p.length===o||(0,B.M)(p),++s){r=p[s]
q=r.w
if(q==="marriage_agreement"||q==="hati_kuhowa"||q==="hati_kuhoweya"||q==="hati_malipo_awamu"||q==="hati_kiapo_uongozi")C.fIz(r,t.a.d)}o=t.c
o.toString
q=t.a
w=3
return B.b(B.pf(o,q.c,q.f),$async$Jb)
case 3:if(!e||t.c==null){w=1
break}o=t.c
o.toString
q=B.e_(new C.ez_(t,p),!1,null,x.H)
w=4
return B.b(B.a3(o,!1).cg(q),$async$Jb)
case 4:q=t.a
w=5
return B.b(B.pe(q.c,q.f),$async$Jb)
case 5:w=6
return B.b(t.R5(),$async$Jb)
case 6:case 1:return B.h(u,v)}})
return B.i($async$Jb,v)},
Rr(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$Rr=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:o=t.c
o.toString
w=3
return B.b(B.hE(o,D.e5i,!0,"NgmySlidesTransferScan",x.N),$async$Rr)
case 3:s=e
if(s==null||A.a.i(s).length===0){w=1
break}t.m(new C.eyY(t))
w=4
return B.b(C.ahx(s),$async$Rr)
case 4:r=e
t.m(new C.eyZ(t))
o=J.a4(r)
if(o.gam(r)){o=t.c
if(o==null){w=1
break}o.J(x.q).f.S(D.f3l)
w=1
break}w=5
return B.b(t.a.bh4(r),$async$Rr)
case 5:q=t.c
if(q==null){w=1
break}B.a3(q,!1).N(null)
q=t.c.J(x.q).f
p=o.gL(r)
o=o.gL(r)===1?"":"s"
q.S(B.b3(null,null,null,null,null,A.t,null,B.d("Imported "+p+" presentation"+o,null,null,null,null,null,null,null,null,null,null),null,A.V,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$Rr,v)},
Ja(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Ja=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:n=t.gaaN()
if(n.length===0){w=1
break}s=t.c
s.toString
r=t.a
w=3
return B.b(B.pf(s,r.c,r.f),$async$Ja)
case 3:if(!e||t.c==null){w=1
break}s=n.length
r=t.a
if(s===1){s=r.c
q=C.fIO(null,A.d.gI(n),s,t.a.f)}else q=C.fIO(n,null,r.c,r.f)
if(n.length===1){s=A.d.gI(n).b
r=B.af("[^\\w\\-.]+",!0,!1,!1,!1)
p=B.aL(s,r,"_")}else p="ngmy_slides_library"
w=4
return B.b(B.GF(q,"ngmy_slides_"+p,!1),$async$Ja)
case 4:o=e
s=t.a
w=5
return B.b(B.pe(s.c,s.f),$async$Ja)
case 5:w=6
return B.b(t.R5(),$async$Ja)
case 6:s=t.c
if(s==null){w=1
break}s.J(x.q).f.S(B.b3(null,null,null,null,null,A.t,null,B.d(o,null,null,null,null,null,null,null,null,null,null),null,A.V,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$Ja,v)},
a30(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a30=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t.m(new C.ez1(t))
w=3
return B.b(C.bCJ(),$async$a30)
case 3:s=e
t.m(new C.ez2(t))
if(s==null||J.cp(s)){w=1
break}w=4
return B.b(t.a.bh4(s),$async$a30)
case 4:r=t.c
if(r==null){w=1
break}B.a3(r,!1).N(null)
r=t.c.J(x.q).f
q=J.a4(s)
p=q.gL(s)
q=q.gL(s)===1?"":"s"
r.S(B.b3(null,null,null,null,null,A.t,null,B.d("Imported "+p+" presentation"+q+" from file",null,null,null,null,null,null,null,null,null,null),null,A.V,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a30,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=B.P(d).ax.a===A.I,l=m?A.dd:A.bN,k=o.gaaN().length!==0,j=B.ao(n,B.p(n,n,A.f,n,n,new B.o(n,n,n,n,n,new B.c0(A.A,0.5,A.x,n,0,B.a([A.bj.j(0.22),A.K],x.O),n,n),A.a5),n,220,n,n,n,n,n,220),n,n,n,-60,-80,n),i=B.aJ(n,n,n,n,B.X(A.cx,m?A.ae:A.al,n,n,n,n),n,n,n,new C.ez5(d),n,n,n,n,n,n),h=x.p
i=B.B(B.a([i,B.E(B.d("Transfer presentations",n,n,n,n,n,n,B.l(n,n,m?A.c:A.M,n,n,n,n,n,n,n,n,17,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),A.L,n,n),1),A.zX],h),A.m,n,A.e,A.j,0,n,n)
w=B.m(24)
v=B.a([new B.ac(0,A.G,A.bj.j(0.35),A.eX,24)],x.V)
u=B.ao(n,B.X(A.qa,A.c.j(0.1),n,n,n,100),n,n,n,-12,-8,n)
t=A.c.j(0.18)
s=B.m(16)
s=B.a([u,B.B(B.a([B.p(n,D.bTD,A.f,n,n,new B.o(t,n,B.I(A.c.j(0.35),A.r,1),s,n,n,A.n),n,56,n,n,n,n,n,56),A.es,B.E(B.x(B.a([B.d("NGMY Slides Transfer",n,n,n,n,n,n,B.l(n,n,A.c.j(0.85),n,n,n,n,n,n,n,n,11,n,n,A.H,n,n,!0,n,1.1,n,n,n,n,n,n),n,n,n),A.av,D.bEs],h),A.E,n,A.e,A.j,0,A.p),1)],h),A.m,n,A.e,A.j,0,n,n)],h)
if(o.a.f)s.push(B.ao(n,B.hc(B.aB(A.cc,D.f1f,A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gcfs(),n,n,n,n,n,n,!1,A.a4),n,"Save presentations to the database",n,n),n,n,n,-17,-19,n))
w=B.a([B.p(n,new B.an(A.a_,n,A.aa,A.f,s,n),A.aq,n,n,new B.o(n,n,n,w,v,D.a23,A.n),n,n,n,n,E.ZR,n,n,1/0),A.dW,o.axR(m,"What to transfer"),A.ad,B.B(B.a([B.E(o.aXD(A.qf,m,new C.ez6(o),o.d==="one","Pick a single deck","One presentation"),1),A.as,B.E(o.aXD(D.bJj,m,new C.ez7(o),o.d==="all",""+o.a.d.length+" saved","All presentations"),1)],h),A.m,n,A.e,A.j,0,n,n)],h)
if(o.d==="one"){v=B.a([A.d6,o.axR(m,"Choose presentation"),A.R],h)
u=o.a.d
if(u.length===0){u=m?A.au:A.c
t=B.m(16)
s=B.I(m?A.bz:A.aM,A.r,1)
v.push(B.p(n,B.d("Create a presentation first, then come back to transfer it.",n,n,n,n,n,n,B.l(n,n,m?A.aB:A.al,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),A.f,n,n,new B.o(u,n,s,t,n,n,A.n),n,n,n,n,A.bQ,n,n,n))}else A.d.v(v,new B.N(u,new C.ez8(o,m),B.S(u).k("N<1,v>")))
A.d.v(w,v)}w.push(A.mV)
w.push(o.axR(m,"Transfer options"))
w.push(A.ad)
w.push(B.B(B.a([B.E(o.aqw(A.aR,k,!0,A.jB,m,o.r,o.gc9C(),"Scan on another device","Show QR"),1),A.as,B.E(o.aMG(A.k7,!0,A.jc,m,o.gcrE(),"Receive presentations","Scan QR"),1)],h),A.m,n,A.e,A.j,0,n,n))
w.push(A.R)
w.push(B.B(B.a([B.E(o.bzu(A.aV,k,A.hJ,m,o.r,o.gc9z(),"Download .json","Backup file"),1),A.as,B.E(o.aMG(A.aE,!0,Aw.yR,m,o.gcDF(),"Import backup","Upload file"),1)],h),A.m,n,A.e,A.j,0,n,n))
if(k){v=A.bj.j(m?0.12:0.08)
u=B.m(16)
t=B.I(A.bj.j(0.28),A.r,1)
s=B.X(A.lC,A.bj.j(0.9),n,n,n,18)
r=o.gaOB()
q=o.gb5Z()
p=o.gb5Z()===1?"":"s"
A.d.v(w,B.a([A.bv,B.p(n,B.B(B.a([s,A.as,B.E(B.d("Ready to share "+r+" \xb7 "+q+" slide"+p,n,n,n,n,n,n,B.l(n,n,m?A.ae:A.bs,n,n,n,n,n,n,n,n,12,n,n,A.a7,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)],h),A.m,n,A.e,A.j,0,n,n),A.f,n,n,new B.o(v,n,t,u,n,n,A.n),n,n,n,n,A.bB,n,n,n)],h))}j=B.a([j,B.bm(!0,B.x(B.a([new B.D(Ag.Nd,i,n),B.E(B.cq(w,n,D.bym,n,n,A.ag,!1),1)],h),A.m,n,A.e,A.j,0,A.p),!0,!1,A.af,!0,!0)],h)
if(o.f)j.push(B.p(n,T.Wp,A.f,A.dM,n,n,n,n,n,n,n,n,n,n))
return B.c5(n,l,new B.an(A.a_,n,A.aa,A.t,j,n),n,!1,!1,n,n)},
afV(){var w=0,v=B.j(x.H),u=this,t,s
var $async$afV=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
t=u.a
w=2
return B.b(C.idr(s,t.d,t.e),$async$afV)
case 2:return B.h(null,v)}})
return B.i($async$afV,v)},
axR(d,e){var w=null,v=B.p(w,w,A.f,w,w,new B.o(A.bj,w,w,B.m(2),w,w,A.n),w,14,w,w,w,w,w,3)
return B.B(B.a([v,A.ab,B.d(e.toUpperCase(),w,w,w,w,w,w,B.l(w,w,d?A.aB:A.al,w,w,w,w,w,w,w,w,11,w,w,A.u,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,w,w)},
aXD(d,e,f,g,h,i){var w,v,u,t,s=null,r=B.m(18),q=B.m(18),p=e?A.au:A.c
if(g)w=A.bj
else w=e?A.bz:A.aM
w=B.I(w,A.r,g?2:1)
v=g?B.a([new B.ac(0,A.G,A.bj.j(0.2),A.cv,14)],x.V):s
u=A.bj.j(g?0.2:0.1)
t=B.m(12)
t=B.p(s,B.X(d,A.bj,s,s,s,22),A.f,s,s,new B.o(u,s,s,t,s,s,A.n),s,s,s,s,A.cm,s,s,s)
u=B.d(i,s,s,s,s,s,s,B.l(s,s,e?A.c:A.M,s,s,s,s,s,s,s,s,13,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
return B.aF(!1,A.a1,!0,s,B.aM(!1,r,!0,B.eF(new B.D(A.bB,B.x(B.a([t,A.R,u,A.bC,B.d(h,s,s,s,s,s,s,B.l(s,s,e?A.aB:A.al,s,s,s,s,s,s,s,s,11,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),A.E,s,A.e,A.j,0,A.p),s),s,new B.o(p,s,w,q,v,s,A.n),s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,f,s,s,s,s,s,s,s),A.f,A.K,0,s,s,s,s,s,A.ah)},
bK3(d,e){var w,v,u,t,s,r,q=null,p=d.a===this.e,o=B.m(16),n=e?A.au:A.c,m=B.m(16)
if(p)w=A.bj
else w=e?A.bz:A.aM
w=B.I(w,A.r,p?2:1)
v=B.p(q,D.bTP,A.f,q,q,new B.o(q,q,q,B.m(12),q,new B.a9(A.a3,A.a8,A.x,B.a([A.bj,A.bj.j(0.7)],x.O),q,q),A.n),q,44,q,q,q,q,q,44)
u=d.b
u=B.d(u,q,1,A.a2,q,q,q,B.l(q,q,e?A.c:A.M,q,q,q,q,q,q,q,q,q,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=d.r.length
s=x.p
t=B.E(B.x(B.a([u,B.d(""+t+" slides",q,q,q,q,q,q,B.l(q,q,e?A.aB:A.al,q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),A.E,q,A.e,A.j,0,A.p),1)
u=p?A.eb:A.rl
if(p)r=A.bj
else r=e?A.aZ:A.dp
return new B.D(A.ct,B.aF(!1,A.a1,!0,q,B.aM(!1,o,!0,B.p(q,B.B(B.a([v,A.ba,t,B.X(u,r,q,q,q,q)],s),A.m,q,A.e,A.j,0,q,q),A.f,q,q,new B.o(n,q,w,m,q,q,A.n),q,q,q,q,A.bB,q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,new C.eyW(this,d),q,q,q,q,q,q,q),A.f,A.K,0,q,q,q,q,q,A.ah),q)},
aqw(d,e,f,g,h,i,j,k,l){var w,v,u,t,s=null,r=e?1:0.45,q=e?j:s,p=B.m(18),o=B.m(18),n=h?A.au:A.c
if(f)w=d.j(0.45)
else w=h?A.bz:A.aM
w=B.I(w,A.r,f?1.5:1)
v=d.j(0.14)
u=B.m(12)
t=x.p
u=B.a([B.p(s,B.X(g,d,s,s,s,22),A.f,s,s,new B.o(v,s,s,u,s,s,A.n),s,s,s,s,A.ri,s,s,s)],t)
if(i)u.push(B.ao(s,B.p(s,D.aoy,A.f,s,s,D.b2I,s,14,s,s,s,s,s,14),s,s,s,-4,-4,s))
v=B.d(l,s,s,s,s,s,s,B.l(s,s,h?A.c:A.M,s,s,s,s,s,s,s,s,14,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
return B.d6(B.aF(!1,A.a1,!0,s,B.aM(!1,p,!0,B.eF(new B.D(E.Zu,B.x(B.a([new B.an(A.a_,s,A.aa,A.f,u,s),A.ad,v,A.bC,B.d(k,s,s,s,s,s,s,B.l(s,s,h?A.aB:A.al,s,s,s,s,s,s,s,s,11,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),A.E,s,A.e,A.j,0,A.p),s),s,new B.o(n,s,w,o,s,s,A.n),s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,q,s,s,s,s,s,s,s),A.f,A.K,0,s,s,s,s,s,A.ah),r)},
aMG(d,e,f,g,h,i,j){return this.aqw(d,e,!1,f,g,!1,h,i,j)},
bzu(d,e,f,g,h,i,j,k){return this.aqw(d,e,!1,f,g,h,i,j,k)}}
C.Wc.prototype={
U(){return new C.bkJ()}}
C.bkJ.prototype={
a_(){this.a2()
this.aeL()},
aeL(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$aeL=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
n=r.a
m=n.d
l=m.length
k=n.c
q=l===1?C.fIO(null,A.d.gI(m),k,r.a.f):C.fIO(m,null,k,n.f)
n=r.a.d
m=n.length
p=m===1?A.d.gI(n).a:"library_"+m
n=r.a.d
if(n.length===1&&C.kC(A.d.gI(n).w))C.fIz(A.d.gI(r.a.d),D.dcX)
n=r.a
m=n.c
n=C.ian(n.d)
w=7
return B.b(C.fIN(p,C.ias(r.a.d),n,m,q),$async$aeL)
case 7:o=e
if(r.c==null){w=1
break}r.m(new C.ez9(r,o))
t=2
w=6
break
case 4:t=3
i=s.pop()
if(r.c==null){w=1
break}r.m(new C.eza(r))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$aeL,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=B.P(d).ax.a===A.I,h=i?A.dd:A.bN,g=k.d
g=g==null?j:A.a.a0(g,"NGMYSLIDESYNC2|")
w=A.d.cL(k.a.d,0,new C.ezb())
v=B.aJ(j,j,j,j,B.X(A.eI,i?A.ae:A.al,j,j,j,18),j,j,j,new C.ezc(d),j,j,j,j,j,j)
u=x.p
v=B.B(B.a([v,B.E(B.d("Presentation QR",j,j,j,j,j,j,B.l(j,j,i?A.c:A.M,j,j,j,j,j,j,j,j,17,j,j,A.u,j,j,!0,j,j,j,j,j,j,j,j),A.L,j,j),1),A.zX],u),A.m,j,A.e,A.j,0,j,j)
t=B.m(24)
s=k.a
r=B.d(s.e,j,j,j,j,j,j,A.de,A.L,j,j)
s=s.d.length
q=s===1?"":"s"
t=B.p(j,B.x(B.a([r,A.N,B.d(""+s+" presentation"+q+" \xb7 "+w+" slides",j,j,j,j,j,j,B.l(j,j,A.c.j(0.85),j,j,j,j,j,j,j,j,12,j,j,A.O,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],u),A.m,j,A.e,A.j,0,A.p),A.f,j,j,new B.o(j,j,j,t,j,D.a23,A.n),j,j,j,j,E.ZR,j,j,1/0)
q=B.m(24)
s=B.I(A.aR.j(0.35),A.r,1)
r=B.a([],u)
p=k.f
if(p!=null)r.push(B.d(p,j,j,j,j,j,j,A.U4,A.L,j,j))
else if(k.d==null)r.push(D.eh6)
else{p=B.a([],u)
o=k.e
if((o==null?"":o).length!==0){o=B.m(16)
n=B.a([new B.ac(0,A.G,A.aC.j(0.35),A.cv,18)],x.V)
m=k.e
m.toString
A.d.v(p,B.a([D.fxF,A.am,B.aB(j,B.p(j,B.B(B.a([D.bVn,A.as,B.d(m,j,j,j,j,j,j,D.fjW,j,j,j)],u),A.m,j,A.e,A.P,0,j,j),A.f,j,j,new B.o(j,j,j,o,n,D.c_e,A.n),j,j,j,j,A0.ajp,j,j,j),A.y,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new C.ezd(k,d),j,j,j,j,j,j,!1,A.a4),A.N,D.fC4,A.aA],u))}o=A.c.j(0.04)
n=B.m(22)
m=B.I(A.bz,A.r,1)
l=k.d
l.toString
p.push(B.p(j,B.pW(j,j,!1,l,j,!0,!0,j,!1,D.bps),A.f,j,j,new B.o(o,j,m,n,j,j,A.n),j,j,j,j,A.cm,j,j,j))
A.d.v(r,p)}r.push(A.aA)
r.push(B.d(g===!0?"Cloud QR \u2014 scan on another phone with NGMY Slides open.":"Offline QR \u2014 keep both devices on the same network if scan fails.",j,j,j,j,j,j,A.hj,A.L,j,j))
return B.c5(j,h,B.bm(!0,B.x(B.a([new B.D(Ag.Nd,v,j),B.E(B.cd(B.x(B.a([t,A.aL,B.p(j,B.x(r,A.m,j,A.e,A.j,0,A.p),A.f,j,j,new B.o(j,j,s,q,j,D.c1b,A.n),j,j,j,j,A.u3,j,j,1/0)],u),A.m,j,A.e,A.j,0,A.p),A.t,j,A.y,j,E.ajJ,j,j,A.ag),1)],u),A.m,j,A.e,A.j,0,A.p),!0,!1,A.af,!0,!0),j,!1,!1,j,j)}}
C.aEH.prototype={
U(){return new C.aEI(new B.as(A.at,$.ax()),B.jZ(!0,null,!0,!0,null,null,!1))}}
C.aEI.prototype={
a_(){var w=this
w.a2()
w.e.aR(0,new C.esE(w))
$.aW.x1$.push(new C.esF(w))},
t(){var w=this.d
w.T$=$.ax()
w.P$=0
this.e.t()
this.a1()},
b_c(){var w,v=this.c
v.toString
w=C.yN(this.d.a.a.toUpperCase())
if(w==null)w=""
B.a3(v,!1).N(w)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=B.aH(a2,A.eL,x.w).w,i=B.m(28),h=B.I(A.bj.j(0.4),A.r,1.2),g=x.V,f=B.a([new B.ac(0,A.G,A.bj.j(0.28),A.uR,36),D.acg],g),e=B.m(28),d=A.c.j(0.16),a0=B.m(16),a1=x.p
a0=B.p(k,B.x(B.a([B.p(k,D.bQQ,A.f,k,k,new B.o(d,k,B.I(A.c.j(0.28),A.r,1),a0,k,k,A.n),k,52,k,k,k,k,k,52),A.ad,D.fuL,A.am,B.d("Type the 5-character code shown with the QR.",k,k,k,k,k,k,B.l(k,k,A.c.j(0.82),k,k,k,k,k,k,k,k,13,k,k,A.a7,k,1.35,!0,k,k,k,k,k,k,k,k),A.L,k,k)],a1),A.m,k,A.e,A.j,0,A.p),A.f,k,k,D.b38,k,k,k,k,A.ye,k,k,1/0)
d=B.a([],a1)
for(w=l.d,v=l.e,u=0;u<5;++u){t=B.a([],a1)
if(u===2)t.push(A.as)
s=w.a.a
r=u<s.toUpperCase().length
q=u===s.toUpperCase().length&&v.gea()
p=r?w.a.a.toUpperCase()[u]:""
s=r||q?A.au:A.M
o=new B.aQ(14,14)
if(q)n=A.bj
else n=r?A.bj.j(0.55):A.aJ
m=new B.ay(n,q?2:1.2,A.r,-1)
n=q?B.a([new B.ac(0,A.G,A.bj.j(0.28),A.J,12)],g):k
t.push(new B.bA(1,A.bd,B.d9(A.A,new B.y(p,k,D.fdn,k,k,k,k,k,k,k,k,k),k,k,A.b7,new B.o(s,k,new B.bI(m,m,m,m),new B.bk(o,o,o,o),n,k,A.n),A.ho,k,56,k,k,k,k,k),k))
if(u!==4&&u!==1)t.push(M.Jl)
A.d.v(d,t)}g=B.a([B.B(d,A.m,k,A.e,A.j,0,k,k),B.bU(0,B.d6(B.aN(k,A.X,!0,k,!0,A.t,k,B.aO(),w,k,k,k,k,k,2,D.bY7,A.y,!0,k,!0,k,!1,v,A.ak,k,k,B.a([new B.ur(B.af("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.BF(5,k),new C.bv3()],x.aS),k,k,A.aQU,k,5,k,1,k,k,!1,"\u2022",k,new C.esA(l),k,new C.esB(l),k,!1,k,k,!1,k,!0,k,A.a9,k,k,k,k,k,k,k,k,k,k,k,k,!0,A.a6,k,A.mf,k,k,k,k),0),0,0,0)],a1)
d=C.yN(w.a.a.toUpperCase())==null?k:l.gc9D()
return B.at(new B.D(new B.Q(24,24,24,24+j.f.d),B.aF(!1,A.a1,!0,k,new B.cT(Ad.KS,B.p(k,B.bx(e,B.x(B.a([a0,new B.D(D.byS,B.x(B.a([new B.an(A.a_,k,A.aa,A.t,g,k),A.R,D.ft5,A.bv,new B.a7(1/0,50,B.bH(D.fJY,d,B.bp(A.bj,A.bn,A.al,k,A.c,k,k,k,new B.b7(B.m(16),A.a0),k,k,k)),k),A.am,B.bK(!1,A.nG,k,k,!0,k,k,new C.esC(a2),k,B.fx(k,k,k,k,k,k,k,k,k,k,k,A.bL,k,k,k,k,k,k,k,k,k,k,k,k,k,k))],a1),A.m,k,A.e,A.j,0,A.p),k)],a1),A.m,k,A.e,A.P,0,A.p),A.aq),A.f,k,k,new B.o(A.dd,k,h,i,f,k,A.n),k,k,k,k,k,k,k,k),k),A.f,A.K,0,k,k,k,k,k,A.ah),k),k,k,k)}}
C.bv3.prototype={
oH(d,e){var w=e.a.toUpperCase()
return e.cK1(B.hi(A.bw,w.length),w)}}
C.arA.prototype={
U(){return new C.aEL(B.zs(A.Mt,A.nM,A.uy))}}
C.aEL.prototype={
t(){this.d.t()
this.a1()},
b_b(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
B.iR(w,d)},
aaI(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$aaI=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e){w=1
break}s=t.c
s.toString
w=3
return B.b(C.fRB(s),$async$aaI)
case 3:r=e
if(r==null||t.c==null){w=1
break}t.b_b("NGMYSLIDECODE|"+r)
case 1:return B.h(u,v)}})
return B.i($async$aaI,v)},
c9B(d){var w,v,u,t
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,B.M)(w),++u){t=C.iaq(w[u])
if(t!=null){this.b_b(t)
return}}},
B(d){var w,v,u,t=this,s=null,r=B.aJ(s,s,s,s,A.wk,s,s,s,t.gbOo(),s,s,s,s,"Enter document code",s),q=t.f,p=q?"Flash off":"Flash on",o=x.p
p=B.eD(B.a([r,B.aJ(s,s,s,s,B.X(q?A.uf:Al.O7,s,s,s,s,s),s,s,s,new C.ezf(t),s,s,s,s,p,s)],o),s,s,!0,!0,A.dd,s,1,s,s,s,!1,s,!1,A.c,s,s,s,!0,s,s,s,s,s,D.fLa,s,s,s,1,s,!0)
r=B.zr(t.d,A.bW,t.gc9A())
w=B.m(28)
w=B.at(B.p(s,s,A.f,s,s,new B.o(s,s,B.I(A.bj,A.r,3),w,B.a([new B.ac(2,A.G,A.bj.j(0.35),A.J,24)],x.V),s,A.n),s,260,s,s,s,s,s,260),s,s,s)
v=A.w.j(0.72)
u=B.m(16)
return B.c5(p,A.w,new B.an(A.a_,s,A.b1,A.t,B.a([r,w,B.ao(32,B.p(s,D.fyL,A.f,s,s,new B.o(v,s,B.I(A.bj.j(0.45),A.r,1),u,s,s,A.n),s,s,s,s,A.ja,s,s,s),s,s,20,20,s,s)],o),s),s,!1,!1,s,s)}}
C.bvg.prototype={
B(d){var w=null,v=B.m(24),u=B.I(A.aJ,A.r,1)
return B.aF(!1,A.a1,!0,w,B.p(w,B.x(B.a([B.p(w,H.aoe,A.f,w,w,D.b2S,w,56,w,w,w,w,w,56),A.aL,D.fKR,A.am,new B.jO(this.c,new C.f9t(),w,w,x.cI),A.aL,new B.jO(this.d,new C.f9u(),w,w,x.cl),A.ad,D.fKP],x.p),A.m,w,A.e,A.P,0,A.p),A.f,w,Ad.KS,new B.o(A.au,w,u,v,w,w,A.n),w,w,w,L.ZX,D.bzv,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ah)}}
C.a7U.prototype={
U(){return new C.bks(A.bE)},
gcZ(){return this.c}}
C.bks.prototype={
a_(){var w=this
w.a2()
if(w.a.d)return
w.a_i()
w.d=B.dm(A.fS,new C.ehL(w))},
t(){var w=this.d
if(w!=null)w.a3(0)
this.a1()},
a_i(){return this.cnZ()},
cnZ(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a_i=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q={}
p=t.a
if(p.d){if(t.c!=null)t.m(new C.ehJ(t))
w=1
break}s=p.e
q.a=null
w=s!=null?3:5
break
case 3:q.a=s.bC(new B.U(Date.now(),0,!1))
w=4
break
case 5:w=6
return B.b(C.chB(p.c),$async$a_i)
case 6:r=e
q.a=r==null?A.bE:r
case 4:if(t.c==null){w=1
break}t.m(new C.ehK(q,t))
if(q.a.a<=0&&!t.f){t.f=!0
t.a.f.$0()}case 1:return B.h(u,v)}})
return B.i($async$a_i,v)},
bQq(d){var w,v,u=d.a,t=A.o.an(u,36e8)
if(t>=999)return"Admin \u2014 unlimited"
w=A.o.an(u,6e7)%60
v=A.o.an(u,1e6)%60
if(t>0)return""+t+"h "+A.a.aZ(A.o.u(w),2,"0")+"m "+A.a.aZ(A.o.u(v),2,"0")+"s left"
return A.a.aZ(A.o.u(w),2,"0")+":"+A.a.aZ(A.o.u(v),2,"0")+" left"},
B(d){var w,v,u,t,s=this,r=null
if(s.a.d)return A.bJ
w=s.e.a
v=A.o.an(w,6e7)<30&&A.o.an(w,36e8)<999?A.aw:A.c_
w=v.j(0.14)
u=B.m(14)
t=B.I(v.j(0.55),A.r,1)
return B.p(r,B.B(B.a([B.X(A.Gj,v,r,r,r,20),A.as,B.E(B.d("Marriage document session \xb7 "+s.bQq(s.e),r,r,r,r,r,r,B.l(r,r,v,r,r,r,r,r,r,r,r,13,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),1)],x.p),A.m,r,A.e,A.j,0,r,r),A.f,r,r,new B.o(w,r,t,u,r,r,A.n),r,r,r,A9.aiu,A.iQ,r,r,1/0)}}
C.a8O.prototype={
nj(){var w,v,u,t=this
t.xl()
w=t.cx
v=t.c
w.br5(t.cy,t,v)
u=x.Y
v.a.n(0,"/A",B.q2(B.G(["/S",D.ekN,"/URI",new B.rE(B.WJ(w.as),A.uV,!0)],x.N,u),u))}}
C.a8P.prototype={
a4(){return"PdfAnnotFlags."+this.b}}
C.b3c.prototype={
byw(d,e,f,g,h,i,j,k,l,m){var w=B.ey([D.ej5],x.di)
this.w!==$&&B.aP()
this.w=w},
gcNk(){var w=this.w
w===$&&B.c()
if(w.a===0)return 0
return new B.jY(w,new C.cjN(),B.a6(w).k("jY<cr.E,H>")).f9(0,new C.cjO())},
aDj(d,e,f){var w,v,u,t=this,s=f.a
s.n(0,"/Subtype",new B.hg(t.a))
w=t.b
v=w.a
u=w.b
s.n(0,"/Rect",B.tC(B.a([v,u,v+w.c,u+w.d],x.cA)))
s.n(0,"/P",new B.jh(d.a,d.b))
s.n(0,"/Border",B.tC(H.aqf))
w=t.w
w===$&&B.c()
if(w.a!==0)s.n(0,"/F",new B.h2(t.gcNk()))
w=t.z
if(w.a!==0)s.n(0,"/AP",B.q2(w,x.Y))}}
C.cjP.prototype={}
C.a31.prototype={}
C.aio.prototype={}
C.aRt.prototype={
h1(d){var w,v,u,t,s,r,q=this,p=null
q.lm(d)
q.M7(d)
w=q.a
v=d.a
v.toString
w.toString
w=d.bgs(w)
u=x.N
t=x.Y
s=new C.cjP(q.d.a,"/Link",w,p,p,p,p,p,B.T(u,t))
s.byw(p,p,p,p,p,p,p,w,p,"/Link")
w=v.x
t=B.q2(B.G(["/Type",D.ekL],u,t),t)
u=w.b++
r=w.e
r===$&&B.c()
r=new C.a8O(s,v,w,u,0,t,r,B.a([],x.s),p,p,0)
w.c.M(0,r)
v.dx.push(r)}}
C.ax5.prototype={}
C.aT_.prototype={
h1(d){var w,v,u,t,s=this
s.lm(d)
w=s.b
if(w!=null){v=B.dk()
u=s.a
v.ec(u.a,u.b,0,1)
u=d.b
u.ic()
t=s.a
t.toString
u.Lg(t)
u.SJ(0)
u.p6(0,v)
w.h1(d)
u.nm(0)}}}
var z=a.updateTypes(["aA<~>()","~(lO)","R(i4)","~()","R(eM)","R(or)","R(lO)","~(i4)","R(eM,eM)","K6(Y)","R(nR)","R(ll)","aA<R>()","H(H,i4)","a8<n,@>(i4)","ai<zL>()","n(nR)","R(a8a)","n(lO)","n(w5)","R(ER)","H(i4,i4)","n(eM)","v(eM)","cN(eM)","v(hF)","~(hF)","eM(uP,L,L,L,L,H{fx:n,key:n,rotation:L})","eM(n,L,H)","H(or,or)","R(zL)","R(n,ai<zL>)","a8<n,@>(or)","nR()","YN(Y)","eM(n,L,L,L,L,L{align:q8,anim:hF,bullets:R,color:H?,delay:H,fx:n,key:n,style:HV,weight:nE})","a14(Y)","eM(n,L,L,L,L{anim:hF,delay:H,fx:n,key:n})","aA<~>(or)","R(mA)","YL(Y)","a0B(Y)","a0A(Y)","PE(Y)","ZY(Y)","eM(uP,L,L,L,L,H,n,n{anim:hF,delay:H,rotation:L,stroke:H,strokeWidth:L})","eM(n,L,L,L,L,L,n,n,H)","eM(L,L,n,H{size:L})","v(rs,L,L)","ll()","or(a8<@,@>)","~(uF)","ER()","fg(eM)","v(j2)","Zv(Y)","~(EI)","ZQ(Y)","H(eM,eM)","eM(eM)","a8<n,@>(eM)","eM(a8<@,@>)","lO(lO)","a8<n,@>(lO)","lO(a8<@,@>)","R(jL)","jL()","n(i4)","~(ai<or>)","U(ai<i4>)","U(i4)","ai<i4>(n?)","acP(Y,H)","~(R(eM,eM))","adt(Y)","af8(Y,H)","u(lO,R)","W_(Y)","adw(Y)","W0(Y)","~(mE)","i4(i4)","L(eM)","a04(Y)","a_I(Y)","i4()","ai<Fd>()","aA<~>(ai<i4>)","v(by<H,i4>)","D(jL)","D(ER)","aA<~>(hF,~())","v(ai<hF>,hF?,~(hF),u)","R(mf)","ai<js<mE>>(Y)","js<mE>(mE)","i4(a8<@,@>)","Wb(Y)","eM(n,L,L,L,L,L,H{align:q8,style:HV,weight:nE})","Wc(Y)","v(i4)","~(m8)","IZ(Y,lO,v?)","H(a8P)","aA<ai<a8<n,@>>?>()","n(n)","aA<zK>({paper:n?,photo:dK?,request:n,template!lo})","aA<a82>({doc!zK,history:ai<+(n,n)>,instruction!n,photo:dK?,template!lo})","adq(Y)"])
C.cIj.prototype={
$2(d,e){d=d+e&536870911
d=d+((d&524287)<<10)&536870911
return d^d>>>6},
$S:70}
C.cIk.prototype={
$1(d){d=d+((d&67108863)<<3)&536870911
d^=d>>>11
return d+((d&16383)<<15)&536870911},
$S:73}
C.cIl.prototype={
$1(d){var w,v,u,t,s,r,q
for(w=this.a,v=this.b,u=v.c-1,v=v.b;t=w.a,t<d;){t=w.c
if(t<0){w.c=t-1
s=0
r=16}else{s=v[t]
r=t===u?A.o.gaks(s):16;--w.c}w.b=A.o.e0(w.b,r)+s
w.a+=r}v=w.b
t-=d
q=A.o.mt(v,t)
w.b=v-A.o.e0(q,t)
w.a=t
return q},
$S:73}
C.cIm.prototype={
$0(){var w,v,u,t,s
for(w=this.a,v=w.$flags|0,u=1,t=0;t<8;++t){if(u===0)break
s=w[t]+u
v&2&&B.aj(w)
w[t]=s&255
u=s>>>8}},
$S:0}
C.bQG.prototype={
$1(d){return J.eZ(A.dF.gaQ(d),d.byteOffset,d.byteLength)},
$S:1671}
C.fvf.prototype={
$5(d,e,f,g,h){var w=this,v=w.a
if((v&8)!==0)B.iL(w.b,d+f,e+g,w.c,h,w.d,!1,w.e,w.f)
if((v&4)!==0)B.iL(w.b,d-f,e+g,w.c,h,w.d,!1,w.e,w.f)
if((v&2)!==0)B.iL(w.b,d+f,e-g,w.c,h,w.d,!1,w.e,w.f)
if((v&1)!==0)B.iL(w.b,d-f,e-g,w.c,h,w.d,!1,w.e,w.f)},
$S:1672}
C.c0C.prototype={
$1(d){return B.a2(d,x.N,x.z)},
$S:30}
C.c0D.prototype={
$2(d,e){var w,v=J.q(e,"savedAt")
v=J.k(v==null?"":v)
w=J.q(d,"savedAt")
return A.a.aL(v,J.k(w==null?"":w))},
$S:41}
C.c0F.prototype={
$1(d){var w=J.q(d,"id")
return J.k(w==null?"":w)===this.a},
$S:4}
C.fLE.prototype={
$1(d){return new C.a14(this.a,this.b,C.ibi(),null)},
$S:z+36}
C.f7W.prototype={
$0(){var w=this.a
w.e=this.b
w.f=!1},
$S:0}
C.f8_.prototype={
$1(d){return this.a.d.q(0,d.a)},
$S:z+2}
C.f80.prototype={
$0(){var w=this.a
w.r=!0
w.x=null},
$S:0}
C.f81.prototype={
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
C.f7X.prototype={
$0(){var w=this.a
w.r=!0
w.x=null},
$S:0}
C.f7Y.prototype={
$0(){var w=this.a
w.r=!1
w.x="Could not open that saved presentation."
w.y=!0},
$S:0}
C.f7Z.prototype={
$0(){var w=this.a
w.r=!1
w.x='"'+this.b.b+'" is back in your presentations.'
w.y=!1},
$S:0}
C.f7R.prototype={
$1(d){var w=null,v=B.d('"'+this.a+'" will be removed from the database. Your own copy stays in your presentations.',w,w,w,w,w,w,A.h9,w,w,w)
return B.el(B.a([B.bK(!1,E.aSW,w,w,!0,w,w,new C.f7P(d),w,w),B.bK(!1,D.fwe,w,w,!0,w,w,new C.f7Q(d),w,w)],x.p),w,w,D.Yl,v,w,w,w,w,D.fLt,w)},
$S:18}
C.f7P.prototype={
$0(){B.a3(this.a,!1).N(!1)
return null},
$S:0}
C.f7Q.prototype={
$0(){B.a3(this.a,!1).N(!0)
return null},
$S:0}
C.f7S.prototype={
$0(){return this.a.r=!0},
$S:0}
C.f7T.prototype={
$0(){return this.a.r=!1},
$S:0}
C.f85.prototype={
$0(){var w=this.a
return w.m(new C.f84(w,this.b))},
$S:0}
C.f84.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.f7V.prototype={
$0(){var w=this.a
return w.m(new C.f7U(w,this.b,this.c))},
$S:0}
C.f7U.prototype={
$0(){var w=this.a.d,v=this.c.a
return this.b?w.W(0,v):w.M(0,v)},
$S:0}
C.f82.prototype={
$0(){return this.a.a1o(this.b)},
$S:0}
C.f83.prototype={
$0(){return this.a.Pe(0,this.b)},
$S:0}
C.f88.prototype={
$0(){B.a3(this.a,!1).N(null)
return null},
$S:0}
C.f89.prototype={
$0(){var w=this.a
return w.m(new C.f87(w,this.b))},
$S:0}
C.f87.prototype={
$0(){var w=this.a,v=w.d
if(this.b)v.a8(0)
else{w=w.a.c
v.v(0,new B.N(w,new C.f86(),B.S(w).k("N<1,n>")))}},
$S:0}
C.f86.prototype={
$1(d){return d.a},
$S:z+67}
C.ffk.prototype={
$1(d){var w,v=x.N,u=x.z,t=B.a2(d,v,u),s=t.h(0,"id")
s=J.k(s==null?"":s)
w=x.f
v=F.hbm(w.b(t.h(0,"doc"))?B.a2(w.a(t.h(0,"doc")),v,u):A.cz)
t=t.h(0,"updatedAt")
u=B.bi(J.k(t==null?"":t))
return new C.or(s,v,u==null?new B.U(Date.now(),0,!1):u)},
$S:z+50}
C.ffl.prototype={
$1(d){return d.a.length!==0},
$S:z+5}
C.fy6.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n
for(w=d.length,v=this.a,u=0;u<d.length;d.length===w||(0,B.M)(d),++u){t=d[u]
s=t.a
r=v.h(0,s)
q=!0
if(r!=null){p=t.c
o=r.c
n=p.a
if(n<=o.gbq())q=n===o.gbq()&&p.b>o.gcB()}if(q)v.n(0,s,t)}},
$S:z+68}
C.fy4.prototype={
$1(d){return!this.a.q(0,d.a)},
$S:z+5}
C.fy5.prototype={
$2(d,e){return e.c.aL(0,d.c)},
$S:z+29}
C.fL8.prototype={
$1(d){return d.ag()},
$S:z+32}
C.fuU.prototype={
$1(d){return d.a===this.a},
$S:z+5}
C.fM_.prototype={
$1(d){return new C.YN(this.a,null)},
$S:z+34}
C.cJF.prototype={
$1(d){return A.a.i(d.b).length===0},
$S:z+39}
C.cJH.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.cJK.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cJL.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.cJJ())},
$S:12}
C.cJJ.prototype={
$0(){},
$S:0}
C.cJM.prototype={
$1(d){var w=0,v=B.j(x.a),u=this,t,s,r,q,p
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(C.a22(t.a.c),$async$$1)
case 2:s=f
r=u.b
q=J.cD(s)
p=q.bg(s,new C.cJI(r))
if(p<0)q.c8(s,0,r)
else q.n(s,p,r)
w=3
return B.b(C.ahG(t.a.c,s),$async$$1)
case 3:return B.h(null,v)}})
return B.i($async$$1,v)},
$S:289}
C.cJI.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cJN.prototype={
$1(d){},
$S:29}
C.cJG.prototype={
$1(d){return new C.YL(this.b,this.a.gcxR(),null)},
$S:z+40}
C.cJO.prototype={
$1(d){return D.h9z},
$S:z+43}
C.cJB.prototype={
$1(d){var w=null,v=B.m(24),u=B.I(D.XZ,A.r,1),t=x.p
return B.at(B.aF(!1,A.a1,!0,w,B.p(w,B.x(B.a([new B.D(D.bzh,B.x(B.a([B.p(w,D.bO_,A.f,w,w,new B.o(A.aw.j(0.14),w,w,w,w,w,A.a5),w,56,w,w,w,w,w,56),A.aL,D.fvb,A.R,B.d("\u201c"+this.a.b.a+"\u201d is removed from this device. This cannot be undone.",w,w,w,w,w,w,D.fiU,A.L,w,w)],t),A.m,w,A.e,A.j,0,A.p),w),A.dW,new B.D(A.q7,B.B(B.a([B.E(B.dR(D.fC6,new C.cJz(d),B.dg(w,w,w,w,w,w,w,w,w,E.na,w,w,A.cj,w,new B.b7(B.m(14),A.a0),D.b06,w,w,w,w)),1),A.as,B.E(B.bH(D.fIb,new C.cJA(d),B.bp(A.bx,w,w,w,w,w,A.cj,w,new B.b7(B.m(14),A.a0),w,w,w)),1)],t),A.m,w,A.e,A.j,0,w,w),w)],t),A.m,w,A.e,A.P,0,A.p),A.f,w,A.xj,new B.o(D.ae0,w,u,v,D.d1B,w,A.n),w,w,w,L.ZX,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ah),w,w,w)},
$S:1673}
C.cJz.prototype={
$0(){B.a3(this.a,!1).N(!1)
return null},
$S:0}
C.cJA.prototype={
$0(){B.a3(this.a,!1).N(!0)
return null},
$S:0}
C.cJC.prototype={
$0(){return J.nx(this.a.d,new C.cJy(this.b))},
$S:0}
C.cJy.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cJx.prototype={
$1(d){var w,v,u,t=null,s=B.m(28),r=B.I(D.XZ,A.r,1),q=x.p
q=B.a([B.B(B.a([B.p(t,D.bT_,A.f,t,t,new B.o(t,t,t,B.m(14),t,D.apN,A.n),t,44,t,t,t,t,t,44),A.ba,B.E(B.x(B.a([B.d(this.a.b.a,t,1,A.a2,t,t,t,D.aSA,t,t,t),A.bC,D.fI6],q),A.E,t,A.e,A.j,0,A.p),1)],q),A.m,t,A.e,A.j,0,t,t),A.aA],q)
for(w=0;w<2;++w){v={}
u=D.doa[w]
v.a=null
u=u.a
v.a=u[0]
q.push(new C.ay0(u[1],u[2],u[3],new C.cJv(v,d),!1,t))}q.push(A.am)
q.push(D.bti)
q.push(A.am)
q.push(new C.ay0(A.ec,"Delete book","Remove it from this device",new C.cJw(d),!0,t))
return B.bm(!0,B.p(t,B.x(q,A.E,t,A.e,A.P,0,A.p),A.f,t,t,new B.o(D.ae0,t,r,s,t,t,A.n),t,t,t,A.tY,E.ZA,t,t,t),!0,!1,A.af,!0,!0)},
$S:26}
C.cJv.prototype={
$0(){var w=this.a.a
B.a3(this.b,!1).N(w)
return null},
$S:0}
C.cJw.prototype={
$0(){B.a3(this.a,!1).N("delete")
return null},
$S:0}
C.cJE.prototype={
$3(d,e,f){var w=null,v=B.m(4),u=B.a([new B.ac(0,A.G,A.w.j(0.45),A.aIh,12)],x.V)
return B.dJ(B.eI(A.A,e,B.p(w,B.bx(B.m(4),new B.a7(62,95.81818181818181,B.eQ(A.A,F.aot(d),A.f,A.dy),w),A.aq),A.f,w,w,new B.o(w,w,w,v,u,w,A.n),w,w,w,w,w,w,w,w),w),new B.t(f,0))},
$S:z+48}
C.cJD.prototype={
$0(){return this.a.c49()},
$S:0}
C.cJu.prototype={
$0(){return this.a.aYM(0,this.b)},
$S:0}
C.cJt.prototype={
$0(){return this.a.Di(this.b)},
$S:0}
C.cJs.prototype={
$0(){return this.a.Di(this.b)},
$S:0}
C.cJP.prototype={
$2(d,e){var w=this.a
return w.bD2(J.q(w.d,e))},
$S:42}
C.cIW.prototype={
$0(){var w=this.a
if(w.c!=null)w.AO()},
$S:0}
C.cIV.prototype={
$0(){var w=this.a,v=w.w
return v.push(w.b0G("Page "+(v.length+1),"",""))},
$S:0}
C.cIY.prototype={
$0(){var w=this.a.w,v=this.b,u=w[v],t=this.c
w[v]=w[t]
w[t]=u},
$S:0}
C.cJ5.prototype={
$0(){},
$S:0}
C.cJ6.prototype={
$1(d){var w=this.a,v=w.a,u=$.ax()
v.T$=u
v.P$=0
w=w.b
w.T$=u
w.P$=0
return null},
$S:9}
C.cIZ.prototype={
$0(){return this.a.c="data:"+this.b+";base64,"+A.cI.gcs().aM(this.c)},
$S:0}
C.cIX.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.cJ0.prototype={
$0(){return this.a.QD(this.b)},
$S:0}
C.cJ1.prototype={
$0(){return this.a.QD(this.b)},
$S:0}
C.cJ2.prototype={
$0(){var w=this.a
w.m(new C.cJ_(this.b))
w.E9()},
$S:0}
C.cJ_.prototype={
$0(){return this.a.c=""},
$S:0}
C.cJ4.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new C.cJ3(w,d))
w.E9()},
$S:z+51}
C.cJ3.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.cJb.prototype={
$2(d,e){if(d)this.a.AO()},
$S:121}
C.cJ7.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=2
return B.b(u.a.AO(),$async$$0)
case 2:t=u.b
if(t.e!=null)t.J(x.q).f.S(D.f5V)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.cJ8.prototype={
$0(){return this.a.aXK(this.b,-1)},
$S:0}
C.cJ9.prototype={
$0(){return this.a.aXK(this.b,1)},
$S:0}
C.cJa.prototype={
$0(){return this.a.c5v(0,this.b)},
$S:0}
C.fCD.prototype={
$1(d){return C.hlp()},
$S:44}
C.fCE.prototype={
$1(d){return null},
$S:29}
C.fjz.prototype={
$1(d){return null},
$S:29}
C.fDC.prototype={
$1(d){var w=d.b[0]
w.toString
return w},
$S:304}
C.fDB.prototype={
$2(d,e){return A.o.aL(e.length,d.length)},
$S:232}
C.fDI.prototype={
$1(d){var w=this.a
return C.h3D(d)===w||C.hq_(d)===w},
$S:z+4}
C.fiC.prototype={
$1(d){return A.a.aZ(A.o.u(d),2,"0")},
$S:80}
C.cbV.prototype={
$1(d){return d.length!==0},
$S:3}
C.fCB.prototype={
$1(d){return d.a===this.a.a.a},
$S:z+4}
C.fCC.prototype={
$1(d){return C.fFl(d)&&A.a.q(d.db,"rais")},
$S:z+4}
C.fxs.prototype={
$1(d){var w=null
return B.bm(!0,new B.D(E.yd,B.x(B.a([B.at(B.p(w,w,A.f,w,w,new B.o(A.aZ,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bv,D.fCI,A.N,B.d("Hati ya jimbo: "+this.a,w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aL,B.dq(D.GY,D.fwR,new C.fxq(d),B.bp(A.c_,w,w,w,A.w,w,A.cj,w,w,w,w,w)),A.R,B.es(A.wj,D.fE_,new C.fxr(d),B.dg(w,w,w,w,w,w,w,w,w,A.ae,w,w,A.cj,w,w,Q.xh,w,w,w,w))],x.p),A.aj,w,A.e,A.P,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:26}
C.fxq.prototype={
$0(){B.a3(this.a,!1).N("continue")
return null},
$S:0}
C.fxr.prototype={
$0(){B.a3(this.a,!1).N("new")
return null},
$S:0}
C.fxt.prototype={
$1(d){var w=null
return B.el(B.a([B.bK(!1,D.fsY,w,w,!0,w,w,new C.fxo(d),w,w),B.bH(D.fKv,new C.fxp(d),w)],x.p),w,w,w,D.fMq,w,w,w,w,D.fsR,w)},
$S:18}
C.fxo.prototype={
$0(){B.a3(this.a,!1).N(!1)
return null},
$S:0}
C.fxp.prototype={
$0(){B.a3(this.a,!1).N(!0)
return null},
$S:0}
C.edr.prototype={
$0(){var w=this.a
w.r=w.f=w.e=!1},
$S:0}
C.edp.prototype={
$0(){return this.a.e=!0},
$S:0}
C.edq.prototype={
$0(){return this.a.f=!0},
$S:0}
C.eds.prototype={
$0(){return this.a.r=!1},
$S:0}
C.edt.prototype={
$0(){return this.a.r=!0},
$S:0}
C.fDH.prototype={
$1(d){return A.a.aZ(A.o.u(d),2,"0")},
$S:80}
C.fDD.prototype={
$2$h$w(d,e){var w=null
return new B.bL(A.a3,w,w,B.Bt(A.A,B.p(w,w,A.f,w,w,new B.o(this.a.j(0.14),w,w,B.m(3),w,w,A.n),w,d,w,w,w,w,w,w),w,e),w)},
$0(){return this.$2$h$w(5,1)},
$1$w(d){return this.$2$h$w(5,d)},
$1$h(d){return this.$2$h$w(d,1)},
$S:1674}
C.fDF.prototype={
$1(d){var w=null,v=B.m(3)
return B.p(A.A,B.d(d,w,w,w,w,w,w,D.fk8,w,w,w),A.f,w,w,new B.o(this.a,w,w,v,w,w,A.n),w,12,w,w,w,w,w,w)},
$S:151}
C.fDG.prototype={
$1$size(d){var w=null
return B.B(B.a([B.p(w,w,A.f,w,w,new B.o(w,w,B.I(A.i9,A.r,1.5),w,w,w,A.a5),w,d,w,w,w,w,w,d),B.dJ(B.p(w,w,A.f,w,w,new B.o(w,w,B.I(A.i9,A.r,1.5),w,w,w,A.a5),w,d,w,w,w,w,w,d),new B.t(-d*0.38,0))],x.p),A.m,w,A.b8,A.j,0,w,w)},
$0(){return this.$1$size(18)},
$S:1675}
C.fDE.prototype={
$2$female$size(d,e){var w=null,v=d?D.ag0:this.a,u=B.I(A.i9,A.r,1),t=e*0.32,s=B.ao(w,B.p(w,w,A.f,w,w,new B.o(v,w,w,w,w,w,A.a5),w,t,w,w,w,w,w,t),w,w,w,w,e*0.16,w),r=d?0.62:0.5
return B.p(w,new B.an(A.A,w,A.aa,A.t,B.a([s,B.ao(e*0.06,B.p(w,w,A.f,w,w,new B.o(v,w,w,B.m(7),w,w,A.n),w,t,w,w,w,w,w,e*r),w,w,w,w,w,w)],x.p),w),A.f,w,w,new B.o(D.aef,w,u,w,w,w,A.a5),w,e,w,w,w,w,w,e)},
$1$female(d){return this.$2$female$size(d,18)},
$S:1676}
C.fPs.prototype={
$1(d){return new C.adq(this.a,this.b,null)},
$S:z+108}
C.e00.prototype={
$2(d,e){var w,v,u,t=null,s=this.b,r=s?D.bpY:A.LX,q=B.I(D.jq.j(0.25),A.r,1),p=B.at(B.p(t,t,A.f,t,t,new B.o(A.c_.j(0.45),t,t,B.m(2),t,t,A.n),t,4,t,t,t,t,t,40),t,t,t),o=B.m(15)
o=B.p(t,D.aox,A.f,t,t,new B.o(t,t,B.I(A.c.j(0.5),A.r,1.2),o,B.a([new B.ac(0,A.G,D.jq.j(0.35),A.eq,10)],x.V),D.c1O,A.n),t,t,t,t,A.y2,t,t,t)
w=this.a
v=w.d.length
u=x.p
return B.p(t,B.x(B.a([new B.D(K.ZN,B.x(B.a([p,A.aA,B.B(B.a([o,A.ba,B.E(B.x(B.a([B.d("Chagua muundo wa hati",t,t,t,t,t,t,B.l(t,t,s?A.c:D.jq,t,t,t,t,t,t,t,t,17,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),A.bC,B.d(w.c+" \xb7 "+v+" miundo",t,t,t,t,t,t,D.fjm,t,t,t)],u),A.E,t,A.e,A.j,0,A.p),1)],u),A.m,t,A.e,A.j,0,t,t)],u),A.m,t,A.e,A.j,0,A.p),t),B.E(B.ix(!0,t,e,A.y,D.aPX,new C.e0_(w,this.c),v,D.ajk,t,A.ag,!1),1)],u),A.m,t,A.e,A.j,0,A.p),A.f,t,t,new B.o(r,t,q,A.mm,t,t,A.n),t,t,t,t,t,t,t,t)},
$S:112}
C.e0_.prototype={
$2(d,e){var w=this.a.d[e]
return new C.acP(w,new C.e_Z(this.b,w),null)},
$S:z+72}
C.e_Z.prototype={
$0(){B.a3(this.a,!1).N(this.b.a)
return null},
$S:0}
C.fxw.prototype={
$1(d){return d.w==="hati_kuhowa"},
$S:z+2}
C.fxx.prototype={
$1(d){var w=null,v=this.a
return B.bm(!0,new B.D(E.yd,B.x(B.a([B.at(B.p(w,w,A.f,w,w,new B.o(A.aZ,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bv,D.fGe,A.N,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aL,B.dq(D.GY,B.d('Endelea na "'+A.d.gI(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fxu(d),B.bp(D.jq,w,w,w,A.c,w,A.cj,w,w,w,w,w)),A.R,B.es(A.og,D.UB,new C.fxv(d),B.dg(w,w,w,w,w,w,w,w,w,A.ae,w,w,A.cj,w,w,Q.xh,w,w,w,w))],x.p),A.aj,w,A.e,A.P,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:26}
C.fxu.prototype={
$0(){B.a3(this.a,!1).N("continue")
return null},
$S:0}
C.fxv.prototype={
$0(){B.a3(this.a,!1).N("new")
return null},
$S:0}
C.fxA.prototype={
$1(d){return d.w==="hati_kuhoweya"},
$S:z+2}
C.fxB.prototype={
$1(d){var w=null,v=this.a
return B.bm(!0,new B.D(E.yd,B.x(B.a([B.at(B.p(w,w,A.f,w,w,new B.o(A.aZ,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bv,D.ftY,A.N,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aL,B.dq(D.GY,B.d('Endelea na "'+A.d.gI(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fxy(d),B.bp(D.jq,w,w,w,A.c,w,A.cj,w,w,w,w,w)),A.R,B.es(A.og,D.UB,new C.fxz(d),B.dg(w,w,w,w,w,w,w,w,w,A.ae,w,w,A.cj,w,w,Q.xh,w,w,w,w))],x.p),A.aj,w,A.e,A.P,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:26}
C.fxy.prototype={
$0(){B.a3(this.a,!1).N("continue")
return null},
$S:0}
C.fxz.prototype={
$0(){B.a3(this.a,!1).N("new")
return null},
$S:0}
C.fxE.prototype={
$1(d){return d.w==="hati_malipo_awamu"},
$S:z+2}
C.fxF.prototype={
$1(d){var w=null,v=this.a
return B.bm(!0,new B.D(E.yd,B.x(B.a([B.at(B.p(w,w,A.f,w,w,new B.o(A.aZ,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bv,D.fAw,A.N,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aL,B.dq(D.GY,B.d('Endelea na "'+A.d.gI(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fxC(d),B.bp(D.jq,w,w,w,A.c,w,A.cj,w,w,w,w,w)),A.R,B.es(A.og,D.UB,new C.fxD(d),B.dg(w,w,w,w,w,w,w,w,w,A.ae,w,w,A.cj,w,w,Q.xh,w,w,w,w))],x.p),A.aj,w,A.e,A.P,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:26}
C.fxC.prototype={
$0(){B.a3(this.a,!1).N("continue")
return null},
$S:0}
C.fxD.prototype={
$0(){B.a3(this.a,!1).N("new")
return null},
$S:0}
C.fQV.prototype={
$1(d){return D.hey},
$S:z+74}
C.ehO.prototype={
$2(d,e){var w,v=null,u=this.a,t=u?D.bh1:A.LX,s=B.I(A.az.j(0.25),A.r,1),r=B.at(B.p(v,v,A.f,v,v,new B.o(A.az.j(0.45),v,v,B.m(2),v,v,A.n),v,4,v,v,v,v,v,40),v,v,v),q=B.m(15)
q=B.p(v,D.bVj,A.f,v,v,new B.o(v,v,B.I(A.c.j(0.5),A.r,1.2),q,B.a([new B.ac(0,A.G,A.c_.j(0.35),A.eq,10)],x.V),D.apS,A.n),v,v,v,v,A.y2,v,v,v)
w=x.p
return B.p(v,B.x(B.a([new B.D(K.ZN,B.x(B.a([r,A.aA,B.B(B.a([q,A.ba,B.E(B.x(B.a([B.d("Chagua muundo wa hati",v,v,v,v,v,v,B.l(v,v,u?A.c:A_.LT,v,v,v,v,v,v,v,v,17,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.bC,B.d("Hati ya Ndoa \xb7 19 miundo",v,v,v,v,v,v,D.fgQ,v,v,v)],w),A.E,v,A.e,A.j,0,A.p),1)],w),A.m,v,A.e,A.j,0,v,v)],w),A.m,v,A.e,A.j,0,A.p),v),B.E(B.ix(!0,v,e,A.y,D.aPX,new C.ehN(this.b),19,D.ajk,v,A.ag,!1),1)],w),A.m,v,A.e,A.j,0,A.p),A.f,v,v,new B.o(t,v,s,A.mm,v,v,A.n),v,v,v,v,v,v,v,v)},
$S:112}
C.ehN.prototype={
$2(d,e){var w=D.Ri[e]
return new C.af8(w,new C.ehM(this.a,w),null)},
$S:z+75}
C.ehM.prototype={
$0(){B.a3(this.a,!1).N(this.b.a)
return null},
$S:0}
C.fFp.prototype={
$0(){return B.h2A(C.hZE(this.a))},
$S:338}
C.fFo.prototype={
$0(){var w=C.h3W(this.a)
return"data:image/png;base64,"+A.cI.gcs().aM(w)},
$S:22}
C.fgU.prototype={
$4(d,e,f,g){var w=d+f*7,v=g*3
v=B.a([new B.ji(d,e),new B.ji(w,e+v),new B.ji(d+f*14,e),new B.ji(w,e-v)],x.J)
B.a2_(this.a,C.fB(4291404327),v)},
$S:666}
C.fR5.prototype={
$1(d){return new C.W_(this.a,null)},
$S:z+77}
C.ekL.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.ekK())},
$S:28}
C.ekK.prototype={
$0(){},
$S:0}
C.ekM.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.ekJ(w,d))},
$S:1678}
C.ekJ.prototype={
$0(){return this.a.x=J.eV(A.dF.gaQ(this.b))},
$S:0}
C.ekN.prototype={
$1(d){},
$S:29}
C.ekn.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.ekj.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.eku.prototype={
$0(){var w=this.a
w.as=!0
w.at="The editor is writing your newspaper\u2026"},
$S:0}
C.ekv.prototype={
$0(){var w=this.a
A.d.a8(w.ay)
w.z=this.b
w=w.ax
A.d.a8(w)
w.push(D.euR)},
$S:0}
C.ekw.prototype={
$0(){return this.a.as=!1},
$S:0}
C.ekp.prototype={
$0(){var w=this.a
w.as=!0
w.at="Working on it\u2026"
w.ax.push(new B.z("you",this.b))
w.f.bP(0,A.c7)},
$S:0}
C.ekq.prototype={
$0(){var w,v=this.b
if(v.c){w=this.a
w.ay.push(w.z)
w.z=v.b}this.a.ax.push(new B.z("ai",v.a))},
$S:0}
C.ekr.prototype={
$0(){return this.a.ax.push(new B.z("ai",B.w(this.b)))},
$S:0}
C.eks.prototype={
$0(){return this.a.as=!1},
$S:0}
C.ekt.prototype={
$1(d){var w=this.a.r,v=w.f
if(v.length!==0){v=A.d.gd1(v).Q
v.toString
w.me(v,A.dZ,A.is)}},
$S:9}
C.eko.prototype={
$0(){var w=this.a,v=w.z,u=C.fG2(w.y),t=this.b
w.y=t
if(v.a===u)w.z=v.cJ9(C.fG2(t))},
$S:0}
C.ekl.prototype={
$0(){var w=this.a
w.as=!0
w.at="Making your picture\u2026"},
$S:0}
C.ekm.prototype={
$0(){return this.a.as=!1},
$S:0}
C.ekC.prototype={
$0(){return B.a3(this.a,!1).ib()},
$S:0}
C.ekD.prototype={
$0(){var w=this.a
return w.m(new C.ekB(w))},
$S:0}
C.ekB.prototype={
$0(){var w=this.a
return w.z=w.ay.pop()},
$S:0}
C.ekE.prototype={
$0(){var w=this.a
return w.m(new C.ekA(w,this.b))},
$S:0}
C.ekA.prototype={
$0(){var w=this.b.b
this.a.e.saX(0,w)
return w},
$S:0}
C.ekF.prototype={
$1(d){var w=this.a
return w.m(new C.ekz(w))},
$S:8}
C.ekz.prototype={
$0(){return this.a.Q="en"},
$S:0}
C.ekG.prototype={
$1(d){var w=this.a
return w.m(new C.eky(w))},
$S:8}
C.eky.prototype={
$0(){return this.a.Q="sw"},
$S:0}
C.ekH.prototype={
$0(){var w=this.a
return w.m(new C.ekx(w,this.b))},
$S:0}
C.ekx.prototype={
$0(){var w=this.b
this.a.f.saX(0,w)
return w},
$S:0}
C.ekI.prototype={
$1(d){return this.a.a_4()},
$S:2}
C.ekk.prototype={
$0(){return this.a.c8S(this.b)},
$S:0}
C.cfA.prototype={
$1(d){var w=this.a
return typeof w.h(0,d)=="string"?A.a.i(B.cP(w.h(0,d))):null},
$S:319}
C.cfy.prototype={
$1(d){return A.a.i(d)},
$S:14}
C.cfz.prototype={
$1(d){return d.length!==0},
$S:3}
C.fF_.prototype={
blE(d,e){var w=0,v=B.j(x.H),u,t,s,r
var $async$$2=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:r=new C.bQF(d,B.a([],x.bH))
for(u=e.length,t=0;t<e.length;e.length===u||(0,B.M)(e),++t){s=e[t]
r.cFz($.r2().jJ(0,"assets/news_fonts/"+s))}w=2
return B.b(r.mK(0),$async$$2)
case 2:return B.h(null,v)}})
return B.i($async$$2,v)},
$2(d,e){return this.blE(d,e)},
$S:1679}
C.fDh.prototype={
$1(d){return d.length!==0},
$S:3}
C.fDj.prototype={
$1(d){var w=this.a.a
w=A.d.aG(A.d.ds(this.b,w,w+d)," ")
w=B.aL(w," \n\n ","\n\n")
w=B.aL(w," \n\n","\n\n")
return B.aL(w,"\n\n ","\n\n")},
$S:80}
C.fDi.prototype={
$1(d){var w,v,u,t=null
if(d===0)return!0
w=B.fS(t,t,t,t,B.cX(t,t,t,t,t,t,t,t,t,this.c,this.b.$1(d)),A.qC,A.c5,t,A.dP,A.c4)
v=this.a
w.qR(v.b)
u=w.b.a.c
return u.gbc(u)<=v.a},
$S:34}
C.fgu.prototype={
$1(d){var w=A.a.fE(d,B.af("\\s+",!0,!1,!1,!1))
return new B.Z(w,new C.fgv(),B.S(w).k("Z<1>")).gL(0)},
$S:261}
C.fgv.prototype={
$1(d){return d.length!==0},
$S:3}
C.fgs.prototype={
$2(d,e){return d+this.a.$1(e)},
$S:214}
C.fgt.prototype={
$2(d,e){return d+this.a.$1(e)},
$S:214}
C.cfB.prototype={
$2(a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=null,a7=y.g,a8=b0.b
a8=isFinite(a8)?a8:824
w=b0.d
w=isFinite(w)?w:340
v=a5.b
u=a5.c
t=u-1
s=(a8-v*t)/u
r=a5.d&&a5.a.gaAB()?Math.min(150,w*0.42):0
q=a5.e
p=x.s
o=B.a([],p)
for(n=a5.a,m=x.G,l=n.d,k=l.as;q>=10.5;q-=0.5){j=n.c.r
i=j.length===0?B.a([a7],p):j
h=B.b1(l.w)
g=B.a([],m)
for(f=0;f<u;++f)g.push(new B.z(s,w-(f===t?r:0)))
o=C.h3C(i,new B.F(!0,h,a6,k,a6,a6,q,A.cO,A.bp,0,a6,a6,1.28,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),g)
if(C.h0q(j.length===0?B.a([a7],p):j,o))break}e=q*1.28
j=A.d.aG(n.gch6(),"\n\n")
d=B.fS(a6,a6,a6,a6,B.cX(a6,a6,a6,a6,a6,a6,a6,a6,a6,n.aeA(k,q,1.28),j),A.qC,A.c5,a6,A.dP,A.c4)
d.qR(s)
for(a0=1;a0<40;++a0){j=d.b.a.c
a1=Math.min(w,j.gbc(j)/u+e*a0)
j=n.c.r
i=j.length===0?B.a([a7],p):j
h=B.b1(l.w)
g=B.a([],m)
for(f=0;f<u;++f)g.push(new B.z(s,Math.min(a1,w-(f===t?r:0))))
a2=C.h3C(i,new B.F(!0,h,a6,k,a6,a6,q,A.cO,A.bp,0,a6,a6,1.28,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),g)
if(C.h0q(j.length===0?B.a([a7],p):j,a2)){o=a2
break}}a3=n.aeA(k,q,1.28)
p=x.p
m=B.a([],p)
for(k=r>0,v=v/2-0.5,l=l.w,j=r-12,a4=0;a4<u;++a4){i=B.a([],p)
if(a4>0)i.push(new B.D(new B.Q(v,0,v,0),B.p(a6,a6,A.f,B.b1(l).j(0.5),a6,a6,a6,a6,a6,a6,a6,a6,a6,1),a6))
h=B.a([new B.bA(1,A.bd,new B.y(o.length>a4?o[a4]:"",a6,a3,a6,A.qC,a6,a6,a6,a6,a6,a6,a6),a6)],p)
if(k&&a4===t)h.push(n.aAA(s,j))
i.push(new B.a7(s,a6,B.x(h,A.E,a6,A.e,A.j,0,A.p),a6))
A.d.v(m,i)}return B.B(m,A.E,a6,A.e,A.j,0,a6,a6)},
$S:344}
C.cfC.prototype={
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
n=o.gaAB()
m=n?Math.min(140,p*0.4):0
n=x.s
l=B.a([],n)
for(k=x.G,j=o.d,i=j.as,h=17;h>=10.5;h-=0.5){g=o.c.r
f=g.length===0?B.a([a6],n):g
e=B.b1(j.w)
d=B.a([new B.z(u,q),new B.z(u,q)],k)
for(a0=0;a0<t;++a0)d.push(new B.z(r,p-(a0===s?m:0)))
l=C.h3C(f,new B.F(!0,e,a5,i,a5,a5,h,A.cO,A.bp,0,a5,a5,1.28,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5),d)
if(C.h0q(g.length===0?B.a([a6],n):g,l))break}a1=o.aeA(i,h,1.28)
a2=new C.cfD(a1)
n=x.p
v=B.B(B.a([a2.$2(l[0],u),A.Jk,new B.a7(v,a5,a4.f,a5),A.Jk,a2.$2(l[1],u)],n),A.E,a5,A.e,A.j,0,a5,a5)
k=B.a([],n)
for(i=m>0,j=j.w,g=m-12,a3=0;a3<t;++a3){f=B.a([],n)
if(a3>0)f.push(new B.D(D.bBC,B.p(a5,a5,A.f,B.b1(j).j(0.5),a5,a5,a5,a5,a5,a5,a5,a5,a5,1),a5))
e=B.a([new B.bA(1,A.bd,new B.y(l[2+a3],a5,a1,a5,A.qC,a5,a5,a5,a5,a5,a5,a5),a5)],n)
if(i&&a3===s)e.push(o.aAA(r,g))
f.push(new B.a7(r,a5,B.x(e,A.E,a5,A.e,A.j,0,A.p),a5))
A.d.v(k,f)}return B.x(B.a([new B.a7(a5,q,v,a5),A.ad,B.E(B.B(k,A.E,a5,A.e,A.j,0,a5,a5),1)],n),A.m,a5,A.e,A.j,0,A.p)},
$S:145}
C.cfD.prototype={
$2(d,e){var w=null
return new B.a7(e,w,B.d(d,w,w,w,w,w,w,this.a,A.qC,w,w),w)},
$S:1680}
C.fR8.prototype={
$1(d){return new C.W0(this.a,this.b,null)},
$S:z+79}
C.eli.prototype={
$1(d){return d.lG()},
$S:1681}
C.elj.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.elh(w,d))},
$S:1682}
C.elh.prototype={
$0(){var w=this.b
return this.a.d=w.gfA(w)},
$S:0}
C.el5.prototype={
$0(){return this.a.y=!0},
$S:0}
C.el6.prototype={
$0(){return this.a.y=!1},
$S:0}
C.elc.prototype={
$0(){return B.a3(this.a,!1).eJ()},
$S:0}
C.eld.prototype={
$2(d,e){var w=null,v=this.a,u=this.b,t=B.I(A.bA,A.r,2.5)
return B.aB(w,B.p(w,B.b4(w,w,w,new C.bci(u,v.gaxI(),w),A.fL),A.f,w,w,new B.o(w,w,t,w,w,w,A.n),w,w,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.ela(v),new C.elb(v,e,u),w,w,w,w,w,w,w,w,w,w,w,!1,A.a4)},
$S:37}
C.ela.prototype={
$1(d){var w=this.a
return w.x=w.f},
$S:247}
C.elb.prototype={
$1(d){var w=this.a
w.m(new C.el7(w,d,this.b,this.c))},
$S:223}
C.el7.prototype={
$0(){var w,v,u,t=this,s=t.a,r=t.b
s.f=A.k.E(s.x*r.d,1,6)
w=s.gaxI()
r=r.a
v=t.c
u=t.d
s.r=A.k.E(s.r-r.a/v.b*(w.c-w.a)/u.c,0,1)
s.w=A.k.E(s.w-r.b/v.d*(w.d-w.b)/u.d,0,1)},
$S:0}
C.ele.prototype={
$1(d){var w=this.a
return w.m(new C.el9(w,this.b))},
$S:8}
C.el9.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.elf.prototype={
$1(d){var w=this.a
return w.m(new C.el8(w,d))},
$S:7}
C.el8.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.elg.prototype={
$0(){return B.a3(this.b,!1).N(this.a.a.c)},
$S:0}
C.fRo.prototype={
$1(d){return D.hhl},
$S:z+83}
C.eUu.prototype={
$1(d){return this.a.YI()},
$S:9}
C.eTm.prototype={
$0(){var w=this.a,v=this.b
w.z=v
w.y="data:image/png;base64,"+A.cI.gcs().aM(v)},
$S:0}
C.eTK.prototype={
$0(){var w=this.a
w.p4=this.b
w.as=3},
$S:0}
C.eTU.prototype={
$1(d){return d>=this.a.length},
$S:34}
C.eT5.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.eT6.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.eT3.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.eT4.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.eTD.prototype={
$2(d,e){var w,v,u=null,t=e.d,s=this.a,r=new C.eTE(s,this.b,t,e.b),q=r.$1(!0),p=s.y2
p=B.a([B.jD(B.rK(p>0.2?F.bU0(q,B.Tv(p,p,A.x)):q),A.t,u)],x.p)
w=s.bi
if(w>0.02){v=B.Tv(12,12,A.x)
p.push(B.jD(B.d6(B.rK(F.bU0(r.$1(!0),v)),w*0.75),A.t,u))}r=s.b1
if(r!=null&&s.b0>0)p.push(B.em(u,B.b1(r).j(s.b0),!0))
r=s.bb
if(r!=null&&s.bK>0){r=B.b1(r).j(s.bK)
w=s.bb
w.toString
p.push(B.c1(u,new B.o(u,u,u,u,u,new B.c0(D.aYM,1.15,A.x,u,0,B.a([r,B.b1(w).j(0)],x.O),u,u),A.n),A.bf))}r=s.aE
if(r>0)p.push(B.c1(u,new B.o(u,u,u,u,u,new B.c0(D.aYx,0.8,A.x,u,0,B.a([A.c.j(r*0.55),A.c.j(0)],x.O),u,u),A.n),A.bf))
r=s.aK
if(r>0)p.push(B.c1(u,new B.o(u,u,u,u,u,new B.a9(A.b3,A.b6,A.x,B.a([A.w.j(r),A.K,A.K,A.w.j(s.aK)],x.O),D.d0d,u),A.n),A.bf))
if(s.aB>0){r=s.k1
p.push(B.ao(u,B.c1(u,new B.o(u,u,u,u,u,new B.a9(A.b3,A.b6,A.x,B.a([A.w.j(0),A.w.j(s.aB),A.w.j(s.aB),A.w.j(0)],x.O),D.dbn,u),A.n),A.bf),0.48*t,u,0,0,(r-0.06)*t,u))}r=s.Z
if(r>0)p.push(B.em(u,A.w.j(r),!0))
r=s.b8
if(r>0)p.push(B.c1(u,new B.o(u,u,u,u,u,new B.c0(A.A,0.95,A.x,u,0,B.a([A.K,A.w.j(r)],x.O),D.d8p,u),A.n),A.bf))
s=s.az
if(s>0)p.push(B.b4(u,u,u,new C.bfR(s,u),A.ax))
return new B.an(A.a_,u,A.b1,A.t,p,u)},
$S:67}
C.eTE.prototype={
$1(d){var w,v,u,t,s,r=this,q=null,p=B.fO(r.b,A.A,q,q,A.cf,A.bW,!0,q,!1,q,q),o=r.a,n=o.aXm(o.RG,o.R8,o.rx,o.ry,o.to,o.x1,o.x2,o.xr,o.y1),m=o.c7,l=m*3.141592653589793/180
if(m===0)w=1
else{m=Math.cos(l)
v=Math.sin(l)
u=r.c
t=r.d
s=u/t
u=s>1?s:t/u
w=Math.abs(m)+Math.abs(v)*u}m=o.bh
v=o.aH
u=v-1
t=o.bD
s=o.c5?-1:1
return B.dJ(B.ea(A.A,B.eI(A.A,l,B.fo(A.A,new B.Bg(new B.xh(q,q,n,A.AM),p,q),q,B.vT(s,o.cK?-1:1,1),!0),q),v*w,q,q),new B.t(-m*r.d*u/2,-t*r.c*u/2))},
$S:485}
C.eTQ.prototype={
$0(){return this.a.m(new C.eTP(this.b,this.c))},
$S:0}
C.eTP.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eTR.prototype={
$1(d){return this.a.m(new C.eTO(this.b,d))},
$S:7}
C.eTO.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eTT.prototype={
$0(){return this.a.m(new C.eTS(this.b,this.c))},
$S:0}
C.eTS.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eSW.prototype={
$1(d){return d.c===this.a.x},
$S:z+93}
C.eSX.prototype={
$1(d){var w=this.a
return w.m(w.gcze())},
$S:2}
C.eSY.prototype={
$1(d){return this.a.m(new C.eSV())},
$S:2}
C.eSV.prototype={
$0(){},
$S:0}
C.eSZ.prototype={
$0(){var w=this.a
return w.m(new C.eSU(w,this.b))},
$S:0}
C.eSU.prototype={
$0(){return this.a.x=this.b},
$S:0}
C.eT0.prototype={
$2(d,e){return A.as},
$S:36}
C.eT_.prototype={
$2(d,e){var w=null,v=this.b[e],u=this.a,t=v.a===u.w.a,s=B.m(14),r=B.a([B.b1(v.e),B.b1(v.f)],x.O),q=t?A.c:A.bz
q=B.I(q,A.r,t?2.5:1)
r=B.d9(w,B.at(B.d("\u201c",w,w,w,w,w,w,B.l(w,w,B.b1(v.r),w,w,w,w,w,w,w,w,40,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,w),w,w,A.b7,new B.o(w,w,q,s,w,new B.a9(A.b3,A.b6,A.x,r,w,w),A.n),A.ho,w,94,w,w,w,w,70)
return B.aB(w,new B.a7(70,w,B.x(B.a([r,A.fM,B.d(v.b,w,1,A.a2,w,w,w,B.l(w,w,t?A.c:A.aB,w,w,w,w,w,w,w,w,10.5,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eST(u,v),w,w,w,w,w,w,!1,A.a4)},
$S:84}
C.eST.prototype={
$0(){var w=this.a
return w.m(new C.eSQ(w,this.b))},
$S:0}
C.eSQ.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.eT1.prototype={
$1(d){var w=this.a
return w.m(new C.eSS(w,d))},
$S:8}
C.eSS.prototype={
$0(){return this.a.k3=this.b},
$S:0}
C.eT2.prototype={
$1(d){var w=this.a
return w.m(new C.eSR(w,d))},
$S:8}
C.eSR.prototype={
$0(){return this.a.k2=this.b},
$S:0}
C.eUj.prototype={
$1(d){var w=this.a.db
return w[d]===w[A.d.gI(this.b)]},
$S:34}
C.eUq.prototype={
$1(d){var w=this.a
return w.m(new C.eUr(w,d))},
$S:31}
C.eUr.prototype={
$0(){var w,v,u,t,s
for(w=this.a,v=w.dx,v=B.en(v,v.r,B.a6(v).c),w=w.db,u=this.b,t=v.$ti.c;v.C();){s=v.d
w[s==null?t.a(s):s]=u}},
$S:0}
C.eUs.prototype={
$1(d){var w
A:{if(1===d){w=20
break A}if(2===d){w=28
break A}if(-1===d){w=11
break A}w=15
break A}return w},
$S:235}
C.eUk.prototype={
$0(){var w=this.a
return w.m(new C.eUi(w,this.b))},
$S:0}
C.eUi.prototype={
$0(){var w=this.a.dx,v=this.b
return w.q(0,v)?w.W(0,v):w.M(0,v)},
$S:0}
C.eUl.prototype={
$0(){var w=this.a
return w.m(new C.eUh(w,this.b))},
$S:0}
C.eUh.prototype={
$0(){var w,v=this.b.length,u=J.e4(v,x.S)
for(w=0;w<v;++w)u[w]=w
return this.a.dx.v(0,u)},
$S:0}
C.eUm.prototype={
$0(){var w=this,v=w.a
return v.m(new C.eUg(v,w.b,w.c,w.d))},
$S:0}
C.eUg.prototype={
$0(){var w,v,u,t,s,r=this,q=r.a.dx
q.a8(0)
w=B.a([],x.t)
for(v=r.b,u=r.c,t=r.d,s=0;s<v.length;++s)if(u[s]===t)w.push(s)
q.v(0,w)},
$S:0}
C.eUn.prototype={
$0(){var w=this.a,v=w.dx
return w.m(v.gBs(v))},
$S:0}
C.eUo.prototype={
$0(){return this.b.$1(this.a.a)},
$S:0}
C.eUp.prototype={
$0(){var w=this.a
return w.m(new C.eUf(w))},
$S:0}
C.eUf.prototype={
$0(){var w=this.a.db
return A.d.ht(w,0,w.length,0)},
$S:0}
C.eU2.prototype={
$1(d){return d.a===this.a.dy},
$S:227}
C.eU3.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=(e.b-42)/7,h=B.a([],x.p)
for(w=i*0.42,v=this.a,u=i*0.95,t=x.O,s=0;s<21;++s){r={}
q=D.axX[s]
r.a=null
p=q.a
r.a=p
o=v.dy
n=new B.aQ(9,9)
m=B.a([B.b1(v.w.e),B.b1(v.w.f)],t)
l=r.a
k=v.fx
h.push(v.axN(new B.ng(new B.bk(n,n,n,n),A.aq,new B.kU(new B.o(j,j,j,j,j,new B.a9(A.a3,A.a8,A.x,m,j,j),A.n),A.bf,new C.b_q(l,B.b1(k==null?v.w.x:k),A.k.E(w,12,26),j),j),j),u,q.b,o===p,new C.eU1(r,v),2,i))}return B.bW(A.bD,h,A.bq,7,7)},
$S:175}
C.eU1.prototype={
$0(){var w=this.b
return w.m(new C.eTX(this.a,w))},
$S:0}
C.eTX.prototype={
$0(){return this.b.dy=this.a.a},
$S:0}
C.eU4.prototype={
$1(d){var w=this.a
w.p1=!1
w.k4=d},
$S:195}
C.eU7.prototype={
$0(){var w=this.a
return w.m(new C.eU0(w))},
$S:0}
C.eU0.prototype={
$0(){return this.a.p1=!0},
$S:0}
C.eU8.prototype={
$1(d){return this.a.p2=d},
$S:7}
C.eU9.prototype={
$1(d){return this.a.p3=d},
$S:7}
C.eUa.prototype={
$1(d){return this.a.ok=d},
$S:7}
C.eUb.prototype={
$0(){var w=this.a
return w.m(new C.eU_(w))},
$S:0}
C.eU_.prototype={
$0(){var w=this.a
return w.fy=!w.fy},
$S:0}
C.eUc.prototype={
$0(){var w=this.a
return w.m(new C.eTZ(w))},
$S:0}
C.eTZ.prototype={
$0(){var w=this.a
return w.go=!w.go},
$S:0}
C.eUd.prototype={
$0(){var w=this.b
return w.m(new C.eTY(this.a,w))},
$S:0}
C.eTY.prototype={
$0(){return this.b.id=this.a.a},
$S:0}
C.eUe.prototype={
$1(d){return this.a.fx=d},
$S:195}
C.eU5.prototype={
$1(d){return this.a.fr=d},
$S:7}
C.eU6.prototype={
$1(d){return this.a.k1=d},
$S:7}
C.eTH.prototype={
$0(){var w=this.a
return w.m(new C.eTG(w))},
$S:0}
C.eTG.prototype={
$0(){var w=this.a
w.p4=null
w.b3p()},
$S:0}
C.eTI.prototype={
$0(){var w=this.a
return w.m(new C.eTF(w,this.b))},
$S:0}
C.eTF.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.eTJ.prototype={
$0(){var w=this.a
return w.m(w.gcpA())},
$S:0}
C.eTz.prototype={
$0(){var w=this.a
return w.m(new C.eTy(w))},
$S:0}
C.eTy.prototype={
$0(){var w=this.a
w.RG=0.03
w.rx=1.12
w.ry=1.15
w.R8=w.xr=0},
$S:0}
C.eTA.prototype={
$0(){var w=this.a
return w.m(new C.eTx(w))},
$S:0}
C.eTx.prototype={
$0(){var w=this.a
w.aB=0.55
w.Z=Math.max(w.Z,0.12)},
$S:0}
C.eTB.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=null,n=(e.b-24)/4,m=B.a([],x.p)
for(w=n*1.25,v=this.a,u=this.b,t=0;t<18;++t){s=D.d8O[t]
r=s.b
q=Math.abs(v.RG-r)<0.001&&Math.abs(v.rx-s.c)<0.001&&Math.abs(v.ry-s.d)<0.001&&Math.abs(v.to-s.e)<0.001&&Math.abs(v.x1-s.f)<0.001&&Math.abs(v.xr-s.r)<0.001&&Math.abs(v.x2)<0.5&&Math.abs(v.R8)<0.001&&!v.y1
p=new B.aQ(9,9)
m.push(v.axN(new B.ng(new B.bk(p,p,p,p),A.aq,new B.a7(1/0,1/0,new B.Bg(new B.xh(o,o,v.aXm(r,0,s.c,s.d,s.e,s.f,0,s.r,!1),A.AM),B.fO(u,A.A,140,o,A.cf,A.bW,!1,o,!1,o,o),o),o),o),w,s.a,q,new C.eTw(v,s),3,n))}return B.bW(A.bD,m,A.bq,10,8)},
$S:175}
C.eTw.prototype={
$0(){var w=this.a
return w.m(new C.eTv(w,this.b))},
$S:0}
C.eTv.prototype={
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
C.eTd.prototype={
$1(d){return this.a.R8=d},
$S:7}
C.eTe.prototype={
$1(d){return this.a.RG=d},
$S:7}
C.eTf.prototype={
$1(d){return this.a.rx=d},
$S:7}
C.eTg.prototype={
$1(d){return this.a.xr=d},
$S:7}
C.eTh.prototype={
$1(d){return this.a.aE=d},
$S:7}
C.eTi.prototype={
$1(d){return this.a.Z=d},
$S:7}
C.eTj.prototype={
$1(d){return this.a.b8=d},
$S:7}
C.eTk.prototype={
$1(d){return this.a.aB=d},
$S:7}
C.eTl.prototype={
$1(d){return this.a.aK=d},
$S:7}
C.eSz.prototype={
$1(d){return this.a.ry=d},
$S:7}
C.eSA.prototype={
$1(d){return this.a.to=d},
$S:7}
C.eSB.prototype={
$1(d){return this.a.x1=d},
$S:7}
C.eSC.prototype={
$1(d){return this.a.x2=d},
$S:7}
C.eSD.prototype={
$0(){var w=this.a
return w.m(new C.eSy(w))},
$S:0}
C.eSy.prototype={
$0(){var w=this.a
return w.y1=!w.y1},
$S:0}
C.eSE.prototype={
$1(d){return this.a.b1=d},
$S:195}
C.eSF.prototype={
$1(d){return this.a.b0=d},
$S:7}
C.eT7.prototype={
$1(d){return this.a.y2=d},
$S:7}
C.eT8.prototype={
$1(d){return this.a.bi=d},
$S:7}
C.eT9.prototype={
$1(d){return this.a.az=d},
$S:7}
C.eTa.prototype={
$1(d){return this.a.bb=d},
$S:195}
C.eTb.prototype={
$1(d){return this.a.bK=d},
$S:7}
C.eSJ.prototype={
$1(d){return this.a.aH=d},
$S:7}
C.eSK.prototype={
$1(d){return this.a.bh=d},
$S:7}
C.eSL.prototype={
$1(d){return this.a.bD=d},
$S:7}
C.eSM.prototype={
$1(d){return this.a.c7=d},
$S:7}
C.eSN.prototype={
$0(){var w=this.a
return w.m(new C.eSI(w))},
$S:0}
C.eSI.prototype={
$0(){var w=this.a
return w.c7=A.k.F(w.c7+90+180,360)-180},
$S:0}
C.eSO.prototype={
$0(){var w=this.a
return w.m(new C.eSH(w))},
$S:0}
C.eSH.prototype={
$0(){var w=this.a
return w.c5=!w.c5},
$S:0}
C.eSP.prototype={
$0(){var w=this.a
return w.m(new C.eSG(w))},
$S:0}
C.eSG.prototype={
$0(){var w=this.a
return w.cK=!w.cK},
$S:0}
C.eTC.prototype={
$0(){var w=this.a,v=w.c
v.toString
return C.ie4(v,w.p4)},
$S:0}
C.eTu.prototype={
$2(d,e){var w=null,v=this.a.z,u=v==null?D.bqh:B.fO(v,A.A,w,w,A.cf,A.bW,!1,w,!1,w,w)
return C.fDp(d.length===0?"rounded":d,u,e)},
$S:131}
C.eTq.prototype={
$0(){var w=this.a
return w.m(new C.eTp(w))},
$S:0}
C.eTp.prototype={
$0(){var w=this.a
w.ay=0.39
w.ch=0.8
w.CW=0.22
w.cx="circle"
w.cy="gold"},
$S:0}
C.eTr.prototype={
$0(){var w=this.b
return w.m(new C.eTo(this.a,w))},
$S:0}
C.eTo.prototype={
$0(){return this.b.cx=this.a.a},
$S:0}
C.eTs.prototype={
$0(){var w=this.b
return w.m(new C.eTn(this.a,w))},
$S:0}
C.eTn.prototype={
$0(){return this.b.cy=this.a.a},
$S:0}
C.eTt.prototype={
$1(d){var w=this.a
w.CW=d
w.ay=A.k.E(w.ay,0,1-d)
w.ch=A.k.E(w.ch,0,0.95)},
$S:7}
C.eTN.prototype={
$2(d,e){var w,v,u,t=null,s=e.b,r=e.d,q=B.m(20),p=B.a([new B.ac(-4,A.G,A.b5.j(0.35),A.J,30)],x.V),o=B.m(20),n=this.a,m=x.p,l=B.a([],m)
if(n.p4!=null)l.push(new B.eG(n.cj1(),n.r))
l.push(new C.IZ(n.cwb(),!1,!1,t))
o=B.bU(0,B.bx(o,new B.eG(new B.an(A.a_,t,A.b1,A.t,l,t),n.f),A.aq),0,0,0)
l=n.ay
w=n.ch
v=n.CW*s
u=B.m(8)
return B.p(t,new B.an(A.a_,t,A.aa,A.t,B.a([o,B.ao(t,B.aB(A.cc,B.c1(t,new B.o(t,t,B.I(A.c.j(0.3),A.r,1),u,t,t,A.n),A.bf),A.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.eTM(n,s,r),t,t,t,t,t,t,t,t,t,t,t,t,t,t,!1,A.a4),v,t,l*s,t,w*r,v)],m),t),A.f,t,t,new B.o(t,t,t,q,p,t,A.n),t,t,t,t,t,t,t,t)},
$S:212}
C.eTM.prototype={
$1(d){var w=this.a
return w.m(new C.eTL(w,d,this.b,this.c))},
$S:21}
C.eTL.prototype={
$0(){var w,v=this,u=v.a,t=v.b.d,s=v.c
u.ay=A.k.E(u.ay+t.a/s,0,1-u.CW)
w=v.d
u.ch=A.k.E(u.ch+t.b/w,0,1-u.CW*s/w)},
$S:0}
C.eTW.prototype={
$0(){var w=this.a
return w.m(new C.eTV(w,this.b))},
$S:0}
C.eTV.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.eTc.prototype={
$0(){var w=this.a.c
w.toString
return B.a3(w,!1).ib()},
$S:0}
C.eUt.prototype={
$2(d,e){var w,v,u,t=null,s=e.b
if(s>=860){w=this.a
v=x.p
return B.B(B.a([new B.a7(Math.min(s*0.4,460),t,B.x(B.a([w.b_3(),B.E(B.at(w.b20(Math.max(240,e.d-110)),t,t,t),1)],v),A.m,t,A.e,A.j,0,A.p),t),B.E(B.x(B.a([B.E(w.aQu(),1),w.aMH()],v),A.m,t,A.e,A.j,0,A.p),1)],v),A.m,t,A.e,A.j,0,t,t)}u=A.k.E(e.d*0.36,190,360)
s=this.a
return B.x(B.a([s.b_3(),new B.D(A.hE,B.at(s.b20(u),t,t,t),t),B.E(s.aQu(),1),s.aMH()],x.p),A.m,t,A.e,A.j,0,A.p)},
$S:493}
C.fAG.prototype={
$10$align$style$weight(d,e,f,g,h,i,j,k,l,m){return C.er(k,!1,j,A.aF,"",4280640491,i,l,m,"",h,C.bAG(),null,"","",0,!1,"",0,D.bg,4280172719,2,d,0,0,"",D.cl,D.cQ,g,e,f)},
$9$align$weight(d,e,f,g,h,i,j,k,l){return this.$10$align$style$weight(d,e,f,g,h,i,j,k,A.bp,l)},
$8$weight(d,e,f,g,h,i,j,k){return this.$10$align$style$weight(d,e,f,g,h,i,j,A.L,A.bp,k)},
$7(d,e,f,g,h,i,j){return this.$10$align$style$weight(d,e,f,g,h,i,j,A.L,A.bp,A.O)},
$S:z+98}
C.fAF.prototype={
$3(d,e,f){var w=this,v=C.bAG(),u=w.b?A.H:A.cw,t=w.c?A.cE:A.bp
return C.er(w.d,!1,f,A.aF,"",4280640491,e,t,u,"",0.36,v,null,"","",0,!0,"",0,D.bg,4280172719,2,d,0,w.f,w.e,D.cl,D.cQ,0.82,0.09,w.a)},
$S:z+28}
C.cgZ.prototype={
$1(d){return B.w(d)},
$S:17}
C.fIo.prototype={
$0(){return this.a},
$S:z+15}
C.fnZ.prototype={
$1(d){return d.a.d0(this.a)},
$S:z+30}
C.fo_.prototype={
$2(d,e){return J.cp(e)},
$S:z+31}
C.fIq.prototype={
$0(){return B.a([],x.o)},
$S:z+15}
C.fIt.prototype={
$1(d){return d.a===A.a.i(this.a).toLowerCase()},
$S:z+10}
C.fIu.prototype={
$0(){return A.d.gI(D.wt)},
$S:z+33}
C.fIm.prototype={
$1(d){return d.a},
$S:z+16}
C.fIp.prototype={
$1(d){return d.a},
$S:z+16}
C.fGl.prototype={
$1(d){return A.a.i(B.w(d))},
$S:17}
C.fGm.prototype={
$1(d){return d.length!==0},
$S:3}
C.fGn.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.fAK.prototype={
$0(){return C.cE()},
$S:22}
C.fAN.prototype={
$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var w=this.a.$0(),v=m==null?this.b.e:m,u=this.c,t=u?k:D.cl,s=u?n:0
return C.er(j,l,v,A.aF,"",4280640491,i,q,r,"",h,w,null,u?o:"",p,0,!1,"",0,D.bg,4280172719,2,d,s,0,"",t,D.cQ,g,e,f)},
$6(d,e,f,g,h,i){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bi,D.dh,!1,null,0,"","",A.bp,A.a7)},
$7$key(d,e,f,g,h,i,j){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bi,D.dh,!1,null,0,"",j,A.bp,A.a7)},
$8$fx$key(d,e,f,g,h,i,j,k){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bi,D.dh,!1,null,0,j,k,A.bp,A.a7)},
$11$align$anim$delay$fx$key(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,!1,null,l,m,n,A.bp,A.a7)},
$10$align$anim$key$weight(d,e,f,g,h,i,j,k,l,m){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,!1,null,0,"",l,A.bp,m)},
$10$align$color$delay$key(d,e,f,g,h,i,j,k,l,m){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,D.dh,!1,k,l,"",m,A.bp,A.a7)},
$9$anim$key$weight(d,e,f,g,h,i,j,k,l){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bi,j,!1,null,0,"",k,A.bp,l)},
$9$color$delay$key(d,e,f,g,h,i,j,k,l){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bi,D.dh,!1,j,k,"",l,A.bp,A.a7)},
$11$anim$color$fx$key$weight(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bi,j,!1,k,0,l,m,A.bp,n)},
$11$align$anim$key$style$weight(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,!1,null,0,"",l,m,n)},
$11$anim$bullets$color$delay$key(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bi,j,k,l,m,"",n,A.bp,A.a7)},
$S:z+35}
C.fAM.prototype={
$9$fx$key$rotation(d,e,f,g,h,i,j,k,l){var w=this.a.$0()
return C.er(A.bi,!1,4279310375,A.aF,"",i,24,A.bp,A.a7,"",h,w,null,this.b?j:"",k,0,!1,"",l,d,i,0,"",0,0,"",D.cl,D.f8,g,e,f)},
$6(d,e,f,g,h,i){return this.$9$fx$key$rotation(d,e,f,g,h,i,"","",0)},
$7$key(d,e,f,g,h,i,j){return this.$9$fx$key$rotation(d,e,f,g,h,i,"",j,0)},
$8$fx$key(d,e,f,g,h,i,j,k){return this.$9$fx$key$rotation(d,e,f,g,h,i,j,k,0)},
$S:z+27}
C.fAL.prototype={
$9$anim$delay$fx$key(d,e,f,g,h,i,j,k,l){var w=this.a.$0(),v=this.b,u=v?i:D.cl,t=v?j:0
return C.er(A.bi,!1,4279310375,A.aF,"",4280640491,24,A.bp,A.a7,"",h,w,d,v?k:"",l,0,!1,"",0,D.bg,4280172719,2,"",t,0,"",u,D.lJ,g,e,f)},
$5(d,e,f,g,h){return this.$9$anim$delay$fx$key(d,e,f,g,h,D.qs,350,"","")},
$8$anim$delay$key(d,e,f,g,h,i,j,k){return this.$9$anim$delay$fx$key(d,e,f,g,h,i,j,"",k)},
$8$anim$fx$key(d,e,f,g,h,i,j,k){return this.$9$anim$delay$fx$key(d,e,f,g,h,i,350,j,k)},
$S:z+37}
C.fAJ.prototype={
$1(d){var w=d.x
return w>0&&w<=this.a.length},
$S:z+17}
C.fDa.prototype={
$0(){var w=0,v=B.j(x.e),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.a){s=t.b
r=s.a
s=(r==="bullets"||r==="section")&&s.w.length!==0}else s=!1
w=s?3:5
break
case 3:s=t.b
w=6
return B.b($.hmr.c4(0,A.a.i(s.w).toLowerCase(),new C.fD8(s)),$async$$0)
case 6:q=e
w=4
break
case 5:q=null
case 4:w=t.c&&t.b.r.length!==0?7:9
break
case 7:s=t.b
w=10
return B.b(t.d.c4(0,s.r,new C.fD9(s)),$async$$0)
case 10:p=e
w=8
break
case 9:p=null
case 8:u=new B.by(t.e,new B.boI(p,q),x.e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1686}
C.fD8.prototype={
$0(){return F.aNY(this.a.w)},
$S:178}
C.fD9.prototype={
$0(){var w=this.a.r,v=B.aL(w.toLowerCase()," ","_")
return F.bzA("https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji@main/assets/"+B.id(2,w,A.cg,!1)+"/3D/"+v+"_3d.png","image/png")},
$S:178}
C.fgo.prototype={
$1(d){return d.a==="bio"},
$S:z+17}
C.fgp.prototype={
$1(d){return d.a},
$S:z+18}
C.fgq.prototype={
$1(d){return d.b},
$S:z+19}
C.fRA.prototype={
$1(d){return D.hhB},
$S:z+41}
C.f_H.prototype={
$0(){return this.a.x=C.hRc(this.b,this.c.b)},
$S:0}
C.f_I.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.f_F.prototype={
$1(d){var w
if(this.a){w=this.b
if(w==null)w="circle"}else w=d
return w},
$S:400}
C.f_G.prototype={
$1(d){var w
if(this.a)w=d
else{w=this.b
if(w==null)w=""}return w},
$S:400}
C.f_E.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:o=t.b
n=t.a
m=n.c
m.toString
w=3
return B.b(B.bT(A.au,null,new C.f_z(n,t.c,o,t.d,t.e,t.f),m,!0,!0,o,A.jZ,!1,!1,x.N),$async$$0)
case 3:s=e
if(s==null){w=1
break}w=A.a.a0(s,"finale:")?4:5
break
case 4:r=A.a.b4(s,7)
if(r.length===0){n.m(new C.f_A(n))
w=1
break}o=n.c
if(o==null){w=1
break}m=n.w
q=m.d
if(q.length===0){q=n.x
if(q==null)q=""}w=6
return B.b(C.hso(o,m.cJX(q,r)),$async$$0)
case 6:p=e
if(p!=null&&n.c!=null)n.m(new C.f_B(n,p))
w=1
break
case 5:o=s==="__auto"?null:s
t.r.$1(o)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.f_z.prototype={
$1(d){var w,v,u,t,s,r,q=this,p=null,o=new C.f_D(q.b,d),n=x.p,m=B.a([o.$2("__auto",B.p(p,D.b7E,A.f,p,p,D.b2B,p,p,p,p,p,p,p,p))],n),l=q.c,k=l?D.Cw:D.CB,j=k.length,i=q.a,h=q.d,g=q.e,f=q.f,e=0
for(;e<j;++e){w=k[e].a
v=g.$1(w)
u=f.$1(w)
if(v.length===0&&u.length===0)v="rounded"
m.push(o.$2(w,new B.a7(64,64,C.fDp(v,i.b42(h),u),p)))}t=B.kK(1,m,4,10,10,p,A.dQ,!0)
if(!l)return B.bm(!0,new B.D(Aa.ya,t,p),!0,!1,A.af,!0,!0)
s=new C.f_C(i,d)
m=B.aH(d,A.bX,x.w).w
l=B.a([s.$2("","None")],n)
for(e=0;e<32;++e){r=D.Hh[e]
l.push(s.$2(r.a,r.b))}return B.bm(!0,new B.cT(new B.aY(0,1/0,0,m.a.b*0.85),B.cd(B.x(B.a([D.fyV,A.R,t,A.dW,D.eWt,A.av,D.fJR,A.R,B.kK(1.15,l,3,10,10,p,A.dQ,!0)],n),A.E,p,A.e,A.j,0,A.p),A.t,p,A.y,p,Aa.ya,p,p,A.ag),p),!0,!1,A.af,!0,!0)},
$S:26}
C.f_D.prototype={
$2(d,e){var w=null,v=d==="__auto"&&this.a==null||d===this.a,u=B.m(16),t=v?A.b5.j(0.22):A.c.j(0.04),s=v?A.by:A.ds
return B.aB(w,B.p(w,e,A.f,w,w,new B.o(t,w,B.I(s,A.r,v?2:1),u,w,w,A.n),w,w,w,w,A.hG,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.f_y(this.b,d),w,w,w,w,w,w,!1,A.a4)},
$S:1687}
C.f_y.prototype={
$0(){B.a3(this.a,!1).N(this.b)
return null},
$S:0}
C.f_C.prototype={
$2(d,e){var w,v=null,u=this.a.w,t=u.a===d,s=B.m(12),r=t?A.bM:A.bz
r=B.I(r,A.r,t?2.5:1)
w=B.m(10)
u=B.E(B.p(v,B.bx(w,d.length===0?B.p(v,D.ap1,A.f,A.c.j(0.05),v,v,v,v,v,v,v,v,v,v):B.e2(new C.NF(u.FK(d),!0,!1,v),!0,v),A.aq),A.f,v,v,new B.o(v,v,r,s,v,v,A.n),v,v,v,v,v,v,v,v),1)
return B.aB(v,B.x(B.a([u,A.av,B.d(e,v,1,A.a2,v,v,v,B.l(v,v,t?A.bM:A.ae,v,v,v,v,v,v,v,v,10.5,v,v,A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.j,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.f_x(this.b,d),v,v,v,v,v,v,!1,A.a4)},
$S:131}
C.f_x.prototype={
$0(){B.a3(this.a,!1).N("finale:"+this.b)
return null},
$S:0}
C.f_A.prototype={
$0(){var w=this.a
return w.w=w.w.FK("")},
$S:0}
C.f_B.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.f_n.prototype={
$0(){var w=this.a
w.e=this.b
w.cy=null},
$S:0}
C.f_o.prototype={
$0(){return this.a.cy=J.k(this.b)},
$S:0}
C.f_q.prototype={
$0(){return this.a.cy="Type a little about the presentation first, or attach a document."},
$S:0}
C.f_r.prototype={
$0(){return this.a.cy='You mentioned your logo \u2014 tap "Add your logo" below to upload it, so the AI puts the real one in.'},
$S:0}
C.f_s.prototype={
$0(){var w=this.a
w.ax=!0
w.cy=null
w.ay="Writing your "+w.ch+" slides\u2026"},
$S:0}
C.f_t.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.f_p(w,d))},
$S:2}
C.f_p.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.f_u.prototype={
$0(){var w=this.a
w.ax=!1
w.cy=B.w(this.b)},
$S:0}
C.f_V.prototype={
$0(){return this.a.f.fO()},
$S:0}
C.f_W.prototype={
$0(){var w=this.a
return w.m(new C.f_U(w))},
$S:0}
C.f_U.prototype={
$0(){return this.a.e=null},
$S:0}
C.f_X.prototype={
$0(){var w=this.a
return w.m(new C.f_T(w))},
$S:0}
C.f_T.prototype={
$0(){return this.a.x=null},
$S:0}
C.f_Z.prototype={
$1(d){var w=this.a
return w.m(new C.f_S(w,d))},
$S:33}
C.f_S.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.f0_.prototype={
$1(d){var w=this.a
return w.m(new C.f_R(w,d))},
$S:33}
C.f_R.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.f00.prototype={
$0(){var w=this.a
return w.m(new C.f_Q(w))},
$S:0}
C.f_Q.prototype={
$0(){return this.a.y=B.a([],x.s)},
$S:0}
C.f01.prototype={
$1(d){var w=this.a
return w.m(new C.f_P(w,d))},
$S:33}
C.f_P.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.f02.prototype={
$1(d){var w=this.a
return w.m(new C.f_O(w,d))},
$S:33}
C.f_O.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.f03.prototype={
$0(){var w=this.a
return w.m(new C.f_N(w))},
$S:0}
C.f_N.prototype={
$0(){var w=this.a
return w.w=w.w.FK("")},
$S:0}
C.f04.prototype={
$0(){var w=this.a
return w.m(new C.f_M(w,this.b))},
$S:0}
C.f_M.prototype={
$0(){return this.a.ch=this.b},
$S:0}
C.f05.prototype={
$2(d,e){var w,v,u=(e.b-16)/3,t=B.a([],x.p)
for(w=this.a,v=0;v<6;++v)t.push(new B.a7(u,null,w.bP2(D.a3N[v]),null))
return B.bW(A.bD,t,A.bq,8,8)},
$S:175}
C.f_Y.prototype={
$1(d){var w=this.a
return w.m(new C.f_L(w,d))},
$S:8}
C.f_L.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.f_v.prototype={
$0(){var w=this.a
return w.m(new C.f_w(w,this.b,this.c))},
$S:0}
C.f_w.prototype={
$0(){var w=this.c,v=this.a.cx
return this.b?v.W(0,w):v.M(0,w)},
$S:0}
C.f_K.prototype={
$0(){var w=this.a
return w.m(new C.f_J(w,this.b))},
$S:0}
C.f_J.prototype={
$0(){return this.a.CW=this.b},
$S:0}
C.fRz.prototype={
$1(d){return new C.a0A(this.a,this.b,null)},
$S:z+42}
C.f_g.prototype={
$0(){return this.a.r="Type what you want changed or added."},
$S:0}
C.f_h.prototype={
$0(){var w=this.a
w.e=!0
w.r=null
w.f="Making your changes\u2026"},
$S:0}
C.f_i.prototype={
$0(){var w=this.a
w.e=!1
w.r=this.b===D.aHD?"The text already fits inside its frame.":"The text is already at its limit."},
$S:0}
C.f_j.prototype={
$0(){var w=this.a
w.e=!1
w.r="Nothing to bring back. Changes are kept for 20 minutes."},
$S:0}
C.f_k.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.f_f(w,d))},
$S:2}
C.f_f.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.f_l.prototype={
$0(){var w=this.a
w.e=!1
w.r=B.w(this.b)},
$S:0}
C.f_m.prototype={
$0(){var w=this.b
if(A.a.cc(w,"\u2026"))w=A.a.ap(w,0,w.length-1)
this.a.d.bP(0,new B.bb(w,B.hi(A.bw,w.length),A.aO))},
$S:0}
C.fne.prototype={
$1(d){return d.a===this.a},
$S:227}
C.ehD.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=p.gaxO(),n=o.x
n===$&&B.c()
w=B.m(16)
v=p.a.c
u=v?D.cV9:D.db6
t=D.xP.j(v?1:0.55)
v=p.a.c
t=B.I(t,A.r,v?1.8:1.2)
s=D.xP.j(v?0.35+0.15*o.x:0.12)
v=B.a([new B.ac(0,A.G,s,A.J,p.a.c?16:8)],x.V)
s=B.m(15)
n=B.bU(0,B.b4(q,q,q,new C.bi3(n*6.283,q),A.ax),0,0,0)
o=o.x
o=B.bU(0,B.bQW(B.eI(A.A,0.5,B.p(q,q,A.f,q,q,new B.o(q,q,q,q,q,new B.a9(A.a3,A.a8,A.x,B.a([A.K,D.bf9.j(0.28),A.K],x.O),q,q),A.n),q,q,q,q,q,q,q,q),q),!0,new B.t(o*2.4-1.2,0)),0,0,0)
r=x.p
return B.p(q,B.bx(s,new B.an(A.a_,q,A.aa,A.t,B.a([n,o,B.at(B.x(B.a([B.X(p.a.c?A.eb:A.m5,D.xP,q,q,q,20),A.av,B.eQ(A.A,B.nW(A.jE,D.fsk,new C.ehC()),A.f,A.e0)],r),A.m,q,A.e,A.P,0,A.p),q,q,q),B.ao(q,B.p(q,D.foS,A.f,q,q,new B.o(D.xP,q,q,B.m(6),q,q,A.n),q,q,q,q,M.ak0,q,q,q),q,q,q,4,4,q)],r),q),A.aq),A.f,q,q,new B.o(q,q,t,w,v,new B.a9(A.ay,A.aD,A.x,u,q,q),A.n),q,64,q,q,q,q,q,q)},
$S:94}
C.ehC.prototype={
$1(d){return D.c0_.aA(0,d)},
$S:65}
C.fIv.prototype={
$1(d){return d.a===this.a},
$S:z+6}
C.fIw.prototype={
$1(d){var w=d.a
return A.a.i(w).length!==0&&w!==d.b},
$S:227}
C.fIx.prototype={
$2(d,e){return A.o.aL(e.a.length,d.a.length)},
$S:1688}
C.fIy.prototype={
$1(d){var w,v,u,t,s,r,q,p
for(w=this.a,v=w.length,u=d,t=0;t<w.length;w.length===v||(0,B.M)(w),++t){s=w[t]
r=s.a
q=s.b
u=B.aL(u,r,q)
p=r.toUpperCase()
if(p!==r)u=B.aL(u,p,q.toUpperCase())}return u},
$S:14}
C.fIr.prototype={
$1(d){return d.a},
$S:z+18}
C.fIs.prototype={
$1(d){return d.b},
$S:z+19}
C.fQN.prototype={
$1(d){return new C.ZY(this.a,this.b,null)},
$S:z+44}
C.dmh.prototype={
$0(){var w=this.a
w.f=!0
w.r=null},
$S:0}
C.dmi.prototype={
$1(d){return d.a===this.a.gaiN()},
$S:z+10}
C.dmj.prototype={
$0(){var w=this.a
w.f=!1
w.r=J.k(this.b)},
$S:0}
C.dmm.prototype={
$0(){B.a3(this.a,!1).N(null)
return null},
$S:0}
C.dmn.prototype={
$0(){var w=this.a
return w.m(new C.dml(w,this.b))},
$S:0}
C.dml.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.dmo.prototype={
$1(d){var w=this.a
return w.m(new C.dmk(w,d))},
$S:8}
C.dmk.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.ehB.prototype={
$1$2(d,e,f){var w=B.bo(d,!0,f)
A.d.dO(w,this.a)
return B.d1(w,0,B.dB(e,"count",x.S),B.S(w).c).dm(0)},
$2(d,e){return this.$1$2(d,e,x.z)},
$S:1689}
C.fcR.prototype={
$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,n,o,p){return C.er(A.bi,!1,4279310375,A.aF,"",i,24,A.bp,A.a7,"",h,this.a.$0(),null,k,j,0,!1,"",n,d,o,p,"",m,0,"",l,D.f8,g,e,f)},
$8(d,e,f,g,h,i,j,k){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,D.cl,0,0,0,0)},
$12$anim$delay$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,n,o){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,0,n,o)},
$10$anim$delay(d,e,f,g,h,i,j,k,l,m){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,0,0,0)},
$S:z+45}
C.fcT.prototype={
$9(d,e,f,g,h,i,j,k,l){return C.er(A.L,!1,this.b.d,A.aF,"",4280640491,i,A.bp,A.cO,"",h,this.a.$0(),null,k,j,0,!1,"",0,D.bg,4280172719,2,d,l,0,"",D.mS,D.cQ,g,e,f)},
$S:z+46}
C.fcS.prototype={
$5$size(d,e,f,g,h){var w,v=this,u=v.b,t=u.c
u=u.wF(0,"twinkle")
w=t===D.bg?0.785:0
return v.a.$13$anim$delay$rotation$stroke$strokeWidth(t,d-h/2,e-h*0.89,h,h*1.78,v.c,f,u,D.mS,g,w,v.d.d,1.2)},
$4(d,e,f,g){return this.$5$size(d,e,f,g,0.022)},
$S:z+47}
C.fcQ.prototype={
$1(d){var w=d.fx
return w==="sub"||w==="body"},
$S:z+4}
C.fBR.prototype={
$1(d){return d.a===this.a},
$S:z+11}
C.fBS.prototype={
$0(){return A.d.gI(D.Hq)},
$S:z+49}
C.fBT.prototype={
$1(d){return d.a===this.a},
$S:z+11}
C.feQ.prototype={
$1(d){return!(A.a.a0(d.db,"__design__")||A.a.a0(d.a,"design_"))},
$S:z+4}
C.fHY.prototype={
$1(d){var w=2450411,v=4281908728
C.dy(d,C.dz(4280171146,1,0,D.bg,w,0,0.52,0,0))
C.dy(d,C.dz(v,1,0,D.bg,w,0,0.04,0.48,0))
C.dy(d,C.dz(4294047225,0.38,0,D.bg,w,0,0.48,0.52,0.62))
C.dy(d,C.dz(v,0.006,0,D.fy,v,3,0.32,0.08,0.14))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fHZ.prototype={
$1(d){var w=2450411,v=4280640491,u=4291548641
C.dy(d,C.dz(4280172719,0.8,0,D.bg,w,0,0.36,0.58,0.1))
C.dy(d,C.dz(v,0.64,0,D.bg,w,0,0.28,0.64,0.18))
C.dy(d,C.dz(4282090230,0.44,0,D.bg,w,0,0.2,0.7,0.28))
C.dy(d,C.dz(v,0.006,0,D.fy,v,3,0.22,0.08,0.12))
C.dy(d,C.dz(u,0.004,0,D.fy,u,2,0.38,0.08,0.18))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fI_.prototype={
$1(d){var w=2450411,v=4279548070
C.dy(d,C.dz(4279080072,0.11,0,D.bg,w,0,1,0,0))
C.dy(d,C.dz(4279310375,0.11,0,D.bg,w,0,1,0,0.89))
C.dy(d,C.dz(856528008,0.72,0,D.jY,w,0,0.28,0.72,0.14))
C.dy(d,C.dz(1426953352,0.2,0,D.jY,w,0,0.2,0.78,0.22))
C.dy(d,C.dz(v,0.004,0,D.fy,v,2,1,0,0.105))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fIa.prototype={
$1(d){var w=2450411
C.dy(d,C.dz(4279203438,0.55,0,D.jY,w,0,0.5,0.55,-0.05))
C.dy(d,C.dz(4280171146,0.5,0,D.jY,w,0,0.45,0.62,0.35))
C.dy(d,C.dz(4280640491,0.4,0.3,D.jX,w,0,0.35,0.68,0.55))
C.dy(d,C.dz(571438702,0.12,0,D.bg,w,0,0.12,0.08,0.08))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fIf.prototype={
$1(d){var w=4280472558
C.dy(d,C.dz(4279310375,0.75,-0.4,D.jX,2450411,0,0.75,-0.15,0.35))
C.dy(d,C.dz(w,0.55,0,D.bg,2450411,0,0.06,0.42,0.38))
C.dy(d,C.dz(w,0.006,0,D.fy,w,3,0.35,0.08,0.08))
C.dy(d,C.dz(2282478,0.12,0,D.bg,w,2,0.2,0.75,0.82))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fIg.prototype={
$1(d){var w=2450411,v=4280640491
C.dy(d,C.dz(3423541034,0.48,0,D.bg,w,0,1,0,0))
C.dy(d,C.dz(v,0.12,-0.08,D.jY,w,0,1.1,-0.05,0.38))
C.dy(d,C.dz(858088427,0.35,0,D.bg,w,0,0.42,0.55,0.05))
C.dy(d,C.dz(v,0.006,0,D.fy,v,3,0.25,0.08,0.52))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fIh.prototype={
$1(d){var w,v,u,t,s=4280171146
for(w=0;w<4;++w){v=D.cU5[w]
u=Date.now()
t=$.j3
$.j3=t+1
v=new C.eM("design_"+(""+1000*u+"_"+t),D.f8,0.04+w*0.235,0.72,0.21,0.22,"",24,A.a7,A.bp,A.aF,4279310375,A.bi,null,D.bg,v,4294967295,2,0,!1,"",0,D.cl,0,"","","","","",!1,0)
u=$.KD
v.db="__design__:"+(u.length===0?"layer":u)
A.d.c8(d.z,0,v)}C.dy(d,C.dz(s,0.006,0,D.fy,s,3,0.3,0.04,0.08))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fIi.prototype={
$1(d){var w,v,u,t,s=4280172719
for(w=0;w<4;++w){v=B.ar(A.mw,A.dt,w/3).l()
u=Date.now()
t=$.j3
$.j3=t+1
v=new C.eM("design_"+(""+1000*u+"_"+t),D.f8,0.58+w*0.08,0.15+w*0.05,0.32,0.7,"",24,A.a7,A.bp,A.aF,4279310375,A.bi,null,D.Db,v,2450411,0,0,!1,"",0,D.cl,0,"","","","","",!1,0)
u=$.KD
v.db="__design__:"+(u.length===0?"layer":u)
A.d.c8(d.z,0,v)}C.dy(d,C.dz(s,0.006,0,D.fy,s,3,0.4,0.06,0.1))
d.e=4294967295
d.f=4292602622},
$S:z+1}
C.fIj.prototype={
$1(d){var w=4294967295
C.dy(d,C.dz(4280640491,1,0,D.bg,2450411,0,0.42,0,0))
C.dy(d,C.dz(4280110808,1.1,1.57,D.jX,2450411,0,0.18,0.35,-0.05))
C.dy(d,C.dz(w,0.006,0,D.fy,w,2,0.25,0.08,0.85))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fIk.prototype={
$1(d){var w=4278982953,v=2450411,u=4282090230
C.dy(d,C.dz(w,0.1,0,D.bg,v,0,1,0,0))
C.dy(d,C.dz(u,0.012,0,D.bg,v,0,1,0,0.1))
C.dy(d,C.dz(u,0.006,0,D.fy,u,3,0.42,0.06,0.14))
C.dy(d,C.dz(403446057,0.68,0,D.jY,v,0,0.22,0.72,0.18))
C.dy(d,C.dz(w,0.1,0,D.bg,v,0,1,0,0.9))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fIl.prototype={
$1(d){var w=4278630100
C.dy(d,C.dz(4279310375,1.2,0.15,D.jY,2450411,0,0.55,-0.2,-0.1))
C.dy(d,C.dz(w,1.1,0.15,D.bg,2450411,0,0.08,0.15,-0.05))
C.dy(d,C.dz(1120295,0.18,0,D.bg,w,3,0.38,0.55,0.75))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fI0.prototype={
$1(d){var w=4292617766
C.dy(d,C.dz(4282714634,0.65,-0.2,D.jX,2450411,0,0.65,-0.1,0.45))
C.dy(d,C.dz(w,0.5,-0.15,D.jX,2450411,0,0.5,0.05,0.55))
C.dy(d,C.dz(w,0.006,0,D.fy,w,3,0.38,0.55,0.08))
d.e=4294967295
d.f=4294898418},
$S:z+1}
C.fI1.prototype={
$1(d){var w=2450411
C.dy(d,C.dz(4278413729,0.35,3.14,D.jX,w,0,0.45,-0.05,0.7))
C.dy(d,C.dz(4278355143,0.3,3.14,D.jX,w,0,0.4,0.25,0.75))
C.dy(d,C.dz(4279150057,0.32,3.14,D.jX,w,0,0.5,0.55,0.72))
C.dy(d,C.dz(863884284,0.22,0,D.eQ,w,0,0.22,0.08,0.12))
d.e=4293982719
d.f=4294967295},
$S:z+1}
C.fI2.prototype={
$1(d){var w=4279310375,v=2450411,u=4280472558
C.dy(d,C.dz(w,0.14,0,D.bg,v,0,0.14,0.02,0.02))
C.dy(d,C.dz(2282478,0.14,0,D.bg,u,3,0.14,0.84,0.02))
C.dy(d,C.dz(w,0.28,0,D.jY,v,0,0.35,-0.08,0.78))
C.dy(d,C.dz(u,0.22,0.5,D.jX,v,0,0.3,0.72,0.78))
C.dy(d,C.dz(w,0.006,0,D.fy,w,3,0.2,0.08,0.22))
d.e=4294967295
d.f=null},
$S:z+1}
C.fI3.prototype={
$1(d){var w=4293571336,v=1156231944
C.dy(d,C.dz(1841431,0.92,0,D.bg,w,3,0.92,0.04,0.04))
C.dy(d,C.dz(v,0.15,0,D.jX,2450411,0,0.15,0.02,0.02))
C.dy(d,C.dz(v,0.15,3.14,D.jX,2450411,0,0.15,0.83,0.83))
C.dy(d,C.dz(w,0.004,0,D.fy,w,2,0.7,0.15,0.88))
d.e=4280031511
d.f=4282523654},
$S:z+1}
C.fI4.prototype={
$1(d){var w=4279080072,v=2450411
C.dy(d,C.dz(w,0.14,0,D.lg,v,0,0.14,0.68,0.18))
C.dy(d,C.dz(4279548070,0.14,0,D.lg,v,0,0.14,0.78,0.28))
C.dy(d,C.dz(4281193663,0.14,0,D.lg,v,0,0.14,0.68,0.38))
C.dy(d,C.dz(4284410580,0.14,0,D.lg,v,0,0.14,0.78,0.48))
C.dy(d,C.dz(4279203438,0.14,0,D.lg,v,0,0.14,0.68,0.58))
C.dy(d,C.dz(w,0.006,0,D.fy,w,3,0.22,0.06,0.1))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fI5.prototype={
$1(d){var w=2450411,v=4280640491
C.dy(d,C.dz(3708753706,0.42,0,D.bg,w,0,1,0,0))
C.dy(d,C.dz(v,0.06,-0.05,D.jY,w,0,1,0,0.38))
C.dy(d,C.dz(859356664,0.25,0,D.eQ,w,0,0.25,0.7,0.08))
C.dy(d,C.dz(v,0.006,0,D.fy,v,3,0.3,0.08,0.48))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fI6.prototype={
$1(d){var w,v,u,t,s=4280640491
for(w=0;w<4;++w){v=B.ar(A.mw,A.dt,w/3).l()
u=Date.now()
t=$.j3
$.j3=t+1
v=new C.eM("design_"+(""+1000*u+"_"+t),D.f8,0.06+w*0.23,0.78,0.2,0.14,"",24,A.a7,A.bp,A.aF,4279310375,A.bi,null,D.Db,v,2450411,0,0,!1,"",0,D.cl,0,"","","","","",!1,0)
u=$.KD
v.db="__design__:"+(u.length===0?"layer":u)
A.d.c8(d.z,0,v)}C.dy(d,C.dz(4280172719,0.08,0,D.bg,2450411,0,1,0,0))
C.dy(d,C.dz(s,0.006,0,D.fy,s,3,0.35,0.06,0.14))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fI7.prototype={
$1(d){var w,v,u,t=4291548641,s=4279310375
for(w=1;w<6;++w){v=Date.now()
u=$.j3
$.j3=u+1
u=new C.eM("design_"+(""+1000*v+"_"+u),D.f8,0.08,0.15+w*0.12,0.55,0.002,"",24,A.a7,A.bp,A.aF,s,A.bi,null,D.fy,t,t,0,0,!1,"",0,D.cl,0,"","","","","",!1,0)
v=$.KD
u.db="__design__:"+(v.length===0?"layer":v)
A.d.c8(d.z,0,u)}C.dy(d,C.dz(s,0.75,0,D.bg,2450411,0,0.22,0.72,0.1))
C.dy(d,C.dz(872415231,0.16,0,D.bg,2450411,0,0.16,0.75,0.15))
C.dy(d,C.dz(s,0.006,0,D.fy,s,3,0.2,0.08,0.1))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fI8.prototype={
$1(d){var w=4282865001,v=2450411,u=4284773515
C.dy(d,C.dz(4674921,0.9,0,D.bg,4287931320,2,0.9,0.05,0.05))
C.dy(d,C.dz(w,0.08,0,D.bg,v,0,0.08,0.03,0.03))
C.dy(d,C.dz(u,0.08,0,D.bg,v,0,0.08,0.89,0.03))
C.dy(d,C.dz(u,0.08,0,D.bg,v,0,0.08,0.03,0.89))
C.dy(d,C.dz(w,0.08,0,D.bg,v,0,0.08,0.89,0.89))
C.dy(d,C.dz(w,0.004,0,D.fy,w,2,0.25,0.12,0.12))
d.e=4294507260
d.f=4293060848},
$S:z+1}
C.fI9.prototype={
$1(d){var w,v,u,t,s,r=4279310375,q=2450411
for(w=0;w<3;++w){v=w*0.24
u=Date.now()
t=$.j3
$.j3=t+1
t=new C.eM("design_"+(""+1000*u+"_"+t),D.f8,0.55,0.14+v,0.38,0.18,"",24,A.a7,A.bp,A.aF,r,A.bi,null,D.bg,4294967295,4280640491,2,0,!1,"",0,D.cl,0,"","","","","",!1,0)
u=$.KD
t.db="__design__:"+(u.length===0?"layer":u)
A.d.c8(d.z,0,t)
u=B.ar(A.d8,A.co,w/2).l()
t=Date.now()
s=$.j3
$.j3=s+1
u=new C.eM("design_"+(""+1000*t+"_"+s),D.f8,0.57,0.16+v,0.06,0.14,"",24,A.a7,A.bp,A.aF,r,A.bi,null,D.bg,u,q,0,0,!1,"",0,D.cl,0,"","","","","",!1,0)
v=$.KD
u.db="__design__:"+(v.length===0?"layer":v)
A.d.c8(d.z,0,u)}C.dy(d,C.dz(4280171146,1,0,D.bg,q,0,0.48,0,0))
C.dy(d,C.dz(4280172719,1.1,1.57,D.jX,q,0,0.12,0.42,-0.05))
d.e=4294967295
d.f=4292602622},
$S:z+1}
C.fIb.prototype={
$1(d){var w=2450411
C.dy(d,C.dz(870995980,0.55,0.45,D.jY,w,0,0.55,-0.12,-0.08))
C.dy(d,C.dz(856996006,0.45,0.45,D.jY,w,0,0.45,0.62,-0.05))
C.dy(d,C.dz(16777215,0.38,0.45,D.jY,4293548044,5,0.38,0.52,0.12))
C.dy(d,C.dz(585783308,0.3,0.45,D.jY,w,0,0.3,0.56,0.16))
C.dy(d,C.dz(4279548070,0.06,0,D.bg,w,0,0.16,0.38,0.04))
C.dy(d,C.dz(1156208652,0.28,0,D.eQ,w,0,0.28,0.66,0.52))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fIc.prototype={
$1(d){var w=4279080072,v=2450411,u=4294047225,t=4291548641,s=4293548044
C.dy(d,C.dz(w,1,0,D.bg,v,0,0.07,0,0))
C.dy(d,C.dz(u,0.1,0,D.bg,t,1,0.46,0.48,0.14))
C.dy(d,C.dz(u,0.1,0,D.bg,t,1,0.46,0.48,0.28))
C.dy(d,C.dz(u,0.1,0,D.bg,t,1,0.46,0.48,0.42))
C.dy(d,C.dz(s,0.08,0,D.eQ,v,0,0.08,0.5,0.16))
C.dy(d,C.dz(w,0.08,0,D.eQ,v,0,0.08,0.5,0.3))
C.dy(d,C.dz(4279548070,0.08,0,D.eQ,v,0,0.08,0.5,0.44))
C.dy(d,C.dz(16777215,0.32,0.45,D.jY,s,4,0.32,0.1,0.18))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fId.prototype={
$1(d){var w,v,u,t=4279548070,s=4293548044,r=4279179050
C.dy(d,C.dz(4294047225,0.08,0,D.bg,t,2,0.1,0.02,0.06))
C.dy(d,C.dz(s,0.42,0,D.bg,2450411,0,0.36,0.58,0.18))
C.dy(d,C.dz(872415231,0.12,0,D.bg,2450411,0,0.28,0.62,0.24))
C.dy(d,C.dz(16777215,0.28,0,D.eQ,s,4,0.32,0,0.72))
C.dy(d,C.dz(r,0.006,0,D.fy,r,3,0.42,0.08,0.22))
for(w=0;w<3;++w){v=Date.now()
u=$.j3
$.j3=u+1
u=new C.eM("design_"+(""+1000*v+"_"+u),D.f8,0.08,0.58+w*0.1,0.04,0.04,"",24,A.a7,A.bp,A.aF,4279310375,A.bi,null,D.eQ,16777215,t,2,0,!1,"",0,D.cl,0,"","","","","",!1,0)
v=$.KD
u.db="__design__:"+(v.length===0?"layer":v)
A.d.c8(d.z,0,u)}d.e=4294967295
d.f=4294965229},
$S:z+1}
C.fIe.prototype={
$1(d){var w=2450411,v=4279548070
C.dy(d,C.dz(3423541034,0.55,0,D.bg,w,0,1,0,0))
C.dy(d,C.dz(4009754623,0.56,0.45,D.jY,w,0,0.56,0.22,0.18))
C.dy(d,C.dz(3439329279,0.44,0.45,D.jY,w,0,0.44,0.28,0.24))
C.dy(d,C.dz(v,0.07,0,D.bg,w,0,0.22,0.34,0.62))
C.dy(d,C.dz(v,1,0,D.bg,w,0,0.07,0,0))
d.e=4280166715
d.f=4279179050},
$S:z+1}
C.fzH.prototype={
$1(d){return d.a===this.a},
$S:z+20}
C.fzI.prototype={
$0(){return A.d.gI($.bEi())},
$S:z+52}
C.fmN.prototype={
$1(d){var w=A.a.i(d)
if(w.length===0)return""
return A.a.a0(w,"\u2022")?w:"\u2022 "+w},
$S:14}
C.fmM.prototype={
$1(d){return C.hYz(d,this.a,this.b)},
$S:z+53}
C.fIE.prototype={
$1(d){var w=this,v=w.a,u=w.b,t=B.vT(1.0375,1.01875,1)
return new B.fR(v,u,new C.aT_(B.hOd(A.vo,C.hYC(w.c,w.d,v,u),t)))},
$S:399}
C.dWX.prototype={
$1(d){var w=d.a/1e6
this.a.d.sp(0,w)
return w},
$S:9}
C.dWW.prototype={
$2(d,e){var w=null,v=Math.min(e.b,e.d),u=this.b,t=B.c1(w,new B.o(w,w,w,w,w,new B.c0(A.Kw,1.2,A.x,w,0,u.d,w,w),A.n),A.bf),s=this.a,r=s.d,q=s.a.d?0.45:1
return B.jD(new B.an(A.a_,w,A.b1,A.t,B.a([t,new B.eG(B.b4(w,w,w,new C.beX(u.a,r,q,r),A.ax),w),B.at(new B.jO(r,new C.dWV(s,v,this.c,u),w,w,x.cl),w,w,w)],x.p),w),A.t,w)},
$S:473}
C.dWV.prototype={
$3(d,e,f){var w,v,u,t,s=this,r=null,q=A.ew.aw(0,A.k.E(e/1.4,0,1)),p=A.k.E(e/0.9,0,1),o=A.k.E((e-0.8)/0.9,0,1),n=Math.sin(e*1.6),m=s.b,l=m*0.08,k=x.p,j=B.a([],k),i=s.c
if(i!=null){w=m*0.22
v=m*0.008
u=s.d.e
t=B.C(u,x.bz)
t.push(A.d.gI(u))
u=B.a([new B.ac(0,A.G,u[1].j(0.55),A.J,l)],x.V)
A.d.v(j,B.a([B.p(r,B.hT(B.fO(i,A.A,r,r,A.cf,A.bW,!0,r,!1,r,r),A.aq),A.f,r,r,new B.o(r,r,r,r,u,new B.fX(A.A,0,6.283185307179586,A.x,t,r,new B.mw(e*0.8)),A.a5),r,w,r,r,new B.Q(v,v,v,v),r,r,w),new B.a7(r,m*0.04,r,r)],k))}i=s.d.e
w=s.a
v=A.a.i(w.a.c.b)
u=v.length
if(u===0)v="NGMY"
u=u>12?0.1:0.17
t=m*0.05
j.push(new C.brq(i,e,B.d(v,r,r,r,r,r,r,B.l(r,r,A.c,r,r,r,r,r,r,r,r,m*u,r,r,A.u,r,1.05,!0,r,m*0.012,r,r,r,B.a([new B.cS(i[1].j(0.6),A.J,t)],x.r),r,r),A.L,r,r),r))
j.push(new B.a7(r,m*0.025,r,r))
u=Math.max(1.5,m*0.004)
j.push(B.d6(B.dJ(B.x(B.a([B.p(r,r,A.f,r,r,new B.o(r,r,r,r,r,new B.a9(A.a3,A.a8,A.x,B.a([A.K,i[1],A.K],x.O),r,r),A.n),r,u,r,r,r,r,r,m*0.22),new B.a7(r,m*0.022,r,r),B.d(w.a.c.gaLf(),r,r,r,r,r,r,B.l(r,r,A.c.j(0.92),r,r,r,r,r,r,r,r,t,r,r,A.a7,r,r,!0,r,m*0.003,r,r,r,r,r,r),A.L,r,r)],k),A.m,r,A.e,A.P,0,A.p),new B.t(0,(1-o)*m*0.03)),o))
return B.d6(B.ea(A.A,new B.D(new B.Q(l,0,l,0),B.x(j,A.m,r,A.e,A.P,0,A.p),r),(0.6+0.4*q)*(1+n*0.012),r,r),p)},
$S:100}
C.eZu.prototype={
$1(d){var w=this.b
return new B.a9(A.ay,A.aD,A.x,this.a.c,B.a([0,A.k.E(w-0.1,0,1),A.k.E(w,0,1),A.k.E(w+0.1,0,1),1],x.x),null).aA(0,d)},
$S:65}
C.cbw.prototype={
$4$child$label$onTap$selected(d,e,f,g){var w,v=null,u=B.m(14),t=g?A.bM:A.bz
t=B.I(t,A.r,g?2.5:1)
w=g?B.a([new B.ac(0,A.G,A.hP.j(0.4),A.J,14)],x.V):v
w=B.d9(v,B.bx(B.m(12),d,A.aq),v,v,A.b7,new B.o(v,v,t,u,w,v,A.n),A.eM,v,72,v,v,v,v,v)
return B.aB(v,new B.a7(112,v,B.x(B.a([w,A.fM,B.d(e,v,1,A.a2,v,v,v,B.l(v,v,g?A.bM:A.ae,v,v,v,v,v,v,v,v,11,v,v,A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.j,0,A.p),v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,f,v,v,v,v,v,v,!1,A.a4)},
$S:1690}
C.cbx.prototype={
$0(){var w=this.a
return w.d.$1(w.c.FK(""))},
$S:0}
C.cby.prototype={
$1(d){var w=this.a,v=w.c,u=d.a
return this.b.$4$child$label$onTap$selected(B.e2(new C.NF(v.FK(u),!0,!1,null),!0,null),d.b,new C.cbz(w,this.c,d),v.a===u)},
$S:z+54}
C.cbz.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(C.hso(u.b,t.c.FK(u.c.a)),$async$$0)
case 2:s=e
if(s!=null)t.d.$1(s)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fPc.prototype={
$1(d){return new C.Zv(this.a,null)},
$S:z+55}
C.dbz.prototype={
$0(){var w=this.a
w.d=w.gvL().bc6("data:"+this.b+";base64,"+A.cI.gcs().aM(this.c));++w.r},
$S:0}
C.dbE.prototype={
$0(){B.a3(this.a,!1).N(null)
return null},
$S:0}
C.dbF.prototype={
$0(){var w=this.a
return w.m(new C.dbD(w))},
$S:0}
C.dbD.prototype={
$0(){return this.a.r++},
$S:0}
C.dbG.prototype={
$1(d){var w=this.a
return w.m(new C.dbC(w,d))},
$S:2}
C.dbC.prototype={
$0(){var w=this.a
return w.d=w.gvL().aEc(this.b)},
$S:0}
C.dbH.prototype={
$0(){var w=this.a
return w.m(new C.dbB(w))},
$S:0}
C.dbB.prototype={
$0(){var w=this.a
return w.d=w.gvL().bc6("")},
$S:0}
C.dbI.prototype={
$1(d){var w=this.a
return w.m(new C.dbA(w,d))},
$S:2}
C.dbA.prototype={
$0(){var w=this.a
return w.d=w.gvL().bcd(this.b)},
$S:0}
C.dbJ.prototype={
$0(){var w=this.a
w=w.gvL().bcd(w.gaxP().a.a)
B.a3(this.b,!1).N(w)
return null},
$S:0}
C.fPb.prototype={
$1(d){var w={}
w.a=this.a
return new B.dY(new C.fPa(w),null)},
$S:19}
C.fPa.prototype={
$2(d,e){var w=null,v=this.a
return B.p(w,B.bm(!0,new B.cT(new B.aY(0,1/0,0,B.aH(d,A.bX,x.w).w.a.b*0.85),B.cd(B.x(B.a([B.at(B.p(w,w,A.f,w,w,new B.o(A.aZ,w,w,B.m(9),w,w,A.n),w,4,w,w,w,w,w,40),w,w,w),A.aA,D.fGT,A.av,D.fH8,A.aA,new C.b_n(v.a,new C.fP9(v,e,d),!0,w)],x.p),A.E,w,A.e,A.P,0,A.p),A.t,w,A.y,w,w,w,w,A.ag),w),!0,!1,A.af,!0,!1),A.f,w,w,D.b39,w,w,w,w,A.MZ,w,w,w)},
$S:168}
C.fP9.prototype={
$1(d){this.b.$1(new C.fP8(this.a,d))
B.a3(this.c,!1).N(d)},
$S:z+56}
C.fP8.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.fRy.prototype={
$1(d){return D.hbP},
$S:z+57}
C.dik.prototype={
$0(){B.a3(this.a,!1).N(null)
return null},
$S:0}
C.dil.prototype={
$0(){var w=this.a.c
w.toString
B.a3(w,!1).N(this.b)
return null},
$S:0}
C.dim.prototype={
$0(){var w=this.a,v=A.a.i(w.d.a.a)
if(v.length!==0){w=w.c
w.toString
B.a3(w,!1).N(v)}},
$S:0}
C.fFi.prototype={
$1(d){var w=this.b
return new B.a9(A.ay,A.aD,A.x,B.a([A.K,B.ar(this.a,A.c,0.75).j(0.9),A.K],x.O),B.a([A.k.E(w-0.12,0,1),A.k.E(w,0,1),A.k.E(w+0.12,0,1)],x.x),null).aA(0,d)},
$S:65}
C.dbg.prototype={
$3(d,e,f){var w,v=this,u=new B.aI($.V().r,A.ai,null,null,B.a([],x.v)),t=d.a,s=v.b,r=e*s,q=d.b,p=f*s,o=q+p*0.12
u.D(new B.b0(t+r*1.2,o))
u.D(new B.c8(t+r*0.25,o,t+r*0.18,q+p*0.5))
w=t+r*0.12
u.D(new B.c8(w,q+p,w,q+p*1.2))
u.D(new B.Dg(B.bX(new B.t(t+r*0.42,q+p*0.42),s*0.14),0,5.026548245743669))
s=v.c
s.aJ(u,v.d)
s.aJ(u,v.e)
p=B.K()
p.r=B.ar(v.a.d,A.c,0.6).gp(0)
s.ae(new B.t(w,o),2.2,p)},
$S:445}
C.fFm.prototype={
$2(d,e){return A.k.aL(d.c,e.c)},
$S:z+58}
C.fxI.prototype={
$1(d){return d.w==="marriage_agreement"},
$S:z+2}
C.fxJ.prototype={
$1(d){var w=null,v=this.a
return B.bm(!0,new B.D(E.yd,B.x(B.a([B.at(B.p(w,w,A.f,w,w,new B.o(A.aZ,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bv,D.fp9,A.N,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aL,B.dq(D.GY,B.d('Endelea na "'+A.d.gI(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fxG(d),B.bp(A.c_,w,w,w,A.c,w,A.cj,w,w,w,w,w)),A.R,B.es(A.og,D.UB,new C.fxH(d),B.dg(w,w,w,w,w,w,w,w,w,A.ae,w,w,A.cj,w,w,Q.xh,w,w,w,w))],x.p),A.aj,w,A.e,A.P,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:26}
C.fxG.prototype={
$0(){B.a3(this.a,!1).N("continue")
return null},
$S:0}
C.fxH.prototype={
$0(){B.a3(this.a,!1).N("new")
return null},
$S:0}
C.cgX.prototype={
$1(d){return d.hI()},
$S:z+59}
C.cgY.prototype={
$1(d){return d.ag()},
$S:z+60}
C.cgW.prototype={
$1(b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=null,b2=B.a2(b5,x.N,x.z),b3=B.aK(b2.h(0,"fontWeight")),b4=b3==null?b1:A.k.O(b3)
if(b4==null)b4=A.a7.gdN(0)
b3=B.aK(b2.h(0,"fontStyle"))
w=b3==null?b1:A.k.O(b3)
if(w==null)w=0
b3=B.aK(b2.h(0,"align"))
v=b3==null?b1:A.k.O(b3)
if(v==null)v=0
b3=b2.h(0,"id")
b3=J.k(b3==null?"":b3)
u=C.hUk(b2.h(0,"type"))
t=B.aK(b2.h(0,"x"))
if(t==null)t=b1
if(t==null)t=0.08
s=B.aK(b2.h(0,"y"))
if(s==null)s=b1
if(s==null)s=0.12
r=B.aK(b2.h(0,"w"))
if(r==null)r=b1
if(r==null)r=0.84
q=B.aK(b2.h(0,"h"))
if(q==null)q=b1
if(q==null)q=0.2
p=b2.h(0,"text")
p=J.k(p==null?"":p)
o=B.aK(b2.h(0,"fontSize"))
if(o==null)o=b1
if(o==null)o=24
n=A.azR[A.o.E(b4,0,8)]
m=D.cX6[A.o.E(w,0,1)]
l=C.hY0(b2.h(0,"decoration"))
k=B.aK(b2.h(0,"color"))
k=k==null?b1:A.k.O(k)
if(k==null)k=4279310375
j=A.aws[A.o.E(v,0,5)]
i=b2.h(0,"imageRef")
i=i==null?b1:J.k(i)
h=C.i_S(b2.h(0,"shape"))
g=B.aK(b2.h(0,"fillColor"))
g=g==null?b1:A.k.O(g)
if(g==null)g=4280640491
f=B.aK(b2.h(0,"strokeColor"))
f=f==null?b1:A.k.O(f)
if(f==null)f=4280172719
e=B.aK(b2.h(0,"strokeWidth"))
if(e==null)e=b1
if(e==null)e=2
d=B.aK(b2.h(0,"rotation"))
if(d==null)d=b1
if(d==null)d=0
a0=J.A(b2.h(0,"bulletList"),!0)
a1=b2.h(0,"fileName")
a1=J.k(a1==null?"":a1)
a2=B.aK(b2.h(0,"pdfPage"))
a2=a2==null?b1:A.k.O(a2)
if(a2==null)a2=0
a3=C.hnz(b2.h(0,"textTransition"))
a4=B.aK(b2.h(0,"textAnimDelayMs"))
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
b0=J.A(b2.h(0,"rich"),!0)
b2=B.aK(b2.h(0,"textBg"))
b2=b2==null?b1:A.k.O(b2)
return C.er(j,a0,k,l,a1,g,o,m,n,a7,q,b3,i,a6,a5,a2,b0,a8,d,h,f,e,p,a4,b2==null?0:b2,a9,a3,u,r,t,s)},
$S:z+61}
C.cgM.prototype={
$1(d){return d.hI()},
$S:z+62}
C.cgN.prototype={
$1(d){return d.ag()},
$S:z+63}
C.cgJ.prototype={
$1(d){return B.w(d)},
$S:17}
C.cgK.prototype={
$1(d){return B.w(d)},
$S:17}
C.cgL.prototype={
$1(d){return C.heb(B.a2(d,x.N,x.z))},
$S:z+64}
C.chd.prototype={
$1(d){return d.a===this.a},
$S:z+65}
C.che.prototype={
$0(){return A.d.gI(D.a3r)},
$S:z+66}
C.ch8.prototype={
$1(d){var w,v,u=d.a
if(A.a.i(u).length===0)return
w=this.a
v=w.h(0,u)
if(v==null||!v.f.cd(d.f))w.n(0,u,d.hI())},
$S:z+7}
C.ch7.prototype={
$2(d,e){return e.f.aL(0,d.f)},
$S:z+21}
C.ch3.prototype={
$1(d){return new B.N(d,new C.ch4(),B.S(d).k("N<1,U>")).f9(0,new C.ch5())},
$S:z+69}
C.ch4.prototype={
$1(d){return d.f},
$S:z+70}
C.ch5.prototype={
$2(d,e){return d.cd(e)?d:e},
$S:671}
C.ch6.prototype={
$1(d){if(d==null||A.a.i(d).length===0)return B.a([],x.D)
return C.hK2(d)},
$S:z+71}
C.ch9.prototype={
$1(d){return!this.a.q(0,d.a)},
$S:z+2}
C.cha.prototype={
$2(d,e){return e.f.aL(0,d.f)},
$S:z+21}
C.chb.prototype={
$1(d){return d.ag()},
$S:z+14}
C.fFV.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this
for(w=i.a.z,v=w.length,u=i.c,t=i.d,s=i.b,r=0;r<w.length;w.length===v||(0,B.M)(w),++r){q=w[r]
p=q.a
if(s.ai(0,p))continue
for(o=u.z,n=o.length,m=q.b,l=0;l<o.length;o.length===n||(0,B.M)(o),++l){k=o[l]
j=k.a
if(t.q(0,j)||k.b!==m)continue
if(d.$2(k,q)){s.n(0,p,k)
t.M(0,j)
break}}}},
$S:z+73}
C.fFR.prototype={
$2(d,e){var w=d.fx
return w.length!==0&&w===e.fx},
$S:z+8}
C.fFS.prototype={
$2(d,e){var w=d.at
return(w==null?"":w).length!==0&&w==e.at},
$S:z+8}
C.fFT.prototype={
$2(d,e){var w
if(d.b===D.cQ){w=A.a.i(d.r)
w=w.length!==0&&w===A.a.i(e.r)}else w=!1
return w},
$S:z+8}
C.fFU.prototype={
$2(d,e){return d.b===D.f8&&d.ax===e.ax&&d.fx.length===0&&e.fx.length===0},
$S:z+8}
C.cgS.prototype={
$2(b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=null,a9=b7.b,b0=a9/960,b1=this.a,b2=b1.c,b3=b1.d,b4=C.i8G(b2,b3),b5=B.a6(b4).k("bc<2>")
b5=B.cF(new B.bc(b4,b5),new C.cgR(),b5.k("J.E"),x.N)
w=B.de(b5,B.a6(b5).k("J.E"))
b1=b1.e
v=A.pY.aw(0,A.k.E(b1,0,1))
u=new C.cgT()
b5=B.ar(u.$2(b2,!1),u.$2(b3,!1),v)
b5.toString
t=B.ar(u.$2(b2,!0),u.$2(b3,!0),v)
t.toString
s=new C.cgU(a9,b7.d)
r=new C.cgV(b0)
q=x.p
p=B.a([],q)
for(b2=b2.z,o=b2.length,n=b1/0.55,m=0;m<b2.length;b2.length===o||(0,B.M)(b2),++m){l=b2[m]
if(w.q(0,l.a))continue
k=A.jL.aw(0,A.k.E(n,0,1))
p.push(s.$5(l.c,l.d,l.e,l.f,new B.kw(A.k.E(1-k,0,1),B.dJ(B.ea(A.A,r.$1(l),1-k*0.06,a8,a8),new B.t(-k*30*b0,0)),a8)))}for(b2=b3.z,b3=b2.length,o=1-v,j=0,m=0;m<b2.length;b2.length===b3||(0,B.M)(b2),++m){i=b2[m]
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
if(a2===D.f8){a4=i.hI()
a4.ay=B.ar(B.b1(l.ay),B.b1(i.ay),v).l()
a4.ch=B.ar(B.b1(l.ch),B.b1(i.ch),v).l()
a4.cx=0
a5=r.$1(a4)}else a5=a2===D.lJ&&l.at==i.at?r.$1(i):new B.an(A.a_,a8,A.b1,A.t,B.a([new B.kw(A.k.E(o,0,1),r.$1(l),a8),new B.kw(A.k.E(v,0,1),r.$1(i),a8)],q),a8)
a2=a3===0?a5:new B.iJ(B.wm(a3),a8,A.A,!0,a8,a5,a8)
p.push(s.$5(n+(h-n)*v,g+(f-g)*v,e+(d-e)*v,a0+(a1-a0)*v,a2))}else{a6=A.k.E((b1-(0.35+j*0.07))/0.5,0,1);++j
a7=i.dy
if(a7===D.cl)a7=D.mS
p.push(s.$5(i.c,i.d,i.e,i.f,C.hpP(a7,a6,r.$1(i))))}}return B.c1(new B.an(A.a_,a8,A.aa,A.t,p,a8),new B.o(a8,a8,a8,a8,a8,new B.a9(A.a3,A.a8,A.x,B.a([b5,t],x.O),a8,a8),A.n),A.bf)},
$S:472}
C.cgR.prototype={
$1(d){return d.a},
$S:z+22}
C.cgT.prototype={
$2(d,e){var w
if(e){w=d.f
if(w==null)w=d.e}else w=d.e
return B.b1(w)},
$S:z+76}
C.cgU.prototype={
$5(d,e,f,g,h){var w=this.a,v=this.b
return B.ao(null,h,g*v,null,d*w,null,e*v,f*w)},
$S:1694}
C.cgV.prototype={
$1(d){var w=null,v=d.fy,u=A.a.gX(d.a)
return new C.a7T(v,C.b1v(!1,w,!1,d,w,!1,w,w,w,this.a,!1,!1),!0,u,w)},
$S:z+23}
C.dJs.prototype={
$2(d,e){var w=Date.now()/1000*2*3.141592653589793,v=Math.sin(w/18)
return B.ea(new B.df(Math.sin(w/23)*0.6,Math.cos(w/29)*0.5),e,1.035+v*0.03,null,null)},
$S:45}
C.ch0.prototype={
$1(d){return d.a===this.a.a},
$S:z+11}
C.ch1.prototype={
$1(d){return d.a===this.a.a},
$S:z+20}
C.fIL.prototype={
$1(d){var w,v=document.createElement("iframe")
v.src=this.a
w=v.style
w.border="none"
w=v.style
w.width="100%"
w=v.style
w.height="100%"
return v},
$S:303}
C.fHS.prototype={
$1(d){return new C.adw(this.a,this.b,null)},
$S:z+78}
C.esG.prototype={
$0(){return this.a.Q3(this.b,C.ic4(),"Tap Save to Files on the next screen.","Download did not start \u2014 try Share.")},
$S:0}
C.esH.prototype={
$0(){var w=this.a,v=w.d?"Choose Print from the share menu for one full page.":"Pick Save to Files or send from the share menu."
return w.Q3(this.b,C.ic6(),v,"Share unavailable \u2014 try Safari.")},
$S:0}
C.esI.prototype={
$0(){var w=this.a,v=w.d?"PDF opened \u2014 tap Share \u2197 then Print.":"PDF opened \u2014 use Share \u2197 at the bottom of Safari."
return w.Q3(this.b,C.ic5(),v,"Could not open Safari \u2014 try Share.")},
$S:0}
C.esJ.prototype={
$0(){Z.hpz()
B.a3(this.a,!1).N(null)},
$S:0}
C.cgQ.prototype={
$1(d){var w=null,v=this.a
return v==null?d:B.l(w,w,w,w,w,w,w,w,w,w,w,d.r,d.x,w,d.w,v,d.as,!0,w,d.y,w,w,w,w,w,w)},
$S:1695}
C.cgP.prototype={
$2(d,e){var w,v=this,u=null,t=B.dN(d,A.nI),s=t==null?u:t.b,r=s==null?2:s,q=e.b,p=isFinite(q)?q:0,o=p<=0?u:A.k.V(A.k.E(p*Math.max(B.jR(r),5),96,1500))
t=v.b
w=v.c||v.d?A.bW:A.dy
return B.fO(t,A.A,o,new C.cgO(),A.cf,w,!0,u,!1,new B.cs("img_"+v.a.c.a+"_"+t.length,x.W),u)},
$S:1696}
C.cgO.prototype={
$3(d,e,f){return D.acM},
$S:211}
C.fFQ.prototype={
$2(d,e){var w,v,u,t=null,s=B.m(6),r=this.a
if(r.f!=null){w=B.b1(r.e)
v=r.f
v.toString
v=new B.a9(A.ay,A.aD,A.x,B.a([w,B.b1(v)],x.O),t,t)
w=v}else w=t
v=r.f==null?B.b1(r.e):t
r=r.z
r=B.d1(r,0,B.dB(6,"count",x.S),B.S(r).c)
u=r.$ti.k("N<ak.E,cN>")
r=B.C(new B.N(r,new C.fFP(e.b,e.d),u),u.k("ak.E"))
return B.bx(s,B.c1(new B.an(A.a_,t,A.aa,A.t,r,t),new B.o(v,t,t,t,t,w,A.n),A.bf),A.aq)},
$S:1697}
C.fFP.prototype={
$1(d){var w=null,v=d.c,u=this.a,t=d.d,s=this.b,r=d.e,q=d.f
return B.ao(w,C.b1v(!1,w,!1,d,w,!1,w,w,w,u/960,!1,!0),q*s,w,v*u,w,t*s,r*u)},
$S:z+24}
C.fpl.prototype={
$3(d,e,f){var w,v,u,t,s,r=this,q=null,p=r.a
p.a=B.cL(r.b,new C.fpj(d))
w=B.aH(d,A.bX,x.w).w
v=B.m(22)
u=B.I(A.bz,A.r,1)
t=B.a([new B.ac(0,A.G,A.w.j(0.45),A.fW,28)],x.V)
s=x.p
return new B.d0(e,!1,B.at(B.aF(!1,A.a1,!0,q,B.p(q,B.x(B.a([B.B(B.a([B.E(B.x(B.a([B.d(r.c,q,q,q,q,q,q,A.k1,q,q,q),A.av,B.d("Applied \u2014 tap Done or wait 1.5 seconds",q,q,q,q,q,q,B.l(q,q,A.c.j(0.45),q,q,q,q,q,q,q,q,11,q,q,A.a7,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),A.E,q,A.e,A.j,0,A.p),1),B.bK(!1,A.A8,q,q,!0,q,q,new C.fpk(p,d),q,B.fx(q,q,A.bj,q,q,q,q,q,q,q,q,A.c,q,q,q,q,q,A.Bx,q,new B.b7(B.m(12),A.a0),q,q,q,q,q,q))],s),A.m,q,A.e,A.j,0,q,q),A.aA,r.d],s),A.m,q,A.e,A.P,0,A.p),A.f,q,new B.aY(0,w.a.a*0.94,0,1/0),new B.o(A.au,q,u,v,t,q,A.n),q,q,q,A.fU,A.FU,q,q,q),A.f,A.K,0,q,q,q,q,q,A.ah),q,q,q),q)},
$C:"$3",
$R:3,
$S:253}
C.fpj.prototype={
$0(){var w=this.a
if(w.e!=null&&B.a3(w,!0).pJ())B.a3(w,!0).eJ()},
$S:0}
C.fpk.prototype={
$0(){var w=this.a.a
if(w!=null)w.a3(0)
B.a3(this.b,!0).eJ()},
$S:0}
C.f71.prototype={
$2(d,e){var w,v,u=this,t=null,s=u.a,r=s.d
r===$&&B.c()
r=r.x
r===$&&B.c()
switch(s.a.c.a){case 0:return u.b
case 1:case 13:return new B.an(A.a_,t,A.b1,A.t,B.a([u.c,B.d6(u.b,r)],x.p),t)
case 2:case 17:return new B.an(A.a_,t,A.b1,A.t,B.a([u.c,B.dJ(u.b,new B.t((1-r)*220,0))],x.p),t)
case 3:return new B.an(A.a_,t,A.b1,A.t,B.a([u.c,B.dJ(u.b,new B.t(-(1-r)*220,0))],x.p),t)
case 4:case 21:return new B.an(A.a_,t,A.b1,A.t,B.a([u.c,B.dJ(u.b,new B.t(0,(1-r)*140))],x.p),t)
case 5:return new B.an(A.a_,t,A.b1,A.t,B.a([u.c,B.dJ(u.b,new B.t(0,-(1-r)*140))],x.p),t)
case 6:return new B.an(A.a_,t,A.b1,A.t,B.a([u.c,B.ea(A.A,B.d6(u.b,r),0.6+r*0.4,t,t)],x.p),t)
case 7:return new B.an(A.a_,t,A.b1,A.t,B.a([u.c,B.ea(A.A,B.d6(u.b,r),1.3-r*0.3,t,t)],x.p),t)
case 8:s=B.dk()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.001
s.fB(r*3.14159)
return B.fo(A.A,r<0.5?u.c:u.b,t,s,!0)
case 9:s=B.dk()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.001
s.kd(r*3.14159)
return B.fo(A.A,r<0.5?u.c:u.b,t,s,!0)
case 10:s=B.dk()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.002
s.fB(r*1.2)
s.kd(r*0.5)
return B.fo(A.A,B.d6(u.b,0.4+r*0.6),t,s,!0)
case 11:s=B.dk()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.002
s.fB(-r*1.4)
return B.fo(A.a8,B.d6(u.b,r),t,s,!0)
case 12:return new B.an(A.a_,t,A.b1,A.t,B.a([u.c,B.d6(B.ea(A.A,u.b,1.02-r*0.02,t,t),r)],x.p),t)
case 14:return new B.an(A.a_,t,A.b1,A.t,B.a([u.c,B.jD(u.b,A.t,new C.aJO(r,t))],x.p),t)
case 15:return new B.an(A.a_,t,A.b1,A.t,B.a([u.c,B.jD(u.b,A.t,new C.aJO(1-r,t))],x.p),t)
case 16:v=D.b6B.aw(0,r)
return new B.an(A.a_,t,A.b1,A.t,B.a([u.c,B.ea(A.A,B.d6(u.b,r),0.5+v*0.5,t,t)],x.p),t)
case 18:s=r<0.15
if(s)r=1
return new B.an(A.a_,t,A.b1,A.t,B.a([u.c,B.d6(B.em(u.b,A.c.j(s?0.9:0),!0),r)],x.p),t)
case 19:s=B.dk()
s.mO(r*6.28)
s.jU(r,r,r,1)
return B.fo(A.A,u.b,t,s,!0)
case 20:return B.eI(A.A,(r-0.5)*0.35,new B.an(A.a_,t,A.b1,A.t,B.a([u.c,B.d6(u.b,r)],x.p),t),t)}},
$S:59}
C.dUG.prototype={
$0(){var w=this.a
if(w.c!=null){w=w.d
w===$&&B.c()
w.cp(0)}},
$S:12}
C.dUF.prototype={
$0(){var w=this.a
if(w.c!=null){w=w.d
w===$&&B.c()
w.cp(0)}},
$S:12}
C.dUE.prototype={
$2(d,e){var w,v=this.a
e.toString
w=v.d
w===$&&B.c()
v=v.a.c.dy
w=w.x
w===$&&B.c()
return C.hpP(v,w,e)},
$S:59}
C.cgI.prototype={
$2(d,e){var w,v,u,t,s,r=null,q={}
q.a=0
w=this.a
v=w.c
if(v.f!=null){u=B.b1(v.e)
t=v.f
t.toString
t=new B.a9(A.a3,A.a8,A.x,B.a([u,B.b1(t)],x.O),r,r)
u=t}else u=r
t=v.f==null?B.b1(v.e):r
v=v.z
s=B.S(v).k("N<1,cN>")
q=B.C(new B.N(v,new C.cgH(q,w,e.b,e.d),s),s.k("ak.E"))
return B.c1(new B.an(A.a_,r,A.aa,A.f,q,r),new B.o(t,r,r,r,r,u,A.n),A.bf)},
$S:472}
C.cgH.prototype={
$1(d){var w,v=this,u=null,t=d.dy!==D.cl?v.a.a++:0,s=d.c,r=v.c,q=d.d,p=v.d,o=d.e,n=d.f,m=d.fy,l=v.b,k=l.d
l=k||l.e
w=A.a.gX(d.a)
return B.ao(u,new C.a7T(m,new C.Vh(d,C.b1v(!1,u,!1,d,u,!1,u,u,u,r/960,!1,!1),k,t,u),l,w,u),n*p,u,s*r,u,q*p,o*r)},
$S:z+24}
C.d8v.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.d8u(w))},
$S:12}
C.d8u.prototype={
$0(){return this.a.d++},
$S:0}
C.ehj.prototype={
$2(d,e){var w,v=null,u=A.o.an(this.b.e.a,1000),t=A.o.F(Date.now(),u)/u*3.141592653589793*2+this.c,s=this.a
if(D.aP_.q(0,A.d.gI(s.a.c.split("@")))){s=s.a
w=s.c
s=s.f
e.toString
return C.i8p(w,t,s,e)}switch(s.a.c){case"float3d":s=B.dk()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.0016
w=Math.sin(t)
s.ec(0,w*7,0,1)
s.fB(Math.sin(t)*0.32)
s.kd(Math.cos(t)*0.12)
w=1+Math.sin(t*2)*0.025
s.jU(w,w,w,1)
return B.fo(A.A,e,v,s,!0)
case"drift":s=Math.sin(t)
w=Math.cos(t*0.8)
return B.dJ(B.ea(A.A,e,1+Math.sin(t*0.5)*0.05,v,v),new B.t(s*14,w*10))
default:s=Math.sin(t)
return B.d6(B.ea(A.A,e,1+Math.sin(t)*0.04,v,v),0.82+s*0.18)}},
$S:59}
C.eX7.prototype={
$1(d){var w
$.V()
w=B.K()
w.b=A.ac
w.c=d
w.e=A.dS
return w},
$S:1698}
C.fDq.prototype={
$2(d,e){var w,v,u,t,s=this,r=null,q=e.b,p=e.d,o=Math.min(q,p)
if(!s.a)w=s.b.length===0&&s.c.length!==0
else w=!0
v=w?new B.au(o,o):new B.au(q,p)
u=s.b
if(u.length===0)u="rounded"
q=s.c
p=q.length===0
if(p)t=0
else{w=v.gdB()
t=w*(q==="framed"?0.07:0.05)}w=B.a([],x.p)
if(q==="framed"||q==="gold")w.push(B.b4(r,r,r,new C.brj(u,t,r),A.ax))
w.push(B.nA(s.d,A.aq,new C.bft(u,t,r)))
if(!p)w.push(B.b4(r,r,r,new C.bqj(u,q,t,r),A.ax))
return B.at(new B.a7(v.a,v.b,new B.an(A.a_,r,A.b1,A.t,w,r),r),r,r,r)},
$S:245}
C.fsl.prototype={
$1(d){var w=d.b[1]
return w==null?"":w},
$S:304}
C.eyU.prototype={
$0(){var w=0,v=B.j(x.aP),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(S.D2(t.a.a.c),$async$$0)
case 3:s=e
r=J.a4(s)
if(r.gam(s)){u=null
w=1
break}u=r.dM(s,new C.eyS(),new C.eyT(s))
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1699}
C.eyS.prototype={
$1(d){return d.at==="published"&&d.Q.length!==0},
$S:196}
C.eyT.prototype={
$0(){return J.fr(this.a)},
$S:1701}
C.evh.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.evi.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.evj.prototype={
$0(){var w=this.a
w.d=this.b
w.x=!1},
$S:0}
C.ewS.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.ewG.prototype={
$1(d){return d.w!=="hati_kiapo_uongozi"},
$S:z+2}
C.ewH.prototype={
$1(d){return d.hI()},
$S:z+81}
C.euF.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.ey_.prototype={
$0(){this.a.tJ()},
$S:0}
C.eyQ.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.e=u
w.f=A.o.E(v.b,0,u.r.length-1)
w.r=v.c
w.on()
w.Kh()},
$S:0}
C.ewQ.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.e=u
w.f=A.o.E(v.b,0,u.r.length-1)
w.r=v.c
w.on()
w.Kh()},
$S:0}
C.eyD.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+2}
C.eyE.prototype={
$1(d){return d.b===D.cQ},
$S:z+4}
C.eyF.prototype={
$1(d){return d.a},
$S:z+22}
C.eyG.prototype={
$0(){var w=this.a.r
return new B.as(new B.bb(w,A.b4,A.aO),$.ax())},
$S:237}
C.eyH.prototype={
$0(){return B.jZ(!0,null,!0,!0,null,null,!1)},
$S:675}
C.eu3.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+2}
C.eyR.prototype={
$0(){},
$S:0}
C.evZ.prototype={
$0(){var w=this.a
w.e=this.b.hI()
w.f=0
w.r=null
w.db=!1
A.d.a8(w.ax)
A.d.a8(w.ay)
w.xB()
w.Kh()},
$S:0}
C.eu1.prototype={
$0(){var w=this.a
w.e=null
w.db=!1
w.w=w.r=null
w.xB()},
$S:0}
C.eu2.prototype={
$0(){var w=this.a
w.w=w.r=w.e=null
w.xB()},
$S:0}
C.ewl.prototype={
$1(d){return d.a===this.a.a.a},
$S:z+2}
C.ewm.prototype={
$0(){var w=this.a
w.e=this.b
w.f=0
w.r=null
w.db=!this.c
A.d.a8(w.ax)
A.d.a8(w.ay)
w.xB()
w.Kh()
w.z="Home"},
$S:0}
C.ewn.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.evY.prototype={
$1(d){var w=null
return B.el(B.a([B.bK(!1,A.UA,w,w,!0,w,w,new C.evX(d),w,w)],x.p),w,w,w,D.fII,w,w,w,w,D.fpC,w)},
$S:18}
C.evX.prototype={
$0(){B.a3(this.a,!1).N(null)
return null},
$S:0}
C.evV.prototype={
$1(d){var w=null
return B.el(B.a([B.bK(!1,A.UA,w,w,!0,w,w,new C.evU(d),w,w)],x.p),w,w,w,D.ftG,w,w,w,w,D.frq,w)},
$S:18}
C.evU.prototype={
$0(){B.a3(this.a,!1).N(null)
return null},
$S:0}
C.evW.prototype={
$0(){},
$S:0}
C.evd.prototype={
$1(d){return this.a.b0n(C.bCi(d))},
$S:z+7}
C.eve.prototype={
$1(d){return this.a.afp(C.bCi(d))},
$S:z+7}
C.ew4.prototype={
$1(d){var w=null,v=x.p,u=B.a([B.at(B.p(w,w,A.f,w,w,new B.o(A.aZ,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bv,D.fIM,A.av,B.d("Chagua aina ya hati",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.bv,new C.PO(A.w7,D.axN,"HATI YA KUHOWA","Hati ya mahari",new C.ew_(d),w),A.R,new C.PO(A.hg,D.d8Q,"HATI YA KUHOWESHA","Hati ya kupokea",new C.ew0(d),w),A.R,new C.PO(A.hV,D.cVf,"HATI YA NDOA","Makubaliano \xb7 pete \xb7 picha za wanandoa",new C.ew1(d),w),A.R,new C.PO(A.hW,D.cTp,"MALIPO YA AWAMU YA MAHARI","Makubaliano ya mahari iliyosalia",new C.ew2(d),w)],v)
if(this.a.gabP())A.d.v(u,B.a([A.R,new C.PO(A.jd,D.cEp,"HATI YA KIAPO CHA UONGOZI","Kiapo cha Rais \xb7 Civic Registry",new C.ew3(d),w)],v))
return B.bm(!0,B.cd(B.x(u,A.aj,w,A.e,A.P,0,A.p),A.t,w,A.y,w,E.yd,w,w,A.ag),!0,!1,A.af,!0,!0)},
$S:26}
C.ew_.prototype={
$0(){B.a3(this.a,!1).N("hati_kuhowa")
return null},
$S:0}
C.ew0.prototype={
$0(){B.a3(this.a,!1).N("hati_kuhoweya")
return null},
$S:0}
C.ew1.prototype={
$0(){B.a3(this.a,!1).N("marriage_agreement")
return null},
$S:0}
C.ew2.prototype={
$0(){B.a3(this.a,!1).N("hati_malipo_awamu")
return null},
$S:0}
C.ew3.prototype={
$0(){B.a3(this.a,!1).N("hati_kiapo_uongozi")
return null},
$S:0}
C.ew5.prototype={
$0(){var w=this.a
w.e=this.b.hI()
w.f=0
w.r=null
w.db=!0
A.d.a8(w.ax)
A.d.a8(w.ay)
w.xB()},
$S:0}
C.eu5.prototype={
$1(d){return d.z.length===0},
$S:z+6}
C.eu6.prototype={
$0(){var w,v,u=this,t=u.c,s=u.d,r=t.r,q=s.r
if(u.b){A.d.a8(r)
A.d.v(r,q)
w=A.a.i(t.b).toLowerCase()
if(w.length===0||A.a.a0(w,"untitled"))t.b=s.b
r=u.a
r.f=0}else{v=u.a
A.d.ni(r,v.f+1,q);++v.f
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
C.ewg.prototype={
$1(d){return d.b===D.lJ},
$S:z+4}
C.ewh.prototype={
$1(d){var w={},v=this.b
w.a=A.d.gI(v).go
w.b=A.d.gI(v).id
return new B.dY(new C.ewe(w,this.a,v),null)},
$S:19}
C.ewe.prototype={
$2(a2,a3){var w,v,u,t,s,r,q=null,p=this.a,o=this.b,n=this.c,m=new C.ewf(p,o,a3,n),l=B.P(a2).ax.a===A.I,k=l?A.c:A.M,j=l?A.aQ:A.al,i=l?A.bn:A.bN,h=l?A.M:A.c,g=B.m(28),f=B.I(l?A.bz:A.aM,A.r,1),e=x.p,d=B.B(B.a([B.E(B.x(B.a([B.d("Logo and pictures",q,q,q,q,q,q,B.l(q,q,k,q,q,q,q,q,q,q,q,20,q,q,A.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),A.bC,B.d("Tap a shape or a ring to change it.",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,12.5,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],e),A.E,q,A.e,A.j,0,A.p),1),B.aJ(q,q,q,q,B.X(A.cx,j,q,q,q,q),q,q,q,new C.ewa(a2),q,q,q,q,q,q)],e),A.m,q,A.e,A.j,0,q,q),a0=B.d("SHAPE",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q),a1=B.a([],e)
for(w=0;w<7;++w){v={}
u=D.CB[w]
v.a=null
t=v.a=u.a
a1.push(new C.bhY(t,u.b,p.a===t,i,k,new C.ewb(v,m),q))}a1=B.bW(A.bD,a1,A.bq,10,10)
v=B.d("RING",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q)
u=B.a([],e)
for(w=0;w<11;++w){s={}
r=D.Cw[w]
s.a=null
t=s.a=r.a
u.push(new C.bhX(t,r.b,p.b===t,k,j,new C.ewc(s,m),q))}return B.bm(!0,B.p(q,B.cd(B.x(B.a([d,A.aL,a0,A.R,a1,A.bv,v,A.R,B.bW(A.bD,u,A.bq,12,12),A.bv,new B.a7(1/0,48,B.es(D.bWZ,D.fLc,new C.ewd(o,n),B.dg(q,q,q,q,q,q,q,q,q,A.aC,q,q,q,q,new B.b7(B.m(16),A.a0),D.b0D,q,q,q,q)),q)],e),A.E,q,A.e,A.P,0,A.p),A.t,q,A.y,q,q,q,q,A.ag),A.f,q,q,new B.o(h,q,f,g,q,q,A.n),q,q,q,A.tY,D.by0,q,q,q),!0,!1,A.af,!0,!0)},
$S:86}
C.ewf.prototype={
$2$f$r(d,e){var w=this
w.c.$1(new C.ew8(w.a,d,e))
w.b.d6(new C.ew9(w.d,d,e))},
$0(){return this.$2$f$r(null,null)},
$1$r(d){return this.$2$f$r(null,d)},
$1$f(d){return this.$2$f$r(d,null)},
$S:1704}
C.ew8.prototype={
$0(){var w=this,v=w.b
if(v!=null)w.a.a=v
v=w.c
if(v!=null)w.a.b=v},
$S:0}
C.ew9.prototype={
$0(){var w,v,u,t,s,r,q,p
for(w=this.a,v=w.length,u=this.c,t=u!=null,s=this.b,r=s!=null,q=0;q<v;++q){p=w[q]
if(r)p.go=s
if(t)p.id=u}},
$S:0}
C.ewa.prototype={
$0(){B.a3(this.a,!1).N(null)
return null},
$S:0}
C.ewb.prototype={
$0(){return this.b.$1$f(this.a.a)},
$S:0}
C.ewc.prototype={
$0(){return this.b.$1$r(this.a.a)},
$S:0}
C.ewd.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A5.GS(78,1920),$async$$0)
case 3:s=e
if(s==null){w=1
break}t.a.d6(new C.ew7(t.b,s))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.ew7.prototype={
$0(){var w,v,u,t
for(w=this.a,v=w.length,u=this.b,t=0;t<v;++t)w[t].at=u},
$S:0}
C.ewj.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+6}
C.ewk.prototype={
$0(){var w,v,u,t=this,s=t.a
if(s.a<0)s.a=t.c.r.length
w=t.c
v=w.r
A.d.bt(v,new C.ewi(t.d))
u=A.o.E(s.a,0,v.length)
s.a=u
s=t.e
A.d.ni(v,u,s.r)
w.CW=s.CW
w.cx=s.cx
w.cy=s.cy
w.ay=s.ay
s=t.b
s.f=A.o.E(s.f,0,v.length-1)
s.r=null
s.xB()},
$S:0}
C.ewi.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+6}
C.ewB.prototype={
$1(d){return d.b===D.cQ},
$S:z+4}
C.ewC.prototype={
$1(d){return d.w},
$S:z+82}
C.ewD.prototype={
$2(d,e){return d>e?d:e},
$S:78}
C.ewE.prototype={
$1(d){var w=this,v=null,u=B.P(d).ax.a===A.I,t=u?A.c:A.M,s=u?A.aQ:A.al,r=u?A.bn:A.aP,q=u?A.M:A.c,p=B.m(28),o=B.I(u?A.bz:A.aM,A.r,1),n=B.aH(d,A.bX,x.w).w,m=w.a,l=x.p,k=w.b
return B.bm(!0,B.p(v,B.x(B.a([B.B(B.a([B.p(v,D.bQC,A.f,v,v,D.b21,v,38,v,v,v,v,v,38),A.ba,B.E(B.x(B.a([B.d("Edit this slide",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,19,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.d("Slide "+(m.f+1)+" \xb7 changes save as you type",v,v,v,v,v,v,B.l(v,v,s,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],l),A.E,v,A.e,A.j,0,A.p),1),B.aJ(v,v,v,v,B.X(A.cx,s,v,v,v,v),v,v,v,new C.ewy(d),v,v,v,v,v,v)],l),A.m,v,A.e,A.j,0,v,v),A.aA,new B.ds(1,A.cn,B.hN(v,new C.ewz(m,k,w.c,s,w.d,t,r),k.length,A.fw,v,A.ag,new C.ewA(),!0),v)],l),A.E,v,A.e,A.P,0,A.p),A.f,v,new B.aY(0,1/0,0,n.a.b*0.8),new B.o(q,v,o,p,v,v,A.n),v,v,v,A.tY,A.ZG,v,v,v),!0,!1,A.af,!0,!0)},
$S:26}
C.ewy.prototype={
$0(){B.a3(this.a,!1).N(null)
return null},
$S:0}
C.ewA.prototype={
$2(d,e){return A.ad},
$S:36}
C.ewz.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=null,p=r.b[e],o=p.w===r.c,n=o?"TITLE":"TEXT "+(e+1)
n=B.d(n,q,q,q,q,q,q,B.l(q,q,o?A.aC:r.d,q,q,q,q,q,q,q,q,10.5,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q)
w=r.e
v=w.h(0,p.a)
u=o?1:2
t=o?A.H:A.cw
t=B.l(q,q,r.f,q,q,q,q,q,q,q,q,15,q,q,t,q,q,!0,q,q,q,q,q,q,q,q)
s=r.a
w=B.aJ(q,q,q,q,D.bTO,q,q,q,new C.eww(s,w,p),q,q,q,q,"Add an icon",q)
return B.x(B.a([new B.D(D.bAg,n,q),B.aN(q,A.X,!1,q,!0,A.t,q,B.aO(),v,q,q,q,q,q,2,B.bs(q,new B.b5(4,B.m(16),A.a0),q,A.eP,q,q,q,q,!0,q,q,q,q,q,q,r.r,!0,q,q,q,q,new B.b5(4,B.m(16),D.b0i),q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,!0,!0,!1,q,q,q,q,q,q,q,q,w,q,q,q,q,q),A.y,!0,q,!0,q,!1,q,A.ak,q,q,q,q,q,q,q,q,q,q,u,q,!1,"\u2022",q,new C.ewx(s,p),q,q,q,!1,q,q,!1,q,!0,q,A.a9,q,q,q,q,q,q,q,q,q,q,q,t,!0,A.a6,q,A.ao,q,q,q,q)],x.p),A.E,q,A.e,A.j,0,A.p)},
$S:676}
C.eww.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=t.a
k=l.c
k.toString
w=3
return B.b(C.ied(k),$async$$0)
case 3:s=e
if(s==null||l.c==null){w=1
break}k=t.c.a
r=t.b.h(0,k)
q=r.a
p=q.b
o=p.geH()?p.a:q.a.length
n=p.geH()?p.b:q.a.length
m=A.a.oS(q.a,o,n,s)
r.bP(0,new B.bb(m,B.hi(A.bw,o+s.length),A.aO))
l.ajq(k,m)
l.pv()
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.ewx.prototype={
$1(d){var w=this.a
w.ajq(this.b.a,d)
w.pv()},
$S:2}
C.ewF.prototype={
$0(){},
$S:0}
C.ew6.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.db=u.length===0?null:u
w.dx=v.b
w.dy=v.c
v=v.d
w.fr=v.length===0?null:v},
$S:0}
C.eum.prototype={
$0(){},
$S:0}
C.eun.prototype={
$0(){var w=this.c.CW
if(w==null)w=""
C.hr8(this.b,w,!0)
w=this.a
w.r=null
w.xB()},
$S:0}
C.euo.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+6}
C.eup.prototype={
$0(){var w,v,u,t=this,s=t.a
if(s.a<0)s.a=t.c.r.length
w=t.c
v=w.r
A.d.bt(v,new C.eul(t.d))
u=A.o.E(s.a,0,v.length)
s.a=u
s=t.e
A.d.ni(v,u,s.r)
w.CW=s.CW
w.cx=s.cx
s=t.b
s.f=A.o.E(s.f,0,v.length-1)
s.r=null
s.xB()},
$S:0}
C.eul.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+6}
C.ewL.prototype={
$1(d){return B.oZ(new C.ewK(this.a,d),!1,0.82,0.95,0.45,!1,null)},
$S:140}
C.ewK.prototype={
$2(d,e){var w=null,v=x.p
return B.x(B.a([new B.D(E.ajH,B.x(B.a([D.fGg,A.am,B.d("Top 4 templates are free \xb7 lock icon means Slides Pro",w,w,w,w,w,w,B.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],v),A.E,w,A.e,A.j,0,A.p),w),B.E(B.ix(!0,w,e,A.y,D.f1O,new C.ewJ(this.a,this.b),20,A.u0,w,A.ag,!1),1)],v),A.aj,w,A.e,A.j,0,A.p)},
$S:467}
C.ewJ.prototype={
$2(d,e){var w=null,v=D.Hq[e],u=C.hJY(v),t=B.m(16),s=B.m(16),r=B.a([v.e,v.f],x.O),q=v.d,p=B.I(q.j(0.45),A.r,1),o=q.j(0.2),n=B.m(8),m=x.p
n=B.a([B.p(w,B.d(v.c,w,w,w,w,w,w,B.l(w,w,q,w,w,w,w,w,w,w,w,9,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.f,w,w,new B.o(o,w,w,n,w,w,A.n),w,w,w,w,A.fJ,w,w,w)],m)
if(u)A.d.v(n,B.a([A.bo,B.p(w,D.eWp,A.f,w,w,new B.o(A.dK.j(0.85),w,w,B.m(8),w,w,A.n),w,w,w,w,A.mF,w,w,w)],m))
return B.aF(!1,A.a1,!0,w,B.aM(!1,t,!0,B.p(w,B.x(B.a([B.B(n,A.m,w,A.e,A.j,0,w,w),A.b0,B.d(v.b,w,w,w,w,w,w,B.l(w,w,v.r,w,w,w,w,w,w,w,w,14,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.d("5 slides",w,w,w,w,w,w,B.l(w,w,v.w.j(0.8),w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],m),A.E,w,A.e,A.j,0,A.p),A.f,w,w,new B.o(w,w,p,s,w,new B.a9(A.a3,A.a8,A.x,r,w,w),A.n),w,w,w,w,A.bh,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.ewI(this.a,u,this.b,v),w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ah)},
$S:79}
C.ewI.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=t.b?3:4
break
case 3:s=t.c
r=t.a.a
w=5
return B.b(C.ch_(s,r.c,r.d),$async$$0)
case 5:if(!e||s.e==null){w=1
break}case 4:s=t.c
if(s.e!=null)B.a3(s,!1).N(t.d.a)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.ewM.prototype={
$0(){var w=this.a
w.e=this.b.hI()
w.f=0
w.r=null
w.db=!0
A.d.a8(w.ax)
A.d.a8(w.ay)
w.xB()},
$S:0}
C.et0.prototype={
$0(){var w,v=this.a,u=v.gqz(),t=C.rD(4294967295,null,0,0,null,C.cE(),D.mR,"","","",D.dh),s=this.b
C.chc(t,s,u)
w=v.gdv()
if(w!=null&&s!==D.Da){t.e=w.e
t.f=w.f}A.d.c8(v.e.r,v.f+1,t);++v.f
v.r=null},
$S:0}
C.euk.prototype={
$0(){var w,v,u,t,s,r,q=this.b.ag()
q.n(0,"id",C.cE())
w=x.c.a(q.h(0,"elements"))
if(w!=null)for(v=J.aV(w),u=x.f;v.C();){t=v.gR(v)
if(u.b(t)){s=Date.now()
r=$.j3
$.j3=r+1
J.aG(t,"id",""+1000*s+"_"+r)}}v=this.a
A.d.c8(v.e.r,v.f+1,C.heb(q));++v.f},
$S:0}
C.eui.prototype={
$0(){var w=this.a
A.d.cG(w.e.r,w.f)
w.f=A.o.E(w.f,0,w.e.r.length-1)
w.r=null},
$S:0}
C.ewU.prototype={
$0(){var w,v=this.a,u=this.b,t=A.d.cG(v.e.r,u),s=this.c
A.d.c8(v.e.r,s,t)
w=v.f
if(w===u)v.f=s
else if(u<w&&s>=w)v.f=w-1
else if(u>w&&s<=w)v.f=w+1},
$S:0}
C.eue.prototype={
$0(){var w,v=this.a,u=this.b
A.d.bt(v.d,new C.eud(u))
w=v.e
w=w==null?null:w.a
if(w===u.a){v.e=null
v.db=!1}},
$S:0}
C.eud.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.ewT.prototype={
$0(){var w,v=this.b,u=A.a.i(this.c)
v.b=u.length===0?"Untitled Presentation":u
v.f=new B.U(Date.now(),0,!1)
u=this.a.e
w=u==null?null:u.a
if(w===v.a)u.b=v.b},
$S:0}
C.eu4.prototype={
$0(){var w=this.a.r
return new B.as(new B.bb(w,A.b4,A.aO),$.ax())},
$S:237}
C.euG.prototype={
$0(){return B.jZ(!0,null,!0,!0,null,null,!1)},
$S:675}
C.eyB.prototype={
$0(){var w=this.a
w.w=w.r=this.b
w.y=!1},
$S:0}
C.eyC.prototype={
$1(d){var w,v,u=this.a
if(u.c==null||u.w!==this.b)return
w=this.c
u.atP(w).fO()
v=u.WP(w)
v.stt(B.hi(A.bw,v.a.a.length))},
$S:9}
C.ey0.prototype={
$0(){var w,v,u,t=this
if(t.b)t.a.w=null
w=t.a
v=w.r=t.c
if(v!=null){w.as=!0
u=w.XO(v)
if(u!=null&&u.b===D.cQ)w.WP(u).saX(0,u.r)}else w.w=null},
$S:0}
C.et1.prototype={
$0(){var w=C.cE(),v=this.a,u=C.er(A.bi,!1,v.gqz().e.l(),A.aF,"",4280640491,24,A.bp,A.a7,"",0.22,w,null,"","",0,!1,"",0,D.bg,4280172719,2,"Tap to edit text",0,0,"",D.cl,D.cQ,0.7,0.15,0.2)
A.d.M(v.gdv().z,u)
v.r=u.a},
$S:0}
C.esZ.prototype={
$0(){var w=C.cE(),v=this.a,u=C.er(A.bi,!1,4279310375,A.aF,"",v.gqz().c.j(0.25).l(),24,A.bp,A.a7,"",0.25,w,null,"","",0,!1,"",0,this.b,v.gqz().c.l(),2,"",0,0,"",D.cl,D.f8,0.25,0.3,0.3)
A.d.M(v.gdv().z,u)
v.r=u.a},
$S:0}
C.esP.prototype={
$0(){var w=C.er(A.bi,!1,4279310375,A.aF,"",4280640491,24,A.bp,A.a7,"",0.55,C.cE(),this.b,"","",0,!1,"",0,D.bg,4280172719,2,"",0,0,"",D.cl,D.lJ,0.6,0.2,0.18),v=this.a
A.d.M(v.gdv().z,w)
v.r=w.a},
$S:0}
C.esM.prototype={
$1(d){var w,v,u,t,s,r=null,q=B.a([D.c2Y],x.p)
for(w=J.aV(this.a);w.C();){v=w.gR(w)
u=A.a.i(v.b)
if(u.length===0)u="My Bio"
t=v.gak3().length
s=v.at==="published"&&v.Q.length!==0?" \xb7 "+v.as:""
q.push(B.dM(!1,r,r,r,!0,r,r,r,!0,r,D.bOi,r,r,r,r,new C.esL(d,v),!1,r,r,r,r,r,new B.y(""+t+" links"+s,r,r,r,r,r,r,A.a2,r,1,r,r),r,new B.y(u,r,r,r,r,r,r,r,r,r,r,r),r,r,r))}return B.bm(!0,B.cq(q,r,r,r,r,A.ag,!0),!0,!1,A.af,!0,!0)},
$S:26}
C.esL.prototype={
$0(){B.a3(this.a,!1).N(this.b)
return null},
$S:0}
C.esN.prototype={
$0(){var w=A.k.E(0.23131034482758622,0.12,0.5),v=C.cE(),u=this.b,t=A.T.ao(u.ag(),null),s=C.er(A.bi,!1,4279310375,A.aF,u.b,4280640491,24,A.bp,A.a7,"",0.86,v,null,"","",0,!1,"",0,D.bg,4280172719,2,t,0,0,"",D.cl,D.a5Z,w,0.5-w/2,0.07)
t=this.a
A.d.M(t.gdv().z,s)
t.r=s.a},
$S:0}
C.eug.prototype={
$1(d){return d.a===this.a&&d.db==="ngmy_quote_logo"},
$S:z+4}
C.euh.prototype={
$0(){var w,v=this.a,u=this.b
A.d.bt(v.gdv().z,new C.euf(u))
v.w=v.r=null
w=v.ch.W(0,u)
if(w!=null){w.T$=$.ax()
w.P$=0}v=v.CW.W(0,u)
if(v!=null)v.t()},
$S:0}
C.euf.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.ett.prototype={
$0(){var w,v,u,t=this,s=t.b
if(s!=null){w=s.b
if(w===D.cQ)s.Q=t.c.l()
else if(w===D.f8){s.ay=t.c.l()
w=t.d
if(w!=null)s.ch=w.l()}return}v=new C.etu(t.c,t.d)
if(t.a.Q)for(s=t.e.r,w=s.length,u=0;u<s.length;s.length===w||(0,B.M)(s),++u)v.$1(s[u])
else{s=t.f
if(s!=null)v.$1(s)}},
$S:0}
C.etu.prototype={
$1(d){var w
d.e=this.a.l()
w=this.b
d.f=w==null?null:w.l()},
$S:z+1}
C.ety.prototype={
$0(){var w,v,u,t,s=this.a,r=s.e
r.toString
w=this.b
v=new C.etz(w)
if(s.Q){r.c=w.a
for(s=r.r,r=s.length,u=0;u<s.length;s.length===r||(0,B.M)(s),++u)v.$1(s[u])}else{t=s.gdv()
if(t!=null)v.$1(t)}},
$S:0}
C.etz.prototype={
$1(d){var w=this.a
d.e=w.f.l()
w=w.r
d.f=w==null?null:w.l()},
$S:z+1}
C.etw.prototype={
$0(){var w,v,u,t=this,s=t.b
if(s!=null&&s.b===D.cQ){s.Q=t.c
return}w=new C.etx(t.c)
if(t.a.Q)for(s=t.d.r,v=s.length,u=0;u<s.length;s.length===v||(0,B.M)(s),++u)w.$1(s[u])
else{s=t.e
if(s!=null)w.$1(s)}},
$S:0}
C.etx.prototype={
$1(d){var w,v,u
for(w=A.d.gaf(d.z),v=new B.f5(w,new C.etv()),u=this.a;v.C();)w.gR(0).Q=u},
$S:z+1}
C.etv.prototype={
$1(d){return d.b===D.cQ},
$S:z+4}
C.ets.prototype={
$0(){return C.chc(this.b,this.c,this.a.gqz())},
$S:0}
C.ewv.prototype={
$0(){return A.d.c8(this.a.d,0,this.b)},
$S:0}
C.eyK.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eyL.prototype={
$1(d){return d.w===this.b&&d.a!==this.a.a.a},
$S:z+2}
C.eyM.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eyN.prototype={
$0(){var w,v=this.a,u=v.c,t=this.b,s=t.d
if(u)A.d.c8(s,0,v.b)
else{w=A.d.bg(s,new C.eyJ(v))
if(w>=0)t.d[w]=v.b}if(v.a.gSt()){u=v.b
u.Q=v.a.Q
u.z=!0}if(this.c===!0){t.e=v.b.hI()
t.f=0
t.r=null
t.db=!1
A.d.a8(t.ax)
A.d.a8(t.ay)
t.xB()
t.Kh()}},
$S:0}
C.eyJ.prototype={
$1(d){return d.a===this.a.b.a},
$S:z+2}
C.eyg.prototype={
$1(d){var w=this,v=null,u=w.a,t=u.abT(),s=w.b,r=u.abU(A.ff,A.kg,"Copy filled names, date, mahari, witnesses, and signatures into "+s+".","Transfer details"),q=B.m(18),p=B.a([A.c.j(0.07),A.c.j(0.03)],x.O),o=B.I(A.c.j(0.08),A.r,1),n=x.p
p=B.a([t,A.N,r,A.bv,B.p(v,B.B(B.a([B.E(u.aVr(w.c,A.al),1),new B.D(A.fx,B.p(v,D.bOo,A.f,v,v,new B.o(A.ff.j(0.18),v,v,v,v,v,A.a5),v,34,v,v,v,v,v,34),v),B.E(u.aVr(s,A.ff),1)],n),A.m,v,A.e,A.j,0,v,v),A.f,v,v,new B.o(v,v,o,q,v,new B.a9(A.ay,A.aD,A.x,p,v,v),A.n),v,v,v,v,A.bB,v,v,v),A.bv,u.aVu(A.ff,d,D.bKy,!0,"Make a fresh "+s+" and fill it automatically","Create new & transfer","new")],n)
t=w.d
if(t>0)A.d.v(p,B.a([A.R,u.bYw(A.aR,d,A.ug,t===1?"Update your saved "+s:"Choose among "+t+" saved documents","Use existing","existing")],n))
p.push(A.aA)
p.push(u.aVs(d,"Not now"))
return new C.K6(B.x(p,A.aj,v,A.e,A.P,0,A.p),v)},
$S:z+9}
C.eyf.prototype={
$1(d){var w=null,v=this.a,u=this.c
return new C.K6(B.x(B.a([v.abT(),A.N,v.abU(A.aR,D.bKd,"Pick which saved document should receive the details.","Choose "+this.b),A.aL,new B.cT(new B.aY(0,1/0,0,B.aH(d,A.bX,x.w).w.a.b*0.42),B.hN(w,new C.eyd(v,u,d),u.length,w,w,A.ag,new C.eye(),!0),w),A.aA,v.aVs(d,"Cancel")],x.p),A.aj,w,A.e,A.P,0,A.p),w)},
$S:z+9}
C.eye.prototype={
$2(d,e){return A.R},
$S:36}
C.eyd.prototype={
$2(d,e){var w=null,v=this.b[e],u=B.m(16),t=A.c.j(0.05),s=B.m(16),r=B.I(A.c.j(0.08),A.r,1),q=x.p
return B.aF(!1,A.a1,!0,w,B.aM(!1,u,!0,B.p(w,B.B(B.a([B.p(w,D.aox,A.f,w,w,new B.o(w,w,w,B.m(12),w,D.c_V,A.n),w,42,w,w,w,w,w,42),A.ba,B.E(B.x(B.a([B.d(v.b,w,1,A.a2,w,w,w,A.nF,w,w,w),A.cK,B.d("Updated "+this.a.Q4(v.f),w,w,w,w,w,w,B.l(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,12,w,w,A.a7,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],q),A.E,w,A.e,A.j,0,A.p),1),B.X(A.eD,A.c.j(0.35),w,w,w,w)],q),A.m,w,A.e,A.j,0,w,w),A.f,w,w,new B.o(t,w,r,s,w,w,A.n),w,w,w,w,A.bB,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eyc(this.c,v),w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ah)},
$S:79}
C.eyc.prototype={
$0(){B.a3(this.a,!1).N(this.b.a)
return null},
$S:0}
C.ey9.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.abT()
t=t.abU(A.aE,A.uq,"Names and shared details from \u201c"+this.b+"\u201d will fill matching spots on \u201c"+this.c+"\u201d.","Replace matching fields?")
w=A.c.j(0.14)
v=x.p
return new C.K6(B.x(B.a([s,A.N,t,A.bv,B.B(B.a([B.E(B.dR(A.a9j,new C.ey7(d),B.dg(u,u,u,u,u,u,u,u,u,A.c,u,u,A.cj,u,new B.b7(B.m(14),A.a0),new B.ay(w,1,A.r,-1),u,u,u,u)),1),A.as,B.E(B.bH(D.fs_,new C.ey8(d),B.bp(A.ff,u,u,u,A.c,u,A.cj,u,new B.b7(B.m(14),A.a0),u,u,u)),1)],v),A.m,u,A.e,A.j,0,u,u)],v),A.aj,u,A.e,A.P,0,A.p),u)},
$S:z+9}
C.ey7.prototype={
$0(){B.a3(this.a,!1).N(!1)
return null},
$S:0}
C.ey8.prototype={
$0(){B.a3(this.a,!1).N(!0)
return null},
$S:0}
C.eyb.prototype={
$1(d){var w=this,v=null,u=w.a,t=u.abT(),s=w.b,r=u.abU(A.aV,A.eb,"Everything that could be matched is now on "+s+".","Transfer complete"),q=x.p,p=B.B(B.a([B.E(u.av8("Names",""+w.c),1),A.ab,B.E(u.av8("Fields",""+w.d),1),A.ab,B.E(u.av8("Signatures",""+w.e),1)],q),A.m,v,A.e,A.j,0,v,v),o=B.bp(A.bj,v,v,v,A.c,v,A.y0,v,new B.b7(B.m(14),A.a0),v,v,v)
return new C.K6(B.x(B.a([t,A.N,r,A.aL,p,A.bv,B.bH(B.d("Open "+s,v,v,v,v,v,v,A.nC,v,v,v),new C.eya(d),o),A.R,u.aVt(d,"Stay here",!1)],q),A.aj,v,A.e,A.P,0,A.p),v)},
$S:z+9}
C.eya.prototype={
$0(){B.a3(this.a,!1).N(!0)
return null},
$S:0}
C.ev9.prototype={
$0(){B.a3(this.a,!1).N(this.b)
return null},
$S:0}
C.ev8.prototype={
$0(){B.a3(this.a,!1).N(this.b)
return null},
$S:0}
C.ey1.prototype={
$1(d){return d.b===D.cQ},
$S:z+4}
C.eyA.prototype={
$1(d){var w=this.a,v=this.b
return new C.a_I(A.d.dM(w.d,new C.eyy(v),new C.eyz(v)).hI(),w.f,null)},
$S:z+84}
C.eyy.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eyz.prototype={
$0(){return this.a},
$S:z+85}
C.esU.prototype={
$1(d){var w=null,v=this.b,u=""+v,t=v===1?"":"s"
t=B.a([new B.D(A.bB,B.d("Import "+this.a.c+" ("+u+" page"+t+")",w,w,w,w,w,w,A.fO,w,w,w),w),B.dM(!1,w,w,w,!0,w,w,w,!0,w,D.bQa,w,w,w,w,new C.esS(d),!1,w,w,w,w,w,B.d("Scroll through all "+u+" pages inside the slide",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,D.fq0,w,w,w)],x.p)
if(v>1)t.push(B.dM(!1,w,w,w,!0,w,w,w,!0,w,D.bRn,w,w,w,w,new C.esT(d),!1,w,w,w,w,w,D.fMr,w,B.d("One slide per page ("+u+" slides)",w,w,w,w,w,w,A.df,w,w,w),w,w,w))
return B.bm(!0,B.x(t,A.m,w,A.e,A.P,0,A.p),!0,!1,A.af,!0,!0)},
$S:26}
C.esS.prototype={
$0(){B.a3(this.a,!1).N("scroll")
return null},
$S:0}
C.esT.prototype={
$0(){B.a3(this.a,!1).N("split")
return null},
$S:0}
C.esV.prototype={
$0(){var w=this.b,v=w.c,u=C.er(A.bi,!1,4279310375,A.aF,v,4280640491,24,A.bp,A.a7,"",0.84,C.cE(),w.b,"","",0,!1,"",0,D.bg,4280172719,2,v,0,0,"",D.cl,D.Sp,0.88,0.06,0.08)
v=this.a
A.d.M(v.gdv().z,u)
v.r=u.a},
$S:0}
C.esW.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this.a,i=j.f+1
for(w=this.b,v=this.c,u=v.b,t=w,v=v.c,s=x.u,r=v+" \u2014 page ",q=1;q<=w;++q){p=Date.now()
o=$.j3
$.j3=o+1
n=""+q
m=B.a([],s)
l=Date.now()
k=$.j3
$.j3=k+1
m.push(new C.eM(""+1000*l+"_"+k,D.Sp,0.04,0.06,0.92,0.88,v,24,A.a7,A.bp,A.aF,4279310375,A.bi,u,D.bg,4280640491,4280172719,2,0,!1,n+" / "+t,q,D.cl,0,"","","","","",!1,0))
A.d.c8(j.e.r,i+q-1,new C.lO(""+1000*p+"_"+o,r+n,"",D.qr,4294967295,null,D.dh,0,"",0,m))}j.f=i
j.r=null},
$S:0}
C.et_.prototype={
$0(){var w,v=C.cE(),u=this.a,t=u.e
t=(t==null?null:C.kC(t.w))===!0?"marriage_sign_placed":"Signature"
w=C.er(A.bi,!1,4279310375,A.aF,t,4280640491,24,A.bp,A.a7,"",0.22,v,this.b.a,"","",0,!1,"",0,D.bg,4280172719,2,"",0,0,"",D.cl,D.lf,0.35,0.55,0.62)
A.d.M(u.gdv().z,w)
u.r=w.a},
$S:0}
C.esR.prototype={
$0(){var w,v,u,t,s,r,q,p=this.a,o=this.b
p.b36(o)
w=C.cE()
v=this.c
u=v.c
t=v.d
s=v.e
r=v.f
q=C.er(A.bi,!1,4279310375,A.aF,"marriage_sign_placed_"+A.a.ej(v.db,"marriage_sign_",""),4280640491,24,A.bp,A.a7,"",r,w,o.a,"","",0,!1,"",0,D.bg,4280172719,2,"",0,0,"",D.cl,D.lf,s,u,t)
A.d.M(p.gdv().z,q)
A.d.bt(p.gdv().z,new C.esQ(v))
p.r=null
p=p.e
if((p==null?null:p.w)==="hati_kiapo_uongozi"&&A.a.q(v.db,"rais")){p.toString
C.i88(p)}},
$S:0}
C.esQ.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.ewR.prototype={
$0(){var w=this.a,v=this.b
w.b36(v)
this.c.at=v.a
w.r=null},
$S:0}
C.eyI.prototype={
$0(){var w,v,u,t,s,r,q=4279673674,p=1483594
for(w=this.b.z,v=w.length,u=this.c,t=0;t<v;++t){s=w[t]
r=s.db
if(r==="marriage_locked_nim_akuna_deni"){s.r="AKUNA DENI"
s.Q=u?q:p}else if(r==="marriage_locked_nim_akuna_box")s.ch=u?q:p
else if(r==="marriage_locked_nim_akuna_tick"){s.r="\u2713"
s.Q=u?q:p}}this.a.r=null},
$S:0}
C.evc.prototype={
$0(){var w,v,u,t,s,r=this.b
A.d.bt(r.z,new C.evb())
for(r=r.z,w=r.length,v=this.c+0.001,u=0;u<w;++u){t=r[u]
s=t.d
if(s>v)t.d=s-0.043}this.a.r=null},
$S:0}
C.evb.prototype={
$1(d){var w=d.db
return w==="marriage_locked_nim_n_4"||w==="marriage_locked_nim_ul_4"||A.a.a0(w,"marriage_field_mahari_4:")},
$S:z+4}
C.etC.prototype={
$0(){var w=this.b
w.at=this.c
w.db="__kiapo_video__"
w=this.a
w.r=null
w.db=!1},
$S:0}
C.etD.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.tJ()},
$S:9}
C.esO.prototype={
$0(){var w=C.er(A.bi,!1,4279310375,A.aF,"HD Photo",4280640491,24,A.bp,A.a7,"",0.8,C.cE(),this.b,"","",0,!1,"",0,D.bg,4280172719,2,"",0,0,"",D.cl,D.lJ,0.8,0.1,0.1),v=this.a
A.d.M(v.gdv().z,w)
v.r=w.a},
$S:0}
C.euE.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.esX.prototype={
$0(){var w=this.a,v=this.b
A.d.M(w.gdv().z,v)
w.r=v.a},
$S:0}
C.et5.prototype={
$0(){return this.a.cx+=0.785398},
$S:0}
C.et6.prototype={
$0(){var w=this.b.hI(),v=C.cE(),u=A.k.E(w.c+0.04,0,0.92),t=A.k.E(w.d+0.04,0,0.92),s=w.e,r=w.f,q=w.r,p=w.w,o=w.x,n=w.y,m=w.z,l=w.Q,k=w.as,j=w.at,i=w.ay,h=w.ch,g=w.cx,f=C.er(k,w.cy,l,m,w.db,i,p,n,o,"",r,v,j,"","",w.dx,!1,"",g,w.ax,h,w.CW,q,w.fr,0,"",w.dy,w.b,s,u,t)
t=this.a
A.d.M(t.gdv().z,f)
t.r=f.a},
$S:0}
C.et7.prototype={
$0(){var w=this.a.gdv().z,v=this.b,u=A.d.bg(w,new C.et4(v))
if(u>=0&&u<w.length-1){A.d.cG(w,u)
A.d.c8(w,u+1,v)}},
$S:0}
C.et4.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.eti.prototype={
$0(){var w=this.a.gdv().z,v=this.b,u=A.d.bg(w,new C.et3(v))
if(u>0){A.d.cG(w,u)
A.d.c8(w,u-1,v)}},
$S:0}
C.et3.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.etl.prototype={
$0(){return this.a.as=A.bi},
$S:0}
C.etm.prototype={
$0(){return this.a.as=A.L},
$S:0}
C.etn.prototype={
$0(){return this.a.as=A.dT},
$S:0}
C.eto.prototype={
$0(){return this.a.cx+=3.14159},
$S:0}
C.etp.prototype={
$0(){return this.a.cx-=3.14159},
$S:0}
C.etq.prototype={
$1(d){return d.b===D.cQ},
$S:z+4}
C.etr.prototype={
$1(d){return d.length!==0},
$S:3}
C.et8.prototype={
$0(){var w=this.a,v=w.gdv().z,u=C.cE()
A.d.M(v,C.D7(w.gqz().c.j(0.18).l(),0.1,u,D.bg,0,2,1,0,0))
u=w.gdv().z
v=C.cE()
A.d.M(u,C.iY(A.bi,!1,w.gqz().d.l(),A.aF,18,A.bp,A.H,0.07,v,"Document Header",0,D.dh,0.9,0.05,0.02))},
$S:0}
C.et9.prototype={
$0(){var w,v=this.a,u=v.gdv().z,t=C.cE()
A.d.M(u,C.D7(v.gqz().c.j(0.12).l(),0.1,t,D.bg,0,2,1,0,0.9))
t=v.gdv().z
u=C.cE()
w=C.bD0()
A.d.M(t,C.iY(A.L,!1,v.gqz().e.l(),A.aF,12,A.bp,A.a7,0.06,u,"Footer \xb7 "+w,0,D.dh,0.9,0.05,0.92))},
$S:0}
C.eta.prototype={
$0(){A.d.M(this.a.gdv().z,C.D7(1727914055,0.12,C.cE(),D.bg,4294626325,2,0.76,0.12,0.35))},
$S:0}
C.etb.prototype={
$0(){var w=4279310375
A.d.M(this.a.gdv().z,C.D7(w,0.08,C.cE(),D.bg,w,2,0.5,0.2,0.4))},
$S:0}
C.etc.prototype={
$0(){var w=this.a,v=w.gdv().z,u=C.cE()
A.d.M(v,C.D7(w.gqz().c.j(0.35).l(),0.12,u,D.Db,4280640491,2,0.2,0.15,0.55))
A.d.M(w.gdv().z,C.iY(A.bi,!1,4279310375,A.aF,18,A.bp,A.a7,0.15,C.cE(),"Important note",0,D.qs,0.5,0.38,0.52))},
$S:0}
C.etd.prototype={
$0(){var w=this.a
A.d.M(w.gdv().z,C.D7(4294507260,0.78,C.cE(),D.bg,4291548641,1.5,0.84,0.08,0.1))
A.d.M(w.gdv().z,C.iY(A.bi,!1,4279179050,A.aF,16,A.bp,A.a7,0.7,C.cE(),"MEMO\n\nTo:\nFrom:\nDate: "+C.bD0()+"\n\nSubject:\n\nBody text\u2026",0,D.dh,0.76,0.12,0.14))},
$S:0}
C.ete.prototype={
$0(){var w=this.a
A.d.M(w.gdv().z,C.D7(4294897802,0.28,C.cE(),D.bg,4294626325,2,0.3,0.62,0.12))
A.d.M(w.gdv().z,C.iY(A.bi,!1,4285611794,A.aF,15,A.bp,A.a7,0.24,C.cE(),"Sticky note",0,D.aHs,0.26,0.64,0.14))},
$S:0}
C.etf.prototype={
$0(){var w=4280640491,v=this.a
A.d.M(v.gdv().z,C.D7(4293060848,0.04,C.cE(),D.bg,4291548641,2,0.8,0.1,0.48))
A.d.M(v.gdv().z,C.D7(w,0.04,C.cE(),D.bg,w,2,0.55,0.1,0.48))},
$S:0}
C.etg.prototype={
$0(){var w=4279310375,v=this.a
A.d.M(v.gdv().z,C.iY(A.bi,!1,w,A.aF,18,A.bp,A.a7,0.62,C.cE(),"Left column\n\n\u2022 Point A\n\u2022 Point B",0,D.Im,0.42,0.06,0.18))
A.d.M(v.gdv().z,C.iY(A.bi,!1,w,A.aF,18,A.bp,A.a7,0.62,C.cE(),"Right column\n\n\u2022 Point C\n\u2022 Point D",200,D.uK,0.42,0.52,0.18))},
$S:0}
C.eth.prototype={
$0(){var w=4279310375,v=this.a
A.d.M(v.gdv().z,C.D7(858088427,0.62,C.cE(),D.bg,4280640491,2,0.42,0.05,0.18))
A.d.M(v.gdv().z,C.D7(856004201,0.62,C.cE(),D.bg,4278556265,2,0.42,0.53,0.18))
A.d.M(v.gdv().z,C.iY(A.bi,!1,w,A.aF,20,A.bp,A.H,0.1,C.cE(),"Option A",0,D.dh,0.36,0.08,0.2))
A.d.M(v.gdv().z,C.iY(A.bi,!1,w,A.aF,20,A.bp,A.H,0.1,C.cE(),"Option B",0,D.dh,0.36,0.56,0.2))},
$S:0}
C.etj.prototype={
$0(){var w=4279310375,v=this.a
A.d.M(v.gdv().z,C.D7(4294967295,0.36,C.cE(),D.bg,w,2,0.24,0.38,0.28))
A.d.M(v.gdv().z,C.iY(A.L,!1,w,A.aF,14,A.bp,A.a7,0.12,C.cE(),"[ QR CODE ]",0,D.dh,0.24,0.38,0.4))},
$S:0}
C.etk.prototype={
$0(){return C.chc(this.b,D.Sq,this.a.gqz())},
$S:0}
C.euD.prototype={
$1(d){var w=this.b,v=w.dy,u=!D.a7J.q(0,d),t=this.a
return t.b8f(d,v===d,A.b_,this.c,new C.euC(t,u,d,w),u)},
$S:z+25}
C.euC.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p=t.b
if(p){w=3
break}else e=p
w=4
break
case 3:w=5
return B.b(t.a.oc(),$async$$0)
case 5:e=!e
case 4:if(e){w=1
break}s=t.a
r=s.c
if(r==null){w=1
break}q=t.c
C.bDN(r,new C.euB(s,t.d,q),q)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.euB.prototype={
$0(){return this.a.d6(new C.euA(this.b,this.c))},
$S:0}
C.euA.prototype={
$0(){return this.a.dy=this.b},
$S:0}
C.esY.prototype={
$0(){var w,v=this.a,u=v.gqz(),t=C.rD(4294967295,null,0,0,null,C.cE(),D.mR,"","","",D.dh),s=this.b
C.chc(t,s,u)
w=v.gdv()
if(w!=null&&s!==D.Da){t.e=w.e
t.f=w.f}A.d.c8(v.e.r,v.f+1,t);++v.f
v.r=null},
$S:0}
C.etG.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.a
p=q.c
if(p==null){w=1
break}s=q.a
r=s.c
s=s.d
w=3
return B.b(C.ieg(p,q.d,s,new C.etF(q),r),$async$$0)
case 3:w=q.c!=null?4:5
break
case 4:w=6
return B.b(q.tJ(),$async$$0)
case 6:case 5:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.etF.prototype={
$1(d){return this.bl4(d)},
bl4(d){var w=0,v=B.j(x.H),u=this,t
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.a
t.m(new C.etE(t,d))
w=2
return B.b(t.tJ(),$async$$1)
case 2:return B.h(null,v)}})
return B.i($async$$1,v)},
$S:z+87}
C.etE.prototype={
$0(){var w,v,u
for(w=J.aV(this.b),v=this.a;w.C();){u=w.gR(w)
A.d.c8(v.d,0,u)}},
$S:0}
C.etH.prototype={
$0(){return this.a.bJ8()},
$S:0}
C.etI.prototype={
$0(){return this.a.aQH("Class Presentation",!0)},
$S:0}
C.etJ.prototype={
$1(d){return this.a.bK4(d.b,this.b,d.a)},
$S:z+88}
C.euj.prototype={
$0(){var w,v=this.a
v.as=!1
w=v.c
w.toString
if(B.aH(w,A.bX,x.w).w.a.a<900)v.w=v.r=null},
$S:0}
C.ewu.prototype={
$1(d){return new B.D(new B.Q(0,0,0,B.aH(d,A.eL,x.w).w.f.d),new B.dY(new C.ewt(this.a,this.b),null),null)},
$S:62}
C.ewt.prototype={
$2(d,e){return B.oZ(new C.ews(this.a,this.b,d,e),!1,0.52,0.9,0.34,!1,null)},
$S:593}
C.ews.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u?A.au:A.c,s=B.I(u?A.bz:A.aM,A.r,1),r=B.p(v,v,A.f,v,v,new B.o(A.aZ,v,v,B.m(99),v,v,A.n),v,4,v,v,v,v,v,40),q=x.p,p=w.a
return B.p(v,B.x(B.a([A.R,r,new B.D(A.aj7,B.B(B.a([B.d("Format",v,v,v,v,v,v,B.l(v,v,u?A.c:A.M,v,v,v,v,v,v,v,v,17,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.b0,B.bK(!1,A.A8,v,v,!0,v,v,new C.ewq(w.c),v,v)],q),A.m,v,A.e,A.j,0,v,v),v),B.E(B.cq(B.a([p.aTq(u,!0,!0,new C.ewr(p,w.d))],q),e,D.bvM,v,v,A.ag,!1),1)],q),A.m,v,A.e,A.j,0,A.p),A.f,v,v,new B.o(t,v,s,A.kS,v,v,A.n),v,v,v,v,v,v,v,v)},
$S:112}
C.ewq.prototype={
$0(){B.a3(this.a,!1).N(null)
return null},
$S:0}
C.ewr.prototype={
$0(){this.b.$1(new C.ewo())
var w=this.a
if(w.c!=null)w.m(new C.ewp())},
$S:0}
C.ewo.prototype={
$0(){},
$S:0}
C.ewp.prototype={
$0(){},
$S:0}
C.ey2.prototype={
$3(d,e,f){return A.bJ},
$C:"$3",
$R:3,
$S:97}
C.ey3.prototype={
$4(d,e,f,g){var w=A.cu.aw(0,e.gp(0))
return B.d6(B.ea(A.A,new C.azi(this.a,null),0.94+w*0.06,null,null),w)},
$S:455}
C.ey4.prototype={
$3(d,e,f){return A.bJ},
$C:"$3",
$R:3,
$S:97}
C.ey5.prototype={
$4(d,e,f,g){var w=A.cu.aw(0,e.gp(0))
return B.d6(B.ea(A.A,new C.bdj(this.a.b,null),0.94+w*0.06,null,null),w)},
$S:455}
C.ey6.prototype={
$0(){return A.d.c8(this.a.d,0,C.W9(this.b))},
$S:0}
C.et2.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a.fy
o===$&&B.c()
o=o.x
o===$&&B.c()
w=A.dB.aw(0,o)
o=B.m(22)
v=B.m(22)
u=this.b
t=x.O
s=u?B.a([A.c.j(0.1+w*0.04),A.au.j(0.72)],t):B.a([A.c.j(0.88),A.pL.j(0.75)],t)
r=B.I(A.b2.j(0.28+w*0.22),A.r,1.3)
q=w*0.2
t=B.a([A.b2.j(0.35+q),A.c9.j(0.18),A.K],t)
q=B.I(A.b2.j(0.45+q),A.r,1)
t=B.p(p,B.X(A0.a0v,u?A.ae:A.M,p,p,p,28),A.f,p,p,new B.o(p,p,q,p,p,new B.c0(A.A,0.5,A.x,p,0,t,p,p),A.a5),p,58,p,p,p,p,p,58)
q=B.d("No presentations yet",p,p,p,p,p,p,B.l(p,p,u?A.c:A.M,p,p,p,p,p,p,p,p,p,p,p,A.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
return B.bx(o,B.u8(A.fD,B.p(p,B.x(B.a([t,A.aA,q,A.am,B.d("Open Blank or Class Template to start \u2014 nothing is saved until you edit.",p,p,p,p,p,p,B.l(p,p,u?A.aB:A.al,p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),A.L,p,p)],x.p),A.m,p,A.e,A.j,0,A.p),A.f,p,p,new B.o(p,p,r,v,p,new B.a9(A.ay,A.aD,A.x,s,p,p),A.n),p,p,p,p,A.ey,p,p,1/0),14,!1),A.aq)},
$S:328}
C.eu7.prototype={
$1(d){return A.a.i(d)},
$S:14}
C.eu8.prototype={
$1(d){return d.length!==0},
$S:3}
C.eu9.prototype={
$1(d){var w
if(A.a.a0(d,"Updated"))w=A.jR
else{w=B.af("^\\d+ slides?$",!0,!1,!1,!1)
w=w.b.test(d)?A.a13:A.BT}return w},
$S:679}
C.euc.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.a,j=k.fy
j===$&&B.c()
j=j.x
j===$&&B.c()
w=A.dB.aw(0,A.k.F(j+m.b*0.12,1))
j=B.m(20)
v=m.c
u=B.m(20)
t=m.d
s=x.O
s=t?B.a([A.c.j(0.1+w*0.04),A.au.j(0.78)],s):B.a([A.c.j(0.92),A.n2.j(0.82)],s)
r=m.e
q=A.d.gI(r)
p=t?0.34:0.26
p=B.I(q.j(p+w*0.22),A.r,1.25)
q=B.m(10)
q=B.p(l,B.X(C.kC(v.w)?A.w7:A.qf,A.c,l,l,l,22),A.f,l,l,new B.o(l,l,l,q,l,new B.a9(A.a3,A.a8,A.x,r,l,l),A.n),l,36,l,l,l,l,l,52)
o=v.b
o=B.d(o.toUpperCase(),l,l,l,l,l,l,B.l(l,l,t?A.c:A.M,l,l,l,l,l,l,l,l,l,l,l,A.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
n=v.w
if(n==="marriage_agreement")n="Hati ya Kuhowesha \u2022 Updated "+k.Q4(v.f)
else if(n==="hati_kuhowa")n="Hati ya Kuhowa \u2022 Updated "+k.Q4(v.f)
else if(n==="hati_kuhoweya")n="Hati ya Kuhoweya \u2022 Updated "+k.Q4(v.f)
else if(n==="hati_kiapo_uongozi"){n=v.x
if(A.a.i(n==null?"":n).length===0)n="Civic Registry"
n="Kiapo cha Uongozi \u2022 "+B.w(n)+" \u2022 Updated "+k.Q4(v.f)}else n=""+v.r.length+" slides \u2022 Updated "+k.Q4(v.f)
r=k.bK2(n,A.d.gI(r),t)
return B.p(l,B.bx(j,new B.a83(B.aF(!1,A.a1,!0,l,B.aM(!1,l,!0,B.p(l,B.dM(!1,A.MW,l,l,!0,l,l,l,!0,l,q,l,l,l,l,l,!1,l,l,l,l,l,r,l,o,l,B.aJ(l,l,l,l,B.X(A.oa,t?A.aB:A.bL,l,l,l,l),l,l,l,new C.eua(k,v,t),l,l,l,l,"Project options",l),l),A.f,l,l,new B.o(l,l,p,u,l,new B.a9(A.ay,A.aD,A.x,s,l,l),A.n),l,l,l,l,l,l,l,l),l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.eub(k,v),l,l,l,l,l,l,l),A.f,A.K,0,l,l,l,l,l,A.ah),l),A.aq),A.f,l,l,l,l,l,l,A.d1,l,l,l,l)},
$S:94}
C.eub.prototype={
$0(){return this.a.afp(this.b)},
$S:0}
C.eua.prototype={
$0(){return this.a.AT(this.b,this.c)},
$S:0}
C.evD.prototype={
$0(){var w=this.a
w.b6P()
w.m(new C.evC())},
$S:0}
C.evC.prototype={
$0(){},
$S:0}
C.evE.prototype={
$1(d){return this.a.ajq(this.b.a,d)},
$S:2}
C.evF.prototype={
$0(){this.a.d6(new C.evB(this.b))},
$S:0}
C.evB.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.O)?A.cw:A.O},
$S:0}
C.evG.prototype={
$0(){this.a.d6(new C.evA(this.b))},
$S:0}
C.evA.prototype={
$0(){var w=this.a
return w.y=w.y===A.cE?A.bp:A.cE},
$S:0}
C.evH.prototype={
$0(){this.a.d6(new C.evz(this.b))},
$S:0}
C.evz.prototype={
$0(){var w=this.a,v=w.z
return w.z=1===v.a?A.aF:A.mW},
$S:0}
C.evI.prototype={
$0(){this.a.d6(new C.evy(this.b))},
$S:0}
C.evy.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
C.evJ.prototype={
$0(){var w=this.a
w.d6(new C.evx(w,this.b))},
$S:0}
C.evx.prototype={
$0(){var w=this.b
return w.as=this.a.c4k(w.as)},
$S:0}
C.evK.prototype={
$0(){return this.a.d6(new C.evw(this.b))},
$S:0}
C.evw.prototype={
$0(){var w=this.a
return w.w=A.k.E(w.w+2,10,96)},
$S:0}
C.evL.prototype={
$0(){return this.a.d6(new C.evv(this.b))},
$S:0}
C.evv.prototype={
$0(){var w=this.a
return w.w=A.k.E(w.w-2,10,96)},
$S:0}
C.evo.prototype={
$0(){return this.a.a2l(this.b.a)},
$S:0}
C.evp.prototype={
$0(){this.a.a_R()
return null},
$S:0}
C.evq.prototype={
$0(){var w=this.a,v=w.c
v.toString
if(B.aH(v,A.bX,x.w).w.a.a<900)w.afI()
else w.m(new C.evn(w))},
$S:0}
C.evn.prototype={
$0(){return this.a.as=!0},
$S:0}
C.evr.prototype={
$0(){this.a.d6(new C.evm(this.b))},
$S:0}
C.evm.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.O)?A.cw:A.O},
$S:0}
C.evs.prototype={
$0(){return this.a.d6(new C.evl(this.b))},
$S:0}
C.evl.prototype={
$0(){var w=this.a
return w.w=A.k.E(w.w+2,10,96)},
$S:0}
C.evt.prototype={
$0(){return this.a.d6(new C.evk(this.b))},
$S:0}
C.evk.prototype={
$0(){var w=this.a
return w.w=A.k.E(w.w-2,10,96)},
$S:0}
C.evu.prototype={
$0(){return this.a.aA9(null)},
$S:0}
C.euw.prototype={
$0(){this.a.DG()
return null},
$S:0}
C.eux.prototype={
$0(){this.a.aap()
return null},
$S:0}
C.euz.prototype={
$1(d){return this.bl5(d)},
bl5(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
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
return B.b(t.a.K8(),$async$$1)
case 10:w=4
break
case 6:s=t.a
r=s.e
if(r==null){w=1
break}q=s.c
q.toString
w=11
return B.b(B.bT(A.au,null,new C.eur(r),q,!0,!0,!1,null,!1,!1,x.S),$async$$1)
case 11:p=f
if(p!=null)s.d6(new C.eus(r,p))
w=4
break
case 7:s=t.a
r=s.e
if(r==null){w=1
break}s.d6(new C.eut(r))
s=s.c.J(x.q).f
s.S(B.b3(null,null,null,null,null,A.t,null,B.d(r.ay?"Video motion on \u2014 press Play to watch it like a video.":"Video motion off.",null,null,null,null,null,null,null,null,null,null),null,A.V,null,null,null,null,null,null,null,null,null,null))
w=4
break
case 8:s=t.a
r=s.e
if(r==null){w=1
break}s.d6(new C.euu(r))
s=s.c.J(x.q).f
s.S(B.b3(null,null,null,null,null,A.t,null,B.d(r.ch?"Non-stop on \u2014 the show starts over after the last slide.":"Non-stop off \u2014 the show stops on the last slide.",null,null,null,null,null,null,null,null,null,null),null,A.V,null,null,null,null,null,null,null,null,null,null))
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
return B.b(C.hsn(q,new C.EI(o,n,m,l==null?"":l)),$async$$1)
case 12:p=f
if(p==null||s.c==null){w=1
break}s.d6(new C.euv(r,p))
s=s.c.J(x.q).f
q=p.a
if(q.length===0)q="No ending celebration."
else{q=C.ah6(q)
q=B.w(q==null?null:q.b)+" will play after your last slide."}s.S(B.b3(null,null,null,null,null,A.t,null,B.d(q,null,null,null,null,null,null,null,null,null,null),null,A.V,null,null,null,null,null,null,null,null,null,null))
w=4
break
case 4:case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:95}
C.eur.prototype={
$1(d){var w,v,u,t,s,r=null,q=B.a([D.ehL],x.p)
for(w=[3,5,8,10,15,20,30,60],v=this.a,u=0;u<8;++u){t=w[u]
s=v.e===t?D.bQj:r
q.push(B.dM(!1,r,r,r,!0,r,r,r,!0,r,r,r,r,r,r,new C.euq(d,t),!1,r,r,r,r,r,r,r,new B.y(""+t+" seconds",r,A.df,r,r,r,r,r,r,r,r,r),r,s,r))}return B.bm(!0,B.x(q,A.m,r,A.e,A.P,0,A.p),!0,!1,A.af,!0,!0)},
$S:26}
C.euq.prototype={
$0(){B.a3(this.a,!1).N(this.b)
return null},
$S:0}
C.eus.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eut.prototype={
$0(){var w=this.a
return w.ay=!w.ay},
$S:0}
C.euu.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
C.euv.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.db=u.length===0?null:u
w.dx=v.b
w.dy=v.c
v=v.d
w.fr=v.length===0?null:v},
$S:0}
C.euy.prototype={
$1(d){var w,v,u,t=null,s=this.a.e,r=s==null,q=r?t:s.e,p=x.N
q=B.zW(B.d("Timer: "+(q==null?5:q)+"s",t,t,t,t,t,t,t,t,t,t),48,"timer",p)
w=r?t:s.ay
v=B.zW(B.d("Video motion: "+(w===!0?"On":"Off"),t,t,t,t,t,t,t,t,t,t),48,"motion",p)
w=r?t:s.ch
u=B.zW(B.d("Non-stop loop: "+(w===!0?"On":"Off"),t,t,t,t,t,t,t,t,t,t),48,"loop",p)
s=C.ah6(r?t:s.db)
s=s==null?t:s.b
return B.a([D.emP,q,v,u,B.zW(B.d("Ending celebration: "+(s==null?"None":s),t,t,t,t,t,t,t,t,t,t),48,"finale",p)],x.gx)},
$S:136}
C.eyO.prototype={
$0(){var w=this.a,v=w.e
if(v!=null){w=w.c
w.toString
C.bCY(w,v)}},
$S:0}
C.eyP.prototype={
$0(){this.a.DG()
return null},
$S:0}
C.evO.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.z===d,r=B.m(999),q=s?D.c_P:u
if(s)w=u
else w=this.b?A.c.j(0.05):A.bN
if(s)v=A.c
else v=this.b?A.aQ:A.bs
return new B.D(A.fw,B.aB(u,B.d9(u,B.d(d,u,u,u,u,u,u,B.l(u,u,v,u,u,u,u,u,u,u,u,12,u,u,A.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,A.b7,new B.o(w,u,u,r,u,q,A.n),A.eM,u,u,u,A.lz,u,u,u),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.evN(t,d),u,u,u,u,u,u,!1,A.a4),u)},
$S:141}
C.evN.prototype={
$0(){var w=this.a
return w.m(new C.evM(w,this.b))},
$S:0}
C.evM.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.evP.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.e
if(s==null)s=u
else{s=s.CW
s=(s==null?"":s).length!==0}w=s===!0
v=w?G.a3Y:E.axT
s=w?"Tell the AI what to change or add":"Type it \u2014 AI creates the slides"
t=w?t.gbNB():t.gbJt()
return B.hc(B.aB(u,B.p(u,D.ao_,A.f,u,u,new B.o(u,u,u,u,B.a([new B.ac(0,A.G,A.d.gI(v).j(0.45),A.J,10)],x.V),new B.a9(A.a3,A.a8,A.x,v,u,u),A.a5),u,34,u,u,u,u,u,34),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,t,u,u,u,u,u,u,!1,A.a4),u,s,u,u)},
$S:1709}
C.evQ.prototype={
$0(){var w=this.a,v=w.c
v.toString
return C.idw(v,w.a.c)},
$S:0}
C.exc.prototype={
$0(){return this.b.vl(this.a.a)},
$S:0}
C.exd.prototype={
$0(){return this.a.vl(D.mR)},
$S:0}
C.exe.prototype={
$0(){return this.a.vl(D.Ik)},
$S:0}
C.exp.prototype={
$0(){return this.a.vl(D.Il)},
$S:0}
C.exA.prototype={
$0(){return this.a.vl(D.Ij)},
$S:0}
C.exL.prototype={
$0(){return this.a.qj("lab_report")},
$S:0}
C.exS.prototype={
$0(){return this.a.qj("rubric")},
$S:0}
C.exT.prototype={
$0(){return this.a.qj("minutes")},
$S:0}
C.exU.prototype={
$0(){return this.a.qj("agenda")},
$S:0}
C.exV.prototype={
$0(){return this.a.qj("timeline")},
$S:0}
C.exW.prototype={
$0(){return this.a.qj(this.b.a)},
$S:0}
C.exf.prototype={
$0(){this.a.VW()
return null},
$S:0}
C.exg.prototype={
$0(){this.a.VQ()
return null},
$S:0}
C.exh.prototype={
$0(){return this.a.qj("table")},
$S:0}
C.exi.prototype={
$0(){return this.a.qj("sticky")},
$S:0}
C.exj.prototype={
$0(){return this.a.qj("divider")},
$S:0}
C.exk.prototype={
$0(){return this.a.qj("header_bar")},
$S:0}
C.exl.prototype={
$0(){return this.a.pe(D.bg)},
$S:0}
C.exm.prototype={
$0(){return this.a.pe(D.eQ)},
$S:0}
C.exn.prototype={
$0(){return this.a.pe(D.jX)},
$S:0}
C.exo.prototype={
$0(){return this.a.pe(D.Db)},
$S:0}
C.exq.prototype={
$0(){return this.a.pe(D.jY)},
$S:0}
C.exr.prototype={
$0(){return this.a.pe(D.lg)},
$S:0}
C.exs.prototype={
$0(){return this.a.pe(D.fy)},
$S:0}
C.ext.prototype={
$0(){this.a.Hr()
return null},
$S:0}
C.exu.prototype={
$0(){this.a.Nu()
return null},
$S:0}
C.exv.prototype={
$0(){return this.a.qj("quote")},
$S:0}
C.exw.prototype={
$0(){return this.a.a8y()},
$S:0}
C.exx.prototype={
$0(){this.a.a_X()
return null},
$S:0}
C.exy.prototype={
$0(){var w=this.a
return w.m(new C.ex2(w))},
$S:0}
C.ex2.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.exz.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return B.b(s.oc(),$async$$0)
case 3:if(!e){w=1
break}if(s.c==null){w=1
break}s.m(new C.exa(s))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.exa.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.exB.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=r.e
q=q==null?s:q.c
w=d.a
v=q===w&&r.k_()==null&&!r.Q
q=A.a.i(w)
w=d.b
if(D.a7K.q(0,q))w+=" (Pro)"
u=d.r
if(u==null)u=d.c
u=B.a([d.f,u],x.O)
t=v?d.c:A.aZ
u=B.a([B.p(s,s,A.f,s,s,new B.o(s,s,B.I(t,A.r,v?2.5:1),s,s,new B.a9(A.a3,A.a8,A.x,u,s,s),A.a5),s,26,s,s,s,s,s,26)],x.p)
if(D.a7K.q(0,q))u.push(B.ao(s,B.p(s,D.Ox,A.f,s,s,D.Er,s,12,s,s,s,s,s,12),s,s,s,-2,-2,s))
return new B.D(A.fw,B.aB(s,B.hc(new B.an(A.a_,s,A.aa,A.f,u,s),s,w,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.ex9(r,d),s,s,s,s,s,s,!1,A.a4),s)},
$S:z+89}
C.ex9.prototype={
$0(){this.a.a8Q(this.b)
return null},
$S:0}
C.exC.prototype={
$0(){this.a.a8P(this.b)
return null},
$S:0}
C.exD.prototype={
$1(d){var w,v,u,t,s,r=null,q=C.hJZ(d),p=this.a,o=B.m(8),n=p.gdv()
n=n==null?r:n.x
w=d.a
n=n===w?A.bj:A.aZ
v=p.gdv()
n=B.I(n,A.r,(v==null?r:v.x)===w?2.5:1)
u=B.m(8)
t=B.m(7)
s=C.rD(4294967295,r,0,0,r,"preview_"+w,D.qr,"","","",D.dh)
C.hpc(s,w)
w=x.p
u=B.a([B.bx(o,B.p(r,B.bx(t,C.hqx(s),A.aq),A.f,r,r,new B.o(r,r,n,u,r,r,A.n),r,44,r,r,r,r,r,72),A.aq)],w)
if(q)u.push(B.ao(r,B.p(r,D.aoy,A.f,r,r,D.Er,r,14,r,r,r,r,r,14),r,r,r,2,2,r))
return new B.D(A.it,B.aB(r,B.x(B.a([new B.an(A.a_,r,A.aa,A.t,u,r),A.cK,B.d(d.b,r,r,r,r,r,r,B.l(r,r,this.b?A.aB:A.al,r,r,r,r,r,r,r,r,9,r,r,A.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],w),A.m,r,A.e,A.j,0,A.p),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.ex8(p,q,d),r,r,r,r,r,r,!1,A.a4),r)},
$S:z+90}
C.ex8.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.gdv()
if(r==null){w=1
break}q=t.b||s.Q
if(q){w=3
break}else e=q
w=4
break
case 3:w=5
return B.b(s.oc(),$async$$0)
case 5:e=!e
case 4:if(e){w=1
break}if(s.c==null){w=1
break}s.d6(new C.ewZ(r,t.c))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.ewZ.prototype={
$0(){return C.hpc(this.a,this.b.a)},
$S:0}
C.exb.prototype={
bl6(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$$2=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=!D.a7J.q(0,d)
if(s){w=3
break}else g=s
w=4
break
case 3:w=5
return B.b(t.a.oc(),$async$$2)
case 5:g=!g
case 4:if(g){w=1
break}if(t.a.c==null){w=1
break}e.$0()
case 1:return B.h(u,v)}})
return B.i($async$$2,v)},
$2(d,e){return this.bl6(d,e)},
$S:z+91}
C.exX.prototype={
$4(d,e,f,g){var w=null,v=B.S(d).k("N<1,v>")
v=B.C(new B.N(d,new C.exZ(this.a,e,g,this.b,f),v),v.k("ak.E"))
return B.cd(B.B(v,A.m,w,A.e,A.j,0,w,w),A.t,w,A.y,w,w,w,w,A.aN)},
$S:z+92}
C.exZ.prototype={
$1(d){var w=this
return w.a.b8f(d,w.b===d,w.c,w.d,new C.exY(w.e,d),!D.a7J.q(0,d))},
$S:z+25}
C.exY.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.exE.prototype={
$1(d){this.b.$2(d,new C.ex7(this.a,d,this.c))
return null},
$S:z+26}
C.ex7.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.bDN(u,new C.ewY(v,this.c,w),w)},
$S:0}
C.ewY.prototype={
$0(){return this.a.d6(new C.ewW(this.b,this.c))},
$S:0}
C.ewW.prototype={
$0(){return this.a.dy=this.b},
$S:0}
C.exF.prototype={
$1(d){this.b.$2(d,new C.ex6(this.a,d))
return null},
$S:z+26}
C.ex6.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.fSm(u,new C.ewX(v,w),w)},
$S:0}
C.ewX.prototype={
$0(){var w=this.a
return w.d6(new C.ewV(w,this.b))},
$S:0}
C.ewV.prototype={
$0(){return this.a.gdv().r=this.b},
$S:0}
C.exG.prototype={
$0(){var w=this.a
return w.m(new C.ex5(w))},
$S:0}
C.ex5.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
C.exH.prototype={
$0(){var w=this.a,v=w.e
if(v!=null){w=w.c
w.toString
C.bCY(w,v)}},
$S:0}
C.exI.prototype={
$0(){this.a.Id()
return null},
$S:0}
C.exJ.prototype={
$0(){return this.a.a8y()},
$S:0}
C.exK.prototype={
$0(){var w=this.a,v=w.k_()
if(v!=null&&v.b===D.cQ)w.d6(new C.ex4(v))},
$S:0}
C.ex4.prototype={
$0(){var w=this.a
w.f=A.k.E(w.f*1.25,0.08,1.8)
w.e=A.k.E(w.e*1.1,0.08,1.8)},
$S:0}
C.exM.prototype={
$0(){this.a.DG()
return null},
$S:0}
C.exN.prototype={
$0(){var w=this.a,v=w.e
v.toString
w.Fk(v,!0)
return null},
$S:0}
C.exO.prototype={
$0(){this.a.d6(new C.ex3(this.b))},
$S:0}
C.ex3.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.O)?A.cw:A.O},
$S:0}
C.exP.prototype={
$0(){this.a.d6(new C.ex1(this.b))},
$S:0}
C.ex1.prototype={
$0(){var w=this.a
return w.y=w.y===A.cE?A.bp:A.cE},
$S:0}
C.exQ.prototype={
$0(){this.a.d6(new C.ex0(this.b))},
$S:0}
C.ex0.prototype={
$0(){var w=this.a,v=w.z
return w.z=1===v.a?A.aF:A.mW},
$S:0}
C.exR.prototype={
$0(){this.a.d6(new C.ex_(this.b))},
$S:0}
C.ex_.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
C.etB.prototype={
$1(d){return this.bl3(d)},
bl3(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.b
if(r){w=3
break}else f=r
w=4
break
case 3:w=5
return B.b(t.a.oc(),$async$$1)
case 5:f=!f
case 4:if(f){w=1
break}s=t.a
if(s.c==null){w=1
break}s.d6(new C.etA(s,t.c))
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:177}
C.etA.prototype={
$0(){return this.a.e.d=this.b},
$S:0}
C.eyj.prototype={
$0(){var w=this.a
return w.d6(new C.eyi(w,this.b))},
$S:0}
C.eyi.prototype={
$0(){var w,v=this.b,u=v.w
if(!(u>0)){w=this.a.e
w=w==null?null:w.e
u=w==null?5:w}v.w=A.o.E(u-1,1,120)},
$S:0}
C.eyk.prototype={
$0(){var w=this.a
return w.d6(new C.eyh(w,this.b))},
$S:0}
C.eyh.prototype={
$0(){var w,v=this.b,u=v.w
if(!(u>0)){w=this.a.e
w=w==null?null:w.e
u=w==null?5:w}v.w=A.o.E(u+1,1,120)},
$S:0}
C.euJ.prototype={
$0(){return this.a.d6(new C.euI(this.b))},
$S:0}
C.euI.prototype={
$0(){var w=this.a
return w.w=A.k.E(w.w-2,10,96)},
$S:0}
C.euK.prototype={
$0(){return this.a.d6(new C.euH(this.b))},
$S:0}
C.euH.prototype={
$0(){var w=this.a
return w.w=A.k.E(w.w+2,10,96)},
$S:0}
C.evg.prototype={
$1(d){var w=x.gh
w=B.C(new B.N(D.aqd,new C.evf(),w),w.k("ak.E"))
return w},
$S:z+94}
C.evf.prototype={
$1(d){var w=null
return B.zW(B.d(d.b,w,w,w,w,w,w,A.mi,w,w,w),48,d,x.fO)},
$S:z+95}
C.eyw.prototype={
$2(d,e){var w=this.a,v=w?0:8
return new B.a7(v,w?8:0,null,null)},
$S:36}
C.eyv.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=null,p=r.a,o=e===p.f,n=p.km()?q:new C.eyt(p,r.b,d,e),m=r.c,l=m?1/0:112
m=m?72:64
w=B.m(8)
if(o)v=A.bj
else v=r.d?A.aZ:A.cr
v=B.I(v,A.r,o?2:1)
u=r.d?A.cp:A.c
t=B.bU(0,C.hqx(r.b.r[e]),0,0,0)
s=B.m(4)
return B.aB(q,B.p(q,new B.an(A.a_,q,A.aa,A.t,B.a([t,B.ao(4,B.p(q,B.d(""+(e+1),q,q,q,q,q,q,A.nB,q,q,q),A.f,q,q,new B.o(A.aW,q,q,s,q,q,A.n),q,q,q,q,A.ak1,q,q,q),q,q,4,q,q,q)],x.p),q),A.f,q,q,new B.o(u,q,v,w,q,q,A.n),q,m,q,q,q,q,q,l),A.y,!1,q,q,q,q,q,q,q,q,n,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.eyu(p,e),q,q,q,q,q,q,!1,A.a4)},
$S:84}
C.eyu.prototype={
$0(){var w=this.a
return w.m(new C.eyp(w,this.b))},
$S:0}
C.eyp.prototype={
$0(){var w=this.a
w.f=this.b
w.r=null
w.Kh()},
$S:0}
C.eyt.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.b
if(q.r.length<=1){w=1
break}s=t.d
w=3
return B.b(B.bT(null,null,new C.eyq(s,q),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:r=e
if(r==="dup"){q=t.a
q.m(new C.eyr(q,s))
q.aS9()}else if(r==="del"){q=t.a
q.m(new C.eys(q,s))
q.aRi()}else if(r==="up")t.a.b3j(s,s-1)
else if(r==="down")t.a.b3j(s,s+1)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eyq.prototype={
$1(d){var w=null,v=B.a([B.dM(!1,w,w,w,!0,w,w,w,!0,w,D.bS_,w,w,w,w,new C.eyl(d),!1,w,w,w,w,w,w,w,D.fqZ,w,w,w),B.dM(!1,w,w,w,!0,w,w,w,!0,w,D.bRT,w,w,w,w,new C.eym(d),!1,w,w,w,w,w,w,w,A.wU,w,w,w)],x.p),u=this.a
if(u>0)v.push(B.dM(!1,w,w,w,!0,w,w,w,!0,w,D.bR9,w,w,w,w,new C.eyn(d),!1,w,w,w,w,w,w,w,D.fza,w,w,w))
if(u<this.b.r.length-1)v.push(B.dM(!1,w,w,w,!0,w,w,w,!0,w,D.bTd,w,w,w,w,new C.eyo(d),!1,w,w,w,w,w,w,w,D.fqO,w,w,w))
return B.bm(!0,B.x(v,A.m,w,A.e,A.P,0,A.p),!0,!1,A.af,!0,!0)},
$S:26}
C.eyl.prototype={
$0(){B.a3(this.a,!1).N("dup")
return null},
$S:0}
C.eym.prototype={
$0(){B.a3(this.a,!1).N("del")
return null},
$S:0}
C.eyn.prototype={
$0(){B.a3(this.a,!1).N("up")
return null},
$S:0}
C.eyo.prototype={
$0(){B.a3(this.a,!1).N("down")
return null},
$S:0}
C.eyr.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eys.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eyx.prototype={
$0(){return this.a.a8y()},
$S:0}
C.eu0.prototype={
$0(){var w=this.a
w.b6P()
w.aA9(null)},
$S:0}
C.eu_.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=B.m(4),n=B.a([new B.ac(0,A.G,A.w.j(0.35),A.dq,24)],x.V),m=this.b
if(m.f!=null){w=B.b1(m.e)
v=m.f
v.toString
v=new B.a9(A.ay,A.aD,A.x,B.a([w,B.b1(v)],x.O),p,p)
w=v}else w=p
v=m.f==null?B.b1(m.e):p
u=m.x
t=m.y
s=B.m(4)
if(m.f!=null){r=B.b1(m.e)
q=m.f
q.toString
q=new B.a9(A.ay,A.aD,A.x,B.a([r,B.b1(q)],x.O),p,p)
r=q}else r=p
s=B.a([B.bx(s,B.c1(A.kM,new B.o(m.f==null?B.b1(m.e):p,p,p,p,p,r,A.n),A.bf),A.aq)],x.p)
r=m.z
q=this.c
A.d.v(s,new B.N(r,new C.etZ(this.a,e.b,e.d,q),B.S(r).k("N<1,v>")))
if(m.z.length===0)s.push(B.at(B.d("Use Insert \u2192 Text Box, Picture, or Shapes",p,p,p,p,p,p,B.l(p,p,q?A.aB:A.bL,p,p,p,p,p,p,p,p,p,p,p,A.a7,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p))
return B.c1(new B.an(A.a_,p,A.aa,A.f,s,new B.cs("canvas_"+m.a+"_"+u+"_"+t,x.W)),new B.o(v,p,p,o,n,w,A.n),A.bf)},
$S:472}
C.etZ.prototype={
$1(d){var w=this
return w.a.bFs(d,w.b,w.c,w.d)},
$S:z+23}
C.etO.prototype={
$0(){var w=this
if(w.b){w.a.NC(w.c)
return}if(w.d){w.a.a8w(w.c)
return}if(w.e){w.a.ah_(w.c)
return}if(w.f)w.a.b7n(w.c)},
$S:0}
C.etP.prototype={
$0(){this.a.NC(this.b)
return null},
$S:0}
C.etQ.prototype={
$0(){return this.a.a2l(this.b.a)},
$S:0}
C.etR.prototype={
$1(d){var w=this,v=w.a,u=w.b
if(v.w===u.a)return
v.m(new C.etN(u,d,w.c,w.d))
v.HS()
v.on()
v.pv()},
$S:21}
C.etN.prototype={
$0(){var w=this,v=w.a,u=w.b.d
v.c=A.k.E(v.c+u.a/w.c,-0.3,1.2)
v.d=A.k.E(v.d+u.b/w.d,-0.3,1.2)},
$S:0}
C.etS.prototype={
$1(d){return this.a.ajq(this.b.a,d)},
$S:2}
C.etU.prototype={
$0(){var w,v,u=this
if(u.b){w=u.c
if(!C.h3M(w))u.a.NC(w)
return}if(!u.d)return
w=u.a
v=u.c
if(w.w===v.a)return
w.b7n(v)},
$S:0}
C.etT.prototype={
$0(){return this.a.a2l(this.b.a)},
$S:0}
C.etV.prototype={
$1(d){var w=this,v=w.a
v.m(new C.etM(w.b,d,w.c,w.d))
v.HS()
v.on()
v.pv()},
$S:21}
C.etM.prototype={
$0(){var w=this,v=w.a,u=w.b.d
v.e=A.k.E(v.e+u.a/w.c,0.04,1.8)
u=u.b
v.f=A.k.E(v.f+u/w.d,0.04,1.8)
if(v.b===D.cQ)v.w=A.k.E(v.w+u*0.15,10,120)},
$S:0}
C.etW.prototype={
$1(d){var w=this.a
w.m(new C.etL(this.b,d))
w.HS()
w.on()
w.pv()},
$S:223}
C.etL.prototype={
$0(){var w=this.a,v=this.b.d
w.e=A.k.E(w.e*v,0.04,1.8)
w.f=A.k.E(w.f*v,0.04,1.8)
if(w.b===D.cQ)w.w=A.k.E(w.w*v,10,120)},
$S:0}
C.etX.prototype={
$0(){var w=this.a
w.m(new C.etK(this.b))
w.HS()
w.on()
w.pv()},
$S:0}
C.etK.prototype={
$0(){this.a.r=C.hq1()},
$S:0}
C.etY.prototype={
$0(){return this.a.a2l(this.b.a)},
$S:0}
C.evS.prototype={
$0(){var w=this.a
return w.m(new C.evR(w))},
$S:0}
C.evR.prototype={
$0(){return this.a.y=!1},
$S:0}
C.evT.prototype={
$1(d){return this.a.cDu(this.b.a,d)},
$S:2}
C.euX.prototype={
$1(d){var w
this.a.d6(d)
w=this.b
if(w!=null)w.$0()},
$S:170}
C.euY.prototype={
$1(d){return this.a.$1(new C.euW(this.b,d))},
$S:7}
C.euW.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.euZ.prototype={
$1(d){return this.a.$1(new C.euV(this.b,d))},
$S:7}
C.euV.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.ev_.prototype={
$1(d){return this.a.$1(new C.euU(this.b,d))},
$S:7}
C.euU.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.ev0.prototype={
$1(d){return this.a.$1(new C.euT(this.b,d))},
$S:7}
C.euT.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.ev1.prototype={
$1(d){return this.a.$1(new C.euS(this.b,d))},
$S:7}
C.euS.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.ev2.prototype={
$1(d){return this.b.$1(new C.euR(this.a,this.c))},
$S:8}
C.euR.prototype={
$0(){return this.b.go=this.a.a},
$S:0}
C.ev3.prototype={
$1(d){return this.b.$1(new C.euQ(this.a,this.c))},
$S:8}
C.euQ.prototype={
$0(){return this.b.id=this.a.a},
$S:0}
C.ev4.prototype={
$1(d){var w=null,v=this.b,u=B.b1(d),t=v.Q===d,s=t?A.bj:A.cU
return B.aB(w,B.p(w,w,A.f,w,w,new B.o(u,w,B.I(s,A.r,t?2:1),w,w,w,A.a5),w,24,w,w,w,w,w,24),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.euP(this.a,v,d),w,w,w,w,w,w,!1,A.a4)},
$S:384}
C.euP.prototype={
$0(){return this.a.$1(new C.euM(this.b,this.c))},
$S:0}
C.euM.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.ev5.prototype={
$1(d){return this.a.$1(new C.euO(this.b,d))},
$S:1710}
C.euO.prototype={
$0(){var w=this.b
return this.a.as=w.gI(w)},
$S:0}
C.ev6.prototype={
$1(d){var w=null
return B.aB(w,B.p(w,w,A.f,w,w,new B.o(B.b1(d),w,w,w,w,w,A.a5),w,22,w,w,w,w,w,22),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.euN(this.a,this.b,d),w,w,w,w,w,w,!1,A.a4)},
$S:384}
C.euN.prototype={
$0(){return this.a.$1(new C.euL(this.b,this.c))},
$S:0}
C.euL.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.ev7.prototype={
$0(){var w,v=this
if(v.b){w=v.a.c
w.toString
w=B.a3(w,!1).pJ()}else w=!1
if(w){w=v.a.c
w.toString
B.a3(w,!1).eJ()}v.a.asN()},
$S:0}
C.eva.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.fy
m===$&&B.c()
m=m.x
m===$&&B.c()
w=A.dB.aw(0,m)
m=B.m(16)
v=B.m(16)
u=o.c
t=B.ar(u,A.b2,0.35+w*0.15)
t.toString
t=B.a([u,t],x.O)
s=B.I(A.c.j(0.3+w*0.2),A.r,1.2)
r=B.a([B.X(o.d,A.c,n,n,n,26)],x.p)
q=B.m(6)
p=B.I(u,A.r,1.2)
r.push(B.ao(2,B.p(n,B.X(A.uq,u,n,n,n,10),A.f,n,n,new B.o(A.c,n,p,q,n,n,A.n),n,n,n,n,A.no,n,n,n),n,n,n,2,n,n))
return B.aF(!1,A.a1,!0,n,B.aM(!1,m,!0,B.eF(new B.a7(48,48,new B.an(A.A,n,A.aa,A.t,r,n),n),n,new B.o(n,n,s,v,n,new B.a9(A.ay,A.aD,A.x,t,n,n),A.n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.b,n,n,n,n,n,n,n),A.f,A.K,0,n,A.K,n,n,n,A.ah)},
$S:135}
C.esK.prototype={
$2(d,e){var w,v,u,t,s,r,q=this,p=null,o=q.a.fy
o===$&&B.c()
o=o.x
o===$&&B.c()
w=A.dB.aw(0,o)
o=B.m(22)
v=B.m(22)
u=q.c
t=B.ar(u,A.b2,0.22+w*0.12)
t.toString
u=B.a([u,t,u.j(0.9)],x.O)
t=B.I(A.c.j(0.28+w*0.22),A.r,1.35)
s=A.c.j(0.14+w*0.08)
r=B.I(A.c.j(0.4+w*0.15),A.r,1)
return B.aF(!1,A.a1,!0,p,B.aM(!1,o,!0,B.eF(B.x(B.a([B.ea(A.A,B.p(p,B.X(q.d,A.c,p,p,p,26),A.f,p,p,new B.o(s,p,r,p,p,p,A.a5),p,48,p,p,p,p,p,48),1+w*0.06,p,p),A.ad,B.d(q.e,p,p,p,p,p,p,A.iY,A.L,p,p)],x.p),A.m,p,A.b8,A.j,0,A.p),p,new B.o(p,p,t,v,p,new B.a9(A.ay,A.aD,A.x,u,p,p),A.n),p,A.FP,1/0),p,!0,p,p,p,p,p,p,p,p,p,p,p,q.b,p,p,p,p,p,p,p),A.f,A.K,0,p,A.K,p,p,p,A.ah)},
$S:135}
C.ewP.prototype={
$1(d){var w=null,v=B.d(this.a,w,w,w,w,w,w,w,w,w,w),u=this.b,t=B.aN(w,A.X,!0,w,!0,A.t,w,B.aO(),u,w,w,w,w,w,2,A.apn,A.y,!0,w,!0,w,!1,w,A.ak,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,A.a9,w,w,w,w,w,w,w,w,w,w,w,w,!0,A.a6,w,A.ao,w,w,w,w)
return B.el(B.a([B.bK(!1,A.di,w,w,!0,w,w,new C.ewN(d),w,w),B.bH(A.qE,new C.ewO(d,u),w)],x.p),w,w,w,t,w,w,w,w,v,w)},
$S:18}
C.ewN.prototype={
$0(){B.a3(this.a,!1).N(null)
return null},
$S:0}
C.ewO.prototype={
$0(){var w=this.b.a.a
B.a3(this.a,!1).N(w)
return null},
$S:0}
C.d49.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.a,i=j.d
i===$&&B.c()
i=i.x
i===$&&B.c()
w=A.dB.aw(0,i)
i=j.e
i===$&&B.c()
v=i.x
v===$&&B.c()
u=A.ew.aw(0,A.k.E(v,0,1))
i=i.x
i===$&&B.c()
i=A.dZ.aw(0,i)
v=B.m(22)
t=B.ar(A.aJ,A.d.gI(C.kC(j.a.c.w)?D.uB:N.nt),w*0.35)
t.toString
t=B.I(t,A.r,1.2)
s=x.V
r=B.a([new B.ac(w*2,A.G,A.d.gI(C.kC(j.a.c.w)?D.uB:N.nt).j(0.18+w*0.12),A.J,32+w*10),D.acg],s)
q=B.m(22)
p=x.O
o=B.ao(k,B.p(k,k,A.f,k,k,new B.o(k,k,k,k,k,new B.c0(A.b3,0.9,A.x,k,0,B.a([A.d.gI(C.kC(j.a.c.w)?D.uB:N.nt).j(0.22+w*0.1),A.K],p),k,k),A.n),k,80,k,k,k,k,k,k),k,k,0,0,-28,k)
n=64+w*6
m=A.d.gI(C.kC(j.a.c.w)?D.uB:N.nt).j(0.28+w*0.14)
p=B.p(k,k,A.f,k,k,new B.o(k,k,k,k,k,new B.c0(A.A,0.5,A.x,k,0,B.a([m,A.d.gal(C.kC(j.a.c.w)?D.uB:N.nt).j(0.08),A.K],p),k,k),A.a5),k,n,k,k,k,k,k,n)
n=B.m(14)
m=j.a.c.w
l=C.kC(m)?D.uB:N.nt
s=B.a([new B.ac(0,A.G,A.d.gI(C.kC(m)?D.uB:N.nt).j(0.45+w*0.2),A.cv,18)],s)
m=x.p
l=B.a([p,B.ea(A.A,B.p(k,B.X(C.kC(j.a.c.w)?A.w7:A.qf,A.c,k,k,k,22),A.f,k,k,new B.o(k,k,k,n,s,new B.a9(A.ay,A.aD,A.x,l,k,k),A.n),k,46,k,k,k,k,k,46),1+w*0.04,k,k)],m)
s=B.a([new B.an(A.A,k,A.aa,A.t,l,k),A.R,B.d("PRESENTATION",k,k,k,k,k,k,B.l(k,k,A.d.gI(C.kC(j.a.c.w)?D.uB:N.nt).j(0.85+w*0.15),k,k,k,k,k,k,k,k,10,k,k,A.H,k,k,!0,k,1.4,k,k,k,k,k,k),A.L,k,k),A.fM,B.d(j.a.c.b,k,2,A.a2,k,k,k,D.fiS,A.L,k,k),A.av,B.d(j.gcyv(),k,k,k,k,k,k,D.fny,A.L,k,k),A.aA],m)
p=j.a.c
if(p.z){p=p.gSt()?"Shared by admin \xb7 editable for 4 hours":"Received copy \xb7 print or download only"
A.d.v(s,B.a([B.d(p,k,k,k,k,k,k,B.l(k,k,A.d.gI(C.kC(j.a.c.w)?D.uB:N.nt).j(0.9),k,k,k,k,k,k,k,k,11,k,k,A.O,k,k,!0,k,k,k,k,k,k,k,k),A.L,k,k),A.ad],m))}s.push(new C.K0(A.yw,"Download PDF","pdf",A.d0,j.J9(0),!1,k))
p=j.a.c
if(!p.z||p.gSt()){p=j.a.c.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"}else p=!1
if(p){p=j.a.c.w
A.d.v(s,B.a([A.am,new C.K0(A.kg,"Transfer to "+C.hq3(p==null?"":p),"transfer_hati",A.aV,j.J9(1),!1,k)],m))}p=j.a.c
if(!p.z){p=p.w
n=j.J9(p==="hati_kuhowa"||p==="hati_kuhoweya"?2:1)
p=j.a.c.w
A.d.v(s,B.a([A.am,new C.K0(D.bJC,"Rename presentation","rename",A.c9,n,!1,k),A.am,new C.K0(A.alI,"Duplicate","duplicate",A.b5,j.J9(p==="hati_kuhowa"||p==="hati_kuhoweya"?3:2),!1,k)],m))}s.push(A.N)
p=j.a.c
if(p.z)p=1
else{p=p.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"?4:3}s.push(new C.K0(A.ec,"Delete presentation","delete",A.aw,j.J9(p),!0,k))
s.push(A.av)
p=j.a.c
if(p.z)p=2
else{p=p.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"?5:4}p=j.J9(p)
n=j.a.c
if(n.z)n=2
else{n=n.w
n=n==="hati_kuhowa"||n==="hati_kuhoweya"?5:4}n=j.J9(n)
s.push(B.dJ(B.d6(B.bK(!1,E.aSM,k,k,!0,k,k,new C.d48(d),k,B.fx(k,k,k,k,k,k,k,k,k,k,k,A.bL,k,k,k,A.ax,k,D.byX,k,k,k,k,k,A.kk,k,k)),n),new B.t(0,(1-p)*8)))
return B.ea(A.A,B.d6(B.aF(!1,A.a1,!0,k,B.p(k,B.bx(q,new B.an(A.a_,k,A.aa,A.t,B.a([o,new B.D(D.by5,B.x(s,A.m,k,A.e,A.P,0,A.p),k)],m),k),A.aq),A.f,k,A.W5,new B.o(A.au,k,t,v,r,k,A.n),k,k,k,k,k,k,k,k),A.f,A.K,0,k,k,k,k,k,A.ah),i),0.88+u*0.12,k,k)},
$S:45}
C.d48.prototype={
$0(){B.a3(this.a,!1).N(null)
return null},
$S:0}
C.d4v.prototype={
$0(){B.a3(this.a,!1).N(!1)
return null},
$S:0}
C.d4w.prototype={
$0(){B.a3(this.a,!1).N(!0)
return null},
$S:0}
C.d46.prototype={
$1(d){var w=this.a
return w.m(new C.d42(w))},
$S:23}
C.d42.prototype={
$0(){return this.a.d=!0},
$S:0}
C.d47.prototype={
$1(d){var w=this.a
return w.m(new C.d41(w))},
$S:66}
C.d41.prototype={
$0(){return this.a.d=!1},
$S:0}
C.d45.prototype={
$0(){var w=this.a
return w.m(new C.d43(w))},
$S:0}
C.d43.prototype={
$0(){return this.a.d=!1},
$S:0}
C.d44.prototype={
$0(){var w=this.a.a.e
B.a3(this.b,!1).N(w)
return null},
$S:0}
C.ezu.prototype={
$0(){return $.bkK=!$.bkK},
$S:0}
C.ezk.prototype={
$0(){var w,v,u=this.a
if(u.c==null||!u.r)return
w=u.d
w===$&&B.c()
v=u.a.c
if(w<v.r.length-1||v.ch||u.gaVk())u.axQ()},
$S:0}
C.ezt.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.ezl.prototype={
$0(){return this.a.y=!0},
$S:0}
C.ezm.prototype={
$0(){var w=this.a
if(w.c!=null&&w.y)w.axQ()},
$S:0}
C.ezg.prototype={
$0(){var w=this.a
w.y=!1
w.e=A.d.gI(w.a.c.r).r
w.d=0},
$S:0}
C.ezh.prototype={
$0(){var w=this.a,v=this.b
w.e=w.a.c.r[v].r
w.d=v},
$S:0}
C.ezi.prototype={
$0(){return this.a.y=!1},
$S:0}
C.ezj.prototype={
$0(){var w,v,u=this.a
u.e=u.a.c.r[this.b].r
w=u.d
w===$&&B.c()
v=this.c
u.d=A.o.F(w-1+v,v)},
$S:0}
C.ezr.prototype={
$2(d,e){var w=B.C(e,x.l)
if(d!=null)w.push(d)
return new B.an(A.A,null,A.b1,A.t,w,null)},
$S:1711}
C.ezs.prototype={
$2(d,e){var w
if(e.gc3(e)===A.i5)return new B.d0(e,!1,d,null)
w=this.a
return w.cwr(w.e,d,e)},
$S:454}
C.ezn.prototype={
$2(d,e){var w=B.dk(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
v=this.a
w.fB((1-v.gp(0))*1.5708)
return B.fo(A.A,B.d6(e,v.gp(0)),null,w,!0)},
$S:45}
C.ezo.prototype={
$2(d,e){var w=B.dk(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
v=this.a
w.kd((1-v.gp(0))*1.5708)
return B.fo(A.A,B.d6(e,v.gp(0)),null,w,!0)},
$S:45}
C.ezp.prototype={
$2(d,e){var w=B.dk(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.002
v=this.a
w.fB(v.gp(0)*0.8)
w.kd(v.gp(0)*0.35)
return B.fo(A.A,B.d6(e,v.gp(0)),null,w,!0)},
$S:45}
C.ezq.prototype={
$2(d,e){var w=B.dk(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.0025
v=this.a
w.fB(-v.gp(0)*1.2)
return B.fo(A.a8,B.d6(e,v.gp(0)),null,w,!0)},
$S:45}
C.ezv.prototype={
$2(d,e){var w,v=this,u=v.b,t=u==null
if(!t){w=v.a.gZ4().r
w=w!=null&&w.a!=null}else w=!1
if(w){t=v.a
u=t.a.c.r[u]
t=t.gZ4().x
t===$&&B.c()
return new C.b1w(u,v.c,t,null)}u=v.a.d
u===$&&B.c()
return new C.IZ(v.c,t,!0,new B.cs("cine"+u,x.W))},
$S:659}
C.ezx.prototype={
$1(d){var w=this.a
if(d.b.a>B.aH(this.b,A.bX,x.w).w.a.a*0.55)w.axQ()
else w.ckK()},
$S:66}
C.ezw.prototype={
$0(){B.a3(this.a,!1).N(null)
return null},
$S:0}
C.fIB.prototype={
$4(d,e,f,g){var w=this.b
A.d.a8(w)
A.d.v(w,d)
w=this.a
w.a=e
w.b=f
w.c=g},
$S:452}
C.fIK.prototype={
$1(d){var w=null,v=this.a,u=v.r.length,t=u===1?"":"s"
t=B.d("Download a PDF that looks like your slides ("+u+" page"+t+"), or open the print view in your browser.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.75),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return B.el(B.a([B.bK(!1,A.di,w,w,!0,w,w,new C.fIH(d),w,w),B.bK(!1,D.fGC,w,w,!0,w,w,new C.fII(d,this.b,v),w,w),B.bH(A.aT3,new C.fIJ(d,v,this.c),w)],x.p),w,w,M.tE,new B.a7(320,w,t,w),w,w,w,w,D.fI5,w)},
$S:18}
C.fIH.prototype={
$0(){B.a3(this.a,!1).N(null)
return null},
$S:0}
C.fII.prototype={
$0(){var w=0,v=B.j(x.H),u=this
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:B.a3(u.a,!1).N(null)
C.h4q(u.b,u.c.b)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fIJ.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:B.a3(u.a,!1).N(null)
t=u.b
w=2
return B.b(C.aQh(t),$async$$0)
case 2:s=e
r=u.c
w=r.e!=null?3:4
break
case 3:w=5
return B.b(C.aPI(r,s,t.b),$async$$0)
case 5:case 4:return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fIA.prototype={
$1(d){return d.a!==this.a.a},
$S:z+2}
C.chf.prototype={
$2(d,e){var w
if(x.f.b(e)){w=J.q(e,"bundleId")
w=J.k(w==null?"":w)===this.a}else w=!1
return w},
$S:537}
C.fIG.prototype={
$1(d){return d.ag()},
$S:z+14}
C.ffj.prototype={
$1(d){return C.h4o(C.W9(B.a2(d,x.N,x.z)),this.a)},
$S:z+96}
C.fRC.prototype={
$3(d,e,f){return A.bJ},
$C:"$3",
$R:3,
$S:97}
C.fRD.prototype={
$4(d,e,f,g){var w=A.cu.aw(0,e.gp(0))
return B.d6(B.ea(A.A,D.heA,0.94+w*0.06,null,null),w)},
$S:455}
C.fRE.prototype={
$1(d){var w=this
return new C.Wb(w.a,w.b,w.c,w.d,null)},
$S:z+97}
C.ez0.prototype={
$2(d,e){return d+e.r.length},
$S:z+13}
C.eyX.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.ez_.prototype={
$1(d){var w=this.a,v=w.a,u=v.c
v=v.f
return new C.Wc(u,this.b,w.gaOB(),v,null)},
$S:z+99}
C.eyY.prototype={
$0(){return this.a.f=!0},
$S:0}
C.eyZ.prototype={
$0(){return this.a.f=!1},
$S:0}
C.ez1.prototype={
$0(){return this.a.f=!0},
$S:0}
C.ez2.prototype={
$0(){return this.a.f=!1},
$S:0}
C.ez5.prototype={
$0(){B.a3(this.a,!1).N(null)
return null},
$S:0}
C.ez6.prototype={
$0(){var w=this.a
return w.m(new C.ez4(w))},
$S:0}
C.ez4.prototype={
$0(){return this.a.d="one"},
$S:0}
C.ez7.prototype={
$0(){var w=this.a
return w.m(new C.ez3(w))},
$S:0}
C.ez3.prototype={
$0(){return this.a.d="all"},
$S:0}
C.ez8.prototype={
$1(d){return this.a.bK3(d,this.b)},
$S:z+100}
C.eyW.prototype={
$0(){var w=this.a
return w.m(new C.eyV(w,this.b))},
$S:0}
C.eyV.prototype={
$0(){return this.a.e=this.b.a},
$S:0}
C.ez9.prototype={
$0(){var w=this.a,v=this.b
w.d=v.b
w.e=v.a},
$S:0}
C.eza.prototype={
$0(){return this.a.f="Could not create QR. Check your connection and try again."},
$S:0}
C.ezb.prototype={
$2(d,e){return d+e.r.length},
$S:z+13}
C.ezc.prototype={
$0(){B.a3(this.a,!1).N(null)
return null},
$S:0}
C.ezd.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a.e
s.toString
w=3
return B.b(B.fE(new B.fA(s)),$async$$0)
case 3:s=t.b
if(s.e==null){w=1
break}s.J(x.q).f.S(D.f4S)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.esE.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.esD())},
$S:0}
C.esD.prototype={
$0(){},
$S:0}
C.esF.prototype={
$1(d){var w=this.a
if(w.c!=null)w.e.fO()},
$S:9}
C.esA.prototype={
$1(d){return this.a.m(new C.esz())},
$S:2}
C.esz.prototype={
$0(){},
$S:0}
C.esB.prototype={
$1(d){return this.a.b_c()},
$S:2}
C.esC.prototype={
$0(){B.a3(this.a,!1).N(null)
return null},
$S:0}
C.ezf.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(t.d.q8(),$async$$0)
case 2:if(t.c!=null)t.m(new C.eze(t))
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.eze.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.fCT.prototype={
$1(d){var w=null,v=this.a,u=v.a
return B.ao(w,new B.eG(new B.jO(this.c,new C.fCS(),w,w,x.ex),this.b),v.b,w,0,w,0,u)},
$S:233}
C.fCS.prototype={
$3(d,e,f){return new C.IZ(e,!1,!1,new B.cs(e.a,x.W))},
$S:z+102}
C.fCU.prototype={
$1(d){var w=null
return B.ou(!1,B.at(new C.bvg(this.a,this.b,w),w,w,w),w,x.z)},
$S:312}
C.fCY.prototype={
$0(){var w=0,v=B.j(x.cc),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.aW.gmF(),$async$$0)
case 3:w=4
return B.b(B.bO(A.mz,null,x.H),$async$$0)
case 4:w=5
return B.b($.aW.gmF(),$async$$0)
case 5:s=$.aW.ak$.x.h(0,t.a)
r=s==null?null:s.gba()
if(!(r instanceof B.q4))throw B.W("Could not draw the slide.")
u=r.m2(1)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1714}
C.fCZ.prototype={
blB(d){var w=0,v=B.j(x.fS),u,t,s,r
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(d.hw(A.h7),$async$$1)
case 3:r=f
if(r==null)throw B.W("Could not read the slide picture.")
t=(self.URL||self.webkitURL).createObjectURL(B.hS([J.eV(A.dF.gaQ(r))],"image/png"))
t.toString
s=Am.fW3(t)
w=4
return B.b(new B.qb(s,"load",!1,x.ev).gI(0).da(0,A.ju),$async$$1)
case 4:(self.URL||self.webkitURL).revokeObjectURL(t)
u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$1(d){return this.blB(d)},
$S:1715}
C.fCV.prototype={
$1(d){var w,v=x.bu.a(d).data
if(v!=null){w=v.size
w.toString
w=w>0}else w=!1
if(w)this.a.push(v)},
$S:147}
C.fCW.prototype={
$1(d){var w=this.a
if((w.a.a&30)===0)w.fU(0)},
$S:147}
C.fCX.prototype={
$0(){return(self.URL||self.webkitURL).revokeObjectURL(this.a)},
$S:0}
C.f9t.prototype={
$3(d,e,f){var w=null
return B.d(e,w,w,w,w,w,w,D.ffj,A.L,w,w)},
$S:1716}
C.f9u.prototype={
$3(d,e,f){var w=null,v=B.m(99)
return B.bx(v,B.lk(A.bn,w,A.dD,8,w,e===0?w:e,w),A.aq)},
$S:566}
C.ehL.prototype={
$1(d){this.a.a_i()
return null},
$S:11}
C.ehJ.prototype={
$0(){return this.a.e=D.bu2},
$S:0}
C.ehK.prototype={
$0(){var w=this.a.a
if(w.a<0)w=A.bE
return this.b.e=w},
$S:0}
C.cjN.prototype={
$1(d){return A.o.dC(1,d.a)},
$S:z+103}
C.cjO.prototype={
$2(d,e){return(d|e)>>>0},
$S:70};(function aliases(){var w=C.aMf.prototype
w.bwj=w.t
w=C.aLM.prototype
w.bvP=w.t
w=C.aLy.prototype
w.bvA=w.t
w=C.aLL.prototype
w.bvO=w.t
w=C.aMd.prototype
w.bwh=w.t
w=C.aNw.prototype
w.bxL=w.t
w=C.aKv.prototype
w.buu=w.t
w=C.aMo.prototype
w.bws=w.t
w=C.aMp.prototype
w.bwt=w.t
w=C.b3c.prototype
w.br5=w.aDj})();(function installTearOffs(){var w=a._static_0,v=a._instance_0u,u=a._instance_1u,t=a._static_1,s=a.installStaticTearOff
w(C,"ibi","anS",104)
v(C.aJu.prototype,"gc4H","Zb",0)
var r
u(r=C.ay2.prototype,"gcxR","cxS",38)
v(r,"gc5w","adI",0)
v(r=C.axZ.prototype,"gaYL","E9",3)
v(r,"gc5t","c5u",3)
v(r,"gawZ","xP",0)
v(r,"gax_","IO",0)
t(C,"ibJ","hHK",105)
v(C.aEa.prototype,"gc88","c89",3)
s(C,"ibU",0,null,["$4$paper$photo$request$template"],["fK0"],106,0)
s(C,"ibT",0,null,["$5$doc$history$instruction$photo$template"],["bCg"],107,0)
v(r=C.aEr.prototype,"gc8R","J6",0)
v(r,"gbJw","X0",0)
v(r,"gc8U","aex",0)
v(r,"gc8T","a_4",0)
v(r,"gaZS","Eq",0)
v(C.aEt.prototype,"gc8Z","a_6",0)
v(r=C.aFR.prototype,"gb_4","Q0",0)
v(r,"gcpA","b3p",3)
v(r,"gcze","aBq",86)
v(r,"gbNp","aat",0)
v(r,"gc9q","Aw",0)
v(r=C.aHN.prototype,"gcju","a0r",0)
v(r,"gcjC","a0u",0)
v(r,"gbCp","a8W",0)
v(r,"gc9u","aeJ",0)
v(C.aHM.prototype,"gc9v","aeK",0)
v(C.aBR.prototype,"gbBo","a8J",0)
v(C.aAe.prototype,"gc9w","a_h",0)
w(C,"ic6","ia_",12)
w(C,"ic4","i6U",12)
w(C,"ic5","i8Z",12)
v(r=C.aEJ.prototype,"gcCp","cCq",3)
v(r,"gcnS","cnT",3)
u(r,"gEw","afp",7)
v(r,"gbHa","arY",3)
u(r,"gEx","b0n",7)
v(r,"gcbF","af6",0)
v(r,"gcaw","af5",0)
v(r,"gcdP","afq",0)
v(r,"gbJt","aa3",0)
v(r,"gceJ","a_R",0)
v(r,"gceK","afH",0)
v(r,"gcfg","afO",0)
v(r,"gce1","aft",0)
v(r,"gbNB","aax",0)
v(r,"gaS8","aS9",3)
v(r,"gaRh","aRi",3)
v(r,"gaMW","aMX",3)
v(r,"gaRg","asN",3)
u(r,"gbBF","bBG",80)
v(r,"gaAX","b6y",3)
v(r,"gcay","caz",3)
v(r,"gbYQ","bYR",3)
v(r,"gbLW","bLX",3)
v(r=C.aEM.prototype,"gcBf","cBg",3)
v(r,"gcAV","cAW",3)
t(C,"ic7","iag",2)
v(r=C.aEK.prototype,"gc9C","Jb",0)
v(r,"gcrE","Rr",0)
v(r,"gc9z","Ja",0)
v(r,"gcDF","a30",0)
v(r,"gcfs","afV",0)
v(C.aEI.prototype,"gc9D","b_c",3)
v(r=C.aEL.prototype,"gbOo","aaI",0)
u(r,"gc9A","c9B",101)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(B.aD,[C.o0,C.S1,C.bHR,C.bGb,C.cAs,C.cAq,C.bPB,C.b9_,C.cAr,C.bEM,C.cjH,C.cjF,C.cjG,C.cjE,C.at7,C.cjD,C.bQF,C.or,C.aFk,C.jq,C.nN,C.a82,C.zK,C.lo,C.oF,C.mf,C.zL,C.nR,C.a8a,C.arw,C.b1x,C.ehA,C.ll,C.ER,C.eu,C.j2,C.EI,C.xJ,C.eM,C.lO,C.i4,C.jL,C.a8b,C.afi,C.b1y,C.b3c,C.a31])
u(B.ka,[C.cIj,C.c0D,C.fy5,C.cJP,C.cJb,C.fDB,C.e00,C.e0_,C.ehO,C.ehN,C.fF_,C.fgs,C.fgt,C.cfB,C.cfC,C.cfD,C.eld,C.eTD,C.eT0,C.eT_,C.eU3,C.eTB,C.eTu,C.eTN,C.eUt,C.fo_,C.f_D,C.f_C,C.f05,C.ehD,C.fIx,C.dWW,C.fPa,C.fFm,C.ch7,C.ch5,C.cha,C.fFR,C.fFS,C.fFT,C.fFU,C.cgS,C.cgT,C.dJs,C.cgP,C.fFQ,C.f71,C.dUE,C.cgI,C.ehj,C.fDq,C.ewe,C.ewD,C.ewA,C.ewz,C.ewK,C.ewJ,C.eye,C.eyd,C.ewt,C.ews,C.et2,C.euc,C.exb,C.eyw,C.eyv,C.eu_,C.eva,C.esK,C.d49,C.ezr,C.ezs,C.ezn,C.ezo,C.ezp,C.ezq,C.ezv,C.chf,C.ez0,C.ezb,C.cjO])
u(B.hK,[C.cIk,C.cIl,C.bQG,C.fvf,C.c0C,C.c0F,C.fLE,C.f8_,C.f7R,C.f86,C.ffk,C.ffl,C.fy6,C.fy4,C.fL8,C.fuU,C.fM_,C.cJF,C.cJK,C.cJM,C.cJI,C.cJN,C.cJG,C.cJO,C.cJB,C.cJy,C.cJx,C.cJE,C.cJ6,C.cJ4,C.fCD,C.fCE,C.fjz,C.fDC,C.fDI,C.fiC,C.cbV,C.fCB,C.fCC,C.fxs,C.fxt,C.fDH,C.fDD,C.fDF,C.fDG,C.fDE,C.fPs,C.fxw,C.fxx,C.fxA,C.fxB,C.fxE,C.fxF,C.fQV,C.fgU,C.fR5,C.ekL,C.ekM,C.ekN,C.ekt,C.ekF,C.ekG,C.ekI,C.cfA,C.cfy,C.cfz,C.fDh,C.fDj,C.fDi,C.fgu,C.fgv,C.fR8,C.eli,C.elj,C.ela,C.elb,C.ele,C.elf,C.fRo,C.eUu,C.eTU,C.eTE,C.eTR,C.eSW,C.eSX,C.eSY,C.eT1,C.eT2,C.eUj,C.eUq,C.eUs,C.eU2,C.eU4,C.eU8,C.eU9,C.eUa,C.eUe,C.eU5,C.eU6,C.eTd,C.eTe,C.eTf,C.eTg,C.eTh,C.eTi,C.eTj,C.eTk,C.eTl,C.eSz,C.eSA,C.eSB,C.eSC,C.eSE,C.eSF,C.eT7,C.eT8,C.eT9,C.eTa,C.eTb,C.eSJ,C.eSK,C.eSL,C.eSM,C.eTt,C.eTM,C.fAG,C.fAF,C.cgZ,C.fnZ,C.fIt,C.fIm,C.fIp,C.fGl,C.fGm,C.fGn,C.fAN,C.fAM,C.fAL,C.fAJ,C.fgo,C.fgp,C.fgq,C.fRA,C.f_F,C.f_G,C.f_z,C.f_t,C.f_Z,C.f0_,C.f01,C.f02,C.f_Y,C.fRz,C.f_k,C.fne,C.ehC,C.fIv,C.fIw,C.fIy,C.fIr,C.fIs,C.fQN,C.dmi,C.dmo,C.ehB,C.fcR,C.fcT,C.fcS,C.fcQ,C.fBR,C.fBT,C.feQ,C.fHY,C.fHZ,C.fI_,C.fIa,C.fIf,C.fIg,C.fIh,C.fIi,C.fIj,C.fIk,C.fIl,C.fI0,C.fI1,C.fI2,C.fI3,C.fI4,C.fI5,C.fI6,C.fI7,C.fI8,C.fI9,C.fIb,C.fIc,C.fId,C.fIe,C.fzH,C.fmN,C.fmM,C.fIE,C.dWX,C.dWV,C.eZu,C.cbw,C.cby,C.fPc,C.dbG,C.dbI,C.fPb,C.fP9,C.fRy,C.fFi,C.dbg,C.fxI,C.fxJ,C.cgX,C.cgY,C.cgW,C.cgM,C.cgN,C.cgJ,C.cgK,C.cgL,C.chd,C.ch8,C.ch3,C.ch4,C.ch6,C.ch9,C.chb,C.fFV,C.cgR,C.cgU,C.cgV,C.ch0,C.ch1,C.fIL,C.fHS,C.cgQ,C.cgO,C.fFP,C.fpl,C.cgH,C.eX7,C.fsl,C.eyS,C.evh,C.evi,C.ewS,C.ewG,C.ewH,C.euF,C.eyD,C.eyE,C.eyF,C.eu3,C.ewl,C.ewn,C.evY,C.evV,C.evd,C.eve,C.ew4,C.eu5,C.ewg,C.ewh,C.ewf,C.ewj,C.ewi,C.ewB,C.ewC,C.ewE,C.ewx,C.euo,C.eul,C.ewL,C.eud,C.eyC,C.esM,C.eug,C.euf,C.etu,C.etz,C.etx,C.etv,C.eyK,C.eyL,C.eyM,C.eyJ,C.eyg,C.eyf,C.ey9,C.eyb,C.ey1,C.eyA,C.eyy,C.esU,C.esQ,C.evb,C.etD,C.et4,C.et3,C.etq,C.etr,C.euD,C.etF,C.etJ,C.ewu,C.ey2,C.ey3,C.ey4,C.ey5,C.eu7,C.eu8,C.eu9,C.evE,C.euz,C.eur,C.euy,C.evO,C.evP,C.exB,C.exD,C.exX,C.exZ,C.exE,C.exF,C.etB,C.evg,C.evf,C.eyq,C.etZ,C.etR,C.etS,C.etV,C.etW,C.evT,C.euX,C.euY,C.euZ,C.ev_,C.ev0,C.ev1,C.ev2,C.ev3,C.ev4,C.ev5,C.ev6,C.ewP,C.d46,C.d47,C.ezx,C.fIB,C.fIK,C.fIA,C.fIG,C.ffj,C.fRC,C.fRD,C.fRE,C.ez_,C.ez8,C.esF,C.esA,C.esB,C.fCT,C.fCS,C.fCU,C.fCZ,C.fCV,C.fCW,C.f9t,C.f9u,C.ehL,C.cjN])
u(B.jc,[C.cIm,C.f7W,C.f80,C.f81,C.f7X,C.f7Y,C.f7Z,C.f7P,C.f7Q,C.f7S,C.f7T,C.f85,C.f84,C.f7V,C.f7U,C.f82,C.f83,C.f88,C.f89,C.f87,C.cJH,C.cJL,C.cJJ,C.cJz,C.cJA,C.cJC,C.cJv,C.cJw,C.cJD,C.cJu,C.cJt,C.cJs,C.cIW,C.cIV,C.cIY,C.cJ5,C.cIZ,C.cIX,C.cJ0,C.cJ1,C.cJ2,C.cJ_,C.cJ3,C.cJ7,C.cJ8,C.cJ9,C.cJa,C.fxq,C.fxr,C.fxo,C.fxp,C.edr,C.edp,C.edq,C.eds,C.edt,C.e_Z,C.fxu,C.fxv,C.fxy,C.fxz,C.fxC,C.fxD,C.ehM,C.fFp,C.fFo,C.ekK,C.ekJ,C.ekn,C.ekj,C.eku,C.ekv,C.ekw,C.ekp,C.ekq,C.ekr,C.eks,C.eko,C.ekl,C.ekm,C.ekC,C.ekD,C.ekB,C.ekE,C.ekA,C.ekz,C.eky,C.ekH,C.ekx,C.ekk,C.elh,C.el5,C.el6,C.elc,C.el7,C.el9,C.el8,C.elg,C.eTm,C.eTK,C.eT5,C.eT6,C.eT3,C.eT4,C.eTQ,C.eTP,C.eTO,C.eTT,C.eTS,C.eSV,C.eSZ,C.eSU,C.eST,C.eSQ,C.eSS,C.eSR,C.eUr,C.eUk,C.eUi,C.eUl,C.eUh,C.eUm,C.eUg,C.eUn,C.eUo,C.eUp,C.eUf,C.eU1,C.eTX,C.eU7,C.eU0,C.eUb,C.eU_,C.eUc,C.eTZ,C.eUd,C.eTY,C.eTH,C.eTG,C.eTI,C.eTF,C.eTJ,C.eTz,C.eTy,C.eTA,C.eTx,C.eTw,C.eTv,C.eSD,C.eSy,C.eSN,C.eSI,C.eSO,C.eSH,C.eSP,C.eSG,C.eTC,C.eTq,C.eTp,C.eTr,C.eTo,C.eTs,C.eTn,C.eTL,C.eTW,C.eTV,C.eTc,C.fIo,C.fIq,C.fIu,C.fAK,C.fDa,C.fD8,C.fD9,C.f_H,C.f_I,C.f_E,C.f_y,C.f_x,C.f_A,C.f_B,C.f_n,C.f_o,C.f_q,C.f_r,C.f_s,C.f_p,C.f_u,C.f_V,C.f_W,C.f_U,C.f_X,C.f_T,C.f_S,C.f_R,C.f00,C.f_Q,C.f_P,C.f_O,C.f03,C.f_N,C.f04,C.f_M,C.f_L,C.f_v,C.f_w,C.f_K,C.f_J,C.f_g,C.f_h,C.f_i,C.f_j,C.f_f,C.f_l,C.f_m,C.dmh,C.dmj,C.dmm,C.dmn,C.dml,C.dmk,C.fBS,C.fzI,C.cbx,C.cbz,C.dbz,C.dbE,C.dbF,C.dbD,C.dbC,C.dbH,C.dbB,C.dbA,C.dbJ,C.fP8,C.dik,C.dil,C.dim,C.fxG,C.fxH,C.che,C.esG,C.esH,C.esI,C.esJ,C.fpj,C.fpk,C.dUG,C.dUF,C.d8v,C.d8u,C.eyU,C.eyT,C.evj,C.ey_,C.eyQ,C.ewQ,C.eyG,C.eyH,C.eyR,C.evZ,C.eu1,C.eu2,C.ewm,C.evX,C.evU,C.evW,C.ew_,C.ew0,C.ew1,C.ew2,C.ew3,C.ew5,C.eu6,C.ew8,C.ew9,C.ewa,C.ewb,C.ewc,C.ewd,C.ew7,C.ewk,C.ewy,C.eww,C.ewF,C.ew6,C.eum,C.eun,C.eup,C.ewI,C.ewM,C.et0,C.euk,C.eui,C.ewU,C.eue,C.ewT,C.eu4,C.euG,C.eyB,C.ey0,C.et1,C.esZ,C.esP,C.esL,C.esN,C.euh,C.ett,C.ety,C.etw,C.ets,C.ewv,C.eyN,C.eyc,C.ey7,C.ey8,C.eya,C.ev9,C.ev8,C.eyz,C.esS,C.esT,C.esV,C.esW,C.et_,C.esR,C.ewR,C.eyI,C.evc,C.etC,C.esO,C.euE,C.esX,C.et5,C.et6,C.et7,C.eti,C.etl,C.etm,C.etn,C.eto,C.etp,C.et8,C.et9,C.eta,C.etb,C.etc,C.etd,C.ete,C.etf,C.etg,C.eth,C.etj,C.etk,C.euC,C.euB,C.euA,C.esY,C.etG,C.etE,C.etH,C.etI,C.euj,C.ewq,C.ewr,C.ewo,C.ewp,C.ey6,C.eub,C.eua,C.evD,C.evC,C.evF,C.evB,C.evG,C.evA,C.evH,C.evz,C.evI,C.evy,C.evJ,C.evx,C.evK,C.evw,C.evL,C.evv,C.evo,C.evp,C.evq,C.evn,C.evr,C.evm,C.evs,C.evl,C.evt,C.evk,C.evu,C.euw,C.eux,C.euq,C.eus,C.eut,C.euu,C.euv,C.eyO,C.eyP,C.evN,C.evM,C.evQ,C.exc,C.exd,C.exe,C.exp,C.exA,C.exL,C.exS,C.exT,C.exU,C.exV,C.exW,C.exf,C.exg,C.exh,C.exi,C.exj,C.exk,C.exl,C.exm,C.exn,C.exo,C.exq,C.exr,C.exs,C.ext,C.exu,C.exv,C.exw,C.exx,C.exy,C.ex2,C.exz,C.exa,C.ex9,C.exC,C.ex8,C.ewZ,C.exY,C.ex7,C.ewY,C.ewW,C.ex6,C.ewX,C.ewV,C.exG,C.ex5,C.exH,C.exI,C.exJ,C.exK,C.ex4,C.exM,C.exN,C.exO,C.ex3,C.exP,C.ex1,C.exQ,C.ex0,C.exR,C.ex_,C.etA,C.eyj,C.eyi,C.eyk,C.eyh,C.euJ,C.euI,C.euK,C.euH,C.eyu,C.eyp,C.eyt,C.eyl,C.eym,C.eyn,C.eyo,C.eyr,C.eys,C.eyx,C.eu0,C.etO,C.etP,C.etQ,C.etN,C.etU,C.etT,C.etM,C.etL,C.etX,C.etK,C.etY,C.evS,C.evR,C.euW,C.euV,C.euU,C.euT,C.euS,C.euR,C.euQ,C.euP,C.euM,C.euO,C.euN,C.euL,C.ev7,C.ewN,C.ewO,C.d48,C.d4v,C.d4w,C.d42,C.d41,C.d45,C.d43,C.d44,C.ezu,C.ezk,C.ezt,C.ezl,C.ezm,C.ezg,C.ezh,C.ezi,C.ezj,C.ezw,C.fIH,C.fII,C.fIJ,C.eyX,C.eyY,C.eyZ,C.ez1,C.ez2,C.ez5,C.ez6,C.ez4,C.ez7,C.ez3,C.eyW,C.eyV,C.ez9,C.eza,C.ezc,C.ezd,C.esE,C.esD,C.esz,C.esC,C.ezf,C.eze,C.fCY,C.fCX,C.ehJ,C.ehK])
t(C.aRD,B.J)
u(B.lX,[C.a4_,C.axv,C.awa,C.xH,C.xK,C.kX,C.tr,C.BI,C.rC,C.w5,C.as3,C.J_,C.arv,C.uP,C.mE,C.hF,C.a8P])
u(C.bPB,[C.cAt,C.bPC])
u(C.cjH,[C.cjL,C.at6])
t(C.cjK,C.cjF)
t(C.cjJ,C.cjE)
t(C.cjM,C.cjJ)
t(C.cjI,C.cjG)
t(C.cjC,C.cjD)
t(C.baw,B.oX)
t(C.cu0,B.avD)
t(C.a8B,B.xu)
u(B.ag,[C.a14,C.YN,C.YL,C.aqH,C.W_,C.W0,C.a04,C.a0B,C.a0A,C.aEl,C.ZY,C.NF,C.Zv,C.ZQ,C.aoH,C.aJb,C.Vh,C.azX,C.a7T,C.O8,C.azi,C.K0,C.a_I,C.Wb,C.Wc,C.aEH,C.arA,C.a7U])
u(B.ah,[C.aJu,C.ay2,C.axZ,C.aEa,C.aEr,C.aEt,C.aFR,C.aHN,C.aHM,C.aMf,C.aBR,C.aLM,C.aAe,C.bgr,C.aLy,C.aNw,C.aLL,C.bej,C.aMd,C.aMo,C.aKv,C.bd4,C.aMp,C.aEK,C.bkJ,C.aEI,C.aEL,C.bks])
u(B.av,[C.ay0,C.adq,C.acP,C.bjy,C.adt,C.af8,C.b18,C.bsS,C.b1t,C.bm_,C.brq,C.b_n,C.b1w,C.adw,C.adN,C.b1u,C.IZ,C.b_q,C.bdj,C.PO,C.K6,C.bhY,C.bhX,C.bvg])
u(B.Hu,[C.bcM,C.bug,C.aJO,C.bft,C.brO])
u(B.mT,[C.bcL,C.b9h,C.brL,C.bci,C.bfR,C.bi3,C.beX,C.bfN,C.bfv,C.boh,C.bao,C.ba2,C.bvc,C.bsd,C.brm,C.beQ,C.b1r,C.bqj,C.brj])
t(C.bkq,C.aMf)
t(C.bjP,C.aLM)
t(C.bjA,C.aLy)
t(C.buJ,C.aNw)
t(C.bjL,C.aLL)
t(C.bko,C.aMd)
t(C.bxu,C.aMo)
t(C.aEJ,C.bxu)
t(C.bd5,C.aKv)
t(C.aEM,C.aMp)
t(C.bv3,B.iU)
t(C.a8O,B.kx)
t(C.cjP,C.b3c)
t(C.aio,C.a31)
u(B.XN,[C.aRt,C.aT_])
t(C.ax5,C.aRt)
w(C.aMf,B.co)
w(C.aLM,B.co)
w(C.aLy,B.co)
w(C.aLL,B.co)
w(C.aMd,B.co)
w(C.aNw,B.co)
w(C.aKv,B.eN)
w(C.aMo,B.co)
v(C.bxu,B.ez)
w(C.aMp,B.co)})()
B.jk(b.typeUniverse,JSON.parse('{"aSc":{"hM":["aSc"]},"o0":{"aSc":[],"hM":["aSc"]},"aRD":{"J":["S1"],"J.E":"S1"},"baw":{"oX":[]},"a8B":{"xu":[],"ol":[]},"a14":{"ag":[],"v":[]},"aJu":{"ah":["a14"]},"YN":{"ag":[],"v":[]},"YL":{"ag":[],"v":[]},"ay2":{"ah":["YN"]},"axZ":{"ah":["YL"]},"ay0":{"av":[],"v":[]},"aqH":{"ag":[],"v":[]},"aEa":{"ah":["aqH"]},"adq":{"av":[],"v":[]},"acP":{"av":[],"v":[]},"adt":{"av":[],"v":[]},"af8":{"av":[],"v":[]},"bjy":{"av":[],"v":[]},"W_":{"ag":[],"v":[]},"aEr":{"ah":["W_"]},"b18":{"av":[],"v":[]},"bcM":{"aC":[]},"bcL":{"aC":[]},"bug":{"aC":[]},"b9h":{"aC":[]},"brL":{"aC":[]},"W0":{"ag":[],"v":[]},"aEt":{"ah":["W0"]},"bci":{"aC":[]},"a04":{"ag":[],"v":[]},"aFR":{"ah":["a04"]},"bfR":{"aC":[]},"a0B":{"ag":[],"v":[]},"a0A":{"ag":[],"v":[]},"aEl":{"ag":[],"v":[]},"ZY":{"ag":[],"v":[]},"aHN":{"ah":["a0B"]},"aHM":{"ah":["a0A"]},"bkq":{"ah":["aEl"]},"bi3":{"aC":[]},"aBR":{"ah":["ZY"]},"bsS":{"av":[],"v":[]},"b1t":{"av":[],"v":[]},"bm_":{"av":[],"v":[]},"NF":{"ag":[],"v":[]},"Zv":{"ag":[],"v":[]},"bjP":{"ah":["NF"]},"brq":{"av":[],"v":[]},"beX":{"aC":[]},"b_n":{"av":[],"v":[]},"aAe":{"ah":["Zv"]},"ZQ":{"ag":[],"v":[]},"bgr":{"ah":["ZQ"]},"bfN":{"aC":[]},"bfv":{"aC":[]},"boh":{"aC":[]},"bao":{"aC":[]},"ba2":{"aC":[]},"bvc":{"aC":[]},"bsd":{"aC":[]},"brm":{"aC":[]},"beQ":{"aC":[]},"aoH":{"ag":[],"v":[]},"b1w":{"av":[],"v":[]},"bjA":{"ah":["aoH"]},"adw":{"av":[],"v":[]},"adN":{"av":[],"v":[]},"aJb":{"ag":[],"v":[]},"Vh":{"ag":[],"v":[]},"IZ":{"av":[],"v":[]},"azX":{"ag":[],"v":[]},"a7T":{"ag":[],"v":[]},"b1u":{"av":[],"v":[]},"b1r":{"aC":[]},"buJ":{"ah":["aJb"]},"aJO":{"aC":[]},"bjL":{"ah":["Vh"]},"bej":{"ah":["azX"]},"bko":{"ah":["a7T"]},"b_q":{"av":[],"v":[]},"bft":{"aC":[]},"bqj":{"aC":[]},"brj":{"aC":[]},"azi":{"ag":[],"v":[]},"K0":{"ag":[],"v":[]},"a_I":{"ag":[],"v":[]},"K6":{"av":[],"v":[]},"O8":{"ag":[],"v":[]},"aEJ":{"ah":["O8"],"ez":[]},"bd5":{"ah":["azi"]},"bdj":{"av":[],"v":[]},"bd4":{"ah":["K0"]},"PO":{"av":[],"v":[]},"aEM":{"ah":["a_I"]},"brO":{"aC":[]},"bhY":{"av":[],"v":[]},"bhX":{"av":[],"v":[]},"Wb":{"ag":[],"v":[]},"Wc":{"ag":[],"v":[]},"aEH":{"ag":[],"v":[]},"arA":{"ag":[],"v":[]},"aEK":{"ah":["Wb"]},"bkJ":{"ah":["Wc"]},"aEI":{"ah":["aEH"]},"bv3":{"iU":[]},"aEL":{"ah":["arA"]},"bvg":{"av":[],"v":[]},"a7U":{"ag":[],"v":[]},"bks":{"ah":["a7U"]},"a8O":{"kx":["fu<eT>"],"kj":["fu<eT>"]},"aio":{"a31":[]},"aRt":{"j6":[],"fg":[]},"ax5":{"j6":[],"fg":[]},"aT_":{"j6":[],"fg":[]}}'))
var y={z:"Amri ya kifalme \xb7 bendi za muhuri juu na chini.",L:"Kichwa cha Mtu: Dollar elfu ishirini ($20,000)",f:"Mimi [Jina la Baba wa Binti], wa jamaa ya [Jina la Jamii ya Binti], Nyumba ya [Jina la Nyumba ya Binti]. Nimehowesha binti wangu aitwaye [Jina la Binti], na ndugu [Jina la Kijana], wa jamaa ya [Jina la Jamii ya Mume], Nyumba ya [Jina la Nyumba ya Mume], kijana wa [Jina la Baba wa Mume]. Makubaliano haya yanathibitishwa rasmi na pande zote mbili ili kuweka kumbukumbu na kuimarisha uhusiano mwema kati ya familia zote mbili.",O:"Mimi [Jina la Baba wa Mume], wa jamaa ya [Jina la Jamii ya Mume], Nyumba ya [Jina la Nyumba ya Mume]. Nimetowa mahali ya kuhoweya kijana wangu aitwaye [Jina la Kijana] na [Jina la Binti], binti wa [Jina la Baba wa Binti], wa jamaa ya [Jina la Jamii ya Binti], Nyumba ya [Jina la Nyumba ya Binti]. Makubaliano haya yanathibitishwa rasmi na pande zote mbili ili kuweka kumbukumbu na kuimarisha uhusiano mwema kati ya familia zote mbili.",s:"Mpaka mwembamba wa dhahabu \xb7 vichwa vya bluu ya kifalme.",Q:"Mpaka mwembamba wa dhahabu \xb7 vichwa vya dhahabu.",H:"Nguo ya kente yenye dirisha la karatasi katikati.",n:"Nguo ya udongo yenye alama \xb7 karatasi ndani.",M:'PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".',S:"The AI sent something I could not read. Try again.",g:"Your story appears here. Add a picture, then ask the AI to write it."}
var x=(function rtii(){var w=B.aw
return{bu:w("LS"),U:w("vB<q8>"),bz:w("u"),M:w("dD<n>"),bo:w("jF"),g7:w("Mo"),gc:w("aA<iA?>"),bq:w("aA<~>"),cc:w("MB"),fS:w("E6"),an:w("Ia"),bm:w("O<S1>"),X:w("O<a39>"),f3:w("O<aSc>"),aK:w("O<nf>"),V:w("O<ac>"),O:w("O<u>"),fA:w("O<lG>"),d5:w("O<aA<by<H,+icon3d,picture(n?,n?)>>>"),bH:w("O<aA<dK>>"),fG:w("O<aA<~>>"),aF:w("O<nl>"),cd:w("O<ai<jq>>"),ez:w("O<a8<n,aD>>"),d:w("O<a8<n,@>>"),B:w("O<mA>"),h:w("O<jq>"),gE:w("O<zK>"),k:w("O<or>"),g:w("O<lO>"),D:w("O<i4>"),u:w("O<eM>"),m:w("O<uP>"),i:w("O<hF>"),aC:w("O<a8a>"),o:w("O<zL>"),e3:w("O<aD>"),dN:w("O<t>"),v:w("O<h9>"),cR:w("O<iS>"),J:w("O<ji>"),gx:w("O<ph<n>>"),f2:w("O<+(a1,n)>"),L:w("O<+(n,n)>"),aD:w("O<+data,mimeType(n,n)>"),G:w("O<+(L,L)>"),ek:w("O<+(H,n)>"),n:w("O<+(H,H)>"),r:w("O<cS>"),s:w("O<n>"),aS:w("O<iU>"),p:w("O<v>"),eR:w("O<fg>"),fT:w("O<b9_>"),bx:w("O<aFk>"),gz:w("O<afi>"),x:w("O<L>"),t:w("O<H>"),dS:w("O<aC?>"),bA:w("O<t?>"),Z:w("O<H?>"),cA:w("O<cj>"),A:w("cz<ah<ag>>"),gL:w("ai<or>"),R:w("ai<i4>"),j:w("ai<@>"),bW:w("ai<H>"),e:w("by<H,+icon3d,picture(n?,n?)>"),P:w("a8<n,@>"),f:w("a8<@,@>"),gI:w("a8<H,+icon3d,picture(n?,n?)>"),bR:w("N<hF,v>"),eC:w("N<nR,n>"),cT:w("N<jL,D>"),dv:w("N<n,n>"),f0:w("N<n,v>"),gN:w("N<H,pN>"),gh:w("N<mE,js<mE>>"),w:w("iE"),ei:w("iA"),g2:w("rs"),fB:w("EI"),b6:w("zK"),gX:w("a82"),dt:w("lo"),ea:w("or"),bt:w("lO"),I:w("i4"),F:w("eM"),fO:w("mE"),ff:w("uP"),fP:w("hF"),Q:w("w5"),dO:w("arw"),a:w("ct"),C:w("aD"),dw:w("at7"),di:w("a8P"),Y:w("eT"),fz:w("+(n,n)"),dL:w("+(H,H)"),eb:w("+claimCode,qrPayload(n?,n)"),aH:w("+icon3d,picture(n?,n?)"),cz:w("Fd"),dB:w("dx<t>"),bJ:w("dx<n>"),_:w("e1<n>"),N:w("n"),fw:w("q8"),bO:w("as"),K:w("bn<t>"),b:w("bn<L>"),E:w("dK"),W:w("cs<n>"),ac:w("cs<H>"),ex:w("jO<lO>"),cI:w("jO<n>"),cl:w("jO<L>"),b4:w("Z<ll>"),a8:w("Z<mf>"),fR:w("Z<+(n,n)>"),co:w("ec<t>"),l:w("v"),b2:w("bY<~>"),ev:w("qb<dW>"),dT:w("bg<~>"),q:w("n4"),y:w("R"),gR:w("L"),z:w("@"),S:w("H"),at:w("b9?"),gw:w("ai<a8<n,@>>?"),aT:w("ai<i4>?"),c:w("ai<@>?"),aP:w("iA?"),af:w("i4?"),go:w("b1y?"),a6:w("a8b?"),cK:w("aD?"),bZ:w("+bytes,dataUrl,fileName(dK,n,n)?"),gl:w("+claimCode,qrPayload,token(n?,n,n)?"),T:w("n?"),dd:w("dK?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.aYo=new B.bL(A.ay,null,null,H.ap7,null)
D.aYx=new B.df(0,-0.15)
D.aYz=new B.df(0.62,0)
D.aYC=new B.df(-0.35,-0.45)
D.aYM=new B.df(0.9,-0.85)
D.b_G=new B.bk(H.T5,H.T5,A.hu,A.hu)
D.b_V=new B.ay(A.b5,1,A.r,-1)
D.bkQ=new B.u(1,0.4196078431372549,0.2901960784313726,0.2,A.q)
D.b06=new B.ay(D.bkQ,1,A.r,-1)
D.b0i=new B.ay(A.aC,1.5,A.r,-1)
D.b0n=new B.ay(A.b5,1.6,A.r,-1)
D.b0D=new B.ay(A.aC,1.4,A.r,-1)
D.b21=new B.o(null,null,null,null,null,L.H6,A.a5)
D.c10=new B.a9(A.a3,A.a8,A.x,G.a3Y,null,null)
D.b29=new B.o(null,null,null,null,null,D.c10,A.a5)
D.ac6=new B.o(A.au,null,null,A.ti,null,null,A.n)
D.be8=new B.u(1,0.16862745098039217,0.22745098039215686,0.3333333333333333,A.q)
D.bkN=new B.u(1,0.0392156862745098,0.058823529411764705,0.10196078431372549,A.q)
D.cZS=w([D.be8,D.bkN],x.O)
D.eob=new B.c0(A.A,0.5,A.x,null,0,D.cZS,null,null)
D.b2s=new B.o(null,null,null,null,null,D.eob,A.a5)
D.XD=new B.u(1,0.054901960784313725,0.08235294117647059,0.14901960784313725,A.q)
D.b0T=new B.bI(P.vq,A.a0,A.a0,A.a0)
D.b2u=new B.o(D.XD,null,D.b0T,null,null,null,A.n)
D.c2L=new B.a9(A.a3,A.a8,A.x,A.QI,null,null)
D.b2B=new B.o(null,null,null,null,null,D.c2L,A.a5)
D.adG=new B.u(1,0.058823529411764705,0.058823529411764705,0.0784313725490196,A.q)
D.b2E=new B.o(D.adG,null,null,A.qP,null,null,A.n)
D.b2I=new B.o(A.jt,null,null,null,null,null,A.a5)
D.b2L=new B.o(A_.aeR,null,H.abL,A.mm,null,null,A.n)
D.Er=new B.o(A.dK,null,null,null,null,null,A.a5)
D.b2S=new B.o(null,null,null,null,null,E.wn,A.a5)
D.d3V=w([E.afO,A.bZ],x.O)
D.c2m=new B.a9(A.b3,A.b6,A.x,D.d3V,null,null)
D.b2W=new B.o(null,null,null,A.mm,null,D.c2m,A.n)
D.deO=w([A.bj,A.dK,A.k7],x.O)
D.a23=new B.a9(A.ay,A.aD,A.x,D.deO,null,null)
D.b38=new B.o(null,null,null,null,null,D.a23,A.n)
D.b39=new B.o(D.adG,null,null,A.kS,null,null,A.n)
D.cua=w([A.d8,A.bj],x.O)
D.c2d=new B.a9(A.ay,A.aD,A.x,D.cua,null,null)
D.b3d=new B.o(null,null,null,null,null,D.c2d,A.n)
D.b3n=new B.o(null,null,null,null,null,G.uv,A.a5)
D.b3I=new B.o(A.afQ,null,null,null,null,null,A.a5)
D.bf4=new B.u(0.5647058823529412,0,0,0,A.q)
D.acg=new B.ac(0,A.G,D.bf4,A.Iz,28)
D.b5R=new B.aWl()
D.b6p=new C.cu0()
D.b6B=new C.baw()
D.acM=new B.ci(A.A,null,null,A.a1T,null)
D.b9g=new B.fi(null,null,null,null,null,E.na,null,null,null,null)
D.b78=new B.ci(A.A,null,null,D.b9g,null)
D.bMt=new B.ae(A.e3,28,A.c,null,null,null)
D.b7E=new B.ci(A.A,null,null,D.bMt,null)
D.b9d=new B.fi(2,null,null,null,null,A.c_,null,null,null,null)
D.b80=new B.ci(A.A,null,null,D.b9d,null)
D.bMO=new B.ae(L.Ok,40,A.bx,null,null,null)
D.b81=new B.ci(A.A,null,null,D.bMO,null)
D.ba7=new B.u(1,1,0.9019607843137255,0.6549019607843137,A.q)
D.baj=new B.u(1,0.10588235294117647,0.13333333333333333,0.19607843137254902,A.q)
D.baL=new B.u(1,0.08235294117647059,0.10196078431372549,0.14901960784313725,A.q)
D.baT=new B.u(1,0.10980392156862745,0.07450980392156863,0.054901960784313725,A.q)
D.bbp=new B.u(1,0.47843137254901963,0.41568627450980394,0.27058823529411763,A.q)
D.bbG=new B.u(0.8,1,0.9450980392156862,0.9490196078431372,A.q)
D.bbI=new B.u(0.0784313725490196,0.788235294117647,0.6352941176470588,0.15294117647058825,A.q)
D.Li=new B.u(1,0.0392156862745098,0.08235294117647059,0.14901960784313725,A.q)
D.bca=new B.u(0.2,0.9607843137254902,0.6196078431372549,0.043137254901960784,A.q)
D.bch=new B.u(0.13333333333333333,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.q)
D.ae0=new B.u(1,0.1411764705882353,0.09411764705882353,0.07058823529411765,A.q)
D.bd6=new B.u(1,0.22745098039215686,0.16470588235294117,0.10196078431372549,A.q)
D.bdY=new B.u(1,0.9098039215686274,0.9333333333333333,0.9647058823529412,A.q)
D.aef=new B.u(1,1,1,0.9725490196078431,A.q)
D.beh=new B.u(0,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.q)
D.beu=new B.u(1,1,0.5490196078431373,0.10196078431372549,A.q)
D.bey=new B.u(0.6,0.9098039215686274,0.7058823529411765,0.7215686274509804,A.q)
D.beN=new B.u(0.4,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.q)
D.bf9=new B.u(1,1,0.9568627450980393,0.8392156862745098,A.q)
D.bgL=new B.u(1,1,0.996078431372549,0.9725490196078431,A.q)
D.Xn=new B.u(0.8509803921568627,0,0,0,A.q)
D.bgV=new B.u(1,0.0784313725490196,0.06666666666666667,0.047058823529411764,A.q)
D.bh1=new B.u(1,0.0784313725490196,0.06666666666666667,0.0392156862745098,A.q)
D.af9=new B.u(0.6,0,0,0,A.q)
D.afb=new B.u(0,1,0.7019607843137254,0.2784313725490196,A.q)
D.biC=new B.u(1,0.12156862745098039,0.10196078431372549,0.058823529411764705,A.q)
D.tC=new B.u(1,0.08235294117647059,0.12156862745098039,0.21176470588235294,A.q)
D.bj2=new B.u(1,0.35294117647058826,0.41568627450980394,0.5215686274509804,A.q)
D.bjv=new B.u(1,1,0.8784313725490196,0.6392156862745098,A.q)
D.bjT=new B.u(0.4,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.q)
D.ag0=new B.u(1,0.47843137254901963,0.23137254901960785,0.2901960784313726,A.q)
D.XN=new B.u(0,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.q)
D.B7=new B.u(1,0.5411764705882353,0.39215686274509803,0.09019607843137255,A.q)
D.LS=new B.u(1,0.0784313725490196,0.09803921568627451,0.16470588235294117,A.q)
D.jq=new B.u(1,0.07058823529411765,0.12941176470588237,0.23921568627450981,A.q)
D.agq=new B.u(0,1,0.9686274509803922,0.8392156862745098,A.q)
D.XZ=new B.u(1,0.2901960784313726,0.17254901960784313,0.10588235294117647,A.q)
D.bnv=new B.u(1,0.24705882352941178,0.16470588235294117,0.0392156862745098,A.q)
D.bo1=new B.u(0.6,1,0.9686274509803922,0.9019607843137255,A.q)
D.bof=new B.u(0.6,1,0.984313725490196,0.9215686274509803,A.q)
D.Yl=new B.u(1,0.07450980392156863,0.10980392156862745,0.2,A.q)
D.bps=new B.u(1,0.8627450980392157,0.9215686274509803,0.9803921568627451,A.q)
D.xP=new B.u(1,0.9137254901960784,0.7686274509803922,0.41568627450980394,A.q)
D.bpY=new B.u(1,0.058823529411764705,0.0784313725490196,0.12549019607843137,A.q)
D.bqh=new B.hL(A.aZ,!0,null,null)
D.flN=new B.F(!0,A.aB,null,null,null,null,22,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fMj=new B.y("Bio link",null,D.flN,null,null,null,null,null,null,null,null,null)
D.b7V=new B.ci(A.A,null,null,D.fMj,null)
D.bqx=new B.hL(A.WG,!0,D.b7V,null)
D.Mi=new C.a4_(0,"none")
D.ahy=new C.a4_(1,"deflate")
D.ahz=new C.a4_(2,"bzip2")
D.brv=new B.kp(0.165,0.84,0.44,1)
D.d4e=w([A.ca,A.dD,A.aC],x.O)
D.c1v=new B.a9(A.ay,A.aD,A.x,D.d4e,null,null)
D.b26=new B.o(null,null,null,null,null,D.c1v,A.n)
D.bVN=new B.ae(A.eV,null,A.ae,null,null,null)
D.b8A=new B.ci(A.A,null,null,D.bVN,null)
D.bs1=new B.kU(D.b26,A.bf,D.b8A,null)
D.bnL=new B.u(0.058823529411764705,1,1,1,A.q)
D.d7v=w([A.bz,A.qZ,A.qZ,D.bnL],x.O)
D.cLv=w([0,0.32,0.7,1],x.x)
D.c23=new B.a9(A.ay,A.aD,A.x,D.d7v,D.cLv,null)
D.b1W=new B.o(null,null,null,null,null,D.c23,A.n)
D.bs7=new B.kU(D.b1W,A.bf,null,null)
D.btf=new B.mt(1,1,null,null,null,A.bn,null)
D.bti=new B.mt(1,null,null,null,null,D.XZ,null)
D.btM=new B.b9(125e4)
D.btS=new B.b9(17e4)
D.bu2=new B.b9(35964e8)
D.bu9=new B.b9(55e4)
D.bud=new B.b9(68e4)
D.buD=new B.ii(0,0,0,5)
D.buT=new B.Q(0,16,16,0)
D.bv2=new B.Q(0,36,0,36)
D.bva=new B.Q(0,54,0,0)
D.bvh=new B.Q(10,0,10,3)
D.bvs=new B.ii(10,16,10,10)
D.bvE=new B.Q(10,6,4,6)
D.bvH=new B.Q(10,8,10,6)
D.aix=new B.Q(11,8,11,11)
D.bvM=new B.Q(12,0,12,24)
D.bvY=new B.Q(12,12,12,4)
D.bw0=new B.Q(12,12,8,12)
D.bwf=new B.Q(12,8,8,12)
D.bwD=new B.Q(14,14,14,0)
D.bwI=new B.Q(14,14,14,90)
D.bx1=new B.Q(16,10,16,16)
D.bx2=new B.Q(16,10,16,20)
D.ajk=new B.Q(16,6,16,28)
D.bxC=new B.Q(18,0,18,10)
D.bxE=new B.Q(18,0,18,30)
D.bxG=new B.Q(18,10,18,12)
D.bxH=new B.Q(18,10,18,14)
D.by0=new B.Q(18,16,14,18)
D.by5=new B.Q(18,18,18,12)
D.byb=new B.Q(18,26,18,12)
D.byg=new B.Q(18,34,18,34)
D.byh=new B.Q(18,4,18,14)
D.bym=new B.Q(18,8,18,24)
D.byF=new B.Q(20,16,14,4)
D.byK=new B.Q(20,18,12,4)
D.byP=new B.Q(20,20,12,20)
D.byS=new B.Q(20,22,20,20)
D.byX=new B.Q(20,6,20,6)
D.bz6=new B.Q(22,18,22,18)
D.bze=new B.Q(22,24,22,0)
D.bzh=new B.Q(22,24,22,4)
D.bzp=new B.Q(22,60,22,22)
D.bzv=new B.Q(24,24,24,22)
D.bzF=new B.Q(26,10,60,10)
D.bzN=new B.Q(28,44,28,44)
D.bA3=new B.Q(32,44,32,44)
D.bAb=new B.Q(38,30,38,20)
D.bAg=new B.Q(4,0,0,6)
D.bAs=new B.ii(4,4,4,4)
D.bAT=new B.ii(6,5,6,5)
D.bAY=new B.Q(6,6,8,6)
D.bB8=new B.Q(8,14,8,14)
D.bB9=new B.Q(8,22,8,22)
D.bBh=new B.Q(8,6,12,6)
D.bBq=new B.Q(8,8,8,4)
D.ake=new B.Q(9,9,9,6)
D.bBB=new B.ii(2.5,2.5,2.5,2.5)
D.bBC=new B.Q(10.5,0,10.5,0)
D.bBD=new B.Q(7,1.5,7,1.5)
D.cWW=w([0.393,0.769,0.189,0,0,0.349,0.686,0.168,0,0,0.272,0.534,0.131,0,0,0,0,0,1,0],x.x)
D.bBT=new B.xh(null,null,D.cWW,A.AM)
D.cTQ=w([0.2126,0.7152,0.0722,0,0,0.2126,0.7152,0.0722,0,0,0.2126,0.7152,0.0722,0,0,0,0,0,1,0],x.x)
D.bBU=new B.xh(null,null,D.cTQ,A.AM)
D.aSp=new B.F(!0,A.aB,null,null,null,null,11,A.u,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fLC=new B.y("WORD DESIGN",null,D.aSp,null,null,null,null,null,null,null,null,null)
D.bCt=new B.bA(1,A.bd,D.fLC,null)
D.fLg=new B.y("Slides database",null,Ab.t1,null,null,null,null,null,null,null,null,null)
D.fIt=new B.y("Admin only \xb7 keep as many as you like",null,U.aRV,null,null,null,null,null,null,null,null,null)
D.dnh=w([D.fLg,A.bC,D.fIt],x.p)
D.bqX=new B.fj(A.ag,A.e,A.j,A.E,null,A.p,null,0,D.dnh,null)
D.bCw=new B.bA(1,A.bd,D.bqX,null)
D.fCN=new B.y("NGMY logo",null,A.fY,null,null,null,null,null,null,null,null,null)
D.bCz=new B.bA(1,A.bd,D.fCN,null)
D.fjz=new B.F(!0,A.ae,null,null,null,null,12,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fNE=new B.y("TALK TO THE EDITOR",null,D.fjz,null,null,null,null,null,null,null,null,null)
D.bCS=new B.bA(1,A.bd,D.fNE,null)
D.fwz=new B.y("Tell the AI what to change",null,Ab.t1,null,null,null,null,null,null,null,null,null)
D.bDc=new B.bA(1,A.bd,D.fwz,null)
D.bEo=new B.DW(!0,"video/mp4")
D.fhO=new B.F(!0,A.c,null,null,null,null,16,A.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fuw=new B.y("Move presentations between devices",null,D.fhO,null,null,null,!1,null,null,1,null,null)
D.bEs=new B.qv(A.e0,A.a3,A.f,D.fuw,null)
D.fvK=new B.y("Edit in Slides",null,A.iY,null,null,null,null,null,null,null,null,null)
D.bEt=new B.qv(A.e0,A.A,A.f,D.fvK,null)
D.bEI=new B.ds(1,A.cn,D.bEt,null)
D.a0j=new B.a1(60988,"MaterialIcons",!1)
D.bI6=new B.a1(61352,"MaterialIcons",!1)
D.alM=new B.a1(61531,"MaterialIcons",!1)
D.bJj=new B.a1(63062,"MaterialIcons",!1)
D.bJq=new B.a1(63109,"MaterialIcons",!1)
D.bJC=new B.a1(63206,"MaterialIcons",!1)
D.amw=new B.a1(63238,"MaterialIcons",!1)
D.bJU=new B.a1(63338,"MaterialIcons",!1)
D.a0Q=new B.a1(63365,"MaterialIcons",!1)
D.a0R=new B.a1(63367,"MaterialIcons",!1)
D.a0S=new B.a1(63368,"MaterialIcons",!1)
D.amH=new B.a1(63384,"MaterialIcons",!1)
D.bKa=new B.a1(63525,"MaterialIcons",!1)
D.bKd=new B.a1(63568,"MaterialIcons",!1)
D.bKy=new B.a1(983072,"MaterialIcons",!1)
D.bKW=new B.a1(983271,"MaterialIcons",!0)
D.anQ=new B.a1(983965,"MaterialIcons",!1)
D.anR=new B.a1(983966,"MaterialIcons",!1)
D.bLO=new B.a1(984592,"MaterialIcons",!1)
D.bM5=new B.ae(A.ub,16,A.aB,null,null,null)
D.bMc=new B.ae(A.od,null,A.c,null,null,null)
D.ao_=new B.ae(A.qe,18,A.c,null,null,null)
D.bMu=new B.ae(A.BS,18,O.lu,null,null,null)
D.bNa=new B.ae(A.jQ,11,null,null,null,null)
D.bNl=new B.ae(A.a0A,null,A.eo,null,null,null)
D.bNT=new B.ae(A.rn,18,A.aB,null,null,null)
D.bNZ=new B.ae(A3.C5,14,null,null,null,null)
D.bO_=new B.ae(A.ec,28,A.cs,null,null,null)
D.bOb=new B.ae(A.qf,20,A.c,null,null,null)
D.bOi=new B.ae(A.yK,null,null,null,null,null)
D.bOo=new B.ae(A.jP,18,A.iK,null,null,null)
D.bOt=new B.ae(A.l5,null,null,null,null,null)
D.bJl=new B.a1(63065,"MaterialIcons",!1)
D.bP6=new B.ae(D.bJl,15,A.c,null,null,null)
D.bJr=new B.a1(63113,"MaterialIcons",!1)
D.bPc=new B.ae(D.bJr,null,A.ae,null,null,null)
D.bPA=new B.ae(A.u8,22,A.bM,null,null,null)
D.bPU=new B.ae(A.w5,18,null,null,null,null)
D.bQ_=new B.ae(A.C9,12,A.c,null,null,null)
D.bLr=new B.a1(983687,"MaterialIcons",!1)
D.bQa=new B.ae(D.bLr,null,A.bj,null,null,null)
D.bQj=new B.ae(A.hI,null,A.bj,null,null,null)
D.bQC=new B.ae(A.p8,22,A.c,null,null,null)
D.bQG=new B.ae(A.cx,13,A.c,null,null,null)
D.bQM=new B.ae(A.ec,26,A.aw,null,null,null)
D.bQQ=new B.ae(A.rr,26,A.c,null,null,null)
D.Ox=new B.ae(A.jQ,8,A.c,null,null,null)
D.bR8=new B.ae(A.qe,40,A.c,null,null,null)
D.bR9=new B.ae(A.bH3,null,null,null,null,null)
D.bRd=new B.ae(A.un,20,null,null,null,null)
D.bLq=new B.a1(983683,"MaterialIcons",!1)
D.bRn=new B.ae(D.bLq,null,A.b_,null,null,null)
D.bRo=new B.ae(A.jQ,16,A.bj,null,null,null)
D.bRJ=new B.ae(A.rs,null,null,null,null,null)
D.aox=new B.ae(A.w7,22,A.c,null,null,null)
D.bRO=new B.ae(A.e3,17,A.c,null,null,null)
D.aoy=new B.ae(A.jQ,9,A.c,null,null,null)
D.bRT=new B.ae(A.w2,null,null,null,null,null)
D.bHk=new B.a1(57744,"MaterialIcons",!1)
D.bS_=new B.ae(D.bHk,null,null,null,null,null)
D.bS2=new B.ae(A.w2,16,null,null,null,null)
D.bLX=new B.a1(985181,"MaterialIcons",!1)
D.GY=new B.ae(D.bLX,null,null,null,null,null)
D.bSe=new B.ae(A.l5,16,A.bM,null,null,null)
D.bLj=new B.a1(983615,"MaterialIcons",!1)
D.bSg=new B.ae(D.bLj,12,A.c,null,null,null)
D.aoE=new B.ae(A.yt,16,null,null,null,null)
D.bSo=new B.ae(A.e3,21,A.c,null,null,null)
D.bSt=new B.ae(A.hI,17,A.c,null,null,null)
D.bSu=new B.ae(A.u8,null,null,null,null,null)
D.bSL=new B.ae(A.a1w,20,A.aB,null,null,null)
D.bT_=new B.ae(A.o9,22,E.na,null,null,null)
D.bT6=new B.ae(A.rp,13,A.ae,null,null,null)
D.bT8=new B.ae(A.anC,20,A.aB,null,null,null)
D.bH1=new B.a1(57495,"MaterialIcons",!1)
D.bTd=new B.ae(D.bH1,null,null,null,null,null)
D.bTh=new B.ae(A.oa,18,A.c,null,null,null)
D.bTD=new B.ae(A.uq,28,A.c,null,null,null)
D.bTO=new B.ae(D.amw,null,A.aC,null,null,null)
D.bTP=new B.ae(A.qf,22,A.c,null,null,null)
D.aoN=new B.ae(A.a0f,16,null,null,null,null)
D.bUB=new B.ae(A.u8,32,A.c,null,null,null)
D.bVj=new B.ae(A.jd,22,A.c,null,null,null)
D.bVn=new B.ae(A.rr,22,A.ae,null,null,null)
D.ap1=new B.ae(A.ub,null,A.bU,null,null,null)
D.bWh=new B.ae(A.ua,18,null,null,null,null)
D.bWT=new B.ae(A.e3,18,A.bI,null,null,null)
D.a1W=new B.ae(A.cx,18,A.aB,null,null,null)
D.bWZ=new B.ae(A.anw,null,null,null,null,null)
D.bXp=new B.e3(null,null,null,null,null,null,null,null,null,null,"Type here\u2026",null,A.aSd,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.eE,!0,null,null,null,null)
D.f9E=new B.F(!0,A.bL,null,null,null,null,null,A.cw,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bXH=new B.e3(null,null,null,null,null,null,null,null,null,null,"Type here\u2026",null,D.f9E,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,A.af,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.eE,!0,null,null,null,null)
D.bY7=new B.e3(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"",null,null,null,null,null,null,null,null,null,null,null,A.eE,!0,null,null,null,null)
D.d_Q=w([A.dK,A.aC],x.O)
D.c_e=new B.a9(A.a3,A.a8,A.x,D.d_Q,null,null)
D.c_p=new B.a9(A.b3,A.b6,A.UI,A.aw5,null,null)
D.baA=new B.u(1,0.5568627450980392,0.5411764705882353,0.5215686274509804,A.q)
D.bfc=new B.u(1,0.23529411764705882,0.22745098039215686,0.21568627450980393,A.q)
D.biD=new B.u(1,0.7254901960784313,0.7058823529411765,0.6784313725490196,A.q)
D.bcZ=new B.u(1,0.1803921568627451,0.17254901960784313,0.16470588235294117,A.q)
D.cLx=w([D.baA,D.bfc,D.biD,D.bcZ],x.O)
D.c_I=new B.a9(A.ay,A.aD,A.x,D.cLx,A.Hv,null)
D.dnq=w([A.cZ,A.bA,A.b5],x.O)
D.c_K=new B.a9(A.b3,A.b6,A.UI,D.dnq,null,null)
D.doT=w([A.bj,A.c9],x.O)
D.c_P=new B.a9(A.a3,A.a8,A.x,D.doT,null,null)
D.djJ=w([A.hC,A.d9,A.aE],x.O)
D.c_R=new B.a9(A.ay,A.aD,A.x,D.djJ,null,null)
D.d5W=w([A.cN,A.ff],x.O)
D.c_V=new B.a9(A.a3,A.a8,A.x,D.d5W,null,null)
D.dnj=w([O.lu,A.d9],x.O)
D.apN=new B.a9(A.a3,A.a8,A.x,D.dnj,null,null)
D.bfT=new B.u(1,0.9686274509803922,0.8901960784313725,0.6313725490196078,A.q)
D.dng=w([D.bfT,D.xP,A.c_],x.O)
D.c0_=new B.a9(A.a3,A.a8,A.x,D.dng,null,null)
D.d1w=w([A.bm,A.cS,A.eh],x.O)
D.c00=new B.a9(A.ay,A.aD,A.x,D.d1w,null,null)
D.ON=new B.a9(A.a3,A.a8,A.x,A.HI,null,null)
D.boE=new B.u(1,0.9019607843137255,0.7568627450980392,0.3607843137254902,A.q)
D.cEu=w([D.boE,A.c_,A.js],x.O)
D.apS=new B.a9(A.ay,A.aD,A.x,D.cEu,null,null)
D.dbh=w([A.vA,A.az,D.B7],x.O)
D.c12=new B.a9(A.a3,A.a8,A.x,D.dbh,null,null)
D.bpZ=new B.u(1,0.43137254901960786,0.41568627450980394,0.396078431372549,A.q)
D.bdX=new B.u(1,0.6627450980392157,0.6431372549019608,0.615686274509804,A.q)
D.bjI=new B.u(1,0.3333333333333333,0.3215686274509804,0.3058823529411765,A.q)
D.d0D=w([D.bpZ,D.bdX,D.bjI],x.O)
D.apT=new B.a9(A.a3,A.a8,A.x,D.d0D,null,null)
D.bfV=new B.u(1,0.0392156862745098,0.06666666666666667,0.13333333333333333,A.q)
D.c30=w([Av.ahd,D.bfV],x.O)
D.c1b=new B.a9(A.b3,A.b6,A.x,D.c30,null,null)
D.cZG=w([A.n8,A.bx],x.O)
D.c1f=new B.a9(A.b3,A.b6,A.x,D.cZG,null,null)
D.dgu=w([A.aC,A.dD],x.O)
D.c1m=new B.a9(A.a3,A.a8,A.x,D.dgu,null,null)
D.agb=new B.u(1,0.1803921568627451,0.25882352941176473,0.4392156862745098,A.q)
D.axN=w([D.agb,D.jq,D.Li],x.O)
D.c1O=new B.a9(A.ay,A.aD,A.x,D.axN,null,null)
D.cEm=w([A.du,A.dL],x.O)
D.c1Z=new B.a9(A.b3,A.b6,A.x,D.cEm,null,null)
D.ddr=w([A.xx,Ay.F6],x.O)
D.c2N=new B.a9(A.a3,A.a8,A.x,D.ddr,null,null)
D.fEl=new B.y("Which Bio link?",null,A.cB,null,null,null,null,null,null,null,null,null)
D.c2Y=new B.pT(null,D.fEl,null,null,null,null,null,null,null,null,!0,null,null,!1,null,null,null,!1,null,null,null,null,null,null,null,null,!0,null,null)
D.z5=w([82,9,106,213,48,54,165,56,191,64,163,158,129,243,215,251,124,227,57,130,155,47,255,135,52,142,67,68,196,222,233,203,84,123,148,50,166,194,35,61,238,76,149,11,66,250,195,78,8,46,161,102,40,217,36,178,118,91,162,73,109,139,209,37,114,248,246,100,134,104,152,22,212,164,92,204,93,101,182,146,108,112,72,80,253,237,185,218,94,21,70,87,167,141,157,132,144,216,171,0,140,188,211,10,247,228,88,5,184,179,69,6,208,44,30,143,202,63,15,2,193,175,189,3,1,19,138,107,58,145,17,65,79,103,220,234,151,242,207,206,240,180,230,115,150,172,116,34,231,173,53,133,226,249,55,232,28,117,223,110,71,241,26,113,29,41,197,137,111,183,98,14,170,24,190,27,252,86,62,75,198,210,121,32,154,219,192,254,120,205,90,244,31,221,168,51,136,7,199,49,177,18,16,89,39,128,236,95,96,81,127,169,25,181,74,13,45,229,122,159,147,201,156,239,160,224,59,77,174,42,245,176,200,235,187,60,131,83,153,97,23,43,4,126,186,119,214,38,225,105,20,99,85,33,12,125],x.t)
D.a5S=new C.kX(2,"elegantNavy")
D.hlq=w([A.XL,D.jq,A.c_],x.O)
D.jW=new C.xH(0,"classic")
D.a5F=new C.jq("kuhowa_elegant_navy","Kuhowa \u2014 Bluu ya Kifalme",y.s,D.a5S,4294967035,4279378237,4290283019,D.jW)
D.aH8=new C.kX(3,"elegantGold")
D.ba6=new B.u(1,1,0.9882352941176471,0.9529411764705882,A.q)
D.bb8=new B.u(1,0.6509803921568628,0.5176470588235295,0.22745098039215686,A.q)
D.aeG=new B.u(1,0.4196078431372549,0.2901960784313726,0.07058823529411765,A.q)
D.hkT=w([D.ba6,D.bb8,D.aeG],x.O)
D.a5D=new C.jq("kuhowa_elegant_gold","Kuhowa \u2014 Dhahabu",y.Q,D.aH8,4294966515,4281016592,4289102906,D.jW)
D.dJS=new C.kX(22,"goldRibbon")
D.hkP=w([A.XL,D.jq,A.i9],x.O)
D.a5w=new C.jq("kuhowa_gold_ribbon","Utepe wa Dhahabu","Pembe za bluu na dhahabu \xb7 almasi kati ya kila upande.",D.dJS,4294967035,4279378237,4291404327,D.jW)
D.dJT=new C.kX(23,"goldBaroque")
D.afn=new B.u(1,1,0.9647058823529412,0.8941176470588236,A.q)
D.hkV=w([D.afn,A.az,A.js],x.O)
D.a5x=new C.jq("kuhowa_gold_baroque","Ukanda wa Dhahabu","Ukanda mzito wa dhahabu \xb7 rosette kwenye pembe.",D.dJT,4294964964,4283053072,4292128567,D.jW)
D.dJV=new C.kX(4,"elegantEmerald")
D.bco=new B.u(1,0.9647058823529412,0.984313725490196,0.9725490196078431,A.q)
D.bdm=new B.u(1,0.054901960784313725,0.23137254901960785,0.1803921568627451,A.q)
D.hl0=w([D.bco,D.bdm,A.i9],x.O)
D.a5y=new C.jq("kuhowa_elegant_emerald","Kuhowa \u2014 Zumaridi","Mpaka mwembamba wa dhahabu \xb7 vichwa vya kijani ya zumaridi.",D.dJV,4294376440,4279122734,4291404327,D.jW)
D.dJW=new C.kX(5,"elegantBurgundy")
D.bhq=new B.u(1,1,0.9686274509803922,0.9647058823529412,A.q)
D.hl7=w([D.bhq,A.adT,A.i9],x.O)
D.a5B=new C.jq("kuhowa_elegant_burgundy","Kuhowa \u2014 Mvinyo","Mpaka mwembamba wa dhahabu \xb7 vichwa vya rangi ya mvinyo.",D.dJW,4294965238,4283043359,4291404327,D.jW)
D.dJP=new C.kX(19,"goldFiligree")
D.M_=new B.u(1,1,0.984313725490196,0.9529411764705882,A.q)
D.hkW=w([D.M_,A.az,A.js],x.O)
D.a5z=new C.jq("kuhowa_gold_filigree","Dhahabu ya Filigree","Mpaka wa dhahabu mara tatu \xb7 pembe za mapambo.",D.dJP,4294966259,4279378237,4292128567,D.jW)
D.dJQ=new C.kX(20,"goldLaurel")
D.bou=new B.u(1,0.47843137254901963,0.3607843137254902,0.0784313725490196,A.q)
D.hl8=w([A.Lb,A.i9,D.bou],x.O)
D.a5A=new C.jq("kuhowa_gold_laurel","Taji ya Dhahabu","Majani ya dhahabu kando \xb7 almasi kwenye pembe.",D.dJQ,4294966776,4282000405,4291404327,D.jW)
D.dJR=new C.kX(21,"goldCrest")
D.adK=new B.u(1,1,0.9725490196078431,0.9254901960784314,A.q)
D.boB=new B.u(1,0.4196078431372549,0.30980392156862746,0.07058823529411765,A.q)
D.hkY=w([D.adK,A.az,D.boB],x.O)
D.a5E=new C.jq("kuhowa_gold_crest","Muhuri wa Dhahabu","Medali za dhahabu kwenye pembe \xb7 shanga za lulu.",D.dJR,4294965484,4283053072,4292128567,D.jW)
D.dJU=new C.kX(24,"goldStar")
D.bpR=new B.u(1,1,0.9882352941176471,0.9647058823529412,A.q)
D.hl1=w([D.bpR,A.az,D.jq],x.O)
D.a5C=new C.jq("kuhowa_gold_star","Nyota ya Dhahabu","Nyota za dhahabu kwenye pembe \xb7 mstari wa bluu ndani.",D.dJU,4294966518,4279378237,4292128567,D.jW)
D.H8=w([D.a5F,D.a5D,D.a5w,D.a5x,D.a5y,D.a5B,D.a5z,D.a5A,D.a5E,D.a5C],x.h)
D.qr=new C.mE(0,"blank")
D.Sq=new C.mE(1,"title")
D.mR=new C.mE(2,"titleContent")
D.e3s=new C.mE(3,"twoColumn")
D.Da=new C.mE(4,"section")
D.e3t=new C.mE(5,"comparison")
D.Ij=new C.mE(6,"flashcard")
D.Ik=new C.mE(7,"quiz")
D.Il=new C.mE(8,"worksheet")
D.aqd=w([D.qr,D.Sq,D.mR,D.e3s,D.Da,D.e3t,D.Ij,D.Ik,D.Il],B.aw("O<mE>"))
D.ayU=w([Ao.X7,A.dL],x.O)
D.kG=w([A.c_,A.bM,A.hQ,A.hP,D.B7],x.O)
D.dFP=new C.j2("fireworks","Royal Fireworks","Thank you for celebrating with us",D.ayU,D.kG)
D.boO=new B.u(1,0.2901960784313726,0.050980392156862744,0.11764705882352941,A.q)
D.bho=new B.u(1,0.07058823529411765,0.011764705882352941,0.0392156862745098,A.q)
D.cZT=w([D.boO,D.bho],x.O)
D.dFG=new C.j2("confetti","Golden Confetti","Together we rise",D.cZT,D.kG)
D.cX0=w([A.nN,A.WK],x.O)
D.dFH=new C.j2("crown","Crown of Glory","Built for our community",D.cX0,D.kG)
D.bdL=new B.u(1,0.011764705882352941,0.10588235294117647,0.1803921568627451,A.q)
D.bh3=new B.u(1,0.00392156862745098,0.023529411764705882,0.058823529411764705,A.q)
D.d2T=w([D.bdL,D.bh3],x.O)
D.ux=w([A.bL,A.aP,A.c,A.aM,A.al],x.O)
D.dFB=new C.j2("aurora","Aurora Gala","A brighter future, together",D.d2T,D.ux)
D.biF=new B.u(1,0.027450980392156862,0.01568627450980392,0.00392156862745098,A.q)
D.ddx=w([G.adm,D.biF],x.O)
D.dFS=new C.j2("champagne","Champagne Toast","Cheers to every member",D.ddx,D.kG)
D.dFT=new C.j2("diamonds","Diamond Rain","Every member is a jewel",Y.azz,D.ux)
D.bb_=new B.u(1,0.3568627450980392,0.16470588235294117,0.023529411764705882,A.q)
D.bgw=new B.u(1,0.10196078431372549,0.043137254901960784,0.00784313725490196,A.q)
D.dj_=w([D.bb_,D.bgw],x.O)
D.dFw=new C.j2("starburst","Golden Starburst","Thank you!",D.dj_,D.kG)
D.c37=w([A.fe,A.xJ],x.O)
D.adv=new B.u(1,0.615686274509804,0.3058823529411765,0.3607843137254902,A.q)
D.Qk=w([A.oR,A.i7,A.vL,A.nO,D.adv],x.O)
D.dG_=new C.j2("balloons","Luxury Balloons","Let's celebrate",D.c37,D.Qk)
D.cWh=w([A.WW,A.w],x.O)
D.dFO=new C.j2("galaxy","Galaxy Spiral","The sky is not the limit",D.cWh,D.ux)
D.bmH=new B.u(1,0.047058823529411764,0.00392156862745098,0.00392156862745098,A.q)
D.da2=w([A.kz,D.bmH],x.O)
D.dFJ=new C.j2("redcarpet","Red Carpet","Tonight we shine",D.da2,D.kG)
D.bko=new B.u(1,0.10980392156862745,0.0784313725490196,0.0196078431372549,A.q)
D.biq=new B.u(1,0.0196078431372549,0.011764705882352941,0.00392156862745098,A.q)
D.deu=w([D.bko,D.biq],x.O)
D.dFy=new C.j2("coins","Gold Coin Rain","Every contribution counts",D.deu,D.kG)
D.dlH=w([A.du,A.hO],x.O)
D.dFE=new C.j2("lanterns","Sky Lanterns","Lighting the way together",D.dlH,D.kG)
D.beS=new B.u(1,0.0784313725490196,0.00784313725490196,0.0392156862745098,A.q)
D.cUa=w([A.xL,D.beS],x.O)
D.dFA=new C.j2("hearts","Floating Hearts","Made with love",D.cUa,D.Qk)
D.bby=new B.u(1,0.23137254901960785,0.0392156862745098,0.10980392156862745,A.q)
D.bcu=new B.u(1,0.058823529411764705,0.00784313725490196,0.027450980392156862,A.q)
D.dne=w([D.bby,D.bcu],x.O)
D.dFZ=new C.j2("petals","Rose Petals","Thank you, from our hearts",D.dne,D.Qk)
D.bnJ=new B.u(1,0.00784313725490196,0.06274509803921569,0.0392156862745098,A.q)
D.djk=w([A.lt,D.bnJ],x.O)
D.dFv=new C.j2("butterflies","Golden Butterflies","New beginnings",D.djk,D.kG)
D.bjF=new B.u(1,0.0392156862745098,0.0392156862745098,0.12156862745098039,A.q)
D.cVc=w([D.bjF,A.w],x.O)
D.dFR=new C.j2("neon","Neon Night","Let's go!",D.cVc,D.ux)
D.bga=new B.u(1,0.0196078431372549,0.00392156862745098,0.050980392156862744,A.q)
D.dgG=w([A.LA,D.bga],x.O)
D.dFU=new C.j2("disco","Disco Ball","Party time",D.dgG,D.ux)
D.bkd=new B.u(1,0.11764705882352941,0.0392156862745098,0.1803921568627451,A.q)
D.dgb=w([A.hC,D.bkd],x.O)
D.dFz=new C.j2("sunrise","Golden Sunrise","A new day for our community",D.dgb,D.kG)
D.dfN=w([A.r1,A.dL],x.O)
D.dFV=new C.j2("pearls","Ocean Pearls","Deep roots, bright future",D.dfN,D.ux)
D.bdR=new B.u(1,0.047058823529411764,0.11764705882352941,0.22745098039215686,A.q)
D.dg0=w([D.bdR,A.dL],x.O)
D.dFY=new C.j2("snow","Winter Gala","Warm wishes to all",D.dg0,D.ux)
D.baf=new B.u(1,0.0784313725490196,0.13725490196078433,0.10196078431372549,A.q)
D.bbj=new B.u(1,0.01568627450980392,0.03137254901960784,0.0196078431372549,A.q)
D.dm6=w([D.baf,D.bbj],x.O)
D.dFN=new C.j2("laurel","Laurel Victory","We did it together",D.dm6,D.kG)
D.ba5=new B.u(1,0.12156862745098039,0.06274509803921569,0.2,A.q)
D.bh_=new B.u(1,0.027450980392156862,0.011764705882352941,0.050980392156862744,A.q)
D.cTd=w([D.ba5,D.bh_],x.O)
D.dFX=new C.j2("ribbons","Silk Ribbons","Elegance in every step",D.cTd,D.kG)
D.bi6=new B.u(1,0.023529411764705882,0.01568627450980392,0.00784313725490196,A.q)
D.cEj=w([G.B6,D.bi6],x.O)
D.dFK=new C.j2("kente","Kente Pride","Proud of our roots",D.cEj,D.kG)
D.bl_=new B.u(1,0.1411764705882353,0.10196078431372549,0.0196078431372549,A.q)
D.bo5=new B.u(1,0.027450980392156862,0.0196078431372549,0.00392156862745098,A.q)
D.d4C=w([D.bl_,D.bo5],x.O)
D.dFF=new C.j2("trophy","Trophy Shine","Winners together",D.d4C,D.kG)
D.dg7=w([Ap.Lo,A.w],x.O)
D.dFx=new C.j2("shooting","Shooting Stars","Make a wish",D.dg7,D.ux)
D.ban=new B.u(1,0.10980392156862745,0.07058823529411765,0.023529411764705882,A.q)
D.ah1=new B.u(1,0.0196078431372549,0.011764705882352941,0.00784313725490196,A.q)
D.dmo=w([D.ban,D.ah1],x.O)
D.dFL=new C.j2("bokeh","Golden Bokeh","Shine bright",D.dmo,D.kG)
D.baN=new B.u(1,0.0392156862745098,0.058823529411764705,0.1411764705882353,A.q)
D.daT=w([D.baN,A.w],x.O)
D.dFD=new C.j2("orbits","Golden Orbits","Always moving forward",D.daT,D.kG)
D.bnK=new B.u(1,0.0392156862745098,0.011764705882352941,0.047058823529411764,A.q)
D.d7o=w([A.aeC,D.bnK],x.O)
D.dFI=new C.j2("flowers","Blooming Garden","Growing together",D.d7o,D.Qk)
D.bay=new B.u(1,0.07450980392156863,0.027450980392156862,0.1803921568627451,A.q)
D.bbd=new B.u(1,0.00784313725490196,0.00392156862745098,0.03137254901960784,A.q)
D.dl9=w([D.bay,D.bbd],x.O)
D.dFC=new C.j2("music","Music Party","Celebrate with us",D.dl9,D.ux)
D.bcb=new B.u(1,0.16470588235294117,0.0392156862745098,0.22745098039215686,A.q)
D.box=new B.u(1,0.027450980392156862,0.00784313725490196,0.047058823529411764,A.q)
D.cUn=w([D.bcb,D.box],x.O)
D.dFW=new C.j2("mandala","Royal Mandala","Harmony and unity",D.cUn,D.kG)
D.d7t=w([G.B6,D.ah1],x.O)
D.dFQ=new C.j2("sparklers","Golden Sparklers","Light up the night",D.d7t,D.kG)
D.dFM=new C.j2("city","City Lights","The whole city celebrates",D.ayU,D.kG)
D.Hh=w([D.dFP,D.dFG,D.dFH,D.dFB,D.dFS,D.dFT,D.dFw,D.dG_,D.dFO,D.dFJ,D.dFy,D.dFE,D.dFA,D.dFZ,D.dFv,D.dFR,D.dFU,D.dFz,D.dFV,D.dFY,D.dFN,D.dFX,D.dFK,D.dFF,D.dFx,D.dFL,D.dFD,D.dFI,D.dFC,D.dFW,D.dFQ,D.dFM],B.aw("O<j2>"))
D.eu1=new B.z("","No ring")
D.eJO=new B.z("platinum","Platinum")
D.eG1=new B.z("glow","Glow")
D.exC=new B.z("double","Double line")
D.ewx=new B.z("framed","Gallery frame")
D.etz=new B.z("rosegold","Rose gold")
D.eGO=new B.z("jewels","Jeweled")
D.eDy=new B.z("aurora","Aurora")
D.Cw=w([D.eu1,A.a79,D.eJO,D.eG1,K.aNO,D.exC,A.a7b,D.ewx,D.etz,D.eGO,D.eDy],x.L)
D.cnG=w([D.a5z,D.a5A,D.a5E,D.a5w,D.a5x,D.a5C],x.h)
D.bSC=new B.ae(G.alm,16,null,null,null,null)
D.b5c=new B.vB(A.bi,D.bSC,null,x.U)
D.bHt=new B.a1(58027,"MaterialIcons",!1)
D.bMb=new B.ae(D.bHt,16,null,null,null,null)
D.b5a=new B.vB(A.L,D.bMb,null,x.U)
D.bHu=new B.a1(58030,"MaterialIcons",!1)
D.bQh=new B.ae(D.bHu,16,null,null,null,null)
D.b5d=new B.vB(A.dT,D.bQh,null,x.U)
D.ctX=w([D.b5c,D.b5a,D.b5d],B.aw("O<vB<q8>>"))
D.cBD=w([A.Bb,A.hl],x.O)
D.cBE=w([A.bm,A.be,A.eh],x.O)
D.Q9=w([A.bM,A.hP,A.hQ,A.az,A.nO],x.O)
D.cEp=w([A.c_,D.jq,D.Li],x.O)
D.cEX=w([1,2,4,8,16,32,64,128,27,54,108,216,171,77,154,47,94,188,99,198,151,53,106,212,179,125,250,239,197,145],x.t)
D.ern=new B.z(4278913286,4280030216)
D.erF=new B.z(4279373061,4278518787)
D.erM=new B.z(4279898630,4278847235)
D.d3Z=w([D.ern,D.erF,D.erM],x.n)
D.d_z=w(["\u265b","\u269c","\u2726"],x.s)
D.dJO=new C.xJ("Royal Onyx & Gold",D.d3Z,4292128567,4294370209,4294965479,3874020544,D.d_z)
D.era=new B.z(4278326799,4278598442)
D.erc=new B.z(4278395929,4278258953)
D.erj=new B.z(4278599728,4278327826)
D.dly=w([D.era,D.erc,D.erj],x.n)
D.cV4=w(["\u269c","\u2756","\u2727"],x.s)
D.dJL=new C.xJ("Imperial Emerald",D.dly,4293050997,4294699968,4294180856,3872254170,D.cV4)
D.erd=new B.z(4278455076,4278918747)
D.eri=new B.z(4278587439,4278322714)
D.erw=new B.z(4279051376,4278455076)
D.djF=w([D.erd,D.eri,D.erw],x.n)
D.dbz=w(["\u2654","\u2726","\u2748"],x.s)
D.dJF=new C.xJ("Sapphire Crown",D.djF,4291417834,4294967295,4294310143,3871986666,D.dbz)
D.erK=new B.z(4279894534,4283041554)
D.erW=new B.z(4281008906,4279042307)
D.es3=new B.z(4284221976,4279894534)
D.dpx=w([D.erK,D.erW,D.es3],x.n)
D.cWq=w(["\u265b","\u2766","\u2726"],x.s)
D.dJH=new C.xJ("Ruby Throne",D.dpx,4293378685,4294963145,4294964466,3874213833,D.cWq)
D.erE=new B.z(4279371039,4281995100)
D.erO=new B.z(4280092723,4278714896)
D.es0=new B.z(4283045242,4279371039)
D.dlV=w([D.erE,D.erO,D.es0],x.n)
D.dk1=w(["\u2655","\u2756","\u2727"],x.s)
D.dJM=new C.xJ("Amethyst Palace",D.dlV,4293314984,4294963421,4294702591,3873229802,D.dk1)
D.erf=new B.z(4278519045,4280032287)
D.erx=new B.z(4279111184,4278321666)
D.erT=new B.z(4280492839,4278716426)
D.dit=w([D.erf,D.erx,D.erT],x.n)
D.d9Q=w(["\u2726","\u25c6","\u2742"],x.s)
D.dJJ=new C.xJ("Obsidian & Platinum",D.dit,4293256418,4294967295,4294638330,3872378836,D.d9Q)
D.erL=new B.z(4279896588,4282194463)
D.erU=new B.z(4280553487,4279043334)
D.es1=new B.z(4283048488,4279896588)
D.d9j=w([D.erL,D.erU,D.es1],x.n)
D.dnI=w(["\u2766","\u273f","\u2727"],x.s)
D.dJG=new C.xJ("Rose Gold Velvet",D.d9j,4293440672,4294960345,4294964979,3874214602,D.dnI)
D.erg=new B.z(4278520340,4279180595)
D.erl=new B.z(4278718495,4278322443)
D.erI=new B.z(4279510591,4278520340)
D.cLe=w([D.erg,D.erl,D.erI],x.n)
D.dax=w(["\u269c","\u2736","\u2756"],x.s)
D.dJK=new C.xJ("Midnight Brass",D.cLe,4291405148,4293975208,4294439914,3872837564,D.dax)
D.esg=new B.z(4294703086,4293780428)
D.esc=new B.z(4294307549,4293187253)
D.esh=new B.z(4294966517,4293977807)
D.cYA=w([D.esg,D.esc,D.esh],x.n)
D.daX=w(["\u269c","\u265b","\u2726"],x.s)
D.dJN=new C.xJ("Ivory Marble & Gold",D.cYA,4289760572,4286209048,4280951062,3863625518,D.daX)
D.err=new B.z(4278978566,4280555024)
D.erH=new B.z(4279504137,4278518530)
D.erY=new B.z(4281211923,4278978566)
D.cWg=w([D.err,D.erH,D.erY],x.n)
D.dkM=w(["\u2742","\u2726","\u265c"],x.s)
D.dJI=new C.xJ("Onyx & Copper",D.cWg,4291856987,4294365880,4294964718,3873885630,D.dkM)
D.cF4=w([D.dJO,D.dJL,D.dJF,D.dJH,D.dJM,D.dJJ,D.dJG,D.dJK,D.dJN,D.dJI],B.aw("O<xJ>"))
D.cHr=w([A.az,D.B7,A.hP],x.O)
D.ezP=new B.z("Original",null)
D.ezX=new B.z("Wide 16:9",1.7777777777777777)
D.eCf=new B.z("Landscape 3:2",1.5)
D.ezf=new B.z("Photo 4:3",1.3333333333333333)
D.eB1=new B.z("Square",1)
D.eNu=new B.z("Portrait 3:4",0.75)
D.awe=w([D.ezP,D.ezX,D.eCf,D.ezf,D.eB1,D.eNu],B.aw("O<+(n,L?)>"))
D.awf=w([A.hP,A.c8,A.bc,A.by],x.O)
D.eCq=new B.z("","Original")
D.eEg=new B.z("circle","Circle")
D.eKz=new B.z("rounded","Rounded")
D.eLt=new B.z("triangle","Triangle")
D.eGh=new B.z("hexagon","Hexagon")
D.eEG=new B.z("diamond","Diamond")
D.eDx=new B.z("arch","Arch")
D.CB=w([D.eCq,D.eEg,D.eKz,D.eLt,D.eGh,D.eEG,D.eDx],x.L)
D.dEX=new C.ll("classic_blue","Classic Blue","Normal",A.bj,A.c,A.kA,A.d8,A.aJ)
D.dFc=new C.ll("campus_green","Campus Green","Normal",A.b_,A.n6,A.tz,A.h2,A.e5)
D.dF3=new C.ll("warm_sand","Warm Sand","Normal",A.dV,A.hQ,A.bM,A.iq,A.nU)
D.dFa=new C.ll("slate_minimal","Slate Minimal","Normal",A.bs,A.aP,A.aM,A.M,A.aJ)
D.dEW=new C.ll("coral_fresh","Coral Fresh","Normal",A.ca,A.io,A.pF,A.k9,A.ts)
D.dFb=new C.ll("lavender_calm","Lavender Calm","Normal",A.b5,A.pJ,A.xE,A.oP,A.jo)
D.dEY=new C.ll("ocean_breeze","Ocean Breeze","Normal",A.ff,A.r7,A.tp,A.tu,A.nV)
D.agi=new B.u(1,0.9803921568627451,0.9607843137254902,1,A.q)
D.dF8=new C.ll("berry_pop","Berry Pop","Normal",A.f2,D.agi,A.ku,G.Yj,A.Fp)
D.dEZ=new C.ll("midnight_pro","Midnight Pro","Professional",A.aC,A.M,A.du,A.ku,A.cr)
D.dF7=new C.ll("executive_navy","Executive Navy","Professional",A.d0,A.afB,A.d8,A.kY,A.bL)
D.dF5=new C.ll("boardroom_charcoal","Boardroom Charcoal","Professional",A.al,A.bn,A.M,A.aP,A.cr)
D.dF_=new C.ll("corporate_steel","Corporate Steel","Professional",A.nY,A.M,A.mw,A.fi,A.bL)
D.dF2=new C.ll("gold_luxe","Gold Luxe","Luxury",A.n4,A.dJ,A.oQ,A.lW,A.bM)
D.bkj=new B.u(1,0.10196078431372549,0.0392156862745098,0.058823529411764705,A.q)
D.dF6=new C.ll("rose_gold_elite","Rose Gold Elite","Luxury",A.hl,D.bkj,A.Y5,A.i7,A.nO)
D.dF9=new C.ll("platinum_night","Platinum Night","Luxury",A.cr,A.dL,A.bn,A.aP,A.aM)
D.dFd=new C.ll("emerald_prestige","Emerald Prestige","Luxury",A.aV,A.pP,A.f4,A.pW,A.jH)
D.dEV=new C.ll("royal_purple","Royal Purple","Luxury",A.n5,A.Xd,A.jo,A.ku,A.La)
D.dF4=new C.ll("neon_pitch","Neon Pitch","Bold",A.bc,A.dL,A.M,A.b2,A.aM)
D.dF1=new C.ll("crimson_impact","Crimson Impact","Bold",A.bx,A.kz,A.ev,A.tL,A.f3)
D.dF0=new C.ll("sunset_gallery","Sunset Gallery","Bold",A.fu,A.ts,A.k9,A.pF,A.mv)
D.Hq=w([D.dEX,D.dFc,D.dF3,D.dFa,D.dEW,D.dFb,D.dEY,D.dF8,D.dEZ,D.dF7,D.dF5,D.dF_,D.dF2,D.dF6,D.dF9,D.dFd,D.dEV,D.dF4,D.dF1,D.dF0],B.aw("O<ll>"))
D.cSX=w([A.c_,D.jq],x.O)
D.d9A=w(["\ud83d\ude00","\ud83d\ude03","\ud83d\ude04","\ud83d\ude01","\ud83d\ude0a","\ud83d\ude0e","\ud83e\udd29","\ud83e\udd73","\ud83d\ude07","\ud83e\udd17","\ud83d\ude4c","\ud83d\udc4f","\ud83e\udd1d","\ud83d\udc4d","\ud83d\udc4b","\ud83d\udcaa","\ud83d\ude4f","\u2728"],x.s)
D.eDj=new B.z("Faces & people",D.d9A)
D.cHv=w(["\ud83d\udca1","\ud83c\udfaf","\ud83d\ude80","\ud83d\udcc8","\ud83d\udcca","\ud83d\udccc","\ud83d\udccd","\ud83d\udce3","\ud83d\udd14","\ud83e\udded","\ud83d\udee0\ufe0f","\ud83d\udd27","\u2699\ufe0f","\ud83e\udde0","\ud83d\udcda","\ud83d\udcdd","\u270f\ufe0f","\ud83d\udcd6","\ud83d\uddc2\ufe0f","\ud83d\udcc5","\u23f0","\u2705","\u274c","\u26a0\ufe0f","\u2753","\u2757"],x.s)
D.eq2=new B.z("Ideas & work",D.cHv)
D.d04=w(["\ud83c\udf3f","\ud83c\udf31","\ud83c\udf33","\ud83c\udf38","\ud83c\udf3c","\ud83c\udf3b","\ud83c\udf1e","\ud83c\udf08","\ud83c\udf0a","\ud83d\udd25","\ud83d\udca7","\u2744\ufe0f","\ud83c\udf19","\u2b50","\ud83c\udf1f","\u2600\ufe0f","\ud83c\udf40"],x.s)
D.eGm=new B.z("Nature",D.d04)
D.d9J=w(["\ud83c\udfe0","\ud83c\udfeb","\ud83c\udfe5","\ud83c\udfe6","\ud83c\udfea","\ud83d\ude97","\ud83d\ude8c","\u2708\ufe0f","\ud83c\udf81","\ud83d\udcb0","\ud83d\udcb5","\ud83d\udcb3","\ud83d\uded2","\ud83c\udfc6","\ud83e\udd47","\ud83c\udf89","\ud83c\udf88","\ud83c\udfb6","\ud83c\udfb5","\ud83c\udfa4","\ud83d\udcf7","\ud83c\udfac","\ud83d\uddbc\ufe0f","\ud83d\udcbb","\ud83d\udcf1"],x.s)
D.ezN=new B.z("Places & things",D.d9J)
D.d3w=w(["\u2764\ufe0f","\ud83d\udc9a","\ud83d\udc99","\ud83d\udc9c","\ud83e\udde1","\ud83d\udc9b","\ud83d\udda4","\ud83e\udd0d","\u2b06\ufe0f","\u27a1\ufe0f","\ud83d\udd36","\ud83d\udd37","\ud83d\udd34","\ud83d\udfe2","\ud83d\udd35","\ud83d\udfe1"],x.s)
D.eDC=new B.z("Symbols",D.d3w)
D.cT2=w([D.eDj,D.eq2,D.eGm,D.ezN,D.eDC],B.aw("O<+(n,ai<n>)>"))
D.baD=new B.u(1,0.22745098039215686,0.15294117647058825,0.03137254901960784,A.q)
D.cTp=w([A.c_,D.aeG,D.baD],x.O)
D.b4y=new B.ac(0,A.G,A.L7,A.aHW,40)
D.b4e=new B.ac(0,A.G,A.nS,A.eq,8)
D.cTC=w([D.b4y,D.b4e],x.V)
D.cU5=w([4280171146,4280640491,4279080072,4278556265],x.t)
D.awD=w([4294677052,4294626325,4293870660,4294210230,4287323382,4282090230,4280472558,4283096704,4294967295,4279310375],x.t)
D.a3b=w([A.hP,A.eh,A.bx,A.au,A.ca],x.O)
D.cUZ=w(["All","Robotic","Nature","Warm","Bold","Clean"],x.s)
D.aeW=new B.u(1,0.043137254901960784,0.0392156862745098,0.03137254901960784,A.q)
D.cV9=w([A.XU,D.aeW,A.XU],x.O)
D.cVf=w([A.i9,D.jq,D.Li],x.O)
D.ezz=new B.z(A.bi,D.a0R)
D.eAX=new B.z(A.L,D.a0Q)
D.euM=new B.z(A.dT,D.a0S)
D.cWb=w([D.ezz,D.eAX,D.euM],B.aw("O<+(q8,a1)>"))
D.cQ=new C.J_(0,"text")
D.lJ=new C.J_(1,"image")
D.f8=new C.J_(2,"shape")
D.Sp=new C.J_(3,"pdf")
D.lf=new C.J_(4,"signature")
D.a5Z=new C.J_(5,"bio")
D.cX5=w([D.cQ,D.lJ,D.f8,D.Sp,D.lf,D.a5Z],B.aw("O<J_>"))
D.cX6=w([A.bp,A.cE],B.aw("O<HV>"))
D.cXI=w(["School","Documents","Sign & present"],x.s)
D.b4D=new B.ac(0,A.G,A.agS,A.uR,28)
D.cY2=w([D.b4D],x.V)
D.cYl=w([4292128567,4279983648,4290190364,4279898632,4293436183,4279060385],x.t)
D.Qs=w(["Rocket","Trophy","Party popper","Confetti ball","Balloon","Wrapped gift","Birthday cake","Sparkles","Star","Glowing star","Fire","Light bulb","Gem stone","Crown","Money bag","Dollar banknote","Chart increasing","Bar chart","Bullseye","Globe showing americas","Globe showing europe-africa","Sun","Rainbow","Cloud","High voltage","Red heart","Handshake","Graduation cap","Books","Open book","Pencil","Laptop","Mobile phone","Microphone","Musical notes","Camera","Video camera","Megaphone","Bell","Calendar","Alarm clock","Hourglass done","Key","Locked","Shield","Gear","Hammer and wrench","Magnifying glass tilted left","Package","Shopping cart","House","Office building","Hospital","Ballot box with ballot","Automobile","Airplane","Seedling","Deciduous tree","Evergreen tree","Palm tree","Sunflower","Cherry blossom","Herb","Four leaf clover","Water wave","Mountain","Lion","Tiger face","Dog face","Cat face","Elephant","Unicorn","Butterfly","Honeybee","Owl","Eagle","Dolphin","Turtle","Panda","Fox","Rabbit face","Monkey face","Penguin","Horse","Bird","Peacock","Parrot","Red apple","Pizza","Hot beverage","Soccer ball","Basketball","Artist palette","Clapper board","Robot","Brain","Check mark button","Red question mark","Speech balloon","Compass","Crystal ball","Puzzle piece","1st place medal","Smiling face with sunglasses","Grinning face with big eyes","Star-struck","Partying face","Thinking face","Hundred points"],x.s)
D.ax2=w([A.hP,A.Fo,A.aM,A.c,A.oR,A.az],x.O)
D.eMT=new B.z(0.1,0.08)
D.eGk=new B.z(0.3,0.05)
D.euf=new B.z(0.55,0.1)
D.eyw=new B.z(0.8,0.06)
D.eBH=new B.z(0.92,0.16)
D.eBb=new B.z(0.2,0.2)
D.ez0=new B.z(0.7,0.22)
D.eF1=new B.z(0.05,0.4)
D.eC7=new B.z(0.95,0.45)
D.ev0=new B.z(0.12,0.7)
D.exg=new B.z(0.88,0.75)
D.exo=new B.z(0.4,0.9)
D.esx=new B.z(0.65,0.93)
D.ey9=new B.z(0.25,0.97)
D.ezw=new B.z(0.85,0.9)
D.evS=new B.z(0.5,0.04)
D.cZO=w([D.eMT,D.eGk,D.euf,D.eyw,D.eBH,D.eBb,D.ez0,D.eF1,D.eC7,D.ev0,D.exg,D.exo,D.esx,D.ey9,D.ezw,D.evS],x.G)
D.cZV=w([A.c,A.hl,A.aR,A.aV],x.O)
D.e54=new C.jL("office_blue","Office Blue",A.bj,A.d8,A.aJ,A.c,A.kA)
D.e5f=new C.jL("campus_green","Campus Green",A.b_,A.h2,A.e5,A.n6,A.tz)
D.e55=new C.jL("sunset","Sunset",A.fu,A.k9,A.nU,A.io,A.pF)
D.e56=new C.jL("midnight","Midnight",A.aC,A.ku,A.cr,A.M,A.du)
D.e5h=new C.jL("classic","Classic",A.d9,A.dJ,A.lX,A.hQ,A.h0)
D.e5e=new C.jL("rose_gold","Rose Gold",A.hl,A.xM,A.xL,A.vL,A.Bb)
D.e5_=new C.jL("ocean_teal","Ocean Teal",A.ff,A.tu,A.nV,A.r7,A.tp)
D.e4Z=new C.jL("slate_pro","Slate Pro",A.bs,A.M,A.aJ,A.aP,A.aM)
D.e4Y=new C.jL("neon_night","Neon Night",A.bc,A.b2,A.aM,A.dL,A.M)
D.e59=new C.jL("lavender","Lavender",A.b5,A.oP,A.jo,A.pJ,A.xE)
D.e5b=new C.jL("coral","Coral",A.ca,A.k9,A.ts,A.io,A.mv)
D.e50=new C.jL("forest","Forest",A.hc,A.dY,A.cp,A.lY,A.eo)
D.e51=new C.jL("berry","Berry",A.f2,G.Yj,A.Fp,D.agi,A.ku)
D.e58=new C.jL("sand","Sand",A.dV,A.iq,A.nU,A.hQ,A.bM)
D.e5d=new C.jL("ice","Ice",A.nY,A.LB,A.aJ,A.n2,A.fi)
D.e53=new C.jL("charcoal","Charcoal",A.al,A.aP,A.cr,A.bn,A.M)
D.e4X=new C.jL("mint","Mint",A.aV,A.fE,A.h2,A.lY,A.pW)
D.e5c=new C.jL("crimson","Crimson",A.bx,A.n8,A.kz,A.Fm,A.tL)
D.bdl=new B.u(1,0.996078431372549,0.9882352941176471,0.9098039215686274,A.q)
D.e57=new C.jL("gold","Gold",A.n4,A.xx,A.oQ,D.bdl,A.lW)
D.e5a=new C.jL("aqua","Aqua",A.bS,A.Fe,A.oN,A.pL,A.oT)
D.e52=new C.jL("plum","Plum",A.n5,A.xJ,A.Fp,A.F2,A.r5)
D.e5g=new C.jL("steel","Steel",A.d0,A.d8,A.bn,A.kA,A.kY)
D.a3r=w([D.e54,D.e5f,D.e55,D.e56,D.e5h,D.e5e,D.e5_,D.e4Z,D.e4Y,D.e59,D.e5b,D.e50,D.e51,D.e58,D.e5d,D.e53,D.e4X,D.e5c,D.e57,D.e5a,D.e52,D.e5g],B.aw("O<jL>"))
D.d_f=w([A.c_,A.js],x.O)
D.Sr=new C.hF(10,"rotate3d")
D.In=new C.hF(8,"flip")
D.aHr=new C.hF(19,"spiral")
D.qs=new C.hF(16,"bounce")
D.aHu=new C.hF(9,"flipVertical")
D.d_g=w([D.Sr,D.In,D.aHr,D.qs,D.aHu],x.i)
D.ed=w([1353184337,1399144830,3282310938,2522752826,3412831035,4047871263,2874735276,2466505547,1442459680,4134368941,2440481928,625738485,4242007375,3620416197,2151953702,2409849525,1230680542,1729870373,2551114309,3787521629,41234371,317738113,2744600205,3338261355,3881799427,2510066197,3950669247,3663286933,763608788,3542185048,694804553,1154009486,1787413109,2021232372,1799248025,3715217703,3058688446,397248752,1722556617,3023752829,407560035,2184256229,1613975959,1165972322,3765920945,2226023355,480281086,2485848313,1483229296,436028815,2272059028,3086515026,601060267,3791801202,1468997603,715871590,120122290,63092015,2591802758,2768779219,4068943920,2997206819,3127509762,1552029421,723308426,2461301159,4042393587,2715969870,3455375973,3586000134,526529745,2331944644,2639474228,2689987490,853641733,1978398372,971801355,2867814464,111112542,1360031421,4186579262,1023860118,2919579357,1186850381,3045938321,90031217,1876166148,4279586912,620468249,2548678102,3426959497,2006899047,3175278768,2290845959,945494503,3689859193,1191869601,3910091388,3374220536,0,2206629897,1223502642,2893025566,1316117100,4227796733,1446544655,517320253,658058550,1691946762,564550760,3511966619,976107044,2976320012,266819475,3533106868,2660342555,1338359936,2720062561,1766553434,370807324,179999714,3844776128,1138762300,488053522,185403662,2915535858,3114841645,3366526484,2233069911,1275557295,3151862254,4250959779,2670068215,3170202204,3309004356,880737115,1982415755,3703972811,1761406390,1676797112,3403428311,277177154,1076008723,538035844,2099530373,4164795346,288553390,1839278535,1261411869,4080055004,3964831245,3504587127,1813426987,2579067049,4199060497,577038663,3297574056,440397984,3626794326,4019204898,3343796615,3251714265,4272081548,906744984,3481400742,685669029,646887386,2764025151,3835509292,227702864,2613862250,1648787028,3256061430,3904428176,1593260334,4121936770,3196083615,2090061929,2838353263,3004310991,999926984,2809993232,1852021992,2075868123,158869197,4095236462,28809964,2828685187,1701746150,2129067946,147831841,3873969647,3650873274,3459673930,3557400554,3598495785,2947720241,824393514,815048134,3227951669,935087732,2798289660,2966458592,366520115,1251476721,4158319681,240176511,804688151,2379631990,1303441219,1414376140,3741619940,3820343710,461924940,3089050817,2136040774,82468509,1563790337,1937016826,776014843,1511876531,1389550482,861278441,323475053,2355222426,2047648055,2383738969,2302415851,3995576782,902390199,3991215329,1018251130,1507840668,1064563285,2043548696,3208103795,3939366739,1537932639,342834655,2262516856,2180231114,1053059257,741614648,1598071746,1925389590,203809468,2336832552,1100287487,1895934009,3736275976,2632234200,2428589668,1636092795,1890988757,1952214088,1113045200],x.t)
D.d_C=w([0.62,1],x.x)
D.d0d=w([0,0.32,0.68,1],x.x)
D.mS=new C.hF(6,"zoom")
D.uL=new C.hF(4,"slideUp")
D.uK=new C.hF(2,"slideLeft")
D.d0m=w([D.mS,D.In,D.uL,D.Sr,D.uK],x.i)
D.d0R=w([A.c8,A.hl,A.i7,A.hP,A.c],x.O)
D.b4t=new B.ac(0,A.G,D.af9,A.uR,30)
D.d1B=w([D.b4t],x.V)
D.efY=new B.t(0,-2.5)
D.efO=new B.t(-2.5,0)
D.ee4=new B.t(2.5,0)
D.d1E=w([A.SF,A.a6n,A.aIy,A.a6m,D.efY,K.aIu,D.efO,D.ee4],x.dN)
D.Hx=w([0,79764919,159529838,222504665,319059676,398814059,445009330,507990021,638119352,583659535,797628118,726387553,890018660,835552979,1015980042,944750013,1276238704,1221641927,1167319070,1095957929,1595256236,1540665371,1452775106,1381403509,1780037320,1859660671,1671105958,1733955601,2031960084,2111593891,1889500026,1952343757,2552477408,2632100695,2443283854,2506133561,2334638140,2414271883,2191915858,2254759653,3190512472,3135915759,3081330742,3009969537,2905550212,2850959411,2762807018,2691435357,3560074640,3505614887,3719321342,3648080713,3342211916,3287746299,3467911202,3396681109,4063920168,4143685023,4223187782,4286162673,3779000052,3858754371,3904687514,3967668269,881225847,809987520,1023691545,969234094,662832811,591600412,771767749,717299826,311336399,374308984,453813921,533576470,25881363,88864420,134795389,214552010,2023205639,2086057648,1897238633,1976864222,1804852699,1867694188,1645340341,1724971778,1587496639,1516133128,1461550545,1406951526,1302016099,1230646740,1142491917,1087903418,2896545431,2825181984,2770861561,2716262478,3215044683,3143675388,3055782693,3001194130,2326604591,2389456536,2200899649,2280525302,2578013683,2640855108,2418763421,2498394922,3769900519,3832873040,3912640137,3992402750,4088425275,4151408268,4197601365,4277358050,3334271071,3263032808,3476998961,3422541446,3585640067,3514407732,3694837229,3640369242,1762451694,1842216281,1619975040,1682949687,2047383090,2127137669,1938468188,2001449195,1325665622,1271206113,1183200824,1111960463,1543535498,1489069629,1434599652,1363369299,622672798,568075817,748617968,677256519,907627842,853037301,1067152940,995781531,51762726,131386257,177728840,240578815,269590778,349224269,429104020,491947555,4046411278,4126034873,4172115296,4234965207,3794477266,3874110821,3953728444,4016571915,3609705398,3555108353,3735388376,3664026991,3290680682,3236090077,3449943556,3378572211,3174993278,3120533705,3032266256,2961025959,2923101090,2868635157,2813903052,2742672763,2604032198,2683796849,2461293480,2524268063,2284983834,2364738477,2175806836,2238787779,1569362073,1498123566,1409854455,1355396672,1317987909,1246755826,1192025387,1137557660,2072149281,2135122070,1912620623,1992383480,1753615357,1816598090,1627664531,1707420964,295390185,358241886,404320391,483945776,43990325,106832002,186451547,266083308,932423249,861060070,1041341759,986742920,613929101,542559546,756411363,701822548,3316196985,3244833742,3425377559,3370778784,3601682597,3530312978,3744426955,3689838204,3819031489,3881883254,3928223919,4007849240,4037393693,4100235434,4180117107,4259748804,2310601993,2373574846,2151335527,2231098320,2596047829,2659030626,2470359227,2550115596,2947551409,2876312838,2788305887,2733848168,3165939309,3094707162,3040238851,2985771188],x.t)
D.d27=w([23,114,69,56,80,144],x.t)
D.d2A=w(["Make the headline shorter","Add a paragraph about the Civic Registry","Write the whole thing in Swahili","Change the newspaper name"],x.s)
D.d31=w(["Add a slide about\u2026","Make this slide shorter","Translate everything to Swahili","Add a slide with our contact details","Change the style to luxury","Remove the last slide"],x.s)
D.d4H=w([null,4294626325,4294828103,4283096704,4280472558,4294210230,4294677052,4293870660,4287323382,4282090230,4294967295,4279310375],x.Z)
D.d4L=w(["Kichwa cha Mtu: [Kiasi kilichosalia au thamani]","Mbuzi Mbili","Ngyoka","Mmoko"],x.s)
D.bg=new C.uP(0,"rectangle")
D.eQ=new C.uP(1,"circle")
D.lg=new C.uP(6,"hexagon")
D.d4Z=w([D.bg,D.eQ,D.lg],x.m)
D.ok=w([99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22],x.t)
D.agp=new B.u(1,0.24313725490196078,0.47843137254901963,0.30980392156862746,A.q)
D.d5w=w([D.agp,A.dY],x.O)
D.euv=new B.z("","Classic")
D.esM=new B.z("caps","Bold caps")
D.eF4=new B.z("elegant","Elegant")
D.eKT=new B.z("shadow","Shadow")
D.eyU=new B.z("neon","Neon glow")
D.eJv=new B.z("outline","Outline")
D.eIG=new B.z("marker","Highlighter")
D.eL3=new B.z("stamp","Stamp")
D.eKu=new B.z("retro","Retro")
D.exO=new B.z("threed","3D")
D.eFB=new B.z("fire","Fire")
D.eGw=new B.z("ice","Ice")
D.eEf=new B.z("chalk","Chalk")
D.eEk=new B.z("comic","Comic")
D.eL5=new B.z("sunset","Sunset")
D.eMg=new B.z("softglow","Soft glow")
D.eHv=new B.z("lowercase","Lowercase")
D.eEN=new B.z("double","Echo")
D.eMp=new B.z("whisper","Whisper")
D.axX=w([D.euv,D.esM,D.eF4,D.eKT,D.eyU,D.eJv,D.eIG,D.eL3,D.eKu,D.exO,K.aNJ,D.eFB,D.eGw,D.eEf,D.eEk,A.a79,D.eL5,D.eMg,D.eHv,D.eEN,D.eMp],x.L)
D.d6P=w([3,5,7,10,12,15],x.t)
D.d8d=w([A.c8,A.bM,A.c,A.eF,A.cZ],x.O)
D.dwD=new C.tr(10,"cardWorld")
D.D2=new C.BI(3,"rounded")
D.dMN=new C.lo("world","NGMY World",D.dwD,D.D2,4278918980,4278521378,4294967295,4280118271,"logo","Roboto","Roboto","Roboto","a modern digital news site: clear, confident and direct, a strong plain headline and a one-sentence summary",!1,"none",!0,!1)
D.dwE=new C.tr(11,"cardSplit")
D.dMJ=new C.lo("business","Business Wire",D.dwE,D.D2,4294967295,4294507260,4279179050,4292943150,"logo","Roboto","Roboto","Roboto","a clean business news site: precise, informative and professional, with a plain, strong headline",!1,"none",!1,!1)
D.dwF=new C.tr(12,"cardBreaking")
D.dMW=new C.lo("breaking","Breaking Red",D.dwF,D.D2,4278913807,4280944139,4294967295,4292943150,"logo","Roboto","Roboto","Roboto","a breaking-news broadcast: urgent, factual and clear, a punchy headline and a tight summary",!1,"none",!0,!1)
D.dwG=new C.tr(13,"cardFeature")
D.dMP=new C.lo("feature","Tech Feature",D.dwG,D.D2,4294967295,4294047225,4279179050,4280640491,"logo","Roboto","Roboto","Roboto","a modern feature article: informative, engaging and well explained",!1,"none",!1,!1)
D.aFY=new C.tr(6,"circle")
D.aFS=new C.BI(4,"circle")
D.dMT=new C.lo("parchment","Royal Circle",D.aFY,D.aFS,4294241234,4293450160,4281278992,4285211048,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a stately royal edition: dignified, noble and ceremonial",!0,"sepia",!1,!1)
D.dMI=new C.lo("ocean","Blue Ocean",D.aFY,D.aFS,4293916415,4292602622,4278984254,4278413729,"centered","NgmyAbril","NgmyAbril","NgmyOldStandard","a calm, trustworthy paper: clear, steady and reassuring",!1,"none",!1,!1)
D.dwJ=new C.tr(7,"rail")
D.aFR=new C.BI(1,"double")
D.dMK=new C.lo("forest","Green Leaf",D.dwJ,D.aFR,4293983732,4292672743,4278529558,4279599165,"centered","NgmyAbril","NgmyAbril","NgmyOldStandard","a calm community paper about growth and togetherness: gentle, hopeful and clear",!1,"none",!1,!1)
D.aFV=new C.tr(1,"sideBySide")
D.dMY=new C.lo("herald","NGMY Herald",D.aFV,D.D2,4294967295,4294308863,4280163147,4286331629,"split","NgmyAbril","NgmyAbril","NgmyOldStandard","the proud NGMY Herald: warm, hopeful and community-minded, in NGMY purple",!1,"none",!1,!1)
D.aFU=new C.tr(0,"classic")
D.a5b=new C.BI(9,"shadow")
D.dMX=new C.lo("daily","The Daily",D.aFU,D.a5b,4294967295,4294243570,4279308561,4292225064,"bar","NgmyAbril","NgmyAbril","NgmyOldStandard","a modern daily newspaper: crisp, clear and energetic, with a punchy headline",!1,"none",!1,!0)
D.dwH=new C.tr(2,"splash")
D.aFT=new C.BI(6,"cutCorner")
D.dMH=new C.lo("tabloid","Big Tabloid",D.dwH,D.aFT,4294967295,4294965216,4279308561,4292943176,"bar","Roboto","NgmyAbril","Roboto","a bold tabloid: exciting, short punchy sentences and a loud, attention-grabbing headline (still truthful)",!1,"none",!1,!0)
D.aFZ=new C.tr(9,"minimal")
D.dMS=new C.lo("modern","Modern Digest",D.aFZ,D.D2,4294507260,4293060848,4279179050,4279080072,"logo","Roboto","Roboto","Roboto","a clean modern digest: simple words, short paragraphs, friendly and clear",!1,"none",!1,!1)
D.aFW=new C.tr(3,"magazine")
D.aFQ=new C.BI(0,"plain")
D.dMO=new C.lo("midnight","Midnight Edition",D.aFW,D.aFQ,4279310375,4278915104,4294047225,4294626325,"logo","Roboto","NgmyAbril","NgmyOldStandard","a dramatic late-night edition: confident, cinematic and polished",!1,"none",!0,!0)
D.dwK=new C.tr(8,"banner")
D.dMQ=new C.lo("metro","Metro Wire",D.dwK,D.aFT,4294047225,4293060848,4278915616,4280640491,"logo","Roboto","Roboto","Roboto","a modern news wire: fast, factual and direct, like breaking news",!1,"none",!1,!0)
D.dwC=new C.BI(8,"arch")
D.dMR=new C.lo("sunrise","Sunrise Post",D.aFW,D.dwC,4294965229,4294962645,4282064136,4293548044,"split","NgmyAbril","NgmyAbril","NgmyOldStandard","a cheerful morning paper: bright, optimistic and welcoming",!1,"none",!1,!1)
D.aFX=new C.tr(5,"scrapbook")
D.dwB=new C.BI(5,"tape")
D.dMM=new C.lo("neon","Neon Beat",D.aFX,D.dwB,4280163147,4279175726,4294308863,4293675161,"split","NgmyAbril","NgmyAbril","Roboto","a youthful neon culture paper: fresh, bold, energetic and fun",!1,"none",!0,!1)
D.dwI=new C.tr(4,"wrap")
D.dMZ=new C.lo("gold","Golden Press",D.dwI,D.a5b,4279505162,4278847748,4294898631,4294626325,"logo","Roboto","NgmyAbril","NgmyOldStandard","a luxurious golden press edition: grand, elegant and prestigious",!1,"none",!0,!0)
D.dN_=new C.lo("minimal","Paper White",D.aFZ,D.a5b,4294967295,4294638330,4279769115,4279769115,"split","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a quiet, elegant long-read: thoughtful, simple and beautifully written",!1,"none",!1,!1)
D.dML=new C.lo("gazette","Fresh Gazette",D.aFU,D.aFR,4294373341,4293582786,4280949518,4288295954,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a refined town gazette: formal, dignified and warm, with a strong headline",!1,"none",!1,!0)
D.dMV=new C.lo("times","Classic Times",D.aFV,D.aFQ,4294637810,4293913565,4279636750,4280171146,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a serious classic broadsheet: calm, factual, authoritative, with a strong headline and a clear subhead",!1,"bw",!1,!1)
D.RX=new C.BI(2,"polaroid")
D.dMU=new C.lo("scrapbook","Memory Scrapbook",D.aFX,D.RX,4294437835,4293580710,4282001946,4290007817,"split","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a warm scrapbook clipping: personal, nostalgic and heartfelt",!1,"sepia",!1,!1)
D.a3G=w([D.dMN,D.dMJ,D.dMW,D.dMP,D.dMT,D.dMI,D.dMK,D.dMY,D.dMX,D.dMH,D.dMS,D.dMO,D.dMQ,D.dMR,D.dMM,D.dMZ,D.dN_,D.dML,D.dMV,D.dMU],B.aw("O<lo>"))
D.d8p=w([0.45,1],x.x)
D.Hz=w([619,720,127,481,931,816,813,233,566,247,985,724,205,454,863,491,741,242,949,214,733,859,335,708,621,574,73,654,730,472,419,436,278,496,867,210,399,680,480,51,878,465,811,169,869,675,611,697,867,561,862,687,507,283,482,129,807,591,733,623,150,238,59,379,684,877,625,169,643,105,170,607,520,932,727,476,693,425,174,647,73,122,335,530,442,853,695,249,445,515,909,545,703,919,874,474,882,500,594,612,641,801,220,162,819,984,589,513,495,799,161,604,958,533,221,400,386,867,600,782,382,596,414,171,516,375,682,485,911,276,98,553,163,354,666,933,424,341,533,870,227,730,475,186,263,647,537,686,600,224,469,68,770,919,190,373,294,822,808,206,184,943,795,384,383,461,404,758,839,887,715,67,618,276,204,918,873,777,604,560,951,160,578,722,79,804,96,409,713,940,652,934,970,447,318,353,859,672,112,785,645,863,803,350,139,93,354,99,820,908,609,772,154,274,580,184,79,626,630,742,653,282,762,623,680,81,927,626,789,125,411,521,938,300,821,78,343,175,128,250,170,774,972,275,999,639,495,78,352,126,857,956,358,619,580,124,737,594,701,612,669,112,134,694,363,992,809,743,168,974,944,375,748,52,600,747,642,182,862,81,344,805,988,739,511,655,814,334,249,515,897,955,664,981,649,113,974,459,893,228,433,837,553,268,926,240,102,654,459,51,686,754,806,760,493,403,415,394,687,700,946,670,656,610,738,392,760,799,887,653,978,321,576,617,626,502,894,679,243,440,680,879,194,572,640,724,926,56,204,700,707,151,457,449,797,195,791,558,945,679,297,59,87,824,713,663,412,693,342,606,134,108,571,364,631,212,174,643,304,329,343,97,430,751,497,314,983,374,822,928,140,206,73,263,980,736,876,478,430,305,170,514,364,692,829,82,855,953,676,246,369,970,294,750,807,827,150,790,288,923,804,378,215,828,592,281,565,555,710,82,896,831,547,261,524,462,293,465,502,56,661,821,976,991,658,869,905,758,745,193,768,550,608,933,378,286,215,979,792,961,61,688,793,644,986,403,106,366,905,644,372,567,466,434,645,210,389,550,919,135,780,773,635,389,707,100,626,958,165,504,920,176,193,713,857,265,203,50,668,108,645,990,626,197,510,357,358,850,858,364,936,638],x.t)
D.d8N=w(["video/webm;codecs=vp9","video/webm;codecs=vp8","video/webm","video/mp4"],x.s)
D.hgi=new C.oF("Original",0,1,1,0,0,0)
D.hgm=new C.oF("Black & white",0,1.1,0,0,0,0)
D.hg9=new C.oF("Noir",-0.05,1.55,0,0,0,0)
D.hgd=new C.oF("Sepia",0,1,0.25,0.9,0,0)
D.hgc=new C.oF("Vivid",0,1.15,1.6,0,0,0)
D.hg5=new C.oF("Pop",0,1.3,1.9,0,0,0)
D.hg7=new C.oF("Faded",0.06,0.85,0.8,0.1,0,0.4)
D.hgj=new C.oF("Matte",0,0.9,0.85,0,0,0.55)
D.hge=new C.oF("Cool",0,1.05,1,-0.8,0,0)
D.hgl=new C.oF("Warm",0.03,1.05,1.1,0.8,0,0)
D.hg6=new C.oF("Golden hour",0.04,1,1.25,1,0,0)
D.hgb=new C.oF("Moonlight",-0.08,1.1,0.8,-0.8,-0.1,0)
D.hgk=new C.oF("Dreamy",0.08,0.85,1.1,0.2,0,0.25)
D.hga=new C.oF("Dramatic",-0.05,1.5,1.2,0,0,0)
D.hgg=new C.oF("Retro",0,0.9,0.7,0.4,0,0.35)
D.hgf=new C.oF("Forest",0,1,1.2,-0.1,-0.45,0)
D.hgh=new C.oF("Rose",0,1,1.1,0.3,0.4,0)
D.hg8=new C.oF("Ocean",0,1,1.2,-0.5,-0.2,0)
D.d8O=w([D.hgi,D.hgm,D.hg9,D.hgd,D.hgc,D.hg5,D.hg7,D.hgj,D.hge,D.hgl,D.hg6,D.hgb,D.hgk,D.hga,D.hgg,D.hgf,D.hgh,D.hg8],B.aw("O<oF>"))
D.ba0=new B.u(1,0.0392156862745098,0.1803921568627451,0.09019607843137255,A.q)
D.d8Q=w([D.agp,A.dY,D.ba0],x.O)
D.epX=new B.z(0.12,0.3)
D.eGH=new B.z(0.26,0.75)
D.eF0=new B.z(0.8,0.22)
D.eLd=new B.z(0.9,0.7)
D.eHu=new B.z(0.5,0.15)
D.eJx=new B.z(0.65,0.85)
D.ewo=new B.z(0.08,0.85)
D.d93=w([D.epX,D.eGH,D.eF0,D.eLd,D.eHu,D.eJx,D.ewo],x.G)
D.ay8=w([A.bc,A.c8,A.by,A.bm],x.O)
D.d9U=w([y.L,"Mbuzi Wawili","Ngyoka","Mmoko"],x.s)
D.da5=w([A.c,A.fi,A.dt,A.vy],x.O)
D.bdB=new B.u(1,0.10980392156862745,0.09019607843137255,0.06274509803921569,A.q)
D.db6=w([D.bdB,D.aeW],x.O)
D.db8=w([A.vA,A.az],x.O)
D.dbn=w([0,0.25,0.75,1],x.x)
D.dbp=w([A.xA,A.oR],x.O)
D.aH1=new C.kX(10,"kenteSunset")
D.hkR=w([D.afn,A.k5,A.az],x.O)
D.dI7=new C.jq("kuhowa_kente_sunset","Kente ya Jua",y.H,D.aH1,4294964964,4282000405,4279983648,D.jW)
D.aH2=new C.kX(11,"indigoMudcloth")
D.bb4=new B.u(1,0.9686274509803922,0.9411764705882353,0.8941176470588236,A.q)
D.hl4=w([D.bb4,A.aeS,A.i9],x.O)
D.dIf=new C.jq("kuhowa_indigo_mudcloth","Nguo ya Indigo",y.n,D.aH2,4294439140,4279903102,4279903102,D.jW)
D.aH3=new C.kX(12,"adinkraRoyal")
D.bpg=new B.u(1,0.4196078431372549,0.24705882352941178,0.12156862745098039,A.q)
D.hl5=w([D.adK,D.bpg,A.az],x.O)
D.dIh=new C.jq("kuhowa_adinkra_royal","Muhuri wa Adinkra",y.z,D.aH3,4294965484,4285218591,4287322667,D.jW)
D.aH4=new C.kX(13,"nileLotus")
D.blj=new B.u(1,0.9568627450980393,0.9686274509803922,0.9568627450980393,A.q)
D.bhI=new B.u(1,0.058823529411764705,0.3607843137254902,0.3607843137254902,A.q)
D.hla=w([D.blj,D.bhI,A.i9],x.O)
D.dIg=new C.jq("kuhowa_nile_lotus","Lotus ya Nile","Nguzo za papyrus na ua la lotus juu.",D.aH4,4294244340,4279196764,4279196764,D.jW)
D.aH5=new C.kX(14,"shweshweIvory")
D.bfI=new B.u(1,0.9725490196078431,0.9568627450980393,0.9333333333333333,A.q)
D.ben=new B.u(1,0.10588235294117647,0.16470588235294117,0.2901960784313726,A.q)
D.bbx=new B.u(1,0.7686274509803922,0.3607843137254902,0.24313725490196078,A.q)
D.hkS=w([D.bfI,D.ben,D.bbx],x.O)
D.dIc=new C.jq("kuhowa_shweshwe_ivory","Shweshwe","Nguo ya shweshwe \xb7 kadi ya pembe ndani.",D.aH5,4294505710,4279970378,4291058750,D.jW)
D.rI=new C.kX(15,"certIvoryNavy")
D.hkQ=w([D.M_,D.jq,A.i9],x.O)
D.aGx=new C.xH(1,"ringsNdoa")
D.dI9=new C.jq("kuhowa_rings_ndoa","Hati ya Ndoa","Pete mbili \xb7 vichwa vya kidonge \xb7 hati rasmi.",D.rI,4294966259,4279378237,4291404327,D.aGx)
D.a5H=new C.xH(2,"coupleCards")
D.dI4=new C.jq("kuhowa_couple_taarifa","Taarifa za Wanandoa","Picha ya mwanamume na mwanamke kila upande.",D.rI,4294966259,4279378237,4291404327,D.a5H)
D.D5=new C.kX(18,"certIvoryNavyBar")
D.adJ=new B.u(1,1,0.9882352941176471,0.9686274509803922,A.q)
D.hl3=w([D.adJ,D.jq,A.i9],x.O)
D.aGy=new C.xH(3,"kuhoweshaForm")
D.dI2=new C.jq("kuhowa_barua","Barua ya Kuhowesha","Barua rasmi \xb7 pete \xb7 orodha ya vitu.",D.D5,4294966519,4279378237,4291404327,D.aGy)
D.af7=new B.u(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,A.q)
D.hln=w([D.M_,D.af7,A.i9],x.O)
D.a5I=new C.xH(4,"mahariPande")
D.dI5=new C.jq("kuhowa_mahari_pande","Mahari ya Pande","Masharti ya mahari \xb7 pande mbili.",D.rI,4294966259,4279904068,4291404327,D.a5I)
D.aH6=new C.kX(16,"certIvoryGreen")
D.bf2=new B.u(1,0.12156862745098039,0.30196078431372547,0.22745098039215686,A.q)
D.hkU=w([A.Lb,D.bf2,A.i9],x.O)
D.aGz=new C.xH(5,"familiaMti")
D.dIb=new C.jq("kuhowa_sheria_familia","Sheria za Familia","Mti wa familia \xb7 sheria za pamoja.",D.aH6,4294966776,4280241466,4291404327,D.aGz)
D.a5J=new C.xH(6,"ndoaSafi")
D.dI3=new C.jq("kuhowa_ndoa_pamoja","Ndoa ya Pamoja","Safu mbili \xb7 mume na mke.",D.D5,4294966519,4279378237,4291404327,D.a5J)
D.bjE=new B.u(1,0.22745098039215686,0.16470588235294117,0.06274509803921569,A.q)
D.hkX=w([D.M_,A.i9,D.bjE],x.O)
D.a5K=new C.xH(7,"peteWide")
D.dI8=new C.jq("kuhowa_pete_pana","Pete Pana","Pete kubwa za dhahabu \xb7 nafasi wazi.",D.rI,4294966259,4282001936,4291404327,D.a5K)
D.dIi=new C.xH(8,"muhuriCrest")
D.dI1=new C.jq("kuhowa_muhuri","Muhuri wa Familia","Muhuri mkubwa juu \xb7 fomu rasmi.",D.rI,4294966259,4279378237,4291404327,D.dIi)
D.hl6=w([D.adJ,D.af7,A.i9],x.O)
D.dIj=new C.xH(9,"fomuWazi")
D.dIe=new C.jq("kuhowa_fomu","Fomu ya Ndoa","Fomu yenye mistari \xb7 sehemu wazi.",D.D5,4294966519,4279904068,4291404327,D.dIj)
D.aH7=new C.kX(17,"certIvoryRose")
D.bfM=new B.u(1,1,0.9725490196078431,0.9607843137254902,A.q)
D.hl9=w([D.bfM,D.ag0,A.i9],x.O)
D.a5G=new C.xH(10,"upendoOrnate")
D.dIa=new C.jq("kuhowa_upendo","Upendo wa Dhahabu","Mapambo ya dhahabu \xb7 picha za wanandoa.",D.aH7,4294965493,4286200650,4291404327,D.a5G)
D.dbQ=w([D.dI7,D.dIf,D.dIh,D.dIg,D.dIc,D.dI9,D.dI4,D.dI2,D.dI5,D.dIb,D.dI3,D.dI8,D.dI1,D.dIe,D.dIa],x.h)
D.ee=w([2774754246,2222750968,2574743534,2373680118,234025727,3177933782,2976870366,1422247313,1345335392,50397442,2842126286,2099981142,436141799,1658312629,3870010189,2591454956,1170918031,2642575903,1086966153,2273148410,368769775,3948501426,3376891790,200339707,3970805057,1742001331,4255294047,3937382213,3214711843,4154762323,2524082916,1539358875,3266819957,486407649,2928907069,1780885068,1513502316,1094664062,49805301,1338821763,1546925160,4104496465,887481809,150073849,2473685474,1943591083,1395732834,1058346282,201589768,1388824469,1696801606,1589887901,672667696,2711000631,251987210,3046808111,151455502,907153956,2608889883,1038279391,652995533,1764173646,3451040383,2675275242,453576978,2659418909,1949051992,773462580,756751158,2993581788,3998898868,4221608027,4132590244,1295727478,1641469623,3467883389,2066295122,1055122397,1898917726,2542044179,4115878822,1758581177,0,753790401,1612718144,536673507,3367088505,3982187446,3194645204,1187761037,3653156455,1262041458,3729410708,3561770136,3898103984,1255133061,1808847035,720367557,3853167183,385612781,3309519750,3612167578,1429418854,2491778321,3477423498,284817897,100794884,2172616702,4031795360,1144798328,3131023141,3819481163,4082192802,4272137053,3225436288,2324664069,2912064063,3164445985,1211644016,83228145,3753688163,3249976951,1977277103,1663115586,806359072,452984805,250868733,1842533055,1288555905,336333848,890442534,804056259,3781124030,2727843637,3427026056,957814574,1472513171,4071073621,2189328124,1195195770,2892260552,3881655738,723065138,2507371494,2690670784,2558624025,3511635870,2145180835,1713513028,2116692564,2878378043,2206763019,3393603212,703524551,3552098411,1007948840,2044649127,3797835452,487262998,1994120109,1004593371,1446130276,1312438900,503974420,3679013266,168166924,1814307912,3831258296,1573044895,1859376061,4021070915,2791465668,2828112185,2761266481,937747667,2339994098,854058965,1137232011,1496790894,3077402074,2358086913,1691735473,3528347292,3769215305,3027004632,4199962284,133494003,636152527,2942657994,2390391540,3920539207,403179536,3585784431,2289596656,1864705354,1915629148,605822008,4054230615,3350508659,1371981463,602466507,2094914977,2624877800,555687742,3712699286,3703422305,2257292045,2240449039,2423288032,1111375484,3300242801,2858837708,3628615824,84083462,32962295,302911004,2741068226,1597322602,4183250862,3501832553,2441512471,1489093017,656219450,3114180135,954327513,335083755,3013122091,856756514,3144247762,1893325225,2307821063,2811532339,3063651117,572399164,2458355477,552200649,1238290055,4283782570,2015897680,2061492133,2408352771,4171342169,2156497161,386731290,3669999461,837215959,3326231172,3093850320,3275833730,2962856233,1999449434,286199582,3417354363,4233385128,3602627437,974525996],x.t)
D.Io=new C.w5(0,"emojis")
D.Dc=new C.w5(1,"pictures")
D.Ip=new C.w5(2,"icons3d")
D.a60=new C.w5(3,"animations")
D.St=new C.w5(4,"videoMotion")
D.Dd=new C.w5(5,"luxe")
D.a3N=w([D.Io,D.Dc,D.Ip,D.a60,D.St,D.Dd],B.aw("O<w5>"))
D.eK6=new B.z(A.e3,"Looks")
D.eyp=new B.z(A.Cl,"Light")
D.eym=new B.z(A.nq,"Colour")
D.ewp=new B.z(A.yz,"Effects")
D.amq=new B.a1(63112,"MaterialIcons",!1)
D.et1=new B.z(D.amq,"Crop")
D.dcj=w([D.eK6,D.eyp,D.eym,D.ewp,D.et1],x.f2)
D.dcX=w([],x.D)
D.hlk=w([],x.L)
D.ddD=w(["HOME: the first tab. It has the NGMY brand, the Helper AI, loans, and the tech frames: Neural Link, Signal Grid, Core Protocol and the Vault Channel arcade.","TOOL HUB: the second tab. It holds the Business Card Creator, Menu Studio (restaurant menus and Bio link pages) and Business Essentials (invoices, receipts, flyers and other business papers).","SLIDES: the third tab. Presentations with many designs, an AI that makes decks, and Marriage documents.","NGMY HUB: the centre tab. Civic Registry, NGMY Store, Help Center and Insurance, Document Scanner, and the App Builder when it is switched on.","ADVISORS: the fifth tab. AI advisors you can chat with like real people. They help with jobs, applications, benefits and everyday questions, and they can answer in Swahili when you write Swahili.","CREATOR HUB: the sixth tab. Doc Share, Quote Calc, QR Generator, Play Zone, Kiswahili School, Recorder Studio, Video Studio and Phone Unlock.","PROFILE: the seventh tab. Theme, logout, legal pages and Worksheets (Projects, Cashier IOUs and receipts, and the Family Tree).","GROWTH INCOME: For now the Growth Income button (the wifi icon, top right of Home) works only for the admin: everyone else sees the same icon but it does not open. members buy an investment plan and earn daily by clocking in, on work days only (Monday to Friday, there is no clock-in on Saturday and Sunday). The wallet shows the balance, deposits, withdrawals and a history of the last two months, with the balance before and after each move. Missing 3 work days in a month removes the investment plan (a new plan must be bought), and the count starts again each month; a warning shows after the 2nd missed day. Clocking in 30 minutes late or more takes 30 percent off the earnings for that day. The investment plans are $5, $20, $30, $50 and $100; $100 is the most expensive plan and nothing above it is offered.","KING AND QUEEN CROWN: a crown badge for special members. A King or Queen receives a daily crown reward of one dollar, and the receipt shows in the wallet history.","WALLET: one balance everywhere in the app. The server keeps the balance so every phone shows the same number.","LOANS: Loan Services is a community help service: it helps members when they need help, for example funerals, buying a car, car repairs or family emergencies. For now the Loan Service button (top left of Home) works only for the admin: everyone else sees the same icon but it cannot be opened. The loan calculator (amount, interest rate and repayment period to try, the whole cost and every payment, and a button to make the tried terms the real loan terms) is for the admin only. The How it works frame is a five-step timeline (Apply, Review, Funds, Repay, Released). A loan is applied for with collateral, repaid in weekly payments, and the collateral is released back to the member when the loan is fully repaid. The admin sets the interest rate, the biggest loan and the repayment period in Loan Center, Loan terms; nothing is written into the screens. Before applying, the member sees the full cost (amount, interest, total to repay, number of payments, each payment, repayment period) and must tap I agree; the agreement is saved with the application. The application asks what the member needs help with (Funeral or Burial, Buy a car, Car repair, Family emergency, Other need), the date needed, the collateral with its estimated value and photos, and an optional family or guarantor contact. A loan shows as Pending, Approved, Paid Out, In Repayment, Repaid, Overdue or Declined, and the member sees a gentle reminder about the next payment.","NGMY STORE: buy and sell items inside the app. Approved members can open a store.","CIVIC REGISTRY: the community system for the M'MBONDO community. It registers members with a Registry ID card, counts members by state, records contributions with receipts, and lets Authorized Registrars enroll families. Registrars can print the community roster as a PDF.","CIVIC BIRTHDAYS AND FAMILY: the registry records children and their ages, shows a birthday reminder two days before, and congratulates a child on turning 18. Members can have a nickname that others search for, while registrars see the real name.","CIVIC VOTING AND STATE WALLET: the community votes on decisions inside the app, and each state has a wallet showing its funds, spending and trust deposits so the money is visible to everyone.","LIGHTNING GROUPS: groups inside the Civic Registry where people give together. A person asks to join with a name, phone number, state and address, and the group owner approves. The group shows named contribution rounds, receipts, who gave, who missed and how many times.","JOBS AND HELP: help finding jobs, house repairs and house workers, a Help Center with insurance, and the Helper AI for support.","CORE PROTOCOL: a collection of studios for curious minds: Universe, Electronics Lab (the AI Inventor now lives inside it as the AI button at the top), Construction Lab (real 3D wiring, plumbing and a house), Discovery Lab (Body Explorer, a real 3D human you can turn and look inside), Toolbox, Reaction Lab, Spark Painter, Rocket Lander, Title Animator and Circuit Lab. (Molecule Maker, DNA Lab, Ecosystem Lab, Balance Lab, Gear Lab, Laser Maze, Light Mixer, Orbit Studio, Swarm Studio, Chain Burst, Marble Music and Orbit Sequencer and Cipher Lab were removed and no longer exist.)","CITY AVATARS: the people of My House are the real characters from the NGMY 3D viewer files (Xbot.glb the X Bot, Michelle.glb the Dancer, Soldier.glb the Soldier), kept in the app (assets/avatars) and drawn with their own skeletons and animations (the X Bot and Soldier stand and walk, the Dancer dances). Their skin pictures are painted onto the body faces, and the body is thinned to a few thousand faces so the game stays quick, so they look a little more faceted than in the viewer. The X Bot is the one who goes through the rooms on the house tour and that you steer outside; in the tour sheet (Play) a Who walks the house? choice switches the tour guide to the Dancer, the Soldier or a plain person. The residents are the three characters too: they stay in the house, some stroll out into the garden for a while and go back in, and a resident with an open call for help shows a phone icon in the name. In every view of My House you can turn the camera all the way round (360) by dragging, with no button needed; Look all round (360) only moves you to the middle of the room at a normal distance. Names no longer float over the people in the rooms: tap a person to see their card. Outside, in the garden and town, the sky behind is space with stars, a galaxy, the Earth and the Moon. The Dancer is played slowly and kept on her spot, and the Soldier now faces the way he walks.","MY HOUSE, THE HALL AND THE CITY: the hall is a wide lobby: three doors in the middle of the back wall (the living room, the kitchen, the first bedroom) with a big video-wall TV on each side showing NGMY ads, the other seven doors on the two short walls, a blue carpet with the NGMY logo, sofas, armchairs, plants, lamps and consoles. In the Tour sheet, Book a hallway tour plays a tour of just the hall. Tapping a door asks whether to open it, close it or go through it. Outlets, switches, doors with their handles, TV frames, wall trim and the wiring job room are drawn so they never disappear when the camera turns, and from outside the house its walls hide the room. The residents live in the city (the Garden is the whole city): they walk about the streets, those with a call for help stand with a phone and a Help sign, and tapping the hospital or the shop building (or the Calls, Hospital, Shop and People buttons, or Community) opens those services over the city. In the city a Walk the city button gives you the walking controls, and Build adds roads, buildings and other things. Nobody is placed in the rooms during the house tour.","WALKING THE CITY: in the Garden (the whole city) press Walk the city and a round stick appears: slide a finger on it to walk, further from the middle is faster, and the Run and Jump buttons make the person run and jump. Walk up to the front door of the house, the hospital or the shop and the person goes in; inside the hospital walk onto the blue mat to admit the sick and up to a bed to treat the patient, inside the shop walk onto the yellow mat for food and the purple mat for medicine, and walk onto the green mat to go out. Near an animal an Act button feeds it for a point, and near a car, ambulance or fire truck it lets you get in and drive it with the stick and park it. When somebody calls for help the phone rings with a call banner: Answer opens the calls. Phone, hospital, shop, animals and cars are all in the city, and the hall of the house shows only three doors: the other rooms are reached from the map or from their own door.","ELECTRICAL SAFETY SCHOOL: every wiring lesson and job is judged by one safety engine. A job is CORRECT only if the connections are on the right terminals, complete and safe; a device that works (a TV that plays, a fan that spins) is never proof of safe wiring. Swapped hot and neutral, a missing neutral or ground, neutral used as ground, hot touching ground, loose or bare wires and a fan on a plain box are all UNSAFE and can never pass. Results are CORRECT, INCORRECT, UNSAFE, INCOMPLETE or REQUIRES VERIFICATION. The lessons have Learn (a wrong wire is refused and explained), Practice (anything is allowed and power-on shows the consequence with arcs, sparks, smoke or flames) and Test (silent, graded on submit with score, explanations and violations). The wiring job has a Test mode switch and Submit for inspection in its settings. A Wire guide lists U.S. wire colors, exceptions and the rule to verify. Diagram lessons (three-way switch, fan with a light kit) are in the Construction Lab menu.","CITY LIFE AND THE HALL, UPDATE: seen from outside the house, the walls on your side are left out (like a doll house) so the TVs and the logo carpet are never hidden at any angle, and the TV pictures also show when seen from behind. The house outside has a big wide NGMY poster on the back wall and different framed posters on the sides. In the city every resident is busy with a real job (the nurse on duty at the hospital, feeding the animals, teaching at the school, washing the car, cooking, resting on the bench, watering the flowers), with props such as steam, grain and water, and a small name for the activity. The city has many more houses. Inside the hospital there are a nurse, a doctor and patients lying in their beds, and you treat them by walking to them. A Full screen button in the city turns the game on its side like a video and keeps only the stick, Run, Jump and Act buttons. When somebody calls, a phone-call screen with a green Answer and a red hang-up button appears; answering opens a text message with what the person needs, a button that shows where they are and a button that takes you to fix it.","WIRING CONTROLS, UPDATE: in a wiring lesson or job, tap a house wire to pick it up (it glows), then tap the screw, wire nut or fixture wire it joins and they connect; tap a joined wire, nut or screw again to take it off. Ceiling lights and fans are shown from the side so the house wires, fixture wires and nuts are all in view. Swiping up looks up and swiping right turns right in every 3D view. The wiring job has Look up (from the floor to the ceiling) and Behind the TV buttons, the Voltage tester sits at the end of the tray where Unplug was, and tapping something plugged in pulls the plug (a TV no longer opens full screen). The house has a Look up at the ceiling button. The Construction Lab menu has a new Safety inspection job (a test job marked on submit). The plumbing sink, basin, mirror and shut-off valves are bigger and look more like a real bathroom sink.","LESSON ROOMS, UPDATE: every lesson room is now big and bare (no furniture, no bathroom fixtures in the electrical lessons), so the outlets and the switch are in the open and nothing hides them or the TV. The wall TV is big by default (Cinema 150) and the TV button lets you choose the wall it hangs on: back, left or right.","CITY AND PLUMBING, UPDATE: the city is now a big town (1800 by 1400) with streets both ways and houses spread over nearly all the land; far-away houses are not drawn while you walk close by, to keep it quick. The Full screen button sits in the row with the door buttons next to Living room. The top buttons are smaller. The Construction Lab menu no longer has the Learn mode and Practice mode buttons or the Community card (the community lives in the city). Seen from outside the house, a whole wall is left out or kept, never half a wall. In the lessons and the wiring job the wall, studs, box and cable cannot be tapped, only the wires and screws. The plumbing job now shows a blue Next box that says exactly what to do, with a Show me button that picks the tool and turns the view to the spot; it shows only the parts the job needs; and a leak shows big drops, a puddle and a red LEAK label that names the joint, with the instruction to turn the water off and tighten it with the wrench.","CITY ADS AND TRAFFIC: the city has about a dozen billboards along the streets, each playing a different NGMY ad (new ads for NGMY Jobs, Loans, Kiswahili School, Civic Registry, Core Protocol, Build and Fix and Create, plus the NGMY app ads), big houses with two big TVs on the front that play ads too, and a huge billboard behind the main house with the NGMY logo and New Global Movement for Youth. Big buses and big police cars with flashing lights drive themselves up and down the streets, each with a billboard on both sides playing an ad, and two helicopters circle in the sky pulling banners that play ads. The sign that says how many rooms still need work is at the top of the house, above the roof. Every person in the city is a different colour.","NEIGHBOURHOOD WORK AND TRADE: every building in the city can be walked into (hospital, shop, school, fire station, every house and big house), and each has its own job done by walking onto a mat: teach the class at the school, check the equipment at the fire station, sell what you carry at the market stall in the shop. The buildings are about half as big again, and the houses stand well back from the streets so there is room to walk beside the road. Electric poles carry wires along the streets with street lights on them, and street lamps stand between the poles. From time to time a street light goes out (it is dark with a red sign) and a neighbour rings because a house has no power. A street light is fixed with the real ceiling-light wiring lesson (black to black, white to white, ground to ground, then the cover); a house is fixed by walking in and onto the red mat at its breaker panel, which opens the wiring job. Fixing earns points. Crates of goods lie about the farm: pick one up with the action button, carry it to the shop and sell it at the market stall, then come back for more. In Build mode a house, big house, shop, billboard, car, tree, bench or crate can be sold for points. Full screen: double tap the two buttons to hide them, double tap where they were to bring them back. The controls are raised from the edges of the phone. The small buttons beside the zoom buttons flip the up-down and left-right swipe, and the choice is remembered. The Construction Lab menu has the jobs first (with a new Neighbourhood jobs tile) and the lessons and reading last. Double tap anywhere in the house, a room or the city and the camera takes you to that spot, like a map. The city has fewer cars: two buses and two police cars drive round two loops of road and never turn back, and every junction on the loops is a roundabout. In the wiring job a plugged-in TV is not a button: go behind it and tap the plug on the wall to pull it out. Pulling a switch or outlet out of the wall keeps it there (only a burnt one is thrown away so a new one can go in). Every billboard has a picture on each side, so nothing is upside down or backwards from behind. The buses and police cars are bigger, with big billboards. In the city the phone rings at least once a minute: a house with no power, a street light out, or somebody sick who must be taken to the hospital desk. A room whose wiring is right has no red boxes left, even if the final test was not run. Swiping left and right turns the view the way your finger goes. The house tour sheet has a new design. Full screen inside a room puts you inside it, like a normal house. Getting out of a car puts you beside it, never inside it, and a person who ends up stuck is moved out. A dark house shows its breaker panel, outlet and switch with red frames, and tapping a red tag (No power, Light out) takes you to that house or street light. The city no longer redraws itself every two seconds, and nothing happens in the city while a job page is open. Work comes one job at a time from houses chosen by chance: while you work no new call rings, a job you put off with the Later button waits on a list and starts when you leave the house you fixed. Turning calls down or not answering counts as a miss; two misses in a row bring a call from the City office, three close the game for 5 hours. The Hide tags button (next to Full screen and Rotate) hides the red tags and the rooms-still-need-work sign. Every outlet, switch and ceiling light or fan in a room is marked fixed on its own as soon as it is wired right, so only the ones still to do keep a red frame, and the sign over the room names what is still to wire. A call opens as a card in the middle of the screen (it turns with the full screen game) with Show me the way (a yellow dashed line on the ground and a tall yellow beam lead to the place), Take me there and Later. A Drone button gives a film of the city from the air: choose the whole city, billboards and the NGMY logos, houses (and inside a big one), the hospital, shop and school inside, or the traffic. The hall has a camera in each corner: tap one to look from there. The Kiswahili School ad has a long conversation, three exchanges a play and new phrases each time. In a house with no power in the city, tap the breaker panel, the outlet or the switch (or their red frames) to start the wiring job straight away. The drone is one smooth flight with no cuts: it starts high, comes down and passes in front of each billboard and round its side, never going into it, and the houses and the buildings are flown past the same way before it goes inside. Indoor furniture is smaller, a TV never stands on a cabinet or the floor (TVs hang on the wall), and a wardrobe, shelf, lamp or console is moved aside so it never hides the TV on the wall. The city land is much bigger (2600 by 2100) with houses behind my house, down both sides and over every green stretch, each with room in front of its door so you can always walk up to it, and a longer street system. Downtown, at the south end, has NGMY office towers, the NGMY company building, NGMY stores, NGMY gas stations and a second NGMY hospital; the stores and gas stations can be walked into like a shop. The biggest billboard, NGMY Town, stands over the middle road, and a NGMY Town billboard stands at each corner of the land; every sign has a picture on both sides. The drone passes each billboard slowly in an arc of about three seconds, goes round all the signs and follows the helicopters to show their banners. Swiping now turns the view the way the finger goes: swipe right looks right, swipe up looks up (the choice is saved under a new name so old choices do not interfere). The message at the top is placed under the buttons in full screen. Nothing in the city is switched off because it is far away: the houses, the billboards and the signs stay on, seen from the drone or from the ground. Every tower and the NGMY company building has billboards on the south face and on the north face (the side the town looks at), and the big NGMY Town sign shows a picture on both of its faces. In the hall the camera is only the camera (no label), and the wall TVs read the right way round from outside the wall too. In a house with no power each fixture turns green on its own when it is fixed, the work you did is kept when you leave and come back, and the panel turns green when the whole house has power; in your own rooms a fixed outlet, switch or light has a green frame, an amber frame while it is started, and a red one while it is not. The work you do on a house, an office level or a street light is kept in the town. Take me there puts you a few steps in front of the door (or beside the street light). People walk fast in the big town and the drawing skips what is off the screen. Missing calls never closes the game; after a few the office only rings to remind you. Every office tower and the NGMY company building can be walked into: the lobby has an elevator (walk onto the blue mat or tap it) with buttons for every level, the level number is always shown, there is a balcony with a glass railing (step on the green mat to look over the town), and you can get a job from an office with no power on any level, take the elevator to that level and fix its breaker panel. The elevator ride is shown: the person walks to the doors, they slide open, the person steps in, the doors close, the camera is inside the car with a display above the doors and a big number that counts up or down level by level with a little shake, a chime and the doors open at the new level where the person walks out. The Orders button opens the delivery board: orders for food, groceries, medicine, packages and letters are picked up at a shop, a store, the hospital, a tower or the company building and carried to a house (follow the yellow line); they pay points. Five other couriers, Maya, Kofi, Amara, Tunde and Zawadi, walk the town doing the same: an order they take is gone, and the first to deliver 8 orders wins the round and a bonus. The race table shows everybody. There are many more big NGMY ad billboards round the edge of the land (north, south, east and west) and on the roofs and sides of the towers and the company building; every one plays the NGMY ads one after the other, a new one every 7 seconds. NEW IN THE CITY: the drone has a special request for the edge billboards only (the big boards round the edge of the land), the billboards request now includes the edge boards, the tower boards and every other billboard, and every drone film always starts at the big sign that welcomes everybody to NGMY Town. The rival couriers now walk round the buildings (never through walls) and go in and out of the doors, out of sight for a moment inside. When all the fixtures of a dark house or office are connected, a green Complete work button appears (in the chips row, and next to the drone button in full screen): press it to check the wiring, bring the power back and get paid. Energy: about five minutes of walking use it all up, then you must rest for three minutes (then you are back at half energy) or eat; a long battery bar next to the page title shows it, and under the Run and Jump buttons in full screen, with no numbers. Food from the shops (apple, juice, sandwich, burger meal) gives energy back and costs points. The shops are now real: shelves with tins, boxes, bottles and loaves, drinks fridges, fresh fruit, a till and a cashier, and walking up to a shelf or the counter (or the Buy things chip) opens the shopping list: food, food for the town and medicine, all paid with the points you earned. Cars only have about two minutes of gas; a gas bar shows beside the energy bar while you drive, and there are many gas stations round the town where you press Buy gas (or buy a gas can in the gas shop). The licence office sells the Uber licence for 40 points. Uber stations (a yellow and black shelter with a car beside it) have people waiting: drive up with the licence and they get in, take them to their house (follow the yellow line) and the fare is paid when you arrive. MORE SWITCHES, OUTLETS AND LIFE: the Construction Lab has ten more wiring lessons (double-pole, three-way, four-way, smart or motion or timer, and combination switches; split half-switched, 4-wire 240 V, 3-wire 240 V, 240 V only and isolated-ground outlets), and every house or office job now asks for a different outlet and a different switch, so people learn them all by fixing them. Calls and jobs only come in the NGMY City map (the garden with the billboards), never in the rooms of the house. Houses stand much further apart. The incoming call screen shows who is calling on top and the Decline, Later and Answer buttons in a row below. Energy lasts about two minutes of walking, then the person crawls on the ground for 20 seconds: if they have not bought food in a shop by then they lose 5 stars, rest for three minutes and come back at half energy. Thirst (buy water or juice) and feeling unwell (buy pain pills) make walking tire faster, so everything the shops sell is needed at some time. The stars balance is shown next to the zoom in button all the time. Thirst also lasts two minutes. Nothing counts against the person while they are working on a job or away from the city map. When all the wiring of a house is connected the work is handed in by itself. Wires and screws are easy to tap: a tap near one picks it. The shop screen is laid out in columns to fit a phone on its side with nothing to scroll, and every pop-up shrinks to fit the screen. Every elevator car and every level of a tower has big TVs playing the NGMY ads, a ride takes at least 3 seconds and longer for every level it climbs, and inside a building the view is close in so you feel you are inside. ADVISOR BROWSER: the live browser of the advisors (the computer an advisor uses to look things up and fill forms) is free for the first 10 minutes of use. After that a payment pop-up appears (never a text message) asking $5.99 for 2 more hours, by card with Stripe or with Cash App (a code, a screenshot of the payment, and an admin approves it). The hours must be used within a week; they are counted quietly in the background only while the browser is open, and what is left is still there when the person comes back. Hours not used within the week are lost, and the next time the person gets only 5 minutes before the pop-up asks again. One browser task may spend at most 2 dollars. In the elevator car the camera is inside the car with the person, the doors in front and a big TV on each side. A finished job pays a random number of stars from 10 to 35. The Uber stations and their signs are called NGMY Uber. During the drone flights nothing far away is left out, and small far pictures are drawn flat so the flight stays smooth. PHONE VIEW: in the garden (NGMY City) a phone icon between the Full screen and the living room chips opens the city across the whole phone standing up, like a phone video, not turned on its side; it opens the drone chooser straight away, with buttons to close, start or stop the drone and hide the tags. The drone sweeps past billboards sideways instead of climbing and dropping on one spot, and the helicopter and vehicle shots are short sweeps round them, so it never hangs in one place. Inside a building the camera never leaves the walls, so turning round never shows a wall from behind or a TV switching off, and the rooms are deeper and taller. In a tower the way out is only on the ground floor; the other levels use the elevator down. Walking, the drone and the elevator ride move in step with every frame and the camera sticks to the person, so it is smooth. Finishing the wiring or plumbing of a room, a lesson or an added outlet pays stars at once. ROADS, TRAFFIC LIGHTS AND ACCIDENTS: the city streets are big two-lane roads with a double yellow line, and the buses and police cars drive in their own lane, keep their distance, never drive through each other, and stop at red lights. Traffic lights stand at the crossings with zebra crossings; the little walking person is green only while the cars have red, so cross then. Anybody on foot who walks in front of a moving car is run over: an ambulance takes them to the hospital, they are weak, and medicine and food are ordered from the stores to the hospital. Those emergency orders go to the top of the Orders board and other users (and you) can deliver them for stars. HIDE ALL BUTTON: the eye icon next to the hide-tags button (and Hide all in the chip list) hides every button, map, banner and card so only the city shows, also while the drone flies; tap the top left corner where the buttons were to bring them back. ROOMS ARE VIEWED FROM INSIDE: in my house every room now opens with you standing inside it, with the four walls and the ceiling round you (like the big buildings), not looking at the room from outside; the See the whole room button still shows the cut-away view from above. A room is only finished (green) when its wiring AND its plumbing (bathroom, kitchen) are done. In a dark city house or office the breaker panel stays red until all four things are fixed (two outlets, the ceiling light, the switch): the ceiling light now has its own red frame and label in the middle of the ceiling, and the panel label says what is still to fix. CARS AT THE CORNERS: the two loops of buses and police cars meet at the two ends of the middle street. Only one vehicle at a time may be in each of those corner zones; the others wait at its edge and go on when it is out, so cars never touch or drive through each other and none gets stuck (tested over 50 minutes of traffic). DARK HOUSE WIRING: a device that runs (the TV works) can still be wired NOT safely, and then its frame stays red: the job counts a fixture as fixed only when it is in, finished and wired right. After you leave the wiring bench the message and the red labels now say why (not put in, not finished, or works but not wired safely, with the reason). Tapping a blue spot with nothing in your hand puts in the device that belongs there. FAR BILLBOARDS: every billboard keeps showing its real ad from any distance and any angle (the biggest few play smoothly, the rest show a picture of the ad that is made again about five times a second), never a plain colour. JOB COMPLETE: when a job from a phone call is finished the screen says JOB COMPLETE with the stars, and the next job only starts about 10 seconds later; the other red tags in the city are other houses still without power. BILLBOARD STUDIO: in the Construction Lab, a small Billboards button sits at the top right corner of the My House frame. It opens a page with ONE billboard on its own: six kinds to choose from (highway board, tall tower sign, neon board, rooftop board, big screen, town gate), a 30 second drone shot round it (wide shot, coming in, close slide, left side, behind the board, right side, pull back and up; Stop the drone ends it), and an Edit button where the person can change the big words, the smaller words and the web address, put their own logo and their own picture from their gallery, pick the colours, or go back to the NGMY default. By default the board plays the NGMY logo, the NGMY words and the NGMY ads one after another. What the person changes is kept on their device. Update: all the boards are much bigger. Joined boards: two signs on one board, or three signs on one long board. Separate boards: Three in a row (three boards in one straight line), Two lines of three (six boards, a line facing front and a line facing back), and Billboard park (four boards: front, back and both sides). Each sign has its own words, logo, picture and colours (Edit, then Which sign). The default NGMY poster words shrink to fit beside the logo so they never run over it. The rooftop board stands on a big house with big TVs and NGMY logos on its front and sides and the NGMY hall carpet on its back. Poles always stop below the board. While the drone flies there is no title or bar; Hide everything removes the buttons and a tap on the screen brings them back. The shot is a crane move, a push in, a slide along the face, then round both sides and the back, then up and away. The Family Tree ad in the Electronics lab (TV channel NGMY Tree Story and the Family Book and Tree cartoon ad) was redesigned: a real tree grows with the grandparents at the roots, the parents on the big branches and the children at the top, a round face and name tag on every branch, hearts joining the couples, and a card that says NGMY Family Tree: add every person, link mums, dads and kids, keep it for ever. Billboard park has its own planned 30 second drone shot: a high wide shot, a crane down and push in to the front board, a sweeping arc to the right board, a long curve behind to the back board, round to the left board, then up and away. On the home screen the Civic Registry ID card shows the plus button when it is the only card, so other cards can be added; once another card is added the plus leaves the Civic card. All the drone shots are now dramatic: a high bird-eye shot that dives to a low hero angle, a low slide across the face, whips round the sides, swoops up high, dives behind, and pulls away into the sky; each move starts slowly, whips and settles. In the Construction lab wiring job, an installed outlet or switch has a button Take it out and put in a different one, which leaves the empty box so a different kind of outlet or switch can be put in. Latest billboard update: no boards are joined any more. Billboard layouts are Two far apart, Three in a row, Three scattered far, Skyline, Two lines of three and Billboard park, with boards of different heights and sizes, the taller ones standing behind and some far from the others. The chooser shows two billboards in every row. Every kind of billboard has its own camera move, and each layout has its own tour where the drone flies from board to board. The rooftop board stands on a tall house with one big TV on each side of the door, and its board, TVs, logo and frame no longer vanish when the angle changes. Cipher Lab was removed from Core Protocol. In the city wiring job the person chooses what goes into an empty box from the tray (nothing is picked for them), and any outlet counts for an outlet and any switch for a switch as long as it is wired right, so the red frames in the house turn green when the job is really done. The zoom buttons answer at once with a big step and keep zooming while held, and pinching measures from the last step so the zoom is never thrown back. FAMILY GAMES: in the Family Tree there is a games button (a game controller icon) next to the Family Book button, and the redesigned Tree display settings sheet has a Family Games card. The system makes games by itself from the people in the tree: Family Kahoot (10 timed questions with coloured answer tiles, points for speed, a streak bonus and a podium against family members), Fireside Stories (a painted African village at night, with huts, a baobab, the moon and a living village: someone pounds grain, a girl carries water on her head, children roll a hoop, a goat grazes, a drummer plays. The oldest person in the tree sits by the fire and talks, with the words coming out while the mouth moves; the other elder and the children look at whoever speaks, blink, nod, ask things, gasp, laugh and clap, and the fire grows with every right answer), Memory Drums (match each person with a clue about them), Elder Order (put children from oldest to youngest, or the generations in order) and a Family Test (10 questions, a grade, a certificate and the mistakes explained). Small trees get culture questions with Swahili family words and African proverbs. The person who created the tree can write up to two games of their own, in the Kahoot style, with up to 12 questions each, and everyone who opens the tree can play them. Players win Family Stars on this phone, with badges: Little Seed, Young Listener, Storyteller, Village Pride, Keeper of Roots and Elder of the Fire. The Family Games hub now shows eight games, two in every row: Family Kahoot, Fireside Stories, Calabash Catch (slide a basket under the gourd with the right answer as gourds fall), Plant the Tree (drag the children of a family onto the branches and watch the tree grow), Who Am I (a shadow turns into a face as clues come), Memory Drums, Elder Order and the Family Test. BUSINESS CARDS: the cards on the Home screen are saved safely: a background refresh can no longer write an old list over a card that was just added, there is a second copy of the cards kept beside the first that restores them if the first is damaged, and a business card put on Home is also kept on the account when one of the 5 cloud places is free, so it is still there after the app is reset. The studio card list uses a key made from the email so saved cards are not lost when the app is built again. Every business card has a Share my card button (the NFC icon on the card on Home and next to Download in the studio): it makes a contact file (vCard) with the name, job, company, phone, email, website, address and logo, shows a QR code any phone camera can read, opens the phone share sheet so the card can be sent by AirDrop to a phone held close, copies the contact text, and writes the card to an NFC tag on phones that allow it (Chrome on Android; iPhone Safari does not allow web pages to use NFC, and Apple Wallet passes need an Apple developer certificate, so they are not available yet).","AI FAIR USE: all NGMY AI runs on the server and needs a signed-in account. To keep the shared AI key safe, each person can use AI only so fast: if you go too fast you see You are using AI too fast, please wait a little and try again, and you can use it again after a short wait. Big jobs (job applications, documents, books, slides, news, translations, pictures, voice) have tighter limits than normal chat. If the AI company is busy you see that the AI is busy and to try again in a minute, and the app does not keep asking. There is also a daily cap for the whole app. Admins can see the limits, the heaviest users and the newest abuse, and change the limits without a new version of the app.",'CONSTRUCTION LAB: a trade school in real looking 3D, MY HOUSE (top card of the Construction Lab): a finished furnished house with 5 bedrooms, 3 bathrooms, a kitchen, a living room and a hall, each drawn as a cut-away 3D room. A little map in the corner shows where you are, tap a room to go there, or use the door buttons; red marks a room whose wiring needs work and blue one whose plumbing does. Signals in the room (a red No power sign, a blue Needs plumbing sign, bare pipe stubs) show what is wrong; the Wiring and Plumbing buttons, or a tap on the outlet, light, toilet or sink, open the same hands-on jobs and the room is finished when the job is. Furniture, walls, floor, ceiling and doors only react while their own edit button is on: Furniture (add, move with arrows, turn, change colour, remove), Walls (paint one wall or all), Floor (wood, carpet or tile), Ceiling, Doors (open and close). A Learn button opens short beginner cards on safety, wiring, plumbing, framing and tools. In My House you are inside the room by default (a low view, like standing in the doorway) and a button switches to a view of the whole room from above. A \ud83c\udfac Tour button plays a life-like person (an adult with a face, hair, arms, legs and a real stride) who comes in through the front door and walks through the whole house like a film, in the time you choose (30 seconds, 1, 2, 3 or 5 minutes), after every TV is switched on. The walk is planned round the furniture and fixtures, so the person never goes through a wall, a chair or a table; in the living room and the bedrooms the person picks up the remote and switches the ad on the TV, in the kitchen they take a drink from the fridge, in the bathrooms they wash their hands, and between rooms they open the door and walk through into the hall. The doors really swing open and show the next room behind them; when the person opens a door the camera moves in towards it, then the picture dissolves into the next room (the hall, a bedroom, a bathroom) where the camera starts on the door they come out of, and the door closes behind them as they walk on. TVs on the wall go from 100 inches to 150, 200 and a whole-wall TV: each is as big as the free stretch of wall allows, never over a door, with nothing in front of it, and the person on the tour stands beside the TV and not in front of it. The hall is wider and deeper, has all ten doors on its back wall and a big TV on each end wall. A \ud83d\udd04 Look all round (360) button puts you in the middle of a closed room (solid ceiling and four walls) to turn all the way round by dragging; a double tap on the floor walks you to that spot, and from above or in the garden a double tap takes the view closer to where you tapped. The view can never go under the floor. The garden is a big lawn you can walk all the way round, and the house outside has windows and doors on all four sides, a porch, a chimney and a roof; with the Furniture button you can add and move trees, pines, bushes, flowers, fences, street lamps, benches, cars, roads, ponds, swings, sheds and dog houses. The cards on the Construction Lab home screen are centred, with a glowing round icon and a soft colour. COMMUNITY (a card on the Construction Lab home screen and a Community button in My House): the seven people who live in the house (Ama, Joseph, Grace, Daniel, Fatima, Papa Moses and Mama Rose, each with their own look) get hungry over time, can fall sick, and become unhappy when their room has no power or their sink leaks; they stand in their rooms in the house as people you can tap, with a word over their head showing how they are. The player feeds them (food), gives medicine, sends the sick to the hospital (three beds: each patient needs treating before their care runs out and goes home better), and buys food and medicine in the shop with points. People who are starving, sick or unhappy for too long lose health and can die. Calls for help arrive in plain words ("My outlet is dead and it is dark in here", "The sink leaks"): Go and fix it opens the house on that room, the real wiring or plumbing job is done, and when it works the call finishes and earns 15 points; wiring and plumbing also break by themselves from time to time so there is always something to do. Hospital discharges, feeding and medicine earn points too. Everything is saved (the people, supplies, calls and which rooms are fixed or broken) and time passes only gently while the app is closed. Inside a room the view stays inside the house: you can look about a little but you cannot swing round behind the walls, and a Go outside button (and Go inside in the garden) is the only way out. Everything in a room is drawn in layers (the floor and walls first, then what is fixed to them like the TV, the plates, the frames and the doors, then the furniture and the person), so the edges of a TV or a door never disappear when you turn to the side and the person never shows through a door, a wall or their own body. The person is built from rounded parts with real joints (a head with a face and hair, shoulders, elbows, knees, hands and shoes), the foot that is down always stands on the floor, and the walk keeps a body-width away from furniture and walls. A TV button puts a wall TV (five models, the big ones up to 77 inches) in a room, or in every room, and turns TVs on and off. An Add button adds outlets, GFCI outlets and light switches to a room that you wire yourself with the wiring bench, a Map button shows or hides the little map (which shrinks to fit the screen), and the Start from a bare house button makes every room need its wiring and plumbing so you can wire the whole house first. The ceiling of a room can hold a light or a fan. All the lessons on the lab home screen (Wall outlet, Light switch, GFCI outlet, Ceiling fan, Sink drain, Faucet supply lines, Build and fix a house, Learn the trades: eight tiles, four on each side) play inside a furnished room with a big TV on the wall showing the NGMY Jobs ad; the ceiling light is already in and only the thing being taught is waiting (red), and once it is done you can use it: flip the switch, plug in a lamp, TV or hair dryer, watch the fan spin. The house also has a Garden (a view of the house from outside with a tree, a path and a mailbox): the front door of the living room leads out to it and the front door there leads back in. Tap a door in a room to open it and walk through it into the next room or the hall, like in a game. Every room can be fixed, even the ones shown as finished: a finished room opens finished and you can pull devices out and wire them again. In a wired room tap an outlet to plug something in (five big TVs from Beovision to Apple TV that play NGMY ads, a lamp, a toaster or a hair dryer) or unplug it, tap the wall switch (or the light) to turn the light or the ceiling fan on and off, and tap a TV to watch it full screen with its own brand home screen. Bedrooms have ceiling fans. Wire a room, Plumb a room and Fix a house on the lab home screen all open My House at a room that needs that job. In the wiring jobs a wrong wire can be fastened just like for real and it burns or trips the breaker when the power goes on, touching a live wire shocks (in Learn mode it hurts nothing but the shock still happens, in Practice mode it costs a life), the wire buttons that are already fastened disappear, the screw labels are kept away from the wires, finished devices have a bright frame so they are easy to find from far, finished rooms have a painted ceiling with crown moulding and no bare beams, and a TV in the room job opens full screen when tapped. The Construction Lab downloads on its own when its button is pressed, so the Core Protocol opens quickly. A TV that is plugged in and on plays the real NGMY ads right on its screen, flat on the glass like a normal TV, without opening it (tap it to watch full screen). There is a Voltage tester: in My House pick the Tester button and tap an outlet, the switch or the light (it glows and beeps when there is power and stays dark when there is none), and in the wiring jobs it is the Voltage tester right after Look in the devices tray. The Construction Lab menus are now at the top like in the Electronics Lab, the home screen of the lab is a short list of tiles with a Learn mode and Practice mode switch, a device already put in can be tapped again to open it or pull it out, and a tap that misses never moves the view. opened from the construction helmet button next to the AI button at the top of the Electronics Lab, and also as a tile in the Core Protocol. Every model can be turned with a finger, zoomed by pinching or with the zoom buttons, and any part can be tapped to zoom in and read what it is. Lessons: Wall outlet (black hot wire to the brass screw, white neutral to the silver screw, bare copper ground to the green screw), Light switch (two black wires on the two brass screws, white wires joined with a wire nut), GFCI outlet (power in on the LINE screws, the LOAD screws are covered with yellow tape, press RESET then TEST), Sink drain (build the tailpiece, P-trap and trap arm, tighten the slip nuts, run the water and see the water seal that blocks sewer gas), Faucet supply lines (hot red hose on the left, cold blue hose on the right, then open the shut-off valves) and a whole house cut open at the front that can be built stage by stage (slab, framing, plumbing rough-in, electrical rough-in, drywall, fixtures, roof), where a tripped breaker and a leaking slip nut can be fixed and each fixture opens its own lesson. The electrical lessons start with the breaker ON and refuse any wire until it is turned OFF, and every wrong connection is explained in plain words. BUILD A WHOLE ROOM (also WIRE A ROOM quick start, and a Skip to the wiring button in the tray, which do the framing, cable and drywall for you so you start straight at wiring the outlets, switches, light and fan with coloured labelled screws, the tester, the TV and the switch test; the room has a window wall, a door wall and the working wall): a project with three phases (rough-in, drywall, devices). Rough-in: mount wall boxes, ceiling boxes and a fan box on the studs with the drill, and unroll the cable through the studs and ceiling (a wrong route gives an error). Drywall: hang the sheets, cut holes with the drywall saw, screw them to the studs, then tape, mud, sand and paint. Devices: wire outlets, several switches, a ceiling light and a ceiling fan, each with a switch to test, then plug in a TV and other appliances. The screw terminals have different colours (brass gold hot, silver neutral, green ground) and show a label when tapped. A Behind the wall / In front button lets you choose which side of the wall you look from instead of the camera turning by itself. Learn mode tells you what to do next and explains every wrong move; Practice mode only speaks up when something is done wrong, and real wiring mistakes shock (three lives) or burn. SERVICE CALLS (Fix a house, learn and practice): a customer rings with four problems chosen from twelve kinds (tripped breaker, no hot water, leaking slip nut, leaking crimped joint, dead outlet, flickering light, burnt outlet, tripped GFCI, running toilet, dripping faucet, hole in the wall, clogged sink), a different mix every time; use Look and test, then the right tool from the toolbox (hand, screwdriver, pliers, wrench, crimp tool, plunger, new flapper, new outlet, drywall patch); wires must have their breaker switched off first. PLUMBING JOBS (learn and practice): fit out a bathroom (flange, wax ring, toilet, bolts, shut-off valve, supply hose, then the sink) or a kitchen sink piece by piece, with the order checked (the app says why a piece cannot go there yet), the main water valve turned off before cutting into pipes, joints tightened with the wrench, and finally the water turned on to find leaks.',"MY HOUSE, THE WORLD OUTSIDE: go outside from the living room (Go outside, or the front door) into a big garden town you can walk and decorate. It starts with a main street, a lane up to the house, a crossroads, a shop, a hospital with a red cross, a fire station with a fire truck, a school, a second house, an ambulance and a car, trees, a pond, lampposts, a bench and fenced animals. In Furniture mode the Add tray offers road pieces (straight, corner, T-junction, crossroads) that snap to a grid and jump a whole piece with the arrow buttons so they always join up, buildings (house, shop, hospital, fire station, school), cars, a fire truck, an ambulance, animals (dog, cat, cow, sheep, chicken, horse) that wander about, trees, bushes, flowers, fences, a bench, a swing, a shed and a doghouse. Everything can be moved, turned, recoloured and removed with the buttons, and nothing reacts to a tap unless the Furniture button is on. Walk about puts a person in the world: hold the arrows to walk (up is away from you), or double tap a spot to send them there; they walk round buildings, vehicles, trees and fences, and walking up to the front door takes them back into the living room. The camera never goes under the ground.","ELECTRONICS LAB: build real circuits with 56 parts in two tool rows, both at the top above the board (swipe sideways), under a redesigned top bar with the lab name, a live count of working and burnt parts, buttons for ready-made circuits, repair, clear and help, and a challenge card with a progress bar: batteries, solar panel, hand crank, wind turbine, switch, fuse, bulb, LED, motor, radio, TV, fan, speaker, clock, calculator, phone charger, WiFi router, siren, toy car, kettle, desk lamp, party lights, voltmeter and ammeter, step-down converter (brings big battery volts down to 3 to 9 V so a phone, tablet, headphones or smart watch is safe), 5 V regulator (gets hot), diode (one way, 0.7 V drop), light sensor, LED strip, water pump, hair dryer, headphones, smart watch, tablet, fridge, washing machine, blender, drone, power drill, torch, neon sign, microwave, doorbell, security camera, game console, heart monitor, aquarium, lighthouse, disco ball, robot and toaster. Each gadget needs the right volts and the right way round: the lab explains why something is not working (not connected, only one end wired, plugged in backwards, flat battery, switch open, too few volts, burnt out and why). A 1.5 volt battery starts flat and must be charged by a solar panel first. The TV shows NGMY animation channels: it opens on the big screen by itself for a minute when it first switches on, and tapping it 3 times quickly opens the big screen. Each TV brand shows its apps in its own design: Samsung with a Smart Hub bar along the bottom, LG with webOS wide launcher cards, Sony with Google TV rows and a picture card, Apple TV with big rounded icons that rise when selected, and Bang and Olufsen with a quiet warm text menu. The TV has 10 NGMY animation channels, a remote control at the top middle of the big screen (CH minus, CH plus, TV, Apps, Ads) and 8 apps inside the TV screen (there is no Growth Income ad or app on the TVs): NGMY Ads (every promotion as cartoons), Civic Registry, Jobs, NGMY Store (African and traditional food, supporting the Congolese and African community), Kiswahili, Doc Scanner, Invoices and Calendar. Each ad is a little cartoon with a kid character. Premium devices with screens play the NGMY cartoon ads on their own screens: TVs (Samsung Neo QLED 8K, LG OLED evo G5, Sony Bravia 9, Apple TV 4K, Bang and Olufsen Beovision), phones (iPhone 18 Pro Max with a Dynamic Island, iPhone Fold, Galaxy S26 Ultra, Galaxy Z Fold7, Pixel 10 Pro XL, Xiaomi 16 Ultra, Huawei Mate 80 Pro Max, OPPO Find X9 Ultra, Honor Magic V5, vivo X300 Pro), tablets and readers (iPad Pro, Kindle Scribe), computers (MacBook Pro, iMac, Pro Display XDR monitor, Sony laser projector, luxury car touchscreen, Apple Vision Pro). Tapping a screen 3 times opens its big screen (a phone opens like an iPhone, a computer shows a desktop with a dock and app windows). Tapping it 4 times opens a size sheet so the screen can be made bigger (never smaller than normal). Sample circuit: Phone and TV on one battery, using a step-down converter. The AI button at the top of the lab opens the AI Inventor, which builds what you describe on the lab board.  Every battery and solar panel can only give so many amps: when the gadgets connected ask for more, a red warning triangle appears on the power source, its volts sag, gadgets switch off and the lab explains why. The lab saves your board and your challenges by itself, so nothing disappears when you leave. The challenges sit behind a flag button in the top bar (with a number on it for how many are left), next to the dark glowing AI button and the help button.","BODY EXPLORER: a real 3D human body built from medical anatomy data. You can turn it, zoom in, switch layers (skin, muscles, organs, skeleton, blood vessels), tap any part to learn about it, hear the heart beat, and take a quiz.","KISWAHILI SCHOOL: learn English and Swahili with pictures and the teacher Mwalimu Amina.","FAMILY TREE AND FAMILY BOOK: build a family tree, then keep a Family Book library of up to six books. The AI can write a whole new book from the tree, in English or Swahili, and the cover can be designed. The look of the top of each book can be chosen from eight header designs (classic leather, ornate gold, parchment, clean paper, midnight, emerald, rose vintage, modern) with the Header button, and the book title also shows as a small running title on every page.","NOTES: business notes with search, photos and cards.","NGMY QUOTES: make a picture quote with many designs, word sizes, text styles, your own photo and the NGMY logo. It also makes NEWS: a newspaper page with a headline, article and your picture, written by an AI that knows NGMY.","BIO STUDIO: link-in-bio pages with designs such as Neural Core, Quantum Grid and Mech Terminal, and visitors can react to a page.","MENU STUDIO: restaurant menus published as a link.","BUSINESS CARD CREATOR: design and download business cards.","INVOICES AND QUOTE CALC: invoices, receipts and estimates with NGMY watermarks.","DOC SHARE, QR GENERATOR, RECORDER STUDIO, VIDEO STUDIO, PLAY ZONE AND PHONE UNLOCK: tools in the Creator Hub.","APP BUILDER: describe an app and the AI builds it, including real web apps you can publish.","DOCUMENT SCANNER: scan papers with the phone camera.","GAME CENTER AND VAULT ARCADE: arcade games you can play. Game bets and wins have their own receipts and do not appear in the wallet history. Games played offline are saved on the phone and counted on the balance, then applied to the account in order as soon as the phone is online again, and every device updates."],x.s)
D.ewC=new B.z("Flashcard",D.Ij)
D.eAo=new B.z("Quiz",D.Ik)
D.eCl=new B.z("Worksheet",D.Il)
D.ezr=new B.z("Notes",D.mR)
D.eAV=new B.z("Section",D.Da)
D.ddE=w([D.ewC,D.eAo,D.eCl,D.ezr,D.eAV],B.aw("O<+(n,mE)>"))
D.dJX=new C.kX(6,"beadedPearl")
D.bit=new B.u(1,0.47843137254901963,0.3607843137254902,0.1803921568627451,A.q)
D.hlo=w([H.Y4,D.bit,A.i9],x.O)
D.aGv=new C.jq("malipo_beaded_pearl","Malipo \u2014 Lulu","Mpaka wa shanga za lulu kuzunguka pembeni \xb7 dhahabu na shaba.",D.dJX,4294966774,4286209070,4291404327,D.jW)
D.dJY=new C.kX(7,"artDeco")
D.bmB=new B.u(1,0.9686274509803922,0.9607843137254902,0.9490196078431372,A.q)
D.bpz=new B.u(1,0.12156862745098039,0.10588235294117647,0.08627450980392157,A.q)
D.hlm=w([D.bmB,D.bpz,A.c_],x.O)
D.aGw=new C.jq("malipo_art_deco","Malipo \u2014 Art Deco","Pembe za ngazi za kisasa \xb7 mng'ao wa dhahabu juu.",D.dJY,4294440434,4280228630,4290283019,D.jW)
D.dJZ=new C.kX(8,"rosetteCorners")
D.boI=new B.u(1,0.984313725490196,0.9647058823529412,0.9372549019607843,A.q)
D.bdG=new B.u(1,0.4196078431372549,0.24705882352941178,0.16470588235294117,A.q)
D.bio=new B.u(1,0.788235294117647,0.4823529411764706,0.23921568627450981,A.q)
D.hl_=w([D.boI,D.bdG,D.bio],x.O)
D.aGu=new C.jq("malipo_rosette","Malipo \u2014 Duara","Medali ya duara kila pembe \xb7 shaba na mahogany.",D.dJZ,4294702831,4285218602,4291394365,D.jW)
D.dK_=new C.kX(9,"modernLedger")
D.hkZ=w([A.c,D.jq,D.jq],x.O)
D.aGt=new C.jq("malipo_modern_ledger","Malipo \u2014 Kisasa","Ukanda thabiti wa bluu upande wa kushoto \xb7 mstari mwembamba.",D.dK_,4294967295,4279378237,4279378237,D.jW)
D.ddI=w([D.aGv,D.aGw,D.aGu,D.aGt],x.h)
D.ddR=w([A.i7,A.oR],x.O)
D.cl=new C.hF(0,"none")
D.dh=new C.hF(1,"fade")
D.Im=new C.hF(3,"slideRight")
D.aHt=new C.hF(5,"slideDown")
D.e3z=new C.hF(7,"zoomOut")
D.a6_=new C.hF(11,"cube")
D.e3u=new C.hF(12,"blur")
D.aHq=new C.hF(13,"dissolve")
D.e3v=new C.hF(14,"wipeLeft")
D.e3w=new C.hF(15,"wipeRight")
D.Ss=new C.hF(17,"push")
D.e3x=new C.hF(18,"flash")
D.aHs=new C.hF(20,"swing")
D.e3y=new C.hF(21,"curtain")
D.R2=w([D.cl,D.dh,D.uK,D.Im,D.uL,D.aHt,D.mS,D.e3z,D.In,D.aHu,D.Sr,D.a6_,D.e3u,D.aHq,D.e3v,D.e3w,D.qs,D.Ss,D.e3x,D.aHr,D.aHs,D.e3y],x.i)
D.R3=w([D.a5F,D.a5D,D.a5w,D.a5x,D.a5y,D.a5B,D.a5z,D.a5A,D.a5E,D.a5C,D.aGv,D.aGw,D.aGu,D.aGt],x.h)
D.dej=w([y.L,"Mbuzi Mbili","Ngyoka","Mmoko"],x.s)
D.den=w([A.xF,A.hP,A.c_],x.O)
D.exI=new B.z(A.ud,"Design")
D.eLC=new B.z(D.amH,"Word sizes")
D.eHe=new B.z(A.Cf,"Text")
D.bKM=new B.a1(983182,"MaterialIcons",!1)
D.eHi=new B.z(D.bKM,"Photo")
D.esA=new B.z(A.lE,"Logo")
D.eMR=new B.z(A.GV,"News")
D.des=w([D.exI,D.eLC,D.eHe,D.eHi,D.esA,D.eMR],x.f2)
D.det=w(["golddust","sparkle","sheen"],x.s)
D.e4W=new C.eu("upload_pdf",L.Ok,"Upload PDF")
D.e45=new C.eu("sign_paper",A.GS,"Sign Paper")
D.bK4=new B.a1(63438,"MaterialIcons",!1)
D.e4S=new C.eu("hd_photo",D.bK4,"HD Photo")
D.e3Y=new C.eu("sharpen",E.a0C,"Sharpen")
D.e47=new C.eu("print",L.Ok,"Download PDF")
D.e4z=new C.eu("rotate",D.amq,"Rotate")
D.e4g=new C.eu("text_box",A.Cf,"Text Box")
D.e4i=new C.eu("picture",A.uj,"Picture")
D.e4e=new C.eu("title",A.yQ,"Title")
D.e4a=new C.eu("subtitle",T.anh,"Subtitle")
D.e4I=new C.eu("bullets",I.a0T,"Bullet List")
D.e4b=new C.eu("numbered",A.Ob,"Numbered")
D.e4L=new C.eu("quote",A3.C5,"Quote")
D.e4n=new C.eu("citation",A.o9,"Citation")
D.e4O=new C.eu("date_stamp",Ah.a0H,"Date Stamp")
D.e4B=new C.eu("page_number",A.yP,"Page #")
D.e4F=new C.eu("header_bar",A.Ci,"Header")
D.e4h=new C.eu("footer_bar",Aq.a1r,"Footer")
D.e46=new C.eu("divider",A.ui,"Divider")
D.e42=new C.eu("highlight",A.a1_,"Highlight")
D.e4H=new C.eu("redact",A.us,"Redact")
D.e4u=new C.eu("callout",A.C_,"Callout")
D.e4Q=new C.eu("checkboxes",I.alG,"Checklist")
D.e4r=new C.eu("table",A.a1o,"Table")
D.e4l=new C.eu("memo",I.a1b,"Memo")
D.e4v=new C.eu("letter",A.GF,"Letter")
D.bJG=new B.a1(63259,"MaterialIcons",!0)
D.e3X=new C.eu("agenda",D.bJG,"Agenda")
D.e48=new C.eu("toc",Az.amV,"Contents")
D.bK0=new B.a1(63406,"MaterialIcons",!1)
D.e4s=new C.eu("sig_line",D.bK0,"Sign Line")
D.e3Q=new C.eu("initial_line",A.jb,"Initials")
D.e3T=new C.eu("approved",A.lE,"APPROVED")
D.e4x=new C.eu("draft",A.p8,"DRAFT")
D.e4D=new C.eu("confidential",A.jQ,"Confidential")
D.e4G=new C.eu("sticky",A.Os,"Sticky Note")
D.e4P=new C.eu("progress",A.amU,"Progress")
D.bLb=new B.a1(983507,"MaterialIcons",!1)
D.e43=new C.eu("stars",D.bLb,"Star Rating")
D.e3O=new C.eu("equation",A.amJ,"Equation")
D.e3Z=new C.eu("timeline",A.a1p,"Timeline")
D.e4m=new C.eu("two_col",A.a1s,"Two Columns")
D.e40=new C.eu("compare",A2.a0L,"Compare")
D.e3M=new C.eu("duplicate_el",A.fK,"Duplicate")
D.e4U=new C.eu("delete_el",A.ec,"Delete")
D.e4K=new C.eu("bring_fwd",H.amD,"Bring Front")
D.e3R=new C.eu("send_back",H.amC,"Send Back")
D.e4w=new C.eu("align_left",D.a0R,"Align L")
D.e4C=new C.eu("align_center",D.a0Q,"Align C")
D.e4T=new C.eu("align_right",D.a0S,"Align R")
D.e4f=new C.eu("word_count",A0.a0k,"Word Count")
D.e4c=new C.eu("link_text",A.hs,"Link")
D.e4A=new C.eu("phone",A.iS,"Phone")
D.e41=new C.eu("email",A.C2,"Email")
D.e4V=new C.eu("qr_placeholder",A.jB,"QR Placeholder")
D.e3W=new C.eu("rectangle",A4.w6,"Rectangle")
D.e4q=new C.eu("circle",A.rl,"Circle")
D.e3S=new C.eu("arrow",A.jP,"Arrow")
D.e4J=new C.eu("line",A.ui,"Line")
D.e44=new C.eu("triangle",A.a0J,"Triangle")
D.bJO=new B.a1(63318,"MaterialIcons",!1)
D.e49=new C.eu("grayscale",D.bJO,"Grayscale")
D.e4j=new C.eu("brighten",I.am0,"Brighten")
D.e4o=new C.eu("flip_h",A.Gv,"Flip H")
D.bJW=new B.a1(63348,"MaterialIcons",!1)
D.e4R=new C.eu("flip_v",D.bJW,"Flip V")
D.e4E=new C.eu("cover_page",A.qa,"Cover Page")
D.e3P=new C.eu("invoice",A.hg,"Invoice")
D.e4_=new C.eu("resume",A.mH,"Resume")
D.e4d=new C.eu("minutes",A.p3,"Minutes")
D.e3U=new C.eu("lab_report",A.Oo,"Lab Report")
D.e3V=new C.eu("rubric",A.ue,"Rubric")
D.e4p=new C.eu("flashcard_tool",V.GQ,"Flashcard")
D.e4M=new C.eu("quiz_tool",A.GK,"Quiz Block")
D.e4t=new C.eu("worksheet_tool",M.Gl,"Worksheet")
D.e4y=new C.eu("outline_share",A.Oq,"Share Outline")
D.e4N=new C.eu("export_json",D.alM,"Export JSON")
D.e3N=new C.eu("new_slide",D.a0j,"New Slide")
D.e4k=new C.eu("present",A.qf,"Present")
D.deY=w([D.e4W,D.e45,D.e4S,D.e3Y,D.e47,D.e4z,D.e4g,D.e4i,D.e4e,D.e4a,D.e4I,D.e4b,D.e4L,D.e4n,D.e4O,D.e4B,D.e4F,D.e4h,D.e46,D.e42,D.e4H,D.e4u,D.e4Q,D.e4r,D.e4l,D.e4v,D.e3X,D.e48,D.e4s,D.e3Q,D.e3T,D.e4x,D.e4D,D.e4G,D.e4P,D.e43,D.e3O,D.e3Z,D.e4m,D.e40,D.e3M,D.e4U,D.e4K,D.e3R,D.e4w,D.e4C,D.e4T,D.e4f,D.e4c,D.e4A,D.e41,D.e4V,D.e3W,D.e4q,D.e3S,D.e4J,D.e44,D.e49,D.e4j,D.e4o,D.e4R,D.e4E,D.e3P,D.e4_,D.e4d,D.e3U,D.e3V,D.e4p,D.e4M,D.e4t,D.e4y,D.e4N,D.e3N,D.e4k],B.aw("O<eu>"))
D.df7=w([A.cr,A.al],x.O)
D.es7=new B.z(4286331629,4292552567)
D.erV=new B.z(4280640491,4278630100)
D.esf=new B.z(4294538006,4292943176)
D.erh=new B.z(4278556265,4280640491)
D.d9e=w([D.es7,D.erV,D.esf,D.erh],x.n)
D.cxI=w([4294626325,4280472558,4294210230],x.t)
D.e3H=new C.nR("colorful","Colorful",A.nq,D.d9e,4294967295,3875536895,D.cxI,D.mS)
D.erJ=new B.z(4279522093,4279657780)
D.erZ=new B.z(4281750292,4283268111)
D.erk=new B.z(4278603323,4279203438)
D.es_=new B.z(4282343954,4279599165)
D.cIJ=w([D.erJ,D.erZ,D.erk,D.es_],x.n)
D.cxq=w([4288931381,4294829706,4287033260],x.t)
D.e3D=new C.nR("nature","Nature",A.GT,D.cIJ,4294442727,3874290891,D.cxq,D.dh)
D.erD=new B.z(4279369771,4283178389)
D.erA=new B.z(4279179050,4286456526)
D.erR=new B.z(4280163147,4290648157)
D.er9=new B.z(4278322711,4285343961)
D.d_u=w([D.erD,D.erA,D.erR,D.er9],x.n)
D.cxE=w([4294210230,4280472558,4289170426],x.t)
D.e3B=new C.nR("vibe","Vibe",A.a0Y,D.d_u,4294967295,3874869502,D.cxE,D.uK)
D.esb=new B.z(4290007817,4292552567)
D.es5=new B.z(4286328082,4294286859)
D.esa=new B.z(4288485197,4294538006)
D.es4=new B.z(4285343961,4293675161)
D.c3z=w([D.esb,D.es5,D.esa,D.es4],x.n)
D.cxJ=w([4294829706,4294967295,4284999929],x.t)
D.e3C=new C.nR("celebration","Celebration",A.l5,D.c3z,4294967295,4009752557,D.cxJ,D.qs)
D.ery=new B.z(4279179050,4280171146)
D.erC=new B.z(4279310375,4280232247)
D.erq=new B.z(4278916151,4280172719)
D.erz=new B.z(4279179050,4281549141)
D.cTi=w([D.ery,D.erC,D.erq,D.erz],x.n)
D.cxl=w([4281908728,4294626325,4287931320],x.t)
D.e3G=new C.nR("professional","Professional",A.BY,D.cTi,4294967295,3872118241,D.cxl,D.Ss)
D.eru=new B.z(4278995566,4278413729)
D.erm=new B.z(4278727492,4279137424)
D.erS=new B.z(4280171146,4278751666)
D.erv=new B.z(4278995566,4279590517)
D.cBw=w([D.eru,D.erm,D.erS,D.erv],x.n)
D.cxo=w([4286436348,4284410580,4294829706],x.t)
D.e3I=new C.nR("ocean","Ocean",I.a1u,D.cBw,4294967295,3873501950,D.cxo,D.uL)
D.es6=new B.z(4286328082,4294538006)
D.es8=new B.z(4286781507,4294677052)
D.es2=new B.z(4283178389,4294197086)
D.es9=new B.z(4288295954,4294688548)
D.cPx=w([D.es6,D.es8,D.es2,D.es9],x.n)
D.cxK=w([4294829706,4294967295,4294747557],x.t)
D.e3J=new C.nR("sunset","Sunset",A.Ou,D.cPx,4294967295,4009749973,D.cxK,D.dh)
D.esj=new B.z(4294967295,4294047225)
D.ese=new B.z(4294507260,4294967295)
D.esi=new B.z(4294967295,4293060848)
D.esd=new B.z(4294507260,4294047225)
D.d2G=w([D.esj,D.ese,D.esi,D.esd],x.n)
D.cxj=w([4280640491,4279179050,4287931320],x.t)
D.e3F=new C.nR("minimal","Minimal",A4.w6,D.d2G,4279179050,4282865001,D.cxj,D.dh)
D.ert=new B.z(4278979081,4280886564)
D.erN=new B.z(4280031511,4278979081)
D.erB=new B.z(4279308561,4281148438)
D.ers=new B.z(4278979081,4280031511)
D.dha=w([D.ert,D.erN,D.erB,D.ers],x.n)
D.cxx=w([4292128567,4294829706,4289241758],x.t)
D.e3K=new C.nR("elegant","Elegant",A.m5,D.dha,4294898631,3873957348,D.cxx,D.aHq)
D.erP=new B.z(4280159034,4282058596)
D.erp=new B.z(4278916151,4280163147)
D.erX=new B.z(4281208933,4278916151)
D.erG=new B.z(4279502891,4283178389)
D.dok=w([D.erP,D.erp,D.erX,D.erG],x.n)
D.cxG=w([4294296657,4292128567,4291081725],x.t)
D.e3E=new C.nR("royal","Royal Gold",A.jd,D.dok,4294965222,3874084351,D.cxG,D.mS)
D.ere=new B.z(4278464302,4280163147)
D.ero=new B.z(4278916151,4279455306)
D.erQ=new B.z(4280163147,4283040846)
D.erb=new B.z(4278332450,4281413249)
D.d8T=w([D.ere,D.ero,D.erQ,D.erb],x.n)
D.cxk=w([4281193663,4289170426,4294210230],x.t)
D.e3L=new C.nR("aurora","Aurora Glow",A.e3,D.d8T,4293983738,3869766608,D.cxk,D.dh)
D.wt=w([D.e3H,D.e3D,D.e3B,D.e3C,D.e3G,D.e3I,D.e3J,D.e3F,D.e3K,D.e3E,D.e3L],B.aw("O<nR>"))
D.bj0=new B.u(0.13333333333333333,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.q)
D.dfI=w([A.qZ,D.bj0,A.qZ],x.O)
D.dfZ=w([4279179050,4281549141,4280640491,4278556265,4292617766,4286331629,4293548044,4278751666,4294967295,4294688548],x.t)
D.dg2=w([null,4294967295,4279310375,4294626325,4280472558,4294210230,4283096704,4293870660,4282090230,4294677052],x.Z)
D.eH6=new B.z("The NGMY app","Write the front-page story about the NGMY app and everything it offers.")
D.exi=new B.z("KB PABLO QR, our CEO","Write a respectful story about KB PABLO QR, Founder, President and CEO of NGMY, and what he built.")
D.eBW=new B.z("Civic Registry","Write about the Civic Registry: why it was built, receipts, registrars and trust in the community.")
D.eoL=new B.z("NGMY Advisors","Write about the NGMY Advisors, the AI advisors who help members.")
D.eAy=new B.z("Growth Income","Write about Growth Income, the wallet and how members earn on work days.")
D.eyM=new B.z("Core Protocol studios","Write about the Core Protocol studios, the Body Explorer and the learning labs.")
D.eD8=new B.z("Surprise me","")
D.dgB=w([D.eH6,D.exi,D.eBW,D.eoL,D.eAy,D.eyM,D.eD8],x.L)
D.bbz=new B.u(1,0.9450980392156862,0.9294117647058824,0.8941176470588236,A.q)
D.bn8=new B.u(1,0.796078431372549,0.7647058823529411,0.7019607843137254,A.q)
D.dho=w([A.c,D.bbz,D.bn8],x.O)
D.djw=w([1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0],x.x)
D.aH_=new C.kX(0,"heritageGold")
D.bht=new B.u(1,0.9764705882352941,0.9450980392156862,0.8666666666666667,A.q)
D.hlp=w([D.bht,A9.afj,A.az],x.O)
D.dId=new C.jq("kuhowa_heritage_gold","Kuhowa \u2014 Hazina ya Dhahabu","Mpaka mzito wa kikabila \xb7 dhahabu na hudhurungi.",D.aH_,4294570461,4284234270,4292128567,D.jW)
D.aH0=new C.kX(1,"heritageCrimson")
D.b9X=new B.u(1,0.9803921568627451,0.9411764705882353,0.9019607843137255,A.q)
D.bfJ=new B.u(1,0.4196078431372549,0.16470588235294117,0.11764705882352941,A.q)
D.bmW=new B.u(1,0.8784313725490196,0.6431372549019608,0.34509803921568627,A.q)
D.hl2=w([D.b9X,D.bfJ,D.bmW],x.O)
D.dI6=new C.jq("kuhowa_heritage_crimson","Kuhowa \u2014 Hazina Nyekundu","Mpaka mzito wa kikabila \xb7 nyekundu na dhahabu.",D.aH0,4294635750,4285213214,4292912216,D.jW)
D.djA=w([D.a5F,D.a5D,D.dId,D.dI6,D.a5y,D.a5B],x.h)
D.dO0=new C.rC(1,"circuit")
D.dOt=new C.mf("neural","Neural Link","Robotic",D.dO0,4278322711,4279179050,4280472558,4284704497,4292932350,"One link at a time, NGMY connects young people everywhere.")
D.dO_=new C.rC(0,"grid")
D.dOq=new C.mf("signal","Signal Grid","Robotic",D.dO_,4280163147,4278322711,4289222135,4293675161,4294308863,"A strong signal starts with one voice. Make yours heard.")
D.dO5=new C.rC(2,"hexes")
D.dOb=new C.mf("core","Core Protocol","Robotic",D.dO5,4278464302,4278322711,4281193663,4281908728,4291623921,"Our core is simple: help each other grow.")
D.aHn=new C.rC(11,"diagonal")
D.dOm=new C.mf("steel","Steel Tech","Robotic",D.aHn,4281549141,4279179050,4287931320,4281908728,4294047225,"Build with your hands, lead with your heart.")
D.aHo=new C.rC(3,"rings")
D.dOa=new C.mf("vault","Vault Gold","Robotic",D.aHo,4280031511,4278190080,4294626325,4294286859,4294898631,"What you build together is worth more than gold.")
D.dO3=new C.rC(13,"leaves")
D.dOd=new C.mf("forest","Forest Morning","Nature",D.dO3,4279522093,4278529558,4283096704,4288931381,4293983732,"Like a forest, a community grows strongest together.")
D.aHp=new C.rC(5,"waves")
D.dOk=new C.mf("ocean","Ocean Calm","Nature",D.aHp,4278413729,4278995566,4281908728,4284999929,4293982719,"Small waves become a movement. Keep going.")
D.dO6=new C.rC(6,"sunset")
D.dOp=new C.mf("sunset","Sunset Glow","Nature",D.dO6,4294538006,4290648157,4294829706,4294668677,4294967295,"Every sunset is a promise that tomorrow can be better.")
D.dO7=new C.rC(7,"mountains")
D.dOc=new C.mf("mountain","Mountain Air","Nature",D.dO7,4282595530,4280171146,4291285758,4286680312,4293849855,"Climb together. The view is better with friends.")
D.dO8=new C.rC(8,"stars")
D.dOj=new C.mf("night","Night Sky","Nature",D.dO8,4280163147,4278190080,4294829706,4291081725,4294308863,"Dream big. NGMY is built by people who looked up.")
D.a5Y=new C.rC(4,"orbs")
D.dOh=new C.mf("aurora","Aurora","Nature",D.a5Y,4278603323,4283178389,4281652121,4289170426,4294967295,"Light shows up when people choose to shine together.")
D.dOr=new C.mf("sand","Sand Dune","Nature",D.aHp,4294829706,4292441862,4290007817,4294966251,4282718723,"Patience builds a legacy, one grain at a time.")
D.dO9=new C.rC(9,"rays")
D.dOg=new C.mf("golden","Golden Hour","Warm",D.dO9,4294286859,4290321436,4294897802,4294967295,4294967295,"Your hour is now. Start where you are.")
D.dOe=new C.mf("royal","Royal Purple","Warm",D.aHn,4286456526,4290648157,4293962748,4294829706,4294967295,"Lead with respect, and people will follow with joy.")
D.dOf=new C.mf("rose","Rose Petal","Warm",D.a5Y,4294668677,4292943176,4294960358,4294812847,4294967295,"Kindness is the strongest thing a community can grow.")
D.dO2=new C.rC(12,"blocks")
D.dOi=new C.mf("electric","Electric Blue","Bold",D.dO2,4280640491,4278751666,4290438909,4294967295,4294967295,"Energy is contagious. Bring yours to NGMY.")
D.dOs=new C.mf("mint","Fresh Mint","Bold",D.a5Y,4281652121,4278630100,4294967295,4289197008,4278603323,"Fresh ideas grow when young people lead.")
D.dO4=new C.rC(14,"minimal")
D.dOo=new C.mf("white","Clean White","Clean",D.dO4,4294967295,4294047225,4280640491,4287931320,4279179050,"Simple words, strong purpose. That is NGMY.")
D.dO1=new C.rC(10,"frame")
D.dOl=new C.mf("midnight","Midnight Gold","Clean",D.dO1,4279179050,4278322711,4294626325,4294829706,4294966251,"Quiet work in the dark makes the morning shine.")
D.dOn=new C.mf("community","Community Green","Clean",D.aHo,4278556265,4280640491,4289197008,4290763774,4294967295,"The New Global Movement for Youth starts with you.")
D.a4e=w([D.dOt,D.dOq,D.dOb,D.dOm,D.dOa,D.dOd,D.dOk,D.dOp,D.dOc,D.dOj,D.dOh,D.dOr,D.dOg,D.dOe,D.dOf,D.dOi,D.dOs,D.dOo,D.dOl,D.dOn],B.aw("O<mf>"))
D.djX=w([D.B7,A.vA,A.hP,A.c_],x.O)
D.dke=w([D.agb,D.jq],x.O)
D.dko=w(["pdf","docx","txt","md"],x.s)
D.eQk=new B.bj(-3,150,34)
D.eQl=new B.bj(-3,214,62)
D.eQm=new B.bj(-3,288,62)
D.dle=w([D.eQk,D.eQl,D.eQm],B.aw("O<+(L,L,L)>"))
D.dlJ=w(["rays","bokeh","aurora","spotlight"],x.s)
D.dmm=w(["Write","Design","Print & fold"],x.s)
D.jX=new C.uP(2,"triangle")
D.Db=new C.uP(3,"arrow")
D.fy=new C.uP(4,"line")
D.jY=new C.uP(5,"parallelogram")
D.dmp=w([D.bg,D.eQ,D.jX,D.Db,D.fy,D.jY,D.lg],x.m)
D.eqa=new B.z(240,96)
D.esU=new B.z(560,46)
D.dmv=w([D.eqa,D.esU],x.G)
D.hlA=new C.xK(0,"classic")
D.dK2=new C.nN("heritage_gold","Urithi wa Dhahabu","Mpaka wa kitamaduni \xb7 rangi ya dhahabu na kahawia.",D.aH_,4294570461,4282000405,4284234270)
D.dKe=new C.nN("heritage_crimson","Urithi wa Nyekundu","Mpaka wa kitamaduni \xb7 rangi ya nyekundu na shaba.",D.aH0,4294635750,4281999378,4285213214)
D.dK3=new C.nN("elegant_navy","Umoja Mzuri",y.s,D.a5S,4294967035,4279378237,4290283019)
D.dKg=new C.nN("elegant_gold","Umoja wa Dhahabu",y.Q,D.aH8,4294966515,4281016592,4289102906)
D.dKi=new C.nN("kente_sunset","Kente ya Jua",y.H,D.aH1,4294964964,4282000405,4279983648)
D.dK0=new C.nN("indigo_mudcloth","Nguo ya Indigo",y.n,D.aH2,4294439140,4279903102,4279903102)
D.dK5=new C.nN("adinkra_royal","Muhuri wa Adinkra",y.z,D.aH3,4294965484,4285218591,4287322667)
D.dKa=new C.nN("nile_lotus","Lotus ya Nile","Nguzo za papyrus na ua la lotus juu.",D.aH4,4294244340,4279196764,4279196764)
D.dKc=new C.nN("shweshwe_ivory","Shweshwe","Nguo ya shweshwe \xb7 kadi ya pembe ndani.",D.aH5,4294505710,4279970378,4291058750)
D.hlB=new C.xK(1,"ringsNdoa")
D.dK4=new C.nN("rings_ndoa","Hati ya Ndoa","Pete mbili \xb7 vichwa vya kidonge \xb7 hati rasmi ya ndoa.",D.rI,4294966259,4279378237,4291404327)
D.hlD=new C.xK(2,"coupleCards")
D.dKf=new C.nN("couple_taarifa","Taarifa za Wanandoa","Picha ya mwanamume na mwanamke \xb7 kadi mbili za taarifa.",D.rI,4294966259,4279378237,4291404327)
D.hlE=new C.xK(3,"kuhoweshaForm")
D.dKb=new C.nN("barua_kuhowesha","Barua ya Kuhowesha","Barua rasmi \xb7 orodha ya NIMETOWEA \xb7 mashahidi.",D.D5,4294966519,4279378237,4291404327)
D.hlF=new C.xK(4,"mahariPande")
D.dK1=new C.nN("mahari_pande","Mahari ya Pande","Masharti ya mahari \xb7 pande mbili za sahihi.",D.rI,4294966259,4279904068,4291404327)
D.hlG=new C.xK(5,"familiaMti")
D.dKh=new C.nN("sheria_familia","Sheria za Familia","Mti wa familia \xb7 sheria za pamoja \xb7 kijani.",D.aH6,4294966776,4280241466,4291404327)
D.hlH=new C.xK(6,"ndoaSafi")
D.dK8=new C.nN("ndoa_safi","Ndoa ya Pamoja","Safu mbili \xb7 mume na mke \xb7 masharti ya ndoa.",D.D5,4294966519,4279378237,4291404327)
D.hlI=new C.xK(7,"peteWide")
D.dK7=new C.nN("pete_pana","Pete Pana","Pete kubwa za dhahabu \xb7 nafasi wazi \xb7 hati ya heshima.",D.rI,4294966259,4282001936,4291404327)
D.hlJ=new C.xK(8,"muhuriCrest")
D.dK6=new C.nN("muhuri_familia","Muhuri wa Familia","Muhuri mkubwa juu \xb7 fomu rasmi ya familia.",D.rI,4294966259,4279378237,4291404327)
D.hlK=new C.xK(9,"fomuWazi")
D.dK9=new C.nN("fomu_wazi","Fomu ya Ndoa","Fomu yenye mistari \xb7 namba \xb7 sehemu wazi za kujaza.",D.D5,4294966519,4279904068,4291404327)
D.hlC=new C.xK(10,"upendoOrnate")
D.dKd=new C.nN("upendo_dhahabu","Upendo wa Dhahabu","Mapambo ya dhahabu \xb7 picha za wanandoa \xb7 rangi ya waridi.",D.aH7,4294965493,4286200650,4291404327)
D.Ri=w([D.dK2,D.dKe,D.dK3,D.dKg,D.dKi,D.dK0,D.dK5,D.dKa,D.dKc,D.dK4,D.dKf,D.dKb,D.dK1,D.dKh,D.dK8,D.dK7,D.dK6,D.dK9,D.dKd],B.aw("O<nN>"))
D.D9=new C.arv(0,"landscape169")
D.on=new C.arv(1,"portrait916")
D.dni=w([D.D9,D.on],B.aw("O<arv>"))
D.azL=w([A.hP,A.bM,A.cZ,A.i7,A.c],x.O)
D.uB=w([A.c_,A.iq],x.O)
D.epe=new B.z(1000,"M")
D.euk=new B.z(900,"CM")
D.esO=new B.z(500,"D")
D.er4=new B.z(400,"CD")
D.epf=new B.z(100,"C")
D.eul=new B.z(90,"XC")
D.esP=new B.z(50,"L")
D.er5=new B.z(40,"XL")
D.epl=new B.z(10,"X")
D.eux=new B.z(9,"IX")
D.et5=new B.z(5,"V")
D.esz=new B.z(4,"IV")
D.epQ=new B.z(1,"I")
D.do0=w([D.epe,D.euk,D.esO,D.er4,D.epf,D.eul,D.esP,D.er5,D.epl,D.eux,D.et5,D.esz,D.epQ],x.ek)
D.eRn=new B.cw(["open",A.jb,"Open & write","Keep writing this book"])
D.eRO=new B.cw(["print",A.un,"Print as a book","Fold and staple it"])
D.doa=w([D.eRn,D.eRO],B.aw("O<+(n,a1,n,n)>"))
D.doS=w([D.a6_,D.mS,D.In,D.Ss,D.dh,D.Sr],x.i)
D.eHP=new B.z(-1,"Small")
D.ep_=new B.z(0,"Normal")
D.epP=new B.z(1,"Big")
D.eqq=new B.z(2,"Huge")
D.dpq=w([D.eHP,D.ep_,D.epP,D.eqq],x.ek)
D.dpQ=w([49,65,89,38,83,89],x.t)
D.dpX=w([A.vA,A.hP,A.c_],x.O)
D.dqo=w([D.dh,D.mS,D.uK,D.a6_,D.In,D.Ss],x.i)
D.aF1=new B.dv([0,D.Mi,8,D.ahy,12,D.ahz],B.aw("dv<H,a4_>"))
D.e9z={gold:0,platinum:1,glow:2,rainbow:3,double:4,neon:5,framed:6,rosegold:7,jewels:8,aurora:9}
D.bmM=new B.u(1,0.8313725490196079,0.6274509803921569,0.09019607843137255,A.q)
D.cTt=w([A.bM,D.bmM],x.O)
D.ddp=w([A.b2,A.bj],x.O)
D.d8_=w([A.c8,A.aR,A.bI],x.O)
D.dob=w([A.cr,A.bs],x.O)
D.d0q=w([A.bc,A.f2],x.O)
D.daK=w([A.b5,A.fe],x.O)
D.bfo=new B.u(1,0.9529411764705882,0.7764705882352941,0.7098039215686275,A.q)
D.da0=w([D.bfo,A.oR],x.O)
D.d4q=w([A.ha,A.xG],x.O)
D.d0e=w([A.bu,A.c9],x.O)
D.dt3=new B.bu(D.e9z,[D.cTt,K.aqa,D.ddp,D.d8_,D.dob,D.d0q,D.daK,D.da0,D.d4q,D.d0e],B.aw("bu<n,ai<u>>"))
D.e8Q={"[Jina la Baba wa Mume]":0,"[Jina la Jamii ya Mume]":1,"[Jina la Nyumba ya Mume]":2,"[Jina la Kijana]":3,"[Jina la Binti]":4,"[Jina la Baba wa Binti]":5,"[Jina la Jamii ya Binti]":6,"[Jina la Nyumba ya Binti]":7}
D.a4R=new B.bu(D.e8Q,["[Jina la Baba wa Mume]","[Jina la Jamii ya Mume]","[Jina la Nyumba ya Mume]","[Jina la Kijana]","[Jina la Binti]","[Jina la Baba wa Binti]","[Jina la Jamii ya Binti]","[Jina la Nyumba ya Binti]"],B.aw("bu<n,n>"))
D.a4Y=new B.bu(A.hL,[],B.aw("bu<H,+icon3d,picture(n?,n?)>"))
D.dxm=new F.N8(30,null)
D.dCq=new F.mA("Chapter 1","","","")
D.dn3=w([D.dCq],x.B)
D.dCu=new F.rs("My Book","","",D.dn3,E.aGj)
D.dCs=new F.uF("starry",null,null,null,null,"","","")
D.dCv=new F.rs("Dream Big","","",E.a3V,D.dCs)
D.dCt=new F.uF("story",null,null,null,null,"","","")
D.dCw=new F.rs("Little Lion","","",E.a3V,D.dCt)
D.dCr=new F.uF("vintage",null,null,null,null,"","","")
D.dCx=new F.rs("Our Story","","",E.a3V,D.dCr)
D.dFu=new C.EI("","NGMY","","")
D.dMG=new C.zK("The NGMY Times","NGMY NEWS","","","By the NGMY Newsroom","",A.X,"","","")
D.e3A=new C.b1x(null,null,null,null)
D.e5i=new C.arA(null)
D.e5u=new C.as3(0,"smaller")
D.e5v=new C.as3(1,"bigger")
D.aHD=new C.as3(2,"fit")
D.ecM=new B.t(3,6)
D.ed4=new B.t(4,8)
D.eh6=new B.D(E.aip,T.ad4,null)
D.eha=new B.D(A.Zh,A.mp,null)
D.bMs=new B.ae(A.l8,16,A.bU,null,null,null)
D.ehe=new B.D(A.it,D.bMs,null)
D.b9l=new B.fi(2.2,null,null,null,null,A.c,null,null,null,null)
D.ehq=new B.D(A.FZ,D.b9l,null)
D.bWR=new B.ae(A.cx,16,A.aB,null,null,null)
D.ehu=new B.D(A.ez,D.bWR,null)
D.fxW=new B.y("Play",null,A.nE,null,null,null,null,null,null,null,null,null)
D.ddF=w([U.aoF,A.rY,D.fxW],x.p)
D.eWj=new B.cb(A.aN,A.e,A.P,A.m,null,A.p,null,0,D.ddF,null)
D.ehx=new B.D(A.nm,D.eWj,null)
D.b9u=new B.fi(2.4,null,null,null,null,null,null,null,null,null)
D.f18=new B.a7(20,20,D.b9u,null)
D.ehD=new B.D(A.it,D.f18,null)
D.fHc=new B.y("Seconds per slide",null,A.fO,null,null,null,null,null,null,null,null,null)
D.ehL=new B.D(A.bh,D.fHc,null)
D.ej5=new C.a8P(2,"print")
D.ej8=new B.iS(1,0.7764705882352941,0.1568627450980392,0.1568627450980392)
D.ekL=new B.hg("/Annot")
D.ekN=new B.hg("/URI")
D.fs7=new B.y("Share text outline",null,null,null,null,null,null,null,null,null,null,null)
D.emP=new B.js("share",48,D.fs7,null,B.aw("js<n>"))
D.bWL=new B.ae(A.e3,14,A.eF,null,null,null)
D.emY=new B.cN(null,-2,-2,null,null,null,D.bWL,null)
D.cVC=w([H.afP,A.K],x.O)
D.c2l=new B.a9(A.a3,A.a8,A.x,D.cVC,null,null)
D.b1Z=new B.o(null,null,null,null,null,D.c2l,A.n)
D.brZ=new B.kU(D.b1Z,A.bf,null,null)
D.en9=new B.cN(0,0,null,0,8,null,D.brZ,null)
D.diu=w([A.hQ,A.mv,A.ca],x.O)
D.enN=new B.c0(A.A,0.5,A.x,null,0,D.diu,null,null)
D.eqj=new B.z(0.22,A.bj)
D.euR=new B.z("ai","Your newspaper is ready. Tell me anything you want changed, or ask me a question about NGMY.")
D.ewY=new B.z(0.5,A.hl)
D.eGf=new B.z(0.78,A.aV)
D.eRd=new B.cw([A.by,0.22,0.7,2.6])
D.eRj=new B.cw([A.bc,0.36,1.2,1.3])
D.eRp=new B.cw([A.dD,0.28,0.2,0.4])
D.eRv=new B.cw([A.cC,0.05,0.3,0.35])
D.eRB=new B.cw([A.bu,0.28,0.9,0])
D.eRJ=new B.cw([A.aC,-0.25,-0.15,0.45])
D.eSz=new B.cw([A.c8,0.42,1,4.1])
D.eW1=new B.a9N(9)
D.bNA=new B.ae(A.GV,28,A.bI,null,null,null)
D.fHL=new B.y("NGMY News",null,A.de,null,null,null,null,null,null,null,null,null)
D.bC1=new B.bA(1,A.bd,D.fHL,null)
D.dlM=w([D.bNA,A.as,D.bC1],x.p)
D.eWd=new B.cb(A.aN,A.e,A.j,A.m,null,A.p,null,0,D.dlM,null)
D.bNL=new B.ae(A.o9,16,A.c,null,null,null)
D.fJj=new B.y("Book",null,A.ow,null,null,null,null,null,null,null,null,null)
D.dpW=w([D.bNL,A.ej,D.fJj],x.p)
D.eWl=new B.cb(A.aN,A.e,A.P,A.m,null,A.p,null,0,D.dpW,null)
D.bUm=new B.ae(A.jQ,10,A.c,null,null,null)
D.fvZ=new B.y("Pro",null,A.nB,null,null,null,null,null,null,null,null,null)
D.ddK=w([D.bUm,A.qz,D.fvZ],x.p)
D.eWp=new B.cb(A.aN,A.e,A.P,A.m,null,A.p,null,0,D.ddK,null)
D.fHa=new B.y("Make a newspaper",null,A.Us,null,null,null,null,null,null,null,null,null)
D.c3x=w([E.a1Q,A.ab,D.fHa],x.p)
D.eWq=new B.cb(A.aN,A.e,A.P,A.m,null,A.p,null,0,D.c3x,null)
D.bSS=new B.ae(A.l5,18,A.bM,null,null,null)
D.fy9=new B.y("Ending celebration",null,A.hx,null,null,null,null,null,null,null,null,null)
D.dkP=w([D.bSS,A.bo,D.fy9],x.p)
D.eWt=new B.cb(A.aN,A.e,A.j,A.m,null,A.p,null,0,D.dkP,null)
D.bU8=new B.ae(A.jb,18,A.k9,null,null,null)
D.fc3=new B.F(!0,A.k9,null,null,null,null,15,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJC=new B.y("Write",null,D.fc3,null,null,null,null,null,null,null,null,null)
D.d2u=w([D.bU8,A.ab,D.fJC],x.p)
D.eWA=new B.cb(A.aN,A.e,A.P,A.m,null,A.p,null,0,D.d2u,null)
D.fvX=new B.y("Download picture",null,A.ov,null,null,null,null,null,null,null,null,null)
D.bEv=new B.qv(A.e0,A.A,A.f,D.fvX,null)
D.bEG=new B.ds(1,A.cn,D.bEv,null)
D.de8=w([L.aow,A.ab,D.bEG],x.p)
D.eWB=new B.cb(A.aN,A.b8,A.j,A.m,null,A.p,null,0,D.de8,null)
D.bPy=new B.ae(A.GV,22,A.bI,null,null,null)
D.fFK=new B.y("NGMY NEWS",null,K.a8B,null,null,null,null,null,null,null,null,null)
D.cV1=w([D.bPy,A.ab,D.fFK],x.p)
D.eWK=new B.cb(A.aN,A.e,A.P,A.m,null,A.p,null,0,D.cV1,null)
D.eWW=new B.pi(!1,!1,null,T.Wp,null,A.bZ,null,null,null)
D.a7J=new B.jn([D.cl,D.dh,D.uK,D.Im,D.uL,D.aHt],B.aw("jn<hF>"))
D.ebe={title:0,quote:1,closing:2,bio:3}
D.eY6=new B.dD(D.ebe,4,x.M)
D.e98={caps:0,stamp:1,retro:2,glitch:3,whisper:4}
D.eY9=new B.dD(D.e98,5,x.M)
D.eax={midnight:0,rose_gold:1,slate_pro:2,neon_night:3,charcoal:4,crimson:5,gold:6,plum:7}
D.a7K=new B.dD(D.eax,8,x.M)
D.e9K={Design:0,Transitions:1,Insert:2}
D.eYe=new B.dD(D.e9K,3,x.M)
D.hlS=new B.jn([D.a60],B.aw("jn<w5>"))
D.e9T={float3d:0,drift:1,pulse:2}
D.eYi=new B.dD(D.e9T,3,x.M)
D.aOX=new B.jn([D.Ij,D.Ik,D.Il],B.aw("jn<mE>"))
D.e96={shimmer:0,golddust:1,spotlight:2,goldframe:3,twinkle:4,orbit:5,rays:6,bokeh:7,aurora:8,sparkle:9,sheen:10,velvet:11,crest:12,filigree:13}
D.aP_=new B.dD(D.e96,14,x.M)
D.hlT=new B.dD(A.hL,0,B.aw("dD<w5>"))
D.e9Q={"kbpabloqr@gmail.com":0,"ngumoyaking@gmail.com":1,"appbusiness321@gmail.com":2,"appbusiness84@gmail.com":3}
D.Ty=new B.dD(D.e9Q,4,x.M)
D.e9_={print:0,rotate:1,text_box:2,picture:3,title:4,subtitle:5,bullets:6,numbered:7,quote:8,citation:9,date_stamp:10,page_number:11,header_bar:12,footer_bar:13,divider:14,table:15,sticky:16,duplicate_el:17,delete_el:18,bring_fwd:19,send_back:20,align_left:21,align_center:22,align_right:23,word_count:24,link_text:25,phone:26,email:27,new_slide:28,present:29}
D.aP2=new B.dD(D.e9_,30,x.M)
D.e9Z={circle:0,triangle:1,hexagon:2,diamond:3}
D.eYF=new B.dD(D.e9Z,4,x.M)
D.f03=new B.au(390,844)
D.f0T=new B.a7(20,20,A.L4,null)
D.aPP=new B.a7(null,2.5,null,null)
D.f12=new B.a7(18,18,A.L4,null)
D.bUc=new B.ae(A.jd,19,A.c,null,null,null)
D.f1d=new B.a7(38,38,D.bUc,null)
D.bSq=new B.ae(A.yT,22,A.c,null,null,null)
D.f1f=new B.a7(40,40,D.bSq,null)
D.f1O=new B.hQ(2,10,10,1.15,null)
D.aPX=new B.hQ(2,16,14,0.62,null)
D.bA2=new B.Q(32,30,32,40)
D.baV=new B.u(0.3333333333333333,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.q)
D.bNx=new B.ae(A.qa,56,D.baV,null,null,null)
D.agI=new B.u(0.6,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.q)
D.fe7=new B.F(!0,D.agI,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCG=new B.y("Your books will live here.",null,D.fe7,null,A.L,null,null,null,null,null,null,null)
D.d5n=w([D.bNx,A.R,D.fCG],x.p)
D.bqW=new B.fj(A.ag,A.e,A.j,A.m,null,A.p,null,0,D.d5n,null)
D.ehJ=new B.D(D.bA2,D.bqW,null)
D.f29=new B.mi(D.ehJ,null)
D.fCD=new B.y("Chagua jimbo la Civic Registry kwanza.",null,null,null,null,null,null,null,null,null,null,null)
D.f2r=new B.b2(D.fCD,null,null,null,null,null,null,null,null,null,null,null,null,A.V,!1,null,null,null,A.t,null)
D.fAK=new B.y("Done \u2014 only the text size was changed. Undo brings back the old size.",null,null,null,null,null,null,null,null,null,null,null)
D.f2s=new B.b2(D.fAK,null,null,null,null,null,null,null,null,null,null,null,null,A.V,!1,null,null,null,A.t,null)
D.fFO=new B.y("This slide has no text boxes.",null,null,null,null,null,null,null,null,null,null,null)
D.f2B=new B.b2(D.fFO,null,null,null,null,null,null,null,null,null,null,null,null,A.V,!1,null,null,null,A.t,null)
D.fGm=new B.y("Tap fields to edit names. Tap signature boxes to sign or re-sign. Print from the View tab.",null,null,null,null,null,null,null,null,null,null,null)
D.f2Q=new B.b2(D.fGm,null,null,null,null,null,null,null,null,null,null,null,null,A.V,!1,null,null,null,A.t,null)
D.fzo=new B.y("Sign in to Civic Registry to view Hati ya Kiapo cha Uongozi.",null,null,null,null,null,null,null,null,null,null,null)
D.f32=new B.b2(D.fzo,null,null,null,null,null,null,null,null,null,null,null,null,A.V,!1,null,null,null,A.t,null)
D.fNB=new B.y("Could not read that presentation QR or document code.",null,null,null,null,null,null,null,null,null,null,null)
D.f3l=new B.b2(D.fNB,null,null,null,null,null,null,null,null,null,null,null,null,A.V,!1,null,null,null,A.t,null)
D.fKE=new B.y("Use the 5-character code on the document QR, like GA847.",null,null,null,null,null,null,null,null,null,null,null)
D.f3w=new B.b2(D.fKE,null,null,null,null,null,null,null,null,null,null,null,null,A.V,!1,null,null,null,A.t,null)
D.fGv=new B.y("Sign in to Civic Registry to view this document.",null,null,null,null,null,null,null,null,null,null,null)
D.f4f=new B.b2(D.fGv,null,null,null,null,null,null,null,null,null,null,null,null,A.V,!1,null,null,null,A.t,null)
D.fu9=new B.y("Buttons hidden. Double-tap the top-right corner to show them again.",null,null,null,null,null,null,null,null,null,null,null)
D.f4w=new B.b2(D.fu9,null,null,null,null,null,null,null,A.iD,null,null,null,null,A.q_,!1,null,null,null,A.t,null)
D.fw6=new B.y("Could not crop that picture.",null,null,null,null,null,null,null,null,null,null,null)
D.f4O=new B.b2(D.fw6,null,null,null,null,null,null,null,null,null,null,null,null,A.V,!1,null,null,null,A.t,null)
D.fCj=new B.y("This oath is locked for editing (5 hours after the president signed). You can still view and play the video.",null,null,null,null,null,null,null,null,null,null,null)
D.f4Q=new B.b2(D.fCj,null,null,null,null,null,null,null,null,null,null,null,null,A.V,!1,null,null,null,A.t,null)
D.fC_=new B.y("Only the authorized registrar for this state can add the oath video.",null,null,null,null,null,null,null,null,null,null,null)
D.f4R=new B.b2(D.fC_,null,null,null,null,null,null,null,null,null,null,null,null,A.V,!1,null,null,null,A.t,null)
D.fIz=new B.y("Document code copied.",null,null,null,null,null,null,null,null,null,null,null)
D.f4S=new B.b2(D.fIz,null,null,null,null,null,null,null,null,null,null,null,null,A.V,!1,null,null,null,A.t,null)
D.fqk=new B.y("Tap the logo or a picture on this slide first.",null,null,null,null,null,null,null,null,null,null,null)
D.f50=new B.b2(D.fqk,null,null,null,null,null,null,null,null,null,null,null,null,A.V,!1,null,null,null,A.t,null)
D.fxg=new B.y("Sign in to unlock Slides Pro features.",null,null,null,null,null,null,null,null,null,null,null)
D.f5n=new B.b2(D.fxg,null,null,null,null,null,null,null,null,null,null,null,null,A.V,!1,null,null,null,A.t,null)
D.fMh=new B.y("Done \u2014 the look is changed. Undo brings back the old one.",null,null,null,null,null,null,null,null,null,null,null)
D.f5p=new B.b2(D.fMh,null,null,null,null,null,null,null,null,null,null,null,null,A.V,!1,null,null,null,A.t,null)
D.fLO=new B.y("The NGMY logo stays on every quote. You can move it or change its frame.",null,null,null,null,null,null,null,null,null,null,null)
D.f5t=new B.b2(D.fLO,null,null,null,null,null,null,null,null,null,null,null,null,A.V,!1,null,null,null,A.t,null)
D.fpf=new B.y("Video upload failed. Check your connection and try again.",null,null,null,null,null,null,null,null,null,null,null)
D.f5v=new B.b2(D.fpf,null,null,null,null,null,null,null,null,null,null,null,null,A.V,!1,null,null,null,A.t,null)
D.fHG=new B.y("This transferred document is view only. You can print or download it.",null,null,null,null,null,null,null,null,null,null,null)
D.f5E=new B.b2(D.fHG,null,null,null,null,null,null,null,null,null,null,null,null,A.V,!1,null,null,null,A.t,null)
D.fLn=new B.y("Done \u2014 the words are changed and the design is kept. Undo brings back the old version.",null,null,null,null,null,null,null,null,null,null,null)
D.f5T=new B.b2(D.fLn,null,null,null,null,null,null,null,null,null,null,null,null,A.V,!1,null,null,null,A.t,null)
D.fLe=new B.y("Book saved on this device.",null,null,null,null,null,null,null,null,null,null,null)
D.f5V=new B.b2(D.fLe,null,null,null,null,null,null,null,null,null,null,null,null,A.V,!1,null,null,null,A.t,null)
D.fp6=new B.y("Only the authorized registrar for this state can update this signature.",null,null,null,null,null,null,null,null,null,null,null)
D.f60=new B.b2(D.fp6,null,null,null,null,null,null,null,null,null,null,null,null,A.V,!1,null,null,null,A.t,null)
D.ft8=new B.y("You don't have a Bio link yet \u2014 create one in Bio first.",null,null,null,null,null,null,null,null,null,null,null)
D.f6s=new B.b2(D.ft8,null,null,null,null,null,null,null,null,null,null,null,null,A.V,!1,null,null,null,A.t,null)
D.fKr=new B.y("Nothing to transfer yet \u2014 fill names or details on this document first.",null,null,null,null,null,null,null,null,null,null,null)
D.f6E=new B.b2(D.fKr,null,null,null,null,null,null,null,null,null,null,null,null,A.V,!1,null,null,null,A.t,null)
D.fsX=new B.y("Only the authorized registrar for this state can sign this document.",null,null,null,null,null,null,null,null,null,null,null)
D.f6T=new B.b2(D.fsX,null,null,null,null,null,null,null,null,null,null,null,null,A.V,!1,null,null,null,A.t,null)
D.biH=new B.u(1,0.9764705882352941,0.8352941176470589,0.8274509803921568,A.q)
D.cTH=w([A.i7,A.oR,D.biH,D.adv,A.i7],x.O)
D.f7g=new B.fX(A.A,0,6.283185307179586,A.x,D.cTH,null,null)
D.d1F=w([A.bM,A.c_,A.hP,D.B7,A.bM],x.O)
D.aQv=new B.fX(A.A,0,6.283185307179586,A.x,D.d1F,null,null)
D.dfX=w([A.c8,A.by,A.bc,A.bm,A.bI,A.c8],x.O)
D.f7l=new B.fX(A.A,0,6.283185307179586,A.x,D.dfX,null,null)
D.cVR=w([A.pW,A.oT,A.xE,A.i7,A.pW],x.O)
D.f7m=new B.fX(A.A,0,6.283185307179586,A.x,D.cVR,null,null)
D.dfR=w([A.aP,A.bL,A.aM,A.al,A.aP],x.O)
D.f7n=new B.fX(A.A,0,6.283185307179586,A.x,D.dfR,null,null)
D.dnQ=w([A.bu,A.bc,A.by,A.c8,A.bu],x.O)
D.f7p=new B.fX(A.A,0,6.283185307179586,A.x,D.dnQ,null,null)
D.bem=new B.u(1,0,1,0,A.q)
D.bj_=new B.u(1,0,1,1,A.q)
D.bg5=new B.u(1,0,0,1,A.q)
D.bcd=new B.u(1,1,0,1,A.q)
D.djP=w([A.Ll,A.afw,D.bem,D.bj_,D.bg5,D.bcd,A.Ll],x.O)
D.f7q=new B.fX(A.A,0,6.283185307179586,A.x,D.djP,null,null)
D.f7F=new C.awa(2,"immersiveSticky")
D.f7G=new C.awa(3,"edgeToEdge")
D.f7H=new C.awa(4,"manual")
D.fa7=new B.F(!0,A.oM,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aR3=new B.F(!0,A.f3,null,null,null,null,12.5,A.O,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.faI=new B.F(!0,E.na,null,null,null,null,13,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fdn=new B.F(!0,A.c,null,null,null,null,22,A.u,null,0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fdx=new B.F(!0,A.bU,null,null,null,null,12.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fdS=new B.F(!0,A.eF,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ffj=new B.F(!0,A.bL,null,null,null,null,13.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fft=new B.F(!0,A.jK,null,null,null,null,11,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ffI=new B.rO(!0,A.II,null,null,null,null,A.dw,8,null,null,null,null,null,null,null,null,null,null,null,null)
D.fga=new B.F(!0,A.c,null,null,null,null,8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fgQ=new B.F(!0,A.js,null,null,null,null,11.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fhd=new B.F(!0,A.aB,null,null,null,null,12.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ejb=new B.iS(1,1,0.7568627450980392,0.027450980392156862)
D.fhh=new B.rO(!0,D.ejb,null,null,null,null,A.dw,7,null,null,null,null,null,null,null,null,null,null,null,null)
D.afD=new B.u(1,0.8392156862745098,0.7254901960784313,0.6039215686274509,A.q)
D.aRQ=new B.F(!0,D.afD,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fhp=new B.F(!0,D.agI,null,null,null,null,11.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fhq=new B.F(!0,A.c,null,null,null,null,20,A.u,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aRS=new B.F(!0,A.c,null,null,null,null,null,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fi2=new B.rO(!0,A.pk,null,null,null,null,A.dw,9,null,null,null,null,null,null,null,null,null,null,null,null)
D.fik=new B.F(!0,null,null,null,null,null,20,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fiS=new B.F(!0,A.c,null,null,null,null,16,A.H,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fiU=new B.F(!0,D.afD,null,null,null,null,14,null,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.JK=new B.F(!0,A.aB,null,null,null,null,12.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fjm=new B.F(!0,A.c_,null,null,null,null,11.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fjw=new B.F(!0,A.bL,null,null,null,null,14,A.a7,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fjA=new B.F(!0,A.bM,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fjR=new B.F(!0,A.c,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.axn,null,null,null)
D.fjU=new B.F(!0,A.cs,null,null,null,null,null,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fjW=new B.F(!0,A.c,null,null,null,null,30,A.u,null,5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fk8=new B.F(!0,A.c,null,null,null,null,6.5,A.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fkk=new B.F(!0,A.dt,null,null,null,null,13,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fkV=new B.F(!0,A.aQ,null,null,null,null,null,A.a7,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fl3=new B.F(!0,A.c,null,null,null,null,13.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fli=new B.F(!0,A.ae,null,null,null,null,15,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aSs=new B.F(!0,A.c,null,null,null,null,14.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aSu=new B.F(!0,A.bU,null,null,null,null,11.5,A.a7,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bow=new B.u(0.7019607843137254,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.q)
D.fn3=new B.F(!0,D.bow,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aSA=new B.F(!0,E.na,null,null,null,null,16,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fny=new B.F(!0,A.bL,null,null,null,null,11,A.a7,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fnB=new B.F(!0,O.lu,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fgp=new B.F(!0,A.w,null,null,null,null,8,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.foS=new B.y("NEW",null,D.fgp,null,null,null,null,null,null,null,null,null)
D.fp9=new B.y("Hati ya Kuhowesha",null,A.fr,null,null,null,null,null,null,null,null,null)
D.fpC=new B.y("Session ended",null,null,null,null,null,null,null,null,null,null,null)
D.fq0=new B.y("Scrollable PDF on this slide",null,A.df,null,null,null,null,null,null,null,null,null)
D.fqL=new B.y("Big quote mark",null,A.jj,null,null,null,null,null,null,null,null,null)
D.fqO=new B.y("Move down",null,null,null,null,null,null,null,null,null,null,null)
D.fqZ=new B.y("Duplicate",null,null,null,null,null,null,null,null,null,null,null)
D.frq=new B.y("Edit window ended",null,null,null,null,null,null,null,null,null,null,null)
D.frs=new B.y("How many slides?",null,A.fO,null,null,null,null,null,null,null,null,null)
D.fs_=new B.y("Transfer",null,A.ck,null,null,null,null,null,null,null,null,null)
D.fc6=new B.F(!0,A.c,null,null,null,null,12,A.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fsk=new B.y("Luxury FX",null,D.fc6,null,null,null,null,null,null,null,null,null)
D.fsF=new B.y("Font",null,A.t2,null,null,null,null,null,null,null,null,null)
D.fsR=new B.y("Anza hati mpya?",null,null,null,null,null,null,null,null,null,null,null)
D.fsY=new B.y("Ghairi",null,null,null,null,null,null,null,null,null,null,null)
D.fmC=new B.F(!0,A.bL,null,null,null,null,12,A.O,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ft5=new B.y("Example  GA847",null,D.fmC,null,null,null,null,null,null,null,null,null)
D.ftv=new B.y("Design shapes",null,A.jj,null,null,null,null,null,null,null,null,null)
D.ftG=new B.y("Your 4-hour window to edit this admin-shared document has ended. You can still view, print, or download it.",null,null,null,null,null,null,null,null,null,null,null)
D.ftK=new B.y("Non-stop (loop)",null,A.fO,null,null,null,null,null,null,null,null,null)
D.ftY=new B.y("Hati ya Kuhoweya",null,A.fr,null,null,null,null,null,null,null,null,null)
D.fug=new B.y("Photo studio",null,A.fY,null,null,null,null,null,null,null,null,null)
D.fuK=new B.y("Add your picture",null,A.k1,null,null,null,null,null,null,null,null,null)
D.ffJ=new B.F(!0,A.c,null,null,null,null,20,A.u,null,-0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fuL=new B.y("Enter document code",null,D.ffJ,null,A.L,null,null,null,null,null,null,null)
D.fuM=new B.y("Kiswahili",null,null,null,null,null,null,null,null,null,null,null)
D.fuR=new B.y("English",null,null,null,null,null,null,null,null,null,null,null)
D.fdd=new B.F(!0,E.na,null,null,null,null,19,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvb=new B.y("Delete this book?",null,D.fdd,null,A.L,null,null,null,null,null,null,null)
D.fhT=new B.F(!0,E.na,null,null,null,null,18,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fw8=new B.y("Your library",null,D.fhT,null,null,null,null,null,null,null,null,null)
D.fwe=new B.y("Delete",null,A.aRK,null,null,null,null,null,null,null,null,null)
D.fwh=new B.y("Add a picture and the AI writes a whole newspaper page about NGMY around it: the headline, the story and the caption. It knows the app, the Civic Registry, the Advisors and KB PABLO QR, the CEO. Pick old or modern designs, then tell the AI what to change.",null,At.DS,null,null,null,null,null,null,null,null,null)
D.fwt=new B.y("Element flies in",null,A.aRW,null,null,null,null,null,null,null,null,null)
D.UB=new B.y("Hati mpya (chagua muundo)",null,null,null,null,null,null,null,null,null,null,null)
D.fwR=new B.y("Fungua / hariri hati",null,null,null,null,null,null,null,null,null,null,null)
D.fxd=new B.y("Cancel",null,E.aS5,null,null,null,null,null,null,null,null,null)
D.fxf=new B.y("The lines and circles that come with the design",null,A.hj,null,null,null,null,null,null,null,null,null)
D.flq=new B.F(!0,A.hn,null,null,null,null,11,A.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxF=new B.y("DOCUMENT CODE",null,D.flq,null,null,null,null,null,null,null,null,null)
D.fyv=new B.y("Quotes",null,G.a9c,null,null,null,null,null,null,null,null,null)
D.ff5=new B.F(!0,O.lu,null,null,null,null,null,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyD=new B.y("Add a picture",null,D.ff5,null,null,null,null,null,null,null,null,null)
D.fyL=new B.y("Point at a NGMY Slides transfer QR, or tap search to enter the document code",null,A.a8T,null,A.L,null,null,null,null,null,null,null)
D.fyP=new B.y("Look & feel",null,A.fO,null,null,null,null,null,null,null,null,null)
D.fyV=new B.y("Rings",null,A.hx,null,null,null,null,null,null,null,null,null)
D.fz0=new B.y("W",null,A.t2,null,null,null,null,null,null,null,null,null)
D.fza=new B.y("Move up",null,null,null,null,null,null,null,null,null,null,null)
D.fzu=new B.y("It goes behind your words. Then the photo studio opens: looks, light, colour, effects and crop.",null,A.Up,null,A.L,null,null,null,null,null,null,null)
D.fzw=new B.y("Write your book",null,A.cB,null,null,null,null,null,null,null,null,null)
D.fAg=new B.y("Add page",null,A.ck,null,null,null,null,null,null,null,null,null)
D.fAw=new B.y("Malipo ya Awamu ya Mahari",null,A.fr,null,null,null,null,null,null,null,null,null)
D.ffy=new B.F(!0,A.c,null,null,null,null,24,A.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAL=new B.y("Create with AI",null,D.ffy,null,A.L,null,null,null,null,null,null,null)
D.fBe=new B.y("Apply look",null,A.hx,null,null,null,null,null,null,null,null,null)
D.fgf=new B.F(!0,A.eo,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fC1=new B.y("Type your presentation below",null,D.fgf,null,A.L,null,null,null,null,null,null,null)
D.fC4=new B.y("Tap the code to copy it. Share the code or the QR: the other phone types the code or scans the QR.",null,K.aSF,null,A.L,null,null,null,null,null,null,null)
D.fC6=new B.y("Keep it",null,A.ck,null,null,null,null,null,null,null,null,null)
D.fb0=new B.F(!0,A.co,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCd=new B.y("Done",null,D.fb0,null,null,null,null,null,null,null,null,null)
D.fCy=new B.y("Delete",null,A.nC,null,null,null,null,null,null,null,null,null)
D.fCI=new B.y("Hati ya Kiapo cha Uongozi",null,A.fr,null,null,null,null,null,null,null,null,null)
D.fep=new B.F(!0,A.aQ,null,null,null,null,13,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDC=new B.y("Write your idea in any language \u2014 the AI makes the slides.",null,D.fep,null,A.L,null,null,null,null,null,null,null)
D.fE_=new B.y("Anza upya (hati mpya)",null,null,null,null,null,null,null,null,null,null,null)
D.fE5=new B.y("Layout",null,A.Uu,null,null,null,null,null,null,null,null,null)
D.fEJ=new B.y("Print",null,A.cB,null,null,null,null,null,null,null,null,null)
D.fER=new B.y("X",null,A.t2,null,null,null,null,null,null,null,null,null)
D.fFr=new B.y("Your logo goes on every slide and your pictures replace stock photos. The ring button also has the ending celebrations.",null,X.DR,null,null,null,null,null,null,null,null,null)
D.fG0=new B.y("Use the whole picture",null,null,null,null,null,null,null,null,null,null,null)
D.fGe=new B.y("Hati ya Kuhowa",null,A.fr,null,null,null,null,null,null,null,null,null)
D.fGg=new B.y("Choose a class template",null,A.fr,null,null,null,null,null,null,null,null,null)
D.fGi=new B.y("Drag the picture to move it. Pinch or use the slider to zoom.",null,A.hj,null,null,null,null,null,null,null,null,null)
D.fGp=new B.y("Download the newspaper picture",null,A.cB,null,null,null,null,null,null,null,null,null)
D.fGC=new B.y("Print view",null,null,null,null,null,null,null,null,null,null,null)
D.fGJ=new B.y("Done",null,A.aSr,null,null,null,null,null,null,null,null,null)
D.fGT=new B.y("Ending celebration",null,A.de,null,null,null,null,null,null,null,null,null)
D.fGU=new B.y("Delete element",null,null,null,null,null,null,null,null,null,null,null)
D.fH8=new B.y("Plays after your last slide. Tap one to watch it and change its words or logo.",null,X.v8,null,null,null,null,null,null,null,null,null)
D.fI5=new B.y("Export presentation",null,A.df,null,null,null,null,null,null,null,null,null)
D.fI6=new B.y("What would you like to do?",null,D.aRQ,null,null,null,null,null,null,null,null,null)
D.fIb=new B.y("Delete",null,A.cB,null,null,null,null,null,null,null,null,null)
D.fII=new B.y("Your 4-hour marriage document session has ended. Pay again to keep editing.",null,null,null,null,null,null,null,null,null,null,null)
D.fIM=new B.y("Hati (Documents)",null,A.fr,null,null,null,null,null,null,null,null,null)
D.fIZ=new B.y("Done",null,A.ll,null,null,null,null,null,null,null,null,null)
D.fms=new B.F(!0,A.c,null,null,null,null,18,A.H,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJ3=new B.y("Delete presentation?",null,D.fms,null,A.L,null,null,null,null,null,null,null)
D.fJn=new B.y("After the last slide it starts again from the first",null,A.hj,null,null,null,null,null,null,null,null,null)
D.fJz=new B.y("\ud83c\udf33",null,A.JE,null,A.L,null,null,null,null,null,null,null)
D.fJR=new B.y("Plays big after your last slide. Tap one to watch it, change the words or add your logo.",null,A.hj,null,null,null,null,null,null,null,null,null)
D.fJY=new B.y("Transfer document",null,A.oy,null,null,null,null,null,null,null,null,null)
D.fK8=new B.y("Add to the slides",null,A.fO,null,null,null,null,null,null,null,null,null)
D.fKv=new B.y("Endelea",null,null,null,null,null,null,null,null,null,null,null)
D.fKK=new B.y("Make a book",null,I.aRo,null,null,null,null,null,null,null,null,null)
D.fKO=new B.y("Books",null,A.cB,null,null,null,null,null,null,null,null,null)
D.feZ=new B.F(!0,A.al,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKP=new B.y("Keep this page open until it finishes.",null,D.feZ,null,null,null,null,null,null,null,null,null)
D.fKR=new B.y("Making your video",null,A.de,null,null,null,null,null,null,null,null,null)
D.fKW=new B.y("LANGUAGE",null,W.t3,null,null,null,null,null,null,null,null,null)
D.fL2=new B.y("Use this ending",null,A.cB,null,null,null,null,null,null,null,null,null)
D.fLa=new B.y("Scan presentation QR",null,null,null,null,null,null,null,null,null,null,null)
D.fLc=new B.y("Upload a different logo",null,A.ck,null,null,null,null,null,null,null,null,null)
D.fLt=new B.y("Delete from the database?",null,A.k1,null,null,null,null,null,null,null,null,null)
D.fLu=new B.y("H",null,A.t2,null,null,null,null,null,null,null,null,null)
D.fLU=new B.y("NGMY Quotes",null,A.de,null,null,null,null,null,null,null,null,null)
D.fMm=new B.y("Cover",null,D.aSA,null,null,null,null,null,null,null,null,null)
D.fMq=new B.y("Hati iliyopo ya jimbo hili itabadilishwa.",null,null,null,null,null,null,null,null,null,null,null)
D.fMr=new B.y("Each page becomes its own slide you can present",null,A.hj,null,null,null,null,null,null,null,null,null)
D.fMN=new B.y("Y",null,A.t2,null,null,null,null,null,null,null,null,null)
D.fMZ=new B.y("Crop the picture",null,A.ll,null,null,null,null,null,null,null,null,null)
D.fN5=new B.y("Edit text",null,A.JF,null,null,null,null,null,null,null,null,null)
D.fPn=B.dU("a8B")
D.E2=new C.axv(0,"none")
D.aW7=new C.axv(1,"zipCrypto")
D.aW8=new C.axv(2,"aes")
D.h9z=new F.PE("","",null)
D.haF=new C.bcM(null)
D.hbP=new C.ZQ(null)
D.hey=new C.adt(null)
D.heA=new C.aEH(null)
D.hhl=new C.a04(null)
D.hhB=new C.a0B(null)
D.hhW=new C.bug(null)})();(function staticFields(){$.hhq=null
$.hhr=null
$.hhs=null
$.hht=null
$.h_9=B.vc("_lastQuoRemDigits")
$.h_a=B.vc("_lastQuoRemUsed")
$.axR=B.vc("_lastRemUsed")
$.h_b=B.vc("_lastRem_nsh")
$.qh=B.a([4294967295,2147483647,1073741823,536870911,268435455,134217727,67108863,33554431,16777215,8388607,4194303,2097151,1048575,524287,262143,131071,65535,32767,16383,8191,4095,2047,1023,511,255,127,63,31,15,7,3,1,0],x.t)
$.a7o=B.T(x.N,x.I)
$.fXA=!1
$.hmh=B.T(B.aw("kX"),x.N)
$.hmu=B.T(B.aw("kX"),x.E)
$.hkt=!1
$.bzO="q"
$.QF=0
$.CT=B.T(x.N,B.aw("ai<zL>"))
$.hkQ=!1
$.h0M=!1
$.hra=null
$.hVG=B.T(x.N,B.aw("aA<n?>"))
$.KD=""
$.j3=0
$.hed=function(){var w=x.N
return B.T(w,w)}()
$.hec=B.T(x.N,x.R)
$.h16=!1
$.agc=B.T(x.N,x.E)
$.h1V=0
$.bkK=!1})();(function lazyInitializers(){var w=a.lazyFinal
w($,"ikc","Dc",()=>C.bag(0))
w($,"ika","a2P",()=>C.bag(1))
w($,"ikb","huU",()=>C.bag(2))
w($,"ik9","h5Q",()=>$.a2P().vc(0))
w($,"ik7","huS",()=>C.bag(1e4))
w($,"ik8","huT",()=>B.Eo(8))
w($,"ifY","hsU",()=>B.Eo(0))
w($,"ig5","hsY",()=>B.Eo(0))
w($,"ig4","hsX",()=>B.c_x(0))
w($,"inW","hwV",()=>{var v,u,t=x.N
t=B.T(t,t)
for(v=D.a4R.gdT(D.a4R),v=v.gaf(v);v.C();){u=v.gR(v)
t.n(0,u.b,u.a)}return t})
w($,"iom","bEi",()=>{var v="Corporate",u=4280171146,t=4294967295,s=4280640491,r=4279080072,q="Modern",p="Bold",o=4278190080,n=4280472558,m=4279179050,l=4284773515,k=4287874557,j=4293548044,i=4279548070,h=x.O
return B.a([C.mZ(new C.fHY(),v,"biz_plan_blue","Business Plan",B.a([B.b1(u),B.b1(t)],h)),C.mZ(new C.fHZ(),v,"exec_summary","Executive",B.a([B.b1(s),B.b1(t)],h)),C.mZ(new C.fI_(),v,"teal_corporate","Teal Corp",B.a([B.b1(r),B.b1(4279310375)],h)),C.mZ(new C.fIa(),q,"geometric_overlap","Geometric",B.a([B.b1(4279203438),B.b1(u)],h)),C.mZ(new C.fIf(),p,"midnight_cyan","Midnight Cyan",B.a([B.b1(o),B.b1(n)],h)),C.mZ(new C.fIg(),q,"diagonal_hero","Diagonal Hero",B.a([B.b1(m),B.b1(l)],h)),C.mZ(new C.fIh(),v,"swot_grid","SWOT Grid",B.a([B.b1(u),B.b1(4278556265)],h)),C.mZ(new C.fIi(),v,"layered_chevrons","Chevrons",B.a([B.b1(4280172719),B.b1(k)],h)),C.mZ(new C.fIj(),q,"split_triangle","Split Panel",B.a([B.b1(s),B.b1(t)],h)),C.mZ(new C.fIk(),v,"corporate_navy","Navy Pro",B.a([B.b1(4278982953),B.b1(4282090230)],h)),C.mZ(new C.fIl(),p,"cyan_slash","Cyan Slash",B.a([B.b1(o),B.b1(4278630100)],h)),C.mZ(new C.fI0(),p,"crimson_impact","Crimson",B.a([B.b1(4282714634),B.b1(4292617766)],h)),C.mZ(new C.fI1(),q,"ocean_waves","Ocean Waves",B.a([B.b1(4278413729),B.b1(4286436348)],h)),C.mZ(new C.fI2(),p,"mono_geometric","Mono Geo",B.a([B.b1(o),B.b1(n)],h)),C.mZ(new C.fI3(),"Luxury","luxury_gold","Gold Luxe",B.a([B.b1(4280031511),B.b1(4293571336)],h)),C.mZ(new C.fI4(),q,"hex_infographic","Hex Stack",B.a([B.b1(r),B.b1(4284410580)],h)),C.mZ(new C.fI5(),q,"photo_banner","Photo Banner",B.a([B.b1(m),B.b1(4281908728)],h)),C.mZ(new C.fI6(),v,"process_steps","Process",B.a([B.b1(s),B.b1(k)],h)),C.mZ(new C.fI7(),"Minimal","grid_modern","Grid Modern",B.a([B.b1(l),B.b1(t)],h)),C.mZ(new C.fI8(),"Luxury","platinum_frame","Platinum",B.a([B.b1(4282865001),B.b1(4293060848)],h)),C.mZ(new C.fI9(),v,"agenda_cards","Agenda Cards",B.a([B.b1(u),B.b1(4292602622)],h)),C.mZ(new C.fIb(),q,"headline_orange","Headline Orange",B.a([B.b1(j),B.b1(i)],h)),C.mZ(new C.fIc(),q,"infographic_teal","Infographic",B.a([B.b1(r),B.b1(j)],h)),C.mZ(new C.fId(),q,"content_year","Year Feature",B.a([B.b1(j),B.b1(t)],h)),C.mZ(new C.fIe(),q,"photo_cta","Photo CTA",B.a([B.b1(m),B.b1(i)],h))],B.aw("O<ER>"))})
w($,"inZ","hwX",()=>B.af("^[A-Z]{2}\\d{3}$",!0,!1,!1,!1))})()};
(a=>{a["8/MqAOxDhmxvNc/aVHarCI6gaoI="]=a.current})($__dart_deferred_initializers__);