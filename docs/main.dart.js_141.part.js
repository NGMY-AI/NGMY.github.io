((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,Ah,A5,Ai,A6,Aj,U,A7,Ak,Al,C={
tF(d,e){for(;;){if(!(d>0&&e[d-1]===0))break;--d}return d},
fUp(d,e,f,g){var w,v=new Uint16Array(g),u=f-e
for(w=0;w<u;++w)v[w]=d[e+w]
return v},
Jn(d){var w
if(d===0)return $.CK()
if(d===1)return $.a2c()
if(d===2)return $.hot()
if(Math.abs(d)<4294967296)return C.b99(A.o.N(d))
w=C.hJ7(d)
return w},
b99(d){var w,v,u,t,s=d<0
if(s){if(d===-9223372036854776e3){w=new Uint16Array(4)
w[3]=32768
v=C.tF(4,w)
return new C.nP(v!==0,w,v)}d=-d}if(d<65536){w=new Uint16Array(1)
w[0]=d
v=C.tF(1,w)
return new C.nP(v===0?!1:s,w,v)}if(d<=4294967295){w=new Uint16Array(2)
w[0]=d&65535
w[1]=A.o.aA(d,16)
v=C.tF(2,w)
return new C.nP(v===0?!1:s,w,v)}v=A.o.an(A.o.gajr(d)-1,16)+1
w=new Uint16Array(v)
for(u=0;d!==0;u=t){t=u+1
w[u]=d&65535
d=A.o.an(d,65536)}v=C.tF(v,w)
return new C.nP(v===0?!1:s,w,v)},
hJ7(d){var w,v,u,t,s,r,q,p
if(isNaN(d)||d==1/0||d==-1/0)throw B.V(B.dI("Value must be finite: "+d,null))
d=Math.floor(d)
if(d===0)return $.CK()
w=$.hos()
for(v=w.$flags|0,u=0;u<8;++u){v&2&&B.aj(w)
w[u]=0}v=J.l5(A.aG.gaM(w))
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
q=new C.nP(!1,r,4)
if(s<0)p=q.mo(0,-s)
else p=s>0?q.dV(0,s):q
return p},
fUq(d,e,f,g){var w,v,u
if(e===0)return 0
if(f===0&&g===d)return e
for(w=e-1,v=g.$flags|0;w>=0;--w){u=d[w]
v&2&&B.aj(g)
g[w+f]=u}for(w=f-1;w>=0;--w){v&2&&B.aj(g)
g[w]=0}return e+f},
hbk(d,e,f,g){var w,v,u,t,s,r=A.o.an(f,16),q=A.o.F(f,16),p=16-q,o=A.o.dV(1,p)-1
for(w=e-1,v=g.$flags|0,u=0;w>=0;--w){t=d[w]
s=A.o.fE(t,p)
v&2&&B.aj(g)
g[w+r+1]=(s|u)>>>0
u=A.o.dV(t&o,q)}v&2&&B.aj(g)
g[r]=u},
hbf(d,e,f,g){var w,v,u,t,s=A.o.an(f,16)
if(A.o.F(f,16)===0)return C.fUq(d,e,s,g)
w=e+s+1
C.hbk(d,e,f,g)
for(v=g.$flags|0,u=s;--u,u>=0;){v&2&&B.aj(g)
g[u]=0}t=w-1
return g[t]===0?t:w},
hJa(d,e,f,g){var w,v,u,t,s=A.o.an(f,16),r=A.o.F(f,16),q=16-r,p=A.o.dV(1,r)-1,o=A.o.fE(d[s],r),n=e-s-1
for(w=g.$flags|0,v=0;v<n;++v){u=d[v+s+1]
t=A.o.dV(u&p,q)
w&2&&B.aj(g)
g[v]=(t|o)>>>0
o=A.o.fE(u,r)}w&2&&B.aj(g)
g[n]=o},
cDY(d,e,f,g){var w,v=e-g
if(v===0)for(w=e-1;w>=0;--w){v=d[w]-f[w]
if(v!==0)return v}return v},
hJ8(d,e,f,g,h){var w,v,u
for(w=h.$flags|0,v=0,u=0;u<g;++u){v+=d[u]+f[u]
w&2&&B.aj(h)
h[u]=v&65535
v=v>>>16}for(u=g;u<e;++u){v+=d[u]
w&2&&B.aj(h)
h[u]=v&65535
v=v>>>16}w&2&&B.aj(h)
h[e]=v},
b9a(d,e,f,g,h){var w,v,u
for(w=h.$flags|0,v=0,u=0;u<g;++u){v+=d[u]-f[u]
w&2&&B.aj(h)
h[u]=v&65535
v=0-(A.o.aA(v,16)&1)}for(u=g;u<e;++u){v+=d[u]
w&2&&B.aj(h)
h[u]=v&65535
v=0-(A.o.aA(v,16)&1)}},
hbl(d,e,f,g,h,i){var w,v,u,t,s,r
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
hJ9(d,e,f){var w,v=e[f]
if(v===d)return 65535
w=A.o.e6((v<<16|e[f-1])>>>0,d)
if(w>65535)return 65535
return w},
nP:function nP(d,e,f){this.a=d
this.b=e
this.c=f},
cDZ:function cDZ(){},
cE_:function cE_(){},
cE0:function cE0(d,e){this.a=d
this.b=e},
cE1:function cE1(d){this.a=d},
aQE:function aQE(d,e){this.a=d
this.b=e},
h1e(d,e,f){var w=new C.Rn(d,A.o.an(Date.now(),1000),e)
w.Q=f
return w},
Rn:function Rn(d,e,f){var _=this
_.a=d
_.b=420
_.e=e
_.as=_.Q=null
_.at=f},
a3o:function a3o(d,e){this.a=d
this.b=e},
bGW:function bGW(d){this.a=d
this.c=this.b=0},
hrG(){return new C.bFi()},
bFi:function bFi(){var _=this
_.ax=_.at=_.as=_.Q=_.z=_.y=_.x=_.w=_.r=_.f=_.e=_.d=_.c=_.b=_.a=$
_.ay=0
_.ch=-1
_.cx=_.CW=0
_.fr=_.dy=_.dx=_.db=_.cy=$
_.fx=0},
cw8:function cw8(d){var _=this
_.a=-1
_.r=_.f=0
_.x=d},
hIQ(d,e,f){var w,v,u,t,s
if(d.gam(d))return new Uint8Array(0)
w=new Uint8Array(B.ce(d.gcUT(d)))
v=f*2+2
u=C.h8X(C.h8Z(),64)
t=new C.cg0(u)
u=u.b
u===$&&B.c()
t.c=new Uint8Array(u)
t.a=new C.cg1(e,1000,v)
s=new Uint8Array(v)
return A.aG.dq(s,0,t.cIj(w,0,s,0))},
cw6:function cw6(d,e){this.c=d
this.d=e},
aws:function aws(d,e){this.a=d
this.b=e},
cw9:function cw9(d,e,f,g){var _=this
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
b7R:function b7R(){var _=this
_.as=_.Q=_.y=_.x=_.w=_.a=0
_.at=""
_.ch=_.ax=null},
cw7:function cw7(){this.a=$},
haK(d,e){var w,v,u=d.length
if(u!==e.length)return!1
for(w=0,v=0;v<u;++v)w|=d[v]^e[v]
return w===0},
hrp(d,e){var w
d.$flags&2&&B.aj(d)
d[0]=e&255
d[1]=e>>>8&255
d[2]=e>>>16&255
d[3]=e>>>24&255
for(w=4;w<=15;++w)d[w]=0},
bDT:function bDT(d,e,f){var _=this
_.a=1
_.b=d
_.c=e
_.d=f
_.r=null
_.x=_.w=$},
fZZ(d,e){e&=31
return(d&$.q1[e])<<e>>>0},
nn(d,e){e&=31
return(d>>>e|C.fZZ(d,32-e))>>>0},
h8Y(d){var w,v=new C.as9()
if(B.iG(d))v.aJh(d,null)
else{x.dw.a(d)
w=d.a
w===$&&B.c()
v.a=w
w=d.b
w===$&&B.c()
v.b=w}return v},
h8Z(){var w=C.h8Y(0),v=new Uint8Array(4),u=x.S
u=new C.cg2(w,v,A.DQ,5,B.c2(5,0,!1,u),B.c2(80,0,!1,u))
u.lx(0)
return u},
h8X(d,e){var w=new C.cfZ(d,e)
w.b=20
w.d=new Uint8Array(e)
w.e=new Uint8Array(e+20)
return w},
cfY:function cfY(){},
cg1:function cg1(d,e,f){this.a=d
this.b=e
this.c=f},
cfW:function cfW(){},
as8:function as8(d){this.a=d},
cg0:function cg0(d){this.a=$
this.b=d
this.c=$},
cfX:function cfX(){},
cfV:function cfV(){},
as9:function as9(){this.b=this.a=$},
cg_:function cg_(){},
cg2:function cg2(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=$
_.d=f
_.e=g
_.f=h
_.r=i
_.w=$},
cfZ:function cfZ(d,e){var _=this
_.a=d
_.b=$
_.c=e
_.e=_.d=$},
cfU:function cfU(){},
cfT:function cfT(d){var _=this
_.a=0
_.b=$
_.c=!1
_.d=d},
bN6:function bN6(){},
bN7:function bN7(d){this.a=d},
hM4(d){if(d<0.36363636363636365)return 7.5625*d*d
else if(d<0.7272727272727273){d-=0.5454545454545454
return 7.5625*d*d+0.75}else if(d<0.9090909090909091){d-=0.8181818181818182
return 7.5625*d*d+0.9375}d-=0.9545454545454546
return 7.5625*d*d+0.984375},
b9p:function b9p(){},
cq_:function cq_(){},
bO_:function bO_(d,e){this.a=d
this.b=!1
this.c=e},
bO0:function bO0(){},
hUX(d){var w,v,u=B.a([],x.s)
for(w=d.length,v=0;v<w;++v)u.push(d[v].u(0))
return u},
av5(d){var w=0,v=B.j(x.H),u
var $async$av5=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:u=x.H
w=d!==D.eUd?2:4
break
case 2:w=5
return B.b(A.k3.fW("SystemChrome.setEnabledSystemUIMode",d.a4(),u),$async$av5)
case 5:w=3
break
case 4:null.toString
w=6
return B.b(A.k3.fW("SystemChrome.setEnabledSystemUIOverlays",C.hUX(null),u),$async$av5)
case 6:case 3:return B.h(null,v)}})
return B.i($async$av5,v)},
av8:function av8(d,e){this.a=d
this.b=e},
a80:function a80(d){this.a=d},
fQm(d,e){return new C.aV6(e,d,null)},
aV6:function aV6(d,e,f){this.e=d
this.c=e
this.a=f},
aA0:function aA0(d,e,f,g,h){var _=this
_.ah=d
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
hXy(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p=new C.fqj(15,d,f,e,g,h),o=i*i,n=A.k.V(i/1.4142135623730951)
for(w=0;w<=n;++w){v=Math.sqrt(o-w*w)
u=v-Math.floor(v)
t=u*(w===n?0.25:1)
s=A.k.bt(v)
r=1-u
p.$5(j,k,w,s,r)
q=s+1
p.$5(j,k,w,q,t)
p.$5(j,k,s,w,r)
p.$5(j,k,q,w,t)}return d},
fqj:function fqj(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
an0(){var w=0,v=B.j(x.gw),u,t,s,r,q
var $async$an0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(S.agu("ngmy_menu_lib_v1_zzslides_index",A.bG),$async$an0)
case 3:q=e
if(!q.a){u=null
w=1
break}t=q.b
s=t==null?null:J.q(t,"items")
if(x.j.b(s)){t=J.d9(s,x.f)
t=B.cD(t,new C.bYC(),t.$ti.k("J.E"),x.P)
r=B.B(t,B.a4(t).k("J.E"))}else r=B.a([],x.d)
A.d.b0(r,new C.bYD())
u=r
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$an0,v)},
an2(d){var w=0,v=B.j(x.S),u,t,s,r,q,p,o,n,m,l,k,j
var $async$an2=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.an0(),$async$an2)
case 3:j=f
if(j==null){u=0
w=1
break}t=x.N
s=B.T(t,x.P)
for(r=J.aV(j);r.C();){q=r.gT(r)
p=J.q(q,"id")
s.n(0,J.k(p==null?"":p),q)}r=d.length,q=x.z,o=0,n=0
case 4:if(!(n<d.length)){w=6
break}m=d[n]
l=new B.S(Date.now(),0,!1).a6().ac()
p=m.a
k=B.af("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(B.nm("ngmy_menu_lib_v1_zzslide_"+B.aK(p,k,""),B.F(["deck",m.ag(),"savedAt",l],t,q),null),$async$an2)
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
return B.b(B.nm("ngmy_menu_lib_v1_zzslides_index",B.F(["items",s,"savedAt",new B.S(Date.now(),0,!1).a6().ac()],t,q),null),$async$an2)
case 10:if(!f){u=0
w=1
break}case 9:u=o
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$an2,v)},
bYE(d){return C.hx6(d)},
hx6(d){var w=0,v=B.j(x.af),u,t=2,s=[],r,q,p,o,n,m
var $async$bYE=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
o=B.af("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(S.agu("ngmy_menu_lib_v1_zzslide_"+B.aK(d,o,""),A.hJ),$async$bYE)
case 7:r=f
o=r.b
q=o==null?null:J.q(o,"deck")
if(!x.f.b(q)){u=null
w=1
break}o=C.Vw(B.a1(q,x.N,x.z))
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.aa(m)
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
return B.i($async$bYE,v)},
an1(d){var w=0,v=B.j(x.y),u,t,s,r
var $async$an1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.an0(),$async$an1)
case 3:r=f
if(r==null){u=!1
w=1
break}J.no(r,new C.bYF(d))
w=4
return B.b(B.nm("ngmy_menu_lib_v1_zzslides_index",B.F(["items",r,"savedAt",new B.S(Date.now(),0,!1).a6().ac()],x.N,x.z),null),$async$an1)
case 4:t=f
w=t?5:6
break
case 5:s=B.af("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(S.aOF("ngmy_menu_lib_v1_zzslide_"+B.aK(d,s,"")),$async$an1)
case 7:case 6:u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$an1,v)},
bYC:function bYC(){},
bYD:function bYD(){},
bYF:function bYF(d){this.a=d},
i6v(d,e,f){return B.bR(A.K,null,new C.fGh(e,f,null),d,!0,!0,!0,null,!1,!1,x.H)},
fGh:function fGh(d,e,f){this.a=d
this.b=e
this.c=f},
a0q:function a0q(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aIp:function aIp(d){var _=this
_.d=d
_.e=null
_.f=!0
_.r=!1
_.w=0
_.x=null
_.y=!1
_.c=_.a=null},
f4k:function f4k(d,e){this.a=d
this.b=e},
f4o:function f4o(d){this.a=d},
f4p:function f4p(d){this.a=d},
f4q:function f4q(d,e,f){this.a=d
this.b=e
this.c=f},
f4l:function f4l(d){this.a=d},
f4m:function f4m(d){this.a=d},
f4n:function f4n(d,e){this.a=d
this.b=e},
f4f:function f4f(d){this.a=d},
f4d:function f4d(d){this.a=d},
f4e:function f4e(d){this.a=d},
f4g:function f4g(d){this.a=d},
f4h:function f4h(d){this.a=d},
f4u:function f4u(d,e){this.a=d
this.b=e},
f4t:function f4t(d,e){this.a=d
this.b=e},
f4j:function f4j(d,e,f){this.a=d
this.b=e
this.c=f},
f4i:function f4i(d,e,f){this.a=d
this.b=e
this.c=f},
f4r:function f4r(d,e){this.a=d
this.b=e},
f4s:function f4s(d,e){this.a=d
this.b=e},
f4x:function f4x(d){this.a=d},
f4y:function f4y(d,e){this.a=d
this.b=e},
f4w:function f4w(d,e){this.a=d
this.b=e},
f4v:function f4v(){},
hdJ(d){var w,v,u,t
if(d==null||d.length===0)return B.a([],x.k)
try{w=A.R.aG(0,d,null)
if(!x.j.b(w)){v=B.a([],x.k)
return v}v=J.d9(w,x.f)
v=B.cD(v,new C.fbA(),v.$ti.k("J.E"),x.ea)
u=B.a4(v).k("a2<J.E>")
v=B.B(new B.a2(v,new C.fbB(),u),u.k("J.E"))
return v}catch(t){v=B.a([],x.k)
return v}},
a1p(d){return C.hYO(d)},
hYO(d){var w=0,v=B.j(x.gL),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$a1p=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:n=B.T(x.N,x.ea)
m=new C.fsW(n)
t=4
j=m
i=C
w=7
return B.b(B.a1Z("ngmy_books_v1_"+A.a.i(d.toLowerCase())),$async$a1p)
case 7:j.$1(i.hdJ(f))
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
return B.b(B.aA(),$async$a1p)
case 12:r=f
p=A.a.i(d.toLowerCase())
m.$1(C.hdJ(B.aU(J.q(r.a,"ngmy_books_v1_"+p))))
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
return B.b(C.fbJ(d),$async$a1p)
case 13:p=j.B(new i.a2(h,new g.fsU(f),o),o.k("J.E"))
A.d.b0(p,new C.fsV())
u=p
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a1p,v)},
ah3(d,e){return C.i6a(d,e)},
i6a(d,e){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l
var $async$ah3=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:n=J.b6(e,new C.fFM(),x.P)
n=B.B(n,n.$ti.k("ak.E"))
r=A.R.ao(n,null)
q=!1
t=4
w=7
return B.b(B.agW("ngmy_books_v1_"+A.a.i(d.toLowerCase()),r),$async$ah3)
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
return B.b(B.aA(),$async$ah3)
case 12:p=g
w=13
return B.b(p.au("String","ngmy_books_v1_"+A.a.i(d.toLowerCase()),r),$async$ah3)
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
return B.i($async$ah3,v)},
fbJ(d){return C.hNu(d)},
hNu(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o
var $async$fbJ=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.aA(),$async$fbJ)
case 7:r=f
q=r.t4("ngmy_books_deleted_v1_"+A.a.i(d.toLowerCase()))
if(q==null)q=A.T
q=B.kB(q,B.U(q).c)
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
return B.i($async$fbJ,v)},
afU(d,e){return C.hXq(d,e)},
hXq(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m
var $async$afU=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.aA(),$async$afU)
case 6:s=g
r=B.aX(x.N)
q=s.t4("ngmy_books_deleted_v1_"+A.a.i(d.toLowerCase()))
if(q!=null)J.h_(r,q)
J.ch(r,e)
p=r
r=A.a.i(d.toLowerCase())
q=p
q=B.B(q,B.a4(q).k("co.E"))
w=7
return B.b(s.au("StringList","ngmy_books_deleted_v1_"+r,q),$async$afU)
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
return B.b(C.a1p(d),$async$afU)
case 8:n=g
J.no(n,new C.fq_(e))
w=9
return B.b(C.ah3(d,n),$async$afU)
case 9:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$afU,v)},
i6A(d,e){return B.a5(d,!1).c8(B.e9(new C.fGD(e),!0,null,x.H))},
hJc(d){var w=d.b
return A.a.i(w.a)==="My Book"&&A.d.d8(w.d,new C.cFk())},
of:function of(d,e,f){this.a=d
this.b=e
this.c=f},
fbA:function fbA(){},
fbB:function fbB(){},
fsW:function fsW(d){this.a=d},
fsU:function fsU(d){this.a=d},
fsV:function fsV(){},
fFM:function fFM(){},
fq_:function fq_(d){this.a=d},
fGD:function fGD(d){this.a=d},
Ya:function Ya(d,e){this.c=d
this.a=e},
ax_:function ax_(d,e){var _=this
_.d=d
_.e=!0
_.f=e
_.c=_.a=null},
cFk:function cFk(){},
cFm:function cFm(d,e){this.a=d
this.b=e},
cFp:function cFp(d){this.a=d},
cFq:function cFq(d){this.a=d},
cFo:function cFo(){},
cFr:function cFr(d,e){this.a=d
this.b=e},
cFn:function cFn(d){this.a=d},
cFs:function cFs(){},
cFl:function cFl(d,e){this.a=d
this.b=e},
cFt:function cFt(){},
cFg:function cFg(d){this.a=d},
cFe:function cFe(d){this.a=d},
cFf:function cFf(d){this.a=d},
cFh:function cFh(d,e){this.a=d
this.b=e},
cFd:function cFd(d){this.a=d},
cFc:function cFc(d){this.a=d},
cFa:function cFa(d,e){this.a=d
this.b=e},
cFb:function cFb(d){this.a=d},
cFj:function cFj(){},
cFi:function cFi(d){this.a=d},
cF9:function cF9(d,e){this.a=d
this.b=e},
cF8:function cF8(d,e){this.a=d
this.b=e},
cF7:function cF7(d,e){this.a=d
this.b=e},
cFu:function cFu(d){this.a=d},
Y8:function Y8(d,e,f){this.c=d
this.d=e
this.a=f},
aEh:function aEh(d,e,f){this.a=d
this.b=e
this.c=f},
awW:function awW(d){var _=this
_.r=_.f=_.e=_.d=$
_.w=d
_.x=null
_.y=!1
_.c=_.a=null},
cEB:function cEB(d){this.a=d},
cEA:function cEA(d){this.a=d},
cED:function cED(d,e,f){this.a=d
this.b=e
this.c=f},
cEL:function cEL(){},
cEM:function cEM(d){this.a=d},
cEE:function cEE(d,e,f){this.a=d
this.b=e
this.c=f},
cEC:function cEC(d,e){this.a=d
this.b=e},
cEG:function cEG(d,e){this.a=d
this.b=e},
cEH:function cEH(d,e){this.a=d
this.b=e},
cEI:function cEI(d,e){this.a=d
this.b=e},
cEF:function cEF(d){this.a=d},
cEK:function cEK(d){this.a=d},
cEJ:function cEJ(d,e){this.a=d
this.b=e},
cER:function cER(d){this.a=d},
cEN:function cEN(d,e){this.a=d
this.b=e},
cEO:function cEO(d,e){this.a=d
this.b=e},
cEP:function cEP(d,e){this.a=d
this.b=e},
cEQ:function cEQ(d,e){this.a=d
this.b=e},
awY:function awY(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
i08(){var w,v,u,t,s=!1
try{u=document
if(u.fullscreenElement==null){w=u.documentElement
if(w!=null){v=w.requestFullscreen()
if(s&&v!=null)B.ei(v,x.cK).bA(new C.fxs(),x.H).eU(new C.fxt())}}else if(s)C.hfb()}catch(t){}},
hfb(){var w,v,u
try{w=window.screen.orientation
if(w==null)return
v=w.lock("landscape")
if(v!=null)B.ei(v,x.cK).eU(new C.ffZ())}catch(u){}},
i0b(){var w,v,u
try{w=window.screen.orientation
if(w!=null)w.unlock()}catch(v){}try{u=document
if(u.fullscreenElement!=null)u.webkitExitFullscreen()}catch(v){}},
fxs:function fxs(){},
fxt:function fxt(){},
ffZ:function ffZ(){},
hjM(d){var w="marriage_field_",v=d.db
if(!A.a.a0(v,w))return null
return A.d.gL(A.a.ed(v,w,"").split(":"))},
hjJ(d){var w=d.db
if(!A.a.a0(w,"marriage_sign_"))return null
if(A.a.a0(w,"marriage_sign_placed_"))return null
if(d.b===D.kX)return null
return A.a.b1(w,14)},
fYJ(d){var w
if(d.b!==D.kX)return null
w=d.db
if(!A.a.a0(w,"marriage_sign_placed_"))return null
return A.a.b1(w,21)},
i0B(d){if(d==="hati_kuhowa")return"hati_kuhoweya"
if(d==="hati_kuhoweya")return"hati_kuhowa"
return""},
hjN(d){if(d==="hati_kuhowa")return"Hati ya Kuhoweya"
if(d==="hati_kuhoweya")return"Hati ya Kuhowa"
return"partner document"},
i0w(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=B.af("\\s+",!0,!1,!1,!1),f=A.a.i(B.aK(d,g," "))
g=B.af("\\s+",!0,!1,!1,!1)
w=A.a.i(B.aK(e,g," "))
g=f.length
if(g===0||w.length===0){g=x.N
return B.T(g,g)}v=B.af("\\[[^\\]]+\\]",!0,!1,!1,!1)
u=v.kS(0,f)
t=x.N
u=B.cD(u,new C.fyr(),B.a4(u).k("J.E"),t)
s=B.B(u,B.a4(u).k("J.E"))
if(s.length===0)return B.T(t,t)
for(u=v.kS(0,f),u=new B.Jm(u.a,u.b,u.c),r=x.cz,q=0,p="^";u.C();){o=u.d
n=(o==null?r.a(o):o).b
m=n.index
p=(m>q?p+B.R4(A.a.ap(f,q,m)):p)+"(.*?)"
q=m+n[0].length}u=(q<g?p+B.R4(A.a.b1(f,q)):p)+"\\.?$"
l=B.af(u.charCodeAt(0)==0?u:u,!1,!1,!1,!1).cF(w)
if(l==null)return B.T(t,t)
k=B.T(t,t)
for(g=l.b,j=0;j<s.length;j=i){i=j+1
u=g[i]
h=A.a.i(u==null?"":u)
if(h.length===0)continue
k.n(0,s[j],h)}return k},
i0u(d,e){var w,v,u,t,s,r=B.a4(e).k("cu<1>"),q=B.B(new B.cu(e,r),r.k("J.E"))
A.d.b0(q,new C.fyq())
for(r=q.length,w=d,v=0;v<q.length;q.length===r||(0,B.L)(q),++v){u=q[v]
t=e.h(0,u)
s=t==null?null:A.a.i(t)
if(s==null)s=""
if(s.length===0)continue
if(A.a.a0(s,"[")&&A.a.cb(s,"]"))continue
w=B.aPE(w,u,s,0)}return w},
i0y(d,e){var w,v,u,t=d==="hati_kuhowa"?D.a3j:$.hqt(),s=x.N,r=B.T(s,s)
for(s=t.gdK(t),s=s.gaf(s);s.C();){w=s.gT(s)
v=e.h(0,w.a)
u=v==null?null:A.a.i(v)
if(u==null)u=""
if(u.length===0)continue
if(A.a.a0(u,"[")&&A.a.cb(u,"]"))continue
r.n(0,w.b,u)}return r},
hjK(d){if(d==="hati_kuhowa")return y.O
if(d==="hati_kuhoweya")return y.f
return""},
fcC(d,e){var w,v,u,t,s,r,q
for(w=d.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u)for(t=w[u].z,s=t.length,r=0;r<t.length;t.length===s||(0,B.L)(t),++r){q=t[r]
if(C.hjM(q)===e)return q}return null},
i0z(d){var w,v=A.a.i(d.c),u=d.w
if(u==="hati_kuhowa")w="hati_kuhowa_"
else w=u==="hati_kuhoweya"?"hati_kuhoweya_":""
u=w.length
if(u!==0&&A.a.a0(v,w))return A.a.b1(v,u)
return A.d.gL(D.Gs).a},
i0A(b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0="utangulizi",b1=b6.w,b2=b1==null?"":b1,b3=b5.w,b4=b3==null?"":b3
if(b1==="hati_kuhowa"||b1==="hati_kuhoweya")w=!(b3==="hati_kuhowa"||b3==="hati_kuhoweya")
else w=!0
if(w)return new B.adN(0,0,0)
if(b2.length===0||b4.length===0||b2===b4)return new B.adN(0,0,0)
v=C.fcC(b6,b0)
u=C.fcC(b5,b0)
t=0
if(v!=null&&u!=null){s=C.i0y(b2,C.i0w(C.hjK(b2),v.r))
if(s.a!==0){u.r=C.i0u(C.hjK(b4),s)
t=s.a}}r=B.aX(x.N)
for(w=b6.r,q=w.length,p=0;p<w.length;w.length===q||(0,B.L)(w),++p)for(o=w[p].z,n=o.length,m=0;m<o.length;o.length===n||(0,B.L)(o),++m){l=C.hjM(o[m])
if(l==null||l==="utangulizi")continue
r.J(0,l)}for(q=B.ed(r,r.r,r.$ti.c),o=q.$ti.c,k=0;q.C();){n=q.d
if(n==null)n=o.a(n)
j=C.fcC(b6,n)
i=C.fcC(b5,n)
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
a0=C.fYJ(d)
if(a0==null)continue
a1=d.at
if(A.a.i(a1==null?"":a1).length===0)continue
a2=d.c
a3=d.d
a4=d.e
a5=d.f
for(a1=f.z,a6=a1.length,a7=0;a7<a1.length;a1.length===a6||(0,B.L)(a1),++a7){a8=a1[a7]
if(C.hjJ(a8)===a0||C.fYJ(a8)===a0){a2=a8.c
a3=a8.d
a4=a8.e
a5=a8.f
break}}a1=f.z
a1.$flags&1&&B.aj(a1,16)
A.d.QB(a1,new C.fyx(a0),!0)
a1=f.z
a6=Date.now()
a9=$.iZ
$.iZ=a9+1
A.d.J(a1,new C.eJ(""+1000*a6+"_"+a9,D.kX,a2,a3,a4,a5,"",24,A.a5,A.bl,A.aD,4279310375,A.bg,d.at,D.be,4280640491,4280172719,2,0,!1,"marriage_sign_placed_"+a0,0,D.cm,0,"","","","","",!1,0));++e}b5.f=new B.S(Date.now(),0,!1)
return new B.adN(k,t,e)},
i0v(d){var w=C.i0z(d)
if(d.w==="hati_kuhowa")return C.hj6("",w)
return C.hj5("",w)},
fyr:function fyr(){},
fyq:function fyq(){},
fyx:function fyx(d){this.a=d},
heV(){var w=new B.S(Date.now(),0,!1),v=new C.ff1()
return B.t(v.$1(B.bQ(w)))+"/"+B.t(v.$1(B.bG(w)))+"/"+B.bA(w)},
fYR(d){var w=d.at,v=A.a.i(w==null?"":w)
w=d.db
return(w==="__kiapo_video__"||A.a.a0(w,"__kiapo_video___"))&&v.length!==0},
fzp(d){var w,v,u,t,s,r,q=d.ax
if(A.a.i(q==null?"":q).length!==0)return!0
for(q=d.r,w=q.length,v=0;v<w;++v)for(u=q[v].z,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===D.kX&&A.a.a0(r.db,"marriage_sign_placed_rais"))return!0}return!1},
hk_(d){var w,v=d.ax,u=A.a.i(v==null?"":v)
if(u.length===0)return!C.fzp(d)
w=B.bi(u)
if(w==null)return!C.fzp(d)
return new B.S(Date.now(),0,!1).a6().cZ(w.a6().bQ(18e9))},
i1g(d){var w=d.ax
if(A.a.i(w==null?"":w).length!==0)return
d.ax=new B.S(Date.now(),0,!1).a6().ac()},
hB7(d){return A.a.i(d).toLowerCase()},
apa(d){return C.hB9(d)},
hB9(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o,n,m
var $async$apa=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.aA(),$async$apa)
case 7:r=f
p=r.t4("ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase())
q=p==null?A.T:p
o=q
o=new B.K(o,C.i4O(),B.U(o).k("K<1,n>")).c_(0,new C.c8b())
o=B.db(o,o.$ti.k("J.E"))
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
return B.i($async$apa,v)},
ap9(d,e){return C.hB8(d,e)},
hB8(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n
var $async$ap9=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:o=A.a.i(e).toLowerCase()
if(o.length===0||A.a.i(d).length===0){w=1
break}w=3
return B.b(C.apa(d),$async$ap9)
case 3:r=g
if(!J.ch(r,o)){w=1
break}t=5
w=8
return B.b(B.aA(),$async$ap9)
case 8:q=g
w=9
return B.b(q.au("StringList","ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase(),J.qb(r)),$async$ap9)
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
return B.i($async$ap9,v)},
apb(d,e){return C.hBa(d,e)},
hBa(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n
var $async$apb=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:o=A.a.i(e).toLowerCase()
if(o.length===0||A.a.i(d).length===0){w=1
break}w=3
return B.b(C.apa(d),$async$apb)
case 3:r=g
if(!J.hD(r,o)){w=1
break}t=5
w=8
return B.b(B.aA(),$async$apb)
case 8:q=g
w=9
return B.b(q.au("StringList","ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase(),J.qb(r)),$async$apb)
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
return B.i($async$apb,v)},
UO(a5){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$UO=B.e(function(a6,a7){if(a6===1){s.push(a7)
w=t}for(;;)switch(w){case 0:if($.fRR&&!a5){w=1
break}t=4
w=7
return B.b(B.aA(),$async$UO)
case 7:r=a7
q=B.aU(J.q(r.a,"ngmy_civic_hati_kiapo_uongozi_v1"))
if(q!=null&&A.a.i(q).length!==0){p=A.R.aG(0,q,null)
f=x.f
if(f.b(p)){e=x.N
o=B.T(e,x.I)
for(d=J.jv(p),d=d.gaf(d),a0=x.z;d.C();){n=d.gT(d)
if(f.b(n.b))J.aF(o,J.k(n.a),C.Vw(B.a1(f.a(n.b),e,a0)))}$.a6Q=o}}t=2
w=6
break
case 4:t=3
a2=s.pop()
m=B.aa(a2)
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
return B.b(B.c3(),$async$UO)
case 12:case 11:w=a7?8:9
break
case 8:t=14
w=17
return B.b(B.tS("civic_hati_kiapo_uongozi",null,A.ee),$async$UO)
case 17:l=a7
w=l!=null&&x.f.b(J.q(l,"byState"))?18:19
break
case 18:o=x.N
k=B.T(o,x.I)
for(f=x.f,e=J.jv(f.a(J.q(l,"byState"))),e=e.gaf(e),d=x.z;e.C();){j=e.gT(e)
if(!f.b(j.b))continue
J.aF(k,J.k(j.a),C.Vw(B.a1(f.a(j.b),o,d)))}for(o=k,o=new B.cK(o,B.a4(o).k("cK<1,2>")).gaf(0);o.C();){f=o.d
f.toString
i=f
h=$.a6Q.h(0,i.a)
if(h!=null){f=i.b.f
e=h.f
d=f.a
if(d>=e.gbo())f=d===e.gbo()&&f.b<e.gcz()
else f=!0
f=!f}else f=!0
if(f)$.a6Q.n(0,i.a,i.b)}w=20
return B.b(C.apc(),$async$UO)
case 20:case 19:t=2
w=16
break
case 14:t=13
a3=s.pop()
g=B.aa(a3)
$.am.$1("[kiapo] cloud load: "+B.t(g))
w=16
break
case 13:w=2
break
case 16:case 9:$.fRR=!0
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$UO,v)},
apc(){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m,l
var $async$apc=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.aA(),$async$apc)
case 6:s=e
r=B.T(x.N,x.P)
for(o=$.a6Q,o=new B.cK(o,B.a4(o).k("cK<1,2>")).gaf(0);o.C();){n=o.d
n.toString
q=n
J.aF(r,q.a,q.b.ag())}w=7
return B.b(s.au("String","ngmy_civic_hati_kiapo_uongozi_v1",A.R.ao(r,null)),$async$apc)
case 7:u=1
w=5
break
case 3:u=2
l=t.pop()
p=B.aa(l)
$.am.$1("[kiapo] local save: "+B.t(p))
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$apc,v)},
aZx(d){var w=0,v=B.j(x.af),u,t,s,r
var $async$aZx=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.UO(!1),$async$aZx)
case 3:t=A.a.i(d).toLowerCase()
if(t.length===0){u=null
w=1
break}s=$.a6Q.h(0,t)
r=s==null?null:s.hC()
if(r==null){u=null
w=1
break}u=C.bBp(r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aZx,v)},
a6R(a1){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$a6R=B.e(function(a2,a3){if(a2===1){s.push(a3)
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
if((h==="__kiapo_video__"||A.a.a0(h,"__kiapo_video___"))&&A.a.a0(g,"data:"))i.at=null}$.a6Q.n(0,d,o)
$.fRR=!0
w=3
return B.b(C.apc(),$async$a6R)
case 3:w=4
return B.b(B.c3(),$async$a6R)
case 4:if(!a3){u=!1
w=1
break}t=6
e=x.N
r=B.T(e,x.P)
for(n=$.a6Q,n=new B.cK(n,B.a4(n).k("cK<1,2>")).gaf(0);n.C();){l=n.d
l.toString
q=l
J.aF(r,q.a,q.b.ag())}w=9
return B.b(B.nm("civic_hati_kiapo_uongozi",B.F(["byState",r,"updatedAt",new B.S(Date.now(),0,!1).a6().ac()],e,x.z),null),$async$a6R)
case 9:r=a3
u=r
w=1
break
t=2
w=8
break
case 6:t=5
a0=s.pop()
p=B.aa(a0)
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
return B.i($async$a6R,v)},
apd(d){var w=0,v=B.j(x.T),u,t,s
var $async$apd=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(new B.hX().a55(A.eG),$async$apd)
case 3:s=f
if(s==null){u=null
w=1
break}w=4
return B.b(s.fi(),$async$apd)
case 4:t=f
if(t.length===0){u=null
w=1
break}w=5
return B.b(C.aZw(t,d),$async$apd)
case 5:u=f
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$apd,v)},
aZw(d,e){return C.hBb(d,e)},
hBb(d,e){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$aZw=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.c3(),$async$aZw)
case 7:if(!g){u=null
w=1
break}n=A.a.i(e)
m=B.af("[^a-z0-9]+",!0,!1,!1,!1)
r=B.aK(n.toLowerCase(),m,"_")
q="civic_kiapo/"+B.t(r)+"/"+1000*Date.now()+".mp4"
n=$.eY().b
n===$&&B.c()
n=n.at
n===$&&B.c()
p=n.i7("media")
w=8
return B.b(p.wO(q,new Uint8Array(B.ce(d)),D.bxT),$async$aZw)
case 8:n=p.Cp(q)
u=n
w=1
break
t=2
w=6
break
case 4:t=3
k=s.pop()
o=B.aa(k)
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
return B.i($async$aZw,v)},
Ke(d,e,f,g,h,i,j,k,l,m,n){var w=C.cC()
return C.ep(e,!1,f,A.aD,k.length===0?"marriage_locked":"marriage_locked_"+k,4280640491,g,h,i,"",j,w,null,"","",0,!1,"",0,D.be,4280172719,2,d,0,0,"",D.cm,D.cQ,l,m,n)},
feh(d,e,f,g,h,i,j,k,l){var w=C.cC()
return C.ep(A.bg,!1,4279310375,A.aD,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bl,A.a5,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.cm,D.f0,j,k,l)},
fVU(d,e,f,g,h,i,j,k){var w=C.cC(),v=A.k.D(i*0.0017,0.02,0.06)
return C.ep(h,!1,j,A.aD,"marriage_field_"+d+":"+A.k.aa(g,3),4280640491,i,A.cF,A.P,"",v,w,null,"","",0,!1,"",0,D.be,4280172719,2,k,0,0,"",D.cm,D.cQ,g,e,f)},
fdQ(d,e,f,g){return C.feh(0,0.002,D.fr,g,0.8,"ul_"+B.t(d)+"_"+B.t(e),f,d,e+0.002)},
fVV(d,e,f,g,h,i,j,k){var w=C.cC()
return C.ep(A.qg,!1,j,A.aD,"marriage_field_"+d+":"+A.k.aa(g,3),4280640491,i,A.bl,A.a5,"",h,w,null,"","",0,!1,"",0,D.be,4280172719,2,k,0,0,"",D.cm,D.cQ,g,e,f)},
heU(d){var w="marriage_field_",v=d.db
if(!A.a.a0(v,w))return null
return A.d.gL(A.a.ed(v,w,"").split(":"))},
bBp(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4="hati_kiapo_uongozi",a5="__kiapo_video___"
if(a6.w!==a4)return a6
w=a6.x
v=w==null
u=A.a.i(v?"":w)
t=a6.r
s=t.length===0?a3:A.d.gL(t)
t=x.N
r=B.T(t,t)
q=a3
p=a3
if(s!=null)for(t=s.z,o=t.length,n=0;n<t.length;t.length===o||(0,B.L)(t),++n){m=t[n]
l=C.heU(m)
if(l!=null&&A.a.i(m.r).length!==0)r.n(0,l,m.r)
k=m.at
j=A.a.i(k==null?"":k)
i=m.db
if((i==="__kiapo_video__"||A.a.a0(i,a5))&&j.length!==0)q=k
if(m.b===D.kX&&A.a.a0(i,"marriage_sign_placed_rais"))p=m.hC()}h=C.fYn(u)
t=a6.b
o=h.c
i=h.d
if(v)w=u
v=a6.y
g=a6.z
f=a6.Q
e=a6.as
d=a6.at
a0=C.Br(f,a3,a3,a3,i,5,!1,a4,a3,a3,a3,a3,a6.a,a6.ax,!1,w,t,d,e,h.r,o,v,g,a6.f)
a1=A.d.gL(a0.r)
for(w=a1.z,v=w.length,t=q!=null,n=0;n<w.length;w.length===v||(0,B.L)(w),++n){m=w[n]
l=C.heU(m)
if(l!=null&&r.ai(0,l)){o=r.h(0,l)
o.toString
m.r=o}o=m.db
if((o==="__kiapo_video__"||A.a.a0(o,a5))&&t)m.at=q}if(p!=null){a2={}
a2.a=null
for(w=a1.z,v=w.length,n=0;n<v;++n){m=w[n]
t=m.db
if(A.a.a0(t,"marriage_sign_")&&!A.a.a0(t,"marriage_sign_placed_")&&m.b!==D.kX&&A.a.cb(t,"rais")){a2.a=m
break}}w=a2.a
if(w!=null){p.c=w.c
p.d=w.d
p.e=w.e
p.f=w.f
A.d.bn(a1.z,new C.fxq(a2))}else A.d.bn(a1.z,new C.fxr())
A.d.J(a1.z,p)}w=a0.ax
if(A.a.i(w==null?"":w).length===0&&C.fzp(a0))a0.ax=a6.f.a6().ac()
return a0},
fYn(d){var w,v,u="Hati ya Kiapo cha Uongozi",t=null,s=4279310375,r=4280640491,q=4280172719,p=4279378237,o=4290283019,n=4293056712,m=C.fAc(D.a4k),l=C.cC(),k=x.u,j=B.a([C.ep(A.bg,!1,s,A.aD,"marriage_locked_bg",r,24,A.bl,A.a5,"",1,C.cC(),m,"","",0,!1,"",0,D.be,q,2,"",0,0,"",D.cm,D.lq,1,0,0)],k),i=B.a([],k)
i.push(C.Ke("NGMY",A.L,236069181,52,A.bl,A.u,0.08,"watermark",0.45,-0.08,0.02))
i.push(C.Ke("TAREHE:",A.bg,o,16,A.bl,A.H,A.k.D(0.0272,0.02,0.06),"tarehe_lbl",0.1,0.7,0.026))
i.push(C.fVU("tarehe",0.8059999999999999,0.026,0.18,A.bg,16,p,C.heV()))
i.push(C.fdQ(0.8099999999999999,0.026+A.k.D(0.0272,0.02,0.06)*0.8,0.12,o))
i.push(C.Ke("HATI YA KIAPO CHA UONGOZI",A.L,p,26,A.bl,A.u,0.048,"title",0.83,0.085,0.055))
i.push(C.Ke("Kiapo cha Rais \xb7 Presidential Oath of Leadership",A.L,o,11,A.cF,A.a5,0.024,"subtitle",0.83,0.085,0.1))
i.push(C.feh(0,0.002,D.fr,o,1.6,"title_rule",0.5312,0.2344,0.128))
i.push(C.fVV("body_p1",0.085,0.145,0.83,0.105,12,p,"Mimi [Jina Kamili la Rais], nikiwa Rais wa jamii yetu ya Kikongo, ninasimama mbele ya wanajamii wote kuapa kwamba nitawaongoza kwa haki, amani, na heshima kubwa, huku nikihakikisha tunashirikiana kwa pamoja kujenga jamii yetu na kuchangia maendeleo kwa njia bora na ya kistaarabu."))
i.push(C.fVV("body_p2",0.085,0.255,0.83,0.092,12,p,"Ninajwika jukumu kamili la kusimamia rasilimali na fedha za wananchi kwa uaminifu mkubwa. Endapo itatokea kiasi chochote cha fedha cha mwanachama yeyote hakikurekodiwa vizuri, au fedha ya jumuiya ikipotea bila maelezo, nitawajibika kulipa mara tatu (triple) ya kiasi kilichopotea."))
i.push(C.fVV("body_p3",0.085,0.352,0.83,0.095,12,p,"Kama nikishindwa kulipa au nikakataa kufanya hivyo, wanajamii wote wanaruhusiwa na wako huru kuchukua hatua za kisheria kwenda kuripoti kwa maofisa wa serikali (state officers) au polisi, au kumfungulia mashitaka mahakamani, na niko tayari kukabiliwa na sheria hizo bila pingamizi."))
i.push(C.feh(268435456,0.175,D.be,o,1.6,"video_frame",0.83,0.085,0.46))
i.push(C.Ke("VIDEO YA KIAPO",A.bg,o,10,A.bl,A.H,0.02,"video_lbl",0.7899999999999999,0.10500000000000001,0.468))
i.push(C.ep(A.bg,!1,s,A.aD,"__kiapo_video__",r,24,A.bl,A.a5,"",0.131,C.cC(),t,"","",0,!1,"",0,D.be,q,2,"",0,0,"",D.cm,D.lq,0.77,0.115,0.492))
i.push(C.Ke("Rais Anayeapa:",A.bg,p,15,A.bl,A.u,0.028,"rais_hdr",0.83,0.085,0.655))
i.push(C.Ke("Jina:",A.bg,p,13,A.bl,A.P,0.026,"jina_lbl",0.1,0.085,0.6930000000000001))
i.push(C.fVU("rais_jina",0.195,0.6930000000000001,0.62,A.bg,13,p,""))
i.push(C.fdQ(0.195,0.7130000000000001,0.62,n))
i.push(C.Ke("Sahihi:",A.bg,p,13,A.bl,A.P,0.026,"sahihi_lbl",0.12,0.085,0.74))
i.push(C.ep(A.bg,!1,s,A.aD,"marriage_sign_rais",0,24,A.bl,A.a5,"",0.07,C.cC(),t,"","",0,!1,"",0,D.be,0,2,"",0,0,"",D.cm,D.f0,0.38,0.21500000000000002,0.73))
i.push(C.fdQ(0.21500000000000002,0.795,0.38,n))
i.push(C.Ke("Tarehe:",A.bg,p,13,A.bl,A.P,0.026,"tarehe2_lbl",0.12,0.625,0.74))
i.push(C.fVU("rais_tarehe",0.745,0.74,0.2,A.bg,12,p,C.heV()))
i.push(C.fdQ(0.745,0.76,0.2,n))
w=A.a.i(d)
if(w.length!==0)A.d.v(i,B.a([C.feh(0,0.032,D.be,o,1,"state_box",0.72,0.14,0.875),C.Ke("EMO 'YA M'MBONDO "+w,A.L,p,14,A.bl,A.P,0.026000000000000002,"state_text",0.72,0.14,0.878)],k))
A.d.v(j,i)
v=C.ro(4294967035,t,0,0,j,l,D.q5,"","",u,D.dd)
return C.Br(t,t,t,t,D.o7,5,!1,"hati_kiapo_uongozi",t,t,t,t,C.cC(),t,!1,w,u,t,t,B.a([v],x.g),"hati_kiapo_elegant_navy",t,!1,t)},
ag4(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$ag4=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:p=A.a.i(i)
if(p.length===0){if(f.e!=null)f.I(x.q).f.S(D.eP2)
w=1
break}w=3
return B.b(C.UO(!0),$async$ag4)
case 3:w=4
return B.b(C.aZx(p),$async$ag4)
case 4:t=k
if(f.e==null){w=1
break}if(e)s=d||t==null||C.hk_(t)
else s=!1
w=t!=null?5:6
break
case 5:w=s?7:8
break
case 7:w=9
return B.b(B.bR(D.bbZ,null,new C.fsh(p),f,!0,!0,!1,A.lr,!1,!1,x.N),$async$ag4)
case 9:r=k
if(r==="continue"){h.$1(t)
w=1
break}if(r!=="new"){w=1
break}if(f.e==null){w=1
break}w=10
return B.b(B.ca(null,null,!0,null,new C.fsi(),f,null,!0,!0,x.y),$async$ag4)
case 10:if(k!==!0||f.e==null){w=1
break}g.$1(C.fYn(p))
w=1
break
case 8:h.$1(t)
w=1
break
case 6:if(!s){if(f.e!=null){q=f.I(x.q).f
q.S(B.b2(null,null,null,null,null,A.r,null,B.d("Registrar wa "+p+" bado hajachapisha Hati ya Kiapo cha Uongozi.",null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))}w=1
break}if(f.e==null){w=1
break}g.$1(C.fYn(p))
case 1:return B.h(u,v)}})
return B.i($async$ag4,v)},
ff1:function ff1(){},
c8b:function c8b(){},
fxq:function fxq(d){this.a=d},
fxr:function fxr(){},
fsh:function fsh(d){this.a=d},
fsf:function fsf(d){this.a=d},
fsg:function fsg(d){this.a=d},
fsi:function fsi(){},
fsd:function fsd(d){this.a=d},
fse:function fse(d){this.a=d},
apI:function apI(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aD3:function aD3(){var _=this
_.d=null
_.r=_.f=_.e=!1
_.c=_.a=null},
e7T:function e7T(d){this.a=d},
e7R:function e7R(d){this.a=d},
e7S:function e7S(d){this.a=d},
e7U:function e7U(d){this.a=d},
e7V:function e7V(d){this.a=d},
wo(d,e,f,g,h,i,j,k,l,m,n){var w=C.cC()
return C.ep(e,!1,f,A.aD,k.length===0?"marriage_locked":"marriage_locked_"+k,4280640491,g,A.bl,h,"",i,w,null,"","",0,!1,"",j,D.be,4280172719,2,d,0,0,"",D.cm,D.cQ,l,m,n)},
hey(d,e,f){var w=4291404327
return B.a([C.q0(0,f,D.eJ,w,2,"ring_l",f,d-f*0.42,e),C.q0(0,f,D.eJ,w,2,"ring_r",f,d+f*0.06,e)],x.u)},
fdg(d,e,f,g,h){var w,v,u="ps_"+g,t=C.q0(4294967288,f,D.eJ,4291404327,1.3,u+"_ring",f,d,e),s=f*0.36
s=C.q0(h,s,D.eJ,h,0,u+"_head",s,d+f*0.32,e+f*0.16)
w=g?0.12:0.18
v=g?0.76:0.64
return B.a([t,s,C.q0(h,f*0.46,D.eJ,h,0,u+"_body",f*v,d+f*w,e+f*0.5)],x.u)},
q0(d,e,f,g,h,i,j,k,l){var w=C.cC()
return C.ep(A.bg,!1,4279310375,A.aD,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bl,A.a5,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.cm,D.f0,j,k,l)},
fdf(d,e,f,g,h,i,j,k,l){var w=C.cC(),v=A.k.D(j*0.0017,0.02,0.06),u="marriage_field_"+d+":"
return C.ep(h,!1,k,A.aD,i?u+A.k.aa(g,3)+":"+A.o.aa(j,1):u+A.k.aa(g,3),4280640491,j,A.cF,A.P,"",v,w,null,"","",0,!1,"",0,D.be,4280172719,2,l,0,0,"",D.cm,D.cQ,g,e,f)},
byP(d,e,f,g){return C.q0(0,0.002,D.fr,g,0.8,"ul_"+B.t(d)+"_"+B.t(e),f,d,e+0.002)},
hex(d,e,f,g,h){var w=A.k.D(d.length*30*0.00058+0.08,0.2,0.5),v=f+(g-w)/2
return B.a([C.q0(0,0.036,D.be,h,1.4,"banner_box_"+d,w,v,e),C.wo(d,A.L,h,30,A.u,0.025199999999999997,0,"banner_t_"+d,w,v,e+0.00612)],x.u)},
hjL(){var w=new B.S(Date.now(),0,!1),v=new C.fyw()
return B.t(v.$1(B.bQ(w)))+"/"+B.t(v.$1(B.bG(w)))+"/"+B.bA(w)},
hez(d,e,f,g,h,i,j){var w=4293056712,v=h*0.56,u=f+v+0.01,t=u+0.08,s=f+h-t,r=""+e,q=f+0.026,p=v-0.026
return B.a([C.wo(r+".",A.bg,i,13,A.H,0.024,0,"wln_"+d+"_"+r,0.026,f,g),C.fdf("witness_"+d+"_"+r+"_name",q,g,p,A.bg,!0,16,j,"[Jina la Shahidi]"),C.byP(q,g+A.k.D(0.0272,0.02,0.06),p,w),C.wo("Sahihi:",A.bg,j,15,A.a5,0.028,0,"wls_"+d+"_"+r,0.077,u,g),C.ep(A.bg,!1,4279310375,A.aD,"marriage_sign_"+d+"_witness_"+r,0,24,A.bl,A.a5,"",0.05,C.cC(),null,"","",0,!1,"",0,D.be,0,2,"",0,0,"",D.cm,D.f0,s,t,g-0.004),C.byP(t,g+0.044,s,w)],x.u)},
agw(d,e){var w,v,u,t=x.cd,s=e!=null?B.a([e],t):B.a([D.d9Z,D.cg3,D.d2S,D.d4I],t)
for(t=s.length,w=0;w<s.length;s.length===t||(0,B.L)(s),++w)for(v=A.d.gaf(s[w]);v.C();){u=v.gT(0)
if(u.a===d)return u}return null},
fVc(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var w=C.fAc(d.d),v=B.a([C.ep(A.bg,!1,4279310375,A.aD,"marriage_locked_bg",4280640491,24,A.bl,A.a5,"",1,C.cC(),w,"","",0,!1,"",0,D.be,4280172719,2,"",0,0,"",D.cm,D.lq,1,0,0)],x.u)
A.d.v(v,C.hPU(d,e,f,g,h,i,j,k,l,m,n,o,p,q))
return v},
hPU(c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=null,b0=4286200650,b1=4291404327,b2=4280640491,b3=4280172719,b4="marriage_locked",b5=4293056712,b6=4279310375,b7=4279673674,b8="marriage_locked_",b9=c3.f,c0=c3.r,c1=x.u,c2=B.a([],c1)
c2.push(C.wo("NGMY",A.L,b9&16777215|251658240,60,A.u,0.09,-0.52,"watermark",0.5,-0.11,0.025))
w=c3.z
switch(w.a){case 1:case 3:A.d.v(c2,C.hey(0.42,0.016,0.048))
v=0.066
break
case 7:A.d.v(c2,C.hey(0.38,0.012,0.072))
v=0.082
break
case 2:case 6:case 10:A.d.v(c2,C.fdg(0.16,0.018,0.052,!1,b9))
A.d.v(c2,C.fdg(0.79,0.018,0.052,!0,b0))
v=0.072
break
case 5:c2.push(C.wo("\ud83c\udf33",A.L,4279898632,22,A.a5,0.04,0,"tree",0.16,0.42,0.014))
v=0.056
break
case 8:A.d.v(c2,B.a([C.q0(0,0.062,D.eJ,b1,1.6,"crest_o",0.11,0.445,0.012),C.q0(0,0.046,D.eJ,b1,1,"crest_i",0.084,0.458,0.02),C.wo("MUHURI",A.L,b9,9,A.u,0.028,0,"crest_t",0.11,0.445,0.028)],c1))
v=0.078
break
case 4:case 9:A.d.v(c2,B.a([C.q0(0,0.002,D.fr,b1,1,"orn_l_0.018",0.24,0.2,0.024),C.q0(b9,0.016,D.kY,b1,0.9,"orn_c_0.018",0.024,0.488,0.018),C.q0(0,0.002,D.fr,b1,1,"orn_r_0.018",0.24,0.518,0.024)],c1))
v=0.04
break
case 0:v=d5
break
default:v=d5}A.d.v(c2,B.a([C.wo("TAREHE:",A.bg,c0,20,A.H,A.k.D(0.033999999999999996,0.02,0.06),0,"tarehe_lbl",0.1,0.7,0.026),C.fdf("tarehe",0.8059999999999999,0.026,0.14400000000000002,A.bg,!1,21,b9,C.hjL()),C.byP(0.814,0.026+A.k.D(0.035699999999999996,0.02,0.06)*0.8,0.12,c0)],c1))
c2.push(C.wo(d2,A.L,b9,d3,A.u,0.06,0,"title",0.82,0.09,v))
u=v+0.054
c2.push(C.q0(c0,0.0026,D.be,c0,0,"title_rule_1",0.82*d4,0.09+0.82*(1-d4)/2,u))
t=u+0.028
c2.push(C.q0(c3.e,0.138,D.be,c0,1.15,"intro_frame",0.832,0.08399999999999999,t-0.004))
s=C.cC()
c2.push(C.ep(A.bg,!1,b9,A.aD,"marriage_field_utangulizi:"+A.k.aa(0.82,3),b2,19,A.bl,A.cv,"",0.128,s,a9,"","",0,!1,"",0,D.be,b3,2,c5,0,0,"",D.cm,D.cQ,0.82,0.09,t))
t+=c4
if(c8){r=A.k.D(c7.length*30*0.00058+0.08,0.2,0.5)
q=0.09+(0.82-r)/2
s=C.q0(0,0.036,D.be,c0,1.4,"banner_box_nimetowe_label",r,q,t)
p=C.cC()
A.d.v(c2,B.a([s,C.ep(A.L,!1,c0,A.aD,"marriage_field_nimetowe_label:"+A.k.aa(r,3),b2,30,A.bl,A.u,"",0.025199999999999997,p,a9,"","",0,!1,"",0,D.be,b3,2,c7,0,0,"",D.cm,D.cQ,r,q,t+0.00612)],c1))}else A.d.v(c2,C.hex(c7,t,0.09,0.82,c0))
t+=0.048
c2.push(C.wo(c9,A.bg,b9,d0,A.P,0.03,0,"nimetowe_sub",0.82,0.09,t))
t+=0.03
for(o=1;o<=4;++o){s=c6[o-1]
n=o===1
m=A.k.D(0.7779999999999999-(n?0.328:0),0.22,1)
l=n?A.k.D(0.037399999999999996,0.02,0.06):A.k.D(0.0272,0.02,0.06)
p=""+o
k=t+0.002
j=C.fdf("mahari_"+p,0.132,k,m,A.bg,!1,16,b9,s)
if(n)j.f=l
s="nim_n_"+p
i=Date.now()
h=$.iZ
$.iZ=h+1
s=s.length===0?b4:b8+s
g="nim_ul_"+p
f=Date.now()
e=$.iZ
$.iZ=e+1
g=g.length===0?b4:b8+g
d=B.a([new C.eJ(""+1000*i+"_"+h,D.cQ,0.09,t+0.004,0.032,0.022,p+".",13,A.H,A.bl,A.aD,c0,A.bg,a9,D.be,b2,b3,2,0,!1,s,0,D.cm,0,"","","","","",!1,0),j,new C.eJ(""+1000*f+"_"+e,D.f0,0.132,k+l+0.002,0.7779999999999999,0.002,"",24,A.a5,A.bl,A.aD,b6,A.bg,a9,D.fr,0,b5,0.8,0,!1,g,0,D.cm,0,"","","","","",!1,0)],c1)
if(n){a0=0.132+m+0.008
a1=a0+0.268+0.004
a2=k+(l-0.025875)/2
s=Date.now()
p=$.iZ
$.iZ=p+1
i=Date.now()
h=$.iZ
$.iZ=h+1
g=Date.now()
f=$.iZ
$.iZ=f+1
e=Date.now()
a3=$.iZ
$.iZ=a3+1
A.d.v(d,B.a([new C.eJ(""+1000*s+"_"+p,D.cQ,a0,k,0.268,l,"AKUNA DENI",22,A.u,A.bl,A.aD,b7,A.dM,a9,D.be,b2,b3,2,0,!1,"marriage_locked_nim_akuna_deni",0,D.cm,0,"","","","","",!1,0),new C.eJ(""+1000*i+"_"+h,D.f0,a1,a2,0.046,0.025875,"",24,A.a5,A.bl,A.aD,b6,A.bg,a9,D.be,0,b7,2,0,!1,"marriage_locked_nim_akuna_box",0,D.cm,0,"","","","","",!1,0),new C.eJ(""+1000*g+"_"+f,D.cQ,a1,a2-0.002,0.046,0.029875,"\u2713",18,A.u,A.bl,A.aD,b7,A.L,a9,D.be,b2,b3,2,0,!1,"marriage_locked_nim_akuna_tick",0,D.cm,0,"","","","","",!1,0),new C.eJ(""+1000*e+"_"+a3,D.f0,a0,k,a1+0.046-a0,l,"",24,A.a5,A.bl,A.aD,b6,A.bg,a9,D.be,0,0,0,0,!1,"marriage_locked_nim_akuna_hit",0,D.cm,0,"","","","","",!1,0)],c1))}A.d.v(c2,d)
t+=0.04}t+=0.006
A.d.v(c2,C.hex("MASHAHIDI",t,0.09,0.82,c0))
t+=0.046
if(w===D.a49||w===D.a4b||w===D.a48||w===D.a4a){w=t-0.008
A.d.v(c2,C.fdg(0.21,w,0.044,!0,b0))
A.d.v(c2,C.fdg(0.7459999999999999,w,0.044,!1,b9))
t+=0.012}a4=0.05+d6*0.056+0.011
w=t+0.05
s=t+0.012
A.d.v(c2,B.a([C.q0(0,a4,D.be,c0,1.3,"wit_table_border",0.82,0.09,t),C.q0(c0,a4,D.be,c0,0,"wit_table_divider",0.0024,0.4988,t),C.q0(0,0.0022,D.fr,c0,1.1,"wit_table_hdrline",0.82,0.09,w),C.wo("UPANDE WA MKE",A.L,c0,20,A.u,0.03,0,"wit_h_mke_t",0.41,0.09,s),C.wo("UPANDE WA MUME",A.L,c0,20,A.u,0.03,0,"wit_h_mume_t",0.41,0.5,s)],c1))
a5=w+0.01
for(a6=1;a6<=d6;++a6){A.d.v(c2,C.hez("mke",a6,0.106,a5,0.378,c0,b9))
A.d.v(c2,C.hez("mume",a6,0.516,a5,0.378,c0,b9))
a5+=0.056}t=t+a4+0.012
w=t+0.056
s=t+0.09
p=s-0.002
A.d.v(c2,B.a([C.q0(0,0.11,D.be,c0,1.2,"mw_box",0.82,0.09,t),C.wo("MWANDISHI",A.bg,c0,15,A.H,0.026,0,"mw_hdr",0.7759999999999999,0.11199999999999999,t+0.016),C.wo("Jina:",A.bg,b9,15,A.a5,0.028,0,"mw_jl",0.09,0.11199999999999999,w),C.fdf("mwandishi_jina",0.215,w,0.3116,A.bg,!0,15,b9,""),C.byP(0.215,p,0.3116,b5),C.wo("Sahihi:",A.bg,b9,15,A.a5,0.028,0,"mw_sl",0.09,0.5,w),C.ep(A.bg,!1,b6,A.aD,"marriage_sign_mwandishi",0,24,A.bl,A.a5,"",0.044,C.cC(),a9,"","",0,!1,"",0,D.be,0,2,"",0,0,"",D.cm,D.f0,0.3161999999999999,0.5738,s-0.044),C.byP(0.5738,p,0.3161999999999999,b5)],c1))
a7=A.a.i(d1)
if(a7.length!==0){a8=t+0.11+0.006
A.d.v(c2,B.a([C.q0(0,0.032,D.be,c0,1,"state_box",0.7,0.15,a8),C.wo("EMO 'YA M'MBONDO "+a7,A.L,b9,26,A.P,0.026000000000000002,0,"state_text",0.7,0.15,a8+0.003)],c1))}return c2},
i0x(d){var w,v,u,t=null,s=B.b0(d.f),r=B.b0(d.r),q=C.fZ0(d.d),p=new C.fys(s),o=new C.fyt(s),n=d.z,m=n===D.a49||n===D.a4b||n===D.a48||n===D.a4a,l=n===D.aEn||n===D.a4c||n===D.aEo,k=B.bZ(0,B.fL(q,A.A,t,t,A.cl,A.bR,!0,t,!1,t,t),0,0,0),j=x.p,i=B.a([],j)
if(l){w=n===D.a4c?26:16
i.push(new C.fyv().$1$size(w))}if(n===D.aEp)i.push(D.ftI)
if(m)i.push(B.A(B.a([o.$1$female(!1),o.$1$female(!0)],j),A.m,t,A.hB,A.j,0,t,t))
i.push(B.d("HATI YA KUHOWA",t,t,t,t,t,t,B.l(t,t,s,t,t,t,t,t,t,t,t,9,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),A.L,t,t))
i.push(A.an)
n=B.I(r,A.q,1.1)
w=B.m(4)
i.push(B.p(t,B.v(B.a([p.$0(),D.aNp,p.$1$w(0.9),D.aNp,p.$1$w(0.75)],j),A.m,t,A.e,A.j,0,A.p),A.f,t,t,new B.o(D.b7v,t,n,w,t,t,A.n),t,t,t,t,A.ai5,t,t,t))
i.push(A.an)
i.push(new C.fyu(r).$1("NIMETOWE"))
i.push(A.h0)
v=J.e3(3,x.l)
for(u=0;u<3;++u)v[u]=new B.D(A.LJ,new B.cn(A.aO,A.e,A.j,A.m,t,A.p,t,0,B.a([B.p(t,t,A.f,t,t,new B.o(r,t,t,t,t,t,A.a6),t,7,t,t,t,t,t,7),A.d9,new B.bD(1,A.bh,p.$1$h(4),t)],j),t),t)
A.d.v(i,v)
i.push(A.b6)
i.push(B.d(d.b,t,t,t,t,t,t,B.l(t,t,s.j(0.85),t,t,t,t,t,t,t,t,8,t,t,A.H,t,t,!0,t,t,t,t,t,t,t,t),A.L,t,t))
return new B.an(A.W,t,A.b0,A.r,B.a([k,new B.D(A.agG,B.v(i,A.aj,t,A.e,A.j,0,A.p),t)],j),t)},
hj5(d,e){var w,v,u,t=null,s="Hati ya Kuhowa",r=C.agw(e,t)
if(r==null)r=A.d.gL(D.Gs)
w=C.cC()
v=C.ro(r.e,t,0,0,C.fVc(r,0.165,y.O,D.d5h,"NIMETOWA",!1,"Vitu vifuatavyo vimetolewa:",20,d,"HATI YA KUHOWA",40,0.55,0.036,3),w,D.q5,"","",s,D.dd)
w=C.cC()
u=A.a.i(d)
if(u.length===0)u=t
return C.Br(t,t,t,t,D.o7,5,!1,"hati_kuhowa",t,t,t,t,w,t,!1,u,s,t,t,B.a([v],x.g),"hati_kuhowa_"+r.a,t,!1,t)},
hj6(d,e){var w,v,u,t=null,s="Hati ya Kuhoweya",r=C.agw(e,t)
if(r==null)r=A.d.gL(D.Gs)
w=C.cC()
v=C.ro(r.e,t,0,0,C.fVc(r,0.165,y.f,D.d13,"NIMEPOKEYA CASH",!0,"Vitu vifuatavyo vimetolewa:",20,d,"HATI YA KUHOWESHA",40,0.55,0.036,3),w,D.q5,"","",s,D.dd)
w=C.cC()
u=A.a.i(d)
if(u.length===0)u=t
return C.Br(t,t,t,t,D.o7,5,!1,"hati_kuhoweya",t,t,t,t,w,t,!1,u,s,t,t,B.a([v],x.g),"hati_kuhoweya_"+r.a,t,!1,t)},
bCM(d,e,f){var w=0,v=B.j(x.T),u
var $async$bCM=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:u=B.bR(A.K,null,new C.fK4(e,f),d,!0,!0,!0,null,!1,!1,x.N)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bCM,v)},
ag5(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$ag5=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:q=B.U(i).k("a2<1>")
p=B.B(new B.a2(i,new C.fsl(),q),q.k("J.E"))
w=!g&&p.length!==0?3:4
break
case 3:w=5
return B.b(B.bR(D.KW,null,new C.fsm(p),d,!0,!0,!1,A.lr,!1,!1,x.N),$async$ag5)
case 5:t=k
if(t==="continue"){f.$1(A.d.gL(p).hC())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bCM(d,"Hati ya Kuhowa",D.Gs),$async$ag5)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.KS(d,"Tafuta jimbo\u2026","",A.jZ,"Chagua jimbo"),$async$ag5)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}e.$1(C.hj5(r,s))
case 1:return B.h(u,v)}})
return B.i($async$ag5,v)},
ag6(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$ag6=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:q=B.U(i).k("a2<1>")
p=B.B(new B.a2(i,new C.fsp(),q),q.k("J.E"))
w=!g&&p.length!==0?3:4
break
case 3:w=5
return B.b(B.bR(D.KW,null,new C.fsq(p),d,!0,!0,!1,A.lr,!1,!1,x.N),$async$ag6)
case 5:t=k
if(t==="continue"){f.$1(A.d.gL(p).hC())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bCM(d,"Hati ya Kuhoweya",D.Gs),$async$ag6)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.KS(d,"Tafuta jimbo\u2026","",A.jZ,"Chagua jimbo"),$async$ag6)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}e.$1(C.hj6(r,s))
case 1:return B.h(u,v)}})
return B.i($async$ag6,v)},
ag7(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p,o,n,m
var $async$ag7=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:n=B.U(i).k("a2<1>")
m=B.B(new B.a2(i,new C.fst(),n),n.k("J.E"))
w=!g&&m.length!==0?3:4
break
case 3:w=5
return B.b(B.bR(D.KW,null,new C.fsu(m),d,!0,!0,!1,A.lr,!1,!1,x.N),$async$ag7)
case 5:t=k
if(t==="continue"){f.$1(A.d.gL(m).hC())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bCM(d,"Malipo ya Awamu ya Mahari",D.Q9),$async$ag7)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.KS(d,"Tafuta jimbo\u2026","",A.jZ,"Chagua jimbo"),$async$ag7)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}q=C.agw(s,D.Q9)
if(q==null)q=A.d.gL(D.Q9)
n=C.cC()
p=C.ro(q.e,null,0,0,C.fVc(q,0.21,"Mimi [Jina la Baba wa Mume], nikiwa kama baba na mkuu wa familia ya upande wa mume kutoka jamii ya [Jina la Jamii ya Mume], nyumba ya [Jina la Nyumba ya Mume], ninafanya makubaliano haya rasmi na familia ya [Jina la Baba wa Binti], wa jamii ya [Jina la Jamii ya Binti], nyumba ya [Jina la Nyumba ya Binti]. Kwa kuwa malipo kamili ya mahari ya mke wa mwanangu hayajakamilika kwa sasa, tumefikia makubaliano ya kulipa kwa awamu. Kiasi kilichosalia cha mahari kitakamilishwa kikamilifu na familia yetu ifikapo tarehe [Tarehe ya Kurudi Kulipa Mahari]. Siku hiyo, pande zote mbili zitakutana tena kwa ajili ya kukamilisha taratibu zote zilizosalia, kupokea baraka kamili za ndoa, na kukabidhiwa Cheti cha Ndoa ya Kimila. Makubaliano haya yanafanyika kwa hiari, kwa ridhaa ya familia zote mbili, na kwa kufuata misingi ya heshima, mila, desturi na maelewano mema kati ya familia zetu.",D.cX9,"MALIPO YALIYOSALIA",!1,"Mambo ya Cash na Mali (Yaliyosalia / Yatakayokamilishwa):",18,r,"HATI YA MAKUBALIANO YA MALIPO YA AWAMU YA MAHARI",24,0.85,0.048,2),n,D.q5,"","","Hati ya Makubaliano ya Malipo ya Awamu",D.dd)
n=C.cC()
o=A.a.i(r)
if(o.length===0)o=null
e.$1(C.Br(null,null,null,null,D.o7,5,!1,"hati_malipo_awamu",null,null,null,null,n,null,!1,o,"Hati ya Makubaliano ya Malipo ya Awamu",null,null,B.a([p],x.g),"hati_malipo_awamu_"+q.a,null,!1,null))
case 1:return B.h(u,v)}})
return B.i($async$ag7,v)},
xl:function xl(d,e){this.a=d
this.b=e},
jl:function jl(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.z=k},
fyw:function fyw(){},
fys:function fys(d){this.a=d},
fyu:function fyu(d){this.a=d},
fyv:function fyv(){},
fyt:function fyt(d){this.a=d},
fK4:function fK4(d,e){this.a=d
this.b=e},
acR:function acR(d,e,f){this.c=d
this.d=e
this.a=f},
dXz:function dXz(d,e,f){this.a=d
this.b=e
this.c=f},
dXy:function dXy(d,e){this.a=d
this.b=e},
dXx:function dXx(d,e){this.a=d
this.b=e},
acf:function acf(d,e,f){this.c=d
this.d=e
this.a=f},
fsl:function fsl(){},
fsm:function fsm(d){this.a=d},
fsj:function fsj(d){this.a=d},
fsk:function fsk(d){this.a=d},
fsp:function fsp(){},
fsq:function fsq(d){this.a=d},
fsn:function fsn(d){this.a=d},
fso:function fso(d){this.a=d},
fst:function fst(){},
fsu:function fsu(d){this.a=d},
fsr:function fsr(d){this.a=d},
fss:function fss(d){this.a=d},
Kh(d,e,f,g,h,i,j,k,l,m){var w=C.cC()
return C.ep(e,!1,f,A.aD,j.length===0?"marriage_locked":"marriage_locked_"+j,4280640491,g,A.bl,h,"",i,w,null,"","",0,!1,"",0,D.be,4280172719,2,d,0,0,"",D.cm,D.cQ,k,l,m)},
Cr(d,e,f,g,h,i,j,k,l){var w=C.cC()
return C.ep(A.bg,!1,4279310375,A.aD,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bl,A.a5,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.cm,D.f0,j,k,l)},
hfe(d,e,f){return C.Cr(0,0.002,D.fr,4293056712,0.8,"ul_"+B.t(d)+"_"+B.t(e),f,d,e+0.022)},
byZ(d,e,f,g,h){return B.a([C.Cr(4294967288,0.032,D.be,4291404327,1.15,"pill_"+d,g,f,e),C.Kh(d,A.L,h,11,A.u,0.024,"pill_t_"+d,g,f,e+0.005)],x.u)},
fVZ(d,e,f,g,h){var w=d+f/2,v=e+0.006,u=f*0.4,t=B.t(e)
return B.a([C.Cr(0,0.002,D.fr,g,1,"orn_l_"+t,u,d,v),C.Cr(h,0.016,D.kY,g,0.9,"orn_c_"+t,0.024,w-0.012,e),C.Cr(0,0.002,D.fr,g,1,"orn_r_"+t,u,w+0.018,v)],x.u)},
a0M(d,e,f,g,h,i,j,k){var w=d.length*i*0.0027+0.006,v=C.Kh(d,A.bg,j,i,A.P,0.022,"ll_"+e,w,f,g),u=f+w,t=h-w,s=C.cC()
return B.a([v,C.ep(A.L,!1,j,A.aD,"marriage_field_"+e+":"+A.k.aa(t,3),4280640491,i,A.cF,A.P,"",0.02,s,null,"","",0,!1,"",0,D.be,4280172719,2,k,0,0,"",D.cm,D.cQ,t,u,g-0.002),C.hfe(u,g+0.018,t)],x.u)},
hff(d,e,f,g,h,i){var w=4291404327,v=f+0.002
return B.a([C.Cr(h,0.028,D.be,h,0,"chv_"+d,g,e,f),C.Cr(w,0.024,D.kY,w,0,"chv_l_"+d,0.024,e-0.008,v),C.Cr(w,0.024,D.kY,w,0,"chv_r_"+d,0.024,e+g-0.016,v),C.Kh(d,A.L,i,9.5,A.u,0.02,"chv_t_"+d,g,e,f+0.004)],x.u)},
byY(d,e,f,g,h){var w=e+0.12,v=g-0.12
return B.a([C.Kh("Sahihi:",A.bg,h,10,A.P,0.02,"is_"+d,0.12,e,f),C.ep(A.bg,!1,4279310375,A.aD,"marriage_sign_"+d,0,24,A.bl,A.a5,"",0.032,C.cC(),null,"","",0,!1,"",0,D.be,0,2,"",0,0,"",D.cm,D.f0,v,w,f-0.006),C.hfe(w,f+0.016,v)],x.u)},
fZ1(d){var w,v
for(w=0;w<19;++w){v=D.Qm[w]
if(v.a===d)return v}return null},
i2O(d){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=d.c
if(A.a.a0(k,"hati_kuhowa_")){w=C.agw(A.a.b1(k,12),l)
v=w==null?l:w.d}else if(A.a.a0(k,"hati_kuhoweya_")){w=C.agw(A.a.b1(k,14),l)
v=w==null?l:w.d}else if(A.a.a0(k,"hati_malipo_awamu_")){u=A.a.b1(k,18)
w=C.agw(u,D.Q9)
v=w==null?l:w.d
if(v==null){w=C.agw(u,l)
v=w==null?l:w.d}}else if(A.a.a0(k,"marriage_")){w=C.fZ1(A.a.b1(k,9))
v=w==null?l:w.d}else v=l
if(v==null)return!1
$.hg3.a9(0)
$.hgg.a9(0)
t=C.fAc(v)
for(w=d.r,s=w.length,r=!1,q=0;q<w.length;w.length===s||(0,B.L)(w),++q)for(p=w[q].z,o=p.length,n=0;n<o;++n){m=p[n]
if(m.db==="marriage_locked_bg"&&m.at!==t){m.at=t
r=!0}}return r},
h_5(d){var w=0,v=B.j(x.T),u
var $async$h_5=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:u=B.bR(A.K,null,new C.fLx(),d,!0,!0,!0,null,!1,!1,x.N)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$h_5,v)},
xo:function xo(d,e){this.a=d
this.b=e},
nC:function nC(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bit:function bit(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
fLx:function fLx(){},
acU:function acU(d){this.a=d},
ed7:function ed7(d,e){this.a=d
this.b=e},
ed6:function ed6(d){this.a=d},
ed5:function ed5(d,e){this.a=d
this.b=e},
aeB:function aeB(d,e,f){this.c=d
this.d=e
this.a=f},
fZ0(d){return $.hgg.cg(0,d,new C.fAe(d))},
fAc(d){return $.hg3.cg(0,d,new C.fAd(d))},
fy(d){return B.fPq(d>>>16&255,d>>>8&255,d&255,255)},
hSW(d){var w,v,u=4292128567,t=4285213214,s=4294967035,r=4290283019,q=null,p=4279378237,o=4291404327,n=4294966774,m=4294702831,l=4285218602,k=4291394365,j=4294967295,i=4294964964,h=4294965484,g=4280241466,f=4287326484,e=4294966518
switch(d.a){case 0:return C.hhl(4294570461,4293910718,4284234270,u)
case 1:return C.hhl(4294635750,4293975240,t,4292912216)
case 2:w=C.fbR(s,4294505966,r)
C.byJ(w,14,16,p)
C.ks(w,8,9,464,836,u,1.2)
C.Cn(w,2,2,1,1,u,10)
C.Cn(w,478,2,-1,1,u,10)
C.Cn(w,2,852,1,-1,u,10)
C.Cn(w,478,852,-1,-1,u,10)
return w
case 3:return C.fbR(4294966515,4294373082,4289102906)
case 4:return C.hNJ(C.fbR(4294376440,4293653998,4290287194))
case 5:w=C.fbR(4294965238,4294437098,4288444980)
C.byJ(w,14,16,4283043359)
C.ks(w,6,7,468,840,u,1)
C.ks(w,9,10,462,834,o,0.7)
return w
case 6:v=B.hm(q,q,A.c9,0,A.e0,854,q,0,3,q,A.c9,480,!1)
C.ye(v,n,4294175448)
C.rI(v,n)
C.ks(v,24,24,432,806,4286209070,1)
C.a0A(v,12,12,468,12,o,3,20)
C.a0A(v,12,842,468,842,o,3,20)
C.a0A(v,12,12,12,842,o,3,20)
C.a0A(v,468,12,468,842,o,3,20)
return v
case 7:return C.hLL(4294440434,4293518297,4280228630,r)
case 8:v=B.hm(q,q,A.c9,0,A.e0,854,q,0,3,q,A.c9,480,!1)
C.ye(v,m,4293911504)
C.rI(v,m)
C.ks(v,28,28,424,798,l,1)
C.fkD(v,28,28,l,k)
C.fkD(v,452,28,l,k)
C.fkD(v,28,826,l,k)
C.fkD(v,452,826,l,k)
return v
case 9:v=B.hm(q,q,A.c9,0,A.e0,854,q,0,3,q,A.c9,480,!1)
C.ye(v,j,4294111986)
C.rI(v,j)
C.ks(v,18,18,444,818,4292401368,0.7)
B.iI(v,!0,C.fy(p),0,13,0,853)
return v
case 10:return C.hPG(i,4294173372)
case 11:return C.hQL(4294439140,4293449662)
case 12:return C.hLD(h,4294239432)
case 13:return C.hQc(4294244340,4293193448)
case 14:return C.hUu(4294505710,4293780694)
case 15:return C.faP(4294966259,4294439138,o,p,q)
case 16:return C.faP(4294966776,4294178544,o,g,g)
case 17:return C.faP(4294965493,4294504170,o,4286200650,q)
case 18:return C.faP(4294966519,4294373862,o,p,p)
case 19:return C.hOO()
case 20:return C.hOP()
case 21:v=B.hm(q,q,A.c9,0,A.e0,854,q,0,3,q,A.c9,480,!1)
C.ye(v,h,4293976768)
C.rI(v,h)
C.byJ(v,14,16,p)
B.iI(v,!0,C.fy(u),4,475,4,9)
B.iI(v,!0,C.fy(u),4,475,844,849)
B.iI(v,!0,C.fy(u),4,9,4,849)
B.iI(v,!0,C.fy(u),470,475,4,849)
C.a0A(v,10,12,470,12,u,2,16)
C.a0A(v,10,842,470,842,u,2,16)
C.a0A(v,10,12,10,842,u,2,18)
C.a0A(v,470,12,470,842,u,2,18)
C.Cn(v,2,2,1,1,t,10)
C.Cn(v,478,2,-1,1,t,10)
C.Cn(v,2,852,1,-1,t,10)
C.Cn(v,478,852,-1,-1,t,10)
C.ks(v,14,16,452,822,u,1.8)
return v
case 22:v=B.hm(q,q,A.c9,0,A.e0,854,q,0,3,q,A.c9,480,!1)
C.ye(v,s,4294438872)
C.rI(v,s)
C.ks(v,14,16,452,822,o,2.2)
C.ks(v,22,24,436,806,o,1)
C.fXh(v,!1,!1,o,p,p,36,14,16)
C.kG(v,240,20,7,o,!0)
C.kG(v,240,834,7,o,!0)
C.kG(v,18,427,7,o,!0)
C.kG(v,462,427,7,o,!0)
return v
case 23:v=B.hm(q,q,A.c9,0,A.e0,854,q,0,3,q,A.c9,480,!1)
C.ye(v,i,4293910712)
C.rI(v,i)
B.iI(v,!0,C.fy(u),0,479,0,20)
B.iI(v,!0,C.fy(u),0,479,834,853)
B.iI(v,!0,C.fy(u),0,20,0,853)
B.iI(v,!0,C.fy(u),460,479,0,853)
B.iI(v,!0,C.fy(f),5,474,5,9)
B.iI(v,!0,C.fy(f),5,474,844,848)
B.iI(v,!0,C.fy(f),5,9,5,848)
B.iI(v,!0,C.fy(f),470,474,5,848)
C.ks(v,28,28,424,798,f,1.4)
return v
case 24:v=B.hm(q,q,A.c9,0,A.e0,854,q,0,3,q,A.c9,480,!1)
C.ye(v,e,4294174404)
C.rI(v,e)
C.byJ(v,14,16,p)
B.iI(v,!0,C.fy(u),3,476,3,8)
B.iI(v,!0,C.fy(u),3,476,845,850)
B.iI(v,!0,C.fy(u),3,8,3,850)
B.iI(v,!0,C.fy(u),471,476,3,850)
C.ks(v,9,10,462,834,t,1)
C.ks(v,14,16,452,822,u,1.8)
C.kG(v,240,8,4,u,!0)
C.kG(v,240,846,4,u,!0)
C.kG(v,8,427,4,u,!0)
C.kG(v,472,427,4,u,!0)
C.kG(v,8,8,3,t,!0)
C.kG(v,472,8,3,t,!0)
C.kG(v,8,846,3,t,!0)
C.kG(v,472,846,3,t,!0)
return v}},
ye(d,e,f){var w,v,u,t,s,r=null,q=e>>>16&255,p=f>>>16&255,o=e>>>8&255,n=f>>>8&255,m=e&255,l=f&255,k=0
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
B.kI(d,!1,A.dc,new B.RH(s),r,A.cX,1,0,w-1,k,k);++k}},
rI(d,e){var w,v,u,t,s,r,q,p,o=null,n=new B.eL()
n.dB(e)
for(w=0;w<900;++w){v=d.a
v=v==null?o:v.a
u=n.aC(v==null?0:v)
v=d.a
v=v==null?o:v.b
t=n.aC(v==null?0:v)
v=d.a
s=v==null?o:v.dR(u,t,o)
if(s==null)s=new B.iD()
v=A.o.D(A.k.N(s.gb4(s))-3,0,255)
r=A.o.D(A.k.N(s.gbb())-3,0,255)
q=A.o.D(A.k.N(s.gba(s))-2,0,255)
p=d.a
if(p!=null)p.jI(u,t,v,r,q,255)}},
ks(d,e,f,g,h,i,j){var w,v=null,u=C.fy(i),t=e+g
B.kI(d,!0,A.dc,u,v,A.cX,j,e,t,f,f)
w=f+h
B.kI(d,!0,A.dc,u,v,A.cX,j,e,t,w,w)
B.kI(d,!0,A.dc,u,v,A.cX,j,e,e,f,w)
B.kI(d,!0,A.dc,u,v,A.cX,j,t,t,f,w)},
Cn(d,e,f,g,h,i,j){var w,v,u=null,t=A.o.D(A.k.V(j*0.72),8,j-2)
B.kI(d,!0,A.dc,C.fy(i),u,A.cX,2,e,e+g*j,f,f)
B.kI(d,!0,A.dc,C.fy(i),u,A.cX,2,e,e,f,f+h*j)
w=e+g*3
v=f+h*3
B.kI(d,!0,A.dc,C.fy(i),u,A.cX,1,w,e+g*t,v,v)
B.kI(d,!0,A.dc,C.fy(i),u,A.cX,1,w,w,v,f+h*t)},
hhl(d,e,f,g){var w=null,v=B.hm(w,w,A.c9,0,A.e0,854,w,0,3,w,A.c9,480,!1)
C.ye(v,d,e)
C.rI(v,d)
B.iI(v,!0,C.fy(f),0,479,0,28)
B.iI(v,!0,C.fy(f),0,479,826,853)
B.iI(v,!0,C.fy(f),0,28,0,853)
B.iI(v,!0,C.fy(f),452,479,0,853)
C.ks(v,5,5,470,844,g,1.1)
C.ks(v,28,28,424,798,g,1.6)
C.Cn(v,2,2,1,1,g,11)
C.Cn(v,478,2,-1,1,g,11)
C.Cn(v,2,852,1,-1,g,11)
C.Cn(v,478,852,-1,-1,g,11)
return v},
fbR(d,e,f){var w=null,v=B.hm(w,w,A.c9,0,A.e0,854,w,0,3,w,A.c9,480,!1)
C.ye(v,d,e)
C.rI(v,d)
C.ks(v,14,16,452,822,f,1.6)
C.ks(v,20,22,440,810,f,0.8)
return v},
byJ(d,e,f,g){var w,v=C.fy(g)
B.iI(d,!0,v,0,479,0,f-1)
w=854-f
B.iI(d,!0,v,0,479,w,853);--w
B.iI(d,!0,v,0,e-1,f,w)
B.iI(d,!0,v,480-e,479,f,w)},
hNJ(d){var w,v,u=4291404327
C.byJ(d,14,16,4279122734)
for(w=10;w<470;w+=14){C.kG(d,w,8,3,u,!0)
C.kG(d,w,846,3,u,!0)}for(v=18;v<836;v+=16){C.kG(d,7,v,3,u,!0)
C.kG(d,473,v,3,u,!0)}return d},
fnC(d,e,f,g,h,i,j,k,l,m,n){var w,v,u,t=x.J,s=B.a([new B.jc(e,f),new B.jc(e+g*n,f),new B.jc(e,f+h*n)],t)
B.a1m(d,C.fy(m),s)
w=A.o.D(A.k.V(n*0.17),5,8)
v=A.k.V(n*0.78)
s=e+g*w
u=f+h*w
t=B.a([new B.jc(s,u),new B.jc(e+g*v,u),new B.jc(s,f+h*v)],t)
B.a1m(d,C.fy(k),t)
t=A.k.V(n*0.39)
C.kG(d,e+g*t,f+h*t,6,l,!0)
if(i){t=n-7
C.kG(d,e+g*t,f+h*3,4,k,!0)
C.kG(d,e+g*3,f+h*t,4,k,!0)}if(j){t=n-4
C.kG(d,e+g*t,f,5,k,!0)
C.kG(d,e,f+h*t,5,k,!0)}},
fXh(d,e,f,g,h,i,j,k,l){var w,v
C.fnC(d,k,l,1,1,e,f,g,h,i,j)
w=480-k
C.fnC(d,w,l,-1,1,e,f,g,h,i,j)
v=854-l
C.fnC(d,k,v,1,-1,e,f,g,h,i,j)
C.fnC(d,w,v,-1,-1,e,f,g,h,i,j)},
a0A(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p,o=g-e,n=h-f,m=Math.max(1,A.k.V(Math.sqrt(o*o+n*n)/k))
for(w=i>>>16&255,v=i>>>8&255,u=i&255,t=0;t<=m;++t){s=t/m
r=A.k.V(e+o*s)
q=A.k.V(f+n*s)
p=new Uint8Array(4)
p[0]=w
p[1]=v
p[2]=u
p[3]=255
B.l0(d,!0,A.dc,new B.qV(p),null,A.cX,j,r,q)}},
fmL(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o
for(w=i>>>16&255,v=i>>>8&255,u=i&255,t=0;t<3;++t){s=34+t*12
r=26-t*6
q=e+g*s
p=f+h*s
o=new Uint8Array(4)
o[0]=w
o[1]=v
o[2]=u
o[3]=255
B.kI(d,!0,A.dc,new B.qV(o),null,A.cX,1.4,q,q+g*r,p,p)
o=new Uint8Array(4)
o[0]=w
o[1]=v
o[2]=u
o[3]=255
B.kI(d,!0,A.dc,new B.qV(o),null,A.cX,1.4,q,q,p,p+h*r)}},
hLL(d,e,f,g){var w,v,u,t,s,r,q,p,o=null,n=B.hm(o,o,A.c9,0,A.e0,854,o,0,3,o,A.c9,480,!1)
C.ye(n,d,e)
C.rI(n,d)
C.ks(n,20,20,440,814,f,1.2)
C.fmL(n,0,0,1,1,g)
C.fmL(n,480,0,-1,1,g)
C.fmL(n,0,854,1,-1,g)
C.fmL(n,480,854,-1,-1,g)
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
B.kI(n,!0,A.dc,new B.qV(p),o,A.cX,1.2,240,r,60,q)}return n},
fkD(d,e,f,g,h){var w
C.fqk(d,!0,C.fy(g),13,e,f)
C.fqk(d,!0,C.fy(g),9,e,f)
w=B.a([new B.jc(e,f-4),new B.jc(e+4,f),new B.jc(e,f+4),new B.jc(e-4,f)],x.J)
B.a1m(d,C.fy(h),w)},
kG(d,e,f,g,h,i){var w=null,v=f-g,u=e+g,t=f+g,s=e-g,r=B.a([new B.jc(e,v),new B.jc(u,f),new B.jc(e,t),new B.jc(s,f)],x.J)
if(i){B.a1m(d,C.fy(h),r)
return}B.kI(d,!0,A.dc,C.fy(h),w,A.cX,1,e,u,v,f)
B.kI(d,!0,A.dc,C.fy(h),w,A.cX,1,u,e,f,t)
B.kI(d,!0,A.dc,C.fy(h),w,A.cX,1,e,s,t,f)
B.kI(d,!0,A.dc,C.fy(h),w,A.cX,1,s,e,f,v)},
faO(d,e,f,g,h,i,j){var w,v=B.a([new B.jc(e,f),new B.jc(e+g*28,f),new B.jc(e,f+h*28)],x.J)
B.a1m(d,C.fy(i),v)
v=e+g*14
w=f+h*14
C.kG(d,v,w,6,j,!0)
C.kG(d,v,w,3,i,!0)},
faP(d,e,f,g,h){var w=null,v=B.hm(w,w,A.c9,0,A.e0,854,w,0,3,w,A.c9,480,!1)
C.ye(v,d,e)
C.rI(v,d)
C.ks(v,18,18,444,818,f,2)
C.ks(v,26,26,428,802,f,0.9)
if(h!=null)B.iI(v,!0,C.fy(h),28,451,28,34)
C.faO(v,18,18,1,1,g,f)
C.faO(v,462,18,-1,1,g,f)
C.faO(v,18,836,1,-1,g,f)
C.faO(v,462,836,-1,-1,g,f)
return v},
hOO(){var w,v=null,u=4294966259,t=4292128567,s=4287326484,r=B.hm(v,v,A.c9,0,A.e0,854,v,0,3,v,A.c9,480,!1)
C.ye(r,u,4294240980)
C.rI(r,u)
C.ks(r,10,12,460,830,t,3.2)
C.ks(r,18,20,444,814,s,1.2)
C.ks(r,24,26,432,802,t,1.8)
C.fXh(r,!0,!1,t,s,4279378237,38,10,12)
for(w=56;w<424;w+=18){C.kG(r,w,16,3,t,!0)
C.kG(r,w,838,3,t,!0)}for(w=56;w<798;w+=22){C.kG(r,16,w,3,t,!0)
C.kG(r,464,w,3,t,!0)}return r},
hOP(){var w,v,u,t=null,s=4294966776,r=4291404327,q=4282000405,p=B.hm(t,t,A.c9,0,A.e0,854,t,0,3,t,A.c9,480,!1)
C.ye(p,s,4294373080)
C.rI(p,s)
C.ks(p,16,18,448,818,r,2.4)
C.ks(p,24,26,432,802,4286209044,1)
w=new C.fd7(p)
for(v=40;v<440;v+=16){w.$4(v,22,1,1)
w.$4(v,832,1,1)}for(u=44;u<810;u+=18){w.$4(22,u,1,1)
w.$4(458,u,-1,1)}C.fXh(p,!1,!0,r,q,q,34,16,18)
return p},
bzp(d,e,f,g,h,i){B.iI(d,!0,C.fy(i),e,e+g,f,f+h)},
bAe(d,e,f,g,h,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
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
B.kI(d,!1,A.dc,new B.RH(i),null,A.cX,1,e,w,l,l)}},
hPF(d,e,f,g,h,i){var w,v,u,t,s,r,q
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
B.kI(d,!1,A.dc,new B.qV(r),null,A.cX,1,e,s,t,t);++v}return}w=f+g-1
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
B.kI(d,!1,A.dc,new B.qV(r),null,A.cX,1,t,t,f,s);++q}},
hPG(d,e){var w,v,u=null,t=B.hm(u,u,A.c9,0,A.e0,854,u,0,3,u,A.c9,480,!1)
for(w=0;w<854;w+=30)for(v=0;v<480;v+=30)C.hPF(t,v,w,30,D.cQ4,(A.o.an(v,30)+A.o.an(w,30)&1)===0)
C.bzp(t,44,44,392,766,d)
C.bAe(t,44,44,392,766,d,e)
C.rI(t,d)
C.ks(t,44,44,392,766,4292128567,2.2)
C.ks(t,50,50,380,754,4279898632,0.8)
return t},
hQK(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=null
switch(A.o.F(g,4)){case 0:C.kG(d,e,f,7,h,!0)
C.kG(d,e,f,3,h,!1)
break
case 1:w=e-7
v=f-7
u=e+7
t=f+7
B.kI(d,!0,A.dc,C.fy(h),o,A.cX,1.6,w,u,v,t)
B.kI(d,!0,A.dc,C.fy(h),o,A.cX,1.6,u,w,v,t)
break
case 2:for(w=e-8,v=e+8,u=h>>>16&255,t=h>>>8&255,s=h&255,r=-2;r<=2;++r){q=f+r*3
p=new Uint8Array(4)
p[0]=u
p[1]=t
p[2]=s
p[3]=255
B.kI(d,!0,A.dc,new B.qV(p),o,A.cX,1.2,w,v,q,q)}break
default:B.kI(d,!0,A.dc,C.fy(h),o,A.cX,1.5,e-8,e+8,f,f)
B.kI(d,!0,A.dc,C.fy(h),o,A.cX,1.5,e,e,f-8,f+8)
B.l0(d,!0,A.dc,C.fy(h),o,A.cX,2,e,f)}},
hQL(d,e){var w,v,u,t,s=null,r=B.hm(s,s,A.c9,0,A.e0,854,s,0,3,s,A.c9,480,!1)
B.iI(r,!0,C.fy(4284103196),0,479,0,853)
for(w=0,v=18;v<854;v+=32)for(u=18;u<480;u+=32,w=t){t=w+1
C.hQK(r,u,v,w,4292391514)}C.bzp(r,46,46,388,762,d)
C.bAe(r,46,46,388,762,d,e)
C.rI(r,d)
C.ks(r,46,46,388,762,4291404327,1.8)
return r},
hcM(d,e,f,g){C.fqk(d,!0,C.fy(g),16,e,f)
C.fqk(d,!0,C.fy(g),11,e,f)
C.kG(d,e,f,6,g,!0)
B.kI(d,!0,A.dc,C.fy(g),null,A.cX,1.3,e-14,e+14,f,f)
B.kI(d,!0,A.dc,C.fy(g),null,A.cX,1.3,e,e,f-14,f+14)},
hLD(d,e){var w,v=null,u=4283051028,t=4292128567,s=B.hm(v,v,A.c9,0,A.e0,854,v,0,3,v,A.c9,480,!1)
B.iI(s,!0,C.fy(4280948752),0,479,0,853)
B.iI(s,!0,C.fy(u),0,479,0,78)
B.iI(s,!0,C.fy(u),0,479,776,853)
for(w=28;w<460;w+=44){C.hcM(s,w,39,t)
C.hcM(s,w,815,t)}C.bzp(s,38,92,404,670,d)
C.bAe(s,38,92,404,670,d,e)
C.rI(s,d)
C.ks(s,38,92,404,670,t,1.8)
C.ks(s,45,99,390,656,4287322667,0.8)
return s},
hQb(d,e,f,g){var w,v,u,t,s,r,q,p,o
for(w=f-4,v=x.J,u=g>>>16&255,t=g>>>8&255,s=g&255,r=-2;r<=2;++r){q=e+r*9
p=B.a([new B.jc(e,f),new B.jc(q-5,w),new B.jc(q,f-(18-Math.abs(r)*3)),new B.jc(q+5,w)],v)
o=new Uint8Array(4)
o[0]=u
o[1]=t
o[2]=s
o[3]=255
B.a1m(d,new B.qV(o),p)}B.l0(d,!0,A.dc,C.fy(4292128567),null,A.cX,3,e,f)},
hQc(d,e){var w,v,u,t,s=null,r=4279196764,q=B.hm(s,s,A.c9,0,A.e0,854,s,0,3,s,A.c9,480,!1)
C.ye(q,4278931279,4292330394)
for(w=8;w<=34;w+=4){v=new Uint8Array(4)
v[0]=8
v[1]=56
v[2]=56
v[3]=255
B.kI(q,!0,A.dc,new B.qV(v),s,A.cX,1.1,w,w,0,853)
v=479-w
u=new Uint8Array(4)
u[0]=8
u[1]=56
u[2]=56
u[3]=255
B.kI(q,!0,A.dc,new B.qV(u),s,A.cX,1.1,v,v,0,853)}B.iI(q,!0,C.fy(r),0,479,0,70)
B.iI(q,!0,C.fy(r),0,479,798,853)
for(t=0;t<5;++t)C.hQb(q,70+t*85,48,4292128567)
C.bzp(q,48,78,384,712,d)
C.bAe(q,48,78,384,712,d,e)
C.rI(q,d)
C.ks(q,48,78,384,712,4291404327,1.6)
return q},
hUu(d,e){var w,v,u,t=null,s=4279970378,r=B.hm(t,t,A.c9,0,A.e0,854,t,0,3,t,A.c9,480,!1)
B.iI(r,!0,C.fy(s),0,479,0,853)
for(w=10;w<854;w+=18)for(v=10;v<480;v+=18){C.kG(r,v,w,6,4293449648,!1)
u=new Uint8Array(4)
u[0]=232
u[1]=215
u[2]=176
u[3]=255
B.l0(r,!0,A.dc,new B.qV(u),t,A.cX,1,v,w)}C.bzp(r,40,40,400,774,d)
C.bAe(r,40,40,400,774,d,e)
C.rI(r,d)
C.ks(r,40,40,400,774,4291058750,2)
C.ks(r,48,48,384,758,s,0.8)
return r},
kQ:function kQ(d,e){this.a=d
this.b=e},
fAe:function fAe(d){this.a=d},
fAd:function fAd(d){this.a=d},
fd7:function fd7(d){this.a=d},
fAS(d){var w,v=d.a
A:{if("gazette"===v){w="The NGMY Gazette"
break A}if("chronicle"===v){w="The NGMY Chronicle"
break A}if("times"===v){w="The NGMY Times"
break A}if("daily"===v){w="The NGMY Daily"
break A}if("tabloid"===v){w="The Big NGMY"
break A}if("modern"===v){w="NGMY Digest"
break A}if("midnight"===v){w="The Midnight NGMY"
break A}w="The NGMY Herald"
break A}return w},
hQE(d){var w=d.length
if(w>3&&d[0]===137&&d[1]===80)return"image/png"
if(w>11&&d[8]===87&&d[9]===69)return"image/webp"
return"image/jpeg"},
fVS(d){var w,v,u,t=null,s=A.a.cJ(d,"{"),r=A.a.oA(d,"}")
if(s<0||r<=s)return t
try{w=A.R.aG(0,Ai.ags(A.a.ap(d,s,r+1)),t)
v=x.f.b(w)?B.a1(w,x.N,x.z):t
return v}catch(u){return t}},
aeZ(d,e){var w=0,v=B.j(x.N),u,t,s,r,q,p,o,n
var $async$aeZ=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(B.vc(null,""),$async$aeZ)
case 3:n=g
if(A.a.i(n).length===0)throw B.V("AI is not available right now. Please try again later.")
t=B.n2(n)
if(e==null)s=A.hn
else{r=C.hQE(e)
s=B.a([new B.a_A(A.cT.gcw().aJ(e),r)],x.aD)}q=null,p=0
case 4:if(!(p<2)){w=6
break}w=7
return B.b(B.qK(t,d,s,E.F_),$async$aeZ)
case 7:o=g
r=o.b
if(r!=null&&A.a.i(r).length!==0){u=r
w=1
break}q=o.a
case 5:++p
w=4
break
case 6:throw B.V(q!=null&&B.KH(q)?"No internet connection. Try again when you are online.":"The AI could not do that just now. Try again.")
case 1:return B.h(u,v)}})
return B.i($async$aeZ,v)},
bBT(d){return C.i2u(d)},
i2u(d){var w=0,v=B.j(x.b6),u,t=2,s=[],r,q,p,o,n,m
var $async$bBT=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
r='You are a professional Swahili newspaper editor and journalist: a native speaker from Tanzania or Kenya whose writing every Swahili reader finds natural, warm and correct.\nThe newspaper page below was written or translated by a machine, so it may sound stiff, foreign or word-for-word. Rewrite EVERY field so it reads as if a skilled native Swahili journalist wrote it first: natural, clear, correct and professional. Fix wrong grammar (noun classes, verb agreement, tenses), odd or invented words and any English sentence structure. Keep every fact, name and number and do not add facts. Keep the same fields and the same number of paragraphs. Write people\'s names with normal capitals, except KB PABLO QR.\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n\nPage: '+A.R.ao(d.ag(),null)+'\nReply with JSON only, with exactly the same fields: {"paper":"newspaper name","category":"ONE of COMMUNITY, TECHNOLOGY, BUSINESS, EDUCATION, WORLD NEWS, FEATURE","headline":"...","subhead":"...","byline":"By ...","caption":"one sentence about the picture","body":["paragraph 1","paragraph 2","paragraph 3","paragraph 4"],"pullQuote":"a short line from the story","sidebarTitle":"Did you know?","sidebarText":"two short sentences"}\n'
w=7
return B.b(C.aeZ(r,null),$async$bBT)
case 7:q=f
p=C.fVS(q)
if(p==null){u=d
w=1
break}o=d.aBK(p)
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
return B.i($async$bBT,v)},
hgF(d){var w,v=F.fYj(d)
v=B.aK(v,"book","newspaper")
if(F.a1F(d)!=="sw"){w=B.af("swahili|kiswahili",!1,!1,!1,!1)
w=w.b.test(d)}else w=!0
w=w?'SWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n':""
return"- Write like a real newspaper: a strong headline (max 12 words), a subhead (max 25 words), a byline, then 4 or 5 paragraphs, about 330 to 400 words in all. Plain text only: no markdown, no emojis, no lists.\n- Use ONLY the facts in the knowledge above. Never invent numbers, prices, dates, awards, places or quotes. Do not put made-up words in anyone's mouth.\n- KB PABLO QR is the Founder, President and CEO of NGMY. Always write his name in capital letters.\n- Never mention secret or admin details, passwords or the price list.\n- STYLE: write like an experienced human newspaper journalist in the style of a quality wire service (Associated Press, Reuters): polished, precise, natural and professional. Open with the most important fact. Use the active voice, concrete nouns and strong verbs. Mix short and longer sentences. Plain, grown-up words.\n- NEVER sound like an AI. Do not use: delve, tapestry, testament, beacon, realm, landscape, journey, game-changer, groundbreaking, revolutionize, unlock, empower, seamless, vibrant, bustling, in today's fast-paced world, it is worth noting, not just X but Y, whether you are X or Y. No exclamation marks, no rhetorical questions, no lists of three adjectives, no filler, no hype, no dashes for drama. Every sentence must say something real.\n- Check spelling, grammar and punctuation. Names are written with normal capitals, except KB PABLO QR.\n"+v+w},
fEN(d,e,f,g){return C.i4l(d,e,f,g)},
i4l(d,e,f,g){var w=0,v=B.j(x.b6),u,t,s,r,q,p,o,n,m
var $async$fEN=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:o=C.fAS(g)
n=A.a.i(f)
if(n.length===0)n="Choose the most interesting true story about NGMY from what you know, and write it. Vary it: it can be about the app, the Civic Registry, the Advisors, the studios, or the CEO."
t=C.hk8()
s=e==null?"There is no picture yet: write the caption as a short line about the story.":"A PICTURE IS ATTACHED. Look at it. Mention what is really visible in the caption and weave it into the story. Do not say who the people in it are unless the owner told you."
m=C
w=3
return B.b(C.aeZ('You are the editor-in-chief of a newspaper called "'+o+'". Write its front-page story in the voice of '+g.at+".\n"+t+'\n\nWHAT THE OWNER ASKED FOR: """'+n+'"""\n'+s+"\nRules:\n"+C.hgF(n)+'\nReply with JSON only, in exactly this shape: {"paper":"newspaper name","category":"ONE of COMMUNITY, TECHNOLOGY, BUSINESS, EDUCATION, WORLD NEWS, FEATURE","headline":"...","subhead":"...","byline":"By ...","caption":"one sentence about the picture","body":["paragraph 1","paragraph 2","paragraph 3","paragraph 4"],"pullQuote":"a short line from the story","sidebarTitle":"Did you know?","sidebarText":"two short sentences"}\n',e),$async$fEN)
case 3:r=m.fVS(i)
if(r==null)throw B.V(y.S)
q=new C.zf(o,"NGMY NEWS","","","By the NGMY Newsroom","",A.T,"","","").aBK(r)
t=q.r
if(t.length===0)throw B.V("The AI did not write a story. Try again.")
s=n+" "+A.d.aI(t," ")
if(F.a1F(s)!=="sw"){p=B.af("swahili|kiswahili",!1,!1,!1,!1)
s=p.b.test(s)}else s=!0
u=s&&F.a1F(A.d.aI(t," "))==="sw"?C.bBT(q):q
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fEN,v)},
bBn(d,e,f,g,h){return C.i06(d,e,f,g,h)},
i06(d,e,f,g,h){var w=0,v=B.j(x.gX),u,t,s,r,q,p,o,n,m,l,k,j
var $async$bBn=B.e(function(i,a0){if(i===1)return B.f(a0,v)
for(;;)switch(w){case 0:l=B.a([],x.s)
k=e.length
k=k>6?A.d.fL(e,k-6):e
t=k.length
s=0
for(;s<k.length;k.length===t||(0,B.L)(k),++s){r=k[s]
l.push(r.a+": "+r.b)}q=A.d.aI(l,"\n")
l=C.hk8()
k=A.R.ao(d.ag(),null)
t=q.length===0?"":"EARLIER IN THIS CONVERSATION:\n"+q+"\n"
j=C
w=3
return B.b(C.aeZ('You are the editor-in-chief of the newspaper "'+d.a+'", written in the voice of '+h.at+". The owner is talking to you about the page below. They may ask a question about NGMY or the page (just answer it), or ask you to change, add, shorten, rewrite or fix something (change ONLY that).\n"+l+"\n\nTHE PAGE NOW: "+k+"\n"+t+'\nTHE OWNER SAYS: """'+f+'"""\nRules:\n'+C.hgF(f)+'\n- Keep every part they did not mention exactly as it is. Keep the story about 330 to 400 words unless they ask for another length.\nReply with JSON only: {"message":"one or two friendly sentences: your answer, or what you changed","changes":{ ...only the fields you change, using the same names as the page... }}. For a pure question leave "changes" empty.\n',g),$async$bBn)
case 3:p=j.fVS(a0)
if(p==null)throw B.V(y.S)
o=p.h(0,"changes")
if(x.f.b(o)&&J.cy(o)){n=d.aBK(B.a1(o,x.N,x.z))
m=A.R.ao(n.ag(),null)!==A.R.ao(d.ag(),null)}else{n=d
m=!1}w=m&&F.a1F(A.d.aI(n.r," "))==="sw"?4:5
break
case 4:w=6
return B.b(C.bBT(n),$async$bBn)
case 6:n=a0
case 5:l=p.h(0,"message")
if(l==null)l=m?"Done.":"Okay."
u=new C.a7u(A.a.i(B.t(l)),n,m)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bBn,v)},
a7u:function a7u(d,e,f){this.a=d
this.b=e
this.c=f},
i78(d,e){return B.a5(d,!1).c8(B.e9(new C.fLI(e),!0,null,x.H))},
fLI:function fLI(d){this.a=d},
Vj:function Vj(d,e){this.c=d
this.a=e},
aDm:function aDm(d,e,f,g,h,i,j,k){var _=this
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
egp:function egp(d){this.a=d},
ego:function ego(){},
egq:function egq(d){this.a=d},
egn:function egn(d,e){this.a=d
this.b=e},
egr:function egr(){},
eg1:function eg1(d,e){this.a=d
this.b=e},
efY:function efY(d,e){this.a=d
this.b=e},
eg8:function eg8(d){this.a=d},
eg9:function eg9(d,e){this.a=d
this.b=e},
ega:function ega(d){this.a=d},
eg3:function eg3(d,e){this.a=d
this.b=e},
eg4:function eg4(d,e){this.a=d
this.b=e},
eg5:function eg5(d,e){this.a=d
this.b=e},
eg6:function eg6(d){this.a=d},
eg7:function eg7(d){this.a=d},
eg2:function eg2(d,e){this.a=d
this.b=e},
eg_:function eg_(d){this.a=d},
eg0:function eg0(d){this.a=d},
egg:function egg(d){this.a=d},
egh:function egh(d){this.a=d},
egf:function egf(d){this.a=d},
egi:function egi(d,e){this.a=d
this.b=e},
ege:function ege(d,e){this.a=d
this.b=e},
egj:function egj(d){this.a=d},
egd:function egd(d){this.a=d},
egk:function egk(d){this.a=d},
egc:function egc(d){this.a=d},
egl:function egl(d,e){this.a=d
this.b=e},
egb:function egb(d,e){this.a=d
this.b=e},
egm:function egm(d){this.a=d},
efZ:function efZ(d,e){this.a=d
this.b=e},
fzO(){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o
var $async$fzO=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if($.heg){w=1
break}r=new C.fzP()
t=4
q=x.s
w=7
return B.b(B.iK(B.a([r.$2("NgmyBlackletter",B.a(["UnifrakturCook-Bold.ttf"],q)),r.$2("NgmyOldStandard",B.a(["OldStandard-Regular.ttf","OldStandard-Bold.ttf","OldStandard-Italic.ttf"],q)),r.$2("NgmyAbril",B.a(["AbrilFatface-Regular.ttf"],q))],x.fG),x.H),$async$fzO)
case 7:$.heg=!0
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
return B.i($async$fzO,v)},
bBK(d){return A.GN[B.mw(d)-1]+", "+A.oR[B.bG(d)-1]+" "+B.bQ(d)+", "+B.bA(d)},
hTA(d){var w,v,u,t,s
for(w="",v=0;v<13;++v){u=D.de4[v]
t=u.a
s=u.b
while(d>=t){w+=s
d-=t}}return w},
fYI(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j={},i=x.s,h=B.a([],i)
for(w=0;w<d.length;++w){v=A.a.fD(d[w],B.af("[ \\t]+",!0,!1,!1,!1))
A.d.v(h,new B.a2(v,new C.fy6(),B.U(v).k("a2<1>")))
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
continue}o=new C.fy8(j,h)
n=new C.fy7(s,o,e)
m=p-v
for(l=0;l<m;){k=A.o.an(l+m+1,2)
if(n.$1(k))l=k
else m=k-1}u.push(l===0?"":J.iT(o.$1(l)))
j.a+=l}return u},
fVB(d,e){var w=new C.fcJ()
return A.d.cI(e,0,new C.fcH(w))>=A.d.cI(d,0,new C.fcI(w))},
hbr(d){var w,v,u=new B.aO($.W().r,A.ap,null,null,B.a([],x.v))
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
zf:function zf(d,e,f,g,h,i,j,k,l,m){var _=this
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
cbS:function cbS(d){this.a=d},
cbQ:function cbQ(){},
cbR:function cbR(){},
ta:function ta(d,e){this.a=d
this.b=e},
Be:function Be(d,e){this.a=d
this.b=e},
ld:function ld(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var _=this
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
fzP:function fzP(){},
fy6:function fy6(){},
fy8:function fy8(d,e){this.a=d
this.b=e},
fy7:function fy7(d,e,f){this.a=d
this.b=e
this.c=f},
fcJ:function fcJ(){},
fcK:function fcK(){},
fcH:function fcH(d){this.a=d},
fcI:function fcI(d){this.a=d},
b03:function b03(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cbT:function cbT(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cbU:function cbU(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
cbV:function cbV(d){this.a=d},
bbE:function bbE(d){this.a=d},
bbD:function bbD(d,e){this.b=d
this.a=e},
btf:function btf(d){this.a=d},
b88:function b88(d,e){this.b=d
this.a=e},
bqK:function bqK(d,e){this.b=d
this.a=e},
hm2(d,e){return B.a5(d,!1).c8(B.e9(new C.fLL(e,null),!0,null,x.E))},
fLL:function fLL(d,e){this.a=d
this.b=e},
Vm:function Vm(d,e,f){this.c=d
this.d=e
this.a=f},
aDq:function aDq(){var _=this
_.d=null
_.e=0
_.f=1
_.w=_.r=0.5
_.x=1
_.y=!1
_.c=_.a=null},
ehA:function ehA(){},
ehB:function ehB(d){this.a=d},
ehz:function ehz(d,e){this.a=d
this.b=e},
ehn:function ehn(d){this.a=d},
eho:function eho(d){this.a=d},
ehu:function ehu(d){this.a=d},
ehv:function ehv(d,e){this.a=d
this.b=e},
ehs:function ehs(d){this.a=d},
eht:function eht(d,e,f){this.a=d
this.b=e
this.c=f},
ehp:function ehp(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ehw:function ehw(d,e){this.a=d
this.b=e},
ehr:function ehr(d,e){this.a=d
this.b=e},
ehx:function ehx(d){this.a=d},
ehq:function ehq(d,e){this.a=d
this.b=e},
ehy:function ehy(d,e){this.a=d
this.b=e},
bba:function bba(d,e,f){this.b=d
this.c=e
this.a=f},
i7e(d){return B.a5(d,!1).c8(B.e9(new C.fM0(),!0,null,x.I))},
bza(d,e){var w,v,u,t,s,r,q=B.c2(20,0,!1,x.gR)
for(w=0;w<4;++w)for(v=w*5,u=v+4,t=0;t<5;++t){for(s=0,r=0;r<4;++r)s+=d[v+r]*e[r*5+t]
if(t===4)s+=d[u]
q[v+t]=s}return q},
fX_(d,e,f,g){return B.a([d,0,0,0,e,0,d,0,0,f,0,0,d,0,g,0,0,0,1,0],x.x)},
fM0:function fM0(){},
a_r:function a_r(d){this.a=d},
os:function os(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
aEN:function aEN(d,e,f,g,h,i,j,k,l){var _=this
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
_.aH=_.aP=_.aE=_.az=_.Y=_.b6=_.bh=_.y2=0
_.b3=null
_.b2=0.25
_.be=null
_.bM=0.5
_.aS=1
_.c7=_.bU=_.bj=0
_.cX=_.cU=!1
_.c=_.a=null},
eQW:function eQW(d){this.a=d},
ePO:function ePO(d,e){this.a=d
this.b=e},
eQb:function eQb(d,e){this.a=d
this.b=e},
eQl:function eQl(d){this.a=d},
ePx:function ePx(d){this.a=d},
ePy:function ePy(d){this.a=d},
ePv:function ePv(d){this.a=d},
ePw:function ePw(d){this.a=d},
eQ4:function eQ4(d,e){this.a=d
this.b=e},
eQ5:function eQ5(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eQh:function eQh(d,e,f){this.a=d
this.b=e
this.c=f},
eQg:function eQg(d,e){this.a=d
this.b=e},
eQi:function eQi(d,e){this.a=d
this.b=e},
eQf:function eQf(d,e){this.a=d
this.b=e},
eQk:function eQk(d,e,f){this.a=d
this.b=e
this.c=f},
eQj:function eQj(d,e){this.a=d
this.b=e},
ePn:function ePn(d){this.a=d},
ePo:function ePo(d){this.a=d},
ePp:function ePp(d){this.a=d},
ePm:function ePm(){},
ePq:function ePq(d,e){this.a=d
this.b=e},
ePl:function ePl(d,e){this.a=d
this.b=e},
ePs:function ePs(){},
ePr:function ePr(d,e){this.a=d
this.b=e},
ePk:function ePk(d,e){this.a=d
this.b=e},
ePh:function ePh(d,e){this.a=d
this.b=e},
ePt:function ePt(d){this.a=d},
ePj:function ePj(d,e){this.a=d
this.b=e},
ePu:function ePu(d){this.a=d},
ePi:function ePi(d,e){this.a=d
this.b=e},
eQL:function eQL(d,e){this.a=d
this.b=e},
eQS:function eQS(d){this.a=d},
eQT:function eQT(d,e){this.a=d
this.b=e},
eQU:function eQU(){},
eQM:function eQM(d,e){this.a=d
this.b=e},
eQK:function eQK(d,e){this.a=d
this.b=e},
eQN:function eQN(d,e){this.a=d
this.b=e},
eQJ:function eQJ(d,e){this.a=d
this.b=e},
eQO:function eQO(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eQI:function eQI(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eQP:function eQP(d){this.a=d},
eQQ:function eQQ(d,e){this.a=d
this.b=e},
eQR:function eQR(d){this.a=d},
eQH:function eQH(d){this.a=d},
eQu:function eQu(d){this.a=d},
eQv:function eQv(d){this.a=d},
eQt:function eQt(d,e){this.a=d
this.b=e},
eQo:function eQo(d,e){this.a=d
this.b=e},
eQw:function eQw(d){this.a=d},
eQz:function eQz(d){this.a=d},
eQs:function eQs(d){this.a=d},
eQA:function eQA(d){this.a=d},
eQB:function eQB(d){this.a=d},
eQC:function eQC(d){this.a=d},
eQD:function eQD(d){this.a=d},
eQr:function eQr(d){this.a=d},
eQE:function eQE(d){this.a=d},
eQq:function eQq(d){this.a=d},
eQF:function eQF(d,e){this.a=d
this.b=e},
eQp:function eQp(d,e){this.a=d
this.b=e},
eQG:function eQG(d){this.a=d},
eQx:function eQx(d){this.a=d},
eQy:function eQy(d){this.a=d},
eQ8:function eQ8(d){this.a=d},
eQ7:function eQ7(d){this.a=d},
eQ9:function eQ9(d,e){this.a=d
this.b=e},
eQ6:function eQ6(d,e){this.a=d
this.b=e},
eQa:function eQa(d){this.a=d},
eQ0:function eQ0(d){this.a=d},
eQ_:function eQ_(d){this.a=d},
eQ1:function eQ1(d){this.a=d},
ePZ:function ePZ(d){this.a=d},
eQ2:function eQ2(d,e){this.a=d
this.b=e},
ePY:function ePY(d,e){this.a=d
this.b=e},
ePX:function ePX(d,e){this.a=d
this.b=e},
ePF:function ePF(d){this.a=d},
ePG:function ePG(d){this.a=d},
ePH:function ePH(d){this.a=d},
ePI:function ePI(d){this.a=d},
ePJ:function ePJ(d){this.a=d},
ePK:function ePK(d){this.a=d},
ePL:function ePL(d){this.a=d},
ePM:function ePM(d){this.a=d},
ePN:function ePN(d){this.a=d},
eP0:function eP0(d){this.a=d},
eP1:function eP1(d){this.a=d},
eP2:function eP2(d){this.a=d},
eP3:function eP3(d){this.a=d},
eP4:function eP4(d){this.a=d},
eP_:function eP_(d){this.a=d},
eP5:function eP5(d){this.a=d},
eP6:function eP6(d){this.a=d},
ePz:function ePz(d){this.a=d},
ePA:function ePA(d){this.a=d},
ePB:function ePB(d){this.a=d},
ePC:function ePC(d){this.a=d},
ePD:function ePD(d){this.a=d},
ePa:function ePa(d){this.a=d},
ePb:function ePb(d){this.a=d},
ePc:function ePc(d){this.a=d},
ePd:function ePd(d){this.a=d},
ePe:function ePe(d){this.a=d},
eP9:function eP9(d){this.a=d},
ePf:function ePf(d){this.a=d},
eP8:function eP8(d){this.a=d},
ePg:function ePg(d){this.a=d},
eP7:function eP7(d){this.a=d},
eQ3:function eQ3(d){this.a=d},
ePW:function ePW(d){this.a=d},
ePS:function ePS(d){this.a=d},
ePR:function ePR(d){this.a=d},
ePT:function ePT(d,e){this.a=d
this.b=e},
ePQ:function ePQ(d,e){this.a=d
this.b=e},
ePU:function ePU(d,e){this.a=d
this.b=e},
ePP:function ePP(d,e){this.a=d
this.b=e},
ePV:function ePV(d){this.a=d},
eQe:function eQe(d){this.a=d},
eQd:function eQd(d,e,f){this.a=d
this.b=e
this.c=f},
eQc:function eQc(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eQn:function eQn(d,e){this.a=d
this.b=e},
eQm:function eQm(d,e){this.a=d
this.b=e},
ePE:function ePE(d){this.a=d},
eQV:function eQV(d){this.a=d},
beJ:function beJ(d,e){this.b=d
this.a=e},
i2F(d){var w=A.a.i(d).length
if(w<=40)return 66
if(w<=80)return 54
if(w<=140)return 44
if(w<=220)return 36
return 30},
i2G(d,e){var w,v,u,t,s,r,q,p,o,n=B.af("\\S+",!0,!1,!1,!1).kS(0,d),m=B.B(n,B.a4(n).k("J.E"))
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
v=t.index+t[0].length}n=w.a=n+A.a.b1(d,v)
return n.charCodeAt(0)==0?n:n},
bzL(){var w=$.byT,v=$.Q1
$.Q1=v+1
return w+"_"+v},
i8(d,e,f,g,h,i,j){return C.ep(A.bg,!1,4279310375,A.aD,"",i,24,A.bl,A.a5,"",h,C.bzL(),null,"","",0,!1,"",j,d,i,0,"",0,0,"",D.cm,D.f0,g,e,f)},
nS(d,e,f,g){var w=f*9
return C.i8(D.eJ,d-f/2,e-w/32,f,w/16,g,0)},
hNj(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=4279310375
switch(d.a){case 0:w=B.a([],x.u)
for(v=[0.12,0.26,0.4,0.54,0.68,0.82,0.94],u=e&16777215,t=u|855638016,s=0;s<7;++s){r=v[s]
q=$.byT
p=$.Q1
$.Q1=p+1
w.push(new C.eJ(q+"_"+p,D.f0,0,r,1,0.0016,"",24,A.a5,A.bl,A.aD,k,A.bg,null,D.be,t,t,0,0,!1,"",0,D.cm,0,"","","","","",!1,0))}for(v=[0.18,0.5,0.82],t=u|570425344,s=0;s<3;++s){o=v[s]
q=$.byT
p=$.Q1
$.Q1=p+1
w.push(new C.eJ(q+"_"+p,D.f0,o,0,0.004,1,"",24,A.a5,A.bl,A.aD,k,A.bg,null,D.be,t,t,0,0,!1,"",0,D.cm,0,"","","","","",!1,0))}w.push(C.nS(0.88,0.1,0.5,f&16777215|855638016))
w.push(C.nS(0.1,0.92,0.6,u|704643072))
return w
case 1:w=e&16777215
v=(w|2852126720)>>>0
u=f&16777215
t=(u|2852126720)>>>0
return B.a([C.i8(D.be,0.08,0.08,0.5,0.003,v,0),C.i8(D.be,0.58,0.08,0.004,0.06,v,0),C.i8(D.be,0.58,0.14,0.34,0.003,v,0),C.i8(D.be,0.92,0.14,0.004,0.08,(w|2281701376)>>>0,0),C.i8(D.be,0.08,0.8,0.004,0.14,t,0),C.i8(D.be,0.08,0.94,0.6,0.003,t,0),C.nS(0.58,0.08,0.05,e),C.nS(0.92,0.22,0.05,e),C.nS(0.08,0.8,0.05,f),C.nS(0.68,0.94,0.05,f),C.nS(0.9,0.9,0.55,u|570425344)],x.u)
case 2:w=e&16777215
v=f&16777215
return B.a([C.i8(D.kY,0.62,0.04,0.34,0.2,w|855638016,0.2),C.i8(D.kY,0.02,0.74,0.42,0.24,v|771751936,-0.15),C.i8(D.kY,0.7,0.8,0.22,0.12,w|1140850688,0),C.i8(D.kY,0.05,0.05,0.16,0.09,v|1426063360,0)],x.u)
case 3:w=e&16777215
v=f&16777215
return B.a([C.nS(0.5,0.5,1.5,w|335544320),C.nS(0.5,0.5,1.15,w|402653184),C.nS(0.5,0.5,0.8,v|436207616),C.nS(0.95,0.05,0.4,v|855638016),C.nS(0.05,0.97,0.5,w|704643072)],x.u)
case 4:w=e&16777215
v=f&16777215
return B.a([C.nS(0.85,0.08,0.7,w|1140850688),C.nS(0.1,0.35,0.5,v|855638016),C.nS(0.9,0.62,0.55,v|771751936),C.nS(0.15,0.95,0.8,w|939524096)],x.u)
case 5:w=e&16777215
v=f&16777215
return B.a([C.i8(D.be,-0.1,0.7,1.2,0.06,w|671088640,-0.04),C.i8(D.be,-0.1,0.78,1.2,0.07,v|872415232,0.035),C.i8(D.be,-0.1,0.86,1.2,0.08,w|1073741824,-0.03),C.i8(D.be,-0.1,0.94,1.2,0.1,v|1426063360,0.02),C.nS(0.85,0.12,0.3,v|855638016)],x.u)
case 6:w=e&16777215
return B.a([C.nS(0.5,0.2,0.65,(w|3422552064)>>>0),C.nS(0.5,0.2,0.95,w|855638016),C.i8(D.be,-0.05,0.84,1.1,0.2,2570782564,-0.02),C.i8(D.be,-0.05,0.9,1.1,0.14,3139312459,0.02)],x.u)
case 7:w=e&16777215
return B.a([C.i8(D.jF,-0.1,0.78,0.7,0.2,w|1426063360,0),C.i8(D.jF,0.35,0.74,0.8,0.24,f&16777215|1711276032,0),C.i8(D.jF,0.15,0.86,0.6,0.14,1712265002,0),C.nS(0.82,0.1,0.22,(w|2852126720)>>>0)],x.u)
case 8:w=B.a([],x.u)
for(n=0;n<16;++n){v=D.cRt[n]
u=A.o.F(n,3)===0
t=u?0.035:0.02
q=(n&1)===0?e:f
q=((u?255:170)<<24|q&16777215)>>>0
p=t*9
m=$.byT
l=$.Q1
$.Q1=l+1
w.push(new C.eJ(m+"_"+l,D.f0,v.a-t/2,v.b-p/32,t,p/16,"",24,A.a5,A.bl,A.aD,k,A.bg,null,D.eJ,q,q,0,0,!1,"",0,D.cm,0,"","","","","",!1,0))}w.push(C.nS(0.85,0.12,0.35,f&16777215|570425344))
return w
case 9:w=e&16777215
v=f&16777215|570425344
return B.a([C.i8(D.jF,0.35,-0.1,0.3,0.62,w|855638016,0),C.i8(D.jF,0.05,-0.1,0.3,0.55,v,-0.5),C.i8(D.jF,0.65,-0.1,0.3,0.55,v,0.5),C.nS(0.5,0.04,0.45,w|1711276032)],x.u)
case 10:w=(f&16777215|2281701376)>>>0
return B.a([C.i8(D.be,0.06,0.04,0.88,0.002,e,0),C.i8(D.be,0.06,0.96,0.88,0.002,e,0),C.i8(D.be,0.06,0.04,0.004,0.92,e,0),C.i8(D.be,0.936,0.04,0.004,0.92,e,0),C.i8(D.be,0.09,0.07,0.82,0.001,w,0),C.i8(D.be,0.09,0.93,0.82,0.001,w,0)],x.u)
case 11:w=e&16777215
return B.a([C.i8(D.jG,-0.1,0.05,0.7,0.12,w|855638016,-0.1),C.i8(D.jG,0.45,0.78,0.7,0.1,f&16777215|1073741824,-0.1),C.i8(D.jG,-0.1,0.9,0.6,0.06,w|1426063360,-0.1)],x.u)
case 12:w=f&16777215
v=e&16777215
return B.a([C.i8(D.be,0,0,0.3,0.09,w|1140850688,0),C.i8(D.be,0.7,0.9,0.3,0.1,v|1426063360,0),C.i8(D.be,0.82,0.04,0.12,0.07,w|771751936,0),C.i8(D.be,0.04,0.82,0.18,0.08,v|855638016,0)],x.u)
case 13:w=e&16777215
v=w|1140850688
u=f&16777215|1140850688
return B.a([C.i8(D.eJ,0.62,0.02,0.5,0.16,v,0.6),C.i8(D.eJ,0.78,0.12,0.4,0.12,u,0.9),C.i8(D.eJ,-0.12,0.8,0.5,0.16,u,-0.6),C.i8(D.eJ,-0.05,0.9,0.4,0.12,v,-0.9),C.nS(0.9,0.9,0.3,w|855638016)],x.u)
case 14:w=f&16777215|1711276032
return B.a([C.i8(D.be,0.09,0.12,0.16,0.006,e,0),C.i8(D.be,0.05,0.03,0.9,0.001,w,0),C.i8(D.be,0.05,0.97,0.9,0.001,w,0)],x.u)}},
i_a(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3){var w,v,u,t,s,r,q,p,o,n=4279310375,m=4280640491,l=4280172719
$.byT=j
$.Q1=0
w=A.a.i(a6)
if(w.length===0)w=d.y
v=A.a.i(f)
u=b1==null?d.x:b1
t=new C.fvv()
s=b3?0:d.e
r=b3?0:d.f
q=B.a([],x.u)
if(g!=null&&g.length!==0)q.push(C.ep(A.bg,!1,n,A.aD,"ngmy_quote_background",m,24,A.bl,A.a5,"",1,C.bzL(),g,"","",0,!1,"",0,D.be,l,2,"",0,0,"",D.cm,D.lq,1,0,0))
if(a9)A.d.v(q,C.hNj(d.d,d.r,d.w))
if(a7)q.push(t.$9$align$weight("\u201c",0.08,A.k.D(a8-0.13,0,1),0.84,0.1,200,d.r,e,A.u))
p=B.af("[*~^]",!0,!1,!1,!1)
p=C.i2F(B.aK(w,p,""))
o=A.a.t(w,B.af("[*^]",!0,!1,!1,!1))?0.85:1
q.push(new C.fvu(a8,h,k,e,b2,i).$3(w,p*b0*o,u))
if(v.length!==0)q.push(t.$10$align$style$weight("\u2014 "+v,0.09,A.k.D(a8+0.39,0,0.9),0.82,0.05,30,(u&16777215|3707764736)>>>0,e,A.cF,A.a5))
p=u&16777215
q.push(t.$8$weight("NGMY",0.3,0.925,0.4,0.028,22,(p|3003121664)>>>0,A.u))
q.push(t.$8$weight("New Global Movement for Youth",0.1,0.96,0.8,0.025,14,(p|2566914048)>>>0,A.a5))
if(a0!=null&&a0.length!==0)q.push(C.ep(A.bg,!1,n,A.aD,"ngmy_quote_logo",m,24,A.bl,A.a5,a1,a3*9/16,C.bzL(),a0,"","",0,!1,a2,0,D.be,l,2,"",0,0,"",D.cm,D.lq,a3,a4,a5))
return C.ro(s,r,0,0,q,j+"_slide",D.q5,"","","",D.dd)},
rn:function rn(d,e){this.a=d
this.b=e},
m1:function m1(d,e,f,g,h,i,j,k,l,m){var _=this
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
fvv:function fvv(){},
fvu:function fvu(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
hDl(d){var w,v,u,t,s
if(!x.f.b(d))return null
w=J.a6(d)
v=B.bi(B.t(w.h(d,"at")))
u=w.h(d,"outline")
t=B.t(u==null?"":u)
if(v==null||t.length===0)return null
u=x.j
if(u.b(w.h(d,"extras"))){u=J.b6(u.a(w.h(d,"extras")),new C.cde(),x.N)
s=B.B(u,u.$ti.k("ak.E"))}else s=B.a([],x.s)
u=v.bS()
w=w.h(d,"request")
return new C.zh(u,t,s,B.t(w==null?"":w))},
fDa(){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$fDa=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if($.heD){w=1
break}$.heD=!0
t=4
w=7
return B.b(B.aA(),$async$fDa)
case 7:r=e
q=B.aU(J.q(r.a,"ngmy_slides_ai_history_v1"))
if(q==null||q.length===0){w=1
break}p=A.R.aG(0,q,null)
if(!x.f.b(p)){w=1
break}for(k=J.jv(p),k=k.gaf(k),j=x.j,i=x.o;k.C();){o=k.gT(k)
n=B.a([],i)
if(j.b(o.b))for(h=J.aV(j.a(o.b));h.C();){m=h.gT(h)
l=C.hDl(m)
if(l!=null)J.ch(n,l)}$.Co.cg(0,B.t(o.a),new C.fDb(n))}C.fWG()
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
return B.i($async$fDa,v)},
fWG(){var w,v=new B.S(Date.now(),0,!1).bQ(-12e8)
for(w=new B.dt($.Co,$.Co.r,$.Co.e);w.C();)J.no(w.d,new C.fjQ(v))
$.Co.bn($.Co,new C.fjR())},
aNo(){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$aNo=B.e(function(d,a0){if(d===1){t.push(a0)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.aA(),$async$aNo)
case 6:s=a0
m=x.N
l=x.z
r=B.T(m,l)
for(k=new B.cK($.Co,B.a4($.Co).k("cK<1,2>")).gaf(0),j=x.d;k.C();){i=k.d
i.toString
q=i
i=q.a
p=B.a([],j)
for(h=J.aV(q.b);h.C();){o=h.gT(h)
g=o
J.ch(p,B.F(["at",g.a.a6().ac(),"outline",g.b,"extras",g.c,"request",g.d],m,l))}J.aF(r,i,p)}n=r
w=7
return B.b(s.au("String","ngmy_slides_ai_history_v1",A.R.ao(n,null)),$async$aNo)
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
return B.i($async$aNo,v)},
i3g(d,e,f,g){var w,v,u
if(d.length===0||A.a.i(f).length===0)return
C.fWG()
w=$.Co.cg(0,d,new C.fDd())
v=Date.now()
u=B.B(e,B.a4(e).k("co.E"))
J.pr(w,0,new C.zh(new B.S(v,0,!1),f,u,g))
C.aNo()},
i3d(d){var w,v=$.Co.h(0,d)
if(v==null||J.cm(v))return
w=J.cE(v)
w.cC(v,0)
if(w.gam(v))$.Co.W(0,d)
C.aNo()},
zh:function zh(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cde:function cde(){},
fDb:function fDb(d){this.a=d},
fjQ:function fjQ(d){this.a=d},
fjR:function fjR(){},
fDd:function fDd(){},
i3i(d){return A.d.dL(D.vV,new C.fDg(d),new C.fDh())},
hDj(d){var w
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
hDi(d){var w
switch(d.a){case 0:w=D.aku
break
case 1:w=A.yb
break
case 2:w=A.alA
break
case 3:w=I.ak7
break
case 4:w=A.akZ
break
case 5:w=A.lO
break
default:w=null}return w},
hQh(d){var w,v,u,t=A.a.i(d).toLowerCase()
if(t.length===0)return null
for(w=0;w<109;++w){v=D.Pz[w]
if(v.toLowerCase()===t)return v}for(w=0;w<109;++w){v=D.Pz[w]
if(!B.cX(v.toLowerCase(),t,0))u=B.cX(t,v.toLowerCase(),0)
else u=!0
if(u)return v}return null},
hDk(d){var w,v,u,t,s,r,q,p,o=B.a([],x.ez)
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
i3e(d,e,f,g,h){var w=new B.K(D.vV,new C.fD9(),x.eC).aI(0,", "),v=""+d,u=C.hk0(h),t=F.fwU(h),s=C.hge(g),r=e.t(0,D.HI)?'- New slides get an "emoji".\n':"",q=e.t(0,D.HJ)?'- New slides get an "icon3d" from: '+A.d.aI(D.Pz,", ")+".\n":"",p=e.t(0,D.Cz)?'- New content slides get an "image_query" (2-3 English words).\n':""
return"You edit an existing presentation. Here it is as JSON:\n"+f+"\n\nThe presenter is looking at slide "+v+'.\n\nWHAT THEY WANT CHANGED (may be informal):\n"""'+h+'"""\n\nRules:\n- Do exactly what they ask: add, remove, move, shorten, lengthen or rewrite slides, change the tone, the language or the style ('+w+'). "This slide" / "here" means slide '+v+". New slides go where they say (or right after slide "+v+').\n- Keep every slide they did not ask about exactly as it is.\n- Same limits as before: titles max 7 words, 3 to 5 bullets of max 12 words, never invent prices, dates or statistics.\n- LANGUAGE: keep the presentation\'s current language unless they ask for another one; if they do, translate EVERY slide. JSON keys and the "kind", "style", "icon3d" and "image_query" values stay in English.\n- TRANSLATING OR REWORDING: change only the words. Keep "style", "kind", "emoji", "icon3d", "image_query", "picture" and the frame/ring values exactly as they are, with the same number of slides and bullets.\n- VOICE: write the way a real, friendly person talks and writes to someone they respect. Short plain sentences. Everyday words that people really use today. No corporate or robotic phrasing ("leverage", "synergy", "empower the ecosystem", "in today\'s dynamic landscape"), no made-up or rare words, no stacked jargon, no lecture tone. Explain the Civic registry, the AI, and any other topic the way you would explain it to a neighbour. If the language is Swahili, use the Swahili people speak and write every day in Kenya and Tanzania: real common words, natural word order, and never an English word forced into Swahili grammar or an invented Swahili word. Check that each word is one an ordinary speaker would understand.\n'+u+"\n"+t+'\n- Keep "logo_frame", "logo_ring", "photo_frame" and "photo_ring" unless they ask to change how the logo or pictures look.\n- PICTURE LOOK: "logo_frame" and "photo_frame" are one of: circle, rounded, triangle, hexagon, diamond, arch, or "" (as is). "logo_ring" and "photo_ring" are one of: gold, platinum, glow, rainbow, double, neon, framed, rosegold, jewels, aurora, or "" (none). Follow what the request says (e.g. "my picture in a circle with a gold ring"); if it says nothing, choose what suits the look (luxury \u2192 gold, neon/night \u2192 neon, clean \u2192 rounded with no ring).\n- BIO LINK: if they ask to put their bio link / link page / socials / "my links" in the presentation, add ONE slide with kind "bio" (title like "Connect with me", a one-line inviting subtitle) \u2014 usually just before the closing slide, or where they say. Their real Bio page (with clickable links) is shown on a phone on that slide.\n'+s+"\n"+r+q+p+'- Reply with the WHOLE presentation as JSON only, no markdown, same shape:\n{"title":"...","style":"...","logo_frame":"","logo_ring":"","photo_frame":"","photo_ring":"","slides":[{"kind":"...","title":"...","subtitle":"...","bullets":[],"notes":"...","emoji":"","icon3d":"","image_query":""}]}\n'},
i3f(d,e,f,g,h,i){var w,v,u,t,s='- "emoji": ONE emoji that fits the slide (e.g. \ud83c\udf89 \ud83d\ude80 \ud83c\udf3f \ud83d\udca1).\n',r=f?"- A document is attached (read it all). Rewrite its content as the slides in the same language: keep its facts, names, numbers, dates and the order of its sections, and never invent facts it does not contain.\n":"",q=new B.K(D.vV,new C.fDc(),x.eC).aI(0,", "),p=new B.fd("")
if(e.t(0,D.HI)){p.a=s
w=s}else w=""
if(e.t(0,D.HJ))w=p.a=w+('- "icon3d": ONE name copied exactly from this list that fits the slide: '+A.d.aI(D.Pz,", ")+".\n")
if(e.t(0,D.Cz))p.a=w+'- "image_query": 2-3 simple English words for a real photo that fits the slide (e.g. "city skyline", "students classroom").\n'
w=C.hk0(d)
v=F.fwU(d)
u=C.hge(g)
t=i==="auto"?"pick the best of: "+q+" (match the mood they describe: nature, vibe, celebration, colorful, professional...)":'use "'+i+'"'
return'You design presentation slides. Write a presentation from the user\'s request.\n\nUSER REQUEST (spoken, may be informal):\n"""'+d+'"""\n\nRules:\n'+r+"- Exactly "+h+' slides.\n- Slide 1 has kind "title". The last slide has kind "closing" (thank-you / call to action).\n- Middle slides mostly kind "bullets" (3 to 5 short bullets, max 12 words each). You may use one "section" divider and one "quote" slide when it fits.\n- Titles are short and punchy (max 7 words). Use the user\'s own names, facts and details; never invent prices, dates or statistics they did not give.\n- "notes": 1-2 sentences the presenter can say.\n- LANGUAGE: if the request names a language (e.g. "in Swahili", "en fran\xe7ais", "en espa\xf1ol", "in Arabic"), write EVERY title, subtitle, bullet and note in that language, with correct spelling and accents. If no language is named, write in the language the request itself is written in. Keep the JSON keys and the "kind", "style", "icon3d" and "image_query" values in English.\n- VOICE: write the way a real, friendly person talks and writes to someone they respect. Short plain sentences. Everyday words that people really use today. No corporate or robotic phrasing ("leverage", "synergy", "empower the ecosystem", "in today\'s dynamic landscape"), no made-up or rare words, no stacked jargon, no lecture tone. Explain the Civic registry, the AI, and any other topic the way you would explain it to a neighbour. If the language is Swahili, use the Swahili people speak and write every day in Kenya and Tanzania: real common words, natural word order, and never an English word forced into Swahili grammar or an invented Swahili word. Check that each word is one an ordinary speaker would understand.\n'+w+"\n"+v+'\n- PICTURE LOOK: "logo_frame" and "photo_frame" are one of: circle, rounded, triangle, hexagon, diamond, arch, or "" (as is). "logo_ring" and "photo_ring" are one of: gold, platinum, glow, rainbow, double, neon, framed, rosegold, jewels, aurora, or "" (none). Follow what the request says (e.g. "my picture in a circle with a gold ring"); if it says nothing, choose what suits the look (luxury \u2192 gold, neon/night \u2192 neon, clean \u2192 rounded with no ring).\n- BIO LINK: if they ask to put their bio link / link page / socials / "my links" in the presentation, add ONE slide with kind "bio" (title like "Connect with me", a one-line inviting subtitle) \u2014 usually just before the closing slide, or where they say. Their real Bio page (with clickable links) is shown on a phone on that slide.\n'+u+'\n- "style": '+t+".\n"+p.u(0)+'- Reply with JSON only, no markdown, in this shape:\n{"title":"...","style":"...","logo_frame":"","logo_ring":"","photo_frame":"","photo_ring":"","slides":[{"kind":"title","title":"...","subtitle":"...","bullets":[],"notes":"...","emoji":"","icon3d":"","image_query":""}]}\n'},
agI(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=null,a2="bullets",a3=A.a.i(a6),a4=J.CN(a3,"{"),a5=J.fP0(a3,"}")
if(a4<0||a5<=a4)return a1
a3=J.L0(a3,a4,a5+1)
try{w=A.R.aG(0,a3,a1)
q=x.f
if(!q.b(w))return a1
v=J.q(w,"slides")
p=x.j
if(!p.b(v)||J.cm(v))return a1
u=B.a([],x.aC)
for(o=J.aV(v),n=x.s,m=x.N;o.C();){t=o.gT(o)
if(!q.b(t))continue
if(p.b(J.q(t,a2))){l=J.b6(p.a(J.q(t,a2)),new C.fB9(),m).c_(0,new C.fBa())
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
f=C.hQh(B.t(f==null?"":f))
if(f==null)f=""
e=J.q(t,"image_query")
if(e==null)e=J.q(t,"imageQuery")
e=A.a.i(B.t(e==null?"":e))
d=J.q(t,"picture")
d=B.c7(B.t(d==null?0:d),a1)
if(d==null)d=0
J.ch(u,new C.a7C(l.toLowerCase(),j,i,s,h,g,f,e,d))}if(J.ad(u)===0)return a1
q=J.q(w,"style")
r=A.a.i(B.t(q==null?a7:q)).toLowerCase()
q=J.q(w,"title")
q=A.a.i(B.t(q==null?J.fo(u).b:q))
p=A.d.b5(D.vV,new C.fBb(r))?r:a7
o=C.fj4(J.q(w,"logo_frame"),D.BY)
n=C.fj4(J.q(w,"logo_ring"),D.BT)
m=C.fj4(J.q(w,"photo_frame"),D.BY)
l=C.fj4(J.q(w,"photo_ring"),D.BT)
return new C.aqx(q,p,u,o,n,m,l)}catch(a0){return a1}},
a1a(d,e){return(A.o.D(e,0,255)<<24|d&16777215)>>>0},
hj8(f9,g0,g1,g2,g3,g4,g5,g6,g7,g8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4=null,e5="title",e6="orb1",e7="drift",e8="orb2",e9="logo",f0="hero",f1="photo",f2="float3d",f3="bar",f4="pulse",f5="sub",f6=g2.t(0,D.CA),f7=f6?C.hJZ():e4,f8=f7==null
if(f8)w=e4
else{v=new B.eL()
v.dB(f7.w+1)
u=f7.a
t=B.bn(u.b,!0,x.dL)
A.d.fu(t,v)
s=u.c
s=new C.nG("luxe",u.a,A.lO,t,u.e,u.f,B.a([s,u.d,s],x.t),D.dd)
w=s}if(w==null)w=C.i3i(f9.b)
r=g2.t(0,D.a4t)||f6
q=g2.t(0,D.HI)
p=g2.t(0,D.Rv)
o=new C.fvz()
n=B.a([],x.g)
m=new C.fvC(o,w,r)
l=new C.fvB(o,r)
k=new C.fvA(o,r)
j=(g3==null?"":g3).length!==0
u=f9.c
for(s=w.w,f8=!f8,i=g7==null,h=g6==null,g=f9.f,f=f9.r,e=g5==null,d=g4==null,a0=f9.d,a1=f9.e,a2=w.f,a3=w.d,a4=w.r,a5=x.u,a6=J.a6(g0),a7=!A.d.b5(u,new C.fvy(g8)),a8=g1==null,a9=x.s,b0=0,b1=0;b1<u.length;b1=b6){b2=u[b1]
b3=a3[A.o.F(b1,a3.length)]
b4=A.o.F(b1,3)
b5=a4[b4]
b6=b1+1
b7=a4[b6%3]
b8=A.o.F(b1,5)
b9=D.cT0[b8]
c0=D.cRW[b8]
c1=B.a([],a5)
c2=a6.h(g0,b1)
c3=c2==null
c4=c3?e4:c2.a
c5=c3?e4:c2.b
c3=b2.x
c6=c3>0&&c3<=g8.length
if(c6)c5=g8[c3-1]
else if(g8.length!==0&&a7&&!D.eKc.t(0,b2.a)){c7=b0+1
c5=g8[A.o.F(b0,g8.length)]
b0=c7}c8=q?b2.f:""
c3=c5==null
c9=c3?c4:c5
if(c6)d0=c5
else d0=c4==null?c5:c4
d1=!c6&&c4!=null
if(p)c1.push(l.$7$key(D.eJ,0.62-b8*0.36,-0.55+b4*0.18,1.15,2,(A.o.D(31,0,255)<<24|b5&16777215)>>>0,"pano"))
A:{d2=b2.a
if("title"===d2){c1.push(l.$8$fx$key(D.eJ,0.7,-0.25,0.46,0.82,(A.o.D(51,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.eJ,-0.08,0.68,0.24,0.43,(A.o.D(46,0,255)<<24|b7&16777215)>>>0,e7,e8))
if(j){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.41,0.04,0.18,0.27,D.mC,450,e9))}else if(d0!=null){b4=d1?f0:f1
c1.push(k.$9$anim$delay$fx$key(d0,0.42,0.04,0.16,0.28,c0,500,d1?f2:"",b4))}else if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,0.4,0.04,0.2,0.24,64,A.L,D.q6,500,f2,f0))
c1.push(l.$8$fx$key(D.be,0.4,0.66,0.2,0.012,b5,f4,f3))
c1.push(m.$10$align$anim$key$weight(b2.b,0.08,0.33,0.84,0.3,54,A.L,b9,e5,A.u))
c1.push(m.$10$align$color$delay$key(b2.c,0.12,0.7,0.76,0.14,24,A.L,a2,300,f5))
d3=D.Rs
break A}if("section"===d2){c1.push(l.$8$fx$key(D.eJ,0.64,0.46,0.42,0.75,(A.o.D(42,0,255)<<24|b5&16777215)>>>0,e7,e6))
if(d0!=null){b4=!c3&&!d1?f1:f0
c1.push(k.$8$anim$fx$key(d0,0.7,0.2,0.24,0.44,c0,d1?f2:"",b4))}else c1.push(l.$9$fx$key$rotation(D.kY,0.78,0.1,0.18,0.32,(A.o.D(64,0,255)<<24|b7&16777215)>>>0,e7,e8,0.3))
c1.push(l.$8$fx$key(D.be,0.08,0.6,0.14,0.014,b5,f4,f3))
b4=b2.b
c1.push(m.$9$anim$key$weight(c8.length===0?b4:c8+"  "+b4,0.08,0.34,0.62,0.24,46,b9,e5,A.u))
c1.push(m.$9$color$delay$key(b2.c,0.08,0.64,0.6,0.14,22,a2,250,f5))
d3=D.Cx
break A}if("quote"===d2){b4=b5&16777215
c1.push(l.$8$fx$key(D.eJ,-0.12,-0.2,0.36,0.64,(A.o.D(36,0,255)<<24|b4)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.eJ,0.82,0.66,0.26,0.46,(A.o.D(38,0,255)<<24|b7&16777215)>>>0,e7,e8))
c1.push(m.$11$anim$color$fx$key$weight("\u201c",0.06,0.02,0.2,0.36,140,D.mC,(A.o.D(204,0,255)<<24|b4)>>>0,f4,"quote",A.u))
c1.push(m.$11$align$anim$key$style$weight(b2.b,0.12,0.3,0.76,0.34,36,A.L,b9,e5,A.cF,A.P))
b4=b2.c
c1.push(m.$10$align$color$delay$key(b4.length===0?"":"\u2014 "+b4,0.12,0.68,0.76,0.12,22,A.L,a2,300,f5))
if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,j?0.72:0.82,0.06,0.12,0.2,52,A.L,D.q6,500,f2,f0))
d3=D.mB
break A}if("bio"===d2)b4=(a8?"":g1).length!==0
else b4=!1
if(b4){c1.push(l.$8$fx$key(D.eJ,0.58,0.04,0.44,0.8,(A.o.D(42,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.be,0.08,0.62,0.14,0.014,b5,f4,f3))
b4=b2.b
c1.push(m.$9$anim$key$weight(c8.length===0?b4:c8+"  "+b4,0.07,0.3,0.52,0.28,46,b9,e5,A.u))
c1.push(m.$9$color$delay$key(b2.c,0.07,0.66,0.5,0.16,22,a2,250,f5))
b4=o.$0()
g1.toString
b8=r?D.ud:D.cm
c1.push(new C.eJ(b4,D.a4r,0.64,0.05,0.27,0.9,g1,24,A.a5,A.bl,A.aD,4279310375,A.bg,e4,D.be,4280640491,4280172719,2,0,!1,"",0,b8,r?350:0,"bio","","","","",!1,0))
d3=D.mB
break A}if("closing"===d2){c1.push(l.$8$fx$key(D.eJ,-0.15,-0.3,0.5,0.9,(A.o.D(46,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.eJ,0.78,0.62,0.3,0.54,(A.o.D(51,0,255)<<24|b7&16777215)>>>0,e7,e8))
if(j){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.41,0.05,0.18,0.27,D.mC,400,e9))}else if(d0!=null){b4=d1?f0:f1
c1.push(k.$9$anim$delay$fx$key(d0,0.42,0.05,0.16,0.28,c0,450,d1?f2:"",b4))}else if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,0.4,0.05,0.2,0.24,64,A.L,D.q6,450,f2,f0))
c1.push(l.$8$fx$key(D.be,0.42,0.61,0.16,0.012,b5,f4,f3))
c1.push(m.$10$align$anim$key$weight(b2.b,0.1,0.34,0.8,0.26,52,A.L,b9,e5,A.u))
c1.push(m.$10$align$color$delay$key(b2.c,0.14,0.65,0.72,0.16,24,A.L,a2,300,f5))
d3=D.Rs
break A}d4=b2.d
if(d4.length===0&&b2.c.length!==0)d4=B.a([b2.c],a9)
d5=c9!=null
d6=(b1&1)===1&&d5
d7=d6?0.4:0.07
b4=d6?-0.1:0.8
c1.push(l.$8$fx$key(D.eJ,b4,0.52,0.3,0.54,(A.o.D(36,0,255)<<24|b7&16777215)>>>0,e7,e8))
b4=d6?0.86:-0.12
c1.push(l.$8$fx$key(D.eJ,b4,-0.18,0.26,0.46,(A.o.D(30,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$7$key(D.be,d6?0.988:0,0,0.012,1,b5,"rail"))
b4=b2.b
b4=c8.length===0?b4:c8+"  "+b4
c1.push(m.$9$anim$key$weight(b4,d7,0.08,d5?0.53:0.86,0.16,38,b9,e5,A.u))
c1.push(l.$8$fx$key(D.be,d7,0.25,0.12,0.012,b5,f4,f3))
b4=A.d.aI(d4,"\n")
b8=d5?0.53:0.7
c1.push(m.$11$anim$bullets$color$delay$key(b4,d7,0.31,b8,0.6,d4.length>4?21:24,D.HG,!0,a2,250,f5))
if(d5){d8=!c3
d9=d8?0.29:0.24
if(d6)e0=0.06
else e0=d8?0.67:0.7
b4=d8?0.22:0.26
b8=d8?0.56:0.44
c3=d8?f1:f0
c1.push(k.$9$anim$delay$fx$key(c9,e0,b4,d9,b8,c0,400,d8?"":f2,c3))}d3=D.mB}if(j&&d2!=="title"&&d2!=="closing"){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.885,0.035,0.085,0.13,D.dd,200,e9))}for(b4=c1.length,e1=0;e1<b4;++e1){e2=c1[e1]
b8=e2.fx
if(b8==="logo"){e2.go=d?a0:g4
e2.id=e?a1:g5}else if(b8==="photo"){e2.go=h?g:g6
e2.id=i?f:g7}}if(f8)C.hLC(c1,b1,o,f7)
b4=o.$0()
if(f8){b8=f7.r
b8=b8[A.o.F(b1,b8.length)]}else b8=r?D.dgl[A.o.F(b1,6)]:s
n.push(new C.lD(b4,b2.b,b2.e,d3,b3.a,b3.b,b8,0,"",0,c1))}e3=A.a.i(f9.a)
if(e3.length===0)e3="AI Presentation"
f8=o.$0()
return C.Br(e4,e4,e4,e4,D.Cw,5,!1,e4,e4,e4,e4,e4,f8,e4,!1,e4,e3.length>60?A.a.ap(e3,0,60):e3,e4,e4,n,"office_blue",e4,!1,e4)},
fxX(d,e){var w=0,v=B.j(x.gI),u,t,s,r,q,p,o,n,m
var $async$fxX=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:o=e.t(0,D.Cz)
n=e.t(0,D.HJ)
if(!o&&!n){u=D.a3q
w=1
break}t=B.a([],x.d5)
for(s=d.c,r=0;r<s.length;++r)t.push(new C.fy_(o,s[r],n,$.hP2,r).$0())
s=B.T(x.S,x.aH)
m=J
w=3
return B.b(B.iK(t,x.e),$async$fxX)
case 3:q=m.aV(g)
case 4:if(!q.C()){w=5
break}p=q.gT(q)
s.n(0,p.a,p.b)
w=4
break
case 5:u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fxX,v)},
fwX(d,e,f,g,h,i,j,k,l){var w=0,v=B.j(x.I),u,t,s
var $async$fwX=B.e(function(m,n){if(m===1)return B.f(n,v)
for(;;)switch(w){case 0:h.$1("Writing your "+j+" slides\u2026")
t=i.length
t=C.i3f(d,e,k.length!==0,t,j,l)
s=C
w=3
return B.b(C.aMK(t,"The AI could not write the slides. Try describing it again.",l==="auto"?"colorful":l,k),$async$fwX)
case 3:u=s.aN4(n,e,h,f,g,i)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fwX,v)},
bBo(d,e,f,g,h,i,j,k){var w=0,v=B.j(x.I),u,t,s,r,q,p,o
var $async$bBo=B.e(function(l,m){if(l===1)return B.f(m,v)
for(;;)switch(w){case 0:if(e.length!==0){t=B.aX(x.N)
for(s=B.ed(f,f.r,B.a4(f).c),r=s.$ti.c;s.C();){q=s.d
t.J(0,(q==null?r.a(q):q).b)}C.i3g(e,t,i,k)}if(h!=null)h.$1("Making your changes\u2026")
p=C.agI(i,"colorful")
t=C.i3e(d,f,i,j.length,k)
s=p==null?null:p.b
o=C
w=3
return B.b(C.aMK(t,"The AI could not make that change. Try saying it another way.",s==null?"colorful":s,A.hn),$async$bBo)
case 3:u=o.aN4(m,f,h,g,D.dUx,j)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bBo,v)},
aMK(d,e,f,g){var w=0,v=B.j(x.dO),u,t,s,r,q,p,o,n
var $async$aMK=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:w=3
return B.b(B.vc(null,""),$async$aMK)
case 3:n=i
if(A.a.i(n).length===0)throw B.V("AI is not set up yet. AI is not available right now. Please try again later.")
t=B.n2(n)
s=null,r=0
case 4:if(!(r<2)){w=6
break}w=7
return B.b(B.qK(t,d,g,null),$async$aMK)
case 7:q=i
p=q.b
if(p!=null){o=C.agI(p,f)
if(o!=null){u=o
w=1
break}}else s=q.a
case 5:++r
w=4
break
case 6:throw B.V(s!=null&&B.KH(s)?"No internet connection \u2014 try again when you are online.":e)
case 1:return B.h(u,v)}})
return B.i($async$aMK,v)},
aN4(d,e,f,g,h,i){var w=0,v=B.j(x.I),u,t,s,r,q,p,o,n,m,l
var $async$aN4=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:w=e.t(0,D.Cz)||e.t(0,D.HJ)?3:5
break
case 3:if(f!=null)f.$1("Adding pictures and 3D art\u2026")
if(i.length===0)t=e
else{t=B.db(e,x.Q)
t.W(0,D.Cz)}w=6
return B.b(C.fxX(d,t),$async$aN4)
case 6:s=k
w=4
break
case 5:s=D.a3q
case 4:t=d.c
w=A.d.b5(t,new C.fcE())?7:9
break
case 7:r=$.hkT
r=r==null?null:r.$0()
w=10
return B.b(x.gc.b(r)?r:B.dP(r,x.aP),$async$aN4)
case 10:q=k
p=q!=null?A.R.ao(q.ag(),null):null
w=8
break
case 9:p=null
case 8:r=h.a
o=h.b
n=h.c
m=h.d
l=C.hj8(d,s,p,e,g,r,o,n,m,i)
if(r==null)r=d.d
if(o==null)o=d.e
if(n==null)n=d.f
if(m==null)m=d.r
l.CW=C.hDk(new C.aqx(d.a,d.b,t,r,o,n,m))
m=l.r
n=B.U(m).k("K<1,n>")
t=B.B(new B.K(m,new C.fcF(),n),n.k("ak.E"))
l.cx=t
t=B.a4(e).k("jM<co.E,n>")
t=B.B(new B.jM(e,new C.fcG(),t),t.k("J.E"))
l.cy=t
l.ay=e.t(0,D.Rv)
u=l
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aN4,v)},
fZq(d){var w,v,u,t=d.cy
if(t==null)t=A.T
w=B.aX(x.Q)
for(v=0;v<6;++v){u=D.a2h[v]
if(A.d.t(t,u.b))w.J(0,u)}return w},
i7j(d){return B.bR(A.K,null,new C.fMc(),d,!0,!0,!0,null,!1,!1,x.I)},
hKB(d,e){var w,v=e.toLowerCase()
if(A.a.cb(v,".png"))w="image/png"
else w=A.a.cb(v,".webp")?"image/webp":"image/jpeg"
return"data:"+w+";base64,"+A.cT.gcw().aJ(d)},
i7i(d,e,f){return B.bR(A.K,null,new C.fMb(f,e),d,!0,!0,!0,null,!1,!1,x.I)},
fZr(d){var w,v,u,t,s,r,q,p
for(w=d.r,v=w.length,u=0;u<v;++u)for(t=w[u].z,s=t.length,r=0;r<s;++r){q=t[r]
if(q.fx==="logo"){p=q.at
p=(p==null?"":p).length!==0}else p=!1
if(p)return q.at}return null},
fZs(d){var w,v,u,t,s,r,q,p,o=B.a([],x.s)
for(w=d.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u)for(t=w[u].z,s=t.length,r=0;r<t.length;t.length===s||(0,B.L)(t),++r){q=t[r]
p=q.at
if(p==null)p=""
if(q.fx==="photo"&&p.length!==0&&!A.d.t(o,p))o.push(p)}return o},
fj4(d,e){var w=A.a.i(B.t(d==null?"":d)).toLowerCase()
return A.d.b5(e,new C.fj5(w))?w:""},
hge(d){var w,v
if(d<=0)return""
w=""+d
v=d===1?"":"s"
return"- THEIR PICTURES: they uploaded "+w+" picture"+v+" of their own, numbered 1 to "+w+' in the order they picked them. Put "picture": <number> on each slide where one belongs, following exactly what they say (e.g. "picture 2 on the team slide", "first picture on the title"). If they don\'t say, spread them over the content slides in order. Use 0 where no picture is wanted.'},
hkR(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0="colorful",a1=a4.CW,a2=C.agI(a1==null?"":a1,a0),a3=C.agI(a5,a0)
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
for(v=t.length,r=a4.r,q=B.U(r).k("a2<1>"),p=0;p<t.length;t.length===v||(0,B.L)(t),++p){o=B.r9(new B.a2(r,new C.fDi(t[p]),q))
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
g=B.B(new B.a2(k,new C.fDj(),v),r)
A.d.b0(g,new C.fDk())
if(g.length===0)continue
f=new C.fDl(g)
e=s[n]
for(k=e.z,j=k.length,p=0;p<k.length;k.length===j||(0,B.L)(k),++p){d=k[p]
i=d.r
if(i.length!==0)d.r=f.$1(i)}e.c=f.$1(e.c)}if(A.a.i(a4.b)===A.a.i(a2.a)&&A.a.i(a3.a).length!==0)a4.b=A.a.i(a3.a)
a4.CW=a5
return!0},
i3z(d){var w=d.toLowerCase(),v=B.af("\\b(fit|fits|fitting|overflow|overflowing|reframe|inside|too big|out of the|going under|under the slide|below the slide)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.aFt
v=B.af("\\b(smaller|shrink|reduce|decrease|make .{0,20}small|less big)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.dWs
v=B.af("\\b(bigger|larger|increase|enlarge|grow|make .{0,20}big)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.dWt
return null},
hfQ(d,e,f,g){var w,v,u,t=d.e,s=d.f,r=Math.max(1,A.k.bt(t*f/(e*0.55)))
for(t=d.r.split("\n"),w=t.length,v=0,u=0;u<w;++u)v+=Math.max(1,A.k.dw(t[u].length/r))
return v*e*1.3<=s*g+0.5&&d.d+d.f<=1.001},
i3j(a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a0.r,d=e.length
if(d===0)return!1
e=a3?e:B.a([e[A.o.D(a1,0,d-1)]],x.g)
w=a0.d===D.o7
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
if(C.hfQ(n,j,v,u))n.w=j
break
case 2:i=m
h=0
for(;;){g=!1
if(!C.hfQ(n,i,v,u))if(n.w>10){f=h+1
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
i3h(d,e){var w,v,u,t,s,r,q,p,o=d.b,n=C.agI(o,"colorful")
if(n==null)throw B.V("That earlier version could not be read.")
w=B.aX(x.Q)
for(v=d.c,u=v.length,t=0;t<v.length;v.length===u||(0,B.L)(v),++t){s=v[t]
for(r=0;r<6;++r){q=D.a2h[r]
if(q.b===s)w.J(0,q)}}v=C.fZr(e)
u=C.fZs(e)
p=C.hj8(n,D.a3q,null,w,v,n.d,n.e,n.f,n.r,u)
p.CW=o
o=p.r
u=B.U(o).k("K<1,n>")
o=B.B(new B.K(o,new C.fDe(),u),u.k("ak.E"))
p.cx=o
o=w.$ti.k("jM<co.E,n>")
o=B.B(new B.jM(w,new C.fDf(),o),o.k("J.E"))
p.cy=o
p.ay=w.t(0,D.Rv)
return p},
i75(d,e,f){return B.bR(A.K,null,new C.fLp(f,e),d,!0,!0,!0,null,!1,!1,x.I)},
hJZ(){var w,v,u,t=1000*Date.now()&2147483647,s=new B.eL()
s.dB(t)
w=D.cx9[s.aC(10)]
v=new C.ecv(s)
u=x.N
return new C.ecu(w,s.aC(4),J.fo(v.$1$2(D.cXm,1,x.ff)),w.r[s.aC(3)],v.$1$2(D.dc2,2+s.aC(2),u),v.$1$2(D.d5r,2,u),v.$1$2(D.deU,4,x.fP),t)},
hLC(a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g="lux_frame",f="goldframe",e="lux_emblem",d=a5.a,a0=d.c,a1=new B.eL()
a1.dB(a5.w+a3*13)
w=new C.f97(a4)
v=new C.f99(a4,d)
u=new C.f98(w,a5,a0,d)
for(t=a2.length,s=d.f,r=d.d,q=0;q<a2.length;a2.length===t||(0,B.L)(a2),++q){p=a2[q]
if(p.b===D.cQ){o=p.fx
if(o==="title"){p.Q=r
p.fy="shimmer@"+A.a.aT(A.o.fS(r,16),8,"0").toUpperCase()}else if(o==="sub"||o==="body")p.Q=s}if(p.fx==="bar")p.fy="shimmer@"+A.a.aT(A.o.fS(r,16),8,"0").toUpperCase()}t=a5.e
n=t[A.o.F(a3,t.length)]
if(n==="spotlight")A.d.ck(a2,0,w.$8(D.eJ,0.1+a1.aj()*0.45,0.05+a1.aj()*0.3,0.45,0.75,C.a1a(a0,52),"lux_spot",a5.wn(0,"spotlight")))
else A.d.ck(a2,0,w.$8(D.be,0,0,1,1,0,"lux_back",a5.wn(0,n)))
m=t[(a3+1)%t.length]
t=a3&1
if(t===1&&m!==n&&m!=="spotlight")A.d.ck(a2,1,w.$8(D.be,0,0,1,1,0,"lux_back2",a5.aE8(0,m,r)))
switch(a5.b){case 0:a2.push(w.$12$anim$delay$stroke$strokeWidth(D.be,0.022,0.038,0.956,0.924,0,g,a5.wn(0,f),D.dd,150,C.a1a(a0,176),1.6))
a2.push(u.$4(0.022,0.038,"lux_c1",300))
a2.push(u.$4(0.978,0.038,"lux_c2",380))
a2.push(u.$4(0.022,0.962,"lux_c3",460))
a2.push(u.$4(0.978,0.962,"lux_c4",540))
break
case 1:a2.push(w.$12$anim$delay$stroke$strokeWidth(D.be,0.018,0.032,0.964,0.936,0,g,a5.wn(0,f),D.dd,120,C.a1a(a0,200),2))
a2.push(w.$12$anim$delay$stroke$strokeWidth(D.be,0.034,0.06,0.932,0.88,0,"lux_frame2","",D.dd,260,C.a1a(a0,112),0.8))
a2.push(u.$5$size(0.5,0.032,"lux_c1",420,0.026))
a2.push(u.$5$size(0.5,0.968,"lux_c2",480,0.026))
break
case 2:a2.push(w.$10$anim$delay(D.be,0,0,1,1,0,"lux_filigree",a5.wn(0,"filigree"),D.dd,200))
break
default:a2.push(w.$10$anim$delay(D.be,0.08,0.06,0.84,0.004,C.a1a(a0,208),"lux_rule",a5.aE8(0,"shimmer",r),D.uc,150))
a2.push(w.$10$anim$delay(D.be,0.08,0.936,0.84,0.004,C.a1a(a0,144),"lux_rule2","",D.HG,220))}l=!A.d.b5(a2,new C.f96())||a3===0
s=a5.d
if(l)a2.push(v.$9(s,0.44,0.06,0.12,0.14,40,e,a5.wn(0,"crest"),350))
else{o=a1.hb()?0.035:0.905
a2.push(v.$9(s,o,0.055,0.06,0.09,22,e,a5.wn(0,"crest"),350))}s=a5.c
t=t===0
o=t?0.3:0.62
k=C.a1a(r,242)
j=a5.wn(0,"orbit")
i=s===D.be?0.785:0
a2.push(w.$13$anim$delay$rotation$stroke$strokeWidth(s,o-0.008,0.024,0.016,0.028,k,"lux_g1",j,D.q6,600,i,4294967295,1))
t=t?0.66:0.34
a2.push(w.$10$anim$delay(D.eJ,t-0.007,0.9495,0.014,0.025,C.a1a(r,242),"lux_g2",a5.wn(0,"orbit"),D.q6,700))
for(t=a5.f,s=t.length,q=0;q<t.length;t.length===s||(0,B.L)(t),++q){h=t[q]
a2.push(w.$8(D.be,0,0,1,1,0,"lux_"+h,h+"@"+A.a.aT(A.o.fS(a0,16),8,"0").toUpperCase()))}if((A.d.gL(d.b).a&16777215)<8421504)a2.push(w.$8(D.be,0,0,1,1,0,"lux_velvet",a5.wn(0,"velvet")))},
nG:function nG(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fDg:function fDg(d){this.a=d},
fDh:function fDh(){},
vQ:function vQ(d,e){this.a=d
this.b=e},
a7C:function a7C(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
aqx:function aqx(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
fD9:function fD9(){},
fDc:function fDc(){},
fB9:function fB9(){},
fBa:function fBa(){},
fBb:function fBb(d){this.a=d},
fvz:function fvz(){},
fvC:function fvC(d,e,f){this.a=d
this.b=e
this.c=f},
fvB:function fvB(d,e){this.a=d
this.b=e},
fvA:function fvA(d,e){this.a=d
this.b=e},
fvy:function fvy(d){this.a=d},
fy_:function fy_(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fxY:function fxY(d){this.a=d},
fxZ:function fxZ(d){this.a=d},
fcE:function fcE(){},
fcF:function fcF(){},
fcG:function fcG(){},
fMc:function fMc(){},
a_Y:function a_Y(d){this.a=d},
aGI:function aGI(d,e,f,g,h){var _=this
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
eX7:function eX7(d,e,f){this.a=d
this.b=e
this.c=f},
eX8:function eX8(d,e){this.a=d
this.b=e},
eX5:function eX5(d,e){this.a=d
this.b=e},
eX6:function eX6(d,e){this.a=d
this.b=e},
eX4:function eX4(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
eX_:function eX_(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
eX3:function eX3(d,e){this.a=d
this.b=e},
eWZ:function eWZ(d,e){this.a=d
this.b=e},
eX2:function eX2(d,e){this.a=d
this.b=e},
eWY:function eWY(d,e){this.a=d
this.b=e},
eX0:function eX0(d){this.a=d},
eX1:function eX1(d,e){this.a=d
this.b=e},
eWO:function eWO(d,e){this.a=d
this.b=e},
eWP:function eWP(d,e){this.a=d
this.b=e},
eWR:function eWR(d){this.a=d},
eWS:function eWS(d){this.a=d},
eWT:function eWT(d){this.a=d},
eWU:function eWU(d){this.a=d},
eWQ:function eWQ(d,e){this.a=d
this.b=e},
eWV:function eWV(d,e){this.a=d
this.b=e},
eXl:function eXl(d){this.a=d},
eXm:function eXm(d){this.a=d},
eXk:function eXk(d){this.a=d},
eXn:function eXn(d){this.a=d},
eXj:function eXj(d){this.a=d},
eXp:function eXp(d){this.a=d},
eXi:function eXi(d,e){this.a=d
this.b=e},
eXq:function eXq(d){this.a=d},
eXh:function eXh(d,e){this.a=d
this.b=e},
eXr:function eXr(d){this.a=d},
eXg:function eXg(d){this.a=d},
eXs:function eXs(d){this.a=d},
eXf:function eXf(d,e){this.a=d
this.b=e},
eXt:function eXt(d){this.a=d},
eXe:function eXe(d,e){this.a=d
this.b=e},
eXu:function eXu(d){this.a=d},
eXd:function eXd(d){this.a=d},
eXv:function eXv(d,e){this.a=d
this.b=e},
eXc:function eXc(d,e){this.a=d
this.b=e},
eXw:function eXw(d){this.a=d},
eXo:function eXo(d){this.a=d},
eXb:function eXb(d,e){this.a=d
this.b=e},
eWW:function eWW(d,e,f){this.a=d
this.b=e
this.c=f},
eWX:function eWX(d,e,f){this.a=d
this.b=e
this.c=f},
eXa:function eXa(d,e){this.a=d
this.b=e},
eX9:function eX9(d,e){this.a=d
this.b=e},
fMb:function fMb(d,e){this.a=d
this.b=e},
a_X:function a_X(d,e,f){this.c=d
this.d=e
this.a=f},
aGH:function aGH(d){var _=this
_.d=d
_.e=!1
_.f=""
_.c=_.a=_.r=null},
eWH:function eWH(d){this.a=d},
eWI:function eWI(d){this.a=d},
eWJ:function eWJ(d,e){this.a=d
this.b=e},
eWK:function eWK(d){this.a=d},
eWL:function eWL(d){this.a=d},
eWG:function eWG(d,e){this.a=d
this.b=e},
eWM:function eWM(d,e){this.a=d
this.b=e},
eWN:function eWN(d,e){this.a=d
this.b=e},
fj5:function fj5(d){this.a=d},
b0r:function b0r(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aDf:function aDf(d,e,f){this.c=d
this.d=e
this.a=f},
bjo:function bjo(d,e){var _=this
_.d=$
_.bq$=d
_.a8$=e
_.c=_.a=null},
ecx:function ecx(d){this.a=d},
ecw:function ecw(){},
bgW:function bgW(d,e){this.b=d
this.a=e},
fDi:function fDi(d){this.a=d},
fDj:function fDj(){},
fDk:function fDk(){},
fDl:function fDl(d){this.a=d},
ar6:function ar6(d,e){this.a=d
this.b=e},
fDe:function fDe(){},
fDf:function fDf(){},
fLp:function fLp(d,e){this.a=d
this.b=e},
Zj:function Zj(d,e,f){this.c=d
this.d=e
this.a=f},
aAI:function aAI(){var _=this
_.e=_.d=$
_.f=!1
_.c=_.a=_.r=null},
dhS:function dhS(d){this.a=d},
dhT:function dhT(d){this.a=d},
dhU:function dhU(d,e){this.a=d
this.b=e},
dhX:function dhX(d){this.a=d},
dhY:function dhY(d,e){this.a=d
this.b=e},
dhW:function dhW(d,e){this.a=d
this.b=e},
dhZ:function dhZ(d){this.a=d},
dhV:function dhV(d,e){this.a=d
this.b=e},
brQ:function brQ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ecu:function ecu(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
ecv:function ecv(d){this.a=d},
f97:function f97(d){this.a=d},
f99:function f99(d,e){this.a=d
this.b=e},
f98:function f98(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f96:function f96(){},
aLg:function aLg(){},
fYg(d){var w,v,u
try{w=A.R.aG(0,d,null)
if(x.f.b(w)){v=B.vI(B.a1(w,x.N,x.z))
return v}}catch(u){}return null},
b0n:function b0n(d,e,f){this.c=d
this.d=e
this.a=f},
bl1:function bl1(d,e){this.c=d
this.a=e},
i_D(d){return A.d.dL(D.GK,new C.fwG(d),new C.fwH())},
i_E(d){var w,v,u,t=A.a.i(d)
if(!A.a.a0(t,"class_"))return null
w=A.a.b1(t,6)
if(w.length===0)return null
v=new B.a2(D.GK,new C.fwI(w),x.b4)
if(!v.gaf(0).C())return null
u=v.gL(0)
return new C.jD("class_"+u.a,u.b,u.d,u.r,u.w,u.e,u.f)},
la:function la(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fwG:function fwG(d){this.a=d},
fwH:function fwH(){},
fwI:function fwI(d){this.a=d},
mR(d,e,f,g,h){return new C.En(f,g,d)},
hMQ(d){var w=d.z,v=B.U(w).k("a2<1>")
w=B.B(new B.a2(w,new C.fb7(),v),v.k("J.E"))
d.z=w
d.x=""},
dw(d,e){var w=$.K6
e.db="__design__:"+(w.length===0?"layer":w)
A.d.ck(d.z,0,e)},
dx(d,e,f,g,h,i,j,k,l){return C.ep(A.bg,!1,4279310375,A.aD,"",d,24,A.bl,A.a5,"",e,"design_"+C.cC(),null,"","",0,!1,"",f,g,h,i,"",0,0,"",D.cm,D.f0,j,k,l)},
hiW(d,e){var w
C.hMQ(d)
w=A.d.dL($.bDp(),new C.fuw(e),new C.fux())
$.K6=w.a
d.x=w.a;++d.y
try{w.bx(d)}finally{$.K6=""}d.z=B.bn(d.z,!0,x.F)},
En:function En(d,e,f){this.a=d
this.b=e
this.e=f},
fb7:function fb7(){},
fCL:function fCL(){},
fCM:function fCM(){},
fCN:function fCN(){},
fCY:function fCY(){},
fD2:function fD2(){},
fD3:function fD3(){},
fD4:function fD4(){},
fD5:function fD5(){},
fD6:function fD6(){},
fD7:function fD7(){},
fD8:function fD8(){},
fCO:function fCO(){},
fCP:function fCP(){},
fCQ:function fCQ(){},
fCR:function fCR(){},
fCS:function fCS(){},
fCT:function fCT(){},
fCU:function fCU(){},
fCV:function fCV(){},
fCW:function fCW(){},
fCX:function fCX(){},
fCZ:function fCZ(){},
fD_:function fD_(){},
fD0:function fD0(){},
fD1:function fD1(){},
fuw:function fuw(d){this.a=d},
fux:function fux(){},
iS(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){return C.ep(d,e,f,g,"",4280640491,h,i,j,"",k,l,null,"","",0,!1,"",0,D.be,4280172719,2,m,n,0,"",o,D.cQ,p,q,r)},
CF(d,e,f,g,h,i,j,k,l){return C.ep(A.bg,!1,4279310375,A.aD,"",d,24,A.bl,A.a5,"",e,f,null,"","",0,!1,"",0,g,h,i,"",0,0,"",D.cm,D.f0,j,k,l)},
bC7(){var w=new B.S(Date.now(),0,!1)
return A.ie[B.bG(w)-1]+" "+B.bQ(w)+", "+B.bA(w)},
eu:function eu(d,e,f){this.a=d
this.b=e
this.c=f},
bzv(d){return new B.iN((A.o.aA(d,24)&255)/255,(A.o.aA(d,16)&255)/255,(A.o.aA(d,8)&255)/255,(d&255)/255)},
hRU(d){var w,v
if(d==null||!A.a.a0(d,"data:image"))return null
try{w=B.amk(A.cG.aJ(A.d.gal(d.split(","))))
return w}catch(v){return null}},
hRY(d){var w=d.r
if(!d.cy)return w
return new B.K(B.a(w.split("\n"),x.s),new C.fiE(),x.dv).aI(0,"\n")},
hRX(d){switch(d.a){case 2:return A.nq
case 1:case 5:return A.eUI
default:return A.SW}},
hRR(d){switch(d.a){case 2:return A.uO
case 1:case 5:return A.UL
default:return A.a9i}},
hRV(d,e){var w,v=null,u=d.ay,t=A.o.aA(u,24),s=A.o.aA(d.ch,24),r=(t&255)===0?v:C.bzv(u),q=(s&255)===0?v:C.bzv(d.ch),p=A.k.D(d.CW*(e/960),0.35,6)
u=q==null
if(u)w=v
else{t=new B.nq(q,p,A.kE)
w=new B.ps(t,t,t,t)}switch(d.ax.a){case 1:return B.ls(v,v,v,new B.ky(r,w,v,A.aaw,v),v,v,v,v)
case 4:return u?new B.fO(v,v,v):B.wQ(B.ls(v,v,q,v,p+0.4,v,v,v))
default:return B.ls(v,v,v,new B.ky(r,w,B.vk(4),A.hE,v),v,v,v,v)}},
hRT(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=d.c*e,j=d.d*a0,i=d.b,h=i===D.f0?0.4:12,g=A.k.D(d.e*e,h,e),f=A.k.D(d.f*a0,h,a0)
switch(i.a){case 0:w=C.hRR(d.as)
v=A.k.D(d.w*(e/960),3,96)
u=C.hRY(d)
t=C.bzv(d.Q)
s=d.x.a>=700?A.ej:A.vq
r=d.y===A.cF?A.xP:A.aiZ
q=d.z
p=new B.CQ(w,l,l,B.fa(u,l,l,l,B.h2(l,t,1===q.a?A.aOo:A.aOn,l,l,l,l,l,l,A.ds,l,l,v,r,s,l,!0,l,l,l,l),C.hRX(d.as)))
break
case 1:case 4:o=C.hRU(d.at)
n=i===D.lq&&d.c===0&&d.d===0&&d.e===1&&d.f===1
if(o==null){w=d.db
if(w.length===0)w="Image"
p=B.wQ(B.fa(w,l,l,l,B.h2(l,A.rt,l,l,l,l,l,l,l,A.ds,l,l,10,l,l,l,!0,l,l,l,l),l))}else p=new B.Hw(o,n?A.aas:A.V8,l,l)
break
case 3:w=new B.nq(A.HZ,1,A.kE)
u=B.vk(6)
t=d.db
if(t.length===0)t="PDF document"
p=B.ls(A.uO,B.fa(t,l,l,l,B.h2(l,D.e7J,l,l,l,l,l,l,l,A.ds,l,l,11,l,A.ej,l,!0,l,l,l,l),A.nq),l,new B.ky(E.aGM,new B.ps(w,w,w,w),u,A.hE,l),l,l,l,l)
break
case 2:p=C.hRV(d,e)
break
case 5:p=C.hRS(d)
break
default:p=l}w=d.cx
if(w!==0)p=B.haD(-w,p)
w=i===D.cQ
if(w){m=A.o.aA(d.Q,24)&255
if(m<255)p=new B.arS(m/255,p)}if(w)return new F.vW(k,l,j,l,new B.RO(new B.kx(g,g,f,1/0),p))
if(i===D.kX){i=new B.nq(A.HZ,1,A.kE)
i=B.ls(A.uO,p,l,new B.ky(A.oY,new B.ps(i,i,i,i),B.vk(4),A.hE,l),l,l,D.buo,l)}else i=p
return new F.vW(k,l,j,l,new B.fO(g,f,i))},
hRW(d,e,f,g){var w,v=null,u=C.bzv(d.e),t=d.f
t=B.a([F.h9f(t!=null?B.ls(v,v,v,new B.ky(v,v,v,A.hE,new B.aVV(E.UM,A.a9c,B.a([u,C.bzv(t)],x.cR),v)),v,v,v,v):B.ls(v,v,u,v,v,v,v,v))],x.eR)
w=d.z
A.d.v(t,new B.K(w,new C.fiD(f,g),B.U(w).k("K<1,ff>")))
return F.cqs(t)},
fZu(d){var w=0,v=B.j(x.E),u,t,s,r,q,p,o,n
var $async$fZu=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:n=B.a3Q(null,"NGMY Slides",d.b)
for(t=d.r,s=t.length,r=n.c,q=0;q<t.length;t.length===s||(0,B.L)(t),++q){p=t[q]
o=new B.W5(A.w6,A.HW,D.bvw,null,null,null,!1,null)
o=new B.Bx(o,new C.fDr(607,787,p,d))
o.Mi(n,null)
r.push(o)}u=n.k0(0)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fZu,v)},
hRS(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=C.fYg(d.r),k=l==null,j=k?m:l.b,i=A.a.i(j==null?"":j),h=k?m:l.gaj1()
if(h==null)h=A.awo
j=B.tn(4279308564)
w=B.vk(18)
v=new B.nq(B.tn(4287531653),3,A.kE)
u=i.length===0?"My links":i
u=B.a([B.wQ(B.fa(u,m,m,m,B.h2(m,A.oY,m,m,m,m,m,m,m,A.ds,m,m,12,m,A.ej,m,!0,m,m,m,m),m))],x.eR)
t=k?m:l.c
if(A.a.i(t==null?"":t).length!==0)u.push(B.wQ(B.fa(A.a.i(l.c),m,m,m,D.f0S,m)))
u.push(new B.fO(m,8,m))
for(t=B.dd(h,0,B.dJ(8,"count",x.S),B.U(h).c),s=t.$ti,t=new B.bS(t,t.gM(0),s.k("bS<ak.E>")),s=s.k("ak.E");t.C();){r=t.d
if(r==null)r=s.a(r)
q=A.a.i(r.c)
p=B.tn(4280690220)
o=new B.a8V(8,8)
n=A.a.i(r.b)
u.push(new B.nH(D.boI,new C.aw3(new C.ahN(q),B.ls(m,B.fa(n.length===0?A.a.i(r.c):n,m,m,m,D.f3b,A.nq),m,new B.ky(p,m,new B.aid(o,o,o,o),A.hE,m),m,m,D.buP,m))))}k=k?m:l.as
if(A.a.i(k==null?"":k).length!==0){k=A.a.i(l.as)
t=B.wQ(B.fa(k,m,m,m,D.f2q,m))
u.push(new C.aw3(C.hrv(k),t))}return B.ls(m,B.yB(u,A.Lq,A.lo),m,new B.ky(j,new B.ps(v,v,v,v),w,A.hE,m),m,m,D.bpy,m)},
fiE:function fiE(){},
fiD:function fiD(d,e){this.a=d
this.b=e},
fDr:function fDr(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
agv(d){var w,v
for(w=0;w<32;++w){v=D.GB[w]
if(v.a===d)return v}return null},
hdg(d){var w,v,u=A.a.cJ(d,",")
if(!A.a.a0(d,"data:")||u<0)return null
try{w=A.cG.aJ(A.a.b1(d,u+1))
return w}catch(v){return null}},
cW(d,e){var w=d*374761393+e*668265263+1013904223&2147483647
w=(w^w>>>13)*1274126177&2147483647
return((w^w>>>16)&65535)/65535},
hlZ(d,e){return B.a5(d,!1).c8(B.e9(new C.fJP(e),!0,null,x.fB))},
hlY(d,e){return B.bR(A.K,null,new C.fJO(e),d,!0,!0,!0,null,!1,!1,x.fB)},
iX:function iX(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Ee:function Ee(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
N7:function N7(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
biL:function biL(d,e,f){var _=this
_.d=d
_.e=$
_.bq$=e
_.a8$=f
_.c=_.a=null},
dTj:function dTj(d){this.a=d},
dTi:function dTi(d,e,f){this.a=d
this.b=e
this.c=f},
dTh:function dTh(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bqp:function bqp(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eVV:function eVV(d,e){this.a=d
this.b=e},
bdP:function bdP(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
aZg:function aZg(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
c7N:function c7N(){},
c7O:function c7O(d){this.a=d},
c7P:function c7P(d,e,f){this.a=d
this.b=e
this.c=f},
c7Q:function c7Q(d,e,f){this.a=d
this.b=e
this.c=f},
fJP:function fJP(d){this.a=d},
YS:function YS(d,e){this.c=d
this.a=e},
az5:function az5(){var _=this
_.f=_.e=_.d=$
_.r=0
_.c=_.a=null},
d74:function d74(d,e,f){this.a=d
this.b=e
this.c=f},
d79:function d79(d){this.a=d},
d7a:function d7a(d){this.a=d},
d78:function d78(d){this.a=d},
d7b:function d7b(d){this.a=d},
d77:function d77(d,e){this.a=d
this.b=e},
d7c:function d7c(d){this.a=d},
d76:function d76(d){this.a=d},
d7d:function d7d(d){this.a=d},
d75:function d75(d,e){this.a=d
this.b=e},
d7e:function d7e(d,e){this.a=d
this.b=e},
fJO:function fJO(d){this.a=d},
fJN:function fJN(d){this.a=d},
fJM:function fJM(d,e,f){this.a=d
this.b=e
this.c=f},
fJL:function fJL(d,e){this.a=d
this.b=e},
aKK:function aKK(){},
i7h(d){return B.bR(A.K,null,new C.fMa(),d,!0,!0,!0,null,!1,!1,x.N)},
fMa:function fMa(){},
Zc:function Zc(d){this.a=d},
bfi:function bfi(d){this.d=d
this.c=this.a=null},
ddR:function ddR(d){this.a=d},
ddS:function ddS(d,e){this.a=d
this.b=e},
ddT:function ddT(d){this.a=d},
hOl(d){var w,v=d.split("@")
if(v.length>1){w=B.c7(v[1],16)
if(w!=null)return B.b0(w)}return D.xf},
i1y(d){var w,v=A.d.gL(d.split("@"))
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
i1x(d,e,f,g){var w,v,u,t,s,r=null,q=A.d.gL(d.split("@")),p=C.hOl(d)
switch(q){case"shimmer":return B.nL(A.a9E,g,new C.fA7(p,A.k.F(e,6.283185307179586)/6.283185307179586*1.8-0.4))
case"golddust":return new B.an(A.W,r,A.b0,A.r,B.a([g,B.e1(B.b3(r,r,r,new C.beG(e,f,p,r),A.au),!0,r)],x.p),r)
case"spotlight":w=Math.sin(e)
v=Math.cos(e*0.7)
u=Math.sin(e*2)
t=Math.sin(e*3)
return B.dU(B.ec(A.A,B.dc(C.fQm(g,B.a4G(40,40,r)),0.75+t*0.25),1+u*0.08,r,r),new B.u(w*60,v*26))
case"goldframe":return new B.an(A.W,r,A.b0,A.r,B.a([g,B.e1(B.b3(r,r,r,new C.ben(e,p,r),A.au),!0,r)],x.p),r)
case"twinkle":s=Math.sin(e)
w=A.k.D(0.55+s*0.45,0,1)
return B.dc(B.eG(A.A,e*0.5,B.ec(A.A,g,0.8+(s+1)*0.18,r,r),r),w)
case"orbit":w=Math.cos(e)
v=Math.sin(e)
u=B.dp()
t=u.a
t.$flags&2&&B.aj(t)
t[11]=0.002
u.fA(e)
u.mI(Math.sin(e)*0.3)
return B.dU(B.fs(A.A,g,r,u,!0),new B.u(w*22,v*12))
case"rays":return new B.an(A.W,r,A.b0,A.r,B.a([B.e1(B.b3(r,r,r,new C.bnh(e,f,p,r),A.au),!0,r),g],x.p),r)
case"bokeh":return new B.an(A.W,r,A.b0,A.r,B.a([B.e1(B.b3(r,r,r,new C.b9h(e,f,p,r),A.au),!0,r),g],x.p),r)
case"aurora":return new B.an(A.W,r,A.b0,A.r,B.a([B.e1(B.b3(r,r,r,new C.b8V(e,f,p,r),A.au),!0,r),g],x.p),r)
case"velvet":return new B.an(A.W,r,A.b0,A.r,B.a([g,B.e1(B.b3(r,r,r,new C.bub(e,p,r),A.au),!0,r)],x.p),r)
case"sparkle":return new B.an(A.W,r,A.b0,A.r,B.a([g,B.e1(B.b3(r,r,r,new C.brc(e,f,p,r),A.au),!0,r)],x.p),r)
case"sheen":return new B.an(A.W,r,A.b0,A.r,B.a([g,B.e1(B.b3(r,r,r,new C.bql(e,p,r),A.au),!0,r)],x.p),r)
case"filigree":return new B.an(A.W,r,A.b0,A.r,B.a([g,B.e1(B.b3(r,r,r,new C.bdI(e,p,r),A.au),!0,r)],x.p),r)
case"crest":s=Math.sin(e)
return new B.an(A.A,r,A.aa,A.f,B.a([B.bZ(0,B.e1(B.ec(A.A,B.c_(r,new B.o(r,r,r,r,r,new B.bT(A.A,0.5,A.x,r,0,B.a([p.j(0.35+s*0.12),p.j(0)],x.O),r,r),A.a6),A.bd),1.6+s*0.15,r,r),!0,r),0,0,0),B.eG(A.A,s*0.06,B.ec(A.A,g,1+s*0.05,r,r),r)],x.p),r)}return g},
fA7:function fA7(d,e){this.a=d
this.b=e},
beG:function beG(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
ben:function ben(d,e,f){this.b=d
this.c=e
this.a=f},
bnh:function bnh(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
b9h:function b9h(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
b8V:function b8V(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bub:function bub(d,e,f){this.b=d
this.c=e
this.a=f},
brc:function brc(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bql:function bql(d,e,f){this.b=d
this.c=e
this.a=f},
bdI:function bdI(d,e,f){this.b=d
this.d=e
this.a=f},
d6M:function d6M(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
xn:function xn(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
fAa(d){var w=d.db
return A.a.a0(w,"marriage_sign_")&&!A.a.a0(w,"marriage_sign_placed_")&&d.b!==D.kX},
i1D(d,e){var w,v,u,t,s,r,q,p,o,n,m,l="marriage_locked_box_",k="marriage_field_",j=B.a([],x.u)
for(w=d.z,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u){t=w[u]
if(A.a.a0(t.db,l))continue
if(Math.abs(t.d+t.f*0.5-e)<0.03)j.push(t)}if(j.length<2)return
A.d.b0(j,new C.fAb())
s=A.d.gL(j).c
for(w=j.length,u=0;u<j.length;j.length===w||(0,B.L)(j),++u){t=j[u]
r=s-t.c
if(Math.abs(r)>0.0001){t.c=s
v=t.db
if(A.a.a0(v,k)){q=A.d.gL(B.aPE(v,k,"",0).split(":"))
for(v=d.z,p=v.length,o=l+q,n=0;n<p;++n){m=v[n]
if(m.db===o)m.c+=r}}}s+=t.e+0.006}},
i1C(d,e){var w,v,u,t,s,r=d.db
if(!A.a.a0(r,"marriage_field_"))return
w=r.split(":")
r=w.length
if(r>1){v=B.d5(w[1])
u=v==null?d.e:v}else u=d.e
t=r>2?B.d5(w[2]):null
r=A.a.i(e).length
if(r===0){d.e=u
if(t!=null)d.w=t
return}if(t!=null){s=r*(t*0.001)+0.028
if(s<=u){d.w=t
d.e=A.k.D(s,0.06,u)}else{d.w=A.k.D((u-0.028)/(r*0.001),12,t)
d.e=u}return}d.e=A.k.D(r*(d.w*0.001)+0.028,0.06,u)},
ag8(d,a0,a1,a2,a3,a4){var w=0,v=B.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$ag8=B.e(function(a5,a6){if(a5===1)return B.f(a6,v)
for(;;)switch(w){case 0:f=B.U(a4).k("a2<1>")
e=B.B(new B.a2(a4,new C.fsx(),f),f.k("J.E"))
w=!a2&&e.length!==0?3:4
break
case 3:w=5
return B.b(B.bR(A.dH,null,new C.fsy(e),d,!0,!0,!1,A.lr,!1,!1,x.N),$async$ag8)
case 5:t=a6
if(t==="continue"){a1.$1(A.d.gL(e).hC())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.h_5(d),$async$ag8)
case 6:s=a6
if(s==null||d.e==null){w=1
break}r=A.a.i(a3==null?"":a3)
w=r.length!==0?7:9
break
case 7:a6=r
w=8
break
case 9:w=10
return B.b(B.KS(d,"Search states\u2026","",A.jZ,"Choose state"),$async$ag8)
case 10:case 8:q=a6
if(q==null||d.e==null){w=1
break}p=C.fZ1(s)
if(p==null)p=A.d.gL(D.Qm)
f=C.cC()
o=A.a.i(q)
if(o.length===0)o=null
n=C.cC()
m=p.e
l=C.fAc(p.d)
k=x.u
j=B.a([C.ep(A.bg,!1,4279310375,A.aD,"marriage_locked_bg",4280640491,24,A.bl,A.a5,"",1,C.cC(),l,"","",0,!1,"",0,D.be,4280172719,2,"",0,0,"",D.cm,D.lq,1,0,0)],k)
i=p.f
h=x.F
k=B.B(B.a([C.Cr(i,0.016,D.kY,4291404327,0.8,"ring_jewel",0.028,0.42544,0.008),C.Cr(0,0.058,D.eJ,4291404327,2.4,"ring_l",0.058,0.39064,0.026),C.Cr(0,0.058,D.eJ,4291404327,2.4,"ring_r",0.058,0.41963999999999996,0.026)],k),h)
k.push(C.Kh("HATI YA NDOA",A.L,i,32,A.u,0.048,"title",0.78,0.11,0.086))
k.push(C.Kh("Hati ya Makubaliano ya Ndoa",A.L,i,12,A.a5,0.018,"subtitle",0.78,0.11,0.134))
A.d.v(k,C.fVZ(0.2,0.154,0.6,4291404327,i))
A.d.v(k,C.byZ("TAARIFA ZA WANANDOA",0.176,0.2,0.6,i))
A.d.v(k,C.a0M("Jina la Mume:","groom_name",0.11,0.218,0.78,11,i,""))
A.d.v(k,C.a0M("Jina la Mke:","bride_name",0.11,0.25,0.78,11,i,""))
A.d.v(k,C.a0M("Tarehe ya Ndoa:","tarehe",0.11,0.282,0.78,11,i,""))
A.d.v(k,C.a0M("Mahali:","bride_house",0.11,0.314,0.78,11,i,""))
A.d.v(k,C.byZ("TAMKO LA MAKUBALIANO",0.35,0.2,0.6,i))
k.push(C.Cr(m,0.082,D.be,4291404327,1.15,"intro_frame",0.792,0.104,0.384))
g=C.cC()
k.push(C.ep(A.bg,!1,i,A.aD,"marriage_field_utangulizi:"+A.k.aa(0.78,3),4280640491,9.5,A.bl,A.cv,"",0.074,g,null,"","",0,!1,"",0,D.be,4280172719,2,y.O,0,0,"",D.cm,D.cQ,0.78,0.11,0.388))
A.d.v(k,C.fVZ(0.22,0.47,0.56,4291404327,i))
A.d.v(k,C.byZ("MASHAHIDI",0.49,0.26,0.48,i))
A.d.v(k,C.hff("Shahidi wa Mume",0.11,0.528,0.37,i,4294967295))
A.d.v(k,C.hff("Shahidi wa Mke",0.52,0.528,0.37,i,4294967295))
A.d.v(k,C.a0M("Jina:","witness_mume_1_name",0.11,0.564,0.37,10,i,""))
A.d.v(k,C.a0M("Jina:","witness_mke_1_name",0.52,0.564,0.37,10,i,""))
A.d.v(k,C.byY("witness_mume_1",0.11,0.596,0.37,i))
A.d.v(k,C.byY("witness_mke_1",0.52,0.596,0.37,i))
A.d.v(k,C.byZ("SAHIHI ZA WANANDOA",0.64,0.2,0.6,i))
k.push(C.Kh("Mume",A.L,i,11,A.u,0.016,"mume_h",0.37,0.11,0.678))
k.push(C.Kh("Mke",A.L,i,11,A.u,0.016,"mke_h",0.37,0.52,0.678))
A.d.v(k,C.byY("mchumba_mume",0.11,0.7,0.37,i))
A.d.v(k,C.byY("mchumba_mke",0.52,0.7,0.37,i))
A.d.v(k,C.byZ("MWANDISHI / MSIMAMIZI",0.744,0.18,0.64,i))
A.d.v(k,C.a0M("Jina:","mwandishi",0.11,0.784,0.26,10,i,""))
A.d.v(k,C.byY("witness_mume_2",0.38,0.784,0.26,i))
A.d.v(k,C.a0M("Tarehe:","mchumba_mume_tarehe",0.65,0.784,0.24,10,i,""))
h=B.B(C.fVZ(0.22,0.83,0.56,4291404327,i),h)
h.push(C.Kh("NGMY",A.L,i,13,A.u,0.022,"ngmy_mark",0.6,0.2,0.846))
h.push(C.Kh("Nakala ya Hati",A.L,4291404327,9,A.a5,0.016,"ngmy_sub",0.6,0.2,0.866))
A.d.v(k,h)
A.d.v(j,k)
a0.$1(C.Br(null,null,null,null,D.o7,5,!1,"marriage_agreement",null,null,null,null,f,null,!1,o,p.b,null,null,B.a([C.ro(m,null,0,0,j,n,D.q5,"","","Hati ya Ndoa",D.dd)],x.g),"marriage_"+p.a,null,!1,null))
case 1:return B.h(u,v)}})
return B.i($async$ag8,v)},
fAb:function fAb(){},
fsx:function fsx(){},
fsy:function fsy(d){this.a=d},
fsv:function fsv(d){this.a=d},
fsw:function fsw(d){this.a=d},
hRm(d){var w=d.a
if(1===w)return"underline"
if(4===w)return"lineThrough"
return"none"},
hRl(d){var w=d==null?null:J.k(d)
switch(w==null?"none":w){case"underline":return A.mH
case"lineThrough":return A.zr
default:return A.aD}},
ep(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){return new C.eJ(o,a7,a9,b0,a8,n,a2,j,l,k,g,f,d,p,w,i,a0,a1,v,e,h,s,a6,a3,r,q,m,u,a5,t,a4)},
hhj(d){var w,v,u=J.k(d==null?"fade":d)
for(w=0;w<22;++w){v=D.Q8[w]
if(v.b===u)return v}return D.dd},
hNK(d){var w,v,u=J.k(d==null?"text":d)
for(w=0;w<6;++w){v=D.cOQ[w]
if(v.b===u)return v}return D.cQ},
hU8(d){var w,v,u=J.k(d==null?"rectangle":d)
for(w=0;w<7;++w){v=D.dcF[w]
if(v.b===u)return v}return D.be},
ro(d,e,f,g,h,i,j,k,l,m,n){return new C.lD(i,m,k,j,d,e,n,g,l,f,h==null?B.a([],x.u):h)},
h8_(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=d.h(0,"id")
l=J.k(l==null?"":l)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"notes")
v=J.k(v==null?"":v)
u=C.hPK(d.h(0,"layout"))
t=B.aJ(d.h(0,"background"))
t=t==null?m:A.k.N(t)
if(t==null)t=4294967295
s=B.aJ(d.h(0,"backgroundEnd"))
s=s==null?m:A.k.N(s)
r=C.hhj(d.h(0,"transition"))
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
else{n=J.d9(n,x.f)
n=B.cD(n,new C.cdb(),n.$ti.k("J.E"),x.F)
n=B.B(n,B.a4(n).k("J.E"))}return C.ro(t,s,o,q,n==null?B.a([],x.u):n,l,u,v,p,w,r)},
hPK(d){var w,v,u=J.k(d==null?"titleContent":d)
for(w=0;w<9;++w){v=D.aog[w]
if(v.b===u)return v}return D.mB},
Br(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,a0,a1,a2,a3,a4){var w=a4==null?new B.S(Date.now(),0,!1):a4
return new C.i_(p,t,a1,h,i,w,a0==null?B.a([C.ro(4294967295,null,0,0,null,C.cC(),D.q5,"","","",D.dd)],x.g):a0,k,s,a2,a3,d,v,u,q,j,r,f,g,e,m,o,n,l)},
Vw(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4="deckKind",a5=a6.h(0,"id")
a5=J.k(a5==null?"":a5)
w=a6.h(0,"name")
w=J.k(w==null?"Untitled Presentation":w)
v=a6.h(0,"themeId")
v=J.k(v==null?"office_blue":v)
u=C.hLS(a6.h(0,"aspectRatio"))
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
o=C.ku(o==null?a3:J.k(o))}else o=!1
n=a6.h(0,a4)
if(C.ku(n==null?a3:J.k(n))){n=a6.h(0,"adminShareEditUntil")
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
else{f=J.b6(f,new C.ccZ(),x.N)
f=B.B(f,f.$ti.k("ak.E"))}e=g.a(a6.h(0,"aiExtras"))
if(e==null)e=a3
else{e=J.b6(e,new C.cd_(),x.N)
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
else{g=J.d9(g,x.f)
g=B.cD(g,new C.cd0(),g.$ti.k("J.E"),x.bt)
g=B.B(g,B.a4(g).k("J.E"))}return C.Br(n,e,h,f,u,t,j,r,a2,d,a1,a0,a5,k,i,q,w,l,m,g==null?B.a([C.ro(4294967295,a3,0,0,a3,C.cC(),D.q5,"","","",D.dd)],x.g):g,v,p,o,s)},
ku(d){return d==="marriage_agreement"||d==="hati_kuhowa"||d==="hati_kuhoweya"||d==="hati_malipo_awamu"||d==="hati_kiapo_uongozi"},
hLS(d){var w,v,u=J.k(d==null?"landscape169":d)
for(w=0;w<2;++w){v=D.ddv[w]
if(v.b===u)return v}return D.Cw},
cC(){var w=Date.now(),v=$.iZ
$.iZ=v+1
return""+1000*w+"_"+v},
cds(d,e,f){var w,v,u,t,s,r,q,p=null,o="Click to add title",n=4280640491,m=4280172719,l=4279310375
d.d=e
A.d.a9(d.z)
if(e!==D.Cx){d.e=f.f.l()
w=f.r
d.f=w==null?p:w.l()}switch(e.a){case 0:break
case 1:w=d.z
v=C.cC()
v=C.ep(A.L,!1,f.d.l(),A.aD,"",n,40,A.bl,A.u,"",0.2,v,p,"","",0,!1,"",0,D.be,m,2,o,0,0,"",D.cm,D.cQ,0.84,0.08,0.3)
u=C.cC()
A.d.v(w,B.a([v,C.ep(A.L,!1,f.e.l(),A.aD,"",n,20,A.bl,A.cv,"",0.12,u,p,"","",0,!1,"",0,D.be,m,2,"Click to add subtitle",0,0,"",D.cm,D.cQ,0.76,0.12,0.58)],x.u))
break
case 2:w=d.z
v=C.cC()
v=C.ep(A.bg,!1,f.d.l(),A.aD,"",n,32,A.bl,A.u,"",0.14,v,p,"","",0,!1,"",0,D.be,m,2,o,0,0,"",D.cm,D.cQ,0.88,0.06,0.06)
u=C.cC()
A.d.v(w,B.a([v,C.ep(A.bg,!0,f.e.l(),A.aD,"",n,20,A.bl,A.cv,"",0.68,u,p,"","",0,!1,"",0,D.be,m,2,"\u2022 Tap text to select, then Edit to type\n\u2022 Use Format for size & color\n\u2022 Add images and shapes from Insert",0,0,"",D.cm,D.cQ,0.88,0.06,0.24)],x.u))
break
case 3:w=d.z
v=C.cC()
v=C.ep(A.bg,!1,f.d.l(),A.aD,"",n,30,A.bl,A.u,"",0.12,v,p,"","",0,!1,"",0,D.be,m,2,"Two Column Slide",0,0,"",D.cm,D.cQ,0.88,0.06,0.06)
u=C.cC()
t=f.e
u=C.ep(A.bg,!0,t.l(),A.aD,"",n,18,A.bl,A.a5,"",0.7,u,p,"","",0,!1,"",0,D.be,m,2,"Left column\n\n\u2022 Point A\n\u2022 Point B",0,0,"",D.cm,D.cQ,0.42,0.06,0.22)
s=C.cC()
A.d.v(w,B.a([v,u,C.ep(A.bg,!0,t.l(),A.aD,"",n,18,A.bl,A.a5,"",0.7,s,p,"","",0,!1,"",0,D.be,m,2,"Right column\n\n\u2022 Point C\n\u2022 Point D",0,0,"",D.cm,D.cQ,0.42,0.52,0.22)],x.u))
break
case 4:w=f.c
d.e=w.l()
d.f=w.j(0.85).l()
A.d.J(d.z,C.ep(A.L,!1,4294967295,A.aD,"",n,42,A.bl,A.u,"",0.2,C.cC(),p,"","",0,!1,"",0,D.be,m,2,"Section Header",0,0,"",D.cm,D.cQ,0.84,0.08,0.38))
break
case 5:w=d.z
v=C.cC()
v=C.ep(A.bg,!1,f.d.l(),A.aD,"",n,30,A.bl,A.u,"",0.12,v,p,"","",0,!1,"",0,D.be,m,2,"Compare",0,0,"",D.cm,D.cQ,0.88,0.06,0.06)
u=C.cC()
t=f.c
u=C.ep(A.bg,!1,l,A.aD,"",t.j(0.12).l(),24,A.bl,A.a5,"",0.68,u,p,"","",0,!1,"",0,D.be,t.l(),2,"",0,0,"",D.cm,D.f0,0.42,0.06,0.22)
s=C.cC()
r=f.e
s=C.ep(A.bg,!1,r.l(),A.aD,"",n,20,A.bl,A.P,"",0.6,s,p,"","",0,!1,"",0,D.be,m,2,"Option A",0,0,"",D.cm,D.cQ,0.38,0.08,0.26)
q=C.cC()
t=C.ep(A.bg,!1,l,A.aD,"",t.j(0.06).l(),24,A.bl,A.a5,"",0.68,q,p,"","",0,!1,"",0,D.be,t.j(0.5).l(),2,"",0,0,"",D.cm,D.f0,0.42,0.52,0.22)
q=C.cC()
A.d.v(w,B.a([v,u,s,t,C.ep(A.bg,!1,r.l(),A.aD,"",n,20,A.bl,A.P,"",0.6,q,p,"","",0,!1,"",0,D.be,m,2,"Option B",0,0,"",D.cm,D.cQ,0.38,0.54,0.26)],x.u))
break
case 6:w=d.z
v=C.cC()
v=C.ep(A.L,!1,f.d.l(),A.aD,"",n,36,A.bl,A.u,"",0.35,v,p,"","",0,!1,"",0,D.be,m,2,"TERM / QUESTION",0,0,"",D.cm,D.cQ,0.8,0.1,0.12)
u=C.cC()
A.d.v(w,B.a([v,C.ep(A.L,!1,f.e.l(),A.aD,"",n,22,A.bl,A.cv,"",0.35,u,p,"","",0,!1,"",0,D.be,m,2,"Definition or answer \u2014 flip mentally when presenting",0,0,"",D.cm,D.cQ,0.8,0.1,0.52)],x.u))
break
case 7:w=d.z
v=C.cC()
v=C.ep(A.bg,!1,f.d.l(),A.aD,"",n,28,A.bl,A.u,"",0.18,v,p,"","",0,!1,"",0,D.be,m,2,"Quiz Question",0,0,"",D.cm,D.cQ,0.88,0.06,0.06)
u=C.cC()
A.d.v(w,B.a([v,C.ep(A.bg,!1,f.e.l(),A.aD,"",n,20,A.bl,A.a5,"",0.62,u,p,"","",0,!1,"",0,D.be,m,2,"A) Answer choice\nB) Answer choice\nC) Answer choice\nD) Answer choice",0,0,"",D.cm,D.cQ,0.84,0.08,0.28)],x.u))
break
case 8:w=d.z
v=C.cC()
v=C.ep(A.bg,!1,f.d.l(),A.aD,"",n,26,A.bl,A.u,"",0.1,v,p,"","",0,!1,"",0,D.be,m,2,"Worksheet / Assignment",0,0,"",D.cm,D.cQ,0.88,0.06,0.04)
u=C.cC()
A.d.v(w,B.a([v,C.ep(A.bg,!1,f.e.l(),A.aD,"",n,18,A.bl,A.a5,"",0.78,u,p,"","",0,!1,"",0,D.be,m,2,"Name: _______________\nDate: _______________\n\n1. _________________________________\n\n2. _________________________________\n\n3. _________________________________",0,0,"",D.cm,D.cQ,0.88,0.06,0.16)],x.u))
break}},
hDu(d){return A.d.dL(D.a1W,new C.cdt(d),new C.cdu())},
hDr(d){var w,v,u,t,s,r,q,p
if(A.a.i(d).length===0)return B.a([],x.D)
try{w=A.R.aG(0,d,null)
if(!x.j.b(w)){t=B.a([],x.D)
return t}v=B.a([],x.D)
for(t=J.aV(w),s=x.N,r=x.z,q=x.f;t.C();){u=t.gT(t)
if(!q.b(u))continue
try{J.ch(v,C.Vw(B.a1(u,s,r)))}catch(p){}}return v}catch(p){t=B.a([],x.D)
return t}},
fSt(d,e){var w,v,u,t=B.T(x.N,x.I),s=new C.cdo(t)
for(w=J.aV(d);w.C();)s.$1(w.gT(w))
for(w=e.length,v=0;v<e.length;e.length===w||(0,B.L)(e),++v)s.$1(e[v])
w=t.$ti.k("bc<2>")
u=B.B(new B.bc(t,w),w.k("J.E"))
A.d.b0(u,new C.cdn())
return u},
h82(d,e){var w,v,u=d.length
if(u===0)return e
w=e.length
if(w===0)return d
v=new C.cdj()
if(u!==w)return u>=w?d:e
return v.$1(d).cc(v.$1(e))?d:e},
aqy(d){return C.hDp(d)},
hDp(d){var w=0,v=B.j(x.R),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$aqy=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=A.a.i(d.toLowerCase())
l=new C.cdm()
k=x.D
j=B.a([],k)
t=4
g=l
w=7
return B.b(B.a1Z(m),$async$aqy)
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
return B.b(B.aA(),$async$aqy)
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
case 11:o=l.$1($.h81.h(0,m))
n=C.fSt(C.fSt(j,r),o)
if(n.length===0){u=C.h82(C.h82(j,r),o)
w=1
break}u=n
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$aqy,v)},
cdi(d){return C.hDo(d)},
hDo(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o
var $async$cdi=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.aA(),$async$cdi)
case 7:r=f
q=r.t4("ngmy_slides_deleted_"+A.a.i(d.toLowerCase()))
if(q==null)q=A.T
q=B.kB(q,B.U(q).c)
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
return B.i($async$cdi,v)},
b0t(d,e){return C.hDq(d,e)},
hDq(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m
var $async$b0t=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.aA(),$async$b0t)
case 6:s=g
q=s.t4("ngmy_slides_deleted_"+A.a.i(d.toLowerCase()))
if(q==null)q=B.a([],x.s)
A.d.J(q,e)
r=q
p=A.a.i(d.toLowerCase())
o=J.ad(r)>500?J.L_(r,J.ad(r)-500):r
w=7
return B.b(s.au("StringList","ngmy_slides_deleted_"+p,o),$async$b0t)
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
return B.i($async$b0t,v)},
Vx(d,e){return C.hDs(d,e)},
hDs(a3,a4){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$Vx=B.e(function(a5,a6){if(a5===1){s.push(a6)
w=t}for(;;)switch(w){case 0:a0=A.a.i(a3.toLowerCase())
if(J.ad(a0)===0){w=1
break}p=$.h80.h(0,a0)
w=p==null?3:4
break
case 3:w=5
return B.b(C.aqy(a3),$async$Vx)
case 5:p=a6
case 4:w=6
return B.b(C.cdi(a3),$async$Vx)
case 6:o=a6
n=B.T(x.N,x.I)
for(m=J.aV(p);m.C();){l=m.gT(m)
k=l.a
if(A.a.i(k).length!==0)n.n(0,k,l)}for(m=a4.length,j=0;j<a4.length;a4.length===m||(0,B.L)(a4),++j){i=a4[j]
l=i.a
if(A.a.i(l).length===0)continue
h=n.h(0,l)
if(h!=null){k=h.f
g=i.f
f=k.a
if(f<=g.gbo())k=f===g.gbo()&&k.b>g.gcz()
else k=!0
k=!k}else k=!0
if(k)n.n(0,l,i)}m=n.$ti.k("bc<2>")
l=m.k("a2<J.E>")
e=B.B(new B.a2(new B.bc(n,m),new C.cdp(o),l),l.k("J.E"))
A.d.b0(e,new C.cdq())
$.h80.n(0,a0,e)
n=B.U(e).k("K<1,a3<n,@>>")
n=B.B(new B.K(e,new C.cdr(),n),n.k("ak.E"))
r=A.R.ao(n,null)
$.h81.n(0,a0,r)
t=8
w=11
return B.b(B.agW(a0,r),$async$Vx)
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
return B.b(B.aA(),$async$Vx)
case 16:q=a6
w=17
return B.b(q.au("String","ngmy_slides_decks_"+A.a.i(a3.toLowerCase()),r),$async$Vx)
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
return B.i($async$Vx,v)},
Ip:function Ip(d,e){this.a=d
this.b=e},
aqw:function aqw(d,e){this.a=d
this.b=e},
uy:function uy(d,e){this.a=d
this.b=e},
mt:function mt(d,e){this.a=d
this.b=e},
hx:function hx(d,e){this.a=d
this.b=e},
eJ:function eJ(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){var _=this
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
lD:function lD(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
cdc:function cdc(){},
cdd:function cdd(){},
cdb:function cdb(){},
i_:function i_(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3){var _=this
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
cd1:function cd1(){},
cd2:function cd2(){},
ccZ:function ccZ(){},
cd_:function cd_(){},
cd0:function cd0(){},
jD:function jD(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
cdt:function cdt(d){this.a=d},
cdu:function cdu(){},
cdo:function cdo(d){this.a=d},
cdn:function cdn(){},
cdj:function cdj(){},
cdk:function cdk(){},
cdl:function cdl(){},
cdm:function cdm(){},
cdp:function cdp(d){this.a=d},
cdq:function cdq(){},
cdr:function cdr(){},
i1O(d,e){var w=x.N,v=B.T(w,x.F)
w=new C.fAK(e,v,d,B.aX(w))
w.$1(new C.fAG())
w.$1(new C.fAH())
w.$1(new C.fAI())
w.$1(new C.fAJ())
return v},
fAK:function fAK(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fAG:function fAG(){},
fAH:function fAH(){},
fAI:function fAI(){},
fAJ:function fAJ(){},
b0q:function b0q(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cd7:function cd7(d){this.a=d},
cd6:function cd6(){},
cd8:function cd8(){},
cd9:function cd9(d,e){this.a=d
this.b=e},
cda:function cda(d){this.a=d},
anJ:function anJ(d,e){this.c=d
this.a=e},
biv:function biv(d,e){var _=this
_.d=$
_.bq$=d
_.a8$=e
_.c=_.a=null},
dFv:function dFv(){},
aKv:function aKv(){},
cdf(d,e,f){var w=0,v=B.j(x.y),u,t
var $async$cdf=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:if(f){u=!0
w=1
break}t=A.a.i(e)
if(t.length===0){if(d.e!=null)d.I(x.q).f.S(D.eRV)
u=!1
w=1
break}u=B.kS(!1,d,t,!1,null,A.a4v,null)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$cdf,v)},
hDm(d){var w=A.d.bd(D.GK,new C.cdg(d))
if(w<0)return!0
return w>=4},
hDn(d){var w=A.d.bd($.bDp(),new C.cdh(d))
if(w<0)return!0
return w>=5},
cdg:function cdg(d){this.a=d},
cdh:function cdh(d){this.a=d},
i3t(d,e,f){var w,v=null,u=""+f,t="ngmy-pdf-"+A.a.gX(d)+"-"+u,s=f>0?d+"#page="+u:d
$.yq()
$.q7().pR(t,new C.fDy(s),!0)
u=B.a([B.DA(v,A.q9,t)],x.p)
if(e.length!==0){w=B.m(4)
u.push(B.ao(v,B.p(v,B.d(e,v,v,v,v,v,v,D.f1m,v,v,v),A.f,v,v,new B.o(A.aX,v,v,w,v,v,A.n),v,v,v,v,A.nc,v,v,v),v,v,4,v,4,v))}return new B.an(A.W,v,A.b0,A.r,u,v)},
fDy:function fDy(d){this.a=d},
i34(){return C.fZn()},
i01(){return C.bBl()},
i24(){return C.fZe()},
aOI(d,e,f){var w=0,v=B.j(x.H),u
var $async$aOI=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:w=e==="__ngmy_slides_pdf_staged__"?3:4
break
case 3:w=5
return B.b(C.fCE(d,f),$async$aOI)
case 5:w=1
break
case 4:if(d.e!=null)d.I(x.q).f.S(B.b2(null,null,null,null,null,A.r,null,B.d(e,null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$aOI,v)},
fCE(d,e){var w=0,v=B.j(x.H),u
var $async$fCE=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:u=$.bzw
if(u==null)u=e+".pdf"
w=2
return B.b(B.bR(A.K,null,new C.fCF(u,e==="Invoice"),d,!0,!1,!0,null,!1,!1,x.H),$async$fCE)
case 2:return B.h(null,v)}})
return B.i($async$fCE,v)},
fCF:function fCF(d,e){this.a=d
this.b=e},
acX:function acX(d,e,f){this.c=d
this.d=e
this.a=f},
eoI:function eoI(d,e){this.a=d
this.b=e},
eoJ:function eoJ(d,e){this.a=d
this.b=e},
eoK:function eoK(d,e){this.a=d
this.b=e},
eoL:function eoL(d){this.a=d},
ade:function ade(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
b0p(d,e,f,g,h,i,j,k,l,m,n,o){return new C.b0o(g,m,f,d,e,h,l,k,j,o,i,null)},
hkf(d){return B.cp(new C.fAF(d))},
fZp(d){switch(d.a){case 0:return"\u23ed\ufe0f"
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
i3c(d){if(d===D.cm)return"None"
return C.fZp(d)},
bA1(d,e,f,g){return C.hUf(d,e,f,g)},
hUf(d,e,f,g){var w=0,v=B.j(x.H),u,t,s
var $async$bA1=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:s={}
if(d.e==null){w=1
break}t=B.a5(d,!0)
if($.fWh&&t.pv())t.eK()
$.fWh=!0
s.a=null
w=3
return B.b(B.hS(A.bi,!0,"Animation preview",d,new C.flb(s,e,g,f),null,A.eE,!0,x.H),$async$bA1)
case 3:s=s.a
if(s!=null)s.a7(0)
$.fWh=!1
case 1:return B.h(u,v)}})
return B.i($async$bA1,v)},
fMZ(d,e,f){var w=0,v=B.j(x.H),u,t,s,r
var $async$fMZ=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:e.$0()
if(d.e==null){w=1
break}t=A.k.D(B.aI(d,A.bU,x.w).w.a.a*0.88,280,440)
s=f===D.cm
r=s?"\u23ed\ufe0f None \u2014 no slide transition":C.fZp(f)+" Slide transition preview"
s=s?Af.F3:A.va
w=3
return B.b(C.bA1(d,s,new B.a7(t,t*0.56,B.bw(B.m(14),new C.aI6(f,null),A.aq),null),r),$async$fMZ)
case 3:case 1:return B.h(u,v)}})
return B.i($async$fMZ,v)},
hjy(d,e,f){var w,v,u=null,t=A.ct.aw(0,A.k.D(e,0,1))
switch(d.a){case 0:return f
case 1:case 13:case 18:return B.dc(f,t)
case 2:case 17:return B.dU(B.dc(f,t),new B.u((1-t)*48,0))
case 3:return B.dU(B.dc(f,t),new B.u(-(1-t)*48,0))
case 4:case 21:return B.dU(B.dc(f,t),new B.u(0,(1-t)*36))
case 5:return B.dU(B.dc(f,t),new B.u(0,-(1-t)*36))
case 6:case 16:return B.ec(A.A,B.dc(f,t),0.5+t*0.5,u,u)
case 7:return B.ec(A.A,B.dc(f,t),1.4-t*0.4,u,u)
case 8:w=B.dp()
v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
w.fA((1-t)*1.2)
return B.fs(A.A,B.dc(f,t),u,w,!0)
case 9:w=B.dp()
v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
w.jX((1-t)*1.2)
return B.fs(A.A,B.dc(f,t),u,w,!0)
case 10:case 19:w=B.dp()
v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.002
w.mI((1-t)*0.8)
v=0.6+t*0.4
w.jH(v,v,v,1)
return B.fs(A.A,B.dc(f,t),u,w,!0)
case 11:case 12:case 14:case 15:case 20:return B.dU(B.dc(f,t),new B.u((1-t)*24,0))}},
bCV(d,e,f){var w=0,v=B.j(x.H),u,t,s,r
var $async$bCV=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:e.$0()
if(d.e==null){w=1
break}t=A.k.D(B.aI(d,A.bU,x.w).w.a.a*0.88,300,440)
s=f===D.cm
r=s?"\u23ed\ufe0f None \u2014 no element animation":C.fZp(f)+" Element animation preview"
s=s?Af.F3:A.va
w=3
return B.b(C.bA1(d,s,new B.a7(t,t*0.62,B.bw(B.m(14),new C.ayQ(f,null),A.aq),null),r),$async$bCV)
case 3:case 1:return B.h(u,v)}})
return B.i($async$bCV,v)},
i3b(d){var w,v,u,t,s=$.afC.W(0,d)
if(s!=null){$.afC.n(0,d,s)
return s}w=A.cG.aJ(A.a.b1(d,A.a.cJ(d,",")+1))
$.afC.n(0,d,w)
v=$.fX4=$.fX4+w.length
u=B.a4($.afC).k("cu<1>")
for(;;){if(!(v>41943040&&$.afC.a>1))break
t=new B.cu($.afC,u).gaf(0)
if(!t.C())B.ba(B.fA())
v-=$.afC.W(0,t.gT(0)).length
$.fX4=v}return w},
i2T(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=B.af("\\*([^*]+)\\*|\\^([^^]+)\\^|~([^~]+)~",!0,!1,!1,!1).kS(0,d),j=B.B(k,B.a4(k).k("J.E"))
if(j.length===0)return l
w=e.r
if(w==null)w=24
v=B.a([],x.aF)
for(k=j.length,u=w*0.62,t=w*2.4,s=w*1.6,r=0,q=0;q<j.length;j.length===k||(0,B.L)(j),++q){p=j[q].b
o=p.index
if(o>r){n=A.a.ap(d,r,o)
m=f.$1(e)
v.push(new B.eq(n,l,l,A.cO,l,l,l,l,l,l,m))}n=p[1]
if(n!=null){m=f.$1(e.Si(s,A.u))
v.push(new B.eq(n,l,l,A.cO,l,l,l,l,l,l,m))}else{n=p[2]
if(n!=null){m=f.$1(e.Si(t,A.u))
v.push(new B.eq(n,l,l,A.cO,l,l,l,l,l,l,m))}else{n=p[3]
m=f.$1(e.Si(u,A.cv))
v.push(new B.eq(n,l,l,A.cO,l,l,l,l,l,l,m))}}r=o+p[0].length}if(r<d.length){k=A.a.b1(d,r)
v.push(B.dh(l,l,l,l,l,l,l,l,l,f.$1(e),k))}return v},
a1Y(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=x.v
switch(d){case"circle":m=new B.aO($.W().r,A.ap,n,n,B.a([],m))
m.E(new B.k_(e))
return m
case"rounded":m=new B.aO($.W().r,A.ap,n,n,B.a([],m))
w=e.gdO()*0.18
m.E(new B.iU(B.bx(e,new B.aT(w,w))))
return m
case"triangle":m=new B.aO($.W().r,A.ap,n,n,B.a([],m))
m.E(new B.b5(e.gbP().a,e.b))
w=e.d
m.E(new B.ap(e.c,w))
m.E(new B.ap(e.a,w))
m.E(new B.bF())
return m
case"hexagon":w=$.W()
m=B.a([],m)
v=new B.aO(w.r,A.ap,n,n,m)
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
case"diamond":m=new B.aO($.W().r,A.ap,n,n,B.a([],m))
m.E(new B.b5(e.gbP().a,e.b))
m.E(new B.ap(e.c,e.gbP().b))
m.E(new B.ap(e.gbP().a,e.d))
m.E(new B.ap(e.a,e.gbP().b))
m.E(new B.bF())
return m
case"arch":m=new B.aO($.W().r,A.ap,n,n,B.a([],m))
w=e.a
u=e.d
m.E(new B.b5(w,u))
t=e.c
s=(t-w)/2
p=e.b+s
m.E(new B.ap(w,p))
m.b9_(new B.u(t,p),new B.aT(s,s))
m.E(new B.ap(t,u))
m.E(new B.bF())
return m
default:m=new B.aO($.W().r,A.ap,n,n,B.a([],m))
m.E(new B.o_(e))
return m}},
fye(d,e,f){return B.cp(new C.fyf(D.eKB.t(0,d),d,f,e))},
b0o:function b0o(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
cd5:function cd5(d){this.a=d},
cd4:function cd4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cd3:function cd3(){},
b0l:function b0l(d,e){this.b=d
this.a=e},
fAF:function fAF(d){this.a=d},
fAE:function fAE(d,e){this.a=d
this.b=e},
flb:function flb(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fl9:function fl9(d){this.a=d},
fla:function fla(d,e){this.a=d
this.b=e},
aI6:function aI6(d,e){this.c=d
this.a=e},
btI:function btI(d,e){var _=this
_.d=$
_.bq$=d
_.a8$=e
_.c=_.a=null},
f3q:function f3q(d,e,f){this.a=d
this.b=e
this.c=f},
aIJ:function aIJ(d,e){this.b=d
this.a=e},
Uy:function Uy(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
biI:function biI(d,e){var _=this
_.d=$
_.bq$=d
_.a8$=e
_.c=_.a=null},
dRw:function dRw(d){this.a=d},
dRv:function dRv(d){this.a=d},
dRu:function dRu(d){this.a=d},
Io:function Io(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ccY:function ccY(d){this.a=d},
ccX:function ccX(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ayQ:function ayQ(d,e){this.c=d
this.a=e},
bdb:function bdb(){this.d=0
this.c=this.a=null},
d40:function d40(d){this.a=d},
d4_:function d4_(d){this.a=d},
a7k:function a7k(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bjm:function bjm(d,e){var _=this
_.d=null
_.bq$=d
_.a8$=e
_.c=_.a=null},
ecd:function ecd(d,e,f){this.a=d
this.b=e
this.c=f},
aZj:function aZj(d,e,f,g){var _=this
_.c=d
_.e=e
_.f=f
_.a=g},
bel:function bel(d,e,f){this.b=d
this.c=e
this.a=f},
bpi:function bpi(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
eTy:function eTy(){},
fyf:function fyf(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bqi:function bqi(d,e,f){this.b=d
this.c=e
this.a=f},
aKJ:function aKJ(){},
aLe:function aLe(){},
aMB:function aMB(){},
fBF(){var w=0,v=B.j(x.a6),u,t,s,r
var $async$fBF=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.wZ.c5().LI(D.daL,A.tG,!0),$async$fBF)
case 3:r=e
if(r==null||J.cm(r.a)){u=null
w=1
break}t=J.fo(r.a)
s=t.c
if(s==null)throw B.V("That file could not be opened. Try another file.")
if(s.length>8388608)throw B.V("That file is too big. Use a file under 8 MB.")
u=C.i2N(t.b,s)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fBF,v)},
i2N(d,e){var w,v=d.toLowerCase()
if(A.a.cb(v,".pdf"))return new C.a7D(d,new B.a_A(A.cT.gcw().aJ(e),"application/pdf"),"")
if(A.a.cb(v,".docx")){w=C.hVR(e)
if(A.a.i(w).length===0)throw B.V("No readable words were found in that Word file.")
return new C.a7D(d,null,w.length>6e4?A.a.ap(w,0,6e4):w)}w=A.c6.Kv(0,e,!0)
if(A.a.i(w).length===0)throw B.V("That file is empty.")
return new C.a7D(d,null,w.length>6e4?A.a.ap(w,0,6e4):w)},
hVR(d){var w,v,u,t,s,r,q,p,o=null,n=new C.cw7().cI4(B.r8(d,A.hT,o,o),o,o,!1).cJO(0,"word/document.xml")
if(n==null)return""
w=n.cRQ()
v=A.c6.Kv(0,w==null?$.hmu():w,!0).split("</w:p>")
u=new B.fd("")
for(w=v.length,t=x.N,s=0;s<w;++s){r=v[s]
q=B.af("<w:t[^>]*>([^<]*)</w:t>",!0,!1,!1,!1).kS(0,r)
p=A.a.i(B.cD(q,new C.fo0(),B.a4(q).k("J.E"),t).fX(0))
if(p.length!==0){q=B.aK(p,"&lt;","<")
q=B.aK(q,"&gt;",">")
q=B.aK(q,"&quot;",'"')
q=B.aK(q,"&apos;","'")
q=B.aK(q,"&amp;","&")+"\n"
u.a+=q}}w=u.a
return w.charCodeAt(0)==0?w:w},
a7D:function a7D(d,e,f){this.a=d
this.b=e
this.c=f},
fo0:function fo0(){},
hDt(d,e,f,g,h,i,j,k,l){return new C.Nz(l,e,d,g,f,i,h,j,k,null)},
Nz:function Nz(d,e,f,g,h,i,j,k,l,m){var _=this
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
aDG:function aDG(d,e,f,g,h,i,j,k,l){var _=this
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
_.a8$=l
_.c=_.a=null},
euW:function euW(d){this.a=d},
euU:function euU(){},
euV:function euV(d){this.a=d},
erj:function erj(){},
erk:function erk(){},
erl:function erl(d,e){this.a=d
this.b=e},
esU:function esU(d){this.a=d},
esI:function esI(){},
esJ:function esJ(){},
eqH:function eqH(){},
eu1:function eu1(d){this.a=d},
euS:function euS(d,e){this.a=d
this.b=e},
esS:function esS(d,e){this.a=d
this.b=e},
euF:function euF(d){this.a=d},
euG:function euG(){},
euH:function euH(){},
euI:function euI(d){this.a=d},
euJ:function euJ(){},
eq5:function eq5(d){this.a=d},
euT:function euT(){},
es0:function es0(d,e){this.a=d
this.b=e},
eq3:function eq3(d){this.a=d},
eq4:function eq4(d){this.a=d},
esn:function esn(d){this.a=d},
eso:function eso(d,e,f){this.a=d
this.b=e
this.c=f},
esp:function esp(d){this.a=d},
es_:function es_(){},
erZ:function erZ(d){this.a=d},
erX:function erX(){},
erW:function erW(d){this.a=d},
erY:function erY(){},
erf:function erf(d){this.a=d},
erg:function erg(d){this.a=d},
es6:function es6(d){this.a=d},
es1:function es1(d){this.a=d},
es2:function es2(d){this.a=d},
es3:function es3(d){this.a=d},
es4:function es4(d){this.a=d},
es5:function es5(d){this.a=d},
es7:function es7(d,e){this.a=d
this.b=e},
eq7:function eq7(){},
eq8:function eq8(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
esi:function esi(){},
esj:function esj(d,e){this.a=d
this.b=e},
esg:function esg(d,e,f){this.a=d
this.b=e
this.c=f},
esh:function esh(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
esa:function esa(d,e,f){this.a=d
this.b=e
this.c=f},
esb:function esb(d,e,f){this.a=d
this.b=e
this.c=f},
esc:function esc(d){this.a=d},
esd:function esd(d,e){this.a=d
this.b=e},
ese:function ese(d,e){this.a=d
this.b=e},
esf:function esf(d,e){this.a=d
this.b=e},
es9:function es9(d,e){this.a=d
this.b=e},
esl:function esl(d){this.a=d},
esm:function esm(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
esk:function esk(d){this.a=d},
esD:function esD(){},
esE:function esE(){},
esF:function esF(){},
esG:function esG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
esA:function esA(d){this.a=d},
esC:function esC(){},
esB:function esB(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
esy:function esy(d,e,f){this.a=d
this.b=e
this.c=f},
esz:function esz(d,e){this.a=d
this.b=e},
esH:function esH(){},
es8:function es8(d,e){this.a=d
this.b=e},
eqo:function eqo(){},
eqp:function eqp(d,e,f){this.a=d
this.b=e
this.c=f},
eqq:function eqq(d){this.a=d},
eqr:function eqr(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eqn:function eqn(d){this.a=d},
esN:function esN(d){this.a=d},
esM:function esM(d,e){this.a=d
this.b=e},
esL:function esL(d,e){this.a=d
this.b=e},
esK:function esK(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
esO:function esO(d,e){this.a=d
this.b=e},
ep2:function ep2(d,e){this.a=d
this.b=e},
eqm:function eqm(d,e){this.a=d
this.b=e},
eqk:function eqk(d){this.a=d},
esW:function esW(d,e,f){this.a=d
this.b=e
this.c=f},
eqg:function eqg(d,e){this.a=d
this.b=e},
eqf:function eqf(d){this.a=d},
esV:function esV(d,e,f){this.a=d
this.b=e
this.c=f},
eq6:function eq6(d){this.a=d},
eqI:function eqI(){},
euD:function euD(d,e){this.a=d
this.b=e},
euE:function euE(d,e,f){this.a=d
this.b=e
this.c=f},
eu2:function eu2(d,e,f){this.a=d
this.b=e
this.c=f},
ep3:function ep3(d){this.a=d},
ep0:function ep0(d,e){this.a=d
this.b=e},
eoR:function eoR(d,e){this.a=d
this.b=e},
eoO:function eoO(d){this.a=d},
eoN:function eoN(d,e){this.a=d
this.b=e},
eoP:function eoP(d,e){this.a=d
this.b=e},
eqi:function eqi(d){this.a=d},
eqj:function eqj(d,e){this.a=d
this.b=e},
eqh:function eqh(d){this.a=d},
epv:function epv(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
epw:function epw(d,e){this.a=d
this.b=e},
epA:function epA(d,e){this.a=d
this.b=e},
epB:function epB(d){this.a=d},
epy:function epy(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
epz:function epz(d){this.a=d},
epx:function epx(){},
epu:function epu(d,e,f){this.a=d
this.b=e
this.c=f},
esx:function esx(d,e){this.a=d
this.b=e},
euM:function euM(d){this.a=d},
euN:function euN(d,e){this.a=d
this.b=e},
euO:function euO(d){this.a=d},
euP:function euP(d,e,f){this.a=d
this.b=e
this.c=f},
euL:function euL(d){this.a=d},
eui:function eui(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
euh:function euh(d,e,f){this.a=d
this.b=e
this.c=f},
eug:function eug(){},
euf:function euf(d,e,f){this.a=d
this.b=e
this.c=f},
eue:function eue(d,e){this.a=d
this.b=e},
eub:function eub(d,e,f){this.a=d
this.b=e
this.c=f},
eu9:function eu9(d){this.a=d},
eua:function eua(d){this.a=d},
eud:function eud(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
euc:function euc(d){this.a=d},
erb:function erb(d,e){this.a=d
this.b=e},
era:function era(d,e){this.a=d
this.b=e},
eu3:function eu3(){},
euC:function euC(d,e){this.a=d
this.b=e},
euA:function euA(d){this.a=d},
euB:function euB(d){this.a=d},
eoW:function eoW(d,e){this.a=d
this.b=e},
eoU:function eoU(d){this.a=d},
eoV:function eoV(d){this.a=d},
eoX:function eoX(d,e){this.a=d
this.b=e},
eoY:function eoY(d,e,f){this.a=d
this.b=e
this.c=f},
ep1:function ep1(d,e){this.a=d
this.b=e},
eoT:function eoT(d,e,f){this.a=d
this.b=e
this.c=f},
eoS:function eoS(d){this.a=d},
esT:function esT(d,e,f){this.a=d
this.b=e
this.c=f},
euK:function euK(d,e,f){this.a=d
this.b=e
this.c=f},
ere:function ere(d,e,f){this.a=d
this.b=e
this.c=f},
erd:function erd(){},
epE:function epE(d,e,f){this.a=d
this.b=e
this.c=f},
epF:function epF(d){this.a=d},
eoQ:function eoQ(d,e){this.a=d
this.b=e},
eqG:function eqG(d,e){this.a=d
this.b=e},
eoZ:function eoZ(d,e){this.a=d
this.b=e},
ep7:function ep7(d){this.a=d},
ep8:function ep8(d,e){this.a=d
this.b=e},
ep9:function ep9(d,e){this.a=d
this.b=e},
ep6:function ep6(d){this.a=d},
epk:function epk(d,e){this.a=d
this.b=e},
ep5:function ep5(d){this.a=d},
epn:function epn(d){this.a=d},
epo:function epo(d){this.a=d},
epp:function epp(d){this.a=d},
epq:function epq(d){this.a=d},
epr:function epr(d){this.a=d},
eps:function eps(){},
ept:function ept(){},
epa:function epa(d){this.a=d},
epb:function epb(d){this.a=d},
epc:function epc(d){this.a=d},
epd:function epd(d){this.a=d},
epe:function epe(d){this.a=d},
epf:function epf(d){this.a=d},
epg:function epg(d){this.a=d},
eph:function eph(d){this.a=d},
epi:function epi(d){this.a=d},
epj:function epj(d){this.a=d},
epl:function epl(d){this.a=d},
epm:function epm(d,e){this.a=d
this.b=e},
eqF:function eqF(d,e,f){this.a=d
this.b=e
this.c=f},
eqE:function eqE(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eqD:function eqD(d,e,f){this.a=d
this.b=e
this.c=f},
eqC:function eqC(d,e){this.a=d
this.b=e},
ep_:function ep_(d,e){this.a=d
this.b=e},
epI:function epI(d){this.a=d},
epH:function epH(d){this.a=d},
epG:function epG(d,e){this.a=d
this.b=e},
epJ:function epJ(d){this.a=d},
epK:function epK(d){this.a=d},
epL:function epL(d,e){this.a=d
this.b=e},
eql:function eql(d){this.a=d},
esw:function esw(d,e){this.a=d
this.b=e},
esv:function esv(d,e){this.a=d
this.b=e},
esu:function esu(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ess:function ess(d){this.a=d},
est:function est(d,e){this.a=d
this.b=e},
esq:function esq(){},
esr:function esr(){},
eu4:function eu4(){},
eu5:function eu5(d,e){this.a=d
this.b=e},
eu6:function eu6(){},
eu7:function eu7(d){this.a=d},
eu8:function eu8(d,e){this.a=d
this.b=e},
ep4:function ep4(d,e){this.a=d
this.b=e},
eq9:function eq9(){},
eqa:function eqa(){},
eqb:function eqb(){},
eqe:function eqe(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eqd:function eqd(d,e){this.a=d
this.b=e},
eqc:function eqc(d,e,f){this.a=d
this.b=e
this.c=f},
erF:function erF(d){this.a=d},
erE:function erE(){},
erG:function erG(d,e){this.a=d
this.b=e},
erH:function erH(d,e){this.a=d
this.b=e},
erD:function erD(d){this.a=d},
erI:function erI(d,e){this.a=d
this.b=e},
erC:function erC(d){this.a=d},
erJ:function erJ(d,e){this.a=d
this.b=e},
erB:function erB(d){this.a=d},
erK:function erK(d,e){this.a=d
this.b=e},
erA:function erA(d){this.a=d},
erL:function erL(d,e){this.a=d
this.b=e},
erz:function erz(d,e){this.a=d
this.b=e},
erM:function erM(d,e){this.a=d
this.b=e},
ery:function ery(d){this.a=d},
erN:function erN(d,e){this.a=d
this.b=e},
erx:function erx(d){this.a=d},
erq:function erq(d,e){this.a=d
this.b=e},
err:function err(d){this.a=d},
ers:function ers(d){this.a=d},
erp:function erp(d){this.a=d},
ert:function ert(d,e){this.a=d
this.b=e},
ero:function ero(d){this.a=d},
eru:function eru(d,e){this.a=d
this.b=e},
ern:function ern(d){this.a=d},
erv:function erv(d,e){this.a=d
this.b=e},
erm:function erm(d){this.a=d},
erw:function erw(d){this.a=d},
eqy:function eqy(d){this.a=d},
eqz:function eqz(d){this.a=d},
eqB:function eqB(d){this.a=d},
eqt:function eqt(d){this.a=d},
eqs:function eqs(d,e){this.a=d
this.b=e},
equ:function equ(d,e){this.a=d
this.b=e},
eqv:function eqv(d){this.a=d},
eqw:function eqw(d){this.a=d},
eqx:function eqx(d,e){this.a=d
this.b=e},
eqA:function eqA(d){this.a=d},
euQ:function euQ(d){this.a=d},
euR:function euR(d){this.a=d},
erQ:function erQ(d,e){this.a=d
this.b=e},
erP:function erP(d,e){this.a=d
this.b=e},
erO:function erO(d,e){this.a=d
this.b=e},
erR:function erR(d){this.a=d},
erS:function erS(d){this.a=d},
ete:function ete(d,e){this.a=d
this.b=e},
etf:function etf(d){this.a=d},
etg:function etg(d){this.a=d},
etr:function etr(d){this.a=d},
etC:function etC(d){this.a=d},
etN:function etN(d){this.a=d},
etU:function etU(d){this.a=d},
etV:function etV(d){this.a=d},
etW:function etW(d){this.a=d},
etX:function etX(d){this.a=d},
etY:function etY(d,e){this.a=d
this.b=e},
eth:function eth(d){this.a=d},
eti:function eti(d){this.a=d},
etj:function etj(d){this.a=d},
etk:function etk(d){this.a=d},
etl:function etl(d){this.a=d},
etm:function etm(d){this.a=d},
etn:function etn(d){this.a=d},
eto:function eto(d){this.a=d},
etp:function etp(d){this.a=d},
etq:function etq(d){this.a=d},
ets:function ets(d){this.a=d},
ett:function ett(d){this.a=d},
etu:function etu(d){this.a=d},
etv:function etv(d){this.a=d},
etw:function etw(d){this.a=d},
etx:function etx(d){this.a=d},
ety:function ety(d){this.a=d},
etz:function etz(d){this.a=d},
etA:function etA(d){this.a=d},
et4:function et4(d){this.a=d},
etB:function etB(d){this.a=d},
etc:function etc(d){this.a=d},
etD:function etD(d){this.a=d},
etb:function etb(d,e){this.a=d
this.b=e},
etE:function etE(d,e){this.a=d
this.b=e},
etF:function etF(d,e){this.a=d
this.b=e},
eta:function eta(d,e,f){this.a=d
this.b=e
this.c=f},
et0:function et0(d,e){this.a=d
this.b=e},
etd:function etd(d){this.a=d},
etZ:function etZ(d,e){this.a=d
this.b=e},
eu0:function eu0(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eu_:function eu_(d,e){this.a=d
this.b=e},
etG:function etG(d,e,f){this.a=d
this.b=e
this.c=f},
et9:function et9(d,e,f){this.a=d
this.b=e
this.c=f},
et_:function et_(d,e,f){this.a=d
this.b=e
this.c=f},
esY:function esY(d,e){this.a=d
this.b=e},
etH:function etH(d,e){this.a=d
this.b=e},
et8:function et8(d,e){this.a=d
this.b=e},
esZ:function esZ(d,e){this.a=d
this.b=e},
esX:function esX(d,e){this.a=d
this.b=e},
etI:function etI(d){this.a=d},
et7:function et7(d){this.a=d},
etJ:function etJ(d){this.a=d},
etK:function etK(d){this.a=d},
etL:function etL(d){this.a=d},
etM:function etM(d){this.a=d},
et6:function et6(d){this.a=d},
etO:function etO(d){this.a=d},
etP:function etP(d){this.a=d},
etQ:function etQ(d,e){this.a=d
this.b=e},
et5:function et5(d){this.a=d},
etR:function etR(d,e){this.a=d
this.b=e},
et3:function et3(d){this.a=d},
etS:function etS(d,e){this.a=d
this.b=e},
et2:function et2(d){this.a=d},
etT:function etT(d,e){this.a=d
this.b=e},
et1:function et1(d){this.a=d},
epD:function epD(d,e,f){this.a=d
this.b=e
this.c=f},
epC:function epC(d,e){this.a=d
this.b=e},
eul:function eul(d,e){this.a=d
this.b=e},
euk:function euk(d,e){this.a=d
this.b=e},
eum:function eum(d,e){this.a=d
this.b=e},
euj:function euj(d,e){this.a=d
this.b=e},
eqL:function eqL(d,e){this.a=d
this.b=e},
eqK:function eqK(d){this.a=d},
eqM:function eqM(d,e){this.a=d
this.b=e},
eqJ:function eqJ(d){this.a=d},
eri:function eri(){},
erh:function erh(){},
euy:function euy(d){this.a=d},
eux:function eux(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
euw:function euw(d,e){this.a=d
this.b=e},
eur:function eur(d,e){this.a=d
this.b=e},
euv:function euv(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eus:function eus(d,e){this.a=d
this.b=e},
eun:function eun(d){this.a=d},
euo:function euo(d){this.a=d},
eup:function eup(d){this.a=d},
euq:function euq(d){this.a=d},
eut:function eut(d,e){this.a=d
this.b=e},
euu:function euu(d,e){this.a=d
this.b=e},
euz:function euz(d){this.a=d},
eq2:function eq2(d){this.a=d},
eq1:function eq1(d,e,f){this.a=d
this.b=e
this.c=f},
eq0:function eq0(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
epQ:function epQ(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
epR:function epR(d,e){this.a=d
this.b=e},
epS:function epS(d,e){this.a=d
this.b=e},
epT:function epT(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
epP:function epP(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
epU:function epU(d,e){this.a=d
this.b=e},
epW:function epW(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
epV:function epV(d,e){this.a=d
this.b=e},
epX:function epX(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
epO:function epO(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
epY:function epY(d,e){this.a=d
this.b=e},
epN:function epN(d,e){this.a=d
this.b=e},
epZ:function epZ(d,e){this.a=d
this.b=e},
epM:function epM(d){this.a=d},
eq_:function eq_(d,e){this.a=d
this.b=e},
erU:function erU(d){this.a=d},
erT:function erT(d){this.a=d},
erV:function erV(d,e){this.a=d
this.b=e},
eqZ:function eqZ(d,e){this.a=d
this.b=e},
er_:function er_(d,e){this.a=d
this.b=e},
eqY:function eqY(d,e){this.a=d
this.b=e},
er0:function er0(d,e){this.a=d
this.b=e},
eqX:function eqX(d,e){this.a=d
this.b=e},
er1:function er1(d,e){this.a=d
this.b=e},
eqW:function eqW(d,e){this.a=d
this.b=e},
er2:function er2(d,e){this.a=d
this.b=e},
eqV:function eqV(d,e){this.a=d
this.b=e},
er3:function er3(d,e){this.a=d
this.b=e},
eqU:function eqU(d,e){this.a=d
this.b=e},
er4:function er4(d,e,f){this.a=d
this.b=e
this.c=f},
eqT:function eqT(d,e){this.a=d
this.b=e},
er5:function er5(d,e,f){this.a=d
this.b=e
this.c=f},
eqS:function eqS(d,e){this.a=d
this.b=e},
er6:function er6(d,e){this.a=d
this.b=e},
eqR:function eqR(d,e,f){this.a=d
this.b=e
this.c=f},
eqO:function eqO(d,e){this.a=d
this.b=e},
er7:function er7(d,e){this.a=d
this.b=e},
eqQ:function eqQ(d,e){this.a=d
this.b=e},
er8:function er8(d,e){this.a=d
this.b=e},
eqP:function eqP(d,e,f){this.a=d
this.b=e
this.c=f},
eqN:function eqN(d,e){this.a=d
this.b=e},
er9:function er9(d,e){this.a=d
this.b=e},
erc:function erc(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eoM:function eoM(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
esR:function esR(d,e){this.a=d
this.b=e},
esP:function esP(d){this.a=d},
esQ:function esQ(d,e){this.a=d
this.b=e},
aeL:function aeL(d,e,f){this.a=d
this.b=e
this.c=f},
ayc:function ayc(d,e){this.c=d
this.a=e},
bbY:function bbY(d,e){var _=this
_.e=_.d=$
_.cO$=d
_.b_$=e
_.c=_.a=null},
d_H:function d_H(d){this.a=d},
d_G:function d_G(d){this.a=d},
bcb:function bcb(d,e){this.c=d
this.a=e},
d02:function d02(d){this.a=d},
d03:function d03(d){this.a=d},
Jr:function Jr(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bbX:function bbX(){this.d=!1
this.c=this.a=null},
d_E:function d_E(d){this.a=d},
d_A:function d_A(d){this.a=d},
d_F:function d_F(d){this.a=d},
d_z:function d_z(d){this.a=d},
d_D:function d_D(d){this.a=d},
d_B:function d_B(d){this.a=d},
d_C:function d_C(d,e){this.a=d
this.b=e},
Pe:function Pe(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
a_3:function a_3(d,e,f){this.c=d
this.d=e
this.a=f},
aDJ:function aDJ(d,e,f){var _=this
_.d=$
_.e=d
_.f=null
_.r=!0
_.w=$
_.x=null
_.y=!1
_.z=null
_.bq$=e
_.a8$=f
_.c=_.a=null},
evw:function evw(){},
evm:function evm(d){this.a=d},
evv:function evv(d){this.a=d},
evn:function evn(d){this.a=d},
evo:function evo(d){this.a=d},
evi:function evi(d){this.a=d},
evj:function evj(d,e){this.a=d
this.b=e},
evk:function evk(d){this.a=d},
evl:function evl(d,e,f){this.a=d
this.b=e
this.c=f},
evt:function evt(){},
evu:function evu(d){this.a=d},
evp:function evp(d){this.a=d},
evq:function evq(d){this.a=d},
evr:function evr(d){this.a=d},
evs:function evs(d){this.a=d},
evx:function evx(d,e,f){this.a=d
this.b=e
this.c=f},
evz:function evz(d,e){this.a=d
this.b=e},
evy:function evy(d){this.a=d},
Jy:function Jy(d,e){this.c=d
this.a=e},
bqN:function bqN(d,e){this.b=d
this.a=e},
bgQ:function bgQ(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bgP:function bgP(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aJq:function aJq(){},
aLs:function aLs(){},
bww:function bww(){},
aLt:function aLt(){},
fDz(){var w=0,v=B.j(x.bZ),u,t,s,r,q
var $async$fDz=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.wZ.c5().LI(B.a(["pdf"],x.s),A.tG,!0),$async$fDz)
case 3:q=e
if(q==null||J.cm(q.a)){u=null
w=1
break}t=J.fo(q.a)
s=t.c
if(s==null||s.length===0){u=null
w=1
break}r=A.a.i(t.b)
if(r.length===0)r="document.pdf"
u=new B.bo3(s,"data:application/pdf;base64,"+A.cT.gcw().aJ(s),r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fDz,v)},
i3n(d){var w,v,u,t,s,r
try{w=B.jp(d,0,null)
v=B.af("/Type\\s*/Pages[^>]*?/Count\\s+(\\d+)",!0,!0,!1,!1).cF(w)
if(v!=null){s=v.b[1]
s.toString
u=B.c7(s,null)
if(u!=null&&u>0){s=A.o.D(u,1,200)
return s}}t=B.af("/Type\\s*/Page\\b",!0,!1,!1,!1).kS(0,w).gM(0)
if(t>0){s=J.aQ5(t,1,200)
return s}}catch(r){}return 1},
fDq(d){return C.i3m(d)},
i3m(d){var w=0,v=B.j(x.T),u
var $async$fDq=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(!A.a.a0(d,"data:image")){u=d
w=1
break}u=d
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fDq,v)},
bC6(d,e,f,g){return C.i3w(d,e,f,g)},
i3w(b6,b7,b8,b9){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$bC6=B.e(function(c0,c1){if(c0===1){s.push(c1)
w=t}for(;;)switch(w){case 0:if(!new B.e8(b6,x.co).gaf(0).C()){u=null
w=1
break}t=4
r=A.k.D(b7.a,80,2400)
q=A.k.D(b7.b,80,2400)
p=B.hkQ(b9,new B.at(r,q))
o=1
n=1
m=0
l=0
for(a7=b6.length,a8=0;a8<a7;++a8){k=b6[a8]
if(k==null)continue
a9=o
b0=k.a
o=Math.min(B.lM(a9),b0)
b0=n
a9=k.b
n=Math.min(B.lM(b0),a9)
a9=m
b0=k.a
m=Math.max(B.lM(a9),b0)
b0=l
a9=k.b
l=Math.max(B.lM(b0),a9)}o=A.k.D(o-0.04,0,1)
n=A.k.D(n-0.04,0,1)
m=A.k.D(m+0.04,0,1)
l=A.k.D(l+0.04,0,1)
j=A.k.D(m-o,0.12,1)
i=A.k.D(l-n,0.12,1)
h=A.o.D(A.k.V(800*(i/j)),180,420)
$.W()
g=new B.qU()
f=B.D5(g,null)
a7=B.M()
a7.r=A.qE.gp(0)
f.aZ(new B.a9(0,0,800,0+h),a7)
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
b2.delete()}a0=a2}a3=g.pB()
w=7
return B.b(a3.z8(800,h),$async$bC6)
case 7:a4=c1
a3.q()
w=8
return B.b(a4.hr(A.fY),$async$bC6)
case 8:a5=c1
a4.q()
if(a5==null){u=null
w=1
break}a7=J.eT(A.dD.gaM(a5))
a7=A.cT.gcw().aJ(a7)
u="data:image/png;base64,"+a7
w=1
break
t=2
w=6
break
case 4:t=3
b5=s.pop()
a6=B.aa(b5)
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
return B.i($async$bC6,v)},
aPi(d,e,f){return C.i3k(d,e,f)},
i3k(d,e,f){var w=0,v=B.j(x.go),u,t,s,r,q
var $async$aPi=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:r={}
q=B.a([],x.bA)
r.a=null
r.b=e==null?A.aB:e
r.c=f==null?5.2:f
w=3
return B.b(B.ah9(d,e,f,new C.fDo(r,q),q,"Sign document"),$async$aPi)
case 3:if(!new B.e8(q,x.co).gaf(0).C()||r.a==null){u=null
w=1
break}t=r.a
t.toString
w=4
return B.b(C.bC6(q,t,r.b,r.c),$async$aPi)
case 4:s=h
if(s==null){u=null
w=1
break}u=new C.b0s(s,r.c,r.b)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aPi,v)},
i3u(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h="&amp;",g="&lt;",f="&gt;",e="&quot;",d='<!DOCTYPE html><html><head><meta charset="utf-8"><title>'+C.he2(a0.b)+'</title>\n<style>\n  @page { size: 210mm 297mm; margin: 1.7mm; }\n  * { box-sizing: border-box; }\n  body { font-family: system-ui, sans-serif; background: #fff; color: #111; margin: 0; }\n  h1 { font-size: 14px; margin: 6px 10mm; }\n  .slide { page-break-after: always; width: 100%; height: 293.6mm; border: 1px solid #ddd; position: relative; overflow: hidden; margin: 0 auto 24px; }\n  /* Requested after the margin was already trimmed to near zero: a real\n     zoom-in on the whole slide (frame included), not just less border.\n     `.slide` keeps overflow:hidden so whatever spills past the edge at\n     this scale gets cropped instead of pushing the page layout around.\n     Width and height scale independently \u2014 a separate "wider on the\n     left and right only" request on top of the overall zoom. */\n  .zoom { position: absolute; inset: 0; transform: scaleX(1.0375) scaleY(1.01875); transform-origin: center center; }\n  .el { position: absolute; overflow: hidden; }\n  .txt { white-space: pre-wrap; word-break: break-word; }\n  img { max-width: 100%; max-height: 100%; object-fit: contain; }\n  .pdf { display:flex; flex-direction:column; align-items:center; justify-content:center; height:100%; background:#f8fafc; }\n</style></head><body>\n<h1>'+C.he2(a0.b)+"</h1>\n"
for(w=a0.r,v=0;v<w.length;++v){u=w[v]
d=d+('<div class="slide" style="background:#'+A.a.b1(A.a.aT(A.o.fS(u.e,16),8,"0"),2)+'">\n')+'<div class="zoom">\n'
for(t=u.z,s=t.length,r=0;r<t.length;t.length===s||(0,B.L)(t),++r){q=t[r]
d+='<div class="el" style="left:'+A.k.aa(q.c*100,2)+"%;top:"+A.k.aa(q.d*100,2)+"%;width:"+A.k.aa(q.e*100,2)+"%;height:"+A.k.aa(q.f*100,2)+'%">'
p=q.b
switch(p.a){case 0:o=A.a.b1(A.a.aT(A.o.fS(q.Q,16),8,"0"),2)
p=q.w
n=q.r
n=B.aK(n,"&",h)
n=B.aK(n,"<",g)
n=B.aK(n,">",f)
d+='<div class="txt" style="font-size:'+B.t(p)+"px;color:#"+o+'">'+B.aK(n,'"',e)+"</div>"
break
case 1:case 4:n=q.at
if(n!=null&&A.a.a0(n,"data:image")){m=p===D.lq&&q.c===0&&q.d===0&&q.e===1&&q.f===1?' style="object-fit:fill"':""
d+='<img src="'+n+'" alt=""'+m+" />"}break
case 3:p=q.db
if(p.length===0)p="PDF document"
p=B.aK(p,"&",h)
p=B.aK(p,"<",g)
p=B.aK(p,">",f)
d+='<div class="pdf"><div>\ud83d\udcc4 '+B.aK(p,'"',e)+"</div></div>"
break
case 2:d+='<div style="width:100%;height:100%;background:'+C.hdF(q.ay)+";border:2px solid "+C.hdF(q.ch)+'"></div>'
break
case 5:l=C.fYg(q.r)
p=l==null
n=p?null:l.b
n=A.a.i(n==null?"":n).length===0?"My links":A.a.i(l.b)
n=B.aK(n,"&",h)
n=B.aK(n,"<",g)
n=B.aK(n,">",f)
d=d+'<div style="width:100%;height:100%;box-sizing:border-box;background:#111114;border:4px solid #8E8A85;border-radius:18px;padding:18px 8px 8px;color:#fff;font-family:sans-serif;text-align:center;overflow:hidden">'+('<div style="font-weight:700;font-size:13px">'+B.aK(n,'"',e)+"</div>")
p=p?null:l.gaj1()
if(p==null)p=A.awo
n=B.U(p)
k=n.k("ol<1>")
j=new B.ol(p,0,8,k)
j.CN(p,0,8,n.c)
j=new B.bS(j,j.gM(0),k.k("bS<ak.E>"))
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
hdF(d){var w=A.o.aA(d,24)
return"rgba("+(A.o.aA(d,16)&255)+","+(A.o.aA(d,8)&255)+","+(d&255)+","+A.k.aa((w&255)/255,3)+")"},
he2(d){var w=B.aK(d,"&","&amp;")
w=B.aK(w,"<","&lt;")
w=B.aK(w,">","&gt;")
return B.aK(w,'"',"&quot;")},
bC4(d,e){var w=0,v=B.j(x.H)
var $async$bC4=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b(B.ca(null,null,!0,null,new C.fDx(e,C.i3u(e),d),d,null,!0,!0,x.H),$async$bC4)
case 2:return B.h(null,v)}})
return B.i($async$bC4,v)},
bC5(){var w=0,v=B.j(x.T),u,t,s
var $async$bC5=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A4.Gk(92,2400),$async$bC5)
case 3:s=e
if(s==null){u=null
w=1
break}w=4
return B.b(C.fDq(s),$async$bC5)
case 4:t=e
u=t==null?s:t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bC5,v)},
aPj(d){var w=0,v=B.j(x.N),u,t,s,r,q
var $async$aPj=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.fZu(d),$async$aPj)
case 3:t=f
s=A.a.i(d.b)
r=B.af("[^\\w\\-. ]+",!0,!1,!1,!1)
q=A.a.i(B.aK(s,r,"_"))
u=Y.fFU(t,q.length===0?"presentation":q)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aPj,v)},
h7Z(d,e){var w
if(e<0||e>=d.r.length)return A.o.D(d.e,1,120)
w=d.r[e].w
return A.o.D(w>0?w:d.e,1,120)},
b0s:function b0s(d,e,f){this.a=d
this.b=e
this.c=f},
fDo:function fDo(d,e){this.a=d
this.b=e},
fDx:function fDx(d,e,f){this.a=d
this.b=e
this.c=f},
fDu:function fDu(d){this.a=d},
fDv:function fDv(d,e,f){this.a=d
this.b=e
this.c=f},
fDw:function fDw(d,e,f){this.a=d
this.b=e
this.c=f},
i3l(d){return C.ku(d.w)},
i3s(d){var w,v,u,t
if(d.length===0||!A.d.d8(d,C.i5c()))return null
for(w=d.length,v=0;v<w;++v){u=d[v].x
t=A.a.i(u==null?"":u)
if(t.length!==0)return t}return""},
yo(d){var w=A.a.i(d),v=B.af("[^A-Z0-9]",!0,!1,!1,!1),u=B.aK(w.toUpperCase(),v,"")
w=$.hqv()
if(w.b.test(u))return u
return null},
hkS(d,e,f){var w,v,u=C.hz5(d),t=$.pn()
for(w=0;w<80;++w){v=u+A.a.aT(A.o.u(t.aC(1000)),3,"0")
if(!f.t(0,v))return v}return u+A.a.aT(A.o.u(Date.now()%1000),3,"0")},
i3y(d){var w,v,u,t,s=B.aX(x.N)
for(w=J.aV(d.a),v=new B.fe(w,d.b);v.C();){u=w.gT(w).y
t=C.yo(u==null?"":u)
if(t!=null)s.J(0,t)}return s},
fDm(d,e){var w,v=d.y,u=C.yo(v==null?"":v)
if(u!=null)return d.y=u
w=C.i3y(new B.a2(e,new C.fDn(d),B.U(e).k("a2<1>")))
v=d.x
return d.y=C.hkS(v==null?"":v,null,w)},
i3x(d){var w,v
if(d.length!==1)return null
w=A.d.gL(d)
if(!C.ku(w.w))return null
v=w.y
return C.yo(v==null?"":v)},
hDv(){var w,v=$.pn(),u=J.e3(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aC(32)]
return"SL"+A.d.fX(u)},
VA(){var w=0,v=B.j(x.P),u,t=2,s=[],r,q,p,o,n,m
var $async$VA=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return B.b(B.c3(),$async$VA)
case 3:if(!e){u=B.T(x.N,x.z)
w=1
break}t=5
w=8
return B.b(B.f3("ngmy_slides_transfer_qr_stashes_v1",null,!1,A.bG),$async$VA)
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
p=B.aa(m)
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
return B.i($async$VA,v)},
VB(d){return C.hDw(d)},
hDw(d){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p
var $async$VB=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return B.b(B.c3(),$async$VB)
case 3:if(!f){w=1
break}t=5
w=8
return B.b(B.hC("ngmy_slides_transfer_qr_stashes_v1",B.F(["stashes",d,"savedAt",new B.S(Date.now(),0,!1).a6().ac()],x.N,x.z),!1,!1,A.cH,null),$async$VB)
case 8:t=2
w=7
break
case 5:t=4
p=s.pop()
r=B.aa(p)
$.am.$1("[slides qr stash] save: "+B.t(r))
w=7
break
case 4:w=2
break
case 7:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$VB,v)},
a7F(a0,a1,a2,a3,a4){var w=0,v=B.j(x.gl),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$a7F=B.e(function(a5,a6){if(a5===1)return B.f(a6,v)
for(;;)switch(w){case 0:w=3
return B.b(B.c3(),$async$a7F)
case 3:if(!a6){u=null
w=1
break}t=A.a.i(a0)
if(t.length===0){u=null
w=1
break}w=4
return B.b(C.VA(),$async$a7F)
case 4:s=a6
r=C.yo(a2==null?"":a2)
if(r==null)r=a3!=null?C.hkS(a3,null,A.Im):null
q=x.N
p=B.aX(q)
for(o=J.dm(s),n=J.aV(o.gi2(s)),m=x.f;n.C();){l=n.gT(n)
if(!m.b(l))continue
k=J.q(l,"claimCode")
j=C.yo(J.k(k==null?"":k))
if(j!=null)p.J(0,j)}n=o.gdK(s),n=n.gaf(n),k=x.z
case 5:if(!n.C()){w=6
break}i=n.gT(n)
h=i.b
if(!m.b(h)){w=5
break}g=B.a1(h,q,k)
h=g.h(0,"bundleId")
if(J.k(h==null?"":h)!==a1){w=5
break}q=A.dJ.aJ(t)
g.n(0,"payload",A.cT.gcw().aJ(q))
g.n(0,"ownerEmail",A.a.i(a4))
g.n(0,"updatedAt",new B.S(Date.now(),0,!1).a6().ac())
if(D.Sy.t(0,A.a.i(a4.toLowerCase())))g.n(0,"sharedByAdmin",!0)
if(r!=null){g.n(0,"kind","marriage")
g.n(0,"usesRemaining",2)
f=r}else{q=g.h(0,"claimCode")
f=C.yo(J.k(q==null?"":q))
if(f==null)f=C.h83(p)
g.n(0,"usesRemaining",25)}g.n(0,"claimCode",f)
q=i.a
o.n(s,q,g)
w=7
return B.b(C.VB(s),$async$a7F)
case 7:u=new B.aF9(f,"NGMYSLIDESYNC2|"+q,q)
w=1
break
w=5
break
case 6:e=C.hDv()
n=r==null
d=n?C.h83(p):r
q=B.T(q,x.C)
q.n(0,"ownerEmail",A.a.i(a4))
q.n(0,"bundleId",a1)
m=A.dJ.aJ(t)
q.n(0,"payload",A.cT.gcw().aJ(m))
n=!n
q.n(0,"usesRemaining",n?2:25)
q.n(0,"createdAt",new B.S(Date.now(),0,!1).a6().ac())
if(D.Sy.t(0,A.a.i(a4.toLowerCase())))q.n(0,"sharedByAdmin",!0)
q.n(0,"claimCode",d)
if(n)q.n(0,"kind","marriage")
o.n(s,e,q)
w=8
return B.b(C.VB(s),$async$a7F)
case 8:u=new B.aF9(d,"NGMYSLIDESYNC2|"+e,e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a7F,v)},
h83(d){var w,v,u=$.pn()
for(w=0;w<200;++w){v="SL"+A.a.aT(A.o.u(u.aC(1000)),3,"0")
if(d.J(0,v))return v}return"SL"+A.a.aT(A.o.u(Date.now()%1000),3,"0")},
aqA(d){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$aqA=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=A.a.i(d)
p=q.length===0
if(p)f=p
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.c3(),$async$aqA)
case 5:f=!f
case 4:if(f){w=1
break}w=6
return B.b(C.VA(),$async$aqA)
case 6:t=f
s=J.a6(t)
r=s.gM(t)
s.bn(t,new C.cdv(q))
w=s.gM(t)!==r?7:8
break
case 7:w=9
return B.b(C.VB(t),$async$aqA)
case 9:case 8:case 1:return B.h(u,v)}})
return B.i($async$aqA,v)},
aqz(d){var w=0,v=B.j(x.T),u,t,s,r,q,p,o
var $async$aqz=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:p=C.yo(d)
o=p==null
if(o)f=o
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.c3(),$async$aqz)
case 5:f=!f
case 4:if(f){u=null
w=1
break}o=J
w=6
return B.b(C.VA(),$async$aqz)
case 6:t=o.jv(f),t=t.gaf(t),s=x.f
case 7:if(!t.C()){w=8
break}r=t.gT(t)
q=r.b
if(!s.b(q)){w=7
break}q=J.q(q,"claimCode")
if(C.yo(J.k(q==null?"":q))===p){u=C.a7E(r.a)
w=1
break}w=7
break
case 8:u=null
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aqz,v)},
a7E(d){var w=0,v=B.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$a7E=B.e(function(a0,a1){if(a0===1)return B.f(a1,v)
for(;;)switch(w){case 0:g=A.a.i(d)
f=g.length===0
if(f)a1=f
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.c3(),$async$a7E)
case 5:a1=!a1
case 4:if(a1){u=null
w=1
break}w=6
return B.b(C.VA(),$async$a7E)
case 6:p=a1
o=J.a6(p)
n=o.h(p,g)
m=x.f
if(!m.b(n)){u=null
w=1
break}l=J.a6(n)
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
try{s=A.c6.ca(0,A.cG.aJ(t))}catch(e){u=null
w=1
break}if(A.a.i(s).length===0){u=null
w=1
break}k=l.h(n,"ownerEmail")
if(D.Sy.t(0,A.a.i(J.k(k==null?"":k).toLowerCase()))||J.z(l.h(n,"sharedByAdmin"),!0))try{r=A.R.aG(0,s,null)
if(m.b(r)){q=B.a1(r,x.N,x.z)
J.aF(q,"sharedByAdmin",!0)
s=A.R.ao(q,null)}}catch(e){}h=j-1
m=l.h(n,"kind")
m=J.k(m==null?"":m)
if(h<=0&&m!=="marriage")o.W(p,g)
else{m=x.N
l=x.z
l=B.dW(B.a1(n,m,l),m,l)
l.n(0,"usesRemaining",h)
l.n(0,"lastUsedAt",new B.S(Date.now(),0,!1).a6().ac())
o.n(p,g,l)}w=7
return B.b(C.VB(p),$async$a7E)
case 7:u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a7E,v)},
i3r(d,e,f){var w,v=B.T(x.N,x.z)
v.n(0,"type","ngmy_slides_library_v1")
v.n(0,"ownerEmail",A.a.i(e))
v.n(0,"exportedAt",new B.S(Date.now(),0,!1).a6().ac())
if(f)v.n(0,"sharedByAdmin",!0)
w=B.U(d).k("K<1,a3<n,@>>")
w=B.B(new B.K(d,new C.fDt(),w),w.k("ak.E"))
v.n(0,"decks",w)
return v},
fDB(d,e,f,g){var w
if(e!=null){w=B.T(x.N,x.z)
w.n(0,"type","ngmy_slides_deck_v1")
w.n(0,"ownerEmail",A.a.i(f))
w.n(0,"exportedAt",new B.S(Date.now(),0,!1).a6().ac())
if(g)w.n(0,"sharedByAdmin",!0)
w.n(0,"deck",e.ag())
return A.R.ao(w,null)}return A.R.ao(C.i3r(d==null?B.a([],x.D):d,f,g),null)},
fDA(d,e,f,g,h){var w=0,v=B.j(x.eb),u,t,s,r
var $async$fDA=B.e(function(i,j){if(i===1)return B.f(j,v)
for(;;)switch(w){case 0:w=3
return B.b(C.a7F(h,d,e,f,g),$async$fDA)
case 3:r=j
if(r!=null){t=r.b
s=r.a
if(s==null)s=C.yo(e==null?"":e)
u=new B.aEX(s,t)
w=1
break}t=A.dJ.aJ(h)
t=A.ka.gcw().aJ(t)
u=new B.aEX(C.yo(e==null?"":e),"NGMY_SL:"+t)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fDA,v)},
fZw(d){var w,v,u,t,s="ngmy_slides_deck_v1",r="ngmy_slides_library_v1",q=A.a.i(d)
if(J.ad(q)===0)return!1
if(J.d_(q,"NGMYSLIDESYNC2|"))return!0
if(J.d_(q,"NGMYSLIDECODE|"))return!0
if(J.d_(q,"NGMY_SL:"))return!0
if(J.f0(q,s)||J.f0(q,r))return!0
if(J.d_(q,"{"))try{w=A.R.aG(0,q,null)
if(x.f.b(w)){u=J.q(w,"type")
v=J.k(u==null?"":u)
u=J.z(v,s)||J.z(v,r)
return u}}catch(t){}return!1},
i3v(d){var w,v,u,t,s,r=d.z,q=r==null?null:A.a.i(r)
r=d.d
for(r=[q,r==null?null:A.a.i(r)],w=0;w<2;++w){v=r[w]
if(v==null||v.length===0)continue
if(C.fZw(v))return v
u=A.a.cJ(v,"NGMYSLIDESYNC2|")
if(u>=0){t=A.a.i(A.a.b1(v,u))
if(C.fZw(t))return t}s=A.a.cJ(v,"NGMY_SL:")
if(s>=0){t=A.a.i(A.a.b1(v,s))
if(C.fZw(t))return t}}return null},
fDp(d){var w,v,u,t=A.a.i(d)
if(J.ad(t)===0||J.d_(t,"NGMYSLIDESYNC2|"))return B.a([],x.D)
try{w=null
v=x.P
if(J.d_(t,"NGMY_SL:"))w=v.a(A.R.aG(0,A.c6.ca(0,A.cG.aJ(J.mE(t,8))),null))
else w=v.a(A.R.aG(0,t,null))
v=C.hNg(w)
return v}catch(u){v=B.a([],x.D)
return v}},
agV(d){var w=0,v=B.j(x.R),u,t,s,r,q
var $async$agV=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=A.a.i(d)
w=A.a.a0(q,"NGMYSLIDECODE|")?3:4
break
case 3:t=q.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return B.b(C.aqz(t[1]),$async$agV)
case 7:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fDp(s)
w=1
break}case 6:u=B.a([],x.D)
w=1
break
case 4:r=C.yo(q)
w=r!=null&&!A.a.t(q,"|")&&!A.a.a0(q,"{")?8:9
break
case 8:w=10
return B.b(C.aqz(r),$async$agV)
case 10:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fDp(s)
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
return B.b(C.a7E(t[1]),$async$agV)
case 15:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fDp(s)
w=1
break}case 14:u=B.a([],x.D)
w=1
break
case 12:u=C.fDp(q)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$agV,v)},
hNg(d){var w,v,u,t=J.a6(d),s=t.h(d,"type"),r=J.k(s==null?"":s)
if(!J.z(t.h(d,"sharedByAdmin"),!0)){s=t.h(d,"ownerEmail")
w=D.Sy.t(0,A.a.i(J.k(s==null?"":s).toLowerCase()))}else w=!0
if(r==="ngmy_slides_deck_v1"){v=t.h(d,"deck")
if(!x.f.b(v))return B.a([],x.D)
return B.a([C.fZt(C.Vw(B.a1(v,x.N,x.z)),w)],x.D)}if(r==="ngmy_slides_library_v1"){u=t.h(d,"decks")
if(!x.j.b(u))return B.a([],x.D)
t=J.d9(u,x.f)
t=B.cD(t,new C.fbz(w),t.$ti.k("J.E"),x.I)
t=B.B(t,B.a4(t).k("J.E"))
return t}return B.a([],x.D)},
fZt(d,e){var w,v,u,t,s,r,q,p,o=d.ag()
o.n(0,"id",C.cC())
w=A.a.i(d.b)
o.n(0,"name",w.length===0?"Shared presentation":w)
o.n(0,"transferReceived",!0)
o.W(0,"transferClaimCode")
o.W(0,"adminShareEditUntil")
v=o.h(0,"slides")
if(x.j.b(v))for(u=J.aV(v),t=x.f;u.C();){s=u.gT(u)
if(t.b(s)){r=Date.now()
q=$.iZ
$.iZ=q+1
J.aF(s,"id",""+1000*r+"_"+q)}}p=C.Vw(B.a1(o,x.N,x.z))
if(e&&C.ku(p.w))p.Q=new B.S(Date.now(),0,!1).a6().bQ(144e8).ac()
return p},
bBQ(){var w=0,v=B.j(x.aT),u,t,s
var $async$bBQ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.Gj(),$async$bBQ)
case 3:s=e
if(s==null||A.a.i(s).length===0){u=null
w=1
break}w=4
return B.b(C.agV(s),$async$bBQ)
case 4:t=e
u=J.cm(t)?null:t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bBQ,v)},
fMd(d){var w=0,v=B.j(x.T),u,t
var $async$fMd=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.hS(D.Wh,!0,"Dismiss",d,new C.fMe(),new C.fMf(),A.F1,!0,x.N),$async$fMd)
case 3:t=f
if(t==null){u=null
w=1
break}if(t.length===0){if(d.e!=null)d.I(x.q).f.S(D.eQ7)
u=null
w=1
break}u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fMd,v)},
i7k(d,e,f,g,h){return B.a5(d,!1).c8(B.e9(new C.fMg(h,e,g,f),!0,null,x.H))},
fDn:function fDn(d){this.a=d},
cdv:function cdv(d){this.a=d},
fDt:function fDt(){},
fbz:function fbz(d){this.a=d},
fMe:function fMe(){},
fMf:function fMf(){},
fMg:function fMg(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Vy:function Vy(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aDH:function aDH(){var _=this
_.d="one"
_.e=null
_.r=_.f=!1
_.c=_.a=null},
ev2:function ev2(){},
euZ:function euZ(d,e){this.a=d
this.b=e},
ev1:function ev1(d,e){this.a=d
this.b=e},
ev_:function ev_(d){this.a=d},
ev0:function ev0(d){this.a=d},
ev3:function ev3(d){this.a=d},
ev4:function ev4(d){this.a=d},
ev7:function ev7(d){this.a=d},
ev8:function ev8(d){this.a=d},
ev6:function ev6(d){this.a=d},
ev9:function ev9(d){this.a=d},
ev5:function ev5(d){this.a=d},
eva:function eva(d,e){this.a=d
this.b=e},
euY:function euY(d,e){this.a=d
this.b=e},
euX:function euX(d,e){this.a=d
this.b=e},
Vz:function Vz(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bjI:function bjI(){var _=this
_.c=_.a=_.f=_.e=_.d=null},
evb:function evb(d,e){this.a=d
this.b=e},
evc:function evc(d){this.a=d},
evd:function evd(){},
eve:function eve(d){this.a=d},
evf:function evf(d,e){this.a=d
this.b=e},
aDE:function aDE(d){this.a=d},
aDF:function aDF(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
eoG:function eoG(d){this.a=d},
eoF:function eoF(){},
eoH:function eoH(d){this.a=d},
eoC:function eoC(d){this.a=d},
eoB:function eoB(){},
eoD:function eoD(d){this.a=d},
eoE:function eoE(d){this.a=d},
bu2:function bu2(){},
aqB:function aqB(d){this.a=d},
aDI:function aDI(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
evh:function evh(d){this.a=d},
evg:function evg(d){this.a=d},
hSq(){var w,v,u,t
for(v=0;v<4;++v){w=D.d01[v]
try{if(Ac.bW9(w)){u=w
return u}}catch(t){}}return null},
QL(d,e){return C.i0c(d,e)},
i0c(c6,c7){var w=0,v=B.j(x.T),u,t=2,s=[],r=[],q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5
var $async$QL=B.e(function(c9,d0){if(c9===1){s.push(d0)
w=t}for(;;)switch(w){case 0:c2={}
c3=c7.r
if(c3.length===0){u="This presentation has no slides."
w=1
break}q=C.hSq()
if(q==null){u="This browser cannot record video. Try Chrome, Edge, or a recent Safari."
w=1
break}b2=c7.d===D.o7?0.5625:1.7777777777777777
b3=b2>=1
b4=c2.a=A.k.V(b3?1280:1280*b2)
b5=c2.b=A.k.V(b3?1280/b2:1280)
c2.a=b4-A.o.F(b4,2)
c2.b=b5-A.o.F(b5,2)
b6=B.qr(c6,!0)
b6.toString
p=B.a5(c6,!0)
b7=new B.cs(null,x.A)
b8=A.d.gL(c3)
b9=$.aw()
o=new B.eS(b8,b9)
n=new B.eS("Getting ready\u2026",b9)
m=new B.eS(0,b9)
l=B.og(new C.fxI(c2,b7,o),!1,!1)
b6.lM(0,l)
b9=x.H
B.ca(null,A.da,!1,null,new C.fxJ(n,m),c6,null,!0,!0,b9)
k=new C.fxN(b7)
j=new C.fxO()
i=null
t=4
b3=c2.a
h=Aj.aRA(c2.b,b3)
b3=h.getContext("2d")
b3.toString
g=b3
f=J.fOS(h,30)
e=B.a([],x.aK)
b3=x.z
i=Ac.aWt(f,B.F(["mimeType",q,"videoBitsPerSecond",8e6],b3,b3))
A.Hm.yb(i,"dataavailable",new C.fxK(e))
d=new B.bX(new B.bg($.by,x.dT),x.b2)
A.Hm.yb(i,"stop",new C.fxL(d))
J.ahv(n,"Drawing slide 1 of "+c3.length+"\u2026")
c5=j
w=8
return B.b(k.$0(),$async$QL)
case 8:w=7
return B.b(c5.$1(d0),$async$QL)
case 7:a0=d0
J.fOU(g,a0,0,0,c2.a,c2.b)
i.start(200)
a1=0
case 9:if(!(b3=a1,b8=c3.length,b3<b8)){w=11
break}a2=c3[a1]
w=a1>0?12:13
break
case 12:J.ahv(n,"Drawing slide "+B.t(a1+1)+" of "+b8+"\u2026")
J.ahv(o,a2)
c5=j
w=15
return B.b(k.$0(),$async$QL)
case 15:w=14
return B.b(c5.$1(d0),$async$QL)
case 14:a0=d0
case 13:J.fOU(g,a0,0,0,c2.a,c2.b)
a3=A.o.D(a2.w>0?a2.w:c7.e,1,120)
J.ahv(n,"Recording slide "+B.t(a1+1)+" of "+c3.length+" \xb7 "+B.t(a3)+" s")
a4=new B.S(Date.now(),0,!1).bQ(1e6*a3)
case 16:b3=Date.now()
b8=a4
if(b3>=b8.gbo())b3=b3===b8.gbo()&&0<b8.gcz()
else b3=!0
if(!b3){w=17
break}J.fOU(g,a0,0,0,c2.a,c2.b)
w=18
return B.b(B.bN(A.fp,null,b9),$async$QL)
case 18:w=16
break
case 17:J.ahv(m,(a1+1)/c3.length)
case 10:++a1
w=9
break
case 11:J.ahv(n,"Saving your video\u2026")
i.stop()
w=19
return B.b(d.a.cM(0,A.nR),$async$QL)
case 19:a5=A.d.gL(q.split(";"))
a6=B.hN(e,a5)
c3=(self.URL||self.webkitURL).createObjectURL(a6)
c3.toString
a7=c3
a8=J.z(a5,"video/mp4")?"mp4":"webm"
c3=A.a.i(c7.b)
b3=B.af("[^\\w\\-. ]+",!0,!1,!1,!1)
a9=A.a.i(B.aK(c3,b3,"_"))
c0=B.n4(a7)
c0.download=B.t(J.ad(a9)===0?"presentation":a9)+"."+B.t(a8)
c3=c0.style
c3.display="none"
b0=c0
c3=document.body
if(c3!=null)c3.appendChild(b0).toString
J.KX(b0)
J.lS(b0)
B.bN(A.nQ,new C.fxM(a7),b9)
u=null
r=[1]
w=5
break
r.push(6)
w=5
break
case 4:t=3
c4=s.pop()
b1=B.aa(c4)
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
J.lS(l)
if(p.pv())p.eK()
c3=o
b3=$.aw()
c3.shU(b3)
J.aQ9(c3,0)
c3=n
c3.shU(b3)
J.aQ9(c3,0)
c3=m
c3.shU(b3)
J.aQ9(c3,0)
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$QL,v)},
fxI:function fxI(d,e,f){this.a=d
this.b=e
this.c=f},
fxH:function fxH(){},
fxJ:function fxJ(d,e){this.a=d
this.b=e},
fxN:function fxN(d){this.a=d},
fxO:function fxO(){},
fxK:function fxK(d){this.a=d},
fxL:function fxL(d){this.a=d},
fxM:function fxM(d){this.a=d},
bue:function bue(d,e,f){this.c=d
this.d=e
this.a=f},
f5S:function f5S(){},
f5T:function f5T(){},
cdS(d){var w=0,v=B.j(x.at),u,t,s
var $async$cdS=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.aqL(d,A.z8),$async$cdS)
case 3:s=f
if(s==null){u=null
w=1
break}t=s.bz(new B.S(Date.now(),0,!1))
if(t.a<0){u=A.bx
w=1
break}u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$cdS,v)},
cdR(d){if(d==null)return!1
return d==="marriage_agreement"||d==="hati_kuhowa"||d==="hati_kuhoweya"||d==="hati_malipo_awamu"},
a7l:function a7l(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bjr:function bjr(d){var _=this
_.d=null
_.e=d
_.f=!1
_.c=_.a=null},
ed4:function ed4(d){this.a=d},
ed2:function ed2(d){this.a=d},
ed3:function ed3(d,e){this.a=d
this.b=e},
a8d:function a8d(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.cx=d
_.cy=e
_.x=f
_.y=!0
_.a=g
_.b=h
_.c=i
_.d=j
_.oq$=k
_.or$=l
_.os$=m
_.nK$=n},
a8e:function a8e(d,e){this.a=d
this.b=e},
b25:function b25(){},
cg3:function cg3(){},
cg4:function cg4(){},
cg5:function cg5(d,e,f,g,h,i,j,k,l){var _=this
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
hrv(d){return new C.ahN(d)},
a2p:function a2p(){},
ahN:function ahN(d){this.a=d},
aQu:function aQu(){},
aw3:function aw3(d,e){this.d=d
this.b=e
this.a=null},
aRZ:function aRZ(d){this.b=d
this.a=null},
fsR(d,e){var w=0,v=B.j(x.H)
var $async$fsR=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b($.W().gxo().Lr(d,e),$async$fsR)
case 2:B.fG_()
return B.h(null,v)}})
return B.i($async$fsR,v)},
hi9(d,e){return(A.re[(d^e)&255]^A.o.aA(d,8))>>>0},
fqk(d,e,f,g,h,i){var w=C.hXy(d,A.dc,f,null,A.cX,g,h,i)
return w},
hk0(d){var w=F.hkJ(d)
if(w==null)return""
return"- WRITE EVERYTHING THE READER SEES IN "+w+" \u2014 every title, subtitle, sentence and note, with natural, correct grammar. Do not mix in English (JSON keys stay as given)."},
hz5(d){var w,v,u,t,s,r=A.a.i(d)
if(r.length===0)return"XX"
w=r.toLowerCase()
v=A.oV.h(0,w)
if(v!=null)return v
for(u=A.oV.gdK(A.oV),u=u.gaf(u);u.C();){t=u.gT(u).b
if(t.toLowerCase()===w)return t}u=B.af("[^A-Z]",!0,!1,!1,!1)
s=B.aK(r.toUpperCase(),u,"")
if(s.length>=2)return A.a.ap(s,0,2)
return A.a.ap(s+"XX",0,2)},
hk8(){var w,v
for(w=0,v='=== EVERYTHING YOU KNOW ABOUT NGMY (use only this; never invent features, numbers, prices, names or dates) ===\nTHE FOUNDER: NGMY stands for New Global Movement for Youth. It was created by KB PABLO QR (always written in capital letters), the Founder, President and CEO of NGMY. The "QR" in his name comes from QR codes, which NGMY and his business use a lot, and it is part of his brand. He built NGMY as one app (ngmy.org) that gives young people and families tools for work, money, learning, community and creativity. When a story is about the CEO, call him KB PABLO QR, Founder, President and CEO of NGMY. Do not give him a different name, age, birthplace, degrees, awards or family details, and do not make up quotes from him.\n\nFEATURES:\n';w<39;++w)v+="- "+D.cVW[w]+"\n"
v=v+"\nABOUT THE COMMUNITY AND THE SYSTEM (facts you can use; do not invent numbers, names or dates):\n- The community is M'MBONDO (also written MBONDO). Its motto is \"EMO 'YA M'MBONDO\". Members live in different US states.\n- The Civic Registry \u2014 people also just call it \"the system\" \u2014 was built inside the NGMY app for the M'MBONDO community.\n- Why it was built: a big problem in the community was not seeing where contribution money went. People gave but were unsure what happened to their money, so trust and giving went down. The system brings light: every contribution gets a receipt, members can see where the money is going and how much has been contributed, and that transparency builds trust and the confidence to keep contributing \u2014 when you know where your money goes, you give.\n- What it does:\n  \u2022 Registers community members with their details and a member ID card (Registry ID), kept safely as the community's records.\n  \u2022 Lets each state know how many members it has (state totals, nationwide totals).\n  \u2022 Records contributions with receipts and contribution reports, so everyone sees the money trail.\n  \u2022 Authorized Registrars enroll members and help them; there is a help mode for assisted sign-up.\n  \u2022 Civic Voting for community decisions, and a Civic State Wallet that shows each state's funds.\n- How NGMY helps members beyond the registry: help finding jobs and applying for them, fixing their houses, helping them get houses, sending money, and NGMY Advisors (AI advisors) who help people apply for jobs, food stamps and other benefits and fill out applications for them.\n- Tone for this community: warm, proud, hopeful and trustworthy; it is about unity, transparency and helping each other.\n\n\nHOW MEMBERS USE THE APP:\n"+"WHAT NGMY IS: NGMY stands for New Global Movement for Youth \u2014 multi-hub app by KB PABLO QR (Founder/CEO). Live site ngmy.org. Wallet balance in USD. Gmail login (@gmail.com), password 6+ chars, also Google/GitHub sign-in.\n\nBOTTOM NAV (7 tabs):\n1) Home \u2014 brand, Helper AI entry, loans, tech frames (Neural/Signal/Core/Vault Channel games).\n2) Tool Hub \u2014 Business Card Creator, Menu Studio (+ Bio Studio), Business Essentials.\n3) Slides \u2014 presentations + Marriage/Hati documents.\n4) NGMY Hub (center) \u2014 Civic Registry, NGMY Store, Help Center, Document Scanner; center star may open App Builder when enabled.\n5) Advisors \u2014 AI advisor chat (this hub).\n6) Creator Hub \u2014 Doc Share, Quote Calc, QR Generator, Play Zone, Kiswahili School, Recorder, Video Studio, Phone Unlock.\n7) Profile \u2014 theme, logout, legal, Worksheets (Projects / Cashier IOUs / Family Tree).\n\nMENU STUDIO (Tool Hub \u2192 Menu Studio):\n- Menus tab: design restaurant/business menus, publish public link https://ngmy.org/?m={slug}\n- First menu free; more menus need Menu Studio subscription (paywall shows price).\n- Bios tab (same studio): link-in-bio pages, publish https://ngmy.org/?b={slug}\n- First Bio free with starter template; more Bios/templates need Bio Studio subscription.\n- Extra Bio photo/header changes may need a photo pack after free changes.\n- Local Menu / Local Bio: Home Essentials hub \u2192 device-local publish at /local-menu/ and /local-bio/\n\nBUSINESS CARD: Tool Hub \u2192 create/edit/download. Paid unlock for edit+download window (paywall).\n\nSLIDES: Slides tab. Free blank + some class templates/designs. Slides Pro unlocks more. Marriage documents are a separate short session unlock.\n\nADVISORS: 30 free minutes, then Advisors subscription for unlimited chat (admins unlimited).\n\nCIVIC REGISTRY (NGMY Hub): community ID, PIN gate, enrollment, registrars (AR), civic registrar roles. Guest enroll can use ?civic=enroll. Georgia stays free. Every other state gets a 2-month free Civic Registry trial for Authorized Registrars, then $50/mo State Registrar sponsorship starting month 3.\n\nVAULT GAMES (Home \u2192 Vault Channel): arcade games. Need an active Growth Income investment for full access; otherwise one free play total. Free trial does not unlock games.\n\nGROWTH INCOME / INVEST: purchase a plan, daily clock-in for ROI over work days; min withdraw typically $10. Plans are $5, $20, $30, $50 and $100 (the most expensive is $100). Plan availability is admin-controlled.\n\nCREATOR TOOLS:\n- Doc Share \u2014 share docs; free individual creations then paid / org license.\n- QR Generator \u2014 free saves then paid access window.\n- Transfer \u2014 receive free; limited free sends then monthly unlock.\n- Kiswahili School \u2014 Basics free; other levels one-time unlock.\n- Document Scanner \u2014 trial then monthly.\n- Message Translator \u2014 paid unlimited.\n- Phone Unlock \u2014 short access window.\n- Video Studio / Recorder / Play Zone \u2014 Creator Hub tools.\n- Worksheets \u2192 Cashier (IOUs/receipts), Family Tree (create/photos may be paid).\n- Invoices \u2014 free standard tier with limited free premium saves; paid templates via paywall.\n- App Builder \u2014 Hub center (if enabled); cloud + Bolt AI may be paid.\n- Music Studio \u2014 AI songs may cost wallet credits when enabled.\n\nSTORE / JOBS / LOANS / HELP: Store in NGMY Hub; loans from Home; jobs/helpers need approval; Help Center + NGMY Helper AI for support.\n\nGUEST LINKS (no full login): /bio/, /local-bio/, /menu/, /local-menu/, /invoice/, /app/{slug}.\n\nHOW TO HELP MEMBERS: Give clear tap-by-tap steps. Stay in character. If unsure of a live price, send them to the feature paywall rather than guessing.\n"
return A.a.i(v.charCodeAt(0)==0?v:v)},
bzZ(d,e){return C.hUa(d,e)},
hUa(d,e){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l
var $async$bzZ=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
if(d.length===0){u=!1
w=1
break}r=B.hN([d],"application/pdf")
n=x.z
q=B.aTD(B.a([r],x.e3),e,B.F(["type","application/pdf"],n,n))
p=B.cB(B.F(["files",B.a([q],x.fA),"title",e],x.N,x.C))
n=window.navigator
n.toString
o=n
w=7
return B.b(B.ei(B.jX(o,"share",[p]),x.H),$async$bzZ)
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
return B.i($async$bzZ,v)},
fZn(){var w=0,v=B.j(x.y),u,t,s
var $async$fZn=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=$.fiF
s=$.bzw
if(s==null)s="presentation.pdf"
if(t==null||t.length===0){u=!1
w=1
break}u=C.bzZ(t,s)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fZn,v)},
bBl(){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$bBl=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=$.fiF
l=$.bzw
k=l==null?"presentation.pdf":l
if(m==null||m.length===0){u=!1
w=1
break}w=Y.heJ()?3:4
break
case 3:w=5
return B.b(C.bzZ(m,k),$async$bBl)
case 5:if(e){u=!0
w=1
break}case 4:r=$.bzx
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
J.KX(q)
w=10
return B.b(B.bN(A.a1,null,x.H),$async$bBl)
case 10:J.lS(q)
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
return B.i($async$bBl,v)},
fZe(){var w=0,v=B.j(x.y),u,t,s,r
var $async$fZe=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=$.bzx
if(r==null||r.length===0){u=!1
w=1
break}try{t=window
t.toString
A.lu.uA(t,r,"_blank")
u=!0
w=1
break}catch(q){u=!1
w=1
break}case 1:return B.h(u,v)}})
return B.i($async$fZe,v)},
fZv(d,e){var w=0,v=B.j(x.H),u,t
var $async$fZv=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:t=(self.URL||self.webkitURL).createObjectURL(B.hN([d],"text/html"))
t.toString
u=window
u.toString
A.lu.uA(u,t,"_blank")
return B.h(null,v)}})
return B.i($async$fZv,v)},
b12(d,e){var w=0,v=B.j(x.y),u
var $async$b12=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(B.b14(d,e),$async$b12)
case 3:if(g){u=!0
w=1
break}w=4
return B.b(B.b13(d),$async$b12)
case 4:u=g<2
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$b12,v)}},D,N,H,Am,A8,X,V,An,G,F,E,Ao,W,Q,Y,Z,Ap,Aq,A9,K,Ar,A_,O,A0,Aa,L,Ab,As,At,P,A1,Au,Av,Ac,Ad,Aw,Ae,Af,Ag,Ax,Ay,R,Az,I,AA,S,T,AB,M,A2,A3,A4
J=c[1]
B=c[0]
A=c[2]
Ah=c[194]
A5=c[66]
Ai=c[49]
A6=c[159]
Aj=c[57]
U=c[209]
A7=c[52]
Ak=c[136]
Al=c[219]
C=a.updateHolder(c[4],C)
D=c[207]
N=c[90]
H=c[124]
Am=c[36]
A8=c[211]
X=c[208]
V=c[197]
An=c[117]
G=c[178]
F=c[31]
E=c[210]
Ao=c[100]
W=c[120]
Q=c[138]
Y=c[29]
Z=c[166]
Ap=c[221]
Aq=c[174]
A9=c[105]
K=c[212]
Ar=c[116]
A_=c[60]
O=c[188]
A0=c[75]
Aa=c[118]
L=c[147]
Ab=c[106]
As=c[88]
At=c[214]
P=c[110]
A1=c[127]
Au=c[86]
Av=c[122]
Ac=c[53]
Ad=c[184]
Aw=c[35]
Ae=c[73]
Af=c[137]
Ag=c[218]
Ax=c[220]
Ay=c[217]
R=c[67]
Az=c[215]
I=c[163]
AA=c[175]
S=c[47]
T=c[213]
AB=c[222]
M=c[195]
A2=c[216]
A3=c[103]
A4=c[56]
C.nP.prototype={
uU(d){var w,v,u=this,t=u.c
if(t===0)return u
w=!u.a
v=u.b
t=C.tF(t,v)
return new C.nP(t===0?!1:w,v,t)},
bKe(d){var w,v,u,t,s,r,q=this.c
if(q===0)return $.CK()
w=q+d
v=this.b
u=new Uint16Array(w)
for(t=q-1;t>=0;--t)u[t+d]=v[t]
s=this.a
r=C.tF(w,u)
return new C.nP(r===0?!1:s,u,r)},
bKJ(d){var w,v,u,t,s,r,q,p=this,o=p.c
if(o===0)return $.CK()
w=o-d
if(w<=0)return p.a?$.h_R():$.CK()
v=p.b
u=new Uint16Array(w)
for(t=d;t<o;++t)u[t-d]=v[t]
s=p.a
r=C.tF(w,u)
q=new C.nP(r===0?!1:s,u,r)
if(s)for(t=0;t<d;++t)if(v[t]!==0)return q.aB(0,$.a2c())
return q},
dV(d,e){var w,v,u,t,s,r=this
if(e<0)throw B.V(B.dI("shift-amount must be posititve "+e,null))
w=r.c
if(w===0)return r
v=A.o.an(e,16)
if(A.o.F(e,16)===0)return r.bKe(v)
u=w+v+1
t=new Uint16Array(u)
C.hbk(r.b,w,e,t)
w=r.a
s=C.tF(u,t)
return new C.nP(s===0?!1:w,t,s)},
mo(d,e){var w,v,u,t,s,r,q,p,o,n=this
if(e<0)throw B.V(B.dI("shift-amount must be posititve "+e,null))
w=n.c
if(w===0)return n
v=A.o.an(e,16)
u=A.o.F(e,16)
if(u===0)return n.bKJ(v)
t=w-v
if(t<=0)return n.a?$.h_R():$.CK()
s=n.b
r=new Uint16Array(t)
C.hJa(s,w,e,r)
w=n.a
q=C.tF(t,r)
p=new C.nP(q===0?!1:w,r,q)
if(w){if((s[v]&A.o.dV(1,u)-1)!==0)return p.aB(0,$.a2c())
for(o=0;o<v;++o)if(s[o]!==0)return p.aB(0,$.a2c())}return p},
aL(d,e){var w,v=this.a
if(v===e.a){w=C.cDY(this.b,this.c,e.b,e.c)
return v?0-w:w}return v?-1:1},
a7u(d,e){var w,v,u,t=this,s=t.c,r=d.c
if(s<r)return d.a7u(t,e)
if(s===0)return $.CK()
if(r===0)return t.a===e?t:t.uU(0)
w=s+1
v=new Uint16Array(w)
C.hJ8(t.b,s,d.b,r,v)
u=C.tF(w,v)
return new C.nP(u===0?!1:e,v,u)},
H_(d,e){var w,v,u,t=this,s=t.c
if(s===0)return $.CK()
w=d.c
if(w===0)return t.a===e?t:t.uU(0)
v=new Uint16Array(s)
C.b9a(t.b,s,d.b,w,v)
u=C.tF(s,v)
return new C.nP(u===0?!1:e,v,u)},
bxh(d,e){var w,v,u,t,s,r=this.c,q=d.c
r=r<q?r:q
w=this.b
v=d.b
u=new Uint16Array(r)
for(t=0;t<r;++t)u[t]=w[t]&v[t]
s=C.tF(r,u)
return new C.nP(!1,u,s)},
bxg(d,e){var w,v,u=this.c,t=this.b,s=d.b,r=new Uint16Array(u),q=d.c
if(u<q)q=u
for(w=0;w<q;++w)r[w]=t[w]&~s[w]
for(w=q;w<u;++w)r[w]=t[w]
v=C.tF(u,r)
return new C.nP(!1,r,v)},
bxi(d,e){var w,v,u,t,s,r=this.c,q=d.c,p=r>q?r:q,o=this.b,n=d.b,m=new Uint16Array(p)
if(r<q){w=r
v=d}else{w=q
v=this}for(u=0;u<w;++u)m[u]=o[u]|n[u]
t=v.b
for(u=w;u<p;++u)m[u]=t[u]
s=C.tF(p,m)
return new C.nP(s!==0,m,s)},
Uk(d,e){var w,v,u,t=this
if(t.c===0||e.c===0)return $.CK()
w=t.a
if(w===e.a){if(w){w=$.a2c()
return t.H_(w,!0).bxi(e.H_(w,!0),!0).a7u(w,!0)}return t.bxh(e,!1)}if(w){v=t
u=e}else{v=e
u=t}return u.bxg(v.H_($.a2c(),!1),!1)},
ad(d,e){var w,v,u=this,t=u.c
if(t===0)return e
w=e.c
if(w===0)return u
v=u.a
if(v===e.a)return u.a7u(e,v)
if(C.cDY(u.b,t,e.b,w)>=0)return u.H_(e,v)
return e.H_(u,!v)},
aB(d,e){var w,v,u=this,t=u.c
if(t===0)return e.uU(0)
w=e.c
if(w===0)return u
v=u.a
if(v!==e.a)return u.a7u(e,v)
if(C.cDY(u.b,t,e.b,w)>=0)return u.H_(e,v)
return e.H_(u,!v)},
aF(d,e){var w,v,u,t,s,r,q,p=this.c,o=e.c
if(p===0||o===0)return $.CK()
w=p+o
v=this.b
u=e.b
t=new Uint16Array(w)
for(s=0;s<o;){C.hbl(u[s],v,0,t,s,p);++s}r=this.a!==e.a
q=C.tF(w,t)
return new C.nP(q===0?!1:r,t,q)},
bKd(d){var w,v,u,t
if(this.c<d.c)return $.CK()
this.aQm(d)
w=$.fUn.c5()-$.awO.c5()
v=C.fUp($.fUm.c5(),$.awO.c5(),$.fUn.c5(),w)
u=C.tF(w,v)
t=new C.nP(!1,v,u)
return this.a!==d.a&&u>0?t.uU(0):t},
clU(d){var w,v,u,t=this
if(t.c<d.c)return t
t.aQm(d)
w=C.fUp($.fUm.c5(),0,$.awO.c5(),$.awO.c5())
v=C.tF($.awO.c5(),w)
u=new C.nP(!1,w,v)
if($.fUo.c5()>0)u=u.mo(0,$.fUo.c5())
return t.a&&u.c>0?u.uU(0):u},
aQm(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.c
if(f===$.hbh&&d.c===$.hbj&&g.b===$.hbg&&d.b===$.hbi)return
w=d.b
v=d.c
u=16-A.o.gajr(w[v-1])
if(u>0){t=new Uint16Array(v+5)
s=C.hbf(w,v,u,t)
r=new Uint16Array(f+5)
q=C.hbf(g.b,f,u,r)}else{r=C.fUp(g.b,0,f,f+2)
s=v
t=w
q=f}p=t[s-1]
o=q-s
n=new Uint16Array(q)
m=C.fUq(t,s,o,n)
l=q+1
k=r.$flags|0
if(C.cDY(r,q,n,m)>=0){k&2&&B.aj(r)
r[q]=1
C.b9a(r,l,n,m,r)}else{k&2&&B.aj(r)
r[q]=0}j=new Uint16Array(s+2)
j[s]=1
C.b9a(j,s+1,t,s,j)
i=q-1
while(o>0){h=C.hJ9(p,r,i);--o
C.hbl(h,j,0,r,o,s)
if(r[i]<h){m=C.fUq(j,s,o,n)
C.b9a(r,l,n,m,r)
while(--h,r[i]<h)C.b9a(r,l,n,m,r)}--i}$.hbg=g.b
$.hbh=f
$.hbi=w
$.hbj=v
$.fUm.b=r
$.fUn.b=l
$.awO.b=s
$.fUo.b=u},
gX(d){var w,v,u,t=new C.cDZ(),s=this.c
if(s===0)return 6707
w=this.a?83585:429689
for(v=this.b,u=0;u<s;++u)w=t.$2(w,v[u])
return new C.cE_().$1(w)},
A(d,e){if(e==null)return!1
return e instanceof C.nP&&this.aL(0,e)===0},
t5(d,e){return this.aL(0,e)>0},
N(d){var w,v,u
for(w=this.c-1,v=this.b,u=0;w>=0;--w)u=u*65536+v[w]
return this.a?-u:u},
uO(d){var w,v,u,t,s,r,q,p=this,o={},n=p.c
if(n===0)return 0
w=new Uint8Array(8);--n
v=p.b
u=16*n+A.o.gajr(v[n])
if(u>1024)return p.a?-1/0:1/0
if(p.a)w[7]=128
t=u-53+1075
w[6]=(t&15)<<4
w[7]=(w[7]|A.o.aA(t,4))>>>0
o.a=o.b=0
o.c=n
s=new C.cE0(o,p)
n=s.$1(5)
w[6]=w[6]|n&15
for(r=5;r>=0;--r)w[r]=s.$1(8)
q=new C.cE1(w)
if(J.z(s.$1(1),1))if((w[0]&1)===1)q.$0()
else if(o.b!==0)q.$0()
else for(r=o.c;r>=0;--r)if(v[r]!==0){q.$0()
break}return J.l5(A.aG.gaM(w)).getFloat64(0,!0)},
u(d){var w,v,u,t,s,r=this,q=r.c
if(q===0)return"0"
if(q===1){if(r.a)return A.o.u(-r.b[0])
return A.o.u(r.b[0])}w=B.a([],x.s)
q=r.a
v=q?r.uU(0):r
while(v.c>1){u=$.hor()
if(u.c===0)B.ba(D.b1Z)
t=v.clU(u).u(0)
w.push(t)
s=t.length
if(s===1)w.push("000")
if(s===2)w.push("00")
if(s===3)w.push("0")
v=v.bKd(u)}w.push(A.o.u(v.b[0]))
if(q)w.push("-")
return new B.dz(w,x.bJ).fX(0)},
$iaRd:1,
$ihG:1}
C.aQE.prototype={
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
cJO(d,e){var w=this.b.h(0,e)
return w!=null?this.a[w]:null},
gL(d){return A.d.gL(this.a)},
gal(d){return A.d.gal(this.a)},
gam(d){return this.a.length===0},
gco(d){return this.a.length!==0},
gaf(d){var w=this.a
return new J.k0(w,w.length,B.U(w).k("k0<1>"))}}
C.Rn.prototype={
cRQ(){var w,v
if(this.as==null)this.bbp()
w=this.as
v=w==null?null:w.ao8()
return v==null?null:v.eG()},
bbp(){var w,v
if(this.as!=null)return
w=this.Q
if(w!=null){v=w.ao8().eG()
this.as=new C.bN7(v)}},
gZ(d){return this.at}}
C.a3o.prototype={
a4(){return"CompressionType."+this.b}}
C.bGW.prototype={
er(d){var w,v,u,t,s=this
if(d===0)return 0
if(s.c===0){s.c=8
s.b=s.a.cq()}for(w=s.a,v=0;u=s.c,d>u;){v=A.o.dV(v,u)+(s.b&A.yI[u])
d-=u
s.c=8
u=w.b
u.toString
s.b=u[w.c++]}if(d>0){if(u===0){s.c=8
s.b=w.cq()}w=A.o.dV(v,d)
u=s.b
t=s.c-d
v=w+(A.o.fE(u,t)&A.yI[d])
s.c=t}return v}}
C.bFi.prototype={
cI3(d,e){var w,v,u,t,s,r=this,q=new C.bGW(d)
r.cx=r.CW=r.ch=r.ay=0
if(q.er(8)!==66||q.er(8)!==90||q.er(8)!==104)return!1
w=r.a=q.er(8)-48
if(w<0||w>9)return!1
r.b=new Uint32Array(w*1e5)
v=0
for(;;){w=d.c
u=d.d
u===$&&B.c()
if(!(w<u))break
t=r.ckb(q)
if(t<0)return!1
if(t===0){q.er(8)
q.er(8)
q.er(8)
q.er(8)
s=r.cke(q,e)
if(s<0)return!1
v=(v<<1|v>>>31)^s^4294967295}else if(t===2){q.er(8)
q.er(8)
q.er(8)
q.er(8)
return!0}}return!0},
ckb(d){var w,v,u,t
for(w=!0,v=!0,u=0;u<6;++u){t=d.er(8)
if(t!==D.dfO[u])v=!1
if(t!==D.cUJ[u])w=!1
if(!w&&!v)return-1}return v?0:2},
cke(d3,d4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9=this,d0=4294967295,d1=d3.er(1),d2=((d3.er(8)<<8|d3.er(8))<<8|d3.er(8))>>>0
c9.c=new Uint8Array(16)
for(w=0;w<16;++w){v=c9.c
u=d3.er(1)
v.$flags&2&&B.aj(v)
v[w]=u}c9.d=new Uint8Array(256)
for(w=0,t=0;w<16;++w,t+=16)if(c9.c[w]!==0)for(s=0;s<16;++s){v=c9.d
u=d3.er(1)
v.$flags&2&&B.aj(v)
v[t+s]=u}c9.c_D()
v=c9.fx
if(v===0)return-1
r=v+2
q=d3.er(3)
if(q<2||q>6)return-1
v=d3.er(15)
c9.ax=v
if(v<1)return-1
c9.w=new Uint8Array(18002)
c9.x=new Uint8Array(18002)
for(w=0;v=c9.ax,w<v;++w){for(s=0;;){if(d3.er(1)===0)break;++s
if(s>=q)return-1}v=c9.w
v.$flags&2&&B.aj(v)
v[w]=s}p=new Uint8Array(6)
for(w=0;w<q;++w)p[w]=w
for(u=c9.x,o=c9.w,n=u.$flags|0,w=0;w<v;++w){m=o[w]
l=p[m]
for(;m>0;m=k){k=m-1
p[m]=p[k]}p[0]=l
n&2&&B.aj(u)
u[w]=l}c9.fr=B.c2(6,$.hmy(),!1,x.E)
for(j=0;j<q;++j){v=c9.fr
v[j]=new Uint8Array(258)
i=d3.er(5)
for(w=0;w<r;++w){for(;;){if(i<1||i>20)return-1
if(d3.er(1)===0)break
i=d3.er(1)===0?i+1:i-1}v=c9.fr[j]
v.$flags&2&&B.aj(v)
v[w]=i}}v=$.hmx()
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
if(f<h)h=f}c9.bWa(v[j],u[j],o[j],n[j],h,g,r)
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
a3=c9.asX(d3)
if(a3<0)return-1
for(a4=0;;){if(a3===e)break
if(a3===0||a3===1){a5=-1
a6=1
do{if(a6>=2097152)return-1
if(a3===0)a5+=a6
else if(a3===1)a5+=2*a6
a6*=2
a3=c9.asX(d3)}while(a3===0||a3===1);++a5
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
a3=c9.asX(d3)
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
d4.bH(c3)
c1=(c1<<8^D.GR[c1>>>24&255^v])>>>0;--c2}if(c4===c0)return c1
if(c4>c0)return-1
v=c9.b
b5=v[b5]
b6=b5>>>8
if(b8===0){b8=D.GT[b9];++b9
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
if(b8===0){b8=D.GT[b9];++b9
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
if(b8===0){b8=D.GT[b9];++b9
if(b9===512)b9=0}u=b8===1?1:0
c5=b5&255^u;++c4
if(c4===c0){c6=b7
b5=b6
c2=3
continue}if(c5!==b7){c6=c5
b5=b6
c2=3
continue}b5=v[b6]
if(b8===0){b8=D.GT[b9];++b9
if(b9===512)b9=0}u=b8===1?1:0
c2=(b5&255^u)+4
b5=v[b5>>>8]
b6=b5>>>8
if(b8===0){b8=D.GT[b9];++b9
if(b9===512)b9=0}v=b8===1?1:0
c6=b5&255^v
c4=c4+1+1
b5=b6}else for(c7=b7,c2=0,c3=0,c4=1;;c3=c7,c7=c8){if(c2>0){for(v=c3&255;;){if(c2===1)break
d4.bH(c3)
c1=c1<<8^D.GR[c1>>>24&255^v];--c2}d4.bH(c3)
c1=(c1<<8^D.GR[c1>>>24&255^v])>>>0}if(c4>c0)return-1
if(c4===c0)return c1
v=1e5*c9.a
if(b5>=v)return-1
u=c9.b
b5=u[b5]
c5=b5&255
b5=b5>>>8;++c4
c2=0
if(c5!==c7){d4.bH(c7)
c1=(c1<<8^D.GR[c1>>>24&255^c7&255])>>>0
c8=c5
continue}if(c4===c0){d4.bH(c7)
c1=(c1<<8^D.GR[c1>>>24&255^c7&255])>>>0
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
asX(d){var w,v,u,t,s=this,r=s.ay
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
t=d.er(u)
for(;;){if(u>20)return-1
r=s.cy
r===$&&B.c()
if(t<=r[u])break;++u
t=(t<<1|d.er(1))>>>0}r=s.dx
r===$&&B.c()
r=t-r[u]
if(r<0||r>=258)return-1
w=s.db
w===$&&B.c()
return w[r]},
bWa(d,e,f,g,h,i,j){var w,v,u,t,s,r,q,p
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
c_D(){var w,v,u,t=this
t.fx=0
t.e=new Uint8Array(256)
for(w=0;w<256;++w){v=t.d
v===$&&B.c()
if(v[w]!==0){v=t.e
u=t.fx++
v.$flags&2&&B.aj(v)
v[u]=w}}}}
C.cw8.prototype={
aGP(d,e,f){var w,v,u,t,s,r=this,q=r.a=r.bNt(e)
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
if(w>0)e.aGS(w,!1)
r.ckz(e)
q=r.r
v=r.f
u=e.aJQ(Math.min(v,1024),v,q)
q=r.x
for(;;){v=u.c
t=u.d
t===$&&B.c()
if(!(v<t))break
if(u.aK()!==33639248)break
s=new C.b7R()
s.cRP(0,u,e,f)
q.push(s)}},
ckz(d){var w,v,u,t,s=d.c,r=this.a-20
if(r<0)return
w=d.a77(20,r)
if(w.aK()!==117853008){d.c=s
return}w.aK()
v=w.rU()
w.aK()
d.c=v
if(d.aK()!==101075792){d.c=s
return}d.rU()
d.aU()
d.aU()
d.aK()
d.aK()
d.rU()
d.rU()
u=d.rU()
t=d.rU()
this.f=u
this.r=t
d.c=s},
bNt(d){var w,v,u,t,s,r,q,p,o,n
if(d.gM(0)<=4)return-1
w=d.c
v=d.gM(0)-4
u=Math.min(v,1024)
t=v-u
for(s=u-4;t>=0;){d.c=t
r=d.a77(u,t)
q=d.c
p=r.b
d.c=q+(p==null?0:p.length-r.c)
o=new B.ali(A.hT)
o.aL6(r.eG(),A.hT,null,null)
for(n=s;n>=0;--n){o.c=n
if(o.aK()===101010256){d.c=w
return t+n}}t=t>0&&t<u?0:t-u}return-1}}
C.cw6.prototype={}
C.aws.prototype={
a4(){return"ZipEncryptionMode."+this.b}}
C.cw9.prototype={
aGP(d,e,f){var w,v,u,t,s,r,q,p,o=this
if(e.aK()!==67324752)return
e.aU()
o.b=e.aU()
w=D.aCR.h(0,e.aU())
o.c=w==null?D.Lk:w
o.d=e.aU()
o.e=e.aU()
o.f=e.aK()
o.r=e.aK()
o.w=e.aK()
v=e.aU()
u=e.aU()
o.x=e.amW(v)
o.y=e.hd(u).eG()
w=o.z
t=w.w
o.r=t
w=w.x
o.w=w
o.at=(o.b&1)!==0?D.aT3:D.Dp
o.ay=f
o.Q=e.hd(t)
if(o.at!==D.Dp&&u>2){w=o.y
w.toString
s=B.r8(w,A.hT,null,null)
for(;;){w=s.c
t=s.d
t===$&&B.c()
if(!(w<t))break
if(s.aU()===39169){s.aU()
s.aU()
s.amW(2)
w=s.b
w.toString
r=w[s.c++]
q=s.aU()
o.at=D.aT4
o.ax=new C.cw6(r,q)
w=D.aCR.h(0,q)
o.c=w==null?D.Lk:w}}}if((o.b&8)!==0){p=e.aK()
if(p===134695760)o.f=e.aK()
else o.f=p
o.r=e.aK()
o.w=e.aK()}},
gM(d){return this.bkT().length},
ao8(){var w,v,u,t,s,r=this,q=null,p=r.Q
if(p==null)return B.r8(new Uint8Array(0),A.hT,q,q)
w=r.at
if(w!==D.Dp)if(p.gM(0)<=0)r.at=D.Dp
else{if(w===D.aT3){p=r.bIw(p)
r.Q=p}else if(w===D.aT4){p=r.bI9(p)
r.Q=p}r.at=D.Dp}w=r.c
if(w===D.afz){v=p.c
u=B.di()
p=r.Q
if(p.gM(0)<=524288e3)u.b=A.pj.Bh(p.eG(),!0,!1)
else{t=B.a82(A.hT,r.w)
p=r.Q
p.toString
A.pj.a3k(p,t,!0,!1)
u.b=t.GA()}r.Q.c=v
return B.r8(u.bf(),A.hT,q,q)}else if(w===D.afA){s=B.a82(A.hT,32768)
p=r.Q
v=p.c
C.hrG().cI3(p,s)
u=s.GA()
r.Q.c=v
return B.r8(u,A.hT,q,q)}else return B.r8(p.eG(),A.hT,q,q)},
bkT(){var w=this.Q
if(w==null)return new Uint8Array(0)
return w.eG()},
u(d){return this.x},
b7j(d){var w=this.ch,v=C.Jn(C.hi9(w[0].N(0),d))
w[0]=v
v=w[1].ad(0,v.Uk(0,C.Jn(255)))
w[1]=v
w[1]=v.aF(0,C.Jn(134775813)).ad(0,C.Jn(1)).Uk(0,C.Jn(4294967295))
w[2]=C.Jn(C.hi9(w[2].N(0),w[1].mo(0,24).N(0)))},
aPL(){var w=(this.ch[2].Uk(0,C.Jn(65535)).N(0)|2)>>>0
return w*((w^1)>>>0)>>>8&255},
bIw(d){var w,v,u,t,s,r=this,q=null
if(r.Q==null)return B.r8(new Uint8Array(0),A.hT,q,q)
for(w=0;w<12;++w){v=r.Q
u=v.b
u.toString
r.b7j(u[v.c++]^r.aPL())}t=r.Q.eG()
for(v=t.length,u=t.$flags|0,w=0;w<v;++w){s=t[w]^r.aPL()
r.b7j(s)
u&2&&B.aj(t)
t[w]=s}return B.r8(t,A.hT,q,q)},
bI9(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this.ax.c
if(k===1){w=d.hd(8).eG()
v=16}else if(k===2){w=d.hd(12).eG()
v=24}else{w=d.hd(16).eG()
v=32}u=d.hd(2).eG()
t=d.hd(d.gM(0)-10)
s=d.hd(10)
r=t.eG()
k=this.ay
k.toString
q=C.hIQ(k,w,v)
p=new Uint8Array(B.ce(A.aG.dq(q,0,v)))
k=v*2
o=new Uint8Array(B.ce(A.aG.dq(q,v,k)))
if(!C.haK(A.aG.dq(q,k,k+2),u))throw B.V(B.fl("password error"))
k=new Uint8Array(16)
n=new C.bDT(k,new Uint8Array(16),p)
k=x.S
m=J.a4O(0,k)
m=n.r=new C.cfT(m)
m.c=!0
m.b=m.bkb(!0,new C.as8(p))
if(m.c)m.d=B.bn(D.o4,!0,k)
else m.d=B.bn(D.yA,!0,k)
l=C.h8X(C.h8Z(),64)
l.bdI(new C.as8(o))
n.w=l
n.cRn(r,0,r.length)
k=s.eG()
m=n.x
m===$&&B.c()
if(!C.haK(k,m))throw B.V(B.fl("macs don't match"))
return B.r8(r,A.hT,null,null)}}
C.b7R.prototype={
cRP(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=this
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
if(w>0)n.at=e.amW(w)
if(v>0){t=e.hd(v).eG()
n.ax=t
if(v>=4){s=B.r8(t,A.hT,null,null)
for(;;){t=s.c
r=s.d
r===$&&B.c()
if(!(t<r))break
q=s.aU()
p=s.aU()
o=s.a77(p,s.c)
t=s.c
r=o.b
s.c=t+(r==null?0:r.length-o.c)
if(q===1){if(p>=8&&n.x===4294967295){n.x=o.rU()
p-=8}if(p>=8&&n.w===4294967295){n.w=o.rU()
p-=8}if(p>=8&&n.as===4294967295){n.as=o.rU()
p-=8}if(p>=4&&n.y===65535)n.y=o.aK()}}}}if(u>0)e.amW(u)
f.c=n.as
t=new C.cw9(D.Lk,n,D.Dp,B.a([C.Jn(0),C.Jn(0),C.Jn(0)],x.f3))
n.ch=t
t.aGP(0,f,g)},
u(d){return this.at}}
C.cw7.prototype={
cI4(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=new C.cw8(B.a([],x.fT))
this.a=g
g.aGP(0,d,f)
g=B.a([],x.bm)
w=B.T(x.N,x.S)
v=new C.aQE(g,w)
for(u=this.a.x,t=u.length,s=0;s<u.length;u.length===t||(0,B.L)(u),++s){r=u[s]
q=r.ch
p=r.Q>>>16
o=q.x
n=A.a.cb(o,"/")||A.a.cb(o,"\\")
m=w.h(0,o)
l=m!=null?g[m]:h
if(l==null){l=n?new C.Rn(o,A.o.an(Date.now(),1000),0):C.h1e(o,q.w,q)
v.J(0,l)}l.b=p
if(r.a>>>8===3)if((p&61440)===40960){k=C.h1e(o,q.w,q)
if(k.as==null)k.bbp()
o=k.as
if(o==null)j=h
else{o=o.a
j=new B.ali(A.hT)
j.aL6(o,A.hT,h,h)}i=j==null?h:j.eG()
if(i!=null)new B.FI(!1).Dg(i,0,h,!0)}}return v}}
C.bDT.prototype={
cRn(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.w
l===$&&B.c()
l.a.Cc(0,d,0,f)
for(l=e+f,w=m.c,v=d.$flags|0,u=m.b,t=e;t<l;t=s){s=t+16
r=s<=l?16:l-t
C.hrp(u,m.a)
q=m.r
if(16>u.byteLength)B.ba(B.dI("Input buffer too short",null))
if(16>w.byteLength)B.ba(B.dI("Output buffer too short",null))
p=q.c
o=q.b
if(p){o===$&&B.c()
q.bLP(u,0,w,0,o)}else{o===$&&B.c()
q.bIA(u,0,w,0,o)}for(n=0;n<r;++n){q=t+n
p=d[q]
o=w[n]
v&2&&B.aj(d)
d[q]=p^o}++m.a}l=m.w
w=l.b
w===$&&B.c()
w=new Uint8Array(w)
m.x=w
l.KM(w,0)
m.x=A.aG.dq(m.x,0,10)
w=m.w
l=w.a
l.lx(0)
w=w.d
w===$&&B.c()
l.Cc(0,w,0,w.length)
return f}}
C.cfY.prototype={}
C.cg1.prototype={}
C.cfW.prototype={}
C.as8.prototype={}
C.cg0.prototype={
cIj(d,e,f,g){var w,v,u,t,s,r,q,p,o=this,n=o.a
n===$&&B.c()
w=n.c
n=o.b
v=n.b
v===$&&B.c()
u=A.o.e6(w+v-1,v)
t=new Uint8Array(4)
s=new Uint8Array(u*v)
n.bdI(new C.as8(A.aG.fL(d,e)))
for(r=0,q=1;q<=u;++q){for(p=3;;--p){t[p]=t[p]+1
if(t[p]!==0)break}n=o.a
o.bMP(n.a,n.b,t,s,r)
r+=v}A.aG.hf(f,g,g+w,s)
return o.a.c},
bMP(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m=this
if(e<=0)throw B.V(B.dI("Iteration count must be at least 1.",null))
w=m.b
v=w.a
v.Cc(0,d,0,d.length)
v.Cc(0,f,0,4)
u=m.c
u===$&&B.c()
w.KM(u,0)
u=m.c
A.aG.hf(g,h,h+u.length,u)
for(u=g.$flags|0,t=1;t<e;++t){s=m.c
v.Cc(0,s,0,s.length)
w.KM(m.c,0)
for(s=m.c,r=s.length,q=0;q!==r;++q){p=h+q
o=g[p]
n=s[q]
u&2&&B.aj(g)
g[p]=o^n}}}}
C.cfX.prototype={}
C.cfV.prototype={}
C.as9.prototype={
A(d,e){var w,v,u
if(e==null)return!1
w=!1
if(e instanceof C.as9){v=this.a
v===$&&B.c()
u=e.a
u===$&&B.c()
if(v===u){w=this.b
w===$&&B.c()
v=e.b
v===$&&B.c()
v=w===v
w=v}}return w},
t5(d,e){var w=this.a
w===$&&B.c()
w=A.o.t5(w,e.gbWr())
if(!w)e.gbWr()
return w},
aJh(d,e){this.a=0
this.b=d},
t9(d){return this.aJh(d,null)},
aJT(d){var w,v=this,u=v.b
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
w.b_5(v,u)
u=w.b
u===$&&B.c()
w.b_5(v,u)
u=v.a
return u.charCodeAt(0)==0?u:u},
b_5(d,e){var w,v=A.o.fS(e,16)
for(w=8-v.length;w>0;--w)d.a+="0"
d.a+=v},
gX(d){var w,v=this.a
v===$&&B.c()
w=this.b
w===$&&B.c()
return B.bs(v,w,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h)}}
C.cg_.prototype={
lx(d){var w,v=this
v.a.t9(0)
v.c=0
A.aG.h_(v.b,0,4,0)
v.w=0
w=v.r
A.d.h_(w,0,w.length,0)
w=v.f
w[0]=1732584193
w[1]=4023233417
w[2]=2562383102
w[3]=271733878
w[4]=3285377520},
anD(d){var w,v=this,u=v.b,t=v.c
t===$&&B.c()
w=t+1
v.c=w
u.$flags&2&&B.aj(u)
u[t]=d&255
if(w===4){v.b0A(u,0)
v.c=0}v.a.aJT(1)},
Cc(d,e,f,g){var w=this.ciY(e,f,g)
f+=w
g-=w
w=this.ciZ(e,f,g)
this.ciP(e,f+w,g-w)},
KM(d,e){var w,v=this,u=C.h8Y(v.a),t=u.a
t===$&&B.c()
t=C.fZZ(t,3)
u.a=t
w=u.b
w===$&&B.c()
u.a=(t|w>>>29)>>>0
u.b=C.fZZ(w,3)
v.ciT()
v.ciQ(u)
v.arN()
v.cd2(d,e)
v.lx(0)
return 20},
b0A(d,e){var w=this,v=w.w
v===$&&B.c()
w.w=v+1
w.r[v]=J.nZ(A.aG.gaM(d),d.byteOffset,d.length).getUint32(e,A.i6===w.d)
if(w.w===16)w.arN()},
arN(){this.cRm()
this.w=0
A.d.h_(this.r,0,16,0)},
ciP(d,e,f){while(f>0){this.anD(d[e]);++e;--f}},
ciZ(d,e,f){var w,v
for(w=this.a,v=0;f>4;){this.b0A(d,e)
e+=4
f-=4
w.aJT(4)
v+=4}return v},
ciY(d,e,f){var w,v=0
for(;;){w=this.c
w===$&&B.c()
if(!(w!==0&&f>0))break
this.anD(d[e]);++e;--f;++v}return v},
ciT(){this.anD(128)
for(;;){var w=this.c
w===$&&B.c()
if(!(w!==0))break
this.anD(0)}},
ciQ(d){var w,v=this,u=v.w
u===$&&B.c()
if(u>14)v.arN()
u=v.d
switch(u){case A.i6:u=v.r
w=d.b
w===$&&B.c()
u[14]=w
w=d.a
w===$&&B.c()
u[15]=w
break
case A.DQ:u=v.r
w=d.a
w===$&&B.c()
u[14]=w
w=d.b
w===$&&B.c()
u[15]=w
break
default:throw B.V(B.bd("Invalid endianness: "+u.u(0)))}},
cd2(d,e){var w,v,u,t,s,r,q
for(w=this.e,v=this.f,u=d.length,t=A.i6===this.d,s=0;s<w;++s){r=v[s]
q=J.nZ(A.aG.gaM(d),d.byteOffset,u)
q.$flags&2&&B.aj(q,11)
q.setUint32(e+s*4,r,t)}},
gdc(d){return this.f}}
C.cg2.prototype={
cRm(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
for(w=this.r,v=16;v<80;++v){u=w[v-3]^w[v-8]^w[v-14]^w[v-16]
w[v]=((u&$.q1[1])<<1|u>>>31)>>>0}t=this.f
s=t[0]
r=t[1]
q=t[2]
p=t[3]
o=t[4]
for(n=s,m=0,l=0;l<4;++l,m=j){k=$.q1[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r&q|~r&p)>>>0)+w[m]+1518500249>>>0
i=$.q1[30]
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
q=((q&i)<<30|q>>>2)>>>0}for(l=0;l<4;++l,m=j){k=$.q1[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r^q^p)>>>0)+w[m]+1859775393>>>0
i=$.q1[30]
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
q=((q&i)<<30|q>>>2)>>>0}for(l=0;l<4;++l,m=j){k=$.q1[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r&q|r&p|q&p)>>>0)+w[m]+2400959708>>>0
i=$.q1[30]
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
q=((q&i)<<30|q>>>2)>>>0}for(l=0;l<4;++l,m=j){k=$.q1[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r^q^p)>>>0)+w[m]+3395469782>>>0
i=$.q1[30]
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
C.cfZ.prototype={
bdI(d){var w,v,u,t,s=this,r=s.a
r.lx(0)
w=d.a
w===$&&B.c()
v=w.length
u=s.c
u===$&&B.c()
if(v>u){r.Cc(0,w,0,v)
w=s.d
w===$&&B.c()
r.KM(w,0)
w=s.b
w===$&&B.c()
v=w}else{t=s.d
t===$&&B.c()
A.aG.hf(t,0,v,w)}w=s.d
w===$&&B.c()
A.aG.h_(w,v,w.length,0)
w=s.e
w===$&&B.c()
A.aG.hf(w,0,u,s.d)
s.b8s(s.d,u,54)
s.b8s(s.e,u,92)
u=s.d
r.Cc(0,u,0,u.length)},
KM(d,e){var w,v,u=this,t=u.a,s=u.e
s===$&&B.c()
w=u.c
w===$&&B.c()
t.KM(s,w)
s=u.e
t.Cc(0,s,0,s.length)
v=t.KM(d,e)
s=u.e
A.aG.h_(s,w,s.length,0)
s=u.d
s===$&&B.c()
t.Cc(0,s,0,s.length)
return v},
b8s(d,e,f){var w,v,u
for(w=d.$flags|0,v=0;v<e;++v){u=d[v]
w&2&&B.aj(d)
d[v]=u^f}}}
C.cfU.prototype={}
C.cfT.prototype={
a1H(d){return(D.o4[d&255]&255|(D.o4[d>>>8&255]&255)<<8|(D.o4[d>>>16&255]&255)<<16|D.o4[d>>>24&255]<<24)>>>0},
bkb(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=a0.a
e===$&&B.c()
w=e.length
if(w<16||w>32||(w&7)!==0)throw B.V(B.dI("Key length not 128/192/256 bits.",null))
v=w>>>2
u=v+6
f.a=u
t=u+1
s=J.e3(t,x.bW)
for(u=x.S,r=0;r<t;++r)s[r]=B.c2(4,0,!1,u)
switch(v){case 4:q=J.nZ(A.aG.gaM(e),e.byteOffset,w)
p=q.getUint32(0,!0)
e=s[0]
e[0]=p
o=q.getUint32(4,!0)
e[1]=o
n=q.getUint32(8,!0)
e[2]=n
m=q.getUint32(12,!0)
e[3]=m
for(r=1;r<=10;++r){p=(p^f.a1H((m>>>8|(m&$.q1[24])<<24)>>>0)^D.cx1[r-1])>>>0
e=s[r]
e[0]=p
o=(o^p)>>>0
e[1]=o
n=(n^o)>>>0
e[2]=n
m=(m^n)>>>0
e[3]=m}break
case 6:q=J.nZ(A.aG.gaM(e),e.byteOffset,w)
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
p=(p^f.a1H((k>>>8|(k&$.q1[24])<<24)>>>0)^j)>>>0
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
p=(p^f.a1H((k>>>8|(k&$.q1[24])<<24)>>>0)^i)>>>0
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
case 8:q=J.nZ(A.aG.gaM(e),e.byteOffset,w)
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
p=(p^f.a1H((g>>>8|(g&$.q1[24])<<24)>>>0)^j)>>>0
e=s[r]
e[0]=p
o=(o^p)>>>0
e[1]=o
n=(n^o)>>>0
e[2]=n
m=(m^n)>>>0
e[3]=m;++r
if(r>=15)break
l=(l^f.a1H(m))>>>0
e=s[r]
e[0]=l
k=(k^l)>>>0
e[1]=k
h=(h^k)>>>0
e[2]=h
g=(g^h)>>>0
e[3]=g;++r}break
default:throw B.V(B.bd("Should never get here"))}return s},
bLP(b2,b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=J.nZ(A.aG.gaM(b2),b2.byteOffset,16),a3=a2.getUint32(b3,!0),a4=a2.getUint32(b3+4,!0),a5=a2.getUint32(b3+8,!0),a6=a2.getUint32(b3+12,!0),a7=b6[0],a8=a3^a7[0],a9=a4^a7[1],b0=a5^a7[2],b1=a6^a7[3]
for(a7=this.a-1,w=1;w<a7;){v=D.e7[a8&255]
u=D.e7[a9>>>8&255]
t=$.q1[8]
s=D.e7[b0>>>16&255]
r=$.q1[16]
q=D.e7[b1>>>24&255]
p=$.q1[24]
o=b6[w]
n=v^(u>>>24|(u&t)<<8)^(s>>>16|(s&r)<<16)^(q>>>8|(q&p)<<24)^o[0]
q=D.e7[a9&255]
s=D.e7[b0>>>8&255]
u=D.e7[b1>>>16&255]
v=D.e7[a8>>>24&255]
m=q^(s>>>24|(s&t)<<8)^(u>>>16|(u&r)<<16)^(v>>>8|(v&p)<<24)^o[1]
v=D.e7[b0&255]
u=D.e7[b1>>>8&255]
s=D.e7[a8>>>16&255]
q=D.e7[a9>>>24&255]
l=v^(u>>>24|(u&t)<<8)^(s>>>16|(s&r)<<16)^(q>>>8|(q&p)<<24)^o[2]
q=D.e7[b1&255]
a8=D.e7[a8>>>8&255]
a9=D.e7[a9>>>16&255]
b0=D.e7[b0>>>24&255];++w
b1=q^(a8>>>24|(a8&t)<<8)^(a9>>>16|(a9&r)<<16)^(b0>>>8|(b0&p)<<24)^o[3]
o=D.e7[n&255]
b0=D.e7[m>>>8&255]
a9=D.e7[l>>>16&255]
a8=D.e7[b1>>>24&255]
q=b6[w]
a8=o^(b0>>>24|(b0&t)<<8)^(a9>>>16|(a9&r)<<16)^(a8>>>8|(a8&p)<<24)^q[0]
a9=D.e7[m&255]
b0=D.e7[l>>>8&255]
o=D.e7[b1>>>16&255]
s=D.e7[n>>>24&255]
a9=a9^(b0>>>24|(b0&t)<<8)^(o>>>16|(o&r)<<16)^(s>>>8|(s&p)<<24)^q[1]
s=D.e7[l&255]
o=D.e7[b1>>>8&255]
b0=D.e7[n>>>16&255]
u=D.e7[m>>>24&255]
b0=s^(o>>>24|(o&t)<<8)^(b0>>>16|(b0&r)<<16)^(u>>>8|(u&p)<<24)^q[2]
u=D.e7[b1&255]
o=D.e7[n>>>8&255]
s=D.e7[m>>>16&255]
v=D.e7[l>>>24&255];++w
b1=u^(o>>>24|(o&t)<<8)^(s>>>16|(s&r)<<16)^(v>>>8|(v&p)<<24)^q[3]}n=D.e7[a8&255]^C.nn(D.e7[a9>>>8&255],24)^C.nn(D.e7[b0>>>16&255],16)^C.nn(D.e7[b1>>>24&255],8)^b6[w][0]
m=D.e7[a9&255]^C.nn(D.e7[b0>>>8&255],24)^C.nn(D.e7[b1>>>16&255],16)^C.nn(D.e7[a8>>>24&255],8)^b6[w][1]
l=D.e7[b0&255]^C.nn(D.e7[b1>>>8&255],24)^C.nn(D.e7[a8>>>16&255],16)^C.nn(D.e7[a9>>>24&255],8)^b6[w][2]
b1=D.e7[b1&255]^C.nn(D.e7[a8>>>8&255],24)^C.nn(D.e7[a9>>>16&255],16)^C.nn(D.e7[b0>>>24&255],8)^b6[w][3]
a7=D.o4[n&255]
b0=D.o4[m>>>8&255]
v=this.d
u=v[l>>>16&255]
t=v[b1>>>24&255]
s=b6[w+1]
r=s[0]
q=v[m&255]
p=D.o4[l>>>8&255]
a9=D.o4[b1>>>16&255]
o=v[n>>>24&255]
k=s[1]
j=v[l&255]
i=D.o4[b1>>>8&255]
h=D.o4[n>>>16&255]
g=D.o4[m>>>24&255]
f=s[2]
e=v[b1&255]
d=v[n>>>8&255]
v=v[m>>>16&255]
a0=D.o4[l>>>24&255]
s=s[3]
a1=J.nZ(A.aG.gaM(b4),b4.byteOffset,16)
a1.$flags&2&&B.aj(a1,11)
a1.setUint32(b5,(a7&255^(b0&255)<<8^(u&255)<<16^t<<24^r)>>>0,!0)
r=J.nZ(A.aG.gaM(b4),b4.byteOffset,16)
r.$flags&2&&B.aj(r,11)
r.setUint32(b5+4,(q&255^(p&255)<<8^(a9&255)<<16^o<<24^k)>>>0,!0)
k=J.nZ(A.aG.gaM(b4),b4.byteOffset,16)
k.$flags&2&&B.aj(k,11)
k.setUint32(b5+8,(j&255^(i&255)<<8^(h&255)<<16^g<<24^f)>>>0,!0)
f=J.nZ(A.aG.gaM(b4),b4.byteOffset,16)
f.$flags&2&&B.aj(f,11)
f.setUint32(b5+12,(e&255^(d&255)<<8^(v&255)<<16^a0<<24^s)>>>0,!0)},
bIA(b1,b2,b3,b4,b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=J.nZ(A.aG.gaM(b1),b1.byteOffset,16).getUint32(b2,!0),a1=J.nZ(A.aG.gaM(b1),b1.byteOffset,16).getUint32(b2+4,!0),a2=J.nZ(A.aG.gaM(b1),b1.byteOffset,16).getUint32(b2+8,!0),a3=J.nZ(A.aG.gaM(b1),b1.byteOffset,16).getUint32(b2+12,!0),a4=this.a,a5=b5[a4],a6=a0^a5[0],a7=a1^a5[1],a8=a2^a5[2],a9=a4-1,b0=a3^a5[3]
for(a5=a8,a4=a7;a9>1;){w=D.e6[a6&255]
v=D.e6[b0>>>8&255]
u=$.q1[8]
t=D.e6[a5>>>16&255]
s=$.q1[16]
r=D.e6[a4>>>24&255]
q=$.q1[24]
a7=b5[a9]
p=w^(v>>>24|(v&u)<<8)^(t>>>16|(t&s)<<16)^(r>>>8|(r&q)<<24)^a7[0]
r=D.e6[a4&255]
t=D.e6[a6>>>8&255]
v=D.e6[b0>>>16&255]
w=D.e6[a5>>>24&255]
o=r^(t>>>24|(t&u)<<8)^(v>>>16|(v&s)<<16)^(w>>>8|(w&q)<<24)^a7[1]
w=D.e6[a5&255]
v=D.e6[a4>>>8&255]
t=D.e6[a6>>>16&255]
r=D.e6[b0>>>24&255]
n=w^(v>>>24|(v&u)<<8)^(t>>>16|(t&s)<<16)^(r>>>8|(r&q)<<24)^a7[2]
r=D.e6[b0&255]
a5=D.e6[a5>>>8&255]
a4=D.e6[a4>>>16&255]
a6=D.e6[a6>>>24&255];--a9
b0=r^(a5>>>24|(a5&u)<<8)^(a4>>>16|(a4&s)<<16)^(a6>>>8|(a6&q)<<24)^a7[3]
a7=D.e6[p&255]
a6=D.e6[b0>>>8&255]
a4=D.e6[n>>>16&255]
a5=D.e6[o>>>24&255]
r=b5[a9]
a6=a7^(a6>>>24|(a6&u)<<8)^(a4>>>16|(a4&s)<<16)^(a5>>>8|(a5&q)<<24)^r[0]
a5=D.e6[o&255]
a4=D.e6[p>>>8&255]
a7=D.e6[b0>>>16&255]
t=D.e6[n>>>24&255]
a4=a5^(a4>>>24|(a4&u)<<8)^(a7>>>16|(a7&s)<<16)^(t>>>8|(t&q)<<24)^r[1]
t=D.e6[n&255]
a7=D.e6[o>>>8&255]
a5=D.e6[p>>>16&255]
v=D.e6[b0>>>24&255]
a5=t^(a7>>>24|(a7&u)<<8)^(a5>>>16|(a5&s)<<16)^(v>>>8|(v&q)<<24)^r[2]
v=D.e6[b0&255]
a7=D.e6[n>>>8&255]
t=D.e6[o>>>16&255]
w=D.e6[p>>>24&255];--a9
b0=v^(a7>>>24|(a7&u)<<8)^(t>>>16|(t&s)<<16)^(w>>>8|(w&q)<<24)^r[3]}p=D.e6[a6&255]^C.nn(D.e6[b0>>>8&255],24)^C.nn(D.e6[a5>>>16&255],16)^C.nn(D.e6[a4>>>24&255],8)^b5[a9][0]
o=D.e6[a4&255]^C.nn(D.e6[a6>>>8&255],24)^C.nn(D.e6[b0>>>16&255],16)^C.nn(D.e6[a5>>>24&255],8)^b5[a9][1]
n=D.e6[a5&255]^C.nn(D.e6[a4>>>8&255],24)^C.nn(D.e6[a6>>>16&255],16)^C.nn(D.e6[b0>>>24&255],8)^b5[a9][2]
b0=D.e6[b0&255]^C.nn(D.e6[a5>>>8&255],24)^C.nn(D.e6[a4>>>16&255],16)^C.nn(D.e6[a6>>>24&255],8)^b5[a9][3]
a4=D.yA[p&255]
a5=this.d
w=a5[b0>>>8&255]
v=a5[n>>>16&255]
u=D.yA[o>>>24&255]
t=b5[0]
s=t[0]
r=a5[o&255]
q=a5[p>>>8&255]
a7=D.yA[b0>>>16&255]
m=a5[n>>>24&255]
l=t[1]
k=a5[n&255]
j=D.yA[o>>>8&255]
i=D.yA[p>>>16&255]
h=a5[b0>>>24&255]
g=t[2]
f=D.yA[b0&255]
e=a5[n>>>8&255]
a8=a5[o>>>16&255]
a5=a5[p>>>24&255]
t=t[3]
d=J.nZ(A.aG.gaM(b3),b3.byteOffset,16)
d.$flags&2&&B.aj(d,11)
d.setUint32(b4,(a4&255^(w&255)<<8^(v&255)<<16^u<<24^s)>>>0,!0)
d.setUint32(b4+4,(r&255^(q&255)<<8^(a7&255)<<16^m<<24^l)>>>0,!0)
d.setUint32(b4+8,(k&255^(j&255)<<8^(i&255)<<16^h<<24^g)>>>0,!0)
d.setUint32(b4+12,(f&255^(e&255)<<8^(a8&255)<<16^a5<<24^t)>>>0,!0)}}
C.bN6.prototype={}
C.bN7.prototype={
gM(d){var w=this.a.length
return w},
ao8(){return B.r8(this.a,A.hT,null,null)}}
C.b9p.prototype={
uQ(d){return C.hM4(d)}}
C.cq_.prototype={
Mm(d){var w=d.w,v=Math.max(1,A.k.dw(w/186)),u=Math.max(0,w-16*(v-1))/v,t=u/0.52
return new B.a9F(v,t+20,u+16,t,u,B.tO(d.x))},
nl(d){return!1}}
C.bO_.prototype={
cCk(d){if(this.b)throw B.V(B.bd("FontLoader is already loaded"))
this.c.push(d.bA(new C.bO0(),x.E))},
mE(d){var w=0,v=B.j(x.H),u=this,t,s,r,q,p
var $async$mE=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(u.b)throw B.V(B.bd("FontLoader is already loaded"))
u.b=!0
t=u.c,s=t.length,r=u.a,q=0
case 2:if(!(q<t.length)){w=4
break}p=C
w=6
return B.b(t[q],$async$mE)
case 6:w=5
return B.b(p.fsR(f,r),$async$mE)
case 5:case 3:t.length===s||(0,B.L)(t),++q
w=2
break
case 4:return B.h(null,v)}})
return B.i($async$mE,v)}}
C.av8.prototype={
a4(){return"SystemUiMode."+this.b}}
C.a80.prototype={
A(d,e){if(e==null)return!1
if(J.bM(e)!==B.b_(this))return!1
return e instanceof C.a80&&e.a===this.a},
gX(d){return B.bs(B.b_(this),B.wE(this.a),A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h)},
u(d){var w="<optimized out>#"
if(B.b_(this)===D.fzn)return"["+(w+B.e4(this.a))+"]"
return"[ObjectKey "+(w+B.e4(this.a))+"]"}}
C.aV6.prototype={
c0(d){var w=new C.aA0(!0,this.e,null,new B.df(),B.ci())
w.bZ()
w.scE(null)
return w},
c9(d,e){var w
x.cQ.a(e)
e.sys(0,!0)
w=this.e
if(!w.A(0,e.ak)){e.ak=w
e.aFr()}}}
C.aA0.prototype={
sys(d,e){return},
gpr(){var w=this.ab$
return w!=null},
gl0(){var w=this.ab$
return w!=null},
Mb(d){var w=d==null?B.h3E(null):d
w.sa4e(this.ak)
return w}}
C.a0q.prototype={
R(){return new C.aIp(B.aX(x.N))},
cPy(d){return this.d.$1(d)},
cNl(){return this.e.$0()}}
C.aIp.prototype={
a_(){this.a1()
this.OK()},
OK(){var w=0,v=B.j(x.H),u,t=this,s
var $async$OK=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.a.cNl(),$async$OK)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.f4k(t,s))
case 1:return B.h(u,v)}})
return B.i($async$OK,v)},
Yu(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$Yu=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.a.c
q=B.U(r).k("a2<1>")
p=B.B(new B.a2(r,new C.f4o(t),q),q.k("J.E"))
if(p.length===0||t.r){w=1
break}t.m(new C.f4p(t))
w=3
return B.b(C.an2(p),$async$Yu)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.f4q(t,s,p))
w=4
return B.b(t.OK(),$async$Yu)
case 4:case 1:return B.h(u,v)}})
return B.i($async$Yu,v)},
a0F(d){return this.cn8(d)},
cn8(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a0F=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}t.m(new C.f4l(t))
s=J.q(d,"id")
w=3
return B.b(C.bYE(J.k(s==null?"":s)),$async$a0F)
case 3:r=f
if(r==null){if(t.c==null){w=1
break}t.m(new C.f4m(t))
w=1
break}q=C.fZt(r,!1)
q.z=!1
s=t.a
s.toString
w=4
return B.b(s.cPy(B.a([q],x.D)),$async$a0F)
case 4:if(t.c==null){w=1
break}t.m(new C.f4n(t,r))
case 1:return B.h(u,v)}})
return B.i($async$a0F,v)},
OJ(d,e){return this.bJ0(0,e)},
bJ0(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$OJ=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}s=J.a6(e)
r=s.h(e,"name")
q=J.k(r==null?"this presentation":r)
r=t.c
r.toString
w=3
return B.b(B.ca(null,null,!0,null,new C.f4f(q),r,null,!0,!0,x.y),$async$OJ)
case 3:if(g!==!0||t.c==null){w=1
break}t.m(new C.f4g(t))
s=s.h(e,"id")
w=4
return B.b(C.an1(J.k(s==null?"":s)),$async$OJ)
case 4:if(t.c==null){w=1
break}t.m(new C.f4h(t))
w=5
return B.b(t.OK(),$async$OJ)
case 5:case 1:return B.h(u,v)}})
return B.i($async$OJ,v)},
cBn(d){var w=B.bi(d),v=w==null?null:w.bS()
if(v==null)return""
return A.ie[B.bG(v)-1]+" "+B.bQ(v)},
aPC(d,e){var w=null,v=B.m(e*0.3)
return B.p(w,B.X(d,A.c,w,w,w,e*0.5),A.f,w,w,new B.o(w,w,w,v,w,D.NT,A.n),w,e,w,w,w,w,w,e)},
aPB(d){return this.aPC(d,44)},
b5G(d,e,f,g){var w,v,u=null,t=this.w===d,s=t?D.NT:u,r=B.m(14),q=B.X(e,t?A.c:A.az,u,u,u,17),p=x.p
q=B.a([q,L.IA,B.d(f,u,u,u,u,u,u,B.l(u,u,t?A.c:A.az,u,u,u,u,u,u,u,u,13.5,u,u,A.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],p)
if(g>0){w=A.c.j(t?0.25:0.1)
v=B.m(10)
A.d.v(q,B.a([L.IA,B.p(u,B.d(""+g,u,u,u,u,u,u,B.l(u,u,t?A.c:A.aR,u,u,u,u,u,u,u,u,11,u,u,A.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.f,u,u,new B.o(w,u,u,v,u,u,A.n),u,u,u,u,D.bvy,u,u,u)],p))}return B.E(B.aE(A.c4,B.dj(u,B.A(q,A.m,u,A.bb,A.j,0,u,u),u,u,A.bc,new B.o(u,u,u,r,u,s,A.n),A.hX,u,u,u,A.vd,u,u,u),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.f4u(this,d),u,u,u,u,u,u,!1,A.a8),1)},
cgW(d){var w,v,u,t,s,r,q=null,p=this.d.t(0,d.a),o=p?A.d6.j(0.14):D.X9,n=B.m(18),m=p?A.d6:A.dq
m=B.I(m,A.q,p?1.8:1)
w=this.aPB(A.pU)
v=B.d(d.b,q,1,A.a2,q,q,q,D.aPZ,q,q,q)
u=d.r.length
t=u===1?"":"s"
s=x.p
t=B.E(B.v(B.a([v,A.cS,B.d(""+u+" slide"+t,q,q,q,q,q,q,D.aQ0,q,q,q)],s),A.F,q,A.e,A.j,0,A.p),1)
v=p?D.NT:q
u=p?q:B.I(A.b2,A.q,1.6)
r=p?D.bLl:q
return B.aE(q,B.dj(q,B.A(B.a([w,A.bf,t,B.dj(q,r,q,q,A.bc,new B.o(q,q,u,q,q,v,A.a6),A.fG,q,26,q,q,q,q,26)],s),A.m,q,A.e,A.j,0,q,q),q,q,A.bc,new B.o(o,q,m,n,q,q,A.n),A.fG,q,q,A.db,A.bk,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.f4j(this,p,d),q,q,q,q,q,q,!1,A.a8)},
coG(d){var w,v,u,t,s,r=this,q=null,p=J.a6(d),o=p.h(d,"savedAt"),n=r.cBn(J.k(o==null?"":o))
o=B.m(18)
w=B.I(A.dq,A.q,1)
v=r.aPB(A.N5)
u=p.h(d,"name")
u=B.d(J.k(u==null?"Presentation":u),q,1,A.a2,q,q,q,D.aPZ,q,q,q)
p=p.h(d,"slides")
p=B.t(p==null?"?":p)
t=n.length===0?"":" \xb7 saved "+n
s=x.p
t=B.E(B.v(B.a([u,A.cS,B.d(p+" slides"+t,q,q,q,q,q,q,D.aQ0,q,q,q)],s),A.F,q,A.e,A.j,0,A.p),1)
p=r.b2j(A.hA,A.bt,"Bring it back",r.r?q:new C.f4r(r,d))
return B.p(q,B.A(B.a([v,A.bf,t,p,A.bp,r.b2j(A.e5,A.c7,"Delete",r.r?q:new C.f4s(r,d))],s),A.m,q,A.e,A.j,0,q,q),A.f,q,q,new B.o(D.X9,q,w,o,q,q,A.n),q,q,q,A.db,D.bq5,q,q,q)},
b2j(d,e,f,g){var w=null,v=g==null,u=e.j(v?0.06:0.14)
return B.hq(B.aE(w,B.p(w,B.X(d,v?A.b2:e,w,w,w,19),A.f,w,w,new B.o(u,w,w,w,w,w,A.a6),w,38,w,w,w,w,w,38),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a8),w,f,w,w)},
as2(d,e,f){var w=null
return new B.D(D.bp9,B.v(B.a([B.X(d,A.b2,w,w,w,46),A.ac,B.d(e,w,w,w,w,w,w,D.f6g,w,w,w),A.at,B.d(f,w,w,w,w,w,w,D.eZO,A.L,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),w)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.e
if(h==null)h=A.c8
w=j.a.c.length
v=w!==0&&j.d.a===w
w=B.aI(d,A.bU,x.w).w
u=B.p(i,i,A.f,i,i,new B.o(A.b2,i,i,B.m(3),i,i,A.n),i,4,i,i,i,i,i,42)
t=x.p
s=B.a([j.aPC(A.yn,46),A.bf,D.bwp],t)
if(j.r)s.push(D.e6d)
s.push(B.aH(i,i,i,i,A.NE,i,i,i,new C.f4x(d),i,i,i,i,i,i))
s=B.A(s,A.m,i,A.e,A.j,0,i,i)
r=A.c.j(0.05)
q=B.m(18)
p=B.I(A.dq,A.q,1)
o=J.a6(h)
q=B.a([A.S,u,new B.D(D.bsD,s,i),B.p(i,B.A(B.a([j.b5G(0,A.xZ,"Save",j.a.c.length),j.b5G(1,A.Nk,"Saved",o.gM(h))],t),A.m,i,A.e,A.j,0,i,i),A.f,i,i,new B.o(r,i,p,q,i,i,A.n),i,i,i,D.brH,A.ep,i,i,i)],t)
if(j.x!=null){u=(j.y?A.c7:A.bt).j(0.12)
s=B.m(14)
r=B.I((j.y?A.c7:A.bt).j(0.4),A.q,1)
p=j.y
n=p?A.N6:A.ef
n=B.X(n,p?A.c7:A.bt,i,i,i,18)
m=j.x
m.toString
q.push(B.p(i,B.A(B.a([n,A.ab,B.E(B.d(m,i,i,i,i,i,i,A.a72,i,i,i),1)],t),A.m,i,A.e,A.j,0,i,i),A.f,i,i,new B.o(u,i,r,s,i,i,A.n),i,i,i,D.brD,A.ic,i,i,1/0))}u=B.a([],t)
if(j.w===0){s=j.d.a
s=B.a([B.E(B.d(s===0?"Tap the ones to save":""+s+" picked",i,i,i,i,i,i,D.f2m,i,i,i),1)],t)
if(j.a.c.length!==0)s.push(B.aE(i,B.d(v?"Clear":"Pick all",i,i,i,i,i,i,D.f5n,i,i,i),A.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new C.f4y(j,v),i,i,i,i,i,i,!1,A.a8))
s=B.a([B.A(s,A.m,i,A.e,A.j,0,i,i),A.S],t)
if(j.a.c.length===0)s.push(j.as2(A.pU,"No presentations yet","Make one first, then save it here."))
for(r=j.a.c,p=r.length,l=0;l<r.length;r.length===p||(0,B.L)(r),++l)s.push(j.cgW(r[l]))
A.d.v(u,s)}else{s=B.a([],t)
if(j.f)s.push(D.e5M)
else if(j.e==null)s.push(j.as2(A.akh,"Could not reach the database","Check the connection, then open this again."))
else if(o.gam(h))s.push(j.as2(A.oE,"Nothing saved yet","Save some presentations and they will show up here."))
for(r=o.gaf(h);r.C();)s.push(j.coG(r.gT(r)))
A.d.v(u,s)}q.push(new B.dq(1,A.cn,B.cz(u,i,X.ahp,i,i,A.ah,!0),i))
if(j.w===0){u=j.d
s=u.a===0
r=s||j.r?i:j.gc26()
p=s?i:D.NT
s=s?A.c.j(0.07):i
o=B.m(18)
n=u.a===0?i:B.a([new B.ac(0,A.G,A.b7.j(0.4),A.cx,18)],x.V)
u=u.a
m=u===0
k=B.X(A.xZ,m?A.jb:A.c,i,i,i,21)
u=m?"Pick presentations to save":"Save "+u+" to the database"
q.push(new B.D(D.bsf,B.aE(i,B.dj(i,B.A(B.a([k,A.a6w,new B.dq(1,A.cn,B.f4(A.A,B.d(u,i,i,i,i,i,i,B.l(i,i,m?A.jb:A.c,i,i,i,i,i,i,i,i,15,i,i,A.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),A.f,A.eh),i)],t),A.m,i,A.bb,A.j,0,i,i),i,i,A.bc,new B.o(s,i,i,o,n,p,A.n),A.hX,i,54,i,i,i,i,i),A.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,r,i,i,i,i,i,i,!1,A.a8),i))}else q.push(A.S)
return B.p(i,B.bl(!0,B.v(q,A.m,i,A.e,A.Q,0,A.p),!0,!1,A.af,!0,!1),A.f,i,new B.aY(0,1/0,0,w.a.b*0.9),D.aZY,i,i,i,i,i,i,i,i)}}
C.of.prototype={
ag(){return B.F(["id",this.a,"doc",this.b.ag(),"updatedAt",this.c.a6().ac()],x.N,x.z)}}
C.Ya.prototype={
R(){return new C.ax_(B.a([],x.k),B.f7(null,x.H))},
gdZ(){return this.c}}
C.ax_.prototype={
a_(){this.a1()
this.OS()},
OS(){var w=0,v=B.j(x.H),u,t=this,s
var $async$OS=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(C.a1p(t.a.c),$async$OS)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.cFm(t,s))
case 1:return B.h(u,v)}})
return B.i($async$OS,v)},
cuI(d){var w,v,u,t=this
d.c=new B.S(Date.now(),0,!1)
w=J.qa(t.d,new C.cFp(d))
v=w<0
if(v&&C.hJc(d))return t.f
u=t.d
if(v)J.pr(u,0,d)
else J.aF(u,w,d)
v=x.a
B.fQ9(new C.cFq(t),v)
return t.f=t.f.bA(new C.cFr(t,d),v).eU(new C.cFs())},
Ik(d,e,f){return this.caA(0,e,f)},
aXd(d,e){return this.Ik(0,e,!1)},
caA(d,e,f){var w=0,v=B.j(x.H),u,t=this,s
var $async$Ik=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.a5(s,!1).c8(B.e9(new C.cFl(t,e),!1,null,x.H)),$async$Ik)
case 3:w=4
return B.b(t.f,$async$Ik)
case 4:w=5
return B.b(t.OS(),$async$Ik)
case 5:case 1:return B.h(u,v)}})
return B.i($async$Ik,v)},
aWu(d){var w=A.o.u(1000*Date.now()),v=d==null?D.dsh:d
this.Ik(0,new C.of(w,v,new B.S(Date.now(),0,!1)),!0)},
c1C(){return this.aWu(null)},
acE(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$acE=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.bR(A.K,null,new C.cFt(),r,!1,!1,!0,null,!1,!1,x.g2),$async$acE)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.aWu(s)
case 1:return B.h(u,v)}})
return B.i($async$acE,v)},
Ij(d,e){return this.bIT(0,e)},
bIT(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$Ij=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return B.b(B.ca(null,null,!0,null,new C.cFg(e),s,null,!0,!0,x.y),$async$Ij)
case 3:if(g!==!0){w=1
break}t.m(new C.cFh(t,e))
w=4
return B.b(t.f,$async$Ij)
case 4:w=5
return B.b(C.afU(t.a.c,e.a),$async$Ij)
case 5:w=6
return B.b(t.OS(),$async$Ij)
case 6:case 1:return B.h(u,v)}})
return B.i($async$Ij,v)},
D_(d){return this.bB4(d)},
bB4(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$D_=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.bR(A.K,null,new C.cFc(d),r,!0,!0,!1,null,!1,!1,x.N),$async$D_)
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
return B.b(t.aXd(0,d),$async$D_)
case 9:w=5
break
case 7:w=10
return B.b(F.h_0(r,d.b,null),$async$D_)
case 10:w=5
break
case 8:w=11
return B.b(t.Ij(0,d),$async$D_)
case 11:w=5
break
case 5:case 1:return B.h(u,v)}})
return B.i($async$D_,v)},
bWo(){var w,v,u=null,t=[D.dsk,D.dsi,D.dsj],s=new C.cFj(),r=B.m(26),q=x.V,p=B.a([new B.ac(0,A.G,A.d8.j(0.4),A.eT,24)],q),o=x.p,n=B.a([],o)
for(w=0;w<3;++w){v=new B.aT(999,999)
n.push(B.p(u,new B.x(D.dcC[w],u,A.oh,u,u,u,u,u,u,u,u,u),A.f,u,u,new B.o(A.c.j(0.18),u,u,new B.bp(v,v,v,v),u,u,A.n),u,u,u,u,A.nW,u,u,u))}return B.p(u,B.A(B.a([B.E(B.v(B.a([D.fuT,A.N,B.bW(A.bz,n,A.bq,6,6),A.aQ,B.aE(u,B.p(u,D.eIK,A.f,u,u,new B.o(A.c,u,u,B.m(999),B.a([new B.ac(0,A.G,A.w.j(0.2),A.cJ,10)],q),u,A.n),u,u,u,u,U.ahM,u,u,u),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.cFi(this),u,u,u,u,u,u,!1,A.a8)],o),A.F,u,A.e,A.j,0,A.p),1),new B.a7(130,110,new B.an(A.A,u,A.aa,A.r,B.a([s.$3(t[0],-0.22,-30),s.$3(t[2],0.22,30),s.$3(t[1],0,0)],o),u),u)],o),A.m,u,A.e,A.j,0,u,u),A.f,u,u,new B.o(u,u,u,r,p,D.bTo,A.n),u,u,u,u,D.bsN,u,u,u)},
bB2(d){var w,v=null,u=d.b.d.length,t=B.m(6),s=B.a([new B.ac(0,A.G,A.w.j(0.5),A.cx,14)],x.V),r=x.p
s=B.p(v,B.bw(B.m(6),new B.an(A.W,v,A.b0,A.r,B.a([B.f4(A.A,F.anA(d.b),A.f,A.bR),D.ebH,B.ao(v,B.aE(v,B.p(v,D.bM8,A.f,v,v,D.b_S,v,26,v,v,v,v,v,26),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.cF7(this,d),v,v,v,v,v,v,!1,A.a8),v,v,v,4,4,v)],r),v),A.aq),A.f,v,v,new B.o(v,v,v,t,s,v,A.n),v,v,v,v,v,v,v,v)
t=A.a.i(d.b.a)
t=B.d(t.length===0?"Untitled Book":t,v,1,A.a2,v,v,v,D.eXc,v,v,v)
w=u===1?"":"s"
return B.aE(v,B.v(B.a([new B.fG(0.6470588235294118,s,v),A.N,t,B.d(""+u+" page"+w,v,v,v,v,v,v,D.f2y,v,v,v)],r),A.F,v,A.e,A.j,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,new C.cF8(this,d),v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.cF9(this,d),v,v,v,v,v,v,!1,A.a8)},
B(d){var w,v,u,t=this,s=null,r=x.p,q=B.eC(B.a([new B.D(H.agi,B.hq(B.aE(s,B.p(s,A.an_,A.f,s,s,new B.o(s,s,s,s,B.a([new B.ac(0,A.G,A.b7.j(0.5),A.J,12)],x.V),E.vP,A.a6),s,36,s,s,s,s,s,36),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.gc2S(),s,s,s,s,s,s,!1,A.a8),s,"Write with AI",s,s),s)],r),s,s,!0,!0,A.K,s,1,!0,s,0,!1,s,!1,E.n0,s,s,s,!0,s,s,s,s,s,D.fuX,s,s,s,1,s,!0)
if(t.e)r=D.b3f
else{w=t.bWo()
v=B.a([D.fgH,A.ab],r)
if(J.cy(t.d)){u=B.m(999)
v.push(B.p(s,B.d(""+J.ad(t.d),s,s,s,s,s,s,D.eWE,s,s,s),A.f,s,s,new B.o(D.b7U,s,s,u,s,s,A.n),s,s,s,s,A.xH,s,s,s))}r=B.a([new B.nM(A5.Yf,new B.m4(w,s),s),new B.nM(D.bs9,new B.m4(B.A(v,A.m,s,A.e,A.j,0,s,s),s),s)],r)
if(J.cm(t.d))r.push(D.eOL)
else r.push(new B.nM(D.brF,B.Oz(new B.ok(new C.cFu(t),J.ad(t.d),!0,!0,!0,0,B.rP(),s),D.b2x),s))
r=B.vp(0,s,A.r,s,A.y,s,s,s,s,s,!1,s,A.ah,!1,r)}return B.c8(q,D.b6I,r,s,!1,!1,s,s)}}
C.Y8.prototype={
R(){return new C.awW(B.a([],x.bx))},
Ty(d){return this.d.$1(d)}}
C.aEh.prototype={}
C.awW.prototype={
b_7(d,e,f){var w=$.aw(),v=new B.ar(new B.bb(d,A.b4,A.aN),w),u=this.gaXc()
v.aN(0,u)
w=new B.ar(new B.bb(e,A.b4,A.aN),w)
w.aN(0,u)
return new C.aEh(v,w,f)},
DP(){var w,v=this
v.y=!0
w=v.x
if(w!=null)w.a7(0)
v.x=B.cM(A.pJ,new C.cEB(v))},
a_(){var w,v,u,t,s,r,q,p,o,n,m=this
m.a1()
w=m.a.c.b
v=$.aw()
u=new B.ar(new B.bb(w.a,A.b4,A.aN),v)
t=m.gaXc()
u.aN(0,t)
m.d!==$&&B.aP()
m.d=u
u=new B.ar(new B.bb(w.b,A.b4,A.aN),v)
u.aN(0,t)
m.e!==$&&B.aP()
m.e=u
u=new B.ar(new B.bb(w.c,A.b4,A.aN),v)
u.aN(0,t)
m.f!==$&&B.aP()
m.f=u
m.r=w.e
for(u=w.d,s=u.length,r=m.w,q=0;q<u.length;u.length===s||(0,B.L)(u),++q){p=u[q]
o=new B.ar(new B.bb(p.a,A.b4,A.aN),v)
o.aN(0,t)
n=new B.ar(new B.bb(p.b,A.b4,A.aN),v)
n.aN(0,t)
r.push(new C.aEh(o,n,p.c))}if(r.length===0)r.push(m.b_7("Page 1","",""))},
q(){var w,v,u,t,s,r=this,q=r.x
if(q!=null)q.a7(0)
if(r.y){r.a.c.b=r.gp6()
q=r.a
q.Ty(q.c)}q=r.d
q===$&&B.c()
w=q.U$=$.aw()
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
s.P$=0}r.a2()},
gp6(){var w,v,u,t,s,r,q,p,o=this,n=o.d
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
t.push(new F.mp(A.a.i(p.a.a.a),p.b.a.a,p.c,""))}return new F.rd(n,w,v,t,u)},
Az(){var w=0,v=B.j(x.H),u=this,t
var $async$Az=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.x
if(t!=null)t.a7(0)
u.y=!1
u.a.c.b=u.gp6()
t=u.a
w=2
return B.b(t.Ty(t.c),$async$Az)
case 2:return B.h(null,v)}})
return B.i($async$Az,v)},
c2Q(){this.m(new C.cEA(this))
this.DP()},
aWb(d,e){var w=this,v=d+e
if(v<0||v>=w.w.length)return
w.m(new C.cED(w,d,v))
w.DP()},
c2R(d,e){var w=A.d.cC(this.w,e)
this.m(new C.cEL())
this.DP()
$.aW.x1$.push(new C.cEM(w))},
Q2(d){return this.cgM(d)},
cgM(d){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Q2=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hX().l3(80,1400,A.eG),$async$Q2)
case 7:q=f
if(q==null){w=1
break}w=8
return B.b(q.fi(),$async$Q2)
case 8:p=f
o=q.b.toLowerCase()
n=J.ahq(o,".png")?"image/png":"image/jpeg"
r.m(new C.cEE(d,n,p))
r.DP()
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
return B.i($async$Q2,v)},
xx(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$xx=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(F.hlM(r,t.gp6()),$async$xx)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.cEC(t,s))
t.DP()
case 1:return B.h(u,v)}})
return B.i($async$xx,v)},
ch3(d){var w,v=this,u=null,t=F.fwZ(d.c)
if(t==null)return new B.bI(A.a3,u,u,B.he(D.bFt,D.fj8,new C.cEG(v,d),u),u)
w=x.p
return new B.D(A.cB,new B.an(A.W,u,A.aa,A.r,B.a([B.bw(B.m(12),B.fL(t,A.A,u,u,A.cl,A.bR,!0,140,!1,u,1/0),A.aq),B.ao(u,B.A(B.a([v.b2k(A.kS,new C.cEH(v,d)),A.bp,v.b2k(A.cC,new C.cEI(v,d))],w),A.m,u,A.e,A.j,0,u,u),u,u,u,6,6,u)],w),u),u)},
b2k(d,e){var w=null
return B.aG(!1,A.a1,!0,w,B.aL(!1,w,!0,new B.D(A.hx,B.X(d,A.c,w,w,w,18),w),A.cL,!0,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,w),A.f,A.aX,0,w,w,A.cL,w,w,A.ag)},
Il(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Il=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.Az(),$async$Il)
case 3:s=t.c
if(s==null){w=1
break}w=4
return B.b(F.h_0(s,t.gp6(),new C.cEK(t)),$async$Il)
case 4:case 1:return B.h(u,v)}})
return B.i($async$Il,v)},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=x.p,k=B.eC(B.a([new B.D(A.qW,B.he(D.bK6,D.fp7,n.gavH(),B.fv(m,m,m,m,m,m,m,m,m,m,m,A.bK,m,m,m,m,m,m,m,m,m,m,m,m,m,m)),m),B.aH(m,m,m,m,A.amZ,m,m,m,new C.cEN(n,d),m,m,m,m,"Save",m)],l),m,m,!0,!0,E.Wn,m,1,m,m,m,!1,m,!1,E.n0,m,m,m,!0,m,m,m,m,m,D.fk_,m,m,m,1,m,!0),j=Aw.aTO(O.la,A.c,Ae.Vg,A.o0,D.fkM,n.gc2P()),i=B.m(18),h=n.gavG(),g=B.a([new B.ac(0,A.G,A.w.j(0.4),A.jl,12)],x.V)
g=B.aE(m,B.p(m,new B.a7(92,142.1818181818182,B.f4(A.A,F.anA(n.gp6()),A.f,A.du),m),A.f,m,m,new B.o(m,m,m,m,g,m,A.n),m,m,m,m,m,m,m,m),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,h,m,m,m,m,m,m,!1,A.a8)
w=n.r
w===$&&B.c()
i=B.p(m,B.A(B.a([g,A.ey,B.E(B.v(B.a([D.fwr,A.at,B.d(F.fYx(w.a).b+" template \xb7 pick from 10, change colours, add your picture.",m,m,m,m,m,m,D.f7Z,m,m,m),A.S,B.dk(E.amg,E.aQL,h,B.bm(A.d8,m,m,m,m,m,m,m,m,m,m,m))],l),A.F,m,A.e,A.j,0,A.p),1)],l),A.m,m,A.e,A.j,0,m,m),A.f,m,m,new B.o(E.Wn,m,m,i,m,m,A.n),m,m,m,m,A.bk,m,m,m)
h=n.d
h===$&&B.c()
h=B.aM(m,A.T,!1,m,!0,A.r,m,B.aN(),h,m,m,m,m,m,2,B.br(m,new B.b4(4,B.m(12),A.dg),m,m,m,m,m,m,!0,m,m,m,m,m,m,A.c,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,"Book title",!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.ai,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,A.og,!0,A.a4,m,A.am,m,m,m,m)
w=n.e
w===$&&B.c()
w=B.aM(m,A.T,!1,m,!0,A.r,m,B.aN(),w,m,m,m,m,m,2,B.br(m,new B.b4(4,B.m(12),A.dg),m,m,m,m,m,m,!0,m,m,m,m,m,m,A.c,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,"Subtitle (optional)",!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.ai,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.a4,m,A.am,m,m,m,m)
g=n.f
g===$&&B.c()
g=B.a([i,A.aA,h,A.N,w,A.N,B.aM(m,A.T,!1,m,!0,A.r,m,B.aN(),g,m,m,m,m,m,2,B.br(m,new B.b4(4,B.m(12),A.dg),m,m,m,m,m,m,!0,m,m,m,m,m,m,A.c,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,"Author (optional)",!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.ai,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.a4,m,A.am,m,m,m,m),A.aQ],l)
for(i=n.w,v=0;v<i.length;v=t){h=i[v]
w=new B.aT(16,16)
u=new B.ay(O.la.j(0.18),1,A.q,-1)
t=v+1
s=B.aH(m,m,m,m,D.bIR,m,m,m,v===0?m:new C.cEO(n,v),m,m,m,m,"Move up",A.cb)
r=i.length
q=B.aH(m,m,m,m,D.bP7,m,m,m,v===r-1?m:new C.cEP(n,v),m,m,m,m,"Move down",A.cb)
r=r===1?m:new C.cEQ(n,v)
p=new B.aT(12,12)
o=new B.aT(12,12)
g.push(B.p(m,B.v(B.a([new B.cn(A.aO,A.e,A.j,A.m,m,A.p,m,0,B.a([new B.x("Page "+t,m,D.f8w,m,m,m,m,m,m,m,m,m),A.b6,s,q,B.aH(m,m,m,m,B.X(A.e5,A.ox,m,m,m,18),m,m,m,r,m,m,m,m,"Remove page",A.cb)],l),m),B.aM(m,A.T,!1,m,!0,A.r,m,B.aN(),i[v].a,m,m,m,m,m,2,new B.e2(m,m,m,"Title",m,m,m,m,m,m,m,m,m,m,m,m,!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.c,m,m,m,m,m,m,m,new B.b4(4,new B.bp(p,p,p,p),A.dg),!0,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.ai,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,A.cj,!0,A.a4,m,A.am,m,m,m,m),A.an,n.ch3(i[v]),B.aM(m,A.T,!1,m,!0,A.r,m,B.aN(),i[v].b,m,m,m,m,m,2,new B.e2(m,m,m,"Write here\u2026 long pages flow onto the next paper page",m,m,m,m,m,m,m,m,m,m,m,m,!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.c,m,m,m,m,m,m,m,new B.b4(4,new B.bp(o,o,o,o),A.dg),!0,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.ai,m,m,m,m,m,m,m,m,m,m,5,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.a4,m,A.am,m,m,m,m)],l),A.m,m,A.e,A.j,0,A.p),A.f,m,m,new B.o(E.n0,m,new B.bO(u,u,u,u),new B.bp(w,w,w,w),m,m,A.n),m,m,new C.a80(h),A.e4,D.bqk,m,m,m))}return B.oh(!0,B.c8(k,E.aeq,B.cz(g,m,D.bqL,m,m,A.ah,!1),m,!1,!1,j,m),new C.cER(n),x.C)}}
C.awY.prototype={
B(d){var w,v,u=this,t=null,s=u.r,r=s?A.c7:E.n0,q=B.m(16),p=B.m(16),o=s?A.ay.j(0.08):A.c.j(0.04)
s=s?A.ay.j(0.16):A.d8.j(0.22)
w=B.m(12)
v=x.p
return new B.D(A.eO,B.aG(!1,A.a1,!0,t,B.aL(!1,q,!0,B.p(t,B.A(B.a([B.p(t,B.X(u.c,r,t,t,t,20),A.f,t,t,new B.o(s,t,t,w,t,t,A.n),t,40,t,t,t,t,t,40),A.bf,B.E(B.v(B.a([B.d(u.d,t,t,t,t,t,t,B.l(t,t,r,t,t,t,t,t,t,t,t,15,t,t,A.H,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),A.bB,B.d(u.e,t,t,t,t,t,t,D.aPk,t,t,t)],v),A.F,t,A.e,A.j,0,A.p),1),B.X(A.ex,r.j(0.6),t,t,t,t)],v),A.m,t,A.e,A.j,0,t,t),A.f,t,t,new B.o(o,t,t,p,t,t,A.n),t,t,t,t,A.bk,t,t,t),t,!0,t,t,t,t,t,t,t,t,t,t,t,u.f,t,t,t,t,t,t,t),A.f,A.K,0,t,t,t,t,t,A.ag),t)}}
C.apI.prototype={
R(){return new C.aD3()}}
C.aD3.prototype={
a_(){this.a1()
this.Z6()},
br(d){this.bC(d)
if(d.c!=this.a.c)this.a0u()},
a0u(){var w=0,v=B.j(x.H),u=this,t
var $async$a0u=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.d
t=t==null?null:t.q()
w=2
return B.b(x.bq.b(t)?t:B.dP(t,x.H),$async$a0u)
case 2:u.d=null
if(u.c!=null)u.m(new C.e7T(u))
w=3
return B.b(u.Z6(),$async$a0u)
case 3:return B.h(null,v)}})
return B.i($async$a0u,v)},
Z6(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Z6=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:o=r.a.c
n=A.a.i(o==null?"":o)
if(J.ad(n)===0){w=1
break}t=4
if(J.d_(n,"http://")||J.d_(n,"https://")||J.d_(n,"data:")){o=B.XM(B.cw(n,0,null),new B.OW(!0))
r.d=o}else{o=B.fl("unsupported video ref")
throw B.V(o)}w=7
return B.b(o.i8(0).cM(0,A.pF),$async$Z6)
case 7:if(r.c==null){w=1
break}r.d.tb(!1)
r.m(new C.e7R(r))
t=2
w=6
break
case 4:t=3
m=s.pop()
q=B.aa(m)
$.am.$1("[kiapo video] "+B.t(q))
if(r.c!=null)r.m(new C.e7S(r))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Z6,v)},
q(){var w=this.d
if(w!=null)w.q()
this.a2()},
c5t(){var w=this,v=w.d
if(v==null||!w.e)return
if(v.a.f){v.h2(0)
w.m(new C.e7U(w))}else{v.pQ(0)
w.m(new C.e7V(w))}},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.a,m=n.c
if(A.a.i(m==null?"":m).length===0){if(!n.e)return A.bH
n=B.m(8*n.d)
m=B.a([D.j8.j(0.92),D.Kr.j(0.95)],x.O)
w=B.I(A.bZ.j(0.55),A.q,1)
v=p.a
u=v.d
t=B.X(A.pX,A.bZ,o,o,o,28*u)
v=v.f?"Tap to add president video":"Video ya kiapo"
return B.c_(B.av(B.v(B.a([t,new B.a7(o,6*u,o,o),B.d(v,o,o,o,o,o,o,B.l(o,o,A.c.j(0.85),o,o,o,o,o,o,o,o,11*p.a.d,o,o,A.P,o,o,!0,o,o,o,o,o,o,o,o),A.L,o,o)],x.p),A.m,o,A.e,A.Q,0,A.p),o,o,o),new B.o(o,o,w,n,o,new B.a8(A.ax,A.aC,A.x,m,o,o),A.n),A.bd)}if(p.f)return B.av(B.X(A.aly,A.az,o,o,o,28*n.d),o,o,o)
if(!p.e||p.d==null)return D.b44
s=p.d
m=s.a.as
r=m.a
r=r>0?r:16
q=m.b
q=q>0?q:9
n=B.m(6*n.d)
m=B.a([B.f4(A.A,new B.a7(r,q,new B.zT(s,o),o),A.r,A.bR)],x.p)
if(!p.r){w=8*p.a.d
v=A.w.j(0.45)
m.push(B.av(B.p(o,B.X(A.iW,A.c,o,o,o,28*p.a.d),A.f,o,o,new B.o(v,o,o,o,o,o,A.a6),o,o,o,o,new B.Q(w,w,w,w),o,o,o),o,o,o))}return B.aE(o,B.bw(n,new B.an(A.W,o,A.b0,A.r,m,o),A.aq),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gc5s(),o,o,o,o,o,o,!1,A.a8)}}
C.xl.prototype={
a4(){return"NgmyHatiLayoutKind."+this.b}}
C.jl.prototype={}
C.acR.prototype={
B(d){return B.oL(new C.dXz(this,B.P(d).ax.a===A.I,d),!0,0.72,0.9,0.5,!1,null)}}
C.acf.prototype={
B(d){var w,v,u=null,t=B.P(d).ax.a===A.I,s=B.m(18),r=B.m(18),q=B.I(D.j8.j(t?0.35:0.4),A.q,1),p=t?D.KW:A.c,o=x.V,n=B.a([new B.ac(0,A.G,A.w.j(t?0.3:0.08),A.cx,14)],o),m=B.m(10),l=B.I(A.bZ.j(0.5),A.q,1)
o=B.a([new B.ac(0,A.G,A.w.j(0.14),A.dE,6)],o)
w=this.c
o=B.E(B.p(u,new B.fG(0.5625,C.i0x(w),u),A.aq,u,u,new B.o(u,u,l,m,o,u,A.n),u,u,u,D.aif,u,u,u,u),1)
m=D.j8.j(t?0.18:0.16)
l=B.d(w.b,u,u,u,u,u,u,B.l(u,u,t?A.c:D.j8,u,u,u,u,u,u,u,u,12.5,u,u,A.u,u,u,!0,u,0.1,u,u,u,u,u,u),u,u,u)
v=x.p
return B.aG(!1,A.a1,!0,u,B.aL(!1,s,!0,B.p(u,B.v(B.a([o,B.p(u,B.v(B.a([l,A.cS,B.d(w.c,u,2,A.a2,u,u,u,B.l(u,u,t?A.az:D.bdS,u,u,u,u,u,u,u,u,9.5,u,u,u,u,1.32,!0,u,u,u,u,u,u,u,u),u,u,u)],v),A.F,u,A.e,A.j,0,A.p),A.f,u,u,new B.o(u,u,new B.bO(new B.ay(m,1,A.q,-1),A.Y,A.Y,A.Y),u,u,u,A.n),u,u,u,u,D.agy,u,u,u)],v),A.aj,u,A.e,A.j,0,A.p),A.f,u,u,new B.o(p,u,q,r,n,u,A.n),u,u,u,u,u,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,this.d,u,u,u,u,u,u,u),A.f,A.K,0,u,u,u,u,u,A.ag)}}
C.xo.prototype={
a4(){return"NgmyMarriageLayoutKind."+this.b}}
C.nC.prototype={}
C.bit.prototype={
Zf(d){var w=null
return new B.bI(A.a3,w,w,B.Dy(A.A,B.p(w,w,A.f,w,w,new B.o(this.d.j(0.14),w,w,B.m(3),w,w,A.n),w,5,w,w,w,w,w,w),w,d),w)},
c5V(){return this.Zf(1)},
awl(d){var w=null,v=B.m(8),u=B.I(A.hV,A.q,0.9)
return B.p(A.A,B.d(d,w,w,w,w,w,w,B.l(w,w,this.d,w,w,w,w,w,w,w,w,6.5,w,w,A.u,w,w,!0,w,0.3,w,w,w,w,w,w),w,w,w),A.f,w,w,new B.o(D.acr,w,u,v,w,w,A.n),w,13,w,w,w,w,w,w)},
B(d){var w=this,v=null,u=x.p,t=w.d
return B.v(B.a([B.A(B.a([B.p(v,v,A.f,v,v,new B.o(v,v,B.I(A.hV,A.q,1.6),v,v,v,A.a6),v,22,v,v,v,v,v,22),B.dU(B.p(v,v,A.f,v,v,new B.o(v,v,B.I(A.hV,A.q,1.6),v,v,v,A.a6),v,22,v,v,v,v,v,22),new B.u(-8.36,0))],u),A.m,v,A.bb,A.j,0,v,v),A.at,B.d("HATI YA NDOA",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,12,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v),B.d("Hati ya Makubaliano ya Ndoa",v,v,v,v,v,v,B.l(v,v,t.j(0.7),v,v,v,v,v,v,v,v,7,v,v,A.a5,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v),A.an,w.awl("TAARIFA ZA WANANDOA"),A.an,w.c5V(),A.cS,w.Zf(0.9),A.cS,w.Zf(0.7),A.N,w.awl("TAMKO LA MAKUBALIANO"),A.h0,w.Zf(1),A.cS,w.Zf(0.95),A.N,w.awl("MASHAHIDI"),A.b6,B.d("NGMY",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,8,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.d(w.c.b,v,v,v,v,v,v,B.l(v,v,w.e,v,v,v,v,v,v,v,v,7,v,v,A.P,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],u),A.m,v,A.e,A.j,0,A.p)}}
C.acU.prototype={
B(d){return B.oL(new C.ed7(B.P(d).ax.a===A.I,d),!0,0.92,0.96,0.5,!1,null)}}
C.aeB.prototype={
B(d){var w,v,u,t,s,r=null,q=B.P(d).ax.a===A.I,p=B.m(18),o=B.m(18),n=B.I(A.aw.j(q?0.35:0.4),A.q,1),m=q?D.bds:A.c,l=x.V,k=B.a([new B.ac(0,A.G,A.w.j(q?0.3:0.08),A.cx,14)],l),j=B.m(10),i=B.I(A.aw.j(0.5),A.q,1)
l=B.a([new B.ac(0,A.G,A.w.j(0.14),A.dE,6)],l)
w=this.c
v=C.fZ1(w.a)
if(v==null)v=A.d.gL(D.Qm)
u=B.b0(v.f)
t=B.b0(v.r)
s=x.p
l=B.E(B.p(r,new B.fG(0.5625,new B.an(A.W,r,A.b0,A.r,B.a([B.bZ(0,B.fL(C.fZ0(v.d),A.A,r,r,A.cl,A.bR,!0,r,!1,r,r),0,0,0),new B.D(A.ahg,new C.bit(v,u,t,r),r)],s),r),r),A.aq,r,r,new B.o(r,r,i,j,l,r,A.n),r,r,r,D.aif,r,r,r,r),1)
j=A.aw.j(q?0.18:0.16)
i=B.d(w.b,r,r,r,r,r,r,B.l(r,r,q?A.c:Z.KX,r,r,r,r,r,r,r,r,12.5,r,r,A.u,r,r,!0,r,0.1,r,r,r,r,r,r),r,r,r)
return B.aG(!1,A.a1,!0,r,B.aL(!1,p,!0,B.p(r,B.v(B.a([l,B.p(r,B.v(B.a([i,A.cS,B.d(w.c,r,2,A.a2,r,r,r,B.l(r,r,q?A.az:D.b7d,r,r,r,r,r,r,r,r,9.5,r,r,r,r,1.32,!0,r,r,r,r,r,r,r,r),r,r,r)],s),A.F,r,A.e,A.j,0,A.p),A.f,r,r,new B.o(r,r,new B.bO(new B.ay(j,1,A.q,-1),A.Y,A.Y,A.Y),r,r,r,A.n),r,r,r,r,D.agy,r,r,r)],s),A.aj,r,A.e,A.j,0,A.p),A.f,r,r,new B.o(m,r,n,o,k,r,A.n),r,r,r,r,r,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,this.d,r,r,r,r,r,r,r),A.f,A.K,0,r,r,r,r,r,A.ag)}}
C.kQ.prototype={
a4(){return"NgmyMarriagePaperStyle."+this.b}}
C.a7u.prototype={}
C.Vj.prototype={
R(){var w=$.aw()
return new C.aDm(new B.cs(null,x.A),new B.ar(A.as,w),new B.ar(A.as,w),B.my(0,null,null),A.d.gL(D.a2a),D.dCC,B.a([],x.L),B.a([],x.gE))}}
C.aDm.prototype={
a_(){var w,v=this
v.a1()
v.w=v.a.c
v.z=new C.zf(C.fAS(v.y),"NGMY NEWS","","","By the NGMY Newsroom","",A.T,"","","")
w=x.a
C.fzO().bA(new C.egp(v),w)
$.qO().jw(0,"assets/images/ngmy_logo.png").bA(new C.egq(v),w).eU(new C.egr())},
q(){var w=this,v=w.e,u=$.aw()
v.U$=u
v.P$=0
v=w.f
v.U$=u
v.P$=0
w.r.q()
w.a2()},
agy(d){var w=null,v=this.c
if(v!=null)v.I(x.q).f.S(B.b2(w,w,w,w,w,A.r,w,B.d(d,w,w,w,w,w,w,w,w,w,w),w,A.U,w,w,w,w,w,w,w,w,w,w))},
IF(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k
var $async$IF=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hX().l3(88,1600,A.eG),$async$IF)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fi(),$async$IF)
case 8:p=e
m=r.c
if(m==null){w=1
break}w=9
return B.b(C.hm2(m,p),$async$IF)
case 9:o=e
if(o==null||r.c==null){w=1
break}m=r.c
m.toString
w=10
return B.b(F.bCu(new B.pF(o,1),m),$async$IF)
case 10:if(r.c!=null)r.m(new C.eg1(r,o))
t=2
w=6
break
case 4:t=3
k=s.pop()
n=B.aa(k)
r.agy("Could not open that picture. "+B.t(n))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$IF,v)},
Wm(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$Wm=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.w
if(q==null||t.as){w=1
break}s=t.c
s.toString
w=3
return B.b(C.hm2(s,q),$async$Wm)
case 3:r=e
if(r==null||t.c==null){w=1
break}s=t.c
s.toString
w=4
return B.b(F.bCu(new B.pF(r,1),s),$async$Wm)
case 4:if(t.c!=null)t.m(new C.efY(t,r))
case 1:return B.h(u,v)}})
return B.i($async$Wm,v)},
adt(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$adt=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.as){w=1
break}q.m(new C.eg8(q))
t=4
q.a.toString
p=C.i4Z()
l=q.Q
k=q.e.a
o=l==="sw"?A.a.i(A.a.i(k.a)+" Write the whole newspaper in Swahili (Kiswahili)."):k.a
k=q.y
w=7
return B.b(p.$4$paper$photo$request$template(null,q.w,o,k),$async$adt)
case 7:n=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.eg9(q,n))
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
m=B.aa(i)
q.agy(B.t(m))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.ega(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$adt,v)},
Zk(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h,g
var $async$Zk=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i=A.a.i(q.f.a.a)
h=!0
if(J.ad(i)!==0)if(!q.as){h=q.z
h=A.a.i(h.c).length===0&&h.r.length===0}if(h){w=1
break}q.m(new C.eg3(q,i))
t=4
q.a.toString
p=C.i4Y()
h=q.z
m=q.y
l=q.w
k=B.B(q.ax,x.fz)
w=7
return B.b(p.$5$doc$history$instruction$photo$template(h,k,i,l,m),$async$Zk)
case 7:o=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.eg4(q,o))
r.push(6)
w=5
break
case 4:t=3
g=s.pop()
n=B.aa(g)
if(q.c!=null)q.m(new C.eg5(q,n))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.eg6(q))
$.aW.x1$.push(new C.eg7(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Zk,v)},
c6a(d){this.m(new C.eg2(this,d))},
E6(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$E6=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(!q.as){k=q.z
k=A.a.i(k.c).length===0&&k.r.length===0}else k=!0
if(k){w=1
break}q.m(new C.eg_(q))
t=4
w=7
return B.b($.aW.gmz(),$async$E6)
case 7:w=8
return B.b(B.bN(A.n6,null,x.H),$async$E6)
case 8:k=$.aW.ak$.x.h(0,q.d)
p=k==null?null:k.gb8()
if(!(p instanceof B.pQ))throw B.V("The page is not ready yet.")
w=9
return B.b(p.lW(1800/p.gZ(0).a),$async$E6)
case 9:o=e
w=10
return B.b(o.hr(A.fY),$async$E6)
case 10:n=e
if(n==null)throw B.V("Could not make the picture.")
w=11
return B.b(A7.afX(J.eT(A.dD.gaM(n)),"ngmy_news.png","image/png"),$async$E6)
case 11:m=e
q.agy(m?"Your newspaper picture is ready. Check your downloads.":"Downloading is not available here.")
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
l=B.aa(i)
q.agy(B.t(l))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.eg0(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$E6,v)},
B(a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=a1.z,a4=!(A.a.i(a3.c).length===0&&a3.r.length===0)
a3=B.aH(a2,a2,a2,a2,A.kU,a2,a2,a2,new C.egg(a5),a2,a2,a2,a2,a2,a2)
w=x.p
v=B.a([],w)
if(a1.ay.length!==0)v.push(B.aH(a2,a2,a2,a2,D.bKC,a2,a2,a2,new C.egh(a1),a2,a2,a2,a2,"Undo the last change",a2))
v.push(B.aH(a2,a2,a2,a2,A.oN,a2,a2,a2,a4?a1.gaYl():a2,a2,a2,a2,a2,"Download",a2))
a3=B.eC(v,a2,a2,!0,!0,A.AJ,a2,1,!0,a2,0,!1,a2,!1,a2,a2,a3,a2,!0,a2,a2,a2,a2,a2,D.eIT,a2,a2,a2,1,a2,!0)
v=x.V
u=B.a([new B.ac(0,A.G,A.w.j(0.6),A.eT,24)],v)
t=a1.z
s=a1.y
r=a1.w
u=B.p(a2,new B.fG(0.7142857142857143,B.f4(A.A,new B.ev(new C.b03(t,s,r,a1.x,a2),a1.d),A.f,A.du),a2),A.f,a2,a2,new B.o(a2,a2,a2,a2,u,a2,A.n),a2,a2,a2,a2,a2,a2,a2,a2)
s=B.d("1  YOUR PICTURE",a2,a2,a2,a2,a2,a2,D.Tp,a2,a2,a2)
t=a1.as?a2:a1.gc69()
t=B.a([B.E(B.dk(D.bLm,B.d(r==null?"Add a picture":"Change the picture",a2,a2,a2,a2,a2,a2,A.cj,a2,a2,a2),t,B.bm(D.tf,a2,a2,a2,A.c,A.fN,a2,a2,new B.b7(B.m(14),P.uQ),a2,a2,a2)),1)],w)
r=a1.w
if(r!=null){r=B.bw(B.m(10),B.fL(r,A.A,a2,a2,A.cl,A.bR,!1,48,!1,a2,48),A.aq)
A.d.v(t,B.a([A.av,r,B.aH(a2,a2,a2,a2,D.bI9,a2,a2,a2,a1.as?a2:a1.gbHu(),a2,a2,a2,a2,"Crop the picture",a2)],w))}t=B.A(t,A.m,a2,A.e,A.j,0,a2,a2)
r=B.d("2  WHAT SHOULD IT BE ABOUT?  (optional)",a2,a2,a2,a2,a2,a2,D.Tp,a2,a2,a2)
q=B.aM(a2,A.T,!1,a2,!0,A.r,a2,B.aN(),a1.e,a2,a2,a2,a2,a2,2,a1.aRs("Leave it empty and the AI picks a story about NGMY"),A.y,!0,a2,!0,a2,!1,a2,A.ai,a2,a2,a2,a2,a2,a2,a2,a2,a2,3,1,a2,!1,"\u2022",a2,a2,a2,a2,a2,!1,a2,a2,!1,a2,!0,a2,A.a9,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,A.dm,!0,A.a4,a2,A.am,a2,a2,a2,a2)
p=B.a([],w)
for(o=0;o<7;++o){n=D.d7m[o]
p.push(B.mG(a2,D.tf,new B.x(n.a,a2,A.p7,a2,a2,a2,a2,a2,a2,a2,a2,a2),A.hD,new C.egi(a1,n),a2,a2,P.uQ,a2))}p=B.bW(A.bz,p,A.bq,6,8)
m=a1.Q
m=B.bW(A.bz,B.a([D.fv5,A.bf,B.j5(a2,a2,a2,D.ffv,a2,new C.egj(a1),m==="en",a2,a2,a2,a2),A.ab,B.j5(a2,a2,a2,D.ffq,a2,new C.egk(a1),m==="sw",a2,a2,a2,a2)],w),A.rO,0,8)
l=B.d("3  PICK A DESIGN",a2,a2,a2,a2,a2,a2,D.Tp,a2,a2,a2)
k=B.a([],w)
for(j=x.dt,i=B.dd(D.a2a,0,B.dJ(10,"count",x.S),j),h=i.$ti,i=new B.bS(i,i.gM(0),h.k("bS<ak.E>")),h=h.k("ak.E");i.C();){g=i.d
k.push(a1.aPW(g==null?h.a(g):g))}k=B.cz(k,a2,a2,a2,a2,A.aO,!1)
i=B.a([],w)
for(j=B.dd(D.a2a,10,a2,j),h=j.$ti,j=new B.bS(j,j.gM(0),h.k("bS<ak.E>")),h=h.k("ak.E");j.C();){g=j.d
i.push(a1.aPW(g==null?h.a(g):g))}j=B.cz(i,a2,a2,a2,a2,A.aO,!1)
i=a1.as?a2:a1.gc6c()
h=B.m(18)
v=B.a([new B.ac(0,A.G,A.bA.j(0.4),A.J,18)],v)
v=B.a([u,A.aA,new B.D(A.cB,s,a2),t,A.aA,new B.D(A.cB,r,a2),q,A.N,p,A.S,m,A.aA,new B.D(A.cB,l,a2),new B.a7(a2,78,k,a2),A.N,new B.a7(a2,78,j,a2),A.aQ,B.aE(a2,B.p(A.A,B.A(B.a([D.bLg,A.ab,B.d(a4?"Write it again":"Write my newspaper",a2,a2,a2,a2,a2,a2,A.fO,a2,a2,a2)],w),A.m,a2,A.e,A.Q,0,a2,a2),A.f,a2,a2,new B.o(a2,a2,a2,h,v,G.u_,A.n),a2,54,a2,a2,a2,a2,a2,a2),A.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,i,a2,a2,a2,a2,a2,a2,!1,A.a8)],w)
if(a4){u=B.a([A.e1,B.A(B.a([D.dn9,A.av,D.bwI],w),A.m,a2,A.e,A.j,0,a2,a2),A.N],w)
for(t=a1.ax,s=t.length,o=0;o<t.length;t.length===s||(0,B.L)(t),++o){f=t[o]
e=f.a==="you"
r=e?A.a7:A.a3
q=e?A.b7.j(0.35):D.tf
p=new B.aT(16,16)
d=new B.ay(A.bF,1,A.q,-1)
u.push(new B.bI(r,a2,a2,B.p(a2,new B.x(f.b,a2,D.f62,a2,a2,a2,a2,a2,a2,a2,a2,a2),A.f,a2,A8.V3,new B.o(q,a2,new B.bO(d,d,d,d),new B.bp(p,p,p,p),a2,a2,A.n),a2,a2,a2,A.cB,A.ic,a2,a2,a2),a2))}u.push(A.an)
t=B.a([],w)
for(o=0;o<4;++o){a0=D.cV8[o]
t.push(B.mG(a2,D.tf,new B.x(a0,a2,A.IO,a2,a2,a2,a2,a2,a2,a2,a2,a2),A.hD,new C.egl(a1,a0),a2,a2,P.uQ,a2))}u.push(B.bW(A.bz,t,A.bq,6,8))
u.push(A.S)
t=B.E(B.aM(a2,A.T,!1,a2,!0,A.r,a2,B.aN(),a1.f,a2,a2,a2,a2,a2,2,a1.aRs("Ask for a change, or ask a question\u2026"),A.y,!0,a2,!0,a2,!1,a2,A.ai,a2,a2,a2,a2,a2,a2,a2,a2,a2,4,1,a2,!1,"\u2022",a2,a2,a2,new C.egm(a1),a2,!1,a2,a2,!1,a2,!0,a2,A.a9,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,A.dm,!0,A.a4,a2,A.am,a2,a2,a2,a2),1)
s=a1.as?a2:a1.gc6b()
u.push(B.A(B.a([t,A.ab,B.Hq(A.ys,s,B.nw(a2,A.b7,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2)],w),A.m,a2,A.e,A.j,0,a2,a2))
u.push(A.aA)
t=a1.as?a2:a1.gaYl()
u.push(B.dk(A.oN,D.fqF,t,B.bm(A.d_,a2,a2,a2,a2,A.Iy,a2,a2,new B.b7(B.m(16),A.Y),a2,a2,a2)))
A.d.v(v,u)}v=B.a([B.cz(v,a1.r,A.ah2,a2,a2,A.ah,!1)],w)
if(a1.as){u=A.w.j(0.55)
t=B.m(20)
s=B.I(E.jO.j(0.5),A.q,1)
v.push(B.bZ(0,B.el(B.av(B.p(a2,B.A(B.a([E.a6x,A.ey,B.d(a1.at,a2,a2,a2,a2,a2,a2,A.iG,a2,a2,a2)],w),A.m,a2,A.e,A.Q,0,a2,a2),A.f,a2,a2,new B.o(E.Az,a2,s,t,a2,a2,A.n),a2,a2,a2,a2,D.bt3,a2,a2,a2),a2,a2,a2),u,!0),0,0,0))}return B.c8(a3,A.AJ,new B.an(A.W,a2,A.aa,A.r,v,a2),a2,!1,!1,a2,a2)},
aRs(d){var w=null
return B.br(w,new B.b4(4,B.m(14),A.Y),w,A.eP,w,w,w,w,!0,w,w,w,w,w,w,D.tf,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,A0.IJ,d,w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
aPW(d){var w,v,u,t=null,s=d.a===this.y.a,r=B.m(12),q=B.b0(d.f),p=s?A.bA:A.bF
p=B.I(p,A.q,s?2.4:1)
w=B.a([B.p(t,t,A.f,B.b0(d.x),t,t,t,5,t,A.ld,t,t,t,t),A.h0],x.p)
for(v=d.w,u=0;u<4;++u)w.push(B.p(t,t,A.f,B.b0(v).j(0.5),t,t,t,2,t,D.bpn,t,t,t,t))
w.push(A.cS)
w.push(new B.D(A.jf,B.d(d.b,t,1,A.a2,t,t,t,B.l(t,t,B.b0(v),t,t,t,t,t,t,t,t,9,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t))
return B.aE(t,B.p(t,B.v(w,A.m,t,A.bb,A.j,0,A.p),A.f,t,t,new B.o(q,t,p,r,t,t,A.n),t,t,t,A.iU,t,t,t,72),A.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.efZ(this,d),t,t,t,t,t,t,!1,A.a8)}}
C.zf.prototype={
baA(d,e,f,g,h,i,j,k,l,m){var w=this,v=g==null?w.b:g,u=i==null?w.a:i,t=h==null?w.c:h,s=m==null?w.d:m,r=e==null?w.e:e,q=f==null?w.f:f,p=d==null?w.r:d,o=j==null?w.w:j,n=l==null?w.x:l
return new C.zf(u,v,t,s,r,q,p,o,n,k==null?w.y:k)},
cFP(d){var w=null
return this.baA(w,w,w,w,w,d,w,w,w,w)},
ag(){var w=this
return B.F(["paper",w.a,"headline",w.c,"subhead",w.d,"byline",w.e,"caption",w.f,"body",w.r,"pullQuote",w.w,"sidebarTitle",w.x,"sidebarText",w.y,"category",w.b],x.N,x.z)},
aBK(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j="headline",i="category",h=new C.cbS(d),g=d.h(0,"body")
if(x.j.b(g)){w=B.a([],x.s)
for(v=J.aV(g);v.C();){u=v.gT(v)
if(A.a.i(B.t(u)).length!==0)w.push(A.a.i(B.t(u)))}t=w}else if(typeof g=="string"&&A.a.i(g).length!==0){w=A.a.fD(g,B.af("\\n\\s*\\n",!0,!1,!1,!1))
w=new B.K(w,new C.cbQ(),B.U(w).k("K<1,n>")).c_(0,new C.cbR())
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
return this.baA(p,r,q,J.ad(l==null?"":l)===0?k:h.$1(i).toUpperCase(),v,w,o,m,n,s)},
gFh(d){return this.f}}
C.ta.prototype={
a4(){return"NewsLayout."+this.b}}
C.Be.prototype={
a4(){return"NewsFrame."+this.b}}
C.ld.prototype={}
C.b03.prototype={
re(d,e,f,g,h,i,j){var w=null
return B.l(w,w,f==null?B.b0(this.d.w):f,w,w,w,w,w,d,w,w,e,i,w,j,w,g,!0,w,h,w,w,w,w,w,w)},
aYn(d,e,f,g){return this.re(d,e,null,1.25,f,A.bl,g)},
Po(d,e,f,g,h){return this.re(d,e,f,1.25,g,A.bl,h)},
awr(d,e,f,g,h){return this.re(d,e,null,f,g,A.bl,h)},
awq(d,e,f,g,h){return this.re(d,e,f,g,0,A.bl,h)},
aYp(d,e,f,g,h){return this.re(d,e,null,f,0,g,h)},
c6g(d,e,f,g,h,i){return this.re(d,e,f,g,0,h,i)},
awp(d,e,f,g){return this.re(d,e,null,f,0,A.bl,g)},
adw(d,e,f){return this.re(d,e,null,f,0,A.bl,A.cN)},
aYo(d,e,f,g,h){return this.re(d,e,f,g,0,h,A.cN)},
c6f(d,e,f,g){return this.re(d,e,null,f,0,g,A.cN)},
c6e(d,e,f,g){return this.re(d,e,f,g,0,A.bl,A.cN)},
adx(d,e,f,g,h,i){return this.re(d,e,f,g,h,A.bl,i)},
aYm(d,e,f,g,h,i,j,k,l){var w,v,u=null
for(w=i;w>j;){v=new B.kr(new B.eq(d,u,u,A.cO,u,u,u,u,u,u,new B.G(!0,u,u,e,u,u,w,f,l,u,u,u,k,u,u,u,u,u,u,u,u,u,u,u,u,u)),A.a4,A.ce,new B.jr(1),u,u,h,u,A.ca,u)
v.yH(g)
if(!v.b.a.c.gaDn())return w
w-=2}return j},
adu(d,e,f,g,h,i,j,k){return this.aYm(d,e,f,g,h,i,j,k,A.bl)},
ayz(d,e,f){var w=null,v=d==null?B.b0(this.d.w):d,u=x.p,t=B.a([B.p(w,w,A.f,v,w,w,w,f,w,w,w,w,w,w)],u)
if(e)A.d.v(t,B.a([new B.a7(w,3,w,w),B.p(w,w,A.f,v,w,w,w,0.8,w,w,w,w,w,w)],u))
return B.v(t,A.m,w,A.e,A.j,0,A.p)},
ayy(d){return this.ayz(null,!1,d)},
agm(d,e){return this.ayz(null,d,e)},
cnP(d,e){return this.ayz(d,!1,e)},
gb_v(){var w=A.a.i(this.c.a)
return w.length===0?"The NGMY Times":w},
gaU1(){var w=A.a.i(this.c.c)
if(w.length===0)w="Your headline appears here"
return this.d.CW?w.toUpperCase():w},
Of(d,e,f,g,h,i){var w=this,v=null,u=w.d.Q,t=w.adu(w.gaU1(),u,A.P,d,g,h,i,1.02)
return B.d(w.gaU1(),v,g,A.a2,v,v,v,w.awq(u,t,f,1.02,A.P),e,v,v)},
aU6(d){return this.Of(d,A.L,null,2,78,30)},
aaW(d,e,f,g,h){return this.Of(d,e,null,f,g,h)},
bWg(d,e,f,g,h){return this.Of(d,A.L,e,f,g,h)},
bWf(d,e,f){return this.Of(d,A.L,null,e,f,30)},
Rj(d,e,f,g,h){var w,v=this,u=null,t=v.c.d,s=A.a.i(t)
if(s.length===0)return A.bH
w=v.d.as
return new B.D(A.kl,B.d(s,u,g,A.a2,u,u,u,v.aYo(w,v.aYm(t,w,A.cN,d,g,h,15,1.2,A.cF),f,1.2,A.cF),e,u,u),u)},
b5m(d){return this.Rj(d,A.L,null,3,24)},
aA2(d,e,f,g){return this.Rj(d,e,null,f,g)},
cvb(d,e,f){return this.Rj(d,A.L,e,3,f)},
b5n(d,e){return this.Rj(d,e,null,3,24)},
cv9(d,e){return this.Rj(d,A.L,null,3,e)},
cva(d,e,f){return this.Rj(d,e,null,3,f)},
aq4(d,e){var w=this,v=null,u=A.a.i(w.c.e),t=new B.D(A.fV,B.d(u.toUpperCase(),v,v,v,v,v,v,w.Po("Roboto",12,d==null?B.b0(w.d.x):d,1.4,A.H),v,v,v),v)
if(!e)return t
u=w.d.w
return B.A(B.a([B.E(B.p(v,v,A.f,B.b0(u),v,v,v,1.2,v,v,v,v,v,v),1),t,B.E(B.p(v,v,A.f,B.b0(u),v,v,v,1.2,v,v,v,v,v,v),1)],x.p),A.m,v,A.e,A.j,0,v,v)},
Nc(){return this.aq4(null,!0)},
aq3(d){return this.aq4(null,d)},
bDo(d,e){var w=null,v=A.a.i(this.c.f)
if(v.length===0)return A.bH
return new B.D(A.hY,new B.a7(d,w,B.d(v,w,2,A.a2,w,w,w,this.c6f(this.d.as,13.5,1.2,A.cF),e,w,w),w),w)},
vm(d,a0){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Roboto",j=new B.S(Date.now(),0,!1),i=m.gb_v(),h=A.o.an(j.bz(B.c1(B.bA(j),1,1,0,0,0,0,0)).a,864e8),g="VOL. "+C.hTA(Math.max(1,B.bA(j)-2021))+"  \xb7  NO. "+(h+1+3000),f=m.aYn(k,12,1.2,A.P),e=a0?0.62:1
h=m.d
w=h.y
v=h.z
if(w==="blackletter")u=m.adu(i,v,A.P,d,1,96*e,36,1)
else{t=w==="bar"?76:72
u=m.adu(i.toUpperCase(),v,A.P,d,1,t*e,30,1)}switch(w){case"bar":w=a0?6:10
t=B.b0(h.x)
h=h.ch?B.b0(h.f):A.c
s=x.p
return B.v(B.a([B.p(l,B.A(B.a([B.E(B.d(i.toUpperCase(),l,1,A.eC,l,l,l,m.adx(v,u*0.84,h,1,1,A.P),l,l,l),1)],s),A.m,l,A.e,A.j,0,l,l),A.f,t,l,l,l,l,l,l,new B.Q(18,w,18,w),l,l,l),A.N,B.A(B.a([B.d(C.bBK(j).toUpperCase(),l,l,l,l,l,l,f,l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("FREE \xb7 NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],s),A.m,l,A.hB,A.j,0,l,l),A.an,m.agm(!0,3)],s),A.m,l,A.e,A.j,0,A.p)
case"split":h=h.x
w=x.p
return B.v(B.a([B.A(B.a([B.p(l,l,A.f,B.b0(h),l,l,l,u*0.8,l,l,l,l,l,14),A.ey,B.E(B.d(i,l,1,A.eC,l,l,l,m.awp(v,u*0.9,1,A.P),l,l,l),1)],w),A.m,l,A.e,A.j,0,l,l),A.S,B.A(B.a([B.d(C.bBK(j),l,l,l,l,l,l,m.Po(k,13,B.b0(h),0.6,A.P),l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l)],w),A.m,l,A.hB,A.j,0,l,l),A.N,m.cnP(B.b0(h),3)],w),A.m,l,A.e,A.j,0,A.p)
case"logo":r=a0?52:64
w=m.gb_v()
v=B.d("NGMY",l,l,l,l,l,l,m.awr(k,r,1,-1.5,A.u),l,l,l)
t=r*0.2
s=r*0.04
q=B.b0(h.x)
p=B.m(r*0.16)
o=h.ch&&h.a==="midnight"||h.a==="gold"?A.w:A.c
h=h.w
n=x.p
return B.v(B.a([B.A(B.a([v,A.ab,B.eG(A.A,-0.03,B.p(l,B.d("NEWS",l,l,l,l,l,l,m.re(k,r*0.72,o,1.05,-0.5,A.cF,A.u),l,l,l),A.f,l,l,new B.o(q,l,l,p,l,l,A.n),l,l,l,l,new B.Q(t,s,t,s),l,l,l),l),A.b6,new B.dq(1,A.cn,B.d(w.toUpperCase(),l,2,A.a2,l,l,l,m.adx(k,12.5,B.b0(h).j(0.85),1.3,1.2,A.P),A.dM,l,l),l)],n),A.m,l,A.e,A.j,0,l,l),A.N,B.p(l,l,A.f,B.b0(h).j(0.25),l,l,l,1.4,l,l,l,l,l,l)],n),A.m,l,A.e,A.j,0,A.p)
case"blackletter":h=x.p
w=B.A(B.a([B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("PRICE: FREE \xb7 NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],h),A.m,l,A.hB,A.j,0,l,l)
t=m.agm(!0,1.4)
s=a0?4:10
v=B.d(i,l,1,l,l,l,l,m.awp(v,u,1,A.P),A.L,l,l)
q=a0?4:8
return B.v(B.a([w,A.at,t,new B.a7(l,s,l,l),v,new B.a7(l,q,l,l),m.agm(!0,1.4),A.at,B.d(C.bBK(j).toUpperCase(),l,l,l,l,l,l,f,A.L,l,l),A.at,m.ayy(3)],h),A.m,l,A.e,A.j,0,A.p)
default:h=x.p
return B.v(B.a([B.d(i.toUpperCase(),l,1,l,l,l,l,m.awr(v,u,1,3,A.P),A.L,l,l),A.N,m.agm(!0,1.2),A.at,B.A(B.a([B.d(C.bBK(j).toUpperCase(),l,l,l,l,l,l,f,l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],h),A.m,l,A.hB,A.j,0,l,l),A.at,m.ayy(3)],h),A.m,l,A.e,A.j,0,A.p)}},
ac2(d){return this.vm(d,!1)},
adv(d,e,f,g){var w=null,v=f*0.9,u=f*0.45,t=e==null?B.b0(this.d.x):e,s=B.m(f)
return B.p(w,B.d(d,w,w,w,w,w,w,this.adx("Roboto",f,g==null?A.c:g,1,0.4,A.u),w,w,w),A.f,w,w,new B.o(t,w,w,s,w,w,A.n),w,w,w,w,new B.Q(v,u,v,u),w,w,w)},
c6d(d,e){return this.adv(d,null,e,null)},
aW3(d){var w=null,v=new B.S(Date.now(),0,!1),u=A.o.F(B.dl(v),12)===0?12:A.o.F(B.dl(v),12),t=B.b0(this.d.w).j(0.75),s=this.awq("Roboto",15,t,1,A.cv),r=B.X(E.ajE,t,w,w,w,18),q=A.a.ap(A.oR[B.bG(v)-1],0,3),p=A.a.aT(A.o.u(B.fY(v)),2,"0"),o=B.dl(v)>=12?"PM":"AM"
return B.A(B.a([r,A.ab,B.d(q+" "+B.bQ(v)+", "+B.bA(v)+"  \xb7  "+u+":"+p+" "+o,w,w,w,w,w,w,s,w,w,w),B.p(w,w,A.f,t.j(0.4),w,w,w,20,w,A.fJ,w,w,w,1),B.X(d,t,w,w,w,19),A.ab,B.d("NGMY News",w,w,w,w,w,w,s,w,w,w)],x.p),A.m,w,A.e,A.j,0,w,w)},
av9(){return this.aW3(A.ms)},
b2y(d,e,f,g){var w=null,v=A.a.i(this.c.c)
if(v.length===0)v="Your headline appears here"
return B.d(v,w,e,A.a2,w,w,w,this.adx("Roboto",this.adu(v,"Roboto",A.H,d,e,f,g,1.08),w,1.08,-0.8,A.H),w,w,w)},
ayC(d,e,f){return this.b2y(d,e,f,30)},
aA5(d,e,f){var w=null,v=A.a.i(this.c.d)
if(v.length===0)return A.bH
return new B.D(A.vc,B.d(v,w,e,A.a2,w,w,w,this.c6e("Roboto",f,B.b0(this.d.w).j(0.88),1.35),w,w,w),w)},
b5r(d){return this.aA5(d,3,22)},
cvm(d,e){return this.aA5(d,e,22)},
tu(d,e){var w,v,u,t,s=null,r=this.e
if(r!=null){w=B.fL(r,A.A,s,s,A.cl,A.bR,!0,e,!1,s,d)
r=this.d
v=r.ay
if(v==="bw")w=new B.D7(D.bvP,w,s)
if(v==="sepia")w=new B.D7(D.bvO,w,s)}else{r=this.d
v=r.w
u=B.b0(v).j(0.1)
t=Math.min(d,e)
w=B.p(s,B.av(B.X(A.xU,B.b0(v).j(0.35),s,s,s,t*0.25),s,s,s),A.f,u,s,s,s,e,s,s,s,s,s,d)}v=B.a([w],x.p)
if(r.ax)v.push(B.c_(s,new B.o(s,s,s,s,s,new B.bT(A.A,0.95,A.x,s,0,B.a([A.K,A.Wj.j(0.38)],x.O),s,s),A.n),A.bd))
return new B.a7(d,e,new B.an(A.W,s,A.b0,A.r,v,s),s)},
qk(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.d
switch(j.e.a){case 1:j=j.w
w=B.I(B.b0(j),A.q,3)
j=B.I(B.b0(j),A.q,1)
return B.p(k,B.p(k,l.tu(d-24,e-24),A.f,k,k,new B.o(k,k,j,k,k,k,A.n),k,k,k,k,A.ep,k,k,k),A.f,k,k,new B.o(k,k,w,k,k,k,A.n),k,e,k,k,A.lL,k,k,d)
case 2:w=B.a([new B.ac(0,A.G,A.w.j(0.35),D.e2h,14)],x.V)
v=l.tu(d-28,e-28-58)
u=A.a.i(l.c.f)
if(u.length===0)u="NGMY"
return B.eG(A.A,-0.035,B.p(k,B.v(B.a([v,B.E(B.av(B.d(u,k,2,A.a2,k,k,k,l.aYo(j.as,13.5,D.b8I,1.1,A.cF),A.L,k,k),k,k,k),1)],x.p),A.m,k,A.e,A.j,0,A.p),A.f,k,k,new B.o(D.bbR,k,k,k,w,k,A.n),k,e,k,k,D.bqG,k,k,d),k)
case 3:w=B.m(30)
j=B.I(B.b0(j.x),A.q,5)
return B.p(k,B.bw(B.m(25),l.tu(d-10,e-10),A.aq),A.f,k,k,new B.o(k,k,j,w,k,k,A.n),k,e,k,k,k,k,k,d)
case 4:t=Math.min(d,e)
w=B.I(B.b0(j.x),A.q,6)
j=B.b0(j.f)
v=t-10
return new B.a7(d,e,B.av(B.p(k,B.hT(l.tu(v,v),A.aq),A.f,k,k,new B.o(j,k,w,k,k,k,A.a6),k,t,k,k,A.lL,k,k,t),k,k,k),k)
case 5:j=B.a([new B.ac(0,A.G,A.w.j(0.3),D.e27,10)],x.V)
return B.eG(A.A,0.025,new B.a7(d,e,new B.an(A.W,k,A.aa,A.f,B.a([B.bZ(0,B.p(k,l.tu(d-18,e-18),A.f,k,k,new B.o(A.c,k,k,k,j,k,A.n),k,k,k,k,A.qZ,k,k,k),0,0,0),B.ao(k,B.eG(A.A,-0.6,B.p(k,k,A.f,A.bK.j(0.85),k,k,k,26,k,k,k,k,k,90),k),k,k,-18,k,-10,k),B.ao(-10,B.eG(A.A,-0.6,B.p(k,k,A.f,A.bK.j(0.85),k,k,k,26,k,k,k,k,k,90),k),k,k,k,-18,k,k)],x.p),k),k),k)
case 6:j=B.b0(j.x)
return new B.a7(d,e,B.b3(B.nr(l.tu(d,e),A.aq,D.fOL),new C.bbD(j,k),k,k,A.au),k)
case 7:j=x.p
w=B.a([l.tu(d-16,e-44)],j)
for(v=[!0,!1],u=d/34,s=0;s<2;++s){r=v[s]
q=r?-18:k
p=r?k:-18
o=B.a([],j)
for(n=0;n<Math.max(6,A.k.bt(u));++n){m=new B.aT(2,2)
o.push(B.p(k,k,A.f,k,k,new B.o(A.bS,k,k,new B.bp(m,m,m,m),k,k,A.n),k,10,k,k,k,k,k,14))}w.push(new B.cL(0,q,0,p,k,k,new B.cn(A.aO,A.q0,A.j,A.m,k,A.p,k,0,o,k),k))}return B.p(k,new B.an(A.W,k,A.b0,A.r,w,k),A.f,A.ea,k,k,k,e,k,k,D.bv5,k,k,d)
case 8:w=d/2
v=B.wM(A.he,new B.aT(w,w))
j=B.I(B.b0(j.x),A.q,5)
w-=5
return B.p(k,B.bw(B.wM(A.hC,new B.aT(w,w)),l.tu(d-10,e-10),A.aq),A.f,k,k,new B.o(k,k,j,v,k,k,A.n),k,e,k,k,k,k,k,d)
case 9:j=B.a([new B.ac(0,A.G,A.w.j(0.35),A.fM,22)],x.V)
return B.p(k,l.tu(d-20,e-20),A.f,k,k,new B.o(A.c,k,k,k,j,k,A.n),k,e,k,k,A.bT,k,k,d)
case 10:return new B.a7(d,e,B.nr(l.tu(d,e),A.aq,D.fUO),k)
case 0:j=B.I(B.b0(j.w),A.q,2.4)
return B.p(k,l.tu(d-14,e-14),A.f,k,k,new B.o(k,k,j,k,k,k,A.n),k,e,k,k,A.ep,k,k,d)}},
aNx(d,e){return this.d.e===D.R_?A.bH:this.bDo(d,e)},
VV(d){return this.aNx(d,A.L)},
gazo(){var w=this.c
return A.a.i(w.y).length!==0||A.a.i(w.w).length!==0},
azn(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.c,l=A.a.i(m.x)
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
if(m.length!==0&&w.length===0)q.push(B.E(B.av(B.d("\u201c"+m+"\u201d",n,7,A.a2,n,n,n,o.aYp(v.Q,19,1.15,A.cF,A.P),A.L,n,n),n,n,n),1))
else{r=B.a([],r)
p=l.length!==0
if(p)r.push(B.d(l.toUpperCase(),n,1,A.a2,n,n,n,o.Po("Roboto",12.5,B.b0(t),1.2,A.u),n,n,n))
if(p)r.push(A.at)
m=w.length===0?m:w
r.push(B.E(B.d(m,n,9,A.a2,n,n,n,o.adw(v.as,13,1.25),n,n,n),1))
A.d.v(q,r)}return B.p(n,B.jw(B.v(q,A.F,n,A.e,A.j,0,A.p),A.r,n),A.f,n,n,new B.o(s,n,u,n,n,n,A.n),n,e,n,n,A.bk,n,n,d)},
gcej(){var w=this.c.r
return w.length===0?B.a([y.g],x.s):w},
a8F(d,e,f,g){return B.cp(new C.cbT(this,e,d,f,g))},
a8E(d){return this.a8F(d,22,!0,18)},
W5(d,e){return this.a8F(d,22,!0,e)},
aOz(d,e,f){return this.a8F(d,22,e,f)},
bFp(d,e,f){return this.a8F(d,e,!0,f)},
b8i(d,e,f,g){return B.cp(new C.cbU(this,e,d,g,!0,f))},
cd7(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i="Roboto",h=k.d
switch(h.d.a){case 0:return B.v(B.a([k.ac2(824),A.aA,k.aU6(824),k.b5m(824),A.N,k.Nc(),A.ac,B.av(k.qk(824,360),j,j,j),k.VV(824),A.ac,B.E(k.a8E(3),1)],x.p),A.aj,j,A.e,A.j,0,A.p)
case 1:w=x.p
return B.v(B.a([k.ac2(824),A.aQ,new B.a7(j,350,B.A(B.a([new B.a7(440,j,B.v(B.a([k.aaW(440,A.bg,3,62,26),k.aA2(440,A.bg,2,20),A.b6,k.aq4(B.b0(h.x),!1)],w),A.F,j,A.e,A.j,0,A.p),j),A.Iz,B.v(B.a([k.qk(362,310),k.VV(362)],w),A.m,j,A.e,A.j,0,A.p)],w),A.F,j,A.e,A.j,0,j,j),j),A.S,k.ayy(2),A.ac,B.E(k.a8E(3),1)],w),A.aj,j,A.e,A.j,0,A.p)
case 2:w=k.vm(824,!0)
v=B.b0(h.x)
u=h.ch
t=x.p
s=B.a([k.bWg(788,u?B.b0(h.f):A.c,3,92,34)],t)
r=k.c
if(A.a.i(r.d).length!==0)s.push(k.cvb(788,u?B.b0(h.f):A.c,22))
v=B.p(j,B.v(s,A.m,j,A.e,A.j,0,A.p),A.f,v,j,j,j,j,j,j,A.B4,j,j,j)
u=B.a([B.av(k.qk(824,390),j,j,j)],t)
s=A.a.i(r.f)
if(s.length!==0&&h.e!==D.R_){h=A.w.j(0.65)
u.push(B.ao(0,B.p(j,B.d(s,j,2,A.a2,j,j,j,k.awq(i,14,A.c,1.15,A.P),j,j,j),A.f,h,j,j,j,j,j,j,A.lJ,j,j,j),j,j,0,0,j,j))}return B.v(B.a([w,A.ac,v,A.ac,new B.an(A.W,j,A.aa,A.r,u,j),A.N,k.Nc(),A.S,B.E(k.W5(2,21),1)],t),A.aj,j,A.e,A.j,0,A.p)
case 3:h=k.vm(824,!0)
w=k.qk(824,560)
v=B.a([A.K,A.w.j(0.85)],x.O)
u=x.p
return B.v(B.a([h,A.ac,new B.an(A.b5,j,A.aa,A.r,B.a([w,B.ao(0,B.p(j,k.Of(780,A.bg,A.c,3,74,30),A.f,j,j,new B.o(j,j,j,j,j,new B.a8(A.b_,A.b5,A.x,v,j,j),A.n),j,j,j,j,D.btm,j,j,j),j,j,0,0,j,j)],u),j),k.b5n(824,A.bg),A.N,k.Nc(),A.S,B.E(k.a8E(3),1)],u),A.aj,j,A.e,A.j,0,A.p)
case 4:h=x.p
return B.v(B.a([k.ac2(824),A.aA,k.aU6(824),k.b5m(824),A.N,k.Nc(),A.ac,B.E(k.b8i(3,300,B.v(B.a([k.qk(300,300),k.VV(300)],h),A.m,j,A.e,A.j,0,A.p),360),1)],h),A.aj,j,A.e,A.j,0,A.p)
case 5:w=k.vm(824,!0)
v=x.p
u=B.v(B.a([k.aaW(440,A.bg,3,62,26),k.aA2(440,A.bg,2,20),A.b6,k.aq3(!1)],v),A.F,j,A.e,A.j,0,A.p)
return B.v(B.a([w,A.by,new B.a7(j,400,B.A(B.a([new B.a7(440,j,u,j),A.aNn,new B.D(A.hY,k.qk(364,h.e===D.R_?400:330),j)],v),A.F,j,A.e,A.j,0,j,j),j),A.aA,B.E(k.W5(2,21),1)],v),A.aj,j,A.e,A.j,0,A.p)
case 6:return B.v(B.a([k.ac2(824),A.ac,k.bWf(824,2,70),k.cv9(824,21),A.N,k.Nc(),A.ac,B.E(k.b8i(3,340,B.av(k.qk(340,340),j,j,j),350),1)],x.p),A.aj,j,A.e,A.j,0,A.p)
case 7:w=k.vm(824,!0)
v=B.b0(h.x)
u=Date.now()
u=C.bBK(new B.S(u,0,!1))
t=x.p
v=B.a([B.p(j,B.d(u.toUpperCase(),j,j,j,j,j,j,k.Po(i,13,h.ch?B.b0(h.f):A.c,1.2,A.u),A.L,j,j),A.f,v,j,j,j,j,j,j,A.bk,j,j,j),A.aA],t)
u=A.a.i(k.c.w)
if(u.length!==0)v.push(B.d("\u201c"+u+"\u201d",j,j,j,j,j,j,k.aYp(h.Q,24,1.15,A.cF,A.P),j,j,j))
v.push(A.b6)
if(k.gazo())v.push(k.azn(230,250))
return B.v(B.a([w,A.aA,B.E(B.A(B.a([new B.a7(230,j,B.v(v,A.aj,j,A.e,A.j,0,A.p),j),B.p(j,j,A.f,B.b0(h.w),j,j,j,j,j,A.agw,j,j,j,1.2),new B.a7(570,j,B.v(B.a([k.aaW(570,A.bg,3,62,28),k.cva(570,A.bg,20),A.N,k.aq3(!1),A.N,B.av(k.qk(570,330),j,j,j),k.VV(570),A.S,B.E(k.aOz(2,!1,17),1)],t),A.aj,j,A.e,A.j,0,A.p),j)],t),A.F,j,A.e,A.j,0,j,j),1)],t),A.aj,j,A.e,A.j,0,A.p)
case 8:w=k.vm(824,!0)
v=h.ch
u=v?B.b0(h.x):B.b0(h.w)
t=B.d("\u2605  SPECIAL REPORT  \u2605",j,j,j,j,j,j,k.Po(i,13,v?A.w:B.b0(h.x),3,A.u),j,j,j)
s=x.p
return B.v(B.a([w,A.ac,B.p(j,B.v(B.a([t,A.an,k.Of(788,A.bg,v?A.w:B.b0(h.f),2,72,30)],s),A.F,j,A.e,A.j,0,A.p),A.f,u,j,j,j,j,j,j,D.brI,j,j,j),k.b5n(824,A.bg),A.S,B.av(k.qk(824,310),j,j,j),k.VV(824),A.N,k.Nc(),A.S,B.E(k.a8E(3),1)],s),A.aj,j,A.e,A.j,0,A.p)
case 10:w=x.p
return B.v(B.a([k.vm(824,!0),A.aQ,new B.an(A.W,j,A.aa,A.r,B.a([k.qk(824,430),B.ao(18,k.c6d(k.c.b,17),j,j,18,j,j,j)],w),j),A.by,k.ayC(824,3,66),k.b5r(824),A.ac,B.p(j,j,A.f,B.b0(h.w).j(0.25),j,j,j,1,j,j,j,j,j,j),A.ac,k.av9(),A.aA,B.E(k.W5(2,18),1)],w),A.aj,j,A.e,A.j,0,A.p)
case 11:h=h.x
w=x.p
return B.v(B.a([k.vm(824,!0),A.by,new B.a7(j,500,B.A(B.a([new B.a7(410,j,B.v(B.a([k.adv(k.c.b,B.b0(h).j(0.14),15,B.b0(h)),A.aQ,k.b2y(410,4,58,28),k.aA5(410,6,20),A.b6],w),A.F,j,A.e,A.j,0,A.p),j),U.aNo,k.qk(390,500)],w),A.F,j,A.e,A.j,0,j,j),j),A.aA,k.av9(),A.aQ,B.E(k.W5(2,18),1)],w),A.aj,j,A.e,A.j,0,A.p)
case 12:w=k.vm(824,!0)
v=k.qk(824,420)
u=B.hwg(-0.25)
t=B.b0(h.x)
s=B.a([new B.ac(0,A.G,A.w.j(0.4),A.J,10)],x.V)
r=x.p
return B.v(B.a([w,A.aQ,new B.an(A.W,j,A.aa,A.r,B.a([v,B.ao(22,B.fs(j,B.p(j,B.d("BREAKING NEWS",j,j,j,j,j,j,k.c6g(i,30,A.c,1,A.cF,A.u),j,j,j),A.f,j,j,new B.o(t,j,j,j,s,j,A.n),j,j,j,j,D.btC,j,j,j),j,u,!0),j,j,0,j,j,j)],r),j),A.by,k.ayC(824,3,62),k.b5r(824),A.ac,B.p(j,j,A.f,B.b0(h.w).j(0.25),j,j,j,1,j,j,j,j,j,j),A.ac,k.aW3(A.lk),A.aA,B.E(k.W5(2,18),1)],r),A.aj,j,A.e,A.j,0,A.p)
case 13:w=k.c
q=A.a.i(w.x)
if(!(q.length!==0)){v=A.a.i(w.w)
q=v.length!==0?v:"More from NGMY News"}v=k.vm(824,!0)
u=h.w
t=x.p
w=B.a([k.qk(824,380),B.ao(j,k.adv(w.b,B.b0(u).j(0.85),15,B.b0(h.f)),j,j,16,j,16,j)],t)
s=k.ayC(824,2,60)
r=k.cvm(824,2)
p=k.av9()
o=B.E(k.aOz(2,!1,18),1)
n=B.I(B.b0(u).j(0.18),A.q,1)
m=B.m(18)
h=h.x
l=B.b0(h).j(0.05)
return B.v(B.a([v,A.aQ,new B.an(A.W,j,A.aa,A.r,w,j),A.aQ,s,r,A.S,p,A.aA,o,A.ac,B.p(j,B.A(B.a([B.bw(B.m(14),k.tu(150,104),A.aq),A.od,B.E(B.v(B.a([k.adv("RELATED",B.b0(h).j(0.14),12,B.b0(h)),A.N,B.d(q,j,2,A.a2,j,j,j,k.awp(i,19,1.15,A.H),j,j,j)],t),A.F,j,A.e,A.Q,0,A.p),1),B.X(A.ex,B.b0(u).j(0.6),j,j,j,30)],t),A.m,j,A.e,A.j,0,j,j),A.f,j,j,new B.o(l,j,n,m,j,j,A.n),j,j,j,j,A.bk,j,j,j)],t),A.aj,j,A.e,A.j,0,A.p)
case 9:return B.v(B.a([k.vm(824,!0),A.by,k.aaW(824,A.bg,3,62,30),k.aA2(824,A.bg,2,22),A.S,k.aq3(!1),A.S,B.av(k.qk(824,330),j,j,j),k.aNx(824,A.bg),A.aQ,B.E(k.bFp(2,40,21),1)],x.p),A.aj,j,A.e,A.j,0,A.p)}},
B(d){var w,v,u,t=this,s=null,r="Roboto",q=t.d,p=q.f,o=x.p,n=B.a([B.bZ(0,B.c_(s,new B.o(s,s,s,s,s,new B.a8(A.ax,A.aC,A.x,B.a([B.b0(p),B.b0(q.r)],x.O),s,s),A.n),A.bd),0,0,0)],o)
if(q.ax)n.push(B.bZ(0,B.b3(s,s,s,new C.b88(B.b0(q.w),s),A.au),0,0,0))
w=q.w
n.push(new B.D(D.bu7,B.v(B.a([B.E(t.cd7(),1),A.N,B.p(s,s,A.f,B.b0(w),s,s,s,1.4,s,s,s,s,s,s),A.h0,B.A(B.a([B.d("PRINTED WITH NGMY NEWS",s,s,s,s,s,s,t.aYn(r,11,1.4,A.H),s,s,s),B.d("CREATED BY NGMY.ORG",s,s,s,s,s,s,t.Po(r,11,B.b0(q.x),1.4,A.u),s,s,s)],o),A.m,s,A.hB,A.j,0,s,s)],o),A.aj,s,A.e,A.j,0,A.p),s))
v=B.b0(w)
n.push(B.bZ(0,B.e1(B.b3(s,s,s,new C.bqK(v.j(q.ch?0.07:0.06),s),A.au),!0,s),0,0,0))
p=B.b0(p).j(0.75)
v=B.I(B.b0(w).j(0.5),A.q,1.2)
u=B.m(40)
o=B.a([],o)
q=t.f
if(q!=null)o.push(B.hT(B.fL(q,A.A,s,s,A.cl,A.bR,!1,30,!1,s,30),A.aq))
else o.push(B.X(A.ms,B.b0(w),s,s,s,28))
o.push(A.ab)
o.push(B.d("NGMY.ORG",s,s,s,s,s,s,t.awr(r,15,1,1.6,A.u),s,s,s))
n.push(B.ao(52,B.e1(B.dc(B.p(s,B.A(o,A.m,s,A.e,A.Q,0,s,s),A.f,s,s,new B.o(p,s,v,u,s,s,A.n),s,s,s,s,D.bvd,s,s,s),0.6),!0,s),s,s,s,40,s,s))
return new B.a7(900,1260,B.jw(new B.an(A.W,s,A.aa,A.r,n,s),A.r,s),s)}}
C.bbE.prototype={
j0(d){return C.hbr(d)},
jK(d){return!1}}
C.bbD.prototype={
a5(d,e){var w,v=C.hbr(e)
$.W()
w=B.M()
w.r=this.b.gp(0)
w.b=A.ae
w.c=6
return d.aO(v,w)},
ar(d){return!d.b.A(0,this.b)}}
C.btf.prototype={
j0(d){var w,v,u,t,s,r,q,p,o=new B.eL()
o.dB(3)
w=$.W()
v=B.a([],x.v)
u=new B.aO(w.r,A.ap,null,null,v)
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
jK(d){return!1}}
C.b88.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=new B.eL()
k.dB(7)
$.W()
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
w.saq(new B.bT(A.A,0.5,A.x,l,0,B.a([A.Ks.j(0.13),A.K],v),l,l).av(0,B.bU(new B.u(q,p),m)))
n=w.H()
s.drawCircle(q,p,m,n)
n.delete()}w.saq(l)},
ar(d){return!1}}
C.bqK.prototype={
a5(d,e){var w,v,u=null,t=e.a,s=B.hL(u,u,u,u,B.dh(u,u,u,u,u,u,u,u,u,B.l(u,u,this.b,u,u,u,u,u,"Roboto",u,u,t*0.34,u,u,A.u,u,u,!0,u,10,u,u,u,u,u,u),"NGMY"),A.a4,A.ce,u,A.e9,A.ca)
s.eF()
w=d.a
J.bz(w.save())
w.translate(t/2,e.b*0.52)
d.iZ(0,-0.5)
t=s.b
v=t.c
t=t.a.c
s.a5(d,new B.u(-v/2,-t.gbc(t)/2))
w.restore()},
ar(d){return!d.b.A(0,this.b)}}
C.Vm.prototype={
R(){return new C.aDq()}}
C.aDq.prototype={
a_(){var w=this
w.a1()
B.fXU(w.a.c,null).bA(new C.ehA(),x.g7).bA(new C.ehB(w),x.a)
w.a.toString},
gaMm(){var w=D.auf[this.e].b
if(w==null){w=this.d
w=w==null?1:w.c/w.d}return w},
gaws(){var w,v,u,t,s,r=this,q=r.d,p=q.c,o=q.d
q=r.gaMm()
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
Zm(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f
var $async$Zm=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:g=r.d
if(g==null||r.y){w=1
break}r.m(new C.ehn(r))
t=4
q=r.gaws()
j=q
p=Math.min(1600,j.c-j.a)
j=q
i=q
o=p*(j.d-j.b)/(i.c-i.a)
$.W()
n=new B.qU()
m=B.D5(n,null)
i=B.M()
i.Q=A.fW
m.ud(g,q,new B.a9(0,0,0+p,0+o),i)
w=7
return B.b(n.pB().z8(J.h0Z(p),J.h0Z(o)),$async$Zm)
case 7:l=e
w=8
return B.b(l.hr(A.fY),$async$Zm)
case 8:k=e
j=r.c
if(j!=null){j=B.a5(j,!1)
i=k
i.toString
j.O(J.eT(J.vg(i)))}t=2
w=6
break
case 4:t=3
f=s.pop()
if(r.c!=null){r.m(new C.eho(r))
r.c.I(x.q).f.S(D.eRl)}w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Zm,v)},
B(d){var w,v,u,t=this,s=null,r=t.d,q=B.aH(s,s,s,s,A.kU,s,s,s,new C.ehu(d),s,s,s,s,s,s),p=x.p
q=B.eC(B.a([B.bK(!1,D.ftb,s,s,!0,s,s,t.y||r==null?s:t.gc6h(),s,s)],p),s,s,!0,!0,A.AJ,s,1,!0,s,0,!1,s,!1,s,s,q,s,!0,s,s,s,s,s,D.fx3,s,s,s,1,s,!0)
if(r==null)p=A.lB
else{w=B.E(new B.D(A.bQ,B.av(new B.fG(t.gaMm(),B.cp(new C.ehv(t,r)),s),s,s,s),s),1)
v=B.a([],p)
for(u=0;u<6;++u)v.push(new B.D(A.iU,B.j5(s,s,s,new B.x(D.auf[u].a,s,E.aP9,s,s,s,s,s,s,s,s,s),s,new C.ehw(t,u),t.e===u,s,s,s,s),s))
p=B.v(B.a([w,B.p(s,B.bl(!0,B.v(B.a([new B.a7(s,40,B.cz(v,s,s,s,s,A.aO,!1),s),B.A(B.a([D.bM_,B.E(B.kX(s,s,s,6,1,new C.ehx(t),t.f),1),D.bLC],p),A.m,s,A.e,A.j,0,s,s),D.fqz,A.an,B.bK(!1,D.fqj,s,s,!0,s,s,new C.ehy(t,d),s,s)],p),A.m,s,A.e,A.Q,0,A.p),!0,!1,A.af,!0,!1),A.f,D.Wx,s,s,s,s,s,s,D.br3,s,s,s)],p),A.m,s,A.e,A.j,0,A.p)}return B.c8(q,A.AJ,p,s,!1,!1,s,s)}}
C.bba.prototype={
a5(d,e){var w
$.W()
w=B.M()
w.Q=A.cl
return d.ud(this.b,this.c,new B.a9(0,0,0+e.a,0+e.b),w)},
ar(d){return!d.c.A(0,this.c)||d.b!==this.b}}
C.a_r.prototype={
R(){var w=$.aw(),v=x.A
return new C.aEN(new B.ar(A.as,w),new B.ar(new B.bb("NGMY",A.b4,A.aN),w),new B.cs(null,v),new B.cs(null,v),A.d.gL(D.a2I),"quote"+1000*Date.now(),B.a([],x.t),B.aX(x.S),A.L)}}
C.os.prototype={}
C.aEN.prototype={
gaUe(){var w,v,u=this
if(u.p1)w=new B.vx(1,u.p2,0.9,u.p3).iy().l()&16777215
else{v=u.k4
w=v==null?null:v&16777215}if(w==null)return 0
return(A.o.D(A.k.V(u.ok*255),0,255)<<24|w)>>>0},
a_(){var w=this
w.a1()
w.a.toString
w.p4=null
$.aW.x1$.push(new C.eQW(w))},
q(){var w=this.d,v=$.aw()
w.U$=v
w.P$=0
w=this.e
w.U$=v
w.P$=0
this.a2()},
Y1(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Y1=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b($.qO().jw(0,"assets/images/ngmy_logo.png"),$async$Y1)
case 7:q=e
p=J.eT(J.vg(q))
o=r.c
w=o!=null?8:9
break
case 8:w=10
return B.b(F.bCu(new B.pF(p,1),o),$async$Y1)
case 10:case 9:if(r.c==null){w=1
break}r.m(new C.ePO(r,p))
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
return B.i($async$Y1,v)},
Pr(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Pr=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hX().l3(92,1800,A.eG),$async$Pr)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fi(),$async$Pr)
case 8:p=e
n=r.c
if(n==null){w=1
break}w=9
return B.b(F.bCu(new B.pF(p,1),n),$async$Pr)
case 9:if(r.c==null){w=1
break}r.m(new C.eQb(r,p))
t=2
w=6
break
case 4:t=3
l=s.pop()
o=B.aa(l)
n=r.c
if(n!=null)n.I(x.q).f.S(B.b2(null,null,null,null,null,A.r,null,B.d("Could not open that picture. "+B.t(o),null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Pr,v)},
b1W(){var w=this
w.RG=w.R8=0
w.ry=w.rx=1
w.xr=w.x2=w.x1=w.to=0
w.y1=!1
w.aH=w.aP=w.aE=w.az=w.Y=w.b6=w.bh=w.y2=0
w.b3=null
w.b2=0.25
w.be=null
w.bM=0.5
w.aS=1
w.c7=w.bU=w.bj=0
w.cX=w.cU=!1},
aVO(d,e,f,g,h,i,j,a0,a1){var w,v,u,t,s,r,q,p,o,n=1-g,m=n*0.2126,l=n*0.7152,k=n*0.0722
n=x.x
w=C.bza(B.a([m+g,l,k,0,0,m,l+g,k,0,0,m,l,k+g,0,0,0,0,0,1,0],n),D.d9V)
if(Math.abs(j)>0.5){v=j*3.141592653589793/180
u=Math.cos(v)
t=Math.sin(v)
s=0.715-u*0.715
r=t*0.715
q=0.072-u*0.072
p=0.213-u*0.213
w=C.bza(B.a([0.213+u*0.787-t*0.213,s-r,q+t*0.928,0,0,p+t*0.143,0.715+u*0.285+t*0.14,q-t*0.283,0,0,p-t*0.787,s+r,0.072+u*0.928+t*0.072,0,0,0,0,0,1,0],n),w)}o=128*(1-f)+d*255
n=h*25
w=C.bza(C.fX_(Math.pow(2,e)*f,o+n,o-i*25,o-n+i*12),w)
if(a0>0){n=a0*255*0.25
w=C.bza(C.fX_(1-a0*0.5,n,n,n),w)}return a1?C.bza(C.fX_(-1,255,255,255),w):w},
aAb(){var w,v,u=B.af("\\S+",!0,!1,!1,!1).kS(0,this.d.a.a),t=B.B(u,B.a4(u).k("J.E"))
for(u=this.db;w=u.length,v=t.length,w<v;)u.push(0)
if(w>v)A.d.z1(u,v,w)
this.dx.p7(new C.eQl(t),!0)
return t},
b4r(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.w
e.aAb()
w=C.i2G(e.d.a.a,e.db)
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
return C.i_a(d,k,v,a0,j,e.gaUe(),e.ax,i,u,q,p,r,t,s,w,g,h,f,n,l,o,m)},
ct9(){return this.b4r(null)},
CZ(){var w=0,v=B.j(x.dd),u,t=this,s,r,q
var $async$CZ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.p4==null){u=null
w=1
break}w=3
return B.b($.aW.gmz(),$async$CZ)
case 3:w=4
return B.b(B.bN(A.eI,null,x.H),$async$CZ)
case 4:w=5
return B.b($.aW.gmz(),$async$CZ)
case 5:s=$.aW.ak$.x.h(0,t.r)
r=s==null?null:s.gb8()
if(!(r instanceof B.pQ)){u=null
w=1
break}w=7
return B.b(r.lW(1080/r.gZ(0).a),$async$CZ)
case 7:w=6
return B.b(e.hr(A.fY),$async$CZ)
case 6:q=e
u=q==null?null:J.eT(A.dD.gaM(q))
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$CZ,v)},
a9w(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$a9w=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.Q){w=1
break}q.m(new C.ePx(q))
t=4
w=7
return B.b(q.CZ(),$async$a9w)
case 7:p=e
o=p==null?null:"data:image/png;base64,"+A.cT.gcw().aJ(p)
n=C.Br(null,null,null,null,D.o7,6,!1,null,null,null,null,null,C.cC(),null,!1,null,"NGMY Quote",null,null,B.a([q.b4r(o)],x.g),"office_blue",null,!1,null)
l=q.c
if(l!=null)B.a5(l,!1).O(n)
r.push(6)
w=5
break
case 4:t=3
j=s.pop()
m=B.aa(j)
l=q.c
if(l!=null)l.I(x.q).f.S(B.b2(null,null,null,null,null,A.r,null,B.d(B.t(m),null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.ePy(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a9w,v)},
Ah(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$Ah=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.Q){w=1
break}q.m(new C.ePv(q))
t=4
w=7
return B.b($.aW.gmz(),$async$Ah)
case 7:w=8
return B.b(B.bN(A.oA,null,x.H),$async$Ah)
case 8:w=9
return B.b($.aW.gmz(),$async$Ah)
case 9:k=$.aW.ak$.x.h(0,q.f)
p=k==null?null:k.gb8()
if(!(p instanceof B.pQ))throw B.V("The picture is not ready yet.")
w=10
return B.b(p.lW(1080/p.gZ(0).a),$async$Ah)
case 10:o=e
w=11
return B.b(o.hr(A.fY),$async$Ah)
case 11:n=e
if(n==null)throw B.V("Could not make the picture.")
w=12
return B.b(A7.afX(J.eT(A.dD.gaM(n)),"ngmy_quote.png","image/png"),$async$Ah)
case 12:m=e
k=q.c
if(k==null){r=[1]
w=5
break}k=k.I(x.q).f
k.S(B.b2(null,null,null,null,null,A.r,null,B.d(m?"Your quote picture is ready. Check your downloads.":"Downloading is not available here. Use Edit in Slides, then PDF.",null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
l=B.aa(i)
k=q.c
if(k!=null)k.I(x.q).f.S(B.b2(null,null,null,null,null,A.r,null,B.d(B.t(l),null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.ePw(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Ah,v)},
cgd(){var w=this.p4
w.toString
return B.cp(new C.eQ4(this,w))},
aYw(d,e){var w=null
return B.br(w,w,w,w,w,D.f0E,w,w,!0,new B.b4(4,B.m(16),P.uQ),w,w,w,w,w,D.tf,!0,w,w,w,w,new B.b4(4,B.m(16),D.aXB),w,w,w,w,w,w,w,w,A1.Dg,e,w,w,w,w,w,w,w,D.f5U,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
xE(d,e){var w=null,v=x.p,u=B.a([],v)
A.d.v(u,B.a([B.X(e,A.b7,w,w,w,15),A.bp],v))
u.push(B.d(d,w,w,w,w,w,w,D.aPW,w,w,w))
return new B.D(D.bp1,B.A(u,A.m,w,A.e,A.j,0,w,w),w)},
aYv(d,e){var w=null,v=B.m(18),u=B.I(A.bF,A.q,1)
return B.p(w,B.aG(!1,A.a1,!0,w,d,A.f,w,0,w,w,w,w,w,A.jB),A.f,w,w,new B.o(D.tf,w,u,v,w,w,A.n),w,w,w,w,e,w,w,1/0)},
vt(d){return this.aYv(d,A.bC)},
o7(d,e,f,g){var w,v,u,t,s,r=null,q=g!=null,p=f?G.u_:r
if(f)w=r
else w=A.c.j(q?0.07:0.03)
v=B.m(30)
u=B.I(f?A.K:A.bF,A.q,1)
t=x.p
s=B.a([],t)
if(e!=null)A.d.v(s,B.a([B.X(e,q?A.c:A.jb,r,r,r,16),A.bp],t))
s.push(B.d(d,r,r,r,r,r,r,B.l(r,r,q?A.c:A.jb,r,r,r,r,r,r,r,r,12.5,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r))
return B.aE(r,B.dj(r,B.A(s,A.m,r,A.e,A.Q,0,r,r),r,r,A.bc,new B.o(w,r,u,v,r,p,A.n),A.hX,r,r,r,A.F6,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,g,r,r,r,r,r,r,!1,A.a8)},
afl(d,e,f){return this.o7(d,null,e,f)},
aww(d,e,f,g,h,i,j){var w=null,v=B.m(12),u=g?A.b7.j(0.28):A.c.j(0.05),t=g?A.eA:A.bF,s=x.p
v=B.a([B.dj(w,d,w,w,A.bc,new B.o(u,w,B.I(t,A.q,g?2:1),v,w,w,A.n),A.hX,w,e,w,new B.Q(i,i,i,i),w,w,j)],s)
u=g?A.c:A.az
A.d.v(v,B.a([A.at,B.d(f,w,1,A.a2,w,w,w,B.l(w,w,u,w,w,w,w,w,w,w,w,j<54?8.5:10.5,w,w,A.P,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],s))
return B.aE(w,new B.a7(j,w,B.v(v,A.m,w,A.e,A.Q,0,A.p),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,h,w,w,w,w,w,w,!1,A.a8)},
aYz(d,e,f,g,h,i){return this.aww(d,e,f,g,h,5,i)},
ke(d,e,f,g,h,i,j){var w,v,u=null,t=x.p,s=B.a([B.E(B.d(d,u,u,u,u,u,u,D.eYG,u,u,u),1)],t)
if(i!=null&&Math.abs(e-i)>0.001)s.push(B.aE(u,D.e5Q,A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.eQh(this,h,i),u,u,u,u,u,u,!1,A.a8))
w=A.c.j(0.08)
v=B.m(20)
s.push(B.p(u,B.d(j,u,u,u,u,u,u,A.aP1,u,u,u),A.f,u,u,new B.o(w,u,u,v,u,u,A.n),u,u,u,u,A.YG,u,u,u))
s=B.A(s,A.m,u,A.e,A.j,0,u,u)
w=this.c
w.toString
w=B.auz(w).cHc(A.b7,A.bF,A.b7.j(0.2),A.c,D.eId,4)
return new B.D(A.xr,B.v(B.a([s,B.a9B(B.kX(u,u,u,g,f,new C.eQi(this,h),A.k.D(e,f,g)),w)],t),A.m,u,A.e,A.j,0,A.p),u)},
ahm(d,e,f,g,h,i){return this.ke(d,e,f,g,h,null,i)},
ahP(d,e,f){var w,v,u,t,s,r,q,p,o=null,n=B.a([],x.p)
for(w=f.length,v=0;v<f.length;f.length===w||(0,B.L)(f),++v){u=f[v]
t=u==null
s=t?A.dq:B.b0(u)
r=d==u
q=r?A.c:A.b2
p=new B.ay(q,r?3:1,A.q,-1)
t=t?D.bF4:o
n.push(B.aE(o,B.p(o,t,A.f,o,o,new B.o(s,o,new B.bO(p,p,p,p),o,o,o,A.a6),o,34,o,o,o,o,o,34),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new C.eQk(this,e,u),o,o,o,o,o,o,!1,A.a8))}return B.bW(A.bz,n,A.bq,10,10)},
bJy(){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.x==="All")w=D.a2I
else{v=x.a8
w=B.B(new B.a2(D.a2I,new C.ePn(o),v),v.k("J.E"))}v=B.aM(n,A.T,!1,n,!0,A.r,n,B.aN(),o.d,n,n,n,n,n,2,o.aYw("Your quote",o.w.y),A.y,!0,n,!0,n,!1,n,A.ai,n,n,n,n,n,n,n,280,n,4,2,n,!1,"\u2022",n,new C.ePo(o),n,n,n,!1,n,n,!1,n,!0,n,A.a9,n,n,n,n,n,n,n,n,n,n,n,A.a7v,!0,A.a4,n,A.am,n,n,n,n)
u=B.aM(n,A.T,!1,n,!0,A.r,n,B.aN(),o.e,n,n,n,n,n,2,o.aYw("Who said it","NGMY"),A.y,!0,n,!0,n,!1,n,A.ai,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,new C.ePp(o),n,n,n,!1,n,n,!1,n,!0,n,A.a9,n,n,n,n,n,n,n,n,n,n,n,A.dm,!0,A.a4,n,A.am,n,n,n,n)
t=o.xE("DESIGNS",A.tN)
s=x.p
r=B.a([],s)
for(q=0;q<6;++q){p=D.cMN[q]
r.push(new B.D(A.iU,o.afl(p,o.x===p,new C.ePq(o,p)),n))}return B.v(B.a([v,A.S,u,t,B.cd(B.A(r,A.m,n,A.e,A.j,0,n,n),A.r,n,A.y,n,n,n,n,A.aO),A.ac,new B.a7(n,118,B.hH(n,new C.ePr(o,w),w.length,n,n,A.aO,new C.ePs(),!1),n),A.N,o.aYv(B.v(B.a([B.iE(A.b7,n,n,A.af,!0,new C.ePt(o),n,D.fhM,n,D.fef,o.k3),B.iE(A.b7,n,n,A.af,!0,new C.ePu(o),n,n,n,D.fbu,o.k2)],s),A.m,n,A.e,A.j,0,A.p),A.ah1)],s),A.F,n,A.e,A.j,0,A.p)},
cBD(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=null,a7=a5.aAb()
if(a7.length===0)return a5.vt(B.d("Type your quote on the Design tab. Every word will show up here so you can make it bigger, normal or smaller.",a6,a6,a6,a6,a6,a6,D.IX,a6,a6,a6))
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
m=B.B(u,B.a4(u).k("co.E"))
A.d.fk(m)
l=m.length!==0&&A.d.d8(m,new C.eQL(a5,m))?a5.db[A.d.gL(m)]:a6
k=new C.eQS(a5)
j=new C.eQU()
q=B.d("Tap the words you want to change, then choose a size. One sentence can have big, normal and small words.",a6,a6,a6,a6,a6,a6,D.IX,a6,a6,a6)
p=x.p
o=B.a([],p)
for(i=a5.db,h=0;h<a7.length;++h){g=new B.aT(11,11)
f=u.t(0,h)?A.b7.j(0.38):A.c.j(0.06)
e=u.t(0,h)?A.eA:A.bF
d=new B.ay(e,u.t(0,h)?2:1,A.q,-1)
e=a7[h].b
a0=e.index
e=A.a.ap(w,a0,a0+e[0].length)
a0=B.af("[*~^]",!0,!1,!1,!1)
e=B.aK(e,a0,"")
a0=j.$1(i[h])
a1=i[h]>0?A.u:A.a5
o.push(B.aE(a6,B.p(a6,new B.x(e,a6,new B.G(!0,A.c,a6,a6,a6,a6,a0,a1,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),a6,a6,a6,a6,a6,a6,a6,a6,a6),A.f,a6,a6,new B.o(f,a6,new B.bO(d,d,d,d),new B.bp(g,g,g,g),a6,a6,A.n),a6,a6,a6,a6,A.Mg,a6,a6,a6),A.y,!1,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,new C.eQM(a5,h),a6,a6,a6,a6,a6,a6,!1,A.a8))}o=a5.vt(B.bW(A.bz,o,A.rO,6,6))
i=B.a([a5.o7("All words",K.ale,!1,new C.eQN(a5,a7))],p)
if(n>1){a2=0
for(;;){if(!(a2<n&&a2<8))break
a3=a2+1
i.push(a5.afl("Sentence "+a3,!1,new C.eQO(a5,a7,v,a2)))
a2=a3}}i.push(a5.afl("Clear picks",!1,new C.eQP(a5)))
i=B.bW(A.bz,i,A.bq,8,8)
g=a5.xE("SIZE OF THE PICKED WORDS",D.akG)
f=B.a([],p)
for(s=0;s<4;++s){e={}
a0=D.dfo[s]
a1=e.a=null
a4=a0.a
e.a=a4
e=u.a===0?a1:new C.eQQ(e,k)
f.push(a5.afl(a0.b,l===a4,e))}return B.v(B.a([q,A.S,o,A.S,i,g,B.bW(A.bz,f,A.bq,8,8),A.S,a5.o7("Make every word normal",A.lj,!1,new C.eQR(a5))],p),A.F,a6,A.e,A.j,0,A.p)},
cwR(){var w,v,u,t,s,r,q=this,p=null,o=x.p,n=B.A(B.a([D.bwm,B.d(A.d.iH(D.avW,new C.eQu(q)).b,p,p,p,p,p,p,D.f_8,p,p,p)],o),A.m,p,A.e,A.j,0,p,p),m=B.cp(new C.eQv(q)),l=q.xE("HIGHLIGHT BEHIND THE WORDS",A.a_A),k=q.p1?-1:q.k4
k=q.ahP(k,new C.eQw(q),D.cX5)
w=q.p1
v=w?A.c:A.b2
n=B.a([n,A.S,m,l,B.bW(A.bz,B.a([k,B.aE(p,B.p(p,D.bI3,A.f,p,p,new B.o(p,p,B.I(v,A.q,w?3:1),p,p,D.eTX,A.a6),p,34,p,p,p,p,p,34),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.eQz(q),p,p,p,p,p,p,!1,A.a8)],o),A.rO,10,10),A.an,B.d("Add a coloured band behind the words, with any word design. The first circle turns it off.",p,p,p,p,p,p,D.IX,p,p,p)],o)
if(q.gaUe()!==0){m=B.a([],o)
if(q.p1){l=q.p2
l=q.ahm("Colour",l,0,360,new C.eQA(q),""+A.k.V(l)+"\xb0")
k=q.p3
A.d.v(m,B.a([l,q.ahm("Shade",k,0.15,0.9,new C.eQB(q),""+A.k.V(k*100))],o))}l=q.ok
m.push(q.ke("Strength",l,0.15,1,new C.eQC(q),1,""+A.k.V(l*100)+"%"))
A.d.v(n,B.a([A.S,q.vt(B.v(m,A.m,p,A.e,A.j,0,A.p))],o))}n.push(q.xE("LOOK",A.yg))
m=B.a([q.o7("Bold",I.akE,q.fy,new C.eQD(q)),q.o7("Italic",I.akF,q.go,new C.eQE(q))],o)
for(u=0;u<3;++u){l={}
k=D.cNY[u]
l.a=null
t=k.a
l.a=t
w=q.id===t
v=w?G.u_:p
w=w?p:A.c.j(0.07)
s=new B.aT(14,14)
r=new B.ay(q.id===l.a?A.K:A.bF,1,A.q,-1)
m.push(B.aE(p,B.p(p,B.X(k.b,A.c,p,p,p,20),A.f,p,p,new B.o(w,p,new B.bO(r,r,r,r),new B.bp(s,s,s,s),p,v,A.n),p,38,p,p,p,p,p,42),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.eQF(l,q),p,p,p,p,p,p,!1,A.a8))}n.push(B.bW(A.bz,m,A.rO,8,8))
n.push(q.xE("COLOUR",A.nf))
n.push(q.ahP(q.fx,new C.eQG(q),D.d6R))
n.push(A.an)
n.push(B.d("The first circle keeps the colour that comes with the design.",p,p,p,p,p,p,D.IX,p,p,p))
n.push(q.xE("SIZE AND PLACE",A.G2))
m=q.fr
m=q.ke("Text size",m,0.5,1.6,new C.eQx(q),1,""+A.k.V(m*100)+"%")
l=q.k1
n.push(q.vt(B.v(B.a([m,q.ke("Up / down",l,0.12,0.5,new C.eQy(q),0.3,""+A.k.V(l*100))],o),A.m,p,A.e,A.j,0,A.p)))
return B.v(n,A.F,p,A.e,A.j,0,A.p)},
cge(){var w,v,u,t,s,r,q=this,p=null,o=q.p4
if(o==null){w=B.m(22)
v=B.I(A.b7.j(0.6),A.q,1.6)
u=B.a([A.b7.j(0.18),A.bA.j(0.12)],x.O)
return B.aE(p,B.p(p,B.v(B.a([B.p(p,D.bNp,A.f,p,p,D.b_z,p,62,p,p,p,p,p,62),A.aA,D.ffo,A.an,D.fjY],x.p),A.m,p,A.e,A.j,0,A.p),A.f,p,p,new B.o(D.tf,p,v,w,p,new B.a8(A.a3,A.a7,A.x,u,p,p),A.n),p,p,p,p,D.bse,p,p,1/0),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,q.gaYy(),p,p,p,p,p,p,!1,A.a8)}w=x.p
v=B.A(B.a([B.bw(B.m(12),new B.a7(46,62,B.fL(o,A.A,120,p,A.cl,A.bR,!1,p,!1,p,p),p),A.aq),A.bf,B.E(B.v(B.a([D.feZ,A.N,B.bW(A.bz,B.a([q.o7("Change",A.kS,!1,q.gaYy()),q.o7("Remove",A.e5,!1,new C.eQ8(q))],w),A.bq,6,6)],w),A.F,p,A.e,A.j,0,A.p),1)],w),A.m,p,A.e,A.j,0,p,p)
u=B.a([],w)
for(t=0;t<5;++t){s=D.d3n[t]
u.push(q.o7(s.b,s.a,q.at===t,new C.eQ9(q,t)))}u=B.bW(A.bz,u,A.bq,8,8)
r=q.at
A:{if(0===r){s=q.c_7(o)
break A}if(1===r){s=q.bZa()
break A}if(2===r){s=q.bFo()
break A}if(3===r){s=q.bLG()
break A}s=q.bHv()
break A}return B.v(B.a([v,A.ac,u,A.aA,s,A.S,new B.bI(A.a3,p,p,q.o7("Reset the whole picture",A.lj,!1,new C.eQa(q)),p)],w),A.F,p,A.e,A.j,0,A.p)},
c_7(d){var w=this,v=x.p
return B.v(B.a([B.bW(A.bz,B.a([w.o7("Auto enhance",E.a_d,!1,new C.eQ0(w)),w.o7("Make words easy to read",A.oK,!1,new C.eQ1(w))],v),A.bq,8,8),A.aA,B.cp(new C.eQ2(w,d))],v),A.F,null,A.e,A.j,0,A.p)},
bZa(){var w,v,u,t,s,r,q,p,o=this,n=o.R8
n=o.ke("Exposure",n,-1.5,1.5,new C.ePF(o),0,A.k.aa(n,1))
w=o.RG
w=o.ke("Brightness",w,-0.5,0.5,new C.ePG(o),0,""+A.k.V(w*100))
v=o.rx
v=o.ke("Contrast",v,0.4,2,new C.ePH(o),1,""+A.k.V(v*100))
u=o.xr
u=o.ke("Fade",u,0,1,new C.ePI(o),0,""+A.k.V(u*100))
t=o.aE
t=o.ke("Spotlight",t,0,1,new C.ePJ(o),0,""+A.k.V(t*100))
s=o.Y
s=o.ke("Darken",s,0,0.85,new C.ePK(o),0,""+A.k.V(s*100))
r=o.b6
r=o.ke("Vignette",r,0,0.9,new C.ePL(o),0,""+A.k.V(r*100))
q=o.aH
q=o.ke("Shade behind words",q,0,0.85,new C.ePM(o),0,""+A.k.V(q*100))
p=o.aP
return o.vt(B.v(B.a([n,w,v,u,t,s,r,q,o.ke("Shade top & bottom",p,0,0.85,new C.ePN(o),0,""+A.k.V(p*100))],x.p),A.m,null,A.e,A.j,0,A.p))},
bFo(){var w,v,u,t,s=this,r=null,q=s.ry
q=s.ke("Colour strength",q,0,2.2,new C.eP0(s),1,""+A.k.V(q*100))
w=s.to
w=s.ke("Warmth",w,-1,1,new C.eP1(s),0,""+A.k.V(w*100))
v=s.x1
v=s.ke("Tint",v,-1,1,new C.eP2(s),0,""+A.k.V(v*100))
u=s.x2
t=x.p
u=s.vt(B.v(B.a([q,w,v,s.ke("Shift colours",u,-180,180,new C.eP3(s),0,""+A.k.V(u)+"\xb0"),new B.bI(A.a3,r,r,s.o7("Negative",D.bD4,s.y1,new C.eP4(s)),r)],t),A.m,r,A.e,A.j,0,A.p))
v=s.xE("COLOUR WASH",A.Nf)
w=s.b3
q=B.a([null],x.Z)
A.d.v(q,D.auF)
t=B.a([u,v,s.ahP(w,new C.eP5(s),q),A.N],t)
if(s.b3!=null){q=s.b2
t.push(s.vt(s.ahm("Wash strength",q,0,0.9,new C.eP6(s),""+A.k.V(q*100))))}return B.v(t,A.F,r,A.e,A.j,0,A.p)},
bLG(){var w,v,u,t,s,r=this,q=r.y2
q=r.ke("Blur",q,0,24,new C.ePz(r),0,A.o.u(A.k.V(q)))
w=r.bh
w=r.ke("Soft focus",w,0,1,new C.ePA(r),0,""+A.k.V(w*100))
v=r.az
u=x.p
v=r.vt(B.v(B.a([q,w,r.ke("Film grain",v,0,1,new C.ePB(r),0,""+A.k.V(v*100))],u),A.m,null,A.e,A.j,0,A.p))
w=r.xE("LIGHT LEAK",H.akA)
q=r.be
t=B.a([null],x.Z)
s=x.S
A.d.v(t,B.dd(D.auF,0,B.dJ(8,"count",s),s))
u=B.a([v,w,r.ahP(q,new C.ePC(r),t),A.N],u)
if(r.be!=null){q=r.bM
u.push(r.vt(r.ahm("Leak strength",q,0,1,new C.ePD(r),""+A.k.V(q*100))))}return B.v(u,A.F,null,A.e,A.j,0,A.p)},
bHv(){var w,v,u,t,s=this,r=s.aS
r=s.ke("Zoom",r,1,3,new C.ePa(s),1,""+A.k.V(r*100)+"%")
w=s.bj
w=s.ke("Left / right",w,-1,1,new C.ePb(s),0,""+A.k.V(w*100))
v=s.bU
v=s.ke("Up / down",v,-1,1,new C.ePc(s),0,""+A.k.V(v*100))
u=s.c7
t=x.p
return B.v(B.a([s.vt(B.v(B.a([r,w,v,s.ke("Turn",u,-180,180,new C.ePd(s),0,""+A.k.V(u)+"\xb0")],t),A.m,null,A.e,A.j,0,A.p)),A.S,B.bW(A.bz,B.a([s.o7("Turn 90\xb0",N.alM,!1,new C.ePe(s)),s.o7("Flip sideways",A.FR,s.cU,new C.ePf(s)),s.o7("Flip upside down",A.FR,s.cX,new C.ePg(s))],t),A.bq,8,8)],t),A.F,null,A.e,A.j,0,A.p)},
c1L(){var w=null,v=B.m(22),u=B.I(A.bF,A.q,1)
return B.p(w,B.v(B.a([D.eIp,A.S,D.fgO,A.aA,B.aE(w,B.p(A.A,D.eIC,A.f,w,w,new B.o(w,w,w,B.m(16),w,G.u_,A.n),w,52,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eQ3(this),w,w,w,w,w,w,!1,A.a8)],x.p),A.F,w,A.e,A.j,0,A.p),A.f,w,w,new B.o(D.tf,w,u,v,w,w,A.n),w,w,w,w,A.bQ,w,w,w)},
c__(){var w,v,u,t,s,r,q,p=this,o=null,n=new C.ePW(p),m=x.p,l=B.A(B.a([D.bws,p.o7("Reset",A.lj,!1,new C.ePS(p))],m),A.m,o,A.e,A.j,0,o,o),k=B.d("Drag it on the quote to move it. It stays on every quote.",o,o,o,o,o,o,D.IX,o,o,o),j=p.xE("SHAPE",A.alI),i=B.a([],m)
for(w=0;w<7;++w){v={}
u=D.BY[w]
v.a=null
t=v.a=u.a
if(t.length!==0){s=p.cx
i.push(p.aYz(n.$2(t,p.cy),62,u.b,s===t,new C.ePT(v,p),62))}}i=B.bW(A.bz,i,A.bq,8,8)
v=p.xE("RING",A.r0)
u=B.a([],m)
for(w=0;w<11;++w){s={}
r=D.BT[w]
s.a=null
t=s.a=r.a
q=p.cy
u.push(p.aYz(n.$2(p.cx,t),62,r.b,q===t,new C.ePU(s,p),62))}u=B.bW(A.bz,u,A.bq,8,8)
s=p.CW
return B.v(B.a([l,A.at,k,j,i,v,u,A.ac,p.vt(p.ke("Size",s,0.12,0.4,new C.ePV(p),0.22,""+A.k.V(s*100)))],m),A.F,o,A.e,A.j,0,A.p)},
b0t(d){return new B.a7(null,d,new B.fG(0.5625,B.cp(new C.eQe(this)),null),null)},
cw7(){var w,v,u,t,s,r,q=null,p=A.c.j(0.05),o=B.m(18),n=B.I(A.bF,A.q,1),m=x.p,l=B.a([],m)
for(w=0;w<6;++w){v=this.as===w
u=v?G.u_:q
t=new B.aT(14,14)
s=D.d5q[w]
r=v?A.c:A.az
r=B.X(s.a,r,q,q,q,19)
v=v?A.c:A.az
l.push(new B.bD(1,A.bh,B.aE(A.c4,B.dj(q,B.v(B.a([r,A.cS,new B.qf(A.eh,A.A,A.f,new B.x(s.b,q,new B.G(!0,v,q,q,q,q,10.5,A.H,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q),q,q,q,q,q,q,q,q,q),q)],m),A.m,q,A.e,A.Q,0,A.p),q,q,A.bc,new B.o(q,q,q,new B.bp(t,t,t,t),q,u,A.n),D.bnY,q,q,q,A.hK,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.eQn(this,w),q,q,q,q,q,q,!1,A.a8),q))}return B.p(q,B.A(l,A.m,q,A.e,A.j,0,q,q),A.f,q,q,new B.o(p,q,n,o,q,q,A.n),q,q,q,D.bq2,A.lL,q,q,q)},
aP4(){var w,v,u=this,t=null,s=u.cw7(),r=u.as
A:{if(0===r){w=u.bJy()
break A}if(1===r){w=u.cBD()
break A}if(2===r){w=u.cwR()
break A}if(3===r){w=u.cge()
break A}if(4===r){w=u.c__()
break A}w=u.c1L()
break A}v=x.p
return B.bw(A.rU,B.el(B.v(B.a([s,B.E(B.cz(B.a([w],v),t,D.br4,t,t,A.ah,!1),1)],v),A.m,t,A.e,A.j,0,A.p),D.Wx,!0),A.aq)},
aLj(){var w,v,u,t,s=this,r=null,q=s.Q?r:s.gc6I(),p=B.m(16)
q=B.E(B.aE(r,B.p(r,D.eIL,A.f,r,r,new B.o(A.c.j(0.08),r,B.I(A.b2,A.q,1),p,r,r,A.n),r,50,r,r,r,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,!1,A.a8),1)
p=s.Q?r:s.gbLg()
w=B.m(16)
v=B.a([new B.ac(0,A.G,A.bA.j(0.35),A.cx,16)],x.V)
u=x.p
t=B.a([],u)
if(s.Q)t.push(D.eNF)
else t.push(D.bH8)
t.push(A.ab)
t.push(D.byc)
return B.p(r,B.A(B.a([q,A.av,B.E(B.aE(r,B.p(r,B.A(t,A.m,r,A.bb,A.j,0,r,r),A.f,r,r,new B.o(r,r,r,w,v,G.u_,A.n),r,50,r,r,r,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,p,r,r,r,r,r,r,!1,A.a8),1)],u),A.m,r,A.e,A.j,0,r,r),A.f,r,r,D.aZI,r,r,r,r,G.agP,r,r,r)},
aYx(){var w=null
return new B.D(T.YC,B.A(B.a([B.aH(w,w,w,w,A.mw,w,w,w,new C.ePE(this),w,w,w,w,w,w),D.fw_,A.b6,D.bPJ],x.p),A.m,w,A.e,A.j,0,w,w),w)},
B(d){var w=null
return B.c8(w,A.AJ,B.bl(!0,B.cp(new C.eQV(this)),!0,!1,A.af,!0,!0),w,!1,!1,w,w)}}
C.beJ.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m=new B.eL()
m.dB(7)
w=e.a
v=e.b
u=A.k.V(w*v/55)
$.W()
t=B.M()
s=this.b
t.r=A.c.j(0.16*s).gp(0)
r=B.M()
r.r=A.w.j(0.2*s).gp(0)
for(s=d.a,q=0;q<u;++q){p=m.aj()*w
o=m.aj()*v
n=((q&1)===0?t:r).H()
s.drawRect(B.c0(new B.a9(p,o,p+1.1,o+1.1)),n)
n.delete()}},
ar(d){return d.b!==this.b}}
C.rn.prototype={
a4(){return"NgmyQuoteDeco."+this.b}}
C.m1.prototype={}
C.zh.prototype={
ag(){var w=this
return B.F(["at",w.a.a6().ac(),"outline",w.b,"extras",w.c,"request",w.d],x.N,x.z)}}
C.nG.prototype={}
C.vQ.prototype={
a4(){return"NgmySlidesAiExtra."+this.b}}
C.a7C.prototype={}
C.aqx.prototype={}
C.a_Y.prototype={
R(){return new C.aGI(new B.ar(A.as,$.aw()),B.jN(!0,null,!0,!0,null,null,!1),D.dvm,B.a([],x.s),B.et([D.HI],x.Q))}}
C.aGI.prototype={
q(){var w=this.d
w.U$=$.aw()
w.P$=0
this.f.q()
this.a2()},
a_H(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$a_H=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hX().BS(90,700,700,A.eG),$async$a_H)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fi(),$async$a_H)
case 8:p=e
if(r.c!=null)r.m(new C.eX7(r,p,q))
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
return B.i($async$a_H,v)},
a_K(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a_K=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i=20-r.y.length
if(i<=0){w=1
break}t=4
n=i>1?i:null
w=7
return B.b(new B.hX().aGy(78,n,1100,1100),$async$a_K)
case 7:q=e
if(J.cm(q)){w=1
break}p=B.bn(r.y,!0,x.N)
n=J.aV(q)
case 8:if(!n.C()){w=9
break}o=n.gT(n)
if(J.ad(p)>=20){w=9
break}w=10
return B.b(o.fi(),$async$a_K)
case 10:m=e
l=o.b.toLowerCase()
if(A.a.cb(l,".png"))k="image/png"
else k=A.a.cb(l,".webp")?"image/webp":"image/jpeg"
J.ch(p,"data:"+k+";base64,"+A.cT.gcw().aJ(m))
w=8
break
case 9:if(r.c!=null)r.m(new C.eX8(r,p))
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
return B.i($async$a_K,v)},
b2x(d){var w,v,u=null
if(d!=null&&A.a.t(d,","))try{w=B.fL(A.cG.aJ(A.d.gal(d.split(","))),A.A,u,u,A.cl,A.bR,!0,u,!1,u,u)
return w}catch(v){}return D.bmd},
c_5(d,e,f,g){var w=e.length===0&&f.length===0?"rounded":e
return B.cpO(C.fye(w,this.b2x(d),f),g)},
abO(d,e,f,g,h){var w=null,v=new C.eX5(f,e),u=new C.eX6(f,e),t=A.c.j(0.05),s=B.m(12),r=B.m(12),q=B.m(12),p=h==null,o=B.I(p?A.bF:A.b7.j(0.6),A.q,1)
if(p)p=new B.a7(34,30,new B.an(A.W,w,A.aa,A.f,B.a([B.av(B.X(f?A.BD:A.N4,A.c1,w,w,w,26),w,w,w),D.ebv],x.p),w),w)
else p=this.c_5(g,v.$1(h),u.$1(h),34)
return B.aG(!1,A.a1,!0,s,B.aL(!1,r,!0,B.p(w,B.A(B.a([B.E(B.av(p,w,w,w),1),D.bGQ],x.p),A.m,w,A.e,A.j,0,w,w),A.f,w,w,new B.o(w,w,o,q,w,w,A.n),w,44,w,w,A.mn,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eX4(this,f,h,g,v,u,d),w,w,w,w,w,w,w),A.f,t,0,w,w,w,w,w,A.ag)},
aVU(d,e,f,g,h){var w,v,u,t,s,r,q,p=null,o=null,n=h==null
if(!n&&A.a.t(h,","))try{o=B.bw(B.m(8),B.fL(A.cG.aJ(A.d.gal(h.split(","))),A.A,p,p,A.cl,A.bR,!1,30,!1,p,30),A.aq)}catch(w){}v=A.c.j(0.05)
u=B.m(14)
t=B.m(14)
s=B.m(14)
r=B.I(n?A.bF:A.bo.j(0.6),A.q,1)
q=o
n=q==null?B.X(d,A.et,p,p,p,20):q
n=B.a([n,A.ab,B.E(B.d(e,p,1,A.a2,p,p,p,A.TA,p,p,p),1)],x.p)
if(f!=null)n.push(B.aE(p,D.a0v,A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,!1,A.a8))
return B.aG(!1,A.a1,!0,u,B.aL(!1,t,!0,B.p(p,B.A(n,A.m,p,A.e,A.j,0,p,p),A.f,p,p,new B.o(p,p,r,s,p,p,A.n),p,50,p,p,A.ld,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,g,p,p,p,p,p,p,p),A.f,v,0,p,p,p,p,p,A.ag)},
a7Z(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$a7Z=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(C.fBF(),$async$a7Z)
case 7:q=e
if(q==null||r.c==null){w=1
break}r.m(new C.eWO(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
p=B.aa(n)
if(r.c!=null)r.m(new C.eWP(r,p))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a7Z,v)},
adF(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$adF=B.e(function(d,a0){if(d===1){s.push(a0)
w=t}for(;;)switch(w){case 0:f=A.a.i(r.d.a.a)
if(f.length<6&&r.e==null){r.m(new C.eWR(r))
w=1
break}if(r.x==null){m=B.af("\\blogo\\b",!1,!1,!1,!1)
m=m.b.test(f)}else m=!1
if(m){r.m(new C.eWS(r))
w=1
break}m=r.e
l=m==null?null:m.c
if(l==null)l=""
q=l.length===0?f:f+"\n\nSOURCE DOCUMENT ("+m.a+"):\n"+l
r.m(new C.eWT(r))
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
return B.b(C.fwX(q,r.cx,j,new C.b0r(r.z,r.Q,r.as,r.at),new C.eWU(r),i,m,p,k),$async$adF)
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
if(p!=null)B.a5(p,!1).O(o)
t=2
w=6
break
case 4:t=3
e=s.pop()
n=B.aa(e)
if(r.c!=null)r.m(new C.eWV(r,n))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$adF,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=x.w,f=B.aI(d,A.eD,g).w
g=B.aI(d,A.bU,g).w
w=B.av(B.p(h,h,A.f,h,h,new B.o(A.b2,h,h,B.m(99),h,h,A.n),h,4,h,h,h,h,h,40),h,h,h)
v=x.V
u=B.av(B.aE(h,B.p(h,D.bK1,A.f,h,h,new B.o(h,h,B.I(A.c.j(0.35),A.q,2),h,B.a([new B.ac(2,A.G,A.bo.j(0.5),A.J,24)],v),D.bTy,A.a6),h,84,h,h,h,h,h,84),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.eXl(i),h,h,h,h,h,h,!1,A.a8),h,h,h)
t=x.p
s=B.a([],t)
if(i.e!=null)s.push(B.aH(h,h,h,h,D.a0v,h,h,h,i.ax?h:new C.eXm(i),h,h,h,h,"Remove document",h))
r=i.e
r=r==null?"Attach a PDF, Word or text file":r.a
q=i.ax?h:i.gbAr()
v=B.a([new B.ac(0,A.G,A.b7.j(0.45),A.J,10)],v)
s.push(B.hq(B.aG(!1,A.a1,!0,h,B.aL(!1,h,!0,B.p(h,B.X(i.e==null?A.vz:A.hz,A.c,h,h,h,20),A.f,h,h,new B.o(h,h,h,h,v,E.vP,A.a6),h,40,h,h,h,h,h,40),A.cL,!0,h,h,h,h,h,h,h,h,h,h,h,q,h,h,h,h,h,h,h),A.f,A.K,0,h,h,A.cL,h,h,A.ag),h,r,h,h))
v=B.A(s,A.m,h,A.e,A.Q,0,h,h)
s=A.c.j(0.05)
v=B.aM(h,A.T,!1,h,!0,A.r,h,B.aN(),i.d,h,h,h,h,h,2,B.br(h,h,h,h,h,h,h,h,!0,new B.b4(4,B.m(16),new B.ay(A.c.j(0.1),1,A.q,-1)),h,h,h,h,h,s,!0,h,h,h,h,new B.b4(4,B.m(16),D.aX8),h,h,h,h,h,h,h,h,A0.IJ,"Type your idea here\u2026",h,h,h,h,h,h,h,h,h,!0,!0,!1,h,h,h,h,h,h,h,h,new B.D(A.iU,v,h),h,h,h,h,h),A.y,!0,h,!0,h,!1,i.f,A.ai,h,h,h,h,h,h,h,h,h,6,3,h,!1,"\u2022",h,h,h,h,h,!1,h,h,!1,h,!0,h,A.a9,h,h,h,h,h,h,h,h,h,h,h,D.aPm,!0,A.a4,h,A.am,h,h,h,h)
s=i.x
r=s==null
q=r?"Add your logo":"Logo added"
r=r?h:new C.eXn(i)
s=i.aVU(A.ll,q,r,i.gcgF(),s)
r=i.z
r=B.E(i.abO(new C.eXp(i),i.Q,!1,i.x,r),1)
q=i.Q
q=B.E(B.v(B.a([s,A.an,B.A(B.a([r,A.bp,B.E(i.abO(new C.eXq(i),i.z,!0,i.x,q),1)],t),A.m,h,A.e,A.j,0,h,h)],t),A.m,h,A.e,A.j,0,A.p),1)
s=i.y
r=s.length
p=r===0
if(p)r="Add your pictures"
else{o=r===1?"":"s"
o=""+r+" picture"+o
r=o}s=p?h:A.d.gL(s)
p=i.y.length===0?h:new C.eXr(i)
s=i.aVU(A.vw,r,p,i.gcgN(),s)
p=i.as
r=i.at
o=i.y
o=o.length===0?h:A.d.gL(o)
p=B.E(i.abO(new C.eXs(i),r,!1,o,p),1)
o=i.at
r=i.as
n=i.y
n=n.length===0?h:A.d.gL(n)
o=B.a([w,A.aA,D.flf,A.at,D.fo2,A.by,u,A.N,D.fmv,A.aA,v,A.by,B.A(B.a([q,A.av,B.E(B.v(B.a([s,A.an,B.A(B.a([p,A.bp,B.E(i.abO(new C.eXt(i),r,!0,n,o),1)],t),A.m,h,A.e,A.j,0,h,h)],t),A.m,h,A.e,A.j,0,A.p),1)],t),A.F,h,A.e,A.j,0,h,h),A.an,D.fpM],t)
w=i.w.a
if(w.length!==0){v=B.m(999)
u=B.I(D.beF,A.q,1)
w=C.agv(w)
w=w==null?h:w.b
A.d.v(o,B.a([A.S,new B.bI(A.a3,h,h,B.p(h,B.A(B.a([D.bL6,A.bp,B.d("Ending: "+(w==null?"":w),h,h,h,h,h,h,D.f4E,h,h,h),B.aL(!1,h,!0,D.e65,h,!0,h,h,h,h,h,h,h,h,h,h,h,new C.eXu(i),h,h,h,h,h,h,h)],t),A.m,h,A.e,A.Q,0,h,h),A.f,h,h,new B.o(D.b7Z,h,u,v,h,h,A.n),h,h,h,h,D.bpK,h,h,h),h)],t))}o.push(A.by)
o.push(D.fcb)
o.push(A.N)
w=B.a([],t)
for(m=0;m<6;++m){l=D.cZ8[m]
v=i.ch===l?A.b7:A.c.j(0.06)
u=i.ch===l
k=new B.ay(u?A.az:A.bF,1,A.q,-1)
u=u?A.u:A.P
w.push(new B.bD(1,A.bh,new B.D(A.jf,B.aE(h,B.dj(A.A,new B.x(""+l,h,new B.G(!0,A.c,h,h,h,h,h,u,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h),h,h,h,h,h,h,h,h,h),h,h,A.bc,new B.o(v,h,new B.bO(k,k,k,k),h,h,h,A.a6),A.eE,h,42,h,h,h,h,h),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.eXv(i,l),h,h,h,h,h,h,!1,A.a8),h),h))}o.push(B.A(w,A.m,h,A.e,A.j,0,h,h))
o.push(A.by)
o.push(D.fuh)
o.push(A.N)
o.push(B.cp(new C.eXw(i)))
o.push(A.by)
o.push(D.fjk)
o.push(A.N)
w=B.a([i.b5k("auto","Let AI choose",A.dW,A.PO)],t)
for(v=x.O,m=0;m<11;++m){j=D.vV[m]
u=j.d
w.push(i.b5k(j.a,j.b,j.c,B.a([B.b0(A.d.gL(u).a),B.b0(A.d.gL(u).b)],v)))}o.push(B.bW(A.bz,w,A.bq,8,8))
o.push(A.aQ)
w=A.c.j(0.04)
v=B.m(16)
u=B.I(i.r?A.bo.j(0.5):A.bF,A.q,1)
o.push(B.p(h,B.iE(h,A.bo,h,h,h,new C.eXo(i),D.bGh,D.ftx,h,D.fes,i.r),A.f,h,h,new B.o(w,h,u,v,h,h,A.n),h,h,h,h,h,h,h,h))
w=i.cy
if(w!=null)A.d.v(o,B.a([A.aA,B.d(w,h,h,h,h,h,h,D.aOD,h,h,h)],t))
o.push(A.by)
w=i.ax?h:i.gc6M()
v=B.fm(h,h,A.b7,A.b7.j(0.5),h,h,h,h,h,A.c,h,h,h,h,new B.b7(B.m(18),A.Y),h,h,h,h,h)
u=i.ax
t=u?D.eNv:A.Gg
o.push(new B.a7(h,54,B.lt(t,B.d(u?i.ay:"Create my presentation",h,h,h,h,h,h,A.p6,h,h,h),w,v),h))
return new B.D(new B.Q(0,0,0,f.f.d),B.p(h,B.bl(!0,B.cd(B.v(o,A.aj,h,A.e,A.j,0,A.p),A.r,h,A.y,h,A.vo,h,h,A.ah),!0,!1,A.af,!0,!1),A.f,h,new B.aY(0,680,0,g.a.b*0.92),D.aak,h,h,h,h,h,h,h,h),h)},
bMM(d){var w,v,u,t,s,r,q=null,p=this.cx.t(0,d),o=new C.eWW(this,p,d)
if(d===D.CA)return new C.aDf(p,o,q)
w=B.m(16)
v=p?E.vP:q
u=p?q:A.c.j(0.05)
t=B.I(p?A.az:A.bF,A.q,1)
s=B.X(p?A.ef:C.hDi(d),A.c,q,q,q,20)
r=C.hDj(d)
return B.aE(q,B.dj(q,B.v(B.a([s,A.at,B.f4(A.A,B.d(r,q,q,q,q,q,q,B.l(q,q,A.c,q,q,q,q,q,q,q,q,12,q,q,p?A.u:A.a5,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),A.f,A.eh)],x.p),A.m,q,A.bb,A.j,0,A.p),q,q,A.bc,new B.o(u,q,t,w,q,v,A.n),A.hX,q,64,q,A.hx,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,o,q,q,q,q,q,q,!1,A.a8)},
b5k(d,e,f,g){var w,v=null,u=this.CW===d,t=B.m(99),s=u?A.c.j(0.12):A.c.j(0.04),r=u?A.ad:A.bF
r=B.I(r,A.q,u?1.6:1)
w=B.p(v,B.X(f,A.c,v,v,v,14),A.f,v,v,new B.o(v,v,v,v,v,new B.a8(A.a3,A.a7,A.x,g,v,v),A.a6),v,26,v,v,v,v,v,26)
return B.aE(v,B.dj(v,B.A(B.a([w,L.IA,B.d(e,v,v,v,v,v,v,B.l(v,v,A.c,v,v,v,v,v,v,v,v,12.5,v,v,u?A.u:A.a5,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.Q,0,v,v),v,v,A.bc,new B.o(s,v,r,t,v,v,A.n),A.eE,v,v,v,L.ai6,v,v,v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.eXa(this,d),v,v,v,v,v,v,!1,A.a8)}}
C.a_X.prototype={
R(){return new C.aGH(new B.ar(A.as,$.aw()))}}
C.aGH.prototype={
q(){var w=this.d
w.U$=$.aw()
w.P$=0
this.a2()},
adG(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$adG=B.e(function(a2,a3){if(a2===1){s.push(a3)
w=t}for(;;)switch(w){case 0:a0=A.a.i(r.d.a.a)
if(J.ad(a0)<3){r.m(new C.eWH(r))
w=1
break}B.eU()
r.m(new C.eWI(r))
t=4
q=C.i3z(a0)
if(q!=null){k=r.a
j=k.c
k=k.d
i=B.af("\\b(all|every|whole|entire)\\b.{0,30}\\b(slides?|presentation|deck|pages?)\\b|\\b(slides?|presentation|deck)\\b.{0,20}\\b(all|every|whole|entire)\\b",!0,!1,!1,!1)
h=a0.toLowerCase()
p=C.i3j(j,k-1,q,i.b.test(h))
if(!p){r.m(new C.eWJ(r,q))
w=1
break}k=r.c
if(k!=null)B.a5(k,!1).O(r.a.c)
w=1
break}g=a0.toLowerCase()
k=B.af("\\b(undo|un-do|bring (it |them |the .{0,30}?)?back|brings? back|put (it |them |the .{0,30}?)?back|restore|revert|go back|change (it|that|them) back|back the way|what it was|the way it was|previous version|before (you|the ai) (changed|change))\\b",!0,!1,!1,!1)
if(k.b.test(g)){k=r.a.c
C.fWG()
f=$.Co.h(0,k.a)
o=f==null||J.cm(f)?null:J.fo(f)
if(o==null){r.m(new C.eWK(r))
w=1
break}n=C.i3h(o,r.a.c)
C.i3d(r.a.c.a)
$.fVX=!0
k=r.c
if(k!=null)B.a5(k,!1).O(n)
w=1
break}k=r.a
j=k.c
i=j.CW
if(i==null)i=""
k=k.d
j=C.fZq(j)
h=C.fZr(r.a.c)
e=C.fZs(r.a.c)
w=7
return B.b(C.bBo(k,r.a.c.a,j,h,new C.eWL(r),i,e,a0),$async$adG)
case 7:m=a3
k=r.c
if(k!=null)B.a5(k,!1).O(m)
t=2
w=6
break
case 4:t=3
a1=s.pop()
l=B.aa(a1)
if(r.c!=null)r.m(new C.eWM(r,l))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$adG,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=x.w,h=B.aI(d,A.eD,i).w
i=B.aI(d,A.bU,i).w
w=B.av(B.p(j,j,A.f,j,j,new B.o(A.b2,j,j,B.m(99),j,j,A.n),j,4,j,j,j,j,j,40),j,j,j)
v=x.p
u=B.A(B.a([B.p(j,D.am0,A.f,j,j,D.aZn,j,34,j,j,j,j,j,34),A.av,D.bx1],v),A.m,j,A.e,A.j,0,j,j)
t=B.d("You're on slide "+k.a.d+". Ask for new slides, changes to any slide, a different style or another language.",j,j,j,j,j,j,As.a7a,j,j,j)
s=A.c.j(0.05)
s=B.aM(j,A.T,!0,j,!0,A.r,j,B.aN(),k.d,j,j,j,j,j,2,B.br(j,j,j,j,j,j,j,j,!0,new B.b4(4,B.m(16),new B.ay(A.c.j(0.1),1,A.q,-1)),j,j,j,j,j,s,!0,j,j,j,j,new B.b4(4,B.m(16),At.a9R),j,j,j,j,j,j,j,j,A0.IJ,"e.g. Add a slide after this one about how to sign up, and make the title slide more exciting.",j,j,j,j,j,j,j,j,j,!0,!0,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j),A.y,!0,j,!0,j,!1,j,A.ai,j,j,j,j,j,j,j,j,j,5,2,j,!1,"\u2022",j,j,j,j,j,!1,j,j,!1,j,!0,j,A.a9,j,j,j,j,j,j,j,j,j,j,j,D.aPm,!0,A.a4,j,A.am,j,j,j,j)
r=B.a([],v)
for(q=0;q<6;++q){p=D.cVx[q]
o=A.c.j(0.06)
n=k.e?j:new C.eWN(k,p)
r.push(B.mG(j,o,new B.x(p,j,Az.T9,j,j,j,j,j,j,j,j,j),j,n,j,j,P.uQ,j))}w=B.a([w,A.aA,u,A.an,t,A.aA,s,A.S,B.bW(A.bz,r,A.bq,8,8)],v)
u=k.r
if(u!=null)A.d.v(w,B.a([A.ac,B.d(u,j,j,j,j,j,j,D.aOD,j,j,j)],v))
w.push(A.aQ)
u=k.e
t=u?j:k.gc6N()
s=B.m(18)
r=B.m(18)
u=u?B.a([A.bo.j(0.5),A.f3.j(0.5)],x.O):D.ctO
o=B.a([new B.ac(0,A.G,A.bo.j(0.35),A.cx,16)],x.V)
n=A.c.j(0.22)
m=k.e
l=m?D.e61:D.bKG
n=B.p(j,l,A.f,j,j,new B.o(n,j,j,j,j,j,A.a6),j,30,j,j,j,j,j,30)
w.push(B.aG(!1,A.a1,!0,j,B.aL(!1,s,!0,B.eE(B.A(B.a([n,A.av,B.d(m?k.f:"Make the change",j,j,j,j,j,j,A.i5,j,j,j)],v),A.m,j,A.bb,A.j,0,j,j),j,new B.o(j,j,j,r,o,new B.a8(A.a3,A.a7,A.x,u,j,j),A.n),54,j,j),j,!0,j,j,j,j,j,j,j,j,j,j,j,t,j,j,j,j,j,j,j),A.f,A.K,0,j,j,j,j,j,A.ag))
return new B.D(new B.Q(0,0,0,h.f.d),B.p(j,B.bl(!0,B.cd(B.v(w,A.aj,j,A.e,A.j,0,A.p),A.r,j,A.y,j,A.vo,j,j,A.ah),!0,!1,A.af,!0,!1),A.f,j,new B.aY(0,680,0,i.a.b*0.85),D.aak,j,j,j,j,j,j,j,j),j)}}
C.b0r.prototype={}
C.aDf.prototype={
R(){return new C.bjo(null,null)}}
C.bjo.prototype={
gawx(){var w,v=this,u=v.d
if(u===$){w=B.bj(null,A.pH,null,1,null,v)
w.cH(0)
v.d!==$&&B.bL()
v.d=w
u=w}return u},
q(){this.gawx().q()
this.bul()},
B(d){var w=null,v=this.a.d
return B.aE(w,B.c6(this.gawx(),new C.ecx(this),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,!1,A.a8)}}
C.bgW.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m
for(w=this.b*2,v=e.a,u=e.b,t=d.a,s=0;s<7;++s){r=0.5+0.5*Math.sin(w+s*1.7)
q=D.d0f[s]
p=q.a*v
q=q.b*u
$.W()
o=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
o.r=D.xf.j(0.25+r*0.6).gp(0)
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
C.ar6.prototype={
a4(){return"NgmyTextCommand."+this.b}}
C.Zj.prototype={
R(){return new C.aAI()}}
C.aAI.prototype={
gahM(){var w,v="colorful",u=this.d
if(u===$){w=this.a.c.CW
w=C.agI(w==null?"":w,v)
u=w==null?null:w.b
u=this.d=u==null?v:u}return u},
gA_(){var w=this.e
return w===$?this.e=C.fZq(this.a.c).t(0,D.CA):w},
a7M(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$a7M=B.e(function(a0,a1){if(a0===1){t.push(a1)
w=u}for(;;)switch(w){case 0:s.m(new C.dhS(s))
u=3
r=A.d.iH(D.vV,new C.dhT(s))
q=B.db(C.fZq(s.a.c),x.Q)
l=q
J.hD(l,D.CA)
p=l
if(s.gA_())J.ch(p,D.CA)
q=s.a.c.CW
if(q==null)q=""
k=r.a
j=s.gA_()?" with Luxury FX":""
i=s.a
h=i.d
i=C.fZr(i.c)
g=C.fZs(s.a.c)
w=6
return B.b(C.bBo(h,s.a.c.a,p,i,null,q,g,'Change the look: use the style "'+k+'"'+j+". Keep every word, slide, bullet, picture and the logo exactly as they are."),$async$a7M)
case 6:o=a1
j=o.CW
q=j==null?"":j
q=C.agI(q,s.gahM())
f=q==null?null:q.b
n=f==null?s.gahM():f
if(!J.z(n,r.a)&&!s.gA_())throw B.V("The AI did not change the look. Try again.")
q=s.c
if(q!=null)B.a5(q,!1).O(o)
u=1
w=5
break
case 3:u=2
d=t.pop()
m=B.aa(d)
if(s.c!=null)s.m(new C.dhU(s,m))
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$a7M,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=B.P(d).ax.a===A.I,l=m?A.c:A.M,k=m?A.aR:A.ak,j=m?A.M:A.c,i=B.m(28),h=B.I(m?A.bF:A.aL,A.q,1),g=x.p,f=B.E(B.v(B.a([B.d("Look and feel",n,n,n,n,n,n,B.l(n,n,l,n,n,n,n,n,n,n,n,20,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),A.bB,B.d("Your words, pictures and logo stay the same.",n,n,n,n,n,n,B.l(n,n,k,n,n,n,n,n,n,n,n,12.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],g),A.F,n,A.e,A.j,0,A.p),1),e=o.f?n:new C.dhX(d)
e=B.A(B.a([f,B.aH(n,n,n,n,B.X(A.cC,k,n,n,n,n),n,n,n,e,n,n,n,n,n,n)],g),A.m,n,A.e,A.j,0,n,n)
f=B.a([],g)
for(w=0;w<11;++w){v=D.vV[w]
u=o.gahM()
t=o.f?n:new C.dhY(o,v)
f.push(new C.brQ(v,u===v.a,t,n))}f=B.lX(1.25,f,3,10,10,n,A.dQ,!0)
u=B.m(18)
t=o.gA_()?D.bWl:n
if(o.gA_())s=n
else s=m?A.bm:A.bL
r=B.X(A.dW,o.gA_()?A.c:k,n,n,n,n)
q=B.d("Luxury FX",n,n,n,n,n,n,B.l(n,n,o.gA_()?A.c:l,n,n,n,n,n,n,n,n,n,n,n,A.H,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
q=B.E(B.v(B.a([q,B.d("Moving light and ornaments, a new royal look each time",n,n,n,n,n,n,B.l(n,n,o.gA_()?A.ad:k,n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],g),A.F,n,A.e,A.j,0,A.p),1)
p=o.gA_()
f=B.a([f,A.aA,B.p(n,B.A(B.a([r,A.av,q,B.aa5(n,A.c,n,A.bK,!1,A.y,n,n,n,n,n,n,o.f?n:new C.dhZ(o),n,n,n,n,n,n,n,n,p)],g),A.m,n,A.e,A.j,0,n,n),A.f,n,n,new B.o(s,n,n,u,n,t,A.n),n,n,n,n,H.agS,n,n,n)],g)
u=o.r
if(u!=null)A.d.v(f,B.a([A.S,B.d(u,n,n,n,n,n,n,D.f4X,n,n,n)],g))
f=B.cd(B.v(f,A.F,n,A.e,A.j,0,A.p),A.r,n,A.y,n,A.Fe,n,n,A.ah)
u=o.f?n:o.gbzq()
t=B.bm(A.K,n,n,n,n,n,A.af,n,new B.b7(B.m(16),A.Y),n,n,n)
s=B.m(16)
return B.bl(!0,B.p(n,B.v(B.a([new B.D(D.bsI,e,n),new B.dq(1,A.cn,f,n),new B.D(A.Fd,new B.a7(1/0,50,B.bH(B.eE(B.av(o.f?A.rE:D.flI,n,n,n),n,new B.o(n,n,n,s,n,D.bUT,A.n),n,n,n),u,t),n),n)],g),A.m,n,A.e,A.Q,0,A.p),A.f,n,n,new B.o(j,n,h,i,n,n,A.n),n,n,n,A.ty,n,n,n,n),!0,!1,A.af,!0,!0)}}
C.brQ.prototype={
B(d){var w=null,v=this.c,u=A.d.gL(v.d),t=B.m(16),s=u.a,r=B.a([B.b0(s),B.b0(u.b)],x.O),q=this.d,p=B.I(q?A.c:A.K,A.q,2.5)
s=q?B.a([new B.ac(0,A.G,B.b0(s).j(0.5),A.J,12)],x.V):w
v=B.a([new B.bI(A.l5,w,w,B.X(v.c,A.ad,w,w,w,18),w),new B.bI(A.lw,w,w,B.d(v.b,w,w,w,w,w,w,D.f4V,w,w,w),w)],x.p)
if(q)v.push(D.aVe)
return B.aE(w,B.dj(w,new B.an(A.W,w,A.aa,A.r,v,w),w,w,A.bc,new B.o(w,w,p,t,s,new B.a8(A.ax,A.aC,A.x,r,w,w),A.n),A.eE,w,w,w,A.co,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,this.e,w,w,w,w,w,w,!1,A.a8)}}
C.ecu.prototype={
aE8(d,e,f){return e+"@"+A.a.aT(A.o.fS(f==null?this.a.c:f,16),8,"0").toUpperCase()},
wn(d,e){return this.aE8(0,e,null)}}
C.aLg.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbv())
w.a8$=null
w.a2()},
aR(){this.aY()
this.aX()
this.bw()}}
C.b0n.prototype={
B(d){var w,v,u=null,t=C.fYg(this.c)
if(t==null)w=D.bkN
else{w=B.aI(d,u,x.w).w.cGE(D.bpg,D.eMK)
v=this.d
w=B.t7(B.e1(B.ant(!1,t,!1,v,!1,390),!v,u),w)}return B.f4(A.A,new B.a7(416,870,new C.bl1(w,u),u),A.f,A.du)}}
C.bl1.prototype={
B(d){var w,v,u,t=null,s=B.a([],x.p)
for(w=0;w<3;++w){v=D.dbz[w]
u=new B.aT(3,3)
s.push(new B.cL(v.a,v.b,t,t,t,t,B.p(t,t,A.f,t,t,new B.o(t,t,t,new B.bp(u,u,u,u),t,D.anV,A.n),t,v.c,t,t,t,t,t,5),t))}for(w=0;w<2;++w){v=D.dcK[w]
u=new B.aT(3,3)
s.push(new B.cL(t,v.a,-3,t,t,t,B.p(t,t,A.f,t,t,new B.o(t,t,t,new B.bp(u,u,u,u),t,D.anV,A.n),t,v.b,t,t,t,t,t,5),t))}s.push(B.bZ(0,B.c_(t,new B.o(t,t,t,B.m(64),D.cLz,D.bTg,A.n),A.bd),0,0,0))
s.push(B.bZ(3,B.c_(t,new B.o(A.w,t,t,B.m(61),t,t,A.n),A.bd),3,3,3))
s.push(B.bZ(13,B.bw(B.m(51),B.el(this.c,A.w,!0),A.aq),13,13,13))
u=B.m(20)
s.push(B.ao(t,B.av(B.p(D.aVq,B.p(t,t,A.f,t,t,D.aZG,t,11,t,t,t,t,t,11),A.f,t,t,new B.o(A.w,t,t,u,t,t,A.n),t,36,t,t,t,t,t,122),t,t,t),t,t,0,0,25,t))
s.push(B.bZ(13,B.e1(B.bw(B.m(51),D.bmj,A.aq),!0,t),13,13,13))
s.push(B.ao(22,B.e1(B.av(B.p(t,t,A.f,t,t,new B.o(A.ad,t,t,B.m(3),t,t,A.n),t,5,t,t,t,t,t,134),t,t,t),!0,t),t,t,0,0,t,t))
return new B.an(A.W,t,A.aa,A.f,s,t)}}
C.la.prototype={
pu(){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=4280640491,j=4280172719,i=4294967295,h="Thank You",g=C.cC(),f=C.cC(),e=m.r
f=C.ep(A.L,!1,e.l(),A.aD,"",k,42,A.bl,A.u,"",0.22,f,l,"","",0,!1,"",0,D.be,j,2,"Your Presentation Title",0,0,"",D.mC,D.cQ,0.84,0.08,0.26)
w=C.cC()
v=m.w
w=C.ep(A.L,!1,v.l(),A.aD,"",k,20,A.bl,A.a5,"",0.12,w,l,"","",0,!1,"",0,D.be,j,2,"Class \xb7 Subject \xb7 Date",0,0,"",D.dd,D.cQ,0.76,0.12,0.56)
u=C.cC()
t=m.d
s=x.u
t=C.ro(i,l,0,0,B.a([f,w,C.ep(A.bg,!1,4279310375,A.aD,"",t.j(0.8).l(),24,A.bl,A.a5,"",0.006,u,l,"","",0,!1,"",0,D.fr,t.l(),3,"",0,0,"",D.cm,D.f0,0.3,0.35,0.72)],s),C.cC(),D.mB,"","","Welcome",D.dd)
u=C.cC()
u=C.ep(A.bg,!1,e.l(),A.aD,"",k,34,A.bl,A.u,"",0.14,u,l,"","",0,!1,"",0,D.be,j,2,"Agenda",0,0,"",D.cm,D.cQ,0.84,0.08,0.08)
w=C.cC()
w=C.ro(i,l,0,0,B.a([u,C.ep(A.bg,!0,v.l(),A.aD,"",k,22,A.bl,A.a5,"",0.6,w,l,"","",0,!1,"",0,D.be,j,2,"1. Introduction\n2. Core concepts\n3. Case study\n4. Discussion\n5. Summary & Q&A",0,0,"",D.ud,D.cQ,0.8,0.1,0.26)],s),C.cC(),D.mB,"","","Agenda",D.dd)
u=C.cC()
u=C.ep(A.bg,!1,e.l(),A.aD,"",k,32,A.bl,A.u,"",0.14,u,l,"","",0,!1,"",0,D.be,j,2,"Main Idea",0,0,"",D.cm,D.cQ,0.84,0.08,0.08)
f=C.cC()
f=C.ro(i,l,0,0,B.a([u,C.ep(A.bg,!0,v.l(),A.aD,"",k,21,A.bl,A.a5,"",0.62,f,l,"","",0,!1,"",0,D.be,j,2,"\u2022 Supporting detail\n\u2022 Evidence or example\n\u2022 Why it matters",0,0,"",D.cm,D.cQ,0.8,0.1,0.26)],s),C.cC(),D.mB,"","","Key Point 1",D.dd)
u=C.cC()
u=C.ep(A.bg,!1,e.l(),A.aD,"",k,30,A.bl,A.u,"",0.12,u,l,"","",0,!1,"",0,D.be,j,2,"Compare & Contrast",0,0,"",D.cm,D.cQ,0.84,0.08,0.08)
r=C.cC()
r=C.ep(A.bg,!0,v.l(),A.aD,"",k,18,A.bl,A.a5,"",0.62,r,l,"","",0,!1,"",0,D.be,j,2,"Option A\n\n\u2022 Strength\n\u2022 Example",0,0,"",D.cm,D.cQ,0.4,0.08,0.24)
q=C.cC()
q=C.ro(i,l,0,0,B.a([u,r,C.ep(A.bg,!0,v.l(),A.aD,"",k,18,A.bl,A.a5,"",0.62,q,l,"","",0,!1,"",0,D.be,j,2,"Option B\n\n\u2022 Strength\n\u2022 Example",0,0,"",D.cm,D.cQ,0.4,0.52,0.24)],s),C.cC(),D.mB,"","","Key Point 2",D.dd)
r=C.cC()
r=C.ep(A.L,!1,e.l(),A.aD,"",k,48,A.bl,A.u,"",0.2,r,l,"","",0,!1,"",0,D.be,j,2,h,0,0,"",D.dd,D.cQ,0.8,0.1,0.32)
e=C.cC()
p=C.Br(l,l,l,l,D.Cw,5,!1,l,l,l,l,l,g,l,!1,l,m.b,l,l,B.a([t,w,f,q,C.ro(i,l,0,0,B.a([r,C.ep(A.L,!1,v.l(),A.aD,"",k,22,A.bl,A.a5,"",0.1,e,l,"","",0,!1,"",0,D.be,j,2,"Questions?",0,0,"",D.cm,D.cQ,0.7,0.15,0.58)],s),C.cC(),D.mB,"","",h,D.dd)],x.g),"class_"+m.a,l,!1,l)
for(g=p.r,f=g.length,e=m.e,w=m.f,o=0;o<g.length;g.length===f||(0,B.L)(g),++o){n=g[o]
n.e=e.l()
n.f=w.l()}return p}}
C.En.prototype={
bx(d){return this.e.$1(d)}}
C.eu.prototype={}
C.iX.prototype={}
C.Ee.prototype={
gaJS(){var w=this.c
if(!(A.a.i(w).length!==0)){w=C.agv(this.a)
w=w==null?null:w.c
if(w==null)w=""}return w},
a30(d,e,f,g){var w=this,v=e==null?w.a:e,u=g==null?w.b:g,t=f==null?w.c:f
return new C.Ee(v,u,t,d==null?w.d:d)},
Fp(d){return this.a30(null,d,null,null)},
aCS(d){return this.a30(null,null,null,d)},
cGC(d,e){return this.a30(d,e,null,null)},
bar(d){return this.a30(d,null,null,null)},
bay(d){return this.a30(null,null,d,null)}}
C.N7.prototype={
R(){return new C.biL(new B.eS(0,$.aw()),null,null)}}
C.biL.prototype={
a_(){var w,v=this
v.a1()
w=v.qu(new C.dTj(v))
v.e!==$&&B.aP()
v.e=w
if(v.a.e)w.iR(0)
else v.d.sp(0,3.2)},
q(){var w=this.e
w===$&&B.c()
w.q()
w=this.d
w.U$=$.aw()
w.P$=0
this.btO()},
B(d){var w=C.agv(this.a.c.a)
if(w==null)w=A.d.gL(D.GB)
return B.cp(new C.dTi(this,w,C.hdg(this.a.c.d)))}}
C.bqp.prototype={
B(d){return B.nL(A.UU,this.e,new C.eVV(this,A.k.F(this.d*0.35,1.6)-0.3))}}
C.bdP.prototype={
a5(d,e){var w=this,v=w.c.a
switch(w.b){case"fireworks":w.aRH(d,e,v)
break
case"confetti":w.bFU(d,e,v)
break
case"crown":w.bHw(d,e,v)
break
case"aurora":w.bAv(d,e,v)
break
case"champagne":w.bDJ(d,e,v)
break
case"diamonds":w.bJH(d,e,v)
break
case"starburst":w.ctS(d,e,v)
break
case"balloons":w.bAJ(d,e,v)
break
case"galaxy":w.bOx(d,e,v)
break
case"redcarpet":w.ckX(d,e,v)
break
case"coins":w.bFg(d,e,v)
break
case"lanterns":w.bYG(d,e,v)
break
case"hearts":w.bWk(d,e,v)
break
case"petals":w.cg6(d,e,v)
break
case"butterflies":w.bCK(d,e,v)
break
case"neon":w.c1v(d,e,v)
break
case"disco":w.bJS(d,e,v)
break
case"sunrise":w.cvo(d,e,v)
break
case"pearls":w.cfa(d,e,v)
break
case"snow":w.ctx(d,e,v)
break
case"laurel":w.bYM(d,e,v)
break
case"ribbons":w.cnv(d,e,v)
break
case"kente":w.bYu(d,e,v)
break
case"trophy":w.cz1(d,e,v)
break
case"shooting":w.crn(d,e,v)
break
case"bokeh":w.bB1(d,e,v)
break
case"orbits":w.ccP(d,e,v)
break
case"flowers":w.bNO(d,e,v)
break
case"music":w.c1f(d,e,v)
break
case"mandala":w.c_H(d,e,v)
break
case"sparklers":w.ctG(d,e,v)
break
case"city":w.bEy(d,e,v)
break}},
rs(d,e,f,g,h){var w,v,u,t,s
if(h<=0.01)return
w=$.W()
v=B.M()
v.r=g.j(A.k.D(h,0,1)).gp(0)
v.a=A.nz
u=new B.aO(w.r,A.ap,null,null,B.a([],x.v))
w=e.a
t=e.b
s=t-f
u.E(new B.b5(w,s))
u.E(new B.cU(w,t,w+f,t))
u.E(new B.cU(w,t,w,t+f))
u.E(new B.cU(w,t,w-f,t))
u.E(new B.cU(w,t,w,s))
u.E(new B.bF())
d.aO(u,v)
d.ae(e,f*0.18,v)},
lG(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o=e.a,n=e.b,m=Math.min(o,n)
for(w=Math.max(4,A.k.V(g*this.d)),v=i+3,u=i+4,t=i+1,s=i+2,r=i+5,q=0;q<w;++q){p=(Math.sin(f*(1.2+C.cW(q,v)*2.5)+C.cW(q,u)*6.28)+1)/2
this.rs(d,new B.u(C.cW(q,t)*o,C.cW(q,s)*n),m*(0.006+0.014*C.cW(q,r))*(0.5+p),h,p*p)}},
aRH(c3,c4,c5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0=c4.a,c1=c4.b,c2=Math.min(c0,c1)
this.lG(c3,c4,c5,40,A.c,10)
w=x.O
v=[B.a([A.bK,A.aH],w),B.a([A.iq,A.bA],w),B.a([A.eu,A.aS],w),B.a([A.c,A.aw],w)]
for(u=c2*0.005,t=c3.a,s=c2*0.012,r=c5*30,q=46*this.d,p=c2*0.08,o=c2*0.04,n=c2*0.006,m=c2*0.008,l=0;l<7;++l){k=c5+l*2.8/7
j=A.k.bt(k/2.8)
i=A.k.F(k,2.8)/2.8
h=l*97+j*13
g=c0*(0.15+0.7*C.cW(h,1))
f=g+c0*(C.cW(h,2)-0.5)*0.15
e=c1*(0.12+0.35*C.cW(h,3))
d=v[Math.abs(A.o.F(h,4))]
if(i<0.22){a0=B.lg(new B.u(g,c1),new B.u(f,e),A.ct.aw(0,i/0.22))
a0.toString
$.W()
a1=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
a1.saq(new B.a8(A.a3,A.a7,A.x,B.a([d[0].j(0),d[0]],w),null,null).av(0,B.rq(new B.u(g,c1),a0)))
a1.c=n
a1.d=A.bO
a2=B.lg(new B.u(g,c1),a0,0.75)
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
a6=A.ct.aw(0,a5)
a0=1-a5
a7=a0*a0
a0=Math.max(4,A.k.V(q))
a2=C.cW(h,4)
if(a5<0.15){a4=1-a5/0.15
$.W()
a8=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
a8.r=d[0].j(0.5*a4).gp(0)
a8.z=new B.hu(A.G,o)
a3=a8.H()
t.drawCircle(f,e,p*a4,a3)
a3.delete()}for(a4=a5>0.45,a8=a7*0.8,a2=c2*(0.16+0.1*a2)*a6,a9=a5*a5*c2*0.12,b0=a9*0.8,b1=0;b1<a0;++b1){b2=b1/a0*3.141592653589793*2+C.cW(h,b1+10)*0.2
b3=a2*(0.75+0.25*C.cW(h,b1+60))
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
b9.a=A.nz
a3=b9.H()
t.drawLine.apply(t,[f+b6*b3*0.82,e+b7*b3*0.82+b0,b4,b5,a3])
a3.delete()
if(a4&&C.cW(h,b1+120)>0.5)this.rs(c3,new B.u(b4,b5),s,A.c,a7*(0.5+0.5*Math.sin(r+b1)))}}}},
bFU(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=a2.a,i=a2.b,h=Math.min(j,i),g=A.k.F(a3*0.25,1.6)-0.3,f=0+j,e=0+i,d=$.W(),a0=B.M()
a0.saq(new B.a8(A.ax,A.aC,A.x,D.d6w,B.a([A.k.D(g-0.15,0,1),A.k.D(g,0,1),A.k.D(g+0.15,0,1)],x.x),null).av(0,new B.a9(0,0,f,e)))
a1.aZ(new B.a9(0,0,f,e),a0)
a0=Math.max(4,A.k.V(150*this.d))
for(f=a1.a,w=i+h*0.1,i=h*0.05,e=a3*4,v=x.v,u=0;u<a0;++u){t=A.k.F(a3*(h*(0.08+0.12*C.cW(u,1)))+C.cW(u,2)*w,w)
s=C.cW(u,3)
r=Math.sin(a3*(0.8+C.cW(u,4))+u)
q=h*(0.012+0.012*C.cW(u,5))
p=Math.cos(a3*(2+3*C.cW(u,6))+u)
o=D.Pf[A.o.D(A.k.bt(C.cW(u,7)*5),0,4)]
J.bz(f.save())
f.translate(s*j+r*h*0.04,t-i)
f.rotate((a3*(0.6+C.cW(u,8)*2)+u)*180/3.141592653589793,0,0)
n=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
t=Math.abs(p)
n.r=B.aq(o,A.c,t*0.4).j(0.95).gp(0)
if(A.o.F(u,5)===0){t=B.a([],v)
m=new B.aO(d.r,A.ap,null,null,t)
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
t.b=A.ae
t.c=q*0.35
k=t.H()
t=m.e
f.drawPath((t==null?m.e=new B.cF(m.gbL().a.snapshot()):t).a,k)
k.delete()}else{t=B.cl(A.J,q*1.8*A.k.D(t,0.15,1),q)
k=n.H()
f.drawRect(B.c0(t),k)
k.delete()}f.restore()}this.lG(a1,a2,a3,25,A.bK,30)},
bHw(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=a9.a,a6=a9.b,a7=Math.min(a5,a6)
a5/=2
a6*=0.5
w=new B.u(a5,a6)
for(v=x.O,u=a7*1.2,t=a8.a,s=b0*0.12,r=x.v,q=0;q<16;++q){p=q/16*3.141592653589793*2+s
o=$.W()
n=B.a([],r)
m=new B.aO(o.r,A.ap,a4,a4,n)
n.push(new B.b5(a5,a6))
o=p-0.07
n.push(new B.ap(a5+Math.cos(o)*a7*1.2,a6+Math.sin(o)*a7*1.2))
o=p+0.07
n.push(new B.ap(a5+Math.cos(o)*a7*1.2,a6+Math.sin(o)*a7*1.2))
n.push(new B.bF())
o=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
o.saq(new B.bT(A.A,0.5,A.x,a4,0,B.a([A.bK.j(0.22),D.b9L],v),a4,a4).av(0,B.bU(w,u)))
l=o.H()
o=m.gbL().a.snapshot()
t.drawPath((m.e=new B.cF(o)).a,l)
l.delete()}k=a7*0.28
j=a7*0.16
a5-=k/2
a6=a6-a7*0.15-j
i=new B.aO($.W().r,A.ap,a4,a4,B.a([],r))
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
n.saq(new B.a8(A.b_,A.b5,A.x,D.d5l,a4,a4).av(0,new B.a9(a5,a6,o,v)))
a8.aO(i,n)
for(v=[D.ekI,D.eeG,D.etL],o=a6+j*0.78,n=a7*0.016,g=a7*0.005,f=o-g,e=0;e<3;++e){d=v[e]
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
l.delete()}}for(v=B.wX(i),u=B.a([],x.X),o=new B.vs(v,!1,u),n=v.a,g=a7*0.008;o.C();){f=o.c
if(f===0||o.f)B.ba(B.jU(y.M));--f
o.jn()
d=u[f].b
d===$&&B.c()
d=d.a.length()
d=new B.aO(n,v.b,a4,new B.cI([new B.H6(o,f),0,d*h,!0]),B.a([],r))
f=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
f.b=A.ae
f.c=g
f.e=A.fA
f.r=A.bK.gp(0)
l=f.H()
f=d.gbL().a.snapshot()
t.drawPath((d.e=new B.cF(f)).a,l)
l.delete()}if(s){a3=A.k.F(b0*0.5,1)
this.rs(a8,new B.u(a5+k*a3,a6+j*0.5),a7*0.04,A.c,Math.sin(a3*3.141592653589793))}this.lG(a8,a9,b0,45,A.bK,40)},
bAv(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=a9.a,a6=a9.b,a7=Math.min(a5,a6)
this.lG(a8,a9,b0,60,A.c,50)
w=[D.eE7,D.eDQ,D.eDK,D.eF5]
for(v=a7*0.01,u=a8.a,t=a7*0.14,s=a7*0.06,r=a5+10,q=a5/40,p=x.v,o=0;o<4;++o){n=w[o].a
m=n[0]
l=n[1]
k=n[2]
j=n[3]
n=$.W()
i=B.a([],p)
h=new B.aO(n.r,A.ap,null,null,i)
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
n.b=A.ae
n.c=t
n.r=m.j(0.28).gp(0)
n.a=A.nz
n.z=new B.hu(A.G,s)
a2=n.H()
n=h.e
u.drawPath((n==null?h.e=new B.cF(h.gbL().a.snapshot()):n).a,a2)
a2.delete()
n=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
n.b=A.ae
n.c=v
n.r=m.j(0.55).gp(0)
n.a=A.nz
n.z=new B.hu(A.G,v)
a2=n.H()
n=h.e
u.drawPath((n==null?h.e=new B.cF(h.gbL().a.snapshot()):n).a,a2)
a2.delete()}for(v=Math.max(4,A.k.V(40*this.d)),a3=a6+20,t=b0*a7,a4=0;a4<v;++a4){s=A.k.F(t*(0.05+0.06*C.cW(a4,1))+C.cW(a4,2)*a3,a3)
r=C.cW(a4,3)
q=Math.sin(b0+a4)
p=C.cW(a4,4)
$.W()
n=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
n.r=A.xe.j(0.4+0.5*C.cW(a4,5)).gp(0)
n.a=A.nz
a2=n.H()
u.drawCircle(r*a5+q*a7*0.02,a6-s,a7*(0.003+0.004*p),a2)
a2.delete()}},
bDJ(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=a2.a,j=a2.b,i=Math.min(k,j),h=Math.sin(a3*1.5),g=k/2,f=j*0.5,e=i*0.55,d=$.W(),a0=B.M()
a0.saq(new B.bT(A.A,0.5,A.x,l,0,B.a([A.hG.j(0.25+0.1*h),D.WG],x.O),l,l).av(0,B.bU(new B.u(g,f),e)))
a1.ae(new B.u(g,f),e,a0)
for(h=i*0.008,g=a1.a,f=a3*3,e=x.v,w=0;w<6;++w){v=(w&1)===0
a0=B.a([],e)
u=new B.aO(d.r,A.ap,l,l,a0)
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
a0.b=A.ae
a0.c=h
a0.r=D.Pf[A.o.F(w,4)].j(0.7).gp(0)
p=a0.H()
a0=u.e
g.drawPath((a0==null?u.e=new B.cF(u.gbL().a.snapshot()):a0).a,p)
p.delete()}for(h=Math.max(4,A.k.V(110*this.d)),f=j*0.08,o=j*1.1,e=a3*2,w=0;w<h;++w){n=j-A.k.F(a3*(i*(0.07+0.12*C.cW(w,1)))+C.cW(w,2)*o,o)
r=k*(0.1+0.8*C.cW(w,3))+Math.sin(e+w)*i*0.015
m=i*(0.004+0.012*C.cW(w,4))
if(n<f){this.rs(a1,new B.u(r,n),m*2.4,A.bK,A.k.D(n/f,0,1))
continue}$.W()
d=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
d.b=A.ae
a0=m*0.25
d.c=Math.max(0.8,a0)
d.r=A.At.j(0.75).gp(0)
p=d.H()
g.drawCircle(r,n,m,p)
p.delete()
d=m*0.35
t=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
t.r=A.c.j(0.8).gp(0)
p=t.H()
g.drawCircle(r-d,n-d,a0,p)
p.delete()}},
bJH(a9,b0,b1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=null,a6=b0.a,a7=b0.b,a8=Math.min(a6,a7)
this.lG(a9,b0,b1,30,A.l7,60)
for(w=Math.max(4,A.k.V(42*this.d)),v=a9.a,u=b1*2.2,t=b1*a8,s=b1*0.7,r=b1*0.8,q=x.v,p=0;p<w;++p){o=a8*(0.025+0.035*C.cW(p,1))
n=a7+o*4
m=A.k.F(t*(0.04+0.06*C.cW(p,2))+C.cW(p,3)*n,n)-o*2
l=C.cW(p,4)*a6+Math.sin(s+p)*a8*0.02
J.bz(v.save())
v.translate(l,m)
v.rotate(Math.sin(r+p)*0.5*180/3.141592653589793,0,0)
k=o*1.2
j=-k
i=j*0.35
h=$.W()
g=B.a([],q)
f=new B.aO(h.r,A.ap,a5,a5,g)
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
g.saq(new B.a8(A.ax,A.aC,A.x,D.d1f,a5,a5).av(0,B.cl(A.J,k*1.2,o)))
a2=g.H()
g=f.gbL().a.snapshot()
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
if(a4>0.85)this.rs(a9,new B.u(l+o*0.2,m-o*0.3),o*0.9,A.c,(a4-0.85)/0.15)}},
ctS(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=e.a,g=e.b,f=Math.min(h,g)
h/=2
g/=2
for(w=d.a,v=x.v,u=a0*0.15,t=0;t<28;++t){s=t/28*3.141592653589793*2-u
r=(t&1)===0
q=r?0.05:0.025
p=$.W()
o=B.a([],v)
n=new B.aO(p.r,A.ap,null,null,o)
o.push(new B.b5(h,g))
p=s-q
o.push(new B.ap(h+Math.cos(p)*f*1.3,g+Math.sin(p)*f*1.3))
p=s+q
o.push(new B.ap(h+Math.cos(p)*f*1.3,g+Math.sin(p)*f*1.3))
o.push(new B.bF())
p=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
p.r=A.bK.j(r?0.12:0.07).gp(0)
m=p.H()
r=n.gbL().a.snapshot()
w.drawPath((n.e=new B.cF(r)).a,m)
m.delete()}for(v=f*0.008,l=0;l<3;++l){k=A.k.F(a0+l*0.6,1.8)/1.8
$.W()
u=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
u.b=A.ae
r=1-k
u.c=v*r
u.r=A.bK.j(r*0.6).gp(0)
m=u.H()
w.drawCircle(h,g,f*(0.15+0.6*k),m)
m.delete()}j=A.k.bt(a0/2.4)
k=A.k.F(a0,2.4)/2.4
for(w=Math.max(4,A.k.V(70*this.d)),v=j+1,u=(1-k)*1.2,t=0;t<w;++t){s=C.cW(t,j)*3.141592653589793*2
i=f*(0.1+0.55*D.blH.aw(0,k)*(0.5+0.5*C.cW(t,v)))
this.rs(d,new B.u(h+Math.cos(s)*i,g+Math.sin(s)*i),f*(0.01+0.012*C.cW(t,3)),D.Pf[A.o.D(A.k.bt(C.cW(t,4)*5),0,4)],u)}},
bAJ(a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=a8.a,a5=a8.b,a6=Math.min(a4,a5)
for(w=this.d,v=Math.max(4,A.k.V(22*w)),u=a7.a,t=x.O,s=x.v,r=a9*2,q=a9*a6,p=a9*0.9,o=0;o<v;++o){n=a6*(0.045+0.035*C.cW(o,1))
m=a5+n*6
l=n*2
k=a5+l-A.k.F(q*(0.05+0.05*C.cW(o,2))+C.cW(o,3)*m,m)
j=C.cW(o,4)*a4+Math.sin(p+o*1.3)*a6*0.03
i=D.av3[A.o.F(o,6)]
h=$.W()
g=B.a([],s)
f=new B.aO(h.r,A.ap,a3,a3,g)
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
d.b=A.ae
d.c=Math.max(0.7,n*0.03)
d.r=A.c.j(0.6).gp(0)
a1=d.H()
d=f.e
u.drawPath((d==null?f.e=new B.cF(f.gbL().a.snapshot()):d).a,a1)
a1.delete()
a2=B.cl(new B.u(j,k),n*2.3,l)
l=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
d=B.aq(i,A.w,0.35)
d.toString
l.saq(new B.bT(D.aVt,0.9,A.x,a3,0,B.a([A.c,i,d],t),V.auV,a3).av(0,a2))
a1=l.H()
u.drawOval(B.c0(a2),a1)
a1.delete()
l=B.a([],s)
g=new B.aO(g.r,A.ap,a3,a3,l)
d=n*0.12
l.push(new B.b5(j-d,h))
l.push(new B.ap(j+d,h))
l.push(new B.ap(j,k+n))
l.push(new B.bF())
l=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
l.r=B.aq(i,A.w,0.3).gp(0)
a1=l.H()
l=g.gbL().a.snapshot()
u.drawPath((g.e=new B.cF(l)).a,a1)
a1.delete()}for(w=Math.max(4,A.k.V(60*w)),m=a5+20,a5=a9*3,v=a6*0.012,t=a6*0.02,o=0;o<w;++o){s=A.k.F(q*(0.1+0.1*C.cW(o,11))+C.cW(o,12)*m,m)
r=C.cW(o,13)
J.bz(u.save())
u.translate(r*a4,s-10)
u.rotate((a5+o)*180/3.141592653589793,0,0)
s=B.cl(A.J,t,v)
$.W()
r=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
r.r=D.av3[A.o.F(o,6)].j(0.85).gp(0)
a1=r.H()
u.drawRect(B.c0(s),a1)
a1.delete()
u.restore()}},
bOx(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=b2.a,a6=b2.b,a7=Math.min(a5,a6),a8=a5/2,a9=a6/2,b0=new B.u(a8,a9)
this.lG(b1,b2,b3,50,A.c,70)
for(w=[D.eEf,D.eDW,D.eE1],v=b3*0.3,u=x.O,t=b1.a,s=0;s<3;++s){r=w[s].a
q=r[0]
p=r[1]
o=r[2]
n=r[3]
r=a8+(p*a5+Math.sin(v)*a7*0.03)
m=a9+o*a6
l=a7*n
$.W()
k=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
k.saq(new B.bT(A.A,0.5,A.x,a4,0,B.a([q.j(0.32+0.08*Math.sin(b3)),q.j(0)],u),a4,a4).av(0,B.bU(new B.u(r,m),l)))
j=k.H()
t.drawCircle(r,m,l,j)
j.delete()}w=Math.max(4,A.k.V(420*this.d))
for(v=a7*0.6,r=b3*0.18,i=0;i<w;++i){h=A.o.F(i,3)
g=C.cW(i,1)
f=v*Math.pow(g,0.8)
e=h*3.141592653589793*2/3+g*5.5+r+(C.cW(i,2)-0.5)*0.5
m=Math.cos(e)
l=Math.sin(e)
k=B.aq(A.bK,A.eA,g)
k.toString
d=C.cW(i,3)
$.W()
a0=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
a0.r=k.j(0.5+0.5*C.cW(i,4)).gp(0)
a0.a=A.nz
j=a0.H()
t.drawCircle(a8+m*f,a9+l*f*0.62,a7*(0.0025+0.004*d),j)
j.delete()}a8=a7*0.12
$.W()
a9=B.M()
a9.saq(new B.bT(A.A,0.5,A.x,a4,0,B.a([A.At.j(0.55),D.aes],u),a4,a4).av(0,B.bU(b0,a8)))
b1.ae(b0,a8,a9)
a1=A.k.F(b3,3.5)/3.5
if(a1<0.25){a2=A.k.bt(b3/3.5)
a3=new B.u(a5*(0.1+0.5*C.cW(a2,9)),a6*0.1*C.cW(a2,8))
a5=B.lg(a3,a3.ad(0,new B.u(v,a7*0.3)),a1/0.25)
a5.toString
a6=B.lg(a3,a5,0.6)
a6.toString
a8=B.M()
a8.saq(new B.a8(A.a3,A.a7,A.x,B.a([A.c.j(0),A.c],u),a4,a4).av(0,B.rq(a3,a5)))
a8.c=a7*0.005
a8.d=A.bO
b1.bB(a6,a5,a8)}},
ckX(b9,c0,c1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=null,b6=c0.a,b7=c0.b,b8=Math.min(b6,b7)
for(w=x.O,v=b9.a,u=-b8*0.05,t=b7*1.3,s=x.v,r=0;r<3;++r){q=b6*(0.2+r*0.3)
p=1.5707963267948966+Math.sin(c1*(0.5+r*0.15)+r*2)*0.45
o=$.W()
n=B.a([],s)
m=new B.aO(o.r,A.ap,b5,b5,n)
n.push(new B.b5(q,u))
o=p-0.16
n.push(new B.ap(q+Math.cos(o)*t,u+Math.sin(o)*t))
o=p+0.16
n.push(new B.ap(q+Math.cos(o)*t,u+Math.sin(o)*t))
n.push(new B.bF())
o=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
o.saq(new B.bT(A.A,0.5,A.x,b5,0,B.a([A.At.j(0.28),D.aes],w),b5,b5).av(0,B.bU(new B.u(q,u),t)))
o.a=A.nz
l=o.H()
q=m.gbL().a.snapshot()
v.drawPath((m.e=new B.cF(q)).a,l)
l.delete()}for(u=[!0,!1],q=b7*0.52,o=b8*0.012,n=b7*0.5,k=b7*0.55,j=0+b7,i=b6*0.16,h=i*0.55,g=i*0.9,f=i*0.62,e=i*0.95,d=b6-e,a0=b6-f,a1=b6-g,a2=b6-h,a3=b6-i,a4=0;a4<2;++a4){a5=u[a4]
a6=a5?0:a3
a7=B.a([],w)
for(a8=0;a8<7;++a8)a7.push((a8&1)===0?A.es:A.eN)
a9=$.W()
b0=B.a([],s)
m=new B.aO(a9.r,A.ap,b5,b5,b0)
b0.push(new B.b5(a5?0:b6,0))
b0.push(new B.ap(a5?i:a3,0))
a9=a5?h:a2
b0.push(new B.cU(a9,k,a5?g:a1,b7))
b0.push(new B.ap(a5?0:b6,b7))
b0.push(new B.bF())
a9=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
a9.saq(new B.a8(A.a3,A.a7,A.x,a7,b5,b5).av(0,new B.a9(a6,0,a6+i,j)))
l=a9.H()
a9=m.gbL().a.snapshot()
v.drawPath((m.e=new B.cF(a9)).a,l)
l.delete()
a9=a5?f:a0
b0=a5?e:d
b1=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
b1.r=A.hG.gp(0)
b1.c=o
b1.d=A.bO
l=b1.H()
v.drawLine.apply(v,[a9,n,b0,q,l])
l.delete()}b2=new B.aO($.W().r,A.ap,b5,b5,B.a([],s))
w=b7*0.78
b2.E(new B.b5(b6*0.42,w))
b2.E(new B.ap(b6*0.58,w))
b2.E(new B.ap(b6*0.8,b7))
b2.E(new B.ap(b6*0.2,b7))
b2.E(new B.bF())
v=B.M()
v.saq(D.bUN.av(0,new B.a9(0,w,0+b6,w+b7*0.22)))
b9.aO(b2,v)
for(w=Math.max(4,A.k.V(80*this.d)),b3=b7+10,b7=c1*b8,v=c1*5,r=0;r<w;++r){b4=A.k.F(b7*(0.05+0.07*C.cW(r,1))+C.cW(r,2)*b3,b3)
u=C.cW(r,3)
s=Math.sin(c1+r)
q=Math.sin(v+r)
this.rs(b9,new B.u(b6*(0.15+0.7*u)+s*b8*0.01,b4),b8*(0.006+0.008*C.cW(r,4)),A.bK,0.3+0.7*((q+1)/2))}},
bFg(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=e.a,h=e.b,g=Math.min(i,h)
for(w=Math.max(4,A.k.V(55*this.d)),v=d.a,u=f*g,t=0;t<w;++t){s=g*(0.02+0.02*C.cW(t,1))
r=h+s*4
q=s*2
p=A.k.F(u*(0.12+0.12*C.cW(t,2))+C.cW(t,3)*r,r)-q
o=C.cW(t,4)*i
n=Math.cos(f*(2+3*C.cW(t,5))+t)
m=Math.abs(n)
l=B.cl(new B.u(o,p),q,q*A.k.D(m,0.12,1))
$.W()
q=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
q.saq(new B.a8(A.ax,A.aC,A.x,n>0?D.dfV:D.czr,null,null).av(0,l))
k=q.H()
v.drawOval(B.c0(l),k)
k.delete()
q=-(s*0.22)
j=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
j.b=A.ae
j.c=Math.max(0.6,s*0.08)
j.r=D.biE.gp(0)
k=j.H()
v.drawOval(B.c0(new B.a9(l.a-q,l.b-q,l.c+q,l.d+q)),k)
k.delete()
if(m>0.97)this.rs(d,new B.u(o+s*0.3,p-s*0.4),s*0.9,A.c,0.9)}this.lG(d,e,f,30,A.bK,110)},
bYG(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
this.lG(a3,a4,a5,50,A.c,120)
for(w=Math.max(4,A.k.V(26*this.d)),v=a3.a,u=x.O,t=a5*a2,s=a5*0.6,r=a5*9,q=x.v,p=0;p<w;++p){o=a2*(0.035+0.035*C.cW(p,1))
n=a1+o*4
m=a1+o*2-A.k.F(t*(0.03+0.04*C.cW(p,2))+C.cW(p,3)*n,n)
l=C.cW(p,4)*a0+Math.sin(s+p)*a2*0.03
k=0.8+0.2*Math.sin(r+p*3)
j=o*2.2
i=$.W()
h=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
h.saq(new B.bT(A.A,0.5,A.x,d,0,B.a([W.WT.j(0.45*k),D.adh],u),d,d).av(0,B.bU(new B.u(l,m),j)))
g=h.H()
v.drawCircle(l,m,j,g)
g.delete()
j=B.a([],q)
f=new B.aO(i.r,A.ap,d,d,j)
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
i=B.aq(D.b9W,A.c,0.2*k)
i.toString
j.saq(new B.a8(A.b_,A.b5,A.x,B.a([D.beh,i],u),d,d).av(0,B.cl(new B.u(l,m),o*1.4,o)))
g=j.H()
j=f.gbL().a.snapshot()
v.drawPath((f.e=new B.cF(j)).a,g)
g.delete()
j=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
j.r=A.c.j(k).gp(0)
g=j.H()
v.drawCircle(l,m+o*0.55,o*0.12,g)
g.delete()}},
bWk(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
for(w=Math.max(4,A.k.V(40*this.d)),v=a3.a,u=x.O,t=x.v,s=a5*a2,r=a5*1.3,q=a5*6,p=0;p<w;++p){o=a2*(0.02+0.03*C.cW(p,1))
n=a1+o*4
m=A.k.F(s*(0.05+0.06*C.cW(p,2))+C.cW(p,3)*n,n)
l=C.cW(p,4)
k=Math.sin(r+p)
j=1+0.12*Math.max(0,Math.sin(q+p))
J.bz(v.save())
v.translate(l*a0+k*a2*0.03,a1+o*2-m)
v.rotate(Math.sin(a5+p)*0.3*180/3.141592653589793,0,0)
v.scale(j,j)
m=$.W()
l=B.a([],t)
i=new B.aO(m.r,A.ap,d,d,l)
m=o*0.9
l.push(new B.b5(0,m))
k=-o
h=k*0.2
g=k*1.6
l.push(new B.pw(k*1.8,h,k*0.9,g,0,k*0.55))
l.push(new B.pw(m,g,o*1.8,h,0,m))
l.push(new B.bF())
f=D.cTv[A.o.F(p,5)]
m=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
l=B.aq(f,A.w,0.25)
l.toString
m.saq(new B.bT(A.rR,0.5,A.x,d,0,B.a([A.c,f,l],u),H.a1E,d).av(0,B.bU(A.J,o*1.4)))
e=m.H()
m=i.gbL().a.snapshot()
v.drawPath((i.e=new B.cF(m)).a,e)
e.delete()
v.restore()}this.lG(a3,a4,a5,30,A.iq,130)},
cg6(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=e.a,g=e.b,f=Math.min(h,g)
for(w=Math.max(4,A.k.V(70*this.d)),v=d.a,u=x.v,t=a0*f,s=a0*0.9,r=a0*2,q=0;q<w;++q){p=f*(0.015+0.02*C.cW(q,1))
o=g+p*4
n=A.k.F(t*(0.05+0.06*C.cW(q,2))+C.cW(q,3)*o,o)
m=C.cW(q,4)
l=Math.sin(s+q*0.7)
J.bz(v.save())
v.translate(m*h+l*f*0.06,n-p*2)
v.rotate((a0*(0.5+C.cW(q,5))+q)*180/3.141592653589793,0,0)
n=Math.cos(r+q)
v.scale(1,0.4+0.6*Math.abs(n))
n=$.W()
m=B.a([],u)
k=new B.aO(n.r,A.ap,i,i,m)
n=-p
m.push(new B.b5(0,n))
l=n*0.2
m.push(new B.cU(p,l,0,p))
m.push(new B.cU(n,l,0,n))
m.push(new B.bF())
n=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
m=(q&1)===0?D.ctN:D.d2t
n.saq(new B.a8(A.a3,A.a7,A.x,m,i,i).av(0,B.bU(A.J,p)))
j=n.H()
n=k.gbL().a.snapshot()
v.drawPath((k.e=new B.cF(n)).a,j)
j.delete()
v.restore()}this.lG(d,e,a0,25,A.bK,140)},
bCK(b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=null,a7=b1.a,a8=b1.b,a9=Math.min(a7,a8)
this.lG(b0,b1,b2,40,A.bK,150)
for(w=Math.max(4,A.k.V(16*this.d)),v=b0.a,u=x.v,t=b2*9,s=b2*0.5,r=0;r<w;++r){q=a9*(0.035+0.025*C.cW(r,1))
p=Math.sin(b2*(0.15+0.1*C.cW(r,2))+r*2.1)
o=Math.sin(b2*(0.21+0.1*C.cW(r,3))+r*1.3)
n=0.25+0.75*Math.abs(Math.cos(t+r))
J.bz(v.save())
v.translate(a7*(0.5+0.45*p),a8*(0.5+0.42*o))
v.rotate(Math.sin(s+r)*0.4*180/3.141592653589793,0,0)
for(p=[-1,1],o=q*0.04,m=-q,l=q*1.4,k=0+l,j=m+q*2,i=(r&1)===0,h=q*0.2,g=q*0.8,f=q*1.2,e=m*1.3,d=m*0.1,a0=0;a0<2;++a0){a1=p[a0]
J.bz(v.save())
v.scale(a1*n,1)
a2=$.W()
a3=B.a([],u)
a4=new B.aO(a2.r,A.ap,a6,a6,a3)
a3.push(new B.b5(0,0))
a3.push(new B.pw(f,e,l,d,h,0))
a3.push(new B.pw(q,h,g,q,0,h))
a3.push(new B.bF())
a2=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
a2.saq(new B.a8(A.a3,A.a7,A.x,i?D.d2d:D.d4Q,a6,a6).av(0,new B.a9(0,m,k,j)))
a5=a2.H()
a2=a4.gbL().a.snapshot()
v.drawPath((a4.e=new B.cF(a2)).a,a5)
a5.delete()
a2=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
a2.b=A.ae
a2.c=Math.max(0.6,o)
a2.r=D.AB.gp(0)
a5=a2.H()
a2=a4.e
v.drawPath((a2==null?a4.e=new B.cF(a4.gbL().a.snapshot()):a2).a,a5)
a5.delete()
v.restore()}$.W()
p=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
p.r=D.bhX.gp(0)
p.c=q*0.1
p.d=A.bO
a5=p.H()
v.drawLine.apply(v,[0,m*0.3,0,q*0.4,a5])
a5.delete()
v.restore()}},
c1v(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=a0.a,g=a0.b,f=Math.min(h,g),e=new B.u(h/2,g/2)
for(w=a1*0.45,v=f*0.012,u=d.a,t=0;t<4;++t){s=A.k.F(w+t/4,1)
r=f*(0.2+0.7*s)
$.W()
q=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
q.b=A.ae
q.c=v
q.r=D.aw5[t].j((1-s)*0.9).gp(0)
q.z=new B.hu(A.G,v)
p=r*0.3
p=B.bx(B.cl(e,r,r*1.6),new B.aT(p,p))
o=q.H()
u.drawRRect(B.er(p),o)
o.delete()}n=h/28
for(h=n*0.15,w=n*0.7,v=n*0.3,p=f*0.01,m=0;m<28;++m){l=g*(0.05+0.18*(0.5+0.5*Math.sin(a1*(3+C.cW(m,1)*4)+m)))
k=D.aw5[A.o.F(m,4)]
j=m*n+h
i=g-l
i=B.bx(new B.a9(j,i,j+w,i+l),new B.aT(v,v))
$.W()
j=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
j.r=k.j(0.85).gp(0)
j.z=new B.hu(A.a9F,p)
o=j.H()
u.drawRRect(B.er(i),o)
o.delete()}},
bJS(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
a0/=2
w=a2*0.12
v=new B.u(a0,w)
u=a2*0.09
for(t=Math.max(4,A.k.V(60*this.d)),s=a5*0.6,a1*=0.55,r=a2*0.004,q=a3.a,p=0;p<t;++p){o=C.cW(p,1)*3.141592653589793*2+s
n=a2*(0.2+0.8*C.cW(p,2))
m=Math.cos(o)
l=Math.sin(o)
k=[A.c,A.bK,A.mQ,A.dv][A.o.F(p,4)]
j=C.cW(p,3)
$.W()
i=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
i.r=k.j(0.75).gp(0)
i.a=A.nz
i.z=new B.hu(A.G,r)
h=i.H()
q.drawCircle(a0+m*n*1.4,a1+l*n*0.5,a2*(0.008+0.01*j),h)
h.delete()}a1=$.W()
t=B.M()
t.r=A.az.gp(0)
t.c=1.2
a3.bB(new B.u(a0,0),new B.u(a0,w-u),t)
t=B.M()
t.r=A.dA.gp(0)
a3.ae(v,u,t)
J.bz(q.save())
a1=new B.aO(a1.r,A.ap,null,null,B.a([],x.v))
a1.E(new B.k_(B.bU(v,u)))
a3.qr(0,a1)
g=u/4
for(a1=a5*g*2,t=g*0.9,s=a5*4,f=-4;f<4;++f)for(r=w+f*g,m=r+t,l=f*2.3,e=-6;e<6;++e){j=a0+e*g+A.k.F(a1,g)
i=Math.sin(e*1.7+l+s)
$.W()
d=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
d.r=B.aq(A.bn,A.c,0.4+0.6*((i+1)/2)).gp(0)
h=d.H()
q.drawRect(B.c0(new B.a9(j,r,j+t,m)),h)
h.delete()}q.restore()
a0=-u*0.4
this.rs(a3,v.ad(0,new B.u(a0,a0)),u*0.6,A.c,0.6+0.4*Math.sin(a5*5))},
cvo(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=a3.a,f=a3.b,e=Math.min(g,f),d=g/2,a0=f*(1.05-0.25*A.ct.aw(0,A.k.D(a4/3,0,1))),a1=new B.u(d,a0)
for(w=a2.a,v=a4*0.3,u=x.v,t=0;t<20;++t){s=3.141592653589793+t/19*3.141592653589793+Math.sin(v)*0.03
r=$.W()
q=B.a([],u)
p=new B.aO(r.r,A.ap,h,h,q)
q.push(new B.b5(d,a0))
r=s-0.04
q.push(new B.ap(d+Math.cos(r)*e*1.5,a0+Math.sin(r)*e*1.5))
r=s+0.04
q.push(new B.ap(d+Math.cos(r)*e*1.5,a0+Math.sin(r)*e*1.5))
q.push(new B.bF())
r=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
r.r=A.bK.j(0.1).gp(0)
o=r.H()
r=p.gbL().a.snapshot()
w.drawPath((p.e=new B.cF(r)).a,o)
o.delete()}d=e*0.5
$.W()
a0=B.M()
a0.saq(new B.bT(A.A,0.5,A.x,h,0,B.a([D.b61.j(0.6),D.adh],x.O),h,h).av(0,B.bU(a1,d)))
a2.ae(a1,d,a0)
a0=e*0.2
d=B.M()
d.saq(D.ecl.av(0,B.bU(a1,a0)))
a2.ae(a1,a0,d)
for(d=a4*e*0.03,a0=g*1.4,v=g*0.2,u=e*0.35,r=e*0.07,q=e*0.06,n=e*0.03,m=e*0.18,t=0;t<5;++t){l=A.k.F(d*(1+t*0.3)+C.cW(t,1)*g*1.4,a0)-v
k=f*(0.15+0.12*t)
j=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
j.r=A.c.j(0.18).gp(0)
i=B.cl(new B.u(l,k),r,u)
o=j.H()
w.drawOval(B.c0(i),o)
o.delete()
i=B.cl(new B.u(l+q,k-n),r,m)
o=j.H()
w.drawOval(B.c0(i),o)
o.delete()}this.lG(a2,a3,a4,20,A.hU,180)},
cfa(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a2.a,d=a2.b,a0=Math.min(e,d)
for(w=a1.a,v=e+10,u=e/30,t=x.v,s=0;s<4;++s){r=$.W()
q=B.a([],t)
p=new B.aO(r.r,A.ap,f,f,q)
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
$.W()
r=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
r.r=B.aq(A.cz,A.j6,s/3).j(0.55).gp(0)
k=r.H()
r=p.e
w.drawPath((r==null?p.e=new B.cF(p.gbL().a.snapshot()):r).a,k)
k.delete()}for(v=Math.max(4,A.k.V(45*this.d)),j=d*0.95,d*=0.9,u=a3*a0,i=0;i<v;++i){h=a0*(0.012+0.02*C.cW(i,1))
g=d-A.k.F(u*(0.04+0.05*C.cW(i,2))+C.cW(i,3)*j,j)
n=C.cW(i,4)*e+Math.sin(a3+i)*a0*0.02
$.W()
t=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
t.saq(new B.bT(An.pf,0.5,A.x,f,0,D.d86,f,f).av(0,B.bU(new B.u(n,g),h)))
k=t.H()
w.drawCircle(n,g,h,k)
k.delete()}this.lG(a1,a2,a3,25,A.c,190)},
ctx(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=a0.a,f=a0.b,e=Math.min(g,f)
for(w=Math.max(4,A.k.V(70*this.d)),v=d.a,u=a1*e,t=a1*0.7,s=a1*0.4,r=0;r<w;++r){q=e*(0.01+0.025*C.cW(r,1))
p=f+q*4
o=A.k.F(u*(0.03+0.05*C.cW(r,2))+C.cW(r,3)*p,p)
n=C.cW(r,4)
m=Math.sin(t+r)
$.W()
l=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
l.r=A.c.j(0.6+0.4*C.cW(r,5)).gp(0)
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
h.delete()}v.restore()}this.lG(d,a0,a1,40,A.eu,200)},
bYM(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
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
g=B.cl(new B.u(p,0),q,r)
$.W()
f=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
f.saq(D.bUz.av(0,new B.a9(0,o,n,m)))
e=f.H()
s.drawOval(B.c0(g),e)
e.delete()
s.restore()}}$.W()
a0=B.M()
a0.b=A.ae
a0.c=a2*0.003
a0.r=D.baa.gp(0)
a3.ae(w,v*1.08,a0)
d=a5*0.8
this.rs(a3,w.ad(0,new B.u(Math.cos(d)*v*1.08,Math.sin(d)*v*1.08)),a2*0.03,A.c,0.9)
this.lG(a3,a4,a5,40,A.bK,210)},
cnv(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=a9.a,a4=a9.b,a5=Math.min(a3,a4),a6=x.O,a7=[B.a([A.hG,A.hU],a6),B.a([A.ou,A.iq],a6),B.a([A.aE,A.eA],a6)]
for(w=b0*0.3,v=0+a3,u=0+a4,t=a8.a,s=x.dB,r=s.k("bS<ak.E>"),q=s.k("ak.E"),p=b0*1.5,o=x.v,n=x.dN,m=0;m<3;++m){l=$.W()
k=B.a([],o)
j=new B.aO(l.r,A.ap,null,null,k)
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
j.e=null}i.push(new B.u(e,d+a0))}for(l=new B.dz(i,s),l=new B.bS(l,l.gM(0),r);l.C();){h=l.d
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
$.W()
l=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
k=a7[m]
h=k[0]
l.saq(new B.a8(A.a3,A.a7,A.x,B.a([h,k[1],h],a6),H.avK,new B.mj(w)).av(0,new B.a9(0,0,v,u)))
l.r=A.c.j(0.85).gp(0)
a2=l.H()
l=j.e
t.drawPath((l==null?j.e=new B.cF(j.gbL().a.snapshot()):l).a,a2)
a2.delete()}this.lG(a8,a9,b0,40,A.c,220)},
bYu(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=b2.a,a8=b2.b,a9=Math.min(a7,a8),b0=a9*0.09
for(w=[!0,!1],v=b0*2,u=a7+v,t=b0*0.5,s=b1.a,r=b0*0.1,q=b0*0.35,p=b0*0.3,o=-b0*2,n=b3*a9,m=n*0.08,l=a8-b0,k=0;k<2;++k){j=w[k]
i=j?0:l
h=A.k.F(m,v)
g=o+(j?h:-h)
f=i+b0
e=i+q
d=e+p
for(;g<u;g=a1){a0=A.o.F(A.k.bt(g/t),5)
a1=g+t
$.W()
a2=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
a3=Math.abs(a0)
a2.r=D.a1H[a3].gp(0)
a4=a2.H()
s.drawRect(B.c0(new B.a9(g,i,a1,f)),a4)
a4.delete()
a2=g+r
a5=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
a5.r=D.a1H[A.o.F(a3+2,5)].gp(0)
a4=a5.H()
s.drawRect(B.c0(new B.a9(a2,e,a2+p,d)),a4)
a4.delete()}}for(w=Math.max(4,A.k.V(36*this.d)),u=b3*3,a6=a8-v,a0=0;a0<w;++a0){a8=A.k.F(n*(0.04+0.05*C.cW(a0,1))+C.cW(a0,2)*a6,a6)
v=C.cW(a0,3)
t=C.cW(a0,4)
this.rs(b1,new B.u(v*a7,l-a8),a9*(0.01+0.012*t),D.a1H[A.o.F(a0,3)===0?0:4],0.5+0.5*Math.sin(u+a0))}},
cz1(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=a5.a,a2=a5.b,a3=Math.min(a1,a2)
a1/=2
a2/=2
for(w=a6*0.2,v=a3*0.03,u=a4.a,t=0;t<18;++t){s=t/18*3.141592653589793*2+w
r=Math.cos(s)
q=Math.sin(s)
$.W()
p=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
p.c=v
p.r=A.bK.j(0.06).gp(0)
o=p.H()
u.drawLine.apply(u,[a1,a2,a1+r*a3*1.2,a2+q*a3*1.2,o])
o.delete()}n=a3*0.16
m=a3*0.17
a2=a2-m-m
l=new B.aO($.W().r,A.ap,null,null,B.a([],x.v))
w=n/2
v=a1-w
l.E(new B.b5(v,a2))
w=a1+w
l.E(new B.ap(w,a2))
r=a2+m*0.75
q=n*0.1
p=a1+q
k=a2+m*0.8
l.E(new B.cU(w,r,p,k))
w=a2+m*0.95
l.E(new B.ap(p,w))
p=n*0.3
j=a2+m
l.E(new B.ap(a1+p,j))
l.E(new B.ap(a1-p,j))
q=a1-q
l.E(new B.ap(q,w))
l.E(new B.ap(q,k))
l.E(new B.cU(v,r,v,a2))
l.E(new B.bF())
r=v+n
for(w=[-1,1],q=a3*0.012,p=a2+m*0.25,k=n*0.4,i=m*0.35,h=0;h<2;++h){g=w[h]
f=B.cl(new B.u(a1+g*n*0.5,p),i,k)
e=g<0?1.5707963267948966:-1.5707963267948966
d=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
d.b=A.ae
d.c=q
d.r=A.aw.gp(0)
o=d.H()
u.drawArc.apply(u,[B.c0(f),e*57.29577951308232,180,!1,o])
o.delete()}a1=B.M()
a1.saq(new B.a8(A.a3,A.a7,A.x,D.dal,A.ava,null).av(0,new B.a9(v,a2,r,j)))
a4.aO(l,a1)
a0=A.k.F(a6*0.6,1.4)
if(a0<1)this.rs(a4,new B.u(v+(r-v)*a0,a2+(j-a2)*0.3),a3*0.035,A.c,Math.sin(a0*3.141592653589793))
this.bFV(a4,a5,a6,60)},
bFV(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m,l=e.a,k=e.b,j=Math.min(l,k)
for(w=Math.max(4,A.k.V(g*this.d)),v=k+20,k=f*j,u=d.a,t=f*3,s=j*0.012,r=j*0.02,q=f*4,p=0;p<w;++p){o=A.k.F(k*(0.1+0.1*C.cW(p,31))+C.cW(p,32)*v,v)
n=C.cW(p,33)
J.bz(u.save())
u.translate(n*l,o-10)
u.rotate((t+p)*180/3.141592653589793,0,0)
o=B.cl(A.J,r*A.k.D(Math.abs(Math.cos(q+p)),0.2,1),s)
$.W()
n=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
n.r=D.Pf[A.o.F(p,5)].gp(0)
m=n.H()
u.drawRect(B.c0(o),m)
m.delete()
u.restore()}},
crn(a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a1.a,d=Math.min(e,a1.b)
this.lG(a0,a1,a2,70,A.c,250)
for(w=Math.max(4,A.k.V(12*this.d)),v=-d*0.1,u=d*1.4,t=-0.6*u,s=x.O,r=d*0.006,q=a0.a,p=d*0.018,o=0;o<w;++o){n=1.6+C.cW(o,1)*1.6
m=A.k.F(a2+C.cW(o,2)*n,n)/n
l=e*(C.cW(o*7+A.k.bt((a2+C.cW(o,2)*n)/n),3)*1.2-0.1)
k=l+t*m
j=v+u*m
i=new B.u(k,j)
h=Math.max(0,m-0.18)
l+=t*h
h=v+u*h
$.W()
g=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
g.saq(new B.a8(A.a3,A.a7,A.x,B.a([A.c.j(0),A.bK],s),null,null).av(0,B.rq(new B.u(l,h),i)))
g.c=r
g.d=A.bO
f=g.H()
q.drawLine.apply(q,[l,h,k,j,f])
f.delete()
this.rs(a0,i,p,A.c,1-m)}},
bB1(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=e.a,i=e.b,h=Math.min(j,i)
for(w=Math.max(4,A.k.V(36*this.d)),v=f*0.2,u=f*0.17,t=f*0.8,s=d.a,r=0;r<w;++r){q=h*(0.03+0.09*C.cW(r,1))
p=A.k.F(C.cW(r,2)*j+Math.sin(v+r)*h*0.12,j)
o=A.k.F(C.cW(r,3)*i+Math.cos(u+r*1.3)*h*0.1,i)
n=0.12+0.18*(0.5+0.5*Math.sin(t+r))
$.W()
m=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
l=A.o.F(r,5)
m.r=D.axz[l].j(n).gp(0)
m.a=A.nz
m.z=new B.hu(A.G,q*0.12)
k=m.H()
s.drawCircle(p,o,q,k)
k.delete()
m=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
m.b=A.ae
m.c=Math.max(0.6,q*0.05)
m.r=D.axz[l].j(n*1.4).gp(0)
k=m.H()
s.drawCircle(p,o,q,k)
k.delete()}},
ccP(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=e.a,i=e.b,h=Math.min(j,i)
j/=2
i/=2
for(w=d.a,v=f*0.05,u=h*0.003,t=h*0.012,s=h*0.03,r=h*0.02,q=0;q<4;++q){J.bz(w.save())
w.translate(j,i)
w.rotate((q*3.141592653589793/4+v)*180/3.141592653589793,0,0)
p=B.cl(A.J,h*(0.28+q*0.05),h*(0.8+q*0.12))
$.W()
o=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
o.b=A.ae
o.c=u
o.r=A.bK.j(0.45).gp(0)
n=o.H()
w.drawOval(B.c0(p),n)
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
k.r=A.hG.j(0.4).gp(0)
k.z=new B.hu(A.G,r)
n=k.H()
w.drawCircle(o,l,s,n)
n.delete()
w.restore()}this.lG(d,e,f,45,A.bK,270)},
bNO(a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=a6.a,a3=a6.b,a4=Math.min(a2,a3)
for(w=Math.max(4,A.k.V(22*this.d)),v=a5.a,u=x.O,t=a7*0.3,s=a2*0.94,r=a2*0.06,q=a3*0.92,p=a3*0.08,o=0;o<w;++o){n=A.o.F(o,4)
m=C.cW(o,1)
A:{if(0===n){l=new B.u(m*a2,p)
break A}if(1===n){l=new B.u(m*a2,q)
break A}if(2===n){l=new B.u(r,m*a3)
break A}l=new B.u(s,m*a3)
break A}k=A.k.F(a7+C.cW(o,2)*4,4)/4
j=A.ev.aw(0,A.k.D(k/0.4,0,1))
i=k>0.85?1-(k-0.85)/0.15:1
h=a4*(0.03+0.03*C.cW(o,3))*(j*i)
if(h<=0.5)continue
g=D.d_u[A.o.F(o,5)]
J.bz(v.save())
v.translate(l.a,l.b)
v.rotate((t+o)*180/3.141592653589793,0,0)
for(l=-h*0.7,j=h*0.7,i=h*1.3,f=h*1.4,e=0;e<6;++e){v.rotate(59.99999999999999,0,0)
d=B.cl(new B.u(0,l),i,j)
$.W()
a0=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
a0.saq(new B.a8(A.b_,A.b5,A.x,B.a([A.c,g],u),null,null).av(0,B.cl(new B.u(0,l),f,h)))
a1=a0.H()
v.drawOval(B.c0(d),a1)
a1.delete()}$.W()
l=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
l.r=A.hG.gp(0)
a1=l.H()
v.drawCircle(0,0,h*0.3,a1)
a1.delete()
v.restore()}this.lG(a5,a6,a7,30,A.hU,280)},
c1f(a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=a6.a,a3=a6.b,a4=Math.min(a2,a3)
for(w=[0,1],v=a4*0.008,u=a5.a,t=a7*0.6,s=a3/2,r=0;r<2;++r){q=w[r]
for(p=q===0,o=a2*q,n=0;n<4;++n){m=A.k.F(t+n/4,1)
l=B.bU(new B.u(o,s),a4*(0.1+0.6*m))
k=p?-1.0471975511965976:2.0943951023931953
$.W()
j=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
j.b=A.ae
j.c=v
j.r=D.aug[n].j((1-m)*0.8).gp(0)
i=j.H()
u.drawArc.apply(u,[B.c0(l),k*57.29577951308232,119.99999999999999,!1,i])
i.delete()}}for(w=Math.max(4,A.k.V(26*this.d)),h=a3+30,v=a7*a4,t=a7*1.5,g=0;g<w;++g){f=a3-A.k.F(v*(0.06+0.06*C.cW(g,1))+C.cW(g,2)*h,h)
e=C.cW(g,3)*a2+Math.sin(t+g)*a4*0.04
d=a4*(0.015+0.012*C.cW(g,4))
a0=D.aug[A.o.F(g,4)]
$.W()
a1=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
a1.r=a0.gp(0)
J.bz(u.save())
u.translate(e,f)
u.rotate(-17.188733853924695,0,0)
s=B.cl(A.J,d,d*1.5)
i=a1.H()
u.drawOval(B.c0(s),i)
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
c_H(a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=a8.a,a5=a8.b,a6=Math.min(a4,a5)
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
d=$.W()
a0=B.a([],s)
a1=new B.aO(d.r,A.ap,a3,a3,a0)
a0.push(new B.b5(0,i))
a0.push(new B.cU(h,m,0,g))
a0.push(new B.cU(j,m,0,i))
d=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
d.b=A.ae
d.c=t
d.r=B.aq(A.bK,A.mQ,k).j(0.7).gp(0)
a2=d.H()
d=a1.gbL().a.snapshot()
v.drawPath((a1.e=new B.cF(d)).a,a2)
a2.delete()
d=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
d.r=A.hU.j(0.8).gp(0)
a2=d.H()
v.drawCircle(0,l,u,a2)
a2.delete()}v.restore()}a4=a6*0.17
$.W()
a5=B.M()
a5.saq(new B.bT(A.A,0.5,A.x,a3,0,B.a([A.hG.j(0.25),D.WG],x.O),a3,a3).av(0,B.bU(w,a4)))
a7.ae(w,a4,a5)
this.lG(a7,a8,a9,30,A.bK,300)},
ctG(b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=b1.a,a8=b1.b,a9=Math.min(a7,a8)
for(w=[-1,1],v=70*this.d,u=a9*0.003,t=b0.a,s=a7/2,a8*=0.95,r=b2*1.3,q=a9*0.008,p=a9*0.06,o=x.O,n=0;n<2;++n){m=w[n]
l=s+m*a7*0.34
k=Math.sin(r+m)*0.12
j=l+(Math.sin(k)*a9*0.45-m*a9*0.08)
i=a8+-Math.cos(k)*a9*0.45
$.W()
h=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
h.r=A.bn.gp(0)
h.c=q
h.d=A.bO
g=h.H()
t.drawLine.apply(t,[l,a8,j,i,g])
g.delete()
l=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
l.saq(new B.bT(A.A,0.5,A.x,null,0,B.a([A.hU,A.hG.j(0.6),D.WG],o),null,null).av(0,B.bU(new B.u(j,i),p)))
g=l.H()
t.drawCircle(j,i,p,g)
g.delete()
for(l=Math.max(4,A.k.V(v)),f=0;f<l;++f){e=0.5+0.4*C.cW(f,1)
d=A.k.F(b2+C.cW(f,2)*e,e)/e
a0=A.k.bt((b2+C.cW(f,2)*e)/e)
a1=C.cW(f*31+a0,3)*3.141592653589793*2
a2=a9*(0.06+0.16*C.cW(f*17+a0,4))
h=Math.cos(a1)
a3=Math.sin(a1)
a4=j+Math.cos(a1)*a2*d
a5=i+Math.sin(a1)*a2*d
a6=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
a6.r=B.aq(A.hU,A.aH,d).j(1-d).gp(0)
a6.c=Math.max(0.8,u)
a6.d=A.bO
a6.a=A.nz
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
g.delete()}}}this.lG(b0,b1,b2,35,A.bK,310)},
bEy(a9,b0,b1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=b0.a,a8=b0.b
this.aRH(a9,new B.at(a7,a8*0.75),b1*0.9)
w=Math.min(a7,a8)
for(v=w*0.01,u=w*0.008,t=w*0.012,s=w*0.016,r=a9.a,q=w*0.025,p=w*0.035,o=0,n=0;o<a7;){m=w*(0.08+0.1*C.cW(n,1))
l=a8*(0.14+0.24*C.cW(n,2))
k=a8-l
j=new B.a9(o,k,o+m,k+l)
$.W()
i=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
i.saq(D.bVv.av(0,j))
h=i.H()
r.drawRect(B.c0(j),h)
h.delete()
g=A.k.bt(m/q)
f=A.k.bt(l/p)
for(i=o+u,k+=t,e=n*50,d=0;d<g;++d)for(a0=i+d*w*0.025,a1=a0+t,a2=e+d,a3=d*1.7,a4=0;a4<f;++a4){if(!(Math.sin(b1*(0.3+C.cW(a2,a4))+a3+a4*2.3+n)>0.2))continue
a5=k+a4*w*0.035
$.W()
a6=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
a6.r=A.bK.j(0.85).gp(0)
h=a6.H()
r.drawRect(B.c0(new B.a9(a0,a5,a1,a5+s)),h)
h.delete()}o+=m+v;++n}},
ar(d){return d.b!==this.b||d.d!==this.d}}
C.aZg.prototype={
B(d){var w,v=null,u=new C.c7N(),t=new C.c7P(this,u,d),s=B.a([u.$4$child$label$onTap$selected(B.p(v,D.an3,A.f,A.c.j(0.05),v,v,v,v,v,v,v,v,v,v),"None",new C.c7O(this),this.c.a.length===0)],x.p)
for(w=0;w<32;++w)s.push(t.$1(D.GB[w]))
return B.bW(A.bz,s,A.bq,12,10)}}
C.YS.prototype={
R(){return new C.az5()}}
C.az5.prototype={
gvu(){var w=this.d
return w===$?this.d=this.a.c:w},
gaYC(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new B.ar(new B.bb(w.b,A.b4,A.aN),$.aw())}return v},
gawy(){var w,v,u=this,t=u.f
if(t===$){w=u.a.c.gaJS()
v=$.aw()
u.f!==$&&B.bL()
t=u.f=new B.ar(new B.bb(w,A.b4,A.aN),v)}return t},
q(){var w=this.gaYC(0),v=$.aw()
w.U$=v
w.P$=0
w=this.gawy()
w.U$=v
w.P$=0
this.a2()},
Zx(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Zx=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hX().BS(90,700,700,A.eG),$async$Zx)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fi(),$async$Zx)
case 8:p=e
o=q.b.toLowerCase()
n=J.ahq(o,".png")?"image/png":"image/jpeg"
r.m(new C.d74(r,n,p))
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
return B.i($async$Zx,v)},
aYB(d){var w=null,v=A.c.j(0.07)
return B.br(w,new B.b4(4,B.m(12),A.Y),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,A.aPr,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=C.agv(p.gvu().a)
if(n==null)n=A.d.gL(D.GB)
w=p.gvu()
v=p.r
u=x.p
v=B.E(new B.an(A.W,o,A.aa,A.r,B.a([B.bZ(0,new C.N7(p.gvu(),!1,!0,new B.cx(w.a+v,x.W)),0,0,0),B.ao(o,B.Hq(A.mw,new C.d79(d),B.nw(o,A.aX,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o),o,o,8,o,8,o),B.ao(o,B.Hq(D.bFc,new C.d7a(p),B.nw(o,A.aX,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),"Play again"),o,o,o,8,8,o)],u),o),1)
w=B.d(n.b,o,o,o,o,o,o,E.aPl,o,o,o)
t=B.E(B.aM(o,A.T,!1,o,!0,A.r,o,B.aN(),p.gaYC(0),o,o,o,o,o,2,p.aYB("Big words"),A.y,!0,o,!0,o,!1,o,A.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.d7b(p),o,o,o,!1,o,o,!1,o,!0,o,A.a9,o,o,o,o,o,o,o,o,o,o,o,A.hq,!0,A.a4,o,A.am,o,o,o,o),1)
s=A.c.j(0.07)
r=B.I(A.hG.j(0.6),A.q,1)
if(p.gvu().d.length===0)q=D.bIx
else{q=C.hdg(p.gvu().d)
if(q==null)q=new Uint8Array(0)
q=B.hT(B.fL(q,A.A,o,o,A.cl,A.bR,!1,o,!1,o,o),A.aq)}r=B.a([t,A.ab,B.aE(o,B.p(o,q,A.f,o,o,new B.o(s,o,r,o,o,o,A.a6),o,48,o,o,o,o,o,48),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gc6O(),o,o,o,o,o,o,!1,A.a8)],u)
if(p.gvu().d.length!==0)r.push(B.aH(o,o,o,o,D.a0v,o,o,o,new C.d7c(p),o,o,o,o,"Remove logo",o))
return B.c8(o,A.w,B.bl(!0,B.v(B.a([v,B.p(o,B.v(B.a([w,A.S,B.A(r,A.m,o,A.e,A.j,0,o,o),A.N,B.aM(o,A.T,!1,o,!0,A.r,o,B.aN(),p.gawy(),o,o,o,o,o,2,p.aYB("Line under it"),A.y,!0,o,!0,o,!1,o,A.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.d7d(p),o,o,o,!1,o,o,!1,o,!0,o,A.a9,o,o,o,o,o,o,o,o,o,o,o,A.dm,!0,A.a4,o,A.am,o,o,o,o),A.ac,B.dk(D.bHq,D.fvc,new C.d7e(p,d),B.bm(A.aw,o,o,o,A.w,o,A.ck,o,new B.b7(B.m(14),A.Y),o,o,o))],u),A.aj,o,A.e,A.Q,0,A.p),A.f,o,o,D.aZR,o,o,o,o,A.Fa,o,o,o)],u),A.m,o,A.e,A.j,0,A.p),!0,!1,A.af,!0,!0),o,!1,!1,o,o)}}
C.aKK.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbv())
w.a8$=null
w.a2()},
aR(){this.aY()
this.aX()
this.bw()}}
C.Zc.prototype={
R(){return new C.bfi(new B.ar(A.as,$.aw()))}}
C.bfi.prototype={
q(){var w=this.d
w.U$=$.aw()
w.P$=0
this.a2()},
B(d){var w,v,u,t,s,r,q,p,o=null,n=B.P(d).ax.a===A.I,m=n?A.c:A.M,l=n?A.aR:A.ak,k=B.aI(d,A.bU,x.w).w,j=n?A.M:A.c,i=B.m(28),h=B.I(n?A.bF:A.aL,A.q,1),g=x.p,f=B.A(B.a([B.E(B.d("Choose an icon",o,o,o,o,o,o,B.l(o,o,m,o,o,o,o,o,o,o,o,19,o,o,A.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),1),B.aH(o,o,o,o,B.X(A.cC,l,o,o,o,o),o,o,o,new C.ddR(d),o,o,o,o,o,o)],g),A.m,o,A.e,A.j,0,o,o),e=B.a([],g)
for(w=0;w<5;++w){v=D.cL_[w]
u=B.a([],g)
for(t=J.aV(v.b);t.C();){s=t.gT(t)
r=new B.aT(12,12)
q=new B.aT(12,12)
p=n?A.c.j(0.06):A.bL
u.push(B.aL(!1,new B.bp(r,r,r,r),!0,B.p(A.A,new B.x(s,o,A.uC,o,o,o,o,o,o,o,o,o),A.f,o,o,new B.o(p,o,o,new B.bp(q,q,q,q),o,o,A.n),o,44,o,o,o,o,o,44),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.ddS(this,s),o,o,o,o,o,o,o))}A.d.v(e,B.a([new B.D(A.hK,new B.x(v.a.toUpperCase(),o,new B.G(!0,l,o,o,o,o,10.5,A.u,o,1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o,o,o,o,o,o,o),o),new B.C0(A.bz,6,6,A.bq,u,o)],g))}e.push(A.aA)
e.push(B.d("YOUR OWN",o,o,o,o,o,o,B.l(o,o,l,o,o,o,o,o,o,o,o,10.5,o,o,A.u,o,o,!0,o,1,o,o,o,o,o,o),o,o,o))
e.push(A.N)
v=B.l(o,o,m,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
u=n?A.bm:A.aP
e.push(B.A(B.a([B.E(B.aM(o,A.T,!1,o,!0,A.r,o,B.aN(),this.d,o,o,o,o,o,2,B.br(o,new B.b4(4,B.m(14),A.Y),o,o,o,o,o,o,!0,o,o,o,o,o,o,u,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,"Type or paste any icon",o,o,o,o,o,!0,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),A.y,!0,o,!0,o,!1,o,A.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,A.a9,o,o,o,o,o,o,o,o,o,o,o,v,!0,A.a4,o,A.am,o,o,o,o),1),A.ab,B.bH(A.aQj,new C.ddT(this),o)],g),A.m,o,A.e,A.j,0,o,o))
e.push(A.N)
return B.bl(!0,B.p(o,B.v(B.a([f,new B.dq(1,A.cn,B.cz(e,o,o,o,o,A.ah,!0),o)],g),A.F,o,A.e,A.Q,0,A.p),A.f,o,new B.aY(0,1/0,0,k.a.b*0.8),new B.o(j,o,h,i,o,o,A.n),o,o,o,A.ty,A.Yj,o,o,o),!0,!1,A.af,!0,!0)}}
C.beG.prototype={
a5(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=new B.eL()
a2.dB(this.c)
w=this.b
v=w/6.283185307179586
$.W()
u=B.M()
u.z=A.QQ
t=B.M()
for(s=a3.a,r=this.d,q=w*2,p=a4.a,o=a4.b,n=0;n<46;++n){m=a2.aj()
l=a2.aj()
k=a2.aj()
j=0.8+a2.aj()*2.2
i=Math.sin(w*(3+a2.aC(4))+n)
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
C.ben.prototype={
a5(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null,a1=B.bx(new B.a9(0,0,0+a7.a,0+a7.b),A.kt),a2=this.b,a3=Math.sin(a2*2),a4=$.W(),a5=B.M()
a5.b=A.ae
a5.c=6
w=this.c
a5.r=w.j(0.12+(0.5+a3*0.5)*0.18).gp(0)
a5.z=A.lp
a6.aD(a1,a5)
a5=x.v
a4=new B.aO(a4.r,A.ap,a0,a0,B.a([],a5))
a4.E(new B.iU(a1))
v=new B.S9(new B.vs(B.wX(a4),!1,B.a([],x.X))).gL(0)
a4=v.a
a3=v.b
a4.jn()
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
j.b=A.ae
j.d=A.bO
j.c=1.5+2*m/10
j.r=w.j(k).gp(0)
i=A.k.F(n-p*(1-m/10),t)
h=A.k.F(n-p*(1-k),t)
k=a2.b
if(i<=h){k=new B.aO(r,k,a0,new B.cI([v,i,h,!0]),B.a([],a5))
g=j.H()
f=k.gbL().a.snapshot()
q.drawPath((k.e=new B.cF(f)).a,g)
g.delete()}else{k=new B.aO(r,k,a0,new B.cI([v,i,t,!0]),B.a([],a5))
g=j.H()
f=k.gbL().a.snapshot()
q.drawPath((k.e=new B.cF(f)).a,g)
g.delete()
k=new B.aO(r,a2.b,a0,new B.cI([v,0,h,!0]),B.a([],a5))
g=j.H()
f=k.gbL().a.snapshot()
q.drawPath((k.e=new B.cF(f)).a,g)
g.delete()}}a4.jn()
e=u[a3].Mr(n).a
$.W()
k=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
k.r=w.gp(0)
k.z=A1.mA
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
C.bnh.prototype={
a5(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=new B.eL()
e.dB(this.c)
w=a0.a*(0.2+e.aj()*0.6)
v=e.hb()?-0.1:1.1
v=a0.b*v
u=new B.u(w,v)
t=a0.galP()*1.4
for(s=this.d,r=x.O,q=d.a,p=this.b,o=p*0.25,p*=2,n=x.v,m=0;m<14;++m){l=o+m*3.141592653589793*2/14
k=0.06+0.04*Math.sin(p+m)
j=$.W()
i=B.a([],n)
h=new B.aO(j.r,A.ap,f,f,i)
i.push(new B.b5(w,v))
j=l-k
i.push(new B.ap(w+Math.cos(j)*t,v+Math.sin(j)*t))
j=l+k
i.push(new B.ap(w+Math.cos(j)*t,v+Math.sin(j)*t))
i.push(new B.bF())
j=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
j.saq(B.aUm(u,t,B.a([s.j(0.16),s.j(0)],r),f,A.x,f,f,0))
j.z=A.jk
g=j.H()
j=h.gbL().a.snapshot()
q.drawPath((h.e=new B.cF(j)).a,g)
g.delete()}},
ar(d){return d.b!==this.b}}
C.b9h.prototype={
a5(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=new B.eL()
a0.dB(this.c*7+3)
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
e.z=new B.hu(A.G,k*0.35)
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
ar(d){return d.b!==this.b}}
C.b8V.prototype={
a5(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=new B.eL()
a0.dB(this.c+11)
for(w=this.b,v=a2.b,u=v*0.04,t=a1.a,s=this.d,r=v*0.08,q=a2.a,p=q/24,o=w*2,n=x.v,m=0;m<3;++m){l=v*(0.25+m*0.25+(a0.aj()-0.5)*0.1)
k=v*(0.06+a0.aj()*0.05)
j=a0.aj()*3.141592653589793*2
i=$.W()
h=B.a([],n)
g=new B.aO(i.r,A.ap,null,null,h)
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
i.b=A.ae
i.c=r
i.d=A.bO
if(m===1){h=B.aq(s,A.c,0.5)
h.toString}else h=s
i.r=h.j(0.07+0.04*Math.sin(w+m)).gp(0)
i.z=new B.hu(A.G,u)
d=i.H()
i=g.e
t.drawPath((i==null?g.e=new B.cF(g.gbL().a.snapshot()):i).a,d)
d.delete()}},
ar(d){return d.b!==this.b}}
C.bub.prototype={
a5(d,e){var w,v,u=new B.a9(0,0,0+e.a,0+e.b),t=Math.sin(this.b)
$.W()
w=B.M()
t=(0.5+0.5*t)*0.12
w.saq(new B.bT(A.A,0.95,A.x,null,0,B.a([A.K,A.w.j(0.28+t)],x.O),D.cSh,null).av(0,u))
d.aZ(u,w)
w=u.cB(-3)
v=B.M()
v.b=A.ae
v.c=2
v.r=this.c.j(0.1+t).gp(0)
v.z=A.jk
d.aZ(w,v)},
ar(d){return d.b!==this.b}}
C.brc.prototype={
a5(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this.b/6.283185307179586*3
for(w=a1.a,v=Math.abs(w),u=a1.b,t=Math.abs(u),s=this.d,r=a0.a,q=this.c*31+A.k.bt(d)*7,p=0;p<7;++p){o=new B.eL()
o.dB(q+p)
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
g.z=new B.hu(A.G,k*0.3)
h=g.H()
r.drawCircle(n,m,k*0.35,h)
h.delete()}},
ar(d){return d.b!==this.b}}
C.bql.prototype={
a5(d,e){var w,v,u=this.b/6.283185307179586*2.2-0.6
if(u<-0.3||u>1.3)return
w=new B.a9(0,0,0+e.a,0+e.b)
$.W()
v=B.M()
v.a=A.nz
v.saq(new B.a8(A.ax,A.aC,A.x,B.a([A.K,B.aq(this.c,A.c,0.6).j(0.16),A.K],x.O),B.a([A.k.D(u-0.15,0,1),A.k.D(u,0,1),A.k.D(u+0.15,0,1)],x.x),null).av(0,w))
d.aZ(w,v)},
ar(d){return d.b!==this.b}}
C.bdI.prototype={
a5(d,e){var w,v,u,t,s,r=e.gdO(),q=0.55+0.45*Math.sin(this.b)
$.W()
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
u.z=A.rj
r=new C.d6M(this,r*0.16,d,u,w)
t=e.gdO()*0.045
r.$3(new B.u(t,t),1,1)
v=e.a-t
r.$3(new B.u(v,t),-1,1)
s=e.b-t
r.$3(new B.u(t,s),1,-1)
r.$3(new B.u(v,s),-1,-1)},
ar(d){return d.b!==this.b}}
C.xn.prototype={}
C.Ip.prototype={
a4(){return"NgmySlideElementType."+this.b}}
C.aqw.prototype={
a4(){return"NgmySlideAspectRatio."+this.b}}
C.uy.prototype={
a4(){return"NgmySlideShapeKind."+this.b}}
C.mt.prototype={
a4(){return"NgmySlideLayout."+this.b}}
C.hx.prototype={
a4(){return"NgmySlideTransition."+this.b}}
C.eJ.prototype={
hC(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=w.Q,l=w.as,k=w.at,j=w.ay,i=w.ch,h=w.cx,g=w.cy,f=w.db,e=w.dy,d=w.fy
return C.ep(l,g,m,n,f,j,q,o,p,w.go,s,w.a,k,d,w.fx,w.dx,w.k2,w.id,h,w.ax,i,w.CW,r,w.fr,w.k3,w.k1,e,w.b,t,v,u)},
ag(){var w,v=this,u=B.T(x.N,x.z)
u.n(0,"id",v.a)
u.n(0,"type",v.b.b)
u.n(0,"x",v.c)
u.n(0,"y",v.d)
u.n(0,"w",v.e)
u.n(0,"h",v.f)
u.n(0,"text",v.r)
u.n(0,"fontSize",v.w)
u.n(0,"fontWeight",v.x.gdJ(0))
u.n(0,"fontStyle",v.y.a)
u.n(0,"decoration",C.hRm(v.z))
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
C.lD.prototype={
hC(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=B.U(n).k("K<1,eJ>")
n=B.B(new B.K(n,new C.cdc(),m),m.k("ak.E"))
return C.ro(t,s,o,q,n,w.a,u,v,p,w.b,r)},
ag(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=B.U(n).k("K<1,a3<n,@>>")
n=B.B(new B.K(n,new C.cdd(),m),m.k("ak.E"))
return B.F(["id",w.a,"title",w.b,"notes",v,"layout",u.b,"background",t,"backgroundEnd",s,"transition",r.b,"durationSeconds",q,"slideDesignId",p,"designRevision",o,"elements",n],x.N,x.z)}}
C.i_.prototype={
gb8M(){var w=this.Q,v=w==null?null:A.a.i(w)
if(v==null)v=""
if(v.length===0)return null
return B.bi(v)},
gRS(){if(!C.ku(this.w))return!1
var w=this.gb8M()
if(w==null)return!1
return new B.S(Date.now(),0,!1).cZ(w.bS())},
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
q=B.U(r).k("K<1,lD>")
r=B.B(new B.K(r,new C.cd1(),q),q.k("ak.E"))
return C.Br(g,w,a2,a3,m,l,a0,j,s,v,t,u,p.a,d,a1,p.x,o,e,f,r,n,i,h,k)},
ag(){var w,v,u=this,t=B.T(x.N,x.z)
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
v=B.U(w).k("K<1,a3<n,@>>")
w=B.B(new B.K(w,new C.cd2(),v),v.k("ak.E"))
t.n(0,"slides",w)
return t}}
C.jD.prototype={}
C.b0q.prototype={
B(d){return B.cp(new C.cd7(this))}}
C.anJ.prototype={
R(){return new C.biv(null,null)}}
C.biv.prototype={
gaYD(){var w,v=this,u=v.d
if(u===$){w=B.bj(null,A.fU,null,1,null,v)
w.cH(0)
v.d!==$&&B.bL()
v.d=w
u=w}return u},
q(){this.gaYD().q()
this.bty()},
B(d){return B.c6(this.gaYD(),new C.dFv(),this.a.c)}}
C.aKv.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbv())
w.a8$=null
w.a2()},
aR(){this.aY()
this.aX()
this.bw()}}
C.acX.prototype={
Pu(d,e,f,g){return this.bNv(d,e,f,g)},
bNv(d,e,f,g){var w=0,v=B.j(x.H),u,t,s
var $async$Pu=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:w=3
return B.b(e.$0(),$async$Pu)
case 3:s=i
if(d.e==null){w=1
break}B.a5(d,!1).O(null)
t=d.I(x.q).f
t.S(B.b2(null,null,null,null,null,A.r,null,B.d(s?f:g,null,null,null,null,null,null,null,null,null,null),null,A.ee,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$Pu,v)},
B(d){var w=this,v=null,u=B.m(22),t=B.I(A.c.j(0.08),A.q,1),s=B.a([new B.ac(0,A.G,A.w.j(0.35),A.dk,24)],x.V),r=B.av(B.p(v,v,A.f,v,v,new B.o(A.b2,v,v,B.m(99),v,v,A.n),v,4,v,v,v,v,v,40),v,v,v),q=w.d,p=B.d(q?"Print your invoice":"Save your PDF",v,v,v,v,v,v,A.dl,A.L,v,v),o=q?"One full letter page \u2014 tap Share then Print, or open in Safari.":w.c,n=q?3:2,m=x.p
n=B.a([r,A.aQ,p,A.an,B.d(o,v,n,A.a2,v,v,v,B.l(v,v,A.c.j(0.55),v,v,v,v,v,v,v,v,12,v,v,A.a5,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v)],m)
if(!q)A.d.v(n,B.a([A.at,B.d(w.c,v,2,A.a2,v,v,v,B.l(v,v,A.c.j(0.45),v,v,v,v,v,v,v,v,11,v,v,A.a5,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v)],m))
n.push(A.d5)
n.push(B.A(B.a([B.E(new C.ade(A.hA,"Download",A.bZ,new C.eoI(w,d),!0,v),1),A.av,B.E(new C.ade(A.vB,"Share",A.bj,new C.eoJ(w,d),!1,v),1),A.av,B.E(new C.ade(A.hl,"Safari",A.aZ,new C.eoK(w,d),!1,v),1)],m),A.m,v,A.e,A.j,0,v,v))
n.push(A.aA)
n.push(B.bK(!1,B.d("Cancel",v,v,v,v,v,v,B.l(v,v,A.c.j(0.6),v,v,v,v,v,v,v,v,v,v,v,A.P,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,!0,v,v,new C.eoL(d),v,v))
return B.bl(!0,new B.D(A.pK,B.v(B.a([B.p(v,B.v(n,A.aj,v,A.e,A.j,0,A.p),A.f,v,v,new B.o(A.iP,v,t,u,s,v,A.n),v,v,v,v,A.Fh,v,v,1/0)],m),A.m,v,A.e,A.Q,0,A.p),v),!0,!1,A.af,!0,!0)}}
C.ade.prototype={
B(d){var w=this,v=null,u=B.m(16),t=w.r,s=t?w.e.j(0.22):A.c.j(0.06),r=B.m(16),q=B.I(t?w.e.j(0.55):A.c.j(0.1),A.q,1),p=t?w.e:A.c
p=B.X(w.c,p,v,v,v,26)
return B.aG(!1,A.a1,!0,v,B.aL(!1,u,!0,B.eE(B.v(B.a([p,A.N,B.d(w.d,v,v,v,v,v,v,B.l(v,v,A.c,v,v,v,v,v,v,v,v,12,v,v,t?A.u:A.P,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.Q,0,A.p),v,new B.o(s,v,q,r,v,v,A.n),v,D.bv4,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),A.f,A.K,0,v,v,v,v,v,A.ag)}}
C.b0o.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.c,f=g.db
if(f==="__kiapo_video__"||A.a.a0(f,"__kiapo_video___"))return new C.apI(g.at,i.d,i.as,i.at,h)
switch(g.b.a){case 0:f=i.r
w=i.d
if(f){v=2*w
u=new B.Q(v,w,v,w)}else{v=6*w
u=new B.Q(v,10*w,v,12*w)}t=i.c6P().ak1(1.35)
s=B.auZ(h,h,h,g.w*w,h,h,!0,1.35,h,h,h)
v=g.as
r=i.bz0(v)
if(i.e&&i.w!=null)q=B.aM(h,A.T,!1,h,!0,A.r,h,B.aN(),i.w,A.bj,h,h,h,h,2,D.bQw,A.y,!0,h,!0,h,!1,i.x,A.ai,h,h,h,new B.cx("slide_tf_"+g.a,x.W),h,A.wf,h,h,h,h,1,h,!1,"\u2022",h,i.y,h,h,h,!1,h,h,!1,h,!0,h,A.a9,h,h,h,h,h,h,h,h,h,h,s,t,!0,v,A.zq,A.am,h,A.SZ,h,h)
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
w=n?t.cGp(B.b0(g.Q).j(0.45),A.cF):t
p=g.as
l=m?1:h
k=m?A.eC:A.D6
p=B.d(f,new B.cx("slide_txt_"+g.a+"_"+v,x.W),l,k,h,!m,s,w,p,h,h)
g=p}else{f=A.a.gX(v)
v=g.k1
p=g.r
if(v==="outline"){l=g.k2
k=l?A.SQ:s
$.W()
j=B.M()
j.b=A.ae
j.c=3*w
j.e=A.fA
j.r=A.aB.gp(0)
j=i.cny(p,t,k,j)
k=g.r
w=new B.an(A.W,h,A.aa,A.r,B.a([j,i.cnw(k,t,l?A.SQ:s)],x.p),h)}else w=i.cnx(p,t,g.k2?A.SQ:s,m)
v=new B.nc(w,new B.cx("slide_txt_"+g.a+"_"+f+"_"+v,x.W))
g=v}q=B.aE(A.c4,g,A.y,!1,h,i.Q,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,i.z,h,h,h,h,h,h,!1,A.a8)}return new B.D(u,new B.bI(r,h,h,q,h),h)
case 1:case 4:return i.bWZ()
case 3:return i.cf9()
case 2:return B.b3(h,h,h,new C.b0l(g,h),A.f1)
case 5:g=g.r
return new C.b0n(g,!i.e&&i.z==null,h)}},
c6P(){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.c,l=B.b0(m.Q),k=m.x,j=m.y,i=m.z,h=n,g=n,f=n,e=n
switch(m.k1){case"caps":h=3*o.d
w=l
k=A.u
break
case"elegant":h=1.2*o.d
w=l
k=A.jV
j=A.cF
break
case"shadow":v=o.d
e=B.a([new B.cQ(D.adf,new B.u(0,4*v),8*v)],x.r)
w=l
break
case"neon":v=o.d
e=B.a([new B.cQ(l,A.J,6*v),new B.cQ(l,A.J,16*v),new B.cQ(l.j(0.8),A.J,30*v)],x.r)
w=l
break
case"marker":k=A.u
g=A.cf
w=A.aB
break
case"stamp":h=6*o.d
w=l
k=A.u
i=A.mH
break
case"retro":v=o.d
h=2*v
v=4*v
e=B.a([new B.cQ(A.bA,new B.u(v,v),0)],x.r)
w=l
k=A.u
break
case"threed":v=B.aq(l,A.w,0.65)
v.toString
u=B.a([],x.r)
for(t=o.d,s=1;s<=6;++s){r=s*t
u.push(new B.cQ(v,new B.u(r,r),0))}e=u
w=l
k=A.u
break
case"glitch":v=o.d
h=2*v
e=B.a([new B.cQ(A.b8,new B.u(-3*v,0),0),new B.cQ(A.ay,new B.u(3*v,0),0)],x.r)
w=l
k=A.u
break
case"fire":v=o.d
e=B.a([new B.cQ(A.cs,A.J,8*v),new B.cQ(A.ay,new B.u(0,-3*v),18*v)],x.r)
k=A.u
w=W.Kq
break
case"ice":v=o.d
e=B.a([new B.cQ(A.aS,A.J,10*v),new B.cQ(A.cz,A.J,22*v)],x.r)
k=A.P
w=A.eu
break
case"chalk":h=o.d
e=B.a([new B.cQ(l.j(0.45),A.J,3*h)],x.r)
w=l
k=A.jV
break
case"comic":v=B.aq(l,A.w,0.85)
v.toString
u=B.a([],x.r)
for(t=o.d,q=0;q<8;++q){p=D.cUf[q]
u.push(new B.cQ(v,new B.u(p.a*t,p.b*t),0))}u.push(new B.cQ(v,new B.u(5*t,6*t),0))
e=u
w=l
k=A.u
break
case"gold":$.W()
f=B.M()
v=o.d
f.saq(D.bSY.av(0,new B.a9(0,0,0+900*v,0+m.w*v*1.6)))
e=B.a([new B.cQ(A.Kf,new B.u(0,3*v),5*v)],x.r)
w=l
k=A.u
break
case"sunset":$.W()
f=B.M()
v=o.d
f.saq(D.bTi.av(0,new B.a9(0,0,0+900*v,0+m.w*v*1.6)))
w=l
k=A.u
break
case"softglow":e=B.a([new B.cQ(l,A.J,14*o.d)],x.r)
w=l
k=A.a5
break
case"lowercase":h=2*o.d
w=l
k=A.cv
break
case"double":v=o.d
u=5*v
v=10*v
e=B.a([new B.cQ(l.j(0.45),new B.u(u,u),0),new B.cQ(l.j(0.2),new B.u(v,v),0)],x.r)
w=l
break
case"whisper":h=6*o.d
w=l
k=A.jV
break
default:w=l}v=m.w
u=f==null?w:n
m=m.k3
m=m!==0?B.b0(m):g
return B.l(n,m,u,n,i,n,n,n,n,n,n,v*o.d,j,n,k,f,1.25,!0,n,h,n,n,n,e,n,n)},
ayv(d,e,f,g,h){var w,v,u,t,s=null,r=this.c,q=r.k1
if(D.eKe.t(0,q))w=d.toUpperCase()
else w=q==="lowercase"?d.toLowerCase():d
q=new C.cd5(h)
v=r.k2?C.i2T(w,e,q):s
if(v==null){q=q.$1(e)
r=r.as
u=g?1:s
t=g?A.eC:A.D6
return B.d(w,s,u,t,s,!g,f,q,r,s,s)}return B.Xn(B.dh(v,s,s,s,s,s,s,s,s,s,s),s,s,q.$1(e),r.as)},
cny(d,e,f,g){return this.ayv(d,e,f,!1,g)},
cnw(d,e,f){return this.ayv(d,e,f,!1,null)},
cnx(d,e,f,g){return this.ayv(d,e,f,g,null)},
bz0(d){switch(d.a){case 2:return A.A
case 1:case 5:return A.a7
default:return A.a3}},
bWZ(){var w,v,u=this,t=null,s=u.c,r=s.at
if(r==null||!A.a.a0(r,"data:image")){if(!u.as)return A.bH
return B.av(B.X(s.b===D.kX?A.Gb:A.Bp,A.az,t,t,t,32),t,t,t)}w=u.bBY(r)
if(s.b===D.kX){s=B.m(6)
v=2*u.d
return B.p(t,w,A.f,t,t,new B.o(A.c,t,B.I(A.cq,A.q,1),s,B.a([new B.ac(0,A.G,A.w.j(0.08),A.dE,6)],x.V),t,A.n),t,1/0,t,t,new B.Q(v,v,v,v),t,t,1/0)}if(s.go.length!==0||s.id.length!==0){v=u.aN0(r,!0)
return C.fye(s.go,v,s.id)}return w},
aN0(d,e){var w,v,u,t
try{w=C.i3b(d)
u=this.c.db
v=u==="marriage_locked_bg"||A.a.cb(u,"_bg")
u=B.cp(new C.cd4(this,w,v,e))
return u}catch(t){return D.ab0}},
bBY(d){return this.aN0(d,!1)},
cf9(){var w=this.c,v=w.at
if(v==null||v.length===0)return D.b45
return C.i3t(v,w.db,w.dx)}}
C.b0l.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=$.W(),g=B.M(),f=this.b
g.r=B.b0(f.ay).gp(0)
w=B.M()
w.r=B.b0(f.ch).gp(0)
w.b=A.ae
v=f.CW
w.c=v
u=e.a
t=e.b
s=new B.a9(0,0,0+u,0+t)
switch(f.ax.a){case 0:d.aZ(s,g)
d.aZ(s,w)
break
case 1:d.hO(s,g)
d.hO(s,w)
break
case 2:r=new B.aO(h.r,A.ap,i,i,B.a([],x.v))
r.E(new B.b5(u/2,0))
r.E(new B.ap(u,t))
r.E(new B.ap(0,t))
r.E(new B.bF())
d.aO(r,g)
d.aO(r,w)
break
case 3:r=new B.aO(h.r,A.ap,i,i,B.a([],x.v))
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
d.bB(new B.u(0,h),new B.u(u,h),w)
break
case 5:q=u*0.22
r=new B.aO(h.r,A.ap,i,i,B.a([],x.v))
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
r=new B.aO(h.r,A.ap,i,i,f)
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
ar(d){return d.b!==this.b}}
C.aI6.prototype={
R(){return new C.btI(null,null)}}
C.btI.prototype={
a_(){var w,v=this
v.a1()
w=B.bj(null,A.ib,null,1,null,v)
w.cH(0)
v.d!==$&&B.aP()
v.d=w},
q(){var w=this.d
w===$&&B.c()
w.q()
this.bvR()},
aNb(d,e){var w=null,v=B.a([e,e.j(0.7)],x.O),u=B.m(8)
return B.c_(B.av(B.d(d,w,w,w,w,w,w,A.dl,w,w,w),w,w,w),new B.o(w,w,w,u,w,new B.a8(A.a3,A.a7,A.x,v,w,w),A.n),A.bd)},
bze(){var w,v=this,u=null,t=v.aNb("Slide A",A.bj),s=v.aNb("Slide B",A.aZ)
if(v.a.c===D.cm)return new B.an(A.W,u,A.b0,A.r,B.a([t,B.av(B.d("No transition",u,u,u,u,u,u,B.l(u,u,A.c.j(0.7),u,u,u,u,u,u,u,u,16,u,u,A.P,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,u)],x.p),u)
w=v.d
w===$&&B.c()
return B.c6(w,new C.f3q(v,s,t),u)},
B(d){return this.bze()}}
C.aIJ.prototype={
j0(d){return new B.a9(0,0,0+d.a*A.k.D(this.b,0,1),0+d.b)},
jK(d){return d.b!==this.b}}
C.Uy.prototype={
R(){return new C.biI(null,null)}}
C.biI.prototype={
a_(){var w,v,u=this
u.a1()
w=B.bj(null,A.AR,null,1,null,u)
u.d!==$&&B.aP()
u.d=w
v=u.a
if(!v.e||v.c.dy===D.cm){w.sp(0,1)
return}B.bN(B.dC(0,0,0,v.c.fr+v.f*120,0,0),new C.dRw(u),x.a)},
br(d){var w,v,u,t=this
t.bC(d)
w=d.c
v=t.a
u=v.c
if(w.a!==u.a||w.dy!==u.dy||d.f!==v.f){w=t.d
w===$&&B.c()
w.sp(0,w.a)
v=t.a
if(!v.e||v.c.dy===D.cm)w.sp(0,1)
else B.bN(B.dC(0,0,0,v.c.fr+v.f*120,0,0),new C.dRv(t),x.a)}},
q(){var w=this.d
w===$&&B.c()
w.q()
this.btN()},
B(d){var w,v=this.a
if(v.c.dy===D.cm||!v.e)return v.d
w=this.d
w===$&&B.c()
return B.c6(w,new C.dRu(this),v.d)}}
C.Io.prototype={
B(d){return B.cp(new C.ccY(this))}}
C.ayQ.prototype={
R(){return new C.bdb()}}
C.bdb.prototype={
a_(){this.a1()
if(this.a.c!==D.cm)B.bN(A.LB,new C.d40(this),x.a)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=4280172719,n=q.a.c
if(n===D.cm)n=B.av(B.d("No animation on elements",p,p,p,p,p,p,B.l(p,p,A.c.j(0.75),p,p,p,p,p,p,p,p,16,p,p,A.P,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p)
else{n=n.u(0)
w=q.d
v=x.W
u=q.a.c
w=B.ao(p,new C.Uy(C.ep(A.bg,!1,4279310375,A.aD,"",4294538006,24,A.bl,A.a5,"",0.2,"preview_shape",p,"","",0,!1,"",0,D.be,o,2,"",0,0,"",u,D.f0,0.84,0.08,0.12),B.p(p,p,A.f,p,p,new B.o(A.ci,p,p,B.m(14),p,p,A.n),p,72,p,p,p,p,p,72),!0,0,new B.cx("shape_"+n+"_"+w,v)),p,p,24,p,28,p)
u=u.u(0)
n=q.d
t=C.ep(A.bg,!1,4294967295,A.aD,"",4280640491,22,A.bl,A.a5,"",0.2,"preview_text",p,"","",0,!1,"",0,D.be,o,2,"Element flies in",0,0,"",q.a.c,D.cQ,0.84,0.08,0.12)
s=A.c.j(0.14)
r=B.m(14)
v=new B.an(A.W,p,A.aa,A.r,B.a([w,B.ao(32,new C.Uy(t,B.p(p,D.fgZ,A.f,p,p,new B.o(s,p,B.I(A.b2,A.q,1),r,p,p,A.n),p,p,p,p,A.je,p,p,1/0),!0,1,new B.cx("text_"+u+"_"+n,v)),p,p,24,24,p,p)],x.p),p)
n=v}return B.c_(n,D.b_p,A.bd)}}
C.a7k.prototype={
R(){return new C.bjm(null,null)}}
C.bjm.prototype={
gaZ9(){var w=this.a
if(w.e)w=D.eKl.t(0,w.c)||D.aMB.t(0,A.d.gL(this.a.c.split("@")))
else w=!1
return w},
a_(){var w,v=this
v.a1()
if(v.gaZ9()){w=C.i1y(v.a.c)
if(w==null){w=v.a.c
if(w==="drift")w=9000
else w=w==="pulse"?2600:4200}w=B.bj(null,B.dC(0,0,0,w,0,0),null,1,null,v)
w.cH(0)
v.d=w}},
q(){var w=this.d
if(w!=null)w.q()
this.buj()},
B(d){var w,v=this,u=v.d
if(!v.gaZ9()||u==null)return v.a.d
w=v.a
return B.c6(u,new C.ecd(v,u,A.o.F(w.f,7)/7*3.141592653589793*2),w.d)}}
C.aZj.prototype={
B(d){var w=null
return B.av(C.b0p(!0,w,!1,C.ep(A.L,!1,this.e.l(),A.aD,"",4280640491,this.f,A.bl,A.a5,"",0.2,"fx",w,"","",0,!1,"",0,D.be,4280172719,2,"Aa",0,0,this.c,D.cm,D.cQ,0.84,0.08,0.12),w,!1,w,w,w,1,!1,!0),w,w,w)},
gZ(d){return this.f}}
C.bel.prototype={
j0(d){return C.a1Y(this.b,new B.a9(0,0,0+d.a,0+d.b).cB(-this.c))},
jK(d){return d.b!==this.b||d.c!==this.c}}
C.bpi.prototype={
a5(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=new B.a9(0,0,0+a1.a,0+a1.b).cB(-this.d),g=this.b,f=C.a1Y(g,h),e=a1.gdO(),d=new C.eTy()
switch(this.c){case"gold":w=d.$1(e*0.045)
w.saq(D.aO6.av(0,h))
a0.aO(f,w)
g=C.a1Y(g,h.cB(-(e*0.03)))
w=d.$1(e*0.006)
w.r=D.biq.gp(0)
a0.aO(g,w)
break
case"platinum":g=d.$1(e*0.04)
g.saq(D.eTU.av(0,h))
a0.aO(f,g)
break
case"glow":g=d.$1(e*0.05)
g.r=A.c.j(0.55).gp(0)
g.z=new B.hu(A.G,e*0.04)
a0.aO(f,g)
g=d.$1(e*0.012)
g.r=A.c.gp(0)
a0.aO(f,g)
break
case"rainbow":g=d.$1(e*0.04)
g.saq(D.eTS.av(0,h))
a0.aO(f,g)
break
case"double":w=d.$1(e*0.012)
w.r=A.c.gp(0)
a0.aO(f,w)
g=C.a1Y(g,h.cB(e*0.03))
w=d.$1(e*0.008)
w.r=A.c.j(0.75).gp(0)
a0.aO(g,w)
break
case"neon":g=d.$1(e*0.06)
g.r=A.b8.j(0.7).gp(0)
g.z=new B.hu(A.G,e*0.035)
a0.aO(f,g)
g=d.$1(e*0.016)
g.r=A.ov.gp(0)
a0.aO(f,g)
break
case"rosegold":w=d.$1(e*0.05)
w.saq(D.eTN.av(0,h))
a0.aO(f,w)
w=C.a1Y(g,h.cB(-(e*0.032)))
v=d.$1(e*0.006)
v.r=D.b7u.gp(0)
a0.aO(w,v)
g=C.a1Y(g,h.cB(e*0.03))
v=d.$1(e*0.004)
v.r=D.b9Z.gp(0)
a0.aO(g,v)
break
case"jewels":g=d.$1(e*0.055)
g.saq(D.aO6.av(0,h))
a0.aO(f,g)
for(g=B.wX(f),w=B.a([],x.X),g=new B.vs(g,!1,w),v=e*0.018,u=a0.a,t=-e*0.006,s=e*0.006,r=e*0.09;g.C();){q=g.c
if(q===0||g.f)B.ba(B.jU(y.M));--q
g.jn()
p=w[q].b
p===$&&B.c()
o=A.o.D(A.k.bt(p.a.length()/r),8,40)
for(n=0;n<o;++n){g.jn()
p=w[q].b
p===$&&B.c()
p=p.a.length()
g.jn()
m=w[q].Mr(p*n/o).a
l=D.cRA[A.o.F(n,4)]
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
g.saq(D.eTW.av(0,h))
g.z=new B.hu(A.G,e*0.03)
a0.aO(f,g)
g=d.$1(e*0.018)
g.saq(D.eTT.av(0,h))
a0.aO(f,g)
break
case"framed":w=d.$1(e*0.07)
w.r=A.c.gp(0)
a0.aO(f,w)
g=C.a1Y(g,h.cB(-(e*0.035)))
w=d.$1(e*0.004)
w.r=A.nF.gp(0)
a0.aO(g,w)
break}},
ar(d){return d.b!==this.b||d.c!==this.c||d.d!==this.d}}
C.bqi.prototype={
a5(d,e){d.FE(C.a1Y(this.b,new B.a9(0,0,0+e.a,0+e.b).cB(-this.c)),A.w,e.gdO()*0.05,!1)},
ar(d){return d.b!==this.b||d.c!==this.c}}
C.aKJ.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbv())
w.a8$=null
w.a2()},
aR(){this.aY()
this.aX()
this.bw()}}
C.aLe.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbv())
w.a8$=null
w.a2()},
aR(){this.aY()
this.aX()
this.bw()}}
C.aMB.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbv())
w.a8$=null
w.a2()},
aR(){this.aY()
this.aX()
this.bw()}}
C.a7D.prototype={}
C.Nz.prototype={
R(){var w=x.gz,v=x.N,u=x.bO
return new C.aDG(B.a([],x.D),B.a([],w),B.a([],w),B.T(v,u),B.T(v,x.bo),B.T(v,u),B.aX(v),null,null)},
gdZ(){return this.c},
gTb(){return this.r},
gTc(){return this.w},
gLi(){return this.x}}
C.aDG.prototype={
a_(){var w,v=this
v.a1()
$.aW.c2$.push(v)
C.fDa()
$.hkT=new C.euW(v)
w=B.bj(null,A.AP,null,1,null,v)
w.fc(0,!0)
v.fy!==$&&B.aP()
v.fy=w
v.I7()},
br(d){var w,v,u=this
u.bC(d)
w=A.a.i(d.y)
v=u.a
if(w.toLowerCase()!==A.a.i(v.y).toLowerCase()||A.a.i(d.z).toLowerCase()!==A.a.i(v.z).toLowerCase()||d.c!==v.c){w=d.c
u.O6(w)
if(w!==u.a.c){u.e=null
u.db=!1
u.w=u.r=null}u.x=!0
u.I7()}},
iV(d){if(d===A.zU||d===A.rT||d===A.rS||d===A.pg)this.tr()},
q(){var w,v,u,t=this
$.aW.hF(t)
w=t.at
if(w!=null)w.a7(0)
t.tr()
w=t.fy
w===$&&B.c()
w.q()
for(w=t.ch,w=new B.dt(w,w.r,w.e);w.C();){v=w.d
v.U$=$.aw()
v.P$=0}for(w=t.CW,w=new B.dt(w,w.r,w.e);w.C();){v=w.d
u=v.ax
if(u!=null)u.bN(0)
v.h3()}for(w=t.cx,w=new B.dt(w,w.r,w.e);w.C();){v=w.d
v.U$=$.aw()
v.P$=0}t.bux()},
gaaQ(){var w=this.a
return w.f||w.r||w.w||w.x||w.d},
gOq(){var w,v=this.a
if(v.d||v.w||v.x){w=A.a.i(v.y)
if(w.length!==0)return w}if(v.r&&A.a.i(v.z).length!==0)return A.a.i(v.z)
return A.a.i(v.y)},
abj(d){var w=d==null?this.e:d
if((w==null?null:w.z)!==!0)return!1
if(w.gRS())return!1
return!0},
kb(){return this.abj(null)},
ai3(){var w=this.c
if(w==null)return
w.I(x.q).f.S(D.eSb)},
qd(){if(!this.kb())return!1
this.ai3()
return!0},
aq9(d){var w,v,u,t,s,r=this
if(r.abj(d))return!1
w=d==null?r.e:d
v=w==null
if((v?null:w.w)!=="hati_kiapo_uongozi")return!0
if(r.a.d)return!0
if(!v&&!C.hk_(w))return!1
u=r.a
if(u.w||u.x)return!0
if(!u.r)return!1
v=v?null:w.x
t=A.a.i(v==null?"":v).toLowerCase()
s=A.a.i(u.z).toLowerCase()
return t.length!==0&&s.length!==0&&t===s},
zE(){return this.aq9(null)},
I7(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$I7=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=++t.dx
k=t.a.c
w=3
return B.b(C.aqy(k),$async$I7)
case 3:j=e
w=4
return B.b(C.apa(k),$async$I7)
case 4:t.dy=e
if(t.c==null||l!==t.dx){w=1
break}s=C.fSt(j,t.bZR())
w=t.gaaQ()?5:7
break
case 5:r=t.gOq()
w=r.length!==0?8:9
break
case 8:w=10
return B.b(C.aZx(r),$async$I7)
case 10:q=e
if(t.c==null||l!==t.dx){w=1
break}if(q!=null){A.d.bn(s,new C.erj())
if(!t.dy.t(0,A.a.i(r).toLowerCase()))A.d.ck(s,0,q)}case 9:w=6
break
case 7:A.d.bn(s,new C.erk())
case 6:for(l=s.length,p=!1,o=0;o<s.length;s.length===l||(0,B.L)(s),++o){n=s[o]
m=n.w
if(!(m==="marriage_agreement"||m==="hati_kuhowa"||m==="hati_kuhoweya"||m==="hati_malipo_awamu"||m==="hati_kiapo_uongozi"))continue
m=n.y
if(C.yo(m==null?"":m)!=null)continue
C.fDm(n,s)
p=!0}t.m(new C.erl(t,s))
if(p||s.length>J.ad(j))t.tr()
case 1:return B.h(u,v)}})
return B.i($async$I7,v)},
bZR(){var w,v,u,t,s,r,q="hati_kiapo_uongozi",p=B.a([],x.D)
for(w=this.d,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u){t=w[u]
s=t.w
if((s==="marriage_agreement"||s==="hati_kuhowa"||s==="hati_kuhoweya"||s==="hati_malipo_awamu"||s===q)&&s!==q)p.push(t)}r=this.e
w=!1
if(!this.db)if(r!=null){w=r.w
w=C.ku(w)&&w!==q}if(w)p.push(r)
return p},
clW(d){var w,v=this,u=d.w
if(!C.ku(u)||u==="hati_kiapo_uongozi")return
v.a9G(d)
w=A.d.bd(v.d,new C.esU(d))
u=v.d
if(w>=0){u[w]=d.hC()
v.d[w].f=new B.S(Date.now(),0,!1)}else A.d.ck(u,0,d.hC())
v.db=!1},
cg5(){var w,v,u=this,t=u.e,s=!1
if(!u.db)if(t!=null){s=t.w
s=C.ku(s)&&s!=="hati_kiapo_uongozi"}if(s)u.clW(t)
s=u.d
w=B.U(s)
v=w.k("cR<1,i_>")
s=B.B(new B.cR(new B.a2(s,new C.esI(),w.k("a2<1>")),new C.esJ(),v),v.k("J.E"))
return s},
O6(d){return this.bNS(d)},
tr(){return this.O6(null)},
bNS(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$O6=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.x&&d==null){w=1
break}s=t.cg5()
w=3
return B.b(C.Vx(d==null?t.a.c:d,s),$async$O6)
case 3:r=t.e
w=r!=null&&r.w==="hati_kiapo_uongozi"&&t.aq9(r)?4:5
break
case 4:w=6
return B.b(C.a6R(r),$async$O6)
case 6:q=r.x
p=A.a.i(q==null?t.gOq():q)
if(t.dy.t(0,A.a.i(p).toLowerCase())){w=1
break}o=A.d.bd(t.d,new C.eqH())
q=t.d
if(o>=0)q[o]=r.hC()
else A.d.ck(q,0,r.hC())
case 5:case 1:return B.h(u,v)}})
return B.i($async$O6,v)},
pg(){var w,v=this,u=v.at
if(u!=null)u.a7(0)
u=v.e
w=(u==null?null:C.ku(u.w))===!0?A.hX:A.lI
v.at=B.cM(w,new C.eu1(v))},
aYE(){var w,v=this,u=v.e
if(u==null)return
w=v.ax
w.push(new C.aeL(u.hC(),v.f,v.r))
if(w.length>40)A.d.cC(w,0)
A.d.a9(v.ay)},
czf(){var w=this,v=w.ax
if(v.length===0||w.e==null)return
w.ay.push(new C.aeL(w.e.hC(),w.f,w.r))
w.m(new C.euS(w,v.pop()))
w.pg()},
cl1(){var w=this,v=w.ay
if(v.length===0||w.e==null)return
w.ax.push(new C.aeL(w.e.hC(),w.f,w.r))
w.m(new C.esS(w,v.pop()))
w.pg()},
oc(){var w,v,u=this
if(u.e==null)return
w=A.d.bd(u.d,new C.euF(u))
if(w>=0){u.d[w]=u.e.hC()
u.d[w].f=new B.S(Date.now(),0,!1)}v=u.e
v.toString
v.f=new B.S(Date.now(),0,!1)},
X9(d){var w,v,u,t,s=this.gdr()
if(s==null)return null
for(w=s.z,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t}return null},
xi(){var w,v,u,t
for(w=this.ch,v=new B.dt(w,w.r,w.e);v.C();){u=v.d
u.U$=$.aw()
u.P$=0}w.a9(0)
for(w=this.CW,v=new B.dt(w,w.r,w.e);v.C();){u=v.d
t=u.ax
if(t!=null)t.bN(0)
u.h3()}w.a9(0)},
JP(){var w,v,u,t,s,r,q,p,o,n,m,l=this.gdr()
if(l==null)return
w=l.z
v=B.U(w)
u=v.k("cR<1,n>")
t=B.db(new B.cR(new B.a2(w,new C.euG(),v.k("a2<1>")),new C.euH(),u),u.k("J.E"))
w=this.ch
v=B.a4(w).k("cu<1>")
v=B.B(new B.cu(w,v),v.k("J.E"))
u=v.length
s=this.CW
r=0
for(;r<v.length;v.length===u||(0,B.L)(v),++r){q=v[r]
if(!t.t(0,q)){p=w.W(0,q)
if(p!=null){p.U$=$.aw()
p.P$=0}p=s.W(0,q)
if(p!=null){o=p.ax
if(o!=null)o.bN(0)
p.h3()}}}for(v=l.z,u=v.length,r=0;r<v.length;v.length===u||(0,B.L)(v),++r){n=v[r]
if(n.b!==D.cQ)continue
p=n.a
m=w.cg(0,p,new C.euI(n))
s.cg(0,p,new C.euJ())
p=m.a.a
o=n.r
if(p!==o)m.saV(0,o)}},
Ht(){var w,v,u=this
if(!u.db||u.e==null)return
w=u.db=!1
if(!A.d.b5(u.d,new C.eq5(u))){v=u.e
if(v.w==="hati_kiapo_uongozi"){v=v.x
if(v==null)v=u.gOq()
w=u.dy.t(0,A.a.i(v).toLowerCase())}if(!w)A.d.ck(u.d,0,u.e.hC())}u.oc()
u.pg()},
aiq(d,e){var w,v,u,t,s=this
if(s.kb())return
w=s.X9(d)
if(w==null||w.r===e)return
w.r=e
v=s.e
u=(v==null?null:C.ku(v.w))===!0
if(u){C.i1C(w,e)
v=s.e
if((v==null?null:v.w==="marriage_agreement")===!0){t=s.gdr()
if(t!=null)C.i1D(t,w.d+w.f*0.5)}}s.Ht()
s.oc()
s.pg()
if(u&&s.c!=null)s.m(new C.euT())},
cAj(d,e){var w=this,v=w.gdr()
if(v==null||v.a!==d||v.c===e)return
v.c=e
w.Ht()
w.oc()
w.pg()},
gdr(){var w,v=this.e
if(v==null||v.r.length===0)return null
w=v.r
return w[A.o.D(this.f,0,w.length-1)]},
gqh(){var w,v,u,t,s,r,q=this,p=q.e,o=p==null?null:p.c
if(o==null)o="office_blue"
w=C.i_E(o)
if(w!=null)return w
v=q.gdr()
if(v==null){p=q.e
v=p!=null&&p.r.length!==0?A.d.gL(p.r):null}if(v!=null&&A.a.a0(o,"class_")){p=v.f
p=B.b0(p==null?v.e:p)
u=q.bXd(v)
t=q.bXc(v)
s=B.b0(v.e)
r=v.f
return new C.jD(o,"Class template",p,u,t,s,r==null?null:B.b0(r))}return C.hDu(o)},
bXd(d){var w,v,u,t,s
for(w=d.z,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u){t=w[u]
if(t.b===D.cQ)s=t.w>=28||A.o.D(A.o.an(t.x.a,100)-1,0,8)>=A.o.D(7,0,8)
else s=!1
if(s)return B.b0(t.Q)}return A.M},
bXc(d){var w,v,u,t
for(w=d.z,v=w.length,u=0;u<v;++u){t=w[u]
if(t.b===D.cQ&&t.w<28)return B.b0(t.Q)}return A.aK},
aek(d){var w=this,v=d.w
if(v==="hati_kiapo_uongozi"){if(!w.gaaQ()){w.c.I(x.q).f.S(D.eQO)
return}w.a9G(d)
w.aZQ(C.bBp(d))
return}if(C.cdR(v)){w.a9G(d)
w.aZQ(d)
return}w.m(new C.es0(w,d))},
aqI(){var w,v,u,t,s,r,q=this
q.a1B(!0)
if(q.db){w=q.e
v=w==null
u=v?null:w.w
t=v?null:w.x
s=A.a.i(t==null?"":t)
r=!v&&C.ku(w.w)&&u!=="hati_kiapo_uongozi"&&s.length!==0
q.m(new C.eq3(q))
if(r&&q.c!=null){u.toString
q.Jp(u,s)}return}q.tr()
q.m(new C.eq4(q))},
aZP(d){this.a9G(d)
this.a_7(d,!0)},
a9G(d){if(!C.ku(d.w))return
C.fDm(d,this.d)},
a_7(d,e){return this.cc0(d,e)},
aZQ(d){return this.a_7(d,!1)},
cc0(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$a_7=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:l={}
l.a=d
if(d.w==="hati_kiapo_uongozi"){s=l.a=C.bBp(d)
if(e){r=s.x
q=A.a.i(r==null?t.gOq():r)
t.dy.W(0,q.toLowerCase())
C.apb(t.a.c,q)}r=s}else r=d
w=C.cdR(r.w)?3:4
break
case 3:w=5
return B.b(t.a9H(r),$async$a_7)
case 5:if(!g||t.c==null){w=1
break}case 4:p=A.d.b5(t.d,new C.esn(l))
o=l.a.hC()
n=C.ku(o.w)&&C.i2O(o)
t.m(new C.eso(t,o,p))
if(n){m=A.d.bd(t.d,new C.esp(o))
if(m>=0){t.d[m]=o.hC()
t.tr()}}if(!t.abj(l.a))t.Yh()
r=!1
if(t.c!=null)if(!t.abj(l.a)){r=l.a
l=r.w==="hati_kiapo_uongozi"&&!t.aq9(r)&&C.fzp(l.a)}else l=r
else l=r
if(l)t.c.I(x.q).f.S(D.eRn)
case 1:return B.h(u,v)}})
return B.i($async$a_7,v)},
a9H(d){return this.bM4(d)},
bM4(d){var w=0,v=B.j(x.y),u,t=this,s,r
var $async$a9H=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.a
if(r.d){u=!0
w=1
break}s=d.z
if(s===!0){u=!0
w=1
break}w=3
return B.b(B.le(r.c,A.z8),$async$a9H)
case 3:if(f){u=!0
w=1
break}r=t.c
r.toString
s=t.a
u=B.kS(!1,r,s.c,s.d,null,A.z8,null)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a9H,v)},
o2(){var w=0,v=B.j(x.y),u,t=this,s,r
var $async$o2=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.e
r=s==null
if(C.cdR(r?null:s.w)){u=!0
w=1
break}if((r?null:s.w)==="hati_kiapo_uongozi"){u=!0
w=1
break}s=t.c
s.toString
r=t.a
u=C.cdf(s,r.c,r.d)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$o2,v)},
ae1(){var w=0,v=B.j(x.H),u,t=this,s
var $async$ae1=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.ca(null,null,!1,null,new C.es_(),s,null,!0,!0,x.H),$async$ae1)
case 3:if(t.c==null){w=1
break}t.aqI()
case 1:return B.h(u,v)}})
return B.i($async$ae1,v)},
ae0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$ae0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.ca(null,null,!1,null,new C.erX(),s,null,!0,!0,x.H),$async$ae0)
case 3:if(t.c==null){w=1
break}t.m(new C.erY())
t.aqI()
case 1:return B.h(u,v)}})
return B.i($async$ae0,v)},
Yh(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$Yh=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.aA(),$async$Yh)
case 3:r=e
if(B.kg(J.q(r.a,"ngmy_marriage_hint_seen"))===!0){w=1
break}w=4
return B.b(r.au("Bool","ngmy_marriage_hint_seen",!0),$async$Yh)
case 4:s=t.c
if(s==null){w=1
break}s.I(x.q).f.S(D.ePr)
case 1:return B.h(u,v)}})
return B.i($async$Yh,v)},
Jp(d,e){return this.cmm(d,e)},
cmm(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$Jp=B.e(function(f,g){if(f===1)return B.f(g,v)
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
return B.b(C.ag5(s,t.gEd(),t.gEc(),!0,e,t.d),$async$Jp)
case 9:w=4
break
case 6:w=10
return B.b(C.ag6(s,t.gEd(),t.gEc(),!0,e,t.d),$async$Jp)
case 10:w=4
break
case 7:w=11
return B.b(C.ag7(s,t.gEd(),t.gEc(),!0,e,t.d),$async$Jp)
case 11:w=4
break
case 8:w=12
return B.b(C.ag8(s,t.gEd(),t.gEc(),!0,e,t.d),$async$Jp)
case 12:w=4
break
case 4:case 1:return B.h(u,v)}})
return B.i($async$Jp,v)},
bYK(){var w,v,u,t,s=this
if(!s.gaaQ()){s.c.I(x.q).f.S(D.ePE)
return}w=s.gOq()
v=s.a
u=v.d
t=!0
if(!u)if(!v.w){if(!v.x)if(v.r){v=A.a.i(v.z)
v=v.length!==0&&v.toLowerCase()===w.toLowerCase()}else v=!1
else v=t
t=v}v=s.c
v.toString
C.ag4(u,t,v,new C.erf(s),new C.erg(s),w)},
ael(){var w=0,v=B.j(x.H),u=this,t,s
var $async$ael=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return B.b(B.bR(A.dH,null,new C.es6(u),s,!0,!0,!1,A.lr,!1,!1,x.N),$async$ael)
case 2:t=e
if(t==="marriage_agreement"){s=u.c
s.toString
C.ag8(s,u.gEd(),u.gEc(),!1,null,u.d)}else if(t==="hati_kuhowa"){s=u.c
s.toString
C.ag5(s,u.gEd(),u.gEc(),!1,null,u.d)}else if(t==="hati_kuhoweya"){s=u.c
s.toString
C.ag6(s,u.gEd(),u.gEc(),!1,null,u.d)}else if(t==="hati_malipo_awamu"){s=u.c
s.toString
C.ag7(s,u.gEd(),u.gEc(),!1,null,u.d)}else if(t==="hati_kiapo_uongozi")u.bYK()
return B.h(null,v)}})
return B.i($async$ael,v)},
cb7(d,e){var w,v,u=this,t=null
if(u.e!=null)u.aYE()
w=C.cC()
v=C.Br(t,t,t,t,D.Cw,5,!1,t,t,t,t,t,w,t,!1,t,d==null?"Untitled Presentation":d,t,t,t,"office_blue",t,!1,t)
u.m(new C.es7(u,v))},
a97(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$a97=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e==null||t.qd()){w=1
break}s=t.c
s.toString
w=3
return B.b(C.i7j(s),$async$a97)
case 3:r=e
if(r==null||t.c==null||t.e==null){w=1
break}q=t.e
p=A.d.d8(q.r,new C.eq7())
t.d3(new C.eq8(t,p,q,r))
s=t.c.I(x.q).f
o=r.r.length
s.S(B.b2(null,null,null,null,null,A.r,null,B.d(p?"Your "+o+"-slide presentation is ready. The mic is green now \u2014 tap it to tell the AI what to change.":"Added "+o+" AI slides after this one. Tap the green mic to change them.",null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a97,v)},
agj(d,e,f,g){var w=null,v=g?A.dq:A.bL,u=B.I(g?A.b2:A.cq,A.q,1)
return B.hq(B.aE(w,B.p(w,B.X(d,g?A.c:A.aK,w,w,w,18),A.f,w,w,new B.o(v,w,u,w,w,w,A.a6),w,34,w,w,w,w,w,34),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,A.a8),w,e,w,w)},
a_6(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a_6=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:n=t.e
if(n==null||t.qd()){w=1
break}s=t.jN()
r=n.r
q=r.length
if(q===0||t.f>=q)p=B.a([],x.u)
else{r=r[t.f].z
q=B.U(r).k("a2<1>")
p=B.B(new B.a2(r,new C.esi(),q),q.k("J.E"))}o=s!=null&&s.b===D.lq?B.a([s],x.u):p
if(o.length===0){t.c.I(x.q).f.S(D.eRy)
w=1
break}r=t.c
r.toString
w=3
return B.b(B.bR(A.K,null,new C.esj(t,o),r,!0,!0,!0,null,!1,!1,x.H),$async$a_6)
case 3:case 1:return B.h(u,v)}})
return B.i($async$a_6,v)},
aeC(){return this.cc_()},
cc_(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$aeC=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p={}
o=t.e
if(o!=null){s=o.CW
s=(s==null?"":s).length===0||t.qd()}else s=!0
if(s){w=1
break}s=t.c
s.toString
w=3
return B.b(C.i75(s,t.f+1,o),$async$aeC)
case 3:r=e
if(r==null||t.c==null||t.e!==o){w=1
break}s=o.cx
if(s==null)s=A.T
q=B.kB(s,B.U(s).c)
p.a=A.d.bd(o.r,new C.esl(q))
t.d3(new C.esm(p,t,o,q,r))
t.c.I(x.q).f.S(D.eRX)
case 1:return B.h(u,v)}})
return B.i($async$aeC,v)},
aeJ(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$aeJ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e==null||t.qd()||!t.zE()){w=1
break}s=t.gdr()
if(s==null){w=1
break}r=s.z
q=B.U(r).k("a2<1>")
p=B.B(new B.a2(r,new C.esD(),q),q.k("J.E"))
if(p.length===0){t.c.I(x.q).f.S(D.ePc)
w=1
break}o=new B.K(p,new C.esE(),B.U(p).k("K<1,N>")).fa(0,new C.esF())
r=B.T(x.N,x.bO)
for(q=p.length,n=0;n<p.length;p.length===q||(0,B.L)(p),++n){m=p[n]
l=m.r
r.n(0,m.a,new B.ar(new B.bb(l,A.b4,A.aN),$.aw()))}q=t.c
q.toString
w=3
return B.b(B.bR(A.K,null,new C.esG(t,p,o,r),q,!0,!0,!0,null,!1,!1,x.H),$async$aeJ)
case 3:for(r=new B.dt(r,r.r,r.e);r.C();){q=r.d
q.U$=$.aw()
q.P$=0}if(t.c!=null)t.m(new C.esH())
case 1:return B.h(u,v)}})
return B.i($async$aeJ,v)},
aeo(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$aeo=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:m=t.e
if(m==null||t.qd()){w=1
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
return B.b(C.hlY(s,new C.Ee(r,q,p,o==null?"":o)),$async$aeo)
case 3:n=e
if(n==null||t.c==null){w=1
break}t.d3(new C.es8(m,n))
s=t.c.I(x.q).f
r=n.a
if(r.length===0)r="No ending celebration."
else{r=C.agv(r)
r=B.t(r==null?null:r.b)+" will play after your last slide."}s.S(B.b2(null,null,null,null,null,A.r,null,B.d(r,null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$aeo,v)},
a9A(){return this.bLr()},
bLr(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$a9A=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:m={}
l=t.e
if(l!=null){s=l.CW
s=(s==null?"":s).length===0||t.qd()}else s=!0
if(s){w=1
break}s=t.c
s.toString
w=3
return B.b(C.i7i(s,t.f+1,l),$async$a9A)
case 3:r=e
q=$.fVX
$.fVX=!1
if(r==null||t.c==null||t.e!==l){w=1
break}if(r===l){t.d3(new C.eqo())
t.c.I(x.q).f.S(D.eP3)
w=1
break}if(!q){s=r.CW
s=C.hkR(l,s==null?"":s,!1)}else s=!1
if(s){t.d3(new C.eqp(t,l,r))
t.c.I(x.q).f.S(D.eSq)
w=1
break}s=l.cx
if(s==null)s=A.T
p=B.kB(s,B.U(s).c)
s=l.r
m.a=A.d.bd(s,new C.eqq(p))
o=s.length
t.d3(new C.eqr(m,t,l,p,r))
n=s.length-o
s=t.c.I(x.q).f
if(n>0){m=n===1?"":"s"
m="Done \u2014 added "+n+" slide"+m+". Undo brings back the old version."}else m="Done \u2014 your slides are updated. Undo brings back the old version."
s.S(B.b2(null,null,null,null,null,A.r,null,B.d(m,null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a9A,v)},
aPg(d,e){if(e){this.afb()
return}this.cb7(d,!1)},
bH6(){return this.aPg(null,!1)},
afb(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$afb=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.bR(A.bY,null,new C.esN(t),r,!0,!0,!0,A.p0,!1,!1,x.N),$async$afb)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.esO(t,C.i_D(s).pu()))
case 1:return B.h(u,v)}})
return B.i($async$afb,v)},
d3(d){var w=this
if(w.qd())return
w.Ht()
w.aYE()
w.m(d)
w.JP()
w.oc()
w.pg()},
a7B(){this.d3(new C.ep2(this,D.mB))},
aQJ(){var w=this.gdr()
if(w==null)return
this.d3(new C.eqm(this,w))},
aPS(){var w=this.e
if(w==null||w.r.length<=1)return
this.d3(new C.eqk(this))},
b1Q(d,e){if(this.e==null||d===e)return
this.d3(new C.esW(this,d,e))},
NE(d){return this.bJ6(d)},
bJ6(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$NE=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=d.w==="hati_kiapo_uongozi"?3:4
break
case 3:s=d.x
r=A.a.i(s==null?t.gOq():s)
w=5
return B.b(C.ap9(t.a.c,r),$async$NE)
case 5:t.dy.J(0,r.toLowerCase())
case 4:s=d.a
C.aqA(s)
w=6
return B.b(C.b0t(t.a.c,s),$async$NE)
case 6:if(t.c==null){w=1
break}t.m(new C.eqg(t,d))
w=7
return B.b(t.tr(),$async$NE)
case 7:case 1:return B.h(u,v)}})
return B.i($async$NE,v)},
cmj(d,e){var w=this
if(d.z){w.ai3()
return}w.m(new C.esV(w,d,e))
w.pg()},
jN(){var w,v,u,t,s,r=this.gdr()
if(r==null||this.r==null)return null
for(w=r.z,v=w.length,u=this.r,t=0;t<v;++t){s=w[t]
if(s.a===u)return s}return null},
Wa(d){return this.ch.cg(0,d.a,new C.eq6(d))},
asy(d){return this.CW.cg(0,d.a,new C.eqI())},
a1B(d){var w,v,u,t=this,s=t.w
if(s!=null){w=t.X9(s)
v=t.ch.h(0,s)
if(w!=null&&v!=null&&v.a.a!==w.r)w.r=v.a.a}t.w=null
u=$.aW.ak$.d.c
if(u!=null)u.jD()},
b5e(){return this.a1B(!0)},
a1z(d){var w,v,u=this
if(u.qd())return
if(!u.zE())return
w=u.X9(d)
if(w==null||w.b!==D.cQ)return
v=A.a.i(w.r).toLowerCase()
if(v==="click to edit text"||v==="tap to edit text"||v==="double-tap to edit"){w.r=""
u.Wa(w).saV(0,"")}u.m(new C.euD(u,d))
$.aW.x1$.push(new C.euE(u,d,w))},
b5K(d){var w=this
if(d.b===D.cQ&&!w.kb()&&w.zE()){w.a1z(d.a)
return}w.ayV(d.a)},
ayV(d){var w,v,u,t,s,r=this
if(r.kb())return
w=r.r
if(w!=null&&w!==d){v=r.X9(w)
if(v!=null&&v.b===D.cQ){u=r.ch.h(0,w)
if(u!=null&&u.a.a!==v.r)v.r=u.a.a}}t=r.w
s=t!=null&&t!==d
r.m(new C.eu2(r,s,d))
if(s||d==null){t=$.aW.ak$.d.c
if(t!=null)t.jD()}},
aLz(){this.d3(new C.ep3(this))},
oX(d){return this.byh(d)},
byh(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$oX=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(t.o2(),$async$oX)
case 3:s=f
if(!s){w=1
break}if(t.c==null){w=1
break}t.d3(new C.ep0(t,d))
case 1:return B.h(u,v)}})
return B.i($async$oX,v)},
Vj(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Vj=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A4.Gk(78,1920),$async$Vj)
case 3:s=e
if(s==null||t.gdr()==null){w=1
break}t.d3(new C.eoR(t,s))
case 1:return B.h(u,v)}})
return B.i($async$Vj,v)},
Vd(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$Vd=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.gdr()==null){w=1
break}w=3
return B.b(S.CA(t.a.c),$async$Vd)
case 3:s=e
if(t.c==null){w=1
break}r=J.a6(s)
if(r.gam(s)){t.c.I(x.q).f.S(D.eT_)
w=1
break}w=r.gM(s)===1?4:6
break
case 4:q=r.gL(s)
w=5
break
case 6:r=t.c
r.toString
w=7
return B.b(B.bR(null,null,new C.eoO(s),r,!0,!0,!1,null,!1,!1,x.ei),$async$Vd)
case 7:q=e
case 5:if(q==null||t.c==null||t.gdr()==null){w=1
break}t.d3(new C.eoP(t,q))
case 1:return B.h(u,v)}})
return B.i($async$Vd,v)},
ary(){var w=this,v=w.r
if(v==null||w.gdr()==null)return
if(A.d.b5(w.gdr().z,new C.eqi(v))){w.c.I(x.q).f.S(D.eS0)
return}if(w.w===v)w.a1B(!0)
w.d3(new C.eqj(w,v))},
bFm(){var w=this.jN(),v=w==null
if((v?null:w.b)===D.f0)return"Tap a design shape, then pick a color to fill it."
if((v?null:w.b)===D.cQ)return"Selected text \u2014 color applies to this text box."
return"No selection \u2014 color applies to the slide background."},
aMg(d,e){var w=this,v=w.jN(),u=w.gdr(),t=w.e
if(t==null)return
w.d3(new C.epv(w,v,d,e,t,u))},
bzS(d){return this.aMg(d,null)},
a7T(d){return this.bA_(d)},
bA_(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a7T=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=D.a67.t(0,A.a.i(d.a))||t.Q
if(q){w=3
break}else f=q
w=4
break
case 3:w=5
return B.b(t.o2(),$async$a7T)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}s=t.jN()
if(s!=null){r=s.b
if(r===D.cQ)t.bzS(s.w>=28||s.x.gdJ(0)>=A.H.gdJ(0)?d.d:d.e)
else if(r===D.f0){r=d.c
t.aMg(r.j(0.88),r)}w=1
break}t.d3(new C.epA(t,d))
case 1:return B.h(u,v)}})
return B.i($async$a7T,v)},
a7S(d){return this.bzY(d)},
bzY(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a7S=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=t.jN()
r=t.gdr()
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
return B.b(t.o2(),$async$a7S)
case 7:f=!f
case 6:case 4:if(f){w=1
break}if(t.c==null){w=1
break}t.d3(new C.epy(t,s,d,q,r))
case 1:return B.h(u,v)}})
return B.i($async$a7S,v)},
bzI(d){var w=this.gdr()
if(w==null)return
this.d3(new C.epu(this,w,d))},
a_c(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a_c=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(C.i7e(r),$async$a_c)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.oc()
t.m(new C.esx(t,s))
w=4
return B.b(t.tr(),$async$a_c)
case 4:if(t.c!=null)t.aek(s)
case 1:return B.h(u,v)}})
return B.i($async$a_c,v)},
a9s(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a9s=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.e
if(q==null){w=1
break}t.a1B(!0)
t.oc()
s=t.c
s.toString
w=3
return B.b(C.QL(s,q),$async$a9s)
case 3:r=e
s=t.c
if(s==null){w=1
break}s=s.I(x.q).f
s.S(B.b2(null,null,null,null,null,A.r,null,B.d(r==null?"Your video is ready. Check your downloads.":r,null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a9s,v)},
Dm(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Dm=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=r.e
if(m==null){w=1
break}r.oc()
t=4
w=7
return B.b(C.aPj(m),$async$Dm)
case 7:q=e
o=r.c
if(o==null){w=1
break}w=8
return B.b(C.aOI(o,q,m.b),$async$Dm)
case 8:t=2
w=6
break
case 4:t=3
l=s.pop()
p=B.aa(l)
o=r.c
if(o==null){w=1
break}o.I(x.q).f.S(B.b2(null,null,null,null,null,A.r,null,B.d("Could not create PDF: "+B.t(p),null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Dm,v)},
F0(d,e){return this.cyJ(d,e)},
cyJ(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$F0=B.e(function(f,a0){if(f===1)return B.f(a0,v)
for(;;)switch(w){case 0:h={}
if(t.qd()){w=1
break}s=d.w
if(!(s==="hati_kuhowa"||s==="hati_kuhoweya")){w=1
break}h.a=d
if(e){s=t.e
s=s!=null&&s.a===d.a}else s=!1
if(s){t.a1B(!0)
t.oc()
s=h.a=t.e.hC()}else{r=A.d.bd(t.d,new C.euM(d))
s=h.a=r>=0?t.d[r].hC():d.hC()}s=s.w
q=s==null
p=C.i0B(q?"":s)
o=C.hjN(q?"":s)
if(p.length===0){w=1
break}s=t.d
q=B.U(s).k("a2<1>")
n=B.B(new B.a2(s,new C.euN(h,p),q),q.k("J.E"))
s=h.a.b
w=3
return B.b(t.cs4(n.length,o,s),$async$F0)
case 3:m=a0
if(m==null||t.c==null){w=1
break}h.b=null
h.c=!1
w=m==="new"?4:6
break
case 4:s=h.b=C.i0v(h.a)
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
return B.b(t.cs3(n,o),$async$F0)
case 10:a0=g.a=a0
w=8
break
case 9:a0=l
case 8:if(a0==null||t.c==null){w=1
break}k=A.d.iH(t.d,new C.euO(s))
s=h.a.b
w=11
return B.b(t.cs1(k.b,s),$async$F0)
case 11:if(a0!==!0||t.c==null){w=1
break}s=h.b=k.hC()
case 5:j=C.i0A(s,h.a)
s=j.b
if(s===0&&j.a===0&&j.c===0){h=t.c
if(h==null){w=1
break}h.I(x.q).f.S(D.eTa)
w=1
break}w=12
return B.b(t.cs2(j.a,s,o,j.c),$async$F0)
case 12:i=a0
if(t.c==null){w=1
break}t.m(new C.euP(h,t,i))
t.pg()
case 1:return B.h(u,v)}})
return B.i($async$F0,v)},
cs4(d,e,f){var w=this.c
w.toString
return B.bR(A.K,null,new C.eui(this,e,f,d),w,!0,!0,!0,null,!1,!1,x.N)},
cs3(d,e){var w=this.c
w.toString
return B.bR(A.K,null,new C.euh(this,e,d),w,!0,!0,!0,null,!1,!1,x.N)},
cs1(d,e){var w=this.c
w.toString
return B.bR(A.K,null,new C.eub(this,e,d),w,!0,!0,!0,null,!1,!1,x.y)},
cs2(d,e,f,g){var w=this.c
w.toString
return B.bR(A.K,null,new C.eud(this,f,e,d,g),w,!0,!0,!0,null,!1,!1,x.y)},
aaU(){var w=null
return B.av(B.p(w,w,A.f,w,w,new B.o(A.b2,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w)},
aaV(d,e,f,g){var w,v,u=null,t=B.m(16),s=B.aq(d,A.bY,0.35)
s.toString
s=B.a([d,s],x.O)
w=B.a([new B.ac(0,A.G,d.j(0.28),A.dk,18)],x.V)
v=x.p
return B.A(B.a([B.p(u,B.X(e,A.c,u,u,u,28),A.f,u,u,new B.o(u,u,u,t,w,new B.a8(A.ax,A.aC,A.x,s,u,u),A.n),u,54,u,u,u,u,u,54),A.ey,B.E(B.v(B.a([B.d(g,u,u,u,u,u,u,D.f2z,u,u,u),A.an,B.d(f,u,u,u,u,u,u,B.l(u,u,A.c.j(0.58),u,u,u,u,u,u,u,u,13.5,u,u,A.a5,u,1.35,!0,u,u,u,u,u,u,u,u),u,u,u)],v),A.F,u,A.e,A.j,0,A.p),1)],v),A.F,u,A.e,A.j,0,u,u)},
aTY(d,e){var w=null,v=e.j(0.14),u=B.m(12),t=B.I(e.j(0.22),A.q,1)
return B.p(w,B.d(d,w,2,A.a2,w,w,w,A.Ty,A.L,w,w),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.bT,w,w,w)},
aU0(d,e,f,g,h,i,j){var w=null,v=B.m(16),u=B.m(16),t=g?new B.a8(A.ax,A.aC,A.x,B.a([d.j(0.22),d.j(0.08)],x.O),w,w):w,s=g?w:A.c.j(0.05),r=B.I(g?d.j(0.45):A.c.j(0.08),A.q,1),q=d.j(g?0.22:0.14),p=B.m(13),o=x.p
return B.aG(!1,A.a1,!0,w,B.aL(!1,v,!0,B.p(w,B.A(B.a([B.p(w,B.X(f,d,w,w,w,22),A.f,w,w,new B.o(q,w,w,p,w,w,A.n),w,44,w,w,w,w,w,44),A.bf,B.E(B.v(B.a([B.d(i,w,w,w,w,w,w,A.nu,w,w,w),A.cS,B.d(h,w,w,w,w,w,w,B.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,12.5,w,w,A.a5,w,1.25,!0,w,w,w,w,w,w,w,w),w,w,w)],o),A.F,w,A.e,A.j,0,A.p),1),B.X(A.Bs,A.c.j(0.35),w,w,w,14)],o),A.m,w,A.e,A.j,0,w,w),A.f,w,w,new B.o(s,w,r,u,w,t,A.n),w,w,w,w,A.bC,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.erb(e,j),w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ag)},
bW9(d,e,f,g,h,i){return this.aU0(d,e,f,!1,g,h,i)},
atT(d,e){var w=null,v=A.c.j(0.05),u=B.m(14),t=B.I(A.c.j(0.08),A.q,1)
return B.p(w,B.v(B.a([B.d(e,w,w,w,w,w,w,A.dl,w,w,w),A.bB,B.d(d,w,w,w,w,w,w,B.l(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,11,w,w,A.P,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.YE,w,w,w)},
aU_(d,e,f){var w=null,v=B.bm(A.c.j(0.08),w,w,w,A.c,w,A.ck,w,new B.b7(B.m(14),A.Y),w,w,w)
return B.bH(B.d(e,w,w,w,w,w,w,A.ns,w,w,w),new C.era(d,f),v)},
aTZ(d,e){return this.aU_(d,e,null)},
JG(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$JG=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
s=t.a
w=3
return B.b(B.p1(l,s.c,s.d),$async$JG)
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
for(l=A.d.gaf(o.z),n=new B.fe(l,new C.eu3());n.C();){m=l.gT(0).r
if(A.a.i(m).length!==0){m="  \u2022 "+B.aK(m,"\n"," ")+"\n"
q.a+=m}}l=o.c
if(A.a.i(l).length!==0)q.a+="  Notes: "+l+"\n"
l=q.a+="\n"}w=4
return B.b(B.a9u(l.charCodeAt(0)==0?l:l,r.b),$async$JG)
case 4:l=t.a
w=5
return B.b(B.p0(l.c,l.d),$async$JG)
case 5:case 1:return B.h(u,v)}})
return B.i($async$JG,v)},
HO(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$HO=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.c
q.toString
s=t.a
w=3
return B.b(B.p1(q,s.c,s.d),$async$HO)
case 3:if(!e||t.c==null){w=1
break}r=t.e
if(r==null){w=1
break}w=4
return B.b(B.a9u(A.R.ao(r.ag(),null),r.b+".json"),$async$HO)
case 4:q=t.a
w=5
return B.b(B.p0(q.c,q.d),$async$HO)
case 5:case 1:return B.h(u,v)}})
return B.i($async$HO,v)},
b4Y(){var w,v,u=this,t=u.e
if(t==null||t.r.length===0)return
u.oc()
u.tr()
w=u.c
w.toString
v=B.e9(new C.euC(u,t),!1,null,x.z)
B.a5(w,!1).c8(v)},
H1(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$H1=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.o2(),$async$H1)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}w=4
return B.b(C.fDz(),$async$H1)
case 4:s=e
if(s==null||t.e==null||t.c==null){w=1
break}r=C.i3n(s.a)
q=t.c
q.toString
w=5
return B.b(B.bR(A.aB,null,new C.eoW(s,r),q,!0,!0,!1,null,!1,!1,x.N),$async$H1)
case 5:p=e
if(p==null){w=1
break}if(p==="scroll"){t.d3(new C.eoX(t,s))
w=1
break}if(p==="split")t.d3(new C.eoY(t,r,s))
case 1:return B.h(u,v)}})
return B.i($async$H1,v)},
N_(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$N_=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.qd()){w=1
break}w=3
return B.b(t.o2(),$async$N_)
case 3:if(!e){w=1
break}s=t.c
if(s==null){w=1
break}w=4
return B.b(C.aPi(s,null,null),$async$N_)
case 4:r=e
if(r==null||t.gdr()==null){w=1
break}t.d3(new C.ep1(t,r))
case 1:return B.h(u,v)}})
return B.i($async$N_,v)},
b1D(d){var w=this.e
if(w==null||!C.ku(w.w)||w.as!=null)return
w.as=d.b
w.at=d.c.l()},
aNy(){var w,v,u,t,s=this.c
s.toString
w=this.e
v=w==null
u=v?null:w.as
t=v?null:w.at
return C.aPi(s,t==null?null:B.b0(t),u)},
a7z(d){return this.by8(d)},
by8(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a7z=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.qd()){w=1
break}if(!t.zE()){s=t.c
if(s==null){w=1
break}s.I(x.q).f.S(D.eTp)
w=1
break}w=3
return B.b(t.aNy(),$async$a7z)
case 3:r=f
if(r==null||t.gdr()==null){w=1
break}t.d3(new C.eoT(t,r,d))
case 1:return B.h(u,v)}})
return B.i($async$a7z,v)},
afX(d){return this.cl4(d)},
cl4(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$afX=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.qd()){w=1
break}if(!t.zE()){s=t.c
if(s==null){w=1
break}s.I(x.q).f.S(D.eSy)
w=1
break}w=3
return B.b(t.aNy(),$async$afX)
case 3:r=f
if(r==null||t.gdr()==null){w=1
break}t.d3(new C.esT(t,r,d))
case 1:return B.h(u,v)}})
return B.i($async$afX,v)},
c7P(){var w,v,u=this
if(u.kb())return
w=new B.S(Date.now(),0,!1)
v=u.fx
v=v!=null&&w.bz(v).a<=5e5?++u.fr:u.fr=1
u.fx=w
if(v>=3){u.fr=0
u.fx=null
u.cxL()}},
cxL(){var w,v,u,t,s,r=this.gdr()
if(r==null)return
v=r.z
u=v.length
t=0
for(;;){if(!(t<u)){w=null
break}s=v[t]
if(s.db==="marriage_locked_nim_akuna_deni"){w=s
break}++t}if(w==null)return
this.d3(new C.euK(this,r,(A.o.aA(w.Q,24)&255)===0||A.a.i(w.r).length===0))},
bWu(){var w,v,u,t,s,r=this.gdr()
if(r==null)return
for(w=r.z,v=w.length,u=null,t=0;t<v;++t){s=w[t]
if(s.db==="marriage_locked_nim_n_4")u=s}if(u==null)return
this.d3(new C.ere(this,r,u.d))},
c02(d){var w
if(this.kb())return!1
w=this.e
if((w==null?null:C.ku(w.w))!==!0)return!0
w=d.db
if(w==="marriage_locked"||A.a.a0(w,"marriage_locked_"))return!1
if(A.a.a0(w,"marriage_field_"))return!1
if(C.fAa(d))return!1
w=d.db
if(w==="__kiapo_video__"||A.a.a0(w,"__kiapo_video___"))return!1
if(d.b===D.kX&&A.a.a0(w,"marriage_sign_"))return!1
return!1},
c03(d){var w
if(this.kb())return!1
w=this.e
if((w==null?null:C.ku(w.w))!==!0)return!0
if(!this.zE())return!1
w=d.db
if(w==="marriage_locked"||A.a.a0(w,"marriage_locked_"))return!1
if(C.fAa(d))return!1
w=d.db
if(w==="__kiapo_video__"||A.a.a0(w,"__kiapo_video___"))return!1
if(d.b===D.kX&&A.a.a0(w,"marriage_sign_"))return!1
return A.a.a0(w,"marriage_field_")},
N8(d){return this.bAp(d)},
bAp(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$N8=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.qd()){w=1
break}if(!t.zE()){s=t.c
if(s==null){w=1
break}s.I(x.q).f.S(D.eRo)
w=1
break}r=t.e
s=r==null
q=s?null:r.x
p=A.a.i(q==null?"":q)
if(s||p.length===0){w=1
break}w=3
return B.b(C.apd(p),$async$N8)
case 3:o=f
s=t.c
if(s==null){w=1
break}if(o==null||A.a.i(o).length===0){s.I(x.q).f.S(D.eS2)
w=1
break}s=t.e
if(s!==r){s=s==null?null:s.a
s=s!==r.a}else s=!1
if(s){s=r.r
n=s.length===0?null:A.d.gL(s)
if(n!=null)for(s=n.z,q=s.length,m=0;m<q;++m){l=s[m]
k=l.db
if(k==="__kiapo_video__"||A.a.a0(k,"__kiapo_video___")){l.at=o
l.db="__kiapo_video__"}}C.a6R(r)
w=1
break}t.m(new C.epE(t,d,o))
t.oc()
$.aW.x1$.push(new C.epF(t))
case 1:return B.h(u,v)}})
return B.i($async$N8,v)},
Vh(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Vh=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.o2(),$async$Vh)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}w=4
return B.b(C.bC5(),$async$Vh)
case 4:s=e
if(s==null||t.gdr()==null){w=1
break}t.d3(new C.eoQ(t,s))
case 1:return B.h(u,v)}})
return B.i($async$Vh,v)},
NS(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$NS=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.o2(),$async$NS)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}s=t.jN()
if(s==null||s.at==null){w=1
break}r=s.at
r.toString
w=4
return B.b(C.fDq(r),$async$NS)
case 4:q=e
if(q==null){w=1
break}t.d3(new C.eqG(s,q))
case 1:return B.h(u,v)}})
return B.i($async$NS,v)},
iS(d){this.d3(new C.eoZ(this,d))},
q3(d){return this.bzB(d)},
bzB(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$q3=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)A:switch(w){case 0:if(d!=="print"&&d!=="present"&&t.qd()){w=1
break}m=!D.aME.t(0,A.a.i(d))
if(m){w=3
break}else f=m
w=4
break
case 3:w=5
return B.b(t.o2(),$async$q3)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}switch(d){case"upload_pdf":t.H1()
w=1
break A
case"sign_paper":t.N_()
w=1
break A
case"hd_photo":t.Vh()
w=1
break A
case"sharpen":t.NS()
w=1
break A
case"print":t.Dm()
w=1
break A
case"rotate":s=t.jN()
if(s!=null)t.d3(new C.ep7(s))
w=1
break A
case"text_box":t.aLz()
w=1
break A
case"picture":t.Vj()
w=1
break A
case"present":t.b4Y()
w=1
break A
case"new_slide":t.a7B()
w=1
break A
case"export_json":t.HO()
w=1
break A
case"outline_share":t.JG()
w=1
break A
case"flashcard_tool":t.v2(D.HD)
w=1
break A
case"quiz_tool":t.v2(D.HE)
w=1
break A
case"worksheet_tool":t.v2(D.HF)
w=1
break A
case"duplicate_el":s=t.jN()
if(s==null){w=1
break A}t.d3(new C.ep8(t,s))
w=1
break A
case"delete_el":t.ary()
w=1
break A
case"bring_fwd":s=t.jN()
if(s==null||t.gdr()==null){w=1
break A}t.d3(new C.ep9(t,s))
w=1
break A
case"send_back":s=t.jN()
if(s==null||t.gdr()==null){w=1
break A}t.d3(new C.epk(t,s))
w=1
break A
case"align_left":s=t.jN()
if(s!=null)t.d3(new C.epn(s))
w=1
break A
case"align_center":s=t.jN()
if(s!=null)t.d3(new C.epo(s))
w=1
break A
case"align_right":s=t.jN()
if(s!=null)t.d3(new C.epp(s))
w=1
break A
case"grayscale":case"brighten":t.NS()
w=1
break A
case"flip_h":s=t.jN()
if(s!=null)t.d3(new C.epq(s))
w=1
break A
case"flip_v":s=t.jN()
if(s!=null)t.d3(new C.epr(s))
w=1
break A
case"rectangle":t.oX(D.be)
w=1
break A
case"circle":t.oX(D.eJ)
w=1
break A
case"triangle":t.oX(D.jF)
w=1
break A
case"arrow":t.oX(D.Cy)
w=1
break A
case"line":case"divider":t.oX(D.fr)
w=1
break A
case"word_count":r=t.gdr()
if(r==null){w=1
break A}for(q=A.d.gaf(r.z),p=new B.fe(q,new C.eps()),o=0;p.C();){n=A.a.fD(A.a.i(q.gT(0).r),B.af("\\s+",!0,!1,!1,!1))
o+=new B.a2(n,new C.ept(),B.U(n).k("a2<1>")).gM(0)}t.c.I(x.q).f.S(B.b2(null,null,null,null,null,A.r,null,B.d(""+o+" words on this slide",null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
w=1
break A
case"title":q=C.cC()
t.iS(C.iS(A.L,!1,t.gqh().d.l(),A.aD,40,A.bl,A.u,0.18,q,"Presentation Title",0,D.mC,0.8,0.1,0.28))
w=1
break A
case"subtitle":q=C.cC()
t.iS(C.iS(A.L,!1,t.gqh().e.l(),A.aD,22,A.bl,A.a5,0.12,q,"Subtitle goes here",0,D.dd,0.8,0.1,0.48))
w=1
break A
case"bullets":t.iS(C.iS(A.bg,!0,4279310375,A.aD,20,A.bl,A.a5,0.5,C.cC(),"\u2022 First point\n\u2022 Second point\n\u2022 Third point",0,D.ud,0.8,0.1,0.22))
w=1
break A
case"numbered":t.iS(C.iS(A.bg,!1,4279310375,A.aD,20,A.bl,A.a5,0.5,C.cC(),"1. First item\n2. Second item\n3. Third item",0,D.uc,0.8,0.1,0.22))
w=1
break A
case"quote":t.iS(C.iS(A.L,!1,4279310375,A.aD,24,A.cF,A.a5,0.25,C.cC(),'"Insert meaningful quote here."',0,D.dd,0.8,0.1,0.3))
w=1
break A
case"citation":t.iS(C.iS(A.bg,!1,4284773515,A.aD,14,A.bl,A.a5,0.1,C.cC(),"Author, Title (Year). Publisher.",0,D.ud,0.8,0.1,0.78))
w=1
break A
case"date_stamp":t.iS(C.iS(A.dM,!1,4279310375,A.aD,14,A.bl,A.a5,0.08,C.cC(),C.bC7(),0,D.dd,0.24,0.72,0.04))
w=1
break A
case"page_number":t.iS(C.iS(A.dM,!1,4279310375,A.aD,13,A.bl,A.a5,0.06,C.cC(),"Page "+(t.f+1),0,D.dd,0.18,0.78,0.9))
w=1
break A
case"header_bar":t.d3(new C.epa(t))
w=1
break A
case"footer_bar":t.d3(new C.epb(t))
w=1
break A
case"highlight":t.d3(new C.epc(t))
w=1
break A
case"redact":t.d3(new C.epd(t))
w=1
break A
case"callout":t.d3(new C.epe(t))
w=1
break A
case"checkboxes":t.iS(C.iS(A.bg,!1,4279310375,A.aD,20,A.bl,A.a5,0.45,C.cC(),"\u2610 Task one\n\u2610 Task two\n\u2610 Task three",0,D.dd,0.8,0.1,0.2))
w=1
break A
case"table":t.iS(C.iS(A.bg,!1,4279310375,A.aD,16,A.bl,A.a5,0.55,C.cC(),"Column A\tColumn B\tColumn C\nRow 1\tData\tData\nRow 2\tData\tData",0,D.dd,0.8,0.1,0.18))
w=1
break A
case"memo":t.d3(new C.epf(t))
w=1
break A
case"letter":t.iS(C.iS(A.bg,!1,4279179050,A.aD,17,A.bl,A.a5,0.82,C.cC(),C.bC7()+"\n\nDear [Name],\n\n[Letter body]\n\nSincerely,\n[Your name]",0,D.dd,0.8,0.1,0.08))
w=1
break A
case"agenda":t.iS(C.iS(A.bg,!1,4279310375,A.aD,22,A.bl,A.P,0.76,C.cC(),"AGENDA\n\n1. Welcome\n2. Updates\n3. Discussion\n4. Action items\n5. Next steps",0,D.ud,0.8,0.1,0.12))
w=1
break A
case"toc":t.iS(C.iS(A.bg,!1,4279310375,A.aD,18,A.bl,A.a5,0.76,C.cC(),"TABLE OF CONTENTS\n\n1. Introduction .......... 1\n2. Main topic .......... 3\n3. Conclusion .......... 8",0,D.dd,0.8,0.1,0.12))
w=1
break A
case"sig_line":t.iS(C.iS(A.bg,!1,4279310375,A.aD,16,A.bl,A.a5,0.08,C.cC(),"Signature: _________________________",0,D.dd,0.8,0.1,0.78))
w=1
break A
case"initial_line":t.iS(C.iS(A.bg,!1,4279310375,A.aD,16,A.bl,A.a5,0.08,C.cC(),"Initials: ______",0,D.dd,0.3,0.65,0.78))
w=1
break A
case"approved":t.iS(C.iS(A.L,!1,4278556265,A.aD,28,A.bl,A.u,0.12,C.cC(),"APPROVED",0,D.mC,0.32,0.62,0.08))
w=1
break A
case"draft":t.iS(C.iS(A.L,!1,4292617766,A.aD,28,A.bl,A.u,0.12,C.cC(),"DRAFT",0,D.dd,0.32,0.62,0.08))
w=1
break A
case"confidential":t.iS(C.iS(A.L,!1,871318596,A.aD,36,A.bl,A.u,0.12,C.cC(),"CONFIDENTIAL",0,D.dd,0.8,0.1,0.42))
w=1
break A
case"sticky":t.d3(new C.epg(t))
w=1
break A
case"progress":t.d3(new C.eph(t))
w=1
break A
case"stars":t.iS(C.iS(A.L,!1,4279310375,A.aD,36,A.bl,A.a5,0.12,C.cC(),"\u2605\u2605\u2605\u2605\u2606",0,D.q6,0.8,0.1,0.4))
w=1
break A
case"equation":t.iS(C.iS(A.L,!1,4279310375,A.aD,32,A.bl,A.P,0.14,C.cC(),"y = mx + b",0,D.dd,0.8,0.1,0.38))
w=1
break A
case"timeline":t.iS(C.iS(A.L,!1,4279310375,A.aD,18,A.bl,A.a5,0.2,C.cC(),"2024 \u2500\u2500\u25ba 2025 \u2500\u2500\u25ba 2026\nPhase 1    Phase 2    Phase 3",0,D.uc,0.8,0.1,0.35))
w=1
break A
case"two_col":t.d3(new C.epi(t))
w=1
break A
case"compare":t.d3(new C.epj(t))
w=1
break A
case"link_text":t.iS(C.iS(A.bg,!1,4280640491,A.mH,16,A.bl,A.a5,0.1,C.cC(),"https://example.com",0,D.dd,0.8,0.1,0.5))
w=1
break A
case"phone":t.iS(C.iS(A.bg,!1,4279310375,A.aD,18,A.bl,A.a5,0.1,C.cC(),"(555) 123-4567",0,D.dd,0.8,0.1,0.5))
w=1
break A
case"email":t.iS(C.iS(A.bg,!1,4280640491,A.aD,18,A.bl,A.a5,0.1,C.cC(),"name@email.com",0,D.dd,0.8,0.1,0.5))
w=1
break A
case"qr_placeholder":t.d3(new C.epl(t))
w=1
break A
case"cover_page":r=t.gdr()
if(r==null){w=1
break A}t.d3(new C.epm(t,r))
w=1
break A
case"invoice":t.iS(C.iS(A.bg,!1,4279179050,A.aD,16,A.bl,A.a5,0.84,C.cC(),"INVOICE #001\n\nBill To:\nItem\tQty\tPrice\nService A\t1\t$100\nTOTAL\t\t$100",0,D.dd,0.8,0.1,0.08))
w=1
break A
case"resume":t.iS(C.iS(A.bg,!1,4279179050,A.aD,17,A.bl,A.a5,0.84,C.cC(),"YOUR NAME\nJob Title\n\nExperience\n\u2022 Role at Company\n\nEducation\n\u2022 Degree",0,D.dd,0.8,0.1,0.08))
w=1
break A
case"minutes":t.iS(C.iS(A.bg,!1,4279310375,A.aD,16,A.bl,A.a5,0.88,C.cC(),"MEETING MINUTES\nDate: "+C.bC7()+"\nAttendees:\n\nDiscussion:\n\nDecisions:\n\nAction items:",0,D.dd,0.8,0.1,0.06))
w=1
break A
case"lab_report":t.iS(C.iS(A.bg,!1,4279310375,A.aD,17,A.bl,A.a5,0.88,C.cC(),"LAB REPORT\n\nHypothesis:\n\nProcedure:\n\nResults:\n\nConclusion:",0,D.dd,0.8,0.1,0.06))
w=1
break A
case"rubric":t.iS(C.iS(A.bg,!1,4279310375,A.aD,15,A.bl,A.a5,0.8,C.cC(),"RUBRIC\nCriteria\tExcellent\tGood\tNeeds work\nContent\t4\t3\t2\nOrganization\t4\t3\t2",0,D.dd,0.8,0.1,0.1))
w=1
break A}case 1:return B.h(u,v)}})
return B.i($async$q3,v)},
crw(d){if(!this.y)return!1
if(this.w!=null)return!1
if(!d)return!0
return!D.eKi.t(0,this.z)},
crv(d){if(this.jN()==null)return!1
if(this.w!=null)return!1
if(d)return!1
return this.as},
b6A(d,e,f,g,h,i){var w,v,u,t,s,r,q,p=null,o=d===D.cm,n=o?12:10
if(e)w=f.j(0.25)
else w=g?A.c.j(0.06):A.w.j(0.04)
v=B.m(12)
u=e?f:A.bF
u=B.I(u,A.q,o&&e?2:1)
t=C.i3c(d)
s=o?12:18
r=o?A.H:A.cN
if(o)if(e)q=f
else q=g?A.ad:A.ak
else q=p
n=B.a([B.p(p,B.d(t,p,p,p,p,p,p,B.l(p,p,q,p,p,p,p,p,p,p,p,s,p,p,r,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),A.f,p,p,new B.o(w,p,u,v,p,p,A.n),p,p,p,p,new B.Q(n,8,n,8),p,p,p)],x.p)
if(i)n.push(B.ao(p,B.p(p,D.NF,A.f,p,p,D.DO,p,12,p,p,p,p,p,12),p,p,p,-2,-2,p))
return new B.D(A.fy,B.aE(p,new B.an(A.W,p,A.aa,A.f,n,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,h,p,p,p,p,p,p,!1,A.a8),p)},
bLH(d){var w,v=null,u=this.jN()
if(u==null)return A.bH
w=B.a([A.ab,B.d("Anim:",v,v,v,v,v,v,B.l(v,v,d?A.az:A.ak,v,v,v,v,v,v,v,v,10,v,v,A.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.bp],x.p)
A.d.v(w,new B.K(D.Q8,new C.eqF(this,u,d),x.bR))
return B.A(w,A.m,v,A.e,A.j,0,v,v)},
v2(d){return this.byg(d)},
byg(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$v2=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=D.aMy.t(0,d)
if(s){w=3
break}else f=s
w=4
break
case 3:w=5
return B.b(t.o2(),$async$v2)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}t.d3(new C.ep_(t,d))
case 1:return B.h(u,v)}})
return B.i($async$v2,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
if(h.x)return D.eJ4
w=h.e
if(w==null)return h.bC3()
v=h.gdr()
v.toString
u=h.c
u.toString
t=B.P(u).ax.a===A.I
u=h.c
u.toString
s=x.w
r=B.aI(u,A.bU,s).w.a.a<900
q=!r
u=h.c
u.toString
p=B.aI(u,A.eD,s).w.f.d>40
s=h.w==null
o=!s
u=!p
n=!u||o
m=t?A.bY:D.b9s
l=x.p
k=B.a([],l)
if(s){j=h.e
j=j!=null&&j.gRS()}else j=!1
if(j)k.push(new C.a7l(h.a.c,!1,h.e.gb8M(),h.gc7M(),g))
else if(s&&h.e!=null&&!h.kb()&&C.cdR(h.e.w)){j=h.a
k.push(new C.a7l(j.c,j.d,g,h.gc8V(),g))}if(s)k.push(h.bLD(w,t,r))
if(s&&h.kb()){w=t?A.fm:A.ki
j=B.m(14)
i=B.I(A.bj.j(0.35),A.q,1)
k.push(B.p(g,B.A(B.a([D.bKh,A.ab,B.E(B.d("Received copy \u2014 view, print, or download only. Editing is turned off.",g,g,g,g,g,g,B.l(g,g,t?A.c:A.fm,g,g,g,g,g,g,g,g,12,g,g,A.P,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),1)],l),A.m,g,A.e,A.j,0,g,g),A.f,g,g,new B.o(w,g,i,j,g,g,A.n),g,g,g,A.AW,A.ic,g,g,g))}w=!n
if(w&&!h.kb())k.push(h.c0Z(t,r))
if(w&&h.kb())k.push(h.cyK(t))
if(r&&h.jN()!=null&&w&&!h.kb())k.push(h.c0V(t))
j=B.a([],l)
if(q&&w)j.push(new B.a7(132,g,h.b4t(t,!0),g))
i=B.a([],l)
if(r&&w)i.push(new B.a7(g,72,h.b4t(t,!1),g))
i.push(B.E(new B.bI(A.b_,g,g,h.bDl(v,t,!s||p),g),1))
if(h.crw(r)&&u&&s&&!h.kb())i.push(h.c7A(v,t,r))
j.push(B.E(B.v(i,A.m,g,A.e,A.j,0,A.p),1))
if(q&&!h.kb()&&h.crv(!1))j.push(new B.a7(240,g,h.bOf(t),g))
k.push(B.E(B.A(j,A.aj,g,A.e,A.j,0,g,g),1))
if(u&&s)k.push(new B.a7(g,r?72:h.a.e,g,g))
w=B.a([B.v(k,A.m,g,A.e,A.j,0,A.p)],l)
if(o&&r)w.push(h.c0W(t))
return B.c8(g,m,B.bl(!1,new B.an(A.W,g,A.aa,A.r,w,g),!0,!1,A.af,!0,!0),g,!1,!1,g,!1)},
bC3(){var w,v,u,t,s,r=this,q=null,p=r.c
p.toString
w=B.P(p).ax.a===A.I
p=w?A.bY:A.bL
v=r.a.e
u=r.c6Q(A.bj,A.pO,new C.epI(r),r.gcb4(),"School & document toolkit \u2014 edit PDFs, photos, sign papers, present, and build class decks","NGMY SLIDES")
t=x.p
s=B.A(B.a([B.E(r.aLh(A.bj,A.hy,"Blank Presentation",new C.epJ(r)),1),A.av,B.E(r.aLh(A.aZ,A.vI,"Class Template",new C.epK(r)),1)],t),A.m,q,A.e,A.j,0,q,q)
u=B.a([u,A.by,s,A.mG,B.d("YOUR PRESENTATIONS",q,q,q,q,q,q,B.l(q,q,w?A.az:A.ak,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1.2,q,q,q,q,q,q),q,q,q),A.ac],t)
t=r.d
if(t.length===0)u.push(r.bz3(w))
else{t=new B.hY(t,B.U(t).k("hY<1>"))
A.d.v(u,t.gdK(t).dt(0,new C.epL(r,w),x.l))}return B.c8(q,p,B.bl(!1,B.cz(u,q,new B.Q(18,12,18,v),q,q,A.ah,!1),!0,!1,A.af,!0,!0),q,!1,!1,q,q)},
bJV(){this.m(new C.eql(this))
var w=this.c
w.toString
if(B.aI(w,A.bU,x.w).w.a.a<900){w=$.aW.ak$.d.c
if(w!=null)w.jD()}},
aeD(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$aeD=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.jN()==null){w=1
break}s=t.c
s.toString
s=B.P(s)
r=t.c
r.toString
w=3
return B.b(B.bR(A.K,null,new C.esw(t,s.ax.a===A.I),r,!0,!0,!0,null,!1,!1,x.H),$async$aeD)
case 3:case 1:return B.h(u,v)}})
return B.i($async$aeD,v)},
AE(d,e){return this.crS(d,e)},
crS(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$AE=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:j=r.c
j.toString
w=3
return B.b(B.hS(D.Wh,!0,"Dismiss",j,new C.eu4(),new C.eu5(d,e),A.ix,!0,x.N),$async$AE)
case 3:o=g
if(o==null||r.c==null){w=1
break}j=o==="rename"
if(j||o==="duplicate")if(d.z){r.ai3()
w=1
break}n=o==="transfer_hati"
if(n&&d.z&&!d.gRS()){r.ai3()
w=1
break}w=o==="pdf"?4:6
break
case 4:t=8
w=11
return B.b(C.aPj(d),$async$AE)
case 11:q=g
j=r.c
if(j==null){w=1
break}w=12
return B.b(C.aOI(j,q,d.b),$async$AE)
case 12:t=2
w=10
break
case 8:t=7
i=s.pop()
p=B.aa(i)
j=r.c
if(j==null){w=1
break}j.I(x.q).f.S(B.b2(null,null,null,null,null,A.r,null,B.d("Could not create PDF: "+B.t(p),null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
w=10
break
case 7:w=2
break
case 10:w=5
break
case 6:w=n?13:15
break
case 13:w=16
return B.b(r.F0(d,!1),$async$AE)
case 16:w=14
break
case 15:w=o==="delete"?17:19
break
case 17:j=r.c
j.toString
w=20
return B.b(B.hS(D.Wh,!0,"Dismiss",j,new C.eu6(),new C.eu7(d),A.a1,!0,x.y),$async$AE)
case 20:if(g===!0)r.NE(d)
w=18
break
case 19:w=j?21:23
break
case 21:w=24
return B.b(r.afG("Rename presentation",d.b),$async$AE)
case 24:l=g
if(l!=null)r.cmj(d,l)
w=22
break
case 23:if(o==="duplicate"){k=d.ag()
k.n(0,"id",C.cC())
k.n(0,"name",d.b+" (Copy)")
r.m(new C.eu8(r,k))
r.pg()}case 22:case 18:case 14:case 5:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$AE,v)},
b_u(d,e){var w=null
return B.bK(!1,D.fqY,w,w,!0,w,w,e,w,B.fv(w,w,w,w,w,w,w,w,w,w,w,A.bj,w,w,w,A.au,w,A.lJ,w,w,w,w,w,A.k0,w,w))},
bz3(d){var w=this.fy
w===$&&B.c()
return B.c6(w,new C.ep4(this,d),null)},
bI0(d,e,f){var w=new B.K(B.a(d.split(" \u2022 "),x.s),new C.eq9(),x.dv).c_(0,new C.eqa()),v=B.B(w,w.$ti.k("J.E"))
return new B.D(G.agq,this.aLR(v,e,new C.eqb(),f),null)},
aLR(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=x.p,l=B.a([],m)
for(w=f!=null,v=0;v<d.length;++v){u=B.a([],m)
if(v>0)u.push(A.ec)
t=e.j(g?0.14:0.1)
s=new B.aT(6,6)
r=new B.ay(e.j(g?0.55:0.45),1,A.q,-1)
q=B.a([],m)
if(w){p=f.$1(d[v])
A.d.v(q,B.a([B.X(p,g?A.ad:A.bv,n,n,n,10),A.qd],m))}p=d[v]
o=g?A.c.j(0.85):A.aK
q.push(new B.x(p,n,new B.G(!0,o,n,n,n,n,9.5,A.H,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n,n,n,n,1,n,n))
u.push(B.p(n,new B.cn(A.aO,A.e,A.Q,A.m,n,A.p,n,0,q,n),A.f,n,n,new B.o(t,n,new B.bO(r,r,r,r),new B.bp(s,s,s,s),n,n,A.n),n,n,n,n,A.nc,n,n,n))
A.d.v(l,u)}return B.f4(A.a3,B.A(l,A.m,n,A.e,A.Q,0,n,n),A.f,A.eh)},
bz1(d,e,f){return this.aLR(d,e,null,f)},
bI2(d,e,f){var w,v=d.w
if(v==="hati_kuhowa")w=D.daB
else if(v==="hati_kuhoweya")w=D.cXU
else{if(v==="hati_kiapo_uongozi")v=D.cKU
else v=C.ku(v)?D.cRV:A.PK
w=v}v=this.fy
v===$&&B.c()
return B.c6(v,new C.eqe(this,f,d,e,w),null)},
c0W(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.jN()
if(i==null||i.b!==D.cQ)return A.bH
w=k.Wa(i)
v=k.asy(i)
u=A.w.j(0.55)
t=x.p
s=B.bl(!1,new B.D(A.AZ,B.A(B.a([B.d("Edit text",j,j,j,j,j,j,B.l(j,j,A.c.j(0.9),j,j,j,j,j,j,j,j,15,j,j,A.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),A.b6,B.bK(!1,D.fmH,j,j,!0,j,j,new C.erF(k),j,j)],t),A.m,j,A.e,A.j,0,j,j),j),!0,!1,A.af,!0,!0)
r=d?A.aB:A.c
q=B.m(18)
p=B.I(A.bj.j(0.45),A.q,1)
o=B.a([new B.ac(0,A.G,A.w.j(0.25),A.J,20)],x.V)
n=i.x
m=i.y
l=i.z
r=B.E(new B.D(A.h7,B.c_(new B.D(A.eP,B.aM(j,A.T,!0,j,!0,A.r,j,B.aN(),w,A.bj,j,j,j,j,2,D.bQe,A.y,!0,j,!0,j,!0,v,A.ai,j,j,j,j,j,A.wf,j,j,j,j,j,j,!1,"\u2022",j,new C.erG(k,i),j,j,j,!1,j,j,!1,j,!0,j,A.a9,j,j,j,j,j,j,j,j,j,j,j,B.l(j,j,d?A.c:A.M,j,l,j,j,j,j,j,j,18,m,j,n,j,1.35,!0,j,j,j,j,j,j,j,j),!0,A.a4,A.zq,A.am,j,A.SZ,j,j),j),new B.o(r,j,p,q,o,j,A.n),A.bd),j),1)
q=B.m(16)
p=d?A.bm:A.c
o=B.I(d?A.aK:A.aL,A.q,1)
n=B.E(B.cd(B.A(B.a([k.tP(G.ME,j,new C.erH(k,i),d),k.tP(G.ZO,j,new C.erI(k,i),d),k.tP(I.akH,j,new C.erJ(k,i),d),k.tP(I.a_u,j,new C.erK(k,i),d),k.tP(k.bz_(i.as),j,new C.erL(k,i),d),k.tP(D.alR,j,new C.erM(k,i),d),k.tP(D.alQ,j,new C.erN(k,i),d)],t),A.m,j,A.e,A.j,0,j,j),A.r,j,A.y,j,j,j,j,A.aO),1)
m=A.k.N(i.w)
return B.bZ(0,B.aG(!1,A.a1,!0,j,B.v(B.a([s,r,new B.D(N.agz,B.p(j,B.A(B.a([n,A.ab,B.d(""+m+" pt",j,j,j,j,j,j,B.l(j,j,d?A.az:A.ak,j,j,j,j,j,j,j,j,11,j,j,A.H,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),A.d9],t),A.m,j,A.e,A.j,0,j,j),A.f,j,j,new B.o(p,j,o,q,j,j,A.n),j,j,j,j,A.lf,j,j,j),j)],t),A.m,j,A.e,A.j,0,A.p),A.f,u,0,j,j,j,j,j,A.ag),0,0,0)},
c0V(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.jN()
if(m==null)return A.bH
w=m.b
v=w===D.cQ
u=B.m(18)
t=x.O
t=d?B.a([A.bm,A.M],t):B.a([A.c,A.aP],t)
s=B.I(d?A.aK:A.aL,A.q,1)
r=B.a([new B.ac(0,A.G,A.w.j(0.12),A.cx,16)],x.V)
q=x.p
p=B.a([],q)
if(v)p.push(o.b37(A.jg,"Edit",new C.erq(o,m),d,!0))
if(w===D.lq)p.push(o.b37(A.G5,"Shape & ring",new C.err(o),d,!0))
p.push(o.tP(A.BI,"Format",new C.ers(o),d))
if(v)A.d.v(p,B.a([o.tP(G.ME,n,new C.ert(o,m),d),o.tP(D.alR,n,new C.eru(o,m),d),o.tP(D.alQ,n,new C.erv(o,m),d)],q))
p.push(A.b6)
p.push(o.cpL(A.e5,n,o.gaPQ(),d,!0))
p.push(o.tP(A.hz,"Done",new C.erw(o),d))
return B.p(n,B.A(p,A.m,n,A.e,A.j,0,n,n),A.f,n,n,new B.o(n,n,s,u,r,new B.a8(A.a3,A.a7,A.x,t,n,n),A.n),n,n,n,A.AX,A.lf,n,n,n)},
bz_(d){switch(d.a){case 2:return D.a_r
case 1:case 5:return D.a_t
default:return D.a_s}},
c1M(d){switch(d.a){case 0:case 4:return A.L
case 2:return A.dM
default:return A.bg}},
ayU(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o,n=null
if(i)w=A.ay
else if(h)w=A.c
else{v=g?A.ad:A.aK
w=v}v=B.m(12)
u=B.m(12)
t=h?K.Gq:n
if(h)s=n
else s=g?A.c.j(0.06):A.bL
r=e==null
q=r?10:12
p=x.p
o=B.a([B.X(d,w,n,n,n,16)],p)
if(!r)A.d.v(o,B.a([A.ec,B.d(e,n,n,n,n,n,n,B.l(n,n,w,n,n,n,n,n,n,n,n,12,n,n,A.H,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],p))
return new B.D(A.qW,B.aG(!1,A.a1,!0,n,B.aL(!1,v,!1,B.eE(new B.D(new B.Q(q,8,q,8),B.A(o,A.m,n,A.e,A.Q,0,n,n),n),n,new B.o(s,n,n,u,n,t,A.n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,f,n,n,n,n,n,n,n),A.f,A.K,0,n,n,n,n,n,A.ag),n)},
tP(d,e,f,g){return this.ayU(d,e,f,g,!1,!1)},
b37(d,e,f,g,h){return this.ayU(d,e,f,g,h,!1)},
cpL(d,e,f,g,h){return this.ayU(d,e,f,g,!1,h)},
bLD(d,e,f){var w,v,u,t,s,r,q,p=this,o=null,n=B.m(20),m=x.O
m=e?B.a([A.bm,A.M],m):B.a([A.c,A.mS],m)
w=B.I(e?A.aK:A.pl,A.q,1.2)
v=B.a([new B.ac(0,A.G,A.bj.j(e?0.18:0.1),A.cx,18)],x.V)
u=p.a21(A.eB,"Back",p.gbF6(),e)
t=d.b
s=f?14:15
t=B.d(t,o,1,A.a2,o,o,o,B.l(o,o,e?A.c:A.M,o,o,o,o,o,o,o,o,s,o,o,A.u,o,o,!0,o,-0.2,o,o,o,o,o,o),o,o,o)
s=p.f
r=d.r.length
q=x.p
r=B.a([u,A.d9,B.E(B.A(B.a([new B.dq(1,A.cn,t,o),A.ab,B.d(""+(s+1)+" of "+r,o,1,o,o,o,o,B.l(o,o,e?A.c1:A.ak,o,o,o,o,o,o,o,o,11,o,o,A.P,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],q),A.to,o,A.e,A.j,0,A.cW,o),1)],q)
if(!p.kb()){u=p.a21(A.r8,"Undo",p.ax.length===0?o:p.gcze(),e)
A.d.v(r,B.a([u,p.a21(D.bDQ,"Redo",p.ay.length===0?o:p.gcl0(),e)],q))}r.push(p.a21(A.xW,"PDF",new C.eqy(p),e))
r.push(p.a21(A.hA,"Download as video",new C.eqz(p),e))
if(!p.kb())r.push(B.BF(o,o,B.X(A.nZ,e?A.ad:A.bv,o,o,o,o),new C.eqA(p),A.J,new C.eqB(p),A.af,"More",x.N))
r.push(A.d9)
r.push(B.aG(!1,A.a1,!0,o,B.aL(!1,B.m(14),!0,B.eE(D.e68,o,new B.o(o,o,o,B.m(14),o,K.Gq,A.n),o,o,o),o,!0,o,o,o,o,o,o,o,o,o,o,o,p.gazK(),o,o,o,o,o,o,o),A.f,A.K,0,o,o,o,o,o,A.ag))
return B.p(o,B.A(r,A.m,o,A.e,A.j,0,o,o),A.f,o,o,new B.o(o,o,w,n,v,new B.a8(A.ax,A.aC,A.x,m,o,o),A.n),o,o,o,D.bpN,D.buU,o,o,o)},
cyK(d){var w=this,v=null,u=B.m(18),t=d?A.aB.j(0.92):A.c.j(0.96),s=B.I(d?A.cD:A.aL,A.q,1)
return B.p(v,B.cd(B.A(B.a([w.iB(A.tU,"Print",new C.euQ(w),d),w.iB(A.xW,"Download PDF",new C.euR(w),d),w.iB(A.pU,"Present",w.gazK(),d)],x.p),A.m,v,A.e,A.j,0,v,v),A.r,v,A.y,v,v,v,v,A.aO),A.f,v,v,new B.o(t,v,s,u,v,v,A.n),v,v,v,A.AW,G.aid,v,v,v)},
a21(d,e,f,g){var w,v=null
if(f==null)w=g?A.b2:A.dp
else w=g?A.ad:A.aK
return B.aH(v,v,v,v,B.X(d,w,v,v,v,20),v,v,v,f,v,v,v,v,e,A.cb)},
c0Z(d,e){var w,v,u,t,s,r=this,q=null,p=B.a(["Home","Insert","School","Tools","Design","Transitions","View"],x.s),o=r.e
if(o==null)o=q
else{o=o.CW
o=(o==null?"":o).length!==0}w=o===!0
o=B.m(18)
v=d?A.aB.j(0.92):A.c.j(0.96)
u=B.I(d?A.cD:A.aL,A.q,1)
t=x.f0
t=B.B(new B.K(p,new C.erQ(r,d),t),t.k("ak.E"))
t.push(new B.D(X.ahT,new B.fg(new C.erR(r),q),q))
A.d.v(t,w?B.a([new B.D(R.vp,r.agj(A.lg,"Ending celebration",r.gcbh(),d),q),new B.D(R.vp,r.agj(A.G5,"Logo ring & frame",r.gcbY(),d),q)],x.p):A.ha)
A.d.v(t,w?B.a([new B.D(R.vp,r.agj(A.nf,"Look and feel",r.gcbZ(),d),q),new B.D(R.vp,r.agj(A.oM,"Edit this slide's text",r.gccv(),d),q)],x.p):A.ha)
t.push(new B.D(R.vp,B.hq(B.aE(q,B.p(q,D.eIx,A.f,q,q,new B.o(q,q,q,B.m(999),B.a([new B.ac(0,A.G,O.la.j(0.4),A.J,10)],x.V),D.anP,A.n),q,34,q,q,A.fV,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.erS(r),q,q,q,q,q,q,!1,A.a8),q,"Books \u2014 write and print a fold & staple book",q,q),q))
t=B.cd(B.A(t,A.m,q,A.e,A.j,0,q,q),A.r,q,A.y,q,D.bvm,q,q,A.aO)
s=e?8:10
return B.p(q,B.v(B.a([t,B.cd(r.cnu(d),A.r,q,A.y,q,new B.Q(8,2,8,s),q,q,A.aO)],x.p),A.aj,q,A.e,A.j,0,A.p),A.f,q,q,new B.o(v,q,u,o,q,q,A.n),q,q,q,A.AW,q,q,q,q)},
cnu(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0="Text Box",a1="New Slide",a2="Delete Slide"
switch(e.z){case"School":w=B.a([],x.p)
for(v=0;v<5;++v){u={}
t=D.d4E[v]
u.a=null
s=u.a=t.b
w.push(e.lD(e.cpa(s),t.a,new C.ete(u,e),a3,D.aMy.t(0,s)))}w.push(e.iB(A.kQ,"Notes Slide",new C.etf(e),a3))
w.push(e.lD(A.G4,"Quiz",new C.etg(e),a3,!0))
w.push(e.lD(L.FI,"Worksheet",new C.etr(e),a3,!0))
w.push(e.lD(V.G7,"Flashcard",new C.etC(e),a3,!0))
w.push(e.lD(A.Nv,"Lab Report",new C.etN(e),a3,!0))
w.push(e.lD(A.tO,"Rubric",new C.etU(e),a3,!0))
w.push(e.lD(A.oG,"Minutes",new C.etV(e),a3,!0))
w.push(e.lD(A.nY,"Syllabus",new C.etW(e),a3,!0))
w.push(e.lD(A.Nz,"Timeline",new C.etX(e),a3,!0))
return B.A(w,A.m,d,A.e,A.j,0,d,d)
case"Tools":w=B.a([],x.p)
for(v=0;v<74;++v){r=D.d5R[v]
w.push(e.lD(r.b,r.c,new C.etY(e,r),a3,!D.aME.t(0,A.a.i(r.a))))}return B.A(w,A.m,d,A.e,A.j,0,d,d)
case"Insert":return B.A(B.a([e.iB(A.yg,a0,e.gaLy(),a3),e.iB(A.tR,"Picture",new C.eth(e),a3),e.iB(A.ya,"Bio link",new C.eti(e),a3),e.iB(A.a0_,"Table",new C.etj(e),a3),e.iB(A.Ny,"Sticky",new C.etk(e),a3),e.iB(A.tQ,"Divider",new C.etl(e),a3),e.iB(A.BJ,"Header",new C.etm(e),a3),e.lD(A3.vy,"Rectangle",new C.etn(e),a3,!0),e.lD(A.r0,"Circle",new C.eto(e),a3,!0),e.lD(A.a_j,"Triangle",new C.etp(e),a3,!0),e.lD(A.iV,"Arrow",new C.etq(e),a3,!0),e.lD(D.bCk,"Parallelogram",new C.ets(e),a3,!0),e.lD(D.bEN,"Hexagon",new C.ett(e),a3,!0),e.lD(A.tQ,"Line",new C.etu(e),a3,!0),e.lD(A.xW,"PDF",new C.etv(e),a3,!0),e.lD(O.a08,"Signature",new C.etw(e),a3,!0),e.iB(A2.Bz,"Quote",new C.etx(e),a3),e.iB(D.ZW,a1,new C.ety(e),a3)],x.p),A.m,d,A.e,A.j,0,d,d)
case"Design":w=e.c
w.toString
w=B.aI(w,A.bU,x.w).w
u=x.p
t=B.A(B.a([e.aMn("Wide 16:9",D.Cw,a3),e.aMn("Short 9:16",D.o7,a3),new B.D(A.fy,B.mG(D.bGW,d,D.fj0,d,new C.etz(e),d,d,d,d),d)],u),A.m,d,A.e,A.j,0,d,d)
q=B.A(B.a([e.bFl("This slide",!e.Q,a3,new C.etA(e)),A.bp,e.aOy("All slides",e.Q,a3,new C.etB(e),!0)],u),A.m,d,A.e,A.j,0,d,d)
p=e.bFm()
p=B.d(p,d,d,d,d,d,d,B.l(d,d,a3?A.c1:A.bJ,d,d,d,d,d,d,d,d,10,d,d,A.a5,d,d,!0,d,d,d,d,d,d,d,d),d,d,d)
o=B.d("COLORS",d,d,d,d,d,d,B.l(d,d,a3?A.az:A.ak,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
n=x.cT
n=B.B(new B.K(D.a1W,new C.etD(e),n),n.k("ak.E"))
n=B.cd(B.A(n,A.m,d,A.e,A.j,0,d,d),A.r,d,A.y,d,d,d,d,A.aO)
m=B.d("TEXT COLORS",d,d,d,d,d,d,B.l(d,d,a3?A.az:A.ak,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
l=B.a([],u)
for(v=0;v<10;++v){k=D.d6N[v]
j=B.b0(k)
i=new B.ay(k===4294967295?A.dp:A.b2,1.5,A.q,-1)
l.push(new B.D(A.fy,B.aE(d,B.p(d,d,A.f,d,d,new B.o(j,d,new B.bO(i,i,i,i),d,d,d,A.a6),d,24,d,d,d,d,d,24),A.y,!1,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,new C.etE(e,k),d,d,d,d,d,d,!1,A.a8),d))}l=B.cd(B.A(l,A.m,d,A.e,A.j,0,d,d),A.r,d,A.y,d,d,d,d,A.aO)
j=B.d("SLIDE DESIGNS \xb7 first 5 free",d,d,d,d,d,d,B.l(d,d,a3?A.az:A.ak,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
h=$.bDp()
g=B.U(h).k("K<1,D>")
h=B.B(new B.K(h,new C.etF(e,a3),g),g.k("ak.E"))
return new B.a7(w.a.a-20,d,B.v(B.a([t,A.N,q,A.an,p,A.N,o,A.at,n,A.N,m,A.at,l,A.N,j,A.at,B.cd(B.A(h,A.m,d,A.e,A.j,0,d,d),A.r,d,A.y,d,d,d,d,A.aO),A.an,e.bYR(a3)],u),A.F,d,A.e,A.Q,0,A.p),d)
case"Transitions":f=e.jN()
w=e.c
w.toString
w=B.aI(w,A.bU,x.w).w
u=new C.etd(e)
t=new C.etZ(e,a3)
q=x.p
p=B.a([],q)
if(f!=null){o=B.d("ELEMENT ANIMATION",d,d,d,d,d,d,B.l(d,d,a3?A.az:A.ak,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
n=t.$4(D.Q8,f.dy,new C.etG(e,u,f),A.aZ)
A.d.v(p,B.a([o,A.at,n,A.N,B.d("SLIDE TRANSITION",d,d,d,d,d,d,B.l(d,d,a3?A.az:A.ak,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d),A.at],q))}q=e.gdr()
q=q==null?d:q.r
p.push(t.$4(D.Q8,q,new C.etH(e,u),A.bj))
return new B.a7(w.a.a-20,d,B.v(p,A.F,d,A.e,A.Q,0,A.p),d)
case"View":w=e.y?"Hide Notes":"Show Notes"
return B.A(B.a([e.iB(A.kQ,w,new C.etI(e),a3),e.iB(A.tU,"Print deck",new C.etJ(e),a3),e.lD(D.ajL,"Export JSON",new C.etK(e),a3,!0),e.iB(A.fL,"Duplicate Slide",e.gaQI(),a3),e.iB(A.e5,a2,e.gaPR(),a3),e.cta(a3)],x.p),A.m,d,A.e,A.j,0,d,d)
case"Home":default:f=e.jN()
w=x.p
u=B.a([e.iB(D.ZW,a1,new C.etL(e),a3),e.iB(A.fL,"Duplicate",e.gaQI(),a3),e.iB(A.e5,a2,e.gaPR(),a3),e.iB(A.pU,"Present",e.gazK(),a3),e.iB(A.BH,a0,e.gaLy(),a3),e.iB(A.BC,"Fit Text",new C.etM(e),a3),e.iB(A.xW,"Download PDF",new C.etO(e),a3)],w)
t=e.e
if(t!=null){t=t.w
t=t==="hati_kuhowa"||t==="hati_kuhoweya"}else t=!1
if(t)u.push(e.iB(A.kS,"Transfer",new C.etP(e),a3))
if(f!=null){w=B.a([A.ab,e.iB(G.ME,"Bold",new C.etQ(e,f),a3),e.iB(G.ZO,"Italic",new C.etR(e,f),a3),e.iB(G.ajm,"Underline",new C.etS(e,f),a3),e.iB(Ae.MF,"Bullets",new C.etT(e,f),a3),e.bNZ(f,a3)],w)
if(!A.a.a0(f.db,"__design__"))w.push(e.bLH(a3))
w.push(e.iB(D.bAY,"Delete",e.gaPQ(),a3))
A.d.v(u,w)}return B.A(u,A.m,d,A.e,A.j,0,d,d)}},
aMn(d,e,f){var w,v,u,t=null,s=this.e
s=s==null?t:s.d
w=e===D.o7
v=x.p
u=B.a([B.d(d,t,t,t,t,t,t,G.a7E,t,t,t)],v)
if(w)A.d.v(u,B.a([A.d9,D.bG7],v))
return new B.D(A.fy,B.j5(t,t,t,B.A(u,A.m,t,A.e,A.Q,0,t,t),t,new C.epD(this,w,e),s===e,A.bj.j(0.25),t,t,t),t)},
cta(d){var w,v,u,t,s,r=this,q=null,p=r.gdr()
if(p==null)return A.bH
w=p.w
if(!(w>0)){v=r.e
v=v==null?q:v.e
w=v==null?5:v}v=B.I(d?A.b2:A.cq,A.q,1)
u=B.m(8)
t=B.X(A.FG,d?A.az:A.ak,q,q,q,14)
s=B.aH(q,q,q,q,D.amP,q,q,q,new C.eul(r,p),q,q,q,q,q,A.cb)
return B.p(q,B.A(B.a([t,s,B.d(""+w+"s",q,q,q,q,q,q,B.l(q,q,d?A.c:A.bi,q,q,q,q,q,q,q,q,11,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.aH(q,q,q,q,D.amG,q,q,q,new C.eum(r,p),q,q,q,q,q,A.cb)],x.p),A.m,q,A.e,A.Q,0,q,q),A.f,q,q,new B.o(q,q,v,u,q,q,A.n),q,q,q,A.Fm,A.mn,q,q,q)},
cpa(d){switch(d.a){case 6:return V.G7
case 7:return A.G4
case 8:return L.FI
case 4:return A.BJ
default:return A.kQ}},
bNZ(d,e){var w=null,v=B.I(e?A.b2:A.cq,A.q,1),u=B.m(8),t=B.aH(w,w,w,w,D.amP,w,w,w,new C.eqL(this,d),w,w,w,w,w,A.cb),s=A.k.N(d.w)
return B.p(w,B.A(B.a([t,B.d(""+s,w,w,w,w,w,w,B.l(w,w,e?A.c:A.bi,w,w,w,w,w,w,w,w,w,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aH(w,w,w,w,D.amG,w,w,w,new C.eqM(this,d),w,w,w,w,w,A.cb)],x.p),A.m,w,A.e,A.Q,0,w,w),A.f,w,w,new B.o(w,w,v,u,w,w,A.n),w,w,w,A.xF,A.mn,w,w,w)},
bYR(d){var w=null
return B.BF(B.D4(B.X(A5.ZZ,d?A.ad:A.bv,w,w,w,16),w,w,D.fov,w,w,w),w,w,new C.eri(),A.J,this.gbzH(),A.co,"Slide layout",x.fO)},
lD(d,e,f,g,h){var w=null,v=B.m(14),u=B.m(14),t=g?A.c.j(0.06):A.bL,s=B.I(g?A.dq:A.aL,A.q,1),r=x.p,q=B.a([B.X(d,g?A.dv:A.bj,w,w,w,18)],r)
if(h)q.push(B.ao(w,B.p(w,D.NF,A.f,w,w,D.DO,w,12,w,w,w,w,w,12),w,w,w,-6,-4,w))
return new B.D(A.fy,B.aG(!1,A.a1,!0,w,B.aL(!1,v,!0,B.eE(new B.D(A.h7,B.v(B.a([new B.an(A.W,w,A.aa,A.f,q,w),A.cS,B.d(e,w,w,w,w,w,w,B.l(w,w,g?A.aR:A.bv,w,w,w,w,w,w,w,w,9,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],r),A.m,w,A.e,A.Q,0,A.p),w),w,new B.o(t,w,s,u,w,w,A.n),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ag),w)},
iB(d,e,f,g){return this.lD(d,e,f,g,!1)},
b4t(d,e){var w,v,u=this,t=null,s=u.e
s.toString
w=e?A.ah:A.aO
v=B.hH(t,new C.eux(u,s,e,d),s.r.length,A.co,t,w,new C.euy(e),!1)
s=d?A.aB:A.bL
w=B.a([],x.p)
if(e&&!u.kb())w.push(new B.D(A.co,B.Hq(E.an1,new C.euz(u),B.nw(t,A.bj,t,t,t,t,t,t,t,t,t,t,E.aNg,t,t,t,t),"Add slide"),t))
w.push(B.E(v,1))
return B.p(t,B.v(w,A.m,t,A.e,A.j,0,A.p),A.f,s,t,t,t,t,t,t,t,t,t,t)},
bDl(d,e,f){var w,v=null,u=this.e
if(u==null)w=v
else{u=u.d===D.o7?0.5625:1.7777777777777777
w=u}if(w==null)w=1.7777777777777777
u=f?8:16
return new B.D(new B.Q(u,u,u,u),new B.bI(A.b_,v,v,new B.fG(w,B.aE(v,B.cp(new C.eq1(this,d,e)),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.eq2(this),v,v,v,v,v,v,!1,A.a8),v),v),v)},
bDn(b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=a7.e,b0=(a9==null?a8:C.ku(a9.w))===!0,b1=b0&&C.fAa(b3),b2=b0&&b3.b===D.kX&&A.a.a0(b3.db,"marriage_sign_placed_")
if(b0){a9=b3.db
w=a9==="__kiapo_video__"||A.a.a0(a9,"__kiapo_video___")}else w=!1
if(!a7.kb())v=!b0||a7.c03(b3)
else v=!1
if(!a7.kb())u=!b0||a7.c02(b3)
else u=!1
t=v&&a7.r===b3.a
s=b4/960
a9=b3.db
r=A.a.a0(a9,"__design__")||A.a.a0(b3.a,"design_")?A.ci:A.bj
q=b0&&A.a.a0(a9,"marriage_field_")
if(b0)p=a9==="marriage_locked_nim_akuna_deni"||a9==="marriage_locked_nim_akuna_box"||a9==="marriage_locked_nim_akuna_tick"||a9==="marriage_locked_nim_akuna_hit"
else p=!1
if(w&&C.fYR(b3))o=a8
else if(p&&!a7.kb())o=a7.gc7O()
else o=a7.kb()?a8:new C.epQ(a7,w,b3,b1,b2,v)
a9=b3.a
n=b3.c
m=b3.d
l=b3.e
k=b3.f
j=p?A.c4:A.jy
i=w&&C.fYR(b3)&&a7.zE()?new C.epR(a7,b3):a8
h=v&&b3.b===D.cQ?new C.epS(a7,b3):a8
g=u?new C.epT(a7,b3,b4,b5):a8
f=b3.cx
if(t)if(a7.w===a9)e=A.bo
else e=q?A.bZ:r
else e=A.K
e=B.I(e,A.q,t?2:0)
d=B.m(t?6:0)
if(b1)a0=A.bZ.j(0.08)
else a0=b3.b===D.kX?A.K:a8
if(b1){a1=a7.kb()?"":"Tap to sign"
a1=B.av(B.d(a1,a8,a8,a8,a8,a8,a8,B.l(a8,a8,A.bZ.j(0.7),a8,a8,a8,a8,a8,a8,a8,a8,10*s,a8,a8,A.P,a8,a8,!0,a8,a8,a8,a8,a8,a8,a8,a8),a8,a8,a8),a8,a8,a8)}else{if(a7.w===a9){a1=a7.c
a1.toString
a1=!(B.aI(a1,A.bU,x.w).w.a.a<900)}else a1=!1
a2=w&&a7.zE()
a3=b3.b===D.cQ
a4=a3?a7.Wa(b3):a8
a5=a3?a7.asy(b3):a8
if(a7.w===a9){a6=a7.c
a6.toString
a6=!(B.aI(a6,A.bU,x.w).w.a.a<900)}else a6=!1
a6=a6?new C.epU(a7,b3):a8
a3=v&&a3?new C.epV(a7,b3):a8
a6=C.b0p(q,a4,a1,b3,a5,a2,a3,new C.epW(a7,w,b3,v),a6,s,t,!0)
a1=a6}d=B.a([B.p(a8,a1,A.f,a8,a8,new B.o(a0,a8,e,d,a8,a8,A.n),a8,a8,a8,a8,a8,a8,a8,a8)],x.p)
if(t&&u&&a7.w!==a9){e=B.m(6)
d.push(B.ao(-4,B.aE(a8,B.p(a8,D.bIX,A.f,a8,a8,new B.o(r,a8,B.I(A.c,A.q,1.5),e,a8,a8,A.n),a8,22,a8,a8,a8,a8,a8,22),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.epX(a7,b3,b4,b5),a8,a8,new C.epY(a7,b3),a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,!1,A.a8),a8,a8,a8,-4,a8,a8))}if(b0&&!a7.kb()&&b3.db==="marriage_locked_nim_n_4")d.push(B.ao(a8,B.aE(a8,B.p(a8,D.bJB,A.f,a8,a8,new B.o(A.dA,a8,B.I(A.c,A.q,1.2),a8,B.a([new B.ac(0,A.G,A.w.j(0.25),A.J,4)],x.V),a8,A.a6),a8,20,a8,a8,a8,a8,a8,20),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a7.gbWt(),a8,a8,a8,a8,a8,a8,!1,A.a8),a8,a8,a8,-6,-6,a8))
if(b0&&!a7.kb()&&A.a.a0(b3.db,"marriage_field_tarehe:"))d.push(B.ao(a8,B.aE(a8,B.p(a8,D.bL8,A.f,a8,a8,new B.o(A.bZ,a8,B.I(A.c,A.q,1.2),a8,B.a([new B.ac(0,A.G,A.w.j(0.25),A.J,4)],x.V),a8,A.a6),a8,20,a8,a8,a8,a8,a8,20),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.epZ(a7,b3),a8,a8,a8,a8,a8,a8,!1,A.a8),a8,a8,a8,-6,-6,a8))
e=!1
if(t)if(b3.b===D.cQ)if(a7.w!==a9){e=a7.c
e.toString
e=B.aI(e,A.bU,x.w).w.a.a<900}if(e)d.push(B.ao(-28,B.av(B.aE(a8,B.p(a8,D.fx9,A.f,a8,a8,new B.o(A.bj,a8,a8,B.m(999),B.a([new B.ac(0,A.G,A.w.j(0.2),A.J,8)],x.V),a8,A.n),a8,a8,a8,a8,A.kO,a8,a8,a8),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.eq_(a7,b3),a8,a8,a8,a8,a8,a8,!1,A.a8),a8,a8,a8),a8,a8,0,0,a8,a8))
return B.ao(a8,B.aE(j,B.eG(A.A,f,new B.an(A.W,a8,A.aa,A.f,d,a8),a8),A.y,!1,a8,h,a8,a8,a8,a8,a8,a8,i,a8,a8,a8,a8,a8,a8,g,a8,a8,a8,a8,a8,a8,a8,o,a8,a8,a8,a8,a8,a8,!1,A.a8),k*b5,new B.cx("el_"+a9,x.W),n*b4,a8,m*b5,l*b4)},
aOy(d,e,f,g,h){var w,v,u,t,s,r=null
if(e)w=A.bj.j(0.25)
else w=f?A.c.j(0.06):A.w.j(0.04)
v=B.m(10)
u=B.I(e?A.bj:A.bF,A.q,1)
if(e)t=A.bj
else t=f?A.az:A.ak
s=x.p
t=B.a([B.d(d,r,r,r,r,r,r,B.l(r,r,t,r,r,r,r,r,r,r,r,10,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],s)
if(h)A.d.v(t,B.a([A.d9,B.p(r,D.NF,A.f,r,r,D.DO,r,12,r,r,r,r,r,12)],s))
return B.aE(r,B.p(r,B.A(t,A.m,r,A.e,A.Q,0,r,r),A.f,r,r,new B.o(w,r,u,v,r,r,A.n),r,r,r,r,A.h6,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,g,r,r,r,r,r,r,!1,A.a8)},
bFl(d,e,f,g){return this.aOy(d,e,f,g,!1)},
c7A(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=d.a
if(m.cy!==k){m.cy=k
w=m.cx
v=w.h(0,k)
if(v!=null){v.U$=$.aw()
v.P$=0}v=d.c
w.n(0,k,new B.ar(new B.bb(v,A.b4,A.aN),$.aw()))}k=m.cx.h(0,k)
k.toString
w=f?8:10
v=f?8:10
u=e?A.aB:A.aP
t=f?A.wF:l
if(f)s=new B.bO(new B.ay(e?A.bF:A.aL,1,A.q,-1),A.Y,A.Y,A.Y)
else s=l
r=f?B.a([new B.ac(0,A.G,A.w.j(0.12),A.rs,16)],x.V):l
q=x.p
p=B.A(B.a([B.d("Speaker Notes",l,l,l,l,l,l,B.l(l,l,e?A.ad:A.bv,l,l,l,l,l,l,l,l,12,l,l,A.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),A.b6,m.b_u(e,new C.erU(m))],q),A.m,l,A.e,A.j,0,l,l)
o=B.l(l,l,e?A.c:A.aK,l,l,l,l,l,l,l,l,12,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
n=B.l(l,l,e?A.c1:A.bJ,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
return B.p(l,B.v(B.a([p,A.an,B.E(B.aM(l,A.T,!1,l,!0,A.r,l,B.aN(),k,l,l,l,l,l,2,B.br(l,new B.b4(4,B.m(10),A.dg),l,A.bT,l,l,l,l,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,n,"Speaker notes for this slide\u2026",l,l,l,l,l,!0,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ai,l,l,l,l,l,l,l,l,l,2,l,l,!1,"\u2022",l,new C.erV(m,d),l,l,l,!1,l,l,!1,l,!0,l,A.a9,l,l,l,l,l,l,l,l,l,l,l,o,!0,A.a4,l,A.am,l,l,l,l),1)],q),A.aj,l,A.e,A.j,0,A.p),A.f,l,l,new B.o(u,l,s,t,r,l,A.n),l,96,l,l,new B.Q(12,w,12,v),l,l,l)},
aS_(a3,a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=null,a2=a0.jN()
if(a2==null)return A.bH
w=new C.eqZ(a0,a6)
v=B.a([4279310375,4294967295,4280640491,4278556265,4292617766,4286331629,4293548044,4281549141],x.t)
u=A.k.D(1-a2.c,0.06,1)
t=A.k.D(1-a2.d,0.06,1)
s=A.k.D(1-a2.e,0.01,1)
r=A.k.D(1-a2.f,0.01,1)
q=a5?A.dQ:a1
p=x.p
o=B.a([],p)
n=!a5
if(n)o.push(B.A(B.a([B.d("Format",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.c:A.M,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,A.u,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),A.b6,a0.b_u(a3,a0.gbJU())],p),A.m,a1,A.e,A.j,0,a1,a1))
if(n)o.push(A.S)
o.push(B.d("Size",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.az:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1))
o.push(B.A(B.a([D.fjv,B.E(B.kX(a1,a1,a1,u,0.05,new C.er_(w,a2),A.k.D(a2.e,0.05,u)),1)],p),A.m,a1,A.e,A.j,0,a1,a1))
o.push(B.A(B.a([D.fvC,B.E(B.kX(a1,a1,a1,t,0.05,new C.er0(w,a2),A.k.D(a2.f,0.05,t)),1)],p),A.m,a1,A.e,A.j,0,a1,a1))
n=a2.b
m=n===D.cQ
if(m)o.push(B.A(B.a([D.fdr,B.E(B.kX(a1,a1,a1,96,10,new C.er1(w,a2),A.k.D(a2.w,10,96)),1)],p),A.m,a1,A.e,A.j,0,a1,a1))
l=n===D.lq
if(l||n===D.kX||n===D.Rr)A.d.v(o,B.a([B.d("Crop / position",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.az:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),B.A(B.a([D.fpc,B.E(B.kX(a1,a1,a1,s,0,new C.er2(w,a2),A.k.D(a2.c,0,s)),1)],p),A.m,a1,A.e,A.j,0,a1,a1),B.A(B.a([D.fwT,B.E(B.kX(a1,a1,a1,r,0,new C.er3(w,a2),A.k.D(a2.d,0,r)),1)],p),A.m,a1,A.e,A.j,0,a1,a1)],p))
if(l){l=B.d("Shape (frame)",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.az:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
k=B.a([],p)
for(j=0;j<7;++j){i={}
h=D.BY[j]
i.a=null
g=h.a
i.a=g
k.push(B.j5(a1,a1,a1,new B.x(h.b,a1,A.qi,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,new C.er4(i,w,a2),a2.go===g,a1,a1,a1,a1))}k=B.bW(A.bz,k,A.bq,6,6)
i=B.d("Ring",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.az:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
h=B.a([],p)
for(j=0;j<11;++j){f={}
e=D.BT[j]
f.a=null
g=e.a
f.a=g
h.push(B.j5(a1,a1,a1,new B.x(e.b,a1,A.qi,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,new C.er5(f,w,a2),a2.id===g,a1,a1,a1,a1))}A.d.v(o,B.a([A.N,l,A.an,k,A.N,i,A.an,B.bW(A.bz,h,A.bq,6,6)],p))}o.push(A.N)
if(m){m=B.d("Text color",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.az:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
l=x.gN
l=B.B(new B.K(v,new C.er6(w,a2),l),l.k("ak.E"))
k=x.fw
A.d.v(o,B.a([m,A.an,B.bW(A.bz,l,A.bq,6,6),A.ac,B.h9P(new C.er7(w,a2),D.cmd,B.et([a2.as],k),!0,a1,k)],p))}if(n===D.f0){n=B.d("Fill",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.az:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
m=x.gN
m=B.B(new B.K(v,new C.er8(w,a2),m),m.k("ak.E"))
A.d.v(o,B.a([n,B.bW(A.bz,m,A.bq,0,6)],p))}o.push(A.ac)
o.push(B.dk(D.bKV,D.fr8,new C.er9(a0,a5),B.bm(A.bI,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1)))
d=B.cz(o,a1,a1,q,a1,A.ah,a5)
if(a5)return d
q=a3?A.cD:A.c
p=a4?A.wF:a1
if(a4)o=new B.bO(new B.ay(a3?A.bF:A.aL,1,A.q,-1),A.Y,A.Y,A.Y)
else o=a1
return B.p(a1,d,A.f,a1,a1,new B.o(q,a1,o,p,a4?B.a([new B.ac(0,A.G,A.w.j(0.12),A.rs,16)],x.V):a1,a1,A.n),a1,a1,a1,a1,A.F5,a1,a1,a1)},
bOf(d){return this.aS_(d,!1,!1,null)},
c6Q(d,e,f,g,h,i){var w,v,u,t,s,r=this,q=null,p=r.fy
p===$&&B.c()
p=B.c6(p,new C.erc(r,f,d,e),q)
w=B.d(i,q,q,q,q,q,q,D.f3s,q,q,q)
v=r.c
v.toString
u=x.p
v=B.a([p,A.bf,B.E(B.v(B.a([w,A.bB,A.cS,r.bz1(D.cPs,d,B.P(v).ax.a===A.I)],u),A.F,q,A.e,A.j,0,A.p),1)],u)
p=x.V
A.d.v(v,B.a([A.ab,B.dU(B.hq(B.aG(!1,A.a1,!0,q,B.aL(!1,q,!0,B.eE(D.eNQ,q,new B.o(q,q,B.I(A.c.j(0.55),A.q,1.3),q,B.a([new B.ac(0,A.G,A.bZ.j(0.4),A.ek,8)],p),D.anU,A.a6),q,q,q),A.cL,!0,q,q,q,q,q,q,q,q,q,q,q,g,q,q,q,q,q,q,q),A.f,A.K,0,q,q,q,q,q,A.ag),q,"Documents (Hati)",q,q),A.J)],u))
t=B.A(v,A.m,q,A.e,A.j,0,q,q)
w=r.c
w.toString
s=B.P(w).ax.a===A.I
w=B.m(20)
v=x.O
v=s?B.a([D.b6e,D.b6C],v):B.a([A.c,A.ki],v)
u=B.I(d.j(s?0.45:0.25),A.q,1.2)
return B.p(q,t,A.f,q,q,new B.o(q,q,u,w,B.a([new B.ac(0,A.G,d.j(s?0.18:0.1),A.cx,14)],p),new B.a8(A.ax,A.aC,A.x,v,q,q),A.n),q,q,q,q,A.bT,q,q,q)},
aLh(d,e,f,g){var w=this.fy
w===$&&B.c()
return B.c6(w,new C.eoM(this,g,d,e,f),null)},
afG(d,e){return this.cjh(d,e)},
cjh(d,e){var w=0,v=B.j(x.T),u,t=this,s,r,q,p
var $async$afG=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:r=$.aw()
q=new B.ar(new B.bb(e,A.b4,A.aN),r)
p=t.c
p.toString
w=3
return B.b(B.ca(null,null,!0,null,new C.esR(d,q),p,null,!0,!0,x.N),$async$afG)
case 3:s=g
q.U$=r
q.P$=0
u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$afG,v)},
Pv(d){var w=d.bS()
return""+B.bG(w)+"/"+B.bQ(w)+"/"+B.bA(w)}}
C.aeL.prototype={}
C.ayc.prototype={
R(){return new C.bbY(null,null)}}
C.bbY.prototype={
gcvl(){var w,v=this.a.c,u=v.f.bS(),t=""+B.bG(u)+"/"+B.bQ(u)+"/"+B.bA(u),s=v.w
if(s==="marriage_agreement")return"Hati ya Kuhowesha \xb7 "+t
if(s==="hati_kuhowa")return"Hati ya Kuhowa \xb7 "+t
if(s==="hati_kuhoweya")return"Hati ya Kuhoweya \xb7 "+t
if(s==="hati_kiapo_uongozi"){v=v.x
w=A.a.i(v==null?"":v)
return w.length===0?"Hati ya Kiapo cha Uongozi \xb7 "+t:"Kiapo cha Uongozi \xb7 "+w+" \xb7 "+t}return""+v.r.length+" slides \xb7 "+t},
a_(){var w,v=this,u=null
v.a1()
w=B.bj(u,A.pH,u,1,u,v)
w.fc(0,!0)
v.d!==$&&B.aP()
v.d=w
w=B.bj(u,D.boh,u,1,u,v)
w.cs(0)
v.e!==$&&B.aP()
v.e=w},
q(){var w=this.d
w===$&&B.c()
w.q()
w=this.e
w===$&&B.c()
w.q()
this.bsq()},
II(d){var w=0.12+d*0.09,v=A.k.D(w+0.55,0,1),u=this.e
u===$&&B.c()
u=u.x
u===$&&B.c()
return A.ct.aw(0,new B.hO(w,v,A.ct).aw(0,u))},
B(d){var w,v=null,u=this.d
u===$&&B.c()
w=this.e
w===$&&B.c()
return B.av(new B.D(D.btJ,B.c6(new B.h3(B.a([u,w],x.dS)),new C.d_H(this),v),v),v,v,v)}}
C.bcb.prototype={
B(d){var w=null,v=B.m(22),u=B.I(A.aK,A.q,1),t=x.p
return B.av(new B.D(D.bu_,B.aG(!1,A.a1,!0,w,B.p(w,B.bw(B.m(22),B.v(B.a([new B.D(D.btb,B.v(B.a([B.p(w,D.bJH,A.f,w,w,new B.o(A.ay.j(0.12),w,w,B.m(16),w,w,A.n),w,52,w,w,w,w,w,52),A.aQ,D.ftg,A.S,B.d('"'+this.c+'" will be permanently removed. This cannot be undone.',w,w,w,w,w,w,D.f4B,A.L,w,w)],t),A.m,w,A.e,A.j,0,A.p),w),A.e1,D.bnl,B.A(B.a([B.E(B.bK(!1,D.fhK,w,w,!0,w,w,new C.d02(d),w,B.fv(w,w,w,w,w,w,w,w,w,w,w,A.bJ,w,w,w,w,w,A.n9,w,A.ob,w,w,w,w,w,w)),1),B.p(w,w,A.f,A.bm,w,w,w,48,w,w,w,w,w,1),B.E(B.bK(!1,D.fn1,w,w,!0,w,w,new C.d03(d),w,B.fv(w,w,w,w,w,w,w,w,w,w,w,A.ay,w,w,w,w,w,A.n9,w,A.ob,w,w,w,w,w,w)),1)],t),A.m,w,A.e,A.j,0,w,w)],t),A.m,w,A.e,A.Q,0,A.p),A.aq),A.f,w,A8.V3,new B.o(A.aB,w,u,v,D.cPM,w,A.n),w,w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ag),w),w,w,w)}}
C.Jr.prototype={
R(){return new C.bbX()}}
C.bbX.prototype={
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.a,m=n.f,l=n.w,k=n.r
n=p.d
w=n?0.96:1
v=B.m(12)
if(l){u=0.1+(n?0.06:0)
n=u}else{u=0.08+(n?0.05:0)
n=u}n=m.j(n)
u=B.I(m.j(l?0.34:0.28),A.q,1)
t=x.V
t=p.d?B.a([],t):B.a([new B.ac(0,A.G,m.j(0.08),A.dE,8)],t)
s=m.j(l?0.16:0.14)
r=B.m(9)
q=p.a
r=B.p(o,B.X(q.c,m,o,o,o,18),A.f,o,o,new B.o(s,o,o,r,o,o,A.n),o,32,o,o,o,o,o,32)
q=q.d
return B.dU(B.dc(B.aE(o,B.vi(B.dj(o,B.A(B.a([r,A.av,new B.dq(1,A.cn,B.d(q,o,2,A.a2,o,o,o,B.l(o,o,l?A.f4:A.c,o,o,o,o,o,o,o,o,13,o,o,A.P,o,1.2,!0,o,o,o,o,o,o,o,o),A.L,o,o),o)],x.p),A.m,o,A.bb,A.Q,0,o,o),o,o,A.bc,new B.o(n,o,u,v,t,o,A.n),A.eE,o,o,o,A.nU,o,o,1/0),A.ct,A.jc,w),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new C.d_C(p,d),new C.d_D(p),new C.d_E(p),new C.d_F(p),o,o,o,!1,A.a8),k),new B.u(0,(1-k)*16))}}
C.Pe.prototype={
B(d){var w=this,v=null,u=A.c.j(0.04),t=B.m(16),s=B.m(16),r=B.m(14),q=B.I(A.c.j(0.5),A.q,1.2),p=x.p
return B.aG(!1,A.a1,!0,t,B.aL(!1,s,!0,new B.D(A.eP,B.A(B.a([B.p(v,B.X(w.c,A.c,v,v,v,22),A.f,v,v,new B.o(v,v,q,r,v,new B.a8(A.ax,A.aC,A.x,w.d,v,v),A.n),v,46,v,v,v,v,v,46),A.ey,B.E(B.v(B.a([B.d(w.e,v,v,v,v,v,v,A.nu,v,v,v),A.bB,B.d(w.f,v,v,v,v,v,v,B.l(v,v,A.c.j(0.55),v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],p),A.F,v,A.e,A.j,0,A.p),1),B.X(A.ex,A.c.j(0.4),v,v,v,v)],p),A.m,v,A.e,A.j,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.r,v,v,v,v,v,v,v),A.f,u,0,v,v,v,v,v,A.ag)}}
C.a_3.prototype={
R(){return new C.aDJ(D.dd,null,null)}}
C.aDJ.prototype={
gYn(){var w,v=this,u=v.w
if(u===$){w=B.bj(null,D.bnS,null,1,null,v)
v.w!==$&&B.bL()
v.w=w
u=w}return u},
b4T(d){if(!this.a.c.ay)return
this.x=d
this.gYn().iw(0,0)},
a_(){var w,v=this
v.a1()
w=v.a
v.d=A.o.D(w.d,0,w.c.r.length-1)
C.av5(D.eUb)
C.i08()
v.QU()},
q(){var w=this,v=w.f
if(v!=null)v.a7(0)
w.gYn().q()
v=w.z
if(v!=null)v.a7(0)
C.av5(D.eUc)
C.i0b()
w.buy()},
cy7(){B.jh()
this.m(new C.evw())
var w=this.c.I(x.q).f
w.a48()
if($.bjJ)w.S(D.eR3)},
QU(){var w,v=this,u=v.f
if(u!=null)u.a7(0)
if(!v.r||v.y)return
u=v.a.c
w=v.d
w===$&&B.c()
v.f=B.cM(B.dC(0,0,0,0,0,A.o.D(C.h7Z(u,w),1,120)),new C.evm(v))},
cxN(){var w,v=this
v.m(new C.evv(v))
if(v.r)v.QU()
else{w=v.f
if(w!=null)w.a7(0)}},
gaTR(){var w=this.a.c.db
return(w==null?"":w).length!==0},
crY(){var w=this,v=w.f
if(v!=null)v.a7(0)
w.m(new C.evn(w))
v=w.z
if(v!=null)v.a7(0)
if(w.a.c.ch&&w.r)w.z=B.cM(A.lc,new C.evo(w))},
avo(){var w,v,u=this,t=u.a.c,s=t.r.length
if(u.y){t=u.z
if(t!=null)t.a7(0)
if(u.a.c.ch){u.m(new C.evi(u))
u.QU()}return}w=u.d
w===$&&B.c()
v=s-1
if(w===v&&u.gaTR()){u.crY()
return}if(w>=v)t=t.ch&&s>1
else t=!0
if(t){u.m(new C.evj(u,A.o.F(w+1,s)))
u.b4T(w)
u.QU()}},
chW(){var w,v=this,u=v.a.c,t=u.r.length
if(v.y){if(!u.ch)return
u=v.z
if(u!=null)u.a7(0)
v.m(new C.evk(v))
v.QU()
return}w=v.d
w===$&&B.c()
if(w<=0)u=u.ch&&t>1
else u=!0
if(u){v.m(new C.evl(v,w,t))
v.b4T(w)
v.QU()}},
ctm(d){var w,v=this,u=v.e
if(u===D.cm){u=v.d
u===$&&B.c()
return new B.nc(d,new B.cx(u,x.ac))}w=v.ctn(u)
u=v.d
u===$&&B.c()
return B.qc(new B.nc(d,new B.cx(u,x.ac)),w,new C.evt(),A.bc,A.bc,new C.evu(v))},
ctn(d){switch(d.a){case 8:case 9:case 10:case 11:case 19:return D.bod
case 16:return A.kk
case 18:return A.n6
default:return A.n7}},
ctl(d,e,f){var w,v,u,t=null,s=B.cH(A.ct,f,t)
switch(d.a){case 0:return e
case 1:case 13:case 18:return new B.cZ(s,!1,e,t)
case 2:case 17:w=x.K
return B.jo(e,new B.bf(s,new B.bo(A.ul,A.J,w),w.k("bf<bJ.T>")),t,!0)
case 3:w=x.K
return B.jo(e,new B.bf(s,new B.bo(A.RH,A.J,w),w.k("bf<bJ.T>")),t,!0)
case 4:case 21:w=x.K
return B.jo(e,new B.bf(s,new B.bo(A.ii,A.J,w),w.k("bf<bJ.T>")),t,!0)
case 5:w=x.K
return B.jo(e,new B.bf(s,new B.bo(A.uk,A.J,w),w.k("bf<bJ.T>")),t,!0)
case 6:case 16:w=x.b
return B.ik(A.A,new B.cZ(s,!1,e,t),t,new B.bf(s,new B.bo(0.82,1,w),w.k("bf<bJ.T>")))
case 7:w=x.b
return B.ik(A.A,new B.cZ(s,!1,e,t),t,new B.bf(s,new B.bo(1.18,1,w),w.k("bf<bJ.T>")))
case 8:return B.c6(s,new C.evp(s),e)
case 9:return B.c6(s,new C.evq(s),e)
case 10:return B.c6(s,new C.evr(s),e)
case 11:return B.c6(s,new C.evs(s),e)
case 12:w=x.b
return new B.cZ(s,!1,B.ik(A.A,e,t,new B.bf(s,new B.bo(1.03,1,w),w.k("bf<bJ.T>"))),t)
case 14:w=s.gp(0)
v=x.K
return B.jw(B.jo(e,new B.bf(s,new B.bo(A.ul,A.J,v),v.k("bf<bJ.T>")),t,!0),A.r,new C.bqN(w,t))
case 15:w=x.K
return B.jo(e,new B.bf(s,new B.bo(A.RH,A.J,w),w.k("bf<bJ.T>")),t,!0)
case 19:w=B.dp()
w.mI((1-s.gp(0))*2)
v=s.gp(0)
u=s.gp(0)
w.jH(v,u,v,1)
return B.fs(A.A,B.dc(e,s.gp(0)),t,w,!0)
case 20:return B.eG(A.A,(1-s.gp(0))*0.2,new B.cZ(s,!1,e,t),t)}},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.a.c,k=n.d
k===$&&B.c()
w=l.r[k]
if(l.ay){v=n.x
u=B.jw(new C.anJ(B.c6(n.gYn(),new C.evx(n,v,w),m),m),A.r,m)}else{t=B.rs(new C.Io(w,!0,!1,m))
l=B.b0(w.e)
u=n.ctm(B.el(B.jw(t,A.r,m),l,!0))}l=B.m(20)
k=x.p
s=B.p(m,B.A(B.a([B.d(n.r?"Auto "+C.h7Z(n.a.c,n.d)+"s":"Manual",m,m,m,m,m,m,A.oh,m,m,m),A.bp,D.bLY],k),A.m,m,A.e,A.Q,0,m,m),A.f,m,m,new B.o(A.aX,m,m,l,m,m,A.n),m,m,m,m,A.fI,m,m,m)
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
l.push(B.bZ(0,new C.N7(new C.Ee(q,p,o,r==null?"":r),!1,!0,m),0,0,0))}else{r=q.c.d===D.o7?0.5625:1.7777777777777777
l.push(B.av(new B.fG(r,B.jw(B.ui(A.af,u,!0,4,1,!0,!0,m),A.r,m),m),m,m,m))}if(!$.bjJ){r=B.Hq(A.kU,new C.evy(d),B.nw(m,A.aX,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m)
k=B.a([B.ao(m,B.bl(!0,B.A(B.a([r,A.ab,B.Hq(B.X(n.r?Ak.y8:A.iW,m,m,m,m,m),n.gcxM(),B.nw(m,A.aX,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m)],k),A.m,m,A.e,A.j,0,m,m),!0,!1,A.af,!0,!0),m,m,12,m,12,m)],k)
if(!n.y){r=B.m(20)
k.push(B.ao(16,B.bl(!0,B.p(m,B.d(""+(n.d+1)+" / "+n.a.c.r.length,m,m,m,m,m,m,A.hq,m,m,m),A.f,m,m,new B.o(A.aX,m,m,r,m,m,A.n),m,m,m,m,A.fI,m,m,m),!0,!1,A.af,!0,!0),m,m,m,16,m,m))}A.d.v(l,k)}l.push(B.ao(m,B.bl(!0,B.aE(A.c4,B.p(A.l5,$.bjJ?A.bH:s,A.f,m,m,m,m,64,m,m,D.boZ,m,m,150),A.y,!1,m,n.gcy6(),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!1,A.a8),!0,!1,A.af,!0,!0),m,m,m,0,0,m))
return B.c8(m,A.w,B.aE(m,new B.an(A.W,m,A.b0,A.r,l,m),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.evz(n,d),m,m,m,!1,A.a8),m,!1,!1,m,m)}}
C.Jy.prototype={
B(d){var w=null
return B.p(w,B.bl(!0,new B.D(E.ahF,this.c,w),!0,!1,A.af,!0,!1),A.f,w,w,D.b_7,w,w,w,w,w,w,w,w)}}
C.bqN.prototype={
j0(d){return new B.a9(0,0,0+d.a*A.k.D(this.b,0,1),0+d.b)},
jK(d){return d.b!==this.b}}
C.bgQ.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.c
A:{if("circle"===q){w=B.m(999)
break A}if("rounded"===q){w=B.m(18)
break A}if("arch"===q){w=D.aWV
break A}w=B.m(6)
break A}v=s.e
u=B.I(v?A.aE:A.K,A.q,2.5)
if(q==="circle")t=B.m(999)
else t=B.m(q==="rounded"?9:3)
w=B.dj(r,B.av(B.p(r,r,A.f,r,r,new B.o(r,r,r,t,r,E.vP,A.n),r,30,r,r,r,r,r,30),r,r,r),r,r,A.bc,new B.o(s.f,r,u,w,r,r,A.n),A.hX,r,64,r,r,r,r,64)
return B.aE(r,new B.a7(78,r,B.v(B.a([w,A.an,B.d(s.d,r,1,A.a2,r,r,r,B.l(r,r,v?A.aE:s.r,r,r,r,r,r,r,r,r,11.5,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),A.m,r,A.e,A.j,0,A.p),r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,s.w,r,r,r,r,r,r,!1,A.a8)}}
C.bgP.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=r.c,o=D.diY.h(0,p)
if(o==null)o=D.d6_
p=p==="none"
w=p?q:new B.a8(A.a3,A.a7,A.x,o,q,q)
p=p?A.cV.j(0.25):q
v=r.e
u=v?B.I(A.aE,A.q,2.5):q
t=r.r.j(0.15)
s=v?I.am2:q
w=B.p(q,B.p(q,s,A.f,q,q,new B.o(t,q,q,q,q,q,A.a6),q,q,q,q,q,q,q,q),A.f,q,q,new B.o(p,q,u,q,q,w,A.a6),q,52,q,q,A.ep,q,q,52)
return B.aE(q,new B.a7(66,q,B.v(B.a([w,A.an,B.d(r.d,q,1,A.a2,q,q,q,B.l(q,q,v?A.aE:r.f,q,q,q,q,q,q,q,q,10.5,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),A.L,q,q)],x.p),A.m,q,A.e,A.j,0,A.p),q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.w,q,q,q,q,q,q,!1,A.a8)}}
C.aJq.prototype={
aR(){this.aY()
this.aX()
this.dI()},
q(){var w=this,v=w.b_$
if(v!=null)v.a3(0,w.gdC())
w.b_$=null
w.a2()}}
C.aLs.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbv())
w.a8$=null
w.a2()},
aR(){this.aY()
this.aX()
this.bw()}}
C.bww.prototype={}
C.aLt.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbv())
w.a8$=null
w.a2()},
aR(){this.aY()
this.aX()
this.bw()}}
C.b0s.prototype={}
C.Vy.prototype={
R(){return new C.aDH()},
bfn(d){return this.e.$1(d)}}
C.aDH.prototype={
gb3d(){var w,v,u,t,s=this.e
if(s==null)return null
for(w=this.a.d,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===s)return t}return null},
ga9Q(){var w,v
if(this.d==="all")return B.bn(this.a.d,!0,x.I)
w=this.gb3d()
v=x.D
return w==null?B.a([],v):B.a([w],v)},
gaNd(){if(this.d==="all")return"All presentations ("+this.a.d.length+")"
var w=this.gb3d()
w=w==null?null:w.b
return w==null?"Pick a presentation":w},
gb4s(){return A.d.cI(this.ga9Q(),0,new C.ev2())},
a_(){var w,v=this
v.a1()
w=v.a.d
if(w.length!==0)v.e=A.d.gL(w).a
v.Qv()},
Qv(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Qv=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return B.b(C.b12(s.c,s.f),$async$Qv)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.euZ(t,!s))
case 1:return B.h(u,v)}})
return B.i($async$Qv,v)},
IK(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$IK=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p=t.ga9Q()
o=p.length
if(o===0){w=1
break}for(s=0;s<p.length;p.length===o||(0,B.L)(p),++s){r=p[s]
q=r.w
if(q==="marriage_agreement"||q==="hati_kuhowa"||q==="hati_kuhoweya"||q==="hati_malipo_awamu"||q==="hati_kiapo_uongozi")C.fDm(r,t.a.d)}o=t.c
o.toString
q=t.a
w=3
return B.b(B.p1(o,q.c,q.f),$async$IK)
case 3:if(!e||t.c==null){w=1
break}o=t.c
o.toString
q=B.e9(new C.ev1(t,p),!1,null,x.H)
w=4
return B.b(B.a5(o,!1).c8(q),$async$IK)
case 4:q=t.a
w=5
return B.b(B.p0(q.c,q.f),$async$IK)
case 5:w=6
return B.b(t.Qv(),$async$IK)
case 6:case 1:return B.h(u,v)}})
return B.i($async$IK,v)},
QS(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$QS=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:o=t.c
o.toString
w=3
return B.b(B.hw(o,D.dWf,!0,"NgmySlidesTransferScan",x.N),$async$QS)
case 3:s=e
if(s==null||A.a.i(s).length===0){w=1
break}t.m(new C.ev_(t))
w=4
return B.b(C.agV(s),$async$QS)
case 4:r=e
t.m(new C.ev0(t))
o=J.a6(r)
if(o.gam(r)){o=t.c
if(o==null){w=1
break}o.I(x.q).f.S(D.ePX)
w=1
break}w=5
return B.b(t.a.bfn(r),$async$QS)
case 5:q=t.c
if(q==null){w=1
break}B.a5(q,!1).O(null)
q=t.c.I(x.q).f
p=o.gM(r)
o=o.gM(r)===1?"":"s"
q.S(B.b2(null,null,null,null,null,A.r,null,B.d("Imported "+p+" presentation"+o,null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$QS,v)},
IJ(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$IJ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:n=t.ga9Q()
if(n.length===0){w=1
break}s=t.c
s.toString
r=t.a
w=3
return B.b(B.p1(s,r.c,r.f),$async$IJ)
case 3:if(!e||t.c==null){w=1
break}s=n.length
r=t.a
if(s===1){s=r.c
q=C.fDB(null,A.d.gL(n),s,t.a.f)}else q=C.fDB(n,null,r.c,r.f)
if(n.length===1){s=A.d.gL(n).b
r=B.af("[^\\w\\-.]+",!0,!1,!1,!1)
p=B.aK(s,r,"_")}else p="ngmy_slides_library"
w=4
return B.b(B.G8(q,"ngmy_slides_"+p,!1),$async$IJ)
case 4:o=e
s=t.a
w=5
return B.b(B.p0(s.c,s.f),$async$IJ)
case 5:w=6
return B.b(t.Qv(),$async$IJ)
case 6:s=t.c
if(s==null){w=1
break}s.I(x.q).f.S(B.b2(null,null,null,null,null,A.r,null,B.d(o,null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$IJ,v)},
a2c(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a2c=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t.m(new C.ev3(t))
w=3
return B.b(C.bBQ(),$async$a2c)
case 3:s=e
t.m(new C.ev4(t))
if(s==null||J.cm(s)){w=1
break}w=4
return B.b(t.a.bfn(s),$async$a2c)
case 4:r=t.c
if(r==null){w=1
break}B.a5(r,!1).O(null)
r=t.c.I(x.q).f
q=J.a6(s)
p=q.gM(s)
q=q.gM(s)===1?"":"s"
r.S(B.b2(null,null,null,null,null,A.r,null,B.d("Imported "+p+" presentation"+q+" from file",null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a2c,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=B.P(d).ax.a===A.I,l=m?A.da:A.bL,k=o.ga9Q().length!==0,j=B.ao(n,B.p(n,n,A.f,n,n,new B.o(n,n,n,n,n,new B.bT(A.A,0.5,A.x,n,0,B.a([A.bj.j(0.22),A.K],x.O),n,n),A.a6),n,220,n,n,n,n,n,220),n,n,n,-60,-80,n),i=B.aH(n,n,n,n,B.X(A.cC,m?A.ad:A.ak,n,n,n,n),n,n,n,new C.ev7(d),n,n,n,n,n,n),h=x.p
i=B.A(B.a([i,B.E(B.d("Transfer presentations",n,n,n,n,n,n,B.l(n,n,m?A.c:A.M,n,n,n,n,n,n,n,n,17,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),A.L,n,n),1),A.zo],h),A.m,n,A.e,A.j,0,n,n)
w=B.m(24)
v=B.a([new B.ac(0,A.G,A.bj.j(0.35),A.eT,24)],x.V)
u=B.ao(n,B.X(A.pO,A.c.j(0.1),n,n,n,100),n,n,n,-12,-8,n)
t=A.c.j(0.18)
s=B.m(16)
s=B.a([u,B.A(B.a([B.p(n,D.bMt,A.f,n,n,new B.o(t,n,B.I(A.c.j(0.35),A.q,1),s,n,n,A.n),n,56,n,n,n,n,n,56),A.ey,B.E(B.v(B.a([B.d("NGMY Slides Transfer",n,n,n,n,n,n,B.l(n,n,A.c.j(0.85),n,n,n,n,n,n,n,n,11,n,n,A.H,n,n,!0,n,1.1,n,n,n,n,n,n),n,n,n),A.at,D.bxX],h),A.F,n,A.e,A.j,0,A.p),1)],h),A.m,n,A.e,A.j,0,n,n)],h)
if(o.a.f)s.push(B.ao(n,B.hq(B.aE(A.c4,D.eNS,A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gccH(),n,n,n,n,n,n,!1,A.a8),n,"Save presentations to the database",n,n),n,n,n,-17,-19,n))
w=B.a([B.p(n,new B.an(A.W,n,A.aa,A.f,s,n),A.aq,n,n,new B.o(n,n,n,w,v,D.a0D,A.n),n,n,n,n,E.Ys,n,n,1/0),A.e1,o.awz(m,"What to transfer"),A.ac,B.A(B.a([B.E(o.aW4(A.pU,m,new C.ev8(o),o.d==="one","Pick a single deck","One presentation"),1),A.av,B.E(o.aW4(D.bCc,m,new C.ev9(o),o.d==="all",""+o.a.d.length+" saved","All presentations"),1)],h),A.m,n,A.e,A.j,0,n,n)],h)
if(o.d==="one"){v=B.a([A.d5,o.awz(m,"Choose presentation"),A.S],h)
u=o.a.d
if(u.length===0){u=m?A.aB:A.c
t=B.m(16)
s=B.I(m?A.bF:A.aL,A.q,1)
v.push(B.p(n,B.d("Create a presentation first, then come back to transfer it.",n,n,n,n,n,n,B.l(n,n,m?A.az:A.ak,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),A.f,n,n,new B.o(u,n,s,t,n,n,A.n),n,n,n,n,A.bQ,n,n,n))}else A.d.v(v,new B.K(u,new C.eva(o,m),B.U(u).k("K<1,r>")))
A.d.v(w,v)}w.push(A.mG)
w.push(o.awz(m,"Transfer options"))
w.push(A.ac)
w.push(B.A(B.a([B.E(o.apj(A.aS,k,!0,A.jj,m,o.r,o.gc6U(),"Scan on another device","Show QR"),1),A.av,B.E(o.aLi(A.jP,!0,A.iX,m,o.gcoL(),"Receive presentations","Scan QR"),1)],h),A.m,n,A.e,A.j,0,n,n))
w.push(A.S)
w.push(B.A(B.a([B.E(o.bxw(A.aV,k,A.hA,m,o.r,o.gc6R(),"Download .json","Backup file"),1),A.av,B.E(o.aLi(A.aH,!0,Ay.yi,m,o.gcAu(),"Import backup","Upload file"),1)],h),A.m,n,A.e,A.j,0,n,n))
if(k){v=A.bj.j(m?0.12:0.08)
u=B.m(16)
t=B.I(A.bj.j(0.28),A.q,1)
s=B.X(A.li,A.bj.j(0.9),n,n,n,18)
r=o.gaNd()
q=o.gb4s()
p=o.gb4s()===1?"":"s"
A.d.v(w,B.a([A.by,B.p(n,B.A(B.a([s,A.av,B.E(B.d("Ready to share "+r+" \xb7 "+q+" slide"+p,n,n,n,n,n,n,B.l(n,n,m?A.ad:A.bv,n,n,n,n,n,n,n,n,12,n,n,A.a5,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)],h),A.m,n,A.e,A.j,0,n,n),A.f,n,n,new B.o(v,n,t,u,n,n,A.n),n,n,n,n,A.bC,n,n,n)],h))}j=B.a([j,B.bl(!0,B.v(B.a([new B.D(Ag.Mf,i,n),B.E(B.cz(w,n,D.bsl,n,n,A.ah,!1),1)],h),A.m,n,A.e,A.j,0,A.p),!0,!1,A.af,!0,!0)],h)
if(o.f)j.push(B.p(n,T.Vn,A.f,A.dB,n,n,n,n,n,n,n,n,n,n))
return B.c8(n,l,new B.an(A.W,n,A.aa,A.r,j,n),n,!1,!1,n,n)},
aeQ(){var w=0,v=B.j(x.H),u=this,t,s
var $async$aeQ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
t=u.a
w=2
return B.b(C.i6v(s,t.d,t.e),$async$aeQ)
case 2:return B.h(null,v)}})
return B.i($async$aeQ,v)},
awz(d,e){var w=null,v=B.p(w,w,A.f,w,w,new B.o(A.bj,w,w,B.m(2),w,w,A.n),w,14,w,w,w,w,w,3)
return B.A(B.a([v,A.ab,B.d(e.toUpperCase(),w,w,w,w,w,w,B.l(w,w,d?A.az:A.ak,w,w,w,w,w,w,w,w,11,w,w,A.u,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,w,w)},
aW4(d,e,f,g,h,i){var w,v,u,t,s=null,r=B.m(18),q=B.m(18),p=e?A.aB:A.c
if(g)w=A.bj
else w=e?A.bF:A.aL
w=B.I(w,A.q,g?2:1)
v=g?B.a([new B.ac(0,A.G,A.bj.j(0.2),A.cx,14)],x.V):s
u=A.bj.j(g?0.2:0.1)
t=B.m(12)
t=B.p(s,B.X(d,A.bj,s,s,s,22),A.f,s,s,new B.o(u,s,s,t,s,s,A.n),s,s,s,s,A.co,s,s,s)
u=B.d(i,s,s,s,s,s,s,B.l(s,s,e?A.c:A.M,s,s,s,s,s,s,s,s,13,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
return B.aG(!1,A.a1,!0,s,B.aL(!1,r,!0,B.eE(new B.D(A.bC,B.v(B.a([t,A.S,u,A.bB,B.d(h,s,s,s,s,s,s,B.l(s,s,e?A.az:A.ak,s,s,s,s,s,s,s,s,11,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),A.F,s,A.e,A.j,0,A.p),s),s,new B.o(p,s,w,q,v,s,A.n),s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,f,s,s,s,s,s,s,s),A.f,A.K,0,s,s,s,s,s,A.ag)},
bI1(d,e){var w,v,u,t,s,r,q=null,p=d.a===this.e,o=B.m(16),n=e?A.aB:A.c,m=B.m(16)
if(p)w=A.bj
else w=e?A.bF:A.aL
w=B.I(w,A.q,p?2:1)
v=B.p(q,D.bME,A.f,q,q,new B.o(q,q,q,B.m(12),q,new B.a8(A.a3,A.a7,A.x,B.a([A.bj,A.bj.j(0.7)],x.O),q,q),A.n),q,44,q,q,q,q,q,44)
u=d.b
u=B.d(u,q,1,A.a2,q,q,q,B.l(q,q,e?A.c:A.M,q,q,q,q,q,q,q,q,q,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=d.r.length
s=x.p
t=B.E(B.v(B.a([u,B.d(""+t+" slides",q,q,q,q,q,q,B.l(q,q,e?A.az:A.ak,q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),A.F,q,A.e,A.j,0,A.p),1)
u=p?A.ef:A.r0
if(p)r=A.bj
else r=e?A.b2:A.dp
return new B.D(A.cB,B.aG(!1,A.a1,!0,q,B.aL(!1,o,!0,B.p(q,B.A(B.a([v,A.bf,t,B.X(u,r,q,q,q,q)],s),A.m,q,A.e,A.j,0,q,q),A.f,q,q,new B.o(n,q,w,m,q,q,A.n),q,q,q,q,A.bC,q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,new C.euY(this,d),q,q,q,q,q,q,q),A.f,A.K,0,q,q,q,q,q,A.ag),q)},
apj(d,e,f,g,h,i,j,k,l){var w,v,u,t,s=null,r=e?1:0.45,q=e?j:s,p=B.m(18),o=B.m(18),n=h?A.aB:A.c
if(f)w=d.j(0.45)
else w=h?A.bF:A.aL
w=B.I(w,A.q,f?1.5:1)
v=d.j(0.14)
u=B.m(12)
t=x.p
u=B.a([B.p(s,B.X(g,d,s,s,s,22),A.f,s,s,new B.o(v,s,s,u,s,s,A.n),s,s,s,s,A.qZ,s,s,s)],t)
if(i)u.push(B.ao(s,B.p(s,D.amA,A.f,s,s,D.aZV,s,14,s,s,s,s,s,14),s,s,s,-4,-4,s))
v=B.d(l,s,s,s,s,s,s,B.l(s,s,h?A.c:A.M,s,s,s,s,s,s,s,s,14,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
return B.dc(B.aG(!1,A.a1,!0,s,B.aL(!1,p,!0,B.eE(new B.D(E.Y7,B.v(B.a([new B.an(A.W,s,A.aa,A.f,u,s),A.ac,v,A.bB,B.d(k,s,s,s,s,s,s,B.l(s,s,h?A.az:A.ak,s,s,s,s,s,s,s,s,11,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),A.F,s,A.e,A.j,0,A.p),s),s,new B.o(n,s,w,o,s,s,A.n),s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,q,s,s,s,s,s,s,s),A.f,A.K,0,s,s,s,s,s,A.ag),r)},
aLi(d,e,f,g,h,i,j){return this.apj(d,e,!1,f,g,!1,h,i,j)},
bxw(d,e,f,g,h,i,j,k){return this.apj(d,e,!1,f,g,h,i,j,k)}}
C.Vz.prototype={
R(){return new C.bjI()}}
C.bjI.prototype={
a_(){this.a1()
this.adH()},
adH(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$adH=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
n=r.a
m=n.d
l=m.length
k=n.c
q=l===1?C.fDB(null,A.d.gL(m),k,r.a.f):C.fDB(m,null,k,n.f)
n=r.a.d
m=n.length
p=m===1?A.d.gL(n).a:"library_"+m
n=r.a.d
if(n.length===1&&C.ku(A.d.gL(n).w))C.fDm(A.d.gL(r.a.d),D.d4_)
n=r.a
m=n.c
n=C.i3s(n.d)
w=7
return B.b(C.fDA(p,C.i3x(r.a.d),n,m,q),$async$adH)
case 7:o=e
if(r.c==null){w=1
break}r.m(new C.evb(r,o))
t=2
w=6
break
case 4:t=3
i=s.pop()
if(r.c==null){w=1
break}r.m(new C.evc(r))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$adH,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=B.P(d).ax.a===A.I,h=i?A.da:A.bL,g=k.d
g=g==null?j:A.a.a0(g,"NGMYSLIDESYNC2|")
w=A.d.cI(k.a.d,0,new C.evd())
v=B.aH(j,j,j,j,B.X(A.eB,i?A.ad:A.ak,j,j,j,18),j,j,j,new C.eve(d),j,j,j,j,j,j)
u=x.p
v=B.A(B.a([v,B.E(B.d("Presentation QR",j,j,j,j,j,j,B.l(j,j,i?A.c:A.M,j,j,j,j,j,j,j,j,17,j,j,A.u,j,j,!0,j,j,j,j,j,j,j,j),A.L,j,j),1),A.zo],u),A.m,j,A.e,A.j,0,j,j)
t=B.m(24)
s=k.a
r=B.d(s.e,j,j,j,j,j,j,A.dl,A.L,j,j)
s=s.d.length
q=s===1?"":"s"
t=B.p(j,B.v(B.a([r,A.N,B.d(""+s+" presentation"+q+" \xb7 "+w+" slides",j,j,j,j,j,j,B.l(j,j,A.c.j(0.85),j,j,j,j,j,j,j,j,12,j,j,A.P,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],u),A.m,j,A.e,A.j,0,A.p),A.f,j,j,new B.o(j,j,j,t,j,D.a0D,A.n),j,j,j,j,E.Ys,j,j,1/0)
q=B.m(24)
s=B.I(A.aS.j(0.35),A.q,1)
r=B.a([],u)
p=k.f
if(p!=null)r.push(B.d(p,j,j,j,j,j,j,A.a7_,A.L,j,j))
else if(k.d==null)r.push(D.e5I)
else{p=B.a([],u)
o=k.e
if((o==null?"":o).length!==0){o=B.m(16)
n=B.a([new B.ac(0,A.G,A.aE.j(0.35),A.cx,18)],x.V)
m=k.e
m.toString
A.d.v(p,B.a([D.fic,A.an,B.aE(j,B.p(j,B.A(B.a([D.bOc,A.av,B.d(m,j,j,j,j,j,j,D.f4Z,j,j,j)],u),A.m,j,A.e,A.Q,0,j,j),A.f,j,j,new B.o(j,j,j,o,n,D.bSM,A.n),j,j,j,j,A_.ahs,j,j,j),A.y,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new C.evf(k,d),j,j,j,j,j,j,!1,A.a8),A.N,D.fmy,A.aA],u))}o=A.c.j(0.04)
n=B.m(22)
m=B.I(A.bF,A.q,1)
l=k.d
l.toString
p.push(B.p(j,B.pH(j,j,!1,l,j,!0,!0,j,!1,D.bjM),A.f,j,j,new B.o(o,j,m,n,j,j,A.n),j,j,j,j,A.co,j,j,j))
A.d.v(r,p)}r.push(A.aA)
r.push(B.d(g===!0?"Cloud QR \u2014 scan on another phone with NGMY Slides open.":"Offline QR \u2014 keep both devices on the same network if scan fails.",j,j,j,j,j,j,A.hf,A.L,j,j))
return B.c8(j,h,B.bl(!0,B.v(B.a([new B.D(Ag.Mf,v,j),B.E(B.cd(B.v(B.a([t,A.aQ,B.p(j,B.v(r,A.m,j,A.e,A.j,0,A.p),A.f,j,j,new B.o(j,j,s,q,j,D.bUJ,A.n),j,j,j,j,A.tD,j,j,1/0)],u),A.m,j,A.e,A.j,0,A.p),A.r,j,A.y,j,E.ahK,j,j,A.ah),1)],u),A.m,j,A.e,A.j,0,A.p),!0,!1,A.af,!0,!0),j,!1,!1,j,j)}}
C.aDE.prototype={
R(){return new C.aDF(new B.ar(A.as,$.aw()),B.jN(!0,null,!0,!0,null,null,!1))}}
C.aDF.prototype={
a_(){var w=this
w.a1()
w.e.aN(0,new C.eoG(w))
$.aW.x1$.push(new C.eoH(w))},
q(){var w=this.d
w.U$=$.aw()
w.P$=0
this.e.q()
this.a2()},
aYG(){var w,v=this.c
v.toString
w=C.yo(this.d.a.a.toUpperCase())
if(w==null)w=""
B.a5(v,!1).O(w)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=B.aI(a2,A.eD,x.w).w,i=B.m(28),h=B.I(A.bj.j(0.4),A.q,1.2),g=x.V,f=B.a([new B.ac(0,A.G,A.bj.j(0.28),A.uj,36),D.aav],g),e=B.m(28),d=A.c.j(0.16),a0=B.m(16),a1=x.p
a0=B.p(k,B.v(B.a([B.p(k,D.bJK,A.f,k,k,new B.o(d,k,B.I(A.c.j(0.28),A.q,1),a0,k,k,A.n),k,52,k,k,k,k,k,52),A.ac,D.ffp,A.an,B.d("Type the 5-character code shown with the QR.",k,k,k,k,k,k,B.l(k,k,A.c.j(0.82),k,k,k,k,k,k,k,k,13,k,k,A.a5,k,1.35,!0,k,k,k,k,k,k,k,k),A.L,k,k)],a1),A.m,k,A.e,A.j,0,A.p),A.f,k,k,D.b_k,k,k,k,k,A.xE,k,k,1/0)
d=B.a([],a1)
for(w=l.d,v=l.e,u=0;u<5;++u){t=B.a([],a1)
if(u===2)t.push(A.av)
s=w.a.a
r=u<s.toUpperCase().length
q=u===s.toUpperCase().length&&v.ge3()
p=r?w.a.a.toUpperCase()[u]:""
s=r||q?A.aB:A.M
o=new B.aT(14,14)
if(q)n=A.bj
else n=r?A.bj.j(0.55):A.aK
m=new B.ay(n,q?2:1.2,A.q,-1)
n=q?B.a([new B.ac(0,A.G,A.bj.j(0.28),A.J,12)],g):k
t.push(new B.bD(1,A.bh,B.dj(A.A,new B.x(p,k,D.eZE,k,k,k,k,k,k,k,k,k),k,k,A.bc,new B.o(s,k,new B.bO(m,m,m,m),new B.bp(o,o,o,o),n,k,A.n),A.hX,k,56,k,k,k,k,k),k))
if(u!==4&&u!==1)t.push(L.IA)
A.d.v(d,t)}g=B.a([B.A(d,A.m,k,A.e,A.j,0,k,k),B.bZ(0,B.dc(B.aM(k,A.T,!0,k,!0,A.r,k,B.aN(),w,k,k,k,k,k,2,D.bQX,A.y,!0,k,!0,k,!1,v,A.ai,k,k,B.a([new B.u9(B.af("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.Ba(5,k),new C.bu2()],x.aS),k,k,A.aOv,k,5,k,1,k,k,!1,"\u2022",k,new C.eoC(l),k,new C.eoD(l),k,!1,k,k,!1,k,!0,k,A.a9,k,k,k,k,k,k,k,k,k,k,k,k,!0,A.a4,k,A.m_,k,k,k,k),0),0,0,0)],a1)
d=C.yo(w.a.a.toUpperCase())==null?k:l.gc6V()
return B.av(new B.D(new B.Q(24,24,24,24+j.f.d),B.aG(!1,A.a1,!0,k,new B.cS(Ad.K0,B.p(k,B.bw(e,B.v(B.a([a0,new B.D(D.bsQ,B.v(B.a([new B.an(A.W,k,A.aa,A.r,g,k),A.S,D.fdQ,A.by,new B.a7(1/0,50,B.bH(D.fu6,d,B.bm(A.bj,A.bm,A.ak,k,A.c,k,k,k,new B.b7(B.m(16),A.Y),k,k,k)),k),A.an,B.bK(!1,A.nv,k,k,!0,k,k,new C.eoE(a2),k,B.fv(k,k,k,k,k,k,k,k,k,k,k,A.bJ,k,k,k,k,k,k,k,k,k,k,k,k,k,k))],a1),A.m,k,A.e,A.j,0,A.p),k)],a1),A.m,k,A.e,A.Q,0,A.p),A.aq),A.f,k,k,new B.o(A.da,k,h,i,f,k,A.n),k,k,k,k,k,k,k,k),k),A.f,A.K,0,k,k,k,k,k,A.ag),k),k,k,k)}}
C.bu2.prototype={
ow(d,e){var w=e.a.toUpperCase()
return e.cGH(B.h8(A.bw,w.length),w)}}
C.aqB.prototype={
R(){return new C.aDI(B.yZ(A.Lv,A.nC,A.u2))}}
C.aDI.prototype={
q(){this.d.q()
this.a2()},
aYF(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
B.iM(w,d)},
a9K(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a9K=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e){w=1
break}s=t.c
s.toString
w=3
return B.b(C.fMd(s),$async$a9K)
case 3:r=e
if(r==null||t.c==null){w=1
break}t.aYF("NGMYSLIDECODE|"+r)
case 1:return B.h(u,v)}})
return B.i($async$a9K,v)},
c6T(d){var w,v,u,t
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u){t=C.i3v(w[u])
if(t!=null){this.aYF(t)
return}}},
B(d){var w,v,u,t=this,s=null,r=B.aH(s,s,s,s,A.vM,s,s,s,t.gbMb(),s,s,s,s,"Enter document code",s),q=t.f,p=q?"Flash off":"Flash on",o=x.p
p=B.eC(B.a([r,B.aH(s,s,s,s,B.X(q?A.r3:Al.Nb,s,s,s,s,s),s,s,s,new C.evh(t),s,s,s,s,p,s)],o),s,s,!0,!0,A.da,s,1,s,s,s,!1,s,!1,A.c,s,s,s,!0,s,s,s,s,s,D.fvk,s,s,s,1,s,!0)
r=B.yY(t.d,A.bR,t.gc6S())
w=B.m(28)
w=B.av(B.p(s,s,A.f,s,s,new B.o(s,s,B.I(A.bj,A.q,3),w,B.a([new B.ac(2,A.G,A.bj.j(0.35),A.J,24)],x.V),s,A.n),s,260,s,s,s,s,s,260),s,s,s)
v=A.w.j(0.72)
u=B.m(16)
return B.c8(p,A.w,new B.an(A.W,s,A.b0,A.r,B.a([r,w,B.ao(32,B.p(s,D.fjg,A.f,s,s,new B.o(v,s,B.I(A.bj.j(0.45),A.q,1),u,s,s,A.n),s,s,s,s,A.je,s,s,s),s,s,20,20,s,s)],o),s),s,!1,!1,s,s)}}
C.bue.prototype={
B(d){var w=null,v=B.m(24),u=B.I(A.aK,A.q,1)
return B.aG(!1,A.a1,!0,w,B.p(w,B.v(B.a([B.p(w,D.bHV,A.f,w,w,D.b_3,w,56,w,w,w,w,w,56),A.aQ,D.fv0,A.an,new B.kf(this.c,new C.f5S(),w,w,x.cI),A.aQ,new B.kf(this.d,new C.f5T(),w,w,x.cl),A.ac,D.fuY],x.p),A.m,w,A.e,A.Q,0,A.p),A.f,w,Ad.K0,new B.o(A.aB,w,u,v,w,w,A.n),w,w,w,K.Yz,D.bts,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ag)}}
C.a7l.prototype={
R(){return new C.bjr(A.bx)},
gdd(){return this.c}}
C.bjr.prototype={
a_(){var w=this
w.a1()
if(w.a.d)return
w.Zy()
w.d=B.dv(A.fU,new C.ed4(w))},
q(){var w=this.d
if(w!=null)w.a7(0)
this.a2()},
Zy(){return this.cl7()},
cl7(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$Zy=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q={}
p=t.a
if(p.d){if(t.c!=null)t.m(new C.ed2(t))
w=1
break}s=p.e
q.a=null
w=s!=null?3:5
break
case 3:q.a=s.bz(new B.S(Date.now(),0,!1))
w=4
break
case 5:w=6
return B.b(C.cdS(p.c),$async$Zy)
case 6:r=e
q.a=r==null?A.bx:r
case 4:if(t.c==null){w=1
break}t.m(new C.ed3(q,t))
if(q.a.a<=0&&!t.f){t.f=!0
t.a.f.$0()}case 1:return B.h(u,v)}})
return B.i($async$Zy,v)},
bO6(d){var w,v,u=d.a,t=A.o.an(u,36e8)
if(t>=999)return"Admin \u2014 unlimited"
w=A.o.an(u,6e7)%60
v=A.o.an(u,1e6)%60
if(t>0)return""+t+"h "+A.a.aT(A.o.u(w),2,"0")+"m "+A.a.aT(A.o.u(v),2,"0")+"s left"
return A.a.aT(A.o.u(w),2,"0")+":"+A.a.aT(A.o.u(v),2,"0")+" left"},
B(d){var w,v,u,t,s=this,r=null
if(s.a.d)return A.bH
w=s.e.a
v=A.o.an(w,6e7)<30&&A.o.an(w,36e8)<999?A.ay:A.bZ
w=v.j(0.14)
u=B.m(14)
t=B.I(v.j(0.55),A.q,1)
return B.p(r,B.A(B.a([B.X(A.FG,v,r,r,r,20),A.av,B.E(B.d("Marriage document session \xb7 "+s.bO6(s.e),r,r,r,r,r,r,B.l(r,r,v,r,r,r,r,r,r,r,r,13,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),1)],x.p),A.m,r,A.e,A.j,0,r,r),A.f,r,r,new B.o(w,r,t,u,r,r,A.n),r,r,r,W.agu,A.ic,r,r,1/0)}}
C.a8d.prototype={
nb(){var w,v,u,t=this
t.x3()
w=t.cx
v=t.c
w.bp4(t.cy,t,v)
u=x.Y
v.a.n(0,"/A",B.pO(B.F(["/S",D.e9n,"/URI",new B.rp(B.W6(w.as),A.um,!0)],x.N,u),u))}}
C.a8e.prototype={
a4(){return"PdfAnnotFlags."+this.b}}
C.b25.prototype={
bwA(d,e,f,g,h,i,j,k,l,m){var w=B.et([D.e7G],x.di)
this.w!==$&&B.aP()
this.w=w},
gcK_(){var w=this.w
w===$&&B.c()
if(w.a===0)return 0
return new B.jM(w,new C.cg3(),B.a4(w).k("jM<co.E,H>")).fa(0,new C.cg4())},
aC1(d,e,f){var w,v,u,t=this,s=f.a
s.n(0,"/Subtype",new B.h6(t.a))
w=t.b
v=w.a
u=w.b
s.n(0,"/Rect",B.tm(B.a([v,u,v+w.c,u+w.d],x.cA)))
s.n(0,"/P",new B.jb(d.a,d.b))
s.n(0,"/Border",B.tm(N.aoi))
w=t.w
w===$&&B.c()
if(w.a!==0)s.n(0,"/F",new B.fX(t.gcK_()))
w=t.z
if(w.a!==0)s.n(0,"/AP",B.pO(w,x.Y))}}
C.cg5.prototype={}
C.a2p.prototype={}
C.ahN.prototype={}
C.aQu.prototype={
fY(d){var w,v,u,t,s,r,q=this,p=null
q.ld(d)
q.LE(d)
w=q.a
v=d.a
v.toString
w.toString
w=d.beK(w)
u=x.N
t=x.Y
s=new C.cg5(q.d.a,"/Link",w,p,p,p,p,p,B.T(u,t))
s.bwA(p,p,p,p,p,p,p,w,p,"/Link")
w=v.x
t=B.pO(B.F(["/Type",D.e9l],u,t),t)
u=w.b++
r=w.e
r===$&&B.c()
r=new C.a8d(s,v,w,u,0,t,r,B.a([],x.s),p,p,0)
w.c.J(0,r)
v.dx.push(r)}}
C.aw3.prototype={}
C.aRZ.prototype={
fY(d){var w,v,u,t,s=this
s.ld(d)
w=s.b
if(w!=null){v=B.dp()
u=s.a
v.e5(u.a,u.b,0,1)
u=d.b
u.i3()
t=s.a
t.toString
u.KN(t)
u.S6(0)
u.oR(0,v)
w.fY(d)
u.ne(0)}}}
var z=a.updateTypes(["az<~>()","~(lD)","R(i_)","~()","R(eJ)","R(of)","R(lD)","~(i_)","R(eJ,eJ)","Jy(Y)","R(nG)","R(la)","az<R>()","H(H,i_)","a3<n,@>(i_)","ai<zh>()","n(nG)","R(a7C)","n(lD)","n(vQ)","R(En)","H(i_,i_)","n(eJ)","r(eJ)","cL(eJ)","r(hx)","~(hx)","eJ(uy,N,N,N,N,H{fx:n,key:n,rotation:N})","eJ(n,N,H)","H(of,of)","R(zh)","R(n,ai<zh>)","a3<n,@>(of)","nG()","Ya(Y)","eJ(n,N,N,N,N,N{align:pU,anim:hx,bullets:R,color:H?,delay:H,fx:n,key:n,style:Hl,weight:oM})","a0q(Y)","eJ(n,N,N,N,N{anim:hx,delay:H,fx:n,key:n})","az<~>(of)","R(mp)","Y8(Y)","a_Y(Y)","a_X(Y)","P4(Y)","Zj(Y)","eJ(uy,N,N,N,N,H,n,n{anim:hx,delay:H,rotation:N,stroke:H,strokeWidth:N})","eJ(n,N,N,N,N,N,n,n,H)","eJ(N,N,n,H{size:N})","r(rd,N,N)","la()","of(a3<@,@>)","~(uo)","En()","ff(eJ)","r(iX)","YS(Y)","~(Ee)","Zc(Y)","H(eJ,eJ)","eJ(eJ)","a3<n,@>(eJ)","eJ(a3<@,@>)","lD(lD)","a3<n,@>(lD)","lD(a3<@,@>)","R(jD)","jD()","n(i_)","~(ai<of>)","S(ai<i_>)","S(i_)","ai<i_>(n?)","acf(Y,H)","~(R(eJ,eJ))","acU(Y)","aeB(Y,H)","w(lD,R)","Vj(Y)","acX(Y)","Vm(Y)","~(mt)","i_(i_)","N(eJ)","a_r(Y)","a_3(Y)","i_()","ai<EJ>()","az<~>(ai<i_>)","r(bv<H,i_>)","D(jD)","D(En)","az<~>(hx,~())","r(ai<hx>,hx?,~(hx),w)","R(m1)","ai<jn<mt>>(Y)","jn<mt>(mt)","i_(a3<@,@>)","Vy(Y)","eJ(n,N,N,N,N,N,H{align:pU,style:Hl,weight:oM})","Vz(Y)","r(i_)","~(lV)","Io(Y,lD,r?)","H(a8e)","az<ai<a3<n,@>>?>()","n(n)","az<zf>({paper:n?,photo:dD?,request:n,template!ld})","az<a7u>({doc!zf,history:ai<+(n,n)>,instruction!n,photo:dD?,template!ld})","acR(Y)"])
C.cDZ.prototype={
$2(d,e){d=d+e&536870911
d=d+((d&524287)<<10)&536870911
return d^d>>>6},
$S:73}
C.cE_.prototype={
$1(d){d=d+((d&67108863)<<3)&536870911
d^=d>>>11
return d+((d&16383)<<15)&536870911},
$S:76}
C.cE0.prototype={
$1(d){var w,v,u,t,s,r,q
for(w=this.a,v=this.b,u=v.c-1,v=v.b;t=w.a,t<d;){t=w.c
if(t<0){w.c=t-1
s=0
r=16}else{s=v[t]
r=t===u?A.o.gajr(s):16;--w.c}w.b=A.o.dV(w.b,r)+s
w.a+=r}v=w.b
t-=d
q=A.o.mo(v,t)
w.b=v-A.o.dV(q,t)
w.a=t
return q},
$S:76}
C.cE1.prototype={
$0(){var w,v,u,t,s
for(w=this.a,v=w.$flags|0,u=1,t=0;t<8;++t){if(u===0)break
s=w[t]+u
v&2&&B.aj(w)
w[t]=s&255
u=s>>>8}},
$S:0}
C.bO0.prototype={
$1(d){return J.eZ(A.dD.gaM(d),d.byteOffset,d.byteLength)},
$S:1666}
C.fqj.prototype={
$5(d,e,f,g,h){var w=this,v=w.a
if((v&8)!==0)B.iH(w.b,d+f,e+g,w.c,h,w.d,!1,w.e,w.f)
if((v&4)!==0)B.iH(w.b,d-f,e+g,w.c,h,w.d,!1,w.e,w.f)
if((v&2)!==0)B.iH(w.b,d+f,e-g,w.c,h,w.d,!1,w.e,w.f)
if((v&1)!==0)B.iH(w.b,d-f,e-g,w.c,h,w.d,!1,w.e,w.f)},
$S:1667}
C.bYC.prototype={
$1(d){return B.a1(d,x.N,x.z)},
$S:27}
C.bYD.prototype={
$2(d,e){var w,v=J.q(e,"savedAt")
v=J.k(v==null?"":v)
w=J.q(d,"savedAt")
return A.a.aL(v,J.k(w==null?"":w))},
$S:44}
C.bYF.prototype={
$1(d){var w=J.q(d,"id")
return J.k(w==null?"":w)===this.a},
$S:4}
C.fGh.prototype={
$1(d){return new C.a0q(this.a,this.b,C.i4n(),null)},
$S:z+36}
C.f4k.prototype={
$0(){var w=this.a
w.e=this.b
w.f=!1},
$S:0}
C.f4o.prototype={
$1(d){return this.a.d.t(0,d.a)},
$S:z+2}
C.f4p.prototype={
$0(){var w=this.a
w.r=!0
w.x=null},
$S:0}
C.f4q.prototype={
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
C.f4l.prototype={
$0(){var w=this.a
w.r=!0
w.x=null},
$S:0}
C.f4m.prototype={
$0(){var w=this.a
w.r=!1
w.x="Could not open that saved presentation."
w.y=!0},
$S:0}
C.f4n.prototype={
$0(){var w=this.a
w.r=!1
w.x='"'+this.b.b+'" is back in your presentations.'
w.y=!1},
$S:0}
C.f4f.prototype={
$1(d){var w=null,v=B.d('"'+this.a+'" will be removed from the database. Your own copy stays in your presentations.',w,w,w,w,w,w,A.hD,w,w,w)
return B.ek(B.a([B.bK(!1,D.fhG,w,w,!0,w,w,new C.f4d(d),w,w),B.bK(!1,D.fgM,w,w,!0,w,w,new C.f4e(d),w,w)],x.p),w,w,D.X9,v,w,w,w,w,D.fvB,w)},
$S:20}
C.f4d.prototype={
$0(){B.a5(this.a,!1).O(!1)
return null},
$S:0}
C.f4e.prototype={
$0(){B.a5(this.a,!1).O(!0)
return null},
$S:0}
C.f4g.prototype={
$0(){return this.a.r=!0},
$S:0}
C.f4h.prototype={
$0(){return this.a.r=!1},
$S:0}
C.f4u.prototype={
$0(){var w=this.a
return w.m(new C.f4t(w,this.b))},
$S:0}
C.f4t.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.f4j.prototype={
$0(){var w=this.a
return w.m(new C.f4i(w,this.b,this.c))},
$S:0}
C.f4i.prototype={
$0(){var w=this.a.d,v=this.c.a
return this.b?w.W(0,v):w.J(0,v)},
$S:0}
C.f4r.prototype={
$0(){return this.a.a0F(this.b)},
$S:0}
C.f4s.prototype={
$0(){return this.a.OJ(0,this.b)},
$S:0}
C.f4x.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.f4y.prototype={
$0(){var w=this.a
return w.m(new C.f4w(w,this.b))},
$S:0}
C.f4w.prototype={
$0(){var w=this.a,v=w.d
if(this.b)v.a9(0)
else{w=w.a.c
v.v(0,new B.K(w,new C.f4v(),B.U(w).k("K<1,n>")))}},
$S:0}
C.f4v.prototype={
$1(d){return d.a},
$S:z+67}
C.fbA.prototype={
$1(d){var w,v=x.N,u=x.z,t=B.a1(d,v,u),s=t.h(0,"id")
s=J.k(s==null?"":s)
w=x.f
v=F.h5d(w.b(t.h(0,"doc"))?B.a1(w.a(t.h(0,"doc")),v,u):A.cA)
t=t.h(0,"updatedAt")
u=B.bi(J.k(t==null?"":t))
return new C.of(s,v,u==null?new B.S(Date.now(),0,!1):u)},
$S:z+50}
C.fbB.prototype={
$1(d){return d.a.length!==0},
$S:z+5}
C.fsW.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n
for(w=d.length,v=this.a,u=0;u<d.length;d.length===w||(0,B.L)(d),++u){t=d[u]
s=t.a
r=v.h(0,s)
q=!0
if(r!=null){p=t.c
o=r.c
n=p.a
if(n<=o.gbo())q=n===o.gbo()&&p.b>o.gcz()}if(q)v.n(0,s,t)}},
$S:z+68}
C.fsU.prototype={
$1(d){return!this.a.t(0,d.a)},
$S:z+5}
C.fsV.prototype={
$2(d,e){return e.c.aL(0,d.c)},
$S:z+29}
C.fFM.prototype={
$1(d){return d.ag()},
$S:z+32}
C.fq_.prototype={
$1(d){return d.a===this.a},
$S:z+5}
C.fGD.prototype={
$1(d){return new C.Ya(this.a,null)},
$S:z+34}
C.cFk.prototype={
$1(d){return A.a.i(d.b).length===0},
$S:z+39}
C.cFm.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.cFp.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cFq.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.cFo())},
$S:11}
C.cFo.prototype={
$0(){},
$S:0}
C.cFr.prototype={
$1(d){var w=0,v=B.j(x.a),u=this,t,s,r,q,p
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(C.a1p(t.a.c),$async$$1)
case 2:s=f
r=u.b
q=J.cE(s)
p=q.bd(s,new C.cFn(r))
if(p<0)q.ck(s,0,r)
else q.n(s,p,r)
w=3
return B.b(C.ah3(t.a.c,s),$async$$1)
case 3:return B.h(null,v)}})
return B.i($async$$1,v)},
$S:279}
C.cFn.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cFs.prototype={
$1(d){},
$S:31}
C.cFl.prototype={
$1(d){return new C.Y8(this.b,this.a.gcuH(),null)},
$S:z+40}
C.cFt.prototype={
$1(d){return D.fNF},
$S:z+43}
C.cFg.prototype={
$1(d){var w=null,v=B.m(24),u=B.I(D.WR,A.q,1),t=x.p
return B.av(B.aG(!1,A.a1,!0,w,B.p(w,B.v(B.a([new B.D(D.bte,B.v(B.a([B.p(w,D.bGX,A.f,w,w,new B.o(A.ay.j(0.14),w,w,w,w,w,A.a6),w,56,w,w,w,w,w,56),A.aQ,D.ffQ,A.S,B.d("\u201c"+this.a.b.a+"\u201d is removed from this device. This cannot be undone.",w,w,w,w,w,w,D.f40,A.L,w,w)],t),A.m,w,A.e,A.j,0,A.p),w),A.e1,new B.D(A.pK,B.A(B.a([B.E(B.dT(D.fmA,new C.cFe(d),B.dg(w,w,w,w,w,w,w,w,w,E.n0,w,w,A.ck,w,new B.b7(B.m(14),A.Y),D.aXk,w,w,w,w)),1),A.av,B.E(B.bH(D.fsp,new C.cFf(d),B.bm(A.bI,w,w,w,w,w,A.ck,w,new B.b7(B.m(14),A.Y),w,w,w)),1)],t),A.m,w,A.e,A.j,0,w,w),w)],t),A.m,w,A.e,A.Q,0,A.p),A.f,w,A.wI,new B.o(D.acd,w,u,v,D.cUc,w,A.n),w,w,w,K.Yz,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ag),w,w,w)},
$S:1668}
C.cFe.prototype={
$0(){B.a5(this.a,!1).O(!1)
return null},
$S:0}
C.cFf.prototype={
$0(){B.a5(this.a,!1).O(!0)
return null},
$S:0}
C.cFh.prototype={
$0(){return J.no(this.a.d,new C.cFd(this.b))},
$S:0}
C.cFd.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cFc.prototype={
$1(d){var w,v,u,t=null,s=B.m(28),r=B.I(D.WR,A.q,1),q=x.p
q=B.a([B.A(B.a([B.p(t,D.bLR,A.f,t,t,new B.o(t,t,t,B.m(14),t,D.anP,A.n),t,44,t,t,t,t,t,44),A.bf,B.E(B.v(B.a([B.d(this.a.b.a,t,1,A.a2,t,t,t,D.aQ8,t,t,t),A.bB,D.fsl],q),A.F,t,A.e,A.j,0,A.p),1)],q),A.m,t,A.e,A.j,0,t,t),A.aA],q)
for(w=0;w<2;++w){v={}
u=D.dee[w]
v.a=null
u=u.a
v.a=u[0]
q.push(new C.awY(u[1],u[2],u[3],new C.cFa(v,d),!1,t))}q.push(A.an)
q.push(D.bno)
q.push(A.an)
q.push(new C.awY(A.e5,"Delete book","Remove it from this device",new C.cFb(d),!0,t))
return B.bl(!0,B.p(t,B.v(q,A.F,t,A.e,A.Q,0,A.p),A.f,t,t,new B.o(D.acd,t,r,s,t,t,A.n),t,t,t,A.ty,Ao.M0,t,t,t),!0,!1,A.af,!0,!0)},
$S:26}
C.cFa.prototype={
$0(){var w=this.a.a
B.a5(this.b,!1).O(w)
return null},
$S:0}
C.cFb.prototype={
$0(){B.a5(this.a,!1).O("delete")
return null},
$S:0}
C.cFj.prototype={
$3(d,e,f){var w=null,v=B.m(4),u=B.a([new B.ac(0,A.G,A.w.j(0.45),A.aG3,12)],x.V)
return B.dU(B.eG(A.A,e,B.p(w,B.bw(B.m(4),new B.a7(62,95.81818181818181,B.f4(A.A,F.anA(d),A.f,A.du),w),A.aq),A.f,w,w,new B.o(w,w,w,v,u,w,A.n),w,w,w,w,w,w,w,w),w),new B.u(f,0))},
$S:z+48}
C.cFi.prototype={
$0(){return this.a.c1C()},
$S:0}
C.cF9.prototype={
$0(){return this.a.aXd(0,this.b)},
$S:0}
C.cF8.prototype={
$0(){return this.a.D_(this.b)},
$S:0}
C.cF7.prototype={
$0(){return this.a.D_(this.b)},
$S:0}
C.cFu.prototype={
$2(d,e){var w=this.a
return w.bB2(J.q(w.d,e))},
$S:41}
C.cEB.prototype={
$0(){var w=this.a
if(w.c!=null)w.Az()},
$S:0}
C.cEA.prototype={
$0(){var w=this.a,v=w.w
return v.push(w.b_7("Page "+(v.length+1),"",""))},
$S:0}
C.cED.prototype={
$0(){var w=this.a.w,v=this.b,u=w[v],t=this.c
w[v]=w[t]
w[t]=u},
$S:0}
C.cEL.prototype={
$0(){},
$S:0}
C.cEM.prototype={
$1(d){var w=this.a,v=w.a,u=$.aw()
v.U$=u
v.P$=0
w=w.b
w.U$=u
w.P$=0
return null},
$S:8}
C.cEE.prototype={
$0(){return this.a.c="data:"+this.b+";base64,"+A.cT.gcw().aJ(this.c)},
$S:0}
C.cEC.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.cEG.prototype={
$0(){return this.a.Q2(this.b)},
$S:0}
C.cEH.prototype={
$0(){return this.a.Q2(this.b)},
$S:0}
C.cEI.prototype={
$0(){var w=this.a
w.m(new C.cEF(this.b))
w.DP()},
$S:0}
C.cEF.prototype={
$0(){return this.a.c=""},
$S:0}
C.cEK.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new C.cEJ(w,d))
w.DP()},
$S:z+51}
C.cEJ.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.cER.prototype={
$2(d,e){if(d)this.a.Az()},
$S:121}
C.cEN.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=2
return B.b(u.a.Az(),$async$$0)
case 2:t=u.b
if(t.e!=null)t.I(x.q).f.S(D.eSs)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.cEO.prototype={
$0(){return this.a.aWb(this.b,-1)},
$S:0}
C.cEP.prototype={
$0(){return this.a.aWb(this.b,1)},
$S:0}
C.cEQ.prototype={
$0(){return this.a.c2R(0,this.b)},
$S:0}
C.fxs.prototype={
$1(d){return C.hfb()},
$S:43}
C.fxt.prototype={
$1(d){return null},
$S:31}
C.ffZ.prototype={
$1(d){return null},
$S:31}
C.fyr.prototype={
$1(d){var w=d.b[0]
w.toString
return w},
$S:322}
C.fyq.prototype={
$2(d,e){return A.o.aL(e.length,d.length)},
$S:235}
C.fyx.prototype={
$1(d){var w=this.a
return C.fYJ(d)===w||C.hjJ(d)===w},
$S:z+4}
C.ff1.prototype={
$1(d){return A.a.aT(A.o.u(d),2,"0")},
$S:80}
C.c8b.prototype={
$1(d){return d.length!==0},
$S:3}
C.fxq.prototype={
$1(d){return d.a===this.a.a.a},
$S:z+4}
C.fxr.prototype={
$1(d){return C.fAa(d)&&A.a.t(d.db,"rais")},
$S:z+4}
C.fsh.prototype={
$1(d){var w=null
return B.bl(!0,new B.D(E.xD,B.v(B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.b2,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.by,D.fna,A.N,B.d("Hati ya jimbo: "+this.a,w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aQ,B.dk(D.Gh,D.fhm,new C.fsf(d),B.bm(A.bZ,w,w,w,A.w,w,A.ck,w,w,w,w,w)),A.S,B.ey(A.vL,D.foo,new C.fsg(d),B.dg(w,w,w,w,w,w,w,w,w,A.ad,w,w,A.ck,w,w,Q.wG,w,w,w,w))],x.p),A.aj,w,A.e,A.Q,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:26}
C.fsf.prototype={
$0(){B.a5(this.a,!1).O("continue")
return null},
$S:0}
C.fsg.prototype={
$0(){B.a5(this.a,!1).O("new")
return null},
$S:0}
C.fsi.prototype={
$1(d){var w=null
return B.ek(B.a([B.bK(!1,D.fdI,w,w,!0,w,w,new C.fsd(d),w,w),B.bH(D.fuE,new C.fse(d),w)],x.p),w,w,w,D.fwv,w,w,w,w,D.fdC,w)},
$S:20}
C.fsd.prototype={
$0(){B.a5(this.a,!1).O(!1)
return null},
$S:0}
C.fse.prototype={
$0(){B.a5(this.a,!1).O(!0)
return null},
$S:0}
C.e7T.prototype={
$0(){var w=this.a
w.r=w.f=w.e=!1},
$S:0}
C.e7R.prototype={
$0(){return this.a.e=!0},
$S:0}
C.e7S.prototype={
$0(){return this.a.f=!0},
$S:0}
C.e7U.prototype={
$0(){return this.a.r=!1},
$S:0}
C.e7V.prototype={
$0(){return this.a.r=!0},
$S:0}
C.fyw.prototype={
$1(d){return A.a.aT(A.o.u(d),2,"0")},
$S:80}
C.fys.prototype={
$2$h$w(d,e){var w=null
return new B.bI(A.a3,w,w,B.Dy(A.A,B.p(w,w,A.f,w,w,new B.o(this.a.j(0.14),w,w,B.m(3),w,w,A.n),w,d,w,w,w,w,w,w),w,e),w)},
$0(){return this.$2$h$w(5,1)},
$1$w(d){return this.$2$h$w(5,d)},
$1$h(d){return this.$2$h$w(d,1)},
$S:1669}
C.fyu.prototype={
$1(d){var w=null,v=B.m(3)
return B.p(A.A,B.d(d,w,w,w,w,w,w,D.f5b,w,w,w),A.f,w,w,new B.o(this.a,w,w,v,w,w,A.n),w,12,w,w,w,w,w,w)},
$S:177}
C.fyv.prototype={
$1$size(d){var w=null
return B.A(B.a([B.p(w,w,A.f,w,w,new B.o(w,w,B.I(A.hV,A.q,1.5),w,w,w,A.a6),w,d,w,w,w,w,w,d),B.dU(B.p(w,w,A.f,w,w,new B.o(w,w,B.I(A.hV,A.q,1.5),w,w,w,A.a6),w,d,w,w,w,w,w,d),new B.u(-d*0.38,0))],x.p),A.m,w,A.bb,A.j,0,w,w)},
$0(){return this.$1$size(18)},
$S:1670}
C.fyt.prototype={
$2$female$size(d,e){var w=null,v=d?D.ae2:this.a,u=B.I(A.hV,A.q,1),t=e*0.32,s=B.ao(w,B.p(w,w,A.f,w,w,new B.o(v,w,w,w,w,w,A.a6),w,t,w,w,w,w,w,t),w,w,w,w,e*0.16,w),r=d?0.62:0.5
return B.p(w,new B.an(A.A,w,A.aa,A.r,B.a([s,B.ao(e*0.06,B.p(w,w,A.f,w,w,new B.o(v,w,w,B.m(7),w,w,A.n),w,t,w,w,w,w,w,e*r),w,w,w,w,w,w)],x.p),w),A.f,w,w,new B.o(D.acr,w,u,w,w,w,A.a6),w,e,w,w,w,w,w,e)},
$1$female(d){return this.$2$female$size(d,18)},
$S:1671}
C.fK4.prototype={
$1(d){return new C.acR(this.a,this.b,null)},
$S:z+108}
C.dXz.prototype={
$2(d,e){var w,v,u,t=null,s=this.b,r=s?D.bkf:A.L_,q=B.I(D.j8.j(0.25),A.q,1),p=B.av(B.p(t,t,A.f,t,t,new B.o(A.bZ.j(0.45),t,t,B.m(2),t,t,A.n),t,4,t,t,t,t,t,40),t,t,t),o=B.m(15)
o=B.p(t,D.amz,A.f,t,t,new B.o(t,t,B.I(A.c.j(0.5),A.q,1.2),o,B.a([new B.ac(0,A.G,D.j8.j(0.35),A.ek,10)],x.V),D.bVk,A.n),t,t,t,t,A.xu,t,t,t)
w=this.a
v=w.d.length
u=x.p
return B.p(t,B.v(B.a([new B.D(H.Yo,B.v(B.a([p,A.aA,B.A(B.a([o,A.bf,B.E(B.v(B.a([B.d("Chagua muundo wa hati",t,t,t,t,t,t,B.l(t,t,s?A.c:D.j8,t,t,t,t,t,t,t,t,17,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),A.bB,B.d(w.c+" \xb7 "+v+" miundo",t,t,t,t,t,t,D.f4t,t,t,t)],u),A.F,t,A.e,A.j,0,A.p),1)],u),A.m,t,A.e,A.j,0,t,t)],u),A.m,t,A.e,A.j,0,A.p),t),B.E(B.ie(!0,t,e,A.y,D.aNx,new C.dXy(w,this.c),v,D.ahn,t,A.ah,!1),1)],u),A.m,t,A.e,A.j,0,A.p),A.f,t,t,new B.o(r,t,q,A.m5,t,t,A.n),t,t,t,t,t,t,t,t)},
$S:114}
C.dXy.prototype={
$2(d,e){var w=this.a.d[e]
return new C.acf(w,new C.dXx(this.b,w),null)},
$S:z+72}
C.dXx.prototype={
$0(){B.a5(this.a,!1).O(this.b.a)
return null},
$S:0}
C.fsl.prototype={
$1(d){return d.w==="hati_kuhowa"},
$S:z+2}
C.fsm.prototype={
$1(d){var w=null,v=this.a
return B.bl(!0,new B.D(E.xD,B.v(B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.b2,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.by,D.fqv,A.N,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aQ,B.dk(D.Gh,B.d('Endelea na "'+A.d.gL(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fsj(d),B.bm(D.j8,w,w,w,A.c,w,A.ck,w,w,w,w,w)),A.S,B.ey(A.o0,D.TE,new C.fsk(d),B.dg(w,w,w,w,w,w,w,w,w,A.ad,w,w,A.ck,w,w,Q.wG,w,w,w,w))],x.p),A.aj,w,A.e,A.Q,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:26}
C.fsj.prototype={
$0(){B.a5(this.a,!1).O("continue")
return null},
$S:0}
C.fsk.prototype={
$0(){B.a5(this.a,!1).O("new")
return null},
$S:0}
C.fsp.prototype={
$1(d){return d.w==="hati_kuhoweya"},
$S:z+2}
C.fsq.prototype={
$1(d){var w=null,v=this.a
return B.bl(!0,new B.D(E.xD,B.v(B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.b2,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.by,D.feG,A.N,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aQ,B.dk(D.Gh,B.d('Endelea na "'+A.d.gL(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fsn(d),B.bm(D.j8,w,w,w,A.c,w,A.ck,w,w,w,w,w)),A.S,B.ey(A.o0,D.TE,new C.fso(d),B.dg(w,w,w,w,w,w,w,w,w,A.ad,w,w,A.ck,w,w,Q.wG,w,w,w,w))],x.p),A.aj,w,A.e,A.Q,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:26}
C.fsn.prototype={
$0(){B.a5(this.a,!1).O("continue")
return null},
$S:0}
C.fso.prototype={
$0(){B.a5(this.a,!1).O("new")
return null},
$S:0}
C.fst.prototype={
$1(d){return d.w==="hati_malipo_awamu"},
$S:z+2}
C.fsu.prototype={
$1(d){var w=null,v=this.a
return B.bl(!0,new B.D(E.xD,B.v(B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.b2,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.by,D.fl0,A.N,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aQ,B.dk(D.Gh,B.d('Endelea na "'+A.d.gL(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fsr(d),B.bm(D.j8,w,w,w,A.c,w,A.ck,w,w,w,w,w)),A.S,B.ey(A.o0,D.TE,new C.fss(d),B.dg(w,w,w,w,w,w,w,w,w,A.ad,w,w,A.ck,w,w,Q.wG,w,w,w,w))],x.p),A.aj,w,A.e,A.Q,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:26}
C.fsr.prototype={
$0(){B.a5(this.a,!1).O("continue")
return null},
$S:0}
C.fss.prototype={
$0(){B.a5(this.a,!1).O("new")
return null},
$S:0}
C.fLx.prototype={
$1(d){return D.fRr},
$S:z+74}
C.ed7.prototype={
$2(d,e){var w,v=null,u=this.a,t=u?D.bc5:A.L_,s=B.I(A.aw.j(0.25),A.q,1),r=B.av(B.p(v,v,A.f,v,v,new B.o(A.aw.j(0.45),v,v,B.m(2),v,v,A.n),v,4,v,v,v,v,v,40),v,v,v),q=B.m(15)
q=B.p(v,D.bO8,A.f,v,v,new B.o(v,v,B.I(A.c.j(0.5),A.q,1.2),q,B.a([new B.ac(0,A.G,A.bZ.j(0.35),A.ek,10)],x.V),D.anU,A.n),v,v,v,v,A.xu,v,v,v)
w=x.p
return B.p(v,B.v(B.a([new B.D(H.Yo,B.v(B.a([r,A.aA,B.A(B.a([q,A.bf,B.E(B.v(B.a([B.d("Chagua muundo wa hati",v,v,v,v,v,v,B.l(v,v,u?A.c:Z.KX,v,v,v,v,v,v,v,v,17,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.bB,B.d("Hati ya Ndoa \xb7 19 miundo",v,v,v,v,v,v,D.f1Z,v,v,v)],w),A.F,v,A.e,A.j,0,A.p),1)],w),A.m,v,A.e,A.j,0,v,v)],w),A.m,v,A.e,A.j,0,A.p),v),B.E(B.ie(!0,v,e,A.y,D.aNx,new C.ed6(this.b),19,D.ahn,v,A.ah,!1),1)],w),A.m,v,A.e,A.j,0,A.p),A.f,v,v,new B.o(t,v,s,A.m5,v,v,A.n),v,v,v,v,v,v,v,v)},
$S:114}
C.ed6.prototype={
$2(d,e){var w=D.Qm[e]
return new C.aeB(w,new C.ed5(this.a,w),null)},
$S:z+75}
C.ed5.prototype={
$0(){B.a5(this.a,!1).O(this.b.a)
return null},
$S:0}
C.fAe.prototype={
$0(){return B.fXI(C.hSW(this.a))},
$S:312}
C.fAd.prototype={
$0(){var w=C.fZ0(this.a)
return"data:image/png;base64,"+A.cT.gcw().aJ(w)},
$S:23}
C.fd7.prototype={
$4(d,e,f,g){var w=d+f*7,v=g*3
v=B.a([new B.jc(d,e),new B.jc(w,e+v),new B.jc(d+f*14,e),new B.jc(w,e-v)],x.J)
B.a1m(this.a,C.fy(4291404327),v)},
$S:704}
C.fLI.prototype={
$1(d){return new C.Vj(this.a,null)},
$S:z+77}
C.egp.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.ego())},
$S:29}
C.ego.prototype={
$0(){},
$S:0}
C.egq.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.egn(w,d))},
$S:1673}
C.egn.prototype={
$0(){return this.a.x=J.eT(A.dD.gaM(this.b))},
$S:0}
C.egr.prototype={
$1(d){},
$S:31}
C.eg1.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.efY.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.eg8.prototype={
$0(){var w=this.a
w.as=!0
w.at="The editor is writing your newspaper\u2026"},
$S:0}
C.eg9.prototype={
$0(){var w=this.a
A.d.a9(w.ay)
w.z=this.b
w=w.ax
A.d.a9(w)
w.push(D.eiG)},
$S:0}
C.ega.prototype={
$0(){return this.a.as=!1},
$S:0}
C.eg3.prototype={
$0(){var w=this.a
w.as=!0
w.at="Working on it\u2026"
w.ax.push(new B.y("you",this.b))
w.f.bO(0,A.c5)},
$S:0}
C.eg4.prototype={
$0(){var w,v=this.b
if(v.c){w=this.a
w.ay.push(w.z)
w.z=v.b}this.a.ax.push(new B.y("ai",v.a))},
$S:0}
C.eg5.prototype={
$0(){return this.a.ax.push(new B.y("ai",B.t(this.b)))},
$S:0}
C.eg6.prototype={
$0(){return this.a.as=!1},
$S:0}
C.eg7.prototype={
$1(d){var w=this.a.r,v=w.f
if(v.length!==0){v=A.d.gd_(v).Q
v.toString
w.m8(v,A.dU,A.ia)}},
$S:8}
C.eg2.prototype={
$0(){var w=this.a,v=w.z,u=C.fAS(w.y),t=this.b
w.y=t
if(v.a===u)w.z=v.cFP(C.fAS(t))},
$S:0}
C.eg_.prototype={
$0(){var w=this.a
w.as=!0
w.at="Making your picture\u2026"},
$S:0}
C.eg0.prototype={
$0(){return this.a.as=!1},
$S:0}
C.egg.prototype={
$0(){return B.a5(this.a,!1).lP()},
$S:0}
C.egh.prototype={
$0(){var w=this.a
return w.m(new C.egf(w))},
$S:0}
C.egf.prototype={
$0(){var w=this.a
return w.z=w.ay.pop()},
$S:0}
C.egi.prototype={
$0(){var w=this.a
return w.m(new C.ege(w,this.b))},
$S:0}
C.ege.prototype={
$0(){var w=this.b.b
this.a.e.saV(0,w)
return w},
$S:0}
C.egj.prototype={
$1(d){var w=this.a
return w.m(new C.egd(w))},
$S:9}
C.egd.prototype={
$0(){return this.a.Q="en"},
$S:0}
C.egk.prototype={
$1(d){var w=this.a
return w.m(new C.egc(w))},
$S:9}
C.egc.prototype={
$0(){return this.a.Q="sw"},
$S:0}
C.egl.prototype={
$0(){var w=this.a
return w.m(new C.egb(w,this.b))},
$S:0}
C.egb.prototype={
$0(){var w=this.b
this.a.f.saV(0,w)
return w},
$S:0}
C.egm.prototype={
$1(d){return this.a.Zk()},
$S:2}
C.efZ.prototype={
$0(){return this.a.c6a(this.b)},
$S:0}
C.cbS.prototype={
$1(d){var w=this.a
return typeof w.h(0,d)=="string"?A.a.i(B.cP(w.h(0,d))):null},
$S:285}
C.cbQ.prototype={
$1(d){return A.a.i(d)},
$S:14}
C.cbR.prototype={
$1(d){return d.length!==0},
$S:3}
C.fzP.prototype={
bjP(d,e){var w=0,v=B.j(x.H),u,t,s,r
var $async$$2=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:r=new C.bO_(d,B.a([],x.bH))
for(u=e.length,t=0;t<e.length;e.length===u||(0,B.L)(e),++t){s=e[t]
r.cCk($.qO().jw(0,"assets/news_fonts/"+s))}w=2
return B.b(r.mE(0),$async$$2)
case 2:return B.h(null,v)}})
return B.i($async$$2,v)},
$2(d,e){return this.bjP(d,e)},
$S:1674}
C.fy6.prototype={
$1(d){return d.length!==0},
$S:3}
C.fy8.prototype={
$1(d){var w=this.a.a
w=A.d.aI(A.d.dq(this.b,w,w+d)," ")
w=B.aK(w," \n\n ","\n\n")
w=B.aK(w," \n\n","\n\n")
return B.aK(w,"\n\n ","\n\n")},
$S:80}
C.fy7.prototype={
$1(d){var w,v,u,t=null
if(d===0)return!0
w=B.hL(t,t,t,t,B.dh(t,t,t,t,t,t,t,t,t,this.c,this.b.$1(d)),A.qg,A.ce,t,A.e9,A.ca)
v=this.a
w.yH(v.b)
u=w.b.a.c
return u.gbc(u)<=v.a},
$S:33}
C.fcJ.prototype={
$1(d){var w=A.a.fD(d,B.af("\\s+",!0,!1,!1,!1))
return new B.a2(w,new C.fcK(),B.U(w).k("a2<1>")).gM(0)},
$S:270}
C.fcK.prototype={
$1(d){return d.length!==0},
$S:3}
C.fcH.prototype={
$2(d,e){return d+this.a.$1(e)},
$S:215}
C.fcI.prototype={
$2(d,e){return d+this.a.$1(e)},
$S:215}
C.cbT.prototype={
$2(a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=null,a7=y.g,a8=b0.b
a8=isFinite(a8)?a8:824
w=b0.d
w=isFinite(w)?w:340
v=a5.b
u=a5.c
t=u-1
s=(a8-v*t)/u
r=a5.d&&a5.a.gazo()?Math.min(150,w*0.42):0
q=a5.e
p=x.s
o=B.a([],p)
for(n=a5.a,m=x.G,l=n.d,k=l.as;q>=10.5;q-=0.5){j=n.c.r
i=j.length===0?B.a([a7],p):j
h=B.b0(l.w)
g=B.a([],m)
for(f=0;f<u;++f)g.push(new B.y(s,w-(f===t?r:0)))
o=C.fYI(i,new B.G(!0,h,a6,k,a6,a6,q,A.cN,A.bl,0,a6,a6,1.28,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),g)
if(C.fVB(j.length===0?B.a([a7],p):j,o))break}e=q*1.28
j=A.d.aI(n.gcej(),"\n\n")
d=B.hL(a6,a6,a6,a6,B.dh(a6,a6,a6,a6,a6,a6,a6,a6,a6,n.adw(k,q,1.28),j),A.qg,A.ce,a6,A.e9,A.ca)
d.yH(s)
for(a0=1;a0<40;++a0){j=d.b.a.c
a1=Math.min(w,j.gbc(j)/u+e*a0)
j=n.c.r
i=j.length===0?B.a([a7],p):j
h=B.b0(l.w)
g=B.a([],m)
for(f=0;f<u;++f)g.push(new B.y(s,Math.min(a1,w-(f===t?r:0))))
a2=C.fYI(i,new B.G(!0,h,a6,k,a6,a6,q,A.cN,A.bl,0,a6,a6,1.28,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),g)
if(C.fVB(j.length===0?B.a([a7],p):j,a2)){o=a2
break}}a3=n.adw(k,q,1.28)
p=x.p
m=B.a([],p)
for(k=r>0,v=v/2-0.5,l=l.w,j=r-12,a4=0;a4<u;++a4){i=B.a([],p)
if(a4>0)i.push(new B.D(new B.Q(v,0,v,0),B.p(a6,a6,A.f,B.b0(l).j(0.5),a6,a6,a6,a6,a6,a6,a6,a6,a6,1),a6))
h=B.a([new B.bD(1,A.bh,new B.x(o.length>a4?o[a4]:"",a6,a3,a6,A.qg,a6,a6,a6,a6,a6,a6,a6),a6)],p)
if(k&&a4===t)h.push(n.azn(s,j))
i.push(new B.a7(s,a6,B.v(h,A.F,a6,A.e,A.j,0,A.p),a6))
A.d.v(m,i)}return B.A(m,A.F,a6,A.e,A.j,0,a6,a6)},
$S:347}
C.cbU.prototype={
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
n=o.gazo()
m=n?Math.min(140,p*0.4):0
n=x.s
l=B.a([],n)
for(k=x.G,j=o.d,i=j.as,h=17;h>=10.5;h-=0.5){g=o.c.r
f=g.length===0?B.a([a6],n):g
e=B.b0(j.w)
d=B.a([new B.y(u,q),new B.y(u,q)],k)
for(a0=0;a0<t;++a0)d.push(new B.y(r,p-(a0===s?m:0)))
l=C.fYI(f,new B.G(!0,e,a5,i,a5,a5,h,A.cN,A.bl,0,a5,a5,1.28,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5),d)
if(C.fVB(g.length===0?B.a([a6],n):g,l))break}a1=o.adw(i,h,1.28)
a2=new C.cbV(a1)
n=x.p
v=B.A(B.a([a2.$2(l[0],u),A.Iz,new B.a7(v,a5,a4.f,a5),A.Iz,a2.$2(l[1],u)],n),A.F,a5,A.e,A.j,0,a5,a5)
k=B.a([],n)
for(i=m>0,j=j.w,g=m-12,a3=0;a3<t;++a3){f=B.a([],n)
if(a3>0)f.push(new B.D(D.bvx,B.p(a5,a5,A.f,B.b0(j).j(0.5),a5,a5,a5,a5,a5,a5,a5,a5,a5,1),a5))
e=B.a([new B.bD(1,A.bh,new B.x(l[2+a3],a5,a1,a5,A.qg,a5,a5,a5,a5,a5,a5,a5),a5)],n)
if(i&&a3===s)e.push(o.azn(r,g))
f.push(new B.a7(r,a5,B.v(e,A.F,a5,A.e,A.j,0,A.p),a5))
A.d.v(k,f)}return B.v(B.a([new B.a7(a5,q,v,a5),A.ac,B.E(B.A(k,A.F,a5,A.e,A.j,0,a5,a5),1)],n),A.m,a5,A.e,A.j,0,A.p)},
$S:145}
C.cbV.prototype={
$2(d,e){var w=null
return new B.a7(e,w,B.d(d,w,w,w,w,w,w,this.a,A.qg,w,w),w)},
$S:1675}
C.fLL.prototype={
$1(d){return new C.Vm(this.a,this.b,null)},
$S:z+79}
C.ehA.prototype={
$1(d){return d.lY()},
$S:1676}
C.ehB.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.ehz(w,d))},
$S:1677}
C.ehz.prototype={
$0(){var w=this.b
return this.a.d=w.gfp(w)},
$S:0}
C.ehn.prototype={
$0(){return this.a.y=!0},
$S:0}
C.eho.prototype={
$0(){return this.a.y=!1},
$S:0}
C.ehu.prototype={
$0(){return B.a5(this.a,!1).eK()},
$S:0}
C.ehv.prototype={
$2(d,e){var w=null,v=this.a,u=this.b,t=B.I(A.bA,A.q,2.5)
return B.aE(w,B.p(w,B.b3(w,w,w,new C.bba(u,v.gaws(),w),A.f1),A.f,w,w,new B.o(w,w,t,w,w,w,A.n),w,w,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.ehs(v),new C.eht(v,e,u),w,w,w,w,w,w,w,w,w,w,w,!1,A.a8)},
$S:35}
C.ehs.prototype={
$1(d){var w=this.a
return w.x=w.f},
$S:258}
C.eht.prototype={
$1(d){var w=this.a
w.m(new C.ehp(w,d,this.b,this.c))},
$S:227}
C.ehp.prototype={
$0(){var w,v,u,t=this,s=t.a,r=t.b
s.f=A.k.D(s.x*r.d,1,6)
w=s.gaws()
r=r.a
v=t.c
u=t.d
s.r=A.k.D(s.r-r.a/v.b*(w.c-w.a)/u.c,0,1)
s.w=A.k.D(s.w-r.b/v.d*(w.d-w.b)/u.d,0,1)},
$S:0}
C.ehw.prototype={
$1(d){var w=this.a
return w.m(new C.ehr(w,this.b))},
$S:9}
C.ehr.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.ehx.prototype={
$1(d){var w=this.a
return w.m(new C.ehq(w,d))},
$S:6}
C.ehq.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.ehy.prototype={
$0(){return B.a5(this.b,!1).O(this.a.a.c)},
$S:0}
C.fM0.prototype={
$1(d){return D.fUe},
$S:z+83}
C.eQW.prototype={
$1(d){return this.a.Y1()},
$S:8}
C.ePO.prototype={
$0(){var w=this.a,v=this.b
w.z=v
w.y="data:image/png;base64,"+A.cT.gcw().aJ(v)},
$S:0}
C.eQb.prototype={
$0(){var w=this.a
w.p4=this.b
w.as=3},
$S:0}
C.eQl.prototype={
$1(d){return d>=this.a.length},
$S:33}
C.ePx.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.ePy.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.ePv.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.ePw.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.eQ4.prototype={
$2(d,e){var w,v,u=null,t=e.d,s=this.a,r=new C.eQ5(s,this.b,t,e.b),q=r.$1(!0),p=s.y2
p=B.a([B.jw(B.rs(p>0.2?C.fQm(q,B.a4G(p,p,A.x)):q),A.r,u)],x.p)
w=s.bh
if(w>0.02){v=B.a4G(12,12,A.x)
p.push(B.jw(B.dc(B.rs(C.fQm(r.$1(!0),v)),w*0.75),A.r,u))}r=s.b3
if(r!=null&&s.b2>0)p.push(B.el(u,B.b0(r).j(s.b2),!0))
r=s.be
if(r!=null&&s.bM>0){r=B.b0(r).j(s.bM)
w=s.be
w.toString
p.push(B.c_(u,new B.o(u,u,u,u,u,new B.bT(D.aVD,1.15,A.x,u,0,B.a([r,B.b0(w).j(0)],x.O),u,u),A.n),A.bd))}r=s.aE
if(r>0)p.push(B.c_(u,new B.o(u,u,u,u,u,new B.bT(D.aVo,0.8,A.x,u,0,B.a([A.c.j(r*0.55),A.c.j(0)],x.O),u,u),A.n),A.bd))
r=s.aP
if(r>0)p.push(B.c_(u,new B.o(u,u,u,u,u,new B.a8(A.b_,A.b5,A.x,B.a([A.w.j(r),A.K,A.K,A.w.j(s.aP)],x.O),D.cSS,u),A.n),A.bd))
if(s.aH>0){r=s.k1
p.push(B.ao(u,B.c_(u,new B.o(u,u,u,u,u,new B.a8(A.b_,A.b5,A.x,B.a([A.w.j(0),A.w.j(s.aH),A.w.j(s.aH),A.w.j(0)],x.O),D.d2r,u),A.n),A.bd),0.48*t,u,0,0,(r-0.06)*t,u))}r=s.Y
if(r>0)p.push(B.el(u,A.w.j(r),!0))
r=s.b6
if(r>0)p.push(B.c_(u,new B.o(u,u,u,u,u,new B.bT(A.A,0.95,A.x,u,0,B.a([A.K,A.w.j(r)],x.O),D.d_G,u),A.n),A.bd))
s=s.az
if(s>0)p.push(B.b3(u,u,u,new C.beJ(s,u),A.au))
return new B.an(A.W,u,A.b0,A.r,p,u)},
$S:63}
C.eQ5.prototype={
$1(d){var w,v,u,t,s,r=this,q=null,p=B.fL(r.b,A.A,q,q,A.cl,A.bR,!0,q,!1,q,q),o=r.a,n=o.aVO(o.RG,o.R8,o.rx,o.ry,o.to,o.x1,o.x2,o.xr,o.y1),m=o.c7,l=m*3.141592653589793/180
if(m===0)w=1
else{m=Math.cos(l)
v=Math.sin(l)
u=r.c
t=r.d
s=u/t
u=s>1?s:t/u
w=Math.abs(m)+Math.abs(v)*u}m=o.bj
v=o.aS
u=v-1
t=o.bU
s=o.cU?-1:1
return B.dU(B.ec(A.A,B.eG(A.A,l,B.fs(A.A,new B.D7(new B.yE(q,q,n,A.Af),p,q),q,B.vD(s,o.cX?-1:1,1),!0),q),v*w,q,q),new B.u(-m*r.d*u/2,-t*r.c*u/2))},
$S:606}
C.eQh.prototype={
$0(){return this.a.m(new C.eQg(this.b,this.c))},
$S:0}
C.eQg.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eQi.prototype={
$1(d){return this.a.m(new C.eQf(this.b,d))},
$S:6}
C.eQf.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eQk.prototype={
$0(){return this.a.m(new C.eQj(this.b,this.c))},
$S:0}
C.eQj.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.ePn.prototype={
$1(d){return d.c===this.a.x},
$S:z+93}
C.ePo.prototype={
$1(d){var w=this.a
return w.m(w.gcw5())},
$S:2}
C.ePp.prototype={
$1(d){return this.a.m(new C.ePm())},
$S:2}
C.ePm.prototype={
$0(){},
$S:0}
C.ePq.prototype={
$0(){var w=this.a
return w.m(new C.ePl(w,this.b))},
$S:0}
C.ePl.prototype={
$0(){return this.a.x=this.b},
$S:0}
C.ePs.prototype={
$2(d,e){return A.av},
$S:36}
C.ePr.prototype={
$2(d,e){var w=null,v=this.b[e],u=this.a,t=v.a===u.w.a,s=B.m(14),r=B.a([B.b0(v.e),B.b0(v.f)],x.O),q=t?A.c:A.bF
q=B.I(q,A.q,t?2.5:1)
r=B.dj(w,B.av(B.d("\u201c",w,w,w,w,w,w,B.l(w,w,B.b0(v.r),w,w,w,w,w,w,w,w,40,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,w),w,w,A.bc,new B.o(w,w,q,s,w,new B.a8(A.b_,A.b5,A.x,r,w,w),A.n),A.hX,w,94,w,w,w,w,70)
return B.aE(w,new B.a7(70,w,B.v(B.a([r,A.h0,B.d(v.b,w,1,A.a2,w,w,w,B.l(w,w,t?A.c:A.az,w,w,w,w,w,w,w,w,10.5,w,w,A.P,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.ePk(u,v),w,w,w,w,w,w,!1,A.a8)},
$S:75}
C.ePk.prototype={
$0(){var w=this.a
return w.m(new C.ePh(w,this.b))},
$S:0}
C.ePh.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.ePt.prototype={
$1(d){var w=this.a
return w.m(new C.ePj(w,d))},
$S:9}
C.ePj.prototype={
$0(){return this.a.k3=this.b},
$S:0}
C.ePu.prototype={
$1(d){var w=this.a
return w.m(new C.ePi(w,d))},
$S:9}
C.ePi.prototype={
$0(){return this.a.k2=this.b},
$S:0}
C.eQL.prototype={
$1(d){var w=this.a.db
return w[d]===w[A.d.gL(this.b)]},
$S:33}
C.eQS.prototype={
$1(d){var w=this.a
return w.m(new C.eQT(w,d))},
$S:28}
C.eQT.prototype={
$0(){var w,v,u,t,s
for(w=this.a,v=w.dx,v=B.ed(v,v.r,B.a4(v).c),w=w.db,u=this.b,t=v.$ti.c;v.C();){s=v.d
w[s==null?t.a(s):s]=u}},
$S:0}
C.eQU.prototype={
$1(d){var w
A:{if(1===d){w=20
break A}if(2===d){w=28
break A}if(-1===d){w=11
break A}w=15
break A}return w},
$S:245}
C.eQM.prototype={
$0(){var w=this.a
return w.m(new C.eQK(w,this.b))},
$S:0}
C.eQK.prototype={
$0(){var w=this.a.dx,v=this.b
return w.t(0,v)?w.W(0,v):w.J(0,v)},
$S:0}
C.eQN.prototype={
$0(){var w=this.a
return w.m(new C.eQJ(w,this.b))},
$S:0}
C.eQJ.prototype={
$0(){var w,v=this.b.length,u=J.e3(v,x.S)
for(w=0;w<v;++w)u[w]=w
return this.a.dx.v(0,u)},
$S:0}
C.eQO.prototype={
$0(){var w=this,v=w.a
return v.m(new C.eQI(v,w.b,w.c,w.d))},
$S:0}
C.eQI.prototype={
$0(){var w,v,u,t,s,r=this,q=r.a.dx
q.a9(0)
w=B.a([],x.t)
for(v=r.b,u=r.c,t=r.d,s=0;s<v.length;++s)if(u[s]===t)w.push(s)
q.v(0,w)},
$S:0}
C.eQP.prototype={
$0(){var w=this.a,v=w.dx
return w.m(v.grw(v))},
$S:0}
C.eQQ.prototype={
$0(){return this.b.$1(this.a.a)},
$S:0}
C.eQR.prototype={
$0(){var w=this.a
return w.m(new C.eQH(w))},
$S:0}
C.eQH.prototype={
$0(){var w=this.a.db
return A.d.h_(w,0,w.length,0)},
$S:0}
C.eQu.prototype={
$1(d){return d.a===this.a.dy},
$S:231}
C.eQv.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=(e.b-42)/7,h=B.a([],x.p)
for(w=i*0.42,v=this.a,u=i*0.95,t=x.O,s=0;s<21;++s){r={}
q=D.avW[s]
r.a=null
p=q.a
r.a=p
o=v.dy
n=new B.aT(9,9)
m=B.a([B.b0(v.w.e),B.b0(v.w.f)],t)
l=r.a
k=v.fx
h.push(v.aww(new B.n6(new B.bp(n,n,n,n),A.aq,new B.kN(new B.o(j,j,j,j,j,new B.a8(A.a3,A.a7,A.x,m,j,j),A.n),A.bd,new C.aZj(l,B.b0(k==null?v.w.x:k),A.k.D(w,12,26),j),j),j),u,q.b,o===p,new C.eQt(r,v),2,i))}return B.bW(A.bz,h,A.bq,7,7)},
$S:162}
C.eQt.prototype={
$0(){var w=this.b
return w.m(new C.eQo(this.a,w))},
$S:0}
C.eQo.prototype={
$0(){return this.b.dy=this.a.a},
$S:0}
C.eQw.prototype={
$1(d){var w=this.a
w.p1=!1
w.k4=d},
$S:206}
C.eQz.prototype={
$0(){var w=this.a
return w.m(new C.eQs(w))},
$S:0}
C.eQs.prototype={
$0(){return this.a.p1=!0},
$S:0}
C.eQA.prototype={
$1(d){return this.a.p2=d},
$S:6}
C.eQB.prototype={
$1(d){return this.a.p3=d},
$S:6}
C.eQC.prototype={
$1(d){return this.a.ok=d},
$S:6}
C.eQD.prototype={
$0(){var w=this.a
return w.m(new C.eQr(w))},
$S:0}
C.eQr.prototype={
$0(){var w=this.a
return w.fy=!w.fy},
$S:0}
C.eQE.prototype={
$0(){var w=this.a
return w.m(new C.eQq(w))},
$S:0}
C.eQq.prototype={
$0(){var w=this.a
return w.go=!w.go},
$S:0}
C.eQF.prototype={
$0(){var w=this.b
return w.m(new C.eQp(this.a,w))},
$S:0}
C.eQp.prototype={
$0(){return this.b.id=this.a.a},
$S:0}
C.eQG.prototype={
$1(d){return this.a.fx=d},
$S:206}
C.eQx.prototype={
$1(d){return this.a.fr=d},
$S:6}
C.eQy.prototype={
$1(d){return this.a.k1=d},
$S:6}
C.eQ8.prototype={
$0(){var w=this.a
return w.m(new C.eQ7(w))},
$S:0}
C.eQ7.prototype={
$0(){var w=this.a
w.p4=null
w.b1W()},
$S:0}
C.eQ9.prototype={
$0(){var w=this.a
return w.m(new C.eQ6(w,this.b))},
$S:0}
C.eQ6.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.eQa.prototype={
$0(){var w=this.a
return w.m(w.gcmM())},
$S:0}
C.eQ0.prototype={
$0(){var w=this.a
return w.m(new C.eQ_(w))},
$S:0}
C.eQ_.prototype={
$0(){var w=this.a
w.RG=0.03
w.rx=1.12
w.ry=1.15
w.R8=w.xr=0},
$S:0}
C.eQ1.prototype={
$0(){var w=this.a
return w.m(new C.ePZ(w))},
$S:0}
C.ePZ.prototype={
$0(){var w=this.a
w.aH=0.55
w.Y=Math.max(w.Y,0.12)},
$S:0}
C.eQ2.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=null,n=(e.b-24)/4,m=B.a([],x.p)
for(w=n*1.25,v=this.a,u=this.b,t=0;t<18;++t){s=D.d02[t]
r=s.b
q=Math.abs(v.RG-r)<0.001&&Math.abs(v.rx-s.c)<0.001&&Math.abs(v.ry-s.d)<0.001&&Math.abs(v.to-s.e)<0.001&&Math.abs(v.x1-s.f)<0.001&&Math.abs(v.xr-s.r)<0.001&&Math.abs(v.x2)<0.5&&Math.abs(v.R8)<0.001&&!v.y1
p=new B.aT(9,9)
m.push(v.aww(new B.n6(new B.bp(p,p,p,p),A.aq,new B.a7(1/0,1/0,new B.D7(new B.yE(o,o,v.aVO(r,0,s.c,s.d,s.e,s.f,0,s.r,!1),A.Af),B.fL(u,A.A,140,o,A.cl,A.bR,!1,o,!1,o,o),o),o),o),w,s.a,q,new C.ePY(v,s),3,n))}return B.bW(A.bz,m,A.bq,10,8)},
$S:162}
C.ePY.prototype={
$0(){var w=this.a
return w.m(new C.ePX(w,this.b))},
$S:0}
C.ePX.prototype={
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
C.ePF.prototype={
$1(d){return this.a.R8=d},
$S:6}
C.ePG.prototype={
$1(d){return this.a.RG=d},
$S:6}
C.ePH.prototype={
$1(d){return this.a.rx=d},
$S:6}
C.ePI.prototype={
$1(d){return this.a.xr=d},
$S:6}
C.ePJ.prototype={
$1(d){return this.a.aE=d},
$S:6}
C.ePK.prototype={
$1(d){return this.a.Y=d},
$S:6}
C.ePL.prototype={
$1(d){return this.a.b6=d},
$S:6}
C.ePM.prototype={
$1(d){return this.a.aH=d},
$S:6}
C.ePN.prototype={
$1(d){return this.a.aP=d},
$S:6}
C.eP0.prototype={
$1(d){return this.a.ry=d},
$S:6}
C.eP1.prototype={
$1(d){return this.a.to=d},
$S:6}
C.eP2.prototype={
$1(d){return this.a.x1=d},
$S:6}
C.eP3.prototype={
$1(d){return this.a.x2=d},
$S:6}
C.eP4.prototype={
$0(){var w=this.a
return w.m(new C.eP_(w))},
$S:0}
C.eP_.prototype={
$0(){var w=this.a
return w.y1=!w.y1},
$S:0}
C.eP5.prototype={
$1(d){return this.a.b3=d},
$S:206}
C.eP6.prototype={
$1(d){return this.a.b2=d},
$S:6}
C.ePz.prototype={
$1(d){return this.a.y2=d},
$S:6}
C.ePA.prototype={
$1(d){return this.a.bh=d},
$S:6}
C.ePB.prototype={
$1(d){return this.a.az=d},
$S:6}
C.ePC.prototype={
$1(d){return this.a.be=d},
$S:206}
C.ePD.prototype={
$1(d){return this.a.bM=d},
$S:6}
C.ePa.prototype={
$1(d){return this.a.aS=d},
$S:6}
C.ePb.prototype={
$1(d){return this.a.bj=d},
$S:6}
C.ePc.prototype={
$1(d){return this.a.bU=d},
$S:6}
C.ePd.prototype={
$1(d){return this.a.c7=d},
$S:6}
C.ePe.prototype={
$0(){var w=this.a
return w.m(new C.eP9(w))},
$S:0}
C.eP9.prototype={
$0(){var w=this.a
return w.c7=A.k.F(w.c7+90+180,360)-180},
$S:0}
C.ePf.prototype={
$0(){var w=this.a
return w.m(new C.eP8(w))},
$S:0}
C.eP8.prototype={
$0(){var w=this.a
return w.cU=!w.cU},
$S:0}
C.ePg.prototype={
$0(){var w=this.a
return w.m(new C.eP7(w))},
$S:0}
C.eP7.prototype={
$0(){var w=this.a
return w.cX=!w.cX},
$S:0}
C.eQ3.prototype={
$0(){var w=this.a,v=w.c
v.toString
return C.i78(v,w.p4)},
$S:0}
C.ePW.prototype={
$2(d,e){var w=null,v=this.a.z,u=v==null?D.bkx:B.fL(v,A.A,w,w,A.cl,A.bR,!1,w,!1,w,w)
return C.fye(d.length===0?"rounded":d,u,e)},
$S:141}
C.ePS.prototype={
$0(){var w=this.a
return w.m(new C.ePR(w))},
$S:0}
C.ePR.prototype={
$0(){var w=this.a
w.ay=0.39
w.ch=0.8
w.CW=0.22
w.cx="circle"
w.cy="gold"},
$S:0}
C.ePT.prototype={
$0(){var w=this.b
return w.m(new C.ePQ(this.a,w))},
$S:0}
C.ePQ.prototype={
$0(){return this.b.cx=this.a.a},
$S:0}
C.ePU.prototype={
$0(){var w=this.b
return w.m(new C.ePP(this.a,w))},
$S:0}
C.ePP.prototype={
$0(){return this.b.cy=this.a.a},
$S:0}
C.ePV.prototype={
$1(d){var w=this.a
w.CW=d
w.ay=A.k.D(w.ay,0,1-d)
w.ch=A.k.D(w.ch,0,0.95)},
$S:6}
C.eQe.prototype={
$2(d,e){var w,v,u,t=null,s=e.b,r=e.d,q=B.m(20),p=B.a([new B.ac(-4,A.G,A.b7.j(0.35),A.J,30)],x.V),o=B.m(20),n=this.a,m=x.p,l=B.a([],m)
if(n.p4!=null)l.push(new B.ev(n.cgd(),n.r))
l.push(new C.Io(n.ct9(),!1,!1,t))
o=B.bZ(0,B.bw(o,new B.ev(new B.an(A.W,t,A.b0,A.r,l,t),n.f),A.aq),0,0,0)
l=n.ay
w=n.ch
v=n.CW*s
u=B.m(8)
return B.p(t,new B.an(A.W,t,A.aa,A.r,B.a([o,B.ao(t,B.aE(A.c4,B.c_(t,new B.o(t,t,B.I(A.c.j(0.3),A.q,1),u,t,t,A.n),A.bd),A.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.eQd(n,s,r),t,t,t,t,t,t,t,t,t,t,t,t,t,t,!1,A.a8),v,t,l*s,t,w*r,v)],m),t),A.f,t,t,new B.o(t,t,t,q,p,t,A.n),t,t,t,t,t,t,t,t)},
$S:223}
C.eQd.prototype={
$1(d){var w=this.a
return w.m(new C.eQc(w,d,this.b,this.c))},
$S:18}
C.eQc.prototype={
$0(){var w,v=this,u=v.a,t=v.b.d,s=v.c
u.ay=A.k.D(u.ay+t.a/s,0,1-u.CW)
w=v.d
u.ch=A.k.D(u.ch+t.b/w,0,1-u.CW*s/w)},
$S:0}
C.eQn.prototype={
$0(){var w=this.a
return w.m(new C.eQm(w,this.b))},
$S:0}
C.eQm.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.ePE.prototype={
$0(){var w=this.a.c
w.toString
return B.a5(w,!1).lP()},
$S:0}
C.eQV.prototype={
$2(d,e){var w,v,u,t=null,s=e.b
if(s>=860){w=this.a
v=x.p
return B.A(B.a([new B.a7(Math.min(s*0.4,460),t,B.v(B.a([w.aYx(),B.E(B.av(w.b0t(Math.max(240,e.d-110)),t,t,t),1)],v),A.m,t,A.e,A.j,0,A.p),t),B.E(B.v(B.a([B.E(w.aP4(),1),w.aLj()],v),A.m,t,A.e,A.j,0,A.p),1)],v),A.m,t,A.e,A.j,0,t,t)}u=A.k.D(e.d*0.36,190,360)
s=this.a
return B.v(B.a([s.aYx(),new B.D(A.hK,B.av(s.b0t(u),t,t,t),t),B.E(s.aP4(),1),s.aLj()],x.p),A.m,t,A.e,A.j,0,A.p)},
$S:577}
C.fvv.prototype={
$10$align$style$weight(d,e,f,g,h,i,j,k,l,m){return C.ep(k,!1,j,A.aD,"",4280640491,i,l,m,"",h,C.bzL(),null,"","",0,!1,"",0,D.be,4280172719,2,d,0,0,"",D.cm,D.cQ,g,e,f)},
$9$align$weight(d,e,f,g,h,i,j,k,l){return this.$10$align$style$weight(d,e,f,g,h,i,j,k,A.bl,l)},
$8$weight(d,e,f,g,h,i,j,k){return this.$10$align$style$weight(d,e,f,g,h,i,j,A.L,A.bl,k)},
$7(d,e,f,g,h,i,j){return this.$10$align$style$weight(d,e,f,g,h,i,j,A.L,A.bl,A.P)},
$S:z+98}
C.fvu.prototype={
$3(d,e,f){var w=this,v=C.bzL(),u=w.b?A.H:A.cv,t=w.c?A.cF:A.bl
return C.ep(w.d,!1,f,A.aD,"",4280640491,e,t,u,"",0.36,v,null,"","",0,!0,"",0,D.be,4280172719,2,d,0,w.f,w.e,D.cm,D.cQ,0.82,0.09,w.a)},
$S:z+28}
C.cde.prototype={
$1(d){return B.t(d)},
$S:17}
C.fDb.prototype={
$0(){return this.a},
$S:z+15}
C.fjQ.prototype={
$1(d){return d.a.cZ(this.a)},
$S:z+30}
C.fjR.prototype={
$2(d,e){return J.cm(e)},
$S:z+31}
C.fDd.prototype={
$0(){return B.a([],x.o)},
$S:z+15}
C.fDg.prototype={
$1(d){return d.a===A.a.i(this.a).toLowerCase()},
$S:z+10}
C.fDh.prototype={
$0(){return A.d.gL(D.vV)},
$S:z+33}
C.fD9.prototype={
$1(d){return d.a},
$S:z+16}
C.fDc.prototype={
$1(d){return d.a},
$S:z+16}
C.fB9.prototype={
$1(d){return A.a.i(B.t(d))},
$S:17}
C.fBa.prototype={
$1(d){return d.length!==0},
$S:3}
C.fBb.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.fvz.prototype={
$0(){return C.cC()},
$S:23}
C.fvC.prototype={
$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var w=this.a.$0(),v=m==null?this.b.e:m,u=this.c,t=u?k:D.cm,s=u?n:0
return C.ep(j,l,v,A.aD,"",4280640491,i,q,r,"",h,w,null,u?o:"",p,0,!1,"",0,D.be,4280172719,2,d,s,0,"",t,D.cQ,g,e,f)},
$6(d,e,f,g,h,i){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bg,D.dd,!1,null,0,"","",A.bl,A.a5)},
$7$key(d,e,f,g,h,i,j){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bg,D.dd,!1,null,0,"",j,A.bl,A.a5)},
$8$fx$key(d,e,f,g,h,i,j,k){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bg,D.dd,!1,null,0,j,k,A.bl,A.a5)},
$11$align$anim$delay$fx$key(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,!1,null,l,m,n,A.bl,A.a5)},
$10$align$anim$key$weight(d,e,f,g,h,i,j,k,l,m){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,!1,null,0,"",l,A.bl,m)},
$10$align$color$delay$key(d,e,f,g,h,i,j,k,l,m){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,D.dd,!1,k,l,"",m,A.bl,A.a5)},
$9$anim$key$weight(d,e,f,g,h,i,j,k,l){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bg,j,!1,null,0,"",k,A.bl,l)},
$9$color$delay$key(d,e,f,g,h,i,j,k,l){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bg,D.dd,!1,j,k,"",l,A.bl,A.a5)},
$11$anim$color$fx$key$weight(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bg,j,!1,k,0,l,m,A.bl,n)},
$11$align$anim$key$style$weight(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,!1,null,0,"",l,m,n)},
$11$anim$bullets$color$delay$key(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bg,j,k,l,m,"",n,A.bl,A.a5)},
$S:z+35}
C.fvB.prototype={
$9$fx$key$rotation(d,e,f,g,h,i,j,k,l){var w=this.a.$0()
return C.ep(A.bg,!1,4279310375,A.aD,"",i,24,A.bl,A.a5,"",h,w,null,this.b?j:"",k,0,!1,"",l,d,i,0,"",0,0,"",D.cm,D.f0,g,e,f)},
$6(d,e,f,g,h,i){return this.$9$fx$key$rotation(d,e,f,g,h,i,"","",0)},
$7$key(d,e,f,g,h,i,j){return this.$9$fx$key$rotation(d,e,f,g,h,i,"",j,0)},
$8$fx$key(d,e,f,g,h,i,j,k){return this.$9$fx$key$rotation(d,e,f,g,h,i,j,k,0)},
$S:z+27}
C.fvA.prototype={
$9$anim$delay$fx$key(d,e,f,g,h,i,j,k,l){var w=this.a.$0(),v=this.b,u=v?i:D.cm,t=v?j:0
return C.ep(A.bg,!1,4279310375,A.aD,"",4280640491,24,A.bl,A.a5,"",h,w,d,v?k:"",l,0,!1,"",0,D.be,4280172719,2,"",t,0,"",u,D.lq,g,e,f)},
$5(d,e,f,g,h){return this.$9$anim$delay$fx$key(d,e,f,g,h,D.q6,350,"","")},
$8$anim$delay$key(d,e,f,g,h,i,j,k){return this.$9$anim$delay$fx$key(d,e,f,g,h,i,j,"",k)},
$8$anim$fx$key(d,e,f,g,h,i,j,k){return this.$9$anim$delay$fx$key(d,e,f,g,h,i,350,j,k)},
$S:z+37}
C.fvy.prototype={
$1(d){var w=d.x
return w>0&&w<=this.a.length},
$S:z+17}
C.fy_.prototype={
$0(){var w=0,v=B.j(x.e),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.a){s=t.b
r=s.a
s=(r==="bullets"||r==="section")&&s.w.length!==0}else s=!1
w=s?3:5
break
case 3:s=t.b
w=6
return B.b($.hgd.cg(0,A.a.i(s.w).toLowerCase(),new C.fxY(s)),$async$$0)
case 6:q=e
w=4
break
case 5:q=null
case 4:w=t.c&&t.b.r.length!==0?7:9
break
case 7:s=t.b
w=10
return B.b(t.d.cg(0,s.r,new C.fxZ(s)),$async$$0)
case 10:p=e
w=8
break
case 9:p=null
case 8:u=new B.bv(t.e,new B.bnJ(p,q),x.e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1681}
C.fxY.prototype={
$0(){return F.aN1(this.a.w)},
$S:182}
C.fxZ.prototype={
$0(){var w=this.a.r,v=B.aK(w.toLowerCase()," ","_")
return F.byF("https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji@main/assets/"+B.hB(2,w,A.c6,!1)+"/3D/"+v+"_3d.png","image/png")},
$S:182}
C.fcE.prototype={
$1(d){return d.a==="bio"},
$S:z+17}
C.fcF.prototype={
$1(d){return d.a},
$S:z+18}
C.fcG.prototype={
$1(d){return d.b},
$S:z+19}
C.fMc.prototype={
$1(d){return D.fUv},
$S:z+41}
C.eX7.prototype={
$0(){return this.a.x=C.hKB(this.b,this.c.b)},
$S:0}
C.eX8.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.eX5.prototype={
$1(d){var w
if(this.a){w=this.b
if(w==null)w="circle"}else w=d
return w},
$S:413}
C.eX6.prototype={
$1(d){var w
if(this.a)w=d
else{w=this.b
if(w==null)w=""}return w},
$S:413}
C.eX4.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:o=t.b
n=t.a
m=n.c
m.toString
w=3
return B.b(B.bR(A.aB,null,new C.eX_(n,t.c,o,t.d,t.e,t.f),m,!0,!0,o,A.k4,!1,!1,x.N),$async$$0)
case 3:s=e
if(s==null){w=1
break}w=A.a.a0(s,"finale:")?4:5
break
case 4:r=A.a.b1(s,7)
if(r.length===0){n.m(new C.eX0(n))
w=1
break}o=n.c
if(o==null){w=1
break}m=n.w
q=m.d
if(q.length===0){q=n.x
if(q==null)q=""}w=6
return B.b(C.hlZ(o,m.cGC(q,r)),$async$$0)
case 6:p=e
if(p!=null&&n.c!=null)n.m(new C.eX1(n,p))
w=1
break
case 5:o=s==="__auto"?null:s
t.r.$1(o)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eX_.prototype={
$1(d){var w,v,u,t,s,r,q=this,p=null,o=new C.eX3(q.b,d),n=x.p,m=B.a([o.$2("__auto",B.p(p,D.b3J,A.f,p,p,D.aZP,p,p,p,p,p,p,p,p))],n),l=q.c,k=l?D.BT:D.BY,j=k.length,i=q.a,h=q.d,g=q.e,f=q.f,e=0
for(;e<j;++e){w=k[e].a
v=g.$1(w)
u=f.$1(w)
if(v.length===0&&u.length===0)v="rounded"
m.push(o.$2(w,new B.a7(64,64,C.fye(v,i.b2x(h),u),p)))}t=B.lX(1,m,4,10,10,p,A.dQ,!0)
if(!l)return B.bl(!0,new B.D(A9.xA,t,p),!0,!1,A.af,!0,!0)
s=new C.eX2(i,d)
m=B.aI(d,A.bU,x.w).w
l=B.a([s.$2("","None")],n)
for(e=0;e<32;++e){r=D.GB[e]
l.push(s.$2(r.a,r.b))}return B.bl(!0,new B.cS(new B.aY(0,1/0,0,m.a.b*0.85),B.cd(B.v(B.a([D.fjp,A.S,t,A.e1,D.eIF,A.at,D.fu_,A.S,B.lX(1.15,l,3,10,10,p,A.dQ,!0)],n),A.F,p,A.e,A.j,0,A.p),A.r,p,A.y,p,A9.xA,p,p,A.ah),p),!0,!1,A.af,!0,!0)},
$S:26}
C.eX3.prototype={
$2(d,e){var w=null,v=d==="__auto"&&this.a==null||d===this.a,u=B.m(16),t=v?A.b7.j(0.22):A.c.j(0.04),s=v?A.bu:A.dq
return B.aE(w,B.p(w,e,A.f,w,w,new B.o(t,w,B.I(s,A.q,v?2:1),u,w,w,A.n),w,w,w,w,A.hx,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eWZ(this.b,d),w,w,w,w,w,w,!1,A.a8)},
$S:1682}
C.eWZ.prototype={
$0(){B.a5(this.a,!1).O(this.b)
return null},
$S:0}
C.eX2.prototype={
$2(d,e){var w,v=null,u=this.a.w,t=u.a===d,s=B.m(12),r=t?A.bK:A.bF
r=B.I(r,A.q,t?2.5:1)
w=B.m(10)
u=B.E(B.p(v,B.bw(w,d.length===0?B.p(v,D.an3,A.f,A.c.j(0.05),v,v,v,v,v,v,v,v,v,v):B.e1(new C.N7(u.Fp(d),!0,!1,v),!0,v),A.aq),A.f,v,v,new B.o(v,v,r,s,v,v,A.n),v,v,v,v,v,v,v,v),1)
return B.aE(v,B.v(B.a([u,A.at,B.d(e,v,1,A.a2,v,v,v,B.l(v,v,t?A.bK:A.ad,v,v,v,v,v,v,v,v,10.5,v,v,A.P,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.j,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.eWY(this.b,d),v,v,v,v,v,v,!1,A.a8)},
$S:141}
C.eWY.prototype={
$0(){B.a5(this.a,!1).O("finale:"+this.b)
return null},
$S:0}
C.eX0.prototype={
$0(){var w=this.a
return w.w=w.w.Fp("")},
$S:0}
C.eX1.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.eWO.prototype={
$0(){var w=this.a
w.e=this.b
w.cy=null},
$S:0}
C.eWP.prototype={
$0(){return this.a.cy=J.k(this.b)},
$S:0}
C.eWR.prototype={
$0(){return this.a.cy="Type a little about the presentation first, or attach a document."},
$S:0}
C.eWS.prototype={
$0(){return this.a.cy='You mentioned your logo \u2014 tap "Add your logo" below to upload it, so the AI puts the real one in.'},
$S:0}
C.eWT.prototype={
$0(){var w=this.a
w.ax=!0
w.cy=null
w.ay="Writing your "+w.ch+" slides\u2026"},
$S:0}
C.eWU.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.eWQ(w,d))},
$S:2}
C.eWQ.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.eWV.prototype={
$0(){var w=this.a
w.ax=!1
w.cy=B.t(this.b)},
$S:0}
C.eXl.prototype={
$0(){return this.a.f.fJ()},
$S:0}
C.eXm.prototype={
$0(){var w=this.a
return w.m(new C.eXk(w))},
$S:0}
C.eXk.prototype={
$0(){return this.a.e=null},
$S:0}
C.eXn.prototype={
$0(){var w=this.a
return w.m(new C.eXj(w))},
$S:0}
C.eXj.prototype={
$0(){return this.a.x=null},
$S:0}
C.eXp.prototype={
$1(d){var w=this.a
return w.m(new C.eXi(w,d))},
$S:32}
C.eXi.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.eXq.prototype={
$1(d){var w=this.a
return w.m(new C.eXh(w,d))},
$S:32}
C.eXh.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.eXr.prototype={
$0(){var w=this.a
return w.m(new C.eXg(w))},
$S:0}
C.eXg.prototype={
$0(){return this.a.y=B.a([],x.s)},
$S:0}
C.eXs.prototype={
$1(d){var w=this.a
return w.m(new C.eXf(w,d))},
$S:32}
C.eXf.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.eXt.prototype={
$1(d){var w=this.a
return w.m(new C.eXe(w,d))},
$S:32}
C.eXe.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.eXu.prototype={
$0(){var w=this.a
return w.m(new C.eXd(w))},
$S:0}
C.eXd.prototype={
$0(){var w=this.a
return w.w=w.w.Fp("")},
$S:0}
C.eXv.prototype={
$0(){var w=this.a
return w.m(new C.eXc(w,this.b))},
$S:0}
C.eXc.prototype={
$0(){return this.a.ch=this.b},
$S:0}
C.eXw.prototype={
$2(d,e){var w,v,u=(e.b-16)/3,t=B.a([],x.p)
for(w=this.a,v=0;v<6;++v)t.push(new B.a7(u,null,w.bMM(D.a2h[v]),null))
return B.bW(A.bz,t,A.bq,8,8)},
$S:162}
C.eXo.prototype={
$1(d){var w=this.a
return w.m(new C.eXb(w,d))},
$S:9}
C.eXb.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.eWW.prototype={
$0(){var w=this.a
return w.m(new C.eWX(w,this.b,this.c))},
$S:0}
C.eWX.prototype={
$0(){var w=this.c,v=this.a.cx
return this.b?v.W(0,w):v.J(0,w)},
$S:0}
C.eXa.prototype={
$0(){var w=this.a
return w.m(new C.eX9(w,this.b))},
$S:0}
C.eX9.prototype={
$0(){return this.a.CW=this.b},
$S:0}
C.fMb.prototype={
$1(d){return new C.a_X(this.a,this.b,null)},
$S:z+42}
C.eWH.prototype={
$0(){return this.a.r="Type what you want changed or added."},
$S:0}
C.eWI.prototype={
$0(){var w=this.a
w.e=!0
w.r=null
w.f="Making your changes\u2026"},
$S:0}
C.eWJ.prototype={
$0(){var w=this.a
w.e=!1
w.r=this.b===D.aFt?"The text already fits inside its frame.":"The text is already at its limit."},
$S:0}
C.eWK.prototype={
$0(){var w=this.a
w.e=!1
w.r="Nothing to bring back. Changes are kept for 20 minutes."},
$S:0}
C.eWL.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.eWG(w,d))},
$S:2}
C.eWG.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eWM.prototype={
$0(){var w=this.a
w.e=!1
w.r=B.t(this.b)},
$S:0}
C.eWN.prototype={
$0(){var w=this.b
if(A.a.cb(w,"\u2026"))w=A.a.ap(w,0,w.length-1)
this.a.d.bO(0,new B.bb(w,B.h8(A.bw,w.length),A.aN))},
$S:0}
C.fj5.prototype={
$1(d){return d.a===this.a},
$S:231}
C.ecx.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=p.gawx(),n=o.x
n===$&&B.c()
w=B.m(16)
v=p.a.c
u=v?D.cMY:D.d2c
t=D.xf.j(v?1:0.55)
v=p.a.c
t=B.I(t,A.q,v?1.8:1.2)
s=D.xf.j(v?0.35+0.15*o.x:0.12)
v=B.a([new B.ac(0,A.G,s,A.J,p.a.c?16:8)],x.V)
s=B.m(15)
n=B.bZ(0,B.b3(q,q,q,new C.bgW(n*6.283,q),A.au),0,0,0)
o=o.x
o=B.bZ(0,B.bOg(B.eG(A.A,0.5,B.p(q,q,A.f,q,q,new B.o(q,q,q,q,q,new B.a8(A.a3,A.a7,A.x,B.a([A.K,D.bav.j(0.28),A.K],x.O),q,q),A.n),q,q,q,q,q,q,q,q),q),!0,new B.u(o*2.4-1.2,0)),0,0,0)
r=x.p
return B.p(q,B.bw(s,new B.an(A.W,q,A.aa,A.r,B.a([n,o,B.av(B.v(B.a([B.X(p.a.c?A.ef:A.lO,D.xf,q,q,q,20),A.at,B.f4(A.A,B.nL(A.jo,D.fd3,new C.ecw()),A.f,A.eh)],r),A.m,q,A.e,A.Q,0,A.p),q,q,q),B.ao(q,B.p(q,D.f9J,A.f,q,q,new B.o(D.xf,q,q,B.m(6),q,q,A.n),q,q,q,q,L.ai1,q,q,q),q,q,q,4,4,q)],r),q),A.aq),A.f,q,q,new B.o(q,q,t,w,v,new B.a8(A.ax,A.aC,A.x,u,q,q),A.n),q,64,q,q,q,q,q,q)},
$S:90}
C.ecw.prototype={
$1(d){return D.bTx.av(0,d)},
$S:65}
C.fDi.prototype={
$1(d){return d.a===this.a},
$S:z+6}
C.fDj.prototype={
$1(d){var w=d.a
return A.a.i(w).length!==0&&w!==d.b},
$S:231}
C.fDk.prototype={
$2(d,e){return A.o.aL(e.a.length,d.a.length)},
$S:1683}
C.fDl.prototype={
$1(d){var w,v,u,t,s,r,q,p
for(w=this.a,v=w.length,u=d,t=0;t<w.length;w.length===v||(0,B.L)(w),++t){s=w[t]
r=s.a
q=s.b
u=B.aK(u,r,q)
p=r.toUpperCase()
if(p!==r)u=B.aK(u,p,q.toUpperCase())}return u},
$S:14}
C.fDe.prototype={
$1(d){return d.a},
$S:z+18}
C.fDf.prototype={
$1(d){return d.b},
$S:z+19}
C.fLp.prototype={
$1(d){return new C.Zj(this.a,this.b,null)},
$S:z+44}
C.dhS.prototype={
$0(){var w=this.a
w.f=!0
w.r=null},
$S:0}
C.dhT.prototype={
$1(d){return d.a===this.a.gahM()},
$S:z+10}
C.dhU.prototype={
$0(){var w=this.a
w.f=!1
w.r=J.k(this.b)},
$S:0}
C.dhX.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.dhY.prototype={
$0(){var w=this.a
return w.m(new C.dhW(w,this.b))},
$S:0}
C.dhW.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.dhZ.prototype={
$1(d){var w=this.a
return w.m(new C.dhV(w,d))},
$S:9}
C.dhV.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.ecv.prototype={
$1$2(d,e,f){var w=B.bn(d,!0,f)
A.d.fu(w,this.a)
return B.dd(w,0,B.dJ(e,"count",x.S),B.U(w).c).dH(0)},
$2(d,e){return this.$1$2(d,e,x.z)},
$S:1684}
C.f97.prototype={
$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,n,o,p){return C.ep(A.bg,!1,4279310375,A.aD,"",i,24,A.bl,A.a5,"",h,this.a.$0(),null,k,j,0,!1,"",n,d,o,p,"",m,0,"",l,D.f0,g,e,f)},
$8(d,e,f,g,h,i,j,k){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,D.cm,0,0,0,0)},
$12$anim$delay$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,n,o){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,0,n,o)},
$10$anim$delay(d,e,f,g,h,i,j,k,l,m){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,0,0,0)},
$S:z+45}
C.f99.prototype={
$9(d,e,f,g,h,i,j,k,l){return C.ep(A.L,!1,this.b.d,A.aD,"",4280640491,i,A.bl,A.cN,"",h,this.a.$0(),null,k,j,0,!1,"",0,D.be,4280172719,2,d,l,0,"",D.mC,D.cQ,g,e,f)},
$S:z+46}
C.f98.prototype={
$5$size(d,e,f,g,h){var w,v=this,u=v.b,t=u.c
u=u.wn(0,"twinkle")
w=t===D.be?0.785:0
return v.a.$13$anim$delay$rotation$stroke$strokeWidth(t,d-h/2,e-h*0.89,h,h*1.78,v.c,f,u,D.mC,g,w,v.d.d,1.2)},
$4(d,e,f,g){return this.$5$size(d,e,f,g,0.022)},
$S:z+47}
C.f96.prototype={
$1(d){var w=d.fx
return w==="sub"||w==="body"},
$S:z+4}
C.fwG.prototype={
$1(d){return d.a===this.a},
$S:z+11}
C.fwH.prototype={
$0(){return A.d.gL(D.GK)},
$S:z+49}
C.fwI.prototype={
$1(d){return d.a===this.a},
$S:z+11}
C.fb7.prototype={
$1(d){return!(A.a.a0(d.db,"__design__")||A.a.a0(d.a,"design_"))},
$S:z+4}
C.fCL.prototype={
$1(d){var w=2450411,v=4281908728
C.dw(d,C.dx(4280171146,1,0,D.be,w,0,0.52,0,0))
C.dw(d,C.dx(v,1,0,D.be,w,0,0.04,0.48,0))
C.dw(d,C.dx(4294047225,0.38,0,D.be,w,0,0.48,0.52,0.62))
C.dw(d,C.dx(v,0.006,0,D.fr,v,3,0.32,0.08,0.14))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fCM.prototype={
$1(d){var w=2450411,v=4280640491,u=4291548641
C.dw(d,C.dx(4280172719,0.8,0,D.be,w,0,0.36,0.58,0.1))
C.dw(d,C.dx(v,0.64,0,D.be,w,0,0.28,0.64,0.18))
C.dw(d,C.dx(4282090230,0.44,0,D.be,w,0,0.2,0.7,0.28))
C.dw(d,C.dx(v,0.006,0,D.fr,v,3,0.22,0.08,0.12))
C.dw(d,C.dx(u,0.004,0,D.fr,u,2,0.38,0.08,0.18))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fCN.prototype={
$1(d){var w=2450411,v=4279548070
C.dw(d,C.dx(4279080072,0.11,0,D.be,w,0,1,0,0))
C.dw(d,C.dx(4279310375,0.11,0,D.be,w,0,1,0,0.89))
C.dw(d,C.dx(856528008,0.72,0,D.jG,w,0,0.28,0.72,0.14))
C.dw(d,C.dx(1426953352,0.2,0,D.jG,w,0,0.2,0.78,0.22))
C.dw(d,C.dx(v,0.004,0,D.fr,v,2,1,0,0.105))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fCY.prototype={
$1(d){var w=2450411
C.dw(d,C.dx(4279203438,0.55,0,D.jG,w,0,0.5,0.55,-0.05))
C.dw(d,C.dx(4280171146,0.5,0,D.jG,w,0,0.45,0.62,0.35))
C.dw(d,C.dx(4280640491,0.4,0.3,D.jF,w,0,0.35,0.68,0.55))
C.dw(d,C.dx(571438702,0.12,0,D.be,w,0,0.12,0.08,0.08))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fD2.prototype={
$1(d){var w=4280472558
C.dw(d,C.dx(4279310375,0.75,-0.4,D.jF,2450411,0,0.75,-0.15,0.35))
C.dw(d,C.dx(w,0.55,0,D.be,2450411,0,0.06,0.42,0.38))
C.dw(d,C.dx(w,0.006,0,D.fr,w,3,0.35,0.08,0.08))
C.dw(d,C.dx(2282478,0.12,0,D.be,w,2,0.2,0.75,0.82))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fD3.prototype={
$1(d){var w=2450411,v=4280640491
C.dw(d,C.dx(3423541034,0.48,0,D.be,w,0,1,0,0))
C.dw(d,C.dx(v,0.12,-0.08,D.jG,w,0,1.1,-0.05,0.38))
C.dw(d,C.dx(858088427,0.35,0,D.be,w,0,0.42,0.55,0.05))
C.dw(d,C.dx(v,0.006,0,D.fr,v,3,0.25,0.08,0.52))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fD4.prototype={
$1(d){var w,v,u,t,s=4280171146
for(w=0;w<4;++w){v=D.cM0[w]
u=Date.now()
t=$.iZ
$.iZ=t+1
v=new C.eJ("design_"+(""+1000*u+"_"+t),D.f0,0.04+w*0.235,0.72,0.21,0.22,"",24,A.a5,A.bl,A.aD,4279310375,A.bg,null,D.be,v,4294967295,2,0,!1,"",0,D.cm,0,"","","","","",!1,0)
u=$.K6
v.db="__design__:"+(u.length===0?"layer":u)
A.d.ck(d.z,0,v)}C.dw(d,C.dx(s,0.006,0,D.fr,s,3,0.3,0.04,0.08))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fD5.prototype={
$1(d){var w,v,u,t,s=4280172719
for(w=0;w<4;++w){v=B.aq(A.mf,A.dv,w/3).l()
u=Date.now()
t=$.iZ
$.iZ=t+1
v=new C.eJ("design_"+(""+1000*u+"_"+t),D.f0,0.58+w*0.08,0.15+w*0.05,0.32,0.7,"",24,A.a5,A.bl,A.aD,4279310375,A.bg,null,D.Cy,v,2450411,0,0,!1,"",0,D.cm,0,"","","","","",!1,0)
u=$.K6
v.db="__design__:"+(u.length===0?"layer":u)
A.d.ck(d.z,0,v)}C.dw(d,C.dx(s,0.006,0,D.fr,s,3,0.4,0.06,0.1))
d.e=4294967295
d.f=4292602622},
$S:z+1}
C.fD6.prototype={
$1(d){var w=4294967295
C.dw(d,C.dx(4280640491,1,0,D.be,2450411,0,0.42,0,0))
C.dw(d,C.dx(4280110808,1.1,1.57,D.jF,2450411,0,0.18,0.35,-0.05))
C.dw(d,C.dx(w,0.006,0,D.fr,w,2,0.25,0.08,0.85))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fD7.prototype={
$1(d){var w=4278982953,v=2450411,u=4282090230
C.dw(d,C.dx(w,0.1,0,D.be,v,0,1,0,0))
C.dw(d,C.dx(u,0.012,0,D.be,v,0,1,0,0.1))
C.dw(d,C.dx(u,0.006,0,D.fr,u,3,0.42,0.06,0.14))
C.dw(d,C.dx(403446057,0.68,0,D.jG,v,0,0.22,0.72,0.18))
C.dw(d,C.dx(w,0.1,0,D.be,v,0,1,0,0.9))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fD8.prototype={
$1(d){var w=4278630100
C.dw(d,C.dx(4279310375,1.2,0.15,D.jG,2450411,0,0.55,-0.2,-0.1))
C.dw(d,C.dx(w,1.1,0.15,D.be,2450411,0,0.08,0.15,-0.05))
C.dw(d,C.dx(1120295,0.18,0,D.be,w,3,0.38,0.55,0.75))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fCO.prototype={
$1(d){var w=4292617766
C.dw(d,C.dx(4282714634,0.65,-0.2,D.jF,2450411,0,0.65,-0.1,0.45))
C.dw(d,C.dx(w,0.5,-0.15,D.jF,2450411,0,0.5,0.05,0.55))
C.dw(d,C.dx(w,0.006,0,D.fr,w,3,0.38,0.55,0.08))
d.e=4294967295
d.f=4294898418},
$S:z+1}
C.fCP.prototype={
$1(d){var w=2450411
C.dw(d,C.dx(4278413729,0.35,3.14,D.jF,w,0,0.45,-0.05,0.7))
C.dw(d,C.dx(4278355143,0.3,3.14,D.jF,w,0,0.4,0.25,0.75))
C.dw(d,C.dx(4279150057,0.32,3.14,D.jF,w,0,0.5,0.55,0.72))
C.dw(d,C.dx(863884284,0.22,0,D.eJ,w,0,0.22,0.08,0.12))
d.e=4293982719
d.f=4294967295},
$S:z+1}
C.fCQ.prototype={
$1(d){var w=4279310375,v=2450411,u=4280472558
C.dw(d,C.dx(w,0.14,0,D.be,v,0,0.14,0.02,0.02))
C.dw(d,C.dx(2282478,0.14,0,D.be,u,3,0.14,0.84,0.02))
C.dw(d,C.dx(w,0.28,0,D.jG,v,0,0.35,-0.08,0.78))
C.dw(d,C.dx(u,0.22,0.5,D.jF,v,0,0.3,0.72,0.78))
C.dw(d,C.dx(w,0.006,0,D.fr,w,3,0.2,0.08,0.22))
d.e=4294967295
d.f=null},
$S:z+1}
C.fCR.prototype={
$1(d){var w=4293571336,v=1156231944
C.dw(d,C.dx(1841431,0.92,0,D.be,w,3,0.92,0.04,0.04))
C.dw(d,C.dx(v,0.15,0,D.jF,2450411,0,0.15,0.02,0.02))
C.dw(d,C.dx(v,0.15,3.14,D.jF,2450411,0,0.15,0.83,0.83))
C.dw(d,C.dx(w,0.004,0,D.fr,w,2,0.7,0.15,0.88))
d.e=4280031511
d.f=4282523654},
$S:z+1}
C.fCS.prototype={
$1(d){var w=4279080072,v=2450411
C.dw(d,C.dx(w,0.14,0,D.kY,v,0,0.14,0.68,0.18))
C.dw(d,C.dx(4279548070,0.14,0,D.kY,v,0,0.14,0.78,0.28))
C.dw(d,C.dx(4281193663,0.14,0,D.kY,v,0,0.14,0.68,0.38))
C.dw(d,C.dx(4284410580,0.14,0,D.kY,v,0,0.14,0.78,0.48))
C.dw(d,C.dx(4279203438,0.14,0,D.kY,v,0,0.14,0.68,0.58))
C.dw(d,C.dx(w,0.006,0,D.fr,w,3,0.22,0.06,0.1))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fCT.prototype={
$1(d){var w=2450411,v=4280640491
C.dw(d,C.dx(3708753706,0.42,0,D.be,w,0,1,0,0))
C.dw(d,C.dx(v,0.06,-0.05,D.jG,w,0,1,0,0.38))
C.dw(d,C.dx(859356664,0.25,0,D.eJ,w,0,0.25,0.7,0.08))
C.dw(d,C.dx(v,0.006,0,D.fr,v,3,0.3,0.08,0.48))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fCU.prototype={
$1(d){var w,v,u,t,s=4280640491
for(w=0;w<4;++w){v=B.aq(A.mf,A.dv,w/3).l()
u=Date.now()
t=$.iZ
$.iZ=t+1
v=new C.eJ("design_"+(""+1000*u+"_"+t),D.f0,0.06+w*0.23,0.78,0.2,0.14,"",24,A.a5,A.bl,A.aD,4279310375,A.bg,null,D.Cy,v,2450411,0,0,!1,"",0,D.cm,0,"","","","","",!1,0)
u=$.K6
v.db="__design__:"+(u.length===0?"layer":u)
A.d.ck(d.z,0,v)}C.dw(d,C.dx(4280172719,0.08,0,D.be,2450411,0,1,0,0))
C.dw(d,C.dx(s,0.006,0,D.fr,s,3,0.35,0.06,0.14))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fCV.prototype={
$1(d){var w,v,u,t=4291548641,s=4279310375
for(w=1;w<6;++w){v=Date.now()
u=$.iZ
$.iZ=u+1
u=new C.eJ("design_"+(""+1000*v+"_"+u),D.f0,0.08,0.15+w*0.12,0.55,0.002,"",24,A.a5,A.bl,A.aD,s,A.bg,null,D.fr,t,t,0,0,!1,"",0,D.cm,0,"","","","","",!1,0)
v=$.K6
u.db="__design__:"+(v.length===0?"layer":v)
A.d.ck(d.z,0,u)}C.dw(d,C.dx(s,0.75,0,D.be,2450411,0,0.22,0.72,0.1))
C.dw(d,C.dx(872415231,0.16,0,D.be,2450411,0,0.16,0.75,0.15))
C.dw(d,C.dx(s,0.006,0,D.fr,s,3,0.2,0.08,0.1))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fCW.prototype={
$1(d){var w=4282865001,v=2450411,u=4284773515
C.dw(d,C.dx(4674921,0.9,0,D.be,4287931320,2,0.9,0.05,0.05))
C.dw(d,C.dx(w,0.08,0,D.be,v,0,0.08,0.03,0.03))
C.dw(d,C.dx(u,0.08,0,D.be,v,0,0.08,0.89,0.03))
C.dw(d,C.dx(u,0.08,0,D.be,v,0,0.08,0.03,0.89))
C.dw(d,C.dx(w,0.08,0,D.be,v,0,0.08,0.89,0.89))
C.dw(d,C.dx(w,0.004,0,D.fr,w,2,0.25,0.12,0.12))
d.e=4294507260
d.f=4293060848},
$S:z+1}
C.fCX.prototype={
$1(d){var w,v,u,t,s,r=4279310375,q=2450411
for(w=0;w<3;++w){v=w*0.24
u=Date.now()
t=$.iZ
$.iZ=t+1
t=new C.eJ("design_"+(""+1000*u+"_"+t),D.f0,0.55,0.14+v,0.38,0.18,"",24,A.a5,A.bl,A.aD,r,A.bg,null,D.be,4294967295,4280640491,2,0,!1,"",0,D.cm,0,"","","","","",!1,0)
u=$.K6
t.db="__design__:"+(u.length===0?"layer":u)
A.d.ck(d.z,0,t)
u=B.aq(A.dr,A.cr,w/2).l()
t=Date.now()
s=$.iZ
$.iZ=s+1
u=new C.eJ("design_"+(""+1000*t+"_"+s),D.f0,0.57,0.16+v,0.06,0.14,"",24,A.a5,A.bl,A.aD,r,A.bg,null,D.be,u,q,0,0,!1,"",0,D.cm,0,"","","","","",!1,0)
v=$.K6
u.db="__design__:"+(v.length===0?"layer":v)
A.d.ck(d.z,0,u)}C.dw(d,C.dx(4280171146,1,0,D.be,q,0,0.48,0,0))
C.dw(d,C.dx(4280172719,1.1,1.57,D.jF,q,0,0.12,0.42,-0.05))
d.e=4294967295
d.f=4292602622},
$S:z+1}
C.fCZ.prototype={
$1(d){var w=2450411
C.dw(d,C.dx(870995980,0.55,0.45,D.jG,w,0,0.55,-0.12,-0.08))
C.dw(d,C.dx(856996006,0.45,0.45,D.jG,w,0,0.45,0.62,-0.05))
C.dw(d,C.dx(16777215,0.38,0.45,D.jG,4293548044,5,0.38,0.52,0.12))
C.dw(d,C.dx(585783308,0.3,0.45,D.jG,w,0,0.3,0.56,0.16))
C.dw(d,C.dx(4279548070,0.06,0,D.be,w,0,0.16,0.38,0.04))
C.dw(d,C.dx(1156208652,0.28,0,D.eJ,w,0,0.28,0.66,0.52))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fD_.prototype={
$1(d){var w=4279080072,v=2450411,u=4294047225,t=4291548641,s=4293548044
C.dw(d,C.dx(w,1,0,D.be,v,0,0.07,0,0))
C.dw(d,C.dx(u,0.1,0,D.be,t,1,0.46,0.48,0.14))
C.dw(d,C.dx(u,0.1,0,D.be,t,1,0.46,0.48,0.28))
C.dw(d,C.dx(u,0.1,0,D.be,t,1,0.46,0.48,0.42))
C.dw(d,C.dx(s,0.08,0,D.eJ,v,0,0.08,0.5,0.16))
C.dw(d,C.dx(w,0.08,0,D.eJ,v,0,0.08,0.5,0.3))
C.dw(d,C.dx(4279548070,0.08,0,D.eJ,v,0,0.08,0.5,0.44))
C.dw(d,C.dx(16777215,0.32,0.45,D.jG,s,4,0.32,0.1,0.18))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fD0.prototype={
$1(d){var w,v,u,t=4279548070,s=4293548044,r=4279179050
C.dw(d,C.dx(4294047225,0.08,0,D.be,t,2,0.1,0.02,0.06))
C.dw(d,C.dx(s,0.42,0,D.be,2450411,0,0.36,0.58,0.18))
C.dw(d,C.dx(872415231,0.12,0,D.be,2450411,0,0.28,0.62,0.24))
C.dw(d,C.dx(16777215,0.28,0,D.eJ,s,4,0.32,0,0.72))
C.dw(d,C.dx(r,0.006,0,D.fr,r,3,0.42,0.08,0.22))
for(w=0;w<3;++w){v=Date.now()
u=$.iZ
$.iZ=u+1
u=new C.eJ("design_"+(""+1000*v+"_"+u),D.f0,0.08,0.58+w*0.1,0.04,0.04,"",24,A.a5,A.bl,A.aD,4279310375,A.bg,null,D.eJ,16777215,t,2,0,!1,"",0,D.cm,0,"","","","","",!1,0)
v=$.K6
u.db="__design__:"+(v.length===0?"layer":v)
A.d.ck(d.z,0,u)}d.e=4294967295
d.f=4294965229},
$S:z+1}
C.fD1.prototype={
$1(d){var w=2450411,v=4279548070
C.dw(d,C.dx(3423541034,0.55,0,D.be,w,0,1,0,0))
C.dw(d,C.dx(4009754623,0.56,0.45,D.jG,w,0,0.56,0.22,0.18))
C.dw(d,C.dx(3439329279,0.44,0.45,D.jG,w,0,0.44,0.28,0.24))
C.dw(d,C.dx(v,0.07,0,D.be,w,0,0.22,0.34,0.62))
C.dw(d,C.dx(v,1,0,D.be,w,0,0.07,0,0))
d.e=4280166715
d.f=4279179050},
$S:z+1}
C.fuw.prototype={
$1(d){return d.a===this.a},
$S:z+20}
C.fux.prototype={
$0(){return A.d.gL($.bDp())},
$S:z+52}
C.fiE.prototype={
$1(d){var w=A.a.i(d)
if(w.length===0)return""
return A.a.a0(w,"\u2022")?w:"\u2022 "+w},
$S:14}
C.fiD.prototype={
$1(d){return C.hRT(d,this.a,this.b)},
$S:z+53}
C.fDr.prototype={
$1(d){var w=this,v=w.a,u=w.b,t=B.vD(1.0375,1.01875,1)
return new B.fO(v,u,new C.aRZ(B.hHC(A.uO,C.hRW(w.c,w.d,v,u),t)))},
$S:416}
C.dTj.prototype={
$1(d){var w=d.a/1e6
this.a.d.sp(0,w)
return w},
$S:8}
C.dTi.prototype={
$2(d,e){var w=null,v=Math.min(e.b,e.d),u=this.b,t=B.c_(w,new B.o(w,w,w,w,w,new B.bT(A.JG,1.2,A.x,w,0,u.d,w,w),A.n),A.bd),s=this.a,r=s.d,q=s.a.d?0.45:1
return B.jw(new B.an(A.W,w,A.b0,A.r,B.a([t,new B.ev(B.b3(w,w,w,new C.bdP(u.a,r,q,r),A.au),w),B.av(new B.kf(r,new C.dTh(s,v,this.c,u),w,w,x.cl),w,w,w)],x.p),w),A.r,w)},
$S:431}
C.dTh.prototype={
$3(d,e,f){var w,v,u,t,s=this,r=null,q=A.ev.aw(0,A.k.D(e/1.4,0,1)),p=A.k.D(e/0.9,0,1),o=A.k.D((e-0.8)/0.9,0,1),n=Math.sin(e*1.6),m=s.b,l=m*0.08,k=x.p,j=B.a([],k),i=s.c
if(i!=null){w=m*0.22
v=m*0.008
u=s.d.e
t=B.B(u,x.bz)
t.push(A.d.gL(u))
u=B.a([new B.ac(0,A.G,u[1].j(0.55),A.J,l)],x.V)
A.d.v(j,B.a([B.p(r,B.hT(B.fL(i,A.A,r,r,A.cl,A.bR,!0,r,!1,r,r),A.aq),A.f,r,r,new B.o(r,r,r,r,u,new B.fS(A.A,0,6.283185307179586,A.x,t,r,new B.mj(e*0.8)),A.a6),r,w,r,r,new B.Q(v,v,v,v),r,r,w),new B.a7(r,m*0.04,r,r)],k))}i=s.d.e
w=s.a
v=A.a.i(w.a.c.b)
u=v.length
if(u===0)v="NGMY"
u=u>12?0.1:0.17
t=m*0.05
j.push(new C.bqp(i,e,B.d(v,r,r,r,r,r,r,B.l(r,r,A.c,r,r,r,r,r,r,r,r,m*u,r,r,A.u,r,1.05,!0,r,m*0.012,r,r,r,B.a([new B.cQ(i[1].j(0.6),A.J,t)],x.r),r,r),A.L,r,r),r))
j.push(new B.a7(r,m*0.025,r,r))
u=Math.max(1.5,m*0.004)
j.push(B.dc(B.dU(B.v(B.a([B.p(r,r,A.f,r,r,new B.o(r,r,r,r,r,new B.a8(A.a3,A.a7,A.x,B.a([A.K,i[1],A.K],x.O),r,r),A.n),r,u,r,r,r,r,r,m*0.22),new B.a7(r,m*0.022,r,r),B.d(w.a.c.gaJS(),r,r,r,r,r,r,B.l(r,r,A.c.j(0.92),r,r,r,r,r,r,r,r,t,r,r,A.a5,r,r,!0,r,m*0.003,r,r,r,r,r,r),A.L,r,r)],k),A.m,r,A.e,A.Q,0,A.p),new B.u(0,(1-o)*m*0.03)),o))
return B.dc(B.ec(A.A,new B.D(new B.Q(l,0,l,0),B.v(j,A.m,r,A.e,A.Q,0,A.p),r),(0.6+0.4*q)*(1+n*0.012),r,r),p)},
$S:105}
C.eVV.prototype={
$1(d){var w=this.b
return new B.a8(A.ax,A.aC,A.x,this.a.c,B.a([0,A.k.D(w-0.1,0,1),A.k.D(w,0,1),A.k.D(w+0.1,0,1),1],x.x),null).av(0,d)},
$S:65}
C.c7N.prototype={
$4$child$label$onTap$selected(d,e,f,g){var w,v=null,u=B.m(14),t=g?A.bK:A.bF
t=B.I(t,A.q,g?2.5:1)
w=g?B.a([new B.ac(0,A.G,A.hG.j(0.4),A.J,14)],x.V):v
w=B.dj(v,B.bw(B.m(12),d,A.aq),v,v,A.bc,new B.o(v,v,t,u,w,v,A.n),A.eE,v,72,v,v,v,v,v)
return B.aE(v,new B.a7(112,v,B.v(B.a([w,A.h0,B.d(e,v,1,A.a2,v,v,v,B.l(v,v,g?A.bK:A.ad,v,v,v,v,v,v,v,v,11,v,v,A.P,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.j,0,A.p),v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,f,v,v,v,v,v,v,!1,A.a8)},
$S:1685}
C.c7O.prototype={
$0(){var w=this.a
return w.d.$1(w.c.Fp(""))},
$S:0}
C.c7P.prototype={
$1(d){var w=this.a,v=w.c,u=d.a
return this.b.$4$child$label$onTap$selected(B.e1(new C.N7(v.Fp(u),!0,!1,null),!0,null),d.b,new C.c7Q(w,this.c,d),v.a===u)},
$S:z+54}
C.c7Q.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(C.hlZ(u.b,t.c.Fp(u.c.a)),$async$$0)
case 2:s=e
if(s!=null)t.d.$1(s)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fJP.prototype={
$1(d){return new C.YS(this.a,null)},
$S:z+55}
C.d74.prototype={
$0(){var w=this.a
w.d=w.gvu().bar("data:"+this.b+";base64,"+A.cT.gcw().aJ(this.c));++w.r},
$S:0}
C.d79.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.d7a.prototype={
$0(){var w=this.a
return w.m(new C.d78(w))},
$S:0}
C.d78.prototype={
$0(){return this.a.r++},
$S:0}
C.d7b.prototype={
$1(d){var w=this.a
return w.m(new C.d77(w,d))},
$S:2}
C.d77.prototype={
$0(){var w=this.a
return w.d=w.gvu().aCS(this.b)},
$S:0}
C.d7c.prototype={
$0(){var w=this.a
return w.m(new C.d76(w))},
$S:0}
C.d76.prototype={
$0(){var w=this.a
return w.d=w.gvu().bar("")},
$S:0}
C.d7d.prototype={
$1(d){var w=this.a
return w.m(new C.d75(w,d))},
$S:2}
C.d75.prototype={
$0(){var w=this.a
return w.d=w.gvu().bay(this.b)},
$S:0}
C.d7e.prototype={
$0(){var w=this.a
w=w.gvu().bay(w.gawy().a.a)
B.a5(this.b,!1).O(w)
return null},
$S:0}
C.fJO.prototype={
$1(d){var w={}
w.a=this.a
return new B.e0(new C.fJN(w),null)},
$S:21}
C.fJN.prototype={
$2(d,e){var w=null,v=this.a
return B.p(w,B.bl(!0,new B.cS(new B.aY(0,1/0,0,B.aI(d,A.bU,x.w).w.a.b*0.85),B.cd(B.v(B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.b2,w,w,B.m(9),w,w,A.n),w,4,w,w,w,w,w,40),w,w,w),A.aA,D.fr7,A.at,D.frn,A.aA,new C.aZg(v.a,new C.fJM(v,e,d),!0,w)],x.p),A.F,w,A.e,A.Q,0,A.p),A.r,w,A.y,w,w,w,w,A.ah),w),!0,!1,A.af,!0,!1),A.f,w,w,D.b_l,w,w,w,w,A.LZ,w,w,w)},
$S:179}
C.fJM.prototype={
$1(d){this.b.$1(new C.fJL(this.a,d))
B.a5(this.c,!1).O(d)},
$S:z+56}
C.fJL.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.fMa.prototype={
$1(d){return D.fPS},
$S:z+57}
C.ddR.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.ddS.prototype={
$0(){var w=this.a.c
w.toString
B.a5(w,!1).O(this.b)
return null},
$S:0}
C.ddT.prototype={
$0(){var w=this.a,v=A.a.i(w.d.a.a)
if(v.length!==0){w=w.c
w.toString
B.a5(w,!1).O(v)}},
$S:0}
C.fA7.prototype={
$1(d){var w=this.b
return new B.a8(A.ax,A.aC,A.x,B.a([A.K,B.aq(this.a,A.c,0.75).j(0.9),A.K],x.O),B.a([A.k.D(w-0.12,0,1),A.k.D(w,0,1),A.k.D(w+0.12,0,1)],x.x),null).av(0,d)},
$S:65}
C.d6M.prototype={
$3(d,e,f){var w,v=this,u=new B.aO($.W().r,A.ap,null,null,B.a([],x.v)),t=d.a,s=v.b,r=e*s,q=d.b,p=f*s,o=q+p*0.12
u.E(new B.b5(t+r*1.2,o))
u.E(new B.cU(t+r*0.25,o,t+r*0.18,q+p*0.5))
w=t+r*0.12
u.E(new B.cU(w,q+p,w,q+p*1.2))
u.E(new B.CP(B.bU(new B.u(t+r*0.42,q+p*0.42),s*0.14),0,5.026548245743669))
s=v.c
s.aO(u,v.d)
s.aO(u,v.e)
p=B.M()
p.r=B.aq(v.a.d,A.c,0.6).gp(0)
s.ae(new B.u(w,o),2.2,p)},
$S:705}
C.fAb.prototype={
$2(d,e){return A.k.aL(d.c,e.c)},
$S:z+58}
C.fsx.prototype={
$1(d){return d.w==="marriage_agreement"},
$S:z+2}
C.fsy.prototype={
$1(d){var w=null,v=this.a
return B.bl(!0,new B.D(E.xD,B.v(B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.b2,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.by,D.f9Z,A.N,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aQ,B.dk(D.Gh,B.d('Endelea na "'+A.d.gL(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fsv(d),B.bm(A.bZ,w,w,w,A.c,w,A.ck,w,w,w,w,w)),A.S,B.ey(A.o0,D.TE,new C.fsw(d),B.dg(w,w,w,w,w,w,w,w,w,A.ad,w,w,A.ck,w,w,Q.wG,w,w,w,w))],x.p),A.aj,w,A.e,A.Q,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:26}
C.fsv.prototype={
$0(){B.a5(this.a,!1).O("continue")
return null},
$S:0}
C.fsw.prototype={
$0(){B.a5(this.a,!1).O("new")
return null},
$S:0}
C.cdc.prototype={
$1(d){return d.hC()},
$S:z+59}
C.cdd.prototype={
$1(d){return d.ag()},
$S:z+60}
C.cdb.prototype={
$1(b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=null,b2=B.a1(b5,x.N,x.z),b3=B.aJ(b2.h(0,"fontWeight")),b4=b3==null?b1:A.k.N(b3)
if(b4==null)b4=A.a5.gdJ(0)
b3=B.aJ(b2.h(0,"fontStyle"))
w=b3==null?b1:A.k.N(b3)
if(w==null)w=0
b3=B.aJ(b2.h(0,"align"))
v=b3==null?b1:A.k.N(b3)
if(v==null)v=0
b3=b2.h(0,"id")
b3=J.k(b3==null?"":b3)
u=C.hNK(b2.h(0,"type"))
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
n=A.axH[A.o.D(b4,0,8)]
m=D.cOR[A.o.D(w,0,1)]
l=C.hRl(b2.h(0,"decoration"))
k=B.aJ(b2.h(0,"color"))
k=k==null?b1:A.k.N(k)
if(k==null)k=4279310375
j=A.aus[A.o.D(v,0,5)]
i=b2.h(0,"imageRef")
i=i==null?b1:J.k(i)
h=C.hU8(b2.h(0,"shape"))
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
a3=C.hhj(b2.h(0,"textTransition"))
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
return C.ep(j,a0,k,l,a1,g,o,m,n,a7,q,b3,i,a6,a5,a2,b0,a8,d,h,f,e,p,a4,b2==null?0:b2,a9,a3,u,r,t,s)},
$S:z+61}
C.cd1.prototype={
$1(d){return d.hC()},
$S:z+62}
C.cd2.prototype={
$1(d){return d.ag()},
$S:z+63}
C.ccZ.prototype={
$1(d){return B.t(d)},
$S:17}
C.cd_.prototype={
$1(d){return B.t(d)},
$S:17}
C.cd0.prototype={
$1(d){return C.h8_(B.a1(d,x.N,x.z))},
$S:z+64}
C.cdt.prototype={
$1(d){return d.a===this.a},
$S:z+65}
C.cdu.prototype={
$0(){return A.d.gL(D.a1W)},
$S:z+66}
C.cdo.prototype={
$1(d){var w,v,u=d.a
if(A.a.i(u).length===0)return
w=this.a
v=w.h(0,u)
if(v==null||!v.f.cc(d.f))w.n(0,u,d.hC())},
$S:z+7}
C.cdn.prototype={
$2(d,e){return e.f.aL(0,d.f)},
$S:z+21}
C.cdj.prototype={
$1(d){return new B.K(d,new C.cdk(),B.U(d).k("K<1,S>")).fa(0,new C.cdl())},
$S:z+69}
C.cdk.prototype={
$1(d){return d.f},
$S:z+70}
C.cdl.prototype={
$2(d,e){return d.cc(e)?d:e},
$S:706}
C.cdm.prototype={
$1(d){if(d==null||A.a.i(d).length===0)return B.a([],x.D)
return C.hDr(d)},
$S:z+71}
C.cdp.prototype={
$1(d){return!this.a.t(0,d.a)},
$S:z+2}
C.cdq.prototype={
$2(d,e){return e.f.aL(0,d.f)},
$S:z+21}
C.cdr.prototype={
$1(d){return d.ag()},
$S:z+14}
C.fAK.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this
for(w=i.a.z,v=w.length,u=i.c,t=i.d,s=i.b,r=0;r<w.length;w.length===v||(0,B.L)(w),++r){q=w[r]
p=q.a
if(s.ai(0,p))continue
for(o=u.z,n=o.length,m=q.b,l=0;l<o.length;o.length===n||(0,B.L)(o),++l){k=o[l]
j=k.a
if(t.t(0,j)||k.b!==m)continue
if(d.$2(k,q)){s.n(0,p,k)
t.J(0,j)
break}}}},
$S:z+73}
C.fAG.prototype={
$2(d,e){var w=d.fx
return w.length!==0&&w===e.fx},
$S:z+8}
C.fAH.prototype={
$2(d,e){var w=d.at
return(w==null?"":w).length!==0&&w==e.at},
$S:z+8}
C.fAI.prototype={
$2(d,e){var w
if(d.b===D.cQ){w=A.a.i(d.r)
w=w.length!==0&&w===A.a.i(e.r)}else w=!1
return w},
$S:z+8}
C.fAJ.prototype={
$2(d,e){return d.b===D.f0&&d.ax===e.ax&&d.fx.length===0&&e.fx.length===0},
$S:z+8}
C.cd7.prototype={
$2(b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=null,a9=b7.b,b0=a9/960,b1=this.a,b2=b1.c,b3=b1.d,b4=C.i1O(b2,b3),b5=B.a4(b4).k("bc<2>")
b5=B.cD(new B.bc(b4,b5),new C.cd6(),b5.k("J.E"),x.N)
w=B.db(b5,B.a4(b5).k("J.E"))
b1=b1.e
v=A.pD.aw(0,A.k.D(b1,0,1))
u=new C.cd8()
b5=B.aq(u.$2(b2,!1),u.$2(b3,!1),v)
b5.toString
t=B.aq(u.$2(b2,!0),u.$2(b3,!0),v)
t.toString
s=new C.cd9(a9,b7.d)
r=new C.cda(b0)
q=x.p
p=B.a([],q)
for(b2=b2.z,o=b2.length,n=b1/0.55,m=0;m<b2.length;b2.length===o||(0,B.L)(b2),++m){l=b2[m]
if(w.t(0,l.a))continue
k=A.ju.aw(0,A.k.D(n,0,1))
p.push(s.$5(l.c,l.d,l.e,l.f,new B.kC(A.k.D(1-k,0,1),B.dU(B.ec(A.A,r.$1(l),1-k*0.06,a8,a8),new B.u(-k*30*b0,0)),a8)))}for(b2=b3.z,b3=b2.length,o=1-v,j=0,m=0;m<b2.length;b2.length===b3||(0,B.L)(b2),++m){i=b2[m]
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
if(a2===D.f0){a4=i.hC()
a4.ay=B.aq(B.b0(l.ay),B.b0(i.ay),v).l()
a4.ch=B.aq(B.b0(l.ch),B.b0(i.ch),v).l()
a4.cx=0
a5=r.$1(a4)}else a5=a2===D.lq&&l.at==i.at?r.$1(i):new B.an(A.W,a8,A.b0,A.r,B.a([new B.kC(A.k.D(o,0,1),r.$1(l),a8),new B.kC(A.k.D(v,0,1),r.$1(i),a8)],q),a8)
a2=a3===0?a5:new B.iF(B.w7(a3),a8,A.A,!0,a8,a5,a8)
p.push(s.$5(n+(h-n)*v,g+(f-g)*v,e+(d-e)*v,a0+(a1-a0)*v,a2))}else{a6=A.k.D((b1-(0.35+j*0.07))/0.5,0,1);++j
a7=i.dy
if(a7===D.cm)a7=D.mC
p.push(s.$5(i.c,i.d,i.e,i.f,C.hjy(a7,a6,r.$1(i))))}}return B.c_(new B.an(A.W,a8,A.aa,A.r,p,a8),new B.o(a8,a8,a8,a8,a8,new B.a8(A.a3,A.a7,A.x,B.a([b5,t],x.O),a8,a8),A.n),A.bd)},
$S:432}
C.cd6.prototype={
$1(d){return d.a},
$S:z+22}
C.cd8.prototype={
$2(d,e){var w
if(e){w=d.f
if(w==null)w=d.e}else w=d.e
return B.b0(w)},
$S:z+76}
C.cd9.prototype={
$5(d,e,f,g,h){var w=this.a,v=this.b
return B.ao(null,h,g*v,null,d*w,null,e*v,f*w)},
$S:1689}
C.cda.prototype={
$1(d){var w=null,v=d.fy,u=A.a.gX(d.a)
return new C.a7k(v,C.b0p(!1,w,!1,d,w,!1,w,w,w,this.a,!1,!1),!0,u,w)},
$S:z+23}
C.dFv.prototype={
$2(d,e){var w=Date.now()/1000*2*3.141592653589793,v=Math.sin(w/18)
return B.ec(new B.da(Math.sin(w/23)*0.6,Math.cos(w/29)*0.5),e,1.035+v*0.03,null,null)},
$S:45}
C.cdg.prototype={
$1(d){return d.a===this.a.a},
$S:z+11}
C.cdh.prototype={
$1(d){return d.a===this.a.a},
$S:z+20}
C.fDy.prototype={
$1(d){var w,v=document.createElement("iframe")
v.src=this.a
w=v.style
w.border="none"
w=v.style
w.width="100%"
w=v.style
w.height="100%"
return v},
$S:321}
C.fCF.prototype={
$1(d){return new C.acX(this.a,this.b,null)},
$S:z+78}
C.eoI.prototype={
$0(){return this.a.Pu(this.b,C.i59(),"Tap Save to Files on the next screen.","Download did not start \u2014 try Share.")},
$S:0}
C.eoJ.prototype={
$0(){var w=this.a,v=w.d?"Choose Print from the share menu for one full page.":"Pick Save to Files or send from the share menu."
return w.Pu(this.b,C.i5b(),v,"Share unavailable \u2014 try Safari.")},
$S:0}
C.eoK.prototype={
$0(){var w=this.a,v=w.d?"PDF opened \u2014 tap Share \u2197 then Print.":"PDF opened \u2014 use Share \u2197 at the bottom of Safari."
return w.Pu(this.b,C.i5a(),v,"Could not open Safari \u2014 try Share.")},
$S:0}
C.eoL.prototype={
$0(){Y.hji()
B.a5(this.a,!1).O(null)},
$S:0}
C.cd5.prototype={
$1(d){var w=null,v=this.a
return v==null?d:B.l(w,w,w,w,w,w,w,w,w,w,w,d.r,d.x,w,d.w,v,d.as,!0,w,d.y,w,w,w,w,w,w)},
$S:1690}
C.cd4.prototype={
$2(d,e){var w,v=this,u=null,t=B.dM(d,A.nx),s=t==null?u:t.b,r=s==null?2:s,q=e.b,p=isFinite(q)?q:0,o=p<=0?u:A.k.V(A.k.D(p*Math.max(B.lM(r),5),96,1500))
t=v.b
w=v.c||v.d?A.bR:A.du
return B.fL(t,A.A,o,new C.cd3(),A.cl,w,!0,u,!1,new B.cx("img_"+v.a.c.a+"_"+t.length,x.W),u)},
$S:1691}
C.cd3.prototype={
$3(d,e,f){return D.ab0},
$S:230}
C.fAF.prototype={
$2(d,e){var w,v,u,t=null,s=B.m(6),r=this.a
if(r.f!=null){w=B.b0(r.e)
v=r.f
v.toString
v=new B.a8(A.ax,A.aC,A.x,B.a([w,B.b0(v)],x.O),t,t)
w=v}else w=t
v=r.f==null?B.b0(r.e):t
r=r.z
r=B.dd(r,0,B.dJ(6,"count",x.S),B.U(r).c)
u=r.$ti.k("K<ak.E,cL>")
r=B.B(new B.K(r,new C.fAE(e.b,e.d),u),u.k("ak.E"))
return B.bw(s,B.c_(new B.an(A.W,t,A.aa,A.r,r,t),new B.o(v,t,t,t,t,w,A.n),A.bd),A.aq)},
$S:1692}
C.fAE.prototype={
$1(d){var w=null,v=d.c,u=this.a,t=d.d,s=this.b,r=d.e,q=d.f
return B.ao(w,C.b0p(!1,w,!1,d,w,!1,w,w,w,u/960,!1,!0),q*s,w,v*u,w,t*s,r*u)},
$S:z+24}
C.flb.prototype={
$3(d,e,f){var w,v,u,t,s,r=this,q=null,p=r.a
p.a=B.cM(r.b,new C.fl9(d))
w=B.aI(d,A.bU,x.w).w
v=B.m(22)
u=B.I(A.bF,A.q,1)
t=B.a([new B.ac(0,A.G,A.w.j(0.45),A.fM,28)],x.V)
s=x.p
return new B.cZ(e,!1,B.av(B.aG(!1,A.a1,!0,q,B.p(q,B.v(B.a([B.A(B.a([B.E(B.v(B.a([B.d(r.c,q,q,q,q,q,q,A.ky,q,q,q),A.at,B.d("Applied \u2014 tap Done or wait 1.5 seconds",q,q,q,q,q,q,B.l(q,q,A.c.j(0.45),q,q,q,q,q,q,q,q,11,q,q,A.a5,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),A.F,q,A.e,A.j,0,A.p),1),B.bK(!1,A.zC,q,q,!0,q,q,new C.fla(p,d),q,B.fv(q,q,A.bj,q,q,q,q,q,q,q,q,A.c,q,q,q,q,q,A.F7,q,new B.b7(B.m(12),A.Y),q,q,q,q,q,q))],s),A.m,q,A.e,A.j,0,q,q),A.aA,r.d],s),A.m,q,A.e,A.Q,0,A.p),A.f,q,new B.aY(0,w.a.a*0.94,0,1/0),new B.o(A.aB,q,u,v,t,q,A.n),q,q,q,A.fJ,A.Fg,q,q,q),A.f,A.K,0,q,q,q,q,q,A.ag),q,q,q),q)},
$C:"$3",
$R:3,
$S:254}
C.fl9.prototype={
$0(){var w=this.a
if(w.e!=null&&B.a5(w,!0).pv())B.a5(w,!0).eK()},
$S:0}
C.fla.prototype={
$0(){var w=this.a.a
if(w!=null)w.a7(0)
B.a5(this.b,!0).eK()},
$S:0}
C.f3q.prototype={
$2(d,e){var w,v,u=this,t=null,s=u.a,r=s.d
r===$&&B.c()
r=r.x
r===$&&B.c()
switch(s.a.c.a){case 0:return u.b
case 1:case 13:return new B.an(A.W,t,A.b0,A.r,B.a([u.c,B.dc(u.b,r)],x.p),t)
case 2:case 17:return new B.an(A.W,t,A.b0,A.r,B.a([u.c,B.dU(u.b,new B.u((1-r)*220,0))],x.p),t)
case 3:return new B.an(A.W,t,A.b0,A.r,B.a([u.c,B.dU(u.b,new B.u(-(1-r)*220,0))],x.p),t)
case 4:case 21:return new B.an(A.W,t,A.b0,A.r,B.a([u.c,B.dU(u.b,new B.u(0,(1-r)*140))],x.p),t)
case 5:return new B.an(A.W,t,A.b0,A.r,B.a([u.c,B.dU(u.b,new B.u(0,-(1-r)*140))],x.p),t)
case 6:return new B.an(A.W,t,A.b0,A.r,B.a([u.c,B.ec(A.A,B.dc(u.b,r),0.6+r*0.4,t,t)],x.p),t)
case 7:return new B.an(A.W,t,A.b0,A.r,B.a([u.c,B.ec(A.A,B.dc(u.b,r),1.3-r*0.3,t,t)],x.p),t)
case 8:s=B.dp()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.001
s.fA(r*3.14159)
return B.fs(A.A,r<0.5?u.c:u.b,t,s,!0)
case 9:s=B.dp()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.001
s.jX(r*3.14159)
return B.fs(A.A,r<0.5?u.c:u.b,t,s,!0)
case 10:s=B.dp()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.002
s.fA(r*1.2)
s.jX(r*0.5)
return B.fs(A.A,B.dc(u.b,0.4+r*0.6),t,s,!0)
case 11:s=B.dp()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.002
s.fA(-r*1.4)
return B.fs(A.a7,B.dc(u.b,r),t,s,!0)
case 12:return new B.an(A.W,t,A.b0,A.r,B.a([u.c,B.dc(B.ec(A.A,u.b,1.02-r*0.02,t,t),r)],x.p),t)
case 14:return new B.an(A.W,t,A.b0,A.r,B.a([u.c,B.jw(u.b,A.r,new C.aIJ(r,t))],x.p),t)
case 15:return new B.an(A.W,t,A.b0,A.r,B.a([u.c,B.jw(u.b,A.r,new C.aIJ(1-r,t))],x.p),t)
case 16:v=D.b2J.aw(0,r)
return new B.an(A.W,t,A.b0,A.r,B.a([u.c,B.ec(A.A,B.dc(u.b,r),0.5+v*0.5,t,t)],x.p),t)
case 18:s=r<0.15
if(s)r=1
return new B.an(A.W,t,A.b0,A.r,B.a([u.c,B.dc(B.el(u.b,A.c.j(s?0.9:0),!0),r)],x.p),t)
case 19:s=B.dp()
s.mI(r*6.28)
s.jH(r,r,r,1)
return B.fs(A.A,u.b,t,s,!0)
case 20:return B.eG(A.A,(r-0.5)*0.35,new B.an(A.W,t,A.b0,A.r,B.a([u.c,B.dc(u.b,r)],x.p),t),t)}},
$S:60}
C.dRw.prototype={
$0(){var w=this.a
if(w.c!=null){w=w.d
w===$&&B.c()
w.cs(0)}},
$S:11}
C.dRv.prototype={
$0(){var w=this.a
if(w.c!=null){w=w.d
w===$&&B.c()
w.cs(0)}},
$S:11}
C.dRu.prototype={
$2(d,e){var w,v=this.a
e.toString
w=v.d
w===$&&B.c()
v=v.a.c.dy
w=w.x
w===$&&B.c()
return C.hjy(v,w,e)},
$S:60}
C.ccY.prototype={
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
s=B.U(v).k("K<1,cL>")
q=B.B(new B.K(v,new C.ccX(q,w,e.b,e.d),s),s.k("ak.E"))
return B.c_(new B.an(A.W,r,A.aa,A.f,q,r),new B.o(t,r,r,r,r,u,A.n),A.bd)},
$S:432}
C.ccX.prototype={
$1(d){var w,v=this,u=null,t=d.dy!==D.cm?v.a.a++:0,s=d.c,r=v.c,q=d.d,p=v.d,o=d.e,n=d.f,m=d.fy,l=v.b,k=l.d
l=k||l.e
w=A.a.gX(d.a)
return B.ao(u,new C.a7k(m,new C.Uy(d,C.b0p(!1,u,!1,d,u,!1,u,u,u,r/960,!1,!1),k,t,u),l,w,u),n*p,u,s*r,u,q*p,o*r)},
$S:z+24}
C.d40.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.d4_(w))},
$S:11}
C.d4_.prototype={
$0(){return this.a.d++},
$S:0}
C.ecd.prototype={
$2(d,e){var w,v=null,u=A.o.an(this.b.e.a,1000),t=A.o.F(Date.now(),u)/u*3.141592653589793*2+this.c,s=this.a
if(D.aMB.t(0,A.d.gL(s.a.c.split("@")))){s=s.a
w=s.c
s=s.f
e.toString
return C.i1x(w,t,s,e)}switch(s.a.c){case"float3d":s=B.dp()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.0016
w=Math.sin(t)
s.e5(0,w*7,0,1)
s.fA(Math.sin(t)*0.32)
s.jX(Math.cos(t)*0.12)
w=1+Math.sin(t*2)*0.025
s.jH(w,w,w,1)
return B.fs(A.A,e,v,s,!0)
case"drift":s=Math.sin(t)
w=Math.cos(t*0.8)
return B.dU(B.ec(A.A,e,1+Math.sin(t*0.5)*0.05,v,v),new B.u(s*14,w*10))
default:s=Math.sin(t)
return B.dc(B.ec(A.A,e,1+Math.sin(t)*0.04,v,v),0.82+s*0.18)}},
$S:60}
C.eTy.prototype={
$1(d){var w
$.W()
w=B.M()
w.b=A.ae
w.c=d
w.e=A.fA
return w},
$S:1693}
C.fyf.prototype={
$2(d,e){var w,v,u,t,s=this,r=null,q=e.b,p=e.d,o=Math.min(q,p)
if(!s.a)w=s.b.length===0&&s.c.length!==0
else w=!0
v=w?new B.at(o,o):new B.at(q,p)
u=s.b
if(u.length===0)u="rounded"
q=s.c
p=q.length===0
if(p)t=0
else{w=v.gdO()
t=w*(q==="framed"?0.07:0.05)}w=B.a([],x.p)
if(q==="framed"||q==="gold")w.push(B.b3(r,r,r,new C.bqi(u,t,r),A.au))
w.push(B.nr(s.d,A.aq,new C.bel(u,t,r)))
if(!p)w.push(B.b3(r,r,r,new C.bpi(u,q,t,r),A.au))
return B.av(new B.a7(v.a,v.b,new B.an(A.W,r,A.b0,A.r,w,r),r),r,r,r)},
$S:242}
C.fo0.prototype={
$1(d){var w=d.b[1]
return w==null?"":w},
$S:322}
C.euW.prototype={
$0(){var w=0,v=B.j(x.aP),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(S.CA(t.a.a.c),$async$$0)
case 3:s=e
r=J.a6(s)
if(r.gam(s)){u=null
w=1
break}u=r.dL(s,new C.euU(),new C.euV(s))
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1694}
C.euU.prototype={
$1(d){return d.at==="published"&&d.Q.length!==0},
$S:188}
C.euV.prototype={
$0(){return J.fo(this.a)},
$S:1696}
C.erj.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.erk.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.erl.prototype={
$0(){var w=this.a
w.d=this.b
w.x=!1},
$S:0}
C.esU.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.esI.prototype={
$1(d){return d.w!=="hati_kiapo_uongozi"},
$S:z+2}
C.esJ.prototype={
$1(d){return d.hC()},
$S:z+81}
C.eqH.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.eu1.prototype={
$0(){this.a.tr()},
$S:0}
C.euS.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.e=u
w.f=A.o.D(v.b,0,u.r.length-1)
w.r=v.c
w.oc()
w.JP()},
$S:0}
C.esS.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.e=u
w.f=A.o.D(v.b,0,u.r.length-1)
w.r=v.c
w.oc()
w.JP()},
$S:0}
C.euF.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+2}
C.euG.prototype={
$1(d){return d.b===D.cQ},
$S:z+4}
C.euH.prototype={
$1(d){return d.a},
$S:z+22}
C.euI.prototype={
$0(){var w=this.a.r
return new B.ar(new B.bb(w,A.b4,A.aN),$.aw())},
$S:264}
C.euJ.prototype={
$0(){return B.jN(!0,null,!0,!0,null,null,!1)},
$S:475}
C.eq5.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+2}
C.euT.prototype={
$0(){},
$S:0}
C.es0.prototype={
$0(){var w=this.a
w.e=this.b.hC()
w.f=0
w.r=null
w.db=!1
A.d.a9(w.ax)
A.d.a9(w.ay)
w.xi()
w.JP()},
$S:0}
C.eq3.prototype={
$0(){var w=this.a
w.e=null
w.db=!1
w.w=w.r=null
w.xi()},
$S:0}
C.eq4.prototype={
$0(){var w=this.a
w.w=w.r=w.e=null
w.xi()},
$S:0}
C.esn.prototype={
$1(d){return d.a===this.a.a.a},
$S:z+2}
C.eso.prototype={
$0(){var w=this.a
w.e=this.b
w.f=0
w.r=null
w.db=!this.c
A.d.a9(w.ax)
A.d.a9(w.ay)
w.xi()
w.JP()
w.z="Home"},
$S:0}
C.esp.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.es_.prototype={
$1(d){var w=null
return B.ek(B.a([B.bK(!1,A.TD,w,w,!0,w,w,new C.erZ(d),w,w)],x.p),w,w,w,D.fsV,w,w,w,w,D.far,w)},
$S:20}
C.erZ.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.erX.prototype={
$1(d){var w=null
return B.ek(B.a([B.bK(!1,A.TD,w,w,!0,w,w,new C.erW(d),w,w)],x.p),w,w,w,D.feo,w,w,w,w,D.fc9,w)},
$S:20}
C.erW.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.erY.prototype={
$0(){},
$S:0}
C.erf.prototype={
$1(d){return this.a.aZP(C.bBp(d))},
$S:z+7}
C.erg.prototype={
$1(d){return this.a.aek(C.bBp(d))},
$S:z+7}
C.es6.prototype={
$1(d){var w=null,v=x.p,u=B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.b2,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.by,D.fsZ,A.at,B.d("Chagua aina ya hati",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.by,new C.Pe(A.vz,D.avO,"HATI YA KUHOWA","Hati ya mahari",new C.es1(d),w),A.S,new C.Pe(A.h9,D.d03,"HATI YA KUHOWESHA","Hati ya kupokea",new C.es2(d),w),A.S,new C.Pe(A.i_,D.cN3,"HATI YA NDOA","Makubaliano \xb7 pete \xb7 picha za wanandoa",new C.es3(d),w),A.S,new C.Pe(A.hL,D.cLn,"MALIPO YA AWAMU YA MAHARI","Makubaliano ya mahari iliyosalia",new C.es4(d),w)],v)
if(this.a.gaaQ())A.d.v(u,B.a([A.S,new C.Pe(A.iY,D.cwu,"HATI YA KIAPO CHA UONGOZI","Kiapo cha Rais \xb7 Civic Registry",new C.es5(d),w)],v))
return B.bl(!0,B.cd(B.v(u,A.aj,w,A.e,A.Q,0,A.p),A.r,w,A.y,w,E.xD,w,w,A.ah),!0,!1,A.af,!0,!0)},
$S:26}
C.es1.prototype={
$0(){B.a5(this.a,!1).O("hati_kuhowa")
return null},
$S:0}
C.es2.prototype={
$0(){B.a5(this.a,!1).O("hati_kuhoweya")
return null},
$S:0}
C.es3.prototype={
$0(){B.a5(this.a,!1).O("marriage_agreement")
return null},
$S:0}
C.es4.prototype={
$0(){B.a5(this.a,!1).O("hati_malipo_awamu")
return null},
$S:0}
C.es5.prototype={
$0(){B.a5(this.a,!1).O("hati_kiapo_uongozi")
return null},
$S:0}
C.es7.prototype={
$0(){var w=this.a
w.e=this.b.hC()
w.f=0
w.r=null
w.db=!0
A.d.a9(w.ax)
A.d.a9(w.ay)
w.xi()},
$S:0}
C.eq7.prototype={
$1(d){return d.z.length===0},
$S:z+6}
C.eq8.prototype={
$0(){var w,v,u=this,t=u.c,s=u.d,r=t.r,q=s.r
if(u.b){A.d.a9(r)
A.d.v(r,q)
w=A.a.i(t.b).toLowerCase()
if(w.length===0||A.a.a0(w,"untitled"))t.b=s.b
r=u.a
r.f=0}else{v=u.a
A.d.na(r,v.f+1,q);++v.f
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
C.esi.prototype={
$1(d){return d.b===D.lq},
$S:z+4}
C.esj.prototype={
$1(d){var w={},v=this.b
w.a=A.d.gL(v).go
w.b=A.d.gL(v).id
return new B.e0(new C.esg(w,this.a,v),null)},
$S:21}
C.esg.prototype={
$2(a2,a3){var w,v,u,t,s,r,q=null,p=this.a,o=this.b,n=this.c,m=new C.esh(p,o,a3,n),l=B.P(a2).ax.a===A.I,k=l?A.c:A.M,j=l?A.aR:A.ak,i=l?A.bm:A.bL,h=l?A.M:A.c,g=B.m(28),f=B.I(l?A.bF:A.aL,A.q,1),e=x.p,d=B.A(B.a([B.E(B.v(B.a([B.d("Logo and pictures",q,q,q,q,q,q,B.l(q,q,k,q,q,q,q,q,q,q,q,20,q,q,A.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),A.bB,B.d("Tap a shape or a ring to change it.",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,12.5,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],e),A.F,q,A.e,A.j,0,A.p),1),B.aH(q,q,q,q,B.X(A.cC,j,q,q,q,q),q,q,q,new C.esc(a2),q,q,q,q,q,q)],e),A.m,q,A.e,A.j,0,q,q),a0=B.d("SHAPE",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q),a1=B.a([],e)
for(w=0;w<7;++w){v={}
u=D.BY[w]
v.a=null
t=v.a=u.a
a1.push(new C.bgQ(t,u.b,p.a===t,i,k,new C.esd(v,m),q))}a1=B.bW(A.bz,a1,A.bq,10,10)
v=B.d("RING",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q)
u=B.a([],e)
for(w=0;w<11;++w){s={}
r=D.BT[w]
s.a=null
t=s.a=r.a
u.push(new C.bgP(t,r.b,p.b===t,k,j,new C.ese(s,m),q))}return B.bl(!0,B.p(q,B.cd(B.v(B.a([d,A.aQ,a0,A.S,a1,A.by,v,A.S,B.bW(A.bz,u,A.bq,12,12),A.by,new B.a7(1/0,48,B.ey(D.bPP,D.fvl,new C.esf(o,n),B.dg(q,q,q,q,q,q,q,q,q,A.aE,q,q,q,q,new B.b7(B.m(16),A.Y),D.aXR,q,q,q,q)),q)],e),A.F,q,A.e,A.Q,0,A.p),A.r,q,A.y,q,q,q,q,A.ah),A.f,q,q,new B.o(h,q,f,g,q,q,A.n),q,q,q,A.ty,D.brZ,q,q,q),!0,!1,A.af,!0,!0)},
$S:85}
C.esh.prototype={
$2$f$r(d,e){var w=this
w.c.$1(new C.esa(w.a,d,e))
w.b.d3(new C.esb(w.d,d,e))},
$0(){return this.$2$f$r(null,null)},
$1$r(d){return this.$2$f$r(null,d)},
$1$f(d){return this.$2$f$r(d,null)},
$S:1699}
C.esa.prototype={
$0(){var w=this,v=w.b
if(v!=null)w.a.a=v
v=w.c
if(v!=null)w.a.b=v},
$S:0}
C.esb.prototype={
$0(){var w,v,u,t,s,r,q,p
for(w=this.a,v=w.length,u=this.c,t=u!=null,s=this.b,r=s!=null,q=0;q<v;++q){p=w[q]
if(r)p.go=s
if(t)p.id=u}},
$S:0}
C.esc.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.esd.prototype={
$0(){return this.b.$1$f(this.a.a)},
$S:0}
C.ese.prototype={
$0(){return this.b.$1$r(this.a.a)},
$S:0}
C.esf.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A4.Gk(78,1920),$async$$0)
case 3:s=e
if(s==null){w=1
break}t.a.d3(new C.es9(t.b,s))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.es9.prototype={
$0(){var w,v,u,t
for(w=this.a,v=w.length,u=this.b,t=0;t<v;++t)w[t].at=u},
$S:0}
C.esl.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+6}
C.esm.prototype={
$0(){var w,v,u,t=this,s=t.a
if(s.a<0)s.a=t.c.r.length
w=t.c
v=w.r
A.d.bn(v,new C.esk(t.d))
u=A.o.D(s.a,0,v.length)
s.a=u
s=t.e
A.d.na(v,u,s.r)
w.CW=s.CW
w.cx=s.cx
w.cy=s.cy
w.ay=s.ay
s=t.b
s.f=A.o.D(s.f,0,v.length-1)
s.r=null
s.xi()},
$S:0}
C.esk.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+6}
C.esD.prototype={
$1(d){return d.b===D.cQ},
$S:z+4}
C.esE.prototype={
$1(d){return d.w},
$S:z+82}
C.esF.prototype={
$2(d,e){return d>e?d:e},
$S:88}
C.esG.prototype={
$1(d){var w=this,v=null,u=B.P(d).ax.a===A.I,t=u?A.c:A.M,s=u?A.aR:A.ak,r=u?A.bm:A.aP,q=u?A.M:A.c,p=B.m(28),o=B.I(u?A.bF:A.aL,A.q,1),n=B.aI(d,A.bU,x.w).w,m=w.a,l=x.p,k=w.b
return B.bl(!0,B.p(v,B.v(B.a([B.A(B.a([B.p(v,D.bJx,A.f,v,v,D.aZf,v,38,v,v,v,v,v,38),A.bf,B.E(B.v(B.a([B.d("Edit this slide",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,19,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.d("Slide "+(m.f+1)+" \xb7 changes save as you type",v,v,v,v,v,v,B.l(v,v,s,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],l),A.F,v,A.e,A.j,0,A.p),1),B.aH(v,v,v,v,B.X(A.cC,s,v,v,v,v),v,v,v,new C.esA(d),v,v,v,v,v,v)],l),A.m,v,A.e,A.j,0,v,v),A.aA,new B.dq(1,A.cn,B.hH(v,new C.esB(m,k,w.c,s,w.d,t,r),k.length,A.fy,v,A.ah,new C.esC(),!0),v)],l),A.F,v,A.e,A.Q,0,A.p),A.f,v,new B.aY(0,1/0,0,n.a.b*0.8),new B.o(q,v,o,p,v,v,A.n),v,v,v,A.ty,A.Yj,v,v,v),!0,!1,A.af,!0,!0)},
$S:26}
C.esA.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.esC.prototype={
$2(d,e){return A.ac},
$S:36}
C.esB.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=null,p=r.b[e],o=p.w===r.c,n=o?"TITLE":"TEXT "+(e+1)
n=B.d(n,q,q,q,q,q,q,B.l(q,q,o?A.aE:r.d,q,q,q,q,q,q,q,q,10.5,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q)
w=r.e
v=w.h(0,p.a)
u=o?1:2
t=o?A.H:A.cv
t=B.l(q,q,r.f,q,q,q,q,q,q,q,q,15,q,q,t,q,q,!0,q,q,q,q,q,q,q,q)
s=r.a
w=B.aH(q,q,q,q,D.bMD,q,q,q,new C.esy(s,w,p),q,q,q,q,"Add an icon",q)
return B.v(B.a([new B.D(D.buc,n,q),B.aM(q,A.T,!1,q,!0,A.r,q,B.aN(),v,q,q,q,q,q,2,B.br(q,new B.b4(4,B.m(16),A.Y),q,A.eP,q,q,q,q,!0,q,q,q,q,q,q,r.r,!0,q,q,q,q,new B.b4(4,B.m(16),D.aXw),q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,!0,!0,!1,q,q,q,q,q,q,q,q,w,q,q,q,q,q),A.y,!0,q,!0,q,!1,q,A.ai,q,q,q,q,q,q,q,q,q,q,u,q,!1,"\u2022",q,new C.esz(s,p),q,q,q,!1,q,q,!1,q,!0,q,A.a9,q,q,q,q,q,q,q,q,q,q,q,t,!0,A.a4,q,A.am,q,q,q,q)],x.p),A.F,q,A.e,A.j,0,A.p)},
$S:707}
C.esy.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=t.a
k=l.c
k.toString
w=3
return B.b(C.i7h(k),$async$$0)
case 3:s=e
if(s==null||l.c==null){w=1
break}k=t.c.a
r=t.b.h(0,k)
q=r.a
p=q.b
o=p.gex()?p.a:q.a.length
n=p.gex()?p.b:q.a.length
m=A.a.oH(q.a,o,n,s)
r.bO(0,new B.bb(m,B.h8(A.bw,o+s.length),A.aN))
l.aiq(k,m)
l.pg()
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.esz.prototype={
$1(d){var w=this.a
w.aiq(this.b.a,d)
w.pg()},
$S:2}
C.esH.prototype={
$0(){},
$S:0}
C.es8.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.db=u.length===0?null:u
w.dx=v.b
w.dy=v.c
v=v.d
w.fr=v.length===0?null:v},
$S:0}
C.eqo.prototype={
$0(){},
$S:0}
C.eqp.prototype={
$0(){var w=this.c.CW
if(w==null)w=""
C.hkR(this.b,w,!0)
w=this.a
w.r=null
w.xi()},
$S:0}
C.eqq.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+6}
C.eqr.prototype={
$0(){var w,v,u,t=this,s=t.a
if(s.a<0)s.a=t.c.r.length
w=t.c
v=w.r
A.d.bn(v,new C.eqn(t.d))
u=A.o.D(s.a,0,v.length)
s.a=u
s=t.e
A.d.na(v,u,s.r)
w.CW=s.CW
w.cx=s.cx
s=t.b
s.f=A.o.D(s.f,0,v.length-1)
s.r=null
s.xi()},
$S:0}
C.eqn.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+6}
C.esN.prototype={
$1(d){return B.oL(new C.esM(this.a,d),!1,0.82,0.95,0.45,!1,null)},
$S:127}
C.esM.prototype={
$2(d,e){var w=null,v=x.p
return B.v(B.a([new B.D(E.ahI,B.v(B.a([D.fqx,A.an,B.d("Top 4 templates are free \xb7 lock icon means Slides Pro",w,w,w,w,w,w,B.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],v),A.F,w,A.e,A.j,0,A.p),w),B.E(B.ie(!0,w,e,A.y,D.eOq,new C.esL(this.a,this.b),20,A.tB,w,A.ah,!1),1)],v),A.aj,w,A.e,A.j,0,A.p)},
$S:435}
C.esL.prototype={
$2(d,e){var w=null,v=D.GK[e],u=C.hDm(v),t=B.m(16),s=B.m(16),r=B.a([v.e,v.f],x.O),q=v.d,p=B.I(q.j(0.45),A.q,1),o=q.j(0.2),n=B.m(8),m=x.p
n=B.a([B.p(w,B.d(v.c,w,w,w,w,w,w,B.l(w,w,q,w,w,w,w,w,w,w,w,9,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.f,w,w,new B.o(o,w,w,n,w,w,A.n),w,w,w,w,A.fK,w,w,w)],m)
if(u)A.d.v(n,B.a([A.bp,B.p(w,D.eIB,A.f,w,w,new B.o(A.dS.j(0.85),w,w,B.m(8),w,w,A.n),w,w,w,w,A.nc,w,w,w)],m))
return B.aG(!1,A.a1,!0,w,B.aL(!1,t,!0,B.p(w,B.v(B.a([B.A(n,A.m,w,A.e,A.j,0,w,w),A.b6,B.d(v.b,w,w,w,w,w,w,B.l(w,w,v.r,w,w,w,w,w,w,w,w,14,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.d("5 slides",w,w,w,w,w,w,B.l(w,w,v.w.j(0.8),w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],m),A.F,w,A.e,A.j,0,A.p),A.f,w,w,new B.o(w,w,p,s,w,new B.a8(A.a3,A.a7,A.x,r,w,w),A.n),w,w,w,w,A.bk,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.esK(this.a,u,this.b,v),w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ag)},
$S:77}
C.esK.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=t.b?3:4
break
case 3:s=t.c
r=t.a.a
w=5
return B.b(C.cdf(s,r.c,r.d),$async$$0)
case 5:if(!e||s.e==null){w=1
break}case 4:s=t.c
if(s.e!=null)B.a5(s,!1).O(t.d.a)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.esO.prototype={
$0(){var w=this.a
w.e=this.b.hC()
w.f=0
w.r=null
w.db=!0
A.d.a9(w.ax)
A.d.a9(w.ay)
w.xi()},
$S:0}
C.ep2.prototype={
$0(){var w,v=this.a,u=v.gqh(),t=C.ro(4294967295,null,0,0,null,C.cC(),D.mB,"","","",D.dd),s=this.b
C.cds(t,s,u)
w=v.gdr()
if(w!=null&&s!==D.Cx){t.e=w.e
t.f=w.f}A.d.ck(v.e.r,v.f+1,t);++v.f
v.r=null},
$S:0}
C.eqm.prototype={
$0(){var w,v,u,t,s,r,q=this.b.ag()
q.n(0,"id",C.cC())
w=x.c.a(q.h(0,"elements"))
if(w!=null)for(v=J.aV(w),u=x.f;v.C();){t=v.gT(v)
if(u.b(t)){s=Date.now()
r=$.iZ
$.iZ=r+1
J.aF(t,"id",""+1000*s+"_"+r)}}v=this.a
A.d.ck(v.e.r,v.f+1,C.h8_(q));++v.f},
$S:0}
C.eqk.prototype={
$0(){var w=this.a
A.d.cC(w.e.r,w.f)
w.f=A.o.D(w.f,0,w.e.r.length-1)
w.r=null},
$S:0}
C.esW.prototype={
$0(){var w,v=this.a,u=this.b,t=A.d.cC(v.e.r,u),s=this.c
A.d.ck(v.e.r,s,t)
w=v.f
if(w===u)v.f=s
else if(u<w&&s>=w)v.f=w-1
else if(u>w&&s<=w)v.f=w+1},
$S:0}
C.eqg.prototype={
$0(){var w,v=this.a,u=this.b
A.d.bn(v.d,new C.eqf(u))
w=v.e
w=w==null?null:w.a
if(w===u.a){v.e=null
v.db=!1}},
$S:0}
C.eqf.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.esV.prototype={
$0(){var w,v=this.b,u=A.a.i(this.c)
v.b=u.length===0?"Untitled Presentation":u
v.f=new B.S(Date.now(),0,!1)
u=this.a.e
w=u==null?null:u.a
if(w===v.a)u.b=v.b},
$S:0}
C.eq6.prototype={
$0(){var w=this.a.r
return new B.ar(new B.bb(w,A.b4,A.aN),$.aw())},
$S:264}
C.eqI.prototype={
$0(){return B.jN(!0,null,!0,!0,null,null,!1)},
$S:475}
C.euD.prototype={
$0(){var w=this.a
w.w=w.r=this.b
w.y=!1},
$S:0}
C.euE.prototype={
$1(d){var w,v,u=this.a
if(u.c==null||u.w!==this.b)return
w=this.c
u.asy(w).fJ()
v=u.Wa(w)
v.st8(B.h8(A.bw,v.a.a.length))},
$S:8}
C.eu2.prototype={
$0(){var w,v,u,t=this
if(t.b)t.a.w=null
w=t.a
v=w.r=t.c
if(v!=null){w.as=!0
u=w.X9(v)
if(u!=null&&u.b===D.cQ)w.Wa(u).saV(0,u.r)}else w.w=null},
$S:0}
C.ep3.prototype={
$0(){var w=C.cC(),v=this.a,u=C.ep(A.bg,!1,v.gqh().e.l(),A.aD,"",4280640491,24,A.bl,A.a5,"",0.22,w,null,"","",0,!1,"",0,D.be,4280172719,2,"Tap to edit text",0,0,"",D.cm,D.cQ,0.7,0.15,0.2)
A.d.J(v.gdr().z,u)
v.r=u.a},
$S:0}
C.ep0.prototype={
$0(){var w=C.cC(),v=this.a,u=C.ep(A.bg,!1,4279310375,A.aD,"",v.gqh().c.j(0.25).l(),24,A.bl,A.a5,"",0.25,w,null,"","",0,!1,"",0,this.b,v.gqh().c.l(),2,"",0,0,"",D.cm,D.f0,0.25,0.3,0.3)
A.d.J(v.gdr().z,u)
v.r=u.a},
$S:0}
C.eoR.prototype={
$0(){var w=C.ep(A.bg,!1,4279310375,A.aD,"",4280640491,24,A.bl,A.a5,"",0.55,C.cC(),this.b,"","",0,!1,"",0,D.be,4280172719,2,"",0,0,"",D.cm,D.lq,0.6,0.2,0.18),v=this.a
A.d.J(v.gdr().z,w)
v.r=w.a},
$S:0}
C.eoO.prototype={
$1(d){var w,v,u,t,s,r=null,q=B.a([D.bWw],x.p)
for(w=J.aV(this.a);w.C();){v=w.gT(w)
u=A.a.i(v.b)
if(u.length===0)u="My Bio"
t=v.gaj1().length
s=v.at==="published"&&v.Q.length!==0?" \xb7 "+v.as:""
q.push(B.dL(!1,r,r,r,!0,r,r,r,!0,r,D.bHf,r,r,r,r,new C.eoN(d,v),!1,r,r,r,r,r,new B.x(""+t+" links"+s,r,r,r,r,r,r,A.a2,r,1,r,r),r,new B.x(u,r,r,r,r,r,r,r,r,r,r,r),r,r,r))}return B.bl(!0,B.cz(q,r,r,r,r,A.ah,!0),!0,!1,A.af,!0,!0)},
$S:26}
C.eoN.prototype={
$0(){B.a5(this.a,!1).O(this.b)
return null},
$S:0}
C.eoP.prototype={
$0(){var w=A.k.D(0.23131034482758622,0.12,0.5),v=C.cC(),u=this.b,t=A.R.ao(u.ag(),null),s=C.ep(A.bg,!1,4279310375,A.aD,u.b,4280640491,24,A.bl,A.a5,"",0.86,v,null,"","",0,!1,"",0,D.be,4280172719,2,t,0,0,"",D.cm,D.a4r,w,0.5-w/2,0.07)
t=this.a
A.d.J(t.gdr().z,s)
t.r=s.a},
$S:0}
C.eqi.prototype={
$1(d){return d.a===this.a&&d.db==="ngmy_quote_logo"},
$S:z+4}
C.eqj.prototype={
$0(){var w,v=this.a,u=this.b
A.d.bn(v.gdr().z,new C.eqh(u))
v.w=v.r=null
w=v.ch.W(0,u)
if(w!=null){w.U$=$.aw()
w.P$=0}v=v.CW.W(0,u)
if(v!=null)v.q()},
$S:0}
C.eqh.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.epv.prototype={
$0(){var w,v,u,t=this,s=t.b
if(s!=null){w=s.b
if(w===D.cQ)s.Q=t.c.l()
else if(w===D.f0){s.ay=t.c.l()
w=t.d
if(w!=null)s.ch=w.l()}return}v=new C.epw(t.c,t.d)
if(t.a.Q)for(s=t.e.r,w=s.length,u=0;u<s.length;s.length===w||(0,B.L)(s),++u)v.$1(s[u])
else{s=t.f
if(s!=null)v.$1(s)}},
$S:0}
C.epw.prototype={
$1(d){var w
d.e=this.a.l()
w=this.b
d.f=w==null?null:w.l()},
$S:z+1}
C.epA.prototype={
$0(){var w,v,u,t,s=this.a,r=s.e
r.toString
w=this.b
v=new C.epB(w)
if(s.Q){r.c=w.a
for(s=r.r,r=s.length,u=0;u<s.length;s.length===r||(0,B.L)(s),++u)v.$1(s[u])}else{t=s.gdr()
if(t!=null)v.$1(t)}},
$S:0}
C.epB.prototype={
$1(d){var w=this.a
d.e=w.f.l()
w=w.r
d.f=w==null?null:w.l()},
$S:z+1}
C.epy.prototype={
$0(){var w,v,u,t=this,s=t.b
if(s!=null&&s.b===D.cQ){s.Q=t.c
return}w=new C.epz(t.c)
if(t.a.Q)for(s=t.d.r,v=s.length,u=0;u<s.length;s.length===v||(0,B.L)(s),++u)w.$1(s[u])
else{s=t.e
if(s!=null)w.$1(s)}},
$S:0}
C.epz.prototype={
$1(d){var w,v,u
for(w=A.d.gaf(d.z),v=new B.fe(w,new C.epx()),u=this.a;v.C();)w.gT(0).Q=u},
$S:z+1}
C.epx.prototype={
$1(d){return d.b===D.cQ},
$S:z+4}
C.epu.prototype={
$0(){return C.cds(this.b,this.c,this.a.gqh())},
$S:0}
C.esx.prototype={
$0(){return A.d.ck(this.a.d,0,this.b)},
$S:0}
C.euM.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.euN.prototype={
$1(d){return d.w===this.b&&d.a!==this.a.a.a},
$S:z+2}
C.euO.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.euP.prototype={
$0(){var w,v=this.a,u=v.c,t=this.b,s=t.d
if(u)A.d.ck(s,0,v.b)
else{w=A.d.bd(s,new C.euL(v))
if(w>=0)t.d[w]=v.b}if(v.a.gRS()){u=v.b
u.Q=v.a.Q
u.z=!0}if(this.c===!0){t.e=v.b.hC()
t.f=0
t.r=null
t.db=!1
A.d.a9(t.ax)
A.d.a9(t.ay)
t.xi()
t.JP()}},
$S:0}
C.euL.prototype={
$1(d){return d.a===this.a.b.a},
$S:z+2}
C.eui.prototype={
$1(d){var w=this,v=null,u=w.a,t=u.aaU(),s=w.b,r=u.aaV(A.f8,A.kS,"Copy filled names, date, mahari, witnesses, and signatures into "+s+".","Transfer details"),q=B.m(18),p=B.a([A.c.j(0.07),A.c.j(0.03)],x.O),o=B.I(A.c.j(0.08),A.q,1),n=x.p
p=B.a([t,A.N,r,A.by,B.p(v,B.A(B.a([B.E(u.aTY(w.c,A.ak),1),new B.D(A.fq,B.p(v,D.bHl,A.f,v,v,new B.o(A.f8.j(0.18),v,v,v,v,v,A.a6),v,34,v,v,v,v,v,34),v),B.E(u.aTY(s,A.f8),1)],n),A.m,v,A.e,A.j,0,v,v),A.f,v,v,new B.o(v,v,o,q,v,new B.a8(A.ax,A.aC,A.x,p,v,v),A.n),v,v,v,v,A.bC,v,v,v),A.by,u.aU0(A.f8,d,D.bDs,!0,"Make a fresh "+s+" and fill it automatically","Create new & transfer","new")],n)
t=w.d
if(t>0)A.d.v(p,B.a([A.S,u.bW9(A.aS,d,A.tP,t===1?"Update your saved "+s:"Choose among "+t+" saved documents","Use existing","existing")],n))
p.push(A.aA)
p.push(u.aTZ(d,"Not now"))
return new C.Jy(B.v(p,A.aj,v,A.e,A.Q,0,A.p),v)},
$S:z+9}
C.euh.prototype={
$1(d){var w=null,v=this.a,u=this.c
return new C.Jy(B.v(B.a([v.aaU(),A.N,v.aaV(A.aS,D.bD7,"Pick which saved document should receive the details.","Choose "+this.b),A.aQ,new B.cS(new B.aY(0,1/0,0,B.aI(d,A.bU,x.w).w.a.b*0.42),B.hH(w,new C.euf(v,u,d),u.length,w,w,A.ah,new C.eug(),!0),w),A.aA,v.aTZ(d,"Cancel")],x.p),A.aj,w,A.e,A.Q,0,A.p),w)},
$S:z+9}
C.eug.prototype={
$2(d,e){return A.S},
$S:36}
C.euf.prototype={
$2(d,e){var w=null,v=this.b[e],u=B.m(16),t=A.c.j(0.05),s=B.m(16),r=B.I(A.c.j(0.08),A.q,1),q=x.p
return B.aG(!1,A.a1,!0,w,B.aL(!1,u,!0,B.p(w,B.A(B.a([B.p(w,D.amz,A.f,w,w,new B.o(w,w,w,B.m(12),w,D.bTs,A.n),w,42,w,w,w,w,w,42),A.bf,B.E(B.v(B.a([B.d(v.b,w,1,A.a2,w,w,w,A.nu,w,w,w),A.cS,B.d("Updated "+this.a.Pv(v.f),w,w,w,w,w,w,B.l(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,12,w,w,A.a5,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],q),A.F,w,A.e,A.j,0,A.p),1),B.X(A.ex,A.c.j(0.35),w,w,w,w)],q),A.m,w,A.e,A.j,0,w,w),A.f,w,w,new B.o(t,w,r,s,w,w,A.n),w,w,w,w,A.bC,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eue(this.c,v),w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ag)},
$S:77}
C.eue.prototype={
$0(){B.a5(this.a,!1).O(this.b.a)
return null},
$S:0}
C.eub.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.aaU()
t=t.aaV(A.aH,A.tY,"Names and shared details from \u201c"+this.b+"\u201d will fill matching spots on \u201c"+this.c+"\u201d.","Replace matching fields?")
w=A.c.j(0.14)
v=x.p
return new C.Jy(B.v(B.a([s,A.N,t,A.by,B.A(B.a([B.E(B.dT(A.a7M,new C.eu9(d),B.dg(u,u,u,u,u,u,u,u,u,A.c,u,u,A.ck,u,new B.b7(B.m(14),A.Y),new B.ay(w,1,A.q,-1),u,u,u,u)),1),A.av,B.E(B.bH(D.fcJ,new C.eua(d),B.bm(A.f8,u,u,u,A.c,u,A.ck,u,new B.b7(B.m(14),A.Y),u,u,u)),1)],v),A.m,u,A.e,A.j,0,u,u)],v),A.aj,u,A.e,A.Q,0,A.p),u)},
$S:z+9}
C.eu9.prototype={
$0(){B.a5(this.a,!1).O(!1)
return null},
$S:0}
C.eua.prototype={
$0(){B.a5(this.a,!1).O(!0)
return null},
$S:0}
C.eud.prototype={
$1(d){var w=this,v=null,u=w.a,t=u.aaU(),s=w.b,r=u.aaV(A.aV,A.ef,"Everything that could be matched is now on "+s+".","Transfer complete"),q=x.p,p=B.A(B.a([B.E(u.atT("Names",""+w.c),1),A.ab,B.E(u.atT("Fields",""+w.d),1),A.ab,B.E(u.atT("Signatures",""+w.e),1)],q),A.m,v,A.e,A.j,0,v,v),o=B.bm(A.bj,v,v,v,A.c,v,A.xs,v,new B.b7(B.m(14),A.Y),v,v,v)
return new C.Jy(B.v(B.a([t,A.N,r,A.aQ,p,A.by,B.bH(B.d("Open "+s,v,v,v,v,v,v,A.ns,v,v,v),new C.euc(d),o),A.S,u.aU_(d,"Stay here",!1)],q),A.aj,v,A.e,A.Q,0,A.p),v)},
$S:z+9}
C.euc.prototype={
$0(){B.a5(this.a,!1).O(!0)
return null},
$S:0}
C.erb.prototype={
$0(){B.a5(this.a,!1).O(this.b)
return null},
$S:0}
C.era.prototype={
$0(){B.a5(this.a,!1).O(this.b)
return null},
$S:0}
C.eu3.prototype={
$1(d){return d.b===D.cQ},
$S:z+4}
C.euC.prototype={
$1(d){var w=this.a,v=this.b
return new C.a_3(A.d.dL(w.d,new C.euA(v),new C.euB(v)).hC(),w.f,null)},
$S:z+84}
C.euA.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.euB.prototype={
$0(){return this.a},
$S:z+85}
C.eoW.prototype={
$1(d){var w=null,v=this.b,u=""+v,t=v===1?"":"s"
t=B.a([new B.D(A.bC,B.d("Import "+this.a.c+" ("+u+" page"+t+")",w,w,w,w,w,w,A.hq,w,w,w),w),B.dL(!1,w,w,w,!0,w,w,w,!0,w,D.bJ7,w,w,w,w,new C.eoU(d),!1,w,w,w,w,w,B.d("Scroll through all "+u+" pages inside the slide",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,D.faL,w,w,w)],x.p)
if(v>1)t.push(B.dL(!1,w,w,w,!0,w,w,w,!0,w,D.bKg,w,w,w,w,new C.eoV(d),!1,w,w,w,w,w,D.fww,w,B.d("One slide per page ("+u+" slides)",w,w,w,w,w,w,A.dm,w,w,w),w,w,w))
return B.bl(!0,B.v(t,A.m,w,A.e,A.Q,0,A.p),!0,!1,A.af,!0,!0)},
$S:26}
C.eoU.prototype={
$0(){B.a5(this.a,!1).O("scroll")
return null},
$S:0}
C.eoV.prototype={
$0(){B.a5(this.a,!1).O("split")
return null},
$S:0}
C.eoX.prototype={
$0(){var w=this.b,v=w.c,u=C.ep(A.bg,!1,4279310375,A.aD,v,4280640491,24,A.bl,A.a5,"",0.84,C.cC(),w.b,"","",0,!1,"",0,D.be,4280172719,2,v,0,0,"",D.cm,D.Rr,0.88,0.06,0.08)
v=this.a
A.d.J(v.gdr().z,u)
v.r=u.a},
$S:0}
C.eoY.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this.a,i=j.f+1
for(w=this.b,v=this.c,u=v.b,t=w,v=v.c,s=x.u,r=v+" \u2014 page ",q=1;q<=w;++q){p=Date.now()
o=$.iZ
$.iZ=o+1
n=""+q
m=B.a([],s)
l=Date.now()
k=$.iZ
$.iZ=k+1
m.push(new C.eJ(""+1000*l+"_"+k,D.Rr,0.04,0.06,0.92,0.88,v,24,A.a5,A.bl,A.aD,4279310375,A.bg,u,D.be,4280640491,4280172719,2,0,!1,n+" / "+t,q,D.cm,0,"","","","","",!1,0))
A.d.ck(j.e.r,i+q-1,new C.lD(""+1000*p+"_"+o,r+n,"",D.q5,4294967295,null,D.dd,0,"",0,m))}j.f=i
j.r=null},
$S:0}
C.ep1.prototype={
$0(){var w,v=C.cC(),u=this.a,t=u.e
t=(t==null?null:C.ku(t.w))===!0?"marriage_sign_placed":"Signature"
w=C.ep(A.bg,!1,4279310375,A.aD,t,4280640491,24,A.bl,A.a5,"",0.22,v,this.b.a,"","",0,!1,"",0,D.be,4280172719,2,"",0,0,"",D.cm,D.kX,0.35,0.55,0.62)
A.d.J(u.gdr().z,w)
u.r=w.a},
$S:0}
C.eoT.prototype={
$0(){var w,v,u,t,s,r,q,p=this.a,o=this.b
p.b1D(o)
w=C.cC()
v=this.c
u=v.c
t=v.d
s=v.e
r=v.f
q=C.ep(A.bg,!1,4279310375,A.aD,"marriage_sign_placed_"+A.a.ed(v.db,"marriage_sign_",""),4280640491,24,A.bl,A.a5,"",r,w,o.a,"","",0,!1,"",0,D.be,4280172719,2,"",0,0,"",D.cm,D.kX,s,u,t)
A.d.J(p.gdr().z,q)
A.d.bn(p.gdr().z,new C.eoS(v))
p.r=null
p=p.e
if((p==null?null:p.w)==="hati_kiapo_uongozi"&&A.a.t(v.db,"rais")){p.toString
C.i1g(p)}},
$S:0}
C.eoS.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.esT.prototype={
$0(){var w=this.a,v=this.b
w.b1D(v)
this.c.at=v.a
w.r=null},
$S:0}
C.euK.prototype={
$0(){var w,v,u,t,s,r,q=4279673674,p=1483594
for(w=this.b.z,v=w.length,u=this.c,t=0;t<v;++t){s=w[t]
r=s.db
if(r==="marriage_locked_nim_akuna_deni"){s.r="AKUNA DENI"
s.Q=u?q:p}else if(r==="marriage_locked_nim_akuna_box")s.ch=u?q:p
else if(r==="marriage_locked_nim_akuna_tick"){s.r="\u2713"
s.Q=u?q:p}}this.a.r=null},
$S:0}
C.ere.prototype={
$0(){var w,v,u,t,s,r=this.b
A.d.bn(r.z,new C.erd())
for(r=r.z,w=r.length,v=this.c+0.001,u=0;u<w;++u){t=r[u]
s=t.d
if(s>v)t.d=s-0.043}this.a.r=null},
$S:0}
C.erd.prototype={
$1(d){var w=d.db
return w==="marriage_locked_nim_n_4"||w==="marriage_locked_nim_ul_4"||A.a.a0(w,"marriage_field_mahari_4:")},
$S:z+4}
C.epE.prototype={
$0(){var w=this.b
w.at=this.c
w.db="__kiapo_video__"
w=this.a
w.r=null
w.db=!1},
$S:0}
C.epF.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.tr()},
$S:8}
C.eoQ.prototype={
$0(){var w=C.ep(A.bg,!1,4279310375,A.aD,"HD Photo",4280640491,24,A.bl,A.a5,"",0.8,C.cC(),this.b,"","",0,!1,"",0,D.be,4280172719,2,"",0,0,"",D.cm,D.lq,0.8,0.1,0.1),v=this.a
A.d.J(v.gdr().z,w)
v.r=w.a},
$S:0}
C.eqG.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.eoZ.prototype={
$0(){var w=this.a,v=this.b
A.d.J(w.gdr().z,v)
w.r=v.a},
$S:0}
C.ep7.prototype={
$0(){return this.a.cx+=0.785398},
$S:0}
C.ep8.prototype={
$0(){var w=this.b.hC(),v=C.cC(),u=A.k.D(w.c+0.04,0,0.92),t=A.k.D(w.d+0.04,0,0.92),s=w.e,r=w.f,q=w.r,p=w.w,o=w.x,n=w.y,m=w.z,l=w.Q,k=w.as,j=w.at,i=w.ay,h=w.ch,g=w.cx,f=C.ep(k,w.cy,l,m,w.db,i,p,n,o,"",r,v,j,"","",w.dx,!1,"",g,w.ax,h,w.CW,q,w.fr,0,"",w.dy,w.b,s,u,t)
t=this.a
A.d.J(t.gdr().z,f)
t.r=f.a},
$S:0}
C.ep9.prototype={
$0(){var w=this.a.gdr().z,v=this.b,u=A.d.bd(w,new C.ep6(v))
if(u>=0&&u<w.length-1){A.d.cC(w,u)
A.d.ck(w,u+1,v)}},
$S:0}
C.ep6.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.epk.prototype={
$0(){var w=this.a.gdr().z,v=this.b,u=A.d.bd(w,new C.ep5(v))
if(u>0){A.d.cC(w,u)
A.d.ck(w,u-1,v)}},
$S:0}
C.ep5.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.epn.prototype={
$0(){return this.a.as=A.bg},
$S:0}
C.epo.prototype={
$0(){return this.a.as=A.L},
$S:0}
C.epp.prototype={
$0(){return this.a.as=A.dM},
$S:0}
C.epq.prototype={
$0(){return this.a.cx+=3.14159},
$S:0}
C.epr.prototype={
$0(){return this.a.cx-=3.14159},
$S:0}
C.eps.prototype={
$1(d){return d.b===D.cQ},
$S:z+4}
C.ept.prototype={
$1(d){return d.length!==0},
$S:3}
C.epa.prototype={
$0(){var w=this.a,v=w.gdr().z,u=C.cC()
A.d.J(v,C.CF(w.gqh().c.j(0.18).l(),0.1,u,D.be,0,2,1,0,0))
u=w.gdr().z
v=C.cC()
A.d.J(u,C.iS(A.bg,!1,w.gqh().d.l(),A.aD,18,A.bl,A.H,0.07,v,"Document Header",0,D.dd,0.9,0.05,0.02))},
$S:0}
C.epb.prototype={
$0(){var w,v=this.a,u=v.gdr().z,t=C.cC()
A.d.J(u,C.CF(v.gqh().c.j(0.12).l(),0.1,t,D.be,0,2,1,0,0.9))
t=v.gdr().z
u=C.cC()
w=C.bC7()
A.d.J(t,C.iS(A.L,!1,v.gqh().e.l(),A.aD,12,A.bl,A.a5,0.06,u,"Footer \xb7 "+w,0,D.dd,0.9,0.05,0.92))},
$S:0}
C.epc.prototype={
$0(){A.d.J(this.a.gdr().z,C.CF(1727914055,0.12,C.cC(),D.be,4294626325,2,0.76,0.12,0.35))},
$S:0}
C.epd.prototype={
$0(){var w=4279310375
A.d.J(this.a.gdr().z,C.CF(w,0.08,C.cC(),D.be,w,2,0.5,0.2,0.4))},
$S:0}
C.epe.prototype={
$0(){var w=this.a,v=w.gdr().z,u=C.cC()
A.d.J(v,C.CF(w.gqh().c.j(0.35).l(),0.12,u,D.Cy,4280640491,2,0.2,0.15,0.55))
A.d.J(w.gdr().z,C.iS(A.bg,!1,4279310375,A.aD,18,A.bl,A.a5,0.15,C.cC(),"Important note",0,D.q6,0.5,0.38,0.52))},
$S:0}
C.epf.prototype={
$0(){var w=this.a
A.d.J(w.gdr().z,C.CF(4294507260,0.78,C.cC(),D.be,4291548641,1.5,0.84,0.08,0.1))
A.d.J(w.gdr().z,C.iS(A.bg,!1,4279179050,A.aD,16,A.bl,A.a5,0.7,C.cC(),"MEMO\n\nTo:\nFrom:\nDate: "+C.bC7()+"\n\nSubject:\n\nBody text\u2026",0,D.dd,0.76,0.12,0.14))},
$S:0}
C.epg.prototype={
$0(){var w=this.a
A.d.J(w.gdr().z,C.CF(4294897802,0.28,C.cC(),D.be,4294626325,2,0.3,0.62,0.12))
A.d.J(w.gdr().z,C.iS(A.bg,!1,4285611794,A.aD,15,A.bl,A.a5,0.24,C.cC(),"Sticky note",0,D.aFi,0.26,0.64,0.14))},
$S:0}
C.eph.prototype={
$0(){var w=4280640491,v=this.a
A.d.J(v.gdr().z,C.CF(4293060848,0.04,C.cC(),D.be,4291548641,2,0.8,0.1,0.48))
A.d.J(v.gdr().z,C.CF(w,0.04,C.cC(),D.be,w,2,0.55,0.1,0.48))},
$S:0}
C.epi.prototype={
$0(){var w=4279310375,v=this.a
A.d.J(v.gdr().z,C.iS(A.bg,!1,w,A.aD,18,A.bl,A.a5,0.62,C.cC(),"Left column\n\n\u2022 Point A\n\u2022 Point B",0,D.HG,0.42,0.06,0.18))
A.d.J(v.gdr().z,C.iS(A.bg,!1,w,A.aD,18,A.bl,A.a5,0.62,C.cC(),"Right column\n\n\u2022 Point C\n\u2022 Point D",200,D.uc,0.42,0.52,0.18))},
$S:0}
C.epj.prototype={
$0(){var w=4279310375,v=this.a
A.d.J(v.gdr().z,C.CF(858088427,0.62,C.cC(),D.be,4280640491,2,0.42,0.05,0.18))
A.d.J(v.gdr().z,C.CF(856004201,0.62,C.cC(),D.be,4278556265,2,0.42,0.53,0.18))
A.d.J(v.gdr().z,C.iS(A.bg,!1,w,A.aD,20,A.bl,A.H,0.1,C.cC(),"Option A",0,D.dd,0.36,0.08,0.2))
A.d.J(v.gdr().z,C.iS(A.bg,!1,w,A.aD,20,A.bl,A.H,0.1,C.cC(),"Option B",0,D.dd,0.36,0.56,0.2))},
$S:0}
C.epl.prototype={
$0(){var w=4279310375,v=this.a
A.d.J(v.gdr().z,C.CF(4294967295,0.36,C.cC(),D.be,w,2,0.24,0.38,0.28))
A.d.J(v.gdr().z,C.iS(A.L,!1,w,A.aD,14,A.bl,A.a5,0.12,C.cC(),"[ QR CODE ]",0,D.dd,0.24,0.38,0.4))},
$S:0}
C.epm.prototype={
$0(){return C.cds(this.b,D.Rs,this.a.gqh())},
$S:0}
C.eqF.prototype={
$1(d){var w=this.b,v=w.dy,u=!D.a66.t(0,d),t=this.a
return t.b6A(d,v===d,A.aZ,this.c,new C.eqE(t,u,d,w),u)},
$S:z+25}
C.eqE.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p=t.b
if(p){w=3
break}else e=p
w=4
break
case 3:w=5
return B.b(t.a.o2(),$async$$0)
case 5:e=!e
case 4:if(e){w=1
break}s=t.a
r=s.c
if(r==null){w=1
break}q=t.c
C.bCV(r,new C.eqD(s,t.d,q),q)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eqD.prototype={
$0(){return this.a.d3(new C.eqC(this.b,this.c))},
$S:0}
C.eqC.prototype={
$0(){return this.a.dy=this.b},
$S:0}
C.ep_.prototype={
$0(){var w,v=this.a,u=v.gqh(),t=C.ro(4294967295,null,0,0,null,C.cC(),D.mB,"","","",D.dd),s=this.b
C.cds(t,s,u)
w=v.gdr()
if(w!=null&&s!==D.Cx){t.e=w.e
t.f=w.f}A.d.ck(v.e.r,v.f+1,t);++v.f
v.r=null},
$S:0}
C.epI.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.a
p=q.c
if(p==null){w=1
break}s=q.a
r=s.c
s=s.d
w=3
return B.b(C.i7k(p,q.d,s,new C.epH(q),r),$async$$0)
case 3:w=q.c!=null?4:5
break
case 4:w=6
return B.b(q.tr(),$async$$0)
case 6:case 5:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.epH.prototype={
$1(d){return this.bje(d)},
bje(d){var w=0,v=B.j(x.H),u=this,t
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.a
t.m(new C.epG(t,d))
w=2
return B.b(t.tr(),$async$$1)
case 2:return B.h(null,v)}})
return B.i($async$$1,v)},
$S:z+87}
C.epG.prototype={
$0(){var w,v,u
for(w=J.aV(this.b),v=this.a;w.C();){u=w.gT(w)
A.d.ck(v.d,0,u)}},
$S:0}
C.epJ.prototype={
$0(){return this.a.bH6()},
$S:0}
C.epK.prototype={
$0(){return this.a.aPg("Class Presentation",!0)},
$S:0}
C.epL.prototype={
$1(d){return this.a.bI2(d.b,this.b,d.a)},
$S:z+88}
C.eql.prototype={
$0(){var w,v=this.a
v.as=!1
w=v.c
w.toString
if(B.aI(w,A.bU,x.w).w.a.a<900)v.w=v.r=null},
$S:0}
C.esw.prototype={
$1(d){return new B.D(new B.Q(0,0,0,B.aI(d,A.eD,x.w).w.f.d),new B.e0(new C.esv(this.a,this.b),null),null)},
$S:58}
C.esv.prototype={
$2(d,e){return B.oL(new C.esu(this.a,this.b,d,e),!1,0.52,0.9,0.34,!1,null)},
$S:658}
C.esu.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u?A.aB:A.c,s=B.I(u?A.bF:A.aL,A.q,1),r=B.p(v,v,A.f,v,v,new B.o(A.b2,v,v,B.m(99),v,v,A.n),v,4,v,v,v,v,v,40),q=x.p,p=w.a
return B.p(v,B.v(B.a([A.S,r,new B.D(A.aha,B.A(B.a([B.d("Format",v,v,v,v,v,v,B.l(v,v,u?A.c:A.M,v,v,v,v,v,v,v,v,17,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.b6,B.bK(!1,A.zC,v,v,!0,v,v,new C.ess(w.c),v,v)],q),A.m,v,A.e,A.j,0,v,v),v),B.E(B.cz(B.a([p.aS_(u,!0,!0,new C.est(p,w.d))],q),e,D.bpR,v,v,A.ah,!1),1)],q),A.m,v,A.e,A.j,0,A.p),A.f,v,v,new B.o(t,v,s,A.kD,v,v,A.n),v,v,v,v,v,v,v,v)},
$S:114}
C.ess.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.est.prototype={
$0(){this.b.$1(new C.esq())
var w=this.a
if(w.c!=null)w.m(new C.esr())},
$S:0}
C.esq.prototype={
$0(){},
$S:0}
C.esr.prototype={
$0(){},
$S:0}
C.eu4.prototype={
$3(d,e,f){return A.bH},
$C:"$3",
$R:3,
$S:91}
C.eu5.prototype={
$4(d,e,f,g){var w=A.ct.aw(0,e.gp(0))
return B.dc(B.ec(A.A,new C.ayc(this.a,null),0.94+w*0.06,null,null),w)},
$S:436}
C.eu6.prototype={
$3(d,e,f){return A.bH},
$C:"$3",
$R:3,
$S:91}
C.eu7.prototype={
$4(d,e,f,g){var w=A.ct.aw(0,e.gp(0))
return B.dc(B.ec(A.A,new C.bcb(this.a.b,null),0.94+w*0.06,null,null),w)},
$S:436}
C.eu8.prototype={
$0(){return A.d.ck(this.a.d,0,C.Vw(this.b))},
$S:0}
C.ep4.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a.fy
o===$&&B.c()
o=o.x
o===$&&B.c()
w=A.dC.aw(0,o)
o=B.m(22)
v=B.m(22)
u=this.b
t=x.O
s=u?B.a([A.c.j(0.1+w*0.04),A.aB.j(0.72)],t):B.a([A.c.j(0.88),A.pp.j(0.75)],t)
r=B.I(A.b3.j(0.28+w*0.22),A.q,1.3)
q=w*0.2
t=B.a([A.b3.j(0.35+q),A.cd.j(0.18),A.K],t)
q=B.I(A.b3.j(0.45+q),A.q,1)
t=B.p(p,B.X(A_.a_7,u?A.ad:A.M,p,p,p,28),A.f,p,p,new B.o(p,p,q,p,p,new B.bT(A.A,0.5,A.x,p,0,t,p,p),A.a6),p,58,p,p,p,p,p,58)
q=B.d("No presentations yet",p,p,p,p,p,p,B.l(p,p,u?A.c:A.M,p,p,p,p,p,p,p,p,p,p,p,A.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
return B.bw(o,B.tR(A.fv,B.p(p,B.v(B.a([t,A.aA,q,A.an,B.d("Open Blank or Class Template to start \u2014 nothing is saved until you edit.",p,p,p,p,p,p,B.l(p,p,u?A.az:A.ak,p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),A.L,p,p)],x.p),A.m,p,A.e,A.j,0,A.p),A.f,p,p,new B.o(p,p,r,v,p,new B.a8(A.ax,A.aC,A.x,s,p,p),A.n),p,p,p,p,A.ew,p,p,1/0),14,!1),A.aq)},
$S:294}
C.eq9.prototype={
$1(d){return A.a.i(d)},
$S:14}
C.eqa.prototype={
$1(d){return d.length!==0},
$S:3}
C.eqb.prototype={
$1(d){var w
if(A.a.a0(d,"Updated"))w=A.kn
else{w=B.af("^\\d+ slides?$",!0,!1,!1,!1)
w=w.b.test(d)?A.a_E:A.Bn}return w},
$S:708}
C.eqe.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.a,j=k.fy
j===$&&B.c()
j=j.x
j===$&&B.c()
w=A.dC.aw(0,A.k.F(j+m.b*0.12,1))
j=B.m(20)
v=m.c
u=B.m(20)
t=m.d
s=x.O
s=t?B.a([A.c.j(0.1+w*0.04),A.aB.j(0.78)],s):B.a([A.c.j(0.92),A.mS.j(0.82)],s)
r=m.e
q=A.d.gL(r)
p=t?0.34:0.26
p=B.I(q.j(p+w*0.22),A.q,1.25)
q=B.m(10)
q=B.p(l,B.X(C.ku(v.w)?A.vz:A.pU,A.c,l,l,l,22),A.f,l,l,new B.o(l,l,l,q,l,new B.a8(A.a3,A.a7,A.x,r,l,l),A.n),l,36,l,l,l,l,l,52)
o=v.b
o=B.d(o.toUpperCase(),l,l,l,l,l,l,B.l(l,l,t?A.c:A.M,l,l,l,l,l,l,l,l,l,l,l,A.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
n=v.w
if(n==="marriage_agreement")n="Hati ya Kuhowesha \u2022 Updated "+k.Pv(v.f)
else if(n==="hati_kuhowa")n="Hati ya Kuhowa \u2022 Updated "+k.Pv(v.f)
else if(n==="hati_kuhoweya")n="Hati ya Kuhoweya \u2022 Updated "+k.Pv(v.f)
else if(n==="hati_kiapo_uongozi"){n=v.x
if(A.a.i(n==null?"":n).length===0)n="Civic Registry"
n="Kiapo cha Uongozi \u2022 "+B.t(n)+" \u2022 Updated "+k.Pv(v.f)}else n=""+v.r.length+" slides \u2022 Updated "+k.Pv(v.f)
r=k.bI0(n,A.d.gL(r),t)
return B.p(l,B.bw(j,new B.a7v(B.aG(!1,A.a1,!0,l,B.aL(!1,l,!0,B.p(l,B.dL(!1,A.LW,l,l,!0,l,l,l,!0,l,q,l,l,l,l,l,!1,l,l,l,l,l,r,l,o,l,B.aH(l,l,l,l,B.X(A.nZ,t?A.az:A.bJ,l,l,l,l),l,l,l,new C.eqc(k,v,t),l,l,l,l,"Project options",l),l),A.f,l,l,new B.o(l,l,p,u,l,new B.a8(A.ax,A.aC,A.x,s,l,l),A.n),l,l,l,l,l,l,l,l),l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.eqd(k,v),l,l,l,l,l,l,l),A.f,A.K,0,l,l,l,l,l,A.ag),l),A.aq),A.f,l,l,l,l,l,l,A.db,l,l,l,l)},
$S:90}
C.eqd.prototype={
$0(){return this.a.aek(this.b)},
$S:0}
C.eqc.prototype={
$0(){return this.a.AE(this.b,this.c)},
$S:0}
C.erF.prototype={
$0(){var w=this.a
w.b5e()
w.m(new C.erE())},
$S:0}
C.erE.prototype={
$0(){},
$S:0}
C.erG.prototype={
$1(d){return this.a.aiq(this.b.a,d)},
$S:2}
C.erH.prototype={
$0(){this.a.d3(new C.erD(this.b))},
$S:0}
C.erD.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.P)?A.cv:A.P},
$S:0}
C.erI.prototype={
$0(){this.a.d3(new C.erC(this.b))},
$S:0}
C.erC.prototype={
$0(){var w=this.a
return w.y=w.y===A.cF?A.bl:A.cF},
$S:0}
C.erJ.prototype={
$0(){this.a.d3(new C.erB(this.b))},
$S:0}
C.erB.prototype={
$0(){var w=this.a,v=w.z
return w.z=1===v.a?A.aD:A.mH},
$S:0}
C.erK.prototype={
$0(){this.a.d3(new C.erA(this.b))},
$S:0}
C.erA.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
C.erL.prototype={
$0(){var w=this.a
w.d3(new C.erz(w,this.b))},
$S:0}
C.erz.prototype={
$0(){var w=this.b
return w.as=this.a.c1M(w.as)},
$S:0}
C.erM.prototype={
$0(){return this.a.d3(new C.ery(this.b))},
$S:0}
C.ery.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w+2,10,96)},
$S:0}
C.erN.prototype={
$0(){return this.a.d3(new C.erx(this.b))},
$S:0}
C.erx.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w-2,10,96)},
$S:0}
C.erq.prototype={
$0(){return this.a.a1z(this.b.a)},
$S:0}
C.err.prototype={
$0(){this.a.a_6()
return null},
$S:0}
C.ers.prototype={
$0(){var w=this.a,v=w.c
v.toString
if(B.aI(v,A.bU,x.w).w.a.a<900)w.aeD()
else w.m(new C.erp(w))},
$S:0}
C.erp.prototype={
$0(){return this.a.as=!0},
$S:0}
C.ert.prototype={
$0(){this.a.d3(new C.ero(this.b))},
$S:0}
C.ero.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.P)?A.cv:A.P},
$S:0}
C.eru.prototype={
$0(){return this.a.d3(new C.ern(this.b))},
$S:0}
C.ern.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w+2,10,96)},
$S:0}
C.erv.prototype={
$0(){return this.a.d3(new C.erm(this.b))},
$S:0}
C.erm.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w-2,10,96)},
$S:0}
C.erw.prototype={
$0(){return this.a.ayV(null)},
$S:0}
C.eqy.prototype={
$0(){this.a.Dm()
return null},
$S:0}
C.eqz.prototype={
$0(){this.a.a9s()
return null},
$S:0}
C.eqB.prototype={
$1(d){return this.bjf(d)},
bjf(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
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
return B.b(t.a.JG(),$async$$1)
case 10:w=4
break
case 6:s=t.a
r=s.e
if(r==null){w=1
break}q=s.c
q.toString
w=11
return B.b(B.bR(A.aB,null,new C.eqt(r),q,!0,!0,!1,null,!1,!1,x.S),$async$$1)
case 11:p=f
if(p!=null)s.d3(new C.equ(r,p))
w=4
break
case 7:s=t.a
r=s.e
if(r==null){w=1
break}s.d3(new C.eqv(r))
s=s.c.I(x.q).f
s.S(B.b2(null,null,null,null,null,A.r,null,B.d(r.ay?"Video motion on \u2014 press Play to watch it like a video.":"Video motion off.",null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
w=4
break
case 8:s=t.a
r=s.e
if(r==null){w=1
break}s.d3(new C.eqw(r))
s=s.c.I(x.q).f
s.S(B.b2(null,null,null,null,null,A.r,null,B.d(r.ch?"Non-stop on \u2014 the show starts over after the last slide.":"Non-stop off \u2014 the show stops on the last slide.",null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
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
return B.b(C.hlY(q,new C.Ee(o,n,m,l==null?"":l)),$async$$1)
case 12:p=f
if(p==null||s.c==null){w=1
break}s.d3(new C.eqx(r,p))
s=s.c.I(x.q).f
q=p.a
if(q.length===0)q="No ending celebration."
else{q=C.agv(q)
q=B.t(q==null?null:q.b)+" will play after your last slide."}s.S(B.b2(null,null,null,null,null,A.r,null,B.d(q,null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
w=4
break
case 4:case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:93}
C.eqt.prototype={
$1(d){var w,v,u,t,s,r=null,q=B.a([D.e6l],x.p)
for(w=[3,5,8,10,15,20,30,60],v=this.a,u=0;u<8;++u){t=w[u]
s=v.e===t?D.bJe:r
q.push(B.dL(!1,r,r,r,!0,r,r,r,!0,r,r,r,r,r,r,new C.eqs(d,t),!1,r,r,r,r,r,r,r,new B.x(""+t+" seconds",r,A.dm,r,r,r,r,r,r,r,r,r),r,s,r))}return B.bl(!0,B.v(q,A.m,r,A.e,A.Q,0,A.p),!0,!1,A.af,!0,!0)},
$S:26}
C.eqs.prototype={
$0(){B.a5(this.a,!1).O(this.b)
return null},
$S:0}
C.equ.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eqv.prototype={
$0(){var w=this.a
return w.ay=!w.ay},
$S:0}
C.eqw.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
C.eqx.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.db=u.length===0?null:u
w.dx=v.b
w.dy=v.c
v=v.d
w.fr=v.length===0?null:v},
$S:0}
C.eqA.prototype={
$1(d){var w,v,u,t=null,s=this.a.e,r=s==null,q=r?t:s.e,p=x.N
q=B.zs(B.d("Timer: "+(q==null?5:q)+"s",t,t,t,t,t,t,t,t,t,t),48,"timer",p)
w=r?t:s.ay
v=B.zs(B.d("Video motion: "+(w===!0?"On":"Off"),t,t,t,t,t,t,t,t,t,t),48,"motion",p)
w=r?t:s.ch
u=B.zs(B.d("Non-stop loop: "+(w===!0?"On":"Off"),t,t,t,t,t,t,t,t,t,t),48,"loop",p)
s=C.agv(r?t:s.db)
s=s==null?t:s.b
return B.a([D.ebm,q,v,u,B.zs(B.d("Ending celebration: "+(s==null?"None":s),t,t,t,t,t,t,t,t,t,t),48,"finale",p)],x.gx)},
$S:139}
C.euQ.prototype={
$0(){var w=this.a,v=w.e
if(v!=null){w=w.c
w.toString
C.bC4(w,v)}},
$S:0}
C.euR.prototype={
$0(){this.a.Dm()
return null},
$S:0}
C.erQ.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.z===d,r=B.m(999),q=s?D.bTm:u
if(s)w=u
else w=this.b?A.c.j(0.05):A.bL
if(s)v=A.c
else v=this.b?A.aR:A.bv
return new B.D(A.fy,B.aE(u,B.dj(u,B.d(d,u,u,u,u,u,u,B.l(u,u,v,u,u,u,u,u,u,u,u,12,u,u,A.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,A.bc,new B.o(w,u,u,r,u,q,A.n),A.eE,u,u,u,A.lJ,u,u,u),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.erP(t,d),u,u,u,u,u,u,!1,A.a8),u)},
$S:142}
C.erP.prototype={
$0(){var w=this.a
return w.m(new C.erO(w,this.b))},
$S:0}
C.erO.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.erR.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.e
if(s==null)s=u
else{s=s.CW
s=(s==null?"":s).length!==0}w=s===!0
v=w?G.a2s:E.avU
s=w?"Tell the AI what to change or add":"Type it \u2014 AI creates the slides"
t=w?t.gbLq():t.gbHr()
return B.hq(B.aE(u,B.p(u,D.am0,A.f,u,u,new B.o(u,u,u,u,B.a([new B.ac(0,A.G,A.d.gL(v).j(0.45),A.J,10)],x.V),new B.a8(A.a3,A.a7,A.x,v,u,u),A.a6),u,34,u,u,u,u,u,34),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,t,u,u,u,u,u,u,!1,A.a8),u,s,u,u)},
$S:1704}
C.erS.prototype={
$0(){var w=this.a,v=w.c
v.toString
return C.i6A(v,w.a.c)},
$S:0}
C.ete.prototype={
$0(){return this.b.v2(this.a.a)},
$S:0}
C.etf.prototype={
$0(){return this.a.v2(D.mB)},
$S:0}
C.etg.prototype={
$0(){return this.a.v2(D.HE)},
$S:0}
C.etr.prototype={
$0(){return this.a.v2(D.HF)},
$S:0}
C.etC.prototype={
$0(){return this.a.v2(D.HD)},
$S:0}
C.etN.prototype={
$0(){return this.a.q3("lab_report")},
$S:0}
C.etU.prototype={
$0(){return this.a.q3("rubric")},
$S:0}
C.etV.prototype={
$0(){return this.a.q3("minutes")},
$S:0}
C.etW.prototype={
$0(){return this.a.q3("agenda")},
$S:0}
C.etX.prototype={
$0(){return this.a.q3("timeline")},
$S:0}
C.etY.prototype={
$0(){return this.a.q3(this.b.a)},
$S:0}
C.eth.prototype={
$0(){this.a.Vj()
return null},
$S:0}
C.eti.prototype={
$0(){this.a.Vd()
return null},
$S:0}
C.etj.prototype={
$0(){return this.a.q3("table")},
$S:0}
C.etk.prototype={
$0(){return this.a.q3("sticky")},
$S:0}
C.etl.prototype={
$0(){return this.a.q3("divider")},
$S:0}
C.etm.prototype={
$0(){return this.a.q3("header_bar")},
$S:0}
C.etn.prototype={
$0(){return this.a.oX(D.be)},
$S:0}
C.eto.prototype={
$0(){return this.a.oX(D.eJ)},
$S:0}
C.etp.prototype={
$0(){return this.a.oX(D.jF)},
$S:0}
C.etq.prototype={
$0(){return this.a.oX(D.Cy)},
$S:0}
C.ets.prototype={
$0(){return this.a.oX(D.jG)},
$S:0}
C.ett.prototype={
$0(){return this.a.oX(D.kY)},
$S:0}
C.etu.prototype={
$0(){return this.a.oX(D.fr)},
$S:0}
C.etv.prototype={
$0(){this.a.H1()
return null},
$S:0}
C.etw.prototype={
$0(){this.a.N_()
return null},
$S:0}
C.etx.prototype={
$0(){return this.a.q3("quote")},
$S:0}
C.ety.prototype={
$0(){return this.a.a7B()},
$S:0}
C.etz.prototype={
$0(){this.a.a_c()
return null},
$S:0}
C.etA.prototype={
$0(){var w=this.a
return w.m(new C.et4(w))},
$S:0}
C.et4.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.etB.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return B.b(s.o2(),$async$$0)
case 3:if(!e){w=1
break}if(s.c==null){w=1
break}s.m(new C.etc(s))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.etc.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.etD.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=r.e
q=q==null?s:q.c
w=d.a
v=q===w&&r.jN()==null&&!r.Q
q=A.a.i(w)
w=d.b
if(D.a67.t(0,q))w+=" (Pro)"
u=d.r
if(u==null)u=d.c
u=B.a([d.f,u],x.O)
t=v?d.c:A.b2
u=B.a([B.p(s,s,A.f,s,s,new B.o(s,s,B.I(t,A.q,v?2.5:1),s,s,new B.a8(A.a3,A.a7,A.x,u,s,s),A.a6),s,26,s,s,s,s,s,26)],x.p)
if(D.a67.t(0,q))u.push(B.ao(s,B.p(s,D.NF,A.f,s,s,D.DO,s,12,s,s,s,s,s,12),s,s,s,-2,-2,s))
return new B.D(A.fy,B.aE(s,B.hq(new B.an(A.W,s,A.aa,A.f,u,s),s,w,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.etb(r,d),s,s,s,s,s,s,!1,A.a8),s)},
$S:z+89}
C.etb.prototype={
$0(){this.a.a7T(this.b)
return null},
$S:0}
C.etE.prototype={
$0(){this.a.a7S(this.b)
return null},
$S:0}
C.etF.prototype={
$1(d){var w,v,u,t,s,r=null,q=C.hDn(d),p=this.a,o=B.m(8),n=p.gdr()
n=n==null?r:n.x
w=d.a
n=n===w?A.bj:A.b2
v=p.gdr()
n=B.I(n,A.q,(v==null?r:v.x)===w?2.5:1)
u=B.m(8)
t=B.m(7)
s=C.ro(4294967295,r,0,0,r,"preview_"+w,D.q5,"","","",D.dd)
C.hiW(s,w)
w=x.p
u=B.a([B.bw(o,B.p(r,B.bw(t,C.hkf(s),A.aq),A.f,r,r,new B.o(r,r,n,u,r,r,A.n),r,44,r,r,r,r,r,72),A.aq)],w)
if(q)u.push(B.ao(r,B.p(r,D.amA,A.f,r,r,D.DO,r,14,r,r,r,r,r,14),r,r,r,2,2,r))
return new B.D(A.iU,B.aE(r,B.v(B.a([new B.an(A.W,r,A.aa,A.r,u,r),A.cS,B.d(d.b,r,r,r,r,r,r,B.l(r,r,this.b?A.az:A.ak,r,r,r,r,r,r,r,r,9,r,r,A.P,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],w),A.m,r,A.e,A.j,0,A.p),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.eta(p,q,d),r,r,r,r,r,r,!1,A.a8),r)},
$S:z+90}
C.eta.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.gdr()
if(r==null){w=1
break}q=t.b||s.Q
if(q){w=3
break}else e=q
w=4
break
case 3:w=5
return B.b(s.o2(),$async$$0)
case 5:e=!e
case 4:if(e){w=1
break}if(s.c==null){w=1
break}s.d3(new C.et0(r,t.c))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.et0.prototype={
$0(){return C.hiW(this.a,this.b.a)},
$S:0}
C.etd.prototype={
bjg(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$$2=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=!D.a66.t(0,d)
if(s){w=3
break}else g=s
w=4
break
case 3:w=5
return B.b(t.a.o2(),$async$$2)
case 5:g=!g
case 4:if(g){w=1
break}if(t.a.c==null){w=1
break}e.$0()
case 1:return B.h(u,v)}})
return B.i($async$$2,v)},
$2(d,e){return this.bjg(d,e)},
$S:z+91}
C.etZ.prototype={
$4(d,e,f,g){var w=null,v=B.U(d).k("K<1,r>")
v=B.B(new B.K(d,new C.eu0(this.a,e,g,this.b,f),v),v.k("ak.E"))
return B.cd(B.A(v,A.m,w,A.e,A.j,0,w,w),A.r,w,A.y,w,w,w,w,A.aO)},
$S:z+92}
C.eu0.prototype={
$1(d){var w=this
return w.a.b6A(d,w.b===d,w.c,w.d,new C.eu_(w.e,d),!D.a66.t(0,d))},
$S:z+25}
C.eu_.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.etG.prototype={
$1(d){this.b.$2(d,new C.et9(this.a,d,this.c))
return null},
$S:z+26}
C.et9.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.bCV(u,new C.et_(v,this.c,w),w)},
$S:0}
C.et_.prototype={
$0(){return this.a.d3(new C.esY(this.b,this.c))},
$S:0}
C.esY.prototype={
$0(){return this.a.dy=this.b},
$S:0}
C.etH.prototype={
$1(d){this.b.$2(d,new C.et8(this.a,d))
return null},
$S:z+26}
C.et8.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.fMZ(u,new C.esZ(v,w),w)},
$S:0}
C.esZ.prototype={
$0(){var w=this.a
return w.d3(new C.esX(w,this.b))},
$S:0}
C.esX.prototype={
$0(){return this.a.gdr().r=this.b},
$S:0}
C.etI.prototype={
$0(){var w=this.a
return w.m(new C.et7(w))},
$S:0}
C.et7.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
C.etJ.prototype={
$0(){var w=this.a,v=w.e
if(v!=null){w=w.c
w.toString
C.bC4(w,v)}},
$S:0}
C.etK.prototype={
$0(){this.a.HO()
return null},
$S:0}
C.etL.prototype={
$0(){return this.a.a7B()},
$S:0}
C.etM.prototype={
$0(){var w=this.a,v=w.jN()
if(v!=null&&v.b===D.cQ)w.d3(new C.et6(v))},
$S:0}
C.et6.prototype={
$0(){var w=this.a
w.f=A.k.D(w.f*1.25,0.08,1.8)
w.e=A.k.D(w.e*1.1,0.08,1.8)},
$S:0}
C.etO.prototype={
$0(){this.a.Dm()
return null},
$S:0}
C.etP.prototype={
$0(){var w=this.a,v=w.e
v.toString
w.F0(v,!0)
return null},
$S:0}
C.etQ.prototype={
$0(){this.a.d3(new C.et5(this.b))},
$S:0}
C.et5.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.P)?A.cv:A.P},
$S:0}
C.etR.prototype={
$0(){this.a.d3(new C.et3(this.b))},
$S:0}
C.et3.prototype={
$0(){var w=this.a
return w.y=w.y===A.cF?A.bl:A.cF},
$S:0}
C.etS.prototype={
$0(){this.a.d3(new C.et2(this.b))},
$S:0}
C.et2.prototype={
$0(){var w=this.a,v=w.z
return w.z=1===v.a?A.aD:A.mH},
$S:0}
C.etT.prototype={
$0(){this.a.d3(new C.et1(this.b))},
$S:0}
C.et1.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
C.epD.prototype={
$1(d){return this.bjd(d)},
bjd(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.b
if(r){w=3
break}else f=r
w=4
break
case 3:w=5
return B.b(t.a.o2(),$async$$1)
case 5:f=!f
case 4:if(f){w=1
break}s=t.a
if(s.c==null){w=1
break}s.d3(new C.epC(s,t.c))
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:183}
C.epC.prototype={
$0(){return this.a.e.d=this.b},
$S:0}
C.eul.prototype={
$0(){var w=this.a
return w.d3(new C.euk(w,this.b))},
$S:0}
C.euk.prototype={
$0(){var w,v=this.b,u=v.w
if(!(u>0)){w=this.a.e
w=w==null?null:w.e
u=w==null?5:w}v.w=A.o.D(u-1,1,120)},
$S:0}
C.eum.prototype={
$0(){var w=this.a
return w.d3(new C.euj(w,this.b))},
$S:0}
C.euj.prototype={
$0(){var w,v=this.b,u=v.w
if(!(u>0)){w=this.a.e
w=w==null?null:w.e
u=w==null?5:w}v.w=A.o.D(u+1,1,120)},
$S:0}
C.eqL.prototype={
$0(){return this.a.d3(new C.eqK(this.b))},
$S:0}
C.eqK.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w-2,10,96)},
$S:0}
C.eqM.prototype={
$0(){return this.a.d3(new C.eqJ(this.b))},
$S:0}
C.eqJ.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w+2,10,96)},
$S:0}
C.eri.prototype={
$1(d){var w=x.gh
w=B.B(new B.K(D.aog,new C.erh(),w),w.k("ak.E"))
return w},
$S:z+94}
C.erh.prototype={
$1(d){var w=null
return B.zs(B.d(d.b,w,w,w,w,w,w,A.mJ,w,w,w),48,d,x.fO)},
$S:z+95}
C.euy.prototype={
$2(d,e){var w=this.a,v=w?0:8
return new B.a7(v,w?8:0,null,null)},
$S:36}
C.eux.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=null,p=r.a,o=e===p.f,n=p.kb()?q:new C.euv(p,r.b,d,e),m=r.c,l=m?1/0:112
m=m?72:64
w=B.m(8)
if(o)v=A.bj
else v=r.d?A.b2:A.cq
v=B.I(v,A.q,o?2:1)
u=r.d?A.cD:A.c
t=B.bZ(0,C.hkf(r.b.r[e]),0,0,0)
s=B.m(4)
return B.aE(q,B.p(q,new B.an(A.W,q,A.aa,A.r,B.a([t,B.ao(4,B.p(q,B.d(""+(e+1),q,q,q,q,q,q,A.nr,q,q,q),A.f,q,q,new B.o(A.aX,q,q,s,q,q,A.n),q,q,q,q,A.ai2,q,q,q),q,q,4,q,q,q)],x.p),q),A.f,q,q,new B.o(u,q,v,w,q,q,A.n),q,m,q,q,q,q,q,l),A.y,!1,q,q,q,q,q,q,q,q,n,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.euw(p,e),q,q,q,q,q,q,!1,A.a8)},
$S:75}
C.euw.prototype={
$0(){var w=this.a
return w.m(new C.eur(w,this.b))},
$S:0}
C.eur.prototype={
$0(){var w=this.a
w.f=this.b
w.r=null
w.JP()},
$S:0}
C.euv.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.b
if(q.r.length<=1){w=1
break}s=t.d
w=3
return B.b(B.bR(null,null,new C.eus(s,q),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:r=e
if(r==="dup"){q=t.a
q.m(new C.eut(q,s))
q.aQJ()}else if(r==="del"){q=t.a
q.m(new C.euu(q,s))
q.aPS()}else if(r==="up")t.a.b1Q(s,s-1)
else if(r==="down")t.a.b1Q(s,s+1)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eus.prototype={
$1(d){var w=null,v=B.a([B.dL(!1,w,w,w,!0,w,w,w,!0,w,D.bKS,w,w,w,w,new C.eun(d),!1,w,w,w,w,w,w,w,D.fbI,w,w,w),B.dL(!1,w,w,w,!0,w,w,w,!0,w,D.bKL,w,w,w,w,new C.euo(d),!1,w,w,w,w,w,w,w,A.wj,w,w,w)],x.p),u=this.a
if(u>0)v.push(B.dL(!1,w,w,w,!0,w,w,w,!0,w,D.bK2,w,w,w,w,new C.eup(d),!1,w,w,w,w,w,w,w,D.fjF,w,w,w))
if(u<this.b.r.length-1)v.push(B.dL(!1,w,w,w,!0,w,w,w,!0,w,D.bM4,w,w,w,w,new C.euq(d),!1,w,w,w,w,w,w,w,D.fbx,w,w,w))
return B.bl(!0,B.v(v,A.m,w,A.e,A.Q,0,A.p),!0,!1,A.af,!0,!0)},
$S:26}
C.eun.prototype={
$0(){B.a5(this.a,!1).O("dup")
return null},
$S:0}
C.euo.prototype={
$0(){B.a5(this.a,!1).O("del")
return null},
$S:0}
C.eup.prototype={
$0(){B.a5(this.a,!1).O("up")
return null},
$S:0}
C.euq.prototype={
$0(){B.a5(this.a,!1).O("down")
return null},
$S:0}
C.eut.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.euu.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.euz.prototype={
$0(){return this.a.a7B()},
$S:0}
C.eq2.prototype={
$0(){var w=this.a
w.b5e()
w.ayV(null)},
$S:0}
C.eq1.prototype={
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
s=B.a([B.bw(s,B.c_(A.kv,new B.o(m.f==null?B.b0(m.e):p,p,p,p,p,r,A.n),A.bd),A.aq)],x.p)
r=m.z
q=this.c
A.d.v(s,new B.K(r,new C.eq0(this.a,e.b,e.d,q),B.U(r).k("K<1,r>")))
if(m.z.length===0)s.push(B.av(B.d("Use Insert \u2192 Text Box, Picture, or Shapes",p,p,p,p,p,p,B.l(p,p,q?A.az:A.bJ,p,p,p,p,p,p,p,p,p,p,p,A.a5,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p))
return B.c_(new B.an(A.W,p,A.aa,A.f,s,new B.cx("canvas_"+m.a+"_"+u+"_"+t,x.W)),new B.o(v,p,p,o,n,w,A.n),A.bd)},
$S:432}
C.eq0.prototype={
$1(d){var w=this
return w.a.bDn(d,w.b,w.c,w.d)},
$S:z+23}
C.epQ.prototype={
$0(){var w=this
if(w.b){w.a.N8(w.c)
return}if(w.d){w.a.a7z(w.c)
return}if(w.e){w.a.afX(w.c)
return}if(w.f)w.a.b5K(w.c)},
$S:0}
C.epR.prototype={
$0(){this.a.N8(this.b)
return null},
$S:0}
C.epS.prototype={
$0(){return this.a.a1z(this.b.a)},
$S:0}
C.epT.prototype={
$1(d){var w=this,v=w.a,u=w.b
if(v.w===u.a)return
v.m(new C.epP(u,d,w.c,w.d))
v.Ht()
v.oc()
v.pg()},
$S:18}
C.epP.prototype={
$0(){var w=this,v=w.a,u=w.b.d
v.c=A.k.D(v.c+u.a/w.c,-0.3,1.2)
v.d=A.k.D(v.d+u.b/w.d,-0.3,1.2)},
$S:0}
C.epU.prototype={
$1(d){return this.a.aiq(this.b.a,d)},
$S:2}
C.epW.prototype={
$0(){var w,v,u=this
if(u.b){w=u.c
if(!C.fYR(w))u.a.N8(w)
return}if(!u.d)return
w=u.a
v=u.c
if(w.w===v.a)return
w.b5K(v)},
$S:0}
C.epV.prototype={
$0(){return this.a.a1z(this.b.a)},
$S:0}
C.epX.prototype={
$1(d){var w=this,v=w.a
v.m(new C.epO(w.b,d,w.c,w.d))
v.Ht()
v.oc()
v.pg()},
$S:18}
C.epO.prototype={
$0(){var w=this,v=w.a,u=w.b.d
v.e=A.k.D(v.e+u.a/w.c,0.04,1.8)
u=u.b
v.f=A.k.D(v.f+u/w.d,0.04,1.8)
if(v.b===D.cQ)v.w=A.k.D(v.w+u*0.15,10,120)},
$S:0}
C.epY.prototype={
$1(d){var w=this.a
w.m(new C.epN(this.b,d))
w.Ht()
w.oc()
w.pg()},
$S:227}
C.epN.prototype={
$0(){var w=this.a,v=this.b.d
w.e=A.k.D(w.e*v,0.04,1.8)
w.f=A.k.D(w.f*v,0.04,1.8)
if(w.b===D.cQ)w.w=A.k.D(w.w*v,10,120)},
$S:0}
C.epZ.prototype={
$0(){var w=this.a
w.m(new C.epM(this.b))
w.Ht()
w.oc()
w.pg()},
$S:0}
C.epM.prototype={
$0(){this.a.r=C.hjL()},
$S:0}
C.eq_.prototype={
$0(){return this.a.a1z(this.b.a)},
$S:0}
C.erU.prototype={
$0(){var w=this.a
return w.m(new C.erT(w))},
$S:0}
C.erT.prototype={
$0(){return this.a.y=!1},
$S:0}
C.erV.prototype={
$1(d){return this.a.cAj(this.b.a,d)},
$S:2}
C.eqZ.prototype={
$1(d){var w
this.a.d3(d)
w=this.b
if(w!=null)w.$0()},
$S:169}
C.er_.prototype={
$1(d){return this.a.$1(new C.eqY(this.b,d))},
$S:6}
C.eqY.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.er0.prototype={
$1(d){return this.a.$1(new C.eqX(this.b,d))},
$S:6}
C.eqX.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.er1.prototype={
$1(d){return this.a.$1(new C.eqW(this.b,d))},
$S:6}
C.eqW.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.er2.prototype={
$1(d){return this.a.$1(new C.eqV(this.b,d))},
$S:6}
C.eqV.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.er3.prototype={
$1(d){return this.a.$1(new C.eqU(this.b,d))},
$S:6}
C.eqU.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.er4.prototype={
$1(d){return this.b.$1(new C.eqT(this.a,this.c))},
$S:9}
C.eqT.prototype={
$0(){return this.b.go=this.a.a},
$S:0}
C.er5.prototype={
$1(d){return this.b.$1(new C.eqS(this.a,this.c))},
$S:9}
C.eqS.prototype={
$0(){return this.b.id=this.a.a},
$S:0}
C.er6.prototype={
$1(d){var w=null,v=this.b,u=B.b0(d),t=v.Q===d,s=t?A.bj:A.cV
return B.aE(w,B.p(w,w,A.f,w,w,new B.o(u,w,B.I(s,A.q,t?2:1),w,w,w,A.a6),w,24,w,w,w,w,w,24),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eqR(this.a,v,d),w,w,w,w,w,w,!1,A.a8)},
$S:427}
C.eqR.prototype={
$0(){return this.a.$1(new C.eqO(this.b,this.c))},
$S:0}
C.eqO.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.er7.prototype={
$1(d){return this.a.$1(new C.eqQ(this.b,d))},
$S:1705}
C.eqQ.prototype={
$0(){var w=this.b
return this.a.as=w.gL(w)},
$S:0}
C.er8.prototype={
$1(d){var w=null
return B.aE(w,B.p(w,w,A.f,w,w,new B.o(B.b0(d),w,w,w,w,w,A.a6),w,22,w,w,w,w,w,22),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eqP(this.a,this.b,d),w,w,w,w,w,w,!1,A.a8)},
$S:427}
C.eqP.prototype={
$0(){return this.a.$1(new C.eqN(this.b,this.c))},
$S:0}
C.eqN.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.er9.prototype={
$0(){var w,v=this
if(v.b){w=v.a.c
w.toString
w=B.a5(w,!1).pv()}else w=!1
if(w){w=v.a.c
w.toString
B.a5(w,!1).eK()}v.a.ary()},
$S:0}
C.erc.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.fy
m===$&&B.c()
m=m.x
m===$&&B.c()
w=A.dC.aw(0,m)
m=B.m(16)
v=B.m(16)
u=o.c
t=B.aq(u,A.b3,0.35+w*0.15)
t.toString
t=B.a([u,t],x.O)
s=B.I(A.c.j(0.3+w*0.2),A.q,1.2)
r=B.a([B.X(o.d,A.c,n,n,n,26)],x.p)
q=B.m(6)
p=B.I(u,A.q,1.2)
r.push(B.ao(2,B.p(n,B.X(A.tY,u,n,n,n,10),A.f,n,n,new B.o(A.c,n,p,q,n,n,A.n),n,n,n,n,A.nb,n,n,n),n,n,n,2,n,n))
return B.aG(!1,A.a1,!0,n,B.aL(!1,m,!0,B.eE(new B.a7(48,48,new B.an(A.A,n,A.aa,A.r,r,n),n),n,new B.o(n,n,s,v,n,new B.a8(A.ax,A.aC,A.x,t,n,n),A.n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.b,n,n,n,n,n,n,n),A.f,A.K,0,n,A.K,n,n,n,A.ag)},
$S:140}
C.eoM.prototype={
$2(d,e){var w,v,u,t,s,r,q=this,p=null,o=q.a.fy
o===$&&B.c()
o=o.x
o===$&&B.c()
w=A.dC.aw(0,o)
o=B.m(22)
v=B.m(22)
u=q.c
t=B.aq(u,A.b3,0.22+w*0.12)
t.toString
u=B.a([u,t,u.j(0.9)],x.O)
t=B.I(A.c.j(0.28+w*0.22),A.q,1.35)
s=A.c.j(0.14+w*0.08)
r=B.I(A.c.j(0.4+w*0.15),A.q,1)
return B.aG(!1,A.a1,!0,p,B.aL(!1,o,!0,B.eE(B.v(B.a([B.ec(A.A,B.p(p,B.X(q.d,A.c,p,p,p,26),A.f,p,p,new B.o(s,p,r,p,p,p,A.a6),p,48,p,p,p,p,p,48),1+w*0.06,p,p),A.ac,B.d(q.e,p,p,p,p,p,p,A.j2,A.L,p,p)],x.p),A.m,p,A.bb,A.j,0,A.p),p,new B.o(p,p,t,v,p,new B.a8(A.ax,A.aC,A.x,u,p,p),A.n),p,A.Fb,1/0),p,!0,p,p,p,p,p,p,p,p,p,p,p,q.b,p,p,p,p,p,p,p),A.f,A.K,0,p,A.K,p,p,p,A.ag)},
$S:140}
C.esR.prototype={
$1(d){var w=null,v=B.d(this.a,w,w,w,w,w,w,w,w,w,w),u=this.b,t=B.aM(w,A.T,!0,w,!0,A.r,w,B.aN(),u,w,w,w,w,w,2,A.anq,A.y,!0,w,!0,w,!1,w,A.ai,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,A.a9,w,w,w,w,w,w,w,w,w,w,w,w,!0,A.a4,w,A.am,w,w,w,w)
return B.ek(B.a([B.bK(!1,A.de,w,w,!0,w,w,new C.esP(d),w,w),B.bH(A.pa,new C.esQ(d,u),w)],x.p),w,w,w,t,w,w,w,w,v,w)},
$S:20}
C.esP.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.esQ.prototype={
$0(){var w=this.b.a.a
B.a5(this.a,!1).O(w)
return null},
$S:0}
C.d_H.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.a,i=j.d
i===$&&B.c()
i=i.x
i===$&&B.c()
w=A.dC.aw(0,i)
i=j.e
i===$&&B.c()
v=i.x
v===$&&B.c()
u=A.ev.aw(0,A.k.D(v,0,1))
i=i.x
i===$&&B.c()
i=A.dU.aw(0,i)
v=B.m(22)
t=B.aq(A.aK,A.d.gL(C.ku(j.a.c.w)?D.u5:M.nj),w*0.35)
t.toString
t=B.I(t,A.q,1.2)
s=x.V
r=B.a([new B.ac(w*2,A.G,A.d.gL(C.ku(j.a.c.w)?D.u5:M.nj).j(0.18+w*0.12),A.J,32+w*10),D.aav],s)
q=B.m(22)
p=x.O
o=B.ao(k,B.p(k,k,A.f,k,k,new B.o(k,k,k,k,k,new B.bT(A.b_,0.9,A.x,k,0,B.a([A.d.gL(C.ku(j.a.c.w)?D.u5:M.nj).j(0.22+w*0.1),A.K],p),k,k),A.n),k,80,k,k,k,k,k,k),k,k,0,0,-28,k)
n=64+w*6
m=A.d.gL(C.ku(j.a.c.w)?D.u5:M.nj).j(0.28+w*0.14)
p=B.p(k,k,A.f,k,k,new B.o(k,k,k,k,k,new B.bT(A.A,0.5,A.x,k,0,B.a([m,A.d.gal(C.ku(j.a.c.w)?D.u5:M.nj).j(0.08),A.K],p),k,k),A.a6),k,n,k,k,k,k,k,n)
n=B.m(14)
m=j.a.c.w
l=C.ku(m)?D.u5:M.nj
s=B.a([new B.ac(0,A.G,A.d.gL(C.ku(m)?D.u5:M.nj).j(0.45+w*0.2),A.cx,18)],s)
m=x.p
l=B.a([p,B.ec(A.A,B.p(k,B.X(C.ku(j.a.c.w)?A.vz:A.pU,A.c,k,k,k,22),A.f,k,k,new B.o(k,k,k,n,s,new B.a8(A.ax,A.aC,A.x,l,k,k),A.n),k,46,k,k,k,k,k,46),1+w*0.04,k,k)],m)
s=B.a([new B.an(A.A,k,A.aa,A.r,l,k),A.S,B.d("PRESENTATION",k,k,k,k,k,k,B.l(k,k,A.d.gL(C.ku(j.a.c.w)?D.u5:M.nj).j(0.85+w*0.15),k,k,k,k,k,k,k,k,10,k,k,A.H,k,k,!0,k,1.4,k,k,k,k,k,k),A.L,k,k),A.h0,B.d(j.a.c.b,k,2,A.a2,k,k,k,D.f3Z,A.L,k,k),A.at,B.d(j.gcvl(),k,k,k,k,k,k,D.f8t,A.L,k,k),A.aA],m)
p=j.a.c
if(p.z){p=p.gRS()?"Shared by admin \xb7 editable for 4 hours":"Received copy \xb7 print or download only"
A.d.v(s,B.a([B.d(p,k,k,k,k,k,k,B.l(k,k,A.d.gL(C.ku(j.a.c.w)?D.u5:M.nj).j(0.9),k,k,k,k,k,k,k,k,11,k,k,A.P,k,k,!0,k,k,k,k,k,k,k,k),A.L,k,k),A.ac],m))}s.push(new C.Jr(A.xW,"Download PDF","pdf",A.d6,j.II(0),!1,k))
p=j.a.c
if(!p.z||p.gRS()){p=j.a.c.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"}else p=!1
if(p){p=j.a.c.w
A.d.v(s,B.a([A.an,new C.Jr(A.kS,"Transfer to "+C.hjN(p==null?"":p),"transfer_hati",A.aV,j.II(1),!1,k)],m))}p=j.a.c
if(!p.z){p=p.w
n=j.II(p==="hati_kuhowa"||p==="hati_kuhoweya"?2:1)
p=j.a.c.w
A.d.v(s,B.a([A.an,new C.Jr(D.bCv,"Rename presentation","rename",A.cd,n,!1,k),A.an,new C.Jr(A.ajH,"Duplicate","duplicate",A.b7,j.II(p==="hati_kuhowa"||p==="hati_kuhoweya"?3:2),!1,k)],m))}s.push(A.N)
p=j.a.c
if(p.z)p=1
else{p=p.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"?4:3}s.push(new C.Jr(A.e5,"Delete presentation","delete",A.ay,j.II(p),!0,k))
s.push(A.at)
p=j.a.c
if(p.z)p=2
else{p=p.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"?5:4}p=j.II(p)
n=j.a.c
if(n.z)n=2
else{n=n.w
n=n==="hati_kuhowa"||n==="hati_kuhoweya"?5:4}n=j.II(n)
s.push(B.dU(B.dc(B.bK(!1,E.aQg,k,k,!0,k,k,new C.d_G(d),k,B.fv(k,k,k,k,k,k,k,k,k,k,k,A.bJ,k,k,k,A.au,k,D.bsV,k,k,k,k,k,A.k0,k,k)),n),new B.u(0,(1-p)*8)))
return B.ec(A.A,B.dc(B.aG(!1,A.a1,!0,k,B.p(k,B.bw(q,new B.an(A.W,k,A.aa,A.r,B.a([o,new B.D(D.bs3,B.v(s,A.m,k,A.e,A.Q,0,A.p),k)],m),k),A.aq),A.f,k,A.V2,new B.o(A.aB,k,t,v,r,k,A.n),k,k,k,k,k,k,k,k),A.f,A.K,0,k,k,k,k,k,A.ag),i),0.88+u*0.12,k,k)},
$S:45}
C.d_G.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.d02.prototype={
$0(){B.a5(this.a,!1).O(!1)
return null},
$S:0}
C.d03.prototype={
$0(){B.a5(this.a,!1).O(!0)
return null},
$S:0}
C.d_E.prototype={
$1(d){var w=this.a
return w.m(new C.d_A(w))},
$S:22}
C.d_A.prototype={
$0(){return this.a.d=!0},
$S:0}
C.d_F.prototype={
$1(d){var w=this.a
return w.m(new C.d_z(w))},
$S:50}
C.d_z.prototype={
$0(){return this.a.d=!1},
$S:0}
C.d_D.prototype={
$0(){var w=this.a
return w.m(new C.d_B(w))},
$S:0}
C.d_B.prototype={
$0(){return this.a.d=!1},
$S:0}
C.d_C.prototype={
$0(){var w=this.a.a.e
B.a5(this.b,!1).O(w)
return null},
$S:0}
C.evw.prototype={
$0(){return $.bjJ=!$.bjJ},
$S:0}
C.evm.prototype={
$0(){var w,v,u=this.a
if(u.c==null||!u.r)return
w=u.d
w===$&&B.c()
v=u.a.c
if(w<v.r.length-1||v.ch||u.gaTR())u.avo()},
$S:0}
C.evv.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.evn.prototype={
$0(){return this.a.y=!0},
$S:0}
C.evo.prototype={
$0(){var w=this.a
if(w.c!=null&&w.y)w.avo()},
$S:0}
C.evi.prototype={
$0(){var w=this.a
w.y=!1
w.e=A.d.gL(w.a.c.r).r
w.d=0},
$S:0}
C.evj.prototype={
$0(){var w=this.a,v=this.b
w.e=w.a.c.r[v].r
w.d=v},
$S:0}
C.evk.prototype={
$0(){return this.a.y=!1},
$S:0}
C.evl.prototype={
$0(){var w,v,u=this.a
u.e=u.a.c.r[this.b].r
w=u.d
w===$&&B.c()
v=this.c
u.d=A.o.F(w-1+v,v)},
$S:0}
C.evt.prototype={
$2(d,e){var w=B.B(e,x.l)
if(d!=null)w.push(d)
return new B.an(A.A,null,A.b0,A.r,w,null)},
$S:1706}
C.evu.prototype={
$2(d,e){var w
if(e.gc3(e)===A.hS)return new B.cZ(e,!1,d,null)
w=this.a
return w.ctl(w.e,d,e)},
$S:437}
C.evp.prototype={
$2(d,e){var w=B.dp(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
v=this.a
w.fA((1-v.gp(0))*1.5708)
return B.fs(A.A,B.dc(e,v.gp(0)),null,w,!0)},
$S:45}
C.evq.prototype={
$2(d,e){var w=B.dp(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
v=this.a
w.jX((1-v.gp(0))*1.5708)
return B.fs(A.A,B.dc(e,v.gp(0)),null,w,!0)},
$S:45}
C.evr.prototype={
$2(d,e){var w=B.dp(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.002
v=this.a
w.fA(v.gp(0)*0.8)
w.jX(v.gp(0)*0.35)
return B.fs(A.A,B.dc(e,v.gp(0)),null,w,!0)},
$S:45}
C.evs.prototype={
$2(d,e){var w=B.dp(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.0025
v=this.a
w.fA(-v.gp(0)*1.2)
return B.fs(A.a7,B.dc(e,v.gp(0)),null,w,!0)},
$S:45}
C.evx.prototype={
$2(d,e){var w,v=this,u=v.b,t=u==null
if(!t){w=v.a.gYn().r
w=w!=null&&w.a!=null}else w=!1
if(w){t=v.a
u=t.a.c.r[u]
t=t.gYn().x
t===$&&B.c()
return new C.b0q(u,v.c,t,null)}u=v.a.d
u===$&&B.c()
return new C.Io(v.c,t,!0,new B.cx("cine"+u,x.W))},
$S:699}
C.evz.prototype={
$1(d){var w=this.a
if(d.b.a>B.aI(this.b,A.bU,x.w).w.a.a*0.55)w.avo()
else w.chW()},
$S:50}
C.evy.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.fDo.prototype={
$4(d,e,f,g){var w=this.b
A.d.a9(w)
A.d.v(w,d)
w=this.a
w.a=e
w.b=f
w.c=g},
$S:438}
C.fDx.prototype={
$1(d){var w=null,v=this.a,u=v.r.length,t=u===1?"":"s"
t=B.d("Download a PDF that looks like your slides ("+u+" page"+t+"), or open the print view in your browser.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.75),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return B.ek(B.a([B.bK(!1,A.de,w,w,!0,w,w,new C.fDu(d),w,w),B.bK(!1,D.fqR,w,w,!0,w,w,new C.fDv(d,this.b,v),w,w),B.bH(A.aQx,new C.fDw(d,v,this.c),w)],x.p),w,w,L.th,new B.a7(320,w,t,w),w,w,w,w,D.fsk,w)},
$S:20}
C.fDu.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.fDv.prototype={
$0(){var w=0,v=B.j(x.H),u=this
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:B.a5(u.a,!1).O(null)
C.fZv(u.b,u.c.b)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fDw.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:B.a5(u.a,!1).O(null)
t=u.b
w=2
return B.b(C.aPj(t),$async$$0)
case 2:s=e
r=u.c
w=r.e!=null?3:4
break
case 3:w=5
return B.b(C.aOI(r,s,t.b),$async$$0)
case 5:case 4:return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fDn.prototype={
$1(d){return d.a!==this.a.a},
$S:z+2}
C.cdv.prototype={
$2(d,e){var w
if(x.f.b(e)){w=J.q(e,"bundleId")
w=J.k(w==null?"":w)===this.a}else w=!1
return w},
$S:632}
C.fDt.prototype={
$1(d){return d.ag()},
$S:z+14}
C.fbz.prototype={
$1(d){return C.fZt(C.Vw(B.a1(d,x.N,x.z)),this.a)},
$S:z+96}
C.fMe.prototype={
$3(d,e,f){return A.bH},
$C:"$3",
$R:3,
$S:91}
C.fMf.prototype={
$4(d,e,f,g){var w=A.ct.aw(0,e.gp(0))
return B.dc(B.ec(A.A,D.fRt,0.94+w*0.06,null,null),w)},
$S:436}
C.fMg.prototype={
$1(d){var w=this
return new C.Vy(w.a,w.b,w.c,w.d,null)},
$S:z+97}
C.ev2.prototype={
$2(d,e){return d+e.r.length},
$S:z+13}
C.euZ.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.ev1.prototype={
$1(d){var w=this.a,v=w.a,u=v.c
v=v.f
return new C.Vz(u,this.b,w.gaNd(),v,null)},
$S:z+99}
C.ev_.prototype={
$0(){return this.a.f=!0},
$S:0}
C.ev0.prototype={
$0(){return this.a.f=!1},
$S:0}
C.ev3.prototype={
$0(){return this.a.f=!0},
$S:0}
C.ev4.prototype={
$0(){return this.a.f=!1},
$S:0}
C.ev7.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.ev8.prototype={
$0(){var w=this.a
return w.m(new C.ev6(w))},
$S:0}
C.ev6.prototype={
$0(){return this.a.d="one"},
$S:0}
C.ev9.prototype={
$0(){var w=this.a
return w.m(new C.ev5(w))},
$S:0}
C.ev5.prototype={
$0(){return this.a.d="all"},
$S:0}
C.eva.prototype={
$1(d){return this.a.bI1(d,this.b)},
$S:z+100}
C.euY.prototype={
$0(){var w=this.a
return w.m(new C.euX(w,this.b))},
$S:0}
C.euX.prototype={
$0(){return this.a.e=this.b.a},
$S:0}
C.evb.prototype={
$0(){var w=this.a,v=this.b
w.d=v.b
w.e=v.a},
$S:0}
C.evc.prototype={
$0(){return this.a.f="Could not create QR. Check your connection and try again."},
$S:0}
C.evd.prototype={
$2(d,e){return d+e.r.length},
$S:z+13}
C.eve.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.evf.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a.e
s.toString
w=3
return B.b(B.fJ(new B.fC(s)),$async$$0)
case 3:s=t.b
if(s.e==null){w=1
break}s.I(x.q).f.S(D.eRp)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eoG.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.eoF())},
$S:0}
C.eoF.prototype={
$0(){},
$S:0}
C.eoH.prototype={
$1(d){var w=this.a
if(w.c!=null)w.e.fJ()},
$S:8}
C.eoC.prototype={
$1(d){return this.a.m(new C.eoB())},
$S:2}
C.eoB.prototype={
$0(){},
$S:0}
C.eoD.prototype={
$1(d){return this.a.aYG()},
$S:2}
C.eoE.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.evh.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(t.d.pU(),$async$$0)
case 2:if(t.c!=null)t.m(new C.evg(t))
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.evg.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.fxI.prototype={
$1(d){var w=null,v=this.a,u=v.a
return B.ao(w,new B.ev(new B.kf(this.c,new C.fxH(),w,w,x.ex),this.b),v.b,w,0,w,0,u)},
$S:219}
C.fxH.prototype={
$3(d,e,f){return new C.Io(e,!1,!1,new B.cx(e.a,x.W))},
$S:z+102}
C.fxJ.prototype={
$1(d){var w=null
return B.oh(!1,B.av(new C.bue(this.a,this.b,w),w,w,w),w,x.z)},
$S:333}
C.fxN.prototype={
$0(){var w=0,v=B.j(x.cc),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.aW.gmz(),$async$$0)
case 3:w=4
return B.b(B.bN(A.n7,null,x.H),$async$$0)
case 4:w=5
return B.b($.aW.gmz(),$async$$0)
case 5:s=$.aW.ak$.x.h(0,t.a)
r=s==null?null:s.gb8()
if(!(r instanceof B.pQ))throw B.V("Could not draw the slide.")
u=r.lW(1)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1709}
C.fxO.prototype={
bjM(d){var w=0,v=B.j(x.fS),u,t,s,r
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(d.hr(A.fY),$async$$1)
case 3:r=f
if(r==null)throw B.V("Could not read the slide picture.")
t=(self.URL||self.webkitURL).createObjectURL(B.hN([J.eT(A.dD.gaM(r))],"image/png"))
t.toString
s=Am.fQk(t)
w=4
return B.b(new B.pW(s,"load",!1,x.ev).gL(0).cM(0,A.jv),$async$$1)
case 4:(self.URL||self.webkitURL).revokeObjectURL(t)
u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$1(d){return this.bjM(d)},
$S:1710}
C.fxK.prototype={
$1(d){var w,v=x.bu.a(d).data
if(v!=null){w=v.size
w.toString
w=w>0}else w=!1
if(w)this.a.push(v)},
$S:146}
C.fxL.prototype={
$1(d){var w=this.a
if((w.a.a&30)===0)w.fP(0)},
$S:146}
C.fxM.prototype={
$0(){return(self.URL||self.webkitURL).revokeObjectURL(this.a)},
$S:0}
C.f5S.prototype={
$3(d,e,f){var w=null
return B.d(e,w,w,w,w,w,w,D.f0v,A.L,w,w)},
$S:1711}
C.f5T.prototype={
$3(d,e,f){var w=null,v=B.m(99)
return B.bw(v,B.m_(A.bm,w,A.dP,8,w,e===0?w:e,w),A.aq)},
$S:646}
C.ed4.prototype={
$1(d){this.a.Zy()
return null},
$S:12}
C.ed2.prototype={
$0(){return this.a.e=D.bo7},
$S:0}
C.ed3.prototype={
$0(){var w=this.a.a
if(w.a<0)w=A.bx
return this.b.e=w},
$S:0}
C.cg3.prototype={
$1(d){return A.o.dv(1,d.a)},
$S:z+103}
C.cg4.prototype={
$2(d,e){return(d|e)>>>0},
$S:73};(function aliases(){var w=C.aLg.prototype
w.bul=w.q
w=C.aKK.prototype
w.btO=w.q
w=C.aKv.prototype
w.bty=w.q
w=C.aKJ.prototype
w.btN=w.q
w=C.aLe.prototype
w.buj=w.q
w=C.aMB.prototype
w.bvR=w.q
w=C.aJq.prototype
w.bsq=w.q
w=C.aLs.prototype
w.bux=w.q
w=C.aLt.prototype
w.buy=w.q
w=C.b25.prototype
w.bp4=w.aC1})();(function installTearOffs(){var w=a._static_0,v=a._instance_0u,u=a._instance_1u,t=a._static_1,s=a.installStaticTearOff
w(C,"i4n","an0",104)
v(C.aIp.prototype,"gc26","Yu",0)
var r
u(r=C.ax_.prototype,"gcuH","cuI",38)
v(r,"gc2S","acE",0)
v(r=C.awW.prototype,"gaXc","DP",3)
v(r,"gc2P","c2Q",3)
v(r,"gavG","xx",0)
v(r,"gavH","Il",0)
t(C,"i4O","hB7",105)
v(C.aD3.prototype,"gc5s","c5t",3)
s(C,"i4Z",0,null,["$4$paper$photo$request$template"],["fEN"],106,0)
s(C,"i4Y",0,null,["$5$doc$history$instruction$photo$template"],["bBn"],107,0)
v(r=C.aDm.prototype,"gc69","IF",0)
v(r,"gbHu","Wm",0)
v(r,"gc6c","adt",0)
v(r,"gc6b","Zk",0)
v(r,"gaYl","E6",0)
v(C.aDq.prototype,"gc6h","Zm",0)
v(r=C.aEN.prototype,"gaYy","Pr",0)
v(r,"gcmM","b1W",3)
v(r,"gcw5","aAb",86)
v(r,"gbLg","a9w",0)
v(r,"gc6I","Ah",0)
v(r=C.aGI.prototype,"gcgF","a_H",0)
v(r,"gcgN","a_K",0)
v(r,"gbAr","a7Z",0)
v(r,"gc6M","adF",0)
v(C.aGH.prototype,"gc6N","adG",0)
v(C.aAI.prototype,"gbzq","a7M",0)
v(C.az5.prototype,"gc6O","Zx",0)
w(C,"i5b","i34",12)
w(C,"i59","i01",12)
w(C,"i5a","i24",12)
v(r=C.aDG.prototype,"gcze","czf",3)
v(r,"gcl0","cl1",3)
u(r,"gEc","aek",7)
v(r,"gbF6","aqI",3)
u(r,"gEd","aZP",7)
v(r,"gc8V","ae1",0)
v(r,"gc7M","ae0",0)
v(r,"gcb4","ael",0)
v(r,"gbHr","a97",0)
v(r,"gcbY","a_6",0)
v(r,"gcbZ","aeC",0)
v(r,"gccv","aeJ",0)
v(r,"gcbh","aeo",0)
v(r,"gbLq","a9A",0)
v(r,"gaQI","aQJ",3)
v(r,"gaPR","aPS",3)
v(r,"gaLy","aLz",3)
v(r,"gaPQ","ary",3)
u(r,"gbzH","bzI",80)
v(r,"gazK","b4Y",3)
v(r,"gc7O","c7P",3)
v(r,"gbWt","bWu",3)
v(r,"gbJU","bJV",3)
v(r=C.aDJ.prototype,"gcy6","cy7",3)
v(r,"gcxM","cxN",3)
t(C,"i5c","i3l",2)
v(r=C.aDH.prototype,"gc6U","IK",0)
v(r,"gcoL","QS",0)
v(r,"gc6R","IJ",0)
v(r,"gcAu","a2c",0)
v(r,"gccH","aeQ",0)
v(C.aDF.prototype,"gc6V","aYG",3)
v(r=C.aDI.prototype,"gbMb","a9K",0)
u(r,"gc6S","c6T",101)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(B.aC,[C.nP,C.Rn,C.bGW,C.bFi,C.cw8,C.cw6,C.bN6,C.b7R,C.cw7,C.bDT,C.cfY,C.cfW,C.cfX,C.cfV,C.as9,C.cfU,C.bO_,C.of,C.aEh,C.jl,C.nC,C.a7u,C.zf,C.ld,C.os,C.m1,C.zh,C.nG,C.a7C,C.aqx,C.b0r,C.ecu,C.la,C.En,C.eu,C.iX,C.Ee,C.xn,C.eJ,C.lD,C.i_,C.jD,C.a7D,C.aeL,C.b0s,C.b25,C.a2p])
u(B.ki,[C.cDZ,C.bYD,C.fsV,C.cFu,C.cER,C.fyq,C.dXz,C.dXy,C.ed7,C.ed6,C.fzP,C.fcH,C.fcI,C.cbT,C.cbU,C.cbV,C.ehv,C.eQ4,C.ePs,C.ePr,C.eQv,C.eQ2,C.ePW,C.eQe,C.eQV,C.fjR,C.eX3,C.eX2,C.eXw,C.ecx,C.fDk,C.dTi,C.fJN,C.fAb,C.cdn,C.cdl,C.cdq,C.fAG,C.fAH,C.fAI,C.fAJ,C.cd7,C.cd8,C.dFv,C.cd4,C.fAF,C.f3q,C.dRu,C.ccY,C.ecd,C.fyf,C.esg,C.esF,C.esC,C.esB,C.esM,C.esL,C.eug,C.euf,C.esv,C.esu,C.ep4,C.eqe,C.etd,C.euy,C.eux,C.eq1,C.erc,C.eoM,C.d_H,C.evt,C.evu,C.evp,C.evq,C.evr,C.evs,C.evx,C.cdv,C.ev2,C.evd,C.cg4])
u(B.hU,[C.cE_,C.cE0,C.bO0,C.fqj,C.bYC,C.bYF,C.fGh,C.f4o,C.f4f,C.f4v,C.fbA,C.fbB,C.fsW,C.fsU,C.fFM,C.fq_,C.fGD,C.cFk,C.cFp,C.cFr,C.cFn,C.cFs,C.cFl,C.cFt,C.cFg,C.cFd,C.cFc,C.cFj,C.cEM,C.cEK,C.fxs,C.fxt,C.ffZ,C.fyr,C.fyx,C.ff1,C.c8b,C.fxq,C.fxr,C.fsh,C.fsi,C.fyw,C.fys,C.fyu,C.fyv,C.fyt,C.fK4,C.fsl,C.fsm,C.fsp,C.fsq,C.fst,C.fsu,C.fLx,C.fd7,C.fLI,C.egp,C.egq,C.egr,C.eg7,C.egj,C.egk,C.egm,C.cbS,C.cbQ,C.cbR,C.fy6,C.fy8,C.fy7,C.fcJ,C.fcK,C.fLL,C.ehA,C.ehB,C.ehs,C.eht,C.ehw,C.ehx,C.fM0,C.eQW,C.eQl,C.eQ5,C.eQi,C.ePn,C.ePo,C.ePp,C.ePt,C.ePu,C.eQL,C.eQS,C.eQU,C.eQu,C.eQw,C.eQA,C.eQB,C.eQC,C.eQG,C.eQx,C.eQy,C.ePF,C.ePG,C.ePH,C.ePI,C.ePJ,C.ePK,C.ePL,C.ePM,C.ePN,C.eP0,C.eP1,C.eP2,C.eP3,C.eP5,C.eP6,C.ePz,C.ePA,C.ePB,C.ePC,C.ePD,C.ePa,C.ePb,C.ePc,C.ePd,C.ePV,C.eQd,C.fvv,C.fvu,C.cde,C.fjQ,C.fDg,C.fD9,C.fDc,C.fB9,C.fBa,C.fBb,C.fvC,C.fvB,C.fvA,C.fvy,C.fcE,C.fcF,C.fcG,C.fMc,C.eX5,C.eX6,C.eX_,C.eWU,C.eXp,C.eXq,C.eXs,C.eXt,C.eXo,C.fMb,C.eWL,C.fj5,C.ecw,C.fDi,C.fDj,C.fDl,C.fDe,C.fDf,C.fLp,C.dhT,C.dhZ,C.ecv,C.f97,C.f99,C.f98,C.f96,C.fwG,C.fwI,C.fb7,C.fCL,C.fCM,C.fCN,C.fCY,C.fD2,C.fD3,C.fD4,C.fD5,C.fD6,C.fD7,C.fD8,C.fCO,C.fCP,C.fCQ,C.fCR,C.fCS,C.fCT,C.fCU,C.fCV,C.fCW,C.fCX,C.fCZ,C.fD_,C.fD0,C.fD1,C.fuw,C.fiE,C.fiD,C.fDr,C.dTj,C.dTh,C.eVV,C.c7N,C.c7P,C.fJP,C.d7b,C.d7d,C.fJO,C.fJM,C.fMa,C.fA7,C.d6M,C.fsx,C.fsy,C.cdc,C.cdd,C.cdb,C.cd1,C.cd2,C.ccZ,C.cd_,C.cd0,C.cdt,C.cdo,C.cdj,C.cdk,C.cdm,C.cdp,C.cdr,C.fAK,C.cd6,C.cd9,C.cda,C.cdg,C.cdh,C.fDy,C.fCF,C.cd5,C.cd3,C.fAE,C.flb,C.ccX,C.eTy,C.fo0,C.euU,C.erj,C.erk,C.esU,C.esI,C.esJ,C.eqH,C.euF,C.euG,C.euH,C.eq5,C.esn,C.esp,C.es_,C.erX,C.erf,C.erg,C.es6,C.eq7,C.esi,C.esj,C.esh,C.esl,C.esk,C.esD,C.esE,C.esG,C.esz,C.eqq,C.eqn,C.esN,C.eqf,C.euE,C.eoO,C.eqi,C.eqh,C.epw,C.epB,C.epz,C.epx,C.euM,C.euN,C.euO,C.euL,C.eui,C.euh,C.eub,C.eud,C.eu3,C.euC,C.euA,C.eoW,C.eoS,C.erd,C.epF,C.ep6,C.ep5,C.eps,C.ept,C.eqF,C.epH,C.epL,C.esw,C.eu4,C.eu5,C.eu6,C.eu7,C.eq9,C.eqa,C.eqb,C.erG,C.eqB,C.eqt,C.eqA,C.erQ,C.erR,C.etD,C.etF,C.etZ,C.eu0,C.etG,C.etH,C.epD,C.eri,C.erh,C.eus,C.eq0,C.epT,C.epU,C.epX,C.epY,C.erV,C.eqZ,C.er_,C.er0,C.er1,C.er2,C.er3,C.er4,C.er5,C.er6,C.er7,C.er8,C.esR,C.d_E,C.d_F,C.evz,C.fDo,C.fDx,C.fDn,C.fDt,C.fbz,C.fMe,C.fMf,C.fMg,C.ev1,C.eva,C.eoH,C.eoC,C.eoD,C.fxI,C.fxH,C.fxJ,C.fxO,C.fxK,C.fxL,C.f5S,C.f5T,C.ed4,C.cg3])
u(B.j6,[C.cE1,C.f4k,C.f4p,C.f4q,C.f4l,C.f4m,C.f4n,C.f4d,C.f4e,C.f4g,C.f4h,C.f4u,C.f4t,C.f4j,C.f4i,C.f4r,C.f4s,C.f4x,C.f4y,C.f4w,C.cFm,C.cFq,C.cFo,C.cFe,C.cFf,C.cFh,C.cFa,C.cFb,C.cFi,C.cF9,C.cF8,C.cF7,C.cEB,C.cEA,C.cED,C.cEL,C.cEE,C.cEC,C.cEG,C.cEH,C.cEI,C.cEF,C.cEJ,C.cEN,C.cEO,C.cEP,C.cEQ,C.fsf,C.fsg,C.fsd,C.fse,C.e7T,C.e7R,C.e7S,C.e7U,C.e7V,C.dXx,C.fsj,C.fsk,C.fsn,C.fso,C.fsr,C.fss,C.ed5,C.fAe,C.fAd,C.ego,C.egn,C.eg1,C.efY,C.eg8,C.eg9,C.ega,C.eg3,C.eg4,C.eg5,C.eg6,C.eg2,C.eg_,C.eg0,C.egg,C.egh,C.egf,C.egi,C.ege,C.egd,C.egc,C.egl,C.egb,C.efZ,C.ehz,C.ehn,C.eho,C.ehu,C.ehp,C.ehr,C.ehq,C.ehy,C.ePO,C.eQb,C.ePx,C.ePy,C.ePv,C.ePw,C.eQh,C.eQg,C.eQf,C.eQk,C.eQj,C.ePm,C.ePq,C.ePl,C.ePk,C.ePh,C.ePj,C.ePi,C.eQT,C.eQM,C.eQK,C.eQN,C.eQJ,C.eQO,C.eQI,C.eQP,C.eQQ,C.eQR,C.eQH,C.eQt,C.eQo,C.eQz,C.eQs,C.eQD,C.eQr,C.eQE,C.eQq,C.eQF,C.eQp,C.eQ8,C.eQ7,C.eQ9,C.eQ6,C.eQa,C.eQ0,C.eQ_,C.eQ1,C.ePZ,C.ePY,C.ePX,C.eP4,C.eP_,C.ePe,C.eP9,C.ePf,C.eP8,C.ePg,C.eP7,C.eQ3,C.ePS,C.ePR,C.ePT,C.ePQ,C.ePU,C.ePP,C.eQc,C.eQn,C.eQm,C.ePE,C.fDb,C.fDd,C.fDh,C.fvz,C.fy_,C.fxY,C.fxZ,C.eX7,C.eX8,C.eX4,C.eWZ,C.eWY,C.eX0,C.eX1,C.eWO,C.eWP,C.eWR,C.eWS,C.eWT,C.eWQ,C.eWV,C.eXl,C.eXm,C.eXk,C.eXn,C.eXj,C.eXi,C.eXh,C.eXr,C.eXg,C.eXf,C.eXe,C.eXu,C.eXd,C.eXv,C.eXc,C.eXb,C.eWW,C.eWX,C.eXa,C.eX9,C.eWH,C.eWI,C.eWJ,C.eWK,C.eWG,C.eWM,C.eWN,C.dhS,C.dhU,C.dhX,C.dhY,C.dhW,C.dhV,C.fwH,C.fux,C.c7O,C.c7Q,C.d74,C.d79,C.d7a,C.d78,C.d77,C.d7c,C.d76,C.d75,C.d7e,C.fJL,C.ddR,C.ddS,C.ddT,C.fsv,C.fsw,C.cdu,C.eoI,C.eoJ,C.eoK,C.eoL,C.fl9,C.fla,C.dRw,C.dRv,C.d40,C.d4_,C.euW,C.euV,C.erl,C.eu1,C.euS,C.esS,C.euI,C.euJ,C.euT,C.es0,C.eq3,C.eq4,C.eso,C.erZ,C.erW,C.erY,C.es1,C.es2,C.es3,C.es4,C.es5,C.es7,C.eq8,C.esa,C.esb,C.esc,C.esd,C.ese,C.esf,C.es9,C.esm,C.esA,C.esy,C.esH,C.es8,C.eqo,C.eqp,C.eqr,C.esK,C.esO,C.ep2,C.eqm,C.eqk,C.esW,C.eqg,C.esV,C.eq6,C.eqI,C.euD,C.eu2,C.ep3,C.ep0,C.eoR,C.eoN,C.eoP,C.eqj,C.epv,C.epA,C.epy,C.epu,C.esx,C.euP,C.eue,C.eu9,C.eua,C.euc,C.erb,C.era,C.euB,C.eoU,C.eoV,C.eoX,C.eoY,C.ep1,C.eoT,C.esT,C.euK,C.ere,C.epE,C.eoQ,C.eqG,C.eoZ,C.ep7,C.ep8,C.ep9,C.epk,C.epn,C.epo,C.epp,C.epq,C.epr,C.epa,C.epb,C.epc,C.epd,C.epe,C.epf,C.epg,C.eph,C.epi,C.epj,C.epl,C.epm,C.eqE,C.eqD,C.eqC,C.ep_,C.epI,C.epG,C.epJ,C.epK,C.eql,C.ess,C.est,C.esq,C.esr,C.eu8,C.eqd,C.eqc,C.erF,C.erE,C.erH,C.erD,C.erI,C.erC,C.erJ,C.erB,C.erK,C.erA,C.erL,C.erz,C.erM,C.ery,C.erN,C.erx,C.erq,C.err,C.ers,C.erp,C.ert,C.ero,C.eru,C.ern,C.erv,C.erm,C.erw,C.eqy,C.eqz,C.eqs,C.equ,C.eqv,C.eqw,C.eqx,C.euQ,C.euR,C.erP,C.erO,C.erS,C.ete,C.etf,C.etg,C.etr,C.etC,C.etN,C.etU,C.etV,C.etW,C.etX,C.etY,C.eth,C.eti,C.etj,C.etk,C.etl,C.etm,C.etn,C.eto,C.etp,C.etq,C.ets,C.ett,C.etu,C.etv,C.etw,C.etx,C.ety,C.etz,C.etA,C.et4,C.etB,C.etc,C.etb,C.etE,C.eta,C.et0,C.eu_,C.et9,C.et_,C.esY,C.et8,C.esZ,C.esX,C.etI,C.et7,C.etJ,C.etK,C.etL,C.etM,C.et6,C.etO,C.etP,C.etQ,C.et5,C.etR,C.et3,C.etS,C.et2,C.etT,C.et1,C.epC,C.eul,C.euk,C.eum,C.euj,C.eqL,C.eqK,C.eqM,C.eqJ,C.euw,C.eur,C.euv,C.eun,C.euo,C.eup,C.euq,C.eut,C.euu,C.euz,C.eq2,C.epQ,C.epR,C.epS,C.epP,C.epW,C.epV,C.epO,C.epN,C.epZ,C.epM,C.eq_,C.erU,C.erT,C.eqY,C.eqX,C.eqW,C.eqV,C.eqU,C.eqT,C.eqS,C.eqR,C.eqO,C.eqQ,C.eqP,C.eqN,C.er9,C.esP,C.esQ,C.d_G,C.d02,C.d03,C.d_A,C.d_z,C.d_D,C.d_B,C.d_C,C.evw,C.evm,C.evv,C.evn,C.evo,C.evi,C.evj,C.evk,C.evl,C.evy,C.fDu,C.fDv,C.fDw,C.euZ,C.ev_,C.ev0,C.ev3,C.ev4,C.ev7,C.ev8,C.ev6,C.ev9,C.ev5,C.euY,C.euX,C.evb,C.evc,C.eve,C.evf,C.eoG,C.eoF,C.eoB,C.eoE,C.evh,C.evg,C.fxN,C.fxM,C.ed2,C.ed3])
t(C.aQE,B.J)
u(B.m6,[C.a3o,C.aws,C.av8,C.xl,C.xo,C.kQ,C.ta,C.Be,C.rn,C.vQ,C.ar6,C.Ip,C.aqw,C.uy,C.mt,C.hx,C.a8e])
u(C.bN6,[C.cw9,C.bN7])
u(C.cfY,[C.cg1,C.as8])
t(C.cg0,C.cfW)
t(C.cg_,C.cfV)
t(C.cg2,C.cg_)
t(C.cfZ,C.cfX)
t(C.cfT,C.cfU)
t(C.b9p,B.oJ)
t(C.cq_,B.auB)
t(C.a80,B.x8)
t(C.aV6,B.dG)
t(C.aA0,B.att)
u(B.ag,[C.a0q,C.Ya,C.Y8,C.apI,C.Vj,C.Vm,C.a_r,C.a_Y,C.a_X,C.aDf,C.Zj,C.N7,C.YS,C.Zc,C.anJ,C.aI6,C.Uy,C.ayQ,C.a7k,C.Nz,C.ayc,C.Jr,C.a_3,C.Vy,C.Vz,C.aDE,C.aqB,C.a7l])
u(B.ah,[C.aIp,C.ax_,C.awW,C.aD3,C.aDm,C.aDq,C.aEN,C.aGI,C.aGH,C.aLg,C.aAI,C.aKK,C.az5,C.bfi,C.aKv,C.aMB,C.aKJ,C.bdb,C.aLe,C.aLs,C.aJq,C.bbX,C.aLt,C.aDH,C.bjI,C.aDF,C.aDI,C.bjr])
u(B.au,[C.awY,C.acR,C.acf,C.bit,C.acU,C.aeB,C.b03,C.brQ,C.b0n,C.bl1,C.bqp,C.aZg,C.b0q,C.acX,C.ade,C.b0o,C.Io,C.aZj,C.bcb,C.Pe,C.Jy,C.bgQ,C.bgP,C.bue])
u(B.GU,[C.bbE,C.btf,C.aIJ,C.bel,C.bqN])
u(B.mK,[C.bbD,C.b88,C.bqK,C.bba,C.beJ,C.bgW,C.bdP,C.beG,C.ben,C.bnh,C.b9h,C.b8V,C.bub,C.brc,C.bql,C.bdI,C.b0l,C.bpi,C.bqi])
t(C.bjo,C.aLg)
t(C.biL,C.aKK)
t(C.biv,C.aKv)
t(C.btI,C.aMB)
t(C.biI,C.aKJ)
t(C.bjm,C.aLe)
t(C.bww,C.aLs)
t(C.aDG,C.bww)
t(C.bbY,C.aJq)
t(C.aDJ,C.aLt)
t(C.bu2,B.iP)
t(C.a8d,B.kp)
t(C.cg5,C.b25)
t(C.ahN,C.a2p)
u(B.Xa,[C.aQu,C.aRZ])
t(C.aw3,C.aQu)
w(C.aLg,B.c9)
w(C.aKK,B.c9)
w(C.aKv,B.c9)
w(C.aKJ,B.c9)
w(C.aLe,B.c9)
w(C.aMB,B.c9)
w(C.aJq,B.eR)
w(C.aLs,B.c9)
v(C.bww,B.ez)
w(C.aLt,B.c9)})()
B.jW(b.typeUniverse,JSON.parse('{"aRd":{"hG":["aRd"]},"nP":{"aRd":[],"hG":["aRd"]},"aQE":{"J":["Rn"],"J.E":"Rn"},"b9p":{"oJ":[]},"a80":{"x8":[],"o8":[]},"aV6":{"dG":[],"cA":[],"r":[]},"aA0":{"aS":[],"d6":["aS"],"aR":[],"cv":[]},"a0q":{"ag":[],"r":[]},"aIp":{"ah":["a0q"]},"Ya":{"ag":[],"r":[]},"Y8":{"ag":[],"r":[]},"ax_":{"ah":["Ya"]},"awW":{"ah":["Y8"]},"awY":{"au":[],"r":[]},"apI":{"ag":[],"r":[]},"aD3":{"ah":["apI"]},"acR":{"au":[],"r":[]},"acf":{"au":[],"r":[]},"acU":{"au":[],"r":[]},"aeB":{"au":[],"r":[]},"bit":{"au":[],"r":[]},"Vj":{"ag":[],"r":[]},"aDm":{"ah":["Vj"]},"b03":{"au":[],"r":[]},"bbE":{"aB":[]},"bbD":{"aB":[]},"btf":{"aB":[]},"b88":{"aB":[]},"bqK":{"aB":[]},"Vm":{"ag":[],"r":[]},"aDq":{"ah":["Vm"]},"bba":{"aB":[]},"a_r":{"ag":[],"r":[]},"aEN":{"ah":["a_r"]},"beJ":{"aB":[]},"a_Y":{"ag":[],"r":[]},"a_X":{"ag":[],"r":[]},"aDf":{"ag":[],"r":[]},"Zj":{"ag":[],"r":[]},"aGI":{"ah":["a_Y"]},"aGH":{"ah":["a_X"]},"bjo":{"ah":["aDf"]},"bgW":{"aB":[]},"aAI":{"ah":["Zj"]},"brQ":{"au":[],"r":[]},"b0n":{"au":[],"r":[]},"bl1":{"au":[],"r":[]},"N7":{"ag":[],"r":[]},"YS":{"ag":[],"r":[]},"biL":{"ah":["N7"]},"bqp":{"au":[],"r":[]},"bdP":{"aB":[]},"aZg":{"au":[],"r":[]},"az5":{"ah":["YS"]},"Zc":{"ag":[],"r":[]},"bfi":{"ah":["Zc"]},"beG":{"aB":[]},"ben":{"aB":[]},"bnh":{"aB":[]},"b9h":{"aB":[]},"b8V":{"aB":[]},"bub":{"aB":[]},"brc":{"aB":[]},"bql":{"aB":[]},"bdI":{"aB":[]},"anJ":{"ag":[],"r":[]},"b0q":{"au":[],"r":[]},"biv":{"ah":["anJ"]},"acX":{"au":[],"r":[]},"ade":{"au":[],"r":[]},"aI6":{"ag":[],"r":[]},"Uy":{"ag":[],"r":[]},"Io":{"au":[],"r":[]},"ayQ":{"ag":[],"r":[]},"a7k":{"ag":[],"r":[]},"b0o":{"au":[],"r":[]},"b0l":{"aB":[]},"btI":{"ah":["aI6"]},"aIJ":{"aB":[]},"biI":{"ah":["Uy"]},"bdb":{"ah":["ayQ"]},"bjm":{"ah":["a7k"]},"aZj":{"au":[],"r":[]},"bel":{"aB":[]},"bpi":{"aB":[]},"bqi":{"aB":[]},"ayc":{"ag":[],"r":[]},"Jr":{"ag":[],"r":[]},"a_3":{"ag":[],"r":[]},"Jy":{"au":[],"r":[]},"Nz":{"ag":[],"r":[]},"aDG":{"ah":["Nz"],"ez":[]},"bbY":{"ah":["ayc"]},"bcb":{"au":[],"r":[]},"bbX":{"ah":["Jr"]},"Pe":{"au":[],"r":[]},"aDJ":{"ah":["a_3"]},"bqN":{"aB":[]},"bgQ":{"au":[],"r":[]},"bgP":{"au":[],"r":[]},"Vy":{"ag":[],"r":[]},"Vz":{"ag":[],"r":[]},"aDE":{"ag":[],"r":[]},"aqB":{"ag":[],"r":[]},"aDH":{"ah":["Vy"]},"bjI":{"ah":["Vz"]},"aDF":{"ah":["aDE"]},"bu2":{"iP":[]},"aDI":{"ah":["aqB"]},"bue":{"au":[],"r":[]},"a7l":{"ag":[],"r":[]},"bjr":{"ah":["a7l"]},"a8d":{"kp":["fr<eP>"],"kc":["fr<eP>"]},"ahN":{"a2p":[]},"aQu":{"j0":[],"ff":[]},"aw3":{"j0":[],"ff":[]},"aRZ":{"j0":[],"ff":[]}}'))
var y={z:"Amri ya kifalme \xb7 bendi za muhuri juu na chini.",L:"Kichwa cha Mtu: Dollar elfu ishirini ($20,000)",f:"Mimi [Jina la Baba wa Binti], wa jamaa ya [Jina la Jamii ya Binti], Nyumba ya [Jina la Nyumba ya Binti]. Nimehowesha binti wangu aitwaye [Jina la Binti], na ndugu [Jina la Kijana], wa jamaa ya [Jina la Jamii ya Mume], Nyumba ya [Jina la Nyumba ya Mume], kijana wa [Jina la Baba wa Mume]. Makubaliano haya yanathibitishwa rasmi na pande zote mbili ili kuweka kumbukumbu na kuimarisha uhusiano mwema kati ya familia zote mbili.",O:"Mimi [Jina la Baba wa Mume], wa jamaa ya [Jina la Jamii ya Mume], Nyumba ya [Jina la Nyumba ya Mume]. Nimetowa mahali ya kuhoweya kijana wangu aitwaye [Jina la Kijana] na [Jina la Binti], binti wa [Jina la Baba wa Binti], wa jamaa ya [Jina la Jamii ya Binti], Nyumba ya [Jina la Nyumba ya Binti]. Makubaliano haya yanathibitishwa rasmi na pande zote mbili ili kuweka kumbukumbu na kuimarisha uhusiano mwema kati ya familia zote mbili.",s:"Mpaka mwembamba wa dhahabu \xb7 vichwa vya bluu ya kifalme.",Q:"Mpaka mwembamba wa dhahabu \xb7 vichwa vya dhahabu.",H:"Nguo ya kente yenye dirisha la karatasi katikati.",n:"Nguo ya udongo yenye alama \xb7 karatasi ndani.",M:'PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".',S:"The AI sent something I could not read. Try again.",g:"Your story appears here. Add a picture, then ask the AI to write it."}
var x=(function rtii(){var w=B.ax
return{bu:w("Lk"),U:w("vl<pU>"),bz:w("w"),M:w("eM<n>"),bo:w("jy"),g7:w("LP"),gc:w("az<iu?>"),bq:w("az<~>"),cc:w("M2"),fS:w("DF"),an:w("HB"),bm:w("O<Rn>"),X:w("O<a2x>"),f3:w("O<aRd>"),aK:w("O<n5>"),V:w("O<ac>"),O:w("O<w>"),fA:w("O<lv>"),d5:w("O<az<bv<H,+icon3d,picture(n?,n?)>>>"),bH:w("O<az<dD>>"),fG:w("O<az<~>>"),aF:w("O<nb>"),cd:w("O<ai<jl>>"),ez:w("O<a3<n,aC>>"),d:w("O<a3<n,@>>"),B:w("O<mp>"),h:w("O<jl>"),gE:w("O<zf>"),k:w("O<of>"),g:w("O<lD>"),D:w("O<i_>"),u:w("O<eJ>"),m:w("O<uy>"),i:w("O<hx>"),aC:w("O<a7C>"),o:w("O<zh>"),e3:w("O<aC>"),dN:w("O<u>"),v:w("O<ho>"),cR:w("O<iN>"),J:w("O<jc>"),gx:w("O<p3<n>>"),f2:w("O<+(a0,n)>"),L:w("O<+(n,n)>"),aD:w("O<+data,mimeType(n,n)>"),G:w("O<+(N,N)>"),ek:w("O<+(H,n)>"),n:w("O<+(H,H)>"),r:w("O<cQ>"),s:w("O<n>"),aS:w("O<iP>"),p:w("O<r>"),eR:w("O<ff>"),fT:w("O<b7R>"),bx:w("O<aEh>"),gz:w("O<aeL>"),x:w("O<N>"),t:w("O<H>"),dS:w("O<aB?>"),bA:w("O<u?>"),Z:w("O<H?>"),cA:w("O<cf>"),A:w("cs<ah<ag>>"),gL:w("ai<of>"),R:w("ai<i_>"),j:w("ai<@>"),bW:w("ai<H>"),e:w("bv<H,+icon3d,picture(n?,n?)>"),P:w("a3<n,@>"),f:w("a3<@,@>"),gI:w("a3<H,+icon3d,picture(n?,n?)>"),bR:w("K<hx,r>"),eC:w("K<nG,n>"),cT:w("K<jD,D>"),dv:w("K<n,n>"),f0:w("K<n,r>"),gN:w("K<H,py>"),gh:w("K<mt,jn<mt>>"),w:w("iA"),ei:w("iu"),g2:w("rd"),fB:w("Ee"),b6:w("zf"),gX:w("a7u"),dt:w("ld"),ea:w("of"),bt:w("lD"),I:w("i_"),F:w("eJ"),fO:w("mt"),ff:w("uy"),fP:w("hx"),Q:w("vQ"),dO:w("aqx"),a:w("cq"),C:w("aC"),dw:w("as9"),di:w("a8e"),Y:w("eP"),fz:w("+(n,n)"),dL:w("+(H,H)"),eb:w("+claimCode,qrPayload(n?,n)"),aH:w("+icon3d,picture(n?,n?)"),cz:w("EJ"),dB:w("dz<u>"),bJ:w("dz<n>"),_:w("e_<n>"),N:w("n"),fw:w("pU"),bO:w("ar"),K:w("bo<u>"),b:w("bo<N>"),E:w("dD"),W:w("cx<n>"),ac:w("cx<H>"),ex:w("kf<lD>"),cI:w("kf<n>"),cl:w("kf<N>"),b4:w("a2<la>"),a8:w("a2<m1>"),fR:w("a2<+(n,n)>"),co:w("e8<u>"),l:w("r"),b2:w("bX<~>"),ev:w("pW<dX>"),dT:w("bg<~>"),cQ:w("aA0"),q:w("mY"),y:w("R"),gR:w("N"),z:w("@"),S:w("H"),at:w("b9?"),gw:w("ai<a3<n,@>>?"),aT:w("ai<i_>?"),c:w("ai<@>?"),aP:w("iu?"),af:w("i_?"),go:w("b0s?"),a6:w("a7D?"),cK:w("aC?"),bZ:w("+bytes,dataUrl,fileName(dD,n,n)?"),gl:w("+claimCode,qrPayload,token(n?,n,n)?"),T:w("n?"),dd:w("dD?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.aVe=new B.bI(A.ax,null,null,N.ana,null)
D.aVo=new B.da(0,-0.15)
D.aVq=new B.da(0.62,0)
D.aVt=new B.da(-0.35,-0.45)
D.aVD=new B.da(0.9,-0.85)
D.aLf=new B.aT(30,30)
D.aWV=new B.bp(D.aLf,D.aLf,A.he,A.he)
D.aX8=new B.ay(A.b7,1,A.q,-1)
D.bfx=new B.w(1,0.4196078431372549,0.2901960784313726,0.2,A.t)
D.aXk=new B.ay(D.bfx,1,A.q,-1)
D.aXw=new B.ay(A.aE,1.5,A.q,-1)
D.aXB=new B.ay(A.b7,1.6,A.q,-1)
D.aXR=new B.ay(A.aE,1.4,A.q,-1)
D.aZf=new B.o(null,null,null,null,null,K.Gq,A.a6)
D.bUx=new B.a8(A.a3,A.a7,A.x,G.a2s,null,null)
D.aZn=new B.o(null,null,null,null,null,D.bUx,A.a6)
D.aak=new B.o(A.aB,null,null,A.rU,null,null,A.n)
D.b9D=new B.w(1,0.16862745098039217,0.22745098039215686,0.3333333333333333,A.t)
D.bfu=new B.w(1,0.0392156862745098,0.058823529411764705,0.10196078431372549,A.t)
D.cRx=w([D.b9D,D.bfu],x.O)
D.ecL=new B.bT(A.A,0.5,A.x,null,0,D.cRx,null,null)
D.aZG=new B.o(null,null,null,null,null,D.ecL,A.a6)
D.Wx=new B.w(1,0.054901960784313725,0.08235294117647059,0.14901960784313725,A.t)
D.aY6=new B.bO(P.uQ,A.Y,A.Y,A.Y)
D.aZI=new B.o(D.Wx,null,D.aY6,null,null,null,A.n)
D.bWj=new B.a8(A.a3,A.a7,A.x,A.PO,null,null)
D.aZP=new B.o(null,null,null,null,null,D.bWj,A.a6)
D.abU=new B.w(1,0.058823529411764705,0.058823529411764705,0.0784313725490196,A.t)
D.aZR=new B.o(D.abU,null,null,A.qt,null,null,A.n)
D.aZV=new B.o(A.kh,null,null,null,null,null,A.a6)
D.aYd=new B.bO(A.A2,A.Y,A.Y,A.Y)
D.aZY=new B.o(Z.acZ,null,D.aYd,A.m5,null,null,A.n)
D.DO=new B.o(A.dS,null,null,null,null,null,A.a6)
D.b_3=new B.o(null,null,null,null,null,E.vP,A.a6)
D.cWn=w([E.adR,A.bY],x.O)
D.bVU=new B.a8(A.b_,A.b5,A.x,D.cWn,null,null)
D.b_7=new B.o(null,null,null,A.m5,null,D.bVU,A.n)
D.d5L=w([A.bj,A.dS,A.jP],x.O)
D.a0D=new B.a8(A.ax,A.aC,A.x,D.d5L,null,null)
D.b_k=new B.o(null,null,null,null,null,D.a0D,A.n)
D.b_l=new B.o(D.abU,null,null,A.kD,null,null,A.n)
D.cmp=w([A.dr,A.bj],x.O)
D.bVL=new B.a8(A.ax,A.aC,A.x,D.cmp,null,null)
D.b_p=new B.o(null,null,null,null,null,D.bVL,A.n)
D.b_z=new B.o(null,null,null,null,null,G.u_,A.a6)
D.b_S=new B.o(A.adT,null,null,null,null,null,A.a6)
D.baq=new B.w(0.5647058823529412,0,0,0,A.t)
D.aav=new B.ac(0,A.G,D.baq,A.RD,28)
D.b1Z=new B.aVj()
D.b2x=new C.cq_()
D.b2J=new C.b9p()
D.ab0=new B.cr(A.A,null,null,A.a0s,null)
D.b5f=new B.fj(null,null,null,null,null,E.n0,null,null,null,null)
D.b3f=new B.cr(A.A,null,null,D.b5f,null)
D.bFs=new B.ae(A.dW,28,A.c,null,null,null)
D.b3J=new B.cr(A.A,null,null,D.bFs,null)
D.b5c=new B.fj(2,null,null,null,null,A.bZ,null,null,null,null)
D.b44=new B.cr(A.A,null,null,D.b5c,null)
D.bFM=new B.ae(K.Ns,40,A.bI,null,null,null)
D.b45=new B.cr(A.A,null,null,D.bFM,null)
D.b61=new B.w(1,1,0.9019607843137255,0.6549019607843137,A.t)
D.b6e=new B.w(1,0.10588235294117647,0.13333333333333333,0.19607843137254902,A.t)
D.b6C=new B.w(1,0.08235294117647059,0.10196078431372549,0.14901960784313725,A.t)
D.b6I=new B.w(1,0.10980392156862745,0.07450980392156863,0.054901960784313725,A.t)
D.b7d=new B.w(1,0.47843137254901963,0.41568627450980394,0.27058823529411763,A.t)
D.b7u=new B.w(0.8,1,0.9450980392156862,0.9490196078431372,A.t)
D.b7v=new B.w(0.0784313725490196,0.788235294117647,0.6352941176470588,0.15294117647058825,A.t)
D.Kr=new B.w(1,0.0392156862745098,0.08235294117647059,0.14901960784313725,A.t)
D.b7U=new B.w(0.2,0.9607843137254902,0.6196078431372549,0.043137254901960784,A.t)
D.b7Z=new B.w(0.13333333333333333,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.t)
D.acd=new B.w(1,0.1411764705882353,0.09411764705882353,0.07058823529411765,A.t)
D.b8I=new B.w(1,0.22745098039215686,0.16470588235294117,0.10196078431372549,A.t)
D.b9s=new B.w(1,0.9098039215686274,0.9333333333333333,0.9647058823529412,A.t)
D.acr=new B.w(1,1,1,0.9725490196078431,A.t)
D.b9L=new B.w(0,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.t)
D.b9W=new B.w(1,1,0.5490196078431373,0.10196078431372549,A.t)
D.b9Z=new B.w(0.6,0.9098039215686274,0.7058823529411765,0.7215686274509804,A.t)
D.baa=new B.w(0.4,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.t)
D.bav=new B.w(1,1,0.9568627450980393,0.8392156862745098,A.t)
D.bbR=new B.w(1,1,0.996078431372549,0.9725490196078431,A.t)
D.Wh=new B.w(0.8509803921568627,0,0,0,A.t)
D.bbZ=new B.w(1,0.0784313725490196,0.06666666666666667,0.047058823529411764,A.t)
D.bc5=new B.w(1,0.0784313725490196,0.06666666666666667,0.0392156862745098,A.t)
D.adf=new B.w(0.6,0,0,0,A.t)
D.adh=new B.w(0,1,0.7019607843137254,0.2784313725490196,A.t)
D.bds=new B.w(1,0.12156862745098039,0.10196078431372549,0.058823529411764705,A.t)
D.tf=new B.w(1,0.08235294117647059,0.12156862745098039,0.21176470588235294,A.t)
D.bdS=new B.w(1,0.35294117647058826,0.41568627450980394,0.5215686274509804,A.t)
D.beh=new B.w(1,1,0.8784313725490196,0.6392156862745098,A.t)
D.beF=new B.w(0.4,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.t)
D.ae2=new B.w(1,0.47843137254901963,0.23137254901960785,0.2901960784313726,A.t)
D.WG=new B.w(0,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.t)
D.AB=new B.w(1,0.5411764705882353,0.39215686274509803,0.09019607843137255,A.t)
D.KW=new B.w(1,0.0784313725490196,0.09803921568627451,0.16470588235294117,A.t)
D.j8=new B.w(1,0.07058823529411765,0.12941176470588237,0.23921568627450981,A.t)
D.aes=new B.w(0,1,0.9686274509803922,0.8392156862745098,A.t)
D.WR=new B.w(1,0.2901960784313726,0.17254901960784313,0.10588235294117647,A.t)
D.bhX=new B.w(1,0.24705882352941178,0.16470588235294117,0.0392156862745098,A.t)
D.biq=new B.w(0.6,1,0.9686274509803922,0.9019607843137255,A.t)
D.biE=new B.w(0.6,1,0.984313725490196,0.9215686274509803,A.t)
D.X9=new B.w(1,0.07450980392156863,0.10980392156862745,0.2,A.t)
D.bjM=new B.w(1,0.8627450980392157,0.9215686274509803,0.9803921568627451,A.t)
D.xf=new B.w(1,0.9137254901960784,0.7686274509803922,0.41568627450980394,A.t)
D.bkf=new B.w(1,0.058823529411764705,0.0784313725490196,0.12549019607843137,A.t)
D.bkx=new B.hF(A.b2,!0,null,null)
D.f6K=new B.G(!0,A.az,null,null,null,null,22,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwo=new B.x("Bio link",null,D.f6K,null,null,null,null,null,null,null,null,null)
D.b3Z=new B.cr(A.A,null,null,D.fwo,null)
D.bkN=new B.hF(A.VE,!0,D.b3Z,null)
D.Lk=new C.a3o(0,"none")
D.afz=new C.a3o(1,"deflate")
D.afA=new C.a3o(2,"bzip2")
D.blH=new B.kk(0.165,0.84,0.44,1)
D.cWH=w([A.ci,A.dP,A.aE],x.O)
D.bV1=new B.a8(A.ax,A.aC,A.x,D.cWH,null,null)
D.aZk=new B.o(null,null,null,null,null,D.bV1,A.n)
D.bOC=new B.ae(A.eR,null,A.ad,null,null,null)
D.b4A=new B.cr(A.A,null,null,D.bOC,null)
D.bmd=new B.kN(D.aZk,A.bd,D.b4A,null)
D.bic=new B.w(0.058823529411764705,1,1,1,A.t)
D.cZO=w([A.bF,A.qE,A.qE,D.bic],x.O)
D.cDt=w([0,0.32,0.7,1],x.x)
D.bVA=new B.a8(A.ax,A.aC,A.x,D.cZO,D.cDt,null)
D.aZ9=new B.o(null,null,null,null,null,D.bVA,A.n)
D.bmj=new B.kN(D.aZ9,A.bd,null,null)
D.bnl=new B.mg(1,1,null,null,null,A.bm,null)
D.bno=new B.mg(1,null,null,null,null,D.WR,null)
D.bnS=new B.b9(125e4)
D.bnY=new B.b9(17e4)
D.bo7=new B.b9(35964e8)
D.bod=new B.b9(55e4)
D.boh=new B.b9(68e4)
D.boI=new B.ib(0,0,0,5)
D.boZ=new B.Q(0,16,16,0)
D.bp1=new B.Q(0,18,0,8)
D.bp9=new B.Q(0,36,0,36)
D.bpg=new B.Q(0,54,0,0)
D.bpn=new B.Q(10,0,10,3)
D.bpy=new B.ib(10,16,10,10)
D.bpK=new B.Q(10,6,4,6)
D.bpN=new B.Q(10,8,10,6)
D.agy=new B.Q(11,8,11,11)
D.bpR=new B.Q(12,0,12,24)
D.bq2=new B.Q(12,12,12,4)
D.bq5=new B.Q(12,12,8,12)
D.bqk=new B.Q(12,8,8,12)
D.bqG=new B.Q(14,14,14,0)
D.bqL=new B.Q(14,14,14,90)
D.br3=new B.Q(16,10,16,16)
D.br4=new B.Q(16,10,16,20)
D.ahn=new B.Q(16,6,16,28)
D.brD=new B.Q(18,0,18,10)
D.brF=new B.Q(18,0,18,30)
D.brH=new B.Q(18,10,18,12)
D.brI=new B.Q(18,10,18,14)
D.brZ=new B.Q(18,16,14,18)
D.bs3=new B.Q(18,18,18,12)
D.bs9=new B.Q(18,26,18,12)
D.bse=new B.Q(18,34,18,34)
D.bsf=new B.Q(18,4,18,14)
D.bsl=new B.Q(18,8,18,24)
D.bsD=new B.Q(20,16,14,4)
D.bsI=new B.Q(20,18,12,4)
D.bsN=new B.Q(20,20,12,20)
D.bsQ=new B.Q(20,22,20,20)
D.bsV=new B.Q(20,6,20,6)
D.bt3=new B.Q(22,18,22,18)
D.btb=new B.Q(22,24,22,0)
D.bte=new B.Q(22,24,22,4)
D.btm=new B.Q(22,60,22,22)
D.bts=new B.Q(24,24,24,22)
D.btC=new B.Q(26,10,60,10)
D.btJ=new B.Q(28,44,28,44)
D.bu_=new B.Q(32,44,32,44)
D.bu7=new B.Q(38,30,38,20)
D.buc=new B.Q(4,0,0,6)
D.buo=new B.ib(4,4,4,4)
D.buP=new B.ib(6,5,6,5)
D.buU=new B.Q(6,6,8,6)
D.bv4=new B.Q(8,14,8,14)
D.bv5=new B.Q(8,22,8,22)
D.bvd=new B.Q(8,6,12,6)
D.bvm=new B.Q(8,8,8,4)
D.aif=new B.Q(9,9,9,6)
D.bvw=new B.ib(2.5,2.5,2.5,2.5)
D.bvx=new B.Q(10.5,0,10.5,0)
D.bvy=new B.Q(7,1.5,7,1.5)
D.cOG=w([0.393,0.769,0.189,0,0,0.349,0.686,0.168,0,0,0.272,0.534,0.131,0,0,0,0,0,1,0],x.x)
D.bvO=new B.yE(null,null,D.cOG,A.Af)
D.cLO=w([0.2126,0.7152,0.0722,0,0,0.2126,0.7152,0.0722,0,0,0.2126,0.7152,0.0722,0,0,0,0,0,1,0],x.x)
D.bvP=new B.yE(null,null,D.cLO,A.Af)
D.aPW=new B.G(!0,A.az,null,null,null,null,11,A.u,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvI=new B.x("WORD DESIGN",null,D.aPW,null,null,null,null,null,null,null,null,null)
D.bwm=new B.bD(1,A.bh,D.fvI,null)
D.fvo=new B.x("Slides database",null,Ab.rG,null,null,null,null,null,null,null,null,null)
D.fsH=new B.x("Admin only \xb7 keep as many as you like",null,U.aPp,null,null,null,null,null,null,null,null,null)
D.ddu=w([D.fvo,A.bB,D.fsH],x.p)
D.blb=new B.fq(A.ah,A.e,A.j,A.F,null,A.p,null,0,D.ddu,null)
D.bwp=new B.bD(1,A.bh,D.blb,null)
D.fnf=new B.x("NGMY logo",null,A.fO,null,null,null,null,null,null,null,null,null)
D.bws=new B.bD(1,A.bh,D.fnf,null)
D.f4D=new B.G(!0,A.ad,null,null,null,null,12,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxE=new B.x("TALK TO THE EDITOR",null,D.f4D,null,null,null,null,null,null,null,null,null)
D.bwI=new B.bD(1,A.bh,D.fxE,null)
D.fh4=new B.x("Tell the AI what to change",null,Ab.rG,null,null,null,null,null,null,null,null,null)
D.bx1=new B.bD(1,A.bh,D.fh4,null)
D.bxT=new B.Dt(!0,"video/mp4")
D.f2X=new B.G(!0,A.c,null,null,null,null,16,A.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ffe=new B.x("Move presentations between devices",null,D.f2X,null,null,null,!1,null,null,1,null,null)
D.bxX=new B.qf(A.eh,A.a3,A.f,D.ffe,null)
D.fgk=new B.x("Edit in Slides",null,A.j2,null,null,null,null,null,null,null,null,null)
D.bxY=new B.qf(A.eh,A.A,A.f,D.fgk,null)
D.byc=new B.dq(1,A.cn,D.bxY,null)
D.ZW=new B.a0(60988,"MaterialIcons",!1)
D.bAY=new B.a0(61352,"MaterialIcons",!1)
D.ajL=new B.a0(61531,"MaterialIcons",!1)
D.bCc=new B.a0(63062,"MaterialIcons",!1)
D.bCk=new B.a0(63109,"MaterialIcons",!1)
D.bCv=new B.a0(63206,"MaterialIcons",!1)
D.aku=new B.a0(63238,"MaterialIcons",!1)
D.a_r=new B.a0(63365,"MaterialIcons",!1)
D.a_s=new B.a0(63367,"MaterialIcons",!1)
D.a_t=new B.a0(63368,"MaterialIcons",!1)
D.akG=new B.a0(63384,"MaterialIcons",!1)
D.bD4=new B.a0(63525,"MaterialIcons",!1)
D.bD7=new B.a0(63568,"MaterialIcons",!1)
D.bDs=new B.a0(983072,"MaterialIcons",!1)
D.bDQ=new B.a0(983271,"MaterialIcons",!0)
D.alQ=new B.a0(983965,"MaterialIcons",!1)
D.alR=new B.a0(983966,"MaterialIcons",!1)
D.bEN=new B.a0(984592,"MaterialIcons",!1)
D.bF4=new B.ae(A.tL,16,A.az,null,null,null)
D.bFc=new B.ae(A.mt,null,A.c,null,null,null)
D.am0=new B.ae(A.pT,18,A.c,null,null,null)
D.bFt=new B.ae(A.Bm,18,O.la,null,null,null)
D.bG7=new B.ae(A.jh,11,null,null,null,null)
D.bGh=new B.ae(A.a_b,null,A.et,null,null,null)
D.bGQ=new B.ae(A.r2,18,A.az,null,null,null)
D.bGW=new B.ae(A2.Bz,14,null,null,null,null)
D.bGX=new B.ae(A.e5,28,A.c7,null,null,null)
D.bH8=new B.ae(A.pU,20,A.c,null,null,null)
D.bHf=new B.ae(A.ya,null,null,null,null,null)
D.bHl=new B.ae(A.iV,18,A.hv,null,null,null)
D.bHq=new B.ae(A.lg,null,null,null,null,null)
D.bHV=new B.ae(A.a_I,28,A.c,null,null,null)
D.bCf=new B.a0(63065,"MaterialIcons",!1)
D.bI3=new B.ae(D.bCf,15,A.c,null,null,null)
D.bCl=new B.a0(63113,"MaterialIcons",!1)
D.bI9=new B.ae(D.bCl,null,A.ad,null,null,null)
D.bIx=new B.ae(A.vw,22,A.bK,null,null,null)
D.bIR=new B.ae(A.vx,18,null,null,null,null)
D.bIX=new B.ae(A.BC,12,A.c,null,null,null)
D.bEp=new B.a0(983687,"MaterialIcons",!1)
D.bJ7=new B.ae(D.bEp,null,A.bj,null,null,null)
D.bJe=new B.ae(A.hz,null,A.bj,null,null,null)
D.bJx=new B.ae(A.oM,22,A.c,null,null,null)
D.bJB=new B.ae(A.cC,13,A.c,null,null,null)
D.bJH=new B.ae(A.e5,26,A.ay,null,null,null)
D.bJK=new B.ae(A.r7,26,A.c,null,null,null)
D.NF=new B.ae(A.jh,8,A.c,null,null,null)
D.bK1=new B.ae(A.pT,40,A.c,null,null,null)
D.bK2=new B.ae(A.bzV,null,null,null,null,null)
D.bK6=new B.ae(A.tU,20,null,null,null,null)
D.bEo=new B.a0(983683,"MaterialIcons",!1)
D.bKg=new B.ae(D.bEo,null,A.aZ,null,null,null)
D.bKh=new B.ae(A.jh,16,A.bj,null,null,null)
D.bKC=new B.ae(A.r8,null,null,null,null,null)
D.amz=new B.ae(A.vz,22,A.c,null,null,null)
D.bKG=new B.ae(A.dW,17,A.c,null,null,null)
D.amA=new B.ae(A.jh,9,A.c,null,null,null)
D.bKL=new B.ae(A.vt,null,null,null,null,null)
D.bAb=new B.a0(57744,"MaterialIcons",!1)
D.bKS=new B.ae(D.bAb,null,null,null,null,null)
D.bKV=new B.ae(A.vt,16,null,null,null,null)
D.bEW=new B.a0(985181,"MaterialIcons",!1)
D.Gh=new B.ae(D.bEW,null,null,null,null,null)
D.bL6=new B.ae(A.lg,16,A.bK,null,null,null)
D.bEh=new B.a0(983615,"MaterialIcons",!1)
D.bL8=new B.ae(D.bEh,12,A.c,null,null,null)
D.amG=new B.ae(A.xT,16,null,null,null,null)
D.bLg=new B.ae(A.dW,21,A.c,null,null,null)
D.bLl=new B.ae(A.hz,17,A.c,null,null,null)
D.bLm=new B.ae(A.vw,null,null,null,null,null)
D.bLC=new B.ae(A.a06,20,A.az,null,null,null)
D.bLR=new B.ae(A.nY,22,E.n0,null,null,null)
D.bLY=new B.ae(A.pS,13,A.ad,null,null,null)
D.bM_=new B.ae(A.alC,20,A.az,null,null,null)
D.bzT=new B.a0(57495,"MaterialIcons",!1)
D.bM4=new B.ae(D.bzT,null,null,null,null,null)
D.bM8=new B.ae(A.nZ,18,A.c,null,null,null)
D.bMt=new B.ae(A.tY,28,A.c,null,null,null)
D.bMD=new B.ae(D.aku,null,A.aE,null,null,null)
D.bME=new B.ae(A.pU,22,A.c,null,null,null)
D.amP=new B.ae(A.ZS,16,null,null,null,null)
D.bNp=new B.ae(A.vw,32,A.c,null,null,null)
D.bO8=new B.ae(A.iY,22,A.c,null,null,null)
D.bOc=new B.ae(A.r7,22,A.ad,null,null,null)
D.an3=new B.ae(A.tL,null,A.c1,null,null,null)
D.bP7=new B.ae(A.tK,18,null,null,null,null)
D.bPJ=new B.ae(A.dW,18,A.cf,null,null,null)
D.a0v=new B.ae(A.cC,18,A.az,null,null,null)
D.bPP=new B.ae(A.alw,null,null,null,null,null)
D.bQe=new B.e2(null,null,null,null,null,null,null,null,null,null,"Type here\u2026",null,A.aPJ,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.ez,!0,null,null,null,null)
D.eWb=new B.G(!0,A.bJ,null,null,null,null,null,A.cv,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bQw=new B.e2(null,null,null,null,null,null,null,null,null,null,"Type here\u2026",null,D.eWb,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,A.af,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.ez,!0,null,null,null,null)
D.bQX=new B.e2(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"",null,null,null,null,null,null,null,null,null,null,null,A.ez,!0,null,null,null,null)
D.cSv=w([A.dS,A.aE],x.O)
D.bSM=new B.a8(A.a3,A.a7,A.x,D.cSv,null,null)
D.bSY=new B.a8(A.b_,A.b5,A.TL,A.au7,null,null)
D.b6s=new B.w(1,0.5568627450980392,0.5411764705882353,0.5215686274509804,A.t)
D.bay=new B.w(1,0.23529411764705882,0.22745098039215686,0.21568627450980393,A.t)
D.bdt=new B.w(1,0.7254901960784313,0.7058823529411765,0.6784313725490196,A.t)
D.b8A=new B.w(1,0.1803921568627451,0.17254901960784313,0.16470588235294117,A.t)
D.cDv=w([D.b6s,D.bay,D.bdt,D.b8A],x.O)
D.bTg=new B.a8(A.ax,A.aC,A.x,D.cDv,A.GQ,null)
D.ddB=w([A.cs,A.bA,A.b7],x.O)
D.bTi=new B.a8(A.b_,A.b5,A.TL,D.ddB,null,null)
D.deV=w([A.bj,A.cd],x.O)
D.bTm=new B.a8(A.a3,A.a7,A.x,D.deV,null,null)
D.da7=w([A.hu,A.d8,A.aH],x.O)
D.bTo=new B.a8(A.ax,A.aC,A.x,D.da7,null,null)
D.cYi=w([A.cY,A.f8],x.O)
D.bTs=new B.a8(A.a3,A.a7,A.x,D.cYi,null,null)
D.ddw=w([O.la,A.d8],x.O)
D.anP=new B.a8(A.a3,A.a7,A.x,D.ddw,null,null)
D.bb6=new B.w(1,0.9686274509803922,0.8901960784313725,0.6313725490196078,A.t)
D.ddt=w([D.bb6,D.xf,A.bZ],x.O)
D.bTx=new B.a8(A.a3,A.a7,A.x,D.ddt,null,null)
D.cU7=w([A.b1,A.d_,A.f3],x.O)
D.bTy=new B.a8(A.ax,A.aC,A.x,D.cU7,null,null)
D.NT=new B.a8(A.a3,A.a7,A.x,A.H3,null,null)
D.bj0=new B.w(1,0.9019607843137255,0.7568627450980392,0.3607843137254902,A.t)
D.cwz=w([D.bj0,A.bZ,A.ja],x.O)
D.anU=new B.a8(A.ax,A.aC,A.x,D.cwz,null,null)
D.d2m=w([A.x2,A.aw,D.AB],x.O)
D.bUz=new B.a8(A.a3,A.a7,A.x,D.d2m,null,null)
D.bkg=new B.w(1,0.43137254901960786,0.41568627450980394,0.396078431372549,A.t)
D.b9r=new B.w(1,0.6627450980392157,0.6431372549019608,0.615686274509804,A.t)
D.beu=new B.w(1,0.3333333333333333,0.3215686274509804,0.3058823529411765,A.t)
D.cTh=w([D.bkg,D.b9r,D.beu],x.O)
D.anV=new B.a8(A.a3,A.a7,A.x,D.cTh,null,null)
D.bb8=new B.w(1,0.0392156862745098,0.06666666666666667,0.13333333333333333,A.t)
D.bWz=w([Ax.afg,D.bb8],x.O)
D.bUJ=new B.a8(A.b_,A.b5,A.x,D.bWz,null,null)
D.cRl=w([A.mZ,A.bI],x.O)
D.bUN=new B.a8(A.b_,A.b5,A.x,D.cRl,null,null)
D.d7f=w([A.aE,A.dP],x.O)
D.bUT=new B.a8(A.a3,A.a7,A.x,D.d7f,null,null)
D.aee=new B.w(1,0.1803921568627451,0.25882352941176473,0.4392156862745098,A.t)
D.avO=w([D.aee,D.j8,D.Kr],x.O)
D.bVk=new B.a8(A.ax,A.aC,A.x,D.avO,null,null)
D.cwr=w([A.dx,A.dL],x.O)
D.bVv=new B.a8(A.b_,A.b5,A.x,D.cwr,null,null)
D.d4s=w([A.uX,AA.Eq],x.O)
D.bWl=new B.a8(A.a3,A.a7,A.x,D.d4s,null,null)
D.foL=new B.x("Which Bio link?",null,A.cy,null,null,null,null,null,null,null,null,null)
D.bWw=new B.pE(null,D.foL,null,null,null,null,null,null,null,null,!0,null,null,!1,null,null,null,!1,null,null,null,null,null,null,null,null,!0,null,null)
D.yA=w([82,9,106,213,48,54,165,56,191,64,163,158,129,243,215,251,124,227,57,130,155,47,255,135,52,142,67,68,196,222,233,203,84,123,148,50,166,194,35,61,238,76,149,11,66,250,195,78,8,46,161,102,40,217,36,178,118,91,162,73,109,139,209,37,114,248,246,100,134,104,152,22,212,164,92,204,93,101,182,146,108,112,72,80,253,237,185,218,94,21,70,87,167,141,157,132,144,216,171,0,140,188,211,10,247,228,88,5,184,179,69,6,208,44,30,143,202,63,15,2,193,175,189,3,1,19,138,107,58,145,17,65,79,103,220,234,151,242,207,206,240,180,230,115,150,172,116,34,231,173,53,133,226,249,55,232,28,117,223,110,71,241,26,113,29,41,197,137,111,183,98,14,170,24,190,27,252,86,62,75,198,210,121,32,154,219,192,254,120,205,90,244,31,221,168,51,136,7,199,49,177,18,16,89,39,128,236,95,96,81,127,169,25,181,74,13,45,229,122,159,147,201,156,239,160,224,59,77,174,42,245,176,200,235,187,60,131,83,153,97,23,43,4,126,186,119,214,38,225,105,20,99,85,33,12,125],x.t)
D.a4k=new C.kQ(2,"elegantNavy")
D.fY7=w([A.WE,D.j8,A.bZ],x.O)
D.jE=new C.xl(0,"classic")
D.a47=new C.jl("kuhowa_elegant_navy","Kuhowa \u2014 Bluu ya Kifalme",y.s,D.a4k,4294967035,4279378237,4290283019,D.jE)
D.aEZ=new C.kQ(3,"elegantGold")
D.b60=new B.w(1,1,0.9882352941176471,0.9529411764705882,A.t)
D.b6X=new B.w(1,0.6509803921568628,0.5176470588235295,0.22745098039215686,A.t)
D.acP=new B.w(1,0.4196078431372549,0.2901960784313726,0.07058823529411765,A.t)
D.fXA=w([D.b60,D.b6X,D.acP],x.O)
D.a45=new C.jl("kuhowa_elegant_gold","Kuhowa \u2014 Dhahabu",y.Q,D.aEZ,4294966515,4281016592,4289102906,D.jE)
D.dzN=new C.kQ(22,"goldRibbon")
D.fXw=w([A.WE,D.j8,A.hV],x.O)
D.a3Z=new C.jl("kuhowa_gold_ribbon","Utepe wa Dhahabu","Pembe za bluu na dhahabu \xb7 almasi kati ya kila upande.",D.dzN,4294967035,4279378237,4291404327,D.jE)
D.dzO=new C.kQ(23,"goldBaroque")
D.adq=new B.w(1,1,0.9647058823529412,0.8941176470588236,A.t)
D.fXC=w([D.adq,A.aw,A.ja],x.O)
D.a4_=new C.jl("kuhowa_gold_baroque","Ukanda wa Dhahabu","Ukanda mzito wa dhahabu \xb7 rosette kwenye pembe.",D.dzO,4294964964,4283053072,4292128567,D.jE)
D.dzQ=new C.kQ(4,"elegantEmerald")
D.b84=new B.w(1,0.9647058823529412,0.984313725490196,0.9725490196078431,A.t)
D.b8Y=new B.w(1,0.054901960784313725,0.23137254901960785,0.1803921568627451,A.t)
D.fXI=w([D.b84,D.b8Y,A.hV],x.O)
D.a40=new C.jl("kuhowa_elegant_emerald","Kuhowa \u2014 Zumaridi","Mpaka mwembamba wa dhahabu \xb7 vichwa vya kijani ya zumaridi.",D.dzQ,4294376440,4279122734,4291404327,D.jE)
D.dzR=new C.kQ(5,"elegantBurgundy")
D.bcu=new B.w(1,1,0.9686274509803922,0.9647058823529412,A.t)
D.fXP=w([D.bcu,A.ac5,A.hV],x.O)
D.a43=new C.jl("kuhowa_elegant_burgundy","Kuhowa \u2014 Mvinyo","Mpaka mwembamba wa dhahabu \xb7 vichwa vya rangi ya mvinyo.",D.dzR,4294965238,4283043359,4291404327,D.jE)
D.dzK=new C.kQ(19,"goldFiligree")
D.L2=new B.w(1,1,0.984313725490196,0.9529411764705882,A.t)
D.fXD=w([D.L2,A.aw,A.ja],x.O)
D.a41=new C.jl("kuhowa_gold_filigree","Dhahabu ya Filigree","Mpaka wa dhahabu mara tatu \xb7 pembe za mapambo.",D.dzK,4294966259,4279378237,4292128567,D.jE)
D.dzL=new C.kQ(20,"goldLaurel")
D.biR=new B.w(1,0.47843137254901963,0.3607843137254902,0.0784313725490196,A.t)
D.fXQ=w([A.Kj,A.hV,D.biR],x.O)
D.a42=new C.jl("kuhowa_gold_laurel","Taji ya Dhahabu","Majani ya dhahabu kando \xb7 almasi kwenye pembe.",D.dzL,4294966776,4282000405,4291404327,D.jE)
D.dzM=new C.kQ(21,"goldCrest")
D.abX=new B.w(1,1,0.9725490196078431,0.9254901960784314,A.t)
D.biY=new B.w(1,0.4196078431372549,0.30980392156862746,0.07058823529411765,A.t)
D.fXF=w([D.abX,A.aw,D.biY],x.O)
D.a46=new C.jl("kuhowa_gold_crest","Muhuri wa Dhahabu","Medali za dhahabu kwenye pembe \xb7 shanga za lulu.",D.dzM,4294965484,4283053072,4292128567,D.jE)
D.dzP=new C.kQ(24,"goldStar")
D.bk9=new B.w(1,1,0.9882352941176471,0.9647058823529412,A.t)
D.fXJ=w([D.bk9,A.aw,D.j8],x.O)
D.a44=new C.jl("kuhowa_gold_star","Nyota ya Dhahabu","Nyota za dhahabu kwenye pembe \xb7 mstari wa bluu ndani.",D.dzP,4294966518,4279378237,4292128567,D.jE)
D.Gs=w([D.a47,D.a45,D.a3Z,D.a4_,D.a40,D.a43,D.a41,D.a42,D.a46,D.a44],x.h)
D.q5=new C.mt(0,"blank")
D.Rs=new C.mt(1,"title")
D.mB=new C.mt(2,"titleContent")
D.dUp=new C.mt(3,"twoColumn")
D.Cx=new C.mt(4,"section")
D.dUq=new C.mt(5,"comparison")
D.HD=new C.mt(6,"flashcard")
D.HE=new C.mt(7,"quiz")
D.HF=new C.mt(8,"worksheet")
D.aog=w([D.q5,D.Rs,D.mB,D.dUp,D.Cx,D.dUq,D.HD,D.HE,D.HF],B.ax("O<mt>"))
D.awO=w([Ap.W1,A.dL],x.O)
D.kp=w([A.bZ,A.bK,A.hU,A.hG,D.AB],x.O)
D.dvH=new C.iX("fireworks","Royal Fireworks","Thank you for celebrating with us",D.awO,D.kp)
D.bj9=new B.w(1,0.2901960784313726,0.050980392156862744,0.11764705882352941,A.t)
D.bcs=new B.w(1,0.07058823529411765,0.011764705882352941,0.0392156862745098,A.t)
D.cRy=w([D.bj9,D.bcs],x.O)
D.dvy=new C.iX("confetti","Golden Confetti","Together we rise",D.cRy,D.kp)
D.cOL=w([A.nD,A.VH],x.O)
D.dvz=new C.iX("crown","Crown of Glory","Built for our community",D.cOL,D.kp)
D.b9i=new B.w(1,0.011764705882352941,0.10588235294117647,0.1803921568627451,A.t)
D.bc7=new B.w(1,0.00392156862745098,0.023529411764705882,0.058823529411764705,A.t)
D.cVq=w([D.b9i,D.bc7],x.O)
D.u1=w([A.bJ,A.aP,A.c,A.aL,A.ak],x.O)
D.dvt=new C.iX("aurora","Aurora Gala","A brighter future, together",D.cVq,D.u1)
D.bdv=new B.w(1,0.027450980392156862,0.01568627450980392,0.00392156862745098,A.t)
D.d4y=w([G.abA,D.bdv],x.O)
D.dvK=new C.iX("champagne","Champagne Toast","Cheers to every member",D.d4y,D.kp)
D.dvL=new C.iX("diamonds","Diamond Rain","Every member is a jewel",X.axo,D.u1)
D.b6O=new B.w(1,0.3568627450980392,0.16470588235294117,0.023529411764705882,A.t)
D.bbD=new B.w(1,0.10196078431372549,0.043137254901960784,0.00784313725490196,A.t)
D.d9p=w([D.b6O,D.bbD],x.O)
D.dvo=new C.iX("starburst","Golden Starburst","Thank you!",D.d9p,D.kp)
D.bWF=w([A.f7,A.x7],x.O)
D.abJ=new B.w(1,0.615686274509804,0.3058823529411765,0.3607843137254902,A.t)
D.Pr=w([A.ou,A.iq,A.v8,A.mQ,D.abJ],x.O)
D.dvS=new C.iX("balloons","Luxury Balloons","Let's celebrate",D.bWF,D.Pr)
D.cO3=w([A.VQ,A.w],x.O)
D.dvG=new C.iX("galaxy","Galaxy Spiral","The sky is not the limit",D.cO3,D.u1)
D.bhf=new B.w(1,0.047058823529411764,0.00392156862745098,0.00392156862745098,A.t)
D.d1c=w([A.kg,D.bhf],x.O)
D.dvB=new C.iX("redcarpet","Red Carpet","Tonight we shine",D.d1c,D.kp)
D.bf7=new B.w(1,0.10980392156862745,0.0784313725490196,0.0196078431372549,A.t)
D.bdi=new B.w(1,0.0196078431372549,0.011764705882352941,0.00392156862745098,A.t)
D.d5s=w([D.bf7,D.bdi],x.O)
D.dvq=new C.iX("coins","Gold Coin Rain","Every contribution counts",D.d5s,D.kp)
D.dc0=w([A.dx,A.hF],x.O)
D.dvw=new C.iX("lanterns","Sky Lanterns","Lighting the way together",D.dc0,D.kp)
D.bae=new B.w(1,0.0784313725490196,0.00784313725490196,0.0392156862745098,A.t)
D.cM4=w([A.x9,D.bae],x.O)
D.dvs=new C.iX("hearts","Floating Hearts","Made with love",D.cM4,D.Pr)
D.b7n=new B.w(1,0.23137254901960785,0.0392156862745098,0.10980392156862745,A.t)
D.b8a=new B.w(1,0.058823529411764705,0.00784313725490196,0.027450980392156862,A.t)
D.ddr=w([D.b7n,D.b8a],x.O)
D.dvR=new C.iX("petals","Rose Petals","Thank you, from our hearts",D.ddr,D.Pr)
D.bia=new B.w(1,0.00784313725490196,0.06274509803921569,0.0392156862745098,A.t)
D.d9J=w([A.l9,D.bia],x.O)
D.dvn=new C.iX("butterflies","Golden Butterflies","New beginnings",D.d9J,D.kp)
D.ber=new B.w(1,0.0392156862745098,0.0392156862745098,0.12156862745098039,A.t)
D.cN0=w([D.ber,A.w],x.O)
D.dvJ=new C.iX("neon","Neon Night","Let's go!",D.cN0,D.u1)
D.bbl=new B.w(1,0.0196078431372549,0.00392156862745098,0.050980392156862744,A.t)
D.d7q=w([A.KH,D.bbl],x.O)
D.dvM=new C.iX("disco","Disco Ball","Party time",D.d7q,D.u1)
D.bf_=new B.w(1,0.11764705882352941,0.0392156862745098,0.1803921568627451,A.t)
D.d6Y=w([A.hu,D.bf_],x.O)
D.dvr=new C.iX("sunrise","Golden Sunrise","A new day for our community",D.d6Y,D.kp)
D.d6B=w([A.qI,A.dL],x.O)
D.dvN=new C.iX("pearls","Ocean Pearls","Deep roots, bright future",D.d6B,D.u1)
D.b9n=new B.w(1,0.047058823529411764,0.11764705882352941,0.22745098039215686,A.t)
D.d6P=w([D.b9n,A.dL],x.O)
D.dvQ=new C.iX("snow","Winter Gala","Warm wishes to all",D.d6P,D.u1)
D.b6a=new B.w(1,0.0784313725490196,0.13725490196078433,0.10196078431372549,A.t)
D.b77=new B.w(1,0.01568627450980392,0.03137254901960784,0.0196078431372549,A.t)
D.dco=w([D.b6a,D.b77],x.O)
D.dvF=new C.iX("laurel","Laurel Victory","We did it together",D.dco,D.kp)
D.b6_=new B.w(1,0.12156862745098039,0.06274509803921569,0.2,A.t)
D.bc3=new B.w(1,0.027450980392156862,0.011764705882352941,0.050980392156862744,A.t)
D.cLc=w([D.b6_,D.bc3],x.O)
D.dvP=new C.iX("ribbons","Silk Ribbons","Elegance in every step",D.cLc,D.kp)
D.bd2=new B.w(1,0.023529411764705882,0.01568627450980392,0.00784313725490196,A.t)
D.cwo=w([G.AA,D.bd2],x.O)
D.dvC=new C.iX("kente","Kente Pride","Proud of our roots",D.cwo,D.kp)
D.bfG=new B.w(1,0.1411764705882353,0.10196078431372549,0.0196078431372549,A.t)
D.biu=new B.w(1,0.027450980392156862,0.0196078431372549,0.00392156862745098,A.t)
D.cX1=w([D.bfG,D.biu],x.O)
D.dvx=new C.iX("trophy","Trophy Shine","Winners together",D.cX1,D.kp)
D.d6V=w([Aq.Kw,A.w],x.O)
D.dvp=new C.iX("shooting","Shooting Stars","Make a wish",D.d6V,D.u1)
D.b6h=new B.w(1,0.10980392156862745,0.07058823529411765,0.023529411764705882,A.t)
D.af3=new B.w(1,0.0196078431372549,0.011764705882352941,0.00784313725490196,A.t)
D.dcE=w([D.b6h,D.af3],x.O)
D.dvD=new C.iX("bokeh","Golden Bokeh","Shine bright",D.dcE,D.kp)
D.b6D=new B.w(1,0.0392156862745098,0.058823529411764705,0.1411764705882353,A.t)
D.d20=w([D.b6D,A.w],x.O)
D.dvv=new C.iX("orbits","Golden Orbits","Always moving forward",D.d20,D.kp)
D.bib=new B.w(1,0.0392156862745098,0.011764705882352941,0.047058823529411764,A.t)
D.cZH=w([A.acL,D.bib],x.O)
D.dvA=new C.iX("flowers","Blooming Garden","Growing together",D.cZH,D.Pr)
D.b6q=new B.w(1,0.07450980392156863,0.027450980392156862,0.1803921568627451,A.t)
D.b71=new B.w(1,0.00784313725490196,0.00392156862745098,0.03137254901960784,A.t)
D.dbu=w([D.b6q,D.b71],x.O)
D.dvu=new C.iX("music","Music Party","Celebrate with us",D.dbu,D.u1)
D.b7V=new B.w(1,0.16470588235294117,0.0392156862745098,0.22745098039215686,A.t)
D.biU=new B.w(1,0.027450980392156862,0.00784313725490196,0.047058823529411764,A.t)
D.cMg=w([D.b7V,D.biU],x.O)
D.dvO=new C.iX("mandala","Royal Mandala","Harmony and unity",D.cMg,D.kp)
D.cZM=w([G.AA,D.af3],x.O)
D.dvI=new C.iX("sparklers","Golden Sparklers","Light up the night",D.cZM,D.kp)
D.dvE=new C.iX("city","City Lights","The whole city celebrates",D.awO,D.kp)
D.GB=w([D.dvH,D.dvy,D.dvz,D.dvt,D.dvK,D.dvL,D.dvo,D.dvS,D.dvG,D.dvB,D.dvq,D.dvw,D.dvs,D.dvR,D.dvn,D.dvJ,D.dvM,D.dvr,D.dvN,D.dvQ,D.dvF,D.dvP,D.dvC,D.dvx,D.dvp,D.dvD,D.dvv,D.dvA,D.dvu,D.dvO,D.dvI,D.dvE],B.ax("O<iX>"))
D.ehZ=new B.y("","No ring")
D.ewH=new B.y("platinum","Platinum")
D.etz=new B.y("glow","Glow")
D.elm=new B.y("double","Double line")
D.ekh=new B.y("framed","Gallery frame")
D.ehC=new B.y("rosegold","Rose gold")
D.euj=new B.y("jewels","Jeweled")
D.er2=new B.y("aurora","Aurora")
D.BT=w([D.ehZ,A.a5B,D.ewH,D.etz,H.aLu,D.elm,A.a5D,D.ekh,D.ehC,D.euj,D.er2],x.L)
D.cg3=w([D.a41,D.a42,D.a46,D.a3Z,D.a4_,D.a44],x.h)
D.bLu=new B.ae(G.ajl,16,null,null,null,null)
D.b1k=new B.vl(A.bg,D.bLu,null,x.U)
D.bAk=new B.a0(58027,"MaterialIcons",!1)
D.bFa=new B.ae(D.bAk,16,null,null,null,null)
D.b1i=new B.vl(A.L,D.bFa,null,x.U)
D.bAl=new B.a0(58030,"MaterialIcons",!1)
D.bJd=new B.ae(D.bAl,16,null,null,null,null)
D.b1l=new B.vl(A.dM,D.bJd,null,x.U)
D.cmd=w([D.b1k,D.b1i,D.b1l],B.ax("O<vl<pU>>"))
D.ctN=w([A.AG,A.hi],x.O)
D.ctO=w([A.b1,A.bo,A.f3],x.O)
D.Pf=w([A.bK,A.hG,A.hU,A.aw,A.mQ],x.O)
D.cwu=w([A.bZ,D.j8,D.Kr],x.O)
D.cx1=w([1,2,4,8,16,32,64,128,27,54,108,216,171,77,154,47,94,188,99,198,151,53,106,212,179,125,250,239,197,145],x.t)
D.efB=new B.y(4278913286,4280030216)
D.efT=new B.y(4279373061,4278518787)
D.eg_=new B.y(4279898630,4278847235)
D.cWr=w([D.efB,D.efT,D.eg_],x.n)
D.cSe=w(["\u265b","\u269c","\u2726"],x.s)
D.dzI=new C.xn("Royal Onyx & Gold",D.cWr,4292128567,4294370209,4294965479,3874020544,D.cSe)
D.efo=new B.y(4278326799,4278598442)
D.efq=new B.y(4278395929,4278258953)
D.efx=new B.y(4278599728,4278327826)
D.dbS=w([D.efo,D.efq,D.efx],x.n)
D.cMT=w(["\u269c","\u2756","\u2727"],x.s)
D.dzF=new C.xn("Imperial Emerald",D.dbS,4293050997,4294699968,4294180856,3872254170,D.cMT)
D.efr=new B.y(4278455076,4278918747)
D.efw=new B.y(4278587439,4278322714)
D.efK=new B.y(4279051376,4278455076)
D.da3=w([D.efr,D.efw,D.efK],x.n)
D.d2C=w(["\u2654","\u2726","\u2748"],x.s)
D.dzz=new C.xn("Sapphire Crown",D.da3,4291417834,4294967295,4294310143,3871986666,D.d2C)
D.efY=new B.y(4279894534,4283041554)
D.eg9=new B.y(4281008906,4279042307)
D.egh=new B.y(4284221976,4279894534)
D.dfu=w([D.efY,D.eg9,D.egh],x.n)
D.cOc=w(["\u265b","\u2766","\u2726"],x.s)
D.dzB=new C.xn("Ruby Throne",D.dfu,4293378685,4294963145,4294964466,3874213833,D.cOc)
D.efS=new B.y(4279371039,4281995100)
D.eg1=new B.y(4280092723,4278714896)
D.ege=new B.y(4283045242,4279371039)
D.dcd=w([D.efS,D.eg1,D.ege],x.n)
D.dap=w(["\u2655","\u2756","\u2727"],x.s)
D.dzG=new C.xn("Amethyst Palace",D.dcd,4293314984,4294963421,4294702591,3873229802,D.dap)
D.eft=new B.y(4278519045,4280032287)
D.efL=new B.y(4279111184,4278321666)
D.eg6=new B.y(4280492839,4278716426)
D.d8X=w([D.eft,D.efL,D.eg6],x.n)
D.d1_=w(["\u2726","\u25c6","\u2742"],x.s)
D.dzD=new C.xn("Obsidian & Platinum",D.d8X,4293256418,4294967295,4294638330,3872378836,D.d1_)
D.efZ=new B.y(4279896588,4282194463)
D.eg7=new B.y(4280553487,4279043334)
D.egf=new B.y(4283048488,4279896588)
D.d0u=w([D.efZ,D.eg7,D.egf],x.n)
D.ddP=w(["\u2766","\u273f","\u2727"],x.s)
D.dzA=new C.xn("Rose Gold Velvet",D.d0u,4293440672,4294960345,4294964979,3874214602,D.ddP)
D.efu=new B.y(4278520340,4279180595)
D.efz=new B.y(4278718495,4278322443)
D.efW=new B.y(4279510591,4278520340)
D.cDc=w([D.efu,D.efz,D.efW],x.n)
D.d1F=w(["\u269c","\u2736","\u2756"],x.s)
D.dzE=new C.xn("Midnight Brass",D.cDc,4291405148,4293975208,4294439914,3872837564,D.d1F)
D.egu=new B.y(4294703086,4293780428)
D.egq=new B.y(4294307549,4293187253)
D.egv=new B.y(4294966517,4293977807)
D.cQi=w([D.egu,D.egq,D.egv],x.n)
D.d23=w(["\u269c","\u265b","\u2726"],x.s)
D.dzH=new C.xn("Ivory Marble & Gold",D.cQi,4289760572,4286209048,4280951062,3863625518,D.d23)
D.efF=new B.y(4278978566,4280555024)
D.efV=new B.y(4279504137,4278518530)
D.egb=new B.y(4281211923,4278978566)
D.cO2=w([D.efF,D.efV,D.egb],x.n)
D.db7=w(["\u2742","\u2726","\u265c"],x.s)
D.dzC=new C.xn("Onyx & Copper",D.cO2,4291856987,4294365880,4294964718,3873885630,D.db7)
D.cx9=w([D.dzI,D.dzF,D.dzz,D.dzB,D.dzG,D.dzD,D.dzA,D.dzE,D.dzH,D.dzC],B.ax("O<xn>"))
D.czr=w([A.aw,D.AB,A.hG],x.O)
D.ens=new B.y("Original",null)
D.enA=new B.y("Wide 16:9",1.7777777777777777)
D.epO=new B.y("Landscape 3:2",1.5)
D.emW=new B.y("Photo 4:3",1.3333333333333333)
D.eoD=new B.y("Square",1)
D.eAg=new B.y("Portrait 3:4",0.75)
D.auf=w([D.ens,D.enA,D.epO,D.emW,D.eoD,D.eAg],B.ax("O<+(n,N?)>"))
D.aug=w([A.hG,A.bV,A.b8,A.bu],x.O)
D.epY=new B.y("","Original")
D.erM=new B.y("circle","Circle")
D.exr=new B.y("rounded","Rounded")
D.eyl=new B.y("triangle","Triangle")
D.etN=new B.y("hexagon","Hexagon")
D.esa=new B.y("diamond","Diamond")
D.er1=new B.y("arch","Arch")
D.BY=w([D.epY,D.erM,D.exr,D.eyl,D.etN,D.esa,D.er1],x.L)
D.duM=new C.la("classic_blue","Classic Blue","Normal",A.bj,A.c,A.ki,A.dr,A.aK)
D.dv1=new C.la("campus_green","Campus Green","Normal",A.aZ,A.mX,A.tb,A.h5,A.eo)
D.duT=new C.la("warm_sand","Warm Sand","Normal",A.dT,A.hU,A.bK,A.iv,A.nH)
D.dv_=new C.la("slate_minimal","Slate Minimal","Normal",A.bv,A.aP,A.aL,A.M,A.aK)
D.duL=new C.la("coral_fresh","Coral Fresh","Normal",A.ci,A.is,A.qA,A.jR,A.t5)
D.dv0=new C.la("lavender_calm","Lavender Calm","Normal",A.b7,A.pn,A.Ap,A.pq,A.jq)
D.duN=new C.la("ocean_breeze","Ocean Breeze","Normal",A.f8,A.qO,A.t0,A.uZ,A.nI)
D.aek=new B.w(1,0.9803921568627451,0.9607843137254902,1,A.t)
D.duY=new C.la("berry_pop","Berry Pop","Normal",A.fi,D.aek,A.kc,G.X7,A.EM)
D.duO=new C.la("midnight_pro","Midnight Pro","Professional",A.aE,A.M,A.dx,A.kc,A.cq)
D.duX=new C.la("executive_navy","Executive Navy","Professional",A.d6,A.adF,A.dr,A.l7,A.bJ)
D.duV=new C.la("boardroom_charcoal","Boardroom Charcoal","Professional",A.ak,A.bm,A.M,A.aP,A.cq)
D.duP=new C.la("corporate_steel","Corporate Steel","Professional",A.mV,A.M,A.mf,A.fb,A.bJ)
D.duS=new C.la("gold_luxe","Gold Luxe","Luxury",A.mU,A.dH,A.ot,A.lD,A.bK)
D.bf3=new B.w(1,0.10196078431372549,0.0392156862745098,0.058823529411764705,A.t)
D.duW=new C.la("rose_gold_elite","Rose Gold Elite","Luxury",A.hi,D.bf3,A.WY,A.iq,A.mQ)
D.duZ=new C.la("platinum_night","Platinum Night","Luxury",A.cq,A.dL,A.bm,A.aP,A.aL)
D.dv2=new C.la("emerald_prestige","Emerald Prestige","Luxury",A.aV,A.pt,A.eY,A.pB,A.jr)
D.duK=new C.la("royal_purple","Royal Purple","Luxury",A.mW,A.W8,A.jq,A.kc,A.Ki)
D.duU=new C.la("neon_pitch","Neon Pitch","Bold",A.b8,A.dL,A.M,A.b3,A.aL)
D.duR=new C.la("crimson_impact","Crimson Impact","Bold",A.bI,A.kg,A.es,A.tm,A.f4)
D.duQ=new C.la("sunset_gallery","Sunset Gallery","Bold",A.fo,A.t5,A.jR,A.qA,A.me)
D.GK=w([D.duM,D.dv1,D.duT,D.dv_,D.duL,D.dv0,D.duN,D.duY,D.duO,D.duX,D.duV,D.duP,D.duS,D.duW,D.duZ,D.dv2,D.duK,D.duU,D.duR,D.duQ],B.ax("O<la>"))
D.cKU=w([A.bZ,D.j8],x.O)
D.d0K=w(["\ud83d\ude00","\ud83d\ude03","\ud83d\ude04","\ud83d\ude01","\ud83d\ude0a","\ud83d\ude0e","\ud83e\udd29","\ud83e\udd73","\ud83d\ude07","\ud83e\udd17","\ud83d\ude4c","\ud83d\udc4f","\ud83e\udd1d","\ud83d\udc4d","\ud83d\udc4b","\ud83d\udcaa","\ud83d\ude4f","\u2728"],x.s)
D.eqO=new B.y("Faces & people",D.d0K)
D.czv=w(["\ud83d\udca1","\ud83c\udfaf","\ud83d\ude80","\ud83d\udcc8","\ud83d\udcca","\ud83d\udccc","\ud83d\udccd","\ud83d\udce3","\ud83d\udd14","\ud83e\udded","\ud83d\udee0\ufe0f","\ud83d\udd27","\u2699\ufe0f","\ud83e\udde0","\ud83d\udcda","\ud83d\udcdd","\u270f\ufe0f","\ud83d\udcd6","\ud83d\uddc2\ufe0f","\ud83d\udcc5","\u23f0","\u2705","\u274c","\u26a0\ufe0f","\u2753","\u2757"],x.s)
D.eeo=new B.y("Ideas & work",D.czv)
D.cSK=w(["\ud83c\udf3f","\ud83c\udf31","\ud83c\udf33","\ud83c\udf38","\ud83c\udf3c","\ud83c\udf3b","\ud83c\udf1e","\ud83c\udf08","\ud83c\udf0a","\ud83d\udd25","\ud83d\udca7","\u2744\ufe0f","\ud83c\udf19","\u2b50","\ud83c\udf1f","\u2600\ufe0f","\ud83c\udf40"],x.s)
D.etS=new B.y("Nature",D.cSK)
D.d0T=w(["\ud83c\udfe0","\ud83c\udfeb","\ud83c\udfe5","\ud83c\udfe6","\ud83c\udfea","\ud83d\ude97","\ud83d\ude8c","\u2708\ufe0f","\ud83c\udf81","\ud83d\udcb0","\ud83d\udcb5","\ud83d\udcb3","\ud83d\uded2","\ud83c\udfc6","\ud83e\udd47","\ud83c\udf89","\ud83c\udf88","\ud83c\udfb6","\ud83c\udfb5","\ud83c\udfa4","\ud83d\udcf7","\ud83c\udfac","\ud83d\uddbc\ufe0f","\ud83d\udcbb","\ud83d\udcf1"],x.s)
D.enq=new B.y("Places & things",D.d0T)
D.cW0=w(["\u2764\ufe0f","\ud83d\udc9a","\ud83d\udc99","\ud83d\udc9c","\ud83e\udde1","\ud83d\udc9b","\ud83d\udda4","\ud83e\udd0d","\u2b06\ufe0f","\u27a1\ufe0f","\ud83d\udd36","\ud83d\udd37","\ud83d\udd34","\ud83d\udfe2","\ud83d\udd35","\ud83d\udfe1"],x.s)
D.er6=new B.y("Symbols",D.cW0)
D.cL_=w([D.eqO,D.eeo,D.etS,D.enq,D.er6],B.ax("O<+(n,ai<n>)>"))
D.b6v=new B.w(1,0.22745098039215686,0.15294117647058825,0.03137254901960784,A.t)
D.cLn=w([A.bZ,D.acP,D.b6v],x.O)
D.b0G=new B.ac(0,A.G,A.Kf,A.aFO,40)
D.b0n=new B.ac(0,A.G,A.nF,A.ek,8)
D.cLz=w([D.b0G,D.b0n],x.V)
D.cM0=w([4280171146,4280640491,4279080072,4278556265],x.t)
D.auF=w([4294677052,4294626325,4293870660,4294210230,4287323382,4282090230,4280472558,4283096704,4294967295,4279310375],x.t)
D.a1H=w([A.hG,A.f3,A.bI,A.aB,A.ci],x.O)
D.cMN=w(["All","Robotic","Nature","Warm","Bold","Clean"],x.s)
D.ad2=new B.w(1,0.043137254901960784,0.0392156862745098,0.03137254901960784,A.t)
D.cMY=w([A.WO,D.ad2,A.WO],x.O)
D.cN3=w([A.hV,D.j8,D.Kr],x.O)
D.ene=new B.y(A.bg,D.a_s)
D.eoy=new B.y(A.L,D.a_r)
D.eiB=new B.y(A.dM,D.a_t)
D.cNY=w([D.ene,D.eoy,D.eiB],B.ax("O<+(pU,a0)>"))
D.cQ=new C.Ip(0,"text")
D.lq=new C.Ip(1,"image")
D.f0=new C.Ip(2,"shape")
D.Rr=new C.Ip(3,"pdf")
D.kX=new C.Ip(4,"signature")
D.a4r=new C.Ip(5,"bio")
D.cOQ=w([D.cQ,D.lq,D.f0,D.Rr,D.kX,D.a4r],B.ax("O<Ip>"))
D.cOR=w([A.bl,A.cF],B.ax("O<Hl>"))
D.cPs=w(["School","Documents","Sign & present"],x.s)
D.b0L=new B.ac(0,A.G,A.aeU,A.uj,28)
D.cPM=w([D.b0L],x.V)
D.cQ4=w([4292128567,4279983648,4290190364,4279898632,4293436183,4279060385],x.t)
D.Pz=w(["Rocket","Trophy","Party popper","Confetti ball","Balloon","Wrapped gift","Birthday cake","Sparkles","Star","Glowing star","Fire","Light bulb","Gem stone","Crown","Money bag","Dollar banknote","Chart increasing","Bar chart","Bullseye","Globe showing americas","Globe showing europe-africa","Sun","Rainbow","Cloud","High voltage","Red heart","Handshake","Graduation cap","Books","Open book","Pencil","Laptop","Mobile phone","Microphone","Musical notes","Camera","Video camera","Megaphone","Bell","Calendar","Alarm clock","Hourglass done","Key","Locked","Shield","Gear","Hammer and wrench","Magnifying glass tilted left","Package","Shopping cart","House","Office building","Hospital","Ballot box with ballot","Automobile","Airplane","Seedling","Deciduous tree","Evergreen tree","Palm tree","Sunflower","Cherry blossom","Herb","Four leaf clover","Water wave","Mountain","Lion","Tiger face","Dog face","Cat face","Elephant","Unicorn","Butterfly","Honeybee","Owl","Eagle","Dolphin","Turtle","Panda","Fox","Rabbit face","Monkey face","Penguin","Horse","Bird","Peacock","Parrot","Red apple","Pizza","Hot beverage","Soccer ball","Basketball","Artist palette","Clapper board","Robot","Brain","Check mark button","Red question mark","Speech balloon","Compass","Crystal ball","Puzzle piece","1st place medal","Smiling face with sunglasses","Grinning face with big eyes","Star-struck","Partying face","Thinking face","Hundred points"],x.s)
D.av3=w([A.hG,A.EL,A.aL,A.c,A.ou,A.aw],x.O)
D.ezE=new B.y(0.1,0.08)
D.etQ=new B.y(0.3,0.05)
D.ei8=new B.y(0.55,0.1)
D.eme=new B.y(0.8,0.06)
D.eph=new B.y(0.92,0.16)
D.eoN=new B.y(0.2,0.2)
D.emH=new B.y(0.7,0.22)
D.esx=new B.y(0.05,0.4)
D.epG=new B.y(0.95,0.45)
D.eiQ=new B.y(0.12,0.7)
D.el0=new B.y(0.88,0.75)
D.el8=new B.y(0.4,0.9)
D.egK=new B.y(0.65,0.93)
D.elR=new B.y(0.25,0.97)
D.enb=new B.y(0.85,0.9)
D.ejF=new B.y(0.5,0.04)
D.cRt=w([D.ezE,D.etQ,D.ei8,D.eme,D.eph,D.eoN,D.emH,D.esx,D.epG,D.eiQ,D.el0,D.el8,D.egK,D.elR,D.enb,D.ejF],x.G)
D.cRA=w([A.c,A.hi,A.aS,A.aV],x.O)
D.dW1=new C.jD("office_blue","Office Blue",A.bj,A.dr,A.aK,A.c,A.ki)
D.dWc=new C.jD("campus_green","Campus Green",A.aZ,A.h5,A.eo,A.mX,A.tb)
D.dW2=new C.jD("sunset","Sunset",A.fo,A.jR,A.nH,A.is,A.qA)
D.dW3=new C.jD("midnight","Midnight",A.aE,A.kc,A.cq,A.M,A.dx)
D.dWe=new C.jD("classic","Classic",A.d8,A.dH,A.lE,A.hU,A.h3)
D.dWb=new C.jD("rose_gold","Rose Gold",A.hi,A.xa,A.x9,A.v8,A.AG)
D.dVX=new C.jD("ocean_teal","Ocean Teal",A.f8,A.uZ,A.nI,A.qO,A.t0)
D.dVW=new C.jD("slate_pro","Slate Pro",A.bv,A.M,A.aK,A.aP,A.aL)
D.dVV=new C.jD("neon_night","Neon Night",A.b8,A.b3,A.aL,A.dL,A.M)
D.dW6=new C.jD("lavender","Lavender",A.b7,A.pq,A.jq,A.pn,A.Ap)
D.dW8=new C.jD("coral","Coral",A.ci,A.jR,A.t5,A.is,A.me)
D.dVY=new C.jD("forest","Forest",A.hj,A.e3,A.cD,A.lF,A.et)
D.dVZ=new C.jD("berry","Berry",A.fi,G.X7,A.EM,D.aek,A.kc)
D.dW5=new C.jD("sand","Sand",A.dT,A.iv,A.nH,A.hU,A.bK)
D.dWa=new C.jD("ice","Ice",A.mV,A.KI,A.aK,A.mS,A.fb)
D.dW0=new C.jD("charcoal","Charcoal",A.ak,A.aP,A.cq,A.bm,A.M)
D.dVU=new C.jD("mint","Mint",A.aV,A.fw,A.h5,A.lF,A.pB)
D.dW9=new C.jD("crimson","Crimson",A.bI,A.mZ,A.kg,A.EJ,A.tm)
D.b8X=new B.w(1,0.996078431372549,0.9882352941176471,0.9098039215686274,A.t)
D.dW4=new C.jD("gold","Gold",A.mU,A.uX,A.ot,D.b8X,A.lD)
D.dW7=new C.jD("aqua","Aqua",A.bN,A.Ez,A.or,A.pp,A.ov)
D.dW_=new C.jD("plum","Plum",A.mW,A.x7,A.EM,A.Em,A.qM)
D.dWd=new C.jD("steel","Steel",A.d6,A.dr,A.bm,A.ki,A.l7)
D.a1W=w([D.dW1,D.dWc,D.dW2,D.dW3,D.dWe,D.dWb,D.dVX,D.dVW,D.dVV,D.dW6,D.dW8,D.dVY,D.dVZ,D.dW5,D.dWa,D.dW0,D.dVU,D.dW9,D.dW4,D.dW7,D.dW_,D.dWd],B.ax("O<jD>"))
D.cRV=w([A.bZ,A.ja],x.O)
D.Rt=new C.hx(10,"rotate3d")
D.HH=new C.hx(8,"flip")
D.aFh=new C.hx(19,"spiral")
D.q6=new C.hx(16,"bounce")
D.aFk=new C.hx(9,"flipVertical")
D.cRW=w([D.Rt,D.HH,D.aFh,D.q6,D.aFk],x.i)
D.e6=w([1353184337,1399144830,3282310938,2522752826,3412831035,4047871263,2874735276,2466505547,1442459680,4134368941,2440481928,625738485,4242007375,3620416197,2151953702,2409849525,1230680542,1729870373,2551114309,3787521629,41234371,317738113,2744600205,3338261355,3881799427,2510066197,3950669247,3663286933,763608788,3542185048,694804553,1154009486,1787413109,2021232372,1799248025,3715217703,3058688446,397248752,1722556617,3023752829,407560035,2184256229,1613975959,1165972322,3765920945,2226023355,480281086,2485848313,1483229296,436028815,2272059028,3086515026,601060267,3791801202,1468997603,715871590,120122290,63092015,2591802758,2768779219,4068943920,2997206819,3127509762,1552029421,723308426,2461301159,4042393587,2715969870,3455375973,3586000134,526529745,2331944644,2639474228,2689987490,853641733,1978398372,971801355,2867814464,111112542,1360031421,4186579262,1023860118,2919579357,1186850381,3045938321,90031217,1876166148,4279586912,620468249,2548678102,3426959497,2006899047,3175278768,2290845959,945494503,3689859193,1191869601,3910091388,3374220536,0,2206629897,1223502642,2893025566,1316117100,4227796733,1446544655,517320253,658058550,1691946762,564550760,3511966619,976107044,2976320012,266819475,3533106868,2660342555,1338359936,2720062561,1766553434,370807324,179999714,3844776128,1138762300,488053522,185403662,2915535858,3114841645,3366526484,2233069911,1275557295,3151862254,4250959779,2670068215,3170202204,3309004356,880737115,1982415755,3703972811,1761406390,1676797112,3403428311,277177154,1076008723,538035844,2099530373,4164795346,288553390,1839278535,1261411869,4080055004,3964831245,3504587127,1813426987,2579067049,4199060497,577038663,3297574056,440397984,3626794326,4019204898,3343796615,3251714265,4272081548,906744984,3481400742,685669029,646887386,2764025151,3835509292,227702864,2613862250,1648787028,3256061430,3904428176,1593260334,4121936770,3196083615,2090061929,2838353263,3004310991,999926984,2809993232,1852021992,2075868123,158869197,4095236462,28809964,2828685187,1701746150,2129067946,147831841,3873969647,3650873274,3459673930,3557400554,3598495785,2947720241,824393514,815048134,3227951669,935087732,2798289660,2966458592,366520115,1251476721,4158319681,240176511,804688151,2379631990,1303441219,1414376140,3741619940,3820343710,461924940,3089050817,2136040774,82468509,1563790337,1937016826,776014843,1511876531,1389550482,861278441,323475053,2355222426,2047648055,2383738969,2302415851,3995576782,902390199,3991215329,1018251130,1507840668,1064563285,2043548696,3208103795,3939366739,1537932639,342834655,2262516856,2180231114,1053059257,741614648,1598071746,1925389590,203809468,2336832552,1100287487,1895934009,3736275976,2632234200,2428589668,1636092795,1890988757,1952214088,1113045200],x.t)
D.cSh=w([0.62,1],x.x)
D.cSS=w([0,0.32,0.68,1],x.x)
D.mC=new C.hx(6,"zoom")
D.ud=new C.hx(4,"slideUp")
D.uc=new C.hx(2,"slideLeft")
D.cT0=w([D.mC,D.HH,D.ud,D.Rt,D.uc],x.i)
D.cTv=w([A.bV,A.hi,A.iq,A.hG,A.c],x.O)
D.b0B=new B.ac(0,A.G,D.adf,A.uj,30)
D.cUc=w([D.b0B],x.V)
D.e4D=new B.u(0,-2.5)
D.e4t=new B.u(-2.5,0)
D.e3b=new B.u(2.5,0)
D.cUf=w([A.RJ,A.a4O,A.aGj,A.a4N,D.e4D,H.aGf,D.e4t,D.e3b],x.dN)
D.GR=w([0,79764919,159529838,222504665,319059676,398814059,445009330,507990021,638119352,583659535,797628118,726387553,890018660,835552979,1015980042,944750013,1276238704,1221641927,1167319070,1095957929,1595256236,1540665371,1452775106,1381403509,1780037320,1859660671,1671105958,1733955601,2031960084,2111593891,1889500026,1952343757,2552477408,2632100695,2443283854,2506133561,2334638140,2414271883,2191915858,2254759653,3190512472,3135915759,3081330742,3009969537,2905550212,2850959411,2762807018,2691435357,3560074640,3505614887,3719321342,3648080713,3342211916,3287746299,3467911202,3396681109,4063920168,4143685023,4223187782,4286162673,3779000052,3858754371,3904687514,3967668269,881225847,809987520,1023691545,969234094,662832811,591600412,771767749,717299826,311336399,374308984,453813921,533576470,25881363,88864420,134795389,214552010,2023205639,2086057648,1897238633,1976864222,1804852699,1867694188,1645340341,1724971778,1587496639,1516133128,1461550545,1406951526,1302016099,1230646740,1142491917,1087903418,2896545431,2825181984,2770861561,2716262478,3215044683,3143675388,3055782693,3001194130,2326604591,2389456536,2200899649,2280525302,2578013683,2640855108,2418763421,2498394922,3769900519,3832873040,3912640137,3992402750,4088425275,4151408268,4197601365,4277358050,3334271071,3263032808,3476998961,3422541446,3585640067,3514407732,3694837229,3640369242,1762451694,1842216281,1619975040,1682949687,2047383090,2127137669,1938468188,2001449195,1325665622,1271206113,1183200824,1111960463,1543535498,1489069629,1434599652,1363369299,622672798,568075817,748617968,677256519,907627842,853037301,1067152940,995781531,51762726,131386257,177728840,240578815,269590778,349224269,429104020,491947555,4046411278,4126034873,4172115296,4234965207,3794477266,3874110821,3953728444,4016571915,3609705398,3555108353,3735388376,3664026991,3290680682,3236090077,3449943556,3378572211,3174993278,3120533705,3032266256,2961025959,2923101090,2868635157,2813903052,2742672763,2604032198,2683796849,2461293480,2524268063,2284983834,2364738477,2175806836,2238787779,1569362073,1498123566,1409854455,1355396672,1317987909,1246755826,1192025387,1137557660,2072149281,2135122070,1912620623,1992383480,1753615357,1816598090,1627664531,1707420964,295390185,358241886,404320391,483945776,43990325,106832002,186451547,266083308,932423249,861060070,1041341759,986742920,613929101,542559546,756411363,701822548,3316196985,3244833742,3425377559,3370778784,3601682597,3530312978,3744426955,3689838204,3819031489,3881883254,3928223919,4007849240,4037393693,4100235434,4180117107,4259748804,2310601993,2373574846,2151335527,2231098320,2596047829,2659030626,2470359227,2550115596,2947551409,2876312838,2788305887,2733848168,3165939309,3094707162,3040238851,2985771188],x.t)
D.cUJ=w([23,114,69,56,80,144],x.t)
D.cV8=w(["Make the headline shorter","Add a paragraph about the Civic Registry","Write the whole thing in Swahili","Change the newspaper name"],x.s)
D.cVx=w(["Add a slide about\u2026","Make this slide shorter","Translate everything to Swahili","Add a slide with our contact details","Change the style to luxury","Remove the last slide"],x.s)
D.cVW=w(["HOME: the first tab. It has the NGMY brand, the Helper AI, loans, and the tech frames: Neural Link, Signal Grid, Core Protocol and the Vault Channel arcade.","TOOL HUB: the second tab. It holds the Business Card Creator, Menu Studio (restaurant menus and Bio link pages) and Business Essentials (invoices, receipts, flyers and other business papers).","SLIDES: the third tab. Presentations with many designs, an AI that makes decks, and Marriage documents.","NGMY HUB: the centre tab. Civic Registry, NGMY Store, Help Center and Insurance, Document Scanner, and the App Builder when it is switched on.","ADVISORS: the fifth tab. AI advisors you can chat with like real people. They help with jobs, applications, benefits and everyday questions, and they can answer in Swahili when you write Swahili.","CREATOR HUB: the sixth tab. Doc Share, Quote Calc, QR Generator, Play Zone, Kiswahili School, Recorder Studio, Video Studio and Phone Unlock.","PROFILE: the seventh tab. Theme, logout, legal pages and Worksheets (Projects, Cashier IOUs and receipts, and the Family Tree).","GROWTH INCOME: For now the Growth Income button (the wifi icon, top right of Home) works only for the admin: everyone else sees the same icon but it does not open. members buy an investment plan and earn daily by clocking in, on work days only (Monday to Friday, there is no clock-in on Saturday and Sunday). The wallet shows the balance, deposits, withdrawals and a history of the last two months, with the balance before and after each move. Missing 3 work days in a month removes the investment plan (a new plan must be bought), and the count starts again each month; a warning shows after the 2nd missed day. Clocking in 30 minutes late or more takes 30 percent off the earnings for that day. The investment plans are $5, $20, $30, $50 and $100; $100 is the most expensive plan and nothing above it is offered.","KING AND QUEEN CROWN: a crown badge for special members. A King or Queen receives a daily crown reward of one dollar, and the receipt shows in the wallet history.","WALLET: one balance everywhere in the app. The server keeps the balance so every phone shows the same number.","LOANS: Loan Services is a community help service: it helps members when they need help, for example funerals, buying a car, car repairs or family emergencies. For now the Loan Service button (top left of Home) works only for the admin: everyone else sees the same icon but it cannot be opened. The loan calculator (amount, interest rate and repayment period to try, the whole cost and every payment, and a button to make the tried terms the real loan terms) is for the admin only. The How it works frame is a five-step timeline (Apply, Review, Funds, Repay, Released). A loan is applied for with collateral, repaid in weekly payments, and the collateral is released back to the member when the loan is fully repaid. The admin sets the interest rate, the biggest loan and the repayment period in Loan Center, Loan terms; nothing is written into the screens. Before applying, the member sees the full cost (amount, interest, total to repay, number of payments, each payment, repayment period) and must tap I agree; the agreement is saved with the application. The application asks what the member needs help with (Funeral or Burial, Buy a car, Car repair, Family emergency, Other need), the date needed, the collateral with its estimated value and photos, and an optional family or guarantor contact. A loan shows as Pending, Approved, Paid Out, In Repayment, Repaid, Overdue or Declined, and the member sees a gentle reminder about the next payment.","NGMY STORE: buy and sell items inside the app. Approved members can open a store.","CIVIC REGISTRY: the community system for the M'MBONDO community. It registers members with a Registry ID card, counts members by state, records contributions with receipts, and lets Authorized Registrars enroll families. Registrars can print the community roster as a PDF.","CIVIC BIRTHDAYS AND FAMILY: the registry records children and their ages, shows a birthday reminder two days before, and congratulates a child on turning 18. Members can have a nickname that others search for, while registrars see the real name.","CIVIC VOTING AND STATE WALLET: the community votes on decisions inside the app, and each state has a wallet showing its funds, spending and trust deposits so the money is visible to everyone.","LIGHTNING GROUPS: groups inside the Civic Registry where people give together. A person asks to join with a name, phone number, state and address, and the group owner approves. The group shows named contribution rounds, receipts, who gave, who missed and how many times.","JOBS AND HELP: help finding jobs, house repairs and house workers, a Help Center with insurance, and the Helper AI for support.","CORE PROTOCOL: a collection of studios for curious minds: Universe, Electronics Lab (the AI Inventor now lives inside it as the AI button at the top), Construction Lab (real 3D wiring, plumbing and a house), Discovery Lab (Body Explorer, a real 3D human you can turn and look inside), Toolbox, Molecule Maker, DNA Lab, Ecosystem Lab, Balance Lab, Gear Lab, Laser Maze, Light Mixer, Cipher Lab, Reaction Lab, Spark Painter, Rocket Lander, Orbit Studio, Swarm Studio, Chain Burst, Title Animator, Circuit Lab, Marble Music and Orbit Sequencer.","CITY AVATARS: the people of My House are the real characters from the NGMY 3D viewer files (Xbot.glb the X Bot, Michelle.glb the Dancer, Soldier.glb the Soldier), kept in the app (assets/avatars) and drawn with their own skeletons and animations (the X Bot and Soldier stand and walk, the Dancer dances). Their skin pictures are painted onto the body faces, and the body is thinned to a few thousand faces so the game stays quick, so they look a little more faceted than in the viewer. The X Bot is the one who goes through the rooms on the house tour and that you steer outside; in the tour sheet (Play) a Who walks the house? choice switches the tour guide to the Dancer, the Soldier or a plain person. The residents are the three characters too: they stay in the house, some stroll out into the garden for a while and go back in, and a resident with an open call for help shows a phone icon in the name. In every view of My House you can turn the camera all the way round (360) by dragging, with no button needed; Look all round (360) only moves you to the middle of the room at a normal distance. Names no longer float over the people in the rooms: tap a person to see their card. Outside, in the garden and town, the sky behind is space with stars, a galaxy, the Earth and the Moon. The Dancer is played slowly and kept on her spot, and the Soldier now faces the way he walks.","MY HOUSE, THE HALL AND THE CITY: the hall is a wide lobby: three doors in the middle of the back wall (the living room, the kitchen, the first bedroom) with a big video-wall TV on each side showing NGMY ads, the other seven doors on the two short walls, a blue carpet with the NGMY logo, sofas, armchairs, plants, lamps and consoles. In the Tour sheet, Book a hallway tour plays a tour of just the hall. Tapping a door asks whether to open it, close it or go through it. Outlets, switches, doors with their handles, TV frames, wall trim and the wiring job room are drawn so they never disappear when the camera turns, and from outside the house its walls hide the room. The residents live in the city (the Garden is the whole city): they walk about the streets, those with a call for help stand with a phone and a Help sign, and tapping the hospital or the shop building (or the Calls, Hospital, Shop and People buttons, or Community) opens those services over the city. In the city a Walk the city button gives you the walking controls, and Build adds roads, buildings and other things. Nobody is placed in the rooms during the house tour.","WALKING THE CITY: in the Garden (the whole city) press Walk the city and a round stick appears: slide a finger on it to walk, further from the middle is faster, and the Run and Jump buttons make the person run and jump. Walk up to the front door of the house, the hospital or the shop and the person goes in; inside the hospital walk onto the blue mat to admit the sick and up to a bed to treat the patient, inside the shop walk onto the yellow mat for food and the purple mat for medicine, and walk onto the green mat to go out. Near an animal an Act button feeds it for a point, and near a car, ambulance or fire truck it lets you get in and drive it with the stick and park it. When somebody calls for help the phone rings with a call banner: Answer opens the calls. Phone, hospital, shop, animals and cars are all in the city, and the hall of the house shows only three doors: the other rooms are reached from the map or from their own door.","ELECTRICAL SAFETY SCHOOL: every wiring lesson and job is judged by one safety engine. A job is CORRECT only if the connections are on the right terminals, complete and safe; a device that works (a TV that plays, a fan that spins) is never proof of safe wiring. Swapped hot and neutral, a missing neutral or ground, neutral used as ground, hot touching ground, loose or bare wires and a fan on a plain box are all UNSAFE and can never pass. Results are CORRECT, INCORRECT, UNSAFE, INCOMPLETE or REQUIRES VERIFICATION. The lessons have Learn (a wrong wire is refused and explained), Practice (anything is allowed and power-on shows the consequence with arcs, sparks, smoke or flames) and Test (silent, graded on submit with score, explanations and violations). The wiring job has a Test mode switch and Submit for inspection in its settings. A Wire guide lists U.S. wire colors, exceptions and the rule to verify. Diagram lessons (three-way switch, fan with a light kit) are in the Construction Lab menu.","CITY LIFE AND THE HALL, UPDATE: seen from outside the house, the walls on your side are left out (like a doll house) so the TVs and the logo carpet are never hidden at any angle, and the TV pictures also show when seen from behind. The house outside has a big wide NGMY poster on the back wall and different framed posters on the sides. In the city every resident is busy with a real job (the nurse on duty at the hospital, feeding the animals, teaching at the school, washing the car, cooking, resting on the bench, watering the flowers), with props such as steam, grain and water, and a small name for the activity. The city has many more houses. Inside the hospital there are a nurse, a doctor and patients lying in their beds, and you treat them by walking to them. A Full screen button in the city turns the game on its side like a video and keeps only the stick, Run, Jump and Act buttons. When somebody calls, a phone-call screen with a green Answer and a red hang-up button appears; answering opens a text message with what the person needs, a button that shows where they are and a button that takes you to fix it.",'CONSTRUCTION LAB: a trade school in real looking 3D, MY HOUSE (top card of the Construction Lab): a finished furnished house with 5 bedrooms, 3 bathrooms, a kitchen, a living room and a hall, each drawn as a cut-away 3D room. A little map in the corner shows where you are, tap a room to go there, or use the door buttons; red marks a room whose wiring needs work and blue one whose plumbing does. Signals in the room (a red No power sign, a blue Needs plumbing sign, bare pipe stubs) show what is wrong; the Wiring and Plumbing buttons, or a tap on the outlet, light, toilet or sink, open the same hands-on jobs and the room is finished when the job is. Furniture, walls, floor, ceiling and doors only react while their own edit button is on: Furniture (add, move with arrows, turn, change colour, remove), Walls (paint one wall or all), Floor (wood, carpet or tile), Ceiling, Doors (open and close). A Learn button opens short beginner cards on safety, wiring, plumbing, framing and tools. In My House you are inside the room by default (a low view, like standing in the doorway) and a button switches to a view of the whole room from above. A \ud83c\udfac Tour button plays a life-like person (an adult with a face, hair, arms, legs and a real stride) who comes in through the front door and walks through the whole house like a film, in the time you choose (30 seconds, 1, 2, 3 or 5 minutes), after every TV is switched on. The walk is planned round the furniture and fixtures, so the person never goes through a wall, a chair or a table; in the living room and the bedrooms the person picks up the remote and switches the ad on the TV, in the kitchen they take a drink from the fridge, in the bathrooms they wash their hands, and between rooms they open the door and walk through into the hall. The doors really swing open and show the next room behind them; when the person opens a door the camera moves in towards it, then the picture dissolves into the next room (the hall, a bedroom, a bathroom) where the camera starts on the door they come out of, and the door closes behind them as they walk on. TVs on the wall go from 100 inches to 150, 200 and a whole-wall TV: each is as big as the free stretch of wall allows, never over a door, with nothing in front of it, and the person on the tour stands beside the TV and not in front of it. The hall is wider and deeper, has all ten doors on its back wall and a big TV on each end wall. A \ud83d\udd04 Look all round (360) button puts you in the middle of a closed room (solid ceiling and four walls) to turn all the way round by dragging; a double tap on the floor walks you to that spot, and from above or in the garden a double tap takes the view closer to where you tapped. The view can never go under the floor. The garden is a big lawn you can walk all the way round, and the house outside has windows and doors on all four sides, a porch, a chimney and a roof; with the Furniture button you can add and move trees, pines, bushes, flowers, fences, street lamps, benches, cars, roads, ponds, swings, sheds and dog houses. The cards on the Construction Lab home screen are centred, with a glowing round icon and a soft colour. COMMUNITY (a card on the Construction Lab home screen and a Community button in My House): the seven people who live in the house (Ama, Joseph, Grace, Daniel, Fatima, Papa Moses and Mama Rose, each with their own look) get hungry over time, can fall sick, and become unhappy when their room has no power or their sink leaks; they stand in their rooms in the house as people you can tap, with a word over their head showing how they are. The player feeds them (food), gives medicine, sends the sick to the hospital (three beds: each patient needs treating before their care runs out and goes home better), and buys food and medicine in the shop with points. People who are starving, sick or unhappy for too long lose health and can die. Calls for help arrive in plain words ("My outlet is dead and it is dark in here", "The sink leaks"): Go and fix it opens the house on that room, the real wiring or plumbing job is done, and when it works the call finishes and earns 15 points; wiring and plumbing also break by themselves from time to time so there is always something to do. Hospital discharges, feeding and medicine earn points too. Everything is saved (the people, supplies, calls and which rooms are fixed or broken) and time passes only gently while the app is closed. Inside a room the view stays inside the house: you can look about a little but you cannot swing round behind the walls, and a Go outside button (and Go inside in the garden) is the only way out. Everything in a room is drawn in layers (the floor and walls first, then what is fixed to them like the TV, the plates, the frames and the doors, then the furniture and the person), so the edges of a TV or a door never disappear when you turn to the side and the person never shows through a door, a wall or their own body. The person is built from rounded parts with real joints (a head with a face and hair, shoulders, elbows, knees, hands and shoes), the foot that is down always stands on the floor, and the walk keeps a body-width away from furniture and walls. A TV button puts a wall TV (five models, the big ones up to 77 inches) in a room, or in every room, and turns TVs on and off. An Add button adds outlets, GFCI outlets and light switches to a room that you wire yourself with the wiring bench, a Map button shows or hides the little map (which shrinks to fit the screen), and the Start from a bare house button makes every room need its wiring and plumbing so you can wire the whole house first. The ceiling of a room can hold a light or a fan. All the lessons on the lab home screen (Wall outlet, Light switch, GFCI outlet, Ceiling fan, Sink drain, Faucet supply lines, Build and fix a house, Learn the trades: eight tiles, four on each side) play inside a furnished room with a big TV on the wall showing the NGMY Jobs ad; the ceiling light is already in and only the thing being taught is waiting (red), and once it is done you can use it: flip the switch, plug in a lamp, TV or hair dryer, watch the fan spin. The house also has a Garden (a view of the house from outside with a tree, a path and a mailbox): the front door of the living room leads out to it and the front door there leads back in. Tap a door in a room to open it and walk through it into the next room or the hall, like in a game. Every room can be fixed, even the ones shown as finished: a finished room opens finished and you can pull devices out and wire them again. In a wired room tap an outlet to plug something in (five big TVs from Beovision to Apple TV that play NGMY ads, a lamp, a toaster or a hair dryer) or unplug it, tap the wall switch (or the light) to turn the light or the ceiling fan on and off, and tap a TV to watch it full screen with its own brand home screen. Bedrooms have ceiling fans. Wire a room, Plumb a room and Fix a house on the lab home screen all open My House at a room that needs that job. In the wiring jobs a wrong wire can be fastened just like for real and it burns or trips the breaker when the power goes on, touching a live wire shocks (in Learn mode it hurts nothing but the shock still happens, in Practice mode it costs a life), the wire buttons that are already fastened disappear, the screw labels are kept away from the wires, finished devices have a bright frame so they are easy to find from far, finished rooms have a painted ceiling with crown moulding and no bare beams, and a TV in the room job opens full screen when tapped. The Construction Lab downloads on its own when its button is pressed, so the Core Protocol opens quickly. A TV that is plugged in and on plays the real NGMY ads right on its screen, flat on the glass like a normal TV, without opening it (tap it to watch full screen). There is a Voltage tester: in My House pick the Tester button and tap an outlet, the switch or the light (it glows and beeps when there is power and stays dark when there is none), and in the wiring jobs it is the Voltage tester right after Look in the devices tray. The Construction Lab menus are now at the top like in the Electronics Lab, the home screen of the lab is a short list of tiles with a Learn mode and Practice mode switch, a device already put in can be tapped again to open it or pull it out, and a tap that misses never moves the view. opened from the construction helmet button next to the AI button at the top of the Electronics Lab, and also as a tile in the Core Protocol. Every model can be turned with a finger, zoomed by pinching or with the zoom buttons, and any part can be tapped to zoom in and read what it is. Lessons: Wall outlet (black hot wire to the brass screw, white neutral to the silver screw, bare copper ground to the green screw), Light switch (two black wires on the two brass screws, white wires joined with a wire nut), GFCI outlet (power in on the LINE screws, the LOAD screws are covered with yellow tape, press RESET then TEST), Sink drain (build the tailpiece, P-trap and trap arm, tighten the slip nuts, run the water and see the water seal that blocks sewer gas), Faucet supply lines (hot red hose on the left, cold blue hose on the right, then open the shut-off valves) and a whole house cut open at the front that can be built stage by stage (slab, framing, plumbing rough-in, electrical rough-in, drywall, fixtures, roof), where a tripped breaker and a leaking slip nut can be fixed and each fixture opens its own lesson. The electrical lessons start with the breaker ON and refuse any wire until it is turned OFF, and every wrong connection is explained in plain words. BUILD A WHOLE ROOM (also WIRE A ROOM quick start, and a Skip to the wiring button in the tray, which do the framing, cable and drywall for you so you start straight at wiring the outlets, switches, light and fan with coloured labelled screws, the tester, the TV and the switch test; the room has a window wall, a door wall and the working wall): a project with three phases (rough-in, drywall, devices). Rough-in: mount wall boxes, ceiling boxes and a fan box on the studs with the drill, and unroll the cable through the studs and ceiling (a wrong route gives an error). Drywall: hang the sheets, cut holes with the drywall saw, screw them to the studs, then tape, mud, sand and paint. Devices: wire outlets, several switches, a ceiling light and a ceiling fan, each with a switch to test, then plug in a TV and other appliances. The screw terminals have different colours (brass gold hot, silver neutral, green ground) and show a label when tapped. A Behind the wall / In front button lets you choose which side of the wall you look from instead of the camera turning by itself. Learn mode tells you what to do next and explains every wrong move; Practice mode only speaks up when something is done wrong, and real wiring mistakes shock (three lives) or burn. SERVICE CALLS (Fix a house, learn and practice): a customer rings with four problems chosen from twelve kinds (tripped breaker, no hot water, leaking slip nut, leaking crimped joint, dead outlet, flickering light, burnt outlet, tripped GFCI, running toilet, dripping faucet, hole in the wall, clogged sink), a different mix every time; use Look and test, then the right tool from the toolbox (hand, screwdriver, pliers, wrench, crimp tool, plunger, new flapper, new outlet, drywall patch); wires must have their breaker switched off first. PLUMBING JOBS (learn and practice): fit out a bathroom (flange, wax ring, toilet, bolts, shut-off valve, supply hose, then the sink) or a kitchen sink piece by piece, with the order checked (the app says why a piece cannot go there yet), the main water valve turned off before cutting into pipes, joints tightened with the wrench, and finally the water turned on to find leaks.',"MY HOUSE, THE WORLD OUTSIDE: go outside from the living room (Go outside, or the front door) into a big garden town you can walk and decorate. It starts with a main street, a lane up to the house, a crossroads, a shop, a hospital with a red cross, a fire station with a fire truck, a school, a second house, an ambulance and a car, trees, a pond, lampposts, a bench and fenced animals. In Furniture mode the Add tray offers road pieces (straight, corner, T-junction, crossroads) that snap to a grid and jump a whole piece with the arrow buttons so they always join up, buildings (house, shop, hospital, fire station, school), cars, a fire truck, an ambulance, animals (dog, cat, cow, sheep, chicken, horse) that wander about, trees, bushes, flowers, fences, a bench, a swing, a shed and a doghouse. Everything can be moved, turned, recoloured and removed with the buttons, and nothing reacts to a tap unless the Furniture button is on. Walk about puts a person in the world: hold the arrows to walk (up is away from you), or double tap a spot to send them there; they walk round buildings, vehicles, trees and fences, and walking up to the front door takes them back into the living room. The camera never goes under the ground.","ELECTRONICS LAB: build real circuits with 56 parts in two tool rows, both at the top above the board (swipe sideways), under a redesigned top bar with the lab name, a live count of working and burnt parts, buttons for ready-made circuits, repair, clear and help, and a challenge card with a progress bar: batteries, solar panel, hand crank, wind turbine, switch, fuse, bulb, LED, motor, radio, TV, fan, speaker, clock, calculator, phone charger, WiFi router, siren, toy car, kettle, desk lamp, party lights, voltmeter and ammeter, step-down converter (brings big battery volts down to 3 to 9 V so a phone, tablet, headphones or smart watch is safe), 5 V regulator (gets hot), diode (one way, 0.7 V drop), light sensor, LED strip, water pump, hair dryer, headphones, smart watch, tablet, fridge, washing machine, blender, drone, power drill, torch, neon sign, microwave, doorbell, security camera, game console, heart monitor, aquarium, lighthouse, disco ball, robot and toaster. Each gadget needs the right volts and the right way round: the lab explains why something is not working (not connected, only one end wired, plugged in backwards, flat battery, switch open, too few volts, burnt out and why). A 1.5 volt battery starts flat and must be charged by a solar panel first. The TV shows NGMY animation channels: it opens on the big screen by itself for a minute when it first switches on, and tapping it 3 times quickly opens the big screen. Each TV brand shows its apps in its own design: Samsung with a Smart Hub bar along the bottom, LG with webOS wide launcher cards, Sony with Google TV rows and a picture card, Apple TV with big rounded icons that rise when selected, and Bang and Olufsen with a quiet warm text menu. The TV has 10 NGMY animation channels, a remote control at the top middle of the big screen (CH minus, CH plus, TV, Apps, Ads) and 8 apps inside the TV screen (there is no Growth Income ad or app on the TVs): NGMY Ads (every promotion as cartoons), Civic Registry, Jobs, NGMY Store (African and traditional food, supporting the Congolese and African community), Kiswahili, Doc Scanner, Invoices and Calendar. Each ad is a little cartoon with a kid character. Premium devices with screens play the NGMY cartoon ads on their own screens: TVs (Samsung Neo QLED 8K, LG OLED evo G5, Sony Bravia 9, Apple TV 4K, Bang and Olufsen Beovision), phones (iPhone 18 Pro Max with a Dynamic Island, iPhone Fold, Galaxy S26 Ultra, Galaxy Z Fold7, Pixel 10 Pro XL, Xiaomi 16 Ultra, Huawei Mate 80 Pro Max, OPPO Find X9 Ultra, Honor Magic V5, vivo X300 Pro), tablets and readers (iPad Pro, Kindle Scribe), computers (MacBook Pro, iMac, Pro Display XDR monitor, Sony laser projector, luxury car touchscreen, Apple Vision Pro). Tapping a screen 3 times opens its big screen (a phone opens like an iPhone, a computer shows a desktop with a dock and app windows). Tapping it 4 times opens a size sheet so the screen can be made bigger (never smaller than normal). Sample circuit: Phone and TV on one battery, using a step-down converter. The AI button at the top of the lab opens the AI Inventor, which builds what you describe on the lab board.  Every battery and solar panel can only give so many amps: when the gadgets connected ask for more, a red warning triangle appears on the power source, its volts sag, gadgets switch off and the lab explains why. The lab saves your board and your challenges by itself, so nothing disappears when you leave. The challenges sit behind a flag button in the top bar (with a number on it for how many are left), next to the dark glowing AI button and the help button.","BODY EXPLORER: a real 3D human body built from medical anatomy data. You can turn it, zoom in, switch layers (skin, muscles, organs, skeleton, blood vessels), tap any part to learn about it, hear the heart beat, and take a quiz.","KISWAHILI SCHOOL: learn English and Swahili with pictures and the teacher Mwalimu Amina.","FAMILY TREE AND FAMILY BOOK: build a family tree, then keep a Family Book library of up to six books. The AI can write a whole new book from the tree, in English or Swahili, and the cover can be designed. The look of the top of each book can be chosen from eight header designs (classic leather, ornate gold, parchment, clean paper, midnight, emerald, rose vintage, modern) with the Header button, and the book title also shows as a small running title on every page.","NOTES: business notes with search, photos and cards.","NGMY QUOTES: make a picture quote with many designs, word sizes, text styles, your own photo and the NGMY logo. It also makes NEWS: a newspaper page with a headline, article and your picture, written by an AI that knows NGMY.","BIO STUDIO: link-in-bio pages with designs such as Neural Core, Quantum Grid and Mech Terminal, and visitors can react to a page.","MENU STUDIO: restaurant menus published as a link.","BUSINESS CARD CREATOR: design and download business cards.","INVOICES AND QUOTE CALC: invoices, receipts and estimates with NGMY watermarks.","DOC SHARE, QR GENERATOR, RECORDER STUDIO, VIDEO STUDIO, PLAY ZONE AND PHONE UNLOCK: tools in the Creator Hub.","APP BUILDER: describe an app and the AI builds it, including real web apps you can publish.","DOCUMENT SCANNER: scan papers with the phone camera.","GAME CENTER AND VAULT ARCADE: arcade games you can play. Game bets and wins have their own receipts and do not appear in the wallet history. Games played offline are saved on the phone and counted on the balance, then applied to the account in order as soon as the phone is online again, and every device updates."],x.s)
D.cX5=w([null,4294626325,4294828103,4283096704,4280472558,4294210230,4294677052,4293870660,4287323382,4282090230,4294967295,4279310375],x.Z)
D.cX9=w(["Kichwa cha Mtu: [Kiasi kilichosalia au thamani]","Mbuzi Mbili","Ngyoka","Mmoko"],x.s)
D.be=new C.uy(0,"rectangle")
D.eJ=new C.uy(1,"circle")
D.kY=new C.uy(6,"hexagon")
D.cXm=w([D.be,D.eJ,D.kY],x.m)
D.o4=w([99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22],x.t)
D.aer=new B.w(1,0.24313725490196078,0.47843137254901963,0.30980392156862746,A.t)
D.cXU=w([D.aer,A.e3],x.O)
D.eij=new B.y("","Classic")
D.egY=new B.y("caps","Bold caps")
D.esA=new B.y("elegant","Elegant")
D.exK=new B.y("shadow","Shadow")
D.emA=new B.y("neon","Neon glow")
D.ewn=new B.y("outline","Outline")
D.evz=new B.y("marker","Highlighter")
D.exV=new B.y("stamp","Stamp")
D.exm=new B.y("retro","Retro")
D.ely=new B.y("threed","3D")
D.et5=new B.y("fire","Fire")
D.eu1=new B.y("ice","Ice")
D.erL=new B.y("chalk","Chalk")
D.erQ=new B.y("comic","Comic")
D.exX=new B.y("sunset","Sunset")
D.ez3=new B.y("softglow","Soft glow")
D.ev0=new B.y("lowercase","Lowercase")
D.esh=new B.y("double","Echo")
D.ezc=new B.y("whisper","Whisper")
D.avW=w([D.eij,D.egY,D.esA,D.exK,D.emA,D.ewn,D.evz,D.exV,D.exm,D.ely,H.aLs,D.et5,D.eu1,D.erL,D.erQ,A.a5B,D.exX,D.ez3,D.ev0,D.esh,D.ezc],x.L)
D.cZ8=w([3,5,7,10,12,15],x.t)
D.d_u=w([A.bV,A.bK,A.c,A.eA,A.cs],x.O)
D.dmq=new C.ta(10,"cardWorld")
D.Cp=new C.Be(3,"rounded")
D.dCJ=new C.ld("world","NGMY World",D.dmq,D.Cp,4278918980,4278521378,4294967295,4280118271,"logo","Roboto","Roboto","Roboto","a modern digital news site: clear, confident and direct, a strong plain headline and a one-sentence summary",!1,"none",!0,!1)
D.dmr=new C.ta(11,"cardSplit")
D.dCF=new C.ld("business","Business Wire",D.dmr,D.Cp,4294967295,4294507260,4279179050,4292943150,"logo","Roboto","Roboto","Roboto","a clean business news site: precise, informative and professional, with a plain, strong headline",!1,"none",!1,!1)
D.dms=new C.ta(12,"cardBreaking")
D.dCS=new C.ld("breaking","Breaking Red",D.dms,D.Cp,4278913807,4280944139,4294967295,4292943150,"logo","Roboto","Roboto","Roboto","a breaking-news broadcast: urgent, factual and clear, a punchy headline and a tight summary",!1,"none",!0,!1)
D.dmt=new C.ta(13,"cardFeature")
D.dCL=new C.ld("feature","Tech Feature",D.dmt,D.Cp,4294967295,4294047225,4279179050,4280640491,"logo","Roboto","Roboto","Roboto","a modern feature article: informative, engaging and well explained",!1,"none",!1,!1)
D.aDO=new C.ta(6,"circle")
D.aDI=new C.Be(4,"circle")
D.dCP=new C.ld("parchment","Royal Circle",D.aDO,D.aDI,4294241234,4293450160,4281278992,4285211048,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a stately royal edition: dignified, noble and ceremonial",!0,"sepia",!1,!1)
D.dCE=new C.ld("ocean","Blue Ocean",D.aDO,D.aDI,4293916415,4292602622,4278984254,4278413729,"centered","NgmyAbril","NgmyAbril","NgmyOldStandard","a calm, trustworthy paper: clear, steady and reassuring",!1,"none",!1,!1)
D.dmw=new C.ta(7,"rail")
D.aDH=new C.Be(1,"double")
D.dCG=new C.ld("forest","Green Leaf",D.dmw,D.aDH,4293983732,4292672743,4278529558,4279599165,"centered","NgmyAbril","NgmyAbril","NgmyOldStandard","a calm community paper about growth and togetherness: gentle, hopeful and clear",!1,"none",!1,!1)
D.aDL=new C.ta(1,"sideBySide")
D.dCU=new C.ld("herald","NGMY Herald",D.aDL,D.Cp,4294967295,4294308863,4280163147,4286331629,"split","NgmyAbril","NgmyAbril","NgmyOldStandard","the proud NGMY Herald: warm, hopeful and community-minded, in NGMY purple",!1,"none",!1,!1)
D.aDK=new C.ta(0,"classic")
D.a3E=new C.Be(9,"shadow")
D.dCT=new C.ld("daily","The Daily",D.aDK,D.a3E,4294967295,4294243570,4279308561,4292225064,"bar","NgmyAbril","NgmyAbril","NgmyOldStandard","a modern daily newspaper: crisp, clear and energetic, with a punchy headline",!1,"none",!1,!0)
D.dmu=new C.ta(2,"splash")
D.aDJ=new C.Be(6,"cutCorner")
D.dCD=new C.ld("tabloid","Big Tabloid",D.dmu,D.aDJ,4294967295,4294965216,4279308561,4292943176,"bar","Roboto","NgmyAbril","Roboto","a bold tabloid: exciting, short punchy sentences and a loud, attention-grabbing headline (still truthful)",!1,"none",!1,!0)
D.aDP=new C.ta(9,"minimal")
D.dCO=new C.ld("modern","Modern Digest",D.aDP,D.Cp,4294507260,4293060848,4279179050,4279080072,"logo","Roboto","Roboto","Roboto","a clean modern digest: simple words, short paragraphs, friendly and clear",!1,"none",!1,!1)
D.aDM=new C.ta(3,"magazine")
D.aDG=new C.Be(0,"plain")
D.dCK=new C.ld("midnight","Midnight Edition",D.aDM,D.aDG,4279310375,4278915104,4294047225,4294626325,"logo","Roboto","NgmyAbril","NgmyOldStandard","a dramatic late-night edition: confident, cinematic and polished",!1,"none",!0,!0)
D.dmx=new C.ta(8,"banner")
D.dCM=new C.ld("metro","Metro Wire",D.dmx,D.aDJ,4294047225,4293060848,4278915616,4280640491,"logo","Roboto","Roboto","Roboto","a modern news wire: fast, factual and direct, like breaking news",!1,"none",!1,!0)
D.dmp=new C.Be(8,"arch")
D.dCN=new C.ld("sunrise","Sunrise Post",D.aDM,D.dmp,4294965229,4294962645,4282064136,4293548044,"split","NgmyAbril","NgmyAbril","NgmyOldStandard","a cheerful morning paper: bright, optimistic and welcoming",!1,"none",!1,!1)
D.aDN=new C.ta(5,"scrapbook")
D.dmo=new C.Be(5,"tape")
D.dCI=new C.ld("neon","Neon Beat",D.aDN,D.dmo,4280163147,4279175726,4294308863,4293675161,"split","NgmyAbril","NgmyAbril","Roboto","a youthful neon culture paper: fresh, bold, energetic and fun",!1,"none",!0,!1)
D.dmv=new C.ta(4,"wrap")
D.dCV=new C.ld("gold","Golden Press",D.dmv,D.a3E,4279505162,4278847748,4294898631,4294626325,"logo","Roboto","NgmyAbril","NgmyOldStandard","a luxurious golden press edition: grand, elegant and prestigious",!1,"none",!0,!0)
D.dCW=new C.ld("minimal","Paper White",D.aDP,D.a3E,4294967295,4294638330,4279769115,4279769115,"split","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a quiet, elegant long-read: thoughtful, simple and beautifully written",!1,"none",!1,!1)
D.dCH=new C.ld("gazette","Fresh Gazette",D.aDK,D.aDH,4294373341,4293582786,4280949518,4288295954,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a refined town gazette: formal, dignified and warm, with a strong headline",!1,"none",!1,!0)
D.dCR=new C.ld("times","Classic Times",D.aDL,D.aDG,4294637810,4293913565,4279636750,4280171146,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a serious classic broadsheet: calm, factual, authoritative, with a strong headline and a clear subhead",!1,"bw",!1,!1)
D.R_=new C.Be(2,"polaroid")
D.dCQ=new C.ld("scrapbook","Memory Scrapbook",D.aDN,D.R_,4294437835,4293580710,4282001946,4290007817,"split","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a warm scrapbook clipping: personal, nostalgic and heartfelt",!1,"sepia",!1,!1)
D.a2a=w([D.dCJ,D.dCF,D.dCS,D.dCL,D.dCP,D.dCE,D.dCG,D.dCU,D.dCT,D.dCD,D.dCO,D.dCK,D.dCM,D.dCN,D.dCI,D.dCV,D.dCW,D.dCH,D.dCR,D.dCQ],B.ax("O<ld>"))
D.d_G=w([0.45,1],x.x)
D.GT=w([619,720,127,481,931,816,813,233,566,247,985,724,205,454,863,491,741,242,949,214,733,859,335,708,621,574,73,654,730,472,419,436,278,496,867,210,399,680,480,51,878,465,811,169,869,675,611,697,867,561,862,687,507,283,482,129,807,591,733,623,150,238,59,379,684,877,625,169,643,105,170,607,520,932,727,476,693,425,174,647,73,122,335,530,442,853,695,249,445,515,909,545,703,919,874,474,882,500,594,612,641,801,220,162,819,984,589,513,495,799,161,604,958,533,221,400,386,867,600,782,382,596,414,171,516,375,682,485,911,276,98,553,163,354,666,933,424,341,533,870,227,730,475,186,263,647,537,686,600,224,469,68,770,919,190,373,294,822,808,206,184,943,795,384,383,461,404,758,839,887,715,67,618,276,204,918,873,777,604,560,951,160,578,722,79,804,96,409,713,940,652,934,970,447,318,353,859,672,112,785,645,863,803,350,139,93,354,99,820,908,609,772,154,274,580,184,79,626,630,742,653,282,762,623,680,81,927,626,789,125,411,521,938,300,821,78,343,175,128,250,170,774,972,275,999,639,495,78,352,126,857,956,358,619,580,124,737,594,701,612,669,112,134,694,363,992,809,743,168,974,944,375,748,52,600,747,642,182,862,81,344,805,988,739,511,655,814,334,249,515,897,955,664,981,649,113,974,459,893,228,433,837,553,268,926,240,102,654,459,51,686,754,806,760,493,403,415,394,687,700,946,670,656,610,738,392,760,799,887,653,978,321,576,617,626,502,894,679,243,440,680,879,194,572,640,724,926,56,204,700,707,151,457,449,797,195,791,558,945,679,297,59,87,824,713,663,412,693,342,606,134,108,571,364,631,212,174,643,304,329,343,97,430,751,497,314,983,374,822,928,140,206,73,263,980,736,876,478,430,305,170,514,364,692,829,82,855,953,676,246,369,970,294,750,807,827,150,790,288,923,804,378,215,828,592,281,565,555,710,82,896,831,547,261,524,462,293,465,502,56,661,821,976,991,658,869,905,758,745,193,768,550,608,933,378,286,215,979,792,961,61,688,793,644,986,403,106,366,905,644,372,567,466,434,645,210,389,550,919,135,780,773,635,389,707,100,626,958,165,504,920,176,193,713,857,265,203,50,668,108,645,990,626,197,510,357,358,850,858,364,936,638],x.t)
D.d01=w(["video/webm;codecs=vp9","video/webm;codecs=vp8","video/webm","video/mp4"],x.s)
D.fTb=new C.os("Original",0,1,1,0,0,0)
D.fTf=new C.os("Black & white",0,1.1,0,0,0,0)
D.fT2=new C.os("Noir",-0.05,1.55,0,0,0,0)
D.fT6=new C.os("Sepia",0,1,0.25,0.9,0,0)
D.fT5=new C.os("Vivid",0,1.15,1.6,0,0,0)
D.fSZ=new C.os("Pop",0,1.3,1.9,0,0,0)
D.fT0=new C.os("Faded",0.06,0.85,0.8,0.1,0,0.4)
D.fTc=new C.os("Matte",0,0.9,0.85,0,0,0.55)
D.fT7=new C.os("Cool",0,1.05,1,-0.8,0,0)
D.fTe=new C.os("Warm",0.03,1.05,1.1,0.8,0,0)
D.fT_=new C.os("Golden hour",0.04,1,1.25,1,0,0)
D.fT4=new C.os("Moonlight",-0.08,1.1,0.8,-0.8,-0.1,0)
D.fTd=new C.os("Dreamy",0.08,0.85,1.1,0.2,0,0.25)
D.fT3=new C.os("Dramatic",-0.05,1.5,1.2,0,0,0)
D.fT9=new C.os("Retro",0,0.9,0.7,0.4,0,0.35)
D.fT8=new C.os("Forest",0,1,1.2,-0.1,-0.45,0)
D.fTa=new C.os("Rose",0,1,1.1,0.3,0.4,0)
D.fT1=new C.os("Ocean",0,1,1.2,-0.5,-0.2,0)
D.d02=w([D.fTb,D.fTf,D.fT2,D.fT6,D.fT5,D.fSZ,D.fT0,D.fTc,D.fT7,D.fTe,D.fT_,D.fT4,D.fTd,D.fT3,D.fT9,D.fT8,D.fTa,D.fT1],B.ax("O<os>"))
D.b5W=new B.w(1,0.0392156862745098,0.1803921568627451,0.09019607843137255,A.t)
D.d03=w([D.aer,A.e3,D.b5W],x.O)
D.eeh=new B.y(0.12,0.3)
D.euc=new B.y(0.26,0.75)
D.esw=new B.y(0.8,0.22)
D.ey4=new B.y(0.9,0.7)
D.ev_=new B.y(0.5,0.15)
D.ewp=new B.y(0.65,0.85)
D.ek8=new B.y(0.08,0.85)
D.d0f=w([D.eeh,D.euc,D.esw,D.ey4,D.ev_,D.ewp,D.ek8],x.G)
D.aw5=w([A.b8,A.bV,A.bu,A.b1],x.O)
D.d13=w([y.L,"Mbuzi Wawili","Ngyoka","Mmoko"],x.s)
D.d1f=w([A.c,A.fb,A.dv,A.v_],x.O)
D.b99=new B.w(1,0.10980392156862745,0.09019607843137255,0.06274509803921569,A.t)
D.d2c=w([D.b99,D.ad2],x.O)
D.d2d=w([A.x2,A.aw],x.O)
D.d2r=w([0,0.25,0.75,1],x.x)
D.d2t=w([A.wZ,A.ou],x.O)
D.aES=new C.kQ(10,"kenteSunset")
D.fXy=w([D.adq,A.jN,A.aw],x.O)
D.dy0=new C.jl("kuhowa_kente_sunset","Kente ya Jua",y.H,D.aES,4294964964,4282000405,4279983648,D.jE)
D.aET=new C.kQ(11,"indigoMudcloth")
D.b6T=new B.w(1,0.9686274509803922,0.9411764705882353,0.8941176470588236,A.t)
D.fXM=w([D.b6T,A.ad_,A.hV],x.O)
D.dy8=new C.jl("kuhowa_indigo_mudcloth","Nguo ya Indigo",y.n,D.aET,4294439140,4279903102,4279903102,D.jE)
D.aEU=new C.kQ(12,"adinkraRoyal")
D.bjC=new B.w(1,0.4196078431372549,0.24705882352941178,0.12156862745098039,A.t)
D.fXN=w([D.abX,D.bjC,A.aw],x.O)
D.dya=new C.jl("kuhowa_adinkra_royal","Muhuri wa Adinkra",y.z,D.aEU,4294965484,4285218591,4287322667,D.jE)
D.aEV=new C.kQ(13,"nileLotus")
D.bfW=new B.w(1,0.9568627450980393,0.9686274509803922,0.9568627450980393,A.t)
D.bcI=new B.w(1,0.058823529411764705,0.3607843137254902,0.3607843137254902,A.t)
D.fXS=w([D.bfW,D.bcI,A.hV],x.O)
D.dy9=new C.jl("kuhowa_nile_lotus","Lotus ya Nile","Nguzo za papyrus na ua la lotus juu.",D.aEV,4294244340,4279196764,4279196764,D.jE)
D.aEW=new C.kQ(14,"shweshweIvory")
D.baX=new B.w(1,0.9725490196078431,0.9568627450980393,0.9333333333333333,A.t)
D.b9P=new B.w(1,0.10588235294117647,0.16470588235294117,0.2901960784313726,A.t)
D.b7m=new B.w(1,0.7686274509803922,0.3607843137254902,0.24313725490196078,A.t)
D.fXz=w([D.baX,D.b9P,D.b7m],x.O)
D.dy5=new C.jl("kuhowa_shweshwe_ivory","Shweshwe","Nguo ya shweshwe \xb7 kadi ya pembe ndani.",D.aEW,4294505710,4279970378,4291058750,D.jE)
D.ro=new C.kQ(15,"certIvoryNavy")
D.fXx=w([D.L2,D.j8,A.hV],x.O)
D.aEn=new C.xl(1,"ringsNdoa")
D.dy2=new C.jl("kuhowa_rings_ndoa","Hati ya Ndoa","Pete mbili \xb7 vichwa vya kidonge \xb7 hati rasmi.",D.ro,4294966259,4279378237,4291404327,D.aEn)
D.a49=new C.xl(2,"coupleCards")
D.dxY=new C.jl("kuhowa_couple_taarifa","Taarifa za Wanandoa","Picha ya mwanamume na mwanamke kila upande.",D.ro,4294966259,4279378237,4291404327,D.a49)
D.Cs=new C.kQ(18,"certIvoryNavyBar")
D.abW=new B.w(1,1,0.9882352941176471,0.9686274509803922,A.t)
D.fXL=w([D.abW,D.j8,A.hV],x.O)
D.aEo=new C.xl(3,"kuhoweshaForm")
D.dxW=new C.jl("kuhowa_barua","Barua ya Kuhowesha","Barua rasmi \xb7 pete \xb7 orodha ya vitu.",D.Cs,4294966519,4279378237,4291404327,D.aEo)
D.add=new B.w(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,A.t)
D.fY4=w([D.L2,D.add,A.hV],x.O)
D.a4a=new C.xl(4,"mahariPande")
D.dxZ=new C.jl("kuhowa_mahari_pande","Mahari ya Pande","Masharti ya mahari \xb7 pande mbili.",D.ro,4294966259,4279904068,4291404327,D.a4a)
D.aEX=new C.kQ(16,"certIvoryGreen")
D.bao=new B.w(1,0.12156862745098039,0.30196078431372547,0.22745098039215686,A.t)
D.fXB=w([A.Kj,D.bao,A.hV],x.O)
D.aEp=new C.xl(5,"familiaMti")
D.dy4=new C.jl("kuhowa_sheria_familia","Sheria za Familia","Mti wa familia \xb7 sheria za pamoja.",D.aEX,4294966776,4280241466,4291404327,D.aEp)
D.a4b=new C.xl(6,"ndoaSafi")
D.dxX=new C.jl("kuhowa_ndoa_pamoja","Ndoa ya Pamoja","Safu mbili \xb7 mume na mke.",D.Cs,4294966519,4279378237,4291404327,D.a4b)
D.beq=new B.w(1,0.22745098039215686,0.16470588235294117,0.06274509803921569,A.t)
D.fXE=w([D.L2,A.hV,D.beq],x.O)
D.a4c=new C.xl(7,"peteWide")
D.dy1=new C.jl("kuhowa_pete_pana","Pete Pana","Pete kubwa za dhahabu \xb7 nafasi wazi.",D.ro,4294966259,4282001936,4291404327,D.a4c)
D.dyb=new C.xl(8,"muhuriCrest")
D.dxV=new C.jl("kuhowa_muhuri","Muhuri wa Familia","Muhuri mkubwa juu \xb7 fomu rasmi.",D.ro,4294966259,4279378237,4291404327,D.dyb)
D.fXO=w([D.abW,D.add,A.hV],x.O)
D.dyc=new C.xl(9,"fomuWazi")
D.dy7=new C.jl("kuhowa_fomu","Fomu ya Ndoa","Fomu yenye mistari \xb7 sehemu wazi.",D.Cs,4294966519,4279904068,4291404327,D.dyc)
D.aEY=new C.kQ(17,"certIvoryRose")
D.bb0=new B.w(1,1,0.9725490196078431,0.9607843137254902,A.t)
D.fXR=w([D.bb0,D.ae2,A.hV],x.O)
D.a48=new C.xl(10,"upendoOrnate")
D.dy3=new C.jl("kuhowa_upendo","Upendo wa Dhahabu","Mapambo ya dhahabu \xb7 picha za wanandoa.",D.aEY,4294965493,4286200650,4291404327,D.a48)
D.d2S=w([D.dy0,D.dy8,D.dya,D.dy9,D.dy5,D.dy2,D.dxY,D.dxW,D.dxZ,D.dy4,D.dxX,D.dy1,D.dxV,D.dy7,D.dy3],x.h)
D.e7=w([2774754246,2222750968,2574743534,2373680118,234025727,3177933782,2976870366,1422247313,1345335392,50397442,2842126286,2099981142,436141799,1658312629,3870010189,2591454956,1170918031,2642575903,1086966153,2273148410,368769775,3948501426,3376891790,200339707,3970805057,1742001331,4255294047,3937382213,3214711843,4154762323,2524082916,1539358875,3266819957,486407649,2928907069,1780885068,1513502316,1094664062,49805301,1338821763,1546925160,4104496465,887481809,150073849,2473685474,1943591083,1395732834,1058346282,201589768,1388824469,1696801606,1589887901,672667696,2711000631,251987210,3046808111,151455502,907153956,2608889883,1038279391,652995533,1764173646,3451040383,2675275242,453576978,2659418909,1949051992,773462580,756751158,2993581788,3998898868,4221608027,4132590244,1295727478,1641469623,3467883389,2066295122,1055122397,1898917726,2542044179,4115878822,1758581177,0,753790401,1612718144,536673507,3367088505,3982187446,3194645204,1187761037,3653156455,1262041458,3729410708,3561770136,3898103984,1255133061,1808847035,720367557,3853167183,385612781,3309519750,3612167578,1429418854,2491778321,3477423498,284817897,100794884,2172616702,4031795360,1144798328,3131023141,3819481163,4082192802,4272137053,3225436288,2324664069,2912064063,3164445985,1211644016,83228145,3753688163,3249976951,1977277103,1663115586,806359072,452984805,250868733,1842533055,1288555905,336333848,890442534,804056259,3781124030,2727843637,3427026056,957814574,1472513171,4071073621,2189328124,1195195770,2892260552,3881655738,723065138,2507371494,2690670784,2558624025,3511635870,2145180835,1713513028,2116692564,2878378043,2206763019,3393603212,703524551,3552098411,1007948840,2044649127,3797835452,487262998,1994120109,1004593371,1446130276,1312438900,503974420,3679013266,168166924,1814307912,3831258296,1573044895,1859376061,4021070915,2791465668,2828112185,2761266481,937747667,2339994098,854058965,1137232011,1496790894,3077402074,2358086913,1691735473,3528347292,3769215305,3027004632,4199962284,133494003,636152527,2942657994,2390391540,3920539207,403179536,3585784431,2289596656,1864705354,1915629148,605822008,4054230615,3350508659,1371981463,602466507,2094914977,2624877800,555687742,3712699286,3703422305,2257292045,2240449039,2423288032,1111375484,3300242801,2858837708,3628615824,84083462,32962295,302911004,2741068226,1597322602,4183250862,3501832553,2441512471,1489093017,656219450,3114180135,954327513,335083755,3013122091,856756514,3144247762,1893325225,2307821063,2811532339,3063651117,572399164,2458355477,552200649,1238290055,4283782570,2015897680,2061492133,2408352771,4171342169,2156497161,386731290,3669999461,837215959,3326231172,3093850320,3275833730,2962856233,1999449434,286199582,3417354363,4233385128,3602627437,974525996],x.t)
D.HI=new C.vQ(0,"emojis")
D.Cz=new C.vQ(1,"pictures")
D.HJ=new C.vQ(2,"icons3d")
D.a4t=new C.vQ(3,"animations")
D.Rv=new C.vQ(4,"videoMotion")
D.CA=new C.vQ(5,"luxe")
D.a2h=w([D.HI,D.Cz,D.HJ,D.a4t,D.Rv,D.CA],B.ax("O<vQ>"))
D.ex_=new B.y(A.dW,"Looks")
D.em7=new B.y(A.ym,"Light")
D.em3=new B.y(A.nf,"Colour")
D.ek9=new B.y(A.xY,"Effects")
D.akp=new B.a0(63112,"MaterialIcons",!1)
D.eha=new B.y(D.akp,"Crop")
D.d3n=w([D.ex_,D.em7,D.em3,D.ek9,D.eha],x.f2)
D.d4_=w([],x.D)
D.fY1=w([],x.L)
D.ekm=new B.y("Flashcard",D.HD)
D.eo1=new B.y("Quiz",D.HE)
D.epT=new B.y("Worksheet",D.HF)
D.en6=new B.y("Notes",D.mB)
D.eow=new B.y("Section",D.Cx)
D.d4E=w([D.ekm,D.eo1,D.epT,D.en6,D.eow],B.ax("O<+(n,mt)>"))
D.dzS=new C.kQ(6,"beadedPearl")
D.bdl=new B.w(1,0.47843137254901963,0.3607843137254902,0.1803921568627451,A.t)
D.fY5=w([N.WX,D.bdl,A.hV],x.O)
D.aEl=new C.jl("malipo_beaded_pearl","Malipo \u2014 Lulu","Mpaka wa shanga za lulu kuzunguka pembeni \xb7 dhahabu na shaba.",D.dzS,4294966774,4286209070,4291404327,D.jE)
D.dzT=new C.kQ(7,"artDeco")
D.bh9=new B.w(1,0.9686274509803922,0.9607843137254902,0.9490196078431372,A.t)
D.bjT=new B.w(1,0.12156862745098039,0.10588235294117647,0.08627450980392157,A.t)
D.fY3=w([D.bh9,D.bjT,A.bZ],x.O)
D.aEm=new C.jl("malipo_art_deco","Malipo \u2014 Art Deco","Pembe za ngazi za kisasa \xb7 mng'ao wa dhahabu juu.",D.dzT,4294440434,4280228630,4290283019,D.jE)
D.dzU=new C.kQ(8,"rosetteCorners")
D.bj3=new B.w(1,0.984313725490196,0.9647058823529412,0.9372549019607843,A.t)
D.b9d=new B.w(1,0.4196078431372549,0.24705882352941178,0.16470588235294117,A.t)
D.bdg=new B.w(1,0.788235294117647,0.4823529411764706,0.23921568627450981,A.t)
D.fXH=w([D.bj3,D.b9d,D.bdg],x.O)
D.aEk=new C.jl("malipo_rosette","Malipo \u2014 Duara","Medali ya duara kila pembe \xb7 shaba na mahogany.",D.dzU,4294702831,4285218602,4291394365,D.jE)
D.dzV=new C.kQ(9,"modernLedger")
D.fXG=w([A.c,D.j8,D.j8],x.O)
D.aEj=new C.jl("malipo_modern_ledger","Malipo \u2014 Kisasa","Ukanda thabiti wa bluu upande wa kushoto \xb7 mstari mwembamba.",D.dzV,4294967295,4279378237,4279378237,D.jE)
D.d4I=w([D.aEl,D.aEm,D.aEk,D.aEj],x.h)
D.d4Q=w([A.iq,A.ou],x.O)
D.cm=new C.hx(0,"none")
D.dd=new C.hx(1,"fade")
D.HG=new C.hx(3,"slideRight")
D.aFj=new C.hx(5,"slideDown")
D.dUw=new C.hx(7,"zoomOut")
D.a4s=new C.hx(11,"cube")
D.dUr=new C.hx(12,"blur")
D.aFg=new C.hx(13,"dissolve")
D.dUs=new C.hx(14,"wipeLeft")
D.dUt=new C.hx(15,"wipeRight")
D.Ru=new C.hx(17,"push")
D.dUu=new C.hx(18,"flash")
D.aFi=new C.hx(20,"swing")
D.dUv=new C.hx(21,"curtain")
D.Q8=w([D.cm,D.dd,D.uc,D.HG,D.ud,D.aFj,D.mC,D.dUw,D.HH,D.aFk,D.Rt,D.a4s,D.dUr,D.aFg,D.dUs,D.dUt,D.q6,D.Ru,D.dUu,D.aFh,D.aFi,D.dUv],x.i)
D.Q9=w([D.a47,D.a45,D.a3Z,D.a4_,D.a40,D.a43,D.a41,D.a42,D.a46,D.a44,D.aEl,D.aEm,D.aEk,D.aEj],x.h)
D.d5h=w([y.L,"Mbuzi Mbili","Ngyoka","Mmoko"],x.s)
D.d5l=w([A.At,A.hG,A.bZ],x.O)
D.els=new B.y(A.tN,"Design")
D.eyu=new B.y(D.akG,"Word sizes")
D.euK=new B.y(A.BH,"Text")
D.bDH=new B.a0(983182,"MaterialIcons",!1)
D.euO=new B.y(D.bDH,"Photo")
D.egN=new B.y(A.ll,"Logo")
D.ezC=new B.y(A.Ge,"News")
D.d5q=w([D.els,D.eyu,D.euK,D.euO,D.egN,D.ezC],x.f2)
D.d5r=w(["golddust","sparkle","sheen"],x.s)
D.dVT=new C.eu("upload_pdf",K.Ns,"Upload PDF")
D.dV2=new C.eu("sign_paper",A.Gb,"Sign Paper")
D.bCY=new B.a0(63438,"MaterialIcons",!1)
D.dVP=new C.eu("hd_photo",D.bCY,"HD Photo")
D.dUV=new C.eu("sharpen",E.a_d,"Sharpen")
D.dV4=new C.eu("print",K.Ns,"Download PDF")
D.dVw=new C.eu("rotate",D.akp,"Rotate")
D.dVd=new C.eu("text_box",A.BH,"Text Box")
D.dVf=new C.eu("picture",A.tR,"Picture")
D.dVb=new C.eu("title",A.yg,"Title")
D.dV7=new C.eu("subtitle",T.alg,"Subtitle")
D.dVF=new C.eu("bullets",I.a_u,"Bullet List")
D.dV8=new C.eu("numbered",A.Ng,"Numbered")
D.dVI=new C.eu("quote",A2.Bz,"Quote")
D.dVk=new C.eu("citation",A.nY,"Citation")
D.dVL=new C.eu("date_stamp",Ah.a_i,"Date Stamp")
D.dVy=new C.eu("page_number",A.yf,"Page #")
D.dVC=new C.eu("header_bar",A.BJ,"Header")
D.dVe=new C.eu("footer_bar",Ar.a01,"Footer")
D.dV3=new C.eu("divider",A.tQ,"Divider")
D.dV_=new C.eu("highlight",A.a_A,"Highlight")
D.dVE=new C.eu("redact",A.yj,"Redact")
D.dVr=new C.eu("callout",A.Bv,"Callout")
D.dVN=new C.eu("checkboxes",I.ajF,"Checklist")
D.dVo=new C.eu("table",A.a0_,"Table")
D.dVi=new C.eu("memo",I.a_L,"Memo")
D.dVs=new C.eu("letter",A.G0,"Letter")
D.bCA=new B.a0(63259,"MaterialIcons",!0)
D.dUU=new C.eu("agenda",D.bCA,"Agenda")
D.dV5=new C.eu("toc",AB.akS,"Contents")
D.bCU=new B.a0(63406,"MaterialIcons",!1)
D.dVp=new C.eu("sig_line",D.bCU,"Sign Line")
D.dUN=new C.eu("initial_line",A.jg,"Initials")
D.dUQ=new C.eu("approved",A.ll,"APPROVED")
D.dVu=new C.eu("draft",A.oM,"DRAFT")
D.dVA=new C.eu("confidential",A.jh,"Confidential")
D.dVD=new C.eu("sticky",A.Ny,"Sticky Note")
D.dVM=new C.eu("progress",A.akR,"Progress")
D.bE9=new B.a0(983507,"MaterialIcons",!1)
D.dV0=new C.eu("stars",D.bE9,"Star Rating")
D.dUL=new C.eu("equation",A.akI,"Equation")
D.dUW=new C.eu("timeline",A.Nz,"Timeline")
D.dVj=new C.eu("two_col",A.a02,"Two Columns")
D.dUY=new C.eu("compare",A1.a_l,"Compare")
D.dUJ=new C.eu("duplicate_el",A.fL,"Duplicate")
D.dVR=new C.eu("delete_el",A.e5,"Delete")
D.dVH=new C.eu("bring_fwd",N.akC,"Bring Front")
D.dUO=new C.eu("send_back",N.akB,"Send Back")
D.dVt=new C.eu("align_left",D.a_s,"Align L")
D.dVz=new C.eu("align_center",D.a_r,"Align C")
D.dVQ=new C.eu("align_right",D.a_t,"Align R")
D.dVc=new C.eu("word_count",A_.ZX,"Word Count")
D.dV9=new C.eu("link_text",A.hm,"Link")
D.dVx=new C.eu("phone",A.iA,"Phone")
D.dUZ=new C.eu("email",A.Bx,"Email")
D.dVS=new C.eu("qr_placeholder",A.jj,"QR Placeholder")
D.dUT=new C.eu("rectangle",A3.vy,"Rectangle")
D.dVn=new C.eu("circle",A.r0,"Circle")
D.dUP=new C.eu("arrow",A.iV,"Arrow")
D.dVG=new C.eu("line",A.tQ,"Line")
D.dV1=new C.eu("triangle",A.a_j,"Triangle")
D.bCI=new B.a0(63318,"MaterialIcons",!1)
D.dV6=new C.eu("grayscale",D.bCI,"Grayscale")
D.dVg=new C.eu("brighten",I.ajZ,"Brighten")
D.dVl=new C.eu("flip_h",A.FR,"Flip H")
D.bCP=new B.a0(63348,"MaterialIcons",!1)
D.dVO=new C.eu("flip_v",D.bCP,"Flip V")
D.dVB=new C.eu("cover_page",A.pO,"Cover Page")
D.dUM=new C.eu("invoice",A.h9,"Invoice")
D.dUX=new C.eu("resume",A.mo,"Resume")
D.dVa=new C.eu("minutes",A.oG,"Minutes")
D.dUR=new C.eu("lab_report",A.Nv,"Lab Report")
D.dUS=new C.eu("rubric",A.tO,"Rubric")
D.dVm=new C.eu("flashcard_tool",V.G7,"Flashcard")
D.dVJ=new C.eu("quiz_tool",A.G4,"Quiz Block")
D.dVq=new C.eu("worksheet_tool",L.FI,"Worksheet")
D.dVv=new C.eu("outline_share",A.Nw,"Share Outline")
D.dVK=new C.eu("export_json",D.ajL,"Export JSON")
D.dUK=new C.eu("new_slide",D.ZW,"New Slide")
D.dVh=new C.eu("present",A.pU,"Present")
D.d5R=w([D.dVT,D.dV2,D.dVP,D.dUV,D.dV4,D.dVw,D.dVd,D.dVf,D.dVb,D.dV7,D.dVF,D.dV8,D.dVI,D.dVk,D.dVL,D.dVy,D.dVC,D.dVe,D.dV3,D.dV_,D.dVE,D.dVr,D.dVN,D.dVo,D.dVi,D.dVs,D.dUU,D.dV5,D.dVp,D.dUN,D.dUQ,D.dVu,D.dVA,D.dVD,D.dVM,D.dV0,D.dUL,D.dUW,D.dVj,D.dUY,D.dUJ,D.dVR,D.dVH,D.dUO,D.dVt,D.dVz,D.dVQ,D.dVc,D.dV9,D.dVx,D.dUZ,D.dVS,D.dUT,D.dVn,D.dUP,D.dVG,D.dV1,D.dV6,D.dVg,D.dVl,D.dVO,D.dVB,D.dUM,D.dUX,D.dVa,D.dUR,D.dUS,D.dVm,D.dVJ,D.dVq,D.dVv,D.dVK,D.dUK,D.dVh],B.ax("O<eu>"))
D.d6_=w([A.cq,A.ak],x.O)
D.egl=new B.y(4286331629,4292552567)
D.eg8=new B.y(4280640491,4278630100)
D.egt=new B.y(4294538006,4292943176)
D.efv=new B.y(4278556265,4280640491)
D.d0p=w([D.egl,D.eg8,D.egt,D.efv],x.n)
D.cpV=w([4294626325,4280472558,4294210230],x.t)
D.dUE=new C.nG("colorful","Colorful",A.nf,D.d0p,4294967295,3875536895,D.cpV,D.mC)
D.efX=new B.y(4279522093,4279657780)
D.egc=new B.y(4281750292,4283268111)
D.efy=new B.y(4278603323,4279203438)
D.egd=new B.y(4282343954,4279599165)
D.cAI=w([D.efX,D.egc,D.efy,D.egd],x.n)
D.cpD=w([4288931381,4294829706,4287033260],x.t)
D.dUA=new C.nG("nature","Nature",A.Gc,D.cAI,4294442727,3874290891,D.cpD,D.dd)
D.efR=new B.y(4279369771,4283178389)
D.efO=new B.y(4279179050,4286456526)
D.eg4=new B.y(4280163147,4290648157)
D.efn=new B.y(4278322711,4285343961)
D.cS9=w([D.efR,D.efO,D.eg4,D.efn],x.n)
D.cpR=w([4294210230,4280472558,4289170426],x.t)
D.dUy=new C.nG("vibe","Vibe",A.a_y,D.cS9,4294967295,3874869502,D.cpR,D.uc)
D.egp=new B.y(4290007817,4292552567)
D.egj=new B.y(4286328082,4294286859)
D.ego=new B.y(4288485197,4294538006)
D.egi=new B.y(4285343961,4293675161)
D.bX5=w([D.egp,D.egj,D.ego,D.egi],x.n)
D.cpW=w([4294829706,4294967295,4284999929],x.t)
D.dUz=new C.nG("celebration","Celebration",A.lg,D.bX5,4294967295,4009752557,D.cpW,D.q6)
D.efM=new B.y(4279179050,4280171146)
D.efQ=new B.y(4279310375,4280232247)
D.efE=new B.y(4278916151,4280172719)
D.efN=new B.y(4279179050,4281549141)
D.cLg=w([D.efM,D.efQ,D.efE,D.efN],x.n)
D.cpy=w([4281908728,4294626325,4287931320],x.t)
D.dUD=new C.nG("professional","Professional",A.Bt,D.cLg,4294967295,3872118241,D.cpy,D.Ru)
D.efI=new B.y(4278995566,4278413729)
D.efA=new B.y(4278727492,4279137424)
D.eg5=new B.y(4280171146,4278751666)
D.efJ=new B.y(4278995566,4279590517)
D.ctG=w([D.efI,D.efA,D.eg5,D.efJ],x.n)
D.cpB=w([4286436348,4284410580,4294829706],x.t)
D.dUF=new C.nG("ocean","Ocean",I.a04,D.ctG,4294967295,3873501950,D.cpB,D.ud)
D.egk=new B.y(4286328082,4294538006)
D.egm=new B.y(4286781507,4294677052)
D.egg=new B.y(4283178389,4294197086)
D.egn=new B.y(4288295954,4294688548)
D.cHt=w([D.egk,D.egm,D.egg,D.egn],x.n)
D.cpX=w([4294829706,4294967295,4294747557],x.t)
D.dUG=new C.nG("sunset","Sunset",A.NB,D.cHt,4294967295,4009749973,D.cpX,D.dd)
D.egx=new B.y(4294967295,4294047225)
D.egs=new B.y(4294507260,4294967295)
D.egw=new B.y(4294967295,4293060848)
D.egr=new B.y(4294507260,4294047225)
D.cVe=w([D.egx,D.egs,D.egw,D.egr],x.n)
D.cpw=w([4280640491,4279179050,4287931320],x.t)
D.dUC=new C.nG("minimal","Minimal",A3.vy,D.cVe,4279179050,4282865001,D.cpw,D.dd)
D.efH=new B.y(4278979081,4280886564)
D.eg0=new B.y(4280031511,4278979081)
D.efP=new B.y(4279308561,4281148438)
D.efG=new B.y(4278979081,4280031511)
D.d7V=w([D.efH,D.eg0,D.efP,D.efG],x.n)
D.cpK=w([4292128567,4294829706,4289241758],x.t)
D.dUH=new C.nG("elegant","Elegant",A.lO,D.d7V,4294898631,3873957348,D.cpK,D.aFg)
D.eg2=new B.y(4280159034,4282058596)
D.efD=new B.y(4278916151,4280163147)
D.ega=new B.y(4281208933,4278916151)
D.efU=new B.y(4279502891,4283178389)
D.deo=w([D.eg2,D.efD,D.ega,D.efU],x.n)
D.cpT=w([4294296657,4292128567,4291081725],x.t)
D.dUB=new C.nG("royal","Royal Gold",A.iY,D.deo,4294965222,3874084351,D.cpT,D.mC)
D.efs=new B.y(4278464302,4280163147)
D.efC=new B.y(4278916151,4279455306)
D.eg3=new B.y(4280163147,4283040846)
D.efp=new B.y(4278332450,4281413249)
D.d06=w([D.efs,D.efC,D.eg3,D.efp],x.n)
D.cpx=w([4281193663,4289170426,4294210230],x.t)
D.dUI=new C.nG("aurora","Aurora Glow",A.dW,D.d06,4293983738,3869766608,D.cpx,D.dd)
D.vV=w([D.dUE,D.dUA,D.dUy,D.dUz,D.dUD,D.dUF,D.dUG,D.dUC,D.dUH,D.dUB,D.dUI],B.ax("O<nG>"))
D.bdQ=new B.w(0.13333333333333333,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.t)
D.d6w=w([A.qE,D.bdQ,A.qE],x.O)
D.d6N=w([4279179050,4281549141,4280640491,4278556265,4292617766,4286331629,4293548044,4278751666,4294967295,4294688548],x.t)
D.d6R=w([null,4294967295,4279310375,4294626325,4280472558,4294210230,4283096704,4293870660,4282090230,4294677052],x.Z)
D.euC=new B.y("The NGMY app","Write the front-page story about the NGMY app and everything it offers.")
D.el2=new B.y("KB PABLO QR, our CEO","Write a respectful story about KB PABLO QR, Founder, President and CEO of NGMY, and what he built.")
D.epu=new B.y("Civic Registry","Write about the Civic Registry: why it was built, receipts, registrars and trust in the community.")
D.edk=new B.y("NGMY Advisors","Write about the NGMY Advisors, the AI advisors who help members.")
D.eob=new B.y("Growth Income","Write about Growth Income, the wallet and how members earn on work days.")
D.ems=new B.y("Core Protocol studios","Write about the Core Protocol studios, the Body Explorer and the learning labs.")
D.eqD=new B.y("Surprise me","")
D.d7m=w([D.euC,D.el2,D.epu,D.edk,D.eob,D.ems,D.eqD],x.L)
D.b7o=new B.w(1,0.9450980392156862,0.9294117647058824,0.8941176470588236,A.t)
D.bhD=new B.w(1,0.796078431372549,0.7647058823529411,0.7019607843137254,A.t)
D.d86=w([A.c,D.b7o,D.bhD],x.O)
D.d9V=w([1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0],x.x)
D.aEQ=new C.kQ(0,"heritageGold")
D.bcx=new B.w(1,0.9764705882352941,0.9450980392156862,0.8666666666666667,A.t)
D.fY6=w([D.bcx,W.adn,A.aw],x.O)
D.dy6=new C.jl("kuhowa_heritage_gold","Kuhowa \u2014 Hazina ya Dhahabu","Mpaka mzito wa kikabila \xb7 dhahabu na hudhurungi.",D.aEQ,4294570461,4284234270,4292128567,D.jE)
D.aER=new C.kQ(1,"heritageCrimson")
D.b5S=new B.w(1,0.9803921568627451,0.9411764705882353,0.9019607843137255,A.t)
D.baY=new B.w(1,0.4196078431372549,0.16470588235294117,0.11764705882352941,A.t)
D.bht=new B.w(1,0.8784313725490196,0.6431372549019608,0.34509803921568627,A.t)
D.fXK=w([D.b5S,D.baY,D.bht],x.O)
D.dy_=new C.jl("kuhowa_heritage_crimson","Kuhowa \u2014 Hazina Nyekundu","Mpaka mzito wa kikabila \xb7 nyekundu na dhahabu.",D.aER,4294635750,4285213214,4292912216,D.jE)
D.d9Z=w([D.a47,D.a45,D.dy6,D.dy_,D.a40,D.a43],x.h)
D.dDZ=new C.rn(1,"circuit")
D.dEr=new C.m1("neural","Neural Link","Robotic",D.dDZ,4278322711,4279179050,4280472558,4284704497,4292932350,"One link at a time, NGMY connects young people everywhere.")
D.dDY=new C.rn(0,"grid")
D.dEo=new C.m1("signal","Signal Grid","Robotic",D.dDY,4280163147,4278322711,4289222135,4293675161,4294308863,"A strong signal starts with one voice. Make yours heard.")
D.dE3=new C.rn(2,"hexes")
D.dE9=new C.m1("core","Core Protocol","Robotic",D.dE3,4278464302,4278322711,4281193663,4281908728,4291623921,"Our core is simple: help each other grow.")
D.aFd=new C.rn(11,"diagonal")
D.dEk=new C.m1("steel","Steel Tech","Robotic",D.aFd,4281549141,4279179050,4287931320,4281908728,4294047225,"Build with your hands, lead with your heart.")
D.aFe=new C.rn(3,"rings")
D.dE8=new C.m1("vault","Vault Gold","Robotic",D.aFe,4280031511,4278190080,4294626325,4294286859,4294898631,"What you build together is worth more than gold.")
D.dE1=new C.rn(13,"leaves")
D.dEb=new C.m1("forest","Forest Morning","Nature",D.dE1,4279522093,4278529558,4283096704,4288931381,4293983732,"Like a forest, a community grows strongest together.")
D.aFf=new C.rn(5,"waves")
D.dEi=new C.m1("ocean","Ocean Calm","Nature",D.aFf,4278413729,4278995566,4281908728,4284999929,4293982719,"Small waves become a movement. Keep going.")
D.dE4=new C.rn(6,"sunset")
D.dEn=new C.m1("sunset","Sunset Glow","Nature",D.dE4,4294538006,4290648157,4294829706,4294668677,4294967295,"Every sunset is a promise that tomorrow can be better.")
D.dE5=new C.rn(7,"mountains")
D.dEa=new C.m1("mountain","Mountain Air","Nature",D.dE5,4282595530,4280171146,4291285758,4286680312,4293849855,"Climb together. The view is better with friends.")
D.dE6=new C.rn(8,"stars")
D.dEh=new C.m1("night","Night Sky","Nature",D.dE6,4280163147,4278190080,4294829706,4291081725,4294308863,"Dream big. NGMY is built by people who looked up.")
D.a4q=new C.rn(4,"orbs")
D.dEf=new C.m1("aurora","Aurora","Nature",D.a4q,4278603323,4283178389,4281652121,4289170426,4294967295,"Light shows up when people choose to shine together.")
D.dEp=new C.m1("sand","Sand Dune","Nature",D.aFf,4294829706,4292441862,4290007817,4294966251,4282718723,"Patience builds a legacy, one grain at a time.")
D.dE7=new C.rn(9,"rays")
D.dEe=new C.m1("golden","Golden Hour","Warm",D.dE7,4294286859,4290321436,4294897802,4294967295,4294967295,"Your hour is now. Start where you are.")
D.dEc=new C.m1("royal","Royal Purple","Warm",D.aFd,4286456526,4290648157,4293962748,4294829706,4294967295,"Lead with respect, and people will follow with joy.")
D.dEd=new C.m1("rose","Rose Petal","Warm",D.a4q,4294668677,4292943176,4294960358,4294812847,4294967295,"Kindness is the strongest thing a community can grow.")
D.dE0=new C.rn(12,"blocks")
D.dEg=new C.m1("electric","Electric Blue","Bold",D.dE0,4280640491,4278751666,4290438909,4294967295,4294967295,"Energy is contagious. Bring yours to NGMY.")
D.dEq=new C.m1("mint","Fresh Mint","Bold",D.a4q,4281652121,4278630100,4294967295,4289197008,4278603323,"Fresh ideas grow when young people lead.")
D.dE2=new C.rn(14,"minimal")
D.dEm=new C.m1("white","Clean White","Clean",D.dE2,4294967295,4294047225,4280640491,4287931320,4279179050,"Simple words, strong purpose. That is NGMY.")
D.dE_=new C.rn(10,"frame")
D.dEj=new C.m1("midnight","Midnight Gold","Clean",D.dE_,4279179050,4278322711,4294626325,4294829706,4294966251,"Quiet work in the dark makes the morning shine.")
D.dEl=new C.m1("community","Community Green","Clean",D.aFe,4278556265,4280640491,4289197008,4290763774,4294967295,"The New Global Movement for Youth starts with you.")
D.a2I=w([D.dEr,D.dEo,D.dE9,D.dEk,D.dE8,D.dEb,D.dEi,D.dEn,D.dEa,D.dEh,D.dEf,D.dEp,D.dEe,D.dEc,D.dEd,D.dEg,D.dEq,D.dEm,D.dEj,D.dEl],B.ax("O<m1>"))
D.dal=w([D.AB,A.x2,A.hG,A.bZ],x.O)
D.daB=w([D.aee,D.j8],x.O)
D.daL=w(["pdf","docx","txt","md"],x.s)
D.eCX=new B.bt(-3,150,34)
D.eCY=new B.bt(-3,214,62)
D.eCZ=new B.bt(-3,288,62)
D.dbz=w([D.eCX,D.eCY,D.eCZ],B.ax("O<+(N,N,N)>"))
D.dc2=w(["rays","bokeh","aurora","spotlight"],x.s)
D.dcC=w(["Write","Design","Print & fold"],x.s)
D.jF=new C.uy(2,"triangle")
D.Cy=new C.uy(3,"arrow")
D.fr=new C.uy(4,"line")
D.jG=new C.uy(5,"parallelogram")
D.dcF=w([D.be,D.eJ,D.jF,D.Cy,D.fr,D.jG,D.kY],x.m)
D.eev=new B.y(240,96)
D.eh3=new B.y(560,46)
D.dcK=w([D.eev,D.eh3],x.G)
D.fYh=new C.xo(0,"classic")
D.dzY=new C.nC("heritage_gold","Urithi wa Dhahabu","Mpaka wa kitamaduni \xb7 rangi ya dhahabu na kahawia.",D.aEQ,4294570461,4282000405,4284234270)
D.dA9=new C.nC("heritage_crimson","Urithi wa Nyekundu","Mpaka wa kitamaduni \xb7 rangi ya nyekundu na shaba.",D.aER,4294635750,4281999378,4285213214)
D.dzZ=new C.nC("elegant_navy","Umoja Mzuri",y.s,D.a4k,4294967035,4279378237,4290283019)
D.dAb=new C.nC("elegant_gold","Umoja wa Dhahabu",y.Q,D.aEZ,4294966515,4281016592,4289102906)
D.dAd=new C.nC("kente_sunset","Kente ya Jua",y.H,D.aES,4294964964,4282000405,4279983648)
D.dzW=new C.nC("indigo_mudcloth","Nguo ya Indigo",y.n,D.aET,4294439140,4279903102,4279903102)
D.dA0=new C.nC("adinkra_royal","Muhuri wa Adinkra",y.z,D.aEU,4294965484,4285218591,4287322667)
D.dA5=new C.nC("nile_lotus","Lotus ya Nile","Nguzo za papyrus na ua la lotus juu.",D.aEV,4294244340,4279196764,4279196764)
D.dA7=new C.nC("shweshwe_ivory","Shweshwe","Nguo ya shweshwe \xb7 kadi ya pembe ndani.",D.aEW,4294505710,4279970378,4291058750)
D.fYi=new C.xo(1,"ringsNdoa")
D.dA_=new C.nC("rings_ndoa","Hati ya Ndoa","Pete mbili \xb7 vichwa vya kidonge \xb7 hati rasmi ya ndoa.",D.ro,4294966259,4279378237,4291404327)
D.fYk=new C.xo(2,"coupleCards")
D.dAa=new C.nC("couple_taarifa","Taarifa za Wanandoa","Picha ya mwanamume na mwanamke \xb7 kadi mbili za taarifa.",D.ro,4294966259,4279378237,4291404327)
D.fYl=new C.xo(3,"kuhoweshaForm")
D.dA6=new C.nC("barua_kuhowesha","Barua ya Kuhowesha","Barua rasmi \xb7 orodha ya NIMETOWEA \xb7 mashahidi.",D.Cs,4294966519,4279378237,4291404327)
D.fYm=new C.xo(4,"mahariPande")
D.dzX=new C.nC("mahari_pande","Mahari ya Pande","Masharti ya mahari \xb7 pande mbili za sahihi.",D.ro,4294966259,4279904068,4291404327)
D.fYn=new C.xo(5,"familiaMti")
D.dAc=new C.nC("sheria_familia","Sheria za Familia","Mti wa familia \xb7 sheria za pamoja \xb7 kijani.",D.aEX,4294966776,4280241466,4291404327)
D.fYo=new C.xo(6,"ndoaSafi")
D.dA3=new C.nC("ndoa_safi","Ndoa ya Pamoja","Safu mbili \xb7 mume na mke \xb7 masharti ya ndoa.",D.Cs,4294966519,4279378237,4291404327)
D.fYp=new C.xo(7,"peteWide")
D.dA2=new C.nC("pete_pana","Pete Pana","Pete kubwa za dhahabu \xb7 nafasi wazi \xb7 hati ya heshima.",D.ro,4294966259,4282001936,4291404327)
D.fYq=new C.xo(8,"muhuriCrest")
D.dA1=new C.nC("muhuri_familia","Muhuri wa Familia","Muhuri mkubwa juu \xb7 fomu rasmi ya familia.",D.ro,4294966259,4279378237,4291404327)
D.fYr=new C.xo(9,"fomuWazi")
D.dA4=new C.nC("fomu_wazi","Fomu ya Ndoa","Fomu yenye mistari \xb7 namba \xb7 sehemu wazi za kujaza.",D.Cs,4294966519,4279904068,4291404327)
D.fYj=new C.xo(10,"upendoOrnate")
D.dA8=new C.nC("upendo_dhahabu","Upendo wa Dhahabu","Mapambo ya dhahabu \xb7 picha za wanandoa \xb7 rangi ya waridi.",D.aEY,4294965493,4286200650,4291404327)
D.Qm=w([D.dzY,D.dA9,D.dzZ,D.dAb,D.dAd,D.dzW,D.dA0,D.dA5,D.dA7,D.dA_,D.dAa,D.dA6,D.dzX,D.dAc,D.dA3,D.dA2,D.dA1,D.dA4,D.dA8],B.ax("O<nC>"))
D.Cw=new C.aqw(0,"landscape169")
D.o7=new C.aqw(1,"portrait916")
D.ddv=w([D.Cw,D.o7],B.ax("O<aqw>"))
D.axz=w([A.hG,A.bK,A.cs,A.iq,A.c],x.O)
D.u5=w([A.bZ,A.iv],x.O)
D.edI=new B.y(1000,"M")
D.eia=new B.y(900,"CM")
D.egZ=new B.y(500,"D")
D.efl=new B.y(400,"CD")
D.edJ=new B.y(100,"C")
D.eib=new B.y(90,"XC")
D.eh_=new B.y(50,"L")
D.efm=new B.y(40,"XL")
D.edO=new B.y(10,"X")
D.eil=new B.y(9,"IX")
D.ehe=new B.y(5,"V")
D.egM=new B.y(4,"IV")
D.eec=new B.y(1,"I")
D.de4=w([D.edI,D.eia,D.egZ,D.efl,D.edJ,D.eib,D.eh_,D.efm,D.edO,D.eil,D.ehe,D.egM,D.eec],x.ek)
D.eDU=new B.cI(["open",A.jg,"Open & write","Keep writing this book"])
D.eEk=new B.cI(["print",A.tU,"Print as a book","Fold and staple it"])
D.dee=w([D.eDU,D.eEk],B.ax("O<+(n,a0,n,n)>"))
D.deU=w([D.a4s,D.mC,D.HH,D.Ru,D.dd,D.Rt],x.i)
D.evb=new B.y(-1,"Small")
D.edw=new B.y(0,"Normal")
D.eeb=new B.y(1,"Big")
D.eeN=new B.y(2,"Huge")
D.dfo=w([D.evb,D.edw,D.eeb,D.eeN],x.ek)
D.dfO=w([49,65,89,38,83,89],x.t)
D.dfV=w([A.x2,A.hG,A.bZ],x.O)
D.dgl=w([D.dd,D.mC,D.uc,D.a4s,D.HH,D.Ru],x.i)
D.aCR=new B.dS([0,D.Lk,8,D.afz,12,D.afA],B.ax("dS<H,a3o>"))
D.e_E={gold:0,platinum:1,glow:2,rainbow:3,double:4,neon:5,framed:6,rosegold:7,jewels:8,aurora:9}
D.bhl=new B.w(1,0.8313725490196079,0.6274509803921569,0.09019607843137255,A.t)
D.cLq=w([A.bK,D.bhl],x.O)
D.d4q=w([A.b3,A.bj],x.O)
D.d_f=w([A.bV,A.aS,A.cf],x.O)
D.def=w([A.cq,A.bv],x.O)
D.cT4=w([A.b8,A.fi],x.O)
D.d1S=w([A.b7,A.f7],x.O)
D.baJ=new B.w(1,0.9529411764705882,0.7764705882352941,0.7098039215686275,A.t)
D.d1a=w([D.baJ,A.ou],x.O)
D.cWS=w([A.h1,A.x3],x.O)
D.cST=w([A.bt,A.cd],x.O)
D.diY=new B.bk(D.e_E,[D.cLq,H.aoc,D.d4q,D.d_f,D.def,D.cT4,D.d1S,D.d1a,D.cWS,D.cST],B.ax("bk<n,ai<w>>"))
D.dZN={"[Jina la Baba wa Mume]":0,"[Jina la Jamii ya Mume]":1,"[Jina la Nyumba ya Mume]":2,"[Jina la Kijana]":3,"[Jina la Binti]":4,"[Jina la Baba wa Binti]":5,"[Jina la Jamii ya Binti]":6,"[Jina la Nyumba ya Binti]":7}
D.a3j=new B.bk(D.dZN,["[Jina la Baba wa Mume]","[Jina la Jamii ya Mume]","[Jina la Nyumba ya Mume]","[Jina la Kijana]","[Jina la Binti]","[Jina la Baba wa Binti]","[Jina la Jamii ya Binti]","[Jina la Nyumba ya Binti]"],B.ax("bk<n,n>"))
D.a3q=new B.bk(A.i3,[],B.ax("bk<H,+icon3d,picture(n?,n?)>"))
D.dn9=new F.MB(30,null)
D.dsd=new F.mp("Chapter 1","","","")
D.ddh=w([D.dsd],x.B)
D.dsh=new F.rd("My Book","","",D.ddh,E.aE9)
D.dsf=new F.uo("starry",null,null,null,null,"","","")
D.dsi=new F.rd("Dream Big","","",E.a2q,D.dsf)
D.dsg=new F.uo("story",null,null,null,null,"","","")
D.dsj=new F.rd("Little Lion","","",E.a2q,D.dsg)
D.dse=new F.uo("vintage",null,null,null,null,"","","")
D.dsk=new F.rd("Our Story","","",E.a2q,D.dse)
D.dvm=new C.Ee("","NGMY","","")
D.dCC=new C.zf("The NGMY Times","NGMY NEWS","","","By the NGMY Newsroom","",A.T,"","","")
D.dUx=new C.b0r(null,null,null,null)
D.dWf=new C.aqB(null)
D.dWs=new C.ar6(0,"smaller")
D.dWt=new C.ar6(1,"bigger")
D.aFt=new C.ar6(2,"fit")
D.e27=new B.u(3,6)
D.e2h=new B.u(4,8)
D.e5I=new B.D(E.agp,T.abi,null)
D.e5M=new B.D(A.XT,A.lB,null)
D.bFr=new B.ae(A.lj,16,A.c1,null,null,null)
D.e5Q=new B.D(A.iU,D.bFr,null)
D.b5k=new B.fj(2.2,null,null,null,null,A.c,null,null,null,null)
D.e61=new B.D(A.Fl,D.b5k,null)
D.bPH=new B.ae(A.cC,16,A.az,null,null,null)
D.e65=new B.D(A.ep,D.bPH,null)
D.fir=new B.x("Play",null,A.nt,null,null,null,null,null,null,null,null,null)
D.d4F=w([U.amH,A.rC,D.fir],x.p)
D.eIv=new B.cn(A.aO,A.e,A.Q,A.m,null,A.p,null,0,D.d4F,null)
D.e68=new B.D(A.nU,D.eIv,null)
D.b5t=new B.fj(2.4,null,null,null,null,null,null,null,null,null)
D.eNL=new B.a7(20,20,D.b5t,null)
D.e6d=new B.D(A.iU,D.eNL,null)
D.frq=new B.x("Seconds per slide",null,A.hq,null,null,null,null,null,null,null,null,null)
D.e6l=new B.D(A.bk,D.frq,null)
D.e7G=new C.a8e(2,"print")
D.e7J=new B.iN(1,0.7764705882352941,0.1568627450980392,0.1568627450980392)
D.e9l=new B.h6("/Annot")
D.e9n=new B.h6("/URI")
D.fcS=new B.x("Share text outline",null,null,null,null,null,null,null,null,null,null,null)
D.ebm=new B.jn("share",48,D.fcS,null,B.ax("jn<n>"))
D.bPB=new B.ae(A.dW,14,A.eA,null,null,null)
D.ebv=new B.cL(null,-2,-2,null,null,null,D.bPB,null)
D.cNo=w([N.adS,A.K],x.O)
D.bVT=new B.a8(A.a3,A.a7,A.x,D.cNo,null,null)
D.aZc=new B.o(null,null,null,null,null,D.bVT,A.n)
D.bma=new B.kN(D.aZc,A.bd,null,null)
D.ebH=new B.cL(0,0,null,0,8,null,D.bma,null)
D.d8Y=w([A.hU,A.me,A.ci],x.O)
D.ecl=new B.bT(A.A,0.5,A.x,null,0,D.d8Y,null,null)
D.eeG=new B.y(0.22,A.bj)
D.eiG=new B.y("ai","Your newspaper is ready. Tell me anything you want changed, or ask me a question about NGMY.")
D.ekI=new B.y(0.5,A.hi)
D.etL=new B.y(0.78,A.aV)
D.eDK=new B.cI([A.bu,0.22,0.7,2.6])
D.eDQ=new B.cI([A.b8,0.36,1.2,1.3])
D.eDW=new B.cI([A.dP,0.28,0.2,0.4])
D.eE1=new B.cI([A.cz,0.05,0.3,0.35])
D.eE7=new B.cI([A.bt,0.28,0.9,0])
D.eEf=new B.cI([A.aE,-0.25,-0.15,0.45])
D.eF5=new B.cI([A.bV,0.42,1,4.1])
D.eId=new B.a9b(9)
D.bGx=new B.ae(A.Ge,28,A.cf,null,null,null)
D.frZ=new B.x("NGMY News",null,A.dl,null,null,null,null,null,null,null,null,null)
D.bvW=new B.bD(1,A.bh,D.frZ,null)
D.dc5=w([D.bGx,A.av,D.bvW],x.p)
D.eIp=new B.cn(A.aO,A.e,A.j,A.m,null,A.p,null,0,D.dc5,null)
D.bGI=new B.ae(A.nY,16,A.c,null,null,null)
D.ftt=new B.x("Book",null,A.of,null,null,null,null,null,null,null,null,null)
D.dfU=w([D.bGI,A.ec,D.ftt],x.p)
D.eIx=new B.cn(A.aO,A.e,A.Q,A.m,null,A.p,null,0,D.dfU,null)
D.bNa=new B.ae(A.jh,10,A.c,null,null,null)
D.fgz=new B.x("Pro",null,A.nr,null,null,null,null,null,null,null,null,null)
D.d4K=w([D.bNa,A.qd,D.fgz],x.p)
D.eIB=new B.cn(A.aO,A.e,A.Q,A.m,null,A.p,null,0,D.d4K,null)
D.frp=new B.x("Make a newspaper",null,Av.Tv,null,null,null,null,null,null,null,null,null)
D.bX3=w([E.a0p,A.ab,D.frp],x.p)
D.eIC=new B.cn(A.aO,A.e,A.Q,A.m,null,A.p,null,0,D.bX3,null)
D.bLJ=new B.ae(A.lg,18,A.bK,null,null,null)
D.fiF=new B.x("Ending celebration",null,A.i5,null,null,null,null,null,null,null,null,null)
D.dba=w([D.bLJ,A.bp,D.fiF],x.p)
D.eIF=new B.cn(A.aO,A.e,A.j,A.m,null,A.p,null,0,D.dba,null)
D.bMX=new B.ae(A.jg,18,A.jR,null,null,null)
D.eYp=new B.G(!0,A.jR,null,null,null,null,15,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftK=new B.x("Write",null,D.eYp,null,null,null,null,null,null,null,null,null)
D.cV3=w([D.bMX,A.ab,D.ftK],x.p)
D.eIK=new B.cn(A.aO,A.e,A.Q,A.m,null,A.p,null,0,D.cV3,null)
D.fgx=new B.x("Download picture",null,A.p4,null,null,null,null,null,null,null,null,null)
D.by_=new B.qf(A.eh,A.A,A.f,D.fgx,null)
D.bya=new B.dq(1,A.cn,D.by_,null)
D.d56=w([K.amx,A.ab,D.bya],x.p)
D.eIL=new B.cn(A.aO,A.bb,A.j,A.m,null,A.p,null,0,D.d56,null)
D.bIv=new B.ae(A.Ge,22,A.cf,null,null,null)
D.fq4=new B.x("NGMY NEWS",null,H.a70,null,null,null,null,null,null,null,null,null)
D.cMQ=w([D.bIv,A.ab,D.fq4],x.p)
D.eIT=new B.cn(A.aO,A.e,A.Q,A.m,null,A.p,null,0,D.cMQ,null)
D.eJ4=new B.p4(!1,!1,null,T.Vn,null,A.bY,null,null,null)
D.a66=new B.jO([D.cm,D.dd,D.uc,D.HG,D.ud,D.aFj],B.ax("jO<hx>"))
D.e0W={title:0,quote:1,closing:2,bio:3}
D.eKc=new B.eM(D.e0W,4,x.M)
D.e_5={caps:0,stamp:1,retro:2,glitch:3,whisper:4}
D.eKe=new B.eM(D.e_5,5,x.M)
D.e0r={midnight:0,rose_gold:1,slate_pro:2,neon_night:3,charcoal:4,crimson:5,gold:6,plum:7}
D.a67=new B.eM(D.e0r,8,x.M)
D.e_M={Design:0,Transitions:1,Insert:2}
D.eKi=new B.eM(D.e_M,3,x.M)
D.fYz=new B.jO([D.a4t],B.ax("jO<vQ>"))
D.e_V={float3d:0,drift:1,pulse:2}
D.eKl=new B.eM(D.e_V,3,x.M)
D.aMy=new B.jO([D.HD,D.HE,D.HF],B.ax("jO<mt>"))
D.e_2={shimmer:0,golddust:1,spotlight:2,goldframe:3,twinkle:4,orbit:5,rays:6,bokeh:7,aurora:8,sparkle:9,sheen:10,velvet:11,crest:12,filigree:13}
D.aMB=new B.eM(D.e_2,14,x.M)
D.fYA=new B.eM(A.i3,0,B.ax("eM<vQ>"))
D.e_S={"kbpabloqr@gmail.com":0,"ngumoyaking@gmail.com":1,"appbusiness321@gmail.com":2,"appbusiness84@gmail.com":3}
D.Sy=new B.eM(D.e_S,4,x.M)
D.dZV={print:0,rotate:1,text_box:2,picture:3,title:4,subtitle:5,bullets:6,numbered:7,quote:8,citation:9,date_stamp:10,page_number:11,header_bar:12,footer_bar:13,divider:14,table:15,sticky:16,duplicate_el:17,delete_el:18,bring_fwd:19,send_back:20,align_left:21,align_center:22,align_right:23,word_count:24,link_text:25,phone:26,email:27,new_slide:28,present:29}
D.aME=new B.eM(D.dZV,30,x.M)
D.e0_={circle:0,triangle:1,hexagon:2,diamond:3}
D.eKB=new B.eM(D.e0_,4,x.M)
D.eMK=new B.at(390,844)
D.eNv=new B.a7(20,20,A6.Kd,null)
D.aNp=new B.a7(null,2.5,null,null)
D.eNF=new B.a7(18,18,A6.Kd,null)
D.bN0=new B.ae(A.iY,19,A.c,null,null,null)
D.eNQ=new B.a7(38,38,D.bN0,null)
D.bLi=new B.ae(A.yn,22,A.c,null,null,null)
D.eNS=new B.a7(40,40,D.bLi,null)
D.eOq=new B.hK(2,10,10,1.15,null)
D.aNx=new B.hK(2,16,14,0.62,null)
D.btZ=new B.Q(32,30,32,40)
D.b6K=new B.w(0.3333333333333333,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.t)
D.bGu=new B.ae(A.pO,56,D.b6K,null,null,null)
D.aeL=new B.w(0.6,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.t)
D.f_m=new B.G(!0,D.aeL,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fn8=new B.x("Your books will live here.",null,D.f_m,null,A.L,null,null,null,null,null,null,null)
D.cXL=w([D.bGu,A.S,D.fn8],x.p)
D.bla=new B.fq(A.ah,A.e,A.j,A.m,null,A.p,null,0,D.cXL,null)
D.e6j=new B.D(D.btZ,D.bla,null)
D.eOL=new B.m4(D.e6j,null)
D.fn5=new B.x("Chagua jimbo la Civic Registry kwanza.",null,null,null,null,null,null,null,null,null,null,null)
D.eP2=new B.b1(D.fn5,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fle=new B.x("Done \u2014 only the text size was changed. Undo brings back the old size.",null,null,null,null,null,null,null,null,null,null,null)
D.eP3=new B.b1(D.fle,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fq7=new B.x("This slide has no text boxes.",null,null,null,null,null,null,null,null,null,null,null)
D.ePc=new B.b1(D.fq7,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fqD=new B.x("Tap fields to edit names. Tap signature boxes to sign or re-sign. Print from the View tab.",null,null,null,null,null,null,null,null,null,null,null)
D.ePr=new B.b1(D.fqD,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fjS=new B.x("Sign in to Civic Registry to view Hati ya Kiapo cha Uongozi.",null,null,null,null,null,null,null,null,null,null,null)
D.ePE=new B.b1(D.fjS,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fxB=new B.x("Could not read that presentation QR or document code.",null,null,null,null,null,null,null,null,null,null,null)
D.ePX=new B.b1(D.fxB,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fuN=new B.x("Use the 5-character code on the document QR, like GA847.",null,null,null,null,null,null,null,null,null,null,null)
D.eQ7=new B.b1(D.fuN,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fqL=new B.x("Sign in to Civic Registry to view this document.",null,null,null,null,null,null,null,null,null,null,null)
D.eQO=new B.b1(D.fqL,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.feS=new B.x("Buttons hidden. Double-tap the top-right corner to show them again.",null,null,null,null,null,null,null,null,null,null,null)
D.eR3=new B.b1(D.feS,null,null,null,null,null,null,null,A.il,null,null,null,null,A.pE,!1,null,null,null,A.r,null)
D.fgF=new B.x("Could not crop that picture.",null,null,null,null,null,null,null,null,null,null,null)
D.eRl=new B.b1(D.fgF,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fmN=new B.x("This oath is locked for editing (5 hours after the president signed). You can still view and play the video.",null,null,null,null,null,null,null,null,null,null,null)
D.eRn=new B.b1(D.fmN,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fmt=new B.x("Only the authorized registrar for this state can add the oath video.",null,null,null,null,null,null,null,null,null,null,null)
D.eRo=new B.b1(D.fmt,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fsN=new B.x("Document code copied.",null,null,null,null,null,null,null,null,null,null,null)
D.eRp=new B.b1(D.fsN,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fb4=new B.x("Tap the logo or a picture on this slide first.",null,null,null,null,null,null,null,null,null,null,null)
D.eRy=new B.b1(D.fb4,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fhN=new B.x("Sign in to unlock Slides Pro features.",null,null,null,null,null,null,null,null,null,null,null)
D.eRV=new B.b1(D.fhN,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fwm=new B.x("Done \u2014 the look is changed. Undo brings back the old one.",null,null,null,null,null,null,null,null,null,null,null)
D.eRX=new B.b1(D.fwm,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fvU=new B.x("The NGMY logo stays on every quote. You can move it or change its frame.",null,null,null,null,null,null,null,null,null,null,null)
D.eS0=new B.b1(D.fvU,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fa3=new B.x("Video upload failed. Check your connection and try again.",null,null,null,null,null,null,null,null,null,null,null)
D.eS2=new B.b1(D.fa3,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.frU=new B.x("This transferred document is view only. You can print or download it.",null,null,null,null,null,null,null,null,null,null,null)
D.eSb=new B.b1(D.frU,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fvv=new B.x("Done \u2014 the words are changed and the design is kept. Undo brings back the old version.",null,null,null,null,null,null,null,null,null,null,null)
D.eSq=new B.b1(D.fvv,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fvm=new B.x("Book saved on this device.",null,null,null,null,null,null,null,null,null,null,null)
D.eSs=new B.b1(D.fvm,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.f9W=new B.x("Only the authorized registrar for this state can update this signature.",null,null,null,null,null,null,null,null,null,null,null)
D.eSy=new B.b1(D.f9W,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fdT=new B.x("You don't have a Bio link yet \u2014 create one in Bio first.",null,null,null,null,null,null,null,null,null,null,null)
D.eT_=new B.b1(D.fdT,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fuA=new B.x("Nothing to transfer yet \u2014 fill names or details on this document first.",null,null,null,null,null,null,null,null,null,null,null)
D.eTa=new B.b1(D.fuA,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fdH=new B.x("Only the authorized registrar for this state can sign this document.",null,null,null,null,null,null,null,null,null,null,null)
D.eTp=new B.b1(D.fdH,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.bdx=new B.w(1,0.9764705882352941,0.8352941176470589,0.8274509803921568,A.t)
D.cLE=w([A.iq,A.ou,D.bdx,D.abJ,A.iq],x.O)
D.eTN=new B.fS(A.A,0,6.283185307179586,A.x,D.cLE,null,null)
D.cUg=w([A.bK,A.bZ,A.hG,D.AB,A.bK],x.O)
D.aO6=new B.fS(A.A,0,6.283185307179586,A.x,D.cUg,null,null)
D.d6L=w([A.bV,A.bu,A.b8,A.b1,A.cf,A.bV],x.O)
D.eTS=new B.fS(A.A,0,6.283185307179586,A.x,D.d6L,null,null)
D.cNC=w([A.pB,A.ov,A.Ap,A.iq,A.pB],x.O)
D.eTT=new B.fS(A.A,0,6.283185307179586,A.x,D.cNC,null,null)
D.d6F=w([A.aP,A.bJ,A.aL,A.ak,A.aP],x.O)
D.eTU=new B.fS(A.A,0,6.283185307179586,A.x,D.d6F,null,null)
D.ddW=w([A.bt,A.b8,A.bu,A.bV,A.bt],x.O)
D.eTW=new B.fS(A.A,0,6.283185307179586,A.x,D.ddW,null,null)
D.bdP=new B.w(1,0,1,1,A.t)
D.b7X=new B.w(1,1,0,1,A.t)
D.dad=w([A.Ec,A.adA,H.acw,D.bdP,H.acV,D.b7X,A.Ec],x.O)
D.eTX=new B.fS(A.A,0,6.283185307179586,A.x,D.dad,null,null)
D.eUb=new C.av8(2,"immersiveSticky")
D.eUc=new C.av8(3,"edgeToEdge")
D.eUd=new C.av8(4,"manual")
D.eWE=new B.G(!0,A.oq,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aOD=new B.G(!0,A.f4,null,null,null,null,12.5,A.P,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eXc=new B.G(!0,E.n0,null,null,null,null,13,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eYG=new B.G(!0,A.ad,null,null,null,null,13,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZE=new B.G(!0,A.c,null,null,null,null,22,A.u,null,0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZO=new B.G(!0,A.c1,null,null,null,null,12.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f_8=new B.G(!0,A.eA,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f0v=new B.G(!0,A.bJ,null,null,null,null,13.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f0E=new B.G(!0,A.jb,null,null,null,null,11,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f0S=new B.rw(!0,A.HZ,null,null,null,null,A.ds,8,null,null,null,null,null,null,null,null,null,null,null,null)
D.f1m=new B.G(!0,A.c,null,null,null,null,8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f1Z=new B.G(!0,A.ja,null,null,null,null,11.5,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f2m=new B.G(!0,A.az,null,null,null,null,12.5,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.e7M=new B.iN(1,1,0.7568627450980392,0.027450980392156862)
D.f2q=new B.rw(!0,D.e7M,null,null,null,null,A.ds,7,null,null,null,null,null,null,null,null,null,null,null,null)
D.adH=new B.w(1,0.8392156862745098,0.7254901960784313,0.6039215686274509,A.t)
D.aPk=new B.G(!0,D.adH,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f2y=new B.G(!0,D.aeL,null,null,null,null,11.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f2z=new B.G(!0,A.c,null,null,null,null,20,A.u,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aPm=new B.G(!0,A.c,null,null,null,null,null,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f3b=new B.rw(!0,A.oY,null,null,null,null,A.ds,9,null,null,null,null,null,null,null,null,null,null,null,null)
D.f3s=new B.G(!0,null,null,null,null,null,20,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.Tp=new B.G(!0,A.az,null,null,null,null,11.5,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f3Z=new B.G(!0,A.c,null,null,null,null,16,A.H,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f40=new B.G(!0,D.adH,null,null,null,null,14,null,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.IX=new B.G(!0,A.az,null,null,null,null,12.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f4t=new B.G(!0,A.bZ,null,null,null,null,11.5,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f4B=new B.G(!0,A.bJ,null,null,null,null,14,A.a5,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f4E=new B.G(!0,A.bK,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f4V=new B.G(!0,A.c,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.avn,null,null,null)
D.f4X=new B.G(!0,A.c7,null,null,null,null,null,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f4Z=new B.G(!0,A.c,null,null,null,null,30,A.u,null,5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5b=new B.G(!0,A.c,null,null,null,null,6.5,A.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5n=new B.G(!0,A.dv,null,null,null,null,13,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5U=new B.G(!0,A.aR,null,null,null,null,null,A.a5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f62=new B.G(!0,A.c,null,null,null,null,13.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f6g=new B.G(!0,A.ad,null,null,null,null,15,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aPZ=new B.G(!0,A.c,null,null,null,null,14.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aQ0=new B.G(!0,A.c1,null,null,null,null,11.5,A.a5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.biT=new B.w(0.7019607843137254,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.t)
D.f7Z=new B.G(!0,D.biT,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aQ8=new B.G(!0,E.n0,null,null,null,null,16,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f8t=new B.G(!0,A.bJ,null,null,null,null,11,A.a5,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f8w=new B.G(!0,O.la,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f1A=new B.G(!0,A.w,null,null,null,null,8,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f9J=new B.x("NEW",null,D.f1A,null,null,null,null,null,null,null,null,null)
D.f9Z=new B.x("Hati ya Kuhowesha",null,A.hg,null,null,null,null,null,null,null,null,null)
D.far=new B.x("Session ended",null,null,null,null,null,null,null,null,null,null,null)
D.faL=new B.x("Scrollable PDF on this slide",null,A.dm,null,null,null,null,null,null,null,null,null)
D.fbu=new B.x("Big quote mark",null,A.iG,null,null,null,null,null,null,null,null,null)
D.fbx=new B.x("Move down",null,null,null,null,null,null,null,null,null,null,null)
D.fbI=new B.x("Duplicate",null,null,null,null,null,null,null,null,null,null,null)
D.fc9=new B.x("Edit window ended",null,null,null,null,null,null,null,null,null,null,null)
D.fcb=new B.x("How many slides?",null,A.hq,null,null,null,null,null,null,null,null,null)
D.fcJ=new B.x("Transfer",null,A.cj,null,null,null,null,null,null,null,null,null)
D.eYs=new B.G(!0,A.c,null,null,null,null,12,A.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fd3=new B.x("Luxury FX",null,D.eYs,null,null,null,null,null,null,null,null,null)
D.fdr=new B.x("Font",null,A.rH,null,null,null,null,null,null,null,null,null)
D.fdC=new B.x("Anza hati mpya?",null,null,null,null,null,null,null,null,null,null,null)
D.fdI=new B.x("Ghairi",null,null,null,null,null,null,null,null,null,null,null)
D.f7x=new B.G(!0,A.bJ,null,null,null,null,12,A.P,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fdQ=new B.x("Example  GA847",null,D.f7x,null,null,null,null,null,null,null,null,null)
D.fef=new B.x("Design shapes",null,A.iG,null,null,null,null,null,null,null,null,null)
D.feo=new B.x("Your 4-hour window to edit this admin-shared document has ended. You can still view, print, or download it.",null,null,null,null,null,null,null,null,null,null,null)
D.fes=new B.x("Non-stop (loop)",null,A.hq,null,null,null,null,null,null,null,null,null)
D.feG=new B.x("Hati ya Kuhoweya",null,A.hg,null,null,null,null,null,null,null,null,null)
D.feZ=new B.x("Photo studio",null,A.fO,null,null,null,null,null,null,null,null,null)
D.ffo=new B.x("Add your picture",null,A.ky,null,null,null,null,null,null,null,null,null)
D.f0T=new B.G(!0,A.c,null,null,null,null,20,A.u,null,-0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ffp=new B.x("Enter document code",null,D.f0T,null,A.L,null,null,null,null,null,null,null)
D.ffq=new B.x("Kiswahili",null,null,null,null,null,null,null,null,null,null,null)
D.ffv=new B.x("English",null,null,null,null,null,null,null,null,null,null,null)
D.eZu=new B.G(!0,E.n0,null,null,null,null,19,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ffQ=new B.x("Delete this book?",null,D.eZu,null,A.L,null,null,null,null,null,null,null)
D.f31=new B.G(!0,E.n0,null,null,null,null,18,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fgH=new B.x("Your library",null,D.f31,null,null,null,null,null,null,null,null,null)
D.fgM=new B.x("Delete",null,A.aPe,null,null,null,null,null,null,null,null,null)
D.fgO=new B.x("Add a picture and the AI writes a whole newspaper page about NGMY around it: the headline, the story and the caption. It knows the app, the Civic Registry, the Advisors and KB PABLO QR, the CEO. Pick old or modern designs, then tell the AI what to change.",null,Au.Dd,null,null,null,null,null,null,null,null,null)
D.fgZ=new B.x("Element flies in",null,A.aPq,null,null,null,null,null,null,null,null,null)
D.TE=new B.x("Hati mpya (chagua muundo)",null,null,null,null,null,null,null,null,null,null,null)
D.fhm=new B.x("Fungua / hariri hati",null,null,null,null,null,null,null,null,null,null,null)
D.fhG=new B.x("Keep it",null,null,null,null,null,null,null,null,null,null,null)
D.fhK=new B.x("Cancel",null,E.aPB,null,null,null,null,null,null,null,null,null)
D.fhM=new B.x("The lines and circles that come with the design",null,A.hf,null,null,null,null,null,null,null,null,null)
D.f6o=new B.G(!0,A.fT,null,null,null,null,11,A.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fic=new B.x("DOCUMENT CODE",null,D.f6o,null,null,null,null,null,null,null,null,null)
D.fj0=new B.x("Quotes",null,G.a7E,null,null,null,null,null,null,null,null,null)
D.f0i=new B.G(!0,O.la,null,null,null,null,null,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fj8=new B.x("Add a picture",null,D.f0i,null,null,null,null,null,null,null,null,null)
D.fjg=new B.x("Point at a NGMY Slides transfer QR, or tap search to enter the document code",null,A.a7j,null,A.L,null,null,null,null,null,null,null)
D.fjk=new B.x("Look & feel",null,A.hq,null,null,null,null,null,null,null,null,null)
D.fjp=new B.x("Rings",null,A.i5,null,null,null,null,null,null,null,null,null)
D.fjv=new B.x("W",null,A.rH,null,null,null,null,null,null,null,null,null)
D.fjF=new B.x("Move up",null,null,null,null,null,null,null,null,null,null,null)
D.fjY=new B.x("It goes behind your words. Then the photo studio opens: looks, light, colour, effects and crop.",null,A.IW,null,A.L,null,null,null,null,null,null,null)
D.fk_=new B.x("Write your book",null,A.cy,null,null,null,null,null,null,null,null,null)
D.fkM=new B.x("Add page",null,A.cj,null,null,null,null,null,null,null,null,null)
D.fl0=new B.x("Malipo ya Awamu ya Mahari",null,A.hg,null,null,null,null,null,null,null,null,null)
D.f0I=new B.G(!0,A.c,null,null,null,null,24,A.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.flf=new B.x("Create with AI",null,D.f0I,null,A.L,null,null,null,null,null,null,null)
D.flI=new B.x("Apply look",null,A.i5,null,null,null,null,null,null,null,null,null)
D.f1r=new B.G(!0,A.et,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fmv=new B.x("Type your presentation below",null,D.f1r,null,A.L,null,null,null,null,null,null,null)
D.fmy=new B.x("Tap the code to copy it. Share the code or the QR: the other phone types the code or scans the QR.",null,H.aQb,null,A.L,null,null,null,null,null,null,null)
D.fmA=new B.x("Keep it",null,A.cj,null,null,null,null,null,null,null,null,null)
D.eXt=new B.G(!0,A.cr,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fmH=new B.x("Done",null,D.eXt,null,null,null,null,null,null,null,null,null)
D.fn1=new B.x("Delete",null,A.ns,null,null,null,null,null,null,null,null,null)
D.fna=new B.x("Hati ya Kiapo cha Uongozi",null,A.hg,null,null,null,null,null,null,null,null,null)
D.f_E=new B.G(!0,A.aR,null,null,null,null,13,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fo2=new B.x("Write your idea in any language \u2014 the AI makes the slides.",null,D.f_E,null,A.L,null,null,null,null,null,null,null)
D.foo=new B.x("Anza upya (hati mpya)",null,null,null,null,null,null,null,null,null,null,null)
D.fov=new B.x("Layout",null,A.Tx,null,null,null,null,null,null,null,null,null)
D.fp7=new B.x("Print",null,A.cy,null,null,null,null,null,null,null,null,null)
D.fpc=new B.x("X",null,A.rH,null,null,null,null,null,null,null,null,null)
D.fpM=new B.x("Your logo goes on every slide and your pictures replace stock photos. The ring button also has the ending celebrations.",null,Aa.IT,null,null,null,null,null,null,null,null,null)
D.fqj=new B.x("Use the whole picture",null,null,null,null,null,null,null,null,null,null,null)
D.fqv=new B.x("Hati ya Kuhowa",null,A.hg,null,null,null,null,null,null,null,null,null)
D.fqx=new B.x("Choose a class template",null,A.hg,null,null,null,null,null,null,null,null,null)
D.fqz=new B.x("Drag the picture to move it. Pinch or use the slider to zoom.",null,A.hf,null,null,null,null,null,null,null,null,null)
D.fqF=new B.x("Download the newspaper picture",null,A.cy,null,null,null,null,null,null,null,null,null)
D.fqR=new B.x("Print view",null,null,null,null,null,null,null,null,null,null,null)
D.fqY=new B.x("Done",null,A.aPY,null,null,null,null,null,null,null,null,null)
D.fr7=new B.x("Ending celebration",null,A.dl,null,null,null,null,null,null,null,null,null)
D.fr8=new B.x("Delete element",null,null,null,null,null,null,null,null,null,null,null)
D.frn=new B.x("Plays after your last slide. Tap one to watch it and change its words or logo.",null,Aa.IN,null,null,null,null,null,null,null,null,null)
D.fsk=new B.x("Export presentation",null,A.dm,null,null,null,null,null,null,null,null,null)
D.fsl=new B.x("What would you like to do?",null,D.aPk,null,null,null,null,null,null,null,null,null)
D.fsp=new B.x("Delete",null,A.cy,null,null,null,null,null,null,null,null,null)
D.fsV=new B.x("Your 4-hour marriage document session has ended. Pay again to keep editing.",null,null,null,null,null,null,null,null,null,null,null)
D.fsZ=new B.x("Hati (Documents)",null,A.hg,null,null,null,null,null,null,null,null,null)
D.ftb=new B.x("Done",null,A.l2,null,null,null,null,null,null,null,null,null)
D.f7n=new B.G(!0,A.c,null,null,null,null,18,A.H,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftg=new B.x("Delete presentation?",null,D.f7n,null,A.L,null,null,null,null,null,null,null)
D.ftx=new B.x("After the last slide it starts again from the first",null,A.hf,null,null,null,null,null,null,null,null,null)
D.ftI=new B.x("\ud83c\udf33",null,A.IR,null,A.L,null,null,null,null,null,null,null)
D.fu_=new B.x("Plays big after your last slide. Tap one to watch it, change the words or add your logo.",null,A.hf,null,null,null,null,null,null,null,null,null)
D.fu6=new B.x("Transfer document",null,A.p6,null,null,null,null,null,null,null,null,null)
D.fuh=new B.x("Add to the slides",null,A.hq,null,null,null,null,null,null,null,null,null)
D.fuE=new B.x("Endelea",null,null,null,null,null,null,null,null,null,null,null)
D.fuT=new B.x("Make a book",null,I.aOU,null,null,null,null,null,null,null,null,null)
D.fuX=new B.x("Books",null,A.cy,null,null,null,null,null,null,null,null,null)
D.f0b=new B.G(!0,A.ak,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fuY=new B.x("Keep this page open until it finishes.",null,D.f0b,null,null,null,null,null,null,null,null,null)
D.fv0=new B.x("Making your video",null,A.dl,null,null,null,null,null,null,null,null,null)
D.fv5=new B.x("LANGUAGE",null,D.Tp,null,null,null,null,null,null,null,null,null)
D.fvc=new B.x("Use this ending",null,A.cy,null,null,null,null,null,null,null,null,null)
D.fvk=new B.x("Scan presentation QR",null,null,null,null,null,null,null,null,null,null,null)
D.fvl=new B.x("Upload a different logo",null,A.cj,null,null,null,null,null,null,null,null,null)
D.fvB=new B.x("Delete from the database?",null,A.ky,null,null,null,null,null,null,null,null,null)
D.fvC=new B.x("H",null,A.rH,null,null,null,null,null,null,null,null,null)
D.fw_=new B.x("NGMY Quotes",null,A.dl,null,null,null,null,null,null,null,null,null)
D.fwr=new B.x("Cover",null,D.aQ8,null,null,null,null,null,null,null,null,null)
D.fwv=new B.x("Hati iliyopo ya jimbo hili itabadilishwa.",null,null,null,null,null,null,null,null,null,null,null)
D.fww=new B.x("Each page becomes its own slide you can present",null,A.hf,null,null,null,null,null,null,null,null,null)
D.fwT=new B.x("Y",null,A.rH,null,null,null,null,null,null,null,null,null)
D.fx3=new B.x("Crop the picture",null,A.l2,null,null,null,null,null,null,null,null,null)
D.fx9=new B.x("Edit text",null,A.IS,null,null,null,null,null,null,null,null,null)
D.fzn=B.dR("a80")
D.Dp=new C.aws(0,"none")
D.aT3=new C.aws(1,"zipCrypto")
D.aT4=new C.aws(2,"aes")
D.fNF=new F.P4("","",null)
D.fOL=new C.bbE(null)
D.fPS=new C.Zc(null)
D.fRr=new C.acU(null)
D.fRt=new C.aDE(null)
D.fUe=new C.a_r(null)
D.fUv=new C.a_Y(null)
D.fUO=new C.btf(null)})();(function staticFields(){$.hbg=null
$.hbh=null
$.hbi=null
$.hbj=null
$.fUm=B.uZ("_lastQuoRemDigits")
$.fUn=B.uZ("_lastQuoRemUsed")
$.awO=B.uZ("_lastRemUsed")
$.fUo=B.uZ("_lastRem_nsh")
$.q1=B.a([4294967295,2147483647,1073741823,536870911,268435455,134217727,67108863,33554431,16777215,8388607,4194303,2097151,1048575,524287,262143,131071,65535,32767,16383,8191,4095,2047,1023,511,255,127,63,31,15,7,3,1,0],x.t)
$.a6Q=B.T(x.N,x.I)
$.fRR=!1
$.hg3=B.T(B.ax("kQ"),x.N)
$.hgg=B.T(B.ax("kQ"),x.E)
$.heg=!1
$.byT="q"
$.Q1=0
$.Co=B.T(x.N,B.ax("ai<zh>"))
$.heD=!1
$.fVX=!1
$.hkT=null
$.hP2=B.T(x.N,B.ax("az<n?>"))
$.K6=""
$.iZ=0
$.h81=function(){var w=x.N
return B.T(w,w)}()
$.h80=B.T(x.N,x.R)
$.fWh=!1
$.afC=B.T(x.N,x.E)
$.fX4=0
$.bjJ=!1})();(function lazyInitializers(){var w=a.lazyFinal
w($,"idc","CK",()=>C.b99(0))
w($,"ida","a2c",()=>C.b99(1))
w($,"idb","hot",()=>C.b99(2))
w($,"id9","h_R",()=>$.a2c().uU(0))
w($,"id7","hor",()=>C.b99(1e4))
w($,"id8","hos",()=>B.DX(8))
w($,"i9_","hmu",()=>B.DX(0))
w($,"i97","hmy",()=>B.DX(0))
w($,"i96","hmx",()=>B.bXy(0))
w($,"igS","hqt",()=>{var v,u,t=x.N
t=B.T(t,t)
for(v=D.a3j.gdK(D.a3j),v=v.gaf(v);v.C();){u=v.gT(v)
t.n(0,u.b,u.a)}return t})
w($,"ihi","bDp",()=>{var v="Corporate",u=4280171146,t=4294967295,s=4280640491,r=4279080072,q="Modern",p="Bold",o=4278190080,n=4280472558,m=4279179050,l=4284773515,k=4287874557,j=4293548044,i=4279548070,h=x.O
return B.a([C.mR(new C.fCL(),v,"biz_plan_blue","Business Plan",B.a([B.b0(u),B.b0(t)],h)),C.mR(new C.fCM(),v,"exec_summary","Executive",B.a([B.b0(s),B.b0(t)],h)),C.mR(new C.fCN(),v,"teal_corporate","Teal Corp",B.a([B.b0(r),B.b0(4279310375)],h)),C.mR(new C.fCY(),q,"geometric_overlap","Geometric",B.a([B.b0(4279203438),B.b0(u)],h)),C.mR(new C.fD2(),p,"midnight_cyan","Midnight Cyan",B.a([B.b0(o),B.b0(n)],h)),C.mR(new C.fD3(),q,"diagonal_hero","Diagonal Hero",B.a([B.b0(m),B.b0(l)],h)),C.mR(new C.fD4(),v,"swot_grid","SWOT Grid",B.a([B.b0(u),B.b0(4278556265)],h)),C.mR(new C.fD5(),v,"layered_chevrons","Chevrons",B.a([B.b0(4280172719),B.b0(k)],h)),C.mR(new C.fD6(),q,"split_triangle","Split Panel",B.a([B.b0(s),B.b0(t)],h)),C.mR(new C.fD7(),v,"corporate_navy","Navy Pro",B.a([B.b0(4278982953),B.b0(4282090230)],h)),C.mR(new C.fD8(),p,"cyan_slash","Cyan Slash",B.a([B.b0(o),B.b0(4278630100)],h)),C.mR(new C.fCO(),p,"crimson_impact","Crimson",B.a([B.b0(4282714634),B.b0(4292617766)],h)),C.mR(new C.fCP(),q,"ocean_waves","Ocean Waves",B.a([B.b0(4278413729),B.b0(4286436348)],h)),C.mR(new C.fCQ(),p,"mono_geometric","Mono Geo",B.a([B.b0(o),B.b0(n)],h)),C.mR(new C.fCR(),"Luxury","luxury_gold","Gold Luxe",B.a([B.b0(4280031511),B.b0(4293571336)],h)),C.mR(new C.fCS(),q,"hex_infographic","Hex Stack",B.a([B.b0(r),B.b0(4284410580)],h)),C.mR(new C.fCT(),q,"photo_banner","Photo Banner",B.a([B.b0(m),B.b0(4281908728)],h)),C.mR(new C.fCU(),v,"process_steps","Process",B.a([B.b0(s),B.b0(k)],h)),C.mR(new C.fCV(),"Minimal","grid_modern","Grid Modern",B.a([B.b0(l),B.b0(t)],h)),C.mR(new C.fCW(),"Luxury","platinum_frame","Platinum",B.a([B.b0(4282865001),B.b0(4293060848)],h)),C.mR(new C.fCX(),v,"agenda_cards","Agenda Cards",B.a([B.b0(u),B.b0(4292602622)],h)),C.mR(new C.fCZ(),q,"headline_orange","Headline Orange",B.a([B.b0(j),B.b0(i)],h)),C.mR(new C.fD_(),q,"infographic_teal","Infographic",B.a([B.b0(r),B.b0(j)],h)),C.mR(new C.fD0(),q,"content_year","Year Feature",B.a([B.b0(j),B.b0(t)],h)),C.mR(new C.fD1(),q,"photo_cta","Photo CTA",B.a([B.b0(m),B.b0(i)],h))],B.ax("O<En>"))})
w($,"igV","hqv",()=>B.af("^[A-Z]{2}\\d{3}$",!0,!1,!1,!1))})()};
(a=>{a["q71oF30gofuCVsiJArllqrBpLlo="]=a.current})($__dart_deferred_initializers__);