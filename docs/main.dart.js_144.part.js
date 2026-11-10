((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,Ai,A6,Aj,Ak,U,A7,Al,Am,C={
u_(d,e){for(;;){if(!(d>0&&e[d-1]===0))break;--d}return d},
h0u(d,e,f,g){var w,v=new Uint16Array(g),u=f-e
for(w=0;w<u;++w)v[w]=d[e+w]
return v},
K1(d){var w
if(d===0)return $.Dd()
if(d===1)return $.a2W()
if(d===2)return $.hwf()
if(Math.abs(d)<4294967296)return C.bay(A.o.N(d))
w=C.hR4(d)
return w},
bay(d){var w,v,u,t,s=d<0
if(s){if(d===-9223372036854776e3){w=new Uint16Array(4)
w[3]=32768
v=C.u_(4,w)
return new C.o2(v!==0,w,v)}d=-d}if(d<65536){w=new Uint16Array(1)
w[0]=d
v=C.u_(1,w)
return new C.o2(v===0?!1:s,w,v)}if(d<=4294967295){w=new Uint16Array(2)
w[0]=d&65535
w[1]=A.o.aD(d,16)
v=C.u_(2,w)
return new C.o2(v===0?!1:s,w,v)}v=A.o.ao(A.o.gakE(d)-1,16)+1
w=new Uint16Array(v)
for(u=0;d!==0;u=t){t=u+1
w[u]=d&65535
d=A.o.ao(d,65536)}v=C.u_(v,w)
return new C.o2(v===0?!1:s,w,v)},
hR4(d){var w,v,u,t,s,r,q,p
if(isNaN(d)||d==1/0||d==-1/0)throw B.W(B.dJ("Value must be finite: "+d,null))
d=Math.floor(d)
if(d===0)return $.Dd()
w=$.hwe()
for(v=w.$flags|0,u=0;u<8;++u){v&2&&B.aj(w)
w[u]=0}v=J.lf(A.aG.gaR(w))
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
q=new C.o2(!1,r,4)
if(s<0)p=q.mt(0,-s)
else p=s>0?q.dU(0,s):q
return p},
h0v(d,e,f,g){var w,v,u
if(e===0)return 0
if(f===0&&g===d)return e
for(w=e-1,v=g.$flags|0;w>=0;--w){u=d[w]
v&2&&B.aj(g)
g[w+f]=u}for(w=f-1;w>=0;--w){v&2&&B.aj(g)
g[w]=0}return e+f},
hiM(d,e,f,g){var w,v,u,t,s,r=A.o.ao(f,16),q=A.o.F(f,16),p=16-q,o=A.o.dU(1,p)-1
for(w=e-1,v=g.$flags|0,u=0;w>=0;--w){t=d[w]
s=A.o.fK(t,p)
v&2&&B.aj(g)
g[w+r+1]=(s|u)>>>0
u=A.o.dU(t&o,q)}v&2&&B.aj(g)
g[r]=u},
hiH(d,e,f,g){var w,v,u,t,s=A.o.ao(f,16)
if(A.o.F(f,16)===0)return C.h0v(d,e,s,g)
w=e+s+1
C.hiM(d,e,f,g)
for(v=g.$flags|0,u=s;--u,u>=0;){v&2&&B.aj(g)
g[u]=0}t=w-1
return g[t]===0?t:w},
hR7(d,e,f,g){var w,v,u,t,s=A.o.ao(f,16),r=A.o.F(f,16),q=16-r,p=A.o.dU(1,r)-1,o=A.o.fK(d[s],r),n=e-s-1
for(w=g.$flags|0,v=0;v<n;++v){u=d[v+s+1]
t=A.o.dU(u&p,q)
w&2&&B.aj(g)
g[v]=(t|o)>>>0
o=A.o.fK(u,r)}w&2&&B.aj(g)
g[n]=o},
cJh(d,e,f,g){var w,v=e-g
if(v===0)for(w=e-1;w>=0;--w){v=d[w]-f[w]
if(v!==0)return v}return v},
hR5(d,e,f,g,h){var w,v,u
for(w=h.$flags|0,v=0,u=0;u<g;++u){v+=d[u]+f[u]
w&2&&B.aj(h)
h[u]=v&65535
v=v>>>16}for(u=g;u<e;++u){v+=d[u]
w&2&&B.aj(h)
h[u]=v&65535
v=v>>>16}w&2&&B.aj(h)
h[e]=v},
baz(d,e,f,g,h){var w,v,u
for(w=h.$flags|0,v=0,u=0;u<g;++u){v+=d[u]-f[u]
w&2&&B.aj(h)
h[u]=v&65535
v=0-(A.o.aD(v,16)&1)}for(u=g;u<e;++u){v+=d[u]
w&2&&B.aj(h)
h[u]=v&65535
v=0-(A.o.aD(v,16)&1)}},
hiN(d,e,f,g,h,i){var w,v,u,t,s,r
if(d===0)return
for(w=g.$flags|0,v=0;--i,i>=0;h=s,f=u){u=f+1
t=d*e[f]+g[h]+v
s=h+1
w&2&&B.aj(g)
g[h]=t&65535
v=A.o.ao(t,65536)}for(;v!==0;h=s){r=g[h]+v
s=h+1
w&2&&B.aj(g)
g[h]=r&65535
v=A.o.ao(r,65536)}},
hR6(d,e,f){var w,v=e[f]
if(v===d)return 65535
w=A.o.e9((v<<16|e[f-1])>>>0,d)
if(w>65535)return 65535
return w},
o2:function o2(d,e,f){this.a=d
this.b=e
this.c=f},
cJi:function cJi(){},
cJj:function cJj(){},
cJk:function cJk(d,e){this.a=d
this.b=e},
cJl:function cJl(d){this.a=d},
aRT:function aRT(d,e){this.a=d
this.b=e},
h8z(d,e,f){var w=new C.S8(d,A.o.ao(Date.now(),1000),e)
w.Q=f
return w},
S8:function S8(d,e,f){var _=this
_.a=d
_.b=420
_.e=e
_.as=_.Q=null
_.at=f},
a44:function a44(d,e){this.a=d
this.b=e},
bIi:function bIi(d){this.a=d
this.c=this.b=0},
hzt(){return new C.bGD()},
bGD:function bGD(){var _=this
_.ax=_.at=_.as=_.Q=_.z=_.y=_.x=_.w=_.r=_.f=_.e=_.d=_.c=_.b=_.a=$
_.ay=0
_.ch=-1
_.cx=_.CW=0
_.fr=_.dy=_.dx=_.db=_.cy=$
_.fx=0},
cBr:function cBr(d){var _=this
_.a=-1
_.r=_.f=0
_.x=d},
hQN(d,e,f){var w,v,u,t,s
if(d.gan(d))return new Uint8Array(0)
w=new Uint8Array(B.ci(d.gcYX(d)))
v=f*2+2
u=C.hgq(C.hgs(),64)
t=new C.ckH(u)
u=u.b
u===$&&B.c()
t.c=new Uint8Array(u)
t.a=new C.ckI(e,1000,v)
s=new Uint8Array(v)
return A.aG.ds(s,0,t.cMg(w,0,s,0))},
cBp:function cBp(d,e){this.c=d
this.d=e},
axF:function axF(d,e){this.a=d
this.b=e},
cBs:function cBs(d,e,f,g){var _=this
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
b9h:function b9h(){var _=this
_.as=_.Q=_.y=_.x=_.w=_.a=0
_.at=""
_.ch=_.ax=null},
cBq:function cBq(){this.a=$},
hic(d,e){var w,v,u=d.length
if(u!==e.length)return!1
for(w=0,v=0;v<u;++v)w|=d[v]^e[v]
return w===0},
hzc(d,e){var w
d.$flags&2&&B.aj(d)
d[0]=e&255
d[1]=e>>>8&255
d[2]=e>>>16&255
d[3]=e>>>24&255
for(w=4;w<=15;++w)d[w]=0},
bFd:function bFd(d,e,f){var _=this
_.a=1
_.b=d
_.c=e
_.d=f
_.r=null
_.x=_.w=$},
h6d(d,e){e&=31
return(d&$.qh[e])<<e>>>0},
nw(d,e){e&=31
return(d>>>e|C.h6d(d,32-e))>>>0},
hgr(d){var w,v=new C.atg()
if(B.iK(d))v.aKT(d,null)
else{x.dw.a(d)
w=d.a
w===$&&B.c()
v.a=w
w=d.b
w===$&&B.c()
v.b=w}return v},
hgs(){var w=C.hgr(0),v=new Uint8Array(4),u=x.S
u=new C.ckJ(w,v,A.EC,5,B.c2(5,0,!1,u),B.c2(80,0,!1,u))
u.kF(0)
return u},
hgq(d,e){var w=new C.ckF(d,e)
w.b=20
w.d=new Uint8Array(e)
w.e=new Uint8Array(e+20)
return w},
ckE:function ckE(){},
ckI:function ckI(d,e,f){this.a=d
this.b=e
this.c=f},
ckC:function ckC(){},
atf:function atf(d){this.a=d},
ckH:function ckH(d){this.a=$
this.b=d
this.c=$},
ckD:function ckD(){},
ckB:function ckB(){},
atg:function atg(){this.b=this.a=$},
ckG:function ckG(){},
ckJ:function ckJ(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=$
_.d=f
_.e=g
_.f=h
_.r=i
_.w=$},
ckF:function ckF(d,e){var _=this
_.a=d
_.b=$
_.c=e
_.e=_.d=$},
ckA:function ckA(){},
ckz:function ckz(d){var _=this
_.a=0
_.b=$
_.c=!1
_.d=d},
bQi:function bQi(){},
bQj:function bQj(d){this.a=d},
hU3(d){if(d<0.36363636363636365)return 7.5625*d*d
else if(d<0.7272727272727273){d-=0.5454545454545454
return 7.5625*d*d+0.75}else if(d<0.9090909090909091){d-=0.8181818181818182
return 7.5625*d*d+0.9375}d-=0.9545454545454546
return 7.5625*d*d+0.984375},
baO:function baO(){},
cuZ:function cuZ(){},
bRl:function bRl(d,e){this.a=d
this.b=!1
this.c=e},
bRm:function bRm(){},
i28(d){var w,v,u=B.a([],x.s)
for(w=d.length,v=0;v<w;++v)u.push(d[v].u(0))
return u},
awh(d){var w=0,v=B.j(x.H),u
var $async$awh=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:u=x.H
w=d!==D.fbi?2:4
break
case 2:w=5
return B.b(A.ko.h0("SystemChrome.setEnabledSystemUIMode",d.a5(),u),$async$awh)
case 5:w=3
break
case 4:null.toString
w=6
return B.b(A.ko.h0("SystemChrome.setEnabledSystemUIOverlays",C.i28(null),u),$async$awh)
case 6:case 3:return B.h(null,v)}})
return B.i($async$awh,v)},
awk:function awk(d,e){this.a=d
this.b=e},
a8G:function a8G(d){this.a=d},
i4R(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p=new C.fww(15,d,f,e,g,h),o=i*i,n=A.k.V(i/1.4142135623730951)
for(w=0;w<=n;++w){v=Math.sqrt(o-w*w)
u=v-Math.floor(v)
t=u*(w===n?0.25:1)
s=A.k.bh(v)
r=1-u
p.$5(j,k,w,s,r)
q=s+1
p.$5(j,k,w,q,t)
p.$5(j,k,s,w,r)
p.$5(j,k,q,w,t)}return d},
fww:function fww(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ao_(){var w=0,v=B.j(x.gw),u,t,s,r,q
var $async$ao_=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(S.ahb("ngmy_menu_lib_v1_zzslides_index",A.bK),$async$ao_)
case 3:q=e
if(!q.a){u=null
w=1
break}t=q.b
s=t==null?null:J.r(t,"items")
if(x.j.b(s)){t=J.dc(s,x.f)
t=B.cF(t,new C.c1b(),t.$ti.k("K.E"),x.P)
r=B.C(t,B.a6(t).k("K.E"))}else r=B.a([],x.d)
A.d.aW(r,new C.c1c())
u=r
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ao_,v)},
ao1(d){var w=0,v=B.j(x.S),u,t,s,r,q,p,o,n,m,l,k,j
var $async$ao1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.ao_(),$async$ao1)
case 3:j=f
if(j==null){u=0
w=1
break}t=x.N
s=B.T(t,x.P)
for(r=J.aV(j);r.C();){q=r.gR(r)
p=J.r(q,"id")
s.n(0,J.k(p==null?"":p),q)}r=d.length,q=x.z,o=0,n=0
case 4:if(!(n<d.length)){w=6
break}m=d[n]
l=new B.V(Date.now(),0,!1).a7().ae()
p=m.a
k=B.af("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(B.nv("ngmy_menu_lib_v1_zzslide_"+B.aL(p,k,""),B.G(["deck",m.ag(),"savedAt",l],t,q),null),$async$ao1)
case 7:if(!f){w=5
break}s.n(0,p,B.G(["id",p,"name",m.b,"slides",m.r.length,"savedAt",l],t,q));++o
case 5:d.length===r||(0,B.M)(d),++n
w=4
break
case 6:w=o>0?8:9
break
case 8:r=s.$ti.k("bc<2>")
s=B.C(new B.bc(s,r),r.k("K.E"))
w=10
return B.b(B.nv("ngmy_menu_lib_v1_zzslides_index",B.G(["items",s,"savedAt",new B.V(Date.now(),0,!1).a7().ae()],t,q),null),$async$ao1)
case 10:if(!f){u=0
w=1
break}case 9:u=o
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ao1,v)},
c1d(d){return C.hF2(d)},
hF2(d){var w=0,v=B.j(x.af),u,t=2,s=[],r,q,p,o,n,m
var $async$c1d=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
o=B.af("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(S.ahb("ngmy_menu_lib_v1_zzslide_"+B.aL(d,o,""),A.hX),$async$c1d)
case 7:r=f
o=r.b
q=o==null?null:J.r(o,"deck")
if(!x.f.b(q)){u=null
w=1
break}o=C.Wg(B.a2(q,x.N,x.z))
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
return B.i($async$c1d,v)},
ao0(d){var w=0,v=B.j(x.y),u,t,s,r
var $async$ao0=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.ao_(),$async$ao0)
case 3:r=f
if(r==null){u=!1
w=1
break}J.nz(r,new C.c1e(d))
w=4
return B.b(B.nv("ngmy_menu_lib_v1_zzslides_index",B.G(["items",r,"savedAt",new B.V(Date.now(),0,!1).a7().ae()],x.N,x.z),null),$async$ao0)
case 4:t=f
w=t?5:6
break
case 5:s=B.af("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(S.aPT("ngmy_menu_lib_v1_zzslide_"+B.aL(d,s,"")),$async$ao0)
case 7:case 6:u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ao0,v)},
c1b:function c1b(){},
c1c:function c1c(){},
c1e:function c1e(d){this.a=d},
ieW(d,e,f){return B.bU(A.K,null,new C.fMX(e,f,null),d,!0,!0,!0,null,!1,!1,x.H)},
fMX:function fMX(d,e,f){this.a=d
this.b=e
this.c=f},
a1c:function a1c(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aJH:function aJH(d){var _=this
_.d=d
_.e=null
_.f=!0
_.r=!1
_.w=0
_.x=null
_.y=!1
_.c=_.a=null},
f8U:function f8U(d,e){this.a=d
this.b=e},
f8Y:function f8Y(d){this.a=d},
f8Z:function f8Z(d){this.a=d},
f9_:function f9_(d,e,f){this.a=d
this.b=e
this.c=f},
f8V:function f8V(d){this.a=d},
f8W:function f8W(d){this.a=d},
f8X:function f8X(d,e){this.a=d
this.b=e},
f8P:function f8P(d){this.a=d},
f8N:function f8N(d){this.a=d},
f8O:function f8O(d){this.a=d},
f8Q:function f8Q(d){this.a=d},
f8R:function f8R(d){this.a=d},
f93:function f93(d,e){this.a=d
this.b=e},
f92:function f92(d,e){this.a=d
this.b=e},
f8T:function f8T(d,e,f){this.a=d
this.b=e
this.c=f},
f8S:function f8S(d,e,f){this.a=d
this.b=e
this.c=f},
f90:function f90(d,e){this.a=d
this.b=e},
f91:function f91(d,e){this.a=d
this.b=e},
f96:function f96(d){this.a=d},
f97:function f97(d,e){this.a=d
this.b=e},
f95:function f95(d,e){this.a=d
this.b=e},
f94:function f94(){},
hlc(d){var w,v,u,t
if(d==null||d.length===0)return B.a([],x.k)
try{w=A.X.aN(0,d,null)
if(!x.j.b(w)){v=B.a([],x.k)
return v}v=J.dc(w,x.f)
v=B.cF(v,new C.fgk(),v.$ti.k("K.E"),x.ea)
u=B.a6(v).k("Z<K.E>")
v=B.C(new B.Z(v,new C.fgl(),u),u.k("K.E"))
return v}catch(t){v=B.a([],x.k)
return v}},
a29(d){return C.i66(d)},
i66(d){var w=0,v=B.j(x.gL),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$a29=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:n=B.T(x.N,x.ea)
m=new C.fzn(n)
t=4
j=m
i=C
w=7
return B.b(B.a2J("ngmy_books_v1_"+A.a.i(d.toLowerCase())),$async$a29)
case 7:j.$1(i.hlc(f))
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
return B.b(B.az(),$async$a29)
case 12:r=f
p=A.a.i(d.toLowerCase())
m.$1(C.hlc(B.aU(J.r(r.a,"ngmy_books_v1_"+p))))
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
o=p.k("Z<K.E>")
j=B
i=B
h=new B.bc(n,p)
g=C
w=13
return B.b(C.fgt(d),$async$a29)
case 13:p=j.C(new i.Z(h,new g.fzl(f),o),o.k("K.E"))
A.d.aW(p,new C.fzm())
u=p
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a29,v)},
ahM(d,e){return C.ieB(d,e)},
ieB(d,e){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l
var $async$ahM=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:n=J.b6(e,new C.fMr(),x.P)
n=B.C(n,n.$ti.k("ak.E"))
r=A.X.ap(n,null)
q=!1
t=4
w=7
return B.b(B.ahE("ngmy_books_v1_"+A.a.i(d.toLowerCase()),r),$async$ahM)
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
return B.b(B.az(),$async$ahM)
case 12:p=g
w=13
return B.b(p.ar("String","ngmy_books_v1_"+A.a.i(d.toLowerCase()),r),$async$ahM)
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
return B.i($async$ahM,v)},
fgt(d){return C.hVq(d)},
hVq(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o
var $async$fgt=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.az(),$async$fgt)
case 7:r=f
q=r.tw("ngmy_books_deleted_v1_"+A.a.i(d.toLowerCase()))
if(q==null)q=A.Z
q=B.k2(q,B.U(q).c)
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
return B.i($async$fgt,v)},
agB(d,e){return C.i4K(d,e)},
i4K(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m
var $async$agB=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$agB)
case 6:s=g
r=B.aY(x.N)
q=s.tw("ngmy_books_deleted_v1_"+A.a.i(d.toLowerCase()))
if(q!=null)J.h6(r,q)
J.cb(r,e)
p=r
r=A.a.i(d.toLowerCase())
q=p
q=B.C(q,B.a6(q).k("cr.E"))
w=7
return B.b(s.ar("StringList","ngmy_books_deleted_v1_"+r,q),$async$agB)
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
return B.b(C.a29(d),$async$agB)
case 8:n=g
J.nz(n,new C.fwa(e))
w=9
return B.b(C.ahM(d,n),$async$agB)
case 9:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$agB,v)},
if0(d,e){return B.a4(d,!1).cg(B.e_(new C.fNi(e),!0,null,x.H))},
hR9(d){var w=d.b
return A.a.i(w.a)==="My Book"&&A.d.d5(w.d,new C.cKF())},
os:function os(d,e,f){this.a=d
this.b=e
this.c=f},
fgk:function fgk(){},
fgl:function fgl(){},
fzn:function fzn(d){this.a=d},
fzl:function fzl(d){this.a=d},
fzm:function fzm(){},
fMr:function fMr(){},
fwa:function fwa(d){this.a=d},
fNi:function fNi(d){this.a=d},
YU:function YU(d,e){this.c=d
this.a=e},
ayc:function ayc(d,e){var _=this
_.d=d
_.e=!0
_.f=e
_.c=_.a=null},
cKF:function cKF(){},
cKH:function cKH(d,e){this.a=d
this.b=e},
cKK:function cKK(d){this.a=d},
cKL:function cKL(d){this.a=d},
cKJ:function cKJ(){},
cKM:function cKM(d,e){this.a=d
this.b=e},
cKI:function cKI(d){this.a=d},
cKN:function cKN(){},
cKG:function cKG(d,e){this.a=d
this.b=e},
cKO:function cKO(){},
cKB:function cKB(d){this.a=d},
cKz:function cKz(d){this.a=d},
cKA:function cKA(d){this.a=d},
cKC:function cKC(d,e){this.a=d
this.b=e},
cKy:function cKy(d){this.a=d},
cKx:function cKx(d){this.a=d},
cKv:function cKv(d,e){this.a=d
this.b=e},
cKw:function cKw(d){this.a=d},
cKE:function cKE(){},
cKD:function cKD(d){this.a=d},
cKu:function cKu(d,e){this.a=d
this.b=e},
cKt:function cKt(d,e){this.a=d
this.b=e},
cKs:function cKs(d,e){this.a=d
this.b=e},
cKP:function cKP(d){this.a=d},
YS:function YS(d,e,f){this.c=d
this.d=e
this.a=f},
aFw:function aFw(d,e,f){this.a=d
this.b=e
this.c=f},
ay8:function ay8(d){var _=this
_.r=_.f=_.e=_.d=$
_.w=d
_.x=null
_.y=!1
_.c=_.a=null},
cJW:function cJW(d){this.a=d},
cJV:function cJV(d){this.a=d},
cJY:function cJY(d,e,f){this.a=d
this.b=e
this.c=f},
cK5:function cK5(){},
cK6:function cK6(d){this.a=d},
cJZ:function cJZ(d,e,f){this.a=d
this.b=e
this.c=f},
cJX:function cJX(d,e){this.a=d
this.b=e},
cK0:function cK0(d,e){this.a=d
this.b=e},
cK1:function cK1(d,e){this.a=d
this.b=e},
cK2:function cK2(d,e){this.a=d
this.b=e},
cK_:function cK_(d){this.a=d},
cK4:function cK4(d){this.a=d},
cK3:function cK3(d,e){this.a=d
this.b=e},
cKb:function cKb(d){this.a=d},
cK7:function cK7(d,e){this.a=d
this.b=e},
cK8:function cK8(d,e){this.a=d
this.b=e},
cK9:function cK9(d,e){this.a=d
this.b=e},
cKa:function cKa(d,e){this.a=d
this.b=e},
aya:function aya(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
i8t(){var w,v,u,t,s=!1
try{u=document
if(u.fullscreenElement==null){w=u.documentElement
if(w!=null){v=w.requestFullscreen()
if(s&&v!=null)B.eh(v,x.cK).bM(new C.fDT(),x.H).eX(new C.fDU())}}else if(s)C.hmI()}catch(t){}},
hmI(){var w,v,u
try{w=window.screen.orientation
if(w==null)return
v=w.lock("landscape")
if(v!=null)B.eh(v,x.cK).eX(new C.fkA())}catch(u){}},
i8w(){var w,v,u
try{w=window.screen.orientation
if(w!=null)w.unlock()}catch(v){}try{u=document
if(u.fullscreenElement!=null)u.webkitExitFullscreen()}catch(v){}},
fDT:function fDT(){},
fDU:function fDU(){},
fkA:function fkA(){},
hrn(d){var w="marriage_field_",v=d.db
if(!A.a.a0(v,w))return null
return A.d.gI(A.a.el(v,w,"").split(":"))},
hrk(d){var w=d.db
if(!A.a.a0(w,"marriage_sign_"))return null
if(A.a.a0(w,"marriage_sign_placed_"))return null
if(d.b===D.lf)return null
return A.a.b7(w,14)},
h4W(d){var w
if(d.b!==D.lf)return null
w=d.db
if(!A.a.a0(w,"marriage_sign_placed_"))return null
return A.a.b7(w,21)},
i8W(d){if(d==="hati_kuhowa")return"hati_kuhoweya"
if(d==="hati_kuhoweya")return"hati_kuhowa"
return""},
hro(d){if(d==="hati_kuhowa")return"Hati ya Kuhoweya"
if(d==="hati_kuhoweya")return"Hati ya Kuhowa"
return"partner document"},
i8R(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=B.af("\\s+",!0,!1,!1,!1),f=A.a.i(B.aL(d,g," "))
g=B.af("\\s+",!0,!1,!1,!1)
w=A.a.i(B.aL(e,g," "))
g=f.length
if(g===0||w.length===0){g=x.N
return B.T(g,g)}v=B.af("\\[[^\\]]+\\]",!0,!1,!1,!1)
u=v.l8(0,f)
t=x.N
u=B.cF(u,new C.fES(),B.a6(u).k("K.E"),t)
s=B.C(u,B.a6(u).k("K.E"))
if(s.length===0)return B.T(t,t)
for(u=v.l8(0,f),u=new B.K0(u.a,u.b,u.c),r=x.cz,q=0,p="^";u.C();){o=u.d
n=(o==null?r.a(o):o).b
m=n.index
p=(m>q?p+B.RQ(A.a.aq(f,q,m)):p)+"(.*?)"
q=m+n[0].length}u=(q<g?p+B.RQ(A.a.b7(f,q)):p)+"\\.?$"
l=B.af(u.charCodeAt(0)==0?u:u,!1,!1,!1,!1).cB(w)
if(l==null)return B.T(t,t)
k=B.T(t,t)
for(g=l.b,j=0;j<s.length;j=i){i=j+1
u=g[i]
h=A.a.i(u==null?"":u)
if(h.length===0)continue
k.n(0,s[j],h)}return k},
i8P(d,e){var w,v,u,t,s,r=B.a6(e).k("cv<1>"),q=B.C(new B.cv(e,r),r.k("K.E"))
A.d.aW(q,new C.fER())
for(r=q.length,w=d,v=0;v<q.length;q.length===r||(0,B.M)(q),++v){u=q[v]
t=e.h(0,u)
s=t==null?null:A.a.i(t)
if(s==null)s=""
if(s.length===0)continue
if(A.a.a0(s,"[")&&A.a.cc(s,"]"))continue
w=B.aQS(w,u,s,0)}return w},
i8T(d,e){var w,v,u,t=d==="hati_kuhowa"?D.a5n:$.hyg(),s=x.N,r=B.T(s,s)
for(s=t.gdV(t),s=s.gaf(s);s.C();){w=s.gR(s)
v=e.h(0,w.a)
u=v==null?null:A.a.i(v)
if(u==null)u=""
if(u.length===0)continue
if(A.a.a0(u,"[")&&A.a.cc(u,"]"))continue
r.n(0,w.b,u)}return r},
hrl(d){if(d==="hati_kuhowa")return y.O
if(d==="hati_kuhoweya")return y.f
return""},
fhm(d,e){var w,v,u,t,s,r,q
for(w=d.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.M)(w),++u)for(t=w[u].z,s=t.length,r=0;r<t.length;t.length===s||(0,B.M)(t),++r){q=t[r]
if(C.hrn(q)===e)return q}return null},
i8U(d){var w,v=A.a.i(d.c),u=d.w
if(u==="hati_kuhowa")w="hati_kuhowa_"
else w=u==="hati_kuhoweya"?"hati_kuhoweya_":""
u=w.length
if(u!==0&&A.a.a0(v,w))return A.a.b7(v,u)
return A.d.gI(D.Hm).a},
i8V(b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0="utangulizi",b1=b6.w,b2=b1==null?"":b1,b3=b5.w,b4=b3==null?"":b3
if(b1==="hati_kuhowa"||b1==="hati_kuhoweya")w=!(b3==="hati_kuhowa"||b3==="hati_kuhoweya")
else w=!0
if(w)return new B.aen(0,0,0)
if(b2.length===0||b4.length===0||b2===b4)return new B.aen(0,0,0)
v=C.fhm(b6,b0)
u=C.fhm(b5,b0)
t=0
if(v!=null&&u!=null){s=C.i8T(b2,C.i8R(C.hrl(b2),v.r))
if(s.a!==0){u.r=C.i8P(C.hrl(b4),s)
t=s.a}}r=B.aY(x.N)
for(w=b6.r,q=w.length,p=0;p<w.length;w.length===q||(0,B.M)(w),++p)for(o=w[p].z,n=o.length,m=0;m<o.length;o.length===n||(0,B.M)(o),++m){l=C.hrn(o[m])
if(l==null||l==="utangulizi")continue
r.M(0,l)}for(q=B.eo(r,r.r,r.$ti.c),o=q.$ti.c,k=0;q.C();){n=q.d
if(n==null)n=o.a(n)
j=C.fhm(b6,n)
i=C.fhm(b5,n)
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
a0=C.h4W(d)
if(a0==null)continue
a1=d.at
if(A.a.i(a1==null?"":a1).length===0)continue
a2=d.c
a3=d.d
a4=d.e
a5=d.f
for(a1=f.z,a6=a1.length,a7=0;a7<a1.length;a1.length===a6||(0,B.M)(a1),++a7){a8=a1[a7]
if(C.hrk(a8)===a0||C.h4W(a8)===a0){a2=a8.c
a3=a8.d
a4=a8.e
a5=a8.f
break}}a1=f.z
a1.$flags&1&&B.aj(a1,16)
A.d.Ro(a1,new C.fEY(a0),!0)
a1=f.z
a6=Date.now()
a9=$.j3
$.j3=a9+1
A.d.M(a1,new C.eN(""+1000*a6+"_"+a9,D.lf,a2,a3,a4,a5,"",24,A.a7,A.bp,A.aF,4279310375,A.bi,d.at,D.bh,4280640491,4280172719,2,0,!1,"marriage_sign_placed_"+a0,0,D.cl,0,"","","","","",!1,0));++e}b5.f=new B.V(Date.now(),0,!1)
return new B.aen(k,t,e)},
i8Q(d){var w=C.i8U(d)
if(d.w==="hati_kuhowa")return C.hqI("",w)
return C.hqH("",w)},
fES:function fES(){},
fER:function fER(){},
fEY:function fEY(d){this.a=d},
hmq(){var w=new B.V(Date.now(),0,!1),v=new C.fjD()
return B.w(v.$1(B.bV(w)))+"/"+B.w(v.$1(B.bL(w)))+"/"+B.bC(w)},
h54(d){var w=d.at,v=A.a.i(w==null?"":w)
w=d.db
return(w==="__kiapo_video__"||A.a.a0(w,"__kiapo_video___"))&&v.length!==0},
fFQ(d){var w,v,u,t,s,r,q=d.ax
if(A.a.i(q==null?"":q).length!==0)return!0
for(q=d.r,w=q.length,v=0;v<w;++v)for(u=q[v].z,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===D.lf&&A.a.a0(r.db,"marriage_sign_placed_rais"))return!0}return!1},
hrC(d){var w,v=d.ax,u=A.a.i(v==null?"":v)
if(u.length===0)return!C.fFQ(d)
w=B.bi(u)
if(w==null)return!C.fFQ(d)
return new B.V(Date.now(),0,!1).a7().d0(w.a7().bS(18e9))},
i9B(d){var w=d.ax
if(A.a.i(w==null?"":w).length!==0)return
d.ax=new B.V(Date.now(),0,!1).a7().ae()},
hJ5(d){return A.a.i(d).toLowerCase()},
aqh(d){return C.hJ7(d)},
hJ7(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o,n,m
var $async$aqh=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.az(),$async$aqh)
case 7:r=f
p=r.tw("ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase())
q=p==null?A.Z:p
o=q
o=new B.N(o,C.idc(),B.U(o).k("N<1,n>")).c0(0,new C.ccu())
o=B.de(o,o.$ti.k("K.E"))
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
return B.i($async$aqh,v)},
aqg(d,e){return C.hJ6(d,e)},
hJ6(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n
var $async$aqg=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:o=A.a.i(e).toLowerCase()
if(o.length===0||A.a.i(d).length===0){w=1
break}w=3
return B.b(C.aqh(d),$async$aqg)
case 3:r=g
if(!J.cb(r,o)){w=1
break}t=5
w=8
return B.b(B.az(),$async$aqg)
case 8:q=g
w=9
return B.b(q.ar("StringList","ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase(),J.qq(r)),$async$aqg)
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
return B.i($async$aqg,v)},
aqi(d,e){return C.hJ8(d,e)},
hJ8(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n
var $async$aqi=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:o=A.a.i(e).toLowerCase()
if(o.length===0||A.a.i(d).length===0){w=1
break}w=3
return B.b(C.aqh(d),$async$aqi)
case 3:r=g
if(!J.hz(r,o)){w=1
break}t=5
w=8
return B.b(B.az(),$async$aqi)
case 8:q=g
w=9
return B.b(q.ar("StringList","ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase(),J.qq(r)),$async$aqi)
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
return B.i($async$aqi,v)},
VE(a5){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$VE=B.e(function(a6,a7){if(a6===1){s.push(a7)
w=t}for(;;)switch(w){case 0:if($.fYS&&!a5){w=1
break}t=4
w=7
return B.b(B.az(),$async$VE)
case 7:r=a7
q=B.aU(J.r(r.a,"ngmy_civic_hati_kiapo_uongozi_v1"))
if(q!=null&&A.a.i(q).length!==0){p=A.X.aN(0,q,null)
f=x.f
if(f.b(p)){e=x.N
o=B.T(e,x.I)
for(d=J.jY(p),d=d.gaf(d),a0=x.z;d.C();){n=d.gR(d)
if(f.b(n.b))J.aH(o,J.k(n.a),C.Wg(B.a2(f.a(n.b),e,a0)))}$.a7t=o}}t=2
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
return B.b(B.c7(),$async$VE)
case 12:case 11:w=a7?8:9
break
case 8:t=14
w=17
return B.b(B.uf("civic_hati_kiapo_uongozi",null,A.eo),$async$VE)
case 17:l=a7
w=l!=null&&x.f.b(J.r(l,"byState"))?18:19
break
case 18:o=x.N
k=B.T(o,x.I)
for(f=x.f,e=J.jY(f.a(J.r(l,"byState"))),e=e.gaf(e),d=x.z;e.C();){j=e.gR(e)
if(!f.b(j.b))continue
J.aH(k,J.k(j.a),C.Wg(B.a2(f.a(j.b),o,d)))}for(o=k,o=new B.cH(o,B.a6(o).k("cH<1,2>")).gaf(0);o.C();){f=o.d
f.toString
i=f
h=$.a7t.h(0,i.a)
if(h!=null){f=i.b.f
e=h.f
d=f.a
if(d>=e.gbr())f=d===e.gbr()&&f.b<e.gcC()
else f=!0
f=!f}else f=!0
if(f)$.a7t.n(0,i.a,i.b)}w=20
return B.b(C.aqj(),$async$VE)
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
case 16:case 9:$.fYS=!0
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$VE,v)},
aqj(){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m,l
var $async$aqj=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$aqj)
case 6:s=e
r=B.T(x.N,x.P)
for(o=$.a7t,o=new B.cH(o,B.a6(o).k("cH<1,2>")).gaf(0);o.C();){n=o.d
n.toString
q=n
J.aH(r,q.a,q.b.ag())}w=7
return B.b(s.ar("String","ngmy_civic_hati_kiapo_uongozi_v1",A.X.ap(r,null)),$async$aqj)
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
return B.i($async$aqj,v)},
b_V(d){var w=0,v=B.j(x.af),u,t,s,r
var $async$b_V=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.VE(!1),$async$b_V)
case 3:t=A.a.i(d).toLowerCase()
if(t.length===0){u=null
w=1
break}s=$.a7t.h(0,t)
r=s==null?null:s.hJ()
if(r==null){u=null
w=1
break}u=C.bCJ(r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$b_V,v)},
a7u(a1){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$a7u=B.e(function(a2,a3){if(a2===1){s.push(a3)
w=t}for(;;)switch(w){case 0:e=a1.x
d=A.a.i(A.a.i(e==null?"":e)).toLowerCase()
if(d.length===0){u=!1
w=1
break}a1.w="hati_kiapo_uongozi"
a1.f=new B.V(Date.now(),0,!1)
o=a1.hJ()
for(e=o.r,n=e.length,m=0;m<e.length;e.length===n||(0,B.M)(e),++m)for(l=e[m].z,k=l.length,j=0;j<k;++j){i=l[j]
h=i.at
g=A.a.i(h==null?"":h)
h=i.db
if((h==="__kiapo_video__"||A.a.a0(h,"__kiapo_video___"))&&A.a.a0(g,"data:"))i.at=null}$.a7t.n(0,d,o)
$.fYS=!0
w=3
return B.b(C.aqj(),$async$a7u)
case 3:w=4
return B.b(B.c7(),$async$a7u)
case 4:if(!a3){u=!1
w=1
break}t=6
e=x.N
r=B.T(e,x.P)
for(n=$.a7t,n=new B.cH(n,B.a6(n).k("cH<1,2>")).gaf(0);n.C();){l=n.d
l.toString
q=l
J.aH(r,q.a,q.b.ag())}w=9
return B.b(B.nv("civic_hati_kiapo_uongozi",B.G(["byState",r,"updatedAt",new B.V(Date.now(),0,!1).a7().ae()],e,x.z),null),$async$a7u)
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
return B.i($async$a7u,v)},
aqk(d){var w=0,v=B.j(x.T),u,t,s
var $async$aqk=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(new B.hV().a6b(A.eK),$async$aqk)
case 3:s=f
if(s==null){u=null
w=1
break}w=4
return B.b(s.fk(),$async$aqk)
case 4:t=f
if(t.length===0){u=null
w=1
break}w=5
return B.b(C.b_U(t,d),$async$aqk)
case 5:u=f
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aqk,v)},
b_U(d,e){return C.hJ9(d,e)},
hJ9(d,e){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$b_U=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.c7(),$async$b_U)
case 7:if(!g){u=null
w=1
break}n=A.a.i(e)
m=B.af("[^a-z0-9]+",!0,!1,!1,!1)
r=B.aL(n.toLowerCase(),m,"_")
q="civic_kiapo/"+B.w(r)+"/"+1000*Date.now()+".mp4"
n=$.f_().b
n===$&&B.c()
n=n.at
n===$&&B.c()
p=n.io("media")
w=8
return B.b(p.xc(q,new Uint8Array(B.ci(d)),D.bFS),$async$b_U)
case 8:n=p.CN(q)
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
return B.i($async$b_U,v)},
KQ(d,e,f,g,h,i,j,k,l,m,n){var w=C.cE()
return C.es(e,!1,f,A.aF,k.length===0?"marriage_locked":"marriage_locked_"+k,4280640491,g,h,i,"",j,w,null,"","",0,!1,"",0,D.bh,4280172719,2,d,0,0,"",D.cl,D.cS,l,m,n)},
fj4(d,e,f,g,h,i,j,k,l){var w=C.cE()
return C.es(A.bi,!1,4279310375,A.aF,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bp,A.a7,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.cl,D.f8,j,k,l)},
h21(d,e,f,g,h,i,j,k){var w=C.cE(),v=A.k.E(i*0.0017,0.02,0.06)
return C.es(h,!1,j,A.aF,"marriage_field_"+d+":"+A.k.ac(g,3),4280640491,i,A.cD,A.P,"",v,w,null,"","",0,!1,"",0,D.bh,4280172719,2,k,0,0,"",D.cl,D.cS,g,e,f)},
fiD(d,e,f,g){return C.fj4(0,0.002,D.fA,g,0.8,"ul_"+B.w(d)+"_"+B.w(e),f,d,e+0.002)},
h22(d,e,f,g,h,i,j,k){var w=C.cE()
return C.es(A.qH,!1,j,A.aF,"marriage_field_"+d+":"+A.k.ac(g,3),4280640491,i,A.bp,A.a7,"",h,w,null,"","",0,!1,"",0,D.bh,4280172719,2,k,0,0,"",D.cl,D.cS,g,e,f)},
hmp(d){var w="marriage_field_",v=d.db
if(!A.a.a0(v,w))return null
return A.d.gI(A.a.el(v,w,"").split(":"))},
bCJ(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4="hati_kiapo_uongozi",a5="__kiapo_video___"
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
l=C.hmp(m)
if(l!=null&&A.a.i(m.r).length!==0)r.n(0,l,m.r)
k=m.at
j=A.a.i(k==null?"":k)
i=m.db
if((i==="__kiapo_video__"||A.a.a0(i,a5))&&j.length!==0)q=k
if(m.b===D.lf&&A.a.a0(i,"marriage_sign_placed_rais"))p=m.hJ()}h=C.h4A(u)
t=a6.b
o=h.c
i=h.d
if(v)w=u
v=a6.y
g=a6.z
f=a6.Q
e=a6.as
d=a6.at
a0=C.BV(f,a3,a3,a3,i,5,!1,a4,a3,a3,a3,a3,a6.a,a6.ax,!1,w,t,d,e,h.r,o,v,g,a6.f)
a1=A.d.gI(a0.r)
for(w=a1.z,v=w.length,t=q!=null,n=0;n<w.length;w.length===v||(0,B.M)(w),++n){m=w[n]
l=C.hmp(m)
if(l!=null&&r.aj(0,l)){o=r.h(0,l)
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
A.d.bu(a1.z,new C.fDR(a2))}else A.d.bu(a1.z,new C.fDS())
A.d.M(a1.z,p)}w=a0.ax
if(A.a.i(w==null?"":w).length===0&&C.fFQ(a0))a0.ax=a6.f.a7().ae()
return a0},
h4A(d){var w,v,u="Hati ya Kiapo cha Uongozi",t=null,s=4279310375,r=4280640491,q=4280172719,p=4279378237,o=4290283019,n=4293056712,m=C.fGD(D.a6o),l=C.cE(),k=x.u,j=B.a([C.es(A.bi,!1,s,A.aF,"marriage_locked_bg",r,24,A.bp,A.a7,"",1,C.cE(),m,"","",0,!1,"",0,D.bh,q,2,"",0,0,"",D.cl,D.lK,1,0,0)],k),i=B.a([],k)
i.push(C.KQ("NGMY",A.L,236069181,52,A.bp,A.u,0.08,"watermark",0.45,-0.08,0.02))
i.push(C.KQ("TAREHE:",A.bi,o,16,A.bp,A.H,A.k.E(0.0272,0.02,0.06),"tarehe_lbl",0.1,0.7,0.026))
i.push(C.h21("tarehe",0.8059999999999999,0.026,0.18,A.bi,16,p,C.hmq()))
i.push(C.fiD(0.8099999999999999,0.026+A.k.E(0.0272,0.02,0.06)*0.8,0.12,o))
i.push(C.KQ("HATI YA KIAPO CHA UONGOZI",A.L,p,26,A.bp,A.u,0.048,"title",0.83,0.085,0.055))
i.push(C.KQ("Kiapo cha Rais \xb7 Presidential Oath of Leadership",A.L,o,11,A.cD,A.a7,0.024,"subtitle",0.83,0.085,0.1))
i.push(C.fj4(0,0.002,D.fA,o,1.6,"title_rule",0.5312,0.2344,0.128))
i.push(C.h22("body_p1",0.085,0.145,0.83,0.105,12,p,"Mimi [Jina Kamili la Rais], nikiwa Rais wa jamii yetu ya Kikongo, ninasimama mbele ya wanajamii wote kuapa kwamba nitawaongoza kwa haki, amani, na heshima kubwa, huku nikihakikisha tunashirikiana kwa pamoja kujenga jamii yetu na kuchangia maendeleo kwa njia bora na ya kistaarabu."))
i.push(C.h22("body_p2",0.085,0.255,0.83,0.092,12,p,"Ninajwika jukumu kamili la kusimamia rasilimali na fedha za wananchi kwa uaminifu mkubwa. Endapo itatokea kiasi chochote cha fedha cha mwanachama yeyote hakikurekodiwa vizuri, au fedha ya jumuiya ikipotea bila maelezo, nitawajibika kulipa mara tatu (triple) ya kiasi kilichopotea."))
i.push(C.h22("body_p3",0.085,0.352,0.83,0.095,12,p,"Kama nikishindwa kulipa au nikakataa kufanya hivyo, wanajamii wote wanaruhusiwa na wako huru kuchukua hatua za kisheria kwenda kuripoti kwa maofisa wa serikali (state officers) au polisi, au kumfungulia mashitaka mahakamani, na niko tayari kukabiliwa na sheria hizo bila pingamizi."))
i.push(C.fj4(268435456,0.175,D.bh,o,1.6,"video_frame",0.83,0.085,0.46))
i.push(C.KQ("VIDEO YA KIAPO",A.bi,o,10,A.bp,A.H,0.02,"video_lbl",0.7899999999999999,0.10500000000000001,0.468))
i.push(C.es(A.bi,!1,s,A.aF,"__kiapo_video__",r,24,A.bp,A.a7,"",0.131,C.cE(),t,"","",0,!1,"",0,D.bh,q,2,"",0,0,"",D.cl,D.lK,0.77,0.115,0.492))
i.push(C.KQ("Rais Anayeapa:",A.bi,p,15,A.bp,A.u,0.028,"rais_hdr",0.83,0.085,0.655))
i.push(C.KQ("Jina:",A.bi,p,13,A.bp,A.P,0.026,"jina_lbl",0.1,0.085,0.6930000000000001))
i.push(C.h21("rais_jina",0.195,0.6930000000000001,0.62,A.bi,13,p,""))
i.push(C.fiD(0.195,0.7130000000000001,0.62,n))
i.push(C.KQ("Sahihi:",A.bi,p,13,A.bp,A.P,0.026,"sahihi_lbl",0.12,0.085,0.74))
i.push(C.es(A.bi,!1,s,A.aF,"marriage_sign_rais",0,24,A.bp,A.a7,"",0.07,C.cE(),t,"","",0,!1,"",0,D.bh,0,2,"",0,0,"",D.cl,D.f8,0.38,0.21500000000000002,0.73))
i.push(C.fiD(0.21500000000000002,0.795,0.38,n))
i.push(C.KQ("Tarehe:",A.bi,p,13,A.bp,A.P,0.026,"tarehe2_lbl",0.12,0.625,0.74))
i.push(C.h21("rais_tarehe",0.745,0.74,0.2,A.bi,12,p,C.hmq()))
i.push(C.fiD(0.745,0.76,0.2,n))
w=A.a.i(d)
if(w.length!==0)A.d.v(i,B.a([C.fj4(0,0.032,D.bh,o,1,"state_box",0.72,0.14,0.875),C.KQ("EMO 'YA M'MBONDO "+w,A.L,p,14,A.bp,A.P,0.026000000000000002,"state_text",0.72,0.14,0.878)],k))
A.d.v(j,i)
v=C.rF(4294967035,t,0,0,j,l,D.qw,"","",u,D.dh)
return C.BV(t,t,t,t,D.or,5,!1,"hati_kiapo_uongozi",t,t,t,t,C.cE(),t,!1,w,u,t,t,B.a([v],x.g),"hati_kiapo_elegant_navy",t,!1,t)},
agN(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$agN=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:p=A.a.i(i)
if(p.length===0){if(f.e!=null)f.K(x.q).f.T(D.f62)
w=1
break}w=3
return B.b(C.VE(!0),$async$agN)
case 3:w=4
return B.b(C.b_V(p),$async$agN)
case 4:t=k
if(f.e==null){w=1
break}if(e)s=d||t==null||C.hrC(t)
else s=!1
w=t!=null?5:6
break
case 5:w=s?7:8
break
case 7:w=9
return B.b(B.bU(D.bib,null,new C.fyJ(p),f,!0,!0,!1,A.lL,!1,!1,x.N),$async$agN)
case 9:r=k
if(r==="continue"){h.$1(t)
w=1
break}if(r!=="new"){w=1
break}if(f.e==null){w=1
break}w=10
return B.b(B.cg(null,null,!0,null,new C.fyK(),f,null,!0,!0,x.y),$async$agN)
case 10:if(k!==!0||f.e==null){w=1
break}g.$1(C.h4A(p))
w=1
break
case 8:h.$1(t)
w=1
break
case 6:if(!s){if(f.e!=null){q=f.K(x.q).f
q.T(B.b3(null,null,null,null,null,A.t,null,B.d("Registrar wa "+p+" bado hajachapisha Hati ya Kiapo cha Uongozi.",null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))}w=1
break}if(f.e==null){w=1
break}g.$1(C.h4A(p))
case 1:return B.h(u,v)}})
return B.i($async$agN,v)},
fjD:function fjD(){},
ccu:function ccu(){},
fDR:function fDR(d){this.a=d},
fDS:function fDS(){},
fyJ:function fyJ(d){this.a=d},
fyH:function fyH(d){this.a=d},
fyI:function fyI(d){this.a=d},
fyK:function fyK(){},
fyF:function fyF(d){this.a=d},
fyG:function fyG(d){this.a=d},
aqP:function aqP(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aEm:function aEm(){var _=this
_.d=null
_.r=_.f=_.e=!1
_.c=_.a=null},
eev:function eev(d){this.a=d},
eet:function eet(d){this.a=d},
eeu:function eeu(d){this.a=d},
eew:function eew(d){this.a=d},
eex:function eex(d){this.a=d},
wJ(d,e,f,g,h,i,j,k,l,m,n){var w=C.cE()
return C.es(e,!1,f,A.aF,k.length===0?"marriage_locked":"marriage_locked_"+k,4280640491,g,A.bp,h,"",i,w,null,"","",0,!1,"",j,D.bh,4280172719,2,d,0,0,"",D.cl,D.cS,l,m,n)},
hm2(d,e,f){var w=4291404327
return B.a([C.qg(0,f,D.eR,w,2,"ring_l",f,d-f*0.42,e),C.qg(0,f,D.eR,w,2,"ring_r",f,d+f*0.06,e)],x.u)},
fi3(d,e,f,g,h){var w,v,u="ps_"+g,t=C.qg(4294967288,f,D.eR,4291404327,1.3,u+"_ring",f,d,e),s=f*0.36
s=C.qg(h,s,D.eR,h,0,u+"_head",s,d+f*0.32,e+f*0.16)
w=g?0.12:0.18
v=g?0.76:0.64
return B.a([t,s,C.qg(h,f*0.46,D.eR,h,0,u+"_body",f*v,d+f*w,e+f*0.5)],x.u)},
qg(d,e,f,g,h,i,j,k,l){var w=C.cE()
return C.es(A.bi,!1,4279310375,A.aF,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bp,A.a7,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.cl,D.f8,j,k,l)},
fi2(d,e,f,g,h,i,j,k,l){var w=C.cE(),v=A.k.E(j*0.0017,0.02,0.06),u="marriage_field_"+d+":"
return C.es(h,!1,k,A.aF,i?u+A.k.ac(g,3)+":"+A.o.ac(j,1):u+A.k.ac(g,3),4280640491,j,A.cD,A.P,"",v,w,null,"","",0,!1,"",0,D.bh,4280172719,2,l,0,0,"",D.cl,D.cS,g,e,f)},
bA8(d,e,f,g){return C.qg(0,0.002,D.fA,g,0.8,"ul_"+B.w(d)+"_"+B.w(e),f,d,e+0.002)},
hm1(d,e,f,g,h){var w=A.k.E(d.length*30*0.00058+0.08,0.2,0.5),v=f+(g-w)/2
return B.a([C.qg(0,0.036,D.bh,h,1.4,"banner_box_"+d,w,v,e),C.wJ(d,A.L,h,30,A.u,0.025199999999999997,0,"banner_t_"+d,w,v,e+0.00612)],x.u)},
hrm(){var w=new B.V(Date.now(),0,!1),v=new C.fEX()
return B.w(v.$1(B.bV(w)))+"/"+B.w(v.$1(B.bL(w)))+"/"+B.bC(w)},
hm3(d,e,f,g,h,i,j){var w=4293056712,v=h*0.56,u=f+v+0.01,t=u+0.08,s=f+h-t,r=""+e,q=f+0.026,p=v-0.026
return B.a([C.wJ(r+".",A.bi,i,13,A.H,0.024,0,"wln_"+d+"_"+r,0.026,f,g),C.fi2("witness_"+d+"_"+r+"_name",q,g,p,A.bi,!0,16,j,"[Jina la Shahidi]"),C.bA8(q,g+A.k.E(0.0272,0.02,0.06),p,w),C.wJ("Sahihi:",A.bi,j,15,A.a7,0.028,0,"wls_"+d+"_"+r,0.077,u,g),C.es(A.bi,!1,4279310375,A.aF,"marriage_sign_"+d+"_witness_"+r,0,24,A.bp,A.a7,"",0.05,C.cE(),null,"","",0,!1,"",0,D.bh,0,2,"",0,0,"",D.cl,D.f8,s,t,g-0.004),C.bA8(t,g+0.044,s,w)],x.u)},
ahd(d,e){var w,v,u,t=x.cd,s=e!=null?B.a([e],t):B.a([D.dlS,D.cp9,D.de0,D.dfT],t)
for(t=s.length,w=0;w<s.length;s.length===t||(0,B.M)(s),++w)for(v=A.d.gaf(s[w]);v.C();){u=v.gR(0)
if(u.a===d)return u}return null},
h1h(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var w=C.fGD(d.d),v=B.a([C.es(A.bi,!1,4279310375,A.aF,"marriage_locked_bg",4280640491,24,A.bp,A.a7,"",1,C.cE(),w,"","",0,!1,"",0,D.bh,4280172719,2,"",0,0,"",D.cl,D.lK,1,0,0)],x.u)
A.d.v(v,C.hXY(d,e,f,g,h,i,j,k,l,m,n,o,p,q))
return v},
hXY(c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=null,b0=4286200650,b1=4291404327,b2=4280640491,b3=4280172719,b4="marriage_locked",b5=4293056712,b6=4279310375,b7=4279673674,b8="marriage_locked_",b9=c3.f,c0=c3.r,c1=x.u,c2=B.a([],c1)
c2.push(C.wJ("NGMY",A.L,b9&16777215|251658240,60,A.u,0.09,-0.52,"watermark",0.5,-0.11,0.025))
w=c3.z
switch(w.a){case 1:case 3:A.d.v(c2,C.hm2(0.42,0.016,0.048))
v=0.066
break
case 7:A.d.v(c2,C.hm2(0.38,0.012,0.072))
v=0.082
break
case 2:case 6:case 10:A.d.v(c2,C.fi3(0.16,0.018,0.052,!1,b9))
A.d.v(c2,C.fi3(0.79,0.018,0.052,!0,b0))
v=0.072
break
case 5:c2.push(C.wJ("\ud83c\udf33",A.L,4279898632,22,A.a7,0.04,0,"tree",0.16,0.42,0.014))
v=0.056
break
case 8:A.d.v(c2,B.a([C.qg(0,0.062,D.eR,b1,1.6,"crest_o",0.11,0.445,0.012),C.qg(0,0.046,D.eR,b1,1,"crest_i",0.084,0.458,0.02),C.wJ("MUHURI",A.L,b9,9,A.u,0.028,0,"crest_t",0.11,0.445,0.028)],c1))
v=0.078
break
case 4:case 9:A.d.v(c2,B.a([C.qg(0,0.002,D.fA,b1,1,"orn_l_0.018",0.24,0.2,0.024),C.qg(b9,0.016,D.lg,b1,0.9,"orn_c_0.018",0.024,0.488,0.018),C.qg(0,0.002,D.fA,b1,1,"orn_r_0.018",0.24,0.518,0.024)],c1))
v=0.04
break
case 0:v=d5
break
default:v=d5}A.d.v(c2,B.a([C.wJ("TAREHE:",A.bi,c0,20,A.H,A.k.E(0.033999999999999996,0.02,0.06),0,"tarehe_lbl",0.1,0.7,0.026),C.fi2("tarehe",0.8059999999999999,0.026,0.14400000000000002,A.bi,!1,21,b9,C.hrm()),C.bA8(0.814,0.026+A.k.E(0.035699999999999996,0.02,0.06)*0.8,0.12,c0)],c1))
c2.push(C.wJ(d2,A.L,b9,d3,A.u,0.06,0,"title",0.82,0.09,v))
u=v+0.054
c2.push(C.qg(c0,0.0026,D.bh,c0,0,"title_rule_1",0.82*d4,0.09+0.82*(1-d4)/2,u))
t=u+0.028
c2.push(C.qg(c3.e,0.138,D.bh,c0,1.15,"intro_frame",0.832,0.08399999999999999,t-0.004))
s=C.cE()
c2.push(C.es(A.bi,!1,b9,A.aF,"marriage_field_utangulizi:"+A.k.ac(0.82,3),b2,19,A.bp,A.cw,"",0.128,s,a9,"","",0,!1,"",0,D.bh,b3,2,c5,0,0,"",D.cl,D.cS,0.82,0.09,t))
t+=c4
if(c8){r=A.k.E(c7.length*30*0.00058+0.08,0.2,0.5)
q=0.09+(0.82-r)/2
s=C.qg(0,0.036,D.bh,c0,1.4,"banner_box_nimetowe_label",r,q,t)
p=C.cE()
A.d.v(c2,B.a([s,C.es(A.L,!1,c0,A.aF,"marriage_field_nimetowe_label:"+A.k.ac(r,3),b2,30,A.bp,A.u,"",0.025199999999999997,p,a9,"","",0,!1,"",0,D.bh,b3,2,c7,0,0,"",D.cl,D.cS,r,q,t+0.00612)],c1))}else A.d.v(c2,C.hm1(c7,t,0.09,0.82,c0))
t+=0.048
c2.push(C.wJ(c9,A.bi,b9,d0,A.P,0.03,0,"nimetowe_sub",0.82,0.09,t))
t+=0.03
for(o=1;o<=4;++o){s=c6[o-1]
n=o===1
m=A.k.E(0.7779999999999999-(n?0.328:0),0.22,1)
l=n?A.k.E(0.037399999999999996,0.02,0.06):A.k.E(0.0272,0.02,0.06)
p=""+o
k=t+0.002
j=C.fi2("mahari_"+p,0.132,k,m,A.bi,!1,16,b9,s)
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
d=B.a([new C.eN(""+1000*i+"_"+h,D.cS,0.09,t+0.004,0.032,0.022,p+".",13,A.H,A.bp,A.aF,c0,A.bi,a9,D.bh,b2,b3,2,0,!1,s,0,D.cl,0,"","","","","",!1,0),j,new C.eN(""+1000*f+"_"+e,D.f8,0.132,k+l+0.002,0.7779999999999999,0.002,"",24,A.a7,A.bp,A.aF,b6,A.bi,a9,D.fA,0,b5,0.8,0,!1,g,0,D.cl,0,"","","","","",!1,0)],c1)
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
A.d.v(d,B.a([new C.eN(""+1000*s+"_"+p,D.cS,a0,k,0.268,l,"AKUNA DENI",22,A.u,A.bp,A.aF,b7,A.dU,a9,D.bh,b2,b3,2,0,!1,"marriage_locked_nim_akuna_deni",0,D.cl,0,"","","","","",!1,0),new C.eN(""+1000*i+"_"+h,D.f8,a1,a2,0.046,0.025875,"",24,A.a7,A.bp,A.aF,b6,A.bi,a9,D.bh,0,b7,2,0,!1,"marriage_locked_nim_akuna_box",0,D.cl,0,"","","","","",!1,0),new C.eN(""+1000*g+"_"+f,D.cS,a1,a2-0.002,0.046,0.029875,"\u2713",18,A.u,A.bp,A.aF,b7,A.L,a9,D.bh,b2,b3,2,0,!1,"marriage_locked_nim_akuna_tick",0,D.cl,0,"","","","","",!1,0),new C.eN(""+1000*e+"_"+a3,D.f8,a0,k,a1+0.046-a0,l,"",24,A.a7,A.bp,A.aF,b6,A.bi,a9,D.bh,0,0,0,0,!1,"marriage_locked_nim_akuna_hit",0,D.cl,0,"","","","","",!1,0)],c1))}A.d.v(c2,d)
t+=0.04}t+=0.006
A.d.v(c2,C.hm1("MASHAHIDI",t,0.09,0.82,c0))
t+=0.046
if(w===D.a6d||w===D.a6f||w===D.a6c||w===D.a6e){w=t-0.008
A.d.v(c2,C.fi3(0.21,w,0.044,!0,b0))
A.d.v(c2,C.fi3(0.7459999999999999,w,0.044,!1,b9))
t+=0.012}a4=0.05+d6*0.056+0.011
w=t+0.05
s=t+0.012
A.d.v(c2,B.a([C.qg(0,a4,D.bh,c0,1.3,"wit_table_border",0.82,0.09,t),C.qg(c0,a4,D.bh,c0,0,"wit_table_divider",0.0024,0.4988,t),C.qg(0,0.0022,D.fA,c0,1.1,"wit_table_hdrline",0.82,0.09,w),C.wJ("UPANDE WA MKE",A.L,c0,20,A.u,0.03,0,"wit_h_mke_t",0.41,0.09,s),C.wJ("UPANDE WA MUME",A.L,c0,20,A.u,0.03,0,"wit_h_mume_t",0.41,0.5,s)],c1))
a5=w+0.01
for(a6=1;a6<=d6;++a6){A.d.v(c2,C.hm3("mke",a6,0.106,a5,0.378,c0,b9))
A.d.v(c2,C.hm3("mume",a6,0.516,a5,0.378,c0,b9))
a5+=0.056}t=t+a4+0.012
w=t+0.056
s=t+0.09
p=s-0.002
A.d.v(c2,B.a([C.qg(0,0.11,D.bh,c0,1.2,"mw_box",0.82,0.09,t),C.wJ("MWANDISHI",A.bi,c0,15,A.H,0.026,0,"mw_hdr",0.7759999999999999,0.11199999999999999,t+0.016),C.wJ("Jina:",A.bi,b9,15,A.a7,0.028,0,"mw_jl",0.09,0.11199999999999999,w),C.fi2("mwandishi_jina",0.215,w,0.3116,A.bi,!0,15,b9,""),C.bA8(0.215,p,0.3116,b5),C.wJ("Sahihi:",A.bi,b9,15,A.a7,0.028,0,"mw_sl",0.09,0.5,w),C.es(A.bi,!1,b6,A.aF,"marriage_sign_mwandishi",0,24,A.bp,A.a7,"",0.044,C.cE(),a9,"","",0,!1,"",0,D.bh,0,2,"",0,0,"",D.cl,D.f8,0.3161999999999999,0.5738,s-0.044),C.bA8(0.5738,p,0.3161999999999999,b5)],c1))
a7=A.a.i(d1)
if(a7.length!==0){a8=t+0.11+0.006
A.d.v(c2,B.a([C.qg(0,0.032,D.bh,c0,1,"state_box",0.7,0.15,a8),C.wJ("EMO 'YA M'MBONDO "+a7,A.L,b9,26,A.P,0.026000000000000002,0,"state_text",0.7,0.15,a8+0.003)],c1))}return c2},
i8S(d){var w,v,u,t=null,s=B.b1(d.f),r=B.b1(d.r),q=C.h5e(d.d),p=new C.fET(s),o=new C.fEU(s),n=d.z,m=n===D.a6d||n===D.a6f||n===D.a6c||n===D.a6e,l=n===D.aHk||n===D.a6g||n===D.aHl,k=B.bT(0,B.fP(q,A.A,t,t,A.cf,A.bV,!0,t,!1,t,t),0,0,0),j=x.p,i=B.a([],j)
if(l){w=n===D.a6g?26:16
i.push(new C.fEW().$1$size(w))}if(n===D.aHm)i.push(D.fNf)
if(m)i.push(B.B(B.a([o.$1$female(!1),o.$1$female(!0)],j),A.m,t,A.iD,A.j,0,t,t))
i.push(B.d("HATI YA KUHOWA",t,t,t,t,t,t,B.l(t,t,s,t,t,t,t,t,t,t,t,9,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),A.L,t,t))
i.push(A.am)
n=B.J(r,A.r,1.1)
w=B.m(4)
i.push(B.p(t,B.x(B.a([p.$0(),D.aQF,p.$1$w(0.9),D.aQF,p.$1$w(0.75)],j),A.m,t,A.e,A.j,0,A.p),A.f,t,t,new B.o(D.bcN,t,n,w,t,t,A.n),t,t,t,t,A.akS,t,t,t))
i.push(A.am)
i.push(new C.fEV(r).$1("NIMETOWE"))
i.push(A.fO)
v=J.e4(3,x.l)
for(u=0;u<3;++u)v[u]=new B.D(A.MW,new B.cc(A.aN,A.e,A.j,A.m,t,A.p,t,0,B.a([B.p(t,t,A.f,t,t,new B.o(r,t,t,t,t,t,A.a6),t,7,t,t,t,t,t,7),A.dc,new B.bA(1,A.bd,p.$1$h(4),t)],j),t),t)
A.d.v(i,v)
i.push(A.b2)
i.push(B.d(d.b,t,t,t,t,t,t,B.l(t,t,s.j(0.85),t,t,t,t,t,t,t,t,8,t,t,A.H,t,t,!0,t,t,t,t,t,t,t,t),A.L,t,t))
return new B.an(A.a_,t,A.b0,A.t,B.a([k,new B.D(A.ajt,B.x(i,A.aj,t,A.e,A.j,0,A.p),t)],j),t)},
hqH(d,e){var w,v,u,t=null,s="Hati ya Kuhowa",r=C.ahd(e,t)
if(r==null)r=A.d.gI(D.Hm)
w=C.cE()
v=C.rF(r.e,t,0,0,C.h1h(r,0.165,y.O,D.dgu,"NIMETOWA",!1,"Vitu vifuatavyo vimetolewa:",20,d,"HATI YA KUHOWA",40,0.55,0.036,3),w,D.qw,"","",s,D.dh)
w=C.cE()
u=A.a.i(d)
if(u.length===0)u=t
return C.BV(t,t,t,t,D.or,5,!1,"hati_kuhowa",t,t,t,t,w,t,!1,u,s,t,t,B.a([v],x.g),"hati_kuhowa_"+r.a,t,!1,t)},
hqI(d,e){var w,v,u,t=null,s="Hati ya Kuhoweya",r=C.ahd(e,t)
if(r==null)r=A.d.gI(D.Hm)
w=C.cE()
v=C.rF(r.e,t,0,0,C.h1h(r,0.165,y.f,D.dc2,"NIMEPOKEYA CASH",!0,"Vitu vifuatavyo vimetolewa:",20,d,"HATI YA KUHOWESHA",40,0.55,0.036,3),w,D.qw,"","",s,D.dh)
w=C.cE()
u=A.a.i(d)
if(u.length===0)u=t
return C.BV(t,t,t,t,D.or,5,!1,"hati_kuhoweya",t,t,t,t,w,t,!1,u,s,t,t,B.a([v],x.g),"hati_kuhoweya_"+r.a,t,!1,t)},
bE4(d,e,f){var w=0,v=B.j(x.T),u
var $async$bE4=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:u=B.bU(A.K,null,new C.fQL(e,f),d,!0,!0,!0,null,!1,!1,x.N)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bE4,v)},
agO(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$agO=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:q=B.U(i).k("Z<1>")
p=B.C(new B.Z(i,new C.fyN(),q),q.k("K.E"))
w=!g&&p.length!==0?3:4
break
case 3:w=5
return B.b(B.bU(D.M6,null,new C.fyO(p),d,!0,!0,!1,A.lL,!1,!1,x.N),$async$agO)
case 5:t=k
if(t==="continue"){f.$1(A.d.gI(p).hJ())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bE4(d,"Hati ya Kuhowa",D.Hm),$async$agO)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.Lu(d,"Tafuta jimbo\u2026","",A.ki,"Chagua jimbo"),$async$agO)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}e.$1(C.hqH(r,s))
case 1:return B.h(u,v)}})
return B.i($async$agO,v)},
agP(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$agP=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:q=B.U(i).k("Z<1>")
p=B.C(new B.Z(i,new C.fyR(),q),q.k("K.E"))
w=!g&&p.length!==0?3:4
break
case 3:w=5
return B.b(B.bU(D.M6,null,new C.fyS(p),d,!0,!0,!1,A.lL,!1,!1,x.N),$async$agP)
case 5:t=k
if(t==="continue"){f.$1(A.d.gI(p).hJ())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bE4(d,"Hati ya Kuhoweya",D.Hm),$async$agP)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.Lu(d,"Tafuta jimbo\u2026","",A.ki,"Chagua jimbo"),$async$agP)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}e.$1(C.hqI(r,s))
case 1:return B.h(u,v)}})
return B.i($async$agP,v)},
agQ(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p,o,n,m
var $async$agQ=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:n=B.U(i).k("Z<1>")
m=B.C(new B.Z(i,new C.fyV(),n),n.k("K.E"))
w=!g&&m.length!==0?3:4
break
case 3:w=5
return B.b(B.bU(D.M6,null,new C.fyW(m),d,!0,!0,!1,A.lL,!1,!1,x.N),$async$agQ)
case 5:t=k
if(t==="continue"){f.$1(A.d.gI(m).hJ())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bE4(d,"Malipo ya Awamu ya Mahari",D.Rh),$async$agQ)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.Lu(d,"Tafuta jimbo\u2026","",A.ki,"Chagua jimbo"),$async$agQ)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}q=C.ahd(s,D.Rh)
if(q==null)q=A.d.gI(D.Rh)
n=C.cE()
p=C.rF(q.e,null,0,0,C.h1h(q,0.21,"Mimi [Jina la Baba wa Mume], nikiwa kama baba na mkuu wa familia ya upande wa mume kutoka jamii ya [Jina la Jamii ya Mume], nyumba ya [Jina la Nyumba ya Mume], ninafanya makubaliano haya rasmi na familia ya [Jina la Baba wa Binti], wa jamii ya [Jina la Jamii ya Binti], nyumba ya [Jina la Nyumba ya Binti]. Kwa kuwa malipo kamili ya mahari ya mke wa mwanangu hayajakamilika kwa sasa, tumefikia makubaliano ya kulipa kwa awamu. Kiasi kilichosalia cha mahari kitakamilishwa kikamilifu na familia yetu ifikapo tarehe [Tarehe ya Kurudi Kulipa Mahari]. Siku hiyo, pande zote mbili zitakutana tena kwa ajili ya kukamilisha taratibu zote zilizosalia, kupokea baraka kamili za ndoa, na kukabidhiwa Cheti cha Ndoa ya Kimila. Makubaliano haya yanafanyika kwa hiari, kwa ridhaa ya familia zote mbili, na kwa kufuata misingi ya heshima, mila, desturi na maelewano mema kati ya familia zetu.",D.d6H,"MALIPO YALIYOSALIA",!1,"Mambo ya Cash na Mali (Yaliyosalia / Yatakayokamilishwa):",18,r,"HATI YA MAKUBALIANO YA MALIPO YA AWAMU YA MAHARI",24,0.85,0.048,2),n,D.qw,"","","Hati ya Makubaliano ya Malipo ya Awamu",D.dh)
n=C.cE()
o=A.a.i(r)
if(o.length===0)o=null
e.$1(C.BV(null,null,null,null,D.or,5,!1,"hati_malipo_awamu",null,null,null,null,n,null,!1,o,"Hati ya Makubaliano ya Malipo ya Awamu",null,null,B.a([p],x.g),"hati_malipo_awamu_"+q.a,null,!1,null))
case 1:return B.h(u,v)}})
return B.i($async$agQ,v)},
xK:function xK(d,e){this.a=d
this.b=e},
jr:function jr(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.z=k},
fEX:function fEX(){},
fET:function fET(d){this.a=d},
fEV:function fEV(d){this.a=d},
fEW:function fEW(){},
fEU:function fEU(d){this.a=d},
fQL:function fQL(d,e){this.a=d
this.b=e},
adv:function adv(d,e,f){this.c=d
this.d=e
this.a=f},
e14:function e14(d,e,f){this.a=d
this.b=e
this.c=f},
e13:function e13(d,e){this.a=d
this.b=e},
e12:function e12(d,e){this.a=d
this.b=e},
acU:function acU(d,e,f){this.c=d
this.d=e
this.a=f},
fyN:function fyN(){},
fyO:function fyO(d){this.a=d},
fyL:function fyL(d){this.a=d},
fyM:function fyM(d){this.a=d},
fyR:function fyR(){},
fyS:function fyS(d){this.a=d},
fyP:function fyP(d){this.a=d},
fyQ:function fyQ(d){this.a=d},
fyV:function fyV(){},
fyW:function fyW(d){this.a=d},
fyT:function fyT(d){this.a=d},
fyU:function fyU(d){this.a=d},
KT(d,e,f,g,h,i,j,k,l,m){var w=C.cE()
return C.es(e,!1,f,A.aF,j.length===0?"marriage_locked":"marriage_locked_"+j,4280640491,g,A.bp,h,"",i,w,null,"","",0,!1,"",0,D.bh,4280172719,2,d,0,0,"",D.cl,D.cS,k,l,m)},
CW(d,e,f,g,h,i,j,k,l){var w=C.cE()
return C.es(A.bi,!1,4279310375,A.aF,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bp,A.a7,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.cl,D.f8,j,k,l)},
hmL(d,e,f){return C.CW(0,0.002,D.fA,4293056712,0.8,"ul_"+B.w(d)+"_"+B.w(e),f,d,e+0.022)},
bAi(d,e,f,g,h){return B.a([C.CW(4294967288,0.032,D.bh,4291404327,1.15,"pill_"+d,g,f,e),C.KT(d,A.L,h,11,A.u,0.024,"pill_t_"+d,g,f,e+0.005)],x.u)},
h26(d,e,f,g,h){var w=d+f/2,v=e+0.006,u=f*0.4,t=B.w(e)
return B.a([C.CW(0,0.002,D.fA,g,1,"orn_l_"+t,u,d,v),C.CW(h,0.016,D.lg,g,0.9,"orn_c_"+t,0.024,w-0.012,e),C.CW(0,0.002,D.fA,g,1,"orn_r_"+t,u,w+0.018,v)],x.u)},
a1z(d,e,f,g,h,i,j,k){var w=d.length*i*0.0027+0.006,v=C.KT(d,A.bi,j,i,A.P,0.022,"ll_"+e,w,f,g),u=f+w,t=h-w,s=C.cE()
return B.a([v,C.es(A.L,!1,j,A.aF,"marriage_field_"+e+":"+A.k.ac(t,3),4280640491,i,A.cD,A.P,"",0.02,s,null,"","",0,!1,"",0,D.bh,4280172719,2,k,0,0,"",D.cl,D.cS,t,u,g-0.002),C.hmL(u,g+0.018,t)],x.u)},
hmM(d,e,f,g,h,i){var w=4291404327,v=f+0.002
return B.a([C.CW(h,0.028,D.bh,h,0,"chv_"+d,g,e,f),C.CW(w,0.024,D.lg,w,0,"chv_l_"+d,0.024,e-0.008,v),C.CW(w,0.024,D.lg,w,0,"chv_r_"+d,0.024,e+g-0.016,v),C.KT(d,A.L,i,9.5,A.u,0.02,"chv_t_"+d,g,e,f+0.004)],x.u)},
bAh(d,e,f,g,h){var w=e+0.12,v=g-0.12
return B.a([C.KT("Sahihi:",A.bi,h,10,A.P,0.02,"is_"+d,0.12,e,f),C.es(A.bi,!1,4279310375,A.aF,"marriage_sign_"+d,0,24,A.bp,A.a7,"",0.032,C.cE(),null,"","",0,!1,"",0,D.bh,0,2,"",0,0,"",D.cl,D.f8,v,w,f-0.006),C.hmL(w,f+0.016,v)],x.u)},
h5f(d){var w,v
for(w=0;w<19;++w){v=D.Rw[w]
if(v.a===d)return v}return null},
iba(d){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=d.c
if(A.a.a0(k,"hati_kuhowa_")){w=C.ahd(A.a.b7(k,12),l)
v=w==null?l:w.d}else if(A.a.a0(k,"hati_kuhoweya_")){w=C.ahd(A.a.b7(k,14),l)
v=w==null?l:w.d}else if(A.a.a0(k,"hati_malipo_awamu_")){u=A.a.b7(k,18)
w=C.ahd(u,D.Rh)
v=w==null?l:w.d
if(v==null){w=C.ahd(u,l)
v=w==null?l:w.d}}else if(A.a.a0(k,"marriage_")){w=C.h5f(A.a.b7(k,9))
v=w==null?l:w.d}else v=l
if(v==null)return!1
$.hnA.a9(0)
$.hnN.a9(0)
t=C.fGD(v)
for(w=d.r,s=w.length,r=!1,q=0;q<w.length;w.length===s||(0,B.M)(w),++q)for(p=w[q].z,o=p.length,n=0;n<o;++n){m=p[n]
if(m.db==="marriage_locked_bg"&&m.at!==t){m.at=t
r=!0}}return r},
h6l(d){var w=0,v=B.j(x.T),u
var $async$h6l=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:u=B.bU(A.K,null,new C.fSd(),d,!0,!0,!0,null,!1,!1,x.N)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$h6l,v)},
xN:function xN(d,e){this.a=d
this.b=e},
nP:function nP(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bjU:function bjU(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
fSd:function fSd(){},
ady:function ady(d){this.a=d},
eiS:function eiS(d,e){this.a=d
this.b=e},
eiR:function eiR(d){this.a=d},
eiQ:function eiQ(d,e){this.a=d
this.b=e},
afe:function afe(d,e,f){this.c=d
this.d=e
this.a=f},
h5e(d){return $.hnN.c3(0,d,new C.fGF(d))},
fGD(d){return $.hnA.c3(0,d,new C.fGE(d))},
fC(d){return B.fWq(d>>>16&255,d>>>8&255,d&255,255)},
i05(d){var w,v,u=4292128567,t=4285213214,s=4294967035,r=4290283019,q=null,p=4279378237,o=4291404327,n=4294966774,m=4294702831,l=4285218602,k=4291394365,j=4294967295,i=4294964964,h=4294965484,g=4280241466,f=4287326484,e=4294966518
switch(d.a){case 0:return C.hoV(4294570461,4293910718,4284234270,u)
case 1:return C.hoV(4294635750,4293975240,t,4292912216)
case 2:w=C.fgB(s,4294505966,r)
C.bA2(w,14,16,p)
C.kC(w,8,9,464,836,u,1.2)
C.CS(w,2,2,1,1,u,10)
C.CS(w,478,2,-1,1,u,10)
C.CS(w,2,852,1,-1,u,10)
C.CS(w,478,852,-1,-1,u,10)
return w
case 3:return C.fgB(4294966515,4294373082,4289102906)
case 4:return C.hVH(C.fgB(4294376440,4293653998,4290287194))
case 5:w=C.fgB(4294965238,4294437098,4288444980)
C.bA2(w,14,16,4283043359)
C.kC(w,6,7,468,840,u,1)
C.kC(w,9,10,462,834,o,0.7)
return w
case 6:v=B.hq(q,q,A.c7,0,A.e0,854,q,0,3,q,A.c7,480,!1)
C.yF(v,n,4294175448)
C.t0(v,n)
C.kC(v,24,24,432,806,4286209070,1)
C.a1m(v,12,12,468,12,o,3,20)
C.a1m(v,12,842,468,842,o,3,20)
C.a1m(v,12,12,12,842,o,3,20)
C.a1m(v,468,12,468,842,o,3,20)
return v
case 7:return C.hTI(4294440434,4293518297,4280228630,r)
case 8:v=B.hq(q,q,A.c7,0,A.e0,854,q,0,3,q,A.c7,480,!1)
C.yF(v,m,4293911504)
C.t0(v,m)
C.kC(v,28,28,424,798,l,1)
C.fq5(v,28,28,l,k)
C.fq5(v,452,28,l,k)
C.fq5(v,28,826,l,k)
C.fq5(v,452,826,l,k)
return v
case 9:v=B.hq(q,q,A.c7,0,A.e0,854,q,0,3,q,A.c7,480,!1)
C.yF(v,j,4294111986)
C.t0(v,j)
C.kC(v,18,18,444,818,4292401368,0.7)
B.iM(v,!0,C.fC(p),0,13,0,853)
return v
case 10:return C.hXK(i,4294173372)
case 11:return C.hYR(4294439140,4293449662)
case 12:return C.hTA(h,4294239432)
case 13:return C.hYi(4294244340,4293193448)
case 14:return C.i1G(4294505710,4293780694)
case 15:return C.ffx(4294966259,4294439138,o,p,q)
case 16:return C.ffx(4294966776,4294178544,o,g,g)
case 17:return C.ffx(4294965493,4294504170,o,4286200650,q)
case 18:return C.ffx(4294966519,4294373862,o,p,p)
case 19:return C.hWQ()
case 20:return C.hWR()
case 21:v=B.hq(q,q,A.c7,0,A.e0,854,q,0,3,q,A.c7,480,!1)
C.yF(v,h,4293976768)
C.t0(v,h)
C.bA2(v,14,16,p)
B.iM(v,!0,C.fC(u),4,475,4,9)
B.iM(v,!0,C.fC(u),4,475,844,849)
B.iM(v,!0,C.fC(u),4,9,4,849)
B.iM(v,!0,C.fC(u),470,475,4,849)
C.a1m(v,10,12,470,12,u,2,16)
C.a1m(v,10,842,470,842,u,2,16)
C.a1m(v,10,12,10,842,u,2,18)
C.a1m(v,470,12,470,842,u,2,18)
C.CS(v,2,2,1,1,t,10)
C.CS(v,478,2,-1,1,t,10)
C.CS(v,2,852,1,-1,t,10)
C.CS(v,478,852,-1,-1,t,10)
C.kC(v,14,16,452,822,u,1.8)
return v
case 22:v=B.hq(q,q,A.c7,0,A.e0,854,q,0,3,q,A.c7,480,!1)
C.yF(v,s,4294438872)
C.t0(v,s)
C.kC(v,14,16,452,822,o,2.2)
C.kC(v,22,24,436,806,o,1)
C.h3r(v,!1,!1,o,p,p,36,14,16)
C.kP(v,240,20,7,o,!0)
C.kP(v,240,834,7,o,!0)
C.kP(v,18,427,7,o,!0)
C.kP(v,462,427,7,o,!0)
return v
case 23:v=B.hq(q,q,A.c7,0,A.e0,854,q,0,3,q,A.c7,480,!1)
C.yF(v,i,4293910712)
C.t0(v,i)
B.iM(v,!0,C.fC(u),0,479,0,20)
B.iM(v,!0,C.fC(u),0,479,834,853)
B.iM(v,!0,C.fC(u),0,20,0,853)
B.iM(v,!0,C.fC(u),460,479,0,853)
B.iM(v,!0,C.fC(f),5,474,5,9)
B.iM(v,!0,C.fC(f),5,474,844,848)
B.iM(v,!0,C.fC(f),5,9,5,848)
B.iM(v,!0,C.fC(f),470,474,5,848)
C.kC(v,28,28,424,798,f,1.4)
return v
case 24:v=B.hq(q,q,A.c7,0,A.e0,854,q,0,3,q,A.c7,480,!1)
C.yF(v,e,4294174404)
C.t0(v,e)
C.bA2(v,14,16,p)
B.iM(v,!0,C.fC(u),3,476,3,8)
B.iM(v,!0,C.fC(u),3,476,845,850)
B.iM(v,!0,C.fC(u),3,8,3,850)
B.iM(v,!0,C.fC(u),471,476,3,850)
C.kC(v,9,10,462,834,t,1)
C.kC(v,14,16,452,822,u,1.8)
C.kP(v,240,8,4,u,!0)
C.kP(v,240,846,4,u,!0)
C.kP(v,8,427,4,u,!0)
C.kP(v,472,427,4,u,!0)
C.kP(v,8,8,3,t,!0)
C.kP(v,472,8,3,t,!0)
C.kP(v,8,846,3,t,!0)
C.kP(v,472,846,3,t,!0)
return v}},
yF(d,e,f){var w,v,u,t,s,r=null,q=e>>>16&255,p=f>>>16&255,o=e>>>8&255,n=f>>>8&255,m=e&255,l=f&255,k=0
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
B.kR(d,!1,A.dg,new B.Su(s),r,A.d_,1,0,w-1,k,k);++k}},
t0(d,e){var w,v,u,t,s,r,q,p,o=null,n=new B.e9()
n.d3(e)
for(w=0;w<900;++w){v=d.a
v=v==null?o:v.a
u=n.au(v==null?0:v)
v=d.a
v=v==null?o:v.b
t=n.au(v==null?0:v)
v=d.a
s=v==null?o:v.dQ(u,t,o)
if(s==null)s=new B.iq()
v=A.o.E(A.k.N(s.gb2(s))-3,0,255)
r=A.o.E(A.k.N(s.gbc())-3,0,255)
q=A.o.E(A.k.N(s.gb9(s))-2,0,255)
p=d.a
if(p!=null)p.jV(u,t,v,r,q,255)}},
kC(d,e,f,g,h,i,j){var w,v=null,u=C.fC(i),t=e+g
B.kR(d,!0,A.dg,u,v,A.d_,j,e,t,f,f)
w=f+h
B.kR(d,!0,A.dg,u,v,A.d_,j,e,t,w,w)
B.kR(d,!0,A.dg,u,v,A.d_,j,e,e,f,w)
B.kR(d,!0,A.dg,u,v,A.d_,j,t,t,f,w)},
CS(d,e,f,g,h,i,j){var w,v,u=null,t=A.o.E(A.k.V(j*0.72),8,j-2)
B.kR(d,!0,A.dg,C.fC(i),u,A.d_,2,e,e+g*j,f,f)
B.kR(d,!0,A.dg,C.fC(i),u,A.d_,2,e,e,f,f+h*j)
w=e+g*3
v=f+h*3
B.kR(d,!0,A.dg,C.fC(i),u,A.d_,1,w,e+g*t,v,v)
B.kR(d,!0,A.dg,C.fC(i),u,A.d_,1,w,w,v,f+h*t)},
hoV(d,e,f,g){var w=null,v=B.hq(w,w,A.c7,0,A.e0,854,w,0,3,w,A.c7,480,!1)
C.yF(v,d,e)
C.t0(v,d)
B.iM(v,!0,C.fC(f),0,479,0,28)
B.iM(v,!0,C.fC(f),0,479,826,853)
B.iM(v,!0,C.fC(f),0,28,0,853)
B.iM(v,!0,C.fC(f),452,479,0,853)
C.kC(v,5,5,470,844,g,1.1)
C.kC(v,28,28,424,798,g,1.6)
C.CS(v,2,2,1,1,g,11)
C.CS(v,478,2,-1,1,g,11)
C.CS(v,2,852,1,-1,g,11)
C.CS(v,478,852,-1,-1,g,11)
return v},
fgB(d,e,f){var w=null,v=B.hq(w,w,A.c7,0,A.e0,854,w,0,3,w,A.c7,480,!1)
C.yF(v,d,e)
C.t0(v,d)
C.kC(v,14,16,452,822,f,1.6)
C.kC(v,20,22,440,810,f,0.8)
return v},
bA2(d,e,f,g){var w,v=C.fC(g)
B.iM(d,!0,v,0,479,0,f-1)
w=854-f
B.iM(d,!0,v,0,479,w,853);--w
B.iM(d,!0,v,0,e-1,f,w)
B.iM(d,!0,v,480-e,479,f,w)},
hVH(d){var w,v,u=4291404327
C.bA2(d,14,16,4279122734)
for(w=10;w<470;w+=14){C.kP(d,w,8,3,u,!0)
C.kP(d,w,846,3,u,!0)}for(v=18;v<836;v+=16){C.kP(d,7,v,3,u,!0)
C.kP(d,473,v,3,u,!0)}return d},
fte(d,e,f,g,h,i,j,k,l,m,n){var w,v,u,t=x.J,s=B.a([new B.ji(e,f),new B.ji(e+g*n,f),new B.ji(e,f+h*n)],t)
B.a26(d,C.fC(m),s)
w=A.o.E(A.k.V(n*0.17),5,8)
v=A.k.V(n*0.78)
s=e+g*w
u=f+h*w
t=B.a([new B.ji(s,u),new B.ji(e+g*v,u),new B.ji(s,f+h*v)],t)
B.a26(d,C.fC(k),t)
t=A.k.V(n*0.39)
C.kP(d,e+g*t,f+h*t,6,l,!0)
if(i){t=n-7
C.kP(d,e+g*t,f+h*3,4,k,!0)
C.kP(d,e+g*3,f+h*t,4,k,!0)}if(j){t=n-4
C.kP(d,e+g*t,f,5,k,!0)
C.kP(d,e,f+h*t,5,k,!0)}},
h3r(d,e,f,g,h,i,j,k,l){var w,v
C.fte(d,k,l,1,1,e,f,g,h,i,j)
w=480-k
C.fte(d,w,l,-1,1,e,f,g,h,i,j)
v=854-l
C.fte(d,k,v,1,-1,e,f,g,h,i,j)
C.fte(d,w,v,-1,-1,e,f,g,h,i,j)},
a1m(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p,o=g-e,n=h-f,m=Math.max(1,A.k.V(Math.sqrt(o*o+n*n)/k))
for(w=i>>>16&255,v=i>>>8&255,u=i&255,t=0;t<=m;++t){s=t/m
r=A.k.V(e+o*s)
q=A.k.V(f+n*s)
p=new Uint8Array(4)
p[0]=w
p[1]=v
p[2]=u
p[3]=255
B.l9(d,!0,A.dg,new B.rb(p),null,A.d_,j,r,q)}},
fsd(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o
for(w=i>>>16&255,v=i>>>8&255,u=i&255,t=0;t<3;++t){s=34+t*12
r=26-t*6
q=e+g*s
p=f+h*s
o=new Uint8Array(4)
o[0]=w
o[1]=v
o[2]=u
o[3]=255
B.kR(d,!0,A.dg,new B.rb(o),null,A.d_,1.4,q,q+g*r,p,p)
o=new Uint8Array(4)
o[0]=w
o[1]=v
o[2]=u
o[3]=255
B.kR(d,!0,A.dg,new B.rb(o),null,A.d_,1.4,q,q,p,p+h*r)}},
hTI(d,e,f,g){var w,v,u,t,s,r,q,p,o=null,n=B.hq(o,o,A.c7,0,A.e0,854,o,0,3,o,A.c7,480,!1)
C.yF(n,d,e)
C.t0(n,d)
C.kC(n,20,20,440,814,f,1.2)
C.fsd(n,0,0,1,1,g)
C.fsd(n,480,0,-1,1,g)
C.fsd(n,0,854,1,-1,g)
C.fsd(n,480,854,-1,-1,g)
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
B.kR(n,!0,A.dg,new B.rb(p),o,A.d_,1.2,240,r,60,q)}return n},
fq5(d,e,f,g,h){var w
C.fwx(d,!0,C.fC(g),13,e,f)
C.fwx(d,!0,C.fC(g),9,e,f)
w=B.a([new B.ji(e,f-4),new B.ji(e+4,f),new B.ji(e,f+4),new B.ji(e-4,f)],x.J)
B.a26(d,C.fC(h),w)},
kP(d,e,f,g,h,i){var w=null,v=f-g,u=e+g,t=f+g,s=e-g,r=B.a([new B.ji(e,v),new B.ji(u,f),new B.ji(e,t),new B.ji(s,f)],x.J)
if(i){B.a26(d,C.fC(h),r)
return}B.kR(d,!0,A.dg,C.fC(h),w,A.d_,1,e,u,v,f)
B.kR(d,!0,A.dg,C.fC(h),w,A.d_,1,u,e,f,t)
B.kR(d,!0,A.dg,C.fC(h),w,A.d_,1,e,s,t,f)
B.kR(d,!0,A.dg,C.fC(h),w,A.d_,1,s,e,f,v)},
ffw(d,e,f,g,h,i,j){var w,v=B.a([new B.ji(e,f),new B.ji(e+g*28,f),new B.ji(e,f+h*28)],x.J)
B.a26(d,C.fC(i),v)
v=e+g*14
w=f+h*14
C.kP(d,v,w,6,j,!0)
C.kP(d,v,w,3,i,!0)},
ffx(d,e,f,g,h){var w=null,v=B.hq(w,w,A.c7,0,A.e0,854,w,0,3,w,A.c7,480,!1)
C.yF(v,d,e)
C.t0(v,d)
C.kC(v,18,18,444,818,f,2)
C.kC(v,26,26,428,802,f,0.9)
if(h!=null)B.iM(v,!0,C.fC(h),28,451,28,34)
C.ffw(v,18,18,1,1,g,f)
C.ffw(v,462,18,-1,1,g,f)
C.ffw(v,18,836,1,-1,g,f)
C.ffw(v,462,836,-1,-1,g,f)
return v},
hWQ(){var w,v=null,u=4294966259,t=4292128567,s=4287326484,r=B.hq(v,v,A.c7,0,A.e0,854,v,0,3,v,A.c7,480,!1)
C.yF(r,u,4294240980)
C.t0(r,u)
C.kC(r,10,12,460,830,t,3.2)
C.kC(r,18,20,444,814,s,1.2)
C.kC(r,24,26,432,802,t,1.8)
C.h3r(r,!0,!1,t,s,4279378237,38,10,12)
for(w=56;w<424;w+=18){C.kP(r,w,16,3,t,!0)
C.kP(r,w,838,3,t,!0)}for(w=56;w<798;w+=22){C.kP(r,16,w,3,t,!0)
C.kP(r,464,w,3,t,!0)}return r},
hWR(){var w,v,u,t=null,s=4294966776,r=4291404327,q=4282000405,p=B.hq(t,t,A.c7,0,A.e0,854,t,0,3,t,A.c7,480,!1)
C.yF(p,s,4294373080)
C.t0(p,s)
C.kC(p,16,18,448,818,r,2.4)
C.kC(p,24,26,432,802,4286209044,1)
w=new C.fhV(p)
for(v=40;v<440;v+=16){w.$4(v,22,1,1)
w.$4(v,832,1,1)}for(u=44;u<810;u+=18){w.$4(22,u,1,1)
w.$4(458,u,-1,1)}C.h3r(p,!1,!0,r,q,q,34,16,18)
return p},
bAJ(d,e,f,g,h,i){B.iM(d,!0,C.fC(i),e,e+g,f,f+h)},
bBA(d,e,f,g,h,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
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
B.kR(d,!1,A.dg,new B.Su(i),null,A.d_,1,e,w,l,l)}},
hXJ(d,e,f,g,h,i){var w,v,u,t,s,r,q
if(i){w=e+g-1
v=0
for(;;){if(!(v<g&&f+v<854))break
u=h[A.o.F(A.o.ao(v,5),6)]
t=f+v
s=Math.min(w,479)
r=new Uint8Array(4)
r[0]=u>>>16&255
r[1]=u>>>8&255
r[2]=u&255
r[3]=255
B.kR(d,!1,A.dg,new B.rb(r),null,A.d_,1,e,s,t,t);++v}return}w=f+g-1
q=0
for(;;){if(!(q<g&&e+q<480))break
u=h[A.o.F(A.o.ao(q,5),6)]
t=e+q
s=Math.min(w,853)
r=new Uint8Array(4)
r[0]=u>>>16&255
r[1]=u>>>8&255
r[2]=u&255
r[3]=255
B.kR(d,!1,A.dg,new B.rb(r),null,A.d_,1,t,t,f,s);++q}},
hXK(d,e){var w,v,u=null,t=B.hq(u,u,A.c7,0,A.e0,854,u,0,3,u,A.c7,480,!1)
for(w=0;w<854;w+=30)for(v=0;v<480;v+=30)C.hXJ(t,v,w,30,D.d_4,(A.o.ao(v,30)+A.o.ao(w,30)&1)===0)
C.bAJ(t,44,44,392,766,d)
C.bBA(t,44,44,392,766,d,e)
C.t0(t,d)
C.kC(t,44,44,392,766,4292128567,2.2)
C.kC(t,50,50,380,754,4279898632,0.8)
return t},
hYQ(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=null
switch(A.o.F(g,4)){case 0:C.kP(d,e,f,7,h,!0)
C.kP(d,e,f,3,h,!1)
break
case 1:w=e-7
v=f-7
u=e+7
t=f+7
B.kR(d,!0,A.dg,C.fC(h),o,A.d_,1.6,w,u,v,t)
B.kR(d,!0,A.dg,C.fC(h),o,A.d_,1.6,u,w,v,t)
break
case 2:for(w=e-8,v=e+8,u=h>>>16&255,t=h>>>8&255,s=h&255,r=-2;r<=2;++r){q=f+r*3
p=new Uint8Array(4)
p[0]=u
p[1]=t
p[2]=s
p[3]=255
B.kR(d,!0,A.dg,new B.rb(p),o,A.d_,1.2,w,v,q,q)}break
default:B.kR(d,!0,A.dg,C.fC(h),o,A.d_,1.5,e-8,e+8,f,f)
B.kR(d,!0,A.dg,C.fC(h),o,A.d_,1.5,e,e,f-8,f+8)
B.l9(d,!0,A.dg,C.fC(h),o,A.d_,2,e,f)}},
hYR(d,e){var w,v,u,t,s=null,r=B.hq(s,s,A.c7,0,A.e0,854,s,0,3,s,A.c7,480,!1)
B.iM(r,!0,C.fC(4284103196),0,479,0,853)
for(w=0,v=18;v<854;v+=32)for(u=18;u<480;u+=32,w=t){t=w+1
C.hYQ(r,u,v,w,4292391514)}C.bAJ(r,46,46,388,762,d)
C.bBA(r,46,46,388,762,d,e)
C.t0(r,d)
C.kC(r,46,46,388,762,4291404327,1.8)
return r},
hke(d,e,f,g){C.fwx(d,!0,C.fC(g),16,e,f)
C.fwx(d,!0,C.fC(g),11,e,f)
C.kP(d,e,f,6,g,!0)
B.kR(d,!0,A.dg,C.fC(g),null,A.d_,1.3,e-14,e+14,f,f)
B.kR(d,!0,A.dg,C.fC(g),null,A.d_,1.3,e,e,f-14,f+14)},
hTA(d,e){var w,v=null,u=4283051028,t=4292128567,s=B.hq(v,v,A.c7,0,A.e0,854,v,0,3,v,A.c7,480,!1)
B.iM(s,!0,C.fC(4280948752),0,479,0,853)
B.iM(s,!0,C.fC(u),0,479,0,78)
B.iM(s,!0,C.fC(u),0,479,776,853)
for(w=28;w<460;w+=44){C.hke(s,w,39,t)
C.hke(s,w,815,t)}C.bAJ(s,38,92,404,670,d)
C.bBA(s,38,92,404,670,d,e)
C.t0(s,d)
C.kC(s,38,92,404,670,t,1.8)
C.kC(s,45,99,390,656,4287322667,0.8)
return s},
hYh(d,e,f,g){var w,v,u,t,s,r,q,p,o
for(w=f-4,v=x.J,u=g>>>16&255,t=g>>>8&255,s=g&255,r=-2;r<=2;++r){q=e+r*9
p=B.a([new B.ji(e,f),new B.ji(q-5,w),new B.ji(q,f-(18-Math.abs(r)*3)),new B.ji(q+5,w)],v)
o=new Uint8Array(4)
o[0]=u
o[1]=t
o[2]=s
o[3]=255
B.a26(d,new B.rb(o),p)}B.l9(d,!0,A.dg,C.fC(4292128567),null,A.d_,3,e,f)},
hYi(d,e){var w,v,u,t,s=null,r=4279196764,q=B.hq(s,s,A.c7,0,A.e0,854,s,0,3,s,A.c7,480,!1)
C.yF(q,4278931279,4292330394)
for(w=8;w<=34;w+=4){v=new Uint8Array(4)
v[0]=8
v[1]=56
v[2]=56
v[3]=255
B.kR(q,!0,A.dg,new B.rb(v),s,A.d_,1.1,w,w,0,853)
v=479-w
u=new Uint8Array(4)
u[0]=8
u[1]=56
u[2]=56
u[3]=255
B.kR(q,!0,A.dg,new B.rb(u),s,A.d_,1.1,v,v,0,853)}B.iM(q,!0,C.fC(r),0,479,0,70)
B.iM(q,!0,C.fC(r),0,479,798,853)
for(t=0;t<5;++t)C.hYh(q,70+t*85,48,4292128567)
C.bAJ(q,48,78,384,712,d)
C.bBA(q,48,78,384,712,d,e)
C.t0(q,d)
C.kC(q,48,78,384,712,4291404327,1.6)
return q},
i1G(d,e){var w,v,u,t=null,s=4279970378,r=B.hq(t,t,A.c7,0,A.e0,854,t,0,3,t,A.c7,480,!1)
B.iM(r,!0,C.fC(s),0,479,0,853)
for(w=10;w<854;w+=18)for(v=10;v<480;v+=18){C.kP(r,v,w,6,4293449648,!1)
u=new Uint8Array(4)
u[0]=232
u[1]=215
u[2]=176
u[3]=255
B.l9(r,!0,A.dg,new B.rb(u),t,A.d_,1,v,w)}C.bAJ(r,40,40,400,774,d)
C.bBA(r,40,40,400,774,d,e)
C.t0(r,d)
C.kC(r,40,40,400,774,4291058750,2)
C.kC(r,48,48,384,758,s,0.8)
return r},
l_:function l_(d,e){this.a=d
this.b=e},
fGF:function fGF(d){this.a=d},
fGE:function fGE(d){this.a=d},
fhV:function fhV(d){this.a=d},
fHi(d){var w,v=d.a
A:{if("gazette"===v){w="The NGMY Gazette"
break A}if("chronicle"===v){w="The NGMY Chronicle"
break A}if("times"===v){w="The NGMY Times"
break A}if("daily"===v){w="The NGMY Daily"
break A}if("tabloid"===v){w="The Big NGMY"
break A}if("modern"===v){w="NGMY Digest"
break A}if("midnight"===v){w="The Midnight NGMY"
break A}w="The NGMY Herald"
break A}return w},
hYK(d){var w=d.length
if(w>3&&d[0]===137&&d[1]===80)return"image/png"
if(w>11&&d[8]===87&&d[9]===69)return"image/webp"
return"image/jpeg"},
h2_(d){var w,v,u,t=null,s=A.a.cu(d,"{"),r=A.a.oM(d,"}")
if(s<0||r<=s)return t
try{w=A.X.aN(0,Aj.ah9(A.a.aq(d,s,r+1)),t)
v=x.f.b(w)?B.a2(w,x.N,x.z):t
return v}catch(u){return t}},
afD(d,e){var w=0,v=B.j(x.N),u,t,s,r,q,p,o,n
var $async$afD=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(B.vv(null,""),$async$afD)
case 3:n=g
if(A.a.i(n).length===0)throw B.W("AI is not available right now. Please try again later.")
t=B.nb(n)
if(e==null)s=A.hM
else{r=C.hYK(e)
s=B.a([new B.a0k(A.cJ.gct().aM(e),r)],x.aD)}q=null,p=0
case 4:if(!(p<2)){w=6
break}w=7
return B.b(B.r2(t,d,s,"news",E.FR),$async$afD)
case 7:o=g
r=o.b
if(r!=null&&A.a.i(r).length!==0){u=r
w=1
break}q=o.a
case 5:++p
w=4
break
case 6:throw B.W(q!=null&&B.Lj(q)?"No internet connection. Try again when you are online.":"The AI could not do that just now. Try again.")
case 1:return B.h(u,v)}})
return B.i($async$afD,v)},
bDc(d){return C.iaR(d)},
iaR(d){var w=0,v=B.j(x.b6),u,t=2,s=[],r,q,p,o,n,m
var $async$bDc=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
r='You are a professional Swahili newspaper editor and journalist: a native speaker from Tanzania or Kenya whose writing every Swahili reader finds natural, warm and correct.\nThe newspaper page below was written or translated by a machine, so it may sound stiff, foreign or word-for-word. Rewrite EVERY field so it reads as if a skilled native Swahili journalist wrote it first: natural, clear, correct and professional. Fix wrong grammar (noun classes, verb agreement, tenses), odd or invented words and any English sentence structure. Keep every fact, name and number and do not add facts. Keep the same fields and the same number of paragraphs. Write people\'s names with normal capitals, except KB PABLO QR.\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n\nPage: '+A.X.ap(d.ag(),null)+'\nReply with JSON only, with exactly the same fields: {"paper":"newspaper name","category":"ONE of COMMUNITY, TECHNOLOGY, BUSINESS, EDUCATION, WORLD NEWS, FEATURE","headline":"...","subhead":"...","byline":"By ...","caption":"one sentence about the picture","body":["paragraph 1","paragraph 2","paragraph 3","paragraph 4"],"pullQuote":"a short line from the story","sidebarTitle":"Did you know?","sidebarText":"two short sentences"}\n'
w=7
return B.b(C.afD(r,null),$async$bDc)
case 7:q=f
p=C.h2_(q)
if(p==null){u=d
w=1
break}o=d.aDe(p)
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
return B.i($async$bDc,v)},
hoa(d){var w,v=F.h4w(d)
v=B.aL(v,"book","newspaper")
if(F.a2p(d)!=="sw"){w=B.af("swahili|kiswahili",!1,!1,!1,!1)
w=w.b.test(d)}else w=!0
w=w?'SWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n':""
return"- Write like a real newspaper: a strong headline (max 12 words), a subhead (max 25 words), a byline, then 4 or 5 paragraphs, about 330 to 400 words in all. Plain text only: no markdown, no emojis, no lists.\n- Use ONLY the facts in the knowledge above. Never invent numbers, prices, dates, awards, places or quotes. Do not put made-up words in anyone's mouth.\n- KB PABLO QR is the Founder, President and CEO of NGMY. Always write his name in capital letters.\n- Never mention secret or admin details, passwords or the price list.\n- STYLE: write like an experienced human newspaper journalist in the style of a quality wire service (Associated Press, Reuters): polished, precise, natural and professional. Open with the most important fact. Use the active voice, concrete nouns and strong verbs. Mix short and longer sentences. Plain, grown-up words.\n- NEVER sound like an AI. Do not use: delve, tapestry, testament, beacon, realm, landscape, journey, game-changer, groundbreaking, revolutionize, unlock, empower, seamless, vibrant, bustling, in today's fast-paced world, it is worth noting, not just X but Y, whether you are X or Y. No exclamation marks, no rhetorical questions, no lists of three adjectives, no filler, no hype, no dashes for drama. Every sentence must say something real.\n- Check spelling, grammar and punctuation. Names are written with normal capitals, except KB PABLO QR.\n"+v+w},
fLh(d,e,f,g){return C.icK(d,e,f,g)},
icK(d,e,f,g){var w=0,v=B.j(x.b6),u,t,s,r,q,p,o,n,m
var $async$fLh=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:o=C.fHi(g)
n=A.a.i(f)
if(n.length===0)n="Choose the most interesting true story about NGMY from what you know, and write it. Vary it: it can be about the app, the Civic Registry, the Advisors, the studios, or the CEO."
t=C.hrL()
s=e==null?"There is no picture yet: write the caption as a short line about the story.":"A PICTURE IS ATTACHED. Look at it. Mention what is really visible in the caption and weave it into the story. Do not say who the people in it are unless the owner told you."
m=C
w=3
return B.b(C.afD('You are the editor-in-chief of a newspaper called "'+o+'". Write its front-page story in the voice of '+g.at+".\n"+t+'\n\nWHAT THE OWNER ASKED FOR: """'+n+'"""\n'+s+"\nRules:\n"+C.hoa(n)+'\nReply with JSON only, in exactly this shape: {"paper":"newspaper name","category":"ONE of COMMUNITY, TECHNOLOGY, BUSINESS, EDUCATION, WORLD NEWS, FEATURE","headline":"...","subhead":"...","byline":"By ...","caption":"one sentence about the picture","body":["paragraph 1","paragraph 2","paragraph 3","paragraph 4"],"pullQuote":"a short line from the story","sidebarTitle":"Did you know?","sidebarText":"two short sentences"}\n',e),$async$fLh)
case 3:r=m.h2_(i)
if(r==null)throw B.W(y.S)
q=new C.zN(o,"NGMY NEWS","","","By the NGMY Newsroom","",A.Z,"","","").aDe(r)
t=q.r
if(t.length===0)throw B.W("The AI did not write a story. Try again.")
s=n+" "+A.d.aH(t," ")
if(F.a2p(s)!=="sw"){p=B.af("swahili|kiswahili",!1,!1,!1,!1)
s=p.b.test(s)}else s=!0
u=s&&F.a2p(A.d.aH(t," "))==="sw"?C.bDc(q):q
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fLh,v)},
bCH(d,e,f,g,h){return C.i8r(d,e,f,g,h)},
i8r(d,e,f,g,h){var w=0,v=B.j(x.gX),u,t,s,r,q,p,o,n,m,l,k,j
var $async$bCH=B.e(function(i,a0){if(i===1)return B.f(a0,v)
for(;;)switch(w){case 0:l=B.a([],x.s)
k=e.length
k=k>6?A.d.fJ(e,k-6):e
t=k.length
s=0
for(;s<k.length;k.length===t||(0,B.M)(k),++s){r=k[s]
l.push(r.a+": "+r.b)}q=A.d.aH(l,"\n")
l=C.hrL()
k=A.X.ap(d.ag(),null)
t=q.length===0?"":"EARLIER IN THIS CONVERSATION:\n"+q+"\n"
j=C
w=3
return B.b(C.afD('You are the editor-in-chief of the newspaper "'+d.a+'", written in the voice of '+h.at+". The owner is talking to you about the page below. They may ask a question about NGMY or the page (just answer it), or ask you to change, add, shorten, rewrite or fix something (change ONLY that).\n"+l+"\n\nTHE PAGE NOW: "+k+"\n"+t+'\nTHE OWNER SAYS: """'+f+'"""\nRules:\n'+C.hoa(f)+'\n- Keep every part they did not mention exactly as it is. Keep the story about 330 to 400 words unless they ask for another length.\nReply with JSON only: {"message":"one or two friendly sentences: your answer, or what you changed","changes":{ ...only the fields you change, using the same names as the page... }}. For a pure question leave "changes" empty.\n',g),$async$bCH)
case 3:p=j.h2_(a0)
if(p==null)throw B.W(y.S)
o=p.h(0,"changes")
if(x.f.b(o)&&J.cK(o)){n=d.aDe(B.a2(o,x.N,x.z))
m=A.X.ap(n.ag(),null)!==A.X.ap(d.ag(),null)}else{n=d
m=!1}w=m&&F.a2p(A.d.aH(n.r," "))==="sw"?4:5
break
case 4:w=6
return B.b(C.bDc(n),$async$bCH)
case 6:n=a0
case 5:l=p.h(0,"message")
if(l==null)l=m?"Done.":"Okay."
u=new C.a87(A.a.i(B.w(l)),n,m)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bCH,v)},
a87:function a87(d,e,f){this.a=d
this.b=e
this.c=f},
ifz(d,e){return B.a4(d,!1).cg(B.e_(new C.fSo(e),!0,null,x.H))},
fSo:function fSo(d){this.a=d},
W6:function W6(d,e){this.c=d
this.a=e},
aED:function aED(d,e,f,g,h,i,j,k){var _=this
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
elP:function elP(d){this.a=d},
elO:function elO(){},
elQ:function elQ(d){this.a=d},
elN:function elN(d,e){this.a=d
this.b=e},
elR:function elR(){},
elr:function elr(d,e){this.a=d
this.b=e},
eln:function eln(d,e){this.a=d
this.b=e},
ely:function ely(d){this.a=d},
elz:function elz(d,e){this.a=d
this.b=e},
elA:function elA(d){this.a=d},
elt:function elt(d,e){this.a=d
this.b=e},
elu:function elu(d,e){this.a=d
this.b=e},
elv:function elv(d,e){this.a=d
this.b=e},
elw:function elw(d){this.a=d},
elx:function elx(d){this.a=d},
els:function els(d,e){this.a=d
this.b=e},
elp:function elp(d){this.a=d},
elq:function elq(d){this.a=d},
elG:function elG(d){this.a=d},
elH:function elH(d){this.a=d},
elF:function elF(d){this.a=d},
elI:function elI(d,e){this.a=d
this.b=e},
elE:function elE(d,e){this.a=d
this.b=e},
elJ:function elJ(d){this.a=d},
elD:function elD(d){this.a=d},
elK:function elK(d){this.a=d},
elC:function elC(d){this.a=d},
elL:function elL(d,e){this.a=d
this.b=e},
elB:function elB(d,e){this.a=d
this.b=e},
elM:function elM(d){this.a=d},
elo:function elo(d,e){this.a=d
this.b=e},
fGe(){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o
var $async$fGe=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if($.hlL){w=1
break}r=new C.fGf()
t=4
q=x.s
w=7
return B.b(B.iP(B.a([r.$2("NgmyBlackletter",B.a(["UnifrakturCook-Bold.ttf"],q)),r.$2("NgmyOldStandard",B.a(["OldStandard-Regular.ttf","OldStandard-Bold.ttf","OldStandard-Italic.ttf"],q)),r.$2("NgmyAbril",B.a(["AbrilFatface-Regular.ttf"],q))],x.fG),x.H),$async$fGe)
case 7:$.hlL=!0
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
return B.i($async$fGe,v)},
bD3(d){return A.HH[B.mI(d)-1]+", "+A.pg[B.bL(d)-1]+" "+B.bV(d)+", "+B.bC(d)},
i0K(d){var w,v,u,t,s
for(w="",v=0;v<13;++v){u=D.dqo[v]
t=u.a
s=u.b
while(d>=t){w+=s
d-=t}}return w},
h4V(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j={},i=x.s,h=B.a([],i)
for(w=0;w<d.length;++w){v=A.a.fD(d[w],B.af("[ \\t]+",!0,!1,!1,!1))
A.d.v(h,new B.Z(v,new C.fEx(),B.U(v).k("Z<1>")))
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
continue}o=new C.fEz(j,h)
n=new C.fEy(s,o,e)
m=p-v
for(l=0;l<m;){k=A.o.ao(l+m+1,2)
if(n.$1(k))l=k
else m=k-1}u.push(l===0?"":J.iZ(o.$1(l)))
j.a+=l}return u},
h1J(d,e){var w=new C.fhu()
return A.d.cI(e,0,new C.fhs(w))>=A.d.cI(d,0,new C.fht(w))},
hiT(d){var w,v,u=new B.aF($.S().r,A.ag,null,null,B.a([],x.v))
u.D(new B.aX(46,0))
w=d.a
u.D(new B.aq(w,0))
v=d.b
u.D(new B.aq(w,v-46))
u.D(new B.aq(w-46,v))
u.D(new B.aq(0,v))
u.D(new B.aq(0,46))
u.D(new B.br())
return u},
zN:function zN(d,e,f,g,h,i,j,k,l,m){var _=this
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
cg9:function cg9(d){this.a=d},
cg7:function cg7(){},
cg8:function cg8(){},
tv:function tv(d,e){this.a=d
this.b=e},
BH:function BH(d,e){this.a=d
this.b=e},
lp:function lp(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var _=this
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
fGf:function fGf(){},
fEx:function fEx(){},
fEz:function fEz(d,e){this.a=d
this.b=e},
fEy:function fEy(d,e,f){this.a=d
this.b=e
this.c=f},
fhu:function fhu(){},
fhv:function fhv(){},
fhs:function fhs(d){this.a=d},
fht:function fht(d){this.a=d},
b1p:function b1p(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cga:function cga(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cgb:function cgb(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
cgc:function cgc(d){this.a=d},
bd3:function bd3(d){this.a=d},
bd2:function bd2(d,e){this.b=d
this.a=e},
buF:function buF(d){this.a=d},
b9z:function b9z(d,e){this.b=d
this.a=e},
bs9:function bs9(d,e){this.b=d
this.a=e},
htO(d,e){return B.a4(d,!1).cg(B.e_(new C.fSr(e,null),!0,null,x.E))},
fSr:function fSr(d,e){this.a=d
this.b=e},
W7:function W7(d,e,f){this.c=d
this.d=e
this.a=f},
aEF:function aEF(){var _=this
_.d=null
_.e=0
_.f=1
_.w=_.r=0.5
_.x=1
_.y=!1
_.c=_.a=null},
emm:function emm(){},
emn:function emn(d){this.a=d},
eml:function eml(d,e){this.a=d
this.b=e},
em9:function em9(d){this.a=d},
ema:function ema(d){this.a=d},
emg:function emg(d){this.a=d},
emh:function emh(d,e){this.a=d
this.b=e},
eme:function eme(d){this.a=d},
emf:function emf(d,e,f){this.a=d
this.b=e
this.c=f},
emb:function emb(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
emi:function emi(d,e){this.a=d
this.b=e},
emd:function emd(d,e){this.a=d
this.b=e},
emj:function emj(d){this.a=d},
emc:function emc(d,e){this.a=d
this.b=e},
emk:function emk(d,e){this.a=d
this.b=e},
bcA:function bcA(d,e,f){this.b=d
this.c=e
this.a=f},
ifF(d){return B.a4(d,!1).cg(B.e_(new C.fSH(),!0,null,x.I))},
bAu(d,e){var w,v,u,t,s,r,q=B.c2(20,0,!1,x.gR)
for(w=0;w<4;++w)for(v=w*5,u=v+4,t=0;t<5;++t){for(s=0,r=0;r<4;++r)s+=d[v+r]*e[r*5+t]
if(t===4)s+=d[u]
q[v+t]=s}return q},
h38(d,e,f,g){return B.a([d,0,0,0,e,0,d,0,0,f,0,0,d,0,g,0,0,0,1,0],x.x)},
fSH:function fSH(){},
a0b:function a0b(d){this.a=d},
oG:function oG(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
aG2:function aG2(d,e,f,g,h,i,j,k,l){var _=this
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
_.aC=_.aL=_.aE=_.aA=_.Z=_.b8=_.bj=_.y2=0
_.b1=null
_.b0=0.25
_.be=null
_.bL=0.5
_.aI=1
_.c7=_.bG=_.bi=0
_.cL=_.c5=!1
_.c=_.a=null},
eVk:function eVk(d){this.a=d},
eUc:function eUc(d,e){this.a=d
this.b=e},
eUA:function eUA(d,e){this.a=d
this.b=e},
eUK:function eUK(d){this.a=d},
eTW:function eTW(d){this.a=d},
eTX:function eTX(d){this.a=d},
eTU:function eTU(d){this.a=d},
eTV:function eTV(d){this.a=d},
eUt:function eUt(d,e){this.a=d
this.b=e},
eUu:function eUu(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eUG:function eUG(d,e,f){this.a=d
this.b=e
this.c=f},
eUF:function eUF(d,e){this.a=d
this.b=e},
eUH:function eUH(d,e){this.a=d
this.b=e},
eUE:function eUE(d,e){this.a=d
this.b=e},
eUJ:function eUJ(d,e,f){this.a=d
this.b=e
this.c=f},
eUI:function eUI(d,e){this.a=d
this.b=e},
eTM:function eTM(d){this.a=d},
eTN:function eTN(d){this.a=d},
eTO:function eTO(d){this.a=d},
eTL:function eTL(){},
eTP:function eTP(d,e){this.a=d
this.b=e},
eTK:function eTK(d,e){this.a=d
this.b=e},
eTR:function eTR(){},
eTQ:function eTQ(d,e){this.a=d
this.b=e},
eTJ:function eTJ(d,e){this.a=d
this.b=e},
eTG:function eTG(d,e){this.a=d
this.b=e},
eTS:function eTS(d){this.a=d},
eTI:function eTI(d,e){this.a=d
this.b=e},
eTT:function eTT(d){this.a=d},
eTH:function eTH(d,e){this.a=d
this.b=e},
eV9:function eV9(d,e){this.a=d
this.b=e},
eVg:function eVg(d){this.a=d},
eVh:function eVh(d,e){this.a=d
this.b=e},
eVi:function eVi(){},
eVa:function eVa(d,e){this.a=d
this.b=e},
eV8:function eV8(d,e){this.a=d
this.b=e},
eVb:function eVb(d,e){this.a=d
this.b=e},
eV7:function eV7(d,e){this.a=d
this.b=e},
eVc:function eVc(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eV6:function eV6(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eVd:function eVd(d){this.a=d},
eVe:function eVe(d,e){this.a=d
this.b=e},
eVf:function eVf(d){this.a=d},
eV5:function eV5(d){this.a=d},
eUT:function eUT(d){this.a=d},
eUU:function eUU(d){this.a=d},
eUS:function eUS(d,e){this.a=d
this.b=e},
eUN:function eUN(d,e){this.a=d
this.b=e},
eUV:function eUV(d){this.a=d},
eUY:function eUY(d){this.a=d},
eUR:function eUR(d){this.a=d},
eUZ:function eUZ(d){this.a=d},
eV_:function eV_(d){this.a=d},
eV0:function eV0(d){this.a=d},
eV1:function eV1(d){this.a=d},
eUQ:function eUQ(d){this.a=d},
eV2:function eV2(d){this.a=d},
eUP:function eUP(d){this.a=d},
eV3:function eV3(d,e){this.a=d
this.b=e},
eUO:function eUO(d,e){this.a=d
this.b=e},
eV4:function eV4(d){this.a=d},
eUW:function eUW(d){this.a=d},
eUX:function eUX(d){this.a=d},
eUx:function eUx(d){this.a=d},
eUw:function eUw(d){this.a=d},
eUy:function eUy(d,e){this.a=d
this.b=e},
eUv:function eUv(d,e){this.a=d
this.b=e},
eUz:function eUz(d){this.a=d},
eUp:function eUp(d){this.a=d},
eUo:function eUo(d){this.a=d},
eUq:function eUq(d){this.a=d},
eUn:function eUn(d){this.a=d},
eUr:function eUr(d,e){this.a=d
this.b=e},
eUm:function eUm(d,e){this.a=d
this.b=e},
eUl:function eUl(d,e){this.a=d
this.b=e},
eU3:function eU3(d){this.a=d},
eU4:function eU4(d){this.a=d},
eU5:function eU5(d){this.a=d},
eU6:function eU6(d){this.a=d},
eU7:function eU7(d){this.a=d},
eU8:function eU8(d){this.a=d},
eU9:function eU9(d){this.a=d},
eUa:function eUa(d){this.a=d},
eUb:function eUb(d){this.a=d},
eTp:function eTp(d){this.a=d},
eTq:function eTq(d){this.a=d},
eTr:function eTr(d){this.a=d},
eTs:function eTs(d){this.a=d},
eTt:function eTt(d){this.a=d},
eTo:function eTo(d){this.a=d},
eTu:function eTu(d){this.a=d},
eTv:function eTv(d){this.a=d},
eTY:function eTY(d){this.a=d},
eTZ:function eTZ(d){this.a=d},
eU_:function eU_(d){this.a=d},
eU0:function eU0(d){this.a=d},
eU1:function eU1(d){this.a=d},
eTz:function eTz(d){this.a=d},
eTA:function eTA(d){this.a=d},
eTB:function eTB(d){this.a=d},
eTC:function eTC(d){this.a=d},
eTD:function eTD(d){this.a=d},
eTy:function eTy(d){this.a=d},
eTE:function eTE(d){this.a=d},
eTx:function eTx(d){this.a=d},
eTF:function eTF(d){this.a=d},
eTw:function eTw(d){this.a=d},
eUs:function eUs(d){this.a=d},
eUk:function eUk(d){this.a=d},
eUg:function eUg(d){this.a=d},
eUf:function eUf(d){this.a=d},
eUh:function eUh(d,e){this.a=d
this.b=e},
eUe:function eUe(d,e){this.a=d
this.b=e},
eUi:function eUi(d,e){this.a=d
this.b=e},
eUd:function eUd(d,e){this.a=d
this.b=e},
eUj:function eUj(d){this.a=d},
eUD:function eUD(d){this.a=d},
eUC:function eUC(d,e,f){this.a=d
this.b=e
this.c=f},
eUB:function eUB(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eUM:function eUM(d,e){this.a=d
this.b=e},
eUL:function eUL(d,e){this.a=d
this.b=e},
eU2:function eU2(d){this.a=d},
eVj:function eVj(d){this.a=d},
bga:function bga(d,e){this.b=d
this.a=e},
ib1(d){var w=A.a.i(d).length
if(w<=40)return 66
if(w<=80)return 54
if(w<=140)return 44
if(w<=220)return 36
return 30},
ib2(d,e){var w,v,u,t,s,r,q,p,o,n=B.af("\\S+",!0,!1,!1,!1).l8(0,d),m=B.C(n,B.a6(n).k("K.E"))
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
t=w.a+=A.a.aq(d,v,n)
p=m[r].b
p=A.a.aq(d,n,p.index+p[0].length)
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
v=t.index+t[0].length}n=w.a=n+A.a.b7(d,v)
return n.charCodeAt(0)==0?n:n},
bB4(){var w=$.bAc,v=$.QK
$.QK=v+1
return w+"_"+v},
ig(d,e,f,g,h,i,j){return C.es(A.bi,!1,4279310375,A.aF,"",i,24,A.bp,A.a7,"",h,C.bB4(),null,"","",0,!1,"",j,d,i,0,"",0,0,"",D.cl,D.f8,g,e,f)},
o5(d,e,f,g){var w=f*9
return C.ig(D.eR,d-f/2,e-w/32,f,w/16,g,0)},
hVf(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=4279310375
switch(d.a){case 0:w=B.a([],x.u)
for(v=[0.12,0.26,0.4,0.54,0.68,0.82,0.94],u=e&16777215,t=u|855638016,s=0;s<7;++s){r=v[s]
q=$.bAc
p=$.QK
$.QK=p+1
w.push(new C.eN(q+"_"+p,D.f8,0,r,1,0.0016,"",24,A.a7,A.bp,A.aF,k,A.bi,null,D.bh,t,t,0,0,!1,"",0,D.cl,0,"","","","","",!1,0))}for(v=[0.18,0.5,0.82],t=u|570425344,s=0;s<3;++s){o=v[s]
q=$.bAc
p=$.QK
$.QK=p+1
w.push(new C.eN(q+"_"+p,D.f8,o,0,0.004,1,"",24,A.a7,A.bp,A.aF,k,A.bi,null,D.bh,t,t,0,0,!1,"",0,D.cl,0,"","","","","",!1,0))}w.push(C.o5(0.88,0.1,0.5,f&16777215|855638016))
w.push(C.o5(0.1,0.92,0.6,u|704643072))
return w
case 1:w=e&16777215
v=(w|2852126720)>>>0
u=f&16777215
t=(u|2852126720)>>>0
return B.a([C.ig(D.bh,0.08,0.08,0.5,0.003,v,0),C.ig(D.bh,0.58,0.08,0.004,0.06,v,0),C.ig(D.bh,0.58,0.14,0.34,0.003,v,0),C.ig(D.bh,0.92,0.14,0.004,0.08,(w|2281701376)>>>0,0),C.ig(D.bh,0.08,0.8,0.004,0.14,t,0),C.ig(D.bh,0.08,0.94,0.6,0.003,t,0),C.o5(0.58,0.08,0.05,e),C.o5(0.92,0.22,0.05,e),C.o5(0.08,0.8,0.05,f),C.o5(0.68,0.94,0.05,f),C.o5(0.9,0.9,0.55,u|570425344)],x.u)
case 2:w=e&16777215
v=f&16777215
return B.a([C.ig(D.lg,0.62,0.04,0.34,0.2,w|855638016,0.2),C.ig(D.lg,0.02,0.74,0.42,0.24,v|771751936,-0.15),C.ig(D.lg,0.7,0.8,0.22,0.12,w|1140850688,0),C.ig(D.lg,0.05,0.05,0.16,0.09,v|1426063360,0)],x.u)
case 3:w=e&16777215
v=f&16777215
return B.a([C.o5(0.5,0.5,1.5,w|335544320),C.o5(0.5,0.5,1.15,w|402653184),C.o5(0.5,0.5,0.8,v|436207616),C.o5(0.95,0.05,0.4,v|855638016),C.o5(0.05,0.97,0.5,w|704643072)],x.u)
case 4:w=e&16777215
v=f&16777215
return B.a([C.o5(0.85,0.08,0.7,w|1140850688),C.o5(0.1,0.35,0.5,v|855638016),C.o5(0.9,0.62,0.55,v|771751936),C.o5(0.15,0.95,0.8,w|939524096)],x.u)
case 5:w=e&16777215
v=f&16777215
return B.a([C.ig(D.bh,-0.1,0.7,1.2,0.06,w|671088640,-0.04),C.ig(D.bh,-0.1,0.78,1.2,0.07,v|872415232,0.035),C.ig(D.bh,-0.1,0.86,1.2,0.08,w|1073741824,-0.03),C.ig(D.bh,-0.1,0.94,1.2,0.1,v|1426063360,0.02),C.o5(0.85,0.12,0.3,v|855638016)],x.u)
case 6:w=e&16777215
return B.a([C.o5(0.5,0.2,0.65,(w|3422552064)>>>0),C.o5(0.5,0.2,0.95,w|855638016),C.ig(D.bh,-0.05,0.84,1.1,0.2,2570782564,-0.02),C.ig(D.bh,-0.05,0.9,1.1,0.14,3139312459,0.02)],x.u)
case 7:w=e&16777215
return B.a([C.ig(D.jY,-0.1,0.78,0.7,0.2,w|1426063360,0),C.ig(D.jY,0.35,0.74,0.8,0.24,f&16777215|1711276032,0),C.ig(D.jY,0.15,0.86,0.6,0.14,1712265002,0),C.o5(0.82,0.1,0.22,(w|2852126720)>>>0)],x.u)
case 8:w=B.a([],x.u)
for(n=0;n<16;++n){v=D.d0B[n]
u=A.o.F(n,3)===0
t=u?0.035:0.02
q=(n&1)===0?e:f
q=((u?255:170)<<24|q&16777215)>>>0
p=t*9
m=$.bAc
l=$.QK
$.QK=l+1
w.push(new C.eN(m+"_"+l,D.f8,v.a-t/2,v.b-p/32,t,p/16,"",24,A.a7,A.bp,A.aF,k,A.bi,null,D.eR,q,q,0,0,!1,"",0,D.cl,0,"","","","","",!1,0))}w.push(C.o5(0.85,0.12,0.35,f&16777215|570425344))
return w
case 9:w=e&16777215
v=f&16777215|570425344
return B.a([C.ig(D.jY,0.35,-0.1,0.3,0.62,w|855638016,0),C.ig(D.jY,0.05,-0.1,0.3,0.55,v,-0.5),C.ig(D.jY,0.65,-0.1,0.3,0.55,v,0.5),C.o5(0.5,0.04,0.45,w|1711276032)],x.u)
case 10:w=(f&16777215|2281701376)>>>0
return B.a([C.ig(D.bh,0.06,0.04,0.88,0.002,e,0),C.ig(D.bh,0.06,0.96,0.88,0.002,e,0),C.ig(D.bh,0.06,0.04,0.004,0.92,e,0),C.ig(D.bh,0.936,0.04,0.004,0.92,e,0),C.ig(D.bh,0.09,0.07,0.82,0.001,w,0),C.ig(D.bh,0.09,0.93,0.82,0.001,w,0)],x.u)
case 11:w=e&16777215
return B.a([C.ig(D.jZ,-0.1,0.05,0.7,0.12,w|855638016,-0.1),C.ig(D.jZ,0.45,0.78,0.7,0.1,f&16777215|1073741824,-0.1),C.ig(D.jZ,-0.1,0.9,0.6,0.06,w|1426063360,-0.1)],x.u)
case 12:w=f&16777215
v=e&16777215
return B.a([C.ig(D.bh,0,0,0.3,0.09,w|1140850688,0),C.ig(D.bh,0.7,0.9,0.3,0.1,v|1426063360,0),C.ig(D.bh,0.82,0.04,0.12,0.07,w|771751936,0),C.ig(D.bh,0.04,0.82,0.18,0.08,v|855638016,0)],x.u)
case 13:w=e&16777215
v=w|1140850688
u=f&16777215|1140850688
return B.a([C.ig(D.eR,0.62,0.02,0.5,0.16,v,0.6),C.ig(D.eR,0.78,0.12,0.4,0.12,u,0.9),C.ig(D.eR,-0.12,0.8,0.5,0.16,u,-0.6),C.ig(D.eR,-0.05,0.9,0.4,0.12,v,-0.9),C.o5(0.9,0.9,0.3,w|855638016)],x.u)
case 14:w=f&16777215|1711276032
return B.a([C.ig(D.bh,0.09,0.12,0.16,0.006,e,0),C.ig(D.bh,0.05,0.03,0.9,0.001,w,0),C.ig(D.bh,0.05,0.97,0.9,0.001,w,0)],x.u)}},
i7u(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3){var w,v,u,t,s,r,q,p,o,n=4279310375,m=4280640491,l=4280172719
$.bAc=j
$.QK=0
w=A.a.i(a6)
if(w.length===0)w=d.y
v=A.a.i(f)
u=b1==null?d.x:b1
t=new C.fBW()
s=b3?0:d.e
r=b3?0:d.f
q=B.a([],x.u)
if(g!=null&&g.length!==0)q.push(C.es(A.bi,!1,n,A.aF,"ngmy_quote_background",m,24,A.bp,A.a7,"",1,C.bB4(),g,"","",0,!1,"",0,D.bh,l,2,"",0,0,"",D.cl,D.lK,1,0,0))
if(a9)A.d.v(q,C.hVf(d.d,d.r,d.w))
if(a7)q.push(t.$9$align$weight("\u201c",0.08,A.k.E(a8-0.13,0,1),0.84,0.1,200,d.r,e,A.u))
p=B.af("[*~^]",!0,!1,!1,!1)
p=C.ib1(B.aL(w,p,""))
o=A.a.t(w,B.af("[*^]",!0,!1,!1,!1))?0.85:1
q.push(new C.fBV(a8,h,k,e,b2,i).$3(w,p*b0*o,u))
if(v.length!==0)q.push(t.$10$align$style$weight("\u2014 "+v,0.09,A.k.E(a8+0.39,0,0.9),0.82,0.05,30,(u&16777215|3707764736)>>>0,e,A.cD,A.a7))
p=u&16777215
q.push(t.$8$weight("NGMY",0.3,0.925,0.4,0.028,22,(p|3003121664)>>>0,A.u))
q.push(t.$8$weight("New Global Movement for Youth",0.1,0.96,0.8,0.025,14,(p|2566914048)>>>0,A.a7))
if(a0!=null&&a0.length!==0)q.push(C.es(A.bi,!1,n,A.aF,"ngmy_quote_logo",m,24,A.bp,A.a7,a1,a3*9/16,C.bB4(),a0,"","",0,!1,a2,0,D.bh,l,2,"",0,0,"",D.cl,D.lK,a3,a4,a5))
return C.rF(s,r,0,0,q,j+"_slide",D.qw,"","","",D.dh)},
rE:function rE(d,e){this.a=d
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
fBW:function fBW(){},
fBV:function fBV(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
hLi(d){var w,v,u,t,s
if(!x.f.b(d))return null
w=J.a5(d)
v=B.bi(B.w(w.h(d,"at")))
u=w.h(d,"outline")
t=B.w(u==null?"":u)
if(v==null||t.length===0)return null
u=x.j
if(u.b(w.h(d,"extras"))){u=J.b6(u.a(w.h(d,"extras")),new C.chy(),x.N)
s=B.C(u,u.$ti.k("ak.E"))}else s=B.a([],x.s)
u=v.bU()
w=w.h(d,"request")
return new C.zO(u,t,s,B.w(w==null?"":w))},
fJE(){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$fJE=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if($.hm7){w=1
break}$.hm7=!0
t=4
w=7
return B.b(B.az(),$async$fJE)
case 7:r=e
q=B.aU(J.r(r.a,"ngmy_slides_ai_history_v1"))
if(q==null||q.length===0){w=1
break}p=A.X.aN(0,q,null)
if(!x.f.b(p)){w=1
break}for(k=J.jY(p),k=k.gaf(k),j=x.j,i=x.o;k.C();){o=k.gR(k)
n=B.a([],i)
if(j.b(o.b))for(h=J.aV(j.a(o.b));h.C();){m=h.gR(h)
l=C.hLi(m)
if(l!=null)J.cb(n,l)}$.CT.c3(0,B.w(o.a),new C.fJF(n))}C.h2O()
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
return B.i($async$fJE,v)},
h2O(){var w,v=new B.V(Date.now(),0,!1).bS(-12e8)
for(w=new B.dq($.CT,$.CT.r,$.CT.e);w.C();)J.nz(w.d,new C.fpi(v))
$.CT.bu($.CT,new C.fpj())},
aOx(){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$aOx=B.e(function(d,a0){if(d===1){t.push(a0)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$aOx)
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
J.cb(p,B.G(["at",g.a.a7().ae(),"outline",g.b,"extras",g.c,"request",g.d],m,l))}J.aH(r,i,p)}n=r
w=7
return B.b(s.ar("String","ngmy_slides_ai_history_v1",A.X.ap(n,null)),$async$aOx)
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
return B.i($async$aOx,v)},
ibF(d,e,f,g){var w,v,u
if(d.length===0||A.a.i(f).length===0)return
C.h2O()
w=$.CT.c3(0,d,new C.fJH())
v=Date.now()
u=B.C(e,B.a6(e).k("cr.E"))
J.pF(w,0,new C.zO(new B.V(v,0,!1),f,u,g))
C.aOx()},
ibC(d){var w,v=$.CT.h(0,d)
if(v==null||J.cq(v))return
w=J.cD(v)
w.cG(v,0)
if(w.gan(v))$.CT.W(0,d)
C.aOx()},
zO:function zO(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
chy:function chy(){},
fJF:function fJF(d){this.a=d},
fpi:function fpi(d){this.a=d},
fpj:function fpj(){},
fJH:function fJH(){},
ibH(d){return A.d.dN(D.ww,new C.fJK(d),new C.fJL())},
hLg(d){var w
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
hLf(d){var w
switch(d.a){case 0:w=D.ani
break
case 1:w=A.yQ
break
case 2:w=A.aom
break
case 3:w=K.amW
break
case 4:w=A.anO
break
case 5:w=A.m7
break
default:w=null}return w},
hYn(d){var w,v,u,t=A.a.i(d).toLowerCase()
if(t.length===0)return null
for(w=0;w<109;++w){v=D.QH[w]
if(v.toLowerCase()===t)return v}for(w=0;w<109;++w){v=D.QH[w]
if(!B.cU(v.toLowerCase(),t,0))u=B.cU(t,v.toLowerCase(),0)
else u=!0
if(u)return v}return null},
hLh(d){var w,v,u,t,s,r,q,p,o=B.a([],x.ez)
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
o.push(q)}return A.X.ap(B.G(["title",d.a,"style",d.b,"logo_frame",d.d,"logo_ring",d.e,"photo_frame",d.f,"photo_ring",d.r,"slides",o],u,t),null)},
ibD(d,e,f,g,h){var w=new B.N(D.ww,new C.fJD(),x.eC).aH(0,", "),v=""+d,u=C.hrD(h),t=F.fDk(h),s=C.hnL(g),r=e.t(0,D.ID)?'- New slides get an "emoji".\n':"",q=e.t(0,D.IE)?'- New slides get an "icon3d" from: '+A.d.aH(D.QH,", ")+".\n":"",p=e.t(0,D.Di)?'- New content slides get an "image_query" (2-3 English words).\n':""
return"You edit an existing presentation. Here it is as JSON:\n"+f+"\n\nThe presenter is looking at slide "+v+'.\n\nWHAT THEY WANT CHANGED (may be informal):\n"""'+h+'"""\n\nRules:\n- Do exactly what they ask: add, remove, move, shorten, lengthen or rewrite slides, change the tone, the language or the style ('+w+'). "This slide" / "here" means slide '+v+". New slides go where they say (or right after slide "+v+').\n- Keep every slide they did not ask about exactly as it is.\n- Same limits as before: titles max 7 words, 3 to 5 bullets of max 12 words, never invent prices, dates or statistics.\n- LANGUAGE: keep the presentation\'s current language unless they ask for another one; if they do, translate EVERY slide. JSON keys and the "kind", "style", "icon3d" and "image_query" values stay in English.\n- TRANSLATING OR REWORDING: change only the words. Keep "style", "kind", "emoji", "icon3d", "image_query", "picture" and the frame/ring values exactly as they are, with the same number of slides and bullets.\n- VOICE: write the way a real, friendly person talks and writes to someone they respect. Short plain sentences. Everyday words that people really use today. No corporate or robotic phrasing ("leverage", "synergy", "empower the ecosystem", "in today\'s dynamic landscape"), no made-up or rare words, no stacked jargon, no lecture tone. Explain the Civic registry, the AI, and any other topic the way you would explain it to a neighbour. If the language is Swahili, use the Swahili people speak and write every day in Kenya and Tanzania: real common words, natural word order, and never an English word forced into Swahili grammar or an invented Swahili word. Check that each word is one an ordinary speaker would understand.\n'+u+"\n"+t+'\n- Keep "logo_frame", "logo_ring", "photo_frame" and "photo_ring" unless they ask to change how the logo or pictures look.\n- PICTURE LOOK: "logo_frame" and "photo_frame" are one of: circle, rounded, triangle, hexagon, diamond, arch, or "" (as is). "logo_ring" and "photo_ring" are one of: gold, platinum, glow, rainbow, double, neon, framed, rosegold, jewels, aurora, or "" (none). Follow what the request says (e.g. "my picture in a circle with a gold ring"); if it says nothing, choose what suits the look (luxury \u2192 gold, neon/night \u2192 neon, clean \u2192 rounded with no ring).\n- BIO LINK: if they ask to put their bio link / link page / socials / "my links" in the presentation, add ONE slide with kind "bio" (title like "Connect with me", a one-line inviting subtitle) \u2014 usually just before the closing slide, or where they say. Their real Bio page (with clickable links) is shown on a phone on that slide.\n'+s+"\n"+r+q+p+'- Reply with the WHOLE presentation as JSON only, no markdown, same shape:\n{"title":"...","style":"...","logo_frame":"","logo_ring":"","photo_frame":"","photo_ring":"","slides":[{"kind":"...","title":"...","subtitle":"...","bullets":[],"notes":"...","emoji":"","icon3d":"","image_query":""}]}\n'},
ibE(d,e,f,g,h,i){var w,v,u,t,s='- "emoji": ONE emoji that fits the slide (e.g. \ud83c\udf89 \ud83d\ude80 \ud83c\udf3f \ud83d\udca1).\n',r=f?"- A document is attached (read it all). Rewrite its content as the slides in the same language: keep its facts, names, numbers, dates and the order of its sections, and never invent facts it does not contain.\n":"",q=new B.N(D.ww,new C.fJG(),x.eC).aH(0,", "),p=new B.ff("")
if(e.t(0,D.ID)){p.a=s
w=s}else w=""
if(e.t(0,D.IE))w=p.a=w+('- "icon3d": ONE name copied exactly from this list that fits the slide: '+A.d.aH(D.QH,", ")+".\n")
if(e.t(0,D.Di))p.a=w+'- "image_query": 2-3 simple English words for a real photo that fits the slide (e.g. "city skyline", "students classroom").\n'
w=C.hrD(d)
v=F.fDk(d)
u=C.hnL(g)
t=i==="auto"?"pick the best of: "+q+" (match the mood they describe: nature, vibe, celebration, colorful, professional...)":'use "'+i+'"'
return'You design presentation slides. Write a presentation from the user\'s request.\n\nUSER REQUEST (spoken, may be informal):\n"""'+d+'"""\n\nRules:\n'+r+"- Exactly "+h+' slides.\n- Slide 1 has kind "title". The last slide has kind "closing" (thank-you / call to action).\n- Middle slides mostly kind "bullets" (3 to 5 short bullets, max 12 words each). You may use one "section" divider and one "quote" slide when it fits.\n- Titles are short and punchy (max 7 words). Use the user\'s own names, facts and details; never invent prices, dates or statistics they did not give.\n- "notes": 1-2 sentences the presenter can say.\n- LANGUAGE: if the request names a language (e.g. "in Swahili", "en fran\xe7ais", "en espa\xf1ol", "in Arabic"), write EVERY title, subtitle, bullet and note in that language, with correct spelling and accents. If no language is named, write in the language the request itself is written in. Keep the JSON keys and the "kind", "style", "icon3d" and "image_query" values in English.\n- VOICE: write the way a real, friendly person talks and writes to someone they respect. Short plain sentences. Everyday words that people really use today. No corporate or robotic phrasing ("leverage", "synergy", "empower the ecosystem", "in today\'s dynamic landscape"), no made-up or rare words, no stacked jargon, no lecture tone. Explain the Civic registry, the AI, and any other topic the way you would explain it to a neighbour. If the language is Swahili, use the Swahili people speak and write every day in Kenya and Tanzania: real common words, natural word order, and never an English word forced into Swahili grammar or an invented Swahili word. Check that each word is one an ordinary speaker would understand.\n'+w+"\n"+v+'\n- PICTURE LOOK: "logo_frame" and "photo_frame" are one of: circle, rounded, triangle, hexagon, diamond, arch, or "" (as is). "logo_ring" and "photo_ring" are one of: gold, platinum, glow, rainbow, double, neon, framed, rosegold, jewels, aurora, or "" (none). Follow what the request says (e.g. "my picture in a circle with a gold ring"); if it says nothing, choose what suits the look (luxury \u2192 gold, neon/night \u2192 neon, clean \u2192 rounded with no ring).\n- BIO LINK: if they ask to put their bio link / link page / socials / "my links" in the presentation, add ONE slide with kind "bio" (title like "Connect with me", a one-line inviting subtitle) \u2014 usually just before the closing slide, or where they say. Their real Bio page (with clickable links) is shown on a phone on that slide.\n'+u+'\n- "style": '+t+".\n"+p.u(0)+'- Reply with JSON only, no markdown, in this shape:\n{"title":"...","style":"...","logo_frame":"","logo_ring":"","photo_frame":"","photo_ring":"","slides":[{"kind":"title","title":"...","subtitle":"...","bullets":[],"notes":"...","emoji":"","icon3d":"","image_query":""}]}\n'},
ahp(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=null,a2="bullets",a3=A.a.i(a6),a4=J.Dg(a3,"{"),a5=J.fVY(a3,"}")
if(a4<0||a5<=a4)return a1
a3=J.LC(a3,a4,a5+1)
try{w=A.X.aN(0,a3,a1)
q=x.f
if(!q.b(w))return a1
v=J.r(w,"slides")
p=x.j
if(!p.b(v)||J.cq(v))return a1
u=B.a([],x.aC)
for(o=J.aV(v),n=x.s,m=x.N;o.C();){t=o.gR(o)
if(!q.b(t))continue
if(p.b(J.r(t,a2))){l=J.b6(p.a(J.r(t,a2)),new C.fHB(),m).c0(0,new C.fHC())
k=B.C(l,l.$ti.k("K.E"))}else k=B.a([],n)
s=k
l=J.r(t,"kind")
l=A.a.i(B.w(l==null?a2:l))
j=J.r(t,"title")
j=A.a.i(B.w(j==null?"":j))
i=J.r(t,"subtitle")
i=A.a.i(B.w(i==null?"":i))
h=J.r(t,"notes")
h=A.a.i(B.w(h==null?"":h))
g=J.r(t,"emoji")
g=A.a.i(B.w(g==null?"":g))
f=J.r(t,"icon3d")
f=C.hYn(B.w(f==null?"":f))
if(f==null)f=""
e=J.r(t,"image_query")
if(e==null)e=J.r(t,"imageQuery")
e=A.a.i(B.w(e==null?"":e))
d=J.r(t,"picture")
d=B.ca(B.w(d==null?0:d),a1)
if(d==null)d=0
J.cb(u,new C.a8f(l.toLowerCase(),j,i,s,h,g,f,e,d))}if(J.ad(u)===0)return a1
q=J.r(w,"style")
r=A.a.i(B.w(q==null?a7:q)).toLowerCase()
q=J.r(w,"title")
q=A.a.i(B.w(q==null?J.fq(u).b:q))
p=A.d.b5(D.ww,new C.fHD(r))?r:a7
o=C.fox(J.r(w,"logo_frame"),D.CF)
n=C.fox(J.r(w,"logo_ring"),D.CA)
m=C.fox(J.r(w,"photo_frame"),D.CF)
l=C.fox(J.r(w,"photo_ring"),D.CA)
return new C.arE(q,p,u,o,n,m,l)}catch(a0){return a1}},
a1Y(d,e){return(A.o.E(e,0,255)<<24|d&16777215)>>>0},
hqK(f9,g0,g1,g2,g3,g4,g5,g6,g7,g8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4=null,e5="title",e6="orb1",e7="drift",e8="orb2",e9="logo",f0="hero",f1="photo",f2="float3d",f3="bar",f4="pulse",f5="sub",f6=g2.t(0,D.Dj),f7=f6?C.hRW():e4,f8=f7==null
if(f8)w=e4
else{v=new B.e9()
v.d3(f7.w+1)
u=f7.a
t=B.bq(u.b,!0,x.dL)
A.d.dY(t,v)
s=u.c
s=new C.nT("luxe",u.a,A.m7,t,u.e,u.f,B.a([s,u.d,s],x.t),D.dh)
w=s}if(w==null)w=C.ibH(f9.b)
r=g2.t(0,D.a6x)||f6
q=g2.t(0,D.ID)
p=g2.t(0,D.SG)
o=new C.fC_()
n=B.a([],x.g)
m=new C.fC2(o,w,r)
l=new C.fC1(o,r)
k=new C.fC0(o,r)
j=(g3==null?"":g3).length!==0
u=f9.c
for(s=w.w,f8=!f8,i=g7==null,h=g6==null,g=f9.f,f=f9.r,e=g5==null,d=g4==null,a0=f9.d,a1=f9.e,a2=w.f,a3=w.d,a4=w.r,a5=x.u,a6=J.a5(g0),a7=!A.d.b5(u,new C.fBZ(g8)),a8=g1==null,a9=x.s,b0=0,b1=0;b1<u.length;b1=b6){b2=u[b1]
b3=a3[A.o.F(b1,a3.length)]
b4=A.o.F(b1,3)
b5=a4[b4]
b6=b1+1
b7=a4[b6%3]
b8=A.o.F(b1,5)
b9=D.d2d[b8]
c0=D.d15[b8]
c1=B.a([],a5)
c2=a6.h(g0,b1)
c3=c2==null
c4=c3?e4:c2.a
c5=c3?e4:c2.b
c3=b2.x
c6=c3>0&&c3<=g8.length
if(c6)c5=g8[c3-1]
else if(g8.length!==0&&a7&&!D.f0H.t(0,b2.a)){c7=b0+1
c5=g8[A.o.F(b0,g8.length)]
b0=c7}c8=q?b2.f:""
c3=c5==null
c9=c3?c4:c5
if(c6)d0=c5
else d0=c4==null?c5:c4
d1=!c6&&c4!=null
if(p)c1.push(l.$7$key(D.eR,0.62-b8*0.36,-0.55+b4*0.18,1.15,2,(A.o.E(31,0,255)<<24|b5&16777215)>>>0,"pano"))
A:{d2=b2.a
if("title"===d2){c1.push(l.$8$fx$key(D.eR,0.7,-0.25,0.46,0.82,(A.o.E(51,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.eR,-0.08,0.68,0.24,0.43,(A.o.E(46,0,255)<<24|b7&16777215)>>>0,e7,e8))
if(j){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.41,0.04,0.18,0.27,D.mS,450,e9))}else if(d0!=null){b4=d1?f0:f1
c1.push(k.$9$anim$delay$fx$key(d0,0.42,0.04,0.16,0.28,c0,500,d1?f2:"",b4))}else if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,0.4,0.04,0.2,0.24,64,A.L,D.qx,500,f2,f0))
c1.push(l.$8$fx$key(D.bh,0.4,0.66,0.2,0.012,b5,f4,f3))
c1.push(m.$10$align$anim$key$weight(b2.b,0.08,0.33,0.84,0.3,54,A.L,b9,e5,A.u))
c1.push(m.$10$align$color$delay$key(b2.c,0.12,0.7,0.76,0.14,24,A.L,a2,300,f5))
d3=D.SD
break A}if("section"===d2){c1.push(l.$8$fx$key(D.eR,0.64,0.46,0.42,0.75,(A.o.E(42,0,255)<<24|b5&16777215)>>>0,e7,e6))
if(d0!=null){b4=!c3&&!d1?f1:f0
c1.push(k.$8$anim$fx$key(d0,0.7,0.2,0.24,0.44,c0,d1?f2:"",b4))}else c1.push(l.$9$fx$key$rotation(D.lg,0.78,0.1,0.18,0.32,(A.o.E(64,0,255)<<24|b7&16777215)>>>0,e7,e8,0.3))
c1.push(l.$8$fx$key(D.bh,0.08,0.6,0.14,0.014,b5,f4,f3))
b4=b2.b
c1.push(m.$9$anim$key$weight(c8.length===0?b4:c8+"  "+b4,0.08,0.34,0.62,0.24,46,b9,e5,A.u))
c1.push(m.$9$color$delay$key(b2.c,0.08,0.64,0.6,0.14,22,a2,250,f5))
d3=D.Dg
break A}if("quote"===d2){b4=b5&16777215
c1.push(l.$8$fx$key(D.eR,-0.12,-0.2,0.36,0.64,(A.o.E(36,0,255)<<24|b4)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.eR,0.82,0.66,0.26,0.46,(A.o.E(38,0,255)<<24|b7&16777215)>>>0,e7,e8))
c1.push(m.$11$anim$color$fx$key$weight("\u201c",0.06,0.02,0.2,0.36,140,D.mS,(A.o.E(204,0,255)<<24|b4)>>>0,f4,"quote",A.u))
c1.push(m.$11$align$anim$key$style$weight(b2.b,0.12,0.3,0.76,0.34,36,A.L,b9,e5,A.cD,A.P))
b4=b2.c
c1.push(m.$10$align$color$delay$key(b4.length===0?"":"\u2014 "+b4,0.12,0.68,0.76,0.12,22,A.L,a2,300,f5))
if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,j?0.72:0.82,0.06,0.12,0.2,52,A.L,D.qx,500,f2,f0))
d3=D.mR
break A}if("bio"===d2)b4=(a8?"":g1).length!==0
else b4=!1
if(b4){c1.push(l.$8$fx$key(D.eR,0.58,0.04,0.44,0.8,(A.o.E(42,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.bh,0.08,0.62,0.14,0.014,b5,f4,f3))
b4=b2.b
c1.push(m.$9$anim$key$weight(c8.length===0?b4:c8+"  "+b4,0.07,0.3,0.52,0.28,46,b9,e5,A.u))
c1.push(m.$9$color$delay$key(b2.c,0.07,0.66,0.5,0.16,22,a2,250,f5))
b4=o.$0()
g1.toString
b8=r?D.uN:D.cl
c1.push(new C.eN(b4,D.a6v,0.64,0.05,0.27,0.9,g1,24,A.a7,A.bp,A.aF,4279310375,A.bi,e4,D.bh,4280640491,4280172719,2,0,!1,"",0,b8,r?350:0,"bio","","","","",!1,0))
d3=D.mR
break A}if("closing"===d2){c1.push(l.$8$fx$key(D.eR,-0.15,-0.3,0.5,0.9,(A.o.E(46,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.eR,0.78,0.62,0.3,0.54,(A.o.E(51,0,255)<<24|b7&16777215)>>>0,e7,e8))
if(j){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.41,0.05,0.18,0.27,D.mS,400,e9))}else if(d0!=null){b4=d1?f0:f1
c1.push(k.$9$anim$delay$fx$key(d0,0.42,0.05,0.16,0.28,c0,450,d1?f2:"",b4))}else if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,0.4,0.05,0.2,0.24,64,A.L,D.qx,450,f2,f0))
c1.push(l.$8$fx$key(D.bh,0.42,0.61,0.16,0.012,b5,f4,f3))
c1.push(m.$10$align$anim$key$weight(b2.b,0.1,0.34,0.8,0.26,52,A.L,b9,e5,A.u))
c1.push(m.$10$align$color$delay$key(b2.c,0.14,0.65,0.72,0.16,24,A.L,a2,300,f5))
d3=D.SD
break A}d4=b2.d
if(d4.length===0&&b2.c.length!==0)d4=B.a([b2.c],a9)
d5=c9!=null
d6=(b1&1)===1&&d5
d7=d6?0.4:0.07
b4=d6?-0.1:0.8
c1.push(l.$8$fx$key(D.eR,b4,0.52,0.3,0.54,(A.o.E(36,0,255)<<24|b7&16777215)>>>0,e7,e8))
b4=d6?0.86:-0.12
c1.push(l.$8$fx$key(D.eR,b4,-0.18,0.26,0.46,(A.o.E(30,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$7$key(D.bh,d6?0.988:0,0,0.012,1,b5,"rail"))
b4=b2.b
b4=c8.length===0?b4:c8+"  "+b4
c1.push(m.$9$anim$key$weight(b4,d7,0.08,d5?0.53:0.86,0.16,38,b9,e5,A.u))
c1.push(l.$8$fx$key(D.bh,d7,0.25,0.12,0.012,b5,f4,f3))
b4=A.d.aH(d4,"\n")
b8=d5?0.53:0.7
c1.push(m.$11$anim$bullets$color$delay$key(b4,d7,0.31,b8,0.6,d4.length>4?21:24,D.IB,!0,a2,250,f5))
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
e2.id=i?f:g7}}if(f8)C.hTz(c1,b1,o,f7)
b4=o.$0()
if(f8){b8=f7.r
b8=b8[A.o.F(b1,b8.length)]}else b8=r?D.dsR[A.o.F(b1,6)]:s
n.push(new C.lR(b4,b2.b,b2.e,d3,b3.a,b3.b,b8,0,"",0,c1))}e3=A.a.i(f9.a)
if(e3.length===0)e3="AI Presentation"
f8=o.$0()
return C.BV(e4,e4,e4,e4,D.Df,5,!1,e4,e4,e4,e4,e4,f8,e4,!1,e4,e3.length>60?A.a.aq(e3,0,60):e3,e4,e4,n,"office_blue",e4,!1,e4)},
fEn(d,e){var w=0,v=B.j(x.gI),u,t,s,r,q,p,o,n,m
var $async$fEn=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:o=e.t(0,D.Di)
n=e.t(0,D.IE)
if(!o&&!n){u=D.a5u
w=1
break}t=B.a([],x.d5)
for(s=d.c,r=0;r<s.length;++r)t.push(new C.fEq(o,s[r],n,$.hX6,r).$0())
s=B.T(x.S,x.aH)
m=J
w=3
return B.b(B.iP(t,x.e),$async$fEn)
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
return B.i($async$fEn,v)},
fDn(d,e,f,g,h,i,j,k,l){var w=0,v=B.j(x.I),u,t,s
var $async$fDn=B.e(function(m,n){if(m===1)return B.f(n,v)
for(;;)switch(w){case 0:h.$1("Writing your "+j+" slides\u2026")
t=i.length
t=C.ibE(d,e,k.length!==0,t,j,l)
s=C
w=3
return B.b(C.aNR(t,"The AI could not write the slides. Try describing it again.",l==="auto"?"colorful":l,k),$async$fDn)
case 3:u=s.aOc(n,e,h,f,g,i)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fDn,v)},
bCI(d,e,f,g,h,i,j,k){var w=0,v=B.j(x.I),u,t,s,r,q,p,o
var $async$bCI=B.e(function(l,m){if(l===1)return B.f(m,v)
for(;;)switch(w){case 0:if(e.length!==0){t=B.aY(x.N)
for(s=B.eo(f,f.r,B.a6(f).c),r=s.$ti.c;s.C();){q=s.d
t.M(0,(q==null?r.a(q):q).b)}C.ibF(e,t,i,k)}if(h!=null)h.$1("Making your changes\u2026")
p=C.ahp(i,"colorful")
t=C.ibD(d,f,i,j.length,k)
s=p==null?null:p.b
o=C
w=3
return B.b(C.aNR(t,"The AI could not make that change. Try saying it another way.",s==null?"colorful":s,A.hM),$async$bCI)
case 3:u=o.aOc(m,f,h,g,D.e63,j)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bCI,v)},
aNR(d,e,f,g){var w=0,v=B.j(x.dO),u,t,s,r,q,p,o,n
var $async$aNR=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:w=3
return B.b(B.vv(null,""),$async$aNR)
case 3:n=i
if(A.a.i(n).length===0)throw B.W("AI is not set up yet. AI is not available right now. Please try again later.")
t=B.nb(n)
s=null,r=0
case 4:if(!(r<2)){w=6
break}w=7
return B.b(B.r2(t,d,g,"slides",null),$async$aNR)
case 7:q=i
p=q.b
if(p!=null){o=C.ahp(p,f)
if(o!=null){u=o
w=1
break}}else s=q.a
case 5:++r
w=4
break
case 6:throw B.W(s!=null&&B.Lj(s)?"No internet connection \u2014 try again when you are online.":e)
case 1:return B.h(u,v)}})
return B.i($async$aNR,v)},
aOc(d,e,f,g,h,i){var w=0,v=B.j(x.I),u,t,s,r,q,p,o,n,m,l
var $async$aOc=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:w=e.t(0,D.Di)||e.t(0,D.IE)?3:5
break
case 3:if(f!=null)f.$1("Adding pictures and 3D art\u2026")
if(i.length===0)t=e
else{t=B.de(e,x.Q)
t.W(0,D.Di)}w=6
return B.b(C.fEn(d,t),$async$aOc)
case 6:s=k
w=4
break
case 5:s=D.a5u
case 4:t=d.c
w=A.d.b5(t,new C.fho())?7:9
break
case 7:r=$.hsv
r=r==null?null:r.$0()
w=10
return B.b(x.gc.b(r)?r:B.dU(r,x.aP),$async$aOc)
case 10:q=k
p=q!=null?A.X.ap(q.ag(),null):null
w=8
break
case 9:p=null
case 8:r=h.a
o=h.b
n=h.c
m=h.d
l=C.hqK(d,s,p,e,g,r,o,n,m,i)
if(r==null)r=d.d
if(o==null)o=d.e
if(n==null)n=d.f
if(m==null)m=d.r
l.CW=C.hLh(new C.arE(d.a,d.b,t,r,o,n,m))
m=l.r
n=B.U(m).k("N<1,n>")
t=B.C(new B.N(m,new C.fhp(),n),n.k("ak.E"))
l.cx=t
t=B.a6(e).k("k0<cr.E,n>")
t=B.C(new B.k0(e,new C.fhq(),t),t.k("K.E"))
l.cy=t
l.ay=e.t(0,D.SG)
u=l
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aOc,v)},
h5E(d){var w,v,u,t=d.cy
if(t==null)t=A.Z
w=B.aY(x.Q)
for(v=0;v<6;++v){u=D.a4h[v]
if(A.d.t(t,u.b))w.M(0,u)}return w},
ifK(d){return B.bU(A.K,null,new C.fST(),d,!0,!0,!0,null,!1,!1,x.I)},
hSy(d,e){var w,v=e.toLowerCase()
if(A.a.cc(v,".png"))w="image/png"
else w=A.a.cc(v,".webp")?"image/webp":"image/jpeg"
return"data:"+w+";base64,"+A.cJ.gct().aM(d)},
ifJ(d,e,f){return B.bU(A.K,null,new C.fSS(f,e),d,!0,!0,!0,null,!1,!1,x.I)},
h5F(d){var w,v,u,t,s,r,q,p
for(w=d.r,v=w.length,u=0;u<v;++u)for(t=w[u].z,s=t.length,r=0;r<s;++r){q=t[r]
if(q.fx==="logo"){p=q.at
p=(p==null?"":p).length!==0}else p=!1
if(p)return q.at}return null},
h5G(d){var w,v,u,t,s,r,q,p,o=B.a([],x.s)
for(w=d.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.M)(w),++u)for(t=w[u].z,s=t.length,r=0;r<t.length;t.length===s||(0,B.M)(t),++r){q=t[r]
p=q.at
if(p==null)p=""
if(q.fx==="photo"&&p.length!==0&&!A.d.t(o,p))o.push(p)}return o},
fox(d,e){var w=A.a.i(B.w(d==null?"":d)).toLowerCase()
return A.d.b5(e,new C.foy(w))?w:""},
hnL(d){var w,v
if(d<=0)return""
w=""+d
v=d===1?"":"s"
return"- THEIR PICTURES: they uploaded "+w+" picture"+v+" of their own, numbered 1 to "+w+' in the order they picked them. Put "picture": <number> on each slide where one belongs, following exactly what they say (e.g. "picture 2 on the team slide", "first picture on the title"). If they don\'t say, spread them over the content slides in order. Use 0 where no picture is wanted.'},
hst(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0="colorful",a1=a4.CW,a2=C.ahp(a1==null?"":a1,a0),a3=C.ahp(a5,a0)
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
for(v=t.length,r=a4.r,q=B.U(r).k("Z<1>"),p=0;p<t.length;t.length===v||(0,B.M)(t),++p){o=B.pP(new B.Z(r,new C.fJM(t[p]),q))
if(o==null)return!1
s.push(o)}for(v=w.length,n=0;n<v;++n){m=w[n]
l=u[n]
if(m.a!==l.a||m.f!==l.f||m.r!==l.r||m.w!==l.w||m.x!==l.x)return!1
if(m.d.length!==l.d.length)return!1}if(!a6)return!0
for(v=x.fR,r=v.k("K.E"),q=x.L,n=0;n<w.length;++n){m=w[n]
l=u[n]
k=B.a([new B.z(m.b,l.b),new B.z(m.c,l.c)],q)
for(j=m.d,i=l.d,h=0;h<j.length;++h)k.push(new B.z(j[h],i[h]))
k.push(new B.z(m.e,l.e))
g=B.C(new B.Z(k,new C.fJN(),v),r)
A.d.aW(g,new C.fJO())
if(g.length===0)continue
f=new C.fJP(g)
e=s[n]
for(k=e.z,j=k.length,p=0;p<k.length;k.length===j||(0,B.M)(k),++p){d=k[p]
i=d.r
if(i.length!==0)d.r=f.$1(i)}e.c=f.$1(e.c)}if(A.a.i(a4.b)===A.a.i(a2.a)&&A.a.i(a3.a).length!==0)a4.b=A.a.i(a3.a)
a4.CW=a5
return!0},
ibY(d){var w=d.toLowerCase(),v=B.af("\\b(fit|fits|fitting|overflow|overflowing|reframe|inside|too big|out of the|going under|under the slide|below the slide)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.aIq
v=B.af("\\b(smaller|shrink|reduce|decrease|make .{0,20}small|less big)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.e7Y
v=B.af("\\b(bigger|larger|increase|enlarge|grow|make .{0,20}big)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.e7Z
return null},
hnm(d,e,f,g){var w,v,u,t=d.e,s=d.f,r=Math.max(1,A.k.bh(t*f/(e*0.55)))
for(t=d.r.split("\n"),w=t.length,v=0,u=0;u<w;++u)v+=Math.max(1,A.k.dg(t[u].length/r))
return v*e*1.3<=s*g+0.5&&d.d+d.f<=1.001},
ibI(a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a0.r,d=e.length
if(d===0)return!1
e=a3?e:B.a([e[A.o.E(a1,0,d-1)]],x.g)
w=a0.d===D.or
v=w?540:960
u=w?960:540
for(d=e.length,t=a2.a,s=!1,r=0;r<e.length;e.length===d||(0,B.M)(e),++r)for(q=e[r].z,p=q.length,o=0;o<q.length;q.length===p||(0,B.M)(q),++o){n=q[o]
if(n.b!==D.cS)continue
m=n.w
l=n.c
k=n.d
switch(t){case 0:n.w=A.k.E(m*0.85,10,120)
break
case 1:j=A.k.E(m*1.15,10,120)
if(C.hnm(n,j,v,u))n.w=j
break
case 2:i=m
h=0
for(;;){g=!1
if(!C.hnm(n,i,v,u))if(n.w>10){f=h+1
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
ibG(d,e){var w,v,u,t,s,r,q,p,o=d.b,n=C.ahp(o,"colorful")
if(n==null)throw B.W("That earlier version could not be read.")
w=B.aY(x.Q)
for(v=d.c,u=v.length,t=0;t<v.length;v.length===u||(0,B.M)(v),++t){s=v[t]
for(r=0;r<6;++r){q=D.a4h[r]
if(q.b===s)w.M(0,q)}}v=C.h5F(e)
u=C.h5G(e)
p=C.hqK(n,D.a5u,null,w,v,n.d,n.e,n.f,n.r,u)
p.CW=o
o=p.r
u=B.U(o).k("N<1,n>")
o=B.C(new B.N(o,new C.fJI(),u),u.k("ak.E"))
p.cx=o
o=w.$ti.k("k0<cr.E,n>")
o=B.C(new B.k0(w,new C.fJJ(),o),o.k("K.E"))
p.cy=o
p.ay=w.t(0,D.SG)
return p},
ifw(d,e,f){return B.bU(A.K,null,new C.fS5(f,e),d,!0,!0,!0,null,!1,!1,x.I)},
hRW(){var w,v,u,t=1000*Date.now()&2147483647,s=new B.e9()
s.d3(t)
w=D.cGC[s.au(10)]
v=new C.eiF(s)
u=x.N
return new C.eiE(w,s.au(4),J.fq(v.$1$2(D.d6W,1,x.ff)),w.r[s.au(3)],v.$1$2(D.do3,2+s.au(2),u),v.$1$2(D.dgF,2,u),v.$1$2(D.drf,4,x.fP),t)},
hTz(a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g="lux_frame",f="goldframe",e="lux_emblem",d=a5.a,a0=d.c,a1=new B.e9()
a1.d3(a5.w+a3*13)
w=new C.fdQ(a4)
v=new C.fdS(a4,d)
u=new C.fdR(w,a5,a0,d)
for(t=a2.length,s=d.f,r=d.d,q=0;q<a2.length;a2.length===t||(0,B.M)(a2),++q){p=a2[q]
if(p.b===D.cS){o=p.fx
if(o==="title"){p.Q=r
p.fy="shimmer@"+A.a.aZ(A.o.fW(r,16),8,"0").toUpperCase()}else if(o==="sub"||o==="body")p.Q=s}if(p.fx==="bar")p.fy="shimmer@"+A.a.aZ(A.o.fW(r,16),8,"0").toUpperCase()}t=a5.e
n=t[A.o.F(a3,t.length)]
if(n==="spotlight")A.d.c8(a2,0,w.$8(D.eR,0.1+a1.ah()*0.45,0.05+a1.ah()*0.3,0.45,0.75,C.a1Y(a0,52),"lux_spot",a5.wJ(0,"spotlight")))
else A.d.c8(a2,0,w.$8(D.bh,0,0,1,1,0,"lux_back",a5.wJ(0,n)))
m=t[(a3+1)%t.length]
t=a3&1
if(t===1&&m!==n&&m!=="spotlight")A.d.c8(a2,1,w.$8(D.bh,0,0,1,1,0,"lux_back2",a5.aFH(0,m,r)))
switch(a5.b){case 0:a2.push(w.$12$anim$delay$stroke$strokeWidth(D.bh,0.022,0.038,0.956,0.924,0,g,a5.wJ(0,f),D.dh,150,C.a1Y(a0,176),1.6))
a2.push(u.$4(0.022,0.038,"lux_c1",300))
a2.push(u.$4(0.978,0.038,"lux_c2",380))
a2.push(u.$4(0.022,0.962,"lux_c3",460))
a2.push(u.$4(0.978,0.962,"lux_c4",540))
break
case 1:a2.push(w.$12$anim$delay$stroke$strokeWidth(D.bh,0.018,0.032,0.964,0.936,0,g,a5.wJ(0,f),D.dh,120,C.a1Y(a0,200),2))
a2.push(w.$12$anim$delay$stroke$strokeWidth(D.bh,0.034,0.06,0.932,0.88,0,"lux_frame2","",D.dh,260,C.a1Y(a0,112),0.8))
a2.push(u.$5$size(0.5,0.032,"lux_c1",420,0.026))
a2.push(u.$5$size(0.5,0.968,"lux_c2",480,0.026))
break
case 2:a2.push(w.$10$anim$delay(D.bh,0,0,1,1,0,"lux_filigree",a5.wJ(0,"filigree"),D.dh,200))
break
default:a2.push(w.$10$anim$delay(D.bh,0.08,0.06,0.84,0.004,C.a1Y(a0,208),"lux_rule",a5.aFH(0,"shimmer",r),D.uM,150))
a2.push(w.$10$anim$delay(D.bh,0.08,0.936,0.84,0.004,C.a1Y(a0,144),"lux_rule2","",D.IB,220))}l=!A.d.b5(a2,new C.fdP())||a3===0
s=a5.d
if(l)a2.push(v.$9(s,0.44,0.06,0.12,0.14,40,e,a5.wJ(0,"crest"),350))
else{o=a1.hh()?0.035:0.905
a2.push(v.$9(s,o,0.055,0.06,0.09,22,e,a5.wJ(0,"crest"),350))}s=a5.c
t=t===0
o=t?0.3:0.62
k=C.a1Y(r,242)
j=a5.wJ(0,"orbit")
i=s===D.bh?0.785:0
a2.push(w.$13$anim$delay$rotation$stroke$strokeWidth(s,o-0.008,0.024,0.016,0.028,k,"lux_g1",j,D.qx,600,i,4294967295,1))
t=t?0.66:0.34
a2.push(w.$10$anim$delay(D.eR,t-0.007,0.9495,0.014,0.025,C.a1Y(r,242),"lux_g2",a5.wJ(0,"orbit"),D.qx,700))
for(t=a5.f,s=t.length,q=0;q<t.length;t.length===s||(0,B.M)(t),++q){h=t[q]
a2.push(w.$8(D.bh,0,0,1,1,0,"lux_"+h,h+"@"+A.a.aZ(A.o.fW(a0,16),8,"0").toUpperCase()))}if((A.d.gI(d.b).a&16777215)<8421504)a2.push(w.$8(D.bh,0,0,1,1,0,"lux_velvet",a5.wJ(0,"velvet")))},
nT:function nT(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fJK:function fJK(d){this.a=d},
fJL:function fJL(){},
w8:function w8(d,e){this.a=d
this.b=e},
a8f:function a8f(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
arE:function arE(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
fJD:function fJD(){},
fJG:function fJG(){},
fHB:function fHB(){},
fHC:function fHC(){},
fHD:function fHD(d){this.a=d},
fC_:function fC_(){},
fC2:function fC2(d,e,f){this.a=d
this.b=e
this.c=f},
fC1:function fC1(d,e){this.a=d
this.b=e},
fC0:function fC0(d,e){this.a=d
this.b=e},
fBZ:function fBZ(d){this.a=d},
fEq:function fEq(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fEo:function fEo(d){this.a=d},
fEp:function fEp(d){this.a=d},
fho:function fho(){},
fhp:function fhp(){},
fhq:function fhq(){},
fST:function fST(){},
a0I:function a0I(d){this.a=d},
aHZ:function aHZ(d,e,f,g,h){var _=this
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
f0E:function f0E(d,e,f){this.a=d
this.b=e
this.c=f},
f0F:function f0F(d,e){this.a=d
this.b=e},
f0C:function f0C(d,e){this.a=d
this.b=e},
f0D:function f0D(d,e){this.a=d
this.b=e},
f0B:function f0B(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
f0w:function f0w(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
f0A:function f0A(d,e){this.a=d
this.b=e},
f0v:function f0v(d,e){this.a=d
this.b=e},
f0z:function f0z(d,e){this.a=d
this.b=e},
f0u:function f0u(d,e){this.a=d
this.b=e},
f0x:function f0x(d){this.a=d},
f0y:function f0y(d,e){this.a=d
this.b=e},
f0k:function f0k(d,e){this.a=d
this.b=e},
f0l:function f0l(d,e){this.a=d
this.b=e},
f0n:function f0n(d){this.a=d},
f0o:function f0o(d){this.a=d},
f0p:function f0p(d){this.a=d},
f0q:function f0q(d){this.a=d},
f0m:function f0m(d,e){this.a=d
this.b=e},
f0r:function f0r(d,e){this.a=d
this.b=e},
f0S:function f0S(d){this.a=d},
f0T:function f0T(d){this.a=d},
f0R:function f0R(d){this.a=d},
f0U:function f0U(d){this.a=d},
f0Q:function f0Q(d){this.a=d},
f0W:function f0W(d){this.a=d},
f0P:function f0P(d,e){this.a=d
this.b=e},
f0X:function f0X(d){this.a=d},
f0O:function f0O(d,e){this.a=d
this.b=e},
f0Y:function f0Y(d){this.a=d},
f0N:function f0N(d){this.a=d},
f0Z:function f0Z(d){this.a=d},
f0M:function f0M(d,e){this.a=d
this.b=e},
f1_:function f1_(d){this.a=d},
f0L:function f0L(d,e){this.a=d
this.b=e},
f10:function f10(d){this.a=d},
f0K:function f0K(d){this.a=d},
f11:function f11(d,e){this.a=d
this.b=e},
f0J:function f0J(d,e){this.a=d
this.b=e},
f12:function f12(d){this.a=d},
f0V:function f0V(d){this.a=d},
f0I:function f0I(d,e){this.a=d
this.b=e},
f0s:function f0s(d,e,f){this.a=d
this.b=e
this.c=f},
f0t:function f0t(d,e,f){this.a=d
this.b=e
this.c=f},
f0H:function f0H(d,e){this.a=d
this.b=e},
f0G:function f0G(d,e){this.a=d
this.b=e},
fSS:function fSS(d,e){this.a=d
this.b=e},
a0H:function a0H(d,e,f){this.c=d
this.d=e
this.a=f},
aHY:function aHY(d){var _=this
_.d=d
_.e=!1
_.f=""
_.c=_.a=_.r=null},
f0d:function f0d(d){this.a=d},
f0e:function f0e(d){this.a=d},
f0f:function f0f(d,e){this.a=d
this.b=e},
f0g:function f0g(d){this.a=d},
f0h:function f0h(d){this.a=d},
f0c:function f0c(d,e){this.a=d
this.b=e},
f0i:function f0i(d,e){this.a=d
this.b=e},
f0j:function f0j(d,e){this.a=d
this.b=e},
foy:function foy(d){this.a=d},
b1O:function b1O(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aEx:function aEx(d,e,f){this.c=d
this.d=e
this.a=f},
bkM:function bkM(d,e){var _=this
_.d=$
_.bz$=d
_.aa$=e
_.c=_.a=null},
eiH:function eiH(d){this.a=d},
eiG:function eiG(){},
bip:function bip(d,e){this.b=d
this.a=e},
fJM:function fJM(d){this.a=d},
fJN:function fJN(){},
fJO:function fJO(){},
fJP:function fJP(d){this.a=d},
asb:function asb(d,e){this.a=d
this.b=e},
fJI:function fJI(){},
fJJ:function fJJ(){},
fS5:function fS5(d,e){this.a=d
this.b=e},
a_4:function a_4(d,e,f){this.c=d
this.d=e
this.a=f},
aC2:function aC2(){var _=this
_.e=_.d=$
_.f=!1
_.c=_.a=_.r=null},
dni:function dni(d){this.a=d},
dnj:function dnj(d){this.a=d},
dnk:function dnk(d,e){this.a=d
this.b=e},
dnn:function dnn(d){this.a=d},
dno:function dno(d,e){this.a=d
this.b=e},
dnm:function dnm(d,e){this.a=d
this.b=e},
dnp:function dnp(d){this.a=d},
dnl:function dnl(d,e){this.a=d
this.b=e},
btg:function btg(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eiE:function eiE(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
eiF:function eiF(d){this.a=d},
fdQ:function fdQ(d){this.a=d},
fdS:function fdS(d,e){this.a=d
this.b=e},
fdR:function fdR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fdP:function fdP(){},
aMs:function aMs(){},
h4t(d){var w,v,u
try{w=A.X.aN(0,d,null)
if(x.f.b(w)){v=B.w1(B.a2(w,x.N,x.z))
return v}}catch(u){}return null},
b1K:function b1K(d,e,f){this.c=d
this.d=e
this.a=f},
bml:function bml(d,e){this.c=d
this.a=e},
i7Y(d){return A.d.dN(D.HE,new C.fD6(d),new C.fD7())},
i7Z(d){var w,v,u,t=A.a.i(d)
if(!A.a.a0(t,"class_"))return null
w=A.a.b7(t,6)
if(w.length===0)return null
v=new B.Z(D.HE,new C.fD8(w),x.b4)
if(!v.gaf(0).C())return null
u=v.gI(0)
return new C.jN("class_"+u.a,u.b,u.d,u.r,u.w,u.e,u.f)},
lm:function lm(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fD6:function fD6(d){this.a=d},
fD7:function fD7(){},
fD8:function fD8(d){this.a=d},
n0(d,e,f,g,h){return new C.EV(f,g,d)},
hUL(d){var w=d.z,v=B.U(w).k("Z<1>")
w=B.C(new B.Z(w,new C.ffQ(),v),v.k("K.E"))
d.z=w
d.x=""},
dy(d,e){var w=$.KI
e.db="__design__:"+(w.length===0?"layer":w)
A.d.c8(d.z,0,e)},
dz(d,e,f,g,h,i,j,k,l){return C.es(A.bi,!1,4279310375,A.aF,"",d,24,A.bp,A.a7,"",e,"design_"+C.cE(),null,"","",0,!1,"",f,g,h,i,"",0,0,"",D.cl,D.f8,j,k,l)},
hqx(d,e){var w
C.hUL(d)
w=A.d.dN($.bEK(),new C.fAX(e),new C.fAY())
$.KI=w.a
d.x=w.a;++d.y
try{w.by(d)}finally{$.KI=""}d.z=B.bq(d.z,!0,x.F)},
EV:function EV(d,e,f){this.a=d
this.b=e
this.e=f},
ffQ:function ffQ(){},
fJe:function fJe(){},
fJf:function fJf(){},
fJg:function fJg(){},
fJr:function fJr(){},
fJw:function fJw(){},
fJx:function fJx(){},
fJy:function fJy(){},
fJz:function fJz(){},
fJA:function fJA(){},
fJB:function fJB(){},
fJC:function fJC(){},
fJh:function fJh(){},
fJi:function fJi(){},
fJj:function fJj(){},
fJk:function fJk(){},
fJl:function fJl(){},
fJm:function fJm(){},
fJn:function fJn(){},
fJo:function fJo(){},
fJp:function fJp(){},
fJq:function fJq(){},
fJs:function fJs(){},
fJt:function fJt(){},
fJu:function fJu(){},
fJv:function fJv(){},
fAX:function fAX(d){this.a=d},
fAY:function fAY(){},
iY(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){return C.es(d,e,f,g,"",4280640491,h,i,j,"",k,l,null,"","",0,!1,"",0,D.bh,4280172719,2,m,n,0,"",o,D.cS,p,q,r)},
D8(d,e,f,g,h,i,j,k,l){return C.es(A.bi,!1,4279310375,A.aF,"",d,24,A.bp,A.a7,"",e,f,null,"","",0,!1,"",0,g,h,i,"",0,0,"",D.cl,D.f8,j,k,l)},
bDr(){var w=new B.V(Date.now(),0,!1)
return A.iB[B.bL(w)-1]+" "+B.bV(w)+", "+B.bC(w)},
ew:function ew(d,e,f){this.a=d
this.b=e
this.c=f},
bAP(d){return new B.iS((A.o.aD(d,24)&255)/255,(A.o.aD(d,16)&255)/255,(A.o.aD(d,8)&255)/255,(d&255)/255)},
i_1(d){var w,v
if(d==null||!A.a.a0(d,"data:image"))return null
try{w=B.ank(A.cF.aM(A.d.gak(d.split(","))))
return w}catch(v){return null}},
i_5(d){var w=d.r
if(!d.cy)return w
return new B.N(B.a(w.split("\n"),x.s),new C.fnQ(),x.dv).aH(0,"\n")},
i_4(d){switch(d.a){case 2:return A.nB
case 1:case 5:return A.fbN
default:return A.U9}},
hZZ(d){switch(d.a){case 2:return A.vr
case 1:case 5:return A.W5
default:return A.abD}},
i_2(d,e){var w,v=null,u=d.ay,t=A.o.aD(u,24),s=A.o.aD(d.ch,24),r=(t&255)===0?v:C.bAP(u),q=(s&255)===0?v:C.bAP(d.ch),p=A.k.E(d.CW*(e/960),0.35,6)
u=q==null
if(u)w=v
else{t=new B.nB(q,p,A.kU)
w=new B.pH(t,t,t,t)}switch(d.ax.a){case 1:return B.lG(v,v,v,new B.kJ(r,w,v,A.acV,v),v,v,v,v)
case 4:return u?new B.fS(v,v,v):B.xc(B.lG(v,v,q,v,p+0.4,v,v,v))
default:return B.lG(v,v,v,new B.kJ(r,w,B.vE(4),A.hQ,v),v,v,v,v)}},
i_0(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=d.c*e,j=d.d*a0,i=d.b,h=i===D.f8?0.4:12,g=A.k.E(d.e*e,h,e),f=A.k.E(d.f*a0,h,a0)
switch(i.a){case 0:w=C.hZZ(d.as)
v=A.k.E(d.w*(e/960),3,96)
u=C.i_5(d)
t=C.bAP(d.Q)
s=d.x.a>=700?A.es:A.w1
r=d.y===A.cD?A.ys:A.alK
q=d.z
p=new B.Dj(w,l,l,B.fb(u,l,l,l,B.hb(l,t,1===q.a?A.aRD:A.aRC,l,l,l,l,l,l,A.dx,l,l,v,r,s,l,!0,l,l,l,l),C.i_4(d.as)))
break
case 1:case 4:o=C.i_1(d.at)
n=i===D.lK&&d.c===0&&d.d===0&&d.e===1&&d.f===1
if(o==null){w=d.db
if(w.length===0)w="Image"
p=B.xc(B.fb(w,l,l,l,B.hb(l,A.rS,l,l,l,l,l,l,l,A.dx,l,l,10,l,l,l,!0,l,l,l,l),l))}else p=new B.Ia(o,n?A.acR:A.Wt,l,l)
break
case 3:w=new B.nB(A.IY,1,A.kU)
u=B.vE(6)
t=d.db
if(t.length===0)t="PDF document"
p=B.lG(A.vr,B.fb(t,l,l,l,B.hb(l,D.elU,l,l,l,l,l,l,l,A.dx,l,l,11,l,A.es,l,!0,l,l,l,l),A.nB),l,new B.kJ(E.aJO,new B.pH(w,w,w,w),u,A.hQ,l),l,l,l,l)
break
case 2:p=C.i_2(d,e)
break
case 5:p=C.i__(d)
break
default:p=l}w=d.cx
if(w!==0)p=B.hi6(-w,p)
w=i===D.cS
if(w){m=A.o.aD(d.Q,24)&255
if(m<255)p=new B.asY(m/255,p)}if(w)return new F.we(k,l,j,l,new B.SB(new B.kI(g,g,f,1/0),p))
if(i===D.lf){i=new B.nB(A.IY,1,A.kU)
i=B.lG(A.vr,p,l,new B.kJ(A.pn,new B.pH(i,i,i,i),B.vE(4),A.hQ,l),l,l,D.bBW,l)}else i=p
return new F.we(k,l,j,l,new B.fS(g,f,i))},
i_3(d,e,f,g){var w,v=null,u=C.bAP(d.e),t=d.f
t=B.a([F.hgJ(t!=null?B.lG(v,v,v,new B.kJ(v,v,v,A.hQ,new B.aXf(E.W7,A.abx,B.a([u,C.bAP(t)],x.cR),v)),v,v,v,v):B.lG(v,v,u,v,v,v,v,v))],x.eR)
w=d.z
A.d.v(t,new B.N(w,new C.fnP(f,g),B.U(w).k("N<1,fg>")))
return F.cvr(t)},
h5I(d){var w=0,v=B.j(x.E),u,t,s,r,q,p,o,n
var $async$h5I=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:n=B.a4x(null,"NGMY Slides",d.b)
for(t=d.r,s=t.length,r=n.c,q=0;q<t.length;t.length===s||(0,B.M)(t),++q){p=t[q]
o=new B.WP(A.wF,A.IV,D.bD4,null,null,null,!1,null)
o=new B.C_(o,new C.fJV(607,787,p,d))
o.N0(n,null)
r.push(o)}u=n.jv(0)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$h5I,v)},
i__(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=C.h4t(d.r),k=l==null,j=k?m:l.b,i=A.a.i(j==null?"":j),h=k?m:l.gakg()
if(h==null)h=A.azg
j=B.tH(4279308564)
w=B.vE(18)
v=new B.nB(B.tH(4287531653),3,A.kU)
u=i.length===0?"My links":i
u=B.a([B.xc(B.fb(u,m,m,m,B.hb(m,A.pn,m,m,m,m,m,m,m,A.dx,m,m,12,m,A.es,m,!0,m,m,m,m),m))],x.eR)
t=k?m:l.c
if(A.a.i(t==null?"":t).length!==0)u.push(B.xc(B.fb(A.a.i(l.c),m,m,m,D.fjk,m)))
u.push(new B.fS(m,8,m))
for(t=B.d1(h,0,B.dB(8,"count",x.S),B.U(h).c),s=t.$ti,t=new B.bS(t,t.gL(0),s.k("bS<ak.E>")),s=s.k("ak.E");t.C();){r=t.d
if(r==null)r=s.a(r)
q=A.a.i(r.c)
p=B.tH(4280690220)
o=new B.a9B(8,8)
n=A.a.i(r.b)
u.push(new B.nU(D.bw7,new C.axf(new C.aiu(q),B.lG(m,B.fb(n.length===0?A.a.i(r.c):n,m,m,m,D.flG,A.nB),m,new B.kJ(p,m,new B.aiV(o,o,o,o),A.hQ,m),m,m,D.bCm,m))))}k=k?m:l.as
if(A.a.i(k==null?"":k).length!==0){k=A.a.i(l.as)
t=B.xc(B.fb(k,m,m,m,D.fkV,m))
u.push(new C.axf(C.hzi(k),t))}return B.lG(m,B.z5(u,A.MD,A.lI),m,new B.kJ(j,new B.pH(v,v,v,v),w,A.hQ,m),m,m,D.bwX,m)},
fnQ:function fnQ(){},
fnP:function fnP(d,e){this.a=d
this.b=e},
fJV:function fJV(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ahc(d){var w,v
for(w=0;w<32;++w){v=D.Hv[w]
if(v.a===d)return v}return null},
hkL(d){var w,v,u=A.a.cu(d,",")
if(!A.a.a0(d,"data:")||u<0)return null
try{w=A.cF.aM(A.a.b7(d,u+1))
return w}catch(v){return null}},
cZ(d,e){var w=d*374761393+e*668265263+1013904223&2147483647
w=(w^w>>>13)*1274126177&2147483647
return((w^w>>>16)&65535)/65535},
htK(d,e){return B.a4(d,!1).cg(B.e_(new C.fQv(e),!0,null,x.fB))},
htJ(d,e){return B.bU(A.K,null,new C.fQu(e),d,!0,!0,!0,null,!1,!1,x.fB)},
j2:function j2(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
EM:function EM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
NJ:function NJ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bka:function bka(d,e,f){var _=this
_.d=d
_.e=$
_.bz$=e
_.aa$=f
_.c=_.a=null},
dXY:function dXY(d){this.a=d},
dXX:function dXX(d,e,f){this.a=d
this.b=e
this.c=f},
dXW:function dXW(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
brP:function brP(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
f_r:function f_r(d,e){this.a=d
this.b=e},
bfg:function bfg(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
b_E:function b_E(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cc5:function cc5(){},
cc6:function cc6(d){this.a=d},
cc7:function cc7(d,e,f){this.a=d
this.b=e
this.c=f},
cc8:function cc8(d,e,f){this.a=d
this.b=e
this.c=f},
fQv:function fQv(d){this.a=d},
ZC:function ZC(d,e){this.c=d
this.a=e},
aAq:function aAq(){var _=this
_.f=_.e=_.d=$
_.r=0
_.c=_.a=null},
dcz:function dcz(d,e,f){this.a=d
this.b=e
this.c=f},
dcE:function dcE(d){this.a=d},
dcF:function dcF(d){this.a=d},
dcD:function dcD(d){this.a=d},
dcG:function dcG(d){this.a=d},
dcC:function dcC(d,e){this.a=d
this.b=e},
dcH:function dcH(d){this.a=d},
dcB:function dcB(d){this.a=d},
dcI:function dcI(d){this.a=d},
dcA:function dcA(d,e){this.a=d
this.b=e},
dcJ:function dcJ(d,e){this.a=d
this.b=e},
fQu:function fQu(d){this.a=d},
fQt:function fQt(d){this.a=d},
fQs:function fQs(d,e,f){this.a=d
this.b=e
this.c=f},
fQr:function fQr(d,e){this.a=d
this.b=e},
aLZ:function aLZ(){},
ifI(d){return B.bU(A.K,null,new C.fSR(),d,!0,!0,!0,null,!1,!1,x.N)},
fSR:function fSR(){},
ZX:function ZX(d){this.a=d},
bgL:function bgL(d){this.d=d
this.c=this.a=null},
djk:function djk(d){this.a=d},
djl:function djl(d,e){this.a=d
this.b=e},
djm:function djm(d){this.a=d},
hWl(d){var w,v=d.split("@")
if(v.length>1){w=B.ca(v[1],16)
if(w!=null)return B.b1(w)}return D.xT},
i9T(d){var w,v=A.d.gI(d.split("@"))
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
i9S(d,e,f,g){var w,v,u,t,s,r=null,q=A.d.gI(d.split("@")),p=C.hWl(d)
switch(q){case"shimmer":return B.nY(A.KZ,g,new C.fGy(p,A.k.F(e,6.283185307179586)/6.283185307179586*1.8-0.4))
case"golddust":return new B.an(A.a_,r,A.b0,A.t,B.a([g,B.e2(B.b4(r,r,r,new C.bg6(e,f,p,r),A.ax),!0,r)],x.p),r)
case"spotlight":w=Math.sin(e)
v=Math.cos(e*0.7)
u=Math.sin(e*2)
t=Math.sin(e*3)
return B.dO(B.eb(A.A,B.d9(F.bUJ(g,B.TC(40,40,r)),0.75+t*0.25),1+u*0.08,r,r),new B.t(w*60,v*26))
case"goldframe":return new B.an(A.a_,r,A.b0,A.t,B.a([g,B.e2(B.b4(r,r,r,new C.bfP(e,p,r),A.ax),!0,r)],x.p),r)
case"twinkle":s=Math.sin(e)
w=A.k.E(0.55+s*0.45,0,1)
return B.d9(B.eL(A.A,e*0.5,B.eb(A.A,g,0.8+(s+1)*0.18,r,r),r),w)
case"orbit":w=Math.cos(e)
v=Math.sin(e)
u=B.dr()
t=u.a
t.$flags&2&&B.aj(t)
t[11]=0.002
u.fG(e)
u.mO(Math.sin(e)*0.3)
return B.dO(B.fv(A.A,g,r,u,!0),new B.t(w*22,v*12))
case"rays":return new B.an(A.a_,r,A.b0,A.t,B.a([B.e2(B.b4(r,r,r,new C.boE(e,f,p,r),A.ax),!0,r),g],x.p),r)
case"bokeh":return new B.an(A.a_,r,A.b0,A.t,B.a([B.e2(B.b4(r,r,r,new C.baG(e,f,p,r),A.ax),!0,r),g],x.p),r)
case"aurora":return new B.an(A.a_,r,A.b0,A.t,B.a([B.e2(B.b4(r,r,r,new C.bak(e,f,p,r),A.ax),!0,r),g],x.p),r)
case"velvet":return new B.an(A.a_,r,A.b0,A.t,B.a([g,B.e2(B.b4(r,r,r,new C.bvB(e,p,r),A.ax),!0,r)],x.p),r)
case"sparkle":return new B.an(A.a_,r,A.b0,A.t,B.a([g,B.e2(B.b4(r,r,r,new C.bsC(e,f,p,r),A.ax),!0,r)],x.p),r)
case"sheen":return new B.an(A.a_,r,A.b0,A.t,B.a([g,B.e2(B.b4(r,r,r,new C.brL(e,p,r),A.ax),!0,r)],x.p),r)
case"filigree":return new B.an(A.a_,r,A.b0,A.t,B.a([g,B.e2(B.b4(r,r,r,new C.bf9(e,p,r),A.ax),!0,r)],x.p),r)
case"crest":s=Math.sin(e)
return new B.an(A.A,r,A.aa,A.f,B.a([B.bT(0,B.e2(B.eb(A.A,B.c1(r,new B.o(r,r,r,r,r,new B.c0(A.A,0.5,A.x,r,0,B.a([p.j(0.35+s*0.12),p.j(0)],x.O),r,r),A.a6),A.bg),1.6+s*0.15,r,r),!0,r),0,0,0),B.eL(A.A,s*0.06,B.eb(A.A,g,1+s*0.05,r,r),r)],x.p),r)}return g},
fGy:function fGy(d,e){this.a=d
this.b=e},
bg6:function bg6(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bfP:function bfP(d,e,f){this.b=d
this.c=e
this.a=f},
boE:function boE(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
baG:function baG(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bak:function bak(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bvB:function bvB(d,e,f){this.b=d
this.c=e
this.a=f},
bsC:function bsC(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
brL:function brL(d,e,f){this.b=d
this.c=e
this.a=f},
bf9:function bf9(d,e,f){this.b=d
this.d=e
this.a=f},
dcg:function dcg(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
xM:function xM(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
fGB(d){var w=d.db
return A.a.a0(w,"marriage_sign_")&&!A.a.a0(w,"marriage_sign_placed_")&&d.b!==D.lf},
i9Y(d,e){var w,v,u,t,s,r,q,p,o,n,m,l="marriage_locked_box_",k="marriage_field_",j=B.a([],x.u)
for(w=d.z,v=w.length,u=0;u<w.length;w.length===v||(0,B.M)(w),++u){t=w[u]
if(A.a.a0(t.db,l))continue
if(Math.abs(t.d+t.f*0.5-e)<0.03)j.push(t)}if(j.length<2)return
A.d.aW(j,new C.fGC())
s=A.d.gI(j).c
for(w=j.length,u=0;u<j.length;j.length===w||(0,B.M)(j),++u){t=j[u]
r=s-t.c
if(Math.abs(r)>0.0001){t.c=s
v=t.db
if(A.a.a0(v,k)){q=A.d.gI(B.aQS(v,k,"",0).split(":"))
for(v=d.z,p=v.length,o=l+q,n=0;n<p;++n){m=v[n]
if(m.db===o)m.c+=r}}}s+=t.e+0.006}},
i9X(d,e){var w,v,u,t,s,r=d.db
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
agR(d,a0,a1,a2,a3,a4){var w=0,v=B.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$agR=B.e(function(a5,a6){if(a5===1)return B.f(a6,v)
for(;;)switch(w){case 0:f=B.U(a4).k("Z<1>")
e=B.C(new B.Z(a4,new C.fyZ(),f),f.k("K.E"))
w=!a2&&e.length!==0?3:4
break
case 3:w=5
return B.b(B.bU(A.dL,null,new C.fz_(e),d,!0,!0,!1,A.lL,!1,!1,x.N),$async$agR)
case 5:t=a6
if(t==="continue"){a1.$1(A.d.gI(e).hJ())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.h6l(d),$async$agR)
case 6:s=a6
if(s==null||d.e==null){w=1
break}r=A.a.i(a3==null?"":a3)
w=r.length!==0?7:9
break
case 7:a6=r
w=8
break
case 9:w=10
return B.b(B.Lu(d,"Search states\u2026","",A.ki,"Choose state"),$async$agR)
case 10:case 8:q=a6
if(q==null||d.e==null){w=1
break}p=C.h5f(s)
if(p==null)p=A.d.gI(D.Rw)
f=C.cE()
o=A.a.i(q)
if(o.length===0)o=null
n=C.cE()
m=p.e
l=C.fGD(p.d)
k=x.u
j=B.a([C.es(A.bi,!1,4279310375,A.aF,"marriage_locked_bg",4280640491,24,A.bp,A.a7,"",1,C.cE(),l,"","",0,!1,"",0,D.bh,4280172719,2,"",0,0,"",D.cl,D.lK,1,0,0)],k)
i=p.f
h=x.F
k=B.C(B.a([C.CW(i,0.016,D.lg,4291404327,0.8,"ring_jewel",0.028,0.42544,0.008),C.CW(0,0.058,D.eR,4291404327,2.4,"ring_l",0.058,0.39064,0.026),C.CW(0,0.058,D.eR,4291404327,2.4,"ring_r",0.058,0.41963999999999996,0.026)],k),h)
k.push(C.KT("HATI YA NDOA",A.L,i,32,A.u,0.048,"title",0.78,0.11,0.086))
k.push(C.KT("Hati ya Makubaliano ya Ndoa",A.L,i,12,A.a7,0.018,"subtitle",0.78,0.11,0.134))
A.d.v(k,C.h26(0.2,0.154,0.6,4291404327,i))
A.d.v(k,C.bAi("TAARIFA ZA WANANDOA",0.176,0.2,0.6,i))
A.d.v(k,C.a1z("Jina la Mume:","groom_name",0.11,0.218,0.78,11,i,""))
A.d.v(k,C.a1z("Jina la Mke:","bride_name",0.11,0.25,0.78,11,i,""))
A.d.v(k,C.a1z("Tarehe ya Ndoa:","tarehe",0.11,0.282,0.78,11,i,""))
A.d.v(k,C.a1z("Mahali:","bride_house",0.11,0.314,0.78,11,i,""))
A.d.v(k,C.bAi("TAMKO LA MAKUBALIANO",0.35,0.2,0.6,i))
k.push(C.CW(m,0.082,D.bh,4291404327,1.15,"intro_frame",0.792,0.104,0.384))
g=C.cE()
k.push(C.es(A.bi,!1,i,A.aF,"marriage_field_utangulizi:"+A.k.ac(0.78,3),4280640491,9.5,A.bp,A.cw,"",0.074,g,null,"","",0,!1,"",0,D.bh,4280172719,2,y.O,0,0,"",D.cl,D.cS,0.78,0.11,0.388))
A.d.v(k,C.h26(0.22,0.47,0.56,4291404327,i))
A.d.v(k,C.bAi("MASHAHIDI",0.49,0.26,0.48,i))
A.d.v(k,C.hmM("Shahidi wa Mume",0.11,0.528,0.37,i,4294967295))
A.d.v(k,C.hmM("Shahidi wa Mke",0.52,0.528,0.37,i,4294967295))
A.d.v(k,C.a1z("Jina:","witness_mume_1_name",0.11,0.564,0.37,10,i,""))
A.d.v(k,C.a1z("Jina:","witness_mke_1_name",0.52,0.564,0.37,10,i,""))
A.d.v(k,C.bAh("witness_mume_1",0.11,0.596,0.37,i))
A.d.v(k,C.bAh("witness_mke_1",0.52,0.596,0.37,i))
A.d.v(k,C.bAi("SAHIHI ZA WANANDOA",0.64,0.2,0.6,i))
k.push(C.KT("Mume",A.L,i,11,A.u,0.016,"mume_h",0.37,0.11,0.678))
k.push(C.KT("Mke",A.L,i,11,A.u,0.016,"mke_h",0.37,0.52,0.678))
A.d.v(k,C.bAh("mchumba_mume",0.11,0.7,0.37,i))
A.d.v(k,C.bAh("mchumba_mke",0.52,0.7,0.37,i))
A.d.v(k,C.bAi("MWANDISHI / MSIMAMIZI",0.744,0.18,0.64,i))
A.d.v(k,C.a1z("Jina:","mwandishi",0.11,0.784,0.26,10,i,""))
A.d.v(k,C.bAh("witness_mume_2",0.38,0.784,0.26,i))
A.d.v(k,C.a1z("Tarehe:","mchumba_mume_tarehe",0.65,0.784,0.24,10,i,""))
h=B.C(C.h26(0.22,0.83,0.56,4291404327,i),h)
h.push(C.KT("NGMY",A.L,i,13,A.u,0.022,"ngmy_mark",0.6,0.2,0.846))
h.push(C.KT("Nakala ya Hati",A.L,4291404327,9,A.a7,0.016,"ngmy_sub",0.6,0.2,0.866))
A.d.v(k,h)
A.d.v(j,k)
a0.$1(C.BV(null,null,null,null,D.or,5,!1,"marriage_agreement",null,null,null,null,f,null,!1,o,p.b,null,null,B.a([C.rF(m,null,0,0,j,n,D.qw,"","","Hati ya Ndoa",D.dh)],x.g),"marriage_"+p.a,null,!1,null))
case 1:return B.h(u,v)}})
return B.i($async$agR,v)},
fGC:function fGC(){},
fyZ:function fyZ(){},
fz_:function fz_(d){this.a=d},
fyX:function fyX(d){this.a=d},
fyY:function fyY(d){this.a=d},
hZs(d){var w=d.a
if(1===w)return"underline"
if(4===w)return"lineThrough"
return"none"},
hZr(d){var w=d==null?null:J.k(d)
switch(w==null?"none":w){case"underline":return A.mX
case"lineThrough":return A.wO
default:return A.aF}},
es(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){return new C.eN(o,a7,a9,b0,a8,n,a2,j,l,k,g,f,d,p,w,i,a0,a1,v,e,h,s,a6,a3,r,q,m,u,a5,t,a4)},
hoT(d){var w,v,u=J.k(d==null?"fade":d)
for(w=0;w<22;++w){v=D.Rg[w]
if(v.b===u)return v}return D.dh},
hVI(d){var w,v,u=J.k(d==null?"text":d)
for(w=0;w<6;++w){v=D.cYM[w]
if(v.b===u)return v}return D.cS},
i1j(d){var w,v,u=J.k(d==null?"rectangle":d)
for(w=0;w<7;++w){v=D.doM[w]
if(v.b===u)return v}return D.bh},
rF(d,e,f,g,h,i,j,k,l,m,n){return new C.lR(i,m,k,j,d,e,n,g,l,f,h==null?B.a([],x.u):h)},
hfu(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=d.h(0,"id")
l=J.k(l==null?"":l)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"notes")
v=J.k(v==null?"":v)
u=C.hXO(d.h(0,"layout"))
t=B.aK(d.h(0,"background"))
t=t==null?m:A.k.N(t)
if(t==null)t=4294967295
s=B.aK(d.h(0,"backgroundEnd"))
s=s==null?m:A.k.N(s)
r=C.hoT(d.h(0,"transition"))
q=B.aK(d.h(0,"durationSeconds"))
q=q==null?m:A.k.N(q)
if(q==null)q=0
p=d.h(0,"slideDesignId")
p=J.k(p==null?"":p)
o=B.aK(d.h(0,"designRevision"))
o=o==null?m:A.k.N(o)
if(o==null)o=0
n=x.c.a(d.h(0,"elements"))
if(n==null)n=m
else{n=J.dc(n,x.f)
n=B.cF(n,new C.chv(),n.$ti.k("K.E"),x.F)
n=B.C(n,B.a6(n).k("K.E"))}return C.rF(t,s,o,q,n==null?B.a([],x.u):n,l,u,v,p,w,r)},
hXO(d){var w,v,u=J.k(d==null?"titleContent":d)
for(w=0;w<9;++w){v=D.aqZ[w]
if(v.b===u)return v}return D.mR},
BV(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,a0,a1,a2,a3,a4){var w=a4==null?new B.V(Date.now(),0,!1):a4
return new C.i4(p,t,a1,h,i,w,a0==null?B.a([C.rF(4294967295,null,0,0,null,C.cE(),D.qw,"","","",D.dh)],x.g):a0,k,s,a2,a3,d,v,u,q,j,r,f,g,e,m,o,n,l)},
Wg(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4="deckKind",a5=a6.h(0,"id")
a5=J.k(a5==null?"":a5)
w=a6.h(0,"name")
w=J.k(w==null?"Untitled Presentation":w)
v=a6.h(0,"themeId")
v=J.k(v==null?"office_blue":v)
u=C.hTP(a6.h(0,"aspectRatio"))
t=B.aK(a6.h(0,"autoAdvanceSeconds"))
t=t==null?a3:A.o.E(A.k.N(t),1,120)
if(t==null)t=5
s=a6.h(0,"updatedAt")
s=B.bi(J.k(s==null?"":s))
if(s==null)s=new B.V(Date.now(),0,!1)
r=a6.h(0,a4)
r=r==null?a3:J.k(r)
q=a6.h(0,"marriageState")
q=q==null?a3:J.k(q)
p=a6.h(0,"transferClaimCode")
p=p==null?a3:J.k(p)
if(J.A(a6.h(0,"transferReceived"),!0)){o=a6.h(0,a4)
o=C.kE(o==null?a3:J.k(o))}else o=!1
n=a6.h(0,a4)
if(C.kE(n==null?a3:J.k(n))){n=a6.h(0,"adminShareEditUntil")
n=n==null?a3:J.k(n)}else n=a3
m=B.aK(a6.h(0,"signatureStrokeWidth"))
if(m==null)m=a3
l=B.aK(a6.h(0,"signatureInkColor"))
l=l==null?a3:A.k.N(l)
k=a6.h(0,"kiapoSignedAt")
k=k==null?a3:J.k(k)
j=J.A(a6.h(0,"cinematic"),!0)
i=J.A(a6.h(0,"loop"),!0)
h=a6.h(0,"aiOutlineJson")
h=h==null?a3:J.k(h)
g=x.c
f=g.a(a6.h(0,"aiSlideIds"))
if(f==null)f=a3
else{f=J.b6(f,new C.chi(),x.N)
f=B.C(f,f.$ti.k("ak.E"))}e=g.a(a6.h(0,"aiExtras"))
if(e==null)e=a3
else{e=J.b6(e,new C.chj(),x.N)
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
g=B.cF(g,new C.chk(),g.$ti.k("K.E"),x.bt)
g=B.C(g,B.a6(g).k("K.E"))}return C.BV(n,e,h,f,u,t,j,r,a2,d,a1,a0,a5,k,i,q,w,l,m,g==null?B.a([C.rF(4294967295,a3,0,0,a3,C.cE(),D.qw,"","","",D.dh)],x.g):g,v,p,o,s)},
kE(d){return d==="marriage_agreement"||d==="hati_kuhowa"||d==="hati_kuhoweya"||d==="hati_malipo_awamu"||d==="hati_kiapo_uongozi"},
hTP(d){var w,v,u=J.k(d==null?"landscape169":d)
for(w=0;w<2;++w){v=D.dpG[w]
if(v.b===u)return v}return D.Df},
cE(){var w=Date.now(),v=$.j3
$.j3=v+1
return""+1000*w+"_"+v},
chM(d,e,f){var w,v,u,t,s,r,q,p=null,o="Click to add title",n=4280640491,m=4280172719,l=4279310375
d.d=e
A.d.a9(d.z)
if(e!==D.Dg){d.e=f.f.l()
w=f.r
d.f=w==null?p:w.l()}switch(e.a){case 0:break
case 1:w=d.z
v=C.cE()
v=C.es(A.L,!1,f.d.l(),A.aF,"",n,40,A.bp,A.u,"",0.2,v,p,"","",0,!1,"",0,D.bh,m,2,o,0,0,"",D.cl,D.cS,0.84,0.08,0.3)
u=C.cE()
A.d.v(w,B.a([v,C.es(A.L,!1,f.e.l(),A.aF,"",n,20,A.bp,A.cw,"",0.12,u,p,"","",0,!1,"",0,D.bh,m,2,"Click to add subtitle",0,0,"",D.cl,D.cS,0.76,0.12,0.58)],x.u))
break
case 2:w=d.z
v=C.cE()
v=C.es(A.bi,!1,f.d.l(),A.aF,"",n,32,A.bp,A.u,"",0.14,v,p,"","",0,!1,"",0,D.bh,m,2,o,0,0,"",D.cl,D.cS,0.88,0.06,0.06)
u=C.cE()
A.d.v(w,B.a([v,C.es(A.bi,!0,f.e.l(),A.aF,"",n,20,A.bp,A.cw,"",0.68,u,p,"","",0,!1,"",0,D.bh,m,2,"\u2022 Tap text to select, then Edit to type\n\u2022 Use Format for size & color\n\u2022 Add images and shapes from Insert",0,0,"",D.cl,D.cS,0.88,0.06,0.24)],x.u))
break
case 3:w=d.z
v=C.cE()
v=C.es(A.bi,!1,f.d.l(),A.aF,"",n,30,A.bp,A.u,"",0.12,v,p,"","",0,!1,"",0,D.bh,m,2,"Two Column Slide",0,0,"",D.cl,D.cS,0.88,0.06,0.06)
u=C.cE()
t=f.e
u=C.es(A.bi,!0,t.l(),A.aF,"",n,18,A.bp,A.a7,"",0.7,u,p,"","",0,!1,"",0,D.bh,m,2,"Left column\n\n\u2022 Point A\n\u2022 Point B",0,0,"",D.cl,D.cS,0.42,0.06,0.22)
s=C.cE()
A.d.v(w,B.a([v,u,C.es(A.bi,!0,t.l(),A.aF,"",n,18,A.bp,A.a7,"",0.7,s,p,"","",0,!1,"",0,D.bh,m,2,"Right column\n\n\u2022 Point C\n\u2022 Point D",0,0,"",D.cl,D.cS,0.42,0.52,0.22)],x.u))
break
case 4:w=f.c
d.e=w.l()
d.f=w.j(0.85).l()
A.d.M(d.z,C.es(A.L,!1,4294967295,A.aF,"",n,42,A.bp,A.u,"",0.2,C.cE(),p,"","",0,!1,"",0,D.bh,m,2,"Section Header",0,0,"",D.cl,D.cS,0.84,0.08,0.38))
break
case 5:w=d.z
v=C.cE()
v=C.es(A.bi,!1,f.d.l(),A.aF,"",n,30,A.bp,A.u,"",0.12,v,p,"","",0,!1,"",0,D.bh,m,2,"Compare",0,0,"",D.cl,D.cS,0.88,0.06,0.06)
u=C.cE()
t=f.c
u=C.es(A.bi,!1,l,A.aF,"",t.j(0.12).l(),24,A.bp,A.a7,"",0.68,u,p,"","",0,!1,"",0,D.bh,t.l(),2,"",0,0,"",D.cl,D.f8,0.42,0.06,0.22)
s=C.cE()
r=f.e
s=C.es(A.bi,!1,r.l(),A.aF,"",n,20,A.bp,A.P,"",0.6,s,p,"","",0,!1,"",0,D.bh,m,2,"Option A",0,0,"",D.cl,D.cS,0.38,0.08,0.26)
q=C.cE()
t=C.es(A.bi,!1,l,A.aF,"",t.j(0.06).l(),24,A.bp,A.a7,"",0.68,q,p,"","",0,!1,"",0,D.bh,t.j(0.5).l(),2,"",0,0,"",D.cl,D.f8,0.42,0.52,0.22)
q=C.cE()
A.d.v(w,B.a([v,u,s,t,C.es(A.bi,!1,r.l(),A.aF,"",n,20,A.bp,A.P,"",0.6,q,p,"","",0,!1,"",0,D.bh,m,2,"Option B",0,0,"",D.cl,D.cS,0.38,0.54,0.26)],x.u))
break
case 6:w=d.z
v=C.cE()
v=C.es(A.L,!1,f.d.l(),A.aF,"",n,36,A.bp,A.u,"",0.35,v,p,"","",0,!1,"",0,D.bh,m,2,"TERM / QUESTION",0,0,"",D.cl,D.cS,0.8,0.1,0.12)
u=C.cE()
A.d.v(w,B.a([v,C.es(A.L,!1,f.e.l(),A.aF,"",n,22,A.bp,A.cw,"",0.35,u,p,"","",0,!1,"",0,D.bh,m,2,"Definition or answer \u2014 flip mentally when presenting",0,0,"",D.cl,D.cS,0.8,0.1,0.52)],x.u))
break
case 7:w=d.z
v=C.cE()
v=C.es(A.bi,!1,f.d.l(),A.aF,"",n,28,A.bp,A.u,"",0.18,v,p,"","",0,!1,"",0,D.bh,m,2,"Quiz Question",0,0,"",D.cl,D.cS,0.88,0.06,0.06)
u=C.cE()
A.d.v(w,B.a([v,C.es(A.bi,!1,f.e.l(),A.aF,"",n,20,A.bp,A.a7,"",0.62,u,p,"","",0,!1,"",0,D.bh,m,2,"A) Answer choice\nB) Answer choice\nC) Answer choice\nD) Answer choice",0,0,"",D.cl,D.cS,0.84,0.08,0.28)],x.u))
break
case 8:w=d.z
v=C.cE()
v=C.es(A.bi,!1,f.d.l(),A.aF,"",n,26,A.bp,A.u,"",0.1,v,p,"","",0,!1,"",0,D.bh,m,2,"Worksheet / Assignment",0,0,"",D.cl,D.cS,0.88,0.06,0.04)
u=C.cE()
A.d.v(w,B.a([v,C.es(A.bi,!1,f.e.l(),A.aF,"",n,18,A.bp,A.a7,"",0.78,u,p,"","",0,!1,"",0,D.bh,m,2,"Name: _______________\nDate: _______________\n\n1. _________________________________\n\n2. _________________________________\n\n3. _________________________________",0,0,"",D.cl,D.cS,0.88,0.06,0.16)],x.u))
break}},
hLr(d){return A.d.dN(D.a3X,new C.chN(d),new C.chO())},
hLo(d){var w,v,u,t,s,r,q,p
if(A.a.i(d).length===0)return B.a([],x.D)
try{w=A.X.aN(0,d,null)
if(!x.j.b(w)){t=B.a([],x.D)
return t}v=B.a([],x.D)
for(t=J.aV(w),s=x.N,r=x.z,q=x.f;t.C();){u=t.gR(t)
if(!q.b(u))continue
try{J.cb(v,C.Wg(B.a2(u,s,r)))}catch(p){}}return v}catch(p){t=B.a([],x.D)
return t}},
fZt(d,e){var w,v,u,t=B.T(x.N,x.I),s=new C.chI(t)
for(w=J.aV(d);w.C();)s.$1(w.gR(w))
for(w=e.length,v=0;v<e.length;e.length===w||(0,B.M)(e),++v)s.$1(e[v])
w=t.$ti.k("bc<2>")
u=B.C(new B.bc(t,w),w.k("K.E"))
A.d.aW(u,new C.chH())
return u},
hfx(d,e){var w,v,u=d.length
if(u===0)return e
w=e.length
if(w===0)return d
v=new C.chD()
if(u!==w)return u>=w?d:e
return v.$1(d).cd(v.$1(e))?d:e},
arF(d){return C.hLm(d)},
hLm(d){var w=0,v=B.j(x.R),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$arF=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=A.a.i(d.toLowerCase())
l=new C.chG()
k=x.D
j=B.a([],k)
t=4
g=l
w=7
return B.b(B.a2J(m),$async$arF)
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
return B.b(B.az(),$async$arF)
case 12:q=f
k=A.a.i(d.toLowerCase())
r=l.$1(B.aU(J.r(q.a,"ngmy_slides_decks_"+k)))
t=2
w=11
break
case 9:t=8
h=s.pop()
w=11
break
case 8:w=2
break
case 11:o=l.$1($.hfw.h(0,m))
n=C.fZt(C.fZt(j,r),o)
if(n.length===0){u=C.hfx(C.hfx(j,r),o)
w=1
break}u=n
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$arF,v)},
chC(d){return C.hLl(d)},
hLl(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o
var $async$chC=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.az(),$async$chC)
case 7:r=f
q=r.tw("ngmy_slides_deleted_"+A.a.i(d.toLowerCase()))
if(q==null)q=A.Z
q=B.k2(q,B.U(q).c)
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
return B.i($async$chC,v)},
b1Q(d,e){return C.hLn(d,e)},
hLn(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m
var $async$b1Q=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$b1Q)
case 6:s=g
q=s.tw("ngmy_slides_deleted_"+A.a.i(d.toLowerCase()))
if(q==null)q=B.a([],x.s)
A.d.M(q,e)
r=q
p=A.a.i(d.toLowerCase())
o=J.ad(r)>500?J.LB(r,J.ad(r)-500):r
w=7
return B.b(s.ar("StringList","ngmy_slides_deleted_"+p,o),$async$b1Q)
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
return B.i($async$b1Q,v)},
Wh(d,e){return C.hLp(d,e)},
hLp(a3,a4){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$Wh=B.e(function(a5,a6){if(a5===1){s.push(a6)
w=t}for(;;)switch(w){case 0:a0=A.a.i(a3.toLowerCase())
if(J.ad(a0)===0){w=1
break}p=$.hfv.h(0,a0)
w=p==null?3:4
break
case 3:w=5
return B.b(C.arF(a3),$async$Wh)
case 5:p=a6
case 4:w=6
return B.b(C.chC(a3),$async$Wh)
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
if(f<=g.gbr())k=f===g.gbr()&&k.b>g.gcC()
else k=!0
k=!k}else k=!0
if(k)n.n(0,l,i)}m=n.$ti.k("bc<2>")
l=m.k("Z<K.E>")
e=B.C(new B.Z(new B.bc(n,m),new C.chJ(o),l),l.k("K.E"))
A.d.aW(e,new C.chK())
$.hfv.n(0,a0,e)
n=B.U(e).k("N<1,a8<n,@>>")
n=B.C(new B.N(e,new C.chL(),n),n.k("ak.E"))
r=A.X.ap(n,null)
$.hfw.n(0,a0,r)
t=8
w=11
return B.b(B.ahE(a0,r),$async$Wh)
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
return B.b(B.az(),$async$Wh)
case 16:q=a6
w=17
return B.b(q.ar("String","ngmy_slides_decks_"+A.a.i(a3.toLowerCase()),r),$async$Wh)
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
return B.i($async$Wh,v)},
J3:function J3(d,e){this.a=d
this.b=e},
arD:function arD(d,e){this.a=d
this.b=e},
uU:function uU(d,e){this.a=d
this.b=e},
mF:function mF(d,e){this.a=d
this.b=e},
hF:function hF(d,e){this.a=d
this.b=e},
eN:function eN(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){var _=this
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
lR:function lR(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
chw:function chw(){},
chx:function chx(){},
chv:function chv(){},
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
chl:function chl(){},
chm:function chm(){},
chi:function chi(){},
chj:function chj(){},
chk:function chk(){},
jN:function jN(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
chN:function chN(d){this.a=d},
chO:function chO(){},
chI:function chI(d){this.a=d},
chH:function chH(){},
chD:function chD(){},
chE:function chE(){},
chF:function chF(){},
chG:function chG(){},
chJ:function chJ(d){this.a=d},
chK:function chK(){},
chL:function chL(){},
ia8(d,e){var w=x.N,v=B.T(w,x.F)
w=new C.fHa(e,v,d,B.aY(w))
w.$1(new C.fH6())
w.$1(new C.fH7())
w.$1(new C.fH8())
w.$1(new C.fH9())
return v},
fHa:function fHa(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fH6:function fH6(){},
fH7:function fH7(){},
fH8:function fH8(){},
fH9:function fH9(){},
b1N:function b1N(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
chr:function chr(d){this.a=d},
chq:function chq(){},
chs:function chs(){},
cht:function cht(d,e){this.a=d
this.b=e},
chu:function chu(d){this.a=d},
aoP:function aoP(d,e){this.c=d
this.a=e},
bjW:function bjW(d,e){var _=this
_.d=$
_.bz$=d
_.aa$=e
_.c=_.a=null},
dKt:function dKt(){},
aLL:function aLL(){},
chz(d,e,f){var w=0,v=B.j(x.y),u,t
var $async$chz=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:if(f){u=!0
w=1
break}t=A.a.i(e)
if(t.length===0){if(d.e!=null)d.K(x.q).f.T(D.f8Z)
u=!1
w=1
break}u=B.l1(!1,d,t,!1,null,A.a6z,null)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$chz,v)},
hLj(d){var w=A.d.bg(D.HE,new C.chA(d))
if(w<0)return!0
return w>=4},
hLk(d){var w=A.d.bg($.bEK(),new C.chB(d))
if(w<0)return!0
return w>=5},
chA:function chA(d){this.a=d},
chB:function chB(d){this.a=d},
ibS(d,e,f){var w,v=null,u=""+f,t="ngmy-pdf-"+A.a.gX(d)+"-"+u,s=f>0?d+"#page="+u:d
$.yU()
$.qn().q8(t,new C.fK1(s),!0)
u=B.a([B.E4(v,A.qA,t)],x.p)
if(e.length!==0){w=B.m(4)
u.push(B.ao(v,B.p(v,B.d(e,v,v,v,v,v,v,D.fjN,v,v,v),A.f,v,v,new B.o(A.aW,v,v,w,v,v,A.n),v,v,v,v,A.mG,v,v,v),v,v,4,v,4,v))}return new B.an(A.a_,v,A.b0,A.t,u,v)},
fK1:function fK1(d){this.a=d},
ibt(){return C.h5B()},
i8m(){return C.bCF()},
iar(){return C.h5s()},
aPW(d,e,f){var w=0,v=B.j(x.H),u
var $async$aPW=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:w=e==="__ngmy_slides_pdf_staged__"?3:4
break
case 3:w=5
return B.b(C.fJ7(d,f),$async$aPW)
case 5:w=1
break
case 4:if(d.e!=null)d.K(x.q).f.T(B.b3(null,null,null,null,null,A.t,null,B.d(e,null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$aPW,v)},
fJ7(d,e){var w=0,v=B.j(x.H),u
var $async$fJ7=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:u=$.bAQ
if(u==null)u=e+".pdf"
w=2
return B.b(B.bU(A.K,null,new C.fJ8(u,e==="Invoice"),d,!0,!1,!0,null,!1,!1,x.H),$async$fJ7)
case 2:return B.h(null,v)}})
return B.i($async$fJ7,v)},
fJ8:function fJ8(d,e){this.a=d
this.b=e},
adB:function adB(d,e,f){this.c=d
this.d=e
this.a=f},
etK:function etK(d,e){this.a=d
this.b=e},
etL:function etL(d,e){this.a=d
this.b=e},
etM:function etM(d,e){this.a=d
this.b=e},
etN:function etN(d){this.a=d},
adS:function adS(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
b1M(d,e,f,g,h,i,j,k,l,m,n,o){return new C.b1L(g,m,f,d,e,h,l,k,j,o,i,null)},
hrS(d){return B.cB(new C.fH5(d))},
h5D(d){switch(d.a){case 0:return"\u23ed\ufe0f"
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
ibB(d){if(d===D.cl)return"None"
return C.h5D(d)},
bBl(d,e,f,g){return C.i1q(d,e,f,g)},
i1q(d,e,f,g){var w=0,v=B.j(x.H),u,t,s
var $async$bBl=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:s={}
if(d.e==null){w=1
break}t=B.a4(d,!0)
if($.h2p&&t.pJ())t.eL()
$.h2p=!0
s.a=null
w=3
return B.b(B.i0(A.bl,!0,"Animation preview",d,new C.fqE(s,e,g,f),null,A.eN,!0,x.H),$async$bBl)
case 3:s=s.a
if(s!=null)s.a4(0)
$.h2p=!1
case 1:return B.h(u,v)}})
return B.i($async$bBl,v)},
fTF(d,e,f){var w=0,v=B.j(x.H),u,t,s,r
var $async$fTF=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:e.$0()
if(d.e==null){w=1
break}t=A.k.E(B.aI(d,A.bX,x.w).w.a.a*0.88,280,440)
s=f===D.cl
r=s?"\u23ed\ufe0f None \u2014 no slide transition":C.h5D(f)+" Slide transition preview"
s=s?Ag.FV:A.vO
w=3
return B.b(C.bBl(d,s,new B.a7(t,t*0.56,B.by(B.m(14),new C.aJn(f,null),A.aq),null),r),$async$fTF)
case 3:case 1:return B.h(u,v)}})
return B.i($async$fTF,v)},
hr9(d,e,f){var w,v,u=null,t=A.ct.av(0,A.k.E(e,0,1))
switch(d.a){case 0:return f
case 1:case 13:case 18:return B.d9(f,t)
case 2:case 17:return B.dO(B.d9(f,t),new B.t((1-t)*48,0))
case 3:return B.dO(B.d9(f,t),new B.t(-(1-t)*48,0))
case 4:case 21:return B.dO(B.d9(f,t),new B.t(0,(1-t)*36))
case 5:return B.dO(B.d9(f,t),new B.t(0,-(1-t)*36))
case 6:case 16:return B.eb(A.A,B.d9(f,t),0.5+t*0.5,u,u)
case 7:return B.eb(A.A,B.d9(f,t),1.4-t*0.4,u,u)
case 8:w=B.dr()
v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
w.fG((1-t)*1.2)
return B.fv(A.A,B.d9(f,t),u,w,!0)
case 9:w=B.dr()
v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
w.kd((1-t)*1.2)
return B.fv(A.A,B.d9(f,t),u,w,!0)
case 10:case 19:w=B.dr()
v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.002
w.mO((1-t)*0.8)
v=0.6+t*0.4
w.jU(v,v,v,1)
return B.fv(A.A,B.d9(f,t),u,w,!0)
case 11:case 12:case 14:case 15:case 20:return B.dO(B.d9(f,t),new B.t((1-t)*24,0))}},
bEd(d,e,f){var w=0,v=B.j(x.H),u,t,s,r
var $async$bEd=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:e.$0()
if(d.e==null){w=1
break}t=A.k.E(B.aI(d,A.bX,x.w).w.a.a*0.88,300,440)
s=f===D.cl
r=s?"\u23ed\ufe0f None \u2014 no element animation":C.h5D(f)+" Element animation preview"
s=s?Ag.FV:A.vO
w=3
return B.b(C.bBl(d,s,new B.a7(t,t*0.62,B.by(B.m(14),new C.aA5(f,null),A.aq),null),r),$async$bEd)
case 3:case 1:return B.h(u,v)}})
return B.i($async$bEd,v)},
ibA(d){var w,v,u,t,s=$.agi.W(0,d)
if(s!=null){$.agi.n(0,d,s)
return s}w=A.cF.aM(A.a.b7(d,A.a.cu(d,",")+1))
$.agi.n(0,d,w)
v=$.h3d=$.h3d+w.length
u=B.a6($.agi).k("cv<1>")
for(;;){if(!(v>41943040&&$.agi.a>1))break
t=new B.cv($.agi,u).gaf(0)
if(!t.C())B.b8(B.fs())
v-=$.agi.W(0,t.gR(0)).length
$.h3d=v}return w},
ibf(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=B.af("\\*([^*]+)\\*|\\^([^^]+)\\^|~([^~]+)~",!0,!1,!1,!1).l8(0,d),j=B.C(k,B.a6(k).k("K.E"))
if(j.length===0)return l
w=e.r
if(w==null)w=24
v=B.a([],x.aF)
for(k=j.length,u=w*0.62,t=w*2.4,s=w*1.6,r=0,q=0;q<j.length;j.length===k||(0,B.M)(j),++q){p=j[q].b
o=p.index
if(o>r){n=A.a.aq(d,r,o)
m=f.$1(e)
v.push(new B.eu(n,l,l,A.cQ,l,l,l,l,l,l,m))}n=p[1]
if(n!=null){m=f.$1(e.T5(s,A.u))
v.push(new B.eu(n,l,l,A.cQ,l,l,l,l,l,l,m))}else{n=p[2]
if(n!=null){m=f.$1(e.T5(t,A.u))
v.push(new B.eu(n,l,l,A.cQ,l,l,l,l,l,l,m))}else{n=p[3]
m=f.$1(e.T5(u,A.cw))
v.push(new B.eu(n,l,l,A.cQ,l,l,l,l,l,l,m))}}r=o+p[0].length}if(r<d.length){k=A.a.b7(d,r)
v.push(B.cS(l,l,l,l,l,l,l,l,l,f.$1(e),k))}return v},
a2I(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=x.v
switch(d){case"circle":m=new B.aF($.S().r,A.ag,n,n,B.a([],m))
m.D(new B.jE(e))
return m
case"rounded":m=new B.aF($.S().r,A.ag,n,n,B.a([],m))
w=e.gdC()*0.18
m.D(new B.iN(B.bs(e,new B.aQ(w,w))))
return m
case"triangle":m=new B.aF($.S().r,A.ag,n,n,B.a([],m))
m.D(new B.aX(e.gbK().a,e.b))
w=e.d
m.D(new B.aq(e.c,w))
m.D(new B.aq(e.a,w))
m.D(new B.br())
return m
case"hexagon":w=$.S()
m=B.a([],m)
v=new B.aF(w.r,A.ag,n,n,m)
for(w=e.a,u=e.c-w,w+=u/2,t=e.b,s=e.d-t,t+=s/2,r=0;r<6;++r){q=0.5235987755982988+r*3.141592653589793/3
p=w+Math.cos(q)*u/2
o=t+Math.sin(q)*s/2
if(r===0){p=new B.aX(p,o)
m.push(p)
o=v.f
if(o!=null)p.by(o)
p=v.e
if(p!=null)p.a.delete()
v.e=null}else{p=new B.aq(p,o)
m.push(p)
o=v.f
if(o!=null)p.by(o)
p=v.e
if(p!=null)p.a.delete()
v.e=null}}v.D(new B.br())
return v
case"diamond":m=new B.aF($.S().r,A.ag,n,n,B.a([],m))
m.D(new B.aX(e.gbK().a,e.b))
m.D(new B.aq(e.c,e.gbK().b))
m.D(new B.aq(e.gbK().a,e.d))
m.D(new B.aq(e.a,e.gbK().b))
m.D(new B.br())
return m
case"arch":m=new B.aF($.S().r,A.ag,n,n,B.a([],m))
w=e.a
u=e.d
m.D(new B.aX(w,u))
t=e.c
s=(t-w)/2
p=e.b+s
m.D(new B.aq(w,p))
m.bb3(new B.t(t,p),new B.aQ(s,s))
m.D(new B.aq(t,u))
m.D(new B.br())
return m
default:m=new B.aF($.S().r,A.ag,n,n,B.a([],m))
m.D(new B.od(e))
return m}},
fEF(d,e,f){return B.cB(new C.fEG(D.f1f.t(0,d),d,f,e))},
b1L:function b1L(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
chp:function chp(d){this.a=d},
cho:function cho(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
chn:function chn(){},
b1I:function b1I(d,e){this.b=d
this.a=e},
fH5:function fH5(d){this.a=d},
fH4:function fH4(d,e){this.a=d
this.b=e},
fqE:function fqE(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fqC:function fqC(d){this.a=d},
fqD:function fqD(d,e){this.a=d
this.b=e},
aJn:function aJn(d,e){this.c=d
this.a=e},
bv7:function bv7(d,e){var _=this
_.d=$
_.bz$=d
_.aa$=e
_.c=_.a=null},
f7Z:function f7Z(d,e,f){this.a=d
this.b=e
this.c=f},
aK0:function aK0(d,e){this.b=d
this.a=e},
Vo:function Vo(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bk6:function bk6(d,e){var _=this
_.d=$
_.bz$=d
_.aa$=e
_.c=_.a=null},
dVH:function dVH(d){this.a=d},
dVG:function dVG(d){this.a=d},
dVF:function dVF(d){this.a=d},
J2:function J2(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
chh:function chh(d){this.a=d},
chg:function chg(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aA5:function aA5(d,e){this.c=d
this.a=e},
beA:function beA(){this.d=0
this.c=this.a=null},
d9v:function d9v(d){this.a=d},
d9u:function d9u(d){this.a=d},
a7Y:function a7Y(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bkK:function bkK(d,e){var _=this
_.d=null
_.bz$=d
_.aa$=e
_.c=_.a=null},
ein:function ein(d,e,f){this.a=d
this.b=e
this.c=f},
b_H:function b_H(d,e,f,g){var _=this
_.c=d
_.e=e
_.f=f
_.a=g},
bfN:function bfN(d,e,f){this.b=d
this.c=e
this.a=f},
bqH:function bqH(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
eXY:function eXY(){},
fEG:function fEG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
brI:function brI(d,e,f){this.b=d
this.c=e
this.a=f},
aLY:function aLY(){},
aMq:function aMq(){},
aNI:function aNI(){},
fI6(){var w=0,v=B.j(x.a6),u,t,s,r
var $async$fI6=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.xn.c9().Mn(D.dmG,A.u7,!0),$async$fI6)
case 3:r=e
if(r==null||J.cq(r.a)){u=null
w=1
break}t=J.fq(r.a)
s=t.c
if(s==null)throw B.W("That file could not be opened. Try another file.")
if(s.length>8388608)throw B.W("That file is too big. Use a file under 8 MB.")
u=C.ib9(t.b,s)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fI6,v)},
ib9(d,e){var w,v=d.toLowerCase()
if(A.a.cc(v,".pdf"))return new C.a8g(d,new B.a0k(A.cJ.gct().aM(e),"application/pdf"),"")
if(A.a.cc(v,".docx")){w=C.i36(e)
if(A.a.i(w).length===0)throw B.W("No readable words were found in that Word file.")
return new C.a8g(d,null,w.length>6e4?A.a.aq(w,0,6e4):w)}w=A.cg.L8(0,e,!0)
if(A.a.i(w).length===0)throw B.W("That file is empty.")
return new C.a8g(d,null,w.length>6e4?A.a.aq(w,0,6e4):w)},
i36(d){var w,v,u,t,s,r,q,p,o=null,n=new C.cBq().cM1(B.rp(d,A.ib,o,o),o,o,!1).cNP(0,"word/document.xml")
if(n==null)return""
w=n.cVT()
v=A.cg.L8(0,w==null?$.huf():w,!0).split("</w:p>")
u=new B.ff("")
for(w=v.length,t=x.N,s=0;s<w;++s){r=v[s]
q=B.af("<w:t[^>]*>([^<]*)</w:t>",!0,!1,!1,!1).l8(0,r)
p=A.a.i(B.cF(q,new C.ftD(),B.a6(q).k("K.E"),t).hx(0))
if(p.length!==0){q=B.aL(p,"&lt;","<")
q=B.aL(q,"&gt;",">")
q=B.aL(q,"&quot;",'"')
q=B.aL(q,"&apos;","'")
q=B.aL(q,"&amp;","&")+"\n"
u.a+=q}}w=u.a
return w.charCodeAt(0)==0?w:w},
a8g:function a8g(d,e,f){this.a=d
this.b=e
this.c=f},
ftD:function ftD(){},
hLq(d,e,f,g,h,i,j,k,l){return new C.Oc(l,e,d,g,f,i,h,j,k,null)},
Oc:function Oc(d,e,f,g,h,i,j,k,l,m){var _=this
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
aEV:function aEV(d,e,f,g,h,i,j,k,l){var _=this
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
_.bz$=k
_.aa$=l
_.c=_.a=null},
ezY:function ezY(d){this.a=d},
ezW:function ezW(){},
ezX:function ezX(d){this.a=d},
ewl:function ewl(){},
ewm:function ewm(){},
ewn:function ewn(d,e){this.a=d
this.b=e},
exW:function exW(d){this.a=d},
exK:function exK(){},
exL:function exL(){},
evJ:function evJ(){},
ez3:function ez3(d){this.a=d},
ezU:function ezU(d,e){this.a=d
this.b=e},
exU:function exU(d,e){this.a=d
this.b=e},
ezH:function ezH(d){this.a=d},
ezI:function ezI(){},
ezJ:function ezJ(){},
ezK:function ezK(d){this.a=d},
ezL:function ezL(){},
ev7:function ev7(d){this.a=d},
ezV:function ezV(){},
ex2:function ex2(d,e){this.a=d
this.b=e},
ev5:function ev5(d){this.a=d},
ev6:function ev6(d){this.a=d},
exp:function exp(d){this.a=d},
exq:function exq(d,e,f){this.a=d
this.b=e
this.c=f},
exr:function exr(d){this.a=d},
ex1:function ex1(){},
ex0:function ex0(d){this.a=d},
ewZ:function ewZ(){},
ewY:function ewY(d){this.a=d},
ex_:function ex_(){},
ewh:function ewh(d){this.a=d},
ewi:function ewi(d){this.a=d},
ex8:function ex8(d){this.a=d},
ex3:function ex3(d){this.a=d},
ex4:function ex4(d){this.a=d},
ex5:function ex5(d){this.a=d},
ex6:function ex6(d){this.a=d},
ex7:function ex7(d){this.a=d},
ex9:function ex9(d,e){this.a=d
this.b=e},
ev9:function ev9(){},
eva:function eva(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
exk:function exk(){},
exl:function exl(d,e){this.a=d
this.b=e},
exi:function exi(d,e,f){this.a=d
this.b=e
this.c=f},
exj:function exj(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
exc:function exc(d,e,f){this.a=d
this.b=e
this.c=f},
exd:function exd(d,e,f){this.a=d
this.b=e
this.c=f},
exe:function exe(d){this.a=d},
exf:function exf(d,e){this.a=d
this.b=e},
exg:function exg(d,e){this.a=d
this.b=e},
exh:function exh(d,e){this.a=d
this.b=e},
exb:function exb(d,e){this.a=d
this.b=e},
exn:function exn(d){this.a=d},
exo:function exo(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
exm:function exm(d){this.a=d},
exF:function exF(){},
exG:function exG(){},
exH:function exH(){},
exI:function exI(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
exC:function exC(d){this.a=d},
exE:function exE(){},
exD:function exD(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
exA:function exA(d,e,f){this.a=d
this.b=e
this.c=f},
exB:function exB(d,e){this.a=d
this.b=e},
exJ:function exJ(){},
exa:function exa(d,e){this.a=d
this.b=e},
evq:function evq(){},
evr:function evr(d,e,f){this.a=d
this.b=e
this.c=f},
evs:function evs(d){this.a=d},
evt:function evt(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
evp:function evp(d){this.a=d},
exP:function exP(d){this.a=d},
exO:function exO(d,e){this.a=d
this.b=e},
exN:function exN(d,e){this.a=d
this.b=e},
exM:function exM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
exQ:function exQ(d,e){this.a=d
this.b=e},
eu4:function eu4(d,e){this.a=d
this.b=e},
evo:function evo(d,e){this.a=d
this.b=e},
evm:function evm(d){this.a=d},
exY:function exY(d,e,f){this.a=d
this.b=e
this.c=f},
evi:function evi(d,e){this.a=d
this.b=e},
evh:function evh(d){this.a=d},
exX:function exX(d,e,f){this.a=d
this.b=e
this.c=f},
ev8:function ev8(d){this.a=d},
evK:function evK(){},
ezF:function ezF(d,e){this.a=d
this.b=e},
ezG:function ezG(d,e,f){this.a=d
this.b=e
this.c=f},
ez4:function ez4(d,e,f){this.a=d
this.b=e
this.c=f},
eu5:function eu5(d){this.a=d},
eu2:function eu2(d,e){this.a=d
this.b=e},
etT:function etT(d,e){this.a=d
this.b=e},
etQ:function etQ(d){this.a=d},
etP:function etP(d,e){this.a=d
this.b=e},
etR:function etR(d,e){this.a=d
this.b=e},
evk:function evk(d){this.a=d},
evl:function evl(d,e){this.a=d
this.b=e},
evj:function evj(d){this.a=d},
eux:function eux(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
euy:function euy(d,e){this.a=d
this.b=e},
euC:function euC(d,e){this.a=d
this.b=e},
euD:function euD(d){this.a=d},
euA:function euA(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
euB:function euB(d){this.a=d},
euz:function euz(){},
euw:function euw(d,e,f){this.a=d
this.b=e
this.c=f},
exz:function exz(d,e){this.a=d
this.b=e},
ezO:function ezO(d){this.a=d},
ezP:function ezP(d,e){this.a=d
this.b=e},
ezQ:function ezQ(d){this.a=d},
ezR:function ezR(d,e,f){this.a=d
this.b=e
this.c=f},
ezN:function ezN(d){this.a=d},
ezk:function ezk(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ezj:function ezj(d,e,f){this.a=d
this.b=e
this.c=f},
ezi:function ezi(){},
ezh:function ezh(d,e,f){this.a=d
this.b=e
this.c=f},
ezg:function ezg(d,e){this.a=d
this.b=e},
ezd:function ezd(d,e,f){this.a=d
this.b=e
this.c=f},
ezb:function ezb(d){this.a=d},
ezc:function ezc(d){this.a=d},
ezf:function ezf(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eze:function eze(d){this.a=d},
ewd:function ewd(d,e){this.a=d
this.b=e},
ewc:function ewc(d,e){this.a=d
this.b=e},
ez5:function ez5(){},
ezE:function ezE(d,e){this.a=d
this.b=e},
ezC:function ezC(d){this.a=d},
ezD:function ezD(d){this.a=d},
etY:function etY(d,e){this.a=d
this.b=e},
etW:function etW(d){this.a=d},
etX:function etX(d){this.a=d},
etZ:function etZ(d,e){this.a=d
this.b=e},
eu_:function eu_(d,e,f){this.a=d
this.b=e
this.c=f},
eu3:function eu3(d,e){this.a=d
this.b=e},
etV:function etV(d,e,f){this.a=d
this.b=e
this.c=f},
etU:function etU(d){this.a=d},
exV:function exV(d,e,f){this.a=d
this.b=e
this.c=f},
ezM:function ezM(d,e,f){this.a=d
this.b=e
this.c=f},
ewg:function ewg(d,e,f){this.a=d
this.b=e
this.c=f},
ewf:function ewf(){},
euG:function euG(d,e,f){this.a=d
this.b=e
this.c=f},
euH:function euH(d){this.a=d},
etS:function etS(d,e){this.a=d
this.b=e},
evI:function evI(d,e){this.a=d
this.b=e},
eu0:function eu0(d,e){this.a=d
this.b=e},
eu9:function eu9(d){this.a=d},
eua:function eua(d,e){this.a=d
this.b=e},
eub:function eub(d,e){this.a=d
this.b=e},
eu8:function eu8(d){this.a=d},
eum:function eum(d,e){this.a=d
this.b=e},
eu7:function eu7(d){this.a=d},
eup:function eup(d){this.a=d},
euq:function euq(d){this.a=d},
eur:function eur(d){this.a=d},
eus:function eus(d){this.a=d},
eut:function eut(d){this.a=d},
euu:function euu(){},
euv:function euv(){},
euc:function euc(d){this.a=d},
eud:function eud(d){this.a=d},
eue:function eue(d){this.a=d},
euf:function euf(d){this.a=d},
eug:function eug(d){this.a=d},
euh:function euh(d){this.a=d},
eui:function eui(d){this.a=d},
euj:function euj(d){this.a=d},
euk:function euk(d){this.a=d},
eul:function eul(d){this.a=d},
eun:function eun(d){this.a=d},
euo:function euo(d,e){this.a=d
this.b=e},
evH:function evH(d,e,f){this.a=d
this.b=e
this.c=f},
evG:function evG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
evF:function evF(d,e,f){this.a=d
this.b=e
this.c=f},
evE:function evE(d,e){this.a=d
this.b=e},
eu1:function eu1(d,e){this.a=d
this.b=e},
euK:function euK(d){this.a=d},
euJ:function euJ(d){this.a=d},
euI:function euI(d,e){this.a=d
this.b=e},
euL:function euL(d){this.a=d},
euM:function euM(d){this.a=d},
euN:function euN(d,e){this.a=d
this.b=e},
evn:function evn(d){this.a=d},
exy:function exy(d,e){this.a=d
this.b=e},
exx:function exx(d,e){this.a=d
this.b=e},
exw:function exw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
exu:function exu(d){this.a=d},
exv:function exv(d,e){this.a=d
this.b=e},
exs:function exs(){},
ext:function ext(){},
ez6:function ez6(){},
ez7:function ez7(d,e){this.a=d
this.b=e},
ez8:function ez8(){},
ez9:function ez9(d){this.a=d},
eza:function eza(d,e){this.a=d
this.b=e},
eu6:function eu6(d,e){this.a=d
this.b=e},
evb:function evb(){},
evc:function evc(){},
evd:function evd(){},
evg:function evg(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
evf:function evf(d,e){this.a=d
this.b=e},
eve:function eve(d,e,f){this.a=d
this.b=e
this.c=f},
ewH:function ewH(d){this.a=d},
ewG:function ewG(){},
ewI:function ewI(d,e){this.a=d
this.b=e},
ewJ:function ewJ(d,e){this.a=d
this.b=e},
ewF:function ewF(d){this.a=d},
ewK:function ewK(d,e){this.a=d
this.b=e},
ewE:function ewE(d){this.a=d},
ewL:function ewL(d,e){this.a=d
this.b=e},
ewD:function ewD(d){this.a=d},
ewM:function ewM(d,e){this.a=d
this.b=e},
ewC:function ewC(d){this.a=d},
ewN:function ewN(d,e){this.a=d
this.b=e},
ewB:function ewB(d,e){this.a=d
this.b=e},
ewO:function ewO(d,e){this.a=d
this.b=e},
ewA:function ewA(d){this.a=d},
ewP:function ewP(d,e){this.a=d
this.b=e},
ewz:function ewz(d){this.a=d},
ews:function ews(d,e){this.a=d
this.b=e},
ewt:function ewt(d){this.a=d},
ewu:function ewu(d){this.a=d},
ewr:function ewr(d){this.a=d},
ewv:function ewv(d,e){this.a=d
this.b=e},
ewq:function ewq(d){this.a=d},
eww:function eww(d,e){this.a=d
this.b=e},
ewp:function ewp(d){this.a=d},
ewx:function ewx(d,e){this.a=d
this.b=e},
ewo:function ewo(d){this.a=d},
ewy:function ewy(d){this.a=d},
evA:function evA(d){this.a=d},
evB:function evB(d){this.a=d},
evD:function evD(d){this.a=d},
evv:function evv(d){this.a=d},
evu:function evu(d,e){this.a=d
this.b=e},
evw:function evw(d,e){this.a=d
this.b=e},
evx:function evx(d){this.a=d},
evy:function evy(d){this.a=d},
evz:function evz(d,e){this.a=d
this.b=e},
evC:function evC(d){this.a=d},
ezS:function ezS(d){this.a=d},
ezT:function ezT(d){this.a=d},
ewS:function ewS(d,e){this.a=d
this.b=e},
ewR:function ewR(d,e){this.a=d
this.b=e},
ewQ:function ewQ(d,e){this.a=d
this.b=e},
ewT:function ewT(d){this.a=d},
ewU:function ewU(d){this.a=d},
eyg:function eyg(d,e){this.a=d
this.b=e},
eyh:function eyh(d){this.a=d},
eyi:function eyi(d){this.a=d},
eyt:function eyt(d){this.a=d},
eyE:function eyE(d){this.a=d},
eyP:function eyP(d){this.a=d},
eyW:function eyW(d){this.a=d},
eyX:function eyX(d){this.a=d},
eyY:function eyY(d){this.a=d},
eyZ:function eyZ(d){this.a=d},
ez_:function ez_(d,e){this.a=d
this.b=e},
eyj:function eyj(d){this.a=d},
eyk:function eyk(d){this.a=d},
eyl:function eyl(d){this.a=d},
eym:function eym(d){this.a=d},
eyn:function eyn(d){this.a=d},
eyo:function eyo(d){this.a=d},
eyp:function eyp(d){this.a=d},
eyq:function eyq(d){this.a=d},
eyr:function eyr(d){this.a=d},
eys:function eys(d){this.a=d},
eyu:function eyu(d){this.a=d},
eyv:function eyv(d){this.a=d},
eyw:function eyw(d){this.a=d},
eyx:function eyx(d){this.a=d},
eyy:function eyy(d){this.a=d},
eyz:function eyz(d){this.a=d},
eyA:function eyA(d){this.a=d},
eyB:function eyB(d){this.a=d},
eyC:function eyC(d){this.a=d},
ey6:function ey6(d){this.a=d},
eyD:function eyD(d){this.a=d},
eye:function eye(d){this.a=d},
eyF:function eyF(d){this.a=d},
eyd:function eyd(d,e){this.a=d
this.b=e},
eyG:function eyG(d,e){this.a=d
this.b=e},
eyH:function eyH(d,e){this.a=d
this.b=e},
eyc:function eyc(d,e,f){this.a=d
this.b=e
this.c=f},
ey2:function ey2(d,e){this.a=d
this.b=e},
eyf:function eyf(d){this.a=d},
ez0:function ez0(d,e){this.a=d
this.b=e},
ez2:function ez2(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ez1:function ez1(d,e){this.a=d
this.b=e},
eyI:function eyI(d,e,f){this.a=d
this.b=e
this.c=f},
eyb:function eyb(d,e,f){this.a=d
this.b=e
this.c=f},
ey1:function ey1(d,e,f){this.a=d
this.b=e
this.c=f},
ey_:function ey_(d,e){this.a=d
this.b=e},
eyJ:function eyJ(d,e){this.a=d
this.b=e},
eya:function eya(d,e){this.a=d
this.b=e},
ey0:function ey0(d,e){this.a=d
this.b=e},
exZ:function exZ(d,e){this.a=d
this.b=e},
eyK:function eyK(d){this.a=d},
ey9:function ey9(d){this.a=d},
eyL:function eyL(d){this.a=d},
eyM:function eyM(d){this.a=d},
eyN:function eyN(d){this.a=d},
eyO:function eyO(d){this.a=d},
ey8:function ey8(d){this.a=d},
eyQ:function eyQ(d){this.a=d},
eyR:function eyR(d){this.a=d},
eyS:function eyS(d,e){this.a=d
this.b=e},
ey7:function ey7(d){this.a=d},
eyT:function eyT(d,e){this.a=d
this.b=e},
ey5:function ey5(d){this.a=d},
eyU:function eyU(d,e){this.a=d
this.b=e},
ey4:function ey4(d){this.a=d},
eyV:function eyV(d,e){this.a=d
this.b=e},
ey3:function ey3(d){this.a=d},
euF:function euF(d,e,f){this.a=d
this.b=e
this.c=f},
euE:function euE(d,e){this.a=d
this.b=e},
ezn:function ezn(d,e){this.a=d
this.b=e},
ezm:function ezm(d,e){this.a=d
this.b=e},
ezo:function ezo(d,e){this.a=d
this.b=e},
ezl:function ezl(d,e){this.a=d
this.b=e},
evN:function evN(d,e){this.a=d
this.b=e},
evM:function evM(d){this.a=d},
evO:function evO(d,e){this.a=d
this.b=e},
evL:function evL(d){this.a=d},
ewk:function ewk(){},
ewj:function ewj(){},
ezA:function ezA(d){this.a=d},
ezz:function ezz(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ezy:function ezy(d,e){this.a=d
this.b=e},
ezt:function ezt(d,e){this.a=d
this.b=e},
ezx:function ezx(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ezu:function ezu(d,e){this.a=d
this.b=e},
ezp:function ezp(d){this.a=d},
ezq:function ezq(d){this.a=d},
ezr:function ezr(d){this.a=d},
ezs:function ezs(d){this.a=d},
ezv:function ezv(d,e){this.a=d
this.b=e},
ezw:function ezw(d,e){this.a=d
this.b=e},
ezB:function ezB(d){this.a=d},
ev4:function ev4(d){this.a=d},
ev3:function ev3(d,e,f){this.a=d
this.b=e
this.c=f},
ev2:function ev2(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
euS:function euS(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
euT:function euT(d,e){this.a=d
this.b=e},
euU:function euU(d,e){this.a=d
this.b=e},
euV:function euV(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
euR:function euR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
euW:function euW(d,e){this.a=d
this.b=e},
euY:function euY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
euX:function euX(d,e){this.a=d
this.b=e},
euZ:function euZ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
euQ:function euQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ev_:function ev_(d,e){this.a=d
this.b=e},
euP:function euP(d,e){this.a=d
this.b=e},
ev0:function ev0(d,e){this.a=d
this.b=e},
euO:function euO(d){this.a=d},
ev1:function ev1(d,e){this.a=d
this.b=e},
ewW:function ewW(d){this.a=d},
ewV:function ewV(d){this.a=d},
ewX:function ewX(d,e){this.a=d
this.b=e},
ew0:function ew0(d,e){this.a=d
this.b=e},
ew1:function ew1(d,e){this.a=d
this.b=e},
ew_:function ew_(d,e){this.a=d
this.b=e},
ew2:function ew2(d,e){this.a=d
this.b=e},
evZ:function evZ(d,e){this.a=d
this.b=e},
ew3:function ew3(d,e){this.a=d
this.b=e},
evY:function evY(d,e){this.a=d
this.b=e},
ew4:function ew4(d,e){this.a=d
this.b=e},
evX:function evX(d,e){this.a=d
this.b=e},
ew5:function ew5(d,e){this.a=d
this.b=e},
evW:function evW(d,e){this.a=d
this.b=e},
ew6:function ew6(d,e,f){this.a=d
this.b=e
this.c=f},
evV:function evV(d,e){this.a=d
this.b=e},
ew7:function ew7(d,e,f){this.a=d
this.b=e
this.c=f},
evU:function evU(d,e){this.a=d
this.b=e},
ew8:function ew8(d,e){this.a=d
this.b=e},
evT:function evT(d,e,f){this.a=d
this.b=e
this.c=f},
evQ:function evQ(d,e){this.a=d
this.b=e},
ew9:function ew9(d,e){this.a=d
this.b=e},
evS:function evS(d,e){this.a=d
this.b=e},
ewa:function ewa(d,e){this.a=d
this.b=e},
evR:function evR(d,e,f){this.a=d
this.b=e
this.c=f},
evP:function evP(d,e){this.a=d
this.b=e},
ewb:function ewb(d,e){this.a=d
this.b=e},
ewe:function ewe(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
etO:function etO(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
exT:function exT(d,e){this.a=d
this.b=e},
exR:function exR(d){this.a=d},
exS:function exS(d,e){this.a=d
this.b=e},
afo:function afo(d,e,f){this.a=d
this.b=e
this.c=f},
azs:function azs(d,e){this.c=d
this.a=e},
bdn:function bdn(d,e){var _=this
_.e=_.d=$
_.cO$=d
_.b4$=e
_.c=_.a=null},
d59:function d59(d){this.a=d},
d58:function d58(d){this.a=d},
bdB:function bdB(d,e){this.c=d
this.a=e},
d5v:function d5v(d){this.a=d},
d5w:function d5w(d){this.a=d},
K5:function K5(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bdm:function bdm(){this.d=!1
this.c=this.a=null},
d56:function d56(d){this.a=d},
d52:function d52(d){this.a=d},
d57:function d57(d){this.a=d},
d51:function d51(d){this.a=d},
d55:function d55(d){this.a=d},
d53:function d53(d){this.a=d},
d54:function d54(d,e){this.a=d
this.b=e},
PT:function PT(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
a_P:function a_P(d,e,f){this.c=d
this.d=e
this.a=f},
aEY:function aEY(d,e,f){var _=this
_.d=$
_.e=d
_.f=null
_.r=!0
_.w=$
_.x=null
_.y=!1
_.z=null
_.bz$=e
_.aa$=f
_.c=_.a=null},
eAy:function eAy(){},
eAo:function eAo(d){this.a=d},
eAx:function eAx(d){this.a=d},
eAp:function eAp(d){this.a=d},
eAq:function eAq(d){this.a=d},
eAk:function eAk(d){this.a=d},
eAl:function eAl(d,e){this.a=d
this.b=e},
eAm:function eAm(d){this.a=d},
eAn:function eAn(d,e,f){this.a=d
this.b=e
this.c=f},
eAv:function eAv(){},
eAw:function eAw(d){this.a=d},
eAr:function eAr(d){this.a=d},
eAs:function eAs(d){this.a=d},
eAt:function eAt(d){this.a=d},
eAu:function eAu(d){this.a=d},
eAz:function eAz(d,e,f){this.a=d
this.b=e
this.c=f},
eAB:function eAB(d,e){this.a=d
this.b=e},
eAA:function eAA(d){this.a=d},
Kb:function Kb(d,e){this.c=d
this.a=e},
bsc:function bsc(d,e){this.b=d
this.a=e},
bij:function bij(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bii:function bii(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aKI:function aKI(){},
aMB:function aMB(){},
bxT:function bxT(){},
aMC:function aMC(){},
fK2(){var w=0,v=B.j(x.bZ),u,t,s,r,q
var $async$fK2=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.xn.c9().Mn(B.a(["pdf"],x.s),A.u7,!0),$async$fK2)
case 3:q=e
if(q==null||J.cq(q.a)){u=null
w=1
break}t=J.fq(q.a)
s=t.c
if(s==null||s.length===0){u=null
w=1
break}r=A.a.i(t.b)
if(r.length===0)r="document.pdf"
u=new B.bpp(s,"data:application/pdf;base64,"+A.cJ.gct().aM(s),r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fK2,v)},
ibM(d){var w,v,u,t,s,r
try{w=B.jw(d,0,null)
v=B.af("/Type\\s*/Pages[^>]*?/Count\\s+(\\d+)",!0,!0,!1,!1).cB(w)
if(v!=null){s=v.b[1]
s.toString
u=B.ca(s,null)
if(u!=null&&u>0){s=A.o.E(u,1,200)
return s}}t=B.af("/Type\\s*/Page\\b",!0,!1,!1,!1).l8(0,w).gL(0)
if(t>0){s=J.aRk(t,1,200)
return s}}catch(r){}return 1},
fJU(d){return C.ibL(d)},
ibL(d){var w=0,v=B.j(x.T),u
var $async$fJU=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(!A.a.a0(d,"data:image")){u=d
w=1
break}u=d
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fJU,v)},
bDq(d,e,f,g){return C.ibV(d,e,f,g)},
ibV(b6,b7,b8,b9){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$bDq=B.e(function(c0,c1){if(c0===1){s.push(c1)
w=t}for(;;)switch(w){case 0:if(!new B.ec(b6,x.co).gaf(0).C()){u=null
w=1
break}t=4
r=A.k.E(b7.a,80,2400)
q=A.k.E(b7.b,80,2400)
p=B.hss(b9,new B.au(r,q))
o=1
n=1
m=0
l=0
for(a7=b6.length,a8=0;a8<a7;++a8){k=b6[a8]
if(k==null)continue
a9=o
b0=k.a
o=Math.min(B.jU(a9),b0)
b0=n
a9=k.b
n=Math.min(B.jU(b0),a9)
a9=m
b0=k.a
m=Math.max(B.jU(a9),b0)
b0=l
a9=k.b
l=Math.max(B.jU(b0),a9)}o=A.k.E(o-0.04,0,1)
n=A.k.E(n-0.04,0,1)
m=A.k.E(m+0.04,0,1)
l=A.k.E(l+0.04,0,1)
j=A.k.E(m-o,0.12,1)
i=A.k.E(l-n,0.12,1)
h=A.o.E(A.k.V(800*(i/j)),180,420)
$.S()
g=new B.oW()
f=B.z4(g,null)
a7=B.I()
a7.r=A.r3.gp(0)
f.aP(new B.a3(0,0,800,0+h),a7)
e=800/(j*r)
b1=B.I()
b1.r=b8.gp(b8)
b1.c=p*e
b1.d=A.bB
b1.e=A.dS
b1.b=A.a9
b1.f=!0
d=b1
a0=null
for(a7=b6.length,a8=0;a8<b6.length;b6.length===a7||(0,B.M)(b6),++a8){a1=b6[a8]
if(a1==null){a0=null
continue}a2=new B.t((a1.a-o)/j*800,(a1.b-n)/i*h)
if(a0!=null){a9=a0
b0=a2
b2=d.G()
b3=f.a
b3.drawLine.apply(b3,[a9.a,a9.b,b0.a,b0.b,b2])
b2.delete()}a0=a2}a3=g.ne()
w=7
return B.b(a3.x7(800,h),$async$bDq)
case 7:a4=c1
a3.q()
w=8
return B.b(a4.hr(A.h8),$async$bDq)
case 8:a5=c1
a4.q()
if(a5==null){u=null
w=1
break}a7=J.eQ(A.dG.gaR(a5))
a7=A.cJ.gct().aM(a7)
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
return B.i($async$bDq,v)},
aQu(d,e,f){return C.ibJ(d,e,f)},
ibJ(d,e,f){var w=0,v=B.j(x.go),u,t,s,r,q
var $async$aQu=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:r={}
q=B.a([],x.bA)
r.a=null
r.b=e==null?A.av:e
r.c=f==null?5.2:f
w=3
return B.b(B.ahS(d,e,f,new C.fJS(r,q),q,"Sign document"),$async$aQu)
case 3:if(!new B.ec(q,x.co).gaf(0).C()||r.a==null){u=null
w=1
break}t=r.a
t.toString
w=4
return B.b(C.bDq(q,t,r.b,r.c),$async$aQu)
case 4:s=h
if(s==null){u=null
w=1
break}u=new C.b1P(s,r.c,r.b)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aQu,v)},
ibT(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h="&amp;",g="&lt;",f="&gt;",e="&quot;",d='<!DOCTYPE html><html><head><meta charset="utf-8"><title>'+C.hlx(a0.b)+'</title>\n<style>\n  @page { size: 210mm 297mm; margin: 1.7mm; }\n  * { box-sizing: border-box; }\n  body { font-family: system-ui, sans-serif; background: #fff; color: #111; margin: 0; }\n  h1 { font-size: 14px; margin: 6px 10mm; }\n  .slide { page-break-after: always; width: 100%; height: 293.6mm; border: 1px solid #ddd; position: relative; overflow: hidden; margin: 0 auto 24px; }\n  /* Requested after the margin was already trimmed to near zero: a real\n     zoom-in on the whole slide (frame included), not just less border.\n     `.slide` keeps overflow:hidden so whatever spills past the edge at\n     this scale gets cropped instead of pushing the page layout around.\n     Width and height scale independently \u2014 a separate "wider on the\n     left and right only" request on top of the overall zoom. */\n  .zoom { position: absolute; inset: 0; transform: scaleX(1.0375) scaleY(1.01875); transform-origin: center center; }\n  .el { position: absolute; overflow: hidden; }\n  .txt { white-space: pre-wrap; word-break: break-word; }\n  img { max-width: 100%; max-height: 100%; object-fit: contain; }\n  .pdf { display:flex; flex-direction:column; align-items:center; justify-content:center; height:100%; background:#f8fafc; }\n</style></head><body>\n<h1>'+C.hlx(a0.b)+"</h1>\n"
for(w=a0.r,v=0;v<w.length;++v){u=w[v]
d=d+('<div class="slide" style="background:#'+A.a.b7(A.a.aZ(A.o.fW(u.e,16),8,"0"),2)+'">\n')+'<div class="zoom">\n'
for(t=u.z,s=t.length,r=0;r<t.length;t.length===s||(0,B.M)(t),++r){q=t[r]
d+='<div class="el" style="left:'+A.k.ac(q.c*100,2)+"%;top:"+A.k.ac(q.d*100,2)+"%;width:"+A.k.ac(q.e*100,2)+"%;height:"+A.k.ac(q.f*100,2)+'%">'
p=q.b
switch(p.a){case 0:o=A.a.b7(A.a.aZ(A.o.fW(q.Q,16),8,"0"),2)
p=q.w
n=q.r
n=B.aL(n,"&",h)
n=B.aL(n,"<",g)
n=B.aL(n,">",f)
d+='<div class="txt" style="font-size:'+B.w(p)+"px;color:#"+o+'">'+B.aL(n,'"',e)+"</div>"
break
case 1:case 4:n=q.at
if(n!=null&&A.a.a0(n,"data:image")){m=p===D.lK&&q.c===0&&q.d===0&&q.e===1&&q.f===1?' style="object-fit:fill"':""
d+='<img src="'+n+'" alt=""'+m+" />"}break
case 3:p=q.db
if(p.length===0)p="PDF document"
p=B.aL(p,"&",h)
p=B.aL(p,"<",g)
p=B.aL(p,">",f)
d+='<div class="pdf"><div>\ud83d\udcc4 '+B.aL(p,'"',e)+"</div></div>"
break
case 2:d+='<div style="width:100%;height:100%;background:'+C.hl8(q.ay)+";border:2px solid "+C.hl8(q.ch)+'"></div>'
break
case 5:l=C.h4t(q.r)
p=l==null
n=p?null:l.b
n=A.a.i(n==null?"":n).length===0?"My links":A.a.i(l.b)
n=B.aL(n,"&",h)
n=B.aL(n,"<",g)
n=B.aL(n,">",f)
d=d+'<div style="width:100%;height:100%;box-sizing:border-box;background:#111114;border:4px solid #8E8A85;border-radius:18px;padding:18px 8px 8px;color:#fff;font-family:sans-serif;text-align:center;overflow:hidden">'+('<div style="font-weight:700;font-size:13px">'+B.aL(n,'"',e)+"</div>")
p=p?null:l.gakg()
if(p==null)p=A.azg
n=B.U(p)
k=n.k("jx<1>")
j=new B.jx(p,0,8,k)
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
hl8(d){var w=A.o.aD(d,24)
return"rgba("+(A.o.aD(d,16)&255)+","+(A.o.aD(d,8)&255)+","+(d&255)+","+A.k.ac((w&255)/255,3)+")"},
hlx(d){var w=B.aL(d,"&","&amp;")
w=B.aL(w,"<","&lt;")
w=B.aL(w,">","&gt;")
return B.aL(w,'"',"&quot;")},
bDo(d,e){var w=0,v=B.j(x.H)
var $async$bDo=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b(B.cg(null,null,!0,null,new C.fK0(e,C.ibT(e),d),d,null,!0,!0,x.H),$async$bDo)
case 2:return B.h(null,v)}})
return B.i($async$bDo,v)},
bDp(){var w=0,v=B.j(x.T),u,t,s
var $async$bDp=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A5.GV(92,2400),$async$bDp)
case 3:s=e
if(s==null){u=null
w=1
break}w=4
return B.b(C.fJU(s),$async$bDp)
case 4:t=e
u=t==null?s:t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bDp,v)},
aQv(d){var w=0,v=B.j(x.N),u,t,s,r,q
var $async$aQv=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.h5I(d),$async$aQv)
case 3:t=f
s=A.a.i(d.b)
r=B.af("[^\\w\\-. ]+",!0,!1,!1,!1)
q=A.a.i(B.aL(s,r,"_"))
u=Z.fMz(t,q.length===0?"presentation":q)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aQv,v)},
hft(d,e){var w
if(e<0||e>=d.r.length)return A.o.E(d.e,1,120)
w=d.r[e].w
return A.o.E(w>0?w:d.e,1,120)},
b1P:function b1P(d,e,f){this.a=d
this.b=e
this.c=f},
fJS:function fJS(d,e){this.a=d
this.b=e},
fK0:function fK0(d,e,f){this.a=d
this.b=e
this.c=f},
fJY:function fJY(d){this.a=d},
fJZ:function fJZ(d,e,f){this.a=d
this.b=e
this.c=f},
fK_:function fK_(d,e,f){this.a=d
this.b=e
this.c=f},
ibK(d){return C.kE(d.w)},
ibR(d){var w,v,u,t
if(d.length===0||!A.d.d5(d,C.idB()))return null
for(w=d.length,v=0;v<w;++v){u=d[v].x
t=A.a.i(u==null?"":u)
if(t.length!==0)return t}return""},
yP(d){var w=A.a.i(d),v=B.af("[^A-Z0-9]",!0,!1,!1,!1),u=B.aL(w.toUpperCase(),v,"")
w=$.hyi()
if(w.b.test(u))return u
return null},
hsu(d,e,f){var w,v,u=C.hH3(d),t=$.pC()
for(w=0;w<80;++w){v=u+A.a.aZ(A.o.u(t.au(1000)),3,"0")
if(!f.t(0,v))return v}return u+A.a.aZ(A.o.u(Date.now()%1000),3,"0")},
ibX(d){var w,v,u,t,s=B.aY(x.N)
for(w=J.aV(d.a),v=new B.f5(w,d.b);v.C();){u=w.gR(w).y
t=C.yP(u==null?"":u)
if(t!=null)s.M(0,t)}return s},
fJQ(d,e){var w,v=d.y,u=C.yP(v==null?"":v)
if(u!=null)return d.y=u
w=C.ibX(new B.Z(e,new C.fJR(d),B.U(e).k("Z<1>")))
v=d.x
return d.y=C.hsu(v==null?"":v,null,w)},
ibW(d){var w,v
if(d.length!==1)return null
w=A.d.gI(d)
if(!C.kE(w.w))return null
v=w.y
return C.yP(v==null?"":v)},
hLs(){var w,v=$.pC(),u=J.e4(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.au(32)]
return"SL"+A.d.hx(u)},
Wk(){var w=0,v=B.j(x.P),u,t=2,s=[],r,q,p,o,n,m
var $async$Wk=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return B.b(B.c7(),$async$Wk)
case 3:if(!e){u=B.T(x.N,x.z)
w=1
break}t=5
w=8
return B.b(B.f6("ngmy_slides_transfer_qr_stashes_v1",null,!1,A.bK),$async$Wk)
case 8:r=e
if(r==null){u=B.T(x.N,x.z)
w=1
break}q=J.r(r,"stashes")
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
return B.i($async$Wk,v)},
Wl(d){return C.hLt(d)},
hLt(d){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p
var $async$Wl=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return B.b(B.c7(),$async$Wl)
case 3:if(!f){w=1
break}t=5
w=8
return B.b(B.hI("ngmy_slides_transfer_qr_stashes_v1",B.G(["stashes",d,"savedAt",new B.V(Date.now(),0,!1).a7().ae()],x.N,x.z),!1,!1,A.cG,null),$async$Wl)
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
return B.i($async$Wl,v)},
a8i(a0,a1,a2,a3,a4){var w=0,v=B.j(x.gl),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$a8i=B.e(function(a5,a6){if(a5===1)return B.f(a6,v)
for(;;)switch(w){case 0:w=3
return B.b(B.c7(),$async$a8i)
case 3:if(!a6){u=null
w=1
break}t=A.a.i(a0)
if(t.length===0){u=null
w=1
break}w=4
return B.b(C.Wk(),$async$a8i)
case 4:s=a6
r=C.yP(a2==null?"":a2)
if(r==null)r=a3!=null?C.hsu(a3,null,A.v6):null
q=x.N
p=B.aY(q)
for(o=J.dn(s),n=J.aV(o.gi_(s)),m=x.f;n.C();){l=n.gR(n)
if(!m.b(l))continue
k=J.r(l,"claimCode")
j=C.yP(J.k(k==null?"":k))
if(j!=null)p.M(0,j)}n=o.gdV(s),n=n.gaf(n),k=x.z
case 5:if(!n.C()){w=6
break}i=n.gR(n)
h=i.b
if(!m.b(h)){w=5
break}g=B.a2(h,q,k)
h=g.h(0,"bundleId")
if(J.k(h==null?"":h)!==a1){w=5
break}q=A.dK.aM(t)
g.n(0,"payload",A.cJ.gct().aM(q))
g.n(0,"ownerEmail",A.a.i(a4))
g.n(0,"updatedAt",new B.V(Date.now(),0,!1).a7().ae())
if(D.TL.t(0,A.a.i(a4.toLowerCase())))g.n(0,"sharedByAdmin",!0)
if(r!=null){g.n(0,"kind","marriage")
g.n(0,"usesRemaining",2)
f=r}else{q=g.h(0,"claimCode")
f=C.yP(J.k(q==null?"":q))
if(f==null)f=C.hfy(p)
g.n(0,"usesRemaining",25)}g.n(0,"claimCode",f)
q=i.a
o.n(s,q,g)
w=7
return B.b(C.Wl(s),$async$a8i)
case 7:u=new B.aGq(f,"NGMYSLIDESYNC2|"+q,q)
w=1
break
w=5
break
case 6:e=C.hLs()
n=r==null
d=n?C.hfy(p):r
q=B.T(q,x.C)
q.n(0,"ownerEmail",A.a.i(a4))
q.n(0,"bundleId",a1)
m=A.dK.aM(t)
q.n(0,"payload",A.cJ.gct().aM(m))
n=!n
q.n(0,"usesRemaining",n?2:25)
q.n(0,"createdAt",new B.V(Date.now(),0,!1).a7().ae())
if(D.TL.t(0,A.a.i(a4.toLowerCase())))q.n(0,"sharedByAdmin",!0)
q.n(0,"claimCode",d)
if(n)q.n(0,"kind","marriage")
o.n(s,e,q)
w=8
return B.b(C.Wl(s),$async$a8i)
case 8:u=new B.aGq(d,"NGMYSLIDESYNC2|"+e,e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a8i,v)},
hfy(d){var w,v,u=$.pC()
for(w=0;w<200;++w){v="SL"+A.a.aZ(A.o.u(u.au(1000)),3,"0")
if(d.M(0,v))return v}return"SL"+A.a.aZ(A.o.u(Date.now()%1000),3,"0")},
arH(d){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$arH=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=A.a.i(d)
p=q.length===0
if(p)f=p
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.c7(),$async$arH)
case 5:f=!f
case 4:if(f){w=1
break}w=6
return B.b(C.Wk(),$async$arH)
case 6:t=f
s=J.a5(t)
r=s.gL(t)
s.bu(t,new C.chP(q))
w=s.gL(t)!==r?7:8
break
case 7:w=9
return B.b(C.Wl(t),$async$arH)
case 9:case 8:case 1:return B.h(u,v)}})
return B.i($async$arH,v)},
arG(d){var w=0,v=B.j(x.T),u,t,s,r,q,p,o
var $async$arG=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:p=C.yP(d)
o=p==null
if(o)f=o
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.c7(),$async$arG)
case 5:f=!f
case 4:if(f){u=null
w=1
break}o=J
w=6
return B.b(C.Wk(),$async$arG)
case 6:t=o.jY(f),t=t.gaf(t),s=x.f
case 7:if(!t.C()){w=8
break}r=t.gR(t)
q=r.b
if(!s.b(q)){w=7
break}q=J.r(q,"claimCode")
if(C.yP(J.k(q==null?"":q))===p){u=C.a8h(r.a)
w=1
break}w=7
break
case 8:u=null
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$arG,v)},
a8h(d){var w=0,v=B.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$a8h=B.e(function(a0,a1){if(a0===1)return B.f(a1,v)
for(;;)switch(w){case 0:g=A.a.i(d)
f=g.length===0
if(f)a1=f
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.c7(),$async$a8h)
case 5:a1=!a1
case 4:if(a1){u=null
w=1
break}w=6
return B.b(C.Wk(),$async$a8h)
case 6:p=a1
o=J.a5(p)
n=o.h(p,g)
m=x.f
if(!m.b(n)){u=null
w=1
break}l=J.a5(n)
k=B.aK(l.h(n,"usesRemaining"))
j=k==null?null:A.k.N(k)
if(j==null)j=0
if(j<=0){u=null
w=1
break}k=l.h(n,"payload")
t=J.k(k==null?"":k)
if(J.ad(t)===0){u=null
w=1
break}s=null
try{s=A.cg.cA(0,A.cF.aM(t))}catch(e){u=null
w=1
break}if(A.a.i(s).length===0){u=null
w=1
break}k=l.h(n,"ownerEmail")
if(D.TL.t(0,A.a.i(J.k(k==null?"":k).toLowerCase()))||J.A(l.h(n,"sharedByAdmin"),!0))try{r=A.X.aN(0,s,null)
if(m.b(r)){q=B.a2(r,x.N,x.z)
J.aH(q,"sharedByAdmin",!0)
s=A.X.ap(q,null)}}catch(e){}h=j-1
m=l.h(n,"kind")
m=J.k(m==null?"":m)
if(h<=0&&m!=="marriage")o.W(p,g)
else{m=x.N
l=x.z
l=B.dQ(B.a2(n,m,l),m,l)
l.n(0,"usesRemaining",h)
l.n(0,"lastUsedAt",new B.V(Date.now(),0,!1).a7().ae())
o.n(p,g,l)}w=7
return B.b(C.Wl(p),$async$a8h)
case 7:u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a8h,v)},
ibQ(d,e,f){var w,v=B.T(x.N,x.z)
v.n(0,"type","ngmy_slides_library_v1")
v.n(0,"ownerEmail",A.a.i(e))
v.n(0,"exportedAt",new B.V(Date.now(),0,!1).a7().ae())
if(f)v.n(0,"sharedByAdmin",!0)
w=B.U(d).k("N<1,a8<n,@>>")
w=B.C(new B.N(d,new C.fJX(),w),w.k("ak.E"))
v.n(0,"decks",w)
return v},
fK4(d,e,f,g){var w
if(e!=null){w=B.T(x.N,x.z)
w.n(0,"type","ngmy_slides_deck_v1")
w.n(0,"ownerEmail",A.a.i(f))
w.n(0,"exportedAt",new B.V(Date.now(),0,!1).a7().ae())
if(g)w.n(0,"sharedByAdmin",!0)
w.n(0,"deck",e.ag())
return A.X.ap(w,null)}return A.X.ap(C.ibQ(d==null?B.a([],x.D):d,f,g),null)},
fK3(d,e,f,g,h){var w=0,v=B.j(x.eb),u,t,s,r
var $async$fK3=B.e(function(i,j){if(i===1)return B.f(j,v)
for(;;)switch(w){case 0:w=3
return B.b(C.a8i(h,d,e,f,g),$async$fK3)
case 3:r=j
if(r!=null){t=r.b
s=r.a
if(s==null)s=C.yP(e==null?"":e)
u=new B.aGc(s,t)
w=1
break}t=A.dK.aM(h)
t=A.kt.gct().aM(t)
u=new B.aGc(C.yP(e==null?"":e),"NGMY_SL:"+t)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fK3,v)},
h5K(d){var w,v,u,t,s="ngmy_slides_deck_v1",r="ngmy_slides_library_v1",q=A.a.i(d)
if(J.ad(q)===0)return!1
if(J.d2(q,"NGMYSLIDESYNC2|"))return!0
if(J.d2(q,"NGMYSLIDECODE|"))return!0
if(J.d2(q,"NGMY_SL:"))return!0
if(J.f0(q,s)||J.f0(q,r))return!0
if(J.d2(q,"{"))try{w=A.X.aN(0,q,null)
if(x.f.b(w)){u=J.r(w,"type")
v=J.k(u==null?"":u)
u=J.A(v,s)||J.A(v,r)
return u}}catch(t){}return!1},
ibU(d){var w,v,u,t,s,r=d.z,q=r==null?null:A.a.i(r)
r=d.d
for(r=[q,r==null?null:A.a.i(r)],w=0;w<2;++w){v=r[w]
if(v==null||v.length===0)continue
if(C.h5K(v))return v
u=A.a.cu(v,"NGMYSLIDESYNC2|")
if(u>=0){t=A.a.i(A.a.b7(v,u))
if(C.h5K(t))return t}s=A.a.cu(v,"NGMY_SL:")
if(s>=0){t=A.a.i(A.a.b7(v,s))
if(C.h5K(t))return t}}return null},
fJT(d){var w,v,u,t=A.a.i(d)
if(J.ad(t)===0||J.d2(t,"NGMYSLIDESYNC2|"))return B.a([],x.D)
try{w=null
v=x.P
if(J.d2(t,"NGMY_SL:"))w=v.a(A.X.aN(0,A.cg.cA(0,A.cF.aM(J.ne(t,8))),null))
else w=v.a(A.X.aN(0,t,null))
v=C.hVb(w)
return v}catch(u){v=B.a([],x.D)
return v}},
ahD(d){var w=0,v=B.j(x.R),u,t,s,r,q
var $async$ahD=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=A.a.i(d)
w=A.a.a0(q,"NGMYSLIDECODE|")?3:4
break
case 3:t=q.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return B.b(C.arG(t[1]),$async$ahD)
case 7:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fJT(s)
w=1
break}case 6:u=B.a([],x.D)
w=1
break
case 4:r=C.yP(q)
w=r!=null&&!A.a.t(q,"|")&&!A.a.a0(q,"{")?8:9
break
case 8:w=10
return B.b(C.arG(r),$async$ahD)
case 10:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fJT(s)
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
return B.b(C.a8h(t[1]),$async$ahD)
case 15:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fJT(s)
w=1
break}case 14:u=B.a([],x.D)
w=1
break
case 12:u=C.fJT(q)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ahD,v)},
hVb(d){var w,v,u,t=J.a5(d),s=t.h(d,"type"),r=J.k(s==null?"":s)
if(!J.A(t.h(d,"sharedByAdmin"),!0)){s=t.h(d,"ownerEmail")
w=D.TL.t(0,A.a.i(J.k(s==null?"":s).toLowerCase()))}else w=!0
if(r==="ngmy_slides_deck_v1"){v=t.h(d,"deck")
if(!x.f.b(v))return B.a([],x.D)
return B.a([C.h5H(C.Wg(B.a2(v,x.N,x.z)),w)],x.D)}if(r==="ngmy_slides_library_v1"){u=t.h(d,"decks")
if(!x.j.b(u))return B.a([],x.D)
t=J.dc(u,x.f)
t=B.cF(t,new C.fgj(w),t.$ti.k("K.E"),x.I)
t=B.C(t,B.a6(t).k("K.E"))
return t}return B.a([],x.D)},
h5H(d,e){var w,v,u,t,s,r,q,p,o=d.ag()
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
J.aH(s,"id",""+1000*r+"_"+q)}}p=C.Wg(B.a2(o,x.N,x.z))
if(e&&C.kE(p.w))p.Q=new B.V(Date.now(),0,!1).a7().bS(144e8).ae()
return p},
bD9(){var w=0,v=B.j(x.aT),u,t,s
var $async$bD9=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.GU(),$async$bD9)
case 3:s=e
if(s==null||A.a.i(s).length===0){u=null
w=1
break}w=4
return B.b(C.ahD(s),$async$bD9)
case 4:t=e
u=J.cq(t)?null:t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bD9,v)},
fSU(d){var w=0,v=B.j(x.T),u,t
var $async$fSU=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.i0(D.XJ,!0,"Dismiss",d,new C.fSV(),new C.fSW(),A.FT,!0,x.N),$async$fSU)
case 3:t=f
if(t==null){u=null
w=1
break}if(t.length===0){if(d.e!=null)d.K(x.q).f.T(D.f77)
u=null
w=1
break}u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fSU,v)},
ifL(d,e,f,g,h){return B.a4(d,!1).cg(B.e_(new C.fSX(h,e,g,f),!0,null,x.H))},
fJR:function fJR(d){this.a=d},
chP:function chP(d){this.a=d},
fJX:function fJX(){},
fgj:function fgj(d){this.a=d},
fSV:function fSV(){},
fSW:function fSW(){},
fSX:function fSX(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Wi:function Wi(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aEW:function aEW(){var _=this
_.d="one"
_.e=null
_.r=_.f=!1
_.c=_.a=null},
eA4:function eA4(){},
eA0:function eA0(d,e){this.a=d
this.b=e},
eA3:function eA3(d,e){this.a=d
this.b=e},
eA1:function eA1(d){this.a=d},
eA2:function eA2(d){this.a=d},
eA5:function eA5(d){this.a=d},
eA6:function eA6(d){this.a=d},
eA9:function eA9(d){this.a=d},
eAa:function eAa(d){this.a=d},
eA8:function eA8(d){this.a=d},
eAb:function eAb(d){this.a=d},
eA7:function eA7(d){this.a=d},
eAc:function eAc(d,e){this.a=d
this.b=e},
eA_:function eA_(d,e){this.a=d
this.b=e},
ezZ:function ezZ(d,e){this.a=d
this.b=e},
Wj:function Wj(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bl4:function bl4(){var _=this
_.c=_.a=_.f=_.e=_.d=null},
eAd:function eAd(d,e){this.a=d
this.b=e},
eAe:function eAe(d){this.a=d},
eAf:function eAf(){},
eAg:function eAg(d){this.a=d},
eAh:function eAh(d,e){this.a=d
this.b=e},
aET:function aET(d){this.a=d},
aEU:function aEU(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
etI:function etI(d){this.a=d},
etH:function etH(){},
etJ:function etJ(d){this.a=d},
etE:function etE(d){this.a=d},
etD:function etD(){},
etF:function etF(d){this.a=d},
etG:function etG(d){this.a=d},
bvs:function bvs(){},
arI:function arI(d){this.a=d},
aEX:function aEX(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
eAj:function eAj(d){this.a=d},
eAi:function eAi(d){this.a=d},
i_y(){var w,v,u,t
for(v=0;v<4;++v){w=D.daV[v]
try{if(Ad.bZI(w)){u=w
return u}}catch(t){}}return null},
Ru(d,e){return C.i8x(d,e)},
i8x(c6,c7){var w=0,v=B.j(x.T),u,t=2,s=[],r=[],q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5
var $async$Ru=B.e(function(c9,d0){if(c9===1){s.push(d0)
w=t}for(;;)switch(w){case 0:c2={}
c3=c7.r
if(c3.length===0){u="This presentation has no slides."
w=1
break}q=C.i_y()
if(q==null){u="This browser cannot record video. Try Chrome, Edge, or a recent Safari."
w=1
break}b2=c7.d===D.or?0.5625:1.7777777777777777
b3=b2>=1
b4=c2.a=A.k.V(b3?1280:1280*b2)
b5=c2.b=A.k.V(b3?1280/b2:1280)
c2.a=b4-A.o.F(b4,2)
c2.b=b5-A.o.F(b5,2)
b6=B.qF(c6,!0)
b6.toString
p=B.a4(c6,!0)
b7=new B.cA(null,x.A)
b8=A.d.gI(c3)
b9=$.ax()
o=new B.ez(b8,b9)
n=new B.ez("Getting ready\u2026",b9)
m=new B.ez(0,b9)
l=B.ou(new C.fE8(c2,b7,o),!1,!1)
b6.lX(0,l)
b9=x.H
B.cg(null,A.dd,!1,null,new C.fE9(n,m),c6,null,!0,!0,b9)
k=new C.fEd(b7)
j=new C.fEe()
i=null
t=4
b3=c2.a
h=Ak.aSP(c2.b,b3)
b3=h.getContext("2d")
b3.toString
g=b3
f=J.fVP(h,30)
e=B.a([],x.aK)
b3=x.z
i=Ad.aXO(f,B.G(["mimeType",q,"videoBitsPerSecond",8e6],b3,b3))
A.Ih.yB(i,"dataavailable",new C.fEa(e))
d=new B.bY(new B.bh($.bB,x.dT),x.b2)
A.Ih.yB(i,"stop",new C.fEb(d))
J.aic(n,"Drawing slide 1 of "+c3.length+"\u2026")
c5=j
w=8
return B.b(k.$0(),$async$Ru)
case 8:w=7
return B.b(c5.$1(d0),$async$Ru)
case 7:a0=d0
J.fVR(g,a0,0,0,c2.a,c2.b)
i.start(200)
a1=0
case 9:if(!(b3=a1,b8=c3.length,b3<b8)){w=11
break}a2=c3[a1]
w=a1>0?12:13
break
case 12:J.aic(n,"Drawing slide "+B.w(a1+1)+" of "+b8+"\u2026")
J.aic(o,a2)
c5=j
w=15
return B.b(k.$0(),$async$Ru)
case 15:w=14
return B.b(c5.$1(d0),$async$Ru)
case 14:a0=d0
case 13:J.fVR(g,a0,0,0,c2.a,c2.b)
a3=A.o.E(a2.w>0?a2.w:c7.e,1,120)
J.aic(n,"Recording slide "+B.w(a1+1)+" of "+c3.length+" \xb7 "+B.w(a3)+" s")
a4=new B.V(Date.now(),0,!1).bS(1e6*a3)
case 16:b3=Date.now()
b8=a4
if(b3>=b8.gbr())b3=b3===b8.gbr()&&0<b8.gcC()
else b3=!0
if(!b3){w=17
break}J.fVR(g,a0,0,0,c2.a,c2.b)
w=18
return B.b(B.bP(A.fq,null,b9),$async$Ru)
case 18:w=16
break
case 17:J.aic(m,(a1+1)/c3.length)
case 10:++a1
w=9
break
case 11:J.aic(n,"Saving your video\u2026")
i.stop()
w=19
return B.b(d.a.da(0,A.o6),$async$Ru)
case 19:a5=A.d.gI(q.split(";"))
a6=B.hK(e,a5)
c3=(self.URL||self.webkitURL).createObjectURL(a6)
c3.toString
a7=c3
a8=J.A(a5,"video/mp4")?"mp4":"webm"
c3=A.a.i(c7.b)
b3=B.af("[^\\w\\-. ]+",!0,!1,!1,!1)
a9=A.a.i(B.aL(c3,b3,"_"))
c0=B.mR(a7)
c0.download=B.w(J.ad(a9)===0?"presentation":a9)+"."+B.w(a8)
c3=c0.style
c3.display="none"
b0=c0
c3=document.body
if(c3!=null)c3.appendChild(b0).toString
J.Ha(b0)
J.lB(b0)
B.bP(A.q2,new C.fEc(a7),b9)
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
J.lB(l)
if(p.pJ())p.eL()
c3=o
b3=$.ax()
c3.si3(b3)
J.aRo(c3,0)
c3=n
c3.si3(b3)
J.aRo(c3,0)
c3=m
c3.si3(b3)
J.aRo(c3,0)
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Ru,v)},
fE8:function fE8(d,e,f){this.a=d
this.b=e
this.c=f},
fE7:function fE7(){},
fE9:function fE9(d,e){this.a=d
this.b=e},
fEd:function fEd(d){this.a=d},
fEe:function fEe(){},
fEa:function fEa(d){this.a=d},
fEb:function fEb(d){this.a=d},
fEc:function fEc(d){this.a=d},
bvF:function bvF(d,e,f){this.c=d
this.d=e
this.a=f},
far:function far(){},
fas:function fas(){},
cia(d){var w=0,v=B.j(x.at),u,t,s
var $async$cia=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.arQ(d,A.zN),$async$cia)
case 3:s=f
if(s==null){u=null
w=1
break}t=s.bD(new B.V(Date.now(),0,!1))
if(t.a<0){u=A.bD
w=1
break}u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$cia,v)},
ci9(d){if(d==null)return!1
return d==="marriage_agreement"||d==="hati_kuhowa"||d==="hati_kuhoweya"||d==="hati_malipo_awamu"},
a7Z:function a7Z(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bkO:function bkO(d){var _=this
_.d=null
_.e=d
_.f=!1
_.c=_.a=null},
eiP:function eiP(d){this.a=d},
eiN:function eiN(d){this.a=d},
eiO:function eiO(d,e){this.a=d
this.b=e},
a8T:function a8T(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.cx=d
_.cy=e
_.x=f
_.y=!0
_.a=g
_.b=h
_.c=i
_.d=j
_.oC$=k
_.oD$=l
_.oE$=m
_.nW$=n},
a8U:function a8U(d,e){this.a=d
this.b=e},
b3t:function b3t(){},
ckK:function ckK(){},
ckL:function ckL(){},
ckM:function ckM(d,e,f,g,h,i,j,k,l){var _=this
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
hzi(d){return new C.aiu(d)},
a38:function a38(){},
aiu:function aiu(d){this.a=d},
aRJ:function aRJ(){},
axf:function axf(d,e){this.d=d
this.b=e
this.a=null},
aTf:function aTf(d){this.b=d
this.a=null},
fzi(d,e){var w=0,v=B.j(x.H)
var $async$fzi=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b($.S().gxM().M5(d,e),$async$fzi)
case 2:B.fMF()
return B.h(null,v)}})
return B.i($async$fzi,v)},
hpM(d,e){return(A.rD[(d^e)&255]^A.o.aD(d,8))>>>0},
fwx(d,e,f,g,h,i){var w=C.i4R(d,A.dg,f,null,A.d_,g,h,i)
return w},
hrD(d){var w=F.hsl(d)
if(w==null)return""
return"- WRITE EVERYTHING THE READER SEES IN "+w+" \u2014 every title, subtitle, sentence and note, with natural, correct grammar. Do not mix in English (JSON keys stay as given)."},
hH3(d){var w,v,u,t,s,r=A.a.i(d)
if(r.length===0)return"XX"
w=r.toLowerCase()
v=A.pj.h(0,w)
if(v!=null)return v
for(u=A.pj.gdV(A.pj),u=u.gaf(u);u.C();){t=u.gR(u).b
if(t.toLowerCase()===w)return t}u=B.af("[^A-Z]",!0,!1,!1,!1)
s=B.aL(r.toUpperCase(),u,"")
if(s.length>=2)return A.a.aq(s,0,2)
return A.a.aq(s+"XX",0,2)},
hrL(){var w,v
for(w=0,v='=== EVERYTHING YOU KNOW ABOUT NGMY (use only this; never invent features, numbers, prices, names or dates) ===\nTHE FOUNDER: NGMY stands for New Global Movement for Youth. It was created by KB PABLO QR (always written in capital letters), the Founder, President and CEO of NGMY. The "QR" in his name comes from QR codes, which NGMY and his business use a lot, and it is part of his brand. He built NGMY as one app (ngmy.org) that gives young people and families tools for work, money, learning, community and creativity. When a story is about the CEO, call him KB PABLO QR, Founder, President and CEO of NGMY. Do not give him a different name, age, birthplace, degrees, awards or family details, and do not make up quotes from him.\n\nFEATURES:\n';w<45;++w)v+="- "+D.d4D[w]+"\n"
v=v+"\nABOUT THE COMMUNITY AND THE SYSTEM (facts you can use; do not invent numbers, names or dates):\n- The community is M'MBONDO (also written MBONDO). Its motto is \"EMO 'YA M'MBONDO\". Members live in different US states.\n- The Civic Registry \u2014 people also just call it \"the system\" \u2014 was built inside the NGMY app for the M'MBONDO community.\n- Why it was built: a big problem in the community was not seeing where contribution money went. People gave but were unsure what happened to their money, so trust and giving went down. The system brings light: every contribution gets a receipt, members can see where the money is going and how much has been contributed, and that transparency builds trust and the confidence to keep contributing \u2014 when you know where your money goes, you give.\n- What it does:\n  \u2022 Registers community members with their details and a member ID card (Registry ID), kept safely as the community's records.\n  \u2022 Lets each state know how many members it has (state totals, nationwide totals).\n  \u2022 Records contributions with receipts and contribution reports, so everyone sees the money trail.\n  \u2022 Authorized Registrars enroll members and help them; there is a help mode for assisted sign-up.\n  \u2022 Civic Voting for community decisions, and a Civic State Wallet that shows each state's funds.\n- How NGMY helps members beyond the registry: help finding jobs and applying for them, fixing their houses, helping them get houses, sending money, and NGMY Advisors (AI advisors) who help people apply for jobs, food stamps and other benefits and fill out applications for them.\n- Tone for this community: warm, proud, hopeful and trustworthy; it is about unity, transparency and helping each other.\n\n\nHOW MEMBERS USE THE APP:\n"+"WHAT NGMY IS: NGMY stands for New Global Movement for Youth \u2014 multi-hub app by KB PABLO QR (Founder/CEO). Live site ngmy.org. Wallet balance in USD. Gmail login (@gmail.com), password 6+ chars, also Google/GitHub sign-in.\n\nBOTTOM NAV (7 tabs):\n1) Home \u2014 brand, Helper AI entry, loans, tech frames (Neural/Signal/Core/Vault Channel games).\n2) Tool Hub \u2014 Business Card Creator, Menu Studio (+ Bio Studio), Business Essentials.\n3) Slides \u2014 presentations + Marriage/Hati documents.\n4) NGMY Hub (center) \u2014 Civic Registry, NGMY Store, Help Center, Document Scanner; center star may open App Builder when enabled.\n5) Advisors \u2014 AI advisor chat (this hub).\n6) Creator Hub \u2014 Doc Share, Quote Calc, QR Generator, Play Zone, Kiswahili School, Recorder, Video Studio, Phone Unlock.\n7) Profile \u2014 theme, logout, legal, Worksheets (Projects / Cashier IOUs / Family Tree).\n\nMENU STUDIO (Tool Hub \u2192 Menu Studio):\n- Menus tab: design restaurant/business menus, publish public link https://ngmy.org/?m={slug}\n- First menu free; more menus need Menu Studio subscription (paywall shows price).\n- Bios tab (same studio): link-in-bio pages, publish https://ngmy.org/?b={slug}\n- First Bio free with starter template; more Bios/templates need Bio Studio subscription.\n- Extra Bio photo/header changes may need a photo pack after free changes.\n- Local Menu / Local Bio: Home Essentials hub \u2192 device-local publish at /local-menu/ and /local-bio/\n\nBUSINESS CARD: Tool Hub \u2192 create/edit/download. Paid unlock for edit+download window (paywall).\n\nSLIDES: Slides tab. Free blank + some class templates/designs. Slides Pro unlocks more. Marriage documents are a separate short session unlock.\n\nADVISORS: 10 free minutes, then Advisors subscription for unlimited chat (admins unlimited). ADVISOR BROWSER: the live browser is free for 10 minutes, then $5.99 buys 2 hours (Stripe or Cash App with a screenshot approved by an admin) to use within a week; it only counts while the browser is open.\n\nCIVIC REGISTRY (NGMY Hub): community ID, PIN gate, enrollment, registrars (AR), civic registrar roles. Guest enroll can use ?civic=enroll. Georgia stays free. Every other state gets a 2-month free Civic Registry trial for Authorized Registrars, then $50/mo State Registrar sponsorship starting month 3.\n\nVAULT GAMES (Home \u2192 Vault Channel): arcade games. Need an active Growth Income investment for full access; otherwise one free play total. Free trial does not unlock games.\n\nGROWTH INCOME / INVEST: purchase a plan, daily clock-in for ROI over work days; min withdraw typically $10. Plans are $5, $20, $30, $50 and $100 (the most expensive is $100). Plan availability is admin-controlled.\n\nCREATOR TOOLS:\n- Doc Share \u2014 share docs; free individual creations then paid / org license.\n- QR Generator \u2014 free saves then paid access window.\n- Transfer \u2014 receive free; limited free sends then monthly unlock.\n- Kiswahili School \u2014 Basics free; other levels one-time unlock.\n- Document Scanner \u2014 trial then monthly.\n- Message Translator \u2014 paid unlimited.\n- Phone Unlock \u2014 short access window.\n- Video Studio / Recorder / Play Zone \u2014 Creator Hub tools.\n- Worksheets \u2192 Cashier (IOUs/receipts), Family Tree (create/photos may be paid).\n- Invoices \u2014 free standard tier with limited free premium saves; paid templates via paywall.\n- App Builder \u2014 Hub center (if enabled); cloud + Bolt AI may be paid.\n- Music Studio \u2014 AI songs may cost wallet credits when enabled.\n\nSTORE / JOBS / LOANS / HELP: Store in NGMY Hub; loans from Home; jobs/helpers need approval; Help Center + NGMY Helper AI for support.\n\nGUEST LINKS (no full login): /bio/, /local-bio/, /menu/, /local-menu/, /invoice/, /app/{slug}.\n\nHOW TO HELP MEMBERS: Give clear tap-by-tap steps. Stay in character. If unsure of a live price, send them to the feature paywall rather than guessing.\n"
return A.a.i(v.charCodeAt(0)==0?v:v)},
bBi(d,e){return C.i1l(d,e)},
i1l(d,e){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l
var $async$bBi=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
if(d.length===0){u=!1
w=1
break}r=B.hK([d],"application/pdf")
n=x.z
q=B.aUW(B.a([r],x.e3),e,B.G(["type","application/pdf"],n,n))
p=B.cz(B.G(["files",B.a([q],x.fA),"title",e],x.N,x.C))
n=window.navigator
n.toString
o=n
w=7
return B.b(B.eh(B.jT(o,"share",[p]),x.H),$async$bBi)
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
return B.i($async$bBi,v)},
h5B(){var w=0,v=B.j(x.y),u,t,s
var $async$h5B=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=$.fnR
s=$.bAQ
if(s==null)s="presentation.pdf"
if(t==null||t.length===0){u=!1
w=1
break}u=C.bBi(t,s)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$h5B,v)},
bCF(){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$bCF=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=$.fnR
l=$.bAQ
k=l==null?"presentation.pdf":l
if(m==null||m.length===0){u=!1
w=1
break}w=Z.hmd()?3:4
break
case 3:w=5
return B.b(C.bBi(m,k),$async$bCF)
case 5:if(e){u=!0
w=1
break}case 4:r=$.bAR
if(r==null||r.length===0){u=!1
w=1
break}t=7
p=B.mR(null)
p.href=r
p.download=k
o=p.style
o.display="none"
q=p
o=document.body
if(o!=null)o.appendChild(q).toString
J.Ha(q)
w=10
return B.b(B.bP(A.a1,null,x.H),$async$bCF)
case 10:J.lB(q)
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
return B.i($async$bCF,v)},
h5s(){var w=0,v=B.j(x.y),u,t,s,r
var $async$h5s=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=$.bAR
if(r==null||r.length===0){u=!1
w=1
break}try{t=window
t.toString
A.lQ.qZ(t,r,"_blank")
u=!0
w=1
break}catch(q){u=!1
w=1
break}case 1:return B.h(u,v)}})
return B.i($async$h5s,v)},
h5J(d,e){var w=0,v=B.j(x.H),u,t
var $async$h5J=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:t=(self.URL||self.webkitURL).createObjectURL(B.hK([d],"text/html"))
t.toString
u=window
u.toString
A.lQ.qZ(u,t,"_blank")
return B.h(null,v)}})
return B.i($async$h5J,v)},
b2q(d,e){var w=0,v=B.j(x.y),u
var $async$b2q=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(B.b2s(d,e),$async$b2q)
case 3:if(g){u=!0
w=1
break}w=4
return B.b(B.b2r(d),$async$b2q)
case 4:u=g<2
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$b2q,v)}},D,A8,H,An,A9,Y,V,Ao,G,F,E,I,W,Q,Z,A_,Aa,Ap,X,Ab,L,Aq,A0,O,A1,M,Ac,Ar,As,P,A2,At,Ad,Ae,Au,Af,Ag,Ah,Av,Aw,R,Ax,K,Ay,S,T,Az,N,A3,A4,A5
J=c[1]
B=c[0]
A=c[2]
Ai=c[201]
A6=c[71]
Aj=c[52]
Ak=c[62]
U=c[217]
A7=c[55]
Al=c[141]
Am=c[227]
C=a.updateHolder(c[5],C)
D=c[215]
A8=c[228]
H=c[133]
An=c[38]
A9=c[219]
Y=c[216]
V=c[205]
Ao=c[129]
G=c[185]
F=c[33]
E=c[218]
I=c[96]
W=c[118]
Q=c[143]
Z=c[30]
A_=c[173]
Aa=c[153]
Ap=c[181]
X=c[106]
Ab=c[115]
L=c[220]
Aq=c[128]
A0=c[65]
O=c[195]
A1=c[80]
M=c[155]
Ac=c[116]
Ar=c[94]
As=c[222]
P=c[120]
A2=c[136]
At=c[93]
Ad=c[56]
Ae=c[191]
Au=c[37]
Af=c[78]
Ag=c[142]
Ah=c[226]
Av=c[229]
Aw=c[225]
R=c[72]
Ax=c[223]
K=c[170]
Ay=c[182]
S=c[50]
T=c[221]
Az=c[230]
N=c[202]
A3=c[224]
A4=c[111]
A5=c[61]
C.o2.prototype={
vg(d){var w,v,u=this,t=u.c
if(t===0)return u
w=!u.a
v=u.b
t=C.u_(t,v)
return new C.o2(t===0?!1:w,v,t)},
bMR(d){var w,v,u,t,s,r,q=this.c
if(q===0)return $.Dd()
w=q+d
v=this.b
u=new Uint16Array(w)
for(t=q-1;t>=0;--t)u[t+d]=v[t]
s=this.a
r=C.u_(w,u)
return new C.o2(r===0?!1:s,u,r)},
bNn(d){var w,v,u,t,s,r,q,p=this,o=p.c
if(o===0)return $.Dd()
w=o-d
if(w<=0)return p.a?$.h78():$.Dd()
v=p.b
u=new Uint16Array(w)
for(t=d;t<o;++t)u[t-d]=v[t]
s=p.a
r=C.u_(w,u)
q=new C.o2(r===0?!1:s,u,r)
if(s)for(t=0;t<d;++t)if(v[t]!==0)return q.aF(0,$.a2W())
return q},
dU(d,e){var w,v,u,t,s,r=this
if(e<0)throw B.W(B.dJ("shift-amount must be posititve "+e,null))
w=r.c
if(w===0)return r
v=A.o.ao(e,16)
if(A.o.F(e,16)===0)return r.bMR(v)
u=w+v+1
t=new Uint16Array(u)
C.hiM(r.b,w,e,t)
w=r.a
s=C.u_(u,t)
return new C.o2(s===0?!1:w,t,s)},
mt(d,e){var w,v,u,t,s,r,q,p,o,n=this
if(e<0)throw B.W(B.dJ("shift-amount must be posititve "+e,null))
w=n.c
if(w===0)return n
v=A.o.ao(e,16)
u=A.o.F(e,16)
if(u===0)return n.bNn(v)
t=w-v
if(t<=0)return n.a?$.h78():$.Dd()
s=n.b
r=new Uint16Array(t)
C.hR7(s,w,e,r)
w=n.a
q=C.u_(t,r)
p=new C.o2(q===0?!1:w,r,q)
if(w){if((s[v]&A.o.dU(1,u)-1)!==0)return p.aF(0,$.a2W())
for(o=0;o<v;++o)if(s[o]!==0)return p.aF(0,$.a2W())}return p},
aK(d,e){var w,v=this.a
if(v===e.a){w=C.cJh(this.b,this.c,e.b,e.c)
return v?0-w:w}return v?-1:1},
a8E(d,e){var w,v,u,t=this,s=t.c,r=d.c
if(s<r)return d.a8E(t,e)
if(s===0)return $.Dd()
if(r===0)return t.a===e?t:t.vg(0)
w=s+1
v=new Uint16Array(w)
C.hR5(t.b,s,d.b,r,v)
u=C.u_(w,v)
return new C.o2(u===0?!1:e,v,u)},
Hw(d,e){var w,v,u,t=this,s=t.c
if(s===0)return $.Dd()
w=d.c
if(w===0)return t.a===e?t:t.vg(0)
v=new Uint16Array(s)
C.baz(t.b,s,d.b,w,v)
u=C.u_(s,v)
return new C.o2(u===0?!1:e,v,u)},
bzP(d,e){var w,v,u,t,s,r=this.c,q=d.c
r=r<q?r:q
w=this.b
v=d.b
u=new Uint16Array(r)
for(t=0;t<r;++t)u[t]=w[t]&v[t]
s=C.u_(r,u)
return new C.o2(!1,u,s)},
bzO(d,e){var w,v,u=this.c,t=this.b,s=d.b,r=new Uint16Array(u),q=d.c
if(u<q)q=u
for(w=0;w<q;++w)r[w]=t[w]&~s[w]
for(w=q;w<u;++w)r[w]=t[w]
v=C.u_(u,r)
return new C.o2(!1,r,v)},
bzQ(d,e){var w,v,u,t,s,r=this.c,q=d.c,p=r>q?r:q,o=this.b,n=d.b,m=new Uint16Array(p)
if(r<q){w=r
v=d}else{w=q
v=this}for(u=0;u<w;++u)m[u]=o[u]|n[u]
t=v.b
for(u=w;u<p;++u)m[u]=t[u]
s=C.u_(p,m)
return new C.o2(s!==0,m,s)},
V7(d,e){var w,v,u,t=this
if(t.c===0||e.c===0)return $.Dd()
w=t.a
if(w===e.a){if(w){w=$.a2W()
return t.Hw(w,!0).bzQ(e.Hw(w,!0),!0).a8E(w,!0)}return t.bzP(e,!1)}if(w){v=t
u=e}else{v=e
u=t}return u.bzO(v.Hw($.a2W(),!1),!1)},
a8(d,e){var w,v,u=this,t=u.c
if(t===0)return e
w=e.c
if(w===0)return u
v=u.a
if(v===e.a)return u.a8E(e,v)
if(C.cJh(u.b,t,e.b,w)>=0)return u.Hw(e,v)
return e.Hw(u,!v)},
aF(d,e){var w,v,u=this,t=u.c
if(t===0)return e.vg(0)
w=e.c
if(w===0)return u
v=u.a
if(v!==e.a)return u.a8E(e,v)
if(C.cJh(u.b,t,e.b,w)>=0)return u.Hw(e,v)
return e.Hw(u,!v)},
aJ(d,e){var w,v,u,t,s,r,q,p=this.c,o=e.c
if(p===0||o===0)return $.Dd()
w=p+o
v=this.b
u=e.b
t=new Uint16Array(w)
for(s=0;s<o;){C.hiN(u[s],v,0,t,s,p);++s}r=this.a!==e.a
q=C.u_(w,t)
return new C.o2(q===0?!1:r,t,q)},
bMQ(d){var w,v,u,t
if(this.c<d.c)return $.Dd()
this.aS2(d)
w=$.h0s.c9()-$.ay0.c9()
v=C.h0u($.h0r.c9(),$.ay0.c9(),$.h0s.c9(),w)
u=C.u_(w,v)
t=new C.o2(!1,v,u)
return this.a!==d.a&&u>0?t.vg(0):t},
cpm(d){var w,v,u,t=this
if(t.c<d.c)return t
t.aS2(d)
w=C.h0u($.h0r.c9(),0,$.ay0.c9(),$.ay0.c9())
v=C.u_($.ay0.c9(),w)
u=new C.o2(!1,w,v)
if($.h0t.c9()>0)u=u.mt(0,$.h0t.c9())
return t.a&&u.c>0?u.vg(0):u},
aS2(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.c
if(f===$.hiJ&&d.c===$.hiL&&g.b===$.hiI&&d.b===$.hiK)return
w=d.b
v=d.c
u=16-A.o.gakE(w[v-1])
if(u>0){t=new Uint16Array(v+5)
s=C.hiH(w,v,u,t)
r=new Uint16Array(f+5)
q=C.hiH(g.b,f,u,r)}else{r=C.h0u(g.b,0,f,f+2)
s=v
t=w
q=f}p=t[s-1]
o=q-s
n=new Uint16Array(q)
m=C.h0v(t,s,o,n)
l=q+1
k=r.$flags|0
if(C.cJh(r,q,n,m)>=0){k&2&&B.aj(r)
r[q]=1
C.baz(r,l,n,m,r)}else{k&2&&B.aj(r)
r[q]=0}j=new Uint16Array(s+2)
j[s]=1
C.baz(j,s+1,t,s,j)
i=q-1
while(o>0){h=C.hR6(p,r,i);--o
C.hiN(h,j,0,r,o,s)
if(r[i]<h){m=C.h0v(j,s,o,n)
C.baz(r,l,n,m,r)
while(--h,r[i]<h)C.baz(r,l,n,m,r)}--i}$.hiI=g.b
$.hiJ=f
$.hiK=w
$.hiL=v
$.h0r.b=r
$.h0s.b=l
$.ay0.b=s
$.h0t.b=u},
gX(d){var w,v,u,t=new C.cJi(),s=this.c
if(s===0)return 6707
w=this.a?83585:429689
for(v=this.b,u=0;u<s;++u)w=t.$2(w,v[u])
return new C.cJj().$1(w)},
A(d,e){if(e==null)return!1
return e instanceof C.o2&&this.aK(0,e)===0},
tx(d,e){return this.aK(0,e)>0},
N(d){var w,v,u
for(w=this.c-1,v=this.b,u=0;w>=0;--w)u=u*65536+v[w]
return this.a?-u:u},
vb(d){var w,v,u,t,s,r,q,p=this,o={},n=p.c
if(n===0)return 0
w=new Uint8Array(8);--n
v=p.b
u=16*n+A.o.gakE(v[n])
if(u>1024)return p.a?-1/0:1/0
if(p.a)w[7]=128
t=u-53+1075
w[6]=(t&15)<<4
w[7]=(w[7]|A.o.aD(t,4))>>>0
o.a=o.b=0
o.c=n
s=new C.cJk(o,p)
n=s.$1(5)
w[6]=w[6]|n&15
for(r=5;r>=0;--r)w[r]=s.$1(8)
q=new C.cJl(w)
if(J.A(s.$1(1),1))if((w[0]&1)===1)q.$0()
else if(o.b!==0)q.$0()
else for(r=o.c;r>=0;--r)if(v[r]!==0){q.$0()
break}return J.lf(A.aG.gaR(w)).getFloat64(0,!0)},
u(d){var w,v,u,t,s,r=this,q=r.c
if(q===0)return"0"
if(q===1){if(r.a)return A.o.u(-r.b[0])
return A.o.u(r.b[0])}w=B.a([],x.s)
q=r.a
v=q?r.vg(0):r
while(v.c>1){u=$.hwd()
if(u.c===0)B.b8(D.b6R)
t=v.cpm(u).u(0)
w.push(t)
s=t.length
if(s===1)w.push("000")
if(s===2)w.push("00")
if(s===3)w.push("0")
v=v.bMQ(u)}w.push(A.o.u(v.b[0]))
if(q)w.push("-")
return new B.dx(w,x.bJ).hx(0)},
$iaSs:1,
$ihN:1}
C.aRT.prototype={
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
cNP(d,e){var w=this.b.h(0,e)
return w!=null?this.a[w]:null},
gI(d){return A.d.gI(this.a)},
gak(d){return A.d.gak(this.a)},
gan(d){return this.a.length===0},
gcm(d){return this.a.length!==0},
gaf(d){var w=this.a
return new J.kb(w,w.length,B.U(w).k("kb<1>"))}}
C.S8.prototype={
cVT(){var w,v
if(this.as==null)this.bds()
w=this.as
v=w==null?null:w.apv()
return v==null?null:v.eR()},
bds(){var w,v
if(this.as!=null)return
w=this.Q
if(w!=null){v=w.apv().eR()
this.as=new C.bQj(v)}},
gY(d){return this.at}}
C.a44.prototype={
a5(){return"CompressionType."+this.b}}
C.bIi.prototype={
eE(d){var w,v,u,t,s=this
if(d===0)return 0
if(s.c===0){s.c=8
s.b=s.a.cr()}for(w=s.a,v=0;u=s.c,d>u;){v=A.o.dU(v,u)+(s.b&A.zm[u])
d-=u
s.c=8
u=w.b
u.toString
s.b=u[w.c++]}if(d>0){if(u===0){s.c=8
s.b=w.cr()}w=A.o.dU(v,d)
u=s.b
t=s.c-d
v=w+(A.o.fK(u,t)&A.zm[d])
s.c=t}return v}}
C.bGD.prototype={
cM0(d,e){var w,v,u,t,s,r=this,q=new C.bIi(d)
r.cx=r.CW=r.ch=r.ay=0
if(q.eE(8)!==66||q.eE(8)!==90||q.eE(8)!==104)return!1
w=r.a=q.eE(8)-48
if(w<0||w>9)return!1
r.b=new Uint32Array(w*1e5)
v=0
for(;;){w=d.c
u=d.d
u===$&&B.c()
if(!(w<u))break
t=r.cnE(q)
if(t<0)return!1
if(t===0){q.eE(8)
q.eE(8)
q.eE(8)
q.eE(8)
s=r.cnH(q,e)
if(s<0)return!1
v=(v<<1|v>>>31)^s^4294967295}else if(t===2){q.eE(8)
q.eE(8)
q.eE(8)
q.eE(8)
return!0}}return!0},
cnE(d){var w,v,u,t
for(w=!0,v=!0,u=0;u<6;++u){t=d.eE(8)
if(t!==D.dsh[u])v=!1
if(t!==D.d4_[u])w=!1
if(!w&&!v)return-1}return v?0:2},
cnH(d3,d4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9=this,d0=4294967295,d1=d3.eE(1),d2=((d3.eE(8)<<8|d3.eE(8))<<8|d3.eE(8))>>>0
c9.c=new Uint8Array(16)
for(w=0;w<16;++w){v=c9.c
u=d3.eE(1)
v.$flags&2&&B.aj(v)
v[w]=u}c9.d=new Uint8Array(256)
for(w=0,t=0;w<16;++w,t+=16)if(c9.c[w]!==0)for(s=0;s<16;++s){v=c9.d
u=d3.eE(1)
v.$flags&2&&B.aj(v)
v[t+s]=u}c9.c2H()
v=c9.fx
if(v===0)return-1
r=v+2
q=d3.eE(3)
if(q<2||q>6)return-1
v=d3.eE(15)
c9.ax=v
if(v<1)return-1
c9.w=new Uint8Array(18002)
c9.x=new Uint8Array(18002)
for(w=0;v=c9.ax,w<v;++w){for(s=0;;){if(d3.eE(1)===0)break;++s
if(s>=q)return-1}v=c9.w
v.$flags&2&&B.aj(v)
v[w]=s}p=new Uint8Array(6)
for(w=0;w<q;++w)p[w]=w
for(u=c9.x,o=c9.w,n=u.$flags|0,w=0;w<v;++w){m=o[w]
l=p[m]
for(;m>0;m=k){k=m-1
p[m]=p[k]}p[0]=l
n&2&&B.aj(u)
u[w]=l}c9.fr=B.c2(6,$.huj(),!1,x.E)
for(j=0;j<q;++j){v=c9.fr
v[j]=new Uint8Array(258)
i=d3.eE(5)
for(w=0;w<r;++w){for(;;){if(i<1||i>20)return-1
if(d3.eE(1)===0)break
i=d3.eE(1)===0?i+1:i-1}v=c9.fr[j]
v.$flags&2&&B.aj(v)
v[w]=i}}v=$.hui()
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
if(f<h)h=f}c9.bZ7(v[j],u[j],o[j],n[j],h,g,r)
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
a3=c9.aus(d3)
if(a3<0)return-1
for(a4=0;;){if(a3===e)break
if(a3===0||a3===1){a5=-1
a6=1
do{if(a6>=2097152)return-1
if(a3===0)a5+=a6
else if(a3===1)a5+=2*a6
a6*=2
a3=c9.aus(d3)}while(a3===0||a3===1);++a5
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
u[a9]=a7}else{b1=A.o.ao(a8,16)
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
a3=c9.aus(d3)
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
d4.bs(c3)
c1=(c1<<8^D.HL[c1>>>24&255^v])>>>0;--c2}if(c4===c0)return c1
if(c4>c0)return-1
v=c9.b
b5=v[b5]
b6=b5>>>8
if(b8===0){b8=D.HO[b9];++b9
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
if(b8===0){b8=D.HO[b9];++b9
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
if(b8===0){b8=D.HO[b9];++b9
if(b9===512)b9=0}u=b8===1?1:0
c5=b5&255^u;++c4
if(c4===c0){c6=b7
b5=b6
c2=3
continue}if(c5!==b7){c6=c5
b5=b6
c2=3
continue}b5=v[b6]
if(b8===0){b8=D.HO[b9];++b9
if(b9===512)b9=0}u=b8===1?1:0
c2=(b5&255^u)+4
b5=v[b5>>>8]
b6=b5>>>8
if(b8===0){b8=D.HO[b9];++b9
if(b9===512)b9=0}v=b8===1?1:0
c6=b5&255^v
c4=c4+1+1
b5=b6}else for(c7=b7,c2=0,c3=0,c4=1;;c3=c7,c7=c8){if(c2>0){for(v=c3&255;;){if(c2===1)break
d4.bs(c3)
c1=c1<<8^D.HL[c1>>>24&255^v];--c2}d4.bs(c3)
c1=(c1<<8^D.HL[c1>>>24&255^v])>>>0}if(c4>c0)return-1
if(c4===c0)return c1
v=1e5*c9.a
if(b5>=v)return-1
u=c9.b
b5=u[b5]
c5=b5&255
b5=b5>>>8;++c4
c2=0
if(c5!==c7){d4.bs(c7)
c1=(c1<<8^D.HL[c1>>>24&255^c7&255])>>>0
c8=c5
continue}if(c4===c0){d4.bs(c7)
c1=(c1<<8^D.HL[c1>>>24&255^c7&255])>>>0
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
aus(d){var w,v,u,t,s=this,r=s.ay
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
t=d.eE(u)
for(;;){if(u>20)return-1
r=s.cy
r===$&&B.c()
if(t<=r[u])break;++u
t=(t<<1|d.eE(1))>>>0}r=s.dx
r===$&&B.c()
r=t-r[u]
if(r<0||r>=258)return-1
w=s.db
w===$&&B.c()
return w[r]},
bZ7(d,e,f,g,h,i,j){var w,v,u,t,s,r,q,p
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
c2H(){var w,v,u,t=this
t.fx=0
t.e=new Uint8Array(256)
for(w=0;w<256;++w){v=t.d
v===$&&B.c()
if(v[w]!==0){v=t.e
u=t.fx++
v.$flags&2&&B.aj(v)
v[u]=w}}}}
C.cBr.prototype={
aIn(d,e,f){var w,v,u,t,s,r=this,q=r.a=r.bQk(e)
if(q<0)return
e.c=q
if(e.aQ()!==101010256)return
e.b_()
e.b_()
e.b_()
e.b_()
r.f=e.aQ()
r.r=e.aQ()
w=e.b_()
if(w>0)e.aIq(w,!1)
r.co1(e)
q=r.r
v=r.f
u=e.aLs(Math.min(v,1024),v,q)
q=r.x
for(;;){v=u.c
t=u.d
t===$&&B.c()
if(!(v<t))break
if(u.aQ()!==33639248)break
s=new C.b9h()
s.cVS(0,u,e,f)
q.push(s)}},
co1(d){var w,v,u,t,s=d.c,r=this.a-20
if(r<0)return
w=d.a8h(20,r)
if(w.aQ()!==117853008){d.c=s
return}w.aQ()
v=w.ti()
w.aQ()
d.c=v
if(d.aQ()!==101075792){d.c=s
return}d.ti()
d.b_()
d.b_()
d.aQ()
d.aQ()
d.ti()
d.ti()
u=d.ti()
t=d.ti()
this.f=u
this.r=t
d.c=s},
bQk(d){var w,v,u,t,s,r,q,p,o,n
if(d.gL(0)<=4)return-1
w=d.c
v=d.gL(0)-4
u=Math.min(v,1024)
t=v-u
for(s=u-4;t>=0;){d.c=t
r=d.a8h(u,t)
q=d.c
p=r.b
d.c=q+(p==null?0:p.length-r.c)
o=new B.ami(A.ib)
o.aMJ(r.eR(),A.ib,null,null)
for(n=s;n>=0;--n){o.c=n
if(o.aQ()===101010256){d.c=w
return t+n}}t=t>0&&t<u?0:t-u}return-1}}
C.cBp.prototype={}
C.axF.prototype={
a5(){return"ZipEncryptionMode."+this.b}}
C.cBs.prototype={
aIn(d,e,f){var w,v,u,t,s,r,q,p,o=this
if(e.aQ()!==67324752)return
e.b_()
o.b=e.b_()
w=D.aFO.h(0,e.b_())
o.c=w==null?D.Mx:w
o.d=e.b_()
o.e=e.b_()
o.f=e.aQ()
o.r=e.aQ()
o.w=e.aQ()
v=e.b_()
u=e.b_()
o.x=e.aof(v)
o.y=e.hj(u).eR()
w=o.z
t=w.w
o.r=t
w=w.x
o.w=w
o.at=(o.b&1)!==0?D.aX3:D.Eb
o.ay=f
o.Q=e.hj(t)
if(o.at!==D.Eb&&u>2){w=o.y
w.toString
s=B.rp(w,A.ib,null,null)
for(;;){w=s.c
t=s.d
t===$&&B.c()
if(!(w<t))break
if(s.b_()===39169){s.b_()
s.b_()
s.aof(2)
w=s.b
w.toString
r=w[s.c++]
q=s.b_()
o.at=D.aX4
o.ax=new C.cBp(r,q)
w=D.aFO.h(0,q)
o.c=w==null?D.Mx:w}}}if((o.b&8)!==0){p=e.aQ()
if(p===134695760)o.f=e.aQ()
else o.f=p
o.r=e.aQ()
o.w=e.aQ()}},
gL(d){return this.bn8().length},
apv(){var w,v,u,t,s,r=this,q=null,p=r.Q
if(p==null)return B.rp(new Uint8Array(0),A.ib,q,q)
w=r.at
if(w!==D.Eb)if(p.gL(0)<=0)r.at=D.Eb
else{if(w===D.aX3){p=r.bL8(p)
r.Q=p}else if(w===D.aX4){p=r.bKM(p)
r.Q=p}r.at=D.Eb}w=r.c
if(w===D.aik){v=p.c
u=B.dl()
p=r.Q
if(p.gL(0)<=524288e3)u.b=A.pG.BC(p.eR(),!0,!1)
else{t=B.a8I(A.ib,r.w)
p=r.Q
p.toString
A.pG.a4q(p,t,!0,!1)
u.b=t.H3()}r.Q.c=v
return B.rp(u.bk(),A.ib,q,q)}else if(w===D.ail){s=B.a8I(A.ib,32768)
p=r.Q
v=p.c
C.hzt().cM0(p,s)
u=s.H3()
r.Q.c=v
return B.rp(u,A.ib,q,q)}else return B.rp(p.eR(),A.ib,q,q)},
bn8(){var w=this.Q
if(w==null)return new Uint8Array(0)
return w.eR()},
u(d){return this.x},
b9k(d){var w=this.ch,v=C.K1(C.hpM(w[0].N(0),d))
w[0]=v
v=w[1].a8(0,v.V7(0,C.K1(255)))
w[1]=v
w[1]=v.aJ(0,C.K1(134775813)).a8(0,C.K1(1)).V7(0,C.K1(4294967295))
w[2]=C.K1(C.hpM(w[2].N(0),w[1].mt(0,24).N(0)))},
aRr(){var w=(this.ch[2].V7(0,C.K1(65535)).N(0)|2)>>>0
return w*((w^1)>>>0)>>>8&255},
bL8(d){var w,v,u,t,s,r=this,q=null
if(r.Q==null)return B.rp(new Uint8Array(0),A.ib,q,q)
for(w=0;w<12;++w){v=r.Q
u=v.b
u.toString
r.b9k(u[v.c++]^r.aRr())}t=r.Q.eR()
for(v=t.length,u=t.$flags|0,w=0;w<v;++w){s=t[w]^r.aRr()
r.b9k(s)
u&2&&B.aj(t)
t[w]=s}return B.rp(t,A.ib,q,q)},
bKM(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this.ax.c
if(k===1){w=d.hj(8).eR()
v=16}else if(k===2){w=d.hj(12).eR()
v=24}else{w=d.hj(16).eR()
v=32}u=d.hj(2).eR()
t=d.hj(d.gL(0)-10)
s=d.hj(10)
r=t.eR()
k=this.ay
k.toString
q=C.hQN(k,w,v)
p=new Uint8Array(B.ci(A.aG.ds(q,0,v)))
k=v*2
o=new Uint8Array(B.ci(A.aG.ds(q,v,k)))
if(!C.hic(A.aG.ds(q,k,k+2),u))throw B.W(B.fm("password error"))
k=new Uint8Array(16)
n=new C.bFd(k,new Uint8Array(16),p)
k=x.S
m=J.a5t(0,k)
m=n.r=new C.ckz(m)
m.c=!0
m.b=m.bmq(!0,new C.atf(p))
if(m.c)m.d=B.bq(D.oo,!0,k)
else m.d=B.bq(D.za,!0,k)
l=C.hgq(C.hgs(),64)
l.bfP(new C.atf(o))
n.w=l
n.cVs(r,0,r.length)
k=s.eR()
m=n.x
m===$&&B.c()
if(!C.hic(k,m))throw B.W(B.fm("macs don't match"))
return B.rp(r,A.ib,null,null)}}
C.b9h.prototype={
cVS(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=this
n.a=e.b_()
e.b_()
e.b_()
e.b_()
e.b_()
e.b_()
e.aQ()
n.w=e.aQ()
n.x=e.aQ()
w=e.b_()
v=e.b_()
u=e.b_()
n.y=e.b_()
e.b_()
n.Q=e.aQ()
n.as=e.aQ()
if(w>0)n.at=e.aof(w)
if(v>0){t=e.hj(v).eR()
n.ax=t
if(v>=4){s=B.rp(t,A.ib,null,null)
for(;;){t=s.c
r=s.d
r===$&&B.c()
if(!(t<r))break
q=s.b_()
p=s.b_()
o=s.a8h(p,s.c)
t=s.c
r=o.b
s.c=t+(r==null?0:r.length-o.c)
if(q===1){if(p>=8&&n.x===4294967295){n.x=o.ti()
p-=8}if(p>=8&&n.w===4294967295){n.w=o.ti()
p-=8}if(p>=8&&n.as===4294967295){n.as=o.ti()
p-=8}if(p>=4&&n.y===65535)n.y=o.aQ()}}}}if(u>0)e.aof(u)
f.c=n.as
t=new C.cBs(D.Mx,n,D.Eb,B.a([C.K1(0),C.K1(0),C.K1(0)],x.f3))
n.ch=t
t.aIn(0,f,g)},
u(d){return this.at}}
C.cBq.prototype={
cM1(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=new C.cBr(B.a([],x.fT))
this.a=g
g.aIn(0,d,f)
g=B.a([],x.bm)
w=B.T(x.N,x.S)
v=new C.aRT(g,w)
for(u=this.a.x,t=u.length,s=0;s<u.length;u.length===t||(0,B.M)(u),++s){r=u[s]
q=r.ch
p=r.Q>>>16
o=q.x
n=A.a.cc(o,"/")||A.a.cc(o,"\\")
m=w.h(0,o)
l=m!=null?g[m]:h
if(l==null){l=n?new C.S8(o,A.o.ao(Date.now(),1000),0):C.h8z(o,q.w,q)
v.M(0,l)}l.b=p
if(r.a>>>8===3)if((p&61440)===40960){k=C.h8z(o,q.w,q)
if(k.as==null)k.bds()
o=k.as
if(o==null)j=h
else{o=o.a
j=new B.ami(A.ib)
j.aMJ(o,A.ib,h,h)}i=j==null?h:j.eR()
if(i!=null)new B.Gi(!1).DF(i,0,h,!0)}}return v}}
C.bFd.prototype={
cVs(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.w
l===$&&B.c()
l.a.Cz(0,d,0,f)
for(l=e+f,w=m.c,v=d.$flags|0,u=m.b,t=e;t<l;t=s){s=t+16
r=s<=l?16:l-t
C.hzc(u,m.a)
q=m.r
if(16>u.byteLength)B.b8(B.dJ("Input buffer too short",null))
if(16>w.byteLength)B.b8(B.dJ("Output buffer too short",null))
p=q.c
o=q.b
if(p){o===$&&B.c()
q.bOC(u,0,w,0,o)}else{o===$&&B.c()
q.bLc(u,0,w,0,o)}for(n=0;n<r;++n){q=t+n
p=d[q]
o=w[n]
v&2&&B.aj(d)
d[q]=p^o}++m.a}l=m.w
w=l.b
w===$&&B.c()
w=new Uint8Array(w)
m.x=w
l.Lp(w,0)
m.x=A.aG.ds(m.x,0,10)
w=m.w
l=w.a
l.kF(0)
w=w.d
w===$&&B.c()
l.Cz(0,w,0,w.length)
return f}}
C.ckE.prototype={}
C.ckI.prototype={}
C.ckC.prototype={}
C.atf.prototype={}
C.ckH.prototype={
cMg(d,e,f,g){var w,v,u,t,s,r,q,p,o=this,n=o.a
n===$&&B.c()
w=n.c
n=o.b
v=n.b
v===$&&B.c()
u=A.o.e9(w+v-1,v)
t=new Uint8Array(4)
s=new Uint8Array(u*v)
n.bfP(new C.atf(A.aG.fJ(d,e)))
for(r=0,q=1;q<=u;++q){for(p=3;;--p){t[p]=t[p]+1
if(t[p]!==0)break}n=o.a
o.bPG(n.a,n.b,t,s,r)
r+=v}A.aG.h8(f,g,g+w,s)
return o.a.c},
bPG(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m=this
if(e<=0)throw B.W(B.dJ("Iteration count must be at least 1.",null))
w=m.b
v=w.a
v.Cz(0,d,0,d.length)
v.Cz(0,f,0,4)
u=m.c
u===$&&B.c()
w.Lp(u,0)
u=m.c
A.aG.h8(g,h,h+u.length,u)
for(u=g.$flags|0,t=1;t<e;++t){s=m.c
v.Cz(0,s,0,s.length)
w.Lp(m.c,0)
for(s=m.c,r=s.length,q=0;q!==r;++q){p=h+q
o=g[p]
n=s[q]
u&2&&B.aj(g)
g[p]=o^n}}}}
C.ckD.prototype={}
C.ckB.prototype={}
C.atg.prototype={
A(d,e){var w,v,u
if(e==null)return!1
w=!1
if(e instanceof C.atg){v=this.a
v===$&&B.c()
u=e.a
u===$&&B.c()
if(v===u){w=this.b
w===$&&B.c()
v=e.b
v===$&&B.c()
v=w===v
w=v}}return w},
tx(d,e){var w=this.a
w===$&&B.c()
w=A.o.tx(w,e.gbZo())
if(!w)e.gbZo()
return w},
aKT(d,e){this.a=0
this.b=d},
tA(d){return this.aKT(d,null)},
aLv(d){var w,v=this,u=v.b
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
w.b12(v,u)
u=w.b
u===$&&B.c()
w.b12(v,u)
u=v.a
return u.charCodeAt(0)==0?u:u},
b12(d,e){var w,v=A.o.fW(e,16)
for(w=8-v.length;w>0;--w)d.a+="0"
d.a+=v},
gX(d){var w,v=this.a
v===$&&B.c()
w=this.b
w===$&&B.c()
return B.bu(v,w,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h)}}
C.ckG.prototype={
kF(d){var w,v=this
v.a.tA(0)
v.c=0
A.aG.hv(v.b,0,4,0)
v.w=0
w=v.r
A.d.hv(w,0,w.length,0)
w=v.f
w[0]=1732584193
w[1]=4023233417
w[2]=2562383102
w[3]=271733878
w[4]=3285377520},
aoZ(d){var w,v=this,u=v.b,t=v.c
t===$&&B.c()
w=t+1
v.c=w
u.$flags&2&&B.aj(u)
u[t]=d&255
if(w===4){v.b2v(u,0)
v.c=0}v.a.aLv(1)},
Cz(d,e,f,g){var w=this.cmn(e,f,g)
f+=w
g-=w
w=this.cmo(e,f,g)
this.cme(e,f+w,g-w)},
Lp(d,e){var w,v=this,u=C.hgr(v.a),t=u.a
t===$&&B.c()
t=C.h6d(t,3)
u.a=t
w=u.b
w===$&&B.c()
u.a=(t|w>>>29)>>>0
u.b=C.h6d(w,3)
v.cmi()
v.cmf(u)
v.ath()
v.cgq(d,e)
v.kF(0)
return 20},
b2v(d,e){var w=this,v=w.w
v===$&&B.c()
w.w=v+1
w.r[v]=J.oc(A.aG.gaR(d),d.byteOffset,d.length).getUint32(e,A.ir===w.d)
if(w.w===16)w.ath()},
ath(){this.cVr()
this.w=0
A.d.hv(this.r,0,16,0)},
cme(d,e,f){while(f>0){this.aoZ(d[e]);++e;--f}},
cmo(d,e,f){var w,v
for(w=this.a,v=0;f>4;){this.b2v(d,e)
e+=4
f-=4
w.aLv(4)
v+=4}return v},
cmn(d,e,f){var w,v=0
for(;;){w=this.c
w===$&&B.c()
if(!(w!==0&&f>0))break
this.aoZ(d[e]);++e;--f;++v}return v},
cmi(){this.aoZ(128)
for(;;){var w=this.c
w===$&&B.c()
if(!(w!==0))break
this.aoZ(0)}},
cmf(d){var w,v=this,u=v.w
u===$&&B.c()
if(u>14)v.ath()
u=v.d
switch(u){case A.ir:u=v.r
w=d.b
w===$&&B.c()
u[14]=w
w=d.a
w===$&&B.c()
u[15]=w
break
case A.EC:u=v.r
w=d.a
w===$&&B.c()
u[14]=w
w=d.b
w===$&&B.c()
u[15]=w
break
default:throw B.W(B.bd("Invalid endianness: "+u.u(0)))}},
cgq(d,e){var w,v,u,t,s,r,q
for(w=this.e,v=this.f,u=d.length,t=A.ir===this.d,s=0;s<w;++s){r=v[s]
q=J.oc(A.aG.gaR(d),d.byteOffset,u)
q.$flags&2&&B.aj(q,11)
q.setUint32(e+s*4,r,t)}},
gdc(d){return this.f}}
C.ckJ.prototype={
cVr(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
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
C.ckF.prototype={
bfP(d){var w,v,u,t,s=this,r=s.a
r.kF(0)
w=d.a
w===$&&B.c()
v=w.length
u=s.c
u===$&&B.c()
if(v>u){r.Cz(0,w,0,v)
w=s.d
w===$&&B.c()
r.Lp(w,0)
w=s.b
w===$&&B.c()
v=w}else{t=s.d
t===$&&B.c()
A.aG.h8(t,0,v,w)}w=s.d
w===$&&B.c()
A.aG.hv(w,v,w.length,0)
w=s.e
w===$&&B.c()
A.aG.h8(w,0,u,s.d)
s.bax(s.d,u,54)
s.bax(s.e,u,92)
u=s.d
r.Cz(0,u,0,u.length)},
Lp(d,e){var w,v,u=this,t=u.a,s=u.e
s===$&&B.c()
w=u.c
w===$&&B.c()
t.Lp(s,w)
s=u.e
t.Cz(0,s,0,s.length)
v=t.Lp(d,e)
s=u.e
A.aG.hv(s,w,s.length,0)
s=u.d
s===$&&B.c()
t.Cz(0,s,0,s.length)
return v},
bax(d,e,f){var w,v,u
for(w=d.$flags|0,v=0;v<e;++v){u=d[v]
w&2&&B.aj(d)
d[v]=u^f}}}
C.ckA.prototype={}
C.ckz.prototype={
a2I(d){return(D.oo[d&255]&255|(D.oo[d>>>8&255]&255)<<8|(D.oo[d>>>16&255]&255)<<16|D.oo[d>>>24&255]<<24)>>>0},
bmq(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=a0.a
e===$&&B.c()
w=e.length
if(w<16||w>32||(w&7)!==0)throw B.W(B.dJ("Key length not 128/192/256 bits.",null))
v=w>>>2
u=v+6
f.a=u
t=u+1
s=J.e4(t,x.bW)
for(u=x.S,r=0;r<t;++r)s[r]=B.c2(4,0,!1,u)
switch(v){case 4:q=J.oc(A.aG.gaR(e),e.byteOffset,w)
p=q.getUint32(0,!0)
e=s[0]
e[0]=p
o=q.getUint32(4,!0)
e[1]=o
n=q.getUint32(8,!0)
e[2]=n
m=q.getUint32(12,!0)
e[3]=m
for(r=1;r<=10;++r){p=(p^f.a2I((m>>>8|(m&$.qh[24])<<24)>>>0)^D.cGu[r-1])>>>0
e=s[r]
e[0]=p
o=(o^p)>>>0
e[1]=o
n=(n^o)>>>0
e[2]=n
m=(m^n)>>>0
e[3]=m}break
case 6:q=J.oc(A.aG.gaR(e),e.byteOffset,w)
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
p=(p^f.a2I((k>>>8|(k&$.qh[24])<<24)>>>0)^j)>>>0
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
p=(p^f.a2I((k>>>8|(k&$.qh[24])<<24)>>>0)^i)>>>0
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
case 8:q=J.oc(A.aG.gaR(e),e.byteOffset,w)
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
p=(p^f.a2I((g>>>8|(g&$.qh[24])<<24)>>>0)^j)>>>0
e=s[r]
e[0]=p
o=(o^p)>>>0
e[1]=o
n=(n^o)>>>0
e[2]=n
m=(m^n)>>>0
e[3]=m;++r
if(r>=15)break
l=(l^f.a2I(m))>>>0
e=s[r]
e[0]=l
k=(k^l)>>>0
e[1]=k
h=(h^k)>>>0
e[2]=h
g=(g^h)>>>0
e[3]=g;++r}break
default:throw B.W(B.bd("Should never get here"))}return s},
bOC(b2,b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=J.oc(A.aG.gaR(b2),b2.byteOffset,16),a3=a2.getUint32(b3,!0),a4=a2.getUint32(b3+4,!0),a5=a2.getUint32(b3+8,!0),a6=a2.getUint32(b3+12,!0),a7=b6[0],a8=a3^a7[0],a9=a4^a7[1],b0=a5^a7[2],b1=a6^a7[3]
for(a7=this.a-1,w=1;w<a7;){v=D.ef[a8&255]
u=D.ef[a9>>>8&255]
t=$.qh[8]
s=D.ef[b0>>>16&255]
r=$.qh[16]
q=D.ef[b1>>>24&255]
p=$.qh[24]
o=b6[w]
n=v^(u>>>24|(u&t)<<8)^(s>>>16|(s&r)<<16)^(q>>>8|(q&p)<<24)^o[0]
q=D.ef[a9&255]
s=D.ef[b0>>>8&255]
u=D.ef[b1>>>16&255]
v=D.ef[a8>>>24&255]
m=q^(s>>>24|(s&t)<<8)^(u>>>16|(u&r)<<16)^(v>>>8|(v&p)<<24)^o[1]
v=D.ef[b0&255]
u=D.ef[b1>>>8&255]
s=D.ef[a8>>>16&255]
q=D.ef[a9>>>24&255]
l=v^(u>>>24|(u&t)<<8)^(s>>>16|(s&r)<<16)^(q>>>8|(q&p)<<24)^o[2]
q=D.ef[b1&255]
a8=D.ef[a8>>>8&255]
a9=D.ef[a9>>>16&255]
b0=D.ef[b0>>>24&255];++w
b1=q^(a8>>>24|(a8&t)<<8)^(a9>>>16|(a9&r)<<16)^(b0>>>8|(b0&p)<<24)^o[3]
o=D.ef[n&255]
b0=D.ef[m>>>8&255]
a9=D.ef[l>>>16&255]
a8=D.ef[b1>>>24&255]
q=b6[w]
a8=o^(b0>>>24|(b0&t)<<8)^(a9>>>16|(a9&r)<<16)^(a8>>>8|(a8&p)<<24)^q[0]
a9=D.ef[m&255]
b0=D.ef[l>>>8&255]
o=D.ef[b1>>>16&255]
s=D.ef[n>>>24&255]
a9=a9^(b0>>>24|(b0&t)<<8)^(o>>>16|(o&r)<<16)^(s>>>8|(s&p)<<24)^q[1]
s=D.ef[l&255]
o=D.ef[b1>>>8&255]
b0=D.ef[n>>>16&255]
u=D.ef[m>>>24&255]
b0=s^(o>>>24|(o&t)<<8)^(b0>>>16|(b0&r)<<16)^(u>>>8|(u&p)<<24)^q[2]
u=D.ef[b1&255]
o=D.ef[n>>>8&255]
s=D.ef[m>>>16&255]
v=D.ef[l>>>24&255];++w
b1=u^(o>>>24|(o&t)<<8)^(s>>>16|(s&r)<<16)^(v>>>8|(v&p)<<24)^q[3]}n=D.ef[a8&255]^C.nw(D.ef[a9>>>8&255],24)^C.nw(D.ef[b0>>>16&255],16)^C.nw(D.ef[b1>>>24&255],8)^b6[w][0]
m=D.ef[a9&255]^C.nw(D.ef[b0>>>8&255],24)^C.nw(D.ef[b1>>>16&255],16)^C.nw(D.ef[a8>>>24&255],8)^b6[w][1]
l=D.ef[b0&255]^C.nw(D.ef[b1>>>8&255],24)^C.nw(D.ef[a8>>>16&255],16)^C.nw(D.ef[a9>>>24&255],8)^b6[w][2]
b1=D.ef[b1&255]^C.nw(D.ef[a8>>>8&255],24)^C.nw(D.ef[a9>>>16&255],16)^C.nw(D.ef[b0>>>24&255],8)^b6[w][3]
a7=D.oo[n&255]
b0=D.oo[m>>>8&255]
v=this.d
u=v[l>>>16&255]
t=v[b1>>>24&255]
s=b6[w+1]
r=s[0]
q=v[m&255]
p=D.oo[l>>>8&255]
a9=D.oo[b1>>>16&255]
o=v[n>>>24&255]
k=s[1]
j=v[l&255]
i=D.oo[b1>>>8&255]
h=D.oo[n>>>16&255]
g=D.oo[m>>>24&255]
f=s[2]
e=v[b1&255]
d=v[n>>>8&255]
v=v[m>>>16&255]
a0=D.oo[l>>>24&255]
s=s[3]
a1=J.oc(A.aG.gaR(b4),b4.byteOffset,16)
a1.$flags&2&&B.aj(a1,11)
a1.setUint32(b5,(a7&255^(b0&255)<<8^(u&255)<<16^t<<24^r)>>>0,!0)
r=J.oc(A.aG.gaR(b4),b4.byteOffset,16)
r.$flags&2&&B.aj(r,11)
r.setUint32(b5+4,(q&255^(p&255)<<8^(a9&255)<<16^o<<24^k)>>>0,!0)
k=J.oc(A.aG.gaR(b4),b4.byteOffset,16)
k.$flags&2&&B.aj(k,11)
k.setUint32(b5+8,(j&255^(i&255)<<8^(h&255)<<16^g<<24^f)>>>0,!0)
f=J.oc(A.aG.gaR(b4),b4.byteOffset,16)
f.$flags&2&&B.aj(f,11)
f.setUint32(b5+12,(e&255^(d&255)<<8^(v&255)<<16^a0<<24^s)>>>0,!0)},
bLc(b1,b2,b3,b4,b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=J.oc(A.aG.gaR(b1),b1.byteOffset,16).getUint32(b2,!0),a1=J.oc(A.aG.gaR(b1),b1.byteOffset,16).getUint32(b2+4,!0),a2=J.oc(A.aG.gaR(b1),b1.byteOffset,16).getUint32(b2+8,!0),a3=J.oc(A.aG.gaR(b1),b1.byteOffset,16).getUint32(b2+12,!0),a4=this.a,a5=b5[a4],a6=a0^a5[0],a7=a1^a5[1],a8=a2^a5[2],a9=a4-1,b0=a3^a5[3]
for(a5=a8,a4=a7;a9>1;){w=D.ee[a6&255]
v=D.ee[b0>>>8&255]
u=$.qh[8]
t=D.ee[a5>>>16&255]
s=$.qh[16]
r=D.ee[a4>>>24&255]
q=$.qh[24]
a7=b5[a9]
p=w^(v>>>24|(v&u)<<8)^(t>>>16|(t&s)<<16)^(r>>>8|(r&q)<<24)^a7[0]
r=D.ee[a4&255]
t=D.ee[a6>>>8&255]
v=D.ee[b0>>>16&255]
w=D.ee[a5>>>24&255]
o=r^(t>>>24|(t&u)<<8)^(v>>>16|(v&s)<<16)^(w>>>8|(w&q)<<24)^a7[1]
w=D.ee[a5&255]
v=D.ee[a4>>>8&255]
t=D.ee[a6>>>16&255]
r=D.ee[b0>>>24&255]
n=w^(v>>>24|(v&u)<<8)^(t>>>16|(t&s)<<16)^(r>>>8|(r&q)<<24)^a7[2]
r=D.ee[b0&255]
a5=D.ee[a5>>>8&255]
a4=D.ee[a4>>>16&255]
a6=D.ee[a6>>>24&255];--a9
b0=r^(a5>>>24|(a5&u)<<8)^(a4>>>16|(a4&s)<<16)^(a6>>>8|(a6&q)<<24)^a7[3]
a7=D.ee[p&255]
a6=D.ee[b0>>>8&255]
a4=D.ee[n>>>16&255]
a5=D.ee[o>>>24&255]
r=b5[a9]
a6=a7^(a6>>>24|(a6&u)<<8)^(a4>>>16|(a4&s)<<16)^(a5>>>8|(a5&q)<<24)^r[0]
a5=D.ee[o&255]
a4=D.ee[p>>>8&255]
a7=D.ee[b0>>>16&255]
t=D.ee[n>>>24&255]
a4=a5^(a4>>>24|(a4&u)<<8)^(a7>>>16|(a7&s)<<16)^(t>>>8|(t&q)<<24)^r[1]
t=D.ee[n&255]
a7=D.ee[o>>>8&255]
a5=D.ee[p>>>16&255]
v=D.ee[b0>>>24&255]
a5=t^(a7>>>24|(a7&u)<<8)^(a5>>>16|(a5&s)<<16)^(v>>>8|(v&q)<<24)^r[2]
v=D.ee[b0&255]
a7=D.ee[n>>>8&255]
t=D.ee[o>>>16&255]
w=D.ee[p>>>24&255];--a9
b0=v^(a7>>>24|(a7&u)<<8)^(t>>>16|(t&s)<<16)^(w>>>8|(w&q)<<24)^r[3]}p=D.ee[a6&255]^C.nw(D.ee[b0>>>8&255],24)^C.nw(D.ee[a5>>>16&255],16)^C.nw(D.ee[a4>>>24&255],8)^b5[a9][0]
o=D.ee[a4&255]^C.nw(D.ee[a6>>>8&255],24)^C.nw(D.ee[b0>>>16&255],16)^C.nw(D.ee[a5>>>24&255],8)^b5[a9][1]
n=D.ee[a5&255]^C.nw(D.ee[a4>>>8&255],24)^C.nw(D.ee[a6>>>16&255],16)^C.nw(D.ee[b0>>>24&255],8)^b5[a9][2]
b0=D.ee[b0&255]^C.nw(D.ee[a5>>>8&255],24)^C.nw(D.ee[a4>>>16&255],16)^C.nw(D.ee[a6>>>24&255],8)^b5[a9][3]
a4=D.za[p&255]
a5=this.d
w=a5[b0>>>8&255]
v=a5[n>>>16&255]
u=D.za[o>>>24&255]
t=b5[0]
s=t[0]
r=a5[o&255]
q=a5[p>>>8&255]
a7=D.za[b0>>>16&255]
m=a5[n>>>24&255]
l=t[1]
k=a5[n&255]
j=D.za[o>>>8&255]
i=D.za[p>>>16&255]
h=a5[b0>>>24&255]
g=t[2]
f=D.za[b0&255]
e=a5[n>>>8&255]
a8=a5[o>>>16&255]
a5=a5[p>>>24&255]
t=t[3]
d=J.oc(A.aG.gaR(b3),b3.byteOffset,16)
d.$flags&2&&B.aj(d,11)
d.setUint32(b4,(a4&255^(w&255)<<8^(v&255)<<16^u<<24^s)>>>0,!0)
d.setUint32(b4+4,(r&255^(q&255)<<8^(a7&255)<<16^m<<24^l)>>>0,!0)
d.setUint32(b4+8,(k&255^(j&255)<<8^(i&255)<<16^h<<24^g)>>>0,!0)
d.setUint32(b4+12,(f&255^(e&255)<<8^(a8&255)<<16^a5<<24^t)>>>0,!0)}}
C.bQi.prototype={}
C.bQj.prototype={
gL(d){var w=this.a.length
return w},
apv(){return B.rp(this.a,A.ib,null,null)}}
C.baO.prototype={
vc(d){return C.hU3(d)}}
C.cuZ.prototype={
N4(d){var w=d.w,v=Math.max(1,A.k.dg(w/186)),u=Math.max(0,w-16*(v-1))/v,t=u/0.52
return new B.aal(v,t+20,u+16,t,u,B.u9(d.x))},
nu(d){return!1}}
C.bRl.prototype={
cG9(d){if(this.b)throw B.W(B.bd("FontLoader is already loaded"))
this.c.push(d.bM(new C.bRm(),x.E))},
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
return B.b(p.fzi(f,r),$async$mK)
case 5:case 3:t.length===s||(0,B.M)(t),++q
w=2
break
case 4:return B.h(null,v)}})
return B.i($async$mK,v)}}
C.awk.prototype={
a5(){return"SystemUiMode."+this.b}}
C.a8G.prototype={
A(d,e){if(e==null)return!1
if(J.bQ(e)!==B.b0(this))return!1
return e instanceof C.a8G&&e.a===this.a},
gX(d){return B.bu(B.b0(this),B.wZ(this.a),A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h)},
u(d){var w="<optimized out>#"
if(B.b0(this)===D.fT5)return"["+(w+B.e6(this.a))+"]"
return"[ObjectKey "+(w+B.e6(this.a))+"]"}}
C.a1c.prototype={
U(){return new C.aJH(B.aY(x.N))},
cTz(d){return this.d.$1(d)},
cRj(){return this.e.$0()}}
C.aJH.prototype={
a_(){this.a2()
this.Pr()},
Pr(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Pr=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.a.cRj(),$async$Pr)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.f8U(t,s))
case 1:return B.h(u,v)}})
return B.i($async$Pr,v)},
Zp(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$Zp=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.a.c
q=B.U(r).k("Z<1>")
p=B.C(new B.Z(r,new C.f8Y(t),q),q.k("K.E"))
if(p.length===0||t.r){w=1
break}t.m(new C.f8Z(t))
w=3
return B.b(C.ao1(p),$async$Zp)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.f9_(t,s,p))
w=4
return B.b(t.Pr(),$async$Zp)
case 4:case 1:return B.h(u,v)}})
return B.i($async$Zp,v)},
a1C(d){return this.cqy(d)},
cqy(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a1C=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}t.m(new C.f8V(t))
s=J.r(d,"id")
w=3
return B.b(C.c1d(J.k(s==null?"":s)),$async$a1C)
case 3:r=f
if(r==null){if(t.c==null){w=1
break}t.m(new C.f8W(t))
w=1
break}q=C.h5H(r,!1)
q.z=!1
s=t.a
s.toString
w=4
return B.b(s.cTz(B.a([q],x.D)),$async$a1C)
case 4:if(t.c==null){w=1
break}t.m(new C.f8X(t,r))
case 1:return B.h(u,v)}})
return B.i($async$a1C,v)},
Pq(d,e){return this.bLE(0,e)},
bLE(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$Pq=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}s=J.a5(e)
r=s.h(e,"name")
q=J.k(r==null?"this presentation":r)
r=t.c
r.toString
w=3
return B.b(B.cg(null,null,!0,null,new C.f8P(q),r,null,!0,!0,x.y),$async$Pq)
case 3:if(g!==!0||t.c==null){w=1
break}t.m(new C.f8Q(t))
s=s.h(e,"id")
w=4
return B.b(C.ao0(J.k(s==null?"":s)),$async$Pq)
case 4:if(t.c==null){w=1
break}t.m(new C.f8R(t))
w=5
return B.b(t.Pr(),$async$Pq)
case 5:case 1:return B.h(u,v)}})
return B.i($async$Pq,v)},
cF9(d){var w=B.bi(d),v=w==null?null:w.bU()
if(v==null)return""
return A.iB[B.bL(v)-1]+" "+B.bV(v)},
aRi(d,e){var w=null,v=B.m(e*0.3)
return B.p(w,B.X(d,A.c,w,w,w,e*0.5),A.f,w,w,new B.o(w,w,w,v,w,D.P1,A.n),w,e,w,w,w,w,w,e)},
aRh(d){return this.aRi(d,44)},
b7E(d,e,f,g){var w,v,u=null,t=this.w===d,s=t?D.P1:u,r=B.m(14),q=B.X(e,t?A.c:A.aB,u,u,u,17),p=x.p
q=B.a([q,M.JA,B.d(f,u,u,u,u,u,u,B.l(u,u,t?A.c:A.aB,u,u,u,u,u,u,u,u,13.5,u,u,A.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],p)
if(g>0){w=A.c.j(t?0.25:0.1)
v=B.m(10)
A.d.v(q,B.a([M.JA,B.p(u,B.d(""+g,u,u,u,u,u,u,B.l(u,u,t?A.c:A.aR,u,u,u,u,u,u,u,u,11,u,u,A.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.f,u,u,new B.o(w,u,u,v,u,u,A.n),u,u,u,u,D.bD6,u,u,u)],p))}return B.E(B.aB(A.ca,B.dd(u,B.B(q,A.m,u,A.b8,A.j,0,u,u),u,u,A.b7,new B.o(u,u,u,r,u,s,A.n),A.hp,u,u,u,A.tX,u,u,u),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.f93(this,d),u,u,u,u,u,u,!1,A.a5),1)},
ckm(d){var w,v,u,t,s,r,q=null,p=this.d.t(0,d.a),o=p?A.d2.j(0.14):D.YM,n=B.m(18),m=p?A.d2:A.dt
m=B.J(m,A.r,p?1.8:1)
w=this.aRh(A.ql)
v=B.d(d.b,q,1,A.a2,q,q,q,D.aTn,q,q,q)
u=d.r.length
t=u===1?"":"s"
s=x.p
t=B.E(B.x(B.a([v,A.cL,B.d(""+u+" slide"+t,q,q,q,q,q,q,D.aTp,q,q,q)],s),A.E,q,A.e,A.j,0,A.p),1)
v=p?D.P1:q
u=p?q:B.J(A.aZ,A.r,1.6)
r=p?D.bTY:q
return B.aB(q,B.dd(q,B.B(B.a([w,A.bc,t,B.dd(q,r,q,q,A.b7,new B.o(q,q,u,q,q,v,A.a6),A.fK,q,26,q,q,q,q,26)],s),A.m,q,A.e,A.j,0,q,q),q,q,A.b7,new B.o(o,q,m,n,q,q,A.n),A.fK,q,q,A.d3,A.bf,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.f8T(this,p,d),q,q,q,q,q,q,!1,A.a5)},
cs9(d){var w,v,u,t,s,r=this,q=null,p=J.a5(d),o=p.h(d,"savedAt"),n=r.cF9(J.k(o==null?"":o))
o=B.m(18)
w=B.J(A.dt,A.r,1)
v=r.aRh(A.Og)
u=p.h(d,"name")
u=B.d(J.k(u==null?"Presentation":u),q,1,A.a2,q,q,q,D.aTn,q,q,q)
p=p.h(d,"slides")
p=B.w(p==null?"?":p)
t=n.length===0?"":" \xb7 saved "+n
s=x.p
t=B.E(B.x(B.a([u,A.cL,B.d(p+" slides"+t,q,q,q,q,q,q,D.aTp,q,q,q)],s),A.E,q,A.e,A.j,0,A.p),1)
p=r.b4b(A.hL,A.bt,"Bring it back",r.r?q:new C.f90(r,d))
return B.p(q,B.B(B.a([v,A.bc,t,p,A.bn,r.b4b(A.ed,A.cs,"Delete",r.r?q:new C.f91(r,d))],s),A.m,q,A.e,A.j,0,q,q),A.f,q,q,new B.o(D.YM,q,w,o,q,q,A.n),q,q,q,A.d3,D.bxv,q,q,q)},
b4b(d,e,f,g){var w=null,v=g==null,u=e.j(v?0.06:0.14)
return B.hc(B.aB(w,B.p(w,B.X(d,v?A.aZ:e,w,w,w,19),A.f,w,w,new B.o(u,w,w,w,w,w,A.a6),w,38,w,w,w,w,w,38),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a5),w,f,w,w)},
atx(d,e,f){var w=null
return new B.D(D.bwx,B.x(B.a([B.X(d,A.aZ,w,w,w,46),A.ad,B.d(e,w,w,w,w,w,w,D.foZ,w,w,w),A.au,B.d(f,w,w,w,w,w,w,D.fha,A.L,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),w)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.e
if(h==null)h=A.c8
w=j.a.c.length
v=w!==0&&j.d.a===w
w=B.aI(d,A.bX,x.w).w
u=B.p(i,i,A.f,i,i,new B.o(A.aZ,i,i,B.m(3),i,i,A.n),i,4,i,i,i,i,i,42)
t=x.p
s=B.a([j.aRi(A.yY,46),A.bc,D.bE_],t)
if(j.r)s.push(D.ekn)
s.push(B.aJ(i,i,i,i,A.rx,i,i,i,new C.f96(d),i,i,i,i,i,i))
s=B.B(s,A.m,i,A.e,A.j,0,i,i)
r=A.c.j(0.05)
q=B.m(18)
p=B.J(A.dt,A.r,1)
o=J.a5(h)
q=B.a([A.W,u,new B.D(D.bA8,s,i),B.p(i,B.B(B.a([j.b7E(0,A.yF,"Save",j.a.c.length),j.b7E(1,A.Ot,"Saved",o.gL(h))],t),A.m,i,A.e,A.j,0,i,i),A.f,i,i,new B.o(r,i,p,q,i,i,A.n),i,i,i,D.bz9,A.eB,i,i,i)],t)
if(j.x!=null){u=(j.y?A.cs:A.bt).j(0.12)
s=B.m(14)
r=B.J((j.y?A.cs:A.bt).j(0.4),A.r,1)
p=j.y
n=p?A.Oi:A.ec
n=B.X(n,p?A.cs:A.bt,i,i,i,18)
m=j.x
m.toString
q.push(B.p(i,B.B(B.a([n,A.ac,B.E(B.d(m,i,i,i,i,i,i,A.Uo,i,i,i),1)],t),A.m,i,A.e,A.j,0,i,i),A.f,i,i,new B.o(u,i,r,s,i,i,A.n),i,i,i,D.bz5,A.iU,i,i,1/0))}u=B.a([],t)
if(j.w===0){s=j.d.a
s=B.a([B.E(B.d(s===0?"Tap the ones to save":""+s+" picked",i,i,i,i,i,i,D.fkR,i,i,i),1)],t)
if(j.a.c.length!==0)s.push(B.aB(i,B.d(v?"Clear":"Pick all",i,i,i,i,i,i,D.fo_,i,i,i),A.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new C.f97(j,v),i,i,i,i,i,i,!1,A.a5))
s=B.a([B.B(s,A.m,i,A.e,A.j,0,i,i),A.W],t)
if(j.a.c.length===0)s.push(j.atx(A.ql,"No presentations yet","Make one first, then save it here."))
for(r=j.a.c,p=r.length,l=0;l<r.length;r.length===p||(0,B.M)(r),++l)s.push(j.ckm(r[l]))
A.d.v(u,s)}else{s=B.a([],t)
if(j.f)s.push(D.ejV)
else if(j.e==null)s.push(j.atx(A.a1b,"Could not reach the database","Check the connection, then open this again."))
else if(o.gan(h))s.push(j.atx(A.p4,"Nothing saved yet","Save some presentations and they will show up here."))
for(r=o.gaf(h);r.C();)s.push(j.cs9(r.gR(r)))
A.d.v(u,s)}q.push(new B.ds(1,A.cn,B.ct(u,i,Y.ak9,i,i,A.ah,!0),i))
if(j.w===0){u=j.d
s=u.a===0
r=s||j.r?i:j.gc5g()
p=s?i:D.P1
s=s?A.c.j(0.07):i
o=B.m(18)
n=u.a===0?i:B.a([new B.ac(0,A.G,A.b5.j(0.4),A.cv,18)],x.V)
u=u.a
m=u===0
k=B.X(A.yF,m?A.jJ:A.c,i,i,i,21)
u=m?"Pick presentations to save":"Save "+u+" to the database"
q.push(new B.D(D.bzL,B.aB(i,B.dd(i,B.B(B.a([k,A.a8I,new B.ds(1,A.cn,B.eS(A.A,B.d(u,i,i,i,i,i,i,B.l(i,i,m?A.jJ:A.c,i,i,i,i,i,i,i,i,15,i,i,A.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),A.f,A.e2),i)],t),A.m,i,A.b8,A.j,0,i,i),i,i,A.b7,new B.o(s,i,i,o,n,p,A.n),A.hp,i,54,i,i,i,i,i),A.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,r,i,i,i,i,i,i,!1,A.a5),i))}else q.push(A.W)
return B.p(i,B.bn(!0,B.x(q,A.m,i,A.e,A.Q,0,A.p),!0,!1,A.af,!0,!1),A.f,i,new B.aZ(0,1/0,0,w.a.b*0.9),D.b3L,i,i,i,i,i,i,i,i)}}
C.os.prototype={
ag(){return B.G(["id",this.a,"doc",this.b.ag(),"updatedAt",this.c.a7().ae()],x.N,x.z)}}
C.YU.prototype={
U(){return new C.ayc(B.a([],x.k),B.f8(null,x.H))},
ge0(){return this.c}}
C.ayc.prototype={
a_(){this.a2()
this.PB()},
PB(){var w=0,v=B.j(x.H),u,t=this,s
var $async$PB=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(C.a29(t.a.c),$async$PB)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.cKH(t,s))
case 1:return B.h(u,v)}})
return B.i($async$PB,v)},
cys(d){var w,v,u,t=this
d.c=new B.V(Date.now(),0,!1)
w=J.qp(t.d,new C.cKK(d))
v=w<0
if(v&&C.hR9(d))return t.f
u=t.d
if(v)J.pF(u,0,d)
else J.aH(u,w,d)
v=x.a
B.fXa(new C.cKL(t),v)
return t.f=t.f.bM(new C.cKM(t,d),v).eX(new C.cKN())},
IU(d,e,f){return this.cdW(0,e,f)},
aZ7(d,e){return this.IU(0,e,!1)},
cdW(d,e,f){var w=0,v=B.j(x.H),u,t=this,s
var $async$IU=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.a4(s,!1).cg(B.e_(new C.cKG(t,e),!1,null,x.H)),$async$IU)
case 3:w=4
return B.b(t.f,$async$IU)
case 4:w=5
return B.b(t.PB(),$async$IU)
case 5:case 1:return B.h(u,v)}})
return B.i($async$IU,v)},
aYo(d){var w=A.o.u(1000*Date.now()),v=d==null?D.dEY:d
this.IU(0,new C.os(w,v,new B.V(Date.now(),0,!1)),!0)},
c4J(){return this.aYo(null)},
adV(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$adV=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.bU(A.K,null,new C.cKO(),r,!1,!1,!0,null,!1,!1,x.g2),$async$adV)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.aYo(s)
case 1:return B.h(u,v)}})
return B.i($async$adV,v)},
IT(d,e){return this.bLv(0,e)},
bLv(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$IT=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return B.b(B.cg(null,null,!0,null,new C.cKB(e),s,null,!0,!0,x.y),$async$IT)
case 3:if(g!==!0){w=1
break}t.m(new C.cKC(t,e))
w=4
return B.b(t.f,$async$IT)
case 4:w=5
return B.b(C.agB(t.a.c,e.a),$async$IT)
case 5:w=6
return B.b(t.PB(),$async$IT)
case 6:case 1:return B.h(u,v)}})
return B.i($async$IT,v)},
Dn(d){return this.bDE(d)},
bDE(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$Dn=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.bU(A.K,null,new C.cKx(d),r,!0,!0,!1,null,!1,!1,x.N),$async$Dn)
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
return B.b(t.aZ7(0,d),$async$Dn)
case 9:w=5
break
case 7:w=10
return B.b(F.h6f(r,d.b,null),$async$Dn)
case 10:w=5
break
case 8:w=11
return B.b(t.IT(0,d),$async$Dn)
case 11:w=5
break
case 5:case 1:return B.h(u,v)}})
return B.i($async$Dn,v)},
bZl(){var w,v,u=null,t=[D.dF0,D.dEZ,D.dF_],s=new C.cKE(),r=B.m(26),q=x.V,p=B.a([new B.ac(0,A.G,A.d1.j(0.4),A.f_,24)],q),o=x.p,n=B.a([],o)
for(w=0;w<3;++w){v=new B.aQ(999,999)
n.push(B.p(u,new B.y(D.doJ[w],u,A.oF,u,u,u,u,u,u,u,u,u),A.f,u,u,new B.o(A.c.j(0.18),u,u,new B.bk(v,v,v,v),u,u,A.n),u,u,u,u,A.o9,u,u,u))}return B.p(u,B.B(B.a([B.E(B.x(B.a([D.fOq,A.O,B.bW(A.bE,n,A.bq,u,6,6),A.aM,B.aB(u,B.p(u,D.f_a,A.f,u,u,new B.o(A.c,u,u,B.m(999),B.a([new B.ac(0,A.G,A.w.j(0.2),A.cH,10)],q),u,A.n),u,u,u,u,U.aky,u,u,u),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.cKD(this),u,u,u,u,u,u,!1,A.a5)],o),A.E,u,A.e,A.j,0,A.p),1),new B.a7(130,110,new B.an(A.A,u,A.aa,A.t,B.a([s.$3(t[0],-0.22,-30),s.$3(t[2],0.22,30),s.$3(t[1],0,0)],o),u),u)],o),A.m,u,A.e,A.j,0,u,u),A.f,u,u,new B.o(u,u,u,r,p,D.c1l,A.n),u,u,u,u,D.bAi,u,u,u)},
bDC(d){var w,v=null,u=d.b.d.length,t=B.m(6),s=B.a([new B.ac(0,A.G,A.w.j(0.5),A.cv,14)],x.V),r=x.p
s=B.p(v,B.by(B.m(6),new B.an(A.a_,v,A.b0,A.t,B.a([B.eS(A.A,F.aoB(d.b),A.f,A.bV),D.epX,B.ao(v,B.aB(v,B.p(v,D.bUM,A.f,v,v,D.b4I,v,26,v,v,v,v,v,26),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.cKs(this,d),v,v,v,v,v,v,!1,A.a5),v,v,v,4,4,v)],r),v),A.aq),A.f,v,v,new B.o(v,v,v,t,s,v,A.n),v,v,v,v,v,v,v,v)
t=A.a.i(d.b.a)
t=B.d(t.length===0?"Untitled Book":t,v,1,A.a2,v,v,v,D.fek,v,v,v)
w=u===1?"":"s"
return B.aB(v,B.x(B.a([new B.fF(0.6470588235294118,s,v),A.O,t,B.d(""+u+" page"+w,v,v,v,v,v,v,D.fl2,v,v,v)],r),A.E,v,A.e,A.j,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,new C.cKt(this,d),v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.cKu(this,d),v,v,v,v,v,v,!1,A.a5)},
B(d){var w,v,u,t=this,s=null,r=x.p,q=B.eH(B.a([new B.D(H.aj3,B.hc(B.aB(s,B.p(s,A.apK,A.f,s,s,new B.o(s,s,s,s,B.a([new B.ac(0,A.G,A.b5.j(0.5),A.J,12)],x.V),E.wq,A.a6),s,36,s,s,s,s,s,36),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.gc65(),s,s,s,s,s,s,!1,A.a5),s,"Write with AI",s,s),s)],r),s,s,!0,!0,A.K,s,1,!0,s,0,!1,s,!1,E.nc,s,s,s,!0,s,s,s,s,s,D.fOu,s,s,s,1,s,!0)
if(t.e)r=D.b88
else{w=t.bZl()
v=B.a([D.fzO,A.ac],r)
if(J.cK(t.d)){u=B.m(999)
v.push(B.p(s,B.d(""+J.ad(t.d),s,s,s,s,s,s,D.fdL,s,s,s),A.f,s,s,new B.o(D.bdf,s,s,u,s,s,A.n),s,s,s,s,A.yk,s,s,s))}r=B.a([new B.nZ(A6.a_4,new B.mi(w,s),s),new B.nZ(D.bzF,new B.mi(B.B(v,A.m,s,A.e,A.j,0,s,s),s),s)],r)
if(J.cq(t.d))r.push(D.f5L)
else r.push(new B.nZ(D.bz7,B.Pc(new B.oy(new C.cKP(t),J.ad(t.d),!0,!0,!0,0,B.t6(),s),D.b7p),s))
r=B.vJ(0,s,A.t,s,A.y,s,s,s,s,s,!1,s,A.ah,!1,r)}return B.c6(q,D.bbU,r,s,!1,!1,s,s)}}
C.YS.prototype={
U(){return new C.ay8(B.a([],x.bx))},
Ul(d){return this.d.$1(d)}}
C.aFw.prototype={}
C.ay8.prototype={
b14(d,e,f){var w=$.ax(),v=new B.as(new B.bb(d,A.b4,A.aO),w),u=this.gaZ6()
v.aS(0,u)
w=new B.as(new B.bb(e,A.b4,A.aO),w)
w.aS(0,u)
return new C.aFw(v,w,f)},
Ee(){var w,v=this
v.y=!0
w=v.x
if(w!=null)w.a4(0)
v.x=B.cL(A.q8,new C.cJW(v))},
a_(){var w,v,u,t,s,r,q,p,o,n,m=this
m.a2()
w=m.a.c.b
v=$.ax()
u=new B.as(new B.bb(w.a,A.b4,A.aO),v)
t=m.gaZ6()
u.aS(0,t)
m.d!==$&&B.aP()
m.d=u
u=new B.as(new B.bb(w.b,A.b4,A.aO),v)
u.aS(0,t)
m.e!==$&&B.aP()
m.e=u
u=new B.as(new B.bb(w.c,A.b4,A.aO),v)
u.aS(0,t)
m.f!==$&&B.aP()
m.f=u
m.r=w.e
for(u=w.d,s=u.length,r=m.w,q=0;q<u.length;u.length===s||(0,B.M)(u),++q){p=u[q]
o=new B.as(new B.bb(p.a,A.b4,A.aO),v)
o.aS(0,t)
n=new B.as(new B.bb(p.b,A.b4,A.aO),v)
n.aS(0,t)
r.push(new C.aFw(o,n,p.c))}if(r.length===0)r.push(m.b14("Page 1","",""))},
q(){var w,v,u,t,s,r=this,q=r.x
if(q!=null)q.a4(0)
if(r.y){r.a.c.b=r.gpl()
q=r.a
q.Ul(q.c)}q=r.d
q===$&&B.c()
w=q.S$=$.ax()
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
s.P$=0}r.a3()},
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
t.push(new F.mB(A.a.i(p.a.a.a),p.b.a.a,p.c,""))}return new F.ru(n,w,v,t,u)},
AS(){var w=0,v=B.j(x.H),u=this,t
var $async$AS=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.x
if(t!=null)t.a4(0)
u.y=!1
u.a.c.b=u.gpl()
t=u.a
w=2
return B.b(t.Ul(t.c),$async$AS)
case 2:return B.h(null,v)}})
return B.i($async$AS,v)},
c63(){this.m(new C.cJV(this))
this.Ee()},
aY5(d,e){var w=this,v=d+e
if(v<0||v>=w.w.length)return
w.m(new C.cJY(w,d,v))
w.Ee()},
c64(d,e){var w=A.d.cG(this.w,e)
this.m(new C.cK5())
this.Ee()
$.aW.x1$.push(new C.cK6(w))},
QP(d){return this.ckc(d)},
ckc(d){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$QP=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hV().kZ(80,1400,A.eK),$async$QP)
case 7:q=f
if(q==null){w=1
break}w=8
return B.b(q.fk(),$async$QP)
case 8:p=f
o=q.b.toLowerCase()
n=J.ai8(o,".png")?"image/png":"image/jpeg"
r.m(new C.cJZ(d,n,p))
r.Ee()
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
return B.i($async$QP,v)},
xU(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$xU=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(F.htx(r,t.gpl()),$async$xU)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.cJX(t,s))
t.Ee()
case 1:return B.h(u,v)}})
return B.i($async$xU,v)},
cku(d){var w,v=this,u=null,t=F.fDp(d.c)
if(t==null)return new B.bM(A.a4,u,u,B.hr(D.bNZ,D.fCk,new C.cK0(v,d),u),u)
w=x.p
return new B.D(A.cu,new B.an(A.a_,u,A.aa,A.t,B.a([B.by(B.m(12),B.fP(t,A.A,u,u,A.cf,A.bV,!0,140,!1,u,1/0),A.aq),B.ao(u,B.B(B.a([v.b4c(A.kh,new C.cK1(v,d)),A.bn,v.b4c(A.cx,new C.cK2(v,d))],w),A.m,u,A.e,A.j,0,u,u),u,u,u,6,6,u)],w),u),u)},
b4c(d,e){var w=null
return B.aG(!1,A.a1,!0,w,B.aM(!1,w,!0,new B.D(A.hJ,B.X(d,A.c,w,w,w,18),w),A.cM,!0,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,w),A.f,A.aW,0,w,w,A.cM,w,w,A.ai)},
IV(){var w=0,v=B.j(x.H),u,t=this,s
var $async$IV=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.AS(),$async$IV)
case 3:s=t.c
if(s==null){w=1
break}w=4
return B.b(F.h6f(s,t.gpl(),new C.cK4(t)),$async$IV)
case 4:case 1:return B.h(u,v)}})
return B.i($async$IV,v)},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=x.p,k=B.eH(B.a([new B.D(A.q9,B.hr(D.bSI,D.fIp,n.gaxf(),B.fy(m,m,m,m,m,m,m,m,m,m,m,A.bM,m,m,m,m,m,m,m,m,m,m,m,m,m,m)),m),B.aJ(m,m,m,m,A.apJ,m,m,m,new C.cK7(n,d),m,m,m,m,"Save",m)],l),m,m,!0,!0,E.XP,m,1,m,m,m,!1,m,!1,E.nc,m,m,m,!0,m,m,m,m,m,D.fDb,m,m,m,1,m,!0),j=Au.aV7(O.lv,A.c,Af.WB,A.ok,D.fDW,n.gc62()),i=B.m(18),h=n.gaxe(),g=B.a([new B.ac(0,A.G,A.w.j(0.4),A.j0,12)],x.V)
g=B.aB(m,B.p(m,new B.a7(92,142.1818181818182,B.eS(A.A,F.aoB(n.gpl()),A.f,A.dz),m),A.f,m,m,new B.o(m,m,m,m,g,m,A.n),m,m,m,m,m,m,m,m),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,h,m,m,m,m,m,m,!1,A.a5)
w=n.r
w===$&&B.c()
i=B.p(m,B.B(B.a([g,A.ev,B.E(B.x(B.a([D.fQ2,A.au,B.d(F.h4K(w.a).b+" template \xb7 pick from 10, change colours, add your picture.",m,m,m,m,m,m,D.fqJ,m,m,m),A.W,B.dj(E.ap2,E.aUb,h,B.bp(A.d1,m,m,m,m,m,m,m,m,m,m,m))],l),A.E,m,A.e,A.j,0,A.p),1)],l),A.m,m,A.e,A.j,0,m,m),A.f,m,m,new B.o(E.XP,m,m,i,m,m,A.n),m,m,m,m,A.bf,m,m,m)
h=n.d
h===$&&B.c()
h=B.aN(m,A.Z,!1,m,!0,A.t,m,B.aO(),h,m,m,m,m,m,2,B.bv(m,new B.b5(4,B.m(12),A.dk),m,m,m,m,m,m,!0,m,m,m,m,m,m,A.c,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,"Book title",!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.ak,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.ab,m,m,m,m,m,m,m,m,m,m,m,A.oB,!0,A.a3,m,A.ao,m,m,m,m)
w=n.e
w===$&&B.c()
w=B.aN(m,A.Z,!1,m,!0,A.t,m,B.aO(),w,m,m,m,m,m,2,B.bv(m,new B.b5(4,B.m(12),A.dk),m,m,m,m,m,m,!0,m,m,m,m,m,m,A.c,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,"Subtitle (optional)",!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.ak,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.ab,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.a3,m,A.ao,m,m,m,m)
g=n.f
g===$&&B.c()
g=B.a([i,A.aA,h,A.O,w,A.O,B.aN(m,A.Z,!1,m,!0,A.t,m,B.aO(),g,m,m,m,m,m,2,B.bv(m,new B.b5(4,B.m(12),A.dk),m,m,m,m,m,m,!0,m,m,m,m,m,m,A.c,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,"Author (optional)",!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.ak,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.ab,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.a3,m,A.ao,m,m,m,m),A.aM],l)
for(i=n.w,v=0;v<i.length;v=t){h=i[v]
w=new B.aQ(16,16)
u=new B.ay(O.lv.j(0.18),1,A.r,-1)
t=v+1
s=B.aJ(m,m,m,m,D.bRo,m,m,m,v===0?m:new C.cK8(n,v),m,m,m,m,"Move up",A.cd)
r=i.length
q=B.aJ(m,m,m,m,D.bXN,m,m,m,v===r-1?m:new C.cK9(n,v),m,m,m,m,"Move down",A.cd)
r=r===1?m:new C.cKa(n,v)
p=new B.aQ(12,12)
o=new B.aQ(12,12)
g.push(B.p(m,B.x(B.a([new B.cc(A.aN,A.e,A.j,A.m,m,A.p,m,0,B.a([new B.y("Page "+t,m,D.frg,m,m,m,m,m,m,m,m,m),A.b2,s,q,B.aJ(m,m,m,m,B.X(A.ed,A.oY,m,m,m,18),m,m,m,r,m,m,m,m,"Remove page",A.cd)],l),m),B.aN(m,A.Z,!1,m,!0,A.t,m,B.aO(),i[v].a,m,m,m,m,m,2,new B.e3(m,m,m,"Title",m,m,m,m,m,m,m,m,m,m,m,m,!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.c,m,m,m,m,m,m,m,new B.b5(4,new B.bk(p,p,p,p),A.dk),!0,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.ak,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.ab,m,m,m,m,m,m,m,m,m,m,m,A.ck,!0,A.a3,m,A.ao,m,m,m,m),A.am,n.cku(i[v]),B.aN(m,A.Z,!1,m,!0,A.t,m,B.aO(),i[v].b,m,m,m,m,m,2,new B.e3(m,m,m,"Write here\u2026 long pages flow onto the next paper page",m,m,m,m,m,m,m,m,m,m,m,m,!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.c,m,m,m,m,m,m,m,new B.b5(4,new B.bk(o,o,o,o),A.dk),!0,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.ak,m,m,m,m,m,m,m,m,m,m,5,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.ab,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.a3,m,A.ao,m,m,m,m)],l),A.m,m,A.e,A.j,0,A.p),A.f,m,m,new B.o(E.nc,m,new B.bK(u,u,u,u),new B.bk(w,w,w,w),m,m,A.n),m,m,new C.a8G(h),A.eb,D.bxK,m,m,m))}return B.ov(!0,B.c6(k,E.ah6,B.ct(g,m,D.byc,m,m,A.ah,!1),m,!1,!1,j,m),new C.cKb(n),x.C)}}
C.aya.prototype={
B(d){var w,v,u=this,t=null,s=u.r,r=s?A.cs:E.nc,q=B.m(16),p=B.m(16),o=s?A.aw.j(0.08):A.c.j(0.04)
s=s?A.aw.j(0.16):A.d1.j(0.22)
w=B.m(12)
v=x.p
return new B.D(A.eH,B.aG(!1,A.a1,!0,t,B.aM(!1,q,!0,B.p(t,B.B(B.a([B.p(t,B.X(u.c,r,t,t,t,20),A.f,t,t,new B.o(s,t,t,w,t,t,A.n),t,40,t,t,t,t,t,40),A.bc,B.E(B.x(B.a([B.d(u.d,t,t,t,t,t,t,B.l(t,t,r,t,t,t,t,t,t,t,t,15,t,t,A.H,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),A.bA,B.d(u.e,t,t,t,t,t,t,D.aSJ,t,t,t)],v),A.E,t,A.e,A.j,0,A.p),1),B.X(A.eE,r.j(0.6),t,t,t,t)],v),A.m,t,A.e,A.j,0,t,t),A.f,t,t,new B.o(o,t,t,p,t,t,A.n),t,t,t,t,A.bf,t,t,t),t,!0,t,t,t,t,t,t,t,t,t,t,t,u.f,t,t,t,t,t,t,t),A.f,A.K,0,t,t,t,t,t,A.ai),t)}}
C.aqP.prototype={
U(){return new C.aEm()}}
C.aEm.prototype={
a_(){this.a2()
this.a_4()},
bx(d){this.bH(d)
if(d.c!=this.a.c)this.a1r()},
a1r(){var w=0,v=B.j(x.H),u=this,t
var $async$a1r=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.d
t=t==null?null:t.q()
w=2
return B.b(x.bq.b(t)?t:B.dU(t,x.H),$async$a1r)
case 2:u.d=null
if(u.c!=null)u.m(new C.eev(u))
w=3
return B.b(u.a_4(),$async$a1r)
case 3:return B.h(null,v)}})
return B.i($async$a1r,v)},
a_4(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$a_4=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:o=r.a.c
n=A.a.i(o==null?"":o)
if(J.ad(n)===0){w=1
break}t=4
if(J.d2(n,"http://")||J.d2(n,"https://")||J.d2(n,"data:")){o=B.Yw(B.cG(n,0,null),new B.Pz(!0))
r.d=o}else{o=B.fm("unsupported video ref")
throw B.W(o)}w=7
return B.b(o.ip(0).da(0,A.q4),$async$a_4)
case 7:if(r.c==null){w=1
break}r.d.tC(!1)
r.m(new C.eet(r))
t=2
w=6
break
case 4:t=3
m=s.pop()
q=B.ab(m)
$.am.$1("[kiapo video] "+B.w(q))
if(r.c!=null)r.m(new C.eeu(r))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a_4,v)},
q(){var w=this.d
if(w!=null)w.q()
this.a3()},
c8L(){var w=this,v=w.d
if(v==null||!w.e)return
if(v.a.f){v.h7(0)
w.m(new C.eew(w))}else{v.q7(0)
w.m(new C.eex(w))}},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.a,m=n.c
if(A.a.i(m==null?"":m).length===0){if(!n.e)return A.bJ
n=B.m(8*n.d)
m=B.a([D.jq.j(0.92),D.Lw.j(0.95)],x.O)
w=B.J(A.c1.j(0.55),A.r,1)
v=p.a
u=v.d
t=B.X(A.qo,A.c1,o,o,o,28*u)
v=v.f?"Tap to add president video":"Video ya kiapo"
return B.c1(B.at(B.x(B.a([t,new B.a7(o,6*u,o,o),B.d(v,o,o,o,o,o,o,B.l(o,o,A.c.j(0.85),o,o,o,o,o,o,o,o,11*p.a.d,o,o,A.P,o,o,!0,o,o,o,o,o,o,o,o),A.L,o,o)],x.p),A.m,o,A.e,A.Q,0,A.p),o,o,o),new B.o(o,o,w,n,o,new B.a9(A.az,A.aE,A.x,m,o,o),A.n),A.bg)}if(p.f)return B.at(B.X(A.aok,A.aB,o,o,o,28*n.d),o,o,o)
if(!p.e||p.d==null)return D.b9_
s=p.d
m=s.a.as
r=m.a
r=r>0?r:16
q=m.b
q=q>0?q:9
n=B.m(6*n.d)
m=B.a([B.eS(A.A,new B.a7(r,q,new B.Al(s,o),o),A.t,A.bV)],x.p)
if(!p.r){w=8*p.a.d
v=A.w.j(0.45)
m.push(B.at(B.p(o,B.X(A.ik,A.c,o,o,o,28*p.a.d),A.f,o,o,new B.o(v,o,o,o,o,o,A.a6),o,o,o,o,new B.Q(w,w,w,w),o,o,o),o,o,o))}return B.aB(o,B.by(n,new B.an(A.a_,o,A.b0,A.t,m,o),A.aq),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gc8K(),o,o,o,o,o,o,!1,A.a5)}}
C.xK.prototype={
a5(){return"NgmyHatiLayoutKind."+this.b}}
C.jr.prototype={}
C.adv.prototype={
B(d){return B.oZ(new C.e14(this,B.P(d).ax.a===A.I,d),!0,0.72,0.9,0.5,!1,null)}}
C.acU.prototype={
B(d){var w,v,u=null,t=B.P(d).ax.a===A.I,s=B.m(18),r=B.m(18),q=B.J(D.jq.j(t?0.35:0.4),A.r,1),p=t?D.M6:A.c,o=x.V,n=B.a([new B.ac(0,A.G,A.w.j(t?0.3:0.08),A.cv,14)],o),m=B.m(10),l=B.J(A.c1.j(0.5),A.r,1)
o=B.a([new B.ac(0,A.G,A.w.j(0.14),A.dB,6)],o)
w=this.c
o=B.E(B.p(u,new B.fF(0.5625,C.i8S(w),u),A.aq,u,u,new B.o(u,u,l,m,o,u,A.n),u,u,u,D.al1,u,u,u,u),1)
m=D.jq.j(t?0.18:0.16)
l=B.d(w.b,u,u,u,u,u,u,B.l(u,u,t?A.c:D.jq,u,u,u,u,u,u,u,u,12.5,u,u,A.u,u,u,!0,u,0.1,u,u,u,u,u,u),u,u,u)
v=x.p
return B.aG(!1,A.a1,!0,u,B.aM(!1,s,!0,B.p(u,B.x(B.a([o,B.p(u,B.x(B.a([l,A.cL,B.d(w.c,u,2,A.a2,u,u,u,B.l(u,u,t?A.aB:D.bkn,u,u,u,u,u,u,u,u,9.5,u,u,u,u,1.32,!0,u,u,u,u,u,u,u,u),u,u,u)],v),A.E,u,A.e,A.j,0,A.p),A.f,u,u,new B.o(u,u,new B.bK(new B.ay(m,1,A.r,-1),A.a0,A.a0,A.a0),u,u,u,A.n),u,u,u,u,D.ajk,u,u,u)],v),A.aj,u,A.e,A.j,0,A.p),A.f,u,u,new B.o(p,u,q,r,n,u,A.n),u,u,u,u,u,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,this.d,u,u,u,u,u,u,u),A.f,A.K,0,u,u,u,u,u,A.ai)}}
C.xN.prototype={
a5(){return"NgmyMarriageLayoutKind."+this.b}}
C.nP.prototype={}
C.bjU.prototype={
a_d(d){var w=null
return new B.bM(A.a4,w,w,B.Bt(A.A,B.p(w,w,A.f,w,w,new B.o(this.d.j(0.14),w,w,B.m(3),w,w,A.n),w,5,w,w,w,w,w,w),w,d),w)},
c9e(){return this.a_d(1)},
axR(d){var w=null,v=B.m(8),u=B.J(A.ig,A.r,0.9)
return B.p(A.A,B.d(d,w,w,w,w,w,w,B.l(w,w,this.d,w,w,w,w,w,w,w,w,6.5,w,w,A.u,w,w,!0,w,0.3,w,w,w,w,w,w),w,w,w),A.f,w,w,new B.o(D.aeT,w,u,v,w,w,A.n),w,13,w,w,w,w,w,w)},
B(d){var w=this,v=null,u=x.p,t=w.d
return B.x(B.a([B.B(B.a([B.p(v,v,A.f,v,v,new B.o(v,v,B.J(A.ig,A.r,1.6),v,v,v,A.a6),v,22,v,v,v,v,v,22),B.dO(B.p(v,v,A.f,v,v,new B.o(v,v,B.J(A.ig,A.r,1.6),v,v,v,A.a6),v,22,v,v,v,v,v,22),new B.t(-8.36,0))],u),A.m,v,A.b8,A.j,0,v,v),A.au,B.d("HATI YA NDOA",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,12,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v),B.d("Hati ya Makubaliano ya Ndoa",v,v,v,v,v,v,B.l(v,v,t.j(0.7),v,v,v,v,v,v,v,v,7,v,v,A.a7,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v),A.am,w.axR("TAARIFA ZA WANANDOA"),A.am,w.c9e(),A.cL,w.a_d(0.9),A.cL,w.a_d(0.7),A.O,w.axR("TAMKO LA MAKUBALIANO"),A.fO,w.a_d(1),A.cL,w.a_d(0.95),A.O,w.axR("MASHAHIDI"),A.b2,B.d("NGMY",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,8,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.d(w.c.b,v,v,v,v,v,v,B.l(v,v,w.e,v,v,v,v,v,v,v,v,7,v,v,A.P,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],u),A.m,v,A.e,A.j,0,A.p)}}
C.ady.prototype={
B(d){return B.oZ(new C.eiS(B.P(d).ax.a===A.I,d),!0,0.92,0.96,0.5,!1,null)}}
C.afe.prototype={
B(d){var w,v,u,t,s,r=null,q=B.P(d).ax.a===A.I,p=B.m(18),o=B.m(18),n=B.J(A.ay.j(q?0.35:0.4),A.r,1),m=q?D.bjV:A.c,l=x.V,k=B.a([new B.ac(0,A.G,A.w.j(q?0.3:0.08),A.cv,14)],l),j=B.m(10),i=B.J(A.ay.j(0.5),A.r,1)
l=B.a([new B.ac(0,A.G,A.w.j(0.14),A.dB,6)],l)
w=this.c
v=C.h5f(w.a)
if(v==null)v=A.d.gI(D.Rw)
u=B.b1(v.f)
t=B.b1(v.r)
s=x.p
l=B.E(B.p(r,new B.fF(0.5625,new B.an(A.a_,r,A.b0,A.t,B.a([B.bT(0,B.fP(C.h5e(v.d),A.A,r,r,A.cf,A.bV,!0,r,!1,r,r),0,0,0),new B.D(A.ak0,new C.bjU(v,u,t,r),r)],s),r),r),A.aq,r,r,new B.o(r,r,i,j,l,r,A.n),r,r,r,D.al1,r,r,r,r),1)
j=A.ay.j(q?0.18:0.16)
i=B.d(w.b,r,r,r,r,r,r,B.l(r,r,q?A.c:A_.M7,r,r,r,r,r,r,r,r,12.5,r,r,A.u,r,r,!0,r,0.1,r,r,r,r,r,r),r,r,r)
return B.aG(!1,A.a1,!0,r,B.aM(!1,p,!0,B.p(r,B.x(B.a([l,B.p(r,B.x(B.a([i,A.cL,B.d(w.c,r,2,A.a2,r,r,r,B.l(r,r,q?A.aB:D.bcu,r,r,r,r,r,r,r,r,9.5,r,r,r,r,1.32,!0,r,r,r,r,r,r,r,r),r,r,r)],s),A.E,r,A.e,A.j,0,A.p),A.f,r,r,new B.o(r,r,new B.bK(new B.ay(j,1,A.r,-1),A.a0,A.a0,A.a0),r,r,r,A.n),r,r,r,r,D.ajk,r,r,r)],s),A.aj,r,A.e,A.j,0,A.p),A.f,r,r,new B.o(m,r,n,o,k,r,A.n),r,r,r,r,r,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,this.d,r,r,r,r,r,r,r),A.f,A.K,0,r,r,r,r,r,A.ai)}}
C.l_.prototype={
a5(){return"NgmyMarriagePaperStyle."+this.b}}
C.a87.prototype={}
C.W6.prototype={
U(){var w=$.ax()
return new C.aED(new B.cA(null,x.A),new B.as(A.at,w),new B.as(A.at,w),B.mK(0,null,null),A.d.gI(D.a4a),D.dP9,B.a([],x.L),B.a([],x.gE))}}
C.aED.prototype={
a_(){var w,v=this
v.a2()
v.w=v.a.c
v.z=new C.zN(C.fHi(v.y),"NGMY NEWS","","","By the NGMY Newsroom","",A.Z,"","","")
w=x.a
C.fGe().bM(new C.elP(v),w)
$.r4().jK(0,"assets/images/ngmy_logo.png").bM(new C.elQ(v),w).eX(new C.elR())},
q(){var w=this,v=w.e,u=$.ax()
v.S$=u
v.P$=0
v=w.f
v.S$=u
v.P$=0
w.r.q()
w.a3()},
aeJ(d){var w=null,v=this.c
if(v!=null)v.K(x.q).f.T(B.b3(w,w,w,w,w,A.t,w,B.d(d,w,w,w,w,w,w,w,w,w,w),w,A.Y,w,w,w,w,w,w,w,w,w,w))},
Jc(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k
var $async$Jc=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hV().kZ(88,1600,A.eK),$async$Jc)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fk(),$async$Jc)
case 8:p=e
m=r.c
if(m==null){w=1
break}w=9
return B.b(C.htO(m,p),$async$Jc)
case 9:o=e
if(o==null||r.c==null){w=1
break}m=r.c
m.toString
w=10
return B.b(F.bDP(new B.pU(o,1),m),$async$Jc)
case 10:if(r.c!=null)r.m(new C.elr(r,o))
t=2
w=6
break
case 4:t=3
k=s.pop()
n=B.ab(k)
r.aeJ("Could not open that picture. "+B.w(n))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Jc,v)},
Xd(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$Xd=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.w
if(q==null||t.as){w=1
break}s=t.c
s.toString
w=3
return B.b(C.htO(s,q),$async$Xd)
case 3:r=e
if(r==null||t.c==null){w=1
break}s=t.c
s.toString
w=4
return B.b(F.bDP(new B.pU(r,1),s),$async$Xd)
case 4:if(t.c!=null)t.m(new C.eln(t,r))
case 1:return B.h(u,v)}})
return B.i($async$Xd,v)},
aeK(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$aeK=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.as){w=1
break}q.m(new C.ely(q))
t=4
q.a.toString
p=C.idn()
l=q.Q
k=q.e.a
o=l==="sw"?A.a.i(A.a.i(k.a)+" Write the whole newspaper in Swahili (Kiswahili)."):k.a
k=q.y
w=7
return B.b(p.$4$paper$photo$request$template(null,q.w,o,k),$async$aeK)
case 7:n=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.elz(q,n))
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
m=B.ab(i)
q.aeJ(B.w(m))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.elA(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$aeK,v)},
a_i(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h,g
var $async$a_i=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i=A.a.i(q.f.a.a)
h=!0
if(J.ad(i)!==0)if(!q.as){h=q.z
h=A.a.i(h.c).length===0&&h.r.length===0}if(h){w=1
break}q.m(new C.elt(q,i))
t=4
q.a.toString
p=C.idm()
h=q.z
m=q.y
l=q.w
k=B.C(q.ax,x.fz)
w=7
return B.b(p.$5$doc$history$instruction$photo$template(h,k,i,l,m),$async$a_i)
case 7:o=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.elu(q,o))
r.push(6)
w=5
break
case 4:t=3
g=s.pop()
n=B.ab(g)
if(q.c!=null)q.m(new C.elv(q,n))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.elw(q))
$.aW.x1$.push(new C.elx(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a_i,v)},
c9u(d){this.m(new C.els(this,d))},
Ev(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$Ev=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(!q.as){k=q.z
k=A.a.i(k.c).length===0&&k.r.length===0}else k=!0
if(k){w=1
break}q.m(new C.elp(q))
t=4
w=7
return B.b($.aW.gmF(),$async$Ev)
case 7:w=8
return B.b(B.bP(A.mA,null,x.H),$async$Ev)
case 8:k=$.aW.al$.x.h(0,q.d)
p=k==null?null:k.gbd()
if(!(p instanceof B.q4))throw B.W("The page is not ready yet.")
w=9
return B.b(p.m4(1800/p.gY(0).a),$async$Ev)
case 9:o=e
w=10
return B.b(o.hr(A.h8),$async$Ev)
case 10:n=e
if(n==null)throw B.W("Could not make the picture.")
w=11
return B.b(A7.agF(J.eQ(A.dG.gaR(n)),"ngmy_news.png","image/png"),$async$Ev)
case 11:m=e
q.aeJ(m?"Your newspaper picture is ready. Check your downloads.":"Downloading is not available here.")
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
l=B.ab(i)
q.aeJ(B.w(l))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.elq(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Ev,v)},
B(a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=a1.z,a4=!(A.a.i(a3.c).length===0&&a3.r.length===0)
a3=B.aJ(a2,a2,a2,a2,A.lb,a2,a2,a2,new C.elG(a5),a2,a2,a2,a2,a2,a2)
w=x.p
v=B.a([],w)
if(a1.ay.length!==0)v.push(B.aJ(a2,a2,a2,a2,D.bTd,a2,a2,a2,new C.elH(a1),a2,a2,a2,a2,"Undo the last change",a2))
v.push(B.aJ(a2,a2,a2,a2,A.oj,a2,a2,a2,a4?a1.gb_g():a2,a2,a2,a2,a2,"Download",a2))
a3=B.eH(v,a2,a2,!0,!0,A.Bm,a2,1,!0,a2,0,!1,a2,!1,a2,a2,a3,a2,!0,a2,a2,a2,a2,a2,D.f_k,a2,a2,a2,1,a2,!0)
v=x.V
u=B.a([new B.ac(0,A.G,A.w.j(0.6),A.f_,24)],v)
t=a1.z
s=a1.y
r=a1.w
u=B.p(a2,new B.fF(0.7142857142857143,B.eS(A.A,new B.ex(new C.b1p(t,s,r,a1.x,a2),a1.d),A.f,A.dz),a2),A.f,a2,a2,new B.o(a2,a2,a2,a2,u,a2,A.n),a2,a2,a2,a2,a2,a2,a2,a2)
s=B.d("1  YOUR PICTURE",a2,a2,a2,a2,a2,a2,W.t6,a2,a2,a2)
t=a1.as?a2:a1.gc9t()
t=B.a([B.E(B.dj(D.bTZ,B.d(r==null?"Add a picture":"Change the picture",a2,a2,a2,a2,a2,a2,A.ck,a2,a2,a2),t,B.bp(D.tF,a2,a2,a2,A.c,A.fZ,a2,a2,new B.b7(B.m(14),P.vt),a2,a2,a2)),1)],w)
r=a1.w
if(r!=null){r=B.by(B.m(10),B.fP(r,A.A,a2,a2,A.cf,A.bV,!1,48,!1,a2,48),A.aq)
A.d.v(t,B.a([A.as,r,B.aJ(a2,a2,a2,a2,D.bQH,a2,a2,a2,a1.as?a2:a1.gbK6(),a2,a2,a2,a2,"Crop the picture",a2)],w))}t=B.B(t,A.m,a2,A.e,A.j,0,a2,a2)
r=B.d("2  WHAT SHOULD IT BE ABOUT?  (optional)",a2,a2,a2,a2,a2,a2,W.t6,a2,a2,a2)
q=B.aN(a2,A.Z,!1,a2,!0,A.t,a2,B.aO(),a1.e,a2,a2,a2,a2,a2,2,a1.aT8("Leave it empty and the AI picks a story about NGMY"),A.y,!0,a2,!0,a2,!1,a2,A.ak,a2,a2,a2,a2,a2,a2,a2,a2,a2,3,1,a2,!1,"\u2022",a2,a2,a2,a2,a2,!1,a2,a2,!1,a2,!0,a2,A.ab,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,A.df,!0,A.a3,a2,A.ao,a2,a2,a2,a2)
p=B.a([],w)
for(o=0;o<7;++o){n=D.diO[o]
p.push(B.mQ(a2,D.tF,new B.y(n.a,a2,A.pu,a2,a2,a2,a2,a2,a2,a2,a2,a2),A.hk,new C.elI(a1,n),a2,a2,P.vt,a2))}p=B.bW(A.bE,p,A.bq,a2,6,8)
m=a1.Q
m=B.bW(A.bE,B.a([D.fOC,A.bc,B.j0(a2,a2,a2,D.fyv,a2,new C.elJ(a1),m==="en",a2,a2,a2,a2),A.ac,B.j0(a2,a2,a2,D.fyq,a2,new C.elK(a1),m==="sw",a2,a2,a2,a2)],w),A.vm,a2,0,8)
l=B.d("3  PICK A DESIGN",a2,a2,a2,a2,a2,a2,W.t6,a2,a2,a2)
k=B.a([],w)
for(j=x.dt,i=B.d1(D.a4a,0,B.dB(10,"count",x.S),j),h=i.$ti,i=new B.bS(i,i.gL(0),h.k("bS<ak.E>")),h=h.k("ak.E");i.C();){g=i.d
k.push(a1.aRC(g==null?h.a(g):g))}k=B.ct(k,a2,a2,a2,a2,A.aN,!1)
i=B.a([],w)
for(j=B.d1(D.a4a,10,a2,j),h=j.$ti,j=new B.bS(j,j.gL(0),h.k("bS<ak.E>")),h=h.k("ak.E");j.C();){g=j.d
i.push(a1.aRC(g==null?h.a(g):g))}j=B.ct(i,a2,a2,a2,a2,A.aN,!1)
i=a1.as?a2:a1.gc9w()
h=B.m(18)
v=B.a([new B.ac(0,A.G,A.bC.j(0.4),A.J,18)],v)
v=B.a([u,A.aA,new B.D(A.cu,s,a2),t,A.aA,new B.D(A.cu,r,a2),q,A.O,p,A.W,m,A.aA,new B.D(A.cu,l,a2),new B.a7(a2,78,k,a2),A.O,new B.a7(a2,78,j,a2),A.aM,B.aB(a2,B.p(A.A,B.B(B.a([D.bTT,A.ac,B.d(a4?"Write it again":"Write my newspaper",a2,a2,a2,a2,a2,a2,A.fR,a2,a2,a2)],w),A.m,a2,A.e,A.Q,0,a2,a2),A.f,a2,a2,new B.o(a2,a2,a2,h,v,G.ux,A.n),a2,54,a2,a2,a2,a2,a2,a2),A.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,i,a2,a2,a2,a2,a2,a2,!1,A.a5)],w)
if(a4){u=B.a([A.dY,B.B(B.a([D.dzQ,A.as,D.bEl],w),A.m,a2,A.e,A.j,0,a2,a2),A.O],w)
for(t=a1.ax,s=t.length,o=0;o<t.length;t.length===s||(0,B.M)(t),++o){f=t[o]
e=f.a==="you"
r=e?A.a8:A.a4
q=e?A.b5.j(0.35):D.tF
p=new B.aQ(16,16)
d=new B.ay(A.bz,1,A.r,-1)
u.push(new B.bM(r,a2,a2,B.p(a2,new B.y(f.b,a2,D.foK,a2,a2,a2,a2,a2,a2,a2,a2,a2),A.f,a2,A9.Wp,new B.o(q,a2,new B.bK(d,d,d,d),new B.bk(p,p,p,p),a2,a2,A.n),a2,a2,a2,A.cu,A.iU,a2,a2,a2),a2))}u.push(A.am)
t=B.a([],w)
for(o=0;o<4;++o){a0=D.d4t[o]
t.push(B.mQ(a2,D.tF,new B.y(a0,a2,A.JO,a2,a2,a2,a2,a2,a2,a2,a2,a2),A.hk,new C.elL(a1,a0),a2,a2,P.vt,a2))}u.push(B.bW(A.bE,t,A.bq,a2,6,8))
u.push(A.W)
t=B.E(B.aN(a2,A.Z,!1,a2,!0,A.t,a2,B.aO(),a1.f,a2,a2,a2,a2,a2,2,a1.aT8("Ask for a change, or ask a question\u2026"),A.y,!0,a2,!0,a2,!1,a2,A.ak,a2,a2,a2,a2,a2,a2,a2,a2,a2,4,1,a2,!1,"\u2022",a2,a2,a2,new C.elM(a1),a2,!1,a2,a2,!1,a2,!0,a2,A.ab,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,A.df,!0,A.a3,a2,A.ao,a2,a2,a2,a2),1)
s=a1.as?a2:a1.gc9v()
u.push(B.B(B.a([t,A.ac,B.I3(A.z1,s,B.nI(a2,A.b5,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2)],w),A.m,a2,A.e,A.j,0,a2,a2))
u.push(A.aA)
t=a1.as?a2:a1.gb_g()
u.push(B.dj(A.oj,D.fK5,t,B.bp(A.cV,a2,a2,a2,a2,A.Jy,a2,a2,new B.b7(B.m(16),A.a0),a2,a2,a2)))
A.d.v(v,u)}v=B.a([B.ct(v,a1.r,A.ajM,a2,a2,A.ah,!1)],w)
if(a1.as){u=A.w.j(0.55)
t=B.m(20)
s=B.J(E.k7.j(0.5),A.r,1)
v.push(B.bT(0,B.en(B.at(B.p(a2,B.B(B.a([E.a8J,A.ev,B.d(a1.at,a2,a2,a2,a2,a2,a2,A.jj,a2,a2,a2)],w),A.m,a2,A.e,A.Q,0,a2,a2),A.f,a2,a2,new B.o(E.Bc,a2,s,t,a2,a2,A.n),a2,a2,a2,a2,D.bAA,a2,a2,a2),a2,a2,a2),u,!0),0,0,0))}return B.c6(a3,A.Bm,new B.an(A.a_,a2,A.aa,A.t,v,a2),a2,!1,!1,a2,a2)},
aT8(d){var w=null
return B.bv(w,new B.b5(4,B.m(14),A.a0),w,A.eQ,w,w,w,w,!0,w,w,w,w,w,w,D.tF,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,A1.JJ,d,w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
aRC(d){var w,v,u,t=null,s=d.a===this.y.a,r=B.m(12),q=B.b1(d.f),p=s?A.bC:A.bz
p=B.J(p,A.r,s?2.4:1)
w=B.a([B.p(t,t,A.f,B.b1(d.x),t,t,t,5,t,A.l1,t,t,t,t),A.fO],x.p)
for(v=d.w,u=0;u<4;++u)w.push(B.p(t,t,A.f,B.b1(v).j(0.5),t,t,t,2,t,D.bwM,t,t,t,t))
w.push(A.cL)
w.push(new B.D(A.jx,B.d(d.b,t,1,A.a2,t,t,t,B.l(t,t,B.b1(v),t,t,t,t,t,t,t,t,9,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t))
return B.aB(t,B.p(t,B.x(w,A.m,t,A.b8,A.j,0,A.p),A.f,t,t,new B.o(q,t,p,r,t,t,A.n),t,t,t,A.iy,t,t,t,72),A.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.elo(this,d),t,t,t,t,t,t,!1,A.a5)}}
C.zN.prototype={
bcE(d,e,f,g,h,i,j,k,l,m){var w=this,v=g==null?w.b:g,u=i==null?w.a:i,t=h==null?w.c:h,s=m==null?w.d:m,r=e==null?w.e:e,q=f==null?w.f:f,p=d==null?w.r:d,o=j==null?w.w:j,n=l==null?w.x:l
return new C.zN(u,v,t,s,r,q,p,o,n,k==null?w.y:k)},
cJN(d){var w=null
return this.bcE(w,w,w,w,w,d,w,w,w,w)},
ag(){var w=this
return B.G(["paper",w.a,"headline",w.c,"subhead",w.d,"byline",w.e,"caption",w.f,"body",w.r,"pullQuote",w.w,"sidebarTitle",w.x,"sidebarText",w.y,"category",w.b],x.N,x.z)},
aDe(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j="headline",i="category",h=new C.cg9(d),g=d.h(0,"body")
if(x.j.b(g)){w=B.a([],x.s)
for(v=J.aV(g);v.C();){u=v.gR(v)
if(A.a.i(B.w(u)).length!==0)w.push(A.a.i(B.w(u)))}t=w}else if(typeof g=="string"&&A.a.i(g).length!==0){w=A.a.fD(g,B.af("\\n\\s*\\n",!0,!1,!1,!1))
w=new B.N(w,new C.cg7(),B.U(w).k("N<1,n>")).c0(0,new C.cg8())
t=B.C(w,w.$ti.k("K.E"))}else t=k
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
return this.bcE(p,r,q,J.ad(l==null?"":l)===0?k:h.$1(i).toUpperCase(),v,w,o,m,n,s)},
gFJ(d){return this.f}}
C.tv.prototype={
a5(){return"NewsLayout."+this.b}}
C.BH.prototype={
a5(){return"NewsFrame."+this.b}}
C.lp.prototype={}
C.b1p.prototype={
rC(d,e,f,g,h,i,j){var w=null
return B.l(w,w,f==null?B.b1(this.d.w):f,w,w,w,w,w,d,w,w,e,i,w,j,w,g,!0,w,h,w,w,w,w,w,w)},
b_i(d,e,f,g){return this.rC(d,e,null,1.25,f,A.bp,g)},
Q9(d,e,f,g,h){return this.rC(d,e,f,1.25,g,A.bp,h)},
axX(d,e,f,g,h){return this.rC(d,e,null,f,g,A.bp,h)},
axW(d,e,f,g,h){return this.rC(d,e,f,g,0,A.bp,h)},
b_k(d,e,f,g,h){return this.rC(d,e,null,f,0,g,h)},
c9A(d,e,f,g,h,i){return this.rC(d,e,f,g,0,h,i)},
axV(d,e,f,g){return this.rC(d,e,null,f,0,A.bp,g)},
aeN(d,e,f){return this.rC(d,e,null,f,0,A.bp,A.cP)},
b_j(d,e,f,g,h){return this.rC(d,e,f,g,0,h,A.cP)},
c9z(d,e,f,g){return this.rC(d,e,null,f,0,g,A.cP)},
c9y(d,e,f,g){return this.rC(d,e,f,g,0,A.bp,A.cP)},
aeO(d,e,f,g,h,i){return this.rC(d,e,f,g,h,A.bp,i)},
b_h(d,e,f,g,h,i,j,k,l){var w,v,u=null
for(w=i;w>j;){v=new B.jQ(new B.eu(d,u,u,A.cQ,u,u,u,u,u,u,new B.F(!0,u,u,e,u,u,w,f,l,u,u,u,k,u,u,u,u,u,u,u,u,u,u,u,u,u)),A.a3,A.bZ,new B.jA(1),u,u,h,u,A.bW,u)
v.nY(g)
if(!v.b.a.c.gaEW())return w
w-=2}return j},
aeL(d,e,f,g,h,i,j,k){return this.b_h(d,e,f,g,h,i,j,k,A.bp)},
aA2(d,e,f){var w=null,v=d==null?B.b1(this.d.w):d,u=x.p,t=B.a([B.p(w,w,A.f,v,w,w,w,f,w,w,w,w,w,w)],u)
if(e)A.d.v(t,B.a([new B.a7(w,3,w,w),B.p(w,w,A.f,v,w,w,w,0.8,w,w,w,w,w,w)],u))
return B.x(t,A.m,w,A.e,A.j,0,A.p)},
aA1(d){return this.aA2(null,!1,d)},
ahD(d,e){return this.aA2(null,d,e)},
crh(d,e){return this.aA2(d,!1,e)},
gb1r(){var w=A.a.i(this.c.a)
return w.length===0?"The NGMY Times":w},
gaVO(){var w=A.a.i(this.c.c)
if(w.length===0)w="Your headline appears here"
return this.d.CW?w.toUpperCase():w},
OW(d,e,f,g,h,i){var w=this,v=null,u=w.d.Q,t=w.aeL(w.gaVO(),u,A.P,d,g,h,i,1.02)
return B.d(w.gaVO(),v,g,A.a2,v,v,v,w.axW(u,t,f,1.02,A.P),e,v,v)},
aVT(d){return this.OW(d,A.L,null,2,78,30)},
ac7(d,e,f,g,h){return this.OW(d,e,null,f,g,h)},
bZd(d,e,f,g,h){return this.OW(d,A.L,e,f,g,h)},
bZc(d,e,f){return this.OW(d,A.L,null,e,f,30)},
S5(d,e,f,g,h){var w,v=this,u=null,t=v.c.d,s=A.a.i(t)
if(s.length===0)return A.bJ
w=v.d.as
return new B.D(A.jN,B.d(s,u,g,A.a2,u,u,u,v.b_j(w,v.b_h(t,w,A.cP,d,g,h,15,1.2,A.cD),f,1.2,A.cD),e,u,u),u)},
b7i(d){return this.S5(d,A.L,null,3,24)},
aBw(d,e,f,g){return this.S5(d,e,null,f,g)},
cyW(d,e,f){return this.S5(d,A.L,e,3,f)},
b7j(d,e){return this.S5(d,e,null,3,24)},
cyU(d,e){return this.S5(d,A.L,null,3,e)},
cyV(d,e,f){return this.S5(d,e,null,3,f)},
arz(d,e){var w=this,v=null,u=A.a.i(w.c.e),t=new B.D(A.fL,B.d(u.toUpperCase(),v,v,v,v,v,v,w.Q9("Roboto",12,d==null?B.b1(w.d.x):d,1.4,A.H),v,v,v),v)
if(!e)return t
u=w.d.w
return B.B(B.a([B.E(B.p(v,v,A.f,B.b1(u),v,v,v,1.2,v,v,v,v,v,v),1),t,B.E(B.p(v,v,A.f,B.b1(u),v,v,v,1.2,v,v,v,v,v,v),1)],x.p),A.m,v,A.e,A.j,0,v,v)},
NS(){return this.arz(null,!0)},
ary(d){return this.arz(null,d)},
bG3(d,e){var w=null,v=A.a.i(this.c.f)
if(v.length===0)return A.bJ
return new B.D(A.hY,new B.a7(d,w,B.d(v,w,2,A.a2,w,w,w,this.c9z(this.d.as,13.5,1.2,A.cD),e,w,w),w),w)},
vH(d,a0){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Roboto",j=new B.V(Date.now(),0,!1),i=m.gb1r(),h=A.o.ao(j.bD(B.c4(B.bC(j),1,1,0,0,0,0,0)).a,864e8),g="VOL. "+C.i0K(Math.max(1,B.bC(j)-2021))+"  \xb7  NO. "+(h+1+3000),f=m.b_i(k,12,1.2,A.P),e=a0?0.62:1
h=m.d
w=h.y
v=h.z
if(w==="blackletter")u=m.aeL(i,v,A.P,d,1,96*e,36,1)
else{t=w==="bar"?76:72
u=m.aeL(i.toUpperCase(),v,A.P,d,1,t*e,30,1)}switch(w){case"bar":w=a0?6:10
t=B.b1(h.x)
h=h.ch?B.b1(h.f):A.c
s=x.p
return B.x(B.a([B.p(l,B.B(B.a([B.E(B.d(i.toUpperCase(),l,1,A.eL,l,l,l,m.aeO(v,u*0.84,h,1,1,A.P),l,l,l),1)],s),A.m,l,A.e,A.j,0,l,l),A.f,t,l,l,l,l,l,l,new B.Q(18,w,18,w),l,l,l),A.O,B.B(B.a([B.d(C.bD3(j).toUpperCase(),l,l,l,l,l,l,f,l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("FREE \xb7 NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],s),A.m,l,A.iD,A.j,0,l,l),A.am,m.ahD(!0,3)],s),A.m,l,A.e,A.j,0,A.p)
case"split":h=h.x
w=x.p
return B.x(B.a([B.B(B.a([B.p(l,l,A.f,B.b1(h),l,l,l,u*0.8,l,l,l,l,l,14),A.ev,B.E(B.d(i,l,1,A.eL,l,l,l,m.axV(v,u*0.9,1,A.P),l,l,l),1)],w),A.m,l,A.e,A.j,0,l,l),A.W,B.B(B.a([B.d(C.bD3(j),l,l,l,l,l,l,m.Q9(k,13,B.b1(h),0.6,A.P),l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l)],w),A.m,l,A.iD,A.j,0,l,l),A.O,m.crh(B.b1(h),3)],w),A.m,l,A.e,A.j,0,A.p)
case"logo":r=a0?52:64
w=m.gb1r()
v=B.d("NGMY",l,l,l,l,l,l,m.axX(k,r,1,-1.5,A.u),l,l,l)
t=r*0.2
s=r*0.04
q=B.b1(h.x)
p=B.m(r*0.16)
o=h.ch&&h.a==="midnight"||h.a==="gold"?A.w:A.c
h=h.w
n=x.p
return B.x(B.a([B.B(B.a([v,A.ac,B.eL(A.A,-0.03,B.p(l,B.d("NEWS",l,l,l,l,l,l,m.rC(k,r*0.72,o,1.05,-0.5,A.cD,A.u),l,l,l),A.f,l,l,new B.o(q,l,l,p,l,l,A.n),l,l,l,l,new B.Q(t,s,t,s),l,l,l),l),A.b2,new B.ds(1,A.cn,B.d(w.toUpperCase(),l,2,A.a2,l,l,l,m.aeO(k,12.5,B.b1(h).j(0.85),1.3,1.2,A.P),A.dU,l,l),l)],n),A.m,l,A.e,A.j,0,l,l),A.O,B.p(l,l,A.f,B.b1(h).j(0.25),l,l,l,1.4,l,l,l,l,l,l)],n),A.m,l,A.e,A.j,0,A.p)
case"blackletter":h=x.p
w=B.B(B.a([B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("PRICE: FREE \xb7 NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],h),A.m,l,A.iD,A.j,0,l,l)
t=m.ahD(!0,1.4)
s=a0?4:10
v=B.d(i,l,1,l,l,l,l,m.axV(v,u,1,A.P),A.L,l,l)
q=a0?4:8
return B.x(B.a([w,A.au,t,new B.a7(l,s,l,l),v,new B.a7(l,q,l,l),m.ahD(!0,1.4),A.au,B.d(C.bD3(j).toUpperCase(),l,l,l,l,l,l,f,A.L,l,l),A.au,m.aA1(3)],h),A.m,l,A.e,A.j,0,A.p)
default:h=x.p
return B.x(B.a([B.d(i.toUpperCase(),l,1,l,l,l,l,m.axX(v,u,1,3,A.P),A.L,l,l),A.O,m.ahD(!0,1.2),A.au,B.B(B.a([B.d(C.bD3(j).toUpperCase(),l,l,l,l,l,l,f,l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],h),A.m,l,A.iD,A.j,0,l,l),A.au,m.aA1(3)],h),A.m,l,A.e,A.j,0,A.p)}},
adh(d){return this.vH(d,!1)},
aeM(d,e,f,g){var w=null,v=f*0.9,u=f*0.45,t=e==null?B.b1(this.d.x):e,s=B.m(f)
return B.p(w,B.d(d,w,w,w,w,w,w,this.aeO("Roboto",f,g==null?A.c:g,1,0.4,A.u),w,w,w),A.f,w,w,new B.o(t,w,w,s,w,w,A.n),w,w,w,w,new B.Q(v,u,v,u),w,w,w)},
c9x(d,e){return this.aeM(d,null,e,null)},
aXY(d){var w=null,v=new B.V(Date.now(),0,!1),u=A.o.F(B.dm(v),12)===0?12:A.o.F(B.dm(v),12),t=B.b1(this.d.w).j(0.75),s=this.axW("Roboto",15,t,1,A.cw),r=B.X(E.ams,t,w,w,w,18),q=A.a.aq(A.pg[B.bL(v)-1],0,3),p=A.a.aZ(A.o.u(B.h3(v)),2,"0"),o=B.dm(v)>=12?"PM":"AM"
return B.B(B.a([r,A.ac,B.d(q+" "+B.bV(v)+", "+B.bC(v)+"  \xb7  "+u+":"+p+" "+o,w,w,w,w,w,w,s,w,w,w),B.p(w,w,A.f,t.j(0.4),w,w,w,20,w,A.fX,w,w,w,1),B.X(d,t,w,w,w,19),A.ac,B.d("NGMY News",w,w,w,w,w,w,s,w,w,w)],x.p),A.m,w,A.e,A.j,0,w,w)},
awH(){return this.aXY(A.oe)},
b4q(d,e,f,g){var w=null,v=A.a.i(this.c.c)
if(v.length===0)v="Your headline appears here"
return B.d(v,w,e,A.a2,w,w,w,this.aeO("Roboto",this.aeL(v,"Roboto",A.H,d,e,f,g,1.08),w,1.08,-0.8,A.H),w,w,w)},
aA5(d,e,f){return this.b4q(d,e,f,30)},
aBz(d,e,f){var w=null,v=A.a.i(this.c.d)
if(v.length===0)return A.bJ
return new B.D(A.vP,B.d(v,w,e,A.a2,w,w,w,this.c9y("Roboto",f,B.b1(this.d.w).j(0.88),1.35),w,w,w),w)},
b7n(d){return this.aBz(d,3,22)},
cz6(d,e){return this.aBz(d,e,22)},
tS(d,e){var w,v,u,t,s=null,r=this.e
if(r!=null){w=B.fP(r,A.A,s,s,A.cf,A.bV,!0,e,!1,s,d)
r=this.d
v=r.ay
if(v==="bw")w=new B.Bg(D.bDn,w,s)
if(v==="sepia")w=new B.Bg(D.bDm,w,s)}else{r=this.d
v=r.w
u=B.b1(v).j(0.1)
t=Math.min(d,e)
w=B.p(s,B.at(B.X(A.yz,B.b1(v).j(0.35),s,s,s,t*0.25),s,s,s),A.f,u,s,s,s,e,s,s,s,s,s,d)}v=B.a([w],x.p)
if(r.ax)v.push(B.c1(s,new B.o(s,s,s,s,s,new B.c0(A.A,0.95,A.x,s,0,B.a([A.K,A.XL.j(0.38)],x.O),s,s),A.n),A.bg))
return new B.a7(d,e,new B.an(A.a_,s,A.b0,A.t,v,s),s)},
qF(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.d
switch(j.e.a){case 1:j=j.w
w=B.J(B.b1(j),A.r,3)
j=B.J(B.b1(j),A.r,1)
return B.p(k,B.p(k,l.tS(d-24,e-24),A.f,k,k,new B.o(k,k,j,k,k,k,A.n),k,k,k,k,A.eB,k,k,k),A.f,k,k,new B.o(k,k,w,k,k,k,A.n),k,e,k,k,A.m3,k,k,d)
case 2:w=B.a([new B.ac(0,A.G,A.w.j(0.35),D.efK,14)],x.V)
v=l.tS(d-28,e-28-58)
u=A.a.i(l.c.f)
if(u.length===0)u="NGMY"
return B.eL(A.A,-0.035,B.p(k,B.x(B.a([v,B.E(B.at(B.d(u,k,2,A.a2,k,k,k,l.b_j(j.as,13.5,D.bee,1.1,A.cD),A.L,k,k),k,k,k),1)],x.p),A.m,k,A.e,A.j,0,A.p),A.f,k,k,new B.o(D.bi1,k,k,k,w,k,A.n),k,e,k,k,D.by7,k,k,d),k)
case 3:w=B.m(30)
j=B.J(B.b1(j.x),A.r,5)
return B.p(k,B.by(B.m(25),l.tS(d-10,e-10),A.aq),A.f,k,k,new B.o(k,k,j,w,k,k,A.n),k,e,k,k,k,k,k,d)
case 4:t=Math.min(d,e)
w=B.J(B.b1(j.x),A.r,6)
j=B.b1(j.f)
v=t-10
return new B.a7(d,e,B.at(B.p(k,B.hT(l.tS(v,v),A.aq),A.f,k,k,new B.o(j,k,w,k,k,k,A.a6),k,t,k,k,A.m3,k,k,t),k,k,k),k)
case 5:j=B.a([new B.ac(0,A.G,A.w.j(0.3),D.efq,10)],x.V)
return B.eL(A.A,0.025,new B.a7(d,e,new B.an(A.a_,k,A.aa,A.f,B.a([B.bT(0,B.p(k,l.tS(d-18,e-18),A.f,k,k,new B.o(A.c,k,k,k,j,k,A.n),k,k,k,k,A.rn,k,k,k),0,0,0),B.ao(k,B.eL(A.A,-0.6,B.p(k,k,A.f,A.bM.j(0.85),k,k,k,26,k,k,k,k,k,90),k),k,k,-18,k,-10,k),B.ao(-10,B.eL(A.A,-0.6,B.p(k,k,A.f,A.bM.j(0.85),k,k,k,26,k,k,k,k,k,90),k),k,k,k,-18,k,k)],x.p),k),k),k)
case 6:j=B.b1(j.x)
return new B.a7(d,e,B.b4(B.nC(l.tS(d,e),A.aq,D.heK),new C.bd2(j,k),k,k,A.ax),k)
case 7:j=x.p
w=B.a([l.tS(d-16,e-44)],j)
for(v=[!0,!1],u=d/34,s=0;s<2;++s){r=v[s]
q=r?-18:k
p=r?k:-18
o=B.a([],j)
for(n=0;n<Math.max(6,A.k.bh(u));++n){m=new B.aQ(2,2)
o.push(B.p(k,k,A.f,k,k,new B.o(A.bO,k,k,new B.bk(m,m,m,m),k,k,A.n),k,10,k,k,k,k,k,14))}w.push(new B.cN(0,q,0,p,k,k,new B.cc(A.aN,A.rH,A.j,A.m,k,A.p,k,0,o,k),k))}return B.p(k,new B.an(A.a_,k,A.b0,A.t,w,k),A.f,A.eh,k,k,k,e,k,k,D.bCD,k,k,d)
case 8:w=d/2
v=B.x6(A.fB,new B.aQ(w,w))
j=B.J(B.b1(j.x),A.r,5)
w-=5
return B.p(k,B.by(B.x6(A.hx,new B.aQ(w,w)),l.tS(d-10,e-10),A.aq),A.f,k,k,new B.o(k,k,j,v,k,k,A.n),k,e,k,k,k,k,k,d)
case 9:j=B.a([new B.ac(0,A.G,A.w.j(0.35),A.fY,22)],x.V)
return B.p(k,l.tS(d-20,e-20),A.f,k,k,new B.o(A.c,k,k,k,j,k,A.n),k,e,k,k,A.bT,k,k,d)
case 10:return new B.a7(d,e,B.nC(l.tS(d,e),A.aq,D.hlX),k)
case 0:j=B.J(B.b1(j.w),A.r,2.4)
return B.p(k,l.tS(d-14,e-14),A.f,k,k,new B.o(k,k,j,k,k,k,A.n),k,e,k,k,A.eB,k,k,d)}},
aPb(d,e){return this.d.e===D.S9?A.bJ:this.bG3(d,e)},
WK(d){return this.aPb(d,A.L)},
gaAQ(){var w=this.c
return A.a.i(w.y).length!==0||A.a.i(w.w).length!==0},
aAP(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.c,l=A.a.i(m.x)
if(l.length===0)l=A.a.i(m.w).length!==0?"":"NGMY NOTES"
w=A.a.i(m.y)
v=o.d
u=B.J(B.b1(v.w),A.r,1.6)
t=v.x
s=B.b1(t)
s=s.j(v.ch?0.14:0.07)
r=x.p
q=B.a([],r)
m=A.a.i(m.w)
if(m.length!==0&&w.length===0)q.push(B.E(B.at(B.d("\u201c"+m+"\u201d",n,7,A.a2,n,n,n,o.b_k(v.Q,19,1.15,A.cD,A.P),A.L,n,n),n,n,n),1))
else{r=B.a([],r)
p=l.length!==0
if(p)r.push(B.d(l.toUpperCase(),n,1,A.a2,n,n,n,o.Q9("Roboto",12.5,B.b1(t),1.2,A.u),n,n,n))
if(p)r.push(A.au)
m=w.length===0?m:w
r.push(B.E(B.d(m,n,9,A.a2,n,n,n,o.aeN(v.as,13,1.25),n,n,n),1))
A.d.v(q,r)}return B.p(n,B.jF(B.x(q,A.E,n,A.e,A.j,0,A.p),A.t,n),A.f,n,n,new B.o(s,n,u,n,n,n,A.n),n,e,n,n,A.bf,n,n,d)},
gchI(){var w=this.c.r
return w.length===0?B.a([y.g],x.s):w},
a9P(d,e,f,g){return B.cB(new C.cga(this,e,d,f,g))},
a9O(d){return this.a9P(d,22,!0,18)},
WX(d,e){return this.a9P(d,22,!0,e)},
aQd(d,e,f){return this.a9P(d,22,e,f)},
bI3(d,e,f){return this.a9P(d,e,!0,f)},
bak(d,e,f,g){return B.cB(new C.cgb(this,e,d,g,!0,f))},
cgv(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i="Roboto",h=k.d
switch(h.d.a){case 0:return B.x(B.a([k.adh(824),A.aA,k.aVT(824),k.b7i(824),A.O,k.NS(),A.ad,B.at(k.qF(824,360),j,j,j),k.WK(824),A.ad,B.E(k.a9O(3),1)],x.p),A.aj,j,A.e,A.j,0,A.p)
case 1:w=x.p
return B.x(B.a([k.adh(824),A.aM,new B.a7(j,350,B.B(B.a([new B.a7(440,j,B.x(B.a([k.ac7(440,A.bi,3,62,26),k.aBw(440,A.bi,2,20),A.b2,k.arz(B.b1(h.x),!1)],w),A.E,j,A.e,A.j,0,A.p),j),A.Jz,B.x(B.a([k.qF(362,310),k.WK(362)],w),A.m,j,A.e,A.j,0,A.p)],w),A.E,j,A.e,A.j,0,j,j),j),A.W,k.aA1(2),A.ad,B.E(k.a9O(3),1)],w),A.aj,j,A.e,A.j,0,A.p)
case 2:w=k.vH(824,!0)
v=B.b1(h.x)
u=h.ch
t=x.p
s=B.a([k.bZd(788,u?B.b1(h.f):A.c,3,92,34)],t)
r=k.c
if(A.a.i(r.d).length!==0)s.push(k.cyW(788,u?B.b1(h.f):A.c,22))
v=B.p(j,B.x(s,A.m,j,A.e,A.j,0,A.p),A.f,v,j,j,j,j,j,j,A.BJ,j,j,j)
u=B.a([B.at(k.qF(824,390),j,j,j)],t)
s=A.a.i(r.f)
if(s.length!==0&&h.e!==D.S9){h=A.w.j(0.65)
u.push(B.ao(0,B.p(j,B.d(s,j,2,A.a2,j,j,j,k.axW(i,14,A.c,1.15,A.P),j,j,j),A.f,h,j,j,j,j,j,j,A.lA,j,j,j),j,j,0,0,j,j))}return B.x(B.a([w,A.ad,v,A.ad,new B.an(A.a_,j,A.aa,A.t,u,j),A.O,k.NS(),A.W,B.E(k.WX(2,21),1)],t),A.aj,j,A.e,A.j,0,A.p)
case 3:h=k.vH(824,!0)
w=k.qF(824,560)
v=B.a([A.K,A.w.j(0.85)],x.O)
u=x.p
return B.x(B.a([h,A.ad,new B.an(A.b6,j,A.aa,A.t,B.a([w,B.ao(0,B.p(j,k.OW(780,A.bi,A.c,3,74,30),A.f,j,j,new B.o(j,j,j,j,j,new B.a9(A.b3,A.b6,A.x,v,j,j),A.n),j,j,j,j,D.bAT,j,j,j),j,j,0,0,j,j)],u),j),k.b7j(824,A.bi),A.O,k.NS(),A.W,B.E(k.a9O(3),1)],u),A.aj,j,A.e,A.j,0,A.p)
case 4:h=x.p
return B.x(B.a([k.adh(824),A.aA,k.aVT(824),k.b7i(824),A.O,k.NS(),A.ad,B.E(k.bak(3,300,B.x(B.a([k.qF(300,300),k.WK(300)],h),A.m,j,A.e,A.j,0,A.p),360),1)],h),A.aj,j,A.e,A.j,0,A.p)
case 5:w=k.vH(824,!0)
v=x.p
u=B.x(B.a([k.ac7(440,A.bi,3,62,26),k.aBw(440,A.bi,2,20),A.b2,k.ary(!1)],v),A.E,j,A.e,A.j,0,A.p)
return B.x(B.a([w,A.bx,new B.a7(j,400,B.B(B.a([new B.a7(440,j,u,j),A.aQD,new B.D(A.hY,k.qF(364,h.e===D.S9?400:330),j)],v),A.E,j,A.e,A.j,0,j,j),j),A.aA,B.E(k.WX(2,21),1)],v),A.aj,j,A.e,A.j,0,A.p)
case 6:return B.x(B.a([k.adh(824),A.ad,k.bZc(824,2,70),k.cyU(824,21),A.O,k.NS(),A.ad,B.E(k.bak(3,340,B.at(k.qF(340,340),j,j,j),350),1)],x.p),A.aj,j,A.e,A.j,0,A.p)
case 7:w=k.vH(824,!0)
v=B.b1(h.x)
u=Date.now()
u=C.bD3(new B.V(u,0,!1))
t=x.p
v=B.a([B.p(j,B.d(u.toUpperCase(),j,j,j,j,j,j,k.Q9(i,13,h.ch?B.b1(h.f):A.c,1.2,A.u),A.L,j,j),A.f,v,j,j,j,j,j,j,A.bf,j,j,j),A.aA],t)
u=A.a.i(k.c.w)
if(u.length!==0)v.push(B.d("\u201c"+u+"\u201d",j,j,j,j,j,j,k.b_k(h.Q,24,1.15,A.cD,A.P),j,j,j))
v.push(A.b2)
if(k.gaAQ())v.push(k.aAP(230,250))
return B.x(B.a([w,A.aA,B.E(B.B(B.a([new B.a7(230,j,B.x(v,A.aj,j,A.e,A.j,0,A.p),j),B.p(j,j,A.f,B.b1(h.w),j,j,j,j,j,A.aji,j,j,j,1.2),new B.a7(570,j,B.x(B.a([k.ac7(570,A.bi,3,62,28),k.cyV(570,A.bi,20),A.O,k.ary(!1),A.O,B.at(k.qF(570,330),j,j,j),k.WK(570),A.W,B.E(k.aQd(2,!1,17),1)],t),A.aj,j,A.e,A.j,0,A.p),j)],t),A.E,j,A.e,A.j,0,j,j),1)],t),A.aj,j,A.e,A.j,0,A.p)
case 8:w=k.vH(824,!0)
v=h.ch
u=v?B.b1(h.x):B.b1(h.w)
t=B.d("\u2605  SPECIAL REPORT  \u2605",j,j,j,j,j,j,k.Q9(i,13,v?A.w:B.b1(h.x),3,A.u),j,j,j)
s=x.p
return B.x(B.a([w,A.ad,B.p(j,B.x(B.a([t,A.am,k.OW(788,A.bi,v?A.w:B.b1(h.f),2,72,30)],s),A.E,j,A.e,A.j,0,A.p),A.f,u,j,j,j,j,j,j,D.bza,j,j,j),k.b7j(824,A.bi),A.W,B.at(k.qF(824,310),j,j,j),k.WK(824),A.O,k.NS(),A.W,B.E(k.a9O(3),1)],s),A.aj,j,A.e,A.j,0,A.p)
case 10:w=x.p
return B.x(B.a([k.vH(824,!0),A.aM,new B.an(A.a_,j,A.aa,A.t,B.a([k.qF(824,430),B.ao(18,k.c9x(k.c.b,17),j,j,18,j,j,j)],w),j),A.bx,k.aA5(824,3,66),k.b7n(824),A.ad,B.p(j,j,A.f,B.b1(h.w).j(0.25),j,j,j,1,j,j,j,j,j,j),A.ad,k.awH(),A.aA,B.E(k.WX(2,18),1)],w),A.aj,j,A.e,A.j,0,A.p)
case 11:h=h.x
w=x.p
return B.x(B.a([k.vH(824,!0),A.bx,new B.a7(j,500,B.B(B.a([new B.a7(410,j,B.x(B.a([k.aeM(k.c.b,B.b1(h).j(0.14),15,B.b1(h)),A.aM,k.b4q(410,4,58,28),k.aBz(410,6,20),A.b2],w),A.E,j,A.e,A.j,0,A.p),j),U.aQE,k.qF(390,500)],w),A.E,j,A.e,A.j,0,j,j),j),A.aA,k.awH(),A.aM,B.E(k.WX(2,18),1)],w),A.aj,j,A.e,A.j,0,A.p)
case 12:w=k.vH(824,!0)
v=k.qF(824,420)
u=B.hEc(-0.25)
t=B.b1(h.x)
s=B.a([new B.ac(0,A.G,A.w.j(0.4),A.J,10)],x.V)
r=x.p
return B.x(B.a([w,A.aM,new B.an(A.a_,j,A.aa,A.t,B.a([v,B.ao(22,B.fv(j,B.p(j,B.d("BREAKING NEWS",j,j,j,j,j,j,k.c9A(i,30,A.c,1,A.cD,A.u),j,j,j),A.f,j,j,new B.o(t,j,j,j,s,j,A.n),j,j,j,j,D.bB8,j,j,j),j,u,!0),j,j,0,j,j,j)],r),j),A.bx,k.aA5(824,3,62),k.b7n(824),A.ad,B.p(j,j,A.f,B.b1(h.w).j(0.25),j,j,j,1,j,j,j,j,j,j),A.ad,k.aXY(A.lE),A.aA,B.E(k.WX(2,18),1)],r),A.aj,j,A.e,A.j,0,A.p)
case 13:w=k.c
q=A.a.i(w.x)
if(!(q.length!==0)){v=A.a.i(w.w)
q=v.length!==0?v:"More from NGMY News"}v=k.vH(824,!0)
u=h.w
t=x.p
w=B.a([k.qF(824,380),B.ao(j,k.aeM(w.b,B.b1(u).j(0.85),15,B.b1(h.f)),j,j,16,j,16,j)],t)
s=k.aA5(824,2,60)
r=k.cz6(824,2)
p=k.awH()
o=B.E(k.aQd(2,!1,18),1)
n=B.J(B.b1(u).j(0.18),A.r,1)
m=B.m(18)
h=h.x
l=B.b1(h).j(0.05)
return B.x(B.a([v,A.aM,new B.an(A.a_,j,A.aa,A.t,w,j),A.aM,s,r,A.W,p,A.aA,o,A.ad,B.p(j,B.B(B.a([B.by(B.m(14),k.tS(150,104),A.aq),A.ox,B.E(B.x(B.a([k.aeM("RELATED",B.b1(h).j(0.14),12,B.b1(h)),A.O,B.d(q,j,2,A.a2,j,j,j,k.axV(i,19,1.15,A.H),j,j,j)],t),A.E,j,A.e,A.Q,0,A.p),1),B.X(A.eE,B.b1(u).j(0.6),j,j,j,30)],t),A.m,j,A.e,A.j,0,j,j),A.f,j,j,new B.o(l,j,n,m,j,j,A.n),j,j,j,j,A.bf,j,j,j)],t),A.aj,j,A.e,A.j,0,A.p)
case 9:return B.x(B.a([k.vH(824,!0),A.bx,k.ac7(824,A.bi,3,62,30),k.aBw(824,A.bi,2,22),A.W,k.ary(!1),A.W,B.at(k.qF(824,330),j,j,j),k.aPb(824,A.bi),A.aM,B.E(k.bI3(2,40,21),1)],x.p),A.aj,j,A.e,A.j,0,A.p)}},
B(d){var w,v,u,t=this,s=null,r="Roboto",q=t.d,p=q.f,o=x.p,n=B.a([B.bT(0,B.c1(s,new B.o(s,s,s,s,s,new B.a9(A.az,A.aE,A.x,B.a([B.b1(p),B.b1(q.r)],x.O),s,s),A.n),A.bg),0,0,0)],o)
if(q.ax)n.push(B.bT(0,B.b4(s,s,s,new C.b9z(B.b1(q.w),s),A.ax),0,0,0))
w=q.w
n.push(new B.D(D.bBF,B.x(B.a([B.E(t.cgv(),1),A.O,B.p(s,s,A.f,B.b1(w),s,s,s,1.4,s,s,s,s,s,s),A.fO,B.B(B.a([B.d("PRINTED WITH NGMY NEWS",s,s,s,s,s,s,t.b_i(r,11,1.4,A.H),s,s,s),B.d("CREATED BY NGMY.ORG",s,s,s,s,s,s,t.Q9(r,11,B.b1(q.x),1.4,A.u),s,s,s)],o),A.m,s,A.iD,A.j,0,s,s)],o),A.aj,s,A.e,A.j,0,A.p),s))
v=B.b1(w)
n.push(B.bT(0,B.e2(B.b4(s,s,s,new C.bs9(v.j(q.ch?0.07:0.06),s),A.ax),!0,s),0,0,0))
p=B.b1(p).j(0.75)
v=B.J(B.b1(w).j(0.5),A.r,1.2)
u=B.m(40)
o=B.a([],o)
q=t.f
if(q!=null)o.push(B.hT(B.fP(q,A.A,s,s,A.cf,A.bV,!1,30,!1,s,30),A.aq))
else o.push(B.X(A.oe,B.b1(w),s,s,s,28))
o.push(A.ac)
o.push(B.d("NGMY.ORG",s,s,s,s,s,s,t.axX(r,15,1,1.6,A.u),s,s,s))
n.push(B.ao(52,B.e2(B.d9(B.p(s,B.B(o,A.m,s,A.e,A.Q,0,s,s),A.f,s,s,new B.o(p,s,v,u,s,s,A.n),s,s,s,s,D.bCL,s,s,s),0.6),!0,s),s,s,s,40,s,s))
return new B.a7(900,1260,B.jF(new B.an(A.a_,s,A.aa,A.t,n,s),A.t,s),s)}}
C.bd3.prototype={
ji(d){return C.hiT(d)},
jX(d){return!1}}
C.bd2.prototype={
a1(d,e){var w,v=C.hiT(e)
$.S()
w=B.I()
w.r=this.b.gp(0)
w.b=A.a9
w.c=6
return d.aG(v,w)},
aw(d){return!d.b.A(0,this.b)}}
C.buF.prototype={
ji(d){var w,v,u,t,s,r,q,p,o=new B.e9()
o.d3(3)
w=$.S()
v=B.a([],x.v)
u=new B.aF(w.r,A.ag,null,null,v)
u.D(new B.aX(0,8))
for(t=d.a,s=0;s<t;s+=14){w=new B.aq(s,o.ah()*14)
v.push(w)
r=u.f
if(r!=null)w.by(r)
w=u.e
if(w!=null)w.a.delete()
u.e=null}u.D(new B.aq(t,8))
w=d.b
r=w-8
u.D(new B.aq(t,r))
for(;t>0;t-=14){q=new B.aq(t,w-o.ah()*14)
v.push(q)
p=u.f
if(p!=null)q.by(p)
q=u.e
if(q!=null)q.a.delete()
u.e=null}u.D(new B.aq(0,r))
u.D(new B.br())
return u},
jX(d){return!1}}
C.b9z.prototype={
a1(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=new B.e9()
k.d3(7)
$.S()
w=B.I()
for(v=this.b,u=e.a,t=e.b,s=d.a,r=0;r<700;++r){w.r=v.j(0.03+k.ah()*0.07).gp(0)
q=k.ah()
p=k.ah()
o=k.ah()
n=w.G()
s.drawCircle(q*u,p*t,0.4+o*1.4,n)
n.delete()}for(v=x.O,r=0;r<5;++r){q=k.ah()*u
p=k.ah()*t
m=50+k.ah()*90
w.sam(new B.c0(A.A,0.5,A.x,l,0,B.a([A.Xd.j(0.13),A.K],v),l,l).aB(0,B.bX(new B.t(q,p),m)))
n=w.G()
s.drawCircle(q,p,m,n)
n.delete()}w.sam(l)},
aw(d){return!1}}
C.bs9.prototype={
a1(d,e){var w,v,u=null,t=e.a,s=B.fu(u,u,u,u,B.cS(u,u,u,u,u,u,u,u,u,B.l(u,u,this.b,u,u,u,u,u,"Roboto",u,u,t*0.34,u,u,A.u,u,u,!0,u,10,u,u,u,u,u,u),"NGMY"),A.a3,A.bZ,u,A.dA,A.bW)
s.ek()
w=d.a
J.bl(w.save())
w.translate(t/2,e.b*0.52)
d.ic(0,-0.5)
t=s.b
v=t.c
t=t.a.c
s.a1(d,new B.t(-v/2,-t.gbb(t)/2))
w.restore()},
aw(d){return!d.b.A(0,this.b)}}
C.W7.prototype={
U(){return new C.aEF()}}
C.aEF.prototype={
a_(){var w=this
w.a2()
B.fxP(w.a.c,null).bM(new C.emm(),x.g7).bM(new C.emn(w),x.a)
w.a.toString},
gaO_(){var w=D.awZ[this.e].b
if(w==null){w=this.d
w=w==null?1:w.c/w.d}return w},
gaxY(){var w,v,u,t,s,r=this,q=r.d,p=q.c,o=q.d
q=r.gaO_()
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
return new B.a3(q,w,q+s,w+t)},
a_k(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f
var $async$a_k=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:g=r.d
if(g==null||r.y){w=1
break}r.m(new C.em9(r))
t=4
q=r.gaxY()
j=q
p=Math.min(1600,j.c-j.a)
j=q
i=q
o=p*(j.d-j.b)/(i.c-i.a)
$.S()
n=new B.oW()
m=B.z4(n,null)
i=B.I()
i.Q=A.h6
m.ox(g,q,new B.a3(0,0,0+p,0+o),i)
w=7
return B.b(n.ne().x7(J.h8i(p),J.h8i(o)),$async$a_k)
case 7:l=e
w=8
return B.b(l.hr(A.h8),$async$a_k)
case 8:k=e
j=r.c
if(j!=null){j=B.a4(j,!1)
i=k
i.toString
j.O(J.eQ(J.vA(i)))}t=2
w=6
break
case 4:t=3
f=s.pop()
if(r.c!=null){r.m(new C.ema(r))
r.c.K(x.q).f.T(D.f8p)}w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a_k,v)},
B(d){var w,v,u,t=this,s=null,r=t.d,q=B.aJ(s,s,s,s,A.lb,s,s,s,new C.emg(d),s,s,s,s,s,s),p=x.p
q=B.eH(B.a([B.bN(!1,D.fMF,s,s,!0,s,s,t.y||r==null?s:t.gc9B(),s,s)],p),s,s,!0,!0,A.Bm,s,1,!0,s,0,!1,s,!1,s,s,q,s,!0,s,s,s,s,s,D.fQG,s,s,s,1,s,!0)
if(r==null)p=A.mq
else{w=B.E(new B.D(A.bR,B.at(new B.fF(t.gaO_(),B.cB(new C.emh(t,r)),s),s,s,s),s),1)
v=B.a([],p)
for(u=0;u<6;++u)v.push(new B.D(A.iy,B.j0(s,s,s,new B.y(D.awZ[u].a,s,E.aSv,s,s,s,s,s,s,s,s,s),s,new C.emi(t,u),t.e===u,s,s,s,s),s))
p=B.x(B.a([w,B.p(s,B.bn(!0,B.x(B.a([new B.a7(s,40,B.ct(v,s,s,s,s,A.aN,!1),s),B.B(B.a([D.bUD,B.E(B.l6(s,s,s,6,1,new C.emj(t),t.f),1),D.bUf],p),A.m,s,A.e,A.j,0,s,s),D.fJZ,A.am,B.bN(!1,D.fJH,s,s,!0,s,s,new C.emk(t,d),s,s)],p),A.m,s,A.e,A.Q,0,A.p),!0,!1,A.af,!0,!1),A.f,D.XZ,s,s,s,s,s,s,D.byw,s,s,s)],p),A.m,s,A.e,A.j,0,A.p)}return B.c6(q,A.Bm,p,s,!1,!1,s,s)}}
C.bcA.prototype={
a1(d,e){var w
$.S()
w=B.I()
w.Q=A.cf
return d.ox(this.b,this.c,new B.a3(0,0,0+e.a,0+e.b),w)},
aw(d){return!d.c.A(0,this.c)||d.b!==this.b}}
C.a0b.prototype={
U(){var w=$.ax(),v=x.A
return new C.aG2(new B.as(A.at,w),new B.as(new B.bb("NGMY",A.b4,A.aO),w),new B.cA(null,v),new B.cA(null,v),A.d.gI(D.a4L),"quote"+1000*Date.now(),B.a([],x.t),B.aY(x.S),A.L)}}
C.oG.prototype={}
C.aG2.prototype={
gaW0(){var w,v,u=this
if(u.p1)w=new B.vQ(1,u.p2,0.9,u.p3).lH().l()&16777215
else{v=u.k4
w=v==null?null:v&16777215}if(w==null)return 0
return(A.o.E(A.k.V(u.ok*255),0,255)<<24|w)>>>0},
a_(){var w=this
w.a2()
w.a.toString
w.p4=null
$.aW.x1$.push(new C.eVk(w))},
q(){var w=this.d,v=$.ax()
w.S$=v
w.P$=0
w=this.e
w.S$=v
w.P$=0
this.a3()},
YW(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$YW=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b($.r4().jK(0,"assets/images/ngmy_logo.png"),$async$YW)
case 7:q=e
p=J.eQ(J.vA(q))
o=r.c
w=o!=null?8:9
break
case 8:w=10
return B.b(F.bDP(new B.pU(p,1),o),$async$YW)
case 10:case 9:if(r.c==null){w=1
break}r.m(new C.eUc(r,p))
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
return B.i($async$YW,v)},
Qc(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Qc=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hV().kZ(92,1800,A.eK),$async$Qc)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fk(),$async$Qc)
case 8:p=e
n=r.c
if(n==null){w=1
break}w=9
return B.b(F.bDP(new B.pU(p,1),n),$async$Qc)
case 9:if(r.c==null){w=1
break}r.m(new C.eUA(r,p))
t=2
w=6
break
case 4:t=3
l=s.pop()
o=B.ab(l)
n=r.c
if(n!=null)n.K(x.q).f.T(B.b3(null,null,null,null,null,A.t,null,B.d("Could not open that picture. "+B.w(o),null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Qc,v)},
b3M(){var w=this
w.RG=w.R8=0
w.ry=w.rx=1
w.xr=w.x2=w.x1=w.to=0
w.y1=!1
w.aC=w.aL=w.aE=w.aA=w.Z=w.b8=w.bj=w.y2=0
w.b1=null
w.b0=0.25
w.be=null
w.bL=0.5
w.aI=1
w.c7=w.bG=w.bi=0
w.cL=w.c5=!1},
aXI(d,e,f,g,h,i,j,a0,a1){var w,v,u,t,s,r,q,p,o,n=1-g,m=n*0.2126,l=n*0.7152,k=n*0.0722
n=x.x
w=C.bAu(B.a([m+g,l,k,0,0,m,l+g,k,0,0,m,l,k+g,0,0,0,0,0,1,0],n),D.dlO)
if(Math.abs(j)>0.5){v=j*3.141592653589793/180
u=Math.cos(v)
t=Math.sin(v)
s=0.715-u*0.715
r=t*0.715
q=0.072-u*0.072
p=0.213-u*0.213
w=C.bAu(B.a([0.213+u*0.787-t*0.213,s-r,q+t*0.928,0,0,p+t*0.143,0.715+u*0.285+t*0.14,q-t*0.283,0,0,p-t*0.787,s+r,0.072+u*0.928+t*0.072,0,0,0,0,0,1,0],n),w)}o=128*(1-f)+d*255
n=h*25
w=C.bAu(C.h38(Math.pow(2,e)*f,o+n,o-i*25,o-n+i*12),w)
if(a0>0){n=a0*255*0.25
w=C.bAu(C.h38(1-a0*0.5,n,n,n),w)}return a1?C.bAu(C.h38(-1,255,255,255),w):w},
aBF(){var w,v,u=B.af("\\S+",!0,!1,!1,!1).l8(0,this.d.a.a),t=B.C(u,B.a6(u).k("K.E"))
for(u=this.db;w=u.length,v=t.length,w<v;)u.push(0)
if(w>v)A.d.zo(u,v,w)
this.dx.pm(new C.eUK(t),!0)
return t},
b6j(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.w
e.aBF()
w=C.ib2(e.d.a.a,e.db)
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
return C.i7u(d,k,v,a0,j,e.gaW0(),e.ax,i,u,q,p,r,t,s,w,g,h,f,n,l,o,m)},
cwM(){return this.b6j(null)},
Dm(){var w=0,v=B.j(x.dd),u,t=this,s,r,q
var $async$Dm=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.p4==null){u=null
w=1
break}w=3
return B.b($.aW.gmF(),$async$Dm)
case 3:w=4
return B.b(B.bP(A.eP,null,x.H),$async$Dm)
case 4:w=5
return B.b($.aW.gmF(),$async$Dm)
case 5:s=$.aW.al$.x.h(0,t.r)
r=s==null?null:s.gbd()
if(!(r instanceof B.q4)){u=null
w=1
break}w=7
return B.b(r.m4(1080/r.gY(0).a),$async$Dm)
case 7:w=6
return B.b(e.hr(A.h8),$async$Dm)
case 6:q=e
u=q==null?null:J.eQ(A.dG.gaR(q))
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$Dm,v)},
aaG(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$aaG=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.Q){w=1
break}q.m(new C.eTW(q))
t=4
w=7
return B.b(q.Dm(),$async$aaG)
case 7:p=e
o=p==null?null:"data:image/png;base64,"+A.cJ.gct().aM(p)
n=C.BV(null,null,null,null,D.or,6,!1,null,null,null,null,null,C.cE(),null,!1,null,"NGMY Quote",null,null,B.a([q.b6j(o)],x.g),"office_blue",null,!1,null)
l=q.c
if(l!=null)B.a4(l,!1).O(n)
r.push(6)
w=5
break
case 4:t=3
j=s.pop()
m=B.ab(j)
l=q.c
if(l!=null)l.K(x.q).f.T(B.b3(null,null,null,null,null,A.t,null,B.d(B.w(m),null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.eTX(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$aaG,v)},
AB(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$AB=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.Q){w=1
break}q.m(new C.eTU(q))
t=4
w=7
return B.b($.aW.gmF(),$async$AB)
case 7:w=8
return B.b(B.bP(A.nk,null,x.H),$async$AB)
case 8:w=9
return B.b($.aW.gmF(),$async$AB)
case 9:k=$.aW.al$.x.h(0,q.f)
p=k==null?null:k.gbd()
if(!(p instanceof B.q4))throw B.W("The picture is not ready yet.")
w=10
return B.b(p.m4(1080/p.gY(0).a),$async$AB)
case 10:o=e
w=11
return B.b(o.hr(A.h8),$async$AB)
case 11:n=e
if(n==null)throw B.W("Could not make the picture.")
w=12
return B.b(A7.agF(J.eQ(A.dG.gaR(n)),"ngmy_quote.png","image/png"),$async$AB)
case 12:m=e
k=q.c
if(k==null){r=[1]
w=5
break}k=k.K(x.q).f
k.T(B.b3(null,null,null,null,null,A.t,null,B.d(m?"Your quote picture is ready. Check your downloads.":"Downloading is not available here. Use Edit in Slides, then PDF.",null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
l=B.ab(i)
k=q.c
if(k!=null)k.K(x.q).f.T(B.b3(null,null,null,null,null,A.t,null,B.d(B.w(l),null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.eTV(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$AB,v)},
cjD(){var w=this.p4
w.toString
return B.cB(new C.eUt(this,w))},
b_r(d,e){var w=null
return B.bv(w,w,w,w,w,D.fj6,w,w,!0,new B.b5(4,B.m(16),P.vt),w,w,w,w,w,D.tF,!0,w,w,w,w,new B.b5(4,B.m(16),D.b1p),w,w,w,w,w,w,w,w,A2.E2,e,w,w,w,w,w,w,w,D.foB,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
y4(d,e){var w=null,v=x.p,u=B.a([],v)
A.d.v(u,B.a([B.X(e,A.b5,w,w,w,15),A.bn],v))
u.push(B.d(d,w,w,w,w,w,w,D.aTk,w,w,w))
return new B.D(I.aj8,B.B(u,A.m,w,A.e,A.j,0,w,w),w)},
b_q(d,e){var w=null,v=B.m(18),u=B.J(A.bz,A.r,1)
return B.p(w,B.aG(!1,A.a1,!0,w,d,A.f,w,0,w,w,w,w,w,A.jU),A.f,w,w,new B.o(D.tF,w,u,v,w,w,A.n),w,w,w,w,e,w,w,1/0)},
vO(d){return this.b_q(d,A.bF)},
oi(d,e,f,g){var w,v,u,t,s,r=null,q=g!=null,p=f?G.ux:r
if(f)w=r
else w=A.c.j(q?0.07:0.03)
v=B.m(30)
u=B.J(f?A.K:A.bz,A.r,1)
t=x.p
s=B.a([],t)
if(e!=null)A.d.v(s,B.a([B.X(e,q?A.c:A.jJ,r,r,r,16),A.bn],t))
s.push(B.d(d,r,r,r,r,r,r,B.l(r,r,q?A.c:A.jJ,r,r,r,r,r,r,r,r,12.5,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r))
return B.aB(r,B.dd(r,B.B(s,A.m,r,A.e,A.Q,0,r,r),r,r,A.b7,new B.o(w,r,u,v,r,p,A.n),A.hp,r,r,r,A.FZ,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,g,r,r,r,r,r,r,!1,A.a5)},
agD(d,e,f){return this.oi(d,null,e,f)},
ay1(d,e,f,g,h,i,j){var w=null,v=B.m(12),u=g?A.b5.j(0.28):A.c.j(0.05),t=g?A.eG:A.bz,s=x.p
v=B.a([B.dd(w,d,w,w,A.b7,new B.o(u,w,B.J(t,A.r,g?2:1),v,w,w,A.n),A.hp,w,e,w,new B.Q(i,i,i,i),w,w,j)],s)
u=g?A.c:A.aB
A.d.v(v,B.a([A.au,B.d(f,w,1,A.a2,w,w,w,B.l(w,w,u,w,w,w,w,w,w,w,w,j<54?8.5:10.5,w,w,A.P,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],s))
return B.aB(w,new B.a7(j,w,B.x(v,A.m,w,A.e,A.Q,0,A.p),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,h,w,w,w,w,w,w,!1,A.a5)},
b_u(d,e,f,g,h,i){return this.ay1(d,e,f,g,h,5,i)},
kp(d,e,f,g,h,i,j){var w,v,u=null,t=x.p,s=B.a([B.E(B.d(d,u,u,u,u,u,u,E.aS7,u,u,u),1)],t)
if(i!=null&&Math.abs(e-i)>0.001)s.push(B.aB(u,D.ejZ,A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.eUG(this,h,i),u,u,u,u,u,u,!1,A.a5))
w=A.c.j(0.08)
v=B.m(20)
s.push(B.p(u,B.d(j,u,u,u,u,u,u,A.aSm,u,u,u),A.f,u,u,new B.o(w,u,u,v,u,u,A.n),u,u,u,u,A.a_w,u,u,u))
s=B.B(s,A.m,u,A.e,A.j,0,u,u)
w=this.c
w.toString
w=B.avL(w).cL9(A.b5,A.bz,A.b5.j(0.2),A.c,D.eZC,4)
return new B.D(A.y3,B.x(B.a([s,B.aah(B.l6(u,u,u,g,f,new C.eUH(this,h),A.k.E(e,f,g)),w)],t),A.m,u,A.e,A.j,0,A.p),u)},
aiD(d,e,f,g,h,i){return this.kp(d,e,f,g,h,null,i)},
aj2(d,e,f){var w,v,u,t,s,r,q,p,o=null,n=B.a([],x.p)
for(w=f.length,v=0;v<f.length;f.length===w||(0,B.M)(f),++v){u=f[v]
t=u==null
s=t?A.dt:B.b1(u)
r=d==u
q=r?A.c:A.aZ
p=new B.ay(q,r?3:1,A.r,-1)
t=t?D.bNA:o
n.push(B.aB(o,B.p(o,t,A.f,o,o,new B.o(s,o,new B.bK(p,p,p,p),o,o,o,A.a6),o,34,o,o,o,o,o,34),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new C.eUJ(this,e,u),o,o,o,o,o,o,!1,A.a5))}return B.bW(A.bE,n,A.bq,o,10,10)},
bMa(){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.x==="All")w=D.a4L
else{v=x.a8
w=B.C(new B.Z(D.a4L,new C.eTM(o),v),v.k("K.E"))}v=B.aN(n,A.Z,!1,n,!0,A.t,n,B.aO(),o.d,n,n,n,n,n,2,o.b_r("Your quote",o.w.y),A.y,!0,n,!0,n,!1,n,A.ak,n,n,n,n,n,n,n,280,n,4,2,n,!1,"\u2022",n,new C.eTN(o),n,n,n,!1,n,n,!1,n,!0,n,A.ab,n,n,n,n,n,n,n,n,n,n,n,A.a9C,!0,A.a3,n,A.ao,n,n,n,n)
u=B.aN(n,A.Z,!1,n,!0,A.t,n,B.aO(),o.e,n,n,n,n,n,2,o.b_r("Who said it","NGMY"),A.y,!0,n,!0,n,!1,n,A.ak,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,new C.eTO(o),n,n,n,!1,n,n,!1,n,!0,n,A.ab,n,n,n,n,n,n,n,n,n,n,n,A.df,!0,A.a3,n,A.ao,n,n,n,n)
t=o.y4("DESIGNS",A.ue)
s=x.p
r=B.a([],s)
for(q=0;q<6;++q){p=D.cWC[q]
r.push(new B.D(A.iy,o.agD(p,o.x===p,new C.eTP(o,p)),n))}return B.x(B.a([v,A.W,u,t,B.cd(B.B(r,A.m,n,A.e,A.j,0,n,n),A.t,n,A.y,n,n,n,n,A.aN),A.ad,new B.a7(n,118,B.hO(n,new C.eTQ(o,w),w.length,n,n,A.aN,new C.eTR(),!1),n),A.O,o.b_q(B.x(B.a([B.iI(A.b5,n,n,A.af,!0,new C.eTS(o),n,D.fAW,n,D.fx9,o.k3),B.iI(A.b5,n,n,A.af,!0,new C.eTT(o),n,n,n,D.fup,o.k2)],s),A.m,n,A.e,A.j,0,A.p),A.ajL)],s),A.E,n,A.e,A.j,0,A.p)},
cFr(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=null,a7=a5.aBF()
if(a7.length===0)return a5.vO(B.d("Type your quote on the Design tab. Every word will show up here so you can make it bigger, normal or smaller.",a6,a6,a6,a6,a6,a6,D.JX,a6,a6,a6))
w=a5.d.a.a
v=B.a([],x.t)
for(u=a7.length,t=0,s=0;s<a7.length;a7.length===u||(0,B.M)(a7),++s){r=a7[s]
v.push(t)
q=B.af('[.!?]["\u201d\u2019)]*$',!0,!1,!1,!1)
p=r.b
o=p.index
p=A.a.aq(w,o,o+p[0].length)
if(q.b.test(p))++t}n=v.length===0?0:A.d.gak(v)+1
u=a5.dx
m=B.C(u,B.a6(u).k("cr.E"))
A.d.fd(m)
l=m.length!==0&&A.d.d5(m,new C.eV9(a5,m))?a5.db[A.d.gI(m)]:a6
k=new C.eVg(a5)
j=new C.eVi()
q=B.d("Tap the words you want to change, then choose a size. One sentence can have big, normal and small words.",a6,a6,a6,a6,a6,a6,D.JX,a6,a6,a6)
p=x.p
o=B.a([],p)
for(i=a5.db,h=0;h<a7.length;++h){g=new B.aQ(11,11)
f=u.t(0,h)?A.b5.j(0.38):A.c.j(0.06)
e=u.t(0,h)?A.eG:A.bz
d=new B.ay(e,u.t(0,h)?2:1,A.r,-1)
e=a7[h].b
a0=e.index
e=A.a.aq(w,a0,a0+e[0].length)
a0=B.af("[*~^]",!0,!1,!1,!1)
e=B.aL(e,a0,"")
a0=j.$1(i[h])
a1=i[h]>0?A.u:A.a7
o.push(B.aB(a6,B.p(a6,new B.y(e,a6,new B.F(!0,A.c,a6,a6,a6,a6,a0,a1,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),a6,a6,a6,a6,a6,a6,a6,a6,a6),A.f,a6,a6,new B.o(f,a6,new B.bK(d,d,d,d),new B.bk(g,g,g,g),a6,a6,A.n),a6,a6,a6,a6,A.Nt,a6,a6,a6),A.y,!1,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,new C.eVa(a5,h),a6,a6,a6,a6,a6,a6,!1,A.a5))}o=a5.vO(B.bW(A.bE,o,A.vm,a6,6,6))
i=B.a([a5.oi("All words",L.ao1,!1,new C.eVb(a5,a7))],p)
if(n>1){a2=0
for(;;){if(!(a2<n&&a2<8))break
a3=a2+1
i.push(a5.agD("Sentence "+a3,!1,new C.eVc(a5,a7,v,a2)))
a2=a3}}i.push(a5.agD("Clear picks",!1,new C.eVd(a5)))
i=B.bW(A.bE,i,A.bq,a6,8,8)
g=a5.y4("SIZE OF THE PICKED WORDS",D.ant)
f=B.a([],p)
for(s=0;s<4;++s){e={}
a0=D.drQ[s]
a1=e.a=null
a4=a0.a
e.a=a4
e=u.a===0?a1:new C.eVe(e,k)
f.push(a5.agD(a0.b,l===a4,e))}return B.x(B.a([q,A.W,o,A.W,i,g,B.bW(A.bE,f,A.bq,a6,8,8),A.W,a5.oi("Make every word normal",A.l8,!1,new C.eVf(a5))],p),A.E,a6,A.e,A.j,0,A.p)},
cAA(){var w,v,u,t,s,r,q=this,p=null,o=x.p,n=B.B(B.a([D.bDX,B.d(A.d.h_(D.ayJ,new C.eUT(q)).b,p,p,p,p,p,p,D.fhv,p,p,p)],o),A.m,p,A.e,A.j,0,p,p),m=B.cB(new C.eUU(q)),l=q.y4("HIGHLIGHT BEHIND THE WORDS",A.a1s),k=q.p1?-1:q.k4
k=q.aj2(k,new C.eUV(q),D.d6D)
w=q.p1
v=w?A.c:A.aZ
n=B.a([n,A.W,m,l,B.bW(A.bE,B.a([k,B.aB(p,B.p(p,D.bQB,A.f,p,p,new B.o(p,p,B.J(v,A.r,w?3:1),p,p,D.fb1,A.a6),p,34,p,p,p,p,p,34),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.eUY(q),p,p,p,p,p,p,!1,A.a5)],o),A.vm,p,10,10),A.am,B.d("Add a coloured band behind the words, with any word design. The first circle turns it off.",p,p,p,p,p,p,D.JX,p,p,p)],o)
if(q.gaW0()!==0){m=B.a([],o)
if(q.p1){l=q.p2
l=q.aiD("Colour",l,0,360,new C.eUZ(q),""+A.k.V(l)+"\xb0")
k=q.p3
A.d.v(m,B.a([l,q.aiD("Shade",k,0.15,0.9,new C.eV_(q),""+A.k.V(k*100))],o))}l=q.ok
m.push(q.kp("Strength",l,0.15,1,new C.eV0(q),1,""+A.k.V(l*100)+"%"))
A.d.v(n,B.a([A.W,q.vO(B.x(m,A.m,p,A.e,A.j,0,A.p))],o))}n.push(q.y4("LOOK",A.yV))
m=B.a([q.oi("Bold",K.anr,q.fy,new C.eV1(q)),q.oi("Italic",K.ans,q.go,new C.eV2(q))],o)
for(u=0;u<3;++u){l={}
k=D.cXP[u]
l.a=null
t=k.a
l.a=t
w=q.id===t
v=w?G.ux:p
w=w?p:A.c.j(0.07)
s=new B.aQ(14,14)
r=new B.ay(q.id===l.a?A.K:A.bz,1,A.r,-1)
m.push(B.aB(p,B.p(p,B.X(k.b,A.c,p,p,p,20),A.f,p,p,new B.o(w,p,new B.bK(r,r,r,r),new B.bk(s,s,s,s),p,v,A.n),p,38,p,p,p,p,p,42),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.eV3(l,q),p,p,p,p,p,p,!1,A.a5))}n.push(B.bW(A.bE,m,A.vm,p,8,8))
n.push(q.y4("COLOUR",A.nr))
n.push(q.aj2(q.fx,new C.eV4(q),D.dif))
n.push(A.am)
n.push(B.d("The first circle keeps the colour that comes with the design.",p,p,p,p,p,p,D.JX,p,p,p))
n.push(q.y4("SIZE AND PLACE",A.GW))
m=q.fr
m=q.kp("Text size",m,0.5,1.6,new C.eUW(q),1,""+A.k.V(m*100)+"%")
l=q.k1
n.push(q.vO(B.x(B.a([m,q.kp("Up / down",l,0.12,0.5,new C.eUX(q),0.3,""+A.k.V(l*100))],o),A.m,p,A.e,A.j,0,A.p)))
return B.x(n,A.E,p,A.e,A.j,0,A.p)},
cjE(){var w,v,u,t,s,r,q=this,p=null,o=q.p4
if(o==null){w=B.m(22)
v=B.J(A.b5.j(0.6),A.r,1.6)
u=B.a([A.b5.j(0.18),A.bC.j(0.12)],x.O)
return B.aB(p,B.p(p,B.x(B.a([B.p(p,D.bW5,A.f,p,p,D.b4n,p,62,p,p,p,p,p,62),A.aA,D.fyo,A.am,D.fD9],x.p),A.m,p,A.e,A.j,0,A.p),A.f,p,p,new B.o(D.tF,p,v,w,p,new B.a9(A.a4,A.a8,A.x,u,p,p),A.n),p,p,p,p,D.bzK,p,p,1/0),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,q.gb_t(),p,p,p,p,p,p,!1,A.a5)}w=x.p
v=B.B(B.a([B.by(B.m(12),new B.a7(46,62,B.fP(o,A.A,120,p,A.cf,A.bV,!1,p,!1,p,p),p),A.aq),A.bc,B.E(B.x(B.a([D.fxV,A.O,B.bW(A.bE,B.a([q.oi("Change",A.kh,!1,q.gb_t()),q.oi("Remove",A.ed,!1,new C.eUx(q))],w),A.bq,p,6,6)],w),A.E,p,A.e,A.j,0,A.p),1)],w),A.m,p,A.e,A.j,0,p,p)
u=B.a([],w)
for(t=0;t<5;++t){s=D.dev[t]
u.push(q.oi(s.b,s.a,q.at===t,new C.eUy(q,t)))}u=B.bW(A.bE,u,A.bq,p,8,8)
r=q.at
A:{if(0===r){s=q.c2a(o)
break A}if(1===r){s=q.c17()
break A}if(2===r){s=q.bI2()
break A}if(3===r){s=q.bOq()
break A}s=q.bK7()
break A}return B.x(B.a([v,A.ad,u,A.aA,s,A.W,new B.bM(A.a4,p,p,q.oi("Reset the whole picture",A.l8,!1,new C.eUz(q)),p)],w),A.E,p,A.e,A.j,0,A.p)},
c2a(d){var w=this,v=x.p
return B.x(B.a([B.bW(A.bE,B.a([w.oi("Auto enhance",E.a13,!1,new C.eUp(w)),w.oi("Make words easy to read",A.pa,!1,new C.eUq(w))],v),A.bq,null,8,8),A.aA,B.cB(new C.eUr(w,d))],v),A.E,null,A.e,A.j,0,A.p)},
c17(){var w,v,u,t,s,r,q,p,o=this,n=o.R8
n=o.kp("Exposure",n,-1.5,1.5,new C.eU3(o),0,A.k.ac(n,1))
w=o.RG
w=o.kp("Brightness",w,-0.5,0.5,new C.eU4(o),0,""+A.k.V(w*100))
v=o.rx
v=o.kp("Contrast",v,0.4,2,new C.eU5(o),1,""+A.k.V(v*100))
u=o.xr
u=o.kp("Fade",u,0,1,new C.eU6(o),0,""+A.k.V(u*100))
t=o.aE
t=o.kp("Spotlight",t,0,1,new C.eU7(o),0,""+A.k.V(t*100))
s=o.Z
s=o.kp("Darken",s,0,0.85,new C.eU8(o),0,""+A.k.V(s*100))
r=o.b8
r=o.kp("Vignette",r,0,0.9,new C.eU9(o),0,""+A.k.V(r*100))
q=o.aC
q=o.kp("Shade behind words",q,0,0.85,new C.eUa(o),0,""+A.k.V(q*100))
p=o.aL
return o.vO(B.x(B.a([n,w,v,u,t,s,r,q,o.kp("Shade top & bottom",p,0,0.85,new C.eUb(o),0,""+A.k.V(p*100))],x.p),A.m,null,A.e,A.j,0,A.p))},
bI2(){var w,v,u,t,s=this,r=null,q=s.ry
q=s.kp("Colour strength",q,0,2.2,new C.eTp(s),1,""+A.k.V(q*100))
w=s.to
w=s.kp("Warmth",w,-1,1,new C.eTq(s),0,""+A.k.V(w*100))
v=s.x1
v=s.kp("Tint",v,-1,1,new C.eTr(s),0,""+A.k.V(v*100))
u=s.x2
t=x.p
u=s.vO(B.x(B.a([q,w,v,s.kp("Shift colours",u,-180,180,new C.eTs(s),0,""+A.k.V(u)+"\xb0"),new B.bM(A.a4,r,r,s.oi("Negative",D.bLF,s.y1,new C.eTt(s)),r)],t),A.m,r,A.e,A.j,0,A.p))
v=s.y4("COLOUR WASH",A.Op)
w=s.b1
q=B.a([null],x.Z)
A.d.v(q,D.axn)
t=B.a([u,v,s.aj2(w,new C.eTu(s),q),A.O],t)
if(s.b1!=null){q=s.b0
t.push(s.vO(s.aiD("Wash strength",q,0,0.9,new C.eTv(s),""+A.k.V(q*100))))}return B.x(t,A.E,r,A.e,A.j,0,A.p)},
bOq(){var w,v,u,t,s,r=this,q=r.y2
q=r.kp("Blur",q,0,24,new C.eTY(r),0,A.o.u(A.k.V(q)))
w=r.bj
w=r.kp("Soft focus",w,0,1,new C.eTZ(r),0,""+A.k.V(w*100))
v=r.aA
u=x.p
v=r.vO(B.x(B.a([q,w,r.kp("Film grain",v,0,1,new C.eU_(r),0,""+A.k.V(v*100))],u),A.m,null,A.e,A.j,0,A.p))
w=r.y4("LIGHT LEAK",D.bLo)
q=r.be
t=B.a([null],x.Z)
s=x.S
A.d.v(t,B.d1(D.axn,0,B.dB(8,"count",s),s))
u=B.a([v,w,r.aj2(q,new C.eU0(r),t),A.O],u)
if(r.be!=null){q=r.bL
u.push(r.vO(r.aiD("Leak strength",q,0,1,new C.eU1(r),""+A.k.V(q*100))))}return B.x(u,A.E,null,A.e,A.j,0,A.p)},
bK7(){var w,v,u,t,s=this,r=s.aI
r=s.kp("Zoom",r,1,3,new C.eTz(s),1,""+A.k.V(r*100)+"%")
w=s.bi
w=s.kp("Left / right",w,-1,1,new C.eTA(s),0,""+A.k.V(w*100))
v=s.bG
v=s.kp("Up / down",v,-1,1,new C.eTB(s),0,""+A.k.V(v*100))
u=s.c7
t=x.p
return B.x(B.a([s.vO(B.x(B.a([r,w,v,s.kp("Turn",u,-180,180,new C.eTC(s),0,""+A.k.V(u)+"\xb0")],t),A.m,null,A.e,A.j,0,A.p)),A.W,B.bW(A.bE,B.a([s.oi("Turn 90\xb0",I.aoy,!1,new C.eTD(s)),s.oi("Flip sideways",A.GJ,s.c5,new C.eTE(s)),s.oi("Flip upside down",A.GJ,s.cL,new C.eTF(s))],t),A.bq,null,8,8)],t),A.E,null,A.e,A.j,0,A.p)},
c4S(){var w=null,v=B.m(22),u=B.J(A.bz,A.r,1)
return B.p(w,B.x(B.a([D.eZO,A.W,D.fzX,A.aA,B.aB(w,B.p(A.A,D.f_0,A.f,w,w,new B.o(w,w,w,B.m(16),w,G.ux,A.n),w,52,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eUs(this),w,w,w,w,w,w,!1,A.a5)],x.p),A.E,w,A.e,A.j,0,A.p),A.f,w,w,new B.o(D.tF,w,u,v,w,w,A.n),w,w,w,w,A.bR,w,w,w)},
c1Y(){var w,v,u,t,s,r,q,p=this,o=null,n=new C.eUk(p),m=x.p,l=B.B(B.a([D.bE2,p.oi("Reset",A.l8,!1,new C.eUg(p))],m),A.m,o,A.e,A.j,0,o,o),k=B.d("Drag it on the quote to move it. It stays on every quote.",o,o,o,o,o,o,D.JX,o,o,o),j=p.y4("SHAPE",A.aou),i=B.a([],m)
for(w=0;w<7;++w){v={}
u=D.CF[w]
v.a=null
t=v.a=u.a
if(t.length!==0){s=p.cx
i.push(p.b_u(n.$2(t,p.cy),62,u.b,s===t,new C.eUh(v,p),62))}}i=B.bW(A.bE,i,A.bq,o,8,8)
v=p.y4("RING",A.ro)
u=B.a([],m)
for(w=0;w<11;++w){s={}
r=D.CA[w]
s.a=null
t=s.a=r.a
q=p.cy
u.push(p.b_u(n.$2(p.cx,t),62,r.b,q===t,new C.eUi(s,p),62))}u=B.bW(A.bE,u,A.bq,o,8,8)
s=p.CW
return B.x(B.a([l,A.au,k,j,i,v,u,A.ad,p.vO(p.kp("Size",s,0.12,0.4,new C.eUj(p),0.22,""+A.k.V(s*100)))],m),A.E,o,A.e,A.j,0,A.p)},
b2o(d){return new B.a7(null,d,new B.fF(0.5625,B.cB(new C.eUD(this)),null),null)},
czR(){var w,v,u,t,s,r,q=null,p=A.c.j(0.05),o=B.m(18),n=B.J(A.bz,A.r,1),m=x.p,l=B.a([],m)
for(w=0;w<6;++w){v=this.as===w
u=v?G.ux:q
t=new B.aQ(14,14)
s=D.dgE[w]
r=v?A.c:A.aB
r=B.X(s.a,r,q,q,q,19)
v=v?A.c:A.aB
l.push(new B.bA(1,A.bd,B.aB(A.ca,B.dd(q,B.x(B.a([r,A.cL,new B.qv(A.e2,A.A,A.f,new B.y(s.b,q,new B.F(!0,v,q,q,q,q,10.5,A.H,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q),q,q,q,q,q,q,q,q,q),q)],m),A.m,q,A.e,A.Q,0,A.p),q,q,A.b7,new B.o(q,q,q,new B.bk(t,t,t,t),q,u,A.n),D.bvm,q,q,q,A.hH,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.eUM(this,w),q,q,q,q,q,q,!1,A.a5),q))}return B.p(q,B.B(l,A.m,q,A.e,A.j,0,q,q),A.f,q,q,new B.o(p,q,n,o,q,q,A.n),q,q,q,D.bxs,A.m3,q,q,q)},
aQK(){var w,v,u=this,t=null,s=u.czR(),r=u.as
A:{if(0===r){w=u.bMa()
break A}if(1===r){w=u.cFr()
break A}if(2===r){w=u.cAA()
break A}if(3===r){w=u.cjE()
break A}if(4===r){w=u.c1Y()
break A}w=u.c4S()
break A}v=x.p
return B.by(A.tk,B.en(B.x(B.a([s,B.E(B.ct(B.a([w],v),t,D.byx,t,t,A.ah,!1),1)],v),A.m,t,A.e,A.j,0,A.p),D.XZ,!0),A.aq)},
aMW(){var w,v,u,t,s=this,r=null,q=s.Q?r:s.gca1(),p=B.m(16)
q=B.E(B.aB(r,B.p(r,D.f_b,A.f,r,r,new B.o(A.c.j(0.08),r,B.J(A.aZ,A.r,1),p,r,r,A.n),r,50,r,r,r,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,!1,A.a5),1)
p=s.Q?r:s.gbNZ()
w=B.m(16)
v=B.a([new B.ac(0,A.G,A.bC.j(0.35),A.cv,16)],x.V)
u=x.p
t=B.a([],u)
if(s.Q)t.push(D.f4D)
else t.push(D.bPG)
t.push(A.ac)
t.push(D.bGb)
return B.p(r,B.B(B.a([q,A.as,B.E(B.aB(r,B.p(r,B.B(t,A.m,r,A.b8,A.j,0,r,r),A.f,r,r,new B.o(r,r,r,w,v,G.ux,A.n),r,50,r,r,r,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,p,r,r,r,r,r,r,!1,A.a5),1)],u),A.m,r,A.e,A.j,0,r,r),A.f,r,r,D.b3u,r,r,r,r,G.ajA,r,r,r)},
b_s(){var w=null
return new B.D(T.a_r,B.B(B.a([B.aJ(w,w,w,w,A.mM,w,w,w,new C.eU2(this),w,w,w,w,w,w),D.fPA,A.b2,D.bYo],x.p),A.m,w,A.e,A.j,0,w,w),w)},
B(d){var w=null
return B.c6(w,A.Bm,B.bn(!0,B.cB(new C.eVj(this)),!0,!1,A.af,!0,!0),w,!1,!1,w,w)}}
C.bga.prototype={
a1(d,e){var w,v,u,t,s,r,q,p,o,n,m=new B.e9()
m.d3(7)
w=e.a
v=e.b
u=A.k.V(w*v/55)
$.S()
t=B.I()
s=this.b
t.r=A.c.j(0.16*s).gp(0)
r=B.I()
r.r=A.w.j(0.2*s).gp(0)
for(s=d.a,q=0;q<u;++q){p=m.ah()*w
o=m.ah()*v
n=((q&1)===0?t:r).G()
s.drawRect(B.bF(new B.a3(p,o,p+1.1,o+1.1)),n)
n.delete()}},
aw(d){return d.b!==this.b}}
C.rE.prototype={
a5(){return"NgmyQuoteDeco."+this.b}}
C.mf.prototype={}
C.zO.prototype={
ag(){var w=this
return B.G(["at",w.a.a7().ae(),"outline",w.b,"extras",w.c,"request",w.d],x.N,x.z)}}
C.nT.prototype={}
C.w8.prototype={
a5(){return"NgmySlidesAiExtra."+this.b}}
C.a8f.prototype={}
C.arE.prototype={}
C.a0I.prototype={
U(){return new C.aHZ(new B.as(A.at,$.ax()),B.k1(!0,null,!0,!0,null,null,!1),D.dHY,B.a([],x.s),B.eC([D.ID],x.Q))}}
C.aHZ.prototype={
q(){var w=this.d
w.S$=$.ax()
w.P$=0
this.f.q()
this.a3()},
a0F(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$a0F=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hV().Ce(90,700,700,A.eK),$async$a0F)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fk(),$async$a0F)
case 8:p=e
if(r.c!=null)r.m(new C.f0E(r,p,q))
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
return B.i($async$a0F,v)},
a0I(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a0I=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i=20-r.y.length
if(i<=0){w=1
break}t=4
n=i>1?i:null
w=7
return B.b(new B.hV().aI5(78,n,1100,1100),$async$a0I)
case 7:q=e
if(J.cq(q)){w=1
break}p=B.bq(r.y,!0,x.N)
n=J.aV(q)
case 8:if(!n.C()){w=9
break}o=n.gR(n)
if(J.ad(p)>=20){w=9
break}w=10
return B.b(o.fk(),$async$a0I)
case 10:m=e
l=o.b.toLowerCase()
if(A.a.cc(l,".png"))k="image/png"
else k=A.a.cc(l,".webp")?"image/webp":"image/jpeg"
J.cb(p,"data:"+k+";base64,"+A.cJ.gct().aM(m))
w=8
break
case 9:if(r.c!=null)r.m(new C.f0F(r,p))
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
return B.i($async$a0I,v)},
b4p(d){var w,v,u=null
if(d!=null&&A.a.t(d,","))try{w=B.fP(A.cF.aM(A.d.gak(d.split(","))),A.A,u,u,A.cf,A.bV,!0,u,!1,u,u)
return w}catch(v){}return D.btw},
c24(d,e,f,g){var w=e.length===0&&f.length===0?"rounded":e
return B.cuN(C.fEF(w,this.b4p(d),f),g)},
ad0(d,e,f,g,h){var w=null,v=new C.f0C(f,e),u=new C.f0D(f,e),t=A.c.j(0.05),s=B.m(12),r=B.m(12),q=B.m(12),p=h==null,o=B.J(p?A.bz:A.b5.j(0.6),A.r,1)
if(p)p=new B.a7(34,30,new B.an(A.a_,w,A.aa,A.f,B.a([B.at(B.X(f?A.Cf:A.Of,A.bY,w,w,w,26),w,w,w),D.epL],x.p),w),w)
else p=this.c24(g,v.$1(h),u.$1(h),34)
return B.aG(!1,A.a1,!0,s,B.aM(!1,r,!0,B.p(w,B.B(B.a([B.E(B.at(p,w,w,w),1),D.bPn],x.p),A.m,w,A.e,A.j,0,w,w),A.f,w,w,new B.o(w,w,o,q,w,w,A.n),w,44,w,w,A.mF,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.f0B(this,f,h,g,v,u,d),w,w,w,w,w,w,w),A.f,t,0,w,w,w,w,w,A.ai)},
aXO(d,e,f,g,h){var w,v,u,t,s,r,q,p=null,o=null,n=h==null
if(!n&&A.a.t(h,","))try{o=B.by(B.m(8),B.fP(A.cF.aM(A.d.gak(h.split(","))),A.A,p,p,A.cf,A.bV,!1,30,!1,p,30),A.aq)}catch(w){}v=A.c.j(0.05)
u=B.m(14)
t=B.m(14)
s=B.m(14)
r=B.J(n?A.bz:A.be.j(0.6),A.r,1)
q=o
n=q==null?B.X(d,A.eq,p,p,p,20):q
n=B.a([n,A.ac,B.E(B.d(e,p,1,A.a2,p,p,p,A.K3,p,p,p),1)],x.p)
if(f!=null)n.push(B.aB(p,D.a2o,A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,!1,A.a5))
return B.aG(!1,A.a1,!0,u,B.aM(!1,t,!0,B.p(p,B.B(n,A.m,p,A.e,A.j,0,p,p),A.f,p,p,new B.o(p,p,r,s,p,p,A.n),p,50,p,p,A.l1,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,g,p,p,p,p,p,p,p),A.f,v,0,p,p,p,p,p,A.ai)},
a98(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$a98=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(C.fI6(),$async$a98)
case 7:q=e
if(q==null||r.c==null){w=1
break}r.m(new C.f0k(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
p=B.ab(n)
if(r.c!=null)r.m(new C.f0l(r,p))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a98,v)},
aeW(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$aeW=B.e(function(d,a0){if(d===1){s.push(a0)
w=t}for(;;)switch(w){case 0:f=A.a.i(r.d.a.a)
if(f.length<6&&r.e==null){r.m(new C.f0n(r))
w=1
break}if(r.x==null){m=B.af("\\blogo\\b",!1,!1,!1,!1)
m=m.b.test(f)}else m=!1
if(m){r.m(new C.f0o(r))
w=1
break}m=r.e
l=m==null?null:m.c
if(l==null)l=""
q=l.length===0?f:f+"\n\nSOURCE DOCUMENT ("+m.a+"):\n"+l
r.m(new C.f0p(r))
t=4
m=r.ch
k=r.CW
j=r.x
i=r.y
p=B.a([],x.aD)
h=r.e
if((h==null?null:h.b)!=null){h=h.b
h.toString
J.cb(p,h)}w=7
return B.b(C.fDn(q,r.cx,j,new C.b1O(r.z,r.Q,r.as,r.at),new C.f0q(r),i,m,p,k),$async$aeW)
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
if(p!=null)B.a4(p,!1).O(o)
t=2
w=6
break
case 4:t=3
e=s.pop()
n=B.ab(e)
if(r.c!=null)r.m(new C.f0r(r,n))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$aeW,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=x.w,f=B.aI(d,A.eM,g).w
g=B.aI(d,A.bX,g).w
w=B.at(B.p(h,h,A.f,h,h,new B.o(A.aZ,h,h,B.m(99),h,h,A.n),h,4,h,h,h,h,h,40),h,h,h)
v=x.V
u=B.at(B.aB(h,B.p(h,D.bSD,A.f,h,h,new B.o(h,h,B.J(A.c.j(0.35),A.r,2),h,B.a([new B.ac(2,A.G,A.be.j(0.5),A.J,24)],v),D.c1v,A.a6),h,84,h,h,h,h,h,84),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.f0S(i),h,h,h,h,h,h,!1,A.a5),h,h,h)
t=x.p
s=B.a([],t)
if(i.e!=null)s.push(B.aJ(h,h,h,h,D.a2o,h,h,h,i.ax?h:new C.f0T(i),h,h,h,h,"Remove document",h))
r=i.e
r=r==null?"Attach a PDF, Word or text file":r.a
q=i.ax?h:i.gbCZ()
v=B.a([new B.ac(0,A.G,A.b5.j(0.45),A.J,10)],v)
s.push(B.hc(B.aG(!1,A.a1,!0,h,B.aM(!1,h,!0,B.p(h,B.X(i.e==null?A.wb:A.ht,A.c,h,h,h,20),A.f,h,h,new B.o(h,h,h,h,v,E.wq,A.a6),h,40,h,h,h,h,h,40),A.cM,!0,h,h,h,h,h,h,h,h,h,h,h,q,h,h,h,h,h,h,h),A.f,A.K,0,h,h,A.cM,h,h,A.ai),h,r,h,h))
v=B.B(s,A.m,h,A.e,A.Q,0,h,h)
s=A.c.j(0.05)
v=B.aN(h,A.Z,!1,h,!0,A.t,h,B.aO(),i.d,h,h,h,h,h,2,B.bv(h,h,h,h,h,h,h,h,!0,new B.b5(4,B.m(16),new B.ay(A.c.j(0.1),1,A.r,-1)),h,h,h,h,h,s,!0,h,h,h,h,new B.b5(4,B.m(16),D.b0X),h,h,h,h,h,h,h,h,A1.JJ,"Type your idea here\u2026",h,h,h,h,h,h,h,h,h,!0,!0,!1,h,h,h,h,h,h,h,h,new B.D(A.iy,v,h),h,h,h,h,h),A.y,!0,h,!0,h,!1,i.f,A.ak,h,h,h,h,h,h,h,h,h,6,3,h,!1,"\u2022",h,h,h,h,h,!1,h,h,!1,h,!0,h,A.ab,h,h,h,h,h,h,h,h,h,h,h,D.aSL,!0,A.a3,h,A.ao,h,h,h,h)
s=i.x
r=s==null
q=r?"Add your logo":"Logo added"
r=r?h:new C.f0U(i)
s=i.aXO(A.lF,q,r,i.gck5(),s)
r=i.z
r=B.E(i.ad0(new C.f0W(i),i.Q,!1,i.x,r),1)
q=i.Q
q=B.E(B.x(B.a([s,A.am,B.B(B.a([r,A.bn,B.E(i.ad0(new C.f0X(i),i.z,!0,i.x,q),1)],t),A.m,h,A.e,A.j,0,h,h)],t),A.m,h,A.e,A.j,0,A.p),1)
s=i.y
r=s.length
p=r===0
if(p)r="Add your pictures"
else{o=r===1?"":"s"
o=""+r+" picture"+o
r=o}s=p?h:A.d.gI(s)
p=i.y.length===0?h:new C.f0Y(i)
s=i.aXO(A.u9,r,p,i.gckd(),s)
p=i.as
r=i.at
o=i.y
o=o.length===0?h:A.d.gI(o)
p=B.E(i.ad0(new C.f0Z(i),r,!1,o,p),1)
o=i.at
r=i.as
n=i.y
n=n.length===0?h:A.d.gI(n)
o=B.a([w,A.aA,D.fEq,A.au,D.fHh,A.bx,u,A.O,D.fFH,A.aA,v,A.bx,B.B(B.a([q,A.as,B.E(B.x(B.a([s,A.am,B.B(B.a([p,A.bn,B.E(i.ad0(new C.f1_(i),r,!0,n,o),1)],t),A.m,h,A.e,A.j,0,h,h)],t),A.m,h,A.e,A.j,0,A.p),1)],t),A.E,h,A.e,A.j,0,h,h),A.am,D.fJ7],t)
w=i.w.a
if(w.length!==0){v=B.m(999)
u=B.J(D.ble,A.r,1)
w=C.ahc(w)
w=w==null?h:w.b
A.d.v(o,B.a([A.W,new B.bM(A.a4,h,h,B.p(h,B.B(B.a([D.bTJ,A.bn,B.d("Ending: "+(w==null?"":w),h,h,h,h,h,h,D.fnd,h,h,h),B.aM(!1,h,!0,D.eke,h,!0,h,h,h,h,h,h,h,h,h,h,h,new C.f10(i),h,h,h,h,h,h,h)],t),A.m,h,A.e,A.Q,0,h,h),A.f,h,h,new B.o(D.bdn,h,u,v,h,h,A.n),h,h,h,h,D.bx8,h,h,h),h)],t))}o.push(A.bx)
o.push(D.fv7)
o.push(A.O)
w=B.a([],t)
for(m=0;m<6;++m){l=D.d8N[m]
v=i.ch===l?A.b5:A.c.j(0.06)
u=i.ch===l
k=new B.ay(u?A.aB:A.bz,1,A.r,-1)
u=u?A.u:A.P
w.push(new B.bA(1,A.bd,new B.D(A.jx,B.aB(h,B.dd(A.A,new B.y(""+l,h,new B.F(!0,A.c,h,h,h,h,h,u,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h),h,h,h,h,h,h,h,h,h),h,h,A.b7,new B.o(v,h,new B.bK(k,k,k,k),h,h,h,A.a6),A.eN,h,42,h,h,h,h,h),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.f11(i,l),h,h,h,h,h,h,!1,A.a5),h),h))}o.push(B.B(w,A.m,h,A.e,A.j,0,h,h))
o.push(A.bx)
o.push(D.fNP)
o.push(A.O)
o.push(B.cB(new C.f12(i)))
o.push(A.bx)
o.push(D.fCw)
o.push(A.O)
w=B.a([i.b7g("auto","Let AI choose",A.e5,A.QW)],t)
for(v=x.O,m=0;m<11;++m){j=D.ww[m]
u=j.d
w.push(i.b7g(j.a,j.b,j.c,B.a([B.b1(A.d.gI(u).a),B.b1(A.d.gI(u).b)],v)))}o.push(B.bW(A.bE,w,A.bq,h,8,8))
o.push(A.aM)
w=A.c.j(0.04)
v=B.m(16)
u=B.J(i.r?A.be.j(0.5):A.bz,A.r,1)
o.push(B.p(h,B.iI(h,A.be,h,h,h,new C.f0V(i),D.bOQ,D.fN3,h,D.fxo,i.r),A.f,h,h,new B.o(w,h,u,v,h,h,A.n),h,h,h,h,h,h,h,h))
w=i.cy
if(w!=null)A.d.v(o,B.a([A.aA,B.d(w,h,h,h,h,h,h,D.aRU,h,h,h)],t))
o.push(A.bx)
w=i.ax?h:i.gca5()
v=B.fo(h,h,A.b5,A.b5.j(0.5),h,h,h,h,h,A.c,h,h,h,h,new B.b7(B.m(18),A.a0),h,h,h,h,h)
u=i.ax
t=u?D.f4t:A.Ha
o.push(new B.a7(h,54,B.lH(t,B.d(u?i.ay:"Create my presentation",h,h,h,h,h,h,A.oC,h,h,h),w,v),h))
return new B.D(new B.Q(0,0,0,f.f.d),B.p(h,B.bn(!0,B.cd(B.x(o,A.aj,h,A.e,A.j,0,A.p),A.t,h,A.y,h,A.vY,h,h,A.ah),!0,!1,A.af,!0,!1),A.f,h,new B.aZ(0,680,0,g.a.b*0.92),D.acK,h,h,h,h,h,h,h,h),h)},
bPD(d){var w,v,u,t,s,r,q=null,p=this.cx.t(0,d),o=new C.f0s(this,p,d)
if(d===D.Dj)return new C.aEx(p,o,q)
w=B.m(16)
v=p?E.wq:q
u=p?q:A.c.j(0.05)
t=B.J(p?A.aB:A.bz,A.r,1)
s=B.X(p?A.ec:C.hLf(d),A.c,q,q,q,20)
r=C.hLg(d)
return B.aB(q,B.dd(q,B.x(B.a([s,A.au,B.eS(A.A,B.d(r,q,q,q,q,q,q,B.l(q,q,A.c,q,q,q,q,q,q,q,q,12,q,q,p?A.u:A.a7,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),A.f,A.e2)],x.p),A.m,q,A.b8,A.j,0,A.p),q,q,A.b7,new B.o(u,q,t,w,q,v,A.n),A.hp,q,64,q,A.hJ,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,o,q,q,q,q,q,q,!1,A.a5)},
b7g(d,e,f,g){var w,v=null,u=this.CW===d,t=B.m(99),s=u?A.c.j(0.12):A.c.j(0.04),r=u?A.ae:A.bz
r=B.J(r,A.r,u?1.6:1)
w=B.p(v,B.X(f,A.c,v,v,v,14),A.f,v,v,new B.o(v,v,v,v,v,new B.a9(A.a4,A.a8,A.x,g,v,v),A.a6),v,26,v,v,v,v,v,26)
return B.aB(v,B.dd(v,B.B(B.a([w,M.JA,B.d(e,v,v,v,v,v,v,B.l(v,v,A.c,v,v,v,v,v,v,v,v,12.5,v,v,u?A.u:A.a7,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.Q,0,v,v),v,v,A.b7,new B.o(s,v,r,t,v,v,A.n),A.eN,v,v,v,M.akT,v,v,v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.f0H(this,d),v,v,v,v,v,v,!1,A.a5)}}
C.a0H.prototype={
U(){return new C.aHY(new B.as(A.at,$.ax()))}}
C.aHY.prototype={
q(){var w=this.d
w.S$=$.ax()
w.P$=0
this.a3()},
aeX(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$aeX=B.e(function(a2,a3){if(a2===1){s.push(a3)
w=t}for(;;)switch(w){case 0:a0=A.a.i(r.d.a.a)
if(J.ad(a0)<3){r.m(new C.f0d(r))
w=1
break}B.f1()
r.m(new C.f0e(r))
t=4
q=C.ibY(a0)
if(q!=null){k=r.a
j=k.c
k=k.d
i=B.af("\\b(all|every|whole|entire)\\b.{0,30}\\b(slides?|presentation|deck|pages?)\\b|\\b(slides?|presentation|deck)\\b.{0,20}\\b(all|every|whole|entire)\\b",!0,!1,!1,!1)
h=a0.toLowerCase()
p=C.ibI(j,k-1,q,i.b.test(h))
if(!p){r.m(new C.f0f(r,q))
w=1
break}k=r.c
if(k!=null)B.a4(k,!1).O(r.a.c)
w=1
break}g=a0.toLowerCase()
k=B.af("\\b(undo|un-do|bring (it |them |the .{0,30}?)?back|brings? back|put (it |them |the .{0,30}?)?back|restore|revert|go back|change (it|that|them) back|back the way|what it was|the way it was|previous version|before (you|the ai) (changed|change))\\b",!0,!1,!1,!1)
if(k.b.test(g)){k=r.a.c
C.h2O()
f=$.CT.h(0,k.a)
o=f==null||J.cq(f)?null:J.fq(f)
if(o==null){r.m(new C.f0g(r))
w=1
break}n=C.ibG(o,r.a.c)
C.ibC(r.a.c.a)
$.h24=!0
k=r.c
if(k!=null)B.a4(k,!1).O(n)
w=1
break}k=r.a
j=k.c
i=j.CW
if(i==null)i=""
k=k.d
j=C.h5E(j)
h=C.h5F(r.a.c)
e=C.h5G(r.a.c)
w=7
return B.b(C.bCI(k,r.a.c.a,j,h,new C.f0h(r),i,e,a0),$async$aeX)
case 7:m=a3
k=r.c
if(k!=null)B.a4(k,!1).O(m)
t=2
w=6
break
case 4:t=3
a1=s.pop()
l=B.ab(a1)
if(r.c!=null)r.m(new C.f0i(r,l))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$aeX,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=x.w,h=B.aI(d,A.eM,i).w
i=B.aI(d,A.bX,i).w
w=B.at(B.p(j,j,A.f,j,j,new B.o(A.aZ,j,j,B.m(99),j,j,A.n),j,4,j,j,j,j,j,40),j,j,j)
v=x.p
u=B.B(B.a([B.p(j,D.aoM,A.f,j,j,D.b39,j,34,j,j,j,j,j,34),A.as,D.bEG],v),A.m,j,A.e,A.j,0,j,j)
t=B.d("You're on slide "+k.a.d+". Ask for new slides, changes to any slide, a different style or another language.",j,j,j,j,j,j,Ar.a9i,j,j,j)
s=A.c.j(0.05)
s=B.aN(j,A.Z,!0,j,!0,A.t,j,B.aO(),k.d,j,j,j,j,j,2,B.bv(j,j,j,j,j,j,j,j,!0,new B.b5(4,B.m(16),new B.ay(A.c.j(0.1),1,A.r,-1)),j,j,j,j,j,s,!0,j,j,j,j,new B.b5(4,B.m(16),As.acb),j,j,j,j,j,j,j,j,A1.JJ,"e.g. Add a slide after this one about how to sign up, and make the title slide more exciting.",j,j,j,j,j,j,j,j,j,!0,!0,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j),A.y,!0,j,!0,j,!1,j,A.ak,j,j,j,j,j,j,j,j,j,5,2,j,!1,"\u2022",j,j,j,j,j,!1,j,j,!1,j,!0,j,A.ab,j,j,j,j,j,j,j,j,j,j,j,D.aSL,!0,A.a3,j,A.ao,j,j,j,j)
r=B.a([],v)
for(q=0;q<6;++q){p=D.d4W[q]
o=A.c.j(0.06)
n=k.e?j:new C.f0j(k,p)
r.push(B.mQ(j,o,new B.y(p,j,Ax.Un,j,j,j,j,j,j,j,j,j),j,n,j,j,P.vt,j))}w=B.a([w,A.aA,u,A.am,t,A.aA,s,A.W,B.bW(A.bE,r,A.bq,j,8,8)],v)
u=k.r
if(u!=null)A.d.v(w,B.a([A.ad,B.d(u,j,j,j,j,j,j,D.aRU,j,j,j)],v))
w.push(A.aM)
u=k.e
t=u?j:k.gca6()
s=B.m(18)
r=B.m(18)
u=u?B.a([A.be.j(0.5),A.ei.j(0.5)],x.O):D.cDa
o=B.a([new B.ac(0,A.G,A.be.j(0.35),A.cv,16)],x.V)
n=A.c.j(0.22)
m=k.e
l=m?D.eka:D.bTi
n=B.p(j,l,A.f,j,j,new B.o(n,j,j,j,j,j,A.a6),j,30,j,j,j,j,j,30)
w.push(B.aG(!1,A.a1,!0,j,B.aM(!1,s,!0,B.eJ(B.B(B.a([n,A.as,B.d(m?k.f:"Make the change",j,j,j,j,j,j,A.hB,j,j,j)],v),A.m,j,A.b8,A.j,0,j,j),j,new B.o(j,j,j,r,o,new B.a9(A.a4,A.a8,A.x,u,j,j),A.n),54,j,j),j,!0,j,j,j,j,j,j,j,j,j,j,j,t,j,j,j,j,j,j,j),A.f,A.K,0,j,j,j,j,j,A.ai))
return new B.D(new B.Q(0,0,0,h.f.d),B.p(j,B.bn(!0,B.cd(B.x(w,A.aj,j,A.e,A.j,0,A.p),A.t,j,A.y,j,A.vY,j,j,A.ah),!0,!1,A.af,!0,!1),A.f,j,new B.aZ(0,680,0,i.a.b*0.85),D.acK,j,j,j,j,j,j,j,j),j)}}
C.b1O.prototype={}
C.aEx.prototype={
U(){return new C.bkM(null,null)}}
C.bkM.prototype={
gay2(){var w,v=this,u=v.d
if(u===$){w=B.bm(null,A.q6,null,1,null,v)
w.cM(0)
v.d!==$&&B.bG()
v.d=w
u=w}return u},
q(){this.gay2().q()
this.bwT()},
B(d){var w=null,v=this.a.d
return B.aB(w,B.c9(this.gay2(),new C.eiH(this),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,!1,A.a5)}}
C.bip.prototype={
a1(d,e){var w,v,u,t,s,r,q,p,o,n,m
for(w=this.b*2,v=e.a,u=e.b,t=d.a,s=0;s<7;++s){r=0.5+0.5*Math.sin(w+s*1.7)
q=D.dbb[s]
p=q.a*v
q=q.b*u
$.S()
o=new B.ap(A.R,A.N,A.U,A.V,A.S)
o.r=D.xT.j(0.25+r*0.6).gp(0)
n=o.G()
t.drawCircle(p,q,1+r*1.4,n)
n.delete()
if(r>0.85){m=4*(r-0.85)/0.15
o.c=1
n=o.G()
t.drawLine.apply(t,[p-m,q,p+m,q+0,n])
n.delete()
n=o.G()
t.drawLine.apply(t,[p,q-m,p+0,q+m,n])
n.delete()}}},
aw(d){return d.b!==this.b}}
C.asb.prototype={
a5(){return"NgmyTextCommand."+this.b}}
C.a_4.prototype={
U(){return new C.aC2()}}
C.aC2.prototype={
gaj_(){var w,v="colorful",u=this.d
if(u===$){w=this.a.c.CW
w=C.ahp(w==null?"":w,v)
u=w==null?null:w.b
u=this.d=u==null?v:u}return u},
gAl(){var w=this.e
return w===$?this.e=C.h5E(this.a.c).t(0,D.Dj):w},
a8W(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$a8W=B.e(function(a0,a1){if(a0===1){t.push(a1)
w=u}for(;;)switch(w){case 0:s.m(new C.dni(s))
u=3
r=A.d.h_(D.ww,new C.dnj(s))
q=B.de(C.h5E(s.a.c),x.Q)
l=q
J.hz(l,D.Dj)
p=l
if(s.gAl())J.cb(p,D.Dj)
q=s.a.c.CW
if(q==null)q=""
k=r.a
j=s.gAl()?" with Luxury FX":""
i=s.a
h=i.d
i=C.h5F(i.c)
g=C.h5G(s.a.c)
w=6
return B.b(C.bCI(h,s.a.c.a,p,i,null,q,g,'Change the look: use the style "'+k+'"'+j+". Keep every word, slide, bullet, picture and the logo exactly as they are."),$async$a8W)
case 6:o=a1
j=o.CW
q=j==null?"":j
q=C.ahp(q,s.gaj_())
f=q==null?null:q.b
n=f==null?s.gaj_():f
if(!J.A(n,r.a)&&!s.gAl())throw B.W("The AI did not change the look. Try again.")
q=s.c
if(q!=null)B.a4(q,!1).O(o)
u=1
w=5
break
case 3:u=2
d=t.pop()
m=B.ab(d)
if(s.c!=null)s.m(new C.dnk(s,m))
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$a8W,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=B.P(d).ax.a===A.I,l=m?A.c:A.M,k=m?A.aR:A.al,j=m?A.M:A.c,i=B.m(28),h=B.J(m?A.bz:A.aL,A.r,1),g=x.p,f=B.E(B.x(B.a([B.d("Look and feel",n,n,n,n,n,n,B.l(n,n,l,n,n,n,n,n,n,n,n,20,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),A.bA,B.d("Your words, pictures and logo stay the same.",n,n,n,n,n,n,B.l(n,n,k,n,n,n,n,n,n,n,n,12.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],g),A.E,n,A.e,A.j,0,A.p),1),e=o.f?n:new C.dnn(d)
e=B.B(B.a([f,B.aJ(n,n,n,n,B.X(A.cx,k,n,n,n,n),n,n,n,e,n,n,n,n,n,n)],g),A.m,n,A.e,A.j,0,n,n)
f=B.a([],g)
for(w=0;w<11;++w){v=D.ww[w]
u=o.gaj_()
t=o.f?n:new C.dno(o,v)
f.push(new C.btg(v,u===v.a,t,n))}f=B.kY(1.25,f,3,10,10,n,A.dR,!0)
u=B.m(18)
t=o.gAl()?D.c4h:n
if(o.gAl())s=n
else s=m?A.bo:A.bN
r=B.X(A.e5,o.gAl()?A.c:k,n,n,n,n)
q=B.d("Luxury FX",n,n,n,n,n,n,B.l(n,n,o.gAl()?A.c:l,n,n,n,n,n,n,n,n,n,n,n,A.H,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
q=B.E(B.x(B.a([q,B.d("Moving light and ornaments, a new royal look each time",n,n,n,n,n,n,B.l(n,n,o.gAl()?A.ae:k,n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],g),A.E,n,A.e,A.j,0,A.p),1)
p=o.gAl()
f=B.a([f,A.aA,B.p(n,B.B(B.a([r,A.as,q,B.Y3(n,A.c,n,A.bM,!1,A.y,n,n,n,n,n,n,o.f?n:new C.dnp(o),n,n,n,n,n,n,n,n,p)],g),A.m,n,A.e,A.j,0,n,n),A.f,n,n,new B.o(s,n,n,u,n,t,A.n),n,n,n,n,H.ajD,n,n,n)],g)
u=o.r
if(u!=null)A.d.v(f,B.a([A.W,B.d(u,n,n,n,n,n,n,D.fnx,n,n,n)],g))
f=B.cd(B.x(f,A.E,n,A.e,A.j,0,A.p),A.t,n,A.y,n,A.G5,n,n,A.ah)
u=o.f?n:o.gbBY()
t=B.bp(A.K,n,n,n,n,n,A.af,n,new B.b7(B.m(16),A.a0),n,n,n)
s=B.m(16)
return B.bn(!0,B.p(n,B.x(B.a([new B.D(D.bAd,e,n),new B.ds(1,A.cn,f,n),new B.D(A.G4,new B.a7(1/0,50,B.bI(B.eJ(B.at(o.f?A.t2:D.fEU,n,n,n),n,new B.o(n,n,n,s,n,D.c2R,A.n),n,n,n),u,t),n),n)],g),A.m,n,A.e,A.Q,0,A.p),A.f,n,n,new B.o(j,n,h,i,n,n,A.n),n,n,n,A.u_,n,n,n,n),!0,!1,A.af,!0,!0)}}
C.btg.prototype={
B(d){var w=null,v=this.c,u=A.d.gI(v.d),t=B.m(16),s=u.a,r=B.a([B.b1(s),B.b1(u.b)],x.O),q=this.d,p=B.J(q?A.c:A.K,A.r,2.5)
s=q?B.a([new B.ac(0,A.G,B.b1(s).j(0.5),A.J,12)],x.V):w
v=B.a([new B.bM(A.ln,w,w,B.X(v.c,A.ae,w,w,w,18),w),new B.bM(A.lS,w,w,B.d(v.b,w,w,w,w,w,w,D.fnu,w,w,w),w)],x.p)
if(q)v.push(D.aZq)
return B.aB(w,B.dd(w,new B.an(A.a_,w,A.aa,A.t,v,w),w,w,A.b7,new B.o(w,w,p,t,s,new B.a9(A.az,A.aE,A.x,r,w,w),A.n),A.eN,w,w,w,A.cm,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,this.e,w,w,w,w,w,w,!1,A.a5)}}
C.eiE.prototype={
aFH(d,e,f){return e+"@"+A.a.aZ(A.o.fW(f==null?this.a.c:f,16),8,"0").toUpperCase()},
wJ(d,e){return this.aFH(0,e,null)}}
C.aMs.prototype={
q(){var w=this,v=w.aa$
if(v!=null)v.a6(0,w.gbE())
w.aa$=null
w.a3()},
aV(){this.b6()
this.b3()
this.bF()}}
C.b1K.prototype={
B(d){var w,v,u=null,t=C.h4t(this.c)
if(t==null)w=D.bs1
else{w=B.aI(d,u,x.w).w.cKC(D.bwF,D.f3E)
v=this.d
w=B.rr(B.e2(B.aou(!1,t,!1,v,!1,390),!v,u),w)}return B.eS(A.A,new B.a7(416,870,new C.bml(w,u),u),A.f,A.dz)}}
C.bml.prototype={
B(d){var w,v,u,t=null,s=B.a([],x.p)
for(w=0;w<3;++w){v=D.dny[w]
u=new B.aQ(3,3)
s.push(new B.cN(v.a,v.b,t,t,t,t,B.p(t,t,A.f,t,t,new B.o(t,t,t,new B.bk(u,u,u,u),t,D.aqE,A.n),t,v.c,t,t,t,t,t,5),t))}for(w=0;w<2;++w){v=D.doS[w]
u=new B.aQ(3,3)
s.push(new B.cN(t,v.a,-3,t,t,t,B.p(t,t,A.f,t,t,new B.o(t,t,t,new B.bk(u,u,u,u),t,D.aqE,A.n),t,v.b,t,t,t,t,t,5),t))}s.push(B.bT(0,B.c1(t,new B.o(t,t,t,B.m(64),D.cVc,D.c1c,A.n),A.bg),0,0,0))
s.push(B.bT(3,B.c1(t,new B.o(A.w,t,t,B.m(61),t,t,A.n),A.bg),3,3,3))
s.push(B.bT(13,B.by(B.m(51),B.en(this.c,A.w,!0),A.aq),13,13,13))
u=B.m(20)
s.push(B.ao(t,B.at(B.p(D.aZB,B.p(t,t,A.f,t,t,D.b3s,t,11,t,t,t,t,t,11),A.f,t,t,new B.o(A.w,t,t,u,t,t,A.n),t,36,t,t,t,t,t,122),t,t,t),t,t,0,0,25,t))
s.push(B.bT(13,B.e2(B.by(B.m(51),D.btC,A.aq),!0,t),13,13,13))
s.push(B.ao(22,B.e2(B.at(B.p(t,t,A.f,t,t,new B.o(A.ae,t,t,B.m(3),t,t,A.n),t,5,t,t,t,t,t,134),t,t,t),!0,t),t,t,0,0,t,t))
return new B.an(A.a_,t,A.aa,A.f,s,t)}}
C.lm.prototype={
pI(){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=4280640491,j=4280172719,i=4294967295,h="Thank You",g=C.cE(),f=C.cE(),e=m.r
f=C.es(A.L,!1,e.l(),A.aF,"",k,42,A.bp,A.u,"",0.22,f,l,"","",0,!1,"",0,D.bh,j,2,"Your Presentation Title",0,0,"",D.mS,D.cS,0.84,0.08,0.26)
w=C.cE()
v=m.w
w=C.es(A.L,!1,v.l(),A.aF,"",k,20,A.bp,A.a7,"",0.12,w,l,"","",0,!1,"",0,D.bh,j,2,"Class \xb7 Subject \xb7 Date",0,0,"",D.dh,D.cS,0.76,0.12,0.56)
u=C.cE()
t=m.d
s=x.u
t=C.rF(i,l,0,0,B.a([f,w,C.es(A.bi,!1,4279310375,A.aF,"",t.j(0.8).l(),24,A.bp,A.a7,"",0.006,u,l,"","",0,!1,"",0,D.fA,t.l(),3,"",0,0,"",D.cl,D.f8,0.3,0.35,0.72)],s),C.cE(),D.mR,"","","Welcome",D.dh)
u=C.cE()
u=C.es(A.bi,!1,e.l(),A.aF,"",k,34,A.bp,A.u,"",0.14,u,l,"","",0,!1,"",0,D.bh,j,2,"Agenda",0,0,"",D.cl,D.cS,0.84,0.08,0.08)
w=C.cE()
w=C.rF(i,l,0,0,B.a([u,C.es(A.bi,!0,v.l(),A.aF,"",k,22,A.bp,A.a7,"",0.6,w,l,"","",0,!1,"",0,D.bh,j,2,"1. Introduction\n2. Core concepts\n3. Case study\n4. Discussion\n5. Summary & Q&A",0,0,"",D.uN,D.cS,0.8,0.1,0.26)],s),C.cE(),D.mR,"","","Agenda",D.dh)
u=C.cE()
u=C.es(A.bi,!1,e.l(),A.aF,"",k,32,A.bp,A.u,"",0.14,u,l,"","",0,!1,"",0,D.bh,j,2,"Main Idea",0,0,"",D.cl,D.cS,0.84,0.08,0.08)
f=C.cE()
f=C.rF(i,l,0,0,B.a([u,C.es(A.bi,!0,v.l(),A.aF,"",k,21,A.bp,A.a7,"",0.62,f,l,"","",0,!1,"",0,D.bh,j,2,"\u2022 Supporting detail\n\u2022 Evidence or example\n\u2022 Why it matters",0,0,"",D.cl,D.cS,0.8,0.1,0.26)],s),C.cE(),D.mR,"","","Key Point 1",D.dh)
u=C.cE()
u=C.es(A.bi,!1,e.l(),A.aF,"",k,30,A.bp,A.u,"",0.12,u,l,"","",0,!1,"",0,D.bh,j,2,"Compare & Contrast",0,0,"",D.cl,D.cS,0.84,0.08,0.08)
r=C.cE()
r=C.es(A.bi,!0,v.l(),A.aF,"",k,18,A.bp,A.a7,"",0.62,r,l,"","",0,!1,"",0,D.bh,j,2,"Option A\n\n\u2022 Strength\n\u2022 Example",0,0,"",D.cl,D.cS,0.4,0.08,0.24)
q=C.cE()
q=C.rF(i,l,0,0,B.a([u,r,C.es(A.bi,!0,v.l(),A.aF,"",k,18,A.bp,A.a7,"",0.62,q,l,"","",0,!1,"",0,D.bh,j,2,"Option B\n\n\u2022 Strength\n\u2022 Example",0,0,"",D.cl,D.cS,0.4,0.52,0.24)],s),C.cE(),D.mR,"","","Key Point 2",D.dh)
r=C.cE()
r=C.es(A.L,!1,e.l(),A.aF,"",k,48,A.bp,A.u,"",0.2,r,l,"","",0,!1,"",0,D.bh,j,2,h,0,0,"",D.dh,D.cS,0.8,0.1,0.32)
e=C.cE()
p=C.BV(l,l,l,l,D.Df,5,!1,l,l,l,l,l,g,l,!1,l,m.b,l,l,B.a([t,w,f,q,C.rF(i,l,0,0,B.a([r,C.es(A.L,!1,v.l(),A.aF,"",k,22,A.bp,A.a7,"",0.1,e,l,"","",0,!1,"",0,D.bh,j,2,"Questions?",0,0,"",D.cl,D.cS,0.7,0.15,0.58)],s),C.cE(),D.mR,"","",h,D.dh)],x.g),"class_"+m.a,l,!1,l)
for(g=p.r,f=g.length,e=m.e,w=m.f,o=0;o<g.length;g.length===f||(0,B.M)(g),++o){n=g[o]
n.e=e.l()
n.f=w.l()}return p}}
C.EV.prototype={
by(d){return this.e.$1(d)}}
C.ew.prototype={}
C.j2.prototype={}
C.EM.prototype={
gaLu(){var w=this.c
if(!(A.a.i(w).length!==0)){w=C.ahc(this.a)
w=w==null?null:w.c
if(w==null)w=""}return w},
a45(d,e,f,g){var w=this,v=e==null?w.a:e,u=g==null?w.b:g,t=f==null?w.c:f
return new C.EM(v,u,t,d==null?w.d:d)},
FR(d){return this.a45(null,d,null,null)},
aEr(d){return this.a45(null,null,null,d)},
cKA(d,e){return this.a45(d,e,null,null)},
bcv(d){return this.a45(d,null,null,null)},
bcC(d){return this.a45(null,null,d,null)}}
C.NJ.prototype={
U(){return new C.bka(new B.ez(0,$.ax()),null,null)}}
C.bka.prototype={
a_(){var w,v=this
v.a2()
w=v.qO(new C.dXY(v))
v.e!==$&&B.aP()
v.e=w
if(v.a.e)w.h9(0)
else v.d.sp(0,3.2)},
q(){var w=this.e
w===$&&B.c()
w.q()
w=this.d
w.S$=$.ax()
w.P$=0
this.bwo()},
B(d){var w=C.ahc(this.a.c.a)
if(w==null)w=A.d.gI(D.Hv)
return B.cB(new C.dXX(this,w,C.hkL(this.a.c.d)))}}
C.brP.prototype={
B(d){return B.nY(A.Wf,this.e,new C.f_r(this,A.k.F(this.d*0.35,1.6)-0.3))}}
C.bfg.prototype={
a1(d,e){var w=this,v=w.c.a
switch(w.b){case"fireworks":w.aTn(d,e,v)
break
case"confetti":w.bIw(d,e,v)
break
case"crown":w.bK8(d,e,v)
break
case"aurora":w.bD2(d,e,v)
break
case"champagne":w.bGo(d,e,v)
break
case"diamonds":w.bMj(d,e,v)
break
case"starburst":w.cxv(d,e,v)
break
case"balloons":w.bDg(d,e,v)
break
case"galaxy":w.bRs(d,e,v)
break
case"redcarpet":w.cop(d,e,v)
break
case"coins":w.bHV(d,e,v)
break
case"lanterns":w.c0E(d,e,v)
break
case"hearts":w.bZh(d,e,v)
break
case"petals":w.cjv(d,e,v)
break
case"butterflies":w.bFn(d,e,v)
break
case"neon":w.c4C(d,e,v)
break
case"disco":w.bMu(d,e,v)
break
case"sunrise":w.cz8(d,e,v)
break
case"pearls":w.ciz(d,e,v)
break
case"snow":w.cxc(d,e,v)
break
case"laurel":w.c0K(d,e,v)
break
case"ribbons":w.cqU(d,e,v)
break
case"kente":w.c0s(d,e,v)
break
case"trophy":w.cCK(d,e,v)
break
case"shooting":w.cuX(d,e,v)
break
case"bokeh":w.bDB(d,e,v)
break
case"orbits":w.cgb(d,e,v)
break
case"flowers":w.bQI(d,e,v)
break
case"music":w.c4k(d,e,v)
break
case"mandala":w.c2L(d,e,v)
break
case"sparklers":w.cxj(d,e,v)
break
case"city":w.bHb(d,e,v)
break}},
rR(d,e,f,g,h){var w,v,u,t,s
if(h<=0.01)return
w=$.S()
v=B.I()
v.r=g.j(A.k.E(h,0,1)).gp(0)
v.a=A.oL
u=new B.aF(w.r,A.ag,null,null,B.a([],x.v))
w=e.a
t=e.b
s=t-f
u.D(new B.aX(w,s))
u.D(new B.c3(w,t,w+f,t))
u.D(new B.c3(w,t,w,t+f))
u.D(new B.c3(w,t,w-f,t))
u.D(new B.c3(w,t,w,s))
u.D(new B.br())
d.aG(u,v)
d.ad(e,f*0.18,v)},
lR(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o=e.a,n=e.b,m=Math.min(o,n)
for(w=Math.max(4,A.k.V(g*this.d)),v=i+3,u=i+4,t=i+1,s=i+2,r=i+5,q=0;q<w;++q){p=(Math.sin(f*(1.2+C.cZ(q,v)*2.5)+C.cZ(q,u)*6.28)+1)/2
this.rR(d,new B.t(C.cZ(q,t)*o,C.cZ(q,s)*n),m*(0.006+0.014*C.cZ(q,r))*(0.5+p),h,p*p)}},
aTn(c3,c4,c5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0=c4.a,c1=c4.b,c2=Math.min(c0,c1)
this.lR(c3,c4,c5,40,A.c,10)
w=x.O
v=[B.a([A.bM,A.aD],w),B.a([A.ic,A.bC],w),B.a([A.ey,A.aQ],w),B.a([A.c,A.ay],w)]
for(u=c2*0.005,t=c3.a,s=c2*0.012,r=c5*30,q=46*this.d,p=c2*0.08,o=c2*0.04,n=c2*0.006,m=c2*0.008,l=0;l<7;++l){k=c5+l*2.8/7
j=A.k.bh(k/2.8)
i=A.k.F(k,2.8)/2.8
h=l*97+j*13
g=c0*(0.15+0.7*C.cZ(h,1))
f=g+c0*(C.cZ(h,2)-0.5)*0.15
e=c1*(0.12+0.35*C.cZ(h,3))
d=v[Math.abs(A.o.F(h,4))]
if(i<0.22){a0=B.kx(new B.t(g,c1),new B.t(f,e),A.ct.av(0,i/0.22))
a0.toString
$.S()
a1=new B.ap(A.R,A.N,A.U,A.V,A.S)
a1.sam(new B.a9(A.a4,A.a8,A.x,B.a([d[0].j(0),d[0]],w),null,null).aB(0,B.rH(new B.t(g,c1),a0)))
a1.c=n
a1.d=A.bB
a2=B.kx(new B.t(g,c1),a0,0.75)
a2.toString
a3=a1.G()
a4=a0.a
a0=a0.b
t.drawLine.apply(t,[a2.a,a2.b,a4,a0,a3])
a3.delete()
a2=new B.ap(A.R,A.N,A.U,A.V,A.S)
a2.r=A.c.gp(0)
a3=a2.G()
t.drawCircle(a4,a0,m,a3)
a3.delete()}else{a5=(i-0.22)/0.78
a6=A.ct.av(0,a5)
a0=1-a5
a7=a0*a0
a0=Math.max(4,A.k.V(q))
a2=C.cZ(h,4)
if(a5<0.15){a4=1-a5/0.15
$.S()
a8=new B.ap(A.R,A.N,A.U,A.V,A.S)
a8.r=d[0].j(0.5*a4).gp(0)
a8.z=new B.hg(A.G,o)
a3=a8.G()
t.drawCircle(f,e,p*a4,a3)
a3.delete()}for(a4=a5>0.45,a8=a7*0.8,a2=c2*(0.16+0.1*a2)*a6,a9=a5*a5*c2*0.12,b0=a9*0.8,b1=0;b1<a0;++b1){b2=b1/a0*3.141592653589793*2+C.cZ(h,b1+10)*0.2
b3=a2*(0.75+0.25*C.cZ(h,b1+60))
b4=f+Math.cos(b2)*b3
b5=e+Math.sin(b2)*b3+a9
b6=Math.cos(b2)
b7=Math.sin(b2)
b8=(b1&1)===0?d[0]:d[1]
$.S()
b9=new B.ap(A.R,A.N,A.U,A.V,A.S)
b9.r=b8.j(a8).gp(0)
b9.c=u
b9.d=A.bB
b9.a=A.oL
a3=b9.G()
t.drawLine.apply(t,[f+b6*b3*0.82,e+b7*b3*0.82+b0,b4,b5,a3])
a3.delete()
if(a4&&C.cZ(h,b1+120)>0.5)this.rR(c3,new B.t(b4,b5),s,A.c,a7*(0.5+0.5*Math.sin(r+b1)))}}}},
bIw(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=a2.a,i=a2.b,h=Math.min(j,i),g=A.k.F(a3*0.25,1.6)-0.3,f=0+j,e=0+i,d=$.S(),a0=B.I()
a0.sam(new B.a9(A.az,A.aE,A.x,D.dhV,B.a([A.k.E(g-0.15,0,1),A.k.E(g,0,1),A.k.E(g+0.15,0,1)],x.x),null).aB(0,new B.a3(0,0,f,e)))
a1.aP(new B.a3(0,0,f,e),a0)
a0=Math.max(4,A.k.V(150*this.d))
for(f=a1.a,w=i+h*0.1,i=h*0.05,e=a3*4,v=x.v,u=0;u<a0;++u){t=A.k.F(a3*(h*(0.08+0.12*C.cZ(u,1)))+C.cZ(u,2)*w,w)
s=C.cZ(u,3)
r=Math.sin(a3*(0.8+C.cZ(u,4))+u)
q=h*(0.012+0.012*C.cZ(u,5))
p=Math.cos(a3*(2+3*C.cZ(u,6))+u)
o=D.Qo[A.o.E(A.k.bh(C.cZ(u,7)*5),0,4)]
J.bl(f.save())
f.translate(s*j+r*h*0.04,t-i)
f.rotate((a3*(0.6+C.cZ(u,8)*2)+u)*180/3.141592653589793,0,0)
n=new B.ap(A.R,A.N,A.U,A.V,A.S)
t=Math.abs(p)
n.r=B.ar(o,A.c,t*0.4).j(0.95).gp(0)
if(A.o.F(u,5)===0){t=B.a([],v)
m=new B.aF(d.r,A.ag,null,null,t)
d=-q*2
t.push(new B.aX(d,0))
for(l=1;l<=8;++l){s=new B.aq(d+l*q*0.5,Math.sin(l*1.2+e)*q*0.5)
t.push(s)
r=m.f
if(r!=null)s.by(r)
s=m.e
if(s!=null)s.a.delete()
m.e=null}d=$.S()
t=new B.ap(A.R,A.N,A.U,A.V,A.S)
t.r=B.b1(n.r).gp(0)
t.b=A.a9
t.c=q*0.35
k=t.G()
t=m.e
f.drawPath((t==null?m.e=new B.cj(m.gbw().a.snapshot()):t).a,k)
k.delete()}else{t=B.bJ(A.J,q*1.8*A.k.E(t,0.15,1),q)
k=n.G()
f.drawRect(B.bF(t),k)
k.delete()}f.restore()}this.lR(a1,a2,a3,25,A.bM,30)},
bK8(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=a9.a,a6=a9.b,a7=Math.min(a5,a6)
a5/=2
a6*=0.5
w=new B.t(a5,a6)
for(v=x.O,u=a7*1.2,t=a8.a,s=b0*0.12,r=x.v,q=0;q<16;++q){p=q/16*3.141592653589793*2+s
o=$.S()
n=B.a([],r)
m=new B.aF(o.r,A.ag,a4,a4,n)
n.push(new B.aX(a5,a6))
o=p-0.07
n.push(new B.aq(a5+Math.cos(o)*a7*1.2,a6+Math.sin(o)*a7*1.2))
o=p+0.07
n.push(new B.aq(a5+Math.cos(o)*a7*1.2,a6+Math.sin(o)*a7*1.2))
n.push(new B.br())
o=new B.ap(A.R,A.N,A.U,A.V,A.S)
o.sam(new B.c0(A.A,0.5,A.x,a4,0,B.a([A.bM.j(0.22),D.bfr],v),a4,a4).aB(0,B.bX(w,u)))
l=o.G()
o=m.gbw().a.snapshot()
t.drawPath((m.e=new B.cj(o)).a,l)
l.delete()}k=a7*0.28
j=a7*0.16
a5-=k/2
a6=a6-a7*0.15-j
i=new B.aF($.S().r,A.ag,a4,a4,B.a([],r))
v=a6+j
i.D(new B.aX(a5,v))
u=j*0.3
s=a6+u
i.D(new B.aq(a5,s))
o=a6+j*0.6
i.D(new B.aq(a5+k*0.22,o))
i.D(new B.aq(a5+k*0.5,a6))
i.D(new B.aq(a5+k*0.78,o))
o=a5+k
i.D(new B.aq(o,s))
i.D(new B.aq(o,v))
i.D(new B.br())
h=A.k.E(b0/1.8,0,1)
s=h>=1
if(s){n=B.I()
n.sam(new B.a9(A.b3,A.b6,A.x,D.dgy,a4,a4).aB(0,new B.a3(a5,a6,o,v)))
a8.aG(i,n)
for(v=[D.ezX,D.et8,D.eJv],o=a6+j*0.78,n=a7*0.016,g=a7*0.005,f=o-g,e=0;e<3;++e){d=v[e]
a0=d.b
d=a5+k*d.a
a1=new B.ap(A.R,A.N,A.U,A.V,A.S)
a1.r=a0.gp(a0)
l=a1.G()
t.drawCircle(d,o,n,l)
l.delete()
a1=new B.ap(A.R,A.N,A.U,A.V,A.S)
a1.r=A.ae.gp(0)
l=a1.G()
t.drawCircle(d-g,f,g,l)
l.delete()}for(v=[0,0.5,1],o=a7*0.014,e=0;e<3;++e){a2=v[e]
n=a2===0.5?0:u
g=new B.ap(A.R,A.N,A.U,A.V,A.S)
g.r=A.hT.gp(0)
l=g.G()
t.drawCircle(a5+k*a2,a6+n,o,l)
l.delete()}}for(v=B.xl(i),u=B.a([],x.X),o=new B.tl(v,!1,u),n=v.a,g=a7*0.008;o.C();){f=o.c
if(f===0||o.f)B.b8(B.ju(y.M));--f
o.ij()
d=u[f].b
d===$&&B.c()
d=d.a.length()
d=new B.aF(n,v.b,a4,new B.cw([new B.Bo(o,f),0,d*h,!0]),B.a([],r))
f=new B.ap(A.R,A.N,A.U,A.V,A.S)
f.b=A.a9
f.c=g
f.e=A.dS
f.r=A.bM.gp(0)
l=f.G()
f=d.gbw().a.snapshot()
t.drawPath((d.e=new B.cj(f)).a,l)
l.delete()}if(s){a3=A.k.F(b0*0.5,1)
this.rR(a8,new B.t(a5+k*a3,a6+j*0.5),a7*0.04,A.c,Math.sin(a3*3.141592653589793))}this.lR(a8,a9,b0,45,A.bM,40)},
bD2(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=a9.a,a6=a9.b,a7=Math.min(a5,a6)
this.lR(a8,a9,b0,60,A.c,50)
w=[D.eV4,D.eUN,D.eUH,D.eW2]
for(v=a7*0.01,u=a8.a,t=a7*0.14,s=a7*0.06,r=a5+10,q=a5/40,p=x.v,o=0;o<4;++o){n=w[o].a
m=n[0]
l=n[1]
k=n[2]
j=n[3]
n=$.S()
i=B.a([],p)
h=new B.aF(n.r,A.ag,null,null,i)
for(n=a6*l,g=b0*k,f=g*1.4,e=0;e<=r;e+=q){d=e/a5
a0=n+Math.sin(d*4+g+j)*a7*0.07+Math.sin(d*9-f+j)*a7*0.025
if(e===0){d=new B.aX(e,a0)
i.push(d)
a1=h.f
if(a1!=null)d.by(a1)
d=h.e
if(d!=null)d.a.delete()
h.e=null}else{d=new B.aq(e,a0)
i.push(d)
a1=h.f
if(a1!=null)d.by(a1)
d=h.e
if(d!=null)d.a.delete()
h.e=null}}$.S()
n=new B.ap(A.R,A.N,A.U,A.V,A.S)
n.b=A.a9
n.c=t
n.r=m.j(0.28).gp(0)
n.a=A.oL
n.z=new B.hg(A.G,s)
a2=n.G()
n=h.e
u.drawPath((n==null?h.e=new B.cj(h.gbw().a.snapshot()):n).a,a2)
a2.delete()
n=new B.ap(A.R,A.N,A.U,A.V,A.S)
n.b=A.a9
n.c=v
n.r=m.j(0.55).gp(0)
n.a=A.oL
n.z=new B.hg(A.G,v)
a2=n.G()
n=h.e
u.drawPath((n==null?h.e=new B.cj(h.gbw().a.snapshot()):n).a,a2)
a2.delete()}for(v=Math.max(4,A.k.V(40*this.d)),a3=a6+20,t=b0*a7,a4=0;a4<v;++a4){s=A.k.F(t*(0.05+0.06*C.cZ(a4,1))+C.cZ(a4,2)*a3,a3)
r=C.cZ(a4,3)
q=Math.sin(b0+a4)
p=C.cZ(a4,4)
$.S()
n=new B.ap(A.R,A.N,A.U,A.V,A.S)
n.r=A.vL.j(0.4+0.5*C.cZ(a4,5)).gp(0)
n.a=A.oL
a2=n.G()
u.drawCircle(r*a5+q*a7*0.02,a6-s,a7*(0.003+0.004*p),a2)
a2.delete()}},
bGo(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=a2.a,j=a2.b,i=Math.min(k,j),h=Math.sin(a3*1.5),g=k/2,f=j*0.5,e=i*0.55,d=$.S(),a0=B.I()
a0.sam(new B.c0(A.A,0.5,A.x,l,0,B.a([A.hS.j(0.25+0.1*h),D.Y9],x.O),l,l).aB(0,B.bX(new B.t(g,f),e)))
a1.ad(new B.t(g,f),e,a0)
for(h=i*0.008,g=a1.a,f=a3*3,e=x.v,w=0;w<6;++w){v=(w&1)===0
a0=B.a([],e)
u=new B.aF(d.r,A.ag,l,l,a0)
d=v?0:k
t=j*(0.05+w*0.07)
a0.push(new B.aX(d,t))
for(s=1;s<=20;++s){d=s/20*k
r=v?d*0.45:k-d*0.45
d=new B.aq(r,t+s*i*0.012+Math.sin(s*0.8+f+w)*i*0.02)
a0.push(d)
q=u.f
if(q!=null)d.by(q)
d=u.e
if(d!=null)d.a.delete()
u.e=null}d=$.S()
a0=new B.ap(A.R,A.N,A.U,A.V,A.S)
a0.b=A.a9
a0.c=h
a0.r=D.Qo[A.o.F(w,4)].j(0.7).gp(0)
p=a0.G()
a0=u.e
g.drawPath((a0==null?u.e=new B.cj(u.gbw().a.snapshot()):a0).a,p)
p.delete()}for(h=Math.max(4,A.k.V(110*this.d)),f=j*0.08,o=j*1.1,e=a3*2,w=0;w<h;++w){n=j-A.k.F(a3*(i*(0.07+0.12*C.cZ(w,1)))+C.cZ(w,2)*o,o)
r=k*(0.1+0.8*C.cZ(w,3))+Math.sin(e+w)*i*0.015
m=i*(0.004+0.012*C.cZ(w,4))
if(n<f){this.rR(a1,new B.t(r,n),m*2.4,A.bM,A.k.E(n/f,0,1))
continue}$.S()
d=new B.ap(A.R,A.N,A.U,A.V,A.S)
d.b=A.a9
a0=m*0.25
d.c=Math.max(0.8,a0)
d.r=A.xJ.j(0.75).gp(0)
p=d.G()
g.drawCircle(r,n,m,p)
p.delete()
d=m*0.35
t=new B.ap(A.R,A.N,A.U,A.V,A.S)
t.r=A.c.j(0.8).gp(0)
p=t.G()
g.drawCircle(r-d,n-d,a0,p)
p.delete()}},
bMj(a9,b0,b1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=null,a6=b0.a,a7=b0.b,a8=Math.min(a6,a7)
this.lR(a9,b0,b1,30,A.kZ,60)
for(w=Math.max(4,A.k.V(42*this.d)),v=a9.a,u=b1*2.2,t=b1*a8,s=b1*0.7,r=b1*0.8,q=x.v,p=0;p<w;++p){o=a8*(0.025+0.035*C.cZ(p,1))
n=a7+o*4
m=A.k.F(t*(0.04+0.06*C.cZ(p,2))+C.cZ(p,3)*n,n)-o*2
l=C.cZ(p,4)*a6+Math.sin(s+p)*a8*0.02
J.bl(v.save())
v.translate(l,m)
v.rotate(Math.sin(r+p)*0.5*180/3.141592653589793,0,0)
k=o*1.2
j=-k
i=j*0.35
h=$.S()
g=B.a([],q)
f=new B.aF(h.r,A.ag,a5,a5,g)
h=-o
e=h*0.5
g.push(new B.aX(e,i))
h*=0.28
j*=0.6
g.push(new B.aq(h,j))
d=o*0.28
g.push(new B.aq(d,j))
a0=o*0.5
g.push(new B.aq(a0,i))
a1=k*0.6
g.push(new B.aq(0,a1))
g.push(new B.br())
g=new B.ap(A.R,A.N,A.U,A.V,A.S)
g.sam(new B.a9(A.az,A.aE,A.x,D.dce,a5,a5).aB(0,B.bJ(A.J,k*1.2,o)))
a2=g.G()
g=f.gbw().a.snapshot()
v.drawPath((f.e=new B.cj(g)).a,a2)
a2.delete()
a3=new B.ap(A.R,A.N,A.U,A.V,A.S)
a3.b=A.a9
a3.c=Math.max(0.6,o*0.03)
a3.r=A.c.j(0.7).gp(0)
a2=a3.G()
v.drawLine.apply(v,[e,i,a0,i,a2])
a2.delete()
a2=a3.G()
v.drawLine.apply(v,[h,j,0,a1,a2])
a2.delete()
a2=a3.G()
v.drawLine.apply(v,[d,j,0,a1,a2])
a2.delete()
v.restore()
a4=Math.sin(u+p*1.7)
if(a4>0.85)this.rR(a9,new B.t(l+o*0.2,m-o*0.3),o*0.9,A.c,(a4-0.85)/0.15)}},
cxv(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=e.a,g=e.b,f=Math.min(h,g)
h/=2
g/=2
for(w=d.a,v=x.v,u=a0*0.15,t=0;t<28;++t){s=t/28*3.141592653589793*2-u
r=(t&1)===0
q=r?0.05:0.025
p=$.S()
o=B.a([],v)
n=new B.aF(p.r,A.ag,null,null,o)
o.push(new B.aX(h,g))
p=s-q
o.push(new B.aq(h+Math.cos(p)*f*1.3,g+Math.sin(p)*f*1.3))
p=s+q
o.push(new B.aq(h+Math.cos(p)*f*1.3,g+Math.sin(p)*f*1.3))
o.push(new B.br())
p=new B.ap(A.R,A.N,A.U,A.V,A.S)
p.r=A.bM.j(r?0.12:0.07).gp(0)
m=p.G()
r=n.gbw().a.snapshot()
w.drawPath((n.e=new B.cj(r)).a,m)
m.delete()}for(v=f*0.008,l=0;l<3;++l){k=A.k.F(a0+l*0.6,1.8)/1.8
$.S()
u=new B.ap(A.R,A.N,A.U,A.V,A.S)
u.b=A.a9
r=1-k
u.c=v*r
u.r=A.bM.j(r*0.6).gp(0)
m=u.G()
w.drawCircle(h,g,f*(0.15+0.6*k),m)
m.delete()}j=A.k.bh(a0/2.4)
k=A.k.F(a0,2.4)/2.4
for(w=Math.max(4,A.k.V(70*this.d)),v=j+1,u=(1-k)*1.2,t=0;t<w;++t){s=C.cZ(t,j)*3.141592653589793*2
i=f*(0.1+0.55*D.bt_.av(0,k)*(0.5+0.5*C.cZ(t,v)))
this.rR(d,new B.t(h+Math.cos(s)*i,g+Math.sin(s)*i),f*(0.01+0.012*C.cZ(t,3)),D.Qo[A.o.E(A.k.bh(C.cZ(t,4)*5),0,4)],u)}},
bDg(a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=a8.a,a5=a8.b,a6=Math.min(a4,a5)
for(w=this.d,v=Math.max(4,A.k.V(22*w)),u=a7.a,t=x.O,s=x.v,r=a9*2,q=a9*a6,p=a9*0.9,o=0;o<v;++o){n=a6*(0.045+0.035*C.cZ(o,1))
m=a5+n*6
l=n*2
k=a5+l-A.k.F(q*(0.05+0.05*C.cZ(o,2))+C.cZ(o,3)*m,m)
j=C.cZ(o,4)*a4+Math.sin(p+o*1.3)*a6*0.03
i=D.axO[A.o.F(o,6)]
h=$.S()
g=B.a([],s)
f=new B.aF(h.r,A.ag,a3,a3,g)
h=k+n*1.15
g.push(new B.aX(j,h))
for(e=1;e<=6;++e){d=new B.aq(j+Math.sin(e*1.4+r+o)*n*0.15,h+e*n*0.35)
g.push(d)
a0=f.f
if(a0!=null)d.by(a0)
d=f.e
if(d!=null)d.a.delete()
f.e=null}g=$.S()
d=new B.ap(A.R,A.N,A.U,A.V,A.S)
d.b=A.a9
d.c=Math.max(0.7,n*0.03)
d.r=A.c.j(0.6).gp(0)
a1=d.G()
d=f.e
u.drawPath((d==null?f.e=new B.cj(f.gbw().a.snapshot()):d).a,a1)
a1.delete()
a2=B.bJ(new B.t(j,k),n*2.3,l)
l=new B.ap(A.R,A.N,A.U,A.V,A.S)
d=B.ar(i,A.w,0.35)
d.toString
l.sam(new B.c0(D.aZE,0.9,A.x,a3,0,B.a([A.c,i,d],t),V.axE,a3).aB(0,a2))
a1=l.G()
u.drawOval(B.bF(a2),a1)
a1.delete()
l=B.a([],s)
g=new B.aF(g.r,A.ag,a3,a3,l)
d=n*0.12
l.push(new B.aX(j-d,h))
l.push(new B.aq(j+d,h))
l.push(new B.aq(j,k+n))
l.push(new B.br())
l=new B.ap(A.R,A.N,A.U,A.V,A.S)
l.r=B.ar(i,A.w,0.3).gp(0)
a1=l.G()
l=g.gbw().a.snapshot()
u.drawPath((g.e=new B.cj(l)).a,a1)
a1.delete()}for(w=Math.max(4,A.k.V(60*w)),m=a5+20,a5=a9*3,v=a6*0.012,t=a6*0.02,o=0;o<w;++o){s=A.k.F(q*(0.1+0.1*C.cZ(o,11))+C.cZ(o,12)*m,m)
r=C.cZ(o,13)
J.bl(u.save())
u.translate(r*a4,s-10)
u.rotate((a5+o)*180/3.141592653589793,0,0)
s=B.bJ(A.J,t,v)
$.S()
r=new B.ap(A.R,A.N,A.U,A.V,A.S)
r.r=D.axO[A.o.F(o,6)].j(0.85).gp(0)
a1=r.G()
u.drawRect(B.bF(s),a1)
a1.delete()
u.restore()}},
bRs(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=b2.a,a6=b2.b,a7=Math.min(a5,a6),a8=a5/2,a9=a6/2,b0=new B.t(a8,a9)
this.lR(b1,b2,b3,50,A.c,70)
for(w=[D.eVc,D.eUT,D.eUZ],v=b3*0.3,u=x.O,t=b1.a,s=0;s<3;++s){r=w[s].a
q=r[0]
p=r[1]
o=r[2]
n=r[3]
r=a8+(p*a5+Math.sin(v)*a7*0.03)
m=a9+o*a6
l=a7*n
$.S()
k=new B.ap(A.R,A.N,A.U,A.V,A.S)
k.sam(new B.c0(A.A,0.5,A.x,a4,0,B.a([q.j(0.32+0.08*Math.sin(b3)),q.j(0)],u),a4,a4).aB(0,B.bX(new B.t(r,m),l)))
j=k.G()
t.drawCircle(r,m,l,j)
j.delete()}w=Math.max(4,A.k.V(420*this.d))
for(v=a7*0.6,r=b3*0.18,i=0;i<w;++i){h=A.o.F(i,3)
g=C.cZ(i,1)
f=v*Math.pow(g,0.8)
e=h*3.141592653589793*2/3+g*5.5+r+(C.cZ(i,2)-0.5)*0.5
m=Math.cos(e)
l=Math.sin(e)
k=B.ar(A.bM,A.eG,g)
k.toString
d=C.cZ(i,3)
$.S()
a0=new B.ap(A.R,A.N,A.U,A.V,A.S)
a0.r=k.j(0.5+0.5*C.cZ(i,4)).gp(0)
a0.a=A.oL
j=a0.G()
t.drawCircle(a8+m*f,a9+l*f*0.62,a7*(0.0025+0.004*d),j)
j.delete()}a8=a7*0.12
$.S()
a9=B.I()
a9.sam(new B.c0(A.A,0.5,A.x,a4,0,B.a([A.xJ.j(0.55),D.ah8],u),a4,a4).aB(0,B.bX(b0,a8)))
b1.ad(b0,a8,a9)
a1=A.k.F(b3,3.5)/3.5
if(a1<0.25){a2=A.k.bh(b3/3.5)
a3=new B.t(a5*(0.1+0.5*C.cZ(a2,9)),a6*0.1*C.cZ(a2,8))
a5=B.kx(a3,a3.a8(0,new B.t(v,a7*0.3)),a1/0.25)
a5.toString
a6=B.kx(a3,a5,0.6)
a6.toString
a8=B.I()
a8.sam(new B.a9(A.a4,A.a8,A.x,B.a([A.c.j(0),A.c],u),a4,a4).aB(0,B.rH(a3,a5)))
a8.c=a7*0.005
a8.d=A.bB
b1.bo(a6,a5,a8)}},
cop(b9,c0,c1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=null,b6=c0.a,b7=c0.b,b8=Math.min(b6,b7)
for(w=x.O,v=b9.a,u=-b8*0.05,t=b7*1.3,s=x.v,r=0;r<3;++r){q=b6*(0.2+r*0.3)
p=1.5707963267948966+Math.sin(c1*(0.5+r*0.15)+r*2)*0.45
o=$.S()
n=B.a([],s)
m=new B.aF(o.r,A.ag,b5,b5,n)
n.push(new B.aX(q,u))
o=p-0.16
n.push(new B.aq(q+Math.cos(o)*t,u+Math.sin(o)*t))
o=p+0.16
n.push(new B.aq(q+Math.cos(o)*t,u+Math.sin(o)*t))
n.push(new B.br())
o=new B.ap(A.R,A.N,A.U,A.V,A.S)
o.sam(new B.c0(A.A,0.5,A.x,b5,0,B.a([A.xJ.j(0.28),D.ah8],w),b5,b5).aB(0,B.bX(new B.t(q,u),t)))
o.a=A.oL
l=o.G()
q=m.gbw().a.snapshot()
v.drawPath((m.e=new B.cj(q)).a,l)
l.delete()}for(u=[!0,!1],q=b7*0.52,o=b8*0.012,n=b7*0.5,k=b7*0.55,j=0+b7,i=b6*0.16,h=i*0.55,g=i*0.9,f=i*0.62,e=i*0.95,d=b6-e,a0=b6-f,a1=b6-g,a2=b6-h,a3=b6-i,a4=0;a4<2;++a4){a5=u[a4]
a6=a5?0:a3
a7=B.a([],w)
for(a8=0;a8<7;++a8)a7.push((a8&1)===0?A.ej:A.ek)
a9=$.S()
b0=B.a([],s)
m=new B.aF(a9.r,A.ag,b5,b5,b0)
b0.push(new B.aX(a5?0:b6,0))
b0.push(new B.aq(a5?i:a3,0))
a9=a5?h:a2
b0.push(new B.c3(a9,k,a5?g:a1,b7))
b0.push(new B.aq(a5?0:b6,b7))
b0.push(new B.br())
a9=new B.ap(A.R,A.N,A.U,A.V,A.S)
a9.sam(new B.a9(A.a4,A.a8,A.x,a7,b5,b5).aB(0,new B.a3(a6,0,a6+i,j)))
l=a9.G()
a9=m.gbw().a.snapshot()
v.drawPath((m.e=new B.cj(a9)).a,l)
l.delete()
a9=a5?f:a0
b0=a5?e:d
b1=new B.ap(A.R,A.N,A.U,A.V,A.S)
b1.r=A.hS.gp(0)
b1.c=o
b1.d=A.bB
l=b1.G()
v.drawLine.apply(v,[a9,n,b0,q,l])
l.delete()}b2=new B.aF($.S().r,A.ag,b5,b5,B.a([],s))
w=b7*0.78
b2.D(new B.aX(b6*0.42,w))
b2.D(new B.aq(b6*0.58,w))
b2.D(new B.aq(b6*0.8,b7))
b2.D(new B.aq(b6*0.2,b7))
b2.D(new B.br())
v=B.I()
v.sam(D.c2K.aB(0,new B.a3(0,w,0+b6,w+b7*0.22)))
b9.aG(b2,v)
for(w=Math.max(4,A.k.V(80*this.d)),b3=b7+10,b7=c1*b8,v=c1*5,r=0;r<w;++r){b4=A.k.F(b7*(0.05+0.07*C.cZ(r,1))+C.cZ(r,2)*b3,b3)
u=C.cZ(r,3)
s=Math.sin(c1+r)
q=Math.sin(v+r)
this.rR(b9,new B.t(b6*(0.15+0.7*u)+s*b8*0.01,b4),b8*(0.006+0.008*C.cZ(r,4)),A.bM,0.3+0.7*((q+1)/2))}},
bHV(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=e.a,h=e.b,g=Math.min(i,h)
for(w=Math.max(4,A.k.V(55*this.d)),v=d.a,u=f*g,t=0;t<w;++t){s=g*(0.02+0.02*C.cZ(t,1))
r=h+s*4
q=s*2
p=A.k.F(u*(0.12+0.12*C.cZ(t,2))+C.cZ(t,3)*r,r)-q
o=C.cZ(t,4)*i
n=Math.cos(f*(2+3*C.cZ(t,5))+t)
m=Math.abs(n)
l=B.bJ(new B.t(o,p),q,q*A.k.E(m,0.12,1))
$.S()
q=new B.ap(A.R,A.N,A.U,A.V,A.S)
q.sam(new B.a9(A.az,A.aE,A.x,n>0?D.dso:D.cIZ,null,null).aB(0,l))
k=q.G()
v.drawOval(B.bF(l),k)
k.delete()
q=-(s*0.22)
j=new B.ap(A.R,A.N,A.U,A.V,A.S)
j.b=A.a9
j.c=Math.max(0.6,s*0.08)
j.r=D.bpE.gp(0)
k=j.G()
v.drawOval(B.bF(new B.a3(l.a-q,l.b-q,l.c+q,l.d+q)),k)
k.delete()
if(m>0.97)this.rR(d,new B.t(o+s*0.3,p-s*0.4),s*0.9,A.c,0.9)}this.lR(d,e,f,30,A.bM,110)},
c0E(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
this.lR(a3,a4,a5,50,A.c,120)
for(w=Math.max(4,A.k.V(26*this.d)),v=a3.a,u=x.O,t=a5*a2,s=a5*0.6,r=a5*9,q=x.v,p=0;p<w;++p){o=a2*(0.035+0.035*C.cZ(p,1))
n=a1+o*4
m=a1+o*2-A.k.F(t*(0.03+0.04*C.cZ(p,2))+C.cZ(p,3)*n,n)
l=C.cZ(p,4)*a0+Math.sin(s+p)*a2*0.03
k=0.8+0.2*Math.sin(r+p*3)
j=o*2.2
i=$.S()
h=new B.ap(A.R,A.N,A.U,A.V,A.S)
h.sam(new B.c0(A.A,0.5,A.x,d,0,B.a([X.Mh.j(0.45*k),D.afO],u),d,d).aB(0,B.bX(new B.t(l,m),j)))
g=h.G()
v.drawCircle(l,m,j,g)
g.delete()
j=B.a([],q)
f=new B.aF(i.r,A.ag,d,d,j)
i=o*0.5
h=o*0.7
e=m-h
j.push(new B.aX(l-i,e))
j.push(new B.aq(l+i,e))
i=o*0.38
h=m+h
j.push(new B.aq(l+i,h))
j.push(new B.aq(l-i,h))
j.push(new B.br())
j=new B.ap(A.R,A.N,A.U,A.V,A.S)
i=B.ar(D.bfG,A.c,0.2*k)
i.toString
j.sam(new B.a9(A.b3,A.b6,A.x,B.a([D.bkP,i],u),d,d).aB(0,B.bJ(new B.t(l,m),o*1.4,o)))
g=j.G()
j=f.gbw().a.snapshot()
v.drawPath((f.e=new B.cj(j)).a,g)
g.delete()
j=new B.ap(A.R,A.N,A.U,A.V,A.S)
j.r=A.c.j(k).gp(0)
g=j.G()
v.drawCircle(l,m+o*0.55,o*0.12,g)
g.delete()}},
bZh(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
for(w=Math.max(4,A.k.V(40*this.d)),v=a3.a,u=x.O,t=x.v,s=a5*a2,r=a5*1.3,q=a5*6,p=0;p<w;++p){o=a2*(0.02+0.03*C.cZ(p,1))
n=a1+o*4
m=A.k.F(s*(0.05+0.06*C.cZ(p,2))+C.cZ(p,3)*n,n)
l=C.cZ(p,4)
k=Math.sin(r+p)
j=1+0.12*Math.max(0,Math.sin(q+p))
J.bl(v.save())
v.translate(l*a0+k*a2*0.03,a1+o*2-m)
v.rotate(Math.sin(a5+p)*0.3*180/3.141592653589793,0,0)
v.scale(j,j)
m=$.S()
l=B.a([],t)
i=new B.aF(m.r,A.ag,d,d,l)
m=o*0.9
l.push(new B.aX(0,m))
k=-o
h=k*0.2
g=k*1.6
l.push(new B.kV(k*1.8,h,k*0.9,g,0,k*0.55))
l.push(new B.kV(m,g,o*1.8,h,0,m))
l.push(new B.br())
f=D.d2I[A.o.F(p,5)]
m=new B.ap(A.R,A.N,A.U,A.V,A.S)
l=B.ar(f,A.w,0.25)
l.toString
m.sam(new B.c0(A.th,0.5,A.x,d,0,B.a([A.c,f,l],u),H.a3E,d).aB(0,B.bX(A.J,o*1.4)))
e=m.G()
m=i.gbw().a.snapshot()
v.drawPath((i.e=new B.cj(m)).a,e)
e.delete()
v.restore()}this.lR(a3,a4,a5,30,A.ic,130)},
cjv(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=e.a,g=e.b,f=Math.min(h,g)
for(w=Math.max(4,A.k.V(70*this.d)),v=d.a,u=x.v,t=a0*f,s=a0*0.9,r=a0*2,q=0;q<w;++q){p=f*(0.015+0.02*C.cZ(q,1))
o=g+p*4
n=A.k.F(t*(0.05+0.06*C.cZ(q,2))+C.cZ(q,3)*o,o)
m=C.cZ(q,4)
l=Math.sin(s+q*0.7)
J.bl(v.save())
v.translate(m*h+l*f*0.06,n-p*2)
v.rotate((a0*(0.5+C.cZ(q,5))+q)*180/3.141592653589793,0,0)
n=Math.cos(r+q)
v.scale(1,0.4+0.6*Math.abs(n))
n=$.S()
m=B.a([],u)
k=new B.aF(n.r,A.ag,i,i,m)
n=-p
m.push(new B.aX(0,n))
l=n*0.2
m.push(new B.c3(p,l,0,p))
m.push(new B.c3(n,l,0,n))
m.push(new B.br())
n=new B.ap(A.R,A.N,A.U,A.V,A.S)
m=(q&1)===0?D.cD9:D.ddA
n.sam(new B.a9(A.a4,A.a8,A.x,m,i,i).aB(0,B.bX(A.J,p)))
j=n.G()
n=k.gbw().a.snapshot()
v.drawPath((k.e=new B.cj(n)).a,j)
j.delete()
v.restore()}this.lR(d,e,a0,25,A.bM,140)},
bFn(b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=null,a7=b1.a,a8=b1.b,a9=Math.min(a7,a8)
this.lR(b0,b1,b2,40,A.bM,150)
for(w=Math.max(4,A.k.V(16*this.d)),v=b0.a,u=x.v,t=b2*9,s=b2*0.5,r=0;r<w;++r){q=a9*(0.035+0.025*C.cZ(r,1))
p=Math.sin(b2*(0.15+0.1*C.cZ(r,2))+r*2.1)
o=Math.sin(b2*(0.21+0.1*C.cZ(r,3))+r*1.3)
n=0.25+0.75*Math.abs(Math.cos(t+r))
J.bl(v.save())
v.translate(a7*(0.5+0.45*p),a8*(0.5+0.42*o))
v.rotate(Math.sin(s+r)*0.4*180/3.141592653589793,0,0)
for(p=[-1,1],o=q*0.04,m=-q,l=q*1.4,k=0+l,j=m+q*2,i=(r&1)===0,h=q*0.2,g=q*0.8,f=q*1.2,e=m*1.3,d=m*0.1,a0=0;a0<2;++a0){a1=p[a0]
J.bl(v.save())
v.scale(a1*n,1)
a2=$.S()
a3=B.a([],u)
a4=new B.aF(a2.r,A.ag,a6,a6,a3)
a3.push(new B.aX(0,0))
a3.push(new B.kV(f,e,l,d,h,0))
a3.push(new B.kV(q,h,g,q,0,h))
a3.push(new B.br())
a2=new B.ap(A.R,A.N,A.U,A.V,A.S)
a2.sam(new B.a9(A.a4,A.a8,A.x,i?D.ddj:D.dg1,a6,a6).aB(0,new B.a3(0,m,k,j)))
a5=a2.G()
a2=a4.gbw().a.snapshot()
v.drawPath((a4.e=new B.cj(a2)).a,a5)
a5.delete()
a2=new B.ap(A.R,A.N,A.U,A.V,A.S)
a2.b=A.a9
a2.c=Math.max(0.6,o)
a2.r=D.Be.gp(0)
a5=a2.G()
a2=a4.e
v.drawPath((a2==null?a4.e=new B.cj(a4.gbw().a.snapshot()):a2).a,a5)
a5.delete()
v.restore()}$.S()
p=new B.ap(A.R,A.N,A.U,A.V,A.S)
p.r=D.boU.gp(0)
p.c=q*0.1
p.d=A.bB
a5=p.G()
v.drawLine.apply(v,[0,m*0.3,0,q*0.4,a5])
a5.delete()
v.restore()}},
c4C(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=a0.a,g=a0.b,f=Math.min(h,g),e=new B.t(h/2,g/2)
for(w=a1*0.45,v=f*0.012,u=d.a,t=0;t<4;++t){s=A.k.F(w+t/4,1)
r=f*(0.2+0.7*s)
$.S()
q=new B.ap(A.R,A.N,A.U,A.V,A.S)
q.b=A.a9
q.c=v
q.r=D.ayV[t].j((1-s)*0.9).gp(0)
q.z=new B.hg(A.G,v)
p=r*0.3
p=B.bs(B.bJ(e,r,r*1.6),new B.aQ(p,p))
o=q.G()
u.drawRRect(B.ek(p),o)
o.delete()}n=h/28
for(h=n*0.15,w=n*0.7,v=n*0.3,p=f*0.01,m=0;m<28;++m){l=g*(0.05+0.18*(0.5+0.5*Math.sin(a1*(3+C.cZ(m,1)*4)+m)))
k=D.ayV[A.o.F(m,4)]
j=m*n+h
i=g-l
i=B.bs(new B.a3(j,i,j+w,i+l),new B.aQ(v,v))
$.S()
j=new B.ap(A.R,A.N,A.U,A.V,A.S)
j.r=k.j(0.85).gp(0)
j.z=new B.hg(A.ac_,p)
o=j.G()
u.drawRRect(B.ek(i),o)
o.delete()}},
bMu(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
a0/=2
w=a2*0.12
v=new B.t(a0,w)
u=a2*0.09
for(t=Math.max(4,A.k.V(60*this.d)),s=a5*0.6,a1*=0.55,r=a2*0.004,q=a3.a,p=0;p<t;++p){o=C.cZ(p,1)*3.141592653589793*2+s
n=a2*(0.2+0.8*C.cZ(p,2))
m=Math.cos(o)
l=Math.sin(o)
k=[A.c,A.bM,A.nP,A.ds][A.o.F(p,4)]
j=C.cZ(p,3)
$.S()
i=new B.ap(A.R,A.N,A.U,A.V,A.S)
i.r=k.j(0.75).gp(0)
i.a=A.oL
i.z=new B.hg(A.G,r)
h=i.G()
q.drawCircle(a0+m*n*1.4,a1+l*n*0.5,a2*(0.008+0.01*j),h)
h.delete()}a1=$.S()
t=B.I()
t.r=A.aB.gp(0)
t.c=1.2
a3.bo(new B.t(a0,0),new B.t(a0,w-u),t)
t=B.I()
t.r=A.du.gp(0)
a3.ad(v,u,t)
J.bl(q.save())
a1=new B.aF(a1.r,A.ag,null,null,B.a([],x.v))
a1.D(new B.jE(B.bX(v,u)))
a3.mE(0,a1)
g=u/4
for(a1=a5*g*2,t=g*0.9,s=a5*4,f=-4;f<4;++f)for(r=w+f*g,m=r+t,l=f*2.3,e=-6;e<6;++e){j=a0+e*g+A.k.F(a1,g)
i=Math.sin(e*1.7+l+s)
$.S()
d=new B.ap(A.R,A.N,A.U,A.V,A.S)
d.r=B.ar(A.bm,A.c,0.4+0.6*((i+1)/2)).gp(0)
h=d.G()
q.drawRect(B.bF(new B.a3(j,r,j+t,m)),h)
h.delete()}q.restore()
a0=-u*0.4
this.rR(a3,v.a8(0,new B.t(a0,a0)),u*0.6,A.c,0.6+0.4*Math.sin(a5*5))},
cz8(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=a3.a,f=a3.b,e=Math.min(g,f),d=g/2,a0=f*(1.05-0.25*A.ct.av(0,A.k.E(a4/3,0,1))),a1=new B.t(d,a0)
for(w=a2.a,v=a4*0.3,u=x.v,t=0;t<20;++t){s=3.141592653589793+t/19*3.141592653589793+Math.sin(v)*0.03
r=$.S()
q=B.a([],u)
p=new B.aF(r.r,A.ag,h,h,q)
q.push(new B.aX(d,a0))
r=s-0.04
q.push(new B.aq(d+Math.cos(r)*e*1.5,a0+Math.sin(r)*e*1.5))
r=s+0.04
q.push(new B.aq(d+Math.cos(r)*e*1.5,a0+Math.sin(r)*e*1.5))
q.push(new B.br())
r=new B.ap(A.R,A.N,A.U,A.V,A.S)
r.r=A.bM.j(0.1).gp(0)
o=r.G()
r=p.gbw().a.snapshot()
w.drawPath((p.e=new B.cj(r)).a,o)
o.delete()}d=e*0.5
$.S()
a0=B.I()
a0.sam(new B.c0(A.A,0.5,A.x,h,0,B.a([D.bb5.j(0.6),D.afO],x.O),h,h).aB(0,B.bX(a1,d)))
a2.ad(a1,d,a0)
a0=e*0.2
d=B.I()
d.sam(D.eqB.aB(0,B.bX(a1,a0)))
a2.ad(a1,a0,d)
for(d=a4*e*0.03,a0=g*1.4,v=g*0.2,u=e*0.35,r=e*0.07,q=e*0.06,n=e*0.03,m=e*0.18,t=0;t<5;++t){l=A.k.F(d*(1+t*0.3)+C.cZ(t,1)*g*1.4,a0)-v
k=f*(0.15+0.12*t)
j=new B.ap(A.R,A.N,A.U,A.V,A.S)
j.r=A.c.j(0.18).gp(0)
i=B.bJ(new B.t(l,k),r,u)
o=j.G()
w.drawOval(B.bF(i),o)
o.delete()
i=B.bJ(new B.t(l+q,k-n),r,m)
o=j.G()
w.drawOval(B.bF(i),o)
o.delete()}this.lR(a2,a3,a4,20,A.hT,180)},
ciz(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a2.a,d=a2.b,a0=Math.min(e,d)
for(w=a1.a,v=e+10,u=e/30,t=x.v,s=0;s<4;++s){r=$.S()
q=B.a([],t)
p=new B.aF(r.r,A.ag,f,f,q)
q.push(new B.aX(0,d))
for(r=d*(0.72+s*0.07),o=a3*(1+s*0.3),n=0;n<=v;n+=u){m=new B.aq(n,r+Math.sin(n/e*6+o+s)*a0*0.03)
q.push(m)
l=p.f
if(l!=null)m.by(l)
m=p.e
if(m!=null)m.a.delete()
p.e=null}r=new B.aq(e,d)
q.push(r)
o=p.f
if(o!=null)r.by(o)
r=p.e
if(r!=null)r.a.delete()
p.e=null
r=new B.br()
q.push(r)
q=p.f
if(q!=null)r.by(q)
r=p.e
if(r!=null)r.a.delete()
p.e=null
$.S()
r=new B.ap(A.R,A.N,A.U,A.V,A.S)
r.r=B.ar(A.cC,A.jn,s/3).j(0.55).gp(0)
k=r.G()
r=p.e
w.drawPath((r==null?p.e=new B.cj(p.gbw().a.snapshot()):r).a,k)
k.delete()}for(v=Math.max(4,A.k.V(45*this.d)),j=d*0.95,d*=0.9,u=a3*a0,i=0;i<v;++i){h=a0*(0.012+0.02*C.cZ(i,1))
g=d-A.k.F(u*(0.04+0.05*C.cZ(i,2))+C.cZ(i,3)*j,j)
n=C.cZ(i,4)*e+Math.sin(a3+i)*a0*0.02
$.S()
t=new B.ap(A.R,A.N,A.U,A.V,A.S)
t.sam(new B.c0(Ao.xg,0.5,A.x,f,0,D.djB,f,f).aB(0,B.bX(new B.t(n,g),h)))
k=t.G()
w.drawCircle(n,g,h,k)
k.delete()}this.lR(a1,a2,a3,25,A.c,190)},
cxc(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=a0.a,f=a0.b,e=Math.min(g,f)
for(w=Math.max(4,A.k.V(70*this.d)),v=d.a,u=a1*e,t=a1*0.7,s=a1*0.4,r=0;r<w;++r){q=e*(0.01+0.025*C.cZ(r,1))
p=f+q*4
o=A.k.F(u*(0.03+0.05*C.cZ(r,2))+C.cZ(r,3)*p,p)
n=C.cZ(r,4)
m=Math.sin(t+r)
$.S()
l=new B.ap(A.R,A.N,A.U,A.V,A.S)
l.r=A.c.j(0.6+0.4*C.cZ(r,5)).gp(0)
l.c=Math.max(0.8,q*0.12)
l.d=A.bB
J.bl(v.save())
v.translate(n*g+m*e*0.03,o-q*2)
v.rotate((s+r)*180/3.141592653589793,0,0)
for(o=-q,n=o*0.55,m=q*0.25,k=o*0.8,j=o*0.25,i=0;i<6;++i){v.rotate(59.99999999999999,0,0)
h=l.G()
v.drawLine.apply(v,[0,0,0,o,h])
h.delete()
h=l.G()
v.drawLine.apply(v,[0,n,m,k,h])
h.delete()
h=l.G()
v.drawLine.apply(v,[0,n,j,k,h])
h.delete()}v.restore()}this.lR(d,a0,a1,40,A.ey,200)},
c0K(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
a0/=2
a1/=2
w=new B.t(a0,a1)
v=a2*0.4
for(u=[-1,1],t=13*A.k.E(a5/2,0,1),s=a3.a,r=a2*0.05,q=a2*0.02,p=r/2,o=-q,n=0+r,m=o+q*2,l=0;l<2;++l){k=u[l]
for(j=k>0,i=0;i<A.k.dg(t);++i){h=1.5707963267948966+k*(0.35+i/13*2.2)
g=Math.cos(h)
f=Math.sin(h)
J.bl(s.save())
s.translate(a0+g*v,a1+f*v)
s.rotate((h+(j?0.6:2.541592653589793))*180/3.141592653589793,0,0)
g=B.bJ(new B.t(p,0),q,r)
$.S()
f=new B.ap(A.R,A.N,A.U,A.V,A.S)
f.sam(D.c2x.aB(0,new B.a3(0,o,n,m)))
e=f.G()
s.drawOval(B.bF(g),e)
e.delete()
s.restore()}}$.S()
a0=B.I()
a0.b=A.a9
a0.c=a2*0.003
a0.r=D.bg0.gp(0)
a3.ad(w,v*1.08,a0)
d=a5*0.8
this.rR(a3,w.a8(0,new B.t(Math.cos(d)*v*1.08,Math.sin(d)*v*1.08)),a2*0.03,A.c,0.9)
this.lR(a3,a4,a5,40,A.bM,210)},
cqU(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=a9.a,a4=a9.b,a5=Math.min(a3,a4),a6=x.O,a7=[B.a([A.hS,A.hT],a6),B.a([A.oV,A.ic],a6),B.a([A.aC,A.eG],a6)]
for(w=b0*0.3,v=0+a3,u=0+a4,t=a8.a,s=x.dB,r=s.k("bS<ak.E>"),q=s.k("ak.E"),p=b0*1.5,o=x.v,n=x.dN,m=0;m<3;++m){l=$.S()
k=B.a([],o)
j=new B.aF(l.r,A.ag,null,null,k)
i=B.a([],n)
for(l=m*0.2,h=a4*(0.3+l),l=b0*(0.8+l),g=0;g<=40;++g){f=g/40
e=f*a3
d=h+Math.sin(f*5+l+m)*a5*0.1
a0=a5*(0.03+0.03*(0.5+0.5*Math.sin(f*7+p+m)))
f=d-a0
if(g===0){f=new B.aX(e,f)
k.push(f)
a1=j.f
if(a1!=null)f.by(a1)
f=j.e
if(f!=null)f.a.delete()
j.e=null}else{f=new B.aq(e,f)
k.push(f)
a1=j.f
if(a1!=null)f.by(a1)
f=j.e
if(f!=null)f.a.delete()
j.e=null}i.push(new B.t(e,d+a0))}for(l=new B.dx(i,s),l=new B.bS(l,l.gL(0),r);l.C();){h=l.d
if(h==null)h=q.a(h)
h=new B.aq(h.a,h.b)
k.push(h)
f=j.f
if(f!=null)h.by(f)
h=j.e
if(h!=null)h.a.delete()
j.e=null}l=new B.br()
k.push(l)
k=j.f
if(k!=null)l.by(k)
l=j.e
if(l!=null)l.a.delete()
j.e=null
$.S()
l=new B.ap(A.R,A.N,A.U,A.V,A.S)
k=a7[m]
h=k[0]
l.sam(new B.a9(A.a4,A.a8,A.x,B.a([h,k[1],h],a6),Aa.zf,new B.mx(w)).aB(0,new B.a3(0,0,v,u)))
l.r=A.c.j(0.85).gp(0)
a2=l.G()
l=j.e
t.drawPath((l==null?j.e=new B.cj(j.gbw().a.snapshot()):l).a,a2)
a2.delete()}this.lR(a8,a9,b0,40,A.c,220)},
c0s(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=b2.a,a8=b2.b,a9=Math.min(a7,a8),b0=a9*0.09
for(w=[!0,!1],v=b0*2,u=a7+v,t=b0*0.5,s=b1.a,r=b0*0.1,q=b0*0.35,p=b0*0.3,o=-b0*2,n=b3*a9,m=n*0.08,l=a8-b0,k=0;k<2;++k){j=w[k]
i=j?0:l
h=A.k.F(m,v)
g=o+(j?h:-h)
f=i+b0
e=i+q
d=e+p
for(;g<u;g=a1){a0=A.o.F(A.k.bh(g/t),5)
a1=g+t
$.S()
a2=new B.ap(A.R,A.N,A.U,A.V,A.S)
a3=Math.abs(a0)
a2.r=D.a3H[a3].gp(0)
a4=a2.G()
s.drawRect(B.bF(new B.a3(g,i,a1,f)),a4)
a4.delete()
a2=g+r
a5=new B.ap(A.R,A.N,A.U,A.V,A.S)
a5.r=D.a3H[A.o.F(a3+2,5)].gp(0)
a4=a5.G()
s.drawRect(B.bF(new B.a3(a2,e,a2+p,d)),a4)
a4.delete()}}for(w=Math.max(4,A.k.V(36*this.d)),u=b3*3,a6=a8-v,a0=0;a0<w;++a0){a8=A.k.F(n*(0.04+0.05*C.cZ(a0,1))+C.cZ(a0,2)*a6,a6)
v=C.cZ(a0,3)
t=C.cZ(a0,4)
this.rR(b1,new B.t(v*a7,l-a8),a9*(0.01+0.012*t),D.a3H[A.o.F(a0,3)===0?0:4],0.5+0.5*Math.sin(u+a0))}},
cCK(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=a5.a,a2=a5.b,a3=Math.min(a1,a2)
a1/=2
a2/=2
for(w=a6*0.2,v=a3*0.03,u=a4.a,t=0;t<18;++t){s=t/18*3.141592653589793*2+w
r=Math.cos(s)
q=Math.sin(s)
$.S()
p=new B.ap(A.R,A.N,A.U,A.V,A.S)
p.c=v
p.r=A.bM.j(0.06).gp(0)
o=p.G()
u.drawLine.apply(u,[a1,a2,a1+r*a3*1.2,a2+q*a3*1.2,o])
o.delete()}n=a3*0.16
m=a3*0.17
a2=a2-m-m
l=new B.aF($.S().r,A.ag,null,null,B.a([],x.v))
w=n/2
v=a1-w
l.D(new B.aX(v,a2))
w=a1+w
l.D(new B.aq(w,a2))
r=a2+m*0.75
q=n*0.1
p=a1+q
k=a2+m*0.8
l.D(new B.c3(w,r,p,k))
w=a2+m*0.95
l.D(new B.aq(p,w))
p=n*0.3
j=a2+m
l.D(new B.aq(a1+p,j))
l.D(new B.aq(a1-p,j))
q=a1-q
l.D(new B.aq(q,w))
l.D(new B.aq(q,k))
l.D(new B.c3(v,r,v,a2))
l.D(new B.br())
r=v+n
for(w=[-1,1],q=a3*0.012,p=a2+m*0.25,k=n*0.4,i=m*0.35,h=0;h<2;++h){g=w[h]
f=B.bJ(new B.t(a1+g*n*0.5,p),i,k)
e=g<0?1.5707963267948966:-1.5707963267948966
d=new B.ap(A.R,A.N,A.U,A.V,A.S)
d.b=A.a9
d.c=q
d.r=A.ay.gp(0)
o=d.G()
u.drawArc.apply(u,[B.bF(f),e*57.29577951308232,180,!1,o])
o.delete()}a1=B.I()
a1.sam(new B.a9(A.a4,A.a8,A.x,D.dme,A.axW,null).aB(0,new B.a3(v,a2,r,j)))
a4.aG(l,a1)
a0=A.k.F(a6*0.6,1.4)
if(a0<1)this.rR(a4,new B.t(v+(r-v)*a0,a2+(j-a2)*0.3),a3*0.035,A.c,Math.sin(a0*3.141592653589793))
this.bIx(a4,a5,a6,60)},
bIx(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m,l=e.a,k=e.b,j=Math.min(l,k)
for(w=Math.max(4,A.k.V(g*this.d)),v=k+20,k=f*j,u=d.a,t=f*3,s=j*0.012,r=j*0.02,q=f*4,p=0;p<w;++p){o=A.k.F(k*(0.1+0.1*C.cZ(p,31))+C.cZ(p,32)*v,v)
n=C.cZ(p,33)
J.bl(u.save())
u.translate(n*l,o-10)
u.rotate((t+p)*180/3.141592653589793,0,0)
o=B.bJ(A.J,r*A.k.E(Math.abs(Math.cos(q+p)),0.2,1),s)
$.S()
n=new B.ap(A.R,A.N,A.U,A.V,A.S)
n.r=D.Qo[A.o.F(p,5)].gp(0)
m=n.G()
u.drawRect(B.bF(o),m)
m.delete()
u.restore()}},
cuX(a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a1.a,d=Math.min(e,a1.b)
this.lR(a0,a1,a2,70,A.c,250)
for(w=Math.max(4,A.k.V(12*this.d)),v=-d*0.1,u=d*1.4,t=-0.6*u,s=x.O,r=d*0.006,q=a0.a,p=d*0.018,o=0;o<w;++o){n=1.6+C.cZ(o,1)*1.6
m=A.k.F(a2+C.cZ(o,2)*n,n)/n
l=e*(C.cZ(o*7+A.k.bh((a2+C.cZ(o,2)*n)/n),3)*1.2-0.1)
k=l+t*m
j=v+u*m
i=new B.t(k,j)
h=Math.max(0,m-0.18)
l+=t*h
h=v+u*h
$.S()
g=new B.ap(A.R,A.N,A.U,A.V,A.S)
g.sam(new B.a9(A.a4,A.a8,A.x,B.a([A.c.j(0),A.bM],s),null,null).aB(0,B.rH(new B.t(l,h),i)))
g.c=r
g.d=A.bB
f=g.G()
q.drawLine.apply(q,[l,h,k,j,f])
f.delete()
this.rR(a0,i,p,A.c,1-m)}},
bDB(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=e.a,i=e.b,h=Math.min(j,i)
for(w=Math.max(4,A.k.V(36*this.d)),v=f*0.2,u=f*0.17,t=f*0.8,s=d.a,r=0;r<w;++r){q=h*(0.03+0.09*C.cZ(r,1))
p=A.k.F(C.cZ(r,2)*j+Math.sin(v+r)*h*0.12,j)
o=A.k.F(C.cZ(r,3)*i+Math.cos(u+r*1.3)*h*0.1,i)
n=0.12+0.18*(0.5+0.5*Math.sin(t+r))
$.S()
m=new B.ap(A.R,A.N,A.U,A.V,A.S)
l=A.o.F(r,5)
m.r=D.aAx[l].j(n).gp(0)
m.a=A.oL
m.z=new B.hg(A.G,q*0.12)
k=m.G()
s.drawCircle(p,o,q,k)
k.delete()
m=new B.ap(A.R,A.N,A.U,A.V,A.S)
m.b=A.a9
m.c=Math.max(0.6,q*0.05)
m.r=D.aAx[l].j(n*1.4).gp(0)
k=m.G()
s.drawCircle(p,o,q,k)
k.delete()}},
cgb(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=e.a,i=e.b,h=Math.min(j,i)
j/=2
i/=2
for(w=d.a,v=f*0.05,u=h*0.003,t=h*0.012,s=h*0.03,r=h*0.02,q=0;q<4;++q){J.bl(w.save())
w.translate(j,i)
w.rotate((q*3.141592653589793/4+v)*180/3.141592653589793,0,0)
p=B.bJ(A.J,h*(0.28+q*0.05),h*(0.8+q*0.12))
$.S()
o=new B.ap(A.R,A.N,A.U,A.V,A.S)
o.b=A.a9
o.c=u
o.r=A.bM.j(0.45).gp(0)
n=o.G()
w.drawOval(B.bF(p),n)
n.delete()
m=f*(0.9+q*0.25)+q
o=Math.cos(m)*(p.c-p.a)/2
l=Math.sin(m)*(p.d-p.b)/2
k=new B.ap(A.R,A.N,A.U,A.V,A.S)
k.r=A.hT.gp(0)
n=k.G()
w.drawCircle(o,l,t,n)
n.delete()
k=new B.ap(A.R,A.N,A.U,A.V,A.S)
k.r=A.hS.j(0.4).gp(0)
k.z=new B.hg(A.G,r)
n=k.G()
w.drawCircle(o,l,s,n)
n.delete()
w.restore()}this.lR(d,e,f,45,A.bM,270)},
bQI(a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=a6.a,a3=a6.b,a4=Math.min(a2,a3)
for(w=Math.max(4,A.k.V(22*this.d)),v=a5.a,u=x.O,t=a7*0.3,s=a2*0.94,r=a2*0.06,q=a3*0.92,p=a3*0.08,o=0;o<w;++o){n=A.o.F(o,4)
m=C.cZ(o,1)
A:{if(0===n){l=new B.t(m*a2,p)
break A}if(1===n){l=new B.t(m*a2,q)
break A}if(2===n){l=new B.t(r,m*a3)
break A}l=new B.t(s,m*a3)
break A}k=A.k.F(a7+C.cZ(o,2)*4,4)/4
j=A.er.av(0,A.k.E(k/0.4,0,1))
i=k>0.85?1-(k-0.85)/0.15:1
h=a4*(0.03+0.03*C.cZ(o,3))*(j*i)
if(h<=0.5)continue
g=D.dai[A.o.F(o,5)]
J.bl(v.save())
v.translate(l.a,l.b)
v.rotate((t+o)*180/3.141592653589793,0,0)
for(l=-h*0.7,j=h*0.7,i=h*1.3,f=h*1.4,e=0;e<6;++e){v.rotate(59.99999999999999,0,0)
d=B.bJ(new B.t(0,l),i,j)
$.S()
a0=new B.ap(A.R,A.N,A.U,A.V,A.S)
a0.sam(new B.a9(A.b3,A.b6,A.x,B.a([A.c,g],u),null,null).aB(0,B.bJ(new B.t(0,l),f,h)))
a1=a0.G()
v.drawOval(B.bF(d),a1)
a1.delete()}$.S()
l=new B.ap(A.R,A.N,A.U,A.V,A.S)
l.r=A.hS.gp(0)
a1=l.G()
v.drawCircle(0,0,h*0.3,a1)
a1.delete()
v.restore()}this.lR(a5,a6,a7,30,A.hT,280)},
c4k(a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=a6.a,a3=a6.b,a4=Math.min(a2,a3)
for(w=[0,1],v=a4*0.008,u=a5.a,t=a7*0.6,s=a3/2,r=0;r<2;++r){q=w[r]
for(p=q===0,o=a2*q,n=0;n<4;++n){m=A.k.F(t+n/4,1)
l=B.bX(new B.t(o,s),a4*(0.1+0.6*m))
k=p?-1.0471975511965976:2.0943951023931953
$.S()
j=new B.ap(A.R,A.N,A.U,A.V,A.S)
j.b=A.a9
j.c=v
j.r=D.ax_[n].j((1-m)*0.8).gp(0)
i=j.G()
u.drawArc.apply(u,[B.bF(l),k*57.29577951308232,119.99999999999999,!1,i])
i.delete()}}for(w=Math.max(4,A.k.V(26*this.d)),h=a3+30,v=a7*a4,t=a7*1.5,g=0;g<w;++g){f=a3-A.k.F(v*(0.06+0.06*C.cZ(g,1))+C.cZ(g,2)*h,h)
e=C.cZ(g,3)*a2+Math.sin(t+g)*a4*0.04
d=a4*(0.015+0.012*C.cZ(g,4))
a0=D.ax_[A.o.F(g,4)]
$.S()
a1=new B.ap(A.R,A.N,A.U,A.V,A.S)
a1.r=a0.gp(0)
J.bl(u.save())
u.translate(e,f)
u.rotate(-17.188733853924695,0,0)
s=B.bJ(A.J,d,d*1.5)
i=a1.G()
u.drawOval(B.bF(s),i)
i.delete()
u.restore()
s=e+d*0.65
p=f-d*2.6
o=new B.ap(A.R,A.N,A.U,A.V,A.S)
o.r=a0.gp(0)
o.c=Math.max(1,d*0.18)
i=o.G()
u.drawLine.apply(u,[s,f,s,p,i])
i.delete()
if((g&1)===0){o=new B.ap(A.R,A.N,A.U,A.V,A.S)
o.r=a0.gp(0)
o.c=Math.max(1,d*0.3)
i=o.G()
u.drawLine.apply(u,[s,p,e+d*1.6,f-d*2,i])
i.delete()}}},
c2L(a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=a8.a,a5=a8.b,a6=Math.min(a4,a5)
a4/=2
a5/=2
w=new B.t(a4,a5)
for(v=a7.a,u=a6*0.004,t=a6*0.003,s=x.v,r=a9*0.08,q=0;q<4;++q){p=8+q*4
o=a6*(0.2+q*0.11)
n=(q&1)===0?1:-1
J.bl(v.save())
v.translate(a4,a5)
v.rotate(r*n*(1+q*0.3)*180/3.141592653589793,0,0)
for(m=-o,l=m*1.16,k=q/3,j=m*0.12,i=m*0.82,h=o*0.12,g=m*1.12,f=6.283185307179586/p*180/3.141592653589793,e=0;e<p;++e){v.rotate(f,0,0)
d=$.S()
a0=B.a([],s)
a1=new B.aF(d.r,A.ag,a3,a3,a0)
a0.push(new B.aX(0,i))
a0.push(new B.c3(h,m,0,g))
a0.push(new B.c3(j,m,0,i))
d=new B.ap(A.R,A.N,A.U,A.V,A.S)
d.b=A.a9
d.c=t
d.r=B.ar(A.bM,A.nP,k).j(0.7).gp(0)
a2=d.G()
d=a1.gbw().a.snapshot()
v.drawPath((a1.e=new B.cj(d)).a,a2)
a2.delete()
d=new B.ap(A.R,A.N,A.U,A.V,A.S)
d.r=A.hT.j(0.8).gp(0)
a2=d.G()
v.drawCircle(0,l,u,a2)
a2.delete()}v.restore()}a4=a6*0.17
$.S()
a5=B.I()
a5.sam(new B.c0(A.A,0.5,A.x,a3,0,B.a([A.hS.j(0.25),D.Y9],x.O),a3,a3).aB(0,B.bX(w,a4)))
a7.ad(w,a4,a5)
this.lR(a7,a8,a9,30,A.bM,300)},
cxj(b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=b1.a,a8=b1.b,a9=Math.min(a7,a8)
for(w=[-1,1],v=70*this.d,u=a9*0.003,t=b0.a,s=a7/2,a8*=0.95,r=b2*1.3,q=a9*0.008,p=a9*0.06,o=x.O,n=0;n<2;++n){m=w[n]
l=s+m*a7*0.34
k=Math.sin(r+m)*0.12
j=l+(Math.sin(k)*a9*0.45-m*a9*0.08)
i=a8+-Math.cos(k)*a9*0.45
$.S()
h=new B.ap(A.R,A.N,A.U,A.V,A.S)
h.r=A.bm.gp(0)
h.c=q
h.d=A.bB
g=h.G()
t.drawLine.apply(t,[l,a8,j,i,g])
g.delete()
l=new B.ap(A.R,A.N,A.U,A.V,A.S)
l.sam(new B.c0(A.A,0.5,A.x,null,0,B.a([A.hT,A.hS.j(0.6),D.Y9],o),null,null).aB(0,B.bX(new B.t(j,i),p)))
g=l.G()
t.drawCircle(j,i,p,g)
g.delete()
for(l=Math.max(4,A.k.V(v)),f=0;f<l;++f){e=0.5+0.4*C.cZ(f,1)
d=A.k.F(b2+C.cZ(f,2)*e,e)/e
a0=A.k.bh((b2+C.cZ(f,2)*e)/e)
a1=C.cZ(f*31+a0,3)*3.141592653589793*2
a2=a9*(0.06+0.16*C.cZ(f*17+a0,4))
h=Math.cos(a1)
a3=Math.sin(a1)
a4=j+Math.cos(a1)*a2*d
a5=i+Math.sin(a1)*a2*d
a6=new B.ap(A.R,A.N,A.U,A.V,A.S)
a6.r=B.ar(A.hT,A.aD,d).j(1-d).gp(0)
a6.c=Math.max(0.8,u)
a6.d=A.bB
a6.a=A.oL
g=a6.G()
t.drawLine.apply(t,[j+h*a2*d*0.6,i+a3*a2*d*0.6,a4,a5,g])
g.delete()
if(d>0.6){h=a1+0.7
a3=Math.cos(h)
h=Math.sin(h)
g=a6.G()
t.drawLine.apply(t,[a4,a5,a4+a3*a2*0.15,a5+h*a2*0.15,g])
g.delete()
h=a1-0.7
a3=Math.cos(h)
h=Math.sin(h)
g=a6.G()
t.drawLine.apply(t,[a4,a5,a4+a3*a2*0.15,a5+h*a2*0.15,g])
g.delete()}}}this.lR(b0,b1,b2,35,A.bM,310)},
bHb(a9,b0,b1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=b0.a,a8=b0.b
this.aTn(a9,new B.au(a7,a8*0.75),b1*0.9)
w=Math.min(a7,a8)
for(v=w*0.01,u=w*0.008,t=w*0.012,s=w*0.016,r=a9.a,q=w*0.025,p=w*0.035,o=0,n=0;o<a7;){m=w*(0.08+0.1*C.cZ(n,1))
l=a8*(0.14+0.24*C.cZ(n,2))
k=a8-l
j=new B.a3(o,k,o+m,k+l)
$.S()
i=new B.ap(A.R,A.N,A.U,A.V,A.S)
i.sam(D.c3t.aB(0,j))
h=i.G()
r.drawRect(B.bF(j),h)
h.delete()
g=A.k.bh(m/q)
f=A.k.bh(l/p)
for(i=o+u,k+=t,e=n*50,d=0;d<g;++d)for(a0=i+d*w*0.025,a1=a0+t,a2=e+d,a3=d*1.7,a4=0;a4<f;++a4){if(!(Math.sin(b1*(0.3+C.cZ(a2,a4))+a3+a4*2.3+n)>0.2))continue
a5=k+a4*w*0.035
$.S()
a6=new B.ap(A.R,A.N,A.U,A.V,A.S)
a6.r=A.bM.j(0.85).gp(0)
h=a6.G()
r.drawRect(B.bF(new B.a3(a0,a5,a1,a5+s)),h)
h.delete()}o+=m+v;++n}},
aw(d){return d.b!==this.b||d.d!==this.d}}
C.b_E.prototype={
B(d){var w,v=null,u=new C.cc5(),t=new C.cc7(this,u,d),s=B.a([u.$4$child$label$onTap$selected(B.p(v,D.apO,A.f,A.c.j(0.05),v,v,v,v,v,v,v,v,v,v),"None",new C.cc6(this),this.c.a.length===0)],x.p)
for(w=0;w<32;++w)s.push(t.$1(D.Hv[w]))
return B.bW(A.bE,s,A.bq,v,12,10)}}
C.ZC.prototype={
U(){return new C.aAq()}}
C.aAq.prototype={
gvP(){var w=this.d
return w===$?this.d=this.a.c:w},
gb_x(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new B.as(new B.bb(w.b,A.b4,A.aO),$.ax())}return v},
gay3(){var w,v,u=this,t=u.f
if(t===$){w=u.a.c.gaLu()
v=$.ax()
u.f!==$&&B.bG()
t=u.f=new B.as(new B.bb(w,A.b4,A.aO),v)}return t},
q(){var w=this.gb_x(0),v=$.ax()
w.S$=v
w.P$=0
w=this.gay3()
w.S$=v
w.P$=0
this.a3()},
a_v(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$a_v=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hV().Ce(90,700,700,A.eK),$async$a_v)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fk(),$async$a_v)
case 8:p=e
o=q.b.toLowerCase()
n=J.ai8(o,".png")?"image/png":"image/jpeg"
r.m(new C.dcz(r,n,p))
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
return B.i($async$a_v,v)},
b_w(d){var w=null,v=A.c.j(0.07)
return B.bv(w,new B.b5(4,B.m(12),A.a0),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,A.Ux,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=C.ahc(p.gvP().a)
if(n==null)n=A.d.gI(D.Hv)
w=p.gvP()
v=p.r
u=x.p
v=B.E(new B.an(A.a_,o,A.aa,A.t,B.a([B.bT(0,new C.NJ(p.gvP(),!1,!0,new B.cs(w.a+v,x.W)),0,0,0),B.ao(o,B.I3(A.mM,new C.dcE(d),B.nI(o,A.aW,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o),o,o,8,o,8,o),B.ao(o,B.I3(D.bNH,new C.dcF(p),B.nI(o,A.aW,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),"Play again"),o,o,o,8,8,o)],u),o),1)
w=B.d(n.b,o,o,o,o,o,o,E.aSK,o,o,o)
t=B.E(B.aN(o,A.Z,!1,o,!0,A.t,o,B.aO(),p.gb_x(0),o,o,o,o,o,2,p.b_w("Big words"),A.y,!0,o,!0,o,!1,o,A.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.dcG(p),o,o,o,!1,o,o,!1,o,!0,o,A.ab,o,o,o,o,o,o,o,o,o,o,o,A.fQ,!0,A.a3,o,A.ao,o,o,o,o),1)
s=A.c.j(0.07)
r=B.J(A.hS.j(0.6),A.r,1)
if(p.gvP().d.length===0)q=D.bR4
else{q=C.hkL(p.gvP().d)
if(q==null)q=new Uint8Array(0)
q=B.hT(B.fP(q,A.A,o,o,A.cf,A.bV,!1,o,!1,o,o),A.aq)}r=B.a([t,A.ac,B.aB(o,B.p(o,q,A.f,o,o,new B.o(s,o,r,o,o,o,A.a6),o,48,o,o,o,o,o,48),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gca7(),o,o,o,o,o,o,!1,A.a5)],u)
if(p.gvP().d.length!==0)r.push(B.aJ(o,o,o,o,D.a2o,o,o,o,new C.dcH(p),o,o,o,o,"Remove logo",o))
return B.c6(o,A.w,B.bn(!0,B.x(B.a([v,B.p(o,B.x(B.a([w,A.W,B.B(r,A.m,o,A.e,A.j,0,o,o),A.O,B.aN(o,A.Z,!1,o,!0,A.t,o,B.aO(),p.gay3(),o,o,o,o,o,2,p.b_w("Line under it"),A.y,!0,o,!0,o,!1,o,A.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.dcI(p),o,o,o,!1,o,o,!1,o,!0,o,A.ab,o,o,o,o,o,o,o,o,o,o,o,A.df,!0,A.a3,o,A.ao,o,o,o,o),A.ad,B.dj(D.bPY,D.fOJ,new C.dcJ(p,d),B.bp(A.ay,o,o,o,A.w,o,A.cj,o,new B.b7(B.m(14),A.a0),o,o,o))],u),A.aj,o,A.e,A.Q,0,A.p),A.f,o,o,D.b3E,o,o,o,o,A.G1,o,o,o)],u),A.m,o,A.e,A.j,0,A.p),!0,!1,A.af,!0,!0),o,!1,!1,o,o)}}
C.aLZ.prototype={
q(){var w=this,v=w.aa$
if(v!=null)v.a6(0,w.gbE())
w.aa$=null
w.a3()},
aV(){this.b6()
this.b3()
this.bF()}}
C.ZX.prototype={
U(){return new C.bgL(new B.as(A.at,$.ax()))}}
C.bgL.prototype={
q(){var w=this.d
w.S$=$.ax()
w.P$=0
this.a3()},
B(d){var w,v,u,t,s,r,q,p,o=null,n=B.P(d).ax.a===A.I,m=n?A.c:A.M,l=n?A.aR:A.al,k=B.aI(d,A.bX,x.w).w,j=n?A.M:A.c,i=B.m(28),h=B.J(n?A.bz:A.aL,A.r,1),g=x.p,f=B.B(B.a([B.E(B.d("Choose an icon",o,o,o,o,o,o,B.l(o,o,m,o,o,o,o,o,o,o,o,19,o,o,A.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),1),B.aJ(o,o,o,o,B.X(A.cx,l,o,o,o,o),o,o,o,new C.djk(d),o,o,o,o,o,o)],g),A.m,o,A.e,A.j,0,o,o),e=B.a([],g)
for(w=0;w<5;++w){v=D.cUD[w]
u=B.a([],g)
for(t=J.aV(v.b);t.C();){s=t.gR(t)
r=new B.aQ(12,12)
q=new B.aQ(12,12)
p=n?A.c.j(0.06):A.bN
u.push(B.aM(!1,new B.bk(r,r,r,r),!0,B.p(A.A,new B.y(s,o,A.pw,o,o,o,o,o,o,o,o,o),A.f,o,o,new B.o(p,o,o,new B.bk(q,q,q,q),o,o,A.n),o,44,o,o,o,o,o,44),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.djl(this,s),o,o,o,o,o,o,o))}A.d.v(e,B.a([new B.D(A.hH,new B.y(v.a.toUpperCase(),o,new B.F(!0,l,o,o,o,o,10.5,A.u,o,1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o,o,o,o,o,o,o),o),new B.Cu(A.bE,6,6,A.bq,u,o)],g))}e.push(A.aA)
e.push(B.d("YOUR OWN",o,o,o,o,o,o,B.l(o,o,l,o,o,o,o,o,o,o,o,10.5,o,o,A.u,o,o,!0,o,1,o,o,o,o,o,o),o,o,o))
e.push(A.O)
v=B.l(o,o,m,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
u=n?A.bo:A.aP
e.push(B.B(B.a([B.E(B.aN(o,A.Z,!1,o,!0,A.t,o,B.aO(),this.d,o,o,o,o,o,2,B.bv(o,new B.b5(4,B.m(14),A.a0),o,o,o,o,o,o,!0,o,o,o,o,o,o,u,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,"Type or paste any icon",o,o,o,o,o,!0,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),A.y,!0,o,!0,o,!1,o,A.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,A.ab,o,o,o,o,o,o,o,o,o,o,o,v,!0,A.a3,o,A.ao,o,o,o,o),1),A.ac,B.bI(A.aTJ,new C.djm(this),o)],g),A.m,o,A.e,A.j,0,o,o))
e.push(A.O)
return B.bn(!0,B.p(o,B.x(B.a([f,new B.ds(1,A.cn,B.ct(e,o,o,o,o,A.ah,!0),o)],g),A.E,o,A.e,A.Q,0,A.p),A.f,o,new B.aZ(0,1/0,0,k.a.b*0.8),new B.o(j,o,h,i,o,o,A.n),o,o,o,A.u_,A.a_7,o,o,o),!0,!1,A.af,!0,!0)}}
C.bg6.prototype={
a1(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=new B.e9()
a2.d3(this.c)
w=this.b
v=w/6.283185307179586
$.S()
u=B.I()
u.z=A.S0
t=B.I()
for(s=a3.a,r=this.d,q=w*2,p=a4.a,o=a4.b,n=0;n<46;++n){m=a2.ah()
l=a2.ah()
k=a2.ah()
j=0.8+a2.ah()*2.2
i=Math.sin(w*(3+a2.au(4))+n)
h=A.k.F(l-v*(0.4+k*0.9),1)
k=(m+Math.sin(q+n)*0.012)*p
g=h*o
if(a2.ah()<0.25){f=B.ar(r,A.c,0.85)
f.toString}else f=r
e=f.j(A.k.E(0.35+i*0.35,0.05,0.85))
u.r=e.j(e.a*0.5).gp(0)
d=u.G()
s.drawCircle(k,g,j*2.4,d)
d.delete()
t.r=e.gp(0)
d=t.G()
s.drawCircle(k,g,j,d)
d.delete()
if(i>0.85&&j>2){a0=j*4*(i-0.85)/0.15
$.S()
a1=new B.ap(A.R,A.N,A.U,A.V,A.S)
a1.r=e.gp(0)
a1.c=1
d=a1.G()
s.drawLine.apply(s,[k-a0,g,k+a0,g+0,d])
d.delete()
d=a1.G()
s.drawLine.apply(s,[k,g-a0,k+0,g+a0,d])
d.delete()}}},
aw(d){return d.b!==this.b}}
C.bfP.prototype={
a1(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null,a1=B.bs(new B.a3(0,0,0+a7.a,0+a7.b),A.kL),a2=this.b,a3=Math.sin(a2*2),a4=$.S(),a5=B.I()
a5.b=A.a9
a5.c=6
w=this.c
a5.r=w.j(0.12+(0.5+a3*0.5)*0.18).gp(0)
a5.z=A.mQ
a6.az(a1,a5)
a5=x.v
a4=new B.aF(a4.r,A.ag,a0,a0,B.a([],a5))
a4.D(new B.iN(a1))
v=new B.SY(new B.tl(B.xl(a4),!1,B.a([],x.X))).gI(0)
a4=v.a
a3=v.b
a4.ij()
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
$.S()
j=new B.ap(A.R,A.N,A.U,A.V,A.S)
j.b=A.a9
j.d=A.bB
j.c=1.5+2*m/10
j.r=w.j(k).gp(0)
i=A.k.F(n-p*(1-m/10),t)
h=A.k.F(n-p*(1-k),t)
k=a2.b
if(i<=h){k=new B.aF(r,k,a0,new B.cw([v,i,h,!0]),B.a([],a5))
g=j.G()
f=k.gbw().a.snapshot()
q.drawPath((k.e=new B.cj(f)).a,g)
g.delete()}else{k=new B.aF(r,k,a0,new B.cw([v,i,t,!0]),B.a([],a5))
g=j.G()
f=k.gbw().a.snapshot()
q.drawPath((k.e=new B.cj(f)).a,g)
g.delete()
k=new B.aF(r,a2.b,a0,new B.cw([v,0,h,!0]),B.a([],a5))
g=j.G()
f=k.gbw().a.snapshot()
q.drawPath((k.e=new B.cj(f)).a,g)
g.delete()}}a4.ij()
e=u[a3].H9(n).a
$.S()
k=new B.ap(A.R,A.N,A.U,A.V,A.S)
k.r=w.gp(0)
k.z=A2.pk
g=k.G()
k=e.a
f=e.b
q.drawCircle(k,f,5,g)
g.delete()
d=new B.ap(A.R,A.N,A.U,A.V,A.S)
d.r=A.c.gp(0)
g=d.G()
q.drawCircle(k,f,2,g)
g.delete()}},
aw(d){return d.b!==this.b}}
C.boE.prototype={
a1(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=new B.e9()
e.d3(this.c)
w=a0.a*(0.2+e.ah()*0.6)
v=e.hh()?-0.1:1.1
v=a0.b*v
u=new B.t(w,v)
t=a0.gan6()*1.4
for(s=this.d,r=x.O,q=d.a,p=this.b,o=p*0.25,p*=2,n=x.v,m=0;m<14;++m){l=o+m*3.141592653589793*2/14
k=0.06+0.04*Math.sin(p+m)
j=$.S()
i=B.a([],n)
h=new B.aF(j.r,A.ag,f,f,i)
i.push(new B.aX(w,v))
j=l-k
i.push(new B.aq(w+Math.cos(j)*t,v+Math.sin(j)*t))
j=l+k
i.push(new B.aq(w+Math.cos(j)*t,v+Math.sin(j)*t))
i.push(new B.br())
j=new B.ap(A.R,A.N,A.U,A.V,A.S)
j.sam(B.to(u,t,B.a([s.j(0.16),s.j(0)],r),f,A.x,f,f,0))
j.z=A.lJ
g=j.G()
j=h.gbw().a.snapshot()
q.drawPath((h.e=new B.cj(j)).a,g)
g.delete()}},
aw(d){return d.b!==this.b}}
C.baG.prototype={
a1(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=new B.e9()
a0.d3(this.c*7+3)
for(w=a1.a,v=this.d,u=a2.a,t=Math.abs(u),s=a2.b,r=Math.abs(s),q=this.b,p=q*0.8,o=q*2,n=0;n<16;++n){m=a0.ah()
l=a0.ah()
k=Math.min(t,r)*(0.03+a0.ah()*0.09)
j=a0.ah()*3.141592653589793*2
i=(m+Math.sin(q+j)*0.04)*u
h=(l+Math.cos(p+j)*0.05)*s
g=0.08+0.1*(0.5+0.5*Math.sin(o+j))
if((n&1)===0)f=v
else{e=B.ar(v,A.c,0.6)
e.toString
f=e}$.S()
e=new B.ap(A.R,A.N,A.U,A.V,A.S)
e.r=f.j(g).gp(0)
e.z=new B.hg(A.G,k*0.35)
d=e.G()
w.drawCircle(i,h,k,d)
d.delete()
e=new B.ap(A.R,A.N,A.U,A.V,A.S)
e.b=A.a9
e.c=1
e.r=B.ar(f,A.c,0.5).j(g*0.9).gp(0)
d=e.G()
w.drawCircle(i,h,k,d)
d.delete()}},
aw(d){return d.b!==this.b}}
C.bak.prototype={
a1(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=new B.e9()
a0.d3(this.c+11)
for(w=this.b,v=a2.b,u=v*0.04,t=a1.a,s=this.d,r=v*0.08,q=a2.a,p=q/24,o=w*2,n=x.v,m=0;m<3;++m){l=v*(0.25+m*0.25+(a0.ah()-0.5)*0.1)
k=v*(0.06+a0.ah()*0.05)
j=a0.ah()*3.141592653589793*2
i=$.S()
h=B.a([],n)
g=new B.aF(i.r,A.ag,null,null,h)
h.push(new B.aX(0,l))
for(f=0;f<=q;f+=p){i=f/q
i=new B.aq(f,l+Math.sin(i*3.141592653589793*2+w+j)*k+Math.sin(i*7+o)*k*0.25)
h.push(i)
e=g.f
if(e!=null)i.by(e)
i=g.e
if(i!=null)i.a.delete()
g.e=null}$.S()
i=new B.ap(A.R,A.N,A.U,A.V,A.S)
i.b=A.a9
i.c=r
i.d=A.bB
if(m===1){h=B.ar(s,A.c,0.5)
h.toString}else h=s
i.r=h.j(0.07+0.04*Math.sin(w+m)).gp(0)
i.z=new B.hg(A.G,u)
d=i.G()
i=g.e
t.drawPath((i==null?g.e=new B.cj(g.gbw().a.snapshot()):i).a,d)
d.delete()}},
aw(d){return d.b!==this.b}}
C.bvB.prototype={
a1(d,e){var w,v,u=new B.a3(0,0,0+e.a,0+e.b),t=Math.sin(this.b)
$.S()
w=B.I()
t=(0.5+0.5*t)*0.12
w.sam(new B.c0(A.A,0.95,A.x,null,0,B.a([A.K,A.w.j(0.28+t)],x.O),D.d1t,null).aB(0,u))
d.aP(u,w)
w=u.cq(-3)
v=B.I()
v.b=A.a9
v.c=2
v.r=this.c.j(0.1+t).gp(0)
v.z=A.lJ
d.aP(w,v)},
aw(d){return d.b!==this.b}}
C.bsC.prototype={
a1(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this.b/6.283185307179586*3
for(w=a1.a,v=Math.abs(w),u=a1.b,t=Math.abs(u),s=this.d,r=a0.a,q=this.c*31+A.k.bh(d)*7,p=0;p<7;++p){o=new B.e9()
o.d3(q+p)
n=o.ah()*w
m=o.ah()*u
l=Math.sin(A.k.F(A.k.F(d,1)+p/7,1)*3.141592653589793)
if(l<0.05)continue
k=Math.min(v,t)*(0.02+o.ah()*0.025)*l
j=B.ar(s,A.c,0.7).j(l)
$.S()
i=new B.ap(A.R,A.N,A.U,A.V,A.S)
i.r=j.gp(0)
i.c=1.4
i.d=A.bB
h=i.G()
r.drawLine.apply(r,[n-k,m,n+k,m+0,h])
h.delete()
g=k*1.4
h=i.G()
r.drawLine.apply(r,[n,m-g,n+0,m+g,h])
h.delete()
g=k*0.45
f=n-g
e=n+g
i.c=0.8
h=i.G()
r.drawLine.apply(r,[f,m-g,e,m+g,h])
h.delete()
g=-k*0.45
h=i.G()
r.drawLine.apply(r,[f,m-g,e,m+g,h])
h.delete()
g=new B.ap(A.R,A.N,A.U,A.V,A.S)
g.r=A.c.j(l*0.9).gp(0)
g.z=new B.hg(A.G,k*0.3)
h=g.G()
r.drawCircle(n,m,k*0.35,h)
h.delete()}},
aw(d){return d.b!==this.b}}
C.brL.prototype={
a1(d,e){var w,v,u=this.b/6.283185307179586*2.2-0.6
if(u<-0.3||u>1.3)return
w=new B.a3(0,0,0+e.a,0+e.b)
$.S()
v=B.I()
v.a=A.oL
v.sam(new B.a9(A.az,A.aE,A.x,B.a([A.K,B.ar(this.c,A.c,0.6).j(0.16),A.K],x.O),B.a([A.k.E(u-0.15,0,1),A.k.E(u,0,1),A.k.E(u+0.15,0,1)],x.x),null).aB(0,w))
d.aP(w,v)},
aw(d){return d.b!==this.b}}
C.bf9.prototype={
a1(d,e){var w,v,u,t,s,r=e.gdC(),q=0.55+0.45*Math.sin(this.b)
$.S()
w=B.I()
w.b=A.a9
w.c=1.4
w.d=A.bB
v=this.d
w.r=v.j(0.55+q*0.35).gp(0)
u=B.I()
u.b=A.a9
u.c=4
u.r=v.j(0.12*q).gp(0)
u.z=A.uG
r=new C.dcg(this,r*0.16,d,u,w)
t=e.gdC()*0.045
r.$3(new B.t(t,t),1,1)
v=e.a-t
r.$3(new B.t(v,t),-1,1)
s=e.b-t
r.$3(new B.t(t,s),1,-1)
r.$3(new B.t(v,s),-1,-1)},
aw(d){return d.b!==this.b}}
C.xM.prototype={}
C.J3.prototype={
a5(){return"NgmySlideElementType."+this.b}}
C.arD.prototype={
a5(){return"NgmySlideAspectRatio."+this.b}}
C.uU.prototype={
a5(){return"NgmySlideShapeKind."+this.b}}
C.mF.prototype={
a5(){return"NgmySlideLayout."+this.b}}
C.hF.prototype={
a5(){return"NgmySlideTransition."+this.b}}
C.eN.prototype={
hJ(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=w.Q,l=w.as,k=w.at,j=w.ay,i=w.ch,h=w.cx,g=w.cy,f=w.db,e=w.dy,d=w.fy
return C.es(l,g,m,n,f,j,q,o,p,w.go,s,w.a,k,d,w.fx,w.dx,w.k2,w.id,h,w.ax,i,w.CW,r,w.fr,w.k3,w.k1,e,w.b,t,v,u)},
ag(){var w,v=this,u=B.T(x.N,x.z)
u.n(0,"id",v.a)
u.n(0,"type",v.b.b)
u.n(0,"x",v.c)
u.n(0,"y",v.d)
u.n(0,"w",v.e)
u.n(0,"h",v.f)
u.n(0,"text",v.r)
u.n(0,"fontSize",v.w)
u.n(0,"fontWeight",v.x.gdL(0))
u.n(0,"fontStyle",v.y.a)
u.n(0,"decoration",C.hZs(v.z))
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
C.lR.prototype={
hJ(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=B.U(n).k("N<1,eN>")
n=B.C(new B.N(n,new C.chw(),m),m.k("ak.E"))
return C.rF(t,s,o,q,n,w.a,u,v,p,w.b,r)},
ag(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=B.U(n).k("N<1,a8<n,@>>")
n=B.C(new B.N(n,new C.chx(),m),m.k("ak.E"))
return B.G(["id",w.a,"title",w.b,"notes",v,"layout",u.b,"background",t,"backgroundEnd",s,"transition",r.b,"durationSeconds",q,"slideDesignId",p,"designRevision",o,"elements",n],x.N,x.z)}}
C.i4.prototype={
gbaQ(){var w=this.Q,v=w==null?null:A.a.i(w)
if(v==null)v=""
if(v.length===0)return null
return B.bi(v)},
gSF(){if(!C.kE(this.w))return!1
var w=this.gbaQ()
if(w==null)return!1
return new B.V(Date.now(),0,!1).d0(w.bU())},
hJ(){var w,v,u,t,s,r,q,p=this,o=p.b,n=p.c,m=p.d,l=p.e,k=p.f,j=p.w,i=p.y,h=p.z,g=p.Q,f=p.as,e=p.at,d=p.ax,a0=p.ay,a1=p.ch,a2=p.CW,a3=p.cx
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
q=B.U(r).k("N<1,lR>")
r=B.C(new B.N(r,new C.chl(),q),q.k("ak.E"))
return C.BV(g,w,a2,a3,m,l,a0,j,s,v,t,u,p.a,d,a1,p.x,o,e,f,r,n,i,h,k)},
ag(){var w,v,u=this,t=B.T(x.N,x.z)
t.n(0,"id",u.a)
t.n(0,"name",u.b)
t.n(0,"themeId",u.c)
t.n(0,"aspectRatio",u.d.b)
t.n(0,"autoAdvanceSeconds",u.e)
t.n(0,"updatedAt",u.f.a7().ae())
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
w=B.C(new B.N(w,new C.chm(),v),v.k("ak.E"))
t.n(0,"slides",w)
return t}}
C.jN.prototype={}
C.b1N.prototype={
B(d){return B.cB(new C.chr(this))}}
C.aoP.prototype={
U(){return new C.bjW(null,null)}}
C.bjW.prototype={
gb_y(){var w,v=this,u=v.d
if(u===$){w=B.bm(null,A.fV,null,1,null,v)
w.cM(0)
v.d!==$&&B.bG()
v.d=w
u=w}return u},
q(){this.gb_y().q()
this.bw9()},
B(d){return B.c9(this.gb_y(),new C.dKt(),this.a.c)}}
C.aLL.prototype={
q(){var w=this,v=w.aa$
if(v!=null)v.a6(0,w.gbE())
w.aa$=null
w.a3()},
aV(){this.b6()
this.b3()
this.bF()}}
C.adB.prototype={
Qf(d,e,f,g){return this.bQm(d,e,f,g)},
bQm(d,e,f,g){var w=0,v=B.j(x.H),u,t,s
var $async$Qf=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:w=3
return B.b(e.$0(),$async$Qf)
case 3:s=i
if(d.e==null){w=1
break}B.a4(d,!1).O(null)
t=d.K(x.q).f
t.T(B.b3(null,null,null,null,null,A.t,null,B.d(s?f:g,null,null,null,null,null,null,null,null,null,null),null,A.eo,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$Qf,v)},
B(d){var w=this,v=null,u=B.m(22),t=B.J(A.c.j(0.08),A.r,1),s=B.a([new B.ac(0,A.G,A.w.j(0.35),A.dq,24)],x.V),r=B.at(B.p(v,v,A.f,v,v,new B.o(A.aZ,v,v,B.m(99),v,v,A.n),v,4,v,v,v,v,v,40),v,v,v),q=w.d,p=B.d(q?"Print your invoice":"Save your PDF",v,v,v,v,v,v,A.de,A.L,v,v),o=q?"One full letter page \u2014 tap Share then Print, or open in Safari.":w.c,n=q?3:2,m=x.p
n=B.a([r,A.aM,p,A.am,B.d(o,v,n,A.a2,v,v,v,B.l(v,v,A.c.j(0.55),v,v,v,v,v,v,v,v,12,v,v,A.a7,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v)],m)
if(!q)A.d.v(n,B.a([A.au,B.d(w.c,v,2,A.a2,v,v,v,B.l(v,v,A.c.j(0.45),v,v,v,v,v,v,v,v,11,v,v,A.a7,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v)],m))
n.push(A.d8)
n.push(B.B(B.a([B.E(new C.adS(A.hL,"Download",A.c1,new C.etK(w,d),!0,v),1),A.as,B.E(new C.adS(A.ul,"Share",A.bk,new C.etL(w,d),!1,v),1),A.as,B.E(new C.adS(A.hu,"Safari",A.b_,new C.etM(w,d),!1,v),1)],m),A.m,v,A.e,A.j,0,v,v))
n.push(A.aA)
n.push(B.bN(!1,B.d("Cancel",v,v,v,v,v,v,B.l(v,v,A.c.j(0.6),v,v,v,v,v,v,v,v,v,v,v,A.P,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,!0,v,v,new C.etN(d),v,v))
return B.bn(!0,new B.D(A.qa,B.x(B.a([B.p(v,B.x(n,A.aj,v,A.e,A.j,0,A.p),A.f,v,v,new B.o(A.j8,v,t,u,s,v,A.n),v,v,v,v,A.G8,v,v,1/0)],m),A.m,v,A.e,A.Q,0,A.p),v),!0,!1,A.af,!0,!0)}}
C.adS.prototype={
B(d){var w=this,v=null,u=B.m(16),t=w.r,s=t?w.e.j(0.22):A.c.j(0.06),r=B.m(16),q=B.J(t?w.e.j(0.55):A.c.j(0.1),A.r,1),p=t?w.e:A.c
p=B.X(w.c,p,v,v,v,26)
return B.aG(!1,A.a1,!0,v,B.aM(!1,u,!0,B.eJ(B.x(B.a([p,A.O,B.d(w.d,v,v,v,v,v,v,B.l(v,v,A.c,v,v,v,v,v,v,v,v,12,v,v,t?A.u:A.P,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.Q,0,A.p),v,new B.o(s,v,q,r,v,v,A.n),v,D.bCC,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),A.f,A.K,0,v,v,v,v,v,A.ai)}}
C.b1L.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.c,f=g.db
if(f==="__kiapo_video__"||A.a.a0(f,"__kiapo_video___"))return new C.aqP(g.at,i.d,i.as,i.at,h)
switch(g.b.a){case 0:f=i.r
w=i.d
if(f){v=2*w
u=new B.Q(v,w,v,w)}else{v=6*w
u=new B.Q(v,10*w,v,12*w)}t=i.ca8().alb(1.35)
s=B.awb(h,h,h,g.w*w,h,h,!0,1.35,h,h,h)
v=g.as
r=i.bBy(v)
if(i.e&&i.w!=null)q=B.aN(h,A.Z,!1,h,!0,A.t,h,B.aO(),i.w,A.bk,h,h,h,h,2,D.bZc,A.y,!0,h,!0,h,!1,i.x,A.ak,h,h,h,new B.cs("slide_tf_"+g.a,x.W),h,A.wP,h,h,h,h,1,h,!1,"\u2022",h,i.y,h,h,h,!1,h,h,!1,h,!0,h,A.ab,h,h,h,h,h,h,h,h,h,h,s,t,!0,v,A.A4,A.ao,h,A.Uc,h,h)
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
w=n?t.cKn(B.b1(g.Q).j(0.45),A.cD):t
p=g.as
l=m?1:h
k=m?A.eL:A.DR
p=B.d(f,new B.cs("slide_txt_"+g.a+"_"+v,x.W),l,k,h,!m,s,w,p,h,h)
g=p}else{f=A.a.gX(v)
v=g.k1
p=g.r
if(v==="outline"){l=g.k2
k=l?A.U3:s
$.S()
j=B.I()
j.b=A.a9
j.c=3*w
j.e=A.dS
j.r=A.av.gp(0)
j=i.cqX(p,t,k,j)
k=g.r
w=new B.an(A.a_,h,A.aa,A.t,B.a([j,i.cqV(k,t,l?A.U3:s)],x.p),h)}else w=i.cqW(p,t,g.k2?A.U3:s,m)
v=new B.nm(w,new B.cs("slide_txt_"+g.a+"_"+f+"_"+v,x.W))
g=v}q=B.aB(A.ca,g,A.y,!1,h,i.Q,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,i.z,h,h,h,h,h,h,!1,A.a5)}return new B.D(u,new B.bM(r,h,h,q,h),h)
case 1:case 4:return i.bZW()
case 3:return i.ciy()
case 2:return B.b4(h,h,h,new C.b1I(g,h),A.fC)
case 5:g=g.r
return new C.b1K(g,!i.e&&i.z==null,h)}},
ca8(){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.c,l=B.b1(m.Q),k=m.x,j=m.y,i=m.z,h=n,g=n,f=n,e=n
switch(m.k1){case"caps":h=3*o.d
w=l
k=A.u
break
case"elegant":h=1.2*o.d
w=l
k=A.kf
j=A.cD
break
case"shadow":v=o.d
e=B.a([new B.cX(D.afM,new B.t(0,4*v),8*v)],x.r)
w=l
break
case"neon":v=o.d
e=B.a([new B.cX(l,A.J,6*v),new B.cX(l,A.J,16*v),new B.cX(l.j(0.8),A.J,30*v)],x.r)
w=l
break
case"marker":k=A.u
g=A.bG
w=A.av
break
case"stamp":h=6*o.d
w=l
k=A.u
i=A.mX
break
case"retro":v=o.d
h=2*v
v=4*v
e=B.a([new B.cX(A.bC,new B.t(v,v),0)],x.r)
w=l
k=A.u
break
case"threed":v=B.ar(l,A.w,0.65)
v.toString
u=B.a([],x.r)
for(t=o.d,s=1;s<=6;++s){r=s*t
u.push(new B.cX(v,new B.t(r,r),0))}e=u
w=l
k=A.u
break
case"glitch":v=o.d
h=2*v
e=B.a([new B.cX(A.b9,new B.t(-3*v,0),0),new B.cX(A.aw,new B.t(3*v,0),0)],x.r)
w=l
k=A.u
break
case"fire":v=o.d
e=B.a([new B.cX(A.cT,A.J,8*v),new B.cX(A.aw,new B.t(0,-3*v),18*v)],x.r)
k=A.u
w=X.xy
break
case"ice":v=o.d
e=B.a([new B.cX(A.aQ,A.J,10*v),new B.cX(A.cC,A.J,22*v)],x.r)
k=A.P
w=A.ey
break
case"chalk":h=o.d
e=B.a([new B.cX(l.j(0.45),A.J,3*h)],x.r)
w=l
k=A.kf
break
case"comic":v=B.ar(l,A.w,0.85)
v.toString
u=B.a([],x.r)
for(t=o.d,q=0;q<8;++q){p=D.d3v[q]
u.push(new B.cX(v,new B.t(p.a*t,p.b*t),0))}u.push(new B.cX(v,new B.t(5*t,6*t),0))
e=u
w=l
k=A.u
break
case"gold":$.S()
f=B.I()
v=o.d
f.sam(D.c0U.aB(0,new B.a3(0,0,0+900*v,0+m.w*v*1.6)))
e=B.a([new B.cX(A.Ll,new B.t(0,3*v),5*v)],x.r)
w=l
k=A.u
break
case"sunset":$.S()
f=B.I()
v=o.d
f.sam(D.c1e.aB(0,new B.a3(0,0,0+900*v,0+m.w*v*1.6)))
w=l
k=A.u
break
case"softglow":e=B.a([new B.cX(l,A.J,14*o.d)],x.r)
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
e=B.a([new B.cX(l.j(0.45),new B.t(u,u),0),new B.cX(l.j(0.2),new B.t(v,v),0)],x.r)
w=l
break
case"whisper":h=6*o.d
w=l
k=A.kf
break
default:w=l}v=m.w
u=f==null?w:n
m=m.k3
m=m!==0?B.b1(m):g
return B.l(n,m,u,n,i,n,n,n,n,n,n,v*o.d,j,n,k,f,1.25,!0,n,h,n,n,n,e,n,n)},
azZ(d,e,f,g,h){var w,v,u,t,s=null,r=this.c,q=r.k1
if(D.f0K.t(0,q))w=d.toUpperCase()
else w=q==="lowercase"?d.toLowerCase():d
q=new C.chp(h)
v=r.k2?C.ibf(w,e,q):s
if(v==null){q=q.$1(e)
r=r.as
u=g?1:s
t=g?A.eL:A.DR
return B.d(w,s,u,t,s,!g,f,q,r,s,s)}return B.Y7(B.cS(v,s,s,s,s,s,s,s,s,s,s),s,s,q.$1(e),r.as)},
cqX(d,e,f,g){return this.azZ(d,e,f,!1,g)},
cqV(d,e,f){return this.azZ(d,e,f,!1,null)},
cqW(d,e,f,g){return this.azZ(d,e,f,g,null)},
bBy(d){switch(d.a){case 2:return A.A
case 1:case 5:return A.a8
default:return A.a4}},
bZW(){var w,v,u=this,t=null,s=u.c,r=s.at
if(r==null||!A.a.a0(r,"data:image")){if(!u.as)return A.bJ
return B.at(B.X(s.b===D.lf?A.H5:A.BZ,A.aB,t,t,t,32),t,t,t)}w=u.bEB(r)
if(s.b===D.lf){s=B.m(6)
v=2*u.d
return B.p(t,w,A.f,t,t,new B.o(A.c,t,B.J(A.cr,A.r,1),s,B.a([new B.ac(0,A.G,A.w.j(0.08),A.dB,6)],x.V),t,A.n),t,1/0,t,t,new B.Q(v,v,v,v),t,t,1/0)}if(s.go.length!==0||s.id.length!==0){v=u.aOE(r,!0)
return C.fEF(s.go,v,s.id)}return w},
aOE(d,e){var w,v,u,t
try{w=C.ibA(d)
u=this.c.db
v=u==="marriage_locked_bg"||A.a.cc(u,"_bg")
u=B.cB(new C.cho(this,w,v,e))
return u}catch(t){return D.adp}},
bEB(d){return this.aOE(d,!1)},
ciy(){var w=this.c,v=w.at
if(v==null||v.length===0)return D.b90
return C.ibS(v,w.db,w.dx)}}
C.b1I.prototype={
a1(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=$.S(),g=B.I(),f=this.b
g.r=B.b1(f.ay).gp(0)
w=B.I()
w.r=B.b1(f.ch).gp(0)
w.b=A.a9
v=f.CW
w.c=v
u=e.a
t=e.b
s=new B.a3(0,0,0+u,0+t)
switch(f.ax.a){case 0:d.aP(s,g)
d.aP(s,w)
break
case 1:d.dO(s,g)
d.dO(s,w)
break
case 2:r=new B.aF(h.r,A.ag,i,i,B.a([],x.v))
r.D(new B.aX(u/2,0))
r.D(new B.aq(u,t))
r.D(new B.aq(0,t))
r.D(new B.br())
d.aG(r,g)
d.aG(r,w)
break
case 3:r=new B.aF(h.r,A.ag,i,i,B.a([],x.v))
h=t*0.45
r.D(new B.aX(0,h))
f=u*0.65
r.D(new B.aq(f,h))
r.D(new B.aq(f,t*0.2))
r.D(new B.aq(u,t*0.5))
r.D(new B.aq(f,t*0.8))
t*=0.55
r.D(new B.aq(f,t))
r.D(new B.aq(0,t))
r.D(new B.br())
d.aG(r,g)
d.aG(r,w)
break
case 4:h=t/2
w.c=v+2
d.bo(new B.t(0,h),new B.t(u,h),w)
break
case 5:q=u*0.22
r=new B.aF(h.r,A.ag,i,i,B.a([],x.v))
r.D(new B.aX(q,0))
r.D(new B.aq(u,0))
r.D(new B.aq(u-q,t))
r.D(new B.aq(0,t))
r.D(new B.br())
d.aG(r,g)
d.aG(r,w)
break
case 6:p=u/2
o=t/2
n=Math.min(u,t)/2
f=B.a([],x.v)
r=new B.aF(h.r,A.ag,i,i,f)
for(m=0;m<6;++m){l=1.0471975511965976*m-0.5235987755982988
k=p+n*Math.cos(l)
j=o+n*Math.sin(l)
if(m===0){h=new B.aX(k,j)
f.push(h)
v=r.f
if(v!=null)h.by(v)
h=r.e
if(h!=null)h.a.delete()
r.e=null}else{h=new B.aq(k,j)
f.push(h)
v=r.f
if(v!=null)h.by(v)
h=r.e
if(h!=null)h.a.delete()
r.e=null}}r.D(new B.br())
d.aG(r,g)
d.aG(r,w)
break}},
aw(d){return d.b!==this.b}}
C.aJn.prototype={
U(){return new C.bv7(null,null)}}
C.bv7.prototype={
a_(){var w,v=this
v.a2()
w=B.bm(null,A.hq,null,1,null,v)
w.cM(0)
v.d!==$&&B.aP()
v.d=w},
q(){var w=this.d
w===$&&B.c()
w.q()
this.byj()},
aOP(d,e){var w=null,v=B.a([e,e.j(0.7)],x.O),u=B.m(8)
return B.c1(B.at(B.d(d,w,w,w,w,w,w,A.de,w,w,w),w,w,w),new B.o(w,w,w,u,w,new B.a9(A.a4,A.a8,A.x,v,w,w),A.n),A.bg)},
bBM(){var w,v=this,u=null,t=v.aOP("Slide A",A.bk),s=v.aOP("Slide B",A.b_)
if(v.a.c===D.cl)return new B.an(A.a_,u,A.b0,A.t,B.a([t,B.at(B.d("No transition",u,u,u,u,u,u,B.l(u,u,A.c.j(0.7),u,u,u,u,u,u,u,u,16,u,u,A.P,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,u)],x.p),u)
w=v.d
w===$&&B.c()
return B.c9(w,new C.f7Z(v,s,t),u)},
B(d){return this.bBM()}}
C.aK0.prototype={
ji(d){return new B.a3(0,0,0+d.a*A.k.E(this.b,0,1),0+d.b)},
jX(d){return d.b!==this.b}}
C.Vo.prototype={
U(){return new C.bk6(null,null)}}
C.bk6.prototype={
a_(){var w,v,u=this
u.a2()
w=B.bm(null,A.Bv,null,1,null,u)
u.d!==$&&B.aP()
u.d=w
v=u.a
if(!v.e||v.c.dy===D.cl){w.sp(0,1)
return}B.bP(B.dE(0,0,0,v.c.fr+v.f*120,0,0),new C.dVH(u),x.a)},
bx(d){var w,v,u,t=this
t.bH(d)
w=d.c
v=t.a
u=v.c
if(w.a!==u.a||w.dy!==u.dy||d.f!==v.f){w=t.d
w===$&&B.c()
w.sp(0,w.a)
v=t.a
if(!v.e||v.c.dy===D.cl)w.sp(0,1)
else B.bP(B.dE(0,0,0,v.c.fr+v.f*120,0,0),new C.dVG(t),x.a)}},
q(){var w=this.d
w===$&&B.c()
w.q()
this.bwn()},
B(d){var w,v=this.a
if(v.c.dy===D.cl||!v.e)return v.d
w=this.d
w===$&&B.c()
return B.c9(w,new C.dVF(this),v.d)}}
C.J2.prototype={
B(d){return B.cB(new C.chh(this))}}
C.aA5.prototype={
U(){return new C.beA()}}
C.beA.prototype={
a_(){this.a2()
if(this.a.c!==D.cl)B.bP(A.MO,new C.d9v(this),x.a)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=4280172719,n=q.a.c
if(n===D.cl)n=B.at(B.d("No animation on elements",p,p,p,p,p,p,B.l(p,p,A.c.j(0.75),p,p,p,p,p,p,p,p,16,p,p,A.P,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p)
else{n=n.u(0)
w=q.d
v=x.W
u=q.a.c
w=B.ao(p,new C.Vo(C.es(A.bi,!1,4279310375,A.aF,"",4294538006,24,A.bp,A.a7,"",0.2,"preview_shape",p,"","",0,!1,"",0,D.bh,o,2,"",0,0,"",u,D.f8,0.84,0.08,0.12),B.p(p,p,A.f,p,p,new B.o(A.cc,p,p,B.m(14),p,p,A.n),p,72,p,p,p,p,p,72),!0,0,new B.cs("shape_"+n+"_"+w,v)),p,p,24,p,28,p)
u=u.u(0)
n=q.d
t=C.es(A.bi,!1,4294967295,A.aF,"",4280640491,22,A.bp,A.a7,"",0.2,"preview_text",p,"","",0,!1,"",0,D.bh,o,2,"Element flies in",0,0,"",q.a.c,D.cS,0.84,0.08,0.12)
s=A.c.j(0.14)
r=B.m(14)
v=new B.an(A.a_,p,A.aa,A.t,B.a([w,B.ao(32,new C.Vo(t,B.p(p,D.fA8,A.f,p,p,new B.o(s,p,B.J(A.aZ,A.r,1),r,p,p,A.n),p,p,p,p,A.jc,p,p,1/0),!0,1,new B.cs("text_"+u+"_"+n,v)),p,p,24,24,p,p)],x.p),p)
n=v}return B.c1(n,D.b4d,A.bg)}}
C.a7Y.prototype={
U(){return new C.bkK(null,null)}}
C.bkK.prototype={
gb05(){var w=this.a
if(w.e)w=D.f0T.t(0,w.c)||D.aPQ.t(0,A.d.gI(this.a.c.split("@")))
else w=!1
return w},
a_(){var w,v=this
v.a2()
if(v.gb05()){w=C.i9T(v.a.c)
if(w==null){w=v.a.c
if(w==="drift")w=9000
else w=w==="pulse"?2600:4200}w=B.bm(null,B.dE(0,0,0,w,0,0),null,1,null,v)
w.cM(0)
v.d=w}},
q(){var w=this.d
if(w!=null)w.q()
this.bwR()},
B(d){var w,v=this,u=v.d
if(!v.gb05()||u==null)return v.a.d
w=v.a
return B.c9(u,new C.ein(v,u,A.o.F(w.f,7)/7*3.141592653589793*2),w.d)}}
C.b_H.prototype={
B(d){var w=null
return B.at(C.b1M(!0,w,!1,C.es(A.L,!1,this.e.l(),A.aF,"",4280640491,this.f,A.bp,A.a7,"",0.2,"fx",w,"","",0,!1,"",0,D.bh,4280172719,2,"Aa",0,0,this.c,D.cl,D.cS,0.84,0.08,0.12),w,!1,w,w,w,1,!1,!0),w,w,w)},
gY(d){return this.f}}
C.bfN.prototype={
ji(d){return C.a2I(this.b,new B.a3(0,0,0+d.a,0+d.b).cq(-this.c))},
jX(d){return d.b!==this.b||d.c!==this.c}}
C.bqH.prototype={
a1(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=new B.a3(0,0,0+a1.a,0+a1.b).cq(-this.d),g=this.b,f=C.a2I(g,h),e=a1.gdC(),d=new C.eXY()
switch(this.c){case"gold":w=d.$1(e*0.045)
w.sam(D.aRl.aB(0,h))
a0.aG(f,w)
g=C.a2I(g,h.cq(-(e*0.03)))
w=d.$1(e*0.006)
w.r=D.bpo.gp(0)
a0.aG(g,w)
break
case"platinum":g=d.$1(e*0.04)
g.sam(D.faZ.aB(0,h))
a0.aG(f,g)
break
case"glow":g=d.$1(e*0.05)
g.r=A.c.j(0.55).gp(0)
g.z=new B.hg(A.G,e*0.04)
a0.aG(f,g)
g=d.$1(e*0.012)
g.r=A.c.gp(0)
a0.aG(f,g)
break
case"rainbow":g=d.$1(e*0.04)
g.sam(D.faX.aB(0,h))
a0.aG(f,g)
break
case"double":w=d.$1(e*0.012)
w.r=A.c.gp(0)
a0.aG(f,w)
g=C.a2I(g,h.cq(e*0.03))
w=d.$1(e*0.008)
w.r=A.c.j(0.75).gp(0)
a0.aG(g,w)
break
case"neon":g=d.$1(e*0.06)
g.r=A.b9.j(0.7).gp(0)
g.z=new B.hg(A.G,e*0.035)
a0.aG(f,g)
g=d.$1(e*0.016)
g.r=A.oW.gp(0)
a0.aG(f,g)
break
case"rosegold":w=d.$1(e*0.05)
w.sam(D.faS.aB(0,h))
a0.aG(f,w)
w=C.a2I(g,h.cq(-(e*0.032)))
v=d.$1(e*0.006)
v.r=D.bcL.gp(0)
a0.aG(w,v)
g=C.a2I(g,h.cq(e*0.03))
v=d.$1(e*0.004)
v.r=D.bfK.gp(0)
a0.aG(g,v)
break
case"jewels":g=d.$1(e*0.055)
g.sam(D.aRl.aB(0,h))
a0.aG(f,g)
for(g=B.xl(f),w=B.a([],x.X),g=new B.tl(g,!1,w),v=e*0.018,u=a0.a,t=-e*0.006,s=e*0.006,r=e*0.09;g.C();){q=g.c
if(q===0||g.f)B.b8(B.ju(y.M));--q
g.ij()
p=w[q].b
p===$&&B.c()
o=A.o.E(A.k.bh(p.a.length()/r),8,40)
for(n=0;n<o;++n){g.ij()
p=w[q].b
p===$&&B.c()
p=p.a.length()
g.ij()
m=w[q].H9(p*n/o).a
l=D.d0K[A.o.F(n,4)]
$.S()
p=new B.ap(A.R,A.N,A.U,A.V,A.S)
p.r=l.gp(0)
k=p.G()
p=m.a
j=m.b
u.drawCircle(p,j,v,k)
k.delete()
i=new B.ap(A.R,A.N,A.U,A.V,A.S)
i.r=A.c.j(0.9).gp(0)
k=i.G()
u.drawCircle(p+t,j+t,s,k)
k.delete()}}break
case"aurora":g=d.$1(e*0.08)
g.sam(D.fb0.aB(0,h))
g.z=new B.hg(A.G,e*0.03)
a0.aG(f,g)
g=d.$1(e*0.018)
g.sam(D.faY.aB(0,h))
a0.aG(f,g)
break
case"framed":w=d.$1(e*0.07)
w.r=A.c.gp(0)
a0.aG(f,w)
g=C.a2I(g,h.cq(-(e*0.035)))
w=d.$1(e*0.004)
w.r=A.nT.gp(0)
a0.aG(g,w)
break}},
aw(d){return d.b!==this.b||d.c!==this.c||d.d!==this.d}}
C.brI.prototype={
a1(d,e){d.G6(C.a2I(this.b,new B.a3(0,0,0+e.a,0+e.b).cq(-this.c)),A.w,e.gdC()*0.05,!1)},
aw(d){return d.b!==this.b||d.c!==this.c}}
C.aLY.prototype={
q(){var w=this,v=w.aa$
if(v!=null)v.a6(0,w.gbE())
w.aa$=null
w.a3()},
aV(){this.b6()
this.b3()
this.bF()}}
C.aMq.prototype={
q(){var w=this,v=w.aa$
if(v!=null)v.a6(0,w.gbE())
w.aa$=null
w.a3()},
aV(){this.b6()
this.b3()
this.bF()}}
C.aNI.prototype={
q(){var w=this,v=w.aa$
if(v!=null)v.a6(0,w.gbE())
w.aa$=null
w.a3()},
aV(){this.b6()
this.b3()
this.bF()}}
C.a8g.prototype={}
C.Oc.prototype={
U(){var w=x.gz,v=x.N,u=x.bO
return new C.aEV(B.a([],x.D),B.a([],w),B.a([],w),B.T(v,u),B.T(v,x.bo),B.T(v,u),B.aY(v),null,null)},
ge0(){return this.c},
gU0(){return this.r},
gU1(){return this.w},
gLW(){return this.x}}
C.aEV.prototype={
a_(){var w,v=this
v.a2()
$.aW.bZ$.push(v)
C.fJE()
$.hsv=new C.ezY(v)
w=B.bm(null,A.Bs,null,1,null,v)
w.fm(0,!0)
v.fy!==$&&B.aP()
v.fy=w
v.IF()},
bx(d){var w,v,u=this
u.bH(d)
w=A.a.i(d.y)
v=u.a
if(w.toLowerCase()!==A.a.i(v.y).toLowerCase()||A.a.i(d.z).toLowerCase()!==A.a.i(v.z).toLowerCase()||d.c!==v.c){w=d.c
u.ON(w)
if(w!==u.a.c){u.e=null
u.db=!1
u.w=u.r=null}u.x=!0
u.IF()}},
jb(d){if(d===A.Aw||d===A.tj||d===A.ti||d===A.pD)this.tP()},
q(){var w,v,u,t=this
$.aW.hO(t)
w=t.at
if(w!=null)w.a4(0)
t.tP()
w=t.fy
w===$&&B.c()
w.q()
for(w=t.ch,w=new B.dq(w,w.r,w.e);w.C();){v=w.d
v.S$=$.ax()
v.P$=0}for(w=t.CW,w=new B.dq(w,w.r,w.e);w.C();){v=w.d
u=v.ax
if(u!=null)u.bO(0)
v.ha()}for(w=t.cx,w=new B.dq(w,w.r,w.e);w.C();){v=w.d
v.S$=$.ax()
v.P$=0}t.bx1()},
gac1(){var w=this.a
return w.f||w.r||w.w||w.x||w.d},
gP6(){var w,v=this.a
if(v.d||v.w||v.x){w=A.a.i(v.y)
if(w.length!==0)return w}if(v.r&&A.a.i(v.z).length!==0)return A.a.i(v.z)
return A.a.i(v.y)},
acw(d){var w=d==null?this.e:d
if((w==null?null:w.z)!==!0)return!1
if(w.gSF())return!1
return!0},
km(){return this.acw(null)},
ajh(){var w=this.c
if(w==null)return
w.K(x.q).f.T(D.f9f)},
qx(){if(!this.km())return!1
this.ajh()
return!0},
arE(d){var w,v,u,t,s,r=this
if(r.acw(d))return!1
w=d==null?r.e:d
v=w==null
if((v?null:w.w)!=="hati_kiapo_uongozi")return!0
if(r.a.d)return!0
if(!v&&!C.hrC(w))return!1
u=r.a
if(u.w||u.x)return!0
if(!u.r)return!1
v=v?null:w.x
t=A.a.i(v==null?"":v).toLowerCase()
s=A.a.i(u.z).toLowerCase()
return t.length!==0&&s.length!==0&&t===s},
A_(){return this.arE(null)},
IF(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$IF=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=++t.dx
k=t.a.c
w=3
return B.b(C.arF(k),$async$IF)
case 3:j=e
w=4
return B.b(C.aqh(k),$async$IF)
case 4:t.dy=e
if(t.c==null||l!==t.dx){w=1
break}s=C.fZt(j,t.c1P())
w=t.gac1()?5:7
break
case 5:r=t.gP6()
w=r.length!==0?8:9
break
case 8:w=10
return B.b(C.b_V(r),$async$IF)
case 10:q=e
if(t.c==null||l!==t.dx){w=1
break}if(q!=null){A.d.bu(s,new C.ewl())
if(!t.dy.t(0,A.a.i(r).toLowerCase()))A.d.c8(s,0,q)}case 9:w=6
break
case 7:A.d.bu(s,new C.ewm())
case 6:for(l=s.length,p=!1,o=0;o<s.length;s.length===l||(0,B.M)(s),++o){n=s[o]
m=n.w
if(!(m==="marriage_agreement"||m==="hati_kuhowa"||m==="hati_kuhoweya"||m==="hati_malipo_awamu"||m==="hati_kiapo_uongozi"))continue
m=n.y
if(C.yP(m==null?"":m)!=null)continue
C.fJQ(n,s)
p=!0}t.m(new C.ewn(t,s))
if(p||s.length>J.ad(j))t.tP()
case 1:return B.h(u,v)}})
return B.i($async$IF,v)},
c1P(){var w,v,u,t,s,r,q="hati_kiapo_uongozi",p=B.a([],x.D)
for(w=this.d,v=w.length,u=0;u<w.length;w.length===v||(0,B.M)(w),++u){t=w[u]
s=t.w
if((s==="marriage_agreement"||s==="hati_kuhowa"||s==="hati_kuhoweya"||s==="hati_malipo_awamu"||s===q)&&s!==q)p.push(t)}r=this.e
w=!1
if(!this.db)if(r!=null){w=r.w
w=C.kE(w)&&w!==q}if(w)p.push(r)
return p},
cpo(d){var w,v=this,u=d.w
if(!C.kE(u)||u==="hati_kiapo_uongozi")return
v.aaQ(d)
w=A.d.bg(v.d,new C.exW(d))
u=v.d
if(w>=0){u[w]=d.hJ()
v.d[w].f=new B.V(Date.now(),0,!1)}else A.d.c8(u,0,d.hJ())
v.db=!1},
cju(){var w,v,u=this,t=u.e,s=!1
if(!u.db)if(t!=null){s=t.w
s=C.kE(s)&&s!=="hati_kiapo_uongozi"}if(s)u.cpo(t)
s=u.d
w=B.U(s)
v=w.k("cQ<1,i4>")
s=B.C(new B.cQ(new B.Z(s,new C.exK(),w.k("Z<1>")),new C.exL(),v),v.k("K.E"))
return s},
ON(d){return this.bQM(d)},
tP(){return this.ON(null)},
bQM(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$ON=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.x&&d==null){w=1
break}s=t.cju()
w=3
return B.b(C.Wh(d==null?t.a.c:d,s),$async$ON)
case 3:r=t.e
w=r!=null&&r.w==="hati_kiapo_uongozi"&&t.arE(r)?4:5
break
case 4:w=6
return B.b(C.a7u(r),$async$ON)
case 6:q=r.x
p=A.a.i(q==null?t.gP6():q)
if(t.dy.t(0,A.a.i(p).toLowerCase())){w=1
break}o=A.d.bg(t.d,new C.evJ())
q=t.d
if(o>=0)q[o]=r.hJ()
else A.d.c8(q,0,r.hJ())
case 5:case 1:return B.h(u,v)}})
return B.i($async$ON,v)},
pv(){var w,v=this,u=v.at
if(u!=null)u.a4(0)
u=v.e
w=(u==null?null:C.kE(u.w))===!0?A.hp:A.ly
v.at=B.cL(w,new C.ez3(v))},
b_z(){var w,v=this,u=v.e
if(u==null)return
w=v.ax
w.push(new C.afo(u.hJ(),v.f,v.r))
if(w.length>40)A.d.cG(w,0)
A.d.a9(v.ay)},
cD0(){var w=this,v=w.ax
if(v.length===0||w.e==null)return
w.ay.push(new C.afo(w.e.hJ(),w.f,w.r))
w.m(new C.ezU(w,v.pop()))
w.pv()},
cou(){var w=this,v=w.ay
if(v.length===0||w.e==null)return
w.ax.push(new C.afo(w.e.hJ(),w.f,w.r))
w.m(new C.exU(w,v.pop()))
w.pv()},
oo(){var w,v,u=this
if(u.e==null)return
w=A.d.bg(u.d,new C.ezH(u))
if(w>=0){u.d[w]=u.e.hJ()
u.d[w].f=new B.V(Date.now(),0,!1)}v=u.e
v.toString
v.f=new B.V(Date.now(),0,!1)},
Y0(d){var w,v,u,t,s=this.gdw()
if(s==null)return null
for(w=s.z,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t}return null},
xG(){var w,v,u,t
for(w=this.ch,v=new B.dq(w,w.r,w.e);v.C();){u=v.d
u.S$=$.ax()
u.P$=0}w.a9(0)
for(w=this.CW,v=new B.dq(w,w.r,w.e);v.C();){u=v.d
t=u.ax
if(t!=null)t.bO(0)
u.ha()}w.a9(0)},
Ko(){var w,v,u,t,s,r,q,p,o,n,m,l=this.gdw()
if(l==null)return
w=l.z
v=B.U(w)
u=v.k("cQ<1,n>")
t=B.de(new B.cQ(new B.Z(w,new C.ezI(),v.k("Z<1>")),new C.ezJ(),u),u.k("K.E"))
w=this.ch
v=B.a6(w).k("cv<1>")
v=B.C(new B.cv(w,v),v.k("K.E"))
u=v.length
s=this.CW
r=0
for(;r<v.length;v.length===u||(0,B.M)(v),++r){q=v[r]
if(!t.t(0,q)){p=w.W(0,q)
if(p!=null){p.S$=$.ax()
p.P$=0}p=s.W(0,q)
if(p!=null){o=p.ax
if(o!=null)o.bO(0)
p.ha()}}}for(v=l.z,u=v.length,r=0;r<v.length;v.length===u||(0,B.M)(v),++r){n=v[r]
if(n.b!==D.cS)continue
p=n.a
m=w.c3(0,p,new C.ezK(n))
s.c3(0,p,new C.ezL())
p=m.a.a
o=n.r
if(p!==o)m.saX(0,o)}},
HZ(){var w,v,u=this
if(!u.db||u.e==null)return
w=u.db=!1
if(!A.d.b5(u.d,new C.ev7(u))){v=u.e
if(v.w==="hati_kiapo_uongozi"){v=v.x
if(v==null)v=u.gP6()
w=u.dy.t(0,A.a.i(v).toLowerCase())}if(!w)A.d.c8(u.d,0,u.e.hJ())}u.oo()
u.pv()},
ajD(d,e){var w,v,u,t,s=this
if(s.km())return
w=s.Y0(d)
if(w==null||w.r===e)return
w.r=e
v=s.e
u=(v==null?null:C.kE(v.w))===!0
if(u){C.i9X(w,e)
v=s.e
if((v==null?null:v.w==="marriage_agreement")===!0){t=s.gdw()
if(t!=null)C.i9Y(t,w.d+w.f*0.5)}}s.HZ()
s.oo()
s.pv()
if(u&&s.c!=null)s.m(new C.ezV())},
cE4(d,e){var w=this,v=w.gdw()
if(v==null||v.a!==d||v.c===e)return
v.c=e
w.HZ()
w.oo()
w.pv()},
gdw(){var w,v=this.e
if(v==null||v.r.length===0)return null
w=v.r
return w[A.o.E(this.f,0,w.length-1)]},
gqD(){var w,v,u,t,s,r,q=this,p=q.e,o=p==null?null:p.c
if(o==null)o="office_blue"
w=C.i7Z(o)
if(w!=null)return w
v=q.gdw()
if(v==null){p=q.e
v=p!=null&&p.r.length!==0?A.d.gI(p.r):null}if(v!=null&&A.a.a0(o,"class_")){p=v.f
p=B.b1(p==null?v.e:p)
u=q.c_a(v)
t=q.c_9(v)
s=B.b1(v.e)
r=v.f
return new C.jN(o,"Class template",p,u,t,s,r==null?null:B.b1(r))}return C.hLr(o)},
c_a(d){var w,v,u,t,s
for(w=d.z,v=w.length,u=0;u<w.length;w.length===v||(0,B.M)(w),++u){t=w[u]
if(t.b===D.cS)s=t.w>=28||A.o.E(A.o.ao(t.x.a,100)-1,0,8)>=A.o.E(7,0,8)
else s=!1
if(s)return B.b1(t.Q)}return A.M},
c_9(d){var w,v,u,t
for(w=d.z,v=w.length,u=0;u<v;++u){t=w[u]
if(t.b===D.cS&&t.w<28)return B.b1(t.Q)}return A.aJ},
afC(d){var w=this,v=d.w
if(v==="hati_kiapo_uongozi"){if(!w.gac1()){w.c.K(x.q).f.T(D.f7R)
return}w.aaQ(d)
w.b0N(C.bCJ(d))
return}if(C.ci9(v)){w.aaQ(d)
w.b0N(d)
return}w.m(new C.ex2(w,d))},
asc(){var w,v,u,t,s,r,q=this
q.a2D(!0)
if(q.db){w=q.e
v=w==null
u=v?null:w.w
t=v?null:w.x
s=A.a.i(t==null?"":t)
r=!v&&C.kE(w.w)&&u!=="hati_kiapo_uongozi"&&s.length!==0
q.m(new C.ev5(q))
if(r&&q.c!=null){u.toString
q.JY(u,s)}return}q.tP()
q.m(new C.ev6(q))},
b0M(d){this.aaQ(d)
this.a05(d,!0)},
aaQ(d){if(!C.kE(d.w))return
C.fJQ(d,this.d)},
a05(d,e){return this.cfn(d,e)},
b0N(d){return this.a05(d,!1)},
cfn(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$a05=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:l={}
l.a=d
if(d.w==="hati_kiapo_uongozi"){s=l.a=C.bCJ(d)
if(e){r=s.x
q=A.a.i(r==null?t.gP6():r)
t.dy.W(0,q.toLowerCase())
C.aqi(t.a.c,q)}r=s}else r=d
w=C.ci9(r.w)?3:4
break
case 3:w=5
return B.b(t.aaR(r),$async$a05)
case 5:if(!g||t.c==null){w=1
break}case 4:p=A.d.b5(t.d,new C.exp(l))
o=l.a.hJ()
n=C.kE(o.w)&&C.iba(o)
t.m(new C.exq(t,o,p))
if(n){m=A.d.bg(t.d,new C.exr(o))
if(m>=0){t.d[m]=o.hJ()
t.tP()}}if(!t.acw(l.a))t.Zb()
r=!1
if(t.c!=null)if(!t.acw(l.a)){r=l.a
l=r.w==="hati_kiapo_uongozi"&&!t.arE(r)&&C.fFQ(l.a)}else l=r
else l=r
if(l)t.c.K(x.q).f.T(D.f8r)
case 1:return B.h(u,v)}})
return B.i($async$a05,v)},
aaR(d){return this.bOS(d)},
bOS(d){var w=0,v=B.j(x.y),u,t=this,s,r
var $async$aaR=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.a
if(r.d){u=!0
w=1
break}s=d.z
if(s===!0){u=!0
w=1
break}w=3
return B.b(B.lq(r.c,A.zN),$async$aaR)
case 3:if(f){u=!0
w=1
break}r=t.c
r.toString
s=t.a
u=B.l1(!1,r,s.c,s.d,null,A.zN,null)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aaR,v)},
od(){var w=0,v=B.j(x.y),u,t=this,s,r
var $async$od=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.e
r=s==null
if(C.ci9(r?null:s.w)){u=!0
w=1
break}if((r?null:s.w)==="hati_kiapo_uongozi"){u=!0
w=1
break}s=t.c
s.toString
r=t.a
u=C.chz(s,r.c,r.d)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$od,v)},
afj(){var w=0,v=B.j(x.H),u,t=this,s
var $async$afj=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.cg(null,null,!1,null,new C.ex1(),s,null,!0,!0,x.H),$async$afj)
case 3:if(t.c==null){w=1
break}t.asc()
case 1:return B.h(u,v)}})
return B.i($async$afj,v)},
afi(){var w=0,v=B.j(x.H),u,t=this,s
var $async$afi=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.cg(null,null,!1,null,new C.ewZ(),s,null,!0,!0,x.H),$async$afi)
case 3:if(t.c==null){w=1
break}t.m(new C.ex_())
t.asc()
case 1:return B.h(u,v)}})
return B.i($async$afi,v)},
Zb(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$Zb=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.az(),$async$Zb)
case 3:r=e
if(B.jS(J.r(r.a,"ngmy_marriage_hint_seen"))===!0){w=1
break}w=4
return B.b(r.ar("Bool","ngmy_marriage_hint_seen",!0),$async$Zb)
case 4:s=t.c
if(s==null){w=1
break}s.K(x.q).f.T(D.f6r)
case 1:return B.h(u,v)}})
return B.i($async$Zb,v)},
JY(d,e){return this.cpN(d,e)},
cpN(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$JY=B.e(function(f,g){if(f===1)return B.f(g,v)
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
return B.b(C.agO(s,t.gEC(),t.gEB(),!0,e,t.d),$async$JY)
case 9:w=4
break
case 6:w=10
return B.b(C.agP(s,t.gEC(),t.gEB(),!0,e,t.d),$async$JY)
case 10:w=4
break
case 7:w=11
return B.b(C.agQ(s,t.gEC(),t.gEB(),!0,e,t.d),$async$JY)
case 11:w=4
break
case 8:w=12
return B.b(C.agR(s,t.gEC(),t.gEB(),!0,e,t.d),$async$JY)
case 12:w=4
break
case 4:case 1:return B.h(u,v)}})
return B.i($async$JY,v)},
c0I(){var w,v,u,t,s=this
if(!s.gac1()){s.c.K(x.q).f.T(D.f6E)
return}w=s.gP6()
v=s.a
u=v.d
t=!0
if(!u)if(!v.w){if(!v.x)if(v.r){v=A.a.i(v.z)
v=v.length!==0&&v.toLowerCase()===w.toLowerCase()}else v=!1
else v=t
t=v}v=s.c
v.toString
C.agN(u,t,v,new C.ewh(s),new C.ewi(s),w)},
afD(){var w=0,v=B.j(x.H),u=this,t,s
var $async$afD=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return B.b(B.bU(A.dL,null,new C.ex8(u),s,!0,!0,!1,A.lL,!1,!1,x.N),$async$afD)
case 2:t=e
if(t==="marriage_agreement"){s=u.c
s.toString
C.agR(s,u.gEC(),u.gEB(),!1,null,u.d)}else if(t==="hati_kuhowa"){s=u.c
s.toString
C.agO(s,u.gEC(),u.gEB(),!1,null,u.d)}else if(t==="hati_kuhoweya"){s=u.c
s.toString
C.agP(s,u.gEC(),u.gEB(),!1,null,u.d)}else if(t==="hati_malipo_awamu"){s=u.c
s.toString
C.agQ(s,u.gEC(),u.gEB(),!1,null,u.d)}else if(t==="hati_kiapo_uongozi")u.c0I()
return B.h(null,v)}})
return B.i($async$afD,v)},
cet(d,e){var w,v,u=this,t=null
if(u.e!=null)u.b_z()
w=C.cE()
v=C.BV(t,t,t,t,D.Df,5,!1,t,t,t,t,t,w,t,!1,t,d==null?"Untitled Presentation":d,t,t,t,"office_blue",t,!1,t)
u.m(new C.ex9(u,v))},
aag(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$aag=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e==null||t.qx()){w=1
break}s=t.c
s.toString
w=3
return B.b(C.ifK(s),$async$aag)
case 3:r=e
if(r==null||t.c==null||t.e==null){w=1
break}q=t.e
p=A.d.d5(q.r,new C.ev9())
t.d7(new C.eva(t,p,q,r))
s=t.c.K(x.q).f
o=r.r.length
s.T(B.b3(null,null,null,null,null,A.t,null,B.d(p?"Your "+o+"-slide presentation is ready. The mic is green now \u2014 tap it to tell the AI what to change.":"Added "+o+" AI slides after this one. Tap the green mic to change them.",null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$aag,v)},
ahA(d,e,f,g){var w=null,v=g?A.dt:A.bN,u=B.J(g?A.aZ:A.cr,A.r,1)
return B.hc(B.aB(w,B.p(w,B.X(d,g?A.c:A.aJ,w,w,w,18),A.f,w,w,new B.o(v,w,u,w,w,w,A.a6),w,34,w,w,w,w,w,34),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,A.a5),w,e,w,w)},
a04(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a04=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:n=t.e
if(n==null||t.qx()){w=1
break}s=t.k_()
r=n.r
q=r.length
if(q===0||t.f>=q)p=B.a([],x.u)
else{r=r[t.f].z
q=B.U(r).k("Z<1>")
p=B.C(new B.Z(r,new C.exk(),q),q.k("K.E"))}o=s!=null&&s.b===D.lK?B.a([s],x.u):p
if(o.length===0){t.c.K(x.q).f.T(D.f8C)
w=1
break}r=t.c
r.toString
w=3
return B.b(B.bU(A.K,null,new C.exl(t,o),r,!0,!0,!0,null,!1,!1,x.H),$async$a04)
case 3:case 1:return B.h(u,v)}})
return B.i($async$a04,v)},
afU(){return this.cfm()},
cfm(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$afU=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p={}
o=t.e
if(o!=null){s=o.CW
s=(s==null?"":s).length===0||t.qx()}else s=!0
if(s){w=1
break}s=t.c
s.toString
w=3
return B.b(C.ifw(s,t.f+1,o),$async$afU)
case 3:r=e
if(r==null||t.c==null||t.e!==o){w=1
break}s=o.cx
if(s==null)s=A.Z
q=B.k2(s,B.U(s).c)
p.a=A.d.bg(o.r,new C.exn(q))
t.d7(new C.exo(p,t,o,q,r))
t.c.K(x.q).f.T(D.f90)
case 1:return B.h(u,v)}})
return B.i($async$afU,v)},
ag0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$ag0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e==null||t.qx()||!t.A_()){w=1
break}s=t.gdw()
if(s==null){w=1
break}r=s.z
q=B.U(r).k("Z<1>")
p=B.C(new B.Z(r,new C.exF(),q),q.k("K.E"))
if(p.length===0){t.c.K(x.q).f.T(D.f6c)
w=1
break}o=new B.N(p,new C.exG(),B.U(p).k("N<1,L>")).fb(0,new C.exH())
r=B.T(x.N,x.bO)
for(q=p.length,n=0;n<p.length;p.length===q||(0,B.M)(p),++n){m=p[n]
l=m.r
r.n(0,m.a,new B.as(new B.bb(l,A.b4,A.aO),$.ax()))}q=t.c
q.toString
w=3
return B.b(B.bU(A.K,null,new C.exI(t,p,o,r),q,!0,!0,!0,null,!1,!1,x.H),$async$ag0)
case 3:for(r=new B.dq(r,r.r,r.e);r.C();){q=r.d
q.S$=$.ax()
q.P$=0}if(t.c!=null)t.m(new C.exJ())
case 1:return B.h(u,v)}})
return B.i($async$ag0,v)},
afG(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$afG=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:m=t.e
if(m==null||t.qx()){w=1
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
return B.b(C.htJ(s,new C.EM(r,q,p,o==null?"":o)),$async$afG)
case 3:n=e
if(n==null||t.c==null){w=1
break}t.d7(new C.exa(m,n))
s=t.c.K(x.q).f
r=n.a
if(r.length===0)r="No ending celebration."
else{r=C.ahc(r)
r=B.w(r==null?null:r.b)+" will play after your last slide."}s.T(B.b3(null,null,null,null,null,A.t,null,B.d(r,null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$afG,v)},
aaK(){return this.bOb()},
bOb(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$aaK=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:m={}
l=t.e
if(l!=null){s=l.CW
s=(s==null?"":s).length===0||t.qx()}else s=!0
if(s){w=1
break}s=t.c
s.toString
w=3
return B.b(C.ifJ(s,t.f+1,l),$async$aaK)
case 3:r=e
q=$.h24
$.h24=!1
if(r==null||t.c==null||t.e!==l){w=1
break}if(r===l){t.d7(new C.evq())
t.c.K(x.q).f.T(D.f63)
w=1
break}if(!q){s=r.CW
s=C.hst(l,s==null?"":s,!1)}else s=!1
if(s){t.d7(new C.evr(t,l,r))
t.c.K(x.q).f.T(D.f9u)
w=1
break}s=l.cx
if(s==null)s=A.Z
p=B.k2(s,B.U(s).c)
s=l.r
m.a=A.d.bg(s,new C.evs(p))
o=s.length
t.d7(new C.evt(m,t,l,p,r))
n=s.length-o
s=t.c.K(x.q).f
if(n>0){m=n===1?"":"s"
m="Done \u2014 added "+n+" slide"+m+". Undo brings back the old version."}else m="Done \u2014 your slides are updated. Undo brings back the old version."
s.T(B.b3(null,null,null,null,null,A.t,null,B.d(m,null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$aaK,v)},
aQX(d,e){if(e){this.agt()
return}this.cet(d,!1)},
bJJ(){return this.aQX(null,!1)},
agt(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$agt=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.bU(A.c0,null,new C.exP(t),r,!0,!0,!0,A.pq,!1,!1,x.N),$async$agt)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.exQ(t,C.i7Y(s).pI()))
case 1:return B.h(u,v)}})
return B.i($async$agt,v)},
d7(d){var w=this
if(w.qx())return
w.HZ()
w.b_z()
w.m(d)
w.Ko()
w.oo()
w.pv()},
a8L(){this.d7(new C.eu4(this,D.mR))},
aSq(){var w=this.gdw()
if(w==null)return
this.d7(new C.evo(this,w))},
aRy(){var w=this.e
if(w==null||w.r.length<=1)return
this.d7(new C.evm(this))},
b3H(d,e){if(this.e==null||d===e)return
this.d7(new C.exY(this,d,e))},
Oj(d){return this.bLK(d)},
bLK(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$Oj=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=d.w==="hati_kiapo_uongozi"?3:4
break
case 3:s=d.x
r=A.a.i(s==null?t.gP6():s)
w=5
return B.b(C.aqg(t.a.c,r),$async$Oj)
case 5:t.dy.M(0,r.toLowerCase())
case 4:s=d.a
C.arH(s)
w=6
return B.b(C.b1Q(t.a.c,s),$async$Oj)
case 6:if(t.c==null){w=1
break}t.m(new C.evi(t,d))
w=7
return B.b(t.tP(),$async$Oj)
case 7:case 1:return B.h(u,v)}})
return B.i($async$Oj,v)},
cpK(d,e){var w=this
if(d.z){w.ajh()
return}w.m(new C.exX(w,d,e))
w.pv()},
k_(){var w,v,u,t,s,r=this.gdw()
if(r==null||this.r==null)return null
for(w=r.z,v=w.length,u=this.r,t=0;t<v;++t){s=w[t]
if(s.a===u)return s}return null},
X1(d){return this.ch.c3(0,d.a,new C.ev8(d))},
au4(d){return this.CW.c3(0,d.a,new C.evK())},
a2D(d){var w,v,u,t=this,s=t.w
if(s!=null){w=t.Y0(s)
v=t.ch.h(0,s)
if(w!=null&&v!=null&&v.a.a!==w.r)w.r=v.a.a}t.w=null
u=$.aW.al$.d.c
if(u!=null)u.jR()},
b7a(){return this.a2D(!0)},
a2z(d){var w,v,u=this
if(u.qx())return
if(!u.A_())return
w=u.Y0(d)
if(w==null||w.b!==D.cS)return
v=A.a.i(w.r).toLowerCase()
if(v==="click to edit text"||v==="tap to edit text"||v==="double-tap to edit"){w.r=""
u.X1(w).saX(0,"")}u.m(new C.ezF(u,d))
$.aW.x1$.push(new C.ezG(u,d,w))},
b7J(d){var w=this
if(d.b===D.cS&&!w.km()&&w.A_()){w.a2z(d.a)
return}w.aAo(d.a)},
aAo(d){var w,v,u,t,s,r=this
if(r.km())return
w=r.r
if(w!=null&&w!==d){v=r.Y0(w)
if(v!=null&&v.b===D.cS){u=r.ch.h(0,w)
if(u!=null&&u.a.a!==v.r)v.r=u.a.a}}t=r.w
s=t!=null&&t!==d
r.m(new C.ez4(r,s,d))
if(s||d==null){t=$.aW.al$.d.c
if(t!=null)t.jR()}},
aNb(){this.d7(new C.eu5(this))},
pe(d){return this.bAP(d)},
bAP(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$pe=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(t.od(),$async$pe)
case 3:s=f
if(!s){w=1
break}if(t.c==null){w=1
break}t.d7(new C.eu2(t,d))
case 1:return B.h(u,v)}})
return B.i($async$pe,v)},
W7(){var w=0,v=B.j(x.H),u,t=this,s
var $async$W7=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A5.GV(78,1920),$async$W7)
case 3:s=e
if(s==null||t.gdw()==null){w=1
break}t.d7(new C.etT(t,s))
case 1:return B.h(u,v)}})
return B.i($async$W7,v)},
W1(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$W1=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.gdw()==null){w=1
break}w=3
return B.b(S.D3(t.a.c),$async$W1)
case 3:s=e
if(t.c==null){w=1
break}r=J.a5(s)
if(r.gan(s)){t.c.K(x.q).f.T(D.fa3)
w=1
break}w=r.gL(s)===1?4:6
break
case 4:q=r.gI(s)
w=5
break
case 6:r=t.c
r.toString
w=7
return B.b(B.bU(null,null,new C.etQ(s),r,!0,!0,!1,null,!1,!1,x.ei),$async$W1)
case 7:q=e
case 5:if(q==null||t.c==null||t.gdw()==null){w=1
break}t.d7(new C.etR(t,q))
case 1:return B.h(u,v)}})
return B.i($async$W1,v)},
at2(){var w=this,v=w.r
if(v==null||w.gdw()==null)return
if(A.d.b5(w.gdw().z,new C.evk(v))){w.c.K(x.q).f.T(D.f94)
return}if(w.w===v)w.a2D(!0)
w.d7(new C.evl(w,v))},
bI0(){var w=this.k_(),v=w==null
if((v?null:w.b)===D.f8)return"Tap a design shape, then pick a color to fill it."
if((v?null:w.b)===D.cS)return"Selected text \u2014 color applies to this text box."
return"No selection \u2014 color applies to the slide background."},
aNT(d,e){var w=this,v=w.k_(),u=w.gdw(),t=w.e
if(t==null)return
w.d7(new C.eux(w,v,d,e,t,u))},
bCp(d){return this.aNT(d,null)},
a92(d){return this.bCx(d)},
bCx(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a92=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=D.a8i.t(0,A.a.i(d.a))||t.Q
if(q){w=3
break}else f=q
w=4
break
case 3:w=5
return B.b(t.od(),$async$a92)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}s=t.k_()
if(s!=null){r=s.b
if(r===D.cS)t.bCp(s.w>=28||s.x.gdL(0)>=A.H.gdL(0)?d.d:d.e)
else if(r===D.f8){r=d.c
t.aNT(r.j(0.88),r)}w=1
break}t.d7(new C.euC(t,d))
case 1:return B.h(u,v)}})
return B.i($async$a92,v)},
a91(d){return this.bCv(d)},
bCv(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a91=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=t.k_()
r=t.gdw()
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
return B.b(t.od(),$async$a91)
case 7:f=!f
case 6:case 4:if(f){w=1
break}if(t.c==null){w=1
break}t.d7(new C.euA(t,s,d,q,r))
case 1:return B.h(u,v)}})
return B.i($async$a91,v)},
bCf(d){var w=this.gdw()
if(w==null)return
this.d7(new C.euw(this,w,d))},
a0a(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a0a=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(C.ifF(r),$async$a0a)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.oo()
t.m(new C.exz(t,s))
w=4
return B.b(t.tP(),$async$a0a)
case 4:if(t.c!=null)t.afC(s)
case 1:return B.h(u,v)}})
return B.i($async$a0a,v)},
aaC(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$aaC=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.e
if(q==null){w=1
break}t.a2D(!0)
t.oo()
s=t.c
s.toString
w=3
return B.b(C.Ru(s,q),$async$aaC)
case 3:r=e
s=t.c
if(s==null){w=1
break}s=s.K(x.q).f
s.T(B.b3(null,null,null,null,null,A.t,null,B.d(r==null?"Your video is ready. Check your downloads.":r,null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$aaC,v)},
DL(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$DL=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=r.e
if(m==null){w=1
break}r.oo()
t=4
w=7
return B.b(C.aQv(m),$async$DL)
case 7:q=e
o=r.c
if(o==null){w=1
break}w=8
return B.b(C.aPW(o,q,m.b),$async$DL)
case 8:t=2
w=6
break
case 4:t=3
l=s.pop()
p=B.ab(l)
o=r.c
if(o==null){w=1
break}o.K(x.q).f.T(B.b3(null,null,null,null,null,A.t,null,B.d("Could not create PDF: "+B.w(p),null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$DL,v)},
Fq(d,e){return this.cCq(d,e)},
cCq(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Fq=B.e(function(f,a0){if(f===1)return B.f(a0,v)
for(;;)switch(w){case 0:h={}
if(t.qx()){w=1
break}s=d.w
if(!(s==="hati_kuhowa"||s==="hati_kuhoweya")){w=1
break}h.a=d
if(e){s=t.e
s=s!=null&&s.a===d.a}else s=!1
if(s){t.a2D(!0)
t.oo()
s=h.a=t.e.hJ()}else{r=A.d.bg(t.d,new C.ezO(d))
s=h.a=r>=0?t.d[r].hJ():d.hJ()}s=s.w
q=s==null
p=C.i8W(q?"":s)
o=C.hro(q?"":s)
if(p.length===0){w=1
break}s=t.d
q=B.U(s).k("Z<1>")
n=B.C(new B.Z(s,new C.ezP(h,p),q),q.k("K.E"))
s=h.a.b
w=3
return B.b(t.cvE(n.length,o,s),$async$Fq)
case 3:m=a0
if(m==null||t.c==null){w=1
break}h.b=null
h.c=!1
w=m==="new"?4:6
break
case 4:s=h.b=C.i8Q(h.a)
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
return B.b(t.cvD(n,o),$async$Fq)
case 10:a0=g.a=a0
w=8
break
case 9:a0=l
case 8:if(a0==null||t.c==null){w=1
break}k=A.d.h_(t.d,new C.ezQ(s))
s=h.a.b
w=11
return B.b(t.cvB(k.b,s),$async$Fq)
case 11:if(a0!==!0||t.c==null){w=1
break}s=h.b=k.hJ()
case 5:j=C.i8V(s,h.a)
s=j.b
if(s===0&&j.a===0&&j.c===0){h=t.c
if(h==null){w=1
break}h.K(x.q).f.T(D.faf)
w=1
break}w=12
return B.b(t.cvC(j.a,s,o,j.c),$async$Fq)
case 12:i=a0
if(t.c==null){w=1
break}t.m(new C.ezR(h,t,i))
t.pv()
case 1:return B.h(u,v)}})
return B.i($async$Fq,v)},
cvE(d,e,f){var w=this.c
w.toString
return B.bU(A.K,null,new C.ezk(this,e,f,d),w,!0,!0,!0,null,!1,!1,x.N)},
cvD(d,e){var w=this.c
w.toString
return B.bU(A.K,null,new C.ezj(this,e,d),w,!0,!0,!0,null,!1,!1,x.N)},
cvB(d,e){var w=this.c
w.toString
return B.bU(A.K,null,new C.ezd(this,e,d),w,!0,!0,!0,null,!1,!1,x.y)},
cvC(d,e,f,g){var w=this.c
w.toString
return B.bU(A.K,null,new C.ezf(this,f,e,d,g),w,!0,!0,!0,null,!1,!1,x.y)},
ac5(){var w=null
return B.at(B.p(w,w,A.f,w,w,new B.o(A.aZ,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w)},
ac6(d,e,f,g){var w,v,u=null,t=B.m(16),s=B.ar(d,A.c0,0.35)
s.toString
s=B.a([d,s],x.O)
w=B.a([new B.ac(0,A.G,d.j(0.28),A.dq,18)],x.V)
v=x.p
return B.B(B.a([B.p(u,B.X(e,A.c,u,u,u,28),A.f,u,u,new B.o(u,u,u,t,w,new B.a9(A.az,A.aE,A.x,s,u,u),A.n),u,54,u,u,u,u,u,54),A.ev,B.E(B.x(B.a([B.d(g,u,u,u,u,u,u,D.fl3,u,u,u),A.am,B.d(f,u,u,u,u,u,u,B.l(u,u,A.c.j(0.58),u,u,u,u,u,u,u,u,13.5,u,u,A.a7,u,1.35,!0,u,u,u,u,u,u,u,u),u,u,u)],v),A.E,u,A.e,A.j,0,A.p),1)],v),A.E,u,A.e,A.j,0,u,u)},
aVK(d,e){var w=null,v=e.j(0.14),u=B.m(12),t=B.J(e.j(0.22),A.r,1)
return B.p(w,B.d(d,w,2,A.a2,w,w,w,A.UM,A.L,w,w),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.bT,w,w,w)},
aVN(d,e,f,g,h,i,j){var w=null,v=B.m(16),u=B.m(16),t=g?new B.a9(A.az,A.aE,A.x,B.a([d.j(0.22),d.j(0.08)],x.O),w,w):w,s=g?w:A.c.j(0.05),r=B.J(g?d.j(0.45):A.c.j(0.08),A.r,1),q=d.j(g?0.22:0.14),p=B.m(13),o=x.p
return B.aG(!1,A.a1,!0,w,B.aM(!1,v,!0,B.p(w,B.B(B.a([B.p(w,B.X(f,d,w,w,w,22),A.f,w,w,new B.o(q,w,w,p,w,w,A.n),w,44,w,w,w,w,w,44),A.bc,B.E(B.x(B.a([B.d(i,w,w,w,w,w,w,A.nG,w,w,w),A.cL,B.d(h,w,w,w,w,w,w,B.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,12.5,w,w,A.a7,w,1.25,!0,w,w,w,w,w,w,w,w),w,w,w)],o),A.E,w,A.e,A.j,0,A.p),1),B.X(A.yD,A.c.j(0.35),w,w,w,14)],o),A.m,w,A.e,A.j,0,w,w),A.f,w,w,new B.o(s,w,r,u,w,t,A.n),w,w,w,w,A.bF,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.ewd(e,j),w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ai)},
bZ6(d,e,f,g,h,i){return this.aVN(d,e,f,!1,g,h,i)},
avp(d,e){var w=null,v=A.c.j(0.05),u=B.m(14),t=B.J(A.c.j(0.08),A.r,1)
return B.p(w,B.x(B.a([B.d(e,w,w,w,w,w,w,A.de,w,w,w),A.bA,B.d(d,w,w,w,w,w,w,B.l(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,11,w,w,A.P,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.a_u,w,w,w)},
aVM(d,e,f){var w=null,v=B.bp(A.c.j(0.08),w,w,w,A.c,w,A.cj,w,new B.b7(B.m(14),A.a0),w,w,w)
return B.bI(B.d(e,w,w,w,w,w,w,A.nD,w,w,w),new C.ewc(d,f),v)},
aVL(d,e){return this.aVM(d,e,null)},
Kf(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$Kf=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
s=t.a
w=3
return B.b(B.pe(l,s.c,s.d),$async$Kf)
case 3:if(!e||t.c==null){w=1
break}r=t.e
if(r==null){w=1
break}l=r.b
l=l+"\n"+A.a.aJ("=",l.length)+"\n\n"
q=new B.ff(l)
for(s=r.r,p=0;p<s.length;){o=s[p];++p
n=o.b
if(n.length===0)n="(untitled)"
q.a=l+("Slide "+p+": "+n+"\n")
for(l=A.d.gaf(o.z),n=new B.f5(l,new C.ez5());n.C();){m=l.gR(0).r
if(A.a.i(m).length!==0){m="  \u2022 "+B.aL(m,"\n"," ")+"\n"
q.a+=m}}l=o.c
if(A.a.i(l).length!==0)q.a+="  Notes: "+l+"\n"
l=q.a+="\n"}w=4
return B.b(B.aaa(l.charCodeAt(0)==0?l:l,r.b),$async$Kf)
case 4:l=t.a
w=5
return B.b(B.pd(l.c,l.d),$async$Kf)
case 5:case 1:return B.h(u,v)}})
return B.i($async$Kf,v)},
Ik(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$Ik=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.c
q.toString
s=t.a
w=3
return B.b(B.pe(q,s.c,s.d),$async$Ik)
case 3:if(!e||t.c==null){w=1
break}r=t.e
if(r==null){w=1
break}w=4
return B.b(B.aaa(A.X.ap(r.ag(),null),r.b+".json"),$async$Ik)
case 4:q=t.a
w=5
return B.b(B.pd(q.c,q.d),$async$Ik)
case 5:case 1:return B.h(u,v)}})
return B.i($async$Ik,v)},
b6U(){var w,v,u=this,t=u.e
if(t==null||t.r.length===0)return
u.oo()
u.tP()
w=u.c
w.toString
v=B.e_(new C.ezE(u,t),!1,null,x.z)
B.a4(w,!1).cg(v)},
Hy(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$Hy=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.od(),$async$Hy)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}w=4
return B.b(C.fK2(),$async$Hy)
case 4:s=e
if(s==null||t.e==null||t.c==null){w=1
break}r=C.ibM(s.a)
q=t.c
q.toString
w=5
return B.b(B.bU(A.av,null,new C.etY(s,r),q,!0,!0,!1,null,!1,!1,x.N),$async$Hy)
case 5:p=e
if(p==null){w=1
break}if(p==="scroll"){t.d7(new C.etZ(t,s))
w=1
break}if(p==="split")t.d7(new C.eu_(t,r,s))
case 1:return B.h(u,v)}})
return B.i($async$Hy,v)},
NG(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$NG=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.qx()){w=1
break}w=3
return B.b(t.od(),$async$NG)
case 3:if(!e){w=1
break}s=t.c
if(s==null){w=1
break}w=4
return B.b(C.aQu(s,null,null),$async$NG)
case 4:r=e
if(r==null||t.gdw()==null){w=1
break}t.d7(new C.eu3(t,r))
case 1:return B.h(u,v)}})
return B.i($async$NG,v)},
b3u(d){var w=this.e
if(w==null||!C.kE(w.w)||w.as!=null)return
w.as=d.b
w.at=d.c.l()},
aPc(){var w,v,u,t,s=this.c
s.toString
w=this.e
v=w==null
u=v?null:w.as
t=v?null:w.at
return C.aQu(s,t==null?null:B.b1(t),u)},
a8J(d){return this.bAG(d)},
bAG(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a8J=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.qx()){w=1
break}if(!t.A_()){s=t.c
if(s==null){w=1
break}s.K(x.q).f.T(D.fau)
w=1
break}w=3
return B.b(t.aPc(),$async$a8J)
case 3:r=f
if(r==null||t.gdw()==null){w=1
break}t.d7(new C.etV(t,r,d))
case 1:return B.h(u,v)}})
return B.i($async$a8J,v)},
ahc(d){return this.cox(d)},
cox(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$ahc=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.qx()){w=1
break}if(!t.A_()){s=t.c
if(s==null){w=1
break}s.K(x.q).f.T(D.f9C)
w=1
break}w=3
return B.b(t.aPc(),$async$ahc)
case 3:r=f
if(r==null||t.gdw()==null){w=1
break}t.d7(new C.exV(t,r,d))
case 1:return B.h(u,v)}})
return B.i($async$ahc,v)},
cba(){var w,v,u=this
if(u.km())return
w=new B.V(Date.now(),0,!1)
v=u.fx
v=v!=null&&w.bD(v).a<=5e5?++u.fr:u.fr=1
u.fx=w
if(v>=3){u.fr=0
u.fx=null
u.cBu()}},
cBu(){var w,v,u,t,s,r=this.gdw()
if(r==null)return
v=r.z
u=v.length
t=0
for(;;){if(!(t<u)){w=null
break}s=v[t]
if(s.db==="marriage_locked_nim_akuna_deni"){w=s
break}++t}if(w==null)return
this.d7(new C.ezM(this,r,(A.o.aD(w.Q,24)&255)===0||A.a.i(w.r).length===0))},
bZr(){var w,v,u,t,s,r=this.gdw()
if(r==null)return
for(w=r.z,v=w.length,u=null,t=0;t<v;++t){s=w[t]
if(s.db==="marriage_locked_nim_n_4")u=s}if(u==null)return
this.d7(new C.ewg(this,r,u.d))},
c36(d){var w
if(this.km())return!1
w=this.e
if((w==null?null:C.kE(w.w))!==!0)return!0
w=d.db
if(w==="marriage_locked"||A.a.a0(w,"marriage_locked_"))return!1
if(A.a.a0(w,"marriage_field_"))return!1
if(C.fGB(d))return!1
w=d.db
if(w==="__kiapo_video__"||A.a.a0(w,"__kiapo_video___"))return!1
if(d.b===D.lf&&A.a.a0(w,"marriage_sign_"))return!1
return!1},
c37(d){var w
if(this.km())return!1
w=this.e
if((w==null?null:C.kE(w.w))!==!0)return!0
if(!this.A_())return!1
w=d.db
if(w==="marriage_locked"||A.a.a0(w,"marriage_locked_"))return!1
if(C.fGB(d))return!1
w=d.db
if(w==="__kiapo_video__"||A.a.a0(w,"__kiapo_video___"))return!1
if(d.b===D.lf&&A.a.a0(w,"marriage_sign_"))return!1
return A.a.a0(w,"marriage_field_")},
NO(d){return this.bCX(d)},
bCX(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$NO=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.qx()){w=1
break}if(!t.A_()){s=t.c
if(s==null){w=1
break}s.K(x.q).f.T(D.f8s)
w=1
break}r=t.e
s=r==null
q=s?null:r.x
p=A.a.i(q==null?"":q)
if(s||p.length===0){w=1
break}w=3
return B.b(C.aqk(p),$async$NO)
case 3:o=f
s=t.c
if(s==null){w=1
break}if(o==null||A.a.i(o).length===0){s.K(x.q).f.T(D.f96)
w=1
break}s=t.e
if(s!==r){s=s==null?null:s.a
s=s!==r.a}else s=!1
if(s){s=r.r
n=s.length===0?null:A.d.gI(s)
if(n!=null)for(s=n.z,q=s.length,m=0;m<q;++m){l=s[m]
k=l.db
if(k==="__kiapo_video__"||A.a.a0(k,"__kiapo_video___")){l.at=o
l.db="__kiapo_video__"}}C.a7u(r)
w=1
break}t.m(new C.euG(t,d,o))
t.oo()
$.aW.x1$.push(new C.euH(t))
case 1:return B.h(u,v)}})
return B.i($async$NO,v)},
W5(){var w=0,v=B.j(x.H),u,t=this,s
var $async$W5=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.od(),$async$W5)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}w=4
return B.b(C.bDp(),$async$W5)
case 4:s=e
if(s==null||t.gdw()==null){w=1
break}t.d7(new C.etS(t,s))
case 1:return B.h(u,v)}})
return B.i($async$W5,v)},
Oy(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$Oy=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.od(),$async$Oy)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}s=t.k_()
if(s==null||s.at==null){w=1
break}r=s.at
r.toString
w=4
return B.b(C.fJU(r),$async$Oy)
case 4:q=e
if(q==null){w=1
break}t.d7(new C.evI(s,q))
case 1:return B.h(u,v)}})
return B.i($async$Oy,v)},
j8(d){this.d7(new C.eu0(this,d))},
qn(d){return this.bC8(d)},
bC8(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$qn=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)A:switch(w){case 0:if(d!=="print"&&d!=="present"&&t.qx()){w=1
break}m=!D.aPT.t(0,A.a.i(d))
if(m){w=3
break}else f=m
w=4
break
case 3:w=5
return B.b(t.od(),$async$qn)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}switch(d){case"upload_pdf":t.Hy()
w=1
break A
case"sign_paper":t.NG()
w=1
break A
case"hd_photo":t.W5()
w=1
break A
case"sharpen":t.Oy()
w=1
break A
case"print":t.DL()
w=1
break A
case"rotate":s=t.k_()
if(s!=null)t.d7(new C.eu9(s))
w=1
break A
case"text_box":t.aNb()
w=1
break A
case"picture":t.W7()
w=1
break A
case"present":t.b6U()
w=1
break A
case"new_slide":t.a8L()
w=1
break A
case"export_json":t.Ik()
w=1
break A
case"outline_share":t.Kf()
w=1
break A
case"flashcard_tool":t.vp(D.Iy)
w=1
break A
case"quiz_tool":t.vp(D.Iz)
w=1
break A
case"worksheet_tool":t.vp(D.IA)
w=1
break A
case"duplicate_el":s=t.k_()
if(s==null){w=1
break A}t.d7(new C.eua(t,s))
w=1
break A
case"delete_el":t.at2()
w=1
break A
case"bring_fwd":s=t.k_()
if(s==null||t.gdw()==null){w=1
break A}t.d7(new C.eub(t,s))
w=1
break A
case"send_back":s=t.k_()
if(s==null||t.gdw()==null){w=1
break A}t.d7(new C.eum(t,s))
w=1
break A
case"align_left":s=t.k_()
if(s!=null)t.d7(new C.eup(s))
w=1
break A
case"align_center":s=t.k_()
if(s!=null)t.d7(new C.euq(s))
w=1
break A
case"align_right":s=t.k_()
if(s!=null)t.d7(new C.eur(s))
w=1
break A
case"grayscale":case"brighten":t.Oy()
w=1
break A
case"flip_h":s=t.k_()
if(s!=null)t.d7(new C.eus(s))
w=1
break A
case"flip_v":s=t.k_()
if(s!=null)t.d7(new C.eut(s))
w=1
break A
case"rectangle":t.pe(D.bh)
w=1
break A
case"circle":t.pe(D.eR)
w=1
break A
case"triangle":t.pe(D.jY)
w=1
break A
case"arrow":t.pe(D.Dh)
w=1
break A
case"line":case"divider":t.pe(D.fA)
w=1
break A
case"word_count":r=t.gdw()
if(r==null){w=1
break A}for(q=A.d.gaf(r.z),p=new B.f5(q,new C.euu()),o=0;p.C();){n=A.a.fD(A.a.i(q.gR(0).r),B.af("\\s+",!0,!1,!1,!1))
o+=new B.Z(n,new C.euv(),B.U(n).k("Z<1>")).gL(0)}t.c.K(x.q).f.T(B.b3(null,null,null,null,null,A.t,null,B.d(""+o+" words on this slide",null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
w=1
break A
case"title":q=C.cE()
t.j8(C.iY(A.L,!1,t.gqD().d.l(),A.aF,40,A.bp,A.u,0.18,q,"Presentation Title",0,D.mS,0.8,0.1,0.28))
w=1
break A
case"subtitle":q=C.cE()
t.j8(C.iY(A.L,!1,t.gqD().e.l(),A.aF,22,A.bp,A.a7,0.12,q,"Subtitle goes here",0,D.dh,0.8,0.1,0.48))
w=1
break A
case"bullets":t.j8(C.iY(A.bi,!0,4279310375,A.aF,20,A.bp,A.a7,0.5,C.cE(),"\u2022 First point\n\u2022 Second point\n\u2022 Third point",0,D.uN,0.8,0.1,0.22))
w=1
break A
case"numbered":t.j8(C.iY(A.bi,!1,4279310375,A.aF,20,A.bp,A.a7,0.5,C.cE(),"1. First item\n2. Second item\n3. Third item",0,D.uM,0.8,0.1,0.22))
w=1
break A
case"quote":t.j8(C.iY(A.L,!1,4279310375,A.aF,24,A.cD,A.a7,0.25,C.cE(),'"Insert meaningful quote here."',0,D.dh,0.8,0.1,0.3))
w=1
break A
case"citation":t.j8(C.iY(A.bi,!1,4284773515,A.aF,14,A.bp,A.a7,0.1,C.cE(),"Author, Title (Year). Publisher.",0,D.uN,0.8,0.1,0.78))
w=1
break A
case"date_stamp":t.j8(C.iY(A.dU,!1,4279310375,A.aF,14,A.bp,A.a7,0.08,C.cE(),C.bDr(),0,D.dh,0.24,0.72,0.04))
w=1
break A
case"page_number":t.j8(C.iY(A.dU,!1,4279310375,A.aF,13,A.bp,A.a7,0.06,C.cE(),"Page "+(t.f+1),0,D.dh,0.18,0.78,0.9))
w=1
break A
case"header_bar":t.d7(new C.euc(t))
w=1
break A
case"footer_bar":t.d7(new C.eud(t))
w=1
break A
case"highlight":t.d7(new C.eue(t))
w=1
break A
case"redact":t.d7(new C.euf(t))
w=1
break A
case"callout":t.d7(new C.eug(t))
w=1
break A
case"checkboxes":t.j8(C.iY(A.bi,!1,4279310375,A.aF,20,A.bp,A.a7,0.45,C.cE(),"\u2610 Task one\n\u2610 Task two\n\u2610 Task three",0,D.dh,0.8,0.1,0.2))
w=1
break A
case"table":t.j8(C.iY(A.bi,!1,4279310375,A.aF,16,A.bp,A.a7,0.55,C.cE(),"Column A\tColumn B\tColumn C\nRow 1\tData\tData\nRow 2\tData\tData",0,D.dh,0.8,0.1,0.18))
w=1
break A
case"memo":t.d7(new C.euh(t))
w=1
break A
case"letter":t.j8(C.iY(A.bi,!1,4279179050,A.aF,17,A.bp,A.a7,0.82,C.cE(),C.bDr()+"\n\nDear [Name],\n\n[Letter body]\n\nSincerely,\n[Your name]",0,D.dh,0.8,0.1,0.08))
w=1
break A
case"agenda":t.j8(C.iY(A.bi,!1,4279310375,A.aF,22,A.bp,A.P,0.76,C.cE(),"AGENDA\n\n1. Welcome\n2. Updates\n3. Discussion\n4. Action items\n5. Next steps",0,D.uN,0.8,0.1,0.12))
w=1
break A
case"toc":t.j8(C.iY(A.bi,!1,4279310375,A.aF,18,A.bp,A.a7,0.76,C.cE(),"TABLE OF CONTENTS\n\n1. Introduction .......... 1\n2. Main topic .......... 3\n3. Conclusion .......... 8",0,D.dh,0.8,0.1,0.12))
w=1
break A
case"sig_line":t.j8(C.iY(A.bi,!1,4279310375,A.aF,16,A.bp,A.a7,0.08,C.cE(),"Signature: _________________________",0,D.dh,0.8,0.1,0.78))
w=1
break A
case"initial_line":t.j8(C.iY(A.bi,!1,4279310375,A.aF,16,A.bp,A.a7,0.08,C.cE(),"Initials: ______",0,D.dh,0.3,0.65,0.78))
w=1
break A
case"approved":t.j8(C.iY(A.L,!1,4278556265,A.aF,28,A.bp,A.u,0.12,C.cE(),"APPROVED",0,D.mS,0.32,0.62,0.08))
w=1
break A
case"draft":t.j8(C.iY(A.L,!1,4292617766,A.aF,28,A.bp,A.u,0.12,C.cE(),"DRAFT",0,D.dh,0.32,0.62,0.08))
w=1
break A
case"confidential":t.j8(C.iY(A.L,!1,871318596,A.aF,36,A.bp,A.u,0.12,C.cE(),"CONFIDENTIAL",0,D.dh,0.8,0.1,0.42))
w=1
break A
case"sticky":t.d7(new C.eui(t))
w=1
break A
case"progress":t.d7(new C.euj(t))
w=1
break A
case"stars":t.j8(C.iY(A.L,!1,4279310375,A.aF,36,A.bp,A.a7,0.12,C.cE(),"\u2605\u2605\u2605\u2605\u2606",0,D.qx,0.8,0.1,0.4))
w=1
break A
case"equation":t.j8(C.iY(A.L,!1,4279310375,A.aF,32,A.bp,A.P,0.14,C.cE(),"y = mx + b",0,D.dh,0.8,0.1,0.38))
w=1
break A
case"timeline":t.j8(C.iY(A.L,!1,4279310375,A.aF,18,A.bp,A.a7,0.2,C.cE(),"2024 \u2500\u2500\u25ba 2025 \u2500\u2500\u25ba 2026\nPhase 1    Phase 2    Phase 3",0,D.uM,0.8,0.1,0.35))
w=1
break A
case"two_col":t.d7(new C.euk(t))
w=1
break A
case"compare":t.d7(new C.eul(t))
w=1
break A
case"link_text":t.j8(C.iY(A.bi,!1,4280640491,A.mX,16,A.bp,A.a7,0.1,C.cE(),"https://example.com",0,D.dh,0.8,0.1,0.5))
w=1
break A
case"phone":t.j8(C.iY(A.bi,!1,4279310375,A.aF,18,A.bp,A.a7,0.1,C.cE(),"(555) 123-4567",0,D.dh,0.8,0.1,0.5))
w=1
break A
case"email":t.j8(C.iY(A.bi,!1,4280640491,A.aF,18,A.bp,A.a7,0.1,C.cE(),"name@email.com",0,D.dh,0.8,0.1,0.5))
w=1
break A
case"qr_placeholder":t.d7(new C.eun(t))
w=1
break A
case"cover_page":r=t.gdw()
if(r==null){w=1
break A}t.d7(new C.euo(t,r))
w=1
break A
case"invoice":t.j8(C.iY(A.bi,!1,4279179050,A.aF,16,A.bp,A.a7,0.84,C.cE(),"INVOICE #001\n\nBill To:\nItem\tQty\tPrice\nService A\t1\t$100\nTOTAL\t\t$100",0,D.dh,0.8,0.1,0.08))
w=1
break A
case"resume":t.j8(C.iY(A.bi,!1,4279179050,A.aF,17,A.bp,A.a7,0.84,C.cE(),"YOUR NAME\nJob Title\n\nExperience\n\u2022 Role at Company\n\nEducation\n\u2022 Degree",0,D.dh,0.8,0.1,0.08))
w=1
break A
case"minutes":t.j8(C.iY(A.bi,!1,4279310375,A.aF,16,A.bp,A.a7,0.88,C.cE(),"MEETING MINUTES\nDate: "+C.bDr()+"\nAttendees:\n\nDiscussion:\n\nDecisions:\n\nAction items:",0,D.dh,0.8,0.1,0.06))
w=1
break A
case"lab_report":t.j8(C.iY(A.bi,!1,4279310375,A.aF,17,A.bp,A.a7,0.88,C.cE(),"LAB REPORT\n\nHypothesis:\n\nProcedure:\n\nResults:\n\nConclusion:",0,D.dh,0.8,0.1,0.06))
w=1
break A
case"rubric":t.j8(C.iY(A.bi,!1,4279310375,A.aF,15,A.bp,A.a7,0.8,C.cE(),"RUBRIC\nCriteria\tExcellent\tGood\tNeeds work\nContent\t4\t3\t2\nOrganization\t4\t3\t2",0,D.dh,0.8,0.1,0.1))
w=1
break A}case 1:return B.h(u,v)}})
return B.i($async$qn,v)},
cv5(d){if(!this.y)return!1
if(this.w!=null)return!1
if(!d)return!0
return!D.f0P.t(0,this.z)},
cv4(d){if(this.k_()==null)return!1
if(this.w!=null)return!1
if(d)return!1
return this.as},
b8B(d,e,f,g,h,i){var w,v,u,t,s,r,q,p=null,o=d===D.cl,n=o?12:10
if(e)w=f.j(0.25)
else w=g?A.c.j(0.06):A.w.j(0.04)
v=B.m(12)
u=e?f:A.bz
u=B.J(u,A.r,o&&e?2:1)
t=C.ibB(d)
s=o?12:18
r=o?A.H:A.cP
if(o)if(e)q=f
else q=g?A.ae:A.al
else q=p
n=B.a([B.p(p,B.d(t,p,p,p,p,p,p,B.l(p,p,q,p,p,p,p,p,p,p,p,s,p,p,r,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),A.f,p,p,new B.o(w,p,u,v,p,p,A.n),p,p,p,p,new B.Q(n,8,n,8),p,p,p)],x.p)
if(i)n.push(B.ao(p,B.p(p,D.OM,A.f,p,p,D.EA,p,12,p,p,p,p,p,12),p,p,p,-2,-2,p))
return new B.D(A.fx,B.aB(p,new B.an(A.a_,p,A.aa,A.f,n,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,h,p,p,p,p,p,p,!1,A.a5),p)},
bOs(d){var w,v=null,u=this.k_()
if(u==null)return A.bJ
w=B.a([A.ac,B.d("Anim:",v,v,v,v,v,v,B.l(v,v,d?A.aB:A.al,v,v,v,v,v,v,v,v,10,v,v,A.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.bn],x.p)
A.d.v(w,new B.N(D.Rg,new C.evH(this,u,d),x.bR))
return B.B(w,A.m,v,A.e,A.j,0,v,v)},
vp(d){return this.bAO(d)},
bAO(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$vp=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=D.aPN.t(0,d)
if(s){w=3
break}else f=s
w=4
break
case 3:w=5
return B.b(t.od(),$async$vp)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}t.d7(new C.eu1(t,d))
case 1:return B.h(u,v)}})
return B.i($async$vp,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
if(h.x)return D.f_w
w=h.e
if(w==null)return h.bEH()
v=h.gdw()
v.toString
u=h.c
u.toString
t=B.P(u).ax.a===A.I
u=h.c
u.toString
s=x.w
r=B.aI(u,A.bX,s).w.a.a<900
q=!r
u=h.c
u.toString
p=B.aI(u,A.eM,s).w.f.d>40
s=h.w==null
o=!s
u=!p
n=!u||o
m=t?A.c0:D.bf7
l=x.p
k=B.a([],l)
if(s){j=h.e
j=j!=null&&j.gSF()}else j=!1
if(j)k.push(new C.a7Z(h.a.c,!1,h.e.gbaQ(),h.gcb7(),g))
else if(s&&h.e!=null&&!h.km()&&C.ci9(h.e.w)){j=h.a
k.push(new C.a7Z(j.c,j.d,g,h.gccg(),g))}if(s)k.push(h.bOn(w,t,r))
if(s&&h.km()){w=t?A.fJ:A.kA
j=B.m(14)
i=B.J(A.bk.j(0.35),A.r,1)
k.push(B.p(g,B.B(B.a([D.bST,A.ac,B.E(B.d("Received copy \u2014 view, print, or download only. Editing is turned off.",g,g,g,g,g,g,B.l(g,g,t?A.c:A.fJ,g,g,g,g,g,g,g,g,12,g,g,A.P,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),1)],l),A.m,g,A.e,A.j,0,g,g),A.f,g,g,new B.o(w,g,i,j,g,g,A.n),g,g,g,A.BB,A.iU,g,g,g))}w=!n
if(w&&!h.km())k.push(h.c43(t,r))
if(w&&h.km())k.push(h.cCr(t))
if(r&&h.k_()!=null&&w&&!h.km())k.push(h.c3Z(t))
j=B.a([],l)
if(q&&w)j.push(new B.a7(132,g,h.b6l(t,!0),g))
i=B.a([],l)
if(r&&w)i.push(new B.a7(g,72,h.b6l(t,!1),g))
i.push(B.E(new B.bM(A.b3,g,g,h.bG0(v,t,!s||p),g),1))
if(h.cv5(r)&&u&&s&&!h.km())i.push(h.caU(v,t,r))
j.push(B.E(B.x(i,A.m,g,A.e,A.j,0,A.p),1))
if(q&&!h.km()&&h.cv4(!1))j.push(new B.a7(240,g,h.bR9(t),g))
k.push(B.E(B.B(j,A.aj,g,A.e,A.j,0,g,g),1))
if(u&&s)k.push(new B.a7(g,r?72:h.a.e,g,g))
w=B.a([B.x(k,A.m,g,A.e,A.j,0,A.p)],l)
if(o&&r)w.push(h.c4_(t))
return B.c6(g,m,B.bn(!1,new B.an(A.a_,g,A.aa,A.t,w,g),!0,!1,A.af,!0,!0),g,!1,!1,g,!1)},
bEH(){var w,v,u,t,s,r=this,q=null,p=r.c
p.toString
w=B.P(p).ax.a===A.I
p=w?A.c0:A.bN
v=r.a.e
u=r.ca9(A.bk,A.qg,new C.euK(r),r.gceq(),"School & document toolkit \u2014 edit PDFs, photos, sign papers, present, and build class decks","NGMY SLIDES")
t=x.p
s=B.B(B.a([B.E(r.aMU(A.bk,A.hK,"Blank Presentation",new C.euL(r)),1),A.as,B.E(r.aMU(A.b_,A.wk,"Class Template",new C.euM(r)),1)],t),A.m,q,A.e,A.j,0,q,q)
u=B.a([u,A.bx,s,A.mW,B.d("YOUR PRESENTATIONS",q,q,q,q,q,q,B.l(q,q,w?A.aB:A.al,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1.2,q,q,q,q,q,q),q,q,q),A.ad],t)
t=r.d
if(t.length===0)u.push(r.bBB(w))
else{t=new B.i2(t,B.U(t).k("i2<1>"))
A.d.v(u,t.gdV(t).dF(0,new C.euN(r,w),x.l))}return B.c6(q,p,B.bn(!1,B.ct(u,q,new B.Q(18,12,18,v),q,q,A.ah,!1),!0,!1,A.af,!0,!0),q,!1,!1,q,q)},
bMx(){this.m(new C.evn(this))
var w=this.c
w.toString
if(B.aI(w,A.bX,x.w).w.a.a<900){w=$.aW.al$.d.c
if(w!=null)w.jR()}},
afV(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$afV=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.k_()==null){w=1
break}s=t.c
s.toString
s=B.P(s)
r=t.c
r.toString
w=3
return B.b(B.bU(A.K,null,new C.exy(t,s.ax.a===A.I),r,!0,!0,!0,null,!1,!1,x.H),$async$afV)
case 3:case 1:return B.h(u,v)}})
return B.i($async$afV,v)},
AX(d,e){return this.cvr(d,e)},
cvr(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$AX=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:j=r.c
j.toString
w=3
return B.b(B.i0(D.XJ,!0,"Dismiss",j,new C.ez6(),new C.ez7(d,e),A.iR,!0,x.N),$async$AX)
case 3:o=g
if(o==null||r.c==null){w=1
break}j=o==="rename"
if(j||o==="duplicate")if(d.z){r.ajh()
w=1
break}n=o==="transfer_hati"
if(n&&d.z&&!d.gSF()){r.ajh()
w=1
break}w=o==="pdf"?4:6
break
case 4:t=8
w=11
return B.b(C.aQv(d),$async$AX)
case 11:q=g
j=r.c
if(j==null){w=1
break}w=12
return B.b(C.aPW(j,q,d.b),$async$AX)
case 12:t=2
w=10
break
case 8:t=7
i=s.pop()
p=B.ab(i)
j=r.c
if(j==null){w=1
break}j.K(x.q).f.T(B.b3(null,null,null,null,null,A.t,null,B.d("Could not create PDF: "+B.w(p),null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
w=10
break
case 7:w=2
break
case 10:w=5
break
case 6:w=n?13:15
break
case 13:w=16
return B.b(r.Fq(d,!1),$async$AX)
case 16:w=14
break
case 15:w=o==="delete"?17:19
break
case 17:j=r.c
j.toString
w=20
return B.b(B.i0(D.XJ,!0,"Dismiss",j,new C.ez8(),new C.ez9(d),A.a1,!0,x.y),$async$AX)
case 20:if(g===!0)r.Oj(d)
w=18
break
case 19:w=j?21:23
break
case 21:w=24
return B.b(r.agX("Rename presentation",d.b),$async$AX)
case 24:l=g
if(l!=null)r.cpK(d,l)
w=22
break
case 23:if(o==="duplicate"){k=d.ag()
k.n(0,"id",C.cE())
k.n(0,"name",d.b+" (Copy)")
r.m(new C.eza(r,k))
r.pv()}case 22:case 18:case 14:case 5:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$AX,v)},
b1q(d,e){var w=null
return B.bN(!1,D.fKp,w,w,!0,w,w,e,w,B.fy(w,w,w,w,w,w,w,w,w,w,w,A.bk,w,w,w,A.ax,w,A.lA,w,w,w,w,w,A.kl,w,w))},
bBB(d){var w=this.fy
w===$&&B.c()
return B.c9(w,new C.eu6(this,d),null)},
bKD(d,e,f){var w=new B.N(B.a(d.split(" \u2022 "),x.s),new C.evb(),x.dv).c0(0,new C.evc()),v=B.C(w,w.$ti.k("K.E"))
return new B.D(G.ajd,this.aNu(v,e,new C.evd(),f),null)},
aNu(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=x.p,l=B.a([],m)
for(w=f!=null,v=0;v<d.length;++v){u=B.a([],m)
if(v>0)u.push(A.em)
t=e.j(g?0.14:0.1)
s=new B.aQ(6,6)
r=new B.ay(e.j(g?0.55:0.45),1,A.r,-1)
q=B.a([],m)
if(w){p=f.$1(d[v])
A.d.v(q,B.a([B.X(p,g?A.ae:A.bs,n,n,n,10),A.qE],m))}p=d[v]
o=g?A.c.j(0.85):A.aJ
q.push(new B.y(p,n,new B.F(!0,o,n,n,n,n,9.5,A.H,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n,n,n,n,1,n,n))
u.push(B.p(n,new B.cc(A.aN,A.e,A.Q,A.m,n,A.p,n,0,q,n),A.f,n,n,new B.o(t,n,new B.bK(r,r,r,r),new B.bk(s,s,s,s),n,n,A.n),n,n,n,n,A.mG,n,n,n))
A.d.v(l,u)}return B.eS(A.a4,B.B(l,A.m,n,A.e,A.Q,0,n,n),A.f,A.e2)},
bBz(d,e,f){return this.aNu(d,e,null,f)},
bKF(d,e,f){var w,v=d.w
if(v==="hati_kuhowa")w=D.dmw
else if(v==="hati_kuhoweya")w=D.d7t
else{if(v==="hati_kiapo_uongozi")v=D.cUx
else v=C.kE(v)?D.d14:A.QS
w=v}v=this.fy
v===$&&B.c()
return B.c9(v,new C.evg(this,f,d,e,w),null)},
c4_(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.k_()
if(i==null||i.b!==D.cS)return A.bJ
w=k.X1(i)
v=k.au4(i)
u=A.w.j(0.55)
t=x.p
s=B.bn(!1,new B.D(A.BD,B.B(B.a([B.d("Edit text",j,j,j,j,j,j,B.l(j,j,A.c.j(0.9),j,j,j,j,j,j,j,j,15,j,j,A.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),A.b2,B.bN(!1,D.fFT,j,j,!0,j,j,new C.ewH(k),j,j)],t),A.m,j,A.e,A.j,0,j,j),j),!0,!1,A.af,!0,!0)
r=d?A.av:A.c
q=B.m(18)
p=B.J(A.bk.j(0.45),A.r,1)
o=B.a([new B.ac(0,A.G,A.w.j(0.25),A.J,20)],x.V)
n=i.x
m=i.y
l=i.z
r=B.E(new B.D(A.hg,B.c1(new B.D(A.eQ,B.aN(j,A.Z,!0,j,!0,A.t,j,B.aO(),w,A.bk,j,j,j,j,2,D.bYV,A.y,!0,j,!0,j,!0,v,A.ak,j,j,j,j,j,A.wP,j,j,j,j,j,j,!1,"\u2022",j,new C.ewI(k,i),j,j,j,!1,j,j,!1,j,!0,j,A.ab,j,j,j,j,j,j,j,j,j,j,j,B.l(j,j,d?A.c:A.M,j,l,j,j,j,j,j,j,18,m,j,n,j,1.35,!0,j,j,j,j,j,j,j,j),!0,A.a3,A.A4,A.ao,j,A.Uc,j,j),j),new B.o(r,j,p,q,o,j,A.n),A.bg),j),1)
q=B.m(16)
p=d?A.bo:A.c
o=B.J(d?A.aJ:A.aL,A.r,1)
n=B.E(B.cd(B.B(B.a([k.uf(G.NR,j,new C.ewJ(k,i),d),k.uf(G.a0D,j,new C.ewK(k,i),d),k.uf(K.anu,j,new C.ewL(k,i),d),k.uf(K.a1l,j,new C.ewM(k,i),d),k.uf(k.bBx(i.as),j,new C.ewN(k,i),d),k.uf(D.aoD,j,new C.ewO(k,i),d),k.uf(D.aoC,j,new C.ewP(k,i),d)],t),A.m,j,A.e,A.j,0,j,j),A.t,j,A.y,j,j,j,j,A.aN),1)
m=A.k.N(i.w)
return B.bT(0,B.aG(!1,A.a1,!0,j,B.x(B.a([s,r,new B.D(I.ajm,B.p(j,B.B(B.a([n,A.ac,B.d(""+m+" pt",j,j,j,j,j,j,B.l(j,j,d?A.aB:A.al,j,j,j,j,j,j,j,j,11,j,j,A.H,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),A.dc],t),A.m,j,A.e,A.j,0,j,j),A.f,j,j,new B.o(p,j,o,q,j,j,A.n),j,j,j,j,A.lB,j,j,j),j)],t),A.m,j,A.e,A.j,0,A.p),A.f,u,0,j,j,j,j,j,A.ai),0,0,0)},
c3Z(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.k_()
if(m==null)return A.bJ
w=m.b
v=w===D.cS
u=B.m(18)
t=x.O
t=d?B.a([A.bo,A.M],t):B.a([A.c,A.aP],t)
s=B.J(d?A.aJ:A.aL,A.r,1)
r=B.a([new B.ac(0,A.G,A.w.j(0.12),A.cv,16)],x.V)
q=x.p
p=B.a([],q)
if(v)p.push(o.b5_(A.iW,"Edit",new C.ews(o,m),d,!0))
if(w===D.lK)p.push(o.b5_(A.GZ,"Shape & ring",new C.ewt(o),d,!0))
p.push(o.uf(A.Cl,"Format",new C.ewu(o),d))
if(v)A.d.v(p,B.a([o.uf(G.NR,n,new C.ewv(o,m),d),o.uf(D.aoD,n,new C.eww(o,m),d),o.uf(D.aoC,n,new C.ewx(o,m),d)],q))
p.push(A.b2)
p.push(o.ctg(A.ed,n,o.gaRw(),d,!0))
p.push(o.uf(A.ht,"Done",new C.ewy(o),d))
return B.p(n,B.B(p,A.m,n,A.e,A.j,0,n,n),A.f,n,n,new B.o(n,n,s,u,r,new B.a9(A.a4,A.a8,A.x,t,n,n),A.n),n,n,n,A.BC,A.lB,n,n,n)},
bBx(d){switch(d.a){case 2:return D.a1i
case 1:case 5:return D.a1k
default:return D.a1j}},
c4U(d){switch(d.a){case 0:case 4:return A.L
case 2:return A.dU
default:return A.bi}},
aAn(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o,n=null
if(i)w=A.aw
else if(h)w=A.c
else{v=g?A.ae:A.aJ
w=v}v=B.m(12)
u=B.m(12)
t=h?L.Hk:n
if(h)s=n
else s=g?A.c.j(0.06):A.bN
r=e==null
q=r?10:12
p=x.p
o=B.a([B.X(d,w,n,n,n,16)],p)
if(!r)A.d.v(o,B.a([A.em,B.d(e,n,n,n,n,n,n,B.l(n,n,w,n,n,n,n,n,n,n,n,12,n,n,A.H,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],p))
return new B.D(A.q9,B.aG(!1,A.a1,!0,n,B.aM(!1,v,!1,B.eJ(new B.D(new B.Q(q,8,q,8),B.B(o,A.m,n,A.e,A.Q,0,n,n),n),n,new B.o(s,n,n,u,n,t,A.n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,f,n,n,n,n,n,n,n),A.f,A.K,0,n,n,n,n,n,A.ai),n)},
uf(d,e,f,g){return this.aAn(d,e,f,g,!1,!1)},
b5_(d,e,f,g,h){return this.aAn(d,e,f,g,h,!1)},
ctg(d,e,f,g,h){return this.aAn(d,e,f,g,!1,h)},
bOn(d,e,f){var w,v,u,t,s,r,q,p=this,o=null,n=B.m(20),m=x.O
m=e?B.a([A.bo,A.M],m):B.a([A.c,A.n5],m)
w=B.J(e?A.aJ:A.nS,A.r,1.2)
v=B.a([new B.ac(0,A.G,A.bk.j(e?0.18:0.1),A.cv,18)],x.V)
u=p.a33(A.eJ,"Back",p.gbHL(),e)
t=d.b
s=f?14:15
t=B.d(t,o,1,A.a2,o,o,o,B.l(o,o,e?A.c:A.M,o,o,o,o,o,o,o,o,s,o,o,A.u,o,o,!0,o,-0.2,o,o,o,o,o,o),o,o,o)
s=p.f
r=d.r.length
q=x.p
r=B.a([u,A.dc,B.E(B.B(B.a([new B.ds(1,A.cn,t,o),A.ac,B.d(""+(s+1)+" of "+r,o,1,o,o,o,o,B.l(o,o,e?A.bY:A.al,o,o,o,o,o,o,o,o,11,o,o,A.P,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],q),A.tO,o,A.e,A.j,0,A.cY,o),1)],q)
if(!p.km()){u=p.a33(A.rv,"Undo",p.ax.length===0?o:p.gcD_(),e)
A.d.v(r,B.a([u,p.a33(D.bMq,"Redo",p.ay.length===0?o:p.gcot(),e)],q))}r.push(p.a33(A.yB,"PDF",new C.evA(p),e))
r.push(p.a33(A.hL,"Download as video",new C.evB(p),e))
if(!p.km())r.push(B.C7(o,o,B.X(A.od,e?A.ae:A.bs,o,o,o,o),new C.evC(p),A.J,new C.evD(p),A.af,"More",x.N))
r.push(A.dc)
r.push(B.aG(!1,A.a1,!0,o,B.aM(!1,B.m(14),!0,B.eJ(D.ekh,o,new B.o(o,o,o,B.m(14),o,L.Hk,A.n),o,o,o),o,!0,o,o,o,o,o,o,o,o,o,o,o,p.gaBb(),o,o,o,o,o,o,o),A.f,A.K,0,o,o,o,o,o,A.ai))
return B.p(o,B.B(r,A.m,o,A.e,A.j,0,o,o),A.f,o,o,new B.o(o,o,w,n,v,new B.a9(A.az,A.aE,A.x,m,o,o),A.n),o,o,o,D.bxb,D.bCr,o,o,o)},
cCr(d){var w=this,v=null,u=B.m(18),t=d?A.av.j(0.92):A.c.j(0.96),s=B.J(d?A.cp:A.aL,A.r,1)
return B.p(v,B.cd(B.B(B.a([w.iV(A.uo,"Print",new C.ezS(w),d),w.iV(A.yB,"Download PDF",new C.ezT(w),d),w.iV(A.ql,"Present",w.gaBb(),d)],x.p),A.m,v,A.e,A.j,0,v,v),A.t,v,A.y,v,v,v,v,A.aN),A.f,v,v,new B.o(t,v,s,u,v,v,A.n),v,v,v,A.BB,G.al_,v,v,v)},
a33(d,e,f,g){var w,v=null
if(f==null)w=g?A.aZ:A.dp
else w=g?A.ae:A.aJ
return B.aJ(v,v,v,v,B.X(d,w,v,v,v,20),v,v,v,f,v,v,v,v,e,A.cd)},
c43(d,e){var w,v,u,t,s,r=this,q=null,p=B.a(["Home","Insert","School","Tools","Design","Transitions","View"],x.s),o=r.e
if(o==null)o=q
else{o=o.CW
o=(o==null?"":o).length!==0}w=o===!0
o=B.m(18)
v=d?A.av.j(0.92):A.c.j(0.96)
u=B.J(d?A.cp:A.aL,A.r,1)
t=x.f0
t=B.C(new B.N(p,new C.ewS(r,d),t),t.k("ak.E"))
t.push(new B.D(Y.akF,new B.fd(new C.ewT(r),q),q))
A.d.v(t,w?B.a([new B.D(R.w_,r.ahA(A.l5,"Ending celebration",r.gceD(),d),q),new B.D(R.w_,r.ahA(A.GZ,"Logo ring & frame",r.gcfk(),d),q)],x.p):A.fz)
A.d.v(t,w?B.a([new B.D(R.w_,r.ahA(A.nr,"Look and feel",r.gcfl(),d),q),new B.D(R.w_,r.ahA(A.pc,"Edit this slide's text",r.gcfS(),d),q)],x.p):A.fz)
t.push(new B.D(R.w_,B.hc(B.aB(q,B.p(q,D.eZW,A.f,q,q,new B.o(q,q,q,B.m(999),B.a([new B.ac(0,A.G,O.lv.j(0.4),A.J,10)],x.V),D.aqy,A.n),q,34,q,q,A.fL,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.ewU(r),q,q,q,q,q,q,!1,A.a5),q,"Books \u2014 write and print a fold & staple book",q,q),q))
t=B.cd(B.B(t,A.m,q,A.e,A.j,0,q,q),A.t,q,A.y,q,D.bCU,q,q,A.aN)
s=e?8:10
return B.p(q,B.x(B.a([t,B.cd(r.cqT(d),A.t,q,A.y,q,new B.Q(8,2,8,s),q,q,A.aN)],x.p),A.aj,q,A.e,A.j,0,A.p),A.f,q,q,new B.o(v,q,u,o,q,q,A.n),q,q,q,A.BB,q,q,q,q)},
cqT(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0="Text Box",a1="New Slide",a2="Delete Slide"
switch(e.z){case"School":w=B.a([],x.p)
for(v=0;v<5;++v){u={}
t=D.dfP[v]
u.a=null
s=u.a=t.b
w.push(e.lO(e.csG(s),t.a,new C.eyg(u,e),a3,D.aPN.t(0,s)))}w.push(e.iV(A.l7,"Notes Slide",new C.eyh(e),a3))
w.push(e.lO(A.GY,"Quiz",new C.eyi(e),a3,!0))
w.push(e.lO(M.Gz,"Worksheet",new C.eyt(e),a3,!0))
w.push(e.lO(V.H3,"Flashcard",new C.eyE(e),a3,!0))
w.push(e.lO(A.OD,"Lab Report",new C.eyP(e),a3,!0))
w.push(e.lO(A.uf,"Rubric",new C.eyW(e),a3,!0))
w.push(e.lO(A.p7,"Minutes",new C.eyX(e),a3,!0))
w.push(e.lO(A.oc,"Syllabus",new C.eyY(e),a3,!0))
w.push(e.lO(A.a1S,"Timeline",new C.eyZ(e),a3,!0))
return B.B(w,A.m,d,A.e,A.j,0,d,d)
case"Tools":w=B.a([],x.p)
for(v=0;v<74;++v){r=D.dha[v]
w.push(e.lO(r.b,r.c,new C.ez_(e,r),a3,!D.aPT.t(0,A.a.i(r.a))))}return B.B(w,A.m,d,A.e,A.j,0,d,d)
case"Insert":return B.B(B.a([e.iV(A.yV,a0,e.gaNa(),a3),e.iV(A.uk,"Picture",new C.eyj(e),a3),e.iV(A.yP,"Bio link",new C.eyk(e),a3),e.iV(A.a1R,"Table",new C.eyl(e),a3),e.iV(A.OH,"Sticky",new C.eym(e),a3),e.iV(A.uj,"Divider",new C.eyn(e),a3),e.iV(A.Cm,"Header",new C.eyo(e),a3),e.lO(A4.wa,"Rectangle",new C.eyp(e),a3,!0),e.lO(A.ro,"Circle",new C.eyq(e),a3,!0),e.lO(A.a1a,"Triangle",new C.eyr(e),a3,!0),e.lO(A.jQ,"Arrow",new C.eys(e),a3,!0),e.lO(D.bKU,"Parallelogram",new C.eyu(e),a3,!0),e.lO(D.bNi,"Hexagon",new C.eyv(e),a3,!0),e.lO(A.uj,"Line",new C.eyw(e),a3,!0),e.lO(A.yB,"PDF",new C.eyx(e),a3,!0),e.lO(O.a20,"Signature",new C.eyy(e),a3,!0),e.iV(A3.C9,"Quote",new C.eyz(e),a3),e.iV(D.a0L,a1,new C.eyA(e),a3)],x.p),A.m,d,A.e,A.j,0,d,d)
case"Design":w=e.c
w.toString
w=B.aI(w,A.bX,x.w).w
u=x.p
t=B.B(B.a([e.aO0("Wide 16:9",D.Df,a3),e.aO0("Short 9:16",D.or,a3),new B.D(A.fx,B.mQ(D.bPt,d,D.fCb,d,new C.eyB(e),d,d,d,d),d)],u),A.m,d,A.e,A.j,0,d,d)
q=B.B(B.a([e.bI_("This slide",!e.Q,a3,new C.eyC(e)),A.bn,e.aQc("All slides",e.Q,a3,new C.eyD(e),!0)],u),A.m,d,A.e,A.j,0,d,d)
p=e.bI0()
p=B.d(p,d,d,d,d,d,d,B.l(d,d,a3?A.bY:A.bL,d,d,d,d,d,d,d,d,10,d,d,A.a7,d,d,!0,d,d,d,d,d,d,d,d),d,d,d)
o=B.d("COLORS",d,d,d,d,d,d,B.l(d,d,a3?A.aB:A.al,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
n=x.cT
n=B.C(new B.N(D.a3X,new C.eyF(e),n),n.k("ak.E"))
n=B.cd(B.B(n,A.m,d,A.e,A.j,0,d,d),A.t,d,A.y,d,d,d,d,A.aN)
m=B.d("TEXT COLORS",d,d,d,d,d,d,B.l(d,d,a3?A.aB:A.al,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
l=B.a([],u)
for(v=0;v<10;++v){k=D.dib[v]
j=B.b1(k)
i=new B.ay(k===4294967295?A.dp:A.aZ,1.5,A.r,-1)
l.push(new B.D(A.fx,B.aB(d,B.p(d,d,A.f,d,d,new B.o(j,d,new B.bK(i,i,i,i),d,d,d,A.a6),d,24,d,d,d,d,d,24),A.y,!1,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,new C.eyG(e,k),d,d,d,d,d,d,!1,A.a5),d))}l=B.cd(B.B(l,A.m,d,A.e,A.j,0,d,d),A.t,d,A.y,d,d,d,d,A.aN)
j=B.d("SLIDE DESIGNS \xb7 first 5 free",d,d,d,d,d,d,B.l(d,d,a3?A.aB:A.al,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
h=$.bEK()
g=B.U(h).k("N<1,D>")
h=B.C(new B.N(h,new C.eyH(e,a3),g),g.k("ak.E"))
return new B.a7(w.a.a-20,d,B.x(B.a([t,A.O,q,A.am,p,A.O,o,A.au,n,A.O,m,A.au,l,A.O,j,A.au,B.cd(B.B(h,A.m,d,A.e,A.j,0,d,d),A.t,d,A.y,d,d,d,d,A.aN),A.am,e.c0P(a3)],u),A.E,d,A.e,A.Q,0,A.p),d)
case"Transitions":f=e.k_()
w=e.c
w.toString
w=B.aI(w,A.bX,x.w).w
u=new C.eyf(e)
t=new C.ez0(e,a3)
q=x.p
p=B.a([],q)
if(f!=null){o=B.d("ELEMENT ANIMATION",d,d,d,d,d,d,B.l(d,d,a3?A.aB:A.al,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
n=t.$4(D.Rg,f.dy,new C.eyI(e,u,f),A.b_)
A.d.v(p,B.a([o,A.au,n,A.O,B.d("SLIDE TRANSITION",d,d,d,d,d,d,B.l(d,d,a3?A.aB:A.al,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d),A.au],q))}q=e.gdw()
q=q==null?d:q.r
p.push(t.$4(D.Rg,q,new C.eyJ(e,u),A.bk))
return new B.a7(w.a.a-20,d,B.x(p,A.E,d,A.e,A.Q,0,A.p),d)
case"View":w=e.y?"Hide Notes":"Show Notes"
return B.B(B.a([e.iV(A.l7,w,new C.eyK(e),a3),e.iV(A.uo,"Print deck",new C.eyL(e),a3),e.lO(D.amz,"Export JSON",new C.eyM(e),a3,!0),e.iV(A.fN,"Duplicate Slide",e.gaSp(),a3),e.iV(A.ed,a2,e.gaRx(),a3),e.cwN(a3)],x.p),A.m,d,A.e,A.j,0,d,d)
case"Home":default:f=e.k_()
w=x.p
u=B.a([e.iV(D.a0L,a1,new C.eyN(e),a3),e.iV(A.fN,"Duplicate",e.gaSp(),a3),e.iV(A.ed,a2,e.gaRx(),a3),e.iV(A.ql,"Present",e.gaBb(),a3),e.iV(A.Cj,a0,e.gaNa(),a3),e.iV(A.Cd,"Fit Text",new C.eyO(e),a3),e.iV(A.yB,"Download PDF",new C.eyQ(e),a3)],w)
t=e.e
if(t!=null){t=t.w
t=t==="hati_kuhowa"||t==="hati_kuhoweya"}else t=!1
if(t)u.push(e.iV(A.kh,"Transfer",new C.eyR(e),a3))
if(f!=null){w=B.a([A.ac,e.iV(G.NR,"Bold",new C.eyS(e,f),a3),e.iV(G.a0D,"Italic",new C.eyT(e,f),a3),e.iV(G.ama,"Underline",new C.eyU(e,f),a3),e.iV(Af.NS,"Bullets",new C.eyV(e,f),a3),e.bQT(f,a3)],w)
if(!A.a.a0(f.db,"__design__"))w.push(e.bOs(a3))
w.push(e.iV(D.bJA,"Delete",e.gaRw(),a3))
A.d.v(u,w)}return B.B(u,A.m,d,A.e,A.j,0,d,d)}},
aO0(d,e,f){var w,v,u,t=null,s=this.e
s=s==null?t:s.d
w=e===D.or
v=x.p
u=B.a([B.d(d,t,t,t,t,t,t,G.a9L,t,t,t)],v)
if(w)A.d.v(u,B.a([A.dc,D.bOF],v))
return new B.D(A.fx,B.j0(t,t,t,B.B(u,A.m,t,A.e,A.Q,0,t,t),t,new C.euF(this,w,e),s===e,A.bk.j(0.25),t,t,t),t)},
cwN(d){var w,v,u,t,s,r=this,q=null,p=r.gdw()
if(p==null)return A.bJ
w=p.w
if(!(w>0)){v=r.e
v=v==null?q:v.e
w=v==null?5:v}v=B.J(d?A.aZ:A.cr,A.r,1)
u=B.m(8)
t=B.X(A.Gx,d?A.aB:A.al,q,q,q,14)
s=B.aJ(q,q,q,q,D.apz,q,q,q,new C.ezn(r,p),q,q,q,q,q,A.cd)
return B.p(q,B.B(B.a([t,s,B.d(""+w+"s",q,q,q,q,q,q,B.l(q,q,d?A.c:A.bl,q,q,q,q,q,q,q,q,11,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.aJ(q,q,q,q,D.apq,q,q,q,new C.ezo(r,p),q,q,q,q,q,A.cd)],x.p),A.m,q,A.e,A.Q,0,q,q),A.f,q,q,new B.o(q,q,v,u,q,q,A.n),q,q,q,A.Gd,A.mF,q,q,q)},
csG(d){switch(d.a){case 6:return V.H3
case 7:return A.GY
case 8:return M.Gz
case 4:return A.Cm
default:return A.l7}},
bQT(d,e){var w=null,v=B.J(e?A.aZ:A.cr,A.r,1),u=B.m(8),t=B.aJ(w,w,w,w,D.apz,w,w,w,new C.evN(this,d),w,w,w,w,w,A.cd),s=A.k.N(d.w)
return B.p(w,B.B(B.a([t,B.d(""+s,w,w,w,w,w,w,B.l(w,w,e?A.c:A.bl,w,w,w,w,w,w,w,w,w,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aJ(w,w,w,w,D.apq,w,w,w,new C.evO(this,d),w,w,w,w,w,A.cd)],x.p),A.m,w,A.e,A.Q,0,w,w),A.f,w,w,new B.o(w,w,v,u,w,w,A.n),w,w,w,A.vZ,A.mF,w,w,w)},
c0P(d){var w=null
return B.C7(B.Dz(B.X(A6.a0O,d?A.ae:A.bs,w,w,w,16),w,w,D.fHM,w,w,w),w,w,new C.ewk(),A.J,this.gbCe(),A.cm,"Slide layout",x.fO)},
lO(d,e,f,g,h){var w=null,v=B.m(14),u=B.m(14),t=g?A.c.j(0.06):A.bN,s=B.J(g?A.dt:A.aL,A.r,1),r=x.p,q=B.a([B.X(d,g?A.ds:A.bk,w,w,w,18)],r)
if(h)q.push(B.ao(w,B.p(w,D.OM,A.f,w,w,D.EA,w,12,w,w,w,w,w,12),w,w,w,-6,-4,w))
return new B.D(A.fx,B.aG(!1,A.a1,!0,w,B.aM(!1,v,!0,B.eJ(new B.D(A.hg,B.x(B.a([new B.an(A.a_,w,A.aa,A.f,q,w),A.cL,B.d(e,w,w,w,w,w,w,B.l(w,w,g?A.aR:A.bs,w,w,w,w,w,w,w,w,9,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],r),A.m,w,A.e,A.Q,0,A.p),w),w,new B.o(t,w,s,u,w,w,A.n),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ai),w)},
iV(d,e,f,g){return this.lO(d,e,f,g,!1)},
b6l(d,e){var w,v,u=this,t=null,s=u.e
s.toString
w=e?A.ah:A.aN
v=B.hO(t,new C.ezz(u,s,e,d),s.r.length,A.cm,t,w,new C.ezA(e),!1)
s=d?A.av:A.bN
w=B.a([],x.p)
if(e&&!u.km())w.push(new B.D(A.cm,B.I3(E.apM,new C.ezB(u),B.nI(t,A.bk,t,t,t,t,t,t,t,t,t,t,E.aQw,t,t,t,t),"Add slide"),t))
w.push(B.E(v,1))
return B.p(t,B.x(w,A.m,t,A.e,A.j,0,A.p),A.f,s,t,t,t,t,t,t,t,t,t,t)},
bG0(d,e,f){var w,v=null,u=this.e
if(u==null)w=v
else{u=u.d===D.or?0.5625:1.7777777777777777
w=u}if(w==null)w=1.7777777777777777
u=f?8:16
return new B.D(new B.Q(u,u,u,u),new B.bM(A.b3,v,v,new B.fF(w,B.aB(v,B.cB(new C.ev3(this,d,e)),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.ev4(this),v,v,v,v,v,v,!1,A.a5),v),v),v)},
bG2(b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=a7.e,b0=(a9==null?a8:C.kE(a9.w))===!0,b1=b0&&C.fGB(b3),b2=b0&&b3.b===D.lf&&A.a.a0(b3.db,"marriage_sign_placed_")
if(b0){a9=b3.db
w=a9==="__kiapo_video__"||A.a.a0(a9,"__kiapo_video___")}else w=!1
if(!a7.km())v=!b0||a7.c37(b3)
else v=!1
if(!a7.km())u=!b0||a7.c36(b3)
else u=!1
t=v&&a7.r===b3.a
s=b4/960
a9=b3.db
r=A.a.a0(a9,"__design__")||A.a.a0(b3.a,"design_")?A.cc:A.bk
q=b0&&A.a.a0(a9,"marriage_field_")
if(b0)p=a9==="marriage_locked_nim_akuna_deni"||a9==="marriage_locked_nim_akuna_box"||a9==="marriage_locked_nim_akuna_tick"||a9==="marriage_locked_nim_akuna_hit"
else p=!1
if(w&&C.h54(b3))o=a8
else if(p&&!a7.km())o=a7.gcb9()
else o=a7.km()?a8:new C.euS(a7,w,b3,b1,b2,v)
a9=b3.a
n=b3.c
m=b3.d
l=b3.e
k=b3.f
j=p?A.ca:A.jy
i=w&&C.h54(b3)&&a7.A_()?new C.euT(a7,b3):a8
h=v&&b3.b===D.cS?new C.euU(a7,b3):a8
g=u?new C.euV(a7,b3,b4,b5):a8
f=b3.cx
if(t)if(a7.w===a9)e=A.be
else e=q?A.c1:r
else e=A.K
e=B.J(e,A.r,t?2:0)
d=B.m(t?6:0)
if(b1)a0=A.c1.j(0.08)
else a0=b3.b===D.lf?A.K:a8
if(b1){a1=a7.km()?"":"Tap to sign"
a1=B.at(B.d(a1,a8,a8,a8,a8,a8,a8,B.l(a8,a8,A.c1.j(0.7),a8,a8,a8,a8,a8,a8,a8,a8,10*s,a8,a8,A.P,a8,a8,!0,a8,a8,a8,a8,a8,a8,a8,a8),a8,a8,a8),a8,a8,a8)}else{if(a7.w===a9){a1=a7.c
a1.toString
a1=!(B.aI(a1,A.bX,x.w).w.a.a<900)}else a1=!1
a2=w&&a7.A_()
a3=b3.b===D.cS
a4=a3?a7.X1(b3):a8
a5=a3?a7.au4(b3):a8
if(a7.w===a9){a6=a7.c
a6.toString
a6=!(B.aI(a6,A.bX,x.w).w.a.a<900)}else a6=!1
a6=a6?new C.euW(a7,b3):a8
a3=v&&a3?new C.euX(a7,b3):a8
a6=C.b1M(q,a4,a1,b3,a5,a2,a3,new C.euY(a7,w,b3,v),a6,s,t,!0)
a1=a6}d=B.a([B.p(a8,a1,A.f,a8,a8,new B.o(a0,a8,e,d,a8,a8,A.n),a8,a8,a8,a8,a8,a8,a8,a8)],x.p)
if(t&&u&&a7.w!==a9){e=B.m(6)
d.push(B.ao(-4,B.aB(a8,B.p(a8,D.bRu,A.f,a8,a8,new B.o(r,a8,B.J(A.c,A.r,1.5),e,a8,a8,A.n),a8,22,a8,a8,a8,a8,a8,22),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.euZ(a7,b3,b4,b5),a8,a8,new C.ev_(a7,b3),a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,!1,A.a5),a8,a8,a8,-4,a8,a8))}if(b0&&!a7.km()&&b3.db==="marriage_locked_nim_n_4")d.push(B.ao(a8,B.aB(a8,B.p(a8,D.bSa,A.f,a8,a8,new B.o(A.du,a8,B.J(A.c,A.r,1.2),a8,B.a([new B.ac(0,A.G,A.w.j(0.25),A.J,4)],x.V),a8,A.a6),a8,20,a8,a8,a8,a8,a8,20),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a7.gbZq(),a8,a8,a8,a8,a8,a8,!1,A.a5),a8,a8,a8,-6,-6,a8))
if(b0&&!a7.km()&&A.a.a0(b3.db,"marriage_field_tarehe:"))d.push(B.ao(a8,B.aB(a8,B.p(a8,D.bTL,A.f,a8,a8,new B.o(A.c1,a8,B.J(A.c,A.r,1.2),a8,B.a([new B.ac(0,A.G,A.w.j(0.25),A.J,4)],x.V),a8,A.a6),a8,20,a8,a8,a8,a8,a8,20),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.ev0(a7,b3),a8,a8,a8,a8,a8,a8,!1,A.a5),a8,a8,a8,-6,-6,a8))
e=!1
if(t)if(b3.b===D.cS)if(a7.w!==a9){e=a7.c
e.toString
e=B.aI(e,A.bX,x.w).w.a.a<900}if(e)d.push(B.ao(-28,B.at(B.aB(a8,B.p(a8,D.fQN,A.f,a8,a8,new B.o(A.bk,a8,a8,B.m(999),B.a([new B.ac(0,A.G,A.w.j(0.2),A.J,8)],x.V),a8,A.n),a8,a8,a8,a8,A.l2,a8,a8,a8),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.ev1(a7,b3),a8,a8,a8,a8,a8,a8,!1,A.a5),a8,a8,a8),a8,a8,0,0,a8,a8))
return B.ao(a8,B.aB(j,B.eL(A.A,f,new B.an(A.a_,a8,A.aa,A.f,d,a8),a8),A.y,!1,a8,h,a8,a8,a8,a8,a8,a8,i,a8,a8,a8,a8,a8,a8,g,a8,a8,a8,a8,a8,a8,a8,o,a8,a8,a8,a8,a8,a8,!1,A.a5),k*b5,new B.cs("el_"+a9,x.W),n*b4,a8,m*b5,l*b4)},
aQc(d,e,f,g,h){var w,v,u,t,s,r=null
if(e)w=A.bk.j(0.25)
else w=f?A.c.j(0.06):A.w.j(0.04)
v=B.m(10)
u=B.J(e?A.bk:A.bz,A.r,1)
if(e)t=A.bk
else t=f?A.aB:A.al
s=x.p
t=B.a([B.d(d,r,r,r,r,r,r,B.l(r,r,t,r,r,r,r,r,r,r,r,10,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],s)
if(h)A.d.v(t,B.a([A.dc,B.p(r,D.OM,A.f,r,r,D.EA,r,12,r,r,r,r,r,12)],s))
return B.aB(r,B.p(r,B.B(t,A.m,r,A.e,A.Q,0,r,r),A.f,r,r,new B.o(w,r,u,v,r,r,A.n),r,r,r,r,A.h4,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,g,r,r,r,r,r,r,!1,A.a5)},
bI_(d,e,f,g){return this.aQc(d,e,f,g,!1)},
caU(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=d.a
if(m.cy!==k){m.cy=k
w=m.cx
v=w.h(0,k)
if(v!=null){v.S$=$.ax()
v.P$=0}v=d.c
w.n(0,k,new B.as(new B.bb(v,A.b4,A.aO),$.ax()))}k=m.cx.h(0,k)
k.toString
w=f?8:10
v=f?8:10
u=e?A.av:A.aP
t=f?A.xj:l
if(f)s=new B.bK(new B.ay(e?A.bz:A.aL,1,A.r,-1),A.a0,A.a0,A.a0)
else s=l
r=f?B.a([new B.ac(0,A.G,A.w.j(0.12),A.rR,16)],x.V):l
q=x.p
p=B.B(B.a([B.d("Speaker Notes",l,l,l,l,l,l,B.l(l,l,e?A.ae:A.bs,l,l,l,l,l,l,l,l,12,l,l,A.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),A.b2,m.b1q(e,new C.ewW(m))],q),A.m,l,A.e,A.j,0,l,l)
o=B.l(l,l,e?A.c:A.aJ,l,l,l,l,l,l,l,l,12,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
n=B.l(l,l,e?A.bY:A.bL,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
return B.p(l,B.x(B.a([p,A.am,B.E(B.aN(l,A.Z,!1,l,!0,A.t,l,B.aO(),k,l,l,l,l,l,2,B.bv(l,new B.b5(4,B.m(10),A.dk),l,A.bT,l,l,l,l,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,n,"Speaker notes for this slide\u2026",l,l,l,l,l,!0,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ak,l,l,l,l,l,l,l,l,l,2,l,l,!1,"\u2022",l,new C.ewX(m,d),l,l,l,!1,l,l,!1,l,!0,l,A.ab,l,l,l,l,l,l,l,l,l,l,l,o,!0,A.a3,l,A.ao,l,l,l,l),1)],q),A.aj,l,A.e,A.j,0,A.p),A.f,l,l,new B.o(u,l,s,t,r,l,A.n),l,96,l,l,new B.Q(12,w,12,v),l,l,l)},
aTH(a3,a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=null,a2=a0.k_()
if(a2==null)return A.bJ
w=new C.ew0(a0,a6)
v=B.a([4279310375,4294967295,4280640491,4278556265,4292617766,4286331629,4293548044,4281549141],x.t)
u=A.k.E(1-a2.c,0.06,1)
t=A.k.E(1-a2.d,0.06,1)
s=A.k.E(1-a2.e,0.01,1)
r=A.k.E(1-a2.f,0.01,1)
q=a5?A.dR:a1
p=x.p
o=B.a([],p)
n=!a5
if(n)o.push(B.B(B.a([B.d("Format",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.c:A.M,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,A.u,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),A.b2,a0.b1q(a3,a0.gbMw())],p),A.m,a1,A.e,A.j,0,a1,a1))
if(n)o.push(A.W)
o.push(B.d("Size",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aB:A.al,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1))
o.push(B.B(B.a([D.fCH,B.E(B.l6(a1,a1,a1,u,0.05,new C.ew1(w,a2),A.k.E(a2.e,0.05,u)),1)],p),A.m,a1,A.e,A.j,0,a1,a1))
o.push(B.B(B.a([D.fPa,B.E(B.l6(a1,a1,a1,t,0.05,new C.ew2(w,a2),A.k.E(a2.f,0.05,t)),1)],p),A.m,a1,A.e,A.j,0,a1,a1))
n=a2.b
m=n===D.cS
if(m)o.push(B.B(B.a([D.fwk,B.E(B.l6(a1,a1,a1,96,10,new C.ew3(w,a2),A.k.E(a2.w,10,96)),1)],p),A.m,a1,A.e,A.j,0,a1,a1))
l=n===D.lK
if(l||n===D.lf||n===D.SC)A.d.v(o,B.a([B.d("Crop / position",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aB:A.al,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),B.B(B.a([D.fIx,B.E(B.l6(a1,a1,a1,s,0,new C.ew4(w,a2),A.k.E(a2.c,0,s)),1)],p),A.m,a1,A.e,A.j,0,a1,a1),B.B(B.a([D.fQu,B.E(B.l6(a1,a1,a1,r,0,new C.ew5(w,a2),A.k.E(a2.d,0,r)),1)],p),A.m,a1,A.e,A.j,0,a1,a1)],p))
if(l){l=B.d("Shape (frame)",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aB:A.al,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
k=B.a([],p)
for(j=0;j<7;++j){i={}
h=D.CF[j]
i.a=null
g=h.a
i.a=g
k.push(B.j0(a1,a1,a1,new B.y(h.b,a1,A.pv,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,new C.ew6(i,w,a2),a2.go===g,a1,a1,a1,a1))}k=B.bW(A.bE,k,A.bq,a1,6,6)
i=B.d("Ring",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aB:A.al,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
h=B.a([],p)
for(j=0;j<11;++j){f={}
e=D.CA[j]
f.a=null
g=e.a
f.a=g
h.push(B.j0(a1,a1,a1,new B.y(e.b,a1,A.pv,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,new C.ew7(f,w,a2),a2.id===g,a1,a1,a1,a1))}A.d.v(o,B.a([A.O,l,A.am,k,A.O,i,A.am,B.bW(A.bE,h,A.bq,a1,6,6)],p))}o.push(A.O)
if(m){m=B.d("Text color",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aB:A.al,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
l=x.gN
l=B.C(new B.N(v,new C.ew8(w,a2),l),l.k("ak.E"))
k=x.fw
A.d.v(o,B.a([m,A.am,B.bW(A.bE,l,A.bq,a1,6,6),A.ad,B.hhi(new C.ew9(w,a2),D.cvr,B.eC([a2.as],k),!0,a1,k)],p))}if(n===D.f8){n=B.d("Fill",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aB:A.al,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
m=x.gN
m=B.C(new B.N(v,new C.ewa(w,a2),m),m.k("ak.E"))
A.d.v(o,B.a([n,B.bW(A.bE,m,A.bq,a1,0,6)],p))}o.push(A.ad)
o.push(B.dj(D.bTx,D.fKA,new C.ewb(a0,a5),B.bp(A.by,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1)))
d=B.ct(o,a1,a1,q,a1,A.ah,a5)
if(a5)return d
q=a3?A.cp:A.c
p=a4?A.xj:a1
if(a4)o=new B.bK(new B.ay(a3?A.bz:A.aL,1,A.r,-1),A.a0,A.a0,A.a0)
else o=a1
return B.p(a1,d,A.f,a1,a1,new B.o(q,a1,o,p,a4?B.a([new B.ac(0,A.G,A.w.j(0.12),A.rR,16)],x.V):a1,a1,A.n),a1,a1,a1,a1,A.FX,a1,a1,a1)},
bR9(d){return this.aTH(d,!1,!1,null)},
ca9(d,e,f,g,h,i){var w,v,u,t,s,r=this,q=null,p=r.fy
p===$&&B.c()
p=B.c9(p,new C.ewe(r,f,d,e),q)
w=B.d(i,q,q,q,q,q,q,D.flX,q,q,q)
v=r.c
v.toString
u=x.p
v=B.a([p,A.bc,B.E(B.x(B.a([w,A.bA,A.cL,r.bBz(D.cZp,d,B.P(v).ax.a===A.I)],u),A.E,q,A.e,A.j,0,A.p),1)],u)
p=x.V
A.d.v(v,B.a([A.ac,B.dO(B.hc(B.aG(!1,A.a1,!0,q,B.aM(!1,q,!0,B.eJ(D.f4P,q,new B.o(q,q,B.J(A.c.j(0.55),A.r,1.3),q,B.a([new B.ac(0,A.G,A.c1.j(0.4),A.et,8)],p),D.aqD,A.a6),q,q,q),A.cM,!0,q,q,q,q,q,q,q,q,q,q,q,g,q,q,q,q,q,q,q),A.f,A.K,0,q,q,q,q,q,A.ai),q,"Documents (Hati)",q,q),A.J)],u))
t=B.B(v,A.m,q,A.e,A.j,0,q,q)
w=r.c
w.toString
s=B.P(w).ax.a===A.I
w=B.m(20)
v=x.O
v=s?B.a([D.bbh,D.bbK],v):B.a([A.c,A.kA],v)
u=B.J(d.j(s?0.45:0.25),A.r,1.2)
return B.p(q,t,A.f,q,q,new B.o(q,q,u,w,B.a([new B.ac(0,A.G,d.j(s?0.18:0.1),A.cv,14)],p),new B.a9(A.az,A.aE,A.x,v,q,q),A.n),q,q,q,q,A.bT,q,q,q)},
aMU(d,e,f,g){var w=this.fy
w===$&&B.c()
return B.c9(w,new C.etO(this,g,d,e,f),null)},
agX(d,e){return this.cmI(d,e)},
cmI(d,e){var w=0,v=B.j(x.T),u,t=this,s,r,q,p
var $async$agX=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:r=$.ax()
q=new B.as(new B.bb(e,A.b4,A.aO),r)
p=t.c
p.toString
w=3
return B.b(B.cg(null,null,!0,null,new C.exT(d,q),p,null,!0,!0,x.N),$async$agX)
case 3:s=g
q.S$=r
q.P$=0
u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$agX,v)},
Qg(d){var w=d.bU()
return""+B.bL(w)+"/"+B.bV(w)+"/"+B.bC(w)}}
C.afo.prototype={}
C.azs.prototype={
U(){return new C.bdn(null,null)}}
C.bdn.prototype={
gcz5(){var w,v=this.a.c,u=v.f.bU(),t=""+B.bL(u)+"/"+B.bV(u)+"/"+B.bC(u),s=v.w
if(s==="marriage_agreement")return"Hati ya Kuhowesha \xb7 "+t
if(s==="hati_kuhowa")return"Hati ya Kuhowa \xb7 "+t
if(s==="hati_kuhoweya")return"Hati ya Kuhoweya \xb7 "+t
if(s==="hati_kiapo_uongozi"){v=v.x
w=A.a.i(v==null?"":v)
return w.length===0?"Hati ya Kiapo cha Uongozi \xb7 "+t:"Kiapo cha Uongozi \xb7 "+w+" \xb7 "+t}return""+v.r.length+" slides \xb7 "+t},
a_(){var w,v=this,u=null
v.a2()
w=B.bm(u,A.q6,u,1,u,v)
w.fm(0,!0)
v.d!==$&&B.aP()
v.d=w
w=B.bm(u,D.bvH,u,1,u,v)
w.cp(0)
v.e!==$&&B.aP()
v.e=w},
q(){var w=this.d
w===$&&B.c()
w.q()
w=this.e
w===$&&B.c()
w.q()
this.bv3()},
Jf(d){var w=0.12+d*0.09,v=A.k.E(w+0.55,0,1),u=this.e
u===$&&B.c()
u=u.x
u===$&&B.c()
return A.ct.av(0,new B.hW(w,v,A.ct).av(0,u))},
B(d){var w,v=null,u=this.d
u===$&&B.c()
w=this.e
w===$&&B.c()
return B.at(new B.D(D.bBg,B.c9(new B.h5(B.a([u,w],x.dS)),new C.d59(this),v),v),v,v,v)}}
C.bdB.prototype={
B(d){var w=null,v=B.m(22),u=B.J(A.aJ,A.r,1),t=x.p
return B.at(new B.D(D.bBx,B.aG(!1,A.a1,!0,w,B.p(w,B.by(B.m(22),B.x(B.a([new B.D(D.bAI,B.x(B.a([B.p(w,D.bSg,A.f,w,w,new B.o(A.aw.j(0.12),w,w,B.m(16),w,w,A.n),w,52,w,w,w,w,w,52),A.aM,D.fMK,A.W,B.d('"'+this.c+'" will be permanently removed. This cannot be undone.',w,w,w,w,w,w,D.fn9,A.L,w,w)],t),A.m,w,A.e,A.j,0,A.p),w),A.dY,D.buK,B.B(B.a([B.E(B.bN(!1,D.fAU,w,w,!0,w,w,new C.d5v(d),w,B.fy(w,w,w,w,w,w,w,w,w,w,w,A.bL,w,w,w,w,w,A.nm,w,A.ov,w,w,w,w,w,w)),1),B.p(w,w,A.f,A.bo,w,w,w,48,w,w,w,w,w,1),B.E(B.bN(!1,D.fGd,w,w,!0,w,w,new C.d5w(d),w,B.fy(w,w,w,w,w,w,w,w,w,w,w,A.aw,w,w,w,w,w,A.nm,w,A.ov,w,w,w,w,w,w)),1)],t),A.m,w,A.e,A.j,0,w,w)],t),A.m,w,A.e,A.Q,0,A.p),A.aq),A.f,w,A9.Wp,new B.o(A.av,w,u,v,D.cZM,w,A.n),w,w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ai),w),w,w,w)}}
C.K5.prototype={
U(){return new C.bdm()}}
C.bdm.prototype={
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.a,m=n.f,l=n.w,k=n.r
n=p.d
w=n?0.96:1
v=B.m(12)
if(l){u=0.1+(n?0.06:0)
n=u}else{u=0.08+(n?0.05:0)
n=u}n=m.j(n)
u=B.J(m.j(l?0.34:0.28),A.r,1)
t=x.V
t=p.d?B.a([],t):B.a([new B.ac(0,A.G,m.j(0.08),A.dB,8)],t)
s=m.j(l?0.16:0.14)
r=B.m(9)
q=p.a
r=B.p(o,B.X(q.c,m,o,o,o,18),A.f,o,o,new B.o(s,o,o,r,o,o,A.n),o,32,o,o,o,o,o,32)
q=q.d
return B.dO(B.d9(B.aB(o,B.vC(B.dd(o,B.B(B.a([r,A.as,new B.ds(1,A.cn,B.d(q,o,2,A.a2,o,o,o,B.l(o,o,l?A.eV:A.c,o,o,o,o,o,o,o,o,13,o,o,A.P,o,1.2,!0,o,o,o,o,o,o,o,o),A.L,o,o),o)],x.p),A.m,o,A.b8,A.Q,0,o,o),o,o,A.b7,new B.o(n,o,u,v,t,o,A.n),A.eN,o,o,o,A.nn,o,o,1/0),A.ct,A.jv,w),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new C.d54(p,d),new C.d55(p),new C.d56(p),new C.d57(p),o,o,o,!1,A.a5),k),new B.t(0,(1-k)*16))}}
C.PT.prototype={
B(d){var w=this,v=null,u=A.c.j(0.04),t=B.m(16),s=B.m(16),r=B.m(14),q=B.J(A.c.j(0.5),A.r,1.2),p=x.p
return B.aG(!1,A.a1,!0,t,B.aM(!1,s,!0,new B.D(A.eQ,B.B(B.a([B.p(v,B.X(w.c,A.c,v,v,v,22),A.f,v,v,new B.o(v,v,q,r,v,new B.a9(A.az,A.aE,A.x,w.d,v,v),A.n),v,46,v,v,v,v,v,46),A.ev,B.E(B.x(B.a([B.d(w.e,v,v,v,v,v,v,A.nG,v,v,v),A.bA,B.d(w.f,v,v,v,v,v,v,B.l(v,v,A.c.j(0.55),v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],p),A.E,v,A.e,A.j,0,A.p),1),B.X(A.eE,A.c.j(0.4),v,v,v,v)],p),A.m,v,A.e,A.j,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.r,v,v,v,v,v,v,v),A.f,u,0,v,v,v,v,v,A.ai)}}
C.a_P.prototype={
U(){return new C.aEY(D.dh,null,null)}}
C.aEY.prototype={
gZi(){var w,v=this,u=v.w
if(u===$){w=B.bm(null,D.bvg,null,1,null,v)
v.w!==$&&B.bG()
v.w=w
u=w}return u},
b6O(d){if(!this.a.c.ay)return
this.x=d
this.gZi().iN(0,0)},
a_(){var w,v=this
v.a2()
w=v.a
v.d=A.o.E(w.d,0,w.c.r.length-1)
C.awh(D.fbg)
C.i8t()
v.RF()},
q(){var w=this,v=w.f
if(v!=null)v.a4(0)
w.gZi().q()
v=w.z
if(v!=null)v.a4(0)
C.awh(D.fbh)
C.i8w()
w.bx2()},
cBR(){B.jJ()
this.m(new C.eAy())
var w=this.c.K(x.q).f
w.a5e()
if($.bl5)w.T(D.f87)},
RF(){var w,v=this,u=v.f
if(u!=null)u.a4(0)
if(!v.r||v.y)return
u=v.a.c
w=v.d
w===$&&B.c()
v.f=B.cL(B.dE(0,0,0,0,0,A.o.E(C.hft(u,w),1,120)),new C.eAo(v))},
cBw(){var w,v=this
v.m(new C.eAx(v))
if(v.r)v.RF()
else{w=v.f
if(w!=null)w.a4(0)}},
gaVD(){var w=this.a.c.db
return(w==null?"":w).length!==0},
cvx(){var w=this,v=w.f
if(v!=null)v.a4(0)
w.m(new C.eAp(w))
v=w.z
if(v!=null)v.a4(0)
if(w.a.c.ch&&w.r)w.z=B.cL(A.lz,new C.eAq(w))},
ay4(){var w,v,u=this,t=u.a.c,s=t.r.length
if(u.y){t=u.z
if(t!=null)t.a4(0)
if(u.a.c.ch){u.m(new C.eAk(u))
u.RF()}return}w=u.d
w===$&&B.c()
v=s-1
if(w===v&&u.gaVD()){u.cvx()
return}if(w>=v)t=t.ch&&s>1
else t=!0
if(t){u.m(new C.eAl(u,A.o.F(w+1,s)))
u.b6O(w)
u.RF()}},
cll(){var w,v=this,u=v.a.c,t=u.r.length
if(v.y){if(!u.ch)return
u=v.z
if(u!=null)u.a4(0)
v.m(new C.eAm(v))
v.RF()
return}w=v.d
w===$&&B.c()
if(w<=0)u=u.ch&&t>1
else u=!0
if(u){v.m(new C.eAn(v,w,t))
v.b6O(w)
v.RF()}},
cx2(d){var w,v=this,u=v.e
if(u===D.cl){u=v.d
u===$&&B.c()
return new B.nm(d,new B.cs(u,x.ac))}w=v.cx3(u)
u=v.d
u===$&&B.c()
return B.pG(new B.nm(d,new B.cs(u,x.ac)),w,new C.eAv(),A.b7,A.b7,new C.eAw(v))},
cx3(d){switch(d.a){case 8:case 9:case 10:case 11:case 19:return D.bvD
case 16:return A.iT
case 18:return A.mA
default:return A.mB}},
cx1(d,e,f){var w,v,u,t=null,s=B.cJ(A.ct,f,t)
switch(d.a){case 0:return e
case 1:case 13:case 18:return new B.d0(s,!1,e,t)
case 2:case 17:w=x.K
return B.jv(e,new B.bf(s,new B.bo(A.uW,A.J,w),w.k("bf<bO.T>")),t,!0)
case 3:w=x.K
return B.jv(e,new B.bf(s,new B.bo(A.SQ,A.J,w),w.k("bf<bO.T>")),t,!0)
case 4:case 21:w=x.K
return B.jv(e,new B.bf(s,new B.bo(A.i5,A.J,w),w.k("bf<bO.T>")),t,!0)
case 5:w=x.K
return B.jv(e,new B.bf(s,new B.bo(A.rQ,A.J,w),w.k("bf<bO.T>")),t,!0)
case 6:case 16:w=x.b
return B.ir(A.A,new B.d0(s,!1,e,t),t,new B.bf(s,new B.bo(0.82,1,w),w.k("bf<bO.T>")))
case 7:w=x.b
return B.ir(A.A,new B.d0(s,!1,e,t),t,new B.bf(s,new B.bo(1.18,1,w),w.k("bf<bO.T>")))
case 8:return B.c9(s,new C.eAr(s),e)
case 9:return B.c9(s,new C.eAs(s),e)
case 10:return B.c9(s,new C.eAt(s),e)
case 11:return B.c9(s,new C.eAu(s),e)
case 12:w=x.b
return new B.d0(s,!1,B.ir(A.A,e,t,new B.bf(s,new B.bo(1.03,1,w),w.k("bf<bO.T>"))),t)
case 14:w=s.gp(0)
v=x.K
return B.jF(B.jv(e,new B.bf(s,new B.bo(A.uW,A.J,v),v.k("bf<bO.T>")),t,!0),A.t,new C.bsc(w,t))
case 15:w=x.K
return B.jv(e,new B.bf(s,new B.bo(A.SQ,A.J,w),w.k("bf<bO.T>")),t,!0)
case 19:w=B.dr()
w.mO((1-s.gp(0))*2)
v=s.gp(0)
u=s.gp(0)
w.jU(v,u,v,1)
return B.fv(A.A,B.d9(e,s.gp(0)),t,w,!0)
case 20:return B.eL(A.A,(1-s.gp(0))*0.2,new B.d0(s,!1,e,t),t)}},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.a.c,k=n.d
k===$&&B.c()
w=l.r[k]
if(l.ay){v=n.x
u=B.jF(new C.aoP(B.c9(n.gZi(),new C.eAz(n,v,w),m),m),A.t,m)}else{t=B.rL(new C.J2(w,!0,!1,m))
l=B.b1(w.e)
u=n.cx2(B.en(B.jF(t,A.t,m),l,!0))}l=B.m(20)
k=x.p
s=B.p(m,B.B(B.a([B.d(n.r?"Auto "+C.hft(n.a.c,n.d)+"s":"Manual",m,m,m,m,m,m,A.oF,m,m,m),A.bn,D.bUB],k),A.m,m,A.e,A.Q,0,m,m),A.f,m,m,new B.o(A.aW,m,m,l,m,m,A.n),m,m,m,m,A.h5,m,m,m)
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
l.push(B.bT(0,new C.NJ(new C.EM(q,p,o,r==null?"":r),!1,!0,m),0,0,0))}else{r=q.c.d===D.or?0.5625:1.7777777777777777
l.push(B.at(new B.fF(r,B.jF(B.uF(A.af,u,!0,4,1,!0,!0,m),A.t,m),m),m,m,m))}if(!$.bl5){r=B.I3(A.lb,new C.eAA(d),B.nI(m,A.aW,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m)
k=B.a([B.ao(m,B.bn(!0,B.B(B.a([r,A.ac,B.I3(B.X(n.r?Al.yO:A.ik,m,m,m,m,m),n.gcBv(),B.nI(m,A.aW,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m)],k),A.m,m,A.e,A.j,0,m,m),!0,!1,A.af,!0,!0),m,m,12,m,12,m)],k)
if(!n.y){r=B.m(20)
k.push(B.ao(16,B.bn(!0,B.p(m,B.d(""+(n.d+1)+" / "+n.a.c.r.length,m,m,m,m,m,m,A.fQ,m,m,m),A.f,m,m,new B.o(A.aW,m,m,r,m,m,A.n),m,m,m,m,A.h5,m,m,m),!0,!1,A.af,!0,!0),m,m,m,16,m,m))}A.d.v(l,k)}l.push(B.ao(m,B.bn(!0,B.aB(A.ca,B.p(A.ln,$.bl5?A.bJ:s,A.f,m,m,m,m,64,m,m,D.bwn,m,m,150),A.y,!1,m,n.gcBQ(),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!1,A.a5),!0,!1,A.af,!0,!0),m,m,m,0,0,m))
return B.c6(m,A.w,B.aB(m,new B.an(A.a_,m,A.b0,A.t,l,m),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.eAB(n,d),m,m,m,!1,A.a5),m,!1,!1,m,m)}}
C.Kb.prototype={
B(d){var w=null
return B.p(w,B.bn(!0,new B.D(E.akr,this.c,w),!0,!1,A.af,!0,!1),A.f,w,w,D.b3W,w,w,w,w,w,w,w,w)}}
C.bsc.prototype={
ji(d){return new B.a3(0,0,0+d.a*A.k.E(this.b,0,1),0+d.b)},
jX(d){return d.b!==this.b}}
C.bij.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.c
A:{if("circle"===q){w=B.m(999)
break A}if("rounded"===q){w=B.m(18)
break A}if("arch"===q){w=D.b0I
break A}w=B.m(6)
break A}v=s.e
u=B.J(v?A.aC:A.K,A.r,2.5)
if(q==="circle")t=B.m(999)
else t=B.m(q==="rounded"?9:3)
w=B.dd(r,B.at(B.p(r,r,A.f,r,r,new B.o(r,r,r,t,r,E.wq,A.n),r,30,r,r,r,r,r,30),r,r,r),r,r,A.b7,new B.o(s.f,r,u,w,r,r,A.n),A.hp,r,64,r,r,r,r,64)
return B.aB(r,new B.a7(78,r,B.x(B.a([w,A.am,B.d(s.d,r,1,A.a2,r,r,r,B.l(r,r,v?A.aC:s.r,r,r,r,r,r,r,r,r,11.5,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),A.m,r,A.e,A.j,0,A.p),r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,s.w,r,r,r,r,r,r,!1,A.a5)}}
C.bii.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=r.c,o=D.dvx.h(0,p)
if(o==null)o=D.dhk
p=p==="none"
w=p?q:new B.a9(A.a4,A.a8,A.x,o,q,q)
p=p?A.cX.j(0.25):q
v=r.e
u=v?B.J(A.aC,A.r,2.5):q
t=r.r.j(0.15)
s=v?K.aoN:q
w=B.p(q,B.p(q,s,A.f,q,q,new B.o(t,q,q,q,q,q,A.a6),q,q,q,q,q,q,q,q),A.f,q,q,new B.o(p,q,u,q,q,w,A.a6),q,52,q,q,A.eB,q,q,52)
return B.aB(q,new B.a7(66,q,B.x(B.a([w,A.am,B.d(r.d,q,1,A.a2,q,q,q,B.l(q,q,v?A.aC:r.f,q,q,q,q,q,q,q,q,10.5,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),A.L,q,q)],x.p),A.m,q,A.e,A.j,0,A.p),q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.w,q,q,q,q,q,q,!1,A.a5)}}
C.aKI.prototype={
aV(){this.b6()
this.b3()
this.dH()},
q(){var w=this,v=w.b4$
if(v!=null)v.a6(0,w.gdD())
w.b4$=null
w.a3()}}
C.aMB.prototype={
q(){var w=this,v=w.aa$
if(v!=null)v.a6(0,w.gbE())
w.aa$=null
w.a3()},
aV(){this.b6()
this.b3()
this.bF()}}
C.bxT.prototype={}
C.aMC.prototype={
q(){var w=this,v=w.aa$
if(v!=null)v.a6(0,w.gbE())
w.aa$=null
w.a3()},
aV(){this.b6()
this.b3()
this.bF()}}
C.b1P.prototype={}
C.Wi.prototype={
U(){return new C.aEW()},
bhr(d){return this.e.$1(d)}}
C.aEW.prototype={
gb55(){var w,v,u,t,s=this.e
if(s==null)return null
for(w=this.a.d,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===s)return t}return null},
gab_(){var w,v
if(this.d==="all")return B.bq(this.a.d,!0,x.I)
w=this.gb55()
v=x.D
return w==null?B.a([],v):B.a([w],v)},
gaOR(){if(this.d==="all")return"All presentations ("+this.a.d.length+")"
var w=this.gb55()
w=w==null?null:w.b
return w==null?"Pick a presentation":w},
gb6k(){return A.d.cI(this.gab_(),0,new C.eA4())},
a_(){var w,v=this
v.a2()
w=v.a.d
if(w.length!==0)v.e=A.d.gI(w).a
v.Ri()},
Ri(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Ri=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return B.b(C.b2q(s.c,s.f),$async$Ri)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.eA0(t,!s))
case 1:return B.h(u,v)}})
return B.i($async$Ri,v)},
Jh(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$Jh=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p=t.gab_()
o=p.length
if(o===0){w=1
break}for(s=0;s<p.length;p.length===o||(0,B.M)(p),++s){r=p[s]
q=r.w
if(q==="marriage_agreement"||q==="hati_kuhowa"||q==="hati_kuhoweya"||q==="hati_malipo_awamu"||q==="hati_kiapo_uongozi")C.fJQ(r,t.a.d)}o=t.c
o.toString
q=t.a
w=3
return B.b(B.pe(o,q.c,q.f),$async$Jh)
case 3:if(!e||t.c==null){w=1
break}o=t.c
o.toString
q=B.e_(new C.eA3(t,p),!1,null,x.H)
w=4
return B.b(B.a4(o,!1).cg(q),$async$Jh)
case 4:q=t.a
w=5
return B.b(B.pd(q.c,q.f),$async$Jh)
case 5:w=6
return B.b(t.Ri(),$async$Jh)
case 6:case 1:return B.h(u,v)}})
return B.i($async$Jh,v)},
RD(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$RD=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:o=t.c
o.toString
w=3
return B.b(B.hE(o,D.e7M,!0,"NgmySlidesTransferScan",x.N),$async$RD)
case 3:s=e
if(s==null||A.a.i(s).length===0){w=1
break}t.m(new C.eA1(t))
w=4
return B.b(C.ahD(s),$async$RD)
case 4:r=e
t.m(new C.eA2(t))
o=J.a5(r)
if(o.gan(r)){o=t.c
if(o==null){w=1
break}o.K(x.q).f.T(D.f6X)
w=1
break}w=5
return B.b(t.a.bhr(r),$async$RD)
case 5:q=t.c
if(q==null){w=1
break}B.a4(q,!1).O(null)
q=t.c.K(x.q).f
p=o.gL(r)
o=o.gL(r)===1?"":"s"
q.T(B.b3(null,null,null,null,null,A.t,null,B.d("Imported "+p+" presentation"+o,null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$RD,v)},
Jg(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Jg=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:n=t.gab_()
if(n.length===0){w=1
break}s=t.c
s.toString
r=t.a
w=3
return B.b(B.pe(s,r.c,r.f),$async$Jg)
case 3:if(!e||t.c==null){w=1
break}s=n.length
r=t.a
if(s===1){s=r.c
q=C.fK4(null,A.d.gI(n),s,t.a.f)}else q=C.fK4(n,null,r.c,r.f)
if(n.length===1){s=A.d.gI(n).b
r=B.af("[^\\w\\-.]+",!0,!1,!1,!1)
p=B.aL(s,r,"_")}else p="ngmy_slides_library"
w=4
return B.b(B.GI(q,"ngmy_slides_"+p,!1),$async$Jg)
case 4:o=e
s=t.a
w=5
return B.b(B.pd(s.c,s.f),$async$Jg)
case 5:w=6
return B.b(t.Ri(),$async$Jg)
case 6:s=t.c
if(s==null){w=1
break}s.K(x.q).f.T(B.b3(null,null,null,null,null,A.t,null,B.d(o,null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$Jg,v)},
a3e(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a3e=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t.m(new C.eA5(t))
w=3
return B.b(C.bD9(),$async$a3e)
case 3:s=e
t.m(new C.eA6(t))
if(s==null||J.cq(s)){w=1
break}w=4
return B.b(t.a.bhr(s),$async$a3e)
case 4:r=t.c
if(r==null){w=1
break}B.a4(r,!1).O(null)
r=t.c.K(x.q).f
q=J.a5(s)
p=q.gL(s)
q=q.gL(s)===1?"":"s"
r.T(B.b3(null,null,null,null,null,A.t,null,B.d("Imported "+p+" presentation"+q+" from file",null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a3e,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=B.P(d).ax.a===A.I,l=m?A.dd:A.bN,k=o.gab_().length!==0,j=B.ao(n,B.p(n,n,A.f,n,n,new B.o(n,n,n,n,n,new B.c0(A.A,0.5,A.x,n,0,B.a([A.bk.j(0.22),A.K],x.O),n,n),A.a6),n,220,n,n,n,n,n,220),n,n,n,-60,-80,n),i=B.aJ(n,n,n,n,B.X(A.cx,m?A.ae:A.al,n,n,n,n),n,n,n,new C.eA9(d),n,n,n,n,n,n),h=x.p
i=B.B(B.a([i,B.E(B.d("Transfer presentations",n,n,n,n,n,n,B.l(n,n,m?A.c:A.M,n,n,n,n,n,n,n,n,17,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),A.L,n,n),1),A.A2],h),A.m,n,A.e,A.j,0,n,n)
w=B.m(24)
v=B.a([new B.ac(0,A.G,A.bk.j(0.35),A.f_,24)],x.V)
u=B.ao(n,B.X(A.qg,A.c.j(0.1),n,n,n,100),n,n,n,-12,-8,n)
t=A.c.j(0.18)
s=B.m(16)
s=B.a([u,B.B(B.a([B.p(n,D.bV7,A.f,n,n,new B.o(t,n,B.J(A.c.j(0.35),A.r,1),s,n,n,A.n),n,56,n,n,n,n,n,56),A.ev,B.E(B.x(B.a([B.d("NGMY Slides Transfer",n,n,n,n,n,n,B.l(n,n,A.c.j(0.85),n,n,n,n,n,n,n,n,11,n,n,A.H,n,n,!0,n,1.1,n,n,n,n,n,n),n,n,n),A.au,D.bFW],h),A.E,n,A.e,A.j,0,A.p),1)],h),A.m,n,A.e,A.j,0,n,n)],h)
if(o.a.f)s.push(B.ao(n,B.hc(B.aB(A.ca,D.f4R,A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gcg3(),n,n,n,n,n,n,!1,A.a5),n,"Save presentations to the database",n,n),n,n,n,-17,-19,n))
w=B.a([B.p(n,new B.an(A.a_,n,A.aa,A.f,s,n),A.aq,n,n,new B.o(n,n,n,w,v,D.a2x,A.n),n,n,n,n,E.a_i,n,n,1/0),A.dY,o.ay5(m,"What to transfer"),A.ad,B.B(B.a([B.E(o.aXZ(A.ql,m,new C.eAa(o),o.d==="one","Pick a single deck","One presentation"),1),A.as,B.E(o.aXZ(D.bKN,m,new C.eAb(o),o.d==="all",""+o.a.d.length+" saved","All presentations"),1)],h),A.m,n,A.e,A.j,0,n,n)],h)
if(o.d==="one"){v=B.a([A.d8,o.ay5(m,"Choose presentation"),A.W],h)
u=o.a.d
if(u.length===0){u=m?A.av:A.c
t=B.m(16)
s=B.J(m?A.bz:A.aL,A.r,1)
v.push(B.p(n,B.d("Create a presentation first, then come back to transfer it.",n,n,n,n,n,n,B.l(n,n,m?A.aB:A.al,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),A.f,n,n,new B.o(u,n,s,t,n,n,A.n),n,n,n,n,A.bR,n,n,n))}else A.d.v(v,new B.N(u,new C.eAc(o,m),B.U(u).k("N<1,v>")))
A.d.v(w,v)}w.push(A.mW)
w.push(o.ay5(m,"Transfer options"))
w.push(A.ad)
w.push(B.B(B.a([B.E(o.aqL(A.aQ,k,!0,A.jA,m,o.r,o.gcad(),"Scan on another device","Show QR"),1),A.as,B.E(o.aMV(A.k8,!0,A.jd,m,o.gcse(),"Receive presentations","Scan QR"),1)],h),A.m,n,A.e,A.j,0,n,n))
w.push(A.W)
w.push(B.B(B.a([B.E(o.bA3(A.aV,k,A.hL,m,o.r,o.gcaa(),"Download .json","Backup file"),1),A.as,B.E(o.aMV(A.aD,!0,Aw.yW,m,o.gcEf(),"Import backup","Upload file"),1)],h),A.m,n,A.e,A.j,0,n,n))
if(k){v=A.bk.j(m?0.12:0.08)
u=B.m(16)
t=B.J(A.bk.j(0.28),A.r,1)
s=B.X(A.lD,A.bk.j(0.9),n,n,n,18)
r=o.gaOR()
q=o.gb6k()
p=o.gb6k()===1?"":"s"
A.d.v(w,B.a([A.bx,B.p(n,B.B(B.a([s,A.as,B.E(B.d("Ready to share "+r+" \xb7 "+q+" slide"+p,n,n,n,n,n,n,B.l(n,n,m?A.ae:A.bs,n,n,n,n,n,n,n,n,12,n,n,A.a7,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)],h),A.m,n,A.e,A.j,0,n,n),A.f,n,n,new B.o(v,n,t,u,n,n,A.n),n,n,n,n,A.bF,n,n,n)],h))}j=B.a([j,B.bn(!0,B.x(B.a([new B.D(Ah.Ns,i,n),B.E(B.ct(w,n,D.bzQ,n,n,A.ah,!1),1)],h),A.m,n,A.e,A.j,0,A.p),!0,!1,A.af,!0,!0)],h)
if(o.f)j.push(B.p(n,T.WI,A.f,A.dN,n,n,n,n,n,n,n,n,n,n))
return B.c6(n,l,new B.an(A.a_,n,A.aa,A.t,j,n),n,!1,!1,n,n)},
ag7(){var w=0,v=B.j(x.H),u=this,t,s
var $async$ag7=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
t=u.a
w=2
return B.b(C.ieW(s,t.d,t.e),$async$ag7)
case 2:return B.h(null,v)}})
return B.i($async$ag7,v)},
ay5(d,e){var w=null,v=B.p(w,w,A.f,w,w,new B.o(A.bk,w,w,B.m(2),w,w,A.n),w,14,w,w,w,w,w,3)
return B.B(B.a([v,A.ac,B.d(e.toUpperCase(),w,w,w,w,w,w,B.l(w,w,d?A.aB:A.al,w,w,w,w,w,w,w,w,11,w,w,A.u,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,w,w)},
aXZ(d,e,f,g,h,i){var w,v,u,t,s=null,r=B.m(18),q=B.m(18),p=e?A.av:A.c
if(g)w=A.bk
else w=e?A.bz:A.aL
w=B.J(w,A.r,g?2:1)
v=g?B.a([new B.ac(0,A.G,A.bk.j(0.2),A.cv,14)],x.V):s
u=A.bk.j(g?0.2:0.1)
t=B.m(12)
t=B.p(s,B.X(d,A.bk,s,s,s,22),A.f,s,s,new B.o(u,s,s,t,s,s,A.n),s,s,s,s,A.cm,s,s,s)
u=B.d(i,s,s,s,s,s,s,B.l(s,s,e?A.c:A.M,s,s,s,s,s,s,s,s,13,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
return B.aG(!1,A.a1,!0,s,B.aM(!1,r,!0,B.eJ(new B.D(A.bF,B.x(B.a([t,A.W,u,A.bA,B.d(h,s,s,s,s,s,s,B.l(s,s,e?A.aB:A.al,s,s,s,s,s,s,s,s,11,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),A.E,s,A.e,A.j,0,A.p),s),s,new B.o(p,s,w,q,v,s,A.n),s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,f,s,s,s,s,s,s,s),A.f,A.K,0,s,s,s,s,s,A.ai)},
bKE(d,e){var w,v,u,t,s,r,q=null,p=d.a===this.e,o=B.m(16),n=e?A.av:A.c,m=B.m(16)
if(p)w=A.bk
else w=e?A.bz:A.aL
w=B.J(w,A.r,p?2:1)
v=B.p(q,D.bVj,A.f,q,q,new B.o(q,q,q,B.m(12),q,new B.a9(A.a4,A.a8,A.x,B.a([A.bk,A.bk.j(0.7)],x.O),q,q),A.n),q,44,q,q,q,q,q,44)
u=d.b
u=B.d(u,q,1,A.a2,q,q,q,B.l(q,q,e?A.c:A.M,q,q,q,q,q,q,q,q,q,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=d.r.length
s=x.p
t=B.E(B.x(B.a([u,B.d(""+t+" slides",q,q,q,q,q,q,B.l(q,q,e?A.aB:A.al,q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),A.E,q,A.e,A.j,0,A.p),1)
u=p?A.ec:A.ro
if(p)r=A.bk
else r=e?A.aZ:A.dp
return new B.D(A.cu,B.aG(!1,A.a1,!0,q,B.aM(!1,o,!0,B.p(q,B.B(B.a([v,A.bc,t,B.X(u,r,q,q,q,q)],s),A.m,q,A.e,A.j,0,q,q),A.f,q,q,new B.o(n,q,w,m,q,q,A.n),q,q,q,q,A.bF,q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,new C.eA_(this,d),q,q,q,q,q,q,q),A.f,A.K,0,q,q,q,q,q,A.ai),q)},
aqL(d,e,f,g,h,i,j,k,l){var w,v,u,t,s=null,r=e?1:0.45,q=e?j:s,p=B.m(18),o=B.m(18),n=h?A.av:A.c
if(f)w=d.j(0.45)
else w=h?A.bz:A.aL
w=B.J(w,A.r,f?1.5:1)
v=d.j(0.14)
u=B.m(12)
t=x.p
u=B.a([B.p(s,B.X(g,d,s,s,s,22),A.f,s,s,new B.o(v,s,s,u,s,s,A.n),s,s,s,s,A.rn,s,s,s)],t)
if(i)u.push(B.ao(s,B.p(s,D.apk,A.f,s,s,D.b3I,s,14,s,s,s,s,s,14),s,s,s,-4,-4,s))
v=B.d(l,s,s,s,s,s,s,B.l(s,s,h?A.c:A.M,s,s,s,s,s,s,s,s,14,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
return B.d9(B.aG(!1,A.a1,!0,s,B.aM(!1,p,!0,B.eJ(new B.D(E.ZW,B.x(B.a([new B.an(A.a_,s,A.aa,A.f,u,s),A.ad,v,A.bA,B.d(k,s,s,s,s,s,s,B.l(s,s,h?A.aB:A.al,s,s,s,s,s,s,s,s,11,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),A.E,s,A.e,A.j,0,A.p),s),s,new B.o(n,s,w,o,s,s,A.n),s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,q,s,s,s,s,s,s,s),A.f,A.K,0,s,s,s,s,s,A.ai),r)},
aMV(d,e,f,g,h,i,j){return this.aqL(d,e,!1,f,g,!1,h,i,j)},
bA3(d,e,f,g,h,i,j,k){return this.aqL(d,e,!1,f,g,h,i,j,k)}}
C.Wj.prototype={
U(){return new C.bl4()}}
C.bl4.prototype={
a_(){this.a2()
this.aeY()},
aeY(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$aeY=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
n=r.a
m=n.d
l=m.length
k=n.c
q=l===1?C.fK4(null,A.d.gI(m),k,r.a.f):C.fK4(m,null,k,n.f)
n=r.a.d
m=n.length
p=m===1?A.d.gI(n).a:"library_"+m
n=r.a.d
if(n.length===1&&C.kE(A.d.gI(n).w))C.fJQ(A.d.gI(r.a.d),D.df8)
n=r.a
m=n.c
n=C.ibR(n.d)
w=7
return B.b(C.fK3(p,C.ibW(r.a.d),n,m,q),$async$aeY)
case 7:o=e
if(r.c==null){w=1
break}r.m(new C.eAd(r,o))
t=2
w=6
break
case 4:t=3
i=s.pop()
if(r.c==null){w=1
break}r.m(new C.eAe(r))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$aeY,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=B.P(d).ax.a===A.I,h=i?A.dd:A.bN,g=k.d
g=g==null?j:A.a.a0(g,"NGMYSLIDESYNC2|")
w=A.d.cI(k.a.d,0,new C.eAf())
v=B.aJ(j,j,j,j,B.X(A.eJ,i?A.ae:A.al,j,j,j,18),j,j,j,new C.eAg(d),j,j,j,j,j,j)
u=x.p
v=B.B(B.a([v,B.E(B.d("Presentation QR",j,j,j,j,j,j,B.l(j,j,i?A.c:A.M,j,j,j,j,j,j,j,j,17,j,j,A.u,j,j,!0,j,j,j,j,j,j,j,j),A.L,j,j),1),A.A2],u),A.m,j,A.e,A.j,0,j,j)
t=B.m(24)
s=k.a
r=B.d(s.e,j,j,j,j,j,j,A.de,A.L,j,j)
s=s.d.length
q=s===1?"":"s"
t=B.p(j,B.x(B.a([r,A.O,B.d(""+s+" presentation"+q+" \xb7 "+w+" slides",j,j,j,j,j,j,B.l(j,j,A.c.j(0.85),j,j,j,j,j,j,j,j,12,j,j,A.P,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],u),A.m,j,A.e,A.j,0,A.p),A.f,j,j,new B.o(j,j,j,t,j,D.a2x,A.n),j,j,j,j,E.a_i,j,j,1/0)
q=B.m(24)
s=B.J(A.aQ.j(0.35),A.r,1)
r=B.a([],u)
p=k.f
if(p!=null)r.push(B.d(p,j,j,j,j,j,j,A.Ui,A.L,j,j))
else if(k.d==null)r.push(D.ejR)
else{p=B.a([],u)
o=k.e
if((o==null?"":o).length!==0){o=B.m(16)
n=B.a([new B.ac(0,A.G,A.aC.j(0.35),A.cv,18)],x.V)
m=k.e
m.toString
A.d.v(p,B.a([D.fBl,A.am,B.aB(j,B.p(j,B.B(B.a([D.bWS,A.as,B.d(m,j,j,j,j,j,j,D.fnz,j,j,j)],u),A.m,j,A.e,A.Q,0,j,j),A.f,j,j,new B.o(j,j,j,o,n,D.c0J,A.n),j,j,j,j,A0.akc,j,j,j),A.y,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new C.eAh(k,d),j,j,j,j,j,j,!1,A.a5),A.O,D.fFK,A.aA],u))}o=A.c.j(0.04)
n=B.m(22)
m=B.J(A.bz,A.r,1)
l=k.d
l.toString
p.push(B.p(j,B.pW(j,j,!1,l,j,!0,!0,j,!1,D.bqU),A.f,j,j,new B.o(o,j,m,n,j,j,A.n),j,j,j,j,A.cm,j,j,j))
A.d.v(r,p)}r.push(A.aA)
r.push(B.d(g===!0?"Cloud QR \u2014 scan on another phone with NGMY Slides open.":"Offline QR \u2014 keep both devices on the same network if scan fails.",j,j,j,j,j,j,A.hl,A.L,j,j))
return B.c6(j,h,B.bn(!0,B.x(B.a([new B.D(Ah.Ns,v,j),B.E(B.cd(B.x(B.a([t,A.aM,B.p(j,B.x(r,A.m,j,A.e,A.j,0,A.p),A.f,j,j,new B.o(j,j,s,q,j,D.c2G,A.n),j,j,j,j,A.u5,j,j,1/0)],u),A.m,j,A.e,A.j,0,A.p),A.t,j,A.y,j,E.akw,j,j,A.ah),1)],u),A.m,j,A.e,A.j,0,A.p),!0,!1,A.af,!0,!0),j,!1,!1,j,j)}}
C.aET.prototype={
U(){return new C.aEU(new B.as(A.at,$.ax()),B.k1(!0,null,!0,!0,null,null,!1))}}
C.aEU.prototype={
a_(){var w=this
w.a2()
w.e.aS(0,new C.etI(w))
$.aW.x1$.push(new C.etJ(w))},
q(){var w=this.d
w.S$=$.ax()
w.P$=0
this.e.q()
this.a3()},
b_B(){var w,v=this.c
v.toString
w=C.yP(this.d.a.a.toUpperCase())
if(w==null)w=""
B.a4(v,!1).O(w)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=B.aI(a2,A.eM,x.w).w,i=B.m(28),h=B.J(A.bk.j(0.4),A.r,1.2),g=x.V,f=B.a([new B.ac(0,A.G,A.bk.j(0.28),A.uT,36),D.acU],g),e=B.m(28),d=A.c.j(0.16),a0=B.m(16),a1=x.p
a0=B.p(k,B.x(B.a([B.p(k,D.bSk,A.f,k,k,new B.o(d,k,B.J(A.c.j(0.28),A.r,1),a0,k,k,A.n),k,52,k,k,k,k,k,52),A.ad,D.fyp,A.am,B.d("Type the 5-character code shown with the QR.",k,k,k,k,k,k,B.l(k,k,A.c.j(0.82),k,k,k,k,k,k,k,k,13,k,k,A.a7,k,1.35,!0,k,k,k,k,k,k,k,k),A.L,k,k)],a1),A.m,k,A.e,A.j,0,A.p),A.f,k,k,D.b48,k,k,k,k,A.yg,k,k,1/0)
d=B.a([],a1)
for(w=l.d,v=l.e,u=0;u<5;++u){t=B.a([],a1)
if(u===2)t.push(A.as)
s=w.a.a
r=u<s.toUpperCase().length
q=u===s.toUpperCase().length&&v.geb()
p=r?w.a.a.toUpperCase()[u]:""
s=r||q?A.av:A.M
o=new B.aQ(14,14)
if(q)n=A.bk
else n=r?A.bk.j(0.55):A.aJ
m=new B.ay(n,q?2:1.2,A.r,-1)
n=q?B.a([new B.ac(0,A.G,A.bk.j(0.28),A.J,12)],g):k
t.push(new B.bA(1,A.bd,B.dd(A.A,new B.y(p,k,D.fh0,k,k,k,k,k,k,k,k,k),k,k,A.b7,new B.o(s,k,new B.bK(m,m,m,m),new B.bk(o,o,o,o),n,k,A.n),A.hp,k,56,k,k,k,k,k),k))
if(u!==4&&u!==1)t.push(M.JA)
A.d.v(d,t)}g=B.a([B.B(d,A.m,k,A.e,A.j,0,k,k),B.bT(0,B.d9(B.aN(k,A.Z,!0,k,!0,A.t,k,B.aO(),w,k,k,k,k,k,2,D.bZD,A.y,!0,k,!0,k,!1,v,A.ak,k,k,B.a([new B.uw(B.af("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.BE(5,k),new C.bvs()],x.aS),k,k,A.aRK,k,5,k,1,k,k,!1,"\u2022",k,new C.etE(l),k,new C.etF(l),k,!1,k,k,!1,k,!0,k,A.ab,k,k,k,k,k,k,k,k,k,k,k,k,!0,A.a3,k,A.mh,k,k,k,k),0),0,0,0)],a1)
d=C.yP(w.a.a.toUpperCase())==null?k:l.gcae()
return B.at(new B.D(new B.Q(24,24,24,24+j.f.d),B.aG(!1,A.a1,!0,k,new B.cT(Ae.L3,B.p(k,B.by(e,B.x(B.a([a0,new B.D(D.bAl,B.x(B.a([new B.an(A.a_,k,A.aa,A.t,g,k),A.W,D.fwK,A.bx,new B.a7(1/0,50,B.bI(D.fNE,d,B.bp(A.bk,A.bo,A.al,k,A.c,k,k,k,new B.b7(B.m(16),A.a0),k,k,k)),k),A.am,B.bN(!1,A.nH,k,k,!0,k,k,new C.etG(a2),k,B.fy(k,k,k,k,k,k,k,k,k,k,k,A.bL,k,k,k,k,k,k,k,k,k,k,k,k,k,k))],a1),A.m,k,A.e,A.j,0,A.p),k)],a1),A.m,k,A.e,A.Q,0,A.p),A.aq),A.f,k,k,new B.o(A.dd,k,h,i,f,k,A.n),k,k,k,k,k,k,k,k),k),A.f,A.K,0,k,k,k,k,k,A.ai),k),k,k,k)}}
C.bvs.prototype={
oI(d,e){var w=e.a.toUpperCase()
return e.cKF(B.hk(A.bw,w.length),w)}}
C.arI.prototype={
U(){return new C.aEX(B.zv(A.MI,A.nN,A.uA))}}
C.aEX.prototype={
q(){this.d.q()
this.a3()},
b_A(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
B.iR(w,d)},
aaV(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$aaV=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e){w=1
break}s=t.c
s.toString
w=3
return B.b(C.fSU(s),$async$aaV)
case 3:r=e
if(r==null||t.c==null){w=1
break}t.b_A("NGMYSLIDECODE|"+r)
case 1:return B.h(u,v)}})
return B.i($async$aaV,v)},
cac(d){var w,v,u,t
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,B.M)(w),++u){t=C.ibU(w[u])
if(t!=null){this.b_A(t)
return}}},
B(d){var w,v,u,t=this,s=null,r=B.aJ(s,s,s,s,A.wn,s,s,s,t.gbOZ(),s,s,s,s,"Enter document code",s),q=t.f,p=q?"Flash off":"Flash on",o=x.p
p=B.eH(B.a([r,B.aJ(s,s,s,s,B.X(q?A.ug:Am.Om,s,s,s,s,s),s,s,s,new C.eAj(t),s,s,s,s,p,s)],o),s,s,!0,!0,A.dd,s,1,s,s,s,!1,s,!1,A.c,s,s,s,!0,s,s,s,s,s,D.fOR,s,s,s,1,s,!0)
r=B.zu(t.d,A.bV,t.gcab())
w=B.m(28)
w=B.at(B.p(s,s,A.f,s,s,new B.o(s,s,B.J(A.bk,A.r,3),w,B.a([new B.ac(2,A.G,A.bk.j(0.35),A.J,24)],x.V),s,A.n),s,260,s,s,s,s,s,260),s,s,s)
v=A.w.j(0.72)
u=B.m(16)
return B.c6(p,A.w,new B.an(A.a_,s,A.b0,A.t,B.a([r,w,B.ao(32,B.p(s,D.fCs,A.f,s,s,new B.o(v,s,B.J(A.bk.j(0.45),A.r,1),u,s,s,A.n),s,s,s,s,A.jc,s,s,s),s,s,20,20,s,s)],o),s),s,!1,!1,s,s)}}
C.bvF.prototype={
B(d){var w=null,v=B.m(24),u=B.J(A.aJ,A.r,1)
return B.aG(!1,A.a1,!0,w,B.p(w,B.x(B.a([B.p(w,I.ap0,A.f,w,w,D.b3S,w,56,w,w,w,w,w,56),A.aM,D.fOx,A.am,new B.jR(this.c,new C.far(),w,w,x.cI),A.aM,new B.jR(this.d,new C.fas(),w,w,x.cl),A.ad,D.fOv],x.p),A.m,w,A.e,A.Q,0,A.p),A.f,w,Ae.L3,new B.o(A.av,w,u,v,w,w,A.n),w,w,w,L.a_o,D.bAZ,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ai)}}
C.a7Z.prototype={
U(){return new C.bkO(A.bD)},
gcZ(){return this.c}}
C.bkO.prototype={
a_(){var w=this
w.a2()
if(w.a.d)return
w.a_w()
w.d=B.dk(A.fV,new C.eiP(w))},
q(){var w=this.d
if(w!=null)w.a4(0)
this.a3()},
a_w(){return this.coA()},
coA(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a_w=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q={}
p=t.a
if(p.d){if(t.c!=null)t.m(new C.eiN(t))
w=1
break}s=p.e
q.a=null
w=s!=null?3:5
break
case 3:q.a=s.bD(new B.V(Date.now(),0,!1))
w=4
break
case 5:w=6
return B.b(C.cia(p.c),$async$a_w)
case 6:r=e
q.a=r==null?A.bD:r
case 4:if(t.c==null){w=1
break}t.m(new C.eiO(q,t))
if(q.a.a<=0&&!t.f){t.f=!0
t.a.f.$0()}case 1:return B.h(u,v)}})
return B.i($async$a_w,v)},
bR0(d){var w,v,u=d.a,t=A.o.ao(u,36e8)
if(t>=999)return"Admin \u2014 unlimited"
w=A.o.ao(u,6e7)%60
v=A.o.ao(u,1e6)%60
if(t>0)return""+t+"h "+A.a.aZ(A.o.u(w),2,"0")+"m "+A.a.aZ(A.o.u(v),2,"0")+"s left"
return A.a.aZ(A.o.u(w),2,"0")+":"+A.a.aZ(A.o.u(v),2,"0")+" left"},
B(d){var w,v,u,t,s=this,r=null
if(s.a.d)return A.bJ
w=s.e.a
v=A.o.ao(w,6e7)<30&&A.o.ao(w,36e8)<999?A.aw:A.c1
w=v.j(0.14)
u=B.m(14)
t=B.J(v.j(0.55),A.r,1)
return B.p(r,B.B(B.a([B.X(A.Gx,v,r,r,r,20),A.as,B.E(B.d("Marriage document session \xb7 "+s.bR0(s.e),r,r,r,r,r,r,B.l(r,r,v,r,r,r,r,r,r,r,r,13,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),1)],x.p),A.m,r,A.e,A.j,0,r,r),A.f,r,r,new B.o(w,r,t,u,r,r,A.n),r,r,r,A8.ajh,A.iU,r,r,1/0)}}
C.a8T.prototype={
nm(){var w,v,u,t=this
t.xq()
w=t.cx
v=t.c
w.brB(t.cy,t,v)
u=x.Y
v.a.n(0,"/A",B.q2(B.G(["/S",D.eny,"/URI",new B.rG(B.WQ(w.as),A.uX,!0)],x.N,u),u))}}
C.a8U.prototype={
a5(){return"PdfAnnotFlags."+this.b}}
C.b3t.prototype={
bz5(d,e,f,g,h,i,j,k,l,m){var w=B.eC([D.elR],x.di)
this.w!==$&&B.aP()
this.w=w},
gcO_(){var w=this.w
w===$&&B.c()
if(w.a===0)return 0
return new B.k0(w,new C.ckK(),B.a6(w).k("k0<cr.E,H>")).fb(0,new C.ckL())},
aDy(d,e,f){var w,v,u,t=this,s=f.a
s.n(0,"/Subtype",new B.hh(t.a))
w=t.b
v=w.a
u=w.b
s.n(0,"/Rect",B.tG(B.a([v,u,v+w.c,u+w.d],x.cA)))
s.n(0,"/P",new B.jh(d.a,d.b))
s.n(0,"/Border",B.tG(I.ar0))
w=t.w
w===$&&B.c()
if(w.a!==0)s.n(0,"/F",new B.h2(t.gcO_()))
w=t.z
if(w.a!==0)s.n(0,"/AP",B.q2(w,x.Y))}}
C.ckM.prototype={}
C.a38.prototype={}
C.aiu.prototype={}
C.aRJ.prototype={
h1(d){var w,v,u,t,s,r,q=this,p=null
q.lp(d)
q.Mj(d)
w=q.a
v=d.a
v.toString
w.toString
w=d.bgP(w)
u=x.N
t=x.Y
s=new C.ckM(q.d.a,"/Link",w,p,p,p,p,p,B.T(u,t))
s.bz5(p,p,p,p,p,p,p,w,p,"/Link")
w=v.x
t=B.q2(B.G(["/Type",D.enw],u,t),t)
u=w.b++
r=w.e
r===$&&B.c()
r=new C.a8T(s,v,w,u,0,t,r,B.a([],x.s),p,p,0)
w.c.M(0,r)
v.dx.push(r)}}
C.axf.prototype={}
C.aTf.prototype={
h1(d){var w,v,u,t,s=this
s.lp(d)
w=s.b
if(w!=null){v=B.dr()
u=s.a
v.ed(u.a,u.b,0,1)
u=d.b
u.ie()
t=s.a
t.toString
u.Lq(t)
u.SU(0)
u.p6(0,v)
w.h1(d)
u.np(0)}}}
var z=a.updateTypes(["aA<~>()","~(lR)","R(i4)","~()","R(eN)","R(os)","R(lR)","~(i4)","R(eN,eN)","Kb(Y)","R(nT)","R(lm)","aA<R>()","H(H,i4)","a8<n,@>(i4)","ai<zO>()","n(nT)","R(a8f)","n(lR)","n(w8)","R(EV)","H(i4,i4)","n(eN)","v(eN)","cN(eN)","v(hF)","~(hF)","eN(uU,L,L,L,L,H{fx:n,key:n,rotation:L})","eN(n,L,H)","H(os,os)","R(zO)","R(n,ai<zO>)","a8<n,@>(os)","nT()","YU(Y)","eN(n,L,L,L,L,L{align:q8,anim:hF,bullets:R,color:H?,delay:H,fx:n,key:n,style:HZ,weight:nG})","a1c(Y)","eN(n,L,L,L,L{anim:hF,delay:H,fx:n,key:n})","aA<~>(os)","R(mB)","YS(Y)","a0I(Y)","a0H(Y)","PJ(Y)","a_4(Y)","eN(uU,L,L,L,L,H,n,n{anim:hF,delay:H,rotation:L,stroke:H,strokeWidth:L})","eN(n,L,L,L,L,L,n,n,H)","eN(L,L,n,H{size:L})","v(ru,L,L)","lm()","os(a8<@,@>)","~(uK)","EV()","fg(eN)","v(j2)","ZC(Y)","~(EM)","ZX(Y)","H(eN,eN)","eN(eN)","a8<n,@>(eN)","eN(a8<@,@>)","lR(lR)","a8<n,@>(lR)","lR(a8<@,@>)","R(jN)","jN()","n(i4)","~(ai<os>)","V(ai<i4>)","V(i4)","ai<i4>(n?)","acU(Y,H)","~(R(eN,eN))","ady(Y)","afe(Y,H)","u(lR,R)","W6(Y)","adB(Y)","W7(Y)","~(mF)","i4(i4)","L(eN)","a0b(Y)","a_P(Y)","i4()","ai<Fh>()","aA<~>(ai<i4>)","v(bz<H,i4>)","D(jN)","D(EV)","aA<~>(hF,~())","v(ai<hF>,hF?,~(hF),u)","R(mf)","ai<jt<mF>>(Y)","jt<mF>(mF)","i4(a8<@,@>)","Wi(Y)","eN(n,L,L,L,L,L,H{align:q8,style:HZ,weight:nG})","Wj(Y)","v(i4)","~(m9)","J2(Y,lR,v?)","H(a8U)","aA<ai<a8<n,@>>?>()","n(n)","aA<zN>({paper:n?,photo:dI?,request:n,template!lp})","aA<a87>({doc!zN,history:ai<+(n,n)>,instruction!n,photo:dI?,template!lp})","adv(Y)"])
C.cJi.prototype={
$2(d,e){d=d+e&536870911
d=d+((d&524287)<<10)&536870911
return d^d>>>6},
$S:70}
C.cJj.prototype={
$1(d){d=d+((d&67108863)<<3)&536870911
d^=d>>>11
return d+((d&16383)<<15)&536870911},
$S:75}
C.cJk.prototype={
$1(d){var w,v,u,t,s,r,q
for(w=this.a,v=this.b,u=v.c-1,v=v.b;t=w.a,t<d;){t=w.c
if(t<0){w.c=t-1
s=0
r=16}else{s=v[t]
r=t===u?A.o.gakE(s):16;--w.c}w.b=A.o.dU(w.b,r)+s
w.a+=r}v=w.b
t-=d
q=A.o.mt(v,t)
w.b=v-A.o.dU(q,t)
w.a=t
return q},
$S:75}
C.cJl.prototype={
$0(){var w,v,u,t,s
for(w=this.a,v=w.$flags|0,u=1,t=0;t<8;++t){if(u===0)break
s=w[t]+u
v&2&&B.aj(w)
w[t]=s&255
u=s>>>8}},
$S:0}
C.bRm.prototype={
$1(d){return J.eG(A.dG.gaR(d),d.byteOffset,d.byteLength)},
$S:1671}
C.fww.prototype={
$5(d,e,f,g,h){var w=this,v=w.a
if((v&8)!==0)B.iL(w.b,d+f,e+g,w.c,h,w.d,!1,w.e,w.f)
if((v&4)!==0)B.iL(w.b,d-f,e+g,w.c,h,w.d,!1,w.e,w.f)
if((v&2)!==0)B.iL(w.b,d+f,e-g,w.c,h,w.d,!1,w.e,w.f)
if((v&1)!==0)B.iL(w.b,d-f,e-g,w.c,h,w.d,!1,w.e,w.f)},
$S:1672}
C.c1b.prototype={
$1(d){return B.a2(d,x.N,x.z)},
$S:30}
C.c1c.prototype={
$2(d,e){var w,v=J.r(e,"savedAt")
v=J.k(v==null?"":v)
w=J.r(d,"savedAt")
return A.a.aK(v,J.k(w==null?"":w))},
$S:42}
C.c1e.prototype={
$1(d){var w=J.r(d,"id")
return J.k(w==null?"":w)===this.a},
$S:4}
C.fMX.prototype={
$1(d){return new C.a1c(this.a,this.b,C.icM(),null)},
$S:z+36}
C.f8U.prototype={
$0(){var w=this.a
w.e=this.b
w.f=!1},
$S:0}
C.f8Y.prototype={
$1(d){return this.a.d.t(0,d.a)},
$S:z+2}
C.f8Z.prototype={
$0(){var w=this.a
w.r=!0
w.x=null},
$S:0}
C.f9_.prototype={
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
C.f8V.prototype={
$0(){var w=this.a
w.r=!0
w.x=null},
$S:0}
C.f8W.prototype={
$0(){var w=this.a
w.r=!1
w.x="Could not open that saved presentation."
w.y=!0},
$S:0}
C.f8X.prototype={
$0(){var w=this.a
w.r=!1
w.x='"'+this.b.b+'" is back in your presentations.'
w.y=!1},
$S:0}
C.f8P.prototype={
$1(d){var w=null,v=B.d('"'+this.a+'" will be removed from the database. Your own copy stays in your presentations.',w,w,w,w,w,w,A.hk,w,w,w)
return B.em(B.a([B.bN(!1,E.aTQ,w,w,!0,w,w,new C.f8N(d),w,w),B.bN(!1,D.fzU,w,w,!0,w,w,new C.f8O(d),w,w)],x.p),w,w,D.YM,v,w,w,w,w,D.fP9,w)},
$S:18}
C.f8N.prototype={
$0(){B.a4(this.a,!1).O(!1)
return null},
$S:0}
C.f8O.prototype={
$0(){B.a4(this.a,!1).O(!0)
return null},
$S:0}
C.f8Q.prototype={
$0(){return this.a.r=!0},
$S:0}
C.f8R.prototype={
$0(){return this.a.r=!1},
$S:0}
C.f93.prototype={
$0(){var w=this.a
return w.m(new C.f92(w,this.b))},
$S:0}
C.f92.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.f8T.prototype={
$0(){var w=this.a
return w.m(new C.f8S(w,this.b,this.c))},
$S:0}
C.f8S.prototype={
$0(){var w=this.a.d,v=this.c.a
return this.b?w.W(0,v):w.M(0,v)},
$S:0}
C.f90.prototype={
$0(){return this.a.a1C(this.b)},
$S:0}
C.f91.prototype={
$0(){return this.a.Pq(0,this.b)},
$S:0}
C.f96.prototype={
$0(){B.a4(this.a,!1).O(null)
return null},
$S:0}
C.f97.prototype={
$0(){var w=this.a
return w.m(new C.f95(w,this.b))},
$S:0}
C.f95.prototype={
$0(){var w=this.a,v=w.d
if(this.b)v.a9(0)
else{w=w.a.c
v.v(0,new B.N(w,new C.f94(),B.U(w).k("N<1,n>")))}},
$S:0}
C.f94.prototype={
$1(d){return d.a},
$S:z+67}
C.fgk.prototype={
$1(d){var w,v=x.N,u=x.z,t=B.a2(d,v,u),s=t.h(0,"id")
s=J.k(s==null?"":s)
w=x.f
v=F.hcF(w.b(t.h(0,"doc"))?B.a2(w.a(t.h(0,"doc")),v,u):A.cz)
t=t.h(0,"updatedAt")
u=B.bi(J.k(t==null?"":t))
return new C.os(s,v,u==null?new B.V(Date.now(),0,!1):u)},
$S:z+50}
C.fgl.prototype={
$1(d){return d.a.length!==0},
$S:z+5}
C.fzn.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n
for(w=d.length,v=this.a,u=0;u<d.length;d.length===w||(0,B.M)(d),++u){t=d[u]
s=t.a
r=v.h(0,s)
q=!0
if(r!=null){p=t.c
o=r.c
n=p.a
if(n<=o.gbr())q=n===o.gbr()&&p.b>o.gcC()}if(q)v.n(0,s,t)}},
$S:z+68}
C.fzl.prototype={
$1(d){return!this.a.t(0,d.a)},
$S:z+5}
C.fzm.prototype={
$2(d,e){return e.c.aK(0,d.c)},
$S:z+29}
C.fMr.prototype={
$1(d){return d.ag()},
$S:z+32}
C.fwa.prototype={
$1(d){return d.a===this.a},
$S:z+5}
C.fNi.prototype={
$1(d){return new C.YU(this.a,null)},
$S:z+34}
C.cKF.prototype={
$1(d){return A.a.i(d.b).length===0},
$S:z+39}
C.cKH.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.cKK.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cKL.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.cKJ())},
$S:12}
C.cKJ.prototype={
$0(){},
$S:0}
C.cKM.prototype={
$1(d){var w=0,v=B.j(x.a),u=this,t,s,r,q,p
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(C.a29(t.a.c),$async$$1)
case 2:s=f
r=u.b
q=J.cD(s)
p=q.bg(s,new C.cKI(r))
if(p<0)q.c8(s,0,r)
else q.n(s,p,r)
w=3
return B.b(C.ahM(t.a.c,s),$async$$1)
case 3:return B.h(null,v)}})
return B.i($async$$1,v)},
$S:299}
C.cKI.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cKN.prototype={
$1(d){},
$S:28}
C.cKG.prototype={
$1(d){return new C.YS(this.b,this.a.gcyr(),null)},
$S:z+40}
C.cKO.prototype={
$1(d){return D.hdE},
$S:z+43}
C.cKB.prototype={
$1(d){var w=null,v=B.m(24),u=B.J(D.Ym,A.r,1),t=x.p
return B.at(B.aG(!1,A.a1,!0,w,B.p(w,B.x(B.a([new B.D(D.bAL,B.x(B.a([B.p(w,D.bPu,A.f,w,w,new B.o(A.aw.j(0.14),w,w,w,w,w,A.a6),w,56,w,w,w,w,w,56),A.aM,D.fyQ,A.W,B.d("\u201c"+this.a.b.a+"\u201d is removed from this device. This cannot be undone.",w,w,w,w,w,w,D.fmw,A.L,w,w)],t),A.m,w,A.e,A.j,0,A.p),w),A.dY,new B.D(A.qa,B.B(B.a([B.E(B.dS(D.fFM,new C.cKz(d),B.dg(w,w,w,w,w,w,w,w,w,E.nc,w,w,A.cj,w,new B.b7(B.m(14),A.a0),D.b18,w,w,w,w)),1),A.as,B.E(B.bI(D.fLS,new C.cKA(d),B.bp(A.by,w,w,w,w,w,A.cj,w,new B.b7(B.m(14),A.a0),w,w,w)),1)],t),A.m,w,A.e,A.j,0,w,w),w)],t),A.m,w,A.e,A.Q,0,A.p),A.f,w,A.xm,new B.o(D.aeE,w,u,v,D.d3s,w,A.n),w,w,w,L.a_o,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ai),w,w,w)},
$S:1673}
C.cKz.prototype={
$0(){B.a4(this.a,!1).O(!1)
return null},
$S:0}
C.cKA.prototype={
$0(){B.a4(this.a,!1).O(!0)
return null},
$S:0}
C.cKC.prototype={
$0(){return J.nz(this.a.d,new C.cKy(this.b))},
$S:0}
C.cKy.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cKx.prototype={
$1(d){var w,v,u,t=null,s=B.m(28),r=B.J(D.Ym,A.r,1),q=x.p
q=B.a([B.B(B.a([B.p(t,D.bUu,A.f,t,t,new B.o(t,t,t,B.m(14),t,D.aqy,A.n),t,44,t,t,t,t,t,44),A.bc,B.E(B.x(B.a([B.d(this.a.b.a,t,1,A.a2,t,t,t,D.aTv,t,t,t),A.bA,D.fLN],q),A.E,t,A.e,A.j,0,A.p),1)],q),A.m,t,A.e,A.j,0,t,t),A.aA],q)
for(w=0;w<2;++w){v={}
u=D.dqy[w]
v.a=null
u=u.a
v.a=u[0]
q.push(new C.aya(u[1],u[2],u[3],new C.cKv(v,d),!1,t))}q.push(A.am)
q.push(D.buN)
q.push(A.am)
q.push(new C.aya(A.ed,"Delete book","Remove it from this device",new C.cKw(d),!0,t))
return B.bn(!0,B.p(t,B.x(q,A.E,t,A.e,A.Q,0,A.p),A.f,t,t,new B.o(D.aeE,t,r,s,t,t,A.n),t,t,t,A.u_,E.a_1,t,t,t),!0,!1,A.af,!0,!0)},
$S:25}
C.cKv.prototype={
$0(){var w=this.a.a
B.a4(this.b,!1).O(w)
return null},
$S:0}
C.cKw.prototype={
$0(){B.a4(this.a,!1).O("delete")
return null},
$S:0}
C.cKE.prototype={
$3(d,e,f){var w=null,v=B.m(4),u=B.a([new B.ac(0,A.G,A.w.j(0.45),A.aJ2,12)],x.V)
return B.dO(B.eL(A.A,e,B.p(w,B.by(B.m(4),new B.a7(62,95.81818181818181,B.eS(A.A,F.aoB(d),A.f,A.dz),w),A.aq),A.f,w,w,new B.o(w,w,w,v,u,w,A.n),w,w,w,w,w,w,w,w),w),new B.t(f,0))},
$S:z+48}
C.cKD.prototype={
$0(){return this.a.c4J()},
$S:0}
C.cKu.prototype={
$0(){return this.a.aZ7(0,this.b)},
$S:0}
C.cKt.prototype={
$0(){return this.a.Dn(this.b)},
$S:0}
C.cKs.prototype={
$0(){return this.a.Dn(this.b)},
$S:0}
C.cKP.prototype={
$2(d,e){var w=this.a
return w.bDC(J.r(w.d,e))},
$S:40}
C.cJW.prototype={
$0(){var w=this.a
if(w.c!=null)w.AS()},
$S:0}
C.cJV.prototype={
$0(){var w=this.a,v=w.w
return v.push(w.b14("Page "+(v.length+1),"",""))},
$S:0}
C.cJY.prototype={
$0(){var w=this.a.w,v=this.b,u=w[v],t=this.c
w[v]=w[t]
w[t]=u},
$S:0}
C.cK5.prototype={
$0(){},
$S:0}
C.cK6.prototype={
$1(d){var w=this.a,v=w.a,u=$.ax()
v.S$=u
v.P$=0
w=w.b
w.S$=u
w.P$=0
return null},
$S:9}
C.cJZ.prototype={
$0(){return this.a.c="data:"+this.b+";base64,"+A.cJ.gct().aM(this.c)},
$S:0}
C.cJX.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.cK0.prototype={
$0(){return this.a.QP(this.b)},
$S:0}
C.cK1.prototype={
$0(){return this.a.QP(this.b)},
$S:0}
C.cK2.prototype={
$0(){var w=this.a
w.m(new C.cK_(this.b))
w.Ee()},
$S:0}
C.cK_.prototype={
$0(){return this.a.c=""},
$S:0}
C.cK4.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new C.cK3(w,d))
w.Ee()},
$S:z+51}
C.cK3.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.cKb.prototype={
$2(d,e){if(d)this.a.AS()},
$S:128}
C.cK7.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=2
return B.b(u.a.AS(),$async$$0)
case 2:t=u.b
if(t.e!=null)t.K(x.q).f.T(D.f9w)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.cK8.prototype={
$0(){return this.a.aY5(this.b,-1)},
$S:0}
C.cK9.prototype={
$0(){return this.a.aY5(this.b,1)},
$S:0}
C.cKa.prototype={
$0(){return this.a.c64(0,this.b)},
$S:0}
C.fDT.prototype={
$1(d){return C.hmI()},
$S:44}
C.fDU.prototype={
$1(d){return null},
$S:28}
C.fkA.prototype={
$1(d){return null},
$S:28}
C.fES.prototype={
$1(d){var w=d.b[0]
w.toString
return w},
$S:314}
C.fER.prototype={
$2(d,e){return A.o.aK(e.length,d.length)},
$S:224}
C.fEY.prototype={
$1(d){var w=this.a
return C.h4W(d)===w||C.hrk(d)===w},
$S:z+4}
C.fjD.prototype={
$1(d){return A.a.aZ(A.o.u(d),2,"0")},
$S:80}
C.ccu.prototype={
$1(d){return d.length!==0},
$S:3}
C.fDR.prototype={
$1(d){return d.a===this.a.a.a},
$S:z+4}
C.fDS.prototype={
$1(d){return C.fGB(d)&&A.a.t(d.db,"rais")},
$S:z+4}
C.fyJ.prototype={
$1(d){var w=null
return B.bn(!0,new B.D(E.yf,B.x(B.a([B.at(B.p(w,w,A.f,w,w,new B.o(A.aZ,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bx,D.fGn,A.O,B.d("Hati ya jimbo: "+this.a,w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aM,B.dj(D.Hb,D.fAw,new C.fyH(d),B.bp(A.c1,w,w,w,A.w,w,A.cj,w,w,w,w,w)),A.W,B.et(A.uv,D.fHG,new C.fyI(d),B.dg(w,w,w,w,w,w,w,w,w,A.ae,w,w,A.cj,w,w,Q.xk,w,w,w,w))],x.p),A.aj,w,A.e,A.Q,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:25}
C.fyH.prototype={
$0(){B.a4(this.a,!1).O("continue")
return null},
$S:0}
C.fyI.prototype={
$0(){B.a4(this.a,!1).O("new")
return null},
$S:0}
C.fyK.prototype={
$1(d){var w=null
return B.em(B.a([B.bN(!1,D.fwC,w,w,!0,w,w,new C.fyF(d),w,w),B.bI(D.fOb,new C.fyG(d),w)],x.p),w,w,w,D.fQ6,w,w,w,w,D.fwv,w)},
$S:18}
C.fyF.prototype={
$0(){B.a4(this.a,!1).O(!1)
return null},
$S:0}
C.fyG.prototype={
$0(){B.a4(this.a,!1).O(!0)
return null},
$S:0}
C.eev.prototype={
$0(){var w=this.a
w.r=w.f=w.e=!1},
$S:0}
C.eet.prototype={
$0(){return this.a.e=!0},
$S:0}
C.eeu.prototype={
$0(){return this.a.f=!0},
$S:0}
C.eew.prototype={
$0(){return this.a.r=!1},
$S:0}
C.eex.prototype={
$0(){return this.a.r=!0},
$S:0}
C.fEX.prototype={
$1(d){return A.a.aZ(A.o.u(d),2,"0")},
$S:80}
C.fET.prototype={
$2$h$w(d,e){var w=null
return new B.bM(A.a4,w,w,B.Bt(A.A,B.p(w,w,A.f,w,w,new B.o(this.a.j(0.14),w,w,B.m(3),w,w,A.n),w,d,w,w,w,w,w,w),w,e),w)},
$0(){return this.$2$h$w(5,1)},
$1$w(d){return this.$2$h$w(5,d)},
$1$h(d){return this.$2$h$w(d,1)},
$S:1674}
C.fEV.prototype={
$1(d){var w=null,v=B.m(3)
return B.p(A.A,B.d(d,w,w,w,w,w,w,D.fnN,w,w,w),A.f,w,w,new B.o(this.a,w,w,v,w,w,A.n),w,12,w,w,w,w,w,w)},
$S:141}
C.fEW.prototype={
$1$size(d){var w=null
return B.B(B.a([B.p(w,w,A.f,w,w,new B.o(w,w,B.J(A.ig,A.r,1.5),w,w,w,A.a6),w,d,w,w,w,w,w,d),B.dO(B.p(w,w,A.f,w,w,new B.o(w,w,B.J(A.ig,A.r,1.5),w,w,w,A.a6),w,d,w,w,w,w,w,d),new B.t(-d*0.38,0))],x.p),A.m,w,A.b8,A.j,0,w,w)},
$0(){return this.$1$size(18)},
$S:1675}
C.fEU.prototype={
$2$female$size(d,e){var w=null,v=d?D.agF:this.a,u=B.J(A.ig,A.r,1),t=e*0.32,s=B.ao(w,B.p(w,w,A.f,w,w,new B.o(v,w,w,w,w,w,A.a6),w,t,w,w,w,w,w,t),w,w,w,w,e*0.16,w),r=d?0.62:0.5
return B.p(w,new B.an(A.A,w,A.aa,A.t,B.a([s,B.ao(e*0.06,B.p(w,w,A.f,w,w,new B.o(v,w,w,B.m(7),w,w,A.n),w,t,w,w,w,w,w,e*r),w,w,w,w,w,w)],x.p),w),A.f,w,w,new B.o(D.aeT,w,u,w,w,w,A.a6),w,e,w,w,w,w,w,e)},
$1$female(d){return this.$2$female$size(d,18)},
$S:1676}
C.fQL.prototype={
$1(d){return new C.adv(this.a,this.b,null)},
$S:z+108}
C.e14.prototype={
$2(d,e){var w,v,u,t=null,s=this.b,r=s?D.brr:A.Mb,q=B.J(D.jq.j(0.25),A.r,1),p=B.at(B.p(t,t,A.f,t,t,new B.o(A.c1.j(0.45),t,t,B.m(2),t,t,A.n),t,4,t,t,t,t,t,40),t,t,t),o=B.m(15)
o=B.p(t,D.apj,A.f,t,t,new B.o(t,t,B.J(A.c.j(0.5),A.r,1.2),o,B.a([new B.ac(0,A.G,D.jq.j(0.35),A.et,10)],x.V),D.c3i,A.n),t,t,t,t,A.y6,t,t,t)
w=this.a
v=w.d.length
u=x.p
return B.p(t,B.x(B.a([new B.D(H.a_e,B.x(B.a([p,A.aA,B.B(B.a([o,A.bc,B.E(B.x(B.a([B.d("Chagua muundo wa hati",t,t,t,t,t,t,B.l(t,t,s?A.c:D.jq,t,t,t,t,t,t,t,t,17,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),A.bA,B.d(w.c+" \xb7 "+v+" miundo",t,t,t,t,t,t,D.fn_,t,t,t)],u),A.E,t,A.e,A.j,0,A.p),1)],u),A.m,t,A.e,A.j,0,t,t)],u),A.m,t,A.e,A.j,0,A.p),t),B.E(B.iy(!0,t,e,A.y,D.aQN,new C.e13(w,this.c),v,D.ak7,t,A.ah,!1),1)],u),A.m,t,A.e,A.j,0,A.p),A.f,t,t,new B.o(r,t,q,A.mn,t,t,A.n),t,t,t,t,t,t,t,t)},
$S:113}
C.e13.prototype={
$2(d,e){var w=this.a.d[e]
return new C.acU(w,new C.e12(this.b,w),null)},
$S:z+72}
C.e12.prototype={
$0(){B.a4(this.a,!1).O(this.b.a)
return null},
$S:0}
C.fyN.prototype={
$1(d){return d.w==="hati_kuhowa"},
$S:z+2}
C.fyO.prototype={
$1(d){var w=null,v=this.a
return B.bn(!0,new B.D(E.yf,B.x(B.a([B.at(B.p(w,w,A.f,w,w,new B.o(A.aZ,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bx,D.fJV,A.O,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aM,B.dj(D.Hb,B.d('Endelea na "'+A.d.gI(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fyL(d),B.bp(D.jq,w,w,w,A.c,w,A.cj,w,w,w,w,w)),A.W,B.et(A.ok,D.US,new C.fyM(d),B.dg(w,w,w,w,w,w,w,w,w,A.ae,w,w,A.cj,w,w,Q.xk,w,w,w,w))],x.p),A.aj,w,A.e,A.Q,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:25}
C.fyL.prototype={
$0(){B.a4(this.a,!1).O("continue")
return null},
$S:0}
C.fyM.prototype={
$0(){B.a4(this.a,!1).O("new")
return null},
$S:0}
C.fyR.prototype={
$1(d){return d.w==="hati_kuhoweya"},
$S:z+2}
C.fyS.prototype={
$1(d){var w=null,v=this.a
return B.bn(!0,new B.D(E.yf,B.x(B.a([B.at(B.p(w,w,A.f,w,w,new B.o(A.aZ,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bx,D.fxC,A.O,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aM,B.dj(D.Hb,B.d('Endelea na "'+A.d.gI(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fyP(d),B.bp(D.jq,w,w,w,A.c,w,A.cj,w,w,w,w,w)),A.W,B.et(A.ok,D.US,new C.fyQ(d),B.dg(w,w,w,w,w,w,w,w,w,A.ae,w,w,A.cj,w,w,Q.xk,w,w,w,w))],x.p),A.aj,w,A.e,A.Q,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:25}
C.fyP.prototype={
$0(){B.a4(this.a,!1).O("continue")
return null},
$S:0}
C.fyQ.prototype={
$0(){B.a4(this.a,!1).O("new")
return null},
$S:0}
C.fyV.prototype={
$1(d){return d.w==="hati_malipo_awamu"},
$S:z+2}
C.fyW.prototype={
$1(d){var w=null,v=this.a
return B.bn(!0,new B.D(E.yf,B.x(B.a([B.at(B.p(w,w,A.f,w,w,new B.o(A.aZ,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bx,D.fEb,A.O,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aM,B.dj(D.Hb,B.d('Endelea na "'+A.d.gI(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fyT(d),B.bp(D.jq,w,w,w,A.c,w,A.cj,w,w,w,w,w)),A.W,B.et(A.ok,D.US,new C.fyU(d),B.dg(w,w,w,w,w,w,w,w,w,A.ae,w,w,A.cj,w,w,Q.xk,w,w,w,w))],x.p),A.aj,w,A.e,A.Q,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:25}
C.fyT.prototype={
$0(){B.a4(this.a,!1).O("continue")
return null},
$S:0}
C.fyU.prototype={
$0(){B.a4(this.a,!1).O("new")
return null},
$S:0}
C.fSd.prototype={
$1(d){return D.hiz},
$S:z+74}
C.eiS.prototype={
$2(d,e){var w,v=null,u=this.a,t=u?D.bii:A.Mb,s=B.J(A.ay.j(0.25),A.r,1),r=B.at(B.p(v,v,A.f,v,v,new B.o(A.ay.j(0.45),v,v,B.m(2),v,v,A.n),v,4,v,v,v,v,v,40),v,v,v),q=B.m(15)
q=B.p(v,D.bWO,A.f,v,v,new B.o(v,v,B.J(A.c.j(0.5),A.r,1.2),q,B.a([new B.ac(0,A.G,A.c1.j(0.35),A.et,10)],x.V),D.aqD,A.n),v,v,v,v,A.y6,v,v,v)
w=x.p
return B.p(v,B.x(B.a([new B.D(H.a_e,B.x(B.a([r,A.aA,B.B(B.a([q,A.bc,B.E(B.x(B.a([B.d("Chagua muundo wa hati",v,v,v,v,v,v,B.l(v,v,u?A.c:A_.M7,v,v,v,v,v,v,v,v,17,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.bA,B.d("Hati ya Ndoa \xb7 19 miundo",v,v,v,v,v,v,D.fkt,v,v,v)],w),A.E,v,A.e,A.j,0,A.p),1)],w),A.m,v,A.e,A.j,0,v,v)],w),A.m,v,A.e,A.j,0,A.p),v),B.E(B.iy(!0,v,e,A.y,D.aQN,new C.eiR(this.b),19,D.ak7,v,A.ah,!1),1)],w),A.m,v,A.e,A.j,0,A.p),A.f,v,v,new B.o(t,v,s,A.mn,v,v,A.n),v,v,v,v,v,v,v,v)},
$S:113}
C.eiR.prototype={
$2(d,e){var w=D.Rw[e]
return new C.afe(w,new C.eiQ(this.a,w),null)},
$S:z+75}
C.eiQ.prototype={
$0(){B.a4(this.a,!1).O(this.b.a)
return null},
$S:0}
C.fGF.prototype={
$0(){return B.h3T(C.i05(this.a))},
$S:302}
C.fGE.prototype={
$0(){var w=C.h5e(this.a)
return"data:image/png;base64,"+A.cJ.gct().aM(w)},
$S:23}
C.fhV.prototype={
$4(d,e,f,g){var w=d+f*7,v=g*3
v=B.a([new B.ji(d,e),new B.ji(w,e+v),new B.ji(d+f*14,e),new B.ji(w,e-v)],x.J)
B.a26(this.a,C.fC(4291404327),v)},
$S:666}
C.fSo.prototype={
$1(d){return new C.W6(this.a,null)},
$S:z+77}
C.elP.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.elO())},
$S:29}
C.elO.prototype={
$0(){},
$S:0}
C.elQ.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.elN(w,d))},
$S:1678}
C.elN.prototype={
$0(){return this.a.x=J.eQ(A.dG.gaR(this.b))},
$S:0}
C.elR.prototype={
$1(d){},
$S:28}
C.elr.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.eln.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.ely.prototype={
$0(){var w=this.a
w.as=!0
w.at="The editor is writing your newspaper\u2026"},
$S:0}
C.elz.prototype={
$0(){var w=this.a
A.d.a9(w.ay)
w.z=this.b
w=w.ax
A.d.a9(w)
w.push(D.exL)},
$S:0}
C.elA.prototype={
$0(){return this.a.as=!1},
$S:0}
C.elt.prototype={
$0(){var w=this.a
w.as=!0
w.at="Working on it\u2026"
w.ax.push(new B.z("you",this.b))
w.f.bP(0,A.c9)},
$S:0}
C.elu.prototype={
$0(){var w,v=this.b
if(v.c){w=this.a
w.ay.push(w.z)
w.z=v.b}this.a.ax.push(new B.z("ai",v.a))},
$S:0}
C.elv.prototype={
$0(){return this.a.ax.push(new B.z("ai",B.w(this.b)))},
$S:0}
C.elw.prototype={
$0(){return this.a.as=!1},
$S:0}
C.elx.prototype={
$1(d){var w=this.a.r,v=w.f
if(v.length!==0){v=A.d.gd1(v).Q
v.toString
w.me(v,A.dT,A.ix)}},
$S:9}
C.els.prototype={
$0(){var w=this.a,v=w.z,u=C.fHi(w.y),t=this.b
w.y=t
if(v.a===u)w.z=v.cJN(C.fHi(t))},
$S:0}
C.elp.prototype={
$0(){var w=this.a
w.as=!0
w.at="Making your picture\u2026"},
$S:0}
C.elq.prototype={
$0(){return this.a.as=!1},
$S:0}
C.elG.prototype={
$0(){return B.a4(this.a,!1).ib()},
$S:0}
C.elH.prototype={
$0(){var w=this.a
return w.m(new C.elF(w))},
$S:0}
C.elF.prototype={
$0(){var w=this.a
return w.z=w.ay.pop()},
$S:0}
C.elI.prototype={
$0(){var w=this.a
return w.m(new C.elE(w,this.b))},
$S:0}
C.elE.prototype={
$0(){var w=this.b.b
this.a.e.saX(0,w)
return w},
$S:0}
C.elJ.prototype={
$1(d){var w=this.a
return w.m(new C.elD(w))},
$S:8}
C.elD.prototype={
$0(){return this.a.Q="en"},
$S:0}
C.elK.prototype={
$1(d){var w=this.a
return w.m(new C.elC(w))},
$S:8}
C.elC.prototype={
$0(){return this.a.Q="sw"},
$S:0}
C.elL.prototype={
$0(){var w=this.a
return w.m(new C.elB(w,this.b))},
$S:0}
C.elB.prototype={
$0(){var w=this.b
this.a.f.saX(0,w)
return w},
$S:0}
C.elM.prototype={
$1(d){return this.a.a_i()},
$S:2}
C.elo.prototype={
$0(){return this.a.c9u(this.b)},
$S:0}
C.cg9.prototype={
$1(d){var w=this.a
return typeof w.h(0,d)=="string"?A.a.i(B.cP(w.h(0,d))):null},
$S:281}
C.cg7.prototype={
$1(d){return A.a.i(d)},
$S:14}
C.cg8.prototype={
$1(d){return d.length!==0},
$S:3}
C.fGf.prototype={
bm3(d,e){var w=0,v=B.j(x.H),u,t,s,r
var $async$$2=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:r=new C.bRl(d,B.a([],x.bH))
for(u=e.length,t=0;t<e.length;e.length===u||(0,B.M)(e),++t){s=e[t]
r.cG9($.r4().jK(0,"assets/news_fonts/"+s))}w=2
return B.b(r.mK(0),$async$$2)
case 2:return B.h(null,v)}})
return B.i($async$$2,v)},
$2(d,e){return this.bm3(d,e)},
$S:1679}
C.fEx.prototype={
$1(d){return d.length!==0},
$S:3}
C.fEz.prototype={
$1(d){var w=this.a.a
w=A.d.aH(A.d.ds(this.b,w,w+d)," ")
w=B.aL(w," \n\n ","\n\n")
w=B.aL(w," \n\n","\n\n")
return B.aL(w,"\n\n ","\n\n")},
$S:80}
C.fEy.prototype={
$1(d){var w,v,u,t=null
if(d===0)return!0
w=B.fu(t,t,t,t,B.cS(t,t,t,t,t,t,t,t,t,this.c,this.b.$1(d)),A.qH,A.bZ,t,A.dA,A.bW)
v=this.a
w.nY(v.b)
u=w.b.a.c
return u.gbb(u)<=v.a},
$S:33}
C.fhu.prototype={
$1(d){var w=A.a.fD(d,B.af("\\s+",!0,!1,!1,!1))
return new B.Z(w,new C.fhv(),B.U(w).k("Z<1>")).gL(0)},
$S:244}
C.fhv.prototype={
$1(d){return d.length!==0},
$S:3}
C.fhs.prototype={
$2(d,e){return d+this.a.$1(e)},
$S:223}
C.fht.prototype={
$2(d,e){return d+this.a.$1(e)},
$S:223}
C.cga.prototype={
$2(a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=null,a7=y.g,a8=b0.b
a8=isFinite(a8)?a8:824
w=b0.d
w=isFinite(w)?w:340
v=a5.b
u=a5.c
t=u-1
s=(a8-v*t)/u
r=a5.d&&a5.a.gaAQ()?Math.min(150,w*0.42):0
q=a5.e
p=x.s
o=B.a([],p)
for(n=a5.a,m=x.G,l=n.d,k=l.as;q>=10.5;q-=0.5){j=n.c.r
i=j.length===0?B.a([a7],p):j
h=B.b1(l.w)
g=B.a([],m)
for(f=0;f<u;++f)g.push(new B.z(s,w-(f===t?r:0)))
o=C.h4V(i,new B.F(!0,h,a6,k,a6,a6,q,A.cP,A.bp,0,a6,a6,1.28,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),g)
if(C.h1J(j.length===0?B.a([a7],p):j,o))break}e=q*1.28
j=A.d.aH(n.gchI(),"\n\n")
d=B.fu(a6,a6,a6,a6,B.cS(a6,a6,a6,a6,a6,a6,a6,a6,a6,n.aeN(k,q,1.28),j),A.qH,A.bZ,a6,A.dA,A.bW)
d.nY(s)
for(a0=1;a0<40;++a0){j=d.b.a.c
a1=Math.min(w,j.gbb(j)/u+e*a0)
j=n.c.r
i=j.length===0?B.a([a7],p):j
h=B.b1(l.w)
g=B.a([],m)
for(f=0;f<u;++f)g.push(new B.z(s,Math.min(a1,w-(f===t?r:0))))
a2=C.h4V(i,new B.F(!0,h,a6,k,a6,a6,q,A.cP,A.bp,0,a6,a6,1.28,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),g)
if(C.h1J(j.length===0?B.a([a7],p):j,a2)){o=a2
break}}a3=n.aeN(k,q,1.28)
p=x.p
m=B.a([],p)
for(k=r>0,v=v/2-0.5,l=l.w,j=r-12,a4=0;a4<u;++a4){i=B.a([],p)
if(a4>0)i.push(new B.D(new B.Q(v,0,v,0),B.p(a6,a6,A.f,B.b1(l).j(0.5),a6,a6,a6,a6,a6,a6,a6,a6,a6,1),a6))
h=B.a([new B.bA(1,A.bd,new B.y(o.length>a4?o[a4]:"",a6,a3,a6,A.qH,a6,a6,a6,a6,a6,a6,a6),a6)],p)
if(k&&a4===t)h.push(n.aAP(s,j))
i.push(new B.a7(s,a6,B.x(h,A.E,a6,A.e,A.j,0,A.p),a6))
A.d.v(m,i)}return B.B(m,A.E,a6,A.e,A.j,0,a6,a6)},
$S:460}
C.cgb.prototype={
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
n=o.gaAQ()
m=n?Math.min(140,p*0.4):0
n=x.s
l=B.a([],n)
for(k=x.G,j=o.d,i=j.as,h=17;h>=10.5;h-=0.5){g=o.c.r
f=g.length===0?B.a([a6],n):g
e=B.b1(j.w)
d=B.a([new B.z(u,q),new B.z(u,q)],k)
for(a0=0;a0<t;++a0)d.push(new B.z(r,p-(a0===s?m:0)))
l=C.h4V(f,new B.F(!0,e,a5,i,a5,a5,h,A.cP,A.bp,0,a5,a5,1.28,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5),d)
if(C.h1J(g.length===0?B.a([a6],n):g,l))break}a1=o.aeN(i,h,1.28)
a2=new C.cgc(a1)
n=x.p
v=B.B(B.a([a2.$2(l[0],u),A.Jz,new B.a7(v,a5,a4.f,a5),A.Jz,a2.$2(l[1],u)],n),A.E,a5,A.e,A.j,0,a5,a5)
k=B.a([],n)
for(i=m>0,j=j.w,g=m-12,a3=0;a3<t;++a3){f=B.a([],n)
if(a3>0)f.push(new B.D(D.bD5,B.p(a5,a5,A.f,B.b1(j).j(0.5),a5,a5,a5,a5,a5,a5,a5,a5,a5,1),a5))
e=B.a([new B.bA(1,A.bd,new B.y(l[2+a3],a5,a1,a5,A.qH,a5,a5,a5,a5,a5,a5,a5),a5)],n)
if(i&&a3===s)e.push(o.aAP(r,g))
f.push(new B.a7(r,a5,B.x(e,A.E,a5,A.e,A.j,0,A.p),a5))
A.d.v(k,f)}return B.x(B.a([new B.a7(a5,q,v,a5),A.ad,B.E(B.B(k,A.E,a5,A.e,A.j,0,a5,a5),1)],n),A.m,a5,A.e,A.j,0,A.p)},
$S:150}
C.cgc.prototype={
$2(d,e){var w=null
return new B.a7(e,w,B.d(d,w,w,w,w,w,w,this.a,A.qH,w,w),w)},
$S:1680}
C.fSr.prototype={
$1(d){return new C.W7(this.a,this.b,null)},
$S:z+79}
C.emm.prototype={
$1(d){return d.lK()},
$S:1681}
C.emn.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.eml(w,d))},
$S:1682}
C.eml.prototype={
$0(){var w=this.b
return this.a.d=w.gfA(w)},
$S:0}
C.em9.prototype={
$0(){return this.a.y=!0},
$S:0}
C.ema.prototype={
$0(){return this.a.y=!1},
$S:0}
C.emg.prototype={
$0(){return B.a4(this.a,!1).eL()},
$S:0}
C.emh.prototype={
$2(d,e){var w=null,v=this.a,u=this.b,t=B.J(A.bC,A.r,2.5)
return B.aB(w,B.p(w,B.b4(w,w,w,new C.bcA(u,v.gaxY(),w),A.fC),A.f,w,w,new B.o(w,w,t,w,w,w,A.n),w,w,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eme(v),new C.emf(v,e,u),w,w,w,w,w,w,w,w,w,w,w,!1,A.a5)},
$S:37}
C.eme.prototype={
$1(d){var w=this.a
return w.x=w.f},
$S:247}
C.emf.prototype={
$1(d){var w=this.a
w.m(new C.emb(w,d,this.b,this.c))},
$S:219}
C.emb.prototype={
$0(){var w,v,u,t=this,s=t.a,r=t.b
s.f=A.k.E(s.x*r.d,1,6)
w=s.gaxY()
r=r.a
v=t.c
u=t.d
s.r=A.k.E(s.r-r.a/v.b*(w.c-w.a)/u.c,0,1)
s.w=A.k.E(s.w-r.b/v.d*(w.d-w.b)/u.d,0,1)},
$S:0}
C.emi.prototype={
$1(d){var w=this.a
return w.m(new C.emd(w,this.b))},
$S:8}
C.emd.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.emj.prototype={
$1(d){var w=this.a
return w.m(new C.emc(w,d))},
$S:7}
C.emc.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.emk.prototype={
$0(){return B.a4(this.b,!1).O(this.a.a.c)},
$S:0}
C.fSH.prototype={
$1(d){return D.hlm},
$S:z+83}
C.eVk.prototype={
$1(d){return this.a.YW()},
$S:9}
C.eUc.prototype={
$0(){var w=this.a,v=this.b
w.z=v
w.y="data:image/png;base64,"+A.cJ.gct().aM(v)},
$S:0}
C.eUA.prototype={
$0(){var w=this.a
w.p4=this.b
w.as=3},
$S:0}
C.eUK.prototype={
$1(d){return d>=this.a.length},
$S:33}
C.eTW.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.eTX.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.eTU.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.eTV.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.eUt.prototype={
$2(d,e){var w,v,u=null,t=e.d,s=this.a,r=new C.eUu(s,this.b,t,e.b),q=r.$1(!0),p=s.y2
p=B.a([B.jF(B.rL(p>0.2?F.bUJ(q,B.TC(p,p,A.x)):q),A.t,u)],x.p)
w=s.bj
if(w>0.02){v=B.TC(12,12,A.x)
p.push(B.jF(B.d9(B.rL(F.bUJ(r.$1(!0),v)),w*0.75),A.t,u))}r=s.b1
if(r!=null&&s.b0>0)p.push(B.en(u,B.b1(r).j(s.b0),!0))
r=s.be
if(r!=null&&s.bL>0){r=B.b1(r).j(s.bL)
w=s.be
w.toString
p.push(B.c1(u,new B.o(u,u,u,u,u,new B.c0(D.aZO,1.15,A.x,u,0,B.a([r,B.b1(w).j(0)],x.O),u,u),A.n),A.bg))}r=s.aE
if(r>0)p.push(B.c1(u,new B.o(u,u,u,u,u,new B.c0(D.aZz,0.8,A.x,u,0,B.a([A.c.j(r*0.55),A.c.j(0)],x.O),u,u),A.n),A.bg))
r=s.aL
if(r>0)p.push(B.c1(u,new B.o(u,u,u,u,u,new B.a9(A.b3,A.b6,A.x,B.a([A.w.j(r),A.K,A.K,A.w.j(s.aL)],x.O),D.d24,u),A.n),A.bg))
if(s.aC>0){r=s.k1
p.push(B.ao(u,B.c1(u,new B.o(u,u,u,u,u,new B.a9(A.b3,A.b6,A.x,B.a([A.w.j(0),A.w.j(s.aC),A.w.j(s.aC),A.w.j(0)],x.O),D.ddy,u),A.n),A.bg),0.48*t,u,0,0,(r-0.06)*t,u))}r=s.Z
if(r>0)p.push(B.en(u,A.w.j(r),!0))
r=s.b8
if(r>0)p.push(B.c1(u,new B.o(u,u,u,u,u,new B.c0(A.A,0.95,A.x,u,0,B.a([A.K,A.w.j(r)],x.O),D.dau,u),A.n),A.bg))
s=s.aA
if(s>0)p.push(B.b4(u,u,u,new C.bga(s,u),A.ax))
return new B.an(A.a_,u,A.b0,A.t,p,u)},
$S:68}
C.eUu.prototype={
$1(d){var w,v,u,t,s,r=this,q=null,p=B.fP(r.b,A.A,q,q,A.cf,A.bV,!0,q,!1,q,q),o=r.a,n=o.aXI(o.RG,o.R8,o.rx,o.ry,o.to,o.x1,o.x2,o.xr,o.y1),m=o.c7,l=m*3.141592653589793/180
if(m===0)w=1
else{m=Math.cos(l)
v=Math.sin(l)
u=r.c
t=r.d
s=u/t
u=s>1?s:t/u
w=Math.abs(m)+Math.abs(v)*u}m=o.bi
v=o.aI
u=v-1
t=o.bG
s=o.c5?-1:1
return B.dO(B.eb(A.A,B.eL(A.A,l,B.fv(A.A,new B.Bg(new B.xk(q,q,n,A.AS),p,q),q,B.vW(s,o.cL?-1:1,1),!0),q),v*w,q,q),new B.t(-m*r.d*u/2,-t*r.c*u/2))},
$S:486}
C.eUG.prototype={
$0(){return this.a.m(new C.eUF(this.b,this.c))},
$S:0}
C.eUF.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eUH.prototype={
$1(d){return this.a.m(new C.eUE(this.b,d))},
$S:7}
C.eUE.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eUJ.prototype={
$0(){return this.a.m(new C.eUI(this.b,this.c))},
$S:0}
C.eUI.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eTM.prototype={
$1(d){return d.c===this.a.x},
$S:z+93}
C.eTN.prototype={
$1(d){var w=this.a
return w.m(w.gczP())},
$S:2}
C.eTO.prototype={
$1(d){return this.a.m(new C.eTL())},
$S:2}
C.eTL.prototype={
$0(){},
$S:0}
C.eTP.prototype={
$0(){var w=this.a
return w.m(new C.eTK(w,this.b))},
$S:0}
C.eTK.prototype={
$0(){return this.a.x=this.b},
$S:0}
C.eTR.prototype={
$2(d,e){return A.as},
$S:36}
C.eTQ.prototype={
$2(d,e){var w=null,v=this.b[e],u=this.a,t=v.a===u.w.a,s=B.m(14),r=B.a([B.b1(v.e),B.b1(v.f)],x.O),q=t?A.c:A.bz
q=B.J(q,A.r,t?2.5:1)
r=B.dd(w,B.at(B.d("\u201c",w,w,w,w,w,w,B.l(w,w,B.b1(v.r),w,w,w,w,w,w,w,w,40,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,w),w,w,A.b7,new B.o(w,w,q,s,w,new B.a9(A.b3,A.b6,A.x,r,w,w),A.n),A.hp,w,94,w,w,w,w,70)
return B.aB(w,new B.a7(70,w,B.x(B.a([r,A.fO,B.d(v.b,w,1,A.a2,w,w,w,B.l(w,w,t?A.c:A.aB,w,w,w,w,w,w,w,w,10.5,w,w,A.P,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eTJ(u,v),w,w,w,w,w,w,!1,A.a5)},
$S:84}
C.eTJ.prototype={
$0(){var w=this.a
return w.m(new C.eTG(w,this.b))},
$S:0}
C.eTG.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.eTS.prototype={
$1(d){var w=this.a
return w.m(new C.eTI(w,d))},
$S:8}
C.eTI.prototype={
$0(){return this.a.k3=this.b},
$S:0}
C.eTT.prototype={
$1(d){var w=this.a
return w.m(new C.eTH(w,d))},
$S:8}
C.eTH.prototype={
$0(){return this.a.k2=this.b},
$S:0}
C.eV9.prototype={
$1(d){var w=this.a.db
return w[d]===w[A.d.gI(this.b)]},
$S:33}
C.eVg.prototype={
$1(d){var w=this.a
return w.m(new C.eVh(w,d))},
$S:31}
C.eVh.prototype={
$0(){var w,v,u,t,s
for(w=this.a,v=w.dx,v=B.eo(v,v.r,B.a6(v).c),w=w.db,u=this.b,t=v.$ti.c;v.C();){s=v.d
w[s==null?t.a(s):s]=u}},
$S:0}
C.eVi.prototype={
$1(d){var w
A:{if(1===d){w=20
break A}if(2===d){w=28
break A}if(-1===d){w=11
break A}w=15
break A}return w},
$S:271}
C.eVa.prototype={
$0(){var w=this.a
return w.m(new C.eV8(w,this.b))},
$S:0}
C.eV8.prototype={
$0(){var w=this.a.dx,v=this.b
return w.t(0,v)?w.W(0,v):w.M(0,v)},
$S:0}
C.eVb.prototype={
$0(){var w=this.a
return w.m(new C.eV7(w,this.b))},
$S:0}
C.eV7.prototype={
$0(){var w,v=this.b.length,u=J.e4(v,x.S)
for(w=0;w<v;++w)u[w]=w
return this.a.dx.v(0,u)},
$S:0}
C.eVc.prototype={
$0(){var w=this,v=w.a
return v.m(new C.eV6(v,w.b,w.c,w.d))},
$S:0}
C.eV6.prototype={
$0(){var w,v,u,t,s,r=this,q=r.a.dx
q.a9(0)
w=B.a([],x.t)
for(v=r.b,u=r.c,t=r.d,s=0;s<v.length;++s)if(u[s]===t)w.push(s)
q.v(0,w)},
$S:0}
C.eVd.prototype={
$0(){var w=this.a,v=w.dx
return w.m(v.gBv(v))},
$S:0}
C.eVe.prototype={
$0(){return this.b.$1(this.a.a)},
$S:0}
C.eVf.prototype={
$0(){var w=this.a
return w.m(new C.eV5(w))},
$S:0}
C.eV5.prototype={
$0(){var w=this.a.db
return A.d.hv(w,0,w.length,0)},
$S:0}
C.eUT.prototype={
$1(d){return d.a===this.a.dy},
$S:209}
C.eUU.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=(e.b-42)/7,h=B.a([],x.p)
for(w=i*0.42,v=this.a,u=i*0.95,t=x.O,s=0;s<21;++s){r={}
q=D.ayJ[s]
r.a=null
p=q.a
r.a=p
o=v.dy
n=new B.aQ(9,9)
m=B.a([B.b1(v.w.e),B.b1(v.w.f)],t)
l=r.a
k=v.fx
h.push(v.ay1(new B.ng(new B.bk(n,n,n,n),A.aq,new B.kW(new B.o(j,j,j,j,j,new B.a9(A.a4,A.a8,A.x,m,j,j),A.n),A.bg,new C.b_H(l,B.b1(k==null?v.w.x:k),A.k.E(w,12,26),j),j),j),u,q.b,o===p,new C.eUS(r,v),2,i))}return B.bW(A.bE,h,A.bq,j,7,7)},
$S:161}
C.eUS.prototype={
$0(){var w=this.b
return w.m(new C.eUN(this.a,w))},
$S:0}
C.eUN.prototype={
$0(){return this.b.dy=this.a.a},
$S:0}
C.eUV.prototype={
$1(d){var w=this.a
w.p1=!1
w.k4=d},
$S:180}
C.eUY.prototype={
$0(){var w=this.a
return w.m(new C.eUR(w))},
$S:0}
C.eUR.prototype={
$0(){return this.a.p1=!0},
$S:0}
C.eUZ.prototype={
$1(d){return this.a.p2=d},
$S:7}
C.eV_.prototype={
$1(d){return this.a.p3=d},
$S:7}
C.eV0.prototype={
$1(d){return this.a.ok=d},
$S:7}
C.eV1.prototype={
$0(){var w=this.a
return w.m(new C.eUQ(w))},
$S:0}
C.eUQ.prototype={
$0(){var w=this.a
return w.fy=!w.fy},
$S:0}
C.eV2.prototype={
$0(){var w=this.a
return w.m(new C.eUP(w))},
$S:0}
C.eUP.prototype={
$0(){var w=this.a
return w.go=!w.go},
$S:0}
C.eV3.prototype={
$0(){var w=this.b
return w.m(new C.eUO(this.a,w))},
$S:0}
C.eUO.prototype={
$0(){return this.b.id=this.a.a},
$S:0}
C.eV4.prototype={
$1(d){return this.a.fx=d},
$S:180}
C.eUW.prototype={
$1(d){return this.a.fr=d},
$S:7}
C.eUX.prototype={
$1(d){return this.a.k1=d},
$S:7}
C.eUx.prototype={
$0(){var w=this.a
return w.m(new C.eUw(w))},
$S:0}
C.eUw.prototype={
$0(){var w=this.a
w.p4=null
w.b3M()},
$S:0}
C.eUy.prototype={
$0(){var w=this.a
return w.m(new C.eUv(w,this.b))},
$S:0}
C.eUv.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.eUz.prototype={
$0(){var w=this.a
return w.m(w.gcqb())},
$S:0}
C.eUp.prototype={
$0(){var w=this.a
return w.m(new C.eUo(w))},
$S:0}
C.eUo.prototype={
$0(){var w=this.a
w.RG=0.03
w.rx=1.12
w.ry=1.15
w.R8=w.xr=0},
$S:0}
C.eUq.prototype={
$0(){var w=this.a
return w.m(new C.eUn(w))},
$S:0}
C.eUn.prototype={
$0(){var w=this.a
w.aC=0.55
w.Z=Math.max(w.Z,0.12)},
$S:0}
C.eUr.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=null,n=(e.b-24)/4,m=B.a([],x.p)
for(w=n*1.25,v=this.a,u=this.b,t=0;t<18;++t){s=D.daW[t]
r=s.b
q=Math.abs(v.RG-r)<0.001&&Math.abs(v.rx-s.c)<0.001&&Math.abs(v.ry-s.d)<0.001&&Math.abs(v.to-s.e)<0.001&&Math.abs(v.x1-s.f)<0.001&&Math.abs(v.xr-s.r)<0.001&&Math.abs(v.x2)<0.5&&Math.abs(v.R8)<0.001&&!v.y1
p=new B.aQ(9,9)
m.push(v.ay1(new B.ng(new B.bk(p,p,p,p),A.aq,new B.a7(1/0,1/0,new B.Bg(new B.xk(o,o,v.aXI(r,0,s.c,s.d,s.e,s.f,0,s.r,!1),A.AS),B.fP(u,A.A,140,o,A.cf,A.bV,!1,o,!1,o,o),o),o),o),w,s.a,q,new C.eUm(v,s),3,n))}return B.bW(A.bE,m,A.bq,o,10,8)},
$S:161}
C.eUm.prototype={
$0(){var w=this.a
return w.m(new C.eUl(w,this.b))},
$S:0}
C.eUl.prototype={
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
C.eU3.prototype={
$1(d){return this.a.R8=d},
$S:7}
C.eU4.prototype={
$1(d){return this.a.RG=d},
$S:7}
C.eU5.prototype={
$1(d){return this.a.rx=d},
$S:7}
C.eU6.prototype={
$1(d){return this.a.xr=d},
$S:7}
C.eU7.prototype={
$1(d){return this.a.aE=d},
$S:7}
C.eU8.prototype={
$1(d){return this.a.Z=d},
$S:7}
C.eU9.prototype={
$1(d){return this.a.b8=d},
$S:7}
C.eUa.prototype={
$1(d){return this.a.aC=d},
$S:7}
C.eUb.prototype={
$1(d){return this.a.aL=d},
$S:7}
C.eTp.prototype={
$1(d){return this.a.ry=d},
$S:7}
C.eTq.prototype={
$1(d){return this.a.to=d},
$S:7}
C.eTr.prototype={
$1(d){return this.a.x1=d},
$S:7}
C.eTs.prototype={
$1(d){return this.a.x2=d},
$S:7}
C.eTt.prototype={
$0(){var w=this.a
return w.m(new C.eTo(w))},
$S:0}
C.eTo.prototype={
$0(){var w=this.a
return w.y1=!w.y1},
$S:0}
C.eTu.prototype={
$1(d){return this.a.b1=d},
$S:180}
C.eTv.prototype={
$1(d){return this.a.b0=d},
$S:7}
C.eTY.prototype={
$1(d){return this.a.y2=d},
$S:7}
C.eTZ.prototype={
$1(d){return this.a.bj=d},
$S:7}
C.eU_.prototype={
$1(d){return this.a.aA=d},
$S:7}
C.eU0.prototype={
$1(d){return this.a.be=d},
$S:180}
C.eU1.prototype={
$1(d){return this.a.bL=d},
$S:7}
C.eTz.prototype={
$1(d){return this.a.aI=d},
$S:7}
C.eTA.prototype={
$1(d){return this.a.bi=d},
$S:7}
C.eTB.prototype={
$1(d){return this.a.bG=d},
$S:7}
C.eTC.prototype={
$1(d){return this.a.c7=d},
$S:7}
C.eTD.prototype={
$0(){var w=this.a
return w.m(new C.eTy(w))},
$S:0}
C.eTy.prototype={
$0(){var w=this.a
return w.c7=A.k.F(w.c7+90+180,360)-180},
$S:0}
C.eTE.prototype={
$0(){var w=this.a
return w.m(new C.eTx(w))},
$S:0}
C.eTx.prototype={
$0(){var w=this.a
return w.c5=!w.c5},
$S:0}
C.eTF.prototype={
$0(){var w=this.a
return w.m(new C.eTw(w))},
$S:0}
C.eTw.prototype={
$0(){var w=this.a
return w.cL=!w.cL},
$S:0}
C.eUs.prototype={
$0(){var w=this.a,v=w.c
v.toString
return C.ifz(v,w.p4)},
$S:0}
C.eUk.prototype={
$2(d,e){var w=null,v=this.a.z,u=v==null?D.brM:B.fP(v,A.A,w,w,A.cf,A.bV,!1,w,!1,w,w)
return C.fEF(d.length===0?"rounded":d,u,e)},
$S:132}
C.eUg.prototype={
$0(){var w=this.a
return w.m(new C.eUf(w))},
$S:0}
C.eUf.prototype={
$0(){var w=this.a
w.ay=0.39
w.ch=0.8
w.CW=0.22
w.cx="circle"
w.cy="gold"},
$S:0}
C.eUh.prototype={
$0(){var w=this.b
return w.m(new C.eUe(this.a,w))},
$S:0}
C.eUe.prototype={
$0(){return this.b.cx=this.a.a},
$S:0}
C.eUi.prototype={
$0(){var w=this.b
return w.m(new C.eUd(this.a,w))},
$S:0}
C.eUd.prototype={
$0(){return this.b.cy=this.a.a},
$S:0}
C.eUj.prototype={
$1(d){var w=this.a
w.CW=d
w.ay=A.k.E(w.ay,0,1-d)
w.ch=A.k.E(w.ch,0,0.95)},
$S:7}
C.eUD.prototype={
$2(d,e){var w,v,u,t=null,s=e.b,r=e.d,q=B.m(20),p=B.a([new B.ac(-4,A.G,A.b5.j(0.35),A.J,30)],x.V),o=B.m(20),n=this.a,m=x.p,l=B.a([],m)
if(n.p4!=null)l.push(new B.ex(n.cjD(),n.r))
l.push(new C.J2(n.cwM(),!1,!1,t))
o=B.bT(0,B.by(o,new B.ex(new B.an(A.a_,t,A.b0,A.t,l,t),n.f),A.aq),0,0,0)
l=n.ay
w=n.ch
v=n.CW*s
u=B.m(8)
return B.p(t,new B.an(A.a_,t,A.aa,A.t,B.a([o,B.ao(t,B.aB(A.ca,B.c1(t,new B.o(t,t,B.J(A.c.j(0.3),A.r,1),u,t,t,A.n),A.bg),A.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.eUC(n,s,r),t,t,t,t,t,t,t,t,t,t,t,t,t,t,!1,A.a5),v,t,l*s,t,w*r,v)],m),t),A.f,t,t,new B.o(t,t,t,q,p,t,A.n),t,t,t,t,t,t,t,t)},
$S:233}
C.eUC.prototype={
$1(d){var w=this.a
return w.m(new C.eUB(w,d,this.b,this.c))},
$S:21}
C.eUB.prototype={
$0(){var w,v=this,u=v.a,t=v.b.d,s=v.c
u.ay=A.k.E(u.ay+t.a/s,0,1-u.CW)
w=v.d
u.ch=A.k.E(u.ch+t.b/w,0,1-u.CW*s/w)},
$S:0}
C.eUM.prototype={
$0(){var w=this.a
return w.m(new C.eUL(w,this.b))},
$S:0}
C.eUL.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.eU2.prototype={
$0(){var w=this.a.c
w.toString
return B.a4(w,!1).ib()},
$S:0}
C.eVj.prototype={
$2(d,e){var w,v,u,t=null,s=e.b
if(s>=860){w=this.a
v=x.p
return B.B(B.a([new B.a7(Math.min(s*0.4,460),t,B.x(B.a([w.b_s(),B.E(B.at(w.b2o(Math.max(240,e.d-110)),t,t,t),1)],v),A.m,t,A.e,A.j,0,A.p),t),B.E(B.x(B.a([B.E(w.aQK(),1),w.aMW()],v),A.m,t,A.e,A.j,0,A.p),1)],v),A.m,t,A.e,A.j,0,t,t)}u=A.k.E(e.d*0.36,190,360)
s=this.a
return B.x(B.a([s.b_s(),new B.D(A.hH,B.at(s.b2o(u),t,t,t),t),B.E(s.aQK(),1),s.aMW()],x.p),A.m,t,A.e,A.j,0,A.p)},
$S:575}
C.fBW.prototype={
$10$align$style$weight(d,e,f,g,h,i,j,k,l,m){return C.es(k,!1,j,A.aF,"",4280640491,i,l,m,"",h,C.bB4(),null,"","",0,!1,"",0,D.bh,4280172719,2,d,0,0,"",D.cl,D.cS,g,e,f)},
$9$align$weight(d,e,f,g,h,i,j,k,l){return this.$10$align$style$weight(d,e,f,g,h,i,j,k,A.bp,l)},
$8$weight(d,e,f,g,h,i,j,k){return this.$10$align$style$weight(d,e,f,g,h,i,j,A.L,A.bp,k)},
$7(d,e,f,g,h,i,j){return this.$10$align$style$weight(d,e,f,g,h,i,j,A.L,A.bp,A.P)},
$S:z+98}
C.fBV.prototype={
$3(d,e,f){var w=this,v=C.bB4(),u=w.b?A.H:A.cw,t=w.c?A.cD:A.bp
return C.es(w.d,!1,f,A.aF,"",4280640491,e,t,u,"",0.36,v,null,"","",0,!0,"",0,D.bh,4280172719,2,d,0,w.f,w.e,D.cl,D.cS,0.82,0.09,w.a)},
$S:z+28}
C.chy.prototype={
$1(d){return B.w(d)},
$S:17}
C.fJF.prototype={
$0(){return this.a},
$S:z+15}
C.fpi.prototype={
$1(d){return d.a.d0(this.a)},
$S:z+30}
C.fpj.prototype={
$2(d,e){return J.cq(e)},
$S:z+31}
C.fJH.prototype={
$0(){return B.a([],x.o)},
$S:z+15}
C.fJK.prototype={
$1(d){return d.a===A.a.i(this.a).toLowerCase()},
$S:z+10}
C.fJL.prototype={
$0(){return A.d.gI(D.ww)},
$S:z+33}
C.fJD.prototype={
$1(d){return d.a},
$S:z+16}
C.fJG.prototype={
$1(d){return d.a},
$S:z+16}
C.fHB.prototype={
$1(d){return A.a.i(B.w(d))},
$S:17}
C.fHC.prototype={
$1(d){return d.length!==0},
$S:3}
C.fHD.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.fC_.prototype={
$0(){return C.cE()},
$S:23}
C.fC2.prototype={
$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var w=this.a.$0(),v=m==null?this.b.e:m,u=this.c,t=u?k:D.cl,s=u?n:0
return C.es(j,l,v,A.aF,"",4280640491,i,q,r,"",h,w,null,u?o:"",p,0,!1,"",0,D.bh,4280172719,2,d,s,0,"",t,D.cS,g,e,f)},
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
C.fC1.prototype={
$9$fx$key$rotation(d,e,f,g,h,i,j,k,l){var w=this.a.$0()
return C.es(A.bi,!1,4279310375,A.aF,"",i,24,A.bp,A.a7,"",h,w,null,this.b?j:"",k,0,!1,"",l,d,i,0,"",0,0,"",D.cl,D.f8,g,e,f)},
$6(d,e,f,g,h,i){return this.$9$fx$key$rotation(d,e,f,g,h,i,"","",0)},
$7$key(d,e,f,g,h,i,j){return this.$9$fx$key$rotation(d,e,f,g,h,i,"",j,0)},
$8$fx$key(d,e,f,g,h,i,j,k){return this.$9$fx$key$rotation(d,e,f,g,h,i,j,k,0)},
$S:z+27}
C.fC0.prototype={
$9$anim$delay$fx$key(d,e,f,g,h,i,j,k,l){var w=this.a.$0(),v=this.b,u=v?i:D.cl,t=v?j:0
return C.es(A.bi,!1,4279310375,A.aF,"",4280640491,24,A.bp,A.a7,"",h,w,d,v?k:"",l,0,!1,"",0,D.bh,4280172719,2,"",t,0,"",u,D.lK,g,e,f)},
$5(d,e,f,g,h){return this.$9$anim$delay$fx$key(d,e,f,g,h,D.qx,350,"","")},
$8$anim$delay$key(d,e,f,g,h,i,j,k){return this.$9$anim$delay$fx$key(d,e,f,g,h,i,j,"",k)},
$8$anim$fx$key(d,e,f,g,h,i,j,k){return this.$9$anim$delay$fx$key(d,e,f,g,h,i,350,j,k)},
$S:z+37}
C.fBZ.prototype={
$1(d){var w=d.x
return w>0&&w<=this.a.length},
$S:z+17}
C.fEq.prototype={
$0(){var w=0,v=B.j(x.e),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.a){s=t.b
r=s.a
s=(r==="bullets"||r==="section")&&s.w.length!==0}else s=!1
w=s?3:5
break
case 3:s=t.b
w=6
return B.b($.hnK.c3(0,A.a.i(s.w).toLowerCase(),new C.fEo(s)),$async$$0)
case 6:q=e
w=4
break
case 5:q=null
case 4:w=t.c&&t.b.r.length!==0?7:9
break
case 7:s=t.b
w=10
return B.b(t.d.c3(0,s.r,new C.fEp(s)),$async$$0)
case 10:p=e
w=8
break
case 9:p=null
case 8:u=new B.bz(t.e,new B.bp4(p,q),x.e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1686}
C.fEo.prototype={
$0(){return F.aO9(this.a.w)},
$S:200}
C.fEp.prototype={
$0(){var w=this.a.r,v=B.aL(w.toLowerCase()," ","_")
return F.bzZ("https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji@main/assets/"+B.id(2,w,A.cg,!1)+"/3D/"+v+"_3d.png","image/png")},
$S:200}
C.fho.prototype={
$1(d){return d.a==="bio"},
$S:z+17}
C.fhp.prototype={
$1(d){return d.a},
$S:z+18}
C.fhq.prototype={
$1(d){return d.b},
$S:z+19}
C.fST.prototype={
$1(d){return D.hlC},
$S:z+41}
C.f0E.prototype={
$0(){return this.a.x=C.hSy(this.b,this.c.b)},
$S:0}
C.f0F.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.f0C.prototype={
$1(d){var w
if(this.a){w=this.b
if(w==null)w="circle"}else w=d
return w},
$S:403}
C.f0D.prototype={
$1(d){var w
if(this.a)w=d
else{w=this.b
if(w==null)w=""}return w},
$S:403}
C.f0B.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:o=t.b
n=t.a
m=n.c
m.toString
w=3
return B.b(B.bU(A.av,null,new C.f0w(n,t.c,o,t.d,t.e,t.f),m,!0,!0,o,A.k_,!1,!1,x.N),$async$$0)
case 3:s=e
if(s==null){w=1
break}w=A.a.a0(s,"finale:")?4:5
break
case 4:r=A.a.b7(s,7)
if(r.length===0){n.m(new C.f0x(n))
w=1
break}o=n.c
if(o==null){w=1
break}m=n.w
q=m.d
if(q.length===0){q=n.x
if(q==null)q=""}w=6
return B.b(C.htK(o,m.cKA(q,r)),$async$$0)
case 6:p=e
if(p!=null&&n.c!=null)n.m(new C.f0y(n,p))
w=1
break
case 5:o=s==="__auto"?null:s
t.r.$1(o)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.f0w.prototype={
$1(d){var w,v,u,t,s,r,q=this,p=null,o=new C.f0A(q.b,d),n=x.p,m=B.a([o.$2("__auto",B.p(p,D.b8D,A.f,p,p,D.b3B,p,p,p,p,p,p,p,p))],n),l=q.c,k=l?D.CA:D.CF,j=k.length,i=q.a,h=q.d,g=q.e,f=q.f,e=0
for(;e<j;++e){w=k[e].a
v=g.$1(w)
u=f.$1(w)
if(v.length===0&&u.length===0)v="rounded"
m.push(o.$2(w,new B.a7(64,64,C.fEF(v,i.b4p(h),u),p)))}t=B.kY(1,m,4,10,10,p,A.dR,!0)
if(!l)return B.bn(!0,new B.D(Ab.yd,t,p),!0,!1,A.af,!0,!0)
s=new C.f0z(i,d)
m=B.aI(d,A.bX,x.w).w
l=B.a([s.$2("","None")],n)
for(e=0;e<32;++e){r=D.Hv[e]
l.push(s.$2(r.a,r.b))}return B.bn(!0,new B.cT(new B.aZ(0,1/0,0,m.a.b*0.85),B.cd(B.x(B.a([D.fCB,A.W,t,A.dY,D.f_3,A.au,D.fNx,A.W,B.kY(1.15,l,3,10,10,p,A.dR,!0)],n),A.E,p,A.e,A.j,0,A.p),A.t,p,A.y,p,Ab.yd,p,p,A.ah),p),!0,!1,A.af,!0,!0)},
$S:25}
C.f0A.prototype={
$2(d,e){var w=null,v=d==="__auto"&&this.a==null||d===this.a,u=B.m(16),t=v?A.b5.j(0.22):A.c.j(0.04),s=v?A.bv:A.dt
return B.aB(w,B.p(w,e,A.f,w,w,new B.o(t,w,B.J(s,A.r,v?2:1),u,w,w,A.n),w,w,w,w,A.hJ,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.f0v(this.b,d),w,w,w,w,w,w,!1,A.a5)},
$S:1687}
C.f0v.prototype={
$0(){B.a4(this.a,!1).O(this.b)
return null},
$S:0}
C.f0z.prototype={
$2(d,e){var w,v=null,u=this.a.w,t=u.a===d,s=B.m(12),r=t?A.bM:A.bz
r=B.J(r,A.r,t?2.5:1)
w=B.m(10)
u=B.E(B.p(v,B.by(w,d.length===0?B.p(v,D.apO,A.f,A.c.j(0.05),v,v,v,v,v,v,v,v,v,v):B.e2(new C.NJ(u.FR(d),!0,!1,v),!0,v),A.aq),A.f,v,v,new B.o(v,v,r,s,v,v,A.n),v,v,v,v,v,v,v,v),1)
return B.aB(v,B.x(B.a([u,A.au,B.d(e,v,1,A.a2,v,v,v,B.l(v,v,t?A.bM:A.ae,v,v,v,v,v,v,v,v,10.5,v,v,A.P,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.j,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.f0u(this.b,d),v,v,v,v,v,v,!1,A.a5)},
$S:132}
C.f0u.prototype={
$0(){B.a4(this.a,!1).O("finale:"+this.b)
return null},
$S:0}
C.f0x.prototype={
$0(){var w=this.a
return w.w=w.w.FR("")},
$S:0}
C.f0y.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.f0k.prototype={
$0(){var w=this.a
w.e=this.b
w.cy=null},
$S:0}
C.f0l.prototype={
$0(){return this.a.cy=J.k(this.b)},
$S:0}
C.f0n.prototype={
$0(){return this.a.cy="Type a little about the presentation first, or attach a document."},
$S:0}
C.f0o.prototype={
$0(){return this.a.cy='You mentioned your logo \u2014 tap "Add your logo" below to upload it, so the AI puts the real one in.'},
$S:0}
C.f0p.prototype={
$0(){var w=this.a
w.ax=!0
w.cy=null
w.ay="Writing your "+w.ch+" slides\u2026"},
$S:0}
C.f0q.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.f0m(w,d))},
$S:2}
C.f0m.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.f0r.prototype={
$0(){var w=this.a
w.ax=!1
w.cy=B.w(this.b)},
$S:0}
C.f0S.prototype={
$0(){return this.a.f.fP()},
$S:0}
C.f0T.prototype={
$0(){var w=this.a
return w.m(new C.f0R(w))},
$S:0}
C.f0R.prototype={
$0(){return this.a.e=null},
$S:0}
C.f0U.prototype={
$0(){var w=this.a
return w.m(new C.f0Q(w))},
$S:0}
C.f0Q.prototype={
$0(){return this.a.x=null},
$S:0}
C.f0W.prototype={
$1(d){var w=this.a
return w.m(new C.f0P(w,d))},
$S:34}
C.f0P.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.f0X.prototype={
$1(d){var w=this.a
return w.m(new C.f0O(w,d))},
$S:34}
C.f0O.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.f0Y.prototype={
$0(){var w=this.a
return w.m(new C.f0N(w))},
$S:0}
C.f0N.prototype={
$0(){return this.a.y=B.a([],x.s)},
$S:0}
C.f0Z.prototype={
$1(d){var w=this.a
return w.m(new C.f0M(w,d))},
$S:34}
C.f0M.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.f1_.prototype={
$1(d){var w=this.a
return w.m(new C.f0L(w,d))},
$S:34}
C.f0L.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.f10.prototype={
$0(){var w=this.a
return w.m(new C.f0K(w))},
$S:0}
C.f0K.prototype={
$0(){var w=this.a
return w.w=w.w.FR("")},
$S:0}
C.f11.prototype={
$0(){var w=this.a
return w.m(new C.f0J(w,this.b))},
$S:0}
C.f0J.prototype={
$0(){return this.a.ch=this.b},
$S:0}
C.f12.prototype={
$2(d,e){var w,v,u=(e.b-16)/3,t=B.a([],x.p)
for(w=this.a,v=0;v<6;++v)t.push(new B.a7(u,null,w.bPD(D.a4h[v]),null))
return B.bW(A.bE,t,A.bq,null,8,8)},
$S:161}
C.f0V.prototype={
$1(d){var w=this.a
return w.m(new C.f0I(w,d))},
$S:8}
C.f0I.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.f0s.prototype={
$0(){var w=this.a
return w.m(new C.f0t(w,this.b,this.c))},
$S:0}
C.f0t.prototype={
$0(){var w=this.c,v=this.a.cx
return this.b?v.W(0,w):v.M(0,w)},
$S:0}
C.f0H.prototype={
$0(){var w=this.a
return w.m(new C.f0G(w,this.b))},
$S:0}
C.f0G.prototype={
$0(){return this.a.CW=this.b},
$S:0}
C.fSS.prototype={
$1(d){return new C.a0H(this.a,this.b,null)},
$S:z+42}
C.f0d.prototype={
$0(){return this.a.r="Type what you want changed or added."},
$S:0}
C.f0e.prototype={
$0(){var w=this.a
w.e=!0
w.r=null
w.f="Making your changes\u2026"},
$S:0}
C.f0f.prototype={
$0(){var w=this.a
w.e=!1
w.r=this.b===D.aIq?"The text already fits inside its frame.":"The text is already at its limit."},
$S:0}
C.f0g.prototype={
$0(){var w=this.a
w.e=!1
w.r="Nothing to bring back. Changes are kept for 20 minutes."},
$S:0}
C.f0h.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.f0c(w,d))},
$S:2}
C.f0c.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.f0i.prototype={
$0(){var w=this.a
w.e=!1
w.r=B.w(this.b)},
$S:0}
C.f0j.prototype={
$0(){var w=this.b
if(A.a.cc(w,"\u2026"))w=A.a.aq(w,0,w.length-1)
this.a.d.bP(0,new B.bb(w,B.hk(A.bw,w.length),A.aO))},
$S:0}
C.foy.prototype={
$1(d){return d.a===this.a},
$S:209}
C.eiH.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=p.gay2(),n=o.x
n===$&&B.c()
w=B.m(16)
v=p.a.c
u=v?D.cWN:D.ddh
t=D.xT.j(v?1:0.55)
v=p.a.c
t=B.J(t,A.r,v?1.8:1.2)
s=D.xT.j(v?0.35+0.15*o.x:0.12)
v=B.a([new B.ac(0,A.G,s,A.J,p.a.c?16:8)],x.V)
s=B.m(15)
n=B.bT(0,B.b4(q,q,q,new C.bip(n*6.283,q),A.ax),0,0,0)
o=o.x
o=B.bT(0,B.bRC(B.eL(A.A,0.5,B.p(q,q,A.f,q,q,new B.o(q,q,q,q,q,new B.a9(A.a4,A.a8,A.x,B.a([A.K,D.bgo.j(0.28),A.K],x.O),q,q),A.n),q,q,q,q,q,q,q,q),q),!0,new B.t(o*2.4-1.2,0)),0,0,0)
r=x.p
return B.p(q,B.by(s,new B.an(A.a_,q,A.aa,A.t,B.a([n,o,B.at(B.x(B.a([B.X(p.a.c?A.ec:A.m7,D.xT,q,q,q,20),A.au,B.eS(A.A,B.nY(A.jD,D.fw_,new C.eiG()),A.f,A.e2)],r),A.m,q,A.e,A.Q,0,A.p),q,q,q),B.ao(q,B.p(q,D.fsx,A.f,q,q,new B.o(D.xT,q,q,B.m(6),q,q,A.n),q,q,q,q,M.akO,q,q,q),q,q,q,4,4,q)],r),q),A.aq),A.f,q,q,new B.o(q,q,t,w,v,new B.a9(A.az,A.aE,A.x,u,q,q),A.n),q,64,q,q,q,q,q,q)},
$S:93}
C.eiG.prototype={
$1(d){return D.c1u.aB(0,d)},
$S:69}
C.fJM.prototype={
$1(d){return d.a===this.a},
$S:z+6}
C.fJN.prototype={
$1(d){var w=d.a
return A.a.i(w).length!==0&&w!==d.b},
$S:209}
C.fJO.prototype={
$2(d,e){return A.o.aK(e.a.length,d.a.length)},
$S:1688}
C.fJP.prototype={
$1(d){var w,v,u,t,s,r,q,p
for(w=this.a,v=w.length,u=d,t=0;t<w.length;w.length===v||(0,B.M)(w),++t){s=w[t]
r=s.a
q=s.b
u=B.aL(u,r,q)
p=r.toUpperCase()
if(p!==r)u=B.aL(u,p,q.toUpperCase())}return u},
$S:14}
C.fJI.prototype={
$1(d){return d.a},
$S:z+18}
C.fJJ.prototype={
$1(d){return d.b},
$S:z+19}
C.fS5.prototype={
$1(d){return new C.a_4(this.a,this.b,null)},
$S:z+44}
C.dni.prototype={
$0(){var w=this.a
w.f=!0
w.r=null},
$S:0}
C.dnj.prototype={
$1(d){return d.a===this.a.gaj_()},
$S:z+10}
C.dnk.prototype={
$0(){var w=this.a
w.f=!1
w.r=J.k(this.b)},
$S:0}
C.dnn.prototype={
$0(){B.a4(this.a,!1).O(null)
return null},
$S:0}
C.dno.prototype={
$0(){var w=this.a
return w.m(new C.dnm(w,this.b))},
$S:0}
C.dnm.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.dnp.prototype={
$1(d){var w=this.a
return w.m(new C.dnl(w,d))},
$S:8}
C.dnl.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eiF.prototype={
$1$2(d,e,f){var w=B.bq(d,!0,f)
A.d.dY(w,this.a)
return B.d1(w,0,B.dB(e,"count",x.S),B.U(w).c).dm(0)},
$2(d,e){return this.$1$2(d,e,x.z)},
$S:1689}
C.fdQ.prototype={
$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,n,o,p){return C.es(A.bi,!1,4279310375,A.aF,"",i,24,A.bp,A.a7,"",h,this.a.$0(),null,k,j,0,!1,"",n,d,o,p,"",m,0,"",l,D.f8,g,e,f)},
$8(d,e,f,g,h,i,j,k){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,D.cl,0,0,0,0)},
$12$anim$delay$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,n,o){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,0,n,o)},
$10$anim$delay(d,e,f,g,h,i,j,k,l,m){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,0,0,0)},
$S:z+45}
C.fdS.prototype={
$9(d,e,f,g,h,i,j,k,l){return C.es(A.L,!1,this.b.d,A.aF,"",4280640491,i,A.bp,A.cP,"",h,this.a.$0(),null,k,j,0,!1,"",0,D.bh,4280172719,2,d,l,0,"",D.mS,D.cS,g,e,f)},
$S:z+46}
C.fdR.prototype={
$5$size(d,e,f,g,h){var w,v=this,u=v.b,t=u.c
u=u.wJ(0,"twinkle")
w=t===D.bh?0.785:0
return v.a.$13$anim$delay$rotation$stroke$strokeWidth(t,d-h/2,e-h*0.89,h,h*1.78,v.c,f,u,D.mS,g,w,v.d.d,1.2)},
$4(d,e,f,g){return this.$5$size(d,e,f,g,0.022)},
$S:z+47}
C.fdP.prototype={
$1(d){var w=d.fx
return w==="sub"||w==="body"},
$S:z+4}
C.fD6.prototype={
$1(d){return d.a===this.a},
$S:z+11}
C.fD7.prototype={
$0(){return A.d.gI(D.HE)},
$S:z+49}
C.fD8.prototype={
$1(d){return d.a===this.a},
$S:z+11}
C.ffQ.prototype={
$1(d){return!(A.a.a0(d.db,"__design__")||A.a.a0(d.a,"design_"))},
$S:z+4}
C.fJe.prototype={
$1(d){var w=2450411,v=4281908728
C.dy(d,C.dz(4280171146,1,0,D.bh,w,0,0.52,0,0))
C.dy(d,C.dz(v,1,0,D.bh,w,0,0.04,0.48,0))
C.dy(d,C.dz(4294047225,0.38,0,D.bh,w,0,0.48,0.52,0.62))
C.dy(d,C.dz(v,0.006,0,D.fA,v,3,0.32,0.08,0.14))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fJf.prototype={
$1(d){var w=2450411,v=4280640491,u=4291548641
C.dy(d,C.dz(4280172719,0.8,0,D.bh,w,0,0.36,0.58,0.1))
C.dy(d,C.dz(v,0.64,0,D.bh,w,0,0.28,0.64,0.18))
C.dy(d,C.dz(4282090230,0.44,0,D.bh,w,0,0.2,0.7,0.28))
C.dy(d,C.dz(v,0.006,0,D.fA,v,3,0.22,0.08,0.12))
C.dy(d,C.dz(u,0.004,0,D.fA,u,2,0.38,0.08,0.18))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fJg.prototype={
$1(d){var w=2450411,v=4279548070
C.dy(d,C.dz(4279080072,0.11,0,D.bh,w,0,1,0,0))
C.dy(d,C.dz(4279310375,0.11,0,D.bh,w,0,1,0,0.89))
C.dy(d,C.dz(856528008,0.72,0,D.jZ,w,0,0.28,0.72,0.14))
C.dy(d,C.dz(1426953352,0.2,0,D.jZ,w,0,0.2,0.78,0.22))
C.dy(d,C.dz(v,0.004,0,D.fA,v,2,1,0,0.105))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fJr.prototype={
$1(d){var w=2450411
C.dy(d,C.dz(4279203438,0.55,0,D.jZ,w,0,0.5,0.55,-0.05))
C.dy(d,C.dz(4280171146,0.5,0,D.jZ,w,0,0.45,0.62,0.35))
C.dy(d,C.dz(4280640491,0.4,0.3,D.jY,w,0,0.35,0.68,0.55))
C.dy(d,C.dz(571438702,0.12,0,D.bh,w,0,0.12,0.08,0.08))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fJw.prototype={
$1(d){var w=4280472558
C.dy(d,C.dz(4279310375,0.75,-0.4,D.jY,2450411,0,0.75,-0.15,0.35))
C.dy(d,C.dz(w,0.55,0,D.bh,2450411,0,0.06,0.42,0.38))
C.dy(d,C.dz(w,0.006,0,D.fA,w,3,0.35,0.08,0.08))
C.dy(d,C.dz(2282478,0.12,0,D.bh,w,2,0.2,0.75,0.82))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fJx.prototype={
$1(d){var w=2450411,v=4280640491
C.dy(d,C.dz(3423541034,0.48,0,D.bh,w,0,1,0,0))
C.dy(d,C.dz(v,0.12,-0.08,D.jZ,w,0,1.1,-0.05,0.38))
C.dy(d,C.dz(858088427,0.35,0,D.bh,w,0,0.42,0.55,0.05))
C.dy(d,C.dz(v,0.006,0,D.fA,v,3,0.25,0.08,0.52))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fJy.prototype={
$1(d){var w,v,u,t,s=4280171146
for(w=0;w<4;++w){v=D.cVI[w]
u=Date.now()
t=$.j3
$.j3=t+1
v=new C.eN("design_"+(""+1000*u+"_"+t),D.f8,0.04+w*0.235,0.72,0.21,0.22,"",24,A.a7,A.bp,A.aF,4279310375,A.bi,null,D.bh,v,4294967295,2,0,!1,"",0,D.cl,0,"","","","","",!1,0)
u=$.KI
v.db="__design__:"+(u.length===0?"layer":u)
A.d.c8(d.z,0,v)}C.dy(d,C.dz(s,0.006,0,D.fA,s,3,0.3,0.04,0.08))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fJz.prototype={
$1(d){var w,v,u,t,s=4280172719
for(w=0;w<4;++w){v=B.ar(A.mx,A.ds,w/3).l()
u=Date.now()
t=$.j3
$.j3=t+1
v=new C.eN("design_"+(""+1000*u+"_"+t),D.f8,0.58+w*0.08,0.15+w*0.05,0.32,0.7,"",24,A.a7,A.bp,A.aF,4279310375,A.bi,null,D.Dh,v,2450411,0,0,!1,"",0,D.cl,0,"","","","","",!1,0)
u=$.KI
v.db="__design__:"+(u.length===0?"layer":u)
A.d.c8(d.z,0,v)}C.dy(d,C.dz(s,0.006,0,D.fA,s,3,0.4,0.06,0.1))
d.e=4294967295
d.f=4292602622},
$S:z+1}
C.fJA.prototype={
$1(d){var w=4294967295
C.dy(d,C.dz(4280640491,1,0,D.bh,2450411,0,0.42,0,0))
C.dy(d,C.dz(4280110808,1.1,1.57,D.jY,2450411,0,0.18,0.35,-0.05))
C.dy(d,C.dz(w,0.006,0,D.fA,w,2,0.25,0.08,0.85))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fJB.prototype={
$1(d){var w=4278982953,v=2450411,u=4282090230
C.dy(d,C.dz(w,0.1,0,D.bh,v,0,1,0,0))
C.dy(d,C.dz(u,0.012,0,D.bh,v,0,1,0,0.1))
C.dy(d,C.dz(u,0.006,0,D.fA,u,3,0.42,0.06,0.14))
C.dy(d,C.dz(403446057,0.68,0,D.jZ,v,0,0.22,0.72,0.18))
C.dy(d,C.dz(w,0.1,0,D.bh,v,0,1,0,0.9))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fJC.prototype={
$1(d){var w=4278630100
C.dy(d,C.dz(4279310375,1.2,0.15,D.jZ,2450411,0,0.55,-0.2,-0.1))
C.dy(d,C.dz(w,1.1,0.15,D.bh,2450411,0,0.08,0.15,-0.05))
C.dy(d,C.dz(1120295,0.18,0,D.bh,w,3,0.38,0.55,0.75))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fJh.prototype={
$1(d){var w=4292617766
C.dy(d,C.dz(4282714634,0.65,-0.2,D.jY,2450411,0,0.65,-0.1,0.45))
C.dy(d,C.dz(w,0.5,-0.15,D.jY,2450411,0,0.5,0.05,0.55))
C.dy(d,C.dz(w,0.006,0,D.fA,w,3,0.38,0.55,0.08))
d.e=4294967295
d.f=4294898418},
$S:z+1}
C.fJi.prototype={
$1(d){var w=2450411
C.dy(d,C.dz(4278413729,0.35,3.14,D.jY,w,0,0.45,-0.05,0.7))
C.dy(d,C.dz(4278355143,0.3,3.14,D.jY,w,0,0.4,0.25,0.75))
C.dy(d,C.dz(4279150057,0.32,3.14,D.jY,w,0,0.5,0.55,0.72))
C.dy(d,C.dz(863884284,0.22,0,D.eR,w,0,0.22,0.08,0.12))
d.e=4293982719
d.f=4294967295},
$S:z+1}
C.fJj.prototype={
$1(d){var w=4279310375,v=2450411,u=4280472558
C.dy(d,C.dz(w,0.14,0,D.bh,v,0,0.14,0.02,0.02))
C.dy(d,C.dz(2282478,0.14,0,D.bh,u,3,0.14,0.84,0.02))
C.dy(d,C.dz(w,0.28,0,D.jZ,v,0,0.35,-0.08,0.78))
C.dy(d,C.dz(u,0.22,0.5,D.jY,v,0,0.3,0.72,0.78))
C.dy(d,C.dz(w,0.006,0,D.fA,w,3,0.2,0.08,0.22))
d.e=4294967295
d.f=null},
$S:z+1}
C.fJk.prototype={
$1(d){var w=4293571336,v=1156231944
C.dy(d,C.dz(1841431,0.92,0,D.bh,w,3,0.92,0.04,0.04))
C.dy(d,C.dz(v,0.15,0,D.jY,2450411,0,0.15,0.02,0.02))
C.dy(d,C.dz(v,0.15,3.14,D.jY,2450411,0,0.15,0.83,0.83))
C.dy(d,C.dz(w,0.004,0,D.fA,w,2,0.7,0.15,0.88))
d.e=4280031511
d.f=4282523654},
$S:z+1}
C.fJl.prototype={
$1(d){var w=4279080072,v=2450411
C.dy(d,C.dz(w,0.14,0,D.lg,v,0,0.14,0.68,0.18))
C.dy(d,C.dz(4279548070,0.14,0,D.lg,v,0,0.14,0.78,0.28))
C.dy(d,C.dz(4281193663,0.14,0,D.lg,v,0,0.14,0.68,0.38))
C.dy(d,C.dz(4284410580,0.14,0,D.lg,v,0,0.14,0.78,0.48))
C.dy(d,C.dz(4279203438,0.14,0,D.lg,v,0,0.14,0.68,0.58))
C.dy(d,C.dz(w,0.006,0,D.fA,w,3,0.22,0.06,0.1))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fJm.prototype={
$1(d){var w=2450411,v=4280640491
C.dy(d,C.dz(3708753706,0.42,0,D.bh,w,0,1,0,0))
C.dy(d,C.dz(v,0.06,-0.05,D.jZ,w,0,1,0,0.38))
C.dy(d,C.dz(859356664,0.25,0,D.eR,w,0,0.25,0.7,0.08))
C.dy(d,C.dz(v,0.006,0,D.fA,v,3,0.3,0.08,0.48))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fJn.prototype={
$1(d){var w,v,u,t,s=4280640491
for(w=0;w<4;++w){v=B.ar(A.mx,A.ds,w/3).l()
u=Date.now()
t=$.j3
$.j3=t+1
v=new C.eN("design_"+(""+1000*u+"_"+t),D.f8,0.06+w*0.23,0.78,0.2,0.14,"",24,A.a7,A.bp,A.aF,4279310375,A.bi,null,D.Dh,v,2450411,0,0,!1,"",0,D.cl,0,"","","","","",!1,0)
u=$.KI
v.db="__design__:"+(u.length===0?"layer":u)
A.d.c8(d.z,0,v)}C.dy(d,C.dz(4280172719,0.08,0,D.bh,2450411,0,1,0,0))
C.dy(d,C.dz(s,0.006,0,D.fA,s,3,0.35,0.06,0.14))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fJo.prototype={
$1(d){var w,v,u,t=4291548641,s=4279310375
for(w=1;w<6;++w){v=Date.now()
u=$.j3
$.j3=u+1
u=new C.eN("design_"+(""+1000*v+"_"+u),D.f8,0.08,0.15+w*0.12,0.55,0.002,"",24,A.a7,A.bp,A.aF,s,A.bi,null,D.fA,t,t,0,0,!1,"",0,D.cl,0,"","","","","",!1,0)
v=$.KI
u.db="__design__:"+(v.length===0?"layer":v)
A.d.c8(d.z,0,u)}C.dy(d,C.dz(s,0.75,0,D.bh,2450411,0,0.22,0.72,0.1))
C.dy(d,C.dz(872415231,0.16,0,D.bh,2450411,0,0.16,0.75,0.15))
C.dy(d,C.dz(s,0.006,0,D.fA,s,3,0.2,0.08,0.1))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fJp.prototype={
$1(d){var w=4282865001,v=2450411,u=4284773515
C.dy(d,C.dz(4674921,0.9,0,D.bh,4287931320,2,0.9,0.05,0.05))
C.dy(d,C.dz(w,0.08,0,D.bh,v,0,0.08,0.03,0.03))
C.dy(d,C.dz(u,0.08,0,D.bh,v,0,0.08,0.89,0.03))
C.dy(d,C.dz(u,0.08,0,D.bh,v,0,0.08,0.03,0.89))
C.dy(d,C.dz(w,0.08,0,D.bh,v,0,0.08,0.89,0.89))
C.dy(d,C.dz(w,0.004,0,D.fA,w,2,0.25,0.12,0.12))
d.e=4294507260
d.f=4293060848},
$S:z+1}
C.fJq.prototype={
$1(d){var w,v,u,t,s,r=4279310375,q=2450411
for(w=0;w<3;++w){v=w*0.24
u=Date.now()
t=$.j3
$.j3=t+1
t=new C.eN("design_"+(""+1000*u+"_"+t),D.f8,0.55,0.14+v,0.38,0.18,"",24,A.a7,A.bp,A.aF,r,A.bi,null,D.bh,4294967295,4280640491,2,0,!1,"",0,D.cl,0,"","","","","",!1,0)
u=$.KI
t.db="__design__:"+(u.length===0?"layer":u)
A.d.c8(d.z,0,t)
u=B.ar(A.d6,A.co,w/2).l()
t=Date.now()
s=$.j3
$.j3=s+1
u=new C.eN("design_"+(""+1000*t+"_"+s),D.f8,0.57,0.16+v,0.06,0.14,"",24,A.a7,A.bp,A.aF,r,A.bi,null,D.bh,u,q,0,0,!1,"",0,D.cl,0,"","","","","",!1,0)
v=$.KI
u.db="__design__:"+(v.length===0?"layer":v)
A.d.c8(d.z,0,u)}C.dy(d,C.dz(4280171146,1,0,D.bh,q,0,0.48,0,0))
C.dy(d,C.dz(4280172719,1.1,1.57,D.jY,q,0,0.12,0.42,-0.05))
d.e=4294967295
d.f=4292602622},
$S:z+1}
C.fJs.prototype={
$1(d){var w=2450411
C.dy(d,C.dz(870995980,0.55,0.45,D.jZ,w,0,0.55,-0.12,-0.08))
C.dy(d,C.dz(856996006,0.45,0.45,D.jZ,w,0,0.45,0.62,-0.05))
C.dy(d,C.dz(16777215,0.38,0.45,D.jZ,4293548044,5,0.38,0.52,0.12))
C.dy(d,C.dz(585783308,0.3,0.45,D.jZ,w,0,0.3,0.56,0.16))
C.dy(d,C.dz(4279548070,0.06,0,D.bh,w,0,0.16,0.38,0.04))
C.dy(d,C.dz(1156208652,0.28,0,D.eR,w,0,0.28,0.66,0.52))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fJt.prototype={
$1(d){var w=4279080072,v=2450411,u=4294047225,t=4291548641,s=4293548044
C.dy(d,C.dz(w,1,0,D.bh,v,0,0.07,0,0))
C.dy(d,C.dz(u,0.1,0,D.bh,t,1,0.46,0.48,0.14))
C.dy(d,C.dz(u,0.1,0,D.bh,t,1,0.46,0.48,0.28))
C.dy(d,C.dz(u,0.1,0,D.bh,t,1,0.46,0.48,0.42))
C.dy(d,C.dz(s,0.08,0,D.eR,v,0,0.08,0.5,0.16))
C.dy(d,C.dz(w,0.08,0,D.eR,v,0,0.08,0.5,0.3))
C.dy(d,C.dz(4279548070,0.08,0,D.eR,v,0,0.08,0.5,0.44))
C.dy(d,C.dz(16777215,0.32,0.45,D.jZ,s,4,0.32,0.1,0.18))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fJu.prototype={
$1(d){var w,v,u,t=4279548070,s=4293548044,r=4279179050
C.dy(d,C.dz(4294047225,0.08,0,D.bh,t,2,0.1,0.02,0.06))
C.dy(d,C.dz(s,0.42,0,D.bh,2450411,0,0.36,0.58,0.18))
C.dy(d,C.dz(872415231,0.12,0,D.bh,2450411,0,0.28,0.62,0.24))
C.dy(d,C.dz(16777215,0.28,0,D.eR,s,4,0.32,0,0.72))
C.dy(d,C.dz(r,0.006,0,D.fA,r,3,0.42,0.08,0.22))
for(w=0;w<3;++w){v=Date.now()
u=$.j3
$.j3=u+1
u=new C.eN("design_"+(""+1000*v+"_"+u),D.f8,0.08,0.58+w*0.1,0.04,0.04,"",24,A.a7,A.bp,A.aF,4279310375,A.bi,null,D.eR,16777215,t,2,0,!1,"",0,D.cl,0,"","","","","",!1,0)
v=$.KI
u.db="__design__:"+(v.length===0?"layer":v)
A.d.c8(d.z,0,u)}d.e=4294967295
d.f=4294965229},
$S:z+1}
C.fJv.prototype={
$1(d){var w=2450411,v=4279548070
C.dy(d,C.dz(3423541034,0.55,0,D.bh,w,0,1,0,0))
C.dy(d,C.dz(4009754623,0.56,0.45,D.jZ,w,0,0.56,0.22,0.18))
C.dy(d,C.dz(3439329279,0.44,0.45,D.jZ,w,0,0.44,0.28,0.24))
C.dy(d,C.dz(v,0.07,0,D.bh,w,0,0.22,0.34,0.62))
C.dy(d,C.dz(v,1,0,D.bh,w,0,0.07,0,0))
d.e=4280166715
d.f=4279179050},
$S:z+1}
C.fAX.prototype={
$1(d){return d.a===this.a},
$S:z+20}
C.fAY.prototype={
$0(){return A.d.gI($.bEK())},
$S:z+52}
C.fnQ.prototype={
$1(d){var w=A.a.i(d)
if(w.length===0)return""
return A.a.a0(w,"\u2022")?w:"\u2022 "+w},
$S:14}
C.fnP.prototype={
$1(d){return C.i_0(d,this.a,this.b)},
$S:z+53}
C.fJV.prototype={
$1(d){var w=this,v=w.a,u=w.b,t=B.vW(1.0375,1.01875,1)
return new B.fS(v,u,new C.aTf(B.hPz(A.vr,C.i_3(w.c,w.d,v,u),t)))},
$S:402}
C.dXY.prototype={
$1(d){var w=d.a/1e6
this.a.d.sp(0,w)
return w},
$S:9}
C.dXX.prototype={
$2(d,e){var w=null,v=Math.min(e.b,e.d),u=this.b,t=B.c1(w,new B.o(w,w,w,w,w,new B.c0(A.KI,1.2,A.x,w,0,u.d,w,w),A.n),A.bg),s=this.a,r=s.d,q=s.a.d?0.45:1
return B.jF(new B.an(A.a_,w,A.b0,A.t,B.a([t,new B.ex(B.b4(w,w,w,new C.bfg(u.a,r,q,r),A.ax),w),B.at(new B.jR(r,new C.dXW(s,v,this.c,u),w,w,x.cl),w,w,w)],x.p),w),A.t,w)},
$S:432}
C.dXW.prototype={
$3(d,e,f){var w,v,u,t,s=this,r=null,q=A.er.av(0,A.k.E(e/1.4,0,1)),p=A.k.E(e/0.9,0,1),o=A.k.E((e-0.8)/0.9,0,1),n=Math.sin(e*1.6),m=s.b,l=m*0.08,k=x.p,j=B.a([],k),i=s.c
if(i!=null){w=m*0.22
v=m*0.008
u=s.d.e
t=B.C(u,x.bz)
t.push(A.d.gI(u))
u=B.a([new B.ac(0,A.G,u[1].j(0.55),A.J,l)],x.V)
A.d.v(j,B.a([B.p(r,B.hT(B.fP(i,A.A,r,r,A.cf,A.bV,!0,r,!1,r,r),A.aq),A.f,r,r,new B.o(r,r,r,r,u,new B.fX(A.A,0,6.283185307179586,A.x,t,r,new B.mx(e*0.8)),A.a6),r,w,r,r,new B.Q(v,v,v,v),r,r,w),new B.a7(r,m*0.04,r,r)],k))}i=s.d.e
w=s.a
v=A.a.i(w.a.c.b)
u=v.length
if(u===0)v="NGMY"
u=u>12?0.1:0.17
t=m*0.05
j.push(new C.brP(i,e,B.d(v,r,r,r,r,r,r,B.l(r,r,A.c,r,r,r,r,r,r,r,r,m*u,r,r,A.u,r,1.05,!0,r,m*0.012,r,r,r,B.a([new B.cX(i[1].j(0.6),A.J,t)],x.r),r,r),A.L,r,r),r))
j.push(new B.a7(r,m*0.025,r,r))
u=Math.max(1.5,m*0.004)
j.push(B.d9(B.dO(B.x(B.a([B.p(r,r,A.f,r,r,new B.o(r,r,r,r,r,new B.a9(A.a4,A.a8,A.x,B.a([A.K,i[1],A.K],x.O),r,r),A.n),r,u,r,r,r,r,r,m*0.22),new B.a7(r,m*0.022,r,r),B.d(w.a.c.gaLu(),r,r,r,r,r,r,B.l(r,r,A.c.j(0.92),r,r,r,r,r,r,r,r,t,r,r,A.a7,r,r,!0,r,m*0.003,r,r,r,r,r,r),A.L,r,r)],k),A.m,r,A.e,A.Q,0,A.p),new B.t(0,(1-o)*m*0.03)),o))
return B.d9(B.eb(A.A,new B.D(new B.Q(l,0,l,0),B.x(j,A.m,r,A.e,A.Q,0,A.p),r),(0.6+0.4*q)*(1+n*0.012),r,r),p)},
$S:99}
C.f_r.prototype={
$1(d){var w=this.b
return new B.a9(A.az,A.aE,A.x,this.a.c,B.a([0,A.k.E(w-0.1,0,1),A.k.E(w,0,1),A.k.E(w+0.1,0,1),1],x.x),null).aB(0,d)},
$S:69}
C.cc5.prototype={
$4$child$label$onTap$selected(d,e,f,g){var w,v=null,u=B.m(14),t=g?A.bM:A.bz
t=B.J(t,A.r,g?2.5:1)
w=g?B.a([new B.ac(0,A.G,A.hS.j(0.4),A.J,14)],x.V):v
w=B.dd(v,B.by(B.m(12),d,A.aq),v,v,A.b7,new B.o(v,v,t,u,w,v,A.n),A.eN,v,72,v,v,v,v,v)
return B.aB(v,new B.a7(112,v,B.x(B.a([w,A.fO,B.d(e,v,1,A.a2,v,v,v,B.l(v,v,g?A.bM:A.ae,v,v,v,v,v,v,v,v,11,v,v,A.P,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.j,0,A.p),v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,f,v,v,v,v,v,v,!1,A.a5)},
$S:1690}
C.cc6.prototype={
$0(){var w=this.a
return w.d.$1(w.c.FR(""))},
$S:0}
C.cc7.prototype={
$1(d){var w=this.a,v=w.c,u=d.a
return this.b.$4$child$label$onTap$selected(B.e2(new C.NJ(v.FR(u),!0,!1,null),!0,null),d.b,new C.cc8(w,this.c,d),v.a===u)},
$S:z+54}
C.cc8.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(C.htK(u.b,t.c.FR(u.c.a)),$async$$0)
case 2:s=e
if(s!=null)t.d.$1(s)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fQv.prototype={
$1(d){return new C.ZC(this.a,null)},
$S:z+55}
C.dcz.prototype={
$0(){var w=this.a
w.d=w.gvP().bcv("data:"+this.b+";base64,"+A.cJ.gct().aM(this.c));++w.r},
$S:0}
C.dcE.prototype={
$0(){B.a4(this.a,!1).O(null)
return null},
$S:0}
C.dcF.prototype={
$0(){var w=this.a
return w.m(new C.dcD(w))},
$S:0}
C.dcD.prototype={
$0(){return this.a.r++},
$S:0}
C.dcG.prototype={
$1(d){var w=this.a
return w.m(new C.dcC(w,d))},
$S:2}
C.dcC.prototype={
$0(){var w=this.a
return w.d=w.gvP().aEr(this.b)},
$S:0}
C.dcH.prototype={
$0(){var w=this.a
return w.m(new C.dcB(w))},
$S:0}
C.dcB.prototype={
$0(){var w=this.a
return w.d=w.gvP().bcv("")},
$S:0}
C.dcI.prototype={
$1(d){var w=this.a
return w.m(new C.dcA(w,d))},
$S:2}
C.dcA.prototype={
$0(){var w=this.a
return w.d=w.gvP().bcC(this.b)},
$S:0}
C.dcJ.prototype={
$0(){var w=this.a
w=w.gvP().bcC(w.gay3().a.a)
B.a4(this.b,!1).O(w)
return null},
$S:0}
C.fQu.prototype={
$1(d){var w={}
w.a=this.a
return new B.dY(new C.fQt(w),null)},
$S:20}
C.fQt.prototype={
$2(d,e){var w=null,v=this.a
return B.p(w,B.bn(!0,new B.cT(new B.aZ(0,1/0,0,B.aI(d,A.bX,x.w).w.a.b*0.85),B.cd(B.x(B.a([B.at(B.p(w,w,A.f,w,w,new B.o(A.aZ,w,w,B.m(9),w,w,A.n),w,4,w,w,w,w,w,40),w,w,w),A.aA,D.fKz,A.au,D.fKP,A.aA,new C.b_E(v.a,new C.fQs(v,e,d),!0,w)],x.p),A.E,w,A.e,A.Q,0,A.p),A.t,w,A.y,w,w,w,w,A.ah),w),!0,!1,A.af,!0,!1),A.f,w,w,D.b49,w,w,w,w,A.Nc,w,w,w)},
$S:175}
C.fQs.prototype={
$1(d){this.b.$1(new C.fQr(this.a,d))
B.a4(this.c,!1).O(d)},
$S:z+56}
C.fQr.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.fSR.prototype={
$1(d){return D.hfU},
$S:z+57}
C.djk.prototype={
$0(){B.a4(this.a,!1).O(null)
return null},
$S:0}
C.djl.prototype={
$0(){var w=this.a.c
w.toString
B.a4(w,!1).O(this.b)
return null},
$S:0}
C.djm.prototype={
$0(){var w=this.a,v=A.a.i(w.d.a.a)
if(v.length!==0){w=w.c
w.toString
B.a4(w,!1).O(v)}},
$S:0}
C.fGy.prototype={
$1(d){var w=this.b
return new B.a9(A.az,A.aE,A.x,B.a([A.K,B.ar(this.a,A.c,0.75).j(0.9),A.K],x.O),B.a([A.k.E(w-0.12,0,1),A.k.E(w,0,1),A.k.E(w+0.12,0,1)],x.x),null).aB(0,d)},
$S:69}
C.dcg.prototype={
$3(d,e,f){var w,v=this,u=new B.aF($.S().r,A.ag,null,null,B.a([],x.v)),t=d.a,s=v.b,r=e*s,q=d.b,p=f*s,o=q+p*0.12
u.D(new B.aX(t+r*1.2,o))
u.D(new B.c3(t+r*0.25,o,t+r*0.18,q+p*0.5))
w=t+r*0.12
u.D(new B.c3(w,q+p,w,q+p*1.2))
u.D(new B.Di(B.bX(new B.t(t+r*0.42,q+p*0.42),s*0.14),0,5.026548245743669))
s=v.c
s.aG(u,v.d)
s.aG(u,v.e)
p=B.I()
p.r=B.ar(v.a.d,A.c,0.6).gp(0)
s.ad(new B.t(w,o),2.2,p)},
$S:387}
C.fGC.prototype={
$2(d,e){return A.k.aK(d.c,e.c)},
$S:z+58}
C.fyZ.prototype={
$1(d){return d.w==="marriage_agreement"},
$S:z+2}
C.fz_.prototype={
$1(d){var w=null,v=this.a
return B.bn(!0,new B.D(E.yf,B.x(B.a([B.at(B.p(w,w,A.f,w,w,new B.o(A.aZ,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bx,D.fsP,A.O,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aM,B.dj(D.Hb,B.d('Endelea na "'+A.d.gI(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fyX(d),B.bp(A.c1,w,w,w,A.c,w,A.cj,w,w,w,w,w)),A.W,B.et(A.ok,D.US,new C.fyY(d),B.dg(w,w,w,w,w,w,w,w,w,A.ae,w,w,A.cj,w,w,Q.xk,w,w,w,w))],x.p),A.aj,w,A.e,A.Q,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:25}
C.fyX.prototype={
$0(){B.a4(this.a,!1).O("continue")
return null},
$S:0}
C.fyY.prototype={
$0(){B.a4(this.a,!1).O("new")
return null},
$S:0}
C.chw.prototype={
$1(d){return d.hJ()},
$S:z+59}
C.chx.prototype={
$1(d){return d.ag()},
$S:z+60}
C.chv.prototype={
$1(b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=null,b2=B.a2(b5,x.N,x.z),b3=B.aK(b2.h(0,"fontWeight")),b4=b3==null?b1:A.k.N(b3)
if(b4==null)b4=A.a7.gdL(0)
b3=B.aK(b2.h(0,"fontStyle"))
w=b3==null?b1:A.k.N(b3)
if(w==null)w=0
b3=B.aK(b2.h(0,"align"))
v=b3==null?b1:A.k.N(b3)
if(v==null)v=0
b3=b2.h(0,"id")
b3=J.k(b3==null?"":b3)
u=C.hVI(b2.h(0,"type"))
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
n=A.aAD[A.o.E(b4,0,8)]
m=D.cYN[A.o.E(w,0,1)]
l=C.hZr(b2.h(0,"decoration"))
k=B.aK(b2.h(0,"color"))
k=k==null?b1:A.k.N(k)
if(k==null)k=4279310375
j=A.axc[A.o.E(v,0,5)]
i=b2.h(0,"imageRef")
i=i==null?b1:J.k(i)
h=C.i1j(b2.h(0,"shape"))
g=B.aK(b2.h(0,"fillColor"))
g=g==null?b1:A.k.N(g)
if(g==null)g=4280640491
f=B.aK(b2.h(0,"strokeColor"))
f=f==null?b1:A.k.N(f)
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
a2=a2==null?b1:A.k.N(a2)
if(a2==null)a2=0
a3=C.hoT(b2.h(0,"textTransition"))
a4=B.aK(b2.h(0,"textAnimDelayMs"))
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
b0=J.A(b2.h(0,"rich"),!0)
b2=B.aK(b2.h(0,"textBg"))
b2=b2==null?b1:A.k.N(b2)
return C.es(j,a0,k,l,a1,g,o,m,n,a7,q,b3,i,a6,a5,a2,b0,a8,d,h,f,e,p,a4,b2==null?0:b2,a9,a3,u,r,t,s)},
$S:z+61}
C.chl.prototype={
$1(d){return d.hJ()},
$S:z+62}
C.chm.prototype={
$1(d){return d.ag()},
$S:z+63}
C.chi.prototype={
$1(d){return B.w(d)},
$S:17}
C.chj.prototype={
$1(d){return B.w(d)},
$S:17}
C.chk.prototype={
$1(d){return C.hfu(B.a2(d,x.N,x.z))},
$S:z+64}
C.chN.prototype={
$1(d){return d.a===this.a},
$S:z+65}
C.chO.prototype={
$0(){return A.d.gI(D.a3X)},
$S:z+66}
C.chI.prototype={
$1(d){var w,v,u=d.a
if(A.a.i(u).length===0)return
w=this.a
v=w.h(0,u)
if(v==null||!v.f.cd(d.f))w.n(0,u,d.hJ())},
$S:z+7}
C.chH.prototype={
$2(d,e){return e.f.aK(0,d.f)},
$S:z+21}
C.chD.prototype={
$1(d){return new B.N(d,new C.chE(),B.U(d).k("N<1,V>")).fb(0,new C.chF())},
$S:z+69}
C.chE.prototype={
$1(d){return d.f},
$S:z+70}
C.chF.prototype={
$2(d,e){return d.cd(e)?d:e},
$S:671}
C.chG.prototype={
$1(d){if(d==null||A.a.i(d).length===0)return B.a([],x.D)
return C.hLo(d)},
$S:z+71}
C.chJ.prototype={
$1(d){return!this.a.t(0,d.a)},
$S:z+2}
C.chK.prototype={
$2(d,e){return e.f.aK(0,d.f)},
$S:z+21}
C.chL.prototype={
$1(d){return d.ag()},
$S:z+14}
C.fHa.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this
for(w=i.a.z,v=w.length,u=i.c,t=i.d,s=i.b,r=0;r<w.length;w.length===v||(0,B.M)(w),++r){q=w[r]
p=q.a
if(s.aj(0,p))continue
for(o=u.z,n=o.length,m=q.b,l=0;l<o.length;o.length===n||(0,B.M)(o),++l){k=o[l]
j=k.a
if(t.t(0,j)||k.b!==m)continue
if(d.$2(k,q)){s.n(0,p,k)
t.M(0,j)
break}}}},
$S:z+73}
C.fH6.prototype={
$2(d,e){var w=d.fx
return w.length!==0&&w===e.fx},
$S:z+8}
C.fH7.prototype={
$2(d,e){var w=d.at
return(w==null?"":w).length!==0&&w==e.at},
$S:z+8}
C.fH8.prototype={
$2(d,e){var w
if(d.b===D.cS){w=A.a.i(d.r)
w=w.length!==0&&w===A.a.i(e.r)}else w=!1
return w},
$S:z+8}
C.fH9.prototype={
$2(d,e){return d.b===D.f8&&d.ax===e.ax&&d.fx.length===0&&e.fx.length===0},
$S:z+8}
C.chr.prototype={
$2(b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=null,a9=b7.b,b0=a9/960,b1=this.a,b2=b1.c,b3=b1.d,b4=C.ia8(b2,b3),b5=B.a6(b4).k("bc<2>")
b5=B.cF(new B.bc(b4,b5),new C.chq(),b5.k("K.E"),x.N)
w=B.de(b5,B.a6(b5).k("K.E"))
b1=b1.e
v=A.q1.av(0,A.k.E(b1,0,1))
u=new C.chs()
b5=B.ar(u.$2(b2,!1),u.$2(b3,!1),v)
b5.toString
t=B.ar(u.$2(b2,!0),u.$2(b3,!0),v)
t.toString
s=new C.cht(a9,b7.d)
r=new C.chu(b0)
q=x.p
p=B.a([],q)
for(b2=b2.z,o=b2.length,n=b1/0.55,m=0;m<b2.length;b2.length===o||(0,B.M)(b2),++m){l=b2[m]
if(w.t(0,l.a))continue
k=A.jK.av(0,A.k.E(n,0,1))
p.push(s.$5(l.c,l.d,l.e,l.f,new B.ky(A.k.E(1-k,0,1),B.dO(B.eb(A.A,r.$1(l),1-k*0.06,a8,a8),new B.t(-k*30*b0,0)),a8)))}for(b2=b3.z,b3=b2.length,o=1-v,j=0,m=0;m<b2.length;b2.length===b3||(0,B.M)(b2),++m){i=b2[m]
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
if(a2===D.f8){a4=i.hJ()
a4.ay=B.ar(B.b1(l.ay),B.b1(i.ay),v).l()
a4.ch=B.ar(B.b1(l.ch),B.b1(i.ch),v).l()
a4.cx=0
a5=r.$1(a4)}else a5=a2===D.lK&&l.at==i.at?r.$1(i):new B.an(A.a_,a8,A.b0,A.t,B.a([new B.ky(A.k.E(o,0,1),r.$1(l),a8),new B.ky(A.k.E(v,0,1),r.$1(i),a8)],q),a8)
a2=a3===0?a5:new B.iJ(B.wr(a3),a8,A.A,!0,a8,a5,a8)
p.push(s.$5(n+(h-n)*v,g+(f-g)*v,e+(d-e)*v,a0+(a1-a0)*v,a2))}else{a6=A.k.E((b1-(0.35+j*0.07))/0.5,0,1);++j
a7=i.dy
if(a7===D.cl)a7=D.mS
p.push(s.$5(i.c,i.d,i.e,i.f,C.hr9(a7,a6,r.$1(i))))}}return B.c1(new B.an(A.a_,a8,A.aa,A.t,p,a8),new B.o(a8,a8,a8,a8,a8,new B.a9(A.a4,A.a8,A.x,B.a([b5,t],x.O),a8,a8),A.n),A.bg)},
$S:386}
C.chq.prototype={
$1(d){return d.a},
$S:z+22}
C.chs.prototype={
$2(d,e){var w
if(e){w=d.f
if(w==null)w=d.e}else w=d.e
return B.b1(w)},
$S:z+76}
C.cht.prototype={
$5(d,e,f,g,h){var w=this.a,v=this.b
return B.ao(null,h,g*v,null,d*w,null,e*v,f*w)},
$S:1694}
C.chu.prototype={
$1(d){var w=null,v=d.fy,u=A.a.gX(d.a)
return new C.a7Y(v,C.b1M(!1,w,!1,d,w,!1,w,w,w,this.a,!1,!1),!0,u,w)},
$S:z+23}
C.dKt.prototype={
$2(d,e){var w=Date.now()/1000*2*3.141592653589793,v=Math.sin(w/18)
return B.eb(new B.df(Math.sin(w/23)*0.6,Math.cos(w/29)*0.5),e,1.035+v*0.03,null,null)},
$S:46}
C.chA.prototype={
$1(d){return d.a===this.a.a},
$S:z+11}
C.chB.prototype={
$1(d){return d.a===this.a.a},
$S:z+20}
C.fK1.prototype={
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
C.fJ8.prototype={
$1(d){return new C.adB(this.a,this.b,null)},
$S:z+78}
C.etK.prototype={
$0(){return this.a.Qf(this.b,C.idy(),"Tap Save to Files on the next screen.","Download did not start \u2014 try Share.")},
$S:0}
C.etL.prototype={
$0(){var w=this.a,v=w.d?"Choose Print from the share menu for one full page.":"Pick Save to Files or send from the share menu."
return w.Qf(this.b,C.idA(),v,"Share unavailable \u2014 try Safari.")},
$S:0}
C.etM.prototype={
$0(){var w=this.a,v=w.d?"PDF opened \u2014 tap Share \u2197 then Print.":"PDF opened \u2014 use Share \u2197 at the bottom of Safari."
return w.Qf(this.b,C.idz(),v,"Could not open Safari \u2014 try Share.")},
$S:0}
C.etN.prototype={
$0(){Z.hqU()
B.a4(this.a,!1).O(null)},
$S:0}
C.chp.prototype={
$1(d){var w=null,v=this.a
return v==null?d:B.l(w,w,w,w,w,w,w,w,w,w,w,d.r,d.x,w,d.w,v,d.as,!0,w,d.y,w,w,w,w,w,w)},
$S:1695}
C.cho.prototype={
$2(d,e){var w,v=this,u=null,t=B.dM(d,A.nJ),s=t==null?u:t.b,r=s==null?2:s,q=e.b,p=isFinite(q)?q:0,o=p<=0?u:A.k.V(A.k.E(p*Math.max(B.jU(r),5),96,1500))
t=v.b
w=v.c||v.d?A.bV:A.dz
return B.fP(t,A.A,o,new C.chn(),A.cf,w,!0,u,!1,new B.cs("img_"+v.a.c.a+"_"+t.length,x.W),u)},
$S:1696}
C.chn.prototype={
$3(d,e,f){return D.adp},
$S:210}
C.fH5.prototype={
$2(d,e){var w,v,u,t=null,s=B.m(6),r=this.a
if(r.f!=null){w=B.b1(r.e)
v=r.f
v.toString
v=new B.a9(A.az,A.aE,A.x,B.a([w,B.b1(v)],x.O),t,t)
w=v}else w=t
v=r.f==null?B.b1(r.e):t
r=r.z
r=B.d1(r,0,B.dB(6,"count",x.S),B.U(r).c)
u=r.$ti.k("N<ak.E,cN>")
r=B.C(new B.N(r,new C.fH4(e.b,e.d),u),u.k("ak.E"))
return B.by(s,B.c1(new B.an(A.a_,t,A.aa,A.t,r,t),new B.o(v,t,t,t,t,w,A.n),A.bg),A.aq)},
$S:1697}
C.fH4.prototype={
$1(d){var w=null,v=d.c,u=this.a,t=d.d,s=this.b,r=d.e,q=d.f
return B.ao(w,C.b1M(!1,w,!1,d,w,!1,w,w,w,u/960,!1,!0),q*s,w,v*u,w,t*s,r*u)},
$S:z+24}
C.fqE.prototype={
$3(d,e,f){var w,v,u,t,s,r=this,q=null,p=r.a
p.a=B.cL(r.b,new C.fqC(d))
w=B.aI(d,A.bX,x.w).w
v=B.m(22)
u=B.J(A.bz,A.r,1)
t=B.a([new B.ac(0,A.G,A.w.j(0.45),A.fY,28)],x.V)
s=x.p
return new B.d0(e,!1,B.at(B.aG(!1,A.a1,!0,q,B.p(q,B.x(B.a([B.B(B.a([B.E(B.x(B.a([B.d(r.c,q,q,q,q,q,q,A.k2,q,q,q),A.au,B.d("Applied \u2014 tap Done or wait 1.5 seconds",q,q,q,q,q,q,B.l(q,q,A.c.j(0.45),q,q,q,q,q,q,q,q,11,q,q,A.a7,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),A.E,q,A.e,A.j,0,A.p),1),B.bN(!1,A.Ad,q,q,!0,q,q,new C.fqD(p,d),q,B.fy(q,q,A.bk,q,q,q,q,q,q,q,q,A.c,q,q,q,q,q,A.BF,q,new B.b7(B.m(12),A.a0),q,q,q,q,q,q))],s),A.m,q,A.e,A.j,0,q,q),A.aA,r.d],s),A.m,q,A.e,A.Q,0,A.p),A.f,q,new B.aZ(0,w.a.a*0.94,0,1/0),new B.o(A.av,q,u,v,t,q,A.n),q,q,q,A.fX,A.G7,q,q,q),A.f,A.K,0,q,q,q,q,q,A.ai),q,q,q),q)},
$C:"$3",
$R:3,
$S:269}
C.fqC.prototype={
$0(){var w=this.a
if(w.e!=null&&B.a4(w,!0).pJ())B.a4(w,!0).eL()},
$S:0}
C.fqD.prototype={
$0(){var w=this.a.a
if(w!=null)w.a4(0)
B.a4(this.b,!0).eL()},
$S:0}
C.f7Z.prototype={
$2(d,e){var w,v,u=this,t=null,s=u.a,r=s.d
r===$&&B.c()
r=r.x
r===$&&B.c()
switch(s.a.c.a){case 0:return u.b
case 1:case 13:return new B.an(A.a_,t,A.b0,A.t,B.a([u.c,B.d9(u.b,r)],x.p),t)
case 2:case 17:return new B.an(A.a_,t,A.b0,A.t,B.a([u.c,B.dO(u.b,new B.t((1-r)*220,0))],x.p),t)
case 3:return new B.an(A.a_,t,A.b0,A.t,B.a([u.c,B.dO(u.b,new B.t(-(1-r)*220,0))],x.p),t)
case 4:case 21:return new B.an(A.a_,t,A.b0,A.t,B.a([u.c,B.dO(u.b,new B.t(0,(1-r)*140))],x.p),t)
case 5:return new B.an(A.a_,t,A.b0,A.t,B.a([u.c,B.dO(u.b,new B.t(0,-(1-r)*140))],x.p),t)
case 6:return new B.an(A.a_,t,A.b0,A.t,B.a([u.c,B.eb(A.A,B.d9(u.b,r),0.6+r*0.4,t,t)],x.p),t)
case 7:return new B.an(A.a_,t,A.b0,A.t,B.a([u.c,B.eb(A.A,B.d9(u.b,r),1.3-r*0.3,t,t)],x.p),t)
case 8:s=B.dr()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.001
s.fG(r*3.14159)
return B.fv(A.A,r<0.5?u.c:u.b,t,s,!0)
case 9:s=B.dr()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.001
s.kd(r*3.14159)
return B.fv(A.A,r<0.5?u.c:u.b,t,s,!0)
case 10:s=B.dr()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.002
s.fG(r*1.2)
s.kd(r*0.5)
return B.fv(A.A,B.d9(u.b,0.4+r*0.6),t,s,!0)
case 11:s=B.dr()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.002
s.fG(-r*1.4)
return B.fv(A.a8,B.d9(u.b,r),t,s,!0)
case 12:return new B.an(A.a_,t,A.b0,A.t,B.a([u.c,B.d9(B.eb(A.A,u.b,1.02-r*0.02,t,t),r)],x.p),t)
case 14:return new B.an(A.a_,t,A.b0,A.t,B.a([u.c,B.jF(u.b,A.t,new C.aK0(r,t))],x.p),t)
case 15:return new B.an(A.a_,t,A.b0,A.t,B.a([u.c,B.jF(u.b,A.t,new C.aK0(1-r,t))],x.p),t)
case 16:v=D.b7B.av(0,r)
return new B.an(A.a_,t,A.b0,A.t,B.a([u.c,B.eb(A.A,B.d9(u.b,r),0.5+v*0.5,t,t)],x.p),t)
case 18:s=r<0.15
if(s)r=1
return new B.an(A.a_,t,A.b0,A.t,B.a([u.c,B.d9(B.en(u.b,A.c.j(s?0.9:0),!0),r)],x.p),t)
case 19:s=B.dr()
s.mO(r*6.28)
s.jU(r,r,r,1)
return B.fv(A.A,u.b,t,s,!0)
case 20:return B.eL(A.A,(r-0.5)*0.35,new B.an(A.a_,t,A.b0,A.t,B.a([u.c,B.d9(u.b,r)],x.p),t),t)}},
$S:62}
C.dVH.prototype={
$0(){var w=this.a
if(w.c!=null){w=w.d
w===$&&B.c()
w.cp(0)}},
$S:12}
C.dVG.prototype={
$0(){var w=this.a
if(w.c!=null){w=w.d
w===$&&B.c()
w.cp(0)}},
$S:12}
C.dVF.prototype={
$2(d,e){var w,v=this.a
e.toString
w=v.d
w===$&&B.c()
v=v.a.c.dy
w=w.x
w===$&&B.c()
return C.hr9(v,w,e)},
$S:62}
C.chh.prototype={
$2(d,e){var w,v,u,t,s,r=null,q={}
q.a=0
w=this.a
v=w.c
if(v.f!=null){u=B.b1(v.e)
t=v.f
t.toString
t=new B.a9(A.a4,A.a8,A.x,B.a([u,B.b1(t)],x.O),r,r)
u=t}else u=r
t=v.f==null?B.b1(v.e):r
v=v.z
s=B.U(v).k("N<1,cN>")
q=B.C(new B.N(v,new C.chg(q,w,e.b,e.d),s),s.k("ak.E"))
return B.c1(new B.an(A.a_,r,A.aa,A.f,q,r),new B.o(t,r,r,r,r,u,A.n),A.bg)},
$S:386}
C.chg.prototype={
$1(d){var w,v=this,u=null,t=d.dy!==D.cl?v.a.a++:0,s=d.c,r=v.c,q=d.d,p=v.d,o=d.e,n=d.f,m=d.fy,l=v.b,k=l.d
l=k||l.e
w=A.a.gX(d.a)
return B.ao(u,new C.a7Y(m,new C.Vo(d,C.b1M(!1,u,!1,d,u,!1,u,u,u,r/960,!1,!1),k,t,u),l,w,u),n*p,u,s*r,u,q*p,o*r)},
$S:z+24}
C.d9v.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.d9u(w))},
$S:12}
C.d9u.prototype={
$0(){return this.a.d++},
$S:0}
C.ein.prototype={
$2(d,e){var w,v=null,u=A.o.ao(this.b.e.a,1000),t=A.o.F(Date.now(),u)/u*3.141592653589793*2+this.c,s=this.a
if(D.aPQ.t(0,A.d.gI(s.a.c.split("@")))){s=s.a
w=s.c
s=s.f
e.toString
return C.i9S(w,t,s,e)}switch(s.a.c){case"float3d":s=B.dr()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.0016
w=Math.sin(t)
s.ed(0,w*7,0,1)
s.fG(Math.sin(t)*0.32)
s.kd(Math.cos(t)*0.12)
w=1+Math.sin(t*2)*0.025
s.jU(w,w,w,1)
return B.fv(A.A,e,v,s,!0)
case"drift":s=Math.sin(t)
w=Math.cos(t*0.8)
return B.dO(B.eb(A.A,e,1+Math.sin(t*0.5)*0.05,v,v),new B.t(s*14,w*10))
default:s=Math.sin(t)
return B.d9(B.eb(A.A,e,1+Math.sin(t)*0.04,v,v),0.82+s*0.18)}},
$S:62}
C.eXY.prototype={
$1(d){var w
$.S()
w=B.I()
w.b=A.a9
w.c=d
w.e=A.dS
return w},
$S:1698}
C.fEG.prototype={
$2(d,e){var w,v,u,t,s=this,r=null,q=e.b,p=e.d,o=Math.min(q,p)
if(!s.a)w=s.b.length===0&&s.c.length!==0
else w=!0
v=w?new B.au(o,o):new B.au(q,p)
u=s.b
if(u.length===0)u="rounded"
q=s.c
p=q.length===0
if(p)t=0
else{w=v.gdC()
t=w*(q==="framed"?0.07:0.05)}w=B.a([],x.p)
if(q==="framed"||q==="gold")w.push(B.b4(r,r,r,new C.brI(u,t,r),A.ax))
w.push(B.nC(s.d,A.aq,new C.bfN(u,t,r)))
if(!p)w.push(B.b4(r,r,r,new C.bqH(u,q,t,r),A.ax))
return B.at(new B.a7(v.a,v.b,new B.an(A.a_,r,A.b0,A.t,w,r),r),r,r,r)},
$S:252}
C.ftD.prototype={
$1(d){var w=d.b[1]
return w==null?"":w},
$S:314}
C.ezY.prototype={
$0(){var w=0,v=B.j(x.aP),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(S.D3(t.a.a.c),$async$$0)
case 3:s=e
r=J.a5(s)
if(r.gan(s)){u=null
w=1
break}u=r.dN(s,new C.ezW(),new C.ezX(s))
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1699}
C.ezW.prototype={
$1(d){return d.at==="published"&&d.Q.length!==0},
$S:179}
C.ezX.prototype={
$0(){return J.fq(this.a)},
$S:1701}
C.ewl.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.ewm.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.ewn.prototype={
$0(){var w=this.a
w.d=this.b
w.x=!1},
$S:0}
C.exW.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.exK.prototype={
$1(d){return d.w!=="hati_kiapo_uongozi"},
$S:z+2}
C.exL.prototype={
$1(d){return d.hJ()},
$S:z+81}
C.evJ.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.ez3.prototype={
$0(){this.a.tP()},
$S:0}
C.ezU.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.e=u
w.f=A.o.E(v.b,0,u.r.length-1)
w.r=v.c
w.oo()
w.Ko()},
$S:0}
C.exU.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.e=u
w.f=A.o.E(v.b,0,u.r.length-1)
w.r=v.c
w.oo()
w.Ko()},
$S:0}
C.ezH.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+2}
C.ezI.prototype={
$1(d){return d.b===D.cS},
$S:z+4}
C.ezJ.prototype={
$1(d){return d.a},
$S:z+22}
C.ezK.prototype={
$0(){var w=this.a.r
return new B.as(new B.bb(w,A.b4,A.aO),$.ax())},
$S:238}
C.ezL.prototype={
$0(){return B.k1(!0,null,!0,!0,null,null,!1)},
$S:675}
C.ev7.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+2}
C.ezV.prototype={
$0(){},
$S:0}
C.ex2.prototype={
$0(){var w=this.a
w.e=this.b.hJ()
w.f=0
w.r=null
w.db=!1
A.d.a9(w.ax)
A.d.a9(w.ay)
w.xG()
w.Ko()},
$S:0}
C.ev5.prototype={
$0(){var w=this.a
w.e=null
w.db=!1
w.w=w.r=null
w.xG()},
$S:0}
C.ev6.prototype={
$0(){var w=this.a
w.w=w.r=w.e=null
w.xG()},
$S:0}
C.exp.prototype={
$1(d){return d.a===this.a.a.a},
$S:z+2}
C.exq.prototype={
$0(){var w=this.a
w.e=this.b
w.f=0
w.r=null
w.db=!this.c
A.d.a9(w.ax)
A.d.a9(w.ay)
w.xG()
w.Ko()
w.z="Home"},
$S:0}
C.exr.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.ex1.prototype={
$1(d){var w=null
return B.em(B.a([B.bN(!1,A.UR,w,w,!0,w,w,new C.ex0(d),w,w)],x.p),w,w,w,D.fMo,w,w,w,w,D.fth,w)},
$S:18}
C.ex0.prototype={
$0(){B.a4(this.a,!1).O(null)
return null},
$S:0}
C.ewZ.prototype={
$1(d){var w=null
return B.em(B.a([B.bN(!1,A.UR,w,w,!0,w,w,new C.ewY(d),w,w)],x.p),w,w,w,D.fxk,w,w,w,w,D.fv5,w)},
$S:18}
C.ewY.prototype={
$0(){B.a4(this.a,!1).O(null)
return null},
$S:0}
C.ex_.prototype={
$0(){},
$S:0}
C.ewh.prototype={
$1(d){return this.a.b0M(C.bCJ(d))},
$S:z+7}
C.ewi.prototype={
$1(d){return this.a.afC(C.bCJ(d))},
$S:z+7}
C.ex8.prototype={
$1(d){var w=null,v=x.p,u=B.a([B.at(B.p(w,w,A.f,w,w,new B.o(A.aZ,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bx,D.fMs,A.au,B.d("Chagua aina ya hati",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.bx,new C.PT(A.wb,D.ayz,"HATI YA KUHOWA","Hati ya mahari",new C.ex3(d),w),A.W,new C.PT(A.hh,D.daY,"HATI YA KUHOWESHA","Hati ya kupokea",new C.ex4(d),w),A.W,new C.PT(A.i_,D.cWT,"HATI YA NDOA","Makubaliano \xb7 pete \xb7 picha za wanandoa",new C.ex5(d),w),A.W,new C.PT(A.i0,D.cV_,"MALIPO YA AWAMU YA MAHARI","Makubaliano ya mahari iliyosalia",new C.ex6(d),w)],v)
if(this.a.gac1())A.d.v(u,B.a([A.W,new C.PT(A.je,D.cFX,"HATI YA KIAPO CHA UONGOZI","Kiapo cha Rais \xb7 Civic Registry",new C.ex7(d),w)],v))
return B.bn(!0,B.cd(B.x(u,A.aj,w,A.e,A.Q,0,A.p),A.t,w,A.y,w,E.yf,w,w,A.ah),!0,!1,A.af,!0,!0)},
$S:25}
C.ex3.prototype={
$0(){B.a4(this.a,!1).O("hati_kuhowa")
return null},
$S:0}
C.ex4.prototype={
$0(){B.a4(this.a,!1).O("hati_kuhoweya")
return null},
$S:0}
C.ex5.prototype={
$0(){B.a4(this.a,!1).O("marriage_agreement")
return null},
$S:0}
C.ex6.prototype={
$0(){B.a4(this.a,!1).O("hati_malipo_awamu")
return null},
$S:0}
C.ex7.prototype={
$0(){B.a4(this.a,!1).O("hati_kiapo_uongozi")
return null},
$S:0}
C.ex9.prototype={
$0(){var w=this.a
w.e=this.b.hJ()
w.f=0
w.r=null
w.db=!0
A.d.a9(w.ax)
A.d.a9(w.ay)
w.xG()},
$S:0}
C.ev9.prototype={
$1(d){return d.z.length===0},
$S:z+6}
C.eva.prototype={
$0(){var w,v,u=this,t=u.c,s=u.d,r=t.r,q=s.r
if(u.b){A.d.a9(r)
A.d.v(r,q)
w=A.a.i(t.b).toLowerCase()
if(w.length===0||A.a.a0(w,"untitled"))t.b=s.b
r=u.a
r.f=0}else{v=u.a
A.d.nl(r,v.f+1,q);++v.f
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
C.exk.prototype={
$1(d){return d.b===D.lK},
$S:z+4}
C.exl.prototype={
$1(d){var w={},v=this.b
w.a=A.d.gI(v).go
w.b=A.d.gI(v).id
return new B.dY(new C.exi(w,this.a,v),null)},
$S:20}
C.exi.prototype={
$2(a2,a3){var w,v,u,t,s,r,q=null,p=this.a,o=this.b,n=this.c,m=new C.exj(p,o,a3,n),l=B.P(a2).ax.a===A.I,k=l?A.c:A.M,j=l?A.aR:A.al,i=l?A.bo:A.bN,h=l?A.M:A.c,g=B.m(28),f=B.J(l?A.bz:A.aL,A.r,1),e=x.p,d=B.B(B.a([B.E(B.x(B.a([B.d("Logo and pictures",q,q,q,q,q,q,B.l(q,q,k,q,q,q,q,q,q,q,q,20,q,q,A.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),A.bA,B.d("Tap a shape or a ring to change it.",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,12.5,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],e),A.E,q,A.e,A.j,0,A.p),1),B.aJ(q,q,q,q,B.X(A.cx,j,q,q,q,q),q,q,q,new C.exe(a2),q,q,q,q,q,q)],e),A.m,q,A.e,A.j,0,q,q),a0=B.d("SHAPE",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q),a1=B.a([],e)
for(w=0;w<7;++w){v={}
u=D.CF[w]
v.a=null
t=v.a=u.a
a1.push(new C.bij(t,u.b,p.a===t,i,k,new C.exf(v,m),q))}a1=B.bW(A.bE,a1,A.bq,q,10,10)
v=B.d("RING",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q)
u=B.a([],e)
for(w=0;w<11;++w){s={}
r=D.CA[w]
s.a=null
t=s.a=r.a
u.push(new C.bii(t,r.b,p.b===t,k,j,new C.exg(s,m),q))}return B.bn(!0,B.p(q,B.cd(B.x(B.a([d,A.aM,a0,A.W,a1,A.bx,v,A.W,B.bW(A.bE,u,A.bq,q,12,12),A.bx,new B.a7(1/0,48,B.et(D.bYu,D.fOT,new C.exh(o,n),B.dg(q,q,q,q,q,q,q,q,q,A.aC,q,q,q,q,new B.b7(B.m(16),A.a0),D.b1F,q,q,q,q)),q)],e),A.E,q,A.e,A.Q,0,A.p),A.t,q,A.y,q,q,q,q,A.ah),A.f,q,q,new B.o(h,q,f,g,q,q,A.n),q,q,q,A.u_,D.bzu,q,q,q),!0,!1,A.af,!0,!0)},
$S:87}
C.exj.prototype={
$2$f$r(d,e){var w=this
w.c.$1(new C.exc(w.a,d,e))
w.b.d7(new C.exd(w.d,d,e))},
$0(){return this.$2$f$r(null,null)},
$1$r(d){return this.$2$f$r(null,d)},
$1$f(d){return this.$2$f$r(d,null)},
$S:1704}
C.exc.prototype={
$0(){var w=this,v=w.b
if(v!=null)w.a.a=v
v=w.c
if(v!=null)w.a.b=v},
$S:0}
C.exd.prototype={
$0(){var w,v,u,t,s,r,q,p
for(w=this.a,v=w.length,u=this.c,t=u!=null,s=this.b,r=s!=null,q=0;q<v;++q){p=w[q]
if(r)p.go=s
if(t)p.id=u}},
$S:0}
C.exe.prototype={
$0(){B.a4(this.a,!1).O(null)
return null},
$S:0}
C.exf.prototype={
$0(){return this.b.$1$f(this.a.a)},
$S:0}
C.exg.prototype={
$0(){return this.b.$1$r(this.a.a)},
$S:0}
C.exh.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A5.GV(78,1920),$async$$0)
case 3:s=e
if(s==null){w=1
break}t.a.d7(new C.exb(t.b,s))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.exb.prototype={
$0(){var w,v,u,t
for(w=this.a,v=w.length,u=this.b,t=0;t<v;++t)w[t].at=u},
$S:0}
C.exn.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+6}
C.exo.prototype={
$0(){var w,v,u,t=this,s=t.a
if(s.a<0)s.a=t.c.r.length
w=t.c
v=w.r
A.d.bu(v,new C.exm(t.d))
u=A.o.E(s.a,0,v.length)
s.a=u
s=t.e
A.d.nl(v,u,s.r)
w.CW=s.CW
w.cx=s.cx
w.cy=s.cy
w.ay=s.ay
s=t.b
s.f=A.o.E(s.f,0,v.length-1)
s.r=null
s.xG()},
$S:0}
C.exm.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+6}
C.exF.prototype={
$1(d){return d.b===D.cS},
$S:z+4}
C.exG.prototype={
$1(d){return d.w},
$S:z+82}
C.exH.prototype={
$2(d,e){return d>e?d:e},
$S:77}
C.exI.prototype={
$1(d){var w=this,v=null,u=B.P(d).ax.a===A.I,t=u?A.c:A.M,s=u?A.aR:A.al,r=u?A.bo:A.aP,q=u?A.M:A.c,p=B.m(28),o=B.J(u?A.bz:A.aL,A.r,1),n=B.aI(d,A.bX,x.w).w,m=w.a,l=x.p,k=w.b
return B.bn(!0,B.p(v,B.x(B.a([B.B(B.a([B.p(v,D.bS6,A.f,v,v,D.b31,v,38,v,v,v,v,v,38),A.bc,B.E(B.x(B.a([B.d("Edit this slide",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,19,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.d("Slide "+(m.f+1)+" \xb7 changes save as you type",v,v,v,v,v,v,B.l(v,v,s,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],l),A.E,v,A.e,A.j,0,A.p),1),B.aJ(v,v,v,v,B.X(A.cx,s,v,v,v,v),v,v,v,new C.exC(d),v,v,v,v,v,v)],l),A.m,v,A.e,A.j,0,v,v),A.aA,new B.ds(1,A.cn,B.hO(v,new C.exD(m,k,w.c,s,w.d,t,r),k.length,A.fx,v,A.ah,new C.exE(),!0),v)],l),A.E,v,A.e,A.Q,0,A.p),A.f,v,new B.aZ(0,1/0,0,n.a.b*0.8),new B.o(q,v,o,p,v,v,A.n),v,v,v,A.u_,A.a_7,v,v,v),!0,!1,A.af,!0,!0)},
$S:25}
C.exC.prototype={
$0(){B.a4(this.a,!1).O(null)
return null},
$S:0}
C.exE.prototype={
$2(d,e){return A.ad},
$S:36}
C.exD.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=null,p=r.b[e],o=p.w===r.c,n=o?"TITLE":"TEXT "+(e+1)
n=B.d(n,q,q,q,q,q,q,B.l(q,q,o?A.aC:r.d,q,q,q,q,q,q,q,q,10.5,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q)
w=r.e
v=w.h(0,p.a)
u=o?1:2
t=o?A.H:A.cw
t=B.l(q,q,r.f,q,q,q,q,q,q,q,q,15,q,q,t,q,q,!0,q,q,q,q,q,q,q,q)
s=r.a
w=B.aJ(q,q,q,q,D.bVi,q,q,q,new C.exA(s,w,p),q,q,q,q,"Add an icon",q)
return B.x(B.a([new B.D(D.bBK,n,q),B.aN(q,A.Z,!1,q,!0,A.t,q,B.aO(),v,q,q,q,q,q,2,B.bv(q,new B.b5(4,B.m(16),A.a0),q,A.eQ,q,q,q,q,!0,q,q,q,q,q,q,r.r,!0,q,q,q,q,new B.b5(4,B.m(16),D.b1k),q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,!0,!0,!1,q,q,q,q,q,q,q,q,w,q,q,q,q,q),A.y,!0,q,!0,q,!1,q,A.ak,q,q,q,q,q,q,q,q,q,q,u,q,!1,"\u2022",q,new C.exB(s,p),q,q,q,!1,q,q,!1,q,!0,q,A.ab,q,q,q,q,q,q,q,q,q,q,q,t,!0,A.a3,q,A.ao,q,q,q,q)],x.p),A.E,q,A.e,A.j,0,A.p)},
$S:676}
C.exA.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=t.a
k=l.c
k.toString
w=3
return B.b(C.ifI(k),$async$$0)
case 3:s=e
if(s==null||l.c==null){w=1
break}k=t.c.a
r=t.b.h(0,k)
q=r.a
p=q.b
o=p.geK()?p.a:q.a.length
n=p.geK()?p.b:q.a.length
m=A.a.oT(q.a,o,n,s)
r.bP(0,new B.bb(m,B.hk(A.bw,o+s.length),A.aO))
l.ajD(k,m)
l.pv()
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.exB.prototype={
$1(d){var w=this.a
w.ajD(this.b.a,d)
w.pv()},
$S:2}
C.exJ.prototype={
$0(){},
$S:0}
C.exa.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.db=u.length===0?null:u
w.dx=v.b
w.dy=v.c
v=v.d
w.fr=v.length===0?null:v},
$S:0}
C.evq.prototype={
$0(){},
$S:0}
C.evr.prototype={
$0(){var w=this.c.CW
if(w==null)w=""
C.hst(this.b,w,!0)
w=this.a
w.r=null
w.xG()},
$S:0}
C.evs.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+6}
C.evt.prototype={
$0(){var w,v,u,t=this,s=t.a
if(s.a<0)s.a=t.c.r.length
w=t.c
v=w.r
A.d.bu(v,new C.evp(t.d))
u=A.o.E(s.a,0,v.length)
s.a=u
s=t.e
A.d.nl(v,u,s.r)
w.CW=s.CW
w.cx=s.cx
s=t.b
s.f=A.o.E(s.f,0,v.length-1)
s.r=null
s.xG()},
$S:0}
C.evp.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+6}
C.exP.prototype={
$1(d){return B.oZ(new C.exO(this.a,d),!1,0.82,0.95,0.45,!1,null)},
$S:137}
C.exO.prototype={
$2(d,e){var w=null,v=x.p
return B.x(B.a([new B.D(E.aku,B.x(B.a([D.fJX,A.am,B.d("Top 4 templates are free \xb7 lock icon means Slides Pro",w,w,w,w,w,w,B.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],v),A.E,w,A.e,A.j,0,A.p),w),B.E(B.iy(!0,w,e,A.y,D.f5p,new C.exN(this.a,this.b),20,A.u2,w,A.ah,!1),1)],v),A.aj,w,A.e,A.j,0,A.p)},
$S:385}
C.exN.prototype={
$2(d,e){var w=null,v=D.HE[e],u=C.hLj(v),t=B.m(16),s=B.m(16),r=B.a([v.e,v.f],x.O),q=v.d,p=B.J(q.j(0.45),A.r,1),o=q.j(0.2),n=B.m(8),m=x.p
n=B.a([B.p(w,B.d(v.c,w,w,w,w,w,w,B.l(w,w,q,w,w,w,w,w,w,w,w,9,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.f,w,w,new B.o(o,w,w,n,w,w,A.n),w,w,w,w,A.fM,w,w,w)],m)
if(u)A.d.v(n,B.a([A.bn,B.p(w,D.f__,A.f,w,w,new B.o(A.dH.j(0.85),w,w,B.m(8),w,w,A.n),w,w,w,w,A.mG,w,w,w)],m))
return B.aG(!1,A.a1,!0,w,B.aM(!1,t,!0,B.p(w,B.x(B.a([B.B(n,A.m,w,A.e,A.j,0,w,w),A.b2,B.d(v.b,w,w,w,w,w,w,B.l(w,w,v.r,w,w,w,w,w,w,w,w,14,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.d("5 slides",w,w,w,w,w,w,B.l(w,w,v.w.j(0.8),w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],m),A.E,w,A.e,A.j,0,A.p),A.f,w,w,new B.o(w,w,p,s,w,new B.a9(A.a4,A.a8,A.x,r,w,w),A.n),w,w,w,w,A.bf,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.exM(this.a,u,this.b,v),w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ai)},
$S:79}
C.exM.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=t.b?3:4
break
case 3:s=t.c
r=t.a.a
w=5
return B.b(C.chz(s,r.c,r.d),$async$$0)
case 5:if(!e||s.e==null){w=1
break}case 4:s=t.c
if(s.e!=null)B.a4(s,!1).O(t.d.a)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.exQ.prototype={
$0(){var w=this.a
w.e=this.b.hJ()
w.f=0
w.r=null
w.db=!0
A.d.a9(w.ax)
A.d.a9(w.ay)
w.xG()},
$S:0}
C.eu4.prototype={
$0(){var w,v=this.a,u=v.gqD(),t=C.rF(4294967295,null,0,0,null,C.cE(),D.mR,"","","",D.dh),s=this.b
C.chM(t,s,u)
w=v.gdw()
if(w!=null&&s!==D.Dg){t.e=w.e
t.f=w.f}A.d.c8(v.e.r,v.f+1,t);++v.f
v.r=null},
$S:0}
C.evo.prototype={
$0(){var w,v,u,t,s,r,q=this.b.ag()
q.n(0,"id",C.cE())
w=x.c.a(q.h(0,"elements"))
if(w!=null)for(v=J.aV(w),u=x.f;v.C();){t=v.gR(v)
if(u.b(t)){s=Date.now()
r=$.j3
$.j3=r+1
J.aH(t,"id",""+1000*s+"_"+r)}}v=this.a
A.d.c8(v.e.r,v.f+1,C.hfu(q));++v.f},
$S:0}
C.evm.prototype={
$0(){var w=this.a
A.d.cG(w.e.r,w.f)
w.f=A.o.E(w.f,0,w.e.r.length-1)
w.r=null},
$S:0}
C.exY.prototype={
$0(){var w,v=this.a,u=this.b,t=A.d.cG(v.e.r,u),s=this.c
A.d.c8(v.e.r,s,t)
w=v.f
if(w===u)v.f=s
else if(u<w&&s>=w)v.f=w-1
else if(u>w&&s<=w)v.f=w+1},
$S:0}
C.evi.prototype={
$0(){var w,v=this.a,u=this.b
A.d.bu(v.d,new C.evh(u))
w=v.e
w=w==null?null:w.a
if(w===u.a){v.e=null
v.db=!1}},
$S:0}
C.evh.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.exX.prototype={
$0(){var w,v=this.b,u=A.a.i(this.c)
v.b=u.length===0?"Untitled Presentation":u
v.f=new B.V(Date.now(),0,!1)
u=this.a.e
w=u==null?null:u.a
if(w===v.a)u.b=v.b},
$S:0}
C.ev8.prototype={
$0(){var w=this.a.r
return new B.as(new B.bb(w,A.b4,A.aO),$.ax())},
$S:238}
C.evK.prototype={
$0(){return B.k1(!0,null,!0,!0,null,null,!1)},
$S:675}
C.ezF.prototype={
$0(){var w=this.a
w.w=w.r=this.b
w.y=!1},
$S:0}
C.ezG.prototype={
$1(d){var w,v,u=this.a
if(u.c==null||u.w!==this.b)return
w=this.c
u.au4(w).fP()
v=u.X1(w)
v.stz(B.hk(A.bw,v.a.a.length))},
$S:9}
C.ez4.prototype={
$0(){var w,v,u,t=this
if(t.b)t.a.w=null
w=t.a
v=w.r=t.c
if(v!=null){w.as=!0
u=w.Y0(v)
if(u!=null&&u.b===D.cS)w.X1(u).saX(0,u.r)}else w.w=null},
$S:0}
C.eu5.prototype={
$0(){var w=C.cE(),v=this.a,u=C.es(A.bi,!1,v.gqD().e.l(),A.aF,"",4280640491,24,A.bp,A.a7,"",0.22,w,null,"","",0,!1,"",0,D.bh,4280172719,2,"Tap to edit text",0,0,"",D.cl,D.cS,0.7,0.15,0.2)
A.d.M(v.gdw().z,u)
v.r=u.a},
$S:0}
C.eu2.prototype={
$0(){var w=C.cE(),v=this.a,u=C.es(A.bi,!1,4279310375,A.aF,"",v.gqD().c.j(0.25).l(),24,A.bp,A.a7,"",0.25,w,null,"","",0,!1,"",0,this.b,v.gqD().c.l(),2,"",0,0,"",D.cl,D.f8,0.25,0.3,0.3)
A.d.M(v.gdw().z,u)
v.r=u.a},
$S:0}
C.etT.prototype={
$0(){var w=C.es(A.bi,!1,4279310375,A.aF,"",4280640491,24,A.bp,A.a7,"",0.55,C.cE(),this.b,"","",0,!1,"",0,D.bh,4280172719,2,"",0,0,"",D.cl,D.lK,0.6,0.2,0.18),v=this.a
A.d.M(v.gdw().z,w)
v.r=w.a},
$S:0}
C.etQ.prototype={
$1(d){var w,v,u,t,s,r=null,q=B.a([D.c4s],x.p)
for(w=J.aV(this.a);w.C();){v=w.gR(w)
u=A.a.i(v.b)
if(u.length===0)u="My Bio"
t=v.gakg().length
s=v.at==="published"&&v.Q.length!==0?" \xb7 "+v.as:""
q.push(B.dL(!1,r,r,r,!0,r,r,r,!0,r,D.bPN,r,r,r,r,new C.etP(d,v),!1,r,r,r,r,r,new B.y(""+t+" links"+s,r,r,r,r,r,r,A.a2,r,1,r,r),r,new B.y(u,r,r,r,r,r,r,r,r,r,r,r),r,r,r))}return B.bn(!0,B.ct(q,r,r,r,r,A.ah,!0),!0,!1,A.af,!0,!0)},
$S:25}
C.etP.prototype={
$0(){B.a4(this.a,!1).O(this.b)
return null},
$S:0}
C.etR.prototype={
$0(){var w=A.k.E(0.23131034482758622,0.12,0.5),v=C.cE(),u=this.b,t=A.X.ap(u.ag(),null),s=C.es(A.bi,!1,4279310375,A.aF,u.b,4280640491,24,A.bp,A.a7,"",0.86,v,null,"","",0,!1,"",0,D.bh,4280172719,2,t,0,0,"",D.cl,D.a6v,w,0.5-w/2,0.07)
t=this.a
A.d.M(t.gdw().z,s)
t.r=s.a},
$S:0}
C.evk.prototype={
$1(d){return d.a===this.a&&d.db==="ngmy_quote_logo"},
$S:z+4}
C.evl.prototype={
$0(){var w,v=this.a,u=this.b
A.d.bu(v.gdw().z,new C.evj(u))
v.w=v.r=null
w=v.ch.W(0,u)
if(w!=null){w.S$=$.ax()
w.P$=0}v=v.CW.W(0,u)
if(v!=null)v.q()},
$S:0}
C.evj.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.eux.prototype={
$0(){var w,v,u,t=this,s=t.b
if(s!=null){w=s.b
if(w===D.cS)s.Q=t.c.l()
else if(w===D.f8){s.ay=t.c.l()
w=t.d
if(w!=null)s.ch=w.l()}return}v=new C.euy(t.c,t.d)
if(t.a.Q)for(s=t.e.r,w=s.length,u=0;u<s.length;s.length===w||(0,B.M)(s),++u)v.$1(s[u])
else{s=t.f
if(s!=null)v.$1(s)}},
$S:0}
C.euy.prototype={
$1(d){var w
d.e=this.a.l()
w=this.b
d.f=w==null?null:w.l()},
$S:z+1}
C.euC.prototype={
$0(){var w,v,u,t,s=this.a,r=s.e
r.toString
w=this.b
v=new C.euD(w)
if(s.Q){r.c=w.a
for(s=r.r,r=s.length,u=0;u<s.length;s.length===r||(0,B.M)(s),++u)v.$1(s[u])}else{t=s.gdw()
if(t!=null)v.$1(t)}},
$S:0}
C.euD.prototype={
$1(d){var w=this.a
d.e=w.f.l()
w=w.r
d.f=w==null?null:w.l()},
$S:z+1}
C.euA.prototype={
$0(){var w,v,u,t=this,s=t.b
if(s!=null&&s.b===D.cS){s.Q=t.c
return}w=new C.euB(t.c)
if(t.a.Q)for(s=t.d.r,v=s.length,u=0;u<s.length;s.length===v||(0,B.M)(s),++u)w.$1(s[u])
else{s=t.e
if(s!=null)w.$1(s)}},
$S:0}
C.euB.prototype={
$1(d){var w,v,u
for(w=A.d.gaf(d.z),v=new B.f5(w,new C.euz()),u=this.a;v.C();)w.gR(0).Q=u},
$S:z+1}
C.euz.prototype={
$1(d){return d.b===D.cS},
$S:z+4}
C.euw.prototype={
$0(){return C.chM(this.b,this.c,this.a.gqD())},
$S:0}
C.exz.prototype={
$0(){return A.d.c8(this.a.d,0,this.b)},
$S:0}
C.ezO.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.ezP.prototype={
$1(d){return d.w===this.b&&d.a!==this.a.a.a},
$S:z+2}
C.ezQ.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.ezR.prototype={
$0(){var w,v=this.a,u=v.c,t=this.b,s=t.d
if(u)A.d.c8(s,0,v.b)
else{w=A.d.bg(s,new C.ezN(v))
if(w>=0)t.d[w]=v.b}if(v.a.gSF()){u=v.b
u.Q=v.a.Q
u.z=!0}if(this.c===!0){t.e=v.b.hJ()
t.f=0
t.r=null
t.db=!1
A.d.a9(t.ax)
A.d.a9(t.ay)
t.xG()
t.Ko()}},
$S:0}
C.ezN.prototype={
$1(d){return d.a===this.a.b.a},
$S:z+2}
C.ezk.prototype={
$1(d){var w=this,v=null,u=w.a,t=u.ac5(),s=w.b,r=u.ac6(A.fe,A.kh,"Copy filled names, date, mahari, witnesses, and signatures into "+s+".","Transfer details"),q=B.m(18),p=B.a([A.c.j(0.07),A.c.j(0.03)],x.O),o=B.J(A.c.j(0.08),A.r,1),n=x.p
p=B.a([t,A.O,r,A.bx,B.p(v,B.B(B.a([B.E(u.aVK(w.c,A.al),1),new B.D(A.fy,B.p(v,D.bPT,A.f,v,v,new B.o(A.fe.j(0.18),v,v,v,v,v,A.a6),v,34,v,v,v,v,v,34),v),B.E(u.aVK(s,A.fe),1)],n),A.m,v,A.e,A.j,0,v,v),A.f,v,v,new B.o(v,v,o,q,v,new B.a9(A.az,A.aE,A.x,p,v,v),A.n),v,v,v,v,A.bF,v,v,v),A.bx,u.aVN(A.fe,d,D.bM2,!0,"Make a fresh "+s+" and fill it automatically","Create new & transfer","new")],n)
t=w.d
if(t>0)A.d.v(p,B.a([A.W,u.bZ6(A.aQ,d,A.uh,t===1?"Update your saved "+s:"Choose among "+t+" saved documents","Use existing","existing")],n))
p.push(A.aA)
p.push(u.aVL(d,"Not now"))
return new C.Kb(B.x(p,A.aj,v,A.e,A.Q,0,A.p),v)},
$S:z+9}
C.ezj.prototype={
$1(d){var w=null,v=this.a,u=this.c
return new C.Kb(B.x(B.a([v.ac5(),A.O,v.ac6(A.aQ,D.bLI,"Pick which saved document should receive the details.","Choose "+this.b),A.aM,new B.cT(new B.aZ(0,1/0,0,B.aI(d,A.bX,x.w).w.a.b*0.42),B.hO(w,new C.ezh(v,u,d),u.length,w,w,A.ah,new C.ezi(),!0),w),A.aA,v.aVL(d,"Cancel")],x.p),A.aj,w,A.e,A.Q,0,A.p),w)},
$S:z+9}
C.ezi.prototype={
$2(d,e){return A.W},
$S:36}
C.ezh.prototype={
$2(d,e){var w=null,v=this.b[e],u=B.m(16),t=A.c.j(0.05),s=B.m(16),r=B.J(A.c.j(0.08),A.r,1),q=x.p
return B.aG(!1,A.a1,!0,w,B.aM(!1,u,!0,B.p(w,B.B(B.a([B.p(w,D.apj,A.f,w,w,new B.o(w,w,w,B.m(12),w,D.c1p,A.n),w,42,w,w,w,w,w,42),A.bc,B.E(B.x(B.a([B.d(v.b,w,1,A.a2,w,w,w,A.nG,w,w,w),A.cL,B.d("Updated "+this.a.Qg(v.f),w,w,w,w,w,w,B.l(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,12,w,w,A.a7,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],q),A.E,w,A.e,A.j,0,A.p),1),B.X(A.eE,A.c.j(0.35),w,w,w,w)],q),A.m,w,A.e,A.j,0,w,w),A.f,w,w,new B.o(t,w,r,s,w,w,A.n),w,w,w,w,A.bF,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.ezg(this.c,v),w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ai)},
$S:79}
C.ezg.prototype={
$0(){B.a4(this.a,!1).O(this.b.a)
return null},
$S:0}
C.ezd.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.ac5()
t=t.ac6(A.aD,A.ur,"Names and shared details from \u201c"+this.b+"\u201d will fill matching spots on \u201c"+this.c+"\u201d.","Replace matching fields?")
w=A.c.j(0.14)
v=x.p
return new C.Kb(B.x(B.a([s,A.O,t,A.bx,B.B(B.a([B.E(B.dS(A.a9S,new C.ezb(d),B.dg(u,u,u,u,u,u,u,u,u,A.c,u,u,A.cj,u,new B.b7(B.m(14),A.a0),new B.ay(w,1,A.r,-1),u,u,u,u)),1),A.as,B.E(B.bI(D.fvF,new C.ezc(d),B.bp(A.fe,u,u,u,A.c,u,A.cj,u,new B.b7(B.m(14),A.a0),u,u,u)),1)],v),A.m,u,A.e,A.j,0,u,u)],v),A.aj,u,A.e,A.Q,0,A.p),u)},
$S:z+9}
C.ezb.prototype={
$0(){B.a4(this.a,!1).O(!1)
return null},
$S:0}
C.ezc.prototype={
$0(){B.a4(this.a,!1).O(!0)
return null},
$S:0}
C.ezf.prototype={
$1(d){var w=this,v=null,u=w.a,t=u.ac5(),s=w.b,r=u.ac6(A.aV,A.ec,"Everything that could be matched is now on "+s+".","Transfer complete"),q=x.p,p=B.B(B.a([B.E(u.avp("Names",""+w.c),1),A.ac,B.E(u.avp("Fields",""+w.d),1),A.ac,B.E(u.avp("Signatures",""+w.e),1)],q),A.m,v,A.e,A.j,0,v,v),o=B.bp(A.bk,v,v,v,A.c,v,A.y4,v,new B.b7(B.m(14),A.a0),v,v,v)
return new C.Kb(B.x(B.a([t,A.O,r,A.aM,p,A.bx,B.bI(B.d("Open "+s,v,v,v,v,v,v,A.nD,v,v,v),new C.eze(d),o),A.W,u.aVM(d,"Stay here",!1)],q),A.aj,v,A.e,A.Q,0,A.p),v)},
$S:z+9}
C.eze.prototype={
$0(){B.a4(this.a,!1).O(!0)
return null},
$S:0}
C.ewd.prototype={
$0(){B.a4(this.a,!1).O(this.b)
return null},
$S:0}
C.ewc.prototype={
$0(){B.a4(this.a,!1).O(this.b)
return null},
$S:0}
C.ez5.prototype={
$1(d){return d.b===D.cS},
$S:z+4}
C.ezE.prototype={
$1(d){var w=this.a,v=this.b
return new C.a_P(A.d.dN(w.d,new C.ezC(v),new C.ezD(v)).hJ(),w.f,null)},
$S:z+84}
C.ezC.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.ezD.prototype={
$0(){return this.a},
$S:z+85}
C.etY.prototype={
$1(d){var w=null,v=this.b,u=""+v,t=v===1?"":"s"
t=B.a([new B.D(A.bF,B.d("Import "+this.a.c+" ("+u+" page"+t+")",w,w,w,w,w,w,A.fQ,w,w,w),w),B.dL(!1,w,w,w,!0,w,w,w,!0,w,D.bRF,w,w,w,w,new C.etW(d),!1,w,w,w,w,w,B.d("Scroll through all "+u+" pages inside the slide",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,D.ftG,w,w,w)],x.p)
if(v>1)t.push(B.dL(!1,w,w,w,!0,w,w,w,!0,w,D.bSS,w,w,w,w,new C.etX(d),!1,w,w,w,w,w,D.fQ7,w,B.d("One slide per page ("+u+" slides)",w,w,w,w,w,w,A.df,w,w,w),w,w,w))
return B.bn(!0,B.x(t,A.m,w,A.e,A.Q,0,A.p),!0,!1,A.af,!0,!0)},
$S:25}
C.etW.prototype={
$0(){B.a4(this.a,!1).O("scroll")
return null},
$S:0}
C.etX.prototype={
$0(){B.a4(this.a,!1).O("split")
return null},
$S:0}
C.etZ.prototype={
$0(){var w=this.b,v=w.c,u=C.es(A.bi,!1,4279310375,A.aF,v,4280640491,24,A.bp,A.a7,"",0.84,C.cE(),w.b,"","",0,!1,"",0,D.bh,4280172719,2,v,0,0,"",D.cl,D.SC,0.88,0.06,0.08)
v=this.a
A.d.M(v.gdw().z,u)
v.r=u.a},
$S:0}
C.eu_.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this.a,i=j.f+1
for(w=this.b,v=this.c,u=v.b,t=w,v=v.c,s=x.u,r=v+" \u2014 page ",q=1;q<=w;++q){p=Date.now()
o=$.j3
$.j3=o+1
n=""+q
m=B.a([],s)
l=Date.now()
k=$.j3
$.j3=k+1
m.push(new C.eN(""+1000*l+"_"+k,D.SC,0.04,0.06,0.92,0.88,v,24,A.a7,A.bp,A.aF,4279310375,A.bi,u,D.bh,4280640491,4280172719,2,0,!1,n+" / "+t,q,D.cl,0,"","","","","",!1,0))
A.d.c8(j.e.r,i+q-1,new C.lR(""+1000*p+"_"+o,r+n,"",D.qw,4294967295,null,D.dh,0,"",0,m))}j.f=i
j.r=null},
$S:0}
C.eu3.prototype={
$0(){var w,v=C.cE(),u=this.a,t=u.e
t=(t==null?null:C.kE(t.w))===!0?"marriage_sign_placed":"Signature"
w=C.es(A.bi,!1,4279310375,A.aF,t,4280640491,24,A.bp,A.a7,"",0.22,v,this.b.a,"","",0,!1,"",0,D.bh,4280172719,2,"",0,0,"",D.cl,D.lf,0.35,0.55,0.62)
A.d.M(u.gdw().z,w)
u.r=w.a},
$S:0}
C.etV.prototype={
$0(){var w,v,u,t,s,r,q,p=this.a,o=this.b
p.b3u(o)
w=C.cE()
v=this.c
u=v.c
t=v.d
s=v.e
r=v.f
q=C.es(A.bi,!1,4279310375,A.aF,"marriage_sign_placed_"+A.a.el(v.db,"marriage_sign_",""),4280640491,24,A.bp,A.a7,"",r,w,o.a,"","",0,!1,"",0,D.bh,4280172719,2,"",0,0,"",D.cl,D.lf,s,u,t)
A.d.M(p.gdw().z,q)
A.d.bu(p.gdw().z,new C.etU(v))
p.r=null
p=p.e
if((p==null?null:p.w)==="hati_kiapo_uongozi"&&A.a.t(v.db,"rais")){p.toString
C.i9B(p)}},
$S:0}
C.etU.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.exV.prototype={
$0(){var w=this.a,v=this.b
w.b3u(v)
this.c.at=v.a
w.r=null},
$S:0}
C.ezM.prototype={
$0(){var w,v,u,t,s,r,q=4279673674,p=1483594
for(w=this.b.z,v=w.length,u=this.c,t=0;t<v;++t){s=w[t]
r=s.db
if(r==="marriage_locked_nim_akuna_deni"){s.r="AKUNA DENI"
s.Q=u?q:p}else if(r==="marriage_locked_nim_akuna_box")s.ch=u?q:p
else if(r==="marriage_locked_nim_akuna_tick"){s.r="\u2713"
s.Q=u?q:p}}this.a.r=null},
$S:0}
C.ewg.prototype={
$0(){var w,v,u,t,s,r=this.b
A.d.bu(r.z,new C.ewf())
for(r=r.z,w=r.length,v=this.c+0.001,u=0;u<w;++u){t=r[u]
s=t.d
if(s>v)t.d=s-0.043}this.a.r=null},
$S:0}
C.ewf.prototype={
$1(d){var w=d.db
return w==="marriage_locked_nim_n_4"||w==="marriage_locked_nim_ul_4"||A.a.a0(w,"marriage_field_mahari_4:")},
$S:z+4}
C.euG.prototype={
$0(){var w=this.b
w.at=this.c
w.db="__kiapo_video__"
w=this.a
w.r=null
w.db=!1},
$S:0}
C.euH.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.tP()},
$S:9}
C.etS.prototype={
$0(){var w=C.es(A.bi,!1,4279310375,A.aF,"HD Photo",4280640491,24,A.bp,A.a7,"",0.8,C.cE(),this.b,"","",0,!1,"",0,D.bh,4280172719,2,"",0,0,"",D.cl,D.lK,0.8,0.1,0.1),v=this.a
A.d.M(v.gdw().z,w)
v.r=w.a},
$S:0}
C.evI.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.eu0.prototype={
$0(){var w=this.a,v=this.b
A.d.M(w.gdw().z,v)
w.r=v.a},
$S:0}
C.eu9.prototype={
$0(){return this.a.cx+=0.785398},
$S:0}
C.eua.prototype={
$0(){var w=this.b.hJ(),v=C.cE(),u=A.k.E(w.c+0.04,0,0.92),t=A.k.E(w.d+0.04,0,0.92),s=w.e,r=w.f,q=w.r,p=w.w,o=w.x,n=w.y,m=w.z,l=w.Q,k=w.as,j=w.at,i=w.ay,h=w.ch,g=w.cx,f=C.es(k,w.cy,l,m,w.db,i,p,n,o,"",r,v,j,"","",w.dx,!1,"",g,w.ax,h,w.CW,q,w.fr,0,"",w.dy,w.b,s,u,t)
t=this.a
A.d.M(t.gdw().z,f)
t.r=f.a},
$S:0}
C.eub.prototype={
$0(){var w=this.a.gdw().z,v=this.b,u=A.d.bg(w,new C.eu8(v))
if(u>=0&&u<w.length-1){A.d.cG(w,u)
A.d.c8(w,u+1,v)}},
$S:0}
C.eu8.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.eum.prototype={
$0(){var w=this.a.gdw().z,v=this.b,u=A.d.bg(w,new C.eu7(v))
if(u>0){A.d.cG(w,u)
A.d.c8(w,u-1,v)}},
$S:0}
C.eu7.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.eup.prototype={
$0(){return this.a.as=A.bi},
$S:0}
C.euq.prototype={
$0(){return this.a.as=A.L},
$S:0}
C.eur.prototype={
$0(){return this.a.as=A.dU},
$S:0}
C.eus.prototype={
$0(){return this.a.cx+=3.14159},
$S:0}
C.eut.prototype={
$0(){return this.a.cx-=3.14159},
$S:0}
C.euu.prototype={
$1(d){return d.b===D.cS},
$S:z+4}
C.euv.prototype={
$1(d){return d.length!==0},
$S:3}
C.euc.prototype={
$0(){var w=this.a,v=w.gdw().z,u=C.cE()
A.d.M(v,C.D8(w.gqD().c.j(0.18).l(),0.1,u,D.bh,0,2,1,0,0))
u=w.gdw().z
v=C.cE()
A.d.M(u,C.iY(A.bi,!1,w.gqD().d.l(),A.aF,18,A.bp,A.H,0.07,v,"Document Header",0,D.dh,0.9,0.05,0.02))},
$S:0}
C.eud.prototype={
$0(){var w,v=this.a,u=v.gdw().z,t=C.cE()
A.d.M(u,C.D8(v.gqD().c.j(0.12).l(),0.1,t,D.bh,0,2,1,0,0.9))
t=v.gdw().z
u=C.cE()
w=C.bDr()
A.d.M(t,C.iY(A.L,!1,v.gqD().e.l(),A.aF,12,A.bp,A.a7,0.06,u,"Footer \xb7 "+w,0,D.dh,0.9,0.05,0.92))},
$S:0}
C.eue.prototype={
$0(){A.d.M(this.a.gdw().z,C.D8(1727914055,0.12,C.cE(),D.bh,4294626325,2,0.76,0.12,0.35))},
$S:0}
C.euf.prototype={
$0(){var w=4279310375
A.d.M(this.a.gdw().z,C.D8(w,0.08,C.cE(),D.bh,w,2,0.5,0.2,0.4))},
$S:0}
C.eug.prototype={
$0(){var w=this.a,v=w.gdw().z,u=C.cE()
A.d.M(v,C.D8(w.gqD().c.j(0.35).l(),0.12,u,D.Dh,4280640491,2,0.2,0.15,0.55))
A.d.M(w.gdw().z,C.iY(A.bi,!1,4279310375,A.aF,18,A.bp,A.a7,0.15,C.cE(),"Important note",0,D.qx,0.5,0.38,0.52))},
$S:0}
C.euh.prototype={
$0(){var w=this.a
A.d.M(w.gdw().z,C.D8(4294507260,0.78,C.cE(),D.bh,4291548641,1.5,0.84,0.08,0.1))
A.d.M(w.gdw().z,C.iY(A.bi,!1,4279179050,A.aF,16,A.bp,A.a7,0.7,C.cE(),"MEMO\n\nTo:\nFrom:\nDate: "+C.bDr()+"\n\nSubject:\n\nBody text\u2026",0,D.dh,0.76,0.12,0.14))},
$S:0}
C.eui.prototype={
$0(){var w=this.a
A.d.M(w.gdw().z,C.D8(4294897802,0.28,C.cE(),D.bh,4294626325,2,0.3,0.62,0.12))
A.d.M(w.gdw().z,C.iY(A.bi,!1,4285611794,A.aF,15,A.bp,A.a7,0.24,C.cE(),"Sticky note",0,D.aIf,0.26,0.64,0.14))},
$S:0}
C.euj.prototype={
$0(){var w=4280640491,v=this.a
A.d.M(v.gdw().z,C.D8(4293060848,0.04,C.cE(),D.bh,4291548641,2,0.8,0.1,0.48))
A.d.M(v.gdw().z,C.D8(w,0.04,C.cE(),D.bh,w,2,0.55,0.1,0.48))},
$S:0}
C.euk.prototype={
$0(){var w=4279310375,v=this.a
A.d.M(v.gdw().z,C.iY(A.bi,!1,w,A.aF,18,A.bp,A.a7,0.62,C.cE(),"Left column\n\n\u2022 Point A\n\u2022 Point B",0,D.IB,0.42,0.06,0.18))
A.d.M(v.gdw().z,C.iY(A.bi,!1,w,A.aF,18,A.bp,A.a7,0.62,C.cE(),"Right column\n\n\u2022 Point C\n\u2022 Point D",200,D.uM,0.42,0.52,0.18))},
$S:0}
C.eul.prototype={
$0(){var w=4279310375,v=this.a
A.d.M(v.gdw().z,C.D8(858088427,0.62,C.cE(),D.bh,4280640491,2,0.42,0.05,0.18))
A.d.M(v.gdw().z,C.D8(856004201,0.62,C.cE(),D.bh,4278556265,2,0.42,0.53,0.18))
A.d.M(v.gdw().z,C.iY(A.bi,!1,w,A.aF,20,A.bp,A.H,0.1,C.cE(),"Option A",0,D.dh,0.36,0.08,0.2))
A.d.M(v.gdw().z,C.iY(A.bi,!1,w,A.aF,20,A.bp,A.H,0.1,C.cE(),"Option B",0,D.dh,0.36,0.56,0.2))},
$S:0}
C.eun.prototype={
$0(){var w=4279310375,v=this.a
A.d.M(v.gdw().z,C.D8(4294967295,0.36,C.cE(),D.bh,w,2,0.24,0.38,0.28))
A.d.M(v.gdw().z,C.iY(A.L,!1,w,A.aF,14,A.bp,A.a7,0.12,C.cE(),"[ QR CODE ]",0,D.dh,0.24,0.38,0.4))},
$S:0}
C.euo.prototype={
$0(){return C.chM(this.b,D.SD,this.a.gqD())},
$S:0}
C.evH.prototype={
$1(d){var w=this.b,v=w.dy,u=!D.a8h.t(0,d),t=this.a
return t.b8B(d,v===d,A.b_,this.c,new C.evG(t,u,d,w),u)},
$S:z+25}
C.evG.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p=t.b
if(p){w=3
break}else e=p
w=4
break
case 3:w=5
return B.b(t.a.od(),$async$$0)
case 5:e=!e
case 4:if(e){w=1
break}s=t.a
r=s.c
if(r==null){w=1
break}q=t.c
C.bEd(r,new C.evF(s,t.d,q),q)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.evF.prototype={
$0(){return this.a.d7(new C.evE(this.b,this.c))},
$S:0}
C.evE.prototype={
$0(){return this.a.dy=this.b},
$S:0}
C.eu1.prototype={
$0(){var w,v=this.a,u=v.gqD(),t=C.rF(4294967295,null,0,0,null,C.cE(),D.mR,"","","",D.dh),s=this.b
C.chM(t,s,u)
w=v.gdw()
if(w!=null&&s!==D.Dg){t.e=w.e
t.f=w.f}A.d.c8(v.e.r,v.f+1,t);++v.f
v.r=null},
$S:0}
C.euK.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.a
p=q.c
if(p==null){w=1
break}s=q.a
r=s.c
s=s.d
w=3
return B.b(C.ifL(p,q.d,s,new C.euJ(q),r),$async$$0)
case 3:w=q.c!=null?4:5
break
case 4:w=6
return B.b(q.tP(),$async$$0)
case 6:case 5:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.euJ.prototype={
$1(d){return this.blu(d)},
blu(d){var w=0,v=B.j(x.H),u=this,t
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.a
t.m(new C.euI(t,d))
w=2
return B.b(t.tP(),$async$$1)
case 2:return B.h(null,v)}})
return B.i($async$$1,v)},
$S:z+87}
C.euI.prototype={
$0(){var w,v,u
for(w=J.aV(this.b),v=this.a;w.C();){u=w.gR(w)
A.d.c8(v.d,0,u)}},
$S:0}
C.euL.prototype={
$0(){return this.a.bJJ()},
$S:0}
C.euM.prototype={
$0(){return this.a.aQX("Class Presentation",!0)},
$S:0}
C.euN.prototype={
$1(d){return this.a.bKF(d.b,this.b,d.a)},
$S:z+88}
C.evn.prototype={
$0(){var w,v=this.a
v.as=!1
w=v.c
w.toString
if(B.aI(w,A.bX,x.w).w.a.a<900)v.w=v.r=null},
$S:0}
C.exy.prototype={
$1(d){return new B.D(new B.Q(0,0,0,B.aI(d,A.eM,x.w).w.f.d),new B.dY(new C.exx(this.a,this.b),null),null)},
$S:60}
C.exx.prototype={
$2(d,e){return B.oZ(new C.exw(this.a,this.b,d,e),!1,0.52,0.9,0.34,!1,null)},
$S:593}
C.exw.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u?A.av:A.c,s=B.J(u?A.bz:A.aL,A.r,1),r=B.p(v,v,A.f,v,v,new B.o(A.aZ,v,v,B.m(99),v,v,A.n),v,4,v,v,v,v,v,40),q=x.p,p=w.a
return B.p(v,B.x(B.a([A.W,r,new B.D(A.ajV,B.B(B.a([B.d("Format",v,v,v,v,v,v,B.l(v,v,u?A.c:A.M,v,v,v,v,v,v,v,v,17,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.b2,B.bN(!1,A.Ad,v,v,!0,v,v,new C.exu(w.c),v,v)],q),A.m,v,A.e,A.j,0,v,v),v),B.E(B.ct(B.a([p.aTH(u,!0,!0,new C.exv(p,w.d))],q),e,D.bxg,v,v,A.ah,!1),1)],q),A.m,v,A.e,A.j,0,A.p),A.f,v,v,new B.o(t,v,s,A.kT,v,v,A.n),v,v,v,v,v,v,v,v)},
$S:113}
C.exu.prototype={
$0(){B.a4(this.a,!1).O(null)
return null},
$S:0}
C.exv.prototype={
$0(){this.b.$1(new C.exs())
var w=this.a
if(w.c!=null)w.m(new C.ext())},
$S:0}
C.exs.prototype={
$0(){},
$S:0}
C.ext.prototype={
$0(){},
$S:0}
C.ez6.prototype={
$3(d,e,f){return A.bJ},
$C:"$3",
$R:3,
$S:94}
C.ez7.prototype={
$4(d,e,f,g){var w=A.ct.av(0,e.gp(0))
return B.d9(B.eb(A.A,new C.azs(this.a,null),0.94+w*0.06,null,null),w)},
$S:384}
C.ez8.prototype={
$3(d,e,f){return A.bJ},
$C:"$3",
$R:3,
$S:94}
C.ez9.prototype={
$4(d,e,f,g){var w=A.ct.av(0,e.gp(0))
return B.d9(B.eb(A.A,new C.bdB(this.a.b,null),0.94+w*0.06,null,null),w)},
$S:384}
C.eza.prototype={
$0(){return A.d.c8(this.a.d,0,C.Wg(this.b))},
$S:0}
C.eu6.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a.fy
o===$&&B.c()
o=o.x
o===$&&B.c()
w=A.dw.av(0,o)
o=B.m(22)
v=B.m(22)
u=this.b
t=x.O
s=u?B.a([A.c.j(0.1+w*0.04),A.av.j(0.72)],t):B.a([A.c.j(0.88),A.pN.j(0.75)],t)
r=B.J(A.b1.j(0.28+w*0.22),A.r,1.3)
q=w*0.2
t=B.a([A.b1.j(0.35+q),A.cb.j(0.18),A.K],t)
q=B.J(A.b1.j(0.45+q),A.r,1)
t=B.p(p,B.X(A0.a0X,u?A.ae:A.M,p,p,p,28),A.f,p,p,new B.o(p,p,q,p,p,new B.c0(A.A,0.5,A.x,p,0,t,p,p),A.a6),p,58,p,p,p,p,p,58)
q=B.d("No presentations yet",p,p,p,p,p,p,B.l(p,p,u?A.c:A.M,p,p,p,p,p,p,p,p,p,p,p,A.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
return B.by(o,B.ue(A.fH,B.p(p,B.x(B.a([t,A.aA,q,A.am,B.d("Open Blank or Class Template to start \u2014 nothing is saved until you edit.",p,p,p,p,p,p,B.l(p,p,u?A.aB:A.al,p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),A.L,p,p)],x.p),A.m,p,A.e,A.j,0,A.p),A.f,p,p,new B.o(p,p,r,v,p,new B.a9(A.az,A.aE,A.x,s,p,p),A.n),p,p,p,p,A.eA,p,p,1/0),14,!1),A.aq)},
$S:273}
C.evb.prototype={
$1(d){return A.a.i(d)},
$S:14}
C.evc.prototype={
$1(d){return d.length!==0},
$S:3}
C.evd.prototype={
$1(d){var w
if(A.a.a0(d,"Updated"))w=A.jS
else{w=B.af("^\\d+ slides?$",!0,!1,!1,!1)
w=w.b.test(d)?A.a1w:A.BX}return w},
$S:679}
C.evg.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.a,j=k.fy
j===$&&B.c()
j=j.x
j===$&&B.c()
w=A.dw.av(0,A.k.F(j+m.b*0.12,1))
j=B.m(20)
v=m.c
u=B.m(20)
t=m.d
s=x.O
s=t?B.a([A.c.j(0.1+w*0.04),A.av.j(0.78)],s):B.a([A.c.j(0.92),A.n5.j(0.82)],s)
r=m.e
q=A.d.gI(r)
p=t?0.34:0.26
p=B.J(q.j(p+w*0.22),A.r,1.25)
q=B.m(10)
q=B.p(l,B.X(C.kE(v.w)?A.wb:A.ql,A.c,l,l,l,22),A.f,l,l,new B.o(l,l,l,q,l,new B.a9(A.a4,A.a8,A.x,r,l,l),A.n),l,36,l,l,l,l,l,52)
o=v.b
o=B.d(o.toUpperCase(),l,l,l,l,l,l,B.l(l,l,t?A.c:A.M,l,l,l,l,l,l,l,l,l,l,l,A.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
n=v.w
if(n==="marriage_agreement")n="Hati ya Kuhowesha \u2022 Updated "+k.Qg(v.f)
else if(n==="hati_kuhowa")n="Hati ya Kuhowa \u2022 Updated "+k.Qg(v.f)
else if(n==="hati_kuhoweya")n="Hati ya Kuhoweya \u2022 Updated "+k.Qg(v.f)
else if(n==="hati_kiapo_uongozi"){n=v.x
if(A.a.i(n==null?"":n).length===0)n="Civic Registry"
n="Kiapo cha Uongozi \u2022 "+B.w(n)+" \u2022 Updated "+k.Qg(v.f)}else n=""+v.r.length+" slides \u2022 Updated "+k.Qg(v.f)
r=k.bKD(n,A.d.gI(r),t)
return B.p(l,B.by(j,new B.a88(B.aG(!1,A.a1,!0,l,B.aM(!1,l,!0,B.p(l,B.dL(!1,A.N9,l,l,!0,l,l,l,!0,l,q,l,l,l,l,l,!1,l,l,l,l,l,r,l,o,l,B.aJ(l,l,l,l,B.X(A.od,t?A.aB:A.bL,l,l,l,l),l,l,l,new C.eve(k,v,t),l,l,l,l,"Project options",l),l),A.f,l,l,new B.o(l,l,p,u,l,new B.a9(A.az,A.aE,A.x,s,l,l),A.n),l,l,l,l,l,l,l,l),l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.evf(k,v),l,l,l,l,l,l,l),A.f,A.K,0,l,l,l,l,l,A.ai),l),A.aq),A.f,l,l,l,l,l,l,A.d3,l,l,l,l)},
$S:93}
C.evf.prototype={
$0(){return this.a.afC(this.b)},
$S:0}
C.eve.prototype={
$0(){return this.a.AX(this.b,this.c)},
$S:0}
C.ewH.prototype={
$0(){var w=this.a
w.b7a()
w.m(new C.ewG())},
$S:0}
C.ewG.prototype={
$0(){},
$S:0}
C.ewI.prototype={
$1(d){return this.a.ajD(this.b.a,d)},
$S:2}
C.ewJ.prototype={
$0(){this.a.d7(new C.ewF(this.b))},
$S:0}
C.ewF.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.P)?A.cw:A.P},
$S:0}
C.ewK.prototype={
$0(){this.a.d7(new C.ewE(this.b))},
$S:0}
C.ewE.prototype={
$0(){var w=this.a
return w.y=w.y===A.cD?A.bp:A.cD},
$S:0}
C.ewL.prototype={
$0(){this.a.d7(new C.ewD(this.b))},
$S:0}
C.ewD.prototype={
$0(){var w=this.a,v=w.z
return w.z=1===v.a?A.aF:A.mX},
$S:0}
C.ewM.prototype={
$0(){this.a.d7(new C.ewC(this.b))},
$S:0}
C.ewC.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
C.ewN.prototype={
$0(){var w=this.a
w.d7(new C.ewB(w,this.b))},
$S:0}
C.ewB.prototype={
$0(){var w=this.b
return w.as=this.a.c4U(w.as)},
$S:0}
C.ewO.prototype={
$0(){return this.a.d7(new C.ewA(this.b))},
$S:0}
C.ewA.prototype={
$0(){var w=this.a
return w.w=A.k.E(w.w+2,10,96)},
$S:0}
C.ewP.prototype={
$0(){return this.a.d7(new C.ewz(this.b))},
$S:0}
C.ewz.prototype={
$0(){var w=this.a
return w.w=A.k.E(w.w-2,10,96)},
$S:0}
C.ews.prototype={
$0(){return this.a.a2z(this.b.a)},
$S:0}
C.ewt.prototype={
$0(){this.a.a04()
return null},
$S:0}
C.ewu.prototype={
$0(){var w=this.a,v=w.c
v.toString
if(B.aI(v,A.bX,x.w).w.a.a<900)w.afV()
else w.m(new C.ewr(w))},
$S:0}
C.ewr.prototype={
$0(){return this.a.as=!0},
$S:0}
C.ewv.prototype={
$0(){this.a.d7(new C.ewq(this.b))},
$S:0}
C.ewq.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.P)?A.cw:A.P},
$S:0}
C.eww.prototype={
$0(){return this.a.d7(new C.ewp(this.b))},
$S:0}
C.ewp.prototype={
$0(){var w=this.a
return w.w=A.k.E(w.w+2,10,96)},
$S:0}
C.ewx.prototype={
$0(){return this.a.d7(new C.ewo(this.b))},
$S:0}
C.ewo.prototype={
$0(){var w=this.a
return w.w=A.k.E(w.w-2,10,96)},
$S:0}
C.ewy.prototype={
$0(){return this.a.aAo(null)},
$S:0}
C.evA.prototype={
$0(){this.a.DL()
return null},
$S:0}
C.evB.prototype={
$0(){this.a.aaC()
return null},
$S:0}
C.evD.prototype={
$1(d){return this.blv(d)},
blv(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
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
return B.b(t.a.Kf(),$async$$1)
case 10:w=4
break
case 6:s=t.a
r=s.e
if(r==null){w=1
break}q=s.c
q.toString
w=11
return B.b(B.bU(A.av,null,new C.evv(r),q,!0,!0,!1,null,!1,!1,x.S),$async$$1)
case 11:p=f
if(p!=null)s.d7(new C.evw(r,p))
w=4
break
case 7:s=t.a
r=s.e
if(r==null){w=1
break}s.d7(new C.evx(r))
s=s.c.K(x.q).f
s.T(B.b3(null,null,null,null,null,A.t,null,B.d(r.ay?"Video motion on \u2014 press Play to watch it like a video.":"Video motion off.",null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
w=4
break
case 8:s=t.a
r=s.e
if(r==null){w=1
break}s.d7(new C.evy(r))
s=s.c.K(x.q).f
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
return B.b(C.htJ(q,new C.EM(o,n,m,l==null?"":l)),$async$$1)
case 12:p=f
if(p==null||s.c==null){w=1
break}s.d7(new C.evz(r,p))
s=s.c.K(x.q).f
q=p.a
if(q.length===0)q="No ending celebration."
else{q=C.ahc(q)
q=B.w(q==null?null:q.b)+" will play after your last slide."}s.T(B.b3(null,null,null,null,null,A.t,null,B.d(q,null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
w=4
break
case 4:case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:96}
C.evv.prototype={
$1(d){var w,v,u,t,s,r=null,q=B.a([D.ekw],x.p)
for(w=[3,5,8,10,15,20,30,60],v=this.a,u=0;u<8;++u){t=w[u]
s=v.e===t?D.bRO:r
q.push(B.dL(!1,r,r,r,!0,r,r,r,!0,r,r,r,r,r,r,new C.evu(d,t),!1,r,r,r,r,r,r,r,new B.y(""+t+" seconds",r,A.df,r,r,r,r,r,r,r,r,r),r,s,r))}return B.bn(!0,B.x(q,A.m,r,A.e,A.Q,0,A.p),!0,!1,A.af,!0,!0)},
$S:25}
C.evu.prototype={
$0(){B.a4(this.a,!1).O(this.b)
return null},
$S:0}
C.evw.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.evx.prototype={
$0(){var w=this.a
return w.ay=!w.ay},
$S:0}
C.evy.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
C.evz.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.db=u.length===0?null:u
w.dx=v.b
w.dy=v.c
v=v.d
w.fr=v.length===0?null:v},
$S:0}
C.evC.prototype={
$1(d){var w,v,u,t=null,s=this.a.e,r=s==null,q=r?t:s.e,p=x.N
q=B.zZ(B.d("Timer: "+(q==null?5:q)+"s",t,t,t,t,t,t,t,t,t,t),48,"timer",p)
w=r?t:s.ay
v=B.zZ(B.d("Video motion: "+(w===!0?"On":"Off"),t,t,t,t,t,t,t,t,t,t),48,"motion",p)
w=r?t:s.ch
u=B.zZ(B.d("Non-stop loop: "+(w===!0?"On":"Off"),t,t,t,t,t,t,t,t,t,t),48,"loop",p)
s=C.ahc(r?t:s.db)
s=s==null?t:s.b
return B.a([D.epC,q,v,u,B.zZ(B.d("Ending celebration: "+(s==null?"None":s),t,t,t,t,t,t,t,t,t,t),48,"finale",p)],x.gx)},
$S:142}
C.ezS.prototype={
$0(){var w=this.a,v=w.e
if(v!=null){w=w.c
w.toString
C.bDo(w,v)}},
$S:0}
C.ezT.prototype={
$0(){this.a.DL()
return null},
$S:0}
C.ewS.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.z===d,r=B.m(999),q=s?D.c1j:u
if(s)w=u
else w=this.b?A.c.j(0.05):A.bN
if(s)v=A.c
else v=this.b?A.aR:A.bs
return new B.D(A.fx,B.aB(u,B.dd(u,B.d(d,u,u,u,u,u,u,B.l(u,u,v,u,u,u,u,u,u,u,u,12,u,u,A.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,A.b7,new B.o(w,u,u,r,u,q,A.n),A.eN,u,u,u,A.lA,u,u,u),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.ewR(t,d),u,u,u,u,u,u,!1,A.a5),u)},
$S:136}
C.ewR.prototype={
$0(){var w=this.a
return w.m(new C.ewQ(w,this.b))},
$S:0}
C.ewQ.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.ewT.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.e
if(s==null)s=u
else{s=s.CW
s=(s==null?"":s).length!==0}w=s===!0
v=w?G.a4t:E.ayF
s=w?"Tell the AI what to change or add":"Type it \u2014 AI creates the slides"
t=w?t.gbOa():t.gbK3()
return B.hc(B.aB(u,B.p(u,D.aoM,A.f,u,u,new B.o(u,u,u,u,B.a([new B.ac(0,A.G,A.d.gI(v).j(0.45),A.J,10)],x.V),new B.a9(A.a4,A.a8,A.x,v,u,u),A.a6),u,34,u,u,u,u,u,34),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,t,u,u,u,u,u,u,!1,A.a5),u,s,u,u)},
$S:1709}
C.ewU.prototype={
$0(){var w=this.a,v=w.c
v.toString
return C.if0(v,w.a.c)},
$S:0}
C.eyg.prototype={
$0(){return this.b.vp(this.a.a)},
$S:0}
C.eyh.prototype={
$0(){return this.a.vp(D.mR)},
$S:0}
C.eyi.prototype={
$0(){return this.a.vp(D.Iz)},
$S:0}
C.eyt.prototype={
$0(){return this.a.vp(D.IA)},
$S:0}
C.eyE.prototype={
$0(){return this.a.vp(D.Iy)},
$S:0}
C.eyP.prototype={
$0(){return this.a.qn("lab_report")},
$S:0}
C.eyW.prototype={
$0(){return this.a.qn("rubric")},
$S:0}
C.eyX.prototype={
$0(){return this.a.qn("minutes")},
$S:0}
C.eyY.prototype={
$0(){return this.a.qn("agenda")},
$S:0}
C.eyZ.prototype={
$0(){return this.a.qn("timeline")},
$S:0}
C.ez_.prototype={
$0(){return this.a.qn(this.b.a)},
$S:0}
C.eyj.prototype={
$0(){this.a.W7()
return null},
$S:0}
C.eyk.prototype={
$0(){this.a.W1()
return null},
$S:0}
C.eyl.prototype={
$0(){return this.a.qn("table")},
$S:0}
C.eym.prototype={
$0(){return this.a.qn("sticky")},
$S:0}
C.eyn.prototype={
$0(){return this.a.qn("divider")},
$S:0}
C.eyo.prototype={
$0(){return this.a.qn("header_bar")},
$S:0}
C.eyp.prototype={
$0(){return this.a.pe(D.bh)},
$S:0}
C.eyq.prototype={
$0(){return this.a.pe(D.eR)},
$S:0}
C.eyr.prototype={
$0(){return this.a.pe(D.jY)},
$S:0}
C.eys.prototype={
$0(){return this.a.pe(D.Dh)},
$S:0}
C.eyu.prototype={
$0(){return this.a.pe(D.jZ)},
$S:0}
C.eyv.prototype={
$0(){return this.a.pe(D.lg)},
$S:0}
C.eyw.prototype={
$0(){return this.a.pe(D.fA)},
$S:0}
C.eyx.prototype={
$0(){this.a.Hy()
return null},
$S:0}
C.eyy.prototype={
$0(){this.a.NG()
return null},
$S:0}
C.eyz.prototype={
$0(){return this.a.qn("quote")},
$S:0}
C.eyA.prototype={
$0(){return this.a.a8L()},
$S:0}
C.eyB.prototype={
$0(){this.a.a0a()
return null},
$S:0}
C.eyC.prototype={
$0(){var w=this.a
return w.m(new C.ey6(w))},
$S:0}
C.ey6.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.eyD.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return B.b(s.od(),$async$$0)
case 3:if(!e){w=1
break}if(s.c==null){w=1
break}s.m(new C.eye(s))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eye.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.eyF.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=r.e
q=q==null?s:q.c
w=d.a
v=q===w&&r.k_()==null&&!r.Q
q=A.a.i(w)
w=d.b
if(D.a8i.t(0,q))w+=" (Pro)"
u=d.r
if(u==null)u=d.c
u=B.a([d.f,u],x.O)
t=v?d.c:A.aZ
u=B.a([B.p(s,s,A.f,s,s,new B.o(s,s,B.J(t,A.r,v?2.5:1),s,s,new B.a9(A.a4,A.a8,A.x,u,s,s),A.a6),s,26,s,s,s,s,s,26)],x.p)
if(D.a8i.t(0,q))u.push(B.ao(s,B.p(s,D.OM,A.f,s,s,D.EA,s,12,s,s,s,s,s,12),s,s,s,-2,-2,s))
return new B.D(A.fx,B.aB(s,B.hc(new B.an(A.a_,s,A.aa,A.f,u,s),s,w,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.eyd(r,d),s,s,s,s,s,s,!1,A.a5),s)},
$S:z+89}
C.eyd.prototype={
$0(){this.a.a92(this.b)
return null},
$S:0}
C.eyG.prototype={
$0(){this.a.a91(this.b)
return null},
$S:0}
C.eyH.prototype={
$1(d){var w,v,u,t,s,r=null,q=C.hLk(d),p=this.a,o=B.m(8),n=p.gdw()
n=n==null?r:n.x
w=d.a
n=n===w?A.bk:A.aZ
v=p.gdw()
n=B.J(n,A.r,(v==null?r:v.x)===w?2.5:1)
u=B.m(8)
t=B.m(7)
s=C.rF(4294967295,r,0,0,r,"preview_"+w,D.qw,"","","",D.dh)
C.hqx(s,w)
w=x.p
u=B.a([B.by(o,B.p(r,B.by(t,C.hrS(s),A.aq),A.f,r,r,new B.o(r,r,n,u,r,r,A.n),r,44,r,r,r,r,r,72),A.aq)],w)
if(q)u.push(B.ao(r,B.p(r,D.apk,A.f,r,r,D.EA,r,14,r,r,r,r,r,14),r,r,r,2,2,r))
return new B.D(A.iy,B.aB(r,B.x(B.a([new B.an(A.a_,r,A.aa,A.t,u,r),A.cL,B.d(d.b,r,r,r,r,r,r,B.l(r,r,this.b?A.aB:A.al,r,r,r,r,r,r,r,r,9,r,r,A.P,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],w),A.m,r,A.e,A.j,0,A.p),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.eyc(p,q,d),r,r,r,r,r,r,!1,A.a5),r)},
$S:z+90}
C.eyc.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.gdw()
if(r==null){w=1
break}q=t.b||s.Q
if(q){w=3
break}else e=q
w=4
break
case 3:w=5
return B.b(s.od(),$async$$0)
case 5:e=!e
case 4:if(e){w=1
break}if(s.c==null){w=1
break}s.d7(new C.ey2(r,t.c))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.ey2.prototype={
$0(){return C.hqx(this.a,this.b.a)},
$S:0}
C.eyf.prototype={
blw(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$$2=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=!D.a8h.t(0,d)
if(s){w=3
break}else g=s
w=4
break
case 3:w=5
return B.b(t.a.od(),$async$$2)
case 5:g=!g
case 4:if(g){w=1
break}if(t.a.c==null){w=1
break}e.$0()
case 1:return B.h(u,v)}})
return B.i($async$$2,v)},
$2(d,e){return this.blw(d,e)},
$S:z+91}
C.ez0.prototype={
$4(d,e,f,g){var w=null,v=B.U(d).k("N<1,v>")
v=B.C(new B.N(d,new C.ez2(this.a,e,g,this.b,f),v),v.k("ak.E"))
return B.cd(B.B(v,A.m,w,A.e,A.j,0,w,w),A.t,w,A.y,w,w,w,w,A.aN)},
$S:z+92}
C.ez2.prototype={
$1(d){var w=this
return w.a.b8B(d,w.b===d,w.c,w.d,new C.ez1(w.e,d),!D.a8h.t(0,d))},
$S:z+25}
C.ez1.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eyI.prototype={
$1(d){this.b.$2(d,new C.eyb(this.a,d,this.c))
return null},
$S:z+26}
C.eyb.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.bEd(u,new C.ey1(v,this.c,w),w)},
$S:0}
C.ey1.prototype={
$0(){return this.a.d7(new C.ey_(this.b,this.c))},
$S:0}
C.ey_.prototype={
$0(){return this.a.dy=this.b},
$S:0}
C.eyJ.prototype={
$1(d){this.b.$2(d,new C.eya(this.a,d))
return null},
$S:z+26}
C.eya.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.fTF(u,new C.ey0(v,w),w)},
$S:0}
C.ey0.prototype={
$0(){var w=this.a
return w.d7(new C.exZ(w,this.b))},
$S:0}
C.exZ.prototype={
$0(){return this.a.gdw().r=this.b},
$S:0}
C.eyK.prototype={
$0(){var w=this.a
return w.m(new C.ey9(w))},
$S:0}
C.ey9.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
C.eyL.prototype={
$0(){var w=this.a,v=w.e
if(v!=null){w=w.c
w.toString
C.bDo(w,v)}},
$S:0}
C.eyM.prototype={
$0(){this.a.Ik()
return null},
$S:0}
C.eyN.prototype={
$0(){return this.a.a8L()},
$S:0}
C.eyO.prototype={
$0(){var w=this.a,v=w.k_()
if(v!=null&&v.b===D.cS)w.d7(new C.ey8(v))},
$S:0}
C.ey8.prototype={
$0(){var w=this.a
w.f=A.k.E(w.f*1.25,0.08,1.8)
w.e=A.k.E(w.e*1.1,0.08,1.8)},
$S:0}
C.eyQ.prototype={
$0(){this.a.DL()
return null},
$S:0}
C.eyR.prototype={
$0(){var w=this.a,v=w.e
v.toString
w.Fq(v,!0)
return null},
$S:0}
C.eyS.prototype={
$0(){this.a.d7(new C.ey7(this.b))},
$S:0}
C.ey7.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.P)?A.cw:A.P},
$S:0}
C.eyT.prototype={
$0(){this.a.d7(new C.ey5(this.b))},
$S:0}
C.ey5.prototype={
$0(){var w=this.a
return w.y=w.y===A.cD?A.bp:A.cD},
$S:0}
C.eyU.prototype={
$0(){this.a.d7(new C.ey4(this.b))},
$S:0}
C.ey4.prototype={
$0(){var w=this.a,v=w.z
return w.z=1===v.a?A.aF:A.mX},
$S:0}
C.eyV.prototype={
$0(){this.a.d7(new C.ey3(this.b))},
$S:0}
C.ey3.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
C.euF.prototype={
$1(d){return this.blt(d)},
blt(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.b
if(r){w=3
break}else f=r
w=4
break
case 3:w=5
return B.b(t.a.od(),$async$$1)
case 5:f=!f
case 4:if(f){w=1
break}s=t.a
if(s.c==null){w=1
break}s.d7(new C.euE(s,t.c))
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:197}
C.euE.prototype={
$0(){return this.a.e.d=this.b},
$S:0}
C.ezn.prototype={
$0(){var w=this.a
return w.d7(new C.ezm(w,this.b))},
$S:0}
C.ezm.prototype={
$0(){var w,v=this.b,u=v.w
if(!(u>0)){w=this.a.e
w=w==null?null:w.e
u=w==null?5:w}v.w=A.o.E(u-1,1,120)},
$S:0}
C.ezo.prototype={
$0(){var w=this.a
return w.d7(new C.ezl(w,this.b))},
$S:0}
C.ezl.prototype={
$0(){var w,v=this.b,u=v.w
if(!(u>0)){w=this.a.e
w=w==null?null:w.e
u=w==null?5:w}v.w=A.o.E(u+1,1,120)},
$S:0}
C.evN.prototype={
$0(){return this.a.d7(new C.evM(this.b))},
$S:0}
C.evM.prototype={
$0(){var w=this.a
return w.w=A.k.E(w.w-2,10,96)},
$S:0}
C.evO.prototype={
$0(){return this.a.d7(new C.evL(this.b))},
$S:0}
C.evL.prototype={
$0(){var w=this.a
return w.w=A.k.E(w.w+2,10,96)},
$S:0}
C.ewk.prototype={
$1(d){var w=x.gh
w=B.C(new B.N(D.aqZ,new C.ewj(),w),w.k("ak.E"))
return w},
$S:z+94}
C.ewj.prototype={
$1(d){var w=null
return B.zZ(B.d(d.b,w,w,w,w,w,w,A.mj,w,w,w),48,d,x.fO)},
$S:z+95}
C.ezA.prototype={
$2(d,e){var w=this.a,v=w?0:8
return new B.a7(v,w?8:0,null,null)},
$S:36}
C.ezz.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=null,p=r.a,o=e===p.f,n=p.km()?q:new C.ezx(p,r.b,d,e),m=r.c,l=m?1/0:112
m=m?72:64
w=B.m(8)
if(o)v=A.bk
else v=r.d?A.aZ:A.cr
v=B.J(v,A.r,o?2:1)
u=r.d?A.cp:A.c
t=B.bT(0,C.hrS(r.b.r[e]),0,0,0)
s=B.m(4)
return B.aB(q,B.p(q,new B.an(A.a_,q,A.aa,A.t,B.a([t,B.ao(4,B.p(q,B.d(""+(e+1),q,q,q,q,q,q,A.nC,q,q,q),A.f,q,q,new B.o(A.aW,q,q,s,q,q,A.n),q,q,q,q,A.akP,q,q,q),q,q,4,q,q,q)],x.p),q),A.f,q,q,new B.o(u,q,v,w,q,q,A.n),q,m,q,q,q,q,q,l),A.y,!1,q,q,q,q,q,q,q,q,n,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.ezy(p,e),q,q,q,q,q,q,!1,A.a5)},
$S:84}
C.ezy.prototype={
$0(){var w=this.a
return w.m(new C.ezt(w,this.b))},
$S:0}
C.ezt.prototype={
$0(){var w=this.a
w.f=this.b
w.r=null
w.Ko()},
$S:0}
C.ezx.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.b
if(q.r.length<=1){w=1
break}s=t.d
w=3
return B.b(B.bU(null,null,new C.ezu(s,q),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:r=e
if(r==="dup"){q=t.a
q.m(new C.ezv(q,s))
q.aSq()}else if(r==="del"){q=t.a
q.m(new C.ezw(q,s))
q.aRy()}else if(r==="up")t.a.b3H(s,s-1)
else if(r==="down")t.a.b3H(s,s+1)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.ezu.prototype={
$1(d){var w=null,v=B.a([B.dL(!1,w,w,w,!0,w,w,w,!0,w,D.bTu,w,w,w,w,new C.ezp(d),!1,w,w,w,w,w,w,w,D.fuE,w,w,w),B.dL(!1,w,w,w,!0,w,w,w,!0,w,D.bTn,w,w,w,w,new C.ezq(d),!1,w,w,w,w,w,w,w,A.wX,w,w,w)],x.p),u=this.a
if(u>0)v.push(B.dL(!1,w,w,w,!0,w,w,w,!0,w,D.bSE,w,w,w,w,new C.ezr(d),!1,w,w,w,w,w,w,w,D.fCR,w,w,w))
if(u<this.b.r.length-1)v.push(B.dL(!1,w,w,w,!0,w,w,w,!0,w,D.bUI,w,w,w,w,new C.ezs(d),!1,w,w,w,w,w,w,w,D.fus,w,w,w))
return B.bn(!0,B.x(v,A.m,w,A.e,A.Q,0,A.p),!0,!1,A.af,!0,!0)},
$S:25}
C.ezp.prototype={
$0(){B.a4(this.a,!1).O("dup")
return null},
$S:0}
C.ezq.prototype={
$0(){B.a4(this.a,!1).O("del")
return null},
$S:0}
C.ezr.prototype={
$0(){B.a4(this.a,!1).O("up")
return null},
$S:0}
C.ezs.prototype={
$0(){B.a4(this.a,!1).O("down")
return null},
$S:0}
C.ezv.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.ezw.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.ezB.prototype={
$0(){return this.a.a8L()},
$S:0}
C.ev4.prototype={
$0(){var w=this.a
w.b7a()
w.aAo(null)},
$S:0}
C.ev3.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=B.m(4),n=B.a([new B.ac(0,A.G,A.w.j(0.35),A.dq,24)],x.V),m=this.b
if(m.f!=null){w=B.b1(m.e)
v=m.f
v.toString
v=new B.a9(A.az,A.aE,A.x,B.a([w,B.b1(v)],x.O),p,p)
w=v}else w=p
v=m.f==null?B.b1(m.e):p
u=m.x
t=m.y
s=B.m(4)
if(m.f!=null){r=B.b1(m.e)
q=m.f
q.toString
q=new B.a9(A.az,A.aE,A.x,B.a([r,B.b1(q)],x.O),p,p)
r=q}else r=p
s=B.a([B.by(s,B.c1(A.kN,new B.o(m.f==null?B.b1(m.e):p,p,p,p,p,r,A.n),A.bg),A.aq)],x.p)
r=m.z
q=this.c
A.d.v(s,new B.N(r,new C.ev2(this.a,e.b,e.d,q),B.U(r).k("N<1,v>")))
if(m.z.length===0)s.push(B.at(B.d("Use Insert \u2192 Text Box, Picture, or Shapes",p,p,p,p,p,p,B.l(p,p,q?A.aB:A.bL,p,p,p,p,p,p,p,p,p,p,p,A.a7,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p))
return B.c1(new B.an(A.a_,p,A.aa,A.f,s,new B.cs("canvas_"+m.a+"_"+u+"_"+t,x.W)),new B.o(v,p,p,o,n,w,A.n),A.bg)},
$S:386}
C.ev2.prototype={
$1(d){var w=this
return w.a.bG2(d,w.b,w.c,w.d)},
$S:z+23}
C.euS.prototype={
$0(){var w=this
if(w.b){w.a.NO(w.c)
return}if(w.d){w.a.a8J(w.c)
return}if(w.e){w.a.ahc(w.c)
return}if(w.f)w.a.b7J(w.c)},
$S:0}
C.euT.prototype={
$0(){this.a.NO(this.b)
return null},
$S:0}
C.euU.prototype={
$0(){return this.a.a2z(this.b.a)},
$S:0}
C.euV.prototype={
$1(d){var w=this,v=w.a,u=w.b
if(v.w===u.a)return
v.m(new C.euR(u,d,w.c,w.d))
v.HZ()
v.oo()
v.pv()},
$S:21}
C.euR.prototype={
$0(){var w=this,v=w.a,u=w.b.d
v.c=A.k.E(v.c+u.a/w.c,-0.3,1.2)
v.d=A.k.E(v.d+u.b/w.d,-0.3,1.2)},
$S:0}
C.euW.prototype={
$1(d){return this.a.ajD(this.b.a,d)},
$S:2}
C.euY.prototype={
$0(){var w,v,u=this
if(u.b){w=u.c
if(!C.h54(w))u.a.NO(w)
return}if(!u.d)return
w=u.a
v=u.c
if(w.w===v.a)return
w.b7J(v)},
$S:0}
C.euX.prototype={
$0(){return this.a.a2z(this.b.a)},
$S:0}
C.euZ.prototype={
$1(d){var w=this,v=w.a
v.m(new C.euQ(w.b,d,w.c,w.d))
v.HZ()
v.oo()
v.pv()},
$S:21}
C.euQ.prototype={
$0(){var w=this,v=w.a,u=w.b.d
v.e=A.k.E(v.e+u.a/w.c,0.04,1.8)
u=u.b
v.f=A.k.E(v.f+u/w.d,0.04,1.8)
if(v.b===D.cS)v.w=A.k.E(v.w+u*0.15,10,120)},
$S:0}
C.ev_.prototype={
$1(d){var w=this.a
w.m(new C.euP(this.b,d))
w.HZ()
w.oo()
w.pv()},
$S:219}
C.euP.prototype={
$0(){var w=this.a,v=this.b.d
w.e=A.k.E(w.e*v,0.04,1.8)
w.f=A.k.E(w.f*v,0.04,1.8)
if(w.b===D.cS)w.w=A.k.E(w.w*v,10,120)},
$S:0}
C.ev0.prototype={
$0(){var w=this.a
w.m(new C.euO(this.b))
w.HZ()
w.oo()
w.pv()},
$S:0}
C.euO.prototype={
$0(){this.a.r=C.hrm()},
$S:0}
C.ev1.prototype={
$0(){return this.a.a2z(this.b.a)},
$S:0}
C.ewW.prototype={
$0(){var w=this.a
return w.m(new C.ewV(w))},
$S:0}
C.ewV.prototype={
$0(){return this.a.y=!1},
$S:0}
C.ewX.prototype={
$1(d){return this.a.cE4(this.b.a,d)},
$S:2}
C.ew0.prototype={
$1(d){var w
this.a.d7(d)
w=this.b
if(w!=null)w.$0()},
$S:167}
C.ew1.prototype={
$1(d){return this.a.$1(new C.ew_(this.b,d))},
$S:7}
C.ew_.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.ew2.prototype={
$1(d){return this.a.$1(new C.evZ(this.b,d))},
$S:7}
C.evZ.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.ew3.prototype={
$1(d){return this.a.$1(new C.evY(this.b,d))},
$S:7}
C.evY.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.ew4.prototype={
$1(d){return this.a.$1(new C.evX(this.b,d))},
$S:7}
C.evX.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.ew5.prototype={
$1(d){return this.a.$1(new C.evW(this.b,d))},
$S:7}
C.evW.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.ew6.prototype={
$1(d){return this.b.$1(new C.evV(this.a,this.c))},
$S:8}
C.evV.prototype={
$0(){return this.b.go=this.a.a},
$S:0}
C.ew7.prototype={
$1(d){return this.b.$1(new C.evU(this.a,this.c))},
$S:8}
C.evU.prototype={
$0(){return this.b.id=this.a.a},
$S:0}
C.ew8.prototype={
$1(d){var w=null,v=this.b,u=B.b1(d),t=v.Q===d,s=t?A.bk:A.cX
return B.aB(w,B.p(w,w,A.f,w,w,new B.o(u,w,B.J(s,A.r,t?2:1),w,w,w,A.a6),w,24,w,w,w,w,w,24),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.evT(this.a,v,d),w,w,w,w,w,w,!1,A.a5)},
$S:389}
C.evT.prototype={
$0(){return this.a.$1(new C.evQ(this.b,this.c))},
$S:0}
C.evQ.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.ew9.prototype={
$1(d){return this.a.$1(new C.evS(this.b,d))},
$S:1710}
C.evS.prototype={
$0(){var w=this.b
return this.a.as=w.gI(w)},
$S:0}
C.ewa.prototype={
$1(d){var w=null
return B.aB(w,B.p(w,w,A.f,w,w,new B.o(B.b1(d),w,w,w,w,w,A.a6),w,22,w,w,w,w,w,22),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.evR(this.a,this.b,d),w,w,w,w,w,w,!1,A.a5)},
$S:389}
C.evR.prototype={
$0(){return this.a.$1(new C.evP(this.b,this.c))},
$S:0}
C.evP.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.ewb.prototype={
$0(){var w,v=this
if(v.b){w=v.a.c
w.toString
w=B.a4(w,!1).pJ()}else w=!1
if(w){w=v.a.c
w.toString
B.a4(w,!1).eL()}v.a.at2()},
$S:0}
C.ewe.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.fy
m===$&&B.c()
m=m.x
m===$&&B.c()
w=A.dw.av(0,m)
m=B.m(16)
v=B.m(16)
u=o.c
t=B.ar(u,A.b1,0.35+w*0.15)
t.toString
t=B.a([u,t],x.O)
s=B.J(A.c.j(0.3+w*0.2),A.r,1.2)
r=B.a([B.X(o.d,A.c,n,n,n,26)],x.p)
q=B.m(6)
p=B.J(u,A.r,1.2)
r.push(B.ao(2,B.p(n,B.X(A.ur,u,n,n,n,10),A.f,n,n,new B.o(A.c,n,p,q,n,n,A.n),n,n,n,n,A.np,n,n,n),n,n,n,2,n,n))
return B.aG(!1,A.a1,!0,n,B.aM(!1,m,!0,B.eJ(new B.a7(48,48,new B.an(A.A,n,A.aa,A.t,r,n),n),n,new B.o(n,n,s,v,n,new B.a9(A.az,A.aE,A.x,t,n,n),A.n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.b,n,n,n,n,n,n,n),A.f,A.K,0,n,A.K,n,n,n,A.ai)},
$S:138}
C.etO.prototype={
$2(d,e){var w,v,u,t,s,r,q=this,p=null,o=q.a.fy
o===$&&B.c()
o=o.x
o===$&&B.c()
w=A.dw.av(0,o)
o=B.m(22)
v=B.m(22)
u=q.c
t=B.ar(u,A.b1,0.22+w*0.12)
t.toString
u=B.a([u,t,u.j(0.9)],x.O)
t=B.J(A.c.j(0.28+w*0.22),A.r,1.35)
s=A.c.j(0.14+w*0.08)
r=B.J(A.c.j(0.4+w*0.15),A.r,1)
return B.aG(!1,A.a1,!0,p,B.aM(!1,o,!0,B.eJ(B.x(B.a([B.eb(A.A,B.p(p,B.X(q.d,A.c,p,p,p,26),A.f,p,p,new B.o(s,p,r,p,p,p,A.a6),p,48,p,p,p,p,p,48),1+w*0.06,p,p),A.ad,B.d(q.e,p,p,p,p,p,p,A.j2,A.L,p,p)],x.p),A.m,p,A.b8,A.j,0,A.p),p,new B.o(p,p,t,v,p,new B.a9(A.az,A.aE,A.x,u,p,p),A.n),p,A.G2,1/0),p,!0,p,p,p,p,p,p,p,p,p,p,p,q.b,p,p,p,p,p,p,p),A.f,A.K,0,p,A.K,p,p,p,A.ai)},
$S:138}
C.exT.prototype={
$1(d){var w=null,v=B.d(this.a,w,w,w,w,w,w,w,w,w,w),u=this.b,t=B.aN(w,A.Z,!0,w,!0,A.t,w,B.aO(),u,w,w,w,w,w,2,A.aq8,A.y,!0,w,!0,w,!1,w,A.ak,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,A.ab,w,w,w,w,w,w,w,w,w,w,w,w,!0,A.a3,w,A.ao,w,w,w,w)
return B.em(B.a([B.bN(!1,A.di,w,w,!0,w,w,new C.exR(d),w,w),B.bI(A.qJ,new C.exS(d,u),w)],x.p),w,w,w,t,w,w,w,w,v,w)},
$S:18}
C.exR.prototype={
$0(){B.a4(this.a,!1).O(null)
return null},
$S:0}
C.exS.prototype={
$0(){var w=this.b.a.a
B.a4(this.a,!1).O(w)
return null},
$S:0}
C.d59.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.a,i=j.d
i===$&&B.c()
i=i.x
i===$&&B.c()
w=A.dw.av(0,i)
i=j.e
i===$&&B.c()
v=i.x
v===$&&B.c()
u=A.er.av(0,A.k.E(v,0,1))
i=i.x
i===$&&B.c()
i=A.dT.av(0,i)
v=B.m(22)
t=B.ar(A.aJ,A.d.gI(C.kE(j.a.c.w)?D.uD:N.nu),w*0.35)
t.toString
t=B.J(t,A.r,1.2)
s=x.V
r=B.a([new B.ac(w*2,A.G,A.d.gI(C.kE(j.a.c.w)?D.uD:N.nu).j(0.18+w*0.12),A.J,32+w*10),D.acU],s)
q=B.m(22)
p=x.O
o=B.ao(k,B.p(k,k,A.f,k,k,new B.o(k,k,k,k,k,new B.c0(A.b3,0.9,A.x,k,0,B.a([A.d.gI(C.kE(j.a.c.w)?D.uD:N.nu).j(0.22+w*0.1),A.K],p),k,k),A.n),k,80,k,k,k,k,k,k),k,k,0,0,-28,k)
n=64+w*6
m=A.d.gI(C.kE(j.a.c.w)?D.uD:N.nu).j(0.28+w*0.14)
p=B.p(k,k,A.f,k,k,new B.o(k,k,k,k,k,new B.c0(A.A,0.5,A.x,k,0,B.a([m,A.d.gak(C.kE(j.a.c.w)?D.uD:N.nu).j(0.08),A.K],p),k,k),A.a6),k,n,k,k,k,k,k,n)
n=B.m(14)
m=j.a.c.w
l=C.kE(m)?D.uD:N.nu
s=B.a([new B.ac(0,A.G,A.d.gI(C.kE(m)?D.uD:N.nu).j(0.45+w*0.2),A.cv,18)],s)
m=x.p
l=B.a([p,B.eb(A.A,B.p(k,B.X(C.kE(j.a.c.w)?A.wb:A.ql,A.c,k,k,k,22),A.f,k,k,new B.o(k,k,k,n,s,new B.a9(A.az,A.aE,A.x,l,k,k),A.n),k,46,k,k,k,k,k,46),1+w*0.04,k,k)],m)
s=B.a([new B.an(A.A,k,A.aa,A.t,l,k),A.W,B.d("PRESENTATION",k,k,k,k,k,k,B.l(k,k,A.d.gI(C.kE(j.a.c.w)?D.uD:N.nu).j(0.85+w*0.15),k,k,k,k,k,k,k,k,10,k,k,A.H,k,k,!0,k,1.4,k,k,k,k,k,k),A.L,k,k),A.fO,B.d(j.a.c.b,k,2,A.a2,k,k,k,D.fmu,A.L,k,k),A.au,B.d(j.gcz5(),k,k,k,k,k,k,D.frd,A.L,k,k),A.aA],m)
p=j.a.c
if(p.z){p=p.gSF()?"Shared by admin \xb7 editable for 4 hours":"Received copy \xb7 print or download only"
A.d.v(s,B.a([B.d(p,k,k,k,k,k,k,B.l(k,k,A.d.gI(C.kE(j.a.c.w)?D.uD:N.nu).j(0.9),k,k,k,k,k,k,k,k,11,k,k,A.P,k,k,!0,k,k,k,k,k,k,k,k),A.L,k,k),A.ad],m))}s.push(new C.K5(A.yB,"Download PDF","pdf",A.d2,j.Jf(0),!1,k))
p=j.a.c
if(!p.z||p.gSF()){p=j.a.c.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"}else p=!1
if(p){p=j.a.c.w
A.d.v(s,B.a([A.am,new C.K5(A.kh,"Transfer to "+C.hro(p==null?"":p),"transfer_hati",A.aV,j.Jf(1),!1,k)],m))}p=j.a.c
if(!p.z){p=p.w
n=j.Jf(p==="hati_kuhowa"||p==="hati_kuhoweya"?2:1)
p=j.a.c.w
A.d.v(s,B.a([A.am,new C.K5(D.bL6,"Rename presentation","rename",A.cb,n,!1,k),A.am,new C.K5(A.amv,"Duplicate","duplicate",A.b5,j.Jf(p==="hati_kuhowa"||p==="hati_kuhoweya"?3:2),!1,k)],m))}s.push(A.O)
p=j.a.c
if(p.z)p=1
else{p=p.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"?4:3}s.push(new C.K5(A.ed,"Delete presentation","delete",A.aw,j.Jf(p),!0,k))
s.push(A.au)
p=j.a.c
if(p.z)p=2
else{p=p.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"?5:4}p=j.Jf(p)
n=j.a.c
if(n.z)n=2
else{n=n.w
n=n==="hati_kuhowa"||n==="hati_kuhoweya"?5:4}n=j.Jf(n)
s.push(B.dO(B.d9(B.bN(!1,E.aTG,k,k,!0,k,k,new C.d58(d),k,B.fy(k,k,k,k,k,k,k,k,k,k,k,A.bL,k,k,k,A.ax,k,D.bAq,k,k,k,k,k,A.kl,k,k)),n),new B.t(0,(1-p)*8)))
return B.eb(A.A,B.d9(B.aG(!1,A.a1,!0,k,B.p(k,B.by(q,new B.an(A.a_,k,A.aa,A.t,B.a([o,new B.D(D.bzz,B.x(s,A.m,k,A.e,A.Q,0,A.p),k)],m),k),A.aq),A.f,k,A.Wo,new B.o(A.av,k,t,v,r,k,A.n),k,k,k,k,k,k,k,k),A.f,A.K,0,k,k,k,k,k,A.ai),i),0.88+u*0.12,k,k)},
$S:46}
C.d58.prototype={
$0(){B.a4(this.a,!1).O(null)
return null},
$S:0}
C.d5v.prototype={
$0(){B.a4(this.a,!1).O(!1)
return null},
$S:0}
C.d5w.prototype={
$0(){B.a4(this.a,!1).O(!0)
return null},
$S:0}
C.d56.prototype={
$1(d){var w=this.a
return w.m(new C.d52(w))},
$S:22}
C.d52.prototype={
$0(){return this.a.d=!0},
$S:0}
C.d57.prototype={
$1(d){var w=this.a
return w.m(new C.d51(w))},
$S:66}
C.d51.prototype={
$0(){return this.a.d=!1},
$S:0}
C.d55.prototype={
$0(){var w=this.a
return w.m(new C.d53(w))},
$S:0}
C.d53.prototype={
$0(){return this.a.d=!1},
$S:0}
C.d54.prototype={
$0(){var w=this.a.a.e
B.a4(this.b,!1).O(w)
return null},
$S:0}
C.eAy.prototype={
$0(){return $.bl5=!$.bl5},
$S:0}
C.eAo.prototype={
$0(){var w,v,u=this.a
if(u.c==null||!u.r)return
w=u.d
w===$&&B.c()
v=u.a.c
if(w<v.r.length-1||v.ch||u.gaVD())u.ay4()},
$S:0}
C.eAx.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.eAp.prototype={
$0(){return this.a.y=!0},
$S:0}
C.eAq.prototype={
$0(){var w=this.a
if(w.c!=null&&w.y)w.ay4()},
$S:0}
C.eAk.prototype={
$0(){var w=this.a
w.y=!1
w.e=A.d.gI(w.a.c.r).r
w.d=0},
$S:0}
C.eAl.prototype={
$0(){var w=this.a,v=this.b
w.e=w.a.c.r[v].r
w.d=v},
$S:0}
C.eAm.prototype={
$0(){return this.a.y=!1},
$S:0}
C.eAn.prototype={
$0(){var w,v,u=this.a
u.e=u.a.c.r[this.b].r
w=u.d
w===$&&B.c()
v=this.c
u.d=A.o.F(w-1+v,v)},
$S:0}
C.eAv.prototype={
$2(d,e){var w=B.C(e,x.l)
if(d!=null)w.push(d)
return new B.an(A.A,null,A.b0,A.t,w,null)},
$S:1711}
C.eAw.prototype={
$2(d,e){var w
if(e.gc4(e)===A.ia)return new B.d0(e,!1,d,null)
w=this.a
return w.cx1(w.e,d,e)},
$S:383}
C.eAr.prototype={
$2(d,e){var w=B.dr(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
v=this.a
w.fG((1-v.gp(0))*1.5708)
return B.fv(A.A,B.d9(e,v.gp(0)),null,w,!0)},
$S:46}
C.eAs.prototype={
$2(d,e){var w=B.dr(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
v=this.a
w.kd((1-v.gp(0))*1.5708)
return B.fv(A.A,B.d9(e,v.gp(0)),null,w,!0)},
$S:46}
C.eAt.prototype={
$2(d,e){var w=B.dr(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.002
v=this.a
w.fG(v.gp(0)*0.8)
w.kd(v.gp(0)*0.35)
return B.fv(A.A,B.d9(e,v.gp(0)),null,w,!0)},
$S:46}
C.eAu.prototype={
$2(d,e){var w=B.dr(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.0025
v=this.a
w.fG(-v.gp(0)*1.2)
return B.fv(A.a8,B.d9(e,v.gp(0)),null,w,!0)},
$S:46}
C.eAz.prototype={
$2(d,e){var w,v=this,u=v.b,t=u==null
if(!t){w=v.a.gZi().r
w=w!=null&&w.a!=null}else w=!1
if(w){t=v.a
u=t.a.c.r[u]
t=t.gZi().x
t===$&&B.c()
return new C.b1N(u,v.c,t,null)}u=v.a.d
u===$&&B.c()
return new C.J2(v.c,t,!0,new B.cs("cine"+u,x.W))},
$S:659}
C.eAB.prototype={
$1(d){var w=this.a
if(d.b.a>B.aI(this.b,A.bX,x.w).w.a.a*0.55)w.ay4()
else w.cll()},
$S:66}
C.eAA.prototype={
$0(){B.a4(this.a,!1).O(null)
return null},
$S:0}
C.fJS.prototype={
$4(d,e,f,g){var w=this.b
A.d.a9(w)
A.d.v(w,d)
w=this.a
w.a=e
w.b=f
w.c=g},
$S:445}
C.fK0.prototype={
$1(d){var w=null,v=this.a,u=v.r.length,t=u===1?"":"s"
t=B.d("Download a PDF that looks like your slides ("+u+" page"+t+"), or open the print view in your browser.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.75),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return B.em(B.a([B.bN(!1,A.di,w,w,!0,w,w,new C.fJY(d),w,w),B.bN(!1,D.fKi,w,w,!0,w,w,new C.fJZ(d,this.b,v),w,w),B.bI(A.aTY,new C.fK_(d,v,this.c),w)],x.p),w,w,M.tI,new B.a7(320,w,t,w),w,w,w,w,D.fLM,w)},
$S:18}
C.fJY.prototype={
$0(){B.a4(this.a,!1).O(null)
return null},
$S:0}
C.fJZ.prototype={
$0(){var w=0,v=B.j(x.H),u=this
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:B.a4(u.a,!1).O(null)
C.h5J(u.b,u.c.b)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fK_.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:B.a4(u.a,!1).O(null)
t=u.b
w=2
return B.b(C.aQv(t),$async$$0)
case 2:s=e
r=u.c
w=r.e!=null?3:4
break
case 3:w=5
return B.b(C.aPW(r,s,t.b),$async$$0)
case 5:case 4:return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fJR.prototype={
$1(d){return d.a!==this.a.a},
$S:z+2}
C.chP.prototype={
$2(d,e){var w
if(x.f.b(e)){w=J.r(e,"bundleId")
w=J.k(w==null?"":w)===this.a}else w=!1
return w},
$S:538}
C.fJX.prototype={
$1(d){return d.ag()},
$S:z+14}
C.fgj.prototype={
$1(d){return C.h5H(C.Wg(B.a2(d,x.N,x.z)),this.a)},
$S:z+96}
C.fSV.prototype={
$3(d,e,f){return A.bJ},
$C:"$3",
$R:3,
$S:94}
C.fSW.prototype={
$4(d,e,f,g){var w=A.ct.av(0,e.gp(0))
return B.d9(B.eb(A.A,D.hiB,0.94+w*0.06,null,null),w)},
$S:384}
C.fSX.prototype={
$1(d){var w=this
return new C.Wi(w.a,w.b,w.c,w.d,null)},
$S:z+97}
C.eA4.prototype={
$2(d,e){return d+e.r.length},
$S:z+13}
C.eA0.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.eA3.prototype={
$1(d){var w=this.a,v=w.a,u=v.c
v=v.f
return new C.Wj(u,this.b,w.gaOR(),v,null)},
$S:z+99}
C.eA1.prototype={
$0(){return this.a.f=!0},
$S:0}
C.eA2.prototype={
$0(){return this.a.f=!1},
$S:0}
C.eA5.prototype={
$0(){return this.a.f=!0},
$S:0}
C.eA6.prototype={
$0(){return this.a.f=!1},
$S:0}
C.eA9.prototype={
$0(){B.a4(this.a,!1).O(null)
return null},
$S:0}
C.eAa.prototype={
$0(){var w=this.a
return w.m(new C.eA8(w))},
$S:0}
C.eA8.prototype={
$0(){return this.a.d="one"},
$S:0}
C.eAb.prototype={
$0(){var w=this.a
return w.m(new C.eA7(w))},
$S:0}
C.eA7.prototype={
$0(){return this.a.d="all"},
$S:0}
C.eAc.prototype={
$1(d){return this.a.bKE(d,this.b)},
$S:z+100}
C.eA_.prototype={
$0(){var w=this.a
return w.m(new C.ezZ(w,this.b))},
$S:0}
C.ezZ.prototype={
$0(){return this.a.e=this.b.a},
$S:0}
C.eAd.prototype={
$0(){var w=this.a,v=this.b
w.d=v.b
w.e=v.a},
$S:0}
C.eAe.prototype={
$0(){return this.a.f="Could not create QR. Check your connection and try again."},
$S:0}
C.eAf.prototype={
$2(d,e){return d+e.r.length},
$S:z+13}
C.eAg.prototype={
$0(){B.a4(this.a,!1).O(null)
return null},
$S:0}
C.eAh.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a.e
s.toString
w=3
return B.b(B.fG(new B.fB(s)),$async$$0)
case 3:s=t.b
if(s.e==null){w=1
break}s.K(x.q).f.T(D.f8t)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.etI.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.etH())},
$S:0}
C.etH.prototype={
$0(){},
$S:0}
C.etJ.prototype={
$1(d){var w=this.a
if(w.c!=null)w.e.fP()},
$S:9}
C.etE.prototype={
$1(d){return this.a.m(new C.etD())},
$S:2}
C.etD.prototype={
$0(){},
$S:0}
C.etF.prototype={
$1(d){return this.a.b_B()},
$S:2}
C.etG.prototype={
$0(){B.a4(this.a,!1).O(null)
return null},
$S:0}
C.eAj.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(t.d.qb(),$async$$0)
case 2:if(t.c!=null)t.m(new C.eAi(t))
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.eAi.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.fE8.prototype={
$1(d){var w=null,v=this.a,u=v.a
return B.ao(w,new B.ex(new B.jR(this.c,new C.fE7(),w,w,x.ex),this.b),v.b,w,0,w,0,u)},
$S:232}
C.fE7.prototype={
$3(d,e,f){return new C.J2(e,!1,!1,new B.cs(e.a,x.W))},
$S:z+102}
C.fE9.prototype={
$1(d){var w=null
return B.ov(!1,B.at(new C.bvF(this.a,this.b,w),w,w,w),w,x.z)},
$S:334}
C.fEd.prototype={
$0(){var w=0,v=B.j(x.cc),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.aW.gmF(),$async$$0)
case 3:w=4
return B.b(B.bP(A.mB,null,x.H),$async$$0)
case 4:w=5
return B.b($.aW.gmF(),$async$$0)
case 5:s=$.aW.al$.x.h(0,t.a)
r=s==null?null:s.gbd()
if(!(r instanceof B.q4))throw B.W("Could not draw the slide.")
u=r.m4(1)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1714}
C.fEe.prototype={
bm0(d){var w=0,v=B.j(x.fS),u,t,s,r
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(d.hr(A.h8),$async$$1)
case 3:r=f
if(r==null)throw B.W("Could not read the slide picture.")
t=(self.URL||self.webkitURL).createObjectURL(B.hK([J.eQ(A.dG.gaR(r))],"image/png"))
t.toString
s=An.fXk(t)
w=4
return B.b(new B.qb(s,"load",!1,x.ev).gI(0).da(0,A.ju),$async$$1)
case 4:(self.URL||self.webkitURL).revokeObjectURL(t)
u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$1(d){return this.bm0(d)},
$S:1715}
C.fEa.prototype={
$1(d){var w,v=x.bu.a(d).data
if(v!=null){w=v.size
w.toString
w=w>0}else w=!1
if(w)this.a.push(v)},
$S:153}
C.fEb.prototype={
$1(d){var w=this.a
if((w.a.a&30)===0)w.fU(0)},
$S:153}
C.fEc.prototype={
$0(){return(self.URL||self.webkitURL).revokeObjectURL(this.a)},
$S:0}
C.far.prototype={
$3(d,e,f){var w=null
return B.d(e,w,w,w,w,w,w,D.fiX,A.L,w,w)},
$S:1716}
C.fas.prototype={
$3(d,e,f){var w=null,v=B.m(99)
return B.by(v,B.ll(A.bo,w,A.dE,8,w,e===0?w:e,w),A.aq)},
$S:567}
C.eiP.prototype={
$1(d){this.a.a_w()
return null},
$S:11}
C.eiN.prototype={
$0(){return this.a.e=D.bvw},
$S:0}
C.eiO.prototype={
$0(){var w=this.a.a
if(w.a<0)w=A.bD
return this.b.e=w},
$S:0}
C.ckK.prototype={
$1(d){return A.o.dt(1,d.a)},
$S:z+103}
C.ckL.prototype={
$2(d,e){return(d|e)>>>0},
$S:70};(function aliases(){var w=C.aMs.prototype
w.bwT=w.q
w=C.aLZ.prototype
w.bwo=w.q
w=C.aLL.prototype
w.bw9=w.q
w=C.aLY.prototype
w.bwn=w.q
w=C.aMq.prototype
w.bwR=w.q
w=C.aNI.prototype
w.byj=w.q
w=C.aKI.prototype
w.bv3=w.q
w=C.aMB.prototype
w.bx1=w.q
w=C.aMC.prototype
w.bx2=w.q
w=C.b3t.prototype
w.brB=w.aDy})();(function installTearOffs(){var w=a._static_0,v=a._instance_0u,u=a._instance_1u,t=a._static_1,s=a.installStaticTearOff
w(C,"icM","ao_",104)
v(C.aJH.prototype,"gc5g","Zp",0)
var r
u(r=C.ayc.prototype,"gcyr","cys",38)
v(r,"gc65","adV",0)
v(r=C.ay8.prototype,"gaZ6","Ee",3)
v(r,"gc62","c63",3)
v(r,"gaxe","xU",0)
v(r,"gaxf","IV",0)
t(C,"idc","hJ5",105)
v(C.aEm.prototype,"gc8K","c8L",3)
s(C,"idn",0,null,["$4$paper$photo$request$template"],["fLh"],106,0)
s(C,"idm",0,null,["$5$doc$history$instruction$photo$template"],["bCH"],107,0)
v(r=C.aED.prototype,"gc9t","Jc",0)
v(r,"gbK6","Xd",0)
v(r,"gc9w","aeK",0)
v(r,"gc9v","a_i",0)
v(r,"gb_g","Ev",0)
v(C.aEF.prototype,"gc9B","a_k",0)
v(r=C.aG2.prototype,"gb_t","Qc",0)
v(r,"gcqb","b3M",3)
v(r,"gczP","aBF",86)
v(r,"gbNZ","aaG",0)
v(r,"gca1","AB",0)
v(r=C.aHZ.prototype,"gck5","a0F",0)
v(r,"gckd","a0I",0)
v(r,"gbCZ","a98",0)
v(r,"gca5","aeW",0)
v(C.aHY.prototype,"gca6","aeX",0)
v(C.aC2.prototype,"gbBY","a8W",0)
v(C.aAq.prototype,"gca7","a_v",0)
w(C,"idA","ibt",12)
w(C,"idy","i8m",12)
w(C,"idz","iar",12)
v(r=C.aEV.prototype,"gcD_","cD0",3)
v(r,"gcot","cou",3)
u(r,"gEB","afC",7)
v(r,"gbHL","asc",3)
u(r,"gEC","b0M",7)
v(r,"gccg","afj",0)
v(r,"gcb7","afi",0)
v(r,"gceq","afD",0)
v(r,"gbK3","aag",0)
v(r,"gcfk","a04",0)
v(r,"gcfl","afU",0)
v(r,"gcfS","ag0",0)
v(r,"gceD","afG",0)
v(r,"gbOa","aaK",0)
v(r,"gaSp","aSq",3)
v(r,"gaRx","aRy",3)
v(r,"gaNa","aNb",3)
v(r,"gaRw","at2",3)
u(r,"gbCe","bCf",80)
v(r,"gaBb","b6U",3)
v(r,"gcb9","cba",3)
v(r,"gbZq","bZr",3)
v(r,"gbMw","bMx",3)
v(r=C.aEY.prototype,"gcBQ","cBR",3)
v(r,"gcBv","cBw",3)
t(C,"idB","ibK",2)
v(r=C.aEW.prototype,"gcad","Jh",0)
v(r,"gcse","RD",0)
v(r,"gcaa","Jg",0)
v(r,"gcEf","a3e",0)
v(r,"gcg3","ag7",0)
v(C.aEU.prototype,"gcae","b_B",3)
v(r=C.aEX.prototype,"gbOZ","aaV",0)
u(r,"gcab","cac",101)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(B.aD,[C.o2,C.S8,C.bIi,C.bGD,C.cBr,C.cBp,C.bQi,C.b9h,C.cBq,C.bFd,C.ckE,C.ckC,C.ckD,C.ckB,C.atg,C.ckA,C.bRl,C.os,C.aFw,C.jr,C.nP,C.a87,C.zN,C.lp,C.oG,C.mf,C.zO,C.nT,C.a8f,C.arE,C.b1O,C.eiE,C.lm,C.EV,C.ew,C.j2,C.EM,C.xM,C.eN,C.lR,C.i4,C.jN,C.a8g,C.afo,C.b1P,C.b3t,C.a38])
u(B.kd,[C.cJi,C.c1c,C.fzm,C.cKP,C.cKb,C.fER,C.e14,C.e13,C.eiS,C.eiR,C.fGf,C.fhs,C.fht,C.cga,C.cgb,C.cgc,C.emh,C.eUt,C.eTR,C.eTQ,C.eUU,C.eUr,C.eUk,C.eUD,C.eVj,C.fpj,C.f0A,C.f0z,C.f12,C.eiH,C.fJO,C.dXX,C.fQt,C.fGC,C.chH,C.chF,C.chK,C.fH6,C.fH7,C.fH8,C.fH9,C.chr,C.chs,C.dKt,C.cho,C.fH5,C.f7Z,C.dVF,C.chh,C.ein,C.fEG,C.exi,C.exH,C.exE,C.exD,C.exO,C.exN,C.ezi,C.ezh,C.exx,C.exw,C.eu6,C.evg,C.eyf,C.ezA,C.ezz,C.ev3,C.ewe,C.etO,C.d59,C.eAv,C.eAw,C.eAr,C.eAs,C.eAt,C.eAu,C.eAz,C.chP,C.eA4,C.eAf,C.ckL])
u(B.hL,[C.cJj,C.cJk,C.bRm,C.fww,C.c1b,C.c1e,C.fMX,C.f8Y,C.f8P,C.f94,C.fgk,C.fgl,C.fzn,C.fzl,C.fMr,C.fwa,C.fNi,C.cKF,C.cKK,C.cKM,C.cKI,C.cKN,C.cKG,C.cKO,C.cKB,C.cKy,C.cKx,C.cKE,C.cK6,C.cK4,C.fDT,C.fDU,C.fkA,C.fES,C.fEY,C.fjD,C.ccu,C.fDR,C.fDS,C.fyJ,C.fyK,C.fEX,C.fET,C.fEV,C.fEW,C.fEU,C.fQL,C.fyN,C.fyO,C.fyR,C.fyS,C.fyV,C.fyW,C.fSd,C.fhV,C.fSo,C.elP,C.elQ,C.elR,C.elx,C.elJ,C.elK,C.elM,C.cg9,C.cg7,C.cg8,C.fEx,C.fEz,C.fEy,C.fhu,C.fhv,C.fSr,C.emm,C.emn,C.eme,C.emf,C.emi,C.emj,C.fSH,C.eVk,C.eUK,C.eUu,C.eUH,C.eTM,C.eTN,C.eTO,C.eTS,C.eTT,C.eV9,C.eVg,C.eVi,C.eUT,C.eUV,C.eUZ,C.eV_,C.eV0,C.eV4,C.eUW,C.eUX,C.eU3,C.eU4,C.eU5,C.eU6,C.eU7,C.eU8,C.eU9,C.eUa,C.eUb,C.eTp,C.eTq,C.eTr,C.eTs,C.eTu,C.eTv,C.eTY,C.eTZ,C.eU_,C.eU0,C.eU1,C.eTz,C.eTA,C.eTB,C.eTC,C.eUj,C.eUC,C.fBW,C.fBV,C.chy,C.fpi,C.fJK,C.fJD,C.fJG,C.fHB,C.fHC,C.fHD,C.fC2,C.fC1,C.fC0,C.fBZ,C.fho,C.fhp,C.fhq,C.fST,C.f0C,C.f0D,C.f0w,C.f0q,C.f0W,C.f0X,C.f0Z,C.f1_,C.f0V,C.fSS,C.f0h,C.foy,C.eiG,C.fJM,C.fJN,C.fJP,C.fJI,C.fJJ,C.fS5,C.dnj,C.dnp,C.eiF,C.fdQ,C.fdS,C.fdR,C.fdP,C.fD6,C.fD8,C.ffQ,C.fJe,C.fJf,C.fJg,C.fJr,C.fJw,C.fJx,C.fJy,C.fJz,C.fJA,C.fJB,C.fJC,C.fJh,C.fJi,C.fJj,C.fJk,C.fJl,C.fJm,C.fJn,C.fJo,C.fJp,C.fJq,C.fJs,C.fJt,C.fJu,C.fJv,C.fAX,C.fnQ,C.fnP,C.fJV,C.dXY,C.dXW,C.f_r,C.cc5,C.cc7,C.fQv,C.dcG,C.dcI,C.fQu,C.fQs,C.fSR,C.fGy,C.dcg,C.fyZ,C.fz_,C.chw,C.chx,C.chv,C.chl,C.chm,C.chi,C.chj,C.chk,C.chN,C.chI,C.chD,C.chE,C.chG,C.chJ,C.chL,C.fHa,C.chq,C.cht,C.chu,C.chA,C.chB,C.fK1,C.fJ8,C.chp,C.chn,C.fH4,C.fqE,C.chg,C.eXY,C.ftD,C.ezW,C.ewl,C.ewm,C.exW,C.exK,C.exL,C.evJ,C.ezH,C.ezI,C.ezJ,C.ev7,C.exp,C.exr,C.ex1,C.ewZ,C.ewh,C.ewi,C.ex8,C.ev9,C.exk,C.exl,C.exj,C.exn,C.exm,C.exF,C.exG,C.exI,C.exB,C.evs,C.evp,C.exP,C.evh,C.ezG,C.etQ,C.evk,C.evj,C.euy,C.euD,C.euB,C.euz,C.ezO,C.ezP,C.ezQ,C.ezN,C.ezk,C.ezj,C.ezd,C.ezf,C.ez5,C.ezE,C.ezC,C.etY,C.etU,C.ewf,C.euH,C.eu8,C.eu7,C.euu,C.euv,C.evH,C.euJ,C.euN,C.exy,C.ez6,C.ez7,C.ez8,C.ez9,C.evb,C.evc,C.evd,C.ewI,C.evD,C.evv,C.evC,C.ewS,C.ewT,C.eyF,C.eyH,C.ez0,C.ez2,C.eyI,C.eyJ,C.euF,C.ewk,C.ewj,C.ezu,C.ev2,C.euV,C.euW,C.euZ,C.ev_,C.ewX,C.ew0,C.ew1,C.ew2,C.ew3,C.ew4,C.ew5,C.ew6,C.ew7,C.ew8,C.ew9,C.ewa,C.exT,C.d56,C.d57,C.eAB,C.fJS,C.fK0,C.fJR,C.fJX,C.fgj,C.fSV,C.fSW,C.fSX,C.eA3,C.eAc,C.etJ,C.etE,C.etF,C.fE8,C.fE7,C.fE9,C.fEe,C.fEa,C.fEb,C.far,C.fas,C.eiP,C.ckK])
u(B.jc,[C.cJl,C.f8U,C.f8Z,C.f9_,C.f8V,C.f8W,C.f8X,C.f8N,C.f8O,C.f8Q,C.f8R,C.f93,C.f92,C.f8T,C.f8S,C.f90,C.f91,C.f96,C.f97,C.f95,C.cKH,C.cKL,C.cKJ,C.cKz,C.cKA,C.cKC,C.cKv,C.cKw,C.cKD,C.cKu,C.cKt,C.cKs,C.cJW,C.cJV,C.cJY,C.cK5,C.cJZ,C.cJX,C.cK0,C.cK1,C.cK2,C.cK_,C.cK3,C.cK7,C.cK8,C.cK9,C.cKa,C.fyH,C.fyI,C.fyF,C.fyG,C.eev,C.eet,C.eeu,C.eew,C.eex,C.e12,C.fyL,C.fyM,C.fyP,C.fyQ,C.fyT,C.fyU,C.eiQ,C.fGF,C.fGE,C.elO,C.elN,C.elr,C.eln,C.ely,C.elz,C.elA,C.elt,C.elu,C.elv,C.elw,C.els,C.elp,C.elq,C.elG,C.elH,C.elF,C.elI,C.elE,C.elD,C.elC,C.elL,C.elB,C.elo,C.eml,C.em9,C.ema,C.emg,C.emb,C.emd,C.emc,C.emk,C.eUc,C.eUA,C.eTW,C.eTX,C.eTU,C.eTV,C.eUG,C.eUF,C.eUE,C.eUJ,C.eUI,C.eTL,C.eTP,C.eTK,C.eTJ,C.eTG,C.eTI,C.eTH,C.eVh,C.eVa,C.eV8,C.eVb,C.eV7,C.eVc,C.eV6,C.eVd,C.eVe,C.eVf,C.eV5,C.eUS,C.eUN,C.eUY,C.eUR,C.eV1,C.eUQ,C.eV2,C.eUP,C.eV3,C.eUO,C.eUx,C.eUw,C.eUy,C.eUv,C.eUz,C.eUp,C.eUo,C.eUq,C.eUn,C.eUm,C.eUl,C.eTt,C.eTo,C.eTD,C.eTy,C.eTE,C.eTx,C.eTF,C.eTw,C.eUs,C.eUg,C.eUf,C.eUh,C.eUe,C.eUi,C.eUd,C.eUB,C.eUM,C.eUL,C.eU2,C.fJF,C.fJH,C.fJL,C.fC_,C.fEq,C.fEo,C.fEp,C.f0E,C.f0F,C.f0B,C.f0v,C.f0u,C.f0x,C.f0y,C.f0k,C.f0l,C.f0n,C.f0o,C.f0p,C.f0m,C.f0r,C.f0S,C.f0T,C.f0R,C.f0U,C.f0Q,C.f0P,C.f0O,C.f0Y,C.f0N,C.f0M,C.f0L,C.f10,C.f0K,C.f11,C.f0J,C.f0I,C.f0s,C.f0t,C.f0H,C.f0G,C.f0d,C.f0e,C.f0f,C.f0g,C.f0c,C.f0i,C.f0j,C.dni,C.dnk,C.dnn,C.dno,C.dnm,C.dnl,C.fD7,C.fAY,C.cc6,C.cc8,C.dcz,C.dcE,C.dcF,C.dcD,C.dcC,C.dcH,C.dcB,C.dcA,C.dcJ,C.fQr,C.djk,C.djl,C.djm,C.fyX,C.fyY,C.chO,C.etK,C.etL,C.etM,C.etN,C.fqC,C.fqD,C.dVH,C.dVG,C.d9v,C.d9u,C.ezY,C.ezX,C.ewn,C.ez3,C.ezU,C.exU,C.ezK,C.ezL,C.ezV,C.ex2,C.ev5,C.ev6,C.exq,C.ex0,C.ewY,C.ex_,C.ex3,C.ex4,C.ex5,C.ex6,C.ex7,C.ex9,C.eva,C.exc,C.exd,C.exe,C.exf,C.exg,C.exh,C.exb,C.exo,C.exC,C.exA,C.exJ,C.exa,C.evq,C.evr,C.evt,C.exM,C.exQ,C.eu4,C.evo,C.evm,C.exY,C.evi,C.exX,C.ev8,C.evK,C.ezF,C.ez4,C.eu5,C.eu2,C.etT,C.etP,C.etR,C.evl,C.eux,C.euC,C.euA,C.euw,C.exz,C.ezR,C.ezg,C.ezb,C.ezc,C.eze,C.ewd,C.ewc,C.ezD,C.etW,C.etX,C.etZ,C.eu_,C.eu3,C.etV,C.exV,C.ezM,C.ewg,C.euG,C.etS,C.evI,C.eu0,C.eu9,C.eua,C.eub,C.eum,C.eup,C.euq,C.eur,C.eus,C.eut,C.euc,C.eud,C.eue,C.euf,C.eug,C.euh,C.eui,C.euj,C.euk,C.eul,C.eun,C.euo,C.evG,C.evF,C.evE,C.eu1,C.euK,C.euI,C.euL,C.euM,C.evn,C.exu,C.exv,C.exs,C.ext,C.eza,C.evf,C.eve,C.ewH,C.ewG,C.ewJ,C.ewF,C.ewK,C.ewE,C.ewL,C.ewD,C.ewM,C.ewC,C.ewN,C.ewB,C.ewO,C.ewA,C.ewP,C.ewz,C.ews,C.ewt,C.ewu,C.ewr,C.ewv,C.ewq,C.eww,C.ewp,C.ewx,C.ewo,C.ewy,C.evA,C.evB,C.evu,C.evw,C.evx,C.evy,C.evz,C.ezS,C.ezT,C.ewR,C.ewQ,C.ewU,C.eyg,C.eyh,C.eyi,C.eyt,C.eyE,C.eyP,C.eyW,C.eyX,C.eyY,C.eyZ,C.ez_,C.eyj,C.eyk,C.eyl,C.eym,C.eyn,C.eyo,C.eyp,C.eyq,C.eyr,C.eys,C.eyu,C.eyv,C.eyw,C.eyx,C.eyy,C.eyz,C.eyA,C.eyB,C.eyC,C.ey6,C.eyD,C.eye,C.eyd,C.eyG,C.eyc,C.ey2,C.ez1,C.eyb,C.ey1,C.ey_,C.eya,C.ey0,C.exZ,C.eyK,C.ey9,C.eyL,C.eyM,C.eyN,C.eyO,C.ey8,C.eyQ,C.eyR,C.eyS,C.ey7,C.eyT,C.ey5,C.eyU,C.ey4,C.eyV,C.ey3,C.euE,C.ezn,C.ezm,C.ezo,C.ezl,C.evN,C.evM,C.evO,C.evL,C.ezy,C.ezt,C.ezx,C.ezp,C.ezq,C.ezr,C.ezs,C.ezv,C.ezw,C.ezB,C.ev4,C.euS,C.euT,C.euU,C.euR,C.euY,C.euX,C.euQ,C.euP,C.ev0,C.euO,C.ev1,C.ewW,C.ewV,C.ew_,C.evZ,C.evY,C.evX,C.evW,C.evV,C.evU,C.evT,C.evQ,C.evS,C.evR,C.evP,C.ewb,C.exR,C.exS,C.d58,C.d5v,C.d5w,C.d52,C.d51,C.d55,C.d53,C.d54,C.eAy,C.eAo,C.eAx,C.eAp,C.eAq,C.eAk,C.eAl,C.eAm,C.eAn,C.eAA,C.fJY,C.fJZ,C.fK_,C.eA0,C.eA1,C.eA2,C.eA5,C.eA6,C.eA9,C.eAa,C.eA8,C.eAb,C.eA7,C.eA_,C.ezZ,C.eAd,C.eAe,C.eAg,C.eAh,C.etI,C.etH,C.etD,C.etG,C.eAj,C.eAi,C.fEd,C.fEc,C.eiN,C.eiO])
t(C.aRT,B.K)
u(B.lZ,[C.a44,C.axF,C.awk,C.xK,C.xN,C.l_,C.tv,C.BH,C.rE,C.w8,C.asb,C.J3,C.arD,C.uU,C.mF,C.hF,C.a8U])
u(C.bQi,[C.cBs,C.bQj])
u(C.ckE,[C.ckI,C.atf])
t(C.ckH,C.ckC)
t(C.ckG,C.ckB)
t(C.ckJ,C.ckG)
t(C.ckF,C.ckD)
t(C.ckz,C.ckA)
t(C.baO,B.oX)
t(C.cuZ,B.avN)
t(C.a8G,B.xx)
u(B.ag,[C.a1c,C.YU,C.YS,C.aqP,C.W6,C.W7,C.a0b,C.a0I,C.a0H,C.aEx,C.a_4,C.NJ,C.ZC,C.ZX,C.aoP,C.aJn,C.Vo,C.aA5,C.a7Y,C.Oc,C.azs,C.K5,C.a_P,C.Wi,C.Wj,C.aET,C.arI,C.a7Z])
u(B.ah,[C.aJH,C.ayc,C.ay8,C.aEm,C.aED,C.aEF,C.aG2,C.aHZ,C.aHY,C.aMs,C.aC2,C.aLZ,C.aAq,C.bgL,C.aLL,C.aNI,C.aLY,C.beA,C.aMq,C.aMB,C.aKI,C.bdm,C.aMC,C.aEW,C.bl4,C.aEU,C.aEX,C.bkO])
u(B.aw,[C.aya,C.adv,C.acU,C.bjU,C.ady,C.afe,C.b1p,C.btg,C.b1K,C.bml,C.brP,C.b_E,C.b1N,C.adB,C.adS,C.b1L,C.J2,C.b_H,C.bdB,C.PT,C.Kb,C.bij,C.bii,C.bvF])
u(B.Hy,[C.bd3,C.buF,C.aK0,C.bfN,C.bsc])
u(B.mV,[C.bd2,C.b9z,C.bs9,C.bcA,C.bga,C.bip,C.bfg,C.bg6,C.bfP,C.boE,C.baG,C.bak,C.bvB,C.bsC,C.brL,C.bf9,C.b1I,C.bqH,C.brI])
t(C.bkM,C.aMs)
t(C.bka,C.aLZ)
t(C.bjW,C.aLL)
t(C.bv7,C.aNI)
t(C.bk6,C.aLY)
t(C.bkK,C.aMq)
t(C.bxT,C.aMB)
t(C.aEV,C.bxT)
t(C.bdn,C.aKI)
t(C.aEY,C.aMC)
t(C.bvs,B.iU)
t(C.a8T,B.kz)
t(C.ckM,C.b3t)
t(C.aiu,C.a38)
u(B.XU,[C.aRJ,C.aTf])
t(C.axf,C.aRJ)
w(C.aMs,B.co)
w(C.aLZ,B.co)
w(C.aLL,B.co)
w(C.aLY,B.co)
w(C.aMq,B.co)
w(C.aNI,B.co)
w(C.aKI,B.eO)
w(C.aMB,B.co)
v(C.bxT,B.eD)
w(C.aMC,B.co)})()
B.jk(b.typeUniverse,JSON.parse('{"aSs":{"hN":["aSs"]},"o2":{"aSs":[],"hN":["aSs"]},"aRT":{"K":["S8"],"K.E":"S8"},"baO":{"oX":[]},"a8G":{"xx":[],"om":[]},"a1c":{"ag":[],"v":[]},"aJH":{"ah":["a1c"]},"YU":{"ag":[],"v":[]},"YS":{"ag":[],"v":[]},"ayc":{"ah":["YU"]},"ay8":{"ah":["YS"]},"aya":{"aw":[],"v":[]},"aqP":{"ag":[],"v":[]},"aEm":{"ah":["aqP"]},"adv":{"aw":[],"v":[]},"acU":{"aw":[],"v":[]},"ady":{"aw":[],"v":[]},"afe":{"aw":[],"v":[]},"bjU":{"aw":[],"v":[]},"W6":{"ag":[],"v":[]},"aED":{"ah":["W6"]},"b1p":{"aw":[],"v":[]},"bd3":{"aC":[]},"bd2":{"aC":[]},"buF":{"aC":[]},"b9z":{"aC":[]},"bs9":{"aC":[]},"W7":{"ag":[],"v":[]},"aEF":{"ah":["W7"]},"bcA":{"aC":[]},"a0b":{"ag":[],"v":[]},"aG2":{"ah":["a0b"]},"bga":{"aC":[]},"a0I":{"ag":[],"v":[]},"a0H":{"ag":[],"v":[]},"aEx":{"ag":[],"v":[]},"a_4":{"ag":[],"v":[]},"aHZ":{"ah":["a0I"]},"aHY":{"ah":["a0H"]},"bkM":{"ah":["aEx"]},"bip":{"aC":[]},"aC2":{"ah":["a_4"]},"btg":{"aw":[],"v":[]},"b1K":{"aw":[],"v":[]},"bml":{"aw":[],"v":[]},"NJ":{"ag":[],"v":[]},"ZC":{"ag":[],"v":[]},"bka":{"ah":["NJ"]},"brP":{"aw":[],"v":[]},"bfg":{"aC":[]},"b_E":{"aw":[],"v":[]},"aAq":{"ah":["ZC"]},"ZX":{"ag":[],"v":[]},"bgL":{"ah":["ZX"]},"bg6":{"aC":[]},"bfP":{"aC":[]},"boE":{"aC":[]},"baG":{"aC":[]},"bak":{"aC":[]},"bvB":{"aC":[]},"bsC":{"aC":[]},"brL":{"aC":[]},"bf9":{"aC":[]},"aoP":{"ag":[],"v":[]},"b1N":{"aw":[],"v":[]},"bjW":{"ah":["aoP"]},"adB":{"aw":[],"v":[]},"adS":{"aw":[],"v":[]},"aJn":{"ag":[],"v":[]},"Vo":{"ag":[],"v":[]},"J2":{"aw":[],"v":[]},"aA5":{"ag":[],"v":[]},"a7Y":{"ag":[],"v":[]},"b1L":{"aw":[],"v":[]},"b1I":{"aC":[]},"bv7":{"ah":["aJn"]},"aK0":{"aC":[]},"bk6":{"ah":["Vo"]},"beA":{"ah":["aA5"]},"bkK":{"ah":["a7Y"]},"b_H":{"aw":[],"v":[]},"bfN":{"aC":[]},"bqH":{"aC":[]},"brI":{"aC":[]},"azs":{"ag":[],"v":[]},"K5":{"ag":[],"v":[]},"a_P":{"ag":[],"v":[]},"Kb":{"aw":[],"v":[]},"Oc":{"ag":[],"v":[]},"aEV":{"ah":["Oc"],"eD":[]},"bdn":{"ah":["azs"]},"bdB":{"aw":[],"v":[]},"bdm":{"ah":["K5"]},"PT":{"aw":[],"v":[]},"aEY":{"ah":["a_P"]},"bsc":{"aC":[]},"bij":{"aw":[],"v":[]},"bii":{"aw":[],"v":[]},"Wi":{"ag":[],"v":[]},"Wj":{"ag":[],"v":[]},"aET":{"ag":[],"v":[]},"arI":{"ag":[],"v":[]},"aEW":{"ah":["Wi"]},"bl4":{"ah":["Wj"]},"aEU":{"ah":["aET"]},"bvs":{"iU":[]},"aEX":{"ah":["arI"]},"bvF":{"aw":[],"v":[]},"a7Z":{"ag":[],"v":[]},"bkO":{"ah":["a7Z"]},"a8T":{"kz":["ft<eV>"],"km":["ft<eV>"]},"aiu":{"a38":[]},"aRJ":{"j6":[],"fg":[]},"axf":{"j6":[],"fg":[]},"aTf":{"j6":[],"fg":[]}}'))
var y={z:"Amri ya kifalme \xb7 bendi za muhuri juu na chini.",L:"Kichwa cha Mtu: Dollar elfu ishirini ($20,000)",f:"Mimi [Jina la Baba wa Binti], wa jamaa ya [Jina la Jamii ya Binti], Nyumba ya [Jina la Nyumba ya Binti]. Nimehowesha binti wangu aitwaye [Jina la Binti], na ndugu [Jina la Kijana], wa jamaa ya [Jina la Jamii ya Mume], Nyumba ya [Jina la Nyumba ya Mume], kijana wa [Jina la Baba wa Mume]. Makubaliano haya yanathibitishwa rasmi na pande zote mbili ili kuweka kumbukumbu na kuimarisha uhusiano mwema kati ya familia zote mbili.",O:"Mimi [Jina la Baba wa Mume], wa jamaa ya [Jina la Jamii ya Mume], Nyumba ya [Jina la Nyumba ya Mume]. Nimetowa mahali ya kuhoweya kijana wangu aitwaye [Jina la Kijana] na [Jina la Binti], binti wa [Jina la Baba wa Binti], wa jamaa ya [Jina la Jamii ya Binti], Nyumba ya [Jina la Nyumba ya Binti]. Makubaliano haya yanathibitishwa rasmi na pande zote mbili ili kuweka kumbukumbu na kuimarisha uhusiano mwema kati ya familia zote mbili.",s:"Mpaka mwembamba wa dhahabu \xb7 vichwa vya bluu ya kifalme.",Q:"Mpaka mwembamba wa dhahabu \xb7 vichwa vya dhahabu.",H:"Nguo ya kente yenye dirisha la karatasi katikati.",n:"Nguo ya udongo yenye alama \xb7 karatasi ndani.",M:'PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".',S:"The AI sent something I could not read. Try again.",g:"Your story appears here. Add a picture, then ask the AI to write it."}
var x=(function rtii(){var w=B.av
return{bu:w("LW"),U:w("vF<q8>"),bz:w("u"),M:w("dD<n>"),bo:w("jH"),g7:w("Mt"),gc:w("aA<iB?>"),bq:w("aA<~>"),cc:w("MF"),fS:w("Ea"),an:w("Ie"),bm:w("O<S8>"),X:w("O<a3g>"),f3:w("O<aSs>"),aK:w("O<nf>"),V:w("O<ac>"),O:w("O<u>"),fA:w("O<lJ>"),d5:w("O<aA<bz<H,+icon3d,picture(n?,n?)>>>"),bH:w("O<aA<dI>>"),fG:w("O<aA<~>>"),aF:w("O<nl>"),cd:w("O<ai<jr>>"),ez:w("O<a8<n,aD>>"),d:w("O<a8<n,@>>"),B:w("O<mB>"),h:w("O<jr>"),gE:w("O<zN>"),k:w("O<os>"),g:w("O<lR>"),D:w("O<i4>"),u:w("O<eN>"),m:w("O<uU>"),i:w("O<hF>"),aC:w("O<a8f>"),o:w("O<zO>"),e3:w("O<aD>"),dN:w("O<t>"),v:w("O<h9>"),cR:w("O<iS>"),J:w("O<ji>"),gx:w("O<pg<n>>"),f2:w("O<+(a0,n)>"),L:w("O<+(n,n)>"),aD:w("O<+data,mimeType(n,n)>"),G:w("O<+(L,L)>"),ek:w("O<+(H,n)>"),n:w("O<+(H,H)>"),r:w("O<cX>"),s:w("O<n>"),aS:w("O<iU>"),p:w("O<v>"),eR:w("O<fg>"),fT:w("O<b9h>"),bx:w("O<aFw>"),gz:w("O<afo>"),x:w("O<L>"),t:w("O<H>"),dS:w("O<aC?>"),bA:w("O<t?>"),Z:w("O<H?>"),cA:w("O<ce>"),A:w("cA<ah<ag>>"),gL:w("ai<os>"),R:w("ai<i4>"),j:w("ai<@>"),bW:w("ai<H>"),e:w("bz<H,+icon3d,picture(n?,n?)>"),P:w("a8<n,@>"),f:w("a8<@,@>"),gI:w("a8<H,+icon3d,picture(n?,n?)>"),bR:w("N<hF,v>"),eC:w("N<nT,n>"),cT:w("N<jN,D>"),dv:w("N<n,n>"),f0:w("N<n,v>"),gN:w("N<H,pM>"),gh:w("N<mF,jt<mF>>"),w:w("iF"),ei:w("iB"),g2:w("ru"),fB:w("EM"),b6:w("zN"),gX:w("a87"),dt:w("lp"),ea:w("os"),bt:w("lR"),I:w("i4"),F:w("eN"),fO:w("mF"),ff:w("uU"),fP:w("hF"),Q:w("w8"),dO:w("arE"),a:w("cu"),C:w("aD"),dw:w("atg"),di:w("a8U"),Y:w("eV"),fz:w("+(n,n)"),dL:w("+(H,H)"),eb:w("+claimCode,qrPayload(n?,n)"),aH:w("+icon3d,picture(n?,n?)"),cz:w("Fh"),dB:w("dx<t>"),bJ:w("dx<n>"),_:w("e1<n>"),N:w("n"),fw:w("q8"),bO:w("as"),K:w("bo<t>"),b:w("bo<L>"),E:w("dI"),W:w("cs<n>"),ac:w("cs<H>"),ex:w("jR<lR>"),cI:w("jR<n>"),cl:w("jR<L>"),b4:w("Z<lm>"),a8:w("Z<mf>"),fR:w("Z<+(n,n)>"),co:w("ec<t>"),l:w("v"),b2:w("bY<~>"),ev:w("qb<dW>"),dT:w("bh<~>"),q:w("n6"),y:w("R"),gR:w("L"),z:w("@"),S:w("H"),at:w("b9?"),gw:w("ai<a8<n,@>>?"),aT:w("ai<i4>?"),c:w("ai<@>?"),aP:w("iB?"),af:w("i4?"),go:w("b1P?"),a6:w("a8g?"),cK:w("aD?"),bZ:w("+bytes,dataUrl,fileName(dI,n,n)?"),gl:w("+claimCode,qrPayload,token(n?,n,n)?"),T:w("n?"),dd:w("dI?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.aZq=new B.bM(A.az,null,null,I.apU,null)
D.aZz=new B.df(0,-0.15)
D.aZB=new B.df(0.62,0)
D.aZE=new B.df(-0.35,-0.45)
D.aZO=new B.df(0.9,-0.85)
D.b0I=new B.bk(I.Tg,I.Tg,A.fB,A.fB)
D.b0X=new B.ay(A.b5,1,A.r,-1)
D.bmc=new B.u(1,0.4196078431372549,0.2901960784313726,0.2,A.q)
D.b18=new B.ay(D.bmc,1,A.r,-1)
D.b1k=new B.ay(A.aC,1.5,A.r,-1)
D.b1p=new B.ay(A.b5,1.6,A.r,-1)
D.b1F=new B.ay(A.aC,1.4,A.r,-1)
D.b31=new B.o(null,null,null,null,null,L.Hk,A.a6)
D.c2v=new B.a9(A.a4,A.a8,A.x,G.a4t,null,null)
D.b39=new B.o(null,null,null,null,null,D.c2v,A.a6)
D.acK=new B.o(A.av,null,null,A.tk,null,null,A.n)
D.bfi=new B.u(1,0.16862745098039217,0.22745098039215686,0.3333333333333333,A.q)
D.bm9=new B.u(1,0.0392156862745098,0.058823529411764705,0.10196078431372549,A.q)
D.d0F=w([D.bfi,D.bm9],x.O)
D.er_=new B.c0(A.A,0.5,A.x,null,0,D.d0F,null,null)
D.b3s=new B.o(null,null,null,null,null,D.er_,A.a6)
D.XZ=new B.u(1,0.054901960784313725,0.08235294117647059,0.14901960784313725,A.q)
D.b1V=new B.bK(P.vt,A.a0,A.a0,A.a0)
D.b3u=new B.o(D.XZ,null,D.b1V,null,null,null,A.n)
D.c4f=new B.a9(A.a4,A.a8,A.x,A.QW,null,null)
D.b3B=new B.o(null,null,null,null,null,D.c4f,A.a6)
D.aek=new B.u(1,0.058823529411764705,0.058823529411764705,0.0784313725490196,A.q)
D.b3E=new B.o(D.aek,null,null,A.qU,null,null,A.n)
D.b3I=new B.o(A.jt,null,null,null,null,null,A.a6)
D.b3L=new B.o(A_.aft,null,I.acm,A.mn,null,null,A.n)
D.EA=new B.o(A.dH,null,null,null,null,null,A.a6)
D.b3S=new B.o(null,null,null,null,null,E.wq,A.a6)
D.d5Q=w([E.ags,A.c0],x.O)
D.c3R=new B.a9(A.b3,A.b6,A.x,D.d5Q,null,null)
D.b3W=new B.o(null,null,null,A.mn,null,D.c3R,A.n)
D.dh0=w([A.bk,A.dH,A.k8],x.O)
D.a2x=new B.a9(A.az,A.aE,A.x,D.dh0,null,null)
D.b48=new B.o(null,null,null,null,null,D.a2x,A.n)
D.b49=new B.o(D.aek,null,null,A.kT,null,null,A.n)
D.cvG=w([A.d6,A.bk],x.O)
D.c3I=new B.a9(A.az,A.aE,A.x,D.cvG,null,null)
D.b4d=new B.o(null,null,null,null,null,D.c3I,A.n)
D.b4n=new B.o(null,null,null,null,null,G.ux,A.a6)
D.b4I=new B.o(A.agu,null,null,null,null,null,A.a6)
D.bgj=new B.u(0.5647058823529412,0,0,0,A.q)
D.acU=new B.ac(0,A.G,D.bgj,A.IO,28)
D.b6R=new B.aWE()
D.b7p=new C.cuZ()
D.b7B=new C.baO()
D.adp=new B.ck(A.A,null,null,A.a2l,null)
D.bae=new B.fi(null,null,null,null,null,E.nc,null,null,null,null)
D.b88=new B.ck(A.A,null,null,D.bae,null)
D.bNY=new B.ae(A.e5,28,A.c,null,null,null)
D.b8D=new B.ck(A.A,null,null,D.bNY,null)
D.bab=new B.fi(2,null,null,null,null,A.c1,null,null,null,null)
D.b9_=new B.ck(A.A,null,null,D.bab,null)
D.bOi=new B.ae(L.Oz,40,A.by,null,null,null)
D.b90=new B.ck(A.A,null,null,D.bOi,null)
D.bb5=new B.u(1,1,0.9019607843137255,0.6549019607843137,A.q)
D.bbh=new B.u(1,0.10588235294117647,0.13333333333333333,0.19607843137254902,A.q)
D.bbK=new B.u(1,0.08235294117647059,0.10196078431372549,0.14901960784313725,A.q)
D.bbU=new B.u(1,0.10980392156862745,0.07450980392156863,0.054901960784313725,A.q)
D.bcu=new B.u(1,0.47843137254901963,0.41568627450980394,0.27058823529411763,A.q)
D.bcL=new B.u(0.8,1,0.9450980392156862,0.9490196078431372,A.q)
D.bcN=new B.u(0.0784313725490196,0.788235294117647,0.6352941176470588,0.15294117647058825,A.q)
D.Lw=new B.u(1,0.0392156862745098,0.08235294117647059,0.14901960784313725,A.q)
D.bdf=new B.u(0.2,0.9607843137254902,0.6196078431372549,0.043137254901960784,A.q)
D.bdn=new B.u(0.13333333333333333,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.q)
D.aeE=new B.u(1,0.1411764705882353,0.09411764705882353,0.07058823529411765,A.q)
D.bee=new B.u(1,0.22745098039215686,0.16470588235294117,0.10196078431372549,A.q)
D.bf7=new B.u(1,0.9098039215686274,0.9333333333333333,0.9647058823529412,A.q)
D.aeT=new B.u(1,1,1,0.9725490196078431,A.q)
D.bfr=new B.u(0,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.q)
D.bfG=new B.u(1,1,0.5490196078431373,0.10196078431372549,A.q)
D.bfK=new B.u(0.6,0.9098039215686274,0.7058823529411765,0.7215686274509804,A.q)
D.bg0=new B.u(0.4,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.q)
D.bgo=new B.u(1,1,0.9568627450980393,0.8392156862745098,A.q)
D.bi1=new B.u(1,1,0.996078431372549,0.9725490196078431,A.q)
D.XJ=new B.u(0.8509803921568627,0,0,0,A.q)
D.bib=new B.u(1,0.0784313725490196,0.06666666666666667,0.047058823529411764,A.q)
D.bii=new B.u(1,0.0784313725490196,0.06666666666666667,0.0392156862745098,A.q)
D.afM=new B.u(0.6,0,0,0,A.q)
D.afO=new B.u(0,1,0.7019607843137254,0.2784313725490196,A.q)
D.bjV=new B.u(1,0.12156862745098039,0.10196078431372549,0.058823529411764705,A.q)
D.tF=new B.u(1,0.08235294117647059,0.12156862745098039,0.21176470588235294,A.q)
D.bkn=new B.u(1,0.35294117647058826,0.41568627450980394,0.5215686274509804,A.q)
D.bkP=new B.u(1,1,0.8784313725490196,0.6392156862745098,A.q)
D.ble=new B.u(0.4,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.q)
D.agF=new B.u(1,0.47843137254901963,0.23137254901960785,0.2901960784313726,A.q)
D.Y9=new B.u(0,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.q)
D.Be=new B.u(1,0.5411764705882353,0.39215686274509803,0.09019607843137255,A.q)
D.M6=new B.u(1,0.0784313725490196,0.09803921568627451,0.16470588235294117,A.q)
D.jq=new B.u(1,0.07058823529411765,0.12941176470588237,0.23921568627450981,A.q)
D.ah8=new B.u(0,1,0.9686274509803922,0.8392156862745098,A.q)
D.Ym=new B.u(1,0.2901960784313726,0.17254901960784313,0.10588235294117647,A.q)
D.boU=new B.u(1,0.24705882352941178,0.16470588235294117,0.0392156862745098,A.q)
D.bpo=new B.u(0.6,1,0.9686274509803922,0.9019607843137255,A.q)
D.bpE=new B.u(0.6,1,0.984313725490196,0.9215686274509803,A.q)
D.YM=new B.u(1,0.07450980392156863,0.10980392156862745,0.2,A.q)
D.bqU=new B.u(1,0.8627450980392157,0.9215686274509803,0.9803921568627451,A.q)
D.xT=new B.u(1,0.9137254901960784,0.7686274509803922,0.41568627450980394,A.q)
D.brr=new B.u(1,0.058823529411764705,0.0784313725490196,0.12549019607843137,A.q)
D.brM=new B.hM(A.aZ,!0,null,null)
D.fpt=new B.F(!0,A.aB,null,null,null,null,22,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fQ_=new B.y("Bio link",null,D.fpt,null,null,null,null,null,null,null,null,null)
D.b8U=new B.ck(A.A,null,null,D.fQ_,null)
D.bs1=new B.hM(A.X1,!0,D.b8U,null)
D.Mx=new C.a44(0,"none")
D.aik=new C.a44(1,"deflate")
D.ail=new C.a44(2,"bzip2")
D.bt_=new B.kr(0.165,0.84,0.44,1)
D.d69=w([A.cc,A.dE,A.aC],x.O)
D.c3_=new B.a9(A.az,A.aE,A.x,D.d69,null,null)
D.b36=new B.o(null,null,null,null,null,D.c3_,A.n)
D.bXi=new B.ae(A.eY,null,A.ae,null,null,null)
D.b9z=new B.ck(A.A,null,null,D.bXi,null)
D.btw=new B.kW(D.b36,A.bg,D.b9z,null)
D.bp9=new B.u(0.058823529411764705,1,1,1,A.q)
D.d9x=w([A.bz,A.r3,A.r3,D.bp9],x.O)
D.cN2=w([0,0.32,0.7,1],x.x)
D.c3y=new B.a9(A.az,A.aE,A.x,D.d9x,D.cN2,null)
D.b2W=new B.o(null,null,null,null,null,D.c3y,A.n)
D.btC=new B.kW(D.b2W,A.bg,null,null)
D.buK=new B.mu(1,1,null,null,null,A.bo,null)
D.buN=new B.mu(1,null,null,null,null,D.Ym,null)
D.bvg=new B.b9(125e4)
D.bvm=new B.b9(17e4)
D.bvw=new B.b9(35964e8)
D.bvD=new B.b9(55e4)
D.bvH=new B.b9(68e4)
D.bw7=new B.ii(0,0,0,5)
D.bwn=new B.Q(0,16,16,0)
D.bwx=new B.Q(0,36,0,36)
D.bwF=new B.Q(0,54,0,0)
D.bwM=new B.Q(10,0,10,3)
D.bwX=new B.ii(10,16,10,10)
D.bx8=new B.Q(10,6,4,6)
D.bxb=new B.Q(10,8,10,6)
D.ajk=new B.Q(11,8,11,11)
D.bxg=new B.Q(12,0,12,24)
D.bxs=new B.Q(12,12,12,4)
D.bxv=new B.Q(12,12,8,12)
D.bxK=new B.Q(12,8,8,12)
D.by7=new B.Q(14,14,14,0)
D.byc=new B.Q(14,14,14,90)
D.byw=new B.Q(16,10,16,16)
D.byx=new B.Q(16,10,16,20)
D.ak7=new B.Q(16,6,16,28)
D.bz5=new B.Q(18,0,18,10)
D.bz7=new B.Q(18,0,18,30)
D.bz9=new B.Q(18,10,18,12)
D.bza=new B.Q(18,10,18,14)
D.bzu=new B.Q(18,16,14,18)
D.bzz=new B.Q(18,18,18,12)
D.bzF=new B.Q(18,26,18,12)
D.bzK=new B.Q(18,34,18,34)
D.bzL=new B.Q(18,4,18,14)
D.bzQ=new B.Q(18,8,18,24)
D.bA8=new B.Q(20,16,14,4)
D.bAd=new B.Q(20,18,12,4)
D.bAi=new B.Q(20,20,12,20)
D.bAl=new B.Q(20,22,20,20)
D.bAq=new B.Q(20,6,20,6)
D.bAA=new B.Q(22,18,22,18)
D.bAI=new B.Q(22,24,22,0)
D.bAL=new B.Q(22,24,22,4)
D.bAT=new B.Q(22,60,22,22)
D.bAZ=new B.Q(24,24,24,22)
D.bB8=new B.Q(26,10,60,10)
D.bBg=new B.Q(28,44,28,44)
D.bBx=new B.Q(32,44,32,44)
D.bBF=new B.Q(38,30,38,20)
D.bBK=new B.Q(4,0,0,6)
D.bBW=new B.ii(4,4,4,4)
D.bCm=new B.ii(6,5,6,5)
D.bCr=new B.Q(6,6,8,6)
D.bCC=new B.Q(8,14,8,14)
D.bCD=new B.Q(8,22,8,22)
D.bCL=new B.Q(8,6,12,6)
D.bCU=new B.Q(8,8,8,4)
D.al1=new B.Q(9,9,9,6)
D.bD4=new B.ii(2.5,2.5,2.5,2.5)
D.bD5=new B.Q(10.5,0,10.5,0)
D.bD6=new B.Q(7,1.5,7,1.5)
D.cYA=w([0.393,0.769,0.189,0,0,0.349,0.686,0.168,0,0,0.272,0.534,0.131,0,0,0,0,0,1,0],x.x)
D.bDm=new B.xk(null,null,D.cYA,A.AS)
D.cVs=w([0.2126,0.7152,0.0722,0,0,0.2126,0.7152,0.0722,0,0,0.2126,0.7152,0.0722,0,0,0,0,0,1,0],x.x)
D.bDn=new B.xk(null,null,D.cVs,A.AS)
D.aTk=new B.F(!0,A.aB,null,null,null,null,11,A.u,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fPi=new B.y("WORD DESIGN",null,D.aTk,null,null,null,null,null,null,null,null,null)
D.bDX=new B.bA(1,A.bd,D.fPi,null)
D.fOX=new B.y("Slides database",null,Ac.t4,null,null,null,null,null,null,null,null,null)
D.fM9=new B.y("Admin only \xb7 keep as many as you like",null,U.aSO,null,null,null,null,null,null,null,null,null)
D.dpF=w([D.fOX,A.bA,D.fM9],x.p)
D.bsr=new B.fj(A.ah,A.e,A.j,A.E,null,A.p,null,0,D.dpF,null)
D.bE_=new B.bA(1,A.bd,D.bsr,null)
D.fGs=new B.y("NGMY logo",null,A.fR,null,null,null,null,null,null,null,null,null)
D.bE2=new B.bA(1,A.bd,D.fGs,null)
D.fnc=new B.F(!0,A.ae,null,null,null,null,12,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fRl=new B.y("TALK TO THE EDITOR",null,D.fnc,null,null,null,null,null,null,null,null,null)
D.bEl=new B.bA(1,A.bd,D.fRl,null)
D.fAe=new B.y("Tell the AI what to change",null,Ac.t4,null,null,null,null,null,null,null,null,null)
D.bEG=new B.bA(1,A.bd,D.fAe,null)
D.bFS=new B.DZ(!0,"video/mp4")
D.flr=new B.F(!0,A.c,null,null,null,null,16,A.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fya=new B.y("Move presentations between devices",null,D.flr,null,null,null,!1,null,null,1,null,null)
D.bFW=new B.qv(A.e2,A.a4,A.f,D.fya,null)
D.fzp=new B.y("Edit in Slides",null,A.j2,null,null,null,null,null,null,null,null,null)
D.bFX=new B.qv(A.e2,A.A,A.f,D.fzp,null)
D.bGb=new B.ds(1,A.cn,D.bFX,null)
D.a0L=new B.a0(60988,"MaterialIcons",!1)
D.bJA=new B.a0(61352,"MaterialIcons",!1)
D.amz=new B.a0(61531,"MaterialIcons",!1)
D.bKN=new B.a0(63062,"MaterialIcons",!1)
D.bKU=new B.a0(63109,"MaterialIcons",!1)
D.bL6=new B.a0(63206,"MaterialIcons",!1)
D.ani=new B.a0(63238,"MaterialIcons",!1)
D.bLo=new B.a0(63338,"MaterialIcons",!1)
D.a1i=new B.a0(63365,"MaterialIcons",!1)
D.a1j=new B.a0(63367,"MaterialIcons",!1)
D.a1k=new B.a0(63368,"MaterialIcons",!1)
D.ant=new B.a0(63384,"MaterialIcons",!1)
D.bLF=new B.a0(63525,"MaterialIcons",!1)
D.bLI=new B.a0(63568,"MaterialIcons",!1)
D.bM2=new B.a0(983072,"MaterialIcons",!1)
D.bMq=new B.a0(983271,"MaterialIcons",!0)
D.aoC=new B.a0(983965,"MaterialIcons",!1)
D.aoD=new B.a0(983966,"MaterialIcons",!1)
D.bNi=new B.a0(984592,"MaterialIcons",!1)
D.bNA=new B.ae(A.uc,16,A.aB,null,null,null)
D.bNH=new B.ae(A.og,null,A.c,null,null,null)
D.aoM=new B.ae(A.qk,18,A.c,null,null,null)
D.bNZ=new B.ae(A.BW,18,O.lv,null,null,null)
D.bOF=new B.ae(A.jR,11,null,null,null,null)
D.bOQ=new B.ae(A.a11,null,A.eq,null,null,null)
D.bPn=new B.ae(A.rq,18,A.aB,null,null,null)
D.bPt=new B.ae(A3.C9,14,null,null,null,null)
D.bPu=new B.ae(A.ed,28,A.cs,null,null,null)
D.bPG=new B.ae(A.ql,20,A.c,null,null,null)
D.bPN=new B.ae(A.yP,null,null,null,null,null)
D.bPT=new B.ae(A.jQ,18,A.iN,null,null,null)
D.bPY=new B.ae(A.l5,null,null,null,null,null)
D.bKP=new B.a0(63065,"MaterialIcons",!1)
D.bQB=new B.ae(D.bKP,15,A.c,null,null,null)
D.bKV=new B.a0(63113,"MaterialIcons",!1)
D.bQH=new B.ae(D.bKV,null,A.ae,null,null,null)
D.bR4=new B.ae(A.u9,22,A.bM,null,null,null)
D.bRo=new B.ae(A.w9,18,null,null,null,null)
D.bRu=new B.ae(A.Cd,12,A.c,null,null,null)
D.bMW=new B.a0(983687,"MaterialIcons",!1)
D.bRF=new B.ae(D.bMW,null,A.bk,null,null,null)
D.bRO=new B.ae(A.ht,null,A.bk,null,null,null)
D.bS6=new B.ae(A.pc,22,A.c,null,null,null)
D.bSa=new B.ae(A.cx,13,A.c,null,null,null)
D.bSg=new B.ae(A.ed,26,A.aw,null,null,null)
D.bSk=new B.ae(A.ru,26,A.c,null,null,null)
D.OM=new B.ae(A.jR,8,A.c,null,null,null)
D.bSD=new B.ae(A.qk,40,A.c,null,null,null)
D.bSE=new B.ae(A.bIx,null,null,null,null,null)
D.bSI=new B.ae(A.uo,20,null,null,null,null)
D.bMV=new B.a0(983683,"MaterialIcons",!1)
D.bSS=new B.ae(D.bMV,null,A.b_,null,null,null)
D.bST=new B.ae(A.jR,16,A.bk,null,null,null)
D.bTd=new B.ae(A.rv,null,null,null,null,null)
D.apj=new B.ae(A.wb,22,A.c,null,null,null)
D.bTi=new B.ae(A.e5,17,A.c,null,null,null)
D.apk=new B.ae(A.jR,9,A.c,null,null,null)
D.bTn=new B.ae(A.w6,null,null,null,null,null)
D.bIO=new B.a0(57744,"MaterialIcons",!1)
D.bTu=new B.ae(D.bIO,null,null,null,null,null)
D.bTx=new B.ae(A.w6,16,null,null,null,null)
D.bNr=new B.a0(985181,"MaterialIcons",!1)
D.Hb=new B.ae(D.bNr,null,null,null,null,null)
D.bTJ=new B.ae(A.l5,16,A.bM,null,null,null)
D.bMO=new B.a0(983615,"MaterialIcons",!1)
D.bTL=new B.ae(D.bMO,12,A.c,null,null,null)
D.apq=new B.ae(A.yy,16,null,null,null,null)
D.bTT=new B.ae(A.e5,21,A.c,null,null,null)
D.bTY=new B.ae(A.ht,17,A.c,null,null,null)
D.bTZ=new B.ae(A.u9,null,null,null,null,null)
D.bUf=new B.ae(A.a1Z,20,A.aB,null,null,null)
D.bUu=new B.ae(A.oc,22,E.nc,null,null,null)
D.bUB=new B.ae(A.rs,13,A.ae,null,null,null)
D.bUD=new B.ae(A.aoo,20,A.aB,null,null,null)
D.bIv=new B.a0(57495,"MaterialIcons",!1)
D.bUI=new B.ae(D.bIv,null,null,null,null,null)
D.bUM=new B.ae(A.od,18,A.c,null,null,null)
D.bV7=new B.ae(A.ur,28,A.c,null,null,null)
D.bVi=new B.ae(D.ani,null,A.aC,null,null,null)
D.bVj=new B.ae(A.ql,22,A.c,null,null,null)
D.apz=new B.ae(A.a0H,16,null,null,null,null)
D.bW5=new B.ae(A.u9,32,A.c,null,null,null)
D.bWO=new B.ae(A.je,22,A.c,null,null,null)
D.bWS=new B.ae(A.ru,22,A.ae,null,null,null)
D.apO=new B.ae(A.uc,null,A.bY,null,null,null)
D.bXN=new B.ae(A.ub,18,null,null,null,null)
D.bYo=new B.ae(A.e5,18,A.bG,null,null,null)
D.a2o=new B.ae(A.cx,18,A.aB,null,null,null)
D.bYu=new B.ae(A.aoi,null,null,null,null,null)
D.bYV=new B.e3(null,null,null,null,null,null,null,null,null,null,"Type here\u2026",null,A.aT8,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.eF,!0,null,null,null,null)
D.fdh=new B.F(!0,A.bL,null,null,null,null,null,A.cw,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bZc=new B.e3(null,null,null,null,null,null,null,null,null,null,"Type here\u2026",null,D.fdh,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,A.af,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.eF,!0,null,null,null,null)
D.bZD=new B.e3(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"",null,null,null,null,null,null,null,null,null,null,null,A.eF,!0,null,null,null,null)
D.d1H=w([A.dH,A.aC],x.O)
D.c0J=new B.a9(A.a4,A.a8,A.x,D.d1H,null,null)
D.c0U=new B.a9(A.b3,A.b6,A.UZ,A.awQ,null,null)
D.bbz=new B.u(1,0.5568627450980392,0.5411764705882353,0.5215686274509804,A.q)
D.bgr=new B.u(1,0.23529411764705882,0.22745098039215686,0.21568627450980393,A.q)
D.bjW=new B.u(1,0.7254901960784313,0.7058823529411765,0.6784313725490196,A.q)
D.be6=new B.u(1,0.1803921568627451,0.17254901960784313,0.16470588235294117,A.q)
D.cN4=w([D.bbz,D.bgr,D.bjW,D.be6],x.O)
D.c1c=new B.a9(A.az,A.aE,A.x,D.cN4,A.HJ,null)
D.dpO=w([A.cT,A.bC,A.b5],x.O)
D.c1e=new B.a9(A.b3,A.b6,A.UZ,D.dpO,null,null)
D.drg=w([A.bk,A.cb],x.O)
D.c1j=new B.a9(A.a4,A.a8,A.x,D.drg,null,null)
D.dm0=w([A.hG,A.d1,A.aD],x.O)
D.c1l=new B.a9(A.az,A.aE,A.x,D.dm0,null,null)
D.d7T=w([A.cO,A.fe],x.O)
D.c1p=new B.a9(A.a4,A.a8,A.x,D.d7T,null,null)
D.dpH=w([O.lv,A.d1],x.O)
D.aqy=new B.a9(A.a4,A.a8,A.x,D.dpH,null,null)
D.bh8=new B.u(1,0.9686274509803922,0.8901960784313725,0.6313725490196078,A.q)
D.dpE=w([D.bh8,D.xT,A.c1],x.O)
D.c1u=new B.a9(A.a4,A.a8,A.x,D.dpE,null,null)
D.d3n=w([A.bj,A.cV,A.ei],x.O)
D.c1v=new B.a9(A.az,A.aE,A.x,D.d3n,null,null)
D.P1=new B.a9(A.a4,A.a8,A.x,A.HX,null,null)
D.bq2=new B.u(1,0.9019607843137255,0.7568627450980392,0.3607843137254902,A.q)
D.cG1=w([D.bq2,A.c1,A.js],x.O)
D.aqD=new B.a9(A.az,A.aE,A.x,D.cG1,null,null)
D.dds=w([A.tz,A.ay,D.Be],x.O)
D.c2x=new B.a9(A.a4,A.a8,A.x,D.dds,null,null)
D.brs=new B.u(1,0.43137254901960786,0.41568627450980394,0.396078431372549,A.q)
D.bf6=new B.u(1,0.6627450980392157,0.6431372549019608,0.615686274509804,A.q)
D.bl2=new B.u(1,0.3333333333333333,0.3215686274509804,0.3058823529411765,A.q)
D.d2u=w([D.brs,D.bf6,D.bl2],x.O)
D.aqE=new B.a9(A.a4,A.a8,A.x,D.d2u,null,null)
D.bha=new B.u(1,0.0392156862745098,0.06666666666666667,0.13333333333333333,A.q)
D.c4v=w([Av.ai_,D.bha],x.O)
D.c2G=new B.a9(A.b3,A.b6,A.x,D.c4v,null,null)
D.d0u=w([A.na,A.by],x.O)
D.c2K=new B.a9(A.b3,A.b6,A.x,D.d0u,null,null)
D.diH=w([A.aC,A.dE],x.O)
D.c2R=new B.a9(A.a4,A.a8,A.x,D.diH,null,null)
D.agS=new B.u(1,0.1803921568627451,0.25882352941176473,0.4392156862745098,A.q)
D.ayz=w([D.agS,D.jq,D.Lw],x.O)
D.c3i=new B.a9(A.az,A.aE,A.x,D.ayz,null,null)
D.cFU=w([A.dv,A.dM],x.O)
D.c3t=new B.a9(A.b3,A.b6,A.x,D.cFU,null,null)
D.dfD=w([A.xB,Ay.Fi],x.O)
D.c4h=new B.a9(A.a4,A.a8,A.x,D.dfD,null,null)
D.fI1=new B.y("Which Bio link?",null,A.cA,null,null,null,null,null,null,null,null,null)
D.c4s=new B.pT(null,D.fI1,null,null,null,null,null,null,null,null,!0,null,null,!1,null,null,null,!1,null,null,null,null,null,null,null,null,!0,null,null)
D.za=w([82,9,106,213,48,54,165,56,191,64,163,158,129,243,215,251,124,227,57,130,155,47,255,135,52,142,67,68,196,222,233,203,84,123,148,50,166,194,35,61,238,76,149,11,66,250,195,78,8,46,161,102,40,217,36,178,118,91,162,73,109,139,209,37,114,248,246,100,134,104,152,22,212,164,92,204,93,101,182,146,108,112,72,80,253,237,185,218,94,21,70,87,167,141,157,132,144,216,171,0,140,188,211,10,247,228,88,5,184,179,69,6,208,44,30,143,202,63,15,2,193,175,189,3,1,19,138,107,58,145,17,65,79,103,220,234,151,242,207,206,240,180,230,115,150,172,116,34,231,173,53,133,226,249,55,232,28,117,223,110,71,241,26,113,29,41,197,137,111,183,98,14,170,24,190,27,252,86,62,75,198,210,121,32,154,219,192,254,120,205,90,244,31,221,168,51,136,7,199,49,177,18,16,89,39,128,236,95,96,81,127,169,25,181,74,13,45,229,122,159,147,201,156,239,160,224,59,77,174,42,245,176,200,235,187,60,131,83,153,97,23,43,4,126,186,119,214,38,225,105,20,99,85,33,12,125],x.t)
D.a6o=new C.l_(2,"elegantNavy")
D.hps=w([A.Y7,D.jq,A.c1],x.O)
D.jX=new C.xK(0,"classic")
D.a6b=new C.jr("kuhowa_elegant_navy","Kuhowa \u2014 Bluu ya Kifalme",y.s,D.a6o,4294967035,4279378237,4290283019,D.jX)
D.aHW=new C.l_(3,"elegantGold")
D.bb4=new B.u(1,1,0.9882352941176471,0.9529411764705882,A.q)
D.bcb=new B.u(1,0.6509803921568628,0.5176470588235295,0.22745098039215686,A.q)
D.afh=new B.u(1,0.4196078431372549,0.2901960784313726,0.07058823529411765,A.q)
D.hoV=w([D.bb4,D.bcb,D.afh],x.O)
D.a69=new C.jr("kuhowa_elegant_gold","Kuhowa \u2014 Dhahabu",y.Q,D.aHW,4294966515,4281016592,4289102906,D.jX)
D.dMl=new C.l_(22,"goldRibbon")
D.hoR=w([A.Y7,D.jq,A.ig],x.O)
D.a62=new C.jr("kuhowa_gold_ribbon","Utepe wa Dhahabu","Pembe za bluu na dhahabu \xb7 almasi kati ya kila upande.",D.dMl,4294967035,4279378237,4291404327,D.jX)
D.dMm=new C.l_(23,"goldBaroque")
D.ag0=new B.u(1,1,0.9647058823529412,0.8941176470588236,A.q)
D.hoX=w([D.ag0,A.ay,A.js],x.O)
D.a63=new C.jr("kuhowa_gold_baroque","Ukanda wa Dhahabu","Ukanda mzito wa dhahabu \xb7 rosette kwenye pembe.",D.dMm,4294964964,4283053072,4292128567,D.jX)
D.dMo=new C.l_(4,"elegantEmerald")
D.bdu=new B.u(1,0.9647058823529412,0.984313725490196,0.9725490196078431,A.q)
D.bev=new B.u(1,0.054901960784313725,0.23137254901960785,0.1803921568627451,A.q)
D.hp2=w([D.bdu,D.bev,A.ig],x.O)
D.a64=new C.jr("kuhowa_elegant_emerald","Kuhowa \u2014 Zumaridi","Mpaka mwembamba wa dhahabu \xb7 vichwa vya kijani ya zumaridi.",D.dMo,4294376440,4279122734,4291404327,D.jX)
D.dMp=new C.l_(5,"elegantBurgundy")
D.biI=new B.u(1,1,0.9686274509803922,0.9647058823529412,A.q)
D.hp9=w([D.biI,A.aew,A.ig],x.O)
D.a67=new C.jr("kuhowa_elegant_burgundy","Kuhowa \u2014 Mvinyo","Mpaka mwembamba wa dhahabu \xb7 vichwa vya rangi ya mvinyo.",D.dMp,4294965238,4283043359,4291404327,D.jX)
D.dMi=new C.l_(19,"goldFiligree")
D.Me=new B.u(1,1,0.984313725490196,0.9529411764705882,A.q)
D.hoY=w([D.Me,A.ay,A.js],x.O)
D.a65=new C.jr("kuhowa_gold_filigree","Dhahabu ya Filigree","Mpaka wa dhahabu mara tatu \xb7 pembe za mapambo.",D.dMi,4294966259,4279378237,4292128567,D.jX)
D.dMj=new C.l_(20,"goldLaurel")
D.bpT=new B.u(1,0.47843137254901963,0.3607843137254902,0.0784313725490196,A.q)
D.hpa=w([A.Lp,A.ig,D.bpT],x.O)
D.a66=new C.jr("kuhowa_gold_laurel","Taji ya Dhahabu","Majani ya dhahabu kando \xb7 almasi kwenye pembe.",D.dMj,4294966776,4282000405,4291404327,D.jX)
D.dMk=new C.l_(21,"goldCrest")
D.aen=new B.u(1,1,0.9725490196078431,0.9254901960784314,A.q)
D.bq_=new B.u(1,0.4196078431372549,0.30980392156862746,0.07058823529411765,A.q)
D.hp_=w([D.aen,A.ay,D.bq_],x.O)
D.a6a=new C.jr("kuhowa_gold_crest","Muhuri wa Dhahabu","Medali za dhahabu kwenye pembe \xb7 shanga za lulu.",D.dMk,4294965484,4283053072,4292128567,D.jX)
D.dMn=new C.l_(24,"goldStar")
D.brj=new B.u(1,1,0.9882352941176471,0.9647058823529412,A.q)
D.hp3=w([D.brj,A.ay,D.jq],x.O)
D.a68=new C.jr("kuhowa_gold_star","Nyota ya Dhahabu","Nyota za dhahabu kwenye pembe \xb7 mstari wa bluu ndani.",D.dMn,4294966518,4279378237,4292128567,D.jX)
D.Hm=w([D.a6b,D.a69,D.a62,D.a63,D.a64,D.a67,D.a65,D.a66,D.a6a,D.a68],x.h)
D.qw=new C.mF(0,"blank")
D.SD=new C.mF(1,"title")
D.mR=new C.mF(2,"titleContent")
D.e5W=new C.mF(3,"twoColumn")
D.Dg=new C.mF(4,"section")
D.e5X=new C.mF(5,"comparison")
D.Iy=new C.mF(6,"flashcard")
D.Iz=new C.mF(7,"quiz")
D.IA=new C.mF(8,"worksheet")
D.aqZ=w([D.qw,D.SD,D.mR,D.e5W,D.Dg,D.e5X,D.Iy,D.Iz,D.IA],B.av("O<mF>"))
D.azF=w([Aa.Xu,A.dM],x.O)
D.kH=w([A.c1,A.bM,A.hT,A.hS,D.Be],x.O)
D.dIi=new C.j2("fireworks","Royal Fireworks","Thank you for celebrating with us",D.azF,D.kH)
D.bqd=new B.u(1,0.2901960784313726,0.050980392156862744,0.11764705882352941,A.q)
D.biG=new B.u(1,0.07058823529411765,0.011764705882352941,0.0392156862745098,A.q)
D.d0G=w([D.bqd,D.biG],x.O)
D.dI9=new C.j2("confetti","Golden Confetti","Together we rise",D.d0G,D.kH)
D.cYG=w([A.nO,A.X5],x.O)
D.dIa=new C.j2("crown","Crown of Glory","Built for our community",D.cYG,D.kH)
D.beU=new B.u(1,0.011764705882352941,0.10588235294117647,0.1803921568627451,A.q)
D.bik=new B.u(1,0.00392156862745098,0.023529411764705882,0.058823529411764705,A.q)
D.d4N=w([D.beU,D.bik],x.O)
D.uz=w([A.bL,A.aP,A.c,A.aL,A.al],x.O)
D.dI4=new C.j2("aurora","Aurora Gala","A brighter future, together",D.d4N,D.uz)
D.bjY=new B.u(1,0.027450980392156862,0.01568627450980392,0.00392156862745098,A.q)
D.dfJ=w([G.ae_,D.bjY],x.O)
D.dIl=new C.j2("champagne","Champagne Toast","Cheers to every member",D.dfJ,D.kH)
D.dIm=new C.j2("diamonds","Diamond Rain","Every member is a jewel",Y.aAk,D.uz)
D.bc0=new B.u(1,0.3568627450980392,0.16470588235294117,0.023529411764705882,A.q)
D.bhN=new B.u(1,0.10196078431372549,0.043137254901960784,0.00784313725490196,A.q)
D.dlg=w([D.bc0,D.bhN],x.O)
D.dI_=new C.j2("starburst","Golden Starburst","Thank you!",D.dlg,D.kH)
D.c4C=w([A.fa,A.xN],x.O)
D.ae9=new B.u(1,0.615686274509804,0.3058823529411765,0.3607843137254902,A.q)
D.Qz=w([A.oV,A.ic,A.vM,A.nP,D.ae9],x.O)
D.dIt=new C.j2("balloons","Luxury Balloons","Let's celebrate",D.c4C,D.Qz)
D.cXV=w([A.Xi,A.w],x.O)
D.dIh=new C.j2("galaxy","Galaxy Spiral","The sky is not the limit",D.cXV,D.uz)
D.bo6=new B.u(1,0.047058823529411764,0.00392156862745098,0.00392156862745098,A.q)
D.dcb=w([A.ka,D.bo6],x.O)
D.dIc=new C.j2("redcarpet","Red Carpet","Tonight we shine",D.dcb,D.kH)
D.blI=new B.u(1,0.10980392156862745,0.0784313725490196,0.0196078431372549,A.q)
D.bjJ=new B.u(1,0.0196078431372549,0.011764705882352941,0.00392156862745098,A.q)
D.dgG=w([D.blI,D.bjJ],x.O)
D.dI1=new C.j2("coins","Gold Coin Rain","Every contribution counts",D.dgG,D.kH)
D.do1=w([A.dv,A.hR],x.O)
D.dI7=new C.j2("lanterns","Sky Lanterns","Lighting the way together",D.do1,D.kH)
D.bg5=new B.u(1,0.0784313725490196,0.00784313725490196,0.0392156862745098,A.q)
D.cVN=w([A.xP,D.bg5],x.O)
D.dI3=new C.j2("hearts","Floating Hearts","Made with love",D.cVN,D.Qz)
D.bcD=new B.u(1,0.23137254901960785,0.0392156862745098,0.10980392156862745,A.q)
D.bdB=new B.u(1,0.058823529411764705,0.00784313725490196,0.027450980392156862,A.q)
D.dpC=w([D.bcD,D.bdB],x.O)
D.dIs=new C.j2("petals","Rose Petals","Thank you, from our hearts",D.dpC,D.Qz)
D.bp7=new B.u(1,0.00784313725490196,0.06274509803921569,0.0392156862745098,A.q)
D.dlC=w([A.lu,D.bp7],x.O)
D.dHZ=new C.j2("butterflies","Golden Butterflies","New beginnings",D.dlC,D.kH)
D.bkZ=new B.u(1,0.0392156862745098,0.0392156862745098,0.12156862745098039,A.q)
D.cWQ=w([D.bkZ,A.w],x.O)
D.dIk=new C.j2("neon","Neon Night","Let's go!",D.cWQ,D.uz)
D.bhq=new B.u(1,0.0196078431372549,0.00392156862745098,0.050980392156862744,A.q)
D.diT=w([A.LQ,D.bhq],x.O)
D.dIn=new C.j2("disco","Disco Ball","Party time",D.diT,D.uz)
D.bly=new B.u(1,0.11764705882352941,0.0392156862745098,0.1803921568627451,A.q)
D.dio=w([A.hG,D.bly],x.O)
D.dI2=new C.j2("sunrise","Golden Sunrise","A new day for our community",D.dio,D.kH)
D.di_=w([A.pP,A.dM],x.O)
D.dIo=new C.j2("pearls","Ocean Pearls","Deep roots, bright future",D.di_,D.uz)
D.bf0=new B.u(1,0.047058823529411764,0.11764705882352941,0.22745098039215686,A.q)
D.did=w([D.bf0,A.dM],x.O)
D.dIr=new C.j2("snow","Winter Gala","Warm wishes to all",D.did,D.uz)
D.bbd=new B.u(1,0.0784313725490196,0.13725490196078433,0.10196078431372549,A.q)
D.bco=new B.u(1,0.01568627450980392,0.03137254901960784,0.0196078431372549,A.q)
D.dos=w([D.bbd,D.bco],x.O)
D.dIg=new C.j2("laurel","Laurel Victory","We did it together",D.dos,D.kH)
D.bb3=new B.u(1,0.12156862745098039,0.06274509803921569,0.2,A.q)
D.big=new B.u(1,0.027450980392156862,0.011764705882352941,0.050980392156862744,A.q)
D.cUO=w([D.bb3,D.big],x.O)
D.dIq=new C.j2("ribbons","Silk Ribbons","Elegance in every step",D.cUO,D.kH)
D.bjp=new B.u(1,0.023529411764705882,0.01568627450980392,0.00784313725490196,A.q)
D.cFR=w([G.Bd,D.bjp],x.O)
D.dId=new C.j2("kente","Kente Pride","Proud of our roots",D.cFR,D.kH)
D.bmm=new B.u(1,0.1411764705882353,0.10196078431372549,0.0196078431372549,A.q)
D.bpt=new B.u(1,0.027450980392156862,0.0196078431372549,0.00392156862745098,A.q)
D.d6y=w([D.bmm,D.bpt],x.O)
D.dI8=new C.j2("trophy","Trophy Shine","Winners together",D.d6y,D.kH)
D.dik=w([Ap.LC,A.w],x.O)
D.dI0=new C.j2("shooting","Shooting Stars","Make a wish",D.dik,D.uz)
D.bbl=new B.u(1,0.10980392156862745,0.07058823529411765,0.023529411764705882,A.q)
D.ahM=new B.u(1,0.0196078431372549,0.011764705882352941,0.00784313725490196,A.q)
D.doL=w([D.bbl,D.ahM],x.O)
D.dIe=new C.j2("bokeh","Golden Bokeh","Shine bright",D.doL,D.kH)
D.bbM=new B.u(1,0.0392156862745098,0.058823529411764705,0.1411764705882353,A.q)
D.dd1=w([D.bbM,A.w],x.O)
D.dI6=new C.j2("orbits","Golden Orbits","Always moving forward",D.dd1,D.kH)
D.bp8=new B.u(1,0.0392156862745098,0.011764705882352941,0.047058823529411764,A.q)
D.d9p=w([A.afd,D.bp8],x.O)
D.dIb=new C.j2("flowers","Blooming Garden","Growing together",D.d9p,D.Qz)
D.bbx=new B.u(1,0.07450980392156863,0.027450980392156862,0.1803921568627451,A.q)
D.bcg=new B.u(1,0.00784313725490196,0.00392156862745098,0.03137254901960784,A.q)
D.dnt=w([D.bbx,D.bcg],x.O)
D.dI5=new C.j2("music","Music Party","Celebrate with us",D.dnt,D.uz)
D.bdg=new B.u(1,0.16470588235294117,0.0392156862745098,0.22745098039215686,A.q)
D.bpW=new B.u(1,0.027450980392156862,0.00784313725490196,0.047058823529411764,A.q)
D.cW_=w([D.bdg,D.bpW],x.O)
D.dIp=new C.j2("mandala","Royal Mandala","Harmony and unity",D.cW_,D.kH)
D.d9v=w([G.Bd,D.ahM],x.O)
D.dIj=new C.j2("sparklers","Golden Sparklers","Light up the night",D.d9v,D.kH)
D.dIf=new C.j2("city","City Lights","The whole city celebrates",D.azF,D.kH)
D.Hv=w([D.dIi,D.dI9,D.dIa,D.dI4,D.dIl,D.dIm,D.dI_,D.dIt,D.dIh,D.dIc,D.dI1,D.dI7,D.dI3,D.dIs,D.dHZ,D.dIk,D.dIn,D.dI2,D.dIo,D.dIr,D.dIg,D.dIq,D.dId,D.dI8,D.dI0,D.dIe,D.dI6,D.dIb,D.dI5,D.dIp,D.dIj,D.dIf],B.av("O<j2>"))
D.ewU=new B.z("","No ring")
D.eN7=new B.z("platinum","Platinum")
D.eJg=new B.z("glow","Glow")
D.eAC=new B.z("double","Double line")
D.ezw=new B.z("framed","Gallery frame")
D.ewq=new B.z("rosegold","Rose gold")
D.eK4=new B.z("jewels","Jeweled")
D.eGK=new B.z("aurora","Aurora")
D.CA=w([D.ewU,A.Tm,D.eN7,D.eJg,H.aOD,D.eAC,A.aOB,D.ezw,D.ewq,D.eK4,D.eGK],x.L)
D.cp9=w([D.a65,D.a66,D.a6a,D.a62,D.a63,D.a68],x.h)
D.bU6=new B.ae(G.am9,16,null,null,null,null)
D.b6c=new B.vF(A.bi,D.bU6,null,x.U)
D.bIX=new B.a0(58027,"MaterialIcons",!1)
D.bNG=new B.ae(D.bIX,16,null,null,null,null)
D.b6a=new B.vF(A.L,D.bNG,null,x.U)
D.bIY=new B.a0(58030,"MaterialIcons",!1)
D.bRM=new B.ae(D.bIY,16,null,null,null,null)
D.b6d=new B.vF(A.dU,D.bRM,null,x.U)
D.cvr=w([D.b6c,D.b6a,D.b6d],B.av("O<vF<q8>>"))
D.cD9=w([A.Bi,A.hn],x.O)
D.cDa=w([A.bj,A.be,A.ei],x.O)
D.Qo=w([A.bM,A.hS,A.hT,A.ay,A.nP],x.O)
D.cFX=w([A.c1,D.jq,D.Lw],x.O)
D.cGu=w([1,2,4,8,16,32,64,128,27,54,108,216,171,77,154,47,94,188,99,198,151,53,106,212,179,125,250,239,197,145],x.t)
D.eud=new B.z(4278913286,4280030216)
D.euv=new B.z(4279373061,4278518787)
D.euC=new B.z(4279898630,4278847235)
D.d5U=w([D.eud,D.euv,D.euC],x.n)
D.d1q=w(["\u265b","\u269c","\u2726"],x.s)
D.dMh=new C.xM("Royal Onyx & Gold",D.d5U,4292128567,4294370209,4294965479,3874020544,D.d1q)
D.eu0=new B.z(4278326799,4278598442)
D.eu2=new B.z(4278395929,4278258953)
D.eu9=new B.z(4278599728,4278327826)
D.dnT=w([D.eu0,D.eu2,D.eu9],x.n)
D.cWI=w(["\u269c","\u2756","\u2727"],x.s)
D.dMe=new C.xM("Imperial Emerald",D.dnT,4293050997,4294699968,4294180856,3872254170,D.cWI)
D.eu3=new B.z(4278455076,4278918747)
D.eu8=new B.z(4278587439,4278322714)
D.eum=new B.z(4279051376,4278455076)
D.dlX=w([D.eu3,D.eu8,D.eum],x.n)
D.ddK=w(["\u2654","\u2726","\u2748"],x.s)
D.dM8=new C.xM("Sapphire Crown",D.dlX,4291417834,4294967295,4294310143,3871986666,D.ddK)
D.euA=new B.z(4279894534,4283041554)
D.euM=new B.z(4281008906,4279042307)
D.euU=new B.z(4284221976,4279894534)
D.drY=w([D.euA,D.euM,D.euU],x.n)
D.cY3=w(["\u265b","\u2766","\u2726"],x.s)
D.dMa=new C.xM("Ruby Throne",D.drY,4293378685,4294963145,4294964466,3874213833,D.cY3)
D.euu=new B.z(4279371039,4281995100)
D.euE=new B.z(4280092723,4278714896)
D.euR=new B.z(4283045242,4279371039)
D.dof=w([D.euu,D.euE,D.euR],x.n)
D.dmj=w(["\u2655","\u2756","\u2727"],x.s)
D.dMf=new C.xM("Amethyst Palace",D.dof,4293314984,4294963421,4294702591,3873229802,D.dmj)
D.eu5=new B.z(4278519045,4280032287)
D.eun=new B.z(4279111184,4278321666)
D.euJ=new B.z(4280492839,4278716426)
D.dkK=w([D.eu5,D.eun,D.euJ],x.n)
D.dbZ=w(["\u2726","\u25c6","\u2742"],x.s)
D.dMc=new C.xM("Obsidian & Platinum",D.dkK,4293256418,4294967295,4294638330,3872378836,D.dbZ)
D.euB=new B.z(4279896588,4282194463)
D.euK=new B.z(4280553487,4279043334)
D.euS=new B.z(4283048488,4279896588)
D.dbs=w([D.euB,D.euK,D.euS],x.n)
D.dq4=w(["\u2766","\u273f","\u2727"],x.s)
D.dM9=new C.xM("Rose Gold Velvet",D.dbs,4293440672,4294960345,4294964979,3874214602,D.dq4)
D.eu6=new B.z(4278520340,4279180595)
D.eub=new B.z(4278718495,4278322443)
D.euy=new B.z(4279510591,4278520340)
D.cMM=w([D.eu6,D.eub,D.euy],x.n)
D.dcG=w(["\u269c","\u2736","\u2756"],x.s)
D.dMd=new C.xM("Midnight Brass",D.cMM,4291405148,4293975208,4294439914,3872837564,D.dcG)
D.ev6=new B.z(4294703086,4293780428)
D.ev2=new B.z(4294307549,4293187253)
D.ev7=new B.z(4294966517,4293977807)
D.d_j=w([D.ev6,D.ev2,D.ev7],x.n)
D.dd5=w(["\u269c","\u265b","\u2726"],x.s)
D.dMg=new C.xM("Ivory Marble & Gold",D.d_j,4289760572,4286209048,4280951062,3863625518,D.dd5)
D.euh=new B.z(4278978566,4280555024)
D.eux=new B.z(4279504137,4278518530)
D.euO=new B.z(4281211923,4278978566)
D.cXU=w([D.euh,D.eux,D.euO],x.n)
D.dn3=w(["\u2742","\u2726","\u265c"],x.s)
D.dMb=new C.xM("Onyx & Copper",D.cXU,4291856987,4294365880,4294964718,3873885630,D.dn3)
D.cGC=w([D.dMh,D.dMe,D.dM8,D.dMa,D.dMf,D.dMc,D.dM9,D.dMd,D.dMg,D.dMb],B.av("O<xM>"))
D.cIZ=w([A.ay,D.Be,A.hS],x.O)
D.eCS=new B.z("Original",null)
D.eD1=new B.z("Wide 16:9",1.7777777777777777)
D.eFn=new B.z("Landscape 3:2",1.5)
D.eCi=new B.z("Photo 4:3",1.3333333333333333)
D.eQY=new B.z("Portrait 3:4",0.75)
D.awZ=w([D.eCS,D.eD1,D.eFn,D.eCi,H.aOr,D.eQY],B.av("O<+(n,L?)>"))
D.ax_=w([A.hS,A.c4,A.b9,A.bv],x.O)
D.eFz=new B.z("","Original")
D.eHs=new B.z("circle","Circle")
D.eNV=new B.z("rounded","Rounded")
D.eOU=new B.z("triangle","Triangle")
D.eJx=new B.z("hexagon","Hexagon")
D.eHS=new B.z("diamond","Diamond")
D.eGJ=new B.z("arch","Arch")
D.CF=w([D.eFz,D.eHs,D.eNV,D.eOU,D.eJx,D.eHS,D.eGJ],x.L)
D.dHq=new C.lm("classic_blue","Classic Blue","Normal",A.bk,A.c,A.kA,A.d6,A.aJ)
D.dHG=new C.lm("campus_green","Campus Green","Normal",A.b_,A.n8,A.tC,A.h3,A.e7)
D.dHx=new C.lm("warm_sand","Warm Sand","Normal",A.dX,A.hT,A.bM,A.ii,A.nV)
D.dHE=new C.lm("slate_minimal","Slate Minimal","Normal",A.bs,A.aP,A.aL,A.M,A.aJ)
D.dHp=new C.lm("coral_fresh","Coral Fresh","Normal",A.cc,A.id,A.pI,A.kb,A.tu)
D.dHF=new C.lm("lavender_calm","Lavender Calm","Normal",A.b5,A.pL,A.xI,A.oT,A.jo)
D.dHr=new C.lm("ocean_breeze","Ocean Breeze","Normal",A.fe,A.rb,A.tr,A.tw,A.nW)
D.ah_=new B.u(1,0.9803921568627451,0.9607843137254902,1,A.q)
D.dHC=new C.lm("berry_pop","Berry Pop","Normal",A.f4,D.ah_,A.kv,G.YJ,A.Bj)
D.dHs=new C.lm("midnight_pro","Midnight Pro","Professional",A.aC,A.M,A.dv,A.kv,A.cr)
D.dHB=new C.lm("executive_navy","Executive Navy","Professional",A.d2,A.agf,A.d6,A.kZ,A.bL)
D.dHz=new C.lm("boardroom_charcoal","Boardroom Charcoal","Professional",A.al,A.bo,A.M,A.aP,A.cr)
D.dHt=new C.lm("corporate_steel","Corporate Steel","Professional",A.nZ,A.M,A.mx,A.fh,A.bL)
D.dHw=new C.lm("gold_luxe","Gold Luxe","Luxury",A.ms,A.dL,A.oU,A.lX,A.bM)
D.blD=new B.u(1,0.10196078431372549,0.0392156862745098,0.058823529411764705,A.q)
D.dHA=new C.lm("rose_gold_elite","Rose Gold Elite","Luxury",A.hn,D.blD,A.Yt,A.ic,A.nP)
D.dHD=new C.lm("platinum_night","Platinum Night","Luxury",A.cr,A.dM,A.bo,A.aP,A.aL)
D.dHH=new C.lm("emerald_prestige","Emerald Prestige","Luxury",A.aV,A.pS,A.f5,A.q_,A.jG)
D.dHo=new C.lm("royal_purple","Royal Purple","Luxury",A.n7,A.XA,A.jo,A.kv,A.Lo)
D.dHy=new C.lm("neon_pitch","Neon Pitch","Bold",A.b9,A.dM,A.M,A.b1,A.aL)
D.dHv=new C.lm("crimson_impact","Crimson Impact","Bold",A.by,A.ka,A.ej,A.rc,A.eV)
D.dHu=new C.lm("sunset_gallery","Sunset Gallery","Bold",A.fo,A.tu,A.kb,A.pI,A.mw)
D.HE=w([D.dHq,D.dHG,D.dHx,D.dHE,D.dHp,D.dHF,D.dHr,D.dHC,D.dHs,D.dHB,D.dHz,D.dHt,D.dHw,D.dHA,D.dHD,D.dHH,D.dHo,D.dHy,D.dHv,D.dHu],B.av("O<lm>"))
D.cUx=w([A.c1,D.jq],x.O)
D.dbJ=w(["\ud83d\ude00","\ud83d\ude03","\ud83d\ude04","\ud83d\ude01","\ud83d\ude0a","\ud83d\ude0e","\ud83e\udd29","\ud83e\udd73","\ud83d\ude07","\ud83e\udd17","\ud83d\ude4c","\ud83d\udc4f","\ud83e\udd1d","\ud83d\udc4d","\ud83d\udc4b","\ud83d\udcaa","\ud83d\ude4f","\u2728"],x.s)
D.eGv=new B.z("Faces & people",D.dbJ)
D.cJ2=w(["\ud83d\udca1","\ud83c\udfaf","\ud83d\ude80","\ud83d\udcc8","\ud83d\udcca","\ud83d\udccc","\ud83d\udccd","\ud83d\udce3","\ud83d\udd14","\ud83e\udded","\ud83d\udee0\ufe0f","\ud83d\udd27","\u2699\ufe0f","\ud83e\udde0","\ud83d\udcda","\ud83d\udcdd","\u270f\ufe0f","\ud83d\udcd6","\ud83d\uddc2\ufe0f","\ud83d\udcc5","\u23f0","\u2705","\u274c","\u26a0\ufe0f","\u2753","\u2757"],x.s)
D.esS=new B.z("Ideas & work",D.cJ2)
D.d1W=w(["\ud83c\udf3f","\ud83c\udf31","\ud83c\udf33","\ud83c\udf38","\ud83c\udf3c","\ud83c\udf3b","\ud83c\udf1e","\ud83c\udf08","\ud83c\udf0a","\ud83d\udd25","\ud83d\udca7","\u2744\ufe0f","\ud83c\udf19","\u2b50","\ud83c\udf1f","\u2600\ufe0f","\ud83c\udf40"],x.s)
D.eJC=new B.z("Nature",D.d1W)
D.dbS=w(["\ud83c\udfe0","\ud83c\udfeb","\ud83c\udfe5","\ud83c\udfe6","\ud83c\udfea","\ud83d\ude97","\ud83d\ude8c","\u2708\ufe0f","\ud83c\udf81","\ud83d\udcb0","\ud83d\udcb5","\ud83d\udcb3","\ud83d\uded2","\ud83c\udfc6","\ud83e\udd47","\ud83c\udf89","\ud83c\udf88","\ud83c\udfb6","\ud83c\udfb5","\ud83c\udfa4","\ud83d\udcf7","\ud83c\udfac","\ud83d\uddbc\ufe0f","\ud83d\udcbb","\ud83d\udcf1"],x.s)
D.eCQ=new B.z("Places & things",D.dbS)
D.d5r=w(["\u2764\ufe0f","\ud83d\udc9a","\ud83d\udc99","\ud83d\udc9c","\ud83e\udde1","\ud83d\udc9b","\ud83d\udda4","\ud83e\udd0d","\u2b06\ufe0f","\u27a1\ufe0f","\ud83d\udd36","\ud83d\udd37","\ud83d\udd34","\ud83d\udfe2","\ud83d\udd35","\ud83d\udfe1"],x.s)
D.eGO=new B.z("Symbols",D.d5r)
D.cUD=w([D.eGv,D.esS,D.eJC,D.eCQ,D.eGO],B.av("O<+(n,ai<n>)>"))
D.bbC=new B.u(1,0.22745098039215686,0.15294117647058825,0.03137254901960784,A.q)
D.cV_=w([A.c1,D.afh,D.bbC],x.O)
D.b5y=new B.ac(0,A.G,A.Ll,A.aIJ,40)
D.b5e=new B.ac(0,A.G,A.nT,A.et,8)
D.cVc=w([D.b5y,D.b5e],x.V)
D.cVI=w([4280171146,4280640491,4279080072,4278556265],x.t)
D.axn=w([4294677052,4294626325,4293870660,4294210230,4287323382,4282090230,4280472558,4283096704,4294967295,4279310375],x.t)
D.a3H=w([A.hS,A.ei,A.by,A.av,A.cc],x.O)
D.cWC=w(["All","Robotic","Nature","Warm","Bold","Clean"],x.s)
D.afx=new B.u(1,0.043137254901960784,0.0392156862745098,0.03137254901960784,A.q)
D.cWN=w([A.Yi,D.afx,A.Yi],x.O)
D.cWT=w([A.ig,D.jq,D.Lw],x.O)
D.eCC=new B.z(A.bi,D.a1j)
D.eE2=new B.z(A.L,D.a1i)
D.exG=new B.z(A.dU,D.a1k)
D.cXP=w([D.eCC,D.eE2,D.exG],B.av("O<+(q8,a0)>"))
D.cS=new C.J3(0,"text")
D.lK=new C.J3(1,"image")
D.f8=new C.J3(2,"shape")
D.SC=new C.J3(3,"pdf")
D.lf=new C.J3(4,"signature")
D.a6v=new C.J3(5,"bio")
D.cYM=w([D.cS,D.lK,D.f8,D.SC,D.lf,D.a6v],B.av("O<J3>"))
D.cYN=w([A.bp,A.cD],B.av("O<HZ>"))
D.cZp=w(["School","Documents","Sign & present"],x.s)
D.b5D=new B.ac(0,A.G,A.ahB,A.uT,28)
D.cZM=w([D.b5D],x.V)
D.d_4=w([4292128567,4279983648,4290190364,4279898632,4293436183,4279060385],x.t)
D.QH=w(["Rocket","Trophy","Party popper","Confetti ball","Balloon","Wrapped gift","Birthday cake","Sparkles","Star","Glowing star","Fire","Light bulb","Gem stone","Crown","Money bag","Dollar banknote","Chart increasing","Bar chart","Bullseye","Globe showing americas","Globe showing europe-africa","Sun","Rainbow","Cloud","High voltage","Red heart","Handshake","Graduation cap","Books","Open book","Pencil","Laptop","Mobile phone","Microphone","Musical notes","Camera","Video camera","Megaphone","Bell","Calendar","Alarm clock","Hourglass done","Key","Locked","Shield","Gear","Hammer and wrench","Magnifying glass tilted left","Package","Shopping cart","House","Office building","Hospital","Ballot box with ballot","Automobile","Airplane","Seedling","Deciduous tree","Evergreen tree","Palm tree","Sunflower","Cherry blossom","Herb","Four leaf clover","Water wave","Mountain","Lion","Tiger face","Dog face","Cat face","Elephant","Unicorn","Butterfly","Honeybee","Owl","Eagle","Dolphin","Turtle","Panda","Fox","Rabbit face","Monkey face","Penguin","Horse","Bird","Peacock","Parrot","Red apple","Pizza","Hot beverage","Soccer ball","Basketball","Artist palette","Clapper board","Robot","Brain","Check mark button","Red question mark","Speech balloon","Compass","Crystal ball","Puzzle piece","1st place medal","Smiling face with sunglasses","Grinning face with big eyes","Star-struck","Partying face","Thinking face","Hundred points"],x.s)
D.axO=w([A.hS,A.FD,A.aL,A.c,A.oV,A.ay],x.O)
D.eQm=new B.z(0.1,0.08)
D.eJA=new B.z(0.3,0.05)
D.ex8=new B.z(0.55,0.1)
D.eBy=new B.z(0.8,0.06)
D.eEO=new B.z(0.92,0.16)
D.eEh=new B.z(0.2,0.2)
D.eC2=new B.z(0.7,0.22)
D.eIe=new B.z(0.05,0.4)
D.eFf=new B.z(0.95,0.45)
D.exW=new B.z(0.12,0.7)
D.eAg=new B.z(0.88,0.75)
D.eAo=new B.z(0.4,0.9)
D.evo=new B.z(0.65,0.93)
D.eBb=new B.z(0.25,0.97)
D.eCz=new B.z(0.85,0.9)
D.eyQ=new B.z(0.5,0.04)
D.d0B=w([D.eQm,D.eJA,D.ex8,D.eBy,D.eEO,D.eEh,D.eC2,D.eIe,D.eFf,D.exW,D.eAg,D.eAo,D.evo,D.eBb,D.eCz,D.eyQ],x.G)
D.d0K=w([A.c,A.hn,A.aQ,A.aV],x.O)
D.e7y=new C.jN("office_blue","Office Blue",A.bk,A.d6,A.aJ,A.c,A.kA)
D.e7J=new C.jN("campus_green","Campus Green",A.b_,A.h3,A.e7,A.n8,A.tC)
D.e7z=new C.jN("sunset","Sunset",A.fo,A.kb,A.nV,A.id,A.pI)
D.e7A=new C.jN("midnight","Midnight",A.aC,A.kv,A.cr,A.M,A.dv)
D.e7L=new C.jN("classic","Classic",A.d1,A.dL,A.lY,A.hT,A.h1)
D.e7I=new C.jN("rose_gold","Rose Gold",A.hn,A.xQ,A.xP,A.vM,A.Bi)
D.e7t=new C.jN("ocean_teal","Ocean Teal",A.fe,A.tw,A.nW,A.rb,A.tr)
D.e7s=new C.jN("slate_pro","Slate Pro",A.bs,A.M,A.aJ,A.aP,A.aL)
D.e7r=new C.jN("neon_night","Neon Night",A.b9,A.b1,A.aL,A.dM,A.M)
D.e7D=new C.jN("lavender","Lavender",A.b5,A.oT,A.jo,A.pL,A.xI)
D.e7F=new C.jN("coral","Coral",A.cc,A.kb,A.tu,A.id,A.mw)
D.e7u=new C.jN("forest","Forest",A.hc,A.e_,A.cp,A.lZ,A.eq)
D.e7v=new C.jN("berry","Berry",A.f4,G.YJ,A.Bj,D.ah_,A.kv)
D.e7C=new C.jN("sand","Sand",A.dX,A.ii,A.nV,A.hT,A.bM)
D.e7H=new C.jN("ice","Ice",A.nZ,A.Fc,A.aJ,A.n5,A.fh)
D.e7x=new C.jN("charcoal","Charcoal",A.al,A.aP,A.cr,A.bo,A.M)
D.e7q=new C.jN("mint","Mint",A.aV,A.fI,A.h3,A.lZ,A.q_)
D.e7G=new C.jN("crimson","Crimson",A.by,A.na,A.ka,A.FB,A.rc)
D.beu=new B.u(1,0.996078431372549,0.9882352941176471,0.9098039215686274,A.q)
D.e7B=new C.jN("gold","Gold",A.ms,A.xB,A.oU,D.beu,A.lX)
D.e7E=new C.jN("aqua","Aqua",A.bS,A.Fq,A.oR,A.pN,A.oW)
D.e7w=new C.jN("plum","Plum",A.n7,A.xN,A.Bj,A.Fd,A.r8)
D.e7K=new C.jN("steel","Steel",A.d2,A.d6,A.bo,A.kA,A.kZ)
D.a3X=w([D.e7y,D.e7J,D.e7z,D.e7A,D.e7L,D.e7I,D.e7t,D.e7s,D.e7r,D.e7D,D.e7F,D.e7u,D.e7v,D.e7C,D.e7H,D.e7x,D.e7q,D.e7G,D.e7B,D.e7E,D.e7w,D.e7K],B.av("O<jN>"))
D.d14=w([A.c1,A.js],x.O)
D.SE=new C.hF(10,"rotate3d")
D.IC=new C.hF(8,"flip")
D.aIe=new C.hF(19,"spiral")
D.qx=new C.hF(16,"bounce")
D.aIh=new C.hF(9,"flipVertical")
D.d15=w([D.SE,D.IC,D.aIe,D.qx,D.aIh],x.i)
D.ee=w([1353184337,1399144830,3282310938,2522752826,3412831035,4047871263,2874735276,2466505547,1442459680,4134368941,2440481928,625738485,4242007375,3620416197,2151953702,2409849525,1230680542,1729870373,2551114309,3787521629,41234371,317738113,2744600205,3338261355,3881799427,2510066197,3950669247,3663286933,763608788,3542185048,694804553,1154009486,1787413109,2021232372,1799248025,3715217703,3058688446,397248752,1722556617,3023752829,407560035,2184256229,1613975959,1165972322,3765920945,2226023355,480281086,2485848313,1483229296,436028815,2272059028,3086515026,601060267,3791801202,1468997603,715871590,120122290,63092015,2591802758,2768779219,4068943920,2997206819,3127509762,1552029421,723308426,2461301159,4042393587,2715969870,3455375973,3586000134,526529745,2331944644,2639474228,2689987490,853641733,1978398372,971801355,2867814464,111112542,1360031421,4186579262,1023860118,2919579357,1186850381,3045938321,90031217,1876166148,4279586912,620468249,2548678102,3426959497,2006899047,3175278768,2290845959,945494503,3689859193,1191869601,3910091388,3374220536,0,2206629897,1223502642,2893025566,1316117100,4227796733,1446544655,517320253,658058550,1691946762,564550760,3511966619,976107044,2976320012,266819475,3533106868,2660342555,1338359936,2720062561,1766553434,370807324,179999714,3844776128,1138762300,488053522,185403662,2915535858,3114841645,3366526484,2233069911,1275557295,3151862254,4250959779,2670068215,3170202204,3309004356,880737115,1982415755,3703972811,1761406390,1676797112,3403428311,277177154,1076008723,538035844,2099530373,4164795346,288553390,1839278535,1261411869,4080055004,3964831245,3504587127,1813426987,2579067049,4199060497,577038663,3297574056,440397984,3626794326,4019204898,3343796615,3251714265,4272081548,906744984,3481400742,685669029,646887386,2764025151,3835509292,227702864,2613862250,1648787028,3256061430,3904428176,1593260334,4121936770,3196083615,2090061929,2838353263,3004310991,999926984,2809993232,1852021992,2075868123,158869197,4095236462,28809964,2828685187,1701746150,2129067946,147831841,3873969647,3650873274,3459673930,3557400554,3598495785,2947720241,824393514,815048134,3227951669,935087732,2798289660,2966458592,366520115,1251476721,4158319681,240176511,804688151,2379631990,1303441219,1414376140,3741619940,3820343710,461924940,3089050817,2136040774,82468509,1563790337,1937016826,776014843,1511876531,1389550482,861278441,323475053,2355222426,2047648055,2383738969,2302415851,3995576782,902390199,3991215329,1018251130,1507840668,1064563285,2043548696,3208103795,3939366739,1537932639,342834655,2262516856,2180231114,1053059257,741614648,1598071746,1925389590,203809468,2336832552,1100287487,1895934009,3736275976,2632234200,2428589668,1636092795,1890988757,1952214088,1113045200],x.t)
D.d1t=w([0.62,1],x.x)
D.d24=w([0,0.32,0.68,1],x.x)
D.mS=new C.hF(6,"zoom")
D.uN=new C.hF(4,"slideUp")
D.uM=new C.hF(2,"slideLeft")
D.d2d=w([D.mS,D.IC,D.uN,D.SE,D.uM],x.i)
D.d2I=w([A.c4,A.hn,A.ic,A.hS,A.c],x.O)
D.b5t=new B.ac(0,A.G,D.afM,A.uT,30)
D.d3s=w([D.b5t],x.V)
D.eiI=new B.t(0,-2.5)
D.eiy=new B.t(-2.5,0)
D.egM=new B.t(2.5,0)
D.d3v=w([A.SS,A.a6W,A.aJl,A.a6V,D.eiI,H.aJh,D.eiy,D.egM],x.dN)
D.HL=w([0,79764919,159529838,222504665,319059676,398814059,445009330,507990021,638119352,583659535,797628118,726387553,890018660,835552979,1015980042,944750013,1276238704,1221641927,1167319070,1095957929,1595256236,1540665371,1452775106,1381403509,1780037320,1859660671,1671105958,1733955601,2031960084,2111593891,1889500026,1952343757,2552477408,2632100695,2443283854,2506133561,2334638140,2414271883,2191915858,2254759653,3190512472,3135915759,3081330742,3009969537,2905550212,2850959411,2762807018,2691435357,3560074640,3505614887,3719321342,3648080713,3342211916,3287746299,3467911202,3396681109,4063920168,4143685023,4223187782,4286162673,3779000052,3858754371,3904687514,3967668269,881225847,809987520,1023691545,969234094,662832811,591600412,771767749,717299826,311336399,374308984,453813921,533576470,25881363,88864420,134795389,214552010,2023205639,2086057648,1897238633,1976864222,1804852699,1867694188,1645340341,1724971778,1587496639,1516133128,1461550545,1406951526,1302016099,1230646740,1142491917,1087903418,2896545431,2825181984,2770861561,2716262478,3215044683,3143675388,3055782693,3001194130,2326604591,2389456536,2200899649,2280525302,2578013683,2640855108,2418763421,2498394922,3769900519,3832873040,3912640137,3992402750,4088425275,4151408268,4197601365,4277358050,3334271071,3263032808,3476998961,3422541446,3585640067,3514407732,3694837229,3640369242,1762451694,1842216281,1619975040,1682949687,2047383090,2127137669,1938468188,2001449195,1325665622,1271206113,1183200824,1111960463,1543535498,1489069629,1434599652,1363369299,622672798,568075817,748617968,677256519,907627842,853037301,1067152940,995781531,51762726,131386257,177728840,240578815,269590778,349224269,429104020,491947555,4046411278,4126034873,4172115296,4234965207,3794477266,3874110821,3953728444,4016571915,3609705398,3555108353,3735388376,3664026991,3290680682,3236090077,3449943556,3378572211,3174993278,3120533705,3032266256,2961025959,2923101090,2868635157,2813903052,2742672763,2604032198,2683796849,2461293480,2524268063,2284983834,2364738477,2175806836,2238787779,1569362073,1498123566,1409854455,1355396672,1317987909,1246755826,1192025387,1137557660,2072149281,2135122070,1912620623,1992383480,1753615357,1816598090,1627664531,1707420964,295390185,358241886,404320391,483945776,43990325,106832002,186451547,266083308,932423249,861060070,1041341759,986742920,613929101,542559546,756411363,701822548,3316196985,3244833742,3425377559,3370778784,3601682597,3530312978,3744426955,3689838204,3819031489,3881883254,3928223919,4007849240,4037393693,4100235434,4180117107,4259748804,2310601993,2373574846,2151335527,2231098320,2596047829,2659030626,2470359227,2550115596,2947551409,2876312838,2788305887,2733848168,3165939309,3094707162,3040238851,2985771188],x.t)
D.d4_=w([23,114,69,56,80,144],x.t)
D.d4t=w(["Make the headline shorter","Add a paragraph about the Civic Registry","Write the whole thing in Swahili","Change the newspaper name"],x.s)
D.d4D=w(["HOME: the first tab. It has the NGMY brand, the Helper AI, loans, and the tech frames: Neural Link, Signal Grid, Core Protocol and the Vault Channel arcade.","TOOL HUB: the second tab. It holds the Business Card Creator, Menu Studio (restaurant menus and Bio link pages) and Business Essentials (invoices, receipts, flyers and other business papers).","SLIDES: the third tab. Presentations with many designs, an AI that makes decks, and Marriage documents.","NGMY HUB: the centre tab. Civic Registry, NGMY Store, Help Center and Insurance, Document Scanner, and the App Builder when it is switched on.","ADVISORS: the fifth tab. AI advisors you can chat with like real people. They help with jobs, applications, benefits and everyday questions, and they can answer in Swahili when you write Swahili.","CREATOR HUB: the sixth tab. Doc Share, Quote Calc, QR Generator, Play Zone, Kiswahili School, Recorder Studio, Video Studio and Phone Unlock.","PROFILE: the seventh tab. Theme, logout, legal pages and Worksheets (Projects, Cashier IOUs and receipts, and the Family Tree).","GROWTH INCOME: For now the Growth Income button (the wifi icon, top right of Home) works only for the admin: everyone else sees the same icon but it does not open. members buy an investment plan and earn daily by clocking in, on work days only (Monday to Friday, there is no clock-in on Saturday and Sunday). The wallet shows the balance, deposits, withdrawals and a history of the last two months, with the balance before and after each move. Missing 3 work days in a month removes the investment plan (a new plan must be bought), and the count starts again each month; a warning shows after the 2nd missed day. Clocking in 30 minutes late or more takes 30 percent off the earnings for that day. The investment plans are $5, $20, $30, $50 and $100; $100 is the most expensive plan and nothing above it is offered.","KING AND QUEEN CROWN: a crown badge for special members. A King or Queen receives a daily crown reward of one dollar, and the receipt shows in the wallet history.","WALLET: one balance everywhere in the app. The server keeps the balance so every phone shows the same number.","LOANS: Loan Services is a community help service: it helps members when they need help, for example funerals, buying a car, car repairs or family emergencies. For now the Loan Service button (top left of Home) works only for the admin: everyone else sees the same icon but it cannot be opened. The loan calculator (amount, interest rate and repayment period to try, the whole cost and every payment, and a button to make the tried terms the real loan terms) is for the admin only. The How it works frame is a five-step timeline (Apply, Review, Funds, Repay, Released). A loan is applied for with collateral, repaid in weekly payments, and the collateral is released back to the member when the loan is fully repaid. The admin sets the interest rate, the biggest loan and the repayment period in Loan Center, Loan terms; nothing is written into the screens. Before applying, the member sees the full cost (amount, interest, total to repay, number of payments, each payment, repayment period) and must tap I agree; the agreement is saved with the application. The application asks what the member needs help with (Funeral or Burial, Buy a car, Car repair, Family emergency, Other need), the date needed, the collateral with its estimated value and photos, and an optional family or guarantor contact. A loan shows as Pending, Approved, Paid Out, In Repayment, Repaid, Overdue or Declined, and the member sees a gentle reminder about the next payment.","NGMY STORE: buy and sell items inside the app. Approved members can open a store.","CIVIC REGISTRY: the community system for the M'MBONDO community. It registers members with a Registry ID card, counts members by state, records contributions with receipts, and lets Authorized Registrars enroll families. Registrars can print the community roster as a PDF.","CIVIC BIRTHDAYS AND FAMILY: the registry records children and their ages, shows a birthday reminder two days before, and congratulates a child on turning 18. Members can have a nickname that others search for, while registrars see the real name.","CIVIC VOTING AND STATE WALLET: the community votes on decisions inside the app, and each state has a wallet showing its funds, spending and trust deposits so the money is visible to everyone.","LIGHTNING GROUPS: groups inside the Civic Registry where people give together. A person asks to join with a name, phone number, state and address, and the group owner approves. The group shows named contribution rounds, receipts, who gave, who missed and how many times.","JOBS AND HELP: help finding jobs, house repairs and house workers, a Help Center with insurance, and the Helper AI for support.","CORE PROTOCOL: a collection of studios for curious minds: Universe, Electronics Lab (the AI Inventor now lives inside it as the AI button at the top), Construction Lab (real 3D wiring, plumbing and a house), Discovery Lab (Body Explorer, a real 3D human you can turn and look inside), Toolbox, Reaction Lab, Spark Painter, Rocket Lander, Title Animator and Circuit Lab. (Molecule Maker, DNA Lab, Ecosystem Lab, Balance Lab, Gear Lab, Laser Maze, Light Mixer, Orbit Studio, Swarm Studio, Chain Burst, Marble Music and Orbit Sequencer and Cipher Lab were removed and no longer exist.)","CITY AVATARS: the people of My House are the real characters from the NGMY 3D viewer files (Xbot.glb the X Bot, Michelle.glb the Dancer, Soldier.glb the Soldier), kept in the app (assets/avatars) and drawn with their own skeletons and animations (the X Bot and Soldier stand and walk, the Dancer dances). Their skin pictures are painted onto the body faces, and the body is thinned to a few thousand faces so the game stays quick, so they look a little more faceted than in the viewer. The X Bot is the one who goes through the rooms on the house tour and that you steer outside; in the tour sheet (Play) a Who walks the house? choice switches the tour guide to the Dancer, the Soldier or a plain person. The residents are the three characters too: they stay in the house, some stroll out into the garden for a while and go back in, and a resident with an open call for help shows a phone icon in the name. In every view of My House you can turn the camera all the way round (360) by dragging, with no button needed; Look all round (360) only moves you to the middle of the room at a normal distance. Names no longer float over the people in the rooms: tap a person to see their card. Outside, in the garden and town, the sky behind is space with stars, a galaxy, the Earth and the Moon. The Dancer is played slowly and kept on her spot, and the Soldier now faces the way he walks.","MY HOUSE, THE HALL AND THE CITY: the hall is a wide lobby: three doors in the middle of the back wall (the living room, the kitchen, the first bedroom) with a big video-wall TV on each side showing NGMY ads, the other seven doors on the two short walls, a blue carpet with the NGMY logo, sofas, armchairs, plants, lamps and consoles. In the Tour sheet, Book a hallway tour plays a tour of just the hall. Tapping a door asks whether to open it, close it or go through it. Outlets, switches, doors with their handles, TV frames, wall trim and the wiring job room are drawn so they never disappear when the camera turns, and from outside the house its walls hide the room. The residents live in the city (the Garden is the whole city): they walk about the streets, those with a call for help stand with a phone and a Help sign, and tapping the hospital or the shop building (or the Calls, Hospital, Shop and People buttons, or Community) opens those services over the city. In the city a Walk the city button gives you the walking controls, and Build adds roads, buildings and other things. Nobody is placed in the rooms during the house tour.","WALKING THE CITY: in the Garden (the whole city) press Walk the city and a round stick appears: slide a finger on it to walk, further from the middle is faster, and the Run and Jump buttons make the person run and jump. Walk up to the front door of the house, the hospital or the shop and the person goes in; inside the hospital walk onto the blue mat to admit the sick and up to a bed to treat the patient, inside the shop walk onto the yellow mat for food and the purple mat for medicine, and walk onto the green mat to go out. Near an animal an Act button feeds it for a point, and near a car, ambulance or fire truck it lets you get in and drive it with the stick and park it. When somebody calls for help the phone rings with a call banner: Answer opens the calls. Phone, hospital, shop, animals and cars are all in the city, and the hall of the house shows only three doors: the other rooms are reached from the map or from their own door.","ELECTRICAL SAFETY SCHOOL: every wiring lesson and job is judged by one safety engine. A job is CORRECT only if the connections are on the right terminals, complete and safe; a device that works (a TV that plays, a fan that spins) is never proof of safe wiring. Swapped hot and neutral, a missing neutral or ground, neutral used as ground, hot touching ground, loose or bare wires and a fan on a plain box are all UNSAFE and can never pass. Results are CORRECT, INCORRECT, UNSAFE, INCOMPLETE or REQUIRES VERIFICATION. The lessons have Learn (a wrong wire is refused and explained), Practice (anything is allowed and power-on shows the consequence with arcs, sparks, smoke or flames) and Test (silent, graded on submit with score, explanations and violations). The wiring job has a Test mode switch and Submit for inspection in its settings. A Wire guide lists U.S. wire colors, exceptions and the rule to verify. Diagram lessons (three-way switch, fan with a light kit) are in the Construction Lab menu.","CITY LIFE AND THE HALL, UPDATE: seen from outside the house, the walls on your side are left out (like a doll house) so the TVs and the logo carpet are never hidden at any angle, and the TV pictures also show when seen from behind. The house outside has a big wide NGMY poster on the back wall and different framed posters on the sides. In the city every resident is busy with a real job (the nurse on duty at the hospital, feeding the animals, teaching at the school, washing the car, cooking, resting on the bench, watering the flowers), with props such as steam, grain and water, and a small name for the activity. The city has many more houses. Inside the hospital there are a nurse, a doctor and patients lying in their beds, and you treat them by walking to them. A Full screen button in the city turns the game on its side like a video and keeps only the stick, Run, Jump and Act buttons. When somebody calls, a phone-call screen with a green Answer and a red hang-up button appears; answering opens a text message with what the person needs, a button that shows where they are and a button that takes you to fix it.","WIRING CONTROLS, UPDATE: in a wiring lesson or job, tap a house wire to pick it up (it glows), then tap the screw, wire nut or fixture wire it joins and they connect; tap a joined wire, nut or screw again to take it off. Ceiling lights and fans are shown from the side so the house wires, fixture wires and nuts are all in view. Swiping up looks up and swiping right turns right in every 3D view. The wiring job has Look up (from the floor to the ceiling) and Behind the TV buttons, the Voltage tester sits at the end of the tray where Unplug was, and tapping something plugged in pulls the plug (a TV no longer opens full screen). The house has a Look up at the ceiling button. The Construction Lab menu has a new Safety inspection job (a test job marked on submit). The plumbing sink, basin, mirror and shut-off valves are bigger and look more like a real bathroom sink.","LESSON ROOMS, UPDATE: every lesson room is now big and bare (no furniture, no bathroom fixtures in the electrical lessons), so the outlets and the switch are in the open and nothing hides them or the TV. The wall TV is big by default (Cinema 150) and the TV button lets you choose the wall it hangs on: back, left or right.","CITY AND PLUMBING, UPDATE: the city is now a big town (1800 by 1400) with streets both ways and houses spread over nearly all the land; far-away houses are not drawn while you walk close by, to keep it quick. The Full screen button sits in the row with the door buttons next to Living room. The top buttons are smaller. The Construction Lab menu no longer has the Learn mode and Practice mode buttons or the Community card (the community lives in the city). Seen from outside the house, a whole wall is left out or kept, never half a wall. In the lessons and the wiring job the wall, studs, box and cable cannot be tapped, only the wires and screws. The plumbing job now shows a blue Next box that says exactly what to do, with a Show me button that picks the tool and turns the view to the spot; it shows only the parts the job needs; and a leak shows big drops, a puddle and a red LEAK label that names the joint, with the instruction to turn the water off and tighten it with the wrench.","CITY ADS AND TRAFFIC: the city has about a dozen billboards along the streets, each playing a different NGMY ad (new ads for NGMY Jobs, Loans, Kiswahili School, Civic Registry, Core Protocol, Build and Fix and Create, plus the NGMY app ads), big houses with two big TVs on the front that play ads too, and a huge billboard behind the main house with the NGMY logo and New Global Movement for Youth. Big buses and big police cars with flashing lights drive themselves up and down the streets, each with a billboard on both sides playing an ad, and two helicopters circle in the sky pulling banners that play ads. The sign that says how many rooms still need work is at the top of the house, above the roof. Every person in the city is a different colour.","NEIGHBOURHOOD WORK AND TRADE: every building in the city can be walked into (hospital, shop, school, fire station, every house and big house), and each has its own job done by walking onto a mat: teach the class at the school, check the equipment at the fire station, sell what you carry at the market stall in the shop. The buildings are about half as big again, and the houses stand well back from the streets so there is room to walk beside the road. Electric poles carry wires along the streets with street lights on them, and street lamps stand between the poles. From time to time a street light goes out (it is dark with a red sign) and a neighbour rings because a house has no power. A street light is fixed with the real ceiling-light wiring lesson (black to black, white to white, ground to ground, then the cover); a house is fixed by walking in and onto the red mat at its breaker panel, which opens the wiring job. Fixing earns points. Crates of goods lie about the farm: pick one up with the action button, carry it to the shop and sell it at the market stall, then come back for more. In Build mode a house, big house, shop, billboard, car, tree, bench or crate can be sold for points. Full screen: double tap the two buttons to hide them, double tap where they were to bring them back. The controls are raised from the edges of the phone. The small buttons beside the zoom buttons flip the up-down and left-right swipe, and the choice is remembered. The Construction Lab menu has the jobs first (with a new Neighbourhood jobs tile) and the lessons and reading last. Double tap anywhere in the house, a room or the city and the camera takes you to that spot, like a map. The city has fewer cars: two buses and two police cars drive round two loops of road and never turn back, and every junction on the loops is a roundabout. In the wiring job a plugged-in TV is not a button: go behind it and tap the plug on the wall to pull it out. Pulling a switch or outlet out of the wall keeps it there (only a burnt one is thrown away so a new one can go in). Every billboard has a picture on each side, so nothing is upside down or backwards from behind. The buses and police cars are bigger, with big billboards. In the city the phone rings at least once a minute: a house with no power, a street light out, or somebody sick who must be taken to the hospital desk. A room whose wiring is right has no red boxes left, even if the final test was not run. Swiping left and right turns the view the way your finger goes. The house tour sheet has a new design. Full screen inside a room puts you inside it, like a normal house. Getting out of a car puts you beside it, never inside it, and a person who ends up stuck is moved out. A dark house shows its breaker panel, outlet and switch with red frames, and tapping a red tag (No power, Light out) takes you to that house or street light. The city no longer redraws itself every two seconds, and nothing happens in the city while a job page is open. Work comes one job at a time from houses chosen by chance: while you work no new call rings, a job you put off with the Later button waits on a list and starts when you leave the house you fixed. Turning calls down or not answering counts as a miss; two misses in a row bring a call from the City office, three close the game for 5 hours. The Hide tags button (next to Full screen and Rotate) hides the red tags and the rooms-still-need-work sign. Every outlet, switch and ceiling light or fan in a room is marked fixed on its own as soon as it is wired right, so only the ones still to do keep a red frame, and the sign over the room names what is still to wire. A call opens as a card in the middle of the screen (it turns with the full screen game) with Show me the way (a yellow dashed line on the ground and a tall yellow beam lead to the place), Take me there and Later. A Drone button gives a film of the city from the air: choose the whole city, billboards and the NGMY logos, houses (and inside a big one), the hospital, shop and school inside, or the traffic. The hall has a camera in each corner: tap one to look from there. The Kiswahili School ad has a long conversation, three exchanges a play and new phrases each time. In a house with no power in the city, tap the breaker panel, the outlet or the switch (or their red frames) to start the wiring job straight away. The drone is one smooth flight with no cuts: it starts high, comes down and passes in front of each billboard and round its side, never going into it, and the houses and the buildings are flown past the same way before it goes inside. Indoor furniture is smaller, a TV never stands on a cabinet or the floor (TVs hang on the wall), and a wardrobe, shelf, lamp or console is moved aside so it never hides the TV on the wall. The city land is much bigger (2600 by 2100) with houses behind my house, down both sides and over every green stretch, each with room in front of its door so you can always walk up to it, and a longer street system. Downtown, at the south end, has NGMY office towers, the NGMY company building, NGMY stores, NGMY gas stations and a second NGMY hospital; the stores and gas stations can be walked into like a shop. The biggest billboard, NGMY Town, stands over the middle road, and a NGMY Town billboard stands at each corner of the land; every sign has a picture on both sides. The drone passes each billboard slowly in an arc of about three seconds, goes round all the signs and follows the helicopters to show their banners. Swiping now turns the view the way the finger goes: swipe right looks right, swipe up looks up (the choice is saved under a new name so old choices do not interfere). The message at the top is placed under the buttons in full screen. Nothing in the city is switched off because it is far away: the houses, the billboards and the signs stay on, seen from the drone or from the ground. Every tower and the NGMY company building has billboards on the south face and on the north face (the side the town looks at), and the big NGMY Town sign shows a picture on both of its faces. In the hall the camera is only the camera (no label), and the wall TVs read the right way round from outside the wall too. In a house with no power each fixture turns green on its own when it is fixed, the work you did is kept when you leave and come back, and the panel turns green when the whole house has power; in your own rooms a fixed outlet, switch or light has a green frame, an amber frame while it is started, and a red one while it is not. The work you do on a house, an office level or a street light is kept in the town. Take me there puts you a few steps in front of the door (or beside the street light). People walk fast in the big town and the drawing skips what is off the screen. Missing calls never closes the game; after a few the office only rings to remind you. Every office tower and the NGMY company building can be walked into: the lobby has an elevator (walk onto the blue mat or tap it) with buttons for every level, the level number is always shown, there is a balcony with a glass railing (step on the green mat to look over the town), and you can get a job from an office with no power on any level, take the elevator to that level and fix its breaker panel. The elevator ride is shown: the person walks to the doors, they slide open, the person steps in, the doors close, the camera is inside the car with a display above the doors and a big number that counts up or down level by level with a little shake, a chime and the doors open at the new level where the person walks out. The Orders button opens the delivery board: orders for food, groceries, medicine, packages and letters are picked up at a shop, a store, the hospital, a tower or the company building and carried to a house (follow the yellow line); they pay points. Five other couriers, Maya, Kofi, Amara, Tunde and Zawadi, walk the town doing the same: an order they take is gone, and the first to deliver 8 orders wins the round and a bonus. The race table shows everybody. There are many more big NGMY ad billboards round the edge of the land (north, south, east and west) and on the roofs and sides of the towers and the company building; every one plays the NGMY ads one after the other, a new one every 7 seconds. NEW IN THE CITY: the drone has a special request for the edge billboards only (the big boards round the edge of the land), the billboards request now includes the edge boards, the tower boards and every other billboard, and every drone film always starts at the big sign that welcomes everybody to NGMY Town. The rival couriers now walk round the buildings (never through walls) and go in and out of the doors, out of sight for a moment inside. When all the fixtures of a dark house or office are connected, a green Complete work button appears (in the chips row, and next to the drone button in full screen): press it to check the wiring, bring the power back and get paid. Energy: about five minutes of walking use it all up, then you must rest for three minutes (then you are back at half energy) or eat; a long battery bar next to the page title shows it, and under the Run and Jump buttons in full screen, with no numbers. Food from the shops (apple, juice, sandwich, burger meal) gives energy back and costs points. The shops are now real: shelves with tins, boxes, bottles and loaves, drinks fridges, fresh fruit, a till and a cashier, and walking up to a shelf or the counter (or the Buy things chip) opens the shopping list: food, food for the town and medicine, all paid with the points you earned. Cars only have about two minutes of gas; a gas bar shows beside the energy bar while you drive, and there are many gas stations round the town where you press Buy gas (or buy a gas can in the gas shop). The licence office sells the Uber licence for 40 points. Uber stations (a yellow and black shelter with a car beside it) have people waiting: drive up with the licence and they get in, take them to their house (follow the yellow line) and the fare is paid when you arrive. MORE SWITCHES, OUTLETS AND LIFE: the Construction Lab has ten more wiring lessons (double-pole, three-way, four-way, smart or motion or timer, and combination switches; split half-switched, 4-wire 240 V, 3-wire 240 V, 240 V only and isolated-ground outlets), and every house or office job now asks for a different outlet and a different switch, so people learn them all by fixing them. Calls and jobs only come in the NGMY City map (the garden with the billboards), never in the rooms of the house. Houses stand much further apart. The incoming call screen shows who is calling on top and the Decline, Later and Answer buttons in a row below. Energy lasts about two minutes of walking, then the person crawls on the ground for 20 seconds: if they have not bought food in a shop by then they lose 5 stars, rest for three minutes and come back at half energy. Thirst (buy water or juice) and feeling unwell (buy pain pills) make walking tire faster, so everything the shops sell is needed at some time. The stars balance is shown next to the zoom in button all the time. Thirst also lasts two minutes. Nothing counts against the person while they are working on a job or away from the city map. When all the wiring of a house is connected the work is handed in by itself. Wires and screws are easy to tap: a tap near one picks it. The shop screen is laid out in columns to fit a phone on its side with nothing to scroll, and every pop-up shrinks to fit the screen. Every elevator car and every level of a tower has big TVs playing the NGMY ads, a ride takes at least 3 seconds and longer for every level it climbs, and inside a building the view is close in so you feel you are inside. ADVISOR BROWSER: the live browser of the advisors (the computer an advisor uses to look things up and fill forms) is free for the first 10 minutes of use. After that a payment pop-up appears (never a text message) asking $5.99 for 2 more hours, by card with Stripe or with Cash App (a code, a screenshot of the payment, and an admin approves it). The hours must be used within a week; they are counted quietly in the background only while the browser is open, and what is left is still there when the person comes back. Hours not used within the week are lost, and the next time the person gets only 5 minutes before the pop-up asks again. One browser task may spend at most 2 dollars. In the elevator car the camera is inside the car with the person, the doors in front and a big TV on each side. A finished job pays a random number of stars from 10 to 35. The Uber stations and their signs are called NGMY Uber. During the drone flights nothing far away is left out, and small far pictures are drawn flat so the flight stays smooth. PHONE VIEW: in the garden (NGMY City) a phone icon between the Full screen and the living room chips opens the city across the whole phone standing up, like a phone video, not turned on its side; it opens the drone chooser straight away, with buttons to close, start or stop the drone and hide the tags. The drone sweeps past billboards sideways instead of climbing and dropping on one spot, and the helicopter and vehicle shots are short sweeps round them, so it never hangs in one place. Inside a building the camera never leaves the walls, so turning round never shows a wall from behind or a TV switching off, and the rooms are deeper and taller. In a tower the way out is only on the ground floor; the other levels use the elevator down. Walking, the drone and the elevator ride move in step with every frame and the camera sticks to the person, so it is smooth. Finishing the wiring or plumbing of a room, a lesson or an added outlet pays stars at once. ROADS, TRAFFIC LIGHTS AND ACCIDENTS: the city streets are big two-lane roads with a double yellow line, and the buses and police cars drive in their own lane, keep their distance, never drive through each other, and stop at red lights. Traffic lights stand at the crossings with zebra crossings; the little walking person is green only while the cars have red, so cross then. Anybody on foot who walks in front of a moving car is run over: an ambulance takes them to the hospital, they are weak, and medicine and food are ordered from the stores to the hospital. Those emergency orders go to the top of the Orders board and other users (and you) can deliver them for stars. HIDE ALL BUTTON: the eye icon next to the hide-tags button (and Hide all in the chip list) hides every button, map, banner and card so only the city shows, also while the drone flies; tap the top left corner where the buttons were to bring them back. ROOMS ARE VIEWED FROM INSIDE: in my house every room now opens with you standing inside it, with the four walls and the ceiling round you (like the big buildings), not looking at the room from outside; the See the whole room button still shows the cut-away view from above. A room is only finished (green) when its wiring AND its plumbing (bathroom, kitchen) are done. In a dark city house or office the breaker panel stays red until all four things are fixed (two outlets, the ceiling light, the switch): the ceiling light now has its own red frame and label in the middle of the ceiling, and the panel label says what is still to fix. CARS AT THE CORNERS: the two loops of buses and police cars meet at the two ends of the middle street. Only one vehicle at a time may be in each of those corner zones; the others wait at its edge and go on when it is out, so cars never touch or drive through each other and none gets stuck (tested over 50 minutes of traffic). DARK HOUSE WIRING: a device that runs (the TV works) can still be wired NOT safely, and then its frame stays red: the job counts a fixture as fixed only when it is in, finished and wired right. After you leave the wiring bench the message and the red labels now say why (not put in, not finished, or works but not wired safely, with the reason). Tapping a blue spot with nothing in your hand puts in the device that belongs there. FAR BILLBOARDS: every billboard keeps showing its real ad from any distance and any angle (the biggest few play smoothly, the rest show a picture of the ad that is made again about five times a second), never a plain colour. JOB COMPLETE: when a job from a phone call is finished the screen says JOB COMPLETE with the stars, and the next job only starts about 10 seconds later; the other red tags in the city are other houses still without power. BILLBOARD STUDIO: in the Construction Lab, a small Billboards button sits at the top right corner of the My House frame. It opens a page with ONE billboard on its own: six kinds to choose from (highway board, tall tower sign, neon board, rooftop board, big screen, town gate), a 30 second drone shot round it (wide shot, coming in, close slide, left side, behind the board, right side, pull back and up; Stop the drone ends it), and an Edit button where the person can change the big words, the smaller words and the web address, put their own logo and their own picture from their gallery, pick the colours, or go back to the NGMY default. By default the board plays the NGMY logo, the NGMY words and the NGMY ads one after another. What the person changes is kept on their device. Update: all the boards are much bigger. Joined boards: two signs on one board, or three signs on one long board. Separate boards: Three in a row (three boards in one straight line), Two lines of three (six boards, a line facing front and a line facing back), and Billboard park (four boards: front, back and both sides). Each sign has its own words, logo, picture and colours (Edit, then Which sign). The default NGMY poster words shrink to fit beside the logo so they never run over it. The rooftop board stands on a big house with big TVs and NGMY logos on its front and sides and the NGMY hall carpet on its back. Poles always stop below the board. While the drone flies there is no title or bar; Hide everything removes the buttons and a tap on the screen brings them back. The shot is a crane move, a push in, a slide along the face, then round both sides and the back, then up and away. The Family Tree ad in the Electronics lab (TV channel NGMY Tree Story and the Family Book and Tree cartoon ad) was redesigned: a real tree grows with the grandparents at the roots, the parents on the big branches and the children at the top, a round face and name tag on every branch, hearts joining the couples, and a card that says NGMY Family Tree: add every person, link mums, dads and kids, keep it for ever. Billboard park has its own planned 30 second drone shot: a high wide shot, a crane down and push in to the front board, a sweeping arc to the right board, a long curve behind to the back board, round to the left board, then up and away. On the home screen the Civic Registry ID card shows the plus button when it is the only card, so other cards can be added; once another card is added the plus leaves the Civic card. All the drone shots are now dramatic: a high bird-eye shot that dives to a low hero angle, a low slide across the face, whips round the sides, swoops up high, dives behind, and pulls away into the sky; each move starts slowly, whips and settles. In the Construction lab wiring job, an installed outlet or switch has a button Take it out and put in a different one, which leaves the empty box so a different kind of outlet or switch can be put in. Latest billboard update: no boards are joined any more. Billboard layouts are Two far apart, Three in a row, Three scattered far, Skyline, Two lines of three and Billboard park, with boards of different heights and sizes, the taller ones standing behind and some far from the others. The chooser shows two billboards in every row. Every kind of billboard has its own camera move, and each layout has its own tour where the drone flies from board to board. The rooftop board stands on a tall house with one big TV on each side of the door, and its board, TVs, logo and frame no longer vanish when the angle changes. Cipher Lab was removed from Core Protocol. In the city wiring job the person chooses what goes into an empty box from the tray (nothing is picked for them), and any outlet counts for an outlet and any switch for a switch as long as it is wired right, so the red frames in the house turn green when the job is really done. The zoom buttons answer at once with a big step and keep zooming while held, and pinching measures from the last step so the zoom is never thrown back. FAMILY GAMES: in the Family Tree there is a games button (a game controller icon) next to the Family Book button, and the redesigned Tree display settings sheet has a Family Games card. The system makes games by itself from the people in the tree: Family Kahoot (10 timed questions with coloured answer tiles, points for speed, a streak bonus and a podium against family members), Fireside Stories (a painted African village at night, with huts, a baobab, the moon and a living village: someone pounds grain, a girl carries water on her head, children roll a hoop, a goat grazes, a drummer plays. The oldest person in the tree sits by the fire and talks, with the words coming out while the mouth moves; the other elder and the children look at whoever speaks, blink, nod, ask things, gasp, laugh and clap, and the fire grows with every right answer), Safari Journey (a painted bus drives to a stop for each question, a villager asks, a wrong answer is a flat tyre), Line Up (tap two people to swap them until the family stands in the right order, then everybody cheers) and Village School (the teacher writes each question on a chalkboard, then a report card with the mistakes explained). Small trees get culture questions with Swahili family words and African proverbs. The person who created the tree can write up to two games of their own, in the Kahoot style, with up to 12 questions each, and everyone who opens the tree can play them. Players win Family Stars on this phone, with badges: Little Seed, Young Listener, Storyteller, Village Pride, Keeper of Roots and Elder of the Fire. The Family Games hub now shows eight games, two in every row: Family Kahoot, Fireside Stories, Calabash Catch (slide a basket under the gourd with the right answer as gourds fall), Plant the Tree (drag the children of a family onto the branches and watch the tree grow), Who Am I (a shadow turns into a face as clues come), Safari Journey, Line Up and Village School. Memory Drums, the old Family Test and the old Elder Order were removed. CITY PEOPLE: everybody who lives or works in the city (the seven residents, the shopkeeper, the nurse, the teacher, the firefighters, the couriers) is now an ordinary-looking person built by the game itself instead of a robot or soldier model cut down to blobs: a face with eyes, eyelids, brows, nose and lips, ears, hair (short, long, afro, head wrap, thin and grey), a neck and collar, shirt, trousers or skirt, shoes, and hands with four fingers and a thumb. Women and men have different builds and the people differ in height. They never depend on a character file, so they look exactly the same with no internet. People far from you are drawn with fewer faces and people near you with full detail, and a built body is remembered and only moved, so the city is quicker, especially on an iPad; the 3D view also skips whole blocks of the town that are behind you, too far or off the side of the screen. You still start as an ordinary person, and the X Bot, the Dancer and the Soldier can still be chosen as your own character on the tour sheet. EARTH GLOBE OFFLINE: the Universe Explorer Earth Globe map data is kept on the phone after the first visit and preloaded, so the globe opens with no internet; if it cannot load it says so and has a Try again button. TITLE ANIMATOR: more than 24 title movements, 8 letter looks and 20 different painted background scenes (not just colours); Download the animation saves the whole animation as a looping GIF, not a single picture. BUSINESS CARDS: the cards on the Home screen are saved safely: a background refresh can no longer write an old list over a card that was just added, there is a second copy of the cards kept beside the first that restores them if the first is damaged, and a business card put on Home is also kept on the account when one of the 5 cloud places is free, so it is still there after the app is reset. The studio card list uses a key made from the email so saved cards are not lost when the app is built again. Every business card has a Share my card button (the NFC icon on the card on Home and next to Download in the studio): it makes a contact file (vCard) with the name, job, company, phone, email, website, address and logo, shows a QR code any phone camera can read, opens the phone share sheet so the card can be sent by AirDrop to a phone held close, copies the contact text, and writes the card to an NFC tag on phones that allow it (Chrome on Android; iPhone Safari does not allow web pages to use NFC, and Apple Wallet passes need an Apple developer certificate, so they are not available yet).","AI FAIR USE: all NGMY AI runs on the server and needs a signed-in account. To keep the shared AI key safe, each person can use AI only so fast: if you go too fast you see You are using AI too fast, please wait a little and try again, and you can use it again after a short wait. Big jobs (job applications, documents, books, slides, news, translations, pictures, voice) have tighter limits than normal chat. If the AI company is busy you see that the AI is busy and to try again in a minute, and the app does not keep asking. There is also a daily cap for the whole app. Admins can see the limits, the heaviest users and the newest abuse, and change the limits without a new version of the app.",'CONSTRUCTION LAB: a trade school in real looking 3D, MY HOUSE (top card of the Construction Lab): a finished furnished house with 5 bedrooms, 3 bathrooms, a kitchen, a living room and a hall, each drawn as a cut-away 3D room. A little map in the corner shows where you are, tap a room to go there, or use the door buttons; red marks a room whose wiring needs work and blue one whose plumbing does. Signals in the room (a red No power sign, a blue Needs plumbing sign, bare pipe stubs) show what is wrong; the Wiring and Plumbing buttons, or a tap on the outlet, light, toilet or sink, open the same hands-on jobs and the room is finished when the job is. Furniture, walls, floor, ceiling and doors only react while their own edit button is on: Furniture (add, move with arrows, turn, change colour, remove), Walls (paint one wall or all), Floor (wood, carpet or tile), Ceiling, Doors (open and close). A Learn button opens short beginner cards on safety, wiring, plumbing, framing and tools. In My House you are inside the room by default (a low view, like standing in the doorway) and a button switches to a view of the whole room from above. A \ud83c\udfac Tour button plays a life-like person (an adult with a face, hair, arms, legs and a real stride) who comes in through the front door and walks through the whole house like a film, in the time you choose (30 seconds, 1, 2, 3 or 5 minutes), after every TV is switched on. The walk is planned round the furniture and fixtures, so the person never goes through a wall, a chair or a table; in the living room and the bedrooms the person picks up the remote and switches the ad on the TV, in the kitchen they take a drink from the fridge, in the bathrooms they wash their hands, and between rooms they open the door and walk through into the hall. The doors really swing open and show the next room behind them; when the person opens a door the camera moves in towards it, then the picture dissolves into the next room (the hall, a bedroom, a bathroom) where the camera starts on the door they come out of, and the door closes behind them as they walk on. TVs on the wall go from 100 inches to 150, 200 and a whole-wall TV: each is as big as the free stretch of wall allows, never over a door, with nothing in front of it, and the person on the tour stands beside the TV and not in front of it. The hall is wider and deeper, has all ten doors on its back wall and a big TV on each end wall. A \ud83d\udd04 Look all round (360) button puts you in the middle of a closed room (solid ceiling and four walls) to turn all the way round by dragging; a double tap on the floor walks you to that spot, and from above or in the garden a double tap takes the view closer to where you tapped. The view can never go under the floor. The garden is a big lawn you can walk all the way round, and the house outside has windows and doors on all four sides, a porch, a chimney and a roof; with the Furniture button you can add and move trees, pines, bushes, flowers, fences, street lamps, benches, cars, roads, ponds, swings, sheds and dog houses. The cards on the Construction Lab home screen are centred, with a glowing round icon and a soft colour. COMMUNITY (a card on the Construction Lab home screen and a Community button in My House): the seven people who live in the house (Ama, Joseph, Grace, Daniel, Fatima, Papa Moses and Mama Rose, each with their own look) get hungry over time, can fall sick, and become unhappy when their room has no power or their sink leaks; they stand in their rooms in the house as people you can tap, with a word over their head showing how they are. The player feeds them (food), gives medicine, sends the sick to the hospital (three beds: each patient needs treating before their care runs out and goes home better), and buys food and medicine in the shop with points. People who are starving, sick or unhappy for too long lose health and can die. Calls for help arrive in plain words ("My outlet is dead and it is dark in here", "The sink leaks"): Go and fix it opens the house on that room, the real wiring or plumbing job is done, and when it works the call finishes and earns 15 points; wiring and plumbing also break by themselves from time to time so there is always something to do. Hospital discharges, feeding and medicine earn points too. Everything is saved (the people, supplies, calls and which rooms are fixed or broken) and time passes only gently while the app is closed. Inside a room the view stays inside the house: you can look about a little but you cannot swing round behind the walls, and a Go outside button (and Go inside in the garden) is the only way out. Everything in a room is drawn in layers (the floor and walls first, then what is fixed to them like the TV, the plates, the frames and the doors, then the furniture and the person), so the edges of a TV or a door never disappear when you turn to the side and the person never shows through a door, a wall or their own body. The person is built from rounded parts with real joints (a head with a face and hair, shoulders, elbows, knees, hands and shoes), the foot that is down always stands on the floor, and the walk keeps a body-width away from furniture and walls. A TV button puts a wall TV (five models, the big ones up to 77 inches) in a room, or in every room, and turns TVs on and off. An Add button adds outlets, GFCI outlets and light switches to a room that you wire yourself with the wiring bench, a Map button shows or hides the little map (which shrinks to fit the screen), and the Start from a bare house button makes every room need its wiring and plumbing so you can wire the whole house first. The ceiling of a room can hold a light or a fan. All the lessons on the lab home screen (Wall outlet, Light switch, GFCI outlet, Ceiling fan, Sink drain, Faucet supply lines, Build and fix a house, Learn the trades: eight tiles, four on each side) play inside a furnished room with a big TV on the wall showing the NGMY Jobs ad; the ceiling light is already in and only the thing being taught is waiting (red), and once it is done you can use it: flip the switch, plug in a lamp, TV or hair dryer, watch the fan spin. The house also has a Garden (a view of the house from outside with a tree, a path and a mailbox): the front door of the living room leads out to it and the front door there leads back in. Tap a door in a room to open it and walk through it into the next room or the hall, like in a game. Every room can be fixed, even the ones shown as finished: a finished room opens finished and you can pull devices out and wire them again. In a wired room tap an outlet to plug something in (five big TVs from Beovision to Apple TV that play NGMY ads, a lamp, a toaster or a hair dryer) or unplug it, tap the wall switch (or the light) to turn the light or the ceiling fan on and off, and tap a TV to watch it full screen with its own brand home screen. Bedrooms have ceiling fans. Wire a room, Plumb a room and Fix a house on the lab home screen all open My House at a room that needs that job. In the wiring jobs a wrong wire can be fastened just like for real and it burns or trips the breaker when the power goes on, touching a live wire shocks (in Learn mode it hurts nothing but the shock still happens, in Practice mode it costs a life), the wire buttons that are already fastened disappear, the screw labels are kept away from the wires, finished devices have a bright frame so they are easy to find from far, finished rooms have a painted ceiling with crown moulding and no bare beams, and a TV in the room job opens full screen when tapped. The Construction Lab downloads on its own when its button is pressed, so the Core Protocol opens quickly. A TV that is plugged in and on plays the real NGMY ads right on its screen, flat on the glass like a normal TV, without opening it (tap it to watch full screen). There is a Voltage tester: in My House pick the Tester button and tap an outlet, the switch or the light (it glows and beeps when there is power and stays dark when there is none), and in the wiring jobs it is the Voltage tester right after Look in the devices tray. The Construction Lab menus are now at the top like in the Electronics Lab, the home screen of the lab is a short list of tiles with a Learn mode and Practice mode switch, a device already put in can be tapped again to open it or pull it out, and a tap that misses never moves the view. opened from the construction helmet button next to the AI button at the top of the Electronics Lab, and also as a tile in the Core Protocol. Every model can be turned with a finger, zoomed by pinching or with the zoom buttons, and any part can be tapped to zoom in and read what it is. Lessons: Wall outlet (black hot wire to the brass screw, white neutral to the silver screw, bare copper ground to the green screw), Light switch (two black wires on the two brass screws, white wires joined with a wire nut), GFCI outlet (power in on the LINE screws, the LOAD screws are covered with yellow tape, press RESET then TEST), Sink drain (build the tailpiece, P-trap and trap arm, tighten the slip nuts, run the water and see the water seal that blocks sewer gas), Faucet supply lines (hot red hose on the left, cold blue hose on the right, then open the shut-off valves) and a whole house cut open at the front that can be built stage by stage (slab, framing, plumbing rough-in, electrical rough-in, drywall, fixtures, roof), where a tripped breaker and a leaking slip nut can be fixed and each fixture opens its own lesson. The electrical lessons start with the breaker ON and refuse any wire until it is turned OFF, and every wrong connection is explained in plain words. BUILD A WHOLE ROOM (also WIRE A ROOM quick start, and a Skip to the wiring button in the tray, which do the framing, cable and drywall for you so you start straight at wiring the outlets, switches, light and fan with coloured labelled screws, the tester, the TV and the switch test; the room has a window wall, a door wall and the working wall): a project with three phases (rough-in, drywall, devices). Rough-in: mount wall boxes, ceiling boxes and a fan box on the studs with the drill, and unroll the cable through the studs and ceiling (a wrong route gives an error). Drywall: hang the sheets, cut holes with the drywall saw, screw them to the studs, then tape, mud, sand and paint. Devices: wire outlets, several switches, a ceiling light and a ceiling fan, each with a switch to test, then plug in a TV and other appliances. The screw terminals have different colours (brass gold hot, silver neutral, green ground) and show a label when tapped. A Behind the wall / In front button lets you choose which side of the wall you look from instead of the camera turning by itself. Learn mode tells you what to do next and explains every wrong move; Practice mode only speaks up when something is done wrong, and real wiring mistakes shock (three lives) or burn. SERVICE CALLS (Fix a house, learn and practice): a customer rings with four problems chosen from twelve kinds (tripped breaker, no hot water, leaking slip nut, leaking crimped joint, dead outlet, flickering light, burnt outlet, tripped GFCI, running toilet, dripping faucet, hole in the wall, clogged sink), a different mix every time; use Look and test, then the right tool from the toolbox (hand, screwdriver, pliers, wrench, crimp tool, plunger, new flapper, new outlet, drywall patch); wires must have their breaker switched off first. PLUMBING JOBS (learn and practice): fit out a bathroom (flange, wax ring, toilet, bolts, shut-off valve, supply hose, then the sink) or a kitchen sink piece by piece, with the order checked (the app says why a piece cannot go there yet), the main water valve turned off before cutting into pipes, joints tightened with the wrench, and finally the water turned on to find leaks.',"MY HOUSE, THE WORLD OUTSIDE: go outside from the living room (Go outside, or the front door) into a big garden town you can walk and decorate. It starts with a main street, a lane up to the house, a crossroads, a shop, a hospital with a red cross, a fire station with a fire truck, a school, a second house, an ambulance and a car, trees, a pond, lampposts, a bench and fenced animals. In Furniture mode the Add tray offers road pieces (straight, corner, T-junction, crossroads) that snap to a grid and jump a whole piece with the arrow buttons so they always join up, buildings (house, shop, hospital, fire station, school), cars, a fire truck, an ambulance, animals (dog, cat, cow, sheep, chicken, horse) that wander about, trees, bushes, flowers, fences, a bench, a swing, a shed and a doghouse. Everything can be moved, turned, recoloured and removed with the buttons, and nothing reacts to a tap unless the Furniture button is on. Walk about puts a person in the world: hold the arrows to walk (up is away from you), or double tap a spot to send them there; they walk round buildings, vehicles, trees and fences, and walking up to the front door takes them back into the living room. The camera never goes under the ground.","ELECTRONICS LAB: build real circuits with 56 parts in two tool rows, both at the top above the board (swipe sideways), under a redesigned top bar with the lab name, a live count of working and burnt parts, buttons for ready-made circuits, repair, clear and help, and a challenge card with a progress bar: batteries, solar panel, hand crank, wind turbine, switch, fuse, bulb, LED, motor, radio, TV, fan, speaker, clock, calculator, phone charger, WiFi router, siren, toy car, kettle, desk lamp, party lights, voltmeter and ammeter, step-down converter (brings big battery volts down to 3 to 9 V so a phone, tablet, headphones or smart watch is safe), 5 V regulator (gets hot), diode (one way, 0.7 V drop), light sensor, LED strip, water pump, hair dryer, headphones, smart watch, tablet, fridge, washing machine, blender, drone, power drill, torch, neon sign, microwave, doorbell, security camera, game console, heart monitor, aquarium, lighthouse, disco ball, robot and toaster. Each gadget needs the right volts and the right way round: the lab explains why something is not working (not connected, only one end wired, plugged in backwards, flat battery, switch open, too few volts, burnt out and why). A 1.5 volt battery starts flat and must be charged by a solar panel first. The TV shows NGMY animation channels: it opens on the big screen by itself for a minute when it first switches on, and tapping it 3 times quickly opens the big screen. Each TV brand shows its apps in its own design: Samsung with a Smart Hub bar along the bottom, LG with webOS wide launcher cards, Sony with Google TV rows and a picture card, Apple TV with big rounded icons that rise when selected, and Bang and Olufsen with a quiet warm text menu. The TV has 10 NGMY animation channels, a remote control at the top middle of the big screen (CH minus, CH plus, TV, Apps, Ads) and 8 apps inside the TV screen (there is no Growth Income ad or app on the TVs): NGMY Ads (every promotion as cartoons), Civic Registry, Jobs, NGMY Store (African and traditional food, supporting the Congolese and African community), Kiswahili, Doc Scanner, Invoices and Calendar. Each ad is a little cartoon with a kid character. Premium devices with screens play the NGMY cartoon ads on their own screens: TVs (Samsung Neo QLED 8K, LG OLED evo G5, Sony Bravia 9, Apple TV 4K, Bang and Olufsen Beovision), phones (iPhone 18 Pro Max with a Dynamic Island, iPhone Fold, Galaxy S26 Ultra, Galaxy Z Fold7, Pixel 10 Pro XL, Xiaomi 16 Ultra, Huawei Mate 80 Pro Max, OPPO Find X9 Ultra, Honor Magic V5, vivo X300 Pro), tablets and readers (iPad Pro, Kindle Scribe), computers (MacBook Pro, iMac, Pro Display XDR monitor, Sony laser projector, luxury car touchscreen, Apple Vision Pro). Tapping a screen 3 times opens its big screen (a phone opens like an iPhone, a computer shows a desktop with a dock and app windows). Tapping it 4 times opens a size sheet so the screen can be made bigger (never smaller than normal). Sample circuit: Phone and TV on one battery, using a step-down converter. The AI button at the top of the lab opens the AI Inventor, which builds what you describe on the lab board.  Every battery and solar panel can only give so many amps: when the gadgets connected ask for more, a red warning triangle appears on the power source, its volts sag, gadgets switch off and the lab explains why. The lab saves your board and your challenges by itself, so nothing disappears when you leave. The challenges sit behind a flag button in the top bar (with a number on it for how many are left), next to the dark glowing AI button and the help button.","BODY EXPLORER: a real 3D human body built from medical anatomy data. You can turn it, zoom in, switch layers (skin, muscles, organs, skeleton, blood vessels), tap any part to learn about it, hear the heart beat, and take a quiz.","KISWAHILI SCHOOL: learn English and Swahili with pictures and the teacher Mwalimu Amina.","FAMILY TREE AND FAMILY BOOK: build a family tree, then keep a Family Book library of up to six books. The AI can write a whole new book from the tree, in English or Swahili, and the cover can be designed. The look of the top of each book can be chosen from eight header designs (classic leather, ornate gold, parchment, clean paper, midnight, emerald, rose vintage, modern) with the Header button, and the book title also shows as a small running title on every page.","NOTES: business notes with search, photos and cards.","NGMY QUOTES: make a picture quote with many designs, word sizes, text styles, your own photo and the NGMY logo. It also makes NEWS: a newspaper page with a headline, article and your picture, written by an AI that knows NGMY.","BIO STUDIO: link-in-bio pages with designs such as Neural Core, Quantum Grid and Mech Terminal, and visitors can react to a page.","MENU STUDIO: restaurant menus published as a link.","BUSINESS CARD CREATOR: design and download business cards.","INVOICES AND QUOTE CALC: invoices, receipts and estimates with NGMY watermarks.","DOC SHARE, QR GENERATOR, RECORDER STUDIO, VIDEO STUDIO, PLAY ZONE AND PHONE UNLOCK: tools in the Creator Hub.","APP BUILDER: describe an app and the AI builds it, including real web apps you can publish.","DOCUMENT SCANNER: scan papers with the phone camera.","GAME CENTER AND VAULT ARCADE: arcade games you can play. Game bets and wins have their own receipts and do not appear in the wallet history. Games played offline are saved on the phone and counted on the balance, then applied to the account in order as soon as the phone is online again, and every device updates."],x.s)
D.d4W=w(["Add a slide about\u2026","Make this slide shorter","Translate everything to Swahili","Add a slide with our contact details","Change the style to luxury","Remove the last slide"],x.s)
D.d6D=w([null,4294626325,4294828103,4283096704,4280472558,4294210230,4294677052,4293870660,4287323382,4282090230,4294967295,4279310375],x.Z)
D.d6H=w(["Kichwa cha Mtu: [Kiasi kilichosalia au thamani]","Mbuzi Mbili","Ngyoka","Mmoko"],x.s)
D.bh=new C.uU(0,"rectangle")
D.eR=new C.uU(1,"circle")
D.lg=new C.uU(6,"hexagon")
D.d6W=w([D.bh,D.eR,D.lg],x.m)
D.oo=w([99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22],x.t)
D.ah7=new B.u(1,0.24313725490196078,0.47843137254901963,0.30980392156862746,A.q)
D.d7t=w([D.ah7,A.e_],x.O)
D.exp=new B.z("","Classic")
D.evD=new B.z("caps","Bold caps")
D.eIh=new B.z("elegant","Elegant")
D.eOe=new B.z("shadow","Shadow")
D.eBW=new B.z("neon","Neon glow")
D.eLZ=new B.z("marker","Highlighter")
D.eOs=new B.z("stamp","Stamp")
D.eAO=new B.z("threed","3D")
D.eIO=new B.z("fire","Fire")
D.eJM=new B.z("ice","Ice")
D.eHr=new B.z("chalk","Chalk")
D.eHw=new B.z("comic","Comic")
D.eOv=new B.z("sunset","Sunset")
D.ePJ=new B.z("softglow","Soft glow")
D.eKN=new B.z("lowercase","Lowercase")
D.eI_=new B.z("double","Echo")
D.ePS=new B.z("whisper","Whisper")
D.ayJ=w([D.exp,D.evD,D.eIh,D.eOe,D.eBW,H.aOC,D.eLZ,D.eOs,H.aOE,D.eAO,H.aOw,D.eIO,D.eJM,D.eHr,D.eHw,A.Tm,D.eOv,D.ePJ,D.eKN,D.eI_,D.ePS],x.L)
D.d8N=w([3,5,7,10,12,15],x.t)
D.dai=w([A.c4,A.bM,A.c,A.eG,A.cT],x.O)
D.dz6=new C.tv(10,"cardWorld")
D.D8=new C.BH(3,"rounded")
D.dPg=new C.lp("world","NGMY World",D.dz6,D.D8,4278918980,4278521378,4294967295,4280118271,"logo","Roboto","Roboto","Roboto","a modern digital news site: clear, confident and direct, a strong plain headline and a one-sentence summary",!1,"none",!0,!1)
D.dz7=new C.tv(11,"cardSplit")
D.dPc=new C.lp("business","Business Wire",D.dz7,D.D8,4294967295,4294507260,4279179050,4292943150,"logo","Roboto","Roboto","Roboto","a clean business news site: precise, informative and professional, with a plain, strong headline",!1,"none",!1,!1)
D.dz8=new C.tv(12,"cardBreaking")
D.dPp=new C.lp("breaking","Breaking Red",D.dz8,D.D8,4278913807,4280944139,4294967295,4292943150,"logo","Roboto","Roboto","Roboto","a breaking-news broadcast: urgent, factual and clear, a punchy headline and a tight summary",!1,"none",!0,!1)
D.dz9=new C.tv(13,"cardFeature")
D.dPi=new C.lp("feature","Tech Feature",D.dz9,D.D8,4294967295,4294047225,4279179050,4280640491,"logo","Roboto","Roboto","Roboto","a modern feature article: informative, engaging and well explained",!1,"none",!1,!1)
D.aGL=new C.tv(6,"circle")
D.aGF=new C.BH(4,"circle")
D.dPm=new C.lp("parchment","Royal Circle",D.aGL,D.aGF,4294241234,4293450160,4281278992,4285211048,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a stately royal edition: dignified, noble and ceremonial",!0,"sepia",!1,!1)
D.dPb=new C.lp("ocean","Blue Ocean",D.aGL,D.aGF,4293916415,4292602622,4278984254,4278413729,"centered","NgmyAbril","NgmyAbril","NgmyOldStandard","a calm, trustworthy paper: clear, steady and reassuring",!1,"none",!1,!1)
D.dzc=new C.tv(7,"rail")
D.aGE=new C.BH(1,"double")
D.dPd=new C.lp("forest","Green Leaf",D.dzc,D.aGE,4293983732,4292672743,4278529558,4279599165,"centered","NgmyAbril","NgmyAbril","NgmyOldStandard","a calm community paper about growth and togetherness: gentle, hopeful and clear",!1,"none",!1,!1)
D.aGI=new C.tv(1,"sideBySide")
D.dPr=new C.lp("herald","NGMY Herald",D.aGI,D.D8,4294967295,4294308863,4280163147,4286331629,"split","NgmyAbril","NgmyAbril","NgmyOldStandard","the proud NGMY Herald: warm, hopeful and community-minded, in NGMY purple",!1,"none",!1,!1)
D.aGH=new C.tv(0,"classic")
D.a5I=new C.BH(9,"shadow")
D.dPq=new C.lp("daily","The Daily",D.aGH,D.a5I,4294967295,4294243570,4279308561,4292225064,"bar","NgmyAbril","NgmyAbril","NgmyOldStandard","a modern daily newspaper: crisp, clear and energetic, with a punchy headline",!1,"none",!1,!0)
D.dza=new C.tv(2,"splash")
D.aGG=new C.BH(6,"cutCorner")
D.dPa=new C.lp("tabloid","Big Tabloid",D.dza,D.aGG,4294967295,4294965216,4279308561,4292943176,"bar","Roboto","NgmyAbril","Roboto","a bold tabloid: exciting, short punchy sentences and a loud, attention-grabbing headline (still truthful)",!1,"none",!1,!0)
D.aGM=new C.tv(9,"minimal")
D.dPl=new C.lp("modern","Modern Digest",D.aGM,D.D8,4294507260,4293060848,4279179050,4279080072,"logo","Roboto","Roboto","Roboto","a clean modern digest: simple words, short paragraphs, friendly and clear",!1,"none",!1,!1)
D.aGJ=new C.tv(3,"magazine")
D.aGD=new C.BH(0,"plain")
D.dPh=new C.lp("midnight","Midnight Edition",D.aGJ,D.aGD,4279310375,4278915104,4294047225,4294626325,"logo","Roboto","NgmyAbril","NgmyOldStandard","a dramatic late-night edition: confident, cinematic and polished",!1,"none",!0,!0)
D.dzd=new C.tv(8,"banner")
D.dPj=new C.lp("metro","Metro Wire",D.dzd,D.aGG,4294047225,4293060848,4278915616,4280640491,"logo","Roboto","Roboto","Roboto","a modern news wire: fast, factual and direct, like breaking news",!1,"none",!1,!0)
D.dz5=new C.BH(8,"arch")
D.dPk=new C.lp("sunrise","Sunrise Post",D.aGJ,D.dz5,4294965229,4294962645,4282064136,4293548044,"split","NgmyAbril","NgmyAbril","NgmyOldStandard","a cheerful morning paper: bright, optimistic and welcoming",!1,"none",!1,!1)
D.aGK=new C.tv(5,"scrapbook")
D.dz4=new C.BH(5,"tape")
D.dPf=new C.lp("neon","Neon Beat",D.aGK,D.dz4,4280163147,4279175726,4294308863,4293675161,"split","NgmyAbril","NgmyAbril","Roboto","a youthful neon culture paper: fresh, bold, energetic and fun",!1,"none",!0,!1)
D.dzb=new C.tv(4,"wrap")
D.dPs=new C.lp("gold","Golden Press",D.dzb,D.a5I,4279505162,4278847748,4294898631,4294626325,"logo","Roboto","NgmyAbril","NgmyOldStandard","a luxurious golden press edition: grand, elegant and prestigious",!1,"none",!0,!0)
D.dPt=new C.lp("minimal","Paper White",D.aGM,D.a5I,4294967295,4294638330,4279769115,4279769115,"split","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a quiet, elegant long-read: thoughtful, simple and beautifully written",!1,"none",!1,!1)
D.dPe=new C.lp("gazette","Fresh Gazette",D.aGH,D.aGE,4294373341,4293582786,4280949518,4288295954,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a refined town gazette: formal, dignified and warm, with a strong headline",!1,"none",!1,!0)
D.dPo=new C.lp("times","Classic Times",D.aGI,D.aGD,4294637810,4293913565,4279636750,4280171146,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a serious classic broadsheet: calm, factual, authoritative, with a strong headline and a clear subhead",!1,"bw",!1,!1)
D.S9=new C.BH(2,"polaroid")
D.dPn=new C.lp("scrapbook","Memory Scrapbook",D.aGK,D.S9,4294437835,4293580710,4282001946,4290007817,"split","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a warm scrapbook clipping: personal, nostalgic and heartfelt",!1,"sepia",!1,!1)
D.a4a=w([D.dPg,D.dPc,D.dPp,D.dPi,D.dPm,D.dPb,D.dPd,D.dPr,D.dPq,D.dPa,D.dPl,D.dPh,D.dPj,D.dPk,D.dPf,D.dPs,D.dPt,D.dPe,D.dPo,D.dPn],B.av("O<lp>"))
D.dau=w([0.45,1],x.x)
D.HO=w([619,720,127,481,931,816,813,233,566,247,985,724,205,454,863,491,741,242,949,214,733,859,335,708,621,574,73,654,730,472,419,436,278,496,867,210,399,680,480,51,878,465,811,169,869,675,611,697,867,561,862,687,507,283,482,129,807,591,733,623,150,238,59,379,684,877,625,169,643,105,170,607,520,932,727,476,693,425,174,647,73,122,335,530,442,853,695,249,445,515,909,545,703,919,874,474,882,500,594,612,641,801,220,162,819,984,589,513,495,799,161,604,958,533,221,400,386,867,600,782,382,596,414,171,516,375,682,485,911,276,98,553,163,354,666,933,424,341,533,870,227,730,475,186,263,647,537,686,600,224,469,68,770,919,190,373,294,822,808,206,184,943,795,384,383,461,404,758,839,887,715,67,618,276,204,918,873,777,604,560,951,160,578,722,79,804,96,409,713,940,652,934,970,447,318,353,859,672,112,785,645,863,803,350,139,93,354,99,820,908,609,772,154,274,580,184,79,626,630,742,653,282,762,623,680,81,927,626,789,125,411,521,938,300,821,78,343,175,128,250,170,774,972,275,999,639,495,78,352,126,857,956,358,619,580,124,737,594,701,612,669,112,134,694,363,992,809,743,168,974,944,375,748,52,600,747,642,182,862,81,344,805,988,739,511,655,814,334,249,515,897,955,664,981,649,113,974,459,893,228,433,837,553,268,926,240,102,654,459,51,686,754,806,760,493,403,415,394,687,700,946,670,656,610,738,392,760,799,887,653,978,321,576,617,626,502,894,679,243,440,680,879,194,572,640,724,926,56,204,700,707,151,457,449,797,195,791,558,945,679,297,59,87,824,713,663,412,693,342,606,134,108,571,364,631,212,174,643,304,329,343,97,430,751,497,314,983,374,822,928,140,206,73,263,980,736,876,478,430,305,170,514,364,692,829,82,855,953,676,246,369,970,294,750,807,827,150,790,288,923,804,378,215,828,592,281,565,555,710,82,896,831,547,261,524,462,293,465,502,56,661,821,976,991,658,869,905,758,745,193,768,550,608,933,378,286,215,979,792,961,61,688,793,644,986,403,106,366,905,644,372,567,466,434,645,210,389,550,919,135,780,773,635,389,707,100,626,958,165,504,920,176,193,713,857,265,203,50,668,108,645,990,626,197,510,357,358,850,858,364,936,638],x.t)
D.daV=w(["video/webm;codecs=vp9","video/webm;codecs=vp8","video/webm","video/mp4"],x.s)
D.hkj=new C.oG("Original",0,1,1,0,0,0)
D.hkn=new C.oG("Black & white",0,1.1,0,0,0,0)
D.hka=new C.oG("Noir",-0.05,1.55,0,0,0,0)
D.hke=new C.oG("Sepia",0,1,0.25,0.9,0,0)
D.hkd=new C.oG("Vivid",0,1.15,1.6,0,0,0)
D.hk6=new C.oG("Pop",0,1.3,1.9,0,0,0)
D.hk8=new C.oG("Faded",0.06,0.85,0.8,0.1,0,0.4)
D.hkk=new C.oG("Matte",0,0.9,0.85,0,0,0.55)
D.hkf=new C.oG("Cool",0,1.05,1,-0.8,0,0)
D.hkm=new C.oG("Warm",0.03,1.05,1.1,0.8,0,0)
D.hk7=new C.oG("Golden hour",0.04,1,1.25,1,0,0)
D.hkc=new C.oG("Moonlight",-0.08,1.1,0.8,-0.8,-0.1,0)
D.hkl=new C.oG("Dreamy",0.08,0.85,1.1,0.2,0,0.25)
D.hkb=new C.oG("Dramatic",-0.05,1.5,1.2,0,0,0)
D.hkh=new C.oG("Retro",0,0.9,0.7,0.4,0,0.35)
D.hkg=new C.oG("Forest",0,1,1.2,-0.1,-0.45,0)
D.hki=new C.oG("Rose",0,1,1.1,0.3,0.4,0)
D.hk9=new C.oG("Ocean",0,1,1.2,-0.5,-0.2,0)
D.daW=w([D.hkj,D.hkn,D.hka,D.hke,D.hkd,D.hk6,D.hk8,D.hkk,D.hkf,D.hkm,D.hk7,D.hkc,D.hkl,D.hkb,D.hkh,D.hkg,D.hki,D.hk9],B.av("O<oG>"))
D.baZ=new B.u(1,0.0392156862745098,0.1803921568627451,0.09019607843137255,A.q)
D.daY=w([D.ah7,A.e_,D.baZ],x.O)
D.esL=new B.z(0.12,0.3)
D.eJX=new B.z(0.26,0.75)
D.eId=new B.z(0.8,0.22)
D.eOE=new B.z(0.9,0.7)
D.eKM=new B.z(0.5,0.15)
D.eMR=new B.z(0.65,0.85)
D.ezm=new B.z(0.08,0.85)
D.dbb=w([D.esL,D.eJX,D.eId,D.eOE,D.eKM,D.eMR,D.ezm],x.G)
D.ayV=w([A.b9,A.c4,A.bv,A.bj],x.O)
D.dc2=w([y.L,"Mbuzi Wawili","Ngyoka","Mmoko"],x.s)
D.dce=w([A.c,A.fh,A.ds,A.vB],x.O)
D.beK=new B.u(1,0.10980392156862745,0.09019607843137255,0.06274509803921569,A.q)
D.ddh=w([D.beK,D.afx],x.O)
D.ddj=w([A.tz,A.ay],x.O)
D.ddy=w([0,0.25,0.75,1],x.x)
D.ddA=w([A.xE,A.oV],x.O)
D.aHP=new C.l_(10,"kenteSunset")
D.hoT=w([D.ag0,A.k6,A.ay],x.O)
D.dKB=new C.jr("kuhowa_kente_sunset","Kente ya Jua",y.H,D.aHP,4294964964,4282000405,4279983648,D.jX)
D.aHQ=new C.l_(11,"indigoMudcloth")
D.bc5=new B.u(1,0.9686274509803922,0.9411764705882353,0.8941176470588236,A.q)
D.hp6=w([D.bc5,A.afu,A.ig],x.O)
D.dKJ=new C.jr("kuhowa_indigo_mudcloth","Nguo ya Indigo",y.n,D.aHQ,4294439140,4279903102,4279903102,D.jX)
D.aHR=new C.l_(12,"adinkraRoyal")
D.bqH=new B.u(1,0.4196078431372549,0.24705882352941178,0.12156862745098039,A.q)
D.hp7=w([D.aen,D.bqH,A.ay],x.O)
D.dKL=new C.jr("kuhowa_adinkra_royal","Muhuri wa Adinkra",y.z,D.aHR,4294965484,4285218591,4287322667,D.jX)
D.aHS=new C.l_(13,"nileLotus")
D.bmG=new B.u(1,0.9568627450980393,0.9686274509803922,0.9568627450980393,A.q)
D.bj1=new B.u(1,0.058823529411764705,0.3607843137254902,0.3607843137254902,A.q)
D.hpc=w([D.bmG,D.bj1,A.ig],x.O)
D.dKK=new C.jr("kuhowa_nile_lotus","Lotus ya Nile","Nguzo za papyrus na ua la lotus juu.",D.aHS,4294244340,4279196764,4279196764,D.jX)
D.aHT=new C.l_(14,"shweshweIvory")
D.bgY=new B.u(1,0.9725490196078431,0.9568627450980393,0.9333333333333333,A.q)
D.bfy=new B.u(1,0.10588235294117647,0.16470588235294117,0.2901960784313726,A.q)
D.bcC=new B.u(1,0.7686274509803922,0.3607843137254902,0.24313725490196078,A.q)
D.hoU=w([D.bgY,D.bfy,D.bcC],x.O)
D.dKG=new C.jr("kuhowa_shweshwe_ivory","Shweshwe","Nguo ya shweshwe \xb7 kadi ya pembe ndani.",D.aHT,4294505710,4279970378,4291058750,D.jX)
D.rM=new C.l_(15,"certIvoryNavy")
D.hoS=w([D.Me,D.jq,A.ig],x.O)
D.aHk=new C.xK(1,"ringsNdoa")
D.dKD=new C.jr("kuhowa_rings_ndoa","Hati ya Ndoa","Pete mbili \xb7 vichwa vya kidonge \xb7 hati rasmi.",D.rM,4294966259,4279378237,4291404327,D.aHk)
D.a6d=new C.xK(2,"coupleCards")
D.dKy=new C.jr("kuhowa_couple_taarifa","Taarifa za Wanandoa","Picha ya mwanamume na mwanamke kila upande.",D.rM,4294966259,4279378237,4291404327,D.a6d)
D.Db=new C.l_(18,"certIvoryNavyBar")
D.aem=new B.u(1,1,0.9882352941176471,0.9686274509803922,A.q)
D.hp5=w([D.aem,D.jq,A.ig],x.O)
D.aHl=new C.xK(3,"kuhoweshaForm")
D.dKw=new C.jr("kuhowa_barua","Barua ya Kuhowesha","Barua rasmi \xb7 pete \xb7 orodha ya vitu.",D.Db,4294966519,4279378237,4291404327,D.aHl)
D.afK=new B.u(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,A.q)
D.hpp=w([D.Me,D.afK,A.ig],x.O)
D.a6e=new C.xK(4,"mahariPande")
D.dKz=new C.jr("kuhowa_mahari_pande","Mahari ya Pande","Masharti ya mahari \xb7 pande mbili.",D.rM,4294966259,4279904068,4291404327,D.a6e)
D.aHU=new C.l_(16,"certIvoryGreen")
D.bgg=new B.u(1,0.12156862745098039,0.30196078431372547,0.22745098039215686,A.q)
D.hoW=w([A.Lp,D.bgg,A.ig],x.O)
D.aHm=new C.xK(5,"familiaMti")
D.dKF=new C.jr("kuhowa_sheria_familia","Sheria za Familia","Mti wa familia \xb7 sheria za pamoja.",D.aHU,4294966776,4280241466,4291404327,D.aHm)
D.a6f=new C.xK(6,"ndoaSafi")
D.dKx=new C.jr("kuhowa_ndoa_pamoja","Ndoa ya Pamoja","Safu mbili \xb7 mume na mke.",D.Db,4294966519,4279378237,4291404327,D.a6f)
D.bkY=new B.u(1,0.22745098039215686,0.16470588235294117,0.06274509803921569,A.q)
D.hoZ=w([D.Me,A.ig,D.bkY],x.O)
D.a6g=new C.xK(7,"peteWide")
D.dKC=new C.jr("kuhowa_pete_pana","Pete Pana","Pete kubwa za dhahabu \xb7 nafasi wazi.",D.rM,4294966259,4282001936,4291404327,D.a6g)
D.dKM=new C.xK(8,"muhuriCrest")
D.dKv=new C.jr("kuhowa_muhuri","Muhuri wa Familia","Muhuri mkubwa juu \xb7 fomu rasmi.",D.rM,4294966259,4279378237,4291404327,D.dKM)
D.hp8=w([D.aem,D.afK,A.ig],x.O)
D.dKN=new C.xK(9,"fomuWazi")
D.dKI=new C.jr("kuhowa_fomu","Fomu ya Ndoa","Fomu yenye mistari \xb7 sehemu wazi.",D.Db,4294966519,4279904068,4291404327,D.dKN)
D.aHV=new C.l_(17,"certIvoryRose")
D.bh1=new B.u(1,1,0.9725490196078431,0.9607843137254902,A.q)
D.hpb=w([D.bh1,D.agF,A.ig],x.O)
D.a6c=new C.xK(10,"upendoOrnate")
D.dKE=new C.jr("kuhowa_upendo","Upendo wa Dhahabu","Mapambo ya dhahabu \xb7 picha za wanandoa.",D.aHV,4294965493,4286200650,4291404327,D.a6c)
D.de0=w([D.dKB,D.dKJ,D.dKL,D.dKK,D.dKG,D.dKD,D.dKy,D.dKw,D.dKz,D.dKF,D.dKx,D.dKC,D.dKv,D.dKI,D.dKE],x.h)
D.ef=w([2774754246,2222750968,2574743534,2373680118,234025727,3177933782,2976870366,1422247313,1345335392,50397442,2842126286,2099981142,436141799,1658312629,3870010189,2591454956,1170918031,2642575903,1086966153,2273148410,368769775,3948501426,3376891790,200339707,3970805057,1742001331,4255294047,3937382213,3214711843,4154762323,2524082916,1539358875,3266819957,486407649,2928907069,1780885068,1513502316,1094664062,49805301,1338821763,1546925160,4104496465,887481809,150073849,2473685474,1943591083,1395732834,1058346282,201589768,1388824469,1696801606,1589887901,672667696,2711000631,251987210,3046808111,151455502,907153956,2608889883,1038279391,652995533,1764173646,3451040383,2675275242,453576978,2659418909,1949051992,773462580,756751158,2993581788,3998898868,4221608027,4132590244,1295727478,1641469623,3467883389,2066295122,1055122397,1898917726,2542044179,4115878822,1758581177,0,753790401,1612718144,536673507,3367088505,3982187446,3194645204,1187761037,3653156455,1262041458,3729410708,3561770136,3898103984,1255133061,1808847035,720367557,3853167183,385612781,3309519750,3612167578,1429418854,2491778321,3477423498,284817897,100794884,2172616702,4031795360,1144798328,3131023141,3819481163,4082192802,4272137053,3225436288,2324664069,2912064063,3164445985,1211644016,83228145,3753688163,3249976951,1977277103,1663115586,806359072,452984805,250868733,1842533055,1288555905,336333848,890442534,804056259,3781124030,2727843637,3427026056,957814574,1472513171,4071073621,2189328124,1195195770,2892260552,3881655738,723065138,2507371494,2690670784,2558624025,3511635870,2145180835,1713513028,2116692564,2878378043,2206763019,3393603212,703524551,3552098411,1007948840,2044649127,3797835452,487262998,1994120109,1004593371,1446130276,1312438900,503974420,3679013266,168166924,1814307912,3831258296,1573044895,1859376061,4021070915,2791465668,2828112185,2761266481,937747667,2339994098,854058965,1137232011,1496790894,3077402074,2358086913,1691735473,3528347292,3769215305,3027004632,4199962284,133494003,636152527,2942657994,2390391540,3920539207,403179536,3585784431,2289596656,1864705354,1915629148,605822008,4054230615,3350508659,1371981463,602466507,2094914977,2624877800,555687742,3712699286,3703422305,2257292045,2240449039,2423288032,1111375484,3300242801,2858837708,3628615824,84083462,32962295,302911004,2741068226,1597322602,4183250862,3501832553,2441512471,1489093017,656219450,3114180135,954327513,335083755,3013122091,856756514,3144247762,1893325225,2307821063,2811532339,3063651117,572399164,2458355477,552200649,1238290055,4283782570,2015897680,2061492133,2408352771,4171342169,2156497161,386731290,3669999461,837215959,3326231172,3093850320,3275833730,2962856233,1999449434,286199582,3417354363,4233385128,3602627437,974525996],x.t)
D.ID=new C.w8(0,"emojis")
D.Di=new C.w8(1,"pictures")
D.IE=new C.w8(2,"icons3d")
D.a6x=new C.w8(3,"animations")
D.SG=new C.w8(4,"videoMotion")
D.Dj=new C.w8(5,"luxe")
D.a4h=w([D.ID,D.Di,D.IE,D.a6x,D.SG,D.Dj],B.av("O<w8>"))
D.eNs=new B.z(A.e5,"Looks")
D.eBr=new B.z(A.Cp,"Light")
D.eBo=new B.z(A.nr,"Colour")
D.ezn=new B.z(A.yE,"Effects")
D.anc=new B.a0(63112,"MaterialIcons",!1)
D.evT=new B.z(D.anc,"Crop")
D.dev=w([D.eNs,D.eBr,D.eBo,D.ezn,D.evT],x.f2)
D.df8=w([],x.D)
D.hpm=w([],x.L)
D.ezB=new B.z("Flashcard",D.Iy)
D.eDt=new B.z("Quiz",D.Iz)
D.eFu=new B.z("Worksheet",D.IA)
D.eCu=new B.z("Notes",D.mR)
D.eE0=new B.z("Section",D.Dg)
D.dfP=w([D.ezB,D.eDt,D.eFu,D.eCu,D.eE0],B.av("O<+(n,mF)>"))
D.dMq=new C.l_(6,"beadedPearl")
D.bjM=new B.u(1,0.47843137254901963,0.3607843137254902,0.1803921568627451,A.q)
D.hpq=w([I.Ys,D.bjM,A.ig],x.O)
D.aHi=new C.jr("malipo_beaded_pearl","Malipo \u2014 Lulu","Mpaka wa shanga za lulu kuzunguka pembeni \xb7 dhahabu na shaba.",D.dMq,4294966774,4286209070,4291404327,D.jX)
D.dMr=new C.l_(7,"artDeco")
D.bo0=new B.u(1,0.9686274509803922,0.9607843137254902,0.9490196078431372,A.q)
D.br1=new B.u(1,0.12156862745098039,0.10588235294117647,0.08627450980392157,A.q)
D.hpo=w([D.bo0,D.br1,A.c1],x.O)
D.aHj=new C.jr("malipo_art_deco","Malipo \u2014 Art Deco","Pembe za ngazi za kisasa \xb7 mng'ao wa dhahabu juu.",D.dMr,4294440434,4280228630,4290283019,D.jX)
D.dMs=new C.l_(8,"rosetteCorners")
D.bq6=new B.u(1,0.984313725490196,0.9647058823529412,0.9372549019607843,A.q)
D.beP=new B.u(1,0.4196078431372549,0.24705882352941178,0.16470588235294117,A.q)
D.bjH=new B.u(1,0.788235294117647,0.4823529411764706,0.23921568627450981,A.q)
D.hp1=w([D.bq6,D.beP,D.bjH],x.O)
D.aHh=new C.jr("malipo_rosette","Malipo \u2014 Duara","Medali ya duara kila pembe \xb7 shaba na mahogany.",D.dMs,4294702831,4285218602,4291394365,D.jX)
D.dMt=new C.l_(9,"modernLedger")
D.hp0=w([A.c,D.jq,D.jq],x.O)
D.aHg=new C.jr("malipo_modern_ledger","Malipo \u2014 Kisasa","Ukanda thabiti wa bluu upande wa kushoto \xb7 mstari mwembamba.",D.dMt,4294967295,4279378237,4279378237,D.jX)
D.dfT=w([D.aHi,D.aHj,D.aHh,D.aHg],x.h)
D.dg1=w([A.ic,A.oV],x.O)
D.cl=new C.hF(0,"none")
D.dh=new C.hF(1,"fade")
D.IB=new C.hF(3,"slideRight")
D.aIg=new C.hF(5,"slideDown")
D.e62=new C.hF(7,"zoomOut")
D.a6w=new C.hF(11,"cube")
D.e5Y=new C.hF(12,"blur")
D.aId=new C.hF(13,"dissolve")
D.e5Z=new C.hF(14,"wipeLeft")
D.e6_=new C.hF(15,"wipeRight")
D.SF=new C.hF(17,"push")
D.e60=new C.hF(18,"flash")
D.aIf=new C.hF(20,"swing")
D.e61=new C.hF(21,"curtain")
D.Rg=w([D.cl,D.dh,D.uM,D.IB,D.uN,D.aIg,D.mS,D.e62,D.IC,D.aIh,D.SE,D.a6w,D.e5Y,D.aId,D.e5Z,D.e6_,D.qx,D.SF,D.e60,D.aIe,D.aIf,D.e61],x.i)
D.Rh=w([D.a6b,D.a69,D.a62,D.a63,D.a64,D.a67,D.a65,D.a66,D.a6a,D.a68,D.aHi,D.aHj,D.aHh,D.aHg],x.h)
D.dgu=w([y.L,"Mbuzi Mbili","Ngyoka","Mmoko"],x.s)
D.dgy=w([A.xJ,A.hS,A.c1],x.O)
D.eAI=new B.z(A.ue,"Design")
D.eP2=new B.z(D.ant,"Word sizes")
D.eKw=new B.z(A.Cj,"Text")
D.bMg=new B.a0(983182,"MaterialIcons",!1)
D.eKA=new B.z(D.bMg,"Photo")
D.evr=new B.z(A.lF,"Logo")
D.eQk=new B.z(A.H8,"News")
D.dgE=w([D.eAI,D.eP2,D.eKw,D.eKA,D.evr,D.eQk],x.f2)
D.dgF=w(["golddust","sparkle","sheen"],x.s)
D.e7p=new C.ew("upload_pdf",L.Oz,"Upload PDF")
D.e6z=new C.ew("sign_paper",A.H5,"Sign Paper")
D.bLz=new B.a0(63438,"MaterialIcons",!1)
D.e7l=new C.ew("hd_photo",D.bLz,"HD Photo")
D.e6r=new C.ew("sharpen",E.a13,"Sharpen")
D.e6B=new C.ew("print",L.Oz,"Download PDF")
D.e72=new C.ew("rotate",D.anc,"Rotate")
D.e6K=new C.ew("text_box",A.Cj,"Text Box")
D.e6M=new C.ew("picture",A.uk,"Picture")
D.e6I=new C.ew("title",A.yV,"Title")
D.e6E=new C.ew("subtitle",T.ao3,"Subtitle")
D.e7b=new C.ew("bullets",K.a1l,"Bullet List")
D.e6F=new C.ew("numbered",A.Oq,"Numbered")
D.e7e=new C.ew("quote",A3.C9,"Quote")
D.e6R=new C.ew("citation",A.oc,"Citation")
D.e7h=new C.ew("date_stamp",Ai.a18,"Date Stamp")
D.e74=new C.ew("page_number",A.yU,"Page #")
D.e78=new C.ew("header_bar",A.Cm,"Header")
D.e6L=new C.ew("footer_bar",Aq.a1U,"Footer")
D.e6A=new C.ew("divider",A.uj,"Divider")
D.e6w=new C.ew("highlight",A.a1s,"Highlight")
D.e7a=new C.ew("redact",A.ut,"Redact")
D.e6Y=new C.ew("callout",A.C3,"Callout")
D.e7j=new C.ew("checkboxes",K.amt,"Checklist")
D.e6V=new C.ew("table",A.a1R,"Table")
D.e6P=new C.ew("memo",K.a1E,"Memo")
D.e6Z=new C.ew("letter",A.GT,"Letter")
D.bLa=new B.a0(63259,"MaterialIcons",!0)
D.e6q=new C.ew("agenda",D.bLa,"Agenda")
D.e6C=new C.ew("toc",Az.anH,"Contents")
D.bLv=new B.a0(63406,"MaterialIcons",!1)
D.e6W=new C.ew("sig_line",D.bLv,"Sign Line")
D.e6j=new C.ew("initial_line",A.iW,"Initials")
D.e6m=new C.ew("approved",A.lF,"APPROVED")
D.e70=new C.ew("draft",A.pc,"DRAFT")
D.e76=new C.ew("confidential",A.jR,"Confidential")
D.e79=new C.ew("sticky",A.OH,"Sticky Note")
D.e7i=new C.ew("progress",A.anG,"Progress")
D.bMG=new B.a0(983507,"MaterialIcons",!1)
D.e6x=new C.ew("stars",D.bMG,"Star Rating")
D.e6h=new C.ew("equation",A.anv,"Equation")
D.e6s=new C.ew("timeline",A.a1S,"Timeline")
D.e6Q=new C.ew("two_col",A.a1V,"Two Columns")
D.e6u=new C.ew("compare",A2.a1d,"Compare")
D.e6f=new C.ew("duplicate_el",A.fN,"Duplicate")
D.e7n=new C.ew("delete_el",A.ed,"Delete")
D.e7d=new C.ew("bring_fwd",I.anp,"Bring Front")
D.e6k=new C.ew("send_back",I.ano,"Send Back")
D.e7_=new C.ew("align_left",D.a1j,"Align L")
D.e75=new C.ew("align_center",D.a1i,"Align C")
D.e7m=new C.ew("align_right",D.a1k,"Align R")
D.e6J=new C.ew("word_count",A0.a0M,"Word Count")
D.e6G=new C.ew("link_text",A.hv,"Link")
D.e73=new C.ew("phone",A.iX,"Phone")
D.e6v=new C.ew("email",A.C6,"Email")
D.e7o=new C.ew("qr_placeholder",A.jA,"QR Placeholder")
D.e6p=new C.ew("rectangle",A4.wa,"Rectangle")
D.e6U=new C.ew("circle",A.ro,"Circle")
D.e6l=new C.ew("arrow",A.jQ,"Arrow")
D.e7c=new C.ew("line",A.uj,"Line")
D.e6y=new C.ew("triangle",A.a1a,"Triangle")
D.bLi=new B.a0(63318,"MaterialIcons",!1)
D.e6D=new C.ew("grayscale",D.bLi,"Grayscale")
D.e6N=new C.ew("brighten",K.amO,"Brighten")
D.e6S=new C.ew("flip_h",A.GJ,"Flip H")
D.bLq=new B.a0(63348,"MaterialIcons",!1)
D.e7k=new C.ew("flip_v",D.bLq,"Flip V")
D.e77=new C.ew("cover_page",A.qg,"Cover Page")
D.e6i=new C.ew("invoice",A.hh,"Invoice")
D.e6t=new C.ew("resume",A.mH,"Resume")
D.e6H=new C.ew("minutes",A.p7,"Minutes")
D.e6n=new C.ew("lab_report",A.OD,"Lab Report")
D.e6o=new C.ew("rubric",A.uf,"Rubric")
D.e6T=new C.ew("flashcard_tool",V.H3,"Flashcard")
D.e7f=new C.ew("quiz_tool",A.GY,"Quiz Block")
D.e6X=new C.ew("worksheet_tool",M.Gz,"Worksheet")
D.e71=new C.ew("outline_share",A.OF,"Share Outline")
D.e7g=new C.ew("export_json",D.amz,"Export JSON")
D.e6g=new C.ew("new_slide",D.a0L,"New Slide")
D.e6O=new C.ew("present",A.ql,"Present")
D.dha=w([D.e7p,D.e6z,D.e7l,D.e6r,D.e6B,D.e72,D.e6K,D.e6M,D.e6I,D.e6E,D.e7b,D.e6F,D.e7e,D.e6R,D.e7h,D.e74,D.e78,D.e6L,D.e6A,D.e6w,D.e7a,D.e6Y,D.e7j,D.e6V,D.e6P,D.e6Z,D.e6q,D.e6C,D.e6W,D.e6j,D.e6m,D.e70,D.e76,D.e79,D.e7i,D.e6x,D.e6h,D.e6s,D.e6Q,D.e6u,D.e6f,D.e7n,D.e7d,D.e6k,D.e7_,D.e75,D.e7m,D.e6J,D.e6G,D.e73,D.e6v,D.e7o,D.e6p,D.e6U,D.e6l,D.e7c,D.e6y,D.e6D,D.e6N,D.e6S,D.e7k,D.e77,D.e6i,D.e6t,D.e6H,D.e6n,D.e6o,D.e6T,D.e7f,D.e6X,D.e71,D.e7g,D.e6g,D.e6O],B.av("O<ew>"))
D.dhk=w([A.cr,A.al],x.O)
D.euY=new B.z(4286331629,4292552567)
D.euL=new B.z(4280640491,4278630100)
D.ev5=new B.z(4294538006,4292943176)
D.eu7=new B.z(4278556265,4280640491)
D.dbn=w([D.euY,D.euL,D.ev5,D.eu7],x.n)
D.czd=w([4294626325,4280472558,4294210230],x.t)
D.e6a=new C.nT("colorful","Colorful",A.nr,D.dbn,4294967295,3875536895,D.czd,D.mS)
D.euz=new B.z(4279522093,4279657780)
D.euP=new B.z(4281750292,4283268111)
D.eua=new B.z(4278603323,4279203438)
D.euQ=new B.z(4282343954,4279599165)
D.cKg=w([D.euz,D.euP,D.eua,D.euQ],x.n)
D.cyW=w([4288931381,4294829706,4287033260],x.t)
D.e66=new C.nT("nature","Nature",A.H6,D.cKg,4294442727,3874290891,D.cyW,D.dh)
D.eut=new B.z(4279369771,4283178389)
D.euq=new B.z(4279179050,4286456526)
D.euH=new B.z(4280163147,4290648157)
D.eu_=new B.z(4278322711,4285343961)
D.d1k=w([D.eut,D.euq,D.euH,D.eu_],x.n)
D.cz9=w([4294210230,4280472558,4289170426],x.t)
D.e64=new C.nT("vibe","Vibe",A.a1q,D.d1k,4294967295,3874869502,D.cz9,D.uM)
D.ev1=new B.z(4290007817,4292552567)
D.euW=new B.z(4286328082,4294286859)
D.ev0=new B.z(4288485197,4294538006)
D.euV=new B.z(4285343961,4293675161)
D.c53=w([D.ev1,D.euW,D.ev0,D.euV],x.n)
D.cze=w([4294829706,4294967295,4284999929],x.t)
D.e65=new C.nT("celebration","Celebration",A.l5,D.c53,4294967295,4009752557,D.cze,D.qx)
D.euo=new B.z(4279179050,4280171146)
D.eus=new B.z(4279310375,4280232247)
D.eug=new B.z(4278916151,4280172719)
D.eup=new B.z(4279179050,4281549141)
D.cUT=w([D.euo,D.eus,D.eug,D.eup],x.n)
D.cyR=w([4281908728,4294626325,4287931320],x.t)
D.e69=new C.nT("professional","Professional",A.C1,D.cUT,4294967295,3872118241,D.cyR,D.SF)
D.euk=new B.z(4278995566,4278413729)
D.euc=new B.z(4278727492,4279137424)
D.euI=new B.z(4280171146,4278751666)
D.eul=new B.z(4278995566,4279590517)
D.cD1=w([D.euk,D.euc,D.euI,D.eul],x.n)
D.cyU=w([4286436348,4284410580,4294829706],x.t)
D.e6b=new C.nT("ocean","Ocean",K.a1X,D.cD1,4294967295,3873501950,D.cyU,D.uN)
D.euX=new B.z(4286328082,4294538006)
D.euZ=new B.z(4286781507,4294677052)
D.euT=new B.z(4283178389,4294197086)
D.ev_=new B.z(4288295954,4294688548)
D.cR4=w([D.euX,D.euZ,D.euT,D.ev_],x.n)
D.czf=w([4294829706,4294967295,4294747557],x.t)
D.e6c=new C.nT("sunset","Sunset",A.OJ,D.cR4,4294967295,4009749973,D.czf,D.dh)
D.ev9=new B.z(4294967295,4294047225)
D.ev4=new B.z(4294507260,4294967295)
D.ev8=new B.z(4294967295,4293060848)
D.ev3=new B.z(4294507260,4294047225)
D.d4z=w([D.ev9,D.ev4,D.ev8,D.ev3],x.n)
D.cyP=w([4280640491,4279179050,4287931320],x.t)
D.e68=new C.nT("minimal","Minimal",A4.wa,D.d4z,4279179050,4282865001,D.cyP,D.dh)
D.euj=new B.z(4278979081,4280886564)
D.euD=new B.z(4280031511,4278979081)
D.eur=new B.z(4279308561,4281148438)
D.eui=new B.z(4278979081,4280031511)
D.djn=w([D.euj,D.euD,D.eur,D.eui],x.n)
D.cz2=w([4292128567,4294829706,4289241758],x.t)
D.e6d=new C.nT("elegant","Elegant",A.m7,D.djn,4294898631,3873957348,D.cz2,D.aId)
D.euF=new B.z(4280159034,4282058596)
D.euf=new B.z(4278916151,4280163147)
D.euN=new B.z(4281208933,4278916151)
D.euw=new B.z(4279502891,4283178389)
D.dqI=w([D.euF,D.euf,D.euN,D.euw],x.n)
D.czb=w([4294296657,4292128567,4291081725],x.t)
D.e67=new C.nT("royal","Royal Gold",A.je,D.dqI,4294965222,3874084351,D.czb,D.mS)
D.eu4=new B.z(4278464302,4280163147)
D.eue=new B.z(4278916151,4279455306)
D.euG=new B.z(4280163147,4283040846)
D.eu1=new B.z(4278332450,4281413249)
D.db0=w([D.eu4,D.eue,D.euG,D.eu1],x.n)
D.cyQ=w([4281193663,4289170426,4294210230],x.t)
D.e6e=new C.nT("aurora","Aurora Glow",A.e5,D.db0,4293983738,3869766608,D.cyQ,D.dh)
D.ww=w([D.e6a,D.e66,D.e64,D.e65,D.e69,D.e6b,D.e6c,D.e68,D.e6d,D.e67,D.e6e],B.av("O<nT>"))
D.bkl=new B.u(0.13333333333333333,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.q)
D.dhV=w([A.r3,D.bkl,A.r3],x.O)
D.dib=w([4279179050,4281549141,4280640491,4278556265,4292617766,4286331629,4293548044,4278751666,4294967295,4294688548],x.t)
D.dif=w([null,4294967295,4279310375,4294626325,4280472558,4294210230,4283096704,4293870660,4282090230,4294677052],x.Z)
D.eKo=new B.z("The NGMY app","Write the front-page story about the NGMY app and everything it offers.")
D.eAi=new B.z("KB PABLO QR, our CEO","Write a respectful story about KB PABLO QR, Founder, President and CEO of NGMY, and what he built.")
D.eF2=new B.z("Civic Registry","Write about the Civic Registry: why it was built, receipts, registrars and trust in the community.")
D.erz=new B.z("NGMY Advisors","Write about the NGMY Advisors, the AI advisors who help members.")
D.eDE=new B.z("Growth Income","Write about Growth Income, the wallet and how members earn on work days.")
D.eBO=new B.z("Core Protocol studios","Write about the Core Protocol studios, the Body Explorer and the learning labs.")
D.eGk=new B.z("Surprise me","")
D.diO=w([D.eKo,D.eAi,D.eF2,D.erz,D.eDE,D.eBO,D.eGk],x.L)
D.bcE=new B.u(1,0.9450980392156862,0.9294117647058824,0.8941176470588236,A.q)
D.box=new B.u(1,0.796078431372549,0.7647058823529411,0.7019607843137254,A.q)
D.djB=w([A.c,D.bcE,D.box],x.O)
D.dlO=w([1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0],x.x)
D.aHN=new C.l_(0,"heritageGold")
D.biL=new B.u(1,0.9764705882352941,0.9450980392156862,0.8666666666666667,A.q)
D.hpr=w([D.biL,A8.afW,A.ay],x.O)
D.dKH=new C.jr("kuhowa_heritage_gold","Kuhowa \u2014 Hazina ya Dhahabu","Mpaka mzito wa kikabila \xb7 dhahabu na hudhurungi.",D.aHN,4294570461,4284234270,4292128567,D.jX)
D.aHO=new C.l_(1,"heritageCrimson")
D.baV=new B.u(1,0.9803921568627451,0.9411764705882353,0.9019607843137255,A.q)
D.bh_=new B.u(1,0.4196078431372549,0.16470588235294117,0.11764705882352941,A.q)
D.bol=new B.u(1,0.8784313725490196,0.6431372549019608,0.34509803921568627,A.q)
D.hp4=w([D.baV,D.bh_,D.bol],x.O)
D.dKA=new C.jr("kuhowa_heritage_crimson","Kuhowa \u2014 Hazina Nyekundu","Mpaka mzito wa kikabila \xb7 nyekundu na dhahabu.",D.aHO,4294635750,4285213214,4292912216,D.jX)
D.dlS=w([D.a6b,D.a69,D.dKH,D.dKA,D.a64,D.a67],x.h)
D.dQu=new C.rE(1,"circuit")
D.dQX=new C.mf("neural","Neural Link","Robotic",D.dQu,4278322711,4279179050,4280472558,4284704497,4292932350,"One link at a time, NGMY connects young people everywhere.")
D.dQt=new C.rE(0,"grid")
D.dQU=new C.mf("signal","Signal Grid","Robotic",D.dQt,4280163147,4278322711,4289222135,4293675161,4294308863,"A strong signal starts with one voice. Make yours heard.")
D.dQz=new C.rE(2,"hexes")
D.dQF=new C.mf("core","Core Protocol","Robotic",D.dQz,4278464302,4278322711,4281193663,4281908728,4291623921,"Our core is simple: help each other grow.")
D.aIa=new C.rE(11,"diagonal")
D.dQQ=new C.mf("steel","Steel Tech","Robotic",D.aIa,4281549141,4279179050,4287931320,4281908728,4294047225,"Build with your hands, lead with your heart.")
D.aIb=new C.rE(3,"rings")
D.dQE=new C.mf("vault","Vault Gold","Robotic",D.aIb,4280031511,4278190080,4294626325,4294286859,4294898631,"What you build together is worth more than gold.")
D.dQx=new C.rE(13,"leaves")
D.dQH=new C.mf("forest","Forest Morning","Nature",D.dQx,4279522093,4278529558,4283096704,4288931381,4293983732,"Like a forest, a community grows strongest together.")
D.aIc=new C.rE(5,"waves")
D.dQO=new C.mf("ocean","Ocean Calm","Nature",D.aIc,4278413729,4278995566,4281908728,4284999929,4293982719,"Small waves become a movement. Keep going.")
D.dQA=new C.rE(6,"sunset")
D.dQT=new C.mf("sunset","Sunset Glow","Nature",D.dQA,4294538006,4290648157,4294829706,4294668677,4294967295,"Every sunset is a promise that tomorrow can be better.")
D.dQB=new C.rE(7,"mountains")
D.dQG=new C.mf("mountain","Mountain Air","Nature",D.dQB,4282595530,4280171146,4291285758,4286680312,4293849855,"Climb together. The view is better with friends.")
D.dQC=new C.rE(8,"stars")
D.dQN=new C.mf("night","Night Sky","Nature",D.dQC,4280163147,4278190080,4294829706,4291081725,4294308863,"Dream big. NGMY is built by people who looked up.")
D.a6u=new C.rE(4,"orbs")
D.dQL=new C.mf("aurora","Aurora","Nature",D.a6u,4278603323,4283178389,4281652121,4289170426,4294967295,"Light shows up when people choose to shine together.")
D.dQV=new C.mf("sand","Sand Dune","Nature",D.aIc,4294829706,4292441862,4290007817,4294966251,4282718723,"Patience builds a legacy, one grain at a time.")
D.dQD=new C.rE(9,"rays")
D.dQK=new C.mf("golden","Golden Hour","Warm",D.dQD,4294286859,4290321436,4294897802,4294967295,4294967295,"Your hour is now. Start where you are.")
D.dQI=new C.mf("royal","Royal Purple","Warm",D.aIa,4286456526,4290648157,4293962748,4294829706,4294967295,"Lead with respect, and people will follow with joy.")
D.dQJ=new C.mf("rose","Rose Petal","Warm",D.a6u,4294668677,4292943176,4294960358,4294812847,4294967295,"Kindness is the strongest thing a community can grow.")
D.dQw=new C.rE(12,"blocks")
D.dQM=new C.mf("electric","Electric Blue","Bold",D.dQw,4280640491,4278751666,4290438909,4294967295,4294967295,"Energy is contagious. Bring yours to NGMY.")
D.dQW=new C.mf("mint","Fresh Mint","Bold",D.a6u,4281652121,4278630100,4294967295,4289197008,4278603323,"Fresh ideas grow when young people lead.")
D.dQy=new C.rE(14,"minimal")
D.dQS=new C.mf("white","Clean White","Clean",D.dQy,4294967295,4294047225,4280640491,4287931320,4279179050,"Simple words, strong purpose. That is NGMY.")
D.dQv=new C.rE(10,"frame")
D.dQP=new C.mf("midnight","Midnight Gold","Clean",D.dQv,4279179050,4278322711,4294626325,4294829706,4294966251,"Quiet work in the dark makes the morning shine.")
D.dQR=new C.mf("community","Community Green","Clean",D.aIb,4278556265,4280640491,4289197008,4290763774,4294967295,"The New Global Movement for Youth starts with you.")
D.a4L=w([D.dQX,D.dQU,D.dQF,D.dQQ,D.dQE,D.dQH,D.dQO,D.dQT,D.dQG,D.dQN,D.dQL,D.dQV,D.dQK,D.dQI,D.dQJ,D.dQM,D.dQW,D.dQS,D.dQP,D.dQR],B.av("O<mf>"))
D.dme=w([D.Be,A.tz,A.hS,A.c1],x.O)
D.dmw=w([D.agS,D.jq],x.O)
D.dmG=w(["pdf","docx","txt","md"],x.s)
D.eTO=new B.bj(-3,150,34)
D.eTP=new B.bj(-3,214,62)
D.eTQ=new B.bj(-3,288,62)
D.dny=w([D.eTO,D.eTP,D.eTQ],B.av("O<+(L,L,L)>"))
D.do3=w(["rays","bokeh","aurora","spotlight"],x.s)
D.doJ=w(["Write","Design","Print & fold"],x.s)
D.jY=new C.uU(2,"triangle")
D.Dh=new C.uU(3,"arrow")
D.fA=new C.uU(4,"line")
D.jZ=new C.uU(5,"parallelogram")
D.doM=w([D.bh,D.eR,D.jY,D.Dh,D.fA,D.jZ,D.lg],x.m)
D.et_=new B.z(240,96)
D.evL=new B.z(560,46)
D.doS=w([D.et_,D.evL],x.G)
D.hpC=new C.xN(0,"classic")
D.dMw=new C.nP("heritage_gold","Urithi wa Dhahabu","Mpaka wa kitamaduni \xb7 rangi ya dhahabu na kahawia.",D.aHN,4294570461,4282000405,4284234270)
D.dMI=new C.nP("heritage_crimson","Urithi wa Nyekundu","Mpaka wa kitamaduni \xb7 rangi ya nyekundu na shaba.",D.aHO,4294635750,4281999378,4285213214)
D.dMx=new C.nP("elegant_navy","Umoja Mzuri",y.s,D.a6o,4294967035,4279378237,4290283019)
D.dMK=new C.nP("elegant_gold","Umoja wa Dhahabu",y.Q,D.aHW,4294966515,4281016592,4289102906)
D.dMM=new C.nP("kente_sunset","Kente ya Jua",y.H,D.aHP,4294964964,4282000405,4279983648)
D.dMu=new C.nP("indigo_mudcloth","Nguo ya Indigo",y.n,D.aHQ,4294439140,4279903102,4279903102)
D.dMz=new C.nP("adinkra_royal","Muhuri wa Adinkra",y.z,D.aHR,4294965484,4285218591,4287322667)
D.dME=new C.nP("nile_lotus","Lotus ya Nile","Nguzo za papyrus na ua la lotus juu.",D.aHS,4294244340,4279196764,4279196764)
D.dMG=new C.nP("shweshwe_ivory","Shweshwe","Nguo ya shweshwe \xb7 kadi ya pembe ndani.",D.aHT,4294505710,4279970378,4291058750)
D.hpD=new C.xN(1,"ringsNdoa")
D.dMy=new C.nP("rings_ndoa","Hati ya Ndoa","Pete mbili \xb7 vichwa vya kidonge \xb7 hati rasmi ya ndoa.",D.rM,4294966259,4279378237,4291404327)
D.hpF=new C.xN(2,"coupleCards")
D.dMJ=new C.nP("couple_taarifa","Taarifa za Wanandoa","Picha ya mwanamume na mwanamke \xb7 kadi mbili za taarifa.",D.rM,4294966259,4279378237,4291404327)
D.hpG=new C.xN(3,"kuhoweshaForm")
D.dMF=new C.nP("barua_kuhowesha","Barua ya Kuhowesha","Barua rasmi \xb7 orodha ya NIMETOWEA \xb7 mashahidi.",D.Db,4294966519,4279378237,4291404327)
D.hpH=new C.xN(4,"mahariPande")
D.dMv=new C.nP("mahari_pande","Mahari ya Pande","Masharti ya mahari \xb7 pande mbili za sahihi.",D.rM,4294966259,4279904068,4291404327)
D.hpI=new C.xN(5,"familiaMti")
D.dML=new C.nP("sheria_familia","Sheria za Familia","Mti wa familia \xb7 sheria za pamoja \xb7 kijani.",D.aHU,4294966776,4280241466,4291404327)
D.hpJ=new C.xN(6,"ndoaSafi")
D.dMC=new C.nP("ndoa_safi","Ndoa ya Pamoja","Safu mbili \xb7 mume na mke \xb7 masharti ya ndoa.",D.Db,4294966519,4279378237,4291404327)
D.hpK=new C.xN(7,"peteWide")
D.dMB=new C.nP("pete_pana","Pete Pana","Pete kubwa za dhahabu \xb7 nafasi wazi \xb7 hati ya heshima.",D.rM,4294966259,4282001936,4291404327)
D.hpL=new C.xN(8,"muhuriCrest")
D.dMA=new C.nP("muhuri_familia","Muhuri wa Familia","Muhuri mkubwa juu \xb7 fomu rasmi ya familia.",D.rM,4294966259,4279378237,4291404327)
D.hpM=new C.xN(9,"fomuWazi")
D.dMD=new C.nP("fomu_wazi","Fomu ya Ndoa","Fomu yenye mistari \xb7 namba \xb7 sehemu wazi za kujaza.",D.Db,4294966519,4279904068,4291404327)
D.hpE=new C.xN(10,"upendoOrnate")
D.dMH=new C.nP("upendo_dhahabu","Upendo wa Dhahabu","Mapambo ya dhahabu \xb7 picha za wanandoa \xb7 rangi ya waridi.",D.aHV,4294965493,4286200650,4291404327)
D.Rw=w([D.dMw,D.dMI,D.dMx,D.dMK,D.dMM,D.dMu,D.dMz,D.dME,D.dMG,D.dMy,D.dMJ,D.dMF,D.dMv,D.dML,D.dMC,D.dMB,D.dMA,D.dMD,D.dMH],B.av("O<nP>"))
D.Df=new C.arD(0,"landscape169")
D.or=new C.arD(1,"portrait916")
D.dpG=w([D.Df,D.or],B.av("O<arD>"))
D.aAx=w([A.hS,A.bM,A.cT,A.ic,A.c],x.O)
D.uD=w([A.c1,A.ii],x.O)
D.es2=new B.z(1000,"M")
D.exe=new B.z(900,"CM")
D.evF=new B.z(500,"D")
D.etV=new B.z(400,"CD")
D.es3=new B.z(100,"C")
D.exf=new B.z(90,"XC")
D.evG=new B.z(50,"L")
D.etW=new B.z(40,"XL")
D.es9=new B.z(10,"X")
D.exr=new B.z(9,"IX")
D.evX=new B.z(5,"V")
D.evq=new B.z(4,"IV")
D.esE=new B.z(1,"I")
D.dqo=w([D.es2,D.exe,D.evF,D.etV,D.es3,D.exf,D.evG,D.etW,D.es9,D.exr,D.evX,D.evq,D.esE],x.ek)
D.eUR=new B.cw(["open",A.iW,"Open & write","Keep writing this book"])
D.eVh=new B.cw(["print",A.uo,"Print as a book","Fold and staple it"])
D.dqy=w([D.eUR,D.eVh],B.av("O<+(n,a0,n,n)>"))
D.drf=w([D.a6w,D.mS,D.IC,D.SF,D.dh,D.SE],x.i)
D.eL6=new B.z(-1,"Small")
D.erO=new B.z(0,"Normal")
D.esD=new B.z(1,"Big")
D.etf=new B.z(2,"Huge")
D.drQ=w([D.eL6,D.erO,D.esD,D.etf],x.ek)
D.dsh=w([49,65,89,38,83,89],x.t)
D.dso=w([A.tz,A.hS,A.c1],x.O)
D.dsR=w([D.dh,D.mS,D.uM,D.a6w,D.IC,D.SF],x.i)
D.aFO=new B.du([0,D.Mx,8,D.aik,12,D.ail],B.av("du<H,a44>"))
D.ec2={gold:0,platinum:1,glow:2,rainbow:3,double:4,neon:5,framed:6,rosegold:7,jewels:8,aurora:9}
D.bob=new B.u(1,0.8313725490196079,0.6274509803921569,0.09019607843137255,A.q)
D.cV3=w([A.bM,D.bob],x.O)
D.dfB=w([A.b1,A.bk],x.O)
D.da4=w([A.c4,A.aQ,A.bG],x.O)
D.dqz=w([A.cr,A.bs],x.O)
D.d2h=w([A.b9,A.f4],x.O)
D.dcT=w([A.b5,A.fa],x.O)
D.bgD=new B.u(1,0.9529411764705882,0.7764705882352941,0.7098039215686275,A.q)
D.dc9=w([D.bgD,A.oV],x.O)
D.d6m=w([A.ha,A.xK],x.O)
D.d25=w([A.bt,A.cb],x.O)
D.dvx=new B.bw(D.ec2,[D.cV3,H.aqW,D.dfB,D.da4,D.dqz,D.d2h,D.dcT,D.dc9,D.d6m,D.d25],B.av("bw<n,ai<u>>"))
D.ebj={"[Jina la Baba wa Mume]":0,"[Jina la Jamii ya Mume]":1,"[Jina la Nyumba ya Mume]":2,"[Jina la Kijana]":3,"[Jina la Binti]":4,"[Jina la Baba wa Binti]":5,"[Jina la Jamii ya Binti]":6,"[Jina la Nyumba ya Binti]":7}
D.a5n=new B.bw(D.ebj,["[Jina la Baba wa Mume]","[Jina la Jamii ya Mume]","[Jina la Nyumba ya Mume]","[Jina la Kijana]","[Jina la Binti]","[Jina la Baba wa Binti]","[Jina la Jamii ya Binti]","[Jina la Nyumba ya Binti]"],B.av("bw<n,n>"))
D.a5u=new B.bw(A.hO,[],B.av("bw<H,+icon3d,picture(n?,n?)>"))
D.dzQ=new F.Nc(30,null)
D.dEU=new F.mB("Chapter 1","","","")
D.dpr=w([D.dEU],x.B)
D.dEY=new F.ru("My Book","","",D.dpr,E.aH6)
D.dEW=new F.uK("starry",null,null,null,null,"","","")
D.dEZ=new F.ru("Dream Big","","",E.a4q,D.dEW)
D.dEX=new F.uK("story",null,null,null,null,"","","")
D.dF_=new F.ru("Little Lion","","",E.a4q,D.dEX)
D.dEV=new F.uK("vintage",null,null,null,null,"","","")
D.dF0=new F.ru("Our Story","","",E.a4q,D.dEV)
D.dHY=new C.EM("","NGMY","","")
D.dP9=new C.zN("The NGMY Times","NGMY NEWS","","","By the NGMY Newsroom","",A.Z,"","","")
D.e63=new C.b1O(null,null,null,null)
D.e7M=new C.arI(null)
D.e7Y=new C.asb(0,"smaller")
D.e7Z=new C.asb(1,"bigger")
D.aIq=new C.asb(2,"fit")
D.efq=new B.t(3,6)
D.efK=new B.t(4,8)
D.ejR=new B.D(E.ajc,T.adH,null)
D.ejV=new B.D(A.ZJ,A.mq,null)
D.bNX=new B.ae(A.l8,16,A.bY,null,null,null)
D.ejZ=new B.D(A.iy,D.bNX,null)
D.baj=new B.fi(2.2,null,null,null,null,A.c,null,null,null,null)
D.eka=new B.D(A.Gc,D.baj,null)
D.bYm=new B.ae(A.cx,16,A.aB,null,null,null)
D.eke=new B.D(A.eB,D.bYm,null)
D.fBC=new B.y("Play",null,A.nF,null,null,null,null,null,null,null,null,null)
D.dfQ=w([U.apr,A.t0,D.fBC],x.p)
D.eZU=new B.cc(A.aN,A.e,A.Q,A.m,null,A.p,null,0,D.dfQ,null)
D.ekh=new B.D(A.nn,D.eZU,null)
D.bas=new B.fi(2.4,null,null,null,null,null,null,null,null,null)
D.f4K=new B.a7(20,20,D.bas,null)
D.ekn=new B.D(A.iy,D.f4K,null)
D.fKT=new B.y("Seconds per slide",null,A.fQ,null,null,null,null,null,null,null,null,null)
D.ekw=new B.D(A.bf,D.fKT,null)
D.elR=new C.a8U(2,"print")
D.elU=new B.iS(1,0.7764705882352941,0.1568627450980392,0.1568627450980392)
D.enw=new B.hh("/Annot")
D.eny=new B.hh("/URI")
D.fvN=new B.y("Share text outline",null,null,null,null,null,null,null,null,null,null,null)
D.epC=new B.jt("share",48,D.fvN,null,B.av("jt<n>"))
D.bYg=new B.ae(A.e5,14,A.eG,null,null,null)
D.epL=new B.cN(null,-2,-2,null,null,null,D.bYg,null)
D.cXe=w([I.agt,A.K],x.O)
D.c3Q=new B.a9(A.a4,A.a8,A.x,D.cXe,null,null)
D.b2Z=new B.o(null,null,null,null,null,D.c3Q,A.n)
D.btt=new B.kW(D.b2Z,A.bg,null,null)
D.epX=new B.cN(0,0,null,0,8,null,D.btt,null)
D.dkL=w([A.hT,A.mw,A.cc],x.O)
D.eqB=new B.c0(A.A,0.5,A.x,null,0,D.dkL,null,null)
D.et8=new B.z(0.22,A.bk)
D.exL=new B.z("ai","Your newspaper is ready. Tell me anything you want changed, or ask me a question about NGMY.")
D.ezX=new B.z(0.5,A.hn)
D.eJv=new B.z(0.78,A.aV)
D.eUH=new B.cw([A.bv,0.22,0.7,2.6])
D.eUN=new B.cw([A.b9,0.36,1.2,1.3])
D.eUT=new B.cw([A.dE,0.28,0.2,0.4])
D.eUZ=new B.cw([A.cC,0.05,0.3,0.35])
D.eV4=new B.cw([A.bt,0.28,0.9,0])
D.eVc=new B.cw([A.aC,-0.25,-0.15,0.45])
D.eW2=new B.cw([A.c4,0.42,1,4.1])
D.eZC=new B.a9S(9)
D.bP4=new B.ae(A.H8,28,A.bG,null,null,null)
D.fLr=new B.y("NGMY News",null,A.de,null,null,null,null,null,null,null,null,null)
D.bDv=new B.bA(1,A.bd,D.fLr,null)
D.do6=w([D.bP4,A.as,D.bDv],x.p)
D.eZO=new B.cc(A.aN,A.e,A.j,A.m,null,A.p,null,0,D.do6,null)
D.bPf=new B.ae(A.oc,16,A.c,null,null,null)
D.fN_=new B.y("Book",null,A.oA,null,null,null,null,null,null,null,null,null)
D.dsn=w([D.bPf,A.em,D.fN_],x.p)
D.eZW=new B.cc(A.aN,A.e,A.Q,A.m,null,A.p,null,0,D.dsn,null)
D.bVR=new B.ae(A.jR,10,A.c,null,null,null)
D.fzE=new B.y("Pro",null,A.nC,null,null,null,null,null,null,null,null,null)
D.dfV=w([D.bVR,A.qE,D.fzE],x.p)
D.f__=new B.cc(A.aN,A.e,A.Q,A.m,null,A.p,null,0,D.dfV,null)
D.fKR=new B.y("Make a newspaper",null,A.UH,null,null,null,null,null,null,null,null,null)
D.c51=w([E.a2i,A.ac,D.fKR],x.p)
D.f_0=new B.cc(A.aN,A.e,A.Q,A.m,null,A.p,null,0,D.c51,null)
D.bUm=new B.ae(A.l5,18,A.bM,null,null,null)
D.fBQ=new B.y("Ending celebration",null,A.hB,null,null,null,null,null,null,null,null,null)
D.dn6=w([D.bUm,A.bn,D.fBQ],x.p)
D.f_3=new B.cc(A.aN,A.e,A.j,A.m,null,A.p,null,0,D.dn6,null)
D.bVD=new B.ae(A.iW,18,A.kb,null,null,null)
D.ffG=new B.F(!0,A.kb,null,null,null,null,15,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fNi=new B.y("Write",null,D.ffG,null,null,null,null,null,null,null,null,null)
D.d4n=w([D.bVD,A.ac,D.fNi],x.p)
D.f_a=new B.cc(A.aN,A.e,A.Q,A.m,null,A.p,null,0,D.d4n,null)
D.fzC=new B.y("Download picture",null,A.oz,null,null,null,null,null,null,null,null,null)
D.bFZ=new B.qv(A.e2,A.A,A.f,D.fzC,null)
D.bG9=new B.ds(1,A.cn,D.bFZ,null)
D.dgj=w([L.api,A.ac,D.bG9],x.p)
D.f_b=new B.cc(A.aN,A.b8,A.j,A.m,null,A.p,null,0,D.dgj,null)
D.bR2=new B.ae(A.H8,22,A.bG,null,null,null)
D.fJq=new B.y("NGMY NEWS",null,H.a99,null,null,null,null,null,null,null,null,null)
D.cWF=w([D.bR2,A.ac,D.fJq],x.p)
D.f_k=new B.cc(A.aN,A.e,A.Q,A.m,null,A.p,null,0,D.cWF,null)
D.f_w=new B.ph(!1,!1,null,T.WI,null,A.c0,null,null,null)
D.a8h=new B.jn([D.cl,D.dh,D.uM,D.IB,D.uN,D.aIg],B.av("jn<hF>"))
D.edI={title:0,quote:1,closing:2,bio:3}
D.f0H=new B.dD(D.edI,4,x.M)
D.ebC={caps:0,stamp:1,retro:2,glitch:3,whisper:4}
D.f0K=new B.dD(D.ebC,5,x.M)
D.ed0={midnight:0,rose_gold:1,slate_pro:2,neon_night:3,charcoal:4,crimson:5,gold:6,plum:7}
D.a8i=new B.dD(D.ed0,8,x.M)
D.ecd={Design:0,Transitions:1,Insert:2}
D.f0P=new B.dD(D.ecd,3,x.M)
D.hpV=new B.jn([D.a6x],B.av("jn<w8>"))
D.ecm={float3d:0,drift:1,pulse:2}
D.f0T=new B.dD(D.ecm,3,x.M)
D.aPN=new B.jn([D.Iy,D.Iz,D.IA],B.av("jn<mF>"))
D.ebA={shimmer:0,golddust:1,spotlight:2,goldframe:3,twinkle:4,orbit:5,rays:6,bokeh:7,aurora:8,sparkle:9,sheen:10,velvet:11,crest:12,filigree:13}
D.aPQ=new B.dD(D.ebA,14,x.M)
D.hpW=new B.dD(A.hO,0,B.av("dD<w8>"))
D.ecj={"kbpabloqr@gmail.com":0,"ngumoyaking@gmail.com":1,"appbusiness321@gmail.com":2,"appbusiness84@gmail.com":3}
D.TL=new B.dD(D.ecj,4,x.M)
D.ebt={print:0,rotate:1,text_box:2,picture:3,title:4,subtitle:5,bullets:6,numbered:7,quote:8,citation:9,date_stamp:10,page_number:11,header_bar:12,footer_bar:13,divider:14,table:15,sticky:16,duplicate_el:17,delete_el:18,bring_fwd:19,send_back:20,align_left:21,align_center:22,align_right:23,word_count:24,link_text:25,phone:26,email:27,new_slide:28,present:29}
D.aPT=new B.dD(D.ebt,30,x.M)
D.ecs={circle:0,triangle:1,hexagon:2,diamond:3}
D.f1f=new B.dD(D.ecs,4,x.M)
D.f3E=new B.au(390,844)
D.f4t=new B.a7(20,20,A.Lj,null)
D.aQF=new B.a7(null,2.5,null,null)
D.f4D=new B.a7(18,18,A.Lj,null)
D.bVH=new B.ae(A.je,19,A.c,null,null,null)
D.f4P=new B.a7(38,38,D.bVH,null)
D.bTV=new B.ae(A.yY,22,A.c,null,null,null)
D.f4R=new B.a7(40,40,D.bTV,null)
D.f5p=new B.hR(2,10,10,1.15,null)
D.aQN=new B.hR(2,16,14,0.62,null)
D.bBw=new B.Q(32,30,32,40)
D.bbW=new B.u(0.3333333333333333,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.q)
D.bP1=new B.ae(A.qg,56,D.bbW,null,null,null)
D.ahq=new B.u(0.6,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.q)
D.fhK=new B.F(!0,D.ahq,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGl=new B.y("Your books will live here.",null,D.fhK,null,A.L,null,null,null,null,null,null,null)
D.d7k=w([D.bP1,A.W,D.fGl],x.p)
D.bsq=new B.fj(A.ah,A.e,A.j,A.m,null,A.p,null,0,D.d7k,null)
D.eku=new B.D(D.bBw,D.bsq,null)
D.f5L=new B.mi(D.eku,null)
D.fGi=new B.y("Chagua jimbo la Civic Registry kwanza.",null,null,null,null,null,null,null,null,null,null,null)
D.f62=new B.b2(D.fGi,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.fEp=new B.y("Done \u2014 only the text size was changed. Undo brings back the old size.",null,null,null,null,null,null,null,null,null,null,null)
D.f63=new B.b2(D.fEp,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.fJu=new B.y("This slide has no text boxes.",null,null,null,null,null,null,null,null,null,null,null)
D.f6c=new B.b2(D.fJu,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.fK2=new B.y("Tap fields to edit names. Tap signature boxes to sign or re-sign. Print from the View tab.",null,null,null,null,null,null,null,null,null,null,null)
D.f6r=new B.b2(D.fK2,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.fD3=new B.y("Sign in to Civic Registry to view Hati ya Kiapo cha Uongozi.",null,null,null,null,null,null,null,null,null,null,null)
D.f6E=new B.b2(D.fD3,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.fRi=new B.y("Could not read that presentation QR or document code.",null,null,null,null,null,null,null,null,null,null,null)
D.f6X=new B.b2(D.fRi,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.fOk=new B.y("Use the 5-character code on the document QR, like GA847.",null,null,null,null,null,null,null,null,null,null,null)
D.f77=new B.b2(D.fOk,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.fKb=new B.y("Sign in to Civic Registry to view this document.",null,null,null,null,null,null,null,null,null,null,null)
D.f7R=new B.b2(D.fKb,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.fxO=new B.y("Buttons hidden. Double-tap the top-right corner to show them again.",null,null,null,null,null,null,null,null,null,null,null)
D.f87=new B.b2(D.fxO,null,null,null,null,null,null,null,A.iG,null,null,null,null,A.q3,!1,null,null,null,A.t,null)
D.fzM=new B.y("Could not crop that picture.",null,null,null,null,null,null,null,null,null,null,null)
D.f8p=new B.b2(D.fzM,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.fFZ=new B.y("This oath is locked for editing (5 hours after the president signed). You can still view and play the video.",null,null,null,null,null,null,null,null,null,null,null)
D.f8r=new B.b2(D.fFZ,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.fFF=new B.y("Only the authorized registrar for this state can add the oath video.",null,null,null,null,null,null,null,null,null,null,null)
D.f8s=new B.b2(D.fFF,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.fMf=new B.y("Document code copied.",null,null,null,null,null,null,null,null,null,null,null)
D.f8t=new B.b2(D.fMf,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.fu_=new B.y("Tap the logo or a picture on this slide first.",null,null,null,null,null,null,null,null,null,null,null)
D.f8C=new B.b2(D.fu_,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.fAX=new B.y("Sign in to unlock Slides Pro features.",null,null,null,null,null,null,null,null,null,null,null)
D.f8Z=new B.b2(D.fAX,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.fPY=new B.y("Done \u2014 the look is changed. Undo brings back the old one.",null,null,null,null,null,null,null,null,null,null,null)
D.f90=new B.b2(D.fPY,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.fPu=new B.y("The NGMY logo stays on every quote. You can move it or change its frame.",null,null,null,null,null,null,null,null,null,null,null)
D.f94=new B.b2(D.fPu,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.fsV=new B.y("Video upload failed. Check your connection and try again.",null,null,null,null,null,null,null,null,null,null,null)
D.f96=new B.b2(D.fsV,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.fLm=new B.y("This transferred document is view only. You can print or download it.",null,null,null,null,null,null,null,null,null,null,null)
D.f9f=new B.b2(D.fLm,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.fP3=new B.y("Done \u2014 the words are changed and the design is kept. Undo brings back the old version.",null,null,null,null,null,null,null,null,null,null,null)
D.f9u=new B.b2(D.fP3,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.fOV=new B.y("Book saved on this device.",null,null,null,null,null,null,null,null,null,null,null)
D.f9w=new B.b2(D.fOV,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.fsM=new B.y("Only the authorized registrar for this state can update this signature.",null,null,null,null,null,null,null,null,null,null,null)
D.f9C=new B.b2(D.fsM,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.fwN=new B.y("You don't have a Bio link yet \u2014 create one in Bio first.",null,null,null,null,null,null,null,null,null,null,null)
D.fa3=new B.b2(D.fwN,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.fO7=new B.y("Nothing to transfer yet \u2014 fill names or details on this document first.",null,null,null,null,null,null,null,null,null,null,null)
D.faf=new B.b2(D.fO7,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.fwB=new B.y("Only the authorized registrar for this state can sign this document.",null,null,null,null,null,null,null,null,null,null,null)
D.fau=new B.b2(D.fwB,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.bk0=new B.u(1,0.9764705882352941,0.8352941176470589,0.8274509803921568,A.q)
D.cVi=w([A.ic,A.oV,D.bk0,D.ae9,A.ic],x.O)
D.faS=new B.fX(A.A,0,6.283185307179586,A.x,D.cVi,null,null)
D.d3w=w([A.bM,A.c1,A.hS,D.Be,A.bM],x.O)
D.aRl=new B.fX(A.A,0,6.283185307179586,A.x,D.d3w,null,null)
D.di9=w([A.c4,A.bv,A.b9,A.bj,A.bG,A.c4],x.O)
D.faX=new B.fX(A.A,0,6.283185307179586,A.x,D.di9,null,null)
D.cXt=w([A.q_,A.oW,A.xI,A.ic,A.q_],x.O)
D.faY=new B.fX(A.A,0,6.283185307179586,A.x,D.cXt,null,null)
D.di3=w([A.aP,A.bL,A.aL,A.al,A.aP],x.O)
D.faZ=new B.fX(A.A,0,6.283185307179586,A.x,D.di3,null,null)
D.dqc=w([A.bt,A.b9,A.bv,A.c4,A.bt],x.O)
D.fb0=new B.fX(A.A,0,6.283185307179586,A.x,D.dqc,null,null)
D.bfx=new B.u(1,0,1,0,A.q)
D.bkk=new B.u(1,0,1,1,A.q)
D.bhl=new B.u(1,0,0,1,A.q)
D.bdi=new B.u(1,1,0,1,A.q)
D.dm6=w([A.Lz,A.aga,D.bfx,D.bkk,D.bhl,D.bdi,A.Lz],x.O)
D.fb1=new B.fX(A.A,0,6.283185307179586,A.x,D.dm6,null,null)
D.fbg=new C.awk(2,"immersiveSticky")
D.fbh=new C.awk(3,"edgeToEdge")
D.fbi=new C.awk(4,"manual")
D.fdL=new B.F(!0,A.oQ,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aRU=new B.F(!0,A.eV,null,null,null,null,12.5,A.P,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fek=new B.F(!0,E.nc,null,null,null,null,13,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fh0=new B.F(!0,A.c,null,null,null,null,22,A.u,null,0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fha=new B.F(!0,A.bY,null,null,null,null,12.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fhv=new B.F(!0,A.eG,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fiX=new B.F(!0,A.bL,null,null,null,null,13.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fj6=new B.F(!0,A.jJ,null,null,null,null,11,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fjk=new B.rP(!0,A.IY,null,null,null,null,A.dx,8,null,null,null,null,null,null,null,null,null,null,null,null)
D.fjN=new B.F(!0,A.c,null,null,null,null,8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fkt=new B.F(!0,A.js,null,null,null,null,11.5,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fkR=new B.F(!0,A.aB,null,null,null,null,12.5,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.elX=new B.iS(1,1,0.7568627450980392,0.027450980392156862)
D.fkV=new B.rP(!0,D.elX,null,null,null,null,A.dx,7,null,null,null,null,null,null,null,null,null,null,null,null)
D.agh=new B.u(1,0.8392156862745098,0.7254901960784313,0.6039215686274509,A.q)
D.aSJ=new B.F(!0,D.agh,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fl2=new B.F(!0,D.ahq,null,null,null,null,11.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fl3=new B.F(!0,A.c,null,null,null,null,20,A.u,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aSL=new B.F(!0,A.c,null,null,null,null,null,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.flG=new B.rP(!0,A.pn,null,null,null,null,A.dx,9,null,null,null,null,null,null,null,null,null,null,null,null)
D.flX=new B.F(!0,null,null,null,null,null,20,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fmu=new B.F(!0,A.c,null,null,null,null,16,A.H,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fmw=new B.F(!0,D.agh,null,null,null,null,14,null,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.JX=new B.F(!0,A.aB,null,null,null,null,12.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fn_=new B.F(!0,A.c1,null,null,null,null,11.5,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fn9=new B.F(!0,A.bL,null,null,null,null,14,A.a7,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fnd=new B.F(!0,A.bM,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fnu=new B.F(!0,A.c,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.ay9,null,null,null)
D.fnx=new B.F(!0,A.cs,null,null,null,null,null,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fnz=new B.F(!0,A.c,null,null,null,null,30,A.u,null,5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fnN=new B.F(!0,A.c,null,null,null,null,6.5,A.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fo_=new B.F(!0,A.ds,null,null,null,null,13,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.foB=new B.F(!0,A.aR,null,null,null,null,null,A.a7,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.foK=new B.F(!0,A.c,null,null,null,null,13.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.foZ=new B.F(!0,A.ae,null,null,null,null,15,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aTn=new B.F(!0,A.c,null,null,null,null,14.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aTp=new B.F(!0,A.bY,null,null,null,null,11.5,A.a7,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bpV=new B.u(0.7019607843137254,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.q)
D.fqJ=new B.F(!0,D.bpV,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aTv=new B.F(!0,E.nc,null,null,null,null,16,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frd=new B.F(!0,A.bL,null,null,null,null,11,A.a7,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frg=new B.F(!0,O.lv,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fk1=new B.F(!0,A.w,null,null,null,null,8,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fsx=new B.y("NEW",null,D.fk1,null,null,null,null,null,null,null,null,null)
D.fsP=new B.y("Hati ya Kuhowesha",null,A.ft,null,null,null,null,null,null,null,null,null)
D.fth=new B.y("Session ended",null,null,null,null,null,null,null,null,null,null,null)
D.ftG=new B.y("Scrollable PDF on this slide",null,A.df,null,null,null,null,null,null,null,null,null)
D.fup=new B.y("Big quote mark",null,A.jj,null,null,null,null,null,null,null,null,null)
D.fus=new B.y("Move down",null,null,null,null,null,null,null,null,null,null,null)
D.fuE=new B.y("Duplicate",null,null,null,null,null,null,null,null,null,null,null)
D.fv5=new B.y("Edit window ended",null,null,null,null,null,null,null,null,null,null,null)
D.fv7=new B.y("How many slides?",null,A.fQ,null,null,null,null,null,null,null,null,null)
D.fvF=new B.y("Transfer",null,A.ck,null,null,null,null,null,null,null,null,null)
D.ffJ=new B.F(!0,A.c,null,null,null,null,12,A.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fw_=new B.y("Luxury FX",null,D.ffJ,null,null,null,null,null,null,null,null,null)
D.fwk=new B.y("Font",null,A.t5,null,null,null,null,null,null,null,null,null)
D.fwv=new B.y("Anza hati mpya?",null,null,null,null,null,null,null,null,null,null,null)
D.fwC=new B.y("Ghairi",null,null,null,null,null,null,null,null,null,null,null)
D.fqh=new B.F(!0,A.bL,null,null,null,null,12,A.P,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwK=new B.y("Example  GA847",null,D.fqh,null,null,null,null,null,null,null,null,null)
D.fx9=new B.y("Design shapes",null,A.jj,null,null,null,null,null,null,null,null,null)
D.fxk=new B.y("Your 4-hour window to edit this admin-shared document has ended. You can still view, print, or download it.",null,null,null,null,null,null,null,null,null,null,null)
D.fxo=new B.y("Non-stop (loop)",null,A.fQ,null,null,null,null,null,null,null,null,null)
D.fxC=new B.y("Hati ya Kuhoweya",null,A.ft,null,null,null,null,null,null,null,null,null)
D.fxV=new B.y("Photo studio",null,A.fR,null,null,null,null,null,null,null,null,null)
D.fyo=new B.y("Add your picture",null,A.k2,null,null,null,null,null,null,null,null,null)
D.fjl=new B.F(!0,A.c,null,null,null,null,20,A.u,null,-0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyp=new B.y("Enter document code",null,D.fjl,null,A.L,null,null,null,null,null,null,null)
D.fyq=new B.y("Kiswahili",null,null,null,null,null,null,null,null,null,null,null)
D.fyv=new B.y("English",null,null,null,null,null,null,null,null,null,null,null)
D.fgQ=new B.F(!0,E.nc,null,null,null,null,19,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyQ=new B.y("Delete this book?",null,D.fgQ,null,A.L,null,null,null,null,null,null,null)
D.flw=new B.F(!0,E.nc,null,null,null,null,18,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzO=new B.y("Your library",null,D.flw,null,null,null,null,null,null,null,null,null)
D.fzU=new B.y("Delete",null,A.aSC,null,null,null,null,null,null,null,null,null)
D.fzX=new B.y("Add a picture and the AI writes a whole newspaper page about NGMY around it: the headline, the story and the caption. It knows the app, the Civic Registry, the Advisors and KB PABLO QR, the CEO. Pick old or modern designs, then tell the AI what to change.",null,At.E_,null,null,null,null,null,null,null,null,null)
D.fA8=new B.y("Element flies in",null,A.aSP,null,null,null,null,null,null,null,null,null)
D.US=new B.y("Hati mpya (chagua muundo)",null,null,null,null,null,null,null,null,null,null,null)
D.fAw=new B.y("Fungua / hariri hati",null,null,null,null,null,null,null,null,null,null,null)
D.fAU=new B.y("Cancel",null,E.aSZ,null,null,null,null,null,null,null,null,null)
D.fAW=new B.y("The lines and circles that come with the design",null,A.hl,null,null,null,null,null,null,null,null,null)
D.fp6=new B.F(!0,A.he,null,null,null,null,11,A.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBl=new B.y("DOCUMENT CODE",null,D.fp6,null,null,null,null,null,null,null,null,null)
D.fCb=new B.y("Quotes",null,G.a9L,null,null,null,null,null,null,null,null,null)
D.fiJ=new B.F(!0,O.lv,null,null,null,null,null,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCk=new B.y("Add a picture",null,D.fiJ,null,null,null,null,null,null,null,null,null)
D.fCs=new B.y("Point at a NGMY Slides transfer QR, or tap search to enter the document code",null,A.a9r,null,A.L,null,null,null,null,null,null,null)
D.fCw=new B.y("Look & feel",null,A.fQ,null,null,null,null,null,null,null,null,null)
D.fCB=new B.y("Rings",null,A.hB,null,null,null,null,null,null,null,null,null)
D.fCH=new B.y("W",null,A.t5,null,null,null,null,null,null,null,null,null)
D.fCR=new B.y("Move up",null,null,null,null,null,null,null,null,null,null,null)
D.fD9=new B.y("It goes behind your words. Then the photo studio opens: looks, light, colour, effects and crop.",null,A.UE,null,A.L,null,null,null,null,null,null,null)
D.fDb=new B.y("Write your book",null,A.cA,null,null,null,null,null,null,null,null,null)
D.fDW=new B.y("Add page",null,A.ck,null,null,null,null,null,null,null,null,null)
D.fEb=new B.y("Malipo ya Awamu ya Mahari",null,A.ft,null,null,null,null,null,null,null,null,null)
D.fja=new B.F(!0,A.c,null,null,null,null,24,A.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEq=new B.y("Create with AI",null,D.fja,null,A.L,null,null,null,null,null,null,null)
D.fEU=new B.y("Apply look",null,A.hB,null,null,null,null,null,null,null,null,null)
D.fjS=new B.F(!0,A.eq,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fFH=new B.y("Type your presentation below",null,D.fjS,null,A.L,null,null,null,null,null,null,null)
D.fFK=new B.y("Tap the code to copy it. Share the code or the QR: the other phone types the code or scans the QR.",null,H.aTz,null,A.L,null,null,null,null,null,null,null)
D.fFM=new B.y("Keep it",null,A.ck,null,null,null,null,null,null,null,null,null)
D.feD=new B.F(!0,A.co,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fFT=new B.y("Done",null,D.feD,null,null,null,null,null,null,null,null,null)
D.fGd=new B.y("Delete",null,A.nD,null,null,null,null,null,null,null,null,null)
D.fGn=new B.y("Hati ya Kiapo cha Uongozi",null,A.ft,null,null,null,null,null,null,null,null,null)
D.fi1=new B.F(!0,A.aR,null,null,null,null,13,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHh=new B.y("Write your idea in any language \u2014 the AI makes the slides.",null,D.fi1,null,A.L,null,null,null,null,null,null,null)
D.fHG=new B.y("Anza upya (hati mpya)",null,null,null,null,null,null,null,null,null,null,null)
D.fHM=new B.y("Layout",null,A.UJ,null,null,null,null,null,null,null,null,null)
D.fIp=new B.y("Print",null,A.cA,null,null,null,null,null,null,null,null,null)
D.fIx=new B.y("X",null,A.t5,null,null,null,null,null,null,null,null,null)
D.fJ7=new B.y("Your logo goes on every slide and your pictures replace stock photos. The ring button also has the ending celebrations.",null,X.DZ,null,null,null,null,null,null,null,null,null)
D.fJH=new B.y("Use the whole picture",null,null,null,null,null,null,null,null,null,null,null)
D.fJV=new B.y("Hati ya Kuhowa",null,A.ft,null,null,null,null,null,null,null,null,null)
D.fJX=new B.y("Choose a class template",null,A.ft,null,null,null,null,null,null,null,null,null)
D.fJZ=new B.y("Drag the picture to move it. Pinch or use the slider to zoom.",null,A.hl,null,null,null,null,null,null,null,null,null)
D.fK5=new B.y("Download the newspaper picture",null,A.cA,null,null,null,null,null,null,null,null,null)
D.fKi=new B.y("Print view",null,null,null,null,null,null,null,null,null,null,null)
D.fKp=new B.y("Done",null,A.aTm,null,null,null,null,null,null,null,null,null)
D.fKz=new B.y("Ending celebration",null,A.de,null,null,null,null,null,null,null,null,null)
D.fKA=new B.y("Delete element",null,null,null,null,null,null,null,null,null,null,null)
D.fKP=new B.y("Plays after your last slide. Tap one to watch it and change its words or logo.",null,X.vb,null,null,null,null,null,null,null,null,null)
D.fLM=new B.y("Export presentation",null,A.df,null,null,null,null,null,null,null,null,null)
D.fLN=new B.y("What would you like to do?",null,D.aSJ,null,null,null,null,null,null,null,null,null)
D.fLS=new B.y("Delete",null,A.cA,null,null,null,null,null,null,null,null,null)
D.fMo=new B.y("Your 4-hour marriage document session has ended. Pay again to keep editing.",null,null,null,null,null,null,null,null,null,null,null)
D.fMs=new B.y("Hati (Documents)",null,A.ft,null,null,null,null,null,null,null,null,null)
D.fMF=new B.y("Done",null,A.ll,null,null,null,null,null,null,null,null,null)
D.fq7=new B.F(!0,A.c,null,null,null,null,18,A.H,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fMK=new B.y("Delete presentation?",null,D.fq7,null,A.L,null,null,null,null,null,null,null)
D.fN3=new B.y("After the last slide it starts again from the first",null,A.hl,null,null,null,null,null,null,null,null,null)
D.fNf=new B.y("\ud83c\udf33",null,A.DY,null,A.L,null,null,null,null,null,null,null)
D.fNx=new B.y("Plays big after your last slide. Tap one to watch it, change the words or add your logo.",null,A.hl,null,null,null,null,null,null,null,null,null)
D.fNE=new B.y("Transfer document",null,A.oC,null,null,null,null,null,null,null,null,null)
D.fNP=new B.y("Add to the slides",null,A.fQ,null,null,null,null,null,null,null,null,null)
D.fOb=new B.y("Endelea",null,null,null,null,null,null,null,null,null,null,null)
D.fOq=new B.y("Make a book",null,K.aSd,null,null,null,null,null,null,null,null,null)
D.fOu=new B.y("Books",null,A.cA,null,null,null,null,null,null,null,null,null)
D.fiB=new B.F(!0,A.al,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fOv=new B.y("Keep this page open until it finishes.",null,D.fiB,null,null,null,null,null,null,null,null,null)
D.fOx=new B.y("Making your video",null,A.de,null,null,null,null,null,null,null,null,null)
D.fOC=new B.y("LANGUAGE",null,W.t6,null,null,null,null,null,null,null,null,null)
D.fOJ=new B.y("Use this ending",null,A.cA,null,null,null,null,null,null,null,null,null)
D.fOR=new B.y("Scan presentation QR",null,null,null,null,null,null,null,null,null,null,null)
D.fOT=new B.y("Upload a different logo",null,A.ck,null,null,null,null,null,null,null,null,null)
D.fP9=new B.y("Delete from the database?",null,A.k2,null,null,null,null,null,null,null,null,null)
D.fPa=new B.y("H",null,A.t5,null,null,null,null,null,null,null,null,null)
D.fPA=new B.y("NGMY Quotes",null,A.de,null,null,null,null,null,null,null,null,null)
D.fQ2=new B.y("Cover",null,D.aTv,null,null,null,null,null,null,null,null,null)
D.fQ6=new B.y("Hati iliyopo ya jimbo hili itabadilishwa.",null,null,null,null,null,null,null,null,null,null,null)
D.fQ7=new B.y("Each page becomes its own slide you can present",null,A.hl,null,null,null,null,null,null,null,null,null)
D.fQu=new B.y("Y",null,A.t5,null,null,null,null,null,null,null,null,null)
D.fQG=new B.y("Crop the picture",null,A.ll,null,null,null,null,null,null,null,null,null)
D.fQN=new B.y("Edit text",null,A.JS,null,null,null,null,null,null,null,null,null)
D.fT5=B.dV("a8G")
D.Eb=new C.axF(0,"none")
D.aX3=new C.axF(1,"zipCrypto")
D.aX4=new C.axF(2,"aes")
D.hdE=new F.PJ("","",null)
D.heK=new C.bd3(null)
D.hfU=new C.ZX(null)
D.hiz=new C.ady(null)
D.hiB=new C.aET(null)
D.hlm=new C.a0b(null)
D.hlC=new C.a0I(null)
D.hlX=new C.buF(null)})();(function staticFields(){$.hiI=null
$.hiJ=null
$.hiK=null
$.hiL=null
$.h0r=B.vh("_lastQuoRemDigits")
$.h0s=B.vh("_lastQuoRemUsed")
$.ay0=B.vh("_lastRemUsed")
$.h0t=B.vh("_lastRem_nsh")
$.qh=B.a([4294967295,2147483647,1073741823,536870911,268435455,134217727,67108863,33554431,16777215,8388607,4194303,2097151,1048575,524287,262143,131071,65535,32767,16383,8191,4095,2047,1023,511,255,127,63,31,15,7,3,1,0],x.t)
$.a7t=B.T(x.N,x.I)
$.fYS=!1
$.hnA=B.T(B.av("l_"),x.N)
$.hnN=B.T(B.av("l_"),x.E)
$.hlL=!1
$.bAc="q"
$.QK=0
$.CT=B.T(x.N,B.av("ai<zO>"))
$.hm7=!1
$.h24=!1
$.hsv=null
$.hX6=B.T(x.N,B.av("aA<n?>"))
$.KI=""
$.j3=0
$.hfw=function(){var w=x.N
return B.T(w,w)}()
$.hfv=B.T(x.N,x.R)
$.h2p=!1
$.agi=B.T(x.N,x.E)
$.h3d=0
$.bl5=!1})();(function lazyInitializers(){var w=a.lazyFinal
w($,"ilH","Dd",()=>C.bay(0))
w($,"ilF","a2W",()=>C.bay(1))
w($,"ilG","hwf",()=>C.bay(2))
w($,"ilE","h78",()=>$.a2W().vg(0))
w($,"ilC","hwd",()=>C.bay(1e4))
w($,"ilD","hwe",()=>B.Es(8))
w($,"ihs","huf",()=>B.Es(0))
w($,"ihA","huj",()=>B.Es(0))
w($,"ihz","hui",()=>B.c06(0))
w($,"ipr","hyg",()=>{var v,u,t=x.N
t=B.T(t,t)
for(v=D.a5n.gdV(D.a5n),v=v.gaf(v);v.C();){u=v.gR(v)
t.n(0,u.b,u.a)}return t})
w($,"ipS","bEK",()=>{var v="Corporate",u=4280171146,t=4294967295,s=4280640491,r=4279080072,q="Modern",p="Bold",o=4278190080,n=4280472558,m=4279179050,l=4284773515,k=4287874557,j=4293548044,i=4279548070,h=x.O
return B.a([C.n0(new C.fJe(),v,"biz_plan_blue","Business Plan",B.a([B.b1(u),B.b1(t)],h)),C.n0(new C.fJf(),v,"exec_summary","Executive",B.a([B.b1(s),B.b1(t)],h)),C.n0(new C.fJg(),v,"teal_corporate","Teal Corp",B.a([B.b1(r),B.b1(4279310375)],h)),C.n0(new C.fJr(),q,"geometric_overlap","Geometric",B.a([B.b1(4279203438),B.b1(u)],h)),C.n0(new C.fJw(),p,"midnight_cyan","Midnight Cyan",B.a([B.b1(o),B.b1(n)],h)),C.n0(new C.fJx(),q,"diagonal_hero","Diagonal Hero",B.a([B.b1(m),B.b1(l)],h)),C.n0(new C.fJy(),v,"swot_grid","SWOT Grid",B.a([B.b1(u),B.b1(4278556265)],h)),C.n0(new C.fJz(),v,"layered_chevrons","Chevrons",B.a([B.b1(4280172719),B.b1(k)],h)),C.n0(new C.fJA(),q,"split_triangle","Split Panel",B.a([B.b1(s),B.b1(t)],h)),C.n0(new C.fJB(),v,"corporate_navy","Navy Pro",B.a([B.b1(4278982953),B.b1(4282090230)],h)),C.n0(new C.fJC(),p,"cyan_slash","Cyan Slash",B.a([B.b1(o),B.b1(4278630100)],h)),C.n0(new C.fJh(),p,"crimson_impact","Crimson",B.a([B.b1(4282714634),B.b1(4292617766)],h)),C.n0(new C.fJi(),q,"ocean_waves","Ocean Waves",B.a([B.b1(4278413729),B.b1(4286436348)],h)),C.n0(new C.fJj(),p,"mono_geometric","Mono Geo",B.a([B.b1(o),B.b1(n)],h)),C.n0(new C.fJk(),"Luxury","luxury_gold","Gold Luxe",B.a([B.b1(4280031511),B.b1(4293571336)],h)),C.n0(new C.fJl(),q,"hex_infographic","Hex Stack",B.a([B.b1(r),B.b1(4284410580)],h)),C.n0(new C.fJm(),q,"photo_banner","Photo Banner",B.a([B.b1(m),B.b1(4281908728)],h)),C.n0(new C.fJn(),v,"process_steps","Process",B.a([B.b1(s),B.b1(k)],h)),C.n0(new C.fJo(),"Minimal","grid_modern","Grid Modern",B.a([B.b1(l),B.b1(t)],h)),C.n0(new C.fJp(),"Luxury","platinum_frame","Platinum",B.a([B.b1(4282865001),B.b1(4293060848)],h)),C.n0(new C.fJq(),v,"agenda_cards","Agenda Cards",B.a([B.b1(u),B.b1(4292602622)],h)),C.n0(new C.fJs(),q,"headline_orange","Headline Orange",B.a([B.b1(j),B.b1(i)],h)),C.n0(new C.fJt(),q,"infographic_teal","Infographic",B.a([B.b1(r),B.b1(j)],h)),C.n0(new C.fJu(),q,"content_year","Year Feature",B.a([B.b1(j),B.b1(t)],h)),C.n0(new C.fJv(),q,"photo_cta","Photo CTA",B.a([B.b1(m),B.b1(i)],h))],B.av("O<EV>"))})
w($,"ipu","hyi",()=>B.af("^[A-Z]{2}\\d{3}$",!0,!1,!1,!1))})()};
(a=>{a["mCLD8mlF3bPTTIEzQp/9Y6fHYq0="]=a.current})($__dart_deferred_initializers__);